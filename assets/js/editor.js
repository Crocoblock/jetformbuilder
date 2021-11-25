/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/blocks/block-wrappers.js":
/*!*****************************************!*\
  !*** ./editor/blocks/block-wrappers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withCustomProps": () => (/* binding */ withCustomProps)
/* harmony export */ });
/* harmony import */ var _help_messages_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-messages-config */ "./editor/blocks/help-messages-config.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var applyFilters = wp.hooks.applyFilters;
function withCustomProps(block) {
  var EditComponent = block.settings.edit;
  var _plugins = {};

  if ('useEditProps' in block.settings) {
    var useEditProps = block.settings.useEditProps;
    useEditProps.forEach(function (name) {
      var editProp = editProps.find(function (prop) {
        return name === prop.name;
      });

      if (editProp) {
        _plugins[name] = editProp.callable(block);
      }
    });
    delete block.settings.useEditProps;
  }

  return function (props) {
    return wp.element.createElement(EditComponent, _extends({}, props, {
      editProps: _objectSpread({}, _plugins)
    }));
  };
}

var getHelpInstance = function getHelpInstance(block) {
  var messages = {};
  _help_messages_config__WEBPACK_IMPORTED_MODULE_0__.messagesConfig.forEach(function (msg) {
    if (msg.to.includes(block.name) && msg.message) {
      messages[msg.attribute] = msg;
    }
  });
  return function (attribute) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!(attribute in messages)) {
      return '';
    }

    var item = messages[attribute];

    if ('conditions' in item) {
      for (var attrName in item.conditions) {
        if (!(attrName in attributes) || item.conditions[attrName] !== attributes[attrName]) {
          return;
        }
      }
    }

    return item.message;
  };
};

var editProps = applyFilters('jet.fb.register.editProps', [{
  name: 'uniqKey',
  callable: function callable(block) {
    return function (suffix) {
      return "".concat(block.name, "/").concat(suffix);
    };
  }
}, {
  name: 'blockName',
  callable: function callable(block) {
    return block.name;
  }
}, {
  name: 'attrHelp',
  callable: getHelpInstance
}]);

/***/ }),

/***/ "./editor/blocks/calculated-field/edit.js":
/*!************************************************!*\
  !*** ./editor/blocks/calculated-field/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditCalculated)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper,
    BaseHelp = _JetFBComponents.BaseHelp;
var _JetFBActions = JetFBActions,
    getFieldsWithoutCurrent = _JetFBActions.getFieldsWithoutCurrent;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    ToolbarGroup = _wp$components.ToolbarGroup,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = __experimentalNumberControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    RawHTML = _wp$element.RawHTML;
var applyFilters = wp.hooks.applyFilters;
var help = {
  calc_hidden: __('Check this to hide calculated field')
};
function EditCalculated(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;

  var insertMacros = function insertMacros(macros) {
    setAttributes({
      calc_formula: "".concat(attributes.calc_formula || '').concat(macros)
    });
  };

  var togglePopover = function togglePopover() {
    var fields = getFieldsWithoutCurrent().map(function (_ref2) {
      var value = _ref2.value;
      return '%FIELD::' + value + '%';
    });
    setFormFields(applyFilters('jet.fb.calculated.field.available.fields', fields));
    setShowMacros(function (toggle) {
      return !toggle;
    });
  };

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      formFields = _useState2[0],
      setFormFields = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showMacros = _useState4[0],
      setShowMacros = _useState4[1];

  return [wp.element.createElement(BlockControls, {
    key: uniqKey('BlockControls')
  }, wp.element.createElement(ToolbarGroup, {
    key: uniqKey('ToolbarGroup')
  }, wp.element.createElement(Button, {
    key: uniqKey('show-popover'),
    isTertiary: true,
    isSmall: true,
    icon: showMacros ? 'no-alt' : 'admin-tools',
    onClick: togglePopover
  }), showMacros && wp.element.createElement(Popover, {
    key: uniqKey('Popover'),
    position: 'bottom left'
  }, formFields.length && wp.element.createElement(PanelBody, {
    title: 'Form Fields'
  }, formFields.map(function (value, index) {
    return wp.element.createElement("div", {
      key: uniqKey("formFields-".concat(index))
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        insertMacros(value);
      }
    }, value));
  }))))), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement("p", {
    className: 'components-base-control__help',
    style: {
      marginTop: '0px',
      color: 'rgb(117, 117, 117)'
    },
    dangerouslySetInnerHTML: {
      __html: JetFormCalculatedField.field_desc
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Decimal Places Number'),
    labelPosition: "top",
    key: "precision",
    value: attributes.precision,
    onChange: function onChange(newValue) {
      setAttributes({
        precision: parseInt(newValue)
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_separate_decimals",
    label: __('Decimals separator'),
    value: attributes.separate_decimals,
    onChange: function onChange(separate_decimals) {
      return setAttributes({
        separate_decimals: separate_decimals
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_separate_thousands",
    label: __('Thousands separator'),
    value: attributes.separate_thousands,
    onChange: function onChange(separate_thousands) {
      return setAttributes({
        separate_thousands: separate_thousands
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_prefix",
    label: __('Calculated Value Prefix'),
    value: attributes.calc_prefix,
    help: __('For space before or after text use: &nbsp;'),
    onChange: function onChange(newValue) {
      setAttributes({
        calc_prefix: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_suffix",
    label: __('Calculated Value Suffix'),
    value: attributes.calc_suffix,
    help: __('For space before or after text use: &nbsp;'),
    onChange: function onChange(newValue) {
      setAttributes({
        calc_suffix: newValue
      });
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'calc_hidden',
    label: __('Hidden'),
    checked: attributes.calc_hidden,
    help: help.calc_hidden,
    onChange: function onChange(newVal) {
      setAttributes({
        calc_hidden: Boolean(newVal)
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement("div", {
    className: 'jet-form-builder__calculated-field'
  }, wp.element.createElement("div", {
    className: 'calc-prefix'
  }, attributes.calc_prefix), wp.element.createElement("div", {
    className: 'calc-formula'
  }, attributes.calc_formula), wp.element.createElement("div", {
    className: 'calc-suffix'
  }, attributes.calc_suffix)), props.isSelected && wp.element.createElement(React.Fragment, null, wp.element.createElement(TextareaControl, {
    key: "calc_formula",
    value: attributes.calc_formula,
    onChange: function onChange(newValue) {
      setAttributes({
        calc_formula: newValue
      });
    }
  }))))];
}

/***/ }),

/***/ "./editor/blocks/calculated-field/index.js":
/*!*************************************************!*\
  !*** ./editor/blocks/calculated-field/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_calculated_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/calculated-field/edit.js");
/* harmony import */ var _blocks_calculated_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/calculated-field/block.json */ "../blocks-src/calculated-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_calculated_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    icon = _blocks_calculated_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Calculated Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  description: __('Calculate and display your number values', 'jet-form-builder'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName'],
  example: {
    attributes: {
      label: 'Calculated Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/checkbox-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/checkbox-field/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckboxEdit)
/* harmony export */ });
/* harmony import */ var _components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check-placeholder */ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js");
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
/* harmony import */ var _components_base_select_check_radio_custom_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/base-select-check-radio/custom-template */ "./editor/components/base-select-check-radio/custom-template.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    FieldControl = _JetFBComponents.FieldControl;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var localized = window.JetFormCheckboxFieldData;
function CheckboxEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('JetForm-toolbar')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__.SelectRadioCheckPlaceholder, _extends({
    key: uniqKey('SelectRadioCheckPlaceholder'),
    scriptData: localized
  }, props)), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__["default"], props, wp.element.createElement(_components_base_select_check_radio_custom_template__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    listingTypes: localized.listings_list
  }, props)), wp.element.createElement(FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props))))];
}

/***/ }),

/***/ "./editor/blocks/checkbox-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/checkbox-field/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_checkbox_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/checkbox-field/edit.js");
/* harmony import */ var _blocks_checkbox_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/checkbox-field/block.json */ "../blocks-src/checkbox-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_checkbox_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    icon = _blocks_checkbox_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Checkbox Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName', 'attrHelp'],
  example: {
    attributes: {
      label: 'Checkbox Field',
      desc: 'Field description...',
      field_options: [{
        label: 'First Option',
        value: ''
      }, {
        label: 'Second Option',
        value: ''
      }, {
        label: 'Third Option',
        value: ''
      }]
    }
  }
};


/***/ }),

/***/ "./editor/blocks/color-picker-field/edit.js":
/*!**************************************************!*\
  !*** ./editor/blocks/color-picker-field/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    useBlockProps = _wp$blockEditor.useBlockProps;
var InputControl = wp.components.InputControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function ColorPickerEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, _extends({
    key: uniqKey('FieldSettingsWrapper')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(InputControl, {
    className: "jet-form-builder__field-wrap",
    type: "color",
    key: 'color_picker_place_holder_block',
    onChange: function onChange() {}
  })))];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPickerEdit);

/***/ }),

/***/ "./editor/blocks/color-picker-field/index.js":
/*!***************************************************!*\
  !*** ./editor/blocks/color-picker-field/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_color_picker_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/color-picker-field/edit.js");
/* harmony import */ var _blocks_color_picker_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/color-picker-field/block.json */ "../blocks-src/color-picker-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_color_picker_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    icon = _blocks_color_picker_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Color Picker Field', 'jet-form-builder'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName', 'attrHelp'],
  example: {
    attributes: {
      label: 'Color Picker Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/conditional-block/edit.js":
/*!*************************************************!*\
  !*** ./editor/blocks/conditional-block/edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConditionalBlockEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/conditional-block/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBComponents = JetFBComponents,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    ActionModal = _JetFBComponents.ActionModal,
    FieldWithPreset = _JetFBComponents.FieldWithPreset,
    DynamicPreset = _JetFBComponents.DynamicPreset,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    getInnerBlocks = _JetFBActions.getInnerBlocks,
    Tools = _JetFBActions.Tools;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InnerBlocks = _ref.InnerBlocks,
    useBlockProps = _ref.useBlockProps,
    InspectorControls = _ref.InspectorControls;

var _wp$components = wp.components,
    Button = _wp$components.Button,
    ToolbarGroup = _wp$components.ToolbarGroup,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
function ConditionalBlockEdit(props) {
  var blockProps = useBlockProps();
  var setAttributes = props.setAttributes,
      attributes = props.attributes,
      clientId = props.clientId,
      uniqKey = props.editProps.uniqKey;
  useEffect(function () {
    if (!attributes.name) {
      setAttributes({
        name: clientId
      });
    }
  }, []);
  Tools.addConditionForCondType('isSingleField', function () {
    return 1 === getInnerBlocks(clientId).length;
  });
  var getConditionTypes = Tools.parseConditionsFunc(_options__WEBPACK_IMPORTED_MODULE_0__.options.conditionTypes);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      formFields = _useState4[0],
      setFormFields = _useState4[1];

  useEffect(function () {
    if (showModal) {
      setFormFields(getFormFieldsBlocks([], '--'));
    }
  }, [showModal]);
  return [wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(FieldSettingsWrapper, _extends({
    key: uniqKey('FieldSettingsWrapper')
  }, props), wp.element.createElement(TextControl, {
    label: __('Last Page Name', 'jet-form-builder'),
    key: uniqKey('last_page_name'),
    value: attributes.last_page_name,
    help: __('The value of this field will be set as the name of the last page with the "Progress Bar" block.', 'jet-form-builder'),
    onChange: function onChange(last_page_name) {
      return setAttributes({
        last_page_name: last_page_name
      });
    }
  }))), wp.element.createElement(BlockControls, {
    key: uniqKey('BlockControls')
  }, wp.element.createElement(ToolbarGroup, {
    key: uniqKey('ToolbarGroup')
  }, wp.element.createElement(Button, {
    key: uniqKey('randomize'),
    isTertiary: true,
    isSmall: true,
    icon: "randomize",
    onClick: function onClick() {
      return setShowModal(true);
    }
  }))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement("div", {
    className: "jet-form-builder__conditional"
  }, wp.element.createElement(InnerBlocks, {
    key: uniqKey('conditional-fields'),
    renderAppender: function renderAppender() {
      return wp.element.createElement(InnerBlocks.ButtonBlockAppender, {
        key: uniqKey('ButtonBlockAppender')
      });
    }
  }))), showModal && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: function onRequestClose() {
      return setShowModal(false);
    },
    title: "Conditional Logic"
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(RepeaterWithState, {
      key: uniqKey('RepeaterWithState'),
      items: attributes.conditions,
      isSaveAction: actionClick,
      onUnMount: onRequestClose,
      newItem: _options__WEBPACK_IMPORTED_MODULE_0__.options.condition,
      onSaveItems: function onSaveItems(conditions) {
        return setAttributes({
          conditions: conditions
        });
      },
      addNewButtonLabel: __("New Condition", 'jet-form-builder')
    }, function (_ref3) {
      var currentItem = _ref3.currentItem,
          changeCurrentItem = _ref3.changeCurrentItem;
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
        key: uniqKey('SelectControl-type'),
        label: "Type",
        labelPosition: "side",
        value: currentItem.type,
        options: getConditionTypes,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            type: newValue
          });
        }
      }), wp.element.createElement(SelectControl, {
        key: uniqKey('SelectControl-field'),
        label: "Field",
        labelPosition: "side",
        value: currentItem.field,
        options: formFields,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            field: newValue
          });
        }
      }), wp.element.createElement(SelectControl, {
        key: uniqKey('SelectControl-operator'),
        label: "Operator",
        labelPosition: "side",
        value: currentItem.operator,
        options: _options__WEBPACK_IMPORTED_MODULE_0__.options.conditionOperators,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            operator: newValue
          });
        }
      }), wp.element.createElement(FieldWithPreset, {
        key: uniqKey('FieldWithPreset-value_to_compare'),
        baseControlProps: {
          label: "Value to Compare"
        },
        ModalEditor: function ModalEditor(_ref4) {
          var actionClick = _ref4.actionClick,
              onRequestClose = _ref4.onRequestClose;
          return wp.element.createElement(DynamicPreset, {
            key: uniqKey('DynamicPreset-value_to_compare'),
            value: currentItem.value,
            isSaveAction: actionClick,
            onSavePreset: function onSavePreset(newValue) {
              changeCurrentItem({
                value: newValue
              });
            },
            onUnMount: onRequestClose
          });
        },
        triggerClasses: ['trigger__textarea']
      }, wp.element.createElement(TextareaControl, {
        key: uniqKey('TextareaControl-value'),
        className: 'jet-control-clear jet-user-fields-map__list',
        value: currentItem.value,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            value: newValue
          });
        }
      })), 'set_value' === currentItem.type && wp.element.createElement(FieldWithPreset, {
        key: uniqKey('FieldWithPreset-value_to_set'),
        baseControlProps: {
          label: __('Value to Set', 'jet-form-builder'),
          help: __('Separate values with commas', 'jet-form-builder')
        },
        ModalEditor: function ModalEditor(_ref5) {
          var actionClick = _ref5.actionClick,
              onRequestClose = _ref5.onRequestClose;
          return wp.element.createElement(DynamicPreset, {
            key: uniqKey('DynamicPreset-value_to_set'),
            value: currentItem.set_value,
            isSaveAction: actionClick,
            onSavePreset: function onSavePreset(newValue) {
              changeCurrentItem({
                set_value: newValue
              });
            },
            onUnMount: onRequestClose
          });
        },
        triggerClasses: ['trigger__textarea']
      }, wp.element.createElement(TextareaControl, {
        key: uniqKey('TextareaControl-set_value'),
        className: 'jet-control-clear jet-user-fields-map__list',
        value: currentItem.set_value,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            set_value: newValue
          });
        }
      })));
    });
  })];
}

/***/ }),

/***/ "./editor/blocks/conditional-block/index.js":
/*!**************************************************!*\
  !*** ./editor/blocks/conditional-block/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_conditional_block_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/conditional-block/edit.js");
/* harmony import */ var _blocks_conditional_block_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/conditional-block/block.json */ "../blocks-src/conditional-block/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./editor/blocks/conditional-block/save.js");



var __ = wp.i18n.__;
var name = _blocks_conditional_block_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_conditional_block_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Conditional Block'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  useEditProps: ['uniqKey'],
  example: {
    innerBlocks: [{
      name: 'jet-forms/text-field',
      attributes: {
        label: 'Title'
      }
    }, {
      name: 'jet-forms/radio-field',
      attributes: {
        label: 'Item Radio',
        field_options: [{
          label: 'First Option',
          value: ''
        }, {
          label: 'Second Option',
          value: ''
        }, {
          label: 'Third Option',
          value: ''
        }]
      }
    }]
  }
};


/***/ }),

/***/ "./editor/blocks/conditional-block/options.js":
/*!****************************************************!*\
  !*** ./editor/blocks/conditional-block/options.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });
var options = {
  condition: {
    type: 'hide',
    field: '',
    operator: '',
    value: '',
    set_value: ''
  },
  conditionTypes: [{
    label: '--',
    value: ''
  }, {
    label: 'Hide this field if...',
    value: 'hide'
  }, {
    label: 'Show this field if...',
    value: 'show'
  }, {
    label: 'Set value for this field if...',
    value: 'set_value',
    condition: 'isSingleField'
  }],
  conditionOperators: [{
    label: '--',
    value: ''
  }, {
    label: 'Equal',
    value: 'equal'
  }, {
    label: 'Greater than',
    value: 'greater'
  }, {
    label: 'Less than',
    value: 'less'
  }, {
    label: 'Between',
    value: 'between'
  }, {
    label: 'In the list',
    value: 'one_of'
  }, {
    label: 'Contain text',
    value: 'contain'
  }]
};

/***/ }),

/***/ "./editor/blocks/conditional-block/save.js":
/*!*************************************************!*\
  !*** ./editor/blocks/conditional-block/save.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConditionalSave)
/* harmony export */ });
var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InnerBlocks = _ref.InnerBlocks;

function ConditionalSave(props) {
  return wp.element.createElement(InnerBlocks.Content, null);
}

/***/ }),

/***/ "./editor/blocks/controls/default-meta.js":
/*!************************************************!*\
  !*** ./editor/blocks/controls/default-meta.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;
var __ = wp.i18n.__;

var JetDefaultMetaControl = /*#__PURE__*/function (_wp$element$Component) {
  _inherits(JetDefaultMetaControl, _wp$element$Component);

  var _super = _createSuper(JetDefaultMetaControl);

  function JetDefaultMetaControl(props) {
    var _this;

    _classCallCheck(this, JetDefaultMetaControl);

    _this = _super.call(this, props);
    _this.addNewOption = _this.addNewOption.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(JetDefaultMetaControl, [{
    key: "getDefaultMeta",
    value: function getDefaultMeta() {
      if (!this.props.defaultMeta) {
        return [];
      }

      return Array.from(this.props.defaultMeta);
    }
  }, {
    key: "addNewOption",
    value: function addNewOption() {
      var items = this.getDefaultMeta();
      items.push({
        key: '',
        value: ''
      });
      this.props.onChange(items);
    }
  }, {
    key: "removeOption",
    value: function removeOption(index) {
      var items = this.getDefaultMeta();
      items.splice(index, 1);
      this.props.onChange(items);
    }
  }, {
    key: "onChangeValue",
    value: function onChangeValue(_ref) {
      var value = _ref.value,
          name = _ref.name,
          id = _ref.id;
      var items = Array.from(this.props.defaultMeta);
      items[id][name] = value;
      this.props.onChange(items);
    }
    /* eslint-disable jsx-a11y/no-onchange */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return wp.element.createElement("div", {
        className: "jet-user-fields-map__list"
      }, this.getDefaultMeta().map(function (currentItem, index) {
        return wp.element.createElement("div", {
          className: "jet-user-meta__row",
          key: 'jet-form-builder-repeater-item-' + index
        }, wp.element.createElement("div", {
          className: "repeater-item-column jet-margin-bottom-wrapper"
        }, wp.element.createElement(TextControl, {
          key: "meta_key",
          label: __('Meta Key', 'jet-form-builder'),
          value: currentItem.key,
          onChange: function onChange(newValue) {
            _this2.onChangeValue({
              value: newValue,
              name: 'key',
              id: index
            });
          }
        }), wp.element.createElement(TextControl, {
          key: "meta_value",
          label: __('Meta Value', 'jet-form-builder'),
          value: currentItem.value,
          onChange: function onChange(newValue) {
            _this2.onChangeValue({
              value: newValue,
              name: 'value',
              id: index
            });
          }
        })), wp.element.createElement("div", {
          className: "repeater-item-column"
        }, wp.element.createElement(Button, {
          icon: "dismiss",
          label: "Remove",
          onClick: function onClick() {
            return _this2.removeOption(index);
          }
        })));
      }), wp.element.createElement(Button, {
        className: "button-add-option",
        isSecondary: true,
        onClick: this.addNewOption
      }, __('Add New Option')));
    }
  }]);

  return JetDefaultMetaControl;
}(wp.element.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JetDefaultMetaControl);

/***/ }),

/***/ "./editor/blocks/date-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/date-field/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var InputControl = wp.components.InputControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function DateEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      isSelected = props.isSelected,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      blockName = _props$editProps.blockName,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('JetForm-toolbar')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(ToggleControl, {
    key: "is_timestamp",
    label: __('Is Timestamp'),
    checked: attributes.is_timestamp,
    help: attrHelp('is_timestamp'),
    onChange: function onChange(newValue) {
      setAttributes({
        is_timestamp: Boolean(newValue)
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    onChange: function onChange() {},
    key: "place_holder_block_".concat(blockName),
    placeholder: 'Input type="date"'
  })))];
}

/***/ }),

/***/ "./editor/blocks/date-field/index.js":
/*!*******************************************!*\
  !*** ./editor/blocks/date-field/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_date_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/date-field/edit.js");
/* harmony import */ var _blocks_date_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/date-field/block.json */ "../blocks-src/date-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_date_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_date_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Date Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Date Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/datetime-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/datetime-field/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTimeEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody;
function DateTimeEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(ToggleControl, {
    key: uniqKey('is_timestamp'),
    label: __('Is Timestamp', 'jet-form-builder'),
    checked: attributes.is_timestamp,
    help: attrHelp('is_timestamp'),
    onChange: function onChange(newValue) {
      setAttributes({
        is_timestamp: Boolean(newValue)
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    onChange: function onChange() {},
    key: uniqKey('place_holder_block'),
    placeholder: 'Input type="datetime-local"'
  })))];
}

/***/ }),

/***/ "./editor/blocks/datetime-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/datetime-field/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_datetime_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/datetime-field/edit.js");
/* harmony import */ var _blocks_datetime_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/datetime-field/block.json */ "../blocks-src/datetime-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_datetime_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_datetime_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Datetime field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Datetime Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/form-break-field/edit.js":
/*!************************************************!*\
  !*** ./editor/blocks/form-break-field/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormBreakEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps,
    RichText = _ref.RichText;

var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl;
function FormBreakEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp,
      context = props.context;
  return [props.isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields'),
    autoCompleteLabel: false
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(ToggleControl, {
    key: uniqKey('add_next_button'),
    label: __('Enable "Next" Button', 'jet-form-builder'),
    checked: attributes.add_next_button,
    help: attrHelp('add_next_button'),
    onChange: function onChange(add_next_button) {
      return setAttributes({
        add_next_button: add_next_button
      });
    }
  }), wp.element.createElement(TextControl, {
    label: __('Label of progress', 'jet-form-builder'),
    value: attributes.label_progress,
    help: attrHelp('label_progress'),
    onChange: function onChange(newValue) {
      props.setAttributes({
        label_progress: newValue
      });
    }
  }), wp.element.createElement(TextareaControl, {
    key: "page_break_disabled",
    value: attributes.page_break_disabled,
    label: __('Validation message', 'jet-form-builder'),
    help: attrHelp('page_break_disabled'),
    onChange: function onChange(newValue) {
      setAttributes({
        page_break_disabled: newValue
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement("div", {
    className: 'jet-form-builder__next-page-wrap'
  }, attributes.add_next_button ? wp.element.createElement(Button, {
    isSecondary: true,
    key: "next_page_button",
    className: "jet-form-builder__next-page"
  }, wp.element.createElement(RichText, {
    placeholder: "Next...",
    allowedFormats: [],
    value: attributes.label,
    onChange: function onChange(label) {
      return setAttributes({
        label: label
      });
    }
  })) : wp.element.createElement("span", null, __('Form Break', 'jet-form-builder')), attributes.add_prev && wp.element.createElement(Button, {
    isSecondary: true,
    key: "prev_page_button",
    className: "jet-form-builder__prev-page"
  }, wp.element.createElement(RichText, {
    placeholder: "Prev...",
    allowedFormats: [],
    value: attributes.prev_label,
    onChange: function onChange(prev_label) {
      return setAttributes({
        prev_label: prev_label
      });
    }
  }))))];
}

/***/ }),

/***/ "./editor/blocks/form-break-field/index.js":
/*!*************************************************!*\
  !*** ./editor/blocks/form-break-field/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_form_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/form-break-field/edit.js");
/* harmony import */ var _blocks_form_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/form-break-field/block.json */ "../blocks-src/form-break-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_form_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_form_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Form Break Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Next Page'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/form-fields.js":
/*!**************************************!*\
  !*** ./editor/blocks/form-fields.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterFormFields)
/* harmony export */ });
/* harmony import */ var _calculated_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculated-field */ "./editor/blocks/calculated-field/index.js");
/* harmony import */ var _checkbox_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-field */ "./editor/blocks/checkbox-field/index.js");
/* harmony import */ var _conditional_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditional-block */ "./editor/blocks/conditional-block/index.js");
/* harmony import */ var _date_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-field */ "./editor/blocks/date-field/index.js");
/* harmony import */ var _datetime_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datetime-field */ "./editor/blocks/datetime-field/index.js");
/* harmony import */ var _form_break_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-break-field */ "./editor/blocks/form-break-field/index.js");
/* harmony import */ var _group_break_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-break-field */ "./editor/blocks/group-break-field/index.js");
/* harmony import */ var _heading_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heading-field */ "./editor/blocks/heading-field/index.js");
/* harmony import */ var _hidden_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hidden-field */ "./editor/blocks/hidden-field/index.js");
/* harmony import */ var _media_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-field */ "./editor/blocks/media-field/index.js");
/* harmony import */ var _number_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./number-field */ "./editor/blocks/number-field/index.js");
/* harmony import */ var _radio_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./radio-field */ "./editor/blocks/radio-field/index.js");
/* harmony import */ var _range_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./range-field */ "./editor/blocks/range-field/index.js");
/* harmony import */ var _repeater_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./repeater-field */ "./editor/blocks/repeater-field/index.js");
/* harmony import */ var _select_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select-field */ "./editor/blocks/select-field/index.js");
/* harmony import */ var _submit_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./submit-field */ "./editor/blocks/submit-field/index.js");
/* harmony import */ var _text_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./text-field */ "./editor/blocks/text-field/index.js");
/* harmony import */ var _textarea_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./textarea-field */ "./editor/blocks/textarea-field/index.js");
/* harmony import */ var _time_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./time-field */ "./editor/blocks/time-field/index.js");
/* harmony import */ var _wysiwyg_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./wysiwyg-field */ "./editor/blocks/wysiwyg-field/index.js");
/* harmony import */ var _color_picker_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./color-picker-field */ "./editor/blocks/color-picker-field/index.js");
/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./progress-bar */ "./editor/blocks/progress-bar/index.js");
/* harmony import */ var _block_wrappers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./block-wrappers */ "./editor/blocks/block-wrappers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























var registerBlockType = wp.blocks.registerBlockType;
var applyFilters = wp.hooks.applyFilters;
var fields = applyFilters('jet.fb.register.fields', [_calculated_field__WEBPACK_IMPORTED_MODULE_0__, _checkbox_field__WEBPACK_IMPORTED_MODULE_1__, _conditional_block__WEBPACK_IMPORTED_MODULE_2__, _datetime_field__WEBPACK_IMPORTED_MODULE_4__, _date_field__WEBPACK_IMPORTED_MODULE_3__, _form_break_field__WEBPACK_IMPORTED_MODULE_5__, _group_break_field__WEBPACK_IMPORTED_MODULE_6__, _heading_field__WEBPACK_IMPORTED_MODULE_7__, _hidden_field__WEBPACK_IMPORTED_MODULE_8__, _media_field__WEBPACK_IMPORTED_MODULE_9__, _number_field__WEBPACK_IMPORTED_MODULE_10__, _radio_field__WEBPACK_IMPORTED_MODULE_11__, _range_field__WEBPACK_IMPORTED_MODULE_12__, _repeater_field__WEBPACK_IMPORTED_MODULE_13__, _select_field__WEBPACK_IMPORTED_MODULE_14__, _submit_field__WEBPACK_IMPORTED_MODULE_15__, _text_field__WEBPACK_IMPORTED_MODULE_16__, _textarea_field__WEBPACK_IMPORTED_MODULE_17__, _time_field__WEBPACK_IMPORTED_MODULE_18__, _wysiwyg_field__WEBPACK_IMPORTED_MODULE_19__, _color_picker_field__WEBPACK_IMPORTED_MODULE_20__, _progress_bar__WEBPACK_IMPORTED_MODULE_21__]);

var registerFormField = function registerFormField(block) {
  if (!block) {
    return;
  }

  var metadata = block.metadata,
      settings = block.settings,
      name = block.name;
  settings.edit = _block_wrappers__WEBPACK_IMPORTED_MODULE_22__.withCustomProps(block);
  registerBlockType(name, _objectSpread(_objectSpread({}, metadata), settings));
};

function sortBlocks(_ref, _ref2) {
  var a = _ref.settings.title;
  var b = _ref2.settings.title;

  try {
    return a.localeCompare(b);
  } catch (e) {
    return 0;
  }
}

function RegisterFormFields() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : fields;
  blocks.sort(sortBlocks);
  blocks.forEach(applyFilters('jet.fb.register.fields.handler', registerFormField));
}

/***/ }),

/***/ "./editor/blocks/group-break-field/edit.js":
/*!*************************************************!*\
  !*** ./editor/blocks/group-break-field/edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupBreakEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

function GroupBreakEdit(props) {
  var blockProps = useBlockProps();
  var isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", blockProps, wp.element.createElement("div", {
    className: 'jet-form-builder__group-break'
  }, wp.element.createElement("span", null, __('GROUP BREAK'))))];
}

/***/ }),

/***/ "./editor/blocks/group-break-field/index.js":
/*!**************************************************!*\
  !*** ./editor/blocks/group-break-field/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_group_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/group-break-field/edit.js");
/* harmony import */ var _blocks_group_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/group-break-field/block.json */ "../blocks-src/group-break-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_group_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_group_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Group Break Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey'],
  example: {}
};


/***/ }),

/***/ "./editor/blocks/heading-field/edit.js":
/*!*********************************************!*\
  !*** ./editor/blocks/heading-field/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeadingEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

function HeadingEdit(props) {
  var blockProps = useBlockProps();
  var isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper'),
    valueIfEmptyLabel: 'Heading'
  }, props)))];
}

/***/ }),

/***/ "./editor/blocks/heading-field/index.js":
/*!**********************************************!*\
  !*** ./editor/blocks/heading-field/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_heading_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/heading-field/edit.js");
/* harmony import */ var _blocks_heading_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/heading-field/block.json */ "../blocks-src/heading-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_heading_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_heading_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Heading Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName'],
  example: {
    attributes: {
      label: 'Heading Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/help-messages-config.js":
/*!***********************************************!*\
  !*** ./editor/blocks/help-messages-config.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesConfig": () => (/* binding */ messagesConfig)
/* harmony export */ });
var __ = wp.i18n.__;
var MEDIA = 'jet-forms/media-field';
var FORM_BREAK = 'jet-forms/form-break-field';
var DATE = 'jet-forms/date-field';
var DATETIME = 'jet-forms/datetime-field';
var RADIO = 'jet-forms/radio-field';
var CHECKBOX = 'jet-forms/checkbox-field';
var SELECT = 'jet-forms/select-field';
var RANGE = 'jet-forms/range-field';
var REPEATER = 'jet-forms/repeater-field';
var TEXT = 'jet-forms/text-field';
var TIME = 'jet-forms/time-field';
var messagesConfig = [{
  attribute: 'is_timestamp',
  to: [DATE, DATETIME],
  message: __("Check this if you want to send value of this \n\t\tfield as timestamp instead of plain datetime")
}, {
  attribute: 'default',
  to: [DATE],
  message: __('Plain date should be in yyyy-mm-dd format')
}, {
  attribute: 'default',
  to: [DATETIME],
  message: __('Plain datetime should be in yyyy-MM-ddThh:mm format')
}, {
  attribute: 'page_break_disabled',
  to: [FORM_BREAK],
  message: __("Text to show if next page button is disabled. \n\t\tFor example - \"Fill required fields\" etc.")
}, {
  attribute: 'insert_attachment',
  to: [MEDIA],
  message: __("If checked new attachment will be inserted for uploaded file. \n\t\tNote: work only for logged-in users!")
}, {
  attribute: 'max_files',
  to: [MEDIA],
  message: __('If not set allow to upload 1 file')
}, {
  attribute: 'max_size',
  to: [MEDIA],
  message: __('Mb')
}, {
  attribute: 'allowed_mimes',
  to: [MEDIA],
  message: __("If no MIME type selected will allow all types. \n\t\tHold down the Ctrl (windows) / Command (Mac) button to select multiple options.")
}, {
  attribute: 'value_from_meta',
  to: [RADIO, CHECKBOX, SELECT],
  message: __("By default post/term ID is used as value. Here you can \n\t\tset meta field name to use its value as form field value")
}, {
  attribute: 'calculated_value_from_key',
  to: [RADIO, CHECKBOX, SELECT],
  message: __("Here you can set meta field name to use its value \n\t\tas calculated value for current form field")
}, {
  attribute: 'generator_field',
  to: [RADIO, CHECKBOX, SELECT],
  message: __("For Numbers range generator set field with max range value"),
  conditions: {
    generator_function: 'num_range'
  }
}, {
  attribute: 'switch_on_change',
  to: [SELECT],
  message: __("Check this to switch page to next on current value change")
}, {
  attribute: 'prefix_suffix',
  to: [RANGE],
  message: __('For space before or after text use: &nbsp;')
}, {
  attribute: 'calc_hidden',
  to: [REPEATER],
  message: __('Check this to hide calculated field')
}, {
  attribute: 'input_mask_default',
  to: [TEXT],
  message: __("Examples: (999) 999-9999 - static mask, 9-a{1,3}9{1,3} - mask with dynamic syntax \n\t\tDefault masking definitions: 9 - numeric, a - alphabetical, * - alphanumeric")
}, {
  attribute: 'input_mask_datetime_link',
  to: [TEXT],
  message: "https://github.com/RobinHerbots/Inputmask/blob/5.x/README_date.md"
}, {
  attribute: 'default',
  to: [TIME],
  message: __('Plain time should be in hh:mm:ss format')
}, {
  attribute: 'label_progress',
  to: [FORM_BREAK],
  message: __("To set/change a last progress name add a Form Break Field at the very end of the form.")
}];


/***/ }),

/***/ "./editor/blocks/hidden-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/hidden-field/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HiddenEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/hidden-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var __ = wp.i18n.__;
var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var _JetFBActions = JetFBActions,
    getConvertedName = _JetFBActions.getConvertedName;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps,
    RichText = _ref.RichText;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    Card = _wp$components.Card,
    CardHeader = _wp$components.CardHeader,
    CardBody = _wp$components.CardBody,
    BaseControl = _wp$components.BaseControl;
function HiddenEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps();

  var setDynamicName = function setDynamicName(newValue) {
    if (newValue && (!attributes.name || 'hidden_field_name' === attributes.name)) {
      setAttributes({
        name: newValue
      });
    }
  };

  var checkFieldValueInput = function checkFieldValueInput() {
    return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
      key: "field_value",
      label: "Field Value",
      labelPosition: "top",
      value: attributes.field_value,
      onChange: function onChange(newValue) {
        setAttributes({
          field_value: newValue
        });
        setDynamicName(newValue);
      },
      options: _options__WEBPACK_IMPORTED_MODULE_0__.hiddenValues
    }), ['post_meta', 'user_meta'].includes(attributes.field_value) && wp.element.createElement(TextControl, {
      key: "hidden_value_field",
      label: "Meta Field to Get Value From",
      value: attributes.hidden_value_field,
      onChange: function onChange(newValue) {
        setAttributes({
          hidden_value_field: newValue
        });
      }
    }), 'query_var' === attributes.field_value && wp.element.createElement(TextControl, {
      key: "query_var_key",
      label: "Query Variable Key",
      value: attributes.query_var_key,
      onChange: function onChange(newValue) {
        setAttributes({
          query_var_key: newValue
        });
      }
    }), 'current_date' === attributes.field_value && wp.element.createElement(TextControl, {
      key: "date_format",
      label: "Format",
      value: attributes.date_format,
      onChange: function onChange(newValue) {
        setAttributes({
          date_format: newValue
        });
      }
    }), 'manual_input' === attributes.field_value && wp.element.createElement(TextControl, {
      key: "hidden_value",
      label: "Value",
      value: attributes.hidden_value,
      onChange: function onChange(newValue) {
        setAttributes({
          hidden_value: newValue
        });
      }
    }));
  };

  var _hiddenValues$find = _options__WEBPACK_IMPORTED_MODULE_0__.hiddenValues.find(function (option) {
    return option.value === attributes.field_value;
  }),
      _hiddenValues$find$la = _hiddenValues$find.label,
      label = _hiddenValues$find$la === void 0 ? 'Please set `Field Value`' : _hiddenValues$find$la;

  var resultLabel = [label];

  switch (attributes.field_value) {
    case 'post_meta':
    case 'user_meta':
      resultLabel.push(attributes.hidden_value_field);
      break;

    case 'query_var':
      resultLabel.push(attributes.query_var_key);
      break;

    case 'current_date':
      resultLabel.push(attributes.date_format);
      break;

    case 'manual_input':
      resultLabel.push(attributes.hidden_value);
      break;
  }

  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, checkFieldValueInput()), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(Card, {
    isElevated: true
  }, wp.element.createElement(CardHeader, null, wp.element.createElement(RichText, {
    placeholder: "hidden_field_name...",
    allowedFormats: [],
    value: attributes.name,
    onChange: function onChange(name) {
      return setAttributes({
        name: name
      });
    }
  })), wp.element.createElement(CardBody, null, isSelected && checkFieldValueInput(), !isSelected && resultLabel.join(': '))))];
}
;

/***/ }),

/***/ "./editor/blocks/hidden-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/hidden-field/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_hidden_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/hidden-field/edit.js");
/* harmony import */ var _blocks_hidden_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/hidden-field/block.json */ "../blocks-src/hidden-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_hidden_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_hidden_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Hidden Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName'],
  example: {
    attributes: {
      field_value: 'post_id'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/hidden-field/options.js":
/*!***********************************************!*\
  !*** ./editor/blocks/hidden-field/options.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hiddenValues": () => (/* binding */ hiddenValues)
/* harmony export */ });
var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools;
var __ = wp.i18n.__;
var hiddenValues = Tools.withPlaceholder([{
  value: 'post_id',
  label: __('Current Post ID', 'jet-form-builder')
}, {
  value: 'post_title',
  label: __('Current Post Title', 'jet-form-builder')
}, {
  value: 'post_url',
  label: __('Current Post/Page URL', 'jet-form-builder')
}, {
  value: 'post_meta',
  label: __('Current Post Meta', 'jet-form-builder')
}, {
  value: 'user_id',
  label: __('Current User ID', 'jet-form-builder')
}, {
  value: 'user_email',
  label: __('Current User Email', 'jet-form-builder')
}, {
  value: 'user_name',
  label: __('Current User Name', 'jet-form-builder')
}, {
  value: 'user_meta',
  label: __('Current User Meta', 'jet-form-builder')
}, {
  value: 'author_id',
  label: __('Current Post Author ID', 'jet-form-builder')
}, {
  value: 'author_email',
  label: __('Current Post Author Email', 'jet-form-builder')
}, {
  value: 'author_name',
  label: __('Current Post Author Name', 'jet-form-builder')
}, {
  value: 'query_var',
  label: __('URL Query Variable', 'jet-form-builder')
}, {
  value: 'current_date',
  label: __('Current Date', 'jet-form-builder')
}, {
  value: 'manual_input',
  label: __('Manual Input', 'jet-form-builder')
}]);


/***/ }),

/***/ "./editor/blocks/media-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/media-field/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MediaEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/media-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    useBlockProps = _ref.useBlockProps,
    InspectorControls = _ref.InspectorControls;

var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var _wp$components2 = wp.components,
    NumberControl = _wp$components2.NumberControl,
    InputControl = _wp$components2.InputControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

var localizeData = window.jetFormMediaFieldData;
function MediaEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(SelectControl, {
    key: "allowed_user_cap",
    label: __('User access'),
    labelPosition: "top",
    value: attributes.allowed_user_cap,
    onChange: function onChange(newValue) {
      setAttributes({
        allowed_user_cap: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.userAccess
  }), 'any_user' !== attributes.allowed_user_cap && wp.element.createElement(ToggleControl, {
    key: "insert_attachment",
    label: __('Insert attachment'),
    checked: attributes.insert_attachment,
    help: attrHelp('insert_attachment'),
    onChange: function onChange(newValue) {
      setAttributes({
        insert_attachment: Boolean(newValue)
      });
    }
  }), 'any_user' !== attributes.allowed_user_cap && attributes.insert_attachment && wp.element.createElement(SelectControl, {
    key: "value_format",
    label: __('Field value'),
    labelPosition: "top",
    value: attributes.value_format,
    onChange: function onChange(newValue) {
      props.setAttributes({
        value_format: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.valueFormats
  }), wp.element.createElement(NumberControl, {
    key: "max_files",
    label: __('Maximum allowed files to upload'),
    labelPosition: "top",
    help: attrHelp('max_files'),
    value: attributes.max_files,
    onChange: function onChange(newValue) {
      props.setAttributes({
        max_files: parseInt(newValue)
      });
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Maximum size in Mb'),
    labelPosition: "top",
    key: "max_size",
    help: attrHelp('max_size'),
    value: attributes.max_size,
    step: 0.01,
    onChange: function onChange(newValue) {
      props.setAttributes({
        max_size: Number(newValue)
      });
    }
  }), wp.element.createElement(SelectControl, {
    multiple: true,
    className: "field-mime-types",
    key: "allowed_mimes",
    label: __('Allow MIME types'),
    labelPosition: "top",
    help: attrHelp('allowed_mimes'),
    value: attributes.allowed_mimes,
    onChange: function onChange(newValue) {
      props.setAttributes({
        allowed_mimes: newValue
      });
    },
    options: localizeData.mime_types
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(InputControl, {
    key: uniqKey('place_holder_block_new'),
    type: 'file',
    disabled: true
  })))];
}

/***/ }),

/***/ "./editor/blocks/media-field/index.js":
/*!********************************************!*\
  !*** ./editor/blocks/media-field/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_media_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/media-field/edit.js");
/* harmony import */ var _blocks_media_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/media-field/block.json */ "../blocks-src/media-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_media_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_media_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Media Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Thumbnail & file',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/media-field/options.js":
/*!**********************************************!*\
  !*** ./editor/blocks/media-field/options.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAccess": () => (/* binding */ userAccess),
/* harmony export */   "valueFormats": () => (/* binding */ valueFormats)
/* harmony export */ });
var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools;
var userAccess = Tools.withPlaceholder([{
  value: "all",
  label: "Any registered user"
}, {
  value: "upload_files",
  label: "Any user, who allowed to upload files"
}, {
  value: "edit_posts",
  label: "Any user, who allowed to edit posts"
}, {
  value: "any_user",
  label: "Any user ( incl. Guest )"
}]);
var valueFormats = Tools.withPlaceholder([{
  "value": "id",
  "label": "Attachment ID"
}, {
  "value": "url",
  "label": "Attachment URL"
}, {
  "value": "both",
  "label": "Array with attachment ID and URL"
}]);


/***/ }),

/***/ "./editor/blocks/number-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/number-field/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    __experimentalInputControl = _wp$components.__experimentalInputControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var _wp$components2 = wp.components,
    InputControl = _wp$components2.InputControl,
    NumberControl = _wp$components2.NumberControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function NumberEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;

  var changeNumberValue = function changeNumberValue(key, newValue) {
    props.setAttributes(_defineProperty({}, key, newValue ? parseFloat(newValue) : null));
  };

  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(NumberControl, {
    label: __('Min Value'),
    labelPosition: "top",
    key: "min",
    value: attributes.min,
    onChange: function onChange(newValue) {
      return changeNumberValue('min', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max Value'),
    labelPosition: "top",
    key: "max",
    value: attributes.max,
    onChange: function onChange(newValue) {
      return changeNumberValue('max', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Step'),
    labelPosition: "top",
    key: "step",
    step: 0.01,
    value: attributes.step,
    onChange: function onChange(newValue) {
      return changeNumberValue('step', newValue);
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(NumberControl, {
    placeholder: attributes.placeholder,
    key: uniqKey('place_holder_block'),
    min: attributes.min || 0,
    max: attributes.max || 1000,
    step: attributes.step || 1
  })))];
}

/***/ }),

/***/ "./editor/blocks/number-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/number-field/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_number_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/number-field/edit.js");
/* harmony import */ var _blocks_number_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/number-field/block.json */ "../blocks-src/number-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_number_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_number_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Number Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName'],
  example: {
    attributes: {
      label: 'Number Field',
      desc: 'Field description...',
      placeholder: 'Input your number...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/progress-bar/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/progress-bar/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressBar)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps,
    RichText = _ref.RichText;

var RawHTML = wp.element.RawHTML;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
function ProgressBar(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp,
      context = props.context;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      progressHtml = _useState2[0],
      setProgressHtml = _useState2[1];

  var getProgressTypeHtml = function getProgressTypeHtml(type) {
    var progress = JetFormProgressBar.progress_types.find(function (elem) {
      return type === elem.value;
    });

    if (!progress) {
      return '';
    }

    return progress.html;
  };

  useEffect(function () {
    setProgressHtml(getProgressTypeHtml(attributes.progress_type));
  }, []);
  return [wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(FieldSettingsWrapper, _extends({
    key: uniqKey('FieldSettingsWrapper')
  }, props), 1 < JetFormProgressBar.progress_types.length && wp.element.createElement(SelectControl, {
    key: uniqKey('progress_type'),
    label: __('Progress Bar Type', 'jet-form-builder'),
    value: attributes.progress_type,
    onChange: function onChange(progress_type) {
      setAttributes({
        progress_type: progress_type
      });
      setProgressHtml(getProgressTypeHtml(progress_type));
    },
    options: JetFormProgressBar.progress_types
  }))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(RawHTML, null, progressHtml))];
}

/***/ }),

/***/ "./editor/blocks/progress-bar/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/progress-bar/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_progress_bar_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/progress-bar/edit.js");
/* harmony import */ var _blocks_progress_bar_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/progress-bar/block.json */ "../blocks-src/progress-bar/block.json");


var __ = wp.i18n.__;
var name = _blocks_progress_bar_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_progress_bar_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Progress Bar', 'jet-form-builder'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {}
  }
};


/***/ }),

/***/ "./editor/blocks/radio-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/radio-field/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RadioEdit)
/* harmony export */ });
/* harmony import */ var _components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check-placeholder */ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js");
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
/* harmony import */ var _components_base_select_check_radio_custom_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/base-select-check-radio/custom-template */ "./editor/components/base-select-check-radio/custom-template.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldControl = _JetFBComponents.FieldControl;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var ToggleControl = wp.components.ToggleControl;
function RadioEdit(props) {
  var isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp,
      attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__.SelectRadioCheckPlaceholder, _extends({
    key: uniqKey('SelectRadioCheckPlaceholder'),
    scriptData: window.JetFormRadioFieldData
  }, props)), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__["default"], props, wp.element.createElement(_components_base_select_check_radio_custom_template__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    listingTypes: window.JetFormRadioFieldData.listings_list
  }, props)), wp.element.createElement(ToggleControl, {
    key: "switch_on_change",
    label: __('Switch page on change'),
    checked: attributes.switch_on_change,
    help: attrHelp('switch_on_change'),
    onChange: function onChange(newValue) {
      setAttributes({
        switch_on_change: Boolean(newValue)
      });
    }
  }), wp.element.createElement(FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props))))];
}

/***/ }),

/***/ "./editor/blocks/radio-field/index.js":
/*!********************************************!*\
  !*** ./editor/blocks/radio-field/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_radio_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/radio-field/edit.js");
/* harmony import */ var _blocks_radio_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/radio-field/block.json */ "../blocks-src/radio-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_radio_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_radio_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Radio Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Radio Field',
      field_options: [{
        label: 'First Option',
        value: ''
      }, {
        label: 'Second Option',
        value: ''
      }, {
        label: 'Third Option',
        value: ''
      }]
    }
  }
};


/***/ }),

/***/ "./editor/blocks/range-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/range-field/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RangeEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var useState = wp.element.useState;
var _wp$components2 = wp.components,
    NumberControl = _wp$components2.NumberControl,
    InputControl = _wp$components2.InputControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function RangeEdit(props) {
  var blockProps = useBlockProps();

  var _useState = useState(50),
      _useState2 = _slicedToArray(_useState, 2),
      rangeValue = _useState2[0],
      setRangeValue = _useState2[1];

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [props.isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings'),
    key: uniqKey('PanelBody')
  }, wp.element.createElement(NumberControl, {
    label: __('Min Value'),
    labelPosition: "top",
    key: "min",
    value: attributes.min,
    onChange: function onChange(newValue) {
      setAttributes({
        min: parseFloat(newValue)
      });
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max Value'),
    labelPosition: "top",
    key: "max",
    value: attributes.max,
    onChange: function onChange(newValue) {
      setAttributes({
        max: parseFloat(newValue)
      });
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Step'),
    labelPosition: "top",
    key: "step",
    value: attributes.step,
    onChange: function onChange(newValue) {
      setAttributes({
        step: parseFloat(newValue)
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "prefix",
    label: __('Value prefix'),
    value: attributes.prefix,
    help: attrHelp('prefix_suffix'),
    onChange: function onChange(newValue) {
      setAttributes({
        prefix: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "suffix",
    label: __('Value suffix'),
    value: attributes.suffix,
    help: attrHelp('prefix_suffix'),
    onChange: function onChange(newValue) {
      setAttributes({
        suffix: newValue
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper'),
    wrapClasses: ['range-wrap']
  }, props), wp.element.createElement("div", {
    className: "range-flex-wrap"
  }, wp.element.createElement(InputControl, {
    key: uniqKey('placeholder_block'),
    type: 'range',
    min: attributes.min || 0,
    max: attributes.max || 100,
    step: attributes.step || 1,
    onChange: setRangeValue
  }), wp.element.createElement("div", {
    className: 'jet-form-builder__field-value'
  }, wp.element.createElement("span", {
    className: 'jet-form-builder__field-value-prefix'
  }, attributes.prefix), wp.element.createElement("span", null, rangeValue), wp.element.createElement("span", {
    className: 'jet-form-builder__field-value-suffix'
  }, attributes.suffix)))))];
}

/***/ }),

/***/ "./editor/blocks/range-field/index.js":
/*!********************************************!*\
  !*** ./editor/blocks/range-field/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_range_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/range-field/edit.js");
/* harmony import */ var _blocks_range_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/range-field/block.json */ "../blocks-src/range-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_range_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_range_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Range Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Range Field',
      prefix: 'price: ',
      suffix: '$'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/repeater-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/repeater-field/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RepeaterEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/repeater-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var _JetFBActions = JetFBActions,
    getFieldsWithoutCurrent = _JetFBActions.getFieldsWithoutCurrent,
    Tools = _JetFBActions.Tools;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    InnerBlocks = _ref.InnerBlocks,
    useBlockProps = _ref.useBlockProps,
    RichText = _ref.RichText;

var select = wp.data.select;
var useState = wp.element.useState;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    BaseControl = _wp$components.BaseControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function RepeaterEdit(props) {
  var blockProps = useBlockProps();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMacros = _useState2[0],
      setShowMacros = _useState2[1];

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var formFields = getFieldsWithoutCurrent();
  var meta = select('core/editor').getEditedPostAttribute('meta') || {};
  var label = Tools.getLabel(meta, attributes);

  var insertMacros = function insertMacros(macros) {
    var formula = attributes.calc_formula || '';
    props.setAttributes({
      calc_formula: formula + '%FIELD::' + macros + '%'
    });
  };

  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props), 'custom' === attributes.repeater_calc_type && wp.element.createElement(Button, {
    key: uniqKey('Button'),
    isTertiary: true,
    isSmall: true,
    icon: showMacros ? 'no-alt' : 'admin-tools',
    onClick: function onClick() {
      return setShowMacros(function (toggle) {
        return !toggle;
      });
    }
  }), showMacros && wp.element.createElement(Popover, {
    position: 'bottom left',
    key: uniqKey('Popover')
  }, formFields.length && wp.element.createElement(PanelBody, {
    title: 'Form Fields'
  }, formFields.map(function (_ref2, index) {
    var value = _ref2.value;
    return wp.element.createElement("div", {
      key: uniqKey('field_' + value + index)
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        insertMacros(value);
      }
    }, '%FIELD::' + value + '%'));
  })))), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings'),
    key: uniqKey('PanelBody')
  }, wp.element.createElement(SelectControl, {
    key: "manage_items_count",
    label: __('Manage repeater items count'),
    labelPosition: "top",
    value: attributes.manage_items_count,
    onChange: function onChange(newValue) {
      props.setAttributes({
        manage_items_count: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.manageItemsCount
  }), 'manually' === attributes.manage_items_count && wp.element.createElement(TextControl, {
    key: "new_item_label",
    label: __('Add New Item Label'),
    value: attributes.new_item_label,
    onChange: function onChange(newValue) {
      props.setAttributes({
        new_item_label: newValue
      });
    }
  }), 'dynamically' === attributes.manage_items_count && wp.element.createElement(SelectControl, {
    key: "manage_items_count_field",
    label: __('Field items count'),
    labelPosition: "top",
    value: attributes.manage_items_count_field,
    onChange: function onChange(newValue) {
      props.setAttributes({
        manage_items_count_field: newValue
      });
    },
    options: formFields
  }), wp.element.createElement(SelectControl, {
    key: "repeater_calc_type",
    label: __('Calculate repeater row value'),
    labelPosition: "top",
    value: attributes.repeater_calc_type,
    onChange: function onChange(newValue) {
      props.setAttributes({
        repeater_calc_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.calcType
  }), 'custom' === attributes.repeater_calc_type && wp.element.createElement("div", {
    className: "jet-form-editor__row-notice"
  }, __('Set math formula to calculate field value.', 'jet-form-builder'), wp.element.createElement("br", null), __('For example:', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null), "%FIELD::quantity%*%META::price%", wp.element.createElement("br", null), wp.element.createElement("br", null), __('Where:', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%FIELD::quantity% - macros for form field value. "quantity" - is a field name to get value from', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%META::price% - macros for current post meta value. "price" - is a meta key to get value from', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null))), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('Fragment')
  }, blockProps), 'custom' === attributes.repeater_calc_type && wp.element.createElement("div", {
    className: "jet-forms__calc-formula-editor"
  }, wp.element.createElement("div", {
    className: "jet-form-editor__macros-wrap"
  }, wp.element.createElement(TextareaControl, {
    key: "calc_formula",
    value: attributes.calc_formula,
    label: __('Calculation Formula for Repeater'),
    onChange: function onChange(newValue) {
      props.setAttributes({
        calc_formula: newValue
      });
    }
  }))), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper'),
    childrenPosition: "bottom"
  }, props), wp.element.createElement(InnerBlocks, {
    key: uniqKey('repeater-fields'),
    renderAppender: function renderAppender() {
      return wp.element.createElement(InnerBlocks.ButtonBlockAppender, {
        key: uniqKey('ButtonBlockAppender')
      });
    }
  }), wp.element.createElement(Button, {
    className: 'jet-form-builder-repeater__remove',
    isSecondary: true,
    onClick: function onClick() {}
  }, "\xD7"), wp.element.createElement("div", {
    style: {
      width: '100%',
      height: '0.7em'
    }
  }), wp.element.createElement("div", {
    className: "jet-form-builder-repeater__actions"
  }, wp.element.createElement(Button, {
    className: 'jet-form-builder-repeater__new',
    isSecondary: true,
    onClick: function onClick() {}
  }, wp.element.createElement(RichText, {
    placeholder: "Add New",
    allowedFormats: [],
    value: attributes.new_item_label,
    onChange: function onChange(new_item_label) {
      return setAttributes({
        new_item_label: new_item_label
      });
    }
  })))))];
}

/***/ }),

/***/ "./editor/blocks/repeater-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/repeater-field/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_repeater_field_block_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _blocks_repeater_field_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/repeater-field/block.json */ "../blocks-src/repeater-field/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/blocks/repeater-field/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./editor/blocks/repeater-field/save.js");



var __ = wp.i18n.__;
var name = _blocks_repeater_field_block_json__WEBPACK_IMPORTED_MODULE_0__.name,
    _metadata$icon = _blocks_repeater_field_block_json__WEBPACK_IMPORTED_MODULE_0__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Repeater Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Multiple fields',
      desc: 'Field description...'
    },
    innerBlocks: [{
      name: 'jet-forms/text-field',
      attributes: {
        label: 'Item Title'
      }
    }, {
      name: 'jet-forms/radio-field',
      attributes: {
        label: 'Item Radio',
        field_options: [{
          label: 'First Option',
          value: ''
        }, {
          label: 'Second Option',
          value: ''
        }, {
          label: 'Third Option',
          value: ''
        }]
      }
    }]
  }
};


/***/ }),

/***/ "./editor/blocks/repeater-field/options.js":
/*!*************************************************!*\
  !*** ./editor/blocks/repeater-field/options.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcType": () => (/* binding */ calcType),
/* harmony export */   "manageItemsCount": () => (/* binding */ manageItemsCount)
/* harmony export */ });
var __ = wp.i18n.__;
var calcType = [{
  value: 'default',
  label: __('Default (returns rows count)')
}, {
  value: 'custom',
  label: __('Custom (calculate custom value for each row)')
}];
var manageItemsCount = [{
  value: 'manually',
  label: __('Manually')
}, {
  value: 'dynamically',
  label: __('Dynamically (get count from form field)')
}];


/***/ }),

/***/ "./editor/blocks/repeater-field/save.js":
/*!**********************************************!*\
  !*** ./editor/blocks/repeater-field/save.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RepeaterSave)
/* harmony export */ });
var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InnerBlocks = _ref.InnerBlocks;

function RepeaterSave(props) {
  return wp.element.createElement(InnerBlocks.Content, null);
}
;

/***/ }),

/***/ "./editor/blocks/select-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/select-field/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectEdit)
/* harmony export */ });
/* harmony import */ var _components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check-placeholder */ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js");
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;
var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldControl = _JetFBComponents.FieldControl,
    HorizontalLine = _JetFBComponents.HorizontalLine;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var ToggleControl = wp.components.ToggleControl;
function SelectEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__.SelectRadioCheckPlaceholder, _extends({
    scriptData: window.JetFormSelectFieldData
  }, props)), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__["default"], props, wp.element.createElement(ToggleControl, {
    key: "switch_on_change",
    label: __('Switch page on change'),
    checked: attributes.switch_on_change,
    help: attrHelp('switch_on_change'),
    onChange: function onChange(newValue) {
      setAttributes({
        switch_on_change: Boolean(newValue)
      });
    }
  }), wp.element.createElement(FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props))))];
}

/***/ }),

/***/ "./editor/blocks/select-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/select-field/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_select_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/select-field/edit.js");
/* harmony import */ var _blocks_select_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/select-field/block.json */ "../blocks-src/select-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_select_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_select_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Select Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Select Field',
      desc: 'Field description...',
      field_options: [{
        label: 'Choose option...',
        value: ''
      }]
    }
  }
};


/***/ }),

/***/ "./editor/blocks/select-radio-chekc-options.js":
/*!*****************************************************!*\
  !*** ./editor/blocks/select-radio-chekc-options.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listFrom": () => (/* binding */ listFrom)
/* harmony export */ });
var __ = wp.i18n.__;
var jetEngineVersion = window.JetFormEditorData.jetEngineVersion;
var _JetFBActions = JetFBActions,
    versionCompare = _JetFBActions.versionCompare;
var listFrom = [{
  "value": "manual_input",
  "label": __('Manual Input', 'jet-form-builder')
}, {
  "value": "posts",
  "label": __('Posts', 'jet-form-builder')
}, {
  "value": "terms",
  "label": __('Terms', 'jet-form-builder')
}, {
  "value": "meta_field",
  "label": __('Meta Field', 'jet-form-builder')
}, {
  "value": "generate",
  "label": __('Generate Dynamically', 'jet-form-builder')
}];

if ("" !== jetEngineVersion) {
  listFrom.push({
    "value": "glossary",
    "label": __('Glossary', 'jet-form-builder')
  });
}



/***/ }),

/***/ "./editor/blocks/submit-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/submit-field/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionButtonEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    Button = _wp$components.Button,
    SelectControl = _wp$components.SelectControl;
var RichText = wp.blockEditor.RichText;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var defaultClasses = ['jet-form-builder__action-button'];
function ActionButtonEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;

  var classesButton = function classesButton() {
    if (!attributes.action_type) {
      return defaultClasses;
    }

    var action = JetFormActionButton.actions.find(function (elem) {
      return attributes.action_type === elem.value;
    });

    if (!action) {
      return defaultClasses;
    }

    if (!attributes.label) {
      setAttributes({
        label: action.preset_label
      });
    }

    return [].concat(defaultClasses, [action.button_class]);
  };

  var classesWrapper = function classesWrapper() {
    if (!attributes.action_type) {
      return [];
    }

    var action = JetFormActionButton.actions.find(function (elem) {
      return attributes.action_type === elem.value;
    });

    if (!action) {
      return [];
    }

    return [].concat(defaultClasses, [action.wrapper_class]);
  };

  var _useState = useState(classesButton),
      _useState2 = _slicedToArray(_useState, 2),
      buttonClasses = _useState2[0],
      setButtonClasses = _useState2[1];

  var _useState3 = useState(classesWrapper),
      _useState4 = _slicedToArray(_useState3, 2),
      wrapperClasses = _useState4[0],
      setWrapperClasses = _useState4[1];

  useEffect(function () {
    setButtonClasses(classesButton());
    setWrapperClasses(classesWrapper());
  }, [attributes.action_type]);
  var blockProps = useBlockProps({
    className: wrapperClasses.join(' ')
  });
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields'),
    autoCompleteLabel: false
  }, props)), wp.element.createElement(FieldSettingsWrapper, _extends({}, props, {
    key: uniqKey('FieldSettingsWrapper')
  }), wp.element.createElement(SelectControl, {
    key: uniqKey('action_type'),
    label: __('Button Action Type', 'jet-form-builder'),
    value: attributes.action_type,
    options: JetFormActionButton.actions,
    onChange: function onChange(action_type) {
      return setAttributes({
        action_type: action_type
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('submit-wrap')
  }, blockProps), wp.element.createElement(Button, {
    isPrimary: true,
    className: buttonClasses.join(' '),
    key: uniqKey('place_holder_block')
  }, wp.element.createElement(RichText, {
    placeholder: "Input Submit label...",
    allowedFormats: [],
    value: attributes.label,
    onChange: function onChange(label) {
      return setAttributes({
        label: label
      });
    }
  })))];
}

/***/ }),

/***/ "./editor/blocks/submit-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/submit-field/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_submit_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/submit-field/edit.js");
/* harmony import */ var _blocks_submit_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/submit-field/block.json */ "../blocks-src/submit-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_submit_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_submit_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Action Button', 'jet-form-builder'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName', 'attrHelp'],
  example: {
    attributes: {
      label: 'Action Button'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/text-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/text-field/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/text-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function TextEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;

  var changeNumberValue = function changeNumberValue(key, newValue) {
    var value = newValue && newValue > 0 ? parseInt(newValue) : null;
    props.setAttributes(_defineProperty({}, key, value));
  };

  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(SelectControl, {
    key: "field_type",
    label: __('Field Type'),
    labelPosition: "top",
    value: attributes.field_type,
    onChange: function onChange(newValue) {
      setAttributes({
        field_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.fieldTypesList
  }), wp.element.createElement(NumberControl, {
    label: __('Min length (symbols)'),
    labelPosition: "top",
    key: "minlength",
    min: 1,
    value: attributes.minlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('minlength', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max length (symbols)'),
    labelPosition: "top",
    key: "maxlength",
    min: 1,
    value: attributes.maxlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('maxlength', newValue);
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'enable_input_mask',
    label: __('Set Input Mask'),
    checked: attributes.enable_input_mask,
    help: __('Check this to setup specific input format for the current field'),
    onChange: function onChange(newVal) {
      setAttributes({
        enable_input_mask: newVal
      });
    }
  }), attributes.enable_input_mask && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "mask_type",
    label: __('Mask type'),
    labelPosition: "top",
    value: attributes.mask_type,
    onChange: function onChange(newValue) {
      setAttributes({
        mask_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.maskTypesList
  }), wp.element.createElement(TextControl, {
    key: "input_mask",
    label: __('Input mask'),
    value: attributes.input_mask,
    onChange: function onChange(newValue) {
      setAttributes({
        input_mask: newValue
      });
    }
  }), !attributes.mask_type && wp.element.createElement("div", {
    className: 'help-input'
  }, attrHelp('input_mask_default')), 'datetime' === attributes.mask_type && wp.element.createElement("div", {
    className: 'help-input'
  }, __('Examples:', 'jet-form-builder'), " dd/mm/yyyy, mm/dd/yyyy", wp.element.createElement("br", null), __('More info - ', 'jet-form-builder'), wp.element.createElement("a", {
    href: attrHelp('input_mask_datetime_link'),
    target: "_blank"
  }, __('here', 'jet-form-builder'))), wp.element.createElement(SelectControl, {
    key: "mask_visibility",
    label: __('Mask visibility'),
    labelPosition: "top",
    value: attributes.mask_visibility,
    onChange: function onChange(newValue) {
      setAttributes({
        mask_visibility: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.maskVisibilitiesList
  }), wp.element.createElement(SelectControl, {
    key: "mask_placeholder",
    label: __('Mask placeholder'),
    labelPosition: "top",
    value: attributes.mask_placeholder,
    onChange: function onChange(newValue) {
      setAttributes({
        mask_placeholder: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.maskPlaceholdersList
  }))), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    placeholder: attributes.placeholder,
    key: uniqKey('place_holder_block'),
    onChange: function onChange() {}
  })))];
}
;

/***/ }),

/***/ "./editor/blocks/text-field/index.js":
/*!*******************************************!*\
  !*** ./editor/blocks/text-field/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_text_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/text-field/edit.js");
/* harmony import */ var _blocks_text_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/text-field/block.json */ "../blocks-src/text-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_text_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_text_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Text Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Text Field',
      placeholder: 'Input your text...',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/text-field/options.js":
/*!*********************************************!*\
  !*** ./editor/blocks/text-field/options.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fieldTypesList": () => (/* binding */ fieldTypesList),
/* harmony export */   "maskTypesList": () => (/* binding */ maskTypesList),
/* harmony export */   "maskPlaceholdersList": () => (/* binding */ maskPlaceholdersList),
/* harmony export */   "maskVisibilitiesList": () => (/* binding */ maskVisibilitiesList)
/* harmony export */ });
var __ = wp.i18n.__;
var fieldTypesList = [{
  value: 'text',
  label: __('Text')
}, {
  value: 'email',
  label: __('Email')
}, {
  value: 'url',
  label: __('Url')
}, {
  value: 'tel',
  label: __('Tel')
}, {
  value: 'password',
  label: __('Password')
}];
var maskTypesList = [{
  value: '',
  label: __('Default')
}, {
  value: 'datetime',
  label: __('Datetime')
}];
var maskVisibilitiesList = [{
  value: 'always',
  label: __('Always')
}, {
  value: 'hover',
  label: __('Hover')
}, {
  value: 'focus',
  label: __('Focus')
}];
var maskPlaceholdersList = [{
  value: '_',
  label: '_'
}, {
  value: '-',
  label: '-'
}, {
  value: '*',
  label: '*'
}, {
  value: '•',
  label: '•'
}];


/***/ }),

/***/ "./editor/blocks/textarea-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/textarea-field/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextareaEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function TextareaEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var blockProps = useBlockProps();

  var changeNumberValue = function changeNumberValue(key, newValue) {
    var value = newValue && newValue > 0 ? parseInt(newValue) : null;
    setAttributes(_defineProperty({}, key, value));
  };

  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(NumberControl, {
    label: __('Min length (symbols)'),
    labelPosition: "top",
    key: "minlength",
    min: 1,
    value: attributes.minlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('minlength', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max length (symbols)'),
    labelPosition: "top",
    key: "maxlength",
    min: 1,
    value: attributes.maxlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('maxlength', newValue);
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextareaControl, {
    key: uniqKey('place_holder_block'),
    placeholder: attributes.placeholder,
    onChange: function onChange() {}
  })))];
}

/***/ }),

/***/ "./editor/blocks/textarea-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/textarea-field/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_textarea_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/textarea-field/edit.js");
/* harmony import */ var _blocks_textarea_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/textarea-field/block.json */ "../blocks-src/textarea-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_textarea_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_textarea_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Textarea Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Textarea Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/time-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/time-field/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimeEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var InputControl = wp.components.InputControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function TimeEdit(props) {
  var attributes = props.attributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    onChange: function onChange() {},
    key: uniqKey('place_holder_block'),
    placeholder: 'Input type="time"'
  })))];
}

/***/ }),

/***/ "./editor/blocks/time-field/index.js":
/*!*******************************************!*\
  !*** ./editor/blocks/time-field/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_time_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/time-field/edit.js");
/* harmony import */ var _blocks_time_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/time-field/block.json */ "../blocks-src/time-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_time_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_time_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Time Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Time Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/wysiwyg-field/edit.js":
/*!*********************************************!*\
  !*** ./editor/blocks/wysiwyg-field/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WysiwygEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var TextareaControl = wp.components.TextareaControl;
function WysiwygEdit(props) {
  var uniqKey = props.editProps.uniqKey,
      isSelected = props.isSelected;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextareaControl, {
    key: uniqKey('place_holder_block'),
    onChange: function onChange() {}
  })))];
}

/***/ }),

/***/ "./editor/blocks/wysiwyg-field/index.js":
/*!**********************************************!*\
  !*** ./editor/blocks/wysiwyg-field/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_wysiwyg_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/wysiwyg-field/edit.js");
/* harmony import */ var _blocks_wysiwyg_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/wysiwyg-field/block.json */ "../blocks-src/wysiwyg-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_wysiwyg_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_wysiwyg_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Wysiwyg Field', 'jet-form-builder'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Wysiwyg Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/components/base-select-check-radio/custom-template.js":
/*!**********************************************************************!*\
  !*** ./editor/components/base-select-check-radio/custom-template.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __ = wp.i18n.__;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl;
var jetEngineVersion = window.JetFormEditorData.jetEngineVersion;
var _JetFBActions = JetFBActions,
    versionCompare = _JetFBActions.versionCompare;

function CustomTemplateControls(props) {
  var listingTypes = props.listingTypes,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var _attributes$field_opt = attributes.field_options_from,
      field_options_from = _attributes$field_opt === void 0 ? '' : _attributes$field_opt;
  return versionCompare(jetEngineVersion, '2.4.0', '>=') && ['terms', 'posts', 'generate'].includes(field_options_from) && wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: uniqKey('use_custom_template'),
    label: __('Use custom template', 'jet-form-builder'),
    checked: attributes.custom_item_template,
    help: attrHelp('custom_item_template'),
    onChange: function onChange(custom_item_template) {
      return setAttributes({
        custom_item_template: custom_item_template
      });
    }
  }), attributes.custom_item_template && wp.element.createElement(SelectControl, {
    key: uniqKey('SelectControl-custom_item_template_id'),
    label: __('Choose custom template', 'jet-form-builder'),
    value: attributes.custom_item_template_id,
    options: listingTypes,
    onChange: function onChange(custom_item_template_id) {
      return setAttributes({
        custom_item_template_id: custom_item_template_id
      });
    }
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTemplateControls);

/***/ }),

/***/ "./editor/components/base-select-check-radio/from-generators-fields.js":
/*!*****************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/from-generators-fields.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var __ = wp.i18n.__;
var _wp$hooks = wp.hooks,
    applyFilters = _wp$hooks.applyFilters,
    addFilter = _wp$hooks.addFilter;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function getGeneratorFields(genFunction, props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;

  switch (genFunction) {
    case 'num_range_manual':
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        label: __('Start of range', 'jet-form-builder')
      }, wp.element.createElement(NumberControl, {
        labelPosition: "top",
        step: 0.01,
        value: attributes.generator_numbers_min,
        onChange: function onChange(newValue) {
          setAttributes({
            generator_numbers_min: Number(newValue)
          });
        }
      })), wp.element.createElement(BaseControl, {
        label: __('End of range', 'jet-form-builder')
      }, wp.element.createElement(NumberControl, {
        labelPosition: "top",
        step: 0.01,
        value: attributes.generator_numbers_max,
        onChange: function onChange(newValue) {
          setAttributes({
            generator_numbers_max: Number(newValue)
          });
        }
      })), wp.element.createElement(BaseControl, {
        label: __('Step', 'jet-form-builder')
      }, wp.element.createElement(NumberControl, {
        labelPosition: "top",
        key: "step",
        step: 0.01,
        value: attributes.generator_numbers_step,
        onChange: function onChange(newValue) {
          setAttributes({
            generator_numbers_step: Number(newValue)
          });
        }
      })));

    default:
      return applyFilters('jet.fb.select.radio.check.generator.controls', wp.element.createElement(TextControl, {
        key: "generator_field",
        label: "Field Name",
        value: attributes.generator_field,
        help: attrHelp('generator_field', attributes),
        onChange: function onChange(newValue) {
          setAttributes({
            generator_field: newValue
          });
        }
      }), genFunction, props);
  }
}

function getGeneratorAdditionalFields(genFunction, props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;

  switch (genFunction) {
    case 'num_range_manual':
      return null;

    default:
      return applyFilters('jet.fb.select.radio.check.generator.additionalControls', wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {
        key: "from_generator__value_from_meta",
        label: "Value from meta field",
        help: attrHelp('value_from_meta'),
        value: attributes.from_generator__value_from_meta,
        onChange: function onChange(newValue) {
          setAttributes({
            from_generator__value_from_meta: newValue
          });
        }
      }), wp.element.createElement(TextControl, {
        key: "calculated_value_from_key",
        label: "Calculated value from meta field",
        help: attrHelp('calculated_value_from_key'),
        value: attributes.calculated_value_from_key,
        onChange: function onChange(newValue) {
          setAttributes({
            calculated_value_from_key: newValue
          });
        }
      })), genFunction, props);
  }
}

function FromGeneratorsFields(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "generator_function",
    label: "Generator Function",
    labelPosition: "top",
    value: attributes.generator_function,
    onChange: function onChange(newValue) {
      setAttributes({
        generator_function: newValue
      });
    },
    options: window.JetFormSelectFieldData.generators_list
  }), getGeneratorFields(attributes.generator_function, props), getGeneratorAdditionalFields(attributes.generator_function, props));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromGeneratorsFields);

/***/ }),

/***/ "./editor/components/base-select-check-radio/from-manual-fields.js":
/*!*************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/from-manual-fields.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    ActionModal = _JetFBComponents.ActionModal;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
var addNewOption = {
  label: '',
  value: '',
  calculate: ''
};

function FromManualFields(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showManualModal = _useState2[0],
      setShowModal = _useState2[1];

  var setAttributes = props.setAttributes,
      attributes = props.attributes;

  var toggleModal = function toggleModal() {
    setShowModal(function (toggle) {
      return !toggle;
    });
  };

  var onUpdateOptions = function onUpdateOptions(items) {
    /* Remove empty options */
    var field_options = items.filter(function (option) {
      return Boolean(option.value) || Boolean(option.calculate);
    });
    setAttributes({
      field_options: field_options
    });
  };

  var itemHeading = function itemHeading(_ref) {
    var currentItem = _ref.currentItem,
        index = _ref.index;
    var leftPart = ["#".concat(index + 1)];
    var rightPart = [];

    if (currentItem.label) {
      rightPart.push("Label [".concat(currentItem.label, "]"));
    }

    if (currentItem.value) {
      rightPart.push("Value [".concat(currentItem.value, "]"));
    }

    if (currentItem.calculate) {
      rightPart.push("Calculate [".concat(currentItem.calculate, "]"));
    }

    leftPart.push(rightPart.join(' | '));
    return leftPart.join(' ');
  };

  return wp.element.createElement(React.Fragment, {
    key: "jet-form/manage-manual-items"
  }, wp.element.createElement(Button, {
    isSecondary: true,
    onClick: toggleModal,
    icon: 'admin-tools',
    style: {
      marginBottom: '15px'
    }
  }, __('Manage Items')), showManualModal && wp.element.createElement(ActionModal, {
    title: 'Edit Manual Options',
    onRequestClose: toggleModal,
    classNames: ['width-60']
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(RepeaterWithState, {
      items: attributes.field_options,
      onSaveItems: onUpdateOptions,
      newItem: addNewOption,
      onUnMount: onRequestClose,
      isSaveAction: actionClick,
      addNewButtonLabel: __('Add New Option'),
      ItemHeading: itemHeading
    }, function (_ref3) {
      var currentItem = _ref3.currentItem,
          changeCurrentItem = _ref3.changeCurrentItem;
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {
        key: "manual_label",
        label: __('Label'),
        value: currentItem.label,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            label: newValue
          });
        }
      }), wp.element.createElement(TextControl, {
        key: "manual_value",
        label: __('Value'),
        value: currentItem.value,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            value: newValue
          });
        }
      }), wp.element.createElement(TextControl, {
        key: "manual_calculate",
        label: __('Calculate'),
        value: currentItem.calculate,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            calculate: newValue
          });
        }
      }));
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromManualFields);

/***/ }),

/***/ "./editor/components/base-select-check-radio/from-post-terms-fields.js":
/*!*****************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/from-post-terms-fields.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources */ "./editor/components/base-select-check-radio/sources.js");

var TextControl = wp.components.TextControl;
var __ = wp.i18n.__;

function FromPostTermsFields(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;
  return wp.element.createElement(React.Fragment, null, (0,_sources__WEBPACK_IMPORTED_MODULE_0__.getSelectSource)(props), wp.element.createElement(TextControl, {
    key: "value_from_key",
    label: __('Value from meta field'),
    value: attributes.value_from_key,
    help: attrHelp('value_from_meta'),
    onChange: function onChange(newValue) {
      setAttributes({
        value_from_key: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calculated_value_from_key",
    label: __('Calculated value from meta field'),
    value: attributes.calculated_value_from_key,
    help: attrHelp('calculated_value_from_key'),
    onChange: function onChange(newValue) {
      setAttributes({
        calculated_value_from_key: newValue
      });
    }
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromPostTermsFields);

/***/ }),

/***/ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js":
/*!*************************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/select-radio-check-placeholder.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectRadioCheckPlaceholder": () => (/* binding */ SelectRadioCheckPlaceholder)
/* harmony export */ });
/* harmony import */ var _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/select-radio-chekc-options */ "./editor/blocks/select-radio-chekc-options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var _JetFBComponents = JetFBComponents,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    RadioControl = _wp$components.RadioControl;
var DELIMITER = ' - ';
function SelectRadioCheckPlaceholder(props) {
  var _props$editProps = props.editProps,
      blockName = _props$editProps.blockName,
      uniqKey = _props$editProps.uniqKey,
      scriptData = props.scriptData,
      attributes = props.attributes;

  var getCheckbox = function getCheckbox(label) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-form-builder__field-wrap checkboxes-wrap',
      key: "check_place_holder_block_".concat(label + index),
      label: label,
      onChange: function onChange() {}
    });
  };

  var getSelect = function getSelect(_ref) {
    var options = _ref.options,
        index = _ref.index;
    return wp.element.createElement(SelectControl, {
      key: "select_place_holder_block_".concat(attributes.name + index) //label={ attributes.label }
      ,
      options: options //help={ attributes.desc }
      ,
      onChange: function onChange() {}
    });
  };

  var getRadio = function getRadio(_ref2) {
    var options = _ref2.options,
        label = _ref2.label,
        index = _ref2.index;
    return wp.element.createElement(RadioControl, {
      key: "radio_place_holder_block_".concat(label + index) //label={ attributes.label }
      ,
      options: options //help={ attributes.desc }
      ,
      onChange: function onChange() {}
    });
  };

  var getProp = function getProp(of, propName) {
    var ifEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if ('undefined' !== typeof of && 'undefined' !== typeof of[propName]) {
      return of[propName];
    }

    return ifEmpty;
  };

  var getLabelProp = function getLabelProp(of) {
    return getProp(of, 'label');
  };

  var getFullLabel = function getFullLabel() {
    var field_options_from = attributes.field_options_from,
        field_options_post_type = attributes.field_options_post_type,
        field_options_tax = attributes.field_options_tax,
        field_options_key = attributes.field_options_key,
        generator_function = attributes.generator_function,
        generator_field = attributes.generator_field;
    var full_label = [];
    var value = [];

    switch (field_options_from) {
      case 'posts':
        if (field_options_post_type) {
          value.push(getLabelProp(scriptData.post_types_list.find(function (option) {
            return option.value === field_options_post_type;
          })));
        }

        break;

      case 'terms':
        if (field_options_tax) {
          value.push(getLabelProp(scriptData.taxonomies_list.find(function (option) {
            return option.value === field_options_tax;
          })));
        }

        break;

      case 'meta_field':
        if (field_options_key) {
          value.push(field_options_key);
        }

        break;

      case 'generate':
        if (generator_function) {
          value.push(getLabelProp(scriptData.generators_list.find(function (option) {
            return option.value === generator_function;
          })));
        }

        if (generator_field) {
          value.push(generator_field);
        }

        break;
    }

    full_label.push(getLabelProp(_blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__.listFrom.find(function (option) {
      return option.value === field_options_from;
    })));

    if (value.length) {
      full_label.push(value.join(DELIMITER));
    }

    return full_label.join(DELIMITER);
  };

  var getManualField = function getManualField() {
    var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (blockName.includes('checkbox')) {
      if (label) {
        return getCheckbox(label);
      }

      return attributes.field_options.map(function (_ref3, index) {
        var checkLabel = _ref3.label;
        return getCheckbox(checkLabel, index);
      });
    } else if (blockName.includes('select')) {
      if (label) {
        return getSelect({
          attributes: attributes,
          options: [{
            label: label
          }]
        });
      }

      return getSelect({
        attributes: attributes,
        options: attributes.field_options
      });
    } else if (blockName.includes('radio')) {
      if (label) {
        return getRadio({
          attributes: attributes,
          options: [{
            label: label
          }]
        });
      }

      return getRadio({
        attributes: attributes,
        options: attributes.field_options
      });
    }
  };

  return wp.element.createElement(FieldWrapper, _extends({
    key: 'jet-form-builder-field-wrapper'
  }, props), wp.element.createElement("div", {
    className: 'jet-form-builder__fields-group'
  }, ('manual_input' !== attributes.field_options_from || !attributes.field_options.length) && getManualField(getFullLabel(scriptData, attributes)) || null, 'manual_input' === attributes.field_options_from && attributes.field_options.length && getManualField() || null));
}

/***/ }),

/***/ "./editor/components/base-select-check-radio/select-radio-check.js":
/*!*************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/select-radio-check.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/select-radio-chekc-options */ "./editor/blocks/select-radio-chekc-options.js");
/* harmony import */ var _from_manual_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-manual-fields */ "./editor/components/base-select-check-radio/from-manual-fields.js");
/* harmony import */ var _from_post_terms_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from-post-terms-fields */ "./editor/components/base-select-check-radio/from-post-terms-fields.js");
/* harmony import */ var _from_generators_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-generators-fields */ "./editor/components/base-select-check-radio/from-generators-fields.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var jetEngineVersion = window.JetFormEditorData.jetEngineVersion;
var _JetFBActions = JetFBActions,
    versionCompare = _JetFBActions.versionCompare;
var applyFilters = wp.hooks.applyFilters;
var canRenderGlossaries = "" !== jetEngineVersion;

function getFieldOptionsForm(optionsFrom, props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;

  switch (optionsFrom) {
    case 'manual_input':
      return wp.element.createElement(_from_manual_fields__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        key: "from_manual"
      }, props));

    case 'posts':
    case 'terms':
      return wp.element.createElement(_from_post_terms_fields__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        key: "form_posts_terms"
      }, props));

    case 'meta_field':
      return wp.element.createElement(TextControl, {
        key: "field_options_key",
        label: "Meta field to get value from",
        value: attributes.field_options_key,
        onChange: function onChange(newValue) {
          setAttributes({
            field_options_key: newValue
          });
        }
      });

    case 'generate':
      return wp.element.createElement(_from_generators_fields__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        key: "form_generators"
      }, props));

    case 'glossary':
      return canRenderGlossaries && wp.element.createElement(SelectControl, {
        key: "select_glossary",
        label: "Select Glossary",
        labelPosition: "top",
        value: attributes.glossary_id,
        onChange: function onChange(glossary_id) {
          return setAttributes({
            glossary_id: glossary_id
          });
        },
        options: [{
          value: '',
          label: '--'
        }].concat(_toConsumableArray(window.JetFormSelectFieldData.glossaries_list))
      });

    default:
      return applyFilters('jet.fb.select.radio.check.controls', null, optionsFrom, props);
  }
}

function SelectRadioCheck(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children;
  var field_options_from = attributes.field_options_from;
  return isSelected && wp.element.createElement("div", {
    className: "inside-block-options"
  }, wp.element.createElement(SelectControl, {
    key: "field_options_from",
    label: "Fill Options From",
    labelPosition: "top",
    value: field_options_from,
    onChange: function onChange(newValue) {
      setAttributes({
        field_options_from: newValue
      });
    },
    options: _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__.listFrom
  }), getFieldOptionsForm(field_options_from, props), children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRadioCheck);

/***/ }),

/***/ "./editor/components/base-select-check-radio/sources.js":
/*!**************************************************************!*\
  !*** ./editor/components/base-select-check-radio/sources.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSelectSource": () => (/* binding */ getSelectSource)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var localizeData = window.JetFormSelectFieldData;
var SelectControl = wp.components.SelectControl;
var sources = {
  terms: {
    label: __('Taxonomy'),
    attr: 'field_options_tax',
    options: localizeData.taxonomies_list
  },
  posts: {
    label: __('Post Type'),
    attr: 'field_options_post_type',
    options: localizeData.post_types_list
  }
};

var getSelectSource = function getSelectSource(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var field_options_from = attributes.field_options_from;

  if (!sources[field_options_from] && !sources[field_options_from]) {
    return null;
  }

  var source = sources[field_options_from];
  return wp.element.createElement(SelectControl, {
    label: source.label,
    labelPosition: "top",
    value: attributes[source.attr],
    onChange: function onChange(newValue) {
      setAttributes(_defineProperty({}, source.attr, newValue));
    },
    options: source.options
  });
};



/***/ }),

/***/ "./editor/components/presets/general-preset.js":
/*!*****************************************************!*\
  !*** ./editor/components/presets/general-preset.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBComponents = JetFBComponents,
    GlobalField = _JetFBComponents.GlobalField,
    AvailableMapField = _JetFBComponents.AvailableMapField;
var _JetFBActions = JetFBActions,
    withPreset = _JetFBActions.withPreset;
var Fragment = wp.element.Fragment;

function GeneralPreset(_ref) {
  var value = _ref.value,
      availableFields = _ref.availableFields,
      isMapFieldVisible = _ref.isMapFieldVisible,
      isVisible = _ref.isVisible,
      onChange = _ref.onChange;
  var position = 'general';

  var onChangeValue = function onChangeValue(newValue, name) {
    onChange(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, name, newValue)));
  };

  return wp.element.createElement(Fragment, {
    key: 'jfb-general-preset-main-wrapper'
  }, window.JetFormEditorData.presetConfig.global_fields.map(function (data, index) {
    return wp.element.createElement(GlobalField, {
      key: data.name + index,
      value: value,
      index: index,
      data: data,
      options: data.options,
      onChangeValue: onChangeValue,
      isVisible: isVisible,
      position: position
    });
  }), value.from && availableFields.map(function (field, index) {
    return wp.element.createElement(AvailableMapField, {
      key: field + index,
      fieldsMap: value.fields_map,
      field: field,
      index: index,
      onChangeValue: onChangeValue,
      isMapFieldVisible: isMapFieldVisible,
      value: value
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPreset(GeneralPreset));

/***/ }),

/***/ "./editor/form-actions/activecampaign.js":
/*!***********************************************!*\
  !*** ./editor/form-actions/activecampaign.js ***!
  \***********************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    globalTab = _JetFBActions.globalTab,
    withPlaceholder = _JetFBActions.Tools.withPlaceholder,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl,
    PlaceholderMessage = _JetFBComponents.PlaceholderMessage;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;

function ActiveCampaignAction(props) {
  var settings = props.settings,
      onChangeSetting = props.onChangeSetting,
      onChange = props.onChange,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      source = props.source,
      label = props.label,
      help = props.help,
      requestFields = props.requestFields;
  var currentTab = globalTab({
    slug: 'active-campaign-tab'
  });

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      formFieldsList = _useState2[0],
      setFormFields = _useState2[1];

  var _useState3 = useState(function () {
    return settings.isValidAPI ? 'is-valid' : 'is-invalid';
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonClass = _useState4[0],
      setButtonClass = _useState4[1];

  useEffect(function () {
    setFormFields([].concat(_toConsumableArray(getFormFieldsBlocks([], '--')), _toConsumableArray(requestFields)));
  }, []);

  function getAPI(prop) {
    return settings.use_global ? currentTab[prop] : settings[prop] || "";
  }

  function validateActiveCampaignData() {
    var api = {
      api_key: getAPI('api_key'),
      api_url: getAPI('api_url')
    };
    getActiveCampaignData(true, api);
  }

  function getActiveCampaignData() {
    var isValidate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var _ref = arguments.length > 1 ? arguments[1] : undefined,
        _ref$api_key = _ref.api_key,
        api_key = _ref$api_key === void 0 ? '' : _ref$api_key,
        _ref$api_url = _ref.api_url,
        api_url = _ref$api_url === void 0 ? '' : _ref$api_url;

    if (!api_key || !api_url) {
      onChangeSetting(false, 'isValidAPI');
      setButtonClass('is-invalid');
      return;
    }

    var endpoint = '/admin/api.php?api_action=list_list';
    var url = api_url + endpoint + '&api_key=' + api_key + '&ids=all&api_output=json';
    setButtonClass('loading');
    jQuery.getJSON(url).success(function (data) {
      if (undefined !== data.result_code && data.result_code) {
        var lists = [];

        for (var prop in data) {
          if (undefined === data[prop].id) {
            continue;
          }

          lists.push({
            value: data[prop].id,
            label: data[prop].name
          });
        }

        onChange(_objectSpread(_objectSpread({}, settings), {}, {
          data: lists,
          isValidAPI: true
        }));
        setButtonClass('is-valid');
      } else {
        onChangeSetting(false, 'isValidAPI');
        setButtonClass('is-invalid');
      }
    }).error(function () {
      setButtonClass('is-invalid');
      onChangeSetting(false, 'isValidAPI');
    });
  }
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: label('use_global'),
    checked: settings.use_global,
    onChange: function onChange(use_global) {
      onChangeSetting(Boolean(use_global), 'use_global');
    }
  }), wp.element.createElement(BaseControl, {
    label: label('api_data'),
    key: 'activecampaign_input_key'
  }, wp.element.createElement("div", {
    className: "jet-control-clear-full jet-d-flex-between"
  }, wp.element.createElement("div", null, wp.element.createElement(TextControl, {
    key: "api_url",
    help: label('api_url'),
    className: "jet-control-clear",
    disabled: settings.use_global,
    value: getAPI('api_url'),
    onChange: function onChange(newVal) {
      return onChangeSetting(newVal, 'api_url');
    }
  }), wp.element.createElement(TextControl, {
    key: "api_key",
    help: label('api_key'),
    className: "jet-control-clear",
    disabled: settings.use_global,
    value: getAPI('api_key'),
    onChange: function onChange(newVal) {
      return onChangeSetting(newVal, 'api_key');
    }
  })), wp.element.createElement(Button, {
    key: 'validate_api_key',
    isPrimary: true,
    onClick: validateActiveCampaignData,
    className: "".concat(buttonClass, " jet-form-validate-button")
  }, wp.element.createElement("i", {
    className: "dashicons"
  }), settings.isValidAPI ? label('retry_request') : label('validate_api_key')))), wp.element.createElement("div", {
    style: {
      paddingBottom: '1.2em'
    }
  }, help('api_key_link_prefix'), " ", wp.element.createElement("a", {
    href: help('api_key_link')
  }, help('api_key_link_suffix'))), settings.isValidAPI && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "activecampaign_select_lists",
    label: label('list_id'),
    labelPosition: "side",
    value: settings.list_id,
    onChange: function onChange(newVal) {
      return onChangeSetting(newVal, 'list_id');
    },
    options: withPlaceholder(settings.data || [])
  }), wp.element.createElement(TextControl, {
    key: "activecampaign_tags",
    label: label('tags'),
    value: settings.tags,
    help: help('tags'),
    onChange: function onChange(newVal) {
      return onChangeSetting(newVal, 'tags');
    }
  }), wp.element.createElement(ActionFieldsMap, {
    label: label('fields_map'),
    fields: Object.entries(source.activecampaign_fields)
  }, function (_ref2) {
    var fieldId = _ref2.fieldId,
        fieldData = _ref2.fieldData,
        index = _ref2.index;
    return wp.element.createElement(WrapperRequiredControl, {
      field: [fieldId, fieldData]
    }, wp.element.createElement(SelectControl, {
      key: fieldId + index,
      value: getMapField({
        name: fieldId
      }),
      onChange: function onChange(value) {
        return setMapField({
          nameField: fieldId,
          value: value
        });
      },
      options: formFieldsList
    }));
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('active_campaign', withSelect(withRequestFields)(ActiveCampaignAction));

/***/ }),

/***/ "./editor/form-actions/base-action-component.js":
/*!******************************************************!*\
  !*** ./editor/form-actions/base-action-component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseActionComponent)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var BaseActionComponent = /*#__PURE__*/function (_wp$element$Component) {
  _inherits(BaseActionComponent, _wp$element$Component);

  var _super = _createSuper(BaseActionComponent);

  function BaseActionComponent() {
    _classCallCheck(this, BaseActionComponent);

    return _super.apply(this, arguments);
  }

  _createClass(BaseActionComponent, [{
    key: "addPlaceholderForSelect",
    value: function addPlaceholderForSelect(array) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--';
      return [{
        label: label
      }].concat(_toConsumableArray(array));
    }
  }, {
    key: "onChangeSetting",
    value: function onChangeSetting(value, key) {
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, key, value)));
    }
  }, {
    key: "onChangeSettingObj",
    value: function onChangeSettingObj(value) {
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), value));
    }
  }, {
    key: "getFieldDefault",
    value: function getFieldDefault(name) {
      var source = 'fields_map';
      return this.getFieldByName({
        name: name,
        source: source
      });
    }
  }, {
    key: "getFieldMeta",
    value: function getFieldMeta(name) {
      var source = 'meta_fields_map';
      return this.getFieldByName({
        name: name,
        source: source
      });
    }
  }, {
    key: "getFieldByName",
    value: function getFieldByName(_ref) {
      var source = _ref.source,
          name = _ref.name;
      var settings = this.props.settings;

      if (typeof settings[source] !== 'undefined' && typeof settings[source][name] !== 'undefined') {
        return settings[source][name];
      }

      return '';
    }
  }, {
    key: "onChangeFieldMap",
    value: function onChangeFieldMap(value, nameField) {
      var source = 'fields_map';
      this.changeFieldsMap({
        value: value,
        nameField: nameField,
        source: source
      });
    }
  }, {
    key: "onChangeMetaFieldMap",
    value: function onChangeMetaFieldMap(value, nameField) {
      var source = 'meta_fields_map';
      this.changeFieldsMap({
        value: value,
        nameField: nameField,
        source: source
      });
    }
  }, {
    key: "changeFieldsMap",
    value: function changeFieldsMap(_ref2) {
      var source = _ref2.source,
          nameField = _ref2.nameField,
          value = _ref2.value;
      var fieldsMap = Object.assign({}, this.props.settings[source], _defineProperty({}, nameField, value));
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, source, fieldsMap)));
    }
  }]);

  return BaseActionComponent;
}(wp.element.Component);



/***/ }),

/***/ "./editor/form-actions/call-hook.js":
/*!******************************************!*\
  !*** ./editor/form-actions/call-hook.js ***!
  \******************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools,
    addAction = _JetFBActions.addAction;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
addAction('call_hook', function CallHookAction(_ref) {
  var settings = _ref.settings,
      onChange = _ref.onChange,
      source = _ref.source,
      label = _ref.label,
      help = _ref.help;

  var onChangeSetting = function onChangeSetting(value, key) {
    onChange(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement("div", {
    key: "call_hook"
  }, wp.element.createElement(TextControl, {
    key: "hook_name",
    label: label('hook_name'),
    value: settings.hook_name,
    onChange: function onChange(newVal) {
      onChangeSetting(newVal, 'hook_name');
    }
  }), wp.element.createElement(BaseControl, {
    key: "help_message"
  }, wp.element.createElement("div", {
    className: "jet-call-hook-instruction"
  }, __('Called hook names:'), wp.element.createElement("ul", null, wp.element.createElement("li", null, wp.element.createElement("code", null, "jet-form-builder/custom-action/", settings.hook_name), " - ", __('WP action. Perform a hook without an ability to validate form,')), wp.element.createElement("li", null, wp.element.createElement("code", null, "jet-form-builder/custom-filter/", settings.hook_name), " - ", __('WP filter. Perform a hook with an ability to validate form. Allows to return error message.'))), __('Hook arguments:'), wp.element.createElement("ul", null, wp.element.createElement("li", null, wp.element.createElement("code", null, "$result"), " - ", __('only for WP filter. Hook execution result,')), wp.element.createElement("li", null, wp.element.createElement("code", null, "$request"), " - ", __('array with submitted form data,')), wp.element.createElement("li", null, wp.element.createElement("code", null, "$action_handler"), " - ", __('action handler object, allows to manage actions data and to throws error status:'), wp.element.createElement("code", null, "throw new Action_Exception( 'failed' )"))))));
  /* eslint-enable jsx-a11y/no-onchange */
});

/***/ }),

/***/ "./editor/form-actions/call-webhook.js":
/*!*********************************************!*\
  !*** ./editor/form-actions/call-webhook.js ***!
  \*********************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
addAction('call_webhook', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(CallWebHookAction, _wp$element$Component);

  var _super = _createSuper(CallWebHookAction);

  function CallWebHookAction(props) {
    var _this;

    _classCallCheck(this, CallWebHookAction);

    _this = _super.call(this, props);
    _this.fields = getFormFieldsBlocks();
    return _this;
  }

  _createClass(CallWebHookAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          settings = _this$props.settings,
          label = _this$props.label,
          onChangeSetting = _this$props.onChangeSetting;
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(TextControl, {
        key: "webhook_url",
        label: label('webhook_url'),
        value: settings.webhook_url,
        onChange: function onChange(newVal) {
          return onChangeSetting(newVal, 'webhook_url');
        }
      });
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return CallWebHookAction;
}(wp.element.Component));

/***/ }),

/***/ "./editor/form-actions/getresponse.js":
/*!********************************************!*\
  !*** ./editor/form-actions/getresponse.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _integration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-component */ "./editor/form-actions/integration-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    globalTab = _JetFBActions.globalTab;
var _JetFBComponents = JetFBComponents,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

var __ = wp.i18n.__;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;

var GetResponseAction = /*#__PURE__*/function (_IntegrationComponent) {
  _inherits(GetResponseAction, _IntegrationComponent);

  var _super = _createSuper(GetResponseAction);

  function GetResponseAction(props) {
    var _this;

    _classCallCheck(this, GetResponseAction);

    _this = _super.call(this, props);
    _this.formFieldsList = [].concat(_toConsumableArray(_this.formFieldsList), _toConsumableArray(_this.props.requestFields));
    return _this;
  }

  _createClass(GetResponseAction, [{
    key: "getFields",
    value: function getFields() {
      var settings = this.props.settings;

      if (settings.data && settings.data.fields) {
        return Object.entries(settings.data.fields);
      }

      return [];
    }
  }, {
    key: "getLists",
    value: function getLists() {
      var settings = this.props.settings;

      if (settings.data && settings.data.lists) {
        return this.formatEntriesArray(settings.data.lists);
      }

      return [];
    }
  }, {
    key: "formatEntriesArray",
    value: function formatEntriesArray() {
      var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var isNeedPlaceholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var placeholder = {
        label: '--'
      };

      if (!entries) {
        return [];
      }

      var options = Object.entries(entries).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            label = _ref2[1];

        return {
          value: value,
          label: label
        };
      });
      return isNeedPlaceholder ? [placeholder].concat(_toConsumableArray(options)) : options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          onChange = _this$props.onChange,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;
      var fields = this.getFields();
      var currentTab = globalTab({
        slug: 'get-response-tab'
      });
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(React.Fragment, {
        key: "getresponse"
      }, wp.element.createElement(ToggleControl, {
        key: 'use_global',
        label: label('use_global'),
        checked: settings.use_global,
        onChange: function onChange(use_global) {
          _this2.onChangeSetting(Boolean(use_global), 'use_global');
        }
      }), wp.element.createElement(BaseControl, {
        key: 'getresponse_input_key',
        className: "input-with-button"
      }, wp.element.createElement(TextControl, {
        key: "api_key",
        label: label('api_key'),
        disabled: settings.use_global,
        value: settings.use_global ? currentTab.api_key : settings.api_key,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'api_key');
        }
      }), wp.element.createElement(Button, {
        key: 'validate_api_key',
        isPrimary: true,
        onClick: function onClick() {
          settings.use_global ? _this2.validateAPIKey(currentTab.api_key) : _this2.validateAPIKey();
        },
        className: this.state.className.join(' ') + ' jet-form-validate-button'
      }, wp.element.createElement("i", {
        className: "dashicons"
      }), label('validate_api_key'))), wp.element.createElement("div", null), wp.element.createElement("div", {
        className: "margin-bottom--small"
      }, help('api_key_link_prefix'), " ", wp.element.createElement("a", {
        href: help('api_key_link')
      }, help('api_key_link_suffix'))), settings.isValidAPI && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        key: "getresponse_select_lists",
        className: "input-with-button"
      }, wp.element.createElement(SelectControl, {
        key: "list_id",
        className: "full-width",
        label: label('list_id'),
        labelPosition: "side",
        value: settings.list_id,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'list_id');
        },
        options: this.getLists()
      }), wp.element.createElement(Button, {
        key: 'update_list_ids',
        isPrimary: true,
        onClick: function onClick() {
          settings.use_global ? _this2.getApiData(settings.api_key) : _this2.getApiData(currentTab.api_key);
        }
      }, label('update_list_ids'))), wp.element.createElement(BaseControl, {
        key: 'getresponse_day_of_cycle'
      }, wp.element.createElement(NumberControl, {
        key: "day_of_cycle",
        label: label('day_of_cycle'),
        labelPosition: "side",
        value: settings.day_of_cycle,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(Number(newVal), 'day_of_cycle');
        }
      })), wp.element.createElement(BaseControl, {
        label: label('fields_map'),
        key: "getresponse_fields_map"
      }, wp.element.createElement("div", {
        className: "jet-user-fields-map__list"
      }, fields.map(function (_ref3, index) {
        var _ref4 = _slicedToArray(_ref3, 2),
            fieldName = _ref4[0],
            fieldData = _ref4[1];

        return wp.element.createElement(WrapperRequiredControl, {
          field: [fieldName, fieldData]
        }, wp.element.createElement(SelectControl, {
          className: "full-width",
          key: fieldName + index,
          value: _this2.getFieldDefault(fieldName),
          onChange: function onChange(value) {
            return _this2.onChangeFieldMap(value, fieldName);
          },
          options: _this2.formFieldsList
        }));
      })))));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return GetResponseAction;
}(_integration_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

addAction('getresponse', withSelect(withRequestFields)(GetResponseAction));

/***/ }),

/***/ "./editor/form-actions/insert-post.js":
/*!********************************************!*\
  !*** ./editor/form-actions/insert-post.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_controls_default_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/controls/default-meta */ "./editor/blocks/controls/default-meta.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    convertListToFieldsMap = _JetFBActions.convertListToFieldsMap;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl;
var _JetFBHooks = JetFBHooks,
    useRequestFields = _JetFBHooks.useRequestFields,
    withRequestFields = _JetFBHooks.withRequestFields;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var withSelect = wp.data.withSelect;

function taxPrefix() {
  var suffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return 'jet_tax__' + suffix;
}

function InsertPostAction(props) {
  var settings = props.settings,
      onChangeSetting = props.onChangeSetting,
      source = props.source,
      help = props.help,
      label = props.label,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      requestFields = props.requestFields;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      fieldType = _useState2[0],
      setTypeField = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      taxonomies = _useState4[0],
      setTaxonomies = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      formFields = _useState6[0],
      setFormFields = _useState6[1];

  function getPreparedTaxonomies() {
    var preparedTaxes = [];

    if (!source.taxonomies.length) {
      return [];
    }

    var _iterator = _createForOfIteratorHelper(source.taxonomies),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var taxonomy = _step.value;
        preparedTaxes.push(_objectSpread(_objectSpread({}, taxonomy), {}, {
          value: taxPrefix(taxonomy.value)
        }));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return preparedTaxes;
  }

  useEffect(function () {
    setTypeField(function () {
      var result = {};

      for (var fieldsMapKey in settings.fields_map) {
        result[fieldsMapKey] = getTypeFieldValue(settings.fields_map[fieldsMapKey]);
      }

      return result;
    });
    setTaxonomies(getPreparedTaxonomies());
    onChangeSetting([source.requestFields.inserted_post_id], 'requestFields');
    setFormFields(convertListToFieldsMap(getFormFieldsBlocks(), requestFields));
  }, []);

  function getTypeFieldValue(value) {
    var resultValue = 'post_meta';

    var _iterator2 = _createForOfIteratorHelper(source.fieldsMapOptions),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var fieldsMapOption = _step2.value;

        if (value === fieldsMapOption.value) {
          resultValue = value;
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (value.includes(taxPrefix())) {
      resultValue = 'post_terms';
    }

    return resultValue;
  }

  function setTypeFieldValue(prev, fieldID, value) {
    var resultValue = getTypeFieldValue(value);

    if (['post_meta', 'post_terms'].includes(resultValue)) {
      setMapField({
        nameField: fieldID,
        value: ''
      });
    } else {
      setMapField({
        nameField: fieldID,
        value: resultValue
      });
    }

    return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, fieldID, resultValue));
  }
  /* eslint-disable jsx-a11y/no-onchange */


  var getFieldSelect = function getFieldSelect(fieldId, index) {
    return wp.element.createElement(SelectControl, {
      key: fieldId + index,
      value: fieldType[fieldId],
      onChange: function onChange(value) {
        setTypeField(function (prev) {
          return setTypeFieldValue(prev, fieldId, value);
        });
      },
      options: source.fieldsMapOptions
    });
  };

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "post_type",
    className: "full-width",
    labelPosition: "side",
    value: settings.post_type,
    options: source.postTypes,
    label: label('post_type'),
    help: help('post_type'),
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'post_type');
    }
  }), wp.element.createElement(SelectControl, {
    key: "post_status",
    className: "full-width",
    labelPosition: "side",
    value: settings.post_status,
    options: source.postStatuses,
    label: label('post_status'),
    help: help('post_status'),
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'post_status');
    }
  }), wp.element.createElement(ActionFieldsMap, {
    label: label('fields_map'),
    key: "user_fields_map",
    fields: formFields
  }, function (_ref) {
    var fieldId = _ref.fieldId,
        fieldData = _ref.fieldData,
        index = _ref.index;
    return wp.element.createElement(WrapperRequiredControl, {
      field: [fieldId, fieldData]
    }, 'post_meta' === fieldType[fieldId] && wp.element.createElement("div", {
      className: "components-base-control jet-margin-bottom-wrapper"
    }, getFieldSelect(fieldId, index), wp.element.createElement(TextControl, {
      key: fieldId + index + '_text',
      value: getMapField({
        name: fieldId
      }),
      onChange: function onChange(value) {
        return setMapField({
          nameField: fieldId,
          value: value
        });
      }
    })), 'post_terms' === fieldType[fieldId] && wp.element.createElement("div", {
      className: "components-base-control jet-margin-bottom-wrapper"
    }, getFieldSelect(fieldId, index), wp.element.createElement(SelectControl, {
      key: fieldId + index + '_text',
      value: getMapField({
        name: fieldId
      }),
      onChange: function onChange(value) {
        return setMapField({
          nameField: fieldId,
          value: value
        });
      },
      options: taxonomies
    })), !['post_meta', 'post_terms'].includes(fieldType[fieldId]) && getFieldSelect(fieldId, index));
  }), wp.element.createElement(BaseControl, {
    label: label('default_meta'),
    key: "default_meta"
  }, wp.element.createElement(_blocks_controls_default_meta__WEBPACK_IMPORTED_MODULE_0__["default"], {
    defaultMeta: settings.default_meta,
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'default_meta');
    }
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('insert_post', withSelect(withRequestFields)(InsertPostAction));

/***/ }),

/***/ "./editor/form-actions/integration-component.js":
/*!******************************************************!*\
  !*** ./editor/form-actions/integration-component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IntegrationComponent)
/* harmony export */ });
/* harmony import */ var _base_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-action-component */ "./editor/form-actions/base-action-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;

var IntegrationComponent = /*#__PURE__*/function (_BaseActionComponent) {
  _inherits(IntegrationComponent, _BaseActionComponent);

  var _super = _createSuper(IntegrationComponent);

  function IntegrationComponent(props) {
    var _this;

    _classCallCheck(this, IntegrationComponent);

    _this = _super.call(this, props);
    _this.validateAPIKey = _this.validateAPIKey.bind(_assertThisInitialized(_this));
    _this.getApiData = _this.getApiData.bind(_assertThisInitialized(_this));
    _this.getLists = _this.getLists.bind(_assertThisInitialized(_this));
    _this.formFieldsList = getFormFieldsBlocks([], '--');
    _this.state = {
      className: [_this.getclassNameValidateButton()]
    };
    return _this;
  }

  _createClass(IntegrationComponent, [{
    key: "validateAPIKey",
    value: function validateAPIKey() {
      var customApiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState({
        className: ['loading']
      });

      if (customApiKey && 'string' === typeof customApiKey) {
        this.getApiData(customApiKey);
        return;
      }

      var settings = this.props.settings;
      this.getApiData(settings.api_key);
    }
  }, {
    key: "getApiData",
    value: function getApiData(apiKey) {
      var self = this;

      if (!apiKey) {
        self.onChangeSetting(null, 'isValidAPI');
        self.setState({
          className: []
        });
        return;
      }

      jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        data: {
          'action': this.props.source.action,
          'api_key': apiKey
        },
        success: function success(response) {
          if (response.success) {
            self.onChangeSetting(true, 'isValidAPI');
            self.onChangeSetting(response.data, 'data');
            self.setState({
              className: ['is-valid']
            });
          } else {
            self.onChangeSetting(false, 'isValidAPI');
            self.setState({
              className: ['is-invalid']
            });
          }
        },
        error: function error() {
          self.onChangeSetting(false, 'isValidAPI');
          self.setState({
            className: ['is-invalid']
          });
        }
      });
    }
  }, {
    key: "getclassNameValidateButton",
    value: function getclassNameValidateButton() {
      var settings = this.props.settings;

      if (true === settings.isValidAPI) {
        return 'is-valid';
      } else if (false === settings.isValidAPI) {
        return 'is-invalid';
      }
    }
  }]);

  return IntegrationComponent;
}(_base_action_component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./editor/form-actions/mailchimp.js":
/*!******************************************!*\
  !*** ./editor/form-actions/mailchimp.js ***!
  \******************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    globalTab = _JetFBActions.globalTab;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl,
    ValidateButtonWithStore = _JetFBComponents.ValidateButtonWithStore;
var _JetFBActions2 = JetFBActions,
    convertObjectToOptionsList = _JetFBActions2.convertObjectToOptionsList,
    getFormFieldsBlocks = _JetFBActions2.getFormFieldsBlocks;
var __ = wp.i18n.__;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields,
    withSelectActionLoading = _JetFBHooks.withSelectActionLoading;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function MailChimpAction(props) {
  var settings = props.settings,
      label = props.label,
      help = props.help,
      _props$requestFields = props.requestFields,
      requestFields = _props$requestFields === void 0 ? [] : _props$requestFields,
      onChangeSettingObj = props.onChangeSettingObj,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      source = props.source,
      loadingState = props.loadingState;
  var currentTab = globalTab({
    slug: 'mailchimp-tab'
  });

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      formFieldsList = _useState2[0],
      setFormFields = _useState2[1];

  useEffect(function () {
    setFormFields([].concat(_toConsumableArray(getFormFieldsBlocks([], '--')), _toConsumableArray(requestFields)));
  }, []);

  var getFields = function getFields() {
    var _ref = loadingState.response || {},
        _ref$data = _ref.data,
        data = _ref$data === void 0 ? {} : _ref$data;

    if (settings.list_id && data !== null && data !== void 0 && data.fields[settings.list_id]) {
      return Object.entries(data.fields[settings.list_id]);
    }

    return [];
  };

  var getLists = function getLists() {
    var _ref2 = loadingState.response || {},
        _ref2$data = _ref2.data,
        data = _ref2$data === void 0 ? {} : _ref2$data;

    if (data.lists) {
      return convertObjectToOptionsList(data.lists);
    }

    return [];
  };

  var getGroups = function getGroups() {
    var _ref3 = loadingState.response || {},
        _ref3$data = _ref3.data,
        data = _ref3$data === void 0 ? {} : _ref3$data;

    if (data.groups) {
      return data.groups[settings.list_id];
    }

    return [];
  };

  var isCheckedGroup = function isCheckedGroup(value) {
    return value && settings.groups_ids && settings.groups_ids[value] ? settings.groups_ids[value] : false;
  };

  var getApiKey = function getApiKey() {
    return settings.use_global ? currentTab.api_key : settings.api_key;
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement("div", {
    key: "mailchimp"
  }, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: label('use_global'),
    checked: settings.use_global,
    onChange: function onChange(use_global) {
      onChangeSettingObj({
        use_global: Boolean(use_global)
      });
    }
  }), wp.element.createElement(BaseControl, {
    key: 'mailchimp_key_inputs',
    label: label('api_key')
  }, wp.element.createElement("div", {
    className: "jet-control-clear-full jet-d-flex-between"
  }, wp.element.createElement(TextControl, {
    key: "api_key",
    disabled: settings.use_global,
    value: getApiKey(),
    onChange: function onChange(api_key) {
      return onChangeSettingObj({
        api_key: api_key
      });
    }
  }), wp.element.createElement(ValidateButtonWithStore, {
    initialLabel: label('validate_api_key'),
    label: label('retry_request'),
    ajaxArgs: {
      action: source.action,
      api_key: getApiKey()
    }
  }))), wp.element.createElement("div", null), wp.element.createElement("div", {
    className: "margin-bottom--small"
  }, help('api_key_link_prefix'), " ", wp.element.createElement("a", {
    href: help('api_key_link')
  }, help('api_key_link_suffix'))), loadingState.success && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    label: label('list_id'),
    key: "list_id",
    labelPosition: "side",
    value: settings.list_id,
    onChange: function onChange(list_id) {
      return onChangeSettingObj({
        list_id: list_id
      });
    },
    options: getLists()
  }), Boolean(settings.list_id) && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: label('groups_ids')
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, getGroups().map(function (group) {
    return wp.element.createElement(CheckboxControl, {
      key: "groups_ids_".concat(group.value),
      checked: isCheckedGroup(group.value),
      label: group.label,
      onChange: function onChange(active) {
        return onChangeSettingObj({
          groups_ids: _objectSpread(_objectSpread({}, (settings === null || settings === void 0 ? void 0 : settings.groups_ids) || {}), {}, _defineProperty({}, group.value, active))
        });
      }
    });
  }))), wp.element.createElement(TextControl, {
    key: "mailchimp_tags",
    value: settings.tags,
    label: label('tags'),
    help: help('tags'),
    onChange: function onChange(tags) {
      return onChangeSettingObj({
        tags: tags
      });
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'double_opt_in',
    label: label('double_opt_in'),
    checked: settings.double_opt_in,
    onChange: function onChange(double_opt_in) {
      return onChangeSettingObj({
        double_opt_in: Boolean(double_opt_in)
      });
    }
  }), wp.element.createElement(ActionFieldsMap, {
    label: label('fields_map'),
    key: "mailchimp",
    fields: getFields()
  }, function (_ref4) {
    var fieldId = _ref4.fieldId,
        fieldData = _ref4.fieldData,
        index = _ref4.index;
    return wp.element.createElement(WrapperRequiredControl, {
      field: [fieldId, fieldData]
    }, wp.element.createElement(SelectControl, {
      className: "full-width",
      key: fieldId + index,
      value: getMapField({
        name: fieldId
      }),
      onChange: function onChange(value) {
        return setMapField({
          nameField: fieldId,
          value: value
        });
      },
      options: formFieldsList
    }));
  }))));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('mailchimp', compose(withSelect(withRequestFields), withSelect(withSelectActionLoading))(MailChimpAction));

/***/ }),

/***/ "./editor/form-actions/redirect-to-page.js":
/*!*************************************************!*\
  !*** ./editor/form-actions/redirect-to-page.js ***!
  \*************************************************/
/***/ (() => {

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

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
var _JetFBComponents = JetFBComponents,
    FieldWithPreset = _JetFBComponents.FieldWithPreset,
    DynamicPreset = _JetFBComponents.DynamicPreset;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    CheckboxControl = _wp$components.CheckboxControl;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;
var applyFilters = wp.hooks.applyFilters;

function RedirectToPageAction(props) {
  var source = props.source,
      label = props.label,
      settings = props.settings,
      onChangeSetting = props.onChangeSetting,
      onChangeSettingObj = props.onChangeSettingObj,
      requestFields = props.requestFields;

  var _useState = useState(source.redirect_types),
      _useState2 = _slicedToArray(_useState, 2),
      typePages = _useState2[0],
      setTypePages = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      fields = _useState4[0],
      setFields = _useState4[1];

  useEffect(function () {
    var hasInserted = requestFields.findIndex(function (field) {
      return 'inserted_post_id' === field.value;
    });

    if (-1 === hasInserted) {
      setTypePages(function (prev) {
        return prev.filter(function (type) {
          return 'inserted_post' !== type.value;
        });
      });
    }

    var filterTypes = applyFilters('jet.fb.redirect_to_page.types', [], props);

    if (filterTypes.length) {
      setTypePages(function (prev) {
        return [].concat(_toConsumableArray(prev), _toConsumableArray(filterTypes));
      });
    }

    setFields([].concat(_toConsumableArray(getFormFieldsBlocks()), _toConsumableArray(requestFields)));
  }, []);

  var isChecked = function isChecked(name) {
    var args_fields = Array.from(settings.redirect_args || []);
    return Boolean(args_fields.includes(name));
  };

  var onChangeRedirectArgs = function onChangeRedirectArgs(value, field_name) {
    var redirect_args = Array.from(settings.redirect_args || []);

    if (!value) {
      var field_id = redirect_args.indexOf(field_name);
      redirect_args.splice(field_id, 1);
    } else {
      redirect_args.push(field_name);
    }

    onChangeSettingObj({
      redirect_args: redirect_args
    });
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement("div", {
    key: "redirect_to_page"
  }, wp.element.createElement(SelectControl, {
    className: "full-width",
    key: "redirect_type",
    label: label('redirect_type'),
    labelPosition: "side",
    value: settings.redirect_type,
    options: typePages,
    onChange: function onChange(redirect_type) {
      return onChangeSettingObj({
        redirect_type: redirect_type
      });
    }
  }), 'static_page' === settings.redirect_type && wp.element.createElement(SelectControl, {
    key: "redirect_type_page",
    className: "full-width",
    label: label('redirect_page'),
    labelPosition: "side",
    value: settings.redirect_page,
    options: source.pages,
    onChange: function onChange(redirect_page) {
      return onChangeSettingObj({
        redirect_page: redirect_page
      });
    }
  }), 'custom_url' === settings.redirect_type && wp.element.createElement(FieldWithPreset, {
    key: 'custom_url-FieldWithPreset',
    ModalEditor: function ModalEditor(_ref) {
      var actionClick = _ref.actionClick,
          onRequestClose = _ref.onRequestClose;
      return wp.element.createElement(DynamicPreset, {
        value: settings.redirect_url,
        isSaveAction: actionClick,
        onSavePreset: function onSavePreset(redirect_url) {
          return onChangeSettingObj({
            redirect_url: redirect_url
          });
        },
        onUnMount: onRequestClose,
        excludeSources: ['query_var']
      });
    },
    triggerClasses: ['trigger__text-control']
  }, wp.element.createElement(TextControl, {
    key: "redirect_url_control",
    label: label('redirect_url'),
    value: settings.redirect_url,
    className: 'jet-control-with-dynamic',
    onChange: function onChange(redirect_url) {
      return onChangeSettingObj({
        redirect_url: redirect_url
      });
    }
  })), wp.element.createElement(BaseControl, {
    label: label('redirect_args'),
    key: "redirect_args_control"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, fields.map(function (_ref2, index) {
    var name = _ref2.name;
    return wp.element.createElement(CheckboxControl, {
      key: "checkbox_args_".concat(name, "_").concat(index),
      label: name,
      checked: isChecked(name),
      onChange: function onChange(newVal) {
        return onChangeRedirectArgs(newVal, name);
      }
    });
  }))), wp.element.createElement(TextControl, {
    key: "redirect_hash_control",
    label: label('redirect_hash'),
    value: settings.redirect_hash,
    onChange: function onChange(redirect_hash) {
      return onChangeSettingObj({
        redirect_hash: redirect_hash
      });
    }
  }));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('redirect_to_page', withSelect(withRequestFields)(RedirectToPageAction));

/***/ }),

/***/ "./editor/form-actions/register-user.js":
/*!**********************************************!*\
  !*** ./editor/form-actions/register-user.js ***!
  \**********************************************/
/***/ (() => {

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

var _JetFBComponents = JetFBComponents,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl,
    ActionMessages = _JetFBComponents.ActionMessages;
var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    withPlaceholder = _JetFBActions.Tools.withPlaceholder,
    convertListToFieldsMap = _JetFBActions.convertListToFieldsMap;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function RegisterUserAction(props) {
  var settings = props.settings,
      source = props.source,
      label = props.label,
      help = props.help,
      onChangeSettingObj = props.onChangeSettingObj,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      requestFields = props.requestFields;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      fieldsWithRequest = _useState4[0],
      setFieldsWithRequest = _useState4[1];

  useEffect(function () {
    var _fields = getFormFieldsBlocks();

    setFields([].concat(_toConsumableArray(_fields), _toConsumableArray(requestFields)));
    setFieldsWithRequest(convertListToFieldsMap(_fields, requestFields));

    if (settings.add_user_id) {
      onChangeSettingObj({
        requestFields: [source.requestFields.user_id]
      });
    }
  }, []);
  var userFields = Object.entries(source.userFields);
  /* eslint-disable jsx-a11y/no-onchange */

  return wp.element.createElement(React.Fragment, {
    key: "register_user"
  }, wp.element.createElement(ToggleControl, {
    key: "allow_register",
    label: label('allow_register'),
    checked: settings.allow_register,
    onChange: function onChange(allow_register) {
      return onChangeSettingObj({
        allow_register: allow_register
      });
    }
  }), settings.allow_register && wp.element.createElement(SelectControl, {
    key: "role_can_register",
    label: label('role_can_register'),
    labelPosition: "side",
    value: settings.role_can_register,
    options: source.allUserRoles,
    onChange: function onChange(role_can_register) {
      return onChangeSettingObj({
        role_can_register: role_can_register
      });
    }
  }), wp.element.createElement(BaseControl, {
    label: label('fields_map'),
    key: "user_fields_map"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, wp.element.createElement("span", {
    className: 'description-controls'
  }, __('Set form fields names to to get user data from', 'jet-form-builder')), userFields.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        value = _ref2[0],
        data = _ref2[1];

    return wp.element.createElement(WrapperRequiredControl, {
      field: [value, data]
    }, wp.element.createElement(SelectControl, {
      className: "full-width",
      key: "user_fields_".concat(value),
      value: getMapField({
        name: value
      }),
      options: withPlaceholder(fields),
      onChange: function onChange(newValue) {
        return setMapField({
          nameField: value,
          value: newValue
        });
      }
    }));
  }))), wp.element.createElement(SelectControl, {
    key: "user_role_list",
    className: "full-width",
    label: label('user_role'),
    labelPosition: "side",
    value: settings.user_role,
    options: source.userRoles,
    onChange: function onChange(user_role) {
      return onChangeSettingObj({
        user_role: user_role
      });
    }
  }), wp.element.createElement(BaseControl, {
    label: label('user_meta'),
    key: "user_meta_list"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, wp.element.createElement("span", {
    className: 'description-controls'
  }, __('Set user meta fields to save appropriate form fields into', 'jet-form-builder')), fieldsWithRequest.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        name = _ref4[0],
        data = _ref4[1];

    return wp.element.createElement(WrapperRequiredControl, {
      field: [name, data]
    }, wp.element.createElement(TextControl, {
      key: "form_fields_".concat(name),
      value: getMapField({
        source: 'meta_fields_map',
        name: name
      }),
      onChange: function onChange(newVal) {
        return setMapField({
          nameField: name,
          value: newVal,
          source: 'meta_fields_map'
        });
      }
    }));
  }))), wp.element.createElement(ToggleControl, {
    key: "log_in",
    label: label('log_in'),
    checked: settings.log_in,
    onChange: function onChange(log_in) {
      return onChangeSettingObj({
        log_in: log_in
      });
    }
  }), wp.element.createElement(ToggleControl, {
    key: "add_user_id_control",
    label: label('add_user_id'),
    checked: settings.add_user_id,
    onChange: function onChange(add_user_id) {
      return onChangeSettingObj({
        add_user_id: add_user_id,
        requestFields: add_user_id ? [source.requestFields.user_id] : []
      });
    },
    help: help('add_user_id')
  }), wp.element.createElement(ActionMessages, props));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('register_user', withSelect(withRequestFields)(RegisterUserAction));

/***/ }),

/***/ "./editor/form-actions/send-email.js":
/*!*******************************************!*\
  !*** ./editor/form-actions/send-email.js ***!
  \*******************************************/
/***/ (() => {

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

/**
 * Internal dependencies
 */
var _JetFBComponents = JetFBComponents,
    MacrosInserter = _JetFBComponents.MacrosInserter;
var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    withPlaceholder = _JetFBActions.Tools.withPlaceholder;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;

function SendEmailAction(_ref) {
  var settings = _ref.settings,
      source = _ref.source,
      label = _ref.label,
      help = _ref.help,
      onChangeSetting = _ref.onChangeSetting,
      requestFields = _ref.requestFields;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      formFields = _useState2[0],
      setFormFields = _useState2[1];

  useEffect(function () {
    setFormFields([].concat(_toConsumableArray(getFormFieldsBlocks()), _toConsumableArray(requestFields)));
  }, []);

  var insertMacros = function insertMacros(macros) {
    var content = (settings.content || '') + '%' + macros + '%';
    onChangeSetting(content, 'content');
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "mail_to",
    labelPosition: "side",
    className: "full-width",
    value: settings.mail_to,
    options: source.mailTo,
    label: label('mail_to'),
    help: help('mail_to'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'mail_to');
    }
  }), 'custom' === settings.mail_to && wp.element.createElement(TextControl, {
    key: "custom_email",
    value: settings.custom_email,
    label: label('custom_email'),
    help: help('custom_email'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'custom_email');
    }
  }), 'form' === settings.mail_to && wp.element.createElement(SelectControl, {
    key: "from_field",
    labelPosition: "side",
    className: "full-width",
    value: settings.from_field,
    options: withPlaceholder(formFields),
    label: label('from_field'),
    help: help('from_field'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'from_field');
    }
  }), wp.element.createElement(SelectControl, {
    key: "reply_to",
    labelPosition: "side",
    className: "full-width",
    value: settings.reply_to,
    options: source.replyTo,
    label: label('reply_to'),
    help: help('reply_to'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'reply_to');
    }
  }), 'custom' === settings.reply_to && wp.element.createElement(TextControl, {
    key: "reply_to_email",
    value: settings.reply_to_email,
    label: label('reply_to_email'),
    help: help('reply_to_email'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'reply_to_email');
    }
  }), 'form' === settings.reply_to && wp.element.createElement(SelectControl, {
    key: "reply_from_field",
    labelPosition: "side",
    className: "full-width",
    value: settings.reply_from_field,
    options: withPlaceholder(formFields),
    label: label('reply_from_field'),
    help: help('reply_from_field'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'reply_from_field');
    }
  }), wp.element.createElement(TextControl, {
    key: "subject",
    value: settings.subject,
    label: label('subject'),
    help: help('subject'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'subject');
    }
  }), wp.element.createElement(TextControl, {
    key: "from_name",
    value: settings.from_name,
    label: label('from_name'),
    help: help('from_name'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'from_name');
    }
  }), wp.element.createElement(TextControl, {
    key: "from_address",
    value: settings.from_address,
    label: label('from_address'),
    help: help('from_address'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'from_address');
    }
  }), wp.element.createElement(SelectControl, {
    key: "content_type",
    labelPosition: "side",
    className: "full-width",
    value: settings.content_type,
    options: source.content_type,
    label: label('content_type'),
    help: help('content_type'),
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'content_type');
    }
  }), wp.element.createElement("div", {
    className: "jet-form-editor__macros-wrap"
  }, wp.element.createElement(TextareaControl, {
    key: "content",
    value: settings.content,
    label: label('content'),
    help: help('content'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'content');
    }
  }), wp.element.createElement(MacrosInserter, {
    fields: formFields,
    onFieldClick: insertMacros,
    customMacros: source.customMacros,
    zIndex: 10000000
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('send_email', withSelect(withRequestFields)(SendEmailAction));

/***/ }),

/***/ "./editor/form-actions/update-options.js":
/*!***********************************************!*\
  !*** ./editor/form-actions/update-options.js ***!
  \***********************************************/
/***/ (() => {

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

var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    addAction = _JetFBActions.addAction;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
addAction('update_options', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(UpdateOptionsAction, _wp$element$Component);

  var _super = _createSuper(UpdateOptionsAction);

  function UpdateOptionsAction(props) {
    var _this;

    _classCallCheck(this, UpdateOptionsAction);

    _this = _super.call(this, props);
    _this.fields = getFormFieldsBlocks();
    return _this;
  }

  _createClass(UpdateOptionsAction, [{
    key: "getFieldByName",
    value: function getFieldByName(_ref) {
      var source = _ref.source,
          name = _ref.name;
      var settings = this.props.settings;

      if (settings[source] && settings[source][name]) {
        return settings[source][name];
      }

      return '';
    }
  }, {
    key: "getFieldMeta",
    value: function getFieldMeta(name) {
      return this.getFieldByName({
        source: 'meta_fields_map',
        name: name
      });
    }
  }, {
    key: "changeFieldsMap",
    value: function changeFieldsMap(_ref2) {
      var source = _ref2.source,
          nameField = _ref2.nameField,
          value = _ref2.value;
      var fieldsMap = Object.assign({}, this.props.settings[source]);
      fieldsMap[nameField] = value;
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, source, fieldsMap)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          onChange = _this$props.onChange,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;

      var onChangeMetaFieldMap = function onChangeMetaFieldMap(value, nameField) {
        var source = 'meta_fields_map';

        _this2.changeFieldsMap({
          value: value,
          nameField: nameField,
          source: source
        });
      };

      var onChangeSetting = function onChangeSetting(value, key) {
        onChange(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));
      };
      /* eslint-disable jsx-a11y/no-onchange */


      return wp.element.createElement("div", {
        key: "register_user"
      }, wp.element.createElement(SelectControl, {
        key: "options_page_list",
        className: "full-width",
        label: label('options_page'),
        labelPosition: "side",
        value: settings.options_page,
        options: source.optionsPages,
        onChange: function onChange(newValue) {
          onChangeSetting(newValue, 'options_page');
        }
      }), wp.element.createElement(BaseControl, {
        label: label('options_map'),
        key: "options_meta_list"
      }, wp.element.createElement("div", {
        className: "jet-user-fields-map__list"
      }, this.fields.map(function (_ref3, index) {
        var name = _ref3.name;
        return wp.element.createElement("div", {
          className: "jet-user-meta__row",
          key: 'options_meta_' + name + index
        }, wp.element.createElement(TextControl, {
          label: name,
          value: _this2.getFieldMeta(name),
          onChange: function onChange(newVal) {
            return onChangeMetaFieldMap(newVal, name);
          }
        }));
      }))));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return UpdateOptionsAction;
}(wp.element.Component));

/***/ }),

/***/ "./editor/form-actions/update-user.js":
/*!********************************************!*\
  !*** ./editor/form-actions/update-user.js ***!
  \********************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    convertListToFieldsMap = _JetFBActions.convertListToFieldsMap,
    withPlaceholder = _JetFBActions.Tools.withPlaceholder;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl,
    ActionMessages = _JetFBComponents.ActionMessages;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function UpdateUserAction(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  var settings = props.settings,
      onChangeSetting = props.onChangeSetting,
      source = props.source,
      label = props.label,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      requestFields = props.requestFields;

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      fieldType = _useState4[0],
      setTypeField = _useState4[1];

  useEffect(function () {
    setTypeField(function () {
      var result = {};

      for (var fieldsMapKey in settings.fields_map) {
        result[fieldsMapKey] = getTypeFieldValue(settings.fields_map[fieldsMapKey]);
      }

      return result;
    });
    setFields(convertListToFieldsMap(getFormFieldsBlocks(), requestFields));
  }, []);

  function getTypeFieldValue(value) {
    var resultValue = 'user_meta';

    var _iterator = _createForOfIteratorHelper(source.userFields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var userField = _step.value;

        if (value === userField.value) {
          resultValue = value;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return resultValue;
  }

  function setTypeFieldValue(prev, fieldID, value) {
    var resultValue = getTypeFieldValue(value);

    if ('user_meta' === resultValue) {
      setMapField({
        nameField: fieldID,
        value: ''
      });
    } else {
      setMapField({
        nameField: fieldID,
        value: resultValue
      });
    }

    return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, fieldID, resultValue));
  }

  var getFieldSelect = function getFieldSelect(fieldId, index) {
    return wp.element.createElement(SelectControl, {
      key: fieldId + index,
      value: fieldType[fieldId],
      onChange: function onChange(value) {
        setTypeField(function (prev) {
          return setTypeFieldValue(prev, fieldId, value);
        });
      },
      options: source.userFields
    });
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement("div", {
    key: "update_user"
  }, wp.element.createElement(ActionFieldsMap, {
    label: label('fields_map'),
    key: "user_fields_map",
    fields: fields
  }, function (_ref) {
    var fieldId = _ref.fieldId,
        fieldData = _ref.fieldData,
        index = _ref.index;
    return wp.element.createElement(WrapperRequiredControl, {
      field: [fieldId, fieldData]
    }, 'user_meta' === fieldType[fieldId] && wp.element.createElement("div", {
      className: "components-base-control jet-margin-bottom-wrapper"
    }, getFieldSelect(fieldId, index), wp.element.createElement(TextControl, {
      key: fieldId + index + '_text',
      value: getMapField({
        name: fieldId
      }),
      onChange: function onChange(value) {
        return setMapField({
          nameField: fieldId,
          value: value
        });
      }
    })), 'user_meta' !== fieldType[fieldId] && getFieldSelect(fieldId, index));
  }), wp.element.createElement(SelectControl, {
    label: label('user_role'),
    labelPosition: "side",
    key: "user_role_list",
    className: "full-width",
    value: settings.user_role,
    options: source.userRoles,
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'user_role');
    }
  }), wp.element.createElement(ActionMessages, props));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('update_user', withSelect(withRequestFields)(UpdateUserAction));

/***/ }),

/***/ "./editor/gateways/gateways-editor.js":
/*!********************************************!*\
  !*** ./editor/gateways/gateways-editor.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _paypal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypal */ "./editor/gateways/paypal/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var _JetFBActions = JetFBActions,
    prepareActionsListByType = _JetFBActions.prepareActionsListByType,
    fromLocalizeHelper = _JetFBActions.fromLocalizeHelper,
    gatewayAttr = _JetFBActions.gatewayAttr,
    renderGateway = _JetFBActions.renderGateway,
    gatewayActionAttributes = _JetFBActions.gatewayActionAttributes,
    renderGatewayWithPlaceholder = _JetFBActions.renderGatewayWithPlaceholder;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var _JetFBHooks = JetFBHooks,
    withSelectMeta = _JetFBHooks.withSelectMeta,
    withSelectGateways = _JetFBHooks.withSelectGateways,
    withDispatchGateways = _JetFBHooks.withDispatchGateways,
    withSelectFormFields = _JetFBHooks.withSelectFormFields;
var gatewaysData = gatewayAttr();
var label = gatewayAttr('labels');
var callableGateway = gatewayAttr('additional');

function GatewaysEditor(_ref) {
  var ActionsMeta = _ref._jf_actions,
      setGateway = _ref.setGateway,
      gatewayGeneral = _ref.gatewayGeneral,
      setGatewayInner = _ref.setGatewayInner,
      formFields = _ref.formFields,
      loadingGateway = _ref.loadingGateway,
      gatewayRequest = _ref.gatewayRequest;
  var availableActions = ActionsMeta.filter(function (action) {
    return action.type !== 'redirect_to_page';
  });
  var insertPostActions = prepareActionsListByType(ActionsMeta, 'insert_post', true);
  var additional = callableGateway(gatewayGeneral.gateway);
  /**
   * Used for set notifications and gateway type settings
   *
   * @param when
   * @param type
   * @param newValue
   */

  var setValueInObject = function setValueInObject(when, type, newValue) {
    setGatewayInner({
      key: when,
      value: _defineProperty({}, type, newValue)
    });
  };
  /**
   * Used for get notifications and gateway type settings
   *
   * @param when
   * @param type
   * @param isEmptyResult
   * @returns {boolean|*}
   */


  var getNotifications = function getNotifications(when, type) {
    var isEmptyResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (gatewayGeneral[when] && gatewayGeneral[when][type]) {
      return gatewayGeneral[when][type];
    }

    return isEmptyResult;
  };

  var setResultMessage = function setResultMessage(key, value) {
    setValueInObject('messages', key, value);
  };

  var getResultMessage = function getResultMessage(key) {
    return getNotifications('messages', key, gatewaysData.messages[key]);
  };

  var setNotificationsBefore = function setNotificationsBefore(id, newValue) {
    setValueInObject('notifications_before', id, newValue);
  };

  var actionDefault = {
    active: false
  };

  var getNotificationsBefore = function getNotificationsBefore(id) {
    return getNotifications('notifications_before', id, actionDefault);
  };

  var setNotificationsFailed = function setNotificationsFailed(type, newValue) {
    setValueInObject('notifications_failed', type, newValue);
  };

  var getNotificationsFailed = function getNotificationsFailed(id) {
    return getNotifications('notifications_failed', id, actionDefault);
  };

  var setNotificationsSuccess = function setNotificationsSuccess(id, newValue) {
    setValueInObject('notifications_success', id, newValue);
  };

  var getNotificationsSuccess = function getNotificationsSuccess(id) {
    return getNotifications('notifications_success', id, actionDefault);
  };

  var actionLabel = fromLocalizeHelper('getActionLabel');
  var GatewayFooter = wp.element.createElement(React.Fragment, null, Boolean(availableActions.length) && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: __('Before payment processed:', 'jet-form-builder'),
    key: "before_payment_base_control"
  }, wp.element.createElement("div", {
    className: 'jet-user-fields-map__list'
  }, availableActions.map(function (action, index) {
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsBefore(action.id).active,
      label: actionLabel(action.type),
      help: gatewayActionAttributes(action),
      onChange: function onChange(active) {
        return setNotificationsBefore(action.id, {
          active: active,
          type: action.type
        });
      }
    });
  }))), wp.element.createElement(BaseControl, {
    label: __('On successful payment:', 'jet-form-builder'),
    key: "success_payment_base_control"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, availableActions.map(function (action, index) {
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsSuccess(action.id).active,
      label: actionLabel(action.type),
      help: gatewayActionAttributes(action),
      onChange: function onChange(active) {
        return setNotificationsSuccess(action.id, {
          active: active,
          type: action.type
        });
      }
    });
  }))), wp.element.createElement(BaseControl, {
    label: __('On failed payment:', 'jet-form-builder'),
    key: "failed_payment_base_control"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, availableActions.map(function (action, index) {
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsFailed(action.id).active,
      label: actionLabel(action.type),
      help: gatewayActionAttributes(action),
      onChange: function onChange(active) {
        return setNotificationsFailed(action.id, {
          active: active,
          type: action.type
        });
      }
    });
  })))), ActionsMeta.find(function (action) {
    return action.type === 'redirect_to_page';
  }) && wp.element.createElement(ToggleControl, {
    key: "checkbox_block_redirect_to_page",
    checked: gatewayGeneral.use_success_redirect,
    label: label('use_success_redirect'),
    onChange: function onChange(val) {
      setGateway({
        use_success_redirect: val
      });
    }
  }), 1 !== additional.version && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: label('action_order'),
    key: "gateway_action_order_base_control"
  }, wp.element.createElement(RadioControl, {
    className: "jet-control-clear-full jet-user-fields-map__list",
    key: "gateway_action_order",
    options: insertPostActions,
    selected: gatewayGeneral.action_order,
    onChange: function onChange(newVal) {
      setGateway({
        action_order: Number(newVal)
      });
    }
  })), wp.element.createElement(SelectControl, {
    label: label('price_field'),
    key: 'form_fields_price_field',
    value: gatewayGeneral.price_field,
    labelPosition: "side",
    onChange: function onChange(price_field) {
      setGateway({
        price_field: price_field
      });
    },
    options: formFields
  })), renderGatewayWithPlaceholder(gatewayGeneral.gateway, {}, 'macrosList', wp.element.createElement(BaseControl, {
    key: "payment_result_macros_base_control"
  }, wp.element.createElement("h4", null, __('Available macros list: ', 'jet-form-builder'), wp.element.createElement("br", null), __('%gateway_amount% - payment amount returned from gateway template;', 'jet-form-builder'), wp.element.createElement("br", null), __('%gateway_status% - payment status returned from payment gateway;', 'jet-form-builder'), wp.element.createElement("br", null), __('%field_name% - replace "field_name" with any field name from the form;', 'jet-form-builder'), wp.element.createElement("br", null)))), wp.element.createElement(TextareaControl, {
    key: "payment_result_message_success",
    label: label('message_success'),
    value: getResultMessage('success'),
    onChange: function onChange(newValue) {
      return setResultMessage('success', newValue);
    }
  }), wp.element.createElement(TextareaControl, {
    key: "payment_result_message_failed",
    label: label('message_failed'),
    value: getResultMessage('failed'),
    onChange: function onChange(newValue) {
      return setResultMessage('failed', newValue);
    }
  }));
  return wp.element.createElement(React.Fragment, null, renderGateway(gatewayGeneral.gateway, {
    setValueInObject: setValueInObject,
    getNotifications: getNotifications
  }), (-1 === gatewayRequest.id || loadingGateway.success || !gatewayRequest.id.includes(gatewayGeneral.gateway)) && GatewayFooter);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(function () {
  return _objectSpread(_objectSpread(_objectSpread({}, withSelectMeta('_jf_actions').apply(void 0, arguments)), withSelectFormFields([], '--').apply(void 0, arguments)), withSelectGateways.apply(void 0, arguments));
}), withDispatch(withDispatchGateways))(GatewaysEditor));

/***/ }),

/***/ "./editor/gateways/paypal/index.js":
/*!*****************************************!*\
  !*** ./editor/gateways/paypal/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./editor/gateways/paypal/main.js");
/* harmony import */ var _pay_now_scenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay-now-scenario */ "./editor/gateways/paypal/pay-now-scenario.js");
/* harmony import */ var _subscribe_now_scenario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribe-now-scenario */ "./editor/gateways/paypal/subscribe-now-scenario.js");



var _JetFBActions = JetFBActions,
    registerGateway = _JetFBActions.registerGateway;
registerGateway('paypal', _main__WEBPACK_IMPORTED_MODULE_0__["default"]);
registerGateway('paypal', _pay_now_scenario__WEBPACK_IMPORTED_MODULE_1__["default"], 'PAY_NOW');
registerGateway('paypal', _subscribe_now_scenario__WEBPACK_IMPORTED_MODULE_2__["default"], 'SUBSCRIBE_NOW');

/***/ }),

/***/ "./editor/gateways/paypal/main.js":
/*!****************************************!*\
  !*** ./editor/gateways/paypal/main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    withNotices = _wp$components.withNotices;
var useEffect = wp.element.useEffect;
var _JetFBActions = JetFBActions,
    renderGateway = _JetFBActions.renderGateway,
    gatewayLabel = _JetFBActions.gatewayLabel,
    gatewayAttr = _JetFBActions.gatewayAttr;
var _JetFBHooks = JetFBHooks,
    withSelectGateways = _JetFBHooks.withSelectGateways,
    withDispatchGateways = _JetFBHooks.withDispatchGateways;
var callableGateway = gatewayAttr('additional');
var paypalLabel = gatewayLabel('paypal');

function PaypalMain(_ref) {
  var loadingGateway = _ref.loadingGateway,
      setGatewayRequest = _ref.setGatewayRequest,
      gatewaySpecific = _ref.gatewaySpecific,
      setGatewaySpecific = _ref.setGatewaySpecific,
      gatewayScenario = _ref.gatewayScenario,
      setGatewayScenario = _ref.setGatewayScenario,
      getSpecificOrGlobal = _ref.getSpecificOrGlobal,
      noticeOperations = _ref.noticeOperations,
      noticeUI = _ref.noticeUI;
  var additional = callableGateway('paypal');
  var _gatewayScenario$id = gatewayScenario.id,
      scenario = _gatewayScenario$id === void 0 ? 'PAY_NOW' : _gatewayScenario$id;
  var scenarioSource = additional[scenario] || {};
  useEffect(function () {
    setGatewayRequest({
      id: scenario
    });
  }, [scenario]);
  useEffect(function () {
    setGatewayRequest({
      id: scenario
    });
  }, []);
  return wp.element.createElement(React.Fragment, null, noticeUI, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: paypalLabel('use_global'),
    checked: gatewaySpecific.use_global,
    onChange: function onChange(use_global) {
      return setGatewaySpecific({
        use_global: use_global
      });
    }
  }), wp.element.createElement(TextControl, {
    label: paypalLabel('client_id'),
    key: "paypal_client_id_setting",
    value: getSpecificOrGlobal('client_id'),
    onChange: function onChange(client_id) {
      return setGatewaySpecific({
        client_id: client_id
      });
    },
    disabled: gatewaySpecific.use_global
  }), wp.element.createElement(TextControl, {
    label: paypalLabel('secret'),
    key: "paypal_secret_setting",
    value: getSpecificOrGlobal('secret'),
    onChange: function onChange(secret) {
      return setGatewaySpecific({
        secret: secret
      });
    },
    disabled: gatewaySpecific.use_global
  }), wp.element.createElement(SelectControl, {
    labelPosition: "side",
    label: paypalLabel('gateway_type'),
    value: scenario,
    onChange: function onChange(id) {
      setGatewayScenario({
        id: id
      });
    },
    options: additional.gateway_types
  }), renderGateway('paypal', {
    scenarioSource: scenarioSource,
    noticeOperations: noticeOperations
  }, scenario));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(withSelectGateways), withDispatch(withDispatchGateways), withNotices)(PaypalMain));

/***/ }),

/***/ "./editor/gateways/paypal/pay-now-scenario.js":
/*!****************************************************!*\
  !*** ./editor/gateways/paypal/pay-now-scenario.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    RadioControl = _wp$components.RadioControl;
var _JetFBActions = JetFBActions,
    gatewayLabel = _JetFBActions.gatewayLabel,
    gatewayAttr = _JetFBActions.gatewayAttr;
var _JetFBHooks = JetFBHooks,
    withSelectFormFields = _JetFBHooks.withSelectFormFields,
    withSelectGateways = _JetFBHooks.withSelectGateways,
    withDispatchGateways = _JetFBHooks.withDispatchGateways,
    withSelectActionsByType = _JetFBHooks.withSelectActionsByType;
var _JetFBComponents = JetFBComponents,
    GatewayFetchButton = _JetFBComponents.GatewayFetchButton;
var paypalLabel = gatewayLabel('paypal');
var globalLabel = gatewayAttr('labels');

function PayNowScenario(_ref) {
  var gatewayGeneral = _ref.gatewayGeneral,
      gatewaySpecific = _ref.gatewaySpecific,
      setGateway = _ref.setGateway,
      setGatewaySpecific = _ref.setGatewaySpecific,
      formFields = _ref.formFields,
      insert_post = _ref.insert_post,
      getSpecificOrGlobal = _ref.getSpecificOrGlobal,
      loadingGateway = _ref.loadingGateway,
      scenarioSource = _ref.scenarioSource,
      noticeOperations = _ref.noticeOperations;

  var displayNotice = function displayNotice(status) {
    return function (response) {
      noticeOperations.createNotice({
        status: status,
        content: response.message
      });
    };
  };

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: 'Request Button'
  }, wp.element.createElement(GatewayFetchButton, {
    initialLabel: 'Fetch',
    label: 'Retry Fetch',
    apiArgs: _objectSpread(_objectSpread({}, scenarioSource.fetch), {}, {
      data: {
        client_id: getSpecificOrGlobal('client_id'),
        secret: getSpecificOrGlobal('secret')
      }
    }),
    onSuccess: displayNotice('success'),
    onFail: displayNotice('error')
  })), loadingGateway.success && wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {
    label: paypalLabel('currency'),
    key: "paypal_currency_code_setting",
    value: gatewaySpecific.currency,
    onChange: function onChange(currency) {
      return setGatewaySpecific({
        currency: currency
      });
    }
  }), wp.element.createElement(SelectControl, {
    label: globalLabel('price_field'),
    key: 'form_fields_price_field',
    value: gatewayGeneral.price_field,
    labelPosition: "side",
    onChange: function onChange(price_field) {
      setGateway({
        price_field: price_field
      });
    },
    options: formFields
  }), wp.element.createElement(BaseControl, {
    label: globalLabel('action_order'),
    key: "gateway_action_order_pay_now_control"
  }, wp.element.createElement(RadioControl, {
    className: "jet-control-clear-full jet-user-fields-map__list",
    key: "gateway_action_order_pay_now",
    options: insert_post,
    selected: gatewayGeneral.action_order,
    onChange: function onChange(val) {
      setGateway({
        action_order: Number(val)
      });
    }
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(function () {
  return _objectSpread(_objectSpread(_objectSpread({}, withSelectFormFields([], '--').apply(void 0, arguments)), withSelectActionsByType('insert_post', true).apply(void 0, arguments)), withSelectGateways.apply(void 0, arguments));
}), withDispatch(function () {
  return _objectSpread({}, withDispatchGateways.apply(void 0, arguments));
}))(PayNowScenario));

/***/ }),

/***/ "./editor/gateways/paypal/subscribe-now-scenario.js":
/*!**********************************************************!*\
  !*** ./editor/gateways/paypal/subscribe-now-scenario.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    RadioControl = _wp$components.RadioControl;
var _JetFBActions = JetFBActions,
    gatewayLabel = _JetFBActions.gatewayLabel,
    gatewayAttr = _JetFBActions.gatewayAttr;
var _JetFBHooks = JetFBHooks,
    withSelectFormFields = _JetFBHooks.withSelectFormFields,
    withSelectGateways = _JetFBHooks.withSelectGateways,
    withDispatchGateways = _JetFBHooks.withDispatchGateways,
    withSelectActionsByType = _JetFBHooks.withSelectActionsByType;
var _JetFBComponents = JetFBComponents,
    GatewayFetchButton = _JetFBComponents.GatewayFetchButton;
var paypalLabel = gatewayLabel('paypal');
var globalLabel = gatewayAttr('labels');

function SubscribeNowScenario(_ref) {
  var gatewayGeneral = _ref.gatewayGeneral,
      setGateway = _ref.setGateway,
      formFields = _ref.formFields,
      insert_post = _ref.insert_post,
      getSpecificOrGlobal = _ref.getSpecificOrGlobal,
      loadingGateway = _ref.loadingGateway,
      gatewayScenario = _ref.gatewayScenario,
      setGatewayScenario = _ref.setGatewayScenario,
      scenarioSource = _ref.scenarioSource,
      noticeOperations = _ref.noticeOperations;

  var displayNotice = function displayNotice(status) {
    return function (response) {
      noticeOperations.createNotice({
        status: status,
        content: response.message
      });
    };
  };

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: 'Request Button'
  }, wp.element.createElement(GatewayFetchButton, {
    initialLabel: 'Fetch',
    label: 'Retry Fetch',
    apiArgs: _objectSpread(_objectSpread({}, scenarioSource.fetch), {}, {
      data: {
        client_id: getSpecificOrGlobal('client_id'),
        secret: getSpecificOrGlobal('secret')
      }
    }),
    onSuccess: displayNotice('success'),
    onFail: displayNotice('error')
  })), loadingGateway.success && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    label: paypalLabel('subscribe_plan_field'),
    key: 'form_fields_subscribe_plan_field',
    value: gatewayScenario.plan_field,
    labelPosition: "side",
    onChange: function onChange(plan_field) {
      setGatewayScenario({
        plan_field: plan_field
      });
    },
    options: formFields
  }), wp.element.createElement(BaseControl, {
    label: globalLabel('action_order'),
    key: "gateway_action_order_pay_now_control"
  }, wp.element.createElement(RadioControl, {
    className: "jet-control-clear-full jet-user-fields-map__list",
    key: "gateway_action_order_pay_now",
    options: insert_post,
    selected: gatewayGeneral.action_order,
    onChange: function onChange(val) {
      setGateway({
        action_order: Number(val)
      });
    }
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(function () {
  return _objectSpread(_objectSpread(_objectSpread({}, withSelectFormFields([], '--').apply(void 0, arguments)), withSelectActionsByType('insert_post', true).apply(void 0, arguments)), withSelectGateways.apply(void 0, arguments));
}), withDispatch(function () {
  return _objectSpread({}, withDispatchGateways.apply(void 0, arguments));
}))(SubscribeNowScenario));

/***/ }),

/***/ "./editor/plugins/actions/index.js":
/*!*****************************************!*\
  !*** ./editor/plugins/actions/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/actions/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-actions-panel',
  title: __('Post Submit Actions', 'jet-form-builder')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/actions/options.js":
/*!*******************************************!*\
  !*** ./editor/plugins/actions/options.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomID": () => (/* binding */ getRandomID),
/* harmony export */   "defaultActions": () => (/* binding */ defaultActions),
/* harmony export */   "conditionSettings": () => (/* binding */ conditionSettings),
/* harmony export */   "defaultAction": () => (/* binding */ defaultAction)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getRandomID = function getRandomID() {
  return Math.floor(Math.random() * 8999) + 1000;
};

var defaultAction = {
  type: 'send_email',
  id: getRandomID(),
  settings: {}
};
var defaultActions = [_objectSpread(_objectSpread({}, JSON.parse(JSON.stringify(defaultAction))), {}, {
  settings: {
    send_email: {
      subject: 'New order on website',
      content: 'Hi admin!\n\nThere are new order on your website.\n\nOrder details:\n- Post ID: %post_id%'
    }
  }
})];
var conditionSettings = window.JetFormEditorData.actionConditionSettings;


/***/ }),

/***/ "./editor/plugins/actions/render.js":
/*!******************************************!*\
  !*** ./editor/plugins/actions/render.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/plugins/actions/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
var _JetFBComponents = JetFBComponents,
    ActionModal = _JetFBComponents.ActionModal,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    FieldWithPreset = _JetFBComponents.FieldWithPreset,
    DynamicPreset = _JetFBComponents.DynamicPreset;
var _JetFBHooks = JetFBHooks,
    useActions = _JetFBHooks.useActions;
var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    CardHeader = _wp$components.CardHeader,
    DropdownMenu = _wp$components.DropdownMenu,
    Flex = _wp$components.Flex;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    useDispatch = _wp$data.useDispatch;
var compose = wp.compose.compose;
var actionTypes = window.jetFormActionTypes.map(function (action) {
  return {
    value: action.id,
    label: action.name
  };
});

function getActionCallback(editedAction) {
  for (var i = 0; i < window.jetFormActionTypes.length; i++) {
    if (window.jetFormActionTypes[i].id === editedAction.type && window.jetFormActionTypes[i].callback) {
      return window.jetFormActionTypes[i].callback;
    }
  }

  return false;
}

function getConditionOptionFrom(from, value) {
  var option = _options__WEBPACK_IMPORTED_MODULE_0__.conditionSettings[from].find(function (item) {
    return item.value === value;
  });
  return function (optionName) {
    var ifNot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return option ? option[optionName] || ifNot : ifNot;
  };
}

function getOperatorOption(operator) {
  return getConditionOptionFrom('operators', operator);
}

function getTransformerOption(value) {
  return getConditionOptionFrom('compare_value_formats', value);
}

var operators = [{
  value: 'and',
  label: __('AND (ALL conditions must be met)', 'jet-form-builder')
}, {
  value: 'or',
  label: __('OR (at least ONE condition must be met)', 'jet-form-builder')
}];

var operatorLabel = __('Condition Operator', 'jet-form-builder');

var PluginActions = function PluginActions(_ref) {
  var setCurrentAction = _ref.setCurrentAction;

  var _useActions = useActions(true),
      _useActions2 = _slicedToArray(_useActions, 2),
      actions = _useActions2[0],
      setActions = _useActions2[1];

  useEffect(function () {
    if (0 === actions.length) {
      setActions(_options__WEBPACK_IMPORTED_MODULE_0__.defaultActions);
    }
  }, []);

  var moveAction = function moveAction(fromIndex, toIndex) {
    var item = JSON.parse(JSON.stringify(actions[fromIndex])),
        replacedItem = JSON.parse(JSON.stringify(actions[toIndex]));
    actions.splice(toIndex, 1, item);
    actions.splice(fromIndex, 1, replacedItem);
    setActions(_toConsumableArray(actions));
  };

  var deleteAction = function deleteAction(index) {
    actions.splice(index, 1);
    setActions(_toConsumableArray(actions));
  };

  var updateAction = function updateAction(id, key, value) {
    setActions(actions.map(function (action, index) {
      if (action.id === id) {
        var newAction = JSON.parse(JSON.stringify(action));
        newAction[key] = value;
        return newAction;
      } else {
        return action;
      }
    }));
  };

  var updateActionObj = function updateActionObj(id, props) {
    setActions(function (actions) {
      return actions.map(function (current) {
        if (id !== current.id) {
          return current;
        }

        return _objectSpread(_objectSpread({}, JSON.parse(JSON.stringify(current))), props);
      });
    });
  };

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEdit = _useState2[0],
      setEdit = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      editedAction = _useState4[0],
      setEditedAction = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isEditProcessAction = _useState6[0],
      setEditProcessAction = _useState6[1];

  var _useState7 = useState({}),
      _useState8 = _slicedToArray(_useState7, 2),
      processedAction = _useState8[0],
      setProcessedAction = _useState8[1];

  var _useState9 = useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      formFields = _useState10[0],
      setFormFields = _useState10[1];

  var closeModal = function closeModal() {
    setEdit(false);
    setCurrentAction({});
  };

  var Callback = getActionCallback(editedAction);

  var updateActionSettings = function updateActionSettings(action) {
    updateActionObj(action.id, {
      settings: action.settings
    });
    closeModal();
  };

  var updateActionCondition = function updateActionCondition(items) {
    updateAction(processedAction.id, 'conditions', items);
    setEditProcessAction(false);
  };

  var updateActionType = function updateActionType(id, type) {
    setActions(function (prev) {
      return prev.map(function (prevItem) {
        if (prevItem.id === id) {
          var newAction = JSON.parse(JSON.stringify(prevItem));
          newAction.type = type;
          newAction.settings = newAction.settings || {};
          newAction.settings[type] = newAction.settings[type] || {};
          return newAction;
        } else {
          return prevItem;
        }
      });
    });
  };

  useEffect(function () {
    if (editedAction.type) {
      setEdit(true);
    }
  }, [editedAction]);
  useEffect(function () {
    if (processedAction.type) {
      setEditProcessAction(true);
      setFormFields(getFormFieldsBlocks([], '--'));
    }
  }, [processedAction]);

  var getMergedSettings = function getMergedSettings() {
    return editedAction.settings[editedAction.type] || editedAction.settings;
  };

  return wp.element.createElement(React.Fragment, null, actions && actions.map(function (action, index) {
    var header = applyFilters("jet.fb.section.actions.header.".concat(action.type), null, action, actions);
    return wp.element.createElement(Card, {
      key: action.id,
      size: 'extraSmall',
      className: 'jet-form-action'
    }, header && wp.element.createElement(CardHeader, null, header), wp.element.createElement(CardBody, null, wp.element.createElement(SelectControl, {
      value: action.type,
      options: actionTypes,
      onChange: function onChange(newType) {
        return updateActionType(action.id, newType);
      }
    }), applyFilters("jet.fb.section.actions.afterSelect.".concat(action.type), null, action, actions), wp.element.createElement(Flex, {
      style: {
        marginTop: '0.5em'
      },
      justify: "space-around"
    }, wp.element.createElement(Button, {
      disabled: !getActionCallback(action),
      icon: "edit",
      label: 'Edit Action',
      onClick: function onClick() {
        setEditedAction(function () {
          return _objectSpread({}, action);
        });
        setCurrentAction(_objectSpread(_objectSpread({}, action), {}, {
          index: index
        }));
      }
    }), wp.element.createElement(Button, {
      icon: "randomize",
      label: 'Conditions',
      onClick: function onClick() {
        setProcessedAction(function () {
          return _objectSpread({}, action);
        });
      }
    }), wp.element.createElement(DropdownMenu, {
      icon: 'ellipsis',
      label: 'Edit, move or delete',
      controls: [{
        title: 'Up',
        icon: 'arrow-up',
        disabled: true,
        onClick: function onClick() {
          if (0 !== index) {
            moveAction(index, index - 1);
          }
        }
      }, {
        title: 'Down',
        icon: 'arrow-down',
        disabled: index === actions.length,
        onClick: function onClick() {
          if (actions.length - 1 !== index) {
            moveAction(index, index + 1);
          }
        }
      }, {
        title: 'Delete',
        icon: 'trash',
        onClick: function onClick() {
          deleteAction(index);
        }
      }]
    }))));
  }), wp.element.createElement(Button, {
    isPrimary: true,
    onClick: function onClick() {
      setActions([].concat(_toConsumableArray(actions), [_objectSpread(_objectSpread({}, JSON.parse(JSON.stringify(_options__WEBPACK_IMPORTED_MODULE_0__.defaultAction))), {}, {
        id: (0,_options__WEBPACK_IMPORTED_MODULE_0__.getRandomID)()
      })]));
    }
  }, '+ New Action'), isEdit && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: closeModal,
    title: 'Edit Action',
    onUpdateClick: function onUpdateClick() {
      updateActionSettings(editedAction);
    },
    onCancelClick: closeModal
  }, Callback && wp.element.createElement(Callback, {
    settings: getMergedSettings(),
    actionId: editedAction.id,
    onChange: function onChange(data) {
      setEditedAction(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          settings: _objectSpread(_objectSpread({}, prev.settings), {}, _defineProperty({}, editedAction.type, data))
        });
      });
    }
  })), isEditProcessAction && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    title: __('Edit Action Conditions', 'jet-form-builder'),
    onRequestClose: function onRequestClose() {
      return setEditProcessAction(false);
    },
    onCancelClick: function onCancelClick() {
      return setEditProcessAction(false);
    }
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(RepeaterWithState, {
      items: processedAction.conditions,
      newItem: _options__WEBPACK_IMPORTED_MODULE_0__.conditionSettings.item,
      onUnMount: onRequestClose,
      isSaveAction: actionClick,
      onSaveItems: function onSaveItems(conditions) {
        updateActionObj(processedAction.id, {
          conditions: conditions,
          condition_operator: processedAction.condition_operator
        });
        setProcessedAction(false);
      },
      addNewButtonLabel: __('Add New Condition', 'jet-form-builder'),
      additionalControls: wp.element.createElement(SelectControl, {
        key: 'SelectControl-operator',
        label: operatorLabel,
        labelPosition: "side",
        value: processedAction.condition_operator || 'and',
        options: operators,
        onChange: function onChange(condition_operator) {
          setProcessedAction(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              condition_operator: condition_operator
            });
          });
        }
      })
    }, function (_ref3) {
      var currentItem = _ref3.currentItem,
          changeCurrentItem = _ref3.changeCurrentItem;
      var executeLabel = __('To fulfill this condition, the result of the check must be', 'jet-form-builder') + ' ';
      executeLabel += currentItem.execute ? 'TRUE' : 'FALSE';
      var transformerOption = getTransformerOption(currentItem.compare_value_format);
      var operatorOption = getOperatorOption(currentItem.operator);
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
        label: executeLabel,
        checked: currentItem.execute,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            execute: newValue
          });
        }
      }), wp.element.createElement(SelectControl, {
        label: "Operator",
        labelPosition: "side",
        help: operatorOption('help'),
        value: currentItem.operator,
        options: _options__WEBPACK_IMPORTED_MODULE_0__.conditionSettings.operators,
        onChange: function onChange(operator) {
          return changeCurrentItem({
            operator: operator
          });
        }
      }), wp.element.createElement(SelectControl, {
        label: "Field",
        labelPosition: "side",
        value: currentItem.field,
        options: formFields,
        onChange: function onChange(field) {
          return changeCurrentItem({
            field: field
          });
        }
      }), wp.element.createElement(SelectControl, {
        label: __('Type transform comparing value', 'jet-form-builder'),
        labelPosition: "side",
        value: currentItem.compare_value_format,
        options: _options__WEBPACK_IMPORTED_MODULE_0__.conditionSettings.compare_value_formats,
        onChange: function onChange(compare_value_format) {
          changeCurrentItem({
            compare_value_format: compare_value_format
          });
        }
      }), transformerOption('help').length > 0 && wp.element.createElement("p", {
        className: 'components-base-control__help',
        style: {
          marginTop: '0px',
          color: 'rgb(117, 117, 117)'
        },
        dangerouslySetInnerHTML: {
          __html: transformerOption('help')
        }
      }), wp.element.createElement(FieldWithPreset, {
        baseControlProps: {
          label: 'Value to Compare'
        },
        ModalEditor: function ModalEditor(_ref4) {
          var actionClick = _ref4.actionClick,
              onRequestClose = _ref4.onRequestClose;
          return wp.element.createElement(DynamicPreset, {
            value: currentItem.default,
            isSaveAction: actionClick,
            onSavePreset: function onSavePreset(newValue) {
              changeCurrentItem({
                default: newValue
              });
            },
            excludeSources: ['query_var'],
            onUnMount: onRequestClose
          });
        },
        triggerClasses: ['trigger__textarea']
      }, wp.element.createElement(TextareaControl, {
        className: 'jet-control-clear jet-user-fields-map__list',
        value: currentItem.default,
        help: operatorOption('need_explode') ? _options__WEBPACK_IMPORTED_MODULE_0__.conditionSettings.help_for_exploding_compare : '',
        onChange: function onChange(newValue) {
          changeCurrentItem({
            default: newValue
          });
        }
      })));
    });
  }));
};

PluginActions = compose(withDispatch(function (dispatch) {
  return {
    setCurrentAction: function setCurrentAction(action) {
      dispatch('jet-forms/actions').setCurrentAction(action);
    }
  };
}))(PluginActions);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginActions);

/***/ }),

/***/ "./editor/plugins/arguments/index.js":
/*!*******************************************!*\
  !*** ./editor/plugins/arguments/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/arguments/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-args-panel',
  title: __('Form Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/arguments/options.js":
/*!*********************************************!*\
  !*** ./editor/plugins/arguments/options.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitTypes": () => (/* binding */ submitTypes),
/* harmony export */   "fieldsLayout": () => (/* binding */ fieldsLayout)
/* harmony export */ });
var submitTypes = [{
  value: '',
  label: '--'
}, {
  value: 'reload',
  label: 'Page Reload'
}, {
  value: 'ajax',
  label: 'AJAX'
}];
var fieldsLayout = [{
  value: '',
  label: '--'
}, {
  value: 'column',
  label: 'Column'
}, {
  value: 'row',
  label: 'Row'
}];


/***/ }),

/***/ "./editor/plugins/arguments/render.js":
/*!********************************************!*\
  !*** ./editor/plugins/arguments/render.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginArgs)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/plugins/arguments/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBHooks = JetFBHooks,
    useMetaState = _JetFBHooks.useMetaState;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var __ = wp.i18n.__;
function PluginArgs() {
  var _useMetaState = useMetaState('_jf_args'),
      _useMetaState2 = _slicedToArray(_useMetaState, 2),
      args = _useMetaState2[0],
      setArgs = _useMetaState2[1];

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    label: __('Fields Layout', 'jet-form-builder'),
    value: args.fields_layout,
    options: _options__WEBPACK_IMPORTED_MODULE_0__.fieldsLayout,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          fields_layout: newVal
        });
      });
    }
  }), wp.element.createElement(TextControl, {
    label: __('Required Mark', 'jet-form-builder'),
    value: args.required_mark,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          required_mark: newVal
        });
      });
    }
  }), wp.element.createElement(SelectControl, {
    label: __('Submit Type', 'jet-form-builder'),
    value: args.submit_type,
    options: _options__WEBPACK_IMPORTED_MODULE_0__.submitTypes,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          submit_type: newVal
        });
      });
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'enable_progress',
    label: __('Enable form pages progress', 'jet-from-builder'),
    checked: args.enable_progress,
    onChange: function onChange(newVal) {
      setArgs(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          enable_progress: Boolean(newVal)
        });
      });
    }
  }));
}
;

/***/ }),

/***/ "./editor/plugins/captcha/index.js":
/*!*****************************************!*\
  !*** ./editor/plugins/captcha/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/captcha/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-captcha-panel',
  title: __('Captcha Settings', 'jet-form-builder')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/captcha/options.js":
/*!*******************************************!*\
  !*** ./editor/plugins/captcha/options.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "labels": () => (/* binding */ labels)
/* harmony export */ });
var __ = wp.i18n.__;
var labels = {
  enabled: __('Enable reCAPTCHA v3 form verification', 'jet-form-builder'),
  key: __('Site Key:', 'jet-form-builder'),
  secret: __('Secret Key:', 'jet-form-builder'),
  use_global: __('Use Global Settings', 'jet-form-builder')
};


/***/ }),

/***/ "./editor/plugins/captcha/render.js":
/*!******************************************!*\
  !*** ./editor/plugins/captcha/render.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/plugins/captcha/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var __ = wp.i18n.__;
var _JetFBHooks = JetFBHooks,
    useMetaState = _JetFBHooks.useMetaState;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
var _JetFBActions = JetFBActions,
    globalTab = _JetFBActions.globalTab;
var currentTab = globalTab({
  slug: 'captcha-tab'
});

function PluginCaptcha() {
  var _useMetaState = useMetaState('_jf_recaptcha'),
      _useMetaState2 = _slicedToArray(_useMetaState, 2),
      args = _useMetaState2[0],
      setArgs = _useMetaState2[1];

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'enabled',
    label: _options__WEBPACK_IMPORTED_MODULE_0__.labels.enabled,
    checked: args.enabled,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          enabled: Boolean(newVal)
        });
      });
    }
  }), args.enabled && wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: _options__WEBPACK_IMPORTED_MODULE_0__.labels.use_global,
    checked: args.use_global,
    onChange: function onChange(use_global) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          use_global: Boolean(use_global)
        });
      });
    }
  }), wp.element.createElement(TextControl, {
    key: 'site_key',
    label: _options__WEBPACK_IMPORTED_MODULE_0__.labels.key,
    value: args.use_global ? currentTab.key : args.key,
    disabled: args.use_global,
    onChange: function onChange(newValue) {
      return setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          key: newValue
        });
      });
    }
  }), wp.element.createElement(TextControl, {
    key: 'secret_key',
    label: _options__WEBPACK_IMPORTED_MODULE_0__.labels.secret,
    value: args.use_global ? currentTab.secret : args.secret,
    disabled: args.use_global,
    onChange: function onChange(newValue) {
      return setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          secret: newValue
        });
      });
    }
  }), wp.element.createElement("span", null, 'Register reCAPTCHA v3 keys ', wp.element.createElement("a", {
    href: "https://www.google.com/recaptcha/admin/create",
    target: "_blank"
  }, "here"))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginCaptcha);

/***/ }),

/***/ "./editor/plugins/gateways/index.js":
/*!******************************************!*\
  !*** ./editor/plugins/gateways/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/gateways/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-gateways-panel',
  title: __('Gateways Settings'),
  condition: window.JetFormEditorData.gateways.allowed
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/gateways/render.js":
/*!*******************************************!*\
  !*** ./editor/plugins/gateways/render.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gateways_gateways_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gateways/gateways-editor */ "./editor/gateways/gateways-editor.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


var __ = wp.i18n.__;
var _wp$components = wp.components,
    RadioControl = _wp$components.RadioControl,
    Button = _wp$components.Button;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var compose = wp.compose.compose;
var _JetFBComponents = JetFBComponents,
    ActionModal = _JetFBComponents.ActionModal;
var _JetFBHooks = JetFBHooks,
    withDispatchMeta = _JetFBHooks.withDispatchMeta,
    withSelectMeta = _JetFBHooks.withSelectMeta,
    withDispatchGateways = _JetFBHooks.withDispatchGateways,
    withSelectGateways = _JetFBHooks.withSelectGateways;
var gatewaysData = window.JetFormEditorData.gateways;

var getGatewayLabel = function getGatewayLabel(type) {
  return gatewaysData.list.find(function (el) {
    return el.value === type;
  }).label;
};

function PluginGateways(_ref) {
  var GatewaysMeta = _ref._jf_gateways,
      ActionsMeta = _ref._jf_actions,
      ChangeGateway = _ref.ChangeGateway,
      setGateway = _ref.setGateway,
      setGatewayScenario = _ref.setGatewayScenario,
      gatewayGeneral = _ref.gatewayGeneral,
      gatewayScenario = _ref.gatewayScenario;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEdit = _useState2[0],
      setEdit = _useState2[1];

  useEffect(function () {
    if (isEdit) {
      var _GatewaysMeta$Gateway;

      setGateway(GatewaysMeta);
      setGatewayScenario((_GatewaysMeta$Gateway = GatewaysMeta[GatewaysMeta.gateway]) === null || _GatewaysMeta$Gateway === void 0 ? void 0 : _GatewaysMeta$Gateway.scenario);
    } else {
      setGateway({});
      setGatewayScenario({});
    }
  }, [isEdit]);

  var closeModal = function closeModal() {
    var newMeta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (false !== newMeta) {
      ChangeGateway(newMeta);
    }

    setEdit(false);
  };

  var issetActionType = function issetActionType(type) {
    return Boolean(ActionsMeta.find(function (action) {
      return type === action.type;
    }));
  };

  var isDisabled = !issetActionType('insert_post');
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(RadioControl, {
    key: 'gateways_radio_control',
    selected: GatewaysMeta.gateway,
    options: [{
      label: 'None',
      value: 'none'
    }].concat(_toConsumableArray(gatewaysData.list)),
    onChange: function onChange(val) {
      ChangeGateway(_objectSpread(_objectSpread({}, GatewaysMeta), {}, {
        gateway: val
      }));
    }
  }), GatewaysMeta.gateway && 'none' !== GatewaysMeta.gateway && wp.element.createElement(React.Fragment, null, wp.element.createElement(Button, {
    onClick: function onClick() {
      return setEdit(true);
    },
    icon: 'admin-tools',
    style: {
      margin: '1em 0'
    },
    isSecondary: true,
    disabled: isDisabled
  }, __('Edit')), isDisabled && wp.element.createElement("p", null, __('Please add \`Insert/Update Post\` action', 'jet-form-builder'))), isEdit && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: function onRequestClose() {
      return closeModal();
    },
    onCancelClick: function onCancelClick() {
      return closeModal();
    },
    onUpdateClick: function onUpdateClick() {
      return closeModal(_objectSpread(_objectSpread({}, gatewayGeneral), {}, _defineProperty({}, gatewayGeneral.gateway, _objectSpread(_objectSpread({}, gatewayGeneral[gatewayGeneral.gateway] || {}), {}, {
        scenario: gatewayScenario
      }))));
    },
    title: "Edit ".concat(getGatewayLabel(GatewaysMeta.gateway), " Settings")
  }, wp.element.createElement(_gateways_gateways_editor__WEBPACK_IMPORTED_MODULE_0__["default"], null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withDispatch(function () {
  return _objectSpread(_objectSpread({}, withDispatchMeta('_jf_gateways', 'ChangeGateway').apply(void 0, arguments)), withDispatchGateways.apply(void 0, arguments));
}), withSelect(function () {
  return _objectSpread(_objectSpread(_objectSpread({}, withSelectGateways.apply(void 0, arguments)), withSelectMeta('_jf_gateways').apply(void 0, arguments)), withSelectMeta('_jf_actions').apply(void 0, arguments));
}))(PluginGateways));

/***/ }),

/***/ "./editor/plugins/manager.js":
/*!***********************************!*\
  !*** ./editor/plugins/manager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterPlugins)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./editor/plugins/actions/index.js");
/* harmony import */ var _arguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arguments */ "./editor/plugins/arguments/index.js");
/* harmony import */ var _captcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captcha */ "./editor/plugins/captcha/index.js");
/* harmony import */ var _gateways__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gateways */ "./editor/plugins/gateways/index.js");
/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preset */ "./editor/plugins/preset/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./editor/plugins/messages/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var applyFilters = wp.hooks.applyFilters;
var registerPlugin = wp.plugins.registerPlugin;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;

var withPluginProps = function withPluginProps(settings, base) {
  var PluginRender = settings.render;
  return function () {
    return wp.element.createElement(PluginDocumentSettingPanel, _extends({}, base, {
      key: "plugin-panel-".concat(base.name)
    }), wp.element.createElement(PluginRender, {
      key: "plugin-render-".concat(base.name)
    }));
  };
};

var registerJfbPlugin = function registerJfbPlugin(plugin) {
  var base = plugin.base,
      settings = plugin.settings;
  settings.render = withPluginProps(settings, base);
  registerPlugin(base.name, settings);
};

function RegisterPlugins() {
  var sortedPlugins = [];
  var jfbPlugins = applyFilters('jet.fb.register.plugins', [_arguments__WEBPACK_IMPORTED_MODULE_1__, _captcha__WEBPACK_IMPORTED_MODULE_2__, _gateways__WEBPACK_IMPORTED_MODULE_3__, _actions__WEBPACK_IMPORTED_MODULE_0__, _preset__WEBPACK_IMPORTED_MODULE_4__, _messages__WEBPACK_IMPORTED_MODULE_5__]);
  jfbPlugins.forEach(function (plugin) {
    var _plugin$base = plugin.base,
        name = _plugin$base.name,
        _plugin$base$conditio = _plugin$base.condition,
        condition = _plugin$base$conditio === void 0 ? true : _plugin$base$conditio;

    if (!condition) {
      return false;
    }

    var beforePlugin = applyFilters("jet.fb.register.plugin.".concat(name, ".before"), []);

    if (beforePlugin) {
      sortedPlugins.push.apply(sortedPlugins, _toConsumableArray(beforePlugin));
    }

    sortedPlugins.push(plugin);
    var afterPlugin = applyFilters("jet.fb.register.plugin.".concat(name, ".after"), []);

    if (afterPlugin) {
      sortedPlugins.push.apply(sortedPlugins, _toConsumableArray(afterPlugin));
    }
  });
  sortedPlugins.forEach(registerJfbPlugin);
}

/***/ }),

/***/ "./editor/plugins/messages/index.js":
/*!******************************************!*\
  !*** ./editor/plugins/messages/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/messages/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-messages-panel',
  title: __('General Messages Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/messages/render.js":
/*!*******************************************!*\
  !*** ./editor/plugins/messages/render.js ***!
  \*******************************************/
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

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var TextControl = wp.components.TextControl;

function PluginMessages() {
  var meta = wp.data.select('core/editor').getEditedPostAttribute('meta') || {};

  var _useDispatch = useDispatch('core/editor'),
      editPost = _useDispatch.editPost;

  var getDefaultMessagesValues = function getDefaultMessagesValues() {
    var defaults = {};
    Object.entries(JetFormEditorData.messagesDefault).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          type = _ref2[0],
          data = _ref2[1];

      defaults[type] = data.value;
    });
    return defaults;
  };

  var _useState = useState(function () {
    var metaMessages = JSON.parse(meta._jf_messages || '{}');
    return Tools.isEmptyObject(metaMessages) ? getDefaultMessagesValues() : metaMessages;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      messages = _useState2[0],
      setMessages = _useState2[1];

  useEffect(function () {
    editPost({
      meta: _objectSpread(_objectSpread({}, meta), {}, {
        _jf_messages: JSON.stringify(messages)
      })
    });
  });

  var onChangeMessage = function onChangeMessage(type, value) {
    setMessages(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, type, value));
    });
  };

  return wp.element.createElement(React.Fragment, null, Object.entries(messages).map(function (_ref3, id) {
    var _ref4 = _slicedToArray(_ref3, 2),
        type = _ref4[0],
        text = _ref4[1];

    return JetFormEditorData.messagesDefault[type] && wp.element.createElement(TextControl, {
      key: type + id,
      label: JetFormEditorData.messagesDefault[type].label,
      value: text,
      onChange: function onChange(newValue) {
        return onChangeMessage(type, newValue);
      }
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginMessages);

/***/ }),

/***/ "./editor/plugins/preset/index.js":
/*!****************************************!*\
  !*** ./editor/plugins/preset/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/preset/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-preset-panel',
  title: __('Preset Settings', 'jet-form-builder')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/preset/render.js":
/*!*****************************************!*\
  !*** ./editor/plugins/preset/render.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_presets_general_preset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/presets/general-preset */ "./editor/components/presets/general-preset.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBHooks = JetFBHooks,
    useMetaState = _JetFBHooks.useMetaState;
var _JetFBActions = JetFBActions,
    getAvailableFields = _JetFBActions.getAvailableFields;

function PluginPreset() {
  var ToggleControl = wp.components.ToggleControl;

  var _useMetaState = useMetaState('_jf_preset'),
      _useMetaState2 = _slicedToArray(_useMetaState, 2),
      args = _useMetaState2[0],
      setArgs = _useMetaState2[1];

  var formFields = args.enabled ? getAvailableFields([], 'preset') : [];
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'enable_preset',
    label: 'Enable',
    checked: args.enabled,
    help: 'Check this to enable global form preset',
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          enabled: newVal
        });
      });
    }
  }), args.enabled && wp.element.createElement(_components_presets_general_preset__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: '_jf_preset_general',
    value: args,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread(_objectSpread({}, prevArgs), newVal), {}, {
          enabled: prevArgs.enabled
        });
      });
    },
    availableFields: formFields
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginPreset);

/***/ }),

/***/ "../blocks-src/calculated-field/block.json":
/*!*************************************************!*\
  !*** ../blocks-src/calculated-field/block.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/calculated-field","category":"jet-form-builder-fields","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><path d=\\"M30.0333 40.0333H27.3667C26.9775 40.0333 26.6418 40.195 26.396 40.4408C26.1353 40.7015 26 41.0418 26 41.4V43.6C26 43.9557 26.1322 44.2795 26.3598 44.5325L26.395 44.5716L26.4342 44.6068C26.6871 44.8345 27.011 44.9667 27.3667 44.9667H30.0333V47.6333C30.0333 47.9915 30.1686 48.3318 30.4293 48.5925C30.6751 48.8383 31.0109 49 31.4 49H33.6C33.9754 49 34.3116 48.8484 34.5595 48.5928C34.8151 48.3449 34.9667 48.0087 34.9667 47.6333V44.9667H37.6333C37.9915 44.9667 38.3318 44.8314 38.5925 44.5707C38.8383 44.3249 39 43.9891 39 43.6V41.4C39 41.0246 38.8484 40.6884 38.5928 40.4405C38.3449 40.1849 38.0087 40.0333 37.6333 40.0333H34.9667V37.3667C34.9667 36.9913 34.8151 36.6551 34.5595 36.4072C34.3116 36.1516 33.9754 36 33.6 36H31.4C31.0109 36 30.6751 36.1617 30.4294 36.4075L31.1365 37.1146L30.4294 36.4075C30.1686 36.6682 30.0333 37.0085 30.0333 37.3667V40.0333Z\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M52.0688 45.9949L52.0688 45.9949L52.0743 46.0003C52.4373 46.3595 52.6155 46.7809 52.6155 47.3289C52.6155 48.0345 52.3912 48.4956 51.9978 48.833C51.5866 49.1856 50.9592 49.4211 49.9936 49.4211C49.0383 49.4211 48.4404 49.1544 48.0492 48.7441C47.6528 48.3284 47.3845 47.6705 47.3845 46.6184V45.6184H46.3845H44H43V46.6184C43 48.53 43.4997 50.1667 44.6052 51.4134L44.6051 51.4135L44.6112 51.4202C45.528 52.4355 46.7156 53.0671 48.1171 53.3503V55V56H49.1171H51.0247H52.0247V55V53.3438C53.3759 53.0668 54.5232 52.4931 55.4047 51.5761C56.4928 50.4535 57 48.9947 57 47.3026C57 46.2477 56.8 45.2769 56.3652 44.4197C55.9365 43.5574 55.2757 42.8331 54.4266 42.2374C53.5819 41.63 52.4558 41.1146 51.0945 40.6692C49.8425 40.2485 49.0609 39.8226 48.6377 39.4384C48.3044 39.1212 48.1063 38.6866 48.1063 38.0263C48.1063 37.2533 48.3177 36.7877 48.6213 36.4875L48.6214 36.4876L48.6271 36.4818C48.9248 36.1827 49.4162 35.9605 50.2642 35.9605C50.9576 35.9605 51.4386 36.1996 51.8128 36.6729C52.2087 37.1735 52.4608 37.9134 52.4608 39V40H53.4608H55.8324H56.8324V39C56.8324 37.0613 56.3974 35.4023 55.4108 34.1368C54.607 33.0966 53.5388 32.4155 52.2567 32.0765V30V29H51.2567H49.3362H48.3362V30V32.0453C47.0883 32.342 46.0271 32.9372 45.2014 33.8592L45.2014 33.8591L45.1979 33.863C44.1926 34.9973 43.7218 36.4265 43.7218 38.0658C43.7218 39.6897 44.2078 41.1066 45.2306 42.2368L45.2306 42.2368L45.2373 42.2441C46.244 43.3347 47.7621 44.1442 49.6705 44.7402C50.9292 45.1697 51.6832 45.6073 52.0688 45.9949Z\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","keywords":["jetformbuilder","field","calculated"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"attributes":{"separate_decimals":{"type":"string","default":"."},"separate_thousands":{"type":"string","default":""},"calc_formula":{"type":"string","default":""},"precision":{"type":"number","default":2},"calc_prefix":{"type":"string","default":""},"calc_suffix":{"type":"string","default":""},"calc_hidden":{"type":"boolean","default":false},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/checkbox-field/block.json":
/*!***********************************************!*\
  !*** ../blocks-src/checkbox-field/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/checkbox-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","checkbox"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"6\\" width=\\"62\\" height=\\"52\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"7\\" y=\\"36\\" width=\\"16\\" height=\\"16\\" rx=\\"3\\" fill=\\"#6F8BFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"28\\" y=\\"41\\" width=\\"30\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M28 46C28 45.4477 28.4477 45 29 45H48C48.5523 45 49 45.4477 49 46C49 46.5523 48.5523 47 48 47H29C28.4477 47 28 46.5523 28 46Z\\" fill=\\"#162B40\\"/><rect x=\\"28\\" y=\\"17\\" width=\\"30\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M28 22C28 21.4477 28.4477 21 29 21H48C48.5523 21 49 21.4477 49 22C49 22.5523 48.5523 23 48 23H29C28.4477 23 28 22.5523 28 22Z\\" fill=\\"#162B40\\"/><path d=\\"M11 44L14 47L19 41\\" stroke=\\"#162B40\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><rect x=\\"7\\" y=\\"12\\" width=\\"16\\" height=\\"16\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"custom_item_template":{"type":"boolean","default":false},"custom_item_template_id":{"type":"string","default":""},"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/color-picker-field/block.json":
/*!***************************************************!*\
  !*** ../blocks-src/color-picker-field/block.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/color-picker-field","category":"jet-form-builder-fields","icon":"<svg width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 32 32\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M16.9677 21H2.875C1.83947 21 1 20.186 1 19.1818V7.81818C1 6.81403 1.83947 6 2.875 6H29.125C30.1605 6 31 6.81403 31 7.81818V19.1818C31 20.186 30.1605 21 29.125 21H24\\" stroke=\\"#162B40\\" fill=\\"white\\"/><rect x=\\"16.5\\" y=\\"17.5\\" width=\\"7\\" height=\\"7\\" rx=\\"0.5\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\"/><path d=\\"M21 21V19.4032L24.8065 15.3065L26.5 17L22.6935 21H21Z\\" fill=\\"#4AF3BA\\"/><path d=\\"M28.8544 14.3161L27.6845 13.1462C27.4895 12.9513 27.1745 12.9513 26.9795 13.1462L25.4196 14.706L24.705 14.0011C24.705 14.0011 24.3147 13.8911 24.1022 14.1036C23.8897 14.3161 24 14.706 24 14.706L24.4597 15.1659L20 19.6253V22H22.3748L26.8345 17.5406L27.294 18C27.294 18 27.4989 18.2961 27.8969 17.8981C28.295 17.5 27.9989 17.2951 27.9989 17.2951L27.2895 16.5858L28.8494 15.026C29.0494 14.826 29.0494 14.511 28.8544 14.3161ZM21.9599 21.0001L20.9999 20.0403L25.0296 16.0108L25.9896 16.9707L21.9599 21.0001Z\\" fill=\\"#162B40\\"/></svg>","keywords":["jetformbuilder","field","colorpicker","picker","input"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"attributes":{"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/conditional-block/block.json":
/*!**************************************************!*\
  !*** ../blocks-src/conditional-block/block.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/conditional-block","category":"jet-form-builder-fields","keywords":["jetformbuilder","block","conditonal"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect x=\\"1\\" y=\\"12\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" fill=\\"#ffffff\\" stroke=\\"#0F172A\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><rect x=\\"1\\" y=\\"34\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" fill=\\"#4AF3BA\\" stroke=\\"#0F172A\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><rect x=\\"45\\" y=\\"12\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" fill=\\"#4AF3BA\\" stroke=\\"#0F172A\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><rect x=\\"45\\" y=\\"34\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" fill=\\"#ffffff\\" stroke=\\"#0F172A\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M40 17L44 21L40 25V22H36.7004L28.9398 43.3417C28.7961 43.7369 28.4205 44 28 44H19V42H27.2996L35.0602 20.6583C35.2039 20.2631 35.5795 20 36 20H40V17Z\\" fill=\\"#0F172A\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M30.9359 26.1477L28.9398 20.6583C28.7961 20.2631 28.4205 20 28 20H19V22H27.2996L29.8719 29.0739L30.9359 26.1477ZM33.0641 37.8524L35.0602 43.3417C35.2039 43.7369 35.5795 44 36 44H40V47L44 43L40 39V42H36.7004L34.1281 34.9262L33.0641 37.8524Z\\" fill=\\"#0F172A\\"/></svg>","attributes":{"name":{"type":"string","default":""},"last_page_name":{"type":"string","default":""},"conditions":{"type":"array","default":[]},"className":{"type":"string","default":""}},"providesContext":{"jet-forms/conditional-block--name":"name","jet-forms/conditional-block--last_page_name":"last_page_name"}}');

/***/ }),

/***/ "../blocks-src/date-field/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/date-field/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/date-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","date"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"15\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"31\\" y=\\"32.2\\" width=\\"26\\" height=\\"28.8\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M31 35.2C31 33.5431 32.3431 32.2 34 32.2H54C55.6569 32.2 57 33.5431 57 35.2V43.4H31V35.2Z\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M36.4615 30C36.4615 29.4477 36.9092 29 37.4615 29H37.6154C38.1676 29 38.6154 29.4477 38.6154 30V34.6C38.6154 35.1523 38.1676 35.6 37.6154 35.6H37.4615C36.9092 35.6 36.4615 35.1523 36.4615 34.6V30Z\\" fill=\\"#162B40\\"/><path d=\\"M49.3846 30C49.3846 29.4477 49.8323 29 50.3846 29H50.5384C51.0907 29 51.5384 29.4477 51.5384 30V34.6C51.5384 35.1523 51.0907 35.6 50.5384 35.6H50.3846C49.8323 35.6 49.3846 35.1523 49.3846 34.6V30Z\\" fill=\\"#162B40\\"/></svg>","attributes":{"is_timestamp":{"type":"boolean","default":false},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/datetime-field/block.json":
/*!***********************************************!*\
  !*** ../blocks-src/datetime-field/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/datetime-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","date"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M14 34C12.8954 34 12 34.8954 12 36V41H29V36C29 34.8954 28.1046 34 27 34H14ZM50.391 38.9385C50.7931 39.9091 51 40.9494 51 42H43V34C44.0506 34 45.0909 34.2069 46.0615 34.609C47.0321 35.011 47.914 35.6003 48.6569 36.3431C49.3997 37.086 49.989 37.9679 50.391 38.9385Z\\" fill=\\"#4AF3BA\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 14H4C2.89453 14 2 14.8955 2 16V41C2 42.1045 2.89453 43 4 43H12V41V36C12 34.8955 12.8945 34 14 34H16V33C16 32.4478 16.4473 32 17 32C17.5527 32 18 32.4478 18 33V34H23V33C23 32.4478 23.4473 32 24 32C24.1172 32 24.2305 32.02 24.334 32.0566C24.4453 32.0959 24.5469 32.1543 24.6348 32.2278C24.8574 32.4111 25 32.689 25 33V34H27C28.1055 34 29 34.8955 29 36V41V43H32H33.0494C33.0167 42.6711 33 42.3375 33 42C33 36.4771 37.4766 32 43 32C48.5234 32 53 36.4771 53 42C53 42.3375 52.9833 42.6711 52.9506 43H52.9512H54H60C61.1055 43 62 42.1045 62 41V16C62 14.8955 61.1055 14 60 14ZM54 45H52.543H52.5423C51.2681 49.0572 47.4781 52 43 52C38.5219 52 34.7312 49.0572 33.457 45H32H29V50C29 51.1045 28.1055 52 27 52H14C12.8945 52 12 51.1045 12 50V45H4C1.79102 45 0 43.2092 0 41V16C0 13.7908 1.79102 12 4 12H60C62.209 12 64 13.7908 64 16V41C64 43.2092 62.209 45 60 45H54ZM50.9375 43C50.4453 46.9463 47.0801 50 43 50C38.582 50 35 46.4182 35 42C35 37.9204 38.0527 34.554 42 34.062V41V42V43H50.9375ZM50.9375 41H44V34.062C47.6191 34.5132 50.4863 37.3813 50.9375 41ZM24 37C23.4473 37 23 36.5522 23 36H18C18 36.5522 17.5527 37 17 37C16.4473 37 16 36.5522 16 36H14V39H27V36H25C25 36.2761 24.8867 36.5261 24.7051 36.7073C24.5254 36.8882 24.2754 37 24 37ZM14 41H27V50H14V41Z\\" fill=\\"#0F172A\\"/></svg>","attributes":{"is_timestamp":{"type":"boolean","default":false},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/form-break-field/block.json":
/*!*************************************************!*\
  !*** ../blocks-src/form-break-field/block.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/form-break-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","block","break","pagebreak","formbreak"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"29\\" y=\\"1\\" width=\\"34\\" height=\\"34\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"22\\" width=\\"41\\" height=\\"41\\" rx=\\"3\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M23.3721 49H20.832V39.209L17.7998 40.1494V38.084L23.0996 36.1855H23.3721V49Z\\" fill=\\"#162B40\\"/><path d=\\"M50.9795 23H44.1572V21.6465L47.377 18.2148C47.819 17.7318 48.1449 17.3102 48.3545 16.9502C48.5687 16.5902 48.6758 16.2484 48.6758 15.9248C48.6758 15.4827 48.5641 15.1364 48.3408 14.8857C48.1175 14.6305 47.7985 14.5029 47.3838 14.5029C46.9372 14.5029 46.584 14.6579 46.3242 14.9678C46.069 15.2731 45.9414 15.6764 45.9414 16.1777H43.959C43.959 15.5716 44.1025 15.0179 44.3896 14.5166C44.6813 14.0153 45.0915 13.6234 45.6201 13.3408C46.1488 13.0537 46.748 12.9102 47.418 12.9102C48.4434 12.9102 49.2386 13.1562 49.8037 13.6484C50.3734 14.1406 50.6582 14.8356 50.6582 15.7334C50.6582 16.2256 50.5306 16.7269 50.2754 17.2373C50.0202 17.7477 49.5827 18.3424 48.9629 19.0215L46.7002 21.4072H50.9795V23Z\\" fill=\\"#162B40\\"/></svg>","attributes":{"add_next_button":{"type":"boolean","default":true},"page_break_disabled":{"type":"string","default":""},"label_progress":{"type":"string","default":""},"label":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"class_name":{"type":"string","default":""}},"usesContext":["jet-forms/conditional-block--name"]}');

/***/ }),

/***/ "../blocks-src/group-break-field/block.json":
/*!**************************************************!*\
  !*** ../blocks-src/group-break-field/block.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/group-break-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","block","conditonal"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"1\\" width=\\"62\\" height=\\"24\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"39\\" width=\\"62\\" height=\\"24\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"30\\" width=\\"62\\" height=\\"4\\" rx=\\"2\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"visibility":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/heading-field/block.json":
/*!**********************************************!*\
  !*** ../blocks-src/heading-field/block.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/heading-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","heading"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><path d=\\"M40.7126 54.5332C41.6699 54.5332 42.446 53.7572 42.446 52.7999V30.2825C42.446 29.3252 41.6699 28.5492 40.7126 28.5492H38.0411C37.0838 28.5492 36.3077 29.3252 36.3077 30.2825V38.5315H27.617V30.2825C27.617 29.3252 26.841 28.5492 25.8836 28.5492H23.1957C22.2383 28.5492 21.4623 29.3252 21.4623 30.2825V52.7999C21.4623 53.7572 22.2383 54.5332 23.1957 54.5332H25.8836C26.841 54.5332 27.617 53.7572 27.617 52.7999V43.8755H36.3077V52.7999C36.3077 53.7572 37.0838 54.5332 38.0411 54.5332H40.7126ZM55.8044 54.5332C56.7617 54.5332 57.5378 53.7572 57.5378 52.7999V29.8987C57.5378 29.1079 56.8967 28.4668 56.1058 28.4668C55.9366 28.4668 55.7688 28.4968 55.61 28.5554L46.8342 31.7945C46.1533 32.0458 45.701 32.6948 45.701 33.4206V35.2598C45.701 36.4491 46.8714 37.2852 47.9965 36.8995L51.5637 35.6767V52.7999C51.5637 53.7572 52.3397 54.5332 53.297 54.5332H55.8044Z\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"label":{"type":"string","default":""},"desc":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/hidden-field/block.json":
/*!*********************************************!*\
  !*** ../blocks-src/hidden-field/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/hidden-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","hidden"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M4 16H60C61.1046 16 62 16.8954 62 18V38C62 39.1046 61.1046 40 60 40H57V42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H28V40H4C2.89543 40 2 39.1046 2 38V18C2 16.8954 2.89543 16 4 16Z\\" fill=\\"#162B40\\"/><path d=\\"M42.5 32.5C36.9592 32.5 31.9346 35.5314 28.2269 40.4552C27.9244 40.8586 27.9244 41.4222 28.2269 41.8256C31.9346 46.7553 36.9592 49.7867 42.5 49.7867C48.0408 49.7867 53.0654 46.7553 56.7731 41.8315C57.0756 41.4281 57.0756 40.8645 56.7731 40.4611C53.0654 35.5314 48.0408 32.5 42.5 32.5ZM42.8975 47.2299C39.2194 47.4612 36.1821 44.4298 36.4135 40.7459C36.6033 37.7086 39.0652 35.2466 42.1025 35.0568C45.7806 34.8255 48.8179 37.8569 48.5865 41.5408C48.3908 44.5722 45.9289 47.0341 42.8975 47.2299Z\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"54.0909\\" y=\\"27.5858\\" width=\\"3.5\\" height=\\"34.7076\\" rx=\\"1.75\\" transform=\\"rotate(44.914 54.0909 27.5858)\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"field_value":{"type":"string","default":"post_id"},"hidden_value_field":{"type":"string","default":""},"query_var_key":{"type":"string","default":""},"date_format":{"type":"string","default":""},"hidden_value":{"type":"string","default":""},"name":{"type":"string","default":"hidden_field_name"},"default":{"type":"string","default":""},"class_name":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/media-field/block.json":
/*!********************************************!*\
  !*** ../blocks-src/media-field/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/media-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","media","image","file"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><rect x=\\"22.9474\\" y=\\"27.9474\\" width=\\"34.1053\\" height=\\"27.1822\\" rx=\\"1.82186\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"1.89474\\"/><path d=\\"M34.4615 46.3847L36.9393 43.8672L39.417 46.3847L42.8239 42.9231L46.2308 46.3847\\" stroke=\\"#162B40\\" stroke-width=\\"1.38462\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><circle cx=\\"39.6538\\" cy=\\"38.4231\\" r=\\"1.73077\\" stroke=\\"#162B40\\" stroke-width=\\"1.38462\\"/></svg>","attributes":{"allowed_user_cap":{"type":"string","default":""},"insert_attachment":{"type":"boolean","default":false},"value_format":{"type":"string","default":""},"max_files":{"type":"number","default":null},"max_size":{"type":"number","default":null},"allowed_mimes":{"type":"array","default":[]},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/number-field/block.json":
/*!*********************************************!*\
  !*** ../blocks-src/number-field/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/number-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","media","image","file"],"textdomain":"jet-form-builder","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"15\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" stroke=\\"#162B40\\" fill=\\"white\\" stroke-width=\\"2\\"/><path d=\\"M44 16H60C61.1046 16 62 16.8954 62 18V38C62 39.1046 61.1046 40 60 40H44V16Z\\" fill=\\"#4EFEC3\\"/><path d=\\"M53.59 20.2409C53.2263 19.8772 52.6817 19.9692 52.318 20.333C51.9542 20.6967 51.9091 21.1944 52.2728 21.5581L55.41 24.6953C55.7737 25.0591 56.3635 25.0591 56.7272 24.6953C57.0909 24.3316 57.0909 23.7419 56.7272 23.3781L53.59 20.2409Z\\" fill=\\"#162B40\\"/><path d=\\"M52.41 20.2409C52.7737 19.8772 53.2949 19.9458 53.6586 20.3095C54.0223 20.6733 54.0909 21.1944 53.7272 21.5581L50.59 24.6953C50.2263 25.0591 49.6365 25.0591 49.2728 24.6953C48.9091 24.3316 48.9091 23.7419 49.2728 23.3781L52.41 20.2409Z\\" fill=\\"#162B40\\"/><path d=\\"M53.59 35.7272C53.2263 36.091 52.7094 36.0266 52.3456 35.6628C51.9819 35.2991 51.9091 34.7738 52.2728 34.41L55.41 31.2728C55.7737 30.9091 56.3635 30.9091 56.7272 31.2728C57.0909 31.6366 57.0909 32.2263 56.7272 32.59L53.59 35.7272Z\\" fill=\\"#162B40\\"/><path d=\\"M52.41 35.7272C52.7737 36.091 53.2906 36.0266 53.6544 35.6629C54.0181 35.2991 54.0909 34.7738 53.7272 34.41L50.59 31.2728C50.2263 30.9091 49.6365 30.9091 49.2728 31.2728C48.9091 31.6366 48.9091 32.2263 49.2728 32.59L52.41 35.7272Z\\" fill=\\"#162B40\\"/><path d=\\"M13.002 29.2539H14.1299V30.8467H13.002V33H11.0264V30.8467H6.94531L6.85645 29.6025L11.0059 23.0469H13.002V29.2539ZM8.8252 29.2539H11.0264V25.7402L10.8965 25.9658L8.8252 29.2539Z\\" fill=\\"#162B40\\"/><path d=\\"M43 16V40.5\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","supports":{"customClassName":false,"html":false},"attributes":{"min":{"type":"number","default":""},"max":{"type":"number","default":""},"step":{"type":"number","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/progress-bar/block.json":
/*!*********************************************!*\
  !*** ../blocks-src/progress-bar/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/progress-bar","category":"jet-form-builder-fields","keywords":["jetformbuilder","progress","steps","bar","break","form"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 32 32\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<rect x=\\"10.463\\" y=\\"7.46296\\" width=\\"11.0741\\" height=\\"11.0741\\" rx=\\"0.537037\\" fill=\\"#4AF3BA\\" stroke=\\"#0F172A\\" stroke-width=\\"0.925926\\"/>\\n<rect x=\\"14.5\\" y=\\"21\\" width=\\"3\\" height=\\"3\\" rx=\\"0.5\\" fill=\\"#4AF3BA\\" stroke=\\"#0F172A\\"/>\\n<rect x=\\"2.5\\" y=\\"21\\" width=\\"3\\" height=\\"3\\" rx=\\"0.5\\" fill=\\"white\\" stroke=\\"#0F172A\\"/>\\n<rect x=\\"26.5\\" y=\\"21\\" width=\\"3\\" height=\\"3\\" rx=\\"0.5\\" fill=\\"white\\" stroke=\\"#0F172A\\"/>\\n<rect x=\\"0.5\\" y=\\"11.5\\" width=\\"7\\" height=\\"7\\" rx=\\"0.5\\" fill=\\"white\\" stroke=\\"#0F172A\\"/>\\n<rect x=\\"24.5\\" y=\\"11.5\\" width=\\"7\\" height=\\"7\\" rx=\\"0.5\\" fill=\\"white\\" stroke=\\"#0F172A\\"/>\\n<path d=\\"M18 16H14.113V15.1951L15.9474 13.1545C16.1993 12.8672 16.3849 12.6165 16.5044 12.4024C16.6264 12.1883 16.6874 11.9851 16.6874 11.7927C16.6874 11.5298 16.6238 11.3238 16.4966 11.1748C16.3694 11.023 16.1876 10.9472 15.9513 10.9472C15.6969 10.9472 15.4956 11.0393 15.3476 11.2236C15.2022 11.4051 15.1295 11.645 15.1295 11.9431H14C14 11.5827 14.0818 11.2534 14.2454 10.9553C14.4116 10.6572 14.6452 10.4241 14.9464 10.2561C15.2476 10.0854 15.5891 10 15.9708 10C16.555 10 17.0081 10.1463 17.3301 10.439C17.6547 10.7317 17.8169 11.145 17.8169 11.6789C17.8169 11.9715 17.7442 12.2696 17.5988 12.5732C17.4534 12.8767 17.2042 13.2304 16.851 13.6341L15.5618 15.0528H18V16Z\\" fill=\\"#0F172A\\"/>\\n<path d=\\"M4.23828 16.8477H3.67383V14.6719L3 14.8809V14.4219L4.17773 14H4.23828V16.8477Z\\" fill=\\"#0F172A\\"/>\\n<path d=\\"M27.6426 15.2109H27.9434C28.0866 15.2109 28.1927 15.1751 28.2617 15.1035C28.3307 15.0319 28.3652 14.9368 28.3652 14.8184C28.3652 14.7038 28.3307 14.6146 28.2617 14.5508C28.194 14.487 28.1003 14.4551 27.9805 14.4551C27.8724 14.4551 27.7819 14.485 27.709 14.5449C27.6361 14.6035 27.5996 14.6803 27.5996 14.7754H27.0352C27.0352 14.627 27.0749 14.4941 27.1543 14.377C27.235 14.2585 27.347 14.166 27.4902 14.0996C27.6348 14.0332 27.7936 14 27.9668 14C28.2676 14 28.5033 14.0723 28.6738 14.2168C28.8444 14.36 28.9297 14.5579 28.9297 14.8105C28.9297 14.9408 28.89 15.0605 28.8105 15.1699C28.7311 15.2793 28.627 15.3633 28.498 15.4219C28.6582 15.4792 28.7773 15.5651 28.8555 15.6797C28.9349 15.7943 28.9746 15.9297 28.9746 16.0859C28.9746 16.3385 28.8822 16.541 28.6973 16.6934C28.5137 16.8457 28.2702 16.9219 27.9668 16.9219C27.6829 16.9219 27.4505 16.847 27.2695 16.6973C27.0898 16.5475 27 16.3496 27 16.1035H27.5645C27.5645 16.2103 27.6042 16.2975 27.6836 16.3652C27.7643 16.4329 27.8633 16.4668 27.9805 16.4668C28.1146 16.4668 28.2194 16.4316 28.2949 16.3613C28.3717 16.2897 28.4102 16.1953 28.4102 16.0781C28.4102 15.7943 28.2539 15.6523 27.9414 15.6523H27.6426V15.2109Z\\" fill=\\"#0F172A\\"/>\\n<rect x=\\"7\\" y=\\"22\\" width=\\"6\\" height=\\"1\\" rx=\\"0.5\\" fill=\\"#0F172A\\"/>\\n<rect x=\\"19\\" y=\\"22\\" width=\\"6\\" height=\\"1\\" rx=\\"0.5\\" fill=\\"#0F172A\\"/>\\n</svg>","attributes":{"progress_type":{"type":"string","default":"default"},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/conditional-block--name","jet-forms/conditional-block--last_page_name"]}');

/***/ }),

/***/ "../blocks-src/radio-field/block.json":
/*!********************************************!*\
  !*** ../blocks-src/radio-field/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/radio-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","radio"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"6\\" width=\\"62\\" height=\\"52\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"7\\" y=\\"36\\" width=\\"16\\" height=\\"16\\" rx=\\"8\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"28\\" y=\\"41\\" width=\\"30\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M28 46C28 45.4477 28.4477 45 29 45H48C48.5523 45 49 45.4477 49 46C49 46.5523 48.5523 47 48 47H29C28.4477 47 28 46.5523 28 46Z\\" fill=\\"#162B40\\"/><rect x=\\"28\\" y=\\"17\\" width=\\"30\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M28 22C28 21.4477 28.4477 21 29 21H48C48.5523 21 49 21.4477 49 22C49 22.5523 48.5523 23 48 23H29C28.4477 23 28 22.5523 28 22Z\\" fill=\\"#162B40\\"/><rect x=\\"7\\" y=\\"12\\" width=\\"16\\" height=\\"16\\" rx=\\"8\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><circle cx=\\"15\\" cy=\\"20\\" r=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"custom_item_template":{"type":"boolean","default":false},"custom_item_template_id":{"type":"string","default":""},"switch_on_change":{"type":"boolean","default":false},"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/range-field/block.json":
/*!********************************************!*\
  !*** ../blocks-src/range-field/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/range-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","range"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><rect x=\\"12\\" y=\\"28\\" width=\\"43\\" height=\\"2\\" fill=\\"#162B40\\"/><circle cx=\\"12\\" cy=\\"29\\" r=\\"5\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><circle cx=\\"55\\" cy=\\"29\\" r=\\"2\\" fill=\\"#162B40\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><circle cx=\\"37\\" cy=\\"29\\" r=\\"5\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"min":{"type":"number","default":""},"max":{"type":"number","default":""},"step":{"type":"number","default":""},"prefix":{"type":"string","default":""},"suffix":{"type":"string","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/repeater-field/block.json":
/*!***********************************************!*\
  !*** ../blocks-src/repeater-field/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/repeater-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","range"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"2\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M11.9561 20H9.98047V12.3848L7.62207 13.1162V11.5098L11.7441 10.0332H11.9561V20Z\\" fill=\\"#162B40\\"/><path d=\\"M20 3H60C61.1046 3 62 3.89543 62 5V25C62 26.1046 61.1046 27 60 27H20V3Z\\" fill=\\"white\\"/><path d=\\"M19.5 2V27.5\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"35\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M13.9795 53H7.15723V51.6465L10.377 48.2148C10.819 47.7318 11.1449 47.3102 11.3545 46.9502C11.5687 46.5902 11.6758 46.2484 11.6758 45.9248C11.6758 45.4827 11.5641 45.1364 11.3408 44.8857C11.1175 44.6305 10.7985 44.5029 10.3838 44.5029C9.93717 44.5029 9.58398 44.6579 9.32422 44.9678C9.06901 45.2731 8.94141 45.6764 8.94141 46.1777H6.95898C6.95898 45.5716 7.10254 45.0179 7.38965 44.5166C7.68132 44.0153 8.09147 43.6234 8.62012 43.3408C9.14876 43.0537 9.74805 42.9102 10.418 42.9102C11.4434 42.9102 12.2386 43.1562 12.8037 43.6484C13.3734 44.1406 13.6582 44.8356 13.6582 45.7334C13.6582 46.2256 13.5306 46.7269 13.2754 47.2373C13.0202 47.7477 12.5827 48.3424 11.9629 49.0215L9.7002 51.4072H13.9795V53Z\\" fill=\\"#162B40\\"/><path d=\\"M20 36H60C61.1046 36 62 36.8954 62 38V58C62 59.1046 61.1046 60 60 60H20V36Z\\" fill=\\"white\\"/><path d=\\"M19.5 35V60.5\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"calc_formula":{"type":"string","default":""},"manage_items_count":{"type":"string","default":"manually"},"new_item_label":{"type":"string","default":""},"manage_items_count_field":{"type":"string","default":""},"repeater_calc_type":{"type":"string","default":"default"},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"providesContext":{"jet-forms/repeater-field--name":"name"}}');

/***/ }),

/***/ "../blocks-src/select-field/block.json":
/*!*********************************************!*\
  !*** ../blocks-src/select-field/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/select-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","select"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"3\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"42\\" y=\\"8\\" width=\\"16\\" height=\\"16\\" rx=\\"3\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M48 15L50 17L52 15\\" stroke=\\"#162B40\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\"/><rect x=\\"1\\" y=\\"36\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"42\\" y=\\"41\\" width=\\"16\\" height=\\"16\\" rx=\\"3\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M48 48L50 50L52 48\\" stroke=\\"#162B40\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\"/></svg>","attributes":{"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"switch_on_change":{"type":"boolean","default":false},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/submit-field/block.json":
/*!*********************************************!*\
  !*** ../blocks-src/submit-field/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/submit-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","submit","break","next","prev","action","button"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 32 32\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<mask id=\\"path-1-inside-1_307_443\\" fill=\\"white\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M2 7C0.895431 7 0 7.89543 0 9V19C0 20.1046 0.895431 21 2 21H21.4174L21.0075 19.2921C20.9975 19.2521 20.9975 19.2122 21.0075 19.1722C21.0225 19.1323 21.0424 19.0974 21.0674 19.0674C21.0974 19.0374 21.1323 19.0175 21.1722 19.0075C21.2122 18.9975 21.2521 18.9975 21.2921 19.0075L27.2828 20.4453C27.3328 20.4553 27.3752 20.4802 27.4101 20.5202C27.4451 20.5601 27.4651 20.605 27.47 20.655C27.475 20.7049 27.4651 20.7523 27.4401 20.7972C27.4151 20.8422 27.3777 20.8746 27.3278 20.8946L27.096 21H30C31.1046 21 32 20.1046 32 19V9C32 7.89543 31.1046 7 30 7H2Z\\"/>\\n</mask>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M2 7C0.895431 7 0 7.89543 0 9V19C0 20.1046 0.895431 21 2 21H21.4174L21.0075 19.2921C20.9975 19.2521 20.9975 19.2122 21.0075 19.1722C21.0225 19.1323 21.0424 19.0974 21.0674 19.0674C21.0974 19.0374 21.1323 19.0175 21.1722 19.0075C21.2122 18.9975 21.2521 18.9975 21.2921 19.0075L27.2828 20.4453C27.3328 20.4553 27.3752 20.4802 27.4101 20.5202C27.4451 20.5601 27.4651 20.605 27.47 20.655C27.475 20.7049 27.4651 20.7523 27.4401 20.7972C27.4151 20.8422 27.3777 20.8746 27.3278 20.8946L27.096 21H30C31.1046 21 32 20.1046 32 19V9C32 7.89543 31.1046 7 30 7H2Z\\" fill=\\"white\\"/>\\n<path d=\\"M21.4174 21V22H22.6858L22.3898 20.7666L21.4174 21ZM21.0075 19.2921L21.9799 19.0587L21.9776 19.0495L21.0075 19.2921ZM21.0075 19.1722L20.0712 18.8211L20.0512 18.8744L20.0373 18.9297L21.0075 19.1722ZM21.0674 19.0674L20.3603 18.3603L20.3282 18.3924L20.2992 18.4272L21.0674 19.0674ZM21.1722 19.0075L20.9297 18.0373L20.9297 18.0373L21.1722 19.0075ZM21.2921 19.0075L21.0495 19.9777L21.0587 19.9799L21.2921 19.0075ZM27.2828 20.4453L27.0495 21.4177L27.068 21.4221L27.0867 21.4259L27.2828 20.4453ZM27.4101 20.5202L26.6575 21.1786L26.6576 21.1787L27.4101 20.5202ZM27.47 20.655L28.4651 20.5555L28.4651 20.5554L27.47 20.655ZM27.4401 20.7972L28.3142 21.2829L28.3143 21.2829L27.4401 20.7972ZM27.3278 20.8946L26.9564 19.9661L26.9348 19.9747L26.9137 19.9843L27.3278 20.8946ZM27.096 21L26.682 20.0897L27.096 22V21ZM1 9C1 8.44772 1.44772 8 2 8V6C0.343146 6 -1 7.34315 -1 9H1ZM1 19V9H-1V19H1ZM2 20C1.44772 20 1 19.5523 1 19H-1C-1 20.6569 0.343146 22 2 22V20ZM21.4174 20H2V22H21.4174V20ZM20.0351 19.5254L20.445 21.2334L22.3898 20.7666L21.9799 19.0587L20.0351 19.5254ZM20.0373 18.9297C19.9876 19.1289 19.9876 19.3354 20.0373 19.5346L21.9776 19.0495C22.0075 19.1688 22.0075 19.2955 21.9776 19.4148L20.0373 18.9297ZM20.2992 18.4272C20.1959 18.5511 20.1219 18.6859 20.0712 18.8211L21.9438 19.5233C21.9231 19.5787 21.889 19.6436 21.8356 19.7076L20.2992 18.4272ZM20.9297 18.0373C20.7086 18.0926 20.5145 18.2061 20.3603 18.3603L21.7745 19.7745C21.6802 19.8688 21.5559 19.9423 21.4148 19.9776L20.9297 18.0373ZM21.5346 18.0373C21.3354 17.9876 21.1289 17.9876 20.9297 18.0373L21.4148 19.9776C21.2955 20.0075 21.1688 20.0075 21.0495 19.9776L21.5346 18.0373ZM27.5162 19.4729L21.5254 18.0351L21.0587 19.9799L27.0495 21.4177L27.5162 19.4729ZM28.1627 19.8617C27.9894 19.6636 27.7544 19.5198 27.4789 19.4647L27.0867 21.4259C26.9111 21.3907 26.761 21.2969 26.6575 21.1786L28.1627 19.8617ZM28.4651 20.5554C28.4382 20.2862 28.3263 20.0486 28.1627 19.8616L26.6576 21.1787C26.5639 21.0716 26.492 20.9239 26.475 20.7545L28.4651 20.5554ZM28.3143 21.2829C28.4356 21.0644 28.4909 20.8134 28.4651 20.5555L26.475 20.7544C26.4592 20.5963 26.4945 20.4402 26.5659 20.3116L28.3143 21.2829ZM27.6992 21.8231C27.952 21.7219 28.1722 21.5386 28.3142 21.2829L26.5659 20.3116C26.6581 20.1457 26.8034 20.0273 26.9564 19.9661L27.6992 21.8231ZM27.51 21.9103L27.7418 21.8049L26.9137 19.9843L26.682 20.0897L27.51 21.9103ZM30 20H27.096V22H30V20ZM31 19C31 19.5523 30.5523 20 30 20V22C31.6569 22 33 20.6569 33 19H31ZM31 9V19H33V9H31ZM30 8C30.5523 8 31 8.44772 31 9H33C33 7.34315 31.6569 6 30 6V8ZM2 8H30V6H2V8Z\\" fill=\\"#0F172A\\" mask=\\"url(#path-1-inside-1_307_443)\\"/>\\n<path d=\\"M27.2169 25.9136L27.228 25.9093L27.2388 25.9045C27.3815 25.841 27.5102 25.7546 27.624 25.6484L27.6334 25.6396L27.6423 25.6303C27.8755 25.3892 28 25.088 28 24.7512C28 24.4143 27.8755 24.1131 27.6423 23.872L27.6424 23.8719L27.6358 23.8653L25.8711 22.1064L27.527 21.3533C27.6725 21.2918 27.7961 21.1859 27.8772 21.0401C27.9503 20.9084 27.983 20.7591 27.9676 20.6052C27.9516 20.4456 27.8857 20.3043 27.7864 20.1909C27.6848 20.0748 27.5503 19.9917 27.3928 19.9575L21.4104 18.5217C21.2918 18.4925 21.1696 18.4928 21.051 18.5224C20.9205 18.555 20.8059 18.6218 20.7138 18.7138L20.6978 18.7299L20.6833 18.7473C20.6192 18.8242 20.5722 18.9091 20.5393 18.9967L20.5293 19.0233L20.5224 19.051C20.4928 19.1696 20.4925 19.2918 20.5217 19.4104L21.9575 25.3928C21.9917 25.5503 22.0748 25.6848 22.1909 25.7864C22.3043 25.8857 22.4456 25.9516 22.6052 25.9676C22.7591 25.983 22.9084 25.9503 23.0401 25.8772C23.1859 25.7961 23.2918 25.6725 23.3533 25.527L24.1064 23.8711L25.8653 25.6358L25.8717 25.6422L25.8783 25.6484C25.9921 25.7546 26.1208 25.841 26.2635 25.9045L26.2743 25.9093L26.2854 25.9136C26.4351 25.9718 26.5916 26 26.7512 26C26.9107 26 27.0672 25.9718 27.2169 25.9136Z\\" fill=\\"#4AF3BA\\" stroke=\\"#0F172A\\"/>\\n<path d=\\"M6.74756 15.8413H4.81982L4.4165 17H3.51758L5.39746 12.0234H6.17334L8.05664 17H7.1543L6.74756 15.8413ZM5.0625 15.144H6.50488L5.78369 13.0796L5.0625 15.144ZM12.3462 15.3799C12.2961 15.9108 12.1001 16.3255 11.7583 16.624C11.4165 16.9202 10.9619 17.0684 10.3945 17.0684C9.99805 17.0684 9.64827 16.9749 9.34521 16.7881C9.04443 16.599 8.81201 16.3312 8.64795 15.9849C8.48389 15.6385 8.39844 15.2363 8.3916 14.7783V14.3135C8.3916 13.8441 8.47477 13.4305 8.64111 13.0728C8.80745 12.715 9.04557 12.4393 9.35547 12.2456C9.66764 12.0519 10.0277 11.9551 10.4355 11.9551C10.9847 11.9551 11.4268 12.1043 11.7617 12.4028C12.0967 12.7013 12.2915 13.1229 12.3462 13.6675H11.4849C11.4438 13.3097 11.339 13.0522 11.1704 12.895C11.0041 12.7355 10.7591 12.6558 10.4355 12.6558C10.0596 12.6558 9.77018 12.7936 9.56738 13.0693C9.36686 13.3428 9.26432 13.745 9.25977 14.2759V14.7168C9.25977 15.2546 9.35547 15.6647 9.54688 15.9473C9.74056 16.2298 10.0231 16.3711 10.3945 16.3711C10.734 16.3711 10.9893 16.2948 11.1602 16.1421C11.3311 15.9894 11.4393 15.7354 11.4849 15.3799H12.3462ZM16.6152 12.7207H15.0635V17H14.2056V12.7207H12.6675V12.0234H16.6152V12.7207ZM18.1841 17H17.3228V12.0234H18.1841V17ZM23.2188 14.6416C23.2188 15.1292 23.1344 15.5576 22.9658 15.9268C22.7972 16.2936 22.5557 16.5762 22.2412 16.7744C21.929 16.9704 21.569 17.0684 21.1611 17.0684C20.7578 17.0684 20.3978 16.9704 20.0811 16.7744C19.7666 16.5762 19.5228 16.2948 19.3496 15.9302C19.1787 15.5656 19.0921 15.1452 19.0898 14.6689V14.3887C19.0898 13.9033 19.1753 13.4749 19.3462 13.1035C19.5194 12.7321 19.762 12.4484 20.0742 12.2524C20.3887 12.0542 20.7487 11.9551 21.1543 11.9551C21.5599 11.9551 21.9188 12.0531 22.231 12.249C22.5454 12.4427 22.7881 12.723 22.959 13.0898C23.1299 13.4544 23.2165 13.8794 23.2188 14.3647V14.6416ZM22.354 14.3818C22.354 13.8304 22.2492 13.4077 22.0396 13.1138C21.8322 12.8198 21.5371 12.6729 21.1543 12.6729C20.7806 12.6729 20.4878 12.8198 20.2759 13.1138C20.0662 13.4054 19.9591 13.819 19.9546 14.3545V14.6416C19.9546 15.1885 20.0605 15.6112 20.2725 15.9097C20.4867 16.2082 20.7829 16.3574 21.1611 16.3574C21.5439 16.3574 21.8379 16.2116 22.043 15.9199C22.2503 15.6283 22.354 15.2021 22.354 14.6416V14.3818ZM28.0278 17H27.1631L24.9448 13.4692V17H24.0801V12.0234H24.9448L27.1699 15.5679V12.0234H28.0278V17Z\\" fill=\\"#0F172A\\"/>\\n</svg>","attributes":{"label":{"type":"string","default":"Submit"},"action_type":{"type":"string","default":"submit"},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/conditional-block--name"]}');

/***/ }),

/***/ "../blocks-src/text-field/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/text-field/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/text-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","text"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"65\\" height=\\"64\\" viewBox=\\"0 0 65 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><path d=\\"M44.9148 29.2883L45.8495 29.6436L44.9148 29.2883L33.1316 60.2883C32.6359 61.5925 33.594 63 34.9975 63H37.3174C38.1614 63 38.9118 62.4689 39.1962 61.6766L41.812 54.3874H54.1699L56.827 61.6853C57.1138 62.4731 57.8621 63 58.7027 63H61.0025C62.4065 63 63.3647 61.5916 62.868 60.2872L51.0636 29.2872C50.7691 28.5137 50.028 28 49.1982 28H46.7806C45.9503 28 45.209 28.5142 44.9148 29.2883ZM52.1579 48.8063H43.8411C43.8412 48.806 43.8413 48.8056 43.8414 48.8053L47.9911 37.3112L52.1575 48.8053C52.1577 48.8056 52.1578 48.806 52.1579 48.8063Z\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"field_type":{"type":"string","default":"text"},"enable_input_mask":{"type":"boolean","default":false},"mask_type":{"type":"string","default":""},"input_mask":{"type":"string","default":""},"mask_visibility":{"type":"string","default":"always"},"mask_placeholder":{"type":"string","default":"_"},"minlength":{"type":"number","default":""},"maxlength":{"type":"number","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/textarea-field/block.json":
/*!***********************************************!*\
  !*** ../blocks-src/textarea-field/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/textarea-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","textarea"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"6\\" y=\\"6\\" width=\\"52\\" height=\\"52\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"52\\" y=\\"1\\" width=\\"11\\" height=\\"11\\" rx=\\"1\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"52\\" y=\\"52\\" width=\\"11\\" height=\\"11\\" rx=\\"1\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"1\\" width=\\"11\\" height=\\"11\\" rx=\\"1\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"52\\" width=\\"11\\" height=\\"11\\" rx=\\"1\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M43 20.581C44.1046 20.581 45 19.6856 45 18.581V17C45 15.8954 44.1046 15 43 15H20C18.8954 15 18 15.8954 18 17V18.581C18 19.6856 18.8954 20.581 20 20.581H28.3686V48C28.3686 49.1046 29.264 50 30.3686 50H32.6092C33.7138 50 34.6092 49.1046 34.6092 48L34.6092 20.581H43Z\\" fill=\\"#6F8BFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"minlength":{"type":"number","default":""},"maxlength":{"type":"number","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/time-field/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/time-field/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/time-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","time"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><circle cx=\\"43\\" cy=\\"42\\" r=\\"14\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"42\\" y=\\"43\\" width=\\"7\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><rect x=\\"42\\" y=\\"35\\" width=\\"2\\" height=\\"10\\" rx=\\"1\\" fill=\\"#162B40\\"/></svg>","attributes":{"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

/***/ }),

/***/ "../blocks-src/wysiwyg-field/block.json":
/*!**********************************************!*\
  !*** ../blocks-src/wysiwyg-field/block.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/wysiwyg-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","wysiwyg","text"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"15\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M10 34V23H13.7708C15.077 23 16.0678 23.2569 16.7431 23.7706C17.4184 24.2793 17.756 25.0272 17.756 26.0144C17.756 26.5533 17.6205 27.0293 17.3494 27.4423C17.0782 27.8503 16.7012 28.15 16.2181 28.3413C16.7702 28.4824 17.2039 28.7669 17.5194 29.1951C17.8398 29.6232 18 30.147 18 30.7665C18 31.8242 17.6697 32.625 17.0092 33.169C16.3487 33.7129 15.4073 33.9899 14.1848 34H10ZM12.2181 29.2102V32.1793H14.1183C14.6408 32.1793 15.0474 32.0533 15.3383 31.8015C15.634 31.5446 15.7819 31.1921 15.7819 30.7438C15.7819 29.7365 15.2717 29.2253 14.2514 29.2102H12.2181ZM12.2181 27.6085H13.8595C14.9784 27.5884 15.5379 27.1326 15.5379 26.2411C15.5379 25.7424 15.3949 25.3848 15.1091 25.1683C14.8281 24.9467 14.382 24.8359 13.7708 24.8359H12.2181V27.6085Z\\" fill=\\"#162B40\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M35.0634 25.2306H32.8394L30.5817 31.8276H32.0422V34.0581H26V31.8276H28.2241L30.4819 25.2306H29.0212V23H35.0634V25.2306Z\\" fill=\\"#162B40\\"/><circle cx=\\"44.4385\\" cy=\\"24.375\\" r=\\"1.375\\" fill=\\"#162B40\\"/><circle cx=\\"44.4385\\" cy=\\"28.5\\" r=\\"1.375\\" fill=\\"#162B40\\"/><circle cx=\\"44.4385\\" cy=\\"32.625\\" r=\\"1.375\\" fill=\\"#162B40\\"/><path d=\\"M47.1885 24.375H54.0635\\" stroke=\\"#162B40\\" stroke-width=\\"1.375\\"/><path d=\\"M47.1885 28.5H54.0635\\" stroke=\\"#162B40\\" stroke-width=\\"1.375\\"/><path d=\\"M47.1885 32.625H54.0635\\" stroke=\\"#162B40\\" stroke-width=\\"1.375\\"/></svg>","attributes":{"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"required":{"type":"boolean","default":false},"default":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}},"usesContext":["jet-forms/repeater-field--name"]}');

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
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/form-fields */ "./editor/blocks/form-fields.js");
/* harmony import */ var _form_actions_send_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-actions/send-email */ "./editor/form-actions/send-email.js");
/* harmony import */ var _form_actions_send_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_actions_send_email__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_actions_insert_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-actions/insert-post */ "./editor/form-actions/insert-post.js");
/* harmony import */ var _form_actions_register_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-actions/register-user */ "./editor/form-actions/register-user.js");
/* harmony import */ var _form_actions_register_user__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_form_actions_register_user__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _form_actions_update_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-actions/update-user */ "./editor/form-actions/update-user.js");
/* harmony import */ var _form_actions_update_user__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_form_actions_update_user__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _form_actions_update_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-actions/update-options */ "./editor/form-actions/update-options.js");
/* harmony import */ var _form_actions_update_options__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_form_actions_update_options__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_actions_call_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-actions/call-hook */ "./editor/form-actions/call-hook.js");
/* harmony import */ var _form_actions_call_hook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_form_actions_call_hook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-actions/call-webhook */ "./editor/form-actions/call-webhook.js");
/* harmony import */ var _form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-actions/redirect-to-page */ "./editor/form-actions/redirect-to-page.js");
/* harmony import */ var _form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _form_actions_mailchimp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-actions/mailchimp */ "./editor/form-actions/mailchimp.js");
/* harmony import */ var _form_actions_mailchimp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_form_actions_mailchimp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _form_actions_getresponse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-actions/getresponse */ "./editor/form-actions/getresponse.js");
/* harmony import */ var _form_actions_activecampaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-actions/activecampaign */ "./editor/form-actions/activecampaign.js");
/* harmony import */ var _form_actions_activecampaign__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_form_actions_activecampaign__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plugins_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/manager */ "./editor/plugins/manager.js");














var _JetFBActions = JetFBActions,
    event = _JetFBActions.event;
event('jet-form-builder-initialize')();
window.jetFormActionTypes.forEach(function (action, index) {
  if (window.jetFormDefaultActions && window.jetFormDefaultActions[action.id]) {
    window.jetFormActionTypes[index].callback = window.jetFormDefaultActions[action.id];
  }
});
(0,_plugins_manager__WEBPACK_IMPORTED_MODULE_12__["default"])();
(0,_blocks_form_fields__WEBPACK_IMPORTED_MODULE_0__["default"])();
event('jet-form-builder-initialized')();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUlBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQWNBO0FBREE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFhQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeExBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBUEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTs7QUFFQTtBQUFBO0FBQUE7O0FBS0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQURBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUtBO0FBR0E7QUFBQTtBQUFBO0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFTQTtBQWRBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFTQTtBQWZBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQXpFQTtBQVRBO0FBK0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNNQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFGQTtBQVJBO0FBUEE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBL0JBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUtBOztBQUVBOzs7OztBQUVBO0FBQUE7O0FBQUE7O0FBQ0E7QUFFQTtBQUhBO0FBSUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBYUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFRQTs7OztBQWhHQTs7QUFtR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBOztBQUVBO0FBQUE7QUFBQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFKQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBOztBQUVBO0FBQUE7QUFBQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFFQTtBQURBO0FBTUE7QUFEQTtBQUlBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBRUE7QUFDQTtBQUpBO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFJQTs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUlBOztBQUVBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUlBOztBQUVBO0FBQUE7QUFBQTs7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFNQTtBQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQUVBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQU9BOztBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFwQ0E7O0FBOENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQWJBOztBQWdCQTtBQUdBO0FBREE7QUFJQTtBQURBO0FBUUE7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBY0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25KQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7O0FBRUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVhBO0FBZUE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTs7QUFFQTtBQUFBO0FBQUE7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTs7QUFFQTtBQUFBO0FBQUE7O0FBS0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFGQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBTUE7O0FBRUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBR0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBWUE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFLQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9BO0FBSUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBY0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBY0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN05BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBRkE7QUFaQTtBQVBBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUUE7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFGQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7O0FBRUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUtBO0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBREE7QUFNQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7O0FBRUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFhQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7O0FBRUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTs7QUFFQTtBQUFBO0FBQUE7O0FBS0E7QUFBQTtBQUFBO0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBRUE7QUFDQTtBQUpBO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BOztBQUVBO0FBQUE7QUFBQTs7QUFLQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBTUE7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBVUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVVBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUExQ0E7QUFvREE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBTUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBZEE7QUEwQkE7O0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFhQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUVBO0FBSUE7O0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUxBO0FBUUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFMQTtBQVFBOztBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQWhDQTs7QUFtQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7O0FBUUE7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7O0FBV0E7QUFDQTtBQXZDQTtBQTBDQTs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFhQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BOztBQWFBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBRUE7O0FBRUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOztBQUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFIQTtBQWFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TUE7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7OztBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFJQTs7OztBQTNFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFJQTtBQUVBOzs7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBREE7QUFHQTtBQUFBO0FBdUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBSUE7QUFBQTs7QUFBQTs7QUFFQTtBQUFBOztBQUFBOztBQUNBO0FBRUE7QUFIQTtBQUlBOztBQU5BO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQ0E7QUFuQkE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUFBO0FBQ0E7O0FBRUE7Ozs7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTtBQUVBO0FBSEE7QUFJQTs7OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBYUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUtBO0FBQ0E7Ozs7QUFwSkE7O0FBdUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TEE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFBQTtBQUFBO0FBS0E7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBQUE7O0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTs7QUFEQTtBQUFBOztBQUFBO0FBR0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFJQTtBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7O0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFPQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBVUE7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFFQTtBQUFBOztBQUVBOzs7OztBQUVBO0FBQUE7O0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQVRBO0FBWUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUF0QkE7QUEwQkE7OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBekVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBQUE7QUFBQTs7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7OztBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTtBQVdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVdBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVVBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFIQTtBQWdCQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFFQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFPQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySkE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFFQTtBQUFBO0FBQUE7O0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFEQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBREE7QUFFQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBSEE7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBUkE7QUFZQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBRUE7O0FBRUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFFQTtBQUlBO0FBQUE7O0FBQUE7O0FBRUE7QUFBQTs7QUFBQTs7QUFDQTtBQUVBO0FBSEE7QUFJQTs7QUFOQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFrQkE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXRCQTtBQUFBO0FBQUE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFqQ0E7QUFBQTtBQUFBO0FBbUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBSUE7QUFFQTs7O0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUpBO0FBY0E7QUFDQTtBQXRGQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUFBO0FBQUE7O0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBREE7QUFBQTs7QUFBQTtBQUdBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFJQTs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFTQTs7O0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU5BO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBV0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFOQTtBQUFBO0FBY0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQU5BO0FBQUE7QUFjQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBTkE7QUFBQTtBQWNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBT0E7O0FBRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBS0E7QUFNQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFLQTtBQUNBOztBQUVBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBOztBQU9BO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBWEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBWUE7O0FBRUE7QUFDQTtBQUFBO0FBT0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7O0FBT0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFYQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFZQTs7QUFFQTtBQUNBO0FBQUE7QUFPQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFIQTtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBT0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBR0E7O0FBRUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBSUE7QUFSQTtBQVNBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBWUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQVhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQTFCQTtBQXVDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBSkE7QUFPQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFTQTtBQWJBO0FBaUJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBVkE7QUFiQTtBQTBCQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVNBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBWUE7QUFFQTtBQUdBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmJBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFUQTtBQVlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUlBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUdBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQVpBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQVBBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFOQTtBQUFBO0FBU0E7QUFiQTtBQW1CQTs7QUFHQTtBQUNBO0FBQUE7QUFNQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBSUE7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBS0E7O0FBSUE7QUFFQTs7QUFFQTtBQUFBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFPQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBO0FBQUE7QUFDQTtBQUFBOztBQUVBO0FBRUE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBVkE7QUFhQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9ibG9jay13cmFwcGVycy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NhbGN1bGF0ZWQtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NhbGN1bGF0ZWQtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jaGVja2JveC1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY2hlY2tib3gtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb2xvci1waWNrZXItZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbG9yLXBpY2tlci1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbmRpdGlvbmFsLWJsb2NrL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb25kaXRpb25hbC1ibG9jay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbmRpdGlvbmFsLWJsb2NrL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb25kaXRpb25hbC1ibG9jay9zYXZlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZGVmYXVsdC1tZXRhLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZGF0ZS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZGF0ZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2RhdGV0aW1lLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9kYXRldGltZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2Zvcm0tYnJlYWstZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2Zvcm0tYnJlYWstZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9mb3JtLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2dyb3VwLWJyZWFrLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9ncm91cC1icmVhay1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hlYWRpbmctZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hlYWRpbmctZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oZWxwLW1lc3NhZ2VzLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hpZGRlbi1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGlkZGVuLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGlkZGVuLWZpZWxkL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9tZWRpYS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbWVkaWEtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9tZWRpYS1maWVsZC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbnVtYmVyLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9udW1iZXItZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9wcm9ncmVzcy1iYXIvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3Byb2dyZXNzLWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JhZGlvLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yYWRpby1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JhbmdlLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yYW5nZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JlcGVhdGVyLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yZXBlYXRlci1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JlcGVhdGVyLWZpZWxkL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yZXBlYXRlci1maWVsZC9zYXZlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvc2VsZWN0LWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9zZWxlY3QtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9zZWxlY3QtcmFkaW8tY2hla2Mtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3N1Ym1pdC1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvc3VibWl0LWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGV4dC1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGV4dC1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RleHQtZmllbGQvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RleHRhcmVhLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90ZXh0YXJlYS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RpbWUtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RpbWUtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy93eXNpd3lnLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy93eXNpd3lnLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL2N1c3RvbS10ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9mcm9tLWdlbmVyYXRvcnMtZmllbGRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL2Zyb20tbWFudWFsLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9mcm9tLXBvc3QtdGVybXMtZmllbGRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay1wbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9wcmVzZXRzL2dlbmVyYWwtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvYWN0aXZlY2FtcGFpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9iYXNlLWFjdGlvbi1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9jYWxsLWhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9jYWxsLXdlYmhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9nZXRyZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2luc2VydC1wb3N0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvaW50ZWdyYXRpb24tY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvbWFpbGNoaW1wLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvcmVkaXJlY3QtdG8tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3JlZ2lzdGVyLXVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9zZW5kLWVtYWlsLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvdXBkYXRlLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy91cGRhdGUtdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZ2F0ZXdheXMvZ2F0ZXdheXMtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9nYXRld2F5cy9wYXlwYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2dhdGV3YXlzL3BheXBhbC9tYWluLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9nYXRld2F5cy9wYXlwYWwvcGF5LW5vdy1zY2VuYXJpby5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZ2F0ZXdheXMvcGF5cGFsL3N1YnNjcmliZS1ub3ctc2NlbmFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9hY3Rpb25zL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvYWN0aW9ucy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvYXJndW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL2FyZ3VtZW50cy9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL2FyZ3VtZW50cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvY2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9jYXB0Y2hhL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvY2FwdGNoYS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvZ2F0ZXdheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvZ2F0ZXdheXMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvbWVzc2FnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvbWVzc2FnZXMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL3ByZXNldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9wcmVzZXQvcmVuZGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXNzYWdlc0NvbmZpZyB9IGZyb20gXCIuL2hlbHAtbWVzc2FnZXMtY29uZmlnXCI7XHJcblxyXG5jb25zdCB7XHJcblx0YXBwbHlGaWx0ZXJzXHJcbn0gPSB3cC5ob29rcztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRoQ3VzdG9tUHJvcHMoIGJsb2NrICkge1xyXG5cdGNvbnN0IHsgZWRpdDogRWRpdENvbXBvbmVudCB9ID0gYmxvY2suc2V0dGluZ3M7XHJcblxyXG5cdGxldCBfcGx1Z2lucyA9IHt9O1xyXG5cclxuXHRpZiAoICd1c2VFZGl0UHJvcHMnIGluIGJsb2NrLnNldHRpbmdzICkge1xyXG5cdFx0Y29uc3QgeyB1c2VFZGl0UHJvcHMgfSA9IGJsb2NrLnNldHRpbmdzO1xyXG5cclxuXHRcdHVzZUVkaXRQcm9wcy5mb3JFYWNoKCBuYW1lID0+IHtcclxuXHRcdFx0Y29uc3QgZWRpdFByb3AgPSBlZGl0UHJvcHMuZmluZCggcHJvcCA9PiBuYW1lID09PSBwcm9wLm5hbWUgKTtcclxuXHJcblx0XHRcdGlmICggZWRpdFByb3AgKSB7XHJcblx0XHRcdFx0X3BsdWdpbnNbIG5hbWUgXSA9IGVkaXRQcm9wLmNhbGxhYmxlKCBibG9jayApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0ZGVsZXRlIGJsb2NrLnNldHRpbmdzLnVzZUVkaXRQcm9wcztcclxuXHR9XHJcblxyXG5cdHJldHVybiBwcm9wcyA9PiA8RWRpdENvbXBvbmVudCB7IC4uLnByb3BzIH0gZWRpdFByb3BzPXsgeyAuLi5fcGx1Z2lucyB9IH0vPjtcclxufVxyXG5cclxuY29uc3QgZ2V0SGVscEluc3RhbmNlID0gYmxvY2sgPT4ge1xyXG5cdGNvbnN0IG1lc3NhZ2VzID0ge307XHJcblxyXG5cdG1lc3NhZ2VzQ29uZmlnLmZvckVhY2goIG1zZyA9PiB7XHJcblx0XHRpZiAoIG1zZy50by5pbmNsdWRlcyggYmxvY2submFtZSApICYmIG1zZy5tZXNzYWdlICkge1xyXG5cdFx0XHRtZXNzYWdlc1sgbXNnLmF0dHJpYnV0ZSBdID0gbXNnO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuICggYXR0cmlidXRlLCBhdHRyaWJ1dGVzID0ge30gKSA9PiB7XHJcblx0XHRpZiAoICEgKCBhdHRyaWJ1dGUgaW4gbWVzc2FnZXMgKSApIHtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgaXRlbSA9IG1lc3NhZ2VzWyBhdHRyaWJ1dGUgXTtcclxuXHJcblx0XHRpZiAoICdjb25kaXRpb25zJyBpbiBpdGVtICkge1xyXG5cdFx0XHRmb3IgKCBjb25zdCBhdHRyTmFtZSBpbiBpdGVtLmNvbmRpdGlvbnMgKSB7XHJcblx0XHRcdFx0aWYgKCAhICggYXR0ck5hbWUgaW4gYXR0cmlidXRlcyApIHx8IGl0ZW0uY29uZGl0aW9uc1sgYXR0ck5hbWUgXSAhPT0gYXR0cmlidXRlc1sgYXR0ck5hbWUgXSApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBpdGVtLm1lc3NhZ2U7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZWRpdFByb3BzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmVkaXRQcm9wcycsIFtcclxuXHR7XHJcblx0XHRuYW1lOiAndW5pcUtleScsXHJcblx0XHRjYWxsYWJsZTogYmxvY2sgPT4gKCBzdWZmaXggPT4gYCR7IGJsb2NrLm5hbWUgfS8keyBzdWZmaXggfWAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogJ2Jsb2NrTmFtZScsXHJcblx0XHRjYWxsYWJsZTogYmxvY2sgPT4gYmxvY2submFtZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogJ2F0dHJIZWxwJyxcclxuXHRcdGNhbGxhYmxlOiBnZXRIZWxwSW5zdGFuY2VcclxuXHR9XHJcbl0gKTsiLCJjb25zdCB7XHJcblx0XHQgIEFkdmFuY2VkRmllbGRzLFxyXG5cdFx0ICBHZW5lcmFsRmllbGRzLFxyXG5cdFx0ICBGaWVsZFdyYXBwZXIsXHJcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxyXG5cdFx0ICBCYXNlSGVscCxcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxyXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEJsb2NrQ29udHJvbHMsXHJcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBUZXh0YXJlYUNvbnRyb2wsXHJcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXHJcblx0XHQgIFBhbmVsQm9keSxcclxuXHRcdCAgQnV0dG9uLFxyXG5cdFx0ICBQb3BvdmVyLFxyXG5cdFx0ICBUb29sYmFyR3JvdXAsXHJcblx0XHQgIF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgTnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxuXHJcbmNvbnN0IHsgdXNlU3RhdGUsIFJhd0hUTUwgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IGhlbHAgPSB7XHJcblx0Y2FsY19oaWRkZW46IF9fKCAnQ2hlY2sgdGhpcyB0byBoaWRlIGNhbGN1bGF0ZWQgZmllbGQnICksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0Q2FsY3VsYXRlZCggcHJvcHMgKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcclxuXHRcdFx0ICBpc1NlbGVjdGVkLFxyXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7XHJcblx0XHRcdGNhbGNfZm9ybXVsYTogYCR7IGF0dHJpYnV0ZXMuY2FsY19mb3JtdWxhIHx8ICcnIH0keyBtYWNyb3MgfWAsXHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHRjb25zdCB0b2dnbGVQb3BvdmVyID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgZmllbGRzID0gZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQoKS5tYXAoICggeyB2YWx1ZSB9ICkgPT4gKCAnJUZJRUxEOjonICsgdmFsdWUgKyAnJScgKSApO1xyXG5cclxuXHRcdHNldEZvcm1GaWVsZHMoIGFwcGx5RmlsdGVycyggJ2pldC5mYi5jYWxjdWxhdGVkLmZpZWxkLmF2YWlsYWJsZS5maWVsZHMnLCBmaWVsZHMgKSApO1xyXG5cdFx0c2V0U2hvd01hY3JvcyggdG9nZ2xlID0+ICEgdG9nZ2xlICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgWyBmb3JtRmllbGRzLCBzZXRGb3JtRmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHRjb25zdCBbIHNob3dNYWNyb3MsIHNldFNob3dNYWNyb3MgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PEJsb2NrQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ0Jsb2NrQ29udHJvbHMnICkgfT5cclxuXHRcdFx0PFRvb2xiYXJHcm91cCBrZXk9eyB1bmlxS2V5KCAnVG9vbGJhckdyb3VwJyApIH0+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3Nob3ctcG9wb3ZlcicgKSB9XHJcblx0XHRcdFx0XHRpc1RlcnRpYXJ5XHJcblx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRpY29uPXsgc2hvd01hY3JvcyA/ICduby1hbHQnIDogJ2FkbWluLXRvb2xzJyB9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgdG9nZ2xlUG9wb3ZlciB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7IHNob3dNYWNyb3MgJiYgPFBvcG92ZXJcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdQb3BvdmVyJyApIH1cclxuXHRcdFx0XHRcdHBvc2l0aW9uPXsgJ2JvdHRvbSBsZWZ0JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBmb3JtRmllbGRzLmxlbmd0aCAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0Zvcm0gRmllbGRzJyB9PlxyXG5cdFx0XHRcdFx0XHR7IGZvcm1GaWVsZHMubWFwKCAoIHZhbHVlLCBpbmRleCApID0+IDxkaXYga2V5PXsgdW5pcUtleSggYGZvcm1GaWVsZHMtJHsgaW5kZXggfWAgKSB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnNlcnRNYWNyb3MoIHZhbHVlIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHQ+eyB2YWx1ZSB9PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+LFxyXG5cdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdFx0PC9Qb3BvdmVyPiB9XHJcblx0XHRcdDwvVG9vbGJhckdyb3VwPlxyXG5cdFx0PC9CbG9ja0NvbnRyb2xzPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tZ2VuZXJhbCcgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxGaWVsZFNldHRpbmdzV3JhcHBlciB7IC4uLnByb3BzIH0+XHJcblx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscCcgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7IG1hcmdpblRvcDogJzBweCcsIGNvbG9yOiAncmdiKDExNywgMTE3LCAxMTcpJyB9IH1cclxuXHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IEpldEZvcm1DYWxjdWxhdGVkRmllbGQuZmllbGRfZGVzYyB9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRGVjaW1hbCBQbGFjZXMgTnVtYmVyJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdGtleT0ncHJlY2lzaW9uJ1xyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnByZWNpc2lvbiB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgcHJlY2lzaW9uOiBwYXJzZUludCggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdjYWxjX3NlcGFyYXRlX2RlY2ltYWxzJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RlY2ltYWxzIHNlcGFyYXRvcicgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc2VwYXJhdGVfZGVjaW1hbHMgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXBhcmF0ZV9kZWNpbWFscyA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNlcGFyYXRlX2RlY2ltYWxzIH0gKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nY2FsY19zZXBhcmF0ZV90aG91c2FuZHMnXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVGhvdXNhbmRzIHNlcGFyYXRvcicgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc2VwYXJhdGVfdGhvdXNhbmRzIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2VwYXJhdGVfdGhvdXNhbmRzID0+IHNldEF0dHJpYnV0ZXMoIHsgc2VwYXJhdGVfdGhvdXNhbmRzIH0gKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nY2FsY19wcmVmaXgnXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlZCBWYWx1ZSBQcmVmaXgnICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGNfcHJlZml4IH1cclxuXHRcdFx0XHRcdGhlbHA9eyBfXyggJ0ZvciBzcGFjZSBiZWZvcmUgb3IgYWZ0ZXIgdGV4dCB1c2U6ICZuYnNwOycgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY19wcmVmaXg6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2NhbGNfc3VmZml4J1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZWQgVmFsdWUgU3VmZml4JyApIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjX3N1ZmZpeCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgX18oICdGb3Igc3BhY2UgYmVmb3JlIG9yIGFmdGVyIHRleHQgdXNlOiAmbmJzcDsnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNhbGNfc3VmZml4OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnY2FsY19oaWRkZW4nIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdIaWRkZW4nICkgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuY2FsY19oaWRkZW4gfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAuY2FsY19oaWRkZW4gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XHJcblx0XHRcdFx0XHRcdFx0Y2FsY19oaWRkZW46IEJvb2xlYW4oIG5ld1ZhbCApLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkU2V0dGluZ3NXcmFwcGVyPlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1hZHZhbmNlZCcgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19jYWxjdWxhdGVkLWZpZWxkJyB9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnY2FsYy1wcmVmaXgnIH0+eyBhdHRyaWJ1dGVzLmNhbGNfcHJlZml4IH08L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2NhbGMtZm9ybXVsYScgfT57IGF0dHJpYnV0ZXMuY2FsY19mb3JtdWxhIH08L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2NhbGMtc3VmZml4JyB9PnsgYXR0cmlidXRlcy5jYWxjX3N1ZmZpeCB9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0eyBwcm9wcy5pc1NlbGVjdGVkICYmIDw+XHJcblx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT1cImNhbGNfZm9ybXVsYVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBjYWxjX2Zvcm11bGE6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvPiB9XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+LFxyXG5cdF07XHJcbn0iLCJpbXBvcnQgRWRpdENhbGN1bGF0ZWQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvY2FsY3VsYXRlZC1maWVsZC9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdDYWxjdWxhdGVkIEZpZWxkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0ZGVzY3JpcHRpb246IF9fKCAnQ2FsY3VsYXRlIGFuZCBkaXNwbGF5IHlvdXIgbnVtYmVyIHZhbHVlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogRWRpdENhbGN1bGF0ZWQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2Jsb2NrTmFtZScgXSxcclxuXHRleGFtcGxlOiB7XHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdGxhYmVsOiAnQ2FsY3VsYXRlZCBGaWVsZCcsXHJcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLicsXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07XHJcbiIsImltcG9ydCB7IFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgU2VsZWN0UmFkaW9DaGVjayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2tcIjtcclxuaW1wb3J0IEN1c3RvbVRlbXBsYXRlQ29udHJvbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9jdXN0b20tdGVtcGxhdGUnO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcclxuXHRcdCAgR2VuZXJhbEZpZWxkcyxcclxuXHRcdCAgVG9vbEJhckZpZWxkcyxcclxuXHRcdCAgRmllbGRDb250cm9sLFxyXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCBsb2NhbGl6ZWQgPSB3aW5kb3cuSmV0Rm9ybUNoZWNrYm94RmllbGREYXRhO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hFZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcclxuXHRcdFx0ICBpc1NlbGVjdGVkLFxyXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLXRvb2xiYXInICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1nZW5lcmFsJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tYWR2YW5jZWQnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXInICkgfVxyXG5cdFx0XHRcdHNjcmlwdERhdGE9eyBsb2NhbGl6ZWQgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVjayB7IC4uLnByb3BzIH0+XHJcblx0XHRcdFx0PEN1c3RvbVRlbXBsYXRlQ29udHJvbHNcclxuXHRcdFx0XHRcdGxpc3RpbmdUeXBlcz17IGxvY2FsaXplZC5saXN0aW5nc19saXN0IH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHRcdFx0dHlwZT0nY3VzdG9tX3NldHRpbmdzJ1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvU2VsZWN0UmFkaW9DaGVjaz5cclxuXHRcdDwvZGl2PixcclxuXHRdO1xyXG59IiwiaW1wb3J0IENoZWNrYm94RWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9jaGVja2JveC1maWVsZC9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdDaGVja2JveCBGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogQ2hlY2tib3hFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnLCAnYXR0ckhlbHAnIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogJ0NoZWNrYm94IEZpZWxkJyxcclxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJyxcclxuXHRcdFx0ZmllbGRfb3B0aW9uczogW1xyXG5cdFx0XHRcdHsgbGFiZWw6ICdGaXJzdCBPcHRpb24nLCB2YWx1ZTogJycgfSxcclxuXHRcdFx0XHR7IGxhYmVsOiAnU2Vjb25kIE9wdGlvbicsIHZhbHVlOiAnJyB9LFxyXG5cdFx0XHRcdHsgbGFiZWw6ICdUaGlyZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiY29uc3Qge1xyXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcclxuXHRcdCAgR2VuZXJhbEZpZWxkcyxcclxuXHRcdCAgVG9vbEJhckZpZWxkcyxcclxuXHRcdCAgRmllbGRXcmFwcGVyLFxyXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxubGV0IHsgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29sb3JQaWNrZXJFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxGaWVsZFNldHRpbmdzV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFNldHRpbmdzV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SW5wdXRDb250cm9sXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnXHJcblx0XHRcdFx0XHR0eXBlPSdjb2xvcidcclxuXHRcdFx0XHRcdGtleT17ICdjb2xvcl9waWNrZXJfcGxhY2VfaG9sZGVyX2Jsb2NrJyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+LFxyXG5cdF07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yUGlja2VyRWRpdDsiLCJpbXBvcnQgQmxvY2tFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL2NvbG9yLXBpY2tlci1maWVsZC9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdDb2xvciBQaWNrZXIgRmllbGQnLCdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogQmxvY2tFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnLCAnYXR0ckhlbHAnIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogJ0NvbG9yIFBpY2tlciBGaWVsZCcsXHJcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLicsXHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBSZXBlYXRlcldpdGhTdGF0ZSxcclxuXHRcdCAgQWN0aW9uTW9kYWwsXHJcblx0XHQgIEZpZWxkV2l0aFByZXNldCxcclxuXHRcdCAgRHluYW1pY1ByZXNldCxcclxuXHRcdCAgRmllbGRTZXR0aW5nc1dyYXBwZXIsXHJcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBnZXRGb3JtRmllbGRzQmxvY2tzLFxyXG5cdFx0ICBnZXRJbm5lckJsb2NrcyxcclxuXHRcdCAgVG9vbHMsXHJcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgQmxvY2tDb250cm9scyxcclxuXHRcdCAgSW5uZXJCbG9ja3MsXHJcblx0XHQgIHVzZUJsb2NrUHJvcHMsXHJcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEJ1dHRvbixcclxuXHRcdCAgVG9vbGJhckdyb3VwLFxyXG5cdFx0ICBUZXh0YXJlYUNvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdFx0ICB1c2VFZmZlY3QsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmRpdGlvbmFsQmxvY2tFZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBjbGllbnRJZCxcclxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCAhIGF0dHJpYnV0ZXMubmFtZSApIHtcclxuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBuYW1lOiBjbGllbnRJZCB9IClcclxuXHRcdH1cclxuXHR9LCBbXSApO1xyXG5cclxuXHRUb29scy5hZGRDb25kaXRpb25Gb3JDb25kVHlwZSggJ2lzU2luZ2xlRmllbGQnLCAoKSA9PiB7XHJcblx0XHRyZXR1cm4gMSA9PT0gZ2V0SW5uZXJCbG9ja3MoIGNsaWVudElkICkubGVuZ3RoO1xyXG5cdH0gKVxyXG5cclxuXHRjb25zdCBnZXRDb25kaXRpb25UeXBlcyA9IFRvb2xzLnBhcnNlQ29uZGl0aW9uc0Z1bmMoIG9wdGlvbnMuY29uZGl0aW9uVHlwZXMgKTtcclxuXHRjb25zdCBbIHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHRjb25zdCBbIGZvcm1GaWVsZHMsIHNldEZvcm1GaWVsZHMgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggc2hvd01vZGFsICkge1xyXG5cdFx0XHRzZXRGb3JtRmllbGRzKCBnZXRGb3JtRmllbGRzQmxvY2tzKCBbXSwgJy0tJyApICk7XHJcblx0XHR9XHJcblx0fSwgWyBzaG93TW9kYWwgXSApO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRTZXR0aW5nc1dyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTGFzdCBQYWdlIE5hbWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnbGFzdF9wYWdlX25hbWUnICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhc3RfcGFnZV9uYW1lIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBfXyggJ1RoZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIHdpbGwgYmUgc2V0IGFzIHRoZSBuYW1lIG9mIHRoZSBsYXN0IHBhZ2Ugd2l0aCB0aGUgXCJQcm9ncmVzcyBCYXJcIiBibG9jay4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IGxhc3RfcGFnZV9uYW1lID0+IHNldEF0dHJpYnV0ZXMoIHsgbGFzdF9wYWdlX25hbWUgfSApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkU2V0dGluZ3NXcmFwcGVyPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8QmxvY2tDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnQmxvY2tDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8VG9vbGJhckdyb3VwIGtleT17IHVuaXFLZXkoICdUb29sYmFyR3JvdXAnICkgfT5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncmFuZG9taXplJyApIH1cclxuXHRcdFx0XHRcdGlzVGVydGlhcnlcclxuXHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdGljb249J3JhbmRvbWl6ZSdcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93TW9kYWwoIHRydWUgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Ub29sYmFyR3JvdXA+XHJcblx0XHQ8L0Jsb2NrQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtZm9ybS1idWlsZGVyX19jb25kaXRpb25hbCc+XHJcblx0XHRcdFx0PElubmVyQmxvY2tzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnY29uZGl0aW9uYWwtZmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHJlbmRlckFwcGVuZGVyPXsgKCkgPT4gPElubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXIga2V5PXsgdW5pcUtleSggJ0J1dHRvbkJsb2NrQXBwZW5kZXInICkgfS8+IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PixcclxuXHRcdHNob3dNb2RhbCAmJiA8QWN0aW9uTW9kYWxcclxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRTaG93TW9kYWwoIGZhbHNlICkgfVxyXG5cdFx0XHR0aXRsZT1cIkNvbmRpdGlvbmFsIExvZ2ljXCJcclxuXHRcdD5cclxuXHRcdFx0eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8UmVwZWF0ZXJXaXRoU3RhdGVcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUmVwZWF0ZXJXaXRoU3RhdGUnICkgfVxyXG5cdFx0XHRcdGl0ZW1zPXsgYXR0cmlidXRlcy5jb25kaXRpb25zIH1cclxuXHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdG5ld0l0ZW09eyBvcHRpb25zLmNvbmRpdGlvbiB9XHJcblx0XHRcdFx0b25TYXZlSXRlbXM9eyBjb25kaXRpb25zID0+IHNldEF0dHJpYnV0ZXMoIHsgY29uZGl0aW9ucyB9ICkgfVxyXG5cdFx0XHRcdGFkZE5ld0J1dHRvbkxhYmVsPXsgX18oIFwiTmV3IENvbmRpdGlvblwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7ICggeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSApID0+IDw+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0Q29udHJvbC10eXBlJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJUeXBlXCJcclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnR5cGUgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZ2V0Q29uZGl0aW9uVHlwZXMgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyB0eXBlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdTZWxlY3RDb250cm9sLWZpZWxkJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJGaWVsZFwiXHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5maWVsZCB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZmllbGQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdENvbnRyb2wtb3BlcmF0b3InICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIk9wZXJhdG9yXCJcclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLm9wZXJhdG9yIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG9wdGlvbnMuY29uZGl0aW9uT3BlcmF0b3JzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgb3BlcmF0b3I6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEZpZWxkV2l0aFByZXNldFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXaXRoUHJlc2V0LXZhbHVlX3RvX2NvbXBhcmUnICkgfVxyXG5cdFx0XHRcdFx0XHRiYXNlQ29udHJvbFByb3BzPXsge1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIlZhbHVlIHRvIENvbXBhcmVcIixcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdE1vZGFsRWRpdG9yPXsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPER5bmFtaWNQcmVzZXRcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRHluYW1pY1ByZXNldC12YWx1ZV90b19jb21wYXJlJyApIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdFx0dHJpZ2dlckNsYXNzZXM9eyBbICd0cmlnZ2VyX190ZXh0YXJlYScgXSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnVGV4dGFyZWFDb250cm9sLXZhbHVlJyApIH1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWNvbnRyb2wtY2xlYXIgamV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCcgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0PlxyXG5cdFx0XHRcdFx0eyAnc2V0X3ZhbHVlJyA9PT0gY3VycmVudEl0ZW0udHlwZSAmJiA8RmllbGRXaXRoUHJlc2V0XHJcblx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdpdGhQcmVzZXQtdmFsdWVfdG9fc2V0JyApIH1cclxuXHRcdFx0XHRcdFx0YmFzZUNvbnRyb2xQcm9wcz17IHtcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdWYWx1ZSB0byBTZXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0XHRcdFx0XHRoZWxwOiBfXyggJ1NlcGFyYXRlIHZhbHVlcyB3aXRoIGNvbW1hcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0TW9kYWxFZGl0b3I9eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8RHluYW1pY1ByZXNldFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdEeW5hbWljUHJlc2V0LXZhbHVlX3RvX3NldCcgKSB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5zZXRfdmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRcdFx0XHRvblNhdmVQcmVzZXQ9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBzZXRfdmFsdWU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdFx0dHJpZ2dlckNsYXNzZXM9eyBbICd0cmlnZ2VyX190ZXh0YXJlYScgXSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnVGV4dGFyZWFDb250cm9sLXNldF92YWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1jb250cm9sLWNsZWFyIGpldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnNldF92YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBzZXRfdmFsdWU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0PiB9XHJcblx0XHRcdFx0PC8+IH1cclxuXHRcdFx0PC9SZXBlYXRlcldpdGhTdGF0ZT4gfVxyXG5cdFx0PC9BY3Rpb25Nb2RhbD4sXHJcblx0XTtcclxufSIsImltcG9ydCBDb25kaXRpb25hbEJsb2NrRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9jb25kaXRpb25hbC1ibG9jay9ibG9jay5qc29uXCI7XHJcbmltcG9ydCBDb25kaXRpb25hbFNhdmUgZnJvbSBcIi4vc2F2ZVwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdDb25kaXRpb25hbCBCbG9jaycgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IENvbmRpdGlvbmFsQmxvY2tFZGl0LFxyXG5cdHNhdmU6IENvbmRpdGlvbmFsU2F2ZSxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0aW5uZXJCbG9ja3M6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5hbWU6ICdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdUaXRsZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnamV0LWZvcm1zL3JhZGlvLWZpZWxkJyxcclxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdFx0XHRsYWJlbDogJ0l0ZW0gUmFkaW8nLFxyXG5cdFx0XHRcdFx0ZmllbGRfb3B0aW9uczogW1xyXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiAnRmlyc3QgT3B0aW9uJywgdmFsdWU6ICcnIH0sXHJcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdTZWNvbmQgT3B0aW9uJywgdmFsdWU6ICcnIH0sXHJcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdUaGlyZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0Y29uZGl0aW9uOiB7XHJcblx0XHR0eXBlOiAnaGlkZScsXHJcblx0XHRmaWVsZDogJycsXHJcblx0XHRvcGVyYXRvcjogJycsXHJcblx0XHR2YWx1ZTogJycsXHJcblx0XHRzZXRfdmFsdWU6ICcnLFxyXG5cdH0sXHJcblx0Y29uZGl0aW9uVHlwZXM6IFtcclxuXHRcdHsgbGFiZWw6ICctLScsIHZhbHVlOiAnJyB9LFxyXG5cdFx0e1xyXG5cdFx0XHRsYWJlbDogJ0hpZGUgdGhpcyBmaWVsZCBpZi4uLicsXHJcblx0XHRcdHZhbHVlOiAnaGlkZSdcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxhYmVsOiAnU2hvdyB0aGlzIGZpZWxkIGlmLi4uJyxcclxuXHRcdFx0dmFsdWU6ICdzaG93J1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bGFiZWw6ICdTZXQgdmFsdWUgZm9yIHRoaXMgZmllbGQgaWYuLi4nLFxyXG5cdFx0XHR2YWx1ZTogJ3NldF92YWx1ZScsXHJcblx0XHRcdGNvbmRpdGlvbjogJ2lzU2luZ2xlRmllbGQnLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGNvbmRpdGlvbk9wZXJhdG9yczogW1xyXG5cdFx0eyBsYWJlbDogJy0tJywgdmFsdWU6ICcnIH0sXHJcblx0XHR7IGxhYmVsOiAnRXF1YWwnLCB2YWx1ZTogJ2VxdWFsJyB9LFxyXG5cdFx0eyBsYWJlbDogJ0dyZWF0ZXIgdGhhbicsIHZhbHVlOiAnZ3JlYXRlcicgfSxcclxuXHRcdHsgbGFiZWw6ICdMZXNzIHRoYW4nLCB2YWx1ZTogJ2xlc3MnIH0sXHJcblx0XHR7IGxhYmVsOiAnQmV0d2VlbicsIHZhbHVlOiAnYmV0d2VlbicgfSxcclxuXHRcdHsgbGFiZWw6ICdJbiB0aGUgbGlzdCcsIHZhbHVlOiAnb25lX29mJyB9LFxyXG5cdFx0eyBsYWJlbDogJ0NvbnRhaW4gdGV4dCcsIHZhbHVlOiAnY29udGFpbicgfSxcclxuXHRdLFxyXG59OyIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25kaXRpb25hbFNhdmUoIHByb3BzICkge1xyXG5cdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+O1xyXG59IiwiY29uc3Qge1xyXG5cdEJ1dHRvbixcclxuXHRUZXh0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY2xhc3MgSmV0RGVmYXVsdE1ldGFDb250cm9sIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmFkZE5ld09wdGlvbiA9IHRoaXMuYWRkTmV3T3B0aW9uLmJpbmQoIHRoaXMgKTtcclxuXHR9XHJcblxyXG5cdGdldERlZmF1bHRNZXRhKCkge1xyXG5cdFx0aWYgKCAhIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBBcnJheS5mcm9tKCB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICk7XHJcblx0fVxyXG5cclxuXHJcblx0YWRkTmV3T3B0aW9uKCkge1xyXG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLmdldERlZmF1bHRNZXRhKCk7XHJcblxyXG5cdFx0aXRlbXMucHVzaCgge1xyXG5cdFx0XHRrZXk6ICcnLFxyXG5cdFx0XHR2YWx1ZTogJycsXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZU9wdGlvbiggaW5kZXggKSB7XHJcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKTtcclxuXHRcdGl0ZW1zLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VWYWx1ZSggeyB2YWx1ZSwgbmFtZSwgaWQgfSApIHtcclxuXHJcblx0XHRjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKTtcclxuXHRcdGl0ZW1zWyBpZCBdWyBuYW1lIF0gPSB2YWx1ZTtcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItZmllbGRzLW1hcF9fbGlzdFwiXHJcblx0XHQ+XHJcblx0XHRcdHsgdGhpcy5nZXREZWZhdWx0TWV0YSgpLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXHJcblx0XHRcdFx0XHRrZXk9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlci1pdGVtLScgKyBpbmRleCB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlcGVhdGVyLWl0ZW0tY29sdW1uIGpldC1tYXJnaW4tYm90dG9tLXdyYXBwZXInPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9J21ldGFfa2V5J1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZXRhIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmtleSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBuZXdWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ2tleScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkOiBpbmRleFxyXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9J21ldGFfdmFsdWUnXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldGEgVmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBuZXdWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ3ZhbHVlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGluZGV4XHJcblx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRlci1pdGVtLWNvbHVtbic+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRpY29uPVwiZGlzbWlzc1wiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJSZW1vdmVcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB0aGlzLnJlbW92ZU9wdGlvbiggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0fSApIH1cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uLWFkZC1vcHRpb24nXHJcblx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5hZGROZXdPcHRpb24gfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBfXyggJ0FkZCBOZXcgT3B0aW9uJyApIH1cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKZXREZWZhdWx0TWV0YUNvbnRyb2w7IiwiY29uc3Qge1xyXG5cdFx0ICBUb29sQmFyRmllbGRzLFxyXG5cdFx0ICBHZW5lcmFsRmllbGRzLFxyXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcclxuXHRcdCAgRmllbGRXcmFwcGVyLFxyXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcclxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcclxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBUZXh0Q29udHJvbCxcclxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcclxuXHRcdCAgUGFuZWxCb2R5LFxyXG5cdFx0ICBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxubGV0IHsgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUVkaXQoIHByb3BzICkge1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXHJcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcclxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYmxvY2tOYW1lLCBhdHRySGVscCB9LFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS10b29sYmFyJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2lzX3RpbWVzdGFtcCdcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdJcyBUaW1lc3RhbXAnICkgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuaXNfdGltZXN0YW1wIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2lzX3RpbWVzdGFtcCcgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaXNfdGltZXN0YW1wOiBCb29sZWFuKCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGJsb2NrTmFtZSB9YCB9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17ICdJbnB1dCB0eXBlPVwiZGF0ZVwiJyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj4sXHJcblx0XTtcclxufSIsImltcG9ydCBEYXRlRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9kYXRlLWZpZWxkL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnRGF0ZSBGaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IERhdGVFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcsICdibG9ja05hbWUnIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogJ0RhdGUgRmllbGQnLFxyXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IHtcclxuXHRUb29sQmFyRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0RmllbGRXcmFwcGVyLFxyXG5cdEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxyXG59ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzLFxyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVRpbWVFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxyXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLWdlbmVyYWwnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxyXG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2lzX3RpbWVzdGFtcCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdJcyBUaW1lc3RhbXAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmlzX3RpbWVzdGFtcCB9XHJcblx0XHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2lzX3RpbWVzdGFtcCcgKSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaXNfdGltZXN0YW1wOiBCb29sZWFuKCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XHJcblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1hZHZhbmNlZCcgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxyXG5cdFx0KSxcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgJ0lucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiJyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IERhdGVUaW1lRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9kYXRldGltZS1maWVsZC9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0RhdGV0aW1lIGZpZWxkJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogRGF0ZVRpbWVFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcsICdibG9ja05hbWUnIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogJ0RhdGV0aW1lIEZpZWxkJyxcclxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJyxcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCB7XHJcblx0XHQgIEdlbmVyYWxGaWVsZHMsXHJcblx0XHQgIEFkdmFuY2VkRmllbGRzLFxyXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcclxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcclxuXHRcdCAgUmljaFRleHQsXHJcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgVGV4dGFyZWFDb250cm9sLFxyXG5cdFx0ICBUZXh0Q29udHJvbCxcclxuXHRcdCAgUGFuZWxCb2R5LFxyXG5cdFx0ICBCdXR0b24sXHJcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1CcmVha0VkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9LFxyXG5cdFx0XHQgIGNvbnRleHQsXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdHByb3BzLmlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdGF1dG9Db21wbGV0ZUxhYmVsPXsgZmFsc2UgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnYWRkX25leHRfYnV0dG9uJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgXCJOZXh0XCIgQnV0dG9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuYWRkX25leHRfYnV0dG9uIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2FkZF9uZXh0X2J1dHRvbicgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IGFkZF9uZXh0X2J1dHRvbiA9PiBzZXRBdHRyaWJ1dGVzKCB7IGFkZF9uZXh0X2J1dHRvbiB9ICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTGFiZWwgb2YgcHJvZ3Jlc3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGFiZWxfcHJvZ3Jlc3MgfVxyXG5cdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnbGFiZWxfcHJvZ3Jlc3MnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGxhYmVsX3Byb2dyZXNzOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT1cInBhZ2VfYnJlYWtfZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnBhZ2VfYnJlYWtfZGlzYWJsZWQgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1ZhbGlkYXRpb24gbWVzc2FnZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ3BhZ2VfYnJlYWtfZGlzYWJsZWQnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHBhZ2VfYnJlYWtfZGlzYWJsZWQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19uZXh0LXBhZ2Utd3JhcCcgfT5cclxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMuYWRkX25leHRfYnV0dG9uID8gPEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdGtleT1cIm5leHRfcGFnZV9idXR0b25cIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlcl9fbmV4dC1wYWdlXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J05leHQuLi4nXHJcblx0XHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGxhYmVsID0+IHNldEF0dHJpYnV0ZXMoIHsgbGFiZWwgfSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9CdXR0b24+IDogPHNwYW4+XHJcblx0XHRcdFx0XHR7IF9fKCAnRm9ybSBCcmVhaycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L3NwYW4+IH1cclxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMuYWRkX3ByZXYgJiYgPEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdGtleT1cInByZXZfcGFnZV9idXR0b25cIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlcl9fcHJldi1wYWdlXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1ByZXYuLi4nXHJcblx0XHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucHJldl9sYWJlbCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgcHJldl9sYWJlbCA9PiBzZXRBdHRyaWJ1dGVzKCB7IHByZXZfbGFiZWwgfSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9CdXR0b24+IH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj4sXHJcblx0XTtcclxuXHJcbn0iLCJpbXBvcnQgRm9ybUJyZWFrRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9mb3JtLWJyZWFrLWZpZWxkL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnRm9ybSBCcmVhayBGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogRm9ybUJyZWFrRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnLCAnYmxvY2tOYW1lJyBdLFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0bGFiZWw6ICdOZXh0IFBhZ2UnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0ICogYXMgY2FsY3VsYXRlZCBmcm9tICcuL2NhbGN1bGF0ZWQtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBjaGVja2JveCBmcm9tICcuL2NoZWNrYm94LWZpZWxkJztcclxuaW1wb3J0ICogYXMgY29uZGl0aW9uYWwgZnJvbSAnLi9jb25kaXRpb25hbC1ibG9jayc7XHJcbmltcG9ydCAqIGFzIGRhdGUgZnJvbSAnLi9kYXRlLWZpZWxkJztcclxuaW1wb3J0ICogYXMgZGF0ZXRpbWUgZnJvbSAnLi9kYXRldGltZS1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGZvcm1CcmVhayBmcm9tICcuL2Zvcm0tYnJlYWstZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBncm91cEJyZWFrIGZyb20gJy4vZ3JvdXAtYnJlYWstZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBoZWFkaW5nIGZyb20gJy4vaGVhZGluZy1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGhpZGRlbiBmcm9tICcuL2hpZGRlbi1maWVsZCc7XHJcbmltcG9ydCAqIGFzIG1lZGlhIGZyb20gJy4vbWVkaWEtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBudW1iZXIgZnJvbSAnLi9udW1iZXItZmllbGQnO1xyXG5pbXBvcnQgKiBhcyByYWRpbyBmcm9tICcuL3JhZGlvLWZpZWxkJztcclxuaW1wb3J0ICogYXMgcmFuZ2UgZnJvbSAnLi9yYW5nZS1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHJlcGVhdGVyIGZyb20gJy4vcmVwZWF0ZXItZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBzZWxlY3QgZnJvbSAnLi9zZWxlY3QtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBzdWJtaXQgZnJvbSAnLi9zdWJtaXQtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyB0ZXh0IGZyb20gJy4vdGV4dC1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyB0aW1lIGZyb20gJy4vdGltZS1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHd5c2l3eWcgZnJvbSAnLi93eXNpd3lnLWZpZWxkJztcclxuaW1wb3J0ICogYXMgY29sb3JQaWNrZXIgZnJvbSAnLi9jb2xvci1waWNrZXItZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBwcm9ncmVzc0JhciBmcm9tICcuL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCAqIGFzIHdyYXBwZXJzIGZyb20gXCIuL2Jsb2NrLXdyYXBwZXJzXCI7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHJlZ2lzdGVyQmxvY2tUeXBlLFxyXG5cdCAgfSA9IHdwLmJsb2NrcztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgYXBwbHlGaWx0ZXJzLFxyXG5cdCAgfSA9IHdwLmhvb2tzO1xyXG5cclxuY29uc3QgZmllbGRzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcycsIFtcclxuXHRjYWxjdWxhdGVkLFxyXG5cdGNoZWNrYm94LFxyXG5cdGNvbmRpdGlvbmFsLFxyXG5cdGRhdGV0aW1lLFxyXG5cdGRhdGUsXHJcblx0Zm9ybUJyZWFrLFxyXG5cdGdyb3VwQnJlYWssXHJcblx0aGVhZGluZyxcclxuXHRoaWRkZW4sXHJcblx0bWVkaWEsXHJcblx0bnVtYmVyLFxyXG5cdHJhZGlvLFxyXG5cdHJhbmdlLFxyXG5cdHJlcGVhdGVyLFxyXG5cdHNlbGVjdCxcclxuXHRzdWJtaXQsXHJcblx0dGV4dCxcclxuXHR0ZXh0YXJlYSxcclxuXHR0aW1lLFxyXG5cdHd5c2l3eWcsXHJcblx0Y29sb3JQaWNrZXIsXHJcblx0cHJvZ3Jlc3NCYXIsXHJcbl0gKTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyRm9ybUZpZWxkID0gYmxvY2sgPT4ge1xyXG5cdGlmICggISBibG9jayApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y29uc3QgeyBtZXRhZGF0YSwgc2V0dGluZ3MsIG5hbWUgfSA9IGJsb2NrO1xyXG5cclxuXHRzZXR0aW5ncy5lZGl0ID0gd3JhcHBlcnMud2l0aEN1c3RvbVByb3BzKCBibG9jayApO1xyXG5cclxuXHRyZWdpc3RlckJsb2NrVHlwZSggbmFtZSwge1xyXG5cdFx0Li4ubWV0YWRhdGEsXHJcblx0XHQuLi5zZXR0aW5ncyxcclxuXHR9ICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzb3J0QmxvY2tzKCB7IHNldHRpbmdzOiB7IHRpdGxlOiBhIH0gfSxcclxuXHRcdFx0XHRcdCB7IHNldHRpbmdzOiB7IHRpdGxlOiBiIH0gfSApIHtcclxuXHR0cnkge1xyXG5cdFx0cmV0dXJuIGEubG9jYWxlQ29tcGFyZSggYiApO1xyXG5cdH0gY2F0Y2ggKCBlICkge1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlckZvcm1GaWVsZHMoIGJsb2NrcyA9IGZpZWxkcyApIHtcclxuXHRibG9ja3Muc29ydCggc29ydEJsb2NrcyApO1xyXG5cdGJsb2Nrcy5mb3JFYWNoKCBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZmllbGRzLmhhbmRsZXInLCByZWdpc3RlckZvcm1GaWVsZCApICk7XHJcbn1cclxuIiwiY29uc3Qge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG59ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyb3VwQnJlYWtFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzIGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19ncm91cC1icmVhaycgfT5cclxuXHRcdFx0XHQ8c3Bhbj57IF9fKCAnR1JPVVAgQlJFQUsnICkgfTwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IEdyb3VwQnJlYWtFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL2dyb3VwLWJyZWFrLWZpZWxkL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnR3JvdXAgQnJlYWsgRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IEdyb3VwQnJlYWtFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcclxuXHRleGFtcGxlOiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiY29uc3Qge1xyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0RmllbGRXcmFwcGVyLFxyXG59ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGluZ0VkaXQoIHByb3BzICkge1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH0+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHZhbHVlSWZFbXB0eUxhYmVsPXsgJ0hlYWRpbmcnIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgSGVhZGluZ0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvaGVhZGluZy1maWVsZC9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0hlYWRpbmcgRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IEhlYWRpbmdFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogJ0hlYWRpbmcgRmllbGQnLFxyXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBNRURJQSA9ICdqZXQtZm9ybXMvbWVkaWEtZmllbGQnO1xyXG5jb25zdCBGT1JNX0JSRUFLID0gJ2pldC1mb3Jtcy9mb3JtLWJyZWFrLWZpZWxkJztcclxuY29uc3QgREFURSA9ICdqZXQtZm9ybXMvZGF0ZS1maWVsZCc7XHJcbmNvbnN0IERBVEVUSU1FID0gJ2pldC1mb3Jtcy9kYXRldGltZS1maWVsZCc7XHJcbmNvbnN0IFJBRElPID0gJ2pldC1mb3Jtcy9yYWRpby1maWVsZCc7XHJcbmNvbnN0IENIRUNLQk9YID0gJ2pldC1mb3Jtcy9jaGVja2JveC1maWVsZCc7XHJcbmNvbnN0IFNFTEVDVCA9ICdqZXQtZm9ybXMvc2VsZWN0LWZpZWxkJztcclxuY29uc3QgUkFOR0UgPSAnamV0LWZvcm1zL3JhbmdlLWZpZWxkJztcclxuY29uc3QgUkVQRUFURVIgPSAnamV0LWZvcm1zL3JlcGVhdGVyLWZpZWxkJztcclxuY29uc3QgVEVYVCA9ICdqZXQtZm9ybXMvdGV4dC1maWVsZCc7XHJcbmNvbnN0IFRJTUUgPSAnamV0LWZvcm1zL3RpbWUtZmllbGQnO1xyXG5cclxuXHJcbmNvbnN0IG1lc3NhZ2VzQ29uZmlnID0gW1xyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2lzX3RpbWVzdGFtcCcsXHJcblx0XHR0bzogWyBEQVRFLCBEQVRFVElNRSBdLFxyXG5cdFx0bWVzc2FnZTogX18oIGBDaGVjayB0aGlzIGlmIHlvdSB3YW50IHRvIHNlbmQgdmFsdWUgb2YgdGhpcyBcclxuXHRcdGZpZWxkIGFzIHRpbWVzdGFtcCBpbnN0ZWFkIG9mIHBsYWluIGRhdGV0aW1lYCApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdkZWZhdWx0JyxcclxuXHRcdHRvOiBbIERBVEUgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnUGxhaW4gZGF0ZSBzaG91bGQgYmUgaW4geXl5eS1tbS1kZCBmb3JtYXQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2RlZmF1bHQnLFxyXG5cdFx0dG86IFsgREFURVRJTUUgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnUGxhaW4gZGF0ZXRpbWUgc2hvdWxkIGJlIGluIHl5eXktTU0tZGRUaGg6bW0gZm9ybWF0JyApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdwYWdlX2JyZWFrX2Rpc2FibGVkJyxcclxuXHRcdHRvOiBbIEZPUk1fQlJFQUsgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgVGV4dCB0byBzaG93IGlmIG5leHQgcGFnZSBidXR0b24gaXMgZGlzYWJsZWQuIFxyXG5cdFx0Rm9yIGV4YW1wbGUgLSBcIkZpbGwgcmVxdWlyZWQgZmllbGRzXCIgZXRjLmAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnaW5zZXJ0X2F0dGFjaG1lbnQnLFxyXG5cdFx0dG86IFsgTUVESUEgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgSWYgY2hlY2tlZCBuZXcgYXR0YWNobWVudCB3aWxsIGJlIGluc2VydGVkIGZvciB1cGxvYWRlZCBmaWxlLiBcclxuXHRcdE5vdGU6IHdvcmsgb25seSBmb3IgbG9nZ2VkLWluIHVzZXJzIWAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnbWF4X2ZpbGVzJyxcclxuXHRcdHRvOiBbIE1FRElBIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ0lmIG5vdCBzZXQgYWxsb3cgdG8gdXBsb2FkIDEgZmlsZScgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnbWF4X3NpemUnLFxyXG5cdFx0dG86IFsgTUVESUEgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnTWInIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2FsbG93ZWRfbWltZXMnLFxyXG5cdFx0dG86IFsgTUVESUEgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgSWYgbm8gTUlNRSB0eXBlIHNlbGVjdGVkIHdpbGwgYWxsb3cgYWxsIHR5cGVzLiBcclxuXHRcdEhvbGQgZG93biB0aGUgQ3RybCAod2luZG93cykgLyBDb21tYW5kIChNYWMpIGJ1dHRvbiB0byBzZWxlY3QgbXVsdGlwbGUgb3B0aW9ucy5gIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ3ZhbHVlX2Zyb21fbWV0YScsXHJcblx0XHR0bzogWyBSQURJTywgQ0hFQ0tCT1gsIFNFTEVDVCBdLFxyXG5cdFx0bWVzc2FnZTogX18oIGBCeSBkZWZhdWx0IHBvc3QvdGVybSBJRCBpcyB1c2VkIGFzIHZhbHVlLiBIZXJlIHlvdSBjYW4gXHJcblx0XHRzZXQgbWV0YSBmaWVsZCBuYW1lIHRvIHVzZSBpdHMgdmFsdWUgYXMgZm9ybSBmaWVsZCB2YWx1ZWAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleScsXHJcblx0XHR0bzogWyBSQURJTywgQ0hFQ0tCT1gsIFNFTEVDVCBdLFxyXG5cdFx0bWVzc2FnZTogX18oIGBIZXJlIHlvdSBjYW4gc2V0IG1ldGEgZmllbGQgbmFtZSB0byB1c2UgaXRzIHZhbHVlIFxyXG5cdFx0YXMgY2FsY3VsYXRlZCB2YWx1ZSBmb3IgY3VycmVudCBmb3JtIGZpZWxkYCApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdnZW5lcmF0b3JfZmllbGQnLFxyXG5cdFx0dG86IFsgUkFESU8sIENIRUNLQk9YLCBTRUxFQ1QgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgRm9yIE51bWJlcnMgcmFuZ2UgZ2VuZXJhdG9yIHNldCBmaWVsZCB3aXRoIG1heCByYW5nZSB2YWx1ZWAgKSxcclxuXHRcdGNvbmRpdGlvbnM6IHtcclxuXHRcdFx0Z2VuZXJhdG9yX2Z1bmN0aW9uOiAnbnVtX3JhbmdlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnc3dpdGNoX29uX2NoYW5nZScsXHJcblx0XHR0bzogWyBTRUxFQ1QgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgQ2hlY2sgdGhpcyB0byBzd2l0Y2ggcGFnZSB0byBuZXh0IG9uIGN1cnJlbnQgdmFsdWUgY2hhbmdlYCApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdwcmVmaXhfc3VmZml4JyxcclxuXHRcdHRvOiBbIFJBTkdFIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ0ZvciBzcGFjZSBiZWZvcmUgb3IgYWZ0ZXIgdGV4dCB1c2U6ICZuYnNwOycgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnY2FsY19oaWRkZW4nLFxyXG5cdFx0dG86IFsgUkVQRUFURVIgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnQ2hlY2sgdGhpcyB0byBoaWRlIGNhbGN1bGF0ZWQgZmllbGQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2lucHV0X21hc2tfZGVmYXVsdCcsXHJcblx0XHR0bzogWyBURVhUIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYEV4YW1wbGVzOiAoOTk5KSA5OTktOTk5OSAtIHN0YXRpYyBtYXNrLCA5LWF7MSwzfTl7MSwzfSAtIG1hc2sgd2l0aCBkeW5hbWljIHN5bnRheCBcclxuXHRcdERlZmF1bHQgbWFza2luZyBkZWZpbml0aW9uczogOSAtIG51bWVyaWMsIGEgLSBhbHBoYWJldGljYWwsICogLSBhbHBoYW51bWVyaWNgIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2lucHV0X21hc2tfZGF0ZXRpbWVfbGluaycsXHJcblx0XHR0bzogWyBURVhUIF0sXHJcblx0XHRtZXNzYWdlOiBgaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2svYmxvYi81LngvUkVBRE1FX2RhdGUubWRgXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdkZWZhdWx0JyxcclxuXHRcdHRvOiBbIFRJTUUgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnUGxhaW4gdGltZSBzaG91bGQgYmUgaW4gaGg6bW06c3MgZm9ybWF0JyApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdsYWJlbF9wcm9ncmVzcycsXHJcblx0XHR0bzogWyBGT1JNX0JSRUFLIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYFRvIHNldC9jaGFuZ2UgYSBsYXN0IHByb2dyZXNzIG5hbWUgYWRkIGEgRm9ybSBCcmVhayBGaWVsZCBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIGZvcm0uYCApXHJcblx0fSxcclxuXTtcclxuXHJcblxyXG5leHBvcnQgeyBtZXNzYWdlc0NvbmZpZyB9OyIsImltcG9ydCB7IGhpZGRlblZhbHVlcyB9IGZyb20gXCIuL29wdGlvbnNcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEdlbmVyYWxGaWVsZHMsXHJcblx0XHQgIEFkdmFuY2VkRmllbGRzLFxyXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IGdldENvbnZlcnRlZE5hbWUgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgSW5zcGVjdG9yQ29udHJvbHMsXHJcblx0XHQgIHVzZUJsb2NrUHJvcHMsXHJcblx0XHQgIFJpY2hUZXh0LFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBTZWxlY3RDb250cm9sLFxyXG5cdFx0ICBQYW5lbEJvZHksXHJcblx0XHQgIENhcmQsXHJcblx0XHQgIENhcmRIZWFkZXIsXHJcblx0XHQgIENhcmRCb2R5LFxyXG5cdFx0ICBCYXNlQ29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZGVuRWRpdCggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgaXNTZWxlY3RlZCxcclxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IHNldER5bmFtaWNOYW1lID0gbmV3VmFsdWUgPT4ge1xyXG5cdFx0aWYgKCBuZXdWYWx1ZVxyXG5cdFx0XHQmJiAoICEgYXR0cmlidXRlcy5uYW1lIHx8ICdoaWRkZW5fZmllbGRfbmFtZScgPT09IGF0dHJpYnV0ZXMubmFtZSApXHJcblx0XHQpIHtcclxuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBuYW1lOiBuZXdWYWx1ZSB9IClcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBjaGVja0ZpZWxkVmFsdWVJbnB1dCA9ICgpID0+IDw+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRrZXk9J2ZpZWxkX3ZhbHVlJ1xyXG5cdFx0XHRsYWJlbD1cIkZpZWxkIFZhbHVlXCJcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInRvcFwiXHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZF92YWx1ZSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRfdmFsdWU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRzZXREeW5hbWljTmFtZSggbmV3VmFsdWUgKVxyXG5cdFx0XHR9IH1cclxuXHRcdFx0b3B0aW9ucz17IGhpZGRlblZhbHVlcyB9XHJcblx0XHQvPlxyXG5cdFx0eyBbICdwb3N0X21ldGEnLCAndXNlcl9tZXRhJyBdLmluY2x1ZGVzKCBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlICkgJiYgPFRleHRDb250cm9sXHJcblx0XHRcdGtleT1cImhpZGRlbl92YWx1ZV9maWVsZFwiXHJcblx0XHRcdGxhYmVsPVwiTWV0YSBGaWVsZCB0byBHZXQgVmFsdWUgRnJvbVwiXHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5oaWRkZW5fdmFsdWVfZmllbGQgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGhpZGRlbl92YWx1ZV9maWVsZDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdHsgJ3F1ZXJ5X3ZhcicgPT09IGF0dHJpYnV0ZXMuZmllbGRfdmFsdWUgJiYgPFRleHRDb250cm9sXHJcblx0XHRcdGtleT1cInF1ZXJ5X3Zhcl9rZXlcIlxyXG5cdFx0XHRsYWJlbD1cIlF1ZXJ5IFZhcmlhYmxlIEtleVwiXHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5xdWVyeV92YXJfa2V5IH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBxdWVyeV92YXJfa2V5OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdFx0eyAnY3VycmVudF9kYXRlJyA9PT0gYXR0cmlidXRlcy5maWVsZF92YWx1ZSAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PVwiZGF0ZV9mb3JtYXRcIlxyXG5cdFx0XHRsYWJlbD1cIkZvcm1hdFwiXHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kYXRlX2Zvcm1hdCB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZGF0ZV9mb3JtYXQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPiB9XHJcblx0XHR7ICdtYW51YWxfaW5wdXQnID09PSBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJoaWRkZW5fdmFsdWVcIlxyXG5cdFx0XHRsYWJlbD1cIlZhbHVlXCJcclxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmhpZGRlbl92YWx1ZSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaGlkZGVuX3ZhbHVlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdDwvPjtcclxuXHJcblx0Y29uc3QgeyBsYWJlbCA9ICdQbGVhc2Ugc2V0IGBGaWVsZCBWYWx1ZWAnIH0gPSBoaWRkZW5WYWx1ZXMuZmluZCggb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gYXR0cmlidXRlcy5maWVsZF92YWx1ZSApO1xyXG5cdGNvbnN0IHJlc3VsdExhYmVsID0gWyBsYWJlbCBdO1xyXG5cclxuXHRzd2l0Y2ggKCBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlICkge1xyXG5cdFx0Y2FzZSAncG9zdF9tZXRhJzpcclxuXHRcdGNhc2UgJ3VzZXJfbWV0YSc6XHJcblx0XHRcdHJlc3VsdExhYmVsLnB1c2goIGF0dHJpYnV0ZXMuaGlkZGVuX3ZhbHVlX2ZpZWxkICk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAncXVlcnlfdmFyJzpcclxuXHRcdFx0cmVzdWx0TGFiZWwucHVzaCggYXR0cmlidXRlcy5xdWVyeV92YXJfa2V5ICk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnY3VycmVudF9kYXRlJzpcclxuXHRcdFx0cmVzdWx0TGFiZWwucHVzaCggYXR0cmlidXRlcy5kYXRlX2Zvcm1hdCApO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ21hbnVhbF9pbnB1dCc6XHJcblx0XHRcdHJlc3VsdExhYmVsLnB1c2goIGF0dHJpYnV0ZXMuaGlkZGVuX3ZhbHVlICk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxyXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfT5cclxuXHRcdFx0XHRcdHsgY2hlY2tGaWVsZFZhbHVlSW5wdXQoKSB9XHJcblx0XHRcdFx0PC9GaWVsZFNldHRpbmdzV3JhcHBlcj5cclxuXHRcdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxyXG5cdFx0KSxcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8Q2FyZCBpc0VsZXZhdGVkPlxyXG5cdFx0XHRcdDxDYXJkSGVhZGVyPlxyXG5cdFx0XHRcdFx0PFJpY2hUZXh0XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdoaWRkZW5fZmllbGRfbmFtZS4uLidcclxuXHRcdFx0XHRcdFx0YWxsb3dlZEZvcm1hdHM9eyBbXSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5uYW1lIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuYW1lID0+IHNldEF0dHJpYnV0ZXMoIHsgbmFtZSB9ICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0NhcmRIZWFkZXI+XHJcblx0XHRcdFx0PENhcmRCb2R5PlxyXG5cdFx0XHRcdFx0eyBpc1NlbGVjdGVkICYmIGNoZWNrRmllbGRWYWx1ZUlucHV0KCkgfVxyXG5cdFx0XHRcdFx0eyAhIGlzU2VsZWN0ZWQgJiYgcmVzdWx0TGFiZWwuam9pbiggJzogJyApIH1cclxuXHRcdFx0XHQ8L0NhcmRCb2R5PlxyXG5cdFx0XHQ8L0NhcmQ+XHJcblx0XHQ8L2Rpdj4sXHJcblx0XTtcclxufTtcclxuIiwiaW1wb3J0IEhlYWRpbmdFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL2hpZGRlbi1maWVsZC9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0hpZGRlbiBGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogSGVhZGluZ0VkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2Jsb2NrTmFtZScgXSxcclxuXHRleGFtcGxlOiB7XHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdGZpZWxkX3ZhbHVlOiAncG9zdF9pZCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCB7IFRvb2xzIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgaGlkZGVuVmFsdWVzID0gVG9vbHMud2l0aFBsYWNlaG9sZGVyKCBbXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdwb3N0X2lkJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBJRCcsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3Bvc3RfdGl0bGUnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0IFRpdGxlJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAncG9zdF91cmwnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0L1BhZ2UgVVJMJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAncG9zdF9tZXRhJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBNZXRhJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAndXNlcl9pZCcsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgSUQnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICd1c2VyX2VtYWlsJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgVXNlciBFbWFpbCcsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3VzZXJfbmFtZScsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgTmFtZScsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3VzZXJfbWV0YScsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgTWV0YScsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2F1dGhvcl9pZCcsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgQXV0aG9yIElEJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnYXV0aG9yX2VtYWlsJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBBdXRob3IgRW1haWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdhdXRob3JfbmFtZScsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgQXV0aG9yIE5hbWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdxdWVyeV92YXInLFxyXG5cdFx0bGFiZWw6IF9fKCAnVVJMIFF1ZXJ5IFZhcmlhYmxlJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnY3VycmVudF9kYXRlJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgRGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ21hbnVhbF9pbnB1dCcsXHJcblx0XHRsYWJlbDogX18oICdNYW51YWwgSW5wdXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG5cdH0sXHJcbl0gKTtcclxuXHJcbmV4cG9ydCB7IGhpZGRlblZhbHVlcyB9OyIsImltcG9ydCB7XHJcblx0dXNlckFjY2VzcyxcclxuXHR2YWx1ZUZvcm1hdHMsXHJcbn0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBUb29sQmFyRmllbGRzLFxyXG5cdFx0ICBHZW5lcmFsRmllbGRzLFxyXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcclxuXHRcdCAgRmllbGRXcmFwcGVyLFxyXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxyXG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcclxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBTZWxlY3RDb250cm9sLFxyXG5cdFx0ICBUb2dnbGVDb250cm9sLFxyXG5cdFx0ICBQYW5lbEJvZHksXHJcblx0XHQgIF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcclxuXHRcdCAgX19leHBlcmltZW50YWxJbnB1dENvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IE51bWJlckNvbnRyb2wsIElucHV0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmlmICggdHlwZW9mIElucHV0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XHJcbn1cclxuXHJcbmNvbnN0IGxvY2FsaXplRGF0YSA9IHdpbmRvdy5qZXRGb3JtTWVkaWFGaWVsZERhdGE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWRpYUVkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH0sXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxyXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfT5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nYWxsb3dlZF91c2VyX2NhcCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1VzZXIgYWNjZXNzJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxsb3dlZF91c2VyX2NhcCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGFsbG93ZWRfdXNlcl9jYXA6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyB1c2VyQWNjZXNzIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR7ICdhbnlfdXNlcicgIT09IGF0dHJpYnV0ZXMuYWxsb3dlZF91c2VyX2NhcCAmJiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2luc2VydF9hdHRhY2htZW50J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW5zZXJ0IGF0dGFjaG1lbnQnICkgfVxyXG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5pbnNlcnRfYXR0YWNobWVudCB9XHJcblx0XHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2luc2VydF9hdHRhY2htZW50JyApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaW5zZXJ0X2F0dGFjaG1lbnQ6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdHsgKCAnYW55X3VzZXInICE9PSBhdHRyaWJ1dGVzLmFsbG93ZWRfdXNlcl9jYXAgJiYgYXR0cmlidXRlcy5pbnNlcnRfYXR0YWNobWVudCApICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0ndmFsdWVfZm9ybWF0J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRmllbGQgdmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52YWx1ZV9mb3JtYXQgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyB2YWx1ZV9mb3JtYXQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyB2YWx1ZUZvcm1hdHMgfVxyXG5cdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdtYXhfZmlsZXMnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXhpbXVtIGFsbG93ZWQgZmlsZXMgdG8gdXBsb2FkJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdtYXhfZmlsZXMnICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4X2ZpbGVzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbWF4X2ZpbGVzOiBwYXJzZUludCggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXhpbXVtIHNpemUgaW4gTWInICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGtleT0nbWF4X3NpemUnXHJcblx0XHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ21heF9zaXplJyApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heF9zaXplIH1cclxuXHRcdFx0XHRcdFx0c3RlcD17IDAuMDEgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IG1heF9zaXplOiBOdW1iZXIoIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRtdWx0aXBsZVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZpZWxkLW1pbWUtdHlwZXMnXHJcblx0XHRcdFx0XHRcdGtleT0nYWxsb3dlZF9taW1lcydcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0FsbG93IE1JTUUgdHlwZXMnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2FsbG93ZWRfbWltZXMnICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxsb3dlZF9taW1lcyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGFsbG93ZWRfbWltZXM6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBsb2NhbGl6ZURhdGEubWltZV90eXBlcyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XHJcblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cclxuXHRcdCksXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PElucHV0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9ja19uZXcnICkgfVxyXG5cdFx0XHRcdFx0dHlwZT17ICdmaWxlJyB9XHJcblx0XHRcdFx0XHRkaXNhYmxlZD17IHRydWUgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+LFxyXG5cdF07XHJcbn0iLCJpbXBvcnQgTWVkaWFFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL21lZGlhLWZpZWxkL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnTWVkaWEgRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IE1lZGlhRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnLCAnYmxvY2tOYW1lJyBdLFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0bGFiZWw6ICdUaHVtYm5haWwgJiBmaWxlJyxcclxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJyxcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCB7IFRvb2xzIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB1c2VyQWNjZXNzID0gVG9vbHMud2l0aFBsYWNlaG9sZGVyKCBbXHJcblx0e1xyXG5cdFx0dmFsdWU6IFwiYWxsXCIsXHJcblx0XHRsYWJlbDogXCJBbnkgcmVnaXN0ZXJlZCB1c2VyXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiBcInVwbG9hZF9maWxlc1wiLFxyXG5cdFx0bGFiZWw6IFwiQW55IHVzZXIsIHdobyBhbGxvd2VkIHRvIHVwbG9hZCBmaWxlc1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogXCJlZGl0X3Bvc3RzXCIsXHJcblx0XHRsYWJlbDogXCJBbnkgdXNlciwgd2hvIGFsbG93ZWQgdG8gZWRpdCBwb3N0c1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogXCJhbnlfdXNlclwiLFxyXG5cdFx0bGFiZWw6IFwiQW55IHVzZXIgKCBpbmNsLiBHdWVzdCApXCJcclxuXHR9XHJcbl0gKTtcclxuXHJcbmNvbnN0IHZhbHVlRm9ybWF0cyA9IFRvb2xzLndpdGhQbGFjZWhvbGRlciggW1xyXG5cdHtcclxuXHRcdFwidmFsdWVcIjogXCJpZFwiLFxyXG5cdFx0XCJsYWJlbFwiOiBcIkF0dGFjaG1lbnQgSURcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcInVybFwiLFxyXG5cdFx0XCJsYWJlbFwiOiBcIkF0dGFjaG1lbnQgVVJMXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwidmFsdWVcIjogXCJib3RoXCIsXHJcblx0XHRcImxhYmVsXCI6IFwiQXJyYXkgd2l0aCBhdHRhY2htZW50IElEIGFuZCBVUkxcIlxyXG5cdH1cclxuXSApO1xyXG5cclxuZXhwb3J0IHtcclxuXHR1c2VyQWNjZXNzLFxyXG5cdHZhbHVlRm9ybWF0c1xyXG59OyIsImNvbnN0IHtcclxuXHRcdCAgVG9vbEJhckZpZWxkcyxcclxuXHRcdCAgR2VuZXJhbEZpZWxkcyxcclxuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXHJcblx0XHQgIEZpZWxkV3JhcHBlcixcclxuXHRcdCAgRmllbGRTZXR0aW5nc1dyYXBwZXIsXHJcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgSW5zcGVjdG9yQ29udHJvbHMsXHJcblx0XHQgIHVzZUJsb2NrUHJvcHMsXHJcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgUGFuZWxCb2R5LFxyXG5cdFx0ICBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbCxcclxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBJbnB1dENvbnRyb2wsIE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pZiAoIHR5cGVvZiBJbnB1dENvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdElucHV0Q29udHJvbCA9IF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sO1xyXG59XHJcblxyXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VOdW1iZXJWYWx1ZSA9ICgga2V5LCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgWyBrZXkgXTogbmV3VmFsdWUgPyBwYXJzZUZsb2F0KCBuZXdWYWx1ZSApIDogbnVsbCB9ICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiAoXHJcblx0XHRcdDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbiBWYWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0a2V5PSdtaW4nXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5taW4gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IGNoYW5nZU51bWJlclZhbHVlKCAnbWluJywgbmV3VmFsdWUgKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01heCBWYWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0a2V5PSdtYXgnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXggfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IGNoYW5nZU51bWJlclZhbHVlKCAnbWF4JywgbmV3VmFsdWUgKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N0ZXAnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGtleT0nc3RlcCdcclxuXHRcdFx0XHRcdFx0c3RlcD17IDAuMDEgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc3RlcCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdzdGVwJywgbmV3VmFsdWUgKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XHJcblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cclxuXHRcdCksXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdG1pbj17IGF0dHJpYnV0ZXMubWluIHx8IDAgfVxyXG5cdFx0XHRcdFx0bWF4PXsgYXR0cmlidXRlcy5tYXggfHwgMTAwMCB9XHJcblx0XHRcdFx0XHRzdGVwPXsgYXR0cmlidXRlcy5zdGVwIHx8IDEgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+LFxyXG5cdF07XHJcbn0iLCJpbXBvcnQgTnVtYmVyRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9udW1iZXItZmllbGQvYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdOdW1iZXIgRmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBOdW1iZXJFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogJ051bWJlciBGaWVsZCcsXHJcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLicsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiAnSW5wdXQgeW91ciBudW1iZXIuLi4nXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiY29uc3QgeyBGaWVsZFNldHRpbmdzV3JhcHBlciB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgU2VsZWN0Q29udHJvbCwgVGV4dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxyXG5cdFx0ICBSaWNoVGV4dCxcclxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3QgeyBSYXdIVE1MIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9LFxyXG5cdFx0XHQgIGNvbnRleHQsXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgWyBwcm9ncmVzc0h0bWwsIHNldFByb2dyZXNzSHRtbCBdID0gdXNlU3RhdGUoICcnICk7XHJcblxyXG5cdGNvbnN0IGdldFByb2dyZXNzVHlwZUh0bWwgPSB0eXBlID0+IHtcclxuXHRcdGNvbnN0IHByb2dyZXNzID0gSmV0Rm9ybVByb2dyZXNzQmFyLnByb2dyZXNzX3R5cGVzLmZpbmQoIGVsZW0gPT4gdHlwZSA9PT0gZWxlbS52YWx1ZSApXHJcblxyXG5cdFx0aWYgKCAhIHByb2dyZXNzICkge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHByb2dyZXNzLmh0bWw7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRzZXRQcm9ncmVzc0h0bWwoIGdldFByb2dyZXNzVHlwZUh0bWwoIGF0dHJpYnV0ZXMucHJvZ3Jlc3NfdHlwZSApICk7XHJcblx0fSwgW10gKVxyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRTZXR0aW5nc1dyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyAxIDwgSmV0Rm9ybVByb2dyZXNzQmFyLnByb2dyZXNzX3R5cGVzLmxlbmd0aCAmJiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3Byb2dyZXNzX3R5cGUnICkgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Byb2dyZXNzIEJhciBUeXBlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnByb2dyZXNzX3R5cGUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBwcm9ncmVzc190eXBlID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBwcm9ncmVzc190eXBlIH0gKVxyXG5cdFx0XHRcdFx0XHRzZXRQcm9ncmVzc0h0bWwoIGdldFByb2dyZXNzVHlwZUh0bWwoIHByb2dyZXNzX3R5cGUgKSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgSmV0Rm9ybVByb2dyZXNzQmFyLnByb2dyZXNzX3R5cGVzIH1cclxuXHRcdFx0XHQvPiB9XHJcblx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8UmF3SFRNTD57IHByb2dyZXNzSHRtbCB9PC9SYXdIVE1MPlxyXG5cdFx0PC9kaXY+LFxyXG5cdF07XHJcblxyXG59IiwiaW1wb3J0IFByb2dyZXNzYmFyIGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL3Byb2dyZXNzLWJhci9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1Byb2dyZXNzIEJhcicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogUHJvZ3Jlc3NiYXIsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcclxuXHRleGFtcGxlOiB7XHJcblx0XHRhdHRyaWJ1dGVzOiB7fSxcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzLFxyXG59OyIsImltcG9ydCB7IFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgU2VsZWN0UmFkaW9DaGVjayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2tcIjtcclxuaW1wb3J0IEN1c3RvbVRlbXBsYXRlQ29udHJvbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9jdXN0b20tdGVtcGxhdGUnO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBUb29sQmFyRmllbGRzLFxyXG5cdFx0ICBHZW5lcmFsRmllbGRzLFxyXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcclxuXHRcdCAgRmllbGRDb250cm9sLFxyXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7IFRvZ2dsZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWRpb0VkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgaXNTZWxlY3RlZCxcclxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfSxcclxuXHRcdFx0ICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXInICkgfVxyXG5cdFx0XHRcdHNjcmlwdERhdGE9eyB3aW5kb3cuSmV0Rm9ybVJhZGlvRmllbGREYXRhIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2sgeyAuLi5wcm9wcyB9PlxyXG5cdFx0XHRcdDxDdXN0b21UZW1wbGF0ZUNvbnRyb2xzXHJcblx0XHRcdFx0XHRsaXN0aW5nVHlwZXM9eyB3aW5kb3cuSmV0Rm9ybVJhZGlvRmllbGREYXRhLmxpc3RpbmdzX2xpc3QgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdzd2l0Y2hfb25fY2hhbmdlJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N3aXRjaCBwYWdlIG9uIGNoYW5nZScgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zd2l0Y2hfb25fY2hhbmdlIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ3N3aXRjaF9vbl9jaGFuZ2UnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHN3aXRjaF9vbl9jaGFuZ2U6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdFx0XHR0eXBlPSdjdXN0b21fc2V0dGluZ3MnXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnY3VzdG9tU2V0dGluZ3NGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9TZWxlY3RSYWRpb0NoZWNrPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBSYWRpb0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvcmFkaW8tZmllbGQvYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdSYWRpbyBGaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFJhZGlvRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnLCAnYmxvY2tOYW1lJyBdLFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0bGFiZWw6ICdSYWRpbyBGaWVsZCcsXHJcblx0XHRcdGZpZWxkX29wdGlvbnM6IFtcclxuXHRcdFx0XHR7IGxhYmVsOiAnRmlyc3QgT3B0aW9uJywgdmFsdWU6ICcnIH0sXHJcblx0XHRcdFx0eyBsYWJlbDogJ1NlY29uZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcclxuXHRcdFx0XHR7IGxhYmVsOiAnVGhpcmQgT3B0aW9uJywgdmFsdWU6ICcnIH0sXHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiY29uc3Qge1xyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0RmllbGRXcmFwcGVyLFxyXG59ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXHJcblx0X19leHBlcmltZW50YWxJbnB1dENvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IHVzZVN0YXRlIH0gPSB3cC5lbGVtZW50O1xyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCwgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFuZ2VFZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3QgWyByYW5nZVZhbHVlLCBzZXRSYW5nZVZhbHVlIF0gPSB1c2VTdGF0ZSggNTAgKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdHByb3BzLmlzU2VsZWN0ZWQgJiYgKFxyXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFBhbmVsQm9keVxyXG5cdFx0XHRcdFx0dGl0bGU9eyBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW4gVmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGtleT0nbWluJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWluIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWluOiBwYXJzZUZsb2F0KCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01heCBWYWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0a2V5PSdtYXgnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXggfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtYXg6IHBhcnNlRmxvYXQoIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3RlcCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0a2V5PSdzdGVwJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc3RlcCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHN0ZXA6IHBhcnNlRmxvYXQoIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdwcmVmaXgnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZSBwcmVmaXgnICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucHJlZml4IH1cclxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAncHJlZml4X3N1ZmZpeCcgKSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHByZWZpeDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdzdWZmaXgnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZSBzdWZmaXgnICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc3VmZml4IH1cclxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAncHJlZml4X3N1ZmZpeCcgKSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHN1ZmZpeDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHQpLFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR3cmFwQ2xhc3Nlcz17IFtcclxuXHRcdFx0XHRcdCdyYW5nZS13cmFwJ1xyXG5cdFx0XHRcdF0gfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyYW5nZS1mbGV4LXdyYXBcIj5cclxuXHRcdFx0XHRcdDxJbnB1dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdFx0dHlwZT17ICdyYW5nZScgfVxyXG5cdFx0XHRcdFx0XHRtaW49eyBhdHRyaWJ1dGVzLm1pbiB8fCAwIH1cclxuXHRcdFx0XHRcdFx0bWF4PXsgYXR0cmlidXRlcy5tYXggfHwgMTAwIH1cclxuXHRcdFx0XHRcdFx0c3RlcD17IGF0dHJpYnV0ZXMuc3RlcCB8fCAxIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRSYW5nZVZhbHVlIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZC12YWx1ZScgfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXZhbHVlLXByZWZpeCcgfT57IGF0dHJpYnV0ZXMucHJlZml4IH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuPnsgcmFuZ2VWYWx1ZSB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdmFsdWUtc3VmZml4JyB9PnsgYXR0cmlidXRlcy5zdWZmaXggfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgUmFuZ2VFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL3JhbmdlLWZpZWxkL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnUmFuZ2UgRmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBSYW5nZUVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcclxuXHRleGFtcGxlOiB7XHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdGxhYmVsOiAnUmFuZ2UgRmllbGQnLFxyXG5cdFx0XHRwcmVmaXg6ICdwcmljZTogJyxcclxuXHRcdFx0c3VmZml4OiAnJCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQge1xyXG5cdGNhbGNUeXBlLFxyXG5cdG1hbmFnZUl0ZW1zQ291bnQsXHJcbn0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBUb29sQmFyRmllbGRzLFxyXG5cdFx0ICBHZW5lcmFsRmllbGRzLFxyXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcclxuXHRcdCAgRmllbGRXcmFwcGVyLFxyXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcblx0XHQgIFRvb2xzLFxyXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdFx0ICBJbm5lckJsb2NrcyxcclxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcclxuXHRcdCAgUmljaFRleHQsXHJcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgc2VsZWN0LFxyXG5cdCAgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBUZXh0YXJlYUNvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIFBhbmVsQm9keSxcclxuXHRcdCAgQnV0dG9uLFxyXG5cdFx0ICBQb3BvdmVyLFxyXG5cdFx0ICBCYXNlQ29udHJvbCxcclxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVwZWF0ZXJFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCBbIHNob3dNYWNyb3MsIHNldFNob3dNYWNyb3MgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH0sXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50KCk7XHJcblxyXG5cdGNvbnN0IG1ldGEgPSBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHRjb25zdCBsYWJlbCA9IFRvb2xzLmdldExhYmVsKCBtZXRhLCBhdHRyaWJ1dGVzICk7XHJcblxyXG5cdGNvbnN0IGluc2VydE1hY3JvcyA9ICggbWFjcm9zICkgPT4ge1xyXG5cdFx0Y29uc3QgZm9ybXVsYSA9IGF0dHJpYnV0ZXMuY2FsY19mb3JtdWxhIHx8ICcnO1xyXG5cdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBjYWxjX2Zvcm11bGE6IGZvcm11bGEgKyAnJUZJRUxEOjonICsgbWFjcm9zICsgJyUnIH0gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0PlxyXG5cdFx0XHR7ICdjdXN0b20nID09PSBhdHRyaWJ1dGVzLnJlcGVhdGVyX2NhbGNfdHlwZSAmJiA8QnV0dG9uXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0J1dHRvbicgKSB9XHJcblx0XHRcdFx0aXNUZXJ0aWFyeVxyXG5cdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRpY29uPXsgc2hvd01hY3JvcyA/ICduby1hbHQnIDogJ2FkbWluLXRvb2xzJyB9XHJcblx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dNYWNyb3MoIHRvZ2dsZSA9PiAhIHRvZ2dsZSApIH1cclxuXHRcdFx0Lz4gfVxyXG5cdFx0XHR7IHNob3dNYWNyb3MgJiYgPFBvcG92ZXJcclxuXHRcdFx0XHRwb3NpdGlvbj17ICdib3R0b20gbGVmdCcgfVxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdQb3BvdmVyJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgZm9ybUZpZWxkcy5sZW5ndGggJiYgPFBhbmVsQm9keSB0aXRsZT17ICdGb3JtIEZpZWxkcycgfT5cclxuXHRcdFx0XHRcdHsgZm9ybUZpZWxkcy5tYXAoICggeyB2YWx1ZSB9LCBpbmRleCApID0+IDxkaXZcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2ZpZWxkXycgKyB2YWx1ZSArIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aXNMaW5rXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGluc2VydE1hY3JvcyggdmFsdWUgKVxyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQ+eyAnJUZJRUxEOjonICsgdmFsdWUgKyAnJScgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+ICkgfVxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdDwvUG9wb3Zlcj4gfVxyXG5cdFx0PC9Ub29sQmFyRmllbGRzPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8UGFuZWxCb2R5XHJcblx0XHRcdFx0dGl0bGU9eyBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUGFuZWxCb2R5JyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J21hbmFnZV9pdGVtc19jb3VudCdcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYW5hZ2UgcmVwZWF0ZXIgaXRlbXMgY291bnQnICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1hbmFnZV9pdGVtc19jb3VudCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBtYW5hZ2VfaXRlbXNfY291bnQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IG1hbmFnZUl0ZW1zQ291bnQgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyAnbWFudWFsbHknID09PSBhdHRyaWJ1dGVzLm1hbmFnZV9pdGVtc19jb3VudCAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nbmV3X2l0ZW1fbGFiZWwnXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQWRkIE5ldyBJdGVtIExhYmVsJyApIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5uZXdfaXRlbV9sYWJlbCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbmV3X2l0ZW1fbGFiZWw6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0XHR7ICdkeW5hbWljYWxseScgPT09IGF0dHJpYnV0ZXMubWFuYWdlX2l0ZW1zX2NvdW50ICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J21hbmFnZV9pdGVtc19jb3VudF9maWVsZCdcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdGaWVsZCBpdGVtcyBjb3VudCcgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFuYWdlX2l0ZW1zX2NvdW50X2ZpZWxkIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IG1hbmFnZV9pdGVtc19jb3VudF9maWVsZDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdyZXBlYXRlcl9jYWxjX3R5cGUnXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlIHJlcGVhdGVyIHJvdyB2YWx1ZScgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucmVwZWF0ZXJfY2FsY190eXBlIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IHJlcGVhdGVyX2NhbGNfdHlwZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgY2FsY1R5cGUgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyAnY3VzdG9tJyA9PT0gYXR0cmlidXRlcy5yZXBlYXRlcl9jYWxjX3R5cGUgJiYgPGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX3Jvdy1ub3RpY2VcIj5cclxuXHRcdFx0XHRcdHsgX18oICdTZXQgbWF0aCBmb3JtdWxhIHRvIGNhbGN1bGF0ZSBmaWVsZCB2YWx1ZS4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICdGb3IgZXhhbXBsZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0JUZJRUxEOjpxdWFudGl0eSUqJU1FVEE6OnByaWNlJTxici8+PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICdXaGVyZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdC1cclxuXHRcdFx0XHRcdHsgX18oICclRklFTEQ6OnF1YW50aXR5JSAtIG1hY3JvcyBmb3IgZm9ybSBmaWVsZCB2YWx1ZS4gXCJxdWFudGl0eVwiIC0gaXMgYSBmaWVsZCBuYW1lIHRvIGdldCB2YWx1ZSBmcm9tJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0XHQtXHJcblx0XHRcdFx0XHR7IF9fKCAnJU1FVEE6OnByaWNlJSAtIG1hY3JvcyBmb3IgY3VycmVudCBwb3N0IG1ldGEgdmFsdWUuIFwicHJpY2VcIiAtIGlzIGEgbWV0YSBrZXkgdG8gZ2V0IHZhbHVlIGZyb20nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz48YnIvPlxyXG5cdFx0XHRcdDwvZGl2PiB9XHJcblxyXG5cclxuXHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ0ZyYWdtZW50JyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XHJcblx0XHRcdHsgJ2N1c3RvbScgPT09IGF0dHJpYnV0ZXMucmVwZWF0ZXJfY2FsY190eXBlICYmIDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm1zX19jYWxjLWZvcm11bGEtZWRpdG9yXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy13cmFwXCI+XHJcblx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT1cImNhbGNfZm9ybXVsYVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRpb24gRm9ybXVsYSBmb3IgUmVwZWF0ZXInICkgfVxyXG5cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgY2FsY19mb3JtdWxhOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+IH1cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdGNoaWxkcmVuUG9zaXRpb249J2JvdHRvbSdcclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxJbm5lckJsb2Nrc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3JlcGVhdGVyLWZpZWxkcycgKSB9XHJcblx0XHRcdFx0XHRyZW5kZXJBcHBlbmRlcj17ICgpID0+IChcclxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXIga2V5PXsgdW5pcUtleSggJ0J1dHRvbkJsb2NrQXBwZW5kZXInICkgfS8+XHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yZW1vdmUnIH1cclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0PiZ0aW1lczs8L0J1dHRvbj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcwLjdlbScgfSB9Lz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2FjdGlvbnNcIj5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX25ldycgfVxyXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFJpY2hUZXh0XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0FkZCBOZXcnXHJcblx0XHRcdFx0XHRcdFx0YWxsb3dlZEZvcm1hdHM9eyBbXSB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm5ld19pdGVtX2xhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld19pdGVtX2xhYmVsID0+IHNldEF0dHJpYnV0ZXMoIHsgbmV3X2l0ZW1fbGFiZWwgfSApIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PixcclxuXHRdO1xyXG59IiwiaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL3JlcGVhdGVyLWZpZWxkL2Jsb2NrLmpzb25cIjtcclxuaW1wb3J0IFJlcGVhdGVyRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBSZXBlYXRlclNhdmUgZnJvbSBcIi4vc2F2ZVwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdSZXBlYXRlciBGaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFJlcGVhdGVyRWRpdCxcclxuXHRzYXZlOiBSZXBlYXRlclNhdmUsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0bGFiZWw6ICdNdWx0aXBsZSBmaWVsZHMnLFxyXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxyXG5cdFx0fSxcclxuXHRcdGlubmVyQmxvY2tzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnamV0LWZvcm1zL3RleHQtZmllbGQnLFxyXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0XHRcdGxhYmVsOiAnSXRlbSBUaXRsZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnamV0LWZvcm1zL3JhZGlvLWZpZWxkJyxcclxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdFx0XHRsYWJlbDogJ0l0ZW0gUmFkaW8nLFxyXG5cdFx0XHRcdFx0ZmllbGRfb3B0aW9uczogW1xyXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiAnRmlyc3QgT3B0aW9uJywgdmFsdWU6ICcnIH0sXHJcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdTZWNvbmQgT3B0aW9uJywgdmFsdWU6ICcnIH0sXHJcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdUaGlyZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgY2FsY1R5cGUgPSBbXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdkZWZhdWx0JyxcclxuXHRcdGxhYmVsOiBfXyggJ0RlZmF1bHQgKHJldHVybnMgcm93cyBjb3VudCknIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnY3VzdG9tJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1c3RvbSAoY2FsY3VsYXRlIGN1c3RvbSB2YWx1ZSBmb3IgZWFjaCByb3cpJyApXHJcblx0fVxyXG5dO1xyXG5cclxuY29uc3QgbWFuYWdlSXRlbXNDb3VudCA9IFtcclxuXHR7XHJcblx0XHR2YWx1ZTogJ21hbnVhbGx5JyxcclxuXHRcdGxhYmVsOiBfXyggJ01hbnVhbGx5JyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2R5bmFtaWNhbGx5JyxcclxuXHRcdGxhYmVsOiBfXyggJ0R5bmFtaWNhbGx5IChnZXQgY291bnQgZnJvbSBmb3JtIGZpZWxkKScgKVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcblx0Y2FsY1R5cGUsXHJcblx0bWFuYWdlSXRlbXNDb3VudFxyXG59OyIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXBlYXRlclNhdmUoIHByb3BzICkge1xyXG5cdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2stcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IFNlbGVjdFJhZGlvQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0VG9vbEJhckZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEZpZWxkQ29udHJvbCxcclxuXHRIb3Jpem9udGFsTGluZVxyXG59ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdEJsb2NrQ29udHJvbHMsXHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wc1xyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRUb2dnbGVDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdEVkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlclxyXG5cdFx0XHRcdHNjcmlwdERhdGE9eyB3aW5kb3cuSmV0Rm9ybVNlbGVjdEZpZWxkRGF0YSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrIHsgLi4ucHJvcHMgfT5cclxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdzd2l0Y2hfb25fY2hhbmdlJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N3aXRjaCBwYWdlIG9uIGNoYW5nZScgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zd2l0Y2hfb25fY2hhbmdlIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ3N3aXRjaF9vbl9jaGFuZ2UnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHN3aXRjaF9vbl9jaGFuZ2U6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdFx0XHR0eXBlPSdjdXN0b21fc2V0dGluZ3MnXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnY3VzdG9tU2V0dGluZ3NGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9TZWxlY3RSYWRpb0NoZWNrPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBTZWxlY3RFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL3NlbGVjdC1maWVsZC9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1NlbGVjdCBGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogU2VsZWN0RWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnLCAnYmxvY2tOYW1lJyBdLFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0bGFiZWw6ICdTZWxlY3QgRmllbGQnLFxyXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxyXG5cdFx0XHRmaWVsZF9vcHRpb25zOiBbXHJcblx0XHRcdFx0eyBsYWJlbDogJ0Nob29zZSBvcHRpb24uLi4nLCB2YWx1ZTogJycgfSxcclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IGpldEVuZ2luZVZlcnNpb24gfSA9IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YTtcclxuY29uc3QgeyB2ZXJzaW9uQ29tcGFyZSB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3QgbGlzdEZyb20gPSBbXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcIm1hbnVhbF9pbnB1dFwiLFxyXG5cdFx0XCJsYWJlbFwiOiBfXyggJ01hbnVhbCBJbnB1dCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcInBvc3RzXCIsXHJcblx0XHRcImxhYmVsXCI6IF9fKCAnUG9zdHMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwidmFsdWVcIjogXCJ0ZXJtc1wiLFxyXG5cdFx0XCJsYWJlbFwiOiBfXyggJ1Rlcm1zJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0fSxcclxuXHR7XHJcblx0XHRcInZhbHVlXCI6IFwibWV0YV9maWVsZFwiLFxyXG5cdFx0XCJsYWJlbFwiOiBfXyggJ01ldGEgRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwidmFsdWVcIjogXCJnZW5lcmF0ZVwiLFxyXG5cdFx0XCJsYWJlbFwiOiBfXyggJ0dlbmVyYXRlIER5bmFtaWNhbGx5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0fSxcclxuXTtcclxuXHJcbmlmICggXCJcIiAhPT0gamV0RW5naW5lVmVyc2lvbiApIHtcclxuXHRsaXN0RnJvbS5wdXNoKCB7XHJcblx0XHRcInZhbHVlXCI6IFwiZ2xvc3NhcnlcIixcclxuXHRcdFwibGFiZWxcIjogX18oICdHbG9zc2FyeScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdH0gKVxyXG59XHJcblxyXG5leHBvcnQgeyBsaXN0RnJvbSB9OyIsImNvbnN0IHtcclxuXHRcdCAgR2VuZXJhbEZpZWxkcyxcclxuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXHJcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxyXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEJ1dHRvbixcclxuXHRcdCAgU2VsZWN0Q29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBSaWNoVGV4dCxcclxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IGRlZmF1bHRDbGFzc2VzID0gWyAnamV0LWZvcm0tYnVpbGRlcl9fYWN0aW9uLWJ1dHRvbicgXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbkJ1dHRvbkVkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBjbGFzc2VzQnV0dG9uID0gKCkgPT4ge1xyXG5cdFx0aWYgKCAhIGF0dHJpYnV0ZXMuYWN0aW9uX3R5cGUgKSB7XHJcblx0XHRcdHJldHVybiBkZWZhdWx0Q2xhc3NlcztcclxuXHRcdH1cclxuXHRcdGNvbnN0IGFjdGlvbiA9IEpldEZvcm1BY3Rpb25CdXR0b24uYWN0aW9ucy5maW5kKCBlbGVtID0+IGF0dHJpYnV0ZXMuYWN0aW9uX3R5cGUgPT09IGVsZW0udmFsdWUgKVxyXG5cclxuXHRcdGlmICggISBhY3Rpb24gKSB7XHJcblx0XHRcdHJldHVybiBkZWZhdWx0Q2xhc3NlcztcclxuXHRcdH1cclxuXHRcdGlmICggISBhdHRyaWJ1dGVzLmxhYmVsICkge1xyXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGxhYmVsOiBhY3Rpb24ucHJlc2V0X2xhYmVsIH0gKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gWyAuLi5kZWZhdWx0Q2xhc3NlcywgYWN0aW9uLmJ1dHRvbl9jbGFzcyBdO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNsYXNzZXNXcmFwcGVyID0gKCkgPT4ge1xyXG5cdFx0aWYgKCAhIGF0dHJpYnV0ZXMuYWN0aW9uX3R5cGUgKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGFjdGlvbiA9IEpldEZvcm1BY3Rpb25CdXR0b24uYWN0aW9ucy5maW5kKCBlbGVtID0+IGF0dHJpYnV0ZXMuYWN0aW9uX3R5cGUgPT09IGVsZW0udmFsdWUgKTtcclxuXHJcblx0XHRpZiAoICEgYWN0aW9uICkge1xyXG5cdFx0XHRyZXR1cm4gW107XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFsgLi4uZGVmYXVsdENsYXNzZXMsIGFjdGlvbi53cmFwcGVyX2NsYXNzIF07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgWyBidXR0b25DbGFzc2VzLCBzZXRCdXR0b25DbGFzc2VzIF0gPSB1c2VTdGF0ZSggY2xhc3Nlc0J1dHRvbiApO1xyXG5cdGNvbnN0IFsgd3JhcHBlckNsYXNzZXMsIHNldFdyYXBwZXJDbGFzc2VzIF0gPSB1c2VTdGF0ZSggY2xhc3Nlc1dyYXBwZXIgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRzZXRCdXR0b25DbGFzc2VzKCBjbGFzc2VzQnV0dG9uKCkgKTtcclxuXHRcdHNldFdyYXBwZXJDbGFzc2VzKCBjbGFzc2VzV3JhcHBlcigpICk7XHJcblx0fSwgWyBhdHRyaWJ1dGVzLmFjdGlvbl90eXBlIF0gKTtcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoIHsgY2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3Nlcy5qb2luKCAnICcgKSB9ICk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHRhdXRvQ29tcGxldGVMYWJlbD17IGZhbHNlIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAnRmllbGRTZXR0aW5nc1dyYXBwZXInICkgfT5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2FjdGlvbl90eXBlJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdCdXR0b24gQWN0aW9uIFR5cGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWN0aW9uX3R5cGUgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IEpldEZvcm1BY3Rpb25CdXR0b24uYWN0aW9ucyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IGFjdGlvbl90eXBlID0+IHNldEF0dHJpYnV0ZXMoIHsgYWN0aW9uX3R5cGUgfSApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkU2V0dGluZ3NXcmFwcGVyPlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdzdWJtaXQtd3JhcCcgKSB9XHJcblx0XHRcdHsgLi4uYmxvY2tQcm9wcyB9XHJcblx0XHQ+XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRjbGFzc05hbWU9eyBidXR0b25DbGFzc2VzLmpvaW4oICcgJyApIH1cclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxSaWNoVGV4dFxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0lucHV0IFN1Ym1pdCBsYWJlbC4uLidcclxuXHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbGFiZWwgPT4gc2V0QXR0cmlidXRlcyggeyBsYWJlbCB9ICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0PC9kaXY+LFxyXG5cdF07XHJcbn0iLCJpbXBvcnQgQWN0aW9uQnV0dG9uRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9zdWJtaXQtZmllbGQvYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdBY3Rpb24gQnV0dG9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBBY3Rpb25CdXR0b25FZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnLCAnYXR0ckhlbHAnIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogJ0FjdGlvbiBCdXR0b24nXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IHtcclxuXHRmaWVsZFR5cGVzTGlzdCxcclxuXHRtYXNrUGxhY2Vob2xkZXJzTGlzdCxcclxuXHRtYXNrVHlwZXNMaXN0LFxyXG5cdG1hc2tWaXNpYmlsaXRpZXNMaXN0LFxyXG59IGZyb20gXCIuL29wdGlvbnNcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgVG9vbEJhckZpZWxkcyxcclxuXHRcdCAgR2VuZXJhbEZpZWxkcyxcclxuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXHJcblx0XHQgIEZpZWxkV3JhcHBlcixcclxuXHRcdCAgRmllbGRTZXR0aW5nc1dyYXBwZXIsXHJcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgSW5zcGVjdG9yQ29udHJvbHMsXHJcblx0XHQgIHVzZUJsb2NrUHJvcHMsXHJcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXHJcblx0XHQgIFBhbmVsQm9keSxcclxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEVkaXQoIHByb3BzICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgaXNTZWxlY3RlZCxcclxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfSxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VOdW1iZXJWYWx1ZSA9ICgga2V5LCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gKCBuZXdWYWx1ZSAmJiBuZXdWYWx1ZSA+IDAgKSA/IHBhcnNlSW50KCBuZXdWYWx1ZSApIDogbnVsbDtcclxuXHJcblx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IFsga2V5IF06IHZhbHVlIH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfT5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdmaWVsZF90eXBlJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ZpZWxkIFR5cGUnICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZpZWxkX3R5cGUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRfdHlwZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgZmllbGRUeXBlc0xpc3QgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW4gbGVuZ3RoIChzeW1ib2xzKScgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRrZXk9J21pbmxlbmd0aCdcclxuXHRcdFx0XHRcdG1pbj17IDEgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1pbmxlbmd0aCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21pbmxlbmd0aCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXggbGVuZ3RoIChzeW1ib2xzKScgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRrZXk9J21heGxlbmd0aCdcclxuXHRcdFx0XHRcdG1pbj17IDEgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heGxlbmd0aCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21heGxlbmd0aCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdlbmFibGVfaW5wdXRfbWFzaycgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NldCBJbnB1dCBNYXNrJyApIH1cclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmVuYWJsZV9pbnB1dF9tYXNrIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBfXyggJ0NoZWNrIHRoaXMgdG8gc2V0dXAgc3BlY2lmaWMgaW5wdXQgZm9ybWF0IGZvciB0aGUgY3VycmVudCBmaWVsZCcgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZW5hYmxlX2lucHV0X21hc2s6IG5ld1ZhbCB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgYXR0cmlidXRlcy5lbmFibGVfaW5wdXRfbWFzayAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J21hc2tfdHlwZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01hc2sgdHlwZScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1hc2tfdHlwZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1hc2tfdHlwZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1hc2tUeXBlc0xpc3QgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2lucHV0X21hc2snXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdJbnB1dCBtYXNrJyApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmlucHV0X21hc2sgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBpbnB1dF9tYXNrOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdHsgKCAhIGF0dHJpYnV0ZXMubWFza190eXBlICkgJiYgPGRpdiBjbGFzc05hbWU9eyAnaGVscC1pbnB1dCcgfT5cclxuXHRcdFx0XHRcdFx0eyBhdHRySGVscCggJ2lucHV0X21hc2tfZGVmYXVsdCcgKSB9XHJcblx0XHRcdFx0XHQ8L2Rpdj4gfVxyXG5cclxuXHRcdFx0XHRcdHsgJ2RhdGV0aW1lJyA9PT0gYXR0cmlidXRlcy5tYXNrX3R5cGUgJiYgPGRpdiBjbGFzc05hbWU9eyAnaGVscC1pbnB1dCcgfT5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ0V4YW1wbGVzOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH0gZGQvbW0veXl5eSwgbW0vZGQveXl5eTxici8+XHJcblx0XHRcdFx0XHRcdHsgX18oICdNb3JlIGluZm8gLSAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9eyBhdHRySGVscCggJ2lucHV0X21hc2tfZGF0ZXRpbWVfbGluaycgKSB9XHJcblx0XHRcdFx0XHRcdCAgIHRhcmdldD0nX2JsYW5rJz57IF9fKCAnaGVyZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gfVxyXG5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nbWFza192aXNpYmlsaXR5J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWFzayB2aXNpYmlsaXR5JyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFza192aXNpYmlsaXR5IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWFza192aXNpYmlsaXR5OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgbWFza1Zpc2liaWxpdGllc0xpc3QgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nbWFza19wbGFjZWhvbGRlcidcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01hc2sgcGxhY2Vob2xkZXInICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXNrX3BsYWNlaG9sZGVyIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWFza19wbGFjZWhvbGRlcjogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1hc2tQbGFjZWhvbGRlcnNMaXN0IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0XHQ8L0ZpZWxkU2V0dGluZ3NXcmFwcGVyPlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgfVxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+LFxyXG5cdF07XHJcbn07XHJcbiIsImltcG9ydCBUZXh0RWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy90ZXh0LWZpZWxkL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnVGV4dCBGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogVGV4dEVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0bGFiZWw6ICdUZXh0IEZpZWxkJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdJbnB1dCB5b3VyIHRleHQuLi4nLFxyXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGZpZWxkVHlwZXNMaXN0ID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAndGV4dCcsXHJcblx0XHRsYWJlbDogX18oICdUZXh0JyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2VtYWlsJyxcclxuXHRcdGxhYmVsOiBfXyggJ0VtYWlsJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3VybCcsXHJcblx0XHRsYWJlbDogX18oICdVcmwnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAndGVsJyxcclxuXHRcdGxhYmVsOiBfXyggJ1RlbCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdwYXNzd29yZCcsXHJcblx0XHRsYWJlbDogX18oICdQYXNzd29yZCcgKVxyXG5cdH0sXHJcbl07XHJcblxyXG5jb25zdCBtYXNrVHlwZXNMaXN0ID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAnJyxcclxuXHRcdGxhYmVsOiBfXyggJ0RlZmF1bHQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnZGF0ZXRpbWUnLFxyXG5cdFx0bGFiZWw6IF9fKCAnRGF0ZXRpbWUnIClcclxuXHR9LFxyXG5dO1xyXG5cclxuY29uc3QgbWFza1Zpc2liaWxpdGllc0xpc3QgPSBbXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdhbHdheXMnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQWx3YXlzJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2hvdmVyJyxcclxuXHRcdGxhYmVsOiBfXyggJ0hvdmVyJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2ZvY3VzJyxcclxuXHRcdGxhYmVsOiBfXyggJ0ZvY3VzJyApXHJcblx0fSxcclxuXTtcclxuXHJcbmNvbnN0IG1hc2tQbGFjZWhvbGRlcnNMaXN0ID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAnXycsXHJcblx0XHRsYWJlbDogJ18nXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJy0nLFxyXG5cdFx0bGFiZWw6ICctJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICcqJyxcclxuXHRcdGxhYmVsOiAnKidcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAn4oCiJyxcclxuXHRcdGxhYmVsOiAn4oCiJ1xyXG5cdH0sXHJcbl07XHJcblxyXG5leHBvcnQge1xyXG5cdGZpZWxkVHlwZXNMaXN0LFxyXG5cdG1hc2tUeXBlc0xpc3QsXHJcblx0bWFza1BsYWNlaG9sZGVyc0xpc3QsXHJcblx0bWFza1Zpc2liaWxpdGllc0xpc3RcclxufTsiLCJjb25zdCB7XHJcblx0XHQgIFRvb2xCYXJGaWVsZHMsXHJcblx0XHQgIEdlbmVyYWxGaWVsZHMsXHJcblx0XHQgIEFkdmFuY2VkRmllbGRzLFxyXG5cdFx0ICBGaWVsZFdyYXBwZXIsXHJcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxyXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRhcmVhQ29udHJvbCxcclxuXHRcdCAgUGFuZWxCb2R5LFxyXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0YXJlYUVkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH0sXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlTnVtYmVyVmFsdWUgPSAoIGtleSwgbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9ICggbmV3VmFsdWUgJiYgbmV3VmFsdWUgPiAwICkgPyBwYXJzZUludCggbmV3VmFsdWUgKSA6IG51bGw7XHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IFsga2V5IF06IHZhbHVlIH0gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfT5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxGaWVsZFNldHRpbmdzV3JhcHBlciB7IC4uLnByb3BzIH0+XHJcblx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW4gbGVuZ3RoIChzeW1ib2xzKScgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRrZXk9J21pbmxlbmd0aCdcclxuXHRcdFx0XHRcdG1pbj17IDEgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1pbmxlbmd0aCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21pbmxlbmd0aCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXggbGVuZ3RoIChzeW1ib2xzKScgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRrZXk9J21heGxlbmd0aCdcclxuXHRcdFx0XHRcdG1pbj17IDEgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heGxlbmd0aCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21heGxlbmd0aCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+LFxyXG5cdF07XHJcbn1cclxuIiwiaW1wb3J0IFRleHRhcmVhRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy90ZXh0YXJlYS1maWVsZC9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1RleHRhcmVhIEZpZWxkJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogVGV4dGFyZWFFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxuXHRleGFtcGxlOiB7XHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdGxhYmVsOiAnVGV4dGFyZWEgRmllbGQnLFxyXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiY29uc3Qge1xyXG5cdFRvb2xCYXJGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRGaWVsZFdyYXBwZXIsXHJcbn0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IElucHV0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIElucHV0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyAnSW5wdXQgdHlwZT1cInRpbWVcIicgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBUaW1lRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy90aW1lLWZpZWxkL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnVGltZSBGaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFRpbWVFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxuXHRleGFtcGxlOiB7XHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdGxhYmVsOiAnVGltZSBGaWVsZCcsXHJcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLidcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCB7XHJcblx0VG9vbEJhckZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEZpZWxkV3JhcHBlcixcclxufSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wc1xyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3lzaXd5Z0VkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7IGVkaXRQcm9wczogeyB1bmlxS2V5IH0sIGlzU2VsZWN0ZWQgfSA9IHByb3BzO1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIChcclxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHQpLFxyXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcblxyXG59IiwiaW1wb3J0IFd5c2l3eWdFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL3d5c2l3eWctZmllbGQvYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdXeXNpd3lnIEZpZWxkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBXeXNpd3lnRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogJ1d5c2l3eWcgRmllbGQnLFxyXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCwgU2VsZWN0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgamV0RW5naW5lVmVyc2lvbiB9ID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhO1xyXG5jb25zdCB7IHZlcnNpb25Db21wYXJlIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBDdXN0b21UZW1wbGF0ZUNvbnRyb2xzKCBwcm9wcyApIHtcclxuXHRjb25zdCB7XHJcblx0XHRcdCAgbGlzdGluZ1R5cGVzLFxyXG5cdFx0XHQgIGF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcclxuXHRcdFx0ICBpc1NlbGVjdGVkLFxyXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9LFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IHsgZmllbGRfb3B0aW9uc19mcm9tID0gJycgfSA9IGF0dHJpYnV0ZXM7XHJcblxyXG5cdHJldHVybiAoIHZlcnNpb25Db21wYXJlKCBqZXRFbmdpbmVWZXJzaW9uLCAnMi40LjAnLCAnPj0nIClcclxuXHRcdCYmIFsgJ3Rlcm1zJywgJ3Bvc3RzJywgJ2dlbmVyYXRlJyBdLmluY2x1ZGVzKCBmaWVsZF9vcHRpb25zX2Zyb20gKSApXHJcblx0XHQmJiA8PlxyXG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICd1c2VfY3VzdG9tX3RlbXBsYXRlJyApIH1cclxuXHRcdFx0XHRsYWJlbD17IF9fKCAnVXNlIGN1c3RvbSB0ZW1wbGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5jdXN0b21faXRlbV90ZW1wbGF0ZSB9XHJcblx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnY3VzdG9tX2l0ZW1fdGVtcGxhdGUnICkgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgY3VzdG9tX2l0ZW1fdGVtcGxhdGUgPT4gc2V0QXR0cmlidXRlcyggeyBjdXN0b21faXRlbV90ZW1wbGF0ZSB9ICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHR7IGF0dHJpYnV0ZXMuY3VzdG9tX2l0ZW1fdGVtcGxhdGUgJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0Q29udHJvbC1jdXN0b21faXRlbV90ZW1wbGF0ZV9pZCcgKSB9XHJcblx0XHRcdFx0bGFiZWw9eyBfXyggJ0Nob29zZSBjdXN0b20gdGVtcGxhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmN1c3RvbV9pdGVtX3RlbXBsYXRlX2lkIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgbGlzdGluZ1R5cGVzIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IGN1c3RvbV9pdGVtX3RlbXBsYXRlX2lkID0+IHNldEF0dHJpYnV0ZXMoIHsgY3VzdG9tX2l0ZW1fdGVtcGxhdGVfaWQgfSApIH1cclxuXHRcdFx0Lz4gfVxyXG5cdFx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21UZW1wbGF0ZUNvbnRyb2xzOyIsImNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzLCBhZGRGaWx0ZXIgfSA9IHdwLmhvb2tzO1xyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdlbmVyYXRvckZpZWxkcyggZ2VuRnVuY3Rpb24sIHByb3BzICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IGF0dHJIZWxwIH0sXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0c3dpdGNoICggZ2VuRnVuY3Rpb24gKSB7XHJcblx0XHRjYXNlICdudW1fcmFuZ2VfbWFudWFsJzpcclxuXHRcdFx0cmV0dXJuIDw+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3RhcnQgb2YgcmFuZ2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRzdGVwPXsgMC4wMSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nZW5lcmF0b3JfbnVtYmVyc19taW4gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9udW1iZXJzX21pbjogTnVtYmVyKCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRW5kIG9mIHJhbmdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0c3RlcD17IDAuMDEgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX251bWJlcnNfbWF4IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBnZW5lcmF0b3JfbnVtYmVyc19tYXg6IE51bWJlciggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N0ZXAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRrZXk9J3N0ZXAnXHJcblx0XHRcdFx0XHRcdHN0ZXA9eyAwLjAxIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9udW1iZXJzX3N0ZXAgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9udW1iZXJzX3N0ZXA6IE51bWJlciggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHQ8Lz47XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnNlbGVjdC5yYWRpby5jaGVjay5nZW5lcmF0b3IuY29udHJvbHMnLCA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRrZXk9J2dlbmVyYXRvcl9maWVsZCdcclxuXHRcdFx0XHRsYWJlbD0nRmllbGQgTmFtZSdcclxuXHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX2ZpZWxkIH1cclxuXHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdnZW5lcmF0b3JfZmllbGQnLCBhdHRyaWJ1dGVzICkgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZ2VuZXJhdG9yX2ZpZWxkOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdC8+LCBnZW5GdW5jdGlvbiwgcHJvcHMgKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdlbmVyYXRvckFkZGl0aW9uYWxGaWVsZHMoIGdlbkZ1bmN0aW9uLCBwcm9wcyApIHtcclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGVkaXRQcm9wczogeyBhdHRySGVscCB9LFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdHN3aXRjaCAoIGdlbkZ1bmN0aW9uICkge1xyXG5cdFx0Y2FzZSAnbnVtX3JhbmdlX21hbnVhbCc6XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIGFwcGx5RmlsdGVycyggJ2pldC5mYi5zZWxlY3QucmFkaW8uY2hlY2suZ2VuZXJhdG9yLmFkZGl0aW9uYWxDb250cm9scycsIDw+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2Zyb21fZ2VuZXJhdG9yX192YWx1ZV9mcm9tX21ldGEnXHJcblx0XHRcdFx0XHRsYWJlbD0nVmFsdWUgZnJvbSBtZXRhIGZpZWxkJ1xyXG5cdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAndmFsdWVfZnJvbV9tZXRhJyApIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mcm9tX2dlbmVyYXRvcl9fdmFsdWVfZnJvbV9tZXRhIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmcm9tX2dlbmVyYXRvcl9fdmFsdWVfZnJvbV9tZXRhOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5J1xyXG5cdFx0XHRcdFx0bGFiZWw9J0NhbGN1bGF0ZWQgdmFsdWUgZnJvbSBtZXRhIGZpZWxkJ1xyXG5cdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleScgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC8+LCBnZW5GdW5jdGlvbiwgcHJvcHMgKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBGcm9tR2VuZXJhdG9yc0ZpZWxkcyggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgZWRpdFByb3BzOiB7IGF0dHJIZWxwIH0sXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRrZXk9J2dlbmVyYXRvcl9mdW5jdGlvbidcclxuXHRcdFx0bGFiZWw9J0dlbmVyYXRvciBGdW5jdGlvbidcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX2Z1bmN0aW9uIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZ2VuZXJhdG9yX2Z1bmN0aW9uOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0XHRvcHRpb25zPXsgd2luZG93LkpldEZvcm1TZWxlY3RGaWVsZERhdGEuZ2VuZXJhdG9yc19saXN0IH1cclxuXHRcdC8+XHJcblx0XHR7IGdldEdlbmVyYXRvckZpZWxkcyggYXR0cmlidXRlcy5nZW5lcmF0b3JfZnVuY3Rpb24sIHByb3BzICkgfVxyXG5cdFx0eyBnZXRHZW5lcmF0b3JBZGRpdGlvbmFsRmllbGRzKCBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9mdW5jdGlvbiwgcHJvcHMgKSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcm9tR2VuZXJhdG9yc0ZpZWxkczsiLCJjb25zdCB7XHJcblx0UmVwZWF0ZXJXaXRoU3RhdGUsXHJcblx0QWN0aW9uTW9kYWwsXHJcbn0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0QnV0dG9uLFxyXG5cdFRleHRDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCBhZGROZXdPcHRpb24gPSB7XHJcblx0bGFiZWw6ICcnLFxyXG5cdHZhbHVlOiAnJyxcclxuXHRjYWxjdWxhdGU6ICcnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBGcm9tTWFudWFsRmllbGRzKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgWyBzaG93TWFudWFsTW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRhdHRyaWJ1dGVzXHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHJcblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XHJcblx0XHRzZXRTaG93TW9kYWwoIHRvZ2dsZSA9PiAhIHRvZ2dsZSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25VcGRhdGVPcHRpb25zID0gaXRlbXMgPT4ge1xyXG5cdFx0LyogUmVtb3ZlIGVtcHR5IG9wdGlvbnMgKi9cclxuXHRcdGNvbnN0IGZpZWxkX29wdGlvbnMgPSBpdGVtcy5maWx0ZXIoIG9wdGlvbiA9PiB7XHJcblx0XHRcdHJldHVybiAoIEJvb2xlYW4oIG9wdGlvbi52YWx1ZSApIHx8IEJvb2xlYW4oIG9wdGlvbi5jYWxjdWxhdGUgKSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRfb3B0aW9ucyB9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtSGVhZGluZyA9ICggeyBjdXJyZW50SXRlbSwgaW5kZXggfSApID0+IHtcclxuXHRcdGNvbnN0IGxlZnRQYXJ0ID0gWyBgIyR7IGluZGV4ICsgMSB9YCBdO1xyXG5cdFx0Y29uc3QgcmlnaHRQYXJ0ID0gW107XHJcblxyXG5cdFx0aWYgKCBjdXJyZW50SXRlbS5sYWJlbCApIHtcclxuXHRcdFx0cmlnaHRQYXJ0LnB1c2goIGBMYWJlbCBbJHsgY3VycmVudEl0ZW0ubGFiZWwgfV1gICk7XHJcblx0XHR9XHJcblx0XHRpZiAoIGN1cnJlbnRJdGVtLnZhbHVlICkge1xyXG5cdFx0XHRyaWdodFBhcnQucHVzaCggYFZhbHVlIFskeyBjdXJyZW50SXRlbS52YWx1ZSB9XWAgKTtcclxuXHRcdH1cclxuXHRcdGlmICggY3VycmVudEl0ZW0uY2FsY3VsYXRlICkge1xyXG5cdFx0XHRyaWdodFBhcnQucHVzaCggYENhbGN1bGF0ZSBbJHsgY3VycmVudEl0ZW0uY2FsY3VsYXRlIH1dYCApO1xyXG5cdFx0fVxyXG5cdFx0bGVmdFBhcnQucHVzaCggcmlnaHRQYXJ0LmpvaW4oICcgfCAnICkgKVxyXG5cclxuXHRcdHJldHVybiBsZWZ0UGFydC5qb2luKCAnICcgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT0namV0LWZvcm0vbWFuYWdlLW1hbnVhbC1pdGVtcyc+XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdG9uQ2xpY2s9eyB0b2dnbGVNb2RhbCB9XHJcblx0XHRcdGljb249eyAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMTVweCdcclxuXHRcdFx0fSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgX18oICdNYW5hZ2UgSXRlbXMnICkgfVxyXG5cdFx0PC9CdXR0b24+XHJcblx0XHR7IHNob3dNYW51YWxNb2RhbCAmJiA8QWN0aW9uTW9kYWxcclxuXHRcdFx0dGl0bGU9eyAnRWRpdCBNYW51YWwgT3B0aW9ucycgfVxyXG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IHRvZ2dsZU1vZGFsIH1cclxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdD5cclxuXHRcdFx0eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIDxSZXBlYXRlcldpdGhTdGF0ZVxyXG5cdFx0XHRcdFx0aXRlbXM9eyBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMgfVxyXG5cdFx0XHRcdFx0b25TYXZlSXRlbXM9eyBvblVwZGF0ZU9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0bmV3SXRlbT17IGFkZE5ld09wdGlvbiB9XHJcblx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbD17IF9fKCAnQWRkIE5ldyBPcHRpb24nICkgfVxyXG5cdFx0XHRcdFx0SXRlbUhlYWRpbmc9eyBpdGVtSGVhZGluZyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyAoIHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PSdtYW51YWxfbGFiZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTGFiZWwnICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgbGFiZWw6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9J21hbnVhbF92YWx1ZSdcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9J21hbnVhbF9jYWxjdWxhdGUnXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlJyApIH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uY2FsY3VsYXRlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgY2FsY3VsYXRlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8Lz47XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQ8L1JlcGVhdGVyV2l0aFN0YXRlPlxyXG5cdFx0XHR9IH1cclxuXHRcdDwvQWN0aW9uTW9kYWw+IH1cclxuXHQ8L1JlYWN0LkZyYWdtZW50PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJvbU1hbnVhbEZpZWxkczsiLCJpbXBvcnQgeyBnZXRTZWxlY3RTb3VyY2UgfSBmcm9tIFwiLi9zb3VyY2VzXCI7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIEZyb21Qb3N0VGVybXNGaWVsZHMoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGVkaXRQcm9wczogeyBhdHRySGVscCB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgZ2V0U2VsZWN0U291cmNlKCBwcm9wcyApIH1cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9J3ZhbHVlX2Zyb21fa2V5J1xyXG5cdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUgZnJvbSBtZXRhIGZpZWxkJyApIH1cclxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZhbHVlX2Zyb21fa2V5IH1cclxuXHRcdFx0aGVscD17IGF0dHJIZWxwKCAndmFsdWVfZnJvbV9tZXRhJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgdmFsdWVfZnJvbV9rZXk6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT0nY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleSdcclxuXHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZWQgdmFsdWUgZnJvbSBtZXRhIGZpZWxkJyApIH1cclxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXkgfVxyXG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5JyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0PC8+O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJvbVBvc3RUZXJtc0ZpZWxkczsiLCJpbXBvcnQgeyBsaXN0RnJvbSB9IGZyb20gXCIuLi8uLi9ibG9ja3Mvc2VsZWN0LXJhZGlvLWNoZWtjLW9wdGlvbnNcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRGaWVsZFdyYXBwZXIsXHJcbn0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0Q2hlY2tib3hDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0UmFkaW9Db250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IERFTElNSVRFUiA9ICcgLSAnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXIoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRlZGl0UHJvcHM6IHsgYmxvY2tOYW1lLCB1bmlxS2V5IH0sXHJcblx0XHRzY3JpcHREYXRhLFxyXG5cdFx0YXR0cmlidXRlc1xyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgZ2V0Q2hlY2tib3ggPSAoIGxhYmVsLCBpbmRleCA9IDEgKSA9PiB7XHJcblx0XHRyZXR1cm4gPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCBjaGVja2JveGVzLXdyYXAnIH1cclxuXHRcdFx0a2V5PXsgYGNoZWNrX3BsYWNlX2hvbGRlcl9ibG9ja18keyBsYWJlbCArIGluZGV4IH1gIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0U2VsZWN0ID0gKCB7IG9wdGlvbnMsIGluZGV4IH0gKSA9PiB7XHJcblx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PXsgYHNlbGVjdF9wbGFjZV9ob2xkZXJfYmxvY2tfJHsgYXR0cmlidXRlcy5uYW1lICsgaW5kZXggfWAgfVxyXG5cdFx0XHQvL2xhYmVsPXsgYXR0cmlidXRlcy5sYWJlbCB9XHJcblx0XHRcdG9wdGlvbnM9eyBvcHRpb25zIH1cclxuXHRcdFx0Ly9oZWxwPXsgYXR0cmlidXRlcy5kZXNjIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz47XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRSYWRpbyA9ICggeyBvcHRpb25zLCBsYWJlbCwgaW5kZXggfSApID0+IHtcclxuXHRcdHJldHVybiA8UmFkaW9Db250cm9sXHJcblx0XHRcdGtleT17IGByYWRpb19wbGFjZV9ob2xkZXJfYmxvY2tfJHsgbGFiZWwgKyBpbmRleCB9YCB9XHJcblx0XHRcdC8vbGFiZWw9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cclxuXHRcdFx0b3B0aW9ucz17IG9wdGlvbnMgfVxyXG5cdFx0XHQvL2hlbHA9eyBhdHRyaWJ1dGVzLmRlc2MgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0fSB9XHJcblx0XHQvPjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdldFByb3AgPSAoIG9mLCBwcm9wTmFtZSwgaWZFbXB0eSA9ICcnICkgPT4ge1xyXG5cdFx0aWYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG9mICYmICd1bmRlZmluZWQnICE9PSB0eXBlb2Ygb2ZbIHByb3BOYW1lIF0gKSB7XHJcblx0XHRcdHJldHVybiBvZlsgcHJvcE5hbWUgXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaWZFbXB0eTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRMYWJlbFByb3AgPSBvZiA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0UHJvcCggb2YsICdsYWJlbCcgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRGdWxsTGFiZWwgPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRmaWVsZF9vcHRpb25zX2Zyb20sXHJcblx0XHRcdGZpZWxkX29wdGlvbnNfcG9zdF90eXBlLFxyXG5cdFx0XHRmaWVsZF9vcHRpb25zX3RheCxcclxuXHRcdFx0ZmllbGRfb3B0aW9uc19rZXksXHJcblx0XHRcdGdlbmVyYXRvcl9mdW5jdGlvbixcclxuXHRcdFx0Z2VuZXJhdG9yX2ZpZWxkXHJcblx0XHR9ID0gYXR0cmlidXRlcztcclxuXHJcblx0XHRsZXQgZnVsbF9sYWJlbCA9IFtdO1xyXG5cdFx0bGV0IHZhbHVlID0gW107XHJcblx0XHRzd2l0Y2ggKCBmaWVsZF9vcHRpb25zX2Zyb20gKSB7XHJcblx0XHRcdGNhc2UgJ3Bvc3RzJzpcclxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfcG9zdF90eXBlICkge1xyXG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2V0TGFiZWxQcm9wKCBzY3JpcHREYXRhLnBvc3RfdHlwZXNfbGlzdC5maW5kKFxyXG5cdFx0XHRcdFx0XHRvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZVxyXG5cdFx0XHRcdFx0KSApICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAndGVybXMnOlxyXG5cdFx0XHRcdGlmICggZmllbGRfb3B0aW9uc190YXggKSB7XHJcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBnZXRMYWJlbFByb3AoIHNjcmlwdERhdGEudGF4b25vbWllc19saXN0LmZpbmQoXHJcblx0XHRcdFx0XHRcdG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGZpZWxkX29wdGlvbnNfdGF4XHJcblx0XHRcdFx0XHQpICkgKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ21ldGFfZmllbGQnOlxyXG5cdFx0XHRcdGlmICggZmllbGRfb3B0aW9uc19rZXkgKSB7XHJcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBmaWVsZF9vcHRpb25zX2tleSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2dlbmVyYXRlJzpcclxuXHRcdFx0XHRpZiAoIGdlbmVyYXRvcl9mdW5jdGlvbiApIHtcclxuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdldExhYmVsUHJvcCggc2NyaXB0RGF0YS5nZW5lcmF0b3JzX2xpc3QuZmluZChcclxuXHRcdFx0XHRcdFx0b3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZ2VuZXJhdG9yX2Z1bmN0aW9uXHJcblx0XHRcdFx0XHQpICkgKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIGdlbmVyYXRvcl9maWVsZCApIHtcclxuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdlbmVyYXRvcl9maWVsZCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblx0XHRmdWxsX2xhYmVsLnB1c2goIGdldExhYmVsUHJvcCggbGlzdEZyb20uZmluZCggb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZmllbGRfb3B0aW9uc19mcm9tICkgKSApO1xyXG5cclxuXHRcdGlmICggdmFsdWUubGVuZ3RoICkge1xyXG5cdFx0XHRmdWxsX2xhYmVsLnB1c2goIHZhbHVlLmpvaW4oIERFTElNSVRFUiApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZ1bGxfbGFiZWwuam9pbiggREVMSU1JVEVSICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRNYW51YWxGaWVsZCA9ICggbGFiZWwgPSAnJyApID0+IHtcclxuXHRcdGlmICggYmxvY2tOYW1lLmluY2x1ZGVzKCAnY2hlY2tib3gnICkgKSB7XHJcblx0XHRcdGlmICggbGFiZWwgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldENoZWNrYm94KCBsYWJlbCApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubWFwKCAoIHsgbGFiZWw6IGNoZWNrTGFiZWwgfSwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGdldENoZWNrYm94KCBjaGVja0xhYmVsLCBpbmRleCApXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggYmxvY2tOYW1lLmluY2x1ZGVzKCAnc2VsZWN0JyApICkge1xyXG5cdFx0XHRpZiAoIGxhYmVsICkge1xyXG5cdFx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcclxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRcdFx0XHRvcHRpb25zOiBbIHsgbGFiZWwgfSBdXHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcclxuXHRcdFx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdG9wdGlvbnM6IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggYmxvY2tOYW1lLmluY2x1ZGVzKCAncmFkaW8nICkgKSB7XHJcblx0XHRcdGlmICggbGFiZWwgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldFJhZGlvKCB7XHJcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0b3B0aW9uczogWyB7IGxhYmVsIH0gXVxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZ2V0UmFkaW8oIHtcclxuXHRcdFx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdG9wdGlvbnM6IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPEZpZWxkV3JhcHBlclxyXG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItZmllbGQtd3JhcHBlcicgfVxyXG5cdFx0eyAuLi5wcm9wcyB9XHJcblx0PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGRzLWdyb3VwJyB9PlxyXG5cdFx0XHR7ICggJ21hbnVhbF9pbnB1dCcgIT09IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc19mcm9tIHx8ICEgYXR0cmlidXRlcy5maWVsZF9vcHRpb25zLmxlbmd0aCApICYmXHJcblx0XHRcdGdldE1hbnVhbEZpZWxkKCBnZXRGdWxsTGFiZWwoIHNjcmlwdERhdGEsIGF0dHJpYnV0ZXMgKSApIHx8IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0XHR7ICdtYW51YWxfaW5wdXQnID09PSBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfZnJvbSAmJiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubGVuZ3RoICYmXHJcblx0XHRcdGdldE1hbnVhbEZpZWxkKCkgfHwgbnVsbFxyXG5cdFx0XHR9XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L0ZpZWxkV3JhcHBlcj47XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGxpc3RGcm9tIH0gZnJvbSBcIi4uLy4uL2Jsb2Nrcy9zZWxlY3QtcmFkaW8tY2hla2Mtb3B0aW9uc1wiO1xyXG5pbXBvcnQgRnJvbU1hbnVhbEZpZWxkcyBmcm9tIFwiLi9mcm9tLW1hbnVhbC1maWVsZHNcIjtcclxuaW1wb3J0IEZyb21Qb3N0VGVybXNGaWVsZHMgZnJvbSBcIi4vZnJvbS1wb3N0LXRlcm1zLWZpZWxkc1wiO1xyXG5pbXBvcnQgRnJvbUdlbmVyYXRvcnNGaWVsZHMgZnJvbSBcIi4vZnJvbS1nZW5lcmF0b3JzLWZpZWxkc1wiO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBUZXh0Q29udHJvbCxcclxuXHRcdCAgU2VsZWN0Q29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBqZXRFbmdpbmVWZXJzaW9uIH0gPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGE7XHJcbmNvbnN0IHsgdmVyc2lvbkNvbXBhcmUgfSA9IEpldEZCQWN0aW9ucztcclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuY29uc3QgY2FuUmVuZGVyR2xvc3NhcmllcyA9IFwiXCIgIT09IGpldEVuZ2luZVZlcnNpb247XHJcblxyXG5mdW5jdGlvbiBnZXRGaWVsZE9wdGlvbnNGb3JtKCBvcHRpb25zRnJvbSwgcHJvcHMgKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIGF0dHJpYnV0ZXMsXHJcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRzd2l0Y2ggKCBvcHRpb25zRnJvbSApIHtcclxuXHRcdGNhc2UgJ21hbnVhbF9pbnB1dCc6XHJcblx0XHRcdHJldHVybiA8RnJvbU1hbnVhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT0nZnJvbV9tYW51YWwnXHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+O1xyXG5cdFx0Y2FzZSAncG9zdHMnOlxyXG5cdFx0Y2FzZSAndGVybXMnOlxyXG5cdFx0XHRyZXR1cm4gPEZyb21Qb3N0VGVybXNGaWVsZHNcclxuXHRcdFx0XHRrZXk9J2Zvcm1fcG9zdHNfdGVybXMnXHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+O1xyXG5cdFx0Y2FzZSAnbWV0YV9maWVsZCc6XHJcblx0XHRcdHJldHVybiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRrZXk9J2ZpZWxkX29wdGlvbnNfa2V5J1xyXG5cdFx0XHRcdGxhYmVsPSdNZXRhIGZpZWxkIHRvIGdldCB2YWx1ZSBmcm9tJ1xyXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZF9vcHRpb25zX2tleSB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF9vcHRpb25zX2tleTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPjtcclxuXHRcdGNhc2UgJ2dlbmVyYXRlJzpcclxuXHRcdFx0cmV0dXJuIDxGcm9tR2VuZXJhdG9yc0ZpZWxkc1xyXG5cdFx0XHRcdGtleT0nZm9ybV9nZW5lcmF0b3JzJ1xyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPjtcclxuXHRcdGNhc2UgJ2dsb3NzYXJ5JzpcclxuXHRcdFx0cmV0dXJuIGNhblJlbmRlckdsb3NzYXJpZXMgJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRrZXk9J3NlbGVjdF9nbG9zc2FyeSdcclxuXHRcdFx0XHRsYWJlbD0nU2VsZWN0IEdsb3NzYXJ5J1xyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZ2xvc3NhcnlfaWQgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgZ2xvc3NhcnlfaWQgPT4gc2V0QXR0cmlidXRlcyggeyBnbG9zc2FyeV9pZCB9ICkgfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyBbXHJcblx0XHRcdFx0XHR7IHZhbHVlOiAnJywgbGFiZWw6ICctLScgfSxcclxuXHRcdFx0XHRcdC4uLndpbmRvdy5KZXRGb3JtU2VsZWN0RmllbGREYXRhLmdsb3NzYXJpZXNfbGlzdCxcclxuXHRcdFx0XHRdIH1cclxuXHRcdFx0Lz47XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnNlbGVjdC5yYWRpby5jaGVjay5jb250cm9scycsIG51bGwsIG9wdGlvbnNGcm9tLCBwcm9wcyApO1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlbGVjdFJhZGlvQ2hlY2soIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXHJcblx0XHRcdCAgY2hpbGRyZW4gPSBbXSxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCB7IGZpZWxkX29wdGlvbnNfZnJvbSB9ID0gYXR0cmlidXRlcztcclxuXHJcblx0cmV0dXJuIGlzU2VsZWN0ZWQgJiYgPGRpdiBjbGFzc05hbWU9J2luc2lkZS1ibG9jay1vcHRpb25zJz5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT0nZmllbGRfb3B0aW9uc19mcm9tJ1xyXG5cdFx0XHRsYWJlbD0nRmlsbCBPcHRpb25zIEZyb20nXHJcblx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0dmFsdWU9eyBmaWVsZF9vcHRpb25zX2Zyb20gfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF9vcHRpb25zX2Zyb206IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHRcdG9wdGlvbnM9eyBsaXN0RnJvbSB9XHJcblx0XHQvPlxyXG5cdFx0eyBnZXRGaWVsZE9wdGlvbnNGb3JtKCBmaWVsZF9vcHRpb25zX2Zyb20sIHByb3BzICkgfVxyXG5cdFx0eyBjaGlsZHJlbiB9XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RSYWRpb0NoZWNrOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IGxvY2FsaXplRGF0YSA9IHdpbmRvdy5KZXRGb3JtU2VsZWN0RmllbGREYXRhO1xyXG5cclxuXHJcbmNvbnN0IHtcclxuXHRTZWxlY3RDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHNvdXJjZXMgPSB7XHJcblx0dGVybXM6IHtcclxuXHRcdGxhYmVsOiBfXyggJ1RheG9ub215JyApLFxyXG5cdFx0YXR0cjogJ2ZpZWxkX29wdGlvbnNfdGF4JyxcclxuXHRcdG9wdGlvbnM6IGxvY2FsaXplRGF0YS50YXhvbm9taWVzX2xpc3RcclxuXHR9LFxyXG5cdHBvc3RzOiB7XHJcblx0XHRsYWJlbDogX18oICdQb3N0IFR5cGUnICksXHJcblx0XHRhdHRyOiAnZmllbGRfb3B0aW9uc19wb3N0X3R5cGUnLFxyXG5cdFx0b3B0aW9uczogbG9jYWxpemVEYXRhLnBvc3RfdHlwZXNfbGlzdFxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGdldFNlbGVjdFNvdXJjZSA9ICggcHJvcHMgKSA9PiB7XHJcblx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcclxuXHRjb25zdCB7IGZpZWxkX29wdGlvbnNfZnJvbSB9ID0gYXR0cmlidXRlcztcclxuXHJcblx0aWYgKCAhIHNvdXJjZXNbIGZpZWxkX29wdGlvbnNfZnJvbSBdICYmICEgc291cmNlc1sgZmllbGRfb3B0aW9uc19mcm9tIF0gKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0Y29uc3Qgc291cmNlID0gc291cmNlc1sgZmllbGRfb3B0aW9uc19mcm9tIF07XHJcblxyXG5cdHJldHVybiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0bGFiZWw9eyBzb3VyY2UubGFiZWwgfVxyXG5cdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBzb3VyY2UuYXR0ciBdIH1cclxuXHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IFsgc291cmNlLmF0dHIgXTogbmV3VmFsdWUgfSApO1xyXG5cdFx0fSB9XHJcblx0XHRvcHRpb25zPXsgc291cmNlLm9wdGlvbnMgfVxyXG5cdC8+XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRTZWxlY3RTb3VyY2UgfTsiLCJjb25zdCB7XHJcblx0XHQgIEdsb2JhbEZpZWxkLFxyXG5cdFx0ICBBdmFpbGFibGVNYXBGaWVsZCxcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IHdpdGhQcmVzZXQgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHsgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBHZW5lcmFsUHJlc2V0KCB7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0YXZhaWxhYmxlRmllbGRzLFxyXG5cdFx0XHRcdFx0XHRcdGlzTWFwRmllbGRWaXNpYmxlLFxyXG5cdFx0XHRcdFx0XHRcdGlzVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSxcclxuXHRcdFx0XHRcdFx0fSApIHtcclxuXHRjb25zdCBwb3NpdGlvbiA9ICdnZW5lcmFsJztcclxuXHJcblx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggbmV3VmFsdWUsIG5hbWUgKSA9PiB7XHJcblx0XHRvbkNoYW5nZSggeyAuLi52YWx1ZSwgWyBuYW1lIF06IG5ld1ZhbHVlIH0gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8RnJhZ21lbnQga2V5PXsgJ2pmYi1nZW5lcmFsLXByZXNldC1tYWluLXdyYXBwZXInIH0+XHJcblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcuZ2xvYmFsX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8R2xvYmFsRmllbGRcclxuXHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHR2YWx1ZT17IHZhbHVlIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHJcblx0XHR7IHZhbHVlLmZyb20gJiYgKFxyXG5cdFx0XHRhdmFpbGFibGVGaWVsZHMubWFwKCAoIGZpZWxkLCBpbmRleCApID0+IDxBdmFpbGFibGVNYXBGaWVsZFxyXG5cdFx0XHRcdGtleT17IGZpZWxkICsgaW5kZXggfVxyXG5cdFx0XHRcdGZpZWxkc01hcD17IHZhbHVlLmZpZWxkc19tYXAgfVxyXG5cdFx0XHRcdGZpZWxkPXsgZmllbGQgfVxyXG5cdFx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0XHRpc01hcEZpZWxkVmlzaWJsZT17IGlzTWFwRmllbGRWaXNpYmxlIH1cclxuXHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cclxuXHRcdFx0Lz4gKVxyXG5cdFx0KSB9XHJcblx0PC9GcmFnbWVudD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQoIEdlbmVyYWxQcmVzZXQgKTsiLCJjb25zdCB7XHJcblx0XHQgIGFkZEFjdGlvbixcclxuXHRcdCAgZ2xvYmFsVGFiLFxyXG5cdFx0ICBUb29sczogeyB3aXRoUGxhY2Vob2xkZXIgfSxcclxuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHQgIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEFjdGlvbkZpZWxkc01hcCxcclxuXHRcdCAgV3JhcHBlclJlcXVpcmVkQ29udHJvbCxcclxuXHRcdCAgUGxhY2Vob2xkZXJNZXNzYWdlLFxyXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdFx0ICBCdXR0b24sXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdFx0ICB1c2VFZmZlY3QsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHsgd2l0aFJlcXVlc3RGaWVsZHMgfSA9IEpldEZCSG9va3M7XHJcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcclxuXHJcbmZ1bmN0aW9uIEFjdGl2ZUNhbXBhaWduQWN0aW9uKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIHNldHRpbmdzLFxyXG5cdFx0XHQgIG9uQ2hhbmdlU2V0dGluZyxcclxuXHRcdFx0ICBvbkNoYW5nZSxcclxuXHRcdFx0ICBnZXRNYXBGaWVsZCxcclxuXHRcdFx0ICBzZXRNYXBGaWVsZCxcclxuXHRcdFx0ICBzb3VyY2UsXHJcblx0XHRcdCAgbGFiZWwsXHJcblx0XHRcdCAgaGVscCxcclxuXHRcdFx0ICByZXF1ZXN0RmllbGRzLFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGN1cnJlbnRUYWIgPSBnbG9iYWxUYWIoIHsgc2x1ZzogJ2FjdGl2ZS1jYW1wYWlnbi10YWInIH0gKVxyXG5cclxuXHRjb25zdCBbIGZvcm1GaWVsZHNMaXN0LCBzZXRGb3JtRmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcblx0Y29uc3QgWyBidXR0b25DbGFzcywgc2V0QnV0dG9uQ2xhc3MgXSA9IHVzZVN0YXRlKCAoKSA9PiAoIHNldHRpbmdzLmlzVmFsaWRBUElcclxuXHRcdD8gJ2lzLXZhbGlkJ1xyXG5cdFx0OiAnaXMtaW52YWxpZCcgKSxcclxuXHQpO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdHNldEZvcm1GaWVsZHMoIFsgLi4uZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKSwgLi4ucmVxdWVzdEZpZWxkcyBdICk7XHJcblx0fSwgW10gKVxyXG5cclxuXHRmdW5jdGlvbiBnZXRBUEkoIHByb3AgKSB7XHJcblx0XHRyZXR1cm4gc2V0dGluZ3MudXNlX2dsb2JhbCA/IGN1cnJlbnRUYWJbIHByb3AgXSA6ICggc2V0dGluZ3NbIHByb3AgXSB8fCBcIlwiICk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB2YWxpZGF0ZUFjdGl2ZUNhbXBhaWduRGF0YSgpIHtcclxuXHRcdGNvbnN0IGFwaSA9IHtcclxuXHRcdFx0YXBpX2tleTogZ2V0QVBJKCAnYXBpX2tleScgKSxcclxuXHRcdFx0YXBpX3VybDogZ2V0QVBJKCAnYXBpX3VybCcgKSxcclxuXHRcdH07XHJcblxyXG5cdFx0Z2V0QWN0aXZlQ2FtcGFpZ25EYXRhKCB0cnVlLCBhcGkgKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldEFjdGl2ZUNhbXBhaWduRGF0YSggaXNWYWxpZGF0ZSA9IGZhbHNlLCB7IGFwaV9rZXkgPSAnJywgYXBpX3VybCA9ICcnIH0gKSB7XHJcblx0XHRpZiAoICEgYXBpX2tleSB8fCAhIGFwaV91cmwgKSB7XHJcblx0XHRcdG9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xyXG5cdFx0XHRzZXRCdXR0b25DbGFzcyggJ2lzLWludmFsaWQnICk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZW5kcG9pbnQgPSAnL2FkbWluL2FwaS5waHA/YXBpX2FjdGlvbj1saXN0X2xpc3QnO1xyXG5cdFx0Y29uc3QgdXJsID0gYXBpX3VybCArIGVuZHBvaW50ICsgJyZhcGlfa2V5PScgKyBhcGlfa2V5ICsgJyZpZHM9YWxsJmFwaV9vdXRwdXQ9anNvbic7XHJcblxyXG5cdFx0c2V0QnV0dG9uQ2xhc3MoICdsb2FkaW5nJyApO1xyXG5cclxuXHRcdGpRdWVyeS5nZXRKU09OKCB1cmwgKVxyXG5cdFx0XHQuc3VjY2VzcyggZnVuY3Rpb24oIGRhdGEgKSB7XHJcblx0XHRcdFx0aWYgKCB1bmRlZmluZWQgIT09IGRhdGEucmVzdWx0X2NvZGUgJiYgZGF0YS5yZXN1bHRfY29kZSApIHtcclxuXHRcdFx0XHRcdGNvbnN0IGxpc3RzID0gW107XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggdmFyIHByb3AgaW4gZGF0YSApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IGRhdGFbIHByb3AgXS5pZCApIHtcclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsaXN0cy5wdXNoKCB7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGRhdGFbIHByb3AgXS5pZCxcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogZGF0YVsgcHJvcCBdLm5hbWUsXHJcblx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRvbkNoYW5nZSgge1xyXG5cdFx0XHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0XHRcdFx0ZGF0YTogbGlzdHMsXHJcblx0XHRcdFx0XHRcdGlzVmFsaWRBUEk6IHRydWUsXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRzZXRCdXR0b25DbGFzcyggJ2lzLXZhbGlkJyApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIGZhbHNlLCAnaXNWYWxpZEFQSScgKTtcclxuXHRcdFx0XHRcdHNldEJ1dHRvbkNsYXNzKCAnaXMtaW52YWxpZCcgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKVxyXG5cdFx0XHQuZXJyb3IoIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHNldEJ1dHRvbkNsYXNzKCAnaXMtaW52YWxpZCcgKTtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIGZhbHNlLCAnaXNWYWxpZEFQSScgKTtcclxuXHRcdFx0fSApO1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGtleT17ICd1c2VfZ2xvYmFsJyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICd1c2VfZ2xvYmFsJyApIH1cclxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLnVzZV9nbG9iYWwgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHVzZV9nbG9iYWwgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggQm9vbGVhbiggdXNlX2dsb2JhbCApLCAndXNlX2dsb2JhbCcgKVxyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FwaV9kYXRhJyApIH1cclxuXHRcdFx0a2V5PXsgJ2FjdGl2ZWNhbXBhaWduX2lucHV0X2tleScgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXItZnVsbCBqZXQtZC1mbGV4LWJldHdlZW4nPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdhcGlfdXJsJ1xyXG5cdFx0XHRcdFx0XHRoZWxwPXsgbGFiZWwoICdhcGlfdXJsJyApIH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC1jbGVhcidcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBzZXR0aW5ncy51c2VfZ2xvYmFsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBnZXRBUEkoICdhcGlfdXJsJyApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdhcGlfdXJsJyApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdhcGlfa2V5J1xyXG5cdFx0XHRcdFx0XHRoZWxwPXsgbGFiZWwoICdhcGlfa2V5JyApIH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC1jbGVhcidcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBzZXR0aW5ncy51c2VfZ2xvYmFsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBnZXRBUEkoICdhcGlfa2V5JyApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdhcGlfa2V5JyApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cclxuXHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0b25DbGljaz17IHZhbGlkYXRlQWN0aXZlQ2FtcGFpZ25EYXRhIH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGAkeyBidXR0b25DbGFzcyB9IGpldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbmAgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cclxuXHRcdFx0XHRcdHsgc2V0dGluZ3MuaXNWYWxpZEFQSSA/IGxhYmVsKCAncmV0cnlfcmVxdWVzdCcgKSA6IGxhYmVsKCAndmFsaWRhdGVfYXBpX2tleScgKSB9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHQ8ZGl2IHN0eWxlPXsge1xyXG5cdFx0XHRwYWRkaW5nQm90dG9tOiAnMS4yZW0nLFxyXG5cdFx0fSB9PlxyXG5cdFx0XHR7IGhlbHAoICdhcGlfa2V5X2xpbmtfcHJlZml4JyApIH0gPGFcclxuXHRcdFx0aHJlZj17IGhlbHAoICdhcGlfa2V5X2xpbmsnICkgfT57IGhlbHAoICdhcGlfa2V5X2xpbmtfc3VmZml4JyApIH08L2E+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdHsgc2V0dGluZ3MuaXNWYWxpZEFQSSAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0a2V5PSdhY3RpdmVjYW1wYWlnbl9zZWxlY3RfbGlzdHMnXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2xpc3RfaWQnICkgfVxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmxpc3RfaWQgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnbGlzdF9pZCcgKSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHdpdGhQbGFjZWhvbGRlciggc2V0dGluZ3MuZGF0YSB8fCBbXSApIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0a2V5PSdhY3RpdmVjYW1wYWlnbl90YWdzJ1xyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICd0YWdzJyApIH1cclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnRhZ3MgfVxyXG5cdFx0XHRcdGhlbHA9eyBoZWxwKCAndGFncycgKSB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICd0YWdzJyApIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFjdGlvbkZpZWxkc01hcFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cclxuXHRcdFx0XHRmaWVsZHM9eyBPYmplY3QuZW50cmllcyggc291cmNlLmFjdGl2ZWNhbXBhaWduX2ZpZWxkcyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgKCB7IGZpZWxkSWQsIGZpZWxkRGF0YSwgaW5kZXggfSApID0+IDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXHJcblx0XHRcdFx0XHRmaWVsZD17IFsgZmllbGRJZCwgZmllbGREYXRhIF0gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGZpZWxkSWQgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZTogZmllbGRJZCB9ICkgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKCB7IG5hbWVGaWVsZDogZmllbGRJZCwgdmFsdWUgfSApIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHNMaXN0IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPiB9XHJcblx0XHRcdDwvQWN0aW9uRmllbGRzTWFwPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdDwvPjtcclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn1cclxuXHJcbmFkZEFjdGlvbiggJ2FjdGl2ZV9jYW1wYWlnbicsIHdpdGhTZWxlY3QoIHdpdGhSZXF1ZXN0RmllbGRzICkoIEFjdGl2ZUNhbXBhaWduQWN0aW9uICkgKVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRhZGRQbGFjZWhvbGRlckZvclNlbGVjdCggYXJyYXksIGxhYmVsID0gJy0tJyApIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHsgbGFiZWwgfSxcclxuXHRcdFx0Li4uYXJyYXksXHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VTZXR0aW5nKCB2YWx1ZSwga2V5ICkge1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRbIGtleSBdOiB2YWx1ZSxcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRvbkNoYW5nZVNldHRpbmdPYmooIHZhbHVlICkge1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHQuLi52YWx1ZSxcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRnZXRGaWVsZERlZmF1bHQoIG5hbWUgKSB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSAnZmllbGRzX21hcCc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RmllbGRCeU5hbWUoXHJcblx0XHRcdHsgbmFtZSwgc291cmNlIH0sXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0RmllbGRNZXRhKCBuYW1lICkge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gJ21ldGFfZmllbGRzX21hcCc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RmllbGRCeU5hbWUoXHJcblx0XHRcdHsgbmFtZSwgc291cmNlIH0sXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0RmllbGRCeU5hbWUoIHsgc291cmNlLCBuYW1lIH0gKSB7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZUZpZWxkTWFwKCB2YWx1ZSwgbmFtZUZpZWxkICkge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gJ2ZpZWxkc19tYXAnO1xyXG5cclxuXHRcdHRoaXMuY2hhbmdlRmllbGRzTWFwKFxyXG5cdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9LFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRvbkNoYW5nZU1ldGFGaWVsZE1hcCggdmFsdWUsIG5hbWVGaWVsZCApIHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXRhX2ZpZWxkc19tYXAnO1xyXG5cclxuXHRcdHRoaXMuY2hhbmdlRmllbGRzTWFwKFxyXG5cdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9LFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjaGFuZ2VGaWVsZHNNYXAoIHsgc291cmNlLCBuYW1lRmllbGQsIHZhbHVlIH0gKSB7XHJcblx0XHRjb25zdCBmaWVsZHNNYXAgPSBPYmplY3QuYXNzaWduKFxyXG5cdFx0XHR7fSxcclxuXHRcdFx0dGhpcy5wcm9wcy5zZXR0aW5nc1sgc291cmNlIF0sXHJcblx0XHRcdHsgWyBuYW1lRmllbGQgXTogdmFsdWUgfSxcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRbIHNvdXJjZSBdOiBmaWVsZHNNYXAsXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxufSIsIlxyXG5jb25zdCB7IFRvb2xzLCBhZGRBY3Rpb24gfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAnY2FsbF9ob29rJywgZnVuY3Rpb24gQ2FsbEhvb2tBY3Rpb24oIHsgc2V0dGluZ3MsIG9uQ2hhbmdlLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gKSB7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlU2V0dGluZyA9ICggdmFsdWUsIGtleSApID0+IHtcclxuXHRcdG9uQ2hhbmdlKCB7XHJcblx0XHRcdC4uLnNldHRpbmdzLFxyXG5cdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmV0dXJuICggPGRpdiBrZXk9XCJjYWxsX2hvb2tcIj5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9J2hvb2tfbmFtZSdcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2hvb2tfbmFtZScgKSB9XHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuaG9va19uYW1lIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnaG9va19uYW1lJyApXHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRrZXk9J2hlbHBfbWVzc2FnZSdcclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC1jYWxsLWhvb2staW5zdHJ1Y3Rpb24nPlxyXG5cdFx0XHRcdHsgX18oICdDYWxsZWQgaG9vayBuYW1lczonICkgfVxyXG5cdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PGNvZGU+amV0LWZvcm0tYnVpbGRlci9jdXN0b20tYWN0aW9uL3sgc2V0dGluZ3MuaG9va19uYW1lIH08L2NvZGU+IC0geyBfXyggJ1dQIGFjdGlvbi4gUGVyZm9ybSBhIGhvb2sgd2l0aG91dCBhbiBhYmlsaXR5IHRvIHZhbGlkYXRlIGZvcm0sJyApIH1cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvY3VzdG9tLWZpbHRlci97IHNldHRpbmdzLmhvb2tfbmFtZSB9PC9jb2RlPiAtIHsgX18oICdXUCBmaWx0ZXIuIFBlcmZvcm0gYSBob29rIHdpdGggYW4gYWJpbGl0eSB0byB2YWxpZGF0ZSBmb3JtLiBBbGxvd3MgdG8gcmV0dXJuIGVycm9yIG1lc3NhZ2UuJyApIH1cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHR7IF9fKCAnSG9vayBhcmd1bWVudHM6JyApIH1cclxuXHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHQ8bGk+PGNvZGU+JHJlc3VsdDwvY29kZT4gLSB7IF9fKCAnb25seSBmb3IgV1AgZmlsdGVyLiBIb29rIGV4ZWN1dGlvbiByZXN1bHQsJyApIH08L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxjb2RlPiRyZXF1ZXN0PC9jb2RlPiAtIHsgX18oICdhcnJheSB3aXRoIHN1Ym1pdHRlZCBmb3JtIGRhdGEsJyApIH08L2xpPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHQ8Y29kZT4kYWN0aW9uX2hhbmRsZXI8L2NvZGU+IC0geyBfXyggJ2FjdGlvbiBoYW5kbGVyIG9iamVjdCwgYWxsb3dzIHRvIG1hbmFnZSBhY3Rpb25zIGRhdGEgYW5kIHRvIHRocm93cyBlcnJvciBzdGF0dXM6JyApIH1cclxuXHRcdFx0XHRcdFx0PGNvZGU+dGhyb3cgbmV3IEFjdGlvbl9FeGNlcHRpb24oICdmYWlsZWQnICk8L2NvZGU+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9CYXNlQ29udHJvbD5cclxuXHJcblx0PC9kaXY+ICk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59ICk7XHJcbiIsImNvbnN0IHtcclxuXHRUb29scyxcclxuXHRhZGRBY3Rpb24sXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2Nrc1xyXG59ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICdjYWxsX3dlYmhvb2snLCBjbGFzcyBDYWxsV2ViSG9va0FjdGlvbiBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5maWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBsYWJlbCwgb25DaGFuZ2VTZXR0aW5nIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gPFRleHRDb250cm9sXHJcblx0XHRcdGtleT0nd2ViaG9va191cmwnXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICd3ZWJob29rX3VybCcgKSB9XHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3Mud2ViaG9va191cmwgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3dlYmhvb2tfdXJsJyApIH1cclxuXHRcdC8+O1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdH1cclxufSApO1xyXG4iLCJpbXBvcnQgSW50ZWdyYXRpb25Db21wb25lbnQgZnJvbSBcIi4vaW50ZWdyYXRpb24tY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCB7XHJcblx0YWRkQWN0aW9uLFxyXG5cdGdsb2JhbFRhYlxyXG59ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3Qge1xyXG5cdFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXHJcbn0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IHdpdGhSZXF1ZXN0RmllbGRzIH0gPSBKZXRGQkhvb2tzO1xyXG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG5jbGFzcyBHZXRSZXNwb25zZUFjdGlvbiBleHRlbmRzIEludGVncmF0aW9uQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZvcm1GaWVsZHNMaXN0ID0gWyAuLi50aGlzLmZvcm1GaWVsZHNMaXN0LCAuLi50aGlzLnByb3BzLnJlcXVlc3RGaWVsZHMgXTtcclxuXHR9XHJcblxyXG5cdGdldEZpZWxkcygpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MuZGF0YS5maWVsZHMgKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QuZW50cmllcyggc2V0dGluZ3MuZGF0YS5maWVsZHMgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGdldExpc3RzKCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5kYXRhLmxpc3RzICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXRFbnRyaWVzQXJyYXkoIHNldHRpbmdzLmRhdGEubGlzdHMgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGZvcm1hdEVudHJpZXNBcnJheSggZW50cmllcyA9IFtdLCBpc05lZWRQbGFjZWhvbGRlciA9IHRydWUgKSB7XHJcblx0XHRjb25zdCBwbGFjZWhvbGRlciA9IHtcclxuXHRcdFx0bGFiZWw6ICctLSdcclxuXHRcdH07XHJcblx0XHRpZiAoICEgZW50cmllcyApIHtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZW50cmllcyggZW50cmllcyApLm1hcCggKCBbIHZhbHVlLCBsYWJlbCBdICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyB2YWx1ZSwgbGFiZWwgfTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gaXNOZWVkUGxhY2Vob2xkZXIgPyBbIHBsYWNlaG9sZGVyLCAuLi5vcHRpb25zIF0gOiBvcHRpb25zO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncywgb25DaGFuZ2UsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkcygpO1xyXG5cdFx0Y29uc3QgY3VycmVudFRhYiA9IGdsb2JhbFRhYiggeyBzbHVnOiAnZ2V0LXJlc3BvbnNlLXRhYicgfSApO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8UmVhY3QuRnJhZ21lbnQga2V5PVwiZ2V0cmVzcG9uc2VcIj5cclxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRrZXk9eyAndXNlX2dsb2JhbCcgfVxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICd1c2VfZ2xvYmFsJyApIH1cclxuXHRcdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MudXNlX2dsb2JhbCB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyB1c2VfZ2xvYmFsID0+IHtcclxuXHRcdFx0XHRcdHRoaXMub25DaGFuZ2VTZXR0aW5nKCBCb29sZWFuKCB1c2VfZ2xvYmFsICksICd1c2VfZ2xvYmFsJyApXHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGtleT17ICdnZXRyZXNwb25zZV9pbnB1dF9rZXknIH1cclxuXHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dC13aXRoLWJ1dHRvblwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nYXBpX2tleSdcclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdhcGlfa2V5JyApIH1cclxuXHRcdFx0XHRcdGRpc2FibGVkPXsgc2V0dGluZ3MudXNlX2dsb2JhbCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZV9nbG9iYWxcclxuXHRcdFx0XHRcdFx0PyBjdXJyZW50VGFiLmFwaV9rZXlcclxuXHRcdFx0XHRcdFx0OiBzZXR0aW5ncy5hcGlfa2V5XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnYXBpX2tleScgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRrZXk9eyAndmFsaWRhdGVfYXBpX2tleScgfVxyXG5cdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXR0aW5ncy51c2VfZ2xvYmFsXHJcblx0XHRcdFx0XHRcdFx0PyB0aGlzLnZhbGlkYXRlQVBJS2V5KCBjdXJyZW50VGFiLmFwaV9rZXkgKVxyXG5cdFx0XHRcdFx0XHRcdDogdGhpcy52YWxpZGF0ZUFQSUtleSgpXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IHRoaXMuc3RhdGUuY2xhc3NOYW1lLmpvaW4oICcgJyApICsgJyBqZXQtZm9ybS12YWxpZGF0ZS1idXR0b24nIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0XHRcdFx0XHR7IGxhYmVsKCAndmFsaWRhdGVfYXBpX2tleScgKSB9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxkaXYvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luLWJvdHRvbS0tc21hbGwnPnsgaGVscCggJ2FwaV9rZXlfbGlua19wcmVmaXgnICkgfSA8YVxyXG5cdFx0XHRcdGhyZWY9eyBoZWxwKCAnYXBpX2tleV9saW5rJyApIH0+eyBoZWxwKCAnYXBpX2tleV9saW5rX3N1ZmZpeCcgKSB9PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyBzZXR0aW5ncy5pc1ZhbGlkQVBJICYmIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nZ2V0cmVzcG9uc2Vfc2VsZWN0X2xpc3RzJ1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC13aXRoLWJ1dHRvbidcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2xpc3RfaWQnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnbGlzdF9pZCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5saXN0X2lkIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2xpc3RfaWQnICkgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRMaXN0cygpIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cclxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MudXNlX2dsb2JhbFxyXG5cdFx0XHRcdFx0XHRcdFx0PyB0aGlzLmdldEFwaURhdGEoIHNldHRpbmdzLmFwaV9rZXkgKVxyXG5cdFx0XHRcdFx0XHRcdFx0OiB0aGlzLmdldEFwaURhdGEoIGN1cnJlbnRUYWIuYXBpX2tleSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsKCAndXBkYXRlX2xpc3RfaWRzJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZ2V0cmVzcG9uc2VfZGF5X29mX2N5Y2xlJyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdkYXlfb2ZfY3ljbGUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdkYXlfb2ZfY3ljbGUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZGF5X29mX2N5Y2xlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIE51bWJlciggbmV3VmFsICksICdkYXlfb2ZfY3ljbGUnICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdFx0a2V5PSdnZXRyZXNwb25zZV9maWVsZHNfbWFwJ1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0XHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGROYW1lLCBmaWVsZERhdGEgXSwgaW5kZXggKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGQ9eyBbIGZpZWxkTmFtZSwgZmllbGREYXRhIF0gfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZE5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5nZXRGaWVsZERlZmF1bHQoIGZpZWxkTmFtZSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB0aGlzLm9uQ2hhbmdlRmllbGRNYXAoIHZhbHVlLCBmaWVsZE5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZvcm1GaWVsZHNMaXN0IH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPjtcclxuXHRcdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59XHJcblxyXG5hZGRBY3Rpb24oICdnZXRyZXNwb25zZScsIHdpdGhTZWxlY3QoIHdpdGhSZXF1ZXN0RmllbGRzICkoIEdldFJlc3BvbnNlQWN0aW9uICkgKVxyXG4iLCJpbXBvcnQgSmV0RGVmYXVsdE1ldGFDb250cm9sIGZyb20gXCIuLi9ibG9ja3MvY29udHJvbHMvZGVmYXVsdC1tZXRhXCI7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIGFkZEFjdGlvbixcclxuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRcdCAgY29udmVydExpc3RUb0ZpZWxkc01hcCxcclxuXHQgIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIEFjdGlvbkZpZWxkc01hcCxcclxuXHRcdCAgV3JhcHBlclJlcXVpcmVkQ29udHJvbCxcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IHVzZVJlcXVlc3RGaWVsZHMsIHdpdGhSZXF1ZXN0RmllbGRzIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFx0ICBCYXNlQ29udHJvbCxcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdFx0ICB1c2VFZmZlY3QsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcclxuXHJcbmZ1bmN0aW9uIHRheFByZWZpeCggc3VmZml4ID0gJycgKSB7XHJcblx0cmV0dXJuICdqZXRfdGF4X18nICsgc3VmZml4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbnNlcnRQb3N0QWN0aW9uKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0XHQgIHNldHRpbmdzLFxyXG5cdFx0XHQgIG9uQ2hhbmdlU2V0dGluZyxcclxuXHRcdFx0ICBzb3VyY2UsXHJcblx0XHRcdCAgaGVscCxcclxuXHRcdFx0ICBsYWJlbCxcclxuXHRcdFx0ICBnZXRNYXBGaWVsZCxcclxuXHRcdFx0ICBzZXRNYXBGaWVsZCxcclxuXHRcdFx0ICByZXF1ZXN0RmllbGRzLFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IFsgZmllbGRUeXBlLCBzZXRUeXBlRmllbGQgXSA9IHVzZVN0YXRlKCB7fSApO1xyXG5cdGNvbnN0IFsgdGF4b25vbWllcywgc2V0VGF4b25vbWllcyBdID0gdXNlU3RhdGUoIFtdICk7XHJcblx0Y29uc3QgWyBmb3JtRmllbGRzLCBzZXRGb3JtRmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0UHJlcGFyZWRUYXhvbm9taWVzKCkge1xyXG5cdFx0Y29uc3QgcHJlcGFyZWRUYXhlcyA9IFtdO1xyXG5cdFx0aWYgKCAhIHNvdXJjZS50YXhvbm9taWVzLmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IHRheG9ub215IG9mIHNvdXJjZS50YXhvbm9taWVzICkge1xyXG5cdFx0XHRwcmVwYXJlZFRheGVzLnB1c2goIHtcclxuXHRcdFx0XHQuLi50YXhvbm9teSxcclxuXHRcdFx0XHR2YWx1ZTogdGF4UHJlZml4KCB0YXhvbm9teS52YWx1ZSApLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHByZXBhcmVkVGF4ZXNcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0c2V0VHlwZUZpZWxkKCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cclxuXHRcdFx0Zm9yICggY29uc3QgZmllbGRzTWFwS2V5IGluIHNldHRpbmdzLmZpZWxkc19tYXAgKSB7XHJcblx0XHRcdFx0cmVzdWx0WyBmaWVsZHNNYXBLZXkgXSA9IGdldFR5cGVGaWVsZFZhbHVlKCBzZXR0aW5ncy5maWVsZHNfbWFwWyBmaWVsZHNNYXBLZXkgXSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSApO1xyXG5cdFx0c2V0VGF4b25vbWllcyggZ2V0UHJlcGFyZWRUYXhvbm9taWVzKCkgKTtcclxuXHRcdG9uQ2hhbmdlU2V0dGluZyggWyBzb3VyY2UucmVxdWVzdEZpZWxkcy5pbnNlcnRlZF9wb3N0X2lkIF0sICdyZXF1ZXN0RmllbGRzJyApO1xyXG5cdFx0c2V0Rm9ybUZpZWxkcyhcclxuXHRcdFx0Y29udmVydExpc3RUb0ZpZWxkc01hcCggZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpLCByZXF1ZXN0RmllbGRzIClcclxuXHRcdCk7XHJcblx0fSwgW10gKTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0VHlwZUZpZWxkVmFsdWUoIHZhbHVlICkge1xyXG5cdFx0bGV0IHJlc3VsdFZhbHVlID0gJ3Bvc3RfbWV0YSc7XHJcblxyXG5cdFx0Zm9yICggY29uc3QgZmllbGRzTWFwT3B0aW9uIG9mIHNvdXJjZS5maWVsZHNNYXBPcHRpb25zICkge1xyXG5cdFx0XHRpZiAoIHZhbHVlID09PSBmaWVsZHNNYXBPcHRpb24udmFsdWUgKSB7XHJcblx0XHRcdFx0cmVzdWx0VmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdmFsdWUuaW5jbHVkZXMoIHRheFByZWZpeCgpICkgKSB7XHJcblx0XHRcdHJlc3VsdFZhbHVlID0gJ3Bvc3RfdGVybXMnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXN1bHRWYWx1ZTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNldFR5cGVGaWVsZFZhbHVlKCBwcmV2LCBmaWVsZElELCB2YWx1ZSApIHtcclxuXHRcdGNvbnN0IHJlc3VsdFZhbHVlID0gZ2V0VHlwZUZpZWxkVmFsdWUoIHZhbHVlICk7XHJcblxyXG5cdFx0aWYgKCBbICdwb3N0X21ldGEnLCAncG9zdF90ZXJtcycgXS5pbmNsdWRlcyggcmVzdWx0VmFsdWUgKSApIHtcclxuXHRcdFx0c2V0TWFwRmllbGQoIHsgbmFtZUZpZWxkOiBmaWVsZElELCB2YWx1ZTogJycgfSApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRNYXBGaWVsZCggeyBuYW1lRmllbGQ6IGZpZWxkSUQsIHZhbHVlOiByZXN1bHRWYWx1ZSB9IClcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQuLi5wcmV2LFxyXG5cdFx0XHRbIGZpZWxkSUQgXTogcmVzdWx0VmFsdWUsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHJcblx0Y29uc3QgZ2V0RmllbGRTZWxlY3QgPSAoIGZpZWxkSWQsIGluZGV4ICkgPT4gKCA8U2VsZWN0Q29udHJvbFxyXG5cdFx0a2V5PXsgZmllbGRJZCArIGluZGV4IH1cclxuXHRcdHZhbHVlPXsgZmllbGRUeXBlWyBmaWVsZElkIF0gfVxyXG5cdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB7XHJcblx0XHRcdHNldFR5cGVGaWVsZCggcHJldiA9PiBzZXRUeXBlRmllbGRWYWx1ZSggcHJldiwgZmllbGRJZCwgdmFsdWUgKSApO1xyXG5cdFx0fSB9XHJcblx0XHRvcHRpb25zPXsgc291cmNlLmZpZWxkc01hcE9wdGlvbnMgfVxyXG5cdC8+ICk7XHJcblxyXG5cdHJldHVybiAoIDw+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJwb3N0X3R5cGVcIlxyXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnBvc3RfdHlwZSB9XHJcblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucG9zdFR5cGVzIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3Bvc3RfdHlwZScgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAncG9zdF90eXBlJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAncG9zdF90eXBlJyApIH1cclxuXHRcdC8+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJwb3N0X3N0YXR1c1wiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucG9zdF9zdGF0dXMgfVxyXG5cdFx0XHRvcHRpb25zPXsgc291cmNlLnBvc3RTdGF0dXNlcyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdwb3N0X3N0YXR1cycgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAncG9zdF9zdGF0dXMnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdwb3N0X3N0YXR1cycgKSB9XHJcblx0XHQvPlxyXG5cdFx0PEFjdGlvbkZpZWxkc01hcFxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdGtleT0ndXNlcl9maWVsZHNfbWFwJ1xyXG5cdFx0XHRmaWVsZHM9eyBmb3JtRmllbGRzIH1cclxuXHRcdD5cclxuXHRcdFx0eyAoIHsgZmllbGRJZCwgZmllbGREYXRhLCBpbmRleCB9ICkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxyXG5cdFx0XHRcdFx0ZmllbGQ9eyBbIGZpZWxkSWQsIGZpZWxkRGF0YSBdIH1cclxuXHRcdFx0XHQ+XHJcblxyXG5cdFx0XHRcdFx0eyAncG9zdF9tZXRhJyA9PT0gZmllbGRUeXBlWyBmaWVsZElkIF0gJiZcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb21wb25lbnRzLWJhc2UtY29udHJvbCBqZXQtbWFyZ2luLWJvdHRvbS13cmFwcGVyJz5cclxuXHRcdFx0XHRcdFx0eyBnZXRGaWVsZFNlbGVjdCggZmllbGRJZCwgaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IGZpZWxkSWQgKyBpbmRleCArICdfdGV4dCcgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZTogZmllbGRJZCB9ICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gc2V0TWFwRmllbGQoIHsgbmFtZUZpZWxkOiBmaWVsZElkLCB2YWx1ZSB9ICkgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+IH1cclxuXHRcdFx0XHRcdHsgJ3Bvc3RfdGVybXMnID09PSBmaWVsZFR5cGVbIGZpZWxkSWQgXSAmJlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbXBvbmVudHMtYmFzZS1jb250cm9sIGpldC1tYXJnaW4tYm90dG9tLXdyYXBwZXInPlxyXG5cdFx0XHRcdFx0XHR7IGdldEZpZWxkU2VsZWN0KCBmaWVsZElkLCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZElkICsgaW5kZXggKyAnX3RleHQnIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGdldE1hcEZpZWxkKCB7IG5hbWU6IGZpZWxkSWQgfSApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKCB7IG5hbWVGaWVsZDogZmllbGRJZCwgdmFsdWUgfSApIH1cclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgdGF4b25vbWllcyB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gfVxyXG5cdFx0XHRcdFx0eyAhIFsgJ3Bvc3RfbWV0YScsXHJcblx0XHRcdFx0XHRcdCdwb3N0X3Rlcm1zJyBdLmluY2x1ZGVzKCBmaWVsZFR5cGVbIGZpZWxkSWQgXSApICYmIGdldEZpZWxkU2VsZWN0KCBmaWVsZElkLCBpbmRleCApIH1cclxuXHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+XHJcblx0XHRcdH0gfVxyXG5cdFx0PC9BY3Rpb25GaWVsZHNNYXA+XHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2RlZmF1bHRfbWV0YScgKSB9XHJcblx0XHRcdGtleT1cImRlZmF1bHRfbWV0YVwiXHJcblx0XHQ+XHJcblx0XHRcdDxKZXREZWZhdWx0TWV0YUNvbnRyb2xcclxuXHRcdFx0XHRkZWZhdWx0TWV0YT17IHNldHRpbmdzLmRlZmF1bHRfbWV0YSB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnZGVmYXVsdF9tZXRhJyApIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0PC8+ICk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5hZGRBY3Rpb24oICdpbnNlcnRfcG9zdCcsIHdpdGhTZWxlY3QoIHdpdGhSZXF1ZXN0RmllbGRzICkoIEluc2VydFBvc3RBY3Rpb24gKSApO1xyXG4iLCJpbXBvcnQgQmFzZUFjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9iYXNlLWFjdGlvbi1jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZWdyYXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQWN0aW9uQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy52YWxpZGF0ZUFQSUtleSA9IHRoaXMudmFsaWRhdGVBUElLZXkuYmluZCggdGhpcyApO1xyXG5cdFx0dGhpcy5nZXRBcGlEYXRhID0gdGhpcy5nZXRBcGlEYXRhLmJpbmQoIHRoaXMgKTtcclxuXHRcdHRoaXMuZ2V0TGlzdHMgPSB0aGlzLmdldExpc3RzLmJpbmQoIHRoaXMgKTtcclxuXHJcblx0XHR0aGlzLmZvcm1GaWVsZHNMaXN0ID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRjbGFzc05hbWU6IFsgdGhpcy5nZXRjbGFzc05hbWVWYWxpZGF0ZUJ1dHRvbigpIF0sXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVBUElLZXkoIGN1c3RvbUFwaUtleSA9IGZhbHNlICkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2xvYWRpbmcnIF0gfSApO1xyXG5cclxuXHRcdGlmICggY3VzdG9tQXBpS2V5ICYmICdzdHJpbmcnID09PSB0eXBlb2YgY3VzdG9tQXBpS2V5ICkge1xyXG5cdFx0XHR0aGlzLmdldEFwaURhdGEoIGN1c3RvbUFwaUtleSApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblx0XHR0aGlzLmdldEFwaURhdGEoIHNldHRpbmdzLmFwaV9rZXkgKTtcclxuXHR9XHJcblxyXG5cdGdldEFwaURhdGEoIGFwaUtleSApIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGlmICggISBhcGlLZXkgKSB7XHJcblx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBudWxsLCAnaXNWYWxpZEFQSScgKTtcclxuXHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFtdIH0gKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGpRdWVyeS5hamF4KCB7XHJcblx0XHRcdHVybDogYWpheHVybCxcclxuXHRcdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0J2FjdGlvbic6IHRoaXMucHJvcHMuc291cmNlLmFjdGlvbixcclxuXHRcdFx0XHQnYXBpX2tleSc6IGFwaUtleVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoIHJlc3BvbnNlICkge1xyXG5cdFx0XHRcdGlmICggcmVzcG9uc2Uuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCB0cnVlLCAnaXNWYWxpZEFQSScgKTtcclxuXHRcdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCByZXNwb25zZS5kYXRhLCAnZGF0YScgKTtcclxuXHJcblx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnaXMtdmFsaWQnIF0gfSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBmYWxzZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnaXMtaW52YWxpZCcgXSB9ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBmYWxzZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2lzLWludmFsaWQnIF0gfSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGdldGNsYXNzTmFtZVZhbGlkYXRlQnV0dG9uKCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggdHJ1ZSA9PT0gc2V0dGluZ3MuaXNWYWxpZEFQSSApIHtcclxuXHRcdFx0cmV0dXJuICdpcy12YWxpZCc7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggZmFsc2UgPT09IHNldHRpbmdzLmlzVmFsaWRBUEkgKSB7XHJcblx0XHRcdHJldHVybiAnaXMtaW52YWxpZCc7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiY29uc3Qge1xyXG5cdGFkZEFjdGlvbixcclxuXHRnbG9iYWxUYWIsXHJcbn0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdENoZWNrYm94Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdEFjdGlvbkZpZWxkc01hcCxcclxuXHRXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxyXG5cdFZhbGlkYXRlQnV0dG9uV2l0aFN0b3JlLFxyXG59ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBjb252ZXJ0T2JqZWN0VG9PcHRpb25zTGlzdCwgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgd2l0aFJlcXVlc3RGaWVsZHMsIHdpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhTZWxlY3QsXHJcblx0d2l0aERpc3BhdGNoLFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3QsXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gTWFpbENoaW1wQWN0aW9uKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0c2V0dGluZ3MsXHJcblx0XHRsYWJlbCxcclxuXHRcdGhlbHAsXHJcblx0XHRyZXF1ZXN0RmllbGRzID0gW10sXHJcblx0XHRvbkNoYW5nZVNldHRpbmdPYmosXHJcblx0XHRnZXRNYXBGaWVsZCxcclxuXHRcdHNldE1hcEZpZWxkLFxyXG5cdFx0c291cmNlLFxyXG5cdFx0bG9hZGluZ1N0YXRlLFxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgY3VycmVudFRhYiA9IGdsb2JhbFRhYiggeyBzbHVnOiAnbWFpbGNoaW1wLXRhYicgfSApO1xyXG5cclxuXHRjb25zdCBbIGZvcm1GaWVsZHNMaXN0LCBzZXRGb3JtRmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRzZXRGb3JtRmllbGRzKCBbIC4uLmdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICksIC4uLnJlcXVlc3RGaWVsZHMgXSApO1xyXG5cdH0sIFtdICk7XHJcblxyXG5cdGNvbnN0IGdldEZpZWxkcyA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHsgZGF0YSA9IHt9IH0gPSBsb2FkaW5nU3RhdGUucmVzcG9uc2UgfHwge307XHJcblxyXG5cdFx0aWYgKCBzZXR0aW5ncy5saXN0X2lkICYmIGRhdGE/LmZpZWxkc1sgc2V0dGluZ3MubGlzdF9pZCBdICkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXMoIGRhdGEuZmllbGRzWyBzZXR0aW5ncy5saXN0X2lkIF0gKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRMaXN0cyA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHsgZGF0YSA9IHt9IH0gPSBsb2FkaW5nU3RhdGUucmVzcG9uc2UgfHwge307XHJcblxyXG5cdFx0aWYgKCBkYXRhLmxpc3RzICkge1xyXG5cdFx0XHRyZXR1cm4gY29udmVydE9iamVjdFRvT3B0aW9uc0xpc3QoIGRhdGEubGlzdHMgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRHcm91cHMgPSAoKSA9PiB7XHJcblx0XHRjb25zdCB7IGRhdGEgPSB7fSB9ID0gbG9hZGluZ1N0YXRlLnJlc3BvbnNlIHx8IHt9O1xyXG5cclxuXHRcdGlmICggZGF0YS5ncm91cHMgKSB7XHJcblx0XHRcdHJldHVybiBkYXRhLmdyb3Vwc1sgc2V0dGluZ3MubGlzdF9pZCBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH07XHJcblxyXG5cclxuXHRjb25zdCBpc0NoZWNrZWRHcm91cCA9IHZhbHVlID0+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHZhbHVlICYmIHNldHRpbmdzLmdyb3Vwc19pZHMgJiYgc2V0dGluZ3MuZ3JvdXBzX2lkc1sgdmFsdWUgXVxyXG5cdFx0KVxyXG5cdFx0XHQ/IHNldHRpbmdzLmdyb3Vwc19pZHNbIHZhbHVlIF1cclxuXHRcdFx0OiBmYWxzZTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRBcGlLZXkgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gc2V0dGluZ3MudXNlX2dsb2JhbCA/IGN1cnJlbnRUYWIuYXBpX2tleSA6IHNldHRpbmdzLmFwaV9rZXk7XHJcblx0fTtcclxuXHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYga2V5PVwibWFpbGNoaW1wXCI+XHJcblx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0a2V5PXsgJ3VzZV9nbG9iYWwnIH1cclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlX2dsb2JhbCcgKSB9XHJcblx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLnVzZV9nbG9iYWwgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgdXNlX2dsb2JhbCA9PiB7XHJcblx0XHRcdFx0XHRvbkNoYW5nZVNldHRpbmdPYmooIHtcclxuXHRcdFx0XHRcdFx0dXNlX2dsb2JhbDogQm9vbGVhbiggdXNlX2dsb2JhbCApLFxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRrZXk9eyAnbWFpbGNoaW1wX2tleV9pbnB1dHMnIH1cclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYXBpX2tleScgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1jb250cm9sLWNsZWFyLWZ1bGwgamV0LWQtZmxleC1iZXR3ZWVuXCI+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdhcGlfa2V5J1xyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IHNldHRpbmdzLnVzZV9nbG9iYWwgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGdldEFwaUtleSgpIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBhcGlfa2V5ID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyBhcGlfa2V5IH0gKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFZhbGlkYXRlQnV0dG9uV2l0aFN0b3JlXHJcblx0XHRcdFx0XHRcdGluaXRpYWxMYWJlbD17IGxhYmVsKCAndmFsaWRhdGVfYXBpX2tleScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZXRyeV9yZXF1ZXN0JyApIH1cclxuXHRcdFx0XHRcdFx0YWpheEFyZ3M9eyB7XHJcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiBzb3VyY2UuYWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdGFwaV9rZXk6IGdldEFwaUtleSgpLFxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxkaXYvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luLWJvdHRvbS0tc21hbGwnPnsgaGVscCggJ2FwaV9rZXlfbGlua19wcmVmaXgnICkgfSA8YVxyXG5cdFx0XHRcdGhyZWY9eyBoZWxwKCAnYXBpX2tleV9saW5rJyApIH0+eyBoZWxwKCAnYXBpX2tleV9saW5rX3N1ZmZpeCcgKSB9PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyBsb2FkaW5nU3RhdGUuc3VjY2VzcyAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdsaXN0X2lkJyApIH1cclxuXHRcdFx0XHRcdGtleT0nbGlzdF9pZCdcclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3NpZGUnXHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmxpc3RfaWQgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBsaXN0X2lkID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyBsaXN0X2lkIH0gKSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgZ2V0TGlzdHMoKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7IEJvb2xlYW4oIHNldHRpbmdzLmxpc3RfaWQgKSAmJiA8PlxyXG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdncm91cHNfaWRzJyApIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxyXG5cdFx0XHRcdFx0XHRcdHsgZ2V0R3JvdXBzKCkubWFwKCBncm91cCA9PiA8Q2hlY2tib3hDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyBgZ3JvdXBzX2lkc18keyBncm91cC52YWx1ZSB9YCB9XHJcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgaXNDaGVja2VkR3JvdXAoIGdyb3VwLnZhbHVlICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBncm91cC5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGFjdGl2ZSA9PiBvbkNoYW5nZVNldHRpbmdPYmooIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXBzX2lkczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldHRpbmdzPy5ncm91cHNfaWRzIHx8IHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGdyb3VwLnZhbHVlIF06IGFjdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0XHRcdFx0Lz4gKSB9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J21haWxjaGltcF90YWdzJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnRhZ3MgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndGFncycgKSB9XHJcblx0XHRcdFx0XHRcdGhlbHA9eyBoZWxwKCAndGFncycgKSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGFncyA9PiBvbkNoYW5nZVNldHRpbmdPYmooIHsgdGFncyB9ICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdkb3VibGVfb3B0X2luJyB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdkb3VibGVfb3B0X2luJyApIH1cclxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmRvdWJsZV9vcHRfaW4gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGRvdWJsZV9vcHRfaW4gPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7XHJcblx0XHRcdFx0XHRcdFx0ZG91YmxlX29wdF9pbjogQm9vbGVhbiggZG91YmxlX29wdF9pbiApLFxyXG5cdFx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxBY3Rpb25GaWVsZHNNYXBcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdFx0XHRrZXk9J21haWxjaGltcCdcclxuXHRcdFx0XHRcdFx0ZmllbGRzPXsgZ2V0RmllbGRzKCkgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7ICggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKSA9PiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGZpZWxkPXsgWyBmaWVsZElkLCBmaWVsZERhdGEgXSB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZElkICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBnZXRNYXBGaWVsZCggeyBuYW1lOiBmaWVsZElkIH0gKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKCB7IG5hbWVGaWVsZDogZmllbGRJZCwgdmFsdWUgfSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzTGlzdCB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPiB9XHJcblx0XHRcdFx0XHQ8L0FjdGlvbkZpZWxkc01hcD5cclxuXHRcdFx0XHQ8Lz4gfVxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxufVxyXG5cclxuYWRkQWN0aW9uKCAnbWFpbGNoaW1wJywgY29tcG9zZShcclxuXHR3aXRoU2VsZWN0KCB3aXRoUmVxdWVzdEZpZWxkcyApLFxyXG5cdHdpdGhTZWxlY3QoIHdpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nICksXHJcbikoIE1haWxDaGltcEFjdGlvbiApICk7IiwiY29uc3Qge1xyXG5cdFx0ICBUb29scyxcclxuXHRcdCAgYWRkQWN0aW9uLFxyXG5cdFx0ICBnZXRGb3JtRmllbGRzQmxvY2tzLFxyXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgRmllbGRXaXRoUHJlc2V0LFxyXG5cdFx0ICBEeW5hbWljUHJlc2V0LFxyXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdFx0ICBDaGVja2JveENvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdFx0ICB1c2VFZmZlY3QsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHsgd2l0aFJlcXVlc3RGaWVsZHMgfSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5mdW5jdGlvbiBSZWRpcmVjdFRvUGFnZUFjdGlvbiggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBzb3VyY2UsXHJcblx0XHRcdCAgbGFiZWwsXHJcblx0XHRcdCAgc2V0dGluZ3MsXHJcblx0XHRcdCAgb25DaGFuZ2VTZXR0aW5nLFxyXG5cdFx0XHQgIG9uQ2hhbmdlU2V0dGluZ09iaixcclxuXHRcdFx0ICByZXF1ZXN0RmllbGRzLFxyXG5cdFx0ICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IFsgdHlwZVBhZ2VzLCBzZXRUeXBlUGFnZXMgXSA9IHVzZVN0YXRlKCBzb3VyY2UucmVkaXJlY3RfdHlwZXMgKTtcclxuXHRjb25zdCBbIGZpZWxkcywgc2V0RmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRjb25zdCBoYXNJbnNlcnRlZCA9IHJlcXVlc3RGaWVsZHMuZmluZEluZGV4KCBmaWVsZCA9PiAnaW5zZXJ0ZWRfcG9zdF9pZCcgPT09IGZpZWxkLnZhbHVlICk7XHJcblxyXG5cdFx0aWYgKCAtMSA9PT0gaGFzSW5zZXJ0ZWQgKSB7XHJcblx0XHRcdHNldFR5cGVQYWdlcyggcHJldiA9PiBwcmV2LmZpbHRlciggdHlwZSA9PiAnaW5zZXJ0ZWRfcG9zdCcgIT09IHR5cGUudmFsdWUgKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZpbHRlclR5cGVzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZGlyZWN0X3RvX3BhZ2UudHlwZXMnLCBbXSwgcHJvcHMgKTtcclxuXHJcblx0XHRpZiAoIGZpbHRlclR5cGVzLmxlbmd0aCApIHtcclxuXHRcdFx0c2V0VHlwZVBhZ2VzKCBwcmV2ID0+ICggWyAuLi5wcmV2LCAuLi5maWx0ZXJUeXBlcyBdICkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRGaWVsZHMoIFsgLi4uZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpLCAuLi5yZXF1ZXN0RmllbGRzIF0gKTtcclxuXHR9LCBbXSApO1xyXG5cclxuXHRjb25zdCBpc0NoZWNrZWQgPSBmdW5jdGlvbiggbmFtZSApIHtcclxuXHRcdGNvbnN0IGFyZ3NfZmllbGRzID0gQXJyYXkuZnJvbSggc2V0dGluZ3MucmVkaXJlY3RfYXJncyB8fCBbXSApO1xyXG5cclxuXHRcdHJldHVybiBCb29sZWFuKCBhcmdzX2ZpZWxkcy5pbmNsdWRlcyggbmFtZSApICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkNoYW5nZVJlZGlyZWN0QXJncyA9IGZ1bmN0aW9uKCB2YWx1ZSwgZmllbGRfbmFtZSApIHtcclxuXHRcdGxldCByZWRpcmVjdF9hcmdzID0gQXJyYXkuZnJvbSggc2V0dGluZ3MucmVkaXJlY3RfYXJncyB8fCBbXSApO1xyXG5cclxuXHRcdGlmICggISB2YWx1ZSApIHtcclxuXHRcdFx0Y29uc3QgZmllbGRfaWQgPSByZWRpcmVjdF9hcmdzLmluZGV4T2YoIGZpZWxkX25hbWUgKTtcclxuXHJcblx0XHRcdHJlZGlyZWN0X2FyZ3Muc3BsaWNlKCBmaWVsZF9pZCwgMSApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVkaXJlY3RfYXJncy5wdXNoKCBmaWVsZF9uYW1lICk7XHJcblx0XHR9XHJcblxyXG5cdFx0b25DaGFuZ2VTZXR0aW5nT2JqKCB7IHJlZGlyZWN0X2FyZ3MgfSApO1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gKCA8ZGl2IGtleT1cInJlZGlyZWN0X3RvX3BhZ2VcIj5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRrZXk9J3JlZGlyZWN0X3R5cGUnXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF90eXBlJyApIH1cclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X3R5cGUgfVxyXG5cdFx0XHRvcHRpb25zPXsgdHlwZVBhZ2VzIH1cclxuXHRcdFx0b25DaGFuZ2U9eyByZWRpcmVjdF90eXBlID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyByZWRpcmVjdF90eXBlIH0gKSB9XHJcblx0XHQvPlxyXG5cdFx0eyAnc3RhdGljX3BhZ2UnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT0ncmVkaXJlY3RfdHlwZV9wYWdlJ1xyXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X3BhZ2UnICkgfVxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfcGFnZSB9XHJcblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucGFnZXMgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHJlZGlyZWN0X3BhZ2UgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IHJlZGlyZWN0X3BhZ2UgfSApIH1cclxuXHRcdC8+IH1cclxuXHJcblx0XHR7ICdjdXN0b21fdXJsJyA9PT0gc2V0dGluZ3MucmVkaXJlY3RfdHlwZSAmJiA8RmllbGRXaXRoUHJlc2V0XHJcblx0XHRcdGtleT17ICdjdXN0b21fdXJsLUZpZWxkV2l0aFByZXNldCcgfVxyXG5cdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF91cmwgfVxyXG5cdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRvblNhdmVQcmVzZXQ9eyByZWRpcmVjdF91cmwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IHJlZGlyZWN0X3VybCB9ICkgfVxyXG5cdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRleGNsdWRlU291cmNlcz17IFsgJ3F1ZXJ5X3ZhcicgXSB9XHJcblx0XHRcdC8+IH1cclxuXHRcdFx0dHJpZ2dlckNsYXNzZXM9eyBbICd0cmlnZ2VyX190ZXh0LWNvbnRyb2wnIF0gfVxyXG5cdFx0PlxyXG5cdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRrZXk9J3JlZGlyZWN0X3VybF9jb250cm9sJ1xyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF91cmwnICkgfVxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfdXJsIH1cclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWNvbnRyb2wtd2l0aC1keW5hbWljJyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyByZWRpcmVjdF91cmwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IHJlZGlyZWN0X3VybCB9ICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9GaWVsZFdpdGhQcmVzZXQ+IH1cclxuXHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfYXJncycgKSB9XHJcblx0XHRcdGtleT1cInJlZGlyZWN0X2FyZ3NfY29udHJvbFwiXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0XHR7IGZpZWxkcy5tYXAoICggeyBuYW1lIH0sIGluZGV4ICkgPT4gPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBgY2hlY2tib3hfYXJnc18keyBuYW1lIH1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IG5hbWUgfVxyXG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgaXNDaGVja2VkKCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVJlZGlyZWN0QXJncyggbmV3VmFsLCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0Lz4sXHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9J3JlZGlyZWN0X2hhc2hfY29udHJvbCdcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X2hhc2gnICkgfVxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X2hhc2ggfVxyXG5cdFx0XHRvbkNoYW5nZT17IHJlZGlyZWN0X2hhc2ggPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IHJlZGlyZWN0X2hhc2ggfSApIH1cclxuXHRcdC8+XHJcblx0PC9kaXY+ICk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5hZGRBY3Rpb24oICdyZWRpcmVjdF90b19wYWdlJywgd2l0aFNlbGVjdCggd2l0aFJlcXVlc3RGaWVsZHMgKSggUmVkaXJlY3RUb1BhZ2VBY3Rpb24gKSApO1xyXG5cclxuIiwiY29uc3Qge1xyXG5cdFx0ICBXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxyXG5cdFx0ICBBY3Rpb25NZXNzYWdlcyxcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcbmNvbnN0IHtcclxuXHRcdCAgYWRkQWN0aW9uLFxyXG5cdFx0ICBnZXRGb3JtRmllbGRzQmxvY2tzLFxyXG5cdFx0ICBUb29sczogeyB3aXRoUGxhY2Vob2xkZXIgfSxcclxuXHRcdCAgY29udmVydExpc3RUb0ZpZWxkc01hcCxcclxuXHQgIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7IHdpdGhSZXF1ZXN0RmllbGRzIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFx0ICBUZXh0Q29udHJvbCxcclxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcclxuXHRcdCAgU2VsZWN0Q29udHJvbCxcclxuXHRcdCAgQmFzZUNvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIHVzZVN0YXRlLFxyXG5cdFx0ICB1c2VFZmZlY3QsXHJcblx0ICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdGVyVXNlckFjdGlvbiggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBzZXR0aW5ncyxcclxuXHRcdFx0ICBzb3VyY2UsXHJcblx0XHRcdCAgbGFiZWwsXHJcblx0XHRcdCAgaGVscCxcclxuXHRcdFx0ICBvbkNoYW5nZVNldHRpbmdPYmosXHJcblx0XHRcdCAgZ2V0TWFwRmllbGQsXHJcblx0XHRcdCAgc2V0TWFwRmllbGQsXHJcblx0XHRcdCAgcmVxdWVzdEZpZWxkcyxcclxuXHRcdCAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBbIGZpZWxkcywgc2V0RmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHRjb25zdCBbIGZpZWxkc1dpdGhSZXF1ZXN0LCBzZXRGaWVsZHNXaXRoUmVxdWVzdCBdID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0Y29uc3QgX2ZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcclxuXHRcdHNldEZpZWxkcyggWyAuLi5fZmllbGRzLCAuLi5yZXF1ZXN0RmllbGRzIF0gKTtcclxuXHRcdHNldEZpZWxkc1dpdGhSZXF1ZXN0KCBjb252ZXJ0TGlzdFRvRmllbGRzTWFwKCBfZmllbGRzLCByZXF1ZXN0RmllbGRzICkgKTtcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzLmFkZF91c2VyX2lkICkge1xyXG5cdFx0XHRvbkNoYW5nZVNldHRpbmdPYmooIHsgcmVxdWVzdEZpZWxkczogWyBzb3VyY2UucmVxdWVzdEZpZWxkcy51c2VyX2lkIF0gfSApXHJcblx0XHR9XHJcblx0fSwgW10gKTtcclxuXHJcblx0Y29uc3QgdXNlckZpZWxkcyA9IE9iamVjdC5lbnRyaWVzKCBzb3VyY2UudXNlckZpZWxkcyApO1xyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJldHVybiAoIDxSZWFjdC5GcmFnbWVudCBrZXk9XCJyZWdpc3Rlcl91c2VyXCI+XHJcblx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRrZXk9J2FsbG93X3JlZ2lzdGVyJ1xyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnYWxsb3dfcmVnaXN0ZXInICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MuYWxsb3dfcmVnaXN0ZXIgfVxyXG5cdFx0XHRvbkNoYW5nZT17IGFsbG93X3JlZ2lzdGVyID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyBhbGxvd19yZWdpc3RlciB9ICkgfVxyXG5cdFx0Lz5cclxuXHRcdHsgc2V0dGluZ3MuYWxsb3dfcmVnaXN0ZXIgJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PVwicm9sZV9jYW5fcmVnaXN0ZXJcIlxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncm9sZV9jYW5fcmVnaXN0ZXInICkgfVxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3Mucm9sZV9jYW5fcmVnaXN0ZXIgfVxyXG5cdFx0XHRvcHRpb25zPXsgc291cmNlLmFsbFVzZXJSb2xlcyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgcm9sZV9jYW5fcmVnaXN0ZXIgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IHJvbGVfY2FuX3JlZ2lzdGVyIH0gKSB9XHJcblx0XHQvPiB9XHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRrZXk9XCJ1c2VyX2ZpZWxkc19tYXBcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC11c2VyLWZpZWxkcy1tYXBfX2xpc3RcIj5cclxuXHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfT57IF9fKCAnU2V0IGZvcm0gZmllbGRzIG5hbWVzIHRvIHRvIGdldCB1c2VyIGRhdGEgZnJvbScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L3NwYW4+XHJcblx0XHRcdFx0eyB1c2VyRmllbGRzLm1hcCggKCBbIHZhbHVlLCBkYXRhIF0gKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXHJcblx0XHRcdFx0XHRcdGZpZWxkPXsgWyB2YWx1ZSwgZGF0YSBdIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBgdXNlcl9maWVsZHNfJHsgdmFsdWUgfWAgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZTogdmFsdWUgfSApIH1cclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgd2l0aFBsYWNlaG9sZGVyKCBmaWVsZHMgKSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRNYXBGaWVsZCggeyBuYW1lRmllbGQ6IHZhbHVlLCB2YWx1ZTogbmV3VmFsdWUgfSApIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvV3JhcHBlclJlcXVpcmVkQ29udHJvbD47XHJcblx0XHRcdFx0fSApIH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PVwidXNlcl9yb2xlX2xpc3RcIlxyXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfcm9sZScgKSB9XHJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy51c2VyX3JvbGUgfVxyXG5cdFx0XHRvcHRpb25zPXsgc291cmNlLnVzZXJSb2xlcyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgdXNlcl9yb2xlID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyB1c2VyX3JvbGUgfSApIH1cclxuXHRcdC8+XHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfbWV0YScgKSB9XHJcblx0XHRcdGtleT0ndXNlcl9tZXRhX2xpc3QnXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfT57IF9fKCAnU2V0IHVzZXIgbWV0YSBmaWVsZHMgdG8gc2F2ZSBhcHByb3ByaWF0ZSBmb3JtIGZpZWxkcyBpbnRvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvc3Bhbj5cclxuXHRcdFx0XHR7IGZpZWxkc1dpdGhSZXF1ZXN0Lm1hcCggKCBbIG5hbWUsIGRhdGEgXSApID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRmaWVsZD17IFsgbmFtZSwgZGF0YSBdIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgYGZvcm1fZmllbGRzXyR7IG5hbWUgfWAgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgc291cmNlOiAnbWV0YV9maWVsZHNfbWFwJywgbmFtZSB9ICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHNldE1hcEZpZWxkKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lRmllbGQ6IG5hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0c291cmNlOiAnbWV0YV9maWVsZHNfbWFwJyxcclxuXHRcdFx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPjtcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRrZXk9J2xvZ19pbidcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2xvZ19pbicgKSB9XHJcblx0XHRcdGNoZWNrZWQ9eyBzZXR0aW5ncy5sb2dfaW4gfVxyXG5cdFx0XHRvbkNoYW5nZT17IGxvZ19pbiA9PiBvbkNoYW5nZVNldHRpbmdPYmooIHsgbG9nX2luIH0gKSB9XHJcblx0XHQvPlxyXG5cdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0a2V5PSdhZGRfdXNlcl9pZF9jb250cm9sJ1xyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnYWRkX3VzZXJfaWQnICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MuYWRkX3VzZXJfaWQgfVxyXG5cdFx0XHRvbkNoYW5nZT17IGFkZF91c2VyX2lkID0+IG9uQ2hhbmdlU2V0dGluZ09iaigge1xyXG5cdFx0XHRcdGFkZF91c2VyX2lkLFxyXG5cdFx0XHRcdHJlcXVlc3RGaWVsZHM6IGFkZF91c2VyX2lkID8gWyBzb3VyY2UucmVxdWVzdEZpZWxkcy51c2VyX2lkIF0gOiBbXSxcclxuXHRcdFx0fSApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdhZGRfdXNlcl9pZCcgKSB9XHJcblx0XHQvPlxyXG5cdFx0PEFjdGlvbk1lc3NhZ2VzIHsgLi4ucHJvcHMgfSAvPlxyXG5cdDwvUmVhY3QuRnJhZ21lbnQ+ICk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5hZGRBY3Rpb24oICdyZWdpc3Rlcl91c2VyJywgd2l0aFNlbGVjdCggd2l0aFJlcXVlc3RGaWVsZHMgKSggUmVnaXN0ZXJVc2VyQWN0aW9uICkgKTtcclxuIiwiLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgTWFjcm9zSW5zZXJ0ZXIsXHJcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBhZGRBY3Rpb24sXHJcblx0XHQgIGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcblx0XHQgIFRvb2xzOiB7IHdpdGhQbGFjZWhvbGRlciB9LFxyXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFRleHRhcmVhQ29udHJvbCxcclxuXHRcdCAgU2VsZWN0Q29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VTdGF0ZSxcclxuXHRcdCAgdXNlRWZmZWN0LFxyXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7IHdpdGhSZXF1ZXN0RmllbGRzIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xyXG5cclxuZnVuY3Rpb24gU2VuZEVtYWlsQWN0aW9uKCB7XHJcblx0XHRcdFx0XHRcdFx0ICBzZXR0aW5ncyxcclxuXHRcdFx0XHRcdFx0XHQgIHNvdXJjZSxcclxuXHRcdFx0XHRcdFx0XHQgIGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdCAgaGVscCxcclxuXHRcdFx0XHRcdFx0XHQgIG9uQ2hhbmdlU2V0dGluZyxcclxuXHRcdFx0XHRcdFx0XHQgIHJlcXVlc3RGaWVsZHMsXHJcblx0XHRcdFx0XHRcdCAgfSApIHtcclxuXHJcblx0Y29uc3QgWyBmb3JtRmllbGRzLCBzZXRGb3JtRmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRzZXRGb3JtRmllbGRzKCBbIC4uLmdldEZvcm1GaWVsZHNCbG9ja3MoKSwgLi4ucmVxdWVzdEZpZWxkcyBdICk7XHJcblx0fSwgW10gKTtcclxuXHJcblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XHJcblx0XHRjb25zdCBjb250ZW50ID0gKCBzZXR0aW5ncy5jb250ZW50IHx8ICcnICkgKyAnJScgKyBtYWNyb3MgKyAnJSc7XHJcblx0XHRvbkNoYW5nZVNldHRpbmcoIGNvbnRlbnQsICdjb250ZW50JyApO1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cIm1haWxfdG9cIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLm1haWxfdG8gfVxyXG5cdFx0XHRvcHRpb25zPXsgc291cmNlLm1haWxUbyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtYWlsX3RvJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdtYWlsX3RvJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdtYWlsX3RvJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7ICdjdXN0b20nID09PSBzZXR0aW5ncy5tYWlsX3RvICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJjdXN0b21fZW1haWxcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmN1c3RvbV9lbWFpbCB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjdXN0b21fZW1haWwnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2N1c3RvbV9lbWFpbCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnY3VzdG9tX2VtYWlsJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdHsgJ2Zvcm0nID09PSBzZXR0aW5ncy5tYWlsX3RvICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cImZyb21fZmllbGRcIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmZyb21fZmllbGQgfVxyXG5cdFx0XHRvcHRpb25zPXsgd2l0aFBsYWNlaG9sZGVyKCBmb3JtRmllbGRzICkgfVxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnZnJvbV9maWVsZCcgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAnZnJvbV9maWVsZCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnZnJvbV9maWVsZCcgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPiB9XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJyZXBseV90b1wiXHJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVwbHlfdG8gfVxyXG5cdFx0XHRvcHRpb25zPXsgc291cmNlLnJlcGx5VG8gfVxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncmVwbHlfdG8nICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ3JlcGx5X3RvJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdyZXBseV90bycgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0eyAnY3VzdG9tJyA9PT0gc2V0dGluZ3MucmVwbHlfdG8gJiYgPFRleHRDb250cm9sXHJcblx0XHRcdGtleT1cInJlcGx5X3RvX2VtYWlsXCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZXBseV90b19lbWFpbCB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZXBseV90b19lbWFpbCcgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAncmVwbHlfdG9fZW1haWwnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3JlcGx5X3RvX2VtYWlsJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdHsgJ2Zvcm0nID09PSBzZXR0aW5ncy5yZXBseV90byAmJiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJyZXBseV9mcm9tX2ZpZWxkXCJcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZXBseV9mcm9tX2ZpZWxkIH1cclxuXHRcdFx0b3B0aW9ucz17IHdpdGhQbGFjZWhvbGRlciggZm9ybUZpZWxkcyApIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlcGx5X2Zyb21fZmllbGQnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ3JlcGx5X2Zyb21fZmllbGQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3JlcGx5X2Zyb21fZmllbGQnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT1cInN1YmplY3RcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnN1YmplY3QgfVxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnc3ViamVjdCcgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAnc3ViamVjdCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnc3ViamVjdCcgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT1cImZyb21fbmFtZVwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZnJvbV9uYW1lIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2Zyb21fbmFtZScgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAnZnJvbV9uYW1lJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdmcm9tX25hbWUnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJmcm9tX2FkZHJlc3NcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmZyb21fYWRkcmVzcyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdmcm9tX2FkZHJlc3MnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2Zyb21fYWRkcmVzcycgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnZnJvbV9hZGRyZXNzJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJjb250ZW50X3R5cGVcIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmNvbnRlbnRfdHlwZSB9XHJcblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UuY29udGVudF90eXBlIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2NvbnRlbnRfdHlwZScgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAnY29udGVudF90eXBlJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2NvbnRlbnRfdHlwZScgKSB9XHJcblx0XHQvPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy13cmFwXCI+XHJcblx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJjb250ZW50XCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmNvbnRlbnQgfVxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdjb250ZW50JyApIH1cclxuXHRcdFx0XHRoZWxwPXsgaGVscCggJ2NvbnRlbnQnICkgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdjb250ZW50JyApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8TWFjcm9zSW5zZXJ0ZXJcclxuXHRcdFx0XHRmaWVsZHM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0XHRvbkZpZWxkQ2xpY2s9eyBpbnNlcnRNYWNyb3MgfVxyXG5cdFx0XHRcdGN1c3RvbU1hY3Jvcz17IHNvdXJjZS5jdXN0b21NYWNyb3MgfVxyXG5cdFx0XHRcdHpJbmRleD17IDEwMDAwMDAwIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPjtcclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn1cclxuXHJcbmFkZEFjdGlvbiggJ3NlbmRfZW1haWwnLCB3aXRoU2VsZWN0KCB3aXRoUmVxdWVzdEZpZWxkcyApKCBTZW5kRW1haWxBY3Rpb24gKSApXHJcbiIsImNvbnN0IHtcclxuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRcdCAgYWRkQWN0aW9uLFxyXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRcdCAgVGV4dENvbnRyb2wsXHJcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICB1c2VTdGF0ZSxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAndXBkYXRlX29wdGlvbnMnLCBjbGFzcyBVcGRhdGVPcHRpb25zQWN0aW9uIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcclxuXHR9XHJcblxyXG5cdGdldEZpZWxkQnlOYW1lKCB7IHNvdXJjZSwgbmFtZSB9ICkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3NbIHNvdXJjZSBdICYmIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRnZXRGaWVsZE1ldGEoIG5hbWUgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRGaWVsZEJ5TmFtZSgge1xyXG5cdFx0XHRzb3VyY2U6ICdtZXRhX2ZpZWxkc19tYXAnLFxyXG5cdFx0XHRuYW1lLFxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlRmllbGRzTWFwKCB7IHNvdXJjZSwgbmFtZUZpZWxkLCB2YWx1ZSB9ICkge1xyXG5cdFx0Y29uc3QgZmllbGRzTWFwID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdICk7XHJcblxyXG5cdFx0ZmllbGRzTWFwWyBuYW1lRmllbGQgXSA9IHZhbHVlO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwLFxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncywgb25DaGFuZ2UsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3Qgb25DaGFuZ2VNZXRhRmllbGRNYXAgPSAoIHZhbHVlLCBuYW1lRmllbGQgKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNvdXJjZSA9ICdtZXRhX2ZpZWxkc19tYXAnO1xyXG5cclxuXHRcdFx0dGhpcy5jaGFuZ2VGaWVsZHNNYXAoXHJcblx0XHRcdFx0eyB2YWx1ZSwgbmFtZUZpZWxkLCBzb3VyY2UgfSxcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb25DaGFuZ2VTZXR0aW5nID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0XHRvbkNoYW5nZSgge1xyXG5cdFx0XHRcdC4uLnNldHRpbmdzLFxyXG5cdFx0XHRcdFsga2V5IF06IHZhbHVlLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cInJlZ2lzdGVyX3VzZXJcIj5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJvcHRpb25zX3BhZ2VfbGlzdFwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ29wdGlvbnNfcGFnZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3Mub3B0aW9uc19wYWdlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLm9wdGlvbnNQYWdlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ29wdGlvbnNfcGFnZScgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ29wdGlvbnNfbWFwJyApIH1cclxuXHRcdFx0XHRrZXk9J29wdGlvbnNfbWV0YV9saXN0J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxyXG5cdFx0XHRcdFx0eyB0aGlzLmZpZWxkcy5tYXAoICggeyBuYW1lIH0sIGluZGV4ICkgPT4gPGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxyXG5cdFx0XHRcdFx0XHRrZXk9eyAnb3B0aW9uc19tZXRhXycgKyBuYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IG5hbWUgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5nZXRGaWVsZE1ldGEoIG5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gb25DaGFuZ2VNZXRhRmllbGRNYXAoIG5ld1ZhbCwgbmFtZSApIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PiApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHJcblx0XHQ8L2Rpdj4gKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcbn0gKTsiLCJjb25zdCB7XHJcblx0XHQgIGFkZEFjdGlvbixcclxuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRcdCAgY29udmVydExpc3RUb0ZpZWxkc01hcCxcclxuXHRcdCAgVG9vbHM6IHsgd2l0aFBsYWNlaG9sZGVyIH0sXHJcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBBY3Rpb25GaWVsZHNNYXAsXHJcblx0XHQgIFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXHJcblx0XHQgIEFjdGlvbk1lc3NhZ2VzLFxyXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgd2l0aFJlcXVlc3RGaWVsZHMgfSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIEJhc2VDb250cm9sLFxyXG5cdFx0ICBUZXh0Q29udHJvbCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gVXBkYXRlVXNlckFjdGlvbiggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IFsgZmllbGRzLCBzZXRGaWVsZHMgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG5cdGNvbnN0IHtcclxuXHRcdFx0ICBzZXR0aW5ncyxcclxuXHRcdFx0ICBvbkNoYW5nZVNldHRpbmcsXHJcblx0XHRcdCAgc291cmNlLFxyXG5cdFx0XHQgIGxhYmVsLFxyXG5cdFx0XHQgIGdldE1hcEZpZWxkLFxyXG5cdFx0XHQgIHNldE1hcEZpZWxkLFxyXG5cdFx0XHQgIHJlcXVlc3RGaWVsZHMsXHJcblx0XHQgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgWyBmaWVsZFR5cGUsIHNldFR5cGVGaWVsZCBdID0gdXNlU3RhdGUoIHt9ICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0c2V0VHlwZUZpZWxkKCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cclxuXHRcdFx0Zm9yICggY29uc3QgZmllbGRzTWFwS2V5IGluIHNldHRpbmdzLmZpZWxkc19tYXAgKSB7XHJcblx0XHRcdFx0cmVzdWx0WyBmaWVsZHNNYXBLZXkgXSA9IGdldFR5cGVGaWVsZFZhbHVlKCBzZXR0aW5ncy5maWVsZHNfbWFwWyBmaWVsZHNNYXBLZXkgXSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHNldEZpZWxkcyggY29udmVydExpc3RUb0ZpZWxkc01hcCggZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpLCByZXF1ZXN0RmllbGRzICkgKVxyXG5cdH0sIFtdICk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFR5cGVGaWVsZFZhbHVlKCB2YWx1ZSApIHtcclxuXHRcdGxldCByZXN1bHRWYWx1ZSA9ICd1c2VyX21ldGEnO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHVzZXJGaWVsZCBvZiBzb3VyY2UudXNlckZpZWxkcyApIHtcclxuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gdXNlckZpZWxkLnZhbHVlICkge1xyXG5cdFx0XHRcdHJlc3VsdFZhbHVlID0gdmFsdWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0VmFsdWU7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRUeXBlRmllbGRWYWx1ZSggcHJldiwgZmllbGRJRCwgdmFsdWUgKSB7XHJcblx0XHRjb25zdCByZXN1bHRWYWx1ZSA9IGdldFR5cGVGaWVsZFZhbHVlKCB2YWx1ZSApO1xyXG5cclxuXHRcdGlmICggJ3VzZXJfbWV0YScgPT09IHJlc3VsdFZhbHVlICkge1xyXG5cdFx0XHRzZXRNYXBGaWVsZCggeyBuYW1lRmllbGQ6IGZpZWxkSUQsIHZhbHVlOiAnJyB9IClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldE1hcEZpZWxkKCB7IG5hbWVGaWVsZDogZmllbGRJRCwgdmFsdWU6IHJlc3VsdFZhbHVlIH0gKVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC4uLnByZXYsXHJcblx0XHRcdFsgZmllbGRJRCBdOiByZXN1bHRWYWx1ZSxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRGaWVsZFNlbGVjdCA9ICggZmllbGRJZCwgaW5kZXggKSA9PiAoIDxTZWxlY3RDb250cm9sXHJcblx0XHRrZXk9eyBmaWVsZElkICsgaW5kZXggfVxyXG5cdFx0dmFsdWU9eyBmaWVsZFR5cGVbIGZpZWxkSWQgXSB9XHJcblx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHtcclxuXHRcdFx0c2V0VHlwZUZpZWxkKCBwcmV2ID0+IHNldFR5cGVGaWVsZFZhbHVlKCBwcmV2LCBmaWVsZElkLCB2YWx1ZSApICk7XHJcblx0XHR9IH1cclxuXHRcdG9wdGlvbnM9eyBzb3VyY2UudXNlckZpZWxkcyB9XHJcblx0Lz4gKTtcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gKCA8ZGl2IGtleT1cInVwZGF0ZV91c2VyXCI+XHJcblx0XHQ8QWN0aW9uRmllbGRzTWFwXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cclxuXHRcdFx0a2V5PSd1c2VyX2ZpZWxkc19tYXAnXHJcblx0XHRcdGZpZWxkcz17IGZpZWxkcyB9XHJcblx0XHQ+XHJcblx0XHRcdHsgKCB7IGZpZWxkSWQsIGZpZWxkRGF0YSwgaW5kZXggfSApID0+IDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXHJcblx0XHRcdFx0ZmllbGQ9eyBbIGZpZWxkSWQsIGZpZWxkRGF0YSBdIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgJ3VzZXJfbWV0YScgPT09IGZpZWxkVHlwZVsgZmllbGRJZCBdICYmXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbXBvbmVudHMtYmFzZS1jb250cm9sIGpldC1tYXJnaW4tYm90dG9tLXdyYXBwZXInPlxyXG5cdFx0XHRcdFx0eyBnZXRGaWVsZFNlbGVjdCggZmllbGRJZCwgaW5kZXggKSB9XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgZmllbGRJZCArIGluZGV4ICsgJ190ZXh0JyB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZTogZmllbGRJZCB9ICkgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKCB7IG5hbWVGaWVsZDogZmllbGRJZCwgdmFsdWUgfSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+IH1cclxuXHRcdFx0XHR7ICd1c2VyX21ldGEnICE9PSBmaWVsZFR5cGVbIGZpZWxkSWQgXSAmJiBnZXRGaWVsZFNlbGVjdCggZmllbGRJZCwgaW5kZXggKSB9XHJcblx0XHRcdDwvV3JhcHBlclJlcXVpcmVkQ29udHJvbD4gfVxyXG5cdFx0PC9BY3Rpb25GaWVsZHNNYXA+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlcl9yb2xlJyApIH1cclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRrZXk9XCJ1c2VyX3JvbGVfbGlzdFwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZXJfcm9sZSB9XHJcblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UudXNlclJvbGVzIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAndXNlcl9yb2xlJyApIH1cclxuXHRcdC8+XHJcblx0XHQ8QWN0aW9uTWVzc2FnZXMgeyAuLi5wcm9wcyB9IC8+XHJcblx0PC9kaXY+ICk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5hZGRBY3Rpb24oICd1cGRhdGVfdXNlcicsIHdpdGhTZWxlY3QoIHdpdGhSZXF1ZXN0RmllbGRzICkoIFVwZGF0ZVVzZXJBY3Rpb24gKSApO1xyXG4iLCJpbXBvcnQgKiBhcyBwYXlwYWwgZnJvbSAnLi9wYXlwYWwnO1xyXG5cclxuY29uc3Qge1xyXG5cdHByZXBhcmVBY3Rpb25zTGlzdEJ5VHlwZSxcclxuXHRmcm9tTG9jYWxpemVIZWxwZXIsXHJcblx0Z2F0ZXdheUF0dHIsXHJcblx0cmVuZGVyR2F0ZXdheSxcclxuXHRnYXRld2F5QWN0aW9uQXR0cmlidXRlcyxcclxuXHRyZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyLFxyXG59ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0Q2hlY2tib3hDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0UmFkaW9Db250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhTZWxlY3QsXHJcblx0d2l0aERpc3BhdGNoLFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0TWV0YSxcclxuXHR3aXRoU2VsZWN0R2F0ZXdheXMsXHJcblx0d2l0aERpc3BhdGNoR2F0ZXdheXMsXHJcblx0d2l0aFNlbGVjdEZvcm1GaWVsZHMsXHJcbn0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgZ2F0ZXdheXNEYXRhID0gZ2F0ZXdheUF0dHIoKTtcclxuY29uc3QgbGFiZWwgPSBnYXRld2F5QXR0ciggJ2xhYmVscycgKTtcclxuY29uc3QgY2FsbGFibGVHYXRld2F5ID0gZ2F0ZXdheUF0dHIoICdhZGRpdGlvbmFsJyApO1xyXG5cclxuZnVuY3Rpb24gR2F0ZXdheXNFZGl0b3IoIHtcclxuXHRfamZfYWN0aW9uczogQWN0aW9uc01ldGEsXHJcblx0c2V0R2F0ZXdheSxcclxuXHRnYXRld2F5R2VuZXJhbCxcclxuXHRzZXRHYXRld2F5SW5uZXIsXHJcblx0Zm9ybUZpZWxkcyxcclxuXHRsb2FkaW5nR2F0ZXdheSxcclxuXHRnYXRld2F5UmVxdWVzdCxcclxufSApIHtcclxuXHJcblx0Y29uc3QgYXZhaWxhYmxlQWN0aW9ucyA9IEFjdGlvbnNNZXRhLmZpbHRlciggYWN0aW9uID0+IGFjdGlvbi50eXBlICE9PSAncmVkaXJlY3RfdG9fcGFnZScgKTtcclxuXHRjb25zdCBpbnNlcnRQb3N0QWN0aW9ucyA9IHByZXBhcmVBY3Rpb25zTGlzdEJ5VHlwZSggQWN0aW9uc01ldGEsICdpbnNlcnRfcG9zdCcsIHRydWUgKTtcclxuXHJcblx0Y29uc3QgYWRkaXRpb25hbCA9IGNhbGxhYmxlR2F0ZXdheSggZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSApO1xyXG5cclxuXHQvKipcclxuXHQgKiBVc2VkIGZvciBzZXQgbm90aWZpY2F0aW9ucyBhbmQgZ2F0ZXdheSB0eXBlIHNldHRpbmdzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gd2hlblxyXG5cdCAqIEBwYXJhbSB0eXBlXHJcblx0ICogQHBhcmFtIG5ld1ZhbHVlXHJcblx0ICovXHJcblx0Y29uc3Qgc2V0VmFsdWVJbk9iamVjdCA9ICggd2hlbiwgdHlwZSwgbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRzZXRHYXRld2F5SW5uZXIoIHtcclxuXHRcdFx0a2V5OiB3aGVuLFxyXG5cdFx0XHR2YWx1ZToge1xyXG5cdFx0XHRcdFsgdHlwZSBdOiBuZXdWYWx1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cdC8qKlxyXG5cdCAqIFVzZWQgZm9yIGdldCBub3RpZmljYXRpb25zIGFuZCBnYXRld2F5IHR5cGUgc2V0dGluZ3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB3aGVuXHJcblx0ICogQHBhcmFtIHR5cGVcclxuXHQgKiBAcGFyYW0gaXNFbXB0eVJlc3VsdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufCp9XHJcblx0ICovXHJcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9ucyA9ICggd2hlbiwgdHlwZSwgaXNFbXB0eVJlc3VsdCA9IGZhbHNlICkgPT4ge1xyXG5cdFx0aWYgKCBnYXRld2F5R2VuZXJhbFsgd2hlbiBdICYmIGdhdGV3YXlHZW5lcmFsWyB3aGVuIF1bIHR5cGUgXSApIHtcclxuXHRcdFx0cmV0dXJuIGdhdGV3YXlHZW5lcmFsWyB3aGVuIF1bIHR5cGUgXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpc0VtcHR5UmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldFJlc3VsdE1lc3NhZ2UgPSAoIGtleSwgdmFsdWUgKSA9PiB7XHJcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAnbWVzc2FnZXMnLCBrZXksIHZhbHVlICk7XHJcblx0fTtcclxuXHRjb25zdCBnZXRSZXN1bHRNZXNzYWdlID0gKCBrZXkgKSA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ21lc3NhZ2VzJywga2V5LCBnYXRld2F5c0RhdGEubWVzc2FnZXNbIGtleSBdICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0Tm90aWZpY2F0aW9uc0JlZm9yZSA9ICggaWQsIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ25vdGlmaWNhdGlvbnNfYmVmb3JlJywgaWQsIG5ld1ZhbHVlICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYWN0aW9uRGVmYXVsdCA9IHsgYWN0aXZlOiBmYWxzZSB9O1xyXG5cclxuXHRjb25zdCBnZXROb3RpZmljYXRpb25zQmVmb3JlID0gaWQgPT4ge1xyXG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdub3RpZmljYXRpb25zX2JlZm9yZScsIGlkLCBhY3Rpb25EZWZhdWx0ICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0Tm90aWZpY2F0aW9uc0ZhaWxlZCA9ICggdHlwZSwgbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAnbm90aWZpY2F0aW9uc19mYWlsZWQnLCB0eXBlLCBuZXdWYWx1ZSApO1xyXG5cdH07XHJcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9uc0ZhaWxlZCA9IGlkID0+IHtcclxuXHRcdHJldHVybiBnZXROb3RpZmljYXRpb25zKCAnbm90aWZpY2F0aW9uc19mYWlsZWQnLCBpZCwgYWN0aW9uRGVmYXVsdCApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldE5vdGlmaWNhdGlvbnNTdWNjZXNzID0gKCBpZCwgbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAnbm90aWZpY2F0aW9uc19zdWNjZXNzJywgaWQsIG5ld1ZhbHVlICk7XHJcblx0fTtcclxuXHRjb25zdCBnZXROb3RpZmljYXRpb25zU3VjY2VzcyA9IGlkID0+IHtcclxuXHRcdHJldHVybiBnZXROb3RpZmljYXRpb25zKCAnbm90aWZpY2F0aW9uc19zdWNjZXNzJywgaWQsIGFjdGlvbkRlZmF1bHQgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBhY3Rpb25MYWJlbCA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldEFjdGlvbkxhYmVsJyApO1xyXG5cclxuXHRjb25zdCBHYXRld2F5Rm9vdGVyID0gPD5cclxuXHRcdHsgQm9vbGVhbiggYXZhaWxhYmxlQWN0aW9ucy5sZW5ndGggKSAmJiA8PlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IF9fKCAnQmVmb3JlIHBheW1lbnQgcHJvY2Vzc2VkOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRrZXk9XCJiZWZvcmVfcGF5bWVudF9iYXNlX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCcgfT5cclxuXHRcdFx0XHRcdHsgYXZhaWxhYmxlQWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IDxDaGVja2JveENvbnRyb2xcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3Jtcy1jaGVja2JveC1maWVsZCcgfVxyXG5cdFx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGFjdGlvbi5pZCArIGluZGV4IH1gIH1cclxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGdldE5vdGlmaWNhdGlvbnNCZWZvcmUoIGFjdGlvbi5pZCApLmFjdGl2ZSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgYWN0aW9uTGFiZWwoIGFjdGlvbi50eXBlICkgfVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBhY3RpdmUgPT4gc2V0Tm90aWZpY2F0aW9uc0JlZm9yZSggYWN0aW9uLmlkLCB7XHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IGFjdGlvbi50eXBlLFxyXG5cdFx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0Lz4gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgX18oICdPbiBzdWNjZXNzZnVsIHBheW1lbnQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdGtleT1cInN1Y2Nlc3NfcGF5bWVudF9iYXNlX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxyXG5cdFx0XHRcdFx0eyBhdmFpbGFibGVBY3Rpb25zLm1hcCggKCBhY3Rpb24sIGluZGV4ICkgPT4gPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm1zLWNoZWNrYm94LWZpZWxkJyB9XHJcblx0XHRcdFx0XHRcdGtleT17IGBwbGFjZV9ob2xkZXJfYmxvY2tfJHsgYWN0aW9uLmlkICsgaW5kZXggfWAgfVxyXG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgZ2V0Tm90aWZpY2F0aW9uc1N1Y2Nlc3MoIGFjdGlvbi5pZCApLmFjdGl2ZSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgYWN0aW9uTGFiZWwoIGFjdGlvbi50eXBlICkgfVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBhY3RpdmUgPT4gc2V0Tm90aWZpY2F0aW9uc1N1Y2Nlc3MoIGFjdGlvbi5pZCwge1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiBhY3Rpb24udHlwZSxcclxuXHRcdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdC8+ICkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IF9fKCAnT24gZmFpbGVkIHBheW1lbnQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdGtleT1cImZhaWxlZF9wYXltZW50X2Jhc2VfY29udHJvbFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCc+XHJcblx0XHRcdFx0XHR7IGF2YWlsYWJsZUFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiA8Q2hlY2tib3hDb250cm9sXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybXMtY2hlY2tib3gtZmllbGQnIH1cclxuXHRcdFx0XHRcdFx0a2V5PXsgYHBsYWNlX2hvbGRlcl9ibG9ja18keyBhY3Rpb24uaWQgKyBpbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBnZXROb3RpZmljYXRpb25zRmFpbGVkKCBhY3Rpb24uaWQgKS5hY3RpdmUgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGFjdGlvbkxhYmVsKCBhY3Rpb24udHlwZSApIH1cclxuXHRcdFx0XHRcdFx0aGVscD17IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgYWN0aXZlID0+IHNldE5vdGlmaWNhdGlvbnNGYWlsZWQoIGFjdGlvbi5pZCwge1xyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiBhY3Rpb24udHlwZSxcclxuXHRcdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdC8+ICkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0PC8+IH1cclxuXHRcdHsgQWN0aW9uc01ldGEuZmluZCggYWN0aW9uID0+IGFjdGlvbi50eXBlID09PSAncmVkaXJlY3RfdG9fcGFnZScgKSAmJiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRrZXk9J2NoZWNrYm94X2Jsb2NrX3JlZGlyZWN0X3RvX3BhZ2UnXHJcblx0XHRcdGNoZWNrZWQ9eyBnYXRld2F5R2VuZXJhbC51c2Vfc3VjY2Vzc19yZWRpcmVjdCB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICd1c2Vfc3VjY2Vzc19yZWRpcmVjdCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHtcclxuXHRcdFx0XHRzZXRHYXRld2F5KCB7IHVzZV9zdWNjZXNzX3JlZGlyZWN0OiB2YWwgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdHsgMSAhPT0gYWRkaXRpb25hbC52ZXJzaW9uICYmIDw+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdhY3Rpb25fb3JkZXInICkgfVxyXG5cdFx0XHRcdGtleT0nZ2F0ZXdheV9hY3Rpb25fb3JkZXJfYmFzZV9jb250cm9sJ1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFJhZGlvQ29udHJvbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC1jbGVhci1mdWxsIGpldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnXHJcblx0XHRcdFx0XHRrZXk9J2dhdGV3YXlfYWN0aW9uX29yZGVyJ1xyXG5cdFx0XHRcdFx0b3B0aW9ucz17IGluc2VydFBvc3RBY3Rpb25zIH1cclxuXHRcdFx0XHRcdHNlbGVjdGVkPXsgZ2F0ZXdheUdlbmVyYWwuYWN0aW9uX29yZGVyIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0R2F0ZXdheSggeyBhY3Rpb25fb3JkZXI6IE51bWJlciggbmV3VmFsICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3ByaWNlX2ZpZWxkJyApIH1cclxuXHRcdFx0XHRrZXk9eyAnZm9ybV9maWVsZHNfcHJpY2VfZmllbGQnIH1cclxuXHRcdFx0XHR2YWx1ZT17IGdhdGV3YXlHZW5lcmFsLnByaWNlX2ZpZWxkIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdzaWRlJ1xyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgcHJpY2VfZmllbGQgPT4ge1xyXG5cdFx0XHRcdFx0c2V0R2F0ZXdheSggeyBwcmljZV9maWVsZCB9ICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC8+IH1cclxuXHRcdHsgcmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlciggZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSwge30sICdtYWNyb3NMaXN0JywgPEJhc2VDb250cm9sXHJcblx0XHRcdGtleT1cInBheW1lbnRfcmVzdWx0X21hY3Jvc19iYXNlX2NvbnRyb2xcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8aDQ+XHJcblx0XHRcdFx0eyBfXyggJ0F2YWlsYWJsZSBtYWNyb3MgbGlzdDogJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0eyBfXyggJyVnYXRld2F5X2Ftb3VudCUgLSBwYXltZW50IGFtb3VudCByZXR1cm5lZCBmcm9tIGdhdGV3YXkgdGVtcGxhdGU7JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0eyBfXyggJyVnYXRld2F5X3N0YXR1cyUgLSBwYXltZW50IHN0YXR1cyByZXR1cm5lZCBmcm9tIHBheW1lbnQgZ2F0ZXdheTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHR7IF9fKCAnJWZpZWxkX25hbWUlIC0gcmVwbGFjZSBcImZpZWxkX25hbWVcIiB3aXRoIGFueSBmaWVsZCBuYW1lIGZyb20gdGhlIGZvcm07JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdDwvaDQ+XHJcblx0XHQ8L0Jhc2VDb250cm9sPiApIH1cclxuXHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWVzc2FnZV9zdWNjZXNzXCJcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ21lc3NhZ2Vfc3VjY2VzcycgKSB9XHJcblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ3N1Y2Nlc3MnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldFJlc3VsdE1lc3NhZ2UoICdzdWNjZXNzJywgbmV3VmFsdWUgKSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRrZXk9XCJwYXltZW50X3Jlc3VsdF9tZXNzYWdlX2ZhaWxlZFwiXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtZXNzYWdlX2ZhaWxlZCcgKSB9XHJcblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0Lz5cclxuXHQ8Lz47XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyByZW5kZXJHYXRld2F5KCBnYXRld2F5R2VuZXJhbC5nYXRld2F5LCB7IHNldFZhbHVlSW5PYmplY3QsIGdldE5vdGlmaWNhdGlvbnMgfSApIH1cclxuXHRcdHsgKFxyXG5cdFx0XHQgIC0gMSA9PT0gZ2F0ZXdheVJlcXVlc3QuaWRcclxuXHRcdFx0ICB8fCBsb2FkaW5nR2F0ZXdheS5zdWNjZXNzXHJcblx0XHRcdCAgfHwgISBnYXRld2F5UmVxdWVzdC5pZC5pbmNsdWRlcyggZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSApXHJcblx0XHQgICkgJiYgR2F0ZXdheUZvb3RlciB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoICggLi4ucHJvcHMgKSA9PiAoXHJcblx0XHR7XHJcblx0XHRcdC4uLndpdGhTZWxlY3RNZXRhKCAnX2pmX2FjdGlvbnMnICkoIC4uLnByb3BzICksXHJcblx0XHRcdC4uLndpdGhTZWxlY3RGb3JtRmllbGRzKCBbXSwgJy0tJyApKCAuLi5wcm9wcyApLFxyXG5cdFx0XHQuLi53aXRoU2VsZWN0R2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG5cdHdpdGhEaXNwYXRjaCggd2l0aERpc3BhdGNoR2F0ZXdheXMgKSxcclxuKSggR2F0ZXdheXNFZGl0b3IgKTsiLCJpbXBvcnQgUGF5cGFsTWFpbiBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQgUGF5Tm93U2NlbmFyaW8gZnJvbSAnLi9wYXktbm93LXNjZW5hcmlvJztcclxuaW1wb3J0IFN1YnNjcmliZU5vd1NjZW5hcmlvIGZyb20gJy4vc3Vic2NyaWJlLW5vdy1zY2VuYXJpbyc7XHJcblxyXG5jb25zdCB7XHJcblx0cmVnaXN0ZXJHYXRld2F5LFxyXG59ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxucmVnaXN0ZXJHYXRld2F5KFxyXG5cdCdwYXlwYWwnLFxyXG5cdFBheXBhbE1haW4sXHJcbik7XHJcblxyXG5yZWdpc3RlckdhdGV3YXkoXHJcblx0J3BheXBhbCcsXHJcblx0UGF5Tm93U2NlbmFyaW8sXHJcblx0J1BBWV9OT1cnLFxyXG4pO1xyXG5cclxucmVnaXN0ZXJHYXRld2F5KFxyXG5cdCdwYXlwYWwnLFxyXG5cdFN1YnNjcmliZU5vd1NjZW5hcmlvLFxyXG5cdCdTVUJTQ1JJQkVfTk9XJyxcclxuKTsiLCJjb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5jb25zdCB7XHJcblx0d2l0aFNlbGVjdCxcclxuXHR3aXRoRGlzcGF0Y2gsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHR3aXRoTm90aWNlcyxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlRWZmZWN0LFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHRyZW5kZXJHYXRld2F5LFxyXG5cdGdhdGV3YXlMYWJlbCxcclxuXHRnYXRld2F5QXR0cixcclxufSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0R2F0ZXdheXMsXHJcblx0d2l0aERpc3BhdGNoR2F0ZXdheXMsXHJcbn0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgY2FsbGFibGVHYXRld2F5ID0gZ2F0ZXdheUF0dHIoICdhZGRpdGlvbmFsJyApO1xyXG5jb25zdCBwYXlwYWxMYWJlbCA9IGdhdGV3YXlMYWJlbCggJ3BheXBhbCcgKTtcclxuXHJcbmZ1bmN0aW9uIFBheXBhbE1haW4oIHtcclxuXHRsb2FkaW5nR2F0ZXdheSxcclxuXHRzZXRHYXRld2F5UmVxdWVzdCxcclxuXHRnYXRld2F5U3BlY2lmaWMsXHJcblx0c2V0R2F0ZXdheVNwZWNpZmljLFxyXG5cdGdhdGV3YXlTY2VuYXJpbyxcclxuXHRzZXRHYXRld2F5U2NlbmFyaW8sXHJcblx0Z2V0U3BlY2lmaWNPckdsb2JhbCxcclxuXHRub3RpY2VPcGVyYXRpb25zLFxyXG5cdG5vdGljZVVJLFxyXG59ICkge1xyXG5cclxuXHRjb25zdCBhZGRpdGlvbmFsID0gY2FsbGFibGVHYXRld2F5KCAncGF5cGFsJyApO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRpZDogc2NlbmFyaW8gPSAnUEFZX05PVycsXHJcblx0fSA9IGdhdGV3YXlTY2VuYXJpbztcclxuXHJcblx0Y29uc3Qgc2NlbmFyaW9Tb3VyY2UgPSBhZGRpdGlvbmFsWyBzY2VuYXJpbyBdIHx8IHt9O1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdHNldEdhdGV3YXlSZXF1ZXN0KCB7IGlkOiBzY2VuYXJpbyB9ICk7XHJcblx0fSwgWyBzY2VuYXJpbyBdICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0c2V0R2F0ZXdheVJlcXVlc3QoIHsgaWQ6IHNjZW5hcmlvIH0gKTtcclxuXHR9LCBbXSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgbm90aWNlVUkgfVxyXG5cdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0a2V5PXsgJ3VzZV9nbG9iYWwnIH1cclxuXHRcdFx0bGFiZWw9eyBwYXlwYWxMYWJlbCggJ3VzZV9nbG9iYWwnICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgZ2F0ZXdheVNwZWNpZmljLnVzZV9nbG9iYWwgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHVzZV9nbG9iYWwgPT4gc2V0R2F0ZXdheVNwZWNpZmljKCB7IHVzZV9nbG9iYWwgfSApIH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBwYXlwYWxMYWJlbCggJ2NsaWVudF9pZCcgKSB9XHJcblx0XHRcdGtleT0ncGF5cGFsX2NsaWVudF9pZF9zZXR0aW5nJ1xyXG5cdFx0XHR2YWx1ZT17IGdldFNwZWNpZmljT3JHbG9iYWwoICdjbGllbnRfaWQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IGNsaWVudF9pZCA9PiBzZXRHYXRld2F5U3BlY2lmaWMoIHsgY2xpZW50X2lkIH0gKSB9XHJcblx0XHRcdGRpc2FibGVkPXsgZ2F0ZXdheVNwZWNpZmljLnVzZV9nbG9iYWwgfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IHBheXBhbExhYmVsKCAnc2VjcmV0JyApIH1cclxuXHRcdFx0a2V5PSdwYXlwYWxfc2VjcmV0X3NldHRpbmcnXHJcblx0XHRcdHZhbHVlPXsgZ2V0U3BlY2lmaWNPckdsb2JhbCggJ3NlY3JldCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgc2VjcmV0ID0+IHNldEdhdGV3YXlTcGVjaWZpYyggeyBzZWNyZXQgfSApIH1cclxuXHRcdFx0ZGlzYWJsZWQ9eyBnYXRld2F5U3BlY2lmaWMudXNlX2dsb2JhbCB9XHJcblx0XHQvPlxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj0nc2lkZSdcclxuXHRcdFx0bGFiZWw9eyBwYXlwYWxMYWJlbCggJ2dhdGV3YXlfdHlwZScgKSB9XHJcblx0XHRcdHZhbHVlPXsgc2NlbmFyaW8gfVxyXG5cdFx0XHRvbkNoYW5nZT17IGlkID0+IHtcclxuXHRcdFx0XHRzZXRHYXRld2F5U2NlbmFyaW8oIHsgaWQgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdFx0b3B0aW9ucz17IGFkZGl0aW9uYWwuZ2F0ZXdheV90eXBlcyB9XHJcblx0XHQvPlxyXG5cdFx0eyByZW5kZXJHYXRld2F5KCAncGF5cGFsJywgeyBzY2VuYXJpb1NvdXJjZSwgbm90aWNlT3BlcmF0aW9ucyB9LCBzY2VuYXJpbyApIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcblx0d2l0aFNlbGVjdCggd2l0aFNlbGVjdEdhdGV3YXlzICksXHJcblx0d2l0aERpc3BhdGNoKCB3aXRoRGlzcGF0Y2hHYXRld2F5cyApLFxyXG5cdHdpdGhOb3RpY2VzLFxyXG4pKCBQYXlwYWxNYWluICk7XHJcblxyXG5cclxuIiwiY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhTZWxlY3QsXHJcblx0d2l0aERpc3BhdGNoLFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG5cdFJhZGlvQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0Z2F0ZXdheUxhYmVsLFxyXG5cdGdhdGV3YXlBdHRyLFxyXG59ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhTZWxlY3RGb3JtRmllbGRzLFxyXG5cdHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHR3aXRoRGlzcGF0Y2hHYXRld2F5cyxcclxuXHR3aXRoU2VsZWN0QWN0aW9uc0J5VHlwZSxcclxufSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCB7IEdhdGV3YXlGZXRjaEJ1dHRvbiB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgcGF5cGFsTGFiZWwgPSBnYXRld2F5TGFiZWwoICdwYXlwYWwnICk7XHJcbmNvbnN0IGdsb2JhbExhYmVsID0gZ2F0ZXdheUF0dHIoICdsYWJlbHMnICk7XHJcblxyXG5mdW5jdGlvbiBQYXlOb3dTY2VuYXJpbygge1xyXG5cdGdhdGV3YXlHZW5lcmFsLFxyXG5cdGdhdGV3YXlTcGVjaWZpYyxcclxuXHRzZXRHYXRld2F5LFxyXG5cdHNldEdhdGV3YXlTcGVjaWZpYyxcclxuXHRmb3JtRmllbGRzLFxyXG5cdGluc2VydF9wb3N0LFxyXG5cdGdldFNwZWNpZmljT3JHbG9iYWwsXHJcblx0bG9hZGluZ0dhdGV3YXksXHJcblx0c2NlbmFyaW9Tb3VyY2UsXHJcblx0bm90aWNlT3BlcmF0aW9ucyxcclxufSApIHtcclxuXHJcblx0Y29uc3QgZGlzcGxheU5vdGljZSA9IHN0YXR1cyA9PiByZXNwb25zZSA9PiB7XHJcblx0XHRub3RpY2VPcGVyYXRpb25zLmNyZWF0ZU5vdGljZSgge1xyXG5cdFx0XHRzdGF0dXMsXHJcblx0XHRcdGNvbnRlbnQ6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcblx0XHR9IClcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRsYWJlbD17ICdSZXF1ZXN0IEJ1dHRvbicgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2F0ZXdheUZldGNoQnV0dG9uXHJcblx0XHRcdFx0aW5pdGlhbExhYmVsPXsgJ0ZldGNoJyB9XHJcblx0XHRcdFx0bGFiZWw9eyAnUmV0cnkgRmV0Y2gnIH1cclxuXHRcdFx0XHRhcGlBcmdzPXsge1xyXG5cdFx0XHRcdFx0Li4uc2NlbmFyaW9Tb3VyY2UuZmV0Y2gsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGNsaWVudF9pZDogZ2V0U3BlY2lmaWNPckdsb2JhbCggJ2NsaWVudF9pZCcgKSxcclxuXHRcdFx0XHRcdFx0c2VjcmV0OiBnZXRTcGVjaWZpY09yR2xvYmFsKCAnc2VjcmV0JyApLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0XHRvblN1Y2Nlc3M9eyBkaXNwbGF5Tm90aWNlKCAnc3VjY2VzcycgKSB9XHJcblx0XHRcdFx0b25GYWlsPXsgZGlzcGxheU5vdGljZSggJ2Vycm9yJyApIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHR7IGxvYWRpbmdHYXRld2F5LnN1Y2Nlc3MgJiYgPD5cclxuXHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBwYXlwYWxMYWJlbCggJ2N1cnJlbmN5JyApIH1cclxuXHRcdFx0XHRrZXk9J3BheXBhbF9jdXJyZW5jeV9jb2RlX3NldHRpbmcnXHJcblx0XHRcdFx0dmFsdWU9eyBnYXRld2F5U3BlY2lmaWMuY3VycmVuY3kgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgY3VycmVuY3kgPT4gc2V0R2F0ZXdheVNwZWNpZmljKCB7IGN1cnJlbmN5IH0gKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBnbG9iYWxMYWJlbCggJ3ByaWNlX2ZpZWxkJyApIH1cclxuXHRcdFx0XHRrZXk9eyAnZm9ybV9maWVsZHNfcHJpY2VfZmllbGQnIH1cclxuXHRcdFx0XHR2YWx1ZT17IGdhdGV3YXlHZW5lcmFsLnByaWNlX2ZpZWxkIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdzaWRlJ1xyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgcHJpY2VfZmllbGQgPT4ge1xyXG5cdFx0XHRcdFx0c2V0R2F0ZXdheSggeyBwcmljZV9maWVsZCB9ICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGdsb2JhbExhYmVsKCAnYWN0aW9uX29yZGVyJyApIH1cclxuXHRcdFx0XHRrZXk9J2dhdGV3YXlfYWN0aW9uX29yZGVyX3BheV9ub3dfY29udHJvbCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxSYWRpb0NvbnRyb2xcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXItZnVsbCBqZXQtdXNlci1maWVsZHMtbWFwX19saXN0J1xyXG5cdFx0XHRcdFx0a2V5PSdnYXRld2F5X2FjdGlvbl9vcmRlcl9wYXlfbm93J1xyXG5cdFx0XHRcdFx0b3B0aW9ucz17IGluc2VydF9wb3N0IH1cclxuXHRcdFx0XHRcdHNlbGVjdGVkPXsgZ2F0ZXdheUdlbmVyYWwuYWN0aW9uX29yZGVyIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0R2F0ZXdheSggeyBhY3Rpb25fb3JkZXI6IE51bWJlciggdmFsICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdDwvPiB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoICggLi4ucHJvcHMgKSA9PiAoXHJcblx0XHR7XHJcblx0XHRcdC4uLndpdGhTZWxlY3RGb3JtRmllbGRzKCBbXSwgJy0tJyApKCAuLi5wcm9wcyApLFxyXG5cdFx0XHQuLi53aXRoU2VsZWN0QWN0aW9uc0J5VHlwZSggJ2luc2VydF9wb3N0JywgdHJ1ZSApKCAuLi5wcm9wcyApLFxyXG5cdFx0XHQuLi53aXRoU2VsZWN0R2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG5cdHdpdGhEaXNwYXRjaCggKCAuLi5wcm9wcyApID0+IChcclxuXHRcdHtcclxuXHRcdFx0Li4ud2l0aERpc3BhdGNoR2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG4pKCBQYXlOb3dTY2VuYXJpbyApOyIsImNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0LFxyXG5cdHdpdGhEaXNwYXRjaCxcclxufSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRSYWRpb0NvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdGdhdGV3YXlMYWJlbCxcclxuXHRnYXRld2F5QXR0cixcclxufSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0Rm9ybUZpZWxkcyxcclxuXHR3aXRoU2VsZWN0R2F0ZXdheXMsXHJcblx0d2l0aERpc3BhdGNoR2F0ZXdheXMsXHJcblx0d2l0aFNlbGVjdEFjdGlvbnNCeVR5cGUsXHJcbn0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgeyBHYXRld2F5RmV0Y2hCdXR0b24gfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHBheXBhbExhYmVsID0gZ2F0ZXdheUxhYmVsKCAncGF5cGFsJyApO1xyXG5jb25zdCBnbG9iYWxMYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xyXG5cclxuZnVuY3Rpb24gU3Vic2NyaWJlTm93U2NlbmFyaW8oIHtcclxuXHRnYXRld2F5R2VuZXJhbCxcclxuXHRzZXRHYXRld2F5LFxyXG5cdGZvcm1GaWVsZHMsXHJcblx0aW5zZXJ0X3Bvc3QsXHJcblx0Z2V0U3BlY2lmaWNPckdsb2JhbCxcclxuXHRsb2FkaW5nR2F0ZXdheSxcclxuXHRnYXRld2F5U2NlbmFyaW8sXHJcblx0c2V0R2F0ZXdheVNjZW5hcmlvLFxyXG5cdHNjZW5hcmlvU291cmNlLFxyXG5cdG5vdGljZU9wZXJhdGlvbnMsXHJcbn0gKSB7XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlOb3RpY2UgPSBzdGF0dXMgPT4gcmVzcG9uc2UgPT4ge1xyXG5cdFx0bm90aWNlT3BlcmF0aW9ucy5jcmVhdGVOb3RpY2UoIHtcclxuXHRcdFx0c3RhdHVzLFxyXG5cdFx0XHRjb250ZW50OiByZXNwb25zZS5tZXNzYWdlLFxyXG5cdFx0fSApXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyAnUmVxdWVzdCBCdXR0b24nIH1cclxuXHRcdD5cclxuXHRcdFx0PEdhdGV3YXlGZXRjaEJ1dHRvblxyXG5cdFx0XHRcdGluaXRpYWxMYWJlbD17ICdGZXRjaCcgfVxyXG5cdFx0XHRcdGxhYmVsPXsgJ1JldHJ5IEZldGNoJyB9XHJcblx0XHRcdFx0YXBpQXJncz17IHtcclxuXHRcdFx0XHRcdC4uLnNjZW5hcmlvU291cmNlLmZldGNoLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRjbGllbnRfaWQ6IGdldFNwZWNpZmljT3JHbG9iYWwoICdjbGllbnRfaWQnICksXHJcblx0XHRcdFx0XHRcdHNlY3JldDogZ2V0U3BlY2lmaWNPckdsb2JhbCggJ3NlY3JldCcgKSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdFx0b25TdWNjZXNzPXsgZGlzcGxheU5vdGljZSggJ3N1Y2Nlc3MnICkgfVxyXG5cdFx0XHRcdG9uRmFpbD17IGRpc3BsYXlOb3RpY2UoICdlcnJvcicgKSB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0eyBsb2FkaW5nR2F0ZXdheS5zdWNjZXNzICYmIDw+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBwYXlwYWxMYWJlbCggJ3N1YnNjcmliZV9wbGFuX2ZpZWxkJyApIH1cclxuXHRcdFx0XHRrZXk9eyAnZm9ybV9maWVsZHNfc3Vic2NyaWJlX3BsYW5fZmllbGQnIH1cclxuXHRcdFx0XHR2YWx1ZT17IGdhdGV3YXlTY2VuYXJpby5wbGFuX2ZpZWxkIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdzaWRlJ1xyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgcGxhbl9maWVsZCA9PiB7XHJcblx0XHRcdFx0XHRzZXRHYXRld2F5U2NlbmFyaW8oIHsgcGxhbl9maWVsZCB9ICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGdsb2JhbExhYmVsKCAnYWN0aW9uX29yZGVyJyApIH1cclxuXHRcdFx0XHRrZXk9J2dhdGV3YXlfYWN0aW9uX29yZGVyX3BheV9ub3dfY29udHJvbCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxSYWRpb0NvbnRyb2xcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXItZnVsbCBqZXQtdXNlci1maWVsZHMtbWFwX19saXN0J1xyXG5cdFx0XHRcdFx0a2V5PSdnYXRld2F5X2FjdGlvbl9vcmRlcl9wYXlfbm93J1xyXG5cdFx0XHRcdFx0b3B0aW9ucz17IGluc2VydF9wb3N0IH1cclxuXHRcdFx0XHRcdHNlbGVjdGVkPXsgZ2F0ZXdheUdlbmVyYWwuYWN0aW9uX29yZGVyIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0R2F0ZXdheSggeyBhY3Rpb25fb3JkZXI6IE51bWJlciggdmFsICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdDwvPiB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoICggLi4ucHJvcHMgKSA9PiAoXHJcblx0XHR7XHJcblx0XHRcdC4uLndpdGhTZWxlY3RGb3JtRmllbGRzKCBbXSwgJy0tJyApKCAuLi5wcm9wcyApLFxyXG5cdFx0XHQuLi53aXRoU2VsZWN0QWN0aW9uc0J5VHlwZSggJ2luc2VydF9wb3N0JywgdHJ1ZSApKCAuLi5wcm9wcyApLFxyXG5cdFx0XHQuLi53aXRoU2VsZWN0R2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG5cdHdpdGhEaXNwYXRjaCggKCAuLi5wcm9wcyApID0+IChcclxuXHRcdHtcclxuXHRcdFx0Li4ud2l0aERpc3BhdGNoR2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG4pKCBTdWJzY3JpYmVOb3dTY2VuYXJpbyApOyIsImltcG9ydCBQbHVnaW5BY3Rpb25zIGZyb20gXCIuL3JlbmRlclwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGJhc2UgPSB7XHJcblx0bmFtZTogJ2pmLWFjdGlvbnMtcGFuZWwnLFxyXG5cdHRpdGxlOiBfXyggJ1Bvc3QgU3VibWl0IEFjdGlvbnMnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG59O1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0cmVuZGVyOiBQbHVnaW5BY3Rpb25zLFxyXG5cdGljb246IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0YmFzZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IGdldFJhbmRvbUlEID0gKCkgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogODk5OSApICsgMTAwMDtcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRBY3Rpb24gPSB7XHJcblx0dHlwZTogJ3NlbmRfZW1haWwnLFxyXG5cdGlkOiBnZXRSYW5kb21JRCgpLFxyXG5cdHNldHRpbmdzOiB7fSxcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRBY3Rpb25zID0gW1xyXG5cdHtcclxuXHRcdC4uLkpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBkZWZhdWx0QWN0aW9uICkgKSxcclxuXHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdHNlbmRfZW1haWw6IHtcclxuXHRcdFx0XHRzdWJqZWN0OiAnTmV3IG9yZGVyIG9uIHdlYnNpdGUnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6ICdIaSBhZG1pbiFcXG5cXG5UaGVyZSBhcmUgbmV3IG9yZGVyIG9uIHlvdXIgd2Vic2l0ZS5cXG5cXG5PcmRlciBkZXRhaWxzOlxcbi0gUG9zdCBJRDogJXBvc3RfaWQlJyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbmRpdGlvblNldHRpbmdzID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmFjdGlvbkNvbmRpdGlvblNldHRpbmdzO1xyXG5cclxuZXhwb3J0IHtcclxuXHRnZXRSYW5kb21JRCxcclxuXHRkZWZhdWx0QWN0aW9ucyxcclxuXHRjb25kaXRpb25TZXR0aW5ncyxcclxuXHRkZWZhdWx0QWN0aW9uLFxyXG59OyIsImltcG9ydCB7XHJcblx0Y29uZGl0aW9uU2V0dGluZ3MsXHJcblx0ZGVmYXVsdEFjdGlvbixcclxuXHRkZWZhdWx0QWN0aW9ucyxcclxuXHRnZXRSYW5kb21JRCxcclxufSBmcm9tICcuL29wdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcbn0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7XHJcblx0QWN0aW9uTW9kYWwsXHJcblx0UmVwZWF0ZXJXaXRoU3RhdGUsXHJcblx0RmllbGRXaXRoUHJlc2V0LFxyXG5cdER5bmFtaWNQcmVzZXQsXHJcbn0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IHVzZUFjdGlvbnMgfSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCdXR0b24sXHJcblx0Q2FyZCxcclxuXHRDYXJkQm9keSxcclxuXHRDYXJkSGVhZGVyLFxyXG5cdERyb3Bkb3duTWVudSxcclxuXHRGbGV4LFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3QsXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IHsgd2l0aERpc3BhdGNoLCB1c2VEaXNwYXRjaCB9ID0gd3AuZGF0YTtcclxuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xyXG5cclxuY29uc3QgYWN0aW9uVHlwZXMgPSB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLm1hcCggZnVuY3Rpb24gKCBhY3Rpb24gKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHZhbHVlOiBhY3Rpb24uaWQsXHJcblx0XHRsYWJlbDogYWN0aW9uLm5hbWUsXHJcblx0fTtcclxufSApO1xyXG5cclxuZnVuY3Rpb24gZ2V0QWN0aW9uQ2FsbGJhY2soIGVkaXRlZEFjdGlvbiApIHtcclxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLmxlbmd0aDsgaSArKyApIHtcclxuXHRcdGlmICggd2luZG93LmpldEZvcm1BY3Rpb25UeXBlc1sgaSBdLmlkID09PSBlZGl0ZWRBY3Rpb24udHlwZSAmJiB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBpIF0uY2FsbGJhY2sgKSB7XHJcblx0XHRcdHJldHVybiB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBpIF0uY2FsbGJhY2s7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbmRpdGlvbk9wdGlvbkZyb20oIGZyb20sIHZhbHVlICkge1xyXG5cdGNvbnN0IG9wdGlvbiA9IGNvbmRpdGlvblNldHRpbmdzWyBmcm9tIF0uZmluZCggaXRlbSA9PiBpdGVtLnZhbHVlID09PSB2YWx1ZSApO1xyXG5cclxuXHRyZXR1cm4gKCBvcHRpb25OYW1lLCBpZk5vdCA9ICcnICkgPT4gb3B0aW9uID8gKFxyXG5cdFx0b3B0aW9uWyBvcHRpb25OYW1lIF0gfHwgaWZOb3RcclxuXHQpIDogaWZOb3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9wZXJhdG9yT3B0aW9uKCBvcGVyYXRvciApIHtcclxuXHRyZXR1cm4gZ2V0Q29uZGl0aW9uT3B0aW9uRnJvbSggJ29wZXJhdG9ycycsIG9wZXJhdG9yICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zZm9ybWVyT3B0aW9uKCB2YWx1ZSApIHtcclxuXHRyZXR1cm4gZ2V0Q29uZGl0aW9uT3B0aW9uRnJvbSggJ2NvbXBhcmVfdmFsdWVfZm9ybWF0cycsIHZhbHVlICk7XHJcbn1cclxuXHJcbmNvbnN0IG9wZXJhdG9ycyA9IFtcclxuXHR7IHZhbHVlOiAnYW5kJywgbGFiZWw6IF9fKCAnQU5EIChBTEwgY29uZGl0aW9ucyBtdXN0IGJlIG1ldCknLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9LFxyXG5cdHsgdmFsdWU6ICdvcicsIGxhYmVsOiBfXyggJ09SIChhdCBsZWFzdCBPTkUgY29uZGl0aW9uIG11c3QgYmUgbWV0KScsICdqZXQtZm9ybS1idWlsZGVyJyApIH0sXHJcbl07XHJcblxyXG5jb25zdCBvcGVyYXRvckxhYmVsID0gX18oICdDb25kaXRpb24gT3BlcmF0b3InLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcclxuXHJcbmxldCBQbHVnaW5BY3Rpb25zID0gKCB7IHNldEN1cnJlbnRBY3Rpb24gfSApID0+IHtcclxuXHJcblx0Y29uc3QgWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF0gPSB1c2VBY3Rpb25zKCB0cnVlICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCAwID09PSBhY3Rpb25zLmxlbmd0aCApIHtcclxuXHRcdFx0c2V0QWN0aW9ucyggZGVmYXVsdEFjdGlvbnMgKTtcclxuXHRcdH1cclxuXHR9LCBbXSApO1xyXG5cclxuXHRjb25zdCBtb3ZlQWN0aW9uID0gKCBmcm9tSW5kZXgsIHRvSW5kZXggKSA9PiB7XHJcblxyXG5cdFx0dmFyIGl0ZW0gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uc1sgZnJvbUluZGV4IF0gKSApLFxyXG5cdFx0XHRyZXBsYWNlZEl0ZW0gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uc1sgdG9JbmRleCBdICkgKTtcclxuXHJcblx0XHRhY3Rpb25zLnNwbGljZSggdG9JbmRleCwgMSwgaXRlbSApO1xyXG5cdFx0YWN0aW9ucy5zcGxpY2UoIGZyb21JbmRleCwgMSwgcmVwbGFjZWRJdGVtICk7XHJcblxyXG5cdFx0c2V0QWN0aW9ucyggWyAuLi5hY3Rpb25zIF0gKTtcclxuXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQWN0aW9uID0gKCBpbmRleCApID0+IHtcclxuXHRcdGFjdGlvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdFx0c2V0QWN0aW9ucyggWyAuLi5hY3Rpb25zIF0gKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB1cGRhdGVBY3Rpb24gPSAoIGlkLCBrZXksIHZhbHVlICkgPT4ge1xyXG5cdFx0c2V0QWN0aW9ucyggYWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IHtcclxuXHRcdFx0aWYgKCBhY3Rpb24uaWQgPT09IGlkICkge1xyXG5cdFx0XHRcdHZhciBuZXdBY3Rpb24gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uICkgKTtcclxuXHRcdFx0XHRuZXdBY3Rpb25bIGtleSBdID0gdmFsdWU7XHJcblx0XHRcdFx0cmV0dXJuIG5ld0FjdGlvbjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gYWN0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHR9ICkgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB1cGRhdGVBY3Rpb25PYmogPSAoIGlkLCBwcm9wcyApID0+IHtcclxuXHRcdHNldEFjdGlvbnMoIGFjdGlvbnMgPT4gYWN0aW9ucy5tYXAoIGN1cnJlbnQgPT4ge1xyXG5cdFx0XHRpZiAoIGlkICE9PSBjdXJyZW50LmlkICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGN1cnJlbnQgKSApLFxyXG5cdFx0XHRcdC4uLnByb3BzLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSApICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgWyBpc0VkaXQsIHNldEVkaXQgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cdGNvbnN0IFsgZWRpdGVkQWN0aW9uLCBzZXRFZGl0ZWRBY3Rpb24gXSA9IHVzZVN0YXRlKCB7fSApO1xyXG5cclxuXHRjb25zdCBbIGlzRWRpdFByb2Nlc3NBY3Rpb24sIHNldEVkaXRQcm9jZXNzQWN0aW9uIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHRjb25zdCBbIHByb2Nlc3NlZEFjdGlvbiwgc2V0UHJvY2Vzc2VkQWN0aW9uIF0gPSB1c2VTdGF0ZSgge30gKTtcclxuXHJcblx0Y29uc3QgWyBmb3JtRmllbGRzLCBzZXRGb3JtRmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcblx0Y29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuXHRcdHNldEVkaXQoIGZhbHNlICk7XHJcblx0XHRzZXRDdXJyZW50QWN0aW9uKCB7fSApO1xyXG5cdH07XHJcblxyXG5cdHZhciBDYWxsYmFjayA9IGdldEFjdGlvbkNhbGxiYWNrKCBlZGl0ZWRBY3Rpb24gKTtcclxuXHJcblx0Y29uc3QgdXBkYXRlQWN0aW9uU2V0dGluZ3MgPSBhY3Rpb24gPT4ge1xyXG5cdFx0dXBkYXRlQWN0aW9uT2JqKCBhY3Rpb24uaWQsIHtcclxuXHRcdFx0c2V0dGluZ3M6IGFjdGlvbi5zZXR0aW5ncyxcclxuXHRcdH0gKTtcclxuXHRcdGNsb3NlTW9kYWwoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB1cGRhdGVBY3Rpb25Db25kaXRpb24gPSBpdGVtcyA9PiB7XHJcblx0XHR1cGRhdGVBY3Rpb24oIHByb2Nlc3NlZEFjdGlvbi5pZCwgJ2NvbmRpdGlvbnMnLCBpdGVtcyApO1xyXG5cdFx0c2V0RWRpdFByb2Nlc3NBY3Rpb24oIGZhbHNlICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdXBkYXRlQWN0aW9uVHlwZSA9ICggaWQsIHR5cGUgKSA9PiB7XHJcblx0XHRzZXRBY3Rpb25zKCBwcmV2ID0+IHByZXYubWFwKCBwcmV2SXRlbSA9PiB7XHJcblx0XHRcdGlmICggcHJldkl0ZW0uaWQgPT09IGlkICkge1xyXG5cdFx0XHRcdHZhciBuZXdBY3Rpb24gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldkl0ZW0gKSApO1xyXG5cdFx0XHRcdG5ld0FjdGlvbi50eXBlID0gdHlwZTtcclxuXHRcdFx0XHRuZXdBY3Rpb24uc2V0dGluZ3MgPSBuZXdBY3Rpb24uc2V0dGluZ3MgfHwge307XHJcblx0XHRcdFx0bmV3QWN0aW9uLnNldHRpbmdzWyB0eXBlIF0gPSBuZXdBY3Rpb24uc2V0dGluZ3NbIHR5cGUgXSB8fCB7fTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIG5ld0FjdGlvbjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcHJldkl0ZW07XHJcblx0XHRcdH1cclxuXHRcdH0gKSApO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCBlZGl0ZWRBY3Rpb24udHlwZSApIHtcclxuXHRcdFx0c2V0RWRpdCggdHJ1ZSApO1xyXG5cdFx0fVxyXG5cdH0sIFsgZWRpdGVkQWN0aW9uIF0gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIHByb2Nlc3NlZEFjdGlvbi50eXBlICkge1xyXG5cdFx0XHRzZXRFZGl0UHJvY2Vzc0FjdGlvbiggdHJ1ZSApO1xyXG5cdFx0XHRzZXRGb3JtRmllbGRzKCBnZXRGb3JtRmllbGRzQmxvY2tzKCBbXSwgJy0tJyApICk7XHJcblx0XHR9XHJcblx0fSwgWyBwcm9jZXNzZWRBY3Rpb24gXSApO1xyXG5cclxuXHRjb25zdCBnZXRNZXJnZWRTZXR0aW5ncyA9ICgpID0+IHtcclxuXHRcdHJldHVybiBlZGl0ZWRBY3Rpb24uc2V0dGluZ3NbIGVkaXRlZEFjdGlvbi50eXBlIF0gfHwgZWRpdGVkQWN0aW9uLnNldHRpbmdzO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyBhY3Rpb25zICYmIGFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiB7XHJcblx0XHRcdGNvbnN0IGhlYWRlciA9IGFwcGx5RmlsdGVycyggYGpldC5mYi5zZWN0aW9uLmFjdGlvbnMuaGVhZGVyLiR7IGFjdGlvbi50eXBlIH1gLCBudWxsLCBhY3Rpb24sIGFjdGlvbnMgKTtcclxuXHRcdFx0cmV0dXJuIDxDYXJkXHJcblx0XHRcdFx0a2V5PXsgYWN0aW9uLmlkIH1cclxuXHRcdFx0XHRzaXplPXsgJ2V4dHJhU21hbGwnIH1cclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYWN0aW9uJyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGhlYWRlciAmJiA8Q2FyZEhlYWRlcj5cclxuXHRcdFx0XHRcdHsgaGVhZGVyIH1cclxuXHRcdFx0XHQ8L0NhcmRIZWFkZXI+IH1cclxuXHRcdFx0XHQ8Q2FyZEJvZHk+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGFjdGlvbi50eXBlIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGFjdGlvblR5cGVzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdUeXBlID0+IHVwZGF0ZUFjdGlvblR5cGUoIGFjdGlvbi5pZCwgbmV3VHlwZSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR7IGFwcGx5RmlsdGVycyggYGpldC5mYi5zZWN0aW9uLmFjdGlvbnMuYWZ0ZXJTZWxlY3QuJHsgYWN0aW9uLnR5cGUgfWAsIG51bGwsIGFjdGlvbiwgYWN0aW9ucyApIH1cclxuXHRcdFx0XHRcdDxGbGV4IHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcwLjVlbScgfSB9IGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17ICEgZ2V0QWN0aW9uQ2FsbGJhY2soIGFjdGlvbiApIH1cclxuXHRcdFx0XHRcdFx0XHRpY29uPSdlZGl0J1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgJ0VkaXQgQWN0aW9uJyB9XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldEVkaXRlZEFjdGlvbiggKCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uYWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQpICk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRDdXJyZW50QWN0aW9uKCB7IC4uLmFjdGlvbiwgaW5kZXggfSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aWNvbj0ncmFuZG9taXplJ1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgJ0NvbmRpdGlvbnMnIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0UHJvY2Vzc2VkQWN0aW9uKCAoKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgLi4uYWN0aW9uIH1cclxuXHRcdFx0XHRcdFx0XHRcdCkgKTtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PERyb3Bkb3duTWVudVxyXG5cdFx0XHRcdFx0XHRcdGljb249eyAnZWxsaXBzaXMnIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17ICdFZGl0LCBtb3ZlIG9yIGRlbGV0ZScgfVxyXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xzPXsgW1xyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ1VwJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ2Fycm93LXVwJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIDAgIT09IGluZGV4ICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZUFjdGlvbiggaW5kZXgsIGluZGV4IC0gMSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnRG93bicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdhcnJvdy1kb3duJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IGluZGV4ID09PSBhY3Rpb25zLmxlbmd0aCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgICBhY3Rpb25zLmxlbmd0aCAtIDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAgICkgIT09IGluZGV4ICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZUFjdGlvbiggaW5kZXgsIGluZGV4ICsgMSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnRGVsZXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ3RyYXNoJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUFjdGlvbiggaW5kZXggKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0ZsZXg+XHJcblxyXG5cdFx0XHRcdDwvQ2FyZEJvZHk+XHJcblx0XHRcdDwvQ2FyZD47XHJcblx0XHR9ICkgfVxyXG5cdFx0PEJ1dHRvblxyXG5cdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRzZXRBY3Rpb25zKCBbXHJcblx0XHRcdFx0XHQuLi5hY3Rpb25zLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQuLi5KU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggZGVmYXVsdEFjdGlvbiApICksXHJcblx0XHRcdFx0XHRcdGlkOiBnZXRSYW5kb21JRCgpLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0PlxyXG5cdFx0XHR7ICcrIE5ldyBBY3Rpb24nIH1cclxuXHRcdDwvQnV0dG9uPlxyXG5cdFx0eyBpc0VkaXQgJiYgPEFjdGlvbk1vZGFsXHJcblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgY2xvc2VNb2RhbCB9XHJcblx0XHRcdHRpdGxlPXsgJ0VkaXQgQWN0aW9uJyB9XHJcblx0XHRcdG9uVXBkYXRlQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0dXBkYXRlQWN0aW9uU2V0dGluZ3MoIGVkaXRlZEFjdGlvbiApO1xyXG5cdFx0XHR9IH1cclxuXHRcdFx0b25DYW5jZWxDbGljaz17IGNsb3NlTW9kYWwgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IENhbGxiYWNrICYmIDxDYWxsYmFja1xyXG5cdFx0XHRcdHNldHRpbmdzPXsgZ2V0TWVyZ2VkU2V0dGluZ3MoKSB9XHJcblx0XHRcdFx0YWN0aW9uSWQ9eyBlZGl0ZWRBY3Rpb24uaWQgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBkYXRhICkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0RWRpdGVkQWN0aW9uKCBwcmV2ID0+IChcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdC4uLnByZXYsXHJcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnByZXYuc2V0dGluZ3MsXHJcblx0XHRcdFx0XHRcdFx0XHRbIGVkaXRlZEFjdGlvbi50eXBlIF06IGRhdGEsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KSApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPiB9XHJcblx0XHQ8L0FjdGlvbk1vZGFsPiB9XHJcblx0XHR7IGlzRWRpdFByb2Nlc3NBY3Rpb24gJiYgPEFjdGlvbk1vZGFsXHJcblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHRcdHRpdGxlPXsgX18oICdFZGl0IEFjdGlvbiBDb25kaXRpb25zJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldEVkaXRQcm9jZXNzQWN0aW9uKCBmYWxzZSApIH1cclxuXHRcdFx0b25DYW5jZWxDbGljaz17ICgpID0+IHNldEVkaXRQcm9jZXNzQWN0aW9uKCBmYWxzZSApIH1cclxuXHRcdD5cclxuXHRcdFx0eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIDxSZXBlYXRlcldpdGhTdGF0ZVxyXG5cdFx0XHRcdFx0aXRlbXM9eyBwcm9jZXNzZWRBY3Rpb24uY29uZGl0aW9ucyB9XHJcblx0XHRcdFx0XHRuZXdJdGVtPXsgY29uZGl0aW9uU2V0dGluZ3MuaXRlbSB9XHJcblx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRvblNhdmVJdGVtcz17IGNvbmRpdGlvbnMgPT4ge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVBY3Rpb25PYmooIHByb2Nlc3NlZEFjdGlvbi5pZCwge1xyXG5cdFx0XHRcdFx0XHRcdGNvbmRpdGlvbnMsXHJcblx0XHRcdFx0XHRcdFx0Y29uZGl0aW9uX29wZXJhdG9yOiBwcm9jZXNzZWRBY3Rpb24uY29uZGl0aW9uX29wZXJhdG9yLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdHNldFByb2Nlc3NlZEFjdGlvbiggZmFsc2UgKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0YWRkTmV3QnV0dG9uTGFiZWw9eyBfXyggJ0FkZCBOZXcgQ29uZGl0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0YWRkaXRpb25hbENvbnRyb2xzPXsgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ1NlbGVjdENvbnRyb2wtb3BlcmF0b3InIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBvcGVyYXRvckxhYmVsIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb2Nlc3NlZEFjdGlvbi5jb25kaXRpb25fb3BlcmF0b3IgfHwgJ2FuZCcgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgb3BlcmF0b3JzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb25kaXRpb25fb3BlcmF0b3IgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldFByb2Nlc3NlZEFjdGlvbiggcHJldiA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHR7IC4uLnByZXYsIGNvbmRpdGlvbl9vcGVyYXRvciB9XHJcblx0XHRcdFx0XHRcdFx0KSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7ICggeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSApID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGV4ZWN1dGVMYWJlbCA9IF9fKCAnVG8gZnVsZmlsbCB0aGlzIGNvbmRpdGlvbiwgdGhlIHJlc3VsdCBvZiB0aGUgY2hlY2sgbXVzdCBiZScsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnO1xyXG5cdFx0XHRcdFx0XHRleGVjdXRlTGFiZWwgKz0gY3VycmVudEl0ZW0uZXhlY3V0ZSA/ICdUUlVFJyA6ICdGQUxTRSc7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCB0cmFuc2Zvcm1lck9wdGlvbiA9IGdldFRyYW5zZm9ybWVyT3B0aW9uKCBjdXJyZW50SXRlbS5jb21wYXJlX3ZhbHVlX2Zvcm1hdCApO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBvcGVyYXRvck9wdGlvbiA9IGdldE9wZXJhdG9yT3B0aW9uKCBjdXJyZW50SXRlbS5vcGVyYXRvciApO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIDw+XHJcblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgZXhlY3V0ZUxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBjdXJyZW50SXRlbS5leGVjdXRlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBleGVjdXRlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIk9wZXJhdG9yXCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9eyBvcGVyYXRvck9wdGlvbiggJ2hlbHAnICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5vcGVyYXRvciB9XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgY29uZGl0aW9uU2V0dGluZ3Mub3BlcmF0b3JzIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb3BlcmF0b3IgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgb3BlcmF0b3IgfSApIH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkZpZWxkXCJcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZmllbGQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBmaWVsZCA9PiBjaGFuZ2VDdXJyZW50SXRlbSggeyBmaWVsZCB9ICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdUeXBlIHRyYW5zZm9ybSBjb21wYXJpbmcgdmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmNvbXBhcmVfdmFsdWVfZm9ybWF0IH1cclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBjb25kaXRpb25TZXR0aW5ncy5jb21wYXJlX3ZhbHVlX2Zvcm1hdHMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBjb21wYXJlX3ZhbHVlX2Zvcm1hdCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGNvbXBhcmVfdmFsdWVfZm9ybWF0IH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0eyB0cmFuc2Zvcm1lck9wdGlvbiggJ2hlbHAnICkubGVuZ3RoID4gMCAmJiA8cFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHsgbWFyZ2luVG9wOiAnMHB4JywgY29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknIH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogdHJhbnNmb3JtZXJPcHRpb24oICdoZWxwJyApIH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdFx0XHQ8RmllbGRXaXRoUHJlc2V0XHJcblx0XHRcdFx0XHRcdFx0XHRiYXNlQ29udHJvbFByb3BzPXsge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ1ZhbHVlIHRvIENvbXBhcmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZGVmYXVsdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGRlZmF1bHQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGV4Y2x1ZGVTb3VyY2VzPXsgWyAncXVlcnlfdmFyJyBdIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0XHRcdFx0dHJpZ2dlckNsYXNzZXM9eyBbICd0cmlnZ2VyX190ZXh0YXJlYScgXSB9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWNvbnRyb2wtY2xlYXIgamV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCcgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmRlZmF1bHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgb3BlcmF0b3JPcHRpb24oICduZWVkX2V4cGxvZGUnIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGNvbmRpdGlvblNldHRpbmdzLmhlbHBfZm9yX2V4cGxvZGluZ19jb21wYXJlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGRlZmF1bHQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0PlxyXG5cdFx0XHRcdFx0XHQ8Lz47XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQ8L1JlcGVhdGVyV2l0aFN0YXRlPjtcclxuXHRcdFx0fSB9XHJcblx0XHQ8L0FjdGlvbk1vZGFsPiB9XHJcblx0PC8+O1xyXG59O1xyXG5cclxuUGx1Z2luQWN0aW9ucyA9IGNvbXBvc2UoXHJcblx0d2l0aERpc3BhdGNoKCBkaXNwYXRjaCA9PiB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRzZXRDdXJyZW50QWN0aW9uKCBhY3Rpb24gKSB7XHJcblx0XHRcdFx0ZGlzcGF0Y2goICdqZXQtZm9ybXMvYWN0aW9ucycgKS5zZXRDdXJyZW50QWN0aW9uKCBhY3Rpb24gKTtcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSApLFxyXG4pKCBQbHVnaW5BY3Rpb25zICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5BY3Rpb25zOyIsImltcG9ydCBQbHVnaW5BcmdzIGZyb20gXCIuL3JlbmRlclwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGJhc2UgPSB7XHJcblx0bmFtZTogJ2pmLWFyZ3MtcGFuZWwnLFxyXG5cdHRpdGxlOiBfXyggJ0Zvcm0gU2V0dGluZ3MnIClcclxufTtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHJlbmRlcjogUGx1Z2luQXJncyxcclxuXHRpY29uOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdGJhc2UsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCBzdWJtaXRUeXBlcyA9IFtcclxuXHR7IHZhbHVlOiAnJywgbGFiZWw6ICctLScgfSxcclxuXHR7IHZhbHVlOiAncmVsb2FkJywgbGFiZWw6ICdQYWdlIFJlbG9hZCcgfSxcclxuXHR7IHZhbHVlOiAnYWpheCcsIGxhYmVsOiAnQUpBWCcgfVxyXG5dO1xyXG5cclxuY29uc3QgZmllbGRzTGF5b3V0ID0gW1xyXG5cdHsgdmFsdWU6ICcnLCBsYWJlbDogJy0tJyB9LFxyXG5cdHsgdmFsdWU6ICdjb2x1bW4nLCBsYWJlbDogJ0NvbHVtbicgfSxcclxuXHR7IHZhbHVlOiAncm93JywgbGFiZWw6ICdSb3cnIH1cclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcblx0c3VibWl0VHlwZXMsXHJcblx0ZmllbGRzTGF5b3V0XHJcbn07IiwiaW1wb3J0IHtcclxuXHRmaWVsZHNMYXlvdXQsXHJcblx0c3VibWl0VHlwZXMsXHJcbn0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuY29uc3QgeyB1c2VNZXRhU3RhdGUgfSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBTZWxlY3RDb250cm9sLFxyXG5cdFx0ICBUb2dnbGVDb250cm9sLFxyXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGx1Z2luQXJncygpIHtcclxuXHJcblx0Y29uc3QgWyBhcmdzLCBzZXRBcmdzIF0gPSB1c2VNZXRhU3RhdGUoICdfamZfYXJncycgKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IF9fKCAnRmllbGRzIExheW91dCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0dmFsdWU9eyBhcmdzLmZpZWxkc19sYXlvdXQgfVxyXG5cdFx0XHRvcHRpb25zPXsgZmllbGRzTGF5b3V0IH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0ZmllbGRzX2xheW91dDogbmV3VmFsLFxyXG5cdFx0XHRcdH0gKSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBfXyggJ1JlcXVpcmVkIE1hcmsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdHZhbHVlPXsgYXJncy5yZXF1aXJlZF9tYXJrIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0cmVxdWlyZWRfbWFyazogbmV3VmFsLFxyXG5cdFx0XHRcdH0gKSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IF9fKCAnU3VibWl0IFR5cGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdHZhbHVlPXsgYXJncy5zdWJtaXRfdHlwZSB9XHJcblx0XHRcdG9wdGlvbnM9eyBzdWJtaXRUeXBlcyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdHN1Ym1pdF90eXBlOiBuZXdWYWwsXHJcblx0XHRcdFx0fSApICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHJcblx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRrZXk9eyAnZW5hYmxlX3Byb2dyZXNzJyB9XHJcblx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgZm9ybSBwYWdlcyBwcm9ncmVzcycsICdqZXQtZnJvbS1idWlsZGVyJyApIH1cclxuXHRcdFx0Y2hlY2tlZD17IGFyZ3MuZW5hYmxlX3Byb2dyZXNzIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdHNldEFyZ3MoIHByZXYgPT4gKCB7XHJcblx0XHRcdFx0XHQuLi5wcmV2LFxyXG5cdFx0XHRcdFx0ZW5hYmxlX3Byb2dyZXNzOiBCb29sZWFuKCBuZXdWYWwgKSxcclxuXHRcdFx0XHR9ICkgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdDwvPlxyXG59OyIsImltcG9ydCBQbHVnaW5DYXB0Y2hhIGZyb20gXCIuL3JlbmRlclwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGJhc2UgPSB7XHJcblx0bmFtZTogJ2pmLWNhcHRjaGEtcGFuZWwnLFxyXG5cdHRpdGxlOiBfXyggJ0NhcHRjaGEgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG59O1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0cmVuZGVyOiBQbHVnaW5DYXB0Y2hhLFxyXG5cdGljb246IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0YmFzZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBsYWJlbHMgPSB7XHJcblx0ZW5hYmxlZDogX18oICdFbmFibGUgcmVDQVBUQ0hBIHYzIGZvcm0gdmVyaWZpY2F0aW9uJyAsICdqZXQtZm9ybS1idWlsZGVyJyksXHJcblx0a2V5OiBfXyggJ1NpdGUgS2V5OicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5OicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdHVzZV9nbG9iYWw6IF9fKCAnVXNlIEdsb2JhbCBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcbn07XHJcblxyXG5leHBvcnQgeyBsYWJlbHMgfTsiLCJpbXBvcnQgeyBsYWJlbHMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IHVzZU1ldGFTdGF0ZSB9ID0gSmV0RkJIb29rcztcclxuY29uc3Qge1xyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0VGV4dENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzXHJcblxyXG5jb25zdCB7IGdsb2JhbFRhYiB9ID0gSmV0RkJBY3Rpb25zO1xyXG5jb25zdCBjdXJyZW50VGFiID0gZ2xvYmFsVGFiKCB7IHNsdWc6ICdjYXB0Y2hhLXRhYicgfSApO1xyXG5cclxuZnVuY3Rpb24gUGx1Z2luQ2FwdGNoYSgpIHtcclxuXHJcblx0Y29uc3QgWyBhcmdzLCBzZXRBcmdzIF0gPSB1c2VNZXRhU3RhdGUoICdfamZfcmVjYXB0Y2hhJyApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGtleT17ICdlbmFibGVkJyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWxzLmVuYWJsZWQgfVxyXG5cdFx0XHRjaGVja2VkPXsgYXJncy5lbmFibGVkIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0ZW5hYmxlZDogQm9vbGVhbiggbmV3VmFsIClcclxuXHRcdFx0XHR9ICkgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0eyBhcmdzLmVuYWJsZWQgJiYgPD5cclxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRrZXk9eyAndXNlX2dsb2JhbCcgfVxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWxzLnVzZV9nbG9iYWwgfVxyXG5cdFx0XHRcdGNoZWNrZWQ9eyBhcmdzLnVzZV9nbG9iYWwgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgdXNlX2dsb2JhbCA9PiB7XHJcblx0XHRcdFx0XHRzZXRBcmdzKCBwcmV2QXJncyA9PiAoIHtcclxuXHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdHVzZV9nbG9iYWw6IEJvb2xlYW4oIHVzZV9nbG9iYWwgKVxyXG5cdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdGtleT17ICdzaXRlX2tleScgfVxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWxzLmtleSB9XHJcblx0XHRcdFx0dmFsdWU9eyBhcmdzLnVzZV9nbG9iYWwgPyBjdXJyZW50VGFiLmtleSA6IGFyZ3Mua2V5IH1cclxuXHRcdFx0XHRkaXNhYmxlZD17IGFyZ3MudXNlX2dsb2JhbCB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdGtleTogbmV3VmFsdWVcclxuXHRcdFx0XHR9ICkgKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdGtleT17ICdzZWNyZXRfa2V5JyB9XHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbHMuc2VjcmV0IH1cclxuXHRcdFx0XHR2YWx1ZT17IGFyZ3MudXNlX2dsb2JhbCA/IGN1cnJlbnRUYWIuc2VjcmV0IDogYXJncy5zZWNyZXQgfVxyXG5cdFx0XHRcdGRpc2FibGVkPXsgYXJncy51c2VfZ2xvYmFsIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0c2VjcmV0OiBuZXdWYWx1ZVxyXG5cdFx0XHRcdH0gKSApIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PHNwYW4+eyAnUmVnaXN0ZXIgcmVDQVBUQ0hBIHYzIGtleXMgJyB9XHJcblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FkbWluL2NyZWF0ZVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHQ8Lz4gfVxyXG5cdDwvPlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luQ2FwdGNoYTtcclxuIiwiaW1wb3J0IFBsdWdpbkdhdGV3YXlzIGZyb20gXCIuL3JlbmRlclwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGJhc2UgPSB7XHJcblx0bmFtZTogJ2pmLWdhdGV3YXlzLXBhbmVsJyxcclxuXHR0aXRsZTogX18oICdHYXRld2F5cyBTZXR0aW5ncycgKSxcclxuXHRjb25kaXRpb246IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5nYXRld2F5cy5hbGxvd2VkXHJcbn07XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHRyZW5kZXI6IFBsdWdpbkdhdGV3YXlzLFxyXG5cdGljb246IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0YmFzZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImltcG9ydCBHYXRld2F5c0VkaXRvciBmcm9tICcuLi8uLi9nYXRld2F5cy9nYXRld2F5cy1lZGl0b3InO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRSYWRpb0NvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoRGlzcGF0Y2gsXHJcblx0d2l0aFNlbGVjdCxcclxufSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0LFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHsgQWN0aW9uTW9kYWwgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoRGlzcGF0Y2hNZXRhLFxyXG5cdHdpdGhTZWxlY3RNZXRhLFxyXG5cdHdpdGhEaXNwYXRjaEdhdGV3YXlzLFxyXG5cdHdpdGhTZWxlY3RHYXRld2F5cyxcclxufSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCBnYXRld2F5c0RhdGEgPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuZ2F0ZXdheXM7XHJcblxyXG5jb25zdCBnZXRHYXRld2F5TGFiZWwgPSAoIHR5cGUgKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdGdhdGV3YXlzRGF0YS5saXN0LmZpbmQoIGVsID0+IGVsLnZhbHVlID09PSB0eXBlICkubGFiZWxcclxuXHQpO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBsdWdpbkdhdGV3YXlzKCB7XHJcblx0X2pmX2dhdGV3YXlzOiBHYXRld2F5c01ldGEsXHJcblx0X2pmX2FjdGlvbnM6IEFjdGlvbnNNZXRhLFxyXG5cdENoYW5nZUdhdGV3YXksXHJcblx0c2V0R2F0ZXdheSxcclxuXHRzZXRHYXRld2F5U2NlbmFyaW8sXHJcblx0Z2F0ZXdheUdlbmVyYWwsXHJcblx0Z2F0ZXdheVNjZW5hcmlvXHJcbn0gKSB7XHJcblxyXG5cdGNvbnN0IFsgaXNFZGl0LCBzZXRFZGl0IF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIGlzRWRpdCApIHtcclxuXHRcdFx0c2V0R2F0ZXdheSggR2F0ZXdheXNNZXRhICk7XHJcblx0XHRcdHNldEdhdGV3YXlTY2VuYXJpbyggR2F0ZXdheXNNZXRhWyBHYXRld2F5c01ldGEuZ2F0ZXdheSBdPy5zY2VuYXJpbyApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRHYXRld2F5KCB7fSApO1xyXG5cdFx0XHRzZXRHYXRld2F5U2NlbmFyaW8oIHt9ICk7XHJcblx0XHR9XHJcblx0fSwgWyBpc0VkaXQgXSApO1xyXG5cclxuXHRjb25zdCBjbG9zZU1vZGFsID0gKCBuZXdNZXRhID0gZmFsc2UgKSA9PiB7XHJcblx0XHRpZiAoIGZhbHNlICE9PSBuZXdNZXRhICkge1xyXG5cdFx0XHRDaGFuZ2VHYXRld2F5KCBuZXdNZXRhICk7XHJcblx0XHR9XHJcblx0XHRzZXRFZGl0KCBmYWxzZSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGlzc2V0QWN0aW9uVHlwZSA9IHR5cGUgPT4ge1xyXG5cdFx0cmV0dXJuIEJvb2xlYW4oIEFjdGlvbnNNZXRhLmZpbmQoIGFjdGlvbiA9PiB0eXBlID09PSBhY3Rpb24udHlwZSApICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaXNEaXNhYmxlZCA9ICEgaXNzZXRBY3Rpb25UeXBlKCAnaW5zZXJ0X3Bvc3QnICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PFJhZGlvQ29udHJvbFxyXG5cdFx0XHRrZXk9eyAnZ2F0ZXdheXNfcmFkaW9fY29udHJvbCcgfVxyXG5cdFx0XHRzZWxlY3RlZD17IEdhdGV3YXlzTWV0YS5nYXRld2F5IH1cclxuXHRcdFx0b3B0aW9ucz17IFtcclxuXHRcdFx0XHR7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiAnbm9uZScgfSxcclxuXHRcdFx0XHQuLi5nYXRld2F5c0RhdGEubGlzdCxcclxuXHRcdFx0XSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHtcclxuXHRcdFx0XHRDaGFuZ2VHYXRld2F5KCB7XHJcblx0XHRcdFx0XHQuLi5HYXRld2F5c01ldGEsXHJcblx0XHRcdFx0XHRnYXRld2F5OiB2YWwsXHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7IChcclxuXHRcdCAgR2F0ZXdheXNNZXRhLmdhdGV3YXkgJiYgJ25vbmUnICE9PSBHYXRld2F5c01ldGEuZ2F0ZXdheVxyXG5cdFx0ICApICYmIDw+XHJcblx0XHRcdCAgPEJ1dHRvblxyXG5cdFx0XHRcdCAgb25DbGljaz17ICgpID0+IHNldEVkaXQoIHRydWUgKSB9XHJcblx0XHRcdFx0ICBpY29uPXsgJ2FkbWluLXRvb2xzJyB9XHJcblx0XHRcdFx0ICBzdHlsZT17IHtcclxuXHRcdFx0XHRcdCAgbWFyZ2luOiAnMWVtIDAnLFxyXG5cdFx0XHRcdCAgfSB9XHJcblx0XHRcdFx0ICBpc1NlY29uZGFyeVxyXG5cdFx0XHRcdCAgZGlzYWJsZWQ9eyBpc0Rpc2FibGVkIH1cclxuXHRcdFx0ICA+XHJcblx0XHRcdFx0ICB7IF9fKCAnRWRpdCcgKSB9XHJcblx0XHRcdCAgPC9CdXR0b24+XHJcblx0XHRcdCAgeyBpc0Rpc2FibGVkICYmIDxwPnsgX18oICdQbGVhc2UgYWRkIFxcYEluc2VydC9VcGRhdGUgUG9zdFxcYCBhY3Rpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9wPiB9XHJcblx0XHQgIDwvPiB9XHJcblx0XHR7IGlzRWRpdCAmJiAoXHJcblx0XHRcdDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBjbG9zZU1vZGFsKCkgfVxyXG5cdFx0XHRcdG9uQ2FuY2VsQ2xpY2s9eyAoKSA9PiBjbG9zZU1vZGFsKCkgfVxyXG5cdFx0XHRcdG9uVXBkYXRlQ2xpY2s9eyAoKSA9PiBjbG9zZU1vZGFsKCB7XHJcblx0XHRcdFx0XHQuLi5nYXRld2F5R2VuZXJhbCxcclxuXHRcdFx0XHRcdFsgZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSBdOiB7XHJcblx0XHRcdFx0XHRcdC4uLihcclxuXHRcdFx0XHRcdFx0XHRnYXRld2F5R2VuZXJhbFsgZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSBdIHx8IHt9XHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdHNjZW5hcmlvOiBnYXRld2F5U2NlbmFyaW8sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0dGl0bGU9eyBgRWRpdCAkeyBnZXRHYXRld2F5TGFiZWwoIEdhdGV3YXlzTWV0YS5nYXRld2F5ICkgfSBTZXR0aW5nc2AgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdhdGV3YXlzRWRpdG9yLz5cclxuXHRcdFx0PC9BY3Rpb25Nb2RhbD5cclxuXHRcdCkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcblx0d2l0aERpc3BhdGNoKCAoIC4uLnByb3BzICkgPT4gKFxyXG5cdFx0e1xyXG5cdFx0XHQuLi53aXRoRGlzcGF0Y2hNZXRhKCAnX2pmX2dhdGV3YXlzJywgJ0NoYW5nZUdhdGV3YXknICkoIC4uLnByb3BzICksXHJcblx0XHRcdC4uLndpdGhEaXNwYXRjaEdhdGV3YXlzKCAuLi5wcm9wcyApLFxyXG5cdFx0fVxyXG5cdCkgKSxcclxuXHR3aXRoU2VsZWN0KCAoIC4uLnByb3BzICkgPT4gKFxyXG5cdFx0e1xyXG5cdFx0XHQuLi53aXRoU2VsZWN0R2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHRcdC4uLndpdGhTZWxlY3RNZXRhKCAnX2pmX2dhdGV3YXlzJyApKCAuLi5wcm9wcyApLFxyXG5cdFx0XHQuLi53aXRoU2VsZWN0TWV0YSggJ19qZl9hY3Rpb25zJyApKCAuLi5wcm9wcyApLFxyXG5cclxuXHRcdH1cclxuXHQpICksXHJcbikoIFBsdWdpbkdhdGV3YXlzICk7XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBhcmdzIGZyb20gXCIuL2FyZ3VtZW50c1wiO1xyXG5pbXBvcnQgKiBhcyBjYXB0Y2hhIGZyb20gXCIuL2NhcHRjaGFcIjtcclxuaW1wb3J0ICogYXMgZ2F0ZXdheXMgZnJvbSBcIi4vZ2F0ZXdheXNcIjtcclxuaW1wb3J0ICogYXMgcHJlc2V0IGZyb20gXCIuL3ByZXNldFwiO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xyXG5cclxuY29uc3Qge1xyXG5cdGFwcGx5RmlsdGVyc1xyXG59ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0cmVnaXN0ZXJQbHVnaW5cclxufSA9IHdwLnBsdWdpbnM7XHJcblxyXG5jb25zdCB7XHJcblx0UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxufSA9IHdwLmVkaXRQb3N0O1xyXG5cclxuY29uc3Qgd2l0aFBsdWdpblByb3BzID0gKCBzZXR0aW5ncywgYmFzZSApID0+IHtcclxuXHRjb25zdCBQbHVnaW5SZW5kZXIgPSBzZXR0aW5ncy5yZW5kZXI7XHJcblx0cmV0dXJuICgpID0+IDxQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbCB7IC4uLmJhc2UgfSBrZXk9eyBgcGx1Z2luLXBhbmVsLSR7IGJhc2UubmFtZSB9YCB9PlxyXG5cdFx0PFBsdWdpblJlbmRlciBrZXk9eyBgcGx1Z2luLXJlbmRlci0keyBiYXNlLm5hbWUgfWAgfS8+XHJcblx0PC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD47XHJcbn1cclxuXHJcbmNvbnN0IHJlZ2lzdGVySmZiUGx1Z2luID0gcGx1Z2luID0+IHtcclxuXHRjb25zdCB7IGJhc2UsIHNldHRpbmdzIH0gPSBwbHVnaW47XHJcblxyXG5cdHNldHRpbmdzLnJlbmRlciA9IHdpdGhQbHVnaW5Qcm9wcyggc2V0dGluZ3MsIGJhc2UgKTtcclxuXHJcblx0cmVnaXN0ZXJQbHVnaW4oIGJhc2UubmFtZSwgc2V0dGluZ3MgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyUGx1Z2lucygpIHtcclxuXHRjb25zdCBzb3J0ZWRQbHVnaW5zID0gW107XHJcblx0Y29uc3QgamZiUGx1Z2lucyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5wbHVnaW5zJywgW1xyXG5cdFx0YXJncyxcclxuXHRcdGNhcHRjaGEsXHJcblx0XHRnYXRld2F5cyxcclxuXHRcdGFjdGlvbnMsXHJcblx0XHRwcmVzZXQsXHJcblx0XHRtZXNzYWdlc1xyXG5cdF0gKTtcclxuXHJcblx0amZiUGx1Z2lucy5mb3JFYWNoKCBwbHVnaW4gPT4ge1xyXG5cdFx0Y29uc3QgeyBiYXNlOiB7IG5hbWUsIGNvbmRpdGlvbiA9IHRydWUgfSB9ID0gcGx1Z2luO1xyXG5cclxuXHRcdGlmICggISBjb25kaXRpb24gKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiZWZvcmVQbHVnaW4gPSBhcHBseUZpbHRlcnMoIGBqZXQuZmIucmVnaXN0ZXIucGx1Z2luLiR7IG5hbWUgfS5iZWZvcmVgLCBbXSApO1xyXG5cdFx0aWYgKCBiZWZvcmVQbHVnaW4gKSB7XHJcblx0XHRcdHNvcnRlZFBsdWdpbnMucHVzaCggLi4uYmVmb3JlUGx1Z2luICk7XHJcblx0XHR9XHJcblx0XHRzb3J0ZWRQbHVnaW5zLnB1c2goIHBsdWdpbiApO1xyXG5cclxuXHRcdGNvbnN0IGFmdGVyUGx1Z2luID0gYXBwbHlGaWx0ZXJzKCBgamV0LmZiLnJlZ2lzdGVyLnBsdWdpbi4keyBuYW1lIH0uYWZ0ZXJgLCBbXSApO1xyXG5cdFx0aWYgKCBhZnRlclBsdWdpbiApIHtcclxuXHRcdFx0c29ydGVkUGx1Z2lucy5wdXNoKCAuLi5hZnRlclBsdWdpbiApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0c29ydGVkUGx1Z2lucy5mb3JFYWNoKCByZWdpc3RlckpmYlBsdWdpbiApO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgUGx1Z2luTWVzc2FnZXMgZnJvbSBcIi4vcmVuZGVyXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgYmFzZSA9IHtcclxuXHRuYW1lOiAnamYtbWVzc2FnZXMtcGFuZWwnLFxyXG5cdHRpdGxlOiBfXyggJ0dlbmVyYWwgTWVzc2FnZXMgU2V0dGluZ3MnICksXHJcbn07XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHRyZW5kZXI6IFBsdWdpbk1lc3NhZ2VzLFxyXG5cdGljb246IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0YmFzZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IHsgVG9vbHMgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTZWxlY3QsXHJcblx0dXNlRGlzcGF0Y2hcclxufSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gUGx1Z2luTWVzc2FnZXMoKSB7XHJcblxyXG5cdGNvbnN0IG1ldGEgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRlZGl0UG9zdFxyXG5cdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRjb25zdCBnZXREZWZhdWx0TWVzc2FnZXNWYWx1ZXMgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBkZWZhdWx0cyA9IHt9O1xyXG5cdFx0T2JqZWN0LmVudHJpZXMoIEpldEZvcm1FZGl0b3JEYXRhLm1lc3NhZ2VzRGVmYXVsdCApLmZvckVhY2goICggWyB0eXBlLCBkYXRhIF0gKSA9PiB7XHJcblx0XHRcdGRlZmF1bHRzWyB0eXBlIF0gPSBkYXRhLnZhbHVlO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiBkZWZhdWx0cztcclxuXHR9XHJcblxyXG5cdGNvbnN0IFsgbWVzc2FnZXMsIHNldE1lc3NhZ2VzIF0gPSB1c2VTdGF0ZSggKCkgPT4ge1xyXG5cdFx0Y29uc3QgbWV0YU1lc3NhZ2VzID0gSlNPTi5wYXJzZSggbWV0YS5famZfbWVzc2FnZXMgfHwgJ3t9JyApO1xyXG5cdFx0cmV0dXJuIFRvb2xzLmlzRW1wdHlPYmplY3QoIG1ldGFNZXNzYWdlcyApID8gZ2V0RGVmYXVsdE1lc3NhZ2VzVmFsdWVzKCkgOiBtZXRhTWVzc2FnZXM7XHJcblx0fSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0X2pmX21lc3NhZ2VzOiBKU09OLnN0cmluZ2lmeSggbWVzc2FnZXMgKVxyXG5cdFx0XHR9IClcclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxuXHRjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoIHR5cGUsIHZhbHVlICkgPT4ge1xyXG5cdFx0c2V0TWVzc2FnZXMoIHByZXYgPT4gKCB7IC4uLnByZXYsIFsgdHlwZSBdOiB2YWx1ZSB9ICkgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyBPYmplY3QuZW50cmllcyggbWVzc2FnZXMgKS5tYXAoICggWyB0eXBlLCB0ZXh0IF0sIGlkICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gSmV0Rm9ybUVkaXRvckRhdGEubWVzc2FnZXNEZWZhdWx0WyB0eXBlIF0gJiYgPFRleHRDb250cm9sXHJcblx0XHRcdFx0a2V5PXsgdHlwZSArIGlkIH1cclxuXHRcdFx0XHRsYWJlbD17IEpldEZvcm1FZGl0b3JEYXRhLm1lc3NhZ2VzRGVmYXVsdFsgdHlwZSBdLmxhYmVsIH1cclxuXHRcdFx0XHR2YWx1ZT17IHRleHQgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VNZXNzYWdlKCB0eXBlLCBuZXdWYWx1ZSApIH1cclxuXHRcdFx0Lz47XHJcblx0XHR9ICkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luTWVzc2FnZXM7IiwiaW1wb3J0IFBsdWdpblByZXNldCBmcm9tIFwiLi9yZW5kZXJcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBiYXNlID0ge1xyXG5cdG5hbWU6ICdqZi1wcmVzZXQtcGFuZWwnLFxyXG5cdHRpdGxlOiBfXyggJ1ByZXNldCBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG59O1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0cmVuZGVyOiBQbHVnaW5QcmVzZXQsXHJcblx0aWNvbjogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRiYXNlLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IEdlbmVyYWxQcmVzZXQgZnJvbSBcIkBjb21wb25lbnRzL3ByZXNldHMvZ2VuZXJhbC1wcmVzZXRcIjtcclxuXHJcbmNvbnN0IHsgdXNlTWV0YVN0YXRlIH0gPSBKZXRGQkhvb2tzO1xyXG5jb25zdCB7IGdldEF2YWlsYWJsZUZpZWxkcyB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gUGx1Z2luUHJlc2V0KCkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRUb2dnbGVDb250cm9sLFxyXG5cdH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9wcmVzZXQnICk7XHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IGFyZ3MuZW5hYmxlZCA/IGdldEF2YWlsYWJsZUZpZWxkcyggW10sICdwcmVzZXQnICkgOiBbXTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRrZXk9eyAnZW5hYmxlX3ByZXNldCcgfVxyXG5cdFx0XHRsYWJlbD17ICdFbmFibGUnIH1cclxuXHRcdFx0Y2hlY2tlZD17IGFyZ3MuZW5hYmxlZCB9XHJcblx0XHRcdGhlbHA9eyAnQ2hlY2sgdGhpcyB0byBlbmFibGUgZ2xvYmFsIGZvcm0gcHJlc2V0JyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdGVuYWJsZWQ6IG5ld1ZhbFxyXG5cdFx0XHRcdH0gKSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7IGFyZ3MuZW5hYmxlZCAmJiA8R2VuZXJhbFByZXNldFxyXG5cdFx0XHRrZXk9eyAnX2pmX3ByZXNldF9nZW5lcmFsJyB9XHJcblx0XHRcdHZhbHVlPXsgYXJncyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdC4uLm5ld1ZhbCxcclxuXHRcdFx0XHRcdGVuYWJsZWQ6IHByZXZBcmdzLmVuYWJsZWRcclxuXHRcdFx0XHR9ICkgKTtcclxuXHRcdFx0fSB9XHJcblx0XHRcdGF2YWlsYWJsZUZpZWxkcz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0Lz4gfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luUHJlc2V0O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Jsb2Nrcy9mb3JtLWZpZWxkcyc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvc2VuZC1lbWFpbCc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvaW5zZXJ0LXBvc3QnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3JlZ2lzdGVyLXVzZXInO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3VwZGF0ZS11c2VyJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy91cGRhdGUtb3B0aW9ucyc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvY2FsbC1ob29rJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9jYWxsLXdlYmhvb2snO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3JlZGlyZWN0LXRvLXBhZ2UnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL21haWxjaGltcCc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvZ2V0cmVzcG9uc2UnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2FjdGl2ZWNhbXBhaWduJztcclxuaW1wb3J0IFJlZ2lzdGVyUGx1Z2lucyBmcm9tIFwiLi9wbHVnaW5zL21hbmFnZXJcIjtcclxuaW1wb3J0IFJlZ2lzdGVyRm9ybUZpZWxkcyBmcm9tIFwiLi9ibG9ja3MvZm9ybS1maWVsZHNcIjtcclxuXHJcbmNvbnN0IHsgZXZlbnQgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmV2ZW50KCAnamV0LWZvcm0tYnVpbGRlci1pbml0aWFsaXplJyApKCk7XHJcblxyXG53aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLmZvckVhY2goIGZ1bmN0aW9uICggYWN0aW9uLCBpbmRleCApIHtcclxuXHRpZiAoIHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgJiYgd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9uc1sgYWN0aW9uLmlkIF0gKSB7XHJcblx0XHR3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBpbmRleCBdLmNhbGxiYWNrID0gd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9uc1sgYWN0aW9uLmlkIF07XHJcblx0fVxyXG59ICk7XHJcblxyXG5SZWdpc3RlclBsdWdpbnMoKTtcclxuUmVnaXN0ZXJGb3JtRmllbGRzKCk7XHJcblxyXG5ldmVudCggJ2pldC1mb3JtLWJ1aWxkZXItaW5pdGlhbGl6ZWQnICkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9