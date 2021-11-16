/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/blocks/controls/fields-map.js":
/*!**********************************************!*\
  !*** ./editor/blocks/controls/fields-map.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Internal dependencies
 */
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;

var JetFieldsMapControl = /*#__PURE__*/function (_wp$element$Component) {
  _inherits(JetFieldsMapControl, _wp$element$Component);

  var _super = _createSuper(JetFieldsMapControl);

  function JetFieldsMapControl(props) {
    var _this;

    _classCallCheck(this, JetFieldsMapControl);

    _this = _super.call(this, props);
    _this.fieldTypes = _this.props.fieldTypes;
    _this.taxonomiesList = _this.props.taxonomiesList;
    _this.className = _this.props.className;
    _this.metaProp = _this.props.metaProp ? _this.props.metaProp : 'post_meta';
    _this.termsProp = _this.props.termsProp ? _this.props.termsProp : 'post_terms';
    _this.index = _this.props.index;

    _this.init();

    _this.bindFunctions();

    _this.state = {
      type: _this.getFieldType(_this.props.fieldValue)
    };
    return _this;
  }

  _createClass(JetFieldsMapControl, [{
    key: "bindFunctions",
    value: function bindFunctions() {
      this.onChangeType = this.onChangeType.bind(this);
      this.onChangeValue = this.onChangeValue.bind(this);
    }
  }, {
    key: "init",
    value: function init() {
      this.id = "inspector-select-control-".concat(this.index);
      this.preparedTaxes = [];
      this.taxPrefix = 'jet_tax__';

      if (!this.taxonomiesList) {
        return;
      }

      for (var i = 0; i < this.taxonomiesList.length; i++) {
        this.preparedTaxes.push({
          value: this.taxPrefix + this.taxonomiesList[i].value,
          label: this.taxonomiesList[i].label
        });
      }
    }
  }, {
    key: "getFieldName",
    value: function getFieldName(value) {
      if (!value) {
        return '';
      }

      var fieldType = this.getFieldType(value);

      if (this.termsProp === fieldType || this.metaProp === fieldType) {
        return value;
      } else {
        return '';
      }
    }
  }, {
    key: "isTermOrMeta",
    value: function isTermOrMeta(value) {
      return this.termsProp === value || this.metaProp === value;
    }
  }, {
    key: "getFieldType",
    value: function getFieldType(value) {
      if (!value) {
        return '';
      }

      for (var i = 0; i < this.fieldTypes.length; i++) {
        if (value === this.fieldTypes[i].value) {
          return value;
        }
      }

      if (value.includes(this.taxPrefix)) {
        return this.termsProp;
      } else {
        return this.metaProp;
      }
    }
  }, {
    key: "onChangeValue",
    value: function onChangeValue(newValue) {
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.fieldsMap), {}, _defineProperty({}, this.props.fieldName, newValue)));
    }
  }, {
    key: "onChangeType",
    value: function onChangeType(newValue) {
      var val = this.getFieldType(newValue);
      this.setState({
        type: val
      });

      if (this.isTermOrMeta(val)) {
        val = '';
      }

      this.onChangeValue(val);
    } // Disable reason: A select with an onchange throws a warning

    /* eslint-disable jsx-a11y/no-onchange */

  }, {
    key: "render",
    value: function render() {
      return wp.element.createElement("div", {
        className: "jet-fields-map__row"
      }, wp.element.createElement("div", {
        className: "jet-post-field-control"
      }, wp.element.createElement(SelectControl, {
        key: 'field_type_' + this.props.fieldName + this.index,
        label: this.props.fieldName,
        labelPosition: "side",
        value: this.state.type,
        onChange: this.onChangeType,
        options: this.fieldTypes,
        style: {
          width: '160px'
        }
      }), this.metaProp === this.state.type && wp.element.createElement(TextControl, {
        key: 'field_name_' + this.props.fieldName + this.index,
        value: this.props.fieldValue,
        onChange: this.onChangeValue,
        style: {
          width: '200px'
        }
      }), this.termsProp === this.state.type && wp.element.createElement(SelectControl, {
        className: "jet-control-without-label",
        key: 'field_tax_' + this.props.fieldName + this.index,
        value: this.props.fieldValue,
        onChange: this.onChangeValue,
        options: this.preparedTaxes,
        style: {
          width: '200px'
        }
      })));
    }
    /* eslint-enable jsx-a11y/no-onchange */

  }]);

  return JetFieldsMapControl;
}(wp.element.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JetFieldsMapControl);

/***/ }),

/***/ "./package/components/action-fields-map.js":
/*!*************************************************!*\
  !*** ./package/components/action-fields-map.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionFieldsMap)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BaseControl = wp.components.BaseControl;
function ActionFieldsMap(_ref) {
  var _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? [] : _ref$fields,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '[Empty label]' : _ref$label,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? function () {} : _ref$children,
      _ref$plainHelp = _ref.plainHelp,
      plainHelp = _ref$plainHelp === void 0 ? '' : _ref$plainHelp,
      _ref$customHelp = _ref.customHelp,
      customHelp = _ref$customHelp === void 0 ? false : _ref$customHelp;
  return wp.element.createElement(BaseControl, {
    label: label,
    key: "jet_fields_map"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, customHelp && 'function' === typeof customHelp && customHelp(), Boolean(plainHelp.length) && wp.element.createElement("span", {
    className: 'description-controls'
  }, plainHelp), fields.map(function (_ref2, index) {
    var _ref3 = _slicedToArray(_ref2, 2),
        fieldId = _ref3[0],
        fieldData = _ref3[1];

    return wp.element.createElement(React.Fragment, {
      key: "field_in_map_".concat(fieldId + index)
    }, children({
      fieldId: fieldId,
      fieldData: fieldData,
      index: index
    }));
  })));
}
;

/***/ }),

/***/ "./package/components/action-modal.js":
/*!********************************************!*\
  !*** ./package/components/action-modal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    Modal = _wp$components.Modal;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function ActionModal(_ref) {
  var onRequestClose = _ref.onRequestClose,
      children = _ref.children,
      title = _ref.title,
      _ref$classNames = _ref.classNames,
      classNames = _ref$classNames === void 0 ? [] : _ref$classNames,
      onUpdateClick = _ref.onUpdateClick,
      onCancelClick = _ref.onCancelClick,
      _ref$updateBtnLabel = _ref.updateBtnLabel,
      updateBtnLabel = _ref$updateBtnLabel === void 0 ? 'Update' : _ref$updateBtnLabel,
      _ref$updateBtnProps = _ref.updateBtnProps,
      updateBtnProps = _ref$updateBtnProps === void 0 ? {} : _ref$updateBtnProps,
      _ref$cancelBtnProps = _ref.cancelBtnProps,
      cancelBtnProps = _ref$cancelBtnProps === void 0 ? {} : _ref$cancelBtnProps,
      _ref$cancelBtnLabel = _ref.cancelBtnLabel,
      cancelBtnLabel = _ref$cancelBtnLabel === void 0 ? 'Cancel' : _ref$cancelBtnLabel,
      _ref$fixedHeight = _ref.fixedHeight,
      fixedHeight = _ref$fixedHeight === void 0 ? '' : _ref$fixedHeight;
  var modalClasses = ['jet-form-edit-modal'].concat(_toConsumableArray(classNames));

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      actionClick = _useState2[0],
      setActionClick = _useState2[1];

  var updateClick = function updateClick() {
    if (onUpdateClick) {
      onUpdateClick();
    }

    setActionClick(true);
  };

  var cancelClick = function cancelClick() {
    if (onCancelClick) {
      onCancelClick();
    }

    setActionClick(false);
  };

  var style = {};

  if (fixedHeight) {
    style = {
      height: fixedHeight
    };
    modalClasses.push('jet-modal-fixed-height');
  }

  return wp.element.createElement(Modal, {
    onRequestClose: onRequestClose,
    className: modalClasses.join(' '),
    title: title,
    style: style
  }, !children && wp.element.createElement("div", {
    className: "jet-form-edit-modal__content"
  }, 'Action callback is not found.'), children && wp.element.createElement("div", {
    className: "jet-form-edit-modal__wrapper"
  }, wp.element.createElement("div", {
    className: "jet-form-edit-modal__content"
  }, 'function' === typeof children && children({
    actionClick: actionClick,
    onRequestClose: onRequestClose
  }), 'function' !== typeof children && children), wp.element.createElement(ButtonGroup, {
    className: "jet-form-edit-modal__actions"
  }, wp.element.createElement(Button, _extends({
    isPrimary: true,
    onClick: updateClick
  }, updateBtnProps), updateBtnLabel), wp.element.createElement(Button, _extends({
    isSecondary: true,
    style: {
      margin: '0 0 0 10px'
    },
    onClick: cancelClick
  }, cancelBtnProps), cancelBtnLabel))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionModal);

/***/ }),

/***/ "./package/components/actions/action-messages.js":
/*!*******************************************************!*\
  !*** ./package/components/actions/action-messages.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    BaseControl = _wp$components.BaseControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var __ = wp.i18n.__;

function ActionMessages(props) {
  var settings = props.settings,
      source = props.source,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      messages = props.messages,
      onChangeSetting = props.onChangeSetting;
  useEffect(function () {
    var oldMessages = settings.messages || {};
    var messages = {};
    Object.entries(source.__messages).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          type = _ref2[0],
          data = _ref2[1];

      if (!oldMessages[type]) {
        messages[type] = data.value;
      }
    });

    if (messages) {
      onChangeSetting(_objectSpread(_objectSpread({}, oldMessages), messages), 'messages');
    }
  }, []);

  var setMessage = function setMessage(value, nameField) {
    var source = 'messages';
    setMapField({
      value: value,
      nameField: nameField,
      source: source
    });
  };

  var getMessage = function getMessage(name) {
    var source = 'messages';
    return getMapField({
      name: name,
      source: source
    });
  };

  return wp.element.createElement(BaseControl, {
    label: __('Messages Settings:'),
    key: "messages_settings_fields"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, settings.messages && Object.entries(settings.messages).map(function (_ref3, id) {
    var _ref4 = _slicedToArray(_ref3, 2),
        type = _ref4[0],
        data = _ref4[1];

    return wp.element.createElement("div", {
      className: "jet-user-meta__row",
      key: 'message_' + type + id
    }, wp.element.createElement(TextControl, {
      key: type + id,
      label: messages(type).label,
      value: getMessage(type),
      onChange: function onChange(newValue) {
        return setMessage(newValue, type);
      }
    }));
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionMessages);

/***/ }),

/***/ "./package/components/actions/placeholder-message.js":
/*!***********************************************************!*\
  !*** ./package/components/actions/placeholder-message.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PlaceholderMessage(_ref) {
  var style = _ref.style,
      children = _ref.children;

  var propStyle = _objectSpread({
    fontSize: '1.5em',
    padding: '2em',
    textAlign: 'center',
    backgroundColor: 'aliceblue'
  }, style);

  return wp.element.createElement("p", {
    style: propStyle
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderMessage);

/***/ }),

/***/ "./package/components/controls/base-help.js":
/*!**************************************************!*\
  !*** ./package/components/controls/base-help.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BaseHelp(_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return wp.element.createElement("p", {
    className: 'jet-fb-base-control__help',
    style: _objectSpread({
      fontSize: '12px',
      fontStyle: 'normal',
      color: 'rgb(117, 117, 117)',
      marginTop: '0px'
    }, style)
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseHelp);

/***/ }),

/***/ "./package/components/fetch-ajax-button.js":
/*!*************************************************!*\
  !*** ./package/components/fetch-ajax-button.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-button */ "./package/components/request-button.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");


var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;

function FetchAjaxButton(_ref) {
  var _ref$initialLabel = _ref.initialLabel,
      initialLabel = _ref$initialLabel === void 0 ? 'Valid' : _ref$initialLabel,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'InValid' : _ref$label,
      _ref$ajaxArgs = _ref.ajaxArgs,
      ajaxArgs = _ref$ajaxArgs === void 0 ? {} : _ref$ajaxArgs,
      loadingState = _ref.loadingState,
      setLoading = _ref.setLoading,
      id = _ref.id,
      setResultSuccess = _ref.setResultSuccess,
      setResultFail = _ref.setResultFail;

  var getLabel = function getLabel() {
    if (-1 === loadingState.id && initialLabel) {
      return initialLabel;
    }

    return label;
  };

  return wp.element.createElement(_request_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    disabled: loadingState.loading,
    ajaxArgs: ajaxArgs,
    label: getLabel(),
    onLoading: function onLoading() {
      setLoading(id);
    },
    onSuccessRequest: function onSuccessRequest(response) {
      setResultSuccess(id, response);
    },
    onFailRequest: function onFailRequest() {
      return setResultFail(id);
    },
    className: loadingState.buttonClassName
  }, wp.element.createElement("i", {
    className: "dashicons"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__.withSelectActionLoading), withDispatch(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__.withDispatchActionLoading))(FetchAjaxButton));

/***/ }),

/***/ "./package/components/fetch-api-button.js":
/*!************************************************!*\
  !*** ./package/components/fetch-api-button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-button */ "./package/components/request-button.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");


var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp = wp,
    apiFetch = _wp.apiFetch;

function FetchAjaxButton(_ref) {
  var _ref$initialLabel = _ref.initialLabel,
      initialLabel = _ref$initialLabel === void 0 ? 'Valid' : _ref$initialLabel,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'InValid' : _ref$label,
      _ref$apiArgs = _ref.apiArgs,
      apiArgs = _ref$apiArgs === void 0 ? {} : _ref$apiArgs,
      loadingState = _ref.loadingState,
      setLoading = _ref.setLoading,
      id = _ref.id,
      setResultSuccess = _ref.setResultSuccess,
      setResultFail = _ref.setResultFail;

  var getLabel = function getLabel() {
    if (-1 === loadingState.id && initialLabel) {
      return initialLabel;
    }

    return label;
  };

  return wp.element.createElement(_request_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    disabled: loadingState.loading,
    label: getLabel(),
    className: loadingState.buttonClassName,
    customRequest: function customRequest() {
      setLoading(id);
      apiFetch(apiArgs).then(function (response) {
        setResultSuccess(id, response);
      }).catch(function () {
        return setResultFail(id);
      });
    }
  }, wp.element.createElement("i", {
    className: "dashicons"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__.withSelectActionLoading), withDispatch(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__.withDispatchActionLoading))(FetchAjaxButton));

/***/ }),

/***/ "./package/components/fields/controls.js":
/*!***********************************************!*\
  !*** ./package/components/fields/controls.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlsSettings": () => (/* binding */ ControlsSettings),
/* harmony export */   "getBlockControls": () => (/* binding */ getBlockControls)
/* harmony export */ });
var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;
var ControlsSettings = function ControlsSettings() {
  return applyFilters('jet.fb.register.fields.controls', {
    "general": {
      label: __('General', 'jet-form-builder'),
      attrs: [{
        "attrName": "label",
        "type": "text",
        "label": __("Field Label", 'jet-form-builder')
      }, {
        "attrName": "name",
        "type": "text",
        "label": __("Form field name", 'jet-form-builder'),
        "help": __("Should contain only Latin letters, numbers, `-` or `_` chars, no spaces only lower case", 'jet-form-builder')
      }, {
        "attrName": "desc",
        "type": "text",
        "label": __("Field Description", 'jet-form-builder')
      }, {
        "attrName": "default",
        "type": "dynamic_text",
        "label": __("Default Value", 'jet-form-builder')
      }]
    },
    "toolbar": {
      attrs: [{
        "attrName": "required",
        "type": "toggle",
        "label": __("Is Required", 'jet-form-builder')
      }]
    },
    "advanced": {
      label: __('Advanced', 'jet-form-builder'),
      attrs: [{
        "attrName": "placeholder",
        "type": "text",
        "label": __("Placeholder", 'jet-form-builder')
      }, {
        "attrName": "add_prev",
        "type": "toggle",
        "label": __("Add Prev Page Button", 'jet-form-builder'),
        help: __("It is recommended to use \n\t\t\t\tthe \"Action Button\" block with the \"Go to Prev Page\" type", 'jet-from-builder')
      }, {
        "attrName": "prev_label",
        "type": "text",
        "label": __("Prev Page Button Label", 'jet-form-builder'),
        "condition": "add_prev"
      }, {
        "attrName": "visibility",
        "label": __("Field Visibility", 'jet-form-builder'),
        "type": "select",
        "options": [{
          "value": "all",
          "label": __("For all", 'jet-form-builder')
        }, {
          "value": "logged_id",
          "label": __("Only for logged in users", 'jet-form-builder')
        }, {
          "value": "not_logged_in",
          "label": __("Only for NOT-logged in users", 'jet-form-builder')
        }]
      }, {
        "attrName": "class_name",
        "type": "text",
        "label": __("CSS Class Name", 'jet-form-builder')
      }]
    }
  });
};
function getBlockControls() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

  if (!type) {
    return false;
  }

  var controls = ControlsSettings();

  if ('all' === type) {
    return controls;
  }

  if (controls[type] && controls[type].attrs && Array.isArray(controls[type].attrs) && 0 < controls[type].attrs.length) {
    return controls[type].attrs;
  }

  return false;
}

/***/ }),

/***/ "./package/components/fields/field-control.js":
/*!****************************************************!*\
  !*** ./package/components/fields/field-control.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralFields": () => (/* binding */ GeneralFields),
/* harmony export */   "ToolBarFields": () => (/* binding */ ToolBarFields),
/* harmony export */   "AdvancedFields": () => (/* binding */ AdvancedFields),
/* harmony export */   "FieldControl": () => (/* binding */ FieldControl),
/* harmony export */   "filterFieldControls": () => (/* binding */ filterFieldControls)
/* harmony export */ });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./package/components/fields/controls.js");
/* harmony import */ var _field_with_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-with-preset */ "./package/components/fields/field-with-preset.js");
/* harmony import */ var _presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presets/dynamic-preset */ "./package/components/presets/dynamic-preset.js");
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/tools */ "./package/helpers/tools.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
var _excluded = ["help", "attrName", "label"],
    _excluded2 = ["help", "attrName", "label"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    RichText = _ref.RichText;

var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var useDispatch = wp.data.useDispatch;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    Flex = _wp$components.Flex,
    BaseControl = _wp$components.BaseControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl,
    ClipboardButton = _wp$components.ClipboardButton,
    Snackbar = _wp$components.Snackbar;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function filterFieldControls(_ref2) {
  var type = _ref2.type,
      attributes = _ref2.attributes,
      _ref2$attrsSettings = _ref2.attrsSettings,
      attrsSettings = _ref2$attrsSettings === void 0 ? {} : _ref2$attrsSettings,
      _ref2$editProps = _ref2.editProps,
      _ref2$editProps$attrH = _ref2$editProps.attrHelp,
      attrHelp = _ref2$editProps$attrH === void 0 ? function () {
    return '';
  } : _ref2$editProps$attrH,
      _ref2$editProps$block = _ref2$editProps.blockName,
      blockName = _ref2$editProps$block === void 0 ? '' : _ref2$editProps$block;
  var controls = (0,_controls__WEBPACK_IMPORTED_MODULE_0__.ControlsSettings)();

  if (!controls[type]) {
    return [];
  }

  var currentControl = controls[type];

  var isValidCondition = function isValidCondition(attr) {
    if (!attr.condition) {
      return true;
    }

    if (blockName && attr.condition.blockName) {
      if ('string' === typeof attr.condition.blockName && blockName !== attr.condition.blockName) {
        return false;
      }

      if ('object' === _typeof(attr.condition.blockName) && attr.condition.blockName.length && !attr.condition.blockName.includes(blockName)) {
        return false;
      }
    }

    var objectNotMatch = function () {
      if ('object' !== _typeof(attr.condition.attr)) {
        return true;
      }

      var _attr$condition$attr = attr.condition.attr,
          _attr$condition$attr$ = _attr$condition$attr.operator,
          operator = _attr$condition$attr$ === void 0 ? 'and' : _attr$condition$attr$,
          _attr$condition$attr$2 = _attr$condition$attr.items,
          items = _attr$condition$attr$2 === void 0 ? {} : _attr$condition$attr$2;

      if ('or' === operator.toLowerCase()) {
        for (var attrToCompare in items) {
          var valueCompare = items[attrToCompare];

          if (valueCompare === attributes[attrToCompare]) {
            return true;
          }
        }
      }

      if ('and' === operator.toLowerCase()) {
        return function () {
          for (var _attrToCompare in items) {
            if (items[_attrToCompare] !== attributes[_attrToCompare]) {
              return false;
            }
          }

          return true;
        }();
      }

      return true;
    }();

    if (!objectNotMatch || 'string' === typeof attr.condition.attr && attr.condition.attr && !attributes[attr.condition.attr] || 'string' === typeof attr.condition && !attributes[attr.condition]) {
      return false;
    }

    return true;
  };

  return currentControl.attrs.filter(function (_ref3) {
    var _ref3$help = _ref3.help,
        help = _ref3$help === void 0 ? '' : _ref3$help,
        attrName = _ref3.attrName,
        label = _ref3.label,
        attr = _objectWithoutProperties(_ref3, _excluded);

    var isRegisterAttribute = (attrName in attributes);
    var validCondition = isValidCondition(attr);
    var isHidden = attrName in attrsSettings && 'show' in attrsSettings[attrName] && false === attrsSettings[attrName].show;
    return isRegisterAttribute && validCondition && !isHidden;
  });
}

function FieldControl(props) {
  var setAttributes = props.setAttributes,
      attributes = props.attributes,
      _props$editProps = props.editProps,
      _props$editProps$attr = _props$editProps.attrHelp,
      attrHelp = _props$editProps$attr === void 0 ? function () {
    return '';
  } : _props$editProps$attr,
      _props$editProps$bloc = _props$editProps.blockName,
      blockName = _props$editProps$bloc === void 0 ? '' : _props$editProps$bloc,
      _props$fieldControls = props.fieldControls,
      fieldControls = _props$fieldControls === void 0 ? [] : _props$fieldControls,
      _props$autoCompleteLa = props.autoCompleteLabel,
      autoCompleteLabel = _props$autoCompleteLa === void 0 ? true : _props$autoCompleteLa;

  if (!fieldControls.length) {
    fieldControls = filterFieldControls(props);
  }

  var onChangeValue = function onChangeValue(value, key) {
    setAttributes(_defineProperty({}, key, value));
  };

  return fieldControls.map(function (_ref4) {
    var _ref4$help = _ref4.help,
        help = _ref4$help === void 0 ? '' : _ref4$help,
        attrName = _ref4.attrName,
        label = _ref4.label,
        attr = _objectWithoutProperties(_ref4, _excluded2);

    switch (attr.type) {
      case 'text':
        return wp.element.createElement(TextControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-TextControl"),
          label: label,
          help: help,
          value: attributes[attrName],
          onChange: function onChange(newVal) {
            return onChangeValue(newVal, attrName);
          },
          onBlur: function onBlur() {
            if ('label' === attrName && 1 < attributes.label.length && (!attributes.name || 'field_name' === attributes.name) && autoCompleteLabel) {
              onChangeValue((0,_helpers_tools__WEBPACK_IMPORTED_MODULE_3__.getConvertedName)(attributes.label), 'name');
            }
          }
        });

      case 'dynamic_text':
        return wp.element.createElement(_field_with_preset__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: "".concat(attr.type, "-").concat(attrName, "-FieldWithPreset"),
          ModalEditor: function ModalEditor(_ref5) {
            var actionClick = _ref5.actionClick,
                onRequestClose = _ref5.onRequestClose;
            return wp.element.createElement(_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: attributes[attrName],
              isSaveAction: actionClick,
              onSavePreset: function onSavePreset(newVal) {
                onChangeValue(newVal, attrName);
              },
              onUnMount: onRequestClose
            });
          }
        }, wp.element.createElement(TextControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-TextControlDynamic"),
          label: label,
          help: help || attrHelp(attrName),
          value: attributes[attrName],
          onChange: function onChange(newVal) {
            onChangeValue(newVal, attrName);
          }
        }));

      case 'select':
        return wp.element.createElement(SelectControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-SelectControl"),
          label: label,
          help: help || attrHelp(attrName),
          value: attributes[attrName],
          options: attr.options,
          onChange: function onChange(newVal) {
            onChangeValue(newVal, attrName);
          }
        });

      case 'toggle':
        return wp.element.createElement(ToggleControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-ToggleControl"),
          label: label,
          help: help || attrHelp(attrName),
          checked: attributes[attrName],
          onChange: function onChange(newVal) {
            onChangeValue(newVal, attrName);
          }
        });

      case 'number':
        return wp.element.createElement(BaseControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-BaseControl"),
          label: label
        }, wp.element.createElement(NumberControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-NumberControl"),
          value: attributes[attrName],
          onChange: function onChange(newVal) {
            onChangeValue(Number(newVal), attrName);
          }
        }), wp.element.createElement("p", {
          className: 'components-base-control__help',
          style: {
            color: 'rgb(117, 117, 117)'
          }
        }, help || attrHelp(attrName)));
    }
  });
}

function GeneralFields(props) {
  var currentControl = (0,_controls__WEBPACK_IMPORTED_MODULE_0__.ControlsSettings)().general;
  return wp.element.createElement(PanelBody, {
    title: currentControl.label,
    key: 'jet-form-general-fields'
  }, wp.element.createElement(FieldControl, _extends({
    type: "general",
    key: 'jet-form-general-fields-component'
  }, props)), wp.element.createElement(FieldControl, _extends({
    type: "custom_general",
    key: 'jet-form-general-custom-fields-component'
  }, props)));
}

function AdvancedFields(props) {
  var currentControl = (0,_controls__WEBPACK_IMPORTED_MODULE_0__.ControlsSettings)().advanced;
  return wp.element.createElement(PanelBody, {
    title: currentControl.label,
    key: 'jet-form-advanced-fields',
    initialOpen: false
  }, wp.element.createElement(FieldControl, _extends({
    type: "advanced",
    key: 'jet-form-advanced-fields-component'
  }, props)), wp.element.createElement(FieldControl, _extends({
    type: "custom_advanced",
    key: 'jet-form-advanced-custom-fields-component'
  }, props)));
}

function ToolBarFields(props) {
  var uniqKey = props.editProps.uniqKey,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children,
      _props$displayName = props.displayName,
      displayName = _props$displayName === void 0 ? true : _props$displayName,
      attributes = props.attributes,
      setAttributes = props.setAttributes;
  var displayNotice = (0,_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_4__.useSuccessNotice)("Copied \"".concat(attributes.name, "\" to clipboard."));
  return wp.element.createElement(BlockControls, {
    key: uniqKey('ToolBarFields-BlockControls')
  }, wp.element.createElement(ToolbarGroup, {
    key: uniqKey('ToolBarFields-ToolbarGroup')
  }, wp.element.createElement(Flex, {
    align: 'center',
    justify: 'center',
    className: 'jet-form-toggle-box'
  }, displayName && wp.element.createElement("div", {
    className: 'jet-input-with-button'
  }, wp.element.createElement(ClipboardButton, {
    isSmall: true,
    icon: "admin-page",
    showTooltip: true,
    shortcut: "Copy name",
    text: attributes.name,
    onCopy: function onCopy() {
      return displayNotice(true);
    },
    onFinishCopy: function onFinishCopy() {
      return displayNotice(false);
    }
  }), wp.element.createElement(TextControl, {
    value: attributes.name,
    onChange: function onChange(name) {
      return setAttributes({
        name: name
      });
    }
  })), wp.element.createElement(FieldControl, _extends({
    type: "toolbar",
    key: uniqKey('jet-form-toolbar-fields-component')
  }, props)), children)));
}



/***/ }),

/***/ "./package/components/fields/field-settings-wrapper.js":
/*!*************************************************************!*\
  !*** ./package/components/fields/field-settings-wrapper.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldSettingsWrapper)
/* harmony export */ });
/* harmony import */ var _field_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-control */ "./package/components/fields/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var __ = wp.i18n.__;
var PanelBody = wp.components.PanelBody;
function FieldSettingsWrapper(props) {
  var title = props.title,
      children = props.children,
      _props$editProps$uniq = props.editProps.uniqKey,
      uniqKey = _props$editProps$uniq === void 0 ? function (val) {
    return val;
  } : _props$editProps$uniq;
  var fieldControls = (0,_field_control__WEBPACK_IMPORTED_MODULE_0__.filterFieldControls)(_objectSpread(_objectSpread({}, props), {}, {
    type: 'custom_settings'
  }));
  return Boolean(fieldControls.length || children) && wp.element.createElement(PanelBody, {
    title: title || __('Field Settings')
  }, children, wp.element.createElement(_field_control__WEBPACK_IMPORTED_MODULE_0__.FieldControl, _extends({
    type: "custom_settings",
    fieldControls: fieldControls,
    key: uniqKey('customSettingsFields')
  }, props)));
}

/***/ }),

/***/ "./package/components/fields/field-with-preset.js":
/*!********************************************************!*\
  !*** ./package/components/fields/field-with-preset.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-modal */ "./package/components/action-modal.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG,
    BaseControl = _wp$components.BaseControl;
var useState = wp.element.useState;

function FieldWithPreset(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      ModalEditor = _ref.ModalEditor,
      _ref$triggerClasses = _ref.triggerClasses,
      triggerClasses = _ref$triggerClasses === void 0 ? [] : _ref$triggerClasses,
      _ref$baseControlProps = _ref.baseControlProps,
      baseControlProps = _ref$baseControlProps === void 0 ? {} : _ref$baseControlProps;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalState = _useState2[0],
      setModalState = _useState2[1];

  var changeModalState = function changeModalState() {
    setModalState(function (prev) {
      return !prev;
    });
  };

  var classNames = ['jet-form-dynamic-preset__trigger'].concat(_toConsumableArray(triggerClasses)).join(' ');
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, _extends({
    className: "jet-form-dynamic-preset"
  }, baseControlProps), children, wp.element.createElement("div", {
    className: classNames,
    onClick: changeModalState
  }, wp.element.createElement(SVG, {
    viewBox: "0 0 54 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, wp.element.createElement(Path, {
    d: "M42.6396 26.4347C37.8682 27.3436 32.5666 28.0252 27.1894 28.0252C21.8121 28.0252 16.4348 27.3436 11.7391 26.4347C6.96774 25.4502 3.18093 23.8597 0.37868 21.9663L0.37868 28.0252C0.37868 29.5399 1.59046 31.1304 3.78682 32.4179C5.98317 33.7054 9.46704 34.9172 13.6325 35.5988C17.798 36.2805 22.115 36.8106 27.1894 36.8106C32.2637 36.8106 36.6564 36.5077 40.7462 35.5988C44.8359 34.69 48.3198 33.7054 50.5162 32.4179C52.7125 31.1304 54 29.5399 54 28.0252L54 21.9663C51.122 23.8597 47.3352 25.4502 42.6396 26.4347ZM42.6396 53.5484C37.8682 54.5329 32.5666 55.1388 27.1894 55.1388C21.8121 55.1388 16.4348 54.5329 11.7391 53.5484C7.04348 52.5638 3.18093 51.0491 0.378682 49.1556L0.378682 55.1388C0.378683 56.7293 1.59046 58.3197 3.78682 59.5315C6.36186 60.819 9.46705 62.1066 13.6325 62.7125C17.7223 63.697 22.115 64 27.1894 64C32.2637 64 36.6564 63.697 40.7462 62.7125C44.8359 61.8036 48.3198 60.819 50.5162 59.5315C52.7125 57.9411 54 56.7293 54 54.8359L54 48.8527C51.122 51.0491 47.3352 52.2608 42.6396 53.5484ZM42.6396 39.9915C37.8682 40.9004 32.5666 41.582 27.1894 41.582C21.8121 41.582 16.4348 40.9004 11.7391 39.9915C6.96774 39.007 3.18093 37.4922 0.378681 35.5988L0.378681 41.582C0.378681 43.1725 1.59046 44.6872 3.78682 45.9747C6.36185 47.2622 9.46705 48.474 13.6325 49.1556C17.7223 50.0645 22.115 50.3674 27.1894 50.3674C32.2637 50.3674 36.6564 50.0645 40.7462 49.1556C44.8359 48.1711 48.3198 47.2622 50.5162 45.9747C52.7125 44.3843 54 43.1725 54 41.582L54 35.5988C51.122 37.4922 47.3352 39.007 42.6396 39.9915ZM40.4432 2.12337C36.3535 1.13879 31.885 0.835848 26.8864 0.835849C21.8878 0.835849 17.4194 1.13879 13.2539 2.12337C9.08836 3.10794 5.68022 4.01678 3.48387 5.3043C1.28751 6.59181 -3.4782e-06 8.10654 -3.33916e-06 9.697L-2.95513e-06 14.0897C-2.81609e-06 15.6802 1.28752 17.2706 3.48387 18.5582C6.05891 19.7699 9.1641 21.0575 13.2539 21.6633C17.3436 22.2692 21.8121 22.9509 26.8864 22.9509C31.9607 22.9509 36.3535 22.9509 40.4432 22.345C44.533 21.7391 48.0169 20.4516 50.2132 19.164C52.7125 17.5736 54 15.9831 54 14.3927L54 9.99995C54 8.40948 52.7125 6.81902 50.5162 5.60724C48.3198 4.39546 44.533 2.72926 40.4432 2.12337Z",
    fill: "#7E8993"
  })))), modalState && wp.element.createElement(_action_modal__WEBPACK_IMPORTED_MODULE_0__["default"], {
    onRequestClose: changeModalState,
    classNames: ['width-60'],
    title: 'Edit Preset'
  }, function (modalProps) {
    return wp.element.createElement(ModalEditor, modalProps);
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldWithPreset);

/***/ }),

/***/ "./package/components/fields/field-wrapper.js":
/*!****************************************************!*\
  !*** ./package/components/fields/field-wrapper.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/tools */ "./package/helpers/tools.js");

var BaseControl = wp.components.BaseControl;
var withSelect = wp.data.withSelect;
var RichText = wp.blockEditor.RichText;
var __ = wp.i18n.__;

function RichDescription(content) {
  return wp.element.createElement("small", {
    style: {
      whiteSpace: 'nowrap',
      padding: '0.2em 0.8em 0 0',
      color: '#8e8a8a'
    }
  }, content);
}

function FieldWrapper(props) {
  var attributes = props.attributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      _props$editProps$bloc = _props$editProps.blockName,
      blockName = _props$editProps$bloc === void 0 ? '' : _props$editProps$bloc,
      children = props.children,
      _props$wrapClasses = props.wrapClasses,
      wrapClasses = _props$wrapClasses === void 0 ? [] : _props$wrapClasses,
      _props$valueIfEmptyLa = props.valueIfEmptyLabel,
      valueIfEmptyLabel = _props$valueIfEmptyLa === void 0 ? '' : _props$valueIfEmptyLa,
      setAttributes = props.setAttributes,
      _props$childrenPositi = props.childrenPosition,
      childrenPosition = _props$childrenPositi === void 0 ? 'between' : _props$childrenPositi,
      _jf_args = props._jf_args;

  var setDynamicName = function setDynamicName() {
    if (1 < attributes.label.length && (!attributes.name || 'field_name' === attributes.name)) {
      setAttributes({
        name: (0,_helpers_tools__WEBPACK_IMPORTED_MODULE_0__.getConvertedName)(attributes.label)
      });
    }
  };

  function renderLabel() {
    return wp.element.createElement(BaseControl.VisualLabel, null, RichDescription(__('input label:', 'jet-form-builder')), wp.element.createElement("div", {
      onBlur: setDynamicName,
      className: "jet-form-builder__label"
    }, wp.element.createElement(RichText, {
      key: uniqKey('rich-label'),
      placeholder: "Label...",
      allowedFormats: [],
      value: attributes.label ? attributes.label : valueIfEmptyLabel,
      onChange: function onChange(newLabel) {
        return setAttributes({
          label: newLabel
        });
      }
    }), attributes.required && wp.element.createElement("span", {
      className: 'jet-form-builder__required'
    }, _jf_args.required_mark ? _jf_args.required_mark : '*')));
  }

  function renderDescription() {
    return wp.element.createElement("div", {
      className: "jet-form-builder__desc--wrapper"
    }, RichDescription(__('input description:', 'jet-form-builder')), wp.element.createElement(BaseControl, {
      key: 'custom_help_description',
      className: 'jet-form-builder__desc'
    }, wp.element.createElement("div", {
      className: "components-base-control__help"
    }, wp.element.createElement(RichText, {
      key: uniqKey('rich-description'),
      tagName: "small",
      placeholder: "Description...",
      allowedFormats: [],
      value: attributes.desc,
      onChange: function onChange(desc) {
        return setAttributes({
          desc: desc
        });
      },
      style: {
        marginTop: '0px'
      }
    }))));
  }

  if ('row' === _jf_args.fields_layout) {
    wrapClasses.push('jet-form-builder-row__flex');
  }

  return wp.element.createElement(BaseControl, {
    key: uniqKey('placeHolder_block'),
    className: (0,_helpers_tools__WEBPACK_IMPORTED_MODULE_0__.classnames)('jet-form-builder__field-wrap', 'jet-form-builder-row', wrapClasses)
  }, 'row' !== _jf_args.fields_layout && wp.element.createElement(React.Fragment, null, 'top' === childrenPosition && children, renderLabel(), 'between' === childrenPosition && children, renderDescription(), 'bottom' === childrenPosition && children), 'row' === _jf_args.fields_layout && wp.element.createElement(React.Fragment, null, wp.element.createElement("div", {
    className: "jet-form-builder-row__flex--label"
  }, renderLabel(), renderDescription()), wp.element.createElement("div", {
    className: "jet-form-builder-row__flex--content"
  }, children)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelect(function (select) {
  var meta = select('core/editor').getEditedPostAttribute('meta') || {};
  return {
    _jf_args: JSON.parse(meta._jf_args || {})
  };
})(FieldWrapper));

/***/ }),

/***/ "./package/components/fields/macros-inserter.js":
/*!******************************************************!*\
  !*** ./package/components/fields/macros-inserter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _excluded = ["children", "fields", "onFieldClick", "customMacros", "zIndex"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _wp$components = wp.components,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    PanelBody = _wp$components.PanelBody;
var useState = wp.element.useState;

function MacrosInserter(_ref) {
  var children = _ref.children,
      fields = _ref.fields,
      onFieldClick = _ref.onFieldClick,
      customMacros = _ref.customMacros,
      _ref$zIndex = _ref.zIndex,
      zIndex = _ref$zIndex === void 0 ? 1000000 : _ref$zIndex,
      popoverProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(function () {
    return false;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      showPopover = _useState2[0],
      setPopoverState = _useState2[1];

  return wp.element.createElement("div", {
    className: "jet-form-editor__macros-inserter"
  }, wp.element.createElement(Button, {
    isTertiary: true,
    isSmall: true,
    icon: showPopover ? 'no-alt' : 'admin-tools',
    label: 'Insert macros',
    className: "jet-form-editor__macros-trigger",
    onClick: function onClick() {
      setPopoverState(function (prev) {
        return !prev;
      });
    }
  }), showPopover && wp.element.createElement(Popover, _extends({
    style: {
      zIndex: zIndex
    },
    position: 'bottom left'
  }, popoverProps), fields.length && wp.element.createElement(PanelBody, {
    title: 'Form Fields'
  }, fields.map(function (field) {
    return wp.element.createElement("div", {
      key: 'field_' + field.name
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        onFieldClick(field.name);
      }
    }, '%' + field.name + '%'));
  })), customMacros && wp.element.createElement(PanelBody, {
    title: 'Custom Macros'
  }, customMacros.map(function (macros) {
    return wp.element.createElement("div", {
      key: 'macros_' + macros
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        onFieldClick(macros);
      }
    }, '%' + macros + '%'));
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MacrosInserter);

/***/ }),

/***/ "./package/components/fields/repeater-with-state.js":
/*!**********************************************************!*\
  !*** ./package/components/fields/repeater-with-state.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __ = wp.i18n.__;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    CardHeader = _wp$components.CardHeader,
    ToggleControl = _wp$components.ToggleControl,
    Flex = _wp$components.Flex,
    FlexItem = _wp$components.FlexItem;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function RepeaterWithState(_ref) {
  var children = _ref.children,
      ItemHeading = _ref.ItemHeading,
      _ref$repeaterClasses = _ref.repeaterClasses,
      repeaterClasses = _ref$repeaterClasses === void 0 ? [] : _ref$repeaterClasses,
      _ref$repeaterItemClas = _ref.repeaterItemClasses,
      repeaterItemClasses = _ref$repeaterItemClas === void 0 ? [] : _ref$repeaterItemClas,
      newItem = _ref.newItem,
      _ref$addNewButtonLabe = _ref.addNewButtonLabel,
      addNewButtonLabel = _ref$addNewButtonLabe === void 0 ? 'Add New' : _ref$addNewButtonLabe,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      isSaveAction = _ref.isSaveAction,
      onSaveItems = _ref.onSaveItems,
      onUnMount = _ref.onUnMount,
      onAddNewItem = _ref.onAddNewItem,
      onRemoveItem = _ref.onRemoveItem,
      _ref$help = _ref.help,
      help = _ref$help === void 0 ? {
    helpSource: {},
    helpVisible: function helpVisible() {
      return false;
    },
    helpKey: ''
  } : _ref$help,
      _ref$additionalContro = _ref.additionalControls,
      additionalControls = _ref$additionalContro === void 0 ? null : _ref$additionalContro;
  var classNames = ['jet-form-builder__repeater-component'].concat(_toConsumableArray(repeaterClasses)).join(' ');
  var itemClassNames = ['jet-form-builder__repeater-component-item'].concat(_toConsumableArray(repeaterItemClasses)).join(' ');

  var parsedItems = function parsedItems() {
    if (items && items.length > 0) {
      return items.map(function (item) {
        item.__visible = false;
        return item;
      });
    } else {
      return [_objectSpread(_objectSpread({}, newItem), {}, {
        __visible: true
      })];
    }
  };

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      itemsData = _useState2[0],
      setItemsData = _useState2[1];

  useEffect(function () {
    setItemsData(parsedItems());
  }, []);

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isSafeDeleting = _useState4[0],
      setSafeDeleting = _useState4[1];

  var _changeCurrentItem = function changeCurrentItem(valueToSet, index) {
    setItemsData(function (prev) {
      var prevClone = JSON.parse(JSON.stringify(prev));
      prevClone[index] = _objectSpread(_objectSpread({}, prev[index]), valueToSet);
      return prevClone;
    });
  };

  var onSaveDeleting = function onSaveDeleting(index) {
    return confirm(__("Are you sure you want to remove item ".concat(index + 1, "?"), 'jet-form-builder'));
  };

  var removeOption = function removeOption(index) {
    if (isSafeDeleting && !onSaveDeleting(index) || onRemoveItem && !onRemoveItem(index, itemsData)) {
      return;
    }

    setItemsData(function (prev) {
      var prevClone = JSON.parse(JSON.stringify(prev));
      prevClone.splice(index, 1);
      return prevClone;
    });
  };

  var addNewItem = function addNewItem(value) {
    if (onAddNewItem) {
      onAddNewItem(value, itemsData);
    }

    setItemsData(function (prev) {
      return [].concat(_toConsumableArray(prev), [_objectSpread(_objectSpread({}, value), {}, {
        __visible: true
      })]);
    });
  };

  var cloneItem = function cloneItem(index) {
    setItemsData(function (prev) {
      var prevClone = JSON.parse(JSON.stringify(prev));
      var _ref2 = [prevClone.slice(0, index + 1), prevClone.slice(index + 1)],
          before = _ref2[0],
          after = _ref2[1];
      return [].concat(_toConsumableArray(before), [prevClone[index]], _toConsumableArray(after));
    });
  };

  var moveRepeaterItem = function moveRepeaterItem(_ref3) {
    var oldIndex = _ref3.oldIndex,
        newIndex = _ref3.newIndex;
    setItemsData(function (prev) {
      var prevClone = JSON.parse(JSON.stringify(prev));
      var _ref4 = [prevClone[oldIndex], prevClone[newIndex]];
      prevClone[newIndex] = _ref4[0];
      prevClone[oldIndex] = _ref4[1];
      return prevClone;
    });
  };

  var moveUp = function moveUp(index) {
    moveRepeaterItem({
      oldIndex: index,
      newIndex: index - 1
    });
  };

  var moveDown = function moveDown(index) {
    moveRepeaterItem({
      oldIndex: index,
      newIndex: index + 1
    });
  };

  var isDisabledEnd = function isDisabledEnd(index) {
    return !(index < itemsData.length - 1);
  };

  var toggleVisible = function toggleVisible(index) {
    setItemsData(function (prev) {
      var prevClone = JSON.parse(JSON.stringify(prev));
      prevClone[index].__visible = !prevClone[index].__visible;
      return prevClone;
    });
  };

  useEffect(function () {
    if (true === isSaveAction) {
      for (var itemsDataKey in itemsData) {
        for (var itemKey in itemsData[itemsDataKey]) {
          if (itemKey.startsWith('__')) {
            delete itemsData[itemsDataKey][itemKey];
          }
        }
      }

      onSaveItems(itemsData);
      onUnMount();
    } else if (false === isSaveAction) {
      onUnMount();
    }
  }, [isSaveAction]);

  var getRepeaterItemId = function getRepeaterItemId(index) {
    return "jet-form-builder-repeater__item_".concat(index);
  };

  var helpSource = help.helpSource,
      helpVisible = help.helpVisible,
      helpKey = help.helpKey;
  var isVisibleHelp = helpVisible(itemsData) && helpSource && helpSource[helpKey];
  return wp.element.createElement("div", {
    className: classNames,
    key: 'jet-form-builder-repeater'
  }, isVisibleHelp && wp.element.createElement("p", null, helpSource[helpKey].label), 0 < itemsData.length && wp.element.createElement(React.Fragment, null, wp.element.createElement(Flex, null, wp.element.createElement(FlexItem, null, wp.element.createElement(ToggleControl, {
    label: __('Safe deleting', 'jet-form-builder'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  })), wp.element.createElement(FlexItem, {
    style: {
      flex: 'unset',
      marginBottom: '1em'
    }
  }))), additionalControls, itemsData.map(function (currentItem, index) {
    return wp.element.createElement(Card, {
      isElevated: true,
      className: itemClassNames,
      key: getRepeaterItemId(index)
    }, wp.element.createElement(CardHeader, {
      className: 'repeater__item__header'
    }, wp.element.createElement("div", {
      className: "repeater-item__left-heading"
    }, wp.element.createElement(ButtonGroup, {
      className: 'repeater-action-buttons'
    }, wp.element.createElement(Button, {
      isSmall: true,
      icon: currentItem.__visible ? 'no-alt' : 'edit',
      onClick: function onClick() {
        return toggleVisible(index);
      },
      className: 'repeater-action-button'
    }), wp.element.createElement(Button, {
      isSmall: true,
      isSecondary: true,
      disabled: !Boolean(index),
      icon: 'arrow-up-alt2',
      onClick: function onClick() {
        return moveUp(index);
      },
      className: 'repeater-action-button'
    }), wp.element.createElement(Button, {
      isSmall: true,
      isSecondary: true,
      disabled: isDisabledEnd(index),
      icon: 'arrow-down-alt2',
      onClick: function onClick() {
        return moveDown(index);
      },
      className: 'repeater-action-button'
    })), wp.element.createElement("span", {
      className: 'repeater-item-title'
    }, ItemHeading && wp.element.createElement(ItemHeading, {
      currentItem: currentItem,
      index: index,
      changeCurrentItem: function changeCurrentItem(data) {
        return _changeCurrentItem(data, index);
      }
    }), !ItemHeading && "#".concat(index + 1))), wp.element.createElement(ButtonGroup, null, wp.element.createElement(Button, {
      isSmall: true,
      isSecondary: true,
      onClick: function onClick() {
        return cloneItem(index);
      }
    }, __('Clone', 'jet-form-builder')), wp.element.createElement(Button, {
      isSmall: true,
      isSecondary: true,
      isDestructive: true,
      onClick: function onClick() {
        return removeOption(index);
      }
    }, __('Delete', 'jet-form-builder')))), currentItem.__visible && wp.element.createElement(CardBody, {
      className: 'repeater-item__content'
    }, children && wp.element.createElement(React.Fragment, {
      key: "repeater-component__item_".concat(index)
    }, 'function' === typeof children && children({
      currentItem: currentItem,
      changeCurrentItem: function changeCurrentItem(data) {
        return _changeCurrentItem(data, index);
      },
      currentIndex: index
    }), 'function' !== typeof children && children), !children && 'Set up your Repeater Template, please.'));
  }), 1 < itemsData.length && wp.element.createElement(React.Fragment, null, additionalControls, wp.element.createElement(ToggleControl, {
    className: "jet-control-clear",
    label: __('Safe deleting'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  })), wp.element.createElement(Button, {
    isSecondary: true,
    onClick: function onClick() {
      return addNewItem(newItem);
    }
  }, addNewButtonLabel));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterWithState);

/***/ }),

/***/ "./package/components/gateway-fetch-button.js":
/*!****************************************************!*\
  !*** ./package/components/gateway-fetch-button.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetch_api_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-api-button */ "./package/components/fetch-api-button.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");


var compose = wp.compose.compose;
var withSelect = wp.data.withSelect;

function GatewayFetchButton(_ref) {
  var _ref$initialLabel = _ref.initialLabel,
      initialLabel = _ref$initialLabel === void 0 ? 'Valid' : _ref$initialLabel,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'InValid' : _ref$label,
      _ref$apiArgs = _ref.apiArgs,
      apiArgs = _ref$apiArgs === void 0 ? {} : _ref$apiArgs,
      gatewayRequestId = _ref.gatewayRequestId;
  return wp.element.createElement(_fetch_api_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    id: gatewayRequestId,
    initialLabel: initialLabel,
    label: label,
    apiArgs: apiArgs
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__.withSelectGateways))(GatewayFetchButton));

/***/ }),

/***/ "./package/components/grouped-select-control.js":
/*!******************************************************!*\
  !*** ./package/components/grouped-select-control.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isEmpty = window.lodash.isEmpty;
/**
 * WordPress dependencies
 */

var withInstanceId = window.wp.compose.withInstanceId;
/**
 * Internal dependencies
 */

var BaseControl = window.wp.components.BaseControl;

function GroupedSelectControl(_ref) {
  var help = _ref.help,
      instanceId = _ref.instanceId,
      label = _ref.label,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      className = _ref.className,
      value = _ref.value,
      hideLabelFromVision = _ref.hideLabelFromVision;
  var id = "inspector-select-control-".concat(instanceId);

  var onChangeValue = function onChangeValue(event) {
    onChange(event.target.value);
  }; // Disable reason: A select with an onchange throws a warning

  /* eslint-disable jsx-a11y/no-onchange */


  return !isEmpty(options) && wp.element.createElement(BaseControl, {
    label: label,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    help: help,
    className: className
  }, wp.element.createElement("select", {
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    value: value,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, wp.element.createElement("option", {
    key: "".concat(label, "-placeholder"),
    value: ""
  }, "--"), options.map(function (optGroup, groupIndex) {
    return !isEmpty(optGroup.values) && wp.element.createElement("optgroup", {
      key: "".concat(optGroup.label, "-").concat(groupIndex),
      label: optGroup.label
    }, optGroup.values.map(function (option, index) {
      return wp.element.createElement("option", {
        key: "".concat(option.value, "-").concat(index, "-").concat(groupIndex),
        value: option.value,
        disabled: option.disabled
      }, option.label);
    }));
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withInstanceId(GroupedSelectControl));

/***/ }),

/***/ "./package/components/horizontal-line.js":
/*!***********************************************!*\
  !*** ./package/components/horizontal-line.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function HorizontalLine(props) {
  return wp.element.createElement("hr", {
    style: _objectSpread({}, props)
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HorizontalLine);

/***/ }),

/***/ "./package/components/presets/dynamic-preset.js":
/*!******************************************************!*\
  !*** ./package/components/presets/dynamic-preset.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _preset_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preset-editor */ "./package/components/presets/preset-editor.js");
/* harmony import */ var _preset_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preset-render */ "./package/components/presets/preset-render.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function DynamicPreset(_ref) {
  var value = _ref.value,
      isSaveAction = _ref.isSaveAction,
      onSavePreset = _ref.onSavePreset,
      onUnMount = _ref.onUnMount,
      parseValue = _ref.parseValue,
      excludeOptions = _ref.excludeOptions,
      isCurrentFieldVisible = _ref.isCurrentFieldVisible,
      isVisible = _ref.isVisible;
  var position = 'dynamic';

  var _useState = useState(function () {
    return parseValue(value);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      stateValue = _useState2[0],
      setValue = _useState2[1];

  var onChangeValue = function onChangeValue(newValue, name) {
    setValue(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, newValue));
    });
  };

  useEffect(function () {
    if (true === isSaveAction) {
      if (onSavePreset) {
        onSavePreset(JSON.stringify(stateValue));
      }

      onUnMount();
    } else if (false === isSaveAction) {
      onUnMount();
    }
  }, [isSaveAction]);
  return wp.element.createElement(React.Fragment, null, window.JetFormEditorData.presetConfig.global_fields.map(function (data, index) {
    return wp.element.createElement(_preset_render__WEBPACK_IMPORTED_MODULE_1__.GlobalField, {
      key: "current_field_".concat(data.name, "_").concat(index),
      value: stateValue,
      index: index,
      data: data,
      excludeOptions: excludeOptions,
      onChangeValue: onChangeValue,
      isVisible: isVisible,
      position: position
    });
  }), window.JetFormEditorData.presetConfig.map_fields.map(function (data, index) {
    return wp.element.createElement(_preset_render__WEBPACK_IMPORTED_MODULE_1__.MapField, {
      key: "current_field_".concat(data.name, "_").concat(index),
      currentState: stateValue,
      value: stateValue['current_field_' + data.name],
      index: index,
      data: data,
      onChangeValue: onChangeValue,
      isCurrentFieldVisible: isCurrentFieldVisible,
      position: position
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_preset_editor__WEBPACK_IMPORTED_MODULE_0__["default"])(DynamicPreset));

/***/ }),

/***/ "./package/components/presets/preset-editor.js":
/*!*****************************************************!*\
  !*** ./package/components/presets/preset-editor.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var applyFilters = wp.hooks.applyFilters;

function withPreset(WrappedComponent) {
  return function JetFormPresetEditor(props) {
    var parseValue = function parseValue() {
      var val = {};

      if ('object' === _typeof(props.value)) {
        val = _objectSpread({}, props.value);
      } else if (props.value && 'string' === typeof props.value) {
        try {
          val = JSON.parse(props.value);

          if ('number' === typeof val) {
            throw new Error();
          }
        } catch (exception) {
          val = {};
        }
      }

      val.jet_preset = true;
      return val;
    };

    var isVisible = function isVisible(currentState, data, position) {
      return (data.position && position === data.position || !data.position || 'query_var' !== currentState.from) && isGlobalVisible(currentState, data);
    };

    var isGlobalVisible = function isGlobalVisible(currentState, data) {
      if (!data.condition && !data.custom_condition) {
        return true;
      }

      if (data.custom_condition) {
        switch (data.custom_condition) {
          case 'query_var':
            return 'post' === currentState.from && 'query_var' === currentState.post_from || 'user' === currentState.from && 'query_var' === currentState.user_from || 'query_var' === currentState.from;

          default:
            return applyFilters('jet.fb.preset.editor.custom.condition', false, data.custom_condition, currentState);
        }
      }

      if (data.condition) {
        return currentState[data.condition.field] === data.condition.value;
      }

      return true;
    };

    var isCurrentFieldVisible = function isCurrentFieldVisible(currentState, data, position) {
      if (!data.condition && !data.parent_condition) {
        return true;
      }

      if (data.position && position !== data.position) {
        return false;
      }

      if (data.parent_condition && !data.condition) {
        return currentState[data.parent_condition.field] === data.parent_condition.value;
      } else if (data.parent_condition && data.condition) {
        return currentState['current_field_' + data.condition.field] === data.condition.value && currentState[data.parent_condition.field] === data.parent_condition.value;
      } else if (!data.parent_condition && data.condition) {
        return currentState['current_field_' + data.condition.field] === data.condition.value;
      }

      return true;
    };

    var isMapFieldVisible = function isMapFieldVisible(currentState, data, field) {
      if (!data.condition && !data.parent_condition) {
        return true;
      }

      if (data.parent_condition && !data.condition) {
        return currentState[data.parent_condition.field] === data.parent_condition.value;
      } else if (data.parent_condition && data.condition) {
        if (!currentState.fields_map || !currentState.fields_map[field]) {
          return false;
        } else {
          return currentState.fields_map[field][data.condition.field] === data.condition.value && currentState[data.parent_condition.field] === data.parent_condition.value;
        }
      } else if (!data.parent_condition && data.condition) {
        if (!currentState.fields_map || !currentState.fields_map[field]) {
          return false;
        } else {
          return currentState.fields_map[field][data.condition.field] === data.condition.value;
        }
      }

      return true;
    };

    var excludeOptions = function excludeOptions(selectOptions) {
      var options = _toConsumableArray(selectOptions);

      options.forEach(function (option, index) {
        if (props.excludeSources && props.excludeSources.includes(option.value)) {
          options.splice(index, 1);
        }
      });
      return options;
    };

    return wp.element.createElement(WrappedComponent, _extends({
      key: "wrapped-preset-editor"
    }, props, {
      parseValue: parseValue,
      isVisible: isVisible,
      isMapFieldVisible: isMapFieldVisible,
      isCurrentFieldVisible: isCurrentFieldVisible,
      excludeOptions: excludeOptions
    }));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPreset);

/***/ }),

/***/ "./package/components/presets/preset-render.js":
/*!*****************************************************!*\
  !*** ./package/components/presets/preset-render.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalField": () => (/* binding */ GlobalField),
/* harmony export */   "AvailableMapField": () => (/* binding */ AvailableMapField),
/* harmony export */   "MapField": () => (/* binding */ MapField)
/* harmony export */ });
/* harmony import */ var _grouped_select_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grouped-select-control */ "./package/components/grouped-select-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    CustomSelectControl = _wp$components.CustomSelectControl,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    CardHeader = _wp$components.CardHeader;

function GlobalField(_ref) {
  var data = _ref.data,
      value = _ref.value,
      index = _ref.index,
      onChangeValue = _ref.onChangeValue,
      isVisible = _ref.isVisible,
      _ref$excludeOptions = _ref.excludeOptions,
      excludeOptions = _ref$excludeOptions === void 0 ? function (options) {
    return options;
  } : _ref$excludeOptions,
      position = _ref.position;

  switch (data.type) {
    case 'text':
      return isVisible(value, data, position) && wp.element.createElement("div", {
        key: 'field_' + data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(TextControl, {
        key: data.name + index,
        label: data.label,
        value: value[data.name],
        onChange: function onChange(newVal) {
          onChangeValue(newVal, data.name);
        }
      }));

    case 'select':
      return isVisible(value, data, position) && wp.element.createElement("div", {
        key: 'field_' + data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(SelectControl, {
        key: data.name + index,
        labelPosition: "side",
        options: excludeOptions(data.options),
        label: data.label,
        value: value[data.name],
        onChange: function onChange(newVal) {
          onChangeValue(newVal, data.name);
        }
      }));
  }

  return null;
}

function AvailableMapField(_ref2) {
  var fieldsMap = _ref2.fieldsMap,
      field = _ref2.field,
      index = _ref2.index,
      value = _ref2.value,
      onChangeValue = _ref2.onChangeValue,
      isMapFieldVisible = _ref2.isMapFieldVisible;
  var currentVal = null;

  if (!fieldsMap) {
    fieldsMap = {};
  }

  currentVal = fieldsMap[field];

  if (!currentVal || 'object' !== _typeof(currentVal)) {
    currentVal = {};
  }

  var AvailableFieldWrapper = function AvailableFieldWrapper(_ref3) {
    var field = _ref3.field,
        name = _ref3.name,
        index = _ref3.index,
        fIndex = _ref3.fIndex,
        children = _ref3.children;
    return wp.element.createElement(Card, {
      key: field + name + index + fIndex,
      size: 'extraSmall',
      style: {
        marginBottom: '10px'
      }
    }, wp.element.createElement(CardHeader, null, wp.element.createElement("span", {
      className: "jet-label-overflow"
    }, field)), wp.element.createElement(CardBody, {
      key: field + name + index + fIndex,
      className: 'jet-form-preset__fields-map-item'
    }, children));
  };

  function AvailableFieldWrapperFunc(_ref4, children) {
    var field = _ref4.field,
        name = _ref4.name,
        index = _ref4.index,
        fIndex = _ref4.fIndex;
    return wp.element.createElement(Card, {
      key: field + name + index + fIndex,
      size: 'extraSmall',
      style: {
        marginBottom: '10px'
      }
    }, wp.element.createElement(CardHeader, null, wp.element.createElement("span", {
      className: "jet-label-overflow"
    }, field)), wp.element.createElement(CardBody, {
      key: field + name + index + fIndex,
      className: 'jet-form-preset__fields-map-item'
    }, children));
  }

  return wp.element.createElement(React.Fragment, {
    key: "map_field_preset_".concat(field + index)
  }, window.JetFormEditorData.presetConfig.map_fields.map(function (data, fIndex) {
    var props = {
      field: field,
      name: data.name,
      index: index,
      fIndex: fIndex
    };
    var uniqKey = 'control_' + field + data.name + index + fIndex;

    switch (data.type) {
      case 'text':
        return isMapFieldVisible(value, data, field) && AvailableFieldWrapperFunc(props, wp.element.createElement(TextControl, {
          key: uniqKey + 'TextControl',
          placeholder: data.label,
          value: currentVal[data.name],
          onChange: function onChange(newVal) {
            currentVal[data.name] = newVal;
            onChangeValue(_objectSpread(_objectSpread({}, fieldsMap), {}, _defineProperty({}, field, currentVal)), 'fields_map');
          }
        }));

      case 'select':
        return isMapFieldVisible(value, data, field) && wp.element.createElement(AvailableFieldWrapper, _extends({}, props, {
          key: uniqKey
        }), wp.element.createElement(SelectControl, {
          options: data.options //label={ data.label }
          ,
          labelPosition: "top",
          value: currentVal[data.name],
          onChange: function onChange(newVal) {
            currentVal[data.name] = newVal;
            onChangeValue(_objectSpread(_objectSpread({}, fieldsMap), {}, _defineProperty({}, field, currentVal)), 'fields_map');
          }
        }));

      case 'custom_select':
        return isMapFieldVisible(value, data, field) && wp.element.createElement(AvailableFieldWrapper, _extends({}, props, {
          key: uniqKey
        }), wp.element.createElement(CustomSelectControl, {
          options: data.options,
          onChange: function onChange(_ref5) {
            var selectedItem = _ref5.selectedItem;
            currentVal[data.name] = selectedItem.key;
            onChangeValue(_objectSpread(_objectSpread({}, fieldsMap), {}, _defineProperty({}, field, currentVal)), 'fields_map');
          },
          value: data.options.find(function (option) {
            return option.key === currentVal[data.name];
          })
        }));

      case 'grouped_select':
        return isMapFieldVisible(value, data, field) && wp.element.createElement(AvailableFieldWrapper, _extends({}, props, {
          key: uniqKey
        }), wp.element.createElement(_grouped_select_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
          options: data.options //label={ data.label }
          ,
          labelPosition: "top",
          value: currentVal[data.name],
          onChange: function onChange(newVal) {
            currentVal[data.name] = newVal;
            onChangeValue(_objectSpread(_objectSpread({}, fieldsMap), {}, _defineProperty({}, field, currentVal)), 'fields_map');
          }
        }));
    }
  }));
}

function MapField(_ref6) {
  var data = _ref6.data,
      value = _ref6.value,
      index = _ref6.index,
      currentState = _ref6.currentState,
      onChangeValue = _ref6.onChangeValue,
      isCurrentFieldVisible = _ref6.isCurrentFieldVisible,
      _ref6$position = _ref6.position,
      position = _ref6$position === void 0 ? 'general' : _ref6$position;

  switch (data.type) {
    case 'text':
      return isCurrentFieldVisible(currentState, data) && wp.element.createElement("div", {
        key: data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(TextControl, {
        key: 'control_' + data.name + index,
        placeholder: data.label,
        value: value,
        onChange: function onChange(newVal) {
          onChangeValue(newVal, 'current_field_' + data.name);
        }
      }));

    case 'select':
      return isCurrentFieldVisible(currentState, data) && wp.element.createElement("div", {
        key: data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(SelectControl, {
        key: 'control_' + data.name + index,
        labelPosition: "side",
        options: data.options,
        label: data.label,
        value: value,
        onChange: function onChange(newVal) {
          onChangeValue(newVal, 'current_field_' + data.name);
        }
      }));

    case 'custom_select':
      return isCurrentFieldVisible(currentState, data) && wp.element.createElement("div", {
        key: data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(CustomSelectControl, {
        className: "jet-custom-select-control",
        label: data.label,
        options: data.options,
        onChange: function onChange(_ref7) {
          var selectedItem = _ref7.selectedItem;
          value = selectedItem.key;
          onChangeValue(value, 'current_field_' + data.name);
        },
        value: data.options.find(function (option) {
          return option.key === value;
        })
      }));

    case 'grouped_select':
      return isCurrentFieldVisible(currentState, data) && wp.element.createElement("div", {
        key: data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(_grouped_select_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
        options: data.options,
        label: data.label,
        labelPosition: "side",
        value: value,
        onChange: function onChange(newVal) {
          onChangeValue(newVal, 'current_field_' + data.name);
        }
      }));
  }

  return null;
}



/***/ }),

/***/ "./package/components/request-button.js":
/*!**********************************************!*\
  !*** ./package/components/request-button.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __ = wp.i18n.__;
var Button = wp.components.Button;

function RequestButton(_ref) {
  var label = _ref.label,
      _ref$ajaxArgs = _ref.ajaxArgs,
      ajaxArgs = _ref$ajaxArgs === void 0 ? {} : _ref$ajaxArgs,
      _ref$onSuccessRequest = _ref.onSuccessRequest,
      onSuccessRequest = _ref$onSuccessRequest === void 0 ? function () {} : _ref$onSuccessRequest,
      _ref$onFailRequest = _ref.onFailRequest,
      onFailRequest = _ref$onFailRequest === void 0 ? function () {} : _ref$onFailRequest,
      _ref$onLoading = _ref.onLoading,
      onLoading = _ref$onLoading === void 0 ? function () {} : _ref$onLoading,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? function () {} : _ref$children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$customRequest = _ref.customRequest,
      customRequest = _ref$customRequest === void 0 ? false : _ref$customRequest;

  var defaultRequest = function defaultRequest() {
    onLoading();
    jQuery.ajax({
      url: ajaxurl,
      type: 'POST',
      data: ajaxArgs
    }).done(function (response) {
      return response.success ? onSuccessRequest(response) : onFailRequest();
    }).fail(function () {
      return onFailRequest();
    });
  };

  var request = function request() {
    if (false === customRequest) {
      defaultRequest();
    } else if ('function' === typeof customRequest) {
      customRequest();
    } else {
      onFailRequest();
    }
  };

  return wp.element.createElement(Button, {
    disabled: disabled,
    key: 'validate_api_key',
    isPrimary: true,
    onClick: request,
    className: className
  }, children && children, label);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestButton);

/***/ }),

/***/ "./package/components/request-loading-button.js":
/*!******************************************************!*\
  !*** ./package/components/request-loading-button.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-button */ "./package/components/request-button.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function RequestLoadingButton(_ref) {
  var label = _ref.label,
      _ref$ajaxArgs = _ref.ajaxArgs,
      ajaxArgs = _ref$ajaxArgs === void 0 ? {} : _ref$ajaxArgs,
      _ref$onSuccessRequest = _ref.onSuccessRequest,
      _onSuccessRequest = _ref$onSuccessRequest === void 0 ? function () {} : _ref$onSuccessRequest,
      _ref$onFailRequest = _ref.onFailRequest,
      _onFailRequest = _ref$onFailRequest === void 0 ? function () {} : _ref$onFailRequest;

  var _useStateLoadingClass = (0,_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__.useStateLoadingClasses)(),
      _useStateLoadingClass2 = _slicedToArray(_useStateLoadingClass, 3),
      className = _useStateLoadingClass2[0],
      setLoadingClass = _useStateLoadingClass2[1],
      clearLoadingClass = _useStateLoadingClass2[2];

  return wp.element.createElement(_request_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ajaxArgs: ajaxArgs,
    label: label,
    onLoading: setLoadingClass,
    onSuccessRequest: function onSuccessRequest(response) {
      clearLoadingClass();

      _onSuccessRequest(response);
    },
    onFailRequest: function onFailRequest() {
      clearLoadingClass();

      _onFailRequest();
    },
    className: className
  }, wp.element.createElement("i", {
    className: "dashicons"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestLoadingButton);

/***/ }),

/***/ "./package/components/validate-button-with-store.js":
/*!**********************************************************!*\
  !*** ./package/components/validate-button-with-store.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
/* harmony import */ var _fetch_ajax_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-ajax-button */ "./package/components/fetch-ajax-button.js");
var _excluded = ["currentAction"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;

function ValidateButtonWithStore(_ref) {
  var currentAction = _ref.currentAction,
      props = _objectWithoutProperties(_ref, _excluded);

  return wp.element.createElement(_fetch_ajax_button__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    id: currentAction.id
  }, props));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__.withCurrentAction))(ValidateButtonWithStore));

/***/ }),

/***/ "./package/components/validate-button.js":
/*!***********************************************!*\
  !*** ./package/components/validate-button.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _request_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-button */ "./package/components/request-button.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ValidateButton(_ref) {
  var initialValid = _ref.initialValid,
      label = _ref.label,
      _ref$ajaxArgs = _ref.ajaxArgs,
      ajaxArgs = _ref$ajaxArgs === void 0 ? {} : _ref$ajaxArgs,
      _ref$onValid = _ref.onValid,
      onValid = _ref$onValid === void 0 ? function () {} : _ref$onValid,
      _ref$onInvalid = _ref.onInvalid,
      onInvalid = _ref$onInvalid === void 0 ? function () {} : _ref$onInvalid;

  var _useStateValidClasses = (0,_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__.useStateValidClasses)(initialValid || false),
      _useStateValidClasses2 = _slicedToArray(_useStateValidClasses, 4),
      className = _useStateValidClasses2[0],
      setValidClass = _useStateValidClasses2[1],
      setInvalidClass = _useStateValidClasses2[2],
      setLoadingClass = _useStateValidClasses2[3];

  var setValid = function setValid(response) {
    setValidClass();
    onValid(response);
  };

  var setInvalid = function setInvalid() {
    setInvalidClass();
    onInvalid();
  };

  return wp.element.createElement(_request_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ajaxArgs: ajaxArgs,
    label: label,
    onLoading: setLoadingClass,
    onSuccessRequest: setValid,
    onFailRequest: setInvalid,
    className: className
  }, wp.element.createElement("i", {
    className: "dashicons"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidateButton);

/***/ }),

/***/ "./package/components/wrapper-required-control.js":
/*!********************************************************!*\
  !*** ./package/components/wrapper-required-control.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WrapperRequiredControl)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RawHTML = wp.element.RawHTML;
function WrapperRequiredControl(_ref) {
  var field = _ref.field,
      children = _ref.children,
      _ref$labelKey = _ref.labelKey,
      labelKey = _ref$labelKey === void 0 ? 'label' : _ref$labelKey,
      _ref$requiredKey = _ref.requiredKey,
      requiredKey = _ref$requiredKey === void 0 ? 'required' : _ref$requiredKey,
      _ref$helpKey = _ref.helpKey,
      helpKey = _ref$helpKey === void 0 ? 'help' : _ref$helpKey;

  var _field = _slicedToArray(field, 2),
      name = _field[0],
      data = _field[1];
  /*const IconComponent = data.icon ? props => {
  	return <div
  		key={ 'inner_icon_field_' + name }
  		{ ...props }
  	>{ data.icon }</div>
  } : null;*/


  return wp.element.createElement("div", {
    className: "jet-user-meta__row",
    key: 'user_meta_' + name
  }, wp.element.createElement("div", {
    className: "jet-field-map__row-label"
  }, wp.element.createElement("span", {
    className: 'fields-map__label'
  }, data.hasOwnProperty(labelKey) && data[labelKey] && data[labelKey], !data.hasOwnProperty(labelKey) && data), data.hasOwnProperty(requiredKey) && data[requiredKey] && wp.element.createElement("span", {
    className: 'fields-map__required'
  }, " *"), data[helpKey] && wp.element.createElement("p", {
    className: 'components-base-control__help',
    style: {
      color: 'rgb(117, 117, 117)',
      margin: '1em 0 0 0'
    }
  }, wp.element.createElement(RawHTML, null, data[helpKey]))), children);
}

/***/ }),

/***/ "./package/helpers/actions/action-helper.js":
/*!**************************************************!*\
  !*** ./package/helpers/actions/action-helper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActionsByType": () => (/* binding */ getActionsByType),
/* harmony export */   "fromLocalizeHelper": () => (/* binding */ fromLocalizeHelper),
/* harmony export */   "actionByTypeList": () => (/* binding */ actionByTypeList),
/* harmony export */   "getActionSettings": () => (/* binding */ getActionSettings),
/* harmony export */   "convertListToFieldsMap": () => (/* binding */ convertListToFieldsMap)
/* harmony export */ });
/* harmony import */ var _hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
/* harmony import */ var _gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gateways/gateway-action-attrubites */ "./package/helpers/gateways/gateway-action-attrubites.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var getActionsByType = function getActionsByType(type) {
  var _useActions = (0,_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__.useActions)(),
      _useActions2 = _slicedToArray(_useActions, 1),
      actions = _useActions2[0];

  return actions.filter(function (action) {
    return type === action.type;
  });
};
var fromLocalizeHelper = function fromLocalizeHelper(name) {
  return name ? window.JetFBLocalizeHelper[name] : window.JetFBLocalizeHelper;
};
var actionByTypeList = function actionByTypeList(actionType) {
  var withDesc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return getActionsByType(actionType).map(function (action) {
    var newAction = {
      value: action.id,
      label: fromLocalizeHelper('getActionLabel')(action.type)
    };

    if (withDesc) {
      newAction.label += " (".concat((0,_gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_1__["default"])(action), ")");
    }

    return newAction;
  });
};
var getActionSettings = function getActionSettings(actionId) {
  var _useActions3 = (0,_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__.useActions)(),
      _useActions4 = _slicedToArray(_useActions3, 1),
      actions = _useActions4[0];

  var action = actions.find(function (action) {
    return actionId === action.id;
  });
  return action && action.settings ? action.settings : false;
};
var convertListToFieldsMap = function convertListToFieldsMap() {
  var response = [];

  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  for (var _i2 = 0, _sources = sources; _i2 < _sources.length; _i2++) {
    var source = _sources[_i2];
    response.push.apply(response, _toConsumableArray(source.map(function (item) {
      var id = item.value;
      return [id, item];
    })));
  }

  return response;
};

/***/ }),

/***/ "./package/helpers/actions/action-manager.js":
/*!***************************************************!*\
  !*** ./package/helpers/actions/action-manager.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-wrapper */ "./package/helpers/actions/action-wrapper.js");


function addAction(actionType, actionInstance) {
  window.jetFormDefaultActions = window.jetFormDefaultActions || {};
  window.jetFormDefaultActions[actionType] = (0,_action_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(actionType, actionInstance);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addAction);

/***/ }),

/***/ "./package/helpers/actions/action-wrapper.js":
/*!***************************************************!*\
  !*** ./package/helpers/actions/action-wrapper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withActionLocalizeScript)
/* harmony export */ });
/* harmony import */ var _action_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helper */ "./package/helpers/actions/action-helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var applyFilters = wp.hooks.applyFilters;
function withActionLocalizeScript(actionType, ActionInstance) {
  var localizedData = (0,_action_helper__WEBPACK_IMPORTED_MODULE_0__.fromLocalizeHelper)('getLocalizedFullPack')(actionType);
  return function (props) {
    var onChangeSetting = function onChangeSetting(value, key) {
      props.onChange(_objectSpread(_objectSpread({}, props.settings), {}, _defineProperty({}, key, value)));
    };

    var onChangeSettingObj = function onChangeSettingObj(value) {
      props.onChange(_objectSpread(_objectSpread({}, props.settings), value));
    };

    var getMapField = function getMapField(_ref) {
      var _ref$source = _ref.source,
          source = _ref$source === void 0 ? 'fields_map' : _ref$source,
          name = _ref.name;
      var settings = props.settings;

      if (typeof settings[source] !== 'undefined' && typeof settings[source][name] !== 'undefined') {
        return settings[source][name];
      }

      return '';
    };

    var setMapField = function setMapField(_ref2) {
      var _ref2$source = _ref2.source,
          source = _ref2$source === void 0 ? 'fields_map' : _ref2$source,
          nameField = _ref2.nameField,
          value = _ref2.value;

      var fieldsMap = _objectSpread(_objectSpread({}, props.settings[source]), {}, _defineProperty({}, nameField, value));

      props.onChange(_objectSpread(_objectSpread({}, props.settings), {}, _defineProperty({}, source, fieldsMap)));
    };

    var additionalProps = {
      onChangeSetting: onChangeSetting,
      getMapField: getMapField,
      setMapField: setMapField,
      onChangeSettingObj: onChangeSettingObj
    };

    var resultProps = _objectSpread(_objectSpread(_objectSpread({}, props), localizedData), additionalProps);

    return wp.element.createElement(React.Fragment, null, wp.element.createElement(ActionInstance, resultProps), applyFilters("jet.fb.render.action.".concat(actionType), wp.element.createElement(React.Fragment, null), resultProps));
  };
}

/***/ }),

/***/ "./package/helpers/blocks/blocks-helper.js":
/*!*************************************************!*\
  !*** ./package/helpers/blocks/blocks-helper.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormFieldsByBlock": () => (/* binding */ getFormFieldsByBlock),
/* harmony export */   "getInnerBlocks": () => (/* binding */ getInnerBlocks),
/* harmony export */   "getAvailableFieldsString": () => (/* binding */ getAvailableFieldsString),
/* harmony export */   "getAvailableFields": () => (/* binding */ getAvailableFields),
/* harmony export */   "getFormFieldsBlocks": () => (/* binding */ getFormFieldsBlocks),
/* harmony export */   "getFieldsWithoutCurrent": () => (/* binding */ getFieldsWithoutCurrent),
/* harmony export */   "getBlocksByName": () => (/* binding */ getBlocksByName)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;
var select = wp.data.select;
var blocksStore = wp.blocks.store;

var blocksRecursiveIterator = function blocksRecursiveIterator(blockParserFunc) {
  var blocksRecursiveIterator = function blocksRecursiveIterator(blocks) {
    blocks = blocks || select('core/block-editor').getBlocks();
    blocks.map(function (block) {
      blockParserFunc(block);

      if (block.innerBlocks.length) {
        blocksRecursiveIterator(block.innerBlocks);
      }
    });
  };

  blocksRecursiveIterator();
};

var getFormFieldsBlocks = function getFormFieldsBlocks() {
  var exclude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var suppressFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var formFields = [];
  var skipFields = ['submit', 'form-break', 'heading', 'group-break', 'conditional'].concat(_toConsumableArray(exclude));
  blocksRecursiveIterator(function (block) {
    if (block.name.includes('jet-forms/') && block.attributes.name && !skipFields.find(function (field) {
      return block.name.includes(field);
    })) {
      /*const blockType = select( blocksStore ).getBlockType( block.name );*/
      formFields.push({
        blockName: block.name,
        name: block.attributes.name,
        label: block.attributes.label || block.attributes.name,
        value: block.attributes.name //icon: blockType.icon.src,

      });
    }
  });
  formFields = placeholder ? [{
    value: '',
    label: placeholder
  }].concat(_toConsumableArray(formFields)) : formFields;
  return suppressFilter ? formFields : applyFilters('jet.fb.getFormFieldsBlocks', formFields);
};

var getFieldsWithoutCurrent = function getFieldsWithoutCurrent() {
  var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var suppressFilter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var skipFields = ['submit', 'form-break', 'heading', 'group-break', 'conditional'];
  var formFields = [];
  var current = wp.data.select('core/block-editor').getSelectedBlock();

  if (null === current) {
    return [];
  }

  blocksRecursiveIterator(function (block) {
    if (block.name.includes('jet-forms/') && current.clientId !== block.clientId && !skipFields.find(function (field) {
      return block.name.includes(field);
    })) {
      formFields.push({
        blockName: block.name,
        label: block.attributes.label || block.attributes.name,
        value: block.attributes.name
      });
    }
  });
  formFields = placeholder ? [{
    value: '',
    label: placeholder
  }].concat(_toConsumableArray(formFields)) : formFields;
  return suppressFilter ? formFields : applyFilters('jet.fb.getFormFieldsBlocks', formFields);
};

var getAvailableFields = function getAvailableFields() {
  var exclude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fields = [];
  var blocks = getFormFieldsBlocks(exclude);

  if (blocks) {
    blocks.forEach(function (item) {
      return fields.push(item.name);
    });
  }

  return fields;
};

var getAvailableFieldsString = function getAvailableFieldsString(blockName) {
  var fields = getAvailableFields([blockName]);
  var fieldsString = [];
  fields.forEach(function (item) {
    fieldsString.push('%FIELD::' + item + '%');
  });
  return __('Available fields: ', 'jet-form-builder') + fieldsString.join(', ');
};

var getInnerBlocks = function getInnerBlocks(clientId) {
  var block = wp.data.select('core/block-editor').getBlock(clientId);
  return block ? block.innerBlocks : [];
};

var getFormFieldsByBlock = function getFormFieldsByBlock(blockExclude) {
  return function () {
    return getFormFieldsBlocks([blockExclude.name]);
  };
};

var getBlocksByName = function getBlocksByName(blockNames) {
  var blocks = [];
  blocksRecursiveIterator(function (block) {
    if (!blockNames.includes(block.name)) {
      return;
    }

    blocks.push(block);
  });
  return blocks;
};



/***/ }),

/***/ "./package/helpers/gateways/gateway-action-attrubites.js":
/*!***************************************************************!*\
  !*** ./package/helpers/gateways/gateway-action-attrubites.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_action_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-helper */ "./package/helpers/actions/action-helper.js");


function gatewayActionAttributes(action) {
  var _fromLocalizeHelper = (0,_actions_action_helper__WEBPACK_IMPORTED_MODULE_0__.fromLocalizeHelper)('getLocalizedFullPack')(action.type),
      gatewayAttrs = _fromLocalizeHelper.gatewayAttrs,
      label = _fromLocalizeHelper.label;

  var actionSettings = (0,_actions_action_helper__WEBPACK_IMPORTED_MODULE_0__.getActionSettings)(action.id);

  var value = function value(attr) {
    if (actionSettings[attr]) {
      return actionSettings[attr];
    }

    if (actionSettings[action.type] && actionSettings[action.type][attr]) {
      return actionSettings[action.type][attr];
    }

    return 'NULL';
  };

  var labelWithAttrs = gatewayAttrs().map(function (attr) {
    return "".concat(label(attr), " ").concat(value(attr));
  });
  return labelWithAttrs.join(', ');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gatewayActionAttributes);

/***/ }),

/***/ "./package/helpers/gateways/gateway-helper.js":
/*!****************************************************!*\
  !*** ./package/helpers/gateways/gateway-helper.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gatewayAttr": () => (/* binding */ gatewayAttr),
/* harmony export */   "gatewayLabel": () => (/* binding */ gatewayLabel),
/* harmony export */   "registerGateway": () => (/* binding */ registerGateway),
/* harmony export */   "issetRenderGateway": () => (/* binding */ issetRenderGateway),
/* harmony export */   "renderGateway": () => (/* binding */ renderGateway),
/* harmony export */   "renderGatewayWithPlaceholder": () => (/* binding */ renderGatewayWithPlaceholder)
/* harmony export */ });
var gatewayAttr = function gatewayAttr() {
  var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var isEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var data = window.JetFormEditorData.gateways;

  if (!attr) {
    return data;
  }

  if (!data[attr]) {
    return false;
  }

  var source = data[attr];
  return function (name) {
    return source[name] ? source[name] : isEmpty;
  };
};
var gatewayLabel = function gatewayLabel(type) {
  var isEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var label = gatewayAttr('labels');
  return function (attr) {
    return label(type) ? label(type)[attr] : isEmpty;
  };
};
var registerGateway = function registerGateway(id, callback) {
  var forWhat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'cred';
  window.JetFBGatewaysList = window.JetFBGatewaysList || {};
  window.JetFBGatewaysList[id] = window.JetFBGatewaysList[id] || {};
  window.JetFBGatewaysList[id][forWhat] = callback;
};
var issetRenderGateway = function issetRenderGateway(id) {
  var what = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'cred';
  return window.JetFBGatewaysList && window.JetFBGatewaysList[id] && window.JetFBGatewaysList[id][what];
};
var renderGateway = function renderGateway(id, props) {
  var what = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'cred';

  if (!issetRenderGateway(id, what)) {
    return null;
  }

  var GatewayComponent = window.JetFBGatewaysList[id][what];
  return wp.element.createElement(GatewayComponent, props);
};
var renderGatewayWithPlaceholder = function renderGatewayWithPlaceholder(id, props) {
  var what = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'cred';
  var Placeholder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (!issetRenderGateway(id, what)) {
    return Placeholder;
  }

  return renderGateway(id, props, what);
};

/***/ }),

/***/ "./package/helpers/hooks/hooks-helper.js":
/*!***********************************************!*\
  !*** ./package/helpers/hooks/hooks-helper.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMetaState": () => (/* binding */ useMetaState),
/* harmony export */   "useActions": () => (/* binding */ useActions),
/* harmony export */   "initClasses": () => (/* binding */ initClasses),
/* harmony export */   "useStateValidClasses": () => (/* binding */ useStateValidClasses),
/* harmony export */   "useStateLoadingClasses": () => (/* binding */ useStateLoadingClasses),
/* harmony export */   "useSuccessNotice": () => (/* binding */ useSuccessNotice),
/* harmony export */   "withNotice": () => (/* binding */ withNotice),
/* harmony export */   "getRequestFields": () => (/* binding */ getRequestFields),
/* harmony export */   "useRequestFields": () => (/* binding */ useRequestFields),
/* harmony export */   "withCurrentAction": () => (/* binding */ withCurrentAction),
/* harmony export */   "withRequestFields": () => (/* binding */ withRequestFields),
/* harmony export */   "withSelectActionLoading": () => (/* binding */ withSelectActionLoading),
/* harmony export */   "withDispatchActionLoading": () => (/* binding */ withDispatchActionLoading),
/* harmony export */   "withDispatchMeta": () => (/* binding */ withDispatchMeta),
/* harmony export */   "withSelectMeta": () => (/* binding */ withSelectMeta),
/* harmony export */   "withSelectGateways": () => (/* binding */ withSelectGateways),
/* harmony export */   "withSelectGatewaysLoading": () => (/* binding */ withSelectGatewaysLoading),
/* harmony export */   "withDispatchGateways": () => (/* binding */ withDispatchGateways),
/* harmony export */   "withSelectFormFields": () => (/* binding */ withSelectFormFields)
/* harmony export */ });
var _excluded = ["gatewayRequestId"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var applyFilters = wp.hooks.applyFilters;
var useMetaState = function useMetaState(key) {
  var ifEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '{}';
  var meta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  });

  var _useDispatch = useDispatch('core/editor'),
      editPost = _useDispatch.editPost;

  var _useState = useState(JSON.parse(meta[key] || ifEmpty)),
      _useState2 = _slicedToArray(_useState, 2),
      metaStateValue = _useState2[0],
      setMetaStateValue = _useState2[1];

  useEffect(function () {
    editPost({
      meta: _objectSpread(_objectSpread({}, meta), {}, _defineProperty({}, key, JSON.stringify(metaStateValue)))
    });
  }, [metaStateValue]);
  return [metaStateValue, setMetaStateValue];
};
var useActions = function useActions() {
  var withEditPostEffect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var meta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  });

  var _useDispatch2 = useDispatch('core/editor'),
      editPost = _useDispatch2.editPost;

  var _useState3 = useState(JSON.parse(meta._jf_actions || '[]')),
      _useState4 = _slicedToArray(_useState3, 2),
      actions = _useState4[0],
      setActions = _useState4[1];

  useEffect(function () {
    if (withEditPostEffect) {
      editPost({
        meta: _objectSpread(_objectSpread({}, meta), {}, {
          _jf_actions: JSON.stringify(actions)
        })
      });
    }
  }, [actions]);
  return [actions, setActions];
};
var initClasses = ['jet-form-validate-button'];
var useStateValidClasses = function useStateValidClasses(initialValid) {
  var validClass = 'is-valid';
  var invalidClass = 'is-invalid';

  var initStateClasses = function initStateClasses() {
    if (initialValid) {
      return [].concat(initClasses, [validClass]);
    } else if (!initialValid) {
      return [].concat(initClasses, [invalidClass]);
    }
  };

  var _useState5 = useState(initStateClasses()),
      _useState6 = _slicedToArray(_useState5, 2),
      classes = _useState6[0],
      setClasses = _useState6[1];

  var setValidClass = function setValidClass() {
    setClasses([].concat(initClasses, [validClass]));
  };

  var setInvalidClass = function setInvalidClass() {
    setClasses([].concat(initClasses, [invalidClass]));
  };

  var setLoadingClass = function setLoadingClass() {
    setClasses([].concat(initClasses, ['loading']));
  };

  return [classes.join(' '), setValidClass, setInvalidClass, setLoadingClass];
};
var useStateLoadingClasses = function useStateLoadingClasses() {
  var _useState7 = useState([].concat(initClasses)),
      _useState8 = _slicedToArray(_useState7, 2),
      classes = _useState8[0],
      setClasses = _useState8[1];

  var setLoadingClass = function setLoadingClass() {
    setClasses([].concat(initClasses, ['loading']));
  };

  var clearLoadingClass = function clearLoadingClass() {
    setClasses(initClasses);
  };

  return [classes.join(' '), setLoadingClass, clearLoadingClass];
};
var useSuccessNotice = function useSuccessNotice(text) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      hasCopied = _useState10[0],
      setHasCopied = _useState10[1];

  var noticeStore = useDispatch(wp.notices.store);
  useEffect(function () {
    if (hasCopied) {
      noticeStore.createWarningNotice(text, _objectSpread({
        type: 'snackbar'
      }, options));
    }
  }, [hasCopied]);
  return setHasCopied;
};
var withNotice = function withNotice(dispatch) {
  return {
    createNotice: function createNotice(text) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      dispatch(wp.notices.store).createNotice(text, _objectSpread({
        type: 'default',
        status: 'info'
      }, options));
    }
  };
};
var getRequestFields = function getRequestFields(actions) {
  var requestFields = [];

  var _iterator = _createForOfIteratorHelper(actions),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var action = _step.value;
      var _action$settings$acti = action.settings[action.type],
          current = _action$settings$acti === void 0 ? {} : _action$settings$acti;

      if (!current.requestFields) {
        continue;
      }

      var _iterator2 = _createForOfIteratorHelper(current.requestFields),
          _step2;

      try {
        var _loop = function _loop() {
          var requestField = _step2.value;
          var index = requestFields.findIndex(function (field) {
            return field.value === requestField.name;
          });

          if (-1 !== index) {
            return "continue";
          }

          requestFields.push({
            from: action.type,
            id: action.id,
            label: requestField.name,
            value: requestField.name,
            name: requestField.name,
            help: requestField.help
          });
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _ret = _loop();

          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return requestFields;
};
var useRequestFields = function useRequestFields() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var meta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  });
  var actions = JSON.parse(meta._jf_actions || '[]');
  return getRequestFields(actions);
};

var selectPostMeta = function selectPostMeta(select) {
  return select('core/editor').getEditedPostAttribute('meta') || {};
};

var selectParsedPostMeta = function selectParsedPostMeta(select, name) {
  var allMeta = selectPostMeta(select);
  return JSON.parse(allMeta[name] || '{}');
};

var withCurrentAction = function withCurrentAction(select) {
  var currentAction = select('jet-forms/actions').getCurrentAction();
  return {
    currentAction: currentAction
  };
};
var withRequestFields = function withRequestFields(select) {
  var meta = select('core/editor').getEditedPostAttribute('meta') || {};
  var actions = JSON.parse(meta._jf_actions || '[]');
  var currentAction = select('jet-forms/actions').getCurrentAction();
  actions.splice(currentAction.index);
  return {
    requestFields: getRequestFields(actions)
  };
};
var withSelectActionLoading = function withSelectActionLoading(select) {
  var loadingState = select('jet-forms/actions').getCurrentLoading();
  return {
    loadingState: loadingState
  };
};
var withDispatchActionLoading = function withDispatchActionLoading(dispatch) {
  return {
    setLoading: function setLoading(actionId) {
      dispatch('jet-forms/actions').setLoading({
        actionId: actionId
      });
    },
    setResultSuccess: function setResultSuccess(actionId, response) {
      dispatch('jet-forms/actions').setLoadingResult({
        actionId: actionId,
        success: true,
        response: response
      });
    },
    setResultFail: function setResultFail(actionId) {
      dispatch('jet-forms/actions').setLoadingResult({
        actionId: actionId,
        success: false,
        response: {}
      });
    }
  };
};
var withDispatchMeta = function withDispatchMeta(metaSlug, callbackName) {
  return function (dispatch, ownProps, _ref) {
    var select = _ref.select;
    var allMeta = selectPostMeta(select);

    var _dispatch = dispatch('core/editor'),
        editPost = _dispatch.editPost;

    var change = function change(newState) {
      return editPost({
        meta: _objectSpread(_objectSpread({}, allMeta), {}, _defineProperty({}, metaSlug, JSON.stringify(newState)))
      });
    };

    return _defineProperty({}, callbackName, change);
  };
};
var withSelectMeta = function withSelectMeta(metaSlug) {
  var ifEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (select) {
    var current = selectParsedPostMeta(select, metaSlug);
    return _defineProperty({}, metaSlug, current || ifEmpty);
  };
};
var withSelectGateways = function withSelectGateways(select) {
  var store = select('jet-forms/gateways');
  return {
    gatewayGeneral: store.getGateway(),
    gatewaySpecific: store.getGatewaySpecific(),
    gatewayRequestId: store.getCurrentRequestId(),
    gatewayRequest: store.getCurrentRequest()
  };
};
var withSelectGatewaysLoading = function withSelectGatewaysLoading(select) {
  var _withSelectGateways = withSelectGateways(select),
      gatewayRequestId = _withSelectGateways.gatewayRequestId,
      other = _objectWithoutProperties(_withSelectGateways, _excluded);

  var loadingGateway = select('jet-forms/actions').getLoading(gatewayRequestId);
  return _objectSpread({
    loadingGateway: loadingGateway,
    gatewayRequestId: gatewayRequestId
  }, other);
};
var withDispatchGateways = function withDispatchGateways(dispatch, ownProps, _ref4) {
  var select = _ref4.select;
  return {
    setGatewayRequest: function setGatewayRequest(item) {
      var _withSelectGateways2 = withSelectGateways(select),
          gatewayGeneral = _withSelectGateways2.gatewayGeneral;

      item.id = gatewayGeneral.gateway + '/' + (item === null || item === void 0 ? void 0 : item.id);
      dispatch('jet-forms/gateways').setRequest(item);
    },
    setGateway: function setGateway(item) {
      dispatch('jet-forms/gateways').setGateway(item);
    },
    setGatewayInner: function setGatewayInner(item) {
      dispatch('jet-forms/gateways').setGatewayInner(item);
    },
    setGatewaySpecific: function setGatewaySpecific(item) {
      dispatch('jet-forms/gateways').setGatewaySpecific(item);
    }
  };
};

var getFormFields = function getFormFields(blockParserFunc, blocks) {
  blocks.map(function (block) {
    blockParserFunc(block);

    if (block.innerBlocks.length) {
      getFormFields(blockParserFunc, block.innerBlocks);
    }
  });
};

var withSelectFormFields = function withSelectFormFields() {
  var exclude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var suppressFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return function (select) {
    var formFields = [];
    var skipFields = ['submit', 'form-break', 'heading', 'group-break', 'conditional'].concat(_toConsumableArray(exclude));
    getFormFields(function (block) {
      if (block.name.includes('jet-forms/') && block.attributes.name && !skipFields.find(function (field) {
        return block.name.includes(field);
      })) {
        /*const blockType = select( blocksStore ).getBlockType( block.name );*/
        formFields.push({
          blockName: block.name,
          name: block.attributes.name,
          label: block.attributes.label || block.attributes.name,
          value: block.attributes.name //icon: blockType.icon.src,

        });
      }
    }, select('core/block-editor').getBlocks());
    formFields = placeholder ? [{
      value: '',
      label: placeholder
    }].concat(_toConsumableArray(formFields)) : formFields;
    return {
      formFields: suppressFilter ? formFields : applyFilters('jet.fb.getFormFieldsBlocks', formFields)
    };
  };
};

/***/ }),

/***/ "./package/helpers/settings/helper.js":
/*!********************************************!*\
  !*** ./package/helpers/settings/helper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalTab": () => (/* binding */ globalTab)
/* harmony export */ });
function globalTab(_ref) {
  var slug = _ref.slug,
      _ref$element = _ref.element,
      element = _ref$element === void 0 ? '' : _ref$element,
      _ref$empty = _ref.empty,
      empty = _ref$empty === void 0 ? '' : _ref$empty;
  var global = JetFormEditorData.global_settings;

  if (!global) {
    return empty;
  }

  if (element) {
    return global[slug] && global[slug][element] ? global[slug][element] : empty;
  }

  return global[slug] || empty;
}



/***/ }),

/***/ "./package/helpers/tools.js":
/*!**********************************!*\
  !*** ./package/helpers/tools.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "event": () => (/* binding */ event),
/* harmony export */   "listen": () => (/* binding */ listen),
/* harmony export */   "versionCompare": () => (/* binding */ versionCompare),
/* harmony export */   "maybeCyrToLatin": () => (/* binding */ maybeCyrToLatin),
/* harmony export */   "getConvertedName": () => (/* binding */ getConvertedName),
/* harmony export */   "classnames": () => (/* binding */ classnames),
/* harmony export */   "convertObjectToOptionsList": () => (/* binding */ convertObjectToOptionsList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var semverGt = __webpack_require__(/*! semver/functions/gt */ "../node_modules/semver/functions/gt.js");

var semverLt = __webpack_require__(/*! semver/functions/lt */ "../node_modules/semver/functions/lt.js");

var semverGte = __webpack_require__(/*! semver/functions/gte */ "../node_modules/semver/functions/gte.js");

var semverLte = __webpack_require__(/*! semver/functions/lte */ "../node_modules/semver/functions/lte.js");

var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;

var Tools = /*#__PURE__*/function () {
  function Tools() {
    _classCallCheck(this, Tools);
  }

  _createClass(Tools, null, [{
    key: "getLabel",
    value: function getLabel(meta, attrs) {
      var label = {};
      label.name = attrs.label;

      if (attrs.required) {
        label.mark = JSON.parse(meta._jf_args).required_mark || '';
      }

      return label;
    }
  }, {
    key: "withPlaceholder",
    value: function withPlaceholder(source) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--';
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return [{
        label: label,
        value: value
      }].concat(_toConsumableArray(source));
    }
  }, {
    key: "isEmptyObject",
    value: function isEmptyObject(object) {
      return 'object' === _typeof(object) && Object.keys(object).length === 0;
    }
  }, {
    key: "getFuncCondition",
    value: function getFuncCondition(nameFunction) {
      return new Function("return window.JetFormBuilderConditions[ '".concat(nameFunction, "' ]"));
    }
  }, {
    key: "addConditionForCondType",
    value: function addConditionForCondType(name, callable) {
      window.JetFormBuilderConditions = window.JetFormBuilderConditions || {};
      window.JetFormBuilderConditions[name] = callable;
    }
  }, {
    key: "parseConditionsFunc",
    value: function parseConditionsFunc(source) {
      var types = [];
      source.forEach(function (type) {
        if (type.condition) {
          if (Tools.getFuncCondition(type.condition)()(type.value)) {
            types.push(type);
          }
        } else {
          types.push(type);
        }
      });
      return types;
    }
  }]);

  return Tools;
}();

var event = function event(name) {
  var initializeCallbacksEvent = new Event(name);
  return function () {
    return document.dispatchEvent(initializeCallbacksEvent);
  };
};
var listen = function listen(name, func) {
  document.addEventListener(name, func);
};

function getSemVerFunc(operator) {
  switch (operator) {
    case '>':
      return semverGt;

    case '>=':
      return semverGte;

    case '<':
      return semverLt;

    case '<=':
      return semverLte;
  }

  return function () {
    return false;
  };
}

function versionCompare(version1, version2, operator) {
  try {
    return getSemVerFunc(operator)(version1, version2);
  } catch (te) {
    return false;
  }
}
var convertSymbols = applyFilters('jet.fb.tools.convertSymbols', {
  checkCyrRegex: /[а-яёїєґі]/i,
  cyrRegex: /[а-яёїєґі]/gi,
  charsMap: {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'io',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'i',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'kh',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ы': 'y',
    'э': 'e',
    'ю': 'iu',
    'я': 'ia',
    'ї': 'i',
    'є': 'ie',
    'ґ': 'g',
    'і': 'i'
  }
});
function maybeCyrToLatin(str) {
  if (convertSymbols.checkCyrRegex.test(str)) {
    str = str.replace(convertSymbols.cyrRegex, function (match) {
      if (undefined === convertSymbols.charsMap[match]) {
        return '';
      }

      return convertSymbols.charsMap[match];
    });
  }

  return str;
}
function getConvertedName(valueToChange) {
  var regex = /\s+/g,
      slug = valueToChange.toLowerCase().replace(regex, '_'); // Replace accents

  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Replace cyrillic

  slug = maybeCyrToLatin(slug);

  if (20 < slug.length) {
    // 34 - Lionel Messi's age when he left Barcelona
    slug = slug.substr(0, 34);

    if ('-' === slug.slice(-1)) {
      slug = slug.slice(0, -1);
    }
  }

  return slug;
}
function classnames() {
  var result = [];

  var parseValues = function parseValues(source) {
    source.forEach(function (itemClass) {
      if (!itemClass) {
        return;
      }

      if (Array.isArray(itemClass)) {
        parseValues(itemClass);
      }

      if ('string' === typeof itemClass) {
        result.push(itemClass.trim());
      }

      if ('object' === _typeof(itemClass)) {
        for (var itemClassKey in itemClass) {
          if (itemClass[itemClassKey]) {
            result.push((itemClassKey + '').trim());
          }
        }
      }
    });
  };

  for (var _len = arguments.length, additional = new Array(_len), _key = 0; _key < _len; _key++) {
    additional[_key] = arguments[_key];
  }

  parseValues(additional);
  return result.join(' ');
}
function convertObjectToOptionsList() {
  var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$usePlaceholder = _ref.usePlaceholder,
      usePlaceholder = _ref$usePlaceholder === void 0 ? true : _ref$usePlaceholder,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '--' : _ref$label,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;

  var placeholder = {
    label: label,
    value: value
  };

  if (!entries) {
    return usePlaceholder ? [placeholder] : [];
  }

  var options = Object.entries(entries).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        value = _ref3[0],
        label = _ref3[1];

    return {
      value: value,
      label: label
    };
  });
  return usePlaceholder ? [placeholder].concat(_toConsumableArray(options)) : options;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);

/***/ }),

/***/ "./package/stores/action-store.js":
/*!****************************************!*\
  !*** ./package/stores/action-store.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var _wp$data = wp.data,
    createReduxStore = _wp$data.createReduxStore,
    register = _wp$data.register;
var DEFAULT_LOADING_STATE = {
  id: -1,
  state: '',
  success: false,
  response: {},
  loading: false,
  buttonClassName: _toConsumableArray(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__.initClasses)
};

var getLoadingItem = function getLoadingItem() {
  var additional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var item = _objectSpread({}, DEFAULT_LOADING_STATE);

  if (additional.state) {
    item.buttonClassName = [].concat(_toConsumableArray(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__.initClasses), [additional.state]);
  }

  return _objectSpread(_objectSpread({}, item), additional);
};

var DEFAULT_STATE = {
  currentAction: {},
  loadingState: [getLoadingItem()]
};
var actions = {
  setCurrentAction: function setCurrentAction(item) {
    return {
      type: 'SET_CURRENT_ACTION',
      item: item
    };
  },
  setLoading: function setLoading(item) {
    return {
      type: 'SET_LOADING',
      state: {
        id: item.actionId,
        state: 'loading',
        loading: true
      }
    };
  },
  setLoadingResult: function setLoadingResult(item) {
    return {
      type: 'SET_LOADING',
      state: {
        id: item.actionId,
        state: item.success ? 'is-valid' : 'is-invalid',
        success: item.success,
        response: item.response,
        loading: false
      }
    };
  }
};
var selectors = {
  getCurrentAction: function getCurrentAction(state) {
    return state.currentAction;
  },
  getLoadingIndex: function getLoadingIndex(state, actionId) {
    return state.loadingState.findIndex(function (action) {
      return action.id === actionId;
    });
  },
  getLoading: function getLoading(state, actionId) {
    var actionIndex = selectors.getLoadingIndex(state, actionId);
    return -1 !== actionIndex ? state.loadingState[actionIndex] : DEFAULT_LOADING_STATE;
  },
  getCurrentLoading: function getCurrentLoading(state) {
    var _state$currentAction;

    var actionId = (_state$currentAction = state.currentAction) === null || _state$currentAction === void 0 ? void 0 : _state$currentAction.id;
    return selectors.getLoading(state, actionId);
  },
  dangerGetAllLoading: function dangerGetAllLoading(state) {
    return state.loadingState;
  }
};
register(createReduxStore('jet-forms/actions', {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_CURRENT_ACTION':
        return _objectSpread(_objectSpread({}, state), {}, {
          currentAction: action.item
        });

      case 'SET_LOADING':
        var actionIndex = selectors.getLoadingIndex(state, action.state.id);

        var loading = _toConsumableArray(state.loadingState);

        if (-1 !== actionIndex) {
          loading[actionIndex] = getLoadingItem(action.state);
        } else {
          loading.push(getLoadingItem(action.state));
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          loadingState: loading
        });
    }

    return state;
  },
  actions: actions,
  selectors: selectors
}));

/***/ }),

/***/ "./package/stores/gateways-store.js":
/*!******************************************!*\
  !*** ./package/stores/gateways-store.js ***!
  \******************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$data = wp.data,
    createReduxStore = _wp$data.createReduxStore,
    register = _wp$data.register;
var DEFAULT_STATE = {
  currentRequest: {
    id: -1
  },
  currentGateway: {}
};
var actions = {
  setRequest: function setRequest(item) {
    return {
      type: 'SET_CURRENT_REQUEST',
      item: item
    };
  },
  setGateway: function setGateway(item) {
    return {
      type: 'SET_CURRENT_GATEWAY',
      item: item
    };
  },
  setGatewayInner: function setGatewayInner(item) {
    return {
      type: 'SET_CURRENT_GATEWAY_INNER',
      item: item
    };
  },
  setGatewaySpecific: function setGatewaySpecific(item) {
    return {
      type: 'SET_CURRENT_GATEWAY_SPECIFIC',
      item: item
    };
  }
};
var selectors = {
  getCurrentRequestId: function getCurrentRequestId(state) {
    return state.currentRequest.id;
  },
  getCurrentRequest: function getCurrentRequest(state) {
    return state.currentRequest;
  },
  getGateway: function getGateway(state) {
    return state.currentGateway;
  },
  getGatewaySpecific: function getGatewaySpecific(state) {
    var _state$currentGateway;

    return state.currentGateway[(_state$currentGateway = state.currentGateway) === null || _state$currentGateway === void 0 ? void 0 : _state$currentGateway.gateway] || {};
  }
};
register(createReduxStore('jet-forms/gateways', {
  reducer: function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SET_CURRENT_REQUEST':
        return _objectSpread(_objectSpread({}, state), {}, {
          currentRequest: action.item
        });

      case 'SET_CURRENT_GATEWAY':
        return _objectSpread(_objectSpread({}, state), {}, {
          currentGateway: _objectSpread(_objectSpread({}, state.currentGateway), action.item)
        });

      case 'SET_CURRENT_GATEWAY_SPECIFIC':
        return _objectSpread(_objectSpread({}, state), {}, {
          currentGateway: _objectSpread(_objectSpread({}, state.currentGateway), {}, _defineProperty({}, state.currentGateway.gateway, _objectSpread(_objectSpread({}, selectors.getGatewaySpecific(state)), action.item)))
        });

      case 'SET_CURRENT_GATEWAY_INNER':
        var _action$item = action.item,
            key = _action$item.key,
            value = _action$item.value;
        return _objectSpread(_objectSpread({}, state), {}, {
          currentGateway: _objectSpread(_objectSpread({}, state.currentGateway), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, state.currentGateway[key] || {}), value)))
        });
    }

    return state;
  },
  actions: actions,
  selectors: selectors
}));

/***/ }),

/***/ "../node_modules/semver/classes/semver.js":
/*!************************************************!*\
  !*** ../node_modules/semver/classes/semver.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(/*! ../internal/debug */ "../node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "../node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "../node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "../node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "../node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "../node_modules/semver/functions/compare.js":
/*!***************************************************!*\
  !*** ../node_modules/semver/functions/compare.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "../node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ "../node_modules/semver/functions/gt.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/functions/gt.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ "../node_modules/semver/functions/gte.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/gte.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ "../node_modules/semver/functions/lt.js":
/*!**********************************************!*\
  !*** ../node_modules/semver/functions/lt.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ "../node_modules/semver/functions/lte.js":
/*!***********************************************!*\
  !*** ../node_modules/semver/functions/lte.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__(/*! ./compare */ "../node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ "../node_modules/semver/internal/constants.js":
/*!****************************************************!*\
  !*** ../node_modules/semver/internal/constants.js ***!
  \****************************************************/
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH
}


/***/ }),

/***/ "../node_modules/semver/internal/debug.js":
/*!************************************************!*\
  !*** ../node_modules/semver/internal/debug.js ***!
  \************************************************/
/***/ ((module) => {

const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ "../node_modules/semver/internal/identifiers.js":
/*!******************************************************!*\
  !*** ../node_modules/semver/internal/identifiers.js ***!
  \******************************************************/
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
}


/***/ }),

/***/ "../node_modules/semver/internal/parse-options.js":
/*!********************************************************!*\
  !*** ../node_modules/semver/internal/parse-options.js ***!
  \********************************************************/
/***/ ((module) => {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl']
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((options, k) => {
    options[k] = true
    return options
  }, {})
module.exports = parseOptions


/***/ }),

/***/ "../node_modules/semver/internal/re.js":
/*!*********************************************!*\
  !*** ../node_modules/semver/internal/re.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(/*! ./constants */ "../node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "../node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$')


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./package/manager.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_action_fields_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/action-fields-map */ "./package/components/action-fields-map.js");
/* harmony import */ var _components_action_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/action-modal */ "./package/components/action-modal.js");
/* harmony import */ var _components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/wrapper-required-control */ "./package/components/wrapper-required-control.js");
/* harmony import */ var _components_request_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/request-button */ "./package/components/request-button.js");
/* harmony import */ var _components_validate_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validate-button */ "./package/components/validate-button.js");
/* harmony import */ var _helpers_actions_action_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/actions/action-manager */ "./package/helpers/actions/action-manager.js");
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/tools */ "./package/helpers/tools.js");
/* harmony import */ var _components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/presets/dynamic-preset */ "./package/components/presets/dynamic-preset.js");
/* harmony import */ var _editor_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor/blocks/controls/fields-map */ "./editor/blocks/controls/fields-map.js");
/* harmony import */ var _components_fields_field_with_preset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fields/field-with-preset */ "./package/components/fields/field-with-preset.js");
/* harmony import */ var _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/presets/preset-render */ "./package/components/presets/preset-render.js");
/* harmony import */ var _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/blocks/blocks-helper */ "./package/helpers/blocks/blocks-helper.js");
/* harmony import */ var _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/gateways/gateway-helper */ "./package/helpers/gateways/gateway-helper.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
/* harmony import */ var _components_fields_field_wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/fields/field-wrapper */ "./package/components/fields/field-wrapper.js");
/* harmony import */ var _components_fields_macros_inserter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/fields/macros-inserter */ "./package/components/fields/macros-inserter.js");
/* harmony import */ var _components_fields_repeater_with_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/fields/repeater-with-state */ "./package/components/fields/repeater-with-state.js");
/* harmony import */ var _components_presets_preset_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/presets/preset-editor */ "./package/components/presets/preset-editor.js");
/* harmony import */ var _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/fields/field-control */ "./package/components/fields/field-control.js");
/* harmony import */ var _components_actions_placeholder_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/actions/placeholder-message */ "./package/components/actions/placeholder-message.js");
/* harmony import */ var _components_actions_action_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/actions/action-messages */ "./package/components/actions/action-messages.js");
/* harmony import */ var _components_horizontal_line__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/horizontal-line */ "./package/components/horizontal-line.js");
/* harmony import */ var _components_request_loading_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/request-loading-button */ "./package/components/request-loading-button.js");
/* harmony import */ var _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/actions/action-helper */ "./package/helpers/actions/action-helper.js");
/* harmony import */ var _helpers_gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/gateways/gateway-action-attrubites */ "./package/helpers/gateways/gateway-action-attrubites.js");
/* harmony import */ var _helpers_settings_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/settings/helper */ "./package/helpers/settings/helper.js");
/* harmony import */ var _components_fields_field_settings_wrapper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/fields/field-settings-wrapper */ "./package/components/fields/field-settings-wrapper.js");
/* harmony import */ var _components_grouped_select_control__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/grouped-select-control */ "./package/components/grouped-select-control.js");
/* harmony import */ var _components_fields_controls__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/fields/controls */ "./package/components/fields/controls.js");
/* harmony import */ var _components_controls_base_help__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/controls/base-help */ "./package/components/controls/base-help.js");
/* harmony import */ var _stores_action_store__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./stores/action-store */ "./package/stores/action-store.js");
/* harmony import */ var _stores_gateways_store__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stores/gateways-store */ "./package/stores/gateways-store.js");
/* harmony import */ var _stores_gateways_store__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_stores_gateways_store__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _components_validate_button_with_store__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/validate-button-with-store */ "./package/components/validate-button-with-store.js");
/* harmony import */ var _components_gateway_fetch_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/gateway-fetch-button */ "./package/components/gateway-fetch-button.js");

































 // JFBComponents

window.JetFBComponents = {
  ActionFieldsMap: _components_action_fields_map__WEBPACK_IMPORTED_MODULE_0__["default"],
  ActionModal: _components_action_modal__WEBPACK_IMPORTED_MODULE_1__["default"],
  RequestButton: _components_request_button__WEBPACK_IMPORTED_MODULE_3__["default"],
  ValidateButton: _components_validate_button__WEBPACK_IMPORTED_MODULE_4__["default"],
  RequestLoadingButton: _components_request_loading_button__WEBPACK_IMPORTED_MODULE_22__["default"],
  WrapperRequiredControl: _components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_2__["default"],
  DynamicPreset: _components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_7__["default"],
  JetFieldsMapControl: _editor_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_8__["default"],
  FieldWithPreset: _components_fields_field_with_preset__WEBPACK_IMPORTED_MODULE_9__["default"],
  GlobalField: _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__.GlobalField,
  AvailableMapField: _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__.AvailableMapField,
  MapField: _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__.MapField,
  FieldWrapper: _components_fields_field_wrapper__WEBPACK_IMPORTED_MODULE_14__["default"],
  MacrosInserter: _components_fields_macros_inserter__WEBPACK_IMPORTED_MODULE_15__["default"],
  RepeaterWithState: _components_fields_repeater_with_state__WEBPACK_IMPORTED_MODULE_16__["default"],
  AdvancedFields: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__.AdvancedFields,
  GeneralFields: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__.GeneralFields,
  ToolBarFields: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__.ToolBarFields,
  FieldControl: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__.FieldControl,
  PlaceholderMessage: _components_actions_placeholder_message__WEBPACK_IMPORTED_MODULE_19__["default"],
  HorizontalLine: _components_horizontal_line__WEBPACK_IMPORTED_MODULE_21__["default"],
  FieldSettingsWrapper: _components_fields_field_settings_wrapper__WEBPACK_IMPORTED_MODULE_26__["default"],
  ActionMessages: _components_actions_action_messages__WEBPACK_IMPORTED_MODULE_20__["default"],
  GroupedSelectControl: _components_grouped_select_control__WEBPACK_IMPORTED_MODULE_27__["default"],
  BaseHelp: _components_controls_base_help__WEBPACK_IMPORTED_MODULE_29__["default"],
  ValidateButtonWithStore: _components_validate_button_with_store__WEBPACK_IMPORTED_MODULE_32__["default"],
  GatewayFetchButton: _components_gateway_fetch_button__WEBPACK_IMPORTED_MODULE_33__["default"]
}; // JFBFunctions

window.JetFBActions = {
  addAction: _helpers_actions_action_manager__WEBPACK_IMPORTED_MODULE_5__["default"],
  withPreset: _components_presets_preset_editor__WEBPACK_IMPORTED_MODULE_17__["default"],
  getFormFieldsByBlock: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getFormFieldsByBlock,
  getInnerBlocks: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getInnerBlocks,
  getAvailableFieldsString: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getAvailableFieldsString,
  getAvailableFields: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getAvailableFields,
  getFormFieldsBlocks: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getFormFieldsBlocks,
  getFieldsWithoutCurrent: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getFieldsWithoutCurrent,
  gatewayAttr: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__.gatewayAttr,
  gatewayLabel: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__.gatewayLabel,
  registerGateway: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__.registerGateway,
  Tools: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__["default"],
  event: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.event,
  listen: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.listen,
  actionByTypeList: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__.actionByTypeList,
  getActionSettings: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__.getActionSettings,
  fromLocalizeHelper: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__.fromLocalizeHelper,
  renderGateway: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__.renderGateway,
  renderGatewayWithPlaceholder: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__.renderGatewayWithPlaceholder,
  gatewayActionAttributes: _helpers_gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_24__["default"],
  globalTab: _helpers_settings_helper__WEBPACK_IMPORTED_MODULE_25__.globalTab,
  versionCompare: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.versionCompare,
  convertListToFieldsMap: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__.convertListToFieldsMap,
  maybeCyrToLatin: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.maybeCyrToLatin,
  getConvertedName: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.getConvertedName,
  getBlockControls: _components_fields_controls__WEBPACK_IMPORTED_MODULE_28__.getBlockControls,
  classnames: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.classnames,
  getBlocksByName: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getBlocksByName,
  convertObjectToOptionsList: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.convertObjectToOptionsList
}; // JFBHooks

window.JetFBHooks = {
  useActions: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useActions,
  useMetaState: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useMetaState,
  useStateValidClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useStateValidClasses,
  useStateLoadingClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useStateLoadingClasses,
  useSuccessNotice: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useSuccessNotice,
  withRequestFields: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withRequestFields,
  useRequestFields: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useRequestFields,
  withSelectActionLoading: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withSelectActionLoading,
  withDispatchMeta: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withDispatchMeta,
  withSelectMeta: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withSelectMeta,
  withNotice: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withNotice,
  withSelectGatewaysLoading: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withSelectGatewaysLoading,
  withSelectFormFields: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withSelectFormFields,
  withSelectGateways: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withSelectGateways,
  withDispatchGateways: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withDispatchGateways
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBTUE7Ozs7O0FBRUE7QUFBQTs7QUFBQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFiQTtBQWdCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUtBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBRUE7Ozs7O0FBbkpBOztBQXNKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtBO0FBSUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUlBO0FBREE7QUFJQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU9BO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7O0FBS0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQURBO0FBSUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBV0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFLQTs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFKQTtBQWVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFRQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFZQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBOztBQU1BO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTs7QUFHQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFWQTtBQVlBO0FBQUE7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFuQkE7QUEwQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFiQTtBQW9CQTtBQUNBO0FBQ0E7QUFIQTtBQXhDQTtBQXBDQTtBQUFBO0FBcUZBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7QUFLQTtBQUFBO0FBQUE7QUFLQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFXQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQWRBOztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQXpFQTtBQWdGQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQU1BOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBTUE7O0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1RBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQU1BOztBQUlBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQU1BO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBTUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFLQTtBQUlBO0FBSUE7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBT0E7O0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBQUE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBWUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUZBO0FBZ0JBO0FBQUE7QUFJQTtBQUFBO0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIQTtBQUFBO0FBQUE7QUFBQTtBQU1BOztBQUlBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7O0FBS0E7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVdBO0FBREE7QUFJQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBaEVBO0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1NBO0FBQ0E7QUFFQTtBQUVBOztBQUlBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFJQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVVBO0FBSUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUtBO0FBQUE7QUFBQTs7QUFLQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBV0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUtBO0FBQ0E7QUFSQTtBQVVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQXZCQTs7QUFxQ0E7QUFDQTs7QUFFQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBUkE7O0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFPQTs7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVZBOztBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVhBOztBQWVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBVEE7O0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBWEE7QUFwREE7QUFtRUE7QUFFQTs7QUFFQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTs7QUFZQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBOztBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBMURBOztBQXFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xSQTtBQUVBOztBQUtBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7O0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQUE7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7O0FBTUE7QUFHQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUlBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBRUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFTQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQURBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBSUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUtBO0FBSUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUVBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTs7QUFLQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQU9BO0FBVEE7QUFXQTtBQUVBO0FBQ0E7O0FBREE7QUFBQTs7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBOztBQUlBO0FBQ0E7QUFDQTs7QUFQQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQWhCQTs7QUFTQTtBQUFBOztBQUFBO0FBZUE7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlCQTtBQTVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQThCQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBakJBO0FBbUJBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFBQTs7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQVNBO0FBR0E7QUFuQkE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBUkE7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBbENBOzs7Ozs7Ozs7Ozs7Ozs7QUN0VEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBUkE7O0FBV0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUlBOztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXhCQTtBQUFBO0FBQUE7O0FBMEJBO0FBRUE7QUFDQTtBQUVBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOztBQVNBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQVVBO0FBNUJBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFzQkE7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTs7QUFJQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUZBO0FBaEJBOztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXhCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTs7QUFJQTtBQUNBO0FBRUE7QUFGQTs7QUFPQTtBQUNBO0FBRUE7QUFGQTs7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQTNCQTs7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQ0E7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM5UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVNBO0FBT0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBOztBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9hY3Rpb24tZmllbGRzLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9uLW1vZGFsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9ucy9wbGFjZWhvbGRlci1tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9jb250cm9scy9iYXNlLWhlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZldGNoLWFqYXgtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9mZXRjaC1hcGktYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtc2V0dGluZ3Mtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdpdGgtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL21hY3Jvcy1pbnNlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL3JlcGVhdGVyLXdpdGgtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2dhdGV3YXktZmV0Y2gtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9ncm91cGVkLXNlbGVjdC1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9ob3Jpem9udGFsLWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3ByZXNldHMvZHluYW1pYy1wcmVzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9yZXF1ZXN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcmVxdWVzdC1sb2FkaW5nLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvdmFsaWRhdGUtYnV0dG9uLXdpdGgtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3ZhbGlkYXRlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvd3JhcHBlci1yZXF1aXJlZC1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9hY3Rpb25zL2FjdGlvbi1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2Jsb2Nrcy9ibG9ja3MtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9nYXRld2F5cy9nYXRld2F5LWFjdGlvbi1hdHRydWJpdGVzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9nYXRld2F5cy9nYXRld2F5LWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9zZXR0aW5ncy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2Uvc3RvcmVzL2FjdGlvbi1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL3N0b3Jlcy9nYXRld2F5cy1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3NlbXZlci9jbGFzc2VzL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZ3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2d0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvbHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2x0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvaWRlbnRpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zZW12ZXIvaW50ZXJuYWwvcGFyc2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9yZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9tYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUZXh0Q29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcblxyXG5jbGFzcyBKZXRGaWVsZHNNYXBDb250cm9sIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZpZWxkVHlwZXMgPSB0aGlzLnByb3BzLmZpZWxkVHlwZXM7XHJcblx0XHR0aGlzLnRheG9ub21pZXNMaXN0ID0gdGhpcy5wcm9wcy50YXhvbm9taWVzTGlzdDtcclxuXHRcdHRoaXMuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XHJcblx0XHR0aGlzLm1ldGFQcm9wID0gdGhpcy5wcm9wcy5tZXRhUHJvcCA/IHRoaXMucHJvcHMubWV0YVByb3AgOiAncG9zdF9tZXRhJztcclxuXHRcdHRoaXMudGVybXNQcm9wID0gdGhpcy5wcm9wcy50ZXJtc1Byb3AgPyB0aGlzLnByb3BzLnRlcm1zUHJvcCA6ICdwb3N0X3Rlcm1zJztcclxuXHRcdHRoaXMuaW5kZXggPSB0aGlzLnByb3BzLmluZGV4O1xyXG5cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5iaW5kRnVuY3Rpb25zKCk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dHlwZTogdGhpcy5nZXRGaWVsZFR5cGUoIHRoaXMucHJvcHMuZmllbGRWYWx1ZSApLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGJpbmRGdW5jdGlvbnMoKSB7XHJcblx0XHR0aGlzLm9uQ2hhbmdlVHlwZSA9IHRoaXMub25DaGFuZ2VUeXBlLmJpbmQoIHRoaXMgKTtcclxuXHRcdHRoaXMub25DaGFuZ2VWYWx1ZSA9IHRoaXMub25DaGFuZ2VWYWx1ZS5iaW5kKCB0aGlzICk7XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuaWQgPSBgaW5zcGVjdG9yLXNlbGVjdC1jb250cm9sLSR7IHRoaXMuaW5kZXggfWA7XHJcblx0XHR0aGlzLnByZXBhcmVkVGF4ZXMgPSBbXTtcclxuXHRcdHRoaXMudGF4UHJlZml4ID0gJ2pldF90YXhfXyc7XHJcblxyXG5cdFx0aWYgKCAhIHRoaXMudGF4b25vbWllc0xpc3QgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLnRheG9ub21pZXNMaXN0Lmxlbmd0aDsgaSArKyApIHtcclxuXHRcdFx0dGhpcy5wcmVwYXJlZFRheGVzLnB1c2goIHtcclxuXHRcdFx0XHR2YWx1ZTogdGhpcy50YXhQcmVmaXggKyB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0udmFsdWUsXHJcblx0XHRcdFx0bGFiZWw6IHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS5sYWJlbCxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0RmllbGROYW1lKCB2YWx1ZSApIHtcclxuXHJcblx0XHRpZiAoICEgdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBmaWVsZFR5cGUgPSB0aGlzLmdldEZpZWxkVHlwZSggdmFsdWUgKTtcclxuXHJcblx0XHRpZiAoIHRoaXMudGVybXNQcm9wID09PSBmaWVsZFR5cGUgfHwgdGhpcy5tZXRhUHJvcCA9PT0gZmllbGRUeXBlICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRpc1Rlcm1Pck1ldGEoIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuICggdGhpcy50ZXJtc1Byb3AgPT09IHZhbHVlIHx8IHRoaXMubWV0YVByb3AgPT09IHZhbHVlICk7XHJcblx0fVxyXG5cclxuXHJcblx0Z2V0RmllbGRUeXBlKCB2YWx1ZSApIHtcclxuXHJcblx0XHRpZiAoICEgdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkVHlwZXMubGVuZ3RoOyBpICsrICkge1xyXG5cdFx0XHRpZiAoIHZhbHVlID09PSB0aGlzLmZpZWxkVHlwZXNbIGkgXS52YWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHZhbHVlLmluY2x1ZGVzKCB0aGlzLnRheFByZWZpeCApICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50ZXJtc1Byb3A7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubWV0YVByb3A7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSApIHtcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5maWVsZHNNYXAsXHJcblx0XHRcdFsgdGhpcy5wcm9wcy5maWVsZE5hbWUgXTogbmV3VmFsdWVcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHJcblx0b25DaGFuZ2VUeXBlKCBuZXdWYWx1ZSApIHtcclxuXHRcdGxldCB2YWwgPSB0aGlzLmdldEZpZWxkVHlwZSggbmV3VmFsdWUgKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKCB7XHJcblx0XHRcdHR5cGU6IHZhbFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGlmICggdGhpcy5pc1Rlcm1Pck1ldGEoIHZhbCApICkge1xyXG5cdFx0XHR2YWwgPSAnJztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHZhbCApO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIERpc2FibGUgcmVhc29uOiBBIHNlbGVjdCB3aXRoIGFuIG9uY2hhbmdlIHRocm93cyBhIHdhcm5pbmdcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9fcm93XCJcclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtcG9zdC1maWVsZC1jb250cm9sXCI+XHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF90eXBlXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyB0aGlzLnByb3BzLmZpZWxkTmFtZSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuc3RhdGUudHlwZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VUeXBlIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZpZWxkVHlwZXMgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTYwcHgnXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgKCB0aGlzLm1ldGFQcm9wID09PSB0aGlzLnN0YXRlLnR5cGUgKSAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF9uYW1lXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnByb3BzLmZpZWxkVmFsdWUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnMjAwcHgnIH0gfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0XHR7ICggdGhpcy50ZXJtc1Byb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLXdpdGhvdXQtbGFiZWwnXHJcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfdGF4XycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnByb3BzLmZpZWxkVmFsdWUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMucHJlcGFyZWRUYXhlcyB9XHJcblx0XHRcdFx0XHRzdHlsZT17IHsgd2lkdGg6ICcyMDBweCcgfSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSmV0RmllbGRzTWFwQ29udHJvbDsiLCJjb25zdCB7XHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25GaWVsZHNNYXAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBmaWVsZHMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBsYWJlbCA9ICdbRW1wdHkgbGFiZWxdJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBjaGlsZHJlbiA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHBsYWluSGVscCA9ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGN1c3RvbUhlbHAgPSBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgfSApIHtcclxuXHJcblx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRrZXk9J2pldF9maWVsZHNfbWFwJ1xyXG5cdD5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0eyAoIGN1c3RvbUhlbHAgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1c3RvbUhlbHAgKSAmJiBjdXN0b21IZWxwKCkgfVxyXG5cclxuXHRcdFx0eyBCb29sZWFuKCBwbGFpbkhlbHAubGVuZ3RoICkgJiYgPHNwYW5cclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnZGVzY3JpcHRpb24tY29udHJvbHMnIH1cclxuXHRcdFx0PnsgcGxhaW5IZWxwIH08L3NwYW4+IH1cclxuXHJcblx0XHRcdHsgZmllbGRzLm1hcCggKCBbIGZpZWxkSWQsIGZpZWxkRGF0YSBdLCBpbmRleCApID0+IDxSZWFjdC5GcmFnbWVudFxyXG5cdFx0XHRcdGtleT17IGBmaWVsZF9pbl9tYXBfJHsgZmllbGRJZCArIGluZGV4IH1gIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4oIHsgZmllbGRJZCwgZmllbGREYXRhLCBpbmRleCB9ICkgfVxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiApIH1cclxuXHRcdDwvZGl2PlxyXG5cdDwvQmFzZUNvbnRyb2w+XHJcbn07XHJcblxyXG4iLCJjb25zdCB7XHJcblx0XHQgIEJ1dHRvbixcclxuXHRcdCAgQnV0dG9uR3JvdXAsXHJcblx0XHQgIE1vZGFsLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdFx0ICB1c2VFZmZlY3QsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIEFjdGlvbk1vZGFsKCB7XHJcblx0XHRcdFx0XHRcdCAgb25SZXF1ZXN0Q2xvc2UsXHJcblx0XHRcdFx0XHRcdCAgY2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdCAgdGl0bGUsXHJcblx0XHRcdFx0XHRcdCAgY2xhc3NOYW1lcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHQgIG9uVXBkYXRlQ2xpY2ssXHJcblx0XHRcdFx0XHRcdCAgb25DYW5jZWxDbGljayxcclxuXHRcdFx0XHRcdFx0ICB1cGRhdGVCdG5MYWJlbCA9ICdVcGRhdGUnLFxyXG5cdFx0XHRcdFx0XHQgIHVwZGF0ZUJ0blByb3BzID0ge30sXHJcblx0XHRcdFx0XHRcdCAgY2FuY2VsQnRuUHJvcHMgPSB7fSxcclxuXHRcdFx0XHRcdFx0ICBjYW5jZWxCdG5MYWJlbCA9ICdDYW5jZWwnLFxyXG5cdFx0XHRcdFx0XHQgIGZpeGVkSGVpZ2h0ID0gJycsXHJcblx0XHRcdFx0XHQgIH0gKSB7XHJcblxyXG5cdGNvbnN0IG1vZGFsQ2xhc3NlcyA9IFsgJ2pldC1mb3JtLWVkaXQtbW9kYWwnLCAuLi5jbGFzc05hbWVzIF07XHJcblxyXG5cdGNvbnN0IFsgYWN0aW9uQ2xpY2ssIHNldEFjdGlvbkNsaWNrIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuXHRjb25zdCB1cGRhdGVDbGljayA9ICgpID0+IHtcclxuXHRcdGlmICggb25VcGRhdGVDbGljayApIHtcclxuXHRcdFx0b25VcGRhdGVDbGljaygpO1xyXG5cdFx0fVxyXG5cdFx0c2V0QWN0aW9uQ2xpY2soIHRydWUgKVxyXG5cdH1cclxuXHRjb25zdCBjYW5jZWxDbGljayA9ICgpID0+IHtcclxuXHRcdGlmICggb25DYW5jZWxDbGljayApIHtcclxuXHRcdFx0b25DYW5jZWxDbGljaygpO1xyXG5cdFx0fVxyXG5cdFx0c2V0QWN0aW9uQ2xpY2soIGZhbHNlICk7XHJcblx0fVxyXG5cclxuXHRsZXQgc3R5bGUgPSB7fVxyXG5cdGlmICggZml4ZWRIZWlnaHQgKSB7XHJcblx0XHRzdHlsZSA9IHsgaGVpZ2h0OiBmaXhlZEhlaWdodCB9O1xyXG5cdFx0bW9kYWxDbGFzc2VzLnB1c2goICdqZXQtbW9kYWwtZml4ZWQtaGVpZ2h0JyApXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPE1vZGFsXHJcblx0XHRvblJlcXVlc3RDbG9zZT17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdGNsYXNzTmFtZT17IG1vZGFsQ2xhc3Nlcy5qb2luKCAnICcgKSB9XHJcblx0XHR0aXRsZT17IHRpdGxlIH1cclxuXHRcdHN0eWxlPXsgc3R5bGUgfVxyXG5cdD5cclxuXHRcdHsgISBjaGlsZHJlbiAmJiA8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2NvbnRlbnRcIlxyXG5cdFx0PlxyXG5cdFx0XHR7ICdBY3Rpb24gY2FsbGJhY2sgaXMgbm90IGZvdW5kLicgfVxyXG5cdFx0PC9kaXY+IH1cclxuXHRcdHsgY2hpbGRyZW4gJiYgPGRpdiBjbGFzc05hbWU9J2pldC1mb3JtLWVkaXQtbW9kYWxfX3dyYXBwZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbiggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApIH1cclxuXHRcdFx0XHR7ICdmdW5jdGlvbicgIT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8QnV0dG9uR3JvdXBcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19hY3Rpb25zXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0b25DbGljaz17IHVwZGF0ZUNsaWNrIH1cclxuXHRcdFx0XHRcdHsgLi4udXBkYXRlQnRuUHJvcHMgfVxyXG5cdFx0XHRcdD57IHVwZGF0ZUJ0bkxhYmVsIH08L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogJzAgMCAwIDEwcHgnLFxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgY2FuY2VsQ2xpY2sgfVxyXG5cdFx0XHRcdFx0eyAuLi5jYW5jZWxCdG5Qcm9wcyB9XHJcblx0XHRcdFx0PnsgY2FuY2VsQnRuTGFiZWwgfTwvQnV0dG9uPlxyXG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0PC9kaXY+IH1cclxuXHQ8L01vZGFsPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTW9kYWw7IiwiY29uc3Qge1xyXG5cdFx0ICBUZXh0Q29udHJvbCxcclxuXHRcdCAgQmFzZUNvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIEFjdGlvbk1lc3NhZ2VzKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIHNldHRpbmdzLFxyXG5cdFx0XHQgIHNvdXJjZSxcclxuXHRcdFx0ICBnZXRNYXBGaWVsZCxcclxuXHRcdFx0ICBzZXRNYXBGaWVsZCxcclxuXHRcdFx0ICBtZXNzYWdlcyxcclxuXHRcdFx0ICBvbkNoYW5nZVNldHRpbmcsXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRjb25zdCBvbGRNZXNzYWdlcyA9IHNldHRpbmdzLm1lc3NhZ2VzIHx8IHt9O1xyXG5cdFx0Y29uc3QgbWVzc2FnZXMgPSB7fTtcclxuXHJcblx0XHRPYmplY3QuZW50cmllcyggc291cmNlLl9fbWVzc2FnZXMgKS5mb3JFYWNoKCAoIFsgdHlwZSwgZGF0YSBdICkgPT4ge1xyXG5cdFx0XHRpZiAoICEgb2xkTWVzc2FnZXNbIHR5cGUgXSApIHtcclxuXHRcdFx0XHRtZXNzYWdlc1sgdHlwZSBdID0gZGF0YS52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSApXHJcblxyXG5cdFx0aWYgKCBtZXNzYWdlcyApIHtcclxuXHRcdFx0b25DaGFuZ2VTZXR0aW5nKCB7IC4uLm9sZE1lc3NhZ2VzLCAuLi5tZXNzYWdlcyB9LCAnbWVzc2FnZXMnICk7XHJcblx0XHR9XHJcblx0fSwgW10gKTtcclxuXHJcblx0Y29uc3Qgc2V0TWVzc2FnZSA9ICggdmFsdWUsIG5hbWVGaWVsZCApID0+IHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXNzYWdlcyc7XHJcblxyXG5cdFx0c2V0TWFwRmllbGQoIHsgdmFsdWUsIG5hbWVGaWVsZCwgc291cmNlIH0gKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRNZXNzYWdlID0gbmFtZSA9PiB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSAnbWVzc2FnZXMnO1xyXG5cclxuXHRcdHJldHVybiBnZXRNYXBGaWVsZCggeyBuYW1lLCBzb3VyY2UgfSApXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0bGFiZWw9eyBfXyggJ01lc3NhZ2VzIFNldHRpbmdzOicgKSB9XHJcblx0XHRrZXk9J21lc3NhZ2VzX3NldHRpbmdzX2ZpZWxkcydcclxuXHQ+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCc+XHJcblx0XHRcdHsgc2V0dGluZ3MubWVzc2FnZXMgJiYgT2JqZWN0LmVudHJpZXMoIHNldHRpbmdzLm1lc3NhZ2VzIClcclxuXHRcdFx0XHQubWFwKCAoIFsgdHlwZSwgZGF0YSBdLCBpZCApID0+IDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93XCJcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ21lc3NhZ2VfJyArIHR5cGUgKyBpZCB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IHR5cGUgKyBpZCB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBtZXNzYWdlcyggdHlwZSApLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGdldE1lc3NhZ2UoIHR5cGUgKSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRNZXNzYWdlKCBuZXdWYWx1ZSwgdHlwZSApIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PixcclxuXHRcdFx0XHQpIH1cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQ8L0Jhc2VDb250cm9sPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTWVzc2FnZXM7IiwiZnVuY3Rpb24gUGxhY2Vob2xkZXJNZXNzYWdlKCB7IHN0eWxlLCBjaGlsZHJlbiB9ICkge1xyXG5cdGNvbnN0IHByb3BTdHlsZSA9IHtcclxuXHRcdGZvbnRTaXplOiAnMS41ZW0nLFxyXG5cdFx0cGFkZGluZzogJzJlbScsXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnYWxpY2VibHVlJyxcclxuXHRcdC4uLnN0eWxlXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxwIHN0eWxlPXsgcHJvcFN0eWxlIH0+eyBjaGlsZHJlbiB9PC9wPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhY2Vob2xkZXJNZXNzYWdlOyIsImZ1bmN0aW9uIEJhc2VIZWxwKCB7XHJcblx0XHRcdFx0XHQgICBjaGlsZHJlbixcclxuXHRcdFx0XHRcdCAgIHN0eWxlID0ge30sXHJcblx0XHRcdFx0ICAgfSApIHtcclxuXHRyZXR1cm4gPHBcclxuXHRcdGNsYXNzTmFtZT17ICdqZXQtZmItYmFzZS1jb250cm9sX19oZWxwJyB9XHJcblx0XHRzdHlsZT17IHtcclxuXHRcdFx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRcdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcclxuXHRcdFx0Y29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcwcHgnLFxyXG5cdFx0XHQuLi5zdHlsZSxcclxuXHRcdH0gfVxyXG5cdD5cclxuXHRcdHsgY2hpbGRyZW4gfVxyXG5cdDwvcD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VIZWxwOyIsImltcG9ydCBSZXF1ZXN0QnV0dG9uIGZyb20gJy4vcmVxdWVzdC1idXR0b24nO1xyXG5pbXBvcnQgeyB3aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nLCB3aXRoU2VsZWN0QWN0aW9uTG9hZGluZyB9IGZyb20gJy4uL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyJztcclxuXHJcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0LFxyXG5cdHdpdGhEaXNwYXRjaCxcclxufSA9IHdwLmRhdGE7XHJcblxyXG5cclxuZnVuY3Rpb24gRmV0Y2hBamF4QnV0dG9uKCB7XHJcblx0aW5pdGlhbExhYmVsID0gJ1ZhbGlkJyxcclxuXHRsYWJlbCA9ICdJblZhbGlkJyxcclxuXHRhamF4QXJncyA9IHt9LFxyXG5cdGxvYWRpbmdTdGF0ZSxcclxuXHRzZXRMb2FkaW5nLFxyXG5cdGlkLFxyXG5cdHNldFJlc3VsdFN1Y2Nlc3MsXHJcblx0c2V0UmVzdWx0RmFpbCxcclxufSApIHtcclxuXHJcblx0Y29uc3QgZ2V0TGFiZWwgPSAoKSA9PiB7XHJcblx0XHRpZiAoIC0gMSA9PT0gbG9hZGluZ1N0YXRlLmlkICYmIGluaXRpYWxMYWJlbCApIHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxMYWJlbDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbGFiZWw7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxSZXF1ZXN0QnV0dG9uXHJcblx0XHRkaXNhYmxlZD17IGxvYWRpbmdTdGF0ZS5sb2FkaW5nIH1cclxuXHRcdGFqYXhBcmdzPXsgYWpheEFyZ3MgfVxyXG5cdFx0bGFiZWw9eyBnZXRMYWJlbCgpIH1cclxuXHRcdG9uTG9hZGluZz17ICgpID0+IHtcclxuXHRcdFx0c2V0TG9hZGluZyggaWQgKTtcclxuXHRcdH0gfVxyXG5cdFx0b25TdWNjZXNzUmVxdWVzdD17IHJlc3BvbnNlID0+IHtcclxuXHRcdFx0c2V0UmVzdWx0U3VjY2VzcyggaWQsIHJlc3BvbnNlICk7XHJcblx0XHR9IH1cclxuXHRcdG9uRmFpbFJlcXVlc3Q9eyAoKSA9PiBzZXRSZXN1bHRGYWlsKCBpZCApIH1cclxuXHRcdGNsYXNzTmFtZT17IGxvYWRpbmdTdGF0ZS5idXR0b25DbGFzc05hbWUgfVxyXG5cdD5cclxuXHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cclxuXHQ8L1JlcXVlc3RCdXR0b24+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoIHdpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nICksXHJcblx0d2l0aERpc3BhdGNoKCB3aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nICksXHJcbikoIEZldGNoQWpheEJ1dHRvbiApOyIsImltcG9ydCBSZXF1ZXN0QnV0dG9uIGZyb20gJy4vcmVxdWVzdC1idXR0b24nO1xyXG5pbXBvcnQgeyB3aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nLCB3aXRoU2VsZWN0QWN0aW9uTG9hZGluZyB9IGZyb20gJy4uL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyJztcclxuXHJcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0LFxyXG5cdHdpdGhEaXNwYXRjaCxcclxufSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7IGFwaUZldGNoIH0gPSB3cDtcclxuXHJcblxyXG5mdW5jdGlvbiBGZXRjaEFqYXhCdXR0b24oIHtcclxuXHRpbml0aWFsTGFiZWwgPSAnVmFsaWQnLFxyXG5cdGxhYmVsID0gJ0luVmFsaWQnLFxyXG5cdGFwaUFyZ3MgPSB7fSxcclxuXHRsb2FkaW5nU3RhdGUsXHJcblx0c2V0TG9hZGluZyxcclxuXHRpZCxcclxuXHRzZXRSZXN1bHRTdWNjZXNzLFxyXG5cdHNldFJlc3VsdEZhaWwsXHJcbn0gKSB7XHJcblxyXG5cdGNvbnN0IGdldExhYmVsID0gKCkgPT4ge1xyXG5cdFx0aWYgKCAtIDEgPT09IGxvYWRpbmdTdGF0ZS5pZCAmJiBpbml0aWFsTGFiZWwgKSB7XHJcblx0XHRcdHJldHVybiBpbml0aWFsTGFiZWw7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGxhYmVsO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxyXG5cdFx0ZGlzYWJsZWQ9eyBsb2FkaW5nU3RhdGUubG9hZGluZyB9XHJcblx0XHRsYWJlbD17IGdldExhYmVsKCkgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgbG9hZGluZ1N0YXRlLmJ1dHRvbkNsYXNzTmFtZSB9XHJcblx0XHRjdXN0b21SZXF1ZXN0PXsgKCkgPT4ge1xyXG5cdFx0XHRzZXRMb2FkaW5nKCBpZCApO1xyXG5cclxuXHRcdFx0YXBpRmV0Y2goIGFwaUFyZ3MgKS50aGVuKCByZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0c2V0UmVzdWx0U3VjY2VzcyggaWQsIHJlc3BvbnNlICk7XHJcblx0XHRcdH0gKS5jYXRjaCggKCkgPT4gc2V0UmVzdWx0RmFpbCggaWQgKSApO1xyXG5cdFx0fSB9XHJcblx0PlxyXG5cdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxyXG5cdDwvUmVxdWVzdEJ1dHRvbj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcblx0d2l0aFNlbGVjdCggd2l0aFNlbGVjdEFjdGlvbkxvYWRpbmcgKSxcclxuXHR3aXRoRGlzcGF0Y2goIHdpdGhEaXNwYXRjaEFjdGlvbkxvYWRpbmcgKSxcclxuKSggRmV0Y2hBamF4QnV0dG9uICk7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xzU2V0dGluZ3MgPSAoKSA9PiBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZmllbGRzLmNvbnRyb2xzJywge1xyXG5cdFwiZ2VuZXJhbFwiOiB7XHJcblx0XHRsYWJlbDogX18oICdHZW5lcmFsJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRhdHRyczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImxhYmVsXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRmllbGQgTGFiZWxcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwibmFtZVwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZvcm0gZmllbGQgbmFtZVwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0XHRcImhlbHBcIjogX18oIFwiU2hvdWxkIGNvbnRhaW4gb25seSBMYXRpbiBsZXR0ZXJzLCBudW1iZXJzLCBgLWAgb3IgYF9gIGNoYXJzLCBubyBzcGFjZXMgb25seSBsb3dlciBjYXNlXCIsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImRlc2NcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGaWVsZCBEZXNjcmlwdGlvblwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJkZWZhdWx0XCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiZHluYW1pY190ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJEZWZhdWx0IFZhbHVlXCIsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdFwidG9vbGJhclwiOiB7XHJcblx0XHRhdHRyczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidG9nZ2xlXCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJJcyBSZXF1aXJlZFwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHRcImFkdmFuY2VkXCI6IHtcclxuXHRcdGxhYmVsOiBfXyggJ0FkdmFuY2VkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRhdHRyczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInBsYWNlaG9sZGVyXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiUGxhY2Vob2xkZXJcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiYWRkX3ByZXZcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0b2dnbGVcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkFkZCBQcmV2IFBhZ2UgQnV0dG9uXCIsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdGhlbHA6IF9fKCBgSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIFxyXG5cdFx0XHRcdHRoZSBcIkFjdGlvbiBCdXR0b25cIiBibG9jayB3aXRoIHRoZSBcIkdvIHRvIFByZXYgUGFnZVwiIHR5cGVgLCAnamV0LWZyb20tYnVpbGRlcicgKSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJwcmV2X2xhYmVsXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiUHJldiBQYWdlIEJ1dHRvbiBMYWJlbFwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBcImFkZF9wcmV2XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwidmlzaWJpbGl0eVwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRmllbGQgVmlzaWJpbGl0eVwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJzZWxlY3RcIixcclxuXHRcdFx0XHRcIm9wdGlvbnNcIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiYWxsXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRm9yIGFsbFwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJsb2dnZWRfaWRcIixcclxuXHRcdFx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJPbmx5IGZvciBsb2dnZWQgaW4gdXNlcnNcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwibm90X2xvZ2dlZF9pblwiLFxyXG5cdFx0XHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIk9ubHkgZm9yIE5PVC1sb2dnZWQgaW4gdXNlcnNcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiY2xhc3NfbmFtZVwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkNTUyBDbGFzcyBOYW1lXCIsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG59IClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCbG9ja0NvbnRyb2xzKCB0eXBlID0gJ2FsbCcgKSB7XHJcblx0aWYgKCAhIHR5cGUgKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdGNvbnN0IGNvbnRyb2xzID0gQ29udHJvbHNTZXR0aW5ncygpO1xyXG5cclxuXHRpZiAoICdhbGwnID09PSB0eXBlICkge1xyXG5cdFx0cmV0dXJuIGNvbnRyb2xzO1xyXG5cdH1cclxuXHJcblx0aWYgKCBjb250cm9sc1sgdHlwZSBdXHJcblx0XHQmJiBjb250cm9sc1sgdHlwZSBdLmF0dHJzXHJcblx0XHQmJiBBcnJheS5pc0FycmF5KCBjb250cm9sc1sgdHlwZSBdLmF0dHJzIClcclxuXHRcdCYmIDAgPCBjb250cm9sc1sgdHlwZSBdLmF0dHJzLmxlbmd0aFxyXG5cdCkge1xyXG5cdFx0cmV0dXJuIGNvbnRyb2xzWyB0eXBlIF0uYXR0cnM7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn0iLCJpbXBvcnQgeyBDb250cm9sc1NldHRpbmdzIH0gZnJvbSBcIi4vY29udHJvbHNcIjtcclxuaW1wb3J0IEZpZWxkV2l0aFByZXNldCBmcm9tIFwiLi9maWVsZC13aXRoLXByZXNldFwiO1xyXG5pbXBvcnQgRHluYW1pY1ByZXNldCBmcm9tIFwiLi4vcHJlc2V0cy9keW5hbWljLXByZXNldFwiO1xyXG5pbXBvcnQgeyBnZXRDb252ZXJ0ZWROYW1lIH0gZnJvbSAnLi4vLi4vaGVscGVycy90b29scyc7XHJcbmltcG9ydCB7IHVzZVN1Y2Nlc3NOb3RpY2UgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlcic7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEJsb2NrQ29udHJvbHMsXHJcblx0XHQgIFJpY2hUZXh0LFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdFx0ICB1c2VFZmZlY3QsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlRGlzcGF0Y2gsXHJcblx0ICB9ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIFBhbmVsQm9keSxcclxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcclxuXHRcdCAgVG9vbGJhckdyb3VwLFxyXG5cdFx0ICBGbGV4LFxyXG5cdFx0ICBCYXNlQ29udHJvbCxcclxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG5cdFx0ICBDbGlwYm9hcmRCdXR0b24sXHJcblx0XHQgIFNuYWNrYmFyLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyRmllbGRDb250cm9scygge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICB0eXBlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICBhdHRyc1NldHRpbmdzID0ge30sXHJcblx0XHRcdFx0XHRcdFx0XHQgIGVkaXRQcm9wczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGF0dHJIZWxwID0gKCkgPT4gJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgYmxvY2tOYW1lID0gJycsXHJcblx0XHRcdFx0XHRcdFx0XHQgIH0sXHJcblx0XHRcdFx0XHRcdFx0ICB9ICkge1xyXG5cdGNvbnN0IGNvbnRyb2xzID0gQ29udHJvbHNTZXR0aW5ncygpO1xyXG5cclxuXHRpZiAoICEgY29udHJvbHNbIHR5cGUgXSApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGN1cnJlbnRDb250cm9sID0gY29udHJvbHNbIHR5cGUgXTtcclxuXHJcblx0Y29uc3QgaXNWYWxpZENvbmRpdGlvbiA9ICggYXR0ciApID0+IHtcclxuXHRcdGlmICggISBhdHRyLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBibG9ja05hbWUgJiYgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICkge1xyXG5cdFx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICYmIGJsb2NrTmFtZSAhPT0gYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lXHJcblx0XHRcdFx0JiYgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lLmxlbmd0aFxyXG5cdFx0XHRcdCYmICEgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lLmluY2x1ZGVzKCBibG9ja05hbWUgKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBvYmplY3ROb3RNYXRjaCA9ICggZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5hdHRyICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHsgb3BlcmF0b3IgPSAnYW5kJywgaXRlbXMgPSB7fSB9ID0gYXR0ci5jb25kaXRpb24uYXR0clxyXG5cclxuXHRcdFx0aWYgKCAnb3InID09PSBvcGVyYXRvci50b0xvd2VyQ2FzZSgpICkge1xyXG5cdFx0XHRcdGZvciAoIGNvbnN0IGF0dHJUb0NvbXBhcmUgaW4gaXRlbXMgKSB7XHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZUNvbXBhcmUgPSBpdGVtc1sgYXR0clRvQ29tcGFyZSBdO1xyXG5cclxuXHRcdFx0XHRcdGlmICggdmFsdWVDb21wYXJlID09PSBhdHRyaWJ1dGVzWyBhdHRyVG9Db21wYXJlIF0gKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCAnYW5kJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGZvciAoIGNvbnN0IGF0dHJUb0NvbXBhcmUgaW4gaXRlbXMgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggaXRlbXNbIGF0dHJUb0NvbXBhcmUgXSAhPT0gYXR0cmlidXRlc1sgYXR0clRvQ29tcGFyZSBdICkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fSApKClcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9ICkoKVxyXG5cclxuXHRcdGlmICggISBvYmplY3ROb3RNYXRjaFxyXG5cdFx0XHR8fCAoXHJcblx0XHRcdFx0J3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5hdHRyXHJcblx0XHRcdFx0JiYgYXR0ci5jb25kaXRpb24uYXR0clxyXG5cdFx0XHRcdCYmICEgYXR0cmlidXRlc1sgYXR0ci5jb25kaXRpb24uYXR0ciBdXHJcblx0XHRcdClcclxuXHRcdFx0fHwgKFxyXG5cdFx0XHRcdCdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb25cclxuXHRcdFx0XHQmJiAhIGF0dHJpYnV0ZXNbIGF0dHIuY29uZGl0aW9uIF1cclxuXHRcdFx0KVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gY3VycmVudENvbnRyb2wuYXR0cnMuZmlsdGVyKCAoIHsgaGVscCA9ICcnLCBhdHRyTmFtZSwgbGFiZWwsIC4uLmF0dHIgfSApID0+IHtcclxuXHRcdGNvbnN0IGlzUmVnaXN0ZXJBdHRyaWJ1dGUgPSAoIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMgKTtcclxuXHRcdGNvbnN0IHZhbGlkQ29uZGl0aW9uID0gaXNWYWxpZENvbmRpdGlvbiggYXR0ciApO1xyXG5cdFx0Y29uc3QgaXNIaWRkZW4gPSAoXHJcblx0XHRcdGF0dHJOYW1lIGluIGF0dHJzU2V0dGluZ3NcclxuXHRcdFx0JiYgJ3Nob3cnIGluIGF0dHJzU2V0dGluZ3NbIGF0dHJOYW1lIF1cclxuXHRcdFx0JiYgZmFsc2UgPT09IGF0dHJzU2V0dGluZ3NbIGF0dHJOYW1lIF0uc2hvd1xyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gKCBpc1JlZ2lzdGVyQXR0cmlidXRlICYmIHZhbGlkQ29uZGl0aW9uICYmICEgaXNIaWRkZW4gKVxyXG5cdH0gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRmllbGRDb250cm9sKCBwcm9wcyApIHtcclxuXHRsZXQge1xyXG5cdFx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0XHRlZGl0UHJvcHM6IHtcclxuXHRcdFx0XHRhdHRySGVscCAgPSAoKSA9PiAnJyxcclxuXHRcdFx0XHRibG9ja05hbWUgPSAnJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmllbGRDb250cm9scyA9IFtdLFxyXG5cdFx0XHRhdXRvQ29tcGxldGVMYWJlbCA9IHRydWVcclxuXHRcdH0gPSBwcm9wcztcclxuXHJcblx0aWYgKCAhIGZpZWxkQ29udHJvbHMubGVuZ3RoICkge1xyXG5cdFx0ZmllbGRDb250cm9scyA9IGZpbHRlckZpZWxkQ29udHJvbHMoIHByb3BzICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0c2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiB2YWx1ZSB9ICk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIGZpZWxkQ29udHJvbHMubWFwKCAoIHsgaGVscCA9ICcnLCBhdHRyTmFtZSwgbGFiZWwsIC4uLmF0dHIgfSApID0+IHtcclxuXHRcdHN3aXRjaCAoIGF0dHIudHlwZSApIHtcclxuXHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0cmV0dXJuIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVGV4dENvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHRvbkJsdXI9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICggJ2xhYmVsJyA9PT0gYXR0ck5hbWVcclxuXHRcdFx0XHRcdFx0XHQmJiAxIDwgYXR0cmlidXRlcy5sYWJlbC5sZW5ndGhcclxuXHRcdFx0XHRcdFx0XHQmJiAoICEgYXR0cmlidXRlcy5uYW1lIHx8ICdmaWVsZF9uYW1lJyA9PT0gYXR0cmlidXRlcy5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHQmJiBhdXRvQ29tcGxldGVMYWJlbFxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBnZXRDb252ZXJ0ZWROYW1lKCBhdHRyaWJ1dGVzLmxhYmVsICksICduYW1lJyApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPjtcclxuXHRcdFx0Y2FzZSAnZHluYW1pY190ZXh0JzpcclxuXHRcdFx0XHRyZXR1cm4gPEZpZWxkV2l0aFByZXNldFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tRmllbGRXaXRoUHJlc2V0YCB9XHJcblx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVGV4dENvbnRyb2xEeW5hbWljYCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0PjtcclxuXHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVNlbGVjdENvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfHwgYXR0ckhlbHAoIGF0dHJOYW1lICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBhdHRyLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+O1xyXG5cdFx0XHRjYXNlICd0b2dnbGUnOlxyXG5cdFx0XHRcdHJldHVybiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVG9nZ2xlQ29udHJvbGAgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz47XHJcblx0XHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdFx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tQmFzZUNvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LU51bWJlckNvbnRyb2xgIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIE51bWJlciggbmV3VmFsICksIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XHJcblx0XHRcdFx0XHQgICBzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0ICAgY29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxyXG5cdFx0XHRcdFx0ICAgfSB9PnsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9PC9wPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+O1xyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBHZW5lcmFsRmllbGRzKCBwcm9wcyApIHtcclxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IENvbnRyb2xzU2V0dGluZ3MoKS5nZW5lcmFsO1xyXG5cclxuXHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IGN1cnJlbnRDb250cm9sLmxhYmVsIH0ga2V5PXsgJ2pldC1mb3JtLWdlbmVyYWwtZmllbGRzJyB9PlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdnZW5lcmFsJ1xyXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1maWVsZHMtY29tcG9uZW50JyB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHRcdDxGaWVsZENvbnRyb2xcclxuXHRcdFx0dHlwZT0nY3VzdG9tX2dlbmVyYWwnXHJcblx0XHRcdGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWN1c3RvbS1maWVsZHMtY29tcG9uZW50JyB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHQ8L1BhbmVsQm9keT47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFkdmFuY2VkRmllbGRzKCBwcm9wcyApIHtcclxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IENvbnRyb2xzU2V0dGluZ3MoKS5hZHZhbmNlZDtcclxuXHJcblx0cmV0dXJuIDxQYW5lbEJvZHkgdGl0bGU9eyBjdXJyZW50Q29udHJvbC5sYWJlbCB9IGtleT17ICdqZXQtZm9ybS1hZHZhbmNlZC1maWVsZHMnIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdhZHZhbmNlZCdcclxuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWZpZWxkcy1jb21wb25lbnQnIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdjdXN0b21fYWR2YW5jZWQnXHJcblx0XHRcdGtleT17ICdqZXQtZm9ybS1hZHZhbmNlZC1jdXN0b20tZmllbGRzLWNvbXBvbmVudCcgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+XHJcblx0PC9QYW5lbEJvZHk+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb29sQmFyRmllbGRzKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXHJcblx0XHRcdCAgY2hpbGRyZW4gICAgPSBbXSxcclxuXHRcdFx0ICBkaXNwbGF5TmFtZSA9IHRydWUsXHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlOb3RpY2UgPSB1c2VTdWNjZXNzTm90aWNlKCBgQ29waWVkIFwiJHsgYXR0cmlidXRlcy5uYW1lIH1cIiB0byBjbGlwYm9hcmQuYCApO1xyXG5cclxuXHRyZXR1cm4gPEJsb2NrQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtQmxvY2tDb250cm9scycgKSB9PlxyXG5cdFx0PFRvb2xiYXJHcm91cCBrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcy1Ub29sYmFyR3JvdXAnICkgfT5cclxuXHRcdFx0PEZsZXhcclxuXHRcdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cclxuXHRcdFx0XHRqdXN0aWZ5PXsgJ2NlbnRlcicgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS10b2dnbGUtYm94JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGRpc3BsYXlOYW1lICYmIDxkaXYgY2xhc3NOYW1lPXsnamV0LWlucHV0LXdpdGgtYnV0dG9uJ30+XHJcblx0XHRcdFx0XHQ8Q2xpcGJvYXJkQnV0dG9uXHJcblx0XHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdFx0aWNvbj0nYWRtaW4tcGFnZSdcclxuXHRcdFx0XHRcdFx0c2hvd1Rvb2x0aXBcclxuXHRcdFx0XHRcdFx0c2hvcnRjdXQ9J0NvcHkgbmFtZSdcclxuXHRcdFx0XHRcdFx0dGV4dD17IGF0dHJpYnV0ZXMubmFtZSB9XHJcblx0XHRcdFx0XHRcdG9uQ29weT17ICgpID0+IGRpc3BsYXlOb3RpY2UoIHRydWUgKSB9XHJcblx0XHRcdFx0XHRcdG9uRmluaXNoQ29weT17ICgpID0+IGRpc3BsYXlOb3RpY2UoIGZhbHNlICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmFtZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmFtZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG5hbWUgfSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+IH1cclxuXHRcdFx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdFx0XHR0eXBlPSd0b29sYmFyJ1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2pldC1mb3JtLXRvb2xiYXItZmllbGRzLWNvbXBvbmVudCcgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L0ZsZXg+XHJcblx0XHQ8L1Rvb2xiYXJHcm91cD5cclxuXHQ8L0Jsb2NrQ29udHJvbHM+O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkcyxcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRGaWVsZENvbnRyb2wsXHJcblx0ZmlsdGVyRmllbGRDb250cm9sc1xyXG59OyIsImltcG9ydCB7XHJcblx0RmllbGRDb250cm9sLFxyXG5cdGZpbHRlckZpZWxkQ29udHJvbHMsXHJcbn0gZnJvbSAnLi9maWVsZC1jb250cm9sJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgUGFuZWxCb2R5IH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmllbGRTZXR0aW5nc1dyYXBwZXIoIHByb3BzICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICB0aXRsZSxcclxuXHRcdFx0ICBjaGlsZHJlbixcclxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSA9IHZhbCA9PiB2YWwgfSxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBmaWVsZENvbnRyb2xzID0gZmlsdGVyRmllbGRDb250cm9scyggeyAuLi5wcm9wcywgdHlwZTogJ2N1c3RvbV9zZXR0aW5ncycgfSApO1xyXG5cclxuXHRyZXR1cm4gQm9vbGVhbiggZmllbGRDb250cm9scy5sZW5ndGggfHwgY2hpbGRyZW4gKSAmJiA8UGFuZWxCb2R5XHJcblx0XHR0aXRsZT17IHRpdGxlIHx8IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdD5cclxuXHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdjdXN0b21fc2V0dGluZ3MnXHJcblx0XHRcdGZpZWxkQ29udHJvbHM9eyBmaWVsZENvbnRyb2xzIH1cclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdDwvUGFuZWxCb2R5PjtcclxufSIsImltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tIFwiLi4vYWN0aW9uLW1vZGFsXCI7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFBhdGgsXHJcblx0XHQgIFNWRyxcclxuXHRcdCAgQmFzZUNvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBGaWVsZFdpdGhQcmVzZXQoIHtcclxuXHRcdFx0XHRcdFx0XHQgIGNoaWxkcmVuID0gbnVsbCxcclxuXHRcdFx0XHRcdFx0XHQgIE1vZGFsRWRpdG9yLFxyXG5cdFx0XHRcdFx0XHRcdCAgdHJpZ2dlckNsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHQgIGJhc2VDb250cm9sUHJvcHMgPSB7fSxcclxuXHRcdFx0XHRcdFx0ICB9ICkge1xyXG5cclxuXHRjb25zdCBbIG1vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGUgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VNb2RhbFN0YXRlID0gKCkgPT4ge1xyXG5cdFx0c2V0TW9kYWxTdGF0ZSggcHJldiA9PiAhIHByZXYgKTtcclxuXHR9O1xyXG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbICdqZXQtZm9ybS1keW5hbWljLXByZXNldF9fdHJpZ2dlcicsIC4uLnRyaWdnZXJDbGFzc2VzIF0uam9pbiggJyAnICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWR5bmFtaWMtcHJlc2V0XCJcclxuXHRcdFx0eyAuLi5iYXNlQ29udHJvbFByb3BzIH1cclxuXHRcdD5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWVzIH1cclxuXHRcdFx0XHRvbkNsaWNrPXsgY2hhbmdlTW9kYWxTdGF0ZSB9XHJcblx0XHRcdD48U1ZHIHZpZXdCb3g9XCIwIDAgNTQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aFxyXG5cdFx0XHRcdGQ9XCJNNDIuNjM5NiAyNi40MzQ3QzM3Ljg2ODIgMjcuMzQzNiAzMi41NjY2IDI4LjAyNTIgMjcuMTg5NCAyOC4wMjUyQzIxLjgxMjEgMjguMDI1MiAxNi40MzQ4IDI3LjM0MzYgMTEuNzM5MSAyNi40MzQ3QzYuOTY3NzQgMjUuNDUwMiAzLjE4MDkzIDIzLjg1OTcgMC4zNzg2OCAyMS45NjYzTDAuMzc4NjggMjguMDI1MkMwLjM3ODY4IDI5LjUzOTkgMS41OTA0NiAzMS4xMzA0IDMuNzg2ODIgMzIuNDE3OUM1Ljk4MzE3IDMzLjcwNTQgOS40NjcwNCAzNC45MTcyIDEzLjYzMjUgMzUuNTk4OEMxNy43OTggMzYuMjgwNSAyMi4xMTUgMzYuODEwNiAyNy4xODk0IDM2LjgxMDZDMzIuMjYzNyAzNi44MTA2IDM2LjY1NjQgMzYuNTA3NyA0MC43NDYyIDM1LjU5ODhDNDQuODM1OSAzNC42OSA0OC4zMTk4IDMzLjcwNTQgNTAuNTE2MiAzMi40MTc5QzUyLjcxMjUgMzEuMTMwNCA1NCAyOS41Mzk5IDU0IDI4LjAyNTJMNTQgMjEuOTY2M0M1MS4xMjIgMjMuODU5NyA0Ny4zMzUyIDI1LjQ1MDIgNDIuNjM5NiAyNi40MzQ3Wk00Mi42Mzk2IDUzLjU0ODRDMzcuODY4MiA1NC41MzI5IDMyLjU2NjYgNTUuMTM4OCAyNy4xODk0IDU1LjEzODhDMjEuODEyMSA1NS4xMzg4IDE2LjQzNDggNTQuNTMyOSAxMS43MzkxIDUzLjU0ODRDNy4wNDM0OCA1Mi41NjM4IDMuMTgwOTMgNTEuMDQ5MSAwLjM3ODY4MiA0OS4xNTU2TDAuMzc4NjgyIDU1LjEzODhDMC4zNzg2ODMgNTYuNzI5MyAxLjU5MDQ2IDU4LjMxOTcgMy43ODY4MiA1OS41MzE1QzYuMzYxODYgNjAuODE5IDkuNDY3MDUgNjIuMTA2NiAxMy42MzI1IDYyLjcxMjVDMTcuNzIyMyA2My42OTcgMjIuMTE1IDY0IDI3LjE4OTQgNjRDMzIuMjYzNyA2NCAzNi42NTY0IDYzLjY5NyA0MC43NDYyIDYyLjcxMjVDNDQuODM1OSA2MS44MDM2IDQ4LjMxOTggNjAuODE5IDUwLjUxNjIgNTkuNTMxNUM1Mi43MTI1IDU3Ljk0MTEgNTQgNTYuNzI5MyA1NCA1NC44MzU5TDU0IDQ4Ljg1MjdDNTEuMTIyIDUxLjA0OTEgNDcuMzM1MiA1Mi4yNjA4IDQyLjYzOTYgNTMuNTQ4NFpNNDIuNjM5NiAzOS45OTE1QzM3Ljg2ODIgNDAuOTAwNCAzMi41NjY2IDQxLjU4MiAyNy4xODk0IDQxLjU4MkMyMS44MTIxIDQxLjU4MiAxNi40MzQ4IDQwLjkwMDQgMTEuNzM5MSAzOS45OTE1QzYuOTY3NzQgMzkuMDA3IDMuMTgwOTMgMzcuNDkyMiAwLjM3ODY4MSAzNS41OTg4TDAuMzc4NjgxIDQxLjU4MkMwLjM3ODY4MSA0My4xNzI1IDEuNTkwNDYgNDQuNjg3MiAzLjc4NjgyIDQ1Ljk3NDdDNi4zNjE4NSA0Ny4yNjIyIDkuNDY3MDUgNDguNDc0IDEzLjYzMjUgNDkuMTU1NkMxNy43MjIzIDUwLjA2NDUgMjIuMTE1IDUwLjM2NzQgMjcuMTg5NCA1MC4zNjc0QzMyLjI2MzcgNTAuMzY3NCAzNi42NTY0IDUwLjA2NDUgNDAuNzQ2MiA0OS4xNTU2QzQ0LjgzNTkgNDguMTcxMSA0OC4zMTk4IDQ3LjI2MjIgNTAuNTE2MiA0NS45NzQ3QzUyLjcxMjUgNDQuMzg0MyA1NCA0My4xNzI1IDU0IDQxLjU4Mkw1NCAzNS41OTg4QzUxLjEyMiAzNy40OTIyIDQ3LjMzNTIgMzkuMDA3IDQyLjYzOTYgMzkuOTkxNVpNNDAuNDQzMiAyLjEyMzM3QzM2LjM1MzUgMS4xMzg3OSAzMS44ODUgMC44MzU4NDggMjYuODg2NCAwLjgzNTg0OUMyMS44ODc4IDAuODM1ODQ5IDE3LjQxOTQgMS4xMzg3OSAxMy4yNTM5IDIuMTIzMzdDOS4wODgzNiAzLjEwNzk0IDUuNjgwMjIgNC4wMTY3OCAzLjQ4Mzg3IDUuMzA0M0MxLjI4NzUxIDYuNTkxODEgLTMuNDc4MmUtMDYgOC4xMDY1NCAtMy4zMzkxNmUtMDYgOS42OTdMLTIuOTU1MTNlLTA2IDE0LjA4OTdDLTIuODE2MDllLTA2IDE1LjY4MDIgMS4yODc1MiAxNy4yNzA2IDMuNDgzODcgMTguNTU4MkM2LjA1ODkxIDE5Ljc2OTkgOS4xNjQxIDIxLjA1NzUgMTMuMjUzOSAyMS42NjMzQzE3LjM0MzYgMjIuMjY5MiAyMS44MTIxIDIyLjk1MDkgMjYuODg2NCAyMi45NTA5QzMxLjk2MDcgMjIuOTUwOSAzNi4zNTM1IDIyLjk1MDkgNDAuNDQzMiAyMi4zNDVDNDQuNTMzIDIxLjczOTEgNDguMDE2OSAyMC40NTE2IDUwLjIxMzIgMTkuMTY0QzUyLjcxMjUgMTcuNTczNiA1NCAxNS45ODMxIDU0IDE0LjM5MjdMNTQgOS45OTk5NUM1NCA4LjQwOTQ4IDUyLjcxMjUgNi44MTkwMiA1MC41MTYyIDUuNjA3MjRDNDguMzE5OCA0LjM5NTQ2IDQ0LjUzMyAyLjcyOTI2IDQwLjQ0MzIgMi4xMjMzN1pcIlxyXG5cdFx0XHRcdGZpbGw9XCIjN0U4OTkzXCIvPjwvU1ZHPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHR7IG1vZGFsU3RhdGUgJiYgKFxyXG5cdFx0XHQ8QWN0aW9uTW9kYWxcclxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNoYW5nZU1vZGFsU3RhdGUgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHRcdFx0dGl0bGU9eyAnRWRpdCBQcmVzZXQnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgbW9kYWxQcm9wcyA9PiA8TW9kYWxFZGl0b3JcclxuXHRcdFx0XHRcdHsgLi4ubW9kYWxQcm9wcyB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHQ8L0FjdGlvbk1vZGFsPlxyXG5cdFx0KSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFdpdGhQcmVzZXQ7IiwiaW1wb3J0IHtcclxuXHRjbGFzc25hbWVzLFxyXG5cdGdldENvbnZlcnRlZE5hbWUsXHJcbn0gZnJvbSAnLi4vLi4vaGVscGVycy90b29scyc7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHdpdGhTZWxlY3QsXHJcblx0ICB9ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgUmljaFRleHQsXHJcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZnVuY3Rpb24gUmljaERlc2NyaXB0aW9uKCBjb250ZW50ICkge1xyXG5cdHJldHVybiA8c21hbGwgc3R5bGU9eyB7XHJcblx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuXHRcdHBhZGRpbmc6ICcwLjJlbSAwLjhlbSAwIDAnLFxyXG5cdFx0Y29sb3I6ICcjOGU4YThhJyxcclxuXHR9IH0+XHJcblx0XHR7IGNvbnRlbnQgfVxyXG5cdDwvc21hbGw+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBGaWVsZFdyYXBwZXIoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYmxvY2tOYW1lID0gJycgfSxcclxuXHRcdFx0ICBjaGlsZHJlbixcclxuXHRcdFx0ICB3cmFwQ2xhc3NlcyAgICAgICA9IFtdLFxyXG5cdFx0XHQgIHZhbHVlSWZFbXB0eUxhYmVsID0gJycsXHJcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcclxuXHRcdFx0ICBjaGlsZHJlblBvc2l0aW9uICA9ICdiZXR3ZWVuJyxcclxuXHRcdFx0ICBfamZfYXJncyxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBzZXREeW5hbWljTmFtZSA9ICgpID0+IHtcclxuXHRcdGlmICggMSA8IGF0dHJpYnV0ZXMubGFiZWwubGVuZ3RoXHJcblx0XHRcdCYmICggISBhdHRyaWJ1dGVzLm5hbWUgfHwgJ2ZpZWxkX25hbWUnID09PSBhdHRyaWJ1dGVzLm5hbWUgKVxyXG5cdFx0KSB7XHJcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbmFtZTogZ2V0Q29udmVydGVkTmFtZSggYXR0cmlidXRlcy5sYWJlbCApIH0gKVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIHJlbmRlckxhYmVsKCkge1xyXG5cdFx0cmV0dXJuIDxCYXNlQ29udHJvbC5WaXN1YWxMYWJlbD5cclxuXHRcdFx0eyBSaWNoRGVzY3JpcHRpb24oIF9fKCAnaW5wdXQgbGFiZWw6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKSB9XHJcblx0XHRcdDxkaXYgb25CbHVyPXsgc2V0RHluYW1pY05hbWUgfSBjbGFzc05hbWU9J2pldC1mb3JtLWJ1aWxkZXJfX2xhYmVsJz5cclxuXHRcdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdyaWNoLWxhYmVsJyApIH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdMYWJlbC4uLidcclxuXHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhYmVsID8gYXR0cmlidXRlcy5sYWJlbCA6IHZhbHVlSWZFbXB0eUxhYmVsIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3TGFiZWwgPT4gc2V0QXR0cmlidXRlcyggeyBsYWJlbDogbmV3TGFiZWwgfSApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgYXR0cmlidXRlcy5yZXF1aXJlZCAmJiA8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fcmVxdWlyZWQnIH0+XHJcblx0XHRcdFx0XHR7IF9qZl9hcmdzLnJlcXVpcmVkX21hcmsgPyBfamZfYXJncy5yZXF1aXJlZF9tYXJrIDogJyonIH1cclxuXHRcdFx0XHQ8L3NwYW4+IH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0Jhc2VDb250cm9sLlZpc3VhbExhYmVsPjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlbmRlckRlc2NyaXB0aW9uKCkge1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdqZXQtZm9ybS1idWlsZGVyX19kZXNjLS13cmFwcGVyJz5cclxuXHRcdFx0eyBSaWNoRGVzY3JpcHRpb24oIF9fKCAnaW5wdXQgZGVzY3JpcHRpb246JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKSB9XHJcblx0XHRcdDxCYXNlQ29udHJvbCBrZXk9eyAnY3VzdG9tX2hlbHBfZGVzY3JpcHRpb24nIH0gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2Rlc2MnIH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJz5cclxuXHRcdFx0XHRcdDxSaWNoVGV4dFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncmljaC1kZXNjcmlwdGlvbicgKSB9XHJcblx0XHRcdFx0XHRcdHRhZ05hbWU9J3NtYWxsJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRGVzY3JpcHRpb24uLi4nXHJcblx0XHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVzYyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgZGVzYyA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRlc2MgfSApIH1cclxuXHRcdFx0XHRcdFx0c3R5bGU9eyB7IG1hcmdpblRvcDogJzBweCcgfSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0aWYgKCAncm93JyA9PT0gX2pmX2FyZ3MuZmllbGRzX2xheW91dCApIHtcclxuXHRcdHdyYXBDbGFzc2VzLnB1c2goICdqZXQtZm9ybS1idWlsZGVyLXJvd19fZmxleCcgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlSG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NuYW1lcyhcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCcsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXItcm93JyxcclxuXHRcdFx0XHR3cmFwQ2xhc3NlcyxcclxuXHRcdFx0KSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgJ3JvdycgIT09IF9qZl9hcmdzLmZpZWxkc19sYXlvdXQgJiYgPD5cclxuXHRcdFx0XHR7ICd0b3AnID09PSBjaGlsZHJlblBvc2l0aW9uICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0XHR7IHJlbmRlckxhYmVsKCkgfVxyXG5cdFx0XHRcdHsgJ2JldHdlZW4nID09PSBjaGlsZHJlblBvc2l0aW9uICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0XHR7IHJlbmRlckRlc2NyaXB0aW9uKCkgfVxyXG5cdFx0XHRcdHsgJ2JvdHRvbScgPT09IGNoaWxkcmVuUG9zaXRpb24gJiYgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8Lz4gfVxyXG5cdFx0XHR7ICdyb3cnID09PSBfamZfYXJncy5maWVsZHNfbGF5b3V0ICYmIDw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC1mb3JtLWJ1aWxkZXItcm93X19mbGV4LS1sYWJlbCc+XHJcblx0XHRcdFx0XHR7IHJlbmRlckxhYmVsKCkgfVxyXG5cdFx0XHRcdFx0eyByZW5kZXJEZXNjcmlwdGlvbigpIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LWZvcm0tYnVpbGRlci1yb3dfX2ZsZXgtLWNvbnRlbnQnPnsgY2hpbGRyZW4gfTwvZGl2PlxyXG5cdFx0XHQ8Lz4gfVxyXG5cdFx0PC9CYXNlQ29udHJvbD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KCBzZWxlY3QgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdF9qZl9hcmdzOiBKU09OLnBhcnNlKCBtZXRhLl9qZl9hcmdzIHx8IHt9ICksXHJcblx0fVxyXG59ICkoIEZpZWxkV3JhcHBlciApOyIsImNvbnN0IHtcclxuXHRcdCAgQnV0dG9uLFxyXG5cdFx0ICBQb3BvdmVyLFxyXG5cdFx0ICBQYW5lbEJvZHksXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIE1hY3Jvc0luc2VydGVyKCB7XHJcblx0XHRcdFx0XHRcdFx0IGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdCBmaWVsZHMsXHJcblx0XHRcdFx0XHRcdFx0IG9uRmllbGRDbGljayxcclxuXHRcdFx0XHRcdFx0XHQgY3VzdG9tTWFjcm9zLFxyXG5cdFx0XHRcdFx0XHRcdCB6SW5kZXggPSAxMDAwMDAwLFxyXG5cdFx0XHRcdFx0XHRcdCAuLi5wb3BvdmVyUHJvcHNcclxuXHRcdFx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdGNvbnN0IFsgc2hvd1BvcG92ZXIsIHNldFBvcG92ZXJTdGF0ZSBdID0gdXNlU3RhdGUoICgpID0+IGZhbHNlICk7XHJcblxyXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLWluc2VydGVyXCI+XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdGlzVGVydGlhcnlcclxuXHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRpY29uPXsgc2hvd1BvcG92ZXIgPyAnbm8tYWx0JyA6ICdhZG1pbi10b29scycgfVxyXG5cdFx0XHRsYWJlbD17ICdJbnNlcnQgbWFjcm9zJyB9XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLXRyaWdnZXJcIlxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdHNldFBvcG92ZXJTdGF0ZSggcHJldiA9PiAhIHByZXYgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0eyBzaG93UG9wb3ZlciAmJiAoXHJcblx0XHRcdDxQb3BvdmVyXHJcblx0XHRcdFx0c3R5bGU9eyB7IHpJbmRleCB9IH1cclxuXHRcdFx0XHRwb3NpdGlvbj17ICdib3R0b20gbGVmdCcgfVxyXG5cdFx0XHRcdHsgLi4ucG9wb3ZlclByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgZmllbGRzLmxlbmd0aCAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0Zvcm0gRmllbGRzJyB9PlxyXG5cdFx0XHRcdFx0eyBmaWVsZHMubWFwKCBmaWVsZCA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdmaWVsZF8nICsgZmllbGQubmFtZSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25GaWVsZENsaWNrKCBmaWVsZC5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD57ICclJyArIGZpZWxkLm5hbWUgKyAnJScgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdFx0eyBjdXN0b21NYWNyb3MgJiYgPFBhbmVsQm9keSB0aXRsZT17ICdDdXN0b20gTWFjcm9zJyB9PlxyXG5cdFx0XHRcdFx0eyBjdXN0b21NYWNyb3MubWFwKCBtYWNyb3MgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnbWFjcm9zXycgKyBtYWNyb3MgfT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggbWFjcm9zIClcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD57ICclJyArIG1hY3JvcyArICclJyB9PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cclxuXHRcdFx0PC9Qb3BvdmVyPlxyXG5cdFx0KSB9XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NJbnNlcnRlcjsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBCdXR0b24sXHJcblx0XHQgIEJ1dHRvbkdyb3VwLFxyXG5cdFx0ICBDYXJkLFxyXG5cdFx0ICBDYXJkQm9keSxcclxuXHRcdCAgQ2FyZEhlYWRlcixcclxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcclxuXHRcdCAgRmxleCxcclxuXHRcdCAgRmxleEl0ZW0sXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gUmVwZWF0ZXJXaXRoU3RhdGUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0SXRlbUhlYWRpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckNsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdHJlcGVhdGVySXRlbUNsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdG5ld0l0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbCA9ICdBZGQgTmV3JyxcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRvblNhdmVJdGVtcyxcclxuXHRcdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRcdG9uQWRkTmV3SXRlbSxcclxuXHRcdFx0XHRcdFx0XHRcdG9uUmVtb3ZlSXRlbSxcclxuXHRcdFx0XHRcdFx0XHRcdGhlbHAgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlbHBTb3VyY2U6IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwVmlzaWJsZTogKCkgPT4gZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlbHBLZXk6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdGFkZGl0aW9uYWxDb250cm9scyA9IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudCcsIC4uLnJlcGVhdGVyQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cdGNvbnN0IGl0ZW1DbGFzc05hbWVzID0gWyAnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50LWl0ZW0nLCAuLi5yZXBlYXRlckl0ZW1DbGFzc2VzIF0uam9pbiggJyAnICk7XHJcblxyXG5cdGNvbnN0IHBhcnNlZEl0ZW1zID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRyZXR1cm4gaXRlbXMubWFwKCBpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtLl9fdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFsge1xyXG5cdFx0XHRcdC4uLm5ld0l0ZW0sXHJcblx0XHRcdFx0X192aXNpYmxlOiB0cnVlLFxyXG5cdFx0XHR9IF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBbIGl0ZW1zRGF0YSwgc2V0SXRlbXNEYXRhIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHBhcnNlZEl0ZW1zKCkgKTtcclxuXHR9LCBbXSApO1xyXG5cclxuXHRjb25zdCBbIGlzU2FmZURlbGV0aW5nLCBzZXRTYWZlRGVsZXRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XHJcblxyXG5cdGNvbnN0IGNoYW5nZUN1cnJlbnRJdGVtID0gKCB2YWx1ZVRvU2V0LCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcclxuXHJcblx0XHRcdHByZXZDbG9uZVsgaW5kZXggXSA9IHtcclxuXHRcdFx0XHQuLi5wcmV2WyBpbmRleCBdLFxyXG5cdFx0XHRcdC4uLnZhbHVlVG9TZXQsXHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TYXZlRGVsZXRpbmcgPSBpbmRleCA9PiB7XHJcblx0XHRyZXR1cm4gY29uZmlybSggX18oIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIGl0ZW0gJHsgaW5kZXggKyAxIH0/YCwgJ2pldC1mb3JtLWJ1aWxkZXInICkgKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbW92ZU9wdGlvbiA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdGlzU2FmZURlbGV0aW5nICYmICEgb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgfHxcclxuXHRcdFx0b25SZW1vdmVJdGVtICYmICEgb25SZW1vdmVJdGVtKCBpbmRleCwgaXRlbXNEYXRhIClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xyXG5cdFx0XHRwcmV2Q2xvbmUuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGFkZE5ld0l0ZW0gPSAoIHZhbHVlICkgPT4ge1xyXG5cdFx0aWYgKCBvbkFkZE5ld0l0ZW0gKSB7XHJcblx0XHRcdG9uQWRkTmV3SXRlbSggdmFsdWUsIGl0ZW1zRGF0YSApO1xyXG5cdFx0fVxyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IFsgLi4ucHJldiwge1xyXG5cdFx0XHQuLi52YWx1ZSxcclxuXHRcdFx0X192aXNpYmxlOiB0cnVlLFxyXG5cdFx0fSBdICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjbG9uZUl0ZW0gPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xyXG5cdFx0XHRjb25zdCBbIGJlZm9yZSwgYWZ0ZXIgXSA9IFsgcHJldkNsb25lLnNsaWNlKCAwLCBpbmRleCArIDEgKSwgcHJldkNsb25lLnNsaWNlKCBpbmRleCArIDEgKSBdO1xyXG5cclxuXHRcdFx0cmV0dXJuIFsgLi4uYmVmb3JlLCBwcmV2Q2xvbmVbIGluZGV4IF0sIC4uLmFmdGVyIF07XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3ZlUmVwZWF0ZXJJdGVtID0gKCB7IG9sZEluZGV4LCBuZXdJbmRleCB9ICkgPT4ge1xyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xyXG5cclxuXHRcdFx0WyBwcmV2Q2xvbmVbIG5ld0luZGV4IF0sIHByZXZDbG9uZVsgb2xkSW5kZXggXSBdID0gWyBwcmV2Q2xvbmVbIG9sZEluZGV4IF0sIHByZXZDbG9uZVsgbmV3SW5kZXggXSBdO1xyXG5cclxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdmVVcCA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4IC0gMSB9ICk7XHJcblx0fVxyXG5cdGNvbnN0IG1vdmVEb3duID0gKCBpbmRleCApID0+IHtcclxuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggKyAxIH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlzRGlzYWJsZWRFbmQgPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0cmV0dXJuICEgKCBpbmRleCA8IGl0ZW1zRGF0YS5sZW5ndGggLSAxICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b2dnbGVWaXNpYmxlID0gaW5kZXggPT4ge1xyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xyXG5cdFx0XHRwcmV2Q2xvbmVbIGluZGV4IF0uX192aXNpYmxlID0gISAoIHByZXZDbG9uZVsgaW5kZXggXS5fX3Zpc2libGUgKTtcclxuXHJcblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIHRydWUgPT09IGlzU2F2ZUFjdGlvbiApIHtcclxuXHRcdFx0Zm9yICggY29uc3QgaXRlbXNEYXRhS2V5IGluIGl0ZW1zRGF0YSApIHtcclxuXHRcdFx0XHRmb3IgKCBjb25zdCBpdGVtS2V5IGluIGl0ZW1zRGF0YVsgaXRlbXNEYXRhS2V5IF0gKSB7XHJcblx0XHRcdFx0XHRpZiAoIGl0ZW1LZXkuc3RhcnRzV2l0aCggJ19fJyApICkge1xyXG5cdFx0XHRcdFx0XHRkZWxldGUgaXRlbXNEYXRhWyBpdGVtc0RhdGFLZXkgXVsgaXRlbUtleSBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRvblNhdmVJdGVtcyggaXRlbXNEYXRhICk7XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fSBlbHNlIGlmICggZmFsc2UgPT09IGlzU2F2ZUFjdGlvbiApIHtcclxuXHRcdFx0b25Vbk1vdW50KCk7XHJcblx0XHR9XHJcblx0fSwgWyBpc1NhdmVBY3Rpb24gXSApO1xyXG5cclxuXHRjb25zdCBnZXRSZXBlYXRlckl0ZW1JZCA9IGluZGV4ID0+IGBqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtXyR7IGluZGV4IH1gO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgaGVscFNvdXJjZSxcclxuXHRcdFx0ICBoZWxwVmlzaWJsZSxcclxuXHRcdFx0ICBoZWxwS2V5LFxyXG5cdFx0ICB9ID0gaGVscDtcclxuXHJcblx0Y29uc3QgaXNWaXNpYmxlSGVscCA9IGhlbHBWaXNpYmxlKCBpdGVtc0RhdGEgKSAmJiBoZWxwU291cmNlICYmIGhlbHBTb3VyY2VbIGhlbHBLZXkgXTtcclxuXHJcblx0cmV0dXJuIDxkaXZcclxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxyXG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXInIH1cclxuXHQ+XHJcblx0XHR7IGlzVmlzaWJsZUhlbHAgJiYgPHA+eyBoZWxwU291cmNlWyBoZWxwS2V5IF0ubGFiZWwgfTwvcD4gfVxyXG5cclxuXHRcdHsgMCA8IGl0ZW1zRGF0YS5sZW5ndGggJiYgPD5cclxuXHRcdFx0PEZsZXg+XHJcblx0XHRcdFx0PEZsZXhJdGVtPlxyXG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBpc1NhZmVEZWxldGluZyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9GbGV4SXRlbT5cclxuXHRcdFx0XHQ8RmxleEl0ZW0gc3R5bGU9eyB7XHJcblx0XHRcdFx0XHRmbGV4OiAndW5zZXQnLFxyXG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMWVtJyxcclxuXHRcdFx0XHR9IH0+XHJcblx0XHRcdFx0XHR7Lyo8QnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7IF9fKCAnQ29weSBpdGVtcyB0byBjbGlwYm9hcmQnLCAnamV0LWZyb20tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0eyBfXyggJ0ltcG9ydCBpdGVtcyBmcm9tIGNsaXBib2FyZCcsICdqZXQtZnJvbS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPiovIH1cclxuXHRcdFx0XHQ8L0ZsZXhJdGVtPlxyXG5cdFx0XHQ8L0ZsZXg+XHJcblx0XHQ8Lz4gfVxyXG5cdFx0eyBhZGRpdGlvbmFsQ29udHJvbHMgfVxyXG5cdFx0eyBpdGVtc0RhdGEubWFwKCAoIGN1cnJlbnRJdGVtLCBpbmRleCApID0+IDxDYXJkXHJcblx0XHRcdGlzRWxldmF0ZWQ9eyB0cnVlIH1cclxuXHRcdFx0Y2xhc3NOYW1lPXsgaXRlbUNsYXNzTmFtZXMgfVxyXG5cdFx0XHRrZXk9eyBnZXRSZXBlYXRlckl0ZW1JZCggaW5kZXggKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17ICdyZXBlYXRlcl9faXRlbV9faGVhZGVyJyB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRlci1pdGVtX19sZWZ0LWhlYWRpbmcnPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9ucycgfT5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdFx0XHRpY29uPXsgY3VycmVudEl0ZW0uX192aXNpYmxlID8gJ25vLWFsdCcgOiAnZWRpdCcgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB0b2dnbGVWaXNpYmxlKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyAhIEJvb2xlYW4oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRcdGljb249eyAnYXJyb3ctdXAtYWx0MicgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlVXAoIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzRGlzYWJsZWRFbmQoIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRcdGljb249eyAnYXJyb3ctZG93bi1hbHQyJyB9XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG1vdmVEb3duKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9PlxyXG5cdFx0XHRcdFx0XHRcdHsgSXRlbUhlYWRpbmcgJiYgPEl0ZW1IZWFkaW5nXHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50SXRlbT17IGN1cnJlbnRJdGVtIH1cclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKCBkYXRhLCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHRcdHsgISBJdGVtSGVhZGluZyAmJiBgIyR7IGluZGV4ICsgMSB9YCB9XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8QnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGNsb25lSXRlbSggaW5kZXggKSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgX18oICdDbG9uZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZU9wdGlvbiggaW5kZXggKSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgX18oICdEZWxldGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0XHQ8L0NhcmRIZWFkZXI+XHJcblx0XHRcdHsgY3VycmVudEl0ZW0uX192aXNpYmxlICYmIDxDYXJkQm9keVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtX19jb250ZW50JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGNoaWxkcmVuICYmIDxSZWFjdC5GcmFnbWVudFxyXG5cdFx0XHRcdFx0a2V5PXsgYHJlcGVhdGVyLWNvbXBvbmVudF9faXRlbV8keyBpbmRleCB9YCB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHtcclxuXHRcdFx0XHRcdFx0Y3VycmVudEl0ZW0sXHJcblx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtOiBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKCBkYXRhLCBpbmRleCApLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50SW5kZXg6IGluZGV4LFxyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XHJcblx0XHRcdFx0eyAhIGNoaWxkcmVuICYmICdTZXQgdXAgeW91ciBSZXBlYXRlciBUZW1wbGF0ZSwgcGxlYXNlLicgfVxyXG5cdFx0XHQ8L0NhcmRCb2R5PiB9XHJcblx0XHQ8L0NhcmQ+ICkgfVxyXG5cdFx0eyAxIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8PlxyXG5cdFx0XHR7IGFkZGl0aW9uYWxDb250cm9scyB9XHJcblx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC1jbGVhcidcclxuXHRcdFx0XHRsYWJlbD17IF9fKCAnU2FmZSBkZWxldGluZycgKSB9XHJcblx0XHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IHNldFNhZmVEZWxldGluZyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz4gfVxyXG5cdFx0PEJ1dHRvblxyXG5cdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4gYWRkTmV3SXRlbSggbmV3SXRlbSApIH1cclxuXHRcdD5cclxuXHRcdFx0eyBhZGROZXdCdXR0b25MYWJlbCB9XHJcblx0XHQ8L0J1dHRvbj5cclxuXHQ8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyV2l0aFN0YXRlOyIsImltcG9ydCBGZXRjaEFwaUJ1dHRvbiBmcm9tICcuL2ZldGNoLWFwaS1idXR0b24nO1xyXG5pbXBvcnQgeyB3aXRoU2VsZWN0R2F0ZXdheXMgfSBmcm9tICcuLi9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlcic7XHJcblxyXG5jb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5jb25zdCB7XHJcblx0d2l0aFNlbGVjdCxcclxufSA9IHdwLmRhdGE7XHJcblxyXG5mdW5jdGlvbiBHYXRld2F5RmV0Y2hCdXR0b24oIHtcclxuXHRpbml0aWFsTGFiZWwgPSAnVmFsaWQnLFxyXG5cdGxhYmVsID0gJ0luVmFsaWQnLFxyXG5cdGFwaUFyZ3MgPSB7fSxcclxuXHRnYXRld2F5UmVxdWVzdElkLFxyXG59ICkge1xyXG5cclxuXHRyZXR1cm4gPEZldGNoQXBpQnV0dG9uXHJcblx0XHRpZD17IGdhdGV3YXlSZXF1ZXN0SWQgfVxyXG5cdFx0aW5pdGlhbExhYmVsPXsgaW5pdGlhbExhYmVsIH1cclxuXHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0YXBpQXJncz17IGFwaUFyZ3MgfVxyXG5cdC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoIHdpdGhTZWxlY3RHYXRld2F5cyApLFxyXG4pKCBHYXRld2F5RmV0Y2hCdXR0b24gKTsiLCJjb25zdCB7IGlzRW1wdHkgfSA9IHdpbmRvdy5sb2Rhc2g7XHJcblxyXG4vKipcclxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3QgeyB3aXRoSW5zdGFuY2VJZCB9ID0gd2luZG93LndwLmNvbXBvc2U7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCBCYXNlQ29udHJvbCA9IHdpbmRvdy53cC5jb21wb25lbnRzLkJhc2VDb250cm9sO1xyXG5cclxuZnVuY3Rpb24gR3JvdXBlZFNlbGVjdENvbnRyb2woIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlbHAsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBpbnN0YW5jZUlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgbGFiZWwsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBtdWx0aXBsZSA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgb25DaGFuZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBvcHRpb25zID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHQgICBjbGFzc05hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHQgICB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGhpZGVMYWJlbEZyb21WaXNpb24sXHJcblx0XHRcdFx0XHRcdFx0ICAgfSApIHtcclxuXHRjb25zdCBpZCA9IGBpbnNwZWN0b3Itc2VsZWN0LWNvbnRyb2wtJHsgaW5zdGFuY2VJZCB9YDtcclxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCBldmVudCApID0+IHtcclxuXHRcdG9uQ2hhbmdlKCBldmVudC50YXJnZXQudmFsdWUgKTtcclxuXHR9O1xyXG5cclxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmV0dXJuICEgaXNFbXB0eSggb3B0aW9ucyApICYmIChcclxuXHRcdDxCYXNlQ29udHJvbCBsYWJlbD17IGxhYmVsIH0gaGlkZUxhYmVsRnJvbVZpc2lvbj17IGhpZGVMYWJlbEZyb21WaXNpb24gfSBpZD17IGlkIH0gaGVscD17IGhlbHAgfVxyXG5cdFx0XHRcdFx0IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9PlxyXG5cdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0aWQ9eyBpZCB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1zZWxlY3QtY29udHJvbF9faW5wdXRcIlxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0YXJpYS1kZXNjcmliZWRieT17ICEhIGhlbHAgPyBgJHsgaWQgfV9faGVscGAgOiB1bmRlZmluZWQgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGxhYmVsIH0tcGxhY2Vob2xkZXJgIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYGAgfVxyXG5cdFx0XHRcdD57IGAtLWAgfTwvb3B0aW9uPlxyXG5cdFx0XHRcdHsgb3B0aW9ucy5tYXAoICggb3B0R3JvdXAsIGdyb3VwSW5kZXggKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gISBpc0VtcHR5KCBvcHRHcm91cC52YWx1ZXMgKSAmJiA8b3B0Z3JvdXBcclxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IG9wdEdyb3VwLmxhYmVsIH0tJHsgZ3JvdXBJbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgb3B0R3JvdXAubGFiZWwgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IG9wdEdyb3VwLnZhbHVlcy5tYXAoICggb3B0aW9uLCBpbmRleCApID0+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgYCR7IG9wdGlvbi52YWx1ZSB9LSR7IGluZGV4IH0tJHsgZ3JvdXBJbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IG9wdGlvbi52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IG9wdGlvbi5kaXNhYmxlZCB9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0eyBvcHRpb24ubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPixcclxuXHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHQ8L29wdGdyb3VwPjtcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0KTtcclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhJbnN0YW5jZUlkKCBHcm91cGVkU2VsZWN0Q29udHJvbCApOyIsImZ1bmN0aW9uIEhvcml6b250YWxMaW5lKCBwcm9wcyApIHtcclxuXHRyZXR1cm4gPGhyIHN0eWxlPXsgeyAuLi5wcm9wcyB9IH0vPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbExpbmU7IiwiaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSBcIi4vcHJlc2V0LWVkaXRvclwiO1xyXG5pbXBvcnQge1xyXG5cdEdsb2JhbEZpZWxkLFxyXG5cdE1hcEZpZWxkXHJcbn0gZnJvbSBcIi4vcHJlc2V0LXJlbmRlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNQcmVzZXQoIHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0LFxyXG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRwYXJzZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGV4Y2x1ZGVPcHRpb25zLFxyXG5cdFx0XHRcdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IHBvc2l0aW9uID0gJ2R5bmFtaWMnO1xyXG5cdGNvbnN0IFsgc3RhdGVWYWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCAoKSA9PiBwYXJzZVZhbHVlKCB2YWx1ZSApICk7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIG5ld1ZhbHVlLCBuYW1lICkgPT4ge1xyXG5cdFx0c2V0VmFsdWUoIHByZXYgPT4gKCB7IC4uLnByZXYsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9ICkgKTtcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGlmICggb25TYXZlUHJlc2V0ICkge1xyXG5cdFx0XHRcdG9uU2F2ZVByZXNldCggSlNPTi5zdHJpbmdpZnkoIHN0YXRlVmFsdWUgKSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH1cclxuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLmdsb2JhbF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPEdsb2JhbEZpZWxkXHJcblx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHJcblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcubWFwX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8TWFwRmllbGRcclxuXHRcdFx0a2V5PXsgYGN1cnJlbnRfZmllbGRfJHsgZGF0YS5uYW1lIH1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHRjdXJyZW50U3RhdGU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0ZGF0YT17IGRhdGEgfVxyXG5cdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxyXG5cdFx0Lz4gKSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0KCBEeW5hbWljUHJlc2V0ICk7IiwiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuZnVuY3Rpb24gd2l0aFByZXNldCggV3JhcHBlZENvbXBvbmVudCApIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gSmV0Rm9ybVByZXNldEVkaXRvciggcHJvcHMgKSB7XHJcblxyXG5cdFx0Y29uc3QgcGFyc2VWYWx1ZSA9ICgpID0+IHtcclxuXHRcdFx0bGV0IHZhbCA9IHt9O1xyXG5cclxuXHRcdFx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xyXG5cdFx0XHRcdHZhbCA9IHsgLi4ucHJvcHMudmFsdWUgfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggcHJvcHMudmFsdWUgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBwcm9wcy52YWx1ZSApIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dmFsID0gSlNPTi5wYXJzZSggcHJvcHMudmFsdWUgKTtcclxuXHRcdFx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWwgKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2ggKCBleGNlcHRpb24gKSB7XHJcblx0XHRcdFx0XHR2YWwgPSB7fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dmFsLmpldF9wcmVzZXQgPSB0cnVlO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc1Zpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XHJcblx0XHRcdHJldHVybiAoICggZGF0YS5wb3NpdGlvbiAmJiBwb3NpdGlvbiA9PT0gZGF0YS5wb3NpdGlvbiApXHJcblx0XHRcdFx0fHwgISBkYXRhLnBvc2l0aW9uIHx8ICdxdWVyeV92YXInICE9PSBjdXJyZW50U3RhdGUuZnJvbSApICYmIGlzR2xvYmFsVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGlzR2xvYmFsVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhICkgPT4ge1xyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHN3aXRjaCAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3F1ZXJ5X3Zhcic6XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0KCAncG9zdCcgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUucG9zdF9mcm9tIClcclxuXHRcdFx0XHRcdFx0XHR8fCAoICd1c2VyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS51c2VyX2Zyb20gKVxyXG5cdFx0XHRcdFx0XHRcdHx8ICggJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tIClcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoICdqZXQuZmIucHJlc2V0LmVkaXRvci5jdXN0b20uY29uZGl0aW9uJywgZmFsc2UsIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiwgY3VycmVudFN0YXRlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc0N1cnJlbnRGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCBkYXRhLnBvc2l0aW9uICYmIHBvc2l0aW9uICE9PSBkYXRhLnBvc2l0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlICYmIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc01hcEZpZWxkVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBmaWVsZCApID0+IHtcclxuXHJcblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZSAmJiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF1bIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBleGNsdWRlT3B0aW9ucyA9ICggc2VsZWN0T3B0aW9ucyApID0+IHtcclxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsgLi4uc2VsZWN0T3B0aW9ucyBdO1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goICggb3B0aW9uLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRpZiAoIHByb3BzLmV4Y2x1ZGVTb3VyY2VzICYmIHByb3BzLmV4Y2x1ZGVTb3VyY2VzLmluY2x1ZGVzKCBvcHRpb24udmFsdWUgKSApIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0XHRyZXR1cm4gb3B0aW9ucztcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50XHJcblx0XHRcdGtleT0nd3JhcHBlZC1wcmVzZXQtZWRpdG9yJ1xyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0cGFyc2VWYWx1ZT17IHBhcnNlVmFsdWUgfVxyXG5cdFx0XHRpc1Zpc2libGU9eyBpc1Zpc2libGUgfVxyXG5cdFx0XHRpc01hcEZpZWxkVmlzaWJsZT17IGlzTWFwRmllbGRWaXNpYmxlIH1cclxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHQvPjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQ7XHJcbiIsImltcG9ydCBHcm91cGVkU2VsZWN0Q29udHJvbCBmcm9tICcuLi9ncm91cGVkLXNlbGVjdC1jb250cm9sJztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIEN1c3RvbVNlbGVjdENvbnRyb2wsXHJcblx0XHQgIENhcmQsXHJcblx0XHQgIENhcmRCb2R5LFxyXG5cdFx0ICBDYXJkSGVhZGVyLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5mdW5jdGlvbiBHbG9iYWxGaWVsZCgge1xyXG5cdFx0XHRcdFx0XHQgIGRhdGEsXHJcblx0XHRcdFx0XHRcdCAgdmFsdWUsXHJcblx0XHRcdFx0XHRcdCAgaW5kZXgsXHJcblx0XHRcdFx0XHRcdCAgb25DaGFuZ2VWYWx1ZSxcclxuXHRcdFx0XHRcdFx0ICBpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdCAgZXhjbHVkZU9wdGlvbnMgPSBvcHRpb25zID0+IG9wdGlvbnMsXHJcblx0XHRcdFx0XHRcdCAgcG9zaXRpb24sXHJcblx0XHRcdFx0XHQgIH0gKSB7XHJcblxyXG5cdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcclxuXHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGRhdGEubmFtZSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdHJldHVybiAoIGlzVmlzaWJsZSggdmFsdWUsIGRhdGEsIHBvc2l0aW9uICkgJiZcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfJyArIGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMoIGRhdGEub3B0aW9ucyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gQXZhaWxhYmxlTWFwRmllbGQoIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkc01hcCxcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkLFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRpc01hcEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHR9ICkge1xyXG5cclxuXHRsZXQgY3VycmVudFZhbCA9IG51bGw7XHJcblxyXG5cdGlmICggISBmaWVsZHNNYXAgKSB7XHJcblx0XHRmaWVsZHNNYXAgPSB7fTtcclxuXHR9XHJcblxyXG5cdGN1cnJlbnRWYWwgPSBmaWVsZHNNYXBbIGZpZWxkIF07XHJcblxyXG5cdGlmICggISBjdXJyZW50VmFsIHx8ICdvYmplY3QnICE9PSB0eXBlb2YgY3VycmVudFZhbCApIHtcclxuXHRcdGN1cnJlbnRWYWwgPSB7fTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IEF2YWlsYWJsZUZpZWxkV3JhcHBlciA9ICggeyBmaWVsZCwgbmFtZSwgaW5kZXgsIGZJbmRleCwgY2hpbGRyZW4gfSApID0+IDxDYXJkXHJcblx0XHRrZXk9eyBmaWVsZCArIG5hbWUgKyBpbmRleCArIGZJbmRleCB9XHJcblx0XHRzaXplPXsgJ2V4dHJhU21hbGwnIH1cclxuXHRcdHN0eWxlPXsgeyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9IH1cclxuXHQ+XHJcblx0XHQ8Q2FyZEhlYWRlcj5cclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdqZXQtbGFiZWwtb3ZlcmZsb3cnPnsgZmllbGQgfTwvc3Bhbj5cclxuXHRcdDwvQ2FyZEhlYWRlcj5cclxuXHRcdDxDYXJkQm9keVxyXG5cdFx0XHRrZXk9eyBmaWVsZCArIG5hbWUgKyBpbmRleCArIGZJbmRleCB9XHJcblx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX2ZpZWxkcy1tYXAtaXRlbScgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IGNoaWxkcmVuIH1cclxuXHRcdDwvQ2FyZEJvZHk+XHJcblx0PC9DYXJkPjtcclxuXHJcblx0ZnVuY3Rpb24gQXZhaWxhYmxlRmllbGRXcmFwcGVyRnVuYyggeyBmaWVsZCwgbmFtZSwgaW5kZXgsIGZJbmRleCB9LCBjaGlsZHJlbiApIHtcclxuXHRcdHJldHVybiA8Q2FyZFxyXG5cdFx0XHRrZXk9eyBmaWVsZCArIG5hbWUgKyBpbmRleCArIGZJbmRleCB9XHJcblx0XHRcdHNpemU9eyAnZXh0cmFTbWFsbCcgfVxyXG5cdFx0XHRzdHlsZT17IHsgbWFyZ2luQm90dG9tOiAnMTBweCcgfSB9XHJcblx0XHQ+XHJcblx0XHRcdDxDYXJkSGVhZGVyPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0namV0LWxhYmVsLW92ZXJmbG93Jz57IGZpZWxkIH08L3NwYW4+XHJcblx0XHRcdDwvQ2FyZEhlYWRlcj5cclxuXHRcdFx0PENhcmRCb2R5XHJcblx0XHRcdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX2ZpZWxkcy1tYXAtaXRlbScgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHRcdDwvQ2FyZEJvZHk+XHJcblx0XHQ8L0NhcmQ+O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9eyBgbWFwX2ZpZWxkX3ByZXNldF8keyBmaWVsZCArIGluZGV4IH1gIH0+XHJcblxyXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLm1hcF9maWVsZHMubWFwKCAoIGRhdGEsIGZJbmRleCApID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvcHMgPSB7IGZpZWxkLCBuYW1lOiBkYXRhLm5hbWUsIGluZGV4LCBmSW5kZXggfTtcclxuXHJcblx0XHRcdGNvbnN0IHVuaXFLZXkgPSAnY29udHJvbF8nICsgZmllbGQgKyBkYXRhLm5hbWUgKyBpbmRleCArIGZJbmRleDtcclxuXHJcblx0XHRcdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcclxuXHRcdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxyXG5cdFx0XHRcdFx0XHRBdmFpbGFibGVGaWVsZFdyYXBwZXJGdW5jKCBwcm9wcywgPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSArICdUZXh0Q29udHJvbCcgfVxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+IClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxyXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9sYWJlbD17IGRhdGEubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInRvcFwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRjYXNlICdjdXN0b21fc2VsZWN0JzpcclxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxyXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XHJcblx0XHRcdFx0XHRcdFx0PEN1c3RvbVNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHsgc2VsZWN0ZWRJdGVtIH0gKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gc2VsZWN0ZWRJdGVtLmtleTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGRhdGEub3B0aW9ucy5maW5kKCBvcHRpb24gPT4gb3B0aW9uLmtleSA9PT0gY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gKSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9BdmFpbGFibGVGaWVsZFdyYXBwZXI+ICk7XHJcblx0XHRcdFx0Y2FzZSAnZ3JvdXBlZF9zZWxlY3QnOlxyXG5cdFx0XHRcdFx0cmV0dXJuICggaXNNYXBGaWVsZFZpc2libGUoIHZhbHVlLCBkYXRhLCBmaWVsZCApICYmXHJcblx0XHRcdFx0XHRcdDxBdmFpbGFibGVGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9IGtleT17IHVuaXFLZXkgfT5cclxuXHRcdFx0XHRcdFx0XHQ8R3JvdXBlZFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9sYWJlbD17IGRhdGEubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInRvcFwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPiApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICkgfVxyXG5cdDwvUmVhY3QuRnJhZ21lbnQ+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXBGaWVsZCgge1xyXG5cdFx0XHRcdFx0ICAgZGF0YSxcclxuXHRcdFx0XHRcdCAgIHZhbHVlLFxyXG5cdFx0XHRcdFx0ICAgaW5kZXgsXHJcblx0XHRcdFx0XHQgICBjdXJyZW50U3RhdGUsXHJcblx0XHRcdFx0XHQgICBvbkNoYW5nZVZhbHVlLFxyXG5cdFx0XHRcdFx0ICAgaXNDdXJyZW50RmllbGRWaXNpYmxlLFxyXG5cdFx0XHRcdFx0ICAgcG9zaXRpb24gPSAnZ2VuZXJhbCcsXHJcblx0XHRcdFx0ICAgfSApIHtcclxuXHJcblx0c3dpdGNoICggZGF0YS50eXBlICkge1xyXG5cdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdHJldHVybiAoIGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ2NvbnRyb2xfJyArIGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ2NvbnRyb2xfJyArIGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHRjYXNlICdjdXN0b21fc2VsZWN0JzpcclxuXHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxDdXN0b21TZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWN1c3RvbS1zZWxlY3QtY29udHJvbCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB7IHNlbGVjdGVkSXRlbSB9ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gc2VsZWN0ZWRJdGVtLmtleTtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB2YWx1ZSwgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGRhdGEub3B0aW9ucy5maW5kKCBvcHRpb24gPT4gb3B0aW9uLmtleSA9PT0gdmFsdWUgKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PiApO1xyXG5cdFx0Y2FzZSAnZ3JvdXBlZF9zZWxlY3QnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEdyb3VwZWRTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PiApO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRHbG9iYWxGaWVsZCxcclxuXHRBdmFpbGFibGVNYXBGaWVsZCxcclxuXHRNYXBGaWVsZCxcclxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEJ1dHRvbixcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cclxuZnVuY3Rpb24gUmVxdWVzdEJ1dHRvbigge1xyXG5cdGxhYmVsLFxyXG5cdGFqYXhBcmdzID0ge30sXHJcblx0b25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHtcclxuXHR9LFxyXG5cdG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7XHJcblx0fSxcclxuXHRvbkxvYWRpbmcgPSAoKSA9PiB7XHJcblx0fSxcclxuXHRjbGFzc05hbWUgPSAnJyxcclxuXHRjaGlsZHJlbiA9ICgpID0+IHtcclxuXHR9LFxyXG5cdGRpc2FibGVkID0gZmFsc2UsXHJcblx0Y3VzdG9tUmVxdWVzdCA9IGZhbHNlLFxyXG59ICkge1xyXG5cclxuXHRjb25zdCBkZWZhdWx0UmVxdWVzdCA9ICgpID0+IHtcclxuXHRcdG9uTG9hZGluZygpO1xyXG5cclxuXHRcdGpRdWVyeS5hamF4KCB7XHJcblx0XHRcdHVybDogYWpheHVybCxcclxuXHRcdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiBhamF4QXJncyxcclxuXHRcdH0gKS5kb25lKCByZXNwb25zZSA9PiByZXNwb25zZS5zdWNjZXNzID8gb25TdWNjZXNzUmVxdWVzdCggcmVzcG9uc2UgKSA6IG9uRmFpbFJlcXVlc3QoKSApLmZhaWwoICgpID0+IG9uRmFpbFJlcXVlc3QoKSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlcXVlc3QgPSAoKSA9PiB7XHJcblx0XHRpZiAoIGZhbHNlID09PSBjdXN0b21SZXF1ZXN0ICkge1xyXG5cdFx0XHRkZWZhdWx0UmVxdWVzdCgpO1xyXG5cdFx0fSBlbHNlIGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1c3RvbVJlcXVlc3QgKSB7XHJcblx0XHRcdGN1c3RvbVJlcXVlc3QoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG9uRmFpbFJlcXVlc3QoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPEJ1dHRvblxyXG5cdFx0ZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XHJcblx0XHRrZXk9eyAndmFsaWRhdGVfYXBpX2tleScgfVxyXG5cdFx0aXNQcmltYXJ5XHJcblx0XHRvbkNsaWNrPXsgcmVxdWVzdCB9XHJcblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxyXG5cdD5cclxuXHRcdHsgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxyXG5cdFx0eyBsYWJlbCB9XHJcblx0PC9CdXR0b24+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0QnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVxdWVzdEJ1dHRvbiBmcm9tIFwiLi9yZXF1ZXN0LWJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzIH0gZnJvbSBcIi4uL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBSZXF1ZXN0TG9hZGluZ0J1dHRvbigge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgbGFiZWwsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBhamF4QXJncyA9IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgb25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgb25GYWlsUmVxdWVzdCA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdCAgIH0gKSB7XHJcblxyXG5cdGNvbnN0IFtcclxuXHRcdGNsYXNzTmFtZSxcclxuXHRcdHNldExvYWRpbmdDbGFzcyxcclxuXHRcdGNsZWFyTG9hZGluZ0NsYXNzXHJcblx0XSA9IHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMoKTtcclxuXHJcblx0cmV0dXJuIDxSZXF1ZXN0QnV0dG9uXHJcblx0XHRhamF4QXJncz17IGFqYXhBcmdzIH1cclxuXHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0b25Mb2FkaW5nPXsgc2V0TG9hZGluZ0NsYXNzIH1cclxuXHRcdG9uU3VjY2Vzc1JlcXVlc3Q9eyByZXNwb25zZSA9PiB7XHJcblx0XHRcdGNsZWFyTG9hZGluZ0NsYXNzKCk7XHJcblx0XHRcdG9uU3VjY2Vzc1JlcXVlc3QoIHJlc3BvbnNlIClcclxuXHRcdH0gfVxyXG5cdFx0b25GYWlsUmVxdWVzdD17ICgpID0+IHtcclxuXHRcdFx0Y2xlYXJMb2FkaW5nQ2xhc3MoKTtcclxuXHRcdFx0b25GYWlsUmVxdWVzdCgpO1xyXG5cdFx0fSB9XHJcblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxyXG5cdD5cclxuXHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cclxuXHQ8L1JlcXVlc3RCdXR0b24+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0TG9hZGluZ0J1dHRvbjsiLCJpbXBvcnQgeyB3aXRoQ3VycmVudEFjdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyJztcclxuaW1wb3J0IEZldGNoQWpheEJ1dHRvbiBmcm9tICcuL2ZldGNoLWFqYXgtYnV0dG9uJztcclxuXHJcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0LFxyXG5cdHdpdGhEaXNwYXRjaCxcclxufSA9IHdwLmRhdGE7XHJcblxyXG5cclxuZnVuY3Rpb24gVmFsaWRhdGVCdXR0b25XaXRoU3RvcmUoIHtcclxuXHRjdXJyZW50QWN0aW9uLFxyXG5cdC4uLnByb3BzXHJcbn0gKSB7XHJcblxyXG5cdHJldHVybiA8RmV0Y2hBamF4QnV0dG9uXHJcblx0XHRpZD17IGN1cnJlbnRBY3Rpb24uaWQgfVxyXG5cdFx0eyAuLi5wcm9wcyB9XHJcblx0Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcblx0d2l0aFNlbGVjdCggd2l0aEN1cnJlbnRBY3Rpb24gKSxcclxuKSggVmFsaWRhdGVCdXR0b25XaXRoU3RvcmUgKTsiLCJpbXBvcnQgUmVxdWVzdEJ1dHRvbiBmcm9tIFwiLi9yZXF1ZXN0LWJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZVZhbGlkQ2xhc3NlcyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gVmFsaWRhdGVCdXR0b24oIHtcclxuXHRcdFx0XHRcdFx0XHQgaW5pdGlhbFZhbGlkLFxyXG5cdFx0XHRcdFx0XHRcdCBsYWJlbCxcclxuXHRcdFx0XHRcdFx0XHQgYWpheEFyZ3MgPSB7fSxcclxuXHRcdFx0XHRcdFx0XHQgb25WYWxpZCA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdCBvbkludmFsaWQgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdGNvbnN0IFtcclxuXHRcdGNsYXNzTmFtZSxcclxuXHRcdHNldFZhbGlkQ2xhc3MsXHJcblx0XHRzZXRJbnZhbGlkQ2xhc3MsXHJcblx0XHRzZXRMb2FkaW5nQ2xhc3NcclxuXHRdID0gdXNlU3RhdGVWYWxpZENsYXNzZXMoIGluaXRpYWxWYWxpZCB8fCBmYWxzZSApO1xyXG5cclxuXHRjb25zdCBzZXRWYWxpZCA9IHJlc3BvbnNlID0+IHtcclxuXHRcdHNldFZhbGlkQ2xhc3MoKTtcclxuXHRcdG9uVmFsaWQoIHJlc3BvbnNlICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0SW52YWxpZCA9ICgpID0+IHtcclxuXHRcdHNldEludmFsaWRDbGFzcygpO1xyXG5cdFx0b25JbnZhbGlkKCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxSZXF1ZXN0QnV0dG9uXHJcblx0XHRhamF4QXJncz17IGFqYXhBcmdzIH1cclxuXHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0b25Mb2FkaW5nPXsgc2V0TG9hZGluZ0NsYXNzIH1cclxuXHRcdG9uU3VjY2Vzc1JlcXVlc3Q9eyBzZXRWYWxpZCB9XHJcblx0XHRvbkZhaWxSZXF1ZXN0PXsgc2V0SW52YWxpZCB9XHJcblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxyXG5cdD5cclxuXHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cclxuXHQ8L1JlcXVlc3RCdXR0b24+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZUJ1dHRvbjsiLCJjb25zdCB7IFJhd0hUTUwgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcmFwcGVyUmVxdWlyZWRDb250cm9sKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmllbGQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWxLZXkgPSAnbGFiZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkS2V5ID0gJ3JlcXVpcmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwS2V5ID0gJ2hlbHAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICkge1xyXG5cdGNvbnN0IFsgbmFtZSwgZGF0YSBdID0gZmllbGQ7XHJcblxyXG5cdC8qY29uc3QgSWNvbkNvbXBvbmVudCA9IGRhdGEuaWNvbiA/IHByb3BzID0+IHtcclxuXHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdGtleT17ICdpbm5lcl9pY29uX2ZpZWxkXycgKyBuYW1lIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQ+eyBkYXRhLmljb24gfTwvZGl2PlxyXG5cdH0gOiBudWxsOyovXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXHJcblx0XHRcdGtleT17ICd1c2VyX21ldGFfJyArIG5hbWUgfVxyXG5cdFx0PlxyXG5cdFx0XHR7Lyo8SWNvbkNvbXBvbmVudFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZmllbGQtbWFwX19yb3ctaWNvbicgfVxyXG5cdFx0XHRcdGtleT17ICdpY29uX2ZpZWxkXycgKyBuYW1lIH1cclxuXHRcdFx0XHRzdHlsZT17IHsgaGVpZ2h0OiAnNDhweCcsIHdpZHRoOiAnNDhweCcgfSB9XHJcblx0XHRcdC8+Ki99XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZpZWxkLW1hcF9fcm93LWxhYmVsXCI+XHJcblxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdmaWVsZHMtbWFwX19sYWJlbCcgfT5cclxuXHRcdFx0XHRcdHsgKCBkYXRhLmhhc093blByb3BlcnR5KCBsYWJlbEtleSApICYmIGRhdGFbIGxhYmVsS2V5IF0gKSAmJiBkYXRhWyBsYWJlbEtleSBdIH1cclxuXHRcdFx0XHRcdHsgKCAhIGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgKSAmJiBkYXRhIH1cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0eyAoIGRhdGEuaGFzT3duUHJvcGVydHkoIHJlcXVpcmVkS2V5ICkgJiYgZGF0YVsgcmVxdWlyZWRLZXkgXSApICYmXHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2ZpZWxkcy1tYXBfX3JlcXVpcmVkJyB9PiAqPC9zcGFuPiB9XHJcblx0XHRcdFx0eyBkYXRhWyBoZWxwS2V5IF0gJiYgPHBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscCcgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAncmdiKDExNywgMTE3LCAxMTcpJyxcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAnMWVtIDAgMCAwJyxcclxuXHRcdFx0XHRcdH0gfT5cclxuXHRcdFx0XHRcdDxSYXdIVE1MPnsgZGF0YVsgaGVscEtleSBdIH08L1Jhd0hUTUw+XHJcblx0XHRcdFx0PC9wPiB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7IGNoaWxkcmVuIH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn0iLCJpbXBvcnQgeyB1c2VBY3Rpb25zIH0gZnJvbSBcIi4uL2hvb2tzL2hvb2tzLWhlbHBlclwiO1xyXG5pbXBvcnQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMgZnJvbSBcIi4uL2dhdGV3YXlzL2dhdGV3YXktYWN0aW9uLWF0dHJ1Yml0ZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBY3Rpb25zQnlUeXBlID0gdHlwZSA9PiB7XHJcblx0Y29uc3QgWyBhY3Rpb25zIF0gPSB1c2VBY3Rpb25zKCk7XHJcblxyXG5cdHJldHVybiBhY3Rpb25zLmZpbHRlciggYWN0aW9uID0+IHR5cGUgPT09IGFjdGlvbi50eXBlICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZnJvbUxvY2FsaXplSGVscGVyID0gbmFtZSA9PiB7XHJcblx0cmV0dXJuIG5hbWUgPyB3aW5kb3cuSmV0RkJMb2NhbGl6ZUhlbHBlclsgbmFtZSBdIDogd2luZG93LkpldEZCTG9jYWxpemVIZWxwZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQnlUeXBlTGlzdCA9ICggYWN0aW9uVHlwZSwgd2l0aERlc2MgPSBmYWxzZSApID0+IHtcclxuXHRyZXR1cm4gZ2V0QWN0aW9uc0J5VHlwZSggYWN0aW9uVHlwZSApLm1hcCggYWN0aW9uID0+IHtcclxuXHRcdGNvbnN0IG5ld0FjdGlvbiA9IHtcclxuXHRcdFx0dmFsdWU6IGFjdGlvbi5pZCxcclxuXHRcdFx0bGFiZWw6IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldEFjdGlvbkxhYmVsJyApKCBhY3Rpb24udHlwZSApLFxyXG5cdFx0fTtcclxuXHRcdGlmICggd2l0aERlc2MgKSB7XHJcblx0XHRcdG5ld0FjdGlvbi5sYWJlbCArPSBgICgkeyBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkgfSlgXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5ld0FjdGlvbjtcclxuXHR9ICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWN0aW9uU2V0dGluZ3MgPSBhY3Rpb25JZCA9PiB7XHJcblx0Y29uc3QgWyBhY3Rpb25zIF0gPSB1c2VBY3Rpb25zKCk7XHJcblx0Y29uc3QgYWN0aW9uID0gYWN0aW9ucy5maW5kKCBhY3Rpb24gPT4gYWN0aW9uSWQgPT09IGFjdGlvbi5pZCApO1xyXG5cclxuXHRyZXR1cm4gKCBhY3Rpb24gJiYgYWN0aW9uLnNldHRpbmdzICkgPyBhY3Rpb24uc2V0dGluZ3MgOiBmYWxzZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb252ZXJ0TGlzdFRvRmllbGRzTWFwID0gKCAuLi5zb3VyY2VzICkgPT4ge1xyXG5cdGNvbnN0IHJlc3BvbnNlID0gW107XHJcblxyXG5cdGZvciAoIGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzICkge1xyXG5cdFx0cmVzcG9uc2UucHVzaCggLi4uc291cmNlLm1hcCggaXRlbSA9PiB7XHJcblx0XHRcdGNvbnN0IGlkID0gaXRlbS52YWx1ZTtcclxuXHJcblx0XHRcdHJldHVybiBbIGlkLCBpdGVtIF07XHJcblx0XHR9ICkgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbiIsImltcG9ydCB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQgZnJvbSBcIi4vYWN0aW9uLXdyYXBwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZEFjdGlvbiggYWN0aW9uVHlwZSwgYWN0aW9uSW5zdGFuY2UgKSB7XHJcblx0d2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9ucyA9IHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgfHwge307XHJcblx0d2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9uc1sgYWN0aW9uVHlwZSBdID0gd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0KCBhY3Rpb25UeXBlLCBhY3Rpb25JbnN0YW5jZSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRBY3Rpb247XHJcbiIsImltcG9ydCB7IGZyb21Mb2NhbGl6ZUhlbHBlciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJcIjtcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhBY3Rpb25Mb2NhbGl6ZVNjcmlwdCggYWN0aW9uVHlwZSwgQWN0aW9uSW5zdGFuY2UgKSB7XHJcblx0Y29uc3QgbG9jYWxpemVkRGF0YSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb25UeXBlICk7XHJcblxyXG5cdHJldHVybiBwcm9wcyA9PiB7XHJcblx0XHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRcdHByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdFx0WyBrZXkgXTogdmFsdWUsXHJcblx0XHRcdH0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb25DaGFuZ2VTZXR0aW5nT2JqID0gKCB2YWx1ZSApID0+IHtcclxuXHRcdFx0cHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0XHQuLi52YWx1ZSxcclxuXHRcdFx0fSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBnZXRNYXBGaWVsZCA9ICggeyBzb3VyY2UgPSAnZmllbGRzX21hcCcsIG5hbWUgfSApID0+IHtcclxuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBwcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRcdGlmICggdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzZXRNYXBGaWVsZCA9ICggeyBzb3VyY2UgPSAnZmllbGRzX21hcCcsIG5hbWVGaWVsZCwgdmFsdWUgfSApID0+IHtcclxuXHRcdFx0Y29uc3QgZmllbGRzTWFwID0ge1xyXG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSxcclxuXHRcdFx0XHRbIG5hbWVGaWVsZCBdOiB2YWx1ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYWRkaXRpb25hbFByb3BzID0geyBvbkNoYW5nZVNldHRpbmcsIGdldE1hcEZpZWxkLCBzZXRNYXBGaWVsZCwgb25DaGFuZ2VTZXR0aW5nT2JqIH07XHJcblx0XHRjb25zdCByZXN1bHRQcm9wcyA9IHsgLi4ucHJvcHMsIC4uLmxvY2FsaXplZERhdGEsIC4uLmFkZGl0aW9uYWxQcm9wcyB9O1xyXG5cclxuXHRcdHJldHVybiA8PlxyXG5cdFx0XHQ8QWN0aW9uSW5zdGFuY2UgeyAuLi5yZXN1bHRQcm9wcyB9IC8+XHJcblx0XHRcdHsgYXBwbHlGaWx0ZXJzKCBgamV0LmZiLnJlbmRlci5hY3Rpb24uJHsgYWN0aW9uVHlwZSB9YCwgPD48Lz4sIHJlc3VsdFByb3BzICkgfVxyXG5cdFx0PC8+XHJcblx0fTtcclxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCB7IHNlbGVjdCB9ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHsgc3RvcmU6IGJsb2Nrc1N0b3JlIH0gPSB3cC5ibG9ja3M7XHJcblxyXG5jb25zdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciA9ICggYmxvY2tQYXJzZXJGdW5jICkgPT4ge1xyXG5cdGNvbnN0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yID0gKCBibG9ja3MgKSA9PiB7XHJcblxyXG5cdFx0YmxvY2tzID0gYmxvY2tzIHx8IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xyXG5cclxuXHRcdGJsb2Nrcy5tYXAoIGJsb2NrID0+IHtcclxuXHRcdFx0YmxvY2tQYXJzZXJGdW5jKCBibG9jayApO1xyXG5cclxuXHRcdFx0aWYgKCBibG9jay5pbm5lckJsb2Nrcy5sZW5ndGggKSB7XHJcblx0XHRcdFx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrLmlubmVyQmxvY2tzICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvcigpO1xyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtRmllbGRzQmxvY2tzID0gKCBleGNsdWRlID0gW10sIHBsYWNlaG9sZGVyID0gZmFsc2UsIHN1cHByZXNzRmlsdGVyID0gZmFsc2UgKSA9PiB7XHJcblx0bGV0IGZvcm1GaWVsZHMgPSBbXTtcclxuXHRsZXQgc2tpcEZpZWxkcyA9IFsgJ3N1Ym1pdCcsICdmb3JtLWJyZWFrJywgJ2hlYWRpbmcnLCAnZ3JvdXAtYnJlYWsnLCAnY29uZGl0aW9uYWwnLCAuLi5leGNsdWRlIF07XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XHJcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXHJcblx0XHRcdCYmIGJsb2NrLmF0dHJpYnV0ZXMubmFtZVxyXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXHJcblx0XHQpIHtcclxuXHJcblx0XHRcdC8qY29uc3QgYmxvY2tUeXBlID0gc2VsZWN0KCBibG9ja3NTdG9yZSApLmdldEJsb2NrVHlwZSggYmxvY2submFtZSApOyovXHJcblxyXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcclxuXHRcdFx0XHRibG9ja05hbWU6IGJsb2NrLm5hbWUsXHJcblx0XHRcdFx0bmFtZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzLmxhYmVsIHx8IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHR2YWx1ZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdC8vaWNvbjogYmxvY2tUeXBlLmljb24uc3JjLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHRmb3JtRmllbGRzID0gcGxhY2Vob2xkZXJcclxuXHRcdD8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxyXG5cdFx0OiBmb3JtRmllbGRzO1xyXG5cclxuXHRyZXR1cm4gc3VwcHJlc3NGaWx0ZXIgPyBmb3JtRmllbGRzIDogYXBwbHlGaWx0ZXJzKCAnamV0LmZiLmdldEZvcm1GaWVsZHNCbG9ja3MnLCBmb3JtRmllbGRzICk7XHJcbn1cclxuXHJcbmNvbnN0IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50ID0gKCBwbGFjZWhvbGRlciA9IGZhbHNlLCBzdXBwcmVzc0ZpbHRlciA9IGZhbHNlICkgPT4ge1xyXG5cclxuXHRjb25zdCBza2lwRmllbGRzID0gWyAnc3VibWl0JywgJ2Zvcm0tYnJlYWsnLCAnaGVhZGluZycsICdncm91cC1icmVhaycsICdjb25kaXRpb25hbCcgXTtcclxuXHRsZXQgZm9ybUZpZWxkcyA9IFtdO1xyXG5cclxuXHRjb25zdCBjdXJyZW50ID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZWxlY3RlZEJsb2NrKCk7XHJcblxyXG5cdGlmICggbnVsbCA9PT0gY3VycmVudCApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XHJcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXHJcblx0XHRcdCYmIGN1cnJlbnQuY2xpZW50SWQgIT09IGJsb2NrLmNsaWVudElkXHJcblx0XHRcdCYmICEgc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcclxuXHRcdCkge1xyXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcclxuXHRcdFx0XHRibG9ja05hbWU6IGJsb2NrLm5hbWUsXHJcblx0XHRcdFx0bGFiZWw6IGJsb2NrLmF0dHJpYnV0ZXMubGFiZWwgfHwgYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdHZhbHVlOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdGZvcm1GaWVsZHMgPSBwbGFjZWhvbGRlclxyXG5cdFx0PyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXHJcblx0XHQ6IGZvcm1GaWVsZHM7XHJcblxyXG5cdHJldHVybiBzdXBwcmVzc0ZpbHRlciA/IGZvcm1GaWVsZHMgOiBhcHBseUZpbHRlcnMoICdqZXQuZmIuZ2V0Rm9ybUZpZWxkc0Jsb2NrcycsIGZvcm1GaWVsZHMgKTtcclxufVxyXG5cclxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzID0gKCBleGNsdWRlID0gW10gKSA9PiB7XHJcblx0bGV0IGZpZWxkcyA9IFtdO1xyXG5cdGNvbnN0IGJsb2NrcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIGV4Y2x1ZGUgKTtcclxuXHJcblx0aWYgKCBibG9ja3MgKSB7XHJcblx0XHRibG9ja3MuZm9yRWFjaCggaXRlbSA9PiBmaWVsZHMucHVzaCggaXRlbS5uYW1lICkgKTtcclxuXHR9XHJcblx0cmV0dXJuIGZpZWxkcztcclxufVxyXG5cclxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nID0gKCBibG9ja05hbWUgKSA9PiB7XHJcblx0Y29uc3QgZmllbGRzID0gZ2V0QXZhaWxhYmxlRmllbGRzKCBbIGJsb2NrTmFtZSBdICk7XHJcblxyXG5cdGxldCBmaWVsZHNTdHJpbmcgPSBbXTtcclxuXHRmaWVsZHMuZm9yRWFjaCggZnVuY3Rpb24oIGl0ZW0gKSB7XHJcblx0XHRmaWVsZHNTdHJpbmcucHVzaCggJyVGSUVMRDo6JyArIGl0ZW0gKyAnJScgKTtcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBfXyggJ0F2YWlsYWJsZSBmaWVsZHM6ICcsICdqZXQtZm9ybS1idWlsZGVyJyApICsgZmllbGRzU3RyaW5nLmpvaW4oICcsICcgKTtcclxufVxyXG5cclxuY29uc3QgZ2V0SW5uZXJCbG9ja3MgPSAoIGNsaWVudElkICkgPT4ge1xyXG5cdGNvbnN0IGJsb2NrID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9jayggY2xpZW50SWQgKTtcclxuXHRyZXR1cm4gYmxvY2sgPyBibG9jay5pbm5lckJsb2NrcyA6IFtdO1xyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtRmllbGRzQnlCbG9jayA9ICggYmxvY2tFeGNsdWRlICkgPT4ge1xyXG5cdHJldHVybiAoKSA9PiBnZXRGb3JtRmllbGRzQmxvY2tzKCBbIGJsb2NrRXhjbHVkZS5uYW1lIF0gKTtcclxufVxyXG5cclxuY29uc3QgZ2V0QmxvY2tzQnlOYW1lID0gYmxvY2tOYW1lcyA9PiB7XHJcblx0Y29uc3QgYmxvY2tzID0gW107XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XHJcblx0XHRpZiAoICEgYmxvY2tOYW1lcy5pbmNsdWRlcyggYmxvY2submFtZSApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRibG9ja3MucHVzaCggYmxvY2sgKTtcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBibG9ja3M7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdGdldEZvcm1GaWVsZHNCeUJsb2NrLFxyXG5cdGdldElubmVyQmxvY2tzLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcclxuXHRnZXRCbG9ja3NCeU5hbWUsXHJcbn07XHJcblxyXG4iLCJpbXBvcnQge1xyXG5cdGZyb21Mb2NhbGl6ZUhlbHBlcixcclxuXHRnZXRBY3Rpb25TZXR0aW5ncyxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb24taGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkge1xyXG5cdGNvbnN0IHsgZ2F0ZXdheUF0dHJzLCBsYWJlbCB9ID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0TG9jYWxpemVkRnVsbFBhY2snICkoIGFjdGlvbi50eXBlICk7XHJcblx0Y29uc3QgYWN0aW9uU2V0dGluZ3MgPSBnZXRBY3Rpb25TZXR0aW5ncyggYWN0aW9uLmlkICk7XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gYXR0ciA9PiB7XHJcblx0XHRpZiAoIGFjdGlvblNldHRpbmdzWyBhdHRyIF0gKSB7XHJcblx0XHRcdHJldHVybiBhY3Rpb25TZXR0aW5nc1sgYXR0ciBdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBhY3Rpb25TZXR0aW5nc1sgYWN0aW9uLnR5cGUgXSAmJiBhY3Rpb25TZXR0aW5nc1sgYWN0aW9uLnR5cGUgXVsgYXR0ciBdICkge1xyXG5cdFx0XHRyZXR1cm4gYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF1bIGF0dHIgXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnTlVMTCc7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGFiZWxXaXRoQXR0cnMgPSBnYXRld2F5QXR0cnMoKS5tYXAoIGF0dHIgPT4gKCBgJHsgbGFiZWwoIGF0dHIgKSB9ICR7IHZhbHVlKCBhdHRyICkgfWAgKSApO1xyXG5cclxuXHRyZXR1cm4gbGFiZWxXaXRoQXR0cnMuam9pbiggJywgJyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYXRld2F5QWN0aW9uQXR0cmlidXRlczsiLCJleHBvcnQgY29uc3QgZ2F0ZXdheUF0dHIgPSAoIGF0dHIgPSBmYWxzZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xyXG5cdGNvbnN0IGRhdGEgPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuZ2F0ZXdheXM7XHJcblxyXG5cdGlmICggISBhdHRyICkge1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cdGlmICggISBkYXRhWyBhdHRyIF0gKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBzb3VyY2UgPSBkYXRhWyBhdHRyIF07XHJcblxyXG5cdHJldHVybiBuYW1lID0+IHNvdXJjZVsgbmFtZSBdID8gc291cmNlWyBuYW1lIF0gOiBpc0VtcHR5O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhdGV3YXlMYWJlbCA9ICggdHlwZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xyXG5cdGNvbnN0IGxhYmVsID0gZ2F0ZXdheUF0dHIoICdsYWJlbHMnICk7XHJcblxyXG5cdHJldHVybiBhdHRyID0+IGxhYmVsKCB0eXBlICkgPyBsYWJlbCggdHlwZSApWyBhdHRyIF0gOiBpc0VtcHR5O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyR2F0ZXdheSA9ICggaWQsIGNhbGxiYWNrLCBmb3JXaGF0ID0gJ2NyZWQnICkgPT4ge1xyXG5cdHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdCA9IHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdCB8fCB7fTtcclxuXHR3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3RbIGlkIF0gPSB3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3RbIGlkIF0gfHwge307XHJcblx0d2luZG93LkpldEZCR2F0ZXdheXNMaXN0WyBpZCBdWyBmb3JXaGF0IF0gPSBjYWxsYmFjaztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc3NldFJlbmRlckdhdGV3YXkgPSAoIGlkLCB3aGF0ID0gJ2NyZWQnICkgPT4ge1xyXG5cdHJldHVybiAoIHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdCAmJiB3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3RbIGlkIF0gJiYgd2luZG93LkpldEZCR2F0ZXdheXNMaXN0WyBpZCBdWyB3aGF0IF0gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJHYXRld2F5ID0gKCBpZCwgcHJvcHMsIHdoYXQgPSAnY3JlZCcgKSA9PiB7XHJcblx0aWYgKCAhIGlzc2V0UmVuZGVyR2F0ZXdheSggaWQsIHdoYXQgKSApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRjb25zdCBHYXRld2F5Q29tcG9uZW50ID0gd2luZG93LkpldEZCR2F0ZXdheXNMaXN0WyBpZCBdWyB3aGF0IF07XHJcblxyXG5cdHJldHVybiA8R2F0ZXdheUNvbXBvbmVudCB7IC4uLnByb3BzIH0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlciA9ICggaWQsIHByb3BzLCB3aGF0ID0gJ2NyZWQnLCBQbGFjZWhvbGRlciA9IG51bGwgKSA9PiB7XHJcblx0aWYgKCAhIGlzc2V0UmVuZGVyR2F0ZXdheSggaWQsIHdoYXQgKSApIHtcclxuXHRcdHJldHVybiBQbGFjZWhvbGRlcjtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZW5kZXJHYXRld2F5KCBpZCwgcHJvcHMsIHdoYXQgKTtcclxufTsiLCJjb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0LFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTZWxlY3QsXHJcblx0dXNlRGlzcGF0Y2gsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1ldGFTdGF0ZSA9ICgga2V5LCBpZkVtcHR5ID0gJ3t9JyApID0+IHtcclxuXHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcclxuXHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHR9ICk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGVkaXRQb3N0LFxyXG5cdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRjb25zdCBbIG1ldGFTdGF0ZVZhbHVlLCBzZXRNZXRhU3RhdGVWYWx1ZSBdID0gdXNlU3RhdGUoIEpTT04ucGFyc2UoIG1ldGFbIGtleSBdIHx8IGlmRW1wdHkgKSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdG1ldGE6IChcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0WyBrZXkgXTogSlNPTi5zdHJpbmdpZnkoIG1ldGFTdGF0ZVZhbHVlICksXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpLFxyXG5cdFx0fSApO1xyXG5cdH0sIFsgbWV0YVN0YXRlVmFsdWUgXSApO1xyXG5cclxuXHRyZXR1cm4gWyBtZXRhU3RhdGVWYWx1ZSwgc2V0TWV0YVN0YXRlVmFsdWUgXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBY3Rpb25zID0gKCB3aXRoRWRpdFBvc3RFZmZlY3QgPSBmYWxzZSApID0+IHtcclxuXHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcclxuXHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHR9ICk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGVkaXRQb3N0LFxyXG5cdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRjb25zdCBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhLl9qZl9hY3Rpb25zIHx8ICdbXScgKSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggd2l0aEVkaXRQb3N0RWZmZWN0ICkge1xyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6IChcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdFx0X2pmX2FjdGlvbnM6IEpTT04uc3RyaW5naWZ5KCBhY3Rpb25zICksXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KSxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0sIFsgYWN0aW9ucyBdICk7XHJcblxyXG5cdHJldHVybiBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGluaXRDbGFzc2VzID0gWyAnamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlVmFsaWRDbGFzc2VzID0gaW5pdGlhbFZhbGlkID0+IHtcclxuXHRjb25zdCB2YWxpZENsYXNzID0gJ2lzLXZhbGlkJztcclxuXHRjb25zdCBpbnZhbGlkQ2xhc3MgPSAnaXMtaW52YWxpZCc7XHJcblxyXG5cdGNvbnN0IGluaXRTdGF0ZUNsYXNzZXMgPSAoKSA9PiB7XHJcblx0XHRpZiAoIGluaXRpYWxWYWxpZCApIHtcclxuXHRcdFx0cmV0dXJuIFsgLi4uaW5pdENsYXNzZXMsIHZhbGlkQ2xhc3MgXTtcclxuXHRcdH0gZWxzZSBpZiAoICEgaW5pdGlhbFZhbGlkICkge1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5pbml0Q2xhc3NlcywgaW52YWxpZENsYXNzIF07XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgWyBjbGFzc2VzLCBzZXRDbGFzc2VzIF0gPSB1c2VTdGF0ZSggaW5pdFN0YXRlQ2xhc3NlcygpICk7XHJcblxyXG5cdGNvbnN0IHNldFZhbGlkQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCB2YWxpZENsYXNzIF0gKTtcclxuXHR9O1xyXG5cdGNvbnN0IHNldEludmFsaWRDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsIGludmFsaWRDbGFzcyBdICk7XHJcblx0fTtcclxuXHRjb25zdCBzZXRMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCAnbG9hZGluZycgXSApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiBbIGNsYXNzZXMuam9pbiggJyAnICksIHNldFZhbGlkQ2xhc3MsIHNldEludmFsaWRDbGFzcywgc2V0TG9hZGluZ0NsYXNzIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RhdGVMb2FkaW5nQ2xhc3NlcyA9ICgpID0+IHtcclxuXHRjb25zdCBbIGNsYXNzZXMsIHNldENsYXNzZXMgXSA9IHVzZVN0YXRlKCBbIC4uLmluaXRDbGFzc2VzIF0gKTtcclxuXHJcblx0Y29uc3Qgc2V0TG9hZGluZ0NsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgJ2xvYWRpbmcnIF0gKTtcclxuXHR9O1xyXG5cdGNvbnN0IGNsZWFyTG9hZGluZ0NsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggaW5pdENsYXNzZXMgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gWyBjbGFzc2VzLmpvaW4oICcgJyApLCBzZXRMb2FkaW5nQ2xhc3MsIGNsZWFyTG9hZGluZ0NsYXNzIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3VjY2Vzc05vdGljZSA9ICggdGV4dCwgb3B0aW9ucyA9IHt9ICkgPT4ge1xyXG5cdGNvbnN0IFsgaGFzQ29waWVkLCBzZXRIYXNDb3BpZWQgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cdGNvbnN0IG5vdGljZVN0b3JlID0gdXNlRGlzcGF0Y2goIHdwLm5vdGljZXMuc3RvcmUgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIGhhc0NvcGllZCApIHtcclxuXHRcdFx0bm90aWNlU3RvcmUuY3JlYXRlV2FybmluZ05vdGljZSggdGV4dCwgeyB0eXBlOiAnc25hY2tiYXInLCAuLi5vcHRpb25zIH0gKTtcclxuXHRcdH1cclxuXHR9LCBbIGhhc0NvcGllZCBdICk7XHJcblxyXG5cdHJldHVybiBzZXRIYXNDb3BpZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aE5vdGljZSA9ICggZGlzcGF0Y2ggKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGNyZWF0ZU5vdGljZTogKCB0ZXh0LCBvcHRpb25zID0ge30gKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKCB3cC5ub3RpY2VzLnN0b3JlICkuY3JlYXRlTm90aWNlKFxyXG5cdFx0XHRcdHRleHQsIHtcclxuXHRcdFx0XHRcdHR5cGU6ICdkZWZhdWx0JyxcclxuXHRcdFx0XHRcdHN0YXR1czogJ2luZm8nLFxyXG5cdFx0XHRcdFx0Li4ub3B0aW9ucyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHQpO1xyXG5cdFx0fSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlcXVlc3RGaWVsZHMgPSBhY3Rpb25zID0+IHtcclxuXHRjb25zdCByZXF1ZXN0RmllbGRzID0gW107XHJcblxyXG5cdGZvciAoIGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zICkge1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRbIGFjdGlvbi50eXBlIF06IGN1cnJlbnQgPSB7fSxcclxuXHRcdH0gPSBhY3Rpb24uc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCAhIGN1cnJlbnQucmVxdWVzdEZpZWxkcyApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgcmVxdWVzdEZpZWxkIG9mIGN1cnJlbnQucmVxdWVzdEZpZWxkcyApIHtcclxuXHRcdFx0Y29uc3QgaW5kZXggPSByZXF1ZXN0RmllbGRzLmZpbmRJbmRleCggZmllbGQgPT4gZmllbGQudmFsdWUgPT09IHJlcXVlc3RGaWVsZC5uYW1lICk7XHJcblxyXG5cdFx0XHRpZiAoIC0gMSAhPT0gaW5kZXggKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlcXVlc3RGaWVsZHMucHVzaCgge1xyXG5cdFx0XHRcdGZyb206IGFjdGlvbi50eXBlLFxyXG5cdFx0XHRcdGlkOiBhY3Rpb24uaWQsXHJcblx0XHRcdFx0bGFiZWw6IHJlcXVlc3RGaWVsZC5uYW1lLFxyXG5cdFx0XHRcdHZhbHVlOiByZXF1ZXN0RmllbGQubmFtZSxcclxuXHRcdFx0XHRuYW1lOiByZXF1ZXN0RmllbGQubmFtZSxcclxuXHRcdFx0XHRoZWxwOiByZXF1ZXN0RmllbGQuaGVscCxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlcXVlc3RGaWVsZHM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUmVxdWVzdEZpZWxkcyA9ICggb3B0aW9ucyA9IHt9ICkgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdH0gKTtcclxuXHRjb25zdCBhY3Rpb25zID0gSlNPTi5wYXJzZSggbWV0YS5famZfYWN0aW9ucyB8fCAnW10nICk7XHJcblxyXG5cdHJldHVybiBnZXRSZXF1ZXN0RmllbGRzKCBhY3Rpb25zICk7XHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RQb3N0TWV0YSA9IHNlbGVjdCA9PiB7XHJcblx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG59O1xyXG5cclxuY29uc3Qgc2VsZWN0UGFyc2VkUG9zdE1ldGEgPSAoIHNlbGVjdCwgbmFtZSApID0+IHtcclxuXHRjb25zdCBhbGxNZXRhID0gc2VsZWN0UG9zdE1ldGEoIHNlbGVjdCApO1xyXG5cclxuXHRyZXR1cm4gSlNPTi5wYXJzZSggYWxsTWV0YVsgbmFtZSBdIHx8ICd7fScgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoQ3VycmVudEFjdGlvbiA9IHNlbGVjdCA9PiB7XHJcblx0Y29uc3QgY3VycmVudEFjdGlvbiA9IHNlbGVjdCggJ2pldC1mb3Jtcy9hY3Rpb25zJyApLmdldEN1cnJlbnRBY3Rpb24oKTtcclxuXHJcblx0cmV0dXJuIHsgY3VycmVudEFjdGlvbiB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhSZXF1ZXN0RmllbGRzID0gc2VsZWN0ID0+IHtcclxuXHRjb25zdCBtZXRhID0gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblx0Y29uc3QgYWN0aW9ucyA9IEpTT04ucGFyc2UoIG1ldGEuX2pmX2FjdGlvbnMgfHwgJ1tdJyApO1xyXG5cdGNvbnN0IGN1cnJlbnRBY3Rpb24gPSBzZWxlY3QoICdqZXQtZm9ybXMvYWN0aW9ucycgKS5nZXRDdXJyZW50QWN0aW9uKCk7XHJcblxyXG5cdGFjdGlvbnMuc3BsaWNlKCBjdXJyZW50QWN0aW9uLmluZGV4ICk7XHJcblxyXG5cdHJldHVybiB7IHJlcXVlc3RGaWVsZHM6IGdldFJlcXVlc3RGaWVsZHMoIGFjdGlvbnMgKSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nID0gc2VsZWN0ID0+IHtcclxuXHRjb25zdCBsb2FkaW5nU3RhdGUgPSBzZWxlY3QoICdqZXQtZm9ybXMvYWN0aW9ucycgKS5nZXRDdXJyZW50TG9hZGluZygpO1xyXG5cclxuXHRyZXR1cm4geyBsb2FkaW5nU3RhdGUgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nID0gZGlzcGF0Y2ggPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRzZXRMb2FkaW5nKCBhY3Rpb25JZCApIHtcclxuXHRcdFx0ZGlzcGF0Y2goICdqZXQtZm9ybXMvYWN0aW9ucycgKS5zZXRMb2FkaW5nKCB7IGFjdGlvbklkIH0gKTtcclxuXHRcdH0sXHJcblx0XHRzZXRSZXN1bHRTdWNjZXNzKCBhY3Rpb25JZCwgcmVzcG9uc2UgKSB7XHJcblx0XHRcdGRpc3BhdGNoKCAnamV0LWZvcm1zL2FjdGlvbnMnICkuc2V0TG9hZGluZ1Jlc3VsdCgge1xyXG5cdFx0XHRcdGFjdGlvbklkLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0cmVzcG9uc2UsXHJcblx0XHRcdH0gKTtcclxuXHRcdH0sXHJcblx0XHRzZXRSZXN1bHRGYWlsKCBhY3Rpb25JZCApIHtcclxuXHRcdFx0ZGlzcGF0Y2goICdqZXQtZm9ybXMvYWN0aW9ucycgKS5zZXRMb2FkaW5nUmVzdWx0KCB7XHJcblx0XHRcdFx0YWN0aW9uSWQsXHJcblx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdFx0cmVzcG9uc2U6IHt9LFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aERpc3BhdGNoTWV0YSA9ICggbWV0YVNsdWcsIGNhbGxiYWNrTmFtZSApID0+ICggZGlzcGF0Y2gsIG93blByb3BzLCB7IHNlbGVjdCB9ICkgPT4ge1xyXG5cdGNvbnN0IGFsbE1ldGEgPSBzZWxlY3RQb3N0TWV0YSggc2VsZWN0ICk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGVkaXRQb3N0LFxyXG5cdH0gPSBkaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRjb25zdCBjaGFuZ2UgPSBuZXdTdGF0ZSA9PiBlZGl0UG9zdCgge1xyXG5cdFx0bWV0YTogKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Li4uYWxsTWV0YSxcclxuXHRcdFx0XHRbIG1ldGFTbHVnIF06IEpTT04uc3RyaW5naWZ5KCBuZXdTdGF0ZSApLFxyXG5cdFx0XHR9XHJcblx0XHQpLFxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdFsgY2FsbGJhY2tOYW1lIF06IGNoYW5nZSxcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhTZWxlY3RNZXRhID0gKCBtZXRhU2x1ZywgaWZFbXB0eSA9IHt9ICkgPT4gc2VsZWN0ID0+IHtcclxuXHRjb25zdCBjdXJyZW50ID0gc2VsZWN0UGFyc2VkUG9zdE1ldGEoIHNlbGVjdCwgbWV0YVNsdWcgKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdFsgbWV0YVNsdWcgXTogKFxyXG5cdFx0XHRjdXJyZW50IHx8IGlmRW1wdHlcclxuXHRcdCksXHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoU2VsZWN0R2F0ZXdheXMgPSBzZWxlY3QgPT4ge1xyXG5cdGNvbnN0IHN0b3JlID0gc2VsZWN0KCAnamV0LWZvcm1zL2dhdGV3YXlzJyApO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2F0ZXdheUdlbmVyYWw6IHN0b3JlLmdldEdhdGV3YXkoKSxcclxuXHRcdGdhdGV3YXlTcGVjaWZpYzogc3RvcmUuZ2V0R2F0ZXdheVNwZWNpZmljKCksXHJcblx0XHRnYXRld2F5UmVxdWVzdElkOiBzdG9yZS5nZXRDdXJyZW50UmVxdWVzdElkKCksXHJcblx0XHRnYXRld2F5UmVxdWVzdDogc3RvcmUuZ2V0Q3VycmVudFJlcXVlc3QoKSxcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgY29uc3Qgd2l0aFNlbGVjdEdhdGV3YXlzTG9hZGluZyA9IHNlbGVjdCA9PiB7XHJcblx0Y29uc3QgeyBnYXRld2F5UmVxdWVzdElkLCAuLi5vdGhlciB9ID0gd2l0aFNlbGVjdEdhdGV3YXlzKCBzZWxlY3QgKTtcclxuXHJcblx0Y29uc3QgbG9hZGluZ0dhdGV3YXkgPSBzZWxlY3QoICdqZXQtZm9ybXMvYWN0aW9ucycgKS5nZXRMb2FkaW5nKCBnYXRld2F5UmVxdWVzdElkICk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRsb2FkaW5nR2F0ZXdheSxcclxuXHRcdGdhdGV3YXlSZXF1ZXN0SWQsXHJcblx0XHQuLi5vdGhlcixcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhEaXNwYXRjaEdhdGV3YXlzID0gKCBkaXNwYXRjaCwgb3duUHJvcHMsIHsgc2VsZWN0IH0gKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHNldEdhdGV3YXlSZXF1ZXN0KCBpdGVtICkge1xyXG5cdFx0XHRjb25zdCB7IGdhdGV3YXlHZW5lcmFsIH0gPSB3aXRoU2VsZWN0R2F0ZXdheXMoIHNlbGVjdCApO1xyXG5cdFx0XHRpdGVtLmlkID0gZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSArICcvJyArIGl0ZW0/LmlkO1xyXG5cclxuXHRcdFx0ZGlzcGF0Y2goICdqZXQtZm9ybXMvZ2F0ZXdheXMnICkuc2V0UmVxdWVzdCggaXRlbSApO1xyXG5cdFx0fSxcclxuXHRcdHNldEdhdGV3YXkoIGl0ZW0gKSB7XHJcblx0XHRcdGRpc3BhdGNoKCAnamV0LWZvcm1zL2dhdGV3YXlzJyApLnNldEdhdGV3YXkoIGl0ZW0gKTtcclxuXHRcdH0sXHJcblx0XHRzZXRHYXRld2F5SW5uZXIoIGl0ZW0gKSB7XHJcblx0XHRcdGRpc3BhdGNoKCAnamV0LWZvcm1zL2dhdGV3YXlzJyApLnNldEdhdGV3YXlJbm5lciggaXRlbSApO1xyXG5cdFx0fSxcclxuXHRcdHNldEdhdGV3YXlTcGVjaWZpYyggaXRlbSApIHtcclxuXHRcdFx0ZGlzcGF0Y2goICdqZXQtZm9ybXMvZ2F0ZXdheXMnICkuc2V0R2F0ZXdheVNwZWNpZmljKCBpdGVtICk7XHJcblx0XHR9LFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRGb3JtRmllbGRzID0gKCBibG9ja1BhcnNlckZ1bmMsIGJsb2NrcyApID0+IHtcclxuXHRibG9ja3MubWFwKCBibG9jayA9PiB7XHJcblx0XHRibG9ja1BhcnNlckZ1bmMoIGJsb2NrICk7XHJcblxyXG5cdFx0aWYgKCBibG9jay5pbm5lckJsb2Nrcy5sZW5ndGggKSB7XHJcblx0XHRcdGdldEZvcm1GaWVsZHMoIGJsb2NrUGFyc2VyRnVuYywgYmxvY2suaW5uZXJCbG9ja3MgKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aFNlbGVjdEZvcm1GaWVsZHMgPSAoXHJcblx0ZXhjbHVkZSA9IFtdLFxyXG5cdHBsYWNlaG9sZGVyID0gZmFsc2UsXHJcblx0c3VwcHJlc3NGaWx0ZXIgPSBmYWxzZSxcclxuKSA9PiBzZWxlY3QgPT4ge1xyXG5cclxuXHRsZXQgZm9ybUZpZWxkcyA9IFtdO1xyXG5cdGxldCBza2lwRmllbGRzID0gWyAnc3VibWl0JywgJ2Zvcm0tYnJlYWsnLCAnaGVhZGluZycsICdncm91cC1icmVhaycsICdjb25kaXRpb25hbCcsIC4uLmV4Y2x1ZGUgXTtcclxuXHJcblx0Z2V0Rm9ybUZpZWxkcyggYmxvY2sgPT4ge1xyXG5cdFx0aWYgKCBibG9jay5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxyXG5cdFx0ICAgICAmJiBibG9jay5hdHRyaWJ1dGVzLm5hbWVcclxuXHRcdCAgICAgJiYgISBza2lwRmllbGRzLmZpbmQoIGZpZWxkID0+IGJsb2NrLm5hbWUuaW5jbHVkZXMoIGZpZWxkICkgKVxyXG5cdFx0KSB7XHJcblxyXG5cdFx0XHQvKmNvbnN0IGJsb2NrVHlwZSA9IHNlbGVjdCggYmxvY2tzU3RvcmUgKS5nZXRCbG9ja1R5cGUoIGJsb2NrLm5hbWUgKTsqL1xyXG5cclxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKCB7XHJcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxyXG5cdFx0XHRcdG5hbWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdFx0dmFsdWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHQvL2ljb246IGJsb2NrVHlwZS5pY29uLnNyYyxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0sIHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpICk7XHJcblxyXG5cdGZvcm1GaWVsZHMgPSBwbGFjZWhvbGRlclxyXG5cdFx0PyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXHJcblx0XHQ6IGZvcm1GaWVsZHM7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRmb3JtRmllbGRzOiBzdXBwcmVzc0ZpbHRlciA/IGZvcm1GaWVsZHMgOiBhcHBseUZpbHRlcnMoICdqZXQuZmIuZ2V0Rm9ybUZpZWxkc0Jsb2NrcycsIGZvcm1GaWVsZHMgKSxcclxuXHR9O1xyXG59O1xyXG4iLCJcclxuZnVuY3Rpb24gZ2xvYmFsVGFiKCB7IHNsdWcsIGVsZW1lbnQgPSAnJywgZW1wdHkgPSAnJyB9ICkge1xyXG5cdGNvbnN0IGdsb2JhbCA9IEpldEZvcm1FZGl0b3JEYXRhLmdsb2JhbF9zZXR0aW5ncztcclxuXHJcblx0aWYoICEgZ2xvYmFsICkge1xyXG5cdFx0cmV0dXJuIGVtcHR5O1xyXG5cdH1cclxuXHJcblx0aWYgKCBlbGVtZW50ICkge1xyXG5cdFx0cmV0dXJuICggZ2xvYmFsWyBzbHVnIF0gJiYgZ2xvYmFsWyBzbHVnIF1bIGVsZW1lbnQgXSApID8gZ2xvYmFsWyBzbHVnIF1bIGVsZW1lbnQgXSA6IGVtcHR5O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdsb2JhbFsgc2x1ZyBdIHx8IGVtcHR5O1xyXG59XHJcblxyXG5leHBvcnQgeyBnbG9iYWxUYWIgfTsiLCJjb25zdCBzZW12ZXJHdCA9IHJlcXVpcmUoICdzZW12ZXIvZnVuY3Rpb25zL2d0JyApXHJcbmNvbnN0IHNlbXZlckx0ID0gcmVxdWlyZSggJ3NlbXZlci9mdW5jdGlvbnMvbHQnIClcclxuY29uc3Qgc2VtdmVyR3RlID0gcmVxdWlyZSggJ3NlbXZlci9mdW5jdGlvbnMvZ3RlJyApXHJcbmNvbnN0IHNlbXZlckx0ZSA9IHJlcXVpcmUoICdzZW12ZXIvZnVuY3Rpb25zL2x0ZScgKVxyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuY2xhc3MgVG9vbHMge1xyXG5cclxuXHRzdGF0aWMgZ2V0TGFiZWwoIG1ldGEsIGF0dHJzICkge1xyXG5cdFx0Y29uc3QgbGFiZWwgPSB7fTtcclxuXHRcdGxhYmVsLm5hbWUgPSBhdHRycy5sYWJlbDtcclxuXHRcdGlmICggYXR0cnMucmVxdWlyZWQgKSB7XHJcblx0XHRcdGxhYmVsLm1hcmsgPSBKU09OLnBhcnNlKCBtZXRhLl9qZl9hcmdzICkucmVxdWlyZWRfbWFyayB8fCAnJztcclxuXHRcdH1cclxuXHRcdHJldHVybiBsYWJlbDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB3aXRoUGxhY2Vob2xkZXIoIHNvdXJjZSwgbGFiZWwgPSAnLS0nLCB2YWx1ZSA9ICcnICkge1xyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0eyBsYWJlbCwgdmFsdWUgfSxcclxuXHRcdFx0Li4uc291cmNlLFxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpc0VtcHR5T2JqZWN0KCBvYmplY3QgKSB7XHJcblx0XHRyZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBvYmplY3QgJiYgT2JqZWN0LmtleXMoIG9iamVjdCApLmxlbmd0aCA9PT0gMDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRGdW5jQ29uZGl0aW9uKCBuYW1lRnVuY3Rpb24gKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCBgcmV0dXJuIHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnNbICckeyBuYW1lRnVuY3Rpb24gfScgXWAgKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRDb25kaXRpb25Gb3JDb25kVHlwZSggbmFtZSwgY2FsbGFibGUgKSB7XHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zID0gd2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9ucyB8fCB7fTtcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnNbIG5hbWUgXSA9IGNhbGxhYmxlO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHBhcnNlQ29uZGl0aW9uc0Z1bmMoIHNvdXJjZSApIHtcclxuXHRcdGNvbnN0IHR5cGVzID0gW107XHJcblxyXG5cdFx0c291cmNlLmZvckVhY2goIHR5cGUgPT4ge1xyXG5cdFx0XHRpZiAoIHR5cGUuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdGlmICggVG9vbHMuZ2V0RnVuY0NvbmRpdGlvbiggdHlwZS5jb25kaXRpb24gKSgpKCB0eXBlLnZhbHVlICkgKSB7XHJcblx0XHRcdFx0XHR0eXBlcy5wdXNoKCB0eXBlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHR5cGVzLnB1c2goIHR5cGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiB0eXBlcztcclxuXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnQgPSBuYW1lID0+IHtcclxuXHRjb25zdCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgPSBuZXcgRXZlbnQoIG5hbWUgKTtcclxuXHRyZXR1cm4gKCkgPT4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggaW5pdGlhbGl6ZUNhbGxiYWNrc0V2ZW50ICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVuID0gKCBuYW1lLCBmdW5jICkgPT4ge1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIGZ1bmMgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFNlbVZlckZ1bmMoIG9wZXJhdG9yICkge1xyXG5cdHN3aXRjaCAoIG9wZXJhdG9yICkge1xyXG5cdFx0Y2FzZSAnPic6XHJcblx0XHRcdHJldHVybiBzZW12ZXJHdDtcclxuXHRcdGNhc2UgJz49JzpcclxuXHRcdFx0cmV0dXJuIHNlbXZlckd0ZTtcclxuXHRcdGNhc2UgJzwnOlxyXG5cdFx0XHRyZXR1cm4gc2VtdmVyTHQ7XHJcblx0XHRjYXNlICc8PSc6XHJcblx0XHRcdHJldHVybiBzZW12ZXJMdGU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKCkgPT4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJzaW9uQ29tcGFyZSggdmVyc2lvbjEsIHZlcnNpb24yLCBvcGVyYXRvciApIHtcclxuXHR0cnkge1xyXG5cdFx0cmV0dXJuIGdldFNlbVZlckZ1bmMoIG9wZXJhdG9yICkoIHZlcnNpb24xLCB2ZXJzaW9uMiApO1xyXG5cdH0gY2F0Y2ggKCB0ZSApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGNvbnZlcnRTeW1ib2xzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnRvb2xzLmNvbnZlcnRTeW1ib2xzJywge1xyXG5cdGNoZWNrQ3lyUmVnZXg6IC9b0LAt0Y/RkdGX0ZTSkdGWXS9pLFxyXG5cdGN5clJlZ2V4OiAvW9CwLdGP0ZHRl9GU0pHRll0vZ2ksXHJcblx0Y2hhcnNNYXA6IHtcclxuXHRcdCfQsCc6ICdhJywgJ9CxJzogJ2InLCAn0LInOiAndicsICfQsyc6ICdnJywgJ9C0JzogJ2QnLFxyXG5cdFx0J9C1JzogJ2UnLCAn0ZEnOiAnaW8nLCAn0LYnOiAnemgnLCAn0LcnOiAneicsICfQuCc6ICdpJyxcclxuXHRcdCfQuSc6ICdpJywgJ9C6JzogJ2snLCAn0LsnOiAnbCcsICfQvCc6ICdtJywgJ9C9JzogJ24nLFxyXG5cdFx0J9C+JzogJ28nLCAn0L8nOiAncCcsICfRgCc6ICdyJywgJ9GBJzogJ3MnLCAn0YInOiAndCcsXHJcblx0XHQn0YMnOiAndScsICfRhCc6ICdmJywgJ9GFJzogJ2toJywgJ9GGJzogJ3RzJywgJ9GHJzogJ2NoJyxcclxuXHRcdCfRiCc6ICdzaCcsICfRiSc6ICdzaGNoJywgJ9GLJzogJ3knLCAn0Y0nOiAnZScsICfRjic6ICdpdScsXHJcblx0XHQn0Y8nOiAnaWEnLCAn0ZcnOiAnaScsICfRlCc6ICdpZScsICfSkSc6ICdnJywgJ9GWJzogJ2knLFxyXG5cdH0sXHJcbn0gKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXliZUN5clRvTGF0aW4oIHN0ciApIHtcclxuXHRpZiAoIGNvbnZlcnRTeW1ib2xzLmNoZWNrQ3lyUmVnZXgudGVzdCggc3RyICkgKSB7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSggY29udmVydFN5bWJvbHMuY3lyUmVnZXgsIGZ1bmN0aW9uICggbWF0Y2ggKSB7XHJcblxyXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gY29udmVydFN5bWJvbHMuY2hhcnNNYXBbIG1hdGNoIF0gKSB7XHJcblx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gY29udmVydFN5bWJvbHMuY2hhcnNNYXBbIG1hdGNoIF07XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udmVydGVkTmFtZSggdmFsdWVUb0NoYW5nZSApIHtcclxuXHR2YXIgcmVnZXggPSAvXFxzKy9nLFxyXG5cdFx0c2x1ZyA9IHZhbHVlVG9DaGFuZ2UudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCByZWdleCwgJ18nICk7XHJcblxyXG5cdC8vIFJlcGxhY2UgYWNjZW50c1xyXG5cdHNsdWcgPSBzbHVnLm5vcm1hbGl6ZSggJ05GRCcgKS5yZXBsYWNlKCAvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycgKTtcclxuXHJcblx0Ly8gUmVwbGFjZSBjeXJpbGxpY1xyXG5cdHNsdWcgPSBtYXliZUN5clRvTGF0aW4oIHNsdWcgKTtcclxuXHJcblx0aWYgKCAyMCA8IHNsdWcubGVuZ3RoICkge1xyXG5cdFx0Ly8gMzQgLSBMaW9uZWwgTWVzc2kncyBhZ2Ugd2hlbiBoZSBsZWZ0IEJhcmNlbG9uYVxyXG5cdFx0c2x1ZyA9IHNsdWcuc3Vic3RyKCAwLCAzNCApO1xyXG5cclxuXHRcdGlmICggJy0nID09PSBzbHVnLnNsaWNlKCAtIDEgKSApIHtcclxuXHRcdFx0c2x1ZyA9IHNsdWcuc2xpY2UoIDAsIC0gMSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNsdWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFzc25hbWVzKCAuLi5hZGRpdGlvbmFsICkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuXHRjb25zdCBwYXJzZVZhbHVlcyA9IHNvdXJjZSA9PiB7XHJcblx0XHRzb3VyY2UuZm9yRWFjaCggaXRlbUNsYXNzID0+IHtcclxuXHRcdFx0aWYgKCAhIGl0ZW1DbGFzcyApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpdGVtQ2xhc3MgKSApIHtcclxuXHRcdFx0XHRwYXJzZVZhbHVlcyggaXRlbUNsYXNzICk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGl0ZW1DbGFzcyApIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaCggaXRlbUNsYXNzLnRyaW0oKSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBpdGVtQ2xhc3MgKSB7XHJcblx0XHRcdFx0Zm9yICggY29uc3QgaXRlbUNsYXNzS2V5IGluIGl0ZW1DbGFzcyApIHtcclxuXHRcdFx0XHRcdGlmICggaXRlbUNsYXNzWyBpdGVtQ2xhc3NLZXkgXSApIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goIChcclxuXHRcdFx0XHRcdFx0XHRpdGVtQ2xhc3NLZXkgKyAnJ1xyXG5cdFx0XHRcdFx0XHQpLnRyaW0oKSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdHBhcnNlVmFsdWVzKCBhZGRpdGlvbmFsICk7XHJcblxyXG5cdHJldHVybiByZXN1bHQuam9pbiggJyAnICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0T2JqZWN0VG9PcHRpb25zTGlzdCggZW50cmllcyA9IFtdLCB7XHJcblx0dXNlUGxhY2Vob2xkZXIgPSB0cnVlLFxyXG5cdGxhYmVsID0gJy0tJyxcclxuXHR2YWx1ZSA9ICcnLFxyXG59ID0ge30gKSB7XHJcblx0Y29uc3QgcGxhY2Vob2xkZXIgPSB7IGxhYmVsLCB2YWx1ZSB9O1xyXG5cclxuXHRpZiAoICEgZW50cmllcyApIHtcclxuXHRcdHJldHVybiB1c2VQbGFjZWhvbGRlciA/IFsgcGxhY2Vob2xkZXIgXSA6IFtdO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgb3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKCBlbnRyaWVzICkubWFwKCAoIFsgdmFsdWUsIGxhYmVsIF0gKSA9PiB7XHJcblx0XHRyZXR1cm4geyB2YWx1ZSwgbGFiZWwgfTtcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiB1c2VQbGFjZWhvbGRlciA/IFsgcGxhY2Vob2xkZXIsIC4uLm9wdGlvbnMgXSA6IG9wdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xzOyIsImltcG9ydCB7IGluaXRDbGFzc2VzIH0gZnJvbSAnLi4vaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXInO1xyXG5cclxuY29uc3QgeyBjcmVhdGVSZWR1eFN0b3JlLCByZWdpc3RlciB9ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IERFRkFVTFRfTE9BRElOR19TVEFURSA9IHtcclxuXHRpZDogLSAxLFxyXG5cdHN0YXRlOiAnJyxcclxuXHRzdWNjZXNzOiBmYWxzZSxcclxuXHRyZXNwb25zZToge30sXHJcblx0bG9hZGluZzogZmFsc2UsXHJcblx0YnV0dG9uQ2xhc3NOYW1lOiBbIC4uLmluaXRDbGFzc2VzIF0sXHJcbn07XHJcblxyXG5jb25zdCBnZXRMb2FkaW5nSXRlbSA9ICggYWRkaXRpb25hbCA9IHt9ICkgPT4ge1xyXG5cdGNvbnN0IGl0ZW0gPSB7IC4uLkRFRkFVTFRfTE9BRElOR19TVEFURSB9O1xyXG5cdGlmICggYWRkaXRpb25hbC5zdGF0ZSApIHtcclxuXHRcdGl0ZW0uYnV0dG9uQ2xhc3NOYW1lID0gWyAuLi5pbml0Q2xhc3NlcywgYWRkaXRpb25hbC5zdGF0ZSBdO1xyXG5cdH1cclxuXHRyZXR1cm4geyAuLi5pdGVtLCAuLi5hZGRpdGlvbmFsIH07XHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX1NUQVRFID0ge1xyXG5cdGN1cnJlbnRBY3Rpb246IHt9LFxyXG5cdGxvYWRpbmdTdGF0ZTogW1xyXG5cdFx0Z2V0TG9hZGluZ0l0ZW0oKSxcclxuXHRdLFxyXG59O1xyXG5cclxuY29uc3QgYWN0aW9ucyA9IHtcclxuXHRzZXRDdXJyZW50QWN0aW9uKCBpdGVtICkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZTogJ1NFVF9DVVJSRU5UX0FDVElPTicsXHJcblx0XHRcdGl0ZW0sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0c2V0TG9hZGluZyggaXRlbSApIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6ICdTRVRfTE9BRElORycsXHJcblx0XHRcdHN0YXRlOiB7XHJcblx0XHRcdFx0aWQ6IGl0ZW0uYWN0aW9uSWQsXHJcblx0XHRcdFx0c3RhdGU6ICdsb2FkaW5nJyxcclxuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHNldExvYWRpbmdSZXN1bHQoIGl0ZW0gKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0eXBlOiAnU0VUX0xPQURJTkcnLFxyXG5cdFx0XHRzdGF0ZToge1xyXG5cdFx0XHRcdGlkOiBpdGVtLmFjdGlvbklkLFxyXG5cdFx0XHRcdHN0YXRlOiBpdGVtLnN1Y2Nlc3MgPyAnaXMtdmFsaWQnIDogJ2lzLWludmFsaWQnLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGl0ZW0uc3VjY2VzcyxcclxuXHRcdFx0XHRyZXNwb25zZTogaXRlbS5yZXNwb25zZSxcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSxcclxufTtcclxuXHJcbmNvbnN0IHNlbGVjdG9ycyA9IHtcclxuXHRnZXRDdXJyZW50QWN0aW9uKCBzdGF0ZSApIHtcclxuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50QWN0aW9uO1xyXG5cdH0sXHJcblx0Z2V0TG9hZGluZ0luZGV4KCBzdGF0ZSwgYWN0aW9uSWQgKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUubG9hZGluZ1N0YXRlLmZpbmRJbmRleCggYWN0aW9uID0+IGFjdGlvbi5pZCA9PT0gYWN0aW9uSWQgKTtcclxuXHR9LFxyXG5cdGdldExvYWRpbmcoIHN0YXRlLCBhY3Rpb25JZCApIHtcclxuXHRcdGNvbnN0IGFjdGlvbkluZGV4ID0gc2VsZWN0b3JzLmdldExvYWRpbmdJbmRleCggc3RhdGUsIGFjdGlvbklkICk7XHJcblxyXG5cdFx0cmV0dXJuIC0gMSAhPT0gYWN0aW9uSW5kZXggPyBzdGF0ZS5sb2FkaW5nU3RhdGVbIGFjdGlvbkluZGV4IF0gOiBERUZBVUxUX0xPQURJTkdfU1RBVEU7XHJcblx0fSxcclxuXHRnZXRDdXJyZW50TG9hZGluZyggc3RhdGUgKSB7XHJcblx0XHRjb25zdCBhY3Rpb25JZCA9IHN0YXRlLmN1cnJlbnRBY3Rpb24/LmlkO1xyXG5cclxuXHRcdHJldHVybiBzZWxlY3RvcnMuZ2V0TG9hZGluZyggc3RhdGUsIGFjdGlvbklkICk7XHJcblx0fSxcclxuXHRkYW5nZXJHZXRBbGxMb2FkaW5nKCBzdGF0ZSApIHtcclxuXHRcdHJldHVybiBzdGF0ZS5sb2FkaW5nU3RhdGU7XHJcblx0fSxcclxufTtcclxuXHJcbnJlZ2lzdGVyKCBjcmVhdGVSZWR1eFN0b3JlKCAnamV0LWZvcm1zL2FjdGlvbnMnLCB7XHJcblx0cmVkdWNlciggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XHJcblx0XHRzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuXHRcdFx0Y2FzZSAnU0VUX0NVUlJFTlRfQUNUSU9OJzpcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRjdXJyZW50QWN0aW9uOiBhY3Rpb24uaXRlbSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRjYXNlICdTRVRfTE9BRElORyc6XHJcblx0XHRcdFx0Y29uc3QgYWN0aW9uSW5kZXggPSBzZWxlY3RvcnMuZ2V0TG9hZGluZ0luZGV4KCBzdGF0ZSwgYWN0aW9uLnN0YXRlLmlkICk7XHJcblx0XHRcdFx0Y29uc3QgbG9hZGluZyA9IFsgLi4uc3RhdGUubG9hZGluZ1N0YXRlIF07XHJcblxyXG5cdFx0XHRcdGlmICggLSAxICE9PSBhY3Rpb25JbmRleCApIHtcclxuXHRcdFx0XHRcdGxvYWRpbmdbIGFjdGlvbkluZGV4IF0gPSBnZXRMb2FkaW5nSXRlbSggYWN0aW9uLnN0YXRlICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxvYWRpbmcucHVzaCggZ2V0TG9hZGluZ0l0ZW0oIGFjdGlvbi5zdGF0ZSApICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRsb2FkaW5nU3RhdGU6IGxvYWRpbmcsXHJcblx0XHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBzdGF0ZTtcclxuXHR9LFxyXG5cdGFjdGlvbnMsXHJcblx0c2VsZWN0b3JzLFxyXG59ICkgKTsiLCJjb25zdCB7IGNyZWF0ZVJlZHV4U3RvcmUsIHJlZ2lzdGVyIH0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcclxuXHRjdXJyZW50UmVxdWVzdDoge1xyXG5cdFx0aWQ6IC0gMSxcclxuXHR9LFxyXG5cdGN1cnJlbnRHYXRld2F5OiB7fSxcclxufTtcclxuXHJcbmNvbnN0IGFjdGlvbnMgPSB7XHJcblx0c2V0UmVxdWVzdCggaXRlbSApIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6ICdTRVRfQ1VSUkVOVF9SRVFVRVNUJyxcclxuXHRcdFx0aXRlbSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRzZXRHYXRld2F5KCBpdGVtICkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZTogJ1NFVF9DVVJSRU5UX0dBVEVXQVknLFxyXG5cdFx0XHRpdGVtLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHNldEdhdGV3YXlJbm5lciggaXRlbSApIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6ICdTRVRfQ1VSUkVOVF9HQVRFV0FZX0lOTkVSJyxcclxuXHRcdFx0aXRlbSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRzZXRHYXRld2F5U3BlY2lmaWMoIGl0ZW0gKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0eXBlOiAnU0VUX0NVUlJFTlRfR0FURVdBWV9TUEVDSUZJQycsXHJcblx0XHRcdGl0ZW0sXHJcblx0XHR9O1xyXG5cdH0sXHJcbn07XHJcblxyXG5jb25zdCBzZWxlY3RvcnMgPSB7XHJcblx0Z2V0Q3VycmVudFJlcXVlc3RJZCggc3RhdGUgKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudFJlcXVlc3QuaWQ7XHJcblx0fSxcclxuXHRnZXRDdXJyZW50UmVxdWVzdCggc3RhdGUgKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudFJlcXVlc3Q7XHJcblx0fSxcclxuXHRnZXRHYXRld2F5KCBzdGF0ZSApIHtcclxuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50R2F0ZXdheTtcclxuXHR9LFxyXG5cdGdldEdhdGV3YXlTcGVjaWZpYyggc3RhdGUgKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudEdhdGV3YXlbIHN0YXRlLmN1cnJlbnRHYXRld2F5Py5nYXRld2F5IF0gfHwge307XHJcblx0fSxcclxufTtcclxuXHJcbnJlZ2lzdGVyKCBjcmVhdGVSZWR1eFN0b3JlKCAnamV0LWZvcm1zL2dhdGV3YXlzJywge1xyXG5cdHJlZHVjZXIoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xyXG5cdFx0c3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcblx0XHRcdGNhc2UgJ1NFVF9DVVJSRU5UX1JFUVVFU1QnOlxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdGN1cnJlbnRSZXF1ZXN0OiBhY3Rpb24uaXRlbSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRjYXNlICdTRVRfQ1VSUkVOVF9HQVRFV0FZJzpcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRjdXJyZW50R2F0ZXdheToge1xyXG5cdFx0XHRcdFx0XHQuLi5zdGF0ZS5jdXJyZW50R2F0ZXdheSxcclxuXHRcdFx0XHRcdFx0Li4uYWN0aW9uLml0ZW0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdGNhc2UgJ1NFVF9DVVJSRU5UX0dBVEVXQVlfU1BFQ0lGSUMnOlxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdGN1cnJlbnRHYXRld2F5OiB7XHJcblx0XHRcdFx0XHRcdC4uLnN0YXRlLmN1cnJlbnRHYXRld2F5LFxyXG5cdFx0XHRcdFx0XHRbIHN0YXRlLmN1cnJlbnRHYXRld2F5LmdhdGV3YXkgXToge1xyXG5cdFx0XHRcdFx0XHRcdC4uLnNlbGVjdG9ycy5nZXRHYXRld2F5U3BlY2lmaWMoIHN0YXRlICksXHJcblx0XHRcdFx0XHRcdFx0Li4uYWN0aW9uLml0ZW0sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdGNhc2UgJ1NFVF9DVVJSRU5UX0dBVEVXQVlfSU5ORVInOlxyXG5cdFx0XHRcdGNvbnN0IHsga2V5LCB2YWx1ZSB9ID0gYWN0aW9uLml0ZW07XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0Y3VycmVudEdhdGV3YXk6IHtcclxuXHRcdFx0XHRcdFx0Li4uc3RhdGUuY3VycmVudEdhdGV3YXksXHJcblx0XHRcdFx0XHRcdFsga2V5IF06IHtcclxuXHRcdFx0XHRcdFx0XHQuLi4oIHN0YXRlLmN1cnJlbnRHYXRld2F5WyBrZXkgXSB8fCB7fSApLFxyXG5cdFx0XHRcdFx0XHRcdC4uLnZhbHVlLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH0sXHJcblx0YWN0aW9ucyxcclxuXHRzZWxlY3RvcnMsXHJcbn0gKSApO1xyXG4iLCJjb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2RlYnVnJylcbmNvbnN0IHsgTUFYX0xFTkdUSCwgTUFYX1NBRkVfSU5URUdFUiB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY29uc3RhbnRzJylcbmNvbnN0IHsgcmUsIHQgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3JlJylcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCB7IGNvbXBhcmVJZGVudGlmaWVycyB9ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaWRlbnRpZmllcnMnKVxuY2xhc3MgU2VtVmVyIHtcbiAgY29uc3RydWN0b3IgKHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgICAgaWYgKHZlcnNpb24ubG9vc2UgPT09ICEhb3B0aW9ucy5sb29zZSAmJlxuICAgICAgICAgIHZlcnNpb24uaW5jbHVkZVByZXJlbGVhc2UgPT09ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZSkge1xuICAgICAgICByZXR1cm4gdmVyc2lvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvblxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFZlcnNpb246ICR7dmVyc2lvbn1gKVxuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGB2ZXJzaW9uIGlzIGxvbmdlciB0aGFuICR7TUFYX0xFTkdUSH0gY2hhcmFjdGVyc2BcbiAgICAgIClcbiAgICB9XG5cbiAgICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICAgIC8vIHRoaXMgaXNuJ3QgYWN0dWFsbHkgcmVsZXZhbnQgZm9yIHZlcnNpb25zLCBidXQga2VlcCBpdCBzbyB0aGF0IHdlXG4gICAgLy8gZG9uJ3QgcnVuIGludG8gdHJvdWJsZSBwYXNzaW5nIHRoaXMub3B0aW9ucyBhcm91bmQuXG4gICAgdGhpcy5pbmNsdWRlUHJlcmVsZWFzZSA9ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZVxuXG4gICAgY29uc3QgbSA9IHZlcnNpb24udHJpbSgpLm1hdGNoKG9wdGlvbnMubG9vc2UgPyByZVt0LkxPT1NFXSA6IHJlW3QuRlVMTF0pXG5cbiAgICBpZiAoIW0pIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgVmVyc2lvbjogJHt2ZXJzaW9ufWApXG4gICAgfVxuXG4gICAgdGhpcy5yYXcgPSB2ZXJzaW9uXG5cbiAgICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICAgIHRoaXMubWFqb3IgPSArbVsxXVxuICAgIHRoaXMubWlub3IgPSArbVsyXVxuICAgIHRoaXMucGF0Y2ggPSArbVszXVxuXG4gICAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtaW5vciB2ZXJzaW9uJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXRjaCA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5wYXRjaCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG4gICAgfVxuXG4gICAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gICAgaWYgKCFtWzRdKSB7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKChpZCkgPT4ge1xuICAgICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICAgIGNvbnN0IG51bSA9ICtpZFxuICAgICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWxkID0gbVs1XSA/IG1bNV0uc3BsaXQoJy4nKSA6IFtdXG4gICAgdGhpcy5mb3JtYXQoKVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICB0aGlzLnZlcnNpb24gPSBgJHt0aGlzLm1ham9yfS4ke3RoaXMubWlub3J9LiR7dGhpcy5wYXRjaH1gXG4gICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMudmVyc2lvbiArPSBgLSR7dGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKX1gXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZlcnNpb25cbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uXG4gIH1cblxuICBjb21wYXJlIChvdGhlcikge1xuICAgIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5vcHRpb25zLCBvdGhlcilcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3RoZXIgPT09ICdzdHJpbmcnICYmIG90aGVyID09PSB0aGlzLnZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIGlmIChvdGhlci52ZXJzaW9uID09PSB0aGlzLnZlcnNpb24pIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcilcbiAgfVxuXG4gIGNvbXBhcmVNYWluIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaClcbiAgICApXG4gIH1cblxuICBjb21wYXJlUHJlIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgLy8gTk9UIGhhdmluZyBhIHByZXJlbGVhc2UgaXMgPiBoYXZpbmcgb25lXG4gICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmIG90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBpID0gMFxuICAgIGRvIHtcbiAgICAgIGNvbnN0IGEgPSB0aGlzLnByZXJlbGVhc2VbaV1cbiAgICAgIGNvbnN0IGIgPSBvdGhlci5wcmVyZWxlYXNlW2ldXG4gICAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYilcbiAgICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9IGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfSBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYilcbiAgICAgIH1cbiAgICB9IHdoaWxlICgrK2kpXG4gIH1cblxuICBjb21wYXJlQnVpbGQgKG90aGVyKSB7XG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBsZXQgaSA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBhID0gdGhpcy5idWlsZFtpXVxuICAgICAgY29uc3QgYiA9IG90aGVyLmJ1aWxkW2ldXG4gICAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYilcbiAgICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9IGVsc2UgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfSBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9IGVsc2UgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYilcbiAgICAgIH1cbiAgICB9IHdoaWxlICgrK2kpXG4gIH1cblxuICAvLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4gIC8vIGRvd24gdG8gcHJlLXJlbGVhc2UuIHByZW1ham9yIGFuZCBwcmVwYXRjaCB3b3JrIHRoZSBzYW1lIHdheS5cbiAgaW5jIChyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gICAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgICBjYXNlICdwcmVtYWpvcic6XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMubWlub3IgPSAwXG4gICAgICAgIHRoaXMubWFqb3IrK1xuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDBcbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5taW5vcisrXG4gICAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncHJlcGF0Y2gnOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgICAvLyByZWxldmFudCBhdCB0aGlzIHBvaW50LlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKVxuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgICAgYnJlYWtcbiAgICAgIC8vIElmIHRoZSBpbnB1dCBpcyBhIG5vbi1wcmVyZWxlYXNlIHZlcnNpb24sIHRoaXMgYWN0cyB0aGUgc2FtZSBhc1xuICAgICAgLy8gcHJlcGF0Y2guXG4gICAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdtYWpvcic6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgICAvLyAxLjAuMC01IGJ1bXBzIHRvIDEuMC4wXG4gICAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLm1pbm9yICE9PSAwIHx8XG4gICAgICAgICAgdGhpcy5wYXRjaCAhPT0gMCB8fFxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5tYWpvcisrXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5taW5vciA9IDBcbiAgICAgICAgdGhpcy5wYXRjaCA9IDBcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAgIC8vIE90aGVyd2lzZSBpbmNyZW1lbnQgbWlub3IuXG4gICAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgICAgaWYgKHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubWlub3IrK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwYXRjaCc6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgbm90IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiwgaXQgd2lsbCBpbmNyZW1lbnQgdGhlIHBhdGNoLlxuICAgICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgICAgLy8gMS4yLjAgcGF0Y2hlcyB0byAxLjIuMVxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucGF0Y2grK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgICAgLy8gMS4wLjAgJ3ByZScgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICAgIGNhc2UgJ3ByZSc6XG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGkgPSB0aGlzLnByZXJlbGVhc2UubGVuZ3RoXG4gICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlcmVsZWFzZVtpXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKytcbiAgICAgICAgICAgICAgaSA9IC0yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAgIC8vIDEuMi4wLWJldGEuZm9vYmx6IG9yIDEuMi4wLWJldGEgYnVtcHMgdG8gMS4yLjAtYmV0YS4wXG4gICAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAke3JlbGVhc2V9YClcbiAgICB9XG4gICAgdGhpcy5mb3JtYXQoKVxuICAgIHRoaXMucmF3ID0gdGhpcy52ZXJzaW9uXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbVZlclxuIiwiY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9zZW12ZXInKVxuY29uc3QgY29tcGFyZSA9IChhLCBiLCBsb29zZSkgPT5cbiAgbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShuZXcgU2VtVmVyKGIsIGxvb3NlKSlcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wYXJlXG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGd0ID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDBcbm1vZHVsZS5leHBvcnRzID0gZ3RcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZ3RlID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGd0ZVxuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBsdCA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwXG5tb2R1bGUuZXhwb3J0cyA9IGx0XG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGx0ZSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMFxubW9kdWxlLmV4cG9ydHMgPSBsdGVcbiIsIi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmNvbnN0IFNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnXG5cbmNvbnN0IE1BWF9MRU5HVEggPSAyNTZcbmNvbnN0IE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyA5MDA3MTk5MjU0NzQwOTkxXG5cbi8vIE1heCBzYWZlIHNlZ21lbnQgbGVuZ3RoIGZvciBjb2VyY2lvbi5cbmNvbnN0IE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggPSAxNlxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgU0VNVkVSX1NQRUNfVkVSU0lPTixcbiAgTUFYX0xFTkdUSCxcbiAgTUFYX1NBRkVfSU5URUdFUixcbiAgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSFxufVxuIiwiY29uc3QgZGVidWcgPSAoXG4gIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICBwcm9jZXNzLmVudiAmJlxuICBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpXG4pID8gKC4uLmFyZ3MpID0+IGNvbnNvbGUuZXJyb3IoJ1NFTVZFUicsIC4uLmFyZ3MpXG4gIDogKCkgPT4ge31cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1Z1xuIiwiY29uc3QgbnVtZXJpYyA9IC9eWzAtOV0rJC9cbmNvbnN0IGNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IGFudW0gPSBudW1lcmljLnRlc3QoYSlcbiAgY29uc3QgYm51bSA9IG51bWVyaWMudGVzdChiKVxuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2FcbiAgICBiID0gK2JcbiAgfVxuXG4gIHJldHVybiBhID09PSBiID8gMFxuICAgIDogKGFudW0gJiYgIWJudW0pID8gLTFcbiAgICA6IChibnVtICYmICFhbnVtKSA/IDFcbiAgICA6IGEgPCBiID8gLTFcbiAgICA6IDFcbn1cblxuY29uc3QgcmNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSlcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBhcmVJZGVudGlmaWVycyxcbiAgcmNvbXBhcmVJZGVudGlmaWVyc1xufVxuIiwiLy8gcGFyc2Ugb3V0IGp1c3QgdGhlIG9wdGlvbnMgd2UgY2FyZSBhYm91dCBzbyB3ZSBhbHdheXMgZ2V0IGEgY29uc2lzdGVudFxuLy8gb2JqIHdpdGgga2V5cyBpbiBhIGNvbnNpc3RlbnQgb3JkZXIuXG5jb25zdCBvcHRzID0gWydpbmNsdWRlUHJlcmVsZWFzZScsICdsb29zZScsICdydGwnXVxuY29uc3QgcGFyc2VPcHRpb25zID0gb3B0aW9ucyA9PlxuICAhb3B0aW9ucyA/IHt9XG4gIDogdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnID8geyBsb29zZTogdHJ1ZSB9XG4gIDogb3B0cy5maWx0ZXIoayA9PiBvcHRpb25zW2tdKS5yZWR1Y2UoKG9wdGlvbnMsIGspID0+IHtcbiAgICBvcHRpb25zW2tdID0gdHJ1ZVxuICAgIHJldHVybiBvcHRpb25zXG4gIH0sIHt9KVxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZU9wdGlvbnNcbiIsImNvbnN0IHsgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJylcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG5jb25zdCByZSA9IGV4cG9ydHMucmUgPSBbXVxuY29uc3Qgc3JjID0gZXhwb3J0cy5zcmMgPSBbXVxuY29uc3QgdCA9IGV4cG9ydHMudCA9IHt9XG5sZXQgUiA9IDBcblxuY29uc3QgY3JlYXRlVG9rZW4gPSAobmFtZSwgdmFsdWUsIGlzR2xvYmFsKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gUisrXG4gIGRlYnVnKGluZGV4LCB2YWx1ZSlcbiAgdFtuYW1lXSA9IGluZGV4XG4gIHNyY1tpbmRleF0gPSB2YWx1ZVxuICByZVtpbmRleF0gPSBuZXcgUmVnRXhwKHZhbHVlLCBpc0dsb2JhbCA/ICdnJyA6IHVuZGVmaW5lZClcbn1cblxuLy8gVGhlIGZvbGxvd2luZyBSZWd1bGFyIEV4cHJlc3Npb25zIGNhbiBiZSB1c2VkIGZvciB0b2tlbml6aW5nLFxuLy8gdmFsaWRhdGluZywgYW5kIHBhcnNpbmcgU2VtVmVyIHZlcnNpb24gc3RyaW5ncy5cblxuLy8gIyMgTnVtZXJpYyBJZGVudGlmaWVyXG4vLyBBIHNpbmdsZSBgMGAsIG9yIGEgbm9uLXplcm8gZGlnaXQgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIGRpZ2l0cy5cblxuY3JlYXRlVG9rZW4oJ05VTUVSSUNJREVOVElGSUVSJywgJzB8WzEtOV1cXFxcZConKVxuY3JlYXRlVG9rZW4oJ05VTUVSSUNJREVOVElGSUVSTE9PU0UnLCAnWzAtOV0rJylcblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxuY3JlYXRlVG9rZW4oJ05PTk5VTUVSSUNJREVOVElGSUVSJywgJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonKVxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ01BSU5WRVJTSU9OJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX0pXFxcXC5gICtcbiAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KWApXG5cbmNyZWF0ZVRva2VuKCdNQUlOVkVSU0lPTkxPT1NFJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlgKVxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFSURFTlRJRklFUicsIGAoPzoke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXVxufXwke3NyY1t0Lk5PTk5VTUVSSUNJREVOVElGSUVSXX0pYClcblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UnLCBgKD86JHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXVxufXwke3NyY1t0Lk5PTk5VTUVSSUNJREVOVElGSUVSXX0pYClcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvblxuLy8gSHlwaGVuLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIHZlcnNpb25cbi8vIGlkZW50aWZpZXJzLlxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRScsIGAoPzotKCR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJdXG59KD86XFxcXC4ke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSXX0pKikpYClcblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0VMT09TRScsIGAoPzotPygke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdXG59KD86XFxcXC4ke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdfSkqKSlgKVxuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG5jcmVhdGVUb2tlbignQlVJTERJREVOVElGSUVSJywgJ1swLTlBLVphLXotXSsnKVxuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ0JVSUxEJywgYCg/OlxcXFwrKCR7c3JjW3QuQlVJTERJREVOVElGSUVSXVxufSg/OlxcXFwuJHtzcmNbdC5CVUlMRElERU5USUZJRVJdfSkqKSlgKVxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxuY3JlYXRlVG9rZW4oJ0ZVTExQTEFJTicsIGB2PyR7c3JjW3QuTUFJTlZFUlNJT05dXG59JHtzcmNbdC5QUkVSRUxFQVNFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignRlVMTCcsIGBeJHtzcmNbdC5GVUxMUExBSU5dfSRgKVxuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG5jcmVhdGVUb2tlbignTE9PU0VQTEFJTicsIGBbdj1cXFxcc10qJHtzcmNbdC5NQUlOVkVSU0lPTkxPT1NFXVxufSR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignTE9PU0UnLCBgXiR7c3JjW3QuTE9PU0VQTEFJTl19JGApXG5cbmNyZWF0ZVRva2VuKCdHVExUJywgJygoPzo8fD4pPz0/KScpXG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSTE9PU0UnLCBgJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXX18eHxYfFxcXFwqYClcbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSJywgYCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfXx4fFh8XFxcXCpgKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU4nLCBgW3Y9XFxcXHNdKigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJdfSlgICtcbiAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGAoPzoke3NyY1t0LlBSRVJFTEVBU0VdfSk/JHtcbiAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgYCk/KT9gKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU5MT09TRScsIGBbdj1cXFxcc10qKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0pPyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKT8pP2ApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignWFJBTkdFTE9PU0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQ29lcmNpb24uXG4vLyBFeHRyYWN0IGFueXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgYmUgYSBwYXJ0IG9mIGEgdmFsaWQgc2VtdmVyXG5jcmVhdGVUb2tlbignQ09FUkNFJywgYCR7JyhefFteXFxcXGRdKScgK1xuICAgICAgICAgICAgICAnKFxcXFxkezEsJ30ke01BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEh9fSlgICtcbiAgICAgICAgICAgICAgYCg/OlxcXFwuKFxcXFxkezEsJHtNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIfX0pKT9gICtcbiAgICAgICAgICAgICAgYCg/OlxcXFwuKFxcXFxkezEsJHtNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIfX0pKT9gICtcbiAgICAgICAgICAgICAgYCg/OiR8W15cXFxcZF0pYClcbmNyZWF0ZVRva2VuKCdDT0VSQ0VSVEwnLCBzcmNbdC5DT0VSQ0VdLCB0cnVlKVxuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxuY3JlYXRlVG9rZW4oJ0xPTkVUSUxERScsICcoPzp+Pj8pJylcblxuY3JlYXRlVG9rZW4oJ1RJTERFVFJJTScsIGAoXFxcXHMqKSR7c3JjW3QuTE9ORVRJTERFXX1cXFxccytgLCB0cnVlKVxuZXhwb3J0cy50aWxkZVRyaW1SZXBsYWNlID0gJyQxfidcblxuY3JlYXRlVG9rZW4oJ1RJTERFJywgYF4ke3NyY1t0LkxPTkVUSUxERV19JHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignVElMREVMT09TRScsIGBeJHtzcmNbdC5MT05FVElMREVdfSR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19JGApXG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG5jcmVhdGVUb2tlbignTE9ORUNBUkVUJywgJyg/OlxcXFxeKScpXG5cbmNyZWF0ZVRva2VuKCdDQVJFVFRSSU0nLCBgKFxcXFxzKikke3NyY1t0LkxPTkVDQVJFVF19XFxcXHMrYCwgdHJ1ZSlcbmV4cG9ydHMuY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nXG5cbmNyZWF0ZVRva2VuKCdDQVJFVCcsIGBeJHtzcmNbdC5MT05FQ0FSRVRdfSR7c3JjW3QuWFJBTkdFUExBSU5dfSRgKVxuY3JlYXRlVG9rZW4oJ0NBUkVUTE9PU0UnLCBgXiR7c3JjW3QuTE9ORUNBUkVUXX0ke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSRgKVxuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxuY3JlYXRlVG9rZW4oJ0NPTVBBUkFUT1JMT09TRScsIGBeJHtzcmNbdC5HVExUXX1cXFxccyooJHtzcmNbdC5MT09TRVBMQUlOXX0pJHxeJGApXG5jcmVhdGVUb2tlbignQ09NUEFSQVRPUicsIGBeJHtzcmNbdC5HVExUXX1cXFxccyooJHtzcmNbdC5GVUxMUExBSU5dfSkkfF4kYClcblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbmNyZWF0ZVRva2VuKCdDT01QQVJBVE9SVFJJTScsIGAoXFxcXHMqKSR7c3JjW3QuR1RMVF1cbn1cXFxccyooJHtzcmNbdC5MT09TRVBMQUlOXX18JHtzcmNbdC5YUkFOR0VQTEFJTl19KWAsIHRydWUpXG5leHBvcnRzLmNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG5jcmVhdGVUb2tlbignSFlQSEVOUkFOR0UnLCBgXlxcXFxzKigke3NyY1t0LlhSQU5HRVBMQUlOXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYFxcXFxzKy1cXFxccytgICtcbiAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuWFJBTkdFUExBSU5dfSlgICtcbiAgICAgICAgICAgICAgICAgICBgXFxcXHMqJGApXG5cbmNyZWF0ZVRva2VuKCdIWVBIRU5SQU5HRUxPT1NFJywgYF5cXFxccyooJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxcXHMrLVxcXFxzK2AgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXFxccyokYClcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxuY3JlYXRlVG9rZW4oJ1NUQVInLCAnKDx8Pik/PT9cXFxccypcXFxcKicpXG4vLyA+PTAuMC4wIGlzIGxpa2UgYSBzdGFyXG5jcmVhdGVUb2tlbignR1RFMCcsICdeXFxcXHMqPj1cXFxccyowXFwuMFxcLjBcXFxccyokJylcbmNyZWF0ZVRva2VuKCdHVEUwUFJFJywgJ15cXFxccyo+PVxcXFxzKjBcXC4wXFwuMC0wXFxcXHMqJCcpXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFjdGlvbkZpZWxkc01hcCBmcm9tICcuL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXAnO1xyXG5pbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL2FjdGlvbi1tb2RhbCc7XHJcbmltcG9ydCBXcmFwcGVyUmVxdWlyZWRDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2wnO1xyXG5pbXBvcnQgUmVxdWVzdEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvcmVxdWVzdC1idXR0b24nO1xyXG5pbXBvcnQgVmFsaWRhdGVCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL3ZhbGlkYXRlLWJ1dHRvbic7XHJcbmltcG9ydCBhZGRBY3Rpb24gZnJvbSAnLi9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLW1hbmFnZXInO1xyXG5pbXBvcnQgVG9vbHMsIHtcclxuXHRjbGFzc25hbWVzLFxyXG5cdGV2ZW50LFxyXG5cdGdldENvbnZlcnRlZE5hbWUsXHJcblx0bGlzdGVuLFxyXG5cdG1heWJlQ3lyVG9MYXRpbixcclxuXHR2ZXJzaW9uQ29tcGFyZSxcclxuXHRjb252ZXJ0T2JqZWN0VG9PcHRpb25zTGlzdCxcclxufSBmcm9tICcuL2hlbHBlcnMvdG9vbHMnO1xyXG5pbXBvcnQgRHluYW1pY1ByZXNldCBmcm9tICcuL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldCc7XHJcbmltcG9ydCBKZXRGaWVsZHNNYXBDb250cm9sIGZyb20gJy4uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZmllbGRzLW1hcCc7XHJcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC13aXRoLXByZXNldCc7XHJcbmltcG9ydCB7XHJcblx0R2xvYmFsRmllbGQsXHJcblx0QXZhaWxhYmxlTWFwRmllbGQsXHJcblx0TWFwRmllbGQsXHJcbn0gZnJvbSAnLi9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LXJlbmRlcic7XHJcblxyXG5pbXBvcnQge1xyXG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcsXHJcblx0Z2V0QmxvY2tzQnlOYW1lLFxyXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxyXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcblx0Z2V0Rm9ybUZpZWxkc0J5QmxvY2ssXHJcblx0Z2V0SW5uZXJCbG9ja3MsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2Jsb2Nrcy9ibG9ja3MtaGVscGVyJztcclxuaW1wb3J0IHtcclxuXHRnYXRld2F5QXR0cixcclxuXHRnYXRld2F5TGFiZWwsXHJcblx0cmVnaXN0ZXJHYXRld2F5LFxyXG5cdHJlbmRlckdhdGV3YXksXHJcblx0cmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlcixcclxufSBmcm9tICcuL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1oZWxwZXInO1xyXG5pbXBvcnQge1xyXG5cdHVzZUFjdGlvbnMsXHJcblx0dXNlTWV0YVN0YXRlLFxyXG5cdHVzZVN0YXRlVmFsaWRDbGFzc2VzLFxyXG5cdHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMsXHJcblx0dXNlU3VjY2Vzc05vdGljZSxcclxuXHR1c2VSZXF1ZXN0RmllbGRzLFxyXG5cdHdpdGhSZXF1ZXN0RmllbGRzLFxyXG5cdHdpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nLFxyXG5cdHdpdGhEaXNwYXRjaE1ldGEsXHJcblx0d2l0aFNlbGVjdE1ldGEsXHJcblx0d2l0aE5vdGljZSxcclxuXHR3aXRoU2VsZWN0R2F0ZXdheXNMb2FkaW5nLFxyXG5cdHdpdGhTZWxlY3RGb3JtRmllbGRzLFxyXG5cdHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHR3aXRoRGlzcGF0Y2hHYXRld2F5cyxcclxufSBmcm9tICcuL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyJztcclxuaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tICcuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdyYXBwZXInO1xyXG5pbXBvcnQgTWFjcm9zSW5zZXJ0ZXIgZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkcy9tYWNyb3MtaW5zZXJ0ZXInO1xyXG5pbXBvcnQgUmVwZWF0ZXJXaXRoU3RhdGUgZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkcy9yZXBlYXRlci13aXRoLXN0YXRlJztcclxuaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSAnLi9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvcic7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzLFxyXG5cdEZpZWxkQ29udHJvbCxcclxufSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLWNvbnRyb2wnO1xyXG5pbXBvcnQgUGxhY2Vob2xkZXJNZXNzYWdlIGZyb20gJy4vY29tcG9uZW50cy9hY3Rpb25zL3BsYWNlaG9sZGVyLW1lc3NhZ2UnO1xyXG5pbXBvcnQgQWN0aW9uTWVzc2FnZXMgZnJvbSAnLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLW1lc3NhZ2VzJztcclxuaW1wb3J0IEhvcml6b250YWxMaW5lIGZyb20gJy4vY29tcG9uZW50cy9ob3Jpem9udGFsLWxpbmUnO1xyXG5pbXBvcnQgUmVxdWVzdExvYWRpbmdCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL3JlcXVlc3QtbG9hZGluZy1idXR0b24nO1xyXG5pbXBvcnQge1xyXG5cdGFjdGlvbkJ5VHlwZUxpc3QsXHJcblx0Y29udmVydExpc3RUb0ZpZWxkc01hcCxcclxuXHRmcm9tTG9jYWxpemVIZWxwZXIsXHJcblx0Z2V0QWN0aW9uU2V0dGluZ3MsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLWhlbHBlcic7XHJcbmltcG9ydCBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyBmcm9tICcuL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlcyc7XHJcbmltcG9ydCB7IGdsb2JhbFRhYiB9IGZyb20gJy4vaGVscGVycy9zZXR0aW5ncy9oZWxwZXInO1xyXG5pbXBvcnQgRmllbGRTZXR0aW5nc1dyYXBwZXIgZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC1zZXR0aW5ncy13cmFwcGVyJztcclxuaW1wb3J0IEdyb3VwZWRTZWxlY3RDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9ncm91cGVkLXNlbGVjdC1jb250cm9sJztcclxuaW1wb3J0IHtcclxuXHRnZXRCbG9ja0NvbnRyb2xzLFxyXG59IGZyb20gJy4vY29tcG9uZW50cy9maWVsZHMvY29udHJvbHMnO1xyXG5pbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xzL2Jhc2UtaGVscCc7XHJcbmltcG9ydCAnLi9zdG9yZXMvYWN0aW9uLXN0b3JlJztcclxuaW1wb3J0ICcuL3N0b3Jlcy9nYXRld2F5cy1zdG9yZSc7XHJcbmltcG9ydCBWYWxpZGF0ZUJ1dHRvbldpdGhTdG9yZSBmcm9tICcuL2NvbXBvbmVudHMvdmFsaWRhdGUtYnV0dG9uLXdpdGgtc3RvcmUnO1xyXG5pbXBvcnQgR2F0ZXdheUZldGNoQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9nYXRld2F5LWZldGNoLWJ1dHRvbic7XHJcblxyXG4vLyBKRkJDb21wb25lbnRzXHJcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgPSB7XHJcblx0QWN0aW9uRmllbGRzTWFwLFxyXG5cdEFjdGlvbk1vZGFsLFxyXG5cdFJlcXVlc3RCdXR0b24sXHJcblx0VmFsaWRhdGVCdXR0b24sXHJcblx0UmVxdWVzdExvYWRpbmdCdXR0b24sXHJcblx0V3JhcHBlclJlcXVpcmVkQ29udHJvbCxcclxuXHREeW5hbWljUHJlc2V0LFxyXG5cdEpldEZpZWxkc01hcENvbnRyb2wsXHJcblx0RmllbGRXaXRoUHJlc2V0LFxyXG5cdEdsb2JhbEZpZWxkLFxyXG5cdEF2YWlsYWJsZU1hcEZpZWxkLFxyXG5cdE1hcEZpZWxkLFxyXG5cdEZpZWxkV3JhcHBlcixcclxuXHRNYWNyb3NJbnNlcnRlcixcclxuXHRSZXBlYXRlcldpdGhTdGF0ZSxcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHMsXHJcblx0RmllbGRDb250cm9sLFxyXG5cdFBsYWNlaG9sZGVyTWVzc2FnZSxcclxuXHRIb3Jpem9udGFsTGluZSxcclxuXHRGaWVsZFNldHRpbmdzV3JhcHBlcixcclxuXHRBY3Rpb25NZXNzYWdlcyxcclxuXHRHcm91cGVkU2VsZWN0Q29udHJvbCxcclxuXHRCYXNlSGVscCxcclxuXHRWYWxpZGF0ZUJ1dHRvbldpdGhTdG9yZSxcclxuXHRHYXRld2F5RmV0Y2hCdXR0b24sXHJcbn07XHJcblxyXG5cclxuXHJcbi8vIEpGQkZ1bmN0aW9uc1xyXG53aW5kb3cuSmV0RkJBY3Rpb25zID0ge1xyXG5cdGFkZEFjdGlvbixcclxuXHR3aXRoUHJlc2V0LFxyXG5cdGdldEZvcm1GaWVsZHNCeUJsb2NrLFxyXG5cdGdldElubmVyQmxvY2tzLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcclxuXHRnYXRld2F5QXR0cixcclxuXHRnYXRld2F5TGFiZWwsXHJcblx0cmVnaXN0ZXJHYXRld2F5LFxyXG5cdFRvb2xzLFxyXG5cdGV2ZW50LFxyXG5cdGxpc3RlbixcclxuXHRhY3Rpb25CeVR5cGVMaXN0LFxyXG5cdGdldEFjdGlvblNldHRpbmdzLFxyXG5cdGZyb21Mb2NhbGl6ZUhlbHBlcixcclxuXHRyZW5kZXJHYXRld2F5LFxyXG5cdHJlbmRlckdhdGV3YXlXaXRoUGxhY2Vob2xkZXIsXHJcblx0Z2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMsXHJcblx0Z2xvYmFsVGFiLFxyXG5cdHZlcnNpb25Db21wYXJlLFxyXG5cdGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAsXHJcblx0bWF5YmVDeXJUb0xhdGluLFxyXG5cdGdldENvbnZlcnRlZE5hbWUsXHJcblx0Z2V0QmxvY2tDb250cm9scyxcclxuXHRjbGFzc25hbWVzLFxyXG5cdGdldEJsb2Nrc0J5TmFtZSxcclxuXHRjb252ZXJ0T2JqZWN0VG9PcHRpb25zTGlzdCxcclxufTtcclxuXHJcbi8vIEpGQkhvb2tzXHJcbndpbmRvdy5KZXRGQkhvb2tzID0ge1xyXG5cdHVzZUFjdGlvbnMsXHJcblx0dXNlTWV0YVN0YXRlLFxyXG5cdHVzZVN0YXRlVmFsaWRDbGFzc2VzLFxyXG5cdHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMsXHJcblx0dXNlU3VjY2Vzc05vdGljZSxcclxuXHR3aXRoUmVxdWVzdEZpZWxkcyxcclxuXHR1c2VSZXF1ZXN0RmllbGRzLFxyXG5cdHdpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nLFxyXG5cdHdpdGhEaXNwYXRjaE1ldGEsXHJcblx0d2l0aFNlbGVjdE1ldGEsXHJcblx0d2l0aE5vdGljZSxcclxuXHR3aXRoU2VsZWN0R2F0ZXdheXNMb2FkaW5nLFxyXG5cdHdpdGhTZWxlY3RGb3JtRmllbGRzLFxyXG5cdHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHR3aXRoRGlzcGF0Y2hHYXRld2F5c1xyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=