"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_plugins_validation_render_js"],{

/***/ "./editor/plugins/validation/modal.js":
/*!********************************************!*\
  !*** ./editor/plugins/validation/modal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar _JetFBComponents = JetFBComponents,\n    ActionModalContext = _JetFBComponents.ActionModalContext,\n    ValidationMetaMessage = _JetFBComponents.ValidationMetaMessage;\nvar _JetFBHooks = JetFBHooks,\n    useMetaState = _JetFBHooks.useMetaState,\n    useGroupedValidationMessages = _JetFBHooks.useGroupedValidationMessages;\nvar _wp$element = wp.element,\n    useEffect = _wp$element.useEffect,\n    useState = _wp$element.useState,\n    useContext = _wp$element.useContext;\nvar __ = wp.i18n.__;\n\nfunction ValidationModal() {\n  var _useMetaState = useMetaState('_jf_validation', '{}', []),\n      _useMetaState2 = _slicedToArray(_useMetaState, 2),\n      args = _useMetaState2[0],\n      setArgs = _useMetaState2[1];\n\n  var messages = useGroupedValidationMessages();\n\n  var _useState = useState(function () {\n    var _args$messages;\n\n    return (_args$messages = args.messages) !== null && _args$messages !== void 0 ? _args$messages : {};\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useContext = useContext(ActionModalContext),\n      actionClick = _useContext.actionClick,\n      onRequestClose = _useContext.onRequestClose;\n\n  useEffect(function () {\n    if (actionClick) {\n      setArgs(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          messages: current\n        });\n      });\n    }\n\n    if (null !== actionClick) {\n      onRequestClose();\n    }\n  }, [actionClick]);\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(\"div\", {\n    className: \"jet-fb-validation-messages jet-control-clear-full\"\n  }, messages.map(function (message, index) {\n    return wp.element.createElement(ValidationMetaMessage, {\n      key: 'message_item' + message.id,\n      message: message,\n      messages: current,\n      update: setCurrent,\n      value: current[message.id],\n      className: index !== 0 ? 'jet-control-full' : '',\n      style: index !== 0 ? {} : {\n        paddingBottom: '5px'\n      }\n    });\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvcGx1Z2lucy92YWxpZGF0aW9uL21vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFHVUEsZUFIVjtBQUFBLElBQ09DLGtCQURQLG9CQUNPQSxrQkFEUDtBQUFBLElBRU9DLHFCQUZQLG9CQUVPQSxxQkFGUDtBQUlBLGtCQUdVQyxVQUhWO0FBQUEsSUFDT0MsWUFEUCxlQUNPQSxZQURQO0FBQUEsSUFFT0MsNEJBRlAsZUFFT0EsNEJBRlA7QUFJQSxrQkFJVUMsRUFBRSxDQUFDQyxPQUpiO0FBQUEsSUFDT0MsU0FEUCxlQUNPQSxTQURQO0FBQUEsSUFFT0MsUUFGUCxlQUVPQSxRQUZQO0FBQUEsSUFHT0MsVUFIUCxlQUdPQSxVQUhQO0FBTUEsSUFDT0MsRUFEUCxHQUVVTCxFQUFFLENBQUNNLElBRmIsQ0FDT0QsRUFEUDs7QUFJQSxTQUFTRSxlQUFULEdBQTJCO0VBQzFCLG9CQUEwQlQsWUFBWSxDQUNyQyxnQkFEcUMsRUFDbkIsSUFEbUIsRUFDYixFQURhLENBQXRDO0VBQUE7RUFBQSxJQUFRVSxJQUFSO0VBQUEsSUFBY0MsT0FBZDs7RUFJQSxJQUFNQyxRQUFRLEdBQUdYLDRCQUE0QixFQUE3Qzs7RUFFQSxnQkFBd0NJLFFBQVEsQ0FBRTtJQUFBOztJQUFBLHlCQUNqREssSUFBSSxDQUFDRSxRQUQ0QywyREFDaEMsRUFEZ0M7RUFBQSxDQUFGLENBQWhEO0VBQUE7RUFBQSxJQUFRQyxPQUFSO0VBQUEsSUFBaUJDLFVBQWpCOztFQUdBLGtCQUF3Q1IsVUFBVSxDQUFFVCxrQkFBRixDQUFsRDtFQUFBLElBQVFrQixXQUFSLGVBQVFBLFdBQVI7RUFBQSxJQUFxQkMsY0FBckIsZUFBcUJBLGNBQXJCOztFQUVBWixTQUFTLENBQUUsWUFBTTtJQUNoQixJQUFLVyxXQUFMLEVBQW1CO01BQ2xCSixPQUFPLENBQUUsVUFBQU0sSUFBSTtRQUFBLHVDQUNQQSxJQURPO1VBQ0RMLFFBQVEsRUFBRUM7UUFEVDtNQUFBLENBQU4sQ0FBUDtJQUdBOztJQUVELElBQUssU0FBU0UsV0FBZCxFQUE0QjtNQUMzQkMsY0FBYztJQUNkO0VBQ0QsQ0FWUSxFQVVOLENBQUVELFdBQUYsQ0FWTSxDQUFUO0VBWUEsT0FBTywrQ0FDTjtJQUFLLFNBQVMsRUFBQztFQUFmLEdBQ0dILFFBQVEsQ0FBQ00sR0FBVCxDQUFjLFVBQUVDLE9BQUYsRUFBV0MsS0FBWDtJQUFBLE9BQXNCLHlCQUFDLHFCQUFEO01BQ3JDLEdBQUcsRUFBRyxpQkFBaUJELE9BQU8sQ0FBQ0UsRUFETTtNQUVyQyxPQUFPLEVBQUdGLE9BRjJCO01BR3JDLFFBQVEsRUFBR04sT0FIMEI7TUFJckMsTUFBTSxFQUFHQyxVQUo0QjtNQUtyQyxLQUFLLEVBQUdELE9BQU8sQ0FBRU0sT0FBTyxDQUFDRSxFQUFWLENBTHNCO01BTXJDLFNBQVMsRUFBR0QsS0FBSyxLQUFLLENBQVYsR0FBYyxrQkFBZCxHQUFtQyxFQU5WO01BT3JDLEtBQUssRUFBR0EsS0FBSyxLQUFLLENBQVYsR0FBYyxFQUFkLEdBQW1CO1FBQUVFLGFBQWEsRUFBRTtNQUFqQjtJQVBVLEVBQXRCO0VBQUEsQ0FBZCxDQURILENBRE0sQ0FBUDtBQWFBOztBQUVELGlFQUFlYixlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvdmFsaWRhdGlvbi9tb2RhbC5qcz9mYzdkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuXHQgICAgICBBY3Rpb25Nb2RhbENvbnRleHQsXHJcblx0ICAgICAgVmFsaWRhdGlvbk1ldGFNZXNzYWdlLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlTWV0YVN0YXRlLFxyXG5cdCAgICAgIHVzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXMsXHJcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlRWZmZWN0LFxyXG5cdCAgICAgIHVzZVN0YXRlLFxyXG5cdCAgICAgIHVzZUNvbnRleHQsXHJcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRpb25Nb2RhbCgpIHtcclxuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZU1ldGFTdGF0ZShcclxuXHRcdCdfamZfdmFsaWRhdGlvbicsICd7fScsIFtdLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IG1lc3NhZ2VzID0gdXNlR3JvdXBlZFZhbGlkYXRpb25NZXNzYWdlcygpO1xyXG5cclxuXHRjb25zdCBbIGN1cnJlbnQsIHNldEN1cnJlbnQgXSAgICAgICAgID0gdXNlU3RhdGUoICgpID0+IChcclxuXHRcdGFyZ3MubWVzc2FnZXMgPz8ge31cclxuXHQpICk7XHJcblx0Y29uc3QgeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSA9IHVzZUNvbnRleHQoIEFjdGlvbk1vZGFsQ29udGV4dCApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggYWN0aW9uQ2xpY2sgKSB7XHJcblx0XHRcdHNldEFyZ3MoIHByZXYgPT4gKFxyXG5cdFx0XHRcdHsgLi4ucHJldiwgbWVzc2FnZXM6IGN1cnJlbnQgfVxyXG5cdFx0XHQpICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBudWxsICE9PSBhY3Rpb25DbGljayApIHtcclxuXHRcdFx0b25SZXF1ZXN0Q2xvc2UoKTtcclxuXHRcdH1cclxuXHR9LCBbIGFjdGlvbkNsaWNrIF0gKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mYi12YWxpZGF0aW9uLW1lc3NhZ2VzIGpldC1jb250cm9sLWNsZWFyLWZ1bGxcIj5cclxuXHRcdFx0eyBtZXNzYWdlcy5tYXAoICggbWVzc2FnZSwgaW5kZXggKSA9PiA8VmFsaWRhdGlvbk1ldGFNZXNzYWdlXHJcblx0XHRcdFx0a2V5PXsgJ21lc3NhZ2VfaXRlbScgKyBtZXNzYWdlLmlkIH1cclxuXHRcdFx0XHRtZXNzYWdlPXsgbWVzc2FnZSB9XHJcblx0XHRcdFx0bWVzc2FnZXM9eyBjdXJyZW50IH1cclxuXHRcdFx0XHR1cGRhdGU9eyBzZXRDdXJyZW50IH1cclxuXHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRbIG1lc3NhZ2UuaWQgXSB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXsgaW5kZXggIT09IDAgPyAnamV0LWNvbnRyb2wtZnVsbCcgOiAnJyB9XHJcblx0XHRcdFx0c3R5bGU9eyBpbmRleCAhPT0gMCA/IHt9IDogeyBwYWRkaW5nQm90dG9tOiAnNXB4JyB9IH1cclxuXHRcdFx0Lz4gKSB9XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRpb25Nb2RhbDsiXSwibmFtZXMiOlsiSmV0RkJDb21wb25lbnRzIiwiQWN0aW9uTW9kYWxDb250ZXh0IiwiVmFsaWRhdGlvbk1ldGFNZXNzYWdlIiwiSmV0RkJIb29rcyIsInVzZU1ldGFTdGF0ZSIsInVzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXMiLCJ3cCIsImVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJfXyIsImkxOG4iLCJWYWxpZGF0aW9uTW9kYWwiLCJhcmdzIiwic2V0QXJncyIsIm1lc3NhZ2VzIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJhY3Rpb25DbGljayIsIm9uUmVxdWVzdENsb3NlIiwicHJldiIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImlkIiwicGFkZGluZ0JvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/plugins/validation/modal.js\n");

/***/ }),

/***/ "./editor/plugins/validation/render.js":
/*!*********************************************!*\
  !*** ./editor/plugins/validation/render.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./editor/plugins/validation/modal.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    ToggleControl = _wp$components.ToggleControl,\n    ToggleGroupControl = _wp$components.__experimentalToggleGroupControl,\n    ToggleGroupControlOption = _wp$components.__experimentalToggleGroupControlOption;\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    useState = _wp$element.useState,\n    useEffect = _wp$element.useEffect;\nvar _JetFBHooks = JetFBHooks,\n    useMetaState = _JetFBHooks.useMetaState;\nvar _JetFBComponents = JetFBComponents,\n    ActionModal = _JetFBComponents.ActionModal;\nvar formats = window.jetFormValidation.formats;\n\nfunction ValidationPlugin() {\n  var _args$load_nonce, _validation$type;\n\n  var _useMetaState = useMetaState('_jf_validation'),\n      _useMetaState2 = _slicedToArray(_useMetaState, 2),\n      validation = _useMetaState2[0],\n      setValidation = _useMetaState2[1];\n\n  var _useMetaState3 = useMetaState('_jf_args'),\n      _useMetaState4 = _slicedToArray(_useMetaState3, 2),\n      args = _useMetaState4[0],\n      setArgs = _useMetaState4[1];\n\n  var _useState = useState(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isEditValidation = _useState2[0],\n      setEditValidation = _useState2[1];\n\n  var _useState3 = useState('render' === ((_args$load_nonce = args === null || args === void 0 ? void 0 : args.load_nonce) !== null && _args$load_nonce !== void 0 ? _args$load_nonce : 'render')),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isLoadNonce = _useState4[0],\n      setLoadNonce = _useState4[1];\n\n  useEffect(function () {\n    setArgs(function (prev) {\n      var load_nonce = !isLoadNonce ? 'hide' : 'render';\n      return _objectSpread(_objectSpread({}, prev), {}, {\n        load_nonce: load_nonce\n      });\n    });\n  }, [isLoadNonce]);\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {\n    key: 'load_nonce',\n    label: __('Enable form safety', 'jet-form-builder'),\n    checked: isLoadNonce,\n    help: __(\"Protects the form with a WordPress nonce. Toggle this option off if the form's page's caching can't be disabled\", 'jet-form-builder'),\n    onChange: function onChange() {\n      setLoadNonce(function (prev) {\n        return !prev;\n      });\n    }\n  }), wp.element.createElement(ToggleControl, {\n    key: 'use_csrf',\n    label: __('Enable csrf protection', 'jet-form-builder'),\n    checked: args.use_csrf,\n    onChange: function onChange() {\n      setArgs(function (prev) {\n        var use_csrf = !Boolean(prev.use_csrf);\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          use_csrf: use_csrf\n        });\n      });\n    }\n  }), wp.element.createElement(ToggleGroupControl, {\n    onChange: function onChange(type) {\n      return setValidation(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          type: type\n        });\n      });\n    },\n    value: (_validation$type = validation.type) !== null && _validation$type !== void 0 ? _validation$type : 'browser',\n    label: __('Validation type', 'jet-form-builder'),\n    isBlock: true,\n    isAdaptiveWidth: false\n  }, formats.map(function (current) {\n    return wp.element.createElement(ToggleGroupControlOption, {\n      key: current.value + '_key',\n      label: current.label,\n      value: current.value,\n      \"aria-label\": current.title,\n      showTooltip: true\n    });\n  })), 'advanced' === validation.type && wp.element.createElement(Button, {\n    className: 'jet-fb-button w-100 jc-center',\n    isSecondary: true,\n    isSmall: true,\n    icon: 'edit',\n    onClick: function onClick() {\n      return setEditValidation(true);\n    }\n  }, __('Edit validation messages', 'jet-form-builder')), isEditValidation && wp.element.createElement(ActionModal, {\n    title: 'Edit Manual Options',\n    onRequestClose: function onRequestClose() {\n      return setEditValidation(false);\n    },\n    classNames: ['width-60']\n  }, wp.element.createElement(_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationPlugin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZGVyLmpzP2JjNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZhbGlkYXRpb25Nb2RhbCBmcm9tICcuL21vZGFsJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBCdXR0b24sXHJcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcclxuXHQgICAgICBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbDogVG9nZ2xlR3JvdXBDb250cm9sLFxyXG5cdCAgICAgIF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uOiBUb2dnbGVHcm91cENvbnRyb2xPcHRpb24sXHJcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlU3RhdGUsXHJcblx0ICAgICAgdXNlRWZmZWN0LFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZU1ldGFTdGF0ZSxcclxuICAgICAgfSA9IEpldEZCSG9va3M7XHJcbmNvbnN0IHtcclxuXHQgICAgICBBY3Rpb25Nb2RhbCxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuY29uc3Qge1xyXG5cdCAgICAgIGZvcm1hdHMsXHJcbiAgICAgIH0gPSB3aW5kb3cuamV0Rm9ybVZhbGlkYXRpb247XHJcblxyXG5mdW5jdGlvbiBWYWxpZGF0aW9uUGx1Z2luKCkge1xyXG5cdGNvbnN0IFsgdmFsaWRhdGlvbiwgc2V0VmFsaWRhdGlvbiBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX3ZhbGlkYXRpb24nICk7XHJcblx0Y29uc3QgWyBhcmdzLCBzZXRBcmdzIF0gICAgICAgICAgICAgPSB1c2VNZXRhU3RhdGUoICdfamZfYXJncycgKTtcclxuXHJcblx0Y29uc3QgWyBpc0VkaXRWYWxpZGF0aW9uLCBzZXRFZGl0VmFsaWRhdGlvbiBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblx0Y29uc3QgWyBpc0xvYWROb25jZSwgc2V0TG9hZE5vbmNlIF0gICAgICAgICAgID0gdXNlU3RhdGUoICdyZW5kZXInID09PSAoXHJcblx0XHRhcmdzPy5sb2FkX25vbmNlID8/ICdyZW5kZXInXHJcblx0KSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdHNldEFyZ3MoIHByZXYgPT4ge1xyXG5cdFx0XHRjb25zdCBsb2FkX25vbmNlID0gKFxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAhaXNMb2FkTm9uY2VcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICkgPyAnaGlkZScgOiAncmVuZGVyJztcclxuXHJcblx0XHRcdHJldHVybiB7IC4uLnByZXYsIGxvYWRfbm9uY2UgfTtcclxuXHRcdH0gKTtcclxuXHR9LCBbIGlzTG9hZE5vbmNlIF0gKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRrZXk9eyAnbG9hZF9ub25jZScgfVxyXG5cdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIGZvcm0gc2FmZXR5JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgaXNMb2FkTm9uY2UgfVxyXG5cdFx0XHRoZWxwPXsgX18oXHJcblx0XHRcdFx0YFByb3RlY3RzIHRoZSBmb3JtIHdpdGggYSBXb3JkUHJlc3Mgbm9uY2UuIFRvZ2dsZSB0aGlzIG9wdGlvbiBvZmYgaWYgdGhlIGZvcm0ncyBwYWdlJ3MgY2FjaGluZyBjYW4ndCBiZSBkaXNhYmxlZGAsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRzZXRMb2FkTm9uY2UoIHByZXYgPT4gIXByZXYgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cclxuXHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGtleT17ICd1c2VfY3NyZicgfVxyXG5cdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIGNzcmYgcHJvdGVjdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0Y2hlY2tlZD17IGFyZ3MudXNlX2NzcmYgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRzZXRBcmdzKCBwcmV2ID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZV9jc3JmID0gIUJvb2xlYW4oIHByZXYudXNlX2NzcmYgKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4geyAuLi5wcmV2LCB1c2VfY3NyZiB9O1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFRvZ2dsZUdyb3VwQ29udHJvbFxyXG5cdFx0XHRvbkNoYW5nZT17IHR5cGUgPT4gc2V0VmFsaWRhdGlvbiggcHJldiA9PiAoXHJcblx0XHRcdFx0eyAuLi5wcmV2LCB0eXBlIH1cclxuXHRcdFx0KSApIH1cclxuXHRcdFx0dmFsdWU9eyB2YWxpZGF0aW9uLnR5cGUgPz8gJ2Jyb3dzZXInIH1cclxuXHRcdFx0bGFiZWw9eyBfXyggJ1ZhbGlkYXRpb24gdHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0aXNCbG9jaz17IHRydWUgfVxyXG5cdFx0XHRpc0FkYXB0aXZlV2lkdGg9eyBmYWxzZSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgZm9ybWF0cy5tYXAoXHJcblx0XHRcdFx0Y3VycmVudCA9PiA8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uXHJcblx0XHRcdFx0XHRrZXk9eyBjdXJyZW50LnZhbHVlICsgJ19rZXknIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgY3VycmVudC5sYWJlbCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnQudmFsdWUgfVxyXG5cdFx0XHRcdFx0YXJpYS1sYWJlbD17IGN1cnJlbnQudGl0bGUgfVxyXG5cdFx0XHRcdFx0c2hvd1Rvb2x0aXBcclxuXHRcdFx0XHQvPiApIH1cclxuXHRcdDwvVG9nZ2xlR3JvdXBDb250cm9sPlxyXG5cdFx0eyAnYWR2YW5jZWQnID09PSB2YWxpZGF0aW9uLnR5cGUgJiYgPEJ1dHRvblxyXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiLWJ1dHRvbiB3LTEwMCBqYy1jZW50ZXInIH1cclxuXHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRpY29uPXsgJ2VkaXQnIH1cclxuXHRcdFx0b25DbGljaz17ICgpID0+IHNldEVkaXRWYWxpZGF0aW9uKCB0cnVlICkgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IF9fKCAnRWRpdCB2YWxpZGF0aW9uIG1lc3NhZ2VzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0PC9CdXR0b24+IH1cclxuXHRcdHsgaXNFZGl0VmFsaWRhdGlvbiAmJiA8QWN0aW9uTW9kYWxcclxuXHRcdFx0dGl0bGU9eyAnRWRpdCBNYW51YWwgT3B0aW9ucycgfVxyXG5cdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldEVkaXRWYWxpZGF0aW9uKCBmYWxzZSApIH1cclxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdD5cclxuXHRcdFx0PFZhbGlkYXRpb25Nb2RhbC8+XHJcblx0XHQ8L0FjdGlvbk1vZGFsPiB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uUGx1Z2luOyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uTW9kYWwiLCJ3cCIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJUb2dnbGVDb250cm9sIiwiVG9nZ2xlR3JvdXBDb250cm9sIiwiX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2wiLCJUb2dnbGVHcm91cENvbnRyb2xPcHRpb24iLCJfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbiIsIl9fIiwiaTE4biIsImVsZW1lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkpldEZCSG9va3MiLCJ1c2VNZXRhU3RhdGUiLCJKZXRGQkNvbXBvbmVudHMiLCJBY3Rpb25Nb2RhbCIsImZvcm1hdHMiLCJ3aW5kb3ciLCJqZXRGb3JtVmFsaWRhdGlvbiIsIlZhbGlkYXRpb25QbHVnaW4iLCJ2YWxpZGF0aW9uIiwic2V0VmFsaWRhdGlvbiIsImFyZ3MiLCJzZXRBcmdzIiwiaXNFZGl0VmFsaWRhdGlvbiIsInNldEVkaXRWYWxpZGF0aW9uIiwibG9hZF9ub25jZSIsImlzTG9hZE5vbmNlIiwic2V0TG9hZE5vbmNlIiwicHJldiIsInVzZV9jc3JmIiwiQm9vbGVhbiIsInR5cGUiLCJtYXAiLCJjdXJyZW50IiwidmFsdWUiLCJsYWJlbCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./editor/plugins/validation/render.js\n");

/***/ })

}]);