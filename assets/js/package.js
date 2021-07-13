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
  var _wp$components = wp.components,
      Button = _wp$components.Button,
      ButtonGroup = _wp$components.ButtonGroup,
      Modal = _wp$components.Modal;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;
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
/* harmony export */   "ControlsSettings": () => (/* binding */ ControlsSettings)
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    Flex = _wp$components.Flex,
    BaseControl = _wp$components.BaseControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
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
            onChangeValue(newVal, attrName);
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
      children = _props$children === void 0 ? [] : _props$children;
  return wp.element.createElement(BlockControls, {
    key: uniqKey('ToolBarFields-BlockControls')
  }, wp.element.createElement(ToolbarGroup, {
    key: uniqKey('ToolBarFields-ToolbarGroup')
  }, wp.element.createElement(Flex, {
    align: 'center',
    justify: 'center',
    className: 'jet-form-toggle-box'
  }, wp.element.createElement(FieldControl, _extends({
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


function FieldWrapper(_ref) {
  var attributes = _ref.attributes,
      uniqKey = _ref.editProps.uniqKey,
      children = _ref.children,
      _ref$wrapClasses = _ref.wrapClasses,
      wrapClasses = _ref$wrapClasses === void 0 ? [] : _ref$wrapClasses,
      _ref$valueIfEmptyLabe = _ref.valueIfEmptyLabel,
      valueIfEmptyLabel = _ref$valueIfEmptyLabe === void 0 ? '' : _ref$valueIfEmptyLabe;
  var BaseControl = wp.components.BaseControl;
  var useSelect = wp.data.useSelect;
  var meta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  });
  var label = _helpers_tools__WEBPACK_IMPORTED_MODULE_0__.default.getLabel(meta, attributes);
  return wp.element.createElement(BaseControl, {
    key: uniqKey('placeHolder_block'),
    className: "jet-form-builder__field-wrap jet-form-builder-row ".concat(wrapClasses.join(' '))
  }, wp.element.createElement(BaseControl.VisualLabel, null, wp.element.createElement("div", {
    className: 'jet-form-builder__label'
  }, label.name ? label.name : valueIfEmptyLabel, attributes.required && wp.element.createElement("span", {
    className: 'jet-form-builder__required'
  }, label.mark ? label.mark : '*'))), children, wp.element.createElement(BaseControl, {
    key: 'custom_help_description',
    className: 'jet-form-builder__desc'
  }, wp.element.createElement("small", {
    className: 'components-base-control__help',
    style: {
      marginTop: '0px'
    }
  }, attributes.desc)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldWrapper);

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$components = wp.components,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    PanelBody = _wp$components.PanelBody;
var useState = wp.element.useState;

function MacrosInserter(_ref) {
  var children = _ref.children,
      fields = _ref.fields,
      onFieldClick = _ref.onFieldClick,
      customMacros = _ref.customMacros;

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
  }), showPopover && wp.element.createElement(Popover, {
    position: 'bottom left'
  }, fields.length && wp.element.createElement(PanelBody, {
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
    className: "jet-user-meta__row fields-map-control",
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
/* harmony export */   "useStateLoadingClasses": () => (/* binding */ useStateLoadingClasses)
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
  convertListToFieldsMap: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_23__.convertListToFieldsMap
}; // JFBHooks

window.JetFBHooks = {
  useActions: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useActions,
  useMetaState: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useMetaState,
  useStateValidClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useStateValidClasses,
  useStateLoadingClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__.useStateLoadingClasses
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZmllbGRzLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbi1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXNldHRpbmdzLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC13aXRoLXByZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9tYWNyb3MtaW5zZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9yZXBlYXRlci13aXRoLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9ncm91cGVkLXNlbGVjdC1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9ob3Jpem9udGFsLWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3ByZXNldHMvZHluYW1pYy1wcmVzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9yZXF1ZXN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcmVxdWVzdC1sb2FkaW5nLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvdmFsaWRhdGUtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24td3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYmxvY2tzL2Jsb2Nrcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2dhdGV3YXlzL2dhdGV3YXktYWN0aW9uLWF0dHJ1Yml0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2dhdGV3YXlzL2dhdGV3YXktaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL3NldHRpbmdzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9tYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUZXh0Q29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcblxyXG5jbGFzcyBKZXRGaWVsZHNNYXBDb250cm9sIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZpZWxkVHlwZXMgPSB0aGlzLnByb3BzLmZpZWxkVHlwZXM7XHJcblx0XHR0aGlzLnRheG9ub21pZXNMaXN0ID0gdGhpcy5wcm9wcy50YXhvbm9taWVzTGlzdDtcclxuXHRcdHRoaXMuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XHJcblx0XHR0aGlzLm1ldGFQcm9wID0gdGhpcy5wcm9wcy5tZXRhUHJvcCA/IHRoaXMucHJvcHMubWV0YVByb3AgOiAncG9zdF9tZXRhJztcclxuXHRcdHRoaXMudGVybXNQcm9wID0gdGhpcy5wcm9wcy50ZXJtc1Byb3AgPyB0aGlzLnByb3BzLnRlcm1zUHJvcCA6ICdwb3N0X3Rlcm1zJztcclxuXHRcdHRoaXMuaW5kZXggPSB0aGlzLnByb3BzLmluZGV4O1xyXG5cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0dGhpcy5iaW5kRnVuY3Rpb25zKCk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dHlwZTogdGhpcy5nZXRGaWVsZFR5cGUoIHRoaXMucHJvcHMuZmllbGRWYWx1ZSApLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGJpbmRGdW5jdGlvbnMoKSB7XHJcblx0XHR0aGlzLm9uQ2hhbmdlVHlwZSA9IHRoaXMub25DaGFuZ2VUeXBlLmJpbmQoIHRoaXMgKTtcclxuXHRcdHRoaXMub25DaGFuZ2VWYWx1ZSA9IHRoaXMub25DaGFuZ2VWYWx1ZS5iaW5kKCB0aGlzICk7XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuaWQgPSBgaW5zcGVjdG9yLXNlbGVjdC1jb250cm9sLSR7IHRoaXMuaW5kZXggfWA7XHJcblx0XHR0aGlzLnByZXBhcmVkVGF4ZXMgPSBbXTtcclxuXHRcdHRoaXMudGF4UHJlZml4ID0gJ2pldF90YXhfXyc7XHJcblxyXG5cdFx0aWYgKCAhIHRoaXMudGF4b25vbWllc0xpc3QgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLnRheG9ub21pZXNMaXN0Lmxlbmd0aDsgaSArKyApIHtcclxuXHRcdFx0dGhpcy5wcmVwYXJlZFRheGVzLnB1c2goIHtcclxuXHRcdFx0XHR2YWx1ZTogdGhpcy50YXhQcmVmaXggKyB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0udmFsdWUsXHJcblx0XHRcdFx0bGFiZWw6IHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS5sYWJlbCxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0RmllbGROYW1lKCB2YWx1ZSApIHtcclxuXHJcblx0XHRpZiAoICEgdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBmaWVsZFR5cGUgPSB0aGlzLmdldEZpZWxkVHlwZSggdmFsdWUgKTtcclxuXHJcblx0XHRpZiAoIHRoaXMudGVybXNQcm9wID09PSBmaWVsZFR5cGUgfHwgdGhpcy5tZXRhUHJvcCA9PT0gZmllbGRUeXBlICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRpc1Rlcm1Pck1ldGEoIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuICggdGhpcy50ZXJtc1Byb3AgPT09IHZhbHVlIHx8IHRoaXMubWV0YVByb3AgPT09IHZhbHVlICk7XHJcblx0fVxyXG5cclxuXHJcblx0Z2V0RmllbGRUeXBlKCB2YWx1ZSApIHtcclxuXHJcblx0XHRpZiAoICEgdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkVHlwZXMubGVuZ3RoOyBpICsrICkge1xyXG5cdFx0XHRpZiAoIHZhbHVlID09PSB0aGlzLmZpZWxkVHlwZXNbIGkgXS52YWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHZhbHVlLmluY2x1ZGVzKCB0aGlzLnRheFByZWZpeCApICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50ZXJtc1Byb3A7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubWV0YVByb3A7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSApIHtcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5maWVsZHNNYXAsXHJcblx0XHRcdFsgdGhpcy5wcm9wcy5maWVsZE5hbWUgXTogbmV3VmFsdWVcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHJcblx0b25DaGFuZ2VUeXBlKCBuZXdWYWx1ZSApIHtcclxuXHRcdGxldCB2YWwgPSB0aGlzLmdldEZpZWxkVHlwZSggbmV3VmFsdWUgKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKCB7XHJcblx0XHRcdHR5cGU6IHZhbFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGlmICggdGhpcy5pc1Rlcm1Pck1ldGEoIHZhbCApICkge1xyXG5cdFx0XHR2YWwgPSAnJztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHZhbCApO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIERpc2FibGUgcmVhc29uOiBBIHNlbGVjdCB3aXRoIGFuIG9uY2hhbmdlIHRocm93cyBhIHdhcm5pbmdcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9fcm93XCJcclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtcG9zdC1maWVsZC1jb250cm9sXCI+XHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF90eXBlXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyB0aGlzLnByb3BzLmZpZWxkTmFtZSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuc3RhdGUudHlwZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VUeXBlIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZpZWxkVHlwZXMgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTYwcHgnXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgKCB0aGlzLm1ldGFQcm9wID09PSB0aGlzLnN0YXRlLnR5cGUgKSAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF9uYW1lXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnByb3BzLmZpZWxkVmFsdWUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnMjAwcHgnIH0gfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0XHR7ICggdGhpcy50ZXJtc1Byb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLXdpdGhvdXQtbGFiZWwnXHJcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfdGF4XycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnByb3BzLmZpZWxkVmFsdWUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMucHJlcGFyZWRUYXhlcyB9XHJcblx0XHRcdFx0XHRzdHlsZT17IHsgd2lkdGg6ICcyMDBweCcgfSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcblxyXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSmV0RmllbGRzTWFwQ29udHJvbDsiLCJcclxuY29uc3Qge1xyXG5cdEJhc2VDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25GaWVsZHNNYXAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IGZpZWxkcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgbGFiZWwgPSAnW0VtcHR5IGxhYmVsXScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBjaGlsZHJlbiA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgcGxhaW5IZWxwID0gJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1c3RvbUhlbHAgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdHJldHVybiA8QmFzZUNvbnRyb2xcclxuXHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0a2V5PSdqZXRfZmllbGRzX21hcCdcclxuXHQ+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCc+XHJcblx0XHRcdHsgKCBjdXN0b21IZWxwICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXN0b21IZWxwICkgJiYgY3VzdG9tSGVscCgpIH1cclxuXHJcblx0XHRcdHsgQm9vbGVhbiggcGxhaW5IZWxwLmxlbmd0aCApICYmIDxzcGFuXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2Rlc2NyaXB0aW9uLWNvbnRyb2xzJyB9XHJcblx0XHRcdD57IHBsYWluSGVscCB9PC9zcGFuPiB9XHJcblxyXG5cdFx0XHR7IGZpZWxkcy5tYXAoICggWyBmaWVsZElkLCBmaWVsZERhdGEgXSwgaW5kZXggKSA9PiA8UmVhY3QuRnJhZ21lbnRcclxuXHRcdFx0XHRrZXk9eyBgZmllbGRfaW5fbWFwXyR7IGZpZWxkSWQgKyBpbmRleCB9YCB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGNoaWxkcmVuKCB7IGZpZWxkSWQsIGZpZWxkRGF0YSwgaW5kZXggfSApIH1cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gKSB9XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L0Jhc2VDb250cm9sPlxyXG59O1xyXG5cclxuIiwiZnVuY3Rpb24gQWN0aW9uTW9kYWwoIHtcclxuXHRcdFx0XHRcdFx0ICBvblJlcXVlc3RDbG9zZSxcclxuXHRcdFx0XHRcdFx0ICBjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0ICB0aXRsZSxcclxuXHRcdFx0XHRcdFx0ICBjbGFzc05hbWVzID0gW10sXHJcblx0XHRcdFx0XHRcdCAgb25VcGRhdGVDbGljayxcclxuXHRcdFx0XHRcdFx0ICBvbkNhbmNlbENsaWNrLFxyXG5cdFx0XHRcdFx0XHQgIHVwZGF0ZUJ0bkxhYmVsID0gJ1VwZGF0ZScsXHJcblx0XHRcdFx0XHRcdCAgdXBkYXRlQnRuUHJvcHMgPSB7fSxcclxuXHRcdFx0XHRcdFx0ICBjYW5jZWxCdG5Qcm9wcyA9IHt9LFxyXG5cdFx0XHRcdFx0XHQgIGNhbmNlbEJ0bkxhYmVsID0gJ0NhbmNlbCcsXHJcblx0XHRcdFx0XHRcdCAgZml4ZWRIZWlnaHQgPSAnJyxcclxuXHRcdFx0XHRcdCAgfSApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIEJ1dHRvbixcclxuXHRcdFx0ICBCdXR0b25Hcm91cCxcclxuXHRcdFx0ICBNb2RhbCxcclxuXHRcdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICB1c2VTdGF0ZSxcclxuXHRcdFx0ICB1c2VFZmZlY3QsXHJcblx0XHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuXHRjb25zdCBtb2RhbENsYXNzZXMgPSBbICdqZXQtZm9ybS1lZGl0LW1vZGFsJywgLi4uY2xhc3NOYW1lcyBdO1xyXG5cclxuXHRjb25zdCBbIGFjdGlvbkNsaWNrLCBzZXRBY3Rpb25DbGljayBdID0gdXNlU3RhdGUoIG51bGwgKTtcclxuXHJcblx0Y29uc3QgdXBkYXRlQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHRpZiAoIG9uVXBkYXRlQ2xpY2sgKSB7XHJcblx0XHRcdG9uVXBkYXRlQ2xpY2soKTtcclxuXHRcdH1cclxuXHRcdHNldEFjdGlvbkNsaWNrKCB0cnVlIClcclxuXHR9XHJcblx0Y29uc3QgY2FuY2VsQ2xpY2sgPSAoKSA9PiB7XHJcblx0XHRpZiAoIG9uQ2FuY2VsQ2xpY2sgKSB7XHJcblx0XHRcdG9uQ2FuY2VsQ2xpY2soKTtcclxuXHRcdH1cclxuXHRcdHNldEFjdGlvbkNsaWNrKCBmYWxzZSApO1xyXG5cdH1cclxuXHJcblx0bGV0IHN0eWxlID0ge31cclxuXHRpZiAoIGZpeGVkSGVpZ2h0ICkge1xyXG5cdFx0c3R5bGUgPSB7IGhlaWdodDogZml4ZWRIZWlnaHQgfTtcclxuXHRcdG1vZGFsQ2xhc3Nlcy5wdXNoKCAnamV0LW1vZGFsLWZpeGVkLWhlaWdodCcgKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIDxNb2RhbFxyXG5cdFx0b25SZXF1ZXN0Q2xvc2U9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRjbGFzc05hbWU9eyBtb2RhbENsYXNzZXMuam9pbiggJyAnICkgfVxyXG5cdFx0dGl0bGU9eyB0aXRsZSB9XHJcblx0XHRzdHlsZT17IHN0eWxlIH1cclxuXHQ+XHJcblx0XHR7ICEgY2hpbGRyZW4gJiYgPGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCJcclxuXHRcdD5cclxuXHRcdFx0eyAnQWN0aW9uIGNhbGxiYWNrIGlzIG5vdCBmb3VuZC4nIH1cclxuXHRcdDwvZGl2PiB9XHJcblx0XHR7IGNoaWxkcmVuICYmIDxkaXYgY2xhc3NOYW1lPSdqZXQtZm9ybS1lZGl0LW1vZGFsX193cmFwcGVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCI+XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSB9XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PEJ1dHRvbkdyb3VwXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fYWN0aW9uc1wiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB1cGRhdGVDbGljayB9XHJcblx0XHRcdFx0XHR7IC4uLnVwZGF0ZUJ0blByb3BzIH1cclxuXHRcdFx0XHQ+eyB1cGRhdGVCdG5MYWJlbCB9PC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46ICcwIDAgMCAxMHB4JyxcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b25DbGljaz17IGNhbmNlbENsaWNrIH1cclxuXHRcdFx0XHRcdHsgLi4uY2FuY2VsQnRuUHJvcHMgfVxyXG5cdFx0XHRcdD57IGNhbmNlbEJ0bkxhYmVsIH08L0J1dHRvbj5cclxuXHRcdFx0PC9CdXR0b25Hcm91cD5cclxuXHRcdDwvZGl2PiB9XHJcblx0PC9Nb2RhbD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1vZGFsOyIsImNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdFx0ICB1c2VFZmZlY3QsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5mdW5jdGlvbiBBY3Rpb25NZXNzYWdlcyggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBzZXR0aW5ncyxcclxuXHRcdFx0ICBzb3VyY2UsXHJcblx0XHRcdCAgZ2V0TWFwRmllbGQsXHJcblx0XHRcdCAgc2V0TWFwRmllbGQsXHJcblx0XHRcdCAgbWVzc2FnZXMsXHJcblx0XHRcdCAgb25DaGFuZ2VTZXR0aW5nLFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCAhIHNldHRpbmdzIHx8ICEgc2V0dGluZ3MubWVzc2FnZXMgKSB7XHJcblx0XHRcdGNvbnN0IG1lc3NhZ2VzID0ge307XHJcblxyXG5cdFx0XHRPYmplY3QuZW50cmllcyggc291cmNlLl9fbWVzc2FnZXMgKS5mb3JFYWNoKCAoIFsgdHlwZSwgZGF0YSBdICkgPT4ge1xyXG5cdFx0XHRcdG1lc3NhZ2VzWyB0eXBlIF0gPSBkYXRhLnZhbHVlO1xyXG5cdFx0XHR9IClcclxuXHJcblx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbWVzc2FnZXMsICdtZXNzYWdlcycgKTtcclxuXHRcdH1cclxuXHR9LCBbXSApO1xyXG5cclxuXHRjb25zdCBzZXRNZXNzYWdlID0gKCB2YWx1ZSwgbmFtZUZpZWxkICkgPT4ge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gJ21lc3NhZ2VzJztcclxuXHJcblx0XHRzZXRNYXBGaWVsZCggeyB2YWx1ZSwgbmFtZUZpZWxkLCBzb3VyY2UgfSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldE1lc3NhZ2UgPSBuYW1lID0+IHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXNzYWdlcyc7XHJcblxyXG5cdFx0cmV0dXJuIGdldE1hcEZpZWxkKCB7IG5hbWUsIHNvdXJjZSB9IClcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPEJhc2VDb250cm9sXHJcblx0XHRsYWJlbD17IF9fKCAnTWVzc2FnZXMgU2V0dGluZ3M6JyApIH1cclxuXHRcdGtleT0nbWVzc2FnZXNfc2V0dGluZ3NfZmllbGRzJ1xyXG5cdD5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0eyBzZXR0aW5ncy5tZXNzYWdlcyAmJiBPYmplY3QuZW50cmllcyggc2V0dGluZ3MubWVzc2FnZXMgKVxyXG5cdFx0XHRcdC5tYXAoICggWyB0eXBlLCBkYXRhIF0sIGlkICkgPT4gPGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxyXG5cdFx0XHRcdFx0XHRrZXk9eyAnbWVzc2FnZV8nICsgdHlwZSArIGlkIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgdHlwZSArIGlkIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IG1lc3NhZ2VzKCB0eXBlICkubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWVzc2FnZSggdHlwZSApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldE1lc3NhZ2UoIG5ld1ZhbHVlLCB0eXBlICkgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+LFxyXG5cdFx0XHRcdCkgfVxyXG5cclxuXHRcdDwvZGl2PlxyXG5cdDwvQmFzZUNvbnRyb2w+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25NZXNzYWdlczsiLCJmdW5jdGlvbiBQbGFjZWhvbGRlck1lc3NhZ2UoIHsgc3R5bGUsIGNoaWxkcmVuIH0gKSB7XHJcblx0Y29uc3QgcHJvcFN0eWxlID0ge1xyXG5cdFx0Zm9udFNpemU6ICcxLjVlbScsXHJcblx0XHRwYWRkaW5nOiAnMmVtJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdhbGljZWJsdWUnLFxyXG5cdFx0Li4uc3R5bGVcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPHAgc3R5bGU9eyBwcm9wU3R5bGUgfT57IGNoaWxkcmVuIH08L3A+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGFjZWhvbGRlck1lc3NhZ2U7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xzU2V0dGluZ3MgPSAoKSA9PiBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZmllbGRzLmNvbnRyb2xzJywge1xyXG5cdFwiZ2VuZXJhbFwiOiAge1xyXG5cdFx0bGFiZWw6IF9fKCAnR2VuZXJhbCcgKSxcclxuXHRcdGF0dHJzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwibGFiZWxcIixcclxuXHRcdFx0XHRcInR5cGVcIjogICAgIFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogICAgX18oIFwiRmllbGQgTGFiZWxcIiApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcIm5hbWVcIixcclxuXHRcdFx0XHRcInR5cGVcIjogICAgIFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogICAgX18oIFwiRm9ybSBmaWVsZCBuYW1lXCIgKSxcclxuXHRcdFx0XHRcImhlbHBcIjogICAgIF9fKCBcIlNob3VsZCBjb250YWluIG9ubHkgTGF0aW4gbGV0dGVycywgbnVtYmVycywgYC1gIG9yIGBfYCBjaGFycywgbm8gc3BhY2VzIG9ubHkgbG93ZXIgY2FzZVwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiZGVzY1wiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJGaWVsZCBEZXNjcmlwdGlvblwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiZGVmYXVsdFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJkeW5hbWljX3RleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6ICAgIF9fKCBcIkRlZmF1bHQgVmFsdWVcIiApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdFwidG9vbGJhclwiOiAge1xyXG5cdFx0YXR0cnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0b2dnbGVcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6ICAgIF9fKCBcIklzIFJlcXVpcmVkXCIgKSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHRcImFkdmFuY2VkXCI6IHtcclxuXHRcdGxhYmVsOiBfXyggJ0FkdmFuY2VkJyApLFxyXG5cdFx0YXR0cnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJwbGFjZWhvbGRlclwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJQbGFjZWhvbGRlclwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiYWRkX3ByZXZcIixcclxuXHRcdFx0XHRcInR5cGVcIjogICAgIFwidG9nZ2xlXCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJBZGQgUHJldiBQYWdlIEJ1dHRvblwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6ICBcInByZXZfbGFiZWxcIixcclxuXHRcdFx0XHRcInR5cGVcIjogICAgICBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6ICAgICBfXyggXCJQcmV2IFBhZ2UgQnV0dG9uIExhYmVsXCIgKSxcclxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBcImFkZF9wcmV2XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwidmlzaWJpbGl0eVwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogICAgX18oIFwiRmllbGQgVmlzaWJpbGl0eVwiICksXHJcblx0XHRcdFx0XCJ0eXBlXCI6ICAgICBcInNlbGVjdFwiLFxyXG5cdFx0XHRcdFwib3B0aW9uc1wiOiAgW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiYWxsXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRm9yIGFsbFwiICksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwibG9nZ2VkX2lkXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgbG9nZ2VkIGluIHVzZXJzXCIgKSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJub3RfbG9nZ2VkX2luXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgTk9ULWxvZ2dlZCBpbiB1c2Vyc1wiICksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiY2xhc3NfbmFtZVwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJDU1MgQ2xhc3MgTmFtZVwiICksXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn0gKSIsImltcG9ydCB7IENvbnRyb2xzU2V0dGluZ3MgfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQgRmllbGRXaXRoUHJlc2V0IGZyb20gXCIuL2ZpZWxkLXdpdGgtcHJlc2V0XCI7XHJcbmltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gXCIuLi9wcmVzZXRzL2R5bmFtaWMtcHJlc2V0XCI7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEJsb2NrQ29udHJvbHMsXHJcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIFBhbmVsQm9keSxcclxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcclxuXHRcdCAgVG9vbGJhckdyb3VwLFxyXG5cdFx0ICBGbGV4LFxyXG5cdFx0ICBCYXNlQ29udHJvbCxcclxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuZnVuY3Rpb24gRmllbGRDb250cm9sKCB7XHJcblx0XHRcdFx0XHRcdCAgIHR5cGUsXHJcblx0XHRcdFx0XHRcdCAgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHRcdFx0XHRcdCAgIGF0dHJpYnV0ZXMsXHJcblx0XHRcdFx0XHRcdCAgIGF0dHJzU2V0dGluZ3MgPSB7fSxcclxuXHRcdFx0XHRcdFx0ICAgZWRpdFByb3BzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBhdHRySGVscCA9ICgpID0+ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgYmxvY2tOYW1lID0gJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdCAgIH0gKSB7XHJcblx0Y29uc3QgY29udHJvbHMgPSBDb250cm9sc1NldHRpbmdzKCk7XHJcblxyXG5cdGlmICggISBjb250cm9sc1sgdHlwZSBdICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IGNvbnRyb2xzWyB0eXBlIF07XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IFsga2V5IF06IHZhbHVlIH0gKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBpc1ZhbGlkQ29uZGl0aW9uID0gKCBhdHRyICkgPT4ge1xyXG5cdFx0aWYgKCAhIGF0dHIuY29uZGl0aW9uICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGJsb2NrTmFtZSAmJiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgKSB7XHJcblx0XHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgJiYgYmxvY2tOYW1lICE9PSBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWVcclxuXHRcdFx0XHQmJiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUubGVuZ3RoXHJcblx0XHRcdFx0JiYgISBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUuaW5jbHVkZXMoIGJsb2NrTmFtZSApXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG9iamVjdE5vdE1hdGNoID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoICdvYmplY3QnICE9PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYXR0ciApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB7IG9wZXJhdG9yID0gJ2FuZCcsIGl0ZW1zID0ge30gfSA9IGF0dHIuY29uZGl0aW9uLmF0dHJcclxuXHJcblx0XHRcdGlmICggJ29yJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcclxuXHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyVG9Db21wYXJlIGluIGl0ZW1zICkge1xyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVDb21wYXJlID0gaXRlbXNbIGF0dHJUb0NvbXBhcmUgXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHZhbHVlQ29tcGFyZSA9PT0gYXR0cmlidXRlc1sgYXR0clRvQ29tcGFyZSBdICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggJ2FuZCcgPT09IG9wZXJhdG9yLnRvTG93ZXJDYXNlKCkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGZvciAoIGNvbnN0IGF0dHJUb0NvbXBhcmUgaW4gaXRlbXMgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggaXRlbXNbIGF0dHJUb0NvbXBhcmUgXSAhPT0gYXR0cmlidXRlc1sgYXR0clRvQ29tcGFyZSBdICkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fSkoKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0pKClcclxuXHJcblx0XHRpZiAoICEgb2JqZWN0Tm90TWF0Y2hcclxuXHRcdFx0fHwgKFxyXG5cdFx0XHRcdCdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYXR0clxyXG5cdFx0XHRcdCYmIGF0dHIuY29uZGl0aW9uLmF0dHJcclxuXHRcdFx0XHQmJiAhIGF0dHJpYnV0ZXNbIGF0dHIuY29uZGl0aW9uLmF0dHIgXVxyXG5cdFx0XHQpXHJcblx0XHRcdHx8IChcclxuXHRcdFx0XHQnc3RyaW5nJyA9PT0gdHlwZW9mIGF0dHIuY29uZGl0aW9uXHJcblx0XHRcdFx0JiYgISBhdHRyaWJ1dGVzWyBhdHRyLmNvbmRpdGlvbiBdXHJcblx0XHRcdClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIGN1cnJlbnRDb250cm9sLmF0dHJzLm1hcCggKCB7IGhlbHAgPSAnJywgYXR0ck5hbWUsIGxhYmVsLCAuLi5hdHRyIH0gKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNSZWdpc3RlckF0dHJpYnV0ZSA9ICggYXR0ck5hbWUgaW4gYXR0cmlidXRlcyApO1xyXG5cdFx0Y29uc3QgdmFsaWRDb25kaXRpb24gPSBpc1ZhbGlkQ29uZGl0aW9uKCBhdHRyICk7XHJcblx0XHRjb25zdCBpc0hpZGRlbiA9IChcclxuXHRcdFx0YXR0ck5hbWUgaW4gYXR0cnNTZXR0aW5nc1xyXG5cdFx0XHQmJiAnc2hvdycgaW4gYXR0cnNTZXR0aW5nc1sgYXR0ck5hbWUgXVxyXG5cdFx0XHQmJiBmYWxzZSA9PT0gYXR0cnNTZXR0aW5nc1sgYXR0ck5hbWUgXS5zaG93XHJcblx0XHQpO1xyXG5cclxuXHRcdGlmICggISBpc1JlZ2lzdGVyQXR0cmlidXRlIHx8ICEgdmFsaWRDb25kaXRpb24gfHwgaXNIaWRkZW4gKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCAoIGF0dHIudHlwZSApIHtcclxuXHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0cmV0dXJuIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVGV4dENvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPjtcclxuXHRcdFx0Y2FzZSAnZHluYW1pY190ZXh0JzpcclxuXHRcdFx0XHRyZXR1cm4gPEZpZWxkV2l0aFByZXNldFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tRmllbGRXaXRoUHJlc2V0YCB9XHJcblx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVGV4dENvbnRyb2xEeW5hbWljYCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0PjtcclxuXHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVNlbGVjdENvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfHwgYXR0ckhlbHAoIGF0dHJOYW1lICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBhdHRyLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+O1xyXG5cdFx0XHRjYXNlICd0b2dnbGUnOlxyXG5cdFx0XHRcdHJldHVybiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVG9nZ2xlQ29udHJvbGAgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz47XHJcblx0XHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdFx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tQmFzZUNvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LU51bWJlckNvbnRyb2xgIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIE51bWJlciggbmV3VmFsICksIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XHJcblx0XHRcdFx0XHQgICBzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0ICAgY29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxyXG5cdFx0XHRcdFx0ICAgfSB9PnsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9PC9wPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+O1xyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBHZW5lcmFsRmllbGRzKCBwcm9wcyApIHtcclxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IENvbnRyb2xzU2V0dGluZ3MoKS5nZW5lcmFsO1xyXG5cclxuXHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IGN1cnJlbnRDb250cm9sLmxhYmVsIH0ga2V5PXsgJ2pldC1mb3JtLWdlbmVyYWwtZmllbGRzJyB9PlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdnZW5lcmFsJ1xyXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1maWVsZHMtY29tcG9uZW50JyB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHRcdDxGaWVsZENvbnRyb2xcclxuXHRcdFx0dHlwZT0nY3VzdG9tX2dlbmVyYWwnXHJcblx0XHRcdGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWN1c3RvbS1maWVsZHMtY29tcG9uZW50JyB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHQ8L1BhbmVsQm9keT47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFkdmFuY2VkRmllbGRzKCBwcm9wcyApIHtcclxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IENvbnRyb2xzU2V0dGluZ3MoKS5hZHZhbmNlZDtcclxuXHJcblx0cmV0dXJuIDxQYW5lbEJvZHkgdGl0bGU9eyBjdXJyZW50Q29udHJvbC5sYWJlbCB9IGtleT17ICdqZXQtZm9ybS1hZHZhbmNlZC1maWVsZHMnIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdhZHZhbmNlZCdcclxuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWZpZWxkcy1jb21wb25lbnQnIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdjdXN0b21fYWR2YW5jZWQnXHJcblx0XHRcdGtleT17ICdqZXQtZm9ybS1hZHZhbmNlZC1jdXN0b20tZmllbGRzLWNvbXBvbmVudCcgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+XHJcblx0PC9QYW5lbEJvZHk+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb29sQmFyRmllbGRzKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgeyBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LCBjaGlsZHJlbiA9IFtdIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIDxCbG9ja0NvbnRyb2xzIGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzLUJsb2NrQ29udHJvbHMnICkgfT5cclxuXHRcdDxUb29sYmFyR3JvdXAga2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtVG9vbGJhckdyb3VwJyApIH0+XHJcblx0XHRcdDxGbGV4XHJcblx0XHRcdFx0YWxpZ249eyAnY2VudGVyJyB9XHJcblx0XHRcdFx0anVzdGlmeT17ICdjZW50ZXInIH1cclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tdG9nZ2xlLWJveCcgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHRcdFx0dHlwZT0ndG9vbGJhcidcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdqZXQtZm9ybS10b29sYmFyLWZpZWxkcy1jb21wb25lbnQnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7IGNoaWxkcmVuIH1cclxuXHRcdFx0PC9GbGV4PlxyXG5cdFx0PC9Ub29sYmFyR3JvdXA+XHJcblx0PC9CbG9ja0NvbnRyb2xzPjtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHMsXHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0RmllbGRDb250cm9sLFxyXG59OyIsImltcG9ydCB7IEZpZWxkQ29udHJvbCB9IGZyb20gJy4vZmllbGQtY29udHJvbCc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IFBhbmVsQm9keSB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpZWxkU2V0dGluZ3NXcmFwcGVyKCBwcm9wcyApIHtcclxuXHRjb25zdCB7XHJcblx0XHRcdCAgdGl0bGUsXHJcblx0XHRcdCAgY2hpbGRyZW4sXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXkgPSB2YWwgPT4gdmFsIH0sXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIDxQYW5lbEJvZHlcclxuXHRcdHRpdGxlPXsgdGl0bGUgfHwgX18oICdGaWVsZCBTZXR0aW5ncycgKSB9XHJcblx0PlxyXG5cdFx0eyBjaGlsZHJlbiB9XHJcblx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdHR5cGU9J2N1c3RvbV9zZXR0aW5ncydcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdDwvUGFuZWxCb2R5PjtcclxufSIsImltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tIFwiLi4vYWN0aW9uLW1vZGFsXCI7XHJcblxyXG5jb25zdCB7XHJcblx0UGF0aCxcclxuXHRTVkcsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIEZpZWxkV2l0aFByZXNldCgge1xyXG5cdFx0XHRcdFx0XHRcdCAgY2hpbGRyZW4gPSBudWxsLFxyXG5cdFx0XHRcdFx0XHRcdCAgTW9kYWxFZGl0b3IsXHJcblx0XHRcdFx0XHRcdFx0ICB0cmlnZ2VyQ2xhc3NlcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHQgIH0gKSB7XHJcblxyXG5cdGNvbnN0IFsgbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdGNvbnN0IGNoYW5nZU1vZGFsU3RhdGUgPSAoKSA9PiB7XHJcblx0XHRzZXRNb2RhbFN0YXRlKCBwcmV2ID0+ICEgcHJldiApO1xyXG5cdH07XHJcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsgJ2pldC1mb3JtLWR5bmFtaWMtcHJlc2V0X190cmlnZ2VyJywgLi4udHJpZ2dlckNsYXNzZXMgXS5qb2luKCAnICcgKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWR5bmFtaWMtcHJlc2V0XCJcclxuXHRcdD5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWVzIH1cclxuXHRcdFx0XHRvbkNsaWNrPXsgY2hhbmdlTW9kYWxTdGF0ZSB9XHJcblx0XHRcdD48U1ZHIHZpZXdCb3g9XCIwIDAgNTQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aFxyXG5cdFx0XHRcdGQ9XCJNNDIuNjM5NiAyNi40MzQ3QzM3Ljg2ODIgMjcuMzQzNiAzMi41NjY2IDI4LjAyNTIgMjcuMTg5NCAyOC4wMjUyQzIxLjgxMjEgMjguMDI1MiAxNi40MzQ4IDI3LjM0MzYgMTEuNzM5MSAyNi40MzQ3QzYuOTY3NzQgMjUuNDUwMiAzLjE4MDkzIDIzLjg1OTcgMC4zNzg2OCAyMS45NjYzTDAuMzc4NjggMjguMDI1MkMwLjM3ODY4IDI5LjUzOTkgMS41OTA0NiAzMS4xMzA0IDMuNzg2ODIgMzIuNDE3OUM1Ljk4MzE3IDMzLjcwNTQgOS40NjcwNCAzNC45MTcyIDEzLjYzMjUgMzUuNTk4OEMxNy43OTggMzYuMjgwNSAyMi4xMTUgMzYuODEwNiAyNy4xODk0IDM2LjgxMDZDMzIuMjYzNyAzNi44MTA2IDM2LjY1NjQgMzYuNTA3NyA0MC43NDYyIDM1LjU5ODhDNDQuODM1OSAzNC42OSA0OC4zMTk4IDMzLjcwNTQgNTAuNTE2MiAzMi40MTc5QzUyLjcxMjUgMzEuMTMwNCA1NCAyOS41Mzk5IDU0IDI4LjAyNTJMNTQgMjEuOTY2M0M1MS4xMjIgMjMuODU5NyA0Ny4zMzUyIDI1LjQ1MDIgNDIuNjM5NiAyNi40MzQ3Wk00Mi42Mzk2IDUzLjU0ODRDMzcuODY4MiA1NC41MzI5IDMyLjU2NjYgNTUuMTM4OCAyNy4xODk0IDU1LjEzODhDMjEuODEyMSA1NS4xMzg4IDE2LjQzNDggNTQuNTMyOSAxMS43MzkxIDUzLjU0ODRDNy4wNDM0OCA1Mi41NjM4IDMuMTgwOTMgNTEuMDQ5MSAwLjM3ODY4MiA0OS4xNTU2TDAuMzc4NjgyIDU1LjEzODhDMC4zNzg2ODMgNTYuNzI5MyAxLjU5MDQ2IDU4LjMxOTcgMy43ODY4MiA1OS41MzE1QzYuMzYxODYgNjAuODE5IDkuNDY3MDUgNjIuMTA2NiAxMy42MzI1IDYyLjcxMjVDMTcuNzIyMyA2My42OTcgMjIuMTE1IDY0IDI3LjE4OTQgNjRDMzIuMjYzNyA2NCAzNi42NTY0IDYzLjY5NyA0MC43NDYyIDYyLjcxMjVDNDQuODM1OSA2MS44MDM2IDQ4LjMxOTggNjAuODE5IDUwLjUxNjIgNTkuNTMxNUM1Mi43MTI1IDU3Ljk0MTEgNTQgNTYuNzI5MyA1NCA1NC44MzU5TDU0IDQ4Ljg1MjdDNTEuMTIyIDUxLjA0OTEgNDcuMzM1MiA1Mi4yNjA4IDQyLjYzOTYgNTMuNTQ4NFpNNDIuNjM5NiAzOS45OTE1QzM3Ljg2ODIgNDAuOTAwNCAzMi41NjY2IDQxLjU4MiAyNy4xODk0IDQxLjU4MkMyMS44MTIxIDQxLjU4MiAxNi40MzQ4IDQwLjkwMDQgMTEuNzM5MSAzOS45OTE1QzYuOTY3NzQgMzkuMDA3IDMuMTgwOTMgMzcuNDkyMiAwLjM3ODY4MSAzNS41OTg4TDAuMzc4NjgxIDQxLjU4MkMwLjM3ODY4MSA0My4xNzI1IDEuNTkwNDYgNDQuNjg3MiAzLjc4NjgyIDQ1Ljk3NDdDNi4zNjE4NSA0Ny4yNjIyIDkuNDY3MDUgNDguNDc0IDEzLjYzMjUgNDkuMTU1NkMxNy43MjIzIDUwLjA2NDUgMjIuMTE1IDUwLjM2NzQgMjcuMTg5NCA1MC4zNjc0QzMyLjI2MzcgNTAuMzY3NCAzNi42NTY0IDUwLjA2NDUgNDAuNzQ2MiA0OS4xNTU2QzQ0LjgzNTkgNDguMTcxMSA0OC4zMTk4IDQ3LjI2MjIgNTAuNTE2MiA0NS45NzQ3QzUyLjcxMjUgNDQuMzg0MyA1NCA0My4xNzI1IDU0IDQxLjU4Mkw1NCAzNS41OTg4QzUxLjEyMiAzNy40OTIyIDQ3LjMzNTIgMzkuMDA3IDQyLjYzOTYgMzkuOTkxNVpNNDAuNDQzMiAyLjEyMzM3QzM2LjM1MzUgMS4xMzg3OSAzMS44ODUgMC44MzU4NDggMjYuODg2NCAwLjgzNTg0OUMyMS44ODc4IDAuODM1ODQ5IDE3LjQxOTQgMS4xMzg3OSAxMy4yNTM5IDIuMTIzMzdDOS4wODgzNiAzLjEwNzk0IDUuNjgwMjIgNC4wMTY3OCAzLjQ4Mzg3IDUuMzA0M0MxLjI4NzUxIDYuNTkxODEgLTMuNDc4MmUtMDYgOC4xMDY1NCAtMy4zMzkxNmUtMDYgOS42OTdMLTIuOTU1MTNlLTA2IDE0LjA4OTdDLTIuODE2MDllLTA2IDE1LjY4MDIgMS4yODc1MiAxNy4yNzA2IDMuNDgzODcgMTguNTU4MkM2LjA1ODkxIDE5Ljc2OTkgOS4xNjQxIDIxLjA1NzUgMTMuMjUzOSAyMS42NjMzQzE3LjM0MzYgMjIuMjY5MiAyMS44MTIxIDIyLjk1MDkgMjYuODg2NCAyMi45NTA5QzMxLjk2MDcgMjIuOTUwOSAzNi4zNTM1IDIyLjk1MDkgNDAuNDQzMiAyMi4zNDVDNDQuNTMzIDIxLjczOTEgNDguMDE2OSAyMC40NTE2IDUwLjIxMzIgMTkuMTY0QzUyLjcxMjUgMTcuNTczNiA1NCAxNS45ODMxIDU0IDE0LjM5MjdMNTQgOS45OTk5NUM1NCA4LjQwOTQ4IDUyLjcxMjUgNi44MTkwMiA1MC41MTYyIDUuNjA3MjRDNDguMzE5OCA0LjM5NTQ2IDQ0LjUzMyAyLjcyOTI2IDQwLjQ0MzIgMi4xMjMzN1pcIlxyXG5cdFx0XHRcdGZpbGw9XCIjN0U4OTkzXCIvPjwvU1ZHPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0eyBtb2RhbFN0YXRlICYmIChcclxuXHRcdFx0PEFjdGlvbk1vZGFsXHJcblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cclxuXHRcdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxyXG5cdFx0XHRcdHRpdGxlPXsgJ0VkaXQgUHJlc2V0JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IG1vZGFsUHJvcHMgPT4gPE1vZGFsRWRpdG9yXHJcblx0XHRcdFx0XHR7IC4uLm1vZGFsUHJvcHMgfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0PC9BY3Rpb25Nb2RhbD5cclxuXHRcdCkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGRXaXRoUHJlc2V0OyIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vLi4vaGVscGVycy90b29sc1wiO1xyXG5cclxuZnVuY3Rpb24gRmllbGRXcmFwcGVyKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgd3JhcENsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHZhbHVlSWZFbXB0eUxhYmVsID0gJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICB9ICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdEJhc2VDb250cm9sLFxyXG5cdH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHR1c2VTZWxlY3QsXHJcblx0fSA9IHdwLmRhdGE7XHJcblxyXG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdH0gKTtcclxuXHJcblx0Y29uc3QgbGFiZWwgPSBUb29scy5nZXRMYWJlbCggbWV0YSwgYXR0cmlidXRlcyApO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJhc2VDb250cm9sIGtleT17IHVuaXFLZXkoICdwbGFjZUhvbGRlcl9ibG9jaycgKSB9XHJcblx0XHRcdFx0XHQgY2xhc3NOYW1lPXsgYGpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAgamV0LWZvcm0tYnVpbGRlci1yb3cgJHsgd3JhcENsYXNzZXMuam9pbiggJyAnICkgfWAgfT5cclxuXHRcdFx0PEJhc2VDb250cm9sLlZpc3VhbExhYmVsPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2xhYmVsJyB9PlxyXG5cdFx0XHRcdFx0eyBsYWJlbC5uYW1lID8gbGFiZWwubmFtZSA6IHZhbHVlSWZFbXB0eUxhYmVsIH1cclxuXHRcdFx0XHRcdHsgYXR0cmlidXRlcy5yZXF1aXJlZCAmJiA8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fcmVxdWlyZWQnIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWwubWFyayA/IGxhYmVsLm1hcmsgOiAnKicgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sLlZpc3VhbExhYmVsPlxyXG5cdFx0XHR7IGNoaWxkcmVuIH1cclxuXHRcdFx0PEJhc2VDb250cm9sIGtleT17ICdjdXN0b21faGVscF9kZXNjcmlwdGlvbicgfSBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZGVzYycgfT5cclxuXHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XHJcblx0XHRcdFx0XHQgICBzdHlsZT17IHsgbWFyZ2luVG9wOiAnMHB4JyB9IH0+eyBhdHRyaWJ1dGVzLmRlc2MgfTwvc21hbGw+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkV3JhcHBlcjsiLCJjb25zdCB7XHJcblx0QnV0dG9uLFxyXG5cdFBvcG92ZXIsXHJcblx0UGFuZWxCb2R5LFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBNYWNyb3NJbnNlcnRlcigge1xyXG5cdFx0XHRcdFx0XHRcdCBjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHQgZmllbGRzLFxyXG5cdFx0XHRcdFx0XHRcdCBvbkZpZWxkQ2xpY2ssXHJcblx0XHRcdFx0XHRcdFx0IGN1c3RvbU1hY3JvcyxcclxuXHRcdFx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdGNvbnN0IFsgc2hvd1BvcG92ZXIsIHNldFBvcG92ZXJTdGF0ZSBdID0gdXNlU3RhdGUoICgpID0+IGZhbHNlICk7XHJcblxyXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLWluc2VydGVyXCI+XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdGlzVGVydGlhcnlcclxuXHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRpY29uPXsgc2hvd1BvcG92ZXIgPyAnbm8tYWx0JyA6ICdhZG1pbi10b29scycgfVxyXG5cdFx0XHRsYWJlbD17ICdJbnNlcnQgbWFjcm9zJyB9XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLXRyaWdnZXJcIlxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdHNldFBvcG92ZXJTdGF0ZSggcHJldiA9PiAhIHByZXYgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0eyBzaG93UG9wb3ZlciAmJiAoXHJcblx0XHRcdDxQb3BvdmVyXHJcblx0XHRcdFx0cG9zaXRpb249eyAnYm90dG9tIGxlZnQnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgZmllbGRzLmxlbmd0aCAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0Zvcm0gRmllbGRzJyB9PlxyXG5cdFx0XHRcdFx0eyBmaWVsZHMubWFwKCBmaWVsZCA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdmaWVsZF8nICsgZmllbGQubmFtZSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25GaWVsZENsaWNrKCBmaWVsZC5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD57ICclJyArIGZpZWxkLm5hbWUgKyAnJScgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdFx0eyBjdXN0b21NYWNyb3MgJiYgPFBhbmVsQm9keSB0aXRsZT17ICdDdXN0b20gTWFjcm9zJyB9PlxyXG5cdFx0XHRcdFx0eyBjdXN0b21NYWNyb3MubWFwKCBtYWNyb3MgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnbWFjcm9zXycgKyBtYWNyb3MgfT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggbWFjcm9zIClcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD57ICclJyArIG1hY3JvcyArICclJyB9PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cclxuXHRcdFx0PC9Qb3BvdmVyPlxyXG5cdFx0KSB9XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NJbnNlcnRlcjsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEJ1dHRvbixcclxuXHRCdXR0b25Hcm91cCxcclxuXHRDYXJkLFxyXG5cdENhcmRCb2R5LFxyXG5cdENhcmRIZWFkZXIsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuXHJcbmZ1bmN0aW9uIFJlcGVhdGVyV2l0aFN0YXRlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdEl0ZW1IZWFkaW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwZWF0ZXJDbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckl0ZW1DbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRuZXdJdGVtLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWRkTmV3QnV0dG9uTGFiZWwgPSAnQWRkIE5ldycsXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0b25TYXZlSXRlbXMsXHJcblx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkFkZE5ld0l0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRvblJlbW92ZUl0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRoZWxwID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwU291cmNlOiB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscFZpc2libGU6ICgpID0+IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwS2V5OiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbICdqZXQtZm9ybS1idWlsZGVyX19yZXBlYXRlci1jb21wb25lbnQnLCAuLi5yZXBlYXRlckNsYXNzZXMgXS5qb2luKCAnICcgKTtcclxuXHRjb25zdCBpdGVtQ2xhc3NOYW1lcyA9IFsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudC1pdGVtJywgLi4ucmVwZWF0ZXJJdGVtQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cclxuXHRjb25zdCBwYXJzZWRJdGVtcyA9ICgpID0+IHtcclxuXHRcdGlmICggaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0Y29uc3QgY2xvbmVJdGVtcyA9IFsgLi4uaXRlbXMgXTtcclxuXHJcblx0XHRcdGNsb25lSXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcblx0XHRcdFx0aXRlbS5fX3Zpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGNsb25lSXRlbXM7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFsge1xyXG5cdFx0XHRcdC4uLm5ld0l0ZW0sXHJcblx0XHRcdFx0X192aXNpYmxlOiB0cnVlLFxyXG5cdFx0XHR9IF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBbIGl0ZW1zRGF0YSwgc2V0SXRlbXNEYXRhIF0gPSB1c2VTdGF0ZSggKCkgPT4gcGFyc2VkSXRlbXMoKSApO1xyXG5cclxuXHRjb25zdCBbIGlzU2FmZURlbGV0aW5nLCBzZXRTYWZlRGVsZXRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XHJcblxyXG5cdGNvbnN0IGNoYW5nZUN1cnJlbnRJdGVtID0gKCB2YWx1ZVRvU2V0LCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdHByZXZbIGluZGV4IF0gPSB7XHJcblx0XHRcdFx0Li4ucHJldlsgaW5kZXggXSxcclxuXHRcdFx0XHQuLi52YWx1ZVRvU2V0LFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5wcmV2IF07XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TYXZlRGVsZXRpbmcgPSBpbmRleCA9PiB7XHJcblx0XHRyZXR1cm4gY29uZmlybSggX18oIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIGl0ZW0gJHsgaW5kZXggKyAxIH0/YCwgJ2pldC1mb3JtLWJ1aWxkZXInICkgKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbW92ZU9wdGlvbiA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdGlzU2FmZURlbGV0aW5nICYmICEgb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgfHxcclxuXHRcdFx0b25SZW1vdmVJdGVtICYmICEgb25SZW1vdmVJdGVtKCBpbmRleCwgaXRlbXNEYXRhIClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0Y29uc3QgY2xvbmVQcmV2ID0gWyAuLi5wcmV2IF07XHJcblx0XHRcdGNsb25lUHJldi5zcGxpY2UoIGluZGV4LCAxICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gY2xvbmVQcmV2O1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgYWRkTmV3SXRlbSA9ICggdmFsdWUgKSA9PiB7XHJcblx0XHRpZiAoIG9uQWRkTmV3SXRlbSApIHtcclxuXHRcdFx0b25BZGROZXdJdGVtKCB2YWx1ZSwgaXRlbXNEYXRhICk7XHJcblx0XHR9XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4gWyAuLi5wcmV2LCB7XHJcblx0XHRcdC4uLnZhbHVlLFxyXG5cdFx0XHRfX3Zpc2libGU6IHRydWUsXHJcblx0XHR9IF0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsb25lSXRlbSA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRjb25zdCBbIGJlZm9yZSwgYWZ0ZXIgXSA9IFsgcHJldi5zbGljZSggMCwgaW5kZXggKyAxICksIHByZXYuc2xpY2UoIGluZGV4ICsgMSApIF07XHJcblx0XHRcdHJldHVybiBbIC4uLmJlZm9yZSwgbG9kYXNoLmFzc2lnbigge30sIHByZXZbIGluZGV4IF0gKSwgLi4uYWZ0ZXIgXTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdmVSZXBlYXRlckl0ZW0gPSAoIHsgb2xkSW5kZXgsIG5ld0luZGV4IH0gKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRbIHByZXZbIG5ld0luZGV4IF0sIHByZXZbIG9sZEluZGV4IF0gXSA9IFsgcHJldlsgb2xkSW5kZXggXSwgcHJldlsgbmV3SW5kZXggXSBdO1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5wcmV2IF07XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3ZlVXAgPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0bW92ZVJlcGVhdGVySXRlbSggeyBvbGRJbmRleDogaW5kZXgsIG5ld0luZGV4OiBpbmRleCAtIDEgfSApO1xyXG5cdH1cclxuXHRjb25zdCBtb3ZlRG93biA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4ICsgMSB9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpc0Rpc2FibGVkRW5kID0gKCBpbmRleCApID0+IHtcclxuXHRcdHJldHVybiAhICggaW5kZXggPCBpdGVtc0RhdGEubGVuZ3RoIC0gMSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG9nZ2xlVmlzaWJsZSA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRwcmV2WyBpbmRleCBdLl9fdmlzaWJsZSA9ICEgKCBwcmV2WyBpbmRleCBdLl9fdmlzaWJsZSApO1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5wcmV2IF07XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRjb25zdCBjbG9uZUl0ZW1zID0gWyAuLi5pdGVtc0RhdGEgXTtcclxuXHJcblx0XHRcdGlmICggb25TYXZlSXRlbXMgKSB7XHJcblx0XHRcdFx0Y2xvbmVJdGVtcy5mb3JFYWNoKCAoIGl0ZW0sIGluZGV4ICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIGNvbnN0IGl0ZW1LZXkgaW4gaXRlbSApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCBpdGVtS2V5LnN0YXJ0c1dpdGgoICdfXycgKSApIHtcclxuXHRcdFx0XHRcdFx0XHRkZWxldGUgY2xvbmVJdGVtc1sgaW5kZXggXVsgaXRlbUtleSBdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRvblNhdmVJdGVtcyggY2xvbmVJdGVtcyApO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdH0sIFsgaXNTYXZlQWN0aW9uIF0gKTtcclxuXHJcblx0Y29uc3QgZ2V0UmVwZWF0ZXJJdGVtSWQgPSBpbmRleCA9PiBgamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbV8keyBpbmRleCB9YDtcclxuXHJcblxyXG5cdGNvbnN0IFJlcGVhdGVySXRlbSA9ICggeyBjdXJyZW50SXRlbSwgaW5kZXggfSApID0+IDxDYXJkXHJcblx0XHRpc0VsZXZhdGVkPXsgdHJ1ZSB9XHJcblx0XHRjbGFzc05hbWU9eyBpdGVtQ2xhc3NOYW1lcyB9XHJcblx0XHRrZXk9eyBnZXRSZXBlYXRlckl0ZW1JZCggaW5kZXggKSB9XHJcblx0XHRpZD17IGdldFJlcGVhdGVySXRlbUlkKCBpbmRleCApIH1cclxuXHQ+XHJcblx0XHQ8Q2FyZEhlYWRlciBjbGFzc05hbWU9eyAncmVwZWF0ZXJfX2l0ZW1fX2hlYWRlcicgfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlcGVhdGVyLWl0ZW1fX2xlZnQtaGVhZGluZyc+XHJcblx0XHRcdFx0PEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9ucycgfT5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRpY29uPXsgY3VycmVudEl0ZW0uX192aXNpYmxlID8gJ25vLWFsdCcgOiAnZWRpdCcgfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gdG9nZ2xlVmlzaWJsZSggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsgISBCb29sZWFuKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0aWNvbj17ICdhcnJvdy11cC1hbHQyJyB9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlVXAoIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzRGlzYWJsZWRFbmQoIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LWRvd24tYWx0MicgfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZURvd24oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9PlxyXG5cdFx0XHRcdFx0XHRcdHsgSXRlbUhlYWRpbmcgJiYgPEl0ZW1IZWFkaW5nXHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50SXRlbT17IGN1cnJlbnRJdGVtIH1cclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKCBkYXRhLCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHR7ICEgSXRlbUhlYWRpbmcgJiYgYCMkeyBpbmRleCArIDEgfWAgfVxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8QnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBjbG9uZUl0ZW0oIGluZGV4ICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oICdDbG9uZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZU9wdGlvbiggaW5kZXggKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBfXyggJ0RlbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9CdXR0b25Hcm91cD5cclxuXHRcdDwvQ2FyZEhlYWRlcj5cclxuXHRcdHsgY3VycmVudEl0ZW0uX192aXNpYmxlICYmIDxDYXJkQm9keVxyXG5cdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbV9fY29udGVudCcgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IGNoaWxkcmVuICYmIDxSZWFjdC5GcmFnbWVudFxyXG5cdFx0XHRcdGtleT17IGByZXBlYXRlci1jb21wb25lbnRfX2l0ZW1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHtcclxuXHRcdFx0XHRcdGN1cnJlbnRJdGVtLFxyXG5cdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW06IGRhdGEgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIGRhdGEsIGluZGV4IClcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0XHR7ICEgY2hpbGRyZW4gJiYgJ1NldCB1cCB5b3VyIFJlcGVhdGVyIFRlbXBsYXRlLCBwbGVhc2UuJyB9XHJcblx0XHQ8L0NhcmRCb2R5PiB9XHJcblx0PC9DYXJkPjtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0aGVscFNvdXJjZSxcclxuXHRcdGhlbHBWaXNpYmxlLFxyXG5cdFx0aGVscEtleSxcclxuXHR9ID0gaGVscDtcclxuXHJcblx0Y29uc3QgaXNWaXNpYmxlSGVscCA9IGhlbHBWaXNpYmxlKCBpdGVtc0RhdGEgKSAmJiBoZWxwU291cmNlICYmIGhlbHBTb3VyY2VbIGhlbHBLZXkgXTtcclxuXHJcblx0cmV0dXJuIDxkaXZcclxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxyXG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXInIH1cclxuXHQ+XHJcblx0XHR7IGlzVmlzaWJsZUhlbHAgJiYgPHA+eyBoZWxwU291cmNlWyBoZWxwS2V5IF0ubGFiZWwgfTwvcD4gfVxyXG5cclxuXHRcdHsgMCA8IGl0ZW1zRGF0YS5sZW5ndGggJiYgPFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgaXNTYWZlRGVsZXRpbmcgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHNldFNhZmVEZWxldGluZyB9XHJcblx0XHQvPiB9XHJcblx0XHR7IGl0ZW1zRGF0YS5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gUmVwZWF0ZXJJdGVtKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICk7XHJcblx0XHR9ICkgfVxyXG5cdFx0eyAxIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLWNsZWFyJ1xyXG5cdFx0XHRsYWJlbD17IF9fKCAnU2FmZSBkZWxldGluZycgKSB9XHJcblx0XHRcdGNoZWNrZWQ9eyBpc1NhZmVEZWxldGluZyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cclxuXHRcdC8+IH1cclxuXHRcdDxCdXR0b25cclxuXHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0b25DbGljaz17ICgpID0+IGFkZE5ld0l0ZW0oIG5ld0l0ZW0gKSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgYWRkTmV3QnV0dG9uTGFiZWwgfVxyXG5cdFx0PC9CdXR0b24+XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlcldpdGhTdGF0ZTsiLCJjb25zdCB7IGlzRW1wdHkgfSA9IHdpbmRvdy5sb2Rhc2g7XHJcblxyXG4vKipcclxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3QgeyB3aXRoSW5zdGFuY2VJZCB9ID0gd2luZG93LndwLmNvbXBvc2U7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCBCYXNlQ29udHJvbCA9IHdpbmRvdy53cC5jb21wb25lbnRzLkJhc2VDb250cm9sO1xyXG5cclxuZnVuY3Rpb24gR3JvdXBlZFNlbGVjdENvbnRyb2woIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlbHAsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBpbnN0YW5jZUlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgbGFiZWwsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBtdWx0aXBsZSA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgb25DaGFuZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHQgICBvcHRpb25zID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHQgICBjbGFzc05hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHQgICB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGhpZGVMYWJlbEZyb21WaXNpb24sXHJcblx0XHRcdFx0XHRcdFx0ICAgfSApIHtcclxuXHRjb25zdCBpZCA9IGBpbnNwZWN0b3Itc2VsZWN0LWNvbnRyb2wtJHsgaW5zdGFuY2VJZCB9YDtcclxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCBldmVudCApID0+IHtcclxuXHRcdG9uQ2hhbmdlKCBldmVudC50YXJnZXQudmFsdWUgKTtcclxuXHR9O1xyXG5cclxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmV0dXJuICEgaXNFbXB0eSggb3B0aW9ucyApICYmIChcclxuXHRcdDxCYXNlQ29udHJvbCBsYWJlbD17IGxhYmVsIH0gaGlkZUxhYmVsRnJvbVZpc2lvbj17IGhpZGVMYWJlbEZyb21WaXNpb24gfSBpZD17IGlkIH0gaGVscD17IGhlbHAgfVxyXG5cdFx0XHRcdFx0IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9PlxyXG5cdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0aWQ9eyBpZCB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1zZWxlY3QtY29udHJvbF9faW5wdXRcIlxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0YXJpYS1kZXNjcmliZWRieT17ICEhIGhlbHAgPyBgJHsgaWQgfV9faGVscGAgOiB1bmRlZmluZWQgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGxhYmVsIH0tcGxhY2Vob2xkZXJgIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYGAgfVxyXG5cdFx0XHRcdD57IGAtLWAgfTwvb3B0aW9uPlxyXG5cdFx0XHRcdHsgb3B0aW9ucy5tYXAoICggb3B0R3JvdXAsIGdyb3VwSW5kZXggKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gISBpc0VtcHR5KCBvcHRHcm91cC52YWx1ZXMgKSAmJiA8b3B0Z3JvdXBcclxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IG9wdEdyb3VwLmxhYmVsIH0tJHsgZ3JvdXBJbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgb3B0R3JvdXAubGFiZWwgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IG9wdEdyb3VwLnZhbHVlcy5tYXAoICggb3B0aW9uLCBpbmRleCApID0+XHJcblx0XHRcdFx0XHRcdFx0PG9wdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgYCR7IG9wdGlvbi52YWx1ZSB9LSR7IGluZGV4IH0tJHsgZ3JvdXBJbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IG9wdGlvbi52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IG9wdGlvbi5kaXNhYmxlZCB9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0eyBvcHRpb24ubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdDwvb3B0aW9uPixcclxuXHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHQ8L29wdGdyb3VwPjtcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0KTtcclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhJbnN0YW5jZUlkKCBHcm91cGVkU2VsZWN0Q29udHJvbCApOyIsImZ1bmN0aW9uIEhvcml6b250YWxMaW5lKCBwcm9wcyApIHtcclxuXHRyZXR1cm4gPGhyIHN0eWxlPXsgeyAuLi5wcm9wcyB9IH0vPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbExpbmU7IiwiaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSBcIi4vcHJlc2V0LWVkaXRvclwiO1xyXG5pbXBvcnQge1xyXG5cdEdsb2JhbEZpZWxkLFxyXG5cdE1hcEZpZWxkXHJcbn0gZnJvbSBcIi4vcHJlc2V0LXJlbmRlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNQcmVzZXQoIHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0LFxyXG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRwYXJzZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGV4Y2x1ZGVPcHRpb25zLFxyXG5cdFx0XHRcdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IHBvc2l0aW9uID0gJ2R5bmFtaWMnO1xyXG5cdGNvbnN0IFsgc3RhdGVWYWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCAoKSA9PiBwYXJzZVZhbHVlKCB2YWx1ZSApICk7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIG5ld1ZhbHVlLCBuYW1lICkgPT4ge1xyXG5cdFx0c2V0VmFsdWUoIHByZXYgPT4gKCB7IC4uLnByZXYsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9ICkgKTtcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGlmICggb25TYXZlUHJlc2V0ICkge1xyXG5cdFx0XHRcdG9uU2F2ZVByZXNldCggSlNPTi5zdHJpbmdpZnkoIHN0YXRlVmFsdWUgKSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH1cclxuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLmdsb2JhbF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPEdsb2JhbEZpZWxkXHJcblx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHJcblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcubWFwX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8TWFwRmllbGRcclxuXHRcdFx0a2V5PXsgYGN1cnJlbnRfZmllbGRfJHsgZGF0YS5uYW1lIH1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHRjdXJyZW50U3RhdGU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0ZGF0YT17IGRhdGEgfVxyXG5cdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxyXG5cdFx0Lz4gKSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0KCBEeW5hbWljUHJlc2V0ICk7IiwiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuZnVuY3Rpb24gd2l0aFByZXNldCggV3JhcHBlZENvbXBvbmVudCApIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gSmV0Rm9ybVByZXNldEVkaXRvciggcHJvcHMgKSB7XHJcblxyXG5cdFx0Y29uc3QgcGFyc2VWYWx1ZSA9ICgpID0+IHtcclxuXHRcdFx0bGV0IHZhbCA9IHt9O1xyXG5cclxuXHRcdFx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xyXG5cdFx0XHRcdHZhbCA9IHsgLi4ucHJvcHMudmFsdWUgfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggcHJvcHMudmFsdWUgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBwcm9wcy52YWx1ZSApIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dmFsID0gSlNPTi5wYXJzZSggcHJvcHMudmFsdWUgKTtcclxuXHRcdFx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWwgKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2ggKCBleGNlcHRpb24gKSB7XHJcblx0XHRcdFx0XHR2YWwgPSB7fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dmFsLmpldF9wcmVzZXQgPSB0cnVlO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc1Zpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XHJcblx0XHRcdHJldHVybiAoICggZGF0YS5wb3NpdGlvbiAmJiBwb3NpdGlvbiA9PT0gZGF0YS5wb3NpdGlvbiApXHJcblx0XHRcdFx0fHwgISBkYXRhLnBvc2l0aW9uIHx8ICdxdWVyeV92YXInICE9PSBjdXJyZW50U3RhdGUuZnJvbSApICYmIGlzR2xvYmFsVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGlzR2xvYmFsVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhICkgPT4ge1xyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHN3aXRjaCAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3F1ZXJ5X3Zhcic6XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0KCAncG9zdCcgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUucG9zdF9mcm9tIClcclxuXHRcdFx0XHRcdFx0XHR8fCAoICd1c2VyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS51c2VyX2Zyb20gKVxyXG5cdFx0XHRcdFx0XHRcdHx8ICggJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tIClcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoICdqZXQuZmIucHJlc2V0LmVkaXRvci5jdXN0b20uY29uZGl0aW9uJywgZmFsc2UsIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiwgY3VycmVudFN0YXRlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc0N1cnJlbnRGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCBkYXRhLnBvc2l0aW9uICYmIHBvc2l0aW9uICE9PSBkYXRhLnBvc2l0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlICYmIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc01hcEZpZWxkVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBmaWVsZCApID0+IHtcclxuXHJcblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZSAmJiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF1bIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBleGNsdWRlT3B0aW9ucyA9ICggc2VsZWN0T3B0aW9ucyApID0+IHtcclxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsgLi4uc2VsZWN0T3B0aW9ucyBdO1xyXG5cdFx0XHRvcHRpb25zLmZvckVhY2goICggb3B0aW9uLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRpZiAoIHByb3BzLmV4Y2x1ZGVTb3VyY2VzICYmIHByb3BzLmV4Y2x1ZGVTb3VyY2VzLmluY2x1ZGVzKCBvcHRpb24udmFsdWUgKSApIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cdFx0XHRyZXR1cm4gb3B0aW9ucztcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50XHJcblx0XHRcdGtleT0nd3JhcHBlZC1wcmVzZXQtZWRpdG9yJ1xyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0cGFyc2VWYWx1ZT17IHBhcnNlVmFsdWUgfVxyXG5cdFx0XHRpc1Zpc2libGU9eyBpc1Zpc2libGUgfVxyXG5cdFx0XHRpc01hcEZpZWxkVmlzaWJsZT17IGlzTWFwRmllbGRWaXNpYmxlIH1cclxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHQvPjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQ7XHJcbiIsImltcG9ydCBHcm91cGVkU2VsZWN0Q29udHJvbCBmcm9tICcuLi9ncm91cGVkLXNlbGVjdC1jb250cm9sJztcclxuXHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBTZWxlY3RDb250cm9sLFxyXG5cdFx0ICBDdXN0b21TZWxlY3RDb250cm9sLFxyXG5cdFx0ICBDYXJkLFxyXG5cdFx0ICBDYXJkQm9keSxcclxuXHRcdCAgQ2FyZEhlYWRlcixcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gR2xvYmFsRmllbGQoIHtcclxuXHRcdFx0XHRcdFx0ICBkYXRhLFxyXG5cdFx0XHRcdFx0XHQgIHZhbHVlLFxyXG5cdFx0XHRcdFx0XHQgIGluZGV4LFxyXG5cdFx0XHRcdFx0XHQgIG9uQ2hhbmdlVmFsdWUsXHJcblx0XHRcdFx0XHRcdCAgaXNWaXNpYmxlLFxyXG5cdFx0XHRcdFx0XHQgIGV4Y2x1ZGVPcHRpb25zID0gb3B0aW9ucyA9PiBvcHRpb25zLFxyXG5cdFx0XHRcdFx0XHQgIHBvc2l0aW9uLFxyXG5cdFx0XHRcdFx0ICB9ICkge1xyXG5cclxuXHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XHJcblx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0cmV0dXJuICggaXNWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgcG9zaXRpb24gKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGV4Y2x1ZGVPcHRpb25zKCBkYXRhLm9wdGlvbnMgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWVbIGRhdGEubmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF2YWlsYWJsZU1hcEZpZWxkKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXNNYXBGaWVsZFZpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblx0bGV0IGN1cnJlbnRWYWwgPSBudWxsO1xyXG5cclxuXHRpZiAoICEgZmllbGRzTWFwICkge1xyXG5cdFx0ZmllbGRzTWFwID0ge307XHJcblx0fVxyXG5cclxuXHRjdXJyZW50VmFsID0gZmllbGRzTWFwWyBmaWVsZCBdO1xyXG5cclxuXHRpZiAoICEgY3VycmVudFZhbCB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIGN1cnJlbnRWYWwgKSB7XHJcblx0XHRjdXJyZW50VmFsID0ge307XHJcblx0fVxyXG5cclxuXHRjb25zdCBBdmFpbGFibGVGaWVsZFdyYXBwZXIgPSAoIHsgZmllbGQsIG5hbWUsIGluZGV4LCBmSW5kZXgsIGNoaWxkcmVuIH0gKSA9PiA8Q2FyZFxyXG5cdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0c2l6ZT17ICdleHRyYVNtYWxsJyB9XHJcblx0XHRzdHlsZT17IHsgbWFyZ2luQm90dG9tOiAnMTBweCcgfSB9XHJcblx0PlxyXG5cdFx0PENhcmRIZWFkZXI+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT0namV0LWxhYmVsLW92ZXJmbG93Jz57IGZpZWxkIH08L3NwYW4+XHJcblx0XHQ8L0NhcmRIZWFkZXI+XHJcblx0XHQ8Q2FyZEJvZHlcclxuXHRcdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cclxuXHRcdD5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHQ8L0NhcmRCb2R5PlxyXG5cdDwvQ2FyZD47XHJcblxyXG5cdHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXsgYG1hcF9maWVsZF9wcmVzZXRfJHsgZmllbGQgKyBpbmRleCB9YCB9PlxyXG5cclxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5tYXBfZmllbGRzLm1hcCggKCBkYXRhLCBmSW5kZXggKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb3BzID0geyBmaWVsZCwgbmFtZTogZGF0YS5uYW1lLCBpbmRleCwgZkluZGV4IH07XHJcblxyXG5cdFx0XHRjb25zdCB1bmlxS2V5ID0gJ2NvbnRyb2xfJyArIGZpZWxkICsgZGF0YS5uYW1lICsgaW5kZXggKyBmSW5kZXg7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XHJcblx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9BdmFpbGFibGVGaWVsZFdyYXBwZXI+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vbGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2FzZSAnY3VzdG9tX3NlbGVjdCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxDdXN0b21TZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB7IHNlbGVjdGVkSXRlbSB9ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IHNlbGVjdGVkSXRlbS5rZXk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBkYXRhLm9wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5rZXkgPT09IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPiApO1xyXG5cdFx0XHRcdGNhc2UgJ2dyb3VwZWRfc2VsZWN0JzpcclxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxyXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XHJcblx0XHRcdFx0XHRcdFx0PEdyb3VwZWRTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0XHRcdC8vbGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj4gKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApIH1cclxuXHQ8L1JlYWN0LkZyYWdtZW50PjtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFwRmllbGQoIHtcclxuXHRcdFx0XHRcdCAgIGRhdGEsXHJcblx0XHRcdFx0XHQgICB2YWx1ZSxcclxuXHRcdFx0XHRcdCAgIGluZGV4LFxyXG5cdFx0XHRcdFx0ICAgY3VycmVudFN0YXRlLFxyXG5cdFx0XHRcdFx0ICAgb25DaGFuZ2VWYWx1ZSxcclxuXHRcdFx0XHRcdCAgIGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdCAgIHBvc2l0aW9uID0gJ2dlbmVyYWwnLFxyXG5cdFx0XHRcdCAgIH0gKSB7XHJcblxyXG5cdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcclxuXHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0Y2FzZSAnY3VzdG9tX3NlbGVjdCc6XHJcblx0XHRcdHJldHVybiAoIGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Q3VzdG9tU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jdXN0b20tc2VsZWN0LWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggeyBzZWxlY3RlZEl0ZW0gfSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHNlbGVjdGVkSXRlbS5rZXk7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggdmFsdWUsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBkYXRhLm9wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5rZXkgPT09IHZhbHVlICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj4gKTtcclxuXHRcdGNhc2UgJ2dyb3VwZWRfc2VsZWN0JzpcclxuXHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxHcm91cGVkU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj4gKTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0R2xvYmFsRmllbGQsXHJcblx0QXZhaWxhYmxlTWFwRmllbGQsXHJcblx0TWFwRmllbGQsXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdEJ1dHRvbigge1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdGFqYXhBcmdzID0ge30sXHJcblx0XHRcdFx0XHRcdFx0b25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRvbkxvYWRpbmcgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWUgPSAnJyxcclxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICgpID0+IHt9XHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGRlZmF1bHRWYWxpZGF0ZSA9ICgpID0+IHtcclxuXHRcdHJldHVybiBqUXVlcnkuYWpheCggeyB1cmw6IGFqYXh1cmwsIHR5cGU6ICdQT1NUJywgZGF0YTogYWpheEFyZ3MgfSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlcXVlc3QgPSAoKSA9PiB7XHJcblx0XHRvbkxvYWRpbmcoKTtcclxuXHJcblx0XHRkZWZhdWx0VmFsaWRhdGUoKVxyXG5cdFx0LmRvbmUoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnN1Y2Nlc3MgPyBvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApIDogb25GYWlsUmVxdWVzdCgpIClcclxuXHRcdC5mYWlsKCAoKSA9PiBvbkZhaWxSZXF1ZXN0KCkgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPEJ1dHRvblxyXG5cdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cclxuXHRcdGlzUHJpbWFyeVxyXG5cdFx0b25DbGljaz17IHJlcXVlc3QgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHR7IGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdHsgbGFiZWwgfVxyXG5cdDwvQnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSBcIi4vcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGVMb2FkaW5nQ2xhc3NlcyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdExvYWRpbmdCdXR0b24oIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgYWpheEFyZ3MgPSB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uU3VjY2Vzc1JlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHQgICB9ICkge1xyXG5cclxuXHRjb25zdCBbXHJcblx0XHRjbGFzc05hbWUsXHJcblx0XHRzZXRMb2FkaW5nQ2xhc3MsXHJcblx0XHRjbGVhckxvYWRpbmdDbGFzc1xyXG5cdF0gPSB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzKCk7XHJcblxyXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxyXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XHJcblx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XHJcblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgcmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRjbGVhckxvYWRpbmdDbGFzcygpO1xyXG5cdFx0XHRvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApXHJcblx0XHR9IH1cclxuXHRcdG9uRmFpbFJlcXVlc3Q9eyAoKSA9PiB7XHJcblx0XHRcdGNsZWFyTG9hZGluZ0NsYXNzKCk7XHJcblx0XHRcdG9uRmFpbFJlcXVlc3QoKTtcclxuXHRcdH0gfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0PC9SZXF1ZXN0QnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdExvYWRpbmdCdXR0b247IiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSBcIi4vcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGVWYWxpZENsYXNzZXMgfSBmcm9tIFwiLi4vaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRlQnV0dG9uKCB7XHJcblx0XHRcdFx0XHRcdFx0IGluaXRpYWxWYWxpZCxcclxuXHRcdFx0XHRcdFx0XHQgbGFiZWwsXHJcblx0XHRcdFx0XHRcdFx0IGFqYXhBcmdzID0ge30sXHJcblx0XHRcdFx0XHRcdFx0IG9uVmFsaWQgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHQgb25JbnZhbGlkID0gKCkgPT4ge30sXHJcblx0XHRcdFx0XHRcdCB9ICkge1xyXG5cclxuXHRjb25zdCBbXHJcblx0XHRjbGFzc05hbWUsXHJcblx0XHRzZXRWYWxpZENsYXNzLFxyXG5cdFx0c2V0SW52YWxpZENsYXNzLFxyXG5cdFx0c2V0TG9hZGluZ0NsYXNzXHJcblx0XSA9IHVzZVN0YXRlVmFsaWRDbGFzc2VzKCBpbml0aWFsVmFsaWQgfHwgZmFsc2UgKTtcclxuXHJcblx0Y29uc3Qgc2V0VmFsaWQgPSByZXNwb25zZSA9PiB7XHJcblx0XHRzZXRWYWxpZENsYXNzKCk7XHJcblx0XHRvblZhbGlkKCByZXNwb25zZSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldEludmFsaWQgPSAoKSA9PiB7XHJcblx0XHRzZXRJbnZhbGlkQ2xhc3MoKTtcclxuXHRcdG9uSW52YWxpZCgpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxyXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XHJcblx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XHJcblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgc2V0VmFsaWQgfVxyXG5cdFx0b25GYWlsUmVxdWVzdD17IHNldEludmFsaWQgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0PC9SZXF1ZXN0QnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVCdXR0b247IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlclJlcXVpcmVkQ29udHJvbCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpZWxkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsS2V5ID0gJ2xhYmVsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZEtleSA9ICdyZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHRjb25zdCBbIG5hbWUsIGRhdGEgXSA9IGZpZWxkO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3cgZmllbGRzLW1hcC1jb250cm9sXCJcclxuXHRcdFx0a2V5PXsgJ3VzZXJfbWV0YV8nICsgbmFtZSB9XHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZpZWxkLW1hcF9fcm93LWxhYmVsXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2ZpZWxkcy1tYXBfX2xhYmVsJyB9PlxyXG5cdFx0XHRcdFx0eyAoIGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgJiYgZGF0YVsgbGFiZWxLZXkgXSApICYmIGRhdGFbIGxhYmVsS2V5IF0gfVxyXG5cdFx0XHRcdFx0eyAoICEgZGF0YS5oYXNPd25Qcm9wZXJ0eSggbGFiZWxLZXkgKSApICYmIGRhdGEgfVxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHR7ICggZGF0YS5oYXNPd25Qcm9wZXJ0eSggcmVxdWlyZWRLZXkgKSAmJiBkYXRhWyByZXF1aXJlZEtleSBdICkgJiZcclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fcmVxdWlyZWQnIH0+ICo8L3NwYW4+IH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufSIsImltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tIFwiLi4vaG9va3MvaG9va3MtaGVscGVyXCI7XHJcbmltcG9ydCBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyBmcm9tIFwiLi4vZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGlvbnNCeVR5cGUgPSB0eXBlID0+IHtcclxuXHRjb25zdCBbIGFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoKTtcclxuXHJcblx0cmV0dXJuIGFjdGlvbnMuZmlsdGVyKCBhY3Rpb24gPT4gdHlwZSA9PT0gYWN0aW9uLnR5cGUgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmcm9tTG9jYWxpemVIZWxwZXIgPSBuYW1lID0+IHtcclxuXHRyZXR1cm4gbmFtZSA/IHdpbmRvdy5KZXRGQkxvY2FsaXplSGVscGVyWyBuYW1lIF0gOiB3aW5kb3cuSmV0RkJMb2NhbGl6ZUhlbHBlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25CeVR5cGVMaXN0ID0gKCBhY3Rpb25UeXBlLCB3aXRoRGVzYyA9IGZhbHNlICkgPT4ge1xyXG5cdHJldHVybiBnZXRBY3Rpb25zQnlUeXBlKCBhY3Rpb25UeXBlICkubWFwKCBhY3Rpb24gPT4ge1xyXG5cdFx0Y29uc3QgbmV3QWN0aW9uID0ge1xyXG5cdFx0XHR2YWx1ZTogYWN0aW9uLmlkLFxyXG5cdFx0XHRsYWJlbDogZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0QWN0aW9uTGFiZWwnICkoIGFjdGlvbi50eXBlICksXHJcblx0XHR9O1xyXG5cdFx0aWYgKCB3aXRoRGVzYyApIHtcclxuXHRcdFx0bmV3QWN0aW9uLmxhYmVsICs9IGAgKCR7IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB9KWBcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbmV3QWN0aW9uO1xyXG5cdH0gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBY3Rpb25TZXR0aW5ncyA9IGFjdGlvbklkID0+IHtcclxuXHRjb25zdCBbIGFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoKTtcclxuXHRjb25zdCBhY3Rpb24gPSBhY3Rpb25zLmZpbmQoIGFjdGlvbiA9PiBhY3Rpb25JZCA9PT0gYWN0aW9uLmlkICk7XHJcblxyXG5cdHJldHVybiAoIGFjdGlvbiAmJiBhY3Rpb24uc2V0dGluZ3MgKSA/IGFjdGlvbi5zZXR0aW5ncyA6IGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAgPSBzb3VyY2UgPT4ge1xyXG5cdHJldHVybiBzb3VyY2UubWFwKCBpdGVtID0+IHtcclxuXHRcdGNvbnN0IGlkID0gaXRlbS52YWx1ZTtcclxuXHRcdGRlbGV0ZSBpdGVtLnZhbHVlO1xyXG5cclxuXHRcdHJldHVybiBbIGlkLCBpdGVtIF07XHJcblx0fSApO1xyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQgZnJvbSBcIi4vYWN0aW9uLXdyYXBwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZEFjdGlvbiggYWN0aW9uVHlwZSwgYWN0aW9uSW5zdGFuY2UgKSB7XHJcblx0d2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9ucyA9IHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgfHwge307XHJcblx0d2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9uc1sgYWN0aW9uVHlwZSBdID0gd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0KCBhY3Rpb25UeXBlLCBhY3Rpb25JbnN0YW5jZSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRBY3Rpb247XHJcbiIsImltcG9ydCB7IGZyb21Mb2NhbGl6ZUhlbHBlciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJcIjtcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhBY3Rpb25Mb2NhbGl6ZVNjcmlwdCggYWN0aW9uVHlwZSwgQWN0aW9uSW5zdGFuY2UgKSB7XHJcblx0Y29uc3QgbG9jYWxpemVkRGF0YSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb25UeXBlICk7XHJcblxyXG5cdHJldHVybiBwcm9wcyA9PiB7XHJcblx0XHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRcdHByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdFx0WyBrZXkgXTogdmFsdWUsXHJcblx0XHRcdH0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZ2V0TWFwRmllbGQgPSAoIHsgc291cmNlID0gJ2ZpZWxkc19tYXAnLCBuYW1lIH0gKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gcHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0XHRpZiAoIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2V0TWFwRmllbGQgPSAoIHsgc291cmNlID0gJ2ZpZWxkc19tYXAnLCBuYW1lRmllbGQsIHZhbHVlIH0gKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZpZWxkc01hcCA9IHtcclxuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5nc1sgc291cmNlIF0sXHJcblx0XHRcdFx0WyBuYW1lRmllbGQgXTogdmFsdWUsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRwcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRcdFsgc291cmNlIF06IGZpZWxkc01hcCxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGFkZGl0aW9uYWxQcm9wcyA9IHsgb25DaGFuZ2VTZXR0aW5nLCBnZXRNYXBGaWVsZCwgc2V0TWFwRmllbGQgfTtcclxuXHRcdGNvbnN0IHJlc3VsdFByb3BzID0geyAuLi5wcm9wcywgLi4ubG9jYWxpemVkRGF0YSwgLi4uYWRkaXRpb25hbFByb3BzIH07XHJcblxyXG5cdFx0cmV0dXJuIDw+XHJcblx0XHRcdDxBY3Rpb25JbnN0YW5jZSB7IC4uLnJlc3VsdFByb3BzIH0gLz5cclxuXHRcdFx0eyBhcHBseUZpbHRlcnMoIGBqZXQuZmIucmVuZGVyLmFjdGlvbi4keyBhY3Rpb25UeXBlIH1gLCA8PjwvPiwgcmVzdWx0UHJvcHMgKSB9XHJcblx0XHQ8Lz5cclxuXHR9O1xyXG59IiwiXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciA9ICggYmxvY2tQYXJzZXJGdW5jICkgPT4ge1xyXG5cdGNvbnN0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yID0gKCBibG9ja3MgKSA9PiB7XHJcblxyXG5cdFx0YmxvY2tzID0gYmxvY2tzIHx8IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCk7XHJcblxyXG5cdFx0YmxvY2tzLm1hcCggYmxvY2sgPT4ge1xyXG5cdFx0XHRibG9ja1BhcnNlckZ1bmMoIGJsb2NrICk7XHJcblxyXG5cdFx0XHRpZiAoIGJsb2NrLmlubmVyQmxvY2tzLmxlbmd0aCApIHtcclxuXHRcdFx0XHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2suaW5uZXJCbG9ja3MgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCk7XHJcbn1cclxuXHJcbmNvbnN0IGdldEZvcm1GaWVsZHNCbG9ja3MgPSAoIGV4Y2x1ZGUgPSBbXSwgcGxhY2Vob2xkZXIgPSBmYWxzZSApID0+IHtcclxuXHRjb25zdCBmb3JtRmllbGRzID0gW107XHJcblxyXG5cdGxldCBza2lwRmllbGRzID0gWyAnc3VibWl0JywgJ2Zvcm0tYnJlYWsnLCAnaGVhZGluZycsICdncm91cC1icmVhaycsIC4uLmV4Y2x1ZGUgXTtcclxuXHJcblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrID0+IHtcclxuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcclxuXHRcdFx0JiYgYmxvY2suYXR0cmlidXRlcy5uYW1lXHJcblx0XHRcdCYmICEgc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcclxuXHRcdCkge1xyXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcclxuXHRcdFx0XHRibG9ja05hbWU6IGJsb2NrLm5hbWUsXHJcblx0XHRcdFx0bmFtZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzLmxhYmVsIHx8IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHR2YWx1ZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gcGxhY2Vob2xkZXJcclxuXHRcdD8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxyXG5cdFx0OiBmb3JtRmllbGRzO1xyXG59XHJcblxyXG5jb25zdCBnZXRGaWVsZHNXaXRob3V0Q3VycmVudCA9ICggcGxhY2Vob2xkZXIgPSBmYWxzZSApID0+IHtcclxuXHJcblx0Y29uc3Qgc2tpcEZpZWxkcyA9IFsgJ3N1Ym1pdCcsICdmb3JtLWJyZWFrJywgJ2hlYWRpbmcnLCAnZ3JvdXAtYnJlYWsnIF07XHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IFtdO1xyXG5cclxuXHRjb25zdCBjdXJyZW50ID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZWxlY3RlZEJsb2NrKCk7XHJcblxyXG5cdGlmICggbnVsbCA9PT0gY3VycmVudCApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XHJcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXHJcblx0XHRcdCYmIGN1cnJlbnQuY2xpZW50SWQgIT09IGJsb2NrLmNsaWVudElkXHJcblx0XHRcdCYmICEgc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcclxuXHRcdCkge1xyXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcclxuXHRcdFx0XHRibG9ja05hbWU6IGJsb2NrLm5hbWUsXHJcblx0XHRcdFx0bGFiZWw6IGJsb2NrLmF0dHJpYnV0ZXMubGFiZWwgfHwgYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdHZhbHVlOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBwbGFjZWhvbGRlclxyXG5cdFx0PyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXHJcblx0XHQ6IGZvcm1GaWVsZHM7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBdmFpbGFibGVGaWVsZHMgPSAoIGV4Y2x1ZGUgPSBbXSApID0+IHtcclxuXHRsZXQgZmllbGRzID0gW107XHJcblx0Y29uc3QgYmxvY2tzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggZXhjbHVkZSApO1xyXG5cclxuXHRpZiAoIGJsb2NrcyApIHtcclxuXHRcdGJsb2Nrcy5mb3JFYWNoKCBpdGVtID0+IGZpZWxkcy5wdXNoKCBpdGVtLm5hbWUgKSApO1xyXG5cdH1cclxuXHRyZXR1cm4gZmllbGRzO1xyXG59XHJcblxyXG5jb25zdCBnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcgPSAoIGJsb2NrTmFtZSApID0+IHtcclxuXHRjb25zdCBmaWVsZHMgPSBnZXRBdmFpbGFibGVGaWVsZHMoIFsgYmxvY2tOYW1lIF0gKTtcclxuXHJcblx0bGV0IGZpZWxkc1N0cmluZyA9IFtdO1xyXG5cdGZpZWxkcy5mb3JFYWNoKCBmdW5jdGlvbiAoIGl0ZW0gKSB7XHJcblx0XHRmaWVsZHNTdHJpbmcucHVzaCggJyVGSUVMRDo6JyArIGl0ZW0gKyAnJScgKTtcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBfXyggJ0F2YWlsYWJsZSBmaWVsZHM6ICcgKSArIGZpZWxkc1N0cmluZy5qb2luKCAnLCAnICk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBnZXRJbm5lckJsb2NrcyA9ICggY2xpZW50SWQgKSA9PiB7XHJcblx0Y29uc3QgYmxvY2sgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrKCBjbGllbnRJZCApO1xyXG5cdHJldHVybiBibG9jayA/IGJsb2NrLmlubmVyQmxvY2tzIDogW107XHJcbn1cclxuXHJcbmNvbnN0IGdldEZvcm1GaWVsZHNCeUJsb2NrID0gKCBibG9ja0V4Y2x1ZGUgKSA9PiB7XHJcblx0cmV0dXJuICgpID0+IGdldEZvcm1GaWVsZHNCbG9ja3MoIFsgYmxvY2tFeGNsdWRlLm5hbWUgXSApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuXHRnZXRGb3JtRmllbGRzQnlCbG9jayxcclxuXHRnZXRJbm5lckJsb2NrcyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcsXHJcblx0Z2V0QXZhaWxhYmxlRmllbGRzLFxyXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcbn07XHJcblxyXG4iLCJpbXBvcnQge1xyXG5cdGZyb21Mb2NhbGl6ZUhlbHBlcixcclxuXHRnZXRBY3Rpb25TZXR0aW5ncyxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb24taGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkge1xyXG5cdGNvbnN0IHsgZ2F0ZXdheUF0dHJzLCBsYWJlbCB9ID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0TG9jYWxpemVkRnVsbFBhY2snICkoIGFjdGlvbi50eXBlICk7XHJcblx0Y29uc3QgYWN0aW9uU2V0dGluZ3MgPSBnZXRBY3Rpb25TZXR0aW5ncyggYWN0aW9uLmlkICk7XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gYXR0ciA9PiB7XHJcblx0XHRpZiAoIGFjdGlvblNldHRpbmdzWyBhdHRyIF0gKSB7XHJcblx0XHRcdHJldHVybiBhY3Rpb25TZXR0aW5nc1sgYXR0ciBdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBhY3Rpb25TZXR0aW5nc1sgYWN0aW9uLnR5cGUgXSAmJiBhY3Rpb25TZXR0aW5nc1sgYWN0aW9uLnR5cGUgXVsgYXR0ciBdICkge1xyXG5cdFx0XHRyZXR1cm4gYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF1bIGF0dHIgXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnTlVMTCc7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbGFiZWxXaXRoQXR0cnMgPSBnYXRld2F5QXR0cnMoKS5tYXAoIGF0dHIgPT4gKCBgJHsgbGFiZWwoIGF0dHIgKSB9ICR7IHZhbHVlKCBhdHRyICkgfWAgKSApO1xyXG5cclxuXHRyZXR1cm4gbGFiZWxXaXRoQXR0cnMuam9pbiggJywgJyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYXRld2F5QWN0aW9uQXR0cmlidXRlczsiLCJleHBvcnQgY29uc3QgZ2F0ZXdheUF0dHIgPSAoIGF0dHIgPSBmYWxzZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xyXG5cdGNvbnN0IGRhdGEgPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuZ2F0ZXdheXM7XHJcblxyXG5cdGlmICggISBhdHRyICkge1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cdGlmICggISBkYXRhWyBhdHRyIF0gKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBzb3VyY2UgPSBkYXRhWyBhdHRyIF07XHJcblxyXG5cdHJldHVybiBuYW1lID0+IHNvdXJjZVsgbmFtZSBdID8gc291cmNlWyBuYW1lIF0gOiBpc0VtcHR5O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhdGV3YXlMYWJlbCA9ICggdHlwZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xyXG5cdGNvbnN0IGxhYmVsID0gZ2F0ZXdheUF0dHIoICdsYWJlbHMnICk7XHJcblxyXG5cdHJldHVybiBhdHRyID0+IGxhYmVsKCB0eXBlICkgPyBsYWJlbCggdHlwZSApWyBhdHRyIF0gOiBpc0VtcHR5O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJHYXRld2F5ID0gKCBpZCwgY2FsbGJhY2sgKSA9PiB7XHJcblx0d2luZG93LmpldEZCR2F0ZXdheXNMaXN0ID0gd2luZG93LmpldEZCR2F0ZXdheXNMaXN0IHx8IHt9O1xyXG5cdHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSA9IGNhbGxiYWNrO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckdhdGV3YXkgPSAoIGlkLCBwcm9wcyApID0+IHtcclxuXHRpZiAoICEgd2luZG93LmpldEZCR2F0ZXdheXNMaXN0IHx8ICEgd2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGNvbnN0IEdhdGV3YXlDb21wb25lbnQgPSB3aW5kb3cuamV0RkJHYXRld2F5c0xpc3RbIGlkIF07XHJcblxyXG5cdHJldHVybiA8R2F0ZXdheUNvbXBvbmVudCB7IC4uLnByb3BzIH0gLz47XHJcbn07IiwiY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTZWxlY3QsXHJcblx0dXNlRGlzcGF0Y2gsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU1ldGFTdGF0ZSA9ICgga2V5LCBpZkVtcHR5ID0gJ3t9JyApID0+IHtcclxuXHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcclxuXHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHR9ICk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGVkaXRQb3N0XHJcblx0fSA9IHVzZURpc3BhdGNoKCAnY29yZS9lZGl0b3InICk7XHJcblxyXG5cdGNvbnN0IFsgbWV0YVN0YXRlVmFsdWUsIHNldE1ldGFTdGF0ZVZhbHVlIF0gPSB1c2VTdGF0ZSggSlNPTi5wYXJzZSggbWV0YVsga2V5IF0gfHwgaWZFbXB0eSApICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0ZWRpdFBvc3QoIHtcclxuXHRcdFx0bWV0YTogKCB7XHJcblx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRbIGtleSBdOiBKU09OLnN0cmluZ2lmeSggbWV0YVN0YXRlVmFsdWUgKVxyXG5cdFx0XHR9IClcclxuXHRcdH0gKTtcclxuXHR9LCBbIG1ldGFTdGF0ZVZhbHVlIF0gKTtcclxuXHJcblx0cmV0dXJuIFsgbWV0YVN0YXRlVmFsdWUsIHNldE1ldGFTdGF0ZVZhbHVlIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQWN0aW9ucyA9ICggd2l0aEVkaXRQb3N0RWZmZWN0ID0gZmFsc2UgKSA9PiB7XHJcblx0Y29uc3QgbWV0YSA9IHVzZVNlbGVjdCggKCBzZWxlY3QgKSA9PiB7XHJcblx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblx0fSApO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRlZGl0UG9zdFxyXG5cdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRjb25zdCBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhLl9qZl9hY3Rpb25zIHx8ICdbXScgKSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggd2l0aEVkaXRQb3N0RWZmZWN0ICkge1xyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9hY3Rpb25zOiBKU09OLnN0cmluZ2lmeSggYWN0aW9ucyApXHJcblx0XHRcdFx0fSApXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9LCBbIGFjdGlvbnMgXSApO1xyXG5cclxuXHRyZXR1cm4gWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF07XHJcbn07XHJcbmNvbnN0IGluaXRDbGFzc2VzID0gWyAnamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlVmFsaWRDbGFzc2VzID0gaW5pdGlhbFZhbGlkID0+IHtcclxuXHRjb25zdCB2YWxpZENsYXNzID0gJ2lzLXZhbGlkJztcclxuXHRjb25zdCBpbnZhbGlkQ2xhc3MgPSAnaXMtaW52YWxpZCdcclxuXHJcblx0Y29uc3QgaW5pdFN0YXRlQ2xhc3NlcyA9ICgpID0+IHtcclxuXHRcdGlmICggaW5pdGlhbFZhbGlkICkge1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5pbml0Q2xhc3NlcywgdmFsaWRDbGFzcyBdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoICEgaW5pdGlhbFZhbGlkICkge1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5pbml0Q2xhc3NlcywgaW52YWxpZENsYXNzIF07XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgWyBjbGFzc2VzLCBzZXRDbGFzc2VzIF0gPSB1c2VTdGF0ZSggaW5pdFN0YXRlQ2xhc3NlcygpICk7XHJcblxyXG5cdGNvbnN0IHNldFZhbGlkQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCB2YWxpZENsYXNzIF0gKVxyXG5cdH07XHJcblx0Y29uc3Qgc2V0SW52YWxpZENsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgaW52YWxpZENsYXNzIF0gKVxyXG5cdH07XHJcblx0Y29uc3Qgc2V0TG9hZGluZ0NsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgJ2xvYWRpbmcnIF0gKVxyXG5cdH07XHJcblxyXG5cdHJldHVybiBbIGNsYXNzZXMuam9pbiggJyAnICksIHNldFZhbGlkQ2xhc3MsIHNldEludmFsaWRDbGFzcywgc2V0TG9hZGluZ0NsYXNzIF07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzID0gKCkgPT4ge1xyXG5cdGNvbnN0IFsgY2xhc3Nlcywgc2V0Q2xhc3NlcyBdID0gdXNlU3RhdGUoIFsgLi4uaW5pdENsYXNzZXMgXSApO1xyXG5cclxuXHRjb25zdCBzZXRMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCAnbG9hZGluZycgXSApXHJcblx0fTtcclxuXHRjb25zdCBjbGVhckxvYWRpbmdDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIGluaXRDbGFzc2VzICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gWyBjbGFzc2VzLmpvaW4oICcgJyApLCBzZXRMb2FkaW5nQ2xhc3MsIGNsZWFyTG9hZGluZ0NsYXNzIF07XHJcbn1cclxuIiwiXHJcbmZ1bmN0aW9uIGdsb2JhbFRhYiggeyBzbHVnLCBlbGVtZW50ID0gJycsIGVtcHR5ID0gJycgfSApIHtcclxuXHRjb25zdCBnbG9iYWwgPSBKZXRGb3JtRWRpdG9yRGF0YS5nbG9iYWxfc2V0dGluZ3M7XHJcblxyXG5cdGlmKCAhIGdsb2JhbCApIHtcclxuXHRcdHJldHVybiBlbXB0eTtcclxuXHR9XHJcblxyXG5cdGlmICggZWxlbWVudCApIHtcclxuXHRcdHJldHVybiAoIGdsb2JhbFsgc2x1ZyBdICYmIGdsb2JhbFsgc2x1ZyBdWyBlbGVtZW50IF0gKSA/IGdsb2JhbFsgc2x1ZyBdWyBlbGVtZW50IF0gOiBlbXB0eTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBnbG9iYWxbIHNsdWcgXSB8fCBlbXB0eTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2xvYmFsVGFiIH07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNsYXNzIFRvb2xzIHtcclxuXHJcblx0c3RhdGljIGdldExhYmVsKCBtZXRhLCBhdHRycyApIHtcclxuXHRcdGNvbnN0IGxhYmVsID0ge307XHJcblx0XHRsYWJlbC5uYW1lID0gYXR0cnMubGFiZWw7XHJcblx0XHRpZiAoIGF0dHJzLnJlcXVpcmVkICkge1xyXG5cdFx0XHRsYWJlbC5tYXJrID0gSlNPTi5wYXJzZSggbWV0YS5famZfYXJncyApLnJlcXVpcmVkX21hcmsgfHwgJyc7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbGFiZWw7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgd2l0aFBsYWNlaG9sZGVyKCBzb3VyY2UsIGxhYmVsID0gJy0tJywgdmFsdWUgPSAnJyApIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHsgbGFiZWwsIHZhbHVlIH0sXHJcblx0XHRcdC4uLnNvdXJjZSxcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXNFbXB0eU9iamVjdCggb2JqZWN0ICkge1xyXG5cdFx0cmV0dXJuICdvYmplY3QnID09PSB0eXBlb2Ygb2JqZWN0ICYmIE9iamVjdC5rZXlzKCBvYmplY3QgKS5sZW5ndGggPT09IDA7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0RnVuY0NvbmRpdGlvbiggbmFtZUZ1bmN0aW9uICkge1xyXG5cdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggYHJldHVybiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zWyAnJHsgbmFtZUZ1bmN0aW9uIH0nIF1gICk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkQ29uZGl0aW9uRm9yQ29uZFR5cGUoIG5hbWUsIGNhbGxhYmxlICkge1xyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9ucyA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnMgfHwge307XHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zWyBuYW1lIF0gPSBjYWxsYWJsZTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBwYXJzZUNvbmRpdGlvbnNGdW5jKCBzb3VyY2UgKSB7XHJcblx0XHRjb25zdCB0eXBlcyA9IFtdO1xyXG5cclxuXHRcdHNvdXJjZS5mb3JFYWNoKCB0eXBlID0+IHtcclxuXHRcdFx0aWYgKCB0eXBlLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRpZiAoIFRvb2xzLmdldEZ1bmNDb25kaXRpb24oIHR5cGUuY29uZGl0aW9uICkoKSggdHlwZS52YWx1ZSApICkge1xyXG5cdFx0XHRcdFx0dHlwZXMucHVzaCggdHlwZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0eXBlcy5wdXNoKCB0eXBlICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gdHlwZXM7XHJcblxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50ID0gbmFtZSA9PiB7XHJcblx0Y29uc3QgaW5pdGlhbGl6ZUNhbGxiYWNrc0V2ZW50ID0gbmV3IEV2ZW50KCBuYW1lICk7XHJcblx0cmV0dXJuICgpID0+IGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGluaXRpYWxpemVDYWxsYmFja3NFdmVudCApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlbiA9ICggbmFtZSwgZnVuYyApID0+IHtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBmdW5jICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJzaW9uQ29tcGFyZSggdmVyc2lvbjEsIHZlcnNpb24yLCBvcGVyYXRvciApIHtcclxuXHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgdmVyc2lvbjEgKSB7XHJcblx0XHR2ZXJzaW9uMSA9ICsoIHZlcnNpb24xLnNwbGl0KCAnLicgKS5qb2luKCAnJyApICk7XHJcblx0fVxyXG5cdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiB2ZXJzaW9uMiApIHtcclxuXHRcdHZlcnNpb24yID0gKyggdmVyc2lvbjIuc3BsaXQoICcuJyApLmpvaW4oICcnICkgKTtcclxuXHR9XHJcblx0aWYgKCAwID49IHZlcnNpb24xIHx8IDAgPj0gdmVyc2lvbjIgKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdJbnZhbGlkIGFyZ3VtZW50czogdmVyc2lvbjEgb3IgdmVyc2lvbjInICk7XHJcblx0fVxyXG5cclxuXHRpZiAoIFsgJz4nLCAnPCcsICc9PT0nLCAnPT0nLCAnPj0nLCAnPD0nIF0uaW5jbHVkZXMoIG9wZXJhdG9yICkgKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCBgcmV0dXJuICR7IHZlcnNpb24xIH0gJHsgb3BlcmF0b3IgfSAkeyB2ZXJzaW9uMiB9YCApKCk7XHJcblx0fVxyXG5cdHRocm93IG5ldyBFcnJvciggJ0ludmFsaWQgYXJndW1lbnRzOiBvcGVyYXRvcicgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWN0aW9uRmllbGRzTWFwIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXBcIjtcclxuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9uLW1vZGFsXCI7XHJcbmltcG9ydCBXcmFwcGVyUmVxdWlyZWRDb250cm9sIGZyb20gXCIuL2NvbXBvbmVudHMvd3JhcHBlci1yZXF1aXJlZC1jb250cm9sXCI7XHJcbmltcG9ydCBSZXF1ZXN0QnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IFZhbGlkYXRlQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvdmFsaWRhdGUtYnV0dG9uXCI7XHJcbmltcG9ydCBhZGRBY3Rpb24gZnJvbSBcIi4vaGVscGVycy9hY3Rpb25zL2FjdGlvbi1tYW5hZ2VyXCI7XHJcbmltcG9ydCBUb29scywge1xyXG5cdGV2ZW50LFxyXG5cdGxpc3RlbixcclxuXHR2ZXJzaW9uQ29tcGFyZSxcclxufSBmcm9tIFwiLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldFwiO1xyXG5pbXBvcnQgSmV0RmllbGRzTWFwQ29udHJvbCBmcm9tIFwiLi4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwXCI7XHJcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvZmllbGQtd2l0aC1wcmVzZXRcIjtcclxuaW1wb3J0IHtcclxuXHRHbG9iYWxGaWVsZCxcclxuXHRBdmFpbGFibGVNYXBGaWVsZCxcclxuXHRNYXBGaWVsZCxcclxufSBmcm9tIFwiLi9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LXJlbmRlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXHJcblx0Z2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nLFxyXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxyXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcblx0Z2V0Rm9ybUZpZWxkc0J5QmxvY2ssXHJcblx0Z2V0SW5uZXJCbG9ja3MsXHJcbn0gZnJvbSBcIi4vaGVscGVycy9ibG9ja3MvYmxvY2tzLWhlbHBlclwiO1xyXG5pbXBvcnQge1xyXG5cdGdhdGV3YXlBdHRyLFxyXG5cdGdhdGV3YXlMYWJlbCxcclxuXHRyZWdpc3RlckdhdGV3YXksXHJcblx0cmVuZGVyR2F0ZXdheSxcclxufSBmcm9tIFwiLi9oZWxwZXJzL2dhdGV3YXlzL2dhdGV3YXktaGVscGVyXCI7XHJcbmltcG9ydCB7XHJcblx0dXNlQWN0aW9ucyxcclxuXHR1c2VNZXRhU3RhdGUsXHJcblx0dXNlU3RhdGVWYWxpZENsYXNzZXMsXHJcblx0dXNlU3RhdGVMb2FkaW5nQ2xhc3NlcyxcclxufSBmcm9tIFwiLi9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlclwiO1xyXG5pbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdyYXBwZXJcIjtcclxuaW1wb3J0IE1hY3Jvc0luc2VydGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRzL21hY3Jvcy1pbnNlcnRlclwiO1xyXG5pbXBvcnQgUmVwZWF0ZXJXaXRoU3RhdGUgZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvcmVwZWF0ZXItd2l0aC1zdGF0ZVwiO1xyXG5pbXBvcnQgd2l0aFByZXNldCBmcm9tIFwiLi9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvclwiO1xyXG5pbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkcyxcclxuXHRGaWVsZENvbnRyb2wsXHJcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvZmllbGQtY29udHJvbFwiO1xyXG5pbXBvcnQgUGxhY2Vob2xkZXJNZXNzYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9ucy9wbGFjZWhvbGRlci1tZXNzYWdlXCI7XHJcbmltcG9ydCBBY3Rpb25NZXNzYWdlcyBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCBIb3Jpem9udGFsTGluZSBmcm9tIFwiLi9jb21wb25lbnRzL2hvcml6b250YWwtbGluZVwiO1xyXG5pbXBvcnQgUmVxdWVzdExvYWRpbmdCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9yZXF1ZXN0LWxvYWRpbmctYnV0dG9uXCI7XHJcbmltcG9ydCB7XHJcblx0YWN0aW9uQnlUeXBlTGlzdCxcclxuXHRmcm9tTG9jYWxpemVIZWxwZXIsXHJcblx0Z2V0QWN0aW9uU2V0dGluZ3MsXHJcblx0Y29udmVydExpc3RUb0ZpZWxkc01hcCxcclxufSBmcm9tIFwiLi9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMgZnJvbSBcIi4vaGVscGVycy9nYXRld2F5cy9nYXRld2F5LWFjdGlvbi1hdHRydWJpdGVzXCI7XHJcbmltcG9ydCB7IGdsb2JhbFRhYiB9IGZyb20gXCIuL2hlbHBlcnMvc2V0dGluZ3MvaGVscGVyXCI7XHJcbmltcG9ydCBGaWVsZFNldHRpbmdzV3JhcHBlciBmcm9tICcuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXNldHRpbmdzLXdyYXBwZXInO1xyXG5pbXBvcnQgR3JvdXBlZFNlbGVjdENvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL2dyb3VwZWQtc2VsZWN0LWNvbnRyb2wnO1xyXG5cclxuLy8gSkZCQ29tcG9uZW50c1xyXG53aW5kb3cuSmV0RkJDb21wb25lbnRzID0ge1xyXG5cdEFjdGlvbkZpZWxkc01hcCxcclxuXHRBY3Rpb25Nb2RhbCxcclxuXHRSZXF1ZXN0QnV0dG9uLFxyXG5cdFZhbGlkYXRlQnV0dG9uLFxyXG5cdFJlcXVlc3RMb2FkaW5nQnV0dG9uLFxyXG5cdFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXHJcblx0RHluYW1pY1ByZXNldCxcclxuXHRKZXRGaWVsZHNNYXBDb250cm9sLFxyXG5cdEZpZWxkV2l0aFByZXNldCxcclxuXHRHbG9iYWxGaWVsZCxcclxuXHRBdmFpbGFibGVNYXBGaWVsZCxcclxuXHRNYXBGaWVsZCxcclxuXHRGaWVsZFdyYXBwZXIsXHJcblx0TWFjcm9zSW5zZXJ0ZXIsXHJcblx0UmVwZWF0ZXJXaXRoU3RhdGUsXHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzLFxyXG5cdEZpZWxkQ29udHJvbCxcclxuXHRQbGFjZWhvbGRlck1lc3NhZ2UsXHJcblx0SG9yaXpvbnRhbExpbmUsXHJcblx0RmllbGRTZXR0aW5nc1dyYXBwZXIsXHJcblx0QWN0aW9uTWVzc2FnZXMsXHJcblx0R3JvdXBlZFNlbGVjdENvbnRyb2wsXHJcbn07XHJcblxyXG4vLyBKRkJGdW5jdGlvbnNcclxud2luZG93LkpldEZCQWN0aW9ucyA9IHtcclxuXHRhZGRBY3Rpb24sXHJcblx0d2l0aFByZXNldCxcclxuXHRnZXRGb3JtRmllbGRzQnlCbG9jayxcclxuXHRnZXRJbm5lckJsb2NrcyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcsXHJcblx0Z2V0QXZhaWxhYmxlRmllbGRzLFxyXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcblx0Z2F0ZXdheUF0dHIsXHJcblx0Z2F0ZXdheUxhYmVsLFxyXG5cdHJlZ2lzdGVyR2F0ZXdheSxcclxuXHRUb29scyxcclxuXHRldmVudCxcclxuXHRsaXN0ZW4sXHJcblx0YWN0aW9uQnlUeXBlTGlzdCxcclxuXHRnZXRBY3Rpb25TZXR0aW5ncyxcclxuXHRmcm9tTG9jYWxpemVIZWxwZXIsXHJcblx0cmVuZGVyR2F0ZXdheSxcclxuXHRnYXRld2F5QWN0aW9uQXR0cmlidXRlcyxcclxuXHRnbG9iYWxUYWIsXHJcblx0dmVyc2lvbkNvbXBhcmUsXHJcblx0Y29udmVydExpc3RUb0ZpZWxkc01hcCxcclxufTtcclxuXHJcbi8vIEpGQkhvb2tzXHJcbndpbmRvdy5KZXRGQkhvb2tzID0ge1xyXG5cdHVzZUFjdGlvbnMsXHJcblx0dXNlTWV0YVN0YXRlLFxyXG5cdHVzZVN0YXRlVmFsaWRDbGFzc2VzLFxyXG5cdHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMsXHJcbn07XHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQWJBO0FBZ0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQUVBO0FBQ0E7Ozs7QUFwSkE7QUFDQTtBQXFKQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUtBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFJQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBT0E7QUFBQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFEQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUpBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFuQkE7QUEwQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBYkE7QUFvQkE7QUFDQTtBQUNBO0FBSEE7QUF0Q0E7QUFwQ0E7QUFBQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQWxFQTtBQXlFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNuUUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFHQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUdBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVlBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFXQTtBQURBO0FBSUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFqRUE7QUFDQTtBQTBFQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7QUNqUkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQXZCQTtBQUNBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBUkE7QUFDQTtBQWVBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBVEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVhBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFYQTtBQXJEQTtBQW9FQTtBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQTFEQTtBQUNBO0FBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7O0FDclFBO0FBRUE7QUFDQTtBQUdBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDekdBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0E7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVFBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUNBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUFDQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==