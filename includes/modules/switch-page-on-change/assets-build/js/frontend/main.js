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

/***/ "./frontend/main.js":
/*!**************************!*\
  !*** ./frontend/main.js ***!
  \**************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar addAction = JetPlugins.hooks.addAction;\naddAction('jet.fb.multistep.page.init', 'jet-form-builder/switch-page-on-change',\n/**\r\n * @param page {PageState}\r\n */\nfunction (page) {\n  var wrappers = page.node.querySelectorAll('.jet-fb-switch-page-on-change');\n  if (!wrappers) {\n    return;\n  }\n  var _iterator = _createForOfIteratorHelper(wrappers),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _node;\n      var wrapper = _step.value;\n      var node = wrapper;\n      if (!wrapper.hasOwnProperty('jfbSync')) {\n        node = wrapper.querySelector('input, select');\n      }\n      if (!((_node = node) !== null && _node !== void 0 && _node.jfbSync) || !page.isNodeBelongThis(node)) {\n        continue;\n      }\n      node.jfbSync.watch(function () {\n        page.changePage(false).then(function () {}).catch(function () {});\n      });\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9tYWluLmpzLmpzIiwibmFtZXMiOlsiYWRkQWN0aW9uIiwiSmV0UGx1Z2lucyIsImhvb2tzIiwicGFnZSIsIndyYXBwZXJzIiwibm9kZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX25vZGUiLCJ3cmFwcGVyIiwidmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsInF1ZXJ5U2VsZWN0b3IiLCJqZmJTeW5jIiwiaXNOb2RlQmVsb25nVGhpcyIsIndhdGNoIiwiY2hhbmdlUGFnZSIsInRoZW4iLCJjYXRjaCIsImVyciIsImUiLCJmIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItc3dpdGNoLXBhZ2Utb24tY2hhbmdlLy4vZnJvbnRlbmQvbWFpbi5qcz85M2I3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIubXVsdGlzdGVwLnBhZ2UuaW5pdCcsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvc3dpdGNoLXBhZ2Utb24tY2hhbmdlJyxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gcGFnZSB7UGFnZVN0YXRlfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uICggcGFnZSApIHtcclxuXHRcdGNvbnN0IHdyYXBwZXJzID0gcGFnZS5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdCcuamV0LWZiLXN3aXRjaC1wYWdlLW9uLWNoYW5nZScsXHJcblx0XHQpO1xyXG5cdFx0aWYgKCAhd3JhcHBlcnMgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGZvciAoIGNvbnN0IHdyYXBwZXIgb2Ygd3JhcHBlcnMgKSB7XHJcblx0XHRcdGxldCBub2RlID0gd3JhcHBlcjtcclxuXHJcblx0XHRcdGlmICggIXdyYXBwZXIuaGFzT3duUHJvcGVydHkoICdqZmJTeW5jJyApICkge1xyXG5cdFx0XHRcdG5vZGUgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoICdpbnB1dCwgc2VsZWN0JyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICFub2RlPy5qZmJTeW5jIHx8ICFwYWdlLmlzTm9kZUJlbG9uZ1RoaXMoIG5vZGUgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRub2RlLmpmYlN5bmMud2F0Y2goICgpID0+IHtcclxuXHRcdFx0XHRwYWdlLmNoYW5nZVBhZ2UoIGZhbHNlICkudGhlbiggKCkgPT4ge30gKS5jYXRjaCggKCkgPT4ge30gKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0sXHJcbik7Il0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFRQSxTQUFTLEdBQUtDLFVBQVUsQ0FBQ0MsS0FBSyxDQUE5QkYsU0FBUztBQUVqQkEsU0FBUyxDQUNSLDRCQUE0QixFQUM1Qix3Q0FBd0M7QUFDeEM7QUFDRDtBQUNBO0FBQ0MsVUFBV0csSUFBSSxFQUFHO0VBQ2pCLElBQU1DLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxJQUFJLENBQUNDLGdCQUFnQixDQUMxQywrQkFDRCxDQUFDO0VBQ0QsSUFBSyxDQUFDRixRQUFRLEVBQUc7SUFDaEI7RUFDRDtFQUFDLElBQUFHLFNBQUEsR0FBQUMsMEJBQUEsQ0FDc0JKLFFBQVE7SUFBQUssS0FBQTtFQUFBO0lBQS9CLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQWtDO01BQUEsSUFBQUMsS0FBQTtNQUFBLElBQXRCQyxPQUFPLEdBQUFMLEtBQUEsQ0FBQU0sS0FBQTtNQUNsQixJQUFJVixJQUFJLEdBQUdTLE9BQU87TUFFbEIsSUFBSyxDQUFDQSxPQUFPLENBQUNFLGNBQWMsQ0FBRSxTQUFVLENBQUMsRUFBRztRQUMzQ1gsSUFBSSxHQUFHUyxPQUFPLENBQUNHLGFBQWEsQ0FBRSxlQUFnQixDQUFDO01BQ2hEO01BRUEsSUFBSyxHQUFBSixLQUFBLEdBQUNSLElBQUksY0FBQVEsS0FBQSxlQUFKQSxLQUFBLENBQU1LLE9BQU8sS0FBSSxDQUFDZixJQUFJLENBQUNnQixnQkFBZ0IsQ0FBRWQsSUFBSyxDQUFDLEVBQUc7UUFDdkQ7TUFDRDtNQUNBQSxJQUFJLENBQUNhLE9BQU8sQ0FBQ0UsS0FBSyxDQUFFLFlBQU07UUFDekJqQixJQUFJLENBQUNrQixVQUFVLENBQUUsS0FBTSxDQUFDLENBQUNDLElBQUksQ0FBRSxZQUFNLENBQUMsQ0FBRSxDQUFDLENBQUNDLEtBQUssQ0FBRSxZQUFNLENBQUMsQ0FBRSxDQUFDO01BQzVELENBQUUsQ0FBQztJQUNKO0VBQUMsU0FBQUMsR0FBQTtJQUFBakIsU0FBQSxDQUFBa0IsQ0FBQSxDQUFBRCxHQUFBO0VBQUE7SUFBQWpCLFNBQUEsQ0FBQW1CLENBQUE7RUFBQTtBQUNGLENBQ0QsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./frontend/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./frontend/main.js"]();
/******/ 	
/******/ })()
;