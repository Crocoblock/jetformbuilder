"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_form-actions_getresponse_render_js"],{

/***/ "./editor/form-actions/base-action-component.js":
/*!******************************************************!*\
  !*** ./editor/form-actions/base-action-component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseActionComponent)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar BaseActionComponent = /*#__PURE__*/function (_wp$element$Component) {\n  _inherits(BaseActionComponent, _wp$element$Component);\n\n  var _super = _createSuper(BaseActionComponent);\n\n  function BaseActionComponent() {\n    _classCallCheck(this, BaseActionComponent);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(BaseActionComponent, [{\n    key: \"addPlaceholderForSelect\",\n    value: function addPlaceholderForSelect(array) {\n      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--';\n      return [{\n        label: label\n      }].concat(_toConsumableArray(array));\n    }\n  }, {\n    key: \"onChangeSetting\",\n    value: function onChangeSetting(value, key) {\n      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, key, value)));\n    }\n  }, {\n    key: \"onChangeSettingObj\",\n    value: function onChangeSettingObj(value) {\n      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), value));\n    }\n  }, {\n    key: \"getFieldDefault\",\n    value: function getFieldDefault(name) {\n      var source = 'fields_map';\n      return this.getFieldByName({\n        name: name,\n        source: source\n      });\n    }\n  }, {\n    key: \"getFieldMeta\",\n    value: function getFieldMeta(name) {\n      var source = 'meta_fields_map';\n      return this.getFieldByName({\n        name: name,\n        source: source\n      });\n    }\n  }, {\n    key: \"getFieldByName\",\n    value: function getFieldByName(_ref) {\n      var source = _ref.source,\n          name = _ref.name;\n      var settings = this.props.settings;\n\n      if (typeof settings[source] !== 'undefined' && typeof settings[source][name] !== 'undefined') {\n        return settings[source][name];\n      }\n\n      return '';\n    }\n  }, {\n    key: \"onChangeFieldMap\",\n    value: function onChangeFieldMap(value, nameField) {\n      var source = 'fields_map';\n      this.changeFieldsMap({\n        value: value,\n        nameField: nameField,\n        source: source\n      });\n    }\n  }, {\n    key: \"onChangeMetaFieldMap\",\n    value: function onChangeMetaFieldMap(value, nameField) {\n      var source = 'meta_fields_map';\n      this.changeFieldsMap({\n        value: value,\n        nameField: nameField,\n        source: source\n      });\n    }\n  }, {\n    key: \"changeFieldsMap\",\n    value: function changeFieldsMap(_ref2) {\n      var source = _ref2.source,\n          nameField = _ref2.nameField,\n          value = _ref2.value;\n      var fieldsMap = Object.assign({}, this.props.settings[source], _defineProperty({}, nameField, value));\n      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, source, fieldsMap)));\n    }\n  }]);\n\n  return BaseActionComponent;\n}(wp.element.Component);\n\n\n\n//# sourceURL=webpack:///./editor/form-actions/base-action-component.js?");

/***/ }),

/***/ "./editor/form-actions/getresponse/render.js":
/*!***************************************************!*\
  !*** ./editor/form-actions/getresponse/render.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _integration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../integration-component */ \"./editor/form-actions/integration-component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar _JetFBActions = JetFBActions,\n    addAction = _JetFBActions.addAction,\n    globalTab = _JetFBActions.globalTab;\nvar _JetFBComponents = JetFBComponents,\n    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl;\n/**\r\n * Internal dependencies\r\n */\n\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    ToggleControl = _wp$components.ToggleControl,\n    SelectControl = _wp$components.SelectControl,\n    BaseControl = _wp$components.BaseControl,\n    Button = _wp$components.Button,\n    __experimentalNumberControl = _wp$components.__experimentalNumberControl;\nvar NumberControl = wp.components.NumberControl;\n\nif (typeof NumberControl === 'undefined') {\n  NumberControl = __experimentalNumberControl;\n}\n\nvar __ = wp.i18n.__;\nvar _JetFBHooks = JetFBHooks,\n    withRequestFields = _JetFBHooks.withRequestFields;\nvar withSelect = wp.data.withSelect;\n\nvar GetResponseAction = /*#__PURE__*/function (_IntegrationComponent) {\n  _inherits(GetResponseAction, _IntegrationComponent);\n\n  var _super = _createSuper(GetResponseAction);\n\n  function GetResponseAction(props) {\n    var _this;\n\n    _classCallCheck(this, GetResponseAction);\n\n    _this = _super.call(this, props);\n    _this.formFieldsList = [].concat(_toConsumableArray(_this.formFieldsList), _toConsumableArray(_this.props.requestFields));\n    return _this;\n  }\n\n  _createClass(GetResponseAction, [{\n    key: \"getFields\",\n    value: function getFields() {\n      var settings = this.props.settings;\n\n      if (settings.data && settings.data.fields) {\n        return Object.entries(settings.data.fields);\n      }\n\n      return [];\n    }\n  }, {\n    key: \"getLists\",\n    value: function getLists() {\n      var settings = this.props.settings;\n\n      if (settings.data && settings.data.lists) {\n        return this.formatEntriesArray(settings.data.lists);\n      }\n\n      return [];\n    }\n  }, {\n    key: \"formatEntriesArray\",\n    value: function formatEntriesArray() {\n      var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n      var isNeedPlaceholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var placeholder = {\n        label: '--'\n      };\n\n      if (!entries) {\n        return [];\n      }\n\n      var options = Object.entries(entries).map(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n            value = _ref2[0],\n            label = _ref2[1];\n\n        return {\n          value: value,\n          label: label\n        };\n      });\n      return isNeedPlaceholder ? [placeholder].concat(_toConsumableArray(options)) : options;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          settings = _this$props.settings,\n          onChange = _this$props.onChange,\n          source = _this$props.source,\n          label = _this$props.label,\n          help = _this$props.help;\n      var fields = this.getFields();\n      var currentTab = globalTab({\n        slug: 'get-response-tab'\n      });\n      /* eslint-disable jsx-a11y/no-onchange */\n\n      return wp.element.createElement(React.Fragment, {\n        key: \"getresponse\"\n      }, wp.element.createElement(ToggleControl, {\n        key: 'use_global',\n        label: label('use_global'),\n        checked: settings.use_global,\n        onChange: function onChange(use_global) {\n          _this2.onChangeSetting(Boolean(use_global), 'use_global');\n        }\n      }), wp.element.createElement(BaseControl, {\n        key: 'getresponse_input_key',\n        className: \"input-with-button\"\n      }, wp.element.createElement(TextControl, {\n        key: \"api_key\",\n        label: label('api_key'),\n        disabled: settings.use_global,\n        value: settings.use_global ? currentTab.api_key : settings.api_key,\n        onChange: function onChange(newVal) {\n          return _this2.onChangeSetting(newVal, 'api_key');\n        }\n      }), wp.element.createElement(Button, {\n        key: 'validate_api_key',\n        isPrimary: true,\n        onClick: function onClick() {\n          settings.use_global ? _this2.validateAPIKey(currentTab.api_key) : _this2.validateAPIKey();\n        },\n        className: this.state.className.join(' ') + ' jet-form-validate-button'\n      }, wp.element.createElement(\"i\", {\n        className: \"dashicons\"\n      }), label('validate_api_key'))), wp.element.createElement(\"div\", null), wp.element.createElement(\"div\", {\n        className: \"jfb-margin-bottom--small\"\n      }, help('api_key_link_prefix'), \" \", wp.element.createElement(\"a\", {\n        href: help('api_key_link')\n      }, help('api_key_link_suffix'))), settings.isValidAPI && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {\n        key: \"getresponse_select_lists\",\n        className: \"input-with-button\"\n      }, wp.element.createElement(SelectControl, {\n        key: \"list_id\",\n        className: \"full-width\",\n        label: label('list_id'),\n        labelPosition: \"side\",\n        value: settings.list_id,\n        onChange: function onChange(newVal) {\n          return _this2.onChangeSetting(newVal, 'list_id');\n        },\n        options: this.getLists()\n      }), wp.element.createElement(Button, {\n        key: 'update_list_ids',\n        isPrimary: true,\n        onClick: function onClick() {\n          settings.use_global ? _this2.getApiData(settings.api_key) : _this2.getApiData(currentTab.api_key);\n        }\n      }, label('update_list_ids'))), wp.element.createElement(BaseControl, {\n        key: 'getresponse_day_of_cycle'\n      }, wp.element.createElement(NumberControl, {\n        key: \"day_of_cycle\",\n        label: label('day_of_cycle'),\n        labelPosition: \"side\",\n        value: settings.day_of_cycle,\n        onChange: function onChange(newVal) {\n          return _this2.onChangeSetting(Number(newVal), 'day_of_cycle');\n        }\n      })), wp.element.createElement(BaseControl, {\n        label: label('fields_map'),\n        key: \"getresponse_fields_map\"\n      }, wp.element.createElement(\"div\", {\n        className: \"jet-user-fields-map__list\"\n      }, fields.map(function (_ref3, index) {\n        var _ref4 = _slicedToArray(_ref3, 2),\n            fieldName = _ref4[0],\n            fieldData = _ref4[1];\n\n        return wp.element.createElement(WrapperRequiredControl, {\n          field: [fieldName, fieldData]\n        }, wp.element.createElement(SelectControl, {\n          className: \"full-width\",\n          key: fieldName + index,\n          value: _this2.getFieldDefault(fieldName),\n          onChange: function onChange(value) {\n            return _this2.onChangeFieldMap(value, fieldName);\n          },\n          options: _this2.formFieldsList\n        }));\n      })))));\n      /* eslint-enable jsx-a11y/no-onchange */\n    }\n  }]);\n\n  return GetResponseAction;\n}(_integration_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelect(withRequestFields)(GetResponseAction));\n\n//# sourceURL=webpack:///./editor/form-actions/getresponse/render.js?");

/***/ }),

/***/ "./editor/form-actions/integration-component.js":
/*!******************************************************!*\
  !*** ./editor/form-actions/integration-component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IntegrationComponent)\n/* harmony export */ });\n/* harmony import */ var _base_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-action-component */ \"./editor/form-actions/base-action-component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar _JetFBActions = JetFBActions,\n    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;\n\nvar IntegrationComponent = /*#__PURE__*/function (_BaseActionComponent) {\n  _inherits(IntegrationComponent, _BaseActionComponent);\n\n  var _super = _createSuper(IntegrationComponent);\n\n  function IntegrationComponent(props) {\n    var _this;\n\n    _classCallCheck(this, IntegrationComponent);\n\n    _this = _super.call(this, props);\n    _this.validateAPIKey = _this.validateAPIKey.bind(_assertThisInitialized(_this));\n    _this.getApiData = _this.getApiData.bind(_assertThisInitialized(_this));\n    _this.getLists = _this.getLists.bind(_assertThisInitialized(_this));\n    _this.formFieldsList = getFormFieldsBlocks([], '--');\n    _this.state = {\n      className: [_this.getclassNameValidateButton()]\n    };\n    return _this;\n  }\n\n  _createClass(IntegrationComponent, [{\n    key: \"validateAPIKey\",\n    value: function validateAPIKey() {\n      var customApiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      this.setState({\n        className: ['loading']\n      });\n\n      if (customApiKey && 'string' === typeof customApiKey) {\n        this.getApiData(customApiKey);\n        return;\n      }\n\n      var settings = this.props.settings;\n      this.getApiData(settings.api_key);\n    }\n  }, {\n    key: \"getApiData\",\n    value: function getApiData(apiKey) {\n      var self = this;\n\n      if (!apiKey) {\n        self.onChangeSetting(null, 'isValidAPI');\n        self.setState({\n          className: []\n        });\n        return;\n      }\n\n      jQuery.ajax({\n        url: ajaxurl,\n        type: 'POST',\n        data: {\n          'action': this.props.source.action,\n          'api_key': apiKey\n        },\n        success: function success(response) {\n          if (response.success) {\n            self.onChangeSetting(true, 'isValidAPI');\n            self.onChangeSetting(response.data, 'data');\n            self.setState({\n              className: ['is-valid']\n            });\n          } else {\n            self.onChangeSetting(false, 'isValidAPI');\n            self.setState({\n              className: ['is-invalid']\n            });\n          }\n        },\n        error: function error() {\n          self.onChangeSetting(false, 'isValidAPI');\n          self.setState({\n            className: ['is-invalid']\n          });\n        }\n      });\n    }\n  }, {\n    key: \"getclassNameValidateButton\",\n    value: function getclassNameValidateButton() {\n      var settings = this.props.settings;\n\n      if (true === settings.isValidAPI) {\n        return 'is-valid';\n      } else if (false === settings.isValidAPI) {\n        return 'is-invalid';\n      }\n    }\n  }]);\n\n  return IntegrationComponent;\n}(_base_action_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./editor/form-actions/integration-component.js?");

/***/ })

}]);