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

/***/ "./frontend/calculated.field/functions.js":
/*!************************************************!*\
  !*** ./frontend/calculated.field/functions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isCalculated\": () => (/* binding */ isCalculated)\n/* harmony export */ });\n/**\r\n * @param node {HTMLElement}\r\n * @returns {boolean}\r\n */\nfunction isCalculated(node) {\n  var _node$parentElement$d, _node$parentElement$d2, _node$parentElement$d3;\n\n  return !!((_node$parentElement$d = (_node$parentElement$d2 = node.parentElement.dataset) === null || _node$parentElement$d2 === void 0 ? void 0 : (_node$parentElement$d3 = _node$parentElement$d2.formula) === null || _node$parentElement$d3 === void 0 ? void 0 : _node$parentElement$d3.length) !== null && _node$parentElement$d !== void 0 ? _node$parentElement$d : '');\n}\n\n\n\n//# sourceURL=webpack:///./frontend/calculated.field/functions.js?");

/***/ }),

/***/ "./frontend/calculated.field/input.js":
/*!********************************************!*\
  !*** ./frontend/calculated.field/input.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/calculated.field/functions.js\");\n\nvar _window$JetFormBuilde = window.JetFormBuilderAbstract,\n    InputData = _window$JetFormBuilde.InputData,\n    CalculatedFormula = _window$JetFormBuilde.CalculatedFormula;\nvar applyFilters = wp.hooks.applyFilters;\n\nfunction CalculatedData() {\n  InputData.call(this);\n  this.formula = '';\n  this.precision = 0;\n  this.sepDecimal = '';\n  this.sepThousands = '';\n  this.visibleValNode = null;\n  this.valueTypeProp = 'number';\n\n  this.isSupported = function (node) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);\n  };\n\n  this.setValue = function () {\n    var _this = this;\n\n    var formula = new CalculatedFormula(this.formula, this.root);\n\n    formula.setResult = function () {\n      _this.value.current = formula.calculate();\n    };\n\n    formula.relatedCallback = function (input) {\n      var value = applyFilters('jet.fb.calculated.callback', false, input, _this);\n\n      if (false !== value) {\n        return value;\n      }\n\n      return 'number' === _this.valueTypeProp ? input.calcValue : input.value.current;\n    };\n\n    formula.setResult();\n    this.onChange();\n  };\n\n  this.makeReactive = function () {\n    InputData.prototype.makeReactive.call(this); // run signals\n\n    this.value.notify();\n  };\n\n  this.setNode = function (node) {\n    InputData.prototype.setNode.call(this, node);\n    var _node$parentElement$d = node.parentElement.dataset,\n        formula = _node$parentElement$d.formula,\n        precision = _node$parentElement$d.precision,\n        sepDecimal = _node$parentElement$d.sepDecimal,\n        valueType = _node$parentElement$d.valueType;\n    this.formula = formula;\n    this.precision = +precision;\n    this.sepDecimal = sepDecimal;\n    this.visibleValNode = node.nextElementSibling;\n    this.valueTypeProp = valueType;\n  };\n\n  this.addListeners = function () {// silence is golden\n  };\n}\n\nCalculatedData.prototype = Object.create(InputData.prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedData);\n\n//# sourceURL=webpack:///./frontend/calculated.field/input.js?");

/***/ }),

/***/ "./frontend/calculated.field/main.js":
/*!*******************************************!*\
  !*** ./frontend/calculated.field/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./frontend/calculated.field/input.js\");\n/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ \"./frontend/calculated.field/signal.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar addFilter = wp.hooks.addFilter;\naddFilter('jet.fb.inputs', 'jet-form-builder/calculated-field', function (inputs) {\n  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__[\"default\"]].concat(_toConsumableArray(inputs));\n  return inputs;\n});\naddFilter('jet.fb.signals', 'jet-form-builder/calculated-field', function (signals) {\n  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]].concat(_toConsumableArray(signals));\n  return signals;\n});\n\n//# sourceURL=webpack:///./frontend/calculated.field/main.js?");

/***/ }),

/***/ "./frontend/calculated.field/signal.js":
/*!*********************************************!*\
  !*** ./frontend/calculated.field/signal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./frontend/calculated.field/functions.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar BaseSignal = window.JetFormBuilderAbstract.BaseSignal;\n/**\r\n * @property {CalculatedData} input\r\n */\n\nfunction SignalCalculated() {\n  BaseSignal.call(this);\n\n  this.isSupported = function (node, inputData) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);\n  };\n\n  this.runSignal = function () {\n    var _this$input$nodes = _slicedToArray(this.input.nodes, 1),\n        node = _this$input$nodes[0];\n\n    node.value = this.input.value.current;\n    this.input.visibleValNode.textContent = this.convertValue();\n  };\n\n  this.convertValue = function () {\n    var _this$input = this.input,\n        sepThousands = _this$input.sepThousands,\n        sepDecimal = _this$input.sepDecimal,\n        valueTypeProp = _this$input.valueTypeProp,\n        precision = _this$input.precision;\n    var current = this.input.value.current;\n\n    if ('number' !== valueTypeProp) {\n      return current;\n    }\n\n    if (Number.isNaN(Number(current))) {\n      return 0;\n    }\n\n    var parts = Number(current).toFixed(precision).toString().split('.');\n    parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, sepThousands);\n    return parts.join(sepDecimal);\n  };\n}\n\nSignalCalculated.prototype = Object.create(BaseSignal.prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalCalculated);\n\n//# sourceURL=webpack:///./frontend/calculated.field/signal.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/calculated.field/main.js");
/******/ 	
/******/ })()
;