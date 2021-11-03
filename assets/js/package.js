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

"use strict";
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

"use strict";
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
        attr = _objectWithoutProperties(_ref3, ["help", "attrName", "label"]);

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
        attr = _objectWithoutProperties(_ref4, ["help", "attrName", "label"]);

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
        return wp.element.createElement(_field_with_preset__WEBPACK_IMPORTED_MODULE_1__.default, {
          key: "".concat(attr.type, "-").concat(attrName, "-FieldWithPreset"),
          ModalEditor: function ModalEditor(_ref5) {
            var actionClick = _ref5.actionClick,
                onRequestClose = _ref5.onRequestClose;
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

"use strict";
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
      },
      currentIndex: index
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

"use strict";
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
  window.jetFormDefaultActions[actionType] = (0,_action_wrapper__WEBPACK_IMPORTED_MODULE_0__.default)(actionType, actionInstance);
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
  var suppressFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var formFields = [];
  var skipFields = ['submit', 'form-break', 'heading', 'group-break', 'conditional'].concat(_toConsumableArray(exclude));
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMetaState": () => (/* binding */ useMetaState),
/* harmony export */   "useActions": () => (/* binding */ useActions),
/* harmony export */   "useStateValidClasses": () => (/* binding */ useStateValidClasses),
/* harmony export */   "useStateLoadingClasses": () => (/* binding */ useStateLoadingClasses),
/* harmony export */   "useSuccessNotice": () => (/* binding */ useSuccessNotice),
/* harmony export */   "getRequestFields": () => (/* binding */ getRequestFields),
/* harmony export */   "useRequestFields": () => (/* binding */ useRequestFields),
/* harmony export */   "withRequestFields": () => (/* binding */ withRequestFields)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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
var withRequestFields = function withRequestFields(select) {
  var meta = select('core/editor').getEditedPostAttribute('meta') || {};
  var actions = JSON.parse(meta._jf_actions || '[]');
  var currentAction = select('jet-forms/actions').getCurrentAction();
  actions.splice(currentAction.index);
  return {
    requestFields: getRequestFields(actions)
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
      slug = valueToChange.toLowerCase().replace(regex, '_'); // Replace accents

  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // Replace cyrillic

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

/***/ }),

/***/ "./package/stores/action-store.js":
/*!****************************************!*\
  !*** ./package/stores/action-store.js ***!
  \****************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$data = wp.data,
    createReduxStore = _wp$data.createReduxStore,
    register = _wp$data.register;
var DEFAULT_STATE = {
  currentAction: {}
};
var actions = {
  setCurrentAction: function setCurrentAction(item) {
    return {
      type: 'SET_CURRENT_ACTION',
      item: item
    };
  }
};
var selectors = {
  getCurrentAction: function getCurrentAction(state) {
    return state.currentAction;
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
    }

    return state;
  },
  actions: actions,
  selectors: selectors
}));

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
/* harmony import */ var _stores_action_store__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_stores_action_store__WEBPACK_IMPORTED_MODULE_30__);






























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
  classnames: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__.classnames,
  getBlocksByName: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__.getBlocksByName
}; // JFBHooks

window.JetFBHooks = {
  useActions: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useActions,
  useMetaState: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useMetaState,
  useStateValidClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useStateValidClasses,
  useStateLoadingClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useStateLoadingClasses,
  useSuccessNotice: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useSuccessNotice,
  withRequestFields: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.withRequestFields,
  useRequestFields: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useRequestFields
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZmllbGRzLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbi1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvY29udHJvbHMvYmFzZS1oZWxwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtc2V0dGluZ3Mtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdpdGgtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL21hY3Jvcy1pbnNlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL3JlcGVhdGVyLXdpdGgtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2dyb3VwZWQtc2VsZWN0LWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2hvcml6b250YWwtbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9wcmVzZXRzL3ByZXNldC1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3JlcXVlc3QtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9yZXF1ZXN0LWxvYWRpbmctYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy92YWxpZGF0ZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3dyYXBwZXItcmVxdWlyZWQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24taGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9hY3Rpb25zL2FjdGlvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9hY3Rpb25zL2FjdGlvbi13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9ibG9ja3MvYmxvY2tzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvc2V0dGluZ3MvaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL3N0b3Jlcy9hY3Rpb24tc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3BhY2thZ2UvbWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmNsYXNzIEpldEZpZWxkc01hcENvbnRyb2wgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy5maWVsZFR5cGVzID0gdGhpcy5wcm9wcy5maWVsZFR5cGVzO1xuXHRcdHRoaXMudGF4b25vbWllc0xpc3QgPSB0aGlzLnByb3BzLnRheG9ub21pZXNMaXN0O1xuXHRcdHRoaXMuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG5cdFx0dGhpcy5tZXRhUHJvcCA9IHRoaXMucHJvcHMubWV0YVByb3AgPyB0aGlzLnByb3BzLm1ldGFQcm9wIDogJ3Bvc3RfbWV0YSc7XG5cdFx0dGhpcy50ZXJtc1Byb3AgPSB0aGlzLnByb3BzLnRlcm1zUHJvcCA/IHRoaXMucHJvcHMudGVybXNQcm9wIDogJ3Bvc3RfdGVybXMnO1xuXHRcdHRoaXMuaW5kZXggPSB0aGlzLnByb3BzLmluZGV4O1xuXG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5iaW5kRnVuY3Rpb25zKCk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dHlwZTogdGhpcy5nZXRGaWVsZFR5cGUoIHRoaXMucHJvcHMuZmllbGRWYWx1ZSApLFxuXHRcdH07XG5cdH1cblxuXHRiaW5kRnVuY3Rpb25zKCkge1xuXHRcdHRoaXMub25DaGFuZ2VUeXBlID0gdGhpcy5vbkNoYW5nZVR5cGUuYmluZCggdGhpcyApO1xuXHRcdHRoaXMub25DaGFuZ2VWYWx1ZSA9IHRoaXMub25DaGFuZ2VWYWx1ZS5iaW5kKCB0aGlzICk7XG5cdH1cblxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5pZCA9IGBpbnNwZWN0b3Itc2VsZWN0LWNvbnRyb2wtJHsgdGhpcy5pbmRleCB9YDtcblx0XHR0aGlzLnByZXBhcmVkVGF4ZXMgPSBbXTtcblx0XHR0aGlzLnRheFByZWZpeCA9ICdqZXRfdGF4X18nO1xuXG5cdFx0aWYgKCAhIHRoaXMudGF4b25vbWllc0xpc3QgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy50YXhvbm9taWVzTGlzdC5sZW5ndGg7IGkgKysgKSB7XG5cdFx0XHR0aGlzLnByZXBhcmVkVGF4ZXMucHVzaCgge1xuXHRcdFx0XHR2YWx1ZTogdGhpcy50YXhQcmVmaXggKyB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0udmFsdWUsXG5cdFx0XHRcdGxhYmVsOiB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0ubGFiZWwsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0RmllbGROYW1lKCB2YWx1ZSApIHtcblxuXHRcdGlmICggISB2YWx1ZSApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRjb25zdCBmaWVsZFR5cGUgPSB0aGlzLmdldEZpZWxkVHlwZSggdmFsdWUgKTtcblxuXHRcdGlmICggdGhpcy50ZXJtc1Byb3AgPT09IGZpZWxkVHlwZSB8fCB0aGlzLm1ldGFQcm9wID09PSBmaWVsZFR5cGUgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHR9O1xuXG5cdGlzVGVybU9yTWV0YSggdmFsdWUgKSB7XG5cdFx0cmV0dXJuICggdGhpcy50ZXJtc1Byb3AgPT09IHZhbHVlIHx8IHRoaXMubWV0YVByb3AgPT09IHZhbHVlICk7XG5cdH1cblxuXG5cdGdldEZpZWxkVHlwZSggdmFsdWUgKSB7XG5cblx0XHRpZiAoICEgdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZFR5cGVzLmxlbmd0aDsgaSArKyApIHtcblx0XHRcdGlmICggdmFsdWUgPT09IHRoaXMuZmllbGRUeXBlc1sgaSBdLnZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZS5pbmNsdWRlcyggdGhpcy50YXhQcmVmaXggKSApIHtcblx0XHRcdHJldHVybiB0aGlzLnRlcm1zUHJvcDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5tZXRhUHJvcDtcblx0XHR9XG5cblx0fTtcblxuXG5cdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlICkge1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcblx0XHRcdC4uLnRoaXMucHJvcHMuZmllbGRzTWFwLFxuXHRcdFx0WyB0aGlzLnByb3BzLmZpZWxkTmFtZSBdOiBuZXdWYWx1ZVxuXHRcdH0gKTtcblx0fTtcblxuXG5cdG9uQ2hhbmdlVHlwZSggbmV3VmFsdWUgKSB7XG5cdFx0bGV0IHZhbCA9IHRoaXMuZ2V0RmllbGRUeXBlKCBuZXdWYWx1ZSApO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSgge1xuXHRcdFx0dHlwZTogdmFsXG5cdFx0fSApO1xuXG5cdFx0aWYgKCB0aGlzLmlzVGVybU9yTWV0YSggdmFsICkgKSB7XG5cdFx0XHR2YWwgPSAnJztcblx0XHR9XG5cblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHZhbCApO1xuXHR9XG5cblxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXG5cblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9fcm93XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1wb3N0LWZpZWxkLWNvbnRyb2xcIj5cblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfdHlwZV8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cblx0XHRcdFx0XHRsYWJlbD17IHRoaXMucHJvcHMuZmllbGROYW1lIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnN0YXRlLnR5cGUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVR5cGUgfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZpZWxkVHlwZXMgfVxuXHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNjBweCdcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAoIHRoaXMubWV0YVByb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF9uYW1lXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5wcm9wcy5maWVsZFZhbHVlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnMjAwcHgnIH0gfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHRcdHsgKCB0aGlzLnRlcm1zUHJvcCA9PT0gdGhpcy5zdGF0ZS50eXBlICkgJiYgPFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLXdpdGhvdXQtbGFiZWwnXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3RheF8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLnByZXBhcmVkVGF4ZXMgfVxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+O1xuXHR9XG5cblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBKZXRGaWVsZHNNYXBDb250cm9sOyIsImNvbnN0IHtcblx0XHQgIEJhc2VDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25GaWVsZHNNYXAoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZmllbGRzID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGxhYmVsID0gJ1tFbXB0eSBsYWJlbF0nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBjaGlsZHJlbiA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBwbGFpbkhlbHAgPSAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgY3VzdG9tSGVscCA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgfSApIHtcblxuXHRyZXR1cm4gPEJhc2VDb250cm9sXG5cdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0a2V5PSdqZXRfZmllbGRzX21hcCdcblx0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cblx0XHRcdHsgKCBjdXN0b21IZWxwICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXN0b21IZWxwICkgJiYgY3VzdG9tSGVscCgpIH1cblxuXHRcdFx0eyBCb29sZWFuKCBwbGFpbkhlbHAubGVuZ3RoICkgJiYgPHNwYW5cblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2Rlc2NyaXB0aW9uLWNvbnRyb2xzJyB9XG5cdFx0XHQ+eyBwbGFpbkhlbHAgfTwvc3Bhbj4gfVxuXG5cdFx0XHR7IGZpZWxkcy5tYXAoICggWyBmaWVsZElkLCBmaWVsZERhdGEgXSwgaW5kZXggKSA9PiA8UmVhY3QuRnJhZ21lbnRcblx0XHRcdFx0a2V5PXsgYGZpZWxkX2luX21hcF8keyBmaWVsZElkICsgaW5kZXggfWAgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGNoaWxkcmVuKCB7IGZpZWxkSWQsIGZpZWxkRGF0YSwgaW5kZXggfSApIH1cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+ICkgfVxuXHRcdDwvZGl2PlxuXHQ8L0Jhc2VDb250cm9sPlxufTtcblxuIiwiY29uc3Qge1xuXHRcdCAgQnV0dG9uLFxuXHRcdCAgQnV0dG9uR3JvdXAsXG5cdFx0ICBNb2RhbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRcdCAgdXNlU3RhdGUsXG5cdFx0ICB1c2VFZmZlY3QsXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIEFjdGlvbk1vZGFsKCB7XG5cdFx0XHRcdFx0XHQgIG9uUmVxdWVzdENsb3NlLFxuXHRcdFx0XHRcdFx0ICBjaGlsZHJlbixcblx0XHRcdFx0XHRcdCAgdGl0bGUsXG5cdFx0XHRcdFx0XHQgIGNsYXNzTmFtZXMgPSBbXSxcblx0XHRcdFx0XHRcdCAgb25VcGRhdGVDbGljayxcblx0XHRcdFx0XHRcdCAgb25DYW5jZWxDbGljayxcblx0XHRcdFx0XHRcdCAgdXBkYXRlQnRuTGFiZWwgPSAnVXBkYXRlJyxcblx0XHRcdFx0XHRcdCAgdXBkYXRlQnRuUHJvcHMgPSB7fSxcblx0XHRcdFx0XHRcdCAgY2FuY2VsQnRuUHJvcHMgPSB7fSxcblx0XHRcdFx0XHRcdCAgY2FuY2VsQnRuTGFiZWwgPSAnQ2FuY2VsJyxcblx0XHRcdFx0XHRcdCAgZml4ZWRIZWlnaHQgPSAnJyxcblx0XHRcdFx0XHQgIH0gKSB7XG5cblx0Y29uc3QgbW9kYWxDbGFzc2VzID0gWyAnamV0LWZvcm0tZWRpdC1tb2RhbCcsIC4uLmNsYXNzTmFtZXMgXTtcblxuXHRjb25zdCBbIGFjdGlvbkNsaWNrLCBzZXRBY3Rpb25DbGljayBdID0gdXNlU3RhdGUoIG51bGwgKTtcblxuXHRjb25zdCB1cGRhdGVDbGljayA9ICgpID0+IHtcblx0XHRpZiAoIG9uVXBkYXRlQ2xpY2sgKSB7XG5cdFx0XHRvblVwZGF0ZUNsaWNrKCk7XG5cdFx0fVxuXHRcdHNldEFjdGlvbkNsaWNrKCB0cnVlIClcblx0fVxuXHRjb25zdCBjYW5jZWxDbGljayA9ICgpID0+IHtcblx0XHRpZiAoIG9uQ2FuY2VsQ2xpY2sgKSB7XG5cdFx0XHRvbkNhbmNlbENsaWNrKCk7XG5cdFx0fVxuXHRcdHNldEFjdGlvbkNsaWNrKCBmYWxzZSApO1xuXHR9XG5cblx0bGV0IHN0eWxlID0ge31cblx0aWYgKCBmaXhlZEhlaWdodCApIHtcblx0XHRzdHlsZSA9IHsgaGVpZ2h0OiBmaXhlZEhlaWdodCB9O1xuXHRcdG1vZGFsQ2xhc3Nlcy5wdXNoKCAnamV0LW1vZGFsLWZpeGVkLWhlaWdodCcgKVxuXHR9XG5cblx0cmV0dXJuIDxNb2RhbFxuXHRcdG9uUmVxdWVzdENsb3NlPXsgb25SZXF1ZXN0Q2xvc2UgfVxuXHRcdGNsYXNzTmFtZT17IG1vZGFsQ2xhc3Nlcy5qb2luKCAnICcgKSB9XG5cdFx0dGl0bGU9eyB0aXRsZSB9XG5cdFx0c3R5bGU9eyBzdHlsZSB9XG5cdD5cblx0XHR7ICEgY2hpbGRyZW4gJiYgPGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fY29udGVudFwiXG5cdFx0PlxuXHRcdFx0eyAnQWN0aW9uIGNhbGxiYWNrIGlzIG5vdCBmb3VuZC4nIH1cblx0XHQ8L2Rpdj4gfVxuXHRcdHsgY2hpbGRyZW4gJiYgPGRpdiBjbGFzc05hbWU9J2pldC1mb3JtLWVkaXQtbW9kYWxfX3dyYXBwZXInPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCI+XG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgfVxuXHRcdFx0XHR7ICdmdW5jdGlvbicgIT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxCdXR0b25Hcm91cFxuXHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19hY3Rpb25zXCJcblx0XHRcdD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB1cGRhdGVDbGljayB9XG5cdFx0XHRcdFx0eyAuLi51cGRhdGVCdG5Qcm9wcyB9XG5cdFx0XHRcdD57IHVwZGF0ZUJ0bkxhYmVsIH08L0J1dHRvbj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHRtYXJnaW46ICcwIDAgMCAxMHB4Jyxcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvbkNsaWNrPXsgY2FuY2VsQ2xpY2sgfVxuXHRcdFx0XHRcdHsgLi4uY2FuY2VsQnRuUHJvcHMgfVxuXHRcdFx0XHQ+eyBjYW5jZWxCdG5MYWJlbCB9PC9CdXR0b24+XG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdDwvZGl2PiB9XG5cdDwvTW9kYWw+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25Nb2RhbDsiLCJjb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIEJhc2VDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICB1c2VTdGF0ZSxcblx0XHQgIHVzZUVmZmVjdCxcblx0ICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQWN0aW9uTWVzc2FnZXMoIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHRcdCAgc2V0dGluZ3MsXG5cdFx0XHQgIHNvdXJjZSxcblx0XHRcdCAgZ2V0TWFwRmllbGQsXG5cdFx0XHQgIHNldE1hcEZpZWxkLFxuXHRcdFx0ICBtZXNzYWdlcyxcblx0XHRcdCAgb25DaGFuZ2VTZXR0aW5nLFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGNvbnN0IG9sZE1lc3NhZ2VzID0gc2V0dGluZ3MubWVzc2FnZXMgfHwge307XG5cdFx0Y29uc3QgbWVzc2FnZXMgPSB7fTtcblxuXHRcdE9iamVjdC5lbnRyaWVzKCBzb3VyY2UuX19tZXNzYWdlcyApLmZvckVhY2goICggWyB0eXBlLCBkYXRhIF0gKSA9PiB7XG5cdFx0XHRpZiAoICEgb2xkTWVzc2FnZXNbIHR5cGUgXSApIHtcblx0XHRcdFx0bWVzc2FnZXNbIHR5cGUgXSA9IGRhdGEudmFsdWU7XG5cdFx0XHR9XG5cdFx0fSApXG5cblx0XHRpZiAoIG1lc3NhZ2VzICkge1xuXHRcdFx0b25DaGFuZ2VTZXR0aW5nKCB7IC4uLm9sZE1lc3NhZ2VzLCAuLi5tZXNzYWdlcyB9LCAnbWVzc2FnZXMnICk7XG5cdFx0fVxuXHR9LCBbXSApO1xuXG5cdGNvbnN0IHNldE1lc3NhZ2UgPSAoIHZhbHVlLCBuYW1lRmllbGQgKSA9PiB7XG5cdFx0Y29uc3Qgc291cmNlID0gJ21lc3NhZ2VzJztcblxuXHRcdHNldE1hcEZpZWxkKCB7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9ICk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TWVzc2FnZSA9IG5hbWUgPT4ge1xuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXNzYWdlcyc7XG5cblx0XHRyZXR1cm4gZ2V0TWFwRmllbGQoIHsgbmFtZSwgc291cmNlIH0gKVxuXHR9O1xuXG5cdHJldHVybiA8QmFzZUNvbnRyb2xcblx0XHRsYWJlbD17IF9fKCAnTWVzc2FnZXMgU2V0dGluZ3M6JyApIH1cblx0XHRrZXk9J21lc3NhZ2VzX3NldHRpbmdzX2ZpZWxkcydcblx0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cblx0XHRcdHsgc2V0dGluZ3MubWVzc2FnZXMgJiYgT2JqZWN0LmVudHJpZXMoIHNldHRpbmdzLm1lc3NhZ2VzIClcblx0XHRcdFx0Lm1hcCggKCBbIHR5cGUsIGRhdGEgXSwgaWQgKSA9PiA8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxuXHRcdFx0XHRcdFx0a2V5PXsgJ21lc3NhZ2VfJyArIHR5cGUgKyBpZCB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGtleT17IHR5cGUgKyBpZCB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgbWVzc2FnZXMoIHR5cGUgKS5sYWJlbCB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWVzc2FnZSggdHlwZSApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRNZXNzYWdlKCBuZXdWYWx1ZSwgdHlwZSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+LFxuXHRcdFx0XHQpIH1cblxuXHRcdDwvZGl2PlxuXHQ8L0Jhc2VDb250cm9sPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTWVzc2FnZXM7IiwiZnVuY3Rpb24gUGxhY2Vob2xkZXJNZXNzYWdlKCB7IHN0eWxlLCBjaGlsZHJlbiB9ICkge1xuXHRjb25zdCBwcm9wU3R5bGUgPSB7XG5cdFx0Zm9udFNpemU6ICcxLjVlbScsXG5cdFx0cGFkZGluZzogJzJlbScsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdhbGljZWJsdWUnLFxuXHRcdC4uLnN0eWxlXG5cdH07XG5cblx0cmV0dXJuIDxwIHN0eWxlPXsgcHJvcFN0eWxlIH0+eyBjaGlsZHJlbiB9PC9wPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhY2Vob2xkZXJNZXNzYWdlOyIsImZ1bmN0aW9uIEJhc2VIZWxwKCB7XG5cdFx0XHRcdFx0ICAgY2hpbGRyZW4sXG5cdFx0XHRcdFx0ICAgc3R5bGUgPSB7fSxcblx0XHRcdFx0ICAgfSApIHtcblx0cmV0dXJuIDxwXG5cdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYi1iYXNlLWNvbnRyb2xfX2hlbHAnIH1cblx0XHRzdHlsZT17IHtcblx0XHRcdGZvbnRTaXplOiAnMTJweCcsXG5cdFx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxuXHRcdFx0Y29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxuXHRcdFx0bWFyZ2luVG9wOiAnMHB4Jyxcblx0XHRcdC4uLnN0eWxlLFxuXHRcdH0gfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvcD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VIZWxwOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmV4cG9ydCBjb25zdCBDb250cm9sc1NldHRpbmdzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcy5jb250cm9scycsIHtcblx0XCJnZW5lcmFsXCI6IHtcblx0XHRsYWJlbDogX18oICdHZW5lcmFsJyApLFxuXHRcdGF0dHJzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJsYWJlbFwiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRmllbGQgTGFiZWxcIiApLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcIm5hbWVcIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZvcm0gZmllbGQgbmFtZVwiICksXG5cdFx0XHRcdFwiaGVscFwiOiBfXyggXCJTaG91bGQgY29udGFpbiBvbmx5IExhdGluIGxldHRlcnMsIG51bWJlcnMsIGAtYCBvciBgX2AgY2hhcnMsIG5vIHNwYWNlcyBvbmx5IGxvd2VyIGNhc2VcIiApLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImRlc2NcIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZpZWxkIERlc2NyaXB0aW9uXCIgKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJkZWZhdWx0XCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImR5bmFtaWNfdGV4dFwiLFxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkRlZmF1bHQgVmFsdWVcIiApLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHRcInRvb2xiYXJcIjoge1xuXHRcdGF0dHJzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJ0b2dnbGVcIixcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJJcyBSZXF1aXJlZFwiICksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdFwiYWR2YW5jZWRcIjoge1xuXHRcdGxhYmVsOiBfXyggJ0FkdmFuY2VkJyApLFxuXHRcdGF0dHJzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJwbGFjZWhvbGRlclwiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiUGxhY2Vob2xkZXJcIiApLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImFkZF9wcmV2XCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcInRvZ2dsZVwiLFxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkFkZCBQcmV2IFBhZ2UgQnV0dG9uXCIgKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJwcmV2X2xhYmVsXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJQcmV2IFBhZ2UgQnV0dG9uIExhYmVsXCIgKSxcblx0XHRcdFx0XCJjb25kaXRpb25cIjogXCJhZGRfcHJldlwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInZpc2liaWxpdHlcIixcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGaWVsZCBWaXNpYmlsaXR5XCIgKSxcblx0XHRcdFx0XCJ0eXBlXCI6IFwic2VsZWN0XCIsXG5cdFx0XHRcdFwib3B0aW9uc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcImFsbFwiLFxuXHRcdFx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGb3IgYWxsXCIgKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJsb2dnZWRfaWRcIixcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgbG9nZ2VkIGluIHVzZXJzXCIgKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJub3RfbG9nZ2VkX2luXCIsXG5cdFx0XHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIk9ubHkgZm9yIE5PVC1sb2dnZWQgaW4gdXNlcnNcIiApLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiY2xhc3NfbmFtZVwiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiQ1NTIENsYXNzIE5hbWVcIiApLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxufSApXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCbG9ja0NvbnRyb2xzKCB0eXBlID0gJ2FsbCcgKSB7XG5cdGlmICggISB0eXBlICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRjb25zdCBjb250cm9scyA9IENvbnRyb2xzU2V0dGluZ3MoKTtcblxuXHRpZiAoICdhbGwnID09PSB0eXBlICkge1xuXHRcdHJldHVybiBjb250cm9scztcblx0fVxuXG5cdGlmICggY29udHJvbHNbIHR5cGUgXVxuXHRcdCYmIGNvbnRyb2xzWyB0eXBlIF0uYXR0cnNcblx0XHQmJiBBcnJheS5pc0FycmF5KCBjb250cm9sc1sgdHlwZSBdLmF0dHJzIClcblx0XHQmJiAwIDwgY29udHJvbHNbIHR5cGUgXS5hdHRycy5sZW5ndGhcblx0KSB7XG5cdFx0cmV0dXJuIGNvbnRyb2xzWyB0eXBlIF0uYXR0cnM7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgQ29udHJvbHNTZXR0aW5ncyB9IGZyb20gXCIuL2NvbnRyb2xzXCI7XG5pbXBvcnQgRmllbGRXaXRoUHJlc2V0IGZyb20gXCIuL2ZpZWxkLXdpdGgtcHJlc2V0XCI7XG5pbXBvcnQgRHluYW1pY1ByZXNldCBmcm9tIFwiLi4vcHJlc2V0cy9keW5hbWljLXByZXNldFwiO1xuaW1wb3J0IHsgZ2V0Q29udmVydGVkTmFtZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdG9vbHMnO1xuaW1wb3J0IHsgdXNlU3VjY2Vzc05vdGljZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyJztcblxuY29uc3Qge1xuXHRcdCAgQmxvY2tDb250cm9scyxcblx0XHQgIFJpY2hUZXh0LFxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFx0ICB1c2VTdGF0ZSxcblx0XHQgIHVzZUVmZmVjdCxcblx0ICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRcdCAgdXNlRGlzcGF0Y2gsXG5cdCAgfSA9IHdwLmRhdGE7XG5cbmNvbnN0IHtcblx0XHQgIFRleHRDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIFBhbmVsQm9keSxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdFx0ICBUb29sYmFyR3JvdXAsXG5cdFx0ICBGbGV4LFxuXHRcdCAgQmFzZUNvbnRyb2wsXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG5cdFx0ICBDbGlwYm9hcmRCdXR0b24sXG5cdFx0ICBTbmFja2Jhcixcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxubGV0IHsgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckZpZWxkQ29udHJvbHMoIHtcblx0XHRcdFx0XHRcdFx0XHQgIHR5cGUsXG5cdFx0XHRcdFx0XHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdCAgYXR0cnNTZXR0aW5ncyA9IHt9LFxuXHRcdFx0XHRcdFx0XHRcdCAgZWRpdFByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgIGF0dHJIZWxwID0gKCkgPT4gJycsXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGJsb2NrTmFtZSA9ICcnLFxuXHRcdFx0XHRcdFx0XHRcdCAgfSxcblx0XHRcdFx0XHRcdFx0ICB9ICkge1xuXHRjb25zdCBjb250cm9scyA9IENvbnRyb2xzU2V0dGluZ3MoKTtcblxuXHRpZiAoICEgY29udHJvbHNbIHR5cGUgXSApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IGNvbnRyb2xzWyB0eXBlIF07XG5cblx0Y29uc3QgaXNWYWxpZENvbmRpdGlvbiA9ICggYXR0ciApID0+IHtcblx0XHRpZiAoICEgYXR0ci5jb25kaXRpb24gKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGJsb2NrTmFtZSAmJiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgKSB7XG5cdFx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICYmIGJsb2NrTmFtZSAhPT0gYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lXG5cdFx0XHRcdCYmIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZS5sZW5ndGhcblx0XHRcdFx0JiYgISBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUuaW5jbHVkZXMoIGJsb2NrTmFtZSApXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IG9iamVjdE5vdE1hdGNoID0gKCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5hdHRyICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHsgb3BlcmF0b3IgPSAnYW5kJywgaXRlbXMgPSB7fSB9ID0gYXR0ci5jb25kaXRpb24uYXR0clxuXG5cdFx0XHRpZiAoICdvcicgPT09IG9wZXJhdG9yLnRvTG93ZXJDYXNlKCkgKSB7XG5cdFx0XHRcdGZvciAoIGNvbnN0IGF0dHJUb0NvbXBhcmUgaW4gaXRlbXMgKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVDb21wYXJlID0gaXRlbXNbIGF0dHJUb0NvbXBhcmUgXTtcblxuXHRcdFx0XHRcdGlmICggdmFsdWVDb21wYXJlID09PSBhdHRyaWJ1dGVzWyBhdHRyVG9Db21wYXJlIF0gKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnYW5kJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0cmV0dXJuICggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Zm9yICggY29uc3QgYXR0clRvQ29tcGFyZSBpbiBpdGVtcyApIHtcblx0XHRcdFx0XHRcdGlmICggaXRlbXNbIGF0dHJUb0NvbXBhcmUgXSAhPT0gYXR0cmlidXRlc1sgYXR0clRvQ29tcGFyZSBdICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9ICkoKVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9ICkoKVxuXG5cdFx0aWYgKCAhIG9iamVjdE5vdE1hdGNoXG5cdFx0XHR8fCAoXG5cdFx0XHRcdCdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYXR0clxuXHRcdFx0XHQmJiBhdHRyLmNvbmRpdGlvbi5hdHRyXG5cdFx0XHRcdCYmICEgYXR0cmlidXRlc1sgYXR0ci5jb25kaXRpb24uYXR0ciBdXG5cdFx0XHQpXG5cdFx0XHR8fCAoXG5cdFx0XHRcdCdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb25cblx0XHRcdFx0JiYgISBhdHRyaWJ1dGVzWyBhdHRyLmNvbmRpdGlvbiBdXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0cmV0dXJuIGN1cnJlbnRDb250cm9sLmF0dHJzLmZpbHRlciggKCB7IGhlbHAgPSAnJywgYXR0ck5hbWUsIGxhYmVsLCAuLi5hdHRyIH0gKSA9PiB7XG5cdFx0Y29uc3QgaXNSZWdpc3RlckF0dHJpYnV0ZSA9ICggYXR0ck5hbWUgaW4gYXR0cmlidXRlcyApO1xuXHRcdGNvbnN0IHZhbGlkQ29uZGl0aW9uID0gaXNWYWxpZENvbmRpdGlvbiggYXR0ciApO1xuXHRcdGNvbnN0IGlzSGlkZGVuID0gKFxuXHRcdFx0YXR0ck5hbWUgaW4gYXR0cnNTZXR0aW5nc1xuXHRcdFx0JiYgJ3Nob3cnIGluIGF0dHJzU2V0dGluZ3NbIGF0dHJOYW1lIF1cblx0XHRcdCYmIGZhbHNlID09PSBhdHRyc1NldHRpbmdzWyBhdHRyTmFtZSBdLnNob3dcblx0XHQpO1xuXG5cdFx0cmV0dXJuICggaXNSZWdpc3RlckF0dHJpYnV0ZSAmJiB2YWxpZENvbmRpdGlvbiAmJiAhIGlzSGlkZGVuIClcblx0fSApO1xufVxuXG5mdW5jdGlvbiBGaWVsZENvbnRyb2woIHByb3BzICkge1xuXHRsZXQge1xuXHRcdFx0c2V0QXR0cmlidXRlcyxcblx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRlZGl0UHJvcHM6IHtcblx0XHRcdFx0YXR0ckhlbHAgID0gKCkgPT4gJycsXG5cdFx0XHRcdGJsb2NrTmFtZSA9ICcnLFxuXHRcdFx0fSxcblx0XHRcdGZpZWxkQ29udHJvbHMgPSBbXSxcblx0XHRcdGF1dG9Db21wbGV0ZUxhYmVsID0gdHJ1ZVxuXHRcdH0gPSBwcm9wcztcblxuXHRpZiAoICEgZmllbGRDb250cm9scy5sZW5ndGggKSB7XG5cdFx0ZmllbGRDb250cm9scyA9IGZpbHRlckZpZWxkQ29udHJvbHMoIHByb3BzICk7XG5cdH1cblxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoIHsgWyBrZXkgXTogdmFsdWUgfSApO1xuXHR9O1xuXG5cdHJldHVybiBmaWVsZENvbnRyb2xzLm1hcCggKCB7IGhlbHAgPSAnJywgYXR0ck5hbWUsIGxhYmVsLCAuLi5hdHRyIH0gKSA9PiB7XG5cdFx0c3dpdGNoICggYXR0ci50eXBlICkge1xuXHRcdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRcdHJldHVybiA8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1UZXh0Q29udHJvbGAgfVxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKSB9XG5cdFx0XHRcdFx0b25CbHVyPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCAnbGFiZWwnID09PSBhdHRyTmFtZVxuXHRcdFx0XHRcdFx0XHQmJiAxIDwgYXR0cmlidXRlcy5sYWJlbC5sZW5ndGhcblx0XHRcdFx0XHRcdFx0JiYgKCAhIGF0dHJpYnV0ZXMubmFtZSB8fCAnZmllbGRfbmFtZScgPT09IGF0dHJpYnV0ZXMubmFtZSApXG5cdFx0XHRcdFx0XHRcdCYmIGF1dG9Db21wbGV0ZUxhYmVsXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggZ2V0Q29udmVydGVkTmFtZSggYXR0cmlidXRlcy5sYWJlbCApLCAnbmFtZScgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz47XG5cdFx0XHRjYXNlICdkeW5hbWljX3RleHQnOlxuXHRcdFx0XHRyZXR1cm4gPEZpZWxkV2l0aFByZXNldFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LUZpZWxkV2l0aFByZXNldGAgfVxuXHRcdFx0XHRcdE1vZGFsRWRpdG9yPXsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPER5bmFtaWNQcmVzZXRcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XG5cdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XG5cdFx0XHRcdFx0XHRvblNhdmVQcmVzZXQ9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxuXHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVGV4dENvbnRyb2xEeW5hbWljYCB9XG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRcdGhlbHA9eyBoZWxwIHx8IGF0dHJIZWxwKCBhdHRyTmFtZSApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9GaWVsZFdpdGhQcmVzZXQ+O1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdFx0cmV0dXJuIDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tU2VsZWN0Q29udHJvbGAgfVxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIHx8IGF0dHJIZWxwKCBhdHRyTmFtZSApIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyBhdHRyLm9wdGlvbnMgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPjtcblx0XHRcdGNhc2UgJ3RvZ2dsZSc6XG5cdFx0XHRcdHJldHVybiA8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRvZ2dsZUNvbnRyb2xgIH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPjtcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdHJldHVybiA8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1CYXNlQ29udHJvbGAgfVxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LU51bWJlckNvbnRyb2xgIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIE51bWJlciggbmV3VmFsICksIGF0dHJOYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XG5cdFx0XHRcdFx0ICAgc3R5bGU9eyB7XG5cdFx0XHRcdFx0XHQgICBjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXG5cdFx0XHRcdFx0ICAgfSB9PnsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9PC9wPlxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPjtcblx0XHR9XG5cblx0fSApO1xuXG59XG5cbmZ1bmN0aW9uIEdlbmVyYWxGaWVsZHMoIHByb3BzICkge1xuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IENvbnRyb2xzU2V0dGluZ3MoKS5nZW5lcmFsO1xuXG5cdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgY3VycmVudENvbnRyb2wubGFiZWwgfSBrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1maWVsZHMnIH0+XG5cdFx0PEZpZWxkQ29udHJvbFxuXHRcdFx0dHlwZT0nZ2VuZXJhbCdcblx0XHRcdGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWZpZWxkcy1jb21wb25lbnQnIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+XG5cdFx0PEZpZWxkQ29udHJvbFxuXHRcdFx0dHlwZT0nY3VzdG9tX2dlbmVyYWwnXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1jdXN0b20tZmllbGRzLWNvbXBvbmVudCcgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz5cblx0PC9QYW5lbEJvZHk+O1xufVxuXG5mdW5jdGlvbiBBZHZhbmNlZEZpZWxkcyggcHJvcHMgKSB7XG5cdGNvbnN0IGN1cnJlbnRDb250cm9sID0gQ29udHJvbHNTZXR0aW5ncygpLmFkdmFuY2VkO1xuXG5cdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgY3VycmVudENvbnRyb2wubGFiZWwgfSBrZXk9eyAnamV0LWZvcm0tYWR2YW5jZWQtZmllbGRzJyB9IGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cblx0XHQ8RmllbGRDb250cm9sXG5cdFx0XHR0eXBlPSdhZHZhbmNlZCdcblx0XHRcdGtleT17ICdqZXQtZm9ybS1hZHZhbmNlZC1maWVsZHMtY29tcG9uZW50JyB9XG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPlxuXHRcdDxGaWVsZENvbnRyb2xcblx0XHRcdHR5cGU9J2N1c3RvbV9hZHZhbmNlZCdcblx0XHRcdGtleT17ICdqZXQtZm9ybS1hZHZhbmNlZC1jdXN0b20tZmllbGRzLWNvbXBvbmVudCcgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz5cblx0PC9QYW5lbEJvZHk+O1xufVxuXG5mdW5jdGlvbiBUb29sQmFyRmllbGRzKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXG5cdFx0XHQgIGNoaWxkcmVuICAgID0gW10sXG5cdFx0XHQgIGRpc3BsYXlOYW1lID0gdHJ1ZSxcblx0XHRcdCAgYXR0cmlidXRlcyxcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcblx0XHQgIH0gPSBwcm9wcztcblxuXHRjb25zdCBkaXNwbGF5Tm90aWNlID0gdXNlU3VjY2Vzc05vdGljZSggYENvcGllZCBcIiR7IGF0dHJpYnV0ZXMubmFtZSB9XCIgdG8gY2xpcGJvYXJkLmAgKTtcblxuXHRyZXR1cm4gPEJsb2NrQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtQmxvY2tDb250cm9scycgKSB9PlxuXHRcdDxUb29sYmFyR3JvdXAga2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtVG9vbGJhckdyb3VwJyApIH0+XG5cdFx0XHQ8RmxleFxuXHRcdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cblx0XHRcdFx0anVzdGlmeT17ICdjZW50ZXInIH1cblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXRvZ2dsZS1ib3gnIH1cblx0XHRcdD5cblx0XHRcdFx0eyBkaXNwbGF5TmFtZSAmJiA8ZGl2IGNsYXNzTmFtZT17J2pldC1pbnB1dC13aXRoLWJ1dHRvbid9PlxuXHRcdFx0XHRcdDxDbGlwYm9hcmRCdXR0b25cblx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdGljb249J2FkbWluLXBhZ2UnXG5cdFx0XHRcdFx0XHRzaG93VG9vbHRpcFxuXHRcdFx0XHRcdFx0c2hvcnRjdXQ9J0NvcHkgbmFtZSdcblx0XHRcdFx0XHRcdHRleHQ9eyBhdHRyaWJ1dGVzLm5hbWUgfVxuXHRcdFx0XHRcdFx0b25Db3B5PXsgKCkgPT4gZGlzcGxheU5vdGljZSggdHJ1ZSApIH1cblx0XHRcdFx0XHRcdG9uRmluaXNoQ29weT17ICgpID0+IGRpc3BsYXlOb3RpY2UoIGZhbHNlICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmFtZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5hbWUgPT4gc2V0QXR0cmlidXRlcyggeyBuYW1lIH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+IH1cblx0XHRcdFx0PEZpZWxkQ29udHJvbFxuXHRcdFx0XHRcdHR5cGU9J3Rvb2xiYXInXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2pldC1mb3JtLXRvb2xiYXItZmllbGRzLWNvbXBvbmVudCcgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0PC9GbGV4PlxuXHRcdDwvVG9vbGJhckdyb3VwPlxuXHQ8L0Jsb2NrQ29udHJvbHM+O1xufVxuXG5leHBvcnQge1xuXHRHZW5lcmFsRmllbGRzLFxuXHRUb29sQmFyRmllbGRzLFxuXHRBZHZhbmNlZEZpZWxkcyxcblx0RmllbGRDb250cm9sLFxuXHRmaWx0ZXJGaWVsZENvbnRyb2xzXG59OyIsImltcG9ydCB7XG5cdEZpZWxkQ29udHJvbCxcblx0ZmlsdGVyRmllbGRDb250cm9scyxcbn0gZnJvbSAnLi9maWVsZC1jb250cm9sJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgUGFuZWxCb2R5IH0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWVsZFNldHRpbmdzV3JhcHBlciggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHRcdCAgdGl0bGUsXG5cdFx0XHQgIGNoaWxkcmVuLFxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSA9IHZhbCA9PiB2YWwgfSxcblx0XHQgIH0gPSBwcm9wcztcblxuXHRjb25zdCBmaWVsZENvbnRyb2xzID0gZmlsdGVyRmllbGRDb250cm9scyggeyAuLi5wcm9wcywgdHlwZTogJ2N1c3RvbV9zZXR0aW5ncycgfSApO1xuXG5cdHJldHVybiBCb29sZWFuKCBmaWVsZENvbnRyb2xzLmxlbmd0aCB8fCBjaGlsZHJlbiApICYmIDxQYW5lbEJvZHlcblx0XHR0aXRsZT17IHRpdGxlIHx8IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdFx0PEZpZWxkQ29udHJvbFxuXHRcdFx0dHlwZT0nY3VzdG9tX3NldHRpbmdzJ1xuXHRcdFx0ZmllbGRDb250cm9scz17IGZpZWxkQ29udHJvbHMgfVxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+XG5cdDwvUGFuZWxCb2R5Pjtcbn0iLCJpbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSBcIi4uL2FjdGlvbi1tb2RhbFwiO1xuXG5jb25zdCB7XG5cdFx0ICBQYXRoLFxuXHRcdCAgU1ZHLFxuXHRcdCAgQmFzZUNvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0dXNlU3RhdGUsXG59ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gRmllbGRXaXRoUHJlc2V0KCB7XG5cdFx0XHRcdFx0XHRcdCAgY2hpbGRyZW4gPSBudWxsLFxuXHRcdFx0XHRcdFx0XHQgIE1vZGFsRWRpdG9yLFxuXHRcdFx0XHRcdFx0XHQgIHRyaWdnZXJDbGFzc2VzID0gW10sXG5cdFx0XHRcdFx0XHRcdCAgYmFzZUNvbnRyb2xQcm9wcyA9IHt9LFxuXHRcdFx0XHRcdFx0ICB9ICkge1xuXG5cdGNvbnN0IFsgbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0Y29uc3QgY2hhbmdlTW9kYWxTdGF0ZSA9ICgpID0+IHtcblx0XHRzZXRNb2RhbFN0YXRlKCBwcmV2ID0+ICEgcHJldiApO1xuXHR9O1xuXHRjb25zdCBjbGFzc05hbWVzID0gWyAnamV0LWZvcm0tZHluYW1pYy1wcmVzZXRfX3RyaWdnZXInLCAuLi50cmlnZ2VyQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZHluYW1pYy1wcmVzZXRcIlxuXHRcdFx0eyAuLi5iYXNlQ29udHJvbFByb3BzIH1cblx0XHQ+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lcyB9XG5cdFx0XHRcdG9uQ2xpY2s9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cblx0XHRcdD48U1ZHIHZpZXdCb3g9XCIwIDAgNTQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aFxuXHRcdFx0XHRkPVwiTTQyLjYzOTYgMjYuNDM0N0MzNy44NjgyIDI3LjM0MzYgMzIuNTY2NiAyOC4wMjUyIDI3LjE4OTQgMjguMDI1MkMyMS44MTIxIDI4LjAyNTIgMTYuNDM0OCAyNy4zNDM2IDExLjczOTEgMjYuNDM0N0M2Ljk2Nzc0IDI1LjQ1MDIgMy4xODA5MyAyMy44NTk3IDAuMzc4NjggMjEuOTY2M0wwLjM3ODY4IDI4LjAyNTJDMC4zNzg2OCAyOS41Mzk5IDEuNTkwNDYgMzEuMTMwNCAzLjc4NjgyIDMyLjQxNzlDNS45ODMxNyAzMy43MDU0IDkuNDY3MDQgMzQuOTE3MiAxMy42MzI1IDM1LjU5ODhDMTcuNzk4IDM2LjI4MDUgMjIuMTE1IDM2LjgxMDYgMjcuMTg5NCAzNi44MTA2QzMyLjI2MzcgMzYuODEwNiAzNi42NTY0IDM2LjUwNzcgNDAuNzQ2MiAzNS41OTg4QzQ0LjgzNTkgMzQuNjkgNDguMzE5OCAzMy43MDU0IDUwLjUxNjIgMzIuNDE3OUM1Mi43MTI1IDMxLjEzMDQgNTQgMjkuNTM5OSA1NCAyOC4wMjUyTDU0IDIxLjk2NjNDNTEuMTIyIDIzLjg1OTcgNDcuMzM1MiAyNS40NTAyIDQyLjYzOTYgMjYuNDM0N1pNNDIuNjM5NiA1My41NDg0QzM3Ljg2ODIgNTQuNTMyOSAzMi41NjY2IDU1LjEzODggMjcuMTg5NCA1NS4xMzg4QzIxLjgxMjEgNTUuMTM4OCAxNi40MzQ4IDU0LjUzMjkgMTEuNzM5MSA1My41NDg0QzcuMDQzNDggNTIuNTYzOCAzLjE4MDkzIDUxLjA0OTEgMC4zNzg2ODIgNDkuMTU1NkwwLjM3ODY4MiA1NS4xMzg4QzAuMzc4NjgzIDU2LjcyOTMgMS41OTA0NiA1OC4zMTk3IDMuNzg2ODIgNTkuNTMxNUM2LjM2MTg2IDYwLjgxOSA5LjQ2NzA1IDYyLjEwNjYgMTMuNjMyNSA2Mi43MTI1QzE3LjcyMjMgNjMuNjk3IDIyLjExNSA2NCAyNy4xODk0IDY0QzMyLjI2MzcgNjQgMzYuNjU2NCA2My42OTcgNDAuNzQ2MiA2Mi43MTI1QzQ0LjgzNTkgNjEuODAzNiA0OC4zMTk4IDYwLjgxOSA1MC41MTYyIDU5LjUzMTVDNTIuNzEyNSA1Ny45NDExIDU0IDU2LjcyOTMgNTQgNTQuODM1OUw1NCA0OC44NTI3QzUxLjEyMiA1MS4wNDkxIDQ3LjMzNTIgNTIuMjYwOCA0Mi42Mzk2IDUzLjU0ODRaTTQyLjYzOTYgMzkuOTkxNUMzNy44NjgyIDQwLjkwMDQgMzIuNTY2NiA0MS41ODIgMjcuMTg5NCA0MS41ODJDMjEuODEyMSA0MS41ODIgMTYuNDM0OCA0MC45MDA0IDExLjczOTEgMzkuOTkxNUM2Ljk2Nzc0IDM5LjAwNyAzLjE4MDkzIDM3LjQ5MjIgMC4zNzg2ODEgMzUuNTk4OEwwLjM3ODY4MSA0MS41ODJDMC4zNzg2ODEgNDMuMTcyNSAxLjU5MDQ2IDQ0LjY4NzIgMy43ODY4MiA0NS45NzQ3QzYuMzYxODUgNDcuMjYyMiA5LjQ2NzA1IDQ4LjQ3NCAxMy42MzI1IDQ5LjE1NTZDMTcuNzIyMyA1MC4wNjQ1IDIyLjExNSA1MC4zNjc0IDI3LjE4OTQgNTAuMzY3NEMzMi4yNjM3IDUwLjM2NzQgMzYuNjU2NCA1MC4wNjQ1IDQwLjc0NjIgNDkuMTU1NkM0NC44MzU5IDQ4LjE3MTEgNDguMzE5OCA0Ny4yNjIyIDUwLjUxNjIgNDUuOTc0N0M1Mi43MTI1IDQ0LjM4NDMgNTQgNDMuMTcyNSA1NCA0MS41ODJMNTQgMzUuNTk4OEM1MS4xMjIgMzcuNDkyMiA0Ny4zMzUyIDM5LjAwNyA0Mi42Mzk2IDM5Ljk5MTVaTTQwLjQ0MzIgMi4xMjMzN0MzNi4zNTM1IDEuMTM4NzkgMzEuODg1IDAuODM1ODQ4IDI2Ljg4NjQgMC44MzU4NDlDMjEuODg3OCAwLjgzNTg0OSAxNy40MTk0IDEuMTM4NzkgMTMuMjUzOSAyLjEyMzM3QzkuMDg4MzYgMy4xMDc5NCA1LjY4MDIyIDQuMDE2NzggMy40ODM4NyA1LjMwNDNDMS4yODc1MSA2LjU5MTgxIC0zLjQ3ODJlLTA2IDguMTA2NTQgLTMuMzM5MTZlLTA2IDkuNjk3TC0yLjk1NTEzZS0wNiAxNC4wODk3Qy0yLjgxNjA5ZS0wNiAxNS42ODAyIDEuMjg3NTIgMTcuMjcwNiAzLjQ4Mzg3IDE4LjU1ODJDNi4wNTg5MSAxOS43Njk5IDkuMTY0MSAyMS4wNTc1IDEzLjI1MzkgMjEuNjYzM0MxNy4zNDM2IDIyLjI2OTIgMjEuODEyMSAyMi45NTA5IDI2Ljg4NjQgMjIuOTUwOUMzMS45NjA3IDIyLjk1MDkgMzYuMzUzNSAyMi45NTA5IDQwLjQ0MzIgMjIuMzQ1QzQ0LjUzMyAyMS43MzkxIDQ4LjAxNjkgMjAuNDUxNiA1MC4yMTMyIDE5LjE2NEM1Mi43MTI1IDE3LjU3MzYgNTQgMTUuOTgzMSA1NCAxNC4zOTI3TDU0IDkuOTk5OTVDNTQgOC40MDk0OCA1Mi43MTI1IDYuODE5MDIgNTAuNTE2MiA1LjYwNzI0QzQ4LjMxOTggNC4zOTU0NiA0NC41MzMgMi43MjkyNiA0MC40NDMyIDIuMTIzMzdaXCJcblx0XHRcdFx0ZmlsbD1cIiM3RTg5OTNcIi8+PC9TVkc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdHsgbW9kYWxTdGF0ZSAmJiAoXG5cdFx0XHQ8QWN0aW9uTW9kYWxcblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cblx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cblx0XHRcdFx0dGl0bGU9eyAnRWRpdCBQcmVzZXQnIH1cblx0XHRcdD5cblx0XHRcdFx0eyBtb2RhbFByb3BzID0+IDxNb2RhbEVkaXRvclxuXHRcdFx0XHRcdHsgLi4ubW9kYWxQcm9wcyB9XG5cdFx0XHRcdC8+IH1cblx0XHRcdDwvQWN0aW9uTW9kYWw+XG5cdFx0KSB9XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRXaXRoUHJlc2V0OyIsImltcG9ydCB7XG5cdGNsYXNzbmFtZXMsXG5cdGdldENvbnZlcnRlZE5hbWUsXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvdG9vbHMnO1xuXG5jb25zdCB7XG5cdFx0ICBCYXNlQ29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRcdCAgd2l0aFNlbGVjdCxcblx0ICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHRcdCAgUmljaFRleHQsXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBSaWNoRGVzY3JpcHRpb24oIGNvbnRlbnQgKSB7XG5cdHJldHVybiA8c21hbGwgc3R5bGU9eyB7XG5cdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXG5cdFx0cGFkZGluZzogJzAuMmVtIDAuOGVtIDAgMCcsXG5cdFx0Y29sb3I6ICcjOGU4YThhJyxcblx0fSB9PlxuXHRcdHsgY29udGVudCB9XG5cdDwvc21hbGw+O1xufVxuXG5mdW5jdGlvbiBGaWVsZFdyYXBwZXIoIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHRcdCAgYXR0cmlidXRlcyxcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXksIGJsb2NrTmFtZSA9ICcnIH0sXG5cdFx0XHQgIGNoaWxkcmVuLFxuXHRcdFx0ICB3cmFwQ2xhc3NlcyAgICAgICA9IFtdLFxuXHRcdFx0ICB2YWx1ZUlmRW1wdHlMYWJlbCA9ICcnLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICBjaGlsZHJlblBvc2l0aW9uICA9ICdiZXR3ZWVuJyxcblx0XHRcdCAgX2pmX2FyZ3MsXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0Y29uc3Qgc2V0RHluYW1pY05hbWUgPSAoKSA9PiB7XG5cdFx0aWYgKCAxIDwgYXR0cmlidXRlcy5sYWJlbC5sZW5ndGhcblx0XHRcdCYmICggISBhdHRyaWJ1dGVzLm5hbWUgfHwgJ2ZpZWxkX25hbWUnID09PSBhdHRyaWJ1dGVzLm5hbWUgKVxuXHRcdCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBuYW1lOiBnZXRDb252ZXJ0ZWROYW1lKCBhdHRyaWJ1dGVzLmxhYmVsICkgfSApXG5cdFx0fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlbmRlckxhYmVsKCkge1xuXHRcdHJldHVybiA8QmFzZUNvbnRyb2wuVmlzdWFsTGFiZWw+XG5cdFx0XHR7IFJpY2hEZXNjcmlwdGlvbiggX18oICdpbnB1dCBsYWJlbDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSApIH1cblx0XHRcdDxkaXYgb25CbHVyPXsgc2V0RHluYW1pY05hbWUgfSBjbGFzc05hbWU9J2pldC1mb3JtLWJ1aWxkZXJfX2xhYmVsJz5cblx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3JpY2gtbGFiZWwnICkgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdMYWJlbC4uLidcblx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGFiZWwgPyBhdHRyaWJ1dGVzLmxhYmVsIDogdmFsdWVJZkVtcHR5TGFiZWwgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3TGFiZWwgPT4gc2V0QXR0cmlidXRlcyggeyBsYWJlbDogbmV3TGFiZWwgfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBhdHRyaWJ1dGVzLnJlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19yZXF1aXJlZCcgfT5cblx0XHRcdFx0XHR7IF9qZl9hcmdzLnJlcXVpcmVkX21hcmsgPyBfamZfYXJncy5yZXF1aXJlZF9tYXJrIDogJyonIH1cblx0XHRcdFx0PC9zcGFuPiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sLlZpc3VhbExhYmVsPjtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlckRlc2NyaXB0aW9uKCkge1xuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT0namV0LWZvcm0tYnVpbGRlcl9fZGVzYy0td3JhcHBlcic+XG5cdFx0XHR7IFJpY2hEZXNjcmlwdGlvbiggX18oICdpbnB1dCBkZXNjcmlwdGlvbjonLCAnamV0LWZvcm0tYnVpbGRlcicgKSApIH1cblx0XHRcdDxCYXNlQ29udHJvbCBrZXk9eyAnY3VzdG9tX2hlbHBfZGVzY3JpcHRpb24nIH0gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2Rlc2MnIH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscCc+XG5cdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncmljaC1kZXNjcmlwdGlvbicgKSB9XG5cdFx0XHRcdFx0XHR0YWdOYW1lPSdzbWFsbCdcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbi4uLidcblx0XHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRlc2MgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBkZXNjID0+IHNldEF0dHJpYnV0ZXMoIHsgZGVzYyB9ICkgfVxuXHRcdFx0XHRcdFx0c3R5bGU9eyB7IG1hcmdpblRvcDogJzBweCcgfSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdDwvZGl2Pjtcblx0fVxuXG5cdGlmICggJ3JvdycgPT09IF9qZl9hcmdzLmZpZWxkc19sYXlvdXQgKSB7XG5cdFx0d3JhcENsYXNzZXMucHVzaCggJ2pldC1mb3JtLWJ1aWxkZXItcm93X19mbGV4JyApO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZUhvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHRjbGFzc05hbWU9eyBjbGFzc25hbWVzKFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCcsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyLXJvdycsXG5cdFx0XHRcdHdyYXBDbGFzc2VzLFxuXHRcdFx0KSB9XG5cdFx0PlxuXHRcdFx0eyAncm93JyAhPT0gX2pmX2FyZ3MuZmllbGRzX2xheW91dCAmJiA8PlxuXHRcdFx0XHR7ICd0b3AnID09PSBjaGlsZHJlblBvc2l0aW9uICYmIGNoaWxkcmVuIH1cblx0XHRcdFx0eyByZW5kZXJMYWJlbCgpIH1cblx0XHRcdFx0eyAnYmV0d2VlbicgPT09IGNoaWxkcmVuUG9zaXRpb24gJiYgY2hpbGRyZW4gfVxuXHRcdFx0XHR7IHJlbmRlckRlc2NyaXB0aW9uKCkgfVxuXHRcdFx0XHR7ICdib3R0b20nID09PSBjaGlsZHJlblBvc2l0aW9uICYmIGNoaWxkcmVuIH1cblx0XHRcdDwvPiB9XG5cdFx0XHR7ICdyb3cnID09PSBfamZfYXJncy5maWVsZHNfbGF5b3V0ICYmIDw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtZm9ybS1idWlsZGVyLXJvd19fZmxleC0tbGFiZWwnPlxuXHRcdFx0XHRcdHsgcmVuZGVyTGFiZWwoKSB9XG5cdFx0XHRcdFx0eyByZW5kZXJEZXNjcmlwdGlvbigpIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtZm9ybS1idWlsZGVyLXJvd19fZmxleC0tY29udGVudCc+eyBjaGlsZHJlbiB9PC9kaXY+XG5cdFx0XHQ8Lz4gfVxuXHRcdDwvQmFzZUNvbnRyb2w+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWxlY3QoIHNlbGVjdCA9PiB7XG5cdGNvbnN0IG1ldGEgPSBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcblxuXHRyZXR1cm4ge1xuXHRcdF9qZl9hcmdzOiBKU09OLnBhcnNlKCBtZXRhLl9qZl9hcmdzIHx8IHt9ICksXG5cdH1cbn0gKSggRmllbGRXcmFwcGVyICk7IiwiY29uc3Qge1xuXHRcdCAgQnV0dG9uLFxuXHRcdCAgUG9wb3Zlcixcblx0XHQgIFBhbmVsQm9keSxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRcdCAgdXNlU3RhdGUsXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIE1hY3Jvc0luc2VydGVyKCB7XG5cdFx0XHRcdFx0XHRcdCBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0IGZpZWxkcyxcblx0XHRcdFx0XHRcdFx0IG9uRmllbGRDbGljayxcblx0XHRcdFx0XHRcdFx0IGN1c3RvbU1hY3Jvcyxcblx0XHRcdFx0XHRcdFx0IHpJbmRleCA9IDEwMDAwMDAsXG5cdFx0XHRcdFx0XHRcdCAuLi5wb3BvdmVyUHJvcHNcblx0XHRcdFx0XHRcdCB9ICkge1xuXG5cdGNvbnN0IFsgc2hvd1BvcG92ZXIsIHNldFBvcG92ZXJTdGF0ZSBdID0gdXNlU3RhdGUoICgpID0+IGZhbHNlICk7XG5cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3MtaW5zZXJ0ZXJcIj5cblx0XHQ8QnV0dG9uXG5cdFx0XHRpc1RlcnRpYXJ5XG5cdFx0XHRpc1NtYWxsXG5cdFx0XHRpY29uPXsgc2hvd1BvcG92ZXIgPyAnbm8tYWx0JyA6ICdhZG1pbi10b29scycgfVxuXHRcdFx0bGFiZWw9eyAnSW5zZXJ0IG1hY3JvcycgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3MtdHJpZ2dlclwiXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRzZXRQb3BvdmVyU3RhdGUoIHByZXYgPT4gISBwcmV2ICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdHsgc2hvd1BvcG92ZXIgJiYgKFxuXHRcdFx0PFBvcG92ZXJcblx0XHRcdFx0c3R5bGU9eyB7IHpJbmRleCB9IH1cblx0XHRcdFx0cG9zaXRpb249eyAnYm90dG9tIGxlZnQnIH1cblx0XHRcdFx0eyAuLi5wb3BvdmVyUHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGZpZWxkcy5sZW5ndGggJiYgPFBhbmVsQm9keSB0aXRsZT17ICdGb3JtIEZpZWxkcycgfT5cblx0XHRcdFx0XHR7IGZpZWxkcy5tYXAoIGZpZWxkID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdmaWVsZF8nICsgZmllbGQubmFtZSB9PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggZmllbGQubmFtZSApXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdD57ICclJyArIGZpZWxkLm5hbWUgKyAnJScgfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+O1xuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cdFx0XHRcdHsgY3VzdG9tTWFjcm9zICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnQ3VzdG9tIE1hY3JvcycgfT5cblx0XHRcdFx0XHR7IGN1c3RvbU1hY3Jvcy5tYXAoIG1hY3JvcyA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnbWFjcm9zXycgKyBtYWNyb3MgfT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZpZWxkQ2xpY2soIG1hY3JvcyApXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdD57ICclJyArIG1hY3JvcyArICclJyB9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj47XG5cdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cblx0XHRcdDwvUG9wb3Zlcj5cblx0XHQpIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NJbnNlcnRlcjsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBCdXR0b24sXG5cdFx0ICBCdXR0b25Hcm91cCxcblx0XHQgIENhcmQsXG5cdFx0ICBDYXJkQm9keSxcblx0XHQgIENhcmRIZWFkZXIsXG5cdFx0ICBUb2dnbGVDb250cm9sLFxuXHRcdCAgRmxleCxcblx0XHQgIEZsZXhJdGVtLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICB1c2VTdGF0ZSxcblx0XHQgIHVzZUVmZmVjdCxcblx0ICB9ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gUmVwZWF0ZXJXaXRoU3RhdGUoIHtcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRJdGVtSGVhZGluZyxcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckNsYXNzZXMgPSBbXSxcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckl0ZW1DbGFzc2VzID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0bmV3SXRlbSxcblx0XHRcdFx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbCA9ICdBZGQgTmV3Jyxcblx0XHRcdFx0XHRcdFx0XHRpdGVtcyA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbixcblx0XHRcdFx0XHRcdFx0XHRvblNhdmVJdGVtcyxcblx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXG5cdFx0XHRcdFx0XHRcdFx0b25BZGROZXdJdGVtLFxuXHRcdFx0XHRcdFx0XHRcdG9uUmVtb3ZlSXRlbSxcblx0XHRcdFx0XHRcdFx0XHRoZWxwID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVscFNvdXJjZToge30sXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwVmlzaWJsZTogKCkgPT4gZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwS2V5OiAnJyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9ICkge1xuXG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbICdqZXQtZm9ybS1idWlsZGVyX19yZXBlYXRlci1jb21wb25lbnQnLCAuLi5yZXBlYXRlckNsYXNzZXMgXS5qb2luKCAnICcgKTtcblx0Y29uc3QgaXRlbUNsYXNzTmFtZXMgPSBbICdqZXQtZm9ybS1idWlsZGVyX19yZXBlYXRlci1jb21wb25lbnQtaXRlbScsIC4uLnJlcGVhdGVySXRlbUNsYXNzZXMgXS5qb2luKCAnICcgKTtcblxuXHRjb25zdCBwYXJzZWRJdGVtcyA9ICgpID0+IHtcblx0XHRpZiAoIGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4gaXRlbXMubWFwKCBpdGVtID0+IHtcblx0XHRcdFx0aXRlbS5fX3Zpc2libGUgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH0gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFsge1xuXHRcdFx0XHQuLi5uZXdJdGVtLFxuXHRcdFx0XHRfX3Zpc2libGU6IHRydWUsXG5cdFx0XHR9IF07XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgWyBpdGVtc0RhdGEsIHNldEl0ZW1zRGF0YSBdID0gdXNlU3RhdGUoIFtdICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwYXJzZWRJdGVtcygpICk7XG5cdH0sIFtdICk7XG5cblx0Y29uc3QgWyBpc1NhZmVEZWxldGluZywgc2V0U2FmZURlbGV0aW5nIF0gPSB1c2VTdGF0ZSggdHJ1ZSApO1xuXG5cdGNvbnN0IGNoYW5nZUN1cnJlbnRJdGVtID0gKCB2YWx1ZVRvU2V0LCBpbmRleCApID0+IHtcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXG5cdFx0XHRwcmV2Q2xvbmVbIGluZGV4IF0gPSB7XG5cdFx0XHRcdC4uLnByZXZbIGluZGV4IF0sXG5cdFx0XHRcdC4uLnZhbHVlVG9TZXQsXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3Qgb25TYXZlRGVsZXRpbmcgPSBpbmRleCA9PiB7XG5cdFx0cmV0dXJuIGNvbmZpcm0oIF9fKCBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSBpdGVtICR7IGluZGV4ICsgMSB9P2AsICdqZXQtZm9ybS1idWlsZGVyJyApICk7XG5cdH1cblxuXHRjb25zdCByZW1vdmVPcHRpb24gPSAoIGluZGV4ICkgPT4ge1xuXHRcdGlmIChcblx0XHRcdGlzU2FmZURlbGV0aW5nICYmICEgb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgfHxcblx0XHRcdG9uUmVtb3ZlSXRlbSAmJiAhIG9uUmVtb3ZlSXRlbSggaW5kZXgsIGl0ZW1zRGF0YSApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblx0XHRcdHByZXZDbG9uZS5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9XG5cblx0Y29uc3QgYWRkTmV3SXRlbSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0aWYgKCBvbkFkZE5ld0l0ZW0gKSB7XG5cdFx0XHRvbkFkZE5ld0l0ZW0oIHZhbHVlLCBpdGVtc0RhdGEgKTtcblx0XHR9XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IFsgLi4ucHJldiwge1xuXHRcdFx0Li4udmFsdWUsXG5cdFx0XHRfX3Zpc2libGU6IHRydWUsXG5cdFx0fSBdICk7XG5cdH1cblxuXHRjb25zdCBjbG9uZUl0ZW0gPSAoIGluZGV4ICkgPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cdFx0XHRjb25zdCBbIGJlZm9yZSwgYWZ0ZXIgXSA9IFsgcHJldkNsb25lLnNsaWNlKCAwLCBpbmRleCArIDEgKSwgcHJldkNsb25lLnNsaWNlKCBpbmRleCArIDEgKSBdO1xuXG5cdFx0XHRyZXR1cm4gWyAuLi5iZWZvcmUsIHByZXZDbG9uZVsgaW5kZXggXSwgLi4uYWZ0ZXIgXTtcblx0XHR9ICk7XG5cdH1cblxuXHRjb25zdCBtb3ZlUmVwZWF0ZXJJdGVtID0gKCB7IG9sZEluZGV4LCBuZXdJbmRleCB9ICkgPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cblx0XHRcdFsgcHJldkNsb25lWyBuZXdJbmRleCBdLCBwcmV2Q2xvbmVbIG9sZEluZGV4IF0gXSA9IFsgcHJldkNsb25lWyBvbGRJbmRleCBdLCBwcmV2Q2xvbmVbIG5ld0luZGV4IF0gXTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH1cblxuXHRjb25zdCBtb3ZlVXAgPSAoIGluZGV4ICkgPT4ge1xuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggLSAxIH0gKTtcblx0fVxuXHRjb25zdCBtb3ZlRG93biA9ICggaW5kZXggKSA9PiB7XG5cdFx0bW92ZVJlcGVhdGVySXRlbSggeyBvbGRJbmRleDogaW5kZXgsIG5ld0luZGV4OiBpbmRleCArIDEgfSApO1xuXHR9XG5cblx0Y29uc3QgaXNEaXNhYmxlZEVuZCA9ICggaW5kZXggKSA9PiB7XG5cdFx0cmV0dXJuICEgKCBpbmRleCA8IGl0ZW1zRGF0YS5sZW5ndGggLSAxICk7XG5cdH1cblxuXHRjb25zdCB0b2dnbGVWaXNpYmxlID0gaW5kZXggPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cdFx0XHRwcmV2Q2xvbmVbIGluZGV4IF0uX192aXNpYmxlID0gISAoIHByZXZDbG9uZVsgaW5kZXggXS5fX3Zpc2libGUgKTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XG5cdFx0XHRmb3IgKCBjb25zdCBpdGVtc0RhdGFLZXkgaW4gaXRlbXNEYXRhICkge1xuXHRcdFx0XHRmb3IgKCBjb25zdCBpdGVtS2V5IGluIGl0ZW1zRGF0YVsgaXRlbXNEYXRhS2V5IF0gKSB7XG5cdFx0XHRcdFx0aWYgKCBpdGVtS2V5LnN0YXJ0c1dpdGgoICdfXycgKSApIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSBpdGVtc0RhdGFbIGl0ZW1zRGF0YUtleSBdWyBpdGVtS2V5IF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRvblNhdmVJdGVtcyggaXRlbXNEYXRhICk7XG5cdFx0XHRvblVuTW91bnQoKTtcblx0XHR9IGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xuXHRcdFx0b25Vbk1vdW50KCk7XG5cdFx0fVxuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XG5cblx0Y29uc3QgZ2V0UmVwZWF0ZXJJdGVtSWQgPSBpbmRleCA9PiBgamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbV8keyBpbmRleCB9YDtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGhlbHBTb3VyY2UsXG5cdFx0XHQgIGhlbHBWaXNpYmxlLFxuXHRcdFx0ICBoZWxwS2V5LFxuXHRcdCAgfSA9IGhlbHA7XG5cblx0Y29uc3QgaXNWaXNpYmxlSGVscCA9IGhlbHBWaXNpYmxlKCBpdGVtc0RhdGEgKSAmJiBoZWxwU291cmNlICYmIGhlbHBTb3VyY2VbIGhlbHBLZXkgXTtcblxuXHRyZXR1cm4gPGRpdlxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxuXHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyJyB9XG5cdD5cblx0XHR7IGlzVmlzaWJsZUhlbHAgJiYgPHA+eyBoZWxwU291cmNlWyBoZWxwS2V5IF0ubGFiZWwgfTwvcD4gfVxuXG5cdFx0eyAwIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8PlxuXHRcdFx0PEZsZXg+XG5cdFx0XHRcdDxGbGV4SXRlbT5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnICkgfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0ZsZXhJdGVtPlxuXHRcdFx0XHQ8RmxleEl0ZW0gc3R5bGU9eyB7XG5cdFx0XHRcdFx0ZmxleDogJ3Vuc2V0Jyxcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxZW0nLFxuXHRcdFx0XHR9IH0+XG5cdFx0XHRcdFx0ey8qPEJ1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0eyBfXyggJ0NvcHkgaXRlbXMgdG8gY2xpcGJvYXJkJywgJ2pldC1mcm9tLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7IF9fKCAnSW1wb3J0IGl0ZW1zIGZyb20gY2xpcGJvYXJkJywgJ2pldC1mcm9tLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9CdXR0b25Hcm91cD4qL31cblx0XHRcdFx0PC9GbGV4SXRlbT5cblx0XHRcdDwvRmxleD5cblx0XHQ8Lz4gfVxuXHRcdHsgaXRlbXNEYXRhLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiA8Q2FyZFxuXHRcdFx0aXNFbGV2YXRlZD17IHRydWUgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgaXRlbUNsYXNzTmFtZXMgfVxuXHRcdFx0a2V5PXsgZ2V0UmVwZWF0ZXJJdGVtSWQoIGluZGV4ICkgfVxuXHRcdD5cblx0XHRcdDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17ICdyZXBlYXRlcl9faXRlbV9faGVhZGVyJyB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0ZXItaXRlbV9fbGVmdC1oZWFkaW5nJz5cblx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b25zJyB9PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdGljb249eyBjdXJyZW50SXRlbS5fX3Zpc2libGUgPyAnbm8tYWx0JyA6ICdlZGl0JyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB0b2dnbGVWaXNpYmxlKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyAhIEJvb2xlYW4oIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LXVwLWFsdDInIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG1vdmVVcCggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXsgaXNEaXNhYmxlZEVuZCggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyAnYXJyb3ctZG93bi1hbHQyJyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlRG93biggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWl0ZW0tdGl0bGUnIH0+XG5cdFx0XHRcdFx0XHRcdHsgSXRlbUhlYWRpbmcgJiYgPEl0ZW1IZWFkaW5nXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg9eyBpbmRleCB9XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKCBkYXRhLCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0eyAhIEl0ZW1IZWFkaW5nICYmIGAjJHsgaW5kZXggKyAxIH1gIH1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxCdXR0b25Hcm91cD5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGNsb25lSXRlbSggaW5kZXggKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyBfXyggJ0Nsb25lJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlT3B0aW9uKCBpbmRleCApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7IF9fKCAnRGVsZXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0PC9DYXJkSGVhZGVyPlxuXHRcdFx0eyBjdXJyZW50SXRlbS5fX3Zpc2libGUgJiYgPENhcmRCb2R5XG5cdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtX19jb250ZW50JyB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgY2hpbGRyZW4gJiYgPFJlYWN0LkZyYWdtZW50XG5cdFx0XHRcdFx0a2V5PXsgYHJlcGVhdGVyLWNvbXBvbmVudF9faXRlbV8keyBpbmRleCB9YCB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbigge1xuXHRcdFx0XHRcdFx0Y3VycmVudEl0ZW0sXG5cdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbTogZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggZGF0YSwgaW5kZXggKSxcblx0XHRcdFx0XHRcdGN1cnJlbnRJbmRleDogaW5kZXhcblx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxuXHRcdFx0XHR7ICEgY2hpbGRyZW4gJiYgJ1NldCB1cCB5b3VyIFJlcGVhdGVyIFRlbXBsYXRlLCBwbGVhc2UuJyB9XG5cdFx0XHQ8L0NhcmRCb2R5PiB9XG5cdFx0PC9DYXJkPiApIH1cblx0XHR7IDEgPCBpdGVtc0RhdGEubGVuZ3RoICYmIDxUb2dnbGVDb250cm9sXG5cdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLWNsZWFyJ1xuXHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnICkgfVxuXHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cblx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cblx0XHQvPiB9XG5cdFx0PEJ1dHRvblxuXHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBhZGROZXdJdGVtKCBuZXdJdGVtICkgfVxuXHRcdD5cblx0XHRcdHsgYWRkTmV3QnV0dG9uTGFiZWwgfVxuXHRcdDwvQnV0dG9uPlxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyV2l0aFN0YXRlOyIsImNvbnN0IHsgaXNFbXB0eSB9ID0gd2luZG93LmxvZGFzaDtcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgd2l0aEluc3RhbmNlSWQgfSA9IHdpbmRvdy53cC5jb21wb3NlO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCBCYXNlQ29udHJvbCA9IHdpbmRvdy53cC5jb21wb25lbnRzLkJhc2VDb250cm9sO1xuXG5mdW5jdGlvbiBHcm91cGVkU2VsZWN0Q29udHJvbCgge1xuXHRcdFx0XHRcdFx0XHRcdCAgIGhlbHAsXG5cdFx0XHRcdFx0XHRcdFx0ICAgaW5zdGFuY2VJZCxcblx0XHRcdFx0XHRcdFx0XHQgICBsYWJlbCxcblx0XHRcdFx0XHRcdFx0XHQgICBtdWx0aXBsZSA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uQ2hhbmdlLFxuXHRcdFx0XHRcdFx0XHRcdCAgIG9wdGlvbnMgPSBbXSxcblx0XHRcdFx0XHRcdFx0XHQgICBjbGFzc05hbWUsXG5cdFx0XHRcdFx0XHRcdFx0ICAgdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0ICAgaGlkZUxhYmVsRnJvbVZpc2lvbixcblx0XHRcdFx0XHRcdFx0ICAgfSApIHtcblx0Y29uc3QgaWQgPSBgaW5zcGVjdG9yLXNlbGVjdC1jb250cm9sLSR7IGluc3RhbmNlSWQgfWA7XG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIGV2ZW50ICkgPT4ge1xuXHRcdG9uQ2hhbmdlKCBldmVudC50YXJnZXQudmFsdWUgKTtcblx0fTtcblxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXG5cblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0cmV0dXJuICEgaXNFbXB0eSggb3B0aW9ucyApICYmIChcblx0XHQ8QmFzZUNvbnRyb2wgbGFiZWw9eyBsYWJlbCB9IGhpZGVMYWJlbEZyb21WaXNpb249eyBoaWRlTGFiZWxGcm9tVmlzaW9uIH0gaWQ9eyBpZCB9IGhlbHA9eyBoZWxwIH1cblx0XHRcdFx0XHQgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XG5cdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdGlkPXsgaWQgfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXNlbGVjdC1jb250cm9sX19pbnB1dFwiXG5cdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdFx0XHRhcmlhLWRlc2NyaWJlZGJ5PXsgISEgaGVscCA/IGAkeyBpZCB9X19oZWxwYCA6IHVuZGVmaW5lZCB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxvcHRpb25cblx0XHRcdFx0XHRrZXk9eyBgJHsgbGFiZWwgfS1wbGFjZWhvbGRlcmAgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYGAgfVxuXHRcdFx0XHQ+eyBgLS1gIH08L29wdGlvbj5cblx0XHRcdFx0eyBvcHRpb25zLm1hcCggKCBvcHRHcm91cCwgZ3JvdXBJbmRleCApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gISBpc0VtcHR5KCBvcHRHcm91cC52YWx1ZXMgKSAmJiA8b3B0Z3JvdXBcblx0XHRcdFx0XHRcdGtleT17IGAkeyBvcHRHcm91cC5sYWJlbCB9LSR7IGdyb3VwSW5kZXggfWAgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBvcHRHcm91cC5sYWJlbCB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyBvcHRHcm91cC52YWx1ZXMubWFwKCAoIG9wdGlvbiwgaW5kZXggKSA9PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgYCR7IG9wdGlvbi52YWx1ZSB9LSR7IGluZGV4IH0tJHsgZ3JvdXBJbmRleCB9YCB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBvcHRpb24udmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXsgb3B0aW9uLmRpc2FibGVkIH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHsgb3B0aW9uLmxhYmVsIH1cblx0XHRcdFx0XHRcdFx0PC9vcHRpb24+LFxuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0PC9vcHRncm91cD47XG5cdFx0XHRcdH0gKSB9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHQ8L0Jhc2VDb250cm9sPlxuXHQpO1xuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhJbnN0YW5jZUlkKCBHcm91cGVkU2VsZWN0Q29udHJvbCApOyIsImZ1bmN0aW9uIEhvcml6b250YWxMaW5lKCBwcm9wcyApIHtcblx0cmV0dXJuIDxociBzdHlsZT17IHsgLi4ucHJvcHMgfSB9Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxMaW5lOyIsImltcG9ydCB3aXRoUHJlc2V0IGZyb20gXCIuL3ByZXNldC1lZGl0b3JcIjtcbmltcG9ydCB7XG5cdEdsb2JhbEZpZWxkLFxuXHRNYXBGaWVsZFxufSBmcm9tIFwiLi9wcmVzZXQtcmVuZGVyXCI7XG5cbmNvbnN0IHtcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdFxufSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIER5bmFtaWNQcmVzZXQoIHtcblx0XHRcdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbixcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0LFxuXHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXG5cdFx0XHRcdFx0XHRcdHBhcnNlVmFsdWUsXG5cdFx0XHRcdFx0XHRcdGV4Y2x1ZGVPcHRpb25zLFxuXHRcdFx0XHRcdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGUsXG5cdFx0XHRcdFx0XHRcdGlzVmlzaWJsZSxcblx0XHRcdFx0XHRcdH0gKSB7XG5cblx0Y29uc3QgcG9zaXRpb24gPSAnZHluYW1pYyc7XG5cdGNvbnN0IFsgc3RhdGVWYWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCAoKSA9PiBwYXJzZVZhbHVlKCB2YWx1ZSApICk7XG5cblx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggbmV3VmFsdWUsIG5hbWUgKSA9PiB7XG5cdFx0c2V0VmFsdWUoIHByZXYgPT4gKCB7IC4uLnByZXYsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9ICkgKTtcblx0fVxuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xuXHRcdFx0aWYgKCBvblNhdmVQcmVzZXQgKSB7XG5cdFx0XHRcdG9uU2F2ZVByZXNldCggSlNPTi5zdHJpbmdpZnkoIHN0YXRlVmFsdWUgKSApO1xuXHRcdFx0fVxuXHRcdFx0b25Vbk1vdW50KCk7XG5cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XG5cdFx0XHRvblVuTW91bnQoKTtcblx0XHR9XG5cdH0sIFsgaXNTYXZlQWN0aW9uIF0gKTtcblxuXHRyZXR1cm4gPD5cblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcuZ2xvYmFsX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8R2xvYmFsRmllbGRcblx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cblx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZSB9XG5cdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdGRhdGE9eyBkYXRhIH1cblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxuXHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxuXHRcdC8+ICkgfVxuXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLm1hcF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPE1hcEZpZWxkXG5cdFx0XHRrZXk9eyBgY3VycmVudF9maWVsZF8keyBkYXRhLm5hbWUgfV8keyBpbmRleCB9YCB9XG5cdFx0XHRjdXJyZW50U3RhdGU9eyBzdGF0ZVZhbHVlIH1cblx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSBdIH1cblx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0ZGF0YT17IGRhdGEgfVxuXHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxuXHRcdC8+ICkgfVxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQoIER5bmFtaWNQcmVzZXQgKTsiLCJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmZ1bmN0aW9uIHdpdGhQcmVzZXQoIFdyYXBwZWRDb21wb25lbnQgKSB7XG5cdHJldHVybiBmdW5jdGlvbiBKZXRGb3JtUHJlc2V0RWRpdG9yKCBwcm9wcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlVmFsdWUgPSAoKSA9PiB7XG5cdFx0XHRsZXQgdmFsID0ge307XG5cblx0XHRcdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBwcm9wcy52YWx1ZSApIHtcblx0XHRcdFx0dmFsID0geyAuLi5wcm9wcy52YWx1ZSB9O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIHByb3BzLnZhbHVlICYmICdzdHJpbmcnID09PSB0eXBlb2YgcHJvcHMudmFsdWUgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFsID0gSlNPTi5wYXJzZSggcHJvcHMudmFsdWUgKTtcblx0XHRcdFx0XHRpZiAoICdudW1iZXInID09PSB0eXBlb2YgdmFsICkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoICggZXhjZXB0aW9uICkge1xuXHRcdFx0XHRcdHZhbCA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR2YWwuamV0X3ByZXNldCA9IHRydWU7XG5cblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXNWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIHBvc2l0aW9uICkgPT4ge1xuXHRcdFx0cmV0dXJuICggKCBkYXRhLnBvc2l0aW9uICYmIHBvc2l0aW9uID09PSBkYXRhLnBvc2l0aW9uIClcblx0XHRcdFx0fHwgISBkYXRhLnBvc2l0aW9uIHx8ICdxdWVyeV92YXInICE9PSBjdXJyZW50U3RhdGUuZnJvbSApICYmIGlzR2xvYmFsVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzR2xvYmFsVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhICkgPT4ge1xuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XG5cdFx0XHRcdHN3aXRjaCAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcblx0XHRcdFx0XHRjYXNlICdxdWVyeV92YXInOlxuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0KCAncG9zdCcgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUucG9zdF9mcm9tIClcblx0XHRcdFx0XHRcdFx0fHwgKCAndXNlcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUudXNlcl9mcm9tIClcblx0XHRcdFx0XHRcdFx0fHwgKCAncXVlcnlfdmFyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIGFwcGx5RmlsdGVycyggJ2pldC5mYi5wcmVzZXQuZWRpdG9yLmN1c3RvbS5jb25kaXRpb24nLCBmYWxzZSwgZGF0YS5jdXN0b21fY29uZGl0aW9uLCBjdXJyZW50U3RhdGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXNDdXJyZW50RmllbGRWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIHBvc2l0aW9uICkgPT4ge1xuXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBkYXRhLnBvc2l0aW9uICYmIHBvc2l0aW9uICE9PSBkYXRhLnBvc2l0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmICEgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWUgJiYgY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlzTWFwRmllbGRWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIGZpZWxkICkgPT4ge1xuXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiAhIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWUgJiYgY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdGlmICggISBjdXJyZW50U3RhdGUuZmllbGRzX21hcCB8fCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF1bIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0fTtcblxuXHRcdGNvbnN0IGV4Y2x1ZGVPcHRpb25zID0gKCBzZWxlY3RPcHRpb25zICkgPT4ge1xuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsgLi4uc2VsZWN0T3B0aW9ucyBdO1xuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKCAoIG9wdGlvbiwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdGlmICggcHJvcHMuZXhjbHVkZVNvdXJjZXMgJiYgcHJvcHMuZXhjbHVkZVNvdXJjZXMuaW5jbHVkZXMoIG9wdGlvbi52YWx1ZSApICkge1xuXHRcdFx0XHRcdG9wdGlvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHR9O1xuXG5cdFx0cmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50XG5cdFx0XHRrZXk9J3dyYXBwZWQtcHJlc2V0LWVkaXRvcidcblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0cGFyc2VWYWx1ZT17IHBhcnNlVmFsdWUgfVxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cblx0XHRcdGlzTWFwRmllbGRWaXNpYmxlPXsgaXNNYXBGaWVsZFZpc2libGUgfVxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxuXHRcdC8+O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQ7XG4iLCJpbXBvcnQgR3JvdXBlZFNlbGVjdENvbnRyb2wgZnJvbSAnLi4vZ3JvdXBlZC1zZWxlY3QtY29udHJvbCc7XG5cbmNvbnN0IHtcblx0XHQgIFRleHRDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIEN1c3RvbVNlbGVjdENvbnRyb2wsXG5cdFx0ICBDYXJkLFxuXHRcdCAgQ2FyZEJvZHksXG5cdFx0ICBDYXJkSGVhZGVyLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBHbG9iYWxGaWVsZCgge1xuXHRcdFx0XHRcdFx0ICBkYXRhLFxuXHRcdFx0XHRcdFx0ICB2YWx1ZSxcblx0XHRcdFx0XHRcdCAgaW5kZXgsXG5cdFx0XHRcdFx0XHQgIG9uQ2hhbmdlVmFsdWUsXG5cdFx0XHRcdFx0XHQgIGlzVmlzaWJsZSxcblx0XHRcdFx0XHRcdCAgZXhjbHVkZU9wdGlvbnMgPSBvcHRpb25zID0+IG9wdGlvbnMsXG5cdFx0XHRcdFx0XHQgIHBvc2l0aW9uLFxuXHRcdFx0XHRcdCAgfSApIHtcblxuXHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfJyArIGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWVbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfJyArIGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMoIGRhdGEub3B0aW9ucyApIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlWyBkYXRhLm5hbWUgXSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBBdmFpbGFibGVNYXBGaWVsZCgge1xuXHRcdFx0XHRcdFx0XHRcdGZpZWxkc01hcCxcblx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcblx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdGlzTWFwRmllbGRWaXNpYmxlLFxuXHRcdFx0XHRcdFx0XHR9ICkge1xuXG5cdGxldCBjdXJyZW50VmFsID0gbnVsbDtcblxuXHRpZiAoICEgZmllbGRzTWFwICkge1xuXHRcdGZpZWxkc01hcCA9IHt9O1xuXHR9XG5cblx0Y3VycmVudFZhbCA9IGZpZWxkc01hcFsgZmllbGQgXTtcblxuXHRpZiAoICEgY3VycmVudFZhbCB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIGN1cnJlbnRWYWwgKSB7XG5cdFx0Y3VycmVudFZhbCA9IHt9O1xuXHR9XG5cblx0Y29uc3QgQXZhaWxhYmxlRmllbGRXcmFwcGVyID0gKCB7IGZpZWxkLCBuYW1lLCBpbmRleCwgZkluZGV4LCBjaGlsZHJlbiB9ICkgPT4gPENhcmRcblx0XHRrZXk9eyBmaWVsZCArIG5hbWUgKyBpbmRleCArIGZJbmRleCB9XG5cdFx0c2l6ZT17ICdleHRyYVNtYWxsJyB9XG5cdFx0c3R5bGU9eyB7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH0gfVxuXHQ+XG5cdFx0PENhcmRIZWFkZXI+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2pldC1sYWJlbC1vdmVyZmxvdyc+eyBmaWVsZCB9PC9zcGFuPlxuXHRcdDwvQ2FyZEhlYWRlcj5cblx0XHQ8Q2FyZEJvZHlcblx0XHRcdGtleT17IGZpZWxkICsgbmFtZSArIGluZGV4ICsgZkluZGV4IH1cblx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX2ZpZWxkcy1tYXAtaXRlbScgfVxuXHRcdD5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvQ2FyZEJvZHk+XG5cdDwvQ2FyZD47XG5cblx0ZnVuY3Rpb24gQXZhaWxhYmxlRmllbGRXcmFwcGVyRnVuYyggeyBmaWVsZCwgbmFtZSwgaW5kZXgsIGZJbmRleCB9LCBjaGlsZHJlbiApIHtcblx0XHRyZXR1cm4gPENhcmRcblx0XHRcdGtleT17IGZpZWxkICsgbmFtZSArIGluZGV4ICsgZkluZGV4IH1cblx0XHRcdHNpemU9eyAnZXh0cmFTbWFsbCcgfVxuXHRcdFx0c3R5bGU9eyB7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH0gfVxuXHRcdD5cblx0XHRcdDxDYXJkSGVhZGVyPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2pldC1sYWJlbC1vdmVyZmxvdyc+eyBmaWVsZCB9PC9zcGFuPlxuXHRcdFx0PC9DYXJkSGVhZGVyPlxuXHRcdFx0PENhcmRCb2R5XG5cdFx0XHRcdGtleT17IGZpZWxkICsgbmFtZSArIGluZGV4ICsgZkluZGV4IH1cblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fZmllbGRzLW1hcC1pdGVtJyB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0PC9DYXJkQm9keT5cblx0XHQ8L0NhcmQ+O1xuXHR9XG5cblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9eyBgbWFwX2ZpZWxkX3ByZXNldF8keyBmaWVsZCArIGluZGV4IH1gIH0+XG5cblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcubWFwX2ZpZWxkcy5tYXAoICggZGF0YSwgZkluZGV4ICkgPT4ge1xuXHRcdFx0Y29uc3QgcHJvcHMgPSB7IGZpZWxkLCBuYW1lOiBkYXRhLm5hbWUsIGluZGV4LCBmSW5kZXggfTtcblxuXHRcdFx0Y29uc3QgdW5pcUtleSA9ICdjb250cm9sXycgKyBmaWVsZCArIGRhdGEubmFtZSArIGluZGV4ICsgZkluZGV4O1xuXG5cdFx0XHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XG5cdFx0XHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxuXHRcdFx0XHRcdFx0QXZhaWxhYmxlRmllbGRXcmFwcGVyRnVuYyggcHJvcHMsIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5ICsgJ1RleHRDb250cm9sJyB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xuXHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxuXHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdC8+IClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0XHRcdC8vbGFiZWw9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwidG9wXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGNhc2UgJ2N1c3RvbV9zZWxlY3QnOlxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxuXHRcdFx0XHRcdFx0XHQ8Q3VzdG9tU2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB7IHNlbGVjdGVkSXRlbSB9ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBzZWxlY3RlZEl0ZW0ua2V5O1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcblx0XHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgZGF0YS5vcHRpb25zLmZpbmQoIG9wdGlvbiA9PiBvcHRpb24ua2V5ID09PSBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPiApO1xuXHRcdFx0XHRjYXNlICdncm91cGVkX3NlbGVjdCc6XG5cdFx0XHRcdFx0cmV0dXJuICggaXNNYXBGaWVsZFZpc2libGUoIHZhbHVlLCBkYXRhLCBmaWVsZCApICYmXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XG5cdFx0XHRcdFx0XHRcdDxHcm91cGVkU2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0XHRcdC8vbGFiZWw9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwidG9wXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPiApO1xuXHRcdFx0fVxuXHRcdH0gKSB9XG5cdDwvUmVhY3QuRnJhZ21lbnQ+O1xufVxuXG5mdW5jdGlvbiBNYXBGaWVsZCgge1xuXHRcdFx0XHRcdCAgIGRhdGEsXG5cdFx0XHRcdFx0ICAgdmFsdWUsXG5cdFx0XHRcdFx0ICAgaW5kZXgsXG5cdFx0XHRcdFx0ICAgY3VycmVudFN0YXRlLFxuXHRcdFx0XHRcdCAgIG9uQ2hhbmdlVmFsdWUsXG5cdFx0XHRcdFx0ICAgaXNDdXJyZW50RmllbGRWaXNpYmxlLFxuXHRcdFx0XHRcdCAgIHBvc2l0aW9uID0gJ2dlbmVyYWwnLFxuXHRcdFx0XHQgICB9ICkge1xuXG5cdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiAoIGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgJ2NvbnRyb2xfJyArIGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHRjYXNlICdjdXN0b21fc2VsZWN0Jzpcblx0XHRcdHJldHVybiAoIGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxDdXN0b21TZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jdXN0b20tc2VsZWN0LWNvbnRyb2wnXG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggeyBzZWxlY3RlZEl0ZW0gfSApID0+IHtcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBzZWxlY3RlZEl0ZW0ua2V5O1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB2YWx1ZSwgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgZGF0YS5vcHRpb25zLmZpbmQoIG9wdGlvbiA9PiBvcHRpb24ua2V5ID09PSB2YWx1ZSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj4gKTtcblx0XHRjYXNlICdncm91cGVkX3NlbGVjdCc6XG5cdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8R3JvdXBlZFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+ICk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB7XG5cdEdsb2JhbEZpZWxkLFxuXHRBdmFpbGFibGVNYXBGaWVsZCxcblx0TWFwRmllbGQsXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIFJlcXVlc3RCdXR0b24oIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0XHRcdGFqYXhBcmdzID0ge30sXG5cdFx0XHRcdFx0XHRcdG9uU3VjY2Vzc1JlcXVlc3QgPSAoKSA9PiB7fSxcblx0XHRcdFx0XHRcdFx0b25GYWlsUmVxdWVzdCA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRvbkxvYWRpbmcgPSAoKSA9PiB7fSxcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gJycsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuID0gKCkgPT4ge31cblx0XHRcdFx0XHRcdH0gKSB7XG5cblx0Y29uc3QgZGVmYXVsdFZhbGlkYXRlID0gKCkgPT4ge1xuXHRcdHJldHVybiBqUXVlcnkuYWpheCggeyB1cmw6IGFqYXh1cmwsIHR5cGU6ICdQT1NUJywgZGF0YTogYWpheEFyZ3MgfSApO1xuXHR9O1xuXG5cdGNvbnN0IHJlcXVlc3QgPSAoKSA9PiB7XG5cdFx0b25Mb2FkaW5nKCk7XG5cblx0XHRkZWZhdWx0VmFsaWRhdGUoKVxuXHRcdC5kb25lKCByZXNwb25zZSA9PiByZXNwb25zZS5zdWNjZXNzID8gb25TdWNjZXNzUmVxdWVzdCggcmVzcG9uc2UgKSA6IG9uRmFpbFJlcXVlc3QoKSApXG5cdFx0LmZhaWwoICgpID0+IG9uRmFpbFJlcXVlc3QoKSApO1xuXHR9O1xuXG5cdHJldHVybiA8QnV0dG9uXG5cdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cblx0XHRpc1ByaW1hcnlcblx0XHRvbkNsaWNrPXsgcmVxdWVzdCB9XG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxuXHRcdHsgbGFiZWwgfVxuXHQ8L0J1dHRvbj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RCdXR0b247XG4iLCJpbXBvcnQgUmVxdWVzdEJ1dHRvbiBmcm9tIFwiLi9yZXF1ZXN0LWJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGVMb2FkaW5nQ2xhc3NlcyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlclwiO1xuXG5mdW5jdGlvbiBSZXF1ZXN0TG9hZGluZ0J1dHRvbigge1xuXHRcdFx0XHRcdFx0XHRcdCAgIGxhYmVsLFxuXHRcdFx0XHRcdFx0XHRcdCAgIGFqYXhBcmdzID0ge30sXG5cdFx0XHRcdFx0XHRcdFx0ICAgb25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7fSxcblx0XHRcdFx0XHRcdFx0ICAgfSApIHtcblxuXHRjb25zdCBbXG5cdFx0Y2xhc3NOYW1lLFxuXHRcdHNldExvYWRpbmdDbGFzcyxcblx0XHRjbGVhckxvYWRpbmdDbGFzc1xuXHRdID0gdXNlU3RhdGVMb2FkaW5nQ2xhc3NlcygpO1xuXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxuXHRcdGFqYXhBcmdzPXsgYWpheEFyZ3MgfVxuXHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XG5cdFx0b25TdWNjZXNzUmVxdWVzdD17IHJlc3BvbnNlID0+IHtcblx0XHRcdGNsZWFyTG9hZGluZ0NsYXNzKCk7XG5cdFx0XHRvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApXG5cdFx0fSB9XG5cdFx0b25GYWlsUmVxdWVzdD17ICgpID0+IHtcblx0XHRcdGNsZWFyTG9hZGluZ0NsYXNzKCk7XG5cdFx0XHRvbkZhaWxSZXF1ZXN0KCk7XG5cdFx0fSB9XG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0PlxuXHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cblx0PC9SZXF1ZXN0QnV0dG9uPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdExvYWRpbmdCdXR0b247IiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSBcIi4vcmVxdWVzdC1idXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlVmFsaWRDbGFzc2VzIH0gZnJvbSBcIi4uL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyXCI7XG5cbmZ1bmN0aW9uIFZhbGlkYXRlQnV0dG9uKCB7XG5cdFx0XHRcdFx0XHRcdCBpbml0aWFsVmFsaWQsXG5cdFx0XHRcdFx0XHRcdCBsYWJlbCxcblx0XHRcdFx0XHRcdFx0IGFqYXhBcmdzID0ge30sXG5cdFx0XHRcdFx0XHRcdCBvblZhbGlkID0gKCkgPT4ge30sXG5cdFx0XHRcdFx0XHRcdCBvbkludmFsaWQgPSAoKSA9PiB7fSxcblx0XHRcdFx0XHRcdCB9ICkge1xuXG5cdGNvbnN0IFtcblx0XHRjbGFzc05hbWUsXG5cdFx0c2V0VmFsaWRDbGFzcyxcblx0XHRzZXRJbnZhbGlkQ2xhc3MsXG5cdFx0c2V0TG9hZGluZ0NsYXNzXG5cdF0gPSB1c2VTdGF0ZVZhbGlkQ2xhc3NlcyggaW5pdGlhbFZhbGlkIHx8IGZhbHNlICk7XG5cblx0Y29uc3Qgc2V0VmFsaWQgPSByZXNwb25zZSA9PiB7XG5cdFx0c2V0VmFsaWRDbGFzcygpO1xuXHRcdG9uVmFsaWQoIHJlc3BvbnNlICk7XG5cdH07XG5cblx0Y29uc3Qgc2V0SW52YWxpZCA9ICgpID0+IHtcblx0XHRzZXRJbnZhbGlkQ2xhc3MoKTtcblx0XHRvbkludmFsaWQoKTtcblx0fTtcblxuXHRyZXR1cm4gPFJlcXVlc3RCdXR0b25cblx0XHRhamF4QXJncz17IGFqYXhBcmdzIH1cblx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRvbkxvYWRpbmc9eyBzZXRMb2FkaW5nQ2xhc3MgfVxuXHRcdG9uU3VjY2Vzc1JlcXVlc3Q9eyBzZXRWYWxpZCB9XG5cdFx0b25GYWlsUmVxdWVzdD17IHNldEludmFsaWQgfVxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdD5cblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XG5cdDwvUmVxdWVzdEJ1dHRvbj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRlQnV0dG9uOyIsImNvbnN0IHsgUmF3SFRNTCB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlclJlcXVpcmVkQ29udHJvbCgge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsS2V5ID0gJ2xhYmVsJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRLZXkgPSAncmVxdWlyZWQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwS2V5ID0gJ2hlbHAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApIHtcblx0Y29uc3QgWyBuYW1lLCBkYXRhIF0gPSBmaWVsZDtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXG5cdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lIH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1maWVsZC1tYXBfX3Jvdy1sYWJlbFwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fbGFiZWwnIH0+XG5cdFx0XHRcdFx0eyAoIGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgJiYgZGF0YVsgbGFiZWxLZXkgXSApICYmIGRhdGFbIGxhYmVsS2V5IF0gfVxuXHRcdFx0XHRcdHsgKCAhIGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgKSAmJiBkYXRhIH1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHR7ICggZGF0YS5oYXNPd25Qcm9wZXJ0eSggcmVxdWlyZWRLZXkgKSAmJiBkYXRhWyByZXF1aXJlZEtleSBdICkgJiZcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2ZpZWxkcy1tYXBfX3JlcXVpcmVkJyB9PiAqPC9zcGFuPiB9XG5cdFx0XHRcdHsgZGF0YVsgaGVscEtleSBdICYmIDxwXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XG5cdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXG5cdFx0XHRcdFx0XHRtYXJnaW46ICcxZW0gMCAwIDAnLFxuXHRcdFx0XHRcdH0gfT5cblx0XHRcdFx0XHQ8UmF3SFRNTD57IGRhdGFbIGhlbHBLZXkgXSB9PC9SYXdIVE1MPlxuXHRcdFx0XHQ8L3A+IH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9kaXY+XG5cdCk7XG59IiwiaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gXCIuLi9ob29rcy9ob29rcy1oZWxwZXJcIjtcbmltcG9ydCBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyBmcm9tIFwiLi4vZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aW9uc0J5VHlwZSA9IHR5cGUgPT4ge1xuXHRjb25zdCBbIGFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoKTtcblxuXHRyZXR1cm4gYWN0aW9ucy5maWx0ZXIoIGFjdGlvbiA9PiB0eXBlID09PSBhY3Rpb24udHlwZSApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbGl6ZUhlbHBlciA9IG5hbWUgPT4ge1xuXHRyZXR1cm4gbmFtZSA/IHdpbmRvdy5KZXRGQkxvY2FsaXplSGVscGVyWyBuYW1lIF0gOiB3aW5kb3cuSmV0RkJMb2NhbGl6ZUhlbHBlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25CeVR5cGVMaXN0ID0gKCBhY3Rpb25UeXBlLCB3aXRoRGVzYyA9IGZhbHNlICkgPT4ge1xuXHRyZXR1cm4gZ2V0QWN0aW9uc0J5VHlwZSggYWN0aW9uVHlwZSApLm1hcCggYWN0aW9uID0+IHtcblx0XHRjb25zdCBuZXdBY3Rpb24gPSB7XG5cdFx0XHR2YWx1ZTogYWN0aW9uLmlkLFxuXHRcdFx0bGFiZWw6IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldEFjdGlvbkxhYmVsJyApKCBhY3Rpb24udHlwZSApLFxuXHRcdH07XG5cdFx0aWYgKCB3aXRoRGVzYyApIHtcblx0XHRcdG5ld0FjdGlvbi5sYWJlbCArPSBgICgkeyBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkgfSlgXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld0FjdGlvbjtcblx0fSApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFjdGlvblNldHRpbmdzID0gYWN0aW9uSWQgPT4ge1xuXHRjb25zdCBbIGFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoKTtcblx0Y29uc3QgYWN0aW9uID0gYWN0aW9ucy5maW5kKCBhY3Rpb24gPT4gYWN0aW9uSWQgPT09IGFjdGlvbi5pZCApO1xuXG5cdHJldHVybiAoIGFjdGlvbiAmJiBhY3Rpb24uc2V0dGluZ3MgKSA/IGFjdGlvbi5zZXR0aW5ncyA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAgPSAoIC4uLnNvdXJjZXMgKSA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gW107XG5cblx0Zm9yICggY29uc3Qgc291cmNlIG9mIHNvdXJjZXMgKSB7XG5cdFx0cmVzcG9uc2UucHVzaCggLi4uc291cmNlLm1hcCggaXRlbSA9PiB7XG5cdFx0XHRjb25zdCBpZCA9IGl0ZW0udmFsdWU7XG5cblx0XHRcdHJldHVybiBbIGlkLCBpdGVtIF07XG5cdFx0fSApICk7XG5cdH1cblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG4iLCJpbXBvcnQgd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0IGZyb20gXCIuL2FjdGlvbi13cmFwcGVyXCI7XG5cbmZ1bmN0aW9uIGFkZEFjdGlvbiggYWN0aW9uVHlwZSwgYWN0aW9uSW5zdGFuY2UgKSB7XG5cdHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgPSB3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zIHx8IHt9O1xuXHR3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zWyBhY3Rpb25UeXBlIF0gPSB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQoIGFjdGlvblR5cGUsIGFjdGlvbkluc3RhbmNlICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEFjdGlvbjtcbiIsImltcG9ydCB7IGZyb21Mb2NhbGl6ZUhlbHBlciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJcIjtcblxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQoIGFjdGlvblR5cGUsIEFjdGlvbkluc3RhbmNlICkge1xuXHRjb25zdCBsb2NhbGl6ZWREYXRhID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0TG9jYWxpemVkRnVsbFBhY2snICkoIGFjdGlvblR5cGUgKTtcblxuXHRyZXR1cm4gcHJvcHMgPT4ge1xuXHRcdGNvbnN0IG9uQ2hhbmdlU2V0dGluZyA9ICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdHByb3BzLm9uQ2hhbmdlKCB7XG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzLFxuXHRcdFx0XHRbIGtleSBdOiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25DaGFuZ2VTZXR0aW5nT2JqID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLm9uQ2hhbmdlKCB7XG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzLFxuXHRcdFx0XHQuLi52YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZ2V0TWFwRmllbGQgPSAoIHsgc291cmNlID0gJ2ZpZWxkc19tYXAnLCBuYW1lIH0gKSA9PiB7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHByb3BzLnNldHRpbmdzO1xuXG5cdFx0XHRpZiAoIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAnJztcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc2V0TWFwRmllbGQgPSAoIHsgc291cmNlID0gJ2ZpZWxkc19tYXAnLCBuYW1lRmllbGQsIHZhbHVlIH0gKSA9PiB7XG5cdFx0XHRjb25zdCBmaWVsZHNNYXAgPSB7XG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSxcblx0XHRcdFx0WyBuYW1lRmllbGQgXTogdmFsdWUsXG5cdFx0XHR9O1xuXG5cdFx0XHRwcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcblx0XHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwLFxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFkZGl0aW9uYWxQcm9wcyA9IHsgb25DaGFuZ2VTZXR0aW5nLCBnZXRNYXBGaWVsZCwgc2V0TWFwRmllbGQsIG9uQ2hhbmdlU2V0dGluZ09iaiB9O1xuXHRcdGNvbnN0IHJlc3VsdFByb3BzID0geyAuLi5wcm9wcywgLi4ubG9jYWxpemVkRGF0YSwgLi4uYWRkaXRpb25hbFByb3BzIH07XG5cblx0XHRyZXR1cm4gPD5cblx0XHRcdDxBY3Rpb25JbnN0YW5jZSB7IC4uLnJlc3VsdFByb3BzIH0gLz5cblx0XHRcdHsgYXBwbHlGaWx0ZXJzKCBgamV0LmZiLnJlbmRlci5hY3Rpb24uJHsgYWN0aW9uVHlwZSB9YCwgPD48Lz4sIHJlc3VsdFByb3BzICkgfVxuXHRcdDwvPlxuXHR9O1xufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yID0gKCBibG9ja1BhcnNlckZ1bmMgKSA9PiB7XG5cdGNvbnN0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yID0gKCBibG9ja3MgKSA9PiB7XG5cblx0XHRibG9ja3MgPSBibG9ja3MgfHwgd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKTtcblxuXHRcdGJsb2Nrcy5tYXAoIGJsb2NrID0+IHtcblx0XHRcdGJsb2NrUGFyc2VyRnVuYyggYmxvY2sgKTtcblxuXHRcdFx0aWYgKCBibG9jay5pbm5lckJsb2Nrcy5sZW5ndGggKSB7XG5cdFx0XHRcdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jay5pbm5lckJsb2NrcyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcblxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvcigpO1xufVxuXG5jb25zdCBnZXRGb3JtRmllbGRzQmxvY2tzID0gKCBleGNsdWRlID0gW10sIHBsYWNlaG9sZGVyID0gZmFsc2UsIHN1cHByZXNzRmlsdGVyID0gZmFsc2UgKSA9PiB7XG5cdGxldCBmb3JtRmllbGRzID0gW107XG5cdGxldCBza2lwRmllbGRzID0gWyAnc3VibWl0JywgJ2Zvcm0tYnJlYWsnLCAnaGVhZGluZycsICdncm91cC1icmVhaycsICdjb25kaXRpb25hbCcsIC4uLmV4Y2x1ZGUgXTtcblxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcblx0XHRcdCYmIGJsb2NrLmF0dHJpYnV0ZXMubmFtZVxuXHRcdFx0JiYgISBza2lwRmllbGRzLmZpbmQoIGZpZWxkID0+IGJsb2NrLm5hbWUuaW5jbHVkZXMoIGZpZWxkICkgKVxuXHRcdCkge1xuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKCB7XG5cdFx0XHRcdGJsb2NrTmFtZTogYmxvY2submFtZSxcblx0XHRcdFx0bmFtZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxuXHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0Zm9ybUZpZWxkcyA9IHBsYWNlaG9sZGVyXG5cdFx0PyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXG5cdFx0OiBmb3JtRmllbGRzO1xuXG5cdHJldHVybiBzdXBwcmVzc0ZpbHRlciA/IGZvcm1GaWVsZHMgOiBhcHBseUZpbHRlcnMoICdqZXQuZmIuZ2V0Rm9ybUZpZWxkc0Jsb2NrcycsIGZvcm1GaWVsZHMgKTtcbn1cblxuY29uc3QgZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQgPSAoIHBsYWNlaG9sZGVyID0gZmFsc2UsIHN1cHByZXNzRmlsdGVyID0gZmFsc2UgKSA9PiB7XG5cblx0Y29uc3Qgc2tpcEZpZWxkcyA9IFsgJ3N1Ym1pdCcsICdmb3JtLWJyZWFrJywgJ2hlYWRpbmcnLCAnZ3JvdXAtYnJlYWsnLCAnY29uZGl0aW9uYWwnIF07XG5cdGxldCBmb3JtRmllbGRzID0gW107XG5cblx0Y29uc3QgY3VycmVudCA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9jaygpO1xuXG5cdGlmICggbnVsbCA9PT0gY3VycmVudCApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcblx0XHRcdCYmIGN1cnJlbnQuY2xpZW50SWQgIT09IGJsb2NrLmNsaWVudElkXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXG5cdFx0KSB7XG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxuXHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0Zm9ybUZpZWxkcyA9IHBsYWNlaG9sZGVyXG5cdFx0PyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXG5cdFx0OiBmb3JtRmllbGRzO1xuXG5cdHJldHVybiBzdXBwcmVzc0ZpbHRlciA/IGZvcm1GaWVsZHMgOiBhcHBseUZpbHRlcnMoICdqZXQuZmIuZ2V0Rm9ybUZpZWxkc0Jsb2NrcycsIGZvcm1GaWVsZHMgKTtcbn1cblxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzID0gKCBleGNsdWRlID0gW10gKSA9PiB7XG5cdGxldCBmaWVsZHMgPSBbXTtcblx0Y29uc3QgYmxvY2tzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggZXhjbHVkZSApO1xuXG5cdGlmICggYmxvY2tzICkge1xuXHRcdGJsb2Nrcy5mb3JFYWNoKCBpdGVtID0+IGZpZWxkcy5wdXNoKCBpdGVtLm5hbWUgKSApO1xuXHR9XG5cdHJldHVybiBmaWVsZHM7XG59XG5cbmNvbnN0IGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyA9ICggYmxvY2tOYW1lICkgPT4ge1xuXHRjb25zdCBmaWVsZHMgPSBnZXRBdmFpbGFibGVGaWVsZHMoIFsgYmxvY2tOYW1lIF0gKTtcblxuXHRsZXQgZmllbGRzU3RyaW5nID0gW107XG5cdGZpZWxkcy5mb3JFYWNoKCBmdW5jdGlvbiggaXRlbSApIHtcblx0XHRmaWVsZHNTdHJpbmcucHVzaCggJyVGSUVMRDo6JyArIGl0ZW0gKyAnJScgKTtcblx0fSApO1xuXG5cdHJldHVybiBfXyggJ0F2YWlsYWJsZSBmaWVsZHM6ICcgKSArIGZpZWxkc1N0cmluZy5qb2luKCAnLCAnICk7XG59XG5cbmNvbnN0IGdldElubmVyQmxvY2tzID0gKCBjbGllbnRJZCApID0+IHtcblx0Y29uc3QgYmxvY2sgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrKCBjbGllbnRJZCApO1xuXHRyZXR1cm4gYmxvY2sgPyBibG9jay5pbm5lckJsb2NrcyA6IFtdO1xufVxuXG5jb25zdCBnZXRGb3JtRmllbGRzQnlCbG9jayA9ICggYmxvY2tFeGNsdWRlICkgPT4ge1xuXHRyZXR1cm4gKCkgPT4gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggWyBibG9ja0V4Y2x1ZGUubmFtZSBdICk7XG59XG5cbmNvbnN0IGdldEJsb2Nrc0J5TmFtZSA9IGJsb2NrTmFtZXMgPT4ge1xuXHRjb25zdCBibG9ja3MgPSBbXTtcblxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xuXHRcdGlmICggISBibG9ja05hbWVzLmluY2x1ZGVzKCBibG9jay5uYW1lICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGJsb2Nrcy5wdXNoKCBibG9jayApO1xuXHR9ICk7XG5cblx0cmV0dXJuIGJsb2Nrcztcbn07XG5cbmV4cG9ydCB7XG5cdGdldEZvcm1GaWVsZHNCeUJsb2NrLFxuXHRnZXRJbm5lckJsb2Nrcyxcblx0Z2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nLFxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxuXHRnZXRCbG9ja3NCeU5hbWUsXG59O1xuXG4iLCJpbXBvcnQge1xuXHRmcm9tTG9jYWxpemVIZWxwZXIsXG5cdGdldEFjdGlvblNldHRpbmdzLFxufSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb24taGVscGVyXCI7XG5cbmZ1bmN0aW9uIGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB7XG5cdGNvbnN0IHsgZ2F0ZXdheUF0dHJzLCBsYWJlbCB9ID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0TG9jYWxpemVkRnVsbFBhY2snICkoIGFjdGlvbi50eXBlICk7XG5cdGNvbnN0IGFjdGlvblNldHRpbmdzID0gZ2V0QWN0aW9uU2V0dGluZ3MoIGFjdGlvbi5pZCApO1xuXG5cdGNvbnN0IHZhbHVlID0gYXR0ciA9PiB7XG5cdFx0aWYgKCBhY3Rpb25TZXR0aW5nc1sgYXR0ciBdICkge1xuXHRcdFx0cmV0dXJuIGFjdGlvblNldHRpbmdzWyBhdHRyIF07XG5cdFx0fVxuXHRcdGlmICggYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF0gJiYgYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF1bIGF0dHIgXSApIHtcblx0XHRcdHJldHVybiBhY3Rpb25TZXR0aW5nc1sgYWN0aW9uLnR5cGUgXVsgYXR0ciBdO1xuXHRcdH1cblx0XHRyZXR1cm4gJ05VTEwnO1xuXHR9O1xuXG5cdGNvbnN0IGxhYmVsV2l0aEF0dHJzID0gZ2F0ZXdheUF0dHJzKCkubWFwKCBhdHRyID0+ICggYCR7IGxhYmVsKCBhdHRyICkgfSAkeyB2YWx1ZSggYXR0ciApIH1gICkgKTtcblxuXHRyZXR1cm4gbGFiZWxXaXRoQXR0cnMuam9pbiggJywgJyApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYXRld2F5QWN0aW9uQXR0cmlidXRlczsiLCJleHBvcnQgY29uc3QgZ2F0ZXdheUF0dHIgPSAoIGF0dHIgPSBmYWxzZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xuXHRjb25zdCBkYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xuXG5cdGlmICggISBhdHRyICkge1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cdGlmICggISBkYXRhWyBhdHRyIF0gKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3Qgc291cmNlID0gZGF0YVsgYXR0ciBdO1xuXG5cdHJldHVybiBuYW1lID0+IHNvdXJjZVsgbmFtZSBdID8gc291cmNlWyBuYW1lIF0gOiBpc0VtcHR5O1xufTtcblxuZXhwb3J0IGNvbnN0IGdhdGV3YXlMYWJlbCA9ICggdHlwZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xuXG5cdHJldHVybiBhdHRyID0+IGxhYmVsKCB0eXBlICkgPyBsYWJlbCggdHlwZSApWyBhdHRyIF0gOiBpc0VtcHR5O1xufVxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJHYXRld2F5ID0gKCBpZCwgY2FsbGJhY2sgKSA9PiB7XG5cdHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCA9IHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCB7fTtcblx0d2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdID0gY2FsbGJhY2s7XG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyR2F0ZXdheSA9ICggaWQsIHByb3BzICkgPT4ge1xuXHRpZiAoICEgd2luZG93LmpldEZCR2F0ZXdheXNMaXN0IHx8ICEgd2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IEdhdGV3YXlDb21wb25lbnQgPSB3aW5kb3cuamV0RkJHYXRld2F5c0xpc3RbIGlkIF07XG5cblx0cmV0dXJuIDxHYXRld2F5Q29tcG9uZW50IHsgLi4ucHJvcHMgfSAvPjtcbn07IiwiY29uc3Qge1xuXHR1c2VTdGF0ZSxcblx0dXNlRWZmZWN0XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHR1c2VTZWxlY3QsXG5cdHVzZURpc3BhdGNoLFxufSA9IHdwLmRhdGE7XG5cbmV4cG9ydCBjb25zdCB1c2VNZXRhU3RhdGUgPSAoIGtleSwgaWZFbXB0eSA9ICd7fScgKSA9PiB7XG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xuXHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcblx0fSApO1xuXG5cdGNvbnN0IHtcblx0XHRlZGl0UG9zdFxuXHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcblxuXHRjb25zdCBbIG1ldGFTdGF0ZVZhbHVlLCBzZXRNZXRhU3RhdGVWYWx1ZSBdID0gdXNlU3RhdGUoIEpTT04ucGFyc2UoIG1ldGFbIGtleSBdIHx8IGlmRW1wdHkgKSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGVkaXRQb3N0KCB7XG5cdFx0XHRtZXRhOiAoIHtcblx0XHRcdFx0Li4ubWV0YSxcblx0XHRcdFx0WyBrZXkgXTogSlNPTi5zdHJpbmdpZnkoIG1ldGFTdGF0ZVZhbHVlIClcblx0XHRcdH0gKVxuXHRcdH0gKTtcblx0fSwgWyBtZXRhU3RhdGVWYWx1ZSBdICk7XG5cblx0cmV0dXJuIFsgbWV0YVN0YXRlVmFsdWUsIHNldE1ldGFTdGF0ZVZhbHVlIF07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQWN0aW9ucyA9ICggd2l0aEVkaXRQb3N0RWZmZWN0ID0gZmFsc2UgKSA9PiB7XG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xuXHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcblx0fSApO1xuXG5cdGNvbnN0IHtcblx0XHRlZGl0UG9zdFxuXHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcblxuXHRjb25zdCBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhLl9qZl9hY3Rpb25zIHx8ICdbXScgKSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggd2l0aEVkaXRQb3N0RWZmZWN0ICkge1xuXHRcdFx0ZWRpdFBvc3QoIHtcblx0XHRcdFx0bWV0YTogKCB7XG5cdFx0XHRcdFx0Li4ubWV0YSxcblx0XHRcdFx0XHRfamZfYWN0aW9uczogSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnMgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0sIFsgYWN0aW9ucyBdICk7XG5cblx0cmV0dXJuIFsgYWN0aW9ucywgc2V0QWN0aW9ucyBdO1xufTtcbmNvbnN0IGluaXRDbGFzc2VzID0gWyAnamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyBdO1xuXG5leHBvcnQgY29uc3QgdXNlU3RhdGVWYWxpZENsYXNzZXMgPSBpbml0aWFsVmFsaWQgPT4ge1xuXHRjb25zdCB2YWxpZENsYXNzID0gJ2lzLXZhbGlkJztcblx0Y29uc3QgaW52YWxpZENsYXNzID0gJ2lzLWludmFsaWQnXG5cblx0Y29uc3QgaW5pdFN0YXRlQ2xhc3NlcyA9ICgpID0+IHtcblx0XHRpZiAoIGluaXRpYWxWYWxpZCApIHtcblx0XHRcdHJldHVybiBbIC4uLmluaXRDbGFzc2VzLCB2YWxpZENsYXNzIF07XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCAhIGluaXRpYWxWYWxpZCApIHtcblx0XHRcdHJldHVybiBbIC4uLmluaXRDbGFzc2VzLCBpbnZhbGlkQ2xhc3MgXTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgWyBjbGFzc2VzLCBzZXRDbGFzc2VzIF0gPSB1c2VTdGF0ZSggaW5pdFN0YXRlQ2xhc3NlcygpICk7XG5cblx0Y29uc3Qgc2V0VmFsaWRDbGFzcyA9ICgpID0+IHtcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCB2YWxpZENsYXNzIF0gKVxuXHR9O1xuXHRjb25zdCBzZXRJbnZhbGlkQ2xhc3MgPSAoKSA9PiB7XG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgaW52YWxpZENsYXNzIF0gKVxuXHR9O1xuXHRjb25zdCBzZXRMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7XG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgJ2xvYWRpbmcnIF0gKVxuXHR9O1xuXG5cdHJldHVybiBbIGNsYXNzZXMuam9pbiggJyAnICksIHNldFZhbGlkQ2xhc3MsIHNldEludmFsaWRDbGFzcywgc2V0TG9hZGluZ0NsYXNzIF07XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzID0gKCkgPT4ge1xuXHRjb25zdCBbIGNsYXNzZXMsIHNldENsYXNzZXMgXSA9IHVzZVN0YXRlKCBbIC4uLmluaXRDbGFzc2VzIF0gKTtcblxuXHRjb25zdCBzZXRMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7XG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgJ2xvYWRpbmcnIF0gKVxuXHR9O1xuXHRjb25zdCBjbGVhckxvYWRpbmdDbGFzcyA9ICgpID0+IHtcblx0XHRzZXRDbGFzc2VzKCBpbml0Q2xhc3NlcyApO1xuXHR9XG5cblx0cmV0dXJuIFsgY2xhc3Nlcy5qb2luKCAnICcgKSwgc2V0TG9hZGluZ0NsYXNzLCBjbGVhckxvYWRpbmdDbGFzcyBdO1xufVxuXG5leHBvcnQgY29uc3QgdXNlU3VjY2Vzc05vdGljZSA9ICggdGV4dCwgb3B0aW9ucyA9IHt9ICkgPT4ge1xuXHRjb25zdCBbIGhhc0NvcGllZCwgc2V0SGFzQ29waWVkIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblx0Y29uc3Qgbm90aWNlU3RvcmUgPSB1c2VEaXNwYXRjaCggd3Aubm90aWNlcy5zdG9yZSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggaGFzQ29waWVkICkge1xuXHRcdFx0bm90aWNlU3RvcmUuY3JlYXRlV2FybmluZ05vdGljZSggdGV4dCwgeyB0eXBlOiAnc25hY2tiYXInLCAuLi5vcHRpb25zIH0gKTtcblx0XHR9XG5cdH0sIFsgaGFzQ29waWVkIF0gKTtcblxuXHRyZXR1cm4gc2V0SGFzQ29waWVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlcXVlc3RGaWVsZHMgPSBhY3Rpb25zID0+IHtcblx0Y29uc3QgcmVxdWVzdEZpZWxkcyA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zICkge1xuXHRcdGNvbnN0IHtcblx0XHRcdFx0ICBbIGFjdGlvbi50eXBlIF06IGN1cnJlbnQgPSB7fSxcblx0XHRcdCAgfSA9IGFjdGlvbi5zZXR0aW5ncztcblxuXHRcdGlmICggISBjdXJyZW50LnJlcXVlc3RGaWVsZHMgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCByZXF1ZXN0RmllbGQgb2YgY3VycmVudC5yZXF1ZXN0RmllbGRzICkge1xuXHRcdFx0Y29uc3QgaW5kZXggPSByZXF1ZXN0RmllbGRzLmZpbmRJbmRleCggZmllbGQgPT4gZmllbGQudmFsdWUgPT09IHJlcXVlc3RGaWVsZC5uYW1lICk7XG5cblx0XHRcdGlmICggLTEgIT09IGluZGV4ICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cmVxdWVzdEZpZWxkcy5wdXNoKCB7XG5cdFx0XHRcdGZyb206IGFjdGlvbi50eXBlLFxuXHRcdFx0XHRpZDogYWN0aW9uLmlkLFxuXHRcdFx0XHRsYWJlbDogcmVxdWVzdEZpZWxkLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiByZXF1ZXN0RmllbGQubmFtZSxcblx0XHRcdFx0bmFtZTogcmVxdWVzdEZpZWxkLm5hbWUsXG5cdFx0XHRcdGhlbHA6IHJlcXVlc3RGaWVsZC5oZWxwLFxuXHRcdFx0fSApXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlcXVlc3RGaWVsZHM7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlUmVxdWVzdEZpZWxkcyA9ICggb3B0aW9ucyA9IHt9ICkgPT4ge1xuXHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XG5cdH0gKTtcblx0Y29uc3QgYWN0aW9ucyA9IEpTT04ucGFyc2UoIG1ldGEuX2pmX2FjdGlvbnMgfHwgJ1tdJyApO1xuXG5cdHJldHVybiBnZXRSZXF1ZXN0RmllbGRzKCBhY3Rpb25zICk7XG59O1xuXG5leHBvcnQgY29uc3Qgd2l0aFJlcXVlc3RGaWVsZHMgPSBzZWxlY3QgPT4ge1xuXHRjb25zdCBtZXRhID0gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XG5cdGNvbnN0IGFjdGlvbnMgPSBKU09OLnBhcnNlKCBtZXRhLl9qZl9hY3Rpb25zIHx8ICdbXScgKTtcblx0Y29uc3QgY3VycmVudEFjdGlvbiA9IHNlbGVjdCggJ2pldC1mb3Jtcy9hY3Rpb25zJyApLmdldEN1cnJlbnRBY3Rpb24oKTtcblxuXHRhY3Rpb25zLnNwbGljZSggY3VycmVudEFjdGlvbi5pbmRleCApO1xuXG5cdHJldHVybiB7IHJlcXVlc3RGaWVsZHM6IGdldFJlcXVlc3RGaWVsZHMoIGFjdGlvbnMgKSB9O1xufTtcbiIsIlxuZnVuY3Rpb24gZ2xvYmFsVGFiKCB7IHNsdWcsIGVsZW1lbnQgPSAnJywgZW1wdHkgPSAnJyB9ICkge1xuXHRjb25zdCBnbG9iYWwgPSBKZXRGb3JtRWRpdG9yRGF0YS5nbG9iYWxfc2V0dGluZ3M7XG5cblx0aWYoICEgZ2xvYmFsICkge1xuXHRcdHJldHVybiBlbXB0eTtcblx0fVxuXG5cdGlmICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gKCBnbG9iYWxbIHNsdWcgXSAmJiBnbG9iYWxbIHNsdWcgXVsgZWxlbWVudCBdICkgPyBnbG9iYWxbIHNsdWcgXVsgZWxlbWVudCBdIDogZW1wdHk7XG5cdH1cblxuXHRyZXR1cm4gZ2xvYmFsWyBzbHVnIF0gfHwgZW1wdHk7XG59XG5cbmV4cG9ydCB7IGdsb2JhbFRhYiB9OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNsYXNzIFRvb2xzIHtcblxuXHRzdGF0aWMgZ2V0TGFiZWwoIG1ldGEsIGF0dHJzICkge1xuXHRcdGNvbnN0IGxhYmVsID0ge307XG5cdFx0bGFiZWwubmFtZSA9IGF0dHJzLmxhYmVsO1xuXHRcdGlmICggYXR0cnMucmVxdWlyZWQgKSB7XG5cdFx0XHRsYWJlbC5tYXJrID0gSlNPTi5wYXJzZSggbWV0YS5famZfYXJncyApLnJlcXVpcmVkX21hcmsgfHwgJyc7XG5cdFx0fVxuXHRcdHJldHVybiBsYWJlbDtcblx0fVxuXG5cdHN0YXRpYyB3aXRoUGxhY2Vob2xkZXIoIHNvdXJjZSwgbGFiZWwgPSAnLS0nLCB2YWx1ZSA9ICcnICkge1xuXHRcdHJldHVybiBbXG5cdFx0XHR7IGxhYmVsLCB2YWx1ZSB9LFxuXHRcdFx0Li4uc291cmNlLFxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgaXNFbXB0eU9iamVjdCggb2JqZWN0ICkge1xuXHRcdHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIG9iamVjdCAmJiBPYmplY3Qua2V5cyggb2JqZWN0ICkubGVuZ3RoID09PSAwO1xuXHR9XG5cblx0c3RhdGljIGdldEZ1bmNDb25kaXRpb24oIG5hbWVGdW5jdGlvbiApIHtcblx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCBgcmV0dXJuIHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnNbICckeyBuYW1lRnVuY3Rpb24gfScgXWAgKTtcblx0fVxuXG5cdHN0YXRpYyBhZGRDb25kaXRpb25Gb3JDb25kVHlwZSggbmFtZSwgY2FsbGFibGUgKSB7XG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9ucyA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnMgfHwge307XG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9uc1sgbmFtZSBdID0gY2FsbGFibGU7XG5cdH1cblxuXHRzdGF0aWMgcGFyc2VDb25kaXRpb25zRnVuYyggc291cmNlICkge1xuXHRcdGNvbnN0IHR5cGVzID0gW107XG5cblx0XHRzb3VyY2UuZm9yRWFjaCggdHlwZSA9PiB7XG5cdFx0XHRpZiAoIHR5cGUuY29uZGl0aW9uICkge1xuXHRcdFx0XHRpZiAoIFRvb2xzLmdldEZ1bmNDb25kaXRpb24oIHR5cGUuY29uZGl0aW9uICkoKSggdHlwZS52YWx1ZSApICkge1xuXHRcdFx0XHRcdHR5cGVzLnB1c2goIHR5cGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHlwZXMucHVzaCggdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0eXBlcztcblxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBldmVudCA9IG5hbWUgPT4ge1xuXHRjb25zdCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgPSBuZXcgRXZlbnQoIG5hbWUgKTtcblx0cmV0dXJuICgpID0+IGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGluaXRpYWxpemVDYWxsYmFja3NFdmVudCApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3RlbiA9ICggbmFtZSwgZnVuYyApID0+IHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZnVuYyApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyc2lvbkNvbXBhcmUoIHZlcnNpb24xLCB2ZXJzaW9uMiwgb3BlcmF0b3IgKSB7XG5cdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiB2ZXJzaW9uMSApIHtcblx0XHR2ZXJzaW9uMSA9ICsoIHZlcnNpb24xLnNwbGl0KCAnLicgKS5qb2luKCAnJyApICk7XG5cdH1cblx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIHZlcnNpb24yICkge1xuXHRcdHZlcnNpb24yID0gKyggdmVyc2lvbjIuc3BsaXQoICcuJyApLmpvaW4oICcnICkgKTtcblx0fVxuXHRpZiAoIDAgPj0gdmVyc2lvbjEgfHwgMCA+PSB2ZXJzaW9uMiApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdJbnZhbGlkIGFyZ3VtZW50czogdmVyc2lvbjEgb3IgdmVyc2lvbjInICk7XG5cdH1cblxuXHRpZiAoIFsgJz4nLCAnPCcsICc9PT0nLCAnPT0nLCAnPj0nLCAnPD0nIF0uaW5jbHVkZXMoIG9wZXJhdG9yICkgKSB7XG5cdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggYHJldHVybiAkeyB2ZXJzaW9uMSB9ICR7IG9wZXJhdG9yIH0gJHsgdmVyc2lvbjIgfWAgKSgpO1xuXHR9XG5cdHRocm93IG5ldyBFcnJvciggJ0ludmFsaWQgYXJndW1lbnRzOiBvcGVyYXRvcicgKTtcbn1cblxuY29uc3QgY29udmVydFN5bWJvbHMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIudG9vbHMuY29udmVydFN5bWJvbHMnLCB7XG5cdGNoZWNrQ3lyUmVnZXg6IC9b0LAt0Y/RkdGX0ZTSkdGWXS9pLFxuXHRjeXJSZWdleDogL1vQsC3Rj9GR0ZfRlNKR0ZZdL2dpLFxuXHRjaGFyc01hcDoge1xuXHRcdCfQsCc6ICdhJywgJ9CxJzogJ2InLCAn0LInOiAndicsICfQsyc6ICdnJywgJ9C0JzogJ2QnLFxuXHRcdCfQtSc6ICdlJywgJ9GRJzogJ2lvJywgJ9C2JzogJ3poJywgJ9C3JzogJ3onLCAn0LgnOiAnaScsXG5cdFx0J9C5JzogJ2knLCAn0LonOiAnaycsICfQuyc6ICdsJywgJ9C8JzogJ20nLCAn0L0nOiAnbicsXG5cdFx0J9C+JzogJ28nLCAn0L8nOiAncCcsICfRgCc6ICdyJywgJ9GBJzogJ3MnLCAn0YInOiAndCcsXG5cdFx0J9GDJzogJ3UnLCAn0YQnOiAnZicsICfRhSc6ICdraCcsICfRhic6ICd0cycsICfRhyc6ICdjaCcsXG5cdFx0J9GIJzogJ3NoJywgJ9GJJzogJ3NoY2gnLCAn0YsnOiAneScsICfRjSc6ICdlJywgJ9GOJzogJ2l1Jyxcblx0XHQn0Y8nOiAnaWEnLCAn0ZcnOiAnaScsICfRlCc6ICdpZScsICfSkSc6ICdnJywgJ9GWJzogJ2knLFxuXHR9LFxufSApO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVDeXJUb0xhdGluKCBzdHIgKSB7XG5cdGlmICggY29udmVydFN5bWJvbHMuY2hlY2tDeXJSZWdleC50ZXN0KCBzdHIgKSApIHtcblx0XHRzdHIgPSBzdHIucmVwbGFjZSggY29udmVydFN5bWJvbHMuY3lyUmVnZXgsIGZ1bmN0aW9uKCBtYXRjaCApIHtcblxuXHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IGNvbnZlcnRTeW1ib2xzLmNoYXJzTWFwWyBtYXRjaCBdICkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjb252ZXJ0U3ltYm9scy5jaGFyc01hcFsgbWF0Y2ggXTtcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udmVydGVkTmFtZSggdmFsdWVUb0NoYW5nZSApIHtcblx0dmFyIHJlZ2V4ID0gL1xccysvZyxcblx0XHRzbHVnICA9IHZhbHVlVG9DaGFuZ2UudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCByZWdleCwgJ18nICk7XG5cblx0Ly8gUmVwbGFjZSBhY2NlbnRzXG5cdHNsdWcgPSBzbHVnLm5vcm1hbGl6ZSggJ05GRCcgKS5yZXBsYWNlKCAvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIiApO1xuXG5cdC8vIFJlcGxhY2UgY3lyaWxsaWNcblx0c2x1ZyA9IG1heWJlQ3lyVG9MYXRpbiggc2x1ZyApO1xuXG5cdGlmICggMjAgPCBzbHVnLmxlbmd0aCApIHtcblx0XHQvLyAzNCAtIExpb25lbCBNZXNzaSdzIGFnZSB3aGVuIGhlIGxlZnQgQmFyY2Vsb25hXG5cdFx0c2x1ZyA9IHNsdWcuc3Vic3RyKCAwLCAzNCApO1xuXG5cdFx0aWYgKCAnLScgPT09IHNsdWcuc2xpY2UoIC0xICkgKSB7XG5cdFx0XHRzbHVnID0gc2x1Zy5zbGljZSggMCwgLTEgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc2x1Zztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzbmFtZXMoIC4uLmFkZGl0aW9uYWwgKSB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdXG5cblx0Y29uc3QgcGFyc2VWYWx1ZXMgPSBzb3VyY2UgPT4ge1xuXHRcdHNvdXJjZS5mb3JFYWNoKCBpdGVtQ2xhc3MgPT4ge1xuXHRcdFx0aWYgKCAhIGl0ZW1DbGFzcyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpdGVtQ2xhc3MgKSApIHtcblx0XHRcdFx0cGFyc2VWYWx1ZXMoIGl0ZW1DbGFzcyApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGl0ZW1DbGFzcyApIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goIGl0ZW1DbGFzcy50cmltKCkgKVxuXHRcdFx0fVxuXHRcdFx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIGl0ZW1DbGFzcyApIHtcblx0XHRcdFx0Zm9yICggY29uc3QgaXRlbUNsYXNzS2V5IGluIGl0ZW1DbGFzcyApIHtcblx0XHRcdFx0XHRpZiAoIGl0ZW1DbGFzc1sgaXRlbUNsYXNzS2V5IF0gKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaCggKGl0ZW1DbGFzc0tleSArIFwiXCIpLnRyaW0oKSApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApXG5cdH07XG5cblx0cGFyc2VWYWx1ZXMoIGFkZGl0aW9uYWwgKTtcblx0XG5cdHJldHVybiByZXN1bHQuam9pbiggJyAnICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xzOyIsImNvbnN0IHsgY3JlYXRlUmVkdXhTdG9yZSwgcmVnaXN0ZXIgfSA9IHdwLmRhdGE7XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XG5cdGN1cnJlbnRBY3Rpb246IHt9LFxufTtcblxuY29uc3QgYWN0aW9ucyA9IHtcblx0c2V0Q3VycmVudEFjdGlvbiggaXRlbSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9DVVJSRU5UX0FDVElPTicsXG5cdFx0XHRpdGVtLFxuXHRcdH07XG5cdH0sXG59O1xuXG5jb25zdCBzZWxlY3RvcnMgPSB7XG5cdGdldEN1cnJlbnRBY3Rpb24oIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50QWN0aW9uO1xuXHR9LFxufTtcblxucmVnaXN0ZXIoIGNyZWF0ZVJlZHV4U3RvcmUoICdqZXQtZm9ybXMvYWN0aW9ucycsIHtcblx0cmVkdWNlciggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XG5cdFx0c3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XG5cdFx0XHRjYXNlICdTRVRfQ1VSUkVOVF9BQ1RJT04nOlxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdGN1cnJlbnRBY3Rpb246IGFjdGlvbi5pdGVtLFxuXHRcdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9ycyxcbn0gKSApOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWN0aW9uRmllbGRzTWFwIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXBcIjtcbmltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbi1tb2RhbFwiO1xuaW1wb3J0IFdyYXBwZXJSZXF1aXJlZENvbnRyb2wgZnJvbSBcIi4vY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2xcIjtcbmltcG9ydCBSZXF1ZXN0QnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVxdWVzdC1idXR0b25cIjtcbmltcG9ydCBWYWxpZGF0ZUJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL3ZhbGlkYXRlLWJ1dHRvblwiO1xuaW1wb3J0IGFkZEFjdGlvbiBmcm9tIFwiLi9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLW1hbmFnZXJcIjtcbmltcG9ydCBUb29scywge1xuXHRjbGFzc25hbWVzLFxuXHRldmVudCxcblx0Z2V0Q29udmVydGVkTmFtZSxcblx0bGlzdGVuLFxuXHRtYXliZUN5clRvTGF0aW4sXG5cdHZlcnNpb25Db21wYXJlLFxufSBmcm9tIFwiLi9oZWxwZXJzL3Rvb2xzXCI7XG5pbXBvcnQgRHluYW1pY1ByZXNldCBmcm9tIFwiLi9jb21wb25lbnRzL3ByZXNldHMvZHluYW1pYy1wcmVzZXRcIjtcbmltcG9ydCBKZXRGaWVsZHNNYXBDb250cm9sIGZyb20gXCIuLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXBcIjtcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvZmllbGQtd2l0aC1wcmVzZXRcIjtcbmltcG9ydCB7XG5cdEdsb2JhbEZpZWxkLFxuXHRBdmFpbGFibGVNYXBGaWVsZCxcblx0TWFwRmllbGQsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtcmVuZGVyXCI7XG5cbmltcG9ydCB7XG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcblx0Z2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nLFxuXHRnZXRCbG9ja3NCeU5hbWUsXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxuXHRnZXRGb3JtRmllbGRzQnlCbG9jayxcblx0Z2V0SW5uZXJCbG9ja3MsXG59IGZyb20gXCIuL2hlbHBlcnMvYmxvY2tzL2Jsb2Nrcy1oZWxwZXJcIjtcbmltcG9ydCB7XG5cdGdhdGV3YXlBdHRyLFxuXHRnYXRld2F5TGFiZWwsXG5cdHJlZ2lzdGVyR2F0ZXdheSxcblx0cmVuZGVyR2F0ZXdheSxcbn0gZnJvbSBcIi4vaGVscGVycy9nYXRld2F5cy9nYXRld2F5LWhlbHBlclwiO1xuaW1wb3J0IHtcblx0dXNlQWN0aW9ucyxcblx0dXNlTWV0YVN0YXRlLFxuXHR1c2VTdGF0ZVZhbGlkQ2xhc3Nlcyxcblx0dXNlU3RhdGVMb2FkaW5nQ2xhc3Nlcyxcblx0dXNlU3VjY2Vzc05vdGljZSxcblx0dXNlUmVxdWVzdEZpZWxkcyxcblx0d2l0aFJlcXVlc3RGaWVsZHMsXG59IGZyb20gXCIuL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyXCI7XG5pbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdyYXBwZXJcIjtcbmltcG9ydCBNYWNyb3NJbnNlcnRlciBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9tYWNyb3MtaW5zZXJ0ZXJcIjtcbmltcG9ydCBSZXBlYXRlcldpdGhTdGF0ZSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9yZXBlYXRlci13aXRoLXN0YXRlXCI7XG5pbXBvcnQgd2l0aFByZXNldCBmcm9tIFwiLi9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvclwiO1xuaW1wb3J0IHtcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEdlbmVyYWxGaWVsZHMsXG5cdFRvb2xCYXJGaWVsZHMsXG5cdEZpZWxkQ29udHJvbCxcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvZmllbGQtY29udHJvbFwiO1xuaW1wb3J0IFBsYWNlaG9sZGVyTWVzc2FnZSBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZVwiO1xuaW1wb3J0IEFjdGlvbk1lc3NhZ2VzIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbWVzc2FnZXNcIjtcbmltcG9ydCBIb3Jpem9udGFsTGluZSBmcm9tIFwiLi9jb21wb25lbnRzL2hvcml6b250YWwtbGluZVwiO1xuaW1wb3J0IFJlcXVlc3RMb2FkaW5nQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVxdWVzdC1sb2FkaW5nLWJ1dHRvblwiO1xuaW1wb3J0IHtcblx0YWN0aW9uQnlUeXBlTGlzdCxcblx0Y29udmVydExpc3RUb0ZpZWxkc01hcCxcblx0ZnJvbUxvY2FsaXplSGVscGVyLFxuXHRnZXRBY3Rpb25TZXR0aW5ncyxcbn0gZnJvbSBcIi4vaGVscGVycy9hY3Rpb25zL2FjdGlvbi1oZWxwZXJcIjtcbmltcG9ydCBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyBmcm9tIFwiLi9oZWxwZXJzL2dhdGV3YXlzL2dhdGV3YXktYWN0aW9uLWF0dHJ1Yml0ZXNcIjtcbmltcG9ydCB7IGdsb2JhbFRhYiB9IGZyb20gXCIuL2hlbHBlcnMvc2V0dGluZ3MvaGVscGVyXCI7XG5pbXBvcnQgRmllbGRTZXR0aW5nc1dyYXBwZXIgZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC1zZXR0aW5ncy13cmFwcGVyJztcbmltcG9ydCBHcm91cGVkU2VsZWN0Q29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvZ3JvdXBlZC1zZWxlY3QtY29udHJvbCc7XG5pbXBvcnQge1xuXHRnZXRCbG9ja0NvbnRyb2xzLFxufSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGRzL2NvbnRyb2xzJztcbmltcG9ydCBCYXNlSGVscCBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbHMvYmFzZS1oZWxwJztcbmltcG9ydCAnLi9zdG9yZXMvYWN0aW9uLXN0b3JlJztcblxuLy8gSkZCQ29tcG9uZW50c1xud2luZG93LkpldEZCQ29tcG9uZW50cyA9IHtcblx0QWN0aW9uRmllbGRzTWFwLFxuXHRBY3Rpb25Nb2RhbCxcblx0UmVxdWVzdEJ1dHRvbixcblx0VmFsaWRhdGVCdXR0b24sXG5cdFJlcXVlc3RMb2FkaW5nQnV0dG9uLFxuXHRXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxuXHREeW5hbWljUHJlc2V0LFxuXHRKZXRGaWVsZHNNYXBDb250cm9sLFxuXHRGaWVsZFdpdGhQcmVzZXQsXG5cdEdsb2JhbEZpZWxkLFxuXHRBdmFpbGFibGVNYXBGaWVsZCxcblx0TWFwRmllbGQsXG5cdEZpZWxkV3JhcHBlcixcblx0TWFjcm9zSW5zZXJ0ZXIsXG5cdFJlcGVhdGVyV2l0aFN0YXRlLFxuXHRBZHZhbmNlZEZpZWxkcyxcblx0R2VuZXJhbEZpZWxkcyxcblx0VG9vbEJhckZpZWxkcyxcblx0RmllbGRDb250cm9sLFxuXHRQbGFjZWhvbGRlck1lc3NhZ2UsXG5cdEhvcml6b250YWxMaW5lLFxuXHRGaWVsZFNldHRpbmdzV3JhcHBlcixcblx0QWN0aW9uTWVzc2FnZXMsXG5cdEdyb3VwZWRTZWxlY3RDb250cm9sLFxuXHRCYXNlSGVscCxcbn07XG5cbi8vIEpGQkZ1bmN0aW9uc1xud2luZG93LkpldEZCQWN0aW9ucyA9IHtcblx0YWRkQWN0aW9uLFxuXHR3aXRoUHJlc2V0LFxuXHRnZXRGb3JtRmllbGRzQnlCbG9jayxcblx0Z2V0SW5uZXJCbG9ja3MsXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcblx0Z2V0QXZhaWxhYmxlRmllbGRzLFxuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcblx0Z2F0ZXdheUF0dHIsXG5cdGdhdGV3YXlMYWJlbCxcblx0cmVnaXN0ZXJHYXRld2F5LFxuXHRUb29scyxcblx0ZXZlbnQsXG5cdGxpc3Rlbixcblx0YWN0aW9uQnlUeXBlTGlzdCxcblx0Z2V0QWN0aW9uU2V0dGluZ3MsXG5cdGZyb21Mb2NhbGl6ZUhlbHBlcixcblx0cmVuZGVyR2F0ZXdheSxcblx0Z2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMsXG5cdGdsb2JhbFRhYixcblx0dmVyc2lvbkNvbXBhcmUsXG5cdGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAsXG5cdG1heWJlQ3lyVG9MYXRpbixcblx0Z2V0Q29udmVydGVkTmFtZSxcblx0Z2V0QmxvY2tDb250cm9scyxcblx0Y2xhc3NuYW1lcyxcblx0Z2V0QmxvY2tzQnlOYW1lLFxufTtcblxuLy8gSkZCSG9va3NcbndpbmRvdy5KZXRGQkhvb2tzID0ge1xuXHR1c2VBY3Rpb25zLFxuXHR1c2VNZXRhU3RhdGUsXG5cdHVzZVN0YXRlVmFsaWRDbGFzc2VzLFxuXHR1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzLFxuXHR1c2VTdWNjZXNzTm90aWNlLFxuXHR3aXRoUmVxdWVzdEZpZWxkcyxcblx0dXNlUmVxdWVzdEZpZWxkcyxcbn07XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBYkE7QUFnQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBRUE7QUFDQTs7OztBQXBKQTtBQUNBO0FBcUpBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLQTtBQUlBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFJQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBT0E7QUFBQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFEQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBbkJBO0FBMEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQWJBO0FBb0JBO0FBQ0E7QUFDQTtBQUhBO0FBdENBO0FBcENBO0FBQUE7QUFtRkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUtBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBRkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBREE7QUF6RUE7QUFnRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBR0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUtBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBZ0JBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBR0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVdBO0FBREE7QUFJQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBaEVBO0FBMkVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQzNTQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBVUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQXZCQTtBQUNBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBUkE7QUFDQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVhBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFYQTtBQXBEQTtBQW1FQTtBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQTFEQTtBQUNBO0FBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ3JSQTtBQUVBO0FBQ0E7QUFHQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFFQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFZQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQWhCQTtBQUNBO0FBUUE7QUFBQTtBQUNBO0FBREE7QUFlQTtBQXhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJBO0FBNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTZCQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBQUE7QUFBQTtBQUNBO0FBdUJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUMvSkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QTs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVNBO0FBTUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBQ0E7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUFDQTtBQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==