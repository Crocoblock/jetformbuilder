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
    SVG = _wp$components.SVG;
var useState = wp.element.useState;

function FieldWithPreset(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      ModalEditor = _ref.ModalEditor,
      _ref$triggerClasses = _ref.triggerClasses,
      triggerClasses = _ref$triggerClasses === void 0 ? [] : _ref$triggerClasses;

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
  return wp.element.createElement(React.Fragment, null, wp.element.createElement("div", {
    className: "jet-form-dynamic-preset"
  }, children, wp.element.createElement("div", {
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

var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Popover = _wp$components.Popover;
var withSelect = wp.data.withSelect;
var RichText = wp.blockEditor.RichText;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;

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
    return wp.element.createElement(BaseControl.VisualLabel, null, wp.element.createElement("div", {
      onBlur: setDynamicName
    }, wp.element.createElement(RichText, {
      isSelected: true,
      className: "jet-form-builder__label",
      placeholder: "Field Label...",
      allowedFormats: [],
      value: attributes.label ? attributes.label : valueIfEmptyLabel,
      onChange: function onChange(newLabel) {
        return setAttributes({
          label: newLabel
        });
      }
    }), isSelected && wp.element.createElement(Popover, {
      position: "middle right",
      noArrow: false
    }, wp.element.createElement("div", {
      style: {
        padding: '0.3em 0.5em',
        whiteSpace: 'nowrap'
      }
    }, __('Input Label', 'jet-form-builder')))), attributes.required && wp.element.createElement("span", {
      className: 'jet-form-builder__required'
    }, _jf_args.required_mark ? _jf_args.required_mark : '*'));
  }

  function renderDescription() {
    return wp.element.createElement(BaseControl, {
      key: 'custom_help_description',
      className: 'jet-form-builder__desc'
    }, wp.element.createElement("div", {
      className: "components-base-control__help"
    }, wp.element.createElement(RichText, {
      isSelected: true,
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
    }), isSelected && wp.element.createElement(Popover, {
      position: "bottom center",
      noArrow: false
    }, wp.element.createElement("div", {
      style: {
        padding: '0.3em 0.5em',
        whiteSpace: 'nowrap'
      }
    }, __('Input Description', 'jet-form-builder')))));
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
    ToggleControl = _wp$components.ToggleControl;
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
      var cloneItems = _toConsumableArray(items);

      cloneItems.forEach(function (item) {
        item.__visible = false;
      });
      return cloneItems;
    } else {
      return [_objectSpread(_objectSpread({}, newItem), {}, {
        __visible: true
      })];
    }
  };

  var _useState = useState(function () {
    return parsedItems();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      itemsData = _useState2[0],
      setItemsData = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isSafeDeleting = _useState4[0],
      setSafeDeleting = _useState4[1];

  var _changeCurrentItem = function changeCurrentItem(valueToSet, index) {
    setItemsData(function (prev) {
      prev[index] = _objectSpread(_objectSpread({}, prev[index]), valueToSet);
      return _toConsumableArray(prev);
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
      var clonePrev = _toConsumableArray(prev);

      clonePrev.splice(index, 1);
      return clonePrev;
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
      var _ref2 = [prev.slice(0, index + 1), prev.slice(index + 1)],
          before = _ref2[0],
          after = _ref2[1];
      return [].concat(_toConsumableArray(before), [lodash.assign({}, prev[index])], _toConsumableArray(after));
    });
  };

  var moveRepeaterItem = function moveRepeaterItem(_ref3) {
    var oldIndex = _ref3.oldIndex,
        newIndex = _ref3.newIndex;
    setItemsData(function (prev) {
      var _ref4 = [prev[oldIndex], prev[newIndex]];
      prev[newIndex] = _ref4[0];
      prev[oldIndex] = _ref4[1];
      return _toConsumableArray(prev);
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
      prev[index].__visible = !prev[index].__visible;
      return _toConsumableArray(prev);
    });
  };

  useEffect(function () {
    if (true === isSaveAction) {
      var cloneItems = _toConsumableArray(itemsData);

      if (onSaveItems) {
        cloneItems.forEach(function (item, index) {
          for (var itemKey in item) {
            if (itemKey.startsWith('__')) {
              delete cloneItems[index][itemKey];
            }
          }
        });
        onSaveItems(cloneItems);
      }

      onUnMount();
    } else if (false === isSaveAction) {
      onUnMount();
    }
  }, [isSaveAction]);

  var getRepeaterItemId = function getRepeaterItemId(index) {
    return "jet-form-builder-repeater__item_".concat(index);
  };

  var RepeaterItem = function RepeaterItem(_ref5) {
    var currentItem = _ref5.currentItem,
        index = _ref5.index;
    return wp.element.createElement(Card, {
      isElevated: true,
      className: itemClassNames,
      key: getRepeaterItemId(index),
      id: getRepeaterItemId(index)
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
  };

  var helpSource = help.helpSource,
      helpVisible = help.helpVisible,
      helpKey = help.helpKey;
  var isVisibleHelp = helpVisible(itemsData) && helpSource && helpSource[helpKey];
  return wp.element.createElement("div", {
    className: classNames,
    key: 'jet-form-builder-repeater'
  }, isVisibleHelp && wp.element.createElement("p", null, helpSource[helpKey].label), 0 < itemsData.length && wp.element.createElement(ToggleControl, {
    label: __('Safe deleting'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  }), itemsData.map(function (currentItem, index) {
    return RepeaterItem({
      currentItem: currentItem,
      index: index
    });
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
        return isMapFieldVisible(value, data, field) && wp.element.createElement(AvailableFieldWrapper, _extends({}, props, {
          key: uniqKey
        }), wp.element.createElement(TextControl, {
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
          onChange: function onChange(_ref4) {
            var selectedItem = _ref4.selectedItem;
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

function MapField(_ref5) {
  var data = _ref5.data,
      value = _ref5.value,
      index = _ref5.index,
      currentState = _ref5.currentState,
      onChangeValue = _ref5.onChangeValue,
      isCurrentFieldVisible = _ref5.isCurrentFieldVisible,
      _ref5$position = _ref5.position,
      position = _ref5$position === void 0 ? 'general' : _ref5$position;

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
        onChange: function onChange(_ref6) {
          var selectedItem = _ref6.selectedItem;
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
  GroupedSelectControl: _components_grouped_select_control__WEBPACK_IMPORTED_MODULE_27__.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZmllbGRzLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbi1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXNldHRpbmdzLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC13aXRoLXByZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9tYWNyb3MtaW5zZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9yZXBlYXRlci13aXRoLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9ncm91cGVkLXNlbGVjdC1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9ob3Jpem9udGFsLWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3ByZXNldHMvZHluYW1pYy1wcmVzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9yZXF1ZXN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcmVxdWVzdC1sb2FkaW5nLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvdmFsaWRhdGUtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24td3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYmxvY2tzL2Jsb2Nrcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2dhdGV3YXlzL2dhdGV3YXktYWN0aW9uLWF0dHJ1Yml0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2dhdGV3YXlzL2dhdGV3YXktaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL3NldHRpbmdzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9tYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUZXh0Q29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcblxyXG5jbGFzcyBKZXRGaWVsZHNNYXBDb250cm9sIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZpZWxkVHlwZXMgPSB0aGlzLnByb3BzLmZpZWxkVHlwZXM7XHJcblx0XHR0aGlzLnRheG9ub21pZXNMaXN0ID0gdGhpcy5wcm9wcy50YXhvbm9taWVzTGlzdDtcclxuXHRcdHRoaXMuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XHJcblx0XHR0aGlzLm1ldGFQcm9wID0gdGhpcy5wcm9wcy5tZXRhUHJvcCA/IHRoaXMucHJvcHMubWV0YVByb3AgOiAncG9zdF9tZXRhJztcclxuXHRcdHRoaXMudGVybXNQcm9wID0gdGhpcy5wcm9wcy50ZXJtc1Byb3AgPyB0aGlzLnByb3BzLnRlcm1zUHJvcCA6ICdwb3N0X3Rlcm1zJztcclxuXHRcdHRoaXMuaW5kZXggPSB0aGlzLnByb3BzLmluZGV4O1xyXG5cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5iaW5kRnVuY3Rpb25zKCk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dHlwZTogdGhpcy5nZXRGaWVsZFR5cGUoIHRoaXMucHJvcHMuZmllbGRWYWx1ZSApLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGJpbmRGdW5jdGlvbnMoKSB7XHJcblx0XHR0aGlzLm9uQ2hhbmdlVHlwZSA9IHRoaXMub25DaGFuZ2VUeXBlLmJpbmQoIHRoaXMgKTtcclxuXHRcdHRoaXMub25DaGFuZ2VWYWx1ZSA9IHRoaXMub25DaGFuZ2VWYWx1ZS5iaW5kKCB0aGlzICk7XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuaWQgPSBgaW5zcGVjdG9yLXNlbGVjdC1jb250cm9sLSR7IHRoaXMuaW5kZXggfWA7XHJcblx0XHR0aGlzLnByZXBhcmVkVGF4ZXMgPSBbXTtcclxuXHRcdHRoaXMudGF4UHJlZml4ID0gJ2pldF90YXhfXyc7XHJcblxyXG5cdFx0aWYgKCAhIHRoaXMudGF4b25vbWllc0xpc3QgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLnRheG9ub21pZXNMaXN0Lmxlbmd0aDsgaSArKyApIHtcclxuXHRcdFx0dGhpcy5wcmVwYXJlZFRheGVzLnB1c2goIHtcclxuXHRcdFx0XHR2YWx1ZTogdGhpcy50YXhQcmVmaXggKyB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0udmFsdWUsXHJcblx0XHRcdFx0bGFiZWw6IHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS5sYWJlbCxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0RmllbGROYW1lKCB2YWx1ZSApIHtcclxuXHJcblx0XHRpZiAoICEgdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBmaWVsZFR5cGUgPSB0aGlzLmdldEZpZWxkVHlwZSggdmFsdWUgKTtcclxuXHJcblx0XHRpZiAoIHRoaXMudGVybXNQcm9wID09PSBmaWVsZFR5cGUgfHwgdGhpcy5tZXRhUHJvcCA9PT0gZmllbGRUeXBlICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRpc1Rlcm1Pck1ldGEoIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuICggdGhpcy50ZXJtc1Byb3AgPT09IHZhbHVlIHx8IHRoaXMubWV0YVByb3AgPT09IHZhbHVlICk7XHJcblx0fVxyXG5cclxuXHJcblx0Z2V0RmllbGRUeXBlKCB2YWx1ZSApIHtcclxuXHJcblx0XHRpZiAoICEgdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkVHlwZXMubGVuZ3RoOyBpICsrICkge1xyXG5cdFx0XHRpZiAoIHZhbHVlID09PSB0aGlzLmZpZWxkVHlwZXNbIGkgXS52YWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHZhbHVlLmluY2x1ZGVzKCB0aGlzLnRheFByZWZpeCApICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50ZXJtc1Byb3A7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubWV0YVByb3A7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSApIHtcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5maWVsZHNNYXAsXHJcblx0XHRcdFsgdGhpcy5wcm9wcy5maWVsZE5hbWUgXTogbmV3VmFsdWVcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHJcblx0b25DaGFuZ2VUeXBlKCBuZXdWYWx1ZSApIHtcclxuXHRcdGxldCB2YWwgPSB0aGlzLmdldEZpZWxkVHlwZSggbmV3VmFsdWUgKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKCB7XHJcblx0XHRcdHR5cGU6IHZhbFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGlmICggdGhpcy5pc1Rlcm1Pck1ldGEoIHZhbCApICkge1xyXG5cdFx0XHR2YWwgPSAnJztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHZhbCApO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIERpc2FibGUgcmVhc29uOiBBIHNlbGVjdCB3aXRoIGFuIG9uY2hhbmdlIHRocm93cyBhIHdhcm5pbmdcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9fcm93XCJcclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtcG9zdC1maWVsZC1jb250cm9sXCI+XHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF90eXBlXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyB0aGlzLnByb3BzLmZpZWxkTmFtZSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuc3RhdGUudHlwZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VUeXBlIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZpZWxkVHlwZXMgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTYwcHgnXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgKCB0aGlzLm1ldGFQcm9wID09PSB0aGlzLnN0YXRlLnR5cGUgKSAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF9uYW1lXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnByb3BzLmZpZWxkVmFsdWUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnMjAwcHgnIH0gfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0XHR7ICggdGhpcy50ZXJtc1Byb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLXdpdGhvdXQtbGFiZWwnXHJcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfdGF4XycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnByb3BzLmZpZWxkVmFsdWUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMucHJlcGFyZWRUYXhlcyB9XHJcblx0XHRcdFx0XHRzdHlsZT17IHsgd2lkdGg6ICcyMDBweCcgfSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSmV0RmllbGRzTWFwQ29udHJvbDsiLCJjb25zdCB7XHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25GaWVsZHNNYXAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBmaWVsZHMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBsYWJlbCA9ICdbRW1wdHkgbGFiZWxdJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBjaGlsZHJlbiA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHBsYWluSGVscCA9ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGN1c3RvbUhlbHAgPSBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgfSApIHtcclxuXHJcblx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRrZXk9J2pldF9maWVsZHNfbWFwJ1xyXG5cdD5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0eyAoIGN1c3RvbUhlbHAgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1c3RvbUhlbHAgKSAmJiBjdXN0b21IZWxwKCkgfVxyXG5cclxuXHRcdFx0eyBCb29sZWFuKCBwbGFpbkhlbHAubGVuZ3RoICkgJiYgPHNwYW5cclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnZGVzY3JpcHRpb24tY29udHJvbHMnIH1cclxuXHRcdFx0PnsgcGxhaW5IZWxwIH08L3NwYW4+IH1cclxuXHJcblx0XHRcdHsgZmllbGRzLm1hcCggKCBbIGZpZWxkSWQsIGZpZWxkRGF0YSBdLCBpbmRleCApID0+IDxSZWFjdC5GcmFnbWVudFxyXG5cdFx0XHRcdGtleT17IGBmaWVsZF9pbl9tYXBfJHsgZmllbGRJZCArIGluZGV4IH1gIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4oIHsgZmllbGRJZCwgZmllbGREYXRhLCBpbmRleCB9ICkgfVxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiApIH1cclxuXHRcdDwvZGl2PlxyXG5cdDwvQmFzZUNvbnRyb2w+XHJcbn07XHJcblxyXG4iLCJjb25zdCB7XHJcblx0XHQgIEJ1dHRvbixcclxuXHRcdCAgQnV0dG9uR3JvdXAsXHJcblx0XHQgIE1vZGFsLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdFx0ICB1c2VFZmZlY3QsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIEFjdGlvbk1vZGFsKCB7XHJcblx0XHRcdFx0XHRcdCAgb25SZXF1ZXN0Q2xvc2UsXHJcblx0XHRcdFx0XHRcdCAgY2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdCAgdGl0bGUsXHJcblx0XHRcdFx0XHRcdCAgY2xhc3NOYW1lcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHQgIG9uVXBkYXRlQ2xpY2ssXHJcblx0XHRcdFx0XHRcdCAgb25DYW5jZWxDbGljayxcclxuXHRcdFx0XHRcdFx0ICB1cGRhdGVCdG5MYWJlbCA9ICdVcGRhdGUnLFxyXG5cdFx0XHRcdFx0XHQgIHVwZGF0ZUJ0blByb3BzID0ge30sXHJcblx0XHRcdFx0XHRcdCAgY2FuY2VsQnRuUHJvcHMgPSB7fSxcclxuXHRcdFx0XHRcdFx0ICBjYW5jZWxCdG5MYWJlbCA9ICdDYW5jZWwnLFxyXG5cdFx0XHRcdFx0XHQgIGZpeGVkSGVpZ2h0ID0gJycsXHJcblx0XHRcdFx0XHQgIH0gKSB7XHJcblxyXG5cdGNvbnN0IG1vZGFsQ2xhc3NlcyA9IFsgJ2pldC1mb3JtLWVkaXQtbW9kYWwnLCAuLi5jbGFzc05hbWVzIF07XHJcblxyXG5cdGNvbnN0IFsgYWN0aW9uQ2xpY2ssIHNldEFjdGlvbkNsaWNrIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuXHRjb25zdCB1cGRhdGVDbGljayA9ICgpID0+IHtcclxuXHRcdGlmICggb25VcGRhdGVDbGljayApIHtcclxuXHRcdFx0b25VcGRhdGVDbGljaygpO1xyXG5cdFx0fVxyXG5cdFx0c2V0QWN0aW9uQ2xpY2soIHRydWUgKVxyXG5cdH1cclxuXHRjb25zdCBjYW5jZWxDbGljayA9ICgpID0+IHtcclxuXHRcdGlmICggb25DYW5jZWxDbGljayApIHtcclxuXHRcdFx0b25DYW5jZWxDbGljaygpO1xyXG5cdFx0fVxyXG5cdFx0c2V0QWN0aW9uQ2xpY2soIGZhbHNlICk7XHJcblx0fVxyXG5cclxuXHRsZXQgc3R5bGUgPSB7fVxyXG5cdGlmICggZml4ZWRIZWlnaHQgKSB7XHJcblx0XHRzdHlsZSA9IHsgaGVpZ2h0OiBmaXhlZEhlaWdodCB9O1xyXG5cdFx0bW9kYWxDbGFzc2VzLnB1c2goICdqZXQtbW9kYWwtZml4ZWQtaGVpZ2h0JyApXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPE1vZGFsXHJcblx0XHRvblJlcXVlc3RDbG9zZT17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdGNsYXNzTmFtZT17IG1vZGFsQ2xhc3Nlcy5qb2luKCAnICcgKSB9XHJcblx0XHR0aXRsZT17IHRpdGxlIH1cclxuXHRcdHN0eWxlPXsgc3R5bGUgfVxyXG5cdD5cclxuXHRcdHsgISBjaGlsZHJlbiAmJiA8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2NvbnRlbnRcIlxyXG5cdFx0PlxyXG5cdFx0XHR7ICdBY3Rpb24gY2FsbGJhY2sgaXMgbm90IGZvdW5kLicgfVxyXG5cdFx0PC9kaXY+IH1cclxuXHRcdHsgY2hpbGRyZW4gJiYgPGRpdiBjbGFzc05hbWU9J2pldC1mb3JtLWVkaXQtbW9kYWxfX3dyYXBwZXInPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbiggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApIH1cclxuXHRcdFx0XHR7ICdmdW5jdGlvbicgIT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8QnV0dG9uR3JvdXBcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19hY3Rpb25zXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0b25DbGljaz17IHVwZGF0ZUNsaWNrIH1cclxuXHRcdFx0XHRcdHsgLi4udXBkYXRlQnRuUHJvcHMgfVxyXG5cdFx0XHRcdD57IHVwZGF0ZUJ0bkxhYmVsIH08L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogJzAgMCAwIDEwcHgnLFxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgY2FuY2VsQ2xpY2sgfVxyXG5cdFx0XHRcdFx0eyAuLi5jYW5jZWxCdG5Qcm9wcyB9XHJcblx0XHRcdFx0PnsgY2FuY2VsQnRuTGFiZWwgfTwvQnV0dG9uPlxyXG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0PC9kaXY+IH1cclxuXHQ8L01vZGFsPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTW9kYWw7IiwiY29uc3Qge1xyXG5cdFx0ICBUZXh0Q29udHJvbCxcclxuXHRcdCAgQmFzZUNvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIEFjdGlvbk1lc3NhZ2VzKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIHNldHRpbmdzLFxyXG5cdFx0XHQgIHNvdXJjZSxcclxuXHRcdFx0ICBnZXRNYXBGaWVsZCxcclxuXHRcdFx0ICBzZXRNYXBGaWVsZCxcclxuXHRcdFx0ICBtZXNzYWdlcyxcclxuXHRcdFx0ICBvbkNoYW5nZVNldHRpbmcsXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoICEgc2V0dGluZ3MgfHwgISBzZXR0aW5ncy5tZXNzYWdlcyApIHtcclxuXHRcdFx0Y29uc3QgbWVzc2FnZXMgPSB7fTtcclxuXHJcblx0XHRcdE9iamVjdC5lbnRyaWVzKCBzb3VyY2UuX19tZXNzYWdlcyApLmZvckVhY2goICggWyB0eXBlLCBkYXRhIF0gKSA9PiB7XHJcblx0XHRcdFx0bWVzc2FnZXNbIHR5cGUgXSA9IGRhdGEudmFsdWU7XHJcblx0XHRcdH0gKVxyXG5cclxuXHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBtZXNzYWdlcywgJ21lc3NhZ2VzJyApO1xyXG5cdFx0fVxyXG5cdH0sIFtdICk7XHJcblxyXG5cdGNvbnN0IHNldE1lc3NhZ2UgPSAoIHZhbHVlLCBuYW1lRmllbGQgKSA9PiB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSAnbWVzc2FnZXMnO1xyXG5cclxuXHRcdHNldE1hcEZpZWxkKCB7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9ICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0TWVzc2FnZSA9IG5hbWUgPT4ge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gJ21lc3NhZ2VzJztcclxuXHJcblx0XHRyZXR1cm4gZ2V0TWFwRmllbGQoIHsgbmFtZSwgc291cmNlIH0gKVxyXG5cdH07XHJcblxyXG5cdHJldHVybiA8QmFzZUNvbnRyb2xcclxuXHRcdGxhYmVsPXsgX18oICdNZXNzYWdlcyBTZXR0aW5nczonICkgfVxyXG5cdFx0a2V5PSdtZXNzYWdlc19zZXR0aW5nc19maWVsZHMnXHJcblx0PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxyXG5cdFx0XHR7IHNldHRpbmdzLm1lc3NhZ2VzICYmIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5tZXNzYWdlcyApXHJcblx0XHRcdFx0Lm1hcCggKCBbIHR5cGUsIGRhdGEgXSwgaWQgKSA9PiA8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXHJcblx0XHRcdFx0XHRcdGtleT17ICdtZXNzYWdlXycgKyB0eXBlICsgaWQgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyB0eXBlICsgaWQgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgbWVzc2FnZXMoIHR5cGUgKS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBnZXRNZXNzYWdlKCB0eXBlICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0TWVzc2FnZSggbmV3VmFsdWUsIHR5cGUgKSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj4sXHJcblx0XHRcdFx0KSB9XHJcblxyXG5cdFx0PC9kaXY+XHJcblx0PC9CYXNlQ29udHJvbD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1lc3NhZ2VzOyIsImZ1bmN0aW9uIFBsYWNlaG9sZGVyTWVzc2FnZSggeyBzdHlsZSwgY2hpbGRyZW4gfSApIHtcclxuXHRjb25zdCBwcm9wU3R5bGUgPSB7XHJcblx0XHRmb250U2l6ZTogJzEuNWVtJyxcclxuXHRcdHBhZGRpbmc6ICcyZW0nLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2FsaWNlYmx1ZScsXHJcblx0XHQuLi5zdHlsZVxyXG5cdH07XHJcblxyXG5cdHJldHVybiA8cCBzdHlsZT17IHByb3BTdHlsZSB9PnsgY2hpbGRyZW4gfTwvcD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYWNlaG9sZGVyTWVzc2FnZTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udHJvbHNTZXR0aW5ncyA9ICgpID0+IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5maWVsZHMuY29udHJvbHMnLCB7XHJcblx0XCJnZW5lcmFsXCI6IHtcclxuXHRcdGxhYmVsOiBfXyggJ0dlbmVyYWwnICksXHJcblx0XHRhdHRyczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImxhYmVsXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRmllbGQgTGFiZWxcIiApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcIm5hbWVcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGb3JtIGZpZWxkIG5hbWVcIiApLFxyXG5cdFx0XHRcdFwiaGVscFwiOiBfXyggXCJTaG91bGQgY29udGFpbiBvbmx5IExhdGluIGxldHRlcnMsIG51bWJlcnMsIGAtYCBvciBgX2AgY2hhcnMsIG5vIHNwYWNlcyBvbmx5IGxvd2VyIGNhc2VcIiApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImRlc2NcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGaWVsZCBEZXNjcmlwdGlvblwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiZGVmYXVsdFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcImR5bmFtaWNfdGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRGVmYXVsdCBWYWx1ZVwiICksXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0XCJ0b29sYmFyXCI6IHtcclxuXHRcdGF0dHJzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0b2dnbGVcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIklzIFJlcXVpcmVkXCIgKSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHRcImFkdmFuY2VkXCI6IHtcclxuXHRcdGxhYmVsOiBfXyggJ0FkdmFuY2VkJyApLFxyXG5cdFx0YXR0cnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJwbGFjZWhvbGRlclwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIlBsYWNlaG9sZGVyXCIgKSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJhZGRfcHJldlwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRvZ2dsZVwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiQWRkIFByZXYgUGFnZSBCdXR0b25cIiApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInByZXZfbGFiZWxcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJQcmV2IFBhZ2UgQnV0dG9uIExhYmVsXCIgKSxcclxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBcImFkZF9wcmV2XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwidmlzaWJpbGl0eVwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRmllbGQgVmlzaWJpbGl0eVwiICksXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwic2VsZWN0XCIsXHJcblx0XHRcdFx0XCJvcHRpb25zXCI6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcImFsbFwiLFxyXG5cdFx0XHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZvciBhbGxcIiApLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcImxvZ2dlZF9pZFwiLFxyXG5cdFx0XHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIk9ubHkgZm9yIGxvZ2dlZCBpbiB1c2Vyc1wiICksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwibm90X2xvZ2dlZF9pblwiLFxyXG5cdFx0XHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIk9ubHkgZm9yIE5PVC1sb2dnZWQgaW4gdXNlcnNcIiApLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImNsYXNzX25hbWVcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJDU1MgQ2xhc3MgTmFtZVwiICksXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn0gKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJsb2NrQ29udHJvbHMoIHR5cGUgPSAnYWxsJyApIHtcclxuXHRpZiAoICEgdHlwZSApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0Y29uc3QgY29udHJvbHMgPSBDb250cm9sc1NldHRpbmdzKCk7XHJcblxyXG5cdGlmICggJ2FsbCcgPT09IHR5cGUgKSB7XHJcblx0XHRyZXR1cm4gY29udHJvbHM7XHJcblx0fVxyXG5cclxuXHRpZiAoIGNvbnRyb2xzWyB0eXBlIF1cclxuXHRcdCYmIGNvbnRyb2xzWyB0eXBlIF0uYXR0cnNcclxuXHRcdCYmIEFycmF5LmlzQXJyYXkoIGNvbnRyb2xzWyB0eXBlIF0uYXR0cnMgKVxyXG5cdFx0JiYgMCA8IGNvbnRyb2xzWyB0eXBlIF0uYXR0cnMubGVuZ3RoXHJcblx0KSB7XHJcblx0XHRyZXR1cm4gY29udHJvbHNbIHR5cGUgXS5hdHRycztcclxuXHR9XHJcblxyXG5cdHJldHVybiBmYWxzZTtcclxufSIsImltcG9ydCB7IENvbnRyb2xzU2V0dGluZ3MgfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQgRmllbGRXaXRoUHJlc2V0IGZyb20gXCIuL2ZpZWxkLXdpdGgtcHJlc2V0XCI7XHJcbmltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gXCIuLi9wcmVzZXRzL2R5bmFtaWMtcHJlc2V0XCI7XHJcbmltcG9ydCB7XHJcblx0Z2V0Q29udmVydGVkTmFtZSxcclxufSBmcm9tICcuLi8uLi9oZWxwZXJzL3Rvb2xzJztcclxuaW1wb3J0IHsgdXNlU3VjY2Vzc05vdGljZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyJztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgQmxvY2tDb250cm9scyxcclxuXHRcdCAgUmljaFRleHQsXHJcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VEaXNwYXRjaCxcclxuXHQgIH0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBUZXh0Q29udHJvbCxcclxuXHRcdCAgU2VsZWN0Q29udHJvbCxcclxuXHRcdCAgUGFuZWxCb2R5LFxyXG5cdFx0ICBUb2dnbGVDb250cm9sLFxyXG5cdFx0ICBUb29sYmFyR3JvdXAsXHJcblx0XHQgIEZsZXgsXHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXHJcblx0XHQgIENsaXBib2FyZEJ1dHRvbixcclxuXHRcdCAgU25hY2tiYXIsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xyXG59XHJcblxyXG5mdW5jdGlvbiBGaWVsZENvbnRyb2woIHtcclxuXHRcdFx0XHRcdFx0ICAgdHlwZSxcclxuXHRcdFx0XHRcdFx0ICAgc2V0QXR0cmlidXRlcyxcclxuXHRcdFx0XHRcdFx0ICAgYXR0cmlidXRlcyxcclxuXHRcdFx0XHRcdFx0ICAgYXR0cnNTZXR0aW5ncyA9IHt9LFxyXG5cdFx0XHRcdFx0XHQgICBlZGl0UHJvcHM6IHtcclxuXHRcdFx0XHRcdFx0XHQgICBhdHRySGVscCA9ICgpID0+ICcnLFxyXG5cdFx0XHRcdFx0XHRcdCAgIGJsb2NrTmFtZSA9ICcnLFxyXG5cdFx0XHRcdFx0XHQgICB9LFxyXG5cdFx0XHRcdFx0ICAgfSApIHtcclxuXHRjb25zdCBjb250cm9scyA9IENvbnRyb2xzU2V0dGluZ3MoKTtcclxuXHJcblx0aWYgKCAhIGNvbnRyb2xzWyB0eXBlIF0gKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGN1cnJlbnRDb250cm9sID0gY29udHJvbHNbIHR5cGUgXTtcclxuXHJcblx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggdmFsdWUsIGtleSApID0+IHtcclxuXHRcdHNldEF0dHJpYnV0ZXMoIHsgWyBrZXkgXTogdmFsdWUgfSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGlzVmFsaWRDb25kaXRpb24gPSAoIGF0dHIgKSA9PiB7XHJcblx0XHRpZiAoICEgYXR0ci5jb25kaXRpb24gKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggYmxvY2tOYW1lICYmIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZSApIHtcclxuXHRcdFx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZSAmJiBibG9ja05hbWUgIT09IGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZVxyXG5cdFx0XHRcdCYmIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZS5sZW5ndGhcclxuXHRcdFx0XHQmJiAhIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZS5pbmNsdWRlcyggYmxvY2tOYW1lIClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgb2JqZWN0Tm90TWF0Y2ggPSAoIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoICdvYmplY3QnICE9PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYXR0ciApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB7IG9wZXJhdG9yID0gJ2FuZCcsIGl0ZW1zID0ge30gfSA9IGF0dHIuY29uZGl0aW9uLmF0dHJcclxuXHJcblx0XHRcdGlmICggJ29yJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcclxuXHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyVG9Db21wYXJlIGluIGl0ZW1zICkge1xyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVDb21wYXJlID0gaXRlbXNbIGF0dHJUb0NvbXBhcmUgXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHZhbHVlQ29tcGFyZSA9PT0gYXR0cmlidXRlc1sgYXR0clRvQ29tcGFyZSBdICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggJ2FuZCcgPT09IG9wZXJhdG9yLnRvTG93ZXJDYXNlKCkgKSB7XHJcblx0XHRcdFx0cmV0dXJuICggZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyVG9Db21wYXJlIGluIGl0ZW1zICkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIGl0ZW1zWyBhdHRyVG9Db21wYXJlIF0gIT09IGF0dHJpYnV0ZXNbIGF0dHJUb0NvbXBhcmUgXSApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH0gKSgpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSApKClcclxuXHJcblx0XHRpZiAoICEgb2JqZWN0Tm90TWF0Y2hcclxuXHRcdFx0fHwgKFxyXG5cdFx0XHRcdCdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYXR0clxyXG5cdFx0XHRcdCYmIGF0dHIuY29uZGl0aW9uLmF0dHJcclxuXHRcdFx0XHQmJiAhIGF0dHJpYnV0ZXNbIGF0dHIuY29uZGl0aW9uLmF0dHIgXVxyXG5cdFx0XHQpXHJcblx0XHRcdHx8IChcclxuXHRcdFx0XHQnc3RyaW5nJyA9PT0gdHlwZW9mIGF0dHIuY29uZGl0aW9uXHJcblx0XHRcdFx0JiYgISBhdHRyaWJ1dGVzWyBhdHRyLmNvbmRpdGlvbiBdXHJcblx0XHRcdClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIGN1cnJlbnRDb250cm9sLmF0dHJzLm1hcCggKCB7IGhlbHAgPSAnJywgYXR0ck5hbWUsIGxhYmVsLCAuLi5hdHRyIH0gKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNSZWdpc3RlckF0dHJpYnV0ZSA9ICggYXR0ck5hbWUgaW4gYXR0cmlidXRlcyApO1xyXG5cdFx0Y29uc3QgdmFsaWRDb25kaXRpb24gPSBpc1ZhbGlkQ29uZGl0aW9uKCBhdHRyICk7XHJcblx0XHRjb25zdCBpc0hpZGRlbiA9IChcclxuXHRcdFx0YXR0ck5hbWUgaW4gYXR0cnNTZXR0aW5nc1xyXG5cdFx0XHQmJiAnc2hvdycgaW4gYXR0cnNTZXR0aW5nc1sgYXR0ck5hbWUgXVxyXG5cdFx0XHQmJiBmYWxzZSA9PT0gYXR0cnNTZXR0aW5nc1sgYXR0ck5hbWUgXS5zaG93XHJcblx0XHQpO1xyXG5cclxuXHJcblxyXG5cdFx0aWYgKCAhIGlzUmVnaXN0ZXJBdHRyaWJ1dGUgfHwgISB2YWxpZENvbmRpdGlvbiB8fCBpc0hpZGRlbiApIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoICggYXR0ci50eXBlICkge1xyXG5cdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRyZXR1cm4gPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1UZXh0Q29udHJvbGAgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gb25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApIH1cclxuXHRcdFx0XHRcdG9uQmx1cj17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCAnbGFiZWwnID09PSBhdHRyTmFtZVxyXG5cdFx0XHRcdFx0XHRcdCYmIDEgPCBhdHRyaWJ1dGVzLmxhYmVsLmxlbmd0aFxyXG5cdFx0XHRcdFx0XHRcdCYmICggISBhdHRyaWJ1dGVzLm5hbWUgfHwgJ2ZpZWxkX25hbWUnID09PSBhdHRyaWJ1dGVzLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBnZXRDb252ZXJ0ZWROYW1lKCBhdHRyaWJ1dGVzLmxhYmVsICksICduYW1lJyApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPjtcclxuXHRcdFx0Y2FzZSAnZHluYW1pY190ZXh0JzpcclxuXHRcdFx0XHRyZXR1cm4gPEZpZWxkV2l0aFByZXNldFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tRmllbGRXaXRoUHJlc2V0YCB9XHJcblx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVGV4dENvbnRyb2xEeW5hbWljYCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0PjtcclxuXHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVNlbGVjdENvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfHwgYXR0ckhlbHAoIGF0dHJOYW1lICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBhdHRyLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+O1xyXG5cdFx0XHRjYXNlICd0b2dnbGUnOlxyXG5cdFx0XHRcdHJldHVybiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVG9nZ2xlQ29udHJvbGAgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz47XHJcblx0XHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdFx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tQmFzZUNvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LU51bWJlckNvbnRyb2xgIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIE51bWJlciggbmV3VmFsICksIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XHJcblx0XHRcdFx0XHQgICBzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0ICAgY29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxyXG5cdFx0XHRcdFx0ICAgfSB9PnsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9PC9wPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+O1xyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBHZW5lcmFsRmllbGRzKCBwcm9wcyApIHtcclxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IENvbnRyb2xzU2V0dGluZ3MoKS5nZW5lcmFsO1xyXG5cclxuXHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IGN1cnJlbnRDb250cm9sLmxhYmVsIH0ga2V5PXsgJ2pldC1mb3JtLWdlbmVyYWwtZmllbGRzJyB9PlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdnZW5lcmFsJ1xyXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1maWVsZHMtY29tcG9uZW50JyB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHRcdDxGaWVsZENvbnRyb2xcclxuXHRcdFx0dHlwZT0nY3VzdG9tX2dlbmVyYWwnXHJcblx0XHRcdGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWN1c3RvbS1maWVsZHMtY29tcG9uZW50JyB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHQ8L1BhbmVsQm9keT47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFkdmFuY2VkRmllbGRzKCBwcm9wcyApIHtcclxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IENvbnRyb2xzU2V0dGluZ3MoKS5hZHZhbmNlZDtcclxuXHJcblx0cmV0dXJuIDxQYW5lbEJvZHkgdGl0bGU9eyBjdXJyZW50Q29udHJvbC5sYWJlbCB9IGtleT17ICdqZXQtZm9ybS1hZHZhbmNlZC1maWVsZHMnIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdhZHZhbmNlZCdcclxuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWZpZWxkcy1jb21wb25lbnQnIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdjdXN0b21fYWR2YW5jZWQnXHJcblx0XHRcdGtleT17ICdqZXQtZm9ybS1hZHZhbmNlZC1jdXN0b20tZmllbGRzLWNvbXBvbmVudCcgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+XHJcblx0PC9QYW5lbEJvZHk+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb29sQmFyRmllbGRzKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXHJcblx0XHRcdCAgY2hpbGRyZW4gICAgPSBbXSxcclxuXHRcdFx0ICBkaXNwbGF5TmFtZSA9IHRydWUsXHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlOb3RpY2UgPSB1c2VTdWNjZXNzTm90aWNlKCBgQ29waWVkIFwiJHsgYXR0cmlidXRlcy5uYW1lIH1cIiB0byBjbGlwYm9hcmQuYCApO1xyXG5cclxuXHRyZXR1cm4gPEJsb2NrQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtQmxvY2tDb250cm9scycgKSB9PlxyXG5cdFx0PFRvb2xiYXJHcm91cCBrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcy1Ub29sYmFyR3JvdXAnICkgfT5cclxuXHRcdFx0PEZsZXhcclxuXHRcdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cclxuXHRcdFx0XHRqdXN0aWZ5PXsgJ2NlbnRlcicgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS10b2dnbGUtYm94JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGRpc3BsYXlOYW1lICYmIDw+XHJcblx0XHRcdFx0XHQ8Q2xpcGJvYXJkQnV0dG9uXHJcblx0XHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdFx0aWNvbj0nYWRtaW4tcGFnZSdcclxuXHRcdFx0XHRcdFx0c2hvd1Rvb2x0aXBcclxuXHRcdFx0XHRcdFx0c2hvcnRjdXQ9J0NvcHkgbmFtZSdcclxuXHRcdFx0XHRcdFx0dGV4dD17IGF0dHJpYnV0ZXMubmFtZSB9XHJcblx0XHRcdFx0XHRcdG9uQ29weT17ICgpID0+IGRpc3BsYXlOb3RpY2UoIHRydWUgKSB9XHJcblx0XHRcdFx0XHRcdG9uRmluaXNoQ29weT17ICgpID0+IGRpc3BsYXlOb3RpY2UoIGZhbHNlICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmFtZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmFtZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG5hbWUgfSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC8+IH1cclxuXHRcdFx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdFx0XHR0eXBlPSd0b29sYmFyJ1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2pldC1mb3JtLXRvb2xiYXItZmllbGRzLWNvbXBvbmVudCcgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L0ZsZXg+XHJcblx0XHQ8L1Rvb2xiYXJHcm91cD5cclxuXHQ8L0Jsb2NrQ29udHJvbHM+O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkcyxcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRGaWVsZENvbnRyb2wsXHJcbn07IiwiaW1wb3J0IHsgRmllbGRDb250cm9sIH0gZnJvbSAnLi9maWVsZC1jb250cm9sJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgUGFuZWxCb2R5IH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmllbGRTZXR0aW5nc1dyYXBwZXIoIHByb3BzICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICB0aXRsZSxcclxuXHRcdFx0ICBjaGlsZHJlbixcclxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSA9IHZhbCA9PiB2YWwgfSxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gPFBhbmVsQm9keVxyXG5cdFx0dGl0bGU9eyB0aXRsZSB8fCBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cclxuXHQ+XHJcblx0XHR7IGNoaWxkcmVuIH1cclxuXHRcdDxGaWVsZENvbnRyb2xcclxuXHRcdFx0dHlwZT0nY3VzdG9tX3NldHRpbmdzJ1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnY3VzdG9tU2V0dGluZ3NGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+XHJcblx0PC9QYW5lbEJvZHk+O1xyXG59IiwiaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuLi9hY3Rpb24tbW9kYWxcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRQYXRoLFxyXG5cdFNWRyxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gRmllbGRXaXRoUHJlc2V0KCB7XHJcblx0XHRcdFx0XHRcdFx0ICBjaGlsZHJlbiA9IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0ICBNb2RhbEVkaXRvcixcclxuXHRcdFx0XHRcdFx0XHQgIHRyaWdnZXJDbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdCAgfSApIHtcclxuXHJcblx0Y29uc3QgWyBtb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlTW9kYWxTdGF0ZSA9ICgpID0+IHtcclxuXHRcdHNldE1vZGFsU3RhdGUoIHByZXYgPT4gISBwcmV2ICk7XHJcblx0fTtcclxuXHRjb25zdCBjbGFzc05hbWVzID0gWyAnamV0LWZvcm0tZHluYW1pYy1wcmVzZXRfX3RyaWdnZXInLCAuLi50cmlnZ2VyQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZHluYW1pYy1wcmVzZXRcIlxyXG5cdFx0PlxyXG5cdFx0XHR7IGNoaWxkcmVuIH1cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxyXG5cdFx0XHRcdG9uQ2xpY2s9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cclxuXHRcdFx0PjxTVkcgdmlld0JveD1cIjAgMCA1NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoXHJcblx0XHRcdFx0ZD1cIk00Mi42Mzk2IDI2LjQzNDdDMzcuODY4MiAyNy4zNDM2IDMyLjU2NjYgMjguMDI1MiAyNy4xODk0IDI4LjAyNTJDMjEuODEyMSAyOC4wMjUyIDE2LjQzNDggMjcuMzQzNiAxMS43MzkxIDI2LjQzNDdDNi45Njc3NCAyNS40NTAyIDMuMTgwOTMgMjMuODU5NyAwLjM3ODY4IDIxLjk2NjNMMC4zNzg2OCAyOC4wMjUyQzAuMzc4NjggMjkuNTM5OSAxLjU5MDQ2IDMxLjEzMDQgMy43ODY4MiAzMi40MTc5QzUuOTgzMTcgMzMuNzA1NCA5LjQ2NzA0IDM0LjkxNzIgMTMuNjMyNSAzNS41OTg4QzE3Ljc5OCAzNi4yODA1IDIyLjExNSAzNi44MTA2IDI3LjE4OTQgMzYuODEwNkMzMi4yNjM3IDM2LjgxMDYgMzYuNjU2NCAzNi41MDc3IDQwLjc0NjIgMzUuNTk4OEM0NC44MzU5IDM0LjY5IDQ4LjMxOTggMzMuNzA1NCA1MC41MTYyIDMyLjQxNzlDNTIuNzEyNSAzMS4xMzA0IDU0IDI5LjUzOTkgNTQgMjguMDI1Mkw1NCAyMS45NjYzQzUxLjEyMiAyMy44NTk3IDQ3LjMzNTIgMjUuNDUwMiA0Mi42Mzk2IDI2LjQzNDdaTTQyLjYzOTYgNTMuNTQ4NEMzNy44NjgyIDU0LjUzMjkgMzIuNTY2NiA1NS4xMzg4IDI3LjE4OTQgNTUuMTM4OEMyMS44MTIxIDU1LjEzODggMTYuNDM0OCA1NC41MzI5IDExLjczOTEgNTMuNTQ4NEM3LjA0MzQ4IDUyLjU2MzggMy4xODA5MyA1MS4wNDkxIDAuMzc4NjgyIDQ5LjE1NTZMMC4zNzg2ODIgNTUuMTM4OEMwLjM3ODY4MyA1Ni43MjkzIDEuNTkwNDYgNTguMzE5NyAzLjc4NjgyIDU5LjUzMTVDNi4zNjE4NiA2MC44MTkgOS40NjcwNSA2Mi4xMDY2IDEzLjYzMjUgNjIuNzEyNUMxNy43MjIzIDYzLjY5NyAyMi4xMTUgNjQgMjcuMTg5NCA2NEMzMi4yNjM3IDY0IDM2LjY1NjQgNjMuNjk3IDQwLjc0NjIgNjIuNzEyNUM0NC44MzU5IDYxLjgwMzYgNDguMzE5OCA2MC44MTkgNTAuNTE2MiA1OS41MzE1QzUyLjcxMjUgNTcuOTQxMSA1NCA1Ni43MjkzIDU0IDU0LjgzNTlMNTQgNDguODUyN0M1MS4xMjIgNTEuMDQ5MSA0Ny4zMzUyIDUyLjI2MDggNDIuNjM5NiA1My41NDg0Wk00Mi42Mzk2IDM5Ljk5MTVDMzcuODY4MiA0MC45MDA0IDMyLjU2NjYgNDEuNTgyIDI3LjE4OTQgNDEuNTgyQzIxLjgxMjEgNDEuNTgyIDE2LjQzNDggNDAuOTAwNCAxMS43MzkxIDM5Ljk5MTVDNi45Njc3NCAzOS4wMDcgMy4xODA5MyAzNy40OTIyIDAuMzc4NjgxIDM1LjU5ODhMMC4zNzg2ODEgNDEuNTgyQzAuMzc4NjgxIDQzLjE3MjUgMS41OTA0NiA0NC42ODcyIDMuNzg2ODIgNDUuOTc0N0M2LjM2MTg1IDQ3LjI2MjIgOS40NjcwNSA0OC40NzQgMTMuNjMyNSA0OS4xNTU2QzE3LjcyMjMgNTAuMDY0NSAyMi4xMTUgNTAuMzY3NCAyNy4xODk0IDUwLjM2NzRDMzIuMjYzNyA1MC4zNjc0IDM2LjY1NjQgNTAuMDY0NSA0MC43NDYyIDQ5LjE1NTZDNDQuODM1OSA0OC4xNzExIDQ4LjMxOTggNDcuMjYyMiA1MC41MTYyIDQ1Ljk3NDdDNTIuNzEyNSA0NC4zODQzIDU0IDQzLjE3MjUgNTQgNDEuNTgyTDU0IDM1LjU5ODhDNTEuMTIyIDM3LjQ5MjIgNDcuMzM1MiAzOS4wMDcgNDIuNjM5NiAzOS45OTE1Wk00MC40NDMyIDIuMTIzMzdDMzYuMzUzNSAxLjEzODc5IDMxLjg4NSAwLjgzNTg0OCAyNi44ODY0IDAuODM1ODQ5QzIxLjg4NzggMC44MzU4NDkgMTcuNDE5NCAxLjEzODc5IDEzLjI1MzkgMi4xMjMzN0M5LjA4ODM2IDMuMTA3OTQgNS42ODAyMiA0LjAxNjc4IDMuNDgzODcgNS4zMDQzQzEuMjg3NTEgNi41OTE4MSAtMy40NzgyZS0wNiA4LjEwNjU0IC0zLjMzOTE2ZS0wNiA5LjY5N0wtMi45NTUxM2UtMDYgMTQuMDg5N0MtMi44MTYwOWUtMDYgMTUuNjgwMiAxLjI4NzUyIDE3LjI3MDYgMy40ODM4NyAxOC41NTgyQzYuMDU4OTEgMTkuNzY5OSA5LjE2NDEgMjEuMDU3NSAxMy4yNTM5IDIxLjY2MzNDMTcuMzQzNiAyMi4yNjkyIDIxLjgxMjEgMjIuOTUwOSAyNi44ODY0IDIyLjk1MDlDMzEuOTYwNyAyMi45NTA5IDM2LjM1MzUgMjIuOTUwOSA0MC40NDMyIDIyLjM0NUM0NC41MzMgMjEuNzM5MSA0OC4wMTY5IDIwLjQ1MTYgNTAuMjEzMiAxOS4xNjRDNTIuNzEyNSAxNy41NzM2IDU0IDE1Ljk4MzEgNTQgMTQuMzkyN0w1NCA5Ljk5OTk1QzU0IDguNDA5NDggNTIuNzEyNSA2LjgxOTAyIDUwLjUxNjIgNS42MDcyNEM0OC4zMTk4IDQuMzk1NDYgNDQuNTMzIDIuNzI5MjYgNDAuNDQzMiAyLjEyMzM3WlwiXHJcblx0XHRcdFx0ZmlsbD1cIiM3RTg5OTNcIi8+PC9TVkc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHR7IG1vZGFsU3RhdGUgJiYgKFxyXG5cdFx0XHQ8QWN0aW9uTW9kYWxcclxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNoYW5nZU1vZGFsU3RhdGUgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHRcdFx0dGl0bGU9eyAnRWRpdCBQcmVzZXQnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgbW9kYWxQcm9wcyA9PiA8TW9kYWxFZGl0b3JcclxuXHRcdFx0XHRcdHsgLi4ubW9kYWxQcm9wcyB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHQ8L0FjdGlvbk1vZGFsPlxyXG5cdFx0KSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFdpdGhQcmVzZXQ7IiwiaW1wb3J0IFRvb2xzLCB7XHJcblx0Y2xhc3NuYW1lcyxcclxuXHRnZXRDb252ZXJ0ZWROYW1lLFxyXG59IGZyb20gJy4uLy4uL2hlbHBlcnMvdG9vbHMnO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBCYXNlQ29udHJvbCxcclxuXHRcdCAgUG9wb3ZlcixcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICAvL3VzZVNlbGVjdCxcclxuXHRcdCAgd2l0aFNlbGVjdCxcclxuXHQgIH0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBSaWNoVGV4dCxcclxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmZ1bmN0aW9uIEZpZWxkV3JhcHBlciggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBpc1NlbGVjdGVkLFxyXG5cdFx0XHQgIGF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXksIGJsb2NrTmFtZSA9ICcnIH0sXHJcblx0XHRcdCAgY2hpbGRyZW4sXHJcblx0XHRcdCAgd3JhcENsYXNzZXMgICAgICAgPSBbXSxcclxuXHRcdFx0ICB2YWx1ZUlmRW1wdHlMYWJlbCA9ICcnLFxyXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgY2hpbGRyZW5Qb3NpdGlvbiAgPSAnYmV0d2VlbicsXHJcblx0XHRcdCAgX2pmX2FyZ3MsXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3Qgc2V0RHluYW1pY05hbWUgPSAoKSA9PiB7XHJcblx0XHRpZiAoIDEgPCBhdHRyaWJ1dGVzLmxhYmVsLmxlbmd0aFxyXG5cdFx0XHQmJiAoICEgYXR0cmlidXRlcy5uYW1lIHx8ICdmaWVsZF9uYW1lJyA9PT0gYXR0cmlidXRlcy5uYW1lIClcclxuXHRcdCkge1xyXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG5hbWU6IGdldENvbnZlcnRlZE5hbWUoIGF0dHJpYnV0ZXMubGFiZWwgKSB9IClcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiByZW5kZXJMYWJlbCgpIHtcclxuXHRcdHJldHVybiA8QmFzZUNvbnRyb2wuVmlzdWFsTGFiZWw+XHJcblx0XHRcdDxkaXYgb25CbHVyPXsgc2V0RHluYW1pY05hbWUgfT5cclxuXHRcdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHRcdGlzU2VsZWN0ZWRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWZvcm0tYnVpbGRlcl9fbGFiZWwnXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRmllbGQgTGFiZWwuLi4nXHJcblx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5sYWJlbCA/IGF0dHJpYnV0ZXMubGFiZWwgOiB2YWx1ZUlmRW1wdHlMYWJlbCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld0xhYmVsID0+IHNldEF0dHJpYnV0ZXMoIHsgbGFiZWw6IG5ld0xhYmVsIH0gKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7IGlzU2VsZWN0ZWQgJiYgPFBvcG92ZXJcclxuXHRcdFx0XHRcdHBvc2l0aW9uPSdtaWRkbGUgcmlnaHQnXHJcblx0XHRcdFx0XHRub0Fycm93PXsgZmFsc2UgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzAuM2VtIDAuNWVtJyxcclxuXHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgX18oICdJbnB1dCBMYWJlbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvUG9wb3Zlcj4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyBhdHRyaWJ1dGVzLnJlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19yZXF1aXJlZCcgfT5cclxuXHRcdFx0XHRcdHsgX2pmX2FyZ3MucmVxdWlyZWRfbWFyayA/IF9qZl9hcmdzLnJlcXVpcmVkX21hcmsgOiAnKicgfVxyXG5cdFx0XHRcdDwvc3Bhbj4gfVxyXG5cdFx0PC9CYXNlQ29udHJvbC5WaXN1YWxMYWJlbD47XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZW5kZXJEZXNjcmlwdGlvbigpIHtcclxuXHRcdHJldHVybiA8QmFzZUNvbnRyb2wga2V5PXsgJ2N1c3RvbV9oZWxwX2Rlc2NyaXB0aW9uJyB9IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19kZXNjJyB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHAnPlxyXG5cdFx0XHRcdDxSaWNoVGV4dFxyXG5cdFx0XHRcdFx0aXNTZWxlY3RlZFxyXG5cdFx0XHRcdFx0dGFnTmFtZT0nc21hbGwnXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRGVzY3JpcHRpb24uLi4nXHJcblx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZXNjIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgZGVzYyA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRlc2MgfSApIH1cclxuXHRcdFx0XHRcdHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcwcHgnIH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyBpc1NlbGVjdGVkICYmIDxQb3BvdmVyXHJcblx0XHRcdFx0XHRwb3NpdGlvbj0nYm90dG9tIGNlbnRlcidcclxuXHRcdFx0XHRcdG5vQXJyb3c9eyBmYWxzZSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC4zZW0gMC41ZW0nLFxyXG5cdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ0lucHV0IERlc2NyaXB0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9Qb3BvdmVyPiB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9CYXNlQ29udHJvbD47XHJcblx0fVxyXG5cclxuXHRpZiAoICdyb3cnID09PSBfamZfYXJncy5maWVsZHNfbGF5b3V0ICkge1xyXG5cdFx0d3JhcENsYXNzZXMucHVzaCggJ2pldC1mb3JtLWJ1aWxkZXItcm93X19mbGV4JyApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VIb2xkZXJfYmxvY2snICkgfVxyXG5cdFx0XHRjbGFzc05hbWU9eyBjbGFzc25hbWVzKFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlci1yb3cnLFxyXG5cdFx0XHRcdHdyYXBDbGFzc2VzLFxyXG5cdFx0XHQpIH1cclxuXHRcdD5cclxuXHRcdFx0eyAncm93JyAhPT0gX2pmX2FyZ3MuZmllbGRzX2xheW91dCAmJiA8PlxyXG5cdFx0XHRcdHsgJ3RvcCcgPT09IGNoaWxkcmVuUG9zaXRpb24gJiYgY2hpbGRyZW4gfVxyXG5cdFx0XHRcdHsgcmVuZGVyTGFiZWwoKSB9XHJcblx0XHRcdFx0eyAnYmV0d2VlbicgPT09IGNoaWxkcmVuUG9zaXRpb24gJiYgY2hpbGRyZW4gfVxyXG5cdFx0XHRcdHsgcmVuZGVyRGVzY3JpcHRpb24oKSB9XHJcblx0XHRcdFx0eyAnYm90dG9tJyA9PT0gY2hpbGRyZW5Qb3NpdGlvbiAmJiBjaGlsZHJlbiB9XHJcblx0XHRcdDwvPiB9XHJcblx0XHRcdHsgJ3JvdycgPT09IF9qZl9hcmdzLmZpZWxkc19sYXlvdXQgJiYgPD5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXsgeyBmbGV4OiAxIH0gfT5cclxuXHRcdFx0XHRcdHsgcmVuZGVyTGFiZWwoKSB9XHJcblx0XHRcdFx0XHR7IHJlbmRlckRlc2NyaXB0aW9uKCkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9eyB7IGZsZXg6IDMgfSB9PnsgY2hpbGRyZW4gfTwvZGl2PlxyXG5cdFx0XHQ8Lz4gfVxyXG5cdFx0PC9CYXNlQ29udHJvbD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KCBzZWxlY3QgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdF9qZl9hcmdzOiBKU09OLnBhcnNlKCBtZXRhLl9qZl9hcmdzIHx8IHt9ICksXHJcblx0fVxyXG59ICkoIEZpZWxkV3JhcHBlciApOyIsImNvbnN0IHtcclxuXHRcdCAgQnV0dG9uLFxyXG5cdFx0ICBQb3BvdmVyLFxyXG5cdFx0ICBQYW5lbEJvZHksXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIE1hY3Jvc0luc2VydGVyKCB7XHJcblx0XHRcdFx0XHRcdFx0IGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdCBmaWVsZHMsXHJcblx0XHRcdFx0XHRcdFx0IG9uRmllbGRDbGljayxcclxuXHRcdFx0XHRcdFx0XHQgY3VzdG9tTWFjcm9zLFxyXG5cdFx0XHRcdFx0XHRcdCB6SW5kZXggPSAxMDAwMDAwLFxyXG5cdFx0XHRcdFx0XHRcdCAuLi5wb3BvdmVyUHJvcHNcclxuXHRcdFx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdGNvbnN0IFsgc2hvd1BvcG92ZXIsIHNldFBvcG92ZXJTdGF0ZSBdID0gdXNlU3RhdGUoICgpID0+IGZhbHNlICk7XHJcblxyXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLWluc2VydGVyXCI+XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdGlzVGVydGlhcnlcclxuXHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRpY29uPXsgc2hvd1BvcG92ZXIgPyAnbm8tYWx0JyA6ICdhZG1pbi10b29scycgfVxyXG5cdFx0XHRsYWJlbD17ICdJbnNlcnQgbWFjcm9zJyB9XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLXRyaWdnZXJcIlxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdHNldFBvcG92ZXJTdGF0ZSggcHJldiA9PiAhIHByZXYgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0eyBzaG93UG9wb3ZlciAmJiAoXHJcblx0XHRcdDxQb3BvdmVyXHJcblx0XHRcdFx0c3R5bGU9eyB7IHpJbmRleCB9IH1cclxuXHRcdFx0XHRwb3NpdGlvbj17ICdib3R0b20gbGVmdCcgfVxyXG5cdFx0XHRcdHsgLi4ucG9wb3ZlclByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgZmllbGRzLmxlbmd0aCAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0Zvcm0gRmllbGRzJyB9PlxyXG5cdFx0XHRcdFx0eyBmaWVsZHMubWFwKCBmaWVsZCA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdmaWVsZF8nICsgZmllbGQubmFtZSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25GaWVsZENsaWNrKCBmaWVsZC5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD57ICclJyArIGZpZWxkLm5hbWUgKyAnJScgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdFx0eyBjdXN0b21NYWNyb3MgJiYgPFBhbmVsQm9keSB0aXRsZT17ICdDdXN0b20gTWFjcm9zJyB9PlxyXG5cdFx0XHRcdFx0eyBjdXN0b21NYWNyb3MubWFwKCBtYWNyb3MgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnbWFjcm9zXycgKyBtYWNyb3MgfT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggbWFjcm9zIClcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD57ICclJyArIG1hY3JvcyArICclJyB9PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cclxuXHRcdFx0PC9Qb3BvdmVyPlxyXG5cdFx0KSB9XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NJbnNlcnRlcjsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEJ1dHRvbixcclxuXHRCdXR0b25Hcm91cCxcclxuXHRDYXJkLFxyXG5cdENhcmRCb2R5LFxyXG5cdENhcmRIZWFkZXIsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuXHJcbmZ1bmN0aW9uIFJlcGVhdGVyV2l0aFN0YXRlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdEl0ZW1IZWFkaW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwZWF0ZXJDbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckl0ZW1DbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRuZXdJdGVtLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWRkTmV3QnV0dG9uTGFiZWwgPSAnQWRkIE5ldycsXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0b25TYXZlSXRlbXMsXHJcblx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkFkZE5ld0l0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRvblJlbW92ZUl0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRoZWxwID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwU291cmNlOiB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscFZpc2libGU6ICgpID0+IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwS2V5OiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbICdqZXQtZm9ybS1idWlsZGVyX19yZXBlYXRlci1jb21wb25lbnQnLCAuLi5yZXBlYXRlckNsYXNzZXMgXS5qb2luKCAnICcgKTtcclxuXHRjb25zdCBpdGVtQ2xhc3NOYW1lcyA9IFsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudC1pdGVtJywgLi4ucmVwZWF0ZXJJdGVtQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cclxuXHRjb25zdCBwYXJzZWRJdGVtcyA9ICgpID0+IHtcclxuXHRcdGlmICggaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0Y29uc3QgY2xvbmVJdGVtcyA9IFsgLi4uaXRlbXMgXTtcclxuXHJcblx0XHRcdGNsb25lSXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcblx0XHRcdFx0aXRlbS5fX3Zpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGNsb25lSXRlbXM7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFsge1xyXG5cdFx0XHRcdC4uLm5ld0l0ZW0sXHJcblx0XHRcdFx0X192aXNpYmxlOiB0cnVlLFxyXG5cdFx0XHR9IF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBbIGl0ZW1zRGF0YSwgc2V0SXRlbXNEYXRhIF0gPSB1c2VTdGF0ZSggKCkgPT4gcGFyc2VkSXRlbXMoKSApO1xyXG5cclxuXHRjb25zdCBbIGlzU2FmZURlbGV0aW5nLCBzZXRTYWZlRGVsZXRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XHJcblxyXG5cdGNvbnN0IGNoYW5nZUN1cnJlbnRJdGVtID0gKCB2YWx1ZVRvU2V0LCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdHByZXZbIGluZGV4IF0gPSB7XHJcblx0XHRcdFx0Li4ucHJldlsgaW5kZXggXSxcclxuXHRcdFx0XHQuLi52YWx1ZVRvU2V0LFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5wcmV2IF07XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TYXZlRGVsZXRpbmcgPSBpbmRleCA9PiB7XHJcblx0XHRyZXR1cm4gY29uZmlybSggX18oIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIGl0ZW0gJHsgaW5kZXggKyAxIH0/YCwgJ2pldC1mb3JtLWJ1aWxkZXInICkgKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbW92ZU9wdGlvbiA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdGlzU2FmZURlbGV0aW5nICYmICEgb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgfHxcclxuXHRcdFx0b25SZW1vdmVJdGVtICYmICEgb25SZW1vdmVJdGVtKCBpbmRleCwgaXRlbXNEYXRhIClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0Y29uc3QgY2xvbmVQcmV2ID0gWyAuLi5wcmV2IF07XHJcblx0XHRcdGNsb25lUHJldi5zcGxpY2UoIGluZGV4LCAxICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gY2xvbmVQcmV2O1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgYWRkTmV3SXRlbSA9ICggdmFsdWUgKSA9PiB7XHJcblx0XHRpZiAoIG9uQWRkTmV3SXRlbSApIHtcclxuXHRcdFx0b25BZGROZXdJdGVtKCB2YWx1ZSwgaXRlbXNEYXRhICk7XHJcblx0XHR9XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4gWyAuLi5wcmV2LCB7XHJcblx0XHRcdC4uLnZhbHVlLFxyXG5cdFx0XHRfX3Zpc2libGU6IHRydWUsXHJcblx0XHR9IF0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsb25lSXRlbSA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRjb25zdCBbIGJlZm9yZSwgYWZ0ZXIgXSA9IFsgcHJldi5zbGljZSggMCwgaW5kZXggKyAxICksIHByZXYuc2xpY2UoIGluZGV4ICsgMSApIF07XHJcblx0XHRcdHJldHVybiBbIC4uLmJlZm9yZSwgbG9kYXNoLmFzc2lnbigge30sIHByZXZbIGluZGV4IF0gKSwgLi4uYWZ0ZXIgXTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdmVSZXBlYXRlckl0ZW0gPSAoIHsgb2xkSW5kZXgsIG5ld0luZGV4IH0gKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRbIHByZXZbIG5ld0luZGV4IF0sIHByZXZbIG9sZEluZGV4IF0gXSA9IFsgcHJldlsgb2xkSW5kZXggXSwgcHJldlsgbmV3SW5kZXggXSBdO1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5wcmV2IF07XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3ZlVXAgPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0bW92ZVJlcGVhdGVySXRlbSggeyBvbGRJbmRleDogaW5kZXgsIG5ld0luZGV4OiBpbmRleCAtIDEgfSApO1xyXG5cdH1cclxuXHRjb25zdCBtb3ZlRG93biA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4ICsgMSB9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpc0Rpc2FibGVkRW5kID0gKCBpbmRleCApID0+IHtcclxuXHRcdHJldHVybiAhICggaW5kZXggPCBpdGVtc0RhdGEubGVuZ3RoIC0gMSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG9nZ2xlVmlzaWJsZSA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRwcmV2WyBpbmRleCBdLl9fdmlzaWJsZSA9ICEgKCBwcmV2WyBpbmRleCBdLl9fdmlzaWJsZSApO1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5wcmV2IF07XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRjb25zdCBjbG9uZUl0ZW1zID0gWyAuLi5pdGVtc0RhdGEgXTtcclxuXHJcblx0XHRcdGlmICggb25TYXZlSXRlbXMgKSB7XHJcblx0XHRcdFx0Y2xvbmVJdGVtcy5mb3JFYWNoKCAoIGl0ZW0sIGluZGV4ICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIGNvbnN0IGl0ZW1LZXkgaW4gaXRlbSApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCBpdGVtS2V5LnN0YXJ0c1dpdGgoICdfXycgKSApIHtcclxuXHRcdFx0XHRcdFx0XHRkZWxldGUgY2xvbmVJdGVtc1sgaW5kZXggXVsgaXRlbUtleSBdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRvblNhdmVJdGVtcyggY2xvbmVJdGVtcyApO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdH0sIFsgaXNTYXZlQWN0aW9uIF0gKTtcclxuXHJcblx0Y29uc3QgZ2V0UmVwZWF0ZXJJdGVtSWQgPSBpbmRleCA9PiBgamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbV8keyBpbmRleCB9YDtcclxuXHJcblxyXG5cdGNvbnN0IFJlcGVhdGVySXRlbSA9ICggeyBjdXJyZW50SXRlbSwgaW5kZXggfSApID0+IDxDYXJkXHJcblx0XHRpc0VsZXZhdGVkPXsgdHJ1ZSB9XHJcblx0XHRjbGFzc05hbWU9eyBpdGVtQ2xhc3NOYW1lcyB9XHJcblx0XHRrZXk9eyBnZXRSZXBlYXRlckl0ZW1JZCggaW5kZXggKSB9XHJcblx0XHRpZD17IGdldFJlcGVhdGVySXRlbUlkKCBpbmRleCApIH1cclxuXHQ+XHJcblx0XHQ8Q2FyZEhlYWRlciBjbGFzc05hbWU9eyAncmVwZWF0ZXJfX2l0ZW1fX2hlYWRlcicgfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlcGVhdGVyLWl0ZW1fX2xlZnQtaGVhZGluZyc+XHJcblx0XHRcdFx0PEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9ucycgfT5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRpY29uPXsgY3VycmVudEl0ZW0uX192aXNpYmxlID8gJ25vLWFsdCcgOiAnZWRpdCcgfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gdG9nZ2xlVmlzaWJsZSggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsgISBCb29sZWFuKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0aWNvbj17ICdhcnJvdy11cC1hbHQyJyB9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlVXAoIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzRGlzYWJsZWRFbmQoIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LWRvd24tYWx0MicgfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZURvd24oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9PlxyXG5cdFx0XHRcdFx0XHRcdHsgSXRlbUhlYWRpbmcgJiYgPEl0ZW1IZWFkaW5nXHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50SXRlbT17IGN1cnJlbnRJdGVtIH1cclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKCBkYXRhLCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHR7ICEgSXRlbUhlYWRpbmcgJiYgYCMkeyBpbmRleCArIDEgfWAgfVxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8QnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBjbG9uZUl0ZW0oIGluZGV4ICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oICdDbG9uZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZU9wdGlvbiggaW5kZXggKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBfXyggJ0RlbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9CdXR0b25Hcm91cD5cclxuXHRcdDwvQ2FyZEhlYWRlcj5cclxuXHRcdHsgY3VycmVudEl0ZW0uX192aXNpYmxlICYmIDxDYXJkQm9keVxyXG5cdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbV9fY29udGVudCcgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IGNoaWxkcmVuICYmIDxSZWFjdC5GcmFnbWVudFxyXG5cdFx0XHRcdGtleT17IGByZXBlYXRlci1jb21wb25lbnRfX2l0ZW1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHtcclxuXHRcdFx0XHRcdGN1cnJlbnRJdGVtLFxyXG5cdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW06IGRhdGEgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIGRhdGEsIGluZGV4IClcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0XHR7ICEgY2hpbGRyZW4gJiYgJ1NldCB1cCB5b3VyIFJlcGVhdGVyIFRlbXBsYXRlLCBwbGVhc2UuJyB9XHJcblx0XHQ8L0NhcmRCb2R5PiB9XHJcblx0PC9DYXJkPjtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0aGVscFNvdXJjZSxcclxuXHRcdGhlbHBWaXNpYmxlLFxyXG5cdFx0aGVscEtleSxcclxuXHR9ID0gaGVscDtcclxuXHJcblx0Y29uc3QgaXNWaXNpYmxlSGVscCA9IGhlbHBWaXNpYmxlKCBpdGVtc0RhdGEgKSAmJiBoZWxwU291cmNlICYmIGhlbHBTb3VyY2VbIGhlbHBLZXkgXTtcclxuXHJcblx0cmV0dXJuIDxkaXZcclxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxyXG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXInIH1cclxuXHQ+XHJcblx0XHR7IGlzVmlzaWJsZUhlbHAgJiYgPHA+eyBoZWxwU291cmNlWyBoZWxwS2V5IF0ubGFiZWwgfTwvcD4gfVxyXG5cclxuXHRcdHsgMCA8IGl0ZW1zRGF0YS5sZW5ndGggJiYgPFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgaXNTYWZlRGVsZXRpbmcgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHNldFNhZmVEZWxldGluZyB9XHJcblx0XHQvPiB9XHJcblx0XHR7IGl0ZW1zRGF0YS5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gUmVwZWF0ZXJJdGVtKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICk7XHJcblx0XHR9ICkgfVxyXG5cdFx0eyAxIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLWNsZWFyJ1xyXG5cdFx0XHRsYWJlbD17IF9fKCAnU2FmZSBkZWxldGluZycgKSB9XHJcblx0XHRcdGNoZWNrZWQ9eyBpc1NhZmVEZWxldGluZyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cclxuXHRcdC8+IH1cclxuXHRcdDxCdXR0b25cclxuXHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0b25DbGljaz17ICgpID0+IGFkZE5ld0l0ZW0oIG5ld0l0ZW0gKSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgYWRkTmV3QnV0dG9uTGFiZWwgfVxyXG5cdFx0PC9CdXR0b24+XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlcldpdGhTdGF0ZTsiLCJjb25zdCB7IGlzRW1wdHkgfSA9IHdpbmRvdy5sb2Rhc2g7XHJcblxyXG4vKipcclxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3QgeyB3aXRoSW5zdGFuY2VJZCB9ID0gd2luZG93LndwLmNvbXBvc2U7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCBCYXNlQ29udHJvbCA9IHdpbmRvdy53cC5jb21wb25lbnRzLkJhc2VDb250cm9sO1xyXG5cclxuZnVuY3Rpb24gR3JvdXBlZFNlbGVjdENvbnRyb2woIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlbHAsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBpbnN0YW5jZUlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgbGFiZWwsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBtdWx0aXBsZSA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgb25DaGFuZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBvcHRpb25zID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHQgICBjbGFzc05hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHQgICB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGhpZGVMYWJlbEZyb21WaXNpb24sXHJcblx0XHRcdFx0XHRcdFx0ICAgfSApIHtcclxuXHRjb25zdCBpZCA9IGBpbnNwZWN0b3Itc2VsZWN0LWNvbnRyb2wtJHsgaW5zdGFuY2VJZCB9YDtcclxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCBldmVudCApID0+IHtcclxuXHRcdG9uQ2hhbmdlKCBldmVudC50YXJnZXQudmFsdWUgKTtcclxuXHR9O1xyXG5cclxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmV0dXJuICEgaXNFbXB0eSggb3B0aW9ucyApICYmIChcclxuXHRcdDxCYXNlQ29udHJvbCBsYWJlbD17IGxhYmVsIH0gaGlkZUxhYmVsRnJvbVZpc2lvbj17IGhpZGVMYWJlbEZyb21WaXNpb24gfSBpZD17IGlkIH0gaGVscD17IGhlbHAgfVxyXG5cdFx0XHRcdFx0IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9PlxyXG5cdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0aWQ9eyBpZCB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1zZWxlY3QtY29udHJvbF9faW5wdXRcIlxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0YXJpYS1kZXNjcmliZWRieT17ICEhIGhlbHAgPyBgJHsgaWQgfV9faGVscGAgOiB1bmRlZmluZWQgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGxhYmVsIH0tcGxhY2Vob2xkZXJgIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYGAgfVxyXG5cdFx0XHRcdD57IGAtLWAgfTwvb3B0aW9uPlxyXG5cdFx0XHRcdHsgb3B0aW9ucy5tYXAoICggb3B0R3JvdXAsIGdyb3VwSW5kZXggKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gISBpc0VtcHR5KCBvcHRHcm91cC52YWx1ZXMgKSAmJiA8b3B0Z3JvdXBcclxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IG9wdEdyb3VwLmxhYmVsIH0tJHsgZ3JvdXBJbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgb3B0R3JvdXAubGFiZWwgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IG9wdEdyb3VwLnZhbHVlcy5tYXAoICggb3B0aW9uLCBpbmRleCApID0+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgYCR7IG9wdGlvbi52YWx1ZSB9LSR7IGluZGV4IH0tJHsgZ3JvdXBJbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IG9wdGlvbi52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IG9wdGlvbi5kaXNhYmxlZCB9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0eyBvcHRpb24ubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPixcclxuXHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHQ8L29wdGdyb3VwPjtcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0KTtcclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhJbnN0YW5jZUlkKCBHcm91cGVkU2VsZWN0Q29udHJvbCApOyIsImZ1bmN0aW9uIEhvcml6b250YWxMaW5lKCBwcm9wcyApIHtcclxuXHRyZXR1cm4gPGhyIHN0eWxlPXsgeyAuLi5wcm9wcyB9IH0vPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbExpbmU7IiwiaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSBcIi4vcHJlc2V0LWVkaXRvclwiO1xyXG5pbXBvcnQge1xyXG5cdEdsb2JhbEZpZWxkLFxyXG5cdE1hcEZpZWxkXHJcbn0gZnJvbSBcIi4vcHJlc2V0LXJlbmRlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNQcmVzZXQoIHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0LFxyXG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRwYXJzZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGV4Y2x1ZGVPcHRpb25zLFxyXG5cdFx0XHRcdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IHBvc2l0aW9uID0gJ2R5bmFtaWMnO1xyXG5cdGNvbnN0IFsgc3RhdGVWYWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCAoKSA9PiBwYXJzZVZhbHVlKCB2YWx1ZSApICk7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIG5ld1ZhbHVlLCBuYW1lICkgPT4ge1xyXG5cdFx0c2V0VmFsdWUoIHByZXYgPT4gKCB7IC4uLnByZXYsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9ICkgKTtcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGlmICggb25TYXZlUHJlc2V0ICkge1xyXG5cdFx0XHRcdG9uU2F2ZVByZXNldCggSlNPTi5zdHJpbmdpZnkoIHN0YXRlVmFsdWUgKSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH1cclxuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLmdsb2JhbF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPEdsb2JhbEZpZWxkXHJcblx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHJcblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcubWFwX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8TWFwRmllbGRcclxuXHRcdFx0a2V5PXsgYGN1cnJlbnRfZmllbGRfJHsgZGF0YS5uYW1lIH1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHRjdXJyZW50U3RhdGU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0ZGF0YT17IGRhdGEgfVxyXG5cdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxyXG5cdFx0Lz4gKSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0KCBEeW5hbWljUHJlc2V0ICk7IiwiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuZnVuY3Rpb24gd2l0aFByZXNldCggV3JhcHBlZENvbXBvbmVudCApIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gSmV0Rm9ybVByZXNldEVkaXRvciggcHJvcHMgKSB7XHJcblxyXG5cdFx0Y29uc3QgcGFyc2VWYWx1ZSA9ICgpID0+IHtcclxuXHRcdFx0bGV0IHZhbCA9IHt9O1xyXG5cclxuXHRcdFx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xyXG5cdFx0XHRcdHZhbCA9IHsgLi4ucHJvcHMudmFsdWUgfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggcHJvcHMudmFsdWUgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBwcm9wcy52YWx1ZSApIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dmFsID0gSlNPTi5wYXJzZSggcHJvcHMudmFsdWUgKTtcclxuXHRcdFx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWwgKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2ggKCBleGNlcHRpb24gKSB7XHJcblx0XHRcdFx0XHR2YWwgPSB7fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dmFsLmpldF9wcmVzZXQgPSB0cnVlO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc1Zpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XHJcblx0XHRcdHJldHVybiAoICggZGF0YS5wb3NpdGlvbiAmJiBwb3NpdGlvbiA9PT0gZGF0YS5wb3NpdGlvbiApXHJcblx0XHRcdFx0fHwgISBkYXRhLnBvc2l0aW9uIHx8ICdxdWVyeV92YXInICE9PSBjdXJyZW50U3RhdGUuZnJvbSApICYmIGlzR2xvYmFsVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGlzR2xvYmFsVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhICkgPT4ge1xyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHN3aXRjaCAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3F1ZXJ5X3Zhcic6XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0KCAncG9zdCcgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUucG9zdF9mcm9tIClcclxuXHRcdFx0XHRcdFx0XHR8fCAoICd1c2VyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS51c2VyX2Zyb20gKVxyXG5cdFx0XHRcdFx0XHRcdHx8ICggJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tIClcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoICdqZXQuZmIucHJlc2V0LmVkaXRvci5jdXN0b20uY29uZGl0aW9uJywgZmFsc2UsIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiwgY3VycmVudFN0YXRlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc0N1cnJlbnRGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCBkYXRhLnBvc2l0aW9uICYmIHBvc2l0aW9uICE9PSBkYXRhLnBvc2l0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlICYmIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc01hcEZpZWxkVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBmaWVsZCApID0+IHtcclxuXHJcblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZSAmJiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF1bIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBleGNsdWRlT3B0aW9ucyA9ICggc2VsZWN0T3B0aW9ucyApID0+IHtcclxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsgLi4uc2VsZWN0T3B0aW9ucyBdO1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goICggb3B0aW9uLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRpZiAoIHByb3BzLmV4Y2x1ZGVTb3VyY2VzICYmIHByb3BzLmV4Y2x1ZGVTb3VyY2VzLmluY2x1ZGVzKCBvcHRpb24udmFsdWUgKSApIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0XHRyZXR1cm4gb3B0aW9ucztcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50XHJcblx0XHRcdGtleT0nd3JhcHBlZC1wcmVzZXQtZWRpdG9yJ1xyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0cGFyc2VWYWx1ZT17IHBhcnNlVmFsdWUgfVxyXG5cdFx0XHRpc1Zpc2libGU9eyBpc1Zpc2libGUgfVxyXG5cdFx0XHRpc01hcEZpZWxkVmlzaWJsZT17IGlzTWFwRmllbGRWaXNpYmxlIH1cclxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHQvPjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQ7XHJcbiIsImltcG9ydCBHcm91cGVkU2VsZWN0Q29udHJvbCBmcm9tICcuLi9ncm91cGVkLXNlbGVjdC1jb250cm9sJztcclxuXHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBTZWxlY3RDb250cm9sLFxyXG5cdFx0ICBDdXN0b21TZWxlY3RDb250cm9sLFxyXG5cdFx0ICBDYXJkLFxyXG5cdFx0ICBDYXJkQm9keSxcclxuXHRcdCAgQ2FyZEhlYWRlcixcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gR2xvYmFsRmllbGQoIHtcclxuXHRcdFx0XHRcdFx0ICBkYXRhLFxyXG5cdFx0XHRcdFx0XHQgIHZhbHVlLFxyXG5cdFx0XHRcdFx0XHQgIGluZGV4LFxyXG5cdFx0XHRcdFx0XHQgIG9uQ2hhbmdlVmFsdWUsXHJcblx0XHRcdFx0XHRcdCAgaXNWaXNpYmxlLFxyXG5cdFx0XHRcdFx0XHQgIGV4Y2x1ZGVPcHRpb25zID0gb3B0aW9ucyA9PiBvcHRpb25zLFxyXG5cdFx0XHRcdFx0XHQgIHBvc2l0aW9uLFxyXG5cdFx0XHRcdFx0ICB9ICkge1xyXG5cclxuXHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XHJcblx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0cmV0dXJuICggaXNWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgcG9zaXRpb24gKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGV4Y2x1ZGVPcHRpb25zKCBkYXRhLm9wdGlvbnMgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWVbIGRhdGEubmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF2YWlsYWJsZU1hcEZpZWxkKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXNNYXBGaWVsZFZpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblx0bGV0IGN1cnJlbnRWYWwgPSBudWxsO1xyXG5cclxuXHRpZiAoICEgZmllbGRzTWFwICkge1xyXG5cdFx0ZmllbGRzTWFwID0ge307XHJcblx0fVxyXG5cclxuXHRjdXJyZW50VmFsID0gZmllbGRzTWFwWyBmaWVsZCBdO1xyXG5cclxuXHRpZiAoICEgY3VycmVudFZhbCB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIGN1cnJlbnRWYWwgKSB7XHJcblx0XHRjdXJyZW50VmFsID0ge307XHJcblx0fVxyXG5cclxuXHRjb25zdCBBdmFpbGFibGVGaWVsZFdyYXBwZXIgPSAoIHsgZmllbGQsIG5hbWUsIGluZGV4LCBmSW5kZXgsIGNoaWxkcmVuIH0gKSA9PiA8Q2FyZFxyXG5cdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0c2l6ZT17ICdleHRyYVNtYWxsJyB9XHJcblx0XHRzdHlsZT17IHsgbWFyZ2luQm90dG9tOiAnMTBweCcgfSB9XHJcblx0PlxyXG5cdFx0PENhcmRIZWFkZXI+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT0namV0LWxhYmVsLW92ZXJmbG93Jz57IGZpZWxkIH08L3NwYW4+XHJcblx0XHQ8L0NhcmRIZWFkZXI+XHJcblx0XHQ8Q2FyZEJvZHlcclxuXHRcdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cclxuXHRcdD5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHQ8L0NhcmRCb2R5PlxyXG5cdDwvQ2FyZD47XHJcblxyXG5cdHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXsgYG1hcF9maWVsZF9wcmVzZXRfJHsgZmllbGQgKyBpbmRleCB9YCB9PlxyXG5cclxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5tYXBfZmllbGRzLm1hcCggKCBkYXRhLCBmSW5kZXggKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb3BzID0geyBmaWVsZCwgbmFtZTogZGF0YS5uYW1lLCBpbmRleCwgZkluZGV4IH07XHJcblxyXG5cdFx0XHRjb25zdCB1bmlxS2V5ID0gJ2NvbnRyb2xfJyArIGZpZWxkICsgZGF0YS5uYW1lICsgaW5kZXggKyBmSW5kZXg7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XHJcblx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9BdmFpbGFibGVGaWVsZFdyYXBwZXI+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vbGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2FzZSAnY3VzdG9tX3NlbGVjdCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxDdXN0b21TZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB7IHNlbGVjdGVkSXRlbSB9ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IHNlbGVjdGVkSXRlbS5rZXk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBkYXRhLm9wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5rZXkgPT09IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPiApO1xyXG5cdFx0XHRcdGNhc2UgJ2dyb3VwZWRfc2VsZWN0JzpcclxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxyXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XHJcblx0XHRcdFx0XHRcdFx0PEdyb3VwZWRTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vbGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj4gKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApIH1cclxuXHQ8L1JlYWN0LkZyYWdtZW50PjtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFwRmllbGQoIHtcclxuXHRcdFx0XHRcdCAgIGRhdGEsXHJcblx0XHRcdFx0XHQgICB2YWx1ZSxcclxuXHRcdFx0XHRcdCAgIGluZGV4LFxyXG5cdFx0XHRcdFx0ICAgY3VycmVudFN0YXRlLFxyXG5cdFx0XHRcdFx0ICAgb25DaGFuZ2VWYWx1ZSxcclxuXHRcdFx0XHRcdCAgIGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdCAgIHBvc2l0aW9uID0gJ2dlbmVyYWwnLFxyXG5cdFx0XHRcdCAgIH0gKSB7XHJcblxyXG5cdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcclxuXHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0Y2FzZSAnY3VzdG9tX3NlbGVjdCc6XHJcblx0XHRcdHJldHVybiAoIGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Q3VzdG9tU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jdXN0b20tc2VsZWN0LWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggeyBzZWxlY3RlZEl0ZW0gfSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHNlbGVjdGVkSXRlbS5rZXk7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggdmFsdWUsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBkYXRhLm9wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5rZXkgPT09IHZhbHVlICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj4gKTtcclxuXHRcdGNhc2UgJ2dyb3VwZWRfc2VsZWN0JzpcclxuXHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxHcm91cGVkU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj4gKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0R2xvYmFsRmllbGQsXHJcblx0QXZhaWxhYmxlTWFwRmllbGQsXHJcblx0TWFwRmllbGQsXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdEJ1dHRvbigge1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdGFqYXhBcmdzID0ge30sXHJcblx0XHRcdFx0XHRcdFx0b25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRvbkxvYWRpbmcgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWUgPSAnJyxcclxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICgpID0+IHt9XHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGRlZmF1bHRWYWxpZGF0ZSA9ICgpID0+IHtcclxuXHRcdHJldHVybiBqUXVlcnkuYWpheCggeyB1cmw6IGFqYXh1cmwsIHR5cGU6ICdQT1NUJywgZGF0YTogYWpheEFyZ3MgfSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlcXVlc3QgPSAoKSA9PiB7XHJcblx0XHRvbkxvYWRpbmcoKTtcclxuXHJcblx0XHRkZWZhdWx0VmFsaWRhdGUoKVxyXG5cdFx0LmRvbmUoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnN1Y2Nlc3MgPyBvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApIDogb25GYWlsUmVxdWVzdCgpIClcclxuXHRcdC5mYWlsKCAoKSA9PiBvbkZhaWxSZXF1ZXN0KCkgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPEJ1dHRvblxyXG5cdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cclxuXHRcdGlzUHJpbWFyeVxyXG5cdFx0b25DbGljaz17IHJlcXVlc3QgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHR7IGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdHsgbGFiZWwgfVxyXG5cdDwvQnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSBcIi4vcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGVMb2FkaW5nQ2xhc3NlcyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdExvYWRpbmdCdXR0b24oIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgYWpheEFyZ3MgPSB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uU3VjY2Vzc1JlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHQgICB9ICkge1xyXG5cclxuXHRjb25zdCBbXHJcblx0XHRjbGFzc05hbWUsXHJcblx0XHRzZXRMb2FkaW5nQ2xhc3MsXHJcblx0XHRjbGVhckxvYWRpbmdDbGFzc1xyXG5cdF0gPSB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzKCk7XHJcblxyXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxyXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XHJcblx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XHJcblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgcmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRjbGVhckxvYWRpbmdDbGFzcygpO1xyXG5cdFx0XHRvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApXHJcblx0XHR9IH1cclxuXHRcdG9uRmFpbFJlcXVlc3Q9eyAoKSA9PiB7XHJcblx0XHRcdGNsZWFyTG9hZGluZ0NsYXNzKCk7XHJcblx0XHRcdG9uRmFpbFJlcXVlc3QoKTtcclxuXHRcdH0gfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0PC9SZXF1ZXN0QnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdExvYWRpbmdCdXR0b247IiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSBcIi4vcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGVWYWxpZENsYXNzZXMgfSBmcm9tIFwiLi4vaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRlQnV0dG9uKCB7XHJcblx0XHRcdFx0XHRcdFx0IGluaXRpYWxWYWxpZCxcclxuXHRcdFx0XHRcdFx0XHQgbGFiZWwsXHJcblx0XHRcdFx0XHRcdFx0IGFqYXhBcmdzID0ge30sXHJcblx0XHRcdFx0XHRcdFx0IG9uVmFsaWQgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHQgb25JbnZhbGlkID0gKCkgPT4ge30sXHJcblx0XHRcdFx0XHRcdCB9ICkge1xyXG5cclxuXHRjb25zdCBbXHJcblx0XHRjbGFzc05hbWUsXHJcblx0XHRzZXRWYWxpZENsYXNzLFxyXG5cdFx0c2V0SW52YWxpZENsYXNzLFxyXG5cdFx0c2V0TG9hZGluZ0NsYXNzXHJcblx0XSA9IHVzZVN0YXRlVmFsaWRDbGFzc2VzKCBpbml0aWFsVmFsaWQgfHwgZmFsc2UgKTtcclxuXHJcblx0Y29uc3Qgc2V0VmFsaWQgPSByZXNwb25zZSA9PiB7XHJcblx0XHRzZXRWYWxpZENsYXNzKCk7XHJcblx0XHRvblZhbGlkKCByZXNwb25zZSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldEludmFsaWQgPSAoKSA9PiB7XHJcblx0XHRzZXRJbnZhbGlkQ2xhc3MoKTtcclxuXHRcdG9uSW52YWxpZCgpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxyXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XHJcblx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XHJcblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgc2V0VmFsaWQgfVxyXG5cdFx0b25GYWlsUmVxdWVzdD17IHNldEludmFsaWQgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0PC9SZXF1ZXN0QnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVCdXR0b247IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlclJlcXVpcmVkQ29udHJvbCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpZWxkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsS2V5ID0gJ2xhYmVsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZEtleSA9ICdyZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHRjb25zdCBbIG5hbWUsIGRhdGEgXSA9IGZpZWxkO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxyXG5cdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lIH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmllbGQtbWFwX19yb3ctbGFiZWxcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fbGFiZWwnIH0+XHJcblx0XHRcdFx0XHR7ICggZGF0YS5oYXNPd25Qcm9wZXJ0eSggbGFiZWxLZXkgKSAmJiBkYXRhWyBsYWJlbEtleSBdICkgJiYgZGF0YVsgbGFiZWxLZXkgXSB9XHJcblx0XHRcdFx0XHR7ICggISBkYXRhLmhhc093blByb3BlcnR5KCBsYWJlbEtleSApICkgJiYgZGF0YSB9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdHsgKCBkYXRhLmhhc093blByb3BlcnR5KCByZXF1aXJlZEtleSApICYmIGRhdGFbIHJlcXVpcmVkS2V5IF0gKSAmJlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdmaWVsZHMtbWFwX19yZXF1aXJlZCcgfT4gKjwvc3Bhbj4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59IiwiaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gXCIuLi9ob29rcy9ob29rcy1oZWxwZXJcIjtcclxuaW1wb3J0IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzIGZyb20gXCIuLi9nYXRld2F5cy9nYXRld2F5LWFjdGlvbi1hdHRydWJpdGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWN0aW9uc0J5VHlwZSA9IHR5cGUgPT4ge1xyXG5cdGNvbnN0IFsgYWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xyXG5cclxuXHRyZXR1cm4gYWN0aW9ucy5maWx0ZXIoIGFjdGlvbiA9PiB0eXBlID09PSBhY3Rpb24udHlwZSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbGl6ZUhlbHBlciA9IG5hbWUgPT4ge1xyXG5cdHJldHVybiBuYW1lID8gd2luZG93LkpldEZCTG9jYWxpemVIZWxwZXJbIG5hbWUgXSA6IHdpbmRvdy5KZXRGQkxvY2FsaXplSGVscGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkJ5VHlwZUxpc3QgPSAoIGFjdGlvblR5cGUsIHdpdGhEZXNjID0gZmFsc2UgKSA9PiB7XHJcblx0cmV0dXJuIGdldEFjdGlvbnNCeVR5cGUoIGFjdGlvblR5cGUgKS5tYXAoIGFjdGlvbiA9PiB7XHJcblx0XHRjb25zdCBuZXdBY3Rpb24gPSB7XHJcblx0XHRcdHZhbHVlOiBhY3Rpb24uaWQsXHJcblx0XHRcdGxhYmVsOiBmcm9tTG9jYWxpemVIZWxwZXIoICdnZXRBY3Rpb25MYWJlbCcgKSggYWN0aW9uLnR5cGUgKSxcclxuXHRcdH07XHJcblx0XHRpZiAoIHdpdGhEZXNjICkge1xyXG5cdFx0XHRuZXdBY3Rpb24ubGFiZWwgKz0gYCAoJHsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH0pYFxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBuZXdBY3Rpb247XHJcblx0fSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGlvblNldHRpbmdzID0gYWN0aW9uSWQgPT4ge1xyXG5cdGNvbnN0IFsgYWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xyXG5cdGNvbnN0IGFjdGlvbiA9IGFjdGlvbnMuZmluZCggYWN0aW9uID0+IGFjdGlvbklkID09PSBhY3Rpb24uaWQgKTtcclxuXHJcblx0cmV0dXJuICggYWN0aW9uICYmIGFjdGlvbi5zZXR0aW5ncyApID8gYWN0aW9uLnNldHRpbmdzIDogZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29udmVydExpc3RUb0ZpZWxkc01hcCA9IHNvdXJjZSA9PiB7XHJcblx0cmV0dXJuIHNvdXJjZS5tYXAoIGl0ZW0gPT4ge1xyXG5cdFx0Y29uc3QgaWQgPSBpdGVtLnZhbHVlO1xyXG5cdFx0ZGVsZXRlIGl0ZW0udmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuIFsgaWQsIGl0ZW0gXTtcclxuXHR9ICk7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0IGZyb20gXCIuL2FjdGlvbi13cmFwcGVyXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRBY3Rpb24oIGFjdGlvblR5cGUsIGFjdGlvbkluc3RhbmNlICkge1xyXG5cdHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgPSB3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zIHx8IHt9O1xyXG5cdHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnNbIGFjdGlvblR5cGUgXSA9IHdpdGhBY3Rpb25Mb2NhbGl6ZVNjcmlwdCggYWN0aW9uVHlwZSwgYWN0aW9uSW5zdGFuY2UgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBmcm9tTG9jYWxpemVIZWxwZXIgfSBmcm9tIFwiLi9hY3Rpb24taGVscGVyXCI7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQoIGFjdGlvblR5cGUsIEFjdGlvbkluc3RhbmNlICkge1xyXG5cdGNvbnN0IGxvY2FsaXplZERhdGEgPSBmcm9tTG9jYWxpemVIZWxwZXIoICdnZXRMb2NhbGl6ZWRGdWxsUGFjaycgKSggYWN0aW9uVHlwZSApO1xyXG5cclxuXHRyZXR1cm4gcHJvcHMgPT4ge1xyXG5cdFx0Y29uc3Qgb25DaGFuZ2VTZXR0aW5nID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0XHRwcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRcdFsga2V5IF06IHZhbHVlLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGdldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZSB9ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdFx0aWYgKCB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZUZpZWxkLCB2YWx1ZSB9ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBmaWVsZHNNYXAgPSB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdLFxyXG5cdFx0XHRcdFsgbmFtZUZpZWxkIF06IHZhbHVlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIHNvdXJjZSBdOiBmaWVsZHNNYXAsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBhZGRpdGlvbmFsUHJvcHMgPSB7IG9uQ2hhbmdlU2V0dGluZywgZ2V0TWFwRmllbGQsIHNldE1hcEZpZWxkIH07XHJcblx0XHRjb25zdCByZXN1bHRQcm9wcyA9IHsgLi4ucHJvcHMsIC4uLmxvY2FsaXplZERhdGEsIC4uLmFkZGl0aW9uYWxQcm9wcyB9O1xyXG5cclxuXHRcdHJldHVybiA8PlxyXG5cdFx0XHQ8QWN0aW9uSW5zdGFuY2UgeyAuLi5yZXN1bHRQcm9wcyB9IC8+XHJcblx0XHRcdHsgYXBwbHlGaWx0ZXJzKCBgamV0LmZiLnJlbmRlci5hY3Rpb24uJHsgYWN0aW9uVHlwZSB9YCwgPD48Lz4sIHJlc3VsdFByb3BzICkgfVxyXG5cdFx0PC8+XHJcblx0fTtcclxufSIsIlxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IgPSAoIGJsb2NrUGFyc2VyRnVuYyApID0+IHtcclxuXHRjb25zdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciA9ICggYmxvY2tzICkgPT4ge1xyXG5cclxuXHRcdGJsb2NrcyA9IGJsb2NrcyB8fCB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xyXG5cclxuXHRcdGJsb2Nrcy5tYXAoIGJsb2NrID0+IHtcclxuXHRcdFx0YmxvY2tQYXJzZXJGdW5jKCBibG9jayApO1xyXG5cclxuXHRcdFx0aWYgKCBibG9jay5pbm5lckJsb2Nrcy5sZW5ndGggKSB7XHJcblx0XHRcdFx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrLmlubmVyQmxvY2tzICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvcigpO1xyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtRmllbGRzQmxvY2tzID0gKCBleGNsdWRlID0gW10sIHBsYWNlaG9sZGVyID0gZmFsc2UgKSA9PiB7XHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IFtdO1xyXG5cclxuXHRsZXQgc2tpcEZpZWxkcyA9IFsgJ3N1Ym1pdCcsICdmb3JtLWJyZWFrJywgJ2hlYWRpbmcnLCAnZ3JvdXAtYnJlYWsnLCAuLi5leGNsdWRlIF07XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XHJcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXHJcblx0XHRcdCYmIGJsb2NrLmF0dHJpYnV0ZXMubmFtZVxyXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXHJcblx0XHQpIHtcclxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKCB7XHJcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxyXG5cdFx0XHRcdG5hbWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdFx0dmFsdWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIHBsYWNlaG9sZGVyXHJcblx0XHQ/IFsgeyB2YWx1ZTogJycsIGxhYmVsOiBwbGFjZWhvbGRlciB9LCAuLi5mb3JtRmllbGRzIF1cclxuXHRcdDogZm9ybUZpZWxkcztcclxufVxyXG5cclxuY29uc3QgZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQgPSAoIHBsYWNlaG9sZGVyID0gZmFsc2UgKSA9PiB7XHJcblxyXG5cdGNvbnN0IHNraXBGaWVsZHMgPSBbICdzdWJtaXQnLCAnZm9ybS1icmVhaycsICdoZWFkaW5nJywgJ2dyb3VwLWJyZWFrJyBdO1xyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBbXTtcclxuXHJcblx0Y29uc3QgY3VycmVudCA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9jaygpO1xyXG5cclxuXHRpZiAoIG51bGwgPT09IGN1cnJlbnQgKSB7XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xyXG5cdFx0aWYgKCBibG9jay5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxyXG5cdFx0XHQmJiBjdXJyZW50LmNsaWVudElkICE9PSBibG9jay5jbGllbnRJZFxyXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXHJcblx0XHQpIHtcclxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKCB7XHJcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxyXG5cdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzLmxhYmVsIHx8IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHR2YWx1ZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gcGxhY2Vob2xkZXJcclxuXHRcdD8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxyXG5cdFx0OiBmb3JtRmllbGRzO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzID0gKCBleGNsdWRlID0gW10gKSA9PiB7XHJcblx0bGV0IGZpZWxkcyA9IFtdO1xyXG5cdGNvbnN0IGJsb2NrcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIGV4Y2x1ZGUgKTtcclxuXHJcblx0aWYgKCBibG9ja3MgKSB7XHJcblx0XHRibG9ja3MuZm9yRWFjaCggaXRlbSA9PiBmaWVsZHMucHVzaCggaXRlbS5uYW1lICkgKTtcclxuXHR9XHJcblx0cmV0dXJuIGZpZWxkcztcclxufVxyXG5cclxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nID0gKCBibG9ja05hbWUgKSA9PiB7XHJcblx0Y29uc3QgZmllbGRzID0gZ2V0QXZhaWxhYmxlRmllbGRzKCBbIGJsb2NrTmFtZSBdICk7XHJcblxyXG5cdGxldCBmaWVsZHNTdHJpbmcgPSBbXTtcclxuXHRmaWVsZHMuZm9yRWFjaCggZnVuY3Rpb24gKCBpdGVtICkge1xyXG5cdFx0ZmllbGRzU3RyaW5nLnB1c2goICclRklFTEQ6OicgKyBpdGVtICsgJyUnICk7XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gX18oICdBdmFpbGFibGUgZmllbGRzOiAnICkgKyBmaWVsZHNTdHJpbmcuam9pbiggJywgJyApO1xyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0SW5uZXJCbG9ja3MgPSAoIGNsaWVudElkICkgPT4ge1xyXG5cdGNvbnN0IGJsb2NrID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9jayggY2xpZW50SWQgKTtcclxuXHRyZXR1cm4gYmxvY2sgPyBibG9jay5pbm5lckJsb2NrcyA6IFtdO1xyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtRmllbGRzQnlCbG9jayA9ICggYmxvY2tFeGNsdWRlICkgPT4ge1xyXG5cdHJldHVybiAoKSA9PiBnZXRGb3JtRmllbGRzQmxvY2tzKCBbIGJsb2NrRXhjbHVkZS5uYW1lIF0gKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7XHJcblx0Z2V0Rm9ybUZpZWxkc0J5QmxvY2ssXHJcblx0Z2V0SW5uZXJCbG9ja3MsXHJcblx0Z2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcclxuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxyXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxyXG59O1xyXG5cclxuIiwiaW1wb3J0IHtcclxuXHRmcm9tTG9jYWxpemVIZWxwZXIsXHJcblx0Z2V0QWN0aW9uU2V0dGluZ3MsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIHtcclxuXHRjb25zdCB7IGdhdGV3YXlBdHRycywgbGFiZWwgfSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb24udHlwZSApO1xyXG5cdGNvbnN0IGFjdGlvblNldHRpbmdzID0gZ2V0QWN0aW9uU2V0dGluZ3MoIGFjdGlvbi5pZCApO1xyXG5cclxuXHRjb25zdCB2YWx1ZSA9IGF0dHIgPT4ge1xyXG5cdFx0aWYgKCBhY3Rpb25TZXR0aW5nc1sgYXR0ciBdICkge1xyXG5cdFx0XHRyZXR1cm4gYWN0aW9uU2V0dGluZ3NbIGF0dHIgXTtcclxuXHRcdH1cclxuXHRcdGlmICggYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF0gJiYgYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF1bIGF0dHIgXSApIHtcclxuXHRcdFx0cmV0dXJuIGFjdGlvblNldHRpbmdzWyBhY3Rpb24udHlwZSBdWyBhdHRyIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJ05VTEwnO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxhYmVsV2l0aEF0dHJzID0gZ2F0ZXdheUF0dHJzKCkubWFwKCBhdHRyID0+ICggYCR7IGxhYmVsKCBhdHRyICkgfSAkeyB2YWx1ZSggYXR0ciApIH1gICkgKTtcclxuXHJcblx0cmV0dXJuIGxhYmVsV2l0aEF0dHJzLmpvaW4oICcsICcgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXM7IiwiZXhwb3J0IGNvbnN0IGdhdGV3YXlBdHRyID0gKCBhdHRyID0gZmFsc2UsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBkYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xyXG5cclxuXHRpZiAoICEgYXR0ciApIHtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHRpZiAoICEgZGF0YVsgYXR0ciBdICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgc291cmNlID0gZGF0YVsgYXR0ciBdO1xyXG5cclxuXHRyZXR1cm4gbmFtZSA9PiBzb3VyY2VbIG5hbWUgXSA/IHNvdXJjZVsgbmFtZSBdIDogaXNFbXB0eTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYXRld2F5TGFiZWwgPSAoIHR5cGUsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xyXG5cclxuXHRyZXR1cm4gYXR0ciA9PiBsYWJlbCggdHlwZSApID8gbGFiZWwoIHR5cGUgKVsgYXR0ciBdIDogaXNFbXB0eTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyR2F0ZXdheSA9ICggaWQsIGNhbGxiYWNrICkgPT4ge1xyXG5cdHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCA9IHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCB7fTtcclxuXHR3aW5kb3cuamV0RkJHYXRld2F5c0xpc3RbIGlkIF0gPSBjYWxsYmFjaztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJHYXRld2F5ID0gKCBpZCwgcHJvcHMgKSA9PiB7XHJcblx0aWYgKCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRjb25zdCBHYXRld2F5Q29tcG9uZW50ID0gd2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdO1xyXG5cclxuXHRyZXR1cm4gPEdhdGV3YXlDb21wb25lbnQgeyAuLi5wcm9wcyB9IC8+O1xyXG59OyIsImNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VTZWxlY3QsXHJcblx0XHQgIHVzZURpc3BhdGNoLFxyXG5cdCAgfSA9IHdwLmRhdGE7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTWV0YVN0YXRlID0gKCBrZXksIGlmRW1wdHkgPSAne30nICkgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdH0gKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGVkaXRQb3N0LFxyXG5cdFx0ICB9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0Y29uc3QgWyBtZXRhU3RhdGVWYWx1ZSwgc2V0TWV0YVN0YXRlVmFsdWUgXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhWyBrZXkgXSB8fCBpZkVtcHR5ICkgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRtZXRhOiAoIHtcclxuXHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFsga2V5IF06IEpTT04uc3RyaW5naWZ5KCBtZXRhU3RhdGVWYWx1ZSApLFxyXG5cdFx0XHR9ICksXHJcblx0XHR9ICk7XHJcblx0fSwgWyBtZXRhU3RhdGVWYWx1ZSBdICk7XHJcblxyXG5cdHJldHVybiBbIG1ldGFTdGF0ZVZhbHVlLCBzZXRNZXRhU3RhdGVWYWx1ZSBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFjdGlvbnMgPSAoIHdpdGhFZGl0UG9zdEVmZmVjdCA9IGZhbHNlICkgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdH0gKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGVkaXRQb3N0LFxyXG5cdFx0ICB9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0Y29uc3QgWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF0gPSB1c2VTdGF0ZSggSlNPTi5wYXJzZSggbWV0YS5famZfYWN0aW9ucyB8fCAnW10nICkgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIHdpdGhFZGl0UG9zdEVmZmVjdCApIHtcclxuXHRcdFx0ZWRpdFBvc3QoIHtcclxuXHRcdFx0XHRtZXRhOiAoIHtcclxuXHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRfamZfYWN0aW9uczogSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnMgKSxcclxuXHRcdFx0XHR9ICksXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9LCBbIGFjdGlvbnMgXSApO1xyXG5cclxuXHRyZXR1cm4gWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF07XHJcbn07XHJcbmNvbnN0IGluaXRDbGFzc2VzID0gWyAnamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlVmFsaWRDbGFzc2VzID0gaW5pdGlhbFZhbGlkID0+IHtcclxuXHRjb25zdCB2YWxpZENsYXNzID0gJ2lzLXZhbGlkJztcclxuXHRjb25zdCBpbnZhbGlkQ2xhc3MgPSAnaXMtaW52YWxpZCdcclxuXHJcblx0Y29uc3QgaW5pdFN0YXRlQ2xhc3NlcyA9ICgpID0+IHtcclxuXHRcdGlmICggaW5pdGlhbFZhbGlkICkge1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5pbml0Q2xhc3NlcywgdmFsaWRDbGFzcyBdO1xyXG5cdFx0fSBlbHNlIGlmICggISBpbml0aWFsVmFsaWQgKSB7XHJcblx0XHRcdHJldHVybiBbIC4uLmluaXRDbGFzc2VzLCBpbnZhbGlkQ2xhc3MgXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBbIGNsYXNzZXMsIHNldENsYXNzZXMgXSA9IHVzZVN0YXRlKCBpbml0U3RhdGVDbGFzc2VzKCkgKTtcclxuXHJcblx0Y29uc3Qgc2V0VmFsaWRDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsIHZhbGlkQ2xhc3MgXSApXHJcblx0fTtcclxuXHRjb25zdCBzZXRJbnZhbGlkQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCBpbnZhbGlkQ2xhc3MgXSApXHJcblx0fTtcclxuXHRjb25zdCBzZXRMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCAnbG9hZGluZycgXSApXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIFsgY2xhc3Nlcy5qb2luKCAnICcgKSwgc2V0VmFsaWRDbGFzcywgc2V0SW52YWxpZENsYXNzLCBzZXRMb2FkaW5nQ2xhc3MgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMgPSAoKSA9PiB7XHJcblx0Y29uc3QgWyBjbGFzc2VzLCBzZXRDbGFzc2VzIF0gPSB1c2VTdGF0ZSggWyAuLi5pbml0Q2xhc3NlcyBdICk7XHJcblxyXG5cdGNvbnN0IHNldExvYWRpbmdDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsICdsb2FkaW5nJyBdIClcclxuXHR9O1xyXG5cdGNvbnN0IGNsZWFyTG9hZGluZ0NsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggaW5pdENsYXNzZXMgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBbIGNsYXNzZXMuam9pbiggJyAnICksIHNldExvYWRpbmdDbGFzcywgY2xlYXJMb2FkaW5nQ2xhc3MgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN1Y2Nlc3NOb3RpY2UgPSAoIHRleHQsIG9wdGlvbnMgPSB7fSApID0+IHtcclxuXHRjb25zdCBbIGhhc0NvcGllZCwgc2V0SGFzQ29waWVkIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHRjb25zdCBub3RpY2VTdG9yZSA9IHVzZURpc3BhdGNoKCB3cC5ub3RpY2VzLnN0b3JlICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCBoYXNDb3BpZWQgKSB7XHJcblx0XHRcdG5vdGljZVN0b3JlLmNyZWF0ZVdhcm5pbmdOb3RpY2UoIHRleHQsIHsgdHlwZTogJ3NuYWNrYmFyJywgLi4ub3B0aW9ucyB9ICk7XHJcblx0XHR9XHJcblx0fSwgWyBoYXNDb3BpZWQgXSApO1xyXG5cclxuXHRyZXR1cm4gc2V0SGFzQ29waWVkO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpdGhKZmJNZXRhID0gKGNhbGxhYmxlKSA9PiB7XHJcblxyXG59O1xyXG4iLCJcclxuZnVuY3Rpb24gZ2xvYmFsVGFiKCB7IHNsdWcsIGVsZW1lbnQgPSAnJywgZW1wdHkgPSAnJyB9ICkge1xyXG5cdGNvbnN0IGdsb2JhbCA9IEpldEZvcm1FZGl0b3JEYXRhLmdsb2JhbF9zZXR0aW5ncztcclxuXHJcblx0aWYoICEgZ2xvYmFsICkge1xyXG5cdFx0cmV0dXJuIGVtcHR5O1xyXG5cdH1cclxuXHJcblx0aWYgKCBlbGVtZW50ICkge1xyXG5cdFx0cmV0dXJuICggZ2xvYmFsWyBzbHVnIF0gJiYgZ2xvYmFsWyBzbHVnIF1bIGVsZW1lbnQgXSApID8gZ2xvYmFsWyBzbHVnIF1bIGVsZW1lbnQgXSA6IGVtcHR5O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdsb2JhbFsgc2x1ZyBdIHx8IGVtcHR5O1xyXG59XHJcblxyXG5leHBvcnQgeyBnbG9iYWxUYWIgfTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5jbGFzcyBUb29scyB7XHJcblxyXG5cdHN0YXRpYyBnZXRMYWJlbCggbWV0YSwgYXR0cnMgKSB7XHJcblx0XHRjb25zdCBsYWJlbCA9IHt9O1xyXG5cdFx0bGFiZWwubmFtZSA9IGF0dHJzLmxhYmVsO1xyXG5cdFx0aWYgKCBhdHRycy5yZXF1aXJlZCApIHtcclxuXHRcdFx0bGFiZWwubWFyayA9IEpTT04ucGFyc2UoIG1ldGEuX2pmX2FyZ3MgKS5yZXF1aXJlZF9tYXJrIHx8ICcnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGxhYmVsO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHdpdGhQbGFjZWhvbGRlciggc291cmNlLCBsYWJlbCA9ICctLScsIHZhbHVlID0gJycgKSB7XHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHR7IGxhYmVsLCB2YWx1ZSB9LFxyXG5cdFx0XHQuLi5zb3VyY2UsXHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGlzRW1wdHlPYmplY3QoIG9iamVjdCApIHtcclxuXHRcdHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIG9iamVjdCAmJiBPYmplY3Qua2V5cyggb2JqZWN0ICkubGVuZ3RoID09PSAwO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldEZ1bmNDb25kaXRpb24oIG5hbWVGdW5jdGlvbiApIHtcclxuXHRcdHJldHVybiBuZXcgRnVuY3Rpb24oIGByZXR1cm4gd2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9uc1sgJyR7IG5hbWVGdW5jdGlvbiB9JyBdYCApO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZENvbmRpdGlvbkZvckNvbmRUeXBlKCBuYW1lLCBjYWxsYWJsZSApIHtcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zIHx8IHt9O1xyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9uc1sgbmFtZSBdID0gY2FsbGFibGU7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcGFyc2VDb25kaXRpb25zRnVuYyggc291cmNlICkge1xyXG5cdFx0Y29uc3QgdHlwZXMgPSBbXTtcclxuXHJcblx0XHRzb3VyY2UuZm9yRWFjaCggdHlwZSA9PiB7XHJcblx0XHRcdGlmICggdHlwZS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCBUb29scy5nZXRGdW5jQ29uZGl0aW9uKCB0eXBlLmNvbmRpdGlvbiApKCkoIHR5cGUudmFsdWUgKSApIHtcclxuXHRcdFx0XHRcdHR5cGVzLnB1c2goIHR5cGUgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dHlwZXMucHVzaCggdHlwZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIHR5cGVzO1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudCA9IG5hbWUgPT4ge1xyXG5cdGNvbnN0IGluaXRpYWxpemVDYWxsYmFja3NFdmVudCA9IG5ldyBFdmVudCggbmFtZSApO1xyXG5cdHJldHVybiAoKSA9PiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZW4gPSAoIG5hbWUsIGZ1bmMgKSA9PiB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZnVuYyApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVyc2lvbkNvbXBhcmUoIHZlcnNpb24xLCB2ZXJzaW9uMiwgb3BlcmF0b3IgKSB7XHJcblx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIHZlcnNpb24xICkge1xyXG5cdFx0dmVyc2lvbjEgPSArKCB2ZXJzaW9uMS5zcGxpdCggJy4nICkuam9pbiggJycgKSApO1xyXG5cdH1cclxuXHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgdmVyc2lvbjIgKSB7XHJcblx0XHR2ZXJzaW9uMiA9ICsoIHZlcnNpb24yLnNwbGl0KCAnLicgKS5qb2luKCAnJyApICk7XHJcblx0fVxyXG5cdGlmICggMCA+PSB2ZXJzaW9uMSB8fCAwID49IHZlcnNpb24yICkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnSW52YWxpZCBhcmd1bWVudHM6IHZlcnNpb24xIG9yIHZlcnNpb24yJyApO1xyXG5cdH1cclxuXHJcblx0aWYgKCBbICc+JywgJzwnLCAnPT09JywgJz09JywgJz49JywgJzw9JyBdLmluY2x1ZGVzKCBvcGVyYXRvciApICkge1xyXG5cdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggYHJldHVybiAkeyB2ZXJzaW9uMSB9ICR7IG9wZXJhdG9yIH0gJHsgdmVyc2lvbjIgfWAgKSgpO1xyXG5cdH1cclxuXHR0aHJvdyBuZXcgRXJyb3IoICdJbnZhbGlkIGFyZ3VtZW50czogb3BlcmF0b3InICk7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnZlcnRTeW1ib2xzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnRvb2xzLmNvbnZlcnRTeW1ib2xzJywge1xyXG5cdGNoZWNrQ3lyUmVnZXg6IC9b0LAt0Y/RkdGX0ZTSkdGWXS9pLFxyXG5cdGN5clJlZ2V4OiAvW9CwLdGP0ZHRl9GU0pHRll0vZ2ksXHJcblx0Y2hhcnNNYXA6IHtcclxuXHRcdCfQsCc6ICdhJywgJ9CxJzogJ2InLCAn0LInOiAndicsICfQsyc6ICdnJywgJ9C0JzogJ2QnLFxyXG5cdFx0J9C1JzogJ2UnLCAn0ZEnOiAnaW8nLCAn0LYnOiAnemgnLCAn0LcnOiAneicsICfQuCc6ICdpJyxcclxuXHRcdCfQuSc6ICdpJywgJ9C6JzogJ2snLCAn0LsnOiAnbCcsICfQvCc6ICdtJywgJ9C9JzogJ24nLFxyXG5cdFx0J9C+JzogJ28nLCAn0L8nOiAncCcsICfRgCc6ICdyJywgJ9GBJzogJ3MnLCAn0YInOiAndCcsXHJcblx0XHQn0YMnOiAndScsICfRhCc6ICdmJywgJ9GFJzogJ2toJywgJ9GGJzogJ3RzJywgJ9GHJzogJ2NoJyxcclxuXHRcdCfRiCc6ICdzaCcsICfRiSc6ICdzaGNoJywgJ9GLJzogJ3knLCAn0Y0nOiAnZScsICfRjic6ICdpdScsXHJcblx0XHQn0Y8nOiAnaWEnLCAn0ZcnOiAnaScsICfRlCc6ICdpZScsICfSkSc6ICdnJywgJ9GWJzogJ2knLFxyXG5cdH0sXHJcbn0gKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXliZUN5clRvTGF0aW4oIHN0ciApIHtcclxuXHRpZiAoIGNvbnZlcnRTeW1ib2xzLmNoZWNrQ3lyUmVnZXgudGVzdCggc3RyICkgKSB7XHJcblx0XHRzdHIgPSBzdHIucmVwbGFjZSggY29udmVydFN5bWJvbHMuY3lyUmVnZXgsIGZ1bmN0aW9uKCBtYXRjaCApIHtcclxuXHJcblx0XHRcdGlmICggdW5kZWZpbmVkID09PSBjb252ZXJ0U3ltYm9scy5jaGFyc01hcFsgbWF0Y2ggXSApIHtcclxuXHRcdFx0XHRyZXR1cm4gJyc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBjb252ZXJ0U3ltYm9scy5jaGFyc01hcFsgbWF0Y2ggXTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzdHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb252ZXJ0ZWROYW1lKCB2YWx1ZVRvQ2hhbmdlICkge1xyXG5cdHZhciByZWdleCA9IC9cXHMrL2csXHJcblx0XHRzbHVnICA9IHZhbHVlVG9DaGFuZ2UudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCByZWdleCwgJy0nICk7XHJcblxyXG5cdC8vIFJlcGxhY2UgYWNjZW50c1xyXG5cdHNsdWcgPSBzbHVnLm5vcm1hbGl6ZSggJ05GRCcgKS5yZXBsYWNlKCAvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIiApO1xyXG5cclxuXHQvLyBSZXBsYWNlIGN5cmlsbGljXHJcblx0c2x1ZyA9IG1heWJlQ3lyVG9MYXRpbiggc2x1ZyApO1xyXG5cclxuXHRpZiAoIDIwIDwgc2x1Zy5sZW5ndGggKSB7XHJcblx0XHRzbHVnID0gc2x1Zy5zdWJzdHIoIDAsIDIwICk7XHJcblxyXG5cdFx0aWYgKCAnLScgPT09IHNsdWcuc2xpY2UoIC0xICkgKSB7XHJcblx0XHRcdHNsdWcgPSBzbHVnLnNsaWNlKCAwLCAtMSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNsdWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFzc25hbWVzKCAuLi5hZGRpdGlvbmFsICkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IFtdXHJcblxyXG5cdGNvbnN0IHBhcnNlVmFsdWVzID0gc291cmNlID0+IHtcclxuXHRcdHNvdXJjZS5mb3JFYWNoKCBpdGVtQ2xhc3MgPT4ge1xyXG5cdFx0XHRpZiAoICEgaXRlbUNsYXNzICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGl0ZW1DbGFzcyApICkge1xyXG5cdFx0XHRcdHBhcnNlVmFsdWVzKCBpdGVtQ2xhc3MgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgaXRlbUNsYXNzICkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKCBpdGVtQ2xhc3MudHJpbSgpIClcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgaXRlbUNsYXNzICkge1xyXG5cdFx0XHRcdGZvciAoIGNvbnN0IGl0ZW1DbGFzc0tleSBpbiBpdGVtQ2xhc3MgKSB7XHJcblx0XHRcdFx0XHRpZiAoIGl0ZW1DbGFzc1sgaXRlbUNsYXNzS2V5IF0gKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKCAoaXRlbUNsYXNzS2V5ICsgXCJcIikudHJpbSgpIClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gKVxyXG5cdH07XHJcblxyXG5cdHBhcnNlVmFsdWVzKCBhZGRpdGlvbmFsICk7XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdC5qb2luKCAnICcgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWN0aW9uRmllbGRzTWFwIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXBcIjtcclxuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9uLW1vZGFsXCI7XHJcbmltcG9ydCBXcmFwcGVyUmVxdWlyZWRDb250cm9sIGZyb20gXCIuL2NvbXBvbmVudHMvd3JhcHBlci1yZXF1aXJlZC1jb250cm9sXCI7XHJcbmltcG9ydCBSZXF1ZXN0QnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IFZhbGlkYXRlQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvdmFsaWRhdGUtYnV0dG9uXCI7XHJcbmltcG9ydCBhZGRBY3Rpb24gZnJvbSBcIi4vaGVscGVycy9hY3Rpb25zL2FjdGlvbi1tYW5hZ2VyXCI7XHJcbmltcG9ydCBUb29scywge1xyXG5cdGNsYXNzbmFtZXMsXHJcblx0ZXZlbnQsXHJcblx0Z2V0Q29udmVydGVkTmFtZSxcclxuXHRsaXN0ZW4sXHJcblx0bWF5YmVDeXJUb0xhdGluLFxyXG5cdHZlcnNpb25Db21wYXJlLFxyXG59IGZyb20gXCIuL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IER5bmFtaWNQcmVzZXQgZnJvbSBcIi4vY29tcG9uZW50cy9wcmVzZXRzL2R5bmFtaWMtcHJlc2V0XCI7XHJcbmltcG9ydCBKZXRGaWVsZHNNYXBDb250cm9sIGZyb20gXCIuLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXBcIjtcclxuaW1wb3J0IEZpZWxkV2l0aFByZXNldCBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC13aXRoLXByZXNldFwiO1xyXG5pbXBvcnQge1xyXG5cdEdsb2JhbEZpZWxkLFxyXG5cdEF2YWlsYWJsZU1hcEZpZWxkLFxyXG5cdE1hcEZpZWxkLFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtcmVuZGVyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcsXHJcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGb3JtRmllbGRzQnlCbG9jayxcclxuXHRnZXRJbm5lckJsb2NrcyxcclxufSBmcm9tIFwiLi9oZWxwZXJzL2Jsb2Nrcy9ibG9ja3MtaGVscGVyXCI7XHJcbmltcG9ydCB7XHJcblx0Z2F0ZXdheUF0dHIsXHJcblx0Z2F0ZXdheUxhYmVsLFxyXG5cdHJlZ2lzdGVyR2F0ZXdheSxcclxuXHRyZW5kZXJHYXRld2F5LFxyXG59IGZyb20gXCIuL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1oZWxwZXJcIjtcclxuaW1wb3J0IHtcclxuXHR1c2VBY3Rpb25zLFxyXG5cdHVzZU1ldGFTdGF0ZSxcclxuXHR1c2VTdGF0ZVZhbGlkQ2xhc3NlcyxcclxuXHR1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzLFxyXG5cdHVzZVN1Y2Nlc3NOb3RpY2UsXHJcbn0gZnJvbSBcIi4vaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXJcIjtcclxuaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC13cmFwcGVyXCI7XHJcbmltcG9ydCBNYWNyb3NJbnNlcnRlciBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9tYWNyb3MtaW5zZXJ0ZXJcIjtcclxuaW1wb3J0IFJlcGVhdGVyV2l0aFN0YXRlIGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRzL3JlcGVhdGVyLXdpdGgtc3RhdGVcIjtcclxuaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSBcIi4vY29tcG9uZW50cy9wcmVzZXRzL3ByZXNldC1lZGl0b3JcIjtcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHMsXHJcblx0RmllbGRDb250cm9sLFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLWNvbnRyb2xcIjtcclxuaW1wb3J0IFBsYWNlaG9sZGVyTWVzc2FnZSBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZVwiO1xyXG5pbXBvcnQgQWN0aW9uTWVzc2FnZXMgZnJvbSBcIi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tZXNzYWdlc1wiO1xyXG5pbXBvcnQgSG9yaXpvbnRhbExpbmUgZnJvbSBcIi4vY29tcG9uZW50cy9ob3Jpem9udGFsLWxpbmVcIjtcclxuaW1wb3J0IFJlcXVlc3RMb2FkaW5nQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVxdWVzdC1sb2FkaW5nLWJ1dHRvblwiO1xyXG5pbXBvcnQge1xyXG5cdGFjdGlvbkJ5VHlwZUxpc3QsXHJcblx0Y29udmVydExpc3RUb0ZpZWxkc01hcCxcclxuXHRmcm9tTG9jYWxpemVIZWxwZXIsXHJcblx0Z2V0QWN0aW9uU2V0dGluZ3MsXHJcbn0gZnJvbSBcIi4vaGVscGVycy9hY3Rpb25zL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzIGZyb20gXCIuL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xyXG5pbXBvcnQgeyBnbG9iYWxUYWIgfSBmcm9tIFwiLi9oZWxwZXJzL3NldHRpbmdzL2hlbHBlclwiO1xyXG5pbXBvcnQgRmllbGRTZXR0aW5nc1dyYXBwZXIgZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC1zZXR0aW5ncy13cmFwcGVyJztcclxuaW1wb3J0IEdyb3VwZWRTZWxlY3RDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9ncm91cGVkLXNlbGVjdC1jb250cm9sJztcclxuaW1wb3J0IHtcclxuXHRnZXRCbG9ja0NvbnRyb2xzLFxyXG59IGZyb20gJy4vY29tcG9uZW50cy9maWVsZHMvY29udHJvbHMnO1xyXG5cclxuLy8gSkZCQ29tcG9uZW50c1xyXG53aW5kb3cuSmV0RkJDb21wb25lbnRzID0ge1xyXG5cdEFjdGlvbkZpZWxkc01hcCxcclxuXHRBY3Rpb25Nb2RhbCxcclxuXHRSZXF1ZXN0QnV0dG9uLFxyXG5cdFZhbGlkYXRlQnV0dG9uLFxyXG5cdFJlcXVlc3RMb2FkaW5nQnV0dG9uLFxyXG5cdFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXHJcblx0RHluYW1pY1ByZXNldCxcclxuXHRKZXRGaWVsZHNNYXBDb250cm9sLFxyXG5cdEZpZWxkV2l0aFByZXNldCxcclxuXHRHbG9iYWxGaWVsZCxcclxuXHRBdmFpbGFibGVNYXBGaWVsZCxcclxuXHRNYXBGaWVsZCxcclxuXHRGaWVsZFdyYXBwZXIsXHJcblx0TWFjcm9zSW5zZXJ0ZXIsXHJcblx0UmVwZWF0ZXJXaXRoU3RhdGUsXHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzLFxyXG5cdEZpZWxkQ29udHJvbCxcclxuXHRQbGFjZWhvbGRlck1lc3NhZ2UsXHJcblx0SG9yaXpvbnRhbExpbmUsXHJcblx0RmllbGRTZXR0aW5nc1dyYXBwZXIsXHJcblx0QWN0aW9uTWVzc2FnZXMsXHJcblx0R3JvdXBlZFNlbGVjdENvbnRyb2wsXHJcbn07XHJcblxyXG5cclxuLy8gSkZCRnVuY3Rpb25zXHJcbndpbmRvdy5KZXRGQkFjdGlvbnMgPSB7XHJcblx0YWRkQWN0aW9uLFxyXG5cdHdpdGhQcmVzZXQsXHJcblx0Z2V0Rm9ybUZpZWxkc0J5QmxvY2ssXHJcblx0Z2V0SW5uZXJCbG9ja3MsXHJcblx0Z2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcclxuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxyXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxyXG5cdGdhdGV3YXlBdHRyLFxyXG5cdGdhdGV3YXlMYWJlbCxcclxuXHRyZWdpc3RlckdhdGV3YXksXHJcblx0VG9vbHMsXHJcblx0ZXZlbnQsXHJcblx0bGlzdGVuLFxyXG5cdGFjdGlvbkJ5VHlwZUxpc3QsXHJcblx0Z2V0QWN0aW9uU2V0dGluZ3MsXHJcblx0ZnJvbUxvY2FsaXplSGVscGVyLFxyXG5cdHJlbmRlckdhdGV3YXksXHJcblx0Z2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMsXHJcblx0Z2xvYmFsVGFiLFxyXG5cdHZlcnNpb25Db21wYXJlLFxyXG5cdGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAsXHJcblx0bWF5YmVDeXJUb0xhdGluLFxyXG5cdGdldENvbnZlcnRlZE5hbWUsXHJcblx0Z2V0QmxvY2tDb250cm9scyxcclxuXHRjbGFzc25hbWVzLFxyXG59O1xyXG5cclxuXHJcbi8vIEpGQkhvb2tzXHJcbndpbmRvdy5KZXRGQkhvb2tzID0ge1xyXG5cdHVzZUFjdGlvbnMsXHJcblx0dXNlTWV0YVN0YXRlLFxyXG5cdHVzZVN0YXRlVmFsaWRDbGFzc2VzLFxyXG5cdHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMsXHJcblx0dXNlU3VjY2Vzc05vdGljZSxcclxufTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBYkE7QUFnQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBRUE7QUFDQTs7OztBQXBKQTtBQUNBO0FBcUpBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaktBO0FBSUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUlBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFPQTtBQUFBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFKQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQW5CQTtBQTBCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFiQTtBQW9CQTtBQUNBO0FBQ0E7QUFIQTtBQXRDQTtBQXBDQTtBQUFBO0FBbUZBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBS0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQXhFQTtBQStFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNsVEE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFHQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBS0E7QUFJQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFVQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFHQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBV0E7QUFEQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBakVBO0FBQ0E7QUEwRUE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7O0FDalJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUF2QkE7QUFDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQVJBO0FBQ0E7QUFlQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVRBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFYQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBWEE7QUFyREE7QUFvRUE7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUExREE7QUFDQTtBQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7OztBQ3JRQTtBQUVBO0FBQ0E7QUFHQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7QUNoSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFIQTtBQWNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBQUE7QUFBQTtBQUNBO0FBdUJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QTs7OztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVFBO0FBTUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQ0E7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBQ0E7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==