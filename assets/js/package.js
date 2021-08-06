/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/blocks/controls/fields-map.js":
/*!**********************************************!*\
  !*** ./editor/blocks/controls/fields-map.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionFieldsMap)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    if (!settings || !settings.messages) {
      var _messages = {};
      Object.entries(source.__messages).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            type = _ref2[0],
            data = _ref2[1];

        _messages[type] = data.value;
      });
      onChangeSetting(_messages, 'messages');
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

/***/ "./package/components/fields/controls.js":
/*!***********************************************!*\
  !*** ./package/components/fields/controls.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      label: __('General'),
      attrs: [{
        "attrName": "label",
        "type": "text",
        "label": __("Field Label")
      }, {
        "attrName": "name",
        "type": "text",
        "label": __("Form field name"),
        "help": __("Should contain only Latin letters, numbers, `-` or `_` chars, no spaces only lower case")
      }, {
        "attrName": "desc",
        "type": "text",
        "label": __("Field Description")
      }, {
        "attrName": "default",
        "type": "dynamic_text",
        "label": __("Default Value")
      }]
    },
    "toolbar": {
      attrs: [{
        "attrName": "required",
        "type": "toggle",
        "label": __("Is Required")
      }]
    },
    "advanced": {
      label: __('Advanced'),
      attrs: [{
        "attrName": "placeholder",
        "type": "text",
        "label": __("Placeholder")
      }, {
        "attrName": "add_prev",
        "type": "toggle",
        "label": __("Add Prev Page Button")
      }, {
        "attrName": "prev_label",
        "type": "text",
        "label": __("Prev Page Button Label"),
        "condition": "add_prev"
      }, {
        "attrName": "visibility",
        "label": __("Field Visibility"),
        "type": "select",
        "options": [{
          "value": "all",
          "label": __("For all")
        }, {
          "value": "logged_id",
          "label": __("Only for logged in users")
        }, {
          "value": "not_logged_in",
          "label": __("Only for NOT-logged in users")
        }]
      }, {
        "attrName": "class_name",
        "type": "text",
        "label": __("CSS Class Name")
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralFields": () => (/* binding */ GeneralFields),
/* harmony export */   "ToolBarFields": () => (/* binding */ ToolBarFields),
/* harmony export */   "AdvancedFields": () => (/* binding */ AdvancedFields),
/* harmony export */   "FieldControl": () => (/* binding */ FieldControl)
/* harmony export */ });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./package/components/fields/controls.js");
/* harmony import */ var _field_with_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-with-preset */ "./package/components/fields/field-with-preset.js");
/* harmony import */ var _presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presets/dynamic-preset */ "./package/components/presets/dynamic-preset.js");
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/tools */ "./package/helpers/tools.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







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

function FieldControl(_ref2) {
  var type = _ref2.type,
      setAttributes = _ref2.setAttributes,
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
    return null;
  }

  var currentControl = controls[type];

  var onChangeValue = function onChangeValue(value, key) {
    setAttributes(_defineProperty({}, key, value));
  };

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

  return currentControl.attrs.map(function (_ref3) {
    var _ref3$help = _ref3.help,
        help = _ref3$help === void 0 ? '' : _ref3$help,
        attrName = _ref3.attrName,
        label = _ref3.label,
        attr = _objectWithoutProperties(_ref3, ["help", "attrName", "label"]);

    var isRegisterAttribute = (attrName in attributes);
    var validCondition = isValidCondition(attr);
    var isHidden = attrName in attrsSettings && 'show' in attrsSettings[attrName] && false === attrsSettings[attrName].show;

    if (!isRegisterAttribute || !validCondition || isHidden) {
      return null;
    }

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
            if ('label' === attrName && 1 < attributes.label.length && (!attributes.name || 'field_name' === attributes.name)) {
              onChangeValue((0,_helpers_tools__WEBPACK_IMPORTED_MODULE_3__.getConvertedName)(attributes.label), 'name');
            }
          }
        });

      case 'dynamic_text':
        return wp.element.createElement(_field_with_preset__WEBPACK_IMPORTED_MODULE_1__.default, {
          key: "".concat(attr.type, "-").concat(attrName, "-FieldWithPreset"),
          ModalEditor: function ModalEditor(_ref4) {
            var actionClick = _ref4.actionClick,
                onRequestClose = _ref4.onRequestClose;
            return wp.element.createElement(_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_2__.default, {
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
  }, displayName && wp.element.createElement(React.Fragment, null, wp.element.createElement(ClipboardButton, {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldSettingsWrapper)
/* harmony export */ });
/* harmony import */ var _field_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-control */ "./package/components/fields/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var __ = wp.i18n.__;
var PanelBody = wp.components.PanelBody;
function FieldSettingsWrapper(props) {
  var title = props.title,
      children = props.children,
      _props$editProps$uniq = props.editProps.uniqKey,
      uniqKey = _props$editProps$uniq === void 0 ? function (val) {
    return val;
  } : _props$editProps$uniq;
  return wp.element.createElement(PanelBody, {
    title: title || __('Field Settings')
  }, children, wp.element.createElement(_field_control__WEBPACK_IMPORTED_MODULE_0__.FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props)));
}

/***/ }),

/***/ "./package/components/fields/field-with-preset.js":
/*!********************************************************!*\
  !*** ./package/components/fields/field-with-preset.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  })))), modalState && wp.element.createElement(_action_modal__WEBPACK_IMPORTED_MODULE_0__.default, {
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
  var isSelected = props.isSelected,
      attributes = props.attributes,
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
      style: {
        display: 'flex'
      }
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
    style: {
      flex: 1
    }
  }, renderLabel(), renderDescription()), wp.element.createElement("div", {
    style: {
      flex: 3
    }
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      popoverProps = _objectWithoutProperties(_ref, ["children", "fields", "onFieldClick", "customMacros", "zIndex"]);

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  } : _ref$help;
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
    label: __('Safe deleting'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  })), wp.element.createElement(FlexItem, {
    style: {
      flex: 'unset',
      marginBottom: '1em'
    }
  }))), itemsData.map(function (currentItem, index) {
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
      }
    }), 'function' !== typeof children && children), !children && 'Set up your Repeater Template, please.'));
  }), 1 < itemsData.length && wp.element.createElement(ToggleControl, {
    className: "jet-control-clear",
    label: __('Safe deleting'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  }), wp.element.createElement(Button, {
    isSecondary: true,
    onClick: function onClick() {
      return addNewItem(newItem);
    }
  }, addNewButtonLabel));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterWithState);

/***/ }),

/***/ "./package/components/grouped-select-control.js":
/*!******************************************************!*\
  !*** ./package/components/grouped-select-control.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_preset_editor__WEBPACK_IMPORTED_MODULE_0__.default)(DynamicPreset));

/***/ }),

/***/ "./package/components/presets/preset-editor.js":
/*!*****************************************************!*\
  !*** ./package/components/presets/preset-editor.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        }), wp.element.createElement(_grouped_select_control__WEBPACK_IMPORTED_MODULE_0__.default, {
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
      }, wp.element.createElement(_grouped_select_control__WEBPACK_IMPORTED_MODULE_0__.default, {
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
      children = _ref$children === void 0 ? function () {} : _ref$children;

  var defaultValidate = function defaultValidate() {
    return jQuery.ajax({
      url: ajaxurl,
      type: 'POST',
      data: ajaxArgs
    });
  };

  var request = function request() {
    onLoading();
    defaultValidate().done(function (response) {
      return response.success ? onSuccessRequest(response) : onFailRequest();
    }).fail(function () {
      return onFailRequest();
    });
  };

  return wp.element.createElement(Button, {
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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return wp.element.createElement(_request_button__WEBPACK_IMPORTED_MODULE_0__.default, {
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

/***/ "./package/components/validate-button.js":
/*!***********************************************!*\
  !*** ./package/components/validate-button.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return wp.element.createElement(_request_button__WEBPACK_IMPORTED_MODULE_0__.default, {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WrapperRequiredControl)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function WrapperRequiredControl(_ref) {
  var field = _ref.field,
      children = _ref.children,
      _ref$labelKey = _ref.labelKey,
      labelKey = _ref$labelKey === void 0 ? 'label' : _ref$labelKey,
      _ref$requiredKey = _ref.requiredKey,
      requiredKey = _ref$requiredKey === void 0 ? 'required' : _ref$requiredKey;

  var _field = _slicedToArray(field, 2),
      name = _field[0],
      data = _field[1];

  return wp.element.createElement("div", {
    className: "jet-user-meta__row",
    key: 'user_meta_' + name
  }, wp.element.createElement("div", {
    className: "jet-field-map__row-label"
  }, wp.element.createElement("span", {
    className: 'fields-map__label'
  }, data.hasOwnProperty(labelKey) && data[labelKey] && data[labelKey], !data.hasOwnProperty(labelKey) && data), data.hasOwnProperty(requiredKey) && data[requiredKey] && wp.element.createElement("span", {
    className: 'fields-map__required'
  }, " *")), children);
}

/***/ }),

/***/ "./package/helpers/actions/action-helper.js":
/*!**************************************************!*\
  !*** ./package/helpers/actions/action-helper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      newAction.label += " (".concat((0,_gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_1__.default)(action), ")");
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
var convertListToFieldsMap = function convertListToFieldsMap(source) {
  return source.map(function (item) {
    var id = item.value;
    delete item.value;
    return [id, item];
  });
};

/***/ }),

/***/ "./package/helpers/actions/action-manager.js":
/*!***************************************************!*\
  !*** ./package/helpers/actions/action-manager.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-wrapper */ "./package/helpers/actions/action-wrapper.js");


function addAction(actionType, actionInstance) {
  window.jetFormDefaultActions = window.jetFormDefaultActions || {};
  window.jetFormDefaultActions[actionType] = (0,_action_wrapper__WEBPACK_IMPORTED_MODULE_0__.default)(actionType, actionInstance);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addAction);

/***/ }),

/***/ "./package/helpers/actions/action-wrapper.js":
/*!***************************************************!*\
  !*** ./package/helpers/actions/action-wrapper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      setMapField: setMapField
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormFieldsByBlock": () => (/* binding */ getFormFieldsByBlock),
/* harmony export */   "getInnerBlocks": () => (/* binding */ getInnerBlocks),
/* harmony export */   "getAvailableFieldsString": () => (/* binding */ getAvailableFieldsString),
/* harmony export */   "getAvailableFields": () => (/* binding */ getAvailableFields),
/* harmony export */   "getFormFieldsBlocks": () => (/* binding */ getFormFieldsBlocks),
/* harmony export */   "getFieldsWithoutCurrent": () => (/* binding */ getFieldsWithoutCurrent)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __ = wp.i18n.__;

var blocksRecursiveIterator = function blocksRecursiveIterator(blockParserFunc) {
  var blocksRecursiveIterator = function blocksRecursiveIterator(blocks) {
    blocks = blocks || wp.data.select('core/block-editor').getBlocks();
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
  var formFields = [];
  var skipFields = ['submit', 'form-break', 'heading', 'group-break'].concat(_toConsumableArray(exclude));
  blocksRecursiveIterator(function (block) {
    if (block.name.includes('jet-forms/') && block.attributes.name && !skipFields.find(function (field) {
      return block.name.includes(field);
    })) {
      formFields.push({
        blockName: block.name,
        name: block.attributes.name,
        label: block.attributes.label || block.attributes.name,
        value: block.attributes.name
      });
    }
  });
  return placeholder ? [{
    value: '',
    label: placeholder
  }].concat(formFields) : formFields;
};

var getFieldsWithoutCurrent = function getFieldsWithoutCurrent() {
  var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var skipFields = ['submit', 'form-break', 'heading', 'group-break'];
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
  return placeholder ? [{
    value: '',
    label: placeholder
  }].concat(formFields) : formFields;
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
  return __('Available fields: ') + fieldsString.join(', ');
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



/***/ }),

/***/ "./package/helpers/gateways/gateway-action-attrubites.js":
/*!***************************************************************!*\
  !*** ./package/helpers/gateways/gateway-action-attrubites.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gatewayAttr": () => (/* binding */ gatewayAttr),
/* harmony export */   "gatewayLabel": () => (/* binding */ gatewayLabel),
/* harmony export */   "registerGateway": () => (/* binding */ registerGateway),
/* harmony export */   "renderGateway": () => (/* binding */ renderGateway)
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
  window.jetFBGatewaysList = window.jetFBGatewaysList || {};
  window.jetFBGatewaysList[id] = callback;
};
var renderGateway = function renderGateway(id, props) {
  if (!window.jetFBGatewaysList || !window.jetFBGatewaysList[id]) {
    return null;
  }

  var GatewayComponent = window.jetFBGatewaysList[id];
  return wp.element.createElement(GatewayComponent, props);
};

/***/ }),

/***/ "./package/helpers/hooks/hooks-helper.js":
/*!***********************************************!*\
  !*** ./package/helpers/hooks/hooks-helper.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMetaState": () => (/* binding */ useMetaState),
/* harmony export */   "useActions": () => (/* binding */ useActions),
/* harmony export */   "useStateValidClasses": () => (/* binding */ useStateValidClasses),
/* harmony export */   "useStateLoadingClasses": () => (/* binding */ useStateLoadingClasses),
/* harmony export */   "useSuccessNotice": () => (/* binding */ useSuccessNotice),
/* harmony export */   "withJfbMeta": () => (/* binding */ withJfbMeta)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
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
var withJfbMeta = function withJfbMeta(callable) {};

/***/ }),

/***/ "./package/helpers/settings/helper.js":
/*!********************************************!*\
  !*** ./package/helpers/settings/helper.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "event": () => (/* binding */ event),
/* harmony export */   "listen": () => (/* binding */ listen),
/* harmony export */   "versionCompare": () => (/* binding */ versionCompare),
/* harmony export */   "maybeCyrToLatin": () => (/* binding */ maybeCyrToLatin),
/* harmony export */   "getConvertedName": () => (/* binding */ getConvertedName),
/* harmony export */   "classnames": () => (/* binding */ classnames),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
function versionCompare(version1, version2, operator) {
  if ('string' === typeof version1) {
    version1 = +version1.split('.').join('');
  }

  if ('string' === typeof version2) {
    version2 = +version2.split('.').join('');
  }

  if (0 >= version1 || 0 >= version2) {
    throw new Error('Invalid arguments: version1 or version2');
  }

  if (['>', '<', '===', '==', '>=', '<='].includes(operator)) {
    return new Function("return ".concat(version1, " ").concat(operator, " ").concat(version2))();
  }

  throw new Error('Invalid arguments: operator');
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
      slug = valueToChange.toLowerCase().replace(regex, '-'); // Replace accents

  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // Replace cyrillic

  slug = maybeCyrToLatin(slug);

  if (20 < slug.length) {
    slug = slug.substr(0, 20);

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
            result.push((itemClassKey + "").trim());
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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





























 // JFBComponents

window.JetFBComponents = {
  ActionFieldsMap: _components_action_fields_map__WEBPACK_IMPORTED_MODULE_0__.default,
  ActionModal: _components_action_modal__WEBPACK_IMPORTED_MODULE_1__.default,
  RequestButton: _components_request_button__WEBPACK_IMPORTED_MODULE_3__.default,
  ValidateButton: _components_validate_button__WEBPACK_IMPORTED_MODULE_4__.default,
  RequestLoadingButton: _components_request_loading_button__WEBPACK_IMPORTED_MODULE_22__.default,
  WrapperRequiredControl: _components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_2__.default,
  DynamicPreset: _components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_7__.default,
  JetFieldsMapControl: _editor_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_8__.default,
  FieldWithPreset: _components_fields_field_with_preset__WEBPACK_IMPORTED_MODULE_9__.default,
  GlobalField: _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__.GlobalField,
  AvailableMapField: _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__.AvailableMapField,
  MapField: _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__.MapField,
  FieldWrapper: _components_fields_field_wrapper__WEBPACK_IMPORTED_MODULE_14__.default,
  MacrosInserter: _components_fields_macros_inserter__WEBPACK_IMPORTED_MODULE_15__.default,
  RepeaterWithState: _components_fields_repeater_with_state__WEBPACK_IMPORTED_MODULE_16__.default,
  AdvancedFields: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__.AdvancedFields,
  GeneralFields: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__.GeneralFields,
  ToolBarFields: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__.ToolBarFields,
  FieldControl: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__.FieldControl,
  PlaceholderMessage: _components_actions_placeholder_message__WEBPACK_IMPORTED_MODULE_19__.default,
  HorizontalLine: _components_horizontal_line__WEBPACK_IMPORTED_MODULE_21__.default,
  FieldSettingsWrapper: _components_fields_field_settings_wrapper__WEBPACK_IMPORTED_MODULE_26__.default,
  ActionMessages: _components_actions_action_messages__WEBPACK_IMPORTED_MODULE_20__.default,
  GroupedSelectControl: _components_grouped_select_control__WEBPACK_IMPORTED_MODULE_27__.default,
  BaseHelp: _components_controls_base_help__WEBPACK_IMPORTED_MODULE_29__.default
}; // JFBFunctions

window.JetFBActions = {
  addAction: _helpers_actions_action_manager__WEBPACK_IMPORTED_MODULE_5__.default,
  withPreset: _components_presets_preset_editor__WEBPACK_IMPORTED_MODULE_17__.default,
  getFormFieldsByBlock: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getFormFieldsByBlock,
  getInnerBlocks: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getInnerBlocks,
  getAvailableFieldsString: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getAvailableFieldsString,
  getAvailableFields: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getAvailableFields,
  getFormFieldsBlocks: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getFormFieldsBlocks,
  getFieldsWithoutCurrent: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getFieldsWithoutCurrent,
  gatewayAttr: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__.gatewayAttr,
  gatewayLabel: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__.gatewayLabel,
  registerGateway: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__.registerGateway,
  Tools: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.default,
  event: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.event,
  listen: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.listen,
  actionByTypeList: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__.actionByTypeList,
  getActionSettings: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__.getActionSettings,
  fromLocalizeHelper: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__.fromLocalizeHelper,
  renderGateway: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__.renderGateway,
  gatewayActionAttributes: _helpers_gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_24__.default,
  globalTab: _helpers_settings_helper__WEBPACK_IMPORTED_MODULE_25__.globalTab,
  versionCompare: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.versionCompare,
  convertListToFieldsMap: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__.convertListToFieldsMap,
  maybeCyrToLatin: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.maybeCyrToLatin,
  getConvertedName: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.getConvertedName,
  getBlockControls: _components_fields_controls__WEBPACK_IMPORTED_MODULE_28__.getBlockControls,
  classnames: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.classnames
}; // JFBHooks

window.JetFBHooks = {
  useActions: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useActions,
  useMetaState: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useMetaState,
  useStateValidClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useStateValidClasses,
  useStateLoadingClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useStateLoadingClasses,
  useSuccessNotice: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useSuccessNotice
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZmllbGRzLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbi1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvY29udHJvbHMvYmFzZS1oZWxwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtc2V0dGluZ3Mtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdpdGgtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL21hY3Jvcy1pbnNlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL3JlcGVhdGVyLXdpdGgtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2dyb3VwZWQtc2VsZWN0LWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2hvcml6b250YWwtbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9wcmVzZXRzL3ByZXNldC1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3JlcXVlc3QtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9yZXF1ZXN0LWxvYWRpbmctYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy92YWxpZGF0ZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3dyYXBwZXItcmVxdWlyZWQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24taGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9hY3Rpb25zL2FjdGlvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9hY3Rpb25zL2FjdGlvbi13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9ibG9ja3MvYmxvY2tzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvc2V0dGluZ3MvaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy90b29scy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL21hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFRleHRDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHJcbmNsYXNzIEpldEZpZWxkc01hcENvbnRyb2wgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuZmllbGRUeXBlcyA9IHRoaXMucHJvcHMuZmllbGRUeXBlcztcclxuXHRcdHRoaXMudGF4b25vbWllc0xpc3QgPSB0aGlzLnByb3BzLnRheG9ub21pZXNMaXN0O1xyXG5cdFx0dGhpcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcclxuXHRcdHRoaXMubWV0YVByb3AgPSB0aGlzLnByb3BzLm1ldGFQcm9wID8gdGhpcy5wcm9wcy5tZXRhUHJvcCA6ICdwb3N0X21ldGEnO1xyXG5cdFx0dGhpcy50ZXJtc1Byb3AgPSB0aGlzLnByb3BzLnRlcm1zUHJvcCA/IHRoaXMucHJvcHMudGVybXNQcm9wIDogJ3Bvc3RfdGVybXMnO1xyXG5cdFx0dGhpcy5pbmRleCA9IHRoaXMucHJvcHMuaW5kZXg7XHJcblxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLmJpbmRGdW5jdGlvbnMoKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR0eXBlOiB0aGlzLmdldEZpZWxkVHlwZSggdGhpcy5wcm9wcy5maWVsZFZhbHVlICksXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0YmluZEZ1bmN0aW9ucygpIHtcclxuXHRcdHRoaXMub25DaGFuZ2VUeXBlID0gdGhpcy5vbkNoYW5nZVR5cGUuYmluZCggdGhpcyApO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVZhbHVlID0gdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKTtcclxuXHR9XHJcblxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5pZCA9IGBpbnNwZWN0b3Itc2VsZWN0LWNvbnRyb2wtJHsgdGhpcy5pbmRleCB9YDtcclxuXHRcdHRoaXMucHJlcGFyZWRUYXhlcyA9IFtdO1xyXG5cdFx0dGhpcy50YXhQcmVmaXggPSAnamV0X3RheF9fJztcclxuXHJcblx0XHRpZiAoICEgdGhpcy50YXhvbm9taWVzTGlzdCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMudGF4b25vbWllc0xpc3QubGVuZ3RoOyBpICsrICkge1xyXG5cdFx0XHR0aGlzLnByZXBhcmVkVGF4ZXMucHVzaCgge1xyXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnRheFByZWZpeCArIHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS52YWx1ZSxcclxuXHRcdFx0XHRsYWJlbDogdGhpcy50YXhvbm9taWVzTGlzdFsgaSBdLmxhYmVsLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRGaWVsZE5hbWUoIHZhbHVlICkge1xyXG5cclxuXHRcdGlmICggISB2YWx1ZSApIHtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZpZWxkVHlwZSA9IHRoaXMuZ2V0RmllbGRUeXBlKCB2YWx1ZSApO1xyXG5cclxuXHRcdGlmICggdGhpcy50ZXJtc1Byb3AgPT09IGZpZWxkVHlwZSB8fCB0aGlzLm1ldGFQcm9wID09PSBmaWVsZFR5cGUgKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdGlzVGVybU9yTWV0YSggdmFsdWUgKSB7XHJcblx0XHRyZXR1cm4gKCB0aGlzLnRlcm1zUHJvcCA9PT0gdmFsdWUgfHwgdGhpcy5tZXRhUHJvcCA9PT0gdmFsdWUgKTtcclxuXHR9XHJcblxyXG5cclxuXHRnZXRGaWVsZFR5cGUoIHZhbHVlICkge1xyXG5cclxuXHRcdGlmICggISB2YWx1ZSApIHtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRUeXBlcy5sZW5ndGg7IGkgKysgKSB7XHJcblx0XHRcdGlmICggdmFsdWUgPT09IHRoaXMuZmllbGRUeXBlc1sgaSBdLnZhbHVlICkge1xyXG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdmFsdWUuaW5jbHVkZXMoIHRoaXMudGF4UHJlZml4ICkgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnRlcm1zUHJvcDtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tZXRhUHJvcDtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblxyXG5cdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlICkge1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLmZpZWxkc01hcCxcclxuXHRcdFx0WyB0aGlzLnByb3BzLmZpZWxkTmFtZSBdOiBuZXdWYWx1ZVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cclxuXHRvbkNoYW5nZVR5cGUoIG5ld1ZhbHVlICkge1xyXG5cdFx0bGV0IHZhbCA9IHRoaXMuZ2V0RmllbGRUeXBlKCBuZXdWYWx1ZSApO1xyXG5cclxuXHRcdHRoaXMuc2V0U3RhdGUoIHtcclxuXHRcdFx0dHlwZTogdmFsXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0aWYgKCB0aGlzLmlzVGVybU9yTWV0YSggdmFsICkgKSB7XHJcblx0XHRcdHZhbCA9ICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub25DaGFuZ2VWYWx1ZSggdmFsICk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRGlzYWJsZSByZWFzb246IEEgc2VsZWN0IHdpdGggYW4gb25jaGFuZ2UgdGhyb3dzIGEgd2FybmluZ1xyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1maWVsZHMtbWFwX19yb3dcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1wb3N0LWZpZWxkLWNvbnRyb2xcIj5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3R5cGVfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XHJcblx0XHRcdFx0XHRsYWJlbD17IHRoaXMucHJvcHMuZmllbGROYW1lIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5zdGF0ZS50eXBlIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVR5cGUgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZmllbGRUeXBlcyB9XHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNjBweCdcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyAoIHRoaXMubWV0YVByb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX25hbWVfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0XHRzdHlsZT17IHsgd2lkdGg6ICcyMDBweCcgfSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdHsgKCB0aGlzLnRlcm1zUHJvcCA9PT0gdGhpcy5zdGF0ZS50eXBlICkgJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtd2l0aG91dC1sYWJlbCdcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF90YXhfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5wcmVwYXJlZFRheGVzIH1cclxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cclxuXHRcdFx0XHQvPiB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKZXRGaWVsZHNNYXBDb250cm9sOyIsImNvbnN0IHtcclxuXHRcdCAgQmFzZUNvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbkZpZWxkc01hcCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGZpZWxkcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGxhYmVsID0gJ1tFbXB0eSBsYWJlbF0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNoaWxkcmVuID0gKCkgPT4ge30sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcGxhaW5IZWxwID0gJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgY3VzdG9tSGVscCA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9ICkge1xyXG5cclxuXHRyZXR1cm4gPEJhc2VDb250cm9sXHJcblx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdGtleT0namV0X2ZpZWxkc19tYXAnXHJcblx0PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxyXG5cdFx0XHR7ICggY3VzdG9tSGVscCAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VzdG9tSGVscCApICYmIGN1c3RvbUhlbHAoKSB9XHJcblxyXG5cdFx0XHR7IEJvb2xlYW4oIHBsYWluSGVscC5sZW5ndGggKSAmJiA8c3BhblxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfVxyXG5cdFx0XHQ+eyBwbGFpbkhlbHAgfTwvc3Bhbj4gfVxyXG5cclxuXHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGRJZCwgZmllbGREYXRhIF0sIGluZGV4ICkgPT4gPFJlYWN0LkZyYWdtZW50XHJcblx0XHRcdFx0a2V5PXsgYGZpZWxkX2luX21hcF8keyBmaWVsZElkICsgaW5kZXggfWAgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKSB9XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+ICkgfVxyXG5cdFx0PC9kaXY+XHJcblx0PC9CYXNlQ29udHJvbD5cclxufTtcclxuXHJcbiIsImNvbnN0IHtcclxuXHRcdCAgQnV0dG9uLFxyXG5cdFx0ICBCdXR0b25Hcm91cCxcclxuXHRcdCAgTW9kYWwsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gQWN0aW9uTW9kYWwoIHtcclxuXHRcdFx0XHRcdFx0ICBvblJlcXVlc3RDbG9zZSxcclxuXHRcdFx0XHRcdFx0ICBjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0ICB0aXRsZSxcclxuXHRcdFx0XHRcdFx0ICBjbGFzc05hbWVzID0gW10sXHJcblx0XHRcdFx0XHRcdCAgb25VcGRhdGVDbGljayxcclxuXHRcdFx0XHRcdFx0ICBvbkNhbmNlbENsaWNrLFxyXG5cdFx0XHRcdFx0XHQgIHVwZGF0ZUJ0bkxhYmVsID0gJ1VwZGF0ZScsXHJcblx0XHRcdFx0XHRcdCAgdXBkYXRlQnRuUHJvcHMgPSB7fSxcclxuXHRcdFx0XHRcdFx0ICBjYW5jZWxCdG5Qcm9wcyA9IHt9LFxyXG5cdFx0XHRcdFx0XHQgIGNhbmNlbEJ0bkxhYmVsID0gJ0NhbmNlbCcsXHJcblx0XHRcdFx0XHRcdCAgZml4ZWRIZWlnaHQgPSAnJyxcclxuXHRcdFx0XHRcdCAgfSApIHtcclxuXHJcblx0Y29uc3QgbW9kYWxDbGFzc2VzID0gWyAnamV0LWZvcm0tZWRpdC1tb2RhbCcsIC4uLmNsYXNzTmFtZXMgXTtcclxuXHJcblx0Y29uc3QgWyBhY3Rpb25DbGljaywgc2V0QWN0aW9uQ2xpY2sgXSA9IHVzZVN0YXRlKCBudWxsICk7XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBvblVwZGF0ZUNsaWNrICkge1xyXG5cdFx0XHRvblVwZGF0ZUNsaWNrKCk7XHJcblx0XHR9XHJcblx0XHRzZXRBY3Rpb25DbGljayggdHJ1ZSApXHJcblx0fVxyXG5cdGNvbnN0IGNhbmNlbENsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBvbkNhbmNlbENsaWNrICkge1xyXG5cdFx0XHRvbkNhbmNlbENsaWNrKCk7XHJcblx0XHR9XHJcblx0XHRzZXRBY3Rpb25DbGljayggZmFsc2UgKTtcclxuXHR9XHJcblxyXG5cdGxldCBzdHlsZSA9IHt9XHJcblx0aWYgKCBmaXhlZEhlaWdodCApIHtcclxuXHRcdHN0eWxlID0geyBoZWlnaHQ6IGZpeGVkSGVpZ2h0IH07XHJcblx0XHRtb2RhbENsYXNzZXMucHVzaCggJ2pldC1tb2RhbC1maXhlZC1oZWlnaHQnIClcclxuXHR9XHJcblxyXG5cdHJldHVybiA8TW9kYWxcclxuXHRcdG9uUmVxdWVzdENsb3NlPXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgbW9kYWxDbGFzc2VzLmpvaW4oICcgJyApIH1cclxuXHRcdHRpdGxlPXsgdGl0bGUgfVxyXG5cdFx0c3R5bGU9eyBzdHlsZSB9XHJcblx0PlxyXG5cdFx0eyAhIGNoaWxkcmVuICYmIDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fY29udGVudFwiXHJcblx0XHQ+XHJcblx0XHRcdHsgJ0FjdGlvbiBjYWxsYmFjayBpcyBub3QgZm91bmQuJyB9XHJcblx0XHQ8L2Rpdj4gfVxyXG5cdFx0eyBjaGlsZHJlbiAmJiA8ZGl2IGNsYXNzTmFtZT0namV0LWZvcm0tZWRpdC1tb2RhbF9fd3JhcHBlcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fY29udGVudFwiPlxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgfVxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxCdXR0b25Hcm91cFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2FjdGlvbnNcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgdXBkYXRlQ2xpY2sgfVxyXG5cdFx0XHRcdFx0eyAuLi51cGRhdGVCdG5Qcm9wcyB9XHJcblx0XHRcdFx0PnsgdXBkYXRlQnRuTGFiZWwgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAnMCAwIDAgMTBweCcsXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyBjYW5jZWxDbGljayB9XHJcblx0XHRcdFx0XHR7IC4uLmNhbmNlbEJ0blByb3BzIH1cclxuXHRcdFx0XHQ+eyBjYW5jZWxCdG5MYWJlbCB9PC9CdXR0b24+XHJcblx0XHRcdDwvQnV0dG9uR3JvdXA+XHJcblx0XHQ8L2Rpdj4gfVxyXG5cdDwvTW9kYWw+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25Nb2RhbDsiLCJjb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBCYXNlQ29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VTdGF0ZSxcclxuXHRcdCAgdXNlRWZmZWN0LFxyXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZnVuY3Rpb24gQWN0aW9uTWVzc2FnZXMoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgc2V0dGluZ3MsXHJcblx0XHRcdCAgc291cmNlLFxyXG5cdFx0XHQgIGdldE1hcEZpZWxkLFxyXG5cdFx0XHQgIHNldE1hcEZpZWxkLFxyXG5cdFx0XHQgIG1lc3NhZ2VzLFxyXG5cdFx0XHQgIG9uQ2hhbmdlU2V0dGluZyxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggISBzZXR0aW5ncyB8fCAhIHNldHRpbmdzLm1lc3NhZ2VzICkge1xyXG5cdFx0XHRjb25zdCBtZXNzYWdlcyA9IHt9O1xyXG5cclxuXHRcdFx0T2JqZWN0LmVudHJpZXMoIHNvdXJjZS5fX21lc3NhZ2VzICkuZm9yRWFjaCggKCBbIHR5cGUsIGRhdGEgXSApID0+IHtcclxuXHRcdFx0XHRtZXNzYWdlc1sgdHlwZSBdID0gZGF0YS52YWx1ZTtcclxuXHRcdFx0fSApXHJcblxyXG5cdFx0XHRvbkNoYW5nZVNldHRpbmcoIG1lc3NhZ2VzLCAnbWVzc2FnZXMnICk7XHJcblx0XHR9XHJcblx0fSwgW10gKTtcclxuXHJcblx0Y29uc3Qgc2V0TWVzc2FnZSA9ICggdmFsdWUsIG5hbWVGaWVsZCApID0+IHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXNzYWdlcyc7XHJcblxyXG5cdFx0c2V0TWFwRmllbGQoIHsgdmFsdWUsIG5hbWVGaWVsZCwgc291cmNlIH0gKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRNZXNzYWdlID0gbmFtZSA9PiB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSAnbWVzc2FnZXMnO1xyXG5cclxuXHRcdHJldHVybiBnZXRNYXBGaWVsZCggeyBuYW1lLCBzb3VyY2UgfSApXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0bGFiZWw9eyBfXyggJ01lc3NhZ2VzIFNldHRpbmdzOicgKSB9XHJcblx0XHRrZXk9J21lc3NhZ2VzX3NldHRpbmdzX2ZpZWxkcydcclxuXHQ+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCc+XHJcblx0XHRcdHsgc2V0dGluZ3MubWVzc2FnZXMgJiYgT2JqZWN0LmVudHJpZXMoIHNldHRpbmdzLm1lc3NhZ2VzIClcclxuXHRcdFx0XHQubWFwKCAoIFsgdHlwZSwgZGF0YSBdLCBpZCApID0+IDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93XCJcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ21lc3NhZ2VfJyArIHR5cGUgKyBpZCB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IHR5cGUgKyBpZCB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBtZXNzYWdlcyggdHlwZSApLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGdldE1lc3NhZ2UoIHR5cGUgKSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRNZXNzYWdlKCBuZXdWYWx1ZSwgdHlwZSApIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PixcclxuXHRcdFx0XHQpIH1cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQ8L0Jhc2VDb250cm9sPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTWVzc2FnZXM7IiwiZnVuY3Rpb24gUGxhY2Vob2xkZXJNZXNzYWdlKCB7IHN0eWxlLCBjaGlsZHJlbiB9ICkge1xyXG5cdGNvbnN0IHByb3BTdHlsZSA9IHtcclxuXHRcdGZvbnRTaXplOiAnMS41ZW0nLFxyXG5cdFx0cGFkZGluZzogJzJlbScsXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnYWxpY2VibHVlJyxcclxuXHRcdC4uLnN0eWxlXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxwIHN0eWxlPXsgcHJvcFN0eWxlIH0+eyBjaGlsZHJlbiB9PC9wPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhY2Vob2xkZXJNZXNzYWdlOyIsImZ1bmN0aW9uIEJhc2VIZWxwKCB7XHJcblx0XHRcdFx0XHQgICBjaGlsZHJlbixcclxuXHRcdFx0XHRcdCAgIHN0eWxlID0ge30sXHJcblx0XHRcdFx0ICAgfSApIHtcclxuXHRyZXR1cm4gPHBcclxuXHRcdGNsYXNzTmFtZT17ICdqZXQtZmItYmFzZS1jb250cm9sX19oZWxwJyB9XHJcblx0XHRzdHlsZT17IHtcclxuXHRcdFx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRcdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcclxuXHRcdFx0Y29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcwcHgnLFxyXG5cdFx0XHQuLi5zdHlsZSxcclxuXHRcdH0gfVxyXG5cdD5cclxuXHRcdHsgY2hpbGRyZW4gfVxyXG5cdDwvcD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VIZWxwOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250cm9sc1NldHRpbmdzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcy5jb250cm9scycsIHtcclxuXHRcImdlbmVyYWxcIjoge1xyXG5cdFx0bGFiZWw6IF9fKCAnR2VuZXJhbCcgKSxcclxuXHRcdGF0dHJzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwibGFiZWxcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGaWVsZCBMYWJlbFwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwibmFtZVwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZvcm0gZmllbGQgbmFtZVwiICksXHJcblx0XHRcdFx0XCJoZWxwXCI6IF9fKCBcIlNob3VsZCBjb250YWluIG9ubHkgTGF0aW4gbGV0dGVycywgbnVtYmVycywgYC1gIG9yIGBfYCBjaGFycywgbm8gc3BhY2VzIG9ubHkgbG93ZXIgY2FzZVwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiZGVzY1wiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZpZWxkIERlc2NyaXB0aW9uXCIgKSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJkZWZhdWx0XCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiZHluYW1pY190ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJEZWZhdWx0IFZhbHVlXCIgKSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHRcInRvb2xiYXJcIjoge1xyXG5cdFx0YXR0cnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRvZ2dsZVwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiSXMgUmVxdWlyZWRcIiApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdFwiYWR2YW5jZWRcIjoge1xyXG5cdFx0bGFiZWw6IF9fKCAnQWR2YW5jZWQnICksXHJcblx0XHRhdHRyczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInBsYWNlaG9sZGVyXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiUGxhY2Vob2xkZXJcIiApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImFkZF9wcmV2XCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidG9nZ2xlXCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJBZGQgUHJldiBQYWdlIEJ1dHRvblwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwicHJldl9sYWJlbFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIlByZXYgUGFnZSBCdXR0b24gTGFiZWxcIiApLFxyXG5cdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiYWRkX3ByZXZcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJ2aXNpYmlsaXR5XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGaWVsZCBWaXNpYmlsaXR5XCIgKSxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJzZWxlY3RcIixcclxuXHRcdFx0XHRcIm9wdGlvbnNcIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiYWxsXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRm9yIGFsbFwiICksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwibG9nZ2VkX2lkXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgbG9nZ2VkIGluIHVzZXJzXCIgKSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJub3RfbG9nZ2VkX2luXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgTk9ULWxvZ2dlZCBpbiB1c2Vyc1wiICksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiY2xhc3NfbmFtZVwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkNTUyBDbGFzcyBOYW1lXCIgKSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufSApXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmxvY2tDb250cm9scyggdHlwZSA9ICdhbGwnICkge1xyXG5cdGlmICggISB0eXBlICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRjb25zdCBjb250cm9scyA9IENvbnRyb2xzU2V0dGluZ3MoKTtcclxuXHJcblx0aWYgKCAnYWxsJyA9PT0gdHlwZSApIHtcclxuXHRcdHJldHVybiBjb250cm9scztcclxuXHR9XHJcblxyXG5cdGlmICggY29udHJvbHNbIHR5cGUgXVxyXG5cdFx0JiYgY29udHJvbHNbIHR5cGUgXS5hdHRyc1xyXG5cdFx0JiYgQXJyYXkuaXNBcnJheSggY29udHJvbHNbIHR5cGUgXS5hdHRycyApXHJcblx0XHQmJiAwIDwgY29udHJvbHNbIHR5cGUgXS5hdHRycy5sZW5ndGhcclxuXHQpIHtcclxuXHRcdHJldHVybiBjb250cm9sc1sgdHlwZSBdLmF0dHJzO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59IiwiaW1wb3J0IHsgQ29udHJvbHNTZXR0aW5ncyB9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSBcIi4vZmllbGQtd2l0aC1wcmVzZXRcIjtcclxuaW1wb3J0IER5bmFtaWNQcmVzZXQgZnJvbSBcIi4uL3ByZXNldHMvZHluYW1pYy1wcmVzZXRcIjtcclxuaW1wb3J0IHtcclxuXHRnZXRDb252ZXJ0ZWROYW1lLFxyXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvdG9vbHMnO1xyXG5pbXBvcnQgeyB1c2VTdWNjZXNzTm90aWNlIH0gZnJvbSAnLi4vLi4vaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXInO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBCbG9ja0NvbnRyb2xzLFxyXG5cdFx0ICBSaWNoVGV4dCxcclxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VTdGF0ZSxcclxuXHRcdCAgdXNlRWZmZWN0LFxyXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZURpc3BhdGNoLFxyXG5cdCAgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBTZWxlY3RDb250cm9sLFxyXG5cdFx0ICBQYW5lbEJvZHksXHJcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXHJcblx0XHQgIFRvb2xiYXJHcm91cCxcclxuXHRcdCAgRmxleCxcclxuXHRcdCAgQmFzZUNvbnRyb2wsXHJcblx0XHQgIF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcclxuXHRcdCAgQ2xpcGJvYXJkQnV0dG9uLFxyXG5cdFx0ICBTbmFja2JhcixcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZpZWxkQ29udHJvbCgge1xyXG5cdFx0XHRcdFx0XHQgICB0eXBlLFxyXG5cdFx0XHRcdFx0XHQgICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0XHQgICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0XHQgICBhdHRyc1NldHRpbmdzID0ge30sXHJcblx0XHRcdFx0XHRcdCAgIGVkaXRQcm9wczoge1xyXG5cdFx0XHRcdFx0XHRcdCAgIGF0dHJIZWxwID0gKCkgPT4gJycsXHJcblx0XHRcdFx0XHRcdFx0ICAgYmxvY2tOYW1lID0gJycsXHJcblx0XHRcdFx0XHRcdCAgIH0sXHJcblx0XHRcdFx0XHQgICB9ICkge1xyXG5cdGNvbnN0IGNvbnRyb2xzID0gQ29udHJvbHNTZXR0aW5ncygpO1xyXG5cclxuXHRpZiAoICEgY29udHJvbHNbIHR5cGUgXSApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY3VycmVudENvbnRyb2wgPSBjb250cm9sc1sgdHlwZSBdO1xyXG5cclxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0c2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiB2YWx1ZSB9ICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaXNWYWxpZENvbmRpdGlvbiA9ICggYXR0ciApID0+IHtcclxuXHRcdGlmICggISBhdHRyLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBibG9ja05hbWUgJiYgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICkge1xyXG5cdFx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICYmIGJsb2NrTmFtZSAhPT0gYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lXHJcblx0XHRcdFx0JiYgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lLmxlbmd0aFxyXG5cdFx0XHRcdCYmICEgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lLmluY2x1ZGVzKCBibG9ja05hbWUgKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBvYmplY3ROb3RNYXRjaCA9ICggZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5hdHRyICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHsgb3BlcmF0b3IgPSAnYW5kJywgaXRlbXMgPSB7fSB9ID0gYXR0ci5jb25kaXRpb24uYXR0clxyXG5cclxuXHRcdFx0aWYgKCAnb3InID09PSBvcGVyYXRvci50b0xvd2VyQ2FzZSgpICkge1xyXG5cdFx0XHRcdGZvciAoIGNvbnN0IGF0dHJUb0NvbXBhcmUgaW4gaXRlbXMgKSB7XHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZUNvbXBhcmUgPSBpdGVtc1sgYXR0clRvQ29tcGFyZSBdO1xyXG5cclxuXHRcdFx0XHRcdGlmICggdmFsdWVDb21wYXJlID09PSBhdHRyaWJ1dGVzWyBhdHRyVG9Db21wYXJlIF0gKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCAnYW5kJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gKCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGZvciAoIGNvbnN0IGF0dHJUb0NvbXBhcmUgaW4gaXRlbXMgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggaXRlbXNbIGF0dHJUb0NvbXBhcmUgXSAhPT0gYXR0cmlidXRlc1sgYXR0clRvQ29tcGFyZSBdICkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fSApKClcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9ICkoKVxyXG5cclxuXHRcdGlmICggISBvYmplY3ROb3RNYXRjaFxyXG5cdFx0XHR8fCAoXHJcblx0XHRcdFx0J3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5hdHRyXHJcblx0XHRcdFx0JiYgYXR0ci5jb25kaXRpb24uYXR0clxyXG5cdFx0XHRcdCYmICEgYXR0cmlidXRlc1sgYXR0ci5jb25kaXRpb24uYXR0ciBdXHJcblx0XHRcdClcclxuXHRcdFx0fHwgKFxyXG5cdFx0XHRcdCdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb25cclxuXHRcdFx0XHQmJiAhIGF0dHJpYnV0ZXNbIGF0dHIuY29uZGl0aW9uIF1cclxuXHRcdFx0KVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gY3VycmVudENvbnRyb2wuYXR0cnMubWFwKCAoIHsgaGVscCA9ICcnLCBhdHRyTmFtZSwgbGFiZWwsIC4uLmF0dHIgfSApID0+IHtcclxuXHJcblx0XHRjb25zdCBpc1JlZ2lzdGVyQXR0cmlidXRlID0gKCBhdHRyTmFtZSBpbiBhdHRyaWJ1dGVzICk7XHJcblx0XHRjb25zdCB2YWxpZENvbmRpdGlvbiA9IGlzVmFsaWRDb25kaXRpb24oIGF0dHIgKTtcclxuXHRcdGNvbnN0IGlzSGlkZGVuID0gKFxyXG5cdFx0XHRhdHRyTmFtZSBpbiBhdHRyc1NldHRpbmdzXHJcblx0XHRcdCYmICdzaG93JyBpbiBhdHRyc1NldHRpbmdzWyBhdHRyTmFtZSBdXHJcblx0XHRcdCYmIGZhbHNlID09PSBhdHRyc1NldHRpbmdzWyBhdHRyTmFtZSBdLnNob3dcclxuXHRcdCk7XHJcblxyXG5cclxuXHJcblx0XHRpZiAoICEgaXNSZWdpc3RlckF0dHJpYnV0ZSB8fCAhIHZhbGlkQ29uZGl0aW9uIHx8IGlzSGlkZGVuICkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKCBhdHRyLnR5cGUgKSB7XHJcblx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdHJldHVybiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRleHRDb250cm9sYCB9XHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lICkgfVxyXG5cdFx0XHRcdFx0b25CbHVyPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoICdsYWJlbCcgPT09IGF0dHJOYW1lXHJcblx0XHRcdFx0XHRcdFx0JiYgMSA8IGF0dHJpYnV0ZXMubGFiZWwubGVuZ3RoXHJcblx0XHRcdFx0XHRcdFx0JiYgKCAhIGF0dHJpYnV0ZXMubmFtZSB8fCAnZmllbGRfbmFtZScgPT09IGF0dHJpYnV0ZXMubmFtZSApXHJcblx0XHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIGdldENvbnZlcnRlZE5hbWUoIGF0dHJpYnV0ZXMubGFiZWwgKSwgJ25hbWUnICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+O1xyXG5cdFx0XHRjYXNlICdkeW5hbWljX3RleHQnOlxyXG5cdFx0XHRcdHJldHVybiA8RmllbGRXaXRoUHJlc2V0XHJcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1GaWVsZFdpdGhQcmVzZXRgIH1cclxuXHRcdFx0XHRcdE1vZGFsRWRpdG9yPXsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPER5bmFtaWNQcmVzZXRcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxyXG5cdFx0XHRcdFx0XHRvblNhdmVQcmVzZXQ9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1UZXh0Q29udHJvbER5bmFtaWNgIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHRcdGhlbHA9eyBoZWxwIHx8IGF0dHJIZWxwKCBhdHRyTmFtZSApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9GaWVsZFdpdGhQcmVzZXQ+O1xyXG5cdFx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRcdHJldHVybiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tU2VsZWN0Q29udHJvbGAgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IGF0dHIub3B0aW9ucyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz47XHJcblx0XHRcdGNhc2UgJ3RvZ2dsZSc6XHJcblx0XHRcdFx0cmV0dXJuIDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1Ub2dnbGVDb250cm9sYCB9XHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIHx8IGF0dHJIZWxwKCBhdHRyTmFtZSApIH1cclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPjtcclxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcclxuXHRcdFx0XHRyZXR1cm4gPEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1CYXNlQ29udHJvbGAgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tTnVtYmVyQ29udHJvbGAgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggTnVtYmVyKCBuZXdWYWwgKSwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHAnIH1cclxuXHRcdFx0XHRcdCAgIHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHQgICBjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXHJcblx0XHRcdFx0XHQgICB9IH0+eyBoZWxwIHx8IGF0dHJIZWxwKCBhdHRyTmFtZSApIH08L3A+XHJcblx0XHRcdFx0PC9CYXNlQ29udHJvbD47XHJcblx0XHR9XHJcblxyXG5cdH0gKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdlbmVyYWxGaWVsZHMoIHByb3BzICkge1xyXG5cdGNvbnN0IGN1cnJlbnRDb250cm9sID0gQ29udHJvbHNTZXR0aW5ncygpLmdlbmVyYWw7XHJcblxyXG5cdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgY3VycmVudENvbnRyb2wubGFiZWwgfSBrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1maWVsZHMnIH0+XHJcblx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdHR5cGU9J2dlbmVyYWwnXHJcblx0XHRcdGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWZpZWxkcy1jb21wb25lbnQnIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdjdXN0b21fZ2VuZXJhbCdcclxuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWdlbmVyYWwtY3VzdG9tLWZpZWxkcy1jb21wb25lbnQnIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdDwvUGFuZWxCb2R5PjtcclxufVxyXG5cclxuZnVuY3Rpb24gQWR2YW5jZWRGaWVsZHMoIHByb3BzICkge1xyXG5cdGNvbnN0IGN1cnJlbnRDb250cm9sID0gQ29udHJvbHNTZXR0aW5ncygpLmFkdmFuY2VkO1xyXG5cclxuXHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IGN1cnJlbnRDb250cm9sLmxhYmVsIH0ga2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWZpZWxkcycgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XHJcblx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdHR5cGU9J2FkdmFuY2VkJ1xyXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tYWR2YW5jZWQtZmllbGRzLWNvbXBvbmVudCcgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+XHJcblx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdHR5cGU9J2N1c3RvbV9hZHZhbmNlZCdcclxuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWN1c3RvbS1maWVsZHMtY29tcG9uZW50JyB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHQ8L1BhbmVsQm9keT47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRvb2xCYXJGaWVsZHMoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSxcclxuXHRcdFx0ICBjaGlsZHJlbiAgICA9IFtdLFxyXG5cdFx0XHQgIGRpc3BsYXlOYW1lID0gdHJ1ZSxcclxuXHRcdFx0ICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgZGlzcGxheU5vdGljZSA9IHVzZVN1Y2Nlc3NOb3RpY2UoIGBDb3BpZWQgXCIkeyBhdHRyaWJ1dGVzLm5hbWUgfVwiIHRvIGNsaXBib2FyZC5gICk7XHJcblxyXG5cdHJldHVybiA8QmxvY2tDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcy1CbG9ja0NvbnRyb2xzJyApIH0+XHJcblx0XHQ8VG9vbGJhckdyb3VwIGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzLVRvb2xiYXJHcm91cCcgKSB9PlxyXG5cdFx0XHQ8RmxleFxyXG5cdFx0XHRcdGFsaWduPXsgJ2NlbnRlcicgfVxyXG5cdFx0XHRcdGp1c3RpZnk9eyAnY2VudGVyJyB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXRvZ2dsZS1ib3gnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgZGlzcGxheU5hbWUgJiYgPD5cclxuXHRcdFx0XHRcdDxDbGlwYm9hcmRCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRpY29uPSdhZG1pbi1wYWdlJ1xyXG5cdFx0XHRcdFx0XHRzaG93VG9vbHRpcFxyXG5cdFx0XHRcdFx0XHRzaG9ydGN1dD0nQ29weSBuYW1lJ1xyXG5cdFx0XHRcdFx0XHR0ZXh0PXsgYXR0cmlidXRlcy5uYW1lIH1cclxuXHRcdFx0XHRcdFx0b25Db3B5PXsgKCkgPT4gZGlzcGxheU5vdGljZSggdHJ1ZSApIH1cclxuXHRcdFx0XHRcdFx0b25GaW5pc2hDb3B5PXsgKCkgPT4gZGlzcGxheU5vdGljZSggZmFsc2UgKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5uYW1lIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuYW1lID0+IHNldEF0dHJpYnV0ZXMoIHsgbmFtZSB9ICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Lz4gfVxyXG5cdFx0XHRcdDxGaWVsZENvbnRyb2xcclxuXHRcdFx0XHRcdHR5cGU9J3Rvb2xiYXInXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnamV0LWZvcm0tdG9vbGJhci1maWVsZHMtY29tcG9uZW50JyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHRcdDwvRmxleD5cclxuXHRcdDwvVG9vbGJhckdyb3VwPlxyXG5cdDwvQmxvY2tDb250cm9scz47XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzLFxyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEZpZWxkQ29udHJvbCxcclxufTsiLCJpbXBvcnQgeyBGaWVsZENvbnRyb2wgfSBmcm9tICcuL2ZpZWxkLWNvbnRyb2wnO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuY29uc3QgeyBQYW5lbEJvZHkgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWVsZFNldHRpbmdzV3JhcHBlciggcHJvcHMgKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIHRpdGxlLFxyXG5cdFx0XHQgIGNoaWxkcmVuLFxyXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5ID0gdmFsID0+IHZhbCB9LFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiA8UGFuZWxCb2R5XHJcblx0XHR0aXRsZT17IHRpdGxlIHx8IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdD5cclxuXHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdjdXN0b21fc2V0dGluZ3MnXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdjdXN0b21TZXR0aW5nc0ZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHQ8L1BhbmVsQm9keT47XHJcbn0iLCJpbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSBcIi4uL2FjdGlvbi1tb2RhbFwiO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBQYXRoLFxyXG5cdFx0ICBTVkcsXHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gRmllbGRXaXRoUHJlc2V0KCB7XHJcblx0XHRcdFx0XHRcdFx0ICBjaGlsZHJlbiA9IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0ICBNb2RhbEVkaXRvcixcclxuXHRcdFx0XHRcdFx0XHQgIHRyaWdnZXJDbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0ICBiYXNlQ29udHJvbFByb3BzID0ge30sXHJcblx0XHRcdFx0XHRcdCAgfSApIHtcclxuXHJcblx0Y29uc3QgWyBtb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlTW9kYWxTdGF0ZSA9ICgpID0+IHtcclxuXHRcdHNldE1vZGFsU3RhdGUoIHByZXYgPT4gISBwcmV2ICk7XHJcblx0fTtcclxuXHRjb25zdCBjbGFzc05hbWVzID0gWyAnamV0LWZvcm0tZHluYW1pYy1wcmVzZXRfX3RyaWdnZXInLCAuLi50cmlnZ2VyQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1keW5hbWljLXByZXNldFwiXHJcblx0XHRcdHsgLi4uYmFzZUNvbnRyb2xQcm9wcyB9XHJcblx0XHQ+XHJcblx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lcyB9XHJcblx0XHRcdFx0b25DbGljaz17IGNoYW5nZU1vZGFsU3RhdGUgfVxyXG5cdFx0XHQ+PFNWRyB2aWV3Qm94PVwiMCAwIDU0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PFBhdGhcclxuXHRcdFx0XHRkPVwiTTQyLjYzOTYgMjYuNDM0N0MzNy44NjgyIDI3LjM0MzYgMzIuNTY2NiAyOC4wMjUyIDI3LjE4OTQgMjguMDI1MkMyMS44MTIxIDI4LjAyNTIgMTYuNDM0OCAyNy4zNDM2IDExLjczOTEgMjYuNDM0N0M2Ljk2Nzc0IDI1LjQ1MDIgMy4xODA5MyAyMy44NTk3IDAuMzc4NjggMjEuOTY2M0wwLjM3ODY4IDI4LjAyNTJDMC4zNzg2OCAyOS41Mzk5IDEuNTkwNDYgMzEuMTMwNCAzLjc4NjgyIDMyLjQxNzlDNS45ODMxNyAzMy43MDU0IDkuNDY3MDQgMzQuOTE3MiAxMy42MzI1IDM1LjU5ODhDMTcuNzk4IDM2LjI4MDUgMjIuMTE1IDM2LjgxMDYgMjcuMTg5NCAzNi44MTA2QzMyLjI2MzcgMzYuODEwNiAzNi42NTY0IDM2LjUwNzcgNDAuNzQ2MiAzNS41OTg4QzQ0LjgzNTkgMzQuNjkgNDguMzE5OCAzMy43MDU0IDUwLjUxNjIgMzIuNDE3OUM1Mi43MTI1IDMxLjEzMDQgNTQgMjkuNTM5OSA1NCAyOC4wMjUyTDU0IDIxLjk2NjNDNTEuMTIyIDIzLjg1OTcgNDcuMzM1MiAyNS40NTAyIDQyLjYzOTYgMjYuNDM0N1pNNDIuNjM5NiA1My41NDg0QzM3Ljg2ODIgNTQuNTMyOSAzMi41NjY2IDU1LjEzODggMjcuMTg5NCA1NS4xMzg4QzIxLjgxMjEgNTUuMTM4OCAxNi40MzQ4IDU0LjUzMjkgMTEuNzM5MSA1My41NDg0QzcuMDQzNDggNTIuNTYzOCAzLjE4MDkzIDUxLjA0OTEgMC4zNzg2ODIgNDkuMTU1NkwwLjM3ODY4MiA1NS4xMzg4QzAuMzc4NjgzIDU2LjcyOTMgMS41OTA0NiA1OC4zMTk3IDMuNzg2ODIgNTkuNTMxNUM2LjM2MTg2IDYwLjgxOSA5LjQ2NzA1IDYyLjEwNjYgMTMuNjMyNSA2Mi43MTI1QzE3LjcyMjMgNjMuNjk3IDIyLjExNSA2NCAyNy4xODk0IDY0QzMyLjI2MzcgNjQgMzYuNjU2NCA2My42OTcgNDAuNzQ2MiA2Mi43MTI1QzQ0LjgzNTkgNjEuODAzNiA0OC4zMTk4IDYwLjgxOSA1MC41MTYyIDU5LjUzMTVDNTIuNzEyNSA1Ny45NDExIDU0IDU2LjcyOTMgNTQgNTQuODM1OUw1NCA0OC44NTI3QzUxLjEyMiA1MS4wNDkxIDQ3LjMzNTIgNTIuMjYwOCA0Mi42Mzk2IDUzLjU0ODRaTTQyLjYzOTYgMzkuOTkxNUMzNy44NjgyIDQwLjkwMDQgMzIuNTY2NiA0MS41ODIgMjcuMTg5NCA0MS41ODJDMjEuODEyMSA0MS41ODIgMTYuNDM0OCA0MC45MDA0IDExLjczOTEgMzkuOTkxNUM2Ljk2Nzc0IDM5LjAwNyAzLjE4MDkzIDM3LjQ5MjIgMC4zNzg2ODEgMzUuNTk4OEwwLjM3ODY4MSA0MS41ODJDMC4zNzg2ODEgNDMuMTcyNSAxLjU5MDQ2IDQ0LjY4NzIgMy43ODY4MiA0NS45NzQ3QzYuMzYxODUgNDcuMjYyMiA5LjQ2NzA1IDQ4LjQ3NCAxMy42MzI1IDQ5LjE1NTZDMTcuNzIyMyA1MC4wNjQ1IDIyLjExNSA1MC4zNjc0IDI3LjE4OTQgNTAuMzY3NEMzMi4yNjM3IDUwLjM2NzQgMzYuNjU2NCA1MC4wNjQ1IDQwLjc0NjIgNDkuMTU1NkM0NC44MzU5IDQ4LjE3MTEgNDguMzE5OCA0Ny4yNjIyIDUwLjUxNjIgNDUuOTc0N0M1Mi43MTI1IDQ0LjM4NDMgNTQgNDMuMTcyNSA1NCA0MS41ODJMNTQgMzUuNTk4OEM1MS4xMjIgMzcuNDkyMiA0Ny4zMzUyIDM5LjAwNyA0Mi42Mzk2IDM5Ljk5MTVaTTQwLjQ0MzIgMi4xMjMzN0MzNi4zNTM1IDEuMTM4NzkgMzEuODg1IDAuODM1ODQ4IDI2Ljg4NjQgMC44MzU4NDlDMjEuODg3OCAwLjgzNTg0OSAxNy40MTk0IDEuMTM4NzkgMTMuMjUzOSAyLjEyMzM3QzkuMDg4MzYgMy4xMDc5NCA1LjY4MDIyIDQuMDE2NzggMy40ODM4NyA1LjMwNDNDMS4yODc1MSA2LjU5MTgxIC0zLjQ3ODJlLTA2IDguMTA2NTQgLTMuMzM5MTZlLTA2IDkuNjk3TC0yLjk1NTEzZS0wNiAxNC4wODk3Qy0yLjgxNjA5ZS0wNiAxNS42ODAyIDEuMjg3NTIgMTcuMjcwNiAzLjQ4Mzg3IDE4LjU1ODJDNi4wNTg5MSAxOS43Njk5IDkuMTY0MSAyMS4wNTc1IDEzLjI1MzkgMjEuNjYzM0MxNy4zNDM2IDIyLjI2OTIgMjEuODEyMSAyMi45NTA5IDI2Ljg4NjQgMjIuOTUwOUMzMS45NjA3IDIyLjk1MDkgMzYuMzUzNSAyMi45NTA5IDQwLjQ0MzIgMjIuMzQ1QzQ0LjUzMyAyMS43MzkxIDQ4LjAxNjkgMjAuNDUxNiA1MC4yMTMyIDE5LjE2NEM1Mi43MTI1IDE3LjU3MzYgNTQgMTUuOTgzMSA1NCAxNC4zOTI3TDU0IDkuOTk5OTVDNTQgOC40MDk0OCA1Mi43MTI1IDYuODE5MDIgNTAuNTE2MiA1LjYwNzI0QzQ4LjMxOTggNC4zOTU0NiA0NC41MzMgMi43MjkyNiA0MC40NDMyIDIuMTIzMzdaXCJcclxuXHRcdFx0XHRmaWxsPVwiIzdFODk5M1wiLz48L1NWRz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0eyBtb2RhbFN0YXRlICYmIChcclxuXHRcdFx0PEFjdGlvbk1vZGFsXHJcblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cclxuXHRcdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxyXG5cdFx0XHRcdHRpdGxlPXsgJ0VkaXQgUHJlc2V0JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IG1vZGFsUHJvcHMgPT4gPE1vZGFsRWRpdG9yXHJcblx0XHRcdFx0XHR7IC4uLm1vZGFsUHJvcHMgfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0PC9BY3Rpb25Nb2RhbD5cclxuXHRcdCkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGRXaXRoUHJlc2V0OyIsImltcG9ydCB7XHJcblx0Y2xhc3NuYW1lcyxcclxuXHRnZXRDb252ZXJ0ZWROYW1lLFxyXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvdG9vbHMnO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBCYXNlQ29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB3aXRoU2VsZWN0LFxyXG5cdCAgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFJpY2hUZXh0LFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIFJpY2hEZXNjcmlwdGlvbiggY29udGVudCApIHtcclxuXHRyZXR1cm4gPHNtYWxsIHN0eWxlPXsge1xyXG5cdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcblx0XHRwYWRkaW5nOiAnMC4yZW0gMC44ZW0gMCAwJyxcclxuXHRcdGNvbG9yOiAnIzhlOGE4YScsXHJcblx0fSB9PlxyXG5cdFx0eyBjb250ZW50IH1cclxuXHQ8L3NtYWxsPjtcclxufVxyXG5cclxuZnVuY3Rpb24gRmllbGRXcmFwcGVyKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYmxvY2tOYW1lID0gJycgfSxcclxuXHRcdFx0ICBjaGlsZHJlbixcclxuXHRcdFx0ICB3cmFwQ2xhc3NlcyAgICAgICA9IFtdLFxyXG5cdFx0XHQgIHZhbHVlSWZFbXB0eUxhYmVsID0gJycsXHJcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcclxuXHRcdFx0ICBjaGlsZHJlblBvc2l0aW9uICA9ICdiZXR3ZWVuJyxcclxuXHRcdFx0ICBfamZfYXJncyxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBzZXREeW5hbWljTmFtZSA9ICgpID0+IHtcclxuXHRcdGlmICggMSA8IGF0dHJpYnV0ZXMubGFiZWwubGVuZ3RoXHJcblx0XHRcdCYmICggISBhdHRyaWJ1dGVzLm5hbWUgfHwgJ2ZpZWxkX25hbWUnID09PSBhdHRyaWJ1dGVzLm5hbWUgKVxyXG5cdFx0KSB7XHJcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbmFtZTogZ2V0Q29udmVydGVkTmFtZSggYXR0cmlidXRlcy5sYWJlbCApIH0gKVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIHJlbmRlckxhYmVsKCkge1xyXG5cdFx0cmV0dXJuIDxCYXNlQ29udHJvbC5WaXN1YWxMYWJlbD5cclxuXHRcdFx0eyBSaWNoRGVzY3JpcHRpb24oIF9fKCAnaW5wdXQgbGFiZWw6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKSB9XHJcblx0XHRcdDxkaXYgb25CbHVyPXsgc2V0RHluYW1pY05hbWUgfSBjbGFzc05hbWU9J2pldC1mb3JtLWJ1aWxkZXJfX2xhYmVsJz5cclxuXHRcdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdyaWNoLWxhYmVsJyApIH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdMYWJlbC4uLidcclxuXHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhYmVsID8gYXR0cmlidXRlcy5sYWJlbCA6IHZhbHVlSWZFbXB0eUxhYmVsIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3TGFiZWwgPT4gc2V0QXR0cmlidXRlcyggeyBsYWJlbDogbmV3TGFiZWwgfSApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgYXR0cmlidXRlcy5yZXF1aXJlZCAmJiA8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fcmVxdWlyZWQnIH0+XHJcblx0XHRcdFx0XHR7IF9qZl9hcmdzLnJlcXVpcmVkX21hcmsgPyBfamZfYXJncy5yZXF1aXJlZF9tYXJrIDogJyonIH1cclxuXHRcdFx0XHQ8L3NwYW4+IH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0Jhc2VDb250cm9sLlZpc3VhbExhYmVsPjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlbmRlckRlc2NyaXB0aW9uKCkge1xyXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9eyB7IGRpc3BsYXk6ICdmbGV4JyB9IH0+XHJcblx0XHRcdHsgUmljaERlc2NyaXB0aW9uKCBfXyggJ2lucHV0IGRlc2NyaXB0aW9uOicsICdqZXQtZm9ybS1idWlsZGVyJyApICkgfVxyXG5cdFx0XHQ8QmFzZUNvbnRyb2wga2V5PXsgJ2N1c3RvbV9oZWxwX2Rlc2NyaXB0aW9uJyB9IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19kZXNjJyB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscCc+XHJcblx0XHRcdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3JpY2gtZGVzY3JpcHRpb24nICkgfVxyXG5cdFx0XHRcdFx0XHR0YWdOYW1lPSdzbWFsbCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0Rlc2NyaXB0aW9uLi4uJ1xyXG5cdFx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRlc2MgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGRlc2MgPT4gc2V0QXR0cmlidXRlcyggeyBkZXNjIH0gKSB9XHJcblx0XHRcdFx0XHRcdHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcwcHgnIH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdGlmICggJ3JvdycgPT09IF9qZl9hcmdzLmZpZWxkc19sYXlvdXQgKSB7XHJcblx0XHR3cmFwQ2xhc3Nlcy5wdXNoKCAnamV0LWZvcm0tYnVpbGRlci1yb3dfX2ZsZXgnICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZUhvbGRlcl9ibG9jaycgKSB9XHJcblx0XHRcdGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyLXJvdycsXHJcblx0XHRcdFx0d3JhcENsYXNzZXMsXHJcblx0XHRcdCkgfVxyXG5cdFx0PlxyXG5cdFx0XHR7ICdyb3cnICE9PSBfamZfYXJncy5maWVsZHNfbGF5b3V0ICYmIDw+XHJcblx0XHRcdFx0eyAndG9wJyA9PT0gY2hpbGRyZW5Qb3NpdGlvbiAmJiBjaGlsZHJlbiB9XHJcblx0XHRcdFx0eyByZW5kZXJMYWJlbCgpIH1cclxuXHRcdFx0XHR7ICdiZXR3ZWVuJyA9PT0gY2hpbGRyZW5Qb3NpdGlvbiAmJiBjaGlsZHJlbiB9XHJcblx0XHRcdFx0eyByZW5kZXJEZXNjcmlwdGlvbigpIH1cclxuXHRcdFx0XHR7ICdib3R0b20nID09PSBjaGlsZHJlblBvc2l0aW9uICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0PC8+IH1cclxuXHRcdFx0eyAncm93JyA9PT0gX2pmX2FyZ3MuZmllbGRzX2xheW91dCAmJiA8PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9eyB7IGZsZXg6IDEgfSB9PlxyXG5cdFx0XHRcdFx0eyByZW5kZXJMYWJlbCgpIH1cclxuXHRcdFx0XHRcdHsgcmVuZGVyRGVzY3JpcHRpb24oKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17IHsgZmxleDogMyB9IH0+eyBjaGlsZHJlbiB9PC9kaXY+XHJcblx0XHRcdDwvPiB9XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWxlY3QoIHNlbGVjdCA9PiB7XHJcblx0Y29uc3QgbWV0YSA9IHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0X2pmX2FyZ3M6IEpTT04ucGFyc2UoIG1ldGEuX2pmX2FyZ3MgfHwge30gKSxcclxuXHR9XHJcbn0gKSggRmllbGRXcmFwcGVyICk7IiwiY29uc3Qge1xyXG5cdFx0ICBCdXR0b24sXHJcblx0XHQgIFBvcG92ZXIsXHJcblx0XHQgIFBhbmVsQm9keSxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VTdGF0ZSxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gTWFjcm9zSW5zZXJ0ZXIoIHtcclxuXHRcdFx0XHRcdFx0XHQgY2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0IGZpZWxkcyxcclxuXHRcdFx0XHRcdFx0XHQgb25GaWVsZENsaWNrLFxyXG5cdFx0XHRcdFx0XHRcdCBjdXN0b21NYWNyb3MsXHJcblx0XHRcdFx0XHRcdFx0IHpJbmRleCA9IDEwMDAwMDAsXHJcblx0XHRcdFx0XHRcdFx0IC4uLnBvcG92ZXJQcm9wc1xyXG5cdFx0XHRcdFx0XHQgfSApIHtcclxuXHJcblx0Y29uc3QgWyBzaG93UG9wb3Zlciwgc2V0UG9wb3ZlclN0YXRlIF0gPSB1c2VTdGF0ZSggKCkgPT4gZmFsc2UgKTtcclxuXHJcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3MtaW5zZXJ0ZXJcIj5cclxuXHRcdDxCdXR0b25cclxuXHRcdFx0aXNUZXJ0aWFyeVxyXG5cdFx0XHRpc1NtYWxsXHJcblx0XHRcdGljb249eyBzaG93UG9wb3ZlciA/ICduby1hbHQnIDogJ2FkbWluLXRvb2xzJyB9XHJcblx0XHRcdGxhYmVsPXsgJ0luc2VydCBtYWNyb3MnIH1cclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3MtdHJpZ2dlclwiXHJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0c2V0UG9wb3ZlclN0YXRlKCBwcmV2ID0+ICEgcHJldiApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7IHNob3dQb3BvdmVyICYmIChcclxuXHRcdFx0PFBvcG92ZXJcclxuXHRcdFx0XHRzdHlsZT17IHsgekluZGV4IH0gfVxyXG5cdFx0XHRcdHBvc2l0aW9uPXsgJ2JvdHRvbSBsZWZ0JyB9XHJcblx0XHRcdFx0eyAuLi5wb3BvdmVyUHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBmaWVsZHMubGVuZ3RoICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnRm9ybSBGaWVsZHMnIH0+XHJcblx0XHRcdFx0XHR7IGZpZWxkcy5tYXAoIGZpZWxkID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXsgJ2ZpZWxkXycgKyBmaWVsZC5uYW1lIH0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZpZWxkQ2xpY2soIGZpZWxkLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0PnsgJyUnICsgZmllbGQubmFtZSArICclJyB9PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cclxuXHRcdFx0XHR7IGN1c3RvbU1hY3JvcyAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0N1c3RvbSBNYWNyb3MnIH0+XHJcblx0XHRcdFx0XHR7IGN1c3RvbU1hY3Jvcy5tYXAoIG1hY3JvcyA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdtYWNyb3NfJyArIG1hY3JvcyB9PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25GaWVsZENsaWNrKCBtYWNyb3MgKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0PnsgJyUnICsgbWFjcm9zICsgJyUnIH08L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L1BhbmVsQm9keT4gfVxyXG5cdFx0XHQ8L1BvcG92ZXI+XHJcblx0XHQpIH1cclxuXHQ8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hY3Jvc0luc2VydGVyOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEJ1dHRvbixcclxuXHRcdCAgQnV0dG9uR3JvdXAsXHJcblx0XHQgIENhcmQsXHJcblx0XHQgIENhcmRCb2R5LFxyXG5cdFx0ICBDYXJkSGVhZGVyLFxyXG5cdFx0ICBUb2dnbGVDb250cm9sLFxyXG5cdFx0ICBGbGV4LFxyXG5cdFx0ICBGbGV4SXRlbSxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VTdGF0ZSxcclxuXHRcdCAgdXNlRWZmZWN0LFxyXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBSZXBlYXRlcldpdGhTdGF0ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRJdGVtSGVhZGluZyxcclxuXHRcdFx0XHRcdFx0XHRcdHJlcGVhdGVyQ2xhc3NlcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwZWF0ZXJJdGVtQ2xhc3NlcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmV3SXRlbSxcclxuXHRcdFx0XHRcdFx0XHRcdGFkZE5ld0J1dHRvbkxhYmVsID0gJ0FkZCBOZXcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdG9uU2F2ZUl0ZW1zLFxyXG5cdFx0XHRcdFx0XHRcdFx0b25Vbk1vdW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0b25BZGROZXdJdGVtLFxyXG5cdFx0XHRcdFx0XHRcdFx0b25SZW1vdmVJdGVtLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGVscCA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscFNvdXJjZToge30sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlbHBWaXNpYmxlOiAoKSA9PiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscEtleTogJycsXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbICdqZXQtZm9ybS1idWlsZGVyX19yZXBlYXRlci1jb21wb25lbnQnLCAuLi5yZXBlYXRlckNsYXNzZXMgXS5qb2luKCAnICcgKTtcclxuXHRjb25zdCBpdGVtQ2xhc3NOYW1lcyA9IFsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudC1pdGVtJywgLi4ucmVwZWF0ZXJJdGVtQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cclxuXHRjb25zdCBwYXJzZWRJdGVtcyA9ICgpID0+IHtcclxuXHRcdGlmICggaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0cmV0dXJuIGl0ZW1zLm1hcCggaXRlbSA9PiB7XHJcblx0XHRcdFx0aXRlbS5fX3Zpc2libGUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGl0ZW07XHJcblx0XHRcdH0gKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBbIHtcclxuXHRcdFx0XHQuLi5uZXdJdGVtLFxyXG5cdFx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcclxuXHRcdFx0fSBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgWyBpdGVtc0RhdGEsIHNldEl0ZW1zRGF0YSBdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0c2V0SXRlbXNEYXRhKCBwYXJzZWRJdGVtcygpICk7XHJcblx0fSwgW10gKTtcclxuXHJcblx0Y29uc3QgWyBpc1NhZmVEZWxldGluZywgc2V0U2FmZURlbGV0aW5nIF0gPSB1c2VTdGF0ZSggdHJ1ZSApO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VDdXJyZW50SXRlbSA9ICggdmFsdWVUb1NldCwgaW5kZXggKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XHJcblxyXG5cdFx0XHRwcmV2Q2xvbmVbIGluZGV4IF0gPSB7XHJcblx0XHRcdFx0Li4ucHJldlsgaW5kZXggXSxcclxuXHRcdFx0XHQuLi52YWx1ZVRvU2V0LFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gcHJldkNsb25lO1xyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU2F2ZURlbGV0aW5nID0gaW5kZXggPT4ge1xyXG5cdFx0cmV0dXJuIGNvbmZpcm0oIF9fKCBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSBpdGVtICR7IGluZGV4ICsgMSB9P2AsICdqZXQtZm9ybS1idWlsZGVyJyApICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCByZW1vdmVPcHRpb24gPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRpc1NhZmVEZWxldGluZyAmJiAhIG9uU2F2ZURlbGV0aW5nKCBpbmRleCApIHx8XHJcblx0XHRcdG9uUmVtb3ZlSXRlbSAmJiAhIG9uUmVtb3ZlSXRlbSggaW5kZXgsIGl0ZW1zRGF0YSApXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcclxuXHRcdFx0cHJldkNsb25lLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHJcblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBhZGROZXdJdGVtID0gKCB2YWx1ZSApID0+IHtcclxuXHRcdGlmICggb25BZGROZXdJdGVtICkge1xyXG5cdFx0XHRvbkFkZE5ld0l0ZW0oIHZhbHVlLCBpdGVtc0RhdGEgKTtcclxuXHRcdH1cclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiBbIC4uLnByZXYsIHtcclxuXHRcdFx0Li4udmFsdWUsXHJcblx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcclxuXHRcdH0gXSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xvbmVJdGVtID0gKCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcclxuXHRcdFx0Y29uc3QgWyBiZWZvcmUsIGFmdGVyIF0gPSBbIHByZXZDbG9uZS5zbGljZSggMCwgaW5kZXggKyAxICksIHByZXZDbG9uZS5zbGljZSggaW5kZXggKyAxICkgXTtcclxuXHJcblx0XHRcdHJldHVybiBbIC4uLmJlZm9yZSwgcHJldkNsb25lWyBpbmRleCBdLCAuLi5hZnRlciBdO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW92ZVJlcGVhdGVySXRlbSA9ICggeyBvbGRJbmRleCwgbmV3SW5kZXggfSApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcclxuXHJcblx0XHRcdFsgcHJldkNsb25lWyBuZXdJbmRleCBdLCBwcmV2Q2xvbmVbIG9sZEluZGV4IF0gXSA9IFsgcHJldkNsb25lWyBvbGRJbmRleCBdLCBwcmV2Q2xvbmVbIG5ld0luZGV4IF0gXTtcclxuXHJcblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3ZlVXAgPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0bW92ZVJlcGVhdGVySXRlbSggeyBvbGRJbmRleDogaW5kZXgsIG5ld0luZGV4OiBpbmRleCAtIDEgfSApO1xyXG5cdH1cclxuXHRjb25zdCBtb3ZlRG93biA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4ICsgMSB9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpc0Rpc2FibGVkRW5kID0gKCBpbmRleCApID0+IHtcclxuXHRcdHJldHVybiAhICggaW5kZXggPCBpdGVtc0RhdGEubGVuZ3RoIC0gMSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG9nZ2xlVmlzaWJsZSA9IGluZGV4ID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcclxuXHRcdFx0cHJldkNsb25lWyBpbmRleCBdLl9fdmlzaWJsZSA9ICEgKCBwcmV2Q2xvbmVbIGluZGV4IF0uX192aXNpYmxlICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcHJldkNsb25lO1xyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGZvciAoIGNvbnN0IGl0ZW1zRGF0YUtleSBpbiBpdGVtc0RhdGEgKSB7XHJcblx0XHRcdFx0Zm9yICggY29uc3QgaXRlbUtleSBpbiBpdGVtc0RhdGFbIGl0ZW1zRGF0YUtleSBdICkge1xyXG5cdFx0XHRcdFx0aWYgKCBpdGVtS2V5LnN0YXJ0c1dpdGgoICdfXycgKSApIHtcclxuXHRcdFx0XHRcdFx0ZGVsZXRlIGl0ZW1zRGF0YVsgaXRlbXNEYXRhS2V5IF1bIGl0ZW1LZXkgXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0b25TYXZlSXRlbXMoIGl0ZW1zRGF0YSApO1xyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH0gZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdH0sIFsgaXNTYXZlQWN0aW9uIF0gKTtcclxuXHJcblx0Y29uc3QgZ2V0UmVwZWF0ZXJJdGVtSWQgPSBpbmRleCA9PiBgamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbV8keyBpbmRleCB9YDtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGhlbHBTb3VyY2UsXHJcblx0XHRcdCAgaGVscFZpc2libGUsXHJcblx0XHRcdCAgaGVscEtleSxcclxuXHRcdCAgfSA9IGhlbHA7XHJcblxyXG5cdGNvbnN0IGlzVmlzaWJsZUhlbHAgPSBoZWxwVmlzaWJsZSggaXRlbXNEYXRhICkgJiYgaGVscFNvdXJjZSAmJiBoZWxwU291cmNlWyBoZWxwS2V5IF07XHJcblxyXG5cdHJldHVybiA8ZGl2XHJcblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWVzIH1cclxuXHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyJyB9XHJcblx0PlxyXG5cdFx0eyBpc1Zpc2libGVIZWxwICYmIDxwPnsgaGVscFNvdXJjZVsgaGVscEtleSBdLmxhYmVsIH08L3A+IH1cclxuXHJcblx0XHR7IDAgPCBpdGVtc0RhdGEubGVuZ3RoICYmIDw+XHJcblx0XHRcdDxGbGV4PlxyXG5cdFx0XHRcdDxGbGV4SXRlbT5cclxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTYWZlIGRlbGV0aW5nJyApIH1cclxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRTYWZlRGVsZXRpbmcgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0ZsZXhJdGVtPlxyXG5cdFx0XHRcdDxGbGV4SXRlbSBzdHlsZT17IHtcclxuXHRcdFx0XHRcdGZsZXg6ICd1bnNldCcsXHJcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxZW0nLFxyXG5cdFx0XHRcdH0gfT5cclxuXHRcdFx0XHRcdHsvKjxCdXR0b25Hcm91cD5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHsgX18oICdDb3B5IGl0ZW1zIHRvIGNsaXBib2FyZCcsICdqZXQtZnJvbS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7IF9fKCAnSW1wb3J0IGl0ZW1zIGZyb20gY2xpcGJvYXJkJywgJ2pldC1mcm9tLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+Ki99XHJcblx0XHRcdFx0PC9GbGV4SXRlbT5cclxuXHRcdFx0PC9GbGV4PlxyXG5cdFx0PC8+IH1cclxuXHRcdHsgaXRlbXNEYXRhLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiA8Q2FyZFxyXG5cdFx0XHRpc0VsZXZhdGVkPXsgdHJ1ZSB9XHJcblx0XHRcdGNsYXNzTmFtZT17IGl0ZW1DbGFzc05hbWVzIH1cclxuXHRcdFx0a2V5PXsgZ2V0UmVwZWF0ZXJJdGVtSWQoIGluZGV4ICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8Q2FyZEhlYWRlciBjbGFzc05hbWU9eyAncmVwZWF0ZXJfX2l0ZW1fX2hlYWRlcicgfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0ZXItaXRlbV9fbGVmdC1oZWFkaW5nJz5cclxuXHRcdFx0XHRcdDxCdXR0b25Hcm91cCBjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbnMnIH0+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdFx0aWNvbj17IGN1cnJlbnRJdGVtLl9fdmlzaWJsZSA/ICduby1hbHQnIDogJ2VkaXQnIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gdG9nZ2xlVmlzaWJsZSggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXsgISBCb29sZWFuKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LXVwLWFsdDInIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZVVwKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBpc0Rpc2FibGVkRW5kKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LWRvd24tYWx0MicgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlRG93biggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbS10aXRsZScgfT5cclxuXHRcdFx0XHRcdFx0XHR7IEl0ZW1IZWFkaW5nICYmIDxJdGVtSGVhZGluZ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XHJcblx0XHRcdFx0XHRcdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtPXsgZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggZGF0YSwgaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0XHR7ICEgSXRlbUhlYWRpbmcgJiYgYCMkeyBpbmRleCArIDEgfWAgfVxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PEJ1dHRvbkdyb3VwPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBjbG9uZUl0ZW0oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IF9fKCAnQ2xvbmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiByZW1vdmVPcHRpb24oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IF9fKCAnRGVsZXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9CdXR0b25Hcm91cD5cclxuXHRcdFx0PC9DYXJkSGVhZGVyPlxyXG5cdFx0XHR7IGN1cnJlbnRJdGVtLl9fdmlzaWJsZSAmJiA8Q2FyZEJvZHlcclxuXHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbV9fY29udGVudCcgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiAmJiA8UmVhY3QuRnJhZ21lbnRcclxuXHRcdFx0XHRcdGtleT17IGByZXBlYXRlci1jb21wb25lbnRfX2l0ZW1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuKCB7XHJcblx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtLFxyXG5cdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbTogZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggZGF0YSwgaW5kZXggKSxcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0XHR7ICdmdW5jdGlvbicgIT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XHJcblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0XHRcdHsgISBjaGlsZHJlbiAmJiAnU2V0IHVwIHlvdXIgUmVwZWF0ZXIgVGVtcGxhdGUsIHBsZWFzZS4nIH1cclxuXHRcdFx0PC9DYXJkQm9keT4gfVxyXG5cdFx0PC9DYXJkPiApIH1cclxuXHRcdHsgMSA8IGl0ZW1zRGF0YS5sZW5ndGggJiYgPFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC1jbGVhcidcclxuXHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgaXNTYWZlRGVsZXRpbmcgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHNldFNhZmVEZWxldGluZyB9XHJcblx0XHQvPiB9XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBhZGROZXdJdGVtKCBuZXdJdGVtICkgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IGFkZE5ld0J1dHRvbkxhYmVsIH1cclxuXHRcdDwvQnV0dG9uPlxyXG5cdDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJXaXRoU3RhdGU7IiwiY29uc3QgeyBpc0VtcHR5IH0gPSB3aW5kb3cubG9kYXNoO1xyXG5cclxuLyoqXHJcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHsgd2l0aEluc3RhbmNlSWQgfSA9IHdpbmRvdy53cC5jb21wb3NlO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3QgQmFzZUNvbnRyb2wgPSB3aW5kb3cud3AuY29tcG9uZW50cy5CYXNlQ29udHJvbDtcclxuXHJcbmZ1bmN0aW9uIEdyb3VwZWRTZWxlY3RDb250cm9sKCB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICBoZWxwLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgaW5zdGFuY2VJZCxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgbXVsdGlwbGUgPSBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uQ2hhbmdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgb3B0aW9ucyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgY2xhc3NOYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBoaWRlTGFiZWxGcm9tVmlzaW9uLFxyXG5cdFx0XHRcdFx0XHRcdCAgIH0gKSB7XHJcblx0Y29uc3QgaWQgPSBgaW5zcGVjdG9yLXNlbGVjdC1jb250cm9sLSR7IGluc3RhbmNlSWQgfWA7XHJcblx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggZXZlbnQgKSA9PiB7XHJcblx0XHRvbkNoYW5nZSggZXZlbnQudGFyZ2V0LnZhbHVlICk7XHJcblx0fTtcclxuXHJcblx0Ly8gRGlzYWJsZSByZWFzb246IEEgc2VsZWN0IHdpdGggYW4gb25jaGFuZ2UgdGhyb3dzIGEgd2FybmluZ1xyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJldHVybiAhIGlzRW1wdHkoIG9wdGlvbnMgKSAmJiAoXHJcblx0XHQ8QmFzZUNvbnRyb2wgbGFiZWw9eyBsYWJlbCB9IGhpZGVMYWJlbEZyb21WaXNpb249eyBoaWRlTGFiZWxGcm9tVmlzaW9uIH0gaWQ9eyBpZCB9IGhlbHA9eyBoZWxwIH1cclxuXHRcdFx0XHRcdCBjbGFzc05hbWU9eyBjbGFzc05hbWUgfT5cclxuXHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdGlkPXsgaWQgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtc2VsZWN0LWNvbnRyb2xfX2lucHV0XCJcclxuXHRcdFx0XHRvbkNoYW5nZT17IG9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9eyAhISBoZWxwID8gYCR7IGlkIH1fX2hlbHBgIDogdW5kZWZpbmVkIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdGtleT17IGAkeyBsYWJlbCB9LXBsYWNlaG9sZGVyYCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGBgIH1cclxuXHRcdFx0XHQ+eyBgLS1gIH08L29wdGlvbj5cclxuXHRcdFx0XHR7IG9wdGlvbnMubWFwKCAoIG9wdEdyb3VwLCBncm91cEluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuICEgaXNFbXB0eSggb3B0R3JvdXAudmFsdWVzICkgJiYgPG9wdGdyb3VwXHJcblx0XHRcdFx0XHRcdGtleT17IGAkeyBvcHRHcm91cC5sYWJlbCB9LSR7IGdyb3VwSW5kZXggfWAgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IG9wdEdyb3VwLmxhYmVsIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eyBvcHRHcm91cC52YWx1ZXMubWFwKCAoIG9wdGlvbiwgaW5kZXggKSA9PlxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdGtleT17IGAkeyBvcHRpb24udmFsdWUgfS0keyBpbmRleCB9LSR7IGdyb3VwSW5kZXggfWAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBvcHRpb24udmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBvcHRpb24uZGlzYWJsZWQgfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHsgb3B0aW9uLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj4sXHJcblx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0PC9vcHRncm91cD47XHJcblx0XHRcdFx0fSApIH1cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdCk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoSW5zdGFuY2VJZCggR3JvdXBlZFNlbGVjdENvbnRyb2wgKTsiLCJmdW5jdGlvbiBIb3Jpem9udGFsTGluZSggcHJvcHMgKSB7XHJcblx0cmV0dXJuIDxociBzdHlsZT17IHsgLi4ucHJvcHMgfSB9Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxMaW5lOyIsImltcG9ydCB3aXRoUHJlc2V0IGZyb20gXCIuL3ByZXNldC1lZGl0b3JcIjtcclxuaW1wb3J0IHtcclxuXHRHbG9iYWxGaWVsZCxcclxuXHRNYXBGaWVsZFxyXG59IGZyb20gXCIuL3ByZXNldC1yZW5kZXJcIjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBEeW5hbWljUHJlc2V0KCB7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdG9uU2F2ZVByZXNldCxcclxuXHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXHJcblx0XHRcdFx0XHRcdFx0cGFyc2VWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRleGNsdWRlT3B0aW9ucyxcclxuXHRcdFx0XHRcdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0aXNWaXNpYmxlLFxyXG5cdFx0XHRcdFx0XHR9ICkge1xyXG5cclxuXHRjb25zdCBwb3NpdGlvbiA9ICdkeW5hbWljJztcclxuXHRjb25zdCBbIHN0YXRlVmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZSggKCkgPT4gcGFyc2VWYWx1ZSggdmFsdWUgKSApO1xyXG5cclxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCBuZXdWYWx1ZSwgbmFtZSApID0+IHtcclxuXHRcdHNldFZhbHVlKCBwcmV2ID0+ICggeyAuLi5wcmV2LCBbIG5hbWUgXTogbmV3VmFsdWUgfSApICk7XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRpZiAoIG9uU2F2ZVByZXNldCApIHtcclxuXHRcdFx0XHRvblNhdmVQcmVzZXQoIEpTT04uc3RyaW5naWZ5KCBzdGF0ZVZhbHVlICkgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggZmFsc2UgPT09IGlzU2F2ZUFjdGlvbiApIHtcclxuXHRcdFx0b25Vbk1vdW50KCk7XHJcblx0XHR9XHJcblx0fSwgWyBpc1NhdmVBY3Rpb24gXSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5nbG9iYWxfZmllbGRzLm1hcCggKCBkYXRhLCBpbmRleCApID0+IDxHbG9iYWxGaWVsZFxyXG5cdFx0XHRrZXk9eyBgY3VycmVudF9maWVsZF8keyBkYXRhLm5hbWUgfV8keyBpbmRleCB9YCB9XHJcblx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZSB9XHJcblx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRkYXRhPXsgZGF0YSB9XHJcblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxyXG5cdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdGlzVmlzaWJsZT17IGlzVmlzaWJsZSB9XHJcblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxyXG5cdFx0Lz4gKSB9XHJcblxyXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLm1hcF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPE1hcEZpZWxkXHJcblx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cclxuXHRcdFx0Y3VycmVudFN0YXRlPXsgc3RhdGVWYWx1ZSB9XHJcblx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSBdIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGU9eyBpc0N1cnJlbnRGaWVsZFZpc2libGUgfVxyXG5cdFx0XHRwb3NpdGlvbj17IHBvc2l0aW9uIH1cclxuXHRcdC8+ICkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFByZXNldCggRHluYW1pY1ByZXNldCApOyIsImNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmZ1bmN0aW9uIHdpdGhQcmVzZXQoIFdyYXBwZWRDb21wb25lbnQgKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIEpldEZvcm1QcmVzZXRFZGl0b3IoIHByb3BzICkge1xyXG5cclxuXHRcdGNvbnN0IHBhcnNlVmFsdWUgPSAoKSA9PiB7XHJcblx0XHRcdGxldCB2YWwgPSB7fTtcclxuXHJcblx0XHRcdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBwcm9wcy52YWx1ZSApIHtcclxuXHRcdFx0XHR2YWwgPSB7IC4uLnByb3BzLnZhbHVlIH07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIHByb3BzLnZhbHVlICYmICdzdHJpbmcnID09PSB0eXBlb2YgcHJvcHMudmFsdWUgKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdHZhbCA9IEpTT04ucGFyc2UoIHByb3BzLnZhbHVlICk7XHJcblx0XHRcdFx0XHRpZiAoICdudW1iZXInID09PSB0eXBlb2YgdmFsICkge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGNhdGNoICggZXhjZXB0aW9uICkge1xyXG5cdFx0XHRcdFx0dmFsID0ge307XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHZhbC5qZXRfcHJlc2V0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaXNWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIHBvc2l0aW9uICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKCAoIGRhdGEucG9zaXRpb24gJiYgcG9zaXRpb24gPT09IGRhdGEucG9zaXRpb24gKVxyXG5cdFx0XHRcdHx8ICEgZGF0YS5wb3NpdGlvbiB8fCAncXVlcnlfdmFyJyAhPT0gY3VycmVudFN0YXRlLmZyb20gKSAmJiBpc0dsb2JhbFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBpc0dsb2JhbFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSApID0+IHtcclxuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRzd2l0Y2ggKCBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0XHRjYXNlICdxdWVyeV92YXInOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdCggJ3Bvc3QnID09PSBjdXJyZW50U3RhdGUuZnJvbSAmJiAncXVlcnlfdmFyJyA9PT0gY3VycmVudFN0YXRlLnBvc3RfZnJvbSApXHJcblx0XHRcdFx0XHRcdFx0fHwgKCAndXNlcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUudXNlcl9mcm9tIClcclxuXHRcdFx0XHRcdFx0XHR8fCAoICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUuZnJvbSApXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnByZXNldC5lZGl0b3IuY3VzdG9tLmNvbmRpdGlvbicsIGZhbHNlLCBkYXRhLmN1c3RvbV9jb25kaXRpb24sIGN1cnJlbnRTdGF0ZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaXNDdXJyZW50RmllbGRWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIHBvc2l0aW9uICkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggZGF0YS5wb3NpdGlvbiAmJiBwb3NpdGlvbiAhPT0gZGF0YS5wb3NpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmICEgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZSAmJiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaXNNYXBGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgZmllbGQgKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmICEgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdGlmICggISBjdXJyZW50U3RhdGUuZmllbGRzX21hcCB8fCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWUgJiYgY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZXhjbHVkZU9wdGlvbnMgPSAoIHNlbGVjdE9wdGlvbnMgKSA9PiB7XHJcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBbIC4uLnNlbGVjdE9wdGlvbnMgXTtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKCAoIG9wdGlvbiwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0aWYgKCBwcm9wcy5leGNsdWRlU291cmNlcyAmJiBwcm9wcy5leGNsdWRlU291cmNlcy5pbmNsdWRlcyggb3B0aW9uLnZhbHVlICkgKSB7XHJcblx0XHRcdFx0XHRvcHRpb25zLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHRcdFx0cmV0dXJuIG9wdGlvbnM7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiA8V3JhcHBlZENvbXBvbmVudFxyXG5cdFx0XHRrZXk9J3dyYXBwZWQtcHJlc2V0LWVkaXRvcidcclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdHBhcnNlVmFsdWU9eyBwYXJzZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0aXNNYXBGaWVsZFZpc2libGU9eyBpc01hcEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxyXG5cdFx0Lz47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0O1xyXG4iLCJpbXBvcnQgR3JvdXBlZFNlbGVjdENvbnRyb2wgZnJvbSAnLi4vZ3JvdXBlZC1zZWxlY3QtY29udHJvbCc7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBTZWxlY3RDb250cm9sLFxyXG5cdFx0ICBDdXN0b21TZWxlY3RDb250cm9sLFxyXG5cdFx0ICBDYXJkLFxyXG5cdFx0ICBDYXJkQm9keSxcclxuXHRcdCAgQ2FyZEhlYWRlcixcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gR2xvYmFsRmllbGQoIHtcclxuXHRcdFx0XHRcdFx0ICBkYXRhLFxyXG5cdFx0XHRcdFx0XHQgIHZhbHVlLFxyXG5cdFx0XHRcdFx0XHQgIGluZGV4LFxyXG5cdFx0XHRcdFx0XHQgIG9uQ2hhbmdlVmFsdWUsXHJcblx0XHRcdFx0XHRcdCAgaXNWaXNpYmxlLFxyXG5cdFx0XHRcdFx0XHQgIGV4Y2x1ZGVPcHRpb25zID0gb3B0aW9ucyA9PiBvcHRpb25zLFxyXG5cdFx0XHRcdFx0XHQgIHBvc2l0aW9uLFxyXG5cdFx0XHRcdFx0ICB9ICkge1xyXG5cclxuXHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XHJcblx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0cmV0dXJuICggaXNWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgcG9zaXRpb24gKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGV4Y2x1ZGVPcHRpb25zKCBkYXRhLm9wdGlvbnMgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWVbIGRhdGEubmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF2YWlsYWJsZU1hcEZpZWxkKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXNNYXBGaWVsZFZpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblx0bGV0IGN1cnJlbnRWYWwgPSBudWxsO1xyXG5cclxuXHRpZiAoICEgZmllbGRzTWFwICkge1xyXG5cdFx0ZmllbGRzTWFwID0ge307XHJcblx0fVxyXG5cclxuXHRjdXJyZW50VmFsID0gZmllbGRzTWFwWyBmaWVsZCBdO1xyXG5cclxuXHRpZiAoICEgY3VycmVudFZhbCB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIGN1cnJlbnRWYWwgKSB7XHJcblx0XHRjdXJyZW50VmFsID0ge307XHJcblx0fVxyXG5cclxuXHRjb25zdCBBdmFpbGFibGVGaWVsZFdyYXBwZXIgPSAoIHsgZmllbGQsIG5hbWUsIGluZGV4LCBmSW5kZXgsIGNoaWxkcmVuIH0gKSA9PiA8Q2FyZFxyXG5cdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0c2l6ZT17ICdleHRyYVNtYWxsJyB9XHJcblx0XHRzdHlsZT17IHsgbWFyZ2luQm90dG9tOiAnMTBweCcgfSB9XHJcblx0PlxyXG5cdFx0PENhcmRIZWFkZXI+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT0namV0LWxhYmVsLW92ZXJmbG93Jz57IGZpZWxkIH08L3NwYW4+XHJcblx0XHQ8L0NhcmRIZWFkZXI+XHJcblx0XHQ8Q2FyZEJvZHlcclxuXHRcdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cclxuXHRcdD5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHQ8L0NhcmRCb2R5PlxyXG5cdDwvQ2FyZD47XHJcblxyXG5cdGZ1bmN0aW9uIEF2YWlsYWJsZUZpZWxkV3JhcHBlckZ1bmMoIHsgZmllbGQsIG5hbWUsIGluZGV4LCBmSW5kZXggfSwgY2hpbGRyZW4gKSB7XHJcblx0XHRyZXR1cm4gPENhcmRcclxuXHRcdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0XHRzaXplPXsgJ2V4dHJhU21hbGwnIH1cclxuXHRcdFx0c3R5bGU9eyB7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH0gfVxyXG5cdFx0PlxyXG5cdFx0XHQ8Q2FyZEhlYWRlcj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2pldC1sYWJlbC1vdmVyZmxvdyc+eyBmaWVsZCB9PC9zcGFuPlxyXG5cdFx0XHQ8L0NhcmRIZWFkZXI+XHJcblx0XHRcdDxDYXJkQm9keVxyXG5cdFx0XHRcdGtleT17IGZpZWxkICsgbmFtZSArIGluZGV4ICsgZkluZGV4IH1cclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L0NhcmRCb2R5PlxyXG5cdFx0PC9DYXJkPjtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXsgYG1hcF9maWVsZF9wcmVzZXRfJHsgZmllbGQgKyBpbmRleCB9YCB9PlxyXG5cclxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5tYXBfZmllbGRzLm1hcCggKCBkYXRhLCBmSW5kZXggKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb3BzID0geyBmaWVsZCwgbmFtZTogZGF0YS5uYW1lLCBpbmRleCwgZkluZGV4IH07XHJcblxyXG5cdFx0XHRjb25zdCB1bmlxS2V5ID0gJ2NvbnRyb2xfJyArIGZpZWxkICsgZGF0YS5uYW1lICsgaW5kZXggKyBmSW5kZXg7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XHJcblx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0QXZhaWxhYmxlRmllbGRXcmFwcGVyRnVuYyggcHJvcHMsIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkgKyAnVGV4dENvbnRyb2wnIH1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGRhdGEubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPiApXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vbGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2FzZSAnY3VzdG9tX3NlbGVjdCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxDdXN0b21TZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB7IHNlbGVjdGVkSXRlbSB9ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IHNlbGVjdGVkSXRlbS5rZXk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBkYXRhLm9wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5rZXkgPT09IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPiApO1xyXG5cdFx0XHRcdGNhc2UgJ2dyb3VwZWRfc2VsZWN0JzpcclxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxyXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XHJcblx0XHRcdFx0XHRcdFx0PEdyb3VwZWRTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vbGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj4gKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApIH1cclxuXHQ8L1JlYWN0LkZyYWdtZW50PjtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFwRmllbGQoIHtcclxuXHRcdFx0XHRcdCAgIGRhdGEsXHJcblx0XHRcdFx0XHQgICB2YWx1ZSxcclxuXHRcdFx0XHRcdCAgIGluZGV4LFxyXG5cdFx0XHRcdFx0ICAgY3VycmVudFN0YXRlLFxyXG5cdFx0XHRcdFx0ICAgb25DaGFuZ2VWYWx1ZSxcclxuXHRcdFx0XHRcdCAgIGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdCAgIHBvc2l0aW9uID0gJ2dlbmVyYWwnLFxyXG5cdFx0XHRcdCAgIH0gKSB7XHJcblxyXG5cdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcclxuXHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0Y2FzZSAnY3VzdG9tX3NlbGVjdCc6XHJcblx0XHRcdHJldHVybiAoIGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Q3VzdG9tU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jdXN0b20tc2VsZWN0LWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggeyBzZWxlY3RlZEl0ZW0gfSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHNlbGVjdGVkSXRlbS5rZXk7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggdmFsdWUsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBkYXRhLm9wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5rZXkgPT09IHZhbHVlICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj4gKTtcclxuXHRcdGNhc2UgJ2dyb3VwZWRfc2VsZWN0JzpcclxuXHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxHcm91cGVkU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj4gKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0R2xvYmFsRmllbGQsXHJcblx0QXZhaWxhYmxlTWFwRmllbGQsXHJcblx0TWFwRmllbGQsXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdEJ1dHRvbigge1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdGFqYXhBcmdzID0ge30sXHJcblx0XHRcdFx0XHRcdFx0b25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRvbkxvYWRpbmcgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWUgPSAnJyxcclxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICgpID0+IHt9XHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGRlZmF1bHRWYWxpZGF0ZSA9ICgpID0+IHtcclxuXHRcdHJldHVybiBqUXVlcnkuYWpheCggeyB1cmw6IGFqYXh1cmwsIHR5cGU6ICdQT1NUJywgZGF0YTogYWpheEFyZ3MgfSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlcXVlc3QgPSAoKSA9PiB7XHJcblx0XHRvbkxvYWRpbmcoKTtcclxuXHJcblx0XHRkZWZhdWx0VmFsaWRhdGUoKVxyXG5cdFx0LmRvbmUoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnN1Y2Nlc3MgPyBvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApIDogb25GYWlsUmVxdWVzdCgpIClcclxuXHRcdC5mYWlsKCAoKSA9PiBvbkZhaWxSZXF1ZXN0KCkgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPEJ1dHRvblxyXG5cdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cclxuXHRcdGlzUHJpbWFyeVxyXG5cdFx0b25DbGljaz17IHJlcXVlc3QgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHR7IGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdHsgbGFiZWwgfVxyXG5cdDwvQnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSBcIi4vcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGVMb2FkaW5nQ2xhc3NlcyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdExvYWRpbmdCdXR0b24oIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgYWpheEFyZ3MgPSB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uU3VjY2Vzc1JlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHQgICB9ICkge1xyXG5cclxuXHRjb25zdCBbXHJcblx0XHRjbGFzc05hbWUsXHJcblx0XHRzZXRMb2FkaW5nQ2xhc3MsXHJcblx0XHRjbGVhckxvYWRpbmdDbGFzc1xyXG5cdF0gPSB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzKCk7XHJcblxyXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxyXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XHJcblx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XHJcblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgcmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRjbGVhckxvYWRpbmdDbGFzcygpO1xyXG5cdFx0XHRvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApXHJcblx0XHR9IH1cclxuXHRcdG9uRmFpbFJlcXVlc3Q9eyAoKSA9PiB7XHJcblx0XHRcdGNsZWFyTG9hZGluZ0NsYXNzKCk7XHJcblx0XHRcdG9uRmFpbFJlcXVlc3QoKTtcclxuXHRcdH0gfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0PC9SZXF1ZXN0QnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdExvYWRpbmdCdXR0b247IiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSBcIi4vcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGVWYWxpZENsYXNzZXMgfSBmcm9tIFwiLi4vaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRlQnV0dG9uKCB7XHJcblx0XHRcdFx0XHRcdFx0IGluaXRpYWxWYWxpZCxcclxuXHRcdFx0XHRcdFx0XHQgbGFiZWwsXHJcblx0XHRcdFx0XHRcdFx0IGFqYXhBcmdzID0ge30sXHJcblx0XHRcdFx0XHRcdFx0IG9uVmFsaWQgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHQgb25JbnZhbGlkID0gKCkgPT4ge30sXHJcblx0XHRcdFx0XHRcdCB9ICkge1xyXG5cclxuXHRjb25zdCBbXHJcblx0XHRjbGFzc05hbWUsXHJcblx0XHRzZXRWYWxpZENsYXNzLFxyXG5cdFx0c2V0SW52YWxpZENsYXNzLFxyXG5cdFx0c2V0TG9hZGluZ0NsYXNzXHJcblx0XSA9IHVzZVN0YXRlVmFsaWRDbGFzc2VzKCBpbml0aWFsVmFsaWQgfHwgZmFsc2UgKTtcclxuXHJcblx0Y29uc3Qgc2V0VmFsaWQgPSByZXNwb25zZSA9PiB7XHJcblx0XHRzZXRWYWxpZENsYXNzKCk7XHJcblx0XHRvblZhbGlkKCByZXNwb25zZSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldEludmFsaWQgPSAoKSA9PiB7XHJcblx0XHRzZXRJbnZhbGlkQ2xhc3MoKTtcclxuXHRcdG9uSW52YWxpZCgpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxyXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XHJcblx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XHJcblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgc2V0VmFsaWQgfVxyXG5cdFx0b25GYWlsUmVxdWVzdD17IHNldEludmFsaWQgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0PC9SZXF1ZXN0QnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVCdXR0b247IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlclJlcXVpcmVkQ29udHJvbCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpZWxkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsS2V5ID0gJ2xhYmVsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZEtleSA9ICdyZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHRjb25zdCBbIG5hbWUsIGRhdGEgXSA9IGZpZWxkO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxyXG5cdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lIH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmllbGQtbWFwX19yb3ctbGFiZWxcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fbGFiZWwnIH0+XHJcblx0XHRcdFx0XHR7ICggZGF0YS5oYXNPd25Qcm9wZXJ0eSggbGFiZWxLZXkgKSAmJiBkYXRhWyBsYWJlbEtleSBdICkgJiYgZGF0YVsgbGFiZWxLZXkgXSB9XHJcblx0XHRcdFx0XHR7ICggISBkYXRhLmhhc093blByb3BlcnR5KCBsYWJlbEtleSApICkgJiYgZGF0YSB9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdHsgKCBkYXRhLmhhc093blByb3BlcnR5KCByZXF1aXJlZEtleSApICYmIGRhdGFbIHJlcXVpcmVkS2V5IF0gKSAmJlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdmaWVsZHMtbWFwX19yZXF1aXJlZCcgfT4gKjwvc3Bhbj4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59IiwiaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gXCIuLi9ob29rcy9ob29rcy1oZWxwZXJcIjtcclxuaW1wb3J0IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzIGZyb20gXCIuLi9nYXRld2F5cy9nYXRld2F5LWFjdGlvbi1hdHRydWJpdGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWN0aW9uc0J5VHlwZSA9IHR5cGUgPT4ge1xyXG5cdGNvbnN0IFsgYWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xyXG5cclxuXHRyZXR1cm4gYWN0aW9ucy5maWx0ZXIoIGFjdGlvbiA9PiB0eXBlID09PSBhY3Rpb24udHlwZSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbGl6ZUhlbHBlciA9IG5hbWUgPT4ge1xyXG5cdHJldHVybiBuYW1lID8gd2luZG93LkpldEZCTG9jYWxpemVIZWxwZXJbIG5hbWUgXSA6IHdpbmRvdy5KZXRGQkxvY2FsaXplSGVscGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkJ5VHlwZUxpc3QgPSAoIGFjdGlvblR5cGUsIHdpdGhEZXNjID0gZmFsc2UgKSA9PiB7XHJcblx0cmV0dXJuIGdldEFjdGlvbnNCeVR5cGUoIGFjdGlvblR5cGUgKS5tYXAoIGFjdGlvbiA9PiB7XHJcblx0XHRjb25zdCBuZXdBY3Rpb24gPSB7XHJcblx0XHRcdHZhbHVlOiBhY3Rpb24uaWQsXHJcblx0XHRcdGxhYmVsOiBmcm9tTG9jYWxpemVIZWxwZXIoICdnZXRBY3Rpb25MYWJlbCcgKSggYWN0aW9uLnR5cGUgKSxcclxuXHRcdH07XHJcblx0XHRpZiAoIHdpdGhEZXNjICkge1xyXG5cdFx0XHRuZXdBY3Rpb24ubGFiZWwgKz0gYCAoJHsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH0pYFxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBuZXdBY3Rpb247XHJcblx0fSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGlvblNldHRpbmdzID0gYWN0aW9uSWQgPT4ge1xyXG5cdGNvbnN0IFsgYWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xyXG5cdGNvbnN0IGFjdGlvbiA9IGFjdGlvbnMuZmluZCggYWN0aW9uID0+IGFjdGlvbklkID09PSBhY3Rpb24uaWQgKTtcclxuXHJcblx0cmV0dXJuICggYWN0aW9uICYmIGFjdGlvbi5zZXR0aW5ncyApID8gYWN0aW9uLnNldHRpbmdzIDogZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29udmVydExpc3RUb0ZpZWxkc01hcCA9IHNvdXJjZSA9PiB7XHJcblx0cmV0dXJuIHNvdXJjZS5tYXAoIGl0ZW0gPT4ge1xyXG5cdFx0Y29uc3QgaWQgPSBpdGVtLnZhbHVlO1xyXG5cdFx0ZGVsZXRlIGl0ZW0udmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuIFsgaWQsIGl0ZW0gXTtcclxuXHR9ICk7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0IGZyb20gXCIuL2FjdGlvbi13cmFwcGVyXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRBY3Rpb24oIGFjdGlvblR5cGUsIGFjdGlvbkluc3RhbmNlICkge1xyXG5cdHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgPSB3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zIHx8IHt9O1xyXG5cdHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnNbIGFjdGlvblR5cGUgXSA9IHdpdGhBY3Rpb25Mb2NhbGl6ZVNjcmlwdCggYWN0aW9uVHlwZSwgYWN0aW9uSW5zdGFuY2UgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBmcm9tTG9jYWxpemVIZWxwZXIgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyXCI7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQoIGFjdGlvblR5cGUsIEFjdGlvbkluc3RhbmNlICkge1xyXG5cdGNvbnN0IGxvY2FsaXplZERhdGEgPSBmcm9tTG9jYWxpemVIZWxwZXIoICdnZXRMb2NhbGl6ZWRGdWxsUGFjaycgKSggYWN0aW9uVHlwZSApO1xyXG5cclxuXHRyZXR1cm4gcHJvcHMgPT4ge1xyXG5cdFx0Y29uc3Qgb25DaGFuZ2VTZXR0aW5nID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0XHRwcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRcdFsga2V5IF06IHZhbHVlLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGdldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZSB9ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdFx0aWYgKCB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZUZpZWxkLCB2YWx1ZSB9ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBmaWVsZHNNYXAgPSB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdLFxyXG5cdFx0XHRcdFsgbmFtZUZpZWxkIF06IHZhbHVlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIHNvdXJjZSBdOiBmaWVsZHNNYXAsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBhZGRpdGlvbmFsUHJvcHMgPSB7IG9uQ2hhbmdlU2V0dGluZywgZ2V0TWFwRmllbGQsIHNldE1hcEZpZWxkIH07XHJcblx0XHRjb25zdCByZXN1bHRQcm9wcyA9IHsgLi4ucHJvcHMsIC4uLmxvY2FsaXplZERhdGEsIC4uLmFkZGl0aW9uYWxQcm9wcyB9O1xyXG5cclxuXHRcdHJldHVybiA8PlxyXG5cdFx0XHQ8QWN0aW9uSW5zdGFuY2UgeyAuLi5yZXN1bHRQcm9wcyB9IC8+XHJcblx0XHRcdHsgYXBwbHlGaWx0ZXJzKCBgamV0LmZiLnJlbmRlci5hY3Rpb24uJHsgYWN0aW9uVHlwZSB9YCwgPD48Lz4sIHJlc3VsdFByb3BzICkgfVxyXG5cdFx0PC8+XHJcblx0fTtcclxufSIsIlxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IgPSAoIGJsb2NrUGFyc2VyRnVuYyApID0+IHtcclxuXHRjb25zdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciA9ICggYmxvY2tzICkgPT4ge1xyXG5cclxuXHRcdGJsb2NrcyA9IGJsb2NrcyB8fCB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xyXG5cclxuXHRcdGJsb2Nrcy5tYXAoIGJsb2NrID0+IHtcclxuXHRcdFx0YmxvY2tQYXJzZXJGdW5jKCBibG9jayApO1xyXG5cclxuXHRcdFx0aWYgKCBibG9jay5pbm5lckJsb2Nrcy5sZW5ndGggKSB7XHJcblx0XHRcdFx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrLmlubmVyQmxvY2tzICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvcigpO1xyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtRmllbGRzQmxvY2tzID0gKCBleGNsdWRlID0gW10sIHBsYWNlaG9sZGVyID0gZmFsc2UgKSA9PiB7XHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IFtdO1xyXG5cclxuXHRsZXQgc2tpcEZpZWxkcyA9IFsgJ3N1Ym1pdCcsICdmb3JtLWJyZWFrJywgJ2hlYWRpbmcnLCAnZ3JvdXAtYnJlYWsnLCAuLi5leGNsdWRlIF07XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XHJcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXHJcblx0XHRcdCYmIGJsb2NrLmF0dHJpYnV0ZXMubmFtZVxyXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXHJcblx0XHQpIHtcclxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKCB7XHJcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxyXG5cdFx0XHRcdG5hbWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdFx0dmFsdWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIHBsYWNlaG9sZGVyXHJcblx0XHQ/IFsgeyB2YWx1ZTogJycsIGxhYmVsOiBwbGFjZWhvbGRlciB9LCAuLi5mb3JtRmllbGRzIF1cclxuXHRcdDogZm9ybUZpZWxkcztcclxufVxyXG5cclxuY29uc3QgZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQgPSAoIHBsYWNlaG9sZGVyID0gZmFsc2UgKSA9PiB7XHJcblxyXG5cdGNvbnN0IHNraXBGaWVsZHMgPSBbICdzdWJtaXQnLCAnZm9ybS1icmVhaycsICdoZWFkaW5nJywgJ2dyb3VwLWJyZWFrJyBdO1xyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBbXTtcclxuXHJcblx0Y29uc3QgY3VycmVudCA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9jaygpO1xyXG5cclxuXHRpZiAoIG51bGwgPT09IGN1cnJlbnQgKSB7XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xyXG5cdFx0aWYgKCBibG9jay5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxyXG5cdFx0XHQmJiBjdXJyZW50LmNsaWVudElkICE9PSBibG9jay5jbGllbnRJZFxyXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXHJcblx0XHQpIHtcclxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKCB7XHJcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxyXG5cdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzLmxhYmVsIHx8IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHR2YWx1ZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gcGxhY2Vob2xkZXJcclxuXHRcdD8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxyXG5cdFx0OiBmb3JtRmllbGRzO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzID0gKCBleGNsdWRlID0gW10gKSA9PiB7XHJcblx0bGV0IGZpZWxkcyA9IFtdO1xyXG5cdGNvbnN0IGJsb2NrcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIGV4Y2x1ZGUgKTtcclxuXHJcblx0aWYgKCBibG9ja3MgKSB7XHJcblx0XHRibG9ja3MuZm9yRWFjaCggaXRlbSA9PiBmaWVsZHMucHVzaCggaXRlbS5uYW1lICkgKTtcclxuXHR9XHJcblx0cmV0dXJuIGZpZWxkcztcclxufVxyXG5cclxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nID0gKCBibG9ja05hbWUgKSA9PiB7XHJcblx0Y29uc3QgZmllbGRzID0gZ2V0QXZhaWxhYmxlRmllbGRzKCBbIGJsb2NrTmFtZSBdICk7XHJcblxyXG5cdGxldCBmaWVsZHNTdHJpbmcgPSBbXTtcclxuXHRmaWVsZHMuZm9yRWFjaCggZnVuY3Rpb24gKCBpdGVtICkge1xyXG5cdFx0ZmllbGRzU3RyaW5nLnB1c2goICclRklFTEQ6OicgKyBpdGVtICsgJyUnICk7XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gX18oICdBdmFpbGFibGUgZmllbGRzOiAnICkgKyBmaWVsZHNTdHJpbmcuam9pbiggJywgJyApO1xyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0SW5uZXJCbG9ja3MgPSAoIGNsaWVudElkICkgPT4ge1xyXG5cdGNvbnN0IGJsb2NrID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9jayggY2xpZW50SWQgKTtcclxuXHRyZXR1cm4gYmxvY2sgPyBibG9jay5pbm5lckJsb2NrcyA6IFtdO1xyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtRmllbGRzQnlCbG9jayA9ICggYmxvY2tFeGNsdWRlICkgPT4ge1xyXG5cdHJldHVybiAoKSA9PiBnZXRGb3JtRmllbGRzQmxvY2tzKCBbIGJsb2NrRXhjbHVkZS5uYW1lIF0gKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcblx0Z2V0Rm9ybUZpZWxkc0J5QmxvY2ssXHJcblx0Z2V0SW5uZXJCbG9ja3MsXHJcblx0Z2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcclxuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxyXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxyXG59O1xyXG5cclxuIiwiaW1wb3J0IHtcclxuXHRmcm9tTG9jYWxpemVIZWxwZXIsXHJcblx0Z2V0QWN0aW9uU2V0dGluZ3MsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIHtcclxuXHRjb25zdCB7IGdhdGV3YXlBdHRycywgbGFiZWwgfSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb24udHlwZSApO1xyXG5cdGNvbnN0IGFjdGlvblNldHRpbmdzID0gZ2V0QWN0aW9uU2V0dGluZ3MoIGFjdGlvbi5pZCApO1xyXG5cclxuXHRjb25zdCB2YWx1ZSA9IGF0dHIgPT4ge1xyXG5cdFx0aWYgKCBhY3Rpb25TZXR0aW5nc1sgYXR0ciBdICkge1xyXG5cdFx0XHRyZXR1cm4gYWN0aW9uU2V0dGluZ3NbIGF0dHIgXTtcclxuXHRcdH1cclxuXHRcdGlmICggYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF0gJiYgYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF1bIGF0dHIgXSApIHtcclxuXHRcdFx0cmV0dXJuIGFjdGlvblNldHRpbmdzWyBhY3Rpb24udHlwZSBdWyBhdHRyIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJ05VTEwnO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxhYmVsV2l0aEF0dHJzID0gZ2F0ZXdheUF0dHJzKCkubWFwKCBhdHRyID0+ICggYCR7IGxhYmVsKCBhdHRyICkgfSAkeyB2YWx1ZSggYXR0ciApIH1gICkgKTtcclxuXHJcblx0cmV0dXJuIGxhYmVsV2l0aEF0dHJzLmpvaW4oICcsICcgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXM7IiwiZXhwb3J0IGNvbnN0IGdhdGV3YXlBdHRyID0gKCBhdHRyID0gZmFsc2UsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBkYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xyXG5cclxuXHRpZiAoICEgYXR0ciApIHtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHRpZiAoICEgZGF0YVsgYXR0ciBdICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgc291cmNlID0gZGF0YVsgYXR0ciBdO1xyXG5cclxuXHRyZXR1cm4gbmFtZSA9PiBzb3VyY2VbIG5hbWUgXSA/IHNvdXJjZVsgbmFtZSBdIDogaXNFbXB0eTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYXRld2F5TGFiZWwgPSAoIHR5cGUsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xyXG5cclxuXHRyZXR1cm4gYXR0ciA9PiBsYWJlbCggdHlwZSApID8gbGFiZWwoIHR5cGUgKVsgYXR0ciBdIDogaXNFbXB0eTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyR2F0ZXdheSA9ICggaWQsIGNhbGxiYWNrICkgPT4ge1xyXG5cdHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCA9IHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCB7fTtcclxuXHR3aW5kb3cuamV0RkJHYXRld2F5c0xpc3RbIGlkIF0gPSBjYWxsYmFjaztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJHYXRld2F5ID0gKCBpZCwgcHJvcHMgKSA9PiB7XHJcblx0aWYgKCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRjb25zdCBHYXRld2F5Q29tcG9uZW50ID0gd2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdO1xyXG5cclxuXHRyZXR1cm4gPEdhdGV3YXlDb21wb25lbnQgeyAuLi5wcm9wcyB9IC8+O1xyXG59OyIsImNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VTZWxlY3QsXHJcblx0XHQgIHVzZURpc3BhdGNoLFxyXG5cdCAgfSA9IHdwLmRhdGE7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWV0YVN0YXRlID0gKCBrZXksIGlmRW1wdHkgPSAne30nICkgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdH0gKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGVkaXRQb3N0LFxyXG5cdFx0ICB9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0Y29uc3QgWyBtZXRhU3RhdGVWYWx1ZSwgc2V0TWV0YVN0YXRlVmFsdWUgXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhWyBrZXkgXSB8fCBpZkVtcHR5ICkgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRtZXRhOiAoIHtcclxuXHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFsga2V5IF06IEpTT04uc3RyaW5naWZ5KCBtZXRhU3RhdGVWYWx1ZSApLFxyXG5cdFx0XHR9ICksXHJcblx0XHR9ICk7XHJcblx0fSwgWyBtZXRhU3RhdGVWYWx1ZSBdICk7XHJcblxyXG5cdHJldHVybiBbIG1ldGFTdGF0ZVZhbHVlLCBzZXRNZXRhU3RhdGVWYWx1ZSBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFjdGlvbnMgPSAoIHdpdGhFZGl0UG9zdEVmZmVjdCA9IGZhbHNlICkgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdH0gKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGVkaXRQb3N0LFxyXG5cdFx0ICB9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0Y29uc3QgWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF0gPSB1c2VTdGF0ZSggSlNPTi5wYXJzZSggbWV0YS5famZfYWN0aW9ucyB8fCAnW10nICkgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIHdpdGhFZGl0UG9zdEVmZmVjdCApIHtcclxuXHRcdFx0ZWRpdFBvc3QoIHtcclxuXHRcdFx0XHRtZXRhOiAoIHtcclxuXHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRfamZfYWN0aW9uczogSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnMgKSxcclxuXHRcdFx0XHR9ICksXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9LCBbIGFjdGlvbnMgXSApO1xyXG5cclxuXHRyZXR1cm4gWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF07XHJcbn07XHJcbmNvbnN0IGluaXRDbGFzc2VzID0gWyAnamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlVmFsaWRDbGFzc2VzID0gaW5pdGlhbFZhbGlkID0+IHtcclxuXHRjb25zdCB2YWxpZENsYXNzID0gJ2lzLXZhbGlkJztcclxuXHRjb25zdCBpbnZhbGlkQ2xhc3MgPSAnaXMtaW52YWxpZCdcclxuXHJcblx0Y29uc3QgaW5pdFN0YXRlQ2xhc3NlcyA9ICgpID0+IHtcclxuXHRcdGlmICggaW5pdGlhbFZhbGlkICkge1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5pbml0Q2xhc3NlcywgdmFsaWRDbGFzcyBdO1xyXG5cdFx0fSBlbHNlIGlmICggISBpbml0aWFsVmFsaWQgKSB7XHJcblx0XHRcdHJldHVybiBbIC4uLmluaXRDbGFzc2VzLCBpbnZhbGlkQ2xhc3MgXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBbIGNsYXNzZXMsIHNldENsYXNzZXMgXSA9IHVzZVN0YXRlKCBpbml0U3RhdGVDbGFzc2VzKCkgKTtcclxuXHJcblx0Y29uc3Qgc2V0VmFsaWRDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsIHZhbGlkQ2xhc3MgXSApXHJcblx0fTtcclxuXHRjb25zdCBzZXRJbnZhbGlkQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCBpbnZhbGlkQ2xhc3MgXSApXHJcblx0fTtcclxuXHRjb25zdCBzZXRMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCAnbG9hZGluZycgXSApXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIFsgY2xhc3Nlcy5qb2luKCAnICcgKSwgc2V0VmFsaWRDbGFzcywgc2V0SW52YWxpZENsYXNzLCBzZXRMb2FkaW5nQ2xhc3MgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMgPSAoKSA9PiB7XHJcblx0Y29uc3QgWyBjbGFzc2VzLCBzZXRDbGFzc2VzIF0gPSB1c2VTdGF0ZSggWyAuLi5pbml0Q2xhc3NlcyBdICk7XHJcblxyXG5cdGNvbnN0IHNldExvYWRpbmdDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsICdsb2FkaW5nJyBdIClcclxuXHR9O1xyXG5cdGNvbnN0IGNsZWFyTG9hZGluZ0NsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggaW5pdENsYXNzZXMgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBbIGNsYXNzZXMuam9pbiggJyAnICksIHNldExvYWRpbmdDbGFzcywgY2xlYXJMb2FkaW5nQ2xhc3MgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN1Y2Nlc3NOb3RpY2UgPSAoIHRleHQsIG9wdGlvbnMgPSB7fSApID0+IHtcclxuXHRjb25zdCBbIGhhc0NvcGllZCwgc2V0SGFzQ29waWVkIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHRjb25zdCBub3RpY2VTdG9yZSA9IHVzZURpc3BhdGNoKCB3cC5ub3RpY2VzLnN0b3JlICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCBoYXNDb3BpZWQgKSB7XHJcblx0XHRcdG5vdGljZVN0b3JlLmNyZWF0ZVdhcm5pbmdOb3RpY2UoIHRleHQsIHsgdHlwZTogJ3NuYWNrYmFyJywgLi4ub3B0aW9ucyB9ICk7XHJcblx0XHR9XHJcblx0fSwgWyBoYXNDb3BpZWQgXSApO1xyXG5cclxuXHRyZXR1cm4gc2V0SGFzQ29waWVkO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhKZmJNZXRhID0gKGNhbGxhYmxlKSA9PiB7XHJcblxyXG59O1xyXG4iLCJcclxuZnVuY3Rpb24gZ2xvYmFsVGFiKCB7IHNsdWcsIGVsZW1lbnQgPSAnJywgZW1wdHkgPSAnJyB9ICkge1xyXG5cdGNvbnN0IGdsb2JhbCA9IEpldEZvcm1FZGl0b3JEYXRhLmdsb2JhbF9zZXR0aW5ncztcclxuXHJcblx0aWYoICEgZ2xvYmFsICkge1xyXG5cdFx0cmV0dXJuIGVtcHR5O1xyXG5cdH1cclxuXHJcblx0aWYgKCBlbGVtZW50ICkge1xyXG5cdFx0cmV0dXJuICggZ2xvYmFsWyBzbHVnIF0gJiYgZ2xvYmFsWyBzbHVnIF1bIGVsZW1lbnQgXSApID8gZ2xvYmFsWyBzbHVnIF1bIGVsZW1lbnQgXSA6IGVtcHR5O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdsb2JhbFsgc2x1ZyBdIHx8IGVtcHR5O1xyXG59XHJcblxyXG5leHBvcnQgeyBnbG9iYWxUYWIgfTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5jbGFzcyBUb29scyB7XHJcblxyXG5cdHN0YXRpYyBnZXRMYWJlbCggbWV0YSwgYXR0cnMgKSB7XHJcblx0XHRjb25zdCBsYWJlbCA9IHt9O1xyXG5cdFx0bGFiZWwubmFtZSA9IGF0dHJzLmxhYmVsO1xyXG5cdFx0aWYgKCBhdHRycy5yZXF1aXJlZCApIHtcclxuXHRcdFx0bGFiZWwubWFyayA9IEpTT04ucGFyc2UoIG1ldGEuX2pmX2FyZ3MgKS5yZXF1aXJlZF9tYXJrIHx8ICcnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGxhYmVsO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHdpdGhQbGFjZWhvbGRlciggc291cmNlLCBsYWJlbCA9ICctLScsIHZhbHVlID0gJycgKSB7XHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHR7IGxhYmVsLCB2YWx1ZSB9LFxyXG5cdFx0XHQuLi5zb3VyY2UsXHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGlzRW1wdHlPYmplY3QoIG9iamVjdCApIHtcclxuXHRcdHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIG9iamVjdCAmJiBPYmplY3Qua2V5cyggb2JqZWN0ICkubGVuZ3RoID09PSAwO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldEZ1bmNDb25kaXRpb24oIG5hbWVGdW5jdGlvbiApIHtcclxuXHRcdHJldHVybiBuZXcgRnVuY3Rpb24oIGByZXR1cm4gd2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9uc1sgJyR7IG5hbWVGdW5jdGlvbiB9JyBdYCApO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZENvbmRpdGlvbkZvckNvbmRUeXBlKCBuYW1lLCBjYWxsYWJsZSApIHtcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zIHx8IHt9O1xyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9uc1sgbmFtZSBdID0gY2FsbGFibGU7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcGFyc2VDb25kaXRpb25zRnVuYyggc291cmNlICkge1xyXG5cdFx0Y29uc3QgdHlwZXMgPSBbXTtcclxuXHJcblx0XHRzb3VyY2UuZm9yRWFjaCggdHlwZSA9PiB7XHJcblx0XHRcdGlmICggdHlwZS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCBUb29scy5nZXRGdW5jQ29uZGl0aW9uKCB0eXBlLmNvbmRpdGlvbiApKCkoIHR5cGUudmFsdWUgKSApIHtcclxuXHRcdFx0XHRcdHR5cGVzLnB1c2goIHR5cGUgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dHlwZXMucHVzaCggdHlwZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIHR5cGVzO1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudCA9IG5hbWUgPT4ge1xyXG5cdGNvbnN0IGluaXRpYWxpemVDYWxsYmFja3NFdmVudCA9IG5ldyBFdmVudCggbmFtZSApO1xyXG5cdHJldHVybiAoKSA9PiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZW4gPSAoIG5hbWUsIGZ1bmMgKSA9PiB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZnVuYyApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVyc2lvbkNvbXBhcmUoIHZlcnNpb24xLCB2ZXJzaW9uMiwgb3BlcmF0b3IgKSB7XHJcblx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIHZlcnNpb24xICkge1xyXG5cdFx0dmVyc2lvbjEgPSArKCB2ZXJzaW9uMS5zcGxpdCggJy4nICkuam9pbiggJycgKSApO1xyXG5cdH1cclxuXHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgdmVyc2lvbjIgKSB7XHJcblx0XHR2ZXJzaW9uMiA9ICsoIHZlcnNpb24yLnNwbGl0KCAnLicgKS5qb2luKCAnJyApICk7XHJcblx0fVxyXG5cdGlmICggMCA+PSB2ZXJzaW9uMSB8fCAwID49IHZlcnNpb24yICkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnSW52YWxpZCBhcmd1bWVudHM6IHZlcnNpb24xIG9yIHZlcnNpb24yJyApO1xyXG5cdH1cclxuXHJcblx0aWYgKCBbICc+JywgJzwnLCAnPT09JywgJz09JywgJz49JywgJzw9JyBdLmluY2x1ZGVzKCBvcGVyYXRvciApICkge1xyXG5cdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggYHJldHVybiAkeyB2ZXJzaW9uMSB9ICR7IG9wZXJhdG9yIH0gJHsgdmVyc2lvbjIgfWAgKSgpO1xyXG5cdH1cclxuXHR0aHJvdyBuZXcgRXJyb3IoICdJbnZhbGlkIGFyZ3VtZW50czogb3BlcmF0b3InICk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnZlcnRTeW1ib2xzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnRvb2xzLmNvbnZlcnRTeW1ib2xzJywge1xyXG5cdGNoZWNrQ3lyUmVnZXg6IC9b0LAt0Y/RkdGX0ZTSkdGWXS9pLFxyXG5cdGN5clJlZ2V4OiAvW9CwLdGP0ZHRl9GU0pHRll0vZ2ksXHJcblx0Y2hhcnNNYXA6IHtcclxuXHRcdCfQsCc6ICdhJywgJ9CxJzogJ2InLCAn0LInOiAndicsICfQsyc6ICdnJywgJ9C0JzogJ2QnLFxyXG5cdFx0J9C1JzogJ2UnLCAn0ZEnOiAnaW8nLCAn0LYnOiAnemgnLCAn0LcnOiAneicsICfQuCc6ICdpJyxcclxuXHRcdCfQuSc6ICdpJywgJ9C6JzogJ2snLCAn0LsnOiAnbCcsICfQvCc6ICdtJywgJ9C9JzogJ24nLFxyXG5cdFx0J9C+JzogJ28nLCAn0L8nOiAncCcsICfRgCc6ICdyJywgJ9GBJzogJ3MnLCAn0YInOiAndCcsXHJcblx0XHQn0YMnOiAndScsICfRhCc6ICdmJywgJ9GFJzogJ2toJywgJ9GGJzogJ3RzJywgJ9GHJzogJ2NoJyxcclxuXHRcdCfRiCc6ICdzaCcsICfRiSc6ICdzaGNoJywgJ9GLJzogJ3knLCAn0Y0nOiAnZScsICfRjic6ICdpdScsXHJcblx0XHQn0Y8nOiAnaWEnLCAn0ZcnOiAnaScsICfRlCc6ICdpZScsICfSkSc6ICdnJywgJ9GWJzogJ2knLFxyXG5cdH0sXHJcbn0gKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXliZUN5clRvTGF0aW4oIHN0ciApIHtcclxuXHRpZiAoIGNvbnZlcnRTeW1ib2xzLmNoZWNrQ3lyUmVnZXgudGVzdCggc3RyICkgKSB7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSggY29udmVydFN5bWJvbHMuY3lyUmVnZXgsIGZ1bmN0aW9uKCBtYXRjaCApIHtcclxuXHJcblx0XHRcdGlmICggdW5kZWZpbmVkID09PSBjb252ZXJ0U3ltYm9scy5jaGFyc01hcFsgbWF0Y2ggXSApIHtcclxuXHRcdFx0XHRyZXR1cm4gJyc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBjb252ZXJ0U3ltYm9scy5jaGFyc01hcFsgbWF0Y2ggXTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb252ZXJ0ZWROYW1lKCB2YWx1ZVRvQ2hhbmdlICkge1xyXG5cdHZhciByZWdleCA9IC9cXHMrL2csXHJcblx0XHRzbHVnICA9IHZhbHVlVG9DaGFuZ2UudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCByZWdleCwgJy0nICk7XHJcblxyXG5cdC8vIFJlcGxhY2UgYWNjZW50c1xyXG5cdHNsdWcgPSBzbHVnLm5vcm1hbGl6ZSggJ05GRCcgKS5yZXBsYWNlKCAvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIiApO1xyXG5cclxuXHQvLyBSZXBsYWNlIGN5cmlsbGljXHJcblx0c2x1ZyA9IG1heWJlQ3lyVG9MYXRpbiggc2x1ZyApO1xyXG5cclxuXHRpZiAoIDIwIDwgc2x1Zy5sZW5ndGggKSB7XHJcblx0XHRzbHVnID0gc2x1Zy5zdWJzdHIoIDAsIDIwICk7XHJcblxyXG5cdFx0aWYgKCAnLScgPT09IHNsdWcuc2xpY2UoIC0xICkgKSB7XHJcblx0XHRcdHNsdWcgPSBzbHVnLnNsaWNlKCAwLCAtMSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNsdWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFzc25hbWVzKCAuLi5hZGRpdGlvbmFsICkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IFtdXHJcblxyXG5cdGNvbnN0IHBhcnNlVmFsdWVzID0gc291cmNlID0+IHtcclxuXHRcdHNvdXJjZS5mb3JFYWNoKCBpdGVtQ2xhc3MgPT4ge1xyXG5cdFx0XHRpZiAoICEgaXRlbUNsYXNzICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGl0ZW1DbGFzcyApICkge1xyXG5cdFx0XHRcdHBhcnNlVmFsdWVzKCBpdGVtQ2xhc3MgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgaXRlbUNsYXNzICkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKCBpdGVtQ2xhc3MudHJpbSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgaXRlbUNsYXNzICkge1xyXG5cdFx0XHRcdGZvciAoIGNvbnN0IGl0ZW1DbGFzc0tleSBpbiBpdGVtQ2xhc3MgKSB7XHJcblx0XHRcdFx0XHRpZiAoIGl0ZW1DbGFzc1sgaXRlbUNsYXNzS2V5IF0gKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKCAoaXRlbUNsYXNzS2V5ICsgXCJcIikudHJpbSgpIClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gKVxyXG5cdH07XHJcblxyXG5cdHBhcnNlVmFsdWVzKCBhZGRpdGlvbmFsICk7XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdC5qb2luKCAnICcgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWN0aW9uRmllbGRzTWFwIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXBcIjtcclxuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9uLW1vZGFsXCI7XHJcbmltcG9ydCBXcmFwcGVyUmVxdWlyZWRDb250cm9sIGZyb20gXCIuL2NvbXBvbmVudHMvd3JhcHBlci1yZXF1aXJlZC1jb250cm9sXCI7XHJcbmltcG9ydCBSZXF1ZXN0QnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IFZhbGlkYXRlQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvdmFsaWRhdGUtYnV0dG9uXCI7XHJcbmltcG9ydCBhZGRBY3Rpb24gZnJvbSBcIi4vaGVscGVycy9hY3Rpb25zL2FjdGlvbi1tYW5hZ2VyXCI7XHJcbmltcG9ydCBUb29scywge1xyXG5cdGNsYXNzbmFtZXMsXHJcblx0ZXZlbnQsXHJcblx0Z2V0Q29udmVydGVkTmFtZSxcclxuXHRsaXN0ZW4sXHJcblx0bWF5YmVDeXJUb0xhdGluLFxyXG5cdHZlcnNpb25Db21wYXJlLFxyXG59IGZyb20gXCIuL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IER5bmFtaWNQcmVzZXQgZnJvbSBcIi4vY29tcG9uZW50cy9wcmVzZXRzL2R5bmFtaWMtcHJlc2V0XCI7XHJcbmltcG9ydCBKZXRGaWVsZHNNYXBDb250cm9sIGZyb20gXCIuLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXBcIjtcclxuaW1wb3J0IEZpZWxkV2l0aFByZXNldCBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC13aXRoLXByZXNldFwiO1xyXG5pbXBvcnQge1xyXG5cdEdsb2JhbEZpZWxkLFxyXG5cdEF2YWlsYWJsZU1hcEZpZWxkLFxyXG5cdE1hcEZpZWxkLFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtcmVuZGVyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcsXHJcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGb3JtRmllbGRzQnlCbG9jayxcclxuXHRnZXRJbm5lckJsb2NrcyxcclxufSBmcm9tIFwiLi9oZWxwZXJzL2Jsb2Nrcy9ibG9ja3MtaGVscGVyXCI7XHJcbmltcG9ydCB7XHJcblx0Z2F0ZXdheUF0dHIsXHJcblx0Z2F0ZXdheUxhYmVsLFxyXG5cdHJlZ2lzdGVyR2F0ZXdheSxcclxuXHRyZW5kZXJHYXRld2F5LFxyXG59IGZyb20gXCIuL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1oZWxwZXJcIjtcclxuaW1wb3J0IHtcclxuXHR1c2VBY3Rpb25zLFxyXG5cdHVzZU1ldGFTdGF0ZSxcclxuXHR1c2VTdGF0ZVZhbGlkQ2xhc3NlcyxcclxuXHR1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzLFxyXG5cdHVzZVN1Y2Nlc3NOb3RpY2UsXHJcbn0gZnJvbSBcIi4vaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXJcIjtcclxuaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC13cmFwcGVyXCI7XHJcbmltcG9ydCBNYWNyb3NJbnNlcnRlciBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9tYWNyb3MtaW5zZXJ0ZXJcIjtcclxuaW1wb3J0IFJlcGVhdGVyV2l0aFN0YXRlIGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRzL3JlcGVhdGVyLXdpdGgtc3RhdGVcIjtcclxuaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSBcIi4vY29tcG9uZW50cy9wcmVzZXRzL3ByZXNldC1lZGl0b3JcIjtcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHMsXHJcblx0RmllbGRDb250cm9sLFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLWNvbnRyb2xcIjtcclxuaW1wb3J0IFBsYWNlaG9sZGVyTWVzc2FnZSBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZVwiO1xyXG5pbXBvcnQgQWN0aW9uTWVzc2FnZXMgZnJvbSBcIi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tZXNzYWdlc1wiO1xyXG5pbXBvcnQgSG9yaXpvbnRhbExpbmUgZnJvbSBcIi4vY29tcG9uZW50cy9ob3Jpem9udGFsLWxpbmVcIjtcclxuaW1wb3J0IFJlcXVlc3RMb2FkaW5nQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVxdWVzdC1sb2FkaW5nLWJ1dHRvblwiO1xyXG5pbXBvcnQge1xyXG5cdGFjdGlvbkJ5VHlwZUxpc3QsXHJcblx0Y29udmVydExpc3RUb0ZpZWxkc01hcCxcclxuXHRmcm9tTG9jYWxpemVIZWxwZXIsXHJcblx0Z2V0QWN0aW9uU2V0dGluZ3MsXHJcbn0gZnJvbSBcIi4vaGVscGVycy9hY3Rpb25zL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzIGZyb20gXCIuL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xyXG5pbXBvcnQgeyBnbG9iYWxUYWIgfSBmcm9tIFwiLi9oZWxwZXJzL3NldHRpbmdzL2hlbHBlclwiO1xyXG5pbXBvcnQgRmllbGRTZXR0aW5nc1dyYXBwZXIgZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC1zZXR0aW5ncy13cmFwcGVyJztcclxuaW1wb3J0IEdyb3VwZWRTZWxlY3RDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9ncm91cGVkLXNlbGVjdC1jb250cm9sJztcclxuaW1wb3J0IHtcclxuXHRnZXRCbG9ja0NvbnRyb2xzLFxyXG59IGZyb20gJy4vY29tcG9uZW50cy9maWVsZHMvY29udHJvbHMnO1xyXG5pbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xzL2Jhc2UtaGVscCc7XHJcblxyXG4vLyBKRkJDb21wb25lbnRzXHJcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgPSB7XHJcblx0QWN0aW9uRmllbGRzTWFwLFxyXG5cdEFjdGlvbk1vZGFsLFxyXG5cdFJlcXVlc3RCdXR0b24sXHJcblx0VmFsaWRhdGVCdXR0b24sXHJcblx0UmVxdWVzdExvYWRpbmdCdXR0b24sXHJcblx0V3JhcHBlclJlcXVpcmVkQ29udHJvbCxcclxuXHREeW5hbWljUHJlc2V0LFxyXG5cdEpldEZpZWxkc01hcENvbnRyb2wsXHJcblx0RmllbGRXaXRoUHJlc2V0LFxyXG5cdEdsb2JhbEZpZWxkLFxyXG5cdEF2YWlsYWJsZU1hcEZpZWxkLFxyXG5cdE1hcEZpZWxkLFxyXG5cdEZpZWxkV3JhcHBlcixcclxuXHRNYWNyb3NJbnNlcnRlcixcclxuXHRSZXBlYXRlcldpdGhTdGF0ZSxcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHMsXHJcblx0RmllbGRDb250cm9sLFxyXG5cdFBsYWNlaG9sZGVyTWVzc2FnZSxcclxuXHRIb3Jpem9udGFsTGluZSxcclxuXHRGaWVsZFNldHRpbmdzV3JhcHBlcixcclxuXHRBY3Rpb25NZXNzYWdlcyxcclxuXHRHcm91cGVkU2VsZWN0Q29udHJvbCxcclxuXHRCYXNlSGVscCxcclxufTtcclxuXHJcbi8vIEpGQkZ1bmN0aW9uc1xyXG53aW5kb3cuSmV0RkJBY3Rpb25zID0ge1xyXG5cdGFkZEFjdGlvbixcclxuXHR3aXRoUHJlc2V0LFxyXG5cdGdldEZvcm1GaWVsZHNCeUJsb2NrLFxyXG5cdGdldElubmVyQmxvY2tzLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcclxuXHRnYXRld2F5QXR0cixcclxuXHRnYXRld2F5TGFiZWwsXHJcblx0cmVnaXN0ZXJHYXRld2F5LFxyXG5cdFRvb2xzLFxyXG5cdGV2ZW50LFxyXG5cdGxpc3RlbixcclxuXHRhY3Rpb25CeVR5cGVMaXN0LFxyXG5cdGdldEFjdGlvblNldHRpbmdzLFxyXG5cdGZyb21Mb2NhbGl6ZUhlbHBlcixcclxuXHRyZW5kZXJHYXRld2F5LFxyXG5cdGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzLFxyXG5cdGdsb2JhbFRhYixcclxuXHR2ZXJzaW9uQ29tcGFyZSxcclxuXHRjb252ZXJ0TGlzdFRvRmllbGRzTWFwLFxyXG5cdG1heWJlQ3lyVG9MYXRpbixcclxuXHRnZXRDb252ZXJ0ZWROYW1lLFxyXG5cdGdldEJsb2NrQ29udHJvbHMsXHJcblx0Y2xhc3NuYW1lcyxcclxufTtcclxuXHJcbi8vIEpGQkhvb2tzXHJcbndpbmRvdy5KZXRGQkhvb2tzID0ge1xyXG5cdHVzZUFjdGlvbnMsXHJcblx0dXNlTWV0YVN0YXRlLFxyXG5cdHVzZVN0YXRlVmFsaWRDbGFzc2VzLFxyXG5cdHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMsXHJcblx0dXNlU3VjY2Vzc05vdGljZSxcclxufTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBYkE7QUFnQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBRUE7QUFDQTs7OztBQXBKQTtBQUNBO0FBcUpBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaktBO0FBSUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUlBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFPQTtBQUFBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFKQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQW5CQTtBQTBCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFiQTtBQW9CQTtBQUNBO0FBQ0E7QUFIQTtBQXRDQTtBQXBDQTtBQUFBO0FBbUZBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBS0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQXhFQTtBQStFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNsVEE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBR0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDdkRBO0FBS0E7QUFJQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SEE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBR0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBV0E7QUFEQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBaEVBO0FBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7O0FDMVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUF2QkE7QUFDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQVJBO0FBQ0E7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFYQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBWEE7QUFwREE7QUFtRUE7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUExREE7QUFDQTtBQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7OztBQ3JSQTtBQUVBO0FBQ0E7QUFHQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7QUNoSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBQUE7QUFBQTtBQUNBO0FBdUJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QTs7OztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFRQTtBQU1BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFDQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7OztBIiwic291cmNlUm9vdCI6IiJ9