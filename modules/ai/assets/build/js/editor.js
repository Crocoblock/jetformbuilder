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

/***/ "./components/GenerateFormModal.js":
/*!*****************************************!*\
  !*** ./components/GenerateFormModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar _wp$components = wp.components,\n  Modal = _wp$components.Modal,\n  TextareaControl = _wp$components.TextareaControl,\n  Button = _wp$components.Button;\nvar useState = wp.element.useState;\nvar __ = wp.i18n.__;\nfunction GenerateFormModal(_ref) {\n  var setShowModal = _ref.setShowModal;\n  var _useState = useState(''),\n    _useState2 = _slicedToArray(_useState, 2),\n    query = _useState2[0],\n    setQuery = _useState2[1];\n  return wp.element.createElement(Modal, {\n    style: {\n      width: '60vw'\n    },\n    onRequestClose: function onRequestClose() {\n      return setShowModal(false);\n    },\n    title: __('Generate Form with AI', 'jet-form-builder')\n  }, wp.element.createElement(TextareaControl, {\n    label: __('Describe the form you want', 'jet-form-builder'),\n    value: query,\n    onChange: setQuery\n  }), wp.element.createElement(Button, {\n    variant: \"primary\"\n  }, __('Generate', 'jet-form-builder')));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenerateFormModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dlbmVyYXRlRm9ybU1vZGFsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxjQUFBLEdBSVVDLEVBQUUsQ0FBQ0MsVUFBVTtFQUhoQkMsS0FBSyxHQUFBSCxjQUFBLENBQUxHLEtBQUs7RUFDTEMsZUFBZSxHQUFBSixjQUFBLENBQWZJLGVBQWU7RUFDZkMsTUFBTSxHQUFBTCxjQUFBLENBQU5LLE1BQU07QUFHYixJQUNPQyxRQUFRLEdBQ0xMLEVBQUUsQ0FBQ00sT0FBTyxDQURiRCxRQUFRO0FBR2YsSUFDT0UsRUFBRSxHQUNDUCxFQUFFLENBQUNRLElBQUksQ0FEVkQsRUFBRTtBQUdULFNBQVNFLGlCQUFpQkEsQ0FBQUMsSUFBQSxFQUFxQjtFQUFBLElBQWpCQyxZQUFZLEdBQUFELElBQUEsQ0FBWkMsWUFBWTtFQUN6QyxJQUFBQyxTQUFBLEdBQTRCUCxRQUFRLENBQUUsRUFBRyxDQUFDO0lBQUFRLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWxDRyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBRXZCLE9BQU9iLEVBQUEsQ0FBQU0sT0FBQSxDQUFBVyxhQUFBLENBQUNmLEtBQUs7SUFDWmdCLEtBQUssRUFBRztNQUNQQyxLQUFLLEVBQUU7SUFDUixDQUFHO0lBQ0hDLGNBQWMsRUFBRyxTQUFBQSxlQUFBO01BQUEsT0FBTVQsWUFBWSxDQUFFLEtBQU0sQ0FBQztJQUFBLENBQUU7SUFDOUNVLEtBQUssRUFBR2QsRUFBRSxDQUFFLHVCQUF1QixFQUFFLGtCQUFtQjtFQUFHLEdBRTNEUCxFQUFBLENBQUFNLE9BQUEsQ0FBQVcsYUFBQSxDQUFDZCxlQUFlO0lBQ2ZtQixLQUFLLEVBQUdmLEVBQUUsQ0FBRSw0QkFBNEIsRUFBRSxrQkFBbUIsQ0FBRztJQUNoRWdCLEtBQUssRUFBR1IsS0FBTztJQUNmUyxRQUFRLEVBQUdSO0VBQVUsQ0FDckIsQ0FBQyxFQUNGaEIsRUFBQSxDQUFBTSxPQUFBLENBQUFXLGFBQUEsQ0FBQ2IsTUFBTTtJQUNOcUIsT0FBTyxFQUFDO0VBQVMsR0FFZmxCLEVBQUUsQ0FBRSxVQUFVLEVBQUUsa0JBQW1CLENBQzlCLENBQ0YsQ0FBQztBQUNUO0FBRUEsaUVBQWVFLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1haS8uL2NvbXBvbmVudHMvR2VuZXJhdGVGb3JtTW9kYWwuanM/M2QyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgTW9kYWwsXHJcblx0ICAgICAgVGV4dGFyZWFDb250cm9sLFxyXG5cdCAgICAgIEJ1dHRvbixcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlU3RhdGUsXHJcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIEdlbmVyYXRlRm9ybU1vZGFsKCB7IHNldFNob3dNb2RhbCB9ICkge1xyXG5cdGNvbnN0IFsgcXVlcnksIHNldFF1ZXJ5IF0gPSB1c2VTdGF0ZSggJycgKTtcclxuXHJcblx0cmV0dXJuIDxNb2RhbFxyXG5cdFx0c3R5bGU9eyB7XHJcblx0XHRcdHdpZHRoOiAnNjB2dycsXHJcblx0XHR9IH1cclxuXHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gc2V0U2hvd01vZGFsKCBmYWxzZSApIH1cclxuXHRcdHRpdGxlPXsgX18oICdHZW5lcmF0ZSBGb3JtIHdpdGggQUknLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0PlxyXG5cdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRsYWJlbD17IF9fKCAnRGVzY3JpYmUgdGhlIGZvcm0geW91IHdhbnQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdHZhbHVlPXsgcXVlcnkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHNldFF1ZXJ5IH1cclxuXHRcdC8+XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuXHRcdD5cclxuXHRcdFx0eyBfXyggJ0dlbmVyYXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0PC9CdXR0b24+XHJcblx0PC9Nb2RhbD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRlRm9ybU1vZGFsOyJdLCJuYW1lcyI6WyJfd3AkY29tcG9uZW50cyIsIndwIiwiY29tcG9uZW50cyIsIk1vZGFsIiwiVGV4dGFyZWFDb250cm9sIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJlbGVtZW50IiwiX18iLCJpMThuIiwiR2VuZXJhdGVGb3JtTW9kYWwiLCJfcmVmIiwic2V0U2hvd01vZGFsIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicXVlcnkiLCJzZXRRdWVyeSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwib25SZXF1ZXN0Q2xvc2UiLCJ0aXRsZSIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GenerateFormModal.js\n");

/***/ }),

/***/ "./editor/GenerateFormButton.js":
/*!**************************************!*\
  !*** ./editor/GenerateFormButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_GenerateFormModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/GenerateFormModal */ \"./components/GenerateFormModal.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar Button = wp.components.Button;\nvar useState = wp.element.useState;\nvar __ = wp.i18n.__;\nfunction GenerateFormButton() {\n  var _useState = useState(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    showModal = _useState2[0],\n    setShowModal = _useState2[1];\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(Button, {\n    icon: wp.element.createElement(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      viewBox: \"0 0 24 24\",\n      width: \"24\",\n      height: \"24\",\n      \"aria-hidden\": \"true\",\n      focusable: \"false\"\n    }, wp.element.createElement(\"path\", {\n      d: \"M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z\"\n    })),\n    onClick: function onClick() {\n      return setShowModal(function (prev) {\n        return !prev;\n      });\n    }\n  }, __('Generate Form with AI', 'jet-form-builder')), showModal && wp.element.createElement(_components_GenerateFormModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    setShowModal: setShowModal\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenerateFormButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvR2VuZXJhdGVGb3JtQnV0dG9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdFO0FBRWhFLElBQ09DLE1BQU0sR0FDSEMsRUFBRSxDQUFDQyxVQUFVLENBRGhCRixNQUFNO0FBR2IsSUFDT0csUUFBUSxHQUNMRixFQUFFLENBQUNHLE9BQU8sQ0FEYkQsUUFBUTtBQUdmLElBQ09FLEVBQUUsR0FDQ0osRUFBRSxDQUFDSyxJQUFJLENBRFZELEVBQUU7QUFHVCxTQUFTRSxrQkFBa0JBLENBQUEsRUFBRztFQUM3QixJQUFBQyxTQUFBLEdBQW9DTCxRQUFRLENBQUUsS0FBTSxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdDRyxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsWUFBWSxHQUFBSCxVQUFBO0VBRS9CLE9BQU9SLEVBQUEsQ0FBQUcsT0FBQSxDQUFBUyxhQUFBLENBQUFDLEtBQUEsQ0FBQUMsUUFBQSxRQUNOZCxFQUFBLENBQUFHLE9BQUEsQ0FBQVMsYUFBQSxDQUFDYixNQUFNO0lBQ05nQixJQUFJLEVBQUdmLEVBQUEsQ0FBQUcsT0FBQSxDQUFBUyxhQUFBO01BQUtJLEtBQUssRUFBQyw0QkFBNEI7TUFBQ0MsT0FBTyxFQUFDLFdBQVc7TUFDdERDLEtBQUssRUFBQyxJQUFJO01BQUNDLE1BQU0sRUFBQyxJQUFJO01BQUMsZUFBWSxNQUFNO01BQ3pDQyxTQUFTLEVBQUM7SUFBTyxHQUM1QnBCLEVBQUEsQ0FBQUcsT0FBQSxDQUFBUyxhQUFBO01BQ0hTLENBQUMsRUFBQztJQUFpVixDQUFDLENBQzdVLENBQUc7SUFDUkMsT0FBTyxFQUFHLFNBQUFBLFFBQUE7TUFBQSxPQUFNWCxZQUFZLENBQUUsVUFBQVksSUFBSTtRQUFBLE9BQUksQ0FBQ0EsSUFBSTtNQUFBLENBQUMsQ0FBQztJQUFBO0VBQUUsR0FFN0NuQixFQUFFLENBQUUsdUJBQXVCLEVBQUUsa0JBQW1CLENBQzNDLENBQUMsRUFDUE0sU0FBUyxJQUFJVixFQUFBLENBQUFHLE9BQUEsQ0FBQVMsYUFBQSxDQUFDZCxxRUFBaUI7SUFBQ2EsWUFBWSxFQUFHQTtFQUFjLENBQUMsQ0FDL0QsQ0FBQztBQUNKO0FBRUEsaUVBQWVMLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1haS8uL2VkaXRvci9HZW5lcmF0ZUZvcm1CdXR0b24uanM/MjZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2VuZXJhdGVGb3JtTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9HZW5lcmF0ZUZvcm1Nb2RhbCc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQnV0dG9uLFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VTdGF0ZSxcclxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuZnVuY3Rpb24gR2VuZXJhdGVGb3JtQnV0dG9uKCkge1xyXG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxCdXR0b25cclxuXHRcdFx0aWNvbj17IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG5cdFx0XHQgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG5cdFx0XHQgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG5cdFx0XHRcdDxwYXRoXHJcblx0ZD1cIk0xMS43NzYgNC40NTRhLjI1LjI1IDAgMDEuNDQ4IDBsMi4wNjkgNC4xOTJhLjI1LjI1IDAgMDAuMTg4LjEzN2w0LjYyNi42NzJhLjI1LjI1IDAgMDEuMTM5LjQyNmwtMy4zNDggMy4yNjNhLjI1LjI1IDAgMDAtLjA3Mi4yMjJsLjc5IDQuNjA3YS4yNS4yNSAwIDAxLS4zNjIuMjYzbC00LjEzOC0yLjE3NWEuMjUuMjUgMCAwMC0uMjMyIDBsLTQuMTM4IDIuMTc1YS4yNS4yNSAwIDAxLS4zNjMtLjI2M2wuNzktNC42MDdhLjI1LjI1IDAgMDAtLjA3MS0uMjIyTDQuNzU0IDkuODgxYS4yNS4yNSAwIDAxLjEzOS0uNDI2bDQuNjI2LS42NzJhLjI1LjI1IDAgMDAuMTg4LS4xMzdsMi4wNjktNC4xOTJ6XCIvPlxyXG5cdFx0XHQ8L3N2Zz4gfVxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0U2hvd01vZGFsKCBwcmV2ID0+ICFwcmV2ICkgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IF9fKCAnR2VuZXJhdGUgRm9ybSB3aXRoIEFJJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0PC9CdXR0b24+XHJcblx0XHR7IHNob3dNb2RhbCAmJiA8R2VuZXJhdGVGb3JtTW9kYWwgc2V0U2hvd01vZGFsPXsgc2V0U2hvd01vZGFsIH0vPiB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0ZUZvcm1CdXR0b247Il0sIm5hbWVzIjpbIkdlbmVyYXRlRm9ybU1vZGFsIiwiQnV0dG9uIiwid3AiLCJjb21wb25lbnRzIiwidXNlU3RhdGUiLCJlbGVtZW50IiwiX18iLCJpMThuIiwiR2VuZXJhdGVGb3JtQnV0dG9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiY3JlYXRlRWxlbWVudCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJpY29uIiwieG1sbnMiLCJ2aWV3Qm94Iiwid2lkdGgiLCJoZWlnaHQiLCJmb2N1c2FibGUiLCJkIiwib25DbGljayIsInByZXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./editor/GenerateFormButton.js\n");

/***/ }),

/***/ "./editor/main.js":
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GenerateFormButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerateFormButton */ \"./editor/GenerateFormButton.js\");\n\nvar createRoot = wp.element.createRoot;\nvar subscribe = wp.data.subscribe;\nvar buttonDiv = document.createElement('div');\nbuttonDiv.classList.add('jfb-generate-form-ai-wrapper');\nvar appendButton = function appendButton() {\n  var header = document.querySelector('.edit-post-header-toolbar');\n  if (!header || header.querySelector('.jfb-generate-form-ai-wrapper')) {\n    return null;\n  }\n  header.appendChild(buttonDiv);\n  return null;\n};\nvar mountGenerateFormAIButton = function mountGenerateFormAIButton() {\n  // Render our button.\n  createRoot(buttonDiv).render(wp.element.createElement(_GenerateFormButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n  subscribe(function () {\n    setTimeout(appendButton, 0);\n  });\n};\nwp.domReady(mountGenerateFormAIButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFzRDtBQUV0RCxJQUNPQyxVQUFVLEdBQ1BDLEVBQUUsQ0FBQ0MsT0FBTyxDQURiRixVQUFVO0FBR2pCLElBQ09HLFNBQVMsR0FDTkYsRUFBRSxDQUFDRyxJQUFJLENBRFZELFNBQVM7QUFHaEIsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBRSxLQUFNLENBQUM7QUFDakRGLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUUsOEJBQStCLENBQUM7QUFFekQsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBZTtFQUNoQyxJQUFNQyxNQUFNLEdBQUdMLFFBQVEsQ0FBQ00sYUFBYSxDQUNwQywyQkFDRCxDQUFDO0VBRUQsSUFBSyxDQUFDRCxNQUFNLElBQ1hBLE1BQU0sQ0FBQ0MsYUFBYSxDQUFFLCtCQUFnQyxDQUFDLEVBQ3REO0lBQ0QsT0FBTyxJQUFJO0VBQ1o7RUFFQUQsTUFBTSxDQUFDRSxXQUFXLENBQUVSLFNBQVUsQ0FBQztFQUUvQixPQUFPLElBQUk7QUFDWixDQUFDO0FBRUQsSUFBTVMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QkEsQ0FBQSxFQUFTO0VBQ3ZDO0VBQ0FkLFVBQVUsQ0FBRUssU0FBVSxDQUFDLENBQUNVLE1BQU0sQ0FBRWQsRUFBQSxDQUFBQyxPQUFBLENBQUFLLGFBQUEsQ0FBQ1IsMkRBQWtCLE1BQUMsQ0FBRSxDQUFDO0VBRXZESSxTQUFTLENBQUUsWUFBTTtJQUNoQmEsVUFBVSxDQUFFTixZQUFZLEVBQUUsQ0FBRSxDQUFDO0VBQzlCLENBQUUsQ0FBQztBQUNKLENBQUM7QUFFRFQsRUFBRSxDQUFDZ0IsUUFBUSxDQUFFSCx5QkFBMEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1haS8uL2VkaXRvci9tYWluLmpzPzA5ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdlbmVyYXRlRm9ybUJ1dHRvbiBmcm9tICcuL0dlbmVyYXRlRm9ybUJ1dHRvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgY3JlYXRlUm9vdCxcclxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgc3Vic2NyaWJlLFxyXG4gICAgICB9ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbmJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCAnamZiLWdlbmVyYXRlLWZvcm0tYWktd3JhcHBlcicgKTtcclxuXHJcbmNvbnN0IGFwcGVuZEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5lZGl0LXBvc3QtaGVhZGVyLXRvb2xiYXInLFxyXG5cdCk7XHJcblxyXG5cdGlmICggIWhlYWRlciB8fFxyXG5cdFx0aGVhZGVyLnF1ZXJ5U2VsZWN0b3IoICcuamZiLWdlbmVyYXRlLWZvcm0tYWktd3JhcHBlcicgKVxyXG5cdCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRoZWFkZXIuYXBwZW5kQ2hpbGQoIGJ1dHRvbkRpdiApO1xyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IG1vdW50R2VuZXJhdGVGb3JtQUlCdXR0b24gPSAoKSA9PiB7XHJcblx0Ly8gUmVuZGVyIG91ciBidXR0b24uXHJcblx0Y3JlYXRlUm9vdCggYnV0dG9uRGl2ICkucmVuZGVyKCA8R2VuZXJhdGVGb3JtQnV0dG9uLz4gKTtcclxuXHJcblx0c3Vic2NyaWJlKCAoKSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCBhcHBlbmRCdXR0b24sIDAgKTtcclxuXHR9ICk7XHJcbn07XHJcblxyXG53cC5kb21SZWFkeSggbW91bnRHZW5lcmF0ZUZvcm1BSUJ1dHRvbiApOyJdLCJuYW1lcyI6WyJHZW5lcmF0ZUZvcm1CdXR0b24iLCJjcmVhdGVSb290Iiwid3AiLCJlbGVtZW50Iiwic3Vic2NyaWJlIiwiZGF0YSIsImJ1dHRvbkRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZEJ1dHRvbiIsImhlYWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsIm1vdW50R2VuZXJhdGVGb3JtQUlCdXR0b24iLCJyZW5kZXIiLCJzZXRUaW1lb3V0IiwiZG9tUmVhZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./editor/main.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./editor/main.js");
/******/ 	
/******/ })()
;