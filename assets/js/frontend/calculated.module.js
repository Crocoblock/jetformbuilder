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

/***/ "./frontend/calculated.module/CalculatedFormula.js":
/*!*********************************************************!*\
  !*** ./frontend/calculated.module/CalculatedFormula.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _applyFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyFilters */ \"./frontend/calculated.module/applyFilters.js\");\n/* harmony import */ var _getFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFilters */ \"./frontend/calculated.module/getFilters.js\");\n/* harmony import */ var _attachConstNamespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachConstNamespace */ \"./frontend/calculated.module/attachConstNamespace.js\");\nvar _window$JetFormBuilde, _window, _window$JetFormBuilde2;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/**\r\n * @param formula\r\n * @param root {Observable}\r\n * @constructor\r\n */\n\n\n\nvar _JetFormBuilderAbstra = JetFormBuilderAbstract,\n    InputData = _JetFormBuilderAbstra.InputData;\nvar _wp$hooks = wp.hooks,\n    wpFilters = _wp$hooks.applyFilters,\n    addFilter = _wp$hooks.addFilter;\n\nvar _ref = (_window$JetFormBuilde = (_window = window) === null || _window === void 0 ? void 0 : (_window$JetFormBuilde2 = _window.JetFormBuilderMain) === null || _window$JetFormBuilde2 === void 0 ? void 0 : _window$JetFormBuilde2.filters) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {},\n    _ref$applyFilters = _ref.applyFilters,\n    deprecatedApplyFilters = _ref$applyFilters === void 0 ? false : _ref$applyFilters;\n\naddFilter('jet.fb.custom.formula.macro', 'jet-form-builder', _attachConstNamespace__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/**\r\n * @param formula {String}\r\n * @param root {InputData|Observable}\r\n */\n\nfunction CalculatedFormula(formula, root) {\n  var _this$input$root, _this$input;\n\n  this.formula = formula;\n  this.parts = [];\n  this.related = [];\n  this.relatedAttrs = [];\n\n  if (root instanceof InputData) {\n    this.input = root;\n  }\n\n  this.observe(formula, (_this$input$root = (_this$input = this.input) === null || _this$input === void 0 ? void 0 : _this$input.root) !== null && _this$input$root !== void 0 ? _this$input$root : root);\n}\n\nCalculatedFormula.prototype = {\n  // raw value\n  formula: null,\n  parts: [],\n  related: [],\n  relatedAttrs: [],\n\n  /**\r\n   * @type {InputData}\r\n   */\n  input: null,\n\n  /**\r\n   * @type {Function}\r\n   */\n  setResult: function setResult() {\n    throw new Error('CalculatedFormula.setResult is not set!');\n  },\n\n  /**\r\n   *\r\n   * @param relatedInput {InputData}\r\n   * @return {*}\r\n   */\n  relatedCallback: function relatedCallback(relatedInput) {\n    return relatedInput.value.current;\n  },\n\n  /**\r\n   * @private\r\n   * @param value\r\n   * @param root {Observable}\r\n   */\n  observe: function observe(value, root) {\n    var _this = this;\n\n    if (Array.isArray(value)) {\n      value.forEach(function (item) {\n        _this.observe(item, root);\n      });\n      return;\n    }\n\n    var rawParts = value.split(/%(.*?)%/g);\n\n    if (1 === rawParts.length) {\n      return;\n    }\n\n    this.parts = rawParts.map(function (current) {\n      var _current$split = current.split('|'),\n          _current$split2 = _toArray(_current$split),\n          name = _current$split2[0],\n          filters = _current$split2.slice(1);\n\n      var parsedName = name.match(/[\\w\\-:]+/g);\n\n      if (!parsedName) {\n        return current;\n      }\n\n      var _parsedName = _toArray(parsedName),\n          fieldName = _parsedName[0],\n          params = _parsedName.slice(1);\n\n      var relatedInput = fieldName !== 'this' ? root.getInput(fieldName) : _this.input;\n\n      if (!relatedInput && !fieldName.includes('::')) {\n        return current;\n      }\n\n      var filtersList = (0,_getFilters__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filters);\n\n      if (fieldName.includes('::')) {\n        var customValue = wpFilters('jet.fb.custom.formula.macro', false, fieldName, params, root, _this);\n\n        if (false === customValue) {\n          return current;\n        }\n\n        return (0,_applyFilters__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(customValue, filtersList);\n      }\n\n      if (!_this.related.includes(relatedInput.name)) {\n        _this.related.push(relatedInput.name);\n\n        relatedInput.watch(function () {\n          return _this.setResult();\n        });\n      }\n\n      if (!(params !== null && params !== void 0 && params.length)) {\n        return function () {\n          return (0,_applyFilters__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.relatedCallback(relatedInput), filtersList);\n        };\n      }\n\n      var _params = _slicedToArray(params, 1),\n          attrName = _params[0];\n\n      if (!relatedInput.attrs.hasOwnProperty(attrName)) {\n        return current;\n      }\n      /**\r\n       * @type {BaseHtmlAttr}\r\n       */\n\n\n      var htmlAttr = relatedInput.attrs[attrName];\n\n      if (!_this.relatedAttrs.includes(relatedInput.name + attrName)) {\n        _this.relatedAttrs.push(relatedInput.name + attrName);\n\n        htmlAttr.value.watch(function () {\n          return _this.setResult();\n        });\n      }\n\n      return function () {\n        return (0,_applyFilters__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(htmlAttr.value.current, filtersList);\n      };\n    });\n  },\n  calculateString: function calculateString() {\n    var _this2 = this;\n\n    if (!this.parts.length) {\n      return this.formula;\n    }\n\n    return this.parts.map(function (current) {\n      if ('function' !== typeof current) {\n        var _this2$input;\n\n        if (!((_this2$input = _this2.input) !== null && _this2$input !== void 0 && _this2$input.nodes) || false === deprecatedApplyFilters) {\n          return current;\n        }\n\n        current = wpFilters('jet.fb.onCalculate.part', current, _this2);\n        return deprecatedApplyFilters('forms/calculated-formula-before-value', current, jQuery(_this2.input.nodes[0]));\n      }\n\n      var result = current();\n      return null === result ? 0 : result;\n    }).join('');\n  },\n  calculate: function calculate() {\n    if (!this.parts.length) {\n      return this.formula;\n    }\n\n    var formula = this.calculateString();\n    return new Function('return ' + formula)();\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedFormula);\n\n//# sourceURL=webpack:///./frontend/calculated.module/CalculatedFormula.js?");

/***/ }),

/***/ "./frontend/calculated.module/applyFilters.js":
/*!****************************************************!*\
  !*** ./frontend/calculated.module/applyFilters.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction applyFilters(value, filters) {\n  if (null === filters || !(filters !== null && filters !== void 0 && filters.length)) {\n    return value;\n  }\n\n  var _iterator = _createForOfIteratorHelper(filters),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var filter = _step.value;\n      value = filter.applyWithProps(value);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return value;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyFilters);\n\n//# sourceURL=webpack:///./frontend/calculated.module/applyFilters.js?");

/***/ }),

/***/ "./frontend/calculated.module/attachConstNamespace.js":
/*!************************************************************!*\
  !*** ./frontend/calculated.module/attachConstNamespace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const_namespace_CurrentDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.namespace/CurrentDate */ \"./frontend/calculated.module/const.namespace/CurrentDate.js\");\n/* harmony import */ var _const_namespace_Min_In_Sec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.namespace/Min_In_Sec */ \"./frontend/calculated.module/const.namespace/Min_In_Sec.js\");\n/* harmony import */ var _const_namespace_Month_In_Sec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.namespace/Month_In_Sec */ \"./frontend/calculated.module/const.namespace/Month_In_Sec.js\");\n/* harmony import */ var _const_namespace_Hour_In_Sec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const.namespace/Hour_In_Sec */ \"./frontend/calculated.module/const.namespace/Hour_In_Sec.js\");\n/* harmony import */ var _const_namespace_Day_In_Sec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const.namespace/Day_In_Sec */ \"./frontend/calculated.module/const.namespace/Day_In_Sec.js\");\n/* harmony import */ var _const_namespace_Year_In_Sec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./const.namespace/Year_In_Sec */ \"./frontend/calculated.module/const.namespace/Year_In_Sec.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\nvar wpApplyFilters = wp.hooks.applyFilters;\n\nvar getStaticFunctions = function getStaticFunctions() {\n  return wpApplyFilters('jet.fb.static.functions', [_const_namespace_CurrentDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _const_namespace_Min_In_Sec__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _const_namespace_Month_In_Sec__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _const_namespace_Hour_In_Sec__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _const_namespace_Day_In_Sec__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _const_namespace_Year_In_Sec__WEBPACK_IMPORTED_MODULE_5__[\"default\"]]);\n};\n/**\r\n * @type {BaseInternalMacro[]}\r\n */\n\n\nvar staticFunctions = [];\n/**\r\n * @param slug\r\n * @return {boolean|BaseInternalMacro}\r\n */\n\nfunction getFunction(slug) {\n  if (!staticFunctions.length) {\n    staticFunctions = getStaticFunctions();\n  }\n\n  var _iterator = _createForOfIteratorHelper(staticFunctions),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var staticFunction = _step.value;\n      var current = new staticFunction();\n\n      if (current.getId() !== slug) {\n        continue;\n      }\n\n      return current;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return false;\n}\n/**\r\n * @param result {String}\r\n * @param fieldName {String}\r\n * @param params {String[]}\r\n * @return {*}\r\n */\n\n\nfunction attachConstNamespace(result, fieldName, params) {\n  if (!fieldName.includes('CT::')) {\n    return result;\n  }\n\n  fieldName = fieldName.replace('CT::', '');\n  var staticFunc = getFunction(fieldName);\n\n  if (false === staticFunc) {\n    return result;\n  }\n\n  return staticFunc.getResult();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attachConstNamespace);\n\n//# sourceURL=webpack:///./frontend/calculated.module/attachConstNamespace.js?");

/***/ }),

/***/ "./frontend/calculated.module/const.namespace/BaseInternalMacro.js":
/*!*************************************************************************!*\
  !*** ./frontend/calculated.module/const.namespace/BaseInternalMacro.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction BaseInternalMacro() {}\n\nBaseInternalMacro.prototype = {\n  /**\r\n   * @return {String}\r\n   */\n  getId: function getId() {\n    throw new Error('You need to rewrite this method');\n  },\n  getResult: function getResult() {\n    throw new Error('You need to rewrite this method');\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseInternalMacro);\n\n//# sourceURL=webpack:///./frontend/calculated.module/const.namespace/BaseInternalMacro.js?");

/***/ }),

/***/ "./frontend/calculated.module/const.namespace/CurrentDate.js":
/*!*******************************************************************!*\
  !*** ./frontend/calculated.module/const.namespace/CurrentDate.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ \"./frontend/calculated.module/const.namespace/BaseInternalMacro.js\");\n\n\nfunction CurrentDate() {\n  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getId = function () {\n    return 'CurrentDate';\n  };\n\n  this.getResult = function () {\n    return new Date().getTime();\n  };\n}\n\nCurrentDate.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentDate);\n\n//# sourceURL=webpack:///./frontend/calculated.module/const.namespace/CurrentDate.js?");

/***/ }),

/***/ "./frontend/calculated.module/const.namespace/Day_In_Sec.js":
/*!******************************************************************!*\
  !*** ./frontend/calculated.module/const.namespace/Day_In_Sec.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ \"./frontend/calculated.module/const.namespace/BaseInternalMacro.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./frontend/calculated.module/constants.js\");\n\n\n\nfunction Day_In_Sec() {\n  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getId = function () {\n    return 'Day_In_Sec';\n  };\n\n  this.getResult = function () {\n    return _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Day_In_Sec;\n  };\n}\n\nDay_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Day_In_Sec);\n\n//# sourceURL=webpack:///./frontend/calculated.module/const.namespace/Day_In_Sec.js?");

/***/ }),

/***/ "./frontend/calculated.module/const.namespace/Hour_In_Sec.js":
/*!*******************************************************************!*\
  !*** ./frontend/calculated.module/const.namespace/Hour_In_Sec.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ \"./frontend/calculated.module/const.namespace/BaseInternalMacro.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./frontend/calculated.module/constants.js\");\n\n\n\nfunction Hour_In_Sec() {\n  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getId = function () {\n    return 'Hour_In_Sec';\n  };\n\n  this.getResult = function () {\n    return _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Hour_In_Sec;\n  };\n}\n\nHour_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hour_In_Sec);\n\n//# sourceURL=webpack:///./frontend/calculated.module/const.namespace/Hour_In_Sec.js?");

/***/ }),

/***/ "./frontend/calculated.module/const.namespace/Min_In_Sec.js":
/*!******************************************************************!*\
  !*** ./frontend/calculated.module/const.namespace/Min_In_Sec.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ \"./frontend/calculated.module/const.namespace/BaseInternalMacro.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./frontend/calculated.module/constants.js\");\n\n\n\nfunction Min_In_Sec() {\n  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getId = function () {\n    return 'Min_In_Sec';\n  };\n\n  this.getResult = function () {\n    return _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Min_In_Sec;\n  };\n}\n\nMin_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Min_In_Sec);\n\n//# sourceURL=webpack:///./frontend/calculated.module/const.namespace/Min_In_Sec.js?");

/***/ }),

/***/ "./frontend/calculated.module/const.namespace/Month_In_Sec.js":
/*!********************************************************************!*\
  !*** ./frontend/calculated.module/const.namespace/Month_In_Sec.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ \"./frontend/calculated.module/const.namespace/BaseInternalMacro.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./frontend/calculated.module/constants.js\");\n\n\n\nfunction Month_In_Sec() {\n  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getId = function () {\n    return 'Month_In_Sec';\n  };\n\n  this.getResult = function () {\n    return _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Month_In_Sec;\n  };\n}\n\nMonth_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Month_In_Sec);\n\n//# sourceURL=webpack:///./frontend/calculated.module/const.namespace/Month_In_Sec.js?");

/***/ }),

/***/ "./frontend/calculated.module/const.namespace/Year_In_Sec.js":
/*!*******************************************************************!*\
  !*** ./frontend/calculated.module/const.namespace/Year_In_Sec.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ \"./frontend/calculated.module/const.namespace/BaseInternalMacro.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./frontend/calculated.module/constants.js\");\n\n\n\nfunction Year_In_Sec() {\n  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getId = function () {\n    return 'Year_In_Sec';\n  };\n\n  this.getResult = function () {\n    return _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Year_In_Sec;\n  };\n}\n\nYear_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Year_In_Sec);\n\n//# sourceURL=webpack:///./frontend/calculated.module/const.namespace/Year_In_Sec.js?");

/***/ }),

/***/ "./frontend/calculated.module/constants.js":
/*!*************************************************!*\
  !*** ./frontend/calculated.module/constants.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Constants = {\n  Milli_In_Sec: 1000,\n  Sec_In_Min: 60,\n  Min_In_Hour: 60,\n  Hour_In_Day: 24,\n  Day_In_Month: 30,\n  Year_In_Day: 365,\n  Kb_In_Bytes: 1024\n};\nConstants.Min_In_Sec = Constants.Sec_In_Min * Constants.Milli_In_Sec;\nConstants.Hour_In_Sec = Constants.Min_In_Hour * Constants.Min_In_Sec;\nConstants.Day_In_Sec = Constants.Hour_In_Day * Constants.Hour_In_Sec;\nConstants.Month_In_Sec = Constants.Day_In_Month * Constants.Day_In_Sec;\nConstants.Year_In_Sec = Constants.Year_In_Day * Constants.Day_In_Sec;\nConstants.Mb_In_Bytes = Constants.Kb_In_Bytes * 1024;\nConstants.Gb_In_Bytes = Constants.Mb_In_Bytes * 1024;\nConstants.Tb_In_Bytes = Constants.Gb_In_Bytes * 1024;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Constants);\n\n//# sourceURL=webpack:///./frontend/calculated.module/constants.js?");

/***/ }),

/***/ "./frontend/calculated.module/filters/AddDayFilter.js":
/*!************************************************************!*\
  !*** ./frontend/calculated.module/filters/AddDayFilter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ \"./frontend/calculated.module/filters/Filter.js\");\n\n\nfunction AddDayFilter() {\n  _Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getSlug = function () {\n    return 'addDay';\n  };\n\n  this.apply = function (value, days) {\n    days = days ? +days.trim() : 1;\n    var current = new Date(value);\n    current.setDate(current.getDate() + days);\n    return current.getTime();\n  };\n}\n\nAddDayFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddDayFilter);\n\n//# sourceURL=webpack:///./frontend/calculated.module/filters/AddDayFilter.js?");

/***/ }),

/***/ "./frontend/calculated.module/filters/FallBackFilter.js":
/*!**************************************************************!*\
  !*** ./frontend/calculated.module/filters/FallBackFilter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ \"./frontend/calculated.module/filters/Filter.js\");\n\n\nfunction FallBackFilter() {\n  _Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getSlug = function () {\n    return 'ifEmpty';\n  };\n\n  this.apply = function (value, fallback) {\n    return value ? value : fallback;\n  };\n}\n\nFallBackFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallBackFilter);\n\n//# sourceURL=webpack:///./frontend/calculated.module/filters/FallBackFilter.js?");

/***/ }),

/***/ "./frontend/calculated.module/filters/Filter.js":
/*!******************************************************!*\
  !*** ./frontend/calculated.module/filters/Filter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction Filter() {\n  this.props = [];\n}\n/**\r\n * @return {string}\r\n */\n\n\nFilter.prototype.getSlug = function () {\n  throw new Error('getSlug is empty');\n};\n\nFilter.prototype.setProps = function (props) {\n  var _this$props;\n\n  (_this$props = this.props).push.apply(_this$props, _toConsumableArray(props));\n};\n\nFilter.prototype.applyWithProps = function (value) {\n  return this.apply.apply(this, [value].concat(_toConsumableArray(this.props)));\n};\n/**\r\n * @param value\r\n * @param props\r\n * @return {*}\r\n */\n\n\nFilter.prototype.apply = function (value) {\n  return value;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);\n\n//# sourceURL=webpack:///./frontend/calculated.module/filters/Filter.js?");

/***/ }),

/***/ "./frontend/calculated.module/filters/LengthFilter.js":
/*!************************************************************!*\
  !*** ./frontend/calculated.module/filters/LengthFilter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ \"./frontend/calculated.module/filters/Filter.js\");\n\n\nfunction LengthFilter() {\n  _Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getSlug = function () {\n    return 'length';\n  };\n\n  this.apply = function (value) {\n    var _value$length;\n\n    return (_value$length = value === null || value === void 0 ? void 0 : value.length) !== null && _value$length !== void 0 ? _value$length : 0;\n  };\n}\n\nLengthFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LengthFilter);\n\n//# sourceURL=webpack:///./frontend/calculated.module/filters/LengthFilter.js?");

/***/ }),

/***/ "./frontend/calculated.module/filters/ToDateFilter.js":
/*!************************************************************!*\
  !*** ./frontend/calculated.module/filters/ToDateFilter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ \"./frontend/calculated.module/filters/Filter.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ \"./frontend/calculated.module/functions.js\");\n\n\n\nfunction ToDateFilter() {\n  _Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getSlug = function () {\n    return 'toDate';\n  };\n\n  this.apply = function (value) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toDate)(new Date(value));\n  };\n}\n\nToDateFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDateFilter);\n\n//# sourceURL=webpack:///./frontend/calculated.module/filters/ToDateFilter.js?");

/***/ }),

/***/ "./frontend/calculated.module/filters/ToDateTimeFilter.js":
/*!****************************************************************!*\
  !*** ./frontend/calculated.module/filters/ToDateTimeFilter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ \"./frontend/calculated.module/filters/Filter.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ \"./frontend/calculated.module/functions.js\");\n\n\n\nfunction ToDateTimeFilter() {\n  _Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getSlug = function () {\n    return 'toDateTime';\n  };\n\n  this.apply = function (value) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toDateTime)(new Date(value));\n  };\n}\n\nToDateTimeFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDateTimeFilter);\n\n//# sourceURL=webpack:///./frontend/calculated.module/filters/ToDateTimeFilter.js?");

/***/ }),

/***/ "./frontend/calculated.module/filters/ToTimeFilter.js":
/*!************************************************************!*\
  !*** ./frontend/calculated.module/filters/ToTimeFilter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ \"./frontend/calculated.module/filters/Filter.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ \"./frontend/calculated.module/functions.js\");\n\n\n\nfunction ToTimeFilter() {\n  _Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this);\n\n  this.getSlug = function () {\n    return 'toTime';\n  };\n\n  this.apply = function (value) {\n    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toTime)(new Date(value));\n  };\n}\n\nToTimeFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToTimeFilter);\n\n//# sourceURL=webpack:///./frontend/calculated.module/filters/ToTimeFilter.js?");

/***/ }),

/***/ "./frontend/calculated.module/functions.js":
/*!*************************************************!*\
  !*** ./frontend/calculated.module/functions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTimestamp\": () => (/* binding */ getTimestamp),\n/* harmony export */   \"toDate\": () => (/* binding */ toDate),\n/* harmony export */   \"toDateTime\": () => (/* binding */ toDateTime),\n/* harmony export */   \"toTime\": () => (/* binding */ toTime)\n/* harmony export */ });\nfunction zerofill(number, count) {\n  number = '' + number;\n\n  if (number.length >= count) {\n    return number;\n  }\n\n  var zeros = new Array(count - number.length).fill(0);\n  return zeros + number;\n}\n/**\r\n * @param date {Date}\r\n */\n\n\nfunction toDate(date) {\n  return [date.getFullYear(), zerofill(date.getMonth() + 1, 2), zerofill(date.getDate(), 2)].join('-');\n}\n/**\r\n * @param date {Date}\r\n */\n\n\nfunction toTime(date) {\n  return [zerofill(date.getHours(), 2), zerofill(date.getMinutes(), 2)].join(':');\n}\n\nfunction toDateTime(date) {\n  return toDate(date) + 'T' + toTime(date);\n}\n/**\r\n * @param timeOrDate {String|Number}\r\n * @return {{time: number, type: string}}\r\n */\n\n\nfunction getTimestamp(timeOrDate) {\n  if (!Number.isNaN(+timeOrDate)) {\n    return {\n      time: +timeOrDate,\n      type: 'number'\n    };\n  }\n\n  timeOrDate = timeOrDate.toString();\n  var dateParts = timeOrDate.split('-');\n\n  if (dateParts.length > 1) {\n    var date = new Date(timeOrDate);\n\n    if (!timeOrDate.includes('T')) {\n      date.setHours(0, 0, 0);\n    }\n\n    return {\n      time: date.getTime(),\n      type: 'date'\n    };\n  }\n\n  var timeParts = timeOrDate.split(':');\n  var callbacks = [Date.prototype.setHours, Date.prototype.setMinutes, Date.prototype.setSeconds];\n  var time = new Date();\n\n  for (var index in timeParts) {\n    if (!timeParts.hasOwnProperty(index) || !callbacks.hasOwnProperty(index)) {\n      continue;\n    }\n\n    callbacks[index].call(time, timeParts[index]);\n  }\n\n  return {\n    time: time.getTime(),\n    type: 'time'\n  };\n}\n\n\n\n//# sourceURL=webpack:///./frontend/calculated.module/functions.js?");

/***/ }),

/***/ "./frontend/calculated.module/getFilters.js":
/*!**************************************************!*\
  !*** ./frontend/calculated.module/getFilters.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters_LengthFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters/LengthFilter */ \"./frontend/calculated.module/filters/LengthFilter.js\");\n/* harmony import */ var _filters_FallBackFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters/FallBackFilter */ \"./frontend/calculated.module/filters/FallBackFilter.js\");\n/* harmony import */ var _filters_ToDateFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/ToDateFilter */ \"./frontend/calculated.module/filters/ToDateFilter.js\");\n/* harmony import */ var _filters_ToTimeFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/ToTimeFilter */ \"./frontend/calculated.module/filters/ToTimeFilter.js\");\n/* harmony import */ var _filters_ToDateTimeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/ToDateTimeFilter */ \"./frontend/calculated.module/filters/ToDateTimeFilter.js\");\n/* harmony import */ var _filters_AddDayFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/AddDayFilter */ \"./frontend/calculated.module/filters/AddDayFilter.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\nvar applyFilters = wp.hooks.applyFilters;\n\nvar getFilterItems = function getFilterItems() {\n  return applyFilters('jet.fb.restrictions.filters', [_filters_LengthFilter__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _filters_FallBackFilter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _filters_ToDateFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _filters_ToTimeFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _filters_ToDateTimeFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _filters_AddDayFilter__WEBPACK_IMPORTED_MODULE_5__[\"default\"]]);\n};\n/**\r\n * @type {array<Filter>}\r\n */\n\n\nvar filters = [];\nvar response = [];\n\nfunction pushFilter(name) {\n  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  if (!filters.length) {\n    filters = getFilterItems().map(function (current) {\n      return new current();\n    });\n  }\n\n  var filter = filters.find(function (current) {\n    return name === current.getSlug();\n  });\n\n  if (!filter) {\n    return;\n  }\n\n  props = props.split(',').map(function (item) {\n    return item.trim();\n  });\n  filter.setProps(props);\n  response.push(filter);\n}\n\nfunction getFilters(filtersList) {\n  if (null === filtersList || !(filtersList !== null && filtersList !== void 0 && filtersList.length)) {\n    return null;\n  }\n\n  var _iterator = _createForOfIteratorHelper(filtersList),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var filterName = _step.value;\n      var matches = filterName.match(/^(\\w+)\\(([^()]+)\\)/);\n\n      if (null === matches) {\n        pushFilter(filterName);\n        continue;\n      }\n\n      pushFilter(matches[1], matches[2]);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var tempResponse = _toConsumableArray(response);\n\n  response = [];\n  return tempResponse;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFilters);\n\n//# sourceURL=webpack:///./frontend/calculated.module/getFilters.js?");

/***/ }),

/***/ "./frontend/calculated.module/main.js":
/*!********************************************!*\
  !*** ./frontend/calculated.module/main.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatedFormula */ \"./frontend/calculated.module/CalculatedFormula.js\");\n/* harmony import */ var _const_namespace_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.namespace/BaseInternalMacro */ \"./frontend/calculated.module/const.namespace/BaseInternalMacro.js\");\n/* harmony import */ var _getFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFilters */ \"./frontend/calculated.module/getFilters.js\");\n/* harmony import */ var _applyFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyFilters */ \"./frontend/calculated.module/applyFilters.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions */ \"./frontend/calculated.module/functions.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./frontend/calculated.module/constants.js\");\n/* harmony import */ var _filters_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/Filter */ \"./frontend/calculated.module/filters/Filter.js\");\nvar _window$JetFormBuilde, _window$JetFormBuilde2, _window$JetFormBuilde3;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nwindow.JetFormBuilderAbstract = _objectSpread(_objectSpread({}, (_window$JetFormBuilde = window.JetFormBuilderAbstract) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {}), {}, {\n  Filter: _filters_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  CalculatedFormula: _CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  BaseInternalMacro: _const_namespace_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\nwindow.JetFormBuilderFunctions = _objectSpread(_objectSpread({}, (_window$JetFormBuilde2 = window.JetFormBuilderFunctions) !== null && _window$JetFormBuilde2 !== void 0 ? _window$JetFormBuilde2 : {}), {}, {\n  getFilters: _getFilters__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  applyFilters: _applyFilters__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  toDate: _functions__WEBPACK_IMPORTED_MODULE_4__.toDate,\n  toDateTime: _functions__WEBPACK_IMPORTED_MODULE_4__.toDateTime,\n  toTime: _functions__WEBPACK_IMPORTED_MODULE_4__.toTime,\n  getTimestamp: _functions__WEBPACK_IMPORTED_MODULE_4__.getTimestamp\n});\nwindow.JetFormBuilderConst = _objectSpread(_objectSpread({}, (_window$JetFormBuilde3 = window.JetFormBuilderConst) !== null && _window$JetFormBuilde3 !== void 0 ? _window$JetFormBuilde3 : {}), _constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n//# sourceURL=webpack:///./frontend/calculated.module/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/calculated.module/main.js");
/******/ 	
/******/ })()
;