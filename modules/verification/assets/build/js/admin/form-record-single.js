/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/form-records-page-single/main.js":
/*!************************************************!*\
  !*** ./admin/form-records-page-single/main.js ***!
  \************************************************/
/***/ (() => {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar addAction = wp.hooks.addAction;\naddAction('jet.fb.render.page', 'jet-form-builder/verification', function (page) {\n  var _page$$children = _slicedToArray(page.$children, 1),\n    component = _page$$children[0];\n  component.$store.commit('scope-verification/setActionPromises', {\n    action: 'verify',\n    promise: component.promiseWrapper(function (_ref) {\n      var resolve = _ref.resolve,\n        reject = _ref.reject;\n      component.apiFetch().then(function (response) {\n        resolve(response.message);\n      }).catch(reject);\n    })\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hZG1pbi9mb3JtLXJlY29yZHMtcGFnZS1zaW5nbGUvbWFpbi5qcyIsIm5hbWVzIjpbImFkZEFjdGlvbiIsIndwIiwiaG9va3MiLCJwYWdlIiwiX3BhZ2UkJGNoaWxkcmVuIiwiX3NsaWNlZFRvQXJyYXkiLCIkY2hpbGRyZW4iLCJjb21wb25lbnQiLCIkc3RvcmUiLCJjb21taXQiLCJhY3Rpb24iLCJwcm9taXNlIiwicHJvbWlzZVdyYXBwZXIiLCJfcmVmIiwicmVzb2x2ZSIsInJlamVjdCIsImFwaUZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwibWVzc2FnZSIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItdmVyaWZpY2F0aW9uLy4vYWRtaW4vZm9ybS1yZWNvcmRzLXBhZ2Utc2luZ2xlL21haW4uanM/ZDQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgYWRkQWN0aW9uLFxyXG4gICAgICB9ID0gd3AuaG9va3M7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5yZW5kZXIucGFnZScsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvdmVyaWZpY2F0aW9uJyxcclxuXHRmdW5jdGlvbiAoIHBhZ2UgKSB7XHJcblx0XHRjb25zdCBbIGNvbXBvbmVudCBdID0gcGFnZS4kY2hpbGRyZW47XHJcblxyXG5cdFx0Y29tcG9uZW50LiRzdG9yZS5jb21taXQoXHJcblx0XHRcdCdzY29wZS12ZXJpZmljYXRpb24vc2V0QWN0aW9uUHJvbWlzZXMnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YWN0aW9uOiAndmVyaWZ5JyxcclxuXHRcdFx0XHRwcm9taXNlOiBjb21wb25lbnQucHJvbWlzZVdyYXBwZXIoICggeyByZXNvbHZlLCByZWplY3QgfSApID0+IHtcclxuXHRcdFx0XHRcdGNvbXBvbmVudC5hcGlGZXRjaCgpLnRoZW4oIHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSggcmVzcG9uc2UubWVzc2FnZSApO1xyXG5cdFx0XHRcdFx0fSApLmNhdGNoKCByZWplY3QgKTtcclxuXHRcdFx0XHR9ICksXHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cdH0sXHJcbik7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUNPQSxTQUFTLEdBQ05DLEVBQUUsQ0FBQ0MsS0FBSyxDQURYRixTQUFTO0FBR2hCQSxTQUFTLENBQ1Isb0JBQW9CLEVBQ3BCLCtCQUErQixFQUMvQixVQUFXRyxJQUFJLEVBQUc7RUFDakIsSUFBQUMsZUFBQSxHQUFBQyxjQUFBLENBQXNCRixJQUFJLENBQUNHLFNBQVM7SUFBNUJDLFNBQVMsR0FBQUgsZUFBQTtFQUVqQkcsU0FBUyxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FDdEIsc0NBQXNDLEVBQ3RDO0lBQ0NDLE1BQU0sRUFBRSxRQUFRO0lBQ2hCQyxPQUFPLEVBQUVKLFNBQVMsQ0FBQ0ssY0FBYyxDQUFFLFVBQUFDLElBQUEsRUFBMkI7TUFBQSxJQUF2QkMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87UUFBRUMsTUFBTSxHQUFBRixJQUFBLENBQU5FLE1BQU07TUFDckRSLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFFLFVBQUFDLFFBQVEsRUFBSTtRQUN0Q0osT0FBTyxDQUFFSSxRQUFRLENBQUNDLE9BQVEsQ0FBQztNQUM1QixDQUFFLENBQUMsQ0FBQ0MsS0FBSyxDQUFFTCxNQUFPLENBQUM7SUFDcEIsQ0FBRTtFQUNILENBQ0QsQ0FBQztBQUNGLENBQ0QsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./admin/form-records-page-single/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./admin/form-records-page-single/main.js"]();
/******/ 	
/******/ })()
;