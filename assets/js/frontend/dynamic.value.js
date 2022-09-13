/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/dynamic.value/DynamicStaticValue.js":
/*!******************************************************!*\
  !*** ./frontend/dynamic.value/DynamicStaticValue.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _JetFormBuilderAbstra = JetFormBuilderAbstract,\n    CalculatedFormula = _JetFormBuilderAbstra.CalculatedFormula;\n/**\r\n * @param formulaString {String}\r\n * @param input {InputData}\r\n * @constructor\r\n */\n\nfunction DynamicStaticValue(formulaString, input) {\n  var formula = new CalculatedFormula(formulaString, input.root);\n\n  formula.setResult = function () {\n    input.value.current = formula.calculate();\n  };\n\n  formula.setResult();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicStaticValue);\n\n//# sourceURL=webpack:///./frontend/dynamic.value/DynamicStaticValue.js?");

/***/ }),

/***/ "./frontend/dynamic.value/ValueItem.js":
/*!*********************************************!*\
  !*** ./frontend/dynamic.value/ValueItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _JetFormBuilderAbstra = JetFormBuilderAbstract,\n    CalculatedFormula = _JetFormBuilderAbstra.CalculatedFormula,\n    ConditionsList = _JetFormBuilderAbstra.ConditionsList;\n/**\r\n * @param to_set\r\n * @param conditions\r\n * @param input {InputData}\r\n * @constructor\r\n */\n\nfunction ValueItem(_ref, input) {\n  var _this = this;\n\n  var to_set = _ref.to_set,\n      conditions = _ref.conditions;\n  var formula = new CalculatedFormula(to_set, input.root);\n  var list = new ConditionsList(conditions, input.root);\n\n  formula.setResult = function () {\n    _this.to_set = formula.calculate();\n  };\n\n  formula.setResult();\n\n  list.calculate = function () {\n    input.value.current = _this.to_set;\n  };\n\n  list.observe();\n  list.onChangeRelated();\n}\n\nValueItem.prototype = {\n  to_set: ''\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValueItem);\n\n//# sourceURL=webpack:///./frontend/dynamic.value/ValueItem.js?");

/***/ }),

/***/ "./frontend/dynamic.value/createValues.js":
/*!************************************************!*\
  !*** ./frontend/dynamic.value/createValues.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ValueItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueItem */ \"./frontend/dynamic.value/ValueItem.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction createValues(json, input) {\n  var groups = [];\n\n  try {\n    groups = JSON.parse(json);\n  } catch (error) {\n    console.error(error);\n    return;\n  }\n\n  var _iterator = _createForOfIteratorHelper(groups),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var group = _step.value;\n      new _ValueItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](group, input);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createValues);\n\n//# sourceURL=webpack:///./frontend/dynamic.value/createValues.js?");

/***/ }),

/***/ "./frontend/dynamic.value/main.js":
/*!****************************************!*\
  !*** ./frontend/dynamic.value/main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DynamicStaticValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicStaticValue */ \"./frontend/dynamic.value/DynamicStaticValue.js\");\n/* harmony import */ var _createValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createValues */ \"./frontend/dynamic.value/createValues.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar addAction = wp.hooks.addAction;\naddAction('jet.fb.input.onObserve', 'jet-form-builder/dynamic-value',\n/**\r\n * @param input {InputData}\r\n */\nfunction (input) {\n  var _input$nodes = _slicedToArray(input.nodes, 1),\n      node = _input$nodes[0];\n\n  var wrapper = node.closest('.jet-form-builder-row');\n\n  if (wrapper && wrapper.dataset.hasOwnProperty('value')) {\n    (0,_createValues__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(wrapper.dataset.value, input);\n    return;\n  }\n\n  if (node.dataset.hasOwnProperty('value')) {\n    new _DynamicStaticValue__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node.dataset.value, input);\n  }\n});\n\n//# sourceURL=webpack:///./frontend/dynamic.value/main.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/dynamic.value/main.js");
/******/ 	
/******/ })()
;