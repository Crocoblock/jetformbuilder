/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ }),

/***/ "../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/icon/index.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Internal dependencies
 */
const {
  SelectControl,
  TextControl
} = wp.components;
class JetFieldsMapControl extends wp.element.Component {
  constructor(props) {
    super(props);
    this.fieldTypes = this.props.fieldTypes;
    this.taxonomiesList = this.props.taxonomiesList;
    this.className = this.props.className;
    this.metaProp = this.props.metaProp ? this.props.metaProp : 'post_meta';
    this.termsProp = this.props.termsProp ? this.props.termsProp : 'post_terms';
    this.index = this.props.index;
    this.init();
    this.bindFunctions();
    this.state = {
      type: this.getFieldType(this.props.fieldValue)
    };
  }
  bindFunctions() {
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  init() {
    this.id = `inspector-select-control-${this.index}`;
    this.preparedTaxes = [];
    this.taxPrefix = 'jet_tax__';
    if (!this.taxonomiesList) {
      return;
    }
    for (let i = 0; i < this.taxonomiesList.length; i++) {
      this.preparedTaxes.push({
        value: this.taxPrefix + this.taxonomiesList[i].value,
        label: this.taxonomiesList[i].label
      });
    }
  }
  getFieldName(value) {
    if (!value) {
      return '';
    }
    const fieldType = this.getFieldType(value);
    if (this.termsProp === fieldType || this.metaProp === fieldType) {
      return value;
    }
    return '';
  }
  isTermOrMeta(value) {
    return this.termsProp === value || this.metaProp === value;
  }
  getFieldType(value) {
    if (!value) {
      return '';
    }
    for (let i = 0; i < this.fieldTypes.length; i++) {
      if (value === this.fieldTypes[i].value) {
        return value;
      }
    }
    if (value.includes(this.taxPrefix)) {
      return this.termsProp;
    }
    return this.metaProp;
  }
  onChangeValue(newValue) {
    this.props.onChange({
      ...this.props.fieldsMap,
      [this.props.fieldName]: newValue
    });
  }
  onChangeType(newValue) {
    let val = this.getFieldType(newValue);
    this.setState({
      type: val
    });
    if (this.isTermOrMeta(val)) {
      val = '';
    }
    this.onChangeValue(val);
  }

  // Disable reason: A select with an onchange throws a warning

  /* eslint-disable jsx-a11y/no-onchange */
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jet-fields-map__row"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jet-post-field-control"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      key: 'field_type_' + this.props.fieldName + this.index,
      label: this.props.fieldName,
      labelPosition: "side",
      value: this.state.type,
      onChange: this.onChangeType,
      options: this.fieldTypes,
      style: {
        width: '160px'
      }
    }), this.metaProp === this.state.type && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      key: 'field_name_' + this.props.fieldName + this.index,
      value: this.props.fieldValue,
      onChange: this.onChangeValue,
      style: {
        width: '200px'
      }
    }), this.termsProp === this.state.type && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JetFieldsMapControl);

/***/ }),

/***/ "./package/action-buttons/components/ActionButtonPlaceholder.js":
/*!**********************************************************************!*\
  !*** ./package/action-buttons/components/ActionButtonPlaceholder.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  useBlockProps,
  RichText
} = wp.blockEditor;
const {
  Button
} = wp.components;
function ActionButtonPlaceholder(props) {
  const blockProps = useBlockProps();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: props.wrapperClasses.join(' ')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isPrimary: true,
    className: props.buttonClasses.join(' ')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    placeholder: "Input Submit label...",
    allowedFormats: [],
    value: props.attributes.label,
    onChange: label => props.setAttributes({
      label
    })
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButtonPlaceholder);

/***/ }),

/***/ "./package/action-fields-map/components/ActionFieldsMap.js":
/*!*****************************************************************!*\
  !*** ./package/action-fields-map/components/ActionFieldsMap.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ActionFieldsMapContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ActionFieldsMapContext */ "./package/action-fields-map/context/ActionFieldsMapContext.js");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);




function ActionFieldsMap({
  fields = [],
  label = '[Empty label]',
  children = null,
  plainHelp = '',
  customHelp = false
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControl, {
    align: "flex-start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.Label, null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControlEnd, null, customHelp && 'function' === typeof customHelp && customHelp(), Boolean(plainHelp.length) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'description-controls'
  }, plainHelp), fields.map(([fieldId, fieldData], index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    key: `field_in_map_${fieldId + index}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_ActionFieldsMapContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      name: fieldId,
      data: fieldData,
      index
    }
  }, 'function' === typeof children ? children({
    fieldId,
    fieldData,
    index
  }) : children)))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionFieldsMap);

/***/ }),

/***/ "./package/action-fields-map/components/DynamicPropertySelect.js":
/*!***********************************************************************!*\
  !*** ./package/action-fields-map/components/DynamicPropertySelect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ActionFieldsMapContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ActionFieldsMapContext */ "./package/action-fields-map/context/ActionFieldsMapContext.js");
/* harmony import */ var _context_CurrentPropertyMapContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CurrentPropertyMapContext */ "./package/action-fields-map/context/CurrentPropertyMapContext.js");




const {
  useState,
  useContext
} = wp.element;
const {
  SelectControl
} = wp.components;

// eslint-disable-next-line max-lines-per-function
function DynamicPropertySelect({
  dynamic = [],
  parseValue = null,
  children = null,
  properties = null
}) {
  var _properties;
  // context with action props
  const {
    source,
    settings,
    setMapField
  } = useContext(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__.CurrentActionEditContext);
  properties = (_properties = properties) !== null && _properties !== void 0 ? _properties : source.properties;

  // context with current field in a field map
  const {
    name,
    index
  } = useContext(_context_ActionFieldsMapContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const {
    fields_map: fieldsMap = {}
  } = settings;
  function getTypeFieldValue(value) {
    var _dynamic$;
    for (const property of properties) {
      if (value === property.value) {
        return value;
      }
    }
    return parseValue ? parseValue(value) : (_dynamic$ = dynamic[0]) !== null && _dynamic$ !== void 0 ? _dynamic$ : '';
  }
  const [currentProp, setCurrentProp] = useState(() => {
    var _fieldsMap$name;
    return getTypeFieldValue((_fieldsMap$name = fieldsMap[name]) !== null && _fieldsMap$name !== void 0 ? _fieldsMap$name : '');
  });
  const getHelp = () => {
    var _property$help;
    const property = properties.find(({
      value
    }) => value === currentProp);
    return (_property$help = property?.help) !== null && _property$help !== void 0 ? _property$help : '';
  };
  const FieldSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    key: name + index,
    value: currentProp,
    options: properties,
    help: getHelp(),
    onChange: value => {
      const prop = getTypeFieldValue(value);
      setCurrentProp(prop);
      setMapField({
        nameField: name,
        value: dynamic.includes(value) ? '' : value
      });
    },
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_CurrentPropertyMapContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      FieldSelect,
      property: currentProp
    }
  }, children && children, !children && FieldSelect);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicPropertySelect);

/***/ }),

/***/ "./package/action-fields-map/components/WrapperRequiredControl.js":
/*!************************************************************************!*\
  !*** ./package/action-fields-map/components/WrapperRequiredControl.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WrapperRequiredControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ActionFieldsMapContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ActionFieldsMapContext */ "./package/action-fields-map/context/ActionFieldsMapContext.js");


const {
  RawHTML,
  useContext
} = wp.element;
function WrapperRequiredControl({
  children,
  labelKey = 'label',
  requiredKey = 'required',
  helpKey = 'help',
  field = []
}) {
  let {
    name,
    data
  } = useContext(_context_ActionFieldsMapContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  if (field.length) {
    [name, data] = field;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-user-meta__row",
    key: 'user_meta_' + name
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-field-map__row-label"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'fields-map__label'
  }, data.hasOwnProperty(labelKey) && data[labelKey] && data[labelKey], !data.hasOwnProperty(labelKey) && data), data.hasOwnProperty(requiredKey) && data[requiredKey] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'fields-map__required'
  }, " *"), data[helpKey] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'components-base-control__help',
    style: {
      color: 'rgb(117, 117, 117)',
      margin: '1em 0 0 0'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, data[helpKey]))), children);
}

/***/ }),

/***/ "./package/action-fields-map/context/ActionFieldsMapContext.js":
/*!*********************************************************************!*\
  !*** ./package/action-fields-map/context/ActionFieldsMapContext.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const ActionFieldsMapContext = createContext({
  name: '',
  data: {},
  index: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionFieldsMapContext);

/***/ }),

/***/ "./package/action-fields-map/context/CurrentPropertyMapContext.js":
/*!************************************************************************!*\
  !*** ./package/action-fields-map/context/CurrentPropertyMapContext.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const CurrentPropertyMapContext = createContext({
  FieldSelect: null,
  property: ''
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentPropertyMapContext);

/***/ }),

/***/ "./package/action-modal/components/ActionModal.js":
/*!********************************************************!*\
  !*** ./package/action-modal/components/ActionModal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ActionModalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ActionModalContext */ "./package/action-modal/context/ActionModalContext.js");
/* harmony import */ var _ActionModalFooterSlotFill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionModalFooterSlotFill */ "./package/action-modal/components/ActionModalFooterSlotFill.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






const {
  Slot: FooterSlot
} = _ActionModalFooterSlotFill__WEBPACK_IMPORTED_MODULE_2__["default"];

// eslint-disable-next-line max-lines-per-function
function ActionModal({
  onRequestClose,
  children,
  title = '',
  classNames = [],
  className = '',
  onUpdateClick,
  onCancelClick,
  updateBtnLabel = 'Update',
  updateBtnProps = {},
  cancelBtnProps = {},
  cancelBtnLabel = 'Cancel',
  fixedHeight = '',
  ...props
}) {
  const modalClasses = ['jet-form-edit-modal', ...classNames, className];
  const [actionClick, setActionClick] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const updateClick = () => {
    if (onUpdateClick) {
      onUpdateClick();
    }
    setActionClick(true);
  };
  const cancelClick = () => {
    if (onCancelClick) {
      onCancelClick();
    }
    setActionClick(false);
  };
  let style = {};
  if (fixedHeight) {
    style = {
      height: fixedHeight
    };
    modalClasses.push('jet-modal-fixed-height');
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    onRequestClose: onRequestClose,
    className: modalClasses.join(' '),
    title: title,
    style: style,
    ...props
  }, !children && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-form-edit-modal__content"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Action callback is not found.', 'jet-form-builder')), children && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-form-edit-modal__wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_ActionModalContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      actionClick,
      onRequestClose
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-form-edit-modal__content"
  }, 'function' === typeof children && children({
    actionClick,
    onRequestClose
  }), 'function' !== typeof children && children))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FooterSlot, {
    fillProps: {
      updateClick,
      cancelClick
    }
  }, fills => Boolean(fills?.length) ? fills : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "jet-form-edit-modal__actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    onClick: updateClick,
    ...updateBtnProps
  }, updateBtnLabel), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSecondary: true,
    style: {
      margin: '0 0 0 10px'
    },
    onClick: cancelClick,
    ...cancelBtnProps
  }, cancelBtnLabel)))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionModal);

/***/ }),

/***/ "./package/action-modal/components/ActionModalFooterSlotFill.js":
/*!**********************************************************************!*\
  !*** ./package/action-modal/components/ActionModalFooterSlotFill.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createSlotFill
} = wp.components;
const ActionModalFooterSlotFill = createSlotFill('JFBActionModalFooter');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionModalFooterSlotFill);

/***/ }),

/***/ "./package/action-modal/context/ActionModalContext.js":
/*!************************************************************!*\
  !*** ./package/action-modal/context/ActionModalContext.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const ActionModalContext = createContext({
  actionClick: null,
  onRequestClose: () => {}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionModalContext);

/***/ }),

/***/ "./package/action-modal/hooks/useOnUpdateModal.js":
/*!********************************************************!*\
  !*** ./package/action-modal/hooks/useOnUpdateModal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_ActionModalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/ActionModalContext */ "./package/action-modal/context/ActionModalContext.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @param callback {Function}
 */
function useOnUpdateModal(callback) {
  const {
    actionClick,
    onRequestClose
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ActionModalContext__WEBPACK_IMPORTED_MODULE_0__["default"]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // update field attributes
    if (actionClick) {
      callback();
    }
    if (null !== actionClick) {
      onRequestClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionClick]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOnUpdateModal);

/***/ }),

/***/ "./package/block-conditions/components/BeforeConditionOptions.js":
/*!***********************************************************************!*\
  !*** ./package/block-conditions/components/BeforeConditionOptions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_1__);


const {
  SelectControl,
  withFilters
} = wp.components;
const {
  __
} = wp.i18n;
const BeforeConditionOptions = withFilters('jet.fb.block.conditions.options')(props => {
  const {
    currentItem,
    changeCurrentItem
  } = props;
  const formFields = (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_1__.useFields)({
    placeholder: '--'
  });
  switch (currentItem.operator) {
    case 'render_state':
      return null;
    default:
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
        label: __('Field', 'jet-form-builder'),
        labelPosition: "side",
        value: currentItem.field,
        options: formFields,
        onChange: newValue => {
          changeCurrentItem({
            field: newValue
          });
        }
      });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BeforeConditionOptions);

/***/ }),

/***/ "./package/block-conditions/components/ConditionItem.js":
/*!**************************************************************!*\
  !*** ./package/block-conditions/components/ConditionItem.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repeater_context_repeater_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repeater/context/repeater.item */ "./package/repeater/context/repeater.item.js");
/* harmony import */ var _blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/hooks/useUniqKey */ "./package/blocks/hooks/useUniqKey.js");
/* harmony import */ var _hooks_useBlockConditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useBlockConditions */ "./package/block-conditions/hooks/useBlockConditions.js");
/* harmony import */ var _ConditionOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConditionOptions */ "./package/block-conditions/components/ConditionOptions.js");
/* harmony import */ var _BeforeConditionOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BeforeConditionOptions */ "./package/block-conditions/components/BeforeConditionOptions.js");






const {
  useContext
} = wp.element;
const {
  SelectControl
} = wp.components;
const {
  __
} = wp.i18n;
function ConditionItem() {
  const {
    currentItem,
    changeCurrentItem
  } = useContext(_repeater_context_repeater_item__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const uniqKey = (0,_blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    operators
  } = (0,_hooks_useBlockConditions__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BeforeConditionOptions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentItem: currentItem,
    changeCurrentItem: changeCurrentItem
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    key: uniqKey('SelectControl-operator'),
    label: __('Operator', 'jet-form-builder'),
    labelPosition: "side",
    value: currentItem.operator,
    options: operators,
    onChange: newValue => changeCurrentItem({
      operator: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ConditionOptions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentItem: currentItem,
    changeCurrentItem: changeCurrentItem
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionItem);

/***/ }),

/***/ "./package/block-conditions/components/ConditionOptions.js":
/*!*****************************************************************!*\
  !*** ./package/block-conditions/components/ConditionOptions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RenderStateOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderStateOptions */ "./package/block-conditions/components/RenderStateOptions.js");
/* harmony import */ var _blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/hooks/useUniqKey */ "./package/blocks/hooks/useUniqKey.js");
/* harmony import */ var _macros_button_components_ClientSideMacros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../macros.button/components/ClientSideMacros */ "./package/macros.button/components/ClientSideMacros.js");
/* harmony import */ var _components_AdvancedModalControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AdvancedModalControl */ "./package/components/AdvancedModalControl.js");





const {
  TextareaControl,
  withFilters
} = wp.components;
const {
  __
} = wp.i18n;
const ConditionOptions = withFilters('jet.fb.block.conditions.options')(props => {
  const {
    currentItem,
    changeCurrentItem
  } = props;
  const uniqKey = (0,_blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_2__["default"])();
  if (['empty', 'not_empty'].includes(currentItem.operator)) {
    return null;
  }
  switch (currentItem.operator) {
    case 'render_state':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RenderStateOptions__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: uniqKey('RenderStateOptions'),
        changeCurrentItem: changeCurrentItem,
        currentItem: currentItem
      });
    default:
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_macros_button_components_ClientSideMacros__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AdvancedModalControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: currentItem.value,
        label: __('Value to compare', 'jet-form-builder'),
        onChangePreset: value => changeCurrentItem({
          value
        }),
        onChangeMacros: name => {
          var _currentItem$value;
          return changeCurrentItem({
            value: ((_currentItem$value = currentItem.value) !== null && _currentItem$value !== void 0 ? _currentItem$value : '') + name
          });
        }
      }, ({
        instanceId
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
        id: instanceId,
        value: currentItem.value,
        onChange: value => changeCurrentItem({
          value
        })
      })));
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionOptions);

/***/ }),

/***/ "./package/block-conditions/components/ConditionsRepeaterContextProvider.js":
/*!**********************************************************************************!*\
  !*** ./package/block-conditions/components/ConditionsRepeaterContextProvider.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repeater_context_repeater_custom_item_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repeater/context/repeater.custom.item.head */ "./package/repeater/context/repeater.custom.item.head.js");
/* harmony import */ var _repeater_context_repeater_custom_item_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repeater/context/repeater.custom.item.buttons */ "./package/repeater/context/repeater.custom.item.buttons.js");
/* harmony import */ var _helpers_humanReadableCondition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/humanReadableCondition */ "./package/block-conditions/helpers/humanReadableCondition.js");




const {
  __
} = wp.i18n;
function ConditionsRepeaterContextProvider({
  children
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_repeater_context_repeater_custom_item_head__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      isSupported: () => true,
      render: ({
        currentItem
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: 'repeater-item-title',
        dangerouslySetInnerHTML: {
          __html: currentItem?.or_operator ? __('OR', 'jet-form-builder') : (0,_helpers_humanReadableCondition__WEBPACK_IMPORTED_MODULE_3__["default"])(currentItem)
        }
      })
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_repeater_context_repeater_custom_item_buttons__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      edit: item => !item.or_operator
    }
  }, children));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionsRepeaterContextProvider);

/***/ }),

/***/ "./package/block-conditions/components/EditCustomRenderStates.js":
/*!***********************************************************************!*\
  !*** ./package/block-conditions/components/EditCustomRenderStates.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../action-modal/components/ActionModal */ "./package/action-modal/components/ActionModal.js");
/* harmony import */ var _action_modal_components_ActionModalFooterSlotFill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-modal/components/ActionModalFooterSlotFill */ "./package/action-modal/components/ActionModalFooterSlotFill.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);








const {
  rest_add_state: restAddState,
  rest_delete_state: restDeleteState
} = window.jetFormBlockConditions;
const {
  Fill: ModalFooterFill
} = _action_modal_components_ActionModalFooterSlotFill__WEBPACK_IMPORTED_MODULE_2__["default"];

// eslint-disable-next-line max-lines-per-function
const EditCustomRenderStates = ({
  setShowModal,
  changeCurrentItem,
  currentItem
}) => {
  var _currentItem$render_s;
  const [isLoading, setButtonLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const [isLoadingItem, setItemLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)({});
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)('');
  let current = [...((_currentItem$render_s = currentItem.render_state) !== null && _currentItem$render_s !== void 0 ? _currentItem$render_s : [])];
  const {
    addRenderState,
    deleteRenderStates
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useDispatch)('jet-forms/block-conditions');
  const customStates = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(select => select('jet-forms/block-conditions').getCustomRenderStates(),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isLoading, isLoadingItem]);
  const addState = () => {
    setButtonLoading(true);
    restAddState.data = {
      value
    };
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()(restAddState).then(response => {
      onSuccessAdd(response.state);
      setButtonLoading(false);
      setShowModal(false);
    }).catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
      setButtonLoading(false);
    });
  };
  const removeState = name => {
    restDeleteState.data = {
      list: [name]
    };
    setItemLoading(prev => ({
      ...prev,
      [name]: true
    }));
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()(restDeleteState).then(() => {
      onDelete(name);
      // eslint-disable-next-line no-console
    }).catch(console.error).finally(() => {
      setItemLoading(prev => ({
        ...prev,
        [name]: false
      }));
    });
  };
  const onSuccessAdd = state => {
    addRenderState(state);
    current.push(state.value);
    changeCurrentItem({
      render_state: current
    });
  };
  const onDelete = name => {
    deleteRenderStates(name);
    current = current.filter(item => item !== name);
    changeCurrentItem({
      render_state: current
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Register custom render state', 'jet-form-builder'),
    onRequestClose: () => setShowModal(false),
    classNames: ['width-45']
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'jet-fb with-button'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: value,
    onChange: newValue => setValue(newValue),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Set your custom state name', 'jet-form-builder')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: 'secondary',
    onClick: addState,
    disabled: isLoading,
    isBusy: isLoading,
    style: {
      padding: '7px 12px',
      height: 'unset'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Add', 'jet-form-builder'))), Boolean(customStates?.length) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", {
    className: 'jet-fb flex mb-05-em'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Manage your custom states:', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'jet-fb-buttons-flex'
  }, customStates.map(state => {
    var _isLoadingItem$state$;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: state.value,
      icon: 'no-alt',
      iconPosition: 'right',
      onClick: () => removeState(state.value),
      isBusy: (_isLoadingItem$state$ = isLoadingItem[state.value]) !== null && _isLoadingItem$state$ !== void 0 ? _isLoadingItem$state$ : false
    }, state.label);
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ModalFooterFill, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditCustomRenderStates);

/***/ }),

/***/ "./package/block-conditions/components/HumanReadableConditions.js":
/*!************************************************************************!*\
  !*** ./package/block-conditions/components/HumanReadableConditions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_humanReadableCondition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/humanReadableCondition */ "./package/block-conditions/helpers/humanReadableCondition.js");


const {
  __
} = wp.i18n;
const {
  Children,
  cloneElement
} = wp.element;
function HumanReadableConditions({
  conditions,
  showWarning = false
}) {
  let conditionsElements = [];
  let firstReadCondition = '';
  if (Boolean(conditions?.length)) {
    firstReadCondition = (0,_helpers_humanReadableCondition__WEBPACK_IMPORTED_MODULE_1__["default"])(conditions[0]);
    conditionsElements = conditions.filter(
    // Exclude first item
    (c, index) => 0 !== index).map((condition, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      key: index,
      "data-title": __('And', 'jet-form-builder') + ':',
      dangerouslySetInnerHTML: {
        __html: (0,_helpers_humanReadableCondition__WEBPACK_IMPORTED_MODULE_1__["default"])(condition)
      }
    }));
  }
  return firstReadCondition ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-title": __('If', 'jet-form-builder') + ':',
    dangerouslySetInnerHTML: {
      __html: firstReadCondition
    }
  }), Children.map(conditionsElements, cloneElement)) : showWarning && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-title": __('The condition is not fully configured.', 'jet-form-builder')
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HumanReadableConditions);

/***/ }),

/***/ "./package/block-conditions/components/RenderStateOptions.js":
/*!*******************************************************************!*\
  !*** ./package/block-conditions/components/RenderStateOptions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditCustomRenderStates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCustomRenderStates */ "./package/block-conditions/components/EditCustomRenderStates.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools */ "./package/tools.js");



const {
  Button,
  BaseControl,
  FormTokenField
} = wp.components;
const {
  __
} = wp.i18n;
const {
  useState
} = wp.element;
const {
  useSelect
} = wp.data;
const RenderStateOptions = ({
  currentItem,
  changeCurrentItem
}) => {
  const [showModal, setShowModal] = useState(false);
  const renderStates = useSelect(select => (0,_tools__WEBPACK_IMPORTED_MODULE_2__.column)(select('jet-forms/block-conditions').getRenderStates(), 'value'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [showModal]);
  // label={  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    label: __('Render State', 'jet-form-builder'),
    className: 'control-flex'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: 'jet-fb label mb-05-em'
  }, __('Add render state', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'jet-fb with-button clear-label'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormTokenField, {
    value: currentItem.render_state,
    suggestions: renderStates,
    onChange: val => changeCurrentItem({
      render_state: val
    }),
    tokenizeOnSpace: true,
    __experimentalExpandOnFocus: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    label: __('New render state', 'jet-form-builder'),
    variant: 'secondary',
    icon: 'plus-alt2',
    onClick: () => setShowModal(true)
  })))), showModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditCustomRenderStates__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setShowModal: setShowModal,
    changeCurrentItem: changeCurrentItem,
    currentItem: currentItem
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderStateOptions);

/***/ }),

/***/ "./package/block-conditions/helpers/humanReadableCondition.js":
/*!********************************************************************!*\
  !*** ./package/block-conditions/helpers/humanReadableCondition.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  select
} = wp.data;

/**
 * @param  condition
 * @return {boolean|string}
 */
function humanReadableCondition(condition) {
  return select('jet-forms/block-conditions').readCondition(condition);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (humanReadableCondition);

/***/ }),

/***/ "./package/block-conditions/hooks/useBlockConditions.js":
/*!**************************************************************!*\
  !*** ./package/block-conditions/hooks/useBlockConditions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useSelect
} = wp.data;

/**
 * @return {{functions, operators}}
 */
function useBlockConditions() {
  const [operators, functions] = useSelect(select => {
    return [select('jet-forms/block-conditions').getOperators(), select('jet-forms/block-conditions').getFunctions()];
  }, []);
  return {
    operators,
    functions
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBlockConditions);

/***/ }),

/***/ "./package/block-conditions/store/actions.js":
/*!***************************************************!*\
  !*** ./package/block-conditions/store/actions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/block-conditions/store/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  register(items) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].register,
      items
    };
  },
  addRenderState(item) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].addRenderState,
      item
    };
  },
  addRenderStates(items) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].addRenderStates,
      items
    };
  },
  deleteRenderStates(items) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].deleteRenderStates,
      items
    };
  }
});

/***/ }),

/***/ "./package/block-conditions/store/constants.js":
/*!*****************************************************!*\
  !*** ./package/block-conditions/store/constants.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  register: 'REGISTER',
  addRenderState: 'ADD_RENDER_STATE',
  addRenderStates: 'ADD_RENDER_STATES',
  deleteRenderStates: 'DELETE_RENDER_STATES'
});

/***/ }),

/***/ "./package/block-conditions/store/dispatchers.js":
/*!*******************************************************!*\
  !*** ./package/block-conditions/store/dispatchers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/block-conditions/store/constants.js");

const {
  doAction
} = wp.hooks;
const dispatchers = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].register](state, action) {
    const {
      operators,
      functions,
      render_states: renderStates
    } = action.items;
    state.operators = [...operators];
    state.functions = [...functions];
    state.renderStates = [...renderStates];
    doAction('jet.fb.change.blockConditions.renderState', state.renderStates);
    return state;
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].addRenderState](state, action) {
    state.renderStates.push(action.item);
    doAction('jet.fb.change.blockConditions.renderState', state.renderStates);
    return state;
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].addRenderStates](state, action) {
    for (const item of action.items) {
      state.renderStates.push(item);
    }
    doAction('jet.fb.change.blockConditions.renderState', state.renderStates);
    return state;
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].deleteRenderStates](state, action) {
    const items = Array.isArray(action.items) ? [...action.items] : [action.items];
    state.renderStates = state.renderStates.filter(({
      value
    }) => !items.includes(value));
    doAction('jet.fb.change.blockConditions.renderState', state.renderStates);
    return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...dispatchers
});

/***/ }),

/***/ "./package/block-conditions/store/index.js":
/*!*************************************************!*\
  !*** ./package/block-conditions/store/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./package/block-conditions/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./package/block-conditions/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./package/block-conditions/store/selectors.js");



const {
  createReduxStore
} = wp.data;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReduxStore('jet-forms/block-conditions', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./package/block-conditions/store/reducer.js":
/*!***************************************************!*\
  !*** ./package/block-conditions/store/reducer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchers */ "./package/block-conditions/store/dispatchers.js");
/* harmony import */ var _preset_helpers_humanReadablePreset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../preset/helpers/humanReadablePreset */ "./package/preset/helpers/humanReadablePreset.js");


const {
  select
} = wp.data;
const {
  __
} = wp.i18n;
const emptyCondition = function (condition) {
  const operatorOptions = select('jet-forms/block-conditions').getOperator(condition?.operator);
  if (!operatorOptions) {
    return '';
  }
  const field = condition?.field || '(no field)';
  return [`<code>${field}</code>`, operatorOptions.label].join(' ');
};
const DEFAULT_STATE = {
  functions: [],
  operators: [],
  conditionReaders: {
    default(condition) {
      const operatorOptions = select('jet-forms/block-conditions').getOperator(condition?.operator);
      if (!operatorOptions) {
        return '';
      }
      const field = condition?.field || '(no field)';
      const value = (0,_preset_helpers_humanReadablePreset__WEBPACK_IMPORTED_MODULE_1__["default"])(condition.value, 'b') || '(no value)';
      return [`<code>${field}</code>`, operatorOptions.label, `<code>${value}</code>`].join(' ');
    },
    empty: emptyCondition,
    not_empty: emptyCondition,
    render_state(condition) {
      var _condition$render_sta;
      const states = ((_condition$render_sta = condition?.render_state) !== null && _condition$render_sta !== void 0 ? _condition$render_sta : []).map(current => `<code>${current}</code>`);
      const label = 1 === states.length ? __('Is render state', 'jet-form-builder') : __('One of the render states', 'jet-form-builder');
      return [label, states.join(', ')].join(': ');
    }
  },
  renderStates: []
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = DEFAULT_STATE, action) {
  const callback = _dispatchers__WEBPACK_IMPORTED_MODULE_0__["default"][action?.type];
  if (callback) {
    return callback(state, action);
  }
  return state;
}

/***/ }),

/***/ "./package/block-conditions/store/selectors.js":
/*!*****************************************************!*\
  !*** ./package/block-conditions/store/selectors.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectors = {
  getFunctions(state) {
    return state.functions;
  },
  getOperators(state) {
    return state.operators;
  },
  getRenderStates(state) {
    return state.renderStates;
  },
  getSwitchableRenderStates(state) {
    return state.renderStates.filter(({
      is_custom: isCustom = false,
      can_be_switched: canBeSwitched = false
    }) => isCustom || canBeSwitched);
  },
  getCustomRenderStates(state) {
    return state.renderStates.filter(({
      is_custom: isCustom = false
    }) => isCustom);
  },
  getOperator(state, operator) {
    const index = state.operators.findIndex(({
      value
    }) => value === operator);
    if (-1 === index) {
      return false;
    }
    return state.operators[index];
  },
  readCondition(state, condition) {
    var _state$conditionReade;
    const {
      operator = ''
    } = condition;
    if (!operator) {
      return '';
    }

    /**
     * @type {Function}
     */
    const callback = (_state$conditionReade = state.conditionReaders[operator]) !== null && _state$conditionReade !== void 0 ? _state$conditionReade : false;
    if ('function' === typeof callback) {
      return callback(condition);
    }
    return state.conditionReaders.default(condition);
  },
  getFunction(state, funcType) {
    return state.functions.find(({
      value
    }) => value === funcType);
  },
  getFunctionDisplay(state, funcType) {
    return selectors.getFunction(state, funcType)?.display;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...selectors
});

/***/ }),

/***/ "./package/blocks/components/AdvancedFields.js":
/*!*****************************************************!*\
  !*** ./package/blocks/components/AdvancedFields.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlockPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockPlaceholder */ "./package/blocks/components/BlockPlaceholder.js");
/* harmony import */ var _BlockAddPrevButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockAddPrevButton */ "./package/blocks/components/BlockAddPrevButton.js");
/* harmony import */ var _BlockPrevButtonLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlockPrevButtonLabel */ "./package/blocks/components/BlockPrevButtonLabel.js");
/* harmony import */ var _BlockVisibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockVisibility */ "./package/blocks/components/BlockVisibility.js");
/* harmony import */ var _BlockClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlockClassName */ "./package/blocks/components/BlockClassName.js");






const {
  InspectorAdvancedControls
} = wp.blockEditor;
function AdvancedFields() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorAdvancedControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockAddPrevButton__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockPrevButtonLabel__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockVisibility__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockClassName__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedFields);

/***/ }),

/***/ "./package/blocks/components/AttributeHelp.js":
/*!****************************************************!*\
  !*** ./package/blocks/components/AttributeHelp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BaseHelp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BaseHelp */ "./package/components/BaseHelp.js");


const {
  useBlockEditContext
} = wp.blockEditor;
const {
  useSelect
} = wp.data;
const {
  __
} = wp.i18n;
function AttributeHelp({
  name = false,
  children = null
}) {
  const {
    name: blockName
  } = useBlockEditContext();
  const settings = useSelect(select => {
    var _block$attributes$nam;
    if (false === name) {
      return false;
    }
    const block = select('core/blocks').getBlockType(blockName);
    return (_block$attributes$nam = block.attributes[name]?.jfb) !== null && _block$attributes$nam !== void 0 ? _block$attributes$nam : false;
  }, [blockName, name]);
  if (!settings) {
    return Boolean(children) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BaseHelp__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "jet-fb mb-24"
    }, children);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BaseHelp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "jet-fb mb-24"
  }, children && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children, "\xA0"), settings?.shortcode && !settings.rich && !children && __('You can use shortcodes here.', 'jet-form-builder'), settings?.shortcode && !settings.rich && children && __('You can also use shortcodes here.', 'jet-form-builder'));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttributeHelp);

/***/ }),

/***/ "./package/blocks/components/BlockAddPrevButton.js":
/*!*********************************************************!*\
  !*** ./package/blocks/components/BlockAddPrevButton.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useIsHasAttribute */ "./package/hooks/useIsHasAttribute.js");



const {
  __
} = wp.i18n;
const {
  ToggleControl
} = wp.components;
function BlockAddPrevButton({
  label,
  help
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (!(0,_hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__["default"])('add_prev')) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: label !== null && label !== void 0 ? label : __('Add Prev Page Button', 'jet-form-builder'),
    help: help !== null && help !== void 0 ? help : __(`It is recommended to use the "Action Button" block with the "Go to Prev Page" type`, 'jet-form-builder'),
    checked: attributes.add_prev,
    onChange: val => setAttributes({
      add_prev: val
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockAddPrevButton);

/***/ }),

/***/ "./package/blocks/components/BlockAdvancedValue.js":
/*!*********************************************************!*\
  !*** ./package/blocks/components/BlockAdvancedValue.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlockDefaultValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockDefaultValue */ "./package/blocks/components/BlockDefaultValue.js");
/* harmony import */ var _dynamic_value_components_DynamicValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dynamic.value/components/DynamicValues */ "./package/dynamic.value/components/DynamicValues.js");



function BlockAdvancedValue({
  help,
  label,
  hasMacro = true,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockDefaultValue__WEBPACK_IMPORTED_MODULE_1__["default"], {
    help: help,
    label: label,
    hasMacro: hasMacro
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dynamic_value_components_DynamicValues__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockAdvancedValue);

/***/ }),

/***/ "./package/blocks/components/BlockClassName.js":
/*!*****************************************************!*\
  !*** ./package/blocks/components/BlockClassName.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");


const {
  __
} = wp.i18n;
const {
  TextControl
} = wp.components;
function BlockClassName({
  label,
  help
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: label !== null && label !== void 0 ? label : __("CSS Class Name", 'jet-form-builder'),
    value: attributes.class_name,
    help: help !== null && help !== void 0 ? help : '',
    onChange: val => setAttributes({
      class_name: val
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockClassName);

/***/ }),

/***/ "./package/blocks/components/BlockDefaultValue.js":
/*!********************************************************!*\
  !*** ./package/blocks/components/BlockDefaultValue.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _components_AdvancedInspectorControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AdvancedInspectorControl */ "./package/components/AdvancedInspectorControl.js");
/* harmony import */ var _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useIsHasAttribute */ "./package/hooks/useIsHasAttribute.js");
/* harmony import */ var _macros_button_components_ClientSideMacros__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../macros.button/components/ClientSideMacros */ "./package/macros.button/components/ClientSideMacros.js");
/* harmony import */ var _macros_button_hooks_useInsertMacro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../macros.button/hooks/useInsertMacro */ "./package/macros.button/hooks/useInsertMacro.js");
/* harmony import */ var _AttributeHelp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AttributeHelp */ "./package/blocks/components/AttributeHelp.js");
/* harmony import */ var _preset_context_ControlPresetRestrictionContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../preset/context/ControlPresetRestrictionContext */ "./package/preset/context/ControlPresetRestrictionContext.js");








const {
  __
} = wp.i18n;
const {
  TextControl
} = wp.components;
function BlockDefaultValue({
  label,
  help,
  hasMacro = true
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const [input, updateInput] = (0,_macros_button_hooks_useInsertMacro__WEBPACK_IMPORTED_MODULE_5__["default"])('default');
  if (!(0,_hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_3__["default"])('default')) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preset_context_ControlPresetRestrictionContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: {
      show: true
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_macros_button_components_ClientSideMacros__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AdvancedInspectorControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: attributes.default,
    label: label !== null && label !== void 0 ? label : __('Default Value', 'jet-form-builder'),
    onChangePreset: val => setAttributes({
      default: val
    }),
    onChangeMacros: hasMacro ? updateInput : false
  }, ({
    instanceId
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      ref: input,
      id: instanceId,
      value: attributes.default,
      className: "jet-fb m-unset",
      onChange: val => setAttributes({
        default: val
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AttributeHelp__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "default"
    }, help !== null && help !== void 0 ? help : ''));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockDefaultValue);

/***/ }),

/***/ "./package/blocks/components/BlockDescription.js":
/*!*******************************************************!*\
  !*** ./package/blocks/components/BlockDescription.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useIsHasAttribute */ "./package/hooks/useIsHasAttribute.js");
/* harmony import */ var _AttributeHelp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeHelp */ "./package/blocks/components/AttributeHelp.js");




const {
  __
} = wp.i18n;
const {
  TextControl
} = wp.components;
function BlockDescription({
  label,
  help
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (!(0,_hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__["default"])('desc')) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: label !== null && label !== void 0 ? label : __('Field Description', 'jet-form-builder'),
    value: attributes.desc,
    className: "jet-fb m-unset",
    onChange: desc => setAttributes({
      desc
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AttributeHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "desc"
  }, help !== null && help !== void 0 ? help : ''));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockDescription);

/***/ }),

/***/ "./package/blocks/components/BlockLabel.js":
/*!*************************************************!*\
  !*** ./package/blocks/components/BlockLabel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _helpers_ChangeNameByLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/ChangeNameByLabel */ "./package/blocks/helpers/ChangeNameByLabel.js");
/* harmony import */ var _AttributeHelp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeHelp */ "./package/blocks/components/AttributeHelp.js");




const {
  __
} = wp.i18n;
const {
  TextControl
} = wp.components;
let {
  __experimentalUseFocusOutside,
  useFocusOutside
} = wp.compose;
useFocusOutside = useFocusOutside || __experimentalUseFocusOutside;
function BlockLabel({
  label,
  help
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  function onBlurLabel() {
    (0,_helpers_ChangeNameByLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(attributes, setAttributes);
  }
  const ref = useFocusOutside(onBlurLabel);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: label !== null && label !== void 0 ? label : __('Field Label', 'jet-form-builder'),
    className: "jet-fb m-unset",
    value: attributes.label,
    onChange: val => setAttributes({
      label: val
    }),
    ...ref
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AttributeHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "label"
  }, help !== null && help !== void 0 ? help : ''));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockLabel);

/***/ }),

/***/ "./package/blocks/components/BlockName.js":
/*!************************************************!*\
  !*** ./package/blocks/components/BlockName.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useIsHasAttribute */ "./package/hooks/useIsHasAttribute.js");
/* harmony import */ var _hooks_useIsUniqueFieldName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useIsUniqueFieldName */ "./package/blocks/hooks/useIsUniqueFieldName.js");




const {
  __
} = wp.i18n;
const {
  TextControl,
  Icon,
  Flex,
  Tooltip
} = wp.components;
const {
  useInstanceId
} = wp.compose;
function BlockName({
  label,
  help
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    message
  } = (0,_hooks_useIsUniqueFieldName__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const instanceId = useInstanceId(BlockName, 'AdvancedInspectorControl');
  if (!(0,_hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__["default"])('name')) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, {
    align: 'center',
    justify: 'flex-start',
    style: {
      marginBottom: '8px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: instanceId,
    className: 'jet-fb label'
  }, label !== null && label !== void 0 ? label : __('Form field name', 'jet-form-builder')), !!message && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
    text: message,
    delay: 200,
    position: 'top center'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    icon: 'warning',
    style: {
      color: 'orange',
      cursor: 'help'
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    id: instanceId,
    value: attributes.name,
    help: help !== null && help !== void 0 ? help : __('Should contain only Latin letters, numbers, `-` or `_` chars, no spaces only lower case', 'jet-form-builder'),
    onChange: name => setAttributes({
      name
    })
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockName);

/***/ }),

/***/ "./package/blocks/components/BlockPlaceholder.js":
/*!*******************************************************!*\
  !*** ./package/blocks/components/BlockPlaceholder.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useIsHasAttribute */ "./package/hooks/useIsHasAttribute.js");



const {
  __
} = wp.i18n;
const {
  TextControl
} = wp.components;
function BlockPlaceholder({
  label,
  help
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (!(0,_hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__["default"])('placeholder')) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: label !== null && label !== void 0 ? label : __('Placeholder', 'jet-form-builder'),
    value: attributes.placeholder,
    help: help !== null && help !== void 0 ? help : '',
    onChange: placeholder => setAttributes({
      placeholder
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockPlaceholder);

/***/ }),

/***/ "./package/blocks/components/BlockPrevButtonLabel.js":
/*!***********************************************************!*\
  !*** ./package/blocks/components/BlockPrevButtonLabel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _AttributeHelp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AttributeHelp */ "./package/blocks/components/AttributeHelp.js");



const {
  __
} = wp.i18n;
const {
  TextControl
} = wp.components;
function BlockPrevButtonLabel({
  label,
  help
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (!attributes.add_prev) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: label !== null && label !== void 0 ? label : __('Prev Page Button Label', 'jet-form-builder'),
    value: attributes.prev_label,
    className: "jet-fb m-unset",
    onChange: val => setAttributes({
      prev_label: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AttributeHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "prev_label"
  }, help !== null && help !== void 0 ? help : ''));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockPrevButtonLabel);

/***/ }),

/***/ "./package/blocks/components/BlockRequired.js":
/*!****************************************************!*\
  !*** ./package/blocks/components/BlockRequired.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useIsHasAttribute */ "./package/hooks/useIsHasAttribute.js");



const {
  __
} = wp.i18n;
const {
  ToolbarButton
} = wp.components;
const {
  BlockControls
} = wp.blockEditor;
const {
  SVG,
  Path
} = wp.primitives;
function BlockRequired() {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (!(0,_hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__["default"])('required')) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, {
    group: "block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarButton, {
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24px",
      height: "24px",
      viewBox: "0 0 24 24",
      fill: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
      d: "M12 4L12 20",
      stroke: "currentcolor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
      d: "M17.3137 6.00024L6.00001 17.314",
      stroke: "currentcolor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
      d: "M20 12L4 12",
      stroke: "currentcolor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
      d: "M17.3137 17.3137L6.00001 6.00001",
      stroke: "currentcolor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })),
    title: attributes.required ? __('Click to make this field optional', 'jet-form-builder') : __('Click to make this field required', 'jet-form-builder'),
    onClick: () => setAttributes({
      required: !attributes.required
    }),
    isActive: attributes.required
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockRequired);

/***/ }),

/***/ "./package/blocks/components/BlockVisibility.js":
/*!******************************************************!*\
  !*** ./package/blocks/components/BlockVisibility.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useIsHasAttribute */ "./package/hooks/useIsHasAttribute.js");



const {
  __
} = wp.i18n;
const {
  SelectControl
} = wp.components;
function BlockVisibility({
  label,
  help
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (!(0,_hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_2__["default"])('visibility')) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    options: [{
      "value": "all",
      "label": __("For all", 'jet-form-builder')
    }, {
      "value": "logged_id",
      "label": __("Only for logged in users", 'jet-form-builder')
    }, {
      "value": "not_logged_in",
      "label": __("Only for NOT-logged in users", 'jet-form-builder')
    }],
    label: label !== null && label !== void 0 ? label : __("Field Visibility", 'jet-form-builder'),
    help: help !== null && help !== void 0 ? help : '',
    value: attributes.visibility,
    onChange: visibility => setAttributes({
      visibility
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockVisibility);

/***/ }),

/***/ "./package/blocks/components/FieldControl.js":
/*!***************************************************!*\
  !*** ./package/blocks/components/FieldControl.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_ControlsSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/ControlsSettings */ "./package/blocks/helpers/ControlsSettings.js");


const {
  useBlockProps
} = wp.blockEditor;
const {
  TextControl,
  SelectControl,
  ToggleControl,
  BaseControl,
  __experimentalNumberControl
} = wp.components;
let {
  NumberControl
} = wp.components;
if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

// eslint-disable-next-line max-lines-per-function
function useControls({
  type,
  attributes,
  attrsSettings = {}
}) {
  const blockProps = useBlockProps();
  const blockName = blockProps['data-type'];
  const controls = (0,_helpers_ControlsSettings__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (!controls[type]) {
    return [];
  }
  const currentControl = controls[type];

  // eslint-disable-next-line max-lines-per-function
  const isValidCondition = attr => {
    if (!attr.condition) {
      return true;
    }
    if (blockName && attr.condition.blockName) {
      if ('string' === typeof attr.condition.blockName && blockName !== attr.condition.blockName) {
        return false;
      }
      if ('object' === typeof attr.condition.blockName && attr.condition.blockName.length && !attr.condition.blockName.includes(blockName)) {
        return false;
      }
    }
    const objectNotMatch = function () {
      if ('object' !== typeof attr.condition.attr) {
        return true;
      }
      const {
        operator = 'and',
        items = {}
      } = attr.condition.attr;
      if ('or' === operator.toLowerCase()) {
        for (const attrToCompare in items) {
          const valueCompare = items[attrToCompare];

          // eslint-disable-next-line max-depth
          if (valueCompare === attributes[attrToCompare]) {
            return true;
          }
        }
      }
      if ('and' === operator.toLowerCase()) {
        return function () {
          for (const attrToCompare in items) {
            if (items[attrToCompare] !== attributes[attrToCompare]) {
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
  return currentControl.attrs.filter(({
    attrName,
    label,
    ...attr
  }) => {
    const isRegisterAttribute = attrName in attributes;
    const validCondition = isValidCondition(attr);
    const isHidden = attrName in attrsSettings && 'show' in attrsSettings[attrName] && false === attrsSettings[attrName].show;
    return isRegisterAttribute && validCondition && !isHidden;
  });
}

/**
 * @deprecated 3.0.0
 *
 * @param  props
 * @return {unknown[]}
 * @class
 */
// eslint-disable-next-line max-lines-per-function
function FieldControl(props) {
  const {
    setAttributes,
    attributes
  } = props;
  const fieldControls = useControls(props);
  const onChangeValue = (value, key) => {
    setAttributes({
      [key]: value
    });
  };

  // eslint-disable-next-line max-lines-per-function
  return fieldControls.map(({
    help = '',
    attrName,
    label,
    ...attr
  }) => {
    switch (attr.type) {
      case 'text':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
          key: `${attr.type}-${attrName}-TextControl`,
          label: label,
          help: help,
          value: attributes[attrName],
          onChange: newVal => onChangeValue(newVal, attrName)
        });
      case 'select':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
          key: `${attr.type}-${attrName}-SelectControl`,
          label: label,
          help: help,
          value: attributes[attrName],
          options: attr.options,
          onChange: newVal => {
            onChangeValue(newVal, attrName);
          }
        });
      case 'toggle':
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
          key: `${attr.type}-${attrName}-ToggleControl`,
          label: label,
          help: help,
          checked: attributes[attrName],
          onChange: newVal => {
            onChangeValue(newVal, attrName);
          }
        });
      case 'number':
        /* eslint-disable-next-line
         @wordpress/no-base-control-with-label-without-id
         */
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
          key: `${attr.type}-${attrName}-BaseControl`,
          label: label
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NumberControl, {
          key: `${attr.type}-${attrName}-NumberControl`,
          value: attributes[attrName],
          onChange: newVal => {
            onChangeValue(Number(newVal), attrName);
          }
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
          className: 'components-base-control__help',
          style: {
            color: 'rgb(117, 117, 117)'
          }
        }, help));
      default:
        return null;
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldControl);

/***/ }),

/***/ "./package/blocks/components/FieldSettingsWrapper.js":
/*!***********************************************************!*\
  !*** ./package/blocks/components/FieldSettingsWrapper.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  PanelBody
} = wp.components;
const {
  applyFilters
} = wp.hooks;
const {
  useBlockProps
} = wp.blockEditor;

/**
 * @param  props
 * @return {boolean|JSX.Element}
 * @class
 */
function FieldSettingsWrapper(props) {
  const {
    title,
    children
  } = props;
  const blockProps = useBlockProps();
  const blockName = blockProps['data-type'].replace('/', '-');
  const CustomSettings = applyFilters(`jet.fb.render.settings.${blockName}`, null);
  return (children || CustomSettings) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: title || __('Field', 'jet-form-builder')
  }, children, CustomSettings);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldSettingsWrapper);

/***/ }),

/***/ "./package/blocks/components/FieldWrapper.js":
/*!***************************************************!*\
  !*** ./package/blocks/components/FieldWrapper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools */ "./package/tools.js");
/* harmony import */ var _hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useSelectPostMeta */ "./package/hooks/useSelectPostMeta.js");
/* harmony import */ var _helpers_ChangeNameByLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/ChangeNameByLabel */ "./package/blocks/helpers/ChangeNameByLabel.js");
/* harmony import */ var _hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useUniqKey */ "./package/blocks/hooks/useUniqKey.js");





const {
  BaseControl
} = wp.components;
const {
  RichText
} = wp.blockEditor;
let {
  __experimentalUseFocusOutside,
  useFocusOutside
} = wp.compose;
useFocusOutside = useFocusOutside || __experimentalUseFocusOutside;
const {
  __
} = wp.i18n;
function RichDescription(content) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", {
    style: {
      whiteSpace: 'nowrap',
      padding: '0.2em 0.8em 0 0',
      color: '#8e8a8a'
    }
  }, content);
}

// eslint-disable-next-line max-lines-per-function
function FieldWrapper(props) {
  const {
    attributes,
    children,
    wrapClasses = [],
    valueIfEmptyLabel = '',
    setAttributes,
    childrenPosition = 'between'
  } = props;
  const uniqKey = (0,_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const args = (0,_hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_2__["default"])('_jf_args');
  function onBlurLabel() {
    (0,_helpers_ChangeNameByLabel__WEBPACK_IMPORTED_MODULE_3__["default"])(attributes, setAttributes);
  }
  const ref = useFocusOutside(onBlurLabel);
  function renderLabel() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl.VisualLabel, null, RichDescription(__('input label:', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jet-form-builder__label"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: uniqKey('rich-label'),
      placeholder: "Label...",
      allowedFormats: [],
      value: attributes.label ? attributes.label : valueIfEmptyLabel,
      onChange: newLabel => setAttributes({
        label: newLabel
      }),
      isSelected: false,
      ...ref
    }), attributes.required && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'jet-form-builder__required'
    }, args.required_mark ? args.required_mark : '*')));
  }
  function renderDescription() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jet-form-builder__desc--wrapper"
    }, RichDescription(__('input description:', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
      key: 'custom_help_description',
      className: 'jet-form-builder__desc'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__help"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: uniqKey('rich-description'),
      tagName: "small",
      placeholder: "Description...",
      allowedFormats: [],
      value: attributes.desc,
      onChange: desc => setAttributes({
        desc
      }),
      style: {
        marginTop: '0px'
      }
    }))));
  }
  if ('row' === args.fields_layout) {
    wrapClasses.push('jet-form-builder-row__flex');
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    key: uniqKey('placeHolder_block'),
    className: (0,_tools__WEBPACK_IMPORTED_MODULE_1__.classnames)('jet-form-builder__field-wrap', 'jet-form-builder-row', wrapClasses)
  }, 'row' !== args.fields_layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 'top' === childrenPosition && children, renderLabel(), 'between' === childrenPosition && children, renderDescription(), 'bottom' === childrenPosition && children), 'row' === args.fields_layout && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-form-builder-row__flex--label"
  }, renderLabel(), renderDescription()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-form-builder-row__flex--content"
  }, children)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldWrapper);

/***/ }),

/***/ "./package/blocks/components/GeneralFields.js":
/*!****************************************************!*\
  !*** ./package/blocks/components/GeneralFields.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlockLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockLabel */ "./package/blocks/components/BlockLabel.js");
/* harmony import */ var _BlockName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockName */ "./package/blocks/components/BlockName.js");
/* harmony import */ var _BlockDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlockDescription */ "./package/blocks/components/BlockDescription.js");
/* harmony import */ var _BlockDefaultValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockDefaultValue */ "./package/blocks/components/BlockDefaultValue.js");





const {
  PanelBody
} = wp.components;
const {
  __
} = wp.i18n;
function GeneralFields({
  hasMacro = true
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('General', 'jet-form-builder'),
    key: 'jet-form-general-fields'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockLabel__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockName__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockDescription__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockDefaultValue__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hasMacro: hasMacro
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralFields);

/***/ }),

/***/ "./package/blocks/components/ScopedAttributesProvider.js":
/*!***************************************************************!*\
  !*** ./package/blocks/components/ScopedAttributesProvider.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _context_ScopedAttributesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ScopedAttributesContext */ "./package/blocks/context/ScopedAttributesContext.js");



const {
  useState
} = wp.element;
function ScopedAttributesProvider({
  children
}) {
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const [current, setCurrent] = useState(() => attributes);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_ScopedAttributesContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      realAttributes: attributes,
      setRealAttributes: setAttributes,
      attributes: current,
      setAttributes: setCurrent
    }
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScopedAttributesProvider);

/***/ }),

/***/ "./package/blocks/components/SelectVariations.js":
/*!*******************************************************!*\
  !*** ./package/blocks/components/SelectVariations.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");


const {
  useSelect
} = wp.data;
const {
  CustomSelectControl,
  Icon
} = wp.components;
const {
  useBlockEditContext
} = wp.blockEditor;
function SelectVariations({
  value
}) {
  const {
    name
  } = useBlockEditContext();
  const [, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    variations,
    rawVariations
  } = useSelect(select => {
    const {
      getBlockVariations
    } = select('core/blocks');
    const items = getBlockVariations(name, 'block');
    const options = [];
    const variationsMap = {};
    for (const item of items) {
      options.push({
        key: item.name,
        name: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: 'jet-fb flex gap-1em ai-center'
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
          icon: item.icon
        }), item.title)
      });
      variationsMap[item.name] = item;
    }
    return {
      variations: options,
      rawVariations: variationsMap
    };
  }, [name]);
  if (!variations.length) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomSelectControl, {
    __nextUnconstrainedWidth: true,
    hideLabelFromVision: true,
    options: variations,
    size: '__unstable-large',
    onChange: ({
      selectedItem
    }) => setAttributes({
      ...rawVariations[selectedItem.key].attributes
    }),
    value: variations.find(({
      key
    }) => key === value)
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectVariations);

/***/ }),

/***/ "./package/blocks/components/ToggleGroupVariations.js":
/*!************************************************************!*\
  !*** ./package/blocks/components/ToggleGroupVariations.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");


const {
  Children,
  cloneElement,
  useContext
} = wp.element;
const {
  useSelect
} = wp.data;
const {
  useBlockEditContext
} = wp.blockEditor;
let {
  __experimentalToggleGroupControl,
  __experimentalToggleGroupControlOptionIcon,
  __experimentalToolbarContext,
  ToggleGroupControl,
  ToggleGroupControlOptionIcon,
  ToolbarItem,
  ToolbarGroup,
  ToolbarContext
} = wp.components;
ToggleGroupControl = ToggleGroupControl || __experimentalToggleGroupControl;
ToggleGroupControlOptionIcon = ToggleGroupControlOptionIcon || __experimentalToggleGroupControlOptionIcon;
ToolbarContext = ToolbarContext || __experimentalToolbarContext;

// eslint-disable-next-line max-lines-per-function
function ToggleGroupVariationsBase({
  value
}) {
  const {
    name
  } = useBlockEditContext();
  const toolbarState = useContext(ToolbarContext);
  const [, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    variations,
    components
  } = useSelect(select => {
    const {
      getBlockVariations
    } = select('core/blocks');
    const items = getBlockVariations(name, 'block');
    return {
      variations: items,
      components: items.map(current => {
        var _toolbarState$current;
        return ((_toolbarState$current = toolbarState?.currentId) !== null && _toolbarState$current !== void 0 ? _toolbarState$current : toolbarState?.baseId) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarItem, {
          key: current.name,
          as: ToggleGroupControlOptionIcon,
          value: current.name,
          label: current.title,
          icon: current.icon
        }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupControlOptionIcon, {
          key: current.name,
          value: current.name,
          label: current.title,
          icon: current.icon
        });
      })
    };
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  if (!variations.length) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jfb-variations-toolbar-toggle"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupControl, {
    hideLabelFromVision: true,
    onChange: varName => setAttributes({
      ...variations.find(({
        name: variationName
      }) => variationName === varName).attributes
    }),
    value: value,
    isBlock: true
  }, Children.map(components, cloneElement)));
}
function ToggleGroupVariations(props) {
  const toolbarState = useContext(ToolbarContext);
  if (!toolbarState?.currentId) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupVariationsBase, {
      ...props
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarGroup, {
    className: 'jet-fb toggle-toolbar-group'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupVariationsBase, {
    ...props
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleGroupVariations);

/***/ }),

/***/ "./package/blocks/components/ToolBarDefault.js":
/*!*****************************************************!*\
  !*** ./package/blocks/components/ToolBarDefault.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useUniqKey */ "./package/blocks/hooks/useUniqKey.js");
/* harmony import */ var _hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _hooks_useSuccessNotice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSuccessNotice */ "./package/hooks/useSuccessNotice.js");




const {
  BlockControls
} = wp.blockEditor;
const {
  useCopyToClipboard
} = wp.compose;
const {
  TextControl,
  ToolbarGroup,
  ToolbarItem,
  ToolbarButton
} = wp.components;
function ToolBarDefault({
  children = null
}) {
  const uniqKey = (0,_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const [attributes, setAttributes] = (0,_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const displayNotice = (0,_hooks_useSuccessNotice__WEBPACK_IMPORTED_MODULE_3__["default"])(`Copied "${attributes.name}" to clipboard.`);
  const copyRef = useCopyToClipboard(attributes.name, () => displayNotice(true));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, {
    key: uniqKey('ToolBarFields-BlockControls')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarGroup, {
    key: uniqKey('ToolBarFields-ToolbarGroup'),
    className: "jet-fb-block-toolbar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarButton, {
    isSmall: true,
    icon: "admin-page",
    showTooltip: true,
    shortcut: "Copy name",
    ref: copyRef
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarItem, {
    as: TextControl,
    value: attributes.name,
    onChange: name => setAttributes({
      name
    })
  }), children));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolBarDefault);

/***/ }),

/***/ "./package/blocks/components/ToolBarFields.js":
/*!****************************************************!*\
  !*** ./package/blocks/components/ToolBarFields.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolBarDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolBarDefault */ "./package/blocks/components/ToolBarDefault.js");
/* harmony import */ var _BlockRequired__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockRequired */ "./package/blocks/components/BlockRequired.js");



function ToolBarFields({
  children = null
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ToolBarDefault__WEBPACK_IMPORTED_MODULE_1__["default"], null, children), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockRequired__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolBarFields);

/***/ }),

/***/ "./package/blocks/context/ScopedAttributesContext.js":
/*!***********************************************************!*\
  !*** ./package/blocks/context/ScopedAttributesContext.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const ScopedAttributesContext = createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScopedAttributesContext);

/***/ }),

/***/ "./package/blocks/helpers/ChangeNameByLabel.js":
/*!*****************************************************!*\
  !*** ./package/blocks/helpers/ChangeNameByLabel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools */ "./package/tools.js");

function ChangeNameByLabel(attributes, setAttributes) {
  if (1 >= attributes.label.length || attributes.name && 'field_name' !== attributes.name) {
    return;
  }
  setAttributes({
    name: (0,_tools__WEBPACK_IMPORTED_MODULE_0__.getConvertedName)(attributes.label)
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeNameByLabel);

/***/ }),

/***/ "./package/blocks/helpers/ControlsSettings.js":
/*!****************************************************!*\
  !*** ./package/blocks/helpers/ControlsSettings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  applyFilters
} = wp.hooks;
const ControlsSettings = () => applyFilters('jet.fb.register.fields.controls', {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlsSettings);

/***/ }),

/***/ "./package/blocks/helpers/appendField.js":
/*!***********************************************!*\
  !*** ./package/blocks/helpers/appendField.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  addFilter
} = wp.hooks;
function appendField(callback, fieldNames = []) {
  addFilter('jet.fb.register.fields', 'jet-form-builder', blocks => {
    return blocks.map(block => {
      if (fieldNames.length && !fieldNames.includes(block.name)) {
        return block;
      }
      return callback(block);
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendField);

/***/ }),

/***/ "./package/blocks/helpers/blocksRecursiveIterator.js":
/*!***********************************************************!*\
  !*** ./package/blocks/helpers/blocksRecursiveIterator.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  select
} = wp.data;
function blocksRecursiveIterator(blockParserFunc) {
  const blocksRecursiveInnerIterator = (blocks, parent = null) => {
    blocks = blocks || select('core/block-editor').getBlocks();
    blocks.forEach(block => {
      blockParserFunc(block, parent);
      if (block.innerBlocks.length) {
        const currentParent = 'jet-forms/repeater-field' === block.name ? block : parent;
        blocksRecursiveInnerIterator(block.innerBlocks, currentParent);
        return;
      }
      if ('core/block' !== block.name) {
        return;
      }

      /**
       * Hardcode the receipt of internal blocks "Reusable block".
       * This is the only way so far.
       *
       * Added after major refactoring
       * @since 3.0.4
       *
       * Introduced
       * @since 2.1.1
       *
       * @type {{clientId: string, innerBlocks: Array}[]}
       */
      let innerReusable = select('core/block-editor')?.__unstableGetClientIdsTree?.(block.clientId);
      if (!innerReusable?.length) {
        return;
      }
      const innerReusableIds = innerReusable.map(({
        clientId
      }) => clientId);

      /**
       * We update this variable because `__unstableGetClientIdsTree`
       * returns insufficient information about the block.
       * Namely, the `name` property is missing
       */
      innerReusable = select('core/block-editor').getBlocksByClientId(innerReusableIds);
      blocksRecursiveInnerIterator(innerReusable);
    });
  };
  blocksRecursiveInnerIterator();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blocksRecursiveIterator);

/***/ }),

/***/ "./package/blocks/helpers/getAvailableFields.js":
/*!******************************************************!*\
  !*** ./package/blocks/helpers/getAvailableFields.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getFormFieldsBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFormFieldsBlocks */ "./package/blocks/helpers/getFormFieldsBlocks.js");

function getAvailableFields(exclude = [], context = 'default') {
  const fields = [];
  const blocks = (0,_getFormFieldsBlocks__WEBPACK_IMPORTED_MODULE_0__["default"])(exclude, false, false, context);
  if (blocks) {
    blocks.forEach(item => fields.push(item.name));
  }
  return fields;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAvailableFields);

/***/ }),

/***/ "./package/blocks/helpers/getAvailableFieldsString.js":
/*!************************************************************!*\
  !*** ./package/blocks/helpers/getAvailableFieldsString.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getAvailableFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAvailableFields */ "./package/blocks/helpers/getAvailableFields.js");

const {
  __
} = wp.i18n;
function getAvailableFieldsString(blockName) {
  const fields = (0,_getAvailableFields__WEBPACK_IMPORTED_MODULE_0__["default"])([blockName]);
  const fieldsString = [];
  fields.forEach(function (item) {
    fieldsString.push('%FIELD::' + item + '%');
  });
  return __('Available fields: ', 'jet-form-builder') + fieldsString.join(', ');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAvailableFieldsString);

/***/ }),

/***/ "./package/blocks/helpers/getBlockControls.js":
/*!****************************************************!*\
  !*** ./package/blocks/helpers/getBlockControls.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ControlsSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlsSettings */ "./package/blocks/helpers/ControlsSettings.js");

function getBlockControls(type = 'all') {
  if (!type) {
    return false;
  }
  const controls = (0,_ControlsSettings__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if ('all' === type) {
    return controls;
  }
  if (controls[type] && controls[type].attrs && Array.isArray(controls[type].attrs) && 0 < controls[type].attrs.length) {
    return controls[type].attrs;
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBlockControls);

/***/ }),

/***/ "./package/blocks/helpers/getBlocksByName.js":
/*!***************************************************!*\
  !*** ./package/blocks/helpers/getBlocksByName.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blocksRecursiveIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocksRecursiveIterator */ "./package/blocks/helpers/blocksRecursiveIterator.js");

function getBlocksByName(blockNames) {
  const blocks = [];
  (0,_blocksRecursiveIterator__WEBPACK_IMPORTED_MODULE_0__["default"])(block => {
    if (!blockNames.includes(block.name)) {
      return;
    }
    blocks.push(block);
  });
  return blocks;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBlocksByName);

/***/ }),

/***/ "./package/blocks/helpers/getCurrentInnerBlocks.js":
/*!*********************************************************!*\
  !*** ./package/blocks/helpers/getCurrentInnerBlocks.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getInnerBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInnerBlocks */ "./package/blocks/helpers/getInnerBlocks.js");

const {
  useBlockProps
} = wp.blockEditor;
function getCurrentInnerBlocks() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    'data-block': dataBlock
  } = useBlockProps();
  return (0,_getInnerBlocks__WEBPACK_IMPORTED_MODULE_0__["default"])(dataBlock);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentInnerBlocks);

/***/ }),

/***/ "./package/blocks/helpers/getFieldsWithoutCurrent.js":
/*!***********************************************************!*\
  !*** ./package/blocks/helpers/getFieldsWithoutCurrent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blocksRecursiveIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocksRecursiveIterator */ "./package/blocks/helpers/blocksRecursiveIterator.js");

const {
  applyFilters
} = wp.hooks;
const {
  select
} = wp.data;
function getFieldsWithoutCurrent(placeholder = false, suppressFilter = false, context = 'default') {
  const skipFields = ['submit', 'form-break', 'heading', 'group-break', 'conditional'];
  let formFields = [];
  const current = wp.data.select('core/block-editor').getSelectedBlock();
  (0,_blocksRecursiveIterator__WEBPACK_IMPORTED_MODULE_0__["default"])(block => {
    if (block.name.includes('jet-forms/') && current?.clientId !== block.clientId && !skipFields.find(field => block.name.includes(field))) {
      const blockType = select('core/blocks').getBlockType(block.name);
      let {
        fields: newFields = []
      } = blockType.jfbResolveBlock.call(block, context);
      if (blockType.hasOwnProperty('jfbGetFields')) {
        newFields = blockType.jfbGetFields.call(block, context);
      }
      formFields.push(...newFields.filter(formField => !formFields.some(({
        value
      }) => value === formField.value)));
    }
  });
  formFields = placeholder ? [{
    value: '',
    label: placeholder
  }, ...formFields] : formFields;
  return suppressFilter ? formFields : applyFilters('jet.fb.getFormFieldsBlocks', formFields, context);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFieldsWithoutCurrent);

/***/ }),

/***/ "./package/blocks/helpers/getFormFieldsBlocks.js":
/*!*******************************************************!*\
  !*** ./package/blocks/helpers/getFormFieldsBlocks.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blocksRecursiveIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocksRecursiveIterator */ "./package/blocks/helpers/blocksRecursiveIterator.js");

const {
  applyFilters
} = wp.hooks;
const {
  select
} = wp.data;
function getFormFieldsBlocks(exclude = [], placeholder = false, suppressFilter = false, context = 'default') {
  let formFields = [];
  const skipFields = ['submit', 'form-break', 'heading', 'group-break', 'conditional', ...exclude];
  (0,_blocksRecursiveIterator__WEBPACK_IMPORTED_MODULE_0__["default"])(block => {
    if (block.name.includes('jet-forms/') && !skipFields.find(field => block.name.includes(field))) {
      const blockType = select('core/blocks').getBlockType(block.name);
      let {
        fields: newFields = []
      } = blockType.jfbResolveBlock.call(block, context);
      if (blockType.hasOwnProperty('jfbGetFields')) {
        newFields = blockType.jfbGetFields.call(block, context);
      }
      formFields.push(...newFields.filter(current => !formFields.some(({
        value
      }) => value === current.value)));
    }
  });
  formFields = placeholder ? [{
    value: '',
    label: placeholder
  }, ...formFields] : formFields;
  return suppressFilter ? formFields : applyFilters('jet.fb.getFormFieldsBlocks', formFields, context);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFormFieldsBlocks);

/***/ }),

/***/ "./package/blocks/helpers/getInnerBlocks.js":
/*!**************************************************!*\
  !*** ./package/blocks/helpers/getInnerBlocks.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getInnerBlocks(clientId) {
  const block = wp.data.select('core/block-editor').getBlock(clientId);
  return block ? block.innerBlocks : [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInnerBlocks);

/***/ }),

/***/ "./package/blocks/helpers/getSupport.js":
/*!**********************************************!*\
  !*** ./package/blocks/helpers/getSupport.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  get
} = window._;

/**
 * @param blockSettings {Object} from block.json
 * @param supportsPath  {String|Array}
 */
function getSupport(blockSettings, supportsPath) {
  if (!Array.isArray(supportsPath)) {
    supportsPath = [supportsPath];
  }
  return get(blockSettings, ['supports', ...supportsPath], false);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSupport);

/***/ }),

/***/ "./package/blocks/hooks/useBlockAttributes.js":
/*!****************************************************!*\
  !*** ./package/blocks/hooks/useBlockAttributes.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


function useBlockAttributes(otherClientId = null) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockEditContext)();
  let {
    clientId
  } = blockProps;
  if (otherClientId) {
    clientId = otherClientId;
  }
  const attributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(selectStore => selectStore('core/block-editor').getBlockAttributes(clientId), [clientId]);
  const {
    updateBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('core/block-editor');

  /**
   * @param props {Object|Function}
   */
  const updateAttributes = props => {
    props = 'object' === typeof props ? props : props(attributes);
    props = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)('jet-forms/fields').getSanitizedAttributes(props, blockProps);
    updateBlock(clientId, {
      attributes: props
    });
  };
  return [attributes, updateAttributes];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBlockAttributes);

/***/ }),

/***/ "./package/blocks/hooks/useIsAdvancedValidation.js":
/*!*********************************************************!*\
  !*** ./package/blocks/hooks/useIsAdvancedValidation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useSelectPostMeta */ "./package/hooks/useSelectPostMeta.js");
/* harmony import */ var _useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");


function useIsAdvancedValidation() {
  const {
    type
  } = (0,_hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_0__["default"])('_jf_validation');
  const [attributes] = (0,_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (attributes.validation?.type) {
    return 'advanced' === attributes.validation?.type;
  }
  return 'advanced' === type;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsAdvancedValidation);

/***/ }),

/***/ "./package/blocks/hooks/useIsUniqueFieldName.js":
/*!******************************************************!*\
  !*** ./package/blocks/hooks/useIsUniqueFieldName.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const actionTypesMap = {};
for (const {
  id,
  name
} of window.jetFormActionTypes) {
  actionTypesMap[id] = name;
}

// eslint-disable-next-line max-lines-per-function
function useIsUniqueFieldName() {
  const {
    clientId
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockEditContext)();
  const actionFields = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_0__.useRequestFields)({
    returnOnEmptyCurrentAction: false
  });
  const {
    inFormFields,
    hasParent,
    fieldNames
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    var _currentBlock$fields$;
    const currentBlock = select('jet-forms/fields').getBlockById(clientId);
    return {
      hasParent: !!currentBlock?.parentBlock,
      fieldNames: (_currentBlock$fields$ = currentBlock?.fields?.map?.(({
        value
      }) => value)) !== null && _currentBlock$fields$ !== void 0 ? _currentBlock$fields$ : [],
      inFormFields: select('jet-forms/fields').isUniqueName(clientId)
    };
  }, [clientId]);
  if (!inFormFields) {
    return {
      error: 'not_unique_in_fields',
      message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('The form field name must be unique. Please change it', 'jet-form-builder')
    };
  }
  if (hasParent) {
    return {};
  }
  const computed = actionFields.find(({
    value
  }) => fieldNames.includes(value));
  if (!computed) {
    return {};
  }
  return {
    error: 'not_unique_in_actions',
    message: computed?.from ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
    // translators: %s - action name
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`The %s action already uses this field name. Please change it`, 'jet-form-builder'), actionTypesMap[computed.from]) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('The form field name must be unique. Please change it', 'jet-form-builder')
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsUniqueFieldName);

/***/ }),

/***/ "./package/blocks/hooks/useScopedAttributesContext.js":
/*!************************************************************!*\
  !*** ./package/blocks/hooks/useScopedAttributesContext.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_ScopedAttributesContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/ScopedAttributesContext */ "./package/blocks/context/ScopedAttributesContext.js");

const {
  useContext
} = wp.element;

/**
 * @return {{
 * attributes: Object,
 * setAttributes: Function,
 * realAttributes: Object,
 * setRealAttributes: Function,
 * }}
 */
function useScopedAttributesContext() {
  return useContext(_context_ScopedAttributesContext__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScopedAttributesContext);

/***/ }),

/***/ "./package/blocks/hooks/useSupport.js":
/*!********************************************!*\
  !*** ./package/blocks/hooks/useSupport.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useSelect
} = wp.data;
const {
  useBlockEditContext
} = wp.blockEditor;
const {
  get
} = window._;
function useSupport(supportName) {
  const {
    name
  } = useBlockEditContext();
  return useSelect(select => {
    const blockType = select('core/blocks').getBlockType(name);
    return get(blockType, ['supports', supportName], false);
  }, [name, supportName]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSupport);

/***/ }),

/***/ "./package/blocks/hooks/useUniqKey.js":
/*!********************************************!*\
  !*** ./package/blocks/hooks/useUniqKey.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useBlockEditContext
} = wp.blockEditor;
function useUniqKey() {
  const {
    clientId
  } = useBlockEditContext();
  return slug => slug + '-' + clientId;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUniqKey);

/***/ }),

/***/ "./package/blocks/hooks/useUniqueNameOnDuplicate.js":
/*!**********************************************************!*\
  !*** ./package/blocks/hooks/useUniqueNameOnDuplicate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./package/blocks/store/index.js");
/* harmony import */ var _useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");


const {
  useEffect
} = wp.element;
const {
  useSelect
} = wp.data;
const {
  useBlockProps
} = wp.blockEditor;
function useUniqueNameOnDuplicate(customChangeNames = null) {
  const blockProps = useBlockProps();
  const [, setAttrs] = (0,_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const clientId = blockProps['data-block'];
  const names = useSelect(select => {
    const isJust = select(_store__WEBPACK_IMPORTED_MODULE_0__.storeName).isRecentlyAdded(clientId);
    if (!isJust) {
      return false;
    }
    const {
      hasChanged,
      names: uniqueNames
    } = select(_store__WEBPACK_IMPORTED_MODULE_0__.storeName).getUniqueNames(clientId);
    return hasChanged ? uniqueNames : false;
  }, [clientId]);
  useEffect(() => {
    if (!names) {
      return;
    }
    if ('function' === typeof customChangeNames) {
      customChangeNames(names);
      return;
    }
    setAttrs({
      name: names.split('|')[0]
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [names]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUniqueNameOnDuplicate);

/***/ }),

/***/ "./package/blocks/store/actions.js":
/*!*****************************************!*\
  !*** ./package/blocks/store/actions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/blocks/store/constants.js");
/* harmony import */ var _getPreparedBlocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPreparedBlocks */ "./package/blocks/store/getPreparedBlocks.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./package/blocks/store/index.js");



const {
  select,
  dispatch
} = wp.data;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBlocks(action = null) {
    if (null === action) {
      action = (0,_getPreparedBlocks__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
    const hasExecuted = select(_index__WEBPACK_IMPORTED_MODULE_2__.storeName).isExecuted();
    if (!hasExecuted) {
      dispatch(_index__WEBPACK_IMPORTED_MODULE_2__.storeName).toggleExecute();
    }
    return {
      type: hasExecuted ? _constants__WEBPACK_IMPORTED_MODULE_0__["default"].setBlocks : _constants__WEBPACK_IMPORTED_MODULE_0__["default"].setBlocksFirst,
      blocks: action.blocks,
      blockMap: action.blockMap
    };
  },
  toggleExecute() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].toggleExecute
    };
  }
});

/***/ }),

/***/ "./package/blocks/store/constants.js":
/*!*******************************************!*\
  !*** ./package/blocks/store/constants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBlocks: 'SET_BLOCKS',
  setBlocksFirst: 'SET_BLOCKS_FIRST',
  toggleExecute: 'TOGGLE_EXECUTE'
});

/***/ }),

/***/ "./package/blocks/store/dispatchers.js":
/*!*********************************************!*\
  !*** ./package/blocks/store/dispatchers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/blocks/store/constants.js");

const dispatchers = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].setBlocks](state, action) {
    const recentlyAdded = [];
    for (const blockMapKey in action.blockMap) {
      if (!action.blockMap.hasOwnProperty(blockMapKey) || state.blockMap.hasOwnProperty(blockMapKey)) {
        continue;
      }
      recentlyAdded.push(blockMapKey);
    }
    return {
      ...state,
      blocks: action.blocks,
      blockMap: action.blockMap,
      recentlyAdded
    };
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].setBlocksFirst](state, action) {
    return {
      ...state,
      blocks: action.blocks,
      blockMap: action.blockMap
    };
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].toggleExecute](state) {
    return {
      ...state,
      executed: true
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...dispatchers
});

/***/ }),

/***/ "./package/blocks/store/getPreparedBlocks.js":
/*!***************************************************!*\
  !*** ./package/blocks/store/getPreparedBlocks.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_blocksRecursiveIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/blocksRecursiveIterator */ "./package/blocks/helpers/blocksRecursiveIterator.js");

const {
  select
} = wp.data;
function getPreparedBlocks() {
  const blocks = [];
  const blockMap = {};
  (0,_helpers_blocksRecursiveIterator__WEBPACK_IMPORTED_MODULE_0__["default"])((block, parent) => {
    var _blockMap$parent$clie;
    if (!block?.name?.includes('jet-forms/')) {
      return;
    }
    const blockType = select('core/blocks').getBlockType(block.name);
    const current = blockType.jfbResolveBlock.call(block);

    // deprecated since 3.2.0
    if (blockType.hasOwnProperty('jfbGetFields')) {
      current.fields = blockType.jfbGetFields.call(block);
    }
    if (!parent?.name) {
      blocks.push(current);
      blockMap[current.clientId] = current;
      return;
    }

    /**
     * @type {Object}
     */
    const parentField = (_blockMap$parent$clie = blockMap[parent?.clientId]) !== null && _blockMap$parent$clie !== void 0 ? _blockMap$parent$clie : false;
    if (!parentField) {
      return;
    }
    Object.defineProperty(current, 'parentBlock', {
      get() {
        return parentField;
      }
    });
    parentField.innerBlocks = parentField?.innerBlocks || [];
    parentField.innerBlocks.push(current);
    blockMap[current.clientId] = current;
  });
  return {
    blocks,
    blockMap
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPreparedBlocks);

/***/ }),

/***/ "./package/blocks/store/index.js":
/*!***************************************!*\
  !*** ./package/blocks/store/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   storeName: () => (/* binding */ storeName)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./package/blocks/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./package/blocks/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./package/blocks/store/selectors.js");
/* harmony import */ var _getPreparedBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPreparedBlocks */ "./package/blocks/store/getPreparedBlocks.js");




const {
  createReduxStore,
  dispatch,
  select,
  subscribe
} = wp.data;
const storeName = 'jet-forms/fields';
let prevBlockCount;
let prevBlockAttrs;
subscribe(() => {
  const {
    debounce
  } = window._;
  const {
    setBlocks
  } = dispatch(storeName);
  const resetBlocks = debounce(() => {
    const countBlocks = select('core/block-editor').getGlobalBlockCount();
    if (prevBlockCount !== countBlocks) {
      prevBlockCount = countBlocks;
      setBlocks();
      return;
    }
    const action = (0,_getPreparedBlocks__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const jsonAttrs = JSON.stringify(action.blocks);
    if (jsonAttrs === prevBlockAttrs) {
      return;
    }
    prevBlockAttrs = jsonAttrs;
    setBlocks(action);
  }, 100);
  resetBlocks();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReduxStore(storeName, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./package/blocks/store/reducer.js":
/*!*****************************************!*\
  !*** ./package/blocks/store/reducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchers */ "./package/blocks/store/dispatchers.js");

const DEFAULT_STATE = {
  blocks: [],
  blockMap: {},
  executed: false,
  recentlyAdded: [],
  sanitizers: {
    name: [name => name.replace(/[^\w\-]/gi, ''), name => name === 'children' ? '_' + name : name]
  }
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = DEFAULT_STATE, action) {
  const callback = _dispatchers__WEBPACK_IMPORTED_MODULE_0__["default"][action?.type];
  if (callback) {
    return callback(state, action);
  }
  return state;
}

/***/ }),

/***/ "./package/blocks/store/selectors.js":
/*!*******************************************!*\
  !*** ./package/blocks/store/selectors.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectors = {
  getBlocks(state) {
    return state.blocks;
  },
  getBlockMap(state) {
    return state.blockMap;
  },
  getFields(state, {
    withInner = true,
    currentId = false
  }) {
    const fields = [];
    const iterateFields = blocks => {
      for (const block of blocks) {
        if (block.fields?.length && block.clientId !== currentId) {
          fields.push(...block.fields);
        }
        if (!withInner || !block.innerBlocks?.length) {
          continue;
        }
        iterateFields(block.innerBlocks);
      }
    };
    iterateFields(state.blocks);
    return fields;
  },
  isExecuted(state) {
    return state.executed;
  },
  isRecentlyAdded(state, clientId) {
    return -1 !== state.recentlyAdded.indexOf(clientId);
  },
  getUniqueNames(state, clientId) {
    var _state$blockMap$clien, _currentBlock$fields$;
    const currentBlock = (_state$blockMap$clien = state.blockMap[clientId]) !== null && _state$blockMap$clien !== void 0 ? _state$blockMap$clien : false;
    if (!currentBlock) {
      return {
        hasChanged: false
      };
    }
    let hasChanged = false;
    const names = (_currentBlock$fields$ = currentBlock?.fields?.map?.(({
      value
    }) => value)) !== null && _currentBlock$fields$ !== void 0 ? _currentBlock$fields$ : [];
    const scope = currentBlock.hasOwnProperty('parentBlock') ? currentBlock.parentBlock.innerBlocks : state.blocks;
    const walkerFields = fields => {
      for (const field of fields) {
        const nameIndex = names.indexOf(field.value);
        if (-1 === nameIndex) {
          continue;
        }
        if ('field_name' === field.value) {
          hasChanged = true;
          continue;
        }
        names[nameIndex] = `${names[nameIndex]}_copy`;
        hasChanged = true;
        walkerFields(fields);
      }
    };
    for (const block of scope) {
      var _block$fields;
      if (clientId === block.clientId) {
        continue;
      }
      walkerFields((_block$fields = block?.fields) !== null && _block$fields !== void 0 ? _block$fields : []);
    }
    return {
      hasChanged,
      names: names.join('|')
    };
  },
  getSanitizedAttributes(state, attrs, {
    name: type
  } = {}) {
    for (const attrsKey in attrs) {
      var _ref, _state$sanitizers$typ;
      if (!attrs.hasOwnProperty(attrsKey)) {
        continue;
      }
      const sanitizers = (_ref = (_state$sanitizers$typ = state.sanitizers?.[type]?.[attrsKey]) !== null && _state$sanitizers$typ !== void 0 ? _state$sanitizers$typ : state.sanitizers?.[attrsKey]) !== null && _ref !== void 0 ? _ref : false;
      if (!sanitizers?.length) {
        continue;
      }
      for (const sanitizer of sanitizers) {
        // eslint-disable-next-line max-depth
        if ('function' !== typeof sanitizer) {
          continue;
        }
        attrs[attrsKey] = sanitizer(attrs[attrsKey]);
      }
    }
    return attrs;
  },
  isUniqueName(state, clientId) {
    const {
      hasChanged
    } = selectors.getUniqueNames(state, clientId);
    return !hasChanged;
  },
  /**
   * @since 3.1.0
   *
   * @param  state
   * @param  blockId {String} Block clientId or name
   * @return {*}
   */
  getBlock(state, blockId) {
    return state.blocks.find(({
      name,
      clientId
    }) => [name, clientId].includes(blockId));
  },
  getBlockByName(state, fieldName) {
    if (!fieldName) {
      return false;
    }
    const iterateFields = blocks => {
      for (const block of blocks) {
        if (block.fields.some(({
          value
        }) => value === fieldName)) {
          return block;
        }
        if (!block.innerBlocks?.length) {
          continue;
        }
        iterateFields(block.innerBlocks);
      }
    };
    iterateFields(state.blocks);
    return false;
  },
  getBlockNameByName(state, fieldName) {
    var _block$name;
    const block = selectors.getBlockByName(state, fieldName);
    return (_block$name = block?.name) !== null && _block$name !== void 0 ? _block$name : '';
  },
  getBlockById(state, clientId) {
    var _state$blockMap$clien2;
    return (_state$blockMap$clien2 = state.blockMap[clientId]) !== null && _state$blockMap$clien2 !== void 0 ? _state$blockMap$clien2 : false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...selectors
});

/***/ }),

/***/ "./package/components/AdvancedInspectorControl.js":
/*!********************************************************!*\
  !*** ./package/components/AdvancedInspectorControl.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preset_components_PresetButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preset/components/PresetButton */ "./package/preset/components/PresetButton.js");
/* harmony import */ var _macros_button_components_MacrosFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../macros.button/components/MacrosFields */ "./package/macros.button/components/MacrosFields.js");
/* harmony import */ var _BaseLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseLabel */ "./package/components/BaseLabel.js");




const {
  FlexItem
} = wp.components;
const {
  useInstanceId
} = wp.compose;
function AdvancedInspectorControl({
  children,
  value,
  label,
  onChangePreset = false,
  onChangeMacros = false
}) {
  const instanceId = useInstanceId(FlexItem, 'jfb-AdvancedInspectorControl');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BaseLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: label,
    htmlFor: instanceId
  }, false !== onChangePreset && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preset_components_PresetButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: value,
    onChange: onChangePreset
  }), false !== onChangeMacros && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_macros_button_components_MacrosFields__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onChangeMacros
  })), 'function' === typeof children ? children({
    instanceId
  }) : children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedInspectorControl);

/***/ }),

/***/ "./package/components/AdvancedModalControl.js":
/*!****************************************************!*\
  !*** ./package/components/AdvancedModalControl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preset_components_PresetButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preset/components/PresetButton */ "./package/preset/components/PresetButton.js");
/* harmony import */ var _macros_button_components_MacrosFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../macros.button/components/MacrosFields */ "./package/macros.button/components/MacrosFields.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);





function AdvancedModalControl({
  children,
  value,
  label,
  onChangePreset = false,
  onChangeMacros = false,
  macroWithCurrent = false
}) {
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, 'jfb-AdvancedModalControl');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'components-base-control'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    align: 'flex-start',
    className: 'components-base-control__field'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
    isBlock: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    align: 'center',
    justify: 'flex-start'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: instanceId,
    className: 'jet-fb label'
  }, label), false !== onChangePreset && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preset_components_PresetButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: value,
    onChange: onChangePreset
  }), false !== onChangeMacros && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_macros_button_components_MacrosFields__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onChangeMacros,
    withCurrent: macroWithCurrent
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
    isBlock: true,
    style: {
      flex: 3,
      marginLeft: 'unset'
    }
  }, 'function' === typeof children ? children({
    instanceId
  }) : children)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedModalControl);

/***/ }),

/***/ "./package/components/BaseHelp.js":
/*!****************************************!*\
  !*** ./package/components/BaseHelp.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function BaseHelp({
  children,
  className = '',
  style = {},
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'jet-fb-base-control__help' + (className ? ` ${className}` : ''),
    style: {
      fontSize: '12px',
      fontStyle: 'normal',
      color: 'rgb(117, 117, 117)',
      marginTop: '0px',
      ...style
    },
    ...props
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseHelp);

/***/ }),

/***/ "./package/components/BaseLabel.js":
/*!*****************************************!*\
  !*** ./package/components/BaseLabel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  Flex
} = wp.components;
function BaseLabel({
  label,
  children,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, {
    align: 'center',
    justify: 'flex-start',
    style: {
      marginBottom: '8px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: 'jet-fb label',
    ...props
  }, label), children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseLabel);

/***/ }),

/***/ "./package/components/ContainersList.js":
/*!**********************************************!*\
  !*** ./package/components/ContainersList.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ContainersList({
  children,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'jet-fb flex flex-dir-column gap-default',
    style: {
      marginBottom: '1em'
    },
    ...props
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainersList);

/***/ }),

/***/ "./package/components/DetailsContainer.js":
/*!************************************************!*\
  !*** ./package/components/DetailsContainer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function DetailsContainer({
  children
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ['jet-fb', 'flex', 'flex-dir-column', 'container', 'gap-1em'].join(' ')
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsContainer);

/***/ }),

/***/ "./package/components/GroupedSelectControl.js":
/*!****************************************************!*\
  !*** ./package/components/GroupedSelectControl.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools */ "./package/tools.js");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @linaria/react */ "../../node_modules/@linaria/react/dist/index.mjs");

/* eslint-disable import/no-extraneous-dependencies */


const StyledSelect = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_2__.styled)('select')({
  name: "StyledSelect",
  class: "syma2t4",
  propsAsIs: false
});
function GroupedSelectControl({
  id,
  label,
  onChange,
  options = [],
  value
}) {
  const onChangeValue = event => {
    onChange(event.target.value);
  };

  // Disable reason: A select with an onchange throws a warning

  /* eslint-disable jsx-a11y/no-onchange */
  return !(0,_tools__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(options) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledSelect, {
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    value: value
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: `${label}-placeholder`,
    value: ``
  }, `--`), options.map((optGroup, groupIndex) => {
    return !(0,_tools__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(optGroup.values) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("optgroup", {
      key: `${optGroup.label}-${groupIndex}`,
      label: optGroup.label
    }, optGroup.values.map((option, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: `${option.value}-${index}-${groupIndex}`,
      value: option.value,
      disabled: option.disabled
    }, option.label)));
  }));
  /* eslint-enable jsx-a11y/no-onchange */
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupedSelectControl);
__webpack_require__(/*! ./GroupedSelectControl.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./GroupedSelectControl.js */ "./package/components/GroupedSelectControl.wyw-in-js.css!=!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/components/GroupedSelectControl.js");

/***/ }),

/***/ "./package/components/HorizontalLine.js":
/*!**********************************************!*\
  !*** ./package/components/HorizontalLine.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HorizontalLine(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    style: {
      ...props
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HorizontalLine);

/***/ }),

/***/ "./package/components/HoverContainer.js":
/*!**********************************************!*\
  !*** ./package/components/HoverContainer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HoverContainer({
  isHover = false,
  children
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ['jet-fb', isHover ? 'show' : 'hide', 'p-absolute', 'wh-100', 'flex-center', 'gap-05em'].join(' '),
    style: {
      backgroundColor: '#ffffffcc',
      transition: '0.3s'
    }
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverContainer);

/***/ }),

/***/ "./package/components/MacrosInserter.js":
/*!**********************************************!*\
  !*** ./package/components/MacrosInserter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  Button,
  Popover,
  PanelBody
} = wp.components;
const {
  useState
} = wp.element;

// eslint-disable-next-line max-lines-per-function
function MacrosInserter({
  children,
  fields,
  onFieldClick,
  customMacros,
  zIndex = 1000000,
  ...popoverProps
}) {
  const [showPopover, setPopoverState] = useState(() => false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-form-editor__macros-inserter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isTertiary: true,
    isSmall: true,
    icon: showPopover ? 'no-alt' : 'admin-tools',
    label: 'Insert macros',
    className: "jet-form-editor__macros-trigger",
    onClick: () => {
      setPopoverState(prev => !prev);
    }
  }), showPopover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
    style: {
      zIndex
    },
    position: 'bottom left',
    ...popoverProps
  }, fields.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: 'Form Fields'
  }, fields.map(field => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: 'field_' + field.name
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isLink: true,
      onClick: () => {
        onFieldClick(field.name);
      }
    }, '%' + field.name + '%'));
  })), customMacros && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: 'Custom Macros'
  }, customMacros.map(macros => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: 'macros_' + macros
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isLink: true,
      onClick: () => {
        onFieldClick(macros);
      }
    }, '%' + macros + '%'));
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MacrosInserter);

/***/ }),

/***/ "./package/components/ToggleControl.js":
/*!*********************************************!*\
  !*** ./package/components/ToggleControl.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseHelp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseHelp */ "./package/components/BaseHelp.js");


const {
  FormToggle,
  BaseControl,
  Flex
} = wp.components;
const {
  useInstanceId
} = wp.compose;
function ToggleControl({
  checked = false,
  disabled = false,
  onChange = () => {},
  children = null,
  help = null,
  flexLabelProps = {},
  outsideLabel = null,
  __nextHasNoMarginBottom = false,
  ...props
}) {
  const Help = help;
  const instanceId = useInstanceId(ToggleControl);
  const id = `inspector-jfb-toggle-control-${instanceId}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    id: id,
    __nextHasNoMarginBottom: __nextHasNoMarginBottom
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, {
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, {
    gap: 3,
    align: "flex-start",
    justify: "flex-start",
    ...flexLabelProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormToggle, {
    id: id,
    checked: checked,
    onChange: event => onChange(event.target.checked),
    disabled: disabled,
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: id
  }, children), outsideLabel), 'string' === typeof Help ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BaseHelp__WEBPACK_IMPORTED_MODULE_1__["default"], null, Help) : Help && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Help, null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleControl);

/***/ }),

/***/ "./package/context/block.value.item.context.js":
/*!*****************************************************!*\
  !*** ./package/context/block.value.item.context.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContext({}));

/***/ }),

/***/ "./package/dynamic.value/components/DynamicItem.js":
/*!*********************************************************!*\
  !*** ./package/dynamic.value/components/DynamicItem.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DynamicItemBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicItemBody */ "./package/dynamic.value/components/DynamicItemBody.js");
/* harmony import */ var _context_block_value_item_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/block.value.item.context */ "./package/context/block.value.item.context.js");
/* harmony import */ var _action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-modal/components/ActionModal */ "./package/action-modal/components/ActionModal.js");
/* harmony import */ var _preset_helpers_humanReadablePreset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../preset/helpers/humanReadablePreset */ "./package/preset/helpers/humanReadablePreset.js");
/* harmony import */ var _block_conditions_components_HumanReadableConditions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../block-conditions/components/HumanReadableConditions */ "./package/block-conditions/components/HumanReadableConditions.js");
/* harmony import */ var _components_HoverContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/HoverContainer */ "./package/components/HoverContainer.js");
/* harmony import */ var _components_DetailsContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/DetailsContainer */ "./package/components/DetailsContainer.js");








const {
  __
} = wp.i18n;
const {
  useState
} = wp.element;
const {
  Button
} = wp.components;

// eslint-disable-next-line max-lines-per-function
function DynamicItem({
  current,
  update,
  isOpenModal,
  setOpenModal
}) {
  const updateCurrent = settings => {
    update(value => {
      const groups = JSON.parse(JSON.stringify(value.groups));
      for (const groupIndex in groups) {
        if (!groups.hasOwnProperty(groupIndex) || current.id !== groups[groupIndex].id) {
          continue;
        }
        groups[groupIndex] = {
          ...groups[groupIndex],
          ...settings
        };
      }
      return {
        groups
      };
    });
  };
  const deleteCurrent = () => {
    update(value => {
      const groups = JSON.parse(JSON.stringify(value.groups));
      return {
        groups: groups.filter(({
          id
        }) => id !== current.id)
      };
    });
  };
  const [showModal, setShowModal] = useState(false);
  const [isHover, setHover] = useState(false);
  const isEmpty = 1 >= Object.keys(current)?.length;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_block_value_item_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      update: updateCurrent,
      current
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-fb p-relative",
    onMouseOver: () => setHover(true),
    onFocus: () => setHover(true),
    onMouseOut: () => setHover(false),
    onBlur: () => setHover(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_HoverContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isHover: isHover
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSmall: true,
    isSecondary: true,
    icon: showModal ? 'no-alt' : 'edit',
    onClick: () => setShowModal(prev => !prev)
  }, __('Edit', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSmall: true,
    isDestructive: true,
    icon: 'trash',
    onClick: deleteCurrent
  }, __('Delete', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DetailsContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null, isEmpty ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-title": __('This value item is empty', 'jet-form-builder')
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-title": __('Set', 'jet-form-builder') + ':',
    dangerouslySetInnerHTML: {
      __html: (0,_preset_helpers_humanReadablePreset__WEBPACK_IMPORTED_MODULE_4__["default"])(current.to_set)
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_conditions_components_HumanReadableConditions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    conditions: current?.conditions
  })))), (showModal || isOpenModal === current.id) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    classNames: ['width-60'],
    onRequestClose: () => {
      setShowModal(false);
      setOpenModal(false);
    },
    title: __('Edit Dynamic Value', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DynamicItemBody__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicItem);

/***/ }),

/***/ "./package/dynamic.value/components/DynamicItemBody.js":
/*!*************************************************************!*\
  !*** ./package/dynamic.value/components/DynamicItemBody.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_block_value_item_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/block.value.item.context */ "./package/context/block.value.item.context.js");
/* harmony import */ var _repeater_components_repeater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repeater/components/repeater */ "./package/repeater/components/repeater.js");
/* harmony import */ var _repeater_components_repeater_add_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../repeater/components/repeater.add.new */ "./package/repeater/components/repeater.add.new.js");
/* harmony import */ var _components_BaseHelp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BaseHelp */ "./package/components/BaseHelp.js");
/* harmony import */ var _repeater_components_repeater_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../repeater/components/repeater.state */ "./package/repeater/components/repeater.state.js");
/* harmony import */ var _action_modal_hooks_useOnUpdateModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../action-modal/hooks/useOnUpdateModal */ "./package/action-modal/hooks/useOnUpdateModal.js");
/* harmony import */ var _preset_components_PresetButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../preset/components/PresetButton */ "./package/preset/components/PresetButton.js");
/* harmony import */ var _macros_button_components_MacrosFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../macros.button/components/MacrosFields */ "./package/macros.button/components/MacrosFields.js");
/* harmony import */ var _block_conditions_components_ConditionItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../block-conditions/components/ConditionItem */ "./package/block-conditions/components/ConditionItem.js");
/* harmony import */ var _macros_button_components_ClientSideMacros__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../macros.button/components/ClientSideMacros */ "./package/macros.button/components/ClientSideMacros.js");
/* harmony import */ var _block_conditions_components_ConditionsRepeaterContextProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../block-conditions/components/ConditionsRepeaterContextProvider */ "./package/block-conditions/components/ConditionsRepeaterContextProvider.js");












const {
  __
} = wp.i18n;
const {
  useState,
  useContext,
  Fragment,
  useEffect
} = wp.element;
const {
  SelectControl,
  TextareaControl,
  FlexItem,
  Flex,
  ToggleControl
} = wp.components;
const help = [{
  key: 'commas',
  render: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, __(`If this field supports multiple values, you can separate them with commas`, 'jet-form-builder'))
}];
const options = [{
  value: 'on_change',
  label: __('On change conditions result', 'jet-form-builder'),
  help: __(`The value will be applied if condition check-ups return a result different from the first check-up's cached value`, 'jet-form-builder')
}, {
  value: 'once',
  label: __('Once', 'jet-form-builder'),
  help: __(`The value will be applied only the first time the condition is matched`, 'jet-form-builder')
}, {
  value: 'always',
  label: __('Always', 'jet-form-builder'),
  help: __(`The value will be applied every time the condition is matched`, 'jet-form-builder')
}];
const getHelp = frequency => {
  const option = options.find(current => {
    return current.value === (frequency !== null && frequency !== void 0 ? frequency : 'on_change');
  });
  return option.help;
};

// eslint-disable-next-line max-lines-per-function
function DynamicItemBody() {
  var _current$to_set2, _current$frequency, _current$conditions2, _current$set_on_empty;
  const {
    current: currentValue,
    update
  } = useContext(_context_block_value_item_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const [current, setCurrent] = useState(() => currentValue);
  const [currentHelp, setCurrentHelp] = useState(() => getHelp(current.frequency));
  useEffect(() => {
    setCurrentHelp(getHelp(current.frequency));
  }, [current.frequency]);
  const updateCurrent = settings => {
    setCurrent(prev => ({
      ...prev,
      ...settings
    }));
  };
  const updateConditions = conditions => {
    var _current$conditions;
    updateCurrent({
      conditions: 'function' === typeof conditions ? conditions((_current$conditions = current.conditions) !== null && _current$conditions !== void 0 ? _current$conditions : []) : conditions
    });
  };
  (0,_action_modal_hooks_useOnUpdateModal__WEBPACK_IMPORTED_MODULE_6__["default"])(() => update(current));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, {
    align: 'flex-start'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FlexItem, {
    isBlock: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, {
    align: 'center',
    justify: 'flex-start'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'jet-fb label'
  }, __('Value to set', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preset_components_PresetButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: current.to_set,
    onChange: val => updateCurrent({
      to_set: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_macros_button_components_ClientSideMacros__WEBPACK_IMPORTED_MODULE_10__["default"], {
    withThis: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_macros_button_components_MacrosFields__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: name => {
      var _current$to_set;
      return updateCurrent({
        to_set: `${(_current$to_set = current.to_set) !== null && _current$to_set !== void 0 ? _current$to_set : ''}${name}`
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BaseHelp__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, help.map(helpItem => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, {
    key: helpItem.key
  }, helpItem.render()))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FlexItem, {
    isBlock: true,
    style: {
      flex: 3,
      marginLeft: 'unset'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    className: 'jet-control-clear',
    hideLabelFromVision: true,
    value: (_current$to_set2 = current.to_set) !== null && _current$to_set2 !== void 0 ? _current$to_set2 : '',
    onChange: val => updateCurrent({
      to_set: val
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    options: options,
    value: (_current$frequency = current.frequency) !== null && _current$frequency !== void 0 ? _current$frequency : 'on_change',
    label: __('Apply type', 'jet-form-builder'),
    labelPosition: 'side',
    onChange: frequency => updateCurrent({
      frequency
    }),
    help: currentHelp
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_repeater_components_repeater_state__WEBPACK_IMPORTED_MODULE_5__["default"], {
    state: updateConditions
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_conditions_components_ConditionsRepeaterContextProvider__WEBPACK_IMPORTED_MODULE_11__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_repeater_components_repeater__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: (_current$conditions2 = current.conditions) !== null && _current$conditions2 !== void 0 ? _current$conditions2 : []
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_block_conditions_components_ConditionItem__WEBPACK_IMPORTED_MODULE_9__["default"], null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'jet-fb flex jc-space-between ai-center'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_repeater_components_repeater_add_new__WEBPACK_IMPORTED_MODULE_3__["default"], null, __('Add New Condition', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    className: 'jet-fb m-unset clear-control',
    label: __('Set value only if field is empty', 'jet-form-builder'),
    checked: (_current$set_on_empty = current.set_on_empty) !== null && _current$set_on_empty !== void 0 ? _current$set_on_empty : false,
    onChange: val => updateCurrent({
      set_on_empty: val
    })
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicItemBody);

/***/ }),

/***/ "./package/dynamic.value/components/DynamicValues.js":
/*!***********************************************************!*\
  !*** ./package/dynamic.value/components/DynamicValues.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DynamicItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicItem */ "./package/dynamic.value/components/DynamicItem.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools */ "./package/tools.js");
/* harmony import */ var _components_BaseHelp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BaseHelp */ "./package/components/BaseHelp.js");
/* harmony import */ var _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/hooks/useUniqKey */ "./package/blocks/hooks/useUniqKey.js");
/* harmony import */ var _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useIsHasAttribute */ "./package/hooks/useIsHasAttribute.js");
/* harmony import */ var _components_ContainersList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ContainersList */ "./package/components/ContainersList.js");








const {
  __
} = wp.i18n;
const {
  useState
} = wp.element;
const {
  Button
} = wp.components;

// eslint-disable-next-line max-lines-per-function
function DynamicValues() {
  var _attributes$value, _value$groups;
  const [attributes, setAttributes] = (0,_blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const uniqKey = (0,_blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const value = (_attributes$value = attributes.value) !== null && _attributes$value !== void 0 ? _attributes$value : {};
  const groups = (_value$groups = value.groups) !== null && _value$groups !== void 0 ? _value$groups : [];
  const [openModal, setOpenModal] = useState(false);
  if (!(0,_hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_6__["default"])('value')) {
    return null;
  }
  const orGroups = groups.filter(
  // Exclude first item
  (c, index) => 0 !== index);
  const updateValue = settings => {
    setAttributes({
      ...attributes,
      value: {
        ...value,
        ...('function' === typeof settings ? settings(value) : settings)
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BaseHelp__WEBPACK_IMPORTED_MODULE_3__["default"], null, __(`Or use a condition-dependent value`, 'jet-form-builder') + ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isLink: true,
    onClick: () => {},
    label: __(`Former Set Value functionality, moved from the Conditional Block`, 'jet-form-builder'),
    showTooltip: true
  }, "(?)")), Boolean(groups.length) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ContainersList__WEBPACK_IMPORTED_MODULE_7__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DynamicItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: uniqKey(groups[0].id),
    current: groups[0],
    update: updateValue,
    isOpenModal: openModal,
    setOpenModal: setOpenModal
  }), Boolean(orGroups.length) && orGroups.map(current => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, __('OR', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DynamicItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: uniqKey(current.id),
    current: current,
    update: updateValue,
    isOpenModal: openModal,
    setOpenModal: setOpenModal
  })))) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    icon: 'plus-alt2',
    isSecondary: true,
    onClick: () => {
      const id = _tools__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomID();
      updateValue({
        groups: [...groups, {
          id,
          conditions: [{
            __visible: true
          }]
        }]
      });
      setOpenModal(id);
    }
  }, __('Add Dynamic Value', 'jet-form-builder')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicValues);

/***/ }),

/***/ "./package/events/hooks/useDefaultEvents.js":
/*!**************************************************!*\
  !*** ./package/events/hooks/useDefaultEvents.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useSelect
} = wp.data;
function useDefaultEvents() {
  const eventsObjects = useSelect(select => select('jet-forms/events').getAlwaysTypes());
  const events = [];
  for (const {
    value
  } of eventsObjects) {
    events.push(value);
  }
  return [...new Set(events)];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDefaultEvents);

/***/ }),

/***/ "./package/events/hooks/useDynamicEvents.js":
/*!**************************************************!*\
  !*** ./package/events/hooks/useDynamicEvents.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useSelect
} = wp.data;
function useDynamicEvents() {
  return useSelect(select => select('jet-forms/events').getDynamicTypes().map(({
    value
  }) => value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDynamicEvents);

/***/ }),

/***/ "./package/events/hooks/useEvents.js":
/*!*******************************************!*\
  !*** ./package/events/hooks/useEvents.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useDefaultEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDefaultEvents */ "./package/events/hooks/useDefaultEvents.js");
/* harmony import */ var _useEventsFromGateways__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventsFromGateways */ "./package/events/hooks/useEventsFromGateways.js");
/* harmony import */ var _useEventsFromActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEventsFromActions */ "./package/events/hooks/useEventsFromActions.js");
/* harmony import */ var _useDynamicEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDynamicEvents */ "./package/events/hooks/useDynamicEvents.js");




const {
  useSelect
} = wp.data;
function useEvents(action) {
  const list = [...(0,_useDefaultEvents__WEBPACK_IMPORTED_MODULE_0__["default"])(action), ...(0,_useEventsFromGateways__WEBPACK_IMPORTED_MODULE_1__["default"])(action), ...(0,_useEventsFromActions__WEBPACK_IMPORTED_MODULE_2__["default"])(action), ...(0,_useDynamicEvents__WEBPACK_IMPORTED_MODULE_3__["default"])(action)];
  return useSelect(select => select('jet-forms/events').filterList(action.type, list));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEvents);

/***/ }),

/***/ "./package/events/hooks/useEventsFromActions.js":
/*!******************************************************!*\
  !*** ./package/events/hooks/useEventsFromActions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useSelectPostMeta */ "./package/hooks/useSelectPostMeta.js");

const {
  useSelect
} = wp.data;
function useEventsFromActions({
  index
}) {
  const actionsMeta = (0,_hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_0__["default"])('_jf_actions');
  const actionsMap = useSelect(select => select('jet-forms/actions').getActionsMap(), []);
  actionsMeta.splice(index, 1);
  const events = [];
  for (const action of actionsMeta) {
    const callback = actionsMap?.[action.type]?.provideEvents;
    if ('function' !== typeof callback) {
      continue;
    }
    const {
      [action.type]: current = {}
    } = action.settings;
    events.push(...callback(current));
  }
  return [...new Set(events)];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEventsFromActions);

/***/ }),

/***/ "./package/events/hooks/useEventsFromGateways.js":
/*!*******************************************************!*\
  !*** ./package/events/hooks/useEventsFromGateways.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useSelectPostMeta */ "./package/hooks/useSelectPostMeta.js");

const {
  useSelect
} = wp.data;
function useEventsFromGateways() {
  var _gateways$gateways$ga;
  const gateways = (0,_hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_0__["default"])('_jf_gateways');
  const {
    scenario = {}
  } = (_gateways$gateways$ga = gateways[gateways?.gateway]) !== null && _gateways$gateways$ga !== void 0 ? _gateways$gateways$ga : {};
  return useSelect(select => {
    const eventsObjects = select('jet-forms/events').getGatewayTypes();
    const events = [];
    for (const event of eventsObjects) {
      const correctGateway = event.gateway ? event.gateway === gateways.gateway : true;
      const correctScenario = event.scenario ? event.scenario === scenario?.id : true;
      if (correctGateway && correctScenario) {
        events.push(event.value);
      }
    }
    return [...new Set(events)];
  }, [gateways.gateway, scenario?.id]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEventsFromGateways);

/***/ }),

/***/ "./package/events/hooks/useRequestEvents.js":
/*!**************************************************!*\
  !*** ./package/events/hooks/useRequestEvents.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEvents */ "./package/events/hooks/useEvents.js");

const {
  useSelect
} = wp.data;
function useRequestEvents() {
  const currentAction = useSelect(select => select('jet-forms/actions').getCurrentAction());
  return (0,_useEvents__WEBPACK_IMPORTED_MODULE_0__["default"])(currentAction);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequestEvents);

/***/ }),

/***/ "./package/events/store/actions.js":
/*!*****************************************!*\
  !*** ./package/events/store/actions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/events/store/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  register(items) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].register,
      items
    };
  },
  lockActions() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].lockActions
    };
  },
  unRegister(types) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].unRegister,
      types
    };
  },
  clearDynamicEvents() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].clearDynamicEvents
    };
  }
});

/***/ }),

/***/ "./package/events/store/constants.js":
/*!*******************************************!*\
  !*** ./package/events/store/constants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  register: 'REGISTER',
  unRegister: 'UNREGISTER',
  lockActions: 'LOCK_ACTIONS',
  clearDynamicEvents: 'CLEAR_DYNAMIC_EVENTS'
});

/***/ }),

/***/ "./package/events/store/dispatchers.js":
/*!*********************************************!*\
  !*** ./package/events/store/dispatchers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/events/store/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./package/events/store/selectors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].register](state, action) {
    const {
      types
    } = state;
    for (const item of action.items) {
      item.title = item.label;
      const issetIndex = _selectors__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeIndex(state, item.value);

      // is new event type
      if (-1 === issetIndex) {
        types.push({
          ...item
        });
      } else {
        types[issetIndex] = {
          ...item
        };
      }
    }
    return {
      ...state,
      types
    };
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].lockActions](state) {
    for (const {
      id,
      self: actionSelf
    } of window.jetFormActionTypes) {
      var _window$actionSelf;
      const current = (_window$actionSelf = window[actionSelf]) !== null && _window$actionSelf !== void 0 ? _window$actionSelf : false;
      if (false === current) {
        continue;
      }
      const {
        __unsupported_events: unSup,
        __supported_events: sup
      } = current;
      const action = {
        unsupported: state.types.filter(({
          self
        }) => unSup.includes(self)).map(({
          value
        }) => value),
        supported: state.types.filter(({
          self
        }) => sup.includes(self)).map(({
          value
        }) => value)
      };
      if (!action.supported.length && !action.unsupported.length) {
        continue;
      }
      state.lockedActions[id] = action;
    }
    return state;
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].unRegister](state, action) {
    const {
      types
    } = action;
    state.types = state.types.filter(({
      value
    }) => !types.includes(value));
    return state;
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].clearDynamicEvents](state) {
    state.types = state.types.filter(({
      isDynamic = false
    }) => !isDynamic);
    return state;
  }
});

/***/ }),

/***/ "./package/events/store/index.js":
/*!***************************************!*\
  !*** ./package/events/store/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./package/events/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./package/events/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./package/events/store/selectors.js");



const {
  createReduxStore
} = wp.data;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReduxStore('jet-forms/events', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./package/events/store/reducer.js":
/*!*****************************************!*\
  !*** ./package/events/store/reducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchers */ "./package/events/store/dispatchers.js");

const DEFAULT_STATE = {
  types: [],
  labels: {},
  lockedActions: {}
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = DEFAULT_STATE, action) {
  const callback = _dispatchers__WEBPACK_IMPORTED_MODULE_0__["default"][action?.type];
  if (callback) {
    return callback(state, action);
  }
  return state;
}

/***/ }),

/***/ "./package/events/store/selectors.js":
/*!*******************************************!*\
  !*** ./package/events/store/selectors.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectors = {
  getTypeIndex(state, slug) {
    return state.types.findIndex(event => event.value === slug);
  },
  getTypes(state) {
    return state.types;
  },
  getGatewayTypes(state) {
    return state.types.filter(event => 'gateway' in event);
  },
  getAlwaysTypes(state) {
    return state.types.filter(event => 'always' in event);
  },
  getDynamicTypes(state) {
    return state.types.filter(({
      isDynamic
    }) => isDynamic);
  },
  getType(state, slug) {
    const index = selectors.getTypeIndex(state, slug);
    return state.types[index];
  },
  getUnsupported(state, actionId) {
    var _state$lockedActions$;
    const action = (_state$lockedActions$ = state.lockedActions[actionId]) !== null && _state$lockedActions$ !== void 0 ? _state$lockedActions$ : false;
    if (false === action) {
      return [];
    }
    return action.unsupported;
  },
  getSupported(state, actionId) {
    var _state$lockedActions$2;
    const action = (_state$lockedActions$2 = state.lockedActions[actionId]) !== null && _state$lockedActions$2 !== void 0 ? _state$lockedActions$2 : false;
    if (false === action) {
      return [];
    }
    return action.supported;
  },
  isValid(state, actionId, eventSlug) {
    const unsupported = selectors.getUnsupported(state, actionId);
    if (unsupported.length && unsupported.includes(eventSlug)) {
      return false;
    }
    const supported = selectors.getSupported(state, actionId);
    return !supported.length || supported.includes(eventSlug);
  },
  filterList(state, actionId, eventList) {
    return eventList.filter(current => selectors.isValid(state, actionId, current));
  },
  getHelpMap(state) {
    const map = {};
    for (const {
      value,
      help
    } of state.types) {
      map[value] = help;
    }
    return map;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...selectors
});

/***/ }),

/***/ "./package/gateways/components/GatewayFetchButton.js":
/*!***********************************************************!*\
  !*** ./package/gateways/components/GatewayFetchButton.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_withSelectGateways__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/withSelectGateways */ "./package/gateways/hooks/withSelectGateways.js");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);





function GatewayFetchButton({
  initialLabel = 'Valid',
  label = 'InValid',
  apiArgs = {},
  gatewayRequestId,
  loadingGateway,
  onLoading = () => {},
  onSuccess = () => {},
  onFail = () => {},
  isHidden = false
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__.FetchApiButton, {
    id: gatewayRequestId,
    loadingState: loadingGateway,
    initialLabel: initialLabel,
    label: label,
    apiArgs: apiArgs,
    onFail: onFail,
    onLoading: onLoading,
    onSuccess: onSuccess,
    isHidden: isHidden
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(_hooks_withSelectGateways__WEBPACK_IMPORTED_MODULE_1__["default"]))(GatewayFetchButton));

/***/ }),

/***/ "./package/gateways/helpers/gatewayAttr.js":
/*!*************************************************!*\
  !*** ./package/gateways/helpers/gatewayAttr.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function gatewayAttr(attr = false, isEmpty = '') {
  const data = window.JetFormEditorData.gateways;
  if (!attr) {
    return data;
  }
  if (!data[attr]) {
    return false;
  }
  const source = data[attr];
  return name => source[name] ? source[name] : isEmpty;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gatewayAttr);

/***/ }),

/***/ "./package/gateways/helpers/gatewayLabel.js":
/*!**************************************************!*\
  !*** ./package/gateways/helpers/gatewayLabel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gatewayAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gatewayAttr */ "./package/gateways/helpers/gatewayAttr.js");

function gatewayLabel(type, isEmpty = '') {
  const label = (0,_gatewayAttr__WEBPACK_IMPORTED_MODULE_0__["default"])('labels');
  return attr => label(type) ? label(type)[attr] : isEmpty;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gatewayLabel);

/***/ }),

/***/ "./package/gateways/helpers/issetRenderGateway.js":
/*!********************************************************!*\
  !*** ./package/gateways/helpers/issetRenderGateway.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function issetRenderGateway(id, what = 'cred') {
  return window.JetFBGatewaysList && window.JetFBGatewaysList[id] && window.JetFBGatewaysList[id][what];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (issetRenderGateway);

/***/ }),

/***/ "./package/gateways/helpers/registerGateway.js":
/*!*****************************************************!*\
  !*** ./package/gateways/helpers/registerGateway.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function registerGateway(id, callback, forWhat = 'cred') {
  window.JetFBGatewaysList = window.JetFBGatewaysList || {};
  window.JetFBGatewaysList[id] = window.JetFBGatewaysList[id] || {};
  window.JetFBGatewaysList[id][forWhat] = callback;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerGateway);

/***/ }),

/***/ "./package/gateways/helpers/renderGateway.js":
/*!***************************************************!*\
  !*** ./package/gateways/helpers/renderGateway.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _issetRenderGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./issetRenderGateway */ "./package/gateways/helpers/issetRenderGateway.js");


function renderGateway(id, props, what = 'cred') {
  if (!(0,_issetRenderGateway__WEBPACK_IMPORTED_MODULE_1__["default"])(id, what)) {
    return null;
  }
  const GatewayComponent = window.JetFBGatewaysList[id][what];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GatewayComponent, {
    ...props
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGateway);

/***/ }),

/***/ "./package/gateways/helpers/renderGatewayWithPlaceholder.js":
/*!******************************************************************!*\
  !*** ./package/gateways/helpers/renderGatewayWithPlaceholder.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _issetRenderGateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./issetRenderGateway */ "./package/gateways/helpers/issetRenderGateway.js");
/* harmony import */ var _renderGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGateway */ "./package/gateways/helpers/renderGateway.js");


function renderGatewayWithPlaceholder(id, props, what = 'cred', Placeholder = null) {
  if (!(0,_issetRenderGateway__WEBPACK_IMPORTED_MODULE_0__["default"])(id, what)) {
    return Placeholder;
  }
  props.Placeholder = Placeholder;
  return (0,_renderGateway__WEBPACK_IMPORTED_MODULE_1__["default"])(id, props, what);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGatewayWithPlaceholder);

/***/ }),

/***/ "./package/gateways/hooks/withDispatchGateways.js":
/*!********************************************************!*\
  !*** ./package/gateways/hooks/withDispatchGateways.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function withDispatchGateways(dispatch) {
  const store = dispatch('jet-forms/gateways');
  return {
    setGatewayRequest: store.setRequest,
    setGatewayScenario: store.setScenario,
    setScenario: store.setCurrentScenario,
    setGateway: store.setGateway,
    setGatewayInner: store.setGatewayInner,
    setGatewaySpecific: store.setGatewaySpecific,
    clearGateway: store.clearGateway,
    clearScenario: store.clearScenario
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withDispatchGateways);

/***/ }),

/***/ "./package/gateways/hooks/withSelectGateways.js":
/*!******************************************************!*\
  !*** ./package/gateways/hooks/withSelectGateways.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_gatewayAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/gatewayAttr */ "./package/gateways/helpers/gatewayAttr.js");
/* harmony import */ var _helpers_gatewayLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/gatewayLabel */ "./package/gateways/helpers/gatewayLabel.js");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__);



function withSelectGateways(select) {
  const store = select('jet-forms/gateways');
  const gatewayRequestId = store.getCurrentRequestId();
  const gatewaySpecific = store.getGatewaySpecific();
  const scenario = store.getScenario();
  const CURRENT_GATEWAY = store.getGatewayId();
  const {
    id: CURRENT_SCENARIO = 'PAY_NOW'
  } = scenario;
  const {
    use_global: useGlobal = false
  } = gatewaySpecific;
  const currentTab = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__.globalTab)({
    slug: CURRENT_GATEWAY
  });
  const getSpecificOrGlobal = (key, ifEmpty = '') => {
    return useGlobal ? currentTab[key] || ifEmpty : gatewaySpecific[key] || ifEmpty;
  };
  const callableGateway = (0,_helpers_gatewayAttr__WEBPACK_IMPORTED_MODULE_0__["default"])('additional');
  const additionalSourceGateway = callableGateway(CURRENT_GATEWAY);
  const loadingGateway = select('jet-forms/actions').getLoading(gatewayRequestId);
  const globalGatewayLabel = (0,_helpers_gatewayAttr__WEBPACK_IMPORTED_MODULE_0__["default"])('labels');
  const specificGatewayLabel = (0,_helpers_gatewayLabel__WEBPACK_IMPORTED_MODULE_1__["default"])(CURRENT_GATEWAY);
  const customGatewayLabel = function (key) {
    return globalGatewayLabel(`${CURRENT_GATEWAY}.${key}`);
  };
  const scenarioLabel = function (key) {
    return customGatewayLabel(`scenario.${CURRENT_SCENARIO}.${key}`);
  };
  return {
    gatewayGeneral: store.getGateway(),
    gatewayRequest: store.getCurrentRequest(),
    scenarioSource: additionalSourceGateway[CURRENT_SCENARIO] || {},
    currentScenario: scenario[CURRENT_SCENARIO] || {},
    CURRENT_SCENARIO,
    gatewayScenario: scenario,
    additionalSourceGateway,
    gatewaySpecific,
    gatewayRequestId,
    loadingGateway,
    getSpecificOrGlobal,
    globalGatewayLabel,
    specificGatewayLabel,
    customGatewayLabel,
    scenarioLabel
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelectGateways);

/***/ }),

/***/ "./package/gateways/store/actions.js":
/*!*******************************************!*\
  !*** ./package/gateways/store/actions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/gateways/store/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  clearGateway() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].clearGateway
    };
  },
  clearScenario() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].clearScenario
    };
  },
  setRequest(item) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].setRequest,
      item
    };
  },
  setGateway(item) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].setGateway,
      item
    };
  },
  setGatewayInner(item) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].setGatewayInner,
      item
    };
  },
  setGatewaySpecific(item) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].setGatewaySpecific,
      item
    };
  },
  setScenario(item) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].setScenario,
      item
    };
  },
  setCurrentScenario(item) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentScenario,
      item
    };
  },
  registerEventType(item) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].registerEventType,
      item
    };
  },
  hardSetGateway(item, value = '') {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].hardSetGateway,
      item,
      value
    };
  },
  hardSetGatewaySpecific(item, value = '') {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].hardSetGatewaySpecific,
      item,
      value
    };
  }
});

/***/ }),

/***/ "./package/gateways/store/constants.js":
/*!*********************************************!*\
  !*** ./package/gateways/store/constants.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  clearGateway: 'CLEAR_GATEWAY',
  clearScenario: 'CLEAR_SCENARIO',
  setScenario: 'SET_CURRENT_GATEWAY_SCENARIO',
  setGateway: 'SET_CURRENT_GATEWAY',
  setGatewaySpecific: 'SET_CURRENT_GATEWAY_SPECIFIC',
  setGatewayInner: 'SET_CURRENT_GATEWAY_INNER',
  setRequest: 'SET_CURRENT_REQUEST',
  setCurrentScenario: 'SET_CURRENT_SCENARIO',
  registerEventType: 'REGISTER_EVENT_TYPE',
  hardSetGateway: 'HARD_SET_CURRENT_GATEWAY',
  hardSetGatewaySpecific: 'HARD_SET_CURRENT_GATEWAY_SPECIFIC'
});

/***/ }),

/***/ "./package/gateways/store/dispatchers.js":
/*!***********************************************!*\
  !*** ./package/gateways/store/dispatchers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/gateways/store/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./package/gateways/store/selectors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].clearGateway]: state => ({
    ...state,
    currentGateway: {}
  }),
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].clearScenario]: state => ({
    ...state,
    currentScenario: {}
  }),
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].setScenario]: (state, action) => ({
    ...state,
    currentScenario: {
      ...state.currentScenario,
      ...(action.item || {})
    }
  }),
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].setGateway]: (state, action) => ({
    ...state,
    currentGateway: {
      ...state.currentGateway,
      ...action.item
    }
  }),
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].setGatewaySpecific]: (state, action) => ({
    ...state,
    currentGateway: {
      ...state.currentGateway,
      [state.currentGateway.gateway]: {
        ..._selectors__WEBPACK_IMPORTED_MODULE_1__["default"].getGatewaySpecific(state),
        ...action.item
      }
    }
  }),
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].setGatewayInner]: (state, action) => {
    const {
      key,
      value
    } = action.item;
    return {
      ...state,
      currentGateway: {
        ...state.currentGateway,
        [key]: {
          ...(state.currentGateway[key] || {}),
          ...value
        }
      }
    };
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].setRequest]: (state, action) => {
    const items = [_selectors__WEBPACK_IMPORTED_MODULE_1__["default"].getGatewayId(state), action.item?.id].filter(value => value);
    action.item.id = items.join('/');
    return {
      ...state,
      currentRequest: action.item
    };
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentScenario]: (state, action) => ({
    ...state,
    currentScenario: {
      ...state.currentScenario,
      [state.currentScenario?.id]: {
        ...(state.currentScenario[state.currentScenario?.id] || {}),
        ...(action.item || {})
      }
    }
  }),
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].hardSetGateway]: (state, action) => {
    if (action.item) {
      state.currentGateway[action.item] = action.value;
    }
    return {
      ...state
    };
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].hardSetGatewaySpecific]: (state, action) => {
    if (action.item && state.currentGateway?.gateway) {
      state.currentGateway[state.currentGateway?.gateway] = {};
      state.currentGateway[state.currentGateway?.gateway][action.item] = action.value;
    }
    return {
      ...state
    };
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].registerEventType]: (state, action) => {
    var _action$item$gateway, _action$item$scenario;
    const event = {
      ...action.item,
      gateway: (_action$item$gateway = action.item?.gateway) !== null && _action$item$gateway !== void 0 ? _action$item$gateway : state.currentGateway?.gateway,
      scenario: (_action$item$scenario = action.item?.scenario) !== null && _action$item$scenario !== void 0 ? _action$item$scenario : state.currentScenario?.id
    };
    state.eventTypes.push(event);
    return state;
  }
});

/***/ }),

/***/ "./package/gateways/store/index.js":
/*!*****************************************!*\
  !*** ./package/gateways/store/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./package/gateways/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./package/gateways/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./package/gateways/store/selectors.js");



const {
  createReduxStore
} = wp.data;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReduxStore('jet-forms/gateways', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./package/gateways/store/reducer.js":
/*!*******************************************!*\
  !*** ./package/gateways/store/reducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchers */ "./package/gateways/store/dispatchers.js");

const DEFAULT_STATE = {
  currentRequest: {
    id: -1
  },
  currentGateway: {},
  currentScenario: {},
  eventTypes: []
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = DEFAULT_STATE, action) {
  const callback = _dispatchers__WEBPACK_IMPORTED_MODULE_0__["default"][action?.type];
  if (callback) {
    return callback(state, action);
  }
  return state;
}

/***/ }),

/***/ "./package/gateways/store/selectors.js":
/*!*********************************************!*\
  !*** ./package/gateways/store/selectors.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectors = {
  getCurrentRequestId(state) {
    return state.currentRequest.id;
  },
  getCurrentRequest(state) {
    return state.currentRequest;
  },
  getScenario(state) {
    return state.currentScenario;
  },
  getScenarioId(state) {
    return state.currentScenario?.id;
  },
  getGatewayId(state) {
    return state.currentGateway?.gateway;
  },
  getGateway(state) {
    return state.currentGateway;
  },
  getEventTypes(state) {
    return state.eventTypes;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...selectors,
  getGatewaySpecific(state) {
    return state.currentGateway[selectors.getGatewayId(state)] || {};
  }
});

/***/ }),

/***/ "./package/hooks/useIsHasAttribute.js":
/*!********************************************!*\
  !*** ./package/hooks/useIsHasAttribute.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


function useIsHasAttribute(attrName) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();
  const type = blockProps['data-type'];
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const block = select('core/blocks').getBlockType(type);
    return !!block.attributes[attrName];
  }, [attrName, type]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsHasAttribute);

/***/ }),

/***/ "./package/hooks/useOpenEditorPanel.js":
/*!*********************************************!*\
  !*** ./package/hooks/useOpenEditorPanel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useSelect,
  useDispatch
} = wp.data;
function useOpenEditorPanel(panelName) {
  const {
    enableComplementaryArea
  } = useDispatch('core/interface');
  const {
    toggleEditorPanelOpened
  } = useDispatch('core/edit-post');
  const isOpened = useSelect(select => select('core/edit-post').isEditorPanelOpened(panelName), [panelName]);
  return () => {
    // switch from block to post panel
    enableComplementaryArea('core/edit-post', 'edit-post/document');

    // eslint-disable-next-line no-unused-expressions
    !isOpened && toggleEditorPanelOpened(panelName);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOpenEditorPanel);

/***/ }),

/***/ "./package/hooks/useRepeaterState.js":
/*!*******************************************!*\
  !*** ./package/hooks/useRepeaterState.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _repeater_context_safe_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repeater/context/safe.delete */ "./package/repeater/context/safe.delete.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


const {
  useContext
} = wp.element;
const onSaveDeleting = index => {
  // eslint-disable-next-line no-alert
  return confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
  // translators: %d - item index
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Are you sure you want to remove item %d?`, 'jet-form-builder'), index + 1));
};

/**
 * @param  setItemsData
 * @return {{
 * cloneItem: Function,
 * addNewItem: Function,
 * changeCurrentItem: Function,
 * toggleVisible: Function,
 * moveDown: Function,
 * moveUp: Function,
 * removeOption: Function
 * }|null}
 */
// eslint-disable-next-line max-lines-per-function
function useRepeaterState(setItemsData) {
  if ('undefined' === typeof setItemsData) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSafeDeleting = useContext(_repeater_context_safe_delete__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const changeCurrentItem = function (valueToSet, index) {
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      prevClone[index] = {
        ...prev[index],
        ...valueToSet
      };
      return prevClone;
    });
  };
  const removeOption = function (index) {
    if (isSafeDeleting && !onSaveDeleting(index)) {
      return;
    }
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      prevClone.splice(index, 1);
      return prevClone;
    });
  };
  const addNewItem = function (value) {
    setItemsData(prev => [...prev, {
      __visible: true,
      ...value
    }]);
  };
  const cloneItem = function (index) {
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      const [before, after] = [prevClone.slice(0, index + 1), prevClone.slice(index + 1)];
      return [...before, prevClone[index], ...after];
    });
  };
  const moveRepeaterItem = function ({
    oldIndex,
    newIndex
  }) {
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      [prevClone[newIndex], prevClone[oldIndex]] = [prevClone[oldIndex], prevClone[newIndex]];
      return prevClone;
    });
  };
  const moveUp = function (index) {
    moveRepeaterItem({
      oldIndex: index,
      newIndex: index - 1
    });
  };
  const moveDown = function (index) {
    moveRepeaterItem({
      oldIndex: index,
      newIndex: index + 1
    });
  };
  const toggleVisible = function (index) {
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      prevClone[index].__visible = !prevClone[index].__visible;
      return prevClone;
    });
  };
  return {
    changeCurrentItem,
    toggleVisible,
    moveDown,
    moveUp,
    cloneItem,
    addNewItem,
    removeOption
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRepeaterState);

/***/ }),

/***/ "./package/hooks/useSelectPostMeta.js":
/*!********************************************!*\
  !*** ./package/hooks/useSelectPostMeta.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useSelect
} = wp.data;
function useSelectPostMeta(name) {
  const allMeta = useSelect(select => select('core/editor').getEditedPostAttribute('meta') || {});
  return JSON.parse(allMeta[name] || '{}');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSelectPostMeta);

/***/ }),

/***/ "./package/hooks/useSuccessNotice.js":
/*!*******************************************!*\
  !*** ./package/hooks/useSuccessNotice.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useState,
  useEffect
} = wp.element;
const {
  useDispatch
} = wp.data;
function useSuccessNotice(text, options = {}) {
  const [hasCopied, setHasCopied] = useState(false);
  const noticeStore = useDispatch(wp.notices.store);
  useEffect(() => {
    if (hasCopied) {
      noticeStore.createWarningNotice(text, {
        type: 'snackbar',
        ...options
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasCopied]);
  return setHasCopied;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSuccessNotice);

/***/ }),

/***/ "./package/hooks/withSelectFormFields.js":
/*!***********************************************!*\
  !*** ./package/hooks/withSelectFormFields.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  applyFilters
} = wp.hooks;
const getFormFields = (blockParserFunc, blocks) => {
  blocks.forEach(block => {
    blockParserFunc(block);
    if (block.innerBlocks.length) {
      getFormFields(blockParserFunc, block.innerBlocks);
    }
  });
};
const withSelectFormFields = (exclude = [], placeholder = false, suppressFilter = false) => select => {
  let formFields = [];
  const skipFields = ['submit', 'form-break', 'heading', 'group-break', 'conditional', ...exclude];
  getFormFields(block => {
    if (block.name.includes('jet-forms/') && block.attributes.name && !skipFields.find(field => block.name.includes(field))) {
      /*const blockType = select( blocksStore ).getBlockType( block.name );*/

      formFields.push({
        blockName: block.name,
        name: block.attributes.name,
        label: block.attributes.label || block.attributes.name,
        value: block.attributes.name
        //icon: blockType.icon.src,
      });
    }
  }, select('core/block-editor').getBlocks());
  formFields = placeholder ? [{
    value: '',
    label: placeholder
  }, ...formFields] : formFields;
  return {
    formFields: suppressFilter ? formFields : applyFilters('jet.fb.getFormFieldsBlocks', formFields)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelectFormFields);

/***/ }),

/***/ "./package/macros.button/abstract/BaseFilter.js":
/*!******************************************************!*\
  !*** ./package/macros.button/abstract/BaseFilter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BasePopoverItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePopoverItem */ "./package/macros.button/abstract/BasePopoverItem.js");


const {
  __
} = wp.i18n;
function BaseFilter() {
  _BasePopoverItem__WEBPACK_IMPORTED_MODULE_1__["default"].call(this);
}
BaseFilter.prototype = Object.create(_BasePopoverItem__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
BaseFilter.prototype.docArgument = false;
BaseFilter.prototype.help = null;
BaseFilter.prototype.isServerSide = false;
BaseFilter.prototype.isClientSide = false;
BaseFilter.prototype.getArgumentsList = function () {
  if (!this.docArgument || !this.docArgument.length) {
    return null;
  }
  const list = Array.isArray(this.docArgument) ? this.docArgument : [this.docArgument];
  const response = [];
  for (const listElement of list) {
    switch (listElement) {
      case 'string':
      case String:
        response.push(__('String', 'jet-form-builder'));
        break;
      case 'number':
      case Number:
        response.push(__('Number', 'jet-form-builder'));
        break;
      case 'array':
      case Array:
        response.push(__('Array', 'jet-form-builder'));
        break;
      case 'any':
        response.push(__('Anything', 'jet-form-builder'));
        break;
    }
  }
  return response.join(' | ');
};
BaseFilter.prototype.fullHelp = function () {
  if (!this.docArgument && !this.help) {
    return null;
  }
  const Help = this.help;
  const list = this.getArgumentsList();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, list && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '0.5em'
    }
  }, __('Arguments:', 'jet-form-builder') + ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, list)), 'function' !== typeof Help ? Help : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Help, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseFilter);

/***/ }),

/***/ "./package/macros.button/abstract/BaseMacro.js":
/*!*****************************************************!*\
  !*** ./package/macros.button/abstract/BaseMacro.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BasePopoverItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasePopoverItem */ "./package/macros.button/abstract/BasePopoverItem.js");

function BaseMacro() {
  _BasePopoverItem__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
}
BaseMacro.prototype = Object.create(_BasePopoverItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);

/**
 * Can be used in Send Email action & other actions...
 */
BaseMacro.prototype.isServerSide = false;

/**
 * Can be used in Calculated field & other field attributes
 */
BaseMacro.prototype.isClientSide = false;

/**
 * Ex.: CurrentDate
 */
BaseMacro.prototype.name = '';

/**
 * With namespace
 * Ex.: CT
 */
BaseMacro.prototype.namespace = 'CT';

/**
 * @type {null | string | Function}
 */
BaseMacro.prototype.help = null;
BaseMacro.prototype.fullHelp = function () {
  return this.help;
};
BaseMacro.prototype.fullName = function () {
  return `%${this.namespace}::${this.name}%`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseMacro);

/***/ }),

/***/ "./package/macros.button/abstract/BasePopoverItem.js":
/*!***********************************************************!*\
  !*** ./package/macros.button/abstract/BasePopoverItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function BasePopoverItem() {}
BasePopoverItem.prototype = {
  fullName() {},
  fullHelp() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasePopoverItem);

/***/ }),

/***/ "./package/macros.button/components/ClientSideMacros.js":
/*!**************************************************************!*\
  !*** ./package/macros.button/components/ClientSideMacros.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ExtraMacroContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ExtraMacroContext */ "./package/macros.button/context/ExtraMacroContext.js");
/* harmony import */ var _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract/BaseMacro */ "./package/macros.button/abstract/BaseMacro.js");



const {
  useSelect
} = wp.data;
const {
  __
} = wp.i18n;
const thisMacro = new _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_2__["default"]();
thisMacro.fullName = () => '%this%';
thisMacro.fullHelp = () => __('Returns current field value', 'jet-form-builder');
function ClientSideMacros({
  children,
  withThis = false
}) {
  const extra = useSelect(select => select('jet-forms/macros').getClientMacros(), []);
  const value = withThis ? {
    extra,
    afterFields: [thisMacro]
  } : {
    extra
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_ExtraMacroContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: value
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientSideMacros);

/***/ }),

/***/ "./package/macros.button/components/GroupItemsPopover.js":
/*!***************************************************************!*\
  !*** ./package/macros.button/components/GroupItemsPopover.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PopoverItemMacro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopoverItemMacro */ "./package/macros.button/components/PopoverItemMacro.js");


const {
  Children,
  cloneElement
} = wp.element;
const {
  PanelBody
} = wp.components;
function GroupItemsPopover({
  title,
  items,
  children,
  initialOpen
}) {
  const elements = items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PopoverItemMacro__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    current: item
  }));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: title,
    initialOpen: initialOpen
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    style: {
      padding: '0 0.5em'
    }
  }, Children.map(elements, current => cloneElement(current, {}, children))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupItemsPopover);

/***/ }),

/***/ "./package/macros.button/components/MacroFieldItem.js":
/*!************************************************************!*\
  !*** ./package/macros.button/components/MacroFieldItem.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PopoverItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/PopoverItem */ "./package/macros.button/context/PopoverItem.js");


const {
  useContext
} = wp.element;
const {
  Button
} = wp.components;
function MacroFieldItem({
  onClick
}) {
  const field = useContext(_context_PopoverItem__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const value = field.fullName ? field.fullName() : `%${field.value}%`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isLink: true,
    onClick: () => onClick(value)
  }, value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MacroFieldItem);

/***/ }),

/***/ "./package/macros.button/components/MacrosButtonTemplate.js":
/*!******************************************************************!*\
  !*** ./package/macros.button/components/MacrosButtonTemplate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PopoverContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/PopoverContext */ "./package/macros.button/context/PopoverContext.js");


const {
  useState,
  useRef
} = wp.element;
const {
  Button,
  Popover
} = wp.components;
function MacrosButtonTemplate({
  children,
  ...props
}) {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_PopoverContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      showPopover,
      setShowPopover
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    ref: buttonRef,
    icon: 'admin-tools',
    variant: "tertiary",
    isSmall: true,
    className: 'jet-fb-is-thick',
    onClick: () => setShowPopover(prev => !prev),
    ...props
  }), showPopover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
    anchorRef: buttonRef.current,
    position: 'top-start',
    noArrow: false,
    isAlternate: true,
    onFocusOutside: event => {
      /**
       * We should skip handling if focused node it's not equals
       * the button which triggers popover
       */
      if (event.relatedTarget !== buttonRef.current) {
        setShowPopover(false);
      }
    },
    onClose: () => setShowPopover(false)
  }, children));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MacrosButtonTemplate);

/***/ }),

/***/ "./package/macros.button/components/MacrosFields.js":
/*!**********************************************************!*\
  !*** ./package/macros.button/components/MacrosFields.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MacrosFieldsTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MacrosFieldsTemplate */ "./package/macros.button/components/MacrosFieldsTemplate.js");
/* harmony import */ var _MacroFieldItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MacroFieldItem */ "./package/macros.button/components/MacroFieldItem.js");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__);




function MacrosFields({
  onClick = () => {},
  withCurrent = false,
  ...props
}) {
  const fields = (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__.useFields)({
    excludeCurrent: !withCurrent
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MacrosFieldsTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    withCurrent: withCurrent,
    fields: fields,
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MacroFieldItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onClick
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MacrosFields);

/***/ }),

/***/ "./package/macros.button/components/MacrosFieldsTemplate.js":
/*!******************************************************************!*\
  !*** ./package/macros.button/components/MacrosFieldsTemplate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MacrosButtonTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MacrosButtonTemplate */ "./package/macros.button/components/MacrosButtonTemplate.js");
/* harmony import */ var _context_ExtraMacroContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ExtraMacroContext */ "./package/macros.button/context/ExtraMacroContext.js");
/* harmony import */ var _GroupItemsPopover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupItemsPopover */ "./package/macros.button/components/GroupItemsPopover.js");




const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
function MacrosFieldsTemplate({
  children,
  fields,
  ...props
}) {
  var _macros$beforeFields, _macros$afterFields;
  /**
   * @type {{
   * extra: BaseMacro[],
   * filters: BaseFilter[]
   * beforeFields: BasePopoverItem[]
   * afterFields: BasePopoverItem[]
   * }}
   */
  const macros = useContext(_context_ExtraMacroContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const fullFields = [...((_macros$beforeFields = macros.beforeFields) !== null && _macros$beforeFields !== void 0 ? _macros$beforeFields : []), ...fields, ...((_macros$afterFields = macros.afterFields) !== null && _macros$afterFields !== void 0 ? _macros$afterFields : [])];
  if (!fullFields.length && !macros?.extra?.length && !macros?.filters?.length) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MacrosButtonTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  }, Boolean(fullFields.length) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GroupItemsPopover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: __('Fields:', 'jet-form-builder'),
    items: fullFields,
    initialOpen: true
  }, children), Boolean(macros?.extra?.length) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GroupItemsPopover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: __('Extra macros:', 'jet-form-builder'),
    items: macros.extra
  }, children), Boolean(macros?.filters?.length) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GroupItemsPopover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: __('Filters:', 'jet-form-builder'),
    items: macros.filters
  }, children));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MacrosFieldsTemplate);

/***/ }),

/***/ "./package/macros.button/components/PopoverItemMacro.js":
/*!**************************************************************!*\
  !*** ./package/macros.button/components/PopoverItemMacro.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PopoverItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/PopoverItem */ "./package/macros.button/context/PopoverItem.js");
/* harmony import */ var _abstract_BasePopoverItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract/BasePopoverItem */ "./package/macros.button/abstract/BasePopoverItem.js");



const {
  useState
} = wp.element;
const {
  Button
} = wp.components;

/**
 * @param root0          {BasePopoverItem}
 * @param root0.current
 * @param root0.children
 * @class
 */
function PopoverItemMacro({
  current,
  children
}) {
  const [showHelp, setShowHelp] = useState(false);
  if (!(current instanceof _abstract_BasePopoverItem__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_PopoverItem__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
      value: current
    }, children));
  }
  const MacroHelp = current.fullHelp.bind(current);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_PopoverItem__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: current
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6em'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSmall: true,
    variant: "tertiary",
    icon: showHelp ? 'arrow-down' : 'arrow-right',
    className: 'jet-fb-is-thick',
    onClick: () => setShowHelp(prev => !prev)
  }), children), showHelp && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MacroHelp, null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverItemMacro);

/***/ }),

/***/ "./package/macros.button/components/ServerSideMacros.js":
/*!**************************************************************!*\
  !*** ./package/macros.button/components/ServerSideMacros.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ExtraMacroContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ExtraMacroContext */ "./package/macros.button/context/ExtraMacroContext.js");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__);



function ServerSideMacros({
  children
}) {
  const requestFields = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__.useRequestFields)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_ExtraMacroContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      afterFields: requestFields
    }
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerSideMacros);

/***/ }),

/***/ "./package/macros.button/context/ExtraMacroContext.js":
/*!************************************************************!*\
  !*** ./package/macros.button/context/ExtraMacroContext.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const ExtraMacroContext = createContext([]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtraMacroContext);

/***/ }),

/***/ "./package/macros.button/context/PopoverContext.js":
/*!*********************************************************!*\
  !*** ./package/macros.button/context/PopoverContext.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const PopoverContext = createContext(false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverContext);

/***/ }),

/***/ "./package/macros.button/context/PopoverItem.js":
/*!******************************************************!*\
  !*** ./package/macros.button/context/PopoverItem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const PopoverItem = createContext({
  name: ''
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverItem);

/***/ }),

/***/ "./package/macros.button/filters/AddDayFilter.js":
/*!*******************************************************!*\
  !*** ./package/macros.button/filters/AddDayFilter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");

const {
  __
} = wp.i18n;
function AddDayFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.fullName = () => 'addDay';
  this.docArgument = Number;
  this.isClientSide = true;
  this.help = __(`Adds the passed number of days via an argument to a macro that returns a date or a timestamp.`, 'jet-form-builder');
}
AddDayFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddDayFilter);

/***/ }),

/***/ "./package/macros.button/filters/AddMonthFilter.js":
/*!*********************************************************!*\
  !*** ./package/macros.button/filters/AddMonthFilter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");

const {
  __
} = wp.i18n;
function AddMonthFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.fullName = () => 'addMonth';
  this.docArgument = Number;
  this.isClientSide = true;
  this.help = __(`Adds the passed number of months via an argument to a macro that returns a date or a timestamp.`, 'jet-form-builder');
}
AddMonthFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddMonthFilter);

/***/ }),

/***/ "./package/macros.button/filters/AddYearFilter.js":
/*!********************************************************!*\
  !*** ./package/macros.button/filters/AddYearFilter.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");

const {
  __
} = wp.i18n;
function AddYearFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.fullName = () => 'addYear';
  this.docArgument = Number;
  this.isClientSide = true;
  this.help = __(`Adds the passed number of years through an argument to a macro that returns a date or a timestamp.`, 'jet-form-builder');
}
AddYearFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddYearFilter);

/***/ }),

/***/ "./package/macros.button/filters/FallbackFilter.js":
/*!*********************************************************!*\
  !*** ./package/macros.button/filters/FallbackFilter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");

const {
  __
} = wp.i18n;
function FallbackFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.fullName = () => 'ifEmpty';
  this.docArgument = 'any';
  this.isClientSide = true;
  this.help = __(`If the macro returns an empty value, then the filter returns the value passed in the argument`, 'jet-form-builder');
}
FallbackFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallbackFilter);

/***/ }),

/***/ "./package/macros.button/filters/LengthFilter.js":
/*!*******************************************************!*\
  !*** ./package/macros.button/filters/LengthFilter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");

const {
  __
} = wp.i18n;
function LengthFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.fullName = () => 'length';
  this.isClientSide = true;
  this.help = __(`Returns the length of a string or array`, 'jet-form-builder');
}
LengthFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LengthFilter);

/***/ }),

/***/ "./package/macros.button/filters/SubtractDayFilter.js":
/*!************************************************************!*\
  !*** ./package/macros.button/filters/SubtractDayFilter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");

const {
  __
} = wp.i18n;
function SubtractDayFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.fullName = () => 'subDay';
  this.docArgument = Number;
  this.isClientSide = true;
  this.help = __(`Subtracts the number of days by argument from a macro that returns a date or timestamp.`, 'jet-form-builder');
}
SubtractDayFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubtractDayFilter);

/***/ }),

/***/ "./package/macros.button/filters/SubtractMonthFilter.js":
/*!**************************************************************!*\
  !*** ./package/macros.button/filters/SubtractMonthFilter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");

const {
  __
} = wp.i18n;
function SubtractMonthFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.fullName = () => 'subMonth';
  this.docArgument = Number;
  this.isClientSide = true;
  this.help = __(`Subtracts the number of months by argument from a macro that returns a date or timestamp.`, 'jet-form-builder');
}
SubtractMonthFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubtractMonthFilter);

/***/ }),

/***/ "./package/macros.button/filters/SubtractYearFilter.js":
/*!*************************************************************!*\
  !*** ./package/macros.button/filters/SubtractYearFilter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");

const {
  __
} = wp.i18n;
function SubtractYearFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.fullName = () => 'subYear';
  this.docArgument = Number;
  this.isClientSide = true;
  this.help = __(`Subtracts the number of years by argument from a macro that returns a date or timestamp.`, 'jet-form-builder');
}
SubtractYearFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubtractYearFilter);

/***/ }),

/***/ "./package/macros.button/filters/ToDateFilter.js":
/*!*******************************************************!*\
  !*** ./package/macros.button/filters/ToDateFilter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");


const {
  __
} = wp.i18n;
function ToDateFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_1__["default"].call(this);
  this.fullName = () => 'toDate';
  this.isClientSide = true;
  this.help = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, __(`Gets the timestamp from the macro and formats it according to the format of the Date Field.`, 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), __('Example:', 'jet-form-builder') + ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "2022-02-24"));
}
ToDateFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDateFilter);

/***/ }),

/***/ "./package/macros.button/filters/ToDateTimeFilter.js":
/*!***********************************************************!*\
  !*** ./package/macros.button/filters/ToDateTimeFilter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");


const {
  __
} = wp.i18n;
function ToDateTimeFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_1__["default"].call(this);
  this.fullName = () => 'toDateTime';
  this.isClientSide = true;
  this.help = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, __(`Gets the timestamp from the macro and formats it according to the format of the Datetime Field.`, 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), __('Example:', 'jet-form-builder') + ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "2022-02-24T04:25"));
}
ToDateTimeFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDateTimeFilter);

/***/ }),

/***/ "./package/macros.button/filters/ToTimeFilter.js":
/*!*******************************************************!*\
  !*** ./package/macros.button/filters/ToTimeFilter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/BaseFilter */ "./package/macros.button/abstract/BaseFilter.js");


const {
  __
} = wp.i18n;
function ToTimeFilter() {
  _abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_1__["default"].call(this);
  this.fullName = () => 'toTime';
  this.isClientSide = true;
  this.help = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, __(`Gets the timestamp from the macro and formats it according to the format of the Time Field.`, 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), __('Example:', 'jet-form-builder') + ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "04:25"));
}
ToTimeFilter.prototype = Object.create(_abstract_BaseFilter__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToTimeFilter);

/***/ }),

/***/ "./package/macros.button/functions.js":
/*!********************************************!*\
  !*** ./package/macros.button/functions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertMacro: () => (/* binding */ insertMacro)
/* harmony export */ });
/**
 * @param initial     {String}
 * @param name        {String}
 * @param nodeElement {HTMLInputElement}
 */
function insertMacro(initial, name, nodeElement) {
  var _initial;
  const start = nodeElement.selectionStart,
    end = nodeElement.selectionEnd;
  initial = (_initial = initial) !== null && _initial !== void 0 ? _initial : '';
  let startString = initial.slice(0, start);
  const endString = initial.slice(end);
  startString = startString + name;
  setTimeout(() => {
    nodeElement.focus();
    nodeElement.selectionStart = startString.length;
    nodeElement.selectionEnd = startString.length;
  });
  return startString + endString;
}


/***/ }),

/***/ "./package/macros.button/hooks/useInsertMacro.js":
/*!*******************************************************!*\
  !*** ./package/macros.button/hooks/useInsertMacro.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./package/macros.button/functions.js");


const {
  useRef
} = wp.element;
function useInsertMacro(attrName) {
  var _attributes$attrName;
  const [attributes, updateAttributes] = (0,_blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const initial = (_attributes$attrName = attributes[attrName]) !== null && _attributes$attrName !== void 0 ? _attributes$attrName : '';
  const input = useRef();
  const update = macro => {
    updateAttributes({
      [attrName]: (0,_functions__WEBPACK_IMPORTED_MODULE_1__.insertMacro)(initial, macro, input.current)
    });
  };
  return [input, update];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInsertMacro);

/***/ }),

/***/ "./package/macros.button/macros/CurrentDateMacro.js":
/*!**********************************************************!*\
  !*** ./package/macros.button/macros/CurrentDateMacro.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/BaseMacro */ "./package/macros.button/abstract/BaseMacro.js");


const {
  __
} = wp.i18n;
function CurrentDateMacro() {
  _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_1__["default"].call(this);
  this.name = 'CurrentDate';
  this.isClientSide = true;
  this.fullHelp = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, __('Returns the current timestamp. Replacing', 'jet-form-builder'), ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "Date.now()"));
}
CurrentDateMacro.prototype = Object.create(_abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentDateMacro);

/***/ }),

/***/ "./package/macros.button/macros/DayInSecMacro.js":
/*!*******************************************************!*\
  !*** ./package/macros.button/macros/DayInSecMacro.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseMacro */ "./package/macros.button/abstract/BaseMacro.js");

const {
  __
} = wp.i18n;
function DayInSecMacro() {
  _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.name = 'Day_In_Sec';
  this.isClientSide = true;
  this.help = __('Number of milliseconds in one day', 'jet-form-builder');
}
DayInSecMacro.prototype = Object.create(_abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DayInSecMacro);

/***/ }),

/***/ "./package/macros.button/macros/MinInSecMacro.js":
/*!*******************************************************!*\
  !*** ./package/macros.button/macros/MinInSecMacro.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseMacro */ "./package/macros.button/abstract/BaseMacro.js");

const {
  __
} = wp.i18n;
function MinInSecMacro() {
  _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.name = 'Min_In_Sec';
  this.isClientSide = true;
  this.help = __('Number of milliseconds in one minute', 'jet-form-builder');
}
MinInSecMacro.prototype = Object.create(_abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinInSecMacro);

/***/ }),

/***/ "./package/macros.button/macros/MonthInSecMacro.js":
/*!*********************************************************!*\
  !*** ./package/macros.button/macros/MonthInSecMacro.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseMacro */ "./package/macros.button/abstract/BaseMacro.js");

const {
  __
} = wp.i18n;
function MonthInSecMacro() {
  _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.name = 'Month_In_Sec';
  this.isClientSide = true;
  this.help = __('Number of milliseconds in one month', 'jet-form-builder');
}
MonthInSecMacro.prototype = Object.create(_abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthInSecMacro);

/***/ }),

/***/ "./package/macros.button/macros/YearInSecMacro.js":
/*!********************************************************!*\
  !*** ./package/macros.button/macros/YearInSecMacro.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseMacro */ "./package/macros.button/abstract/BaseMacro.js");

const {
  __
} = wp.i18n;
function YearInSecMacro() {
  _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.name = 'Year_In_Sec';
  this.isClientSide = true;
  this.help = __('Number of milliseconds in one year', 'jet-form-builder');
}
YearInSecMacro.prototype = Object.create(_abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YearInSecMacro);

/***/ }),

/***/ "./package/macros.button/store/actions.js":
/*!************************************************!*\
  !*** ./package/macros.button/store/actions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/macros.button/store/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerMacro(items, isClient = true) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].registerMacro,
      items,
      isClient
    };
  }
});

/***/ }),

/***/ "./package/macros.button/store/constants.js":
/*!**************************************************!*\
  !*** ./package/macros.button/store/constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerMacro: 'REGISTER_MACRO',
  registerFilter: 'REGISTER_FILTER'
});

/***/ }),

/***/ "./package/macros.button/store/dispatchers.js":
/*!****************************************************!*\
  !*** ./package/macros.button/store/dispatchers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/macros.button/store/constants.js");
/* harmony import */ var _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/BaseMacro */ "./package/macros.button/abstract/BaseMacro.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].registerMacro](state, action) {
    const {
      items,
      isClient
    } = action;
    const macros = Array.isArray(items) ? items : [items];
    for (const macro of macros) {
      if (macro instanceof _abstract_BaseMacro__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        continue;
      }
      throw new Error('^^^ Invalid macro item ^^^');
    }
    if (isClient) {
      state.clientMacros.push(...macros);
    } else {
      state.serverMacros.push(...macros);
    }
    return state;
  }
});

/***/ }),

/***/ "./package/macros.button/store/index.js":
/*!**********************************************!*\
  !*** ./package/macros.button/store/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./package/macros.button/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./package/macros.button/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./package/macros.button/store/selectors.js");



const {
  createReduxStore
} = wp.data;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReduxStore('jet-forms/macros', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./package/macros.button/store/reducer.js":
/*!************************************************!*\
  !*** ./package/macros.button/store/reducer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchers */ "./package/macros.button/store/dispatchers.js");
/* harmony import */ var _macros_CurrentDateMacro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../macros/CurrentDateMacro */ "./package/macros.button/macros/CurrentDateMacro.js");
/* harmony import */ var _macros_MinInSecMacro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../macros/MinInSecMacro */ "./package/macros.button/macros/MinInSecMacro.js");
/* harmony import */ var _macros_MonthInSecMacro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../macros/MonthInSecMacro */ "./package/macros.button/macros/MonthInSecMacro.js");
/* harmony import */ var _macros_DayInSecMacro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../macros/DayInSecMacro */ "./package/macros.button/macros/DayInSecMacro.js");
/* harmony import */ var _macros_YearInSecMacro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../macros/YearInSecMacro */ "./package/macros.button/macros/YearInSecMacro.js");
/* harmony import */ var _filters_AddDayFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filters/AddDayFilter */ "./package/macros.button/filters/AddDayFilter.js");
/* harmony import */ var _filters_AddMonthFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filters/AddMonthFilter */ "./package/macros.button/filters/AddMonthFilter.js");
/* harmony import */ var _filters_AddYearFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../filters/AddYearFilter */ "./package/macros.button/filters/AddYearFilter.js");
/* harmony import */ var _filters_FallbackFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../filters/FallbackFilter */ "./package/macros.button/filters/FallbackFilter.js");
/* harmony import */ var _filters_LengthFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../filters/LengthFilter */ "./package/macros.button/filters/LengthFilter.js");
/* harmony import */ var _filters_ToDateFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../filters/ToDateFilter */ "./package/macros.button/filters/ToDateFilter.js");
/* harmony import */ var _filters_ToDateTimeFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../filters/ToDateTimeFilter */ "./package/macros.button/filters/ToDateTimeFilter.js");
/* harmony import */ var _filters_ToTimeFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../filters/ToTimeFilter */ "./package/macros.button/filters/ToTimeFilter.js");
/* harmony import */ var _filters_SubtractDayFilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../filters/SubtractDayFilter */ "./package/macros.button/filters/SubtractDayFilter.js");
/* harmony import */ var _filters_SubtractMonthFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../filters/SubtractMonthFilter */ "./package/macros.button/filters/SubtractMonthFilter.js");
/* harmony import */ var _filters_SubtractYearFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../filters/SubtractYearFilter */ "./package/macros.button/filters/SubtractYearFilter.js");


















/**
 *
 * @type {{
 * macros: BaseMacro[],
 * filters: BaseFilter[]
 * }}
 */
const DEFAULT_STATE = {
  macros: [new _macros_CurrentDateMacro__WEBPACK_IMPORTED_MODULE_1__["default"](), new _macros_MinInSecMacro__WEBPACK_IMPORTED_MODULE_2__["default"](), new _macros_DayInSecMacro__WEBPACK_IMPORTED_MODULE_4__["default"](), new _macros_MonthInSecMacro__WEBPACK_IMPORTED_MODULE_3__["default"](), new _macros_YearInSecMacro__WEBPACK_IMPORTED_MODULE_5__["default"]()],
  filters: [new _filters_FallbackFilter__WEBPACK_IMPORTED_MODULE_9__["default"](), new _filters_LengthFilter__WEBPACK_IMPORTED_MODULE_10__["default"](), new _filters_AddDayFilter__WEBPACK_IMPORTED_MODULE_6__["default"](), new _filters_AddMonthFilter__WEBPACK_IMPORTED_MODULE_7__["default"](), new _filters_AddYearFilter__WEBPACK_IMPORTED_MODULE_8__["default"](), new _filters_SubtractDayFilter__WEBPACK_IMPORTED_MODULE_14__["default"](), new _filters_SubtractMonthFilter__WEBPACK_IMPORTED_MODULE_15__["default"](), new _filters_SubtractYearFilter__WEBPACK_IMPORTED_MODULE_16__["default"](), new _filters_ToDateFilter__WEBPACK_IMPORTED_MODULE_11__["default"](), new _filters_ToDateTimeFilter__WEBPACK_IMPORTED_MODULE_12__["default"](), new _filters_ToTimeFilter__WEBPACK_IMPORTED_MODULE_13__["default"]()]
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = DEFAULT_STATE, action) {
  const callback = _dispatchers__WEBPACK_IMPORTED_MODULE_0__["default"][action?.type];
  if (callback) {
    return callback(state, action);
  }
  return state;
}

/***/ }),

/***/ "./package/macros.button/store/selectors.js":
/*!**************************************************!*\
  !*** ./package/macros.button/store/selectors.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectors = {
  getClientMacros(state) {
    return state.macros.filter(
    /**
     * @param macro {BaseMacro}
     */
    function (macro) {
      return macro.isClientSide;
    });
  },
  getServerMacros(state) {
    return state.macros.filter(
    /**
     * @param macro {BaseMacro}
     */
    function (macro) {
      return macro.isServerSide;
    });
  },
  getClientFilters(state) {
    return state.filters.filter(
    /**
     * @param macro {BaseFilter}
     */
    function (macro) {
      return macro.isClientSide;
    });
  },
  getServerFilters(state) {
    return state.filters.filter(
    /**
     * @param macro {BaseFilter}
     */
    function (macro) {
      return macro.isServerSide;
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...selectors
});

/***/ }),

/***/ "./package/migrations/migrate.gateways.settings.js":
/*!*********************************************************!*\
  !*** ./package/migrations/migrate.gateways.settings.js ***!
  \*********************************************************/
/***/ (() => {

const waitForEditor = async () => {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      const postType = wp.data.select('core/editor').getCurrentPostType();
      if (postType) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
};
const getMeta = () => {
  const {
    select
  } = wp.data;
  return select('core/editor').getEditedPostAttribute('meta');
};
const editMeta = (name, objectValue) => {
  const {
    dispatch
  } = wp.data;
  const {
    editPost
  } = dispatch('core/editor');
  const formBuilderMeta = getMeta();
  editPost({
    meta: {
      ...formBuilderMeta,
      [name]: JSON.stringify(objectValue)
    }
  });
};
const getActiveActions = actions => {
  const response = [];
  for (const [actionId, {
    active = false
  }] of Object.entries(actions)) {
    if (!active) {
      continue;
    }
    response.push(+actionId);
  }
  return response;
};
const getGatewaysActions = () => {
  const formBuilderMeta = getMeta();
  let gateways = {},
    actions = [];
  try {
    gateways = JSON.parse(formBuilderMeta._jf_gateways);
  } catch (error) {
    return [];
  }
  if (1 === gateways.last_migrate) {
    throw 'migrated';
  }
  try {
    actions = JSON.parse(formBuilderMeta._jf_actions);
  } catch (error) {
    return [gateways];
  }
  return [gateways, actions];
};
const migrate = (gateways, actions) => {
  var _gateways$notificatio, _gateways$notificatio2, _gateways$notificatio3, _gateways$use_success;
  const onSuccess = getActiveActions((_gateways$notificatio = gateways.notifications_success) !== null && _gateways$notificatio !== void 0 ? _gateways$notificatio : {});
  const onFailed = getActiveActions((_gateways$notificatio2 = gateways.notifications_failed) !== null && _gateways$notificatio2 !== void 0 ? _gateways$notificatio2 : {});
  const onBefore = getActiveActions((_gateways$notificatio3 = gateways.notifications_before) !== null && _gateways$notificatio3 !== void 0 ? _gateways$notificatio3 : {});
  const useRedirect = (_gateways$use_success = gateways.use_success_redirect) !== null && _gateways$use_success !== void 0 ? _gateways$use_success : false;
  let hasRedirect = false;
  if (!onSuccess.length && !onFailed.length && !onBefore.length && !useRedirect) {
    throw 'nothing_to_migrate';
  }
  return actions.map(action => {
    var _action$events;
    action.events = (_action$events = action.events) !== null && _action$events !== void 0 ? _action$events : [];
    if (onSuccess.includes(action.id)) {
      action.events.push('GATEWAY.SUCCESS');
    }
    if (onFailed.includes(action.id)) {
      action.events.push('GATEWAY.FAILED');
    }
    if (onBefore.includes(action.id)) {
      action.events.push('DEFAULT.PROCESS');
    }
    if (useRedirect && !hasRedirect && 'redirect_to_page' === action.type) {
      action.events.push('GATEWAY.SUCCESS');
      hasRedirect = true;
    }
    return action;
  });
};
const runEvent = async () => {
  await waitForEditor();
  let gateways = {},
    actions = [];
  try {
    [gateways = {}, actions = []] = getGatewaysActions();
  } catch (error) {
    return;
  }
  gateways.last_migrate = 1;
  editMeta('_jf_gateways', gateways);
  const withConditions = [];
  try {
    withConditions.push(...migrate(gateways, actions));
  } catch (error) {
    return;
  }
  editMeta('_jf_actions', withConditions);
};
wp.domReady(() => runEvent());

/***/ }),

/***/ "./package/preset/components/AvailableMapFieldPreset.js":
/*!**************************************************************!*\
  !*** ./package/preset/components/AvailableMapFieldPreset.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GroupedSelectControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GroupedSelectControl */ "./package/components/GroupedSelectControl.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



const {
  TextControl,
  SelectControl,
  CustomSelectControl,
  Card,
  CardBody,
  CardHeader
} = wp.components;

// eslint-disable-next-line max-lines-per-function
function AvailableMapFieldPreset({
  fieldsMap,
  field,
  index,
  value,
  onChangeValue,
  isMapFieldVisible
}) {
  let currentVal = null;
  if (!fieldsMap) {
    fieldsMap = {};
  }
  currentVal = fieldsMap[field];
  if (!currentVal || 'object' !== typeof currentVal) {
    currentVal = {};
  }
  const AvailableFieldWrapper = ({
    field: fieldLocal,
    name,
    index: indexLocal,
    fIndex,
    children
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    key: fieldLocal + name + indexLocal + fIndex,
    size: 'extraSmall',
    style: {
      marginBottom: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "jet-label-overflow"
  }, fieldLocal)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, {
    key: fieldLocal + name + indexLocal + fIndex,
    className: 'jet-form-preset__fields-map-item'
  }, children));
  function AvailableFieldWrapperFunc({
    field: fieldLocal,
    name,
    index: indexLocal,
    fIndex
  }, children) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
      key: fieldLocal + name + indexLocal + fIndex,
      size: 'extraSmall',
      style: {
        marginBottom: '10px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "jet-label-overflow"
    }, fieldLocal)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, {
      key: fieldLocal + name + indexLocal + fIndex,
      className: 'jet-form-preset__fields-map-item'
    }, children));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    key: `map_field_preset_${field + index}`
  }, window.JetFormEditorData.presetConfig.map_fields.map((data, fIndex) => {
    const props = {
      field,
      name: data.name,
      index,
      fIndex
    };
    const uniqKey = 'control_' + field + data.name + index + fIndex;
    switch (data.type) {
      case 'text':
        return isMapFieldVisible(value, data, field) && AvailableFieldWrapperFunc(props, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
          key: uniqKey + 'TextControl',
          placeholder: data.label,
          value: currentVal[data.name],
          onChange: newVal => {
            currentVal[data.name] = newVal;
            onChangeValue({
              ...fieldsMap,
              [field]: currentVal
            }, 'fields_map');
          },
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }));
      case 'select':
        return isMapFieldVisible(value, data, field) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AvailableFieldWrapper, {
          ...props,
          key: uniqKey
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
          options: data.options,
          value: currentVal[data.name],
          onChange: newVal => {
            currentVal[data.name] = newVal;
            onChangeValue({
              ...fieldsMap,
              [field]: currentVal
            }, 'fields_map');
          },
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }));
      case 'custom_select':
        return isMapFieldVisible(value, data, field) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AvailableFieldWrapper, {
          ...props,
          key: uniqKey
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomSelectControl, {
          options: data.options,
          onChange: ({
            selectedItem
          }) => {
            currentVal[data.name] = selectedItem.key;
            onChangeValue({
              ...fieldsMap,
              [field]: currentVal
            }, 'fields_map');
          },
          value: data.options.find(option => option.key === currentVal[data.name])
        }));
      case 'grouped_select':
        return isMapFieldVisible(value, data, field) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AvailableFieldWrapper, {
          ...props,
          key: uniqKey
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_GroupedSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
          options: data.options,
          value: currentVal[data.name],
          onChange: newVal => {
            currentVal[data.name] = newVal;
            onChangeValue({
              ...fieldsMap,
              [field]: currentVal
            }, 'fields_map');
          }
        }));
      default:
        return null;
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvailableMapFieldPreset);

/***/ }),

/***/ "./package/preset/components/DynamicPreset.js":
/*!****************************************************!*\
  !*** ./package/preset/components/DynamicPreset.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withPreset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withPreset */ "./package/preset/components/withPreset.js");
/* harmony import */ var _GlobalFieldPreset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalFieldPreset */ "./package/preset/components/GlobalFieldPreset.js");
/* harmony import */ var _MapFieldPreset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapFieldPreset */ "./package/preset/components/MapFieldPreset.js");
/* harmony import */ var _context_ControlPresetRestrictionContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ControlPresetRestrictionContext */ "./package/preset/context/ControlPresetRestrictionContext.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);









// eslint-disable-next-line max-lines-per-function
let DynamicPreset = function ({
  value,
  onChange,
  parseValue,
  excludeOptions,
  isCurrentFieldVisible,
  isVisible
}) {
  var _stateValue$restricte, _stateValue$restricte2;
  const position = 'dynamic';
  const stateValue = parseValue(value);
  const restrictionContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_ControlPresetRestrictionContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const onChangeValue = (newValue, name) => {
    onChange(() => JSON.stringify({
      ...stateValue,
      [name]: newValue
    }));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Flex, {
    direction: "column",
    gap: 4
  }, window.JetFormEditorData.presetConfig.global_fields.map((data, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GlobalFieldPreset__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: `current_field_${data.name}_${index}`,
    value: stateValue,
    index: index,
    data: data,
    excludeOptions: excludeOptions,
    onChangeValue: onChangeValue,
    isVisible: isVisible,
    position: position
  })), window.JetFormEditorData.presetConfig.map_fields.map((data, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MapFieldPreset__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: `current_field_${data.name}_${index}`,
    currentState: stateValue,
    value: stateValue['current_field_' + data.name],
    index: index,
    data: data,
    onChangeValue: onChangeValue,
    isCurrentFieldVisible: isCurrentFieldVisible,
    position: position
  })), restrictionContext?.show && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Restrict access', 'jet-form-builder'),
    help: ((_stateValue$restricte = stateValue.restricted) !== null && _stateValue$restricte !== void 0 ? _stateValue$restricte : true) ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)(`Will set default value from preset only for users who allowed to edit this value`, 'jet-form-builder') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)(`Always set default value from preset. Make sure it can't be accidentally changed from form Actions`, 'jet-form-builder'),
    checked: (_stateValue$restricte2 = stateValue.restricted) !== null && _stateValue$restricte2 !== void 0 ? _stateValue$restricte2 : true,
    onChange: restricted => onChange(prev => JSON.stringify({
      ...prev,
      restricted: restricted ? undefined : restricted
    }))
  }));
};
DynamicPreset = (0,_withPreset__WEBPACK_IMPORTED_MODULE_1__["default"])(DynamicPreset);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicPreset);

/***/ }),

/***/ "./package/preset/components/FieldWithPreset.js":
/*!******************************************************!*\
  !*** ./package/preset/components/FieldWithPreset.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../action-modal/components/ActionModal */ "./package/action-modal/components/ActionModal.js");


const {
  Path,
  SVG,
  BaseControl
} = wp.components;
const {
  useState
} = wp.element;
function FieldWithPreset({
  children = null,
  ModalEditor,
  triggerClasses = [],
  baseControlProps = {}
}) {
  const [modalState, setModalState] = useState(false);
  const changeModalState = () => {
    setModalState(prev => !prev);
  };
  const classNames = ['jet-form-dynamic-preset__trigger', ...triggerClasses].join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    className: "jet-form-dynamic-preset",
    ...baseControlProps
  }, children, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classNames,
    onClick: changeModalState
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
    viewBox: "0 0 54 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
    d: "M42.6396 26.4347C37.8682 27.3436 32.5666 28.0252 27.1894 28.0252C21.8121 28.0252 16.4348 27.3436 11.7391 26.4347C6.96774 25.4502 3.18093 23.8597 0.37868 21.9663L0.37868 28.0252C0.37868 29.5399 1.59046 31.1304 3.78682 32.4179C5.98317 33.7054 9.46704 34.9172 13.6325 35.5988C17.798 36.2805 22.115 36.8106 27.1894 36.8106C32.2637 36.8106 36.6564 36.5077 40.7462 35.5988C44.8359 34.69 48.3198 33.7054 50.5162 32.4179C52.7125 31.1304 54 29.5399 54 28.0252L54 21.9663C51.122 23.8597 47.3352 25.4502 42.6396 26.4347ZM42.6396 53.5484C37.8682 54.5329 32.5666 55.1388 27.1894 55.1388C21.8121 55.1388 16.4348 54.5329 11.7391 53.5484C7.04348 52.5638 3.18093 51.0491 0.378682 49.1556L0.378682 55.1388C0.378683 56.7293 1.59046 58.3197 3.78682 59.5315C6.36186 60.819 9.46705 62.1066 13.6325 62.7125C17.7223 63.697 22.115 64 27.1894 64C32.2637 64 36.6564 63.697 40.7462 62.7125C44.8359 61.8036 48.3198 60.819 50.5162 59.5315C52.7125 57.9411 54 56.7293 54 54.8359L54 48.8527C51.122 51.0491 47.3352 52.2608 42.6396 53.5484ZM42.6396 39.9915C37.8682 40.9004 32.5666 41.582 27.1894 41.582C21.8121 41.582 16.4348 40.9004 11.7391 39.9915C6.96774 39.007 3.18093 37.4922 0.378681 35.5988L0.378681 41.582C0.378681 43.1725 1.59046 44.6872 3.78682 45.9747C6.36185 47.2622 9.46705 48.474 13.6325 49.1556C17.7223 50.0645 22.115 50.3674 27.1894 50.3674C32.2637 50.3674 36.6564 50.0645 40.7462 49.1556C44.8359 48.1711 48.3198 47.2622 50.5162 45.9747C52.7125 44.3843 54 43.1725 54 41.582L54 35.5988C51.122 37.4922 47.3352 39.007 42.6396 39.9915ZM40.4432 2.12337C36.3535 1.13879 31.885 0.835848 26.8864 0.835849C21.8878 0.835849 17.4194 1.13879 13.2539 2.12337C9.08836 3.10794 5.68022 4.01678 3.48387 5.3043C1.28751 6.59181 -3.4782e-06 8.10654 -3.33916e-06 9.697L-2.95513e-06 14.0897C-2.81609e-06 15.6802 1.28752 17.2706 3.48387 18.5582C6.05891 19.7699 9.1641 21.0575 13.2539 21.6633C17.3436 22.2692 21.8121 22.9509 26.8864 22.9509C31.9607 22.9509 36.3535 22.9509 40.4432 22.345C44.533 21.7391 48.0169 20.4516 50.2132 19.164C52.7125 17.5736 54 15.9831 54 14.3927L54 9.99995C54 8.40948 52.7125 6.81902 50.5162 5.60724C48.3198 4.39546 44.533 2.72926 40.4432 2.12337Z",
    fill: "#7E8993"
  })))), modalState && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onRequestClose: changeModalState,
    classNames: ['width-60'],
    title: 'Edit Preset'
  }, modalProps => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ModalEditor, {
    ...modalProps
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldWithPreset);

/***/ }),

/***/ "./package/preset/components/GlobalFieldPreset.js":
/*!********************************************************!*\
  !*** ./package/preset/components/GlobalFieldPreset.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  TextControl,
  SelectControl
} = wp.components;
function GlobalFieldPreset({
  data,
  value,
  index,
  onChangeValue,
  isVisible,
  excludeOptions = options => options,
  position
}) {
  switch (data.type) {
    case 'text':
      return isVisible(value, data, position) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: 'field_' + data.name + index,
        className: 'jet-form-preset__row'
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        key: data.name + index,
        label: data.label,
        value: value[data.name],
        onChange: newVal => {
          onChangeValue(newVal, data.name);
        },
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }));
    case 'select':
      return isVisible(value, data, position) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: 'field_' + data.name + index,
        className: 'jet-form-preset__row'
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
        key: data.name + index,
        options: excludeOptions(data.options),
        label: data.label,
        value: value[data.name],
        onChange: newVal => {
          onChangeValue(newVal, data.name);
        },
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }));
  }
  return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalFieldPreset);

/***/ }),

/***/ "./package/preset/components/MapFieldPreset.js":
/*!*****************************************************!*\
  !*** ./package/preset/components/MapFieldPreset.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GroupedSelectControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GroupedSelectControl */ "./package/components/GroupedSelectControl.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__);





// eslint-disable-next-line max-lines-per-function
function MapFieldPreset({
  data,
  value,
  index,
  currentState,
  onChangeValue,
  isCurrentFieldVisible
}) {
  switch (data.type) {
    case 'text':
      return isCurrentFieldVisible(currentState, data) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: data.name + index,
        className: 'jet-form-preset__row'
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        key: 'control_' + data.name + index,
        placeholder: data.label,
        value: value,
        onChange: newVal => {
          onChangeValue(newVal, 'current_field_' + data.name);
        },
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }));
    case 'select':
      return isCurrentFieldVisible(currentState, data) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: data.name + index,
        className: 'jet-form-preset__row'
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        key: 'control_' + data.name + index,
        options: data.options,
        label: data.label,
        value: value,
        onChange: newVal => {
          onChangeValue(newVal, 'current_field_' + data.name);
        },
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }));
    case 'custom_select':
      return isCurrentFieldVisible(currentState, data) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: data.name + index,
        className: 'jet-form-preset__row'
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CustomSelectControl, {
        className: "jet-custom-select-control",
        label: data.label,
        options: data.options,
        onChange: ({
          selectedItem
        }) => {
          value = selectedItem.key;
          onChangeValue(value, 'current_field_' + data.name);
        },
        value: data.options.find(option => option.key === value)
      }));
    case 'grouped_select':
      return isCurrentFieldVisible(currentState, data) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: data.name + index
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.Label, null, data.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_GroupedSelectControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        options: data.options,
        value: value,
        onChange: newVal => {
          onChangeValue(newVal, 'current_field_' + data.name);
        }
      }));
  }
  return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapFieldPreset);

/***/ }),

/***/ "./package/preset/components/PresetButton.js":
/*!***************************************************!*\
  !*** ./package/preset/components/PresetButton.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DynamicPreset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicPreset */ "./package/preset/components/DynamicPreset.js");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






function PresetButton({
  value,
  onChange,
  title
}) {
  const [showModal, setShowModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const [stateValue, setStateValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(value);
  const updateClick = () => {
    onChange(stateValue);
    setShowModal(false);
  };
  const cancelClick = () => {
    setShowModal(false);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: 'database',
    variant: "tertiary",
    isSmall: true,
    className: 'jet-fb-is-thick',
    onClick: () => setShowModal(true)
  }), showModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    size: "medium",
    title: title !== null && title !== void 0 ? title : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Edit Preset', 'jet-form-builder'),
    onRequestClose: () => setShowModal(false),
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.ModalFooterStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DynamicPreset__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: 'dynamic_key_preset',
    value: stateValue,
    onChange: setStateValue
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.StickyModalActions, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    onClick: updateClick
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Update', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSecondary: true,
    onClick: cancelClick
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Cancel', 'jet-form-builder')))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PresetButton);

/***/ }),

/***/ "./package/preset/components/withPreset.js":
/*!*************************************************!*\
  !*** ./package/preset/components/withPreset.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  applyFilters
} = wp.hooks;

// eslint-disable-next-line max-lines-per-function
function withPreset(WrappedComponent) {
  // eslint-disable-next-line max-lines-per-function
  return function JetFormPresetEditor(props) {
    const parseValue = () => {
      let val = {};
      if ('object' === typeof props.value) {
        val = {
          ...props.value
        };
      } else if (props.value && 'string' === typeof props.value) {
        try {
          val = JSON.parse(props.value);
          // eslint-disable-next-line max-depth
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
    const isVisible = (currentState, data, position) => {
      return (data.position && position === data.position || !data.position || 'query_var' !== currentState.from) && isGlobalVisible(currentState, data);
    };
    const isGlobalVisible = (currentState, data) => {
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
    const isCurrentFieldVisible = (currentState, data, position) => {
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
    const isMapFieldVisible = (currentState, data, field) => {
      if (!data.condition && !data.parent_condition) {
        return true;
      }
      if (data.parent_condition && !data.condition) {
        return currentState[data.parent_condition.field] === data.parent_condition.value;
      } else if (data.parent_condition && data.condition) {
        if (!currentState.fields_map || !currentState.fields_map[field]) {
          return false;
        }
        return currentState.fields_map[field][data.condition.field] === data.condition.value && currentState[data.parent_condition.field] === data.parent_condition.value;
      } else if (!data.parent_condition && data.condition) {
        if (!currentState.fields_map || !currentState.fields_map[field]) {
          return false;
        }
        return currentState.fields_map[field][data.condition.field] === data.condition.value;
      }
      return true;
    };
    const excludeOptions = selectOptions => {
      const options = [...selectOptions];
      options.forEach((option, index) => {
        if (props.excludeSources && props.excludeSources.includes(option.value)) {
          options.splice(index, 1);
        }
      });
      return options;
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, {
      key: "wrapped-preset-editor",
      ...props,
      parseValue: parseValue,
      isVisible: isVisible,
      isMapFieldVisible: isMapFieldVisible,
      isCurrentFieldVisible: isCurrentFieldVisible,
      excludeOptions: excludeOptions
    });
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPreset);

/***/ }),

/***/ "./package/preset/context/ControlPresetRestrictionContext.js":
/*!*******************************************************************!*\
  !*** ./package/preset/context/ControlPresetRestrictionContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const ControlPresetRestrictionContext = createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlPresetRestrictionContext);

/***/ }),

/***/ "./package/preset/helpers/humanReadablePreset.js":
/*!*******************************************************!*\
  !*** ./package/preset/helpers/humanReadablePreset.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPresetString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPresetString */ "./package/preset/helpers/isPresetString.js");

const {
  __
} = wp.i18n;
function humanReadablePreset(value, highlight = 'code') {
  var _value, _parsedPreset$from;
  value = (_value = value) !== null && _value !== void 0 ? _value : '';
  if (!(0,_isPresetString__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  const parsedPreset = JSON.parse(value);
  const label = __('Preset from', 'jet-form-builder');
  const from = (_parsedPreset$from = parsedPreset?.from) !== null && _parsedPreset$from !== void 0 ? _parsedPreset$from : '(empty)';
  let highlightedFrom;
  switch (highlight) {
    case 'code':
      highlightedFrom = `<code>${from}</code>`;
      break;
    case 'b':
      highlightedFrom = `<b>${from}</b>`;
      break;
  }
  return [label, highlightedFrom].join(' ');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (humanReadablePreset);

/***/ }),

/***/ "./package/preset/helpers/isPresetString.js":
/*!**************************************************!*\
  !*** ./package/preset/helpers/isPresetString.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isPresetString(preset) {
  let parsedPreset;
  try {
    parsedPreset = JSON.parse(preset);
  } catch (error) {
    return false;
  }
  return !!parsedPreset?.jet_preset;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPresetString);

/***/ }),

/***/ "./package/repeater/components/RepeaterWithState.js":
/*!**********************************************************!*\
  !*** ./package/repeater/components/RepeaterWithState.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





// eslint-disable-next-line max-lines-per-function
function RepeaterWithState({
  children,
  ItemHeading,
  repeaterClasses = [],
  repeaterItemClasses = [],
  newItem,
  addNewButtonLabel = 'Add New',
  items = [],
  isSaveAction,
  onSaveItems,
  onUnMount,
  onAddNewItem,
  onRemoveItem,
  help = {
    helpSource: {},
    helpVisible: () => false,
    helpKey: ''
  },
  additionalControls = null
}) {
  const classNames = ['jet-form-builder__repeater-component', ...repeaterClasses].join(' ');
  const itemClassNames = ['jet-form-builder__repeater-component-item', ...repeaterItemClasses].join(' ');
  const parsedItems = () => {
    if (items && items.length > 0) {
      return items.map(item => {
        item.__visible = false;
        return item;
      });
    }
    return [{
      ...newItem,
      __visible: true
    }];
  };
  const [itemsData, setItemsData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setItemsData(parsedItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [isSafeDeleting, setSafeDeleting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const changeCurrentItem = (valueToSet, index) => {
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      prevClone[index] = {
        ...prev[index],
        ...valueToSet
      };
      return prevClone;
    });
  };
  const onSaveDeleting = index => {
    // eslint-disable-next-line no-alert
    return confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    // translators: %d - item index
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Are you sure you want to remove item %d?`, 'jet-form-builder'), index + 1));
  };
  const removeOption = index => {
    if (isSafeDeleting && !onSaveDeleting(index) || onRemoveItem && !onRemoveItem(index, itemsData)) {
      return;
    }
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      prevClone.splice(index, 1);
      return prevClone;
    });
  };
  const addNewItem = value => {
    if (onAddNewItem) {
      onAddNewItem(value, itemsData);
    }
    setItemsData(prev => [...prev, {
      ...value,
      __visible: true
    }]);
  };
  const cloneItem = index => {
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      const [before, after] = [prevClone.slice(0, index + 1), prevClone.slice(index + 1)];
      return [...before, prevClone[index], ...after];
    });
  };
  const moveRepeaterItem = ({
    oldIndex,
    newIndex
  }) => {
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      [prevClone[newIndex], prevClone[oldIndex]] = [prevClone[oldIndex], prevClone[newIndex]];
      return prevClone;
    });
  };
  const moveUp = index => {
    moveRepeaterItem({
      oldIndex: index,
      newIndex: index - 1
    });
  };
  const moveDown = index => {
    moveRepeaterItem({
      oldIndex: index,
      newIndex: index + 1
    });
  };
  const isDisabledEnd = index => {
    return !(index < itemsData.length - 1);
  };
  /*
  	 */

  const toggleVisible = index => {
    setItemsData(prev => {
      const prevClone = JSON.parse(JSON.stringify(prev));
      prevClone[index].__visible = !prevClone[index].__visible;
      return prevClone;
    });
  };

  /* eslint-disable max-depth */

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (true === isSaveAction) {
      for (const itemsDataKey in itemsData) {
        for (const itemKey in itemsData[itemsDataKey]) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSaveAction]);

  /* eslint-enable max-depth */

  const getRepeaterItemId = index => `jet-form-builder-repeater__item_${index}`;
  const {
    helpSource,
    helpVisible,
    helpKey
  } = help;
  const isVisibleHelp = helpVisible(itemsData) && helpSource && helpSource[helpKey];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classNames,
    key: 'jet-form-builder-repeater'
  }, isVisibleHelp && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, helpSource[helpKey].label), 0 < itemsData.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Safe deleting', 'jet-form-builder'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
    style: {
      flex: 'unset',
      marginBottom: '1em'
    }
  }))), additionalControls, itemsData.map((currentItem, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, {
    elevation: 2,
    className: itemClassNames,
    key: getRepeaterItemId(index)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
    className: 'repeater__item__header'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "repeater-item__left-heading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: 'repeater-action-buttons'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    icon: currentItem.__visible ? 'no-alt' : 'edit',
    onClick: () => toggleVisible(index),
    className: 'repeater-action-button'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isSecondary: true,
    disabled: !Boolean(index),
    icon: 'arrow-up-alt2',
    onClick: () => moveUp(index),
    className: 'repeater-action-button'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isSecondary: true,
    disabled: isDisabledEnd(index),
    icon: 'arrow-down-alt2',
    onClick: () => moveDown(index),
    className: 'repeater-action-button'
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'repeater-item-title'
  }, ItemHeading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ItemHeading, {
    currentItem: currentItem,
    index: index,
    changeCurrentItem: data => changeCurrentItem(data, index)
  }), !ItemHeading && `#${index + 1}`)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isSecondary: true,
    onClick: () => cloneItem(index)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clone', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isSecondary: true,
    isDestructive: true,
    onClick: () => removeOption(index)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete', 'jet-form-builder')))), currentItem.__visible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
    className: 'repeater-item__content'
  }, children && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    key: `repeater-component__item_${index}`
  }, 'function' === typeof children && children({
    currentItem,
    changeCurrentItem: data => changeCurrentItem(data, index),
    currentIndex: index
  }), 'function' !== typeof children && children), !children && 'Set up your Repeater Template, please.'))), 1 < itemsData.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, additionalControls, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    className: "jet-control-clear",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Safe deleting', 'jet-form-builder'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSecondary: true,
    onClick: () => addNewItem(newItem)
  }, addNewButtonLabel));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterWithState);

/***/ }),

/***/ "./package/repeater/components/repeater.add.new.js":
/*!*********************************************************!*\
  !*** ./package/repeater/components/repeater.add.new.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useRepeaterState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRepeaterState */ "./package/hooks/useRepeaterState.js");
/* harmony import */ var _context_repeater_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/repeater.state */ "./package/repeater/context/repeater.state.js");



const {
  Button
} = wp.components;
const {
  useContext
} = wp.element;

/**
 * @param  props {{ item, onSetState, functions, children }}
 * @return {JSX.Element}
 * @class
 */
function RepeaterAddNew(props) {
  var _ref;
  const {
    item,
    onSetState,
    functions,
    children
  } = props;

  /* eslint-disable react-hooks/rules-of-hooks */

  const {
    addNewItem
  } = (_ref = functions !== null && functions !== void 0 ? functions : (0,_hooks_useRepeaterState__WEBPACK_IMPORTED_MODULE_1__["default"])(onSetState)) !== null && _ref !== void 0 ? _ref : useContext(_context_repeater_state__WEBPACK_IMPORTED_MODULE_2__["default"]);

  /* eslint-disable react-hooks/rules-of-hooks */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    icon: 'plus-alt2',
    isSecondary: true,
    onClick: () => addNewItem(item)
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterAddNew);

/***/ }),

/***/ "./package/repeater/components/repeater.add.or.js":
/*!********************************************************!*\
  !*** ./package/repeater/components/repeater.add.or.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useRepeaterState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useRepeaterState */ "./package/hooks/useRepeaterState.js");
/* harmony import */ var _context_repeater_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/repeater.state */ "./package/repeater/context/repeater.state.js");



const {
  Button
} = wp.components;
const {
  useContext
} = wp.element;
function RepeaterAddOrOperator(props) {
  var _ref;
  const {
    onSetState,
    functions,
    children
  } = props;

  /* eslint-disable react-hooks/rules-of-hooks */

  const {
    addNewItem
  } = (_ref = functions !== null && functions !== void 0 ? functions : (0,_hooks_useRepeaterState__WEBPACK_IMPORTED_MODULE_1__["default"])(onSetState)) !== null && _ref !== void 0 ? _ref : useContext(_context_repeater_state__WEBPACK_IMPORTED_MODULE_2__["default"]);

  /* eslint-disable react-hooks/rules-of-hooks */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSecondary: true,
    icon: 'randomize',
    onClick: () => addNewItem({
      __visible: false,
      or_operator: true
    })
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterAddOrOperator);

/***/ }),

/***/ "./package/repeater/components/repeater.js":
/*!*************************************************!*\
  !*** ./package/repeater/components/repeater.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_repeater_custom_item_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/repeater.custom.item.head */ "./package/repeater/context/repeater.custom.item.head.js");
/* harmony import */ var _context_repeater_custom_item_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/repeater.custom.item.buttons */ "./package/repeater/context/repeater.custom.item.buttons.js");
/* harmony import */ var _hooks_useRepeaterState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useRepeaterState */ "./package/hooks/useRepeaterState.js");
/* harmony import */ var _context_repeater_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/repeater.item */ "./package/repeater/context/repeater.item.js");
/* harmony import */ var _context_repeater_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/repeater.state */ "./package/repeater/context/repeater.state.js");
/* harmony import */ var _macros_button_components_MacrosButtonTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../macros.button/components/MacrosButtonTemplate */ "./package/macros.button/components/MacrosButtonTemplate.js");
/* harmony import */ var _macros_button_context_PopoverContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../macros.button/context/PopoverContext */ "./package/macros.button/context/PopoverContext.js");








const {
  Card,
  ButtonGroup,
  Button,
  CardHeader,
  CardBody
} = wp.components;
const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;

/**
 * @param  props {{ items, onSetState, functions, children }}
 * @return {JSX.Element}
 * @class
 */
// eslint-disable-next-line max-lines-per-function
function Repeater(props) {
  var _ref;
  const {
    items,
    onSetState,
    functions,
    children
  } = props;

  /* eslint-disable react-hooks/rules-of-hooks */

  const {
    cloneItem,
    moveUp,
    moveDown,
    toggleVisible,
    changeCurrentItem,
    removeOption
  } = (_ref = functions !== null && functions !== void 0 ? functions : (0,_hooks_useRepeaterState__WEBPACK_IMPORTED_MODULE_3__["default"])(onSetState)) !== null && _ref !== void 0 ? _ref : useContext(_context_repeater_state__WEBPACK_IMPORTED_MODULE_5__["default"]);

  /* eslint-enable react-hooks/rules-of-hooks */

  const {
    isSupported: isSupportedHeader,
    render: CustomHeader
  } = useContext(_context_repeater_custom_item_head__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const {
    edit: supportEdit,
    move: supportMove,
    clone: supportClone,
    delete: supportDelete
  } = useContext(_context_repeater_custom_item_buttons__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const RepeaterHeader = ({
    currentItem,
    index
  }) => {
    if (isSupportedHeader(currentItem)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomHeader, {
        currentItem: currentItem,
        index: index
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'repeater-item-title'
    }, `#${index + 1}`);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'jet-form-builder__repeater-component',
    key: 'jet-form-builder-repeater'
  }, items.map((currentItem, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
    size: "small",
    elevation: 2,
    className: 'jet-form-builder__repeater-component-item',
    key: `jet-form-builder__repeater-component-item-${index}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardHeader, {
    className: 'repeater__item__header'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "repeater-item__left-heading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
    className: 'repeater-action-buttons'
  }, (!supportEdit || supportEdit(currentItem)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    variant: "tertiary",
    isSmall: true,
    icon: currentItem.__visible ? 'no-alt' : 'edit',
    onClick: () => toggleVisible(index),
    className: 'repeater-action-button jet-fb-is-thick'
  }), (!supportMove || supportMove(currentItem)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    variant: "tertiary",
    isSmall: true,
    isSecondary: true,
    disabled: !Boolean(index),
    icon: 'arrow-up-alt2',
    onClick: () => moveUp(index),
    className: 'repeater-action-button jet-fb-is-thick'
  }), (!supportMove || supportMove(currentItem)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    variant: "tertiary",
    isSmall: true,
    isSecondary: true,
    disabled: !(index < items.length - 1),
    icon: 'arrow-down-alt2',
    onClick: () => moveDown(index),
    className: 'repeater-action-button jet-fb-is-thick'
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RepeaterHeader, {
    currentItem: currentItem,
    index: index
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, null, (!supportClone || supportClone(currentItem)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    variant: "tertiary",
    isSmall: true,
    isSecondary: true,
    onClick: () => cloneItem(index),
    className: 'jet-fb-is-thick',
    icon: 'admin-page'
  }), (!supportDelete || supportDelete(currentItem)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_macros_button_components_MacrosButtonTemplate__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: 'trash',
    isDestructive: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_macros_button_context_PopoverContext__WEBPACK_IMPORTED_MODULE_7__["default"].Consumer, null, ({
    setShowPopover
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '0.5em',
      width: 'max-content'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __('Delete this item?', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isLink: true,
    isDestructive: true,
    onClick: () => removeOption(index)
  }, __('Yes', 'jet-form-builder')), ' / ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isLink: true,
    onClick: () => setShowPopover(false)
  }, __('No', 'jet-form-builder'))))))), currentItem.__visible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CardBody, {
    className: 'repeater-item__content',
    key: `jet-form-builder__card-body-${index}`
  }, (() => {
    const context = {
      currentItem,
      changeCurrentItem: data => changeCurrentItem(data, index),
      currentIndex: index
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_repeater_item__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: context
    }, !children && 'Set up your Repeater Template, please.', 'function' === typeof children ? children(context) : children);
  })()))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Repeater);

/***/ }),

/***/ "./package/repeater/components/repeater.state.js":
/*!*******************************************************!*\
  !*** ./package/repeater/components/repeater.state.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_repeater_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/repeater.state */ "./package/repeater/context/repeater.state.js");
/* harmony import */ var _hooks_useRepeaterState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useRepeaterState */ "./package/hooks/useRepeaterState.js");



function RepeaterState({
  state,
  children
}) {
  const functions = (0,_hooks_useRepeaterState__WEBPACK_IMPORTED_MODULE_2__["default"])(state);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_repeater_state__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: functions
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterState);

/***/ }),

/***/ "./package/repeater/components/safe.delete.toggle.js":
/*!***********************************************************!*\
  !*** ./package/repeater/components/safe.delete.toggle.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_safe_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/safe.delete */ "./package/repeater/context/safe.delete.js");


const {
  ToggleControl
} = wp.components;
const {
  __
} = wp.i18n;
const {
  useState
} = wp.element;
function SafeDeleteToggle(props) {
  const [isSafeDeleting, setSafeDeleting] = useState(true);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Safe deleting', 'jet-form-builder'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_safe_delete__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: isSafeDeleting
  }, props.children));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SafeDeleteToggle);

/***/ }),

/***/ "./package/repeater/context/repeater.custom.item.body.js":
/*!***************************************************************!*\
  !*** ./package/repeater/context/repeater.custom.item.body.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  // eslint-disable-next-line no-unused-vars
  isSupported: item => false,
  render: ({
    children
  }) => children
}));

/***/ }),

/***/ "./package/repeater/context/repeater.custom.item.buttons.js":
/*!******************************************************************!*\
  !*** ./package/repeater/context/repeater.custom.item.buttons.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-unused-vars */

const RepeaterButtonsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  edit: item => true,
  move: item => true,
  clone: item => true,
  delete: item => true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterButtonsContext);

/***/ }),

/***/ "./package/repeater/context/repeater.custom.item.head.js":
/*!***************************************************************!*\
  !*** ./package/repeater/context/repeater.custom.item.head.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-unused-vars */

const RepeaterHeadContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isSupported: item => false,
  render: ({
    currentItem,
    index
  }) => null
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterHeadContext);

/***/ }),

/***/ "./package/repeater/context/repeater.item.js":
/*!***************************************************!*\
  !*** ./package/repeater/context/repeater.item.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const RepeaterItemContext = createContext({
  currentItem: {},
  changeCurrentItem: () => {},
  currentIndex: -1
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterItemContext);

/***/ }),

/***/ "./package/repeater/context/repeater.state.js":
/*!****************************************************!*\
  !*** ./package/repeater/context/repeater.state.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const RepeaterStateContext = createContext(false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterStateContext);

/***/ }),

/***/ "./package/repeater/context/safe.delete.js":
/*!*************************************************!*\
  !*** ./package/repeater/context/safe.delete.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContext(false));

/***/ }),

/***/ "./package/store.manager.js":
/*!**********************************!*\
  !*** ./package/store.manager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gateways_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateways/store */ "./package/gateways/store/index.js");
/* harmony import */ var _events_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/store */ "./package/events/store/index.js");
/* harmony import */ var _block_conditions_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-conditions/store */ "./package/block-conditions/store/index.js");
/* harmony import */ var _macros_button_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macros.button/store */ "./package/macros.button/store/index.js");
/* harmony import */ var _validation_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation/store */ "./package/validation/store/index.js");
/* harmony import */ var _blocks_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/store */ "./package/blocks/store/index.js");
/* harmony import */ var _migrations_migrate_gateways_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./migrations/migrate.gateways.settings */ "./package/migrations/migrate.gateways.settings.js");
/* harmony import */ var _migrations_migrate_gateways_settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_migrations_migrate_gateways_settings__WEBPACK_IMPORTED_MODULE_6__);







const {
  register,
  dispatch
} = wp.data;
const {
  addAction
} = wp.hooks;
const stores = [_gateways_store__WEBPACK_IMPORTED_MODULE_0__["default"], _events_store__WEBPACK_IMPORTED_MODULE_1__["default"], _block_conditions_store__WEBPACK_IMPORTED_MODULE_2__["default"], _macros_button_store__WEBPACK_IMPORTED_MODULE_3__["default"], _validation_store__WEBPACK_IMPORTED_MODULE_4__["default"], _blocks_store__WEBPACK_IMPORTED_MODULE_5__["default"]];
stores.forEach(register);
dispatch('jet-forms/events').register(window.jetFormEvents.types);
dispatch('jet-forms/events').lockActions();
dispatch('jet-forms/validation').register(window.jetFormValidation);
addAction('jet.fb.change.blockConditions.renderState', 'jet-form-builder/events', function (states) {
  dispatch('jet-forms/events').clearDynamicEvents();
  const events = states.map(({
    value
  }) => {
    value = 'ON.' + value;
    return {
      value,
      label: value,
      isDynamic: true
    };
  });
  dispatch('jet-forms/events').register(events);
});
dispatch('jet-forms/block-conditions').register(window.jetFormBlockConditions);

/***/ }),

/***/ "./package/tools.js":
/*!**************************!*\
  !*** ./package/tools.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assetUrl: () => (/* binding */ assetUrl),
/* harmony export */   classnames: () => (/* binding */ classnames),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   convertObjectToOptionsList: () => (/* binding */ convertObjectToOptionsList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   event: () => (/* binding */ event),
/* harmony export */   extendPrototype: () => (/* binding */ extendPrototype),
/* harmony export */   getConvertedName: () => (/* binding */ getConvertedName),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   listen: () => (/* binding */ listen),
/* harmony export */   maybeCyrToLatin: () => (/* binding */ maybeCyrToLatin),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

class Tools {
  static withPlaceholder(source, label = '--', value = '') {
    return [{
      label,
      value
    }, ...source];
  }
  static getRandomID() {
    return Math.floor(Math.random() * 8999) + 1000;
  }
}
const event = name => {
  const initializeCallbacksEvent = new Event(name);
  return () => document.dispatchEvent(initializeCallbacksEvent);
};
const listen = (name, func) => {
  document.addEventListener(name, func);
};
function column(listArr, name) {
  if (!listArr?.length) {
    return [];
  }
  return listArr.map(current => {
    return 'object' === typeof current ? current[name] : current;
  });
}
const convertSymbols = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.applyFilters)('jet.fb.tools.convertSymbols', {
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
  let slug = valueToChange.toLowerCase();

  // Replace accents
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Replace cyrillic
  slug = maybeCyrToLatin(slug);

  // Get list of words
  const slugParts = slug.match(/\b(\w+)\b/g);
  slug = '';
  for (const [slugIndex, slugPart] of Object.entries(slugParts)) {
    slug += (0 === +slugIndex ? '' : '_') + slugPart;
    const isLast = 1 + +slugIndex === slugParts.length;
    if (slug.length > 60) {
      return slug + (isLast ? '' : '__');
    }
  }
  return slug;
}
function classnames(...additional) {
  const result = [];
  const parseValues = source => {
    source.forEach(itemClass => {
      if (!itemClass) {
        return;
      }
      if (Array.isArray(itemClass)) {
        parseValues(itemClass);
      }
      if ('string' === typeof itemClass) {
        result.push(itemClass.trim());
      }
      if ('object' !== typeof itemClass) {
        return;
      }
      for (const itemClassKey in itemClass) {
        if (itemClass[itemClassKey]) {
          result.push((itemClassKey + '').trim());
        }
      }
    });
  };
  parseValues(additional);
  return result.join(' ');
}
function convertObjectToOptionsList(entries = [], {
  usePlaceholder = true,
  label = '--',
  value = ''
} = {}) {
  const placeholder = {
    label,
    value
  };
  if (!entries) {
    return usePlaceholder ? [placeholder] : [];
  }
  const options = Object.entries(entries).map(option => {
    return {
      value: option.value,
      label: option.label
    };
  });
  return usePlaceholder ? [placeholder, ...options] : options;
}
function assetUrl(url = '') {
  return JetFormEditorData.assetsUrl + url;
}

/**
 * @since 3.1.0
 *
 * @param  obj
 * @param  path
 * @param  value
 * @return {*}
 */
function set(obj, path, value) {
  // Create a shallow copy of the object
  const newObj = JSON.parse(JSON.stringify(obj));
  let currentObj = newObj;
  let currentKey;

  // Traverse the object according to the path
  for (let i = 0; i < path.length; i++) {
    currentKey = path[i];

    // If the current key doesn't exist, create a new object at that key
    if (!currentObj[currentKey]) {
      currentObj[currentKey] = {};
    }

    // Update the current object and key
    if (i === path.length - 1) {
      // If this is the last key in the path, set the value
      currentObj[currentKey] = value;
    } else {
      // Otherwise, continue traversing the object
      currentObj[currentKey] = {
        ...currentObj[currentKey]
      };
      currentObj = currentObj[currentKey];
    }
  }
  return newObj;
}

/**
 * @since 3.1.0
 *
 * @param  value
 * @return {boolean}
 */
function isEmpty(value) {
  if (null === value || undefined === value) {
    return true;
  }
  if ('object' === typeof value && !Array.isArray(value)) {
    return !Object.keys(value)?.length;
  }
  if ('number' === typeof value) {
    return 0 === value;
  }
  return !value?.length;
}
const extendPrototype = ParentFunction => {
  function ChildFunctionPrototype() {
    ParentFunction.call(this);
  }
  ChildFunctionPrototype.prototype = Object.create(ParentFunction.prototype);
  return ChildFunctionPrototype;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);

/***/ }),

/***/ "./package/validation/classes/MessageItem.js":
/*!***************************************************!*\
  !*** ./package/validation/classes/MessageItem.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  store: blocksStore
} = wp.blocks;
class MessageItem {
  constructor(message) {
    this.id = message.id;
    this.blocks = [];
    this.setBlocksMeta(message.supported);
  }
  setBlocksMeta(blocks) {
    if (!blocks.length) {
      return;
    }
    this.blocks = blocks.map(block => {
      const blockType = wp.data.select(blocksStore).getBlockType(`jet-forms/${block}`);
      return {
        title: blockType.title,
        icon: blockType.icon.src
      };
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageItem);

/***/ }),

/***/ "./package/validation/classes/ValidationMessages.js":
/*!**********************************************************!*\
  !*** ./package/validation/classes/ValidationMessages.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageItem */ "./package/validation/classes/MessageItem.js");

class ValidationMessages {
  constructor() {
    this.items = [];
  }
  push(message) {
    this.items.push(new _MessageItem__WEBPACK_IMPORTED_MODULE_0__["default"](message));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationMessages);

/***/ }),

/***/ "./package/validation/components/AdvancedRuleItem.js":
/*!***********************************************************!*\
  !*** ./package/validation/components/AdvancedRuleItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditRulesModalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditRulesModalContext */ "./package/validation/components/EditRulesModalContext.js");
/* harmony import */ var _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _components_DetailsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DetailsContainer */ "./package/components/DetailsContainer.js");
/* harmony import */ var _components_HoverContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/HoverContainer */ "./package/components/HoverContainer.js");
/* harmony import */ var _HumanReadableRule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HumanReadableRule */ "./package/validation/components/HumanReadableRule.js");






const {
  useContext,
  useState
} = wp.element;
const {
  __
} = wp.i18n;
const {
  Button
} = wp.components;

// eslint-disable-next-line max-lines-per-function
function AdvancedRuleItem({
  rule,
  index = 0
}) {
  const {
    setShowModal
  } = useContext(_EditRulesModalContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const [attributes, setAttributes] = (0,_blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [isHover, setHover] = useState(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-fb p-relative",
    onMouseOver: () => setHover(true),
    onFocus: () => setHover(true),
    onMouseOut: () => setHover(false),
    onBlur: () => setHover(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_HoverContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isHover: isHover
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSmall: true,
    isSecondary: true,
    icon: 'edit',
    onClick: () => {
      setAttributes({
        validation: {
          ...attributes.validation,
          rules: attributes.validation.rules.map((current, currentIndex) => {
            current.__visible = index === currentIndex;
            return current;
          })
        }
      });
      setShowModal(prev => !prev);
    }
  }, __('Edit', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSmall: true,
    isDestructive: true,
    icon: 'trash',
    onClick: () => {
      setAttributes({
        validation: {
          ...attributes.validation,
          rules: attributes.validation.rules.filter((current, currentIndex) => currentIndex !== index)
        }
      });
    }
  }, __('Delete', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DetailsContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HumanReadableRule__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rule: rule
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedRuleItem);

/***/ }),

/***/ "./package/validation/components/AdvancedRuleModalItem.js":
/*!****************************************************************!*\
  !*** ./package/validation/components/AdvancedRuleModalItem.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools */ "./package/tools.js");
/* harmony import */ var _repeater_context_repeater_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repeater/context/repeater.item */ "./package/repeater/context/repeater.item.js");
/* harmony import */ var _components_BaseHelp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BaseHelp */ "./package/components/BaseHelp.js");
/* harmony import */ var _components_AdvancedModalControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AdvancedModalControl */ "./package/components/AdvancedModalControl.js");
/* harmony import */ var _ChooseRelatedField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChooseRelatedField */ "./package/validation/components/ChooseRelatedField.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7__);








const {
  SelectControl,
  TextareaControl,
  TextControl,
  withFilters
} = wp.components;
const {
  useContext,
  useState,
  useEffect
} = wp.element;
const {
  __
} = wp.i18n;
const {
  addFilter
} = wp.hooks;
const {
  rule_types: ruleTypes,
  ssr_callbacks: ssrCallbacks
} = window.jetFormValidation;
const ssrCallbacksKeys = ssrCallbacks.map(({
  value
}) => value);
function getLabel(type) {
  var _ruleTypes$indexRule$;
  const indexRule = ruleTypes.findIndex(({
    value
  }) => value === type);
  const fallback = __('Enter value', 'jet-form-builder');
  if (-1 === indexRule) {
    return fallback;
  }
  return (_ruleTypes$indexRule$ = ruleTypes[indexRule]?.control_label) !== null && _ruleTypes$indexRule$ !== void 0 ? _ruleTypes$indexRule$ : fallback;
}
function RuleSpecificControls({
  currentItem,
  changeCurrentItem
}) {
  const [label, setLabel] = useState(() => getLabel(currentItem.type));
  useEffect(() => {
    setLabel(getLabel(currentItem.type));
  }, [currentItem.type]);
  switch (currentItem.type) {
    case 'equal':
    case 'contain':
    case 'contain_not':
    case 'regexp':
    case 'regexp_not':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ChooseRelatedField__WEBPACK_IMPORTED_MODULE_5__["default"], null), !Boolean(currentItem.field) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AdvancedModalControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: currentItem.value,
        label: label,
        onChangePreset: value => changeCurrentItem({
          value
        }),
        onChangeMacros: name => {
          var _currentItem$value;
          return changeCurrentItem({
            value: ((_currentItem$value = currentItem.value) !== null && _currentItem$value !== void 0 ? _currentItem$value : '') + name
          });
        }
      }, ({
        instanceId
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
        id: instanceId,
        value: currentItem.value,
        onChange: value => changeCurrentItem({
          value
        })
      })));
    default:
      return null;
  }
}
addFilter('jet.fb.advanced.rule.controls', 'jet-form-builder',
// eslint-disable-next-line max-lines-per-function
DefaultControls => props => {
  const {
    currentItem,
    changeCurrentItem
  } = props;
  const [showDetails, setShowDetails] = useState(false);
  const [actions] = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7__.useActions)();
  const hasSaveRecord = actions.some(current => current.type === 'save_record' && (current.is_execute === undefined || current.is_execute === true)) ? 'success' : 'error';
  if ('ssr' !== currentItem.type) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DefaultControls, {
      ...props
    });
  }
  const functionName = currentItem.value || 'custom_jfb_field_validation';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    labelPosition: "side",
    options: _tools__WEBPACK_IMPORTED_MODULE_1__["default"].withPlaceholder(ssrCallbacks, __('Custom function', 'jet-form-builder')),
    label: __('Choose callback', 'jet-form-builder'),
    value: currentItem.value,
    onChange: value => changeCurrentItem({
      value
    })
  }), 'is_field_value_unique' === currentItem.value && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Notice, {
    status: hasSaveRecord,
    isDismissible: false
  }, __('This callback requires the Save Form Record action to work correctly.', 'jet-form-builder')), !ssrCallbacksKeys.includes(currentItem.value) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Function name', 'jet-form-builder'),
    value: currentItem.value,
    onChange: value => changeCurrentItem({
      value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BaseHelp__WEBPACK_IMPORTED_MODULE_3__["default"], null, __('Example of registering a function below.', 'jet-form-builder') + ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "javascript:void(0)",
    onClick: () => setShowDetails(prev => !prev)
  }, showDetails ? __('Hide', 'jet-form-builder') : __('Show', 'jet-form-builder'))), showDetails && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, `/**
 * To get all the values of the fields in the form, you can use the expression:
 * jet_fb_request_handler()->get_request() or $context->get_request()
 *
 * If the field is located in the middle of the repeater, then only
 * jet_fb_request_handler()->get_request(), but $context->get_request() 
 * will return the values of all fields of the current repeater element
 *
 * @param $value mixed
 * @param $context \\Jet_Form_Builder\\Request\\Parser_Context
 *
 * @return bool
 */
function ${functionName}( $value, $context ): bool {
	// your logic
	return true;
}`)));
});
const RuleControls = withFilters('jet.fb.advanced.rule.controls')(RuleSpecificControls);
function AdvancedRuleModalItem() {
  const {
    currentItem,
    changeCurrentItem
  } = useContext(_repeater_context_repeater_item__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    labelPosition: "side",
    options: _tools__WEBPACK_IMPORTED_MODULE_1__["default"].withPlaceholder(ruleTypes),
    label: __('Rule type', 'jet-form-builder'),
    value: currentItem.type,
    onChange: type => changeCurrentItem({
      type
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RuleControls, {
    currentItem: currentItem,
    changeCurrentItem: changeCurrentItem
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    label: __('Error message', 'jet-form-builder'),
    value: currentItem.message,
    onChange: message => changeCurrentItem({
      message
    })
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedRuleModalItem);

/***/ }),

/***/ "./package/validation/components/AdvancedRulesIsEmpty.js":
/*!***************************************************************!*\
  !*** ./package/validation/components/AdvancedRulesIsEmpty.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditRulesModalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditRulesModalContext */ "./package/validation/components/EditRulesModalContext.js");
/* harmony import */ var _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _components_DetailsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DetailsContainer */ "./package/components/DetailsContainer.js");
/* harmony import */ var _components_HoverContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/HoverContainer */ "./package/components/HoverContainer.js");





const {
  useContext,
  useState
} = wp.element;
const {
  __
} = wp.i18n;
const {
  Button
} = wp.components;
function AdvancedRulesIsEmpty() {
  const {
    setShowModal
  } = useContext(_EditRulesModalContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const [attributes, setAttributes] = (0,_blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [isHover, setHover] = useState(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-fb p-relative",
    onMouseOver: () => setHover(true),
    onFocus: () => setHover(true),
    onMouseOut: () => setHover(false),
    onBlur: () => setHover(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_HoverContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isHover: isHover
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSmall: true,
    isSecondary: true,
    icon: 'plus-alt2',
    onClick: () => {
      setAttributes({
        validation: {
          ...attributes.validation,
          rules: [{
            __visible: true
          }]
        }
      });
      setShowModal(prev => !prev);
    }
  }, __('Add new', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DetailsContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-title": __('You have no rules for this field.', 'jet-form-builder')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-title": __('Please click here to add new.', 'jet-form-builder')
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedRulesIsEmpty);

/***/ }),

/***/ "./package/validation/components/AdvancedRulesList.js":
/*!************************************************************!*\
  !*** ./package/validation/components/AdvancedRulesList.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _AdvancedRulesIsEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdvancedRulesIsEmpty */ "./package/validation/components/AdvancedRulesIsEmpty.js");
/* harmony import */ var _components_ContainersList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ContainersList */ "./package/components/ContainersList.js");
/* harmony import */ var _AdvancedRuleItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdvancedRuleItem */ "./package/validation/components/AdvancedRuleItem.js");





const {
  __
} = wp.i18n;
const {
  Children,
  cloneElement
} = wp.element;
const renderGroup = (current, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, __('AND', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AdvancedRuleItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
  rule: current,
  index: index
}));
function getRulesList(rules) {
  const andRules = rules.filter((c, index) => 0 !== index);
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AdvancedRuleItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rule: rules[0],
    key: "first_item"
  }), ...andRules.map((item, index) => renderGroup(item, index + 1))];
}
function AdvancedRulesList() {
  const [attributes] = (0,_blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (!attributes?.validation?.rules?.length) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AdvancedRulesIsEmpty__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ContainersList__WEBPACK_IMPORTED_MODULE_3__["default"], null, Children.map(getRulesList(attributes.validation.rules), cloneElement));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedRulesList);

/***/ }),

/***/ "./package/validation/components/AdvancedRulesModal.js":
/*!*************************************************************!*\
  !*** ./package/validation/components/AdvancedRulesModal.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _action_modal_hooks_useOnUpdateModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-modal/hooks/useOnUpdateModal */ "./package/action-modal/hooks/useOnUpdateModal.js");
/* harmony import */ var _repeater_components_repeater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../repeater/components/repeater */ "./package/repeater/components/repeater.js");
/* harmony import */ var _repeater_components_repeater_add_new__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../repeater/components/repeater.add.new */ "./package/repeater/components/repeater.add.new.js");
/* harmony import */ var _AdvancedRuleModalItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdvancedRuleModalItem */ "./package/validation/components/AdvancedRuleModalItem.js");
/* harmony import */ var _repeater_components_repeater_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../repeater/components/repeater.state */ "./package/repeater/components/repeater.state.js");
/* harmony import */ var _repeater_context_repeater_custom_item_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../repeater/context/repeater.custom.item.head */ "./package/repeater/context/repeater.custom.item.head.js");
/* harmony import */ var _helpers_humanReadableRule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/humanReadableRule */ "./package/validation/helpers/humanReadableRule.js");









const {
  useState
} = wp.element;
const {
  __
} = wp.i18n;
function AdvancedRulesModal() {
  const [attributes, setAttributes] = (0,_blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const [current, setCurrent] = useState(() => {
    var _attributes$validatio;
    return (_attributes$validatio = attributes.validation?.rules) !== null && _attributes$validatio !== void 0 ? _attributes$validatio : [];
  });
  (0,_action_modal_hooks_useOnUpdateModal__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    setAttributes(prev => ({
      ...prev,
      validation: {
        ...attributes.validation,
        rules: current
      }
    }));
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_repeater_components_repeater_state__WEBPACK_IMPORTED_MODULE_6__["default"], {
    state: setCurrent
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_repeater_context_repeater_custom_item_head__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: {
      isSupported: () => true,
      render: ({
        currentItem
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: 'repeater-item-title',
        dangerouslySetInnerHTML: {
          __html: (0,_helpers_humanReadableRule__WEBPACK_IMPORTED_MODULE_8__["default"])(currentItem)
        }
      })
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_repeater_components_repeater__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: current
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AdvancedRuleModalItem__WEBPACK_IMPORTED_MODULE_5__["default"], null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_repeater_components_repeater_add_new__WEBPACK_IMPORTED_MODULE_4__["default"], null, __('Add Rule', 'jet-form-builder')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedRulesModal);

/***/ }),

/***/ "./package/validation/components/ChooseRelatedField.js":
/*!*************************************************************!*\
  !*** ./package/validation/components/ChooseRelatedField.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repeater_context_repeater_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repeater/context/repeater.item */ "./package/repeater/context/repeater.item.js");
/* harmony import */ var _blocks_helpers_getFieldsWithoutCurrent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/helpers/getFieldsWithoutCurrent */ "./package/blocks/helpers/getFieldsWithoutCurrent.js");



const {
  SelectControl
} = wp.components;
const {
  useContext,
  useMemo
} = wp.element;
const {
  __
} = wp.i18n;
function ChooseRelatedField() {
  const {
    currentItem,
    changeCurrentItem
  } = useContext(_repeater_context_repeater_item__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const fields = useMemo(() => (0,_blocks_helpers_getFieldsWithoutCurrent__WEBPACK_IMPORTED_MODULE_2__["default"])(__('Custom value', 'jet-form-builder')), []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    labelPosition: "side",
    options: fields,
    label: __('Choose field', 'jet-form-builder'),
    value: currentItem.field,
    onChange: field => changeCurrentItem({
      field
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChooseRelatedField);

/***/ }),

/***/ "./package/validation/components/EditAdvancedRulesButton.js":
/*!******************************************************************!*\
  !*** ./package/validation/components/EditAdvancedRulesButton.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdvancedRulesModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdvancedRulesModal */ "./package/validation/components/AdvancedRulesModal.js");
/* harmony import */ var _action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-modal/components/ActionModal */ "./package/action-modal/components/ActionModal.js");
/* harmony import */ var _AdvancedRulesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdvancedRulesList */ "./package/validation/components/AdvancedRulesList.js");
/* harmony import */ var _EditRulesModalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditRulesModalContext */ "./package/validation/components/EditRulesModalContext.js");





const {
  useState
} = wp.element;
const {
  __
} = wp.i18n;
function EditAdvancedRulesButton() {
  const [showModal, setShowModal] = useState(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditRulesModalContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      showModal,
      setShowModal
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-fb mb-24"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AdvancedRulesList__WEBPACK_IMPORTED_MODULE_3__["default"], null))), showModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: __('Edit Advanced Rules', 'jet-form-builder'),
    classNames: ['width-60'],
    onRequestClose: () => setShowModal(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AdvancedRulesModal__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditAdvancedRulesButton);

/***/ }),

/***/ "./package/validation/components/EditRulesModalContext.js":
/*!****************************************************************!*\
  !*** ./package/validation/components/EditRulesModalContext.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const EditRulesModalContext = createContext({
  showModal: false,
  setShowModal: () => {}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditRulesModalContext);

/***/ }),

/***/ "./package/validation/components/HumanReadableRule.js":
/*!************************************************************!*\
  !*** ./package/validation/components/HumanReadableRule.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_humanReadableRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/humanReadableRule */ "./package/validation/helpers/humanReadableRule.js");


const {
  __
} = wp.i18n;
function HumanReadableRule({
  rule
}) {
  return rule.type ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-title": __('Rule:', 'jet-form-builder'),
    dangerouslySetInnerHTML: {
      __html: (0,_helpers_humanReadableRule__WEBPACK_IMPORTED_MODULE_1__["default"])(rule)
    }
  }), Boolean(rule.message) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-title": __('Message:', 'jet-form-builder'),
    dangerouslySetInnerHTML: {
      __html: rule.message
    }
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-title": __('The rule is not fully configured.', 'jet-form-builder')
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HumanReadableRule);

/***/ }),

/***/ "./package/validation/components/ValidationBlockMessage.js":
/*!*****************************************************************!*\
  !*** ./package/validation/components/ValidationBlockMessage.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/hooks/useUniqKey */ "./package/blocks/hooks/useUniqKey.js");
/* harmony import */ var jet_form_builder_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-data */ "jet-form-builder-data");
/* harmony import */ var jet_form_builder_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_getItemByName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getItemByName */ "./package/validation/helpers/getItemByName.js");





const {
  TextControl
} = wp.components;
function ValidationBlockMessage({
  name
}) {
  var _args$messages, _attributes$validatio, _messages$name;
  const uniqKey = (0,_blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [attributes, setAttributes] = (0,_blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const [args] = (0,jet_form_builder_data__WEBPACK_IMPORTED_MODULE_3__.useMetaState)('_jf_validation', '{}', []);
  const isInherit = !attributes.validation?.type;
  const messages = isInherit ? (_args$messages = args?.messages) !== null && _args$messages !== void 0 ? _args$messages : {} : (_attributes$validatio = attributes.validation?.messages) !== null && _attributes$validatio !== void 0 ? _attributes$validatio : {};
  const current = (0,_helpers_getItemByName__WEBPACK_IMPORTED_MODULE_4__["default"])(name);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    disabled: isInherit,
    key: uniqKey('massage_' + name),
    label: current?.label,
    help: current?.help,
    value: (_messages$name = messages[name]) !== null && _messages$name !== void 0 ? _messages$name : current?.initial,
    onChange: value => setAttributes(prev => ({
      ...prev,
      validation: {
        ...attributes.validation,
        messages: {
          ...messages,
          [name]: value
        }
      }
    }))
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationBlockMessage);

/***/ }),

/***/ "./package/validation/components/ValidationMetaMessage.js":
/*!****************************************************************!*\
  !*** ./package/validation/components/ValidationMetaMessage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_getItemByName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getItemByName */ "./package/validation/helpers/getItemByName.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "../../node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @linaria/react */ "../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__);

/* eslint-disable import/no-extraneous-dependencies */





const _exp = /*#__PURE__*/() => _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"];
const StyledIcon = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_5__.styled)(_exp())({
  name: "StyledIcon",
  class: "sfqmk5y",
  propsAsIs: true
});
function ValidationMetaMessage({
  message,
  update,
  value = null,
  help = null
}) {
  const current = (0,_helpers_getItemByName__WEBPACK_IMPORTED_MODULE_1__["default"])(message.id);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.Label, {
    htmlFor: message.id
  }, current.label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    style: {
      width: 'auto'
    }
  }, message.blocks.map(block => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    key: 'message_block_item' + block.title,
    text: block.title,
    delay: 200,
    position: 'top center'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledIcon, {
    icon: block.icon
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.ClearBaseControlStyle,
    id: message.id,
    help: help !== null && help !== void 0 ? help : current?.help,
    value: value !== null && value !== void 0 ? value : current?.initial,
    onChange: messageText => update(prev => ({
      ...prev,
      [message.id]: messageText
    })),
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationMetaMessage);
__webpack_require__(/*! ./ValidationMetaMessage.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ValidationMetaMessage.js */ "./package/validation/components/ValidationMetaMessage.wyw-in-js.css!=!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/validation/components/ValidationMetaMessage.js");

/***/ }),

/***/ "./package/validation/components/ValidationToggleGroup.js":
/*!****************************************************************!*\
  !*** ./package/validation/components/ValidationToggleGroup.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/hooks/useUniqKey */ "./package/blocks/hooks/useUniqKey.js");



const {
  __experimentalToggleGroupControl: ToggleGroupControl,
  __experimentalToggleGroupControlOption: ToggleGroupControlOption
} = wp.components;
const {
  __
} = wp.i18n;
let {
  formats
} = window.jetFormValidation;
function ValidationToggleGroup({
  excludeBrowser = false
}) {
  var _attributes$validatio;
  const [attributes, setAttributes] = (0,_blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const uniqKey = (0,_blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_2__["default"])();
  formats = formats.filter(({
    value
  }) => value !== 'browser' || !excludeBrowser);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupControl, {
    onChange: type => setAttributes(prev => ({
      ...prev,
      validation: {
        ...attributes.validation,
        type
      }
    })),
    value: (_attributes$validatio = attributes.validation?.type) !== null && _attributes$validatio !== void 0 ? _attributes$validatio : '',
    label: __('Validation type', 'jet-form-builder'),
    isBlock: true,
    isAdaptiveWidth: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupControlOption, {
    label: __('Inherit', 'jet-form-builder'),
    value: '',
    "aria-label": __('Inherit from form\'s args', 'jet-form-builder'),
    showTooltip: true
  }), formats.map(current => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupControlOption, {
    key: uniqKey(current.value + '_key'),
    label: current.label,
    value: current.value,
    "aria-label": current.title,
    showTooltip: true
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationToggleGroup);

/***/ }),

/***/ "./package/validation/helpers/getItemByName.js":
/*!*****************************************************!*\
  !*** ./package/validation/helpers/getItemByName.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  messages
} = window.jetFormValidation;
function getItemByName(findName) {
  return messages.find(({
    id
  }) => findName === id);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItemByName);

/***/ }),

/***/ "./package/validation/helpers/humanReadableRule.js":
/*!*********************************************************!*\
  !*** ./package/validation/helpers/humanReadableRule.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  select
} = wp.data;

/**
 * @param  rule
 * @return {boolean|string}
 */
function humanReadableRule(rule) {
  return select('jet-forms/validation').readRule(rule);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (humanReadableRule);

/***/ }),

/***/ "./package/validation/hooks/useGroupedValidationMessages.js":
/*!******************************************************************!*\
  !*** ./package/validation/hooks/useGroupedValidationMessages.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_ValidationMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/ValidationMessages */ "./package/validation/classes/ValidationMessages.js");

const {
  messages
} = window.jetFormValidation;
const {
  useState
} = wp.element;
const sorted = messages.sort((prev, next) => {
  return prev.supported.length - next.supported.length;
});
function getGroupedMessages() {
  const groups = new _classes_ValidationMessages__WEBPACK_IMPORTED_MODULE_0__["default"]();
  for (const message of sorted) {
    groups.push(message);
  }
  return groups.items;
}
function useGroupedValidationMessages() {
  const [messagesState] = useState(getGroupedMessages);
  return messagesState;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGroupedValidationMessages);

/***/ }),

/***/ "./package/validation/store/actions.js":
/*!*********************************************!*\
  !*** ./package/validation/store/actions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/validation/store/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  register(items) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].register,
      items
    };
  }
});

/***/ }),

/***/ "./package/validation/store/constants.js":
/*!***********************************************!*\
  !*** ./package/validation/store/constants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  register: 'REGISTER'
});

/***/ }),

/***/ "./package/validation/store/dispatchers.js":
/*!*************************************************!*\
  !*** ./package/validation/store/dispatchers.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./package/validation/store/constants.js");

const dispatchers = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].register](state, action) {
    const {
      messages,
      ssr_callbacks,
      formats,
      rule_types
    } = action.items;
    state.messages = JSON.parse(JSON.stringify(messages));
    state.ssrCallbacks = JSON.parse(JSON.stringify(ssr_callbacks));
    state.formats = JSON.parse(JSON.stringify(formats));
    state.ruleTypes = JSON.parse(JSON.stringify(rule_types));
    return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...dispatchers
});

/***/ }),

/***/ "./package/validation/store/index.js":
/*!*******************************************!*\
  !*** ./package/validation/store/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./package/validation/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./package/validation/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./package/validation/store/selectors.js");



const {
  createReduxStore
} = wp.data;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReduxStore('jet-forms/validation', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./package/validation/store/reducer.js":
/*!*********************************************!*\
  !*** ./package/validation/store/reducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchers */ "./package/validation/store/dispatchers.js");
/* harmony import */ var _preset_helpers_humanReadablePreset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../preset/helpers/humanReadablePreset */ "./package/preset/helpers/humanReadablePreset.js");


const {
  select
} = wp.data;
const {
  __
} = wp.i18n;
const DEFAULT_STATE = {
  messages: [],
  ssrCallbacks: [],
  formats: [],
  ruleTypes: [],
  ruleReaders: {
    default(rule) {
      const ruleOptions = select('jet-forms/validation').getRule(rule.type);
      if (!ruleOptions) {
        return '';
      }
      let value = rule?.field || rule?.value || '';
      value = (0,_preset_helpers_humanReadablePreset__WEBPACK_IMPORTED_MODULE_1__["default"])(value, 'b') || '(no value)';
      return [ruleOptions.label, `<code>${value}</code>`].join(' ');
    },
    ssr(rule) {
      return [__('Function:', 'jet-form-builder'), rule?.value].join(' ');
    }
  }
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = DEFAULT_STATE, action) {
  const callback = _dispatchers__WEBPACK_IMPORTED_MODULE_0__["default"][action?.type];
  if (callback) {
    return callback(state, action);
  }
  return state;
}

/***/ }),

/***/ "./package/validation/store/selectors.js":
/*!***********************************************!*\
  !*** ./package/validation/store/selectors.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectors = {
  getRule(state, type) {
    const index = state.ruleTypes.findIndex(({
      value
    }) => value === type);
    if (-1 === index) {
      return false;
    }
    return state.ruleTypes[index];
  },
  readRule(state, rule) {
    var _state$ruleReaders$ty;
    const {
      type = ''
    } = rule;
    if (!type) {
      return '';
    }

    /**
     * @type {Function}
     */
    const callback = (_state$ruleReaders$ty = state.ruleReaders[type]) !== null && _state$ruleReaders$ty !== void 0 ? _state$ruleReaders$ty : false;
    if ('function' === typeof callback) {
      return callback(rule);
    }
    return state.ruleReaders.default(rule);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...selectors
});

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/components/GroupedSelectControl.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/components/GroupedSelectControl.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.syma2t4{height:40px;min-height:40px;line-height:1.5;}
`, "",{"version":3,"sources":["webpack://./package/components/GroupedSelectControl.js"],"names":[],"mappings":"AAAA,SAAS,WAAW,CAAC,eAAe,CAAC,eAAe,CAAC","sourcesContent":[".syma2t4{height:40px;min-height:40px;line-height:1.5;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/validation/components/ValidationMetaMessage.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/validation/components/ValidationMetaMessage.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sfqmk5y svg{height:24px;width:24px;}
`, "",{"version":3,"sources":["webpack://./package/validation/components/ValidationMetaMessage.js"],"names":[],"mappings":"AAAA,aAAa,WAAW,CAAC,UAAU,CAAC","sourcesContent":[".sfqmk5y svg{height:24px;width:24px;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./package/components/GroupedSelectControl.wyw-in-js.css!=!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/components/GroupedSelectControl.js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./package/components/GroupedSelectControl.wyw-in-js.css!=!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/components/GroupedSelectControl.js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./GroupedSelectControl.js */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/components/GroupedSelectControl.js");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("55433ea3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./package/validation/components/ValidationMetaMessage.wyw-in-js.css!=!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/validation/components/ValidationMetaMessage.js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./package/validation/components/ValidationMetaMessage.wyw-in-js.css!=!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/validation/components/ValidationMetaMessage.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ValidationMetaMessage.js */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./package/validation/components/ValidationMetaMessage.js");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("62ebcc8a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../../node_modules/vue-style-loader/lib/addStylesClient.js":
/*!******************************************************************!*\
  !*** ../../node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "../../node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "../../node_modules/vue-style-loader/lib/listToStyles.js":
/*!***************************************************************!*\
  !*** ../../node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "jet-form-builder-actions":
/*!**********************************!*\
  !*** external ["jfb","actions"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["jfb"]["actions"];

/***/ }),

/***/ "jet-form-builder-blocks-to-actions":
/*!******************************************!*\
  !*** external ["jfb","blocksToActions"] ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["jfb"]["blocksToActions"];

/***/ }),

/***/ "jet-form-builder-components":
/*!*************************************!*\
  !*** external ["jfb","components"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["jfb"]["components"];

/***/ }),

/***/ "jet-form-builder-data":
/*!*******************************!*\
  !*** external ["jfb","data"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["jfb"]["data"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "../../node_modules/@linaria/core/dist/index.mjs":
/*!*******************************************************!*\
  !*** ../../node_modules/@linaria/core/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css_default),
/* harmony export */   cx: () => (/* binding */ cx_default)
/* harmony export */ });
// src/css.ts
var idx = 0;
var css = () => {
  if (false) {}
  throw new Error(
    'Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly.'
  );
};
var css_default = css;

// src/cx.ts
var cx = function cx2() {
  const presentClassNames = Array.prototype.slice.call(arguments).filter(Boolean);
  const atomicClasses = {};
  const nonAtomicClasses = [];
  presentClassNames.forEach((arg) => {
    const individualClassNames = arg ? arg.split(" ") : [];
    individualClassNames.forEach((className) => {
      if (className.startsWith("atm_")) {
        const [, keyHash] = className.split("_");
        atomicClasses[keyHash] = className;
      } else {
        nonAtomicClasses.push(className);
      }
    });
  });
  const result = [];
  for (const keyHash in atomicClasses) {
    if (Object.prototype.hasOwnProperty.call(atomicClasses, keyHash)) {
      result.push(atomicClasses[keyHash]);
    }
  }
  result.push(...nonAtomicClasses);
  return result.join(" ");
};
var cx_default = cx;

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "../../node_modules/@linaria/react/dist/index.mjs":
/*!********************************************************!*\
  !*** ../../node_modules/@linaria/react/dist/index.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styled: () => (/* binding */ styled_default)
/* harmony export */ });
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/is-prop-valid */ "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @linaria/core */ "../../node_modules/@linaria/core/dist/index.mjs");
// src/styled.ts



var isCapital = (ch) => ch.toUpperCase() === ch;
var filterKey = (keys) => (key) => keys.indexOf(key) === -1;
var omit = (obj, keys) => {
  const res = {};
  Object.keys(obj).filter(filterKey(keys)).forEach((key) => {
    res[key] = obj[key];
  });
  return res;
};
function filterProps(asIs, props, omitKeys) {
  const filteredProps = omit(props, omitKeys);
  if (!asIs) {
    const interopValidAttr = typeof _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"] === "function" ? { default: _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"] } : _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"];
    Object.keys(filteredProps).forEach((key) => {
      if (!interopValidAttr.default(key)) {
        delete filteredProps[key];
      }
    });
  }
  return filteredProps;
}
var warnIfInvalid = (value, componentName) => {
  if (true) {
    if (typeof value === "string" || // eslint-disable-next-line no-self-compare,no-restricted-globals
    typeof value === "number" && isFinite(value)) {
      return;
    }
    const stringified = typeof value === "object" ? JSON.stringify(value) : String(value);
    console.warn(
      `An interpolation evaluated to '${stringified}' in the component '${componentName}', which is probably a mistake. You should explicitly cast or transform the value to a string.`
    );
  }
};
var idx = 0;
function styled(tag) {
  let mockedClass = "";
  if (false) {}
  return (options) => {
    if (true) {
      if (Array.isArray(options)) {
        throw new Error(
          'Using the "styled" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. See https://github.com/callstack/linaria#setup'
        );
      }
    }
    const render = (props, ref) => {
      const { as: component = tag, class: className = mockedClass } = props;
      const shouldKeepProps = options.propsAsIs === void 0 ? !(typeof component === "string" && component.indexOf("-") === -1 && !isCapital(component[0])) : options.propsAsIs;
      const filteredProps = filterProps(shouldKeepProps, props, [
        "as",
        "class"
      ]);
      filteredProps.ref = ref;
      filteredProps.className = options.atomic ? (0,_linaria_core__WEBPACK_IMPORTED_MODULE_2__.cx)(options.class, filteredProps.className || className) : (0,_linaria_core__WEBPACK_IMPORTED_MODULE_2__.cx)(filteredProps.className || className, options.class);
      const { vars } = options;
      if (vars) {
        const style = {};
        for (const name in vars) {
          const variable = vars[name];
          const result = variable[0];
          const unit = variable[1] || "";
          const value = typeof result === "function" ? result(props) : result;
          warnIfInvalid(value, options.name);
          style[`--${name}`] = `${value}${unit}`;
        }
        const ownStyle = filteredProps.style || {};
        const keys = Object.keys(ownStyle);
        if (keys.length > 0) {
          keys.forEach((key) => {
            style[key] = ownStyle[key];
          });
        }
        filteredProps.style = style;
      }
      if (tag.__wyw_meta && tag !== component) {
        filteredProps.as = component;
        return react__WEBPACK_IMPORTED_MODULE_1__.createElement(tag, filteredProps);
      }
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(component, filteredProps);
    };
    const Result = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef ? react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(render) : (
      // React.forwardRef won't available on older React versions and in Preact
      // Fallback to a innerRef prop in that case
      (props) => {
        const rest = omit(props, ["innerRef"]);
        return render(rest, props.innerRef);
      }
    );
    Result.displayName = options.name;
    Result.__wyw_meta = {
      className: options.class || mockedClass,
      extends: tag
    };
    return Result;
  };
}
var styled_default =  true ? new Proxy(styled, {
  get(o, prop) {
    return o(prop);
  }
}) : 0;

//# sourceMappingURL=index.mjs.map

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
/******/ 			id: moduleId,
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
/* harmony import */ var _action_fields_map_components_ActionFieldsMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-fields-map/components/ActionFieldsMap */ "./package/action-fields-map/components/ActionFieldsMap.js");
/* harmony import */ var _action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-modal/components/ActionModal */ "./package/action-modal/components/ActionModal.js");
/* harmony import */ var _action_fields_map_components_WrapperRequiredControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-fields-map/components/WrapperRequiredControl */ "./package/action-fields-map/components/WrapperRequiredControl.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools */ "./package/tools.js");
/* harmony import */ var _blocks_helpers_getAvailableFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/helpers/getAvailableFields */ "./package/blocks/helpers/getAvailableFields.js");
/* harmony import */ var _blocks_helpers_getAvailableFieldsString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/helpers/getAvailableFieldsString */ "./package/blocks/helpers/getAvailableFieldsString.js");
/* harmony import */ var _blocks_helpers_getBlocksByName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/helpers/getBlocksByName */ "./package/blocks/helpers/getBlocksByName.js");
/* harmony import */ var _blocks_helpers_getFieldsWithoutCurrent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/helpers/getFieldsWithoutCurrent */ "./package/blocks/helpers/getFieldsWithoutCurrent.js");
/* harmony import */ var _blocks_helpers_getFormFieldsBlocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/helpers/getFormFieldsBlocks */ "./package/blocks/helpers/getFormFieldsBlocks.js");
/* harmony import */ var _blocks_helpers_getInnerBlocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/helpers/getInnerBlocks */ "./package/blocks/helpers/getInnerBlocks.js");
/* harmony import */ var _blocks_helpers_appendField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/helpers/appendField */ "./package/blocks/helpers/appendField.js");
/* harmony import */ var _gateways_helpers_gatewayAttr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gateways/helpers/gatewayAttr */ "./package/gateways/helpers/gatewayAttr.js");
/* harmony import */ var _gateways_helpers_gatewayLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gateways/helpers/gatewayLabel */ "./package/gateways/helpers/gatewayLabel.js");
/* harmony import */ var _gateways_helpers_registerGateway__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gateways/helpers/registerGateway */ "./package/gateways/helpers/registerGateway.js");
/* harmony import */ var _gateways_helpers_renderGateway__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gateways/helpers/renderGateway */ "./package/gateways/helpers/renderGateway.js");
/* harmony import */ var _gateways_helpers_renderGatewayWithPlaceholder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gateways/helpers/renderGatewayWithPlaceholder */ "./package/gateways/helpers/renderGatewayWithPlaceholder.js");
/* harmony import */ var _hooks_useSuccessNotice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hooks/useSuccessNotice */ "./package/hooks/useSuccessNotice.js");
/* harmony import */ var _hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hooks/useSelectPostMeta */ "./package/hooks/useSelectPostMeta.js");
/* harmony import */ var _action_modal_hooks_useOnUpdateModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./action-modal/hooks/useOnUpdateModal */ "./package/action-modal/hooks/useOnUpdateModal.js");
/* harmony import */ var _hooks_withSelectFormFields__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hooks/withSelectFormFields */ "./package/hooks/withSelectFormFields.js");
/* harmony import */ var _gateways_hooks_withSelectGateways__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gateways/hooks/withSelectGateways */ "./package/gateways/hooks/withSelectGateways.js");
/* harmony import */ var _gateways_hooks_withDispatchGateways__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gateways/hooks/withDispatchGateways */ "./package/gateways/hooks/withDispatchGateways.js");
/* harmony import */ var _events_hooks_useRequestEvents__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./events/hooks/useRequestEvents */ "./package/events/hooks/useRequestEvents.js");
/* harmony import */ var _block_conditions_hooks_useBlockConditions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./block-conditions/hooks/useBlockConditions */ "./package/block-conditions/hooks/useBlockConditions.js");
/* harmony import */ var _blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blocks/hooks/useUniqKey */ "./package/blocks/hooks/useUniqKey.js");
/* harmony import */ var _blocks_hooks_useIsAdvancedValidation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blocks/hooks/useIsAdvancedValidation */ "./package/blocks/hooks/useIsAdvancedValidation.js");
/* harmony import */ var _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blocks/hooks/useBlockAttributes */ "./package/blocks/hooks/useBlockAttributes.js");
/* harmony import */ var _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hooks/useIsHasAttribute */ "./package/hooks/useIsHasAttribute.js");
/* harmony import */ var _preset_components_DynamicPreset__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./preset/components/DynamicPreset */ "./package/preset/components/DynamicPreset.js");
/* harmony import */ var _editor_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../editor/blocks/controls/fields-map */ "./editor/blocks/controls/fields-map.js");
/* harmony import */ var _preset_components_FieldWithPreset__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./preset/components/FieldWithPreset */ "./package/preset/components/FieldWithPreset.js");
/* harmony import */ var _preset_components_GlobalFieldPreset__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./preset/components/GlobalFieldPreset */ "./package/preset/components/GlobalFieldPreset.js");
/* harmony import */ var _preset_components_AvailableMapFieldPreset__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./preset/components/AvailableMapFieldPreset */ "./package/preset/components/AvailableMapFieldPreset.js");
/* harmony import */ var _preset_components_MapFieldPreset__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./preset/components/MapFieldPreset */ "./package/preset/components/MapFieldPreset.js");
/* harmony import */ var _validation_hooks_useGroupedValidationMessages__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./validation/hooks/useGroupedValidationMessages */ "./package/validation/hooks/useGroupedValidationMessages.js");
/* harmony import */ var _blocks_components_FieldWrapper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./blocks/components/FieldWrapper */ "./package/blocks/components/FieldWrapper.js");
/* harmony import */ var _components_MacrosInserter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/MacrosInserter */ "./package/components/MacrosInserter.js");
/* harmony import */ var _repeater_components_RepeaterWithState__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./repeater/components/RepeaterWithState */ "./package/repeater/components/RepeaterWithState.js");
/* harmony import */ var _preset_components_withPreset__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./preset/components/withPreset */ "./package/preset/components/withPreset.js");
/* harmony import */ var _blocks_components_AdvancedFields__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blocks/components/AdvancedFields */ "./package/blocks/components/AdvancedFields.js");
/* harmony import */ var _blocks_components_GeneralFields__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./blocks/components/GeneralFields */ "./package/blocks/components/GeneralFields.js");
/* harmony import */ var _blocks_components_ToolBarFields__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./blocks/components/ToolBarFields */ "./package/blocks/components/ToolBarFields.js");
/* harmony import */ var _components_HorizontalLine__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/HorizontalLine */ "./package/components/HorizontalLine.js");
/* harmony import */ var _blocks_components_FieldSettingsWrapper__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./blocks/components/FieldSettingsWrapper */ "./package/blocks/components/FieldSettingsWrapper.js");
/* harmony import */ var _components_GroupedSelectControl__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/GroupedSelectControl */ "./package/components/GroupedSelectControl.js");
/* harmony import */ var _blocks_helpers_getBlockControls__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./blocks/helpers/getBlockControls */ "./package/blocks/helpers/getBlockControls.js");
/* harmony import */ var _components_BaseHelp__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/BaseHelp */ "./package/components/BaseHelp.js");
/* harmony import */ var _gateways_components_GatewayFetchButton__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./gateways/components/GatewayFetchButton */ "./package/gateways/components/GatewayFetchButton.js");
/* harmony import */ var _store_manager__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./store.manager */ "./package/store.manager.js");
/* harmony import */ var _action_modal_context_ActionModalContext__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./action-modal/context/ActionModalContext */ "./package/action-modal/context/ActionModalContext.js");
/* harmony import */ var _repeater_context_safe_delete__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./repeater/context/safe.delete */ "./package/repeater/context/safe.delete.js");
/* harmony import */ var _repeater_context_repeater_item__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./repeater/context/repeater.item */ "./package/repeater/context/repeater.item.js");
/* harmony import */ var _repeater_context_repeater_custom_item_body__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./repeater/context/repeater.custom.item.body */ "./package/repeater/context/repeater.custom.item.body.js");
/* harmony import */ var _repeater_context_repeater_custom_item_head__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./repeater/context/repeater.custom.item.head */ "./package/repeater/context/repeater.custom.item.head.js");
/* harmony import */ var _repeater_context_repeater_custom_item_buttons__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./repeater/context/repeater.custom.item.buttons */ "./package/repeater/context/repeater.custom.item.buttons.js");
/* harmony import */ var _context_block_value_item_context__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./context/block.value.item.context */ "./package/context/block.value.item.context.js");
/* harmony import */ var _repeater_components_safe_delete_toggle__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./repeater/components/safe.delete.toggle */ "./package/repeater/components/safe.delete.toggle.js");
/* harmony import */ var _repeater_components_repeater_add_new__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./repeater/components/repeater.add.new */ "./package/repeater/components/repeater.add.new.js");
/* harmony import */ var _repeater_components_repeater__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./repeater/components/repeater */ "./package/repeater/components/repeater.js");
/* harmony import */ var _validation_components_ValidationToggleGroup__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./validation/components/ValidationToggleGroup */ "./package/validation/components/ValidationToggleGroup.js");
/* harmony import */ var _validation_components_ValidationBlockMessage__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./validation/components/ValidationBlockMessage */ "./package/validation/components/ValidationBlockMessage.js");
/* harmony import */ var _validation_components_ValidationMetaMessage__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./validation/components/ValidationMetaMessage */ "./package/validation/components/ValidationMetaMessage.js");
/* harmony import */ var _action_fields_map_context_ActionFieldsMapContext__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./action-fields-map/context/ActionFieldsMapContext */ "./package/action-fields-map/context/ActionFieldsMapContext.js");
/* harmony import */ var _action_fields_map_context_CurrentPropertyMapContext__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./action-fields-map/context/CurrentPropertyMapContext */ "./package/action-fields-map/context/CurrentPropertyMapContext.js");
/* harmony import */ var _action_fields_map_components_DynamicPropertySelect__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./action-fields-map/components/DynamicPropertySelect */ "./package/action-fields-map/components/DynamicPropertySelect.js");
/* harmony import */ var _dynamic_value_components_DynamicValues__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./dynamic.value/components/DynamicValues */ "./package/dynamic.value/components/DynamicValues.js");
/* harmony import */ var _repeater_components_repeater_add_or__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./repeater/components/repeater.add.or */ "./package/repeater/components/repeater.add.or.js");
/* harmony import */ var _validation_components_EditAdvancedRulesButton__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./validation/components/EditAdvancedRulesButton */ "./package/validation/components/EditAdvancedRulesButton.js");
/* harmony import */ var _repeater_context_repeater_state__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./repeater/context/repeater.state */ "./package/repeater/context/repeater.state.js");
/* harmony import */ var _repeater_components_repeater_state__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./repeater/components/repeater.state */ "./package/repeater/components/repeater.state.js");
/* harmony import */ var _blocks_components_FieldControl__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./blocks/components/FieldControl */ "./package/blocks/components/FieldControl.js");
/* harmony import */ var _blocks_components_BlockLabel__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./blocks/components/BlockLabel */ "./package/blocks/components/BlockLabel.js");
/* harmony import */ var _blocks_components_BlockName__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./blocks/components/BlockName */ "./package/blocks/components/BlockName.js");
/* harmony import */ var _blocks_components_BlockDescription__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./blocks/components/BlockDescription */ "./package/blocks/components/BlockDescription.js");
/* harmony import */ var _blocks_components_BlockDefaultValue__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./blocks/components/BlockDefaultValue */ "./package/blocks/components/BlockDefaultValue.js");
/* harmony import */ var _blocks_components_BlockPlaceholder__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./blocks/components/BlockPlaceholder */ "./package/blocks/components/BlockPlaceholder.js");
/* harmony import */ var _blocks_components_BlockAddPrevButton__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./blocks/components/BlockAddPrevButton */ "./package/blocks/components/BlockAddPrevButton.js");
/* harmony import */ var _blocks_components_BlockPrevButtonLabel__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./blocks/components/BlockPrevButtonLabel */ "./package/blocks/components/BlockPrevButtonLabel.js");
/* harmony import */ var _blocks_components_BlockVisibility__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./blocks/components/BlockVisibility */ "./package/blocks/components/BlockVisibility.js");
/* harmony import */ var _blocks_components_BlockClassName__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./blocks/components/BlockClassName */ "./package/blocks/components/BlockClassName.js");
/* harmony import */ var _blocks_components_BlockAdvancedValue__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./blocks/components/BlockAdvancedValue */ "./package/blocks/components/BlockAdvancedValue.js");
/* harmony import */ var _macros_button_components_MacrosFieldsTemplate__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./macros.button/components/MacrosFieldsTemplate */ "./package/macros.button/components/MacrosFieldsTemplate.js");
/* harmony import */ var _macros_button_components_MacrosButtonTemplate__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./macros.button/components/MacrosButtonTemplate */ "./package/macros.button/components/MacrosButtonTemplate.js");
/* harmony import */ var _macros_button_components_MacrosFields__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./macros.button/components/MacrosFields */ "./package/macros.button/components/MacrosFields.js");
/* harmony import */ var _macros_button_context_PopoverContext__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./macros.button/context/PopoverContext */ "./package/macros.button/context/PopoverContext.js");
/* harmony import */ var _macros_button_context_PopoverItem__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./macros.button/context/PopoverItem */ "./package/macros.button/context/PopoverItem.js");
/* harmony import */ var _preset_components_PresetButton__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./preset/components/PresetButton */ "./package/preset/components/PresetButton.js");
/* harmony import */ var _block_conditions_components_ConditionItem__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./block-conditions/components/ConditionItem */ "./package/block-conditions/components/ConditionItem.js");
/* harmony import */ var _components_AdvancedInspectorControl__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./components/AdvancedInspectorControl */ "./package/components/AdvancedInspectorControl.js");
/* harmony import */ var _components_AdvancedModalControl__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./components/AdvancedModalControl */ "./package/components/AdvancedModalControl.js");
/* harmony import */ var _macros_button_components_ClientSideMacros__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./macros.button/components/ClientSideMacros */ "./package/macros.button/components/ClientSideMacros.js");
/* harmony import */ var _macros_button_functions__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./macros.button/functions */ "./package/macros.button/functions.js");
/* harmony import */ var _macros_button_hooks_useInsertMacro__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./macros.button/hooks/useInsertMacro */ "./package/macros.button/hooks/useInsertMacro.js");
/* harmony import */ var _components_ToggleControl__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./components/ToggleControl */ "./package/components/ToggleControl.js");
/* harmony import */ var _components_DetailsContainer__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./components/DetailsContainer */ "./package/components/DetailsContainer.js");
/* harmony import */ var _components_HoverContainer__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./components/HoverContainer */ "./package/components/HoverContainer.js");
/* harmony import */ var _blocks_helpers_getCurrentInnerBlocks__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./blocks/helpers/getCurrentInnerBlocks */ "./package/blocks/helpers/getCurrentInnerBlocks.js");
/* harmony import */ var _components_ContainersList__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./components/ContainersList */ "./package/components/ContainersList.js");
/* harmony import */ var _block_conditions_components_HumanReadableConditions__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./block-conditions/components/HumanReadableConditions */ "./package/block-conditions/components/HumanReadableConditions.js");
/* harmony import */ var _block_conditions_helpers_humanReadableCondition__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./block-conditions/helpers/humanReadableCondition */ "./package/block-conditions/helpers/humanReadableCondition.js");
/* harmony import */ var _block_conditions_components_ConditionsRepeaterContextProvider__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./block-conditions/components/ConditionsRepeaterContextProvider */ "./package/block-conditions/components/ConditionsRepeaterContextProvider.js");
/* harmony import */ var _macros_button_components_ServerSideMacros__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./macros.button/components/ServerSideMacros */ "./package/macros.button/components/ServerSideMacros.js");
/* harmony import */ var _blocks_hooks_useUniqueNameOnDuplicate__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./blocks/hooks/useUniqueNameOnDuplicate */ "./package/blocks/hooks/useUniqueNameOnDuplicate.js");
/* harmony import */ var _blocks_components_SelectVariations__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./blocks/components/SelectVariations */ "./package/blocks/components/SelectVariations.js");
/* harmony import */ var _blocks_components_ToggleGroupVariations__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./blocks/components/ToggleGroupVariations */ "./package/blocks/components/ToggleGroupVariations.js");
/* harmony import */ var _components_BaseLabel__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./components/BaseLabel */ "./package/components/BaseLabel.js");
/* harmony import */ var _blocks_hooks_useSupport__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./blocks/hooks/useSupport */ "./package/blocks/hooks/useSupport.js");
/* harmony import */ var _blocks_components_AttributeHelp__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./blocks/components/AttributeHelp */ "./package/blocks/components/AttributeHelp.js");
/* harmony import */ var _action_buttons_components_ActionButtonPlaceholder__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./action-buttons/components/ActionButtonPlaceholder */ "./package/action-buttons/components/ActionButtonPlaceholder.js");
/* harmony import */ var _action_modal_components_ActionModalFooterSlotFill__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./action-modal/components/ActionModalFooterSlotFill */ "./package/action-modal/components/ActionModalFooterSlotFill.js");
/* harmony import */ var _blocks_hooks_useScopedAttributesContext__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./blocks/hooks/useScopedAttributesContext */ "./package/blocks/hooks/useScopedAttributesContext.js");
/* harmony import */ var _blocks_components_ScopedAttributesProvider__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./blocks/components/ScopedAttributesProvider */ "./package/blocks/components/ScopedAttributesProvider.js");
/* harmony import */ var _blocks_helpers_getSupport__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./blocks/helpers/getSupport */ "./package/blocks/helpers/getSupport.js");
/* harmony import */ var _events_hooks_useEvents__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./events/hooks/useEvents */ "./package/events/hooks/useEvents.js");
/* harmony import */ var _hooks_useOpenEditorPanel__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./hooks/useOpenEditorPanel */ "./package/hooks/useOpenEditorPanel.js");
var _window$JetFBComponen, _window$JetFBActions, _window$JetFBHooks;




















































































































// JFBComponents
window.JetFBComponents = {
  ...((_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {}),
  BaseLabel: _components_BaseLabel__WEBPACK_IMPORTED_MODULE_105__["default"],
  ActionFieldsMap: _action_fields_map_components_ActionFieldsMap__WEBPACK_IMPORTED_MODULE_0__["default"],
  ActionModal: _action_modal_components_ActionModal__WEBPACK_IMPORTED_MODULE_1__["default"],
  ActionModalContext: _action_modal_context_ActionModalContext__WEBPACK_IMPORTED_MODULE_49__["default"],
  SafeDeleteContext: _repeater_context_safe_delete__WEBPACK_IMPORTED_MODULE_50__["default"],
  RepeaterItemContext: _repeater_context_repeater_item__WEBPACK_IMPORTED_MODULE_51__["default"],
  RepeaterBodyContext: _repeater_context_repeater_custom_item_body__WEBPACK_IMPORTED_MODULE_52__["default"],
  RepeaterHeadContext: _repeater_context_repeater_custom_item_head__WEBPACK_IMPORTED_MODULE_53__["default"],
  RepeaterButtonsContext: _repeater_context_repeater_custom_item_buttons__WEBPACK_IMPORTED_MODULE_54__["default"],
  ActionFieldsMapContext: _action_fields_map_context_ActionFieldsMapContext__WEBPACK_IMPORTED_MODULE_62__["default"],
  CurrentPropertyMapContext: _action_fields_map_context_CurrentPropertyMapContext__WEBPACK_IMPORTED_MODULE_63__["default"],
  BlockValueItemContext: _context_block_value_item_context__WEBPACK_IMPORTED_MODULE_55__["default"],
  DynamicPropertySelect: _action_fields_map_components_DynamicPropertySelect__WEBPACK_IMPORTED_MODULE_64__["default"],
  SafeDeleteToggle: _repeater_components_safe_delete_toggle__WEBPACK_IMPORTED_MODULE_56__["default"],
  RepeaterAddNew: _repeater_components_repeater_add_new__WEBPACK_IMPORTED_MODULE_57__["default"],
  RepeaterAddOrOperator: _repeater_components_repeater_add_or__WEBPACK_IMPORTED_MODULE_66__["default"],
  Repeater: _repeater_components_repeater__WEBPACK_IMPORTED_MODULE_58__["default"],
  WrapperRequiredControl: _action_fields_map_components_WrapperRequiredControl__WEBPACK_IMPORTED_MODULE_2__["default"],
  DynamicPreset: _preset_components_DynamicPreset__WEBPACK_IMPORTED_MODULE_28__["default"],
  JetFieldsMapControl: _editor_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_29__["default"],
  FieldWithPreset: _preset_components_FieldWithPreset__WEBPACK_IMPORTED_MODULE_30__["default"],
  GlobalField: _preset_components_GlobalFieldPreset__WEBPACK_IMPORTED_MODULE_31__["default"],
  AvailableMapField: _preset_components_AvailableMapFieldPreset__WEBPACK_IMPORTED_MODULE_32__["default"],
  MapField: _preset_components_MapFieldPreset__WEBPACK_IMPORTED_MODULE_33__["default"],
  FieldWrapper: _blocks_components_FieldWrapper__WEBPACK_IMPORTED_MODULE_35__["default"],
  MacrosInserter: _components_MacrosInserter__WEBPACK_IMPORTED_MODULE_36__["default"],
  RepeaterWithState: _repeater_components_RepeaterWithState__WEBPACK_IMPORTED_MODULE_37__["default"],
  AdvancedFields: _blocks_components_AdvancedFields__WEBPACK_IMPORTED_MODULE_39__["default"],
  GeneralFields: _blocks_components_GeneralFields__WEBPACK_IMPORTED_MODULE_40__["default"],
  ToolBarFields: _blocks_components_ToolBarFields__WEBPACK_IMPORTED_MODULE_41__["default"],
  FieldControl: _blocks_components_FieldControl__WEBPACK_IMPORTED_MODULE_70__["default"],
  HorizontalLine: _components_HorizontalLine__WEBPACK_IMPORTED_MODULE_42__["default"],
  FieldSettingsWrapper: _blocks_components_FieldSettingsWrapper__WEBPACK_IMPORTED_MODULE_43__["default"],
  GroupedSelectControl: _components_GroupedSelectControl__WEBPACK_IMPORTED_MODULE_44__["default"],
  BaseHelp: _components_BaseHelp__WEBPACK_IMPORTED_MODULE_46__["default"],
  GatewayFetchButton: _gateways_components_GatewayFetchButton__WEBPACK_IMPORTED_MODULE_47__["default"],
  ValidationToggleGroup: _validation_components_ValidationToggleGroup__WEBPACK_IMPORTED_MODULE_59__["default"],
  ValidationBlockMessage: _validation_components_ValidationBlockMessage__WEBPACK_IMPORTED_MODULE_60__["default"],
  ValidationMetaMessage: _validation_components_ValidationMetaMessage__WEBPACK_IMPORTED_MODULE_61__["default"],
  DynamicValues: _dynamic_value_components_DynamicValues__WEBPACK_IMPORTED_MODULE_65__["default"],
  EditAdvancedRulesButton: _validation_components_EditAdvancedRulesButton__WEBPACK_IMPORTED_MODULE_67__["default"],
  RepeaterStateContext: _repeater_context_repeater_state__WEBPACK_IMPORTED_MODULE_68__["default"],
  RepeaterState: _repeater_components_repeater_state__WEBPACK_IMPORTED_MODULE_69__["default"],
  BlockLabel: _blocks_components_BlockLabel__WEBPACK_IMPORTED_MODULE_71__["default"],
  BlockName: _blocks_components_BlockName__WEBPACK_IMPORTED_MODULE_72__["default"],
  BlockDescription: _blocks_components_BlockDescription__WEBPACK_IMPORTED_MODULE_73__["default"],
  BlockDefaultValue: _blocks_components_BlockDefaultValue__WEBPACK_IMPORTED_MODULE_74__["default"],
  BlockPlaceholder: _blocks_components_BlockPlaceholder__WEBPACK_IMPORTED_MODULE_75__["default"],
  BlockAddPrevButton: _blocks_components_BlockAddPrevButton__WEBPACK_IMPORTED_MODULE_76__["default"],
  BlockPrevButtonLabel: _blocks_components_BlockPrevButtonLabel__WEBPACK_IMPORTED_MODULE_77__["default"],
  BlockVisibility: _blocks_components_BlockVisibility__WEBPACK_IMPORTED_MODULE_78__["default"],
  BlockClassName: _blocks_components_BlockClassName__WEBPACK_IMPORTED_MODULE_79__["default"],
  BlockAdvancedValue: _blocks_components_BlockAdvancedValue__WEBPACK_IMPORTED_MODULE_80__["default"],
  MacrosFields: _macros_button_components_MacrosFields__WEBPACK_IMPORTED_MODULE_83__["default"],
  MacrosButtonTemplate: _macros_button_components_MacrosButtonTemplate__WEBPACK_IMPORTED_MODULE_82__["default"],
  MacrosFieldsTemplate: _macros_button_components_MacrosFieldsTemplate__WEBPACK_IMPORTED_MODULE_81__["default"],
  ShowPopoverContext: _macros_button_context_PopoverContext__WEBPACK_IMPORTED_MODULE_84__["default"],
  PopoverItem: _macros_button_context_PopoverItem__WEBPACK_IMPORTED_MODULE_85__["default"],
  PresetButton: _preset_components_PresetButton__WEBPACK_IMPORTED_MODULE_86__["default"],
  ConditionItem: _block_conditions_components_ConditionItem__WEBPACK_IMPORTED_MODULE_87__["default"],
  AdvancedInspectorControl: _components_AdvancedInspectorControl__WEBPACK_IMPORTED_MODULE_88__["default"],
  AdvancedModalControl: _components_AdvancedModalControl__WEBPACK_IMPORTED_MODULE_89__["default"],
  ClientSideMacros: _macros_button_components_ClientSideMacros__WEBPACK_IMPORTED_MODULE_90__["default"],
  ToggleControl: _components_ToggleControl__WEBPACK_IMPORTED_MODULE_93__["default"],
  DetailsContainer: _components_DetailsContainer__WEBPACK_IMPORTED_MODULE_94__["default"],
  HoverContainer: _components_HoverContainer__WEBPACK_IMPORTED_MODULE_95__["default"],
  ContainersList: _components_ContainersList__WEBPACK_IMPORTED_MODULE_97__["default"],
  HumanReadableConditions: _block_conditions_components_HumanReadableConditions__WEBPACK_IMPORTED_MODULE_98__["default"],
  ConditionsRepeaterContextProvider: _block_conditions_components_ConditionsRepeaterContextProvider__WEBPACK_IMPORTED_MODULE_100__["default"],
  ServerSideMacros: _macros_button_components_ServerSideMacros__WEBPACK_IMPORTED_MODULE_101__["default"],
  SelectVariations: _blocks_components_SelectVariations__WEBPACK_IMPORTED_MODULE_103__["default"],
  ToggleGroupVariations: _blocks_components_ToggleGroupVariations__WEBPACK_IMPORTED_MODULE_104__["default"],
  AttributeHelp: _blocks_components_AttributeHelp__WEBPACK_IMPORTED_MODULE_107__["default"],
  ActionButtonPlaceholder: _action_buttons_components_ActionButtonPlaceholder__WEBPACK_IMPORTED_MODULE_108__["default"],
  ActionModalFooterSlotFill: _action_modal_components_ActionModalFooterSlotFill__WEBPACK_IMPORTED_MODULE_109__["default"],
  ScopedAttributesProvider: _blocks_components_ScopedAttributesProvider__WEBPACK_IMPORTED_MODULE_111__["default"]
};

// JFBFunctions
window.JetFBActions = {
  ...((_window$JetFBActions = window?.JetFBActions) !== null && _window$JetFBActions !== void 0 ? _window$JetFBActions : {}),
  withPreset: _preset_components_withPreset__WEBPACK_IMPORTED_MODULE_38__["default"],
  getInnerBlocks: _blocks_helpers_getInnerBlocks__WEBPACK_IMPORTED_MODULE_9__["default"],
  getAvailableFieldsString: _blocks_helpers_getAvailableFieldsString__WEBPACK_IMPORTED_MODULE_5__["default"],
  getAvailableFields: _blocks_helpers_getAvailableFields__WEBPACK_IMPORTED_MODULE_4__["default"],
  getFormFieldsBlocks: _blocks_helpers_getFormFieldsBlocks__WEBPACK_IMPORTED_MODULE_8__["default"],
  getFieldsWithoutCurrent: _blocks_helpers_getFieldsWithoutCurrent__WEBPACK_IMPORTED_MODULE_7__["default"],
  gatewayAttr: _gateways_helpers_gatewayAttr__WEBPACK_IMPORTED_MODULE_11__["default"],
  gatewayLabel: _gateways_helpers_gatewayLabel__WEBPACK_IMPORTED_MODULE_12__["default"],
  registerGateway: _gateways_helpers_registerGateway__WEBPACK_IMPORTED_MODULE_13__["default"],
  Tools: _tools__WEBPACK_IMPORTED_MODULE_3__["default"],
  event: _tools__WEBPACK_IMPORTED_MODULE_3__.event,
  listen: _tools__WEBPACK_IMPORTED_MODULE_3__.listen,
  renderGateway: _gateways_helpers_renderGateway__WEBPACK_IMPORTED_MODULE_14__["default"],
  renderGatewayWithPlaceholder: _gateways_helpers_renderGatewayWithPlaceholder__WEBPACK_IMPORTED_MODULE_15__["default"],
  maybeCyrToLatin: _tools__WEBPACK_IMPORTED_MODULE_3__.maybeCyrToLatin,
  getConvertedName: _tools__WEBPACK_IMPORTED_MODULE_3__.getConvertedName,
  getBlockControls: _blocks_helpers_getBlockControls__WEBPACK_IMPORTED_MODULE_45__["default"],
  classnames: _tools__WEBPACK_IMPORTED_MODULE_3__.classnames,
  getBlocksByName: _blocks_helpers_getBlocksByName__WEBPACK_IMPORTED_MODULE_6__["default"],
  convertObjectToOptionsList: _tools__WEBPACK_IMPORTED_MODULE_3__.convertObjectToOptionsList,
  appendField: _blocks_helpers_appendField__WEBPACK_IMPORTED_MODULE_10__["default"],
  insertMacro: _macros_button_functions__WEBPACK_IMPORTED_MODULE_91__.insertMacro,
  column: _tools__WEBPACK_IMPORTED_MODULE_3__.column,
  getCurrentInnerBlocks: _blocks_helpers_getCurrentInnerBlocks__WEBPACK_IMPORTED_MODULE_96__["default"],
  humanReadableCondition: _block_conditions_helpers_humanReadableCondition__WEBPACK_IMPORTED_MODULE_99__["default"],
  assetUrl: _tools__WEBPACK_IMPORTED_MODULE_3__.assetUrl,
  set: _tools__WEBPACK_IMPORTED_MODULE_3__.set,
  isEmpty: _tools__WEBPACK_IMPORTED_MODULE_3__.isEmpty,
  getSupport: _blocks_helpers_getSupport__WEBPACK_IMPORTED_MODULE_112__["default"],
  extendPrototype: _tools__WEBPACK_IMPORTED_MODULE_3__.extendPrototype
};

// JFBHooks
window.JetFBHooks = {
  ...((_window$JetFBHooks = window?.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {}),
  useSelectPostMeta: _hooks_useSelectPostMeta__WEBPACK_IMPORTED_MODULE_17__["default"],
  useSuccessNotice: _hooks_useSuccessNotice__WEBPACK_IMPORTED_MODULE_16__["default"],
  useEvents: _events_hooks_useEvents__WEBPACK_IMPORTED_MODULE_113__["default"],
  useRequestEvents: _events_hooks_useRequestEvents__WEBPACK_IMPORTED_MODULE_22__["default"],
  useBlockConditions: _block_conditions_hooks_useBlockConditions__WEBPACK_IMPORTED_MODULE_23__["default"],
  useUniqKey: _blocks_hooks_useUniqKey__WEBPACK_IMPORTED_MODULE_24__["default"],
  useBlockAttributes: _blocks_hooks_useBlockAttributes__WEBPACK_IMPORTED_MODULE_26__["default"],
  useIsAdvancedValidation: _blocks_hooks_useIsAdvancedValidation__WEBPACK_IMPORTED_MODULE_25__["default"],
  useGroupedValidationMessages: _validation_hooks_useGroupedValidationMessages__WEBPACK_IMPORTED_MODULE_34__["default"],
  withSelectFormFields: _hooks_withSelectFormFields__WEBPACK_IMPORTED_MODULE_19__["default"],
  withSelectGateways: _gateways_hooks_withSelectGateways__WEBPACK_IMPORTED_MODULE_20__["default"],
  withDispatchGateways: _gateways_hooks_withDispatchGateways__WEBPACK_IMPORTED_MODULE_21__["default"],
  useOnUpdateModal: _action_modal_hooks_useOnUpdateModal__WEBPACK_IMPORTED_MODULE_18__["default"],
  useInsertMacro: _macros_button_hooks_useInsertMacro__WEBPACK_IMPORTED_MODULE_92__["default"],
  useIsHasAttribute: _hooks_useIsHasAttribute__WEBPACK_IMPORTED_MODULE_27__["default"],
  useUniqueNameOnDuplicate: _blocks_hooks_useUniqueNameOnDuplicate__WEBPACK_IMPORTED_MODULE_102__["default"],
  useSupport: _blocks_hooks_useSupport__WEBPACK_IMPORTED_MODULE_106__["default"],
  useScopedAttributesContext: _blocks_hooks_useScopedAttributesContext__WEBPACK_IMPORTED_MODULE_110__["default"],
  useOpenEditorPanel: _hooks_useOpenEditorPanel__WEBPACK_IMPORTED_MODULE_114__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yL3BhY2thZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFPQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUdBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQW1CQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBR0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFVQTtBQUFBO0FBS0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQTs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBSUE7QUFLQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBT0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQVNBO0FBQ0E7QUFJQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBR0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFVQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBTUE7QUFHQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQU9BO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQVNBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFRQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBU0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFhQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaElBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBS0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JJQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUtBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQXVCQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVWQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQUE7QUFBQTs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQUE7QUFBQTs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQVVBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFRQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL01BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqT0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9MQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFHQTtBQUNBO0FBR0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFTQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFHQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2Vtb3Rpb24taXMtcHJvcC12YWxpZC5lc20uanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYWN0aW9uLWJ1dHRvbnMvY29tcG9uZW50cy9BY3Rpb25CdXR0b25QbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1maWVsZHMtbWFwL2NvbXBvbmVudHMvQWN0aW9uRmllbGRzTWFwLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYWN0aW9uLWZpZWxkcy1tYXAvY29tcG9uZW50cy9EeW5hbWljUHJvcGVydHlTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tZmllbGRzLW1hcC9jb21wb25lbnRzL1dyYXBwZXJSZXF1aXJlZENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tZmllbGRzLW1hcC9jb250ZXh0L0FjdGlvbkZpZWxkc01hcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tZmllbGRzLW1hcC9jb250ZXh0L0N1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tbW9kYWwvY29tcG9uZW50cy9BY3Rpb25Nb2RhbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tbW9kYWwvY29udGV4dC9BY3Rpb25Nb2RhbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tbW9kYWwvaG9va3MvdXNlT25VcGRhdGVNb2RhbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9CZWZvcmVDb25kaXRpb25PcHRpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0NvbmRpdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL2NvbXBvbmVudHMvQ29uZGl0aW9uT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9Db25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL2NvbXBvbmVudHMvRWRpdEN1c3RvbVJlbmRlclN0YXRlcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9IdW1hblJlYWRhYmxlQ29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9SZW5kZXJTdGF0ZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL2hlbHBlcnMvaHVtYW5SZWFkYWJsZUNvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvaG9va3MvdXNlQmxvY2tDb25kaXRpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9zdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL3N0b3JlL2Rpc3BhdGNoZXJzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQWR2YW5jZWRGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9BdHRyaWJ1dGVIZWxwLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tBZGRQcmV2QnV0dG9uLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tBZHZhbmNlZFZhbHVlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tDbGFzc05hbWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0RlZmF1bHRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0xhYmVsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tOYW1lLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tQbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrUHJldkJ1dHRvbkxhYmVsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tSZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0ZpZWxkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0ZpZWxkU2V0dGluZ3NXcmFwcGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvRmllbGRXcmFwcGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvR2VuZXJhbEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL1Njb3BlZEF0dHJpYnV0ZXNQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL1NlbGVjdFZhcmlhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9Ub2dnbGVHcm91cFZhcmlhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9Ub29sQmFyRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL1Rvb2xCYXJGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29udGV4dC9TY29wZWRBdHRyaWJ1dGVzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL0NoYW5nZU5hbWVCeUxhYmVsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvQ29udHJvbHNTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2FwcGVuZEZpZWxkLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRBdmFpbGFibGVGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRCbG9ja0NvbnRyb2xzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvZ2V0QmxvY2tzQnlOYW1lLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvZ2V0Q3VycmVudElubmVyQmxvY2tzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRGb3JtRmllbGRzQmxvY2tzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvZ2V0SW5uZXJCbG9ja3MuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRTdXBwb3J0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9ob29rcy91c2VJc0FkdmFuY2VkVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9ob29rcy91c2VJc1VuaXF1ZUZpZWxkTmFtZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9ob29rcy91c2VTY29wZWRBdHRyaWJ1dGVzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9ob29rcy91c2VTdXBwb3J0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZVVuaXFLZXkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaG9va3MvdXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL3N0b3JlL2Rpc3BhdGNoZXJzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL3N0b3JlL2dldFByZXBhcmVkQmxvY2tzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9BZHZhbmNlZEluc3BlY3RvckNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0FkdmFuY2VkTW9kYWxDb250cm9sLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9CYXNlSGVscC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvQmFzZUxhYmVsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9Db250YWluZXJzTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvRGV0YWlsc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvR3JvdXBlZFNlbGVjdENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0hvcml6b250YWxMaW5lLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9Ib3ZlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvTWFjcm9zSW5zZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL1RvZ2dsZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb250ZXh0L2Jsb2NrLnZhbHVlLml0ZW0uY29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2R5bmFtaWMudmFsdWUvY29tcG9uZW50cy9EeW5hbWljSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2R5bmFtaWMudmFsdWUvY29tcG9uZW50cy9EeW5hbWljSXRlbUJvZHkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9keW5hbWljLnZhbHVlL2NvbXBvbmVudHMvRHluYW1pY1ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2V2ZW50cy9ob29rcy91c2VEZWZhdWx0RXZlbnRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL2hvb2tzL3VzZUR5bmFtaWNFdmVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvaG9va3MvdXNlRXZlbnRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL2hvb2tzL3VzZUV2ZW50c0Zyb21BY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL2hvb2tzL3VzZUV2ZW50c0Zyb21HYXRld2F5cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2V2ZW50cy9ob29rcy91c2VSZXF1ZXN0RXZlbnRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL3N0b3JlL2Rpc3BhdGNoZXJzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvY29tcG9uZW50cy9HYXRld2F5RmV0Y2hCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9oZWxwZXJzL2dhdGV3YXlBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvaGVscGVycy9nYXRld2F5TGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9oZWxwZXJzL2lzc2V0UmVuZGVyR2F0ZXdheS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL2hlbHBlcnMvcmVnaXN0ZXJHYXRld2F5LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvaGVscGVycy9yZW5kZXJHYXRld2F5LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvaGVscGVycy9yZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvaG9va3Mvd2l0aERpc3BhdGNoR2F0ZXdheXMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9ob29rcy93aXRoU2VsZWN0R2F0ZXdheXMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvc3RvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvc3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ob29rcy91c2VJc0hhc0F0dHJpYnV0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2hvb2tzL3VzZU9wZW5FZGl0b3JQYW5lbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2hvb2tzL3VzZVJlcGVhdGVyU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ob29rcy91c2VTZWxlY3RQb3N0TWV0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2hvb2tzL3VzZVN1Y2Nlc3NOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ob29rcy93aXRoU2VsZWN0Rm9ybUZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vYWJzdHJhY3QvQmFzZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vYWJzdHJhY3QvQmFzZU1hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9hYnN0cmFjdC9CYXNlUG9wb3Zlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvQ2xpZW50U2lkZU1hY3Jvcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9Hcm91cEl0ZW1zUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb0ZpZWxkSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb3NCdXR0b25UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb3NGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zRmllbGRzVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvUG9wb3Zlckl0ZW1NYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9TZXJ2ZXJTaWRlTWFjcm9zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb250ZXh0L0V4dHJhTWFjcm9Db250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb250ZXh0L1BvcG92ZXJDb250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb250ZXh0L1BvcG92ZXJJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL0FkZERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZmlsdGVycy9BZGRNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZmlsdGVycy9BZGRZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL0ZhbGxiYWNrRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL0xlbmd0aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZmlsdGVycy9TdWJ0cmFjdERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZmlsdGVycy9TdWJ0cmFjdE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL1N1YnRyYWN0WWVhckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZmlsdGVycy9Ub0RhdGVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2ZpbHRlcnMvVG9EYXRlVGltZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZmlsdGVycy9Ub1RpbWVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vaG9va3MvdXNlSW5zZXJ0TWFjcm8uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL21hY3Jvcy9DdXJyZW50RGF0ZU1hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9tYWNyb3MvRGF5SW5TZWNNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vbWFjcm9zL01pbkluU2VjTWFjcm8uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL21hY3Jvcy9Nb250aEluU2VjTWFjcm8uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL21hY3Jvcy9ZZWFySW5TZWNNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vc3RvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9zdG9yZS9kaXNwYXRjaGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21pZ3JhdGlvbnMvbWlncmF0ZS5nYXRld2F5cy5zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9jb21wb25lbnRzL0F2YWlsYWJsZU1hcEZpZWxkUHJlc2V0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2NvbXBvbmVudHMvRHluYW1pY1ByZXNldC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9jb21wb25lbnRzL0ZpZWxkV2l0aFByZXNldC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9jb21wb25lbnRzL0dsb2JhbEZpZWxkUHJlc2V0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2NvbXBvbmVudHMvTWFwRmllbGRQcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9wcmVzZXQvY29tcG9uZW50cy9QcmVzZXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9wcmVzZXQvY29tcG9uZW50cy93aXRoUHJlc2V0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2NvbnRleHQvQ29udHJvbFByZXNldFJlc3RyaWN0aW9uQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9oZWxwZXJzL2h1bWFuUmVhZGFibGVQcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9wcmVzZXQvaGVscGVycy9pc1ByZXNldFN0cmluZy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbXBvbmVudHMvUmVwZWF0ZXJXaXRoU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLmFkZC5uZXcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLmFkZC5vci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLnN0YXRlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcmVwZWF0ZXIvY29tcG9uZW50cy9zYWZlLmRlbGV0ZS50b2dnbGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmJvZHkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmhlYWQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLml0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLnN0YXRlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcmVwZWF0ZXIvY29udGV4dC9zYWZlLmRlbGV0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3N0b3JlLm1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS90b29scy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY2xhc3Nlcy9NZXNzYWdlSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY2xhc3Nlcy9WYWxpZGF0aW9uTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvQWR2YW5jZWRSdWxlSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9BZHZhbmNlZFJ1bGVNb2RhbEl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvQWR2YW5jZWRSdWxlc0lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvQWR2YW5jZWRSdWxlc0xpc3QuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvQWR2YW5jZWRSdWxlc01vZGFsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL0Nob29zZVJlbGF0ZWRGaWVsZC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9FZGl0QWR2YW5jZWRSdWxlc0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9FZGl0UnVsZXNNb2RhbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvSHVtYW5SZWFkYWJsZVJ1bGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvVmFsaWRhdGlvbkJsb2NrTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uTWV0YU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvVmFsaWRhdGlvblRvZ2dsZUdyb3VwLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9oZWxwZXJzL2dldEl0ZW1CeU5hbWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2hlbHBlcnMvaHVtYW5SZWFkYWJsZVJ1bGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2hvb2tzL3VzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL3N0b3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vc3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sLmpzP2QyNGMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvVmFsaWRhdGlvbk1ldGFNZXNzYWdlLmpzPzVhYTYiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9Hcm91cGVkU2VsZWN0Q29udHJvbC5qcz8wMTUzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL1ZhbGlkYXRpb25NZXRhTWVzc2FnZS5qcz8xMWZiIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJhY3Rpb25zXCJdIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJibG9ja3NUb0FjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYXBpRmV0Y2hcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvY29yZS9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL0BsaW5hcmlhL3JlYWN0L2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFiYnJ8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZGlzYWJsZVJlbW90ZVBsYXliYWNrfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGVudGVyS2V5SGludHxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHRyYW5zbGF0ZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluY3JlbWVudGFsfGZhbGxiYWNrfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxvcHRpb258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaXNQcm9wVmFsaWQgPSAvKiAjX19QVVJFX18gKi9tZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCB7IGlzUHJvcFZhbGlkIGFzIGRlZmF1bHQgfTtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgbWVtb2l6ZSBhcyBkZWZhdWx0IH07XG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuLyoqIEB0eXBlZGVmIHt7aWNvbjogSlNYLkVsZW1lbnQsIHNpemU/OiBudW1iZXJ9ICYgaW1wb3J0KCdAd29yZHByZXNzL3ByaW1pdGl2ZXMnKS5TVkdQcm9wc30gSWNvblByb3BzICovXG5cbi8qKlxuICogUmV0dXJuIGFuIFNWRyBpY29uLlxuICpcbiAqIEBwYXJhbSB7SWNvblByb3BzfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzIGljb24gaXMgdGhlIFNWRyBjb21wb25lbnQgdG8gcmVuZGVyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplIGlzIGEgbnVtYmVyIHNwZWNpZml5aW5nIHRoZSBpY29uIHNpemUgaW4gcGl4ZWxzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdGhlciBwcm9wcyB3aWxsIGJlIHBhc3NlZCB0byB3cmFwcGVkIFNWRyBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCdyZWFjdCcpLkZvcndhcmRlZFJlZjxIVE1MRWxlbWVudD59IHJlZiAgIFRoZSBmb3J3YXJkZWQgcmVmIHRvIHRoZSBTVkcgZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gIEljb24gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIEljb24oe1xuICBpY29uLFxuICBzaXplID0gMjQsXG4gIC4uLnByb3BzXG59LCByZWYpIHtcbiAgcmV0dXJuIGNsb25lRWxlbWVudChpY29uLCB7XG4gICAgd2lkdGg6IHNpemUsXG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIC4uLnByb3BzLFxuICAgIHJlZlxuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoSWNvbik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmNsYXNzIEpldEZpZWxkc01hcENvbnRyb2wgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy5maWVsZFR5cGVzID0gdGhpcy5wcm9wcy5maWVsZFR5cGVzO1xuXHRcdHRoaXMudGF4b25vbWllc0xpc3QgPSB0aGlzLnByb3BzLnRheG9ub21pZXNMaXN0O1xuXHRcdHRoaXMuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG5cdFx0dGhpcy5tZXRhUHJvcCA9IHRoaXMucHJvcHMubWV0YVByb3AgPyB0aGlzLnByb3BzLm1ldGFQcm9wIDogJ3Bvc3RfbWV0YSc7XG5cdFx0dGhpcy50ZXJtc1Byb3AgPSB0aGlzLnByb3BzLnRlcm1zUHJvcCA/IHRoaXMucHJvcHMudGVybXNQcm9wIDogJ3Bvc3RfdGVybXMnO1xuXHRcdHRoaXMuaW5kZXggPSB0aGlzLnByb3BzLmluZGV4O1xuXG5cdFx0dGhpcy5pbml0KCk7XG5cdFx0dGhpcy5iaW5kRnVuY3Rpb25zKCk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dHlwZTogdGhpcy5nZXRGaWVsZFR5cGUoIHRoaXMucHJvcHMuZmllbGRWYWx1ZSApLFxuXHRcdH07XG5cdH1cblxuXHRiaW5kRnVuY3Rpb25zKCkge1xuXHRcdHRoaXMub25DaGFuZ2VUeXBlID0gdGhpcy5vbkNoYW5nZVR5cGUuYmluZCggdGhpcyApO1xuXHRcdHRoaXMub25DaGFuZ2VWYWx1ZSA9IHRoaXMub25DaGFuZ2VWYWx1ZS5iaW5kKCB0aGlzICk7XG5cdH1cblxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5pZCA9IGBpbnNwZWN0b3Itc2VsZWN0LWNvbnRyb2wtJHsgdGhpcy5pbmRleCB9YDtcblx0XHR0aGlzLnByZXBhcmVkVGF4ZXMgPSBbXTtcblx0XHR0aGlzLnRheFByZWZpeCA9ICdqZXRfdGF4X18nO1xuXG5cdFx0aWYgKCAhIHRoaXMudGF4b25vbWllc0xpc3QgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy50YXhvbm9taWVzTGlzdC5sZW5ndGg7IGkgKysgKSB7XG5cdFx0XHR0aGlzLnByZXBhcmVkVGF4ZXMucHVzaCgge1xuXHRcdFx0XHR2YWx1ZTogdGhpcy50YXhQcmVmaXggKyB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0udmFsdWUsXG5cdFx0XHRcdGxhYmVsOiB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0ubGFiZWwsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0RmllbGROYW1lKCB2YWx1ZSApIHtcblxuXHRcdGlmICggISB2YWx1ZSApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRjb25zdCBmaWVsZFR5cGUgPSB0aGlzLmdldEZpZWxkVHlwZSggdmFsdWUgKTtcblxuXHRcdGlmICggdGhpcy50ZXJtc1Byb3AgPT09IGZpZWxkVHlwZSB8fCB0aGlzLm1ldGFQcm9wID09PSBmaWVsZFR5cGUgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdFxuXHRcdFx0cmV0dXJuICcnO1xuXHRcdFxuXG5cdH07XG5cblx0aXNUZXJtT3JNZXRhKCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gKCB0aGlzLnRlcm1zUHJvcCA9PT0gdmFsdWUgfHwgdGhpcy5tZXRhUHJvcCA9PT0gdmFsdWUgKTtcblx0fVxuXG5cblx0Z2V0RmllbGRUeXBlKCB2YWx1ZSApIHtcblxuXHRcdGlmICggISB2YWx1ZSApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkVHlwZXMubGVuZ3RoOyBpICsrICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gdGhpcy5maWVsZFR5cGVzWyBpIF0udmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlLmluY2x1ZGVzKCB0aGlzLnRheFByZWZpeCApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGVybXNQcm9wO1xuXHRcdH1cblx0XHRcblx0XHRcdHJldHVybiB0aGlzLm1ldGFQcm9wO1xuXHRcdFxuXG5cdH07XG5cblxuXHRvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSApIHtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XG5cdFx0XHQuLi50aGlzLnByb3BzLmZpZWxkc01hcCxcblx0XHRcdFsgdGhpcy5wcm9wcy5maWVsZE5hbWUgXTogbmV3VmFsdWVcblx0XHR9ICk7XG5cdH07XG5cblxuXHRvbkNoYW5nZVR5cGUoIG5ld1ZhbHVlICkge1xuXHRcdGxldCB2YWwgPSB0aGlzLmdldEZpZWxkVHlwZSggbmV3VmFsdWUgKTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoIHtcblx0XHRcdHR5cGU6IHZhbFxuXHRcdH0gKTtcblxuXHRcdGlmICggdGhpcy5pc1Rlcm1Pck1ldGEoIHZhbCApICkge1xuXHRcdFx0dmFsID0gJyc7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB2YWwgKTtcblx0fVxuXG5cblx0Ly8gRGlzYWJsZSByZWFzb246IEEgc2VsZWN0IHdpdGggYW4gb25jaGFuZ2UgdGhyb3dzIGEgd2FybmluZ1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZpZWxkcy1tYXBfX3Jvd1wiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtcG9zdC1maWVsZC1jb250cm9sXCI+XG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3R5cGVfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XG5cdFx0XHRcdFx0bGFiZWw9eyB0aGlzLnByb3BzLmZpZWxkTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5zdGF0ZS50eXBlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VUeXBlIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5maWVsZFR5cGVzIH1cblx0XHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTYwcHgnXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgKCB0aGlzLm1ldGFQcm9wID09PSB0aGlzLnN0YXRlLnR5cGUgKSAmJiA8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfbmFtZV8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0XHR7ICggdGhpcy50ZXJtc1Byb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC13aXRob3V0LWxhYmVsJ1xuXHRcdFx0XHRcdGtleT17ICdmaWVsZF90YXhfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnByb3BzLmZpZWxkVmFsdWUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVZhbHVlIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5wcmVwYXJlZFRheGVzIH1cblx0XHRcdFx0XHRzdHlsZT17IHsgd2lkdGg6ICcyMDBweCcgfSB9XG5cdFx0XHRcdC8+IH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2Pjtcblx0fVxuXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmV0RmllbGRzTWFwQ29udHJvbDsiLCJjb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrUHJvcHMsXG5cdCAgICAgIFJpY2hUZXh0LFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIEJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBBY3Rpb25CdXR0b25QbGFjZWhvbGRlciggcHJvcHMgKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0gPlxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgcHJvcHMud3JhcHBlckNsYXNzZXMuam9pbiggJyAnICkgfT5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdGNsYXNzTmFtZT17IHByb3BzLmJ1dHRvbkNsYXNzZXMuam9pbiggJyAnICkgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIklucHV0IFN1Ym1pdCBsYWJlbC4uLlwiXG5cdFx0XHRcdFx0YWxsb3dlZEZvcm1hdHM9eyBbXSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLmxhYmVsIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IGxhYmVsID0+IHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbGFiZWwgfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvblBsYWNlaG9sZGVyOyIsImltcG9ydCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQWN0aW9uRmllbGRzTWFwQ29udGV4dCc7XG5pbXBvcnQge1xuXHRSb3dDb250cm9sRW5kLFxuXHRMYWJlbCxcblx0Um93Q29udHJvbCxcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZnVuY3Rpb24gQWN0aW9uRmllbGRzTWFwKCB7XG5cdGZpZWxkcyA9IFtdLFxuXHRsYWJlbCA9ICdbRW1wdHkgbGFiZWxdJyxcblx0Y2hpbGRyZW4gPSBudWxsLFxuXHRwbGFpbkhlbHAgPSAnJyxcblx0Y3VzdG9tSGVscCA9IGZhbHNlLFxufSApIHtcblxuXHRyZXR1cm4gPFJvd0NvbnRyb2wgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG5cdFx0PExhYmVsPnsgbGFiZWwgfTwvTGFiZWw+XG5cdFx0PFJvd0NvbnRyb2xFbmQ+XG5cdFx0XHR7IChcblx0XHRcdFx0Y3VzdG9tSGVscCAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VzdG9tSGVscFxuXHRcdFx0KSAmJiBjdXN0b21IZWxwKCkgfVxuXG5cdFx0XHR7IEJvb2xlYW4oIHBsYWluSGVscC5sZW5ndGggKSAmJiA8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9eyAnZGVzY3JpcHRpb24tY29udHJvbHMnIH1cblx0XHRcdD57IHBsYWluSGVscCB9PC9zcGFuPiB9XG5cblx0XHRcdHsgZmllbGRzLm1hcCggKCBbIGZpZWxkSWQsIGZpZWxkRGF0YSBdLCBpbmRleCApID0+IDxGcmFnbWVudFxuXHRcdFx0XHRrZXk9eyBgZmllbGRfaW5fbWFwXyR7IGZpZWxkSWQgKyBpbmRleCB9YCB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxBY3Rpb25GaWVsZHNNYXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsge1xuXHRcdFx0XHRcdG5hbWU6IGZpZWxkSWQsXG5cdFx0XHRcdFx0ZGF0YTogZmllbGREYXRhLFxuXHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHR9IH0+XG5cdFx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW5cblx0XHRcdFx0XHQgID8gY2hpbGRyZW4oIHsgZmllbGRJZCwgZmllbGREYXRhLCBpbmRleCB9IClcblx0XHRcdFx0XHQgIDogY2hpbGRyZW4gfVxuXHRcdFx0XHQ8L0FjdGlvbkZpZWxkc01hcENvbnRleHQuUHJvdmlkZXI+XG5cdFx0XHQ8L0ZyYWdtZW50PiApIH1cblx0XHQ8L1Jvd0NvbnRyb2xFbmQ+XG5cdDwvUm93Q29udHJvbD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkZpZWxkc01hcDtcblxuIiwiaW1wb3J0IHsgQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0IH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQWN0aW9uRmllbGRzTWFwQ29udGV4dCc7XG5pbXBvcnQgQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0N1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuXHQgICAgICB1c2VDb250ZXh0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gRHluYW1pY1Byb3BlcnR5U2VsZWN0KCB7XG5cdGR5bmFtaWMgPSBbXSxcblx0cGFyc2VWYWx1ZSA9IG51bGwsXG5cdGNoaWxkcmVuID0gbnVsbCxcblx0cHJvcGVydGllcyA9IG51bGwsXG59ICkge1xuXG5cdC8vIGNvbnRleHQgd2l0aCBhY3Rpb24gcHJvcHNcblx0Y29uc3Qge1xuXHRcdCAgICAgIHNvdXJjZSxcblx0XHQgICAgICBzZXR0aW5ncyxcblx0XHQgICAgICBzZXRNYXBGaWVsZCxcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCApO1xuXG5cdHByb3BlcnRpZXMgPSAoXG5cdFx0cHJvcGVydGllcyA/PyBzb3VyY2UucHJvcGVydGllc1xuXHQpO1xuXG5cdC8vIGNvbnRleHQgd2l0aCBjdXJyZW50IGZpZWxkIGluIGEgZmllbGQgbWFwXG5cdGNvbnN0IHtcblx0XHQgICAgICBuYW1lLFxuXHRcdCAgICAgIGluZGV4LFxuXHQgICAgICB9ID0gdXNlQ29udGV4dCggQWN0aW9uRmllbGRzTWFwQ29udGV4dCApO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBmaWVsZHNfbWFwOiBmaWVsZHNNYXAgPSB7fSxcblx0ICAgICAgfSA9IHNldHRpbmdzO1xuXG5cdGZ1bmN0aW9uIGdldFR5cGVGaWVsZFZhbHVlKCB2YWx1ZSApIHtcblx0XHRmb3IgKCBjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gcHJvcGVydHkudmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VWYWx1ZSA/IHBhcnNlVmFsdWUoIHZhbHVlICkgOiBkeW5hbWljWyAwIF0gPz8gJyc7XG5cdH1cblxuXHRjb25zdCBbIGN1cnJlbnRQcm9wLCBzZXRDdXJyZW50UHJvcCBdID0gdXNlU3RhdGUoXG5cdFx0KCkgPT4gZ2V0VHlwZUZpZWxkVmFsdWUoIGZpZWxkc01hcFsgbmFtZSBdID8/ICcnICksXG5cdCk7XG5cblx0Y29uc3QgZ2V0SGVscCA9ICgpID0+IHtcblx0XHRjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnRpZXMuZmluZChcblx0XHRcdCggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgPT09IGN1cnJlbnRQcm9wLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gcHJvcGVydHk/LmhlbHAgPz8gJyc7XG5cdH07XG5cblx0Y29uc3QgRmllbGRTZWxlY3QgPSAoXG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGtleT17IG5hbWUgKyBpbmRleCB9XG5cdFx0XHR2YWx1ZT17IGN1cnJlbnRQcm9wIH1cblx0XHRcdG9wdGlvbnM9eyBwcm9wZXJ0aWVzIH1cblx0XHRcdGhlbHA9eyBnZXRIZWxwKCkgfVxuXHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB7XG5cdFx0XHRcdGNvbnN0IHByb3AgPSBnZXRUeXBlRmllbGRWYWx1ZSggdmFsdWUgKTtcblxuXHRcdFx0XHRzZXRDdXJyZW50UHJvcCggcHJvcCApO1xuXHRcdFx0XHRzZXRNYXBGaWVsZCgge1xuXHRcdFx0XHRcdG5hbWVGaWVsZDogbmFtZSxcblx0XHRcdFx0XHR2YWx1ZTogZHluYW1pYy5pbmNsdWRlcyggdmFsdWUgKSA/ICcnIDogdmFsdWUsXG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gfVxuXHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdC8+XG5cdCk7XG5cblx0cmV0dXJuIDxDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsge1xuXHRcdEZpZWxkU2VsZWN0LFxuXHRcdHByb3BlcnR5OiBjdXJyZW50UHJvcCxcblx0fSB9PlxuXHRcdHsgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxuXHRcdHsgIWNoaWxkcmVuICYmIEZpZWxkU2VsZWN0IH1cblx0PC9DdXJyZW50UHJvcGVydHlNYXBDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1Byb3BlcnR5U2VsZWN0OyIsImltcG9ydCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQWN0aW9uRmllbGRzTWFwQ29udGV4dCc7XG5cbmNvbnN0IHsgUmF3SFRNTCwgdXNlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlclJlcXVpcmVkQ29udHJvbCgge1xuXHRjaGlsZHJlbixcblx0bGFiZWxLZXkgPSAnbGFiZWwnLFxuXHRyZXF1aXJlZEtleSA9ICdyZXF1aXJlZCcsXG5cdGhlbHBLZXkgPSAnaGVscCcsXG5cdGZpZWxkID0gW10sXG59ICkge1xuXG5cdGxldCB7IG5hbWUsIGRhdGEgfSA9IHVzZUNvbnRleHQoIEFjdGlvbkZpZWxkc01hcENvbnRleHQgKTtcblxuXHRpZiAoIGZpZWxkLmxlbmd0aCApIHtcblx0XHRbIG5hbWUsIGRhdGEgXSA9IGZpZWxkO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxuXHRcdFx0a2V5PXsgJ3VzZXJfbWV0YV8nICsgbmFtZSB9XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmllbGQtbWFwX19yb3ctbGFiZWxcIj5cblxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fbGFiZWwnIH0+XG5cdFx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0XHRkYXRhLmhhc093blByb3BlcnR5KCBsYWJlbEtleSApICYmIGRhdGFbIGxhYmVsS2V5IF1cblx0XHRcdFx0XHQpICYmIGRhdGFbIGxhYmVsS2V5IF0gfVxuXHRcdFx0XHRcdHsgKFxuXHRcdFx0XHRcdFx0IWRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5IClcblx0XHRcdFx0XHQpICYmIGRhdGEgfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdHsgKFxuXHRcdFx0XHRcdGRhdGEuaGFzT3duUHJvcGVydHkoIHJlcXVpcmVkS2V5ICkgJiYgZGF0YVsgcmVxdWlyZWRLZXkgXVxuXHRcdFx0XHQpICYmXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdmaWVsZHMtbWFwX19yZXF1aXJlZCcgfT4gKjwvc3Bhbj4gfVxuXHRcdFx0XHR7IGRhdGFbIGhlbHBLZXkgXSAmJiA8cFxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscCcgfVxuXHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxuXHRcdFx0XHRcdFx0bWFyZ2luOiAnMWVtIDAgMCAwJyxcblx0XHRcdFx0XHR9IH0+XG5cdFx0XHRcdFx0PFJhd0hUTUw+eyBkYXRhWyBoZWxwS2V5IF0gfTwvUmF3SFRNTD5cblx0XHRcdFx0PC9wPiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvZGl2PlxuXHQpO1xufSIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQWN0aW9uRmllbGRzTWFwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0bmFtZTogJycsXG5cdGRhdGE6IHt9LFxuXHRpbmRleDogMCxcbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRmllbGRzTWFwQ29udGV4dDtcbiIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0RmllbGRTZWxlY3Q6IG51bGwsXG5cdHByb3BlcnR5OiAnJ1xufSApO1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0OyIsImltcG9ydCBBY3Rpb25Nb2RhbENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BY3Rpb25Nb2RhbENvbnRleHQnO1xuaW1wb3J0IEFjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGwgZnJvbSAnLi9BY3Rpb25Nb2RhbEZvb3RlclNsb3RGaWxsJztcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3Qge1xuXHQgICAgICBTbG90OiBGb290ZXJTbG90LFxuICAgICAgfSA9IEFjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGw7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBBY3Rpb25Nb2RhbCgge1xuXHRvblJlcXVlc3RDbG9zZSxcblx0Y2hpbGRyZW4sXG5cdHRpdGxlID0gJycsXG5cdGNsYXNzTmFtZXMgPSBbXSxcblx0Y2xhc3NOYW1lID0gJycsXG5cdG9uVXBkYXRlQ2xpY2ssXG5cdG9uQ2FuY2VsQ2xpY2ssXG5cdHVwZGF0ZUJ0bkxhYmVsID0gJ1VwZGF0ZScsXG5cdHVwZGF0ZUJ0blByb3BzID0ge30sXG5cdGNhbmNlbEJ0blByb3BzID0ge30sXG5cdGNhbmNlbEJ0bkxhYmVsID0gJ0NhbmNlbCcsXG5cdGZpeGVkSGVpZ2h0ID0gJycsXG5cdC4uLnByb3BzXG59ICkge1xuXG5cdGNvbnN0IG1vZGFsQ2xhc3NlcyA9IFsgJ2pldC1mb3JtLWVkaXQtbW9kYWwnLCAuLi5jbGFzc05hbWVzLCBjbGFzc05hbWUgXTtcblxuXHRjb25zdCBbIGFjdGlvbkNsaWNrLCBzZXRBY3Rpb25DbGljayBdID0gdXNlU3RhdGUoIG51bGwgKTtcblxuXHRjb25zdCB1cGRhdGVDbGljayA9ICgpID0+IHtcblx0XHRpZiAoIG9uVXBkYXRlQ2xpY2sgKSB7XG5cdFx0XHRvblVwZGF0ZUNsaWNrKCk7XG5cdFx0fVxuXHRcdHNldEFjdGlvbkNsaWNrKCB0cnVlICk7XG5cdH07XG5cdGNvbnN0IGNhbmNlbENsaWNrID0gKCkgPT4ge1xuXHRcdGlmICggb25DYW5jZWxDbGljayApIHtcblx0XHRcdG9uQ2FuY2VsQ2xpY2soKTtcblx0XHR9XG5cdFx0c2V0QWN0aW9uQ2xpY2soIGZhbHNlICk7XG5cdH07XG5cblx0bGV0IHN0eWxlID0ge307XG5cdGlmICggZml4ZWRIZWlnaHQgKSB7XG5cdFx0c3R5bGUgPSB7IGhlaWdodDogZml4ZWRIZWlnaHQgfTtcblx0XHRtb2RhbENsYXNzZXMucHVzaCggJ2pldC1tb2RhbC1maXhlZC1oZWlnaHQnICk7XG5cdH1cblxuXHRyZXR1cm4gPE1vZGFsXG5cdFx0b25SZXF1ZXN0Q2xvc2U9eyBvblJlcXVlc3RDbG9zZSB9XG5cdFx0Y2xhc3NOYW1lPXsgbW9kYWxDbGFzc2VzLmpvaW4oICcgJyApIH1cblx0XHR0aXRsZT17IHRpdGxlIH1cblx0XHRzdHlsZT17IHN0eWxlIH1cblx0XHR7IC4uLnByb3BzIH1cblx0PlxuXHRcdHsgIWNoaWxkcmVuICYmIDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2NvbnRlbnRcIlxuXHRcdD5cblx0XHRcdHsgX18oICdBY3Rpb24gY2FsbGJhY2sgaXMgbm90IGZvdW5kLicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ8L2Rpdj4gfVxuXHRcdHsgY2hpbGRyZW4gJiYgPD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fd3JhcHBlclwiPlxuXHRcdFx0XHQ8QWN0aW9uTW9kYWxDb250ZXh0LlByb3ZpZGVyXG5cdFx0XHRcdFx0dmFsdWU9eyB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9IH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlbiAmJlxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApIH1cblx0XHRcdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9BY3Rpb25Nb2RhbENvbnRleHQuUHJvdmlkZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxGb290ZXJTbG90IGZpbGxQcm9wcz17IHsgdXBkYXRlQ2xpY2ssIGNhbmNlbENsaWNrIH0gfT5cblx0XHRcdFx0eyAoIGZpbGxzICkgPT4gKFxuXHRcdFx0XHRcdEJvb2xlYW4oIGZpbGxzPy5sZW5ndGggKVxuXHRcdFx0XHRcdD8gZmlsbHMgOiA8QnV0dG9uR3JvdXBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2FjdGlvbnNcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyB1cGRhdGVDbGljayB9XG5cdFx0XHRcdFx0XHRcdHsgLi4udXBkYXRlQnRuUHJvcHMgfVxuXHRcdFx0XHRcdFx0PnsgdXBkYXRlQnRuTGFiZWwgfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46ICcwIDAgMCAxMHB4Jyxcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBjYW5jZWxDbGljayB9XG5cdFx0XHRcdFx0XHRcdHsgLi4uY2FuY2VsQnRuUHJvcHMgfVxuXHRcdFx0XHRcdFx0PnsgY2FuY2VsQnRuTGFiZWwgfTwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9Gb290ZXJTbG90PlxuXHRcdDwvPiB9XG5cdDwvTW9kYWw+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25Nb2RhbDsiLCJjb25zdCB7XG5cdCAgICAgIGNyZWF0ZVNsb3RGaWxsLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEFjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGwgPSBjcmVhdGVTbG90RmlsbCggJ0pGQkFjdGlvbk1vZGFsRm9vdGVyJyApO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25Nb2RhbEZvb3RlclNsb3RGaWxsO1xuIiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBBY3Rpb25Nb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCB7XG5cdGFjdGlvbkNsaWNrOiBudWxsLFxuXHRvblJlcXVlc3RDbG9zZTogKCkgPT4ge1xuXHR9LFxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25Nb2RhbENvbnRleHQ7IiwiaW1wb3J0IEFjdGlvbk1vZGFsQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0FjdGlvbk1vZGFsQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHVzZU9uVXBkYXRlTW9kYWwoIGNhbGxiYWNrICkge1xuXHRjb25zdCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ID0gdXNlQ29udGV4dCggQWN0aW9uTW9kYWxDb250ZXh0ICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0Ly8gdXBkYXRlIGZpZWxkIGF0dHJpYnV0ZXNcblx0XHRpZiAoIGFjdGlvbkNsaWNrICkge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cblx0XHRpZiAoIG51bGwgIT09IGFjdGlvbkNsaWNrICkge1xuXHRcdFx0b25SZXF1ZXN0Q2xvc2UoKTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbIGFjdGlvbkNsaWNrIF0gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlT25VcGRhdGVNb2RhbDsiLCJpbXBvcnQgeyB1c2VGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWJsb2Nrcy10by1hY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuXHQgICAgICB3aXRoRmlsdGVycyxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IEJlZm9yZUNvbmRpdGlvbk9wdGlvbnMgPSB3aXRoRmlsdGVycyggJ2pldC5mYi5ibG9jay5jb25kaXRpb25zLm9wdGlvbnMnICkoXG5cdHByb3BzID0+IHtcblx0XHRjb25zdCB7IGN1cnJlbnRJdGVtLCBjaGFuZ2VDdXJyZW50SXRlbSB9ID0gcHJvcHM7XG5cblx0XHRjb25zdCBmb3JtRmllbGRzID0gdXNlRmllbGRzKCB7IHBsYWNlaG9sZGVyOiAnLS0nIH0gKTtcblxuXHRcdHN3aXRjaCAoIGN1cnJlbnRJdGVtLm9wZXJhdG9yICkge1xuXHRcdFx0Y2FzZSAncmVuZGVyX3N0YXRlJzpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZmllbGQgfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGZpZWxkOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+O1xuXHRcdH1cblx0fSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJlZm9yZUNvbmRpdGlvbk9wdGlvbnM7IiwiaW1wb3J0IFJlcGVhdGVySXRlbUNvbnRleHQgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29udGV4dC9yZXBlYXRlci5pdGVtJztcbmltcG9ydCB1c2VVbmlxS2V5IGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VVbmlxS2V5JztcbmltcG9ydCB1c2VCbG9ja0NvbmRpdGlvbnMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tDb25kaXRpb25zJztcbmltcG9ydCBDb25kaXRpb25PcHRpb25zIGZyb20gJy4vQ29uZGl0aW9uT3B0aW9ucyc7XG5pbXBvcnQgQmVmb3JlQ29uZGl0aW9uT3B0aW9ucyBmcm9tICcuL0JlZm9yZUNvbmRpdGlvbk9wdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBDb25kaXRpb25JdGVtKCkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgY3VycmVudEl0ZW0sXG5cdFx0ICAgICAgY2hhbmdlQ3VycmVudEl0ZW0sXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBSZXBlYXRlckl0ZW1Db250ZXh0ICk7XG5cblx0Y29uc3QgdW5pcUtleSAgICAgICA9IHVzZVVuaXFLZXkoKTtcblx0Y29uc3QgeyBvcGVyYXRvcnMgfSA9IHVzZUJsb2NrQ29uZGl0aW9ucygpO1xuXG5cdHJldHVybiA8PlxuXHRcdDxCZWZvcmVDb25kaXRpb25PcHRpb25zXG5cdFx0XHRjdXJyZW50SXRlbT17IGN1cnJlbnRJdGVtIH1cblx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtPXsgY2hhbmdlQ3VycmVudEl0ZW0gfVxuXHRcdC8+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGtleT17IHVuaXFLZXkoICdTZWxlY3RDb250cm9sLW9wZXJhdG9yJyApIH1cblx0XHRcdGxhYmVsPXsgX18oICdPcGVyYXRvcicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ub3BlcmF0b3IgfVxuXHRcdFx0b3B0aW9ucz17IG9wZXJhdG9ycyB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IG9wZXJhdG9yOiBuZXdWYWx1ZSB9ICkgfVxuXHRcdC8+XG5cdFx0PENvbmRpdGlvbk9wdGlvbnNcblx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBjaGFuZ2VDdXJyZW50SXRlbSB9XG5cdFx0Lz5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25JdGVtOyIsImltcG9ydCBSZW5kZXJTdGF0ZU9wdGlvbnMgZnJvbSAnLi9SZW5kZXJTdGF0ZU9wdGlvbnMnO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZVVuaXFLZXknO1xuaW1wb3J0IENsaWVudFNpZGVNYWNyb3MgZnJvbSAnLi4vLi4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL0NsaWVudFNpZGVNYWNyb3MnO1xuaW1wb3J0IEFkdmFuY2VkTW9kYWxDb250cm9sIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWR2YW5jZWRNb2RhbENvbnRyb2wnO1xuXG5jb25zdCB7XG5cdCAgICAgIFRleHRhcmVhQ29udHJvbCxcblx0ICAgICAgd2l0aEZpbHRlcnMsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3QgQ29uZGl0aW9uT3B0aW9ucyA9IHdpdGhGaWx0ZXJzKCAnamV0LmZiLmJsb2NrLmNvbmRpdGlvbnMub3B0aW9ucycgKShcblx0cHJvcHMgPT4ge1xuXHRcdGNvbnN0IHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gPSBwcm9wcztcblxuXHRcdGNvbnN0IHVuaXFLZXkgPSB1c2VVbmlxS2V5KCk7XG5cblx0XHRpZiAoIFsgJ2VtcHR5JywgJ25vdF9lbXB0eScgXS5pbmNsdWRlcyggY3VycmVudEl0ZW0ub3BlcmF0b3IgKSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoIGN1cnJlbnRJdGVtLm9wZXJhdG9yICkge1xuXHRcdFx0Y2FzZSAncmVuZGVyX3N0YXRlJzpcblx0XHRcdFx0cmV0dXJuIDxSZW5kZXJTdGF0ZU9wdGlvbnNcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUmVuZGVyU3RhdGVPcHRpb25zJyApIH1cblx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbT17IGNoYW5nZUN1cnJlbnRJdGVtIH1cblx0XHRcdFx0XHRjdXJyZW50SXRlbT17IGN1cnJlbnRJdGVtIH1cblx0XHRcdFx0Lz47XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gPENsaWVudFNpZGVNYWNyb3M+XG5cdFx0XHRcdFx0PEFkdmFuY2VkTW9kYWxDb250cm9sXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZSB0byBjb21wYXJlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2VQcmVzZXQ9eyB2YWx1ZSA9PiBjaGFuZ2VDdXJyZW50SXRlbShcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZSB9ICkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2VNYWNyb3M9eyBuYW1lID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudEl0ZW0udmFsdWUgPz8gJydcblx0XHRcdFx0XHRcdFx0KSArIG5hbWUsXG5cdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHsgKCB7IGluc3RhbmNlSWQgfSApID0+IDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0aWQ9eyBpbnN0YW5jZUlkIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWUgfSApIH1cblx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHQ8L0FkdmFuY2VkTW9kYWxDb250cm9sPlxuXHRcdFx0XHQ8L0NsaWVudFNpZGVNYWNyb3M+O1xuXHRcdH1cblx0fSApO1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25PcHRpb25zOyIsImltcG9ydCBSZXBlYXRlckhlYWRDb250ZXh0XG5cdGZyb20gJy4uLy4uL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uaGVhZCc7XG5pbXBvcnQgUmVwZWF0ZXJCdXR0b25zQ29udGV4dFxuXHRmcm9tICcuLi8uLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmJ1dHRvbnMnO1xuaW1wb3J0IGh1bWFuUmVhZGFibGVDb25kaXRpb24gZnJvbSAnLi4vaGVscGVycy9odW1hblJlYWRhYmxlQ29uZGl0aW9uJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBDb25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXIoIHsgY2hpbGRyZW4gfSApIHtcblx0cmV0dXJuIDxSZXBlYXRlckhlYWRDb250ZXh0LlByb3ZpZGVyXG5cdFx0dmFsdWU9eyB7XG5cdFx0XHRpc1N1cHBvcnRlZDogKCkgPT4gdHJ1ZSxcblx0XHRcdHJlbmRlcjogKCB7IGN1cnJlbnRJdGVtIH0gKSA9PiA8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbS10aXRsZScgfVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtcblx0XHRcdFx0XHRfX2h0bWw6IGN1cnJlbnRJdGVtPy5vcl9vcGVyYXRvclxuXHRcdFx0XHRcdCAgICAgICAgPyBfXyggJ09SJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdFx0XHQgICAgICAgIDogaHVtYW5SZWFkYWJsZUNvbmRpdGlvbiggY3VycmVudEl0ZW0gKSxcblx0XHRcdFx0fSB9XG5cdFx0XHQvPixcblx0XHR9IH1cblx0PlxuXHRcdDxSZXBlYXRlckJ1dHRvbnNDb250ZXh0LlByb3ZpZGVyXG5cdFx0XHR2YWx1ZT17IHtcblx0XHRcdFx0ZWRpdDogaXRlbSA9PiAhaXRlbS5vcl9vcGVyYXRvcixcblx0XHRcdH0gfVxuXHRcdD5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvUmVwZWF0ZXJCdXR0b25zQ29udGV4dC5Qcm92aWRlcj5cblx0PC9SZXBlYXRlckhlYWRDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uc1JlcGVhdGVyQ29udGV4dFByb3ZpZGVyOyIsImltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tICcuLi8uLi9hY3Rpb24tbW9kYWwvY29tcG9uZW50cy9BY3Rpb25Nb2RhbCc7XG5pbXBvcnQgQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbFxuXHRmcm9tICcuLi8uLi9hY3Rpb24tbW9kYWwvY29tcG9uZW50cy9BY3Rpb25Nb2RhbEZvb3RlclNsb3RGaWxsJztcbmltcG9ydCBhcGlGZXRjaCBmcm9tICdAd29yZHByZXNzL2FwaS1mZXRjaCc7XG5pbXBvcnQgeyBCdXR0b24sIFRleHRDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IHVzZVNlbGVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5jb25zdCB7XG5cdCAgICAgIHJlc3RfYWRkX3N0YXRlOiByZXN0QWRkU3RhdGUsXG5cdCAgICAgIHJlc3RfZGVsZXRlX3N0YXRlOiByZXN0RGVsZXRlU3RhdGUsXG4gICAgICB9ID0gd2luZG93LmpldEZvcm1CbG9ja0NvbmRpdGlvbnM7XG5cbmNvbnN0IHsgRmlsbDogTW9kYWxGb290ZXJGaWxsIH0gPSBBY3Rpb25Nb2RhbEZvb3RlclNsb3RGaWxsO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuY29uc3QgRWRpdEN1c3RvbVJlbmRlclN0YXRlcyA9ICgge1xuXHRzZXRTaG93TW9kYWwsXG5cdGNoYW5nZUN1cnJlbnRJdGVtLFxuXHRjdXJyZW50SXRlbSxcbn0gKSA9PiB7XG5cblx0Y29uc3QgWyBpc0xvYWRpbmcsIHNldEJ1dHRvbkxvYWRpbmcgXSAgID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cdGNvbnN0IFsgaXNMb2FkaW5nSXRlbSwgc2V0SXRlbUxvYWRpbmcgXSA9IHVzZVN0YXRlKCB7fSApO1xuXHRjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdICAgICAgICAgICAgICAgPSB1c2VTdGF0ZSggJycgKTtcblx0bGV0IGN1cnJlbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gW1xuXHRcdC4uLmN1cnJlbnRJdGVtLnJlbmRlcl9zdGF0ZSA/PyBbXSxcblx0XTtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgYWRkUmVuZGVyU3RhdGUsXG5cdFx0ICAgICAgZGVsZXRlUmVuZGVyU3RhdGVzLFxuXHQgICAgICB9ID0gdXNlRGlzcGF0Y2goICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKTtcblxuXHRjb25zdCBjdXN0b21TdGF0ZXMgPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2pldC1mb3Jtcy9ibG9jay1jb25kaXRpb25zJyApLlxuXHRcdFx0Z2V0Q3VzdG9tUmVuZGVyU3RhdGVzKCksXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHRcdFsgaXNMb2FkaW5nLCBpc0xvYWRpbmdJdGVtIF0sXG5cdCk7XG5cblx0Y29uc3QgYWRkU3RhdGUgPSAoKSA9PiB7XG5cdFx0c2V0QnV0dG9uTG9hZGluZyggdHJ1ZSApO1xuXHRcdHJlc3RBZGRTdGF0ZS5kYXRhID0geyB2YWx1ZSB9O1xuXG5cdFx0YXBpRmV0Y2goIHJlc3RBZGRTdGF0ZSApLnRoZW4oIHJlc3BvbnNlID0+IHtcblx0XHRcdG9uU3VjY2Vzc0FkZCggcmVzcG9uc2Uuc3RhdGUgKTtcblx0XHRcdHNldEJ1dHRvbkxvYWRpbmcoIGZhbHNlICk7XG5cdFx0XHRzZXRTaG93TW9kYWwoIGZhbHNlICk7XG5cblx0XHR9ICkuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKCBlcnJvciApO1xuXHRcdFx0c2V0QnV0dG9uTG9hZGluZyggZmFsc2UgKTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlU3RhdGUgPSBuYW1lID0+IHtcblx0XHRyZXN0RGVsZXRlU3RhdGUuZGF0YSA9IHsgbGlzdDogWyBuYW1lIF0gfTtcblx0XHRzZXRJdGVtTG9hZGluZyggcHJldiA9PiAoXG5cdFx0XHR7IC4uLnByZXYsIFsgbmFtZSBdOiB0cnVlIH1cblx0XHQpICk7XG5cblx0XHRhcGlGZXRjaCggcmVzdERlbGV0ZVN0YXRlICkudGhlbiggKCkgPT4ge1xuXHRcdFx0b25EZWxldGUoIG5hbWUgKTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0fSApLmNhdGNoKCBjb25zb2xlLmVycm9yICkuZmluYWxseSggKCkgPT4ge1xuXHRcdFx0c2V0SXRlbUxvYWRpbmcoIHByZXYgPT4gKFxuXHRcdFx0XHR7IC4uLnByZXYsIFsgbmFtZSBdOiBmYWxzZSB9XG5cdFx0XHQpICk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IG9uU3VjY2Vzc0FkZCA9IHN0YXRlID0+IHtcblx0XHRhZGRSZW5kZXJTdGF0ZSggc3RhdGUgKTtcblx0XHRjdXJyZW50LnB1c2goIHN0YXRlLnZhbHVlICk7XG5cblx0XHRjaGFuZ2VDdXJyZW50SXRlbSgge1xuXHRcdFx0cmVuZGVyX3N0YXRlOiBjdXJyZW50LFxuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCBvbkRlbGV0ZSA9IG5hbWUgPT4ge1xuXHRcdGRlbGV0ZVJlbmRlclN0YXRlcyggbmFtZSApO1xuXHRcdGN1cnJlbnQgPSBjdXJyZW50LmZpbHRlciggaXRlbSA9PiBpdGVtICE9PSBuYW1lICk7XG5cblx0XHRjaGFuZ2VDdXJyZW50SXRlbSgge1xuXHRcdFx0cmVuZGVyX3N0YXRlOiBjdXJyZW50LFxuXHRcdH0gKTtcblx0fTtcblxuXHRyZXR1cm4gPEFjdGlvbk1vZGFsXG5cdFx0dGl0bGU9eyBfXyggJ1JlZ2lzdGVyIGN1c3RvbSByZW5kZXIgc3RhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRTaG93TW9kYWwoIGZhbHNlICkgfVxuXHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC00NScgXSB9XG5cdD5cblx0XHR7Lyo8Tm90aWNlSW5mbyBzdHlsZT17IHsgbWFyZ2luQm90dG9tOiAnMWVtJyB9IH0vPiovIH1cblx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZmIgd2l0aC1idXR0b24nIH0+XG5cdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0VmFsdWUoIG5ld1ZhbHVlICkgfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKFxuXHRcdFx0XHRcdCdTZXQgeW91ciBjdXN0b20gc3RhdGUgbmFtZScsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHQpIH1cblx0XHRcdC8+XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdHZhcmlhbnQ9eyAnc2Vjb25kYXJ5JyB9XG5cdFx0XHRcdG9uQ2xpY2s9eyBhZGRTdGF0ZSB9XG5cdFx0XHRcdGRpc2FibGVkPXsgaXNMb2FkaW5nIH1cblx0XHRcdFx0aXNCdXN5PXsgaXNMb2FkaW5nIH1cblx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0cGFkZGluZzogJzdweCAxMnB4Jyxcblx0XHRcdFx0XHRoZWlnaHQ6ICd1bnNldCcsXG5cdFx0XHRcdH0gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnQWRkJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9kaXY+XG5cdFx0eyBCb29sZWFuKCBjdXN0b21TdGF0ZXM/Lmxlbmd0aCApICYmIDw+XG5cdFx0XHQ8YiBjbGFzc05hbWU9eyAnamV0LWZiIGZsZXggbWItMDUtZW0nIH0+XG5cdFx0XHRcdHsgX18oICdNYW5hZ2UgeW91ciBjdXN0b20gc3RhdGVzOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdDwvYj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mYi1idXR0b25zLWZsZXgnIH0+XG5cdFx0XHRcdHsgY3VzdG9tU3RhdGVzLm1hcCggc3RhdGUgPT4gPEJ1dHRvblxuXHRcdFx0XHRcdGtleT17IHN0YXRlLnZhbHVlIH1cblx0XHRcdFx0XHRpY29uPXsgJ25vLWFsdCcgfVxuXHRcdFx0XHRcdGljb25Qb3NpdGlvbj17ICdyaWdodCcgfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiByZW1vdmVTdGF0ZSggc3RhdGUudmFsdWUgKSB9XG5cdFx0XHRcdFx0aXNCdXN5PXsgaXNMb2FkaW5nSXRlbVsgc3RhdGUudmFsdWUgXSA/PyBmYWxzZSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IHN0YXRlLmxhYmVsIH1cblx0XHRcdFx0PC9CdXR0b24+ICkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+IH1cblx0XHQ8TW9kYWxGb290ZXJGaWxsPlxuXHRcdFx0PHNwYW4vPlxuXHRcdDwvTW9kYWxGb290ZXJGaWxsPlxuXHQ8L0FjdGlvbk1vZGFsPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRDdXN0b21SZW5kZXJTdGF0ZXM7IiwiaW1wb3J0IGh1bWFuUmVhZGFibGVDb25kaXRpb24gZnJvbSAnLi4vaGVscGVycy9odW1hblJlYWRhYmxlQ29uZGl0aW9uJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBDaGlsZHJlbixcblx0ICAgICAgY2xvbmVFbGVtZW50LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIEh1bWFuUmVhZGFibGVDb25kaXRpb25zKCB7IGNvbmRpdGlvbnMsIHNob3dXYXJuaW5nID0gZmFsc2UgfSApIHtcblx0bGV0IGNvbmRpdGlvbnNFbGVtZW50cyA9IFtdO1xuXHRsZXQgZmlyc3RSZWFkQ29uZGl0aW9uID0gJyc7XG5cblx0aWYgKCBCb29sZWFuKCBjb25kaXRpb25zPy5sZW5ndGggKSApIHtcblx0XHRmaXJzdFJlYWRDb25kaXRpb24gPSBodW1hblJlYWRhYmxlQ29uZGl0aW9uKCBjb25kaXRpb25zWyAwIF0gKTtcblxuXHRcdGNvbmRpdGlvbnNFbGVtZW50cyA9IGNvbmRpdGlvbnMuZmlsdGVyKFxuXHRcdFx0Ly8gRXhjbHVkZSBmaXJzdCBpdGVtXG5cdFx0XHQoIGMsIGluZGV4ICkgPT4gMCAhPT0gaW5kZXgsXG5cdFx0KS5tYXAoXG5cdFx0XHQoIGNvbmRpdGlvbiwgaW5kZXggKSA9PiA8c3BhblxuXHRcdFx0XHRrZXk9eyBpbmRleCB9XG5cdFx0XHRcdGRhdGEtdGl0bGU9eyBfXyggJ0FuZCcsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJzonIH1cblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7XG5cdFx0XHRcdFx0X19odG1sOiBodW1hblJlYWRhYmxlQ29uZGl0aW9uKCBjb25kaXRpb24gKSxcblx0XHRcdFx0fSB9XG5cdFx0XHQvPixcblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIGZpcnN0UmVhZENvbmRpdGlvbiA/IDw+XG5cdFx0IDxzcGFuXG5cdFx0XHQgZGF0YS10aXRsZT17IF9fKFxuXHRcdFx0XHQgJ0lmJywgJ2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0ICkgKyAnOicgfVxuXHRcdFx0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge1xuXHRcdFx0XHQgX19odG1sOiBmaXJzdFJlYWRDb25kaXRpb24sXG5cdFx0XHQgfSB9XG5cdFx0IC8+XG5cdFx0eyBDaGlsZHJlbi5tYXAoIGNvbmRpdGlvbnNFbGVtZW50cywgY2xvbmVFbGVtZW50ICkgfVxuXHQ8Lz4gOiBzaG93V2FybmluZyAmJiA8c3BhblxuXHRcdGRhdGEtdGl0bGU9eyBfXyhcblx0XHRcdCdUaGUgY29uZGl0aW9uIGlzIG5vdCBmdWxseSBjb25maWd1cmVkLicsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSB9XG5cdC8+O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEh1bWFuUmVhZGFibGVDb25kaXRpb25zOyIsImltcG9ydCBFZGl0Q3VzdG9tUmVuZGVyU3RhdGVzIGZyb20gJy4vRWRpdEN1c3RvbVJlbmRlclN0YXRlcyc7XG5pbXBvcnQgeyBjb2x1bW4gfSBmcm9tICcuLi8uLi90b29scyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuXHQgICAgICBCYXNlQ29udHJvbCxcblx0ICAgICAgRm9ybVRva2VuRmllbGQsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCBSZW5kZXJTdGF0ZU9wdGlvbnMgPSAoIHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gKSA9PiB7XG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdGNvbnN0IHJlbmRlclN0YXRlcyA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gY29sdW1uKFxuXHRcdFx0c2VsZWN0KCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkuZ2V0UmVuZGVyU3RhdGVzKCksXG5cdFx0XHQndmFsdWUnLFxuXHRcdCksXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHRcdFsgc2hvd01vZGFsIF0sXG5cdCk7XG5cdC8vIGxhYmVsPXsgIH1cblx0cmV0dXJuIDw+XG5cdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAd29yZHByZXNzL25vLWJhc2UtY29udHJvbC13aXRoLWxhYmVsLXdpdGhvdXQtaWQgKi8gfVxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0bGFiZWw9eyBfXyggJ1JlbmRlciBTdGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGNsYXNzTmFtZT17ICdjb250cm9sLWZsZXgnIH1cblx0XHQ+XG5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqLyB9XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9eyAnamV0LWZiIGxhYmVsIG1iLTA1LWVtJyB9PlxuXHRcdFx0XHRcdHsgX18oICdBZGQgcmVuZGVyIHN0YXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZmIgd2l0aC1idXR0b24gY2xlYXItbGFiZWwnIH0+XG5cdFx0XHRcdFx0PEZvcm1Ub2tlbkZpZWxkXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnJlbmRlcl9zdGF0ZSB9XG5cdFx0XHRcdFx0XHRzdWdnZXN0aW9ucz17IHJlbmRlclN0YXRlcyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbCA9PiBjaGFuZ2VDdXJyZW50SXRlbShcblx0XHRcdFx0XHRcdFx0eyByZW5kZXJfc3RhdGU6IHZhbCB9LFxuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHR0b2tlbml6ZU9uU3BhY2Vcblx0XHRcdFx0XHRcdF9fZXhwZXJpbWVudGFsRXhwYW5kT25Gb2N1c1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ05ldyByZW5kZXIgc3RhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHR2YXJpYW50PXsgJ3NlY29uZGFyeScgfVxuXHRcdFx0XHRcdFx0aWNvbj17ICdwbHVzLWFsdDInIH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93TW9kYWwoIHRydWUgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdHsgc2hvd01vZGFsICYmIDxFZGl0Q3VzdG9tUmVuZGVyU3RhdGVzXG5cdFx0XHRzZXRTaG93TW9kYWw9eyBzZXRTaG93TW9kYWwgfVxuXHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBjaGFuZ2VDdXJyZW50SXRlbSB9XG5cdFx0XHRjdXJyZW50SXRlbT17IGN1cnJlbnRJdGVtIH1cblx0XHQvPiB9XG5cdDwvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN0YXRlT3B0aW9uczsiLCJjb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG4vKipcbiAqIEBwYXJhbSAgY29uZGl0aW9uXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHVtYW5SZWFkYWJsZUNvbmRpdGlvbiggY29uZGl0aW9uICkge1xuXHRyZXR1cm4gc2VsZWN0KCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkucmVhZENvbmRpdGlvbiggY29uZGl0aW9uICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGh1bWFuUmVhZGFibGVDb25kaXRpb247IiwiY29uc3QgeyB1c2VTZWxlY3QgfSA9IHdwLmRhdGE7XG5cbi8qKlxuICogQHJldHVybiB7e2Z1bmN0aW9ucywgb3BlcmF0b3JzfX1cbiAqL1xuZnVuY3Rpb24gdXNlQmxvY2tDb25kaXRpb25zKCkge1xuXHRjb25zdCBbIG9wZXJhdG9ycywgZnVuY3Rpb25zIF0gPSB1c2VTZWxlY3QoIHNlbGVjdCA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHNlbGVjdCggJ2pldC1mb3Jtcy9ibG9jay1jb25kaXRpb25zJyApLmdldE9wZXJhdG9ycygpLFxuXHRcdFx0c2VsZWN0KCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkuZ2V0RnVuY3Rpb25zKCksXG5cdFx0XTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4ge1xuXHRcdG9wZXJhdG9ycyxcblx0XHRmdW5jdGlvbnMsXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUJsb2NrQ29uZGl0aW9uczsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRyZWdpc3RlciggaXRlbXMgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5yZWdpc3Rlcixcblx0XHRcdGl0ZW1zLFxuXHRcdH07XG5cdH0sXG5cdGFkZFJlbmRlclN0YXRlKCBpdGVtICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuYWRkUmVuZGVyU3RhdGUsXG5cdFx0XHRpdGVtLFxuXHRcdH07XG5cdH0sXG5cdGFkZFJlbmRlclN0YXRlcyggaXRlbXMgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5hZGRSZW5kZXJTdGF0ZXMsXG5cdFx0XHRpdGVtcyxcblx0XHR9O1xuXHR9LFxuXHRkZWxldGVSZW5kZXJTdGF0ZXMoIGl0ZW1zICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuZGVsZXRlUmVuZGVyU3RhdGVzLFxuXHRcdFx0aXRlbXMsXG5cdFx0fVxuXHR9XG5cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRyZWdpc3RlcjogJ1JFR0lTVEVSJyxcblx0YWRkUmVuZGVyU3RhdGU6ICdBRERfUkVOREVSX1NUQVRFJyxcblx0YWRkUmVuZGVyU3RhdGVzOiAnQUREX1JFTkRFUl9TVEFURVMnLFxuXHRkZWxldGVSZW5kZXJTdGF0ZXM6ICdERUxFVEVfUkVOREVSX1NUQVRFUycsXG59XG5cblxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHsgZG9BY3Rpb24gfSA9IHdwLmhvb2tzO1xuXG5jb25zdCBkaXNwYXRjaGVycyA9IHtcblx0WyBjb25zdGFudHMucmVnaXN0ZXIgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRjb25zdCB7IG9wZXJhdG9ycywgZnVuY3Rpb25zLCByZW5kZXJfc3RhdGVzOiByZW5kZXJTdGF0ZXMgfSA9IGFjdGlvbi5pdGVtcztcblxuXHRcdHN0YXRlLm9wZXJhdG9ycyAgICA9IFsgLi4ub3BlcmF0b3JzIF07XG5cdFx0c3RhdGUuZnVuY3Rpb25zICAgID0gWyAuLi5mdW5jdGlvbnMgXTtcblx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMgPSBbIC4uLnJlbmRlclN0YXRlcyBdO1xuXG5cdFx0ZG9BY3Rpb24oXG5cdFx0XHQnamV0LmZiLmNoYW5nZS5ibG9ja0NvbmRpdGlvbnMucmVuZGVyU3RhdGUnLFxuXHRcdFx0c3RhdGUucmVuZGVyU3RhdGVzLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdFsgY29uc3RhbnRzLmFkZFJlbmRlclN0YXRlIF0oIHN0YXRlLCBhY3Rpb24gKSB7XG5cdFx0c3RhdGUucmVuZGVyU3RhdGVzLnB1c2goIGFjdGlvbi5pdGVtICk7XG5cblx0XHRkb0FjdGlvbihcblx0XHRcdCdqZXQuZmIuY2hhbmdlLmJsb2NrQ29uZGl0aW9ucy5yZW5kZXJTdGF0ZScsXG5cdFx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMsXG5cdFx0KTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0WyBjb25zdGFudHMuYWRkUmVuZGVyU3RhdGVzIF0oIHN0YXRlLCBhY3Rpb24gKSB7XG5cdFx0Zm9yICggY29uc3QgaXRlbSBvZiBhY3Rpb24uaXRlbXMgKSB7XG5cdFx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMucHVzaCggaXRlbSApO1xuXHRcdH1cblxuXHRcdGRvQWN0aW9uKFxuXHRcdFx0J2pldC5mYi5jaGFuZ2UuYmxvY2tDb25kaXRpb25zLnJlbmRlclN0YXRlJyxcblx0XHRcdHN0YXRlLnJlbmRlclN0YXRlcyxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRbIGNvbnN0YW50cy5kZWxldGVSZW5kZXJTdGF0ZXMgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRjb25zdCBpdGVtcyA9IEFycmF5LmlzQXJyYXkoIGFjdGlvbi5pdGVtcyApXG5cdFx0ICAgICAgICAgICAgPyBbIC4uLmFjdGlvbi5pdGVtcyBdXG5cdFx0ICAgICAgICAgICAgOiBbIGFjdGlvbi5pdGVtcyBdO1xuXG5cdFx0c3RhdGUucmVuZGVyU3RhdGVzID0gc3RhdGUucmVuZGVyU3RhdGVzLmZpbHRlcihcblx0XHRcdCggeyB2YWx1ZSB9ICkgPT4gIWl0ZW1zLmluY2x1ZGVzKCB2YWx1ZSApLFxuXHRcdCk7XG5cblx0XHRkb0FjdGlvbihcblx0XHRcdCdqZXQuZmIuY2hhbmdlLmJsb2NrQ29uZGl0aW9ucy5yZW5kZXJTdGF0ZScsXG5cdFx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMsXG5cdFx0KTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Li4uZGlzcGF0Y2hlcnMsXG59OyIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmNvbnN0IHsgY3JlYXRlUmVkdXhTdG9yZSB9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdXhTdG9yZSggJ2pldC1mb3Jtcy9ibG9jay1jb25kaXRpb25zJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnMsXG59ICk7XG4iLCJpbXBvcnQgZGlzcGF0Y2hlcnMgZnJvbSAnLi9kaXNwYXRjaGVycyc7XG5pbXBvcnQgaHVtYW5SZWFkYWJsZVByZXNldCBmcm9tICcuLi8uLi9wcmVzZXQvaGVscGVycy9odW1hblJlYWRhYmxlUHJlc2V0JztcblxuY29uc3Qge1xuXHQgICAgICBzZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3QgZW1wdHlDb25kaXRpb24gPSBmdW5jdGlvbiAoIGNvbmRpdGlvbiApIHtcblx0Y29uc3Qgb3BlcmF0b3JPcHRpb25zID0gc2VsZWN0KCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkuXG5cdFx0Z2V0T3BlcmF0b3IoIGNvbmRpdGlvbj8ub3BlcmF0b3IgKTtcblxuXHRpZiAoICFvcGVyYXRvck9wdGlvbnMgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGNvbnN0IGZpZWxkID0gY29uZGl0aW9uPy5maWVsZCB8fCAnKG5vIGZpZWxkKSc7XG5cblx0cmV0dXJuIFtcblx0XHRgPGNvZGU+JHsgZmllbGQgfTwvY29kZT5gLFxuXHRcdG9wZXJhdG9yT3B0aW9ucy5sYWJlbCxcblx0XS5qb2luKCAnICcgKTtcbn07XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XG5cdGZ1bmN0aW9uczogW10sXG5cdG9wZXJhdG9yczogW10sXG5cdGNvbmRpdGlvblJlYWRlcnM6IHtcblx0XHRkZWZhdWx0ICggY29uZGl0aW9uICkge1xuXHRcdFx0Y29uc3Qgb3BlcmF0b3JPcHRpb25zID0gc2VsZWN0KCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkuXG5cdFx0XHRcdGdldE9wZXJhdG9yKCBjb25kaXRpb24/Lm9wZXJhdG9yICk7XG5cblx0XHRcdGlmICggIW9wZXJhdG9yT3B0aW9ucyApIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZmllbGQgPSBjb25kaXRpb24/LmZpZWxkIHx8ICcobm8gZmllbGQpJztcblx0XHRcdGNvbnN0IHZhbHVlID0gKFxuXHRcdFx0XHRodW1hblJlYWRhYmxlUHJlc2V0KCBjb25kaXRpb24udmFsdWUsICdiJyApIHx8ICcobm8gdmFsdWUpJ1xuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0YDxjb2RlPiR7IGZpZWxkIH08L2NvZGU+YCxcblx0XHRcdFx0b3BlcmF0b3JPcHRpb25zLmxhYmVsLFxuXHRcdFx0XHRgPGNvZGU+JHsgdmFsdWUgfTwvY29kZT5gLFxuXHRcdFx0XS5qb2luKCAnICcgKTtcblx0XHR9LFxuXHRcdGVtcHR5OiBlbXB0eUNvbmRpdGlvbixcblx0XHRub3RfZW1wdHk6IGVtcHR5Q29uZGl0aW9uLFxuXHRcdHJlbmRlcl9zdGF0ZSAoIGNvbmRpdGlvbiApIHtcblx0XHRcdGNvbnN0IHN0YXRlcyA9IChcblx0XHRcdFx0Y29uZGl0aW9uPy5yZW5kZXJfc3RhdGUgPz8gW11cblx0XHRcdCkubWFwKFxuXHRcdFx0XHRjdXJyZW50ID0+IGA8Y29kZT4keyBjdXJyZW50IH08L2NvZGU+YCxcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IGxhYmVsID0gMSA9PT0gc3RhdGVzLmxlbmd0aFxuXHRcdFx0ICAgICAgICAgICAgICA/IF9fKCAnSXMgcmVuZGVyIHN0YXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdCAgICAgICAgICAgICAgOiBfXyhcblx0XHRcdFx0XHQnT25lIG9mIHRoZSByZW5kZXIgc3RhdGVzJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdGxhYmVsLFxuXHRcdFx0XHRzdGF0ZXMuam9pbiggJywgJyApLFxuXHRcdFx0XS5qb2luKCAnOiAnICk7XG5cdFx0fSxcblx0fSxcblx0cmVuZGVyU3RhdGVzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XG5cdGNvbnN0IGNhbGxiYWNrID0gZGlzcGF0Y2hlcnNbIGFjdGlvbj8udHlwZSBdO1xuXG5cdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKCBzdGF0ZSwgYWN0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59IiwiY29uc3Qgc2VsZWN0b3JzID0ge1xuXHRnZXRGdW5jdGlvbnMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5mdW5jdGlvbnM7XG5cdH0sXG5cdGdldE9wZXJhdG9ycyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLm9wZXJhdG9ycztcblx0fSxcblx0Z2V0UmVuZGVyU3RhdGVzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUucmVuZGVyU3RhdGVzO1xuXHR9LFxuXHRnZXRTd2l0Y2hhYmxlUmVuZGVyU3RhdGVzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUucmVuZGVyU3RhdGVzLmZpbHRlcihcblx0XHRcdCggeyBpc19jdXN0b206IGlzQ3VzdG9tID0gZmFsc2UsIGNhbl9iZV9zd2l0Y2hlZDogY2FuQmVTd2l0Y2hlZCA9IGZhbHNlIH0gKSA9PiAoXG5cdFx0XHRcdGlzQ3VzdG9tIHx8IGNhbkJlU3dpdGNoZWRcblx0XHRcdCksXG5cdFx0KTtcblx0fSxcblx0Z2V0Q3VzdG9tUmVuZGVyU3RhdGVzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUucmVuZGVyU3RhdGVzLmZpbHRlcihcblx0XHRcdCggeyBpc19jdXN0b206IGlzQ3VzdG9tID0gZmFsc2UgfSApID0+IGlzQ3VzdG9tLFxuXHRcdCk7XG5cdH0sXG5cdGdldE9wZXJhdG9yKCBzdGF0ZSwgb3BlcmF0b3IgKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBzdGF0ZS5vcGVyYXRvcnMuZmluZEluZGV4KFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gb3BlcmF0b3IsXG5cdFx0KTtcblxuXHRcdGlmICggLTEgPT09IGluZGV4ICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5vcGVyYXRvcnNbIGluZGV4IF07XG5cdH0sXG5cdHJlYWRDb25kaXRpb24oIHN0YXRlLCBjb25kaXRpb24gKSB7XG5cdFx0Y29uc3QgeyBvcGVyYXRvciA9ICcnIH0gPSBjb25kaXRpb247XG5cblx0XHRpZiAoICFvcGVyYXRvciApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7RnVuY3Rpb259XG5cdFx0ICovXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSBzdGF0ZS5jb25kaXRpb25SZWFkZXJzWyBvcGVyYXRvciBdID8/IGZhbHNlO1xuXG5cdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2FsbGJhY2sgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2soIGNvbmRpdGlvbiApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5jb25kaXRpb25SZWFkZXJzLmRlZmF1bHQoIGNvbmRpdGlvbiApO1xuXHR9LFxuXHRnZXRGdW5jdGlvbiggc3RhdGUsIGZ1bmNUeXBlICkge1xuXHRcdHJldHVybiBzdGF0ZS5mdW5jdGlvbnMuZmluZChcblx0XHRcdCggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgPT09IGZ1bmNUeXBlLFxuXHRcdCk7XG5cdH0sXG5cdGdldEZ1bmN0aW9uRGlzcGxheSggc3RhdGUsIGZ1bmNUeXBlICkge1xuXHRcdHJldHVybiBzZWxlY3RvcnMuZ2V0RnVuY3Rpb24oIHN0YXRlLCBmdW5jVHlwZSApPy5kaXNwbGF5O1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5zZWxlY3RvcnMsXG59OyIsImltcG9ydCBCbG9ja1BsYWNlaG9sZGVyIGZyb20gJy4vQmxvY2tQbGFjZWhvbGRlcic7XG5pbXBvcnQgQmxvY2tBZGRQcmV2QnV0dG9uIGZyb20gJy4vQmxvY2tBZGRQcmV2QnV0dG9uJztcbmltcG9ydCBCbG9ja1ByZXZCdXR0b25MYWJlbCBmcm9tICcuL0Jsb2NrUHJldkJ1dHRvbkxhYmVsJztcbmltcG9ydCBCbG9ja1Zpc2liaWxpdHkgZnJvbSAnLi9CbG9ja1Zpc2liaWxpdHknO1xuaW1wb3J0IEJsb2NrQ2xhc3NOYW1lIGZyb20gJy4vQmxvY2tDbGFzc05hbWUnO1xuXG5jb25zdCB7XG5cdCAgICAgIEluc3BlY3RvckFkdmFuY2VkQ29udHJvbHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmZ1bmN0aW9uIEFkdmFuY2VkRmllbGRzKCkge1xuXHRyZXR1cm4gPEluc3BlY3RvckFkdmFuY2VkQ29udHJvbHM+XG5cdFx0PEJsb2NrUGxhY2Vob2xkZXIvPlxuXHRcdDxCbG9ja0FkZFByZXZCdXR0b24vPlxuXHRcdDxCbG9ja1ByZXZCdXR0b25MYWJlbC8+XG5cdFx0PEJsb2NrVmlzaWJpbGl0eS8+XG5cdFx0PEJsb2NrQ2xhc3NOYW1lLz5cblx0PC9JbnNwZWN0b3JBZHZhbmNlZENvbnRyb2xzPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRGaWVsZHM7IiwiaW1wb3J0IEJhc2VIZWxwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFzZUhlbHAnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQXR0cmlidXRlSGVscCggeyBuYW1lID0gZmFsc2UsIGNoaWxkcmVuID0gbnVsbCB9ICkge1xuXHRjb25zdCB7IG5hbWU6IGJsb2NrTmFtZSB9ID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXG5cdGNvbnN0IHNldHRpbmdzID0gdXNlU2VsZWN0KCBzZWxlY3QgPT4ge1xuXHRcdGlmICggZmFsc2UgPT09IG5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGJsb2NrID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICkuZ2V0QmxvY2tUeXBlKCBibG9ja05hbWUgKTtcblxuXHRcdHJldHVybiBibG9jay5hdHRyaWJ1dGVzWyBuYW1lIF0/LmpmYiA/PyBmYWxzZTtcblx0fSwgWyBibG9ja05hbWUsIG5hbWUgXSApO1xuXG5cdGlmICggIXNldHRpbmdzICkge1xuXHRcdHJldHVybiBCb29sZWFuKCBjaGlsZHJlbiApICYmIDxCYXNlSGVscCBjbGFzc05hbWU9XCJqZXQtZmIgbWItMjRcIj5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvQmFzZUhlbHA+O1xuXHR9XG5cblx0cmV0dXJuIDxCYXNlSGVscCBjbGFzc05hbWU9XCJqZXQtZmIgbWItMjRcIj5cblx0XHR7IGNoaWxkcmVuICYmIDw+eyBjaGlsZHJlbiB9Jm5ic3A7PC8+IH1cblx0XHR7IChcblx0XHRcdHNldHRpbmdzPy5zaG9ydGNvZGUgJiYgIXNldHRpbmdzLnJpY2ggJiYgIWNoaWxkcmVuXG5cdFx0KSAmJiAoXG5cdFx0XHRfXyhcblx0XHRcdFx0J1lvdSBjYW4gdXNlIHNob3J0Y29kZXMgaGVyZS4nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpXG5cdFx0KSB9XG5cdFx0eyAoXG5cdFx0XHRzZXR0aW5ncz8uc2hvcnRjb2RlICYmICFzZXR0aW5ncy5yaWNoICYmIGNoaWxkcmVuXG5cdFx0KSAmJiAoXG5cdFx0XHRfXyhcblx0XHRcdFx0J1lvdSBjYW4gYWxzbyB1c2Ugc2hvcnRjb2RlcyBoZXJlLicsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdClcblx0XHQpIH1cblx0PC9CYXNlSGVscD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF0dHJpYnV0ZUhlbHA7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBUb2dnbGVDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJsb2NrQWRkUHJldkJ1dHRvbiggeyBsYWJlbCwgaGVscCB9ICkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCAhIHVzZUlzSGFzQXR0cmlidXRlKCAnYWRkX3ByZXYnICkgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPFRvZ2dsZUNvbnRyb2xcblx0XHRsYWJlbD17IGxhYmVsID8/IF9fKCAnQWRkIFByZXYgUGFnZSBCdXR0b24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0aGVscD17IGhlbHAgPz8gX18oXG5cdFx0XHRgSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBcIkFjdGlvbiBCdXR0b25cIiBibG9jayB3aXRoIHRoZSBcIkdvIHRvIFByZXYgUGFnZVwiIHR5cGVgLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCkgfVxuXHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmFkZF9wcmV2IH1cblx0XHRvbkNoYW5nZT17IHZhbCA9PiBzZXRBdHRyaWJ1dGVzKCB7IGFkZF9wcmV2OiB2YWwgfSApIH1cblx0Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrQWRkUHJldkJ1dHRvbjsiLCJpbXBvcnQgQmxvY2tEZWZhdWx0VmFsdWUgZnJvbSAnLi9CbG9ja0RlZmF1bHRWYWx1ZSc7XG5pbXBvcnQgRHluYW1pY1ZhbHVlcyBmcm9tICcuLi8uLi9keW5hbWljLnZhbHVlL2NvbXBvbmVudHMvRHluYW1pY1ZhbHVlcyc7XG5cbmZ1bmN0aW9uIEJsb2NrQWR2YW5jZWRWYWx1ZSggeyBoZWxwLCBsYWJlbCwgaGFzTWFjcm8gPSB0cnVlLCAuLi5wcm9wcyB9ICkge1xuXHRyZXR1cm4gPGRpdiB7IC4uLnByb3BzIH0+XG5cdFx0PEJsb2NrRGVmYXVsdFZhbHVlXG5cdFx0XHRoZWxwPXsgaGVscCB9XG5cdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdGhhc01hY3JvPXsgaGFzTWFjcm8gfVxuXHRcdC8+XG5cdFx0PGhyLz5cblx0XHQ8RHluYW1pY1ZhbHVlcy8+XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tBZHZhbmNlZFZhbHVlOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBCbG9ja0NsYXNzTmFtZSggeyBsYWJlbCwgaGVscCB9ICkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0cmV0dXJuIDxUZXh0Q29udHJvbFxuXHRcdGxhYmVsPXsgbGFiZWwgPz8gX18oIFwiQ1NTIENsYXNzIE5hbWVcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jbGFzc19uYW1lIH1cblx0XHRoZWxwPXsgaGVscCA/PyAnJyB9XG5cdFx0b25DaGFuZ2U9eyB2YWwgPT4gc2V0QXR0cmlidXRlcyggeyBjbGFzc19uYW1lOiB2YWwgfSApIH1cblx0Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrQ2xhc3NOYW1lOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCBBZHZhbmNlZEluc3BlY3RvckNvbnRyb2xcblx0ZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZHZhbmNlZEluc3BlY3RvckNvbnRyb2wnO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlJztcbmltcG9ydCBDbGllbnRTaWRlTWFjcm9zIGZyb20gJy4uLy4uL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9DbGllbnRTaWRlTWFjcm9zJztcbmltcG9ydCB1c2VJbnNlcnRNYWNybyBmcm9tICcuLi8uLi9tYWNyb3MuYnV0dG9uL2hvb2tzL3VzZUluc2VydE1hY3JvJztcbmltcG9ydCBBdHRyaWJ1dGVIZWxwIGZyb20gJy4vQXR0cmlidXRlSGVscCc7XG5pbXBvcnQgQ29udHJvbFByZXNldFJlc3RyaWN0aW9uQ29udGV4dFxuXHRmcm9tICcuLi8uLi9wcmVzZXQvY29udGV4dC9Db250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0JztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBCbG9ja0RlZmF1bHRWYWx1ZSggeyBsYWJlbCwgaGVscCwgaGFzTWFjcm8gPSB0cnVlIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRjb25zdCBbIGlucHV0LCB1cGRhdGVJbnB1dCBdID0gdXNlSW5zZXJ0TWFjcm8oICdkZWZhdWx0JyApO1xuXG5cdGlmICggIXVzZUlzSGFzQXR0cmlidXRlKCAnZGVmYXVsdCcgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8Q29udHJvbFByZXNldFJlc3RyaWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHsgc2hvdzogdHJ1ZSB9IH0+XG5cdFx0PENsaWVudFNpZGVNYWNyb3M+XG5cdFx0XHQ8QWR2YW5jZWRJbnNwZWN0b3JDb250cm9sXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZWZhdWx0IH1cblx0XHRcdFx0bGFiZWw9eyBsYWJlbCA/PyBfXyggJ0RlZmF1bHQgVmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdG9uQ2hhbmdlUHJlc2V0PXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoIHsgZGVmYXVsdDogdmFsIH0gKSB9XG5cdFx0XHRcdG9uQ2hhbmdlTWFjcm9zPXsgaGFzTWFjcm8gPyB1cGRhdGVJbnB1dCA6IGZhbHNlIH1cblx0XHRcdD5cblx0XHRcdFx0eyAoIHsgaW5zdGFuY2VJZCB9ICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiA8PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdHJlZj17IGlucHV0IH1cblx0XHRcdFx0XHRcdFx0aWQ9eyBpbnN0YW5jZUlkIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRlZmF1bHQgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZmIgbS11bnNldFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoXG5cdFx0XHRcdFx0XHRcdFx0eyBkZWZhdWx0OiB2YWwgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8QXR0cmlidXRlSGVscCBuYW1lPVwiZGVmYXVsdFwiPlxuXHRcdFx0XHRcdFx0XHR7IGhlbHAgPz8gJycgfVxuXHRcdFx0XHRcdFx0PC9BdHRyaWJ1dGVIZWxwPlxuXHRcdFx0XHRcdDwvPjtcblx0XHRcdFx0fSB9XG5cdFx0XHQ8L0FkdmFuY2VkSW5zcGVjdG9yQ29udHJvbD5cblx0XHQ8L0NsaWVudFNpZGVNYWNyb3M+XG5cdDwvQ29udHJvbFByZXNldFJlc3RyaWN0aW9uQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrRGVmYXVsdFZhbHVlOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCB1c2VJc0hhc0F0dHJpYnV0ZSBmcm9tICcuLi8uLi9ob29rcy91c2VJc0hhc0F0dHJpYnV0ZSc7XG5pbXBvcnQgQXR0cmlidXRlSGVscCBmcm9tICcuL0F0dHJpYnV0ZUhlbHAnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJsb2NrRGVzY3JpcHRpb24oIHsgbGFiZWwsIGhlbHAgfSApIHtcblx0Y29uc3QgW1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0ICAgICAgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGlmICggIXVzZUlzSGFzQXR0cmlidXRlKCAnZGVzYycgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCA/PyBfXyggJ0ZpZWxkIERlc2NyaXB0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRlc2MgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZiIG0tdW5zZXRcIlxuXHRcdFx0b25DaGFuZ2U9eyBkZXNjID0+IHNldEF0dHJpYnV0ZXMoIHsgZGVzYyB9ICkgfVxuXHRcdC8+XG5cdFx0PEF0dHJpYnV0ZUhlbHAgbmFtZT1cImRlc2NcIj5cblx0XHRcdHsgaGVscCA/PyAnJyB9XG5cdFx0PC9BdHRyaWJ1dGVIZWxwPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrRGVzY3JpcHRpb247IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IENoYW5nZU5hbWVCeUxhYmVsIGZyb20gJy4uL2hlbHBlcnMvQ2hhbmdlTmFtZUJ5TGFiZWwnO1xuaW1wb3J0IEF0dHJpYnV0ZUhlbHAgZnJvbSAnLi9BdHRyaWJ1dGVIZWxwJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5sZXQge1xuXHQgICAgX19leHBlcmltZW50YWxVc2VGb2N1c091dHNpZGUsXG5cdCAgICB1c2VGb2N1c091dHNpZGUsXG4gICAgfSA9IHdwLmNvbXBvc2U7XG5cbnVzZUZvY3VzT3V0c2lkZSA9IHVzZUZvY3VzT3V0c2lkZSB8fCBfX2V4cGVyaW1lbnRhbFVzZUZvY3VzT3V0c2lkZTtcblxuZnVuY3Rpb24gQmxvY2tMYWJlbCggeyBsYWJlbCwgaGVscCB9ICkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0ZnVuY3Rpb24gb25CbHVyTGFiZWwoKSB7XG5cdFx0Q2hhbmdlTmFtZUJ5TGFiZWwoIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgKTtcblx0fVxuXG5cdGNvbnN0IHJlZiA9IHVzZUZvY3VzT3V0c2lkZSggb25CbHVyTGFiZWwgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGxhYmVsPXsgbGFiZWwgPz8gX18oICdGaWVsZCBMYWJlbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGNsYXNzTmFtZT1cImpldC1mYiBtLXVuc2V0XCJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5sYWJlbCB9XG5cdFx0XHRvbkNoYW5nZT17IHZhbCA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxhYmVsOiB2YWwgfSApIH1cblx0XHRcdHsgLi4ucmVmIH1cblx0XHQvPlxuXHRcdDxBdHRyaWJ1dGVIZWxwIG5hbWU9XCJsYWJlbFwiPlxuXHRcdFx0eyBoZWxwID8/ICcnIH1cblx0XHQ8L0F0dHJpYnV0ZUhlbHA+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tMYWJlbDsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuaW1wb3J0IHVzZUlzVW5pcXVlRmllbGROYW1lIGZyb20gJy4uL2hvb2tzL3VzZUlzVW5pcXVlRmllbGROYW1lJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcblx0ICAgICAgSWNvbixcblx0ICAgICAgRmxleCxcblx0ICAgICAgVG9vbHRpcCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICB1c2VJbnN0YW5jZUlkLFxuICAgICAgfSA9IHdwLmNvbXBvc2U7XG5cbmZ1bmN0aW9uIEJsb2NrTmFtZSggeyBsYWJlbCwgaGVscCB9ICkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgeyBtZXNzYWdlIH0gPSB1c2VJc1VuaXF1ZUZpZWxkTmFtZSgpO1xuXHRjb25zdCBpbnN0YW5jZUlkICA9IHVzZUluc3RhbmNlSWQoIEJsb2NrTmFtZSwgJ0FkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCcgKTtcblxuXHRpZiAoICF1c2VJc0hhc0F0dHJpYnV0ZSggJ25hbWUnICkgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPD5cblx0XHQ8RmxleFxuXHRcdFx0YWxpZ249eyAnY2VudGVyJyB9XG5cdFx0XHRqdXN0aWZ5PXsgJ2ZsZXgtc3RhcnQnIH1cblx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRtYXJnaW5Cb3R0b206ICc4cHgnLFxuXHRcdFx0fSB9XG5cdFx0PlxuXHRcdFx0PGxhYmVsXG5cdFx0XHRcdGh0bWxGb3I9eyBpbnN0YW5jZUlkIH1cblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYiBsYWJlbCcgfVxuXHRcdFx0PnsgbGFiZWwgPz8gX18oICdGb3JtIGZpZWxkIG5hbWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9sYWJlbD5cblx0XHRcdHsgKFxuXHRcdFx0XHQhIW1lc3NhZ2Vcblx0XHRcdCkgJiYgPFRvb2x0aXBcblx0XHRcdFx0dGV4dD17IG1lc3NhZ2UgfVxuXHRcdFx0XHRkZWxheT17IDIwMCB9XG5cdFx0XHRcdHBvc2l0aW9uPXsgJ3RvcCBjZW50ZXInIH1cblx0XHRcdD5cblx0XHRcdFx0PEljb25cblx0XHRcdFx0XHRpY29uPXsgJ3dhcm5pbmcnIH1cblx0XHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAnb3JhbmdlJyxcblx0XHRcdFx0XHRcdGN1cnNvcjogJ2hlbHAnLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sdGlwPiB9XG5cdFx0PC9GbGV4PlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0aWQ9eyBpbnN0YW5jZUlkIH1cblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5uYW1lIH1cblx0XHRcdGhlbHA9eyBoZWxwID8/IF9fKFxuXHRcdFx0XHQnU2hvdWxkIGNvbnRhaW4gb25seSBMYXRpbiBsZXR0ZXJzLCBudW1iZXJzLCBgLWAgb3IgYF9gIGNoYXJzLCBubyBzcGFjZXMgb25seSBsb3dlciBjYXNlJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSB9XG5cdFx0XHRvbkNoYW5nZT17IG5hbWUgPT4gc2V0QXR0cmlidXRlcyggeyBuYW1lIH0gKSB9XG5cdFx0Lz5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja05hbWU7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBCbG9ja1BsYWNlaG9sZGVyKCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRpZiAoICEgdXNlSXNIYXNBdHRyaWJ1dGUoICdwbGFjZWhvbGRlcicgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8VGV4dENvbnRyb2xcblx0XHRsYWJlbD17IGxhYmVsID8/IF9fKCAnUGxhY2Vob2xkZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnBsYWNlaG9sZGVyIH1cblx0XHRoZWxwPXsgaGVscCA/PyAnJyB9XG5cdFx0b25DaGFuZ2U9eyBwbGFjZWhvbGRlciA9PiBzZXRBdHRyaWJ1dGVzKCB7IHBsYWNlaG9sZGVyIH0gKSB9XG5cdC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1BsYWNlaG9sZGVyOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCBBdHRyaWJ1dGVIZWxwIGZyb20gJy4vQXR0cmlidXRlSGVscCc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gQmxvY2tQcmV2QnV0dG9uTGFiZWwoIHsgbGFiZWwsIGhlbHAgfSApIHtcblx0Y29uc3QgW1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0ICAgICAgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGlmICggIWF0dHJpYnV0ZXMuYWRkX3ByZXYgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPD5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGxhYmVsPXtcblx0XHRcdFx0bGFiZWwgPz8gX18oICdQcmV2IFBhZ2UgQnV0dG9uIExhYmVsJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdH1cblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5wcmV2X2xhYmVsIH1cblx0XHRcdGNsYXNzTmFtZT1cImpldC1mYiBtLXVuc2V0XCJcblx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoIHsgcHJldl9sYWJlbDogdmFsIH0gKSB9XG5cdFx0Lz5cblx0XHQ8QXR0cmlidXRlSGVscCBuYW1lPVwicHJldl9sYWJlbFwiPlxuXHRcdFx0eyBoZWxwID8/ICcnIH1cblx0XHQ8L0F0dHJpYnV0ZUhlbHA+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tQcmV2QnV0dG9uTGFiZWw7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdCAgICBUb29sYmFyQnV0dG9uLFxuICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIEJsb2NrQ29udHJvbHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHsgU1ZHLCBQYXRoIH0gPSB3cC5wcmltaXRpdmVzO1xuXG5mdW5jdGlvbiBCbG9ja1JlcXVpcmVkKCkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCAhdXNlSXNIYXNBdHRyaWJ1dGUoICdyZXF1aXJlZCcgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8QmxvY2tDb250cm9scyBncm91cD1cImJsb2NrXCI+XG5cdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdGljb249eyA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCI+XG5cdFx0XHRcdDxQYXRoIGQ9XCJNMTIgNEwxMiAyMFwiIHN0cm9rZT1cImN1cnJlbnRjb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XG5cdFx0XHRcdDxQYXRoIGQ9XCJNMTcuMzEzNyA2LjAwMDI0TDYuMDAwMDEgMTcuMzE0XCIgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cblx0XHRcdFx0PFBhdGggZD1cIk0yMCAxMkw0IDEyXCIgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cblx0XHRcdFx0PFBhdGggZD1cIk0xNy4zMTM3IDE3LjMxMzdMNi4wMDAwMSA2LjAwMDAxXCIgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cblx0XHRcdDwvU1ZHPiB9XG5cdFx0XHR0aXRsZT17IGF0dHJpYnV0ZXMucmVxdWlyZWRcblx0XHRcdCAgICAgICAgPyBfXyhcblx0XHRcdFx0XHQnQ2xpY2sgdG8gbWFrZSB0aGlzIGZpZWxkIG9wdGlvbmFsJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdClcblx0XHRcdCAgICAgICAgOiBfXyhcblx0XHRcdFx0XHQnQ2xpY2sgdG8gbWFrZSB0aGlzIGZpZWxkIHJlcXVpcmVkJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHJlcXVpcmVkOiAhYXR0cmlidXRlcy5yZXF1aXJlZCxcblx0XHRcdH0gKSB9XG5cdFx0XHRpc0FjdGl2ZT17IGF0dHJpYnV0ZXMucmVxdWlyZWQgfVxuXHRcdC8+XG5cdDwvQmxvY2tDb250cm9scz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrUmVxdWlyZWQ7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJsb2NrVmlzaWJpbGl0eSggeyBsYWJlbCwgaGVscCB9ICkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCAhdXNlSXNIYXNBdHRyaWJ1dGUoICd2aXNpYmlsaXR5JyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxTZWxlY3RDb250cm9sXG5cdFx0b3B0aW9ucz17IFtcblx0XHRcdHtcblx0XHRcdFx0XCJ2YWx1ZVwiOiBcImFsbFwiLFxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZvciBhbGxcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInZhbHVlXCI6IFwibG9nZ2VkX2lkXCIsXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgbG9nZ2VkIGluIHVzZXJzXCIsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJ2YWx1ZVwiOiBcIm5vdF9sb2dnZWRfaW5cIixcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJPbmx5IGZvciBOT1QtbG9nZ2VkIGluIHVzZXJzXCIsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0fSxcblx0XHRdIH1cblx0XHRsYWJlbD17IGxhYmVsID8/IF9fKCBcIkZpZWxkIFZpc2liaWxpdHlcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdGhlbHA9eyBoZWxwID8/ICcnIH1cblx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmlzaWJpbGl0eSB9XG5cdFx0b25DaGFuZ2U9eyB2aXNpYmlsaXR5ID0+IHNldEF0dHJpYnV0ZXMoIHsgdmlzaWJpbGl0eSB9ICkgfVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tWaXNpYmlsaXR5OyIsImltcG9ydCBDb250cm9sc1NldHRpbmdzIGZyb20gJy4uL2hlbHBlcnMvQ29udHJvbHNTZXR0aW5ncyc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXG5cdCAgICAgIEJhc2VDb250cm9sLFxuXHQgICAgICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG5cbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIHVzZUNvbnRyb2xzKCB7XG5cdHR5cGUsXG5cdGF0dHJpYnV0ZXMsXG5cdGF0dHJzU2V0dGluZ3MgPSB7fSxcbn0gKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cdGNvbnN0IGJsb2NrTmFtZSAgPSBibG9ja1Byb3BzWyAnZGF0YS10eXBlJyBdO1xuXHRjb25zdCBjb250cm9scyAgID0gQ29udHJvbHNTZXR0aW5ncygpO1xuXG5cdGlmICggIWNvbnRyb2xzWyB0eXBlIF0gKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgY3VycmVudENvbnRyb2wgPSBjb250cm9sc1sgdHlwZSBdO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdGNvbnN0IGlzVmFsaWRDb25kaXRpb24gPSAoIGF0dHIgKSA9PiB7XG5cdFx0aWYgKCAhYXR0ci5jb25kaXRpb24gKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGJsb2NrTmFtZSAmJiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgKSB7XG5cdFx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICYmIGJsb2NrTmFtZSAhPT1cblx0XHRcdFx0YXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lXG5cdFx0XHRcdCYmIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZS5sZW5ndGhcblx0XHRcdFx0JiYgIWF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZS5pbmNsdWRlcyggYmxvY2tOYW1lIClcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb2JqZWN0Tm90TWF0Y2ggPSAoXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5hdHRyICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHsgb3BlcmF0b3IgPSAnYW5kJywgaXRlbXMgPSB7fSB9ID0gYXR0ci5jb25kaXRpb24uYXR0cjtcblxuXHRcdFx0XHRpZiAoICdvcicgPT09IG9wZXJhdG9yLnRvTG93ZXJDYXNlKCkgKSB7XG5cdFx0XHRcdFx0Zm9yICggY29uc3QgYXR0clRvQ29tcGFyZSBpbiBpdGVtcyApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHZhbHVlQ29tcGFyZSA9IGl0ZW1zWyBhdHRyVG9Db21wYXJlIF07XG5cblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdFx0XHRcdGlmICggdmFsdWVDb21wYXJlID09PSBhdHRyaWJ1dGVzWyBhdHRyVG9Db21wYXJlIF0gKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggJ2FuZCcgPT09IG9wZXJhdG9yLnRvTG93ZXJDYXNlKCkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICggY29uc3QgYXR0clRvQ29tcGFyZSBpbiBpdGVtcyApIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGl0ZW1zWyBhdHRyVG9Db21wYXJlIF0gIT09XG5cdFx0XHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzWyBhdHRyVG9Db21wYXJlIF0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCkoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdCkoKTtcblxuXHRcdGlmICggIW9iamVjdE5vdE1hdGNoXG5cdFx0XHR8fCAoXG5cdFx0XHRcdCdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYXR0clxuXHRcdFx0XHQmJiBhdHRyLmNvbmRpdGlvbi5hdHRyXG5cdFx0XHRcdCYmICFhdHRyaWJ1dGVzWyBhdHRyLmNvbmRpdGlvbi5hdHRyIF1cblx0XHRcdClcblx0XHRcdHx8IChcblx0XHRcdFx0J3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvblxuXHRcdFx0XHQmJiAhYXR0cmlidXRlc1sgYXR0ci5jb25kaXRpb24gXVxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdHJldHVybiBjdXJyZW50Q29udHJvbC5hdHRycy5maWx0ZXIoXG5cdFx0KCB7IGF0dHJOYW1lLCBsYWJlbCwgLi4uYXR0ciB9ICkgPT4ge1xuXHRcdFx0Y29uc3QgaXNSZWdpc3RlckF0dHJpYnV0ZSA9IChcblx0XHRcdFx0YXR0ck5hbWUgaW4gYXR0cmlidXRlc1xuXHRcdFx0KTtcblx0XHRcdGNvbnN0IHZhbGlkQ29uZGl0aW9uICAgICAgPSBpc1ZhbGlkQ29uZGl0aW9uKCBhdHRyICk7XG5cdFx0XHRjb25zdCBpc0hpZGRlbiAgICAgICAgICAgID0gKFxuXHRcdFx0XHRhdHRyTmFtZSBpbiBhdHRyc1NldHRpbmdzXG5cdFx0XHRcdCYmICdzaG93JyBpbiBhdHRyc1NldHRpbmdzWyBhdHRyTmFtZSBdXG5cdFx0XHRcdCYmIGZhbHNlID09PSBhdHRyc1NldHRpbmdzWyBhdHRyTmFtZSBdLnNob3dcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGlzUmVnaXN0ZXJBdHRyaWJ1dGUgJiYgdmFsaWRDb25kaXRpb24gJiYgIWlzSGlkZGVuXG5cdFx0XHQpO1xuXHRcdH0gKTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCAzLjAuMFxuICpcbiAqIEBwYXJhbSAgcHJvcHNcbiAqIEByZXR1cm4ge3Vua25vd25bXX1cbiAqIEBjbGFzc1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gRmllbGRDb250cm9sKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGZpZWxkQ29udHJvbHMgPSB1c2VDb250cm9scyggcHJvcHMgKTtcblxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoIHsgWyBrZXkgXTogdmFsdWUgfSApO1xuXHR9O1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdHJldHVybiBmaWVsZENvbnRyb2xzLm1hcCggKCB7IGhlbHAgPSAnJywgYXR0ck5hbWUsIGxhYmVsLCAuLi5hdHRyIH0gKSA9PiB7XG5cdFx0c3dpdGNoICggYXR0ci50eXBlICkge1xuXHRcdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRcdHJldHVybiA8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1UZXh0Q29udHJvbGAgfVxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKSB9XG5cdFx0XHRcdC8+O1xuXG5cdFx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1TZWxlY3RDb250cm9sYCB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IGF0dHIub3B0aW9ucyB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPjtcblx0XHRcdGNhc2UgJ3RvZ2dsZSc6XG5cdFx0XHRcdHJldHVybiA8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRvZ2dsZUNvbnRyb2xgIH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz47XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0XHRcdFx0IEB3b3JkcHJlc3Mvbm8tYmFzZS1jb250cm9sLXdpdGgtbGFiZWwtd2l0aG91dC1pZFxuXHRcdFx0XHQgKi9cblx0XHRcdFx0cmV0dXJuIDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LUJhc2VDb250cm9sYCB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tTnVtYmVyQ29udHJvbGAgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggTnVtYmVyKCBuZXdWYWwgKSwgYXR0ck5hbWUgKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XG5cdFx0XHRcdFx0ICAgc3R5bGU9eyB7XG5cdFx0XHRcdFx0XHQgICBjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXG5cdFx0XHRcdFx0ICAgfSB9PnsgaGVscCB9PC9wPlxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPjtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHR9ICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRDb250cm9sOyIsImNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgUGFuZWxCb2R5LFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSB3cC5ob29rcztcbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLyoqXG4gKiBAcGFyYW0gIHByb3BzXG4gKiBAcmV0dXJuIHtib29sZWFufEpTWC5FbGVtZW50fVxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIEZpZWxkU2V0dGluZ3NXcmFwcGVyKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIHRpdGxlLFxuXHRcdCAgICAgIGNoaWxkcmVuLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblx0Y29uc3QgYmxvY2tOYW1lID0gYmxvY2tQcm9wc1sgJ2RhdGEtdHlwZScgXS5yZXBsYWNlKCAnLycsICctJyApO1xuXG5cdGNvbnN0IEN1c3RvbVNldHRpbmdzID0gYXBwbHlGaWx0ZXJzKFxuXHRcdGBqZXQuZmIucmVuZGVyLnNldHRpbmdzLiR7IGJsb2NrTmFtZSB9YCxcblx0XHRudWxsLFxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0Y2hpbGRyZW4gfHwgQ3VzdG9tU2V0dGluZ3Ncblx0KSAmJiA8UGFuZWxCb2R5XG5cdFx0dGl0bGU9eyB0aXRsZSB8fCBfXyggJ0ZpZWxkJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdFx0eyBDdXN0b21TZXR0aW5ncyB9XG5cdDwvUGFuZWxCb2R5Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRTZXR0aW5nc1dyYXBwZXI7IiwiaW1wb3J0IHtcblx0Y2xhc3NuYW1lcyxcbn0gZnJvbSAnLi4vLi4vdG9vbHMnO1xuaW1wb3J0IHVzZVNlbGVjdFBvc3RNZXRhIGZyb20gJy4uLy4uL2hvb2tzL3VzZVNlbGVjdFBvc3RNZXRhJztcbmltcG9ydCBDaGFuZ2VOYW1lQnlMYWJlbCBmcm9tICcuLi9oZWxwZXJzL0NoYW5nZU5hbWVCeUxhYmVsJztcbmltcG9ydCB1c2VVbmlxS2V5IGZyb20gJy4uL2hvb2tzL3VzZVVuaXFLZXknO1xuXG5jb25zdCB7XG5cdCAgICAgIEJhc2VDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgUmljaFRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5sZXQge1xuXHQgICAgX19leHBlcmltZW50YWxVc2VGb2N1c091dHNpZGUsXG5cdCAgICB1c2VGb2N1c091dHNpZGUsXG4gICAgfSAgID0gd3AuY29tcG9zZTtcblxudXNlRm9jdXNPdXRzaWRlID0gdXNlRm9jdXNPdXRzaWRlIHx8IF9fZXhwZXJpbWVudGFsVXNlRm9jdXNPdXRzaWRlO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBSaWNoRGVzY3JpcHRpb24oIGNvbnRlbnQgKSB7XG5cdHJldHVybiA8c21hbGwgc3R5bGU9eyB7XG5cdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXG5cdFx0cGFkZGluZzogJzAuMmVtIDAuOGVtIDAgMCcsXG5cdFx0Y29sb3I6ICcjOGU4YThhJyxcblx0fSB9PlxuXHRcdHsgY29udGVudCB9XG5cdDwvc21hbGw+O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gRmllbGRXcmFwcGVyKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgY2hpbGRyZW4sXG5cdFx0ICAgICAgd3JhcENsYXNzZXMgICAgICAgPSBbXSxcblx0XHQgICAgICB2YWx1ZUlmRW1wdHlMYWJlbCA9ICcnLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgY2hpbGRyZW5Qb3NpdGlvbiAgPSAnYmV0d2VlbicsXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRjb25zdCB1bmlxS2V5ID0gdXNlVW5pcUtleSgpO1xuXG5cdGNvbnN0IGFyZ3MgPSB1c2VTZWxlY3RQb3N0TWV0YSggJ19qZl9hcmdzJyApO1xuXG5cdGZ1bmN0aW9uIG9uQmx1ckxhYmVsKCkge1xuXHRcdENoYW5nZU5hbWVCeUxhYmVsKCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzICk7XG5cdH1cblxuXHRjb25zdCByZWYgPSB1c2VGb2N1c091dHNpZGUoIG9uQmx1ckxhYmVsICk7XG5cblx0ZnVuY3Rpb24gcmVuZGVyTGFiZWwoKSB7XG5cdFx0cmV0dXJuIDxCYXNlQ29udHJvbC5WaXN1YWxMYWJlbD5cblx0XHRcdHsgUmljaERlc2NyaXB0aW9uKCBfXyggJ2lucHV0IGxhYmVsOicsICdqZXQtZm9ybS1idWlsZGVyJyApICkgfVxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1idWlsZGVyX19sYWJlbFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdyaWNoLWxhYmVsJyApIH1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxhYmVsLi4uXCJcblx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGFiZWxcblx0XHRcdFx0XHQgICAgICAgID8gYXR0cmlidXRlcy5sYWJlbFxuXHRcdFx0XHRcdCAgICAgICAgOiB2YWx1ZUlmRW1wdHlMYWJlbCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdMYWJlbCA9PiBzZXRBdHRyaWJ1dGVzKFxuXHRcdFx0XHRcdFx0eyBsYWJlbDogbmV3TGFiZWwgfSApIH1cblx0XHRcdFx0XHRpc1NlbGVjdGVkPXsgZmFsc2UgfVxuXHRcdFx0XHRcdHsgLi4ucmVmIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBhdHRyaWJ1dGVzLnJlcXVpcmVkICYmXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19yZXF1aXJlZCcgfT5cblx0XHRcdFx0XHR7IGFyZ3MucmVxdWlyZWRfbWFyayA/IGFyZ3MucmVxdWlyZWRfbWFyayA6ICcqJyB9XG5cdFx0XHRcdDwvc3Bhbj4gfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9CYXNlQ29udHJvbC5WaXN1YWxMYWJlbD47XG5cdH1cblxuXHRmdW5jdGlvbiByZW5kZXJEZXNjcmlwdGlvbigpIHtcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1idWlsZGVyX19kZXNjLS13cmFwcGVyXCI+XG5cdFx0XHR7IFJpY2hEZXNjcmlwdGlvbihcblx0XHRcdFx0X18oICdpbnB1dCBkZXNjcmlwdGlvbjonLCAnamV0LWZvcm0tYnVpbGRlcicgKSApIH1cblx0XHRcdDxCYXNlQ29udHJvbCBrZXk9eyAnY3VzdG9tX2hlbHBfZGVzY3JpcHRpb24nIH1cblx0XHRcdCAgICAgICAgICAgICBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZGVzYycgfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscFwiPlxuXHRcdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3JpY2gtZGVzY3JpcHRpb24nICkgfVxuXHRcdFx0XHRcdFx0dGFnTmFtZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIlxuXHRcdFx0XHRcdFx0YWxsb3dlZEZvcm1hdHM9eyBbXSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVzYyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGRlc2MgPT4gc2V0QXR0cmlidXRlcyggeyBkZXNjIH0gKSB9XG5cdFx0XHRcdFx0XHRzdHlsZT17IHsgbWFyZ2luVG9wOiAnMHB4JyB9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0PC9kaXY+O1xuXHR9XG5cblx0aWYgKCAncm93JyA9PT0gYXJncy5maWVsZHNfbGF5b3V0ICkge1xuXHRcdHdyYXBDbGFzc2VzLnB1c2goICdqZXQtZm9ybS1idWlsZGVyLXJvd19fZmxleCcgKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEJhc2VDb250cm9sXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VIb2xkZXJfYmxvY2snICkgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NuYW1lcyhcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlci1yb3cnLFxuXHRcdFx0XHR3cmFwQ2xhc3Nlcyxcblx0XHRcdCkgfVxuXHRcdD5cblx0XHRcdHsgJ3JvdycgIT09IGFyZ3MuZmllbGRzX2xheW91dCAmJiA8PlxuXHRcdFx0XHR7ICd0b3AnID09PSBjaGlsZHJlblBvc2l0aW9uICYmIGNoaWxkcmVuIH1cblx0XHRcdFx0eyByZW5kZXJMYWJlbCgpIH1cblx0XHRcdFx0eyAnYmV0d2VlbicgPT09IGNoaWxkcmVuUG9zaXRpb24gJiYgY2hpbGRyZW4gfVxuXHRcdFx0XHR7IHJlbmRlckRlc2NyaXB0aW9uKCkgfVxuXHRcdFx0XHR7ICdib3R0b20nID09PSBjaGlsZHJlblBvc2l0aW9uICYmIGNoaWxkcmVuIH1cblx0XHRcdDwvPiB9XG5cdFx0XHR7ICdyb3cnID09PSBhcmdzLmZpZWxkc19sYXlvdXQgJiYgPD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1idWlsZGVyLXJvd19fZmxleC0tbGFiZWxcIj5cblx0XHRcdFx0XHR7IHJlbmRlckxhYmVsKCkgfVxuXHRcdFx0XHRcdHsgcmVuZGVyRGVzY3JpcHRpb24oKSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlci1yb3dfX2ZsZXgtLWNvbnRlbnRcIj57IGNoaWxkcmVuIH08L2Rpdj5cblx0XHRcdDwvPiB9XG5cdFx0PC9CYXNlQ29udHJvbD5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRXcmFwcGVyOyIsImltcG9ydCBCbG9ja0xhYmVsIGZyb20gJy4vQmxvY2tMYWJlbCc7XG5pbXBvcnQgQmxvY2tOYW1lIGZyb20gJy4vQmxvY2tOYW1lJztcbmltcG9ydCBCbG9ja0Rlc2NyaXB0aW9uIGZyb20gJy4vQmxvY2tEZXNjcmlwdGlvbic7XG5pbXBvcnQgQmxvY2tEZWZhdWx0VmFsdWUgZnJvbSAnLi9CbG9ja0RlZmF1bHRWYWx1ZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgUGFuZWxCb2R5LFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEdlbmVyYWxGaWVsZHMoIHsgaGFzTWFjcm8gPSB0cnVlIH0gKSB7XG5cdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdHZW5lcmFsJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHQgICAgICAgICAgICAgICAgICBrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1maWVsZHMnIH0+XG5cdFx0PEJsb2NrTGFiZWwvPlxuXHRcdDxCbG9ja05hbWUvPlxuXHRcdDxCbG9ja0Rlc2NyaXB0aW9uLz5cblx0XHQ8QmxvY2tEZWZhdWx0VmFsdWUgaGFzTWFjcm89eyBoYXNNYWNybyB9IC8+XG5cdDwvUGFuZWxCb2R5Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhbEZpZWxkczsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgU2NvcGVkQXR0cmlidXRlc0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9TY29wZWRBdHRyaWJ1dGVzQ29udGV4dCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gU2NvcGVkQXR0cmlidXRlc1Byb3ZpZGVyKCB7IGNoaWxkcmVuIH0gKSB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cdGNvbnN0IFsgY3VycmVudCwgc2V0Q3VycmVudCBdICAgICAgID0gdXNlU3RhdGUoICgpID0+IGF0dHJpYnV0ZXMgKTtcblxuXHRyZXR1cm4gPFNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsge1xuXHRcdHJlYWxBdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuXHRcdHNldFJlYWxBdHRyaWJ1dGVzOiBzZXRBdHRyaWJ1dGVzLFxuXHRcdGF0dHJpYnV0ZXM6IGN1cnJlbnQsXG5cdFx0c2V0QXR0cmlidXRlczogc2V0Q3VycmVudCxcblx0fSB9PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L1Njb3BlZEF0dHJpYnV0ZXNDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcGVkQXR0cmlidXRlc1Byb3ZpZGVyOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICBDdXN0b21TZWxlY3RDb250cm9sLFxuXHQgICAgICBJY29uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmZ1bmN0aW9uIFNlbGVjdFZhcmlhdGlvbnMoIHsgdmFsdWUgfSApIHtcblx0Y29uc3QgeyBuYW1lIH0gICAgICAgICAgICA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcblx0Y29uc3QgWyAsIHNldEF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IHsgdmFyaWF0aW9ucywgcmF3VmFyaWF0aW9ucyB9ID0gdXNlU2VsZWN0KFxuXHRcdCggc2VsZWN0ICkgPT4ge1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHQgICAgICBnZXRCbG9ja1ZhcmlhdGlvbnMsXG5cdFx0XHQgICAgICB9ID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICk7XG5cblx0XHRcdGNvbnN0IGl0ZW1zICAgICAgICAgPSBnZXRCbG9ja1ZhcmlhdGlvbnMoIG5hbWUsICdibG9jaycgKTtcblx0XHRcdGNvbnN0IG9wdGlvbnMgICAgICAgPSBbXTtcblx0XHRcdGNvbnN0IHZhcmlhdGlvbnNNYXAgPSB7fTtcblxuXHRcdFx0Zm9yICggY29uc3QgaXRlbSBvZiBpdGVtcyApIHtcblx0XHRcdFx0b3B0aW9ucy5wdXNoKCB7XG5cdFx0XHRcdFx0a2V5OiBpdGVtLm5hbWUsXG5cdFx0XHRcdFx0bmFtZTogPHNwYW4gY2xhc3NOYW1lPXsgJ2pldC1mYiBmbGV4IGdhcC0xZW0gYWktY2VudGVyJyB9PlxuXHRcdFx0XHRcdFx0PEljb24gaWNvbj17IGl0ZW0uaWNvbiB9Lz5cblx0XHRcdFx0XHRcdHsgaXRlbS50aXRsZSB9XG5cdFx0XHRcdFx0PC9zcGFuPixcblx0XHRcdFx0fSApO1xuXHRcdFx0XHR2YXJpYXRpb25zTWFwWyBpdGVtLm5hbWUgXSA9IGl0ZW07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZhcmlhdGlvbnM6IG9wdGlvbnMsXG5cdFx0XHRcdHJhd1ZhcmlhdGlvbnM6IHZhcmlhdGlvbnNNYXAsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0WyBuYW1lIF0sXG5cdCk7XG5cblx0aWYgKCAhdmFyaWF0aW9ucy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPEN1c3RvbVNlbGVjdENvbnRyb2xcblx0XHRfX25leHRVbmNvbnN0cmFpbmVkV2lkdGhcblx0XHRoaWRlTGFiZWxGcm9tVmlzaW9uXG5cdFx0b3B0aW9ucz17IHZhcmlhdGlvbnMgfVxuXHRcdHNpemU9eyAnX191bnN0YWJsZS1sYXJnZScgfVxuXHRcdG9uQ2hhbmdlPXsgKCB7IHNlbGVjdGVkSXRlbSB9ICkgPT4gc2V0QXR0cmlidXRlcygge1xuXHRcdFx0Li4ucmF3VmFyaWF0aW9uc1sgc2VsZWN0ZWRJdGVtLmtleSBdLmF0dHJpYnV0ZXMsXG5cdFx0fSApIH1cblx0XHR2YWx1ZT17IHZhcmlhdGlvbnMuZmluZChcblx0XHRcdCggeyBrZXkgfSApID0+IGtleSA9PT0gdmFsdWUgKVxuXHRcdH1cblx0Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFZhcmlhdGlvbnM7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuXG5jb25zdCB7XG5cdCAgICAgIENoaWxkcmVuLFxuXHQgICAgICBjbG9uZUVsZW1lbnQsXG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja0VkaXRDb250ZXh0LFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5sZXQge1xuXHQgICAgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2wsXG5cdCAgICBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbkljb24sXG5cdCAgICBfX2V4cGVyaW1lbnRhbFRvb2xiYXJDb250ZXh0LFxuXHQgICAgVG9nZ2xlR3JvdXBDb250cm9sLFxuXHQgICAgVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uSWNvbixcblx0ICAgIFRvb2xiYXJJdGVtLFxuXHQgICAgVG9vbGJhckdyb3VwLFxuXHQgICAgVG9vbGJhckNvbnRleHQsXG4gICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cblRvZ2dsZUdyb3VwQ29udHJvbCAgICAgICAgICAgPSAoXG5cdFRvZ2dsZUdyb3VwQ29udHJvbCB8fCBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbFxuKTtcblRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbkljb24gPSAoXG5cdFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbkljb24gfHwgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25JY29uXG4pO1xuVG9vbGJhckNvbnRleHQgICAgICAgICAgICAgICA9IChcblx0VG9vbGJhckNvbnRleHQgfHwgX19leHBlcmltZW50YWxUb29sYmFyQ29udGV4dFxuKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFRvZ2dsZUdyb3VwVmFyaWF0aW9uc0Jhc2UoIHsgdmFsdWUgfSApIHtcblx0Y29uc3QgeyBuYW1lIH0gICAgID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXHRjb25zdCB0b29sYmFyU3RhdGUgPSB1c2VDb250ZXh0KCBUb29sYmFyQ29udGV4dCApO1xuXG5cdGNvbnN0IFsgLCBzZXRBdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRjb25zdCB7IHZhcmlhdGlvbnMsIGNvbXBvbmVudHMgfSA9IHVzZVNlbGVjdChcblx0XHQoIHNlbGVjdCApID0+IHtcblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0ICAgICAgZ2V0QmxvY2tWYXJpYXRpb25zLFxuXHRcdFx0ICAgICAgfSA9IHNlbGVjdCggJ2NvcmUvYmxvY2tzJyApO1xuXG5cdFx0XHRjb25zdCBpdGVtcyA9IGdldEJsb2NrVmFyaWF0aW9ucyggbmFtZSwgJ2Jsb2NrJyApO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YXJpYXRpb25zOiBpdGVtcyxcblx0XHRcdFx0Y29tcG9uZW50czogaXRlbXMubWFwKFxuXHRcdFx0XHRcdGN1cnJlbnQgPT4gKFxuXHRcdFx0XHRcdFx0ICAgICAgICAgICB0b29sYmFyU3RhdGU/LmN1cnJlbnRJZCA/P1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICB0b29sYmFyU3RhdGU/LmJhc2VJZFxuXHRcdFx0XHRcdCAgICAgICAgICAgKVxuXHRcdFx0XHRcdCAgICAgICAgICAgPyA8VG9vbGJhckl0ZW1cblx0XHRcdFx0XHRcdCAgICAgICAgICAga2V5PXsgY3VycmVudC5uYW1lIH1cblx0XHRcdFx0XHRcdCAgICAgICAgICAgYXM9eyBUb2dnbGVHcm91cENvbnRyb2xPcHRpb25JY29uIH1cblx0XHRcdFx0XHRcdCAgICAgICAgICAgdmFsdWU9eyBjdXJyZW50Lm5hbWUgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBsYWJlbD17IGN1cnJlbnQudGl0bGUgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBpY29uPXsgY3VycmVudC5pY29uIH1cblx0XHRcdFx0XHQgICAgICAgICAgIC8+IDogPFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbkljb25cblx0XHRcdFx0XHRcdCAgICAgICAgICAga2V5PXsgY3VycmVudC5uYW1lIH1cblx0XHRcdFx0XHRcdCAgICAgICAgICAgdmFsdWU9eyBjdXJyZW50Lm5hbWUgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBsYWJlbD17IGN1cnJlbnQudGl0bGUgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBpY29uPXsgY3VycmVudC5pY29uIH1cblx0XHRcdFx0XHQgICAgICAgICAgIC8+ICksXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHRcdFtdLFxuXHQpO1xuXG5cdGlmICggIXZhcmlhdGlvbnMubGVuZ3RoICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiamZiLXZhcmlhdGlvbnMtdG9vbGJhci10b2dnbGVcIj48VG9nZ2xlR3JvdXBDb250cm9sXG5cdFx0aGlkZUxhYmVsRnJvbVZpc2lvblxuXHRcdG9uQ2hhbmdlPXsgdmFyTmFtZSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHQuLi52YXJpYXRpb25zLmZpbmQoXG5cdFx0XHRcdCggeyBuYW1lOiB2YXJpYXRpb25OYW1lIH0gKSA9PiB2YXJpYXRpb25OYW1lID09PSB2YXJOYW1lLFxuXHRcdFx0KS5hdHRyaWJ1dGVzLFxuXHRcdH0gKSB9XG5cdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0aXNCbG9ja1xuXHQ+XG5cdFx0eyBDaGlsZHJlbi5tYXAoXG5cdFx0XHRjb21wb25lbnRzLFxuXHRcdFx0Y2xvbmVFbGVtZW50LFxuXHRcdCkgfVxuXHQ8L1RvZ2dsZUdyb3VwQ29udHJvbD48L2Rpdj47XG59XG5cbmZ1bmN0aW9uIFRvZ2dsZUdyb3VwVmFyaWF0aW9ucyggcHJvcHMgKSB7XG5cdGNvbnN0IHRvb2xiYXJTdGF0ZSA9IHVzZUNvbnRleHQoIFRvb2xiYXJDb250ZXh0ICk7XG5cblx0aWYgKCAhdG9vbGJhclN0YXRlPy5jdXJyZW50SWQgKSB7XG5cdFx0cmV0dXJuIDxUb2dnbGVHcm91cFZhcmlhdGlvbnNCYXNlIHsgLi4ucHJvcHMgfS8+O1xuXHR9XG5cblx0cmV0dXJuIDxUb29sYmFyR3JvdXAgY2xhc3NOYW1lPXsgJ2pldC1mYiB0b2dnbGUtdG9vbGJhci1ncm91cCcgfT5cblx0XHQ8VG9nZ2xlR3JvdXBWYXJpYXRpb25zQmFzZSB7IC4uLnByb3BzIH0vPlxuXHQ8L1Rvb2xiYXJHcm91cD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUdyb3VwVmFyaWF0aW9uczsiLCJpbXBvcnQgdXNlVW5pcUtleSBmcm9tICcuLi9ob29rcy91c2VVbmlxS2V5JztcbmltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCB1c2VTdWNjZXNzTm90aWNlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVN1Y2Nlc3NOb3RpY2UnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJsb2NrQ29udHJvbHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29weVRvQ2xpcGJvYXJkLFxuICAgICAgfSA9IHdwLmNvbXBvc2U7XG5cbmNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG5cdCAgICAgIFRvb2xiYXJHcm91cCxcblx0ICAgICAgVG9vbGJhckl0ZW0sXG5cdCAgICAgIFRvb2xiYXJCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gVG9vbEJhckRlZmF1bHQoIHsgY2hpbGRyZW4gPSBudWxsIH0gKSB7XG5cdGNvbnN0IHVuaXFLZXkgPSB1c2VVbmlxS2V5KCk7XG5cblx0Y29uc3QgW1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0ICAgICAgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IGRpc3BsYXlOb3RpY2UgPSB1c2VTdWNjZXNzTm90aWNlKFxuXHRcdGBDb3BpZWQgXCIkeyBhdHRyaWJ1dGVzLm5hbWUgfVwiIHRvIGNsaXBib2FyZC5gLFxuXHQpO1xuXG5cdGNvbnN0IGNvcHlSZWYgPSB1c2VDb3B5VG9DbGlwYm9hcmQoXG5cdFx0YXR0cmlidXRlcy5uYW1lLFxuXHRcdCgpID0+IGRpc3BsYXlOb3RpY2UoIHRydWUgKSxcblx0KTtcblxuXHRyZXR1cm4gPEJsb2NrQ29udHJvbHNcblx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcy1CbG9ja0NvbnRyb2xzJyApIH1cblx0PlxuXHRcdDxUb29sYmFyR3JvdXBcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzLVRvb2xiYXJHcm91cCcgKSB9XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmItYmxvY2stdG9vbGJhclwiXG5cdFx0PlxuXHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRpY29uPVwiYWRtaW4tcGFnZVwiXG5cdFx0XHRcdHNob3dUb29sdGlwXG5cdFx0XHRcdHNob3J0Y3V0PVwiQ29weSBuYW1lXCJcblx0XHRcdFx0cmVmPXsgY29weVJlZiB9XG5cdFx0XHQvPlxuXHRcdFx0PFRvb2xiYXJJdGVtXG5cdFx0XHRcdGFzPXsgVGV4dENvbnRyb2wgfVxuXHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmFtZSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmFtZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG5hbWUgfSApIH1cblx0XHRcdC8+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L1Rvb2xiYXJHcm91cD5cblx0PC9CbG9ja0NvbnRyb2xzPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbEJhckRlZmF1bHQ7IiwiaW1wb3J0IFRvb2xCYXJEZWZhdWx0IGZyb20gJy4vVG9vbEJhckRlZmF1bHQnO1xuaW1wb3J0IEJsb2NrUmVxdWlyZWQgZnJvbSAnLi9CbG9ja1JlcXVpcmVkJztcblxuZnVuY3Rpb24gVG9vbEJhckZpZWxkcyggeyBjaGlsZHJlbiA9IG51bGwgfSApIHtcblx0cmV0dXJuIDw+XG5cdFx0PFRvb2xCYXJEZWZhdWx0PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9Ub29sQmFyRGVmYXVsdD5cblx0XHQ8QmxvY2tSZXF1aXJlZC8+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbEJhckZpZWxkczsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IFNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge30gKTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcGVkQXR0cmlidXRlc0NvbnRleHQ7IiwiaW1wb3J0IHsgZ2V0Q29udmVydGVkTmFtZSB9IGZyb20gJy4uLy4uL3Rvb2xzJztcblxuZnVuY3Rpb24gQ2hhbmdlTmFtZUJ5TGFiZWwoIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgKSB7XG5cdGlmICggMSA+PSBhdHRyaWJ1dGVzLmxhYmVsLmxlbmd0aFxuXHRcdHx8IChcblx0XHRcdGF0dHJpYnV0ZXMubmFtZSAmJiAnZmllbGRfbmFtZScgIT09XG5cdFx0XHRhdHRyaWJ1dGVzLm5hbWVcblx0XHQpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRuYW1lOiBnZXRDb252ZXJ0ZWROYW1lKCBhdHRyaWJ1dGVzLmxhYmVsICksXG5cdH0gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlTmFtZUJ5TGFiZWw7IiwiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5jb25zdCBDb250cm9sc1NldHRpbmdzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcy5jb250cm9scycsIHt9IClcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHNTZXR0aW5nczsiLCJjb25zdCB7IGFkZEZpbHRlciB9ID0gd3AuaG9va3M7XG5cbmZ1bmN0aW9uIGFwcGVuZEZpZWxkKCBjYWxsYmFjaywgZmllbGROYW1lcyA9IFtdICkgIHtcblx0YWRkRmlsdGVyKCAnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcycsICdqZXQtZm9ybS1idWlsZGVyJywgYmxvY2tzID0+IHtcblx0XHRyZXR1cm4gYmxvY2tzLm1hcCggYmxvY2sgPT4ge1xuXHRcdFx0aWYgKCBmaWVsZE5hbWVzLmxlbmd0aCAmJiAhIGZpZWxkTmFtZXMuaW5jbHVkZXMoIGJsb2NrLm5hbWUgKSApIHtcblx0XHRcdFx0cmV0dXJuIGJsb2NrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY2FsbGJhY2soIGJsb2NrICk7XG5cdFx0fSApO1xuXHR9ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZEZpZWxkOyIsImNvbnN0IHsgc2VsZWN0IH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2tQYXJzZXJGdW5jICkge1xuXHRjb25zdCBibG9ja3NSZWN1cnNpdmVJbm5lckl0ZXJhdG9yID0gKCBibG9ja3MsIHBhcmVudCA9IG51bGwgKSA9PiB7XG5cblx0XHRibG9ja3MgPSBibG9ja3MgfHwgc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCk7XG5cblx0XHRibG9ja3MuZm9yRWFjaCggYmxvY2sgPT4ge1xuXHRcdFx0YmxvY2tQYXJzZXJGdW5jKCBibG9jaywgcGFyZW50ICk7XG5cblx0XHRcdGlmICggYmxvY2suaW5uZXJCbG9ja3MubGVuZ3RoICkge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50UGFyZW50ID0gJ2pldC1mb3Jtcy9yZXBlYXRlci1maWVsZCcgPT09IGJsb2NrLm5hbWVcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgID8gYmxvY2tcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDogcGFyZW50O1xuXG5cdFx0XHRcdGJsb2Nrc1JlY3Vyc2l2ZUlubmVySXRlcmF0b3IoXG5cdFx0XHRcdFx0YmxvY2suaW5uZXJCbG9ja3MsXG5cdFx0XHRcdFx0Y3VycmVudFBhcmVudCxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggJ2NvcmUvYmxvY2snICE9PSBibG9jay5uYW1lICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogSGFyZGNvZGUgdGhlIHJlY2VpcHQgb2YgaW50ZXJuYWwgYmxvY2tzIFwiUmV1c2FibGUgYmxvY2tcIi5cblx0XHRcdCAqIFRoaXMgaXMgdGhlIG9ubHkgd2F5IHNvIGZhci5cblx0XHRcdCAqXG5cdFx0XHQgKiBBZGRlZCBhZnRlciBtYWpvciByZWZhY3RvcmluZ1xuXHRcdFx0ICogQHNpbmNlIDMuMC40XG5cdFx0XHQgKlxuXHRcdFx0ICogSW50cm9kdWNlZFxuXHRcdFx0ICogQHNpbmNlIDIuMS4xXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUge3tjbGllbnRJZDogc3RyaW5nLCBpbm5lckJsb2NrczogQXJyYXl9W119XG5cdFx0XHQgKi9cblx0XHRcdGxldCBpbm5lclJldXNhYmxlID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICk/LlxuXHRcdFx0XHRfX3Vuc3RhYmxlR2V0Q2xpZW50SWRzVHJlZT8uKFxuXHRcdFx0XHRcdGJsb2NrLmNsaWVudElkLFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRpZiAoICEgaW5uZXJSZXVzYWJsZT8ubGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGlubmVyUmV1c2FibGVJZHMgPSBpbm5lclJldXNhYmxlLm1hcChcblx0XHRcdFx0KCB7IGNsaWVudElkIH0gKSA9PiBjbGllbnRJZCxcblx0XHRcdCk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogV2UgdXBkYXRlIHRoaXMgdmFyaWFibGUgYmVjYXVzZSBgX191bnN0YWJsZUdldENsaWVudElkc1RyZWVgXG5cdFx0XHQgKiByZXR1cm5zIGluc3VmZmljaWVudCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYmxvY2suXG5cdFx0XHQgKiBOYW1lbHksIHRoZSBgbmFtZWAgcHJvcGVydHkgaXMgbWlzc2luZ1xuXHRcdFx0ICovXG5cdFx0XHRpbm5lclJldXNhYmxlID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzQnlDbGllbnRJZChcblx0XHRcdFx0aW5uZXJSZXVzYWJsZUlkcyxcblx0XHRcdCk7XG5cblx0XHRcdGJsb2Nrc1JlY3Vyc2l2ZUlubmVySXRlcmF0b3IoIGlubmVyUmV1c2FibGUgKTtcblx0XHR9ICk7XG5cdH07XG5cblx0YmxvY2tzUmVjdXJzaXZlSW5uZXJJdGVyYXRvcigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvcjsiLCJpbXBvcnQgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyBmcm9tICcuL2dldEZvcm1GaWVsZHNCbG9ja3MnO1xuXG5mdW5jdGlvbiBnZXRBdmFpbGFibGVGaWVsZHMoIGV4Y2x1ZGUgPSBbXSwgY29udGV4dCA9ICdkZWZhdWx0JyApIHtcblx0Y29uc3QgZmllbGRzICAgPSBbXTtcblx0Y29uc3QgYmxvY2tzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggZXhjbHVkZSwgZmFsc2UsIGZhbHNlLCBjb250ZXh0ICk7XG5cblx0aWYgKCBibG9ja3MgKSB7XG5cdFx0YmxvY2tzLmZvckVhY2goIGl0ZW0gPT4gZmllbGRzLnB1c2goIGl0ZW0ubmFtZSApICk7XG5cdH1cblx0cmV0dXJuIGZpZWxkcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXZhaWxhYmxlRmllbGRzOyIsImltcG9ydCBnZXRBdmFpbGFibGVGaWVsZHMgZnJvbSAnLi9nZXRBdmFpbGFibGVGaWVsZHMnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcoIGJsb2NrTmFtZSApIHtcblx0Y29uc3QgZmllbGRzID0gZ2V0QXZhaWxhYmxlRmllbGRzKCBbIGJsb2NrTmFtZSBdICk7XG5cblx0Y29uc3QgZmllbGRzU3RyaW5nID0gW107XG5cdGZpZWxkcy5mb3JFYWNoKCBmdW5jdGlvbiAoIGl0ZW0gKSB7XG5cdFx0ZmllbGRzU3RyaW5nLnB1c2goICclRklFTEQ6OicgKyBpdGVtICsgJyUnICk7XG5cdH0gKTtcblxuXHRyZXR1cm4gX18oICdBdmFpbGFibGUgZmllbGRzOiAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArXG5cdFx0ZmllbGRzU3RyaW5nLmpvaW4oICcsICcgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nOyIsImltcG9ydCBDb250cm9sc1NldHRpbmdzIGZyb20gJy4vQ29udHJvbHNTZXR0aW5ncyc7XG5cbmZ1bmN0aW9uIGdldEJsb2NrQ29udHJvbHMoIHR5cGUgPSAnYWxsJyApIHtcblx0aWYgKCAhdHlwZSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Y29uc3QgY29udHJvbHMgPSBDb250cm9sc1NldHRpbmdzKCk7XG5cblx0aWYgKCAnYWxsJyA9PT0gdHlwZSApIHtcblx0XHRyZXR1cm4gY29udHJvbHM7XG5cdH1cblxuXHRpZiAoIGNvbnRyb2xzWyB0eXBlIF1cblx0XHQmJiBjb250cm9sc1sgdHlwZSBdLmF0dHJzXG5cdFx0JiYgQXJyYXkuaXNBcnJheSggY29udHJvbHNbIHR5cGUgXS5hdHRycyApXG5cdFx0JiYgMCA8IGNvbnRyb2xzWyB0eXBlIF0uYXR0cnMubGVuZ3RoXG5cdCkge1xuXHRcdHJldHVybiBjb250cm9sc1sgdHlwZSBdLmF0dHJzO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRCbG9ja0NvbnRyb2xzOyIsImltcG9ydCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciBmcm9tICcuL2Jsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yJztcblxuZnVuY3Rpb24gZ2V0QmxvY2tzQnlOYW1lKCBibG9ja05hbWVzICkge1xuXHRjb25zdCBibG9ja3MgPSBbXTtcblxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xuXHRcdGlmICggIWJsb2NrTmFtZXMuaW5jbHVkZXMoIGJsb2NrLm5hbWUgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0YmxvY2tzLnB1c2goIGJsb2NrICk7XG5cdH0gKTtcblxuXHRyZXR1cm4gYmxvY2tzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRCbG9ja3NCeU5hbWU7IiwiaW1wb3J0IGdldElubmVyQmxvY2tzIGZyb20gJy4vZ2V0SW5uZXJCbG9ja3MnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrUHJvcHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRJbm5lckJsb2NrcygpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cdGNvbnN0IHsgJ2RhdGEtYmxvY2snOiBkYXRhQmxvY2sgfSA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRyZXR1cm4gZ2V0SW5uZXJCbG9ja3MoIGRhdGFCbG9jayApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDdXJyZW50SW5uZXJCbG9ja3M7IiwiaW1wb3J0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yIGZyb20gJy4vYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3InO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSB3cC5ob29rcztcbmNvbnN0IHtcblx0ICAgICAgc2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIGdldEZpZWxkc1dpdGhvdXRDdXJyZW50KFxuXHRwbGFjZWhvbGRlciAgICA9IGZhbHNlLFxuXHRzdXBwcmVzc0ZpbHRlciA9IGZhbHNlLFxuXHRjb250ZXh0ICAgICAgICA9ICdkZWZhdWx0Jyxcbikge1xuXG5cdGNvbnN0IHNraXBGaWVsZHMgPSBbXG5cdFx0J3N1Ym1pdCcsXG5cdFx0J2Zvcm0tYnJlYWsnLFxuXHRcdCdoZWFkaW5nJyxcblx0XHQnZ3JvdXAtYnJlYWsnLFxuXHRcdCdjb25kaXRpb25hbCcsXG5cdF07XG5cdGxldCBmb3JtRmllbGRzICAgPSBbXTtcblxuXHRjb25zdCBjdXJyZW50ID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZWxlY3RlZEJsb2NrKCk7XG5cblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrID0+IHtcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXG5cdFx0XHQmJiBjdXJyZW50Py5jbGllbnRJZCAhPT0gYmxvY2suY2xpZW50SWRcblx0XHRcdCYmICFza2lwRmllbGRzLmZpbmQoIGZpZWxkID0+IGJsb2NrLm5hbWUuaW5jbHVkZXMoIGZpZWxkICkgKVxuXHRcdCkge1xuXHRcdFx0Y29uc3QgYmxvY2tUeXBlID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICkuXG5cdFx0XHRcdGdldEJsb2NrVHlwZSggYmxvY2submFtZSApO1xuXG5cdFx0XHRsZXQgeyBmaWVsZHM6IG5ld0ZpZWxkcyA9IFtdIH0gPSBibG9ja1R5cGUuamZiUmVzb2x2ZUJsb2NrLmNhbGwoXG5cdFx0XHRcdGJsb2NrLFxuXHRcdFx0XHRjb250ZXh0LFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBibG9ja1R5cGUuaGFzT3duUHJvcGVydHkoICdqZmJHZXRGaWVsZHMnICkgKSB7XG5cdFx0XHRcdG5ld0ZpZWxkcyA9IGJsb2NrVHlwZS5qZmJHZXRGaWVsZHMuY2FsbCggYmxvY2ssIGNvbnRleHQgKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKFxuXHRcdFx0XHQuLi5uZXdGaWVsZHMuZmlsdGVyKCBmb3JtRmllbGQgPT4gIWZvcm1GaWVsZHMuc29tZShcblx0XHRcdFx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSBmb3JtRmllbGQudmFsdWUsXG5cdFx0XHRcdCkgKSxcblx0XHRcdCk7XG5cdFx0fVxuXHR9ICk7XG5cblx0Zm9ybUZpZWxkcyA9IHBsYWNlaG9sZGVyXG5cdCAgICAgICAgICAgICA/IFsgeyB2YWx1ZTogJycsIGxhYmVsOiBwbGFjZWhvbGRlciB9LCAuLi5mb3JtRmllbGRzIF1cblx0ICAgICAgICAgICAgIDogZm9ybUZpZWxkcztcblxuXHRyZXR1cm4gc3VwcHJlc3NGaWx0ZXIgPyBmb3JtRmllbGRzIDogYXBwbHlGaWx0ZXJzKFxuXHRcdCdqZXQuZmIuZ2V0Rm9ybUZpZWxkc0Jsb2NrcycsIGZvcm1GaWVsZHMsIGNvbnRleHQgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQ7IiwiaW1wb3J0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yIGZyb20gJy4vYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3InO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSB3cC5ob29rcztcbmNvbnN0IHtcblx0ICAgICAgc2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIGdldEZvcm1GaWVsZHNCbG9ja3MoXG5cdGV4Y2x1ZGUgICAgICAgID0gW10sXG5cdHBsYWNlaG9sZGVyICAgID0gZmFsc2UsXG5cdHN1cHByZXNzRmlsdGVyID0gZmFsc2UsXG5cdGNvbnRleHQgICAgICAgID0gJ2RlZmF1bHQnLFxuKSB7XG5cdGxldCBmb3JtRmllbGRzID0gW107XG5cdGNvbnN0IHNraXBGaWVsZHMgPSBbXG5cdFx0J3N1Ym1pdCcsXG5cdFx0J2Zvcm0tYnJlYWsnLFxuXHRcdCdoZWFkaW5nJyxcblx0XHQnZ3JvdXAtYnJlYWsnLFxuXHRcdCdjb25kaXRpb25hbCcsXG5cdFx0Li4uZXhjbHVkZSxcblx0XTtcblxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcblx0XHRcdCYmICFza2lwRmllbGRzLmZpbmQoIGZpZWxkID0+IGJsb2NrLm5hbWUuaW5jbHVkZXMoIGZpZWxkICkgKVxuXHRcdCkge1xuXG5cdFx0XHRjb25zdCBibG9ja1R5cGUgPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKS5cblx0XHRcdFx0Z2V0QmxvY2tUeXBlKCBibG9jay5uYW1lICk7XG5cblx0XHRcdGxldCB7IGZpZWxkczogbmV3RmllbGRzID0gW10gfSA9IGJsb2NrVHlwZS5qZmJSZXNvbHZlQmxvY2suY2FsbChcblx0XHRcdFx0YmxvY2ssXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIGJsb2NrVHlwZS5oYXNPd25Qcm9wZXJ0eSggJ2pmYkdldEZpZWxkcycgKSApIHtcblx0XHRcdFx0bmV3RmllbGRzID0gYmxvY2tUeXBlLmpmYkdldEZpZWxkcy5jYWxsKCBibG9jaywgY29udGV4dCApO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goXG5cdFx0XHRcdC4uLm5ld0ZpZWxkcy5maWx0ZXIoIGN1cnJlbnQgPT4gIWZvcm1GaWVsZHMuc29tZShcblx0XHRcdFx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSBjdXJyZW50LnZhbHVlLFxuXHRcdFx0XHQpICksXG5cdFx0XHQpO1xuXHRcdH1cblx0fSApO1xuXG5cdGZvcm1GaWVsZHMgPSBwbGFjZWhvbGRlclxuXHQgICAgICAgICAgICAgPyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXG5cdCAgICAgICAgICAgICA6IGZvcm1GaWVsZHM7XG5cblx0cmV0dXJuIHN1cHByZXNzRmlsdGVyID8gZm9ybUZpZWxkcyA6IGFwcGx5RmlsdGVycyhcblx0XHQnamV0LmZiLmdldEZvcm1GaWVsZHNCbG9ja3MnLCBmb3JtRmllbGRzLCBjb250ZXh0ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZvcm1GaWVsZHNCbG9ja3M7IiwiZnVuY3Rpb24gZ2V0SW5uZXJCbG9ja3MoIGNsaWVudElkICkge1xuXHRjb25zdCBibG9jayA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2soIGNsaWVudElkICk7XG5cdHJldHVybiBibG9jayA/IGJsb2NrLmlubmVyQmxvY2tzIDogW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldElubmVyQmxvY2tzOyIsImNvbnN0IHsgZ2V0IH0gPSB3aW5kb3cuXztcblxuLyoqXG4gKiBAcGFyYW0gYmxvY2tTZXR0aW5ncyB7T2JqZWN0fSBmcm9tIGJsb2NrLmpzb25cbiAqIEBwYXJhbSBzdXBwb3J0c1BhdGggIHtTdHJpbmd8QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGdldFN1cHBvcnQoIGJsb2NrU2V0dGluZ3MsIHN1cHBvcnRzUGF0aCApIHtcblx0aWYgKCAhQXJyYXkuaXNBcnJheSggc3VwcG9ydHNQYXRoICkgKSB7XG5cdFx0c3VwcG9ydHNQYXRoID0gWyBzdXBwb3J0c1BhdGggXTtcblx0fVxuXG5cdHJldHVybiBnZXQoXG5cdFx0YmxvY2tTZXR0aW5ncyxcblx0XHRbICdzdXBwb3J0cycsIC4uLnN1cHBvcnRzUGF0aCBdLFxuXHRcdGZhbHNlLFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRTdXBwb3J0OyIsImltcG9ydCB7IHVzZUJsb2NrRWRpdENvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyB1c2VTZWxlY3QsIHVzZURpc3BhdGNoLCBzZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5mdW5jdGlvbiB1c2VCbG9ja0F0dHJpYnV0ZXMoIG90aGVyQ2xpZW50SWQgPSBudWxsICkge1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXHRsZXQgeyBjbGllbnRJZCB9ID0gYmxvY2tQcm9wcztcblxuXHRpZiAoIG90aGVyQ2xpZW50SWQgKSB7XG5cdFx0Y2xpZW50SWQgPSBvdGhlckNsaWVudElkO1xuXHR9XG5cblx0Y29uc3QgYXR0cmlidXRlcyAgICAgID0gdXNlU2VsZWN0KCBzZWxlY3RTdG9yZSA9PiAoXG5cdFx0c2VsZWN0U3RvcmUoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja0F0dHJpYnV0ZXMoIGNsaWVudElkIClcblx0KSwgWyBjbGllbnRJZCBdICk7XG5cdGNvbnN0IHsgdXBkYXRlQmxvY2sgfSA9IHVzZURpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICk7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBwcm9wcyB7T2JqZWN0fEZ1bmN0aW9ufVxuXHQgKi9cblx0Y29uc3QgdXBkYXRlQXR0cmlidXRlcyA9IHByb3BzID0+IHtcblx0XHRwcm9wcyA9ICdvYmplY3QnID09PSB0eXBlb2YgcHJvcHNcblx0XHQgICAgICAgID8gcHJvcHNcblx0XHQgICAgICAgIDogcHJvcHMoIGF0dHJpYnV0ZXMgKTtcblxuXHRcdHByb3BzID0gc2VsZWN0KCAnamV0LWZvcm1zL2ZpZWxkcycgKS5nZXRTYW5pdGl6ZWRBdHRyaWJ1dGVzKFxuXHRcdFx0cHJvcHMsXG5cdFx0XHRibG9ja1Byb3BzLFxuXHRcdCk7XG5cblx0XHR1cGRhdGVCbG9jayggY2xpZW50SWQsIHsgYXR0cmlidXRlczogcHJvcHMgfSApO1xuXHR9O1xuXG5cdHJldHVybiBbIGF0dHJpYnV0ZXMsIHVwZGF0ZUF0dHJpYnV0ZXMgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQmxvY2tBdHRyaWJ1dGVzOyIsImltcG9ydCB1c2VTZWxlY3RQb3N0TWV0YSBmcm9tICcuLi8uLi9ob29rcy91c2VTZWxlY3RQb3N0TWV0YSc7XG5pbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4vdXNlQmxvY2tBdHRyaWJ1dGVzJztcblxuZnVuY3Rpb24gdXNlSXNBZHZhbmNlZFZhbGlkYXRpb24oKSB7XG5cdGNvbnN0IHsgdHlwZSB9ICAgICAgID0gdXNlU2VsZWN0UG9zdE1ldGEoICdfamZfdmFsaWRhdGlvbicgKTtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRpZiAoIGF0dHJpYnV0ZXMudmFsaWRhdGlvbj8udHlwZSApIHtcblx0XHRyZXR1cm4gJ2FkdmFuY2VkJyA9PT0gYXR0cmlidXRlcy52YWxpZGF0aW9uPy50eXBlO1xuXHR9XG5cblx0cmV0dXJuICdhZHZhbmNlZCcgPT09IHR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUlzQWR2YW5jZWRWYWxpZGF0aW9uOyIsImltcG9ydCB7IHVzZVJlcXVlc3RGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IHVzZUJsb2NrRWRpdENvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyBzcHJpbnRmLCBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmNvbnN0IGFjdGlvblR5cGVzTWFwID0ge307XG5cbmZvciAoIGNvbnN0IHsgaWQsIG5hbWUgfSBvZiB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzICkge1xuXHRhY3Rpb25UeXBlc01hcFsgaWQgXSA9IG5hbWU7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiB1c2VJc1VuaXF1ZUZpZWxkTmFtZSgpIHtcblx0Y29uc3QgeyBjbGllbnRJZCB9ID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXHRjb25zdCBhY3Rpb25GaWVsZHMgPSB1c2VSZXF1ZXN0RmllbGRzKFxuXHRcdHsgcmV0dXJuT25FbXB0eUN1cnJlbnRBY3Rpb246IGZhbHNlIH0sXG5cdCk7XG5cblx0Y29uc3QgeyBpbkZvcm1GaWVsZHMsIGhhc1BhcmVudCwgZmllbGROYW1lcyB9ID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiB7XG5cdFx0XHRjb25zdCBjdXJyZW50QmxvY2sgPSBzZWxlY3QoICdqZXQtZm9ybXMvZmllbGRzJyApLlxuXHRcdFx0XHRnZXRCbG9ja0J5SWQoIGNsaWVudElkICk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGhhc1BhcmVudDogISFjdXJyZW50QmxvY2s/LnBhcmVudEJsb2NrLFxuXHRcdFx0XHRmaWVsZE5hbWVzOiBjdXJyZW50QmxvY2s/LmZpZWxkcz8ubWFwPy4oXG5cdFx0XHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApID8/IFtdLFxuXHRcdFx0XHRpbkZvcm1GaWVsZHM6IHNlbGVjdCggJ2pldC1mb3Jtcy9maWVsZHMnICkuXG5cdFx0XHRcdFx0aXNVbmlxdWVOYW1lKCBjbGllbnRJZCApLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdFsgY2xpZW50SWQgXSxcblx0KTtcblxuXHRpZiAoICFpbkZvcm1GaWVsZHMgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGVycm9yOiAnbm90X3VuaXF1ZV9pbl9maWVsZHMnLFxuXHRcdFx0bWVzc2FnZTogX18oXG5cdFx0XHRcdCdUaGUgZm9ybSBmaWVsZCBuYW1lIG11c3QgYmUgdW5pcXVlLiBQbGVhc2UgY2hhbmdlIGl0Jyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0XHR9O1xuXHR9XG5cblx0aWYgKCBoYXNQYXJlbnQgKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0Y29uc3QgY29tcHV0ZWQgPSBhY3Rpb25GaWVsZHMuZmluZChcblx0XHQoIHsgdmFsdWUgfSApID0+IGZpZWxkTmFtZXMuaW5jbHVkZXMoIHZhbHVlICkgKTtcblxuXHRpZiAoICFjb21wdXRlZCApIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGVycm9yOiAnbm90X3VuaXF1ZV9pbl9hY3Rpb25zJyxcblx0XHRtZXNzYWdlOiBjb21wdXRlZD8uZnJvbVxuXHRcdCAgICAgICAgID8gc3ByaW50Zihcblx0XHRcdFx0XHQgLy8gdHJhbnNsYXRvcnM6ICVzIC0gYWN0aW9uIG5hbWVcblx0XHRcdFx0X18oXG5cdFx0XHRcdFx0YFRoZSAlcyBhY3Rpb24gYWxyZWFkeSB1c2VzIHRoaXMgZmllbGQgbmFtZS4gUGxlYXNlIGNoYW5nZSBpdGAsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHQpLFxuXHRcdFx0XHRhY3Rpb25UeXBlc01hcFsgY29tcHV0ZWQuZnJvbSBdLFxuXHRcdFx0KVxuXG5cdFx0ICAgICAgICAgOiBfXyhcblx0XHRcdFx0J1RoZSBmb3JtIGZpZWxkIG5hbWUgbXVzdCBiZSB1bmlxdWUuIFBsZWFzZSBjaGFuZ2UgaXQnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VJc1VuaXF1ZUZpZWxkTmFtZTsiLCJpbXBvcnQgU2NvcGVkQXR0cmlidXRlc0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9TY29wZWRBdHRyaWJ1dGVzQ29udGV4dCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG4vKipcbiAqIEByZXR1cm4ge3tcbiAqIGF0dHJpYnV0ZXM6IE9iamVjdCxcbiAqIHNldEF0dHJpYnV0ZXM6IEZ1bmN0aW9uLFxuICogcmVhbEF0dHJpYnV0ZXM6IE9iamVjdCxcbiAqIHNldFJlYWxBdHRyaWJ1dGVzOiBGdW5jdGlvbixcbiAqIH19XG4gKi9cbmZ1bmN0aW9uIHVzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0KCkge1xuXHRyZXR1cm4gdXNlQ29udGV4dCggU2NvcGVkQXR0cmlidXRlc0NvbnRleHQgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2NvcGVkQXR0cmlidXRlc0NvbnRleHQ7IiwiY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja0VkaXRDb250ZXh0LFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7IGdldCB9ID0gd2luZG93Ll87XG5cbmZ1bmN0aW9uIHVzZVN1cHBvcnQoIHN1cHBvcnROYW1lICkge1xuXHRjb25zdCB7IG5hbWUgfSA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcblxuXHRyZXR1cm4gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiB7XG5cdFx0XHRjb25zdCBibG9ja1R5cGUgPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKS5nZXRCbG9ja1R5cGUoIG5hbWUgKTtcblxuXHRcdFx0cmV0dXJuIGdldCggYmxvY2tUeXBlLCBbICdzdXBwb3J0cycsIHN1cHBvcnROYW1lIF0sIGZhbHNlICk7XG5cdFx0fSxcblx0XHRbIG5hbWUsIHN1cHBvcnROYW1lIF0sXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN1cHBvcnQ7IiwiY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja0VkaXRDb250ZXh0LFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5mdW5jdGlvbiB1c2VVbmlxS2V5KCkge1xuXHRjb25zdCB7IGNsaWVudElkIH0gPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cblx0cmV0dXJuIHNsdWcgPT4gKFxuXHRcdHNsdWcgKyAnLScgKyBjbGllbnRJZFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VVbmlxS2V5OyIsImltcG9ydCB7IHN0b3JlTmFtZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUVmZmVjdCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrUHJvcHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmZ1bmN0aW9uIHVzZVVuaXF1ZU5hbWVPbkR1cGxpY2F0ZSggY3VzdG9tQ2hhbmdlTmFtZXMgPSBudWxsICkge1xuXHRjb25zdCBibG9ja1Byb3BzICAgICA9IHVzZUJsb2NrUHJvcHMoKTtcblx0Y29uc3QgWyAsIHNldEF0dHJzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRjb25zdCBjbGllbnRJZCA9IGJsb2NrUHJvcHNbICdkYXRhLWJsb2NrJyBdO1xuXG5cdGNvbnN0IG5hbWVzID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiB7XG5cdFx0XHRjb25zdCBpc0p1c3QgPSBzZWxlY3QoIHN0b3JlTmFtZSApLmlzUmVjZW50bHlBZGRlZCggY2xpZW50SWQgKTtcblxuXHRcdFx0aWYgKCAhaXNKdXN0ICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0ICAgICAgaGFzQ2hhbmdlZCxcblx0XHRcdFx0ICAgICAgbmFtZXM6IHVuaXF1ZU5hbWVzLFxuXHRcdFx0ICAgICAgfSA9IHNlbGVjdCggc3RvcmVOYW1lICkuZ2V0VW5pcXVlTmFtZXMoIGNsaWVudElkICk7XG5cblx0XHRcdHJldHVybiBoYXNDaGFuZ2VkID8gdW5pcXVlTmFtZXMgOiBmYWxzZTtcblx0XHR9LFxuXHRcdFsgY2xpZW50SWQgXSxcblx0KTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRpZiAoICFuYW1lcyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXN0b21DaGFuZ2VOYW1lcyApIHtcblx0XHRcdGN1c3RvbUNoYW5nZU5hbWVzKCBuYW1lcyApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2V0QXR0cnMoIHtcblx0XHRcdG5hbWU6IG5hbWVzLnNwbGl0KCAnfCcgKVsgMCBdLFxuXHRcdH0gKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdH0sIFsgbmFtZXMgXSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGU7IiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgZ2V0UHJlcGFyZWRCbG9ja3MgZnJvbSAnLi9nZXRQcmVwYXJlZEJsb2Nrcyc7XG5pbXBvcnQgeyBzdG9yZU5hbWUgfSBmcm9tICcuL2luZGV4JztcblxuY29uc3Qge1xuXHQgICAgICBzZWxlY3QsXG5cdCAgICAgIGRpc3BhdGNoLFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0c2V0QmxvY2tzKCBhY3Rpb24gPSBudWxsICkge1xuXHRcdGlmICggbnVsbCA9PT0gYWN0aW9uICkge1xuXHRcdFx0YWN0aW9uID0gZ2V0UHJlcGFyZWRCbG9ja3MoKTtcblx0XHR9XG5cblx0XHRjb25zdCBoYXNFeGVjdXRlZCA9IHNlbGVjdCggc3RvcmVOYW1lICkuaXNFeGVjdXRlZCgpO1xuXG5cdFx0aWYgKCAhaGFzRXhlY3V0ZWQgKSB7XG5cdFx0XHRkaXNwYXRjaCggc3RvcmVOYW1lICkudG9nZ2xlRXhlY3V0ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBoYXNFeGVjdXRlZCA/IGNvbnN0YW50cy5zZXRCbG9ja3MgOiBjb25zdGFudHMuc2V0QmxvY2tzRmlyc3QsXG5cdFx0XHRibG9ja3M6IGFjdGlvbi5ibG9ja3MsXG5cdFx0XHRibG9ja01hcDogYWN0aW9uLmJsb2NrTWFwLFxuXHRcdH07XG5cdH0sXG5cdHRvZ2dsZUV4ZWN1dGUoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy50b2dnbGVFeGVjdXRlLFxuXHRcdH07XG5cdH0sXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcblx0c2V0QmxvY2tzOiAnU0VUX0JMT0NLUycsXG5cdHNldEJsb2Nrc0ZpcnN0OiAnU0VUX0JMT0NLU19GSVJTVCcsXG5cdHRvZ2dsZUV4ZWN1dGU6ICdUT0dHTEVfRVhFQ1VURScsXG59O1xuXG5cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBkaXNwYXRjaGVycyA9IHtcblx0WyBjb25zdGFudHMuc2V0QmxvY2tzIF0oIHN0YXRlLCBhY3Rpb24gKSB7XG5cdFx0Y29uc3QgcmVjZW50bHlBZGRlZCA9IFtdO1xuXG5cdFx0Zm9yICggY29uc3QgYmxvY2tNYXBLZXkgaW4gYWN0aW9uLmJsb2NrTWFwICkge1xuXHRcdFx0aWYgKCAhYWN0aW9uLmJsb2NrTWFwLmhhc093blByb3BlcnR5KCBibG9ja01hcEtleSApIHx8XG5cdFx0XHRcdHN0YXRlLmJsb2NrTWFwLmhhc093blByb3BlcnR5KCBibG9ja01hcEtleSApXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZWNlbnRseUFkZGVkLnB1c2goIGJsb2NrTWFwS2V5ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0YmxvY2tzOiBhY3Rpb24uYmxvY2tzLFxuXHRcdFx0YmxvY2tNYXA6IGFjdGlvbi5ibG9ja01hcCxcblx0XHRcdHJlY2VudGx5QWRkZWQsXG5cdFx0fTtcblx0fSxcblx0WyBjb25zdGFudHMuc2V0QmxvY2tzRmlyc3QgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRibG9ja3M6IGFjdGlvbi5ibG9ja3MsXG5cdFx0XHRibG9ja01hcDogYWN0aW9uLmJsb2NrTWFwLFxuXHRcdH07XG5cdH0sXG5cdFsgY29uc3RhbnRzLnRvZ2dsZUV4ZWN1dGUgXSggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0ZXhlY3V0ZWQ6IHRydWUsXG5cdFx0fTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Li4uZGlzcGF0Y2hlcnMsXG59OyIsImltcG9ydCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciBmcm9tICcuLi9oZWxwZXJzL2Jsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yJztcbmNvbnN0IHtcblx0ICAgICAgc2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIGdldFByZXBhcmVkQmxvY2tzKCkge1xuXHRjb25zdCBibG9ja3MgICA9IFtdO1xuXHRjb25zdCBibG9ja01hcCA9IHt9O1xuXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCAoIGJsb2NrLCBwYXJlbnQgKSA9PiB7XG5cdFx0aWYgKCAhYmxvY2s/Lm5hbWU/LmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBibG9ja1R5cGUgPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKS5nZXRCbG9ja1R5cGUoIGJsb2NrLm5hbWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICAgPSBibG9ja1R5cGUuamZiUmVzb2x2ZUJsb2NrLmNhbGwoIGJsb2NrICk7XG5cblx0XHQvLyBkZXByZWNhdGVkIHNpbmNlIDMuMi4wXG5cdFx0aWYgKCBibG9ja1R5cGUuaGFzT3duUHJvcGVydHkoICdqZmJHZXRGaWVsZHMnICkgKSB7XG5cdFx0XHRjdXJyZW50LmZpZWxkcyAgPSBibG9ja1R5cGUuamZiR2V0RmllbGRzLmNhbGwoIGJsb2NrICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhcGFyZW50Py5uYW1lICkge1xuXHRcdFx0YmxvY2tzLnB1c2goIGN1cnJlbnQgKTtcblx0XHRcdGJsb2NrTWFwWyBjdXJyZW50LmNsaWVudElkIF0gPSBjdXJyZW50O1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHRjb25zdCBwYXJlbnRGaWVsZCA9IGJsb2NrTWFwWyBwYXJlbnQ/LmNsaWVudElkIF0gPz8gZmFsc2U7XG5cblx0XHRpZiAoICFwYXJlbnRGaWVsZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGN1cnJlbnQsICdwYXJlbnRCbG9jaycsIHtcblx0XHRcdGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHBhcmVudEZpZWxkO1xuXHRcdFx0fSxcblx0XHR9ICk7XG5cblx0XHRwYXJlbnRGaWVsZC5pbm5lckJsb2NrcyA9IHBhcmVudEZpZWxkPy5pbm5lckJsb2NrcyB8fCBbXTtcblx0XHRwYXJlbnRGaWVsZC5pbm5lckJsb2Nrcy5wdXNoKCBjdXJyZW50ICk7XG5cblx0XHRibG9ja01hcFsgY3VycmVudC5jbGllbnRJZCBdID0gY3VycmVudDtcblx0fSApO1xuXG5cdHJldHVybiB7IGJsb2NrcywgYmxvY2tNYXAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJlcGFyZWRCbG9ja3M7IiwiaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCBnZXRQcmVwYXJlZEJsb2NrcyBmcm9tICcuL2dldFByZXBhcmVkQmxvY2tzJztcblxuY29uc3Qge1xuXHQgICAgICBjcmVhdGVSZWR1eFN0b3JlLFxuXHQgICAgICBkaXNwYXRjaCxcblx0ICAgICAgc2VsZWN0LFxuXHQgICAgICBzdWJzY3JpYmUsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlTmFtZSA9ICdqZXQtZm9ybXMvZmllbGRzJztcblxubGV0IHByZXZCbG9ja0NvdW50O1xubGV0IHByZXZCbG9ja0F0dHJzO1xuXG5zdWJzY3JpYmUoICgpID0+IHtcblx0Y29uc3QgeyBkZWJvdW5jZSB9ICA9IHdpbmRvdy5fO1xuXHRjb25zdCB7IHNldEJsb2NrcyB9ID0gZGlzcGF0Y2goIHN0b3JlTmFtZSApO1xuXG5cdGNvbnN0IHJlc2V0QmxvY2tzID0gZGVib3VuY2UoICgpID0+IHtcblx0XHRjb25zdCBjb3VudEJsb2NrcyA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEdsb2JhbEJsb2NrQ291bnQoKTtcblxuXHRcdGlmICggcHJldkJsb2NrQ291bnQgIT09IGNvdW50QmxvY2tzICkge1xuXHRcdFx0cHJldkJsb2NrQ291bnQgPSBjb3VudEJsb2Nrcztcblx0XHRcdHNldEJsb2NrcygpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWN0aW9uICAgID0gZ2V0UHJlcGFyZWRCbG9ja3MoKTtcblx0XHRjb25zdCBqc29uQXR0cnMgPSBKU09OLnN0cmluZ2lmeSggYWN0aW9uLmJsb2NrcyApO1xuXG5cdFx0aWYgKCBqc29uQXR0cnMgPT09IHByZXZCbG9ja0F0dHJzICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHByZXZCbG9ja0F0dHJzID0ganNvbkF0dHJzO1xuXHRcdHNldEJsb2NrcyggYWN0aW9uICk7XG5cdH0sIDEwMCApO1xuXG5cdHJlc2V0QmxvY2tzKCk7XG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHV4U3RvcmUoIHN0b3JlTmFtZSwge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnMsXG59ICk7XG4iLCJpbXBvcnQgZGlzcGF0Y2hlcnMgZnJvbSAnLi9kaXNwYXRjaGVycyc7XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XG5cdGJsb2NrczogW10sXG5cdGJsb2NrTWFwOiB7fSxcblx0ZXhlY3V0ZWQ6IGZhbHNlLFxuXHRyZWNlbnRseUFkZGVkOiBbXSxcblx0c2FuaXRpemVyczoge1xuXHRcdG5hbWU6IFtcblx0XHRcdG5hbWUgPT4gbmFtZS5yZXBsYWNlKCAvW15cXHdcXC1dL2dpLCAnJyApLFxuXHRcdFx0bmFtZSA9PiBuYW1lID09PSAnY2hpbGRyZW4nID8gJ18nICsgbmFtZSA6IG5hbWUsXG5cdFx0XSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XG5cdGNvbnN0IGNhbGxiYWNrID0gZGlzcGF0Y2hlcnNbIGFjdGlvbj8udHlwZSBdO1xuXG5cdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKCBzdGF0ZSwgYWN0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59IiwiY29uc3Qgc2VsZWN0b3JzID0ge1xuXHRnZXRCbG9ja3MoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5ibG9ja3M7XG5cdH0sXG5cdGdldEJsb2NrTWFwKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuYmxvY2tNYXA7XG5cdH0sXG5cdGdldEZpZWxkcyhcblx0XHRzdGF0ZSxcblx0XHR7XG5cdFx0XHR3aXRoSW5uZXIgPSB0cnVlLFxuXHRcdFx0Y3VycmVudElkID0gZmFsc2UsXG5cdFx0fSxcblx0KSB7XG5cdFx0Y29uc3QgZmllbGRzID0gW107XG5cblx0XHRjb25zdCBpdGVyYXRlRmllbGRzID0gYmxvY2tzID0+IHtcblx0XHRcdGZvciAoIGNvbnN0IGJsb2NrIG9mIGJsb2NrcyApIHtcblx0XHRcdFx0aWYgKCBibG9jay5maWVsZHM/Lmxlbmd0aCAmJiBibG9jay5jbGllbnRJZCAhPT0gY3VycmVudElkICkge1xuXHRcdFx0XHRcdGZpZWxkcy5wdXNoKCAuLi5ibG9jay5maWVsZHMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggIXdpdGhJbm5lciB8fCAhYmxvY2suaW5uZXJCbG9ja3M/Lmxlbmd0aCApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGl0ZXJhdGVGaWVsZHMoIGJsb2NrLmlubmVyQmxvY2tzICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGl0ZXJhdGVGaWVsZHMoIHN0YXRlLmJsb2NrcyApO1xuXG5cdFx0cmV0dXJuIGZpZWxkcztcblx0fSxcblx0aXNFeGVjdXRlZCggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmV4ZWN1dGVkO1xuXHR9LFxuXHRpc1JlY2VudGx5QWRkZWQoIHN0YXRlLCBjbGllbnRJZCApIHtcblx0XHRyZXR1cm4gLTEgIT09IHN0YXRlLnJlY2VudGx5QWRkZWQuaW5kZXhPZiggY2xpZW50SWQgKTtcblx0fSxcblx0Z2V0VW5pcXVlTmFtZXMoIHN0YXRlLCBjbGllbnRJZCApIHtcblx0XHRjb25zdCBjdXJyZW50QmxvY2sgPSBzdGF0ZS5ibG9ja01hcFsgY2xpZW50SWQgXSA/PyBmYWxzZTtcblxuXHRcdGlmICggIWN1cnJlbnRCbG9jayApIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGhhc0NoYW5nZWQ6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0Y29uc3QgbmFtZXMgPSBjdXJyZW50QmxvY2s/LmZpZWxkcz8ubWFwPy4oICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKSA/P1xuXHRcdFx0W107XG5cdFx0Y29uc3Qgc2NvcGUgPSBjdXJyZW50QmxvY2suaGFzT3duUHJvcGVydHkoICdwYXJlbnRCbG9jaycgKVxuXHRcdCAgICAgICAgICAgICAgPyBjdXJyZW50QmxvY2sucGFyZW50QmxvY2suaW5uZXJCbG9ja3Ncblx0XHQgICAgICAgICAgICAgIDogc3RhdGUuYmxvY2tzO1xuXG5cdFx0Y29uc3Qgd2Fsa2VyRmllbGRzID0gKCBmaWVsZHMgKSA9PiB7XG5cdFx0XHRmb3IgKCBjb25zdCBmaWVsZCBvZiBmaWVsZHMgKSB7XG5cdFx0XHRcdGNvbnN0IG5hbWVJbmRleCA9IG5hbWVzLmluZGV4T2YoIGZpZWxkLnZhbHVlICk7XG5cblx0XHRcdFx0aWYgKCAtMSA9PT0gbmFtZUluZGV4ICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAnZmllbGRfbmFtZScgPT09IGZpZWxkLnZhbHVlICkge1xuXHRcdFx0XHRcdGhhc0NoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bmFtZXNbIG5hbWVJbmRleCBdID0gYCR7IG5hbWVzWyBuYW1lSW5kZXggXSB9X2NvcHlgO1xuXHRcdFx0XHRoYXNDaGFuZ2VkICAgICAgICAgPSB0cnVlO1xuXHRcdFx0XHR3YWxrZXJGaWVsZHMoIGZpZWxkcyApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmb3IgKCBjb25zdCBibG9jayBvZiBzY29wZSApIHtcblx0XHRcdGlmICggY2xpZW50SWQgPT09IGJsb2NrLmNsaWVudElkICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHdhbGtlckZpZWxkcyggYmxvY2s/LmZpZWxkcyA/PyBbXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRoYXNDaGFuZ2VkLFxuXHRcdFx0bmFtZXM6IG5hbWVzLmpvaW4oICd8JyApLFxuXHRcdH07XG5cdH0sXG5cdGdldFNhbml0aXplZEF0dHJpYnV0ZXMoIHN0YXRlLCBhdHRycywgeyBuYW1lOiB0eXBlIH0gPSB7fSApIHtcblx0XHRmb3IgKCBjb25zdCBhdHRyc0tleSBpbiBhdHRycyApIHtcblx0XHRcdGlmICggIWF0dHJzLmhhc093blByb3BlcnR5KCBhdHRyc0tleSApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2FuaXRpemVycyA9IChcblx0XHRcdFx0c3RhdGUuc2FuaXRpemVycz8uWyB0eXBlIF0/LlsgYXR0cnNLZXkgXSA/P1xuXHRcdFx0XHRzdGF0ZS5zYW5pdGl6ZXJzPy5bIGF0dHJzS2V5IF0gPz9cblx0XHRcdFx0ZmFsc2Vcblx0XHRcdCk7XG5cblx0XHRcdGlmICggIXNhbml0aXplcnM/Lmxlbmd0aCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGNvbnN0IHNhbml0aXplciBvZiBzYW5pdGl6ZXJzICkge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXG5cdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIHNhbml0aXplciApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhdHRyc1sgYXR0cnNLZXkgXSA9IHNhbml0aXplciggYXR0cnNbIGF0dHJzS2V5IF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYXR0cnM7XG5cdH0sXG5cdGlzVW5pcXVlTmFtZSggc3RhdGUsIGNsaWVudElkICkge1xuXHRcdGNvbnN0IHsgaGFzQ2hhbmdlZCB9ID0gc2VsZWN0b3JzLmdldFVuaXF1ZU5hbWVzKCBzdGF0ZSwgY2xpZW50SWQgKTtcblxuXHRcdHJldHVybiAhaGFzQ2hhbmdlZDtcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjEuMFxuXHQgKlxuXHQgKiBAcGFyYW0gIHN0YXRlXG5cdCAqIEBwYXJhbSAgYmxvY2tJZCB7U3RyaW5nfSBCbG9jayBjbGllbnRJZCBvciBuYW1lXG5cdCAqIEByZXR1cm4geyp9XG5cdCAqL1xuXHRnZXRCbG9jayggc3RhdGUsIGJsb2NrSWQgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmJsb2Nrcy5maW5kKCAoIHsgbmFtZSwgY2xpZW50SWQgfSApID0+IChcblx0XHRcdFsgbmFtZSwgY2xpZW50SWQgXS5pbmNsdWRlcyggYmxvY2tJZCApXG5cdFx0KSApO1xuXHR9LFxuXHRnZXRCbG9ja0J5TmFtZSggc3RhdGUsIGZpZWxkTmFtZSApIHtcblx0XHRpZiAoICFmaWVsZE5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXRlcmF0ZUZpZWxkcyA9IGJsb2NrcyA9PiB7XG5cdFx0XHRmb3IgKCBjb25zdCBibG9jayBvZiBibG9ja3MgKSB7XG5cdFx0XHRcdGlmICggYmxvY2suZmllbGRzLnNvbWUoXG5cdFx0XHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gZmllbGROYW1lLFxuXHRcdFx0XHQpICkge1xuXHRcdFx0XHRcdHJldHVybiBibG9jaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggIWJsb2NrLmlubmVyQmxvY2tzPy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVyYXRlRmllbGRzKCBibG9jay5pbm5lckJsb2NrcyApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpdGVyYXRlRmllbGRzKCBzdGF0ZS5ibG9ja3MgKTtcblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0Z2V0QmxvY2tOYW1lQnlOYW1lKCBzdGF0ZSwgZmllbGROYW1lICkge1xuXHRcdGNvbnN0IGJsb2NrID0gc2VsZWN0b3JzLmdldEJsb2NrQnlOYW1lKCBzdGF0ZSwgZmllbGROYW1lICk7XG5cblx0XHRyZXR1cm4gYmxvY2s/Lm5hbWUgPz8gJyc7XG5cdH0sXG5cdGdldEJsb2NrQnlJZCggc3RhdGUsIGNsaWVudElkICkge1xuXHRcdHJldHVybiBzdGF0ZS5ibG9ja01hcFsgY2xpZW50SWQgXSA/PyBmYWxzZTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Li4uc2VsZWN0b3JzLFxufTsiLCJpbXBvcnQgUHJlc2V0QnV0dG9uIGZyb20gJy4uL3ByZXNldC9jb21wb25lbnRzL1ByZXNldEJ1dHRvbic7XG5pbXBvcnQgTWFjcm9zRmllbGRzIGZyb20gJy4uL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb3NGaWVsZHMnO1xuaW1wb3J0IEJhc2VMYWJlbCBmcm9tICcuL0Jhc2VMYWJlbCc7XG5cbmNvbnN0IHtcblx0ICAgICAgRmxleEl0ZW0sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgdXNlSW5zdGFuY2VJZCxcbiAgICAgIH0gPSB3cC5jb21wb3NlO1xuXG5mdW5jdGlvbiBBZHZhbmNlZEluc3BlY3RvckNvbnRyb2woIHtcblx0Y2hpbGRyZW4sXG5cdHZhbHVlLFxuXHRsYWJlbCxcblx0b25DaGFuZ2VQcmVzZXQgPSBmYWxzZSxcblx0b25DaGFuZ2VNYWNyb3MgPSBmYWxzZSxcbn0gKSB7XG5cblx0Y29uc3QgaW5zdGFuY2VJZCA9IHVzZUluc3RhbmNlSWQoIEZsZXhJdGVtLFxuXHRcdCdqZmItQWR2YW5jZWRJbnNwZWN0b3JDb250cm9sJyApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxCYXNlTGFiZWxcblx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0aHRtbEZvcj17IGluc3RhbmNlSWQgfVxuXHRcdD5cblx0XHRcdHsgZmFsc2UgIT09IG9uQ2hhbmdlUHJlc2V0ICYmIDxQcmVzZXRCdXR0b25cblx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2VQcmVzZXQgfVxuXHRcdFx0Lz4gfVxuXHRcdFx0eyBmYWxzZSAhPT0gb25DaGFuZ2VNYWNyb3MgJiYgPE1hY3Jvc0ZpZWxkc1xuXHRcdFx0XHRvbkNsaWNrPXsgb25DaGFuZ2VNYWNyb3MgfVxuXHRcdFx0Lz4gfVxuXHRcdDwvQmFzZUxhYmVsPlxuXHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuXG5cdFx0ICA/IGNoaWxkcmVuKCB7IGluc3RhbmNlSWQgfSApXG5cdFx0ICA6IGNoaWxkcmVuXG5cdFx0fVxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkSW5zcGVjdG9yQ29udHJvbDsiLCJpbXBvcnQgUHJlc2V0QnV0dG9uIGZyb20gJy4uL3ByZXNldC9jb21wb25lbnRzL1ByZXNldEJ1dHRvbic7XG5pbXBvcnQgTWFjcm9zRmllbGRzIGZyb20gJy4uL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb3NGaWVsZHMnO1xuaW1wb3J0IHsgRmxleCwgRmxleEl0ZW0gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlSW5zdGFuY2VJZCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbmZ1bmN0aW9uIEFkdmFuY2VkTW9kYWxDb250cm9sKCB7XG5cdGNoaWxkcmVuLFxuXHR2YWx1ZSxcblx0bGFiZWwsXG5cdG9uQ2hhbmdlUHJlc2V0ID0gZmFsc2UsXG5cdG9uQ2hhbmdlTWFjcm9zID0gZmFsc2UsXG5cdG1hY3JvV2l0aEN1cnJlbnQgPSBmYWxzZSxcbn0gKSB7XG5cblx0Y29uc3QgaW5zdGFuY2VJZCA9IHVzZUluc3RhbmNlSWQoIEZsZXhJdGVtLCAnamZiLUFkdmFuY2VkTW9kYWxDb250cm9sJyApO1xuXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17ICdjb21wb25lbnRzLWJhc2UtY29udHJvbCcgfT5cblx0XHQ8RmxleFxuXHRcdFx0YWxpZ249eyAnZmxleC1zdGFydCcgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZCcgfVxuXHRcdD5cblx0XHRcdDxGbGV4SXRlbSBpc0Jsb2NrPlxuXHRcdFx0XHQ8RmxleFxuXHRcdFx0XHRcdGFsaWduPXsgJ2NlbnRlcicgfVxuXHRcdFx0XHRcdGp1c3RpZnk9eyAnZmxleC1zdGFydCcgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGxhYmVsXG5cdFx0XHRcdFx0XHRodG1sRm9yPXsgaW5zdGFuY2VJZCB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiIGxhYmVsJyB9XG5cdFx0XHRcdFx0PnsgbGFiZWwgfTwvbGFiZWw+XG5cdFx0XHRcdFx0eyBmYWxzZSAhPT0gb25DaGFuZ2VQcmVzZXQgJiYgPFByZXNldEJ1dHRvblxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uQ2hhbmdlUHJlc2V0IH1cblx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0eyBmYWxzZSAhPT0gb25DaGFuZ2VNYWNyb3MgJiYgPE1hY3Jvc0ZpZWxkc1xuXHRcdFx0XHRcdFx0b25DbGljaz17IG9uQ2hhbmdlTWFjcm9zIH1cblx0XHRcdFx0XHRcdHdpdGhDdXJyZW50PXsgbWFjcm9XaXRoQ3VycmVudCB9XG5cdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHQ8L0ZsZXhJdGVtPlxuXHRcdFx0PEZsZXhJdGVtIGlzQmxvY2sgc3R5bGU9eyB7IGZsZXg6IDMsIG1hcmdpbkxlZnQ6ICd1bnNldCcgfSB9PlxuXHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlblxuXHRcdFx0XHQgID8gY2hpbGRyZW4oIHsgaW5zdGFuY2VJZCB9IClcblx0XHRcdFx0ICA6IGNoaWxkcmVuXG5cdFx0XHRcdH1cblx0XHRcdDwvRmxleEl0ZW0+XG5cdFx0PC9GbGV4PlxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkTW9kYWxDb250cm9sOyIsImZ1bmN0aW9uIEJhc2VIZWxwKCB7XG5cdGNoaWxkcmVuLFxuXHRjbGFzc05hbWUgPSAnJyxcblx0c3R5bGUgPSB7fSxcblx0Li4ucHJvcHNcbn0gKSB7XG5cdHJldHVybiA8cFxuXHRcdGNsYXNzTmFtZT17ICdqZXQtZmItYmFzZS1jb250cm9sX19oZWxwJyArIChcblx0XHRcdGNsYXNzTmFtZSA/IGAgJHsgY2xhc3NOYW1lIH1gIDogJydcblx0XHQpIH1cblx0XHRzdHlsZT17IHtcblx0XHRcdGZvbnRTaXplOiAnMTJweCcsXG5cdFx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxuXHRcdFx0Y29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxuXHRcdFx0bWFyZ2luVG9wOiAnMHB4Jyxcblx0XHRcdC4uLnN0eWxlLFxuXHRcdH0gfVxuXHRcdHsgLi4ucHJvcHMgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvcD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VIZWxwOyIsImNvbnN0IHtcblx0ICAgICAgRmxleCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBCYXNlTGFiZWwoIHsgbGFiZWwsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ICkge1xuXHRyZXR1cm4gPEZsZXhcblx0XHRhbGlnbj17ICdjZW50ZXInIH1cblx0XHRqdXN0aWZ5PXsgJ2ZsZXgtc3RhcnQnIH1cblx0XHRzdHlsZT17IHtcblx0XHRcdG1hcmdpbkJvdHRvbTogJzhweCcsXG5cdFx0fSB9XG5cdD5cblx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi99XG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiIGxhYmVsJyB9XG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQ+XG5cdFx0XHR7IGxhYmVsIH1cblx0XHQ8L2xhYmVsPlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0ZsZXg+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlTGFiZWw7IiwiZnVuY3Rpb24gQ29udGFpbmVyc0xpc3QoIHsgY2hpbGRyZW4sIC4uLnByb3BzIH0gKSB7XG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYiBmbGV4IGZsZXgtZGlyLWNvbHVtbiBnYXAtZGVmYXVsdCcgfVxuXHRcdHN0eWxlPXsge1xuXHRcdFx0bWFyZ2luQm90dG9tOiAnMWVtJyxcblx0XHR9IH1cblx0XHR7IC4uLnByb3BzIH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcnNMaXN0OyIsImZ1bmN0aW9uIERldGFpbHNDb250YWluZXIoIHsgY2hpbGRyZW4gfSApIHtcblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9eyBbXG5cdFx0XHQnamV0LWZiJyxcblx0XHRcdCdmbGV4Jyxcblx0XHRcdCdmbGV4LWRpci1jb2x1bW4nLFxuXHRcdFx0J2NvbnRhaW5lcicsXG5cdFx0XHQnZ2FwLTFlbScsXG5cdFx0XS5qb2luKCAnICcgKSB9XG5cdD5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzQ29udGFpbmVyOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uL3Rvb2xzJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcblxuY29uc3QgU3R5bGVkU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuYDtcblxuZnVuY3Rpb24gR3JvdXBlZFNlbGVjdENvbnRyb2woIHtcblx0aWQsXG5cdGxhYmVsLFxuXHRvbkNoYW5nZSxcblx0b3B0aW9ucyA9IFtdLFxuXHR2YWx1ZSxcbn0gKSB7XG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIGV2ZW50ICkgPT4ge1xuXHRcdG9uQ2hhbmdlKCBldmVudC50YXJnZXQudmFsdWUgKTtcblx0fTtcblxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXG5cblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0cmV0dXJuICFpc0VtcHR5KCBvcHRpb25zICkgJiYgKFxuXHRcdDxTdHlsZWRTZWxlY3Rcblx0XHRcdGlkPXsgaWQgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1zZWxlY3QtY29udHJvbF9faW5wdXRcIlxuXHRcdFx0b25DaGFuZ2U9eyBvbkNoYW5nZVZhbHVlIH1cblx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdD5cblx0XHRcdDxvcHRpb25cblx0XHRcdFx0a2V5PXsgYCR7IGxhYmVsIH0tcGxhY2Vob2xkZXJgIH1cblx0XHRcdFx0dmFsdWU9eyBgYCB9XG5cdFx0XHQ+eyBgLS1gIH08L29wdGlvbj5cblx0XHRcdHsgb3B0aW9ucy5tYXAoICggb3B0R3JvdXAsIGdyb3VwSW5kZXggKSA9PiB7XG5cdFx0XHRcdHJldHVybiAhaXNFbXB0eSggb3B0R3JvdXAudmFsdWVzICkgJiYgPG9wdGdyb3VwXG5cdFx0XHRcdFx0a2V5PXsgYCR7IG9wdEdyb3VwLmxhYmVsIH0tJHsgZ3JvdXBJbmRleCB9YCB9XG5cdFx0XHRcdFx0bGFiZWw9eyBvcHRHcm91cC5sYWJlbCB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IG9wdEdyb3VwLnZhbHVlcy5tYXAoICggb3B0aW9uLCBpbmRleCApID0+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHRcdGtleT17IGAkeyBvcHRpb24udmFsdWUgfS0keyBpbmRleCB9LSR7IGdyb3VwSW5kZXggfWAgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IG9wdGlvbi52YWx1ZSB9XG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXsgb3B0aW9uLmRpc2FibGVkIH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0eyBvcHRpb24ubGFiZWwgfVxuXHRcdFx0XHRcdFx0PC9vcHRpb24+LFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L29wdGdyb3VwPjtcblx0XHRcdH0gKSB9XG5cdFx0PC9TdHlsZWRTZWxlY3Q+XG5cdCk7XG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBlZFNlbGVjdENvbnRyb2w7IiwiZnVuY3Rpb24gSG9yaXpvbnRhbExpbmUoIHByb3BzICkge1xuXHRyZXR1cm4gPGhyIHN0eWxlPXsgeyAuLi5wcm9wcyB9IH0vPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbExpbmU7IiwiZnVuY3Rpb24gSG92ZXJDb250YWluZXIoIHsgaXNIb3ZlciA9IGZhbHNlLCBjaGlsZHJlbiB9ICkge1xuXHRyZXR1cm4gPGRpdlxuXHRcdGNsYXNzTmFtZT17IFtcblx0XHRcdCdqZXQtZmInLFxuXHRcdFx0aXNIb3ZlciA/ICdzaG93JyA6ICdoaWRlJyxcblx0XHRcdCdwLWFic29sdXRlJyxcblx0XHRcdCd3aC0xMDAnLFxuXHRcdFx0J2ZsZXgtY2VudGVyJyxcblx0XHRcdCdnYXAtMDVlbScsXG5cdFx0XS5qb2luKCAnICcgKSB9XG5cdFx0c3R5bGU9eyB7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmY2MnLFxuXHRcdFx0dHJhbnNpdGlvbjogJzAuM3MnLFxuXHRcdH0gfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG92ZXJDb250YWluZXI7IiwiY29uc3Qge1xuXHRcdCAgQnV0dG9uLFxuXHRcdCAgUG9wb3Zlcixcblx0XHQgIFBhbmVsQm9keSxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRcdCAgdXNlU3RhdGUsXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBNYWNyb3NJbnNlcnRlcigge1xuXHRcdFx0XHRcdFx0XHQgY2hpbGRyZW4sXG5cdFx0XHRcdFx0XHRcdCBmaWVsZHMsXG5cdFx0XHRcdFx0XHRcdCBvbkZpZWxkQ2xpY2ssXG5cdFx0XHRcdFx0XHRcdCBjdXN0b21NYWNyb3MsXG5cdFx0XHRcdFx0XHRcdCB6SW5kZXggPSAxMDAwMDAwLFxuXHRcdFx0XHRcdFx0XHQgLi4ucG9wb3ZlclByb3BzXG5cdFx0XHRcdFx0XHQgfSApIHtcblxuXHRjb25zdCBbIHNob3dQb3BvdmVyLCBzZXRQb3BvdmVyU3RhdGUgXSA9IHVzZVN0YXRlKCAoKSA9PiBmYWxzZSApO1xuXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLWluc2VydGVyXCI+XG5cdFx0PEJ1dHRvblxuXHRcdFx0aXNUZXJ0aWFyeVxuXHRcdFx0aXNTbWFsbFxuXHRcdFx0aWNvbj17IHNob3dQb3BvdmVyID8gJ25vLWFsdCcgOiAnYWRtaW4tdG9vbHMnIH1cblx0XHRcdGxhYmVsPXsgJ0luc2VydCBtYWNyb3MnIH1cblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLXRyaWdnZXJcIlxuXHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0c2V0UG9wb3ZlclN0YXRlKCBwcmV2ID0+ICEgcHJldiApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHR7IHNob3dQb3BvdmVyICYmIChcblx0XHRcdDxQb3BvdmVyXG5cdFx0XHRcdHN0eWxlPXsgeyB6SW5kZXggfSB9XG5cdFx0XHRcdHBvc2l0aW9uPXsgJ2JvdHRvbSBsZWZ0JyB9XG5cdFx0XHRcdHsgLi4ucG9wb3ZlclByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0eyBmaWVsZHMubGVuZ3RoICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnRm9ybSBGaWVsZHMnIH0+XG5cdFx0XHRcdFx0eyBmaWVsZHMubWFwKCBmaWVsZCA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnZmllbGRfJyArIGZpZWxkLm5hbWUgfT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZpZWxkQ2xpY2soIGZpZWxkLm5hbWUgKVxuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQ+eyAnJScgKyBmaWVsZC5uYW1lICsgJyUnIH08L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2Pjtcblx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHQ8L1BhbmVsQm9keT4gfVxuXHRcdFx0XHR7IGN1c3RvbU1hY3JvcyAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0N1c3RvbSBNYWNyb3MnIH0+XG5cdFx0XHRcdFx0eyBjdXN0b21NYWNyb3MubWFwKCBtYWNyb3MgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXsgJ21hY3Jvc18nICsgbWFjcm9zIH0+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0b25GaWVsZENsaWNrKCBtYWNyb3MgKVxuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQ+eyAnJScgKyBtYWNyb3MgKyAnJScgfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+O1xuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cdFx0XHQ8L1BvcG92ZXI+XG5cdFx0KSB9XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjcm9zSW5zZXJ0ZXI7IiwiaW1wb3J0IEJhc2VIZWxwIGZyb20gJy4vQmFzZUhlbHAnO1xuXG5jb25zdCB7XG5cdCAgICAgIEZvcm1Ub2dnbGUsXG5cdCAgICAgIEJhc2VDb250cm9sLFxuXHQgICAgICBGbGV4LFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlSW5zdGFuY2VJZCxcbiAgICAgIH0gPSB3cC5jb21wb3NlO1xuXG5mdW5jdGlvbiBUb2dnbGVDb250cm9sKCB7XG5cdGNoZWNrZWQgPSBmYWxzZSxcblx0ZGlzYWJsZWQgPSBmYWxzZSxcblx0b25DaGFuZ2UgPSAoKSA9PiB7fSxcblx0Y2hpbGRyZW4gPSBudWxsLFxuXHRoZWxwID0gbnVsbCxcblx0ZmxleExhYmVsUHJvcHMgPSB7fSxcblx0b3V0c2lkZUxhYmVsID0gbnVsbCxcblx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b20gPSBmYWxzZSxcblx0Li4ucHJvcHNcbn0gKSB7XG5cdGNvbnN0IEhlbHAgPSBoZWxwO1xuXG5cdGNvbnN0IGluc3RhbmNlSWQgPSB1c2VJbnN0YW5jZUlkKCBUb2dnbGVDb250cm9sICk7XG5cdGNvbnN0IGlkICAgICAgICAgPSBgaW5zcGVjdG9yLWpmYi10b2dnbGUtY29udHJvbC0keyBpbnN0YW5jZUlkIH1gO1xuXG5cdHJldHVybiA8QmFzZUNvbnRyb2xcblx0XHRpZD17IGlkIH1cblx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17IF9fbmV4dEhhc05vTWFyZ2luQm90dG9tIH1cblx0PlxuXHRcdDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuXHRcdFx0PEZsZXhcblx0XHRcdFx0Z2FwPXsgMyB9XG5cdFx0XHRcdGFsaWduPVwiZmxleC1zdGFydFwiXG5cdFx0XHRcdGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcblx0XHRcdFx0eyAuLi5mbGV4TGFiZWxQcm9wcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxGb3JtVG9nZ2xlXG5cdFx0XHRcdFx0aWQ9eyBpZCB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGNoZWNrZWQgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBldmVudCApID0+IG9uQ2hhbmdlKCBldmVudC50YXJnZXQuY2hlY2tlZCApIH1cblx0XHRcdFx0XHRkaXNhYmxlZD17IGRpc2FibGVkIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9eyBpZCB9PlxuXHRcdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHR7IG91dHNpZGVMYWJlbCB9XG5cdFx0XHQ8L0ZsZXg+XG5cdFx0XHR7ICdzdHJpbmcnID09PSB0eXBlb2YgSGVscFxuXHRcdFx0ICA/IDxCYXNlSGVscD57IEhlbHAgfTwvQmFzZUhlbHA+XG5cdFx0XHQgIDogSGVscCAmJiA8SGVscC8+IH1cblx0XHQ8L0ZsZXg+XG5cdDwvQmFzZUNvbnRyb2w+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVDb250cm9sOyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGV4dCgge30gKTsiLCJpbXBvcnQgRHluYW1pY0l0ZW1Cb2R5IGZyb20gJy4vRHluYW1pY0l0ZW1Cb2R5JztcbmltcG9ydCBCbG9ja1ZhbHVlSXRlbUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9ibG9jay52YWx1ZS5pdGVtLmNvbnRleHQnO1xuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gJy4uLy4uL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsJztcbmltcG9ydCBodW1hblJlYWRhYmxlUHJlc2V0IGZyb20gJy4uLy4uL3ByZXNldC9oZWxwZXJzL2h1bWFuUmVhZGFibGVQcmVzZXQnO1xuaW1wb3J0IEh1bWFuUmVhZGFibGVDb25kaXRpb25zXG5cdGZyb20gJy4uLy4uL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9IdW1hblJlYWRhYmxlQ29uZGl0aW9ucyc7XG5pbXBvcnQgSG92ZXJDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ib3ZlckNvbnRhaW5lcic7XG5pbXBvcnQgRGV0YWlsc0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGFpbHNDb250YWluZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIEJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gRHluYW1pY0l0ZW0oIHsgY3VycmVudCwgdXBkYXRlLCBpc09wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsIH0gKSB7XG5cdGNvbnN0IHVwZGF0ZUN1cnJlbnQgPSBzZXR0aW5ncyA9PiB7XG5cdFx0dXBkYXRlKCB2YWx1ZSA9PiB7XG5cdFx0XHRjb25zdCBncm91cHMgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdmFsdWUuZ3JvdXBzICkgKTtcblxuXHRcdFx0Zm9yICggY29uc3QgZ3JvdXBJbmRleCBpbiBncm91cHMgKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhZ3JvdXBzLmhhc093blByb3BlcnR5KCBncm91cEluZGV4ICkgfHxcblx0XHRcdFx0XHRjdXJyZW50LmlkICE9PSBncm91cHNbIGdyb3VwSW5kZXggXS5pZFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRncm91cHNbIGdyb3VwSW5kZXggXSA9IHtcblx0XHRcdFx0XHQuLi5ncm91cHNbIGdyb3VwSW5kZXggXSxcblx0XHRcdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7IGdyb3VwcyB9O1xuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCBkZWxldGVDdXJyZW50ID0gKCkgPT4ge1xuXHRcdHVwZGF0ZSggdmFsdWUgPT4ge1xuXHRcdFx0Y29uc3QgZ3JvdXBzID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHZhbHVlLmdyb3VwcyApICk7XG5cblx0XHRcdHJldHVybiB7IGdyb3VwczogZ3JvdXBzLmZpbHRlciggKCB7IGlkIH0gKSA9PiBpZCAhPT0gY3VycmVudC5pZCApIH07XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIGlzSG92ZXIsIHNldEhvdmVyIF0gICAgICAgPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRjb25zdCBpc0VtcHR5ID0gMSA+PSBPYmplY3Qua2V5cyggY3VycmVudCApPy5sZW5ndGg7XG5cblx0cmV0dXJuIDxCbG9ja1ZhbHVlSXRlbUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0dXBkYXRlOiB1cGRhdGVDdXJyZW50LFxuXHRcdGN1cnJlbnQsXG5cdH0gfT5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmIgcC1yZWxhdGl2ZVwiXG5cdFx0XHRvbk1vdXNlT3Zlcj17ICgpID0+IHNldEhvdmVyKCB0cnVlICkgfVxuXHRcdFx0b25Gb2N1cz17ICgpID0+IHNldEhvdmVyKCB0cnVlICkgfVxuXHRcdFx0b25Nb3VzZU91dD17ICgpID0+IHNldEhvdmVyKCBmYWxzZSApIH1cblx0XHRcdG9uQmx1cj17ICgpID0+IHNldEhvdmVyKCBmYWxzZSApIH1cblx0XHQ+XG5cdFx0XHQ8SG92ZXJDb250YWluZXIgaXNIb3Zlcj17IGlzSG92ZXIgfT5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdGljb249eyBzaG93TW9kYWwgPyAnbm8tYWx0JyA6ICdlZGl0JyB9XG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dNb2RhbCggcHJldiA9PiAhcHJldiApIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdFZGl0JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0aWNvbj17ICd0cmFzaCcgfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyBkZWxldGVDdXJyZW50IH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdEZWxldGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9Ib3ZlckNvbnRhaW5lcj5cblx0XHRcdDxEZXRhaWxzQ29udGFpbmVyPlxuXHRcdFx0XHR7IGlzRW1wdHkgPyA8ZGl2XG5cdFx0XHRcdFx0ZGF0YS10aXRsZT17IF9fKFxuXHRcdFx0XHRcdFx0J1RoaXMgdmFsdWUgaXRlbSBpcyBlbXB0eScsXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdC8+IDogPD5cblx0XHRcdFx0XHQgIDxzcGFuXG5cdFx0XHRcdFx0XHQgIGRhdGEtdGl0bGU9eyBfXyggJ1NldCcsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJzonIH1cblx0XHRcdFx0XHRcdCAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7XG5cdFx0XHRcdFx0XHRcdCAgX19odG1sOiBodW1hblJlYWRhYmxlUHJlc2V0KCBjdXJyZW50LnRvX3NldCApLFxuXHRcdFx0XHRcdFx0ICB9IH1cblx0XHRcdFx0XHQgIC8+XG5cdFx0XHRcdFx0ICA8SHVtYW5SZWFkYWJsZUNvbmRpdGlvbnNcblx0XHRcdFx0XHRcdCAgY29uZGl0aW9ucz17IGN1cnJlbnQ/LmNvbmRpdGlvbnMgfVxuXHRcdFx0XHRcdCAgLz5cblx0XHRcdFx0ICA8Lz4gfVxuXHRcdFx0PC9EZXRhaWxzQ29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXHRcdHsgKFxuXHRcdFx0c2hvd01vZGFsIHx8IGlzT3Blbk1vZGFsID09PSBjdXJyZW50LmlkXG5cdFx0KSAmJiA8QWN0aW9uTW9kYWxcblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHtcblx0XHRcdFx0c2V0U2hvd01vZGFsKCBmYWxzZSApO1xuXHRcdFx0XHRzZXRPcGVuTW9kYWwoIGZhbHNlICk7XG5cdFx0XHR9IH1cblx0XHRcdHRpdGxlPXsgX18oICdFZGl0IER5bmFtaWMgVmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0PlxuXHRcdFx0PER5bmFtaWNJdGVtQm9keS8+XG5cdFx0PC9BY3Rpb25Nb2RhbD4gfVxuXHQ8L0Jsb2NrVmFsdWVJdGVtQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNJdGVtOyIsImltcG9ydCBCbG9ja1ZhbHVlSXRlbUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9ibG9jay52YWx1ZS5pdGVtLmNvbnRleHQnO1xuaW1wb3J0IFJlcGVhdGVyIGZyb20gJy4uLy4uL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXInO1xuaW1wb3J0IFJlcGVhdGVyQWRkTmV3IGZyb20gJy4uLy4uL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuYWRkLm5ldyc7XG5pbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNlSGVscCc7XG5pbXBvcnQgUmVwZWF0ZXJTdGF0ZSBmcm9tICcuLi8uLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLnN0YXRlJztcbmltcG9ydCB1c2VPblVwZGF0ZU1vZGFsIGZyb20gJy4uLy4uL2FjdGlvbi1tb2RhbC9ob29rcy91c2VPblVwZGF0ZU1vZGFsJztcbmltcG9ydCBQcmVzZXRCdXR0b24gZnJvbSAnLi4vLi4vcHJlc2V0L2NvbXBvbmVudHMvUHJlc2V0QnV0dG9uJztcbmltcG9ydCBNYWNyb3NGaWVsZHMgZnJvbSAnLi4vLi4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0ZpZWxkcyc7XG5pbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuLi8uLi9ibG9jay1jb25kaXRpb25zL2NvbXBvbmVudHMvQ29uZGl0aW9uSXRlbSc7XG5pbXBvcnQgQ2xpZW50U2lkZU1hY3JvcyBmcm9tICcuLi8uLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvQ2xpZW50U2lkZU1hY3Jvcyc7XG5pbXBvcnQgQ29uZGl0aW9uc1JlcGVhdGVyQ29udGV4dFByb3ZpZGVyXG5cdGZyb20gJy4uLy4uL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9Db25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuXHQgICAgICB1c2VDb250ZXh0LFxuXHQgICAgICBGcmFnbWVudCxcblx0ICAgICAgdXNlRWZmZWN0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG5cdCAgICAgIFRleHRhcmVhQ29udHJvbCxcblx0ICAgICAgRmxleEl0ZW0sXG5cdCAgICAgIEZsZXgsXG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgaGVscCA9IFtcblx0e1xuXHRcdGtleTogJ2NvbW1hcycsXG5cdFx0cmVuZGVyOiAoKSA9PiA8bGk+XG5cdFx0XHR7IF9fKFxuXHRcdFx0XHRgSWYgdGhpcyBmaWVsZCBzdXBwb3J0cyBtdWx0aXBsZSB2YWx1ZXMsIHlvdSBjYW4gc2VwYXJhdGUgdGhlbSB3aXRoIGNvbW1hc2AsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgfVxuXHRcdDwvbGk+LFxuXHR9LFxuXTtcblxuY29uc3Qgb3B0aW9ucyA9IFtcblx0e1xuXHRcdHZhbHVlOiAnb25fY2hhbmdlJyxcblx0XHRsYWJlbDogX18oXG5cdFx0XHQnT24gY2hhbmdlIGNvbmRpdGlvbnMgcmVzdWx0Jyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpLFxuXHRcdGhlbHA6IF9fKFxuXHRcdFx0YFRoZSB2YWx1ZSB3aWxsIGJlIGFwcGxpZWQgaWYgY29uZGl0aW9uIGNoZWNrLXVwcyByZXR1cm4gYSByZXN1bHQgZGlmZmVyZW50IGZyb20gdGhlIGZpcnN0IGNoZWNrLXVwJ3MgY2FjaGVkIHZhbHVlYCxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpLFxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdvbmNlJyxcblx0XHRsYWJlbDogX18oICdPbmNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0aGVscDogX18oXG5cdFx0XHRgVGhlIHZhbHVlIHdpbGwgYmUgYXBwbGllZCBvbmx5IHRoZSBmaXJzdCB0aW1lIHRoZSBjb25kaXRpb24gaXMgbWF0Y2hlZGAsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSxcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAnYWx3YXlzJyxcblx0XHRsYWJlbDogX18oICdBbHdheXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRoZWxwOiBfXyhcblx0XHRcdGBUaGUgdmFsdWUgd2lsbCBiZSBhcHBsaWVkIGV2ZXJ5IHRpbWUgdGhlIGNvbmRpdGlvbiBpcyBtYXRjaGVkYCxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpLFxuXHR9LFxuXTtcblxuY29uc3QgZ2V0SGVscCA9IGZyZXF1ZW5jeSA9PiB7XG5cdGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMuZmluZCggY3VycmVudCA9PiB7XG5cdFx0cmV0dXJuIGN1cnJlbnQudmFsdWUgPT09IChcblx0XHRcdGZyZXF1ZW5jeSA/PyAnb25fY2hhbmdlJ1xuXHRcdCk7XG5cdH0gKTtcblxuXHRyZXR1cm4gb3B0aW9uLmhlbHA7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gRHluYW1pY0l0ZW1Cb2R5KCkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgY3VycmVudDogY3VycmVudFZhbHVlLFxuXHRcdCAgICAgIHVwZGF0ZSxcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIEJsb2NrVmFsdWVJdGVtQ29udGV4dCApO1xuXG5cdGNvbnN0IFsgY3VycmVudCwgc2V0Q3VycmVudCBdID0gdXNlU3RhdGUoICgpID0+IGN1cnJlbnRWYWx1ZSApO1xuXG5cdGNvbnN0IFsgY3VycmVudEhlbHAsIHNldEN1cnJlbnRIZWxwIF0gPSB1c2VTdGF0ZShcblx0XHQoKSA9PiBnZXRIZWxwKCBjdXJyZW50LmZyZXF1ZW5jeSApLFxuXHQpO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNldEN1cnJlbnRIZWxwKCBnZXRIZWxwKCBjdXJyZW50LmZyZXF1ZW5jeSApICk7XG5cdH0sIFsgY3VycmVudC5mcmVxdWVuY3kgXSApO1xuXG5cdGNvbnN0IHVwZGF0ZUN1cnJlbnQgPSBzZXR0aW5ncyA9PiB7XG5cdFx0c2V0Q3VycmVudCggcHJldiA9PiAoXG5cdFx0XHR7XG5cdFx0XHRcdC4uLnByZXYsXG5cdFx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0fVxuXHRcdCkgKTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVDb25kaXRpb25zID0gY29uZGl0aW9ucyA9PiB7XG5cdFx0dXBkYXRlQ3VycmVudCgge1xuXHRcdFx0Y29uZGl0aW9uczogJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNvbmRpdGlvbnNcblx0XHRcdCAgICAgICAgICAgID8gY29uZGl0aW9ucyggY3VycmVudC5jb25kaXRpb25zID8/IFtdIClcblx0XHRcdCAgICAgICAgICAgIDogY29uZGl0aW9ucyxcblx0XHR9ICk7XG5cdH07XG5cblx0dXNlT25VcGRhdGVNb2RhbCggKCkgPT4gdXBkYXRlKCBjdXJyZW50ICkgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8RmxleCBhbGlnbj17ICdmbGV4LXN0YXJ0JyB9PlxuXHRcdFx0PEZsZXhJdGVtIGlzQmxvY2s+XG5cdFx0XHRcdDxGbGV4XG5cdFx0XHRcdFx0YWxpZ249eyAnY2VudGVyJyB9XG5cdFx0XHRcdFx0anVzdGlmeT17ICdmbGV4LXN0YXJ0JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZiIGxhYmVsJyB9PlxuXHRcdFx0XHRcdFx0eyBfXyggJ1ZhbHVlIHRvIHNldCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PFByZXNldEJ1dHRvblxuXHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50LnRvX3NldCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbCA9PiB1cGRhdGVDdXJyZW50KFxuXHRcdFx0XHRcdFx0XHR7IHRvX3NldDogdmFsIH0sXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxDbGllbnRTaWRlTWFjcm9zIHdpdGhUaGlzPlxuXHRcdFx0XHRcdFx0PE1hY3Jvc0ZpZWxkc1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgbmFtZSA9PiB1cGRhdGVDdXJyZW50KCB7XG5cdFx0XHRcdFx0XHRcdFx0dG9fc2V0OiBgJHsgY3VycmVudC50b19zZXQgPz8gJycgfSR7IG5hbWUgfWAsXG5cdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQ2xpZW50U2lkZU1hY3Jvcz5cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHQ8QmFzZUhlbHA+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0eyBoZWxwLm1hcCggaGVscEl0ZW0gPT4gPEZyYWdtZW50IGtleT17IGhlbHBJdGVtLmtleSB9PlxuXHRcdFx0XHRcdFx0XHR7IGhlbHBJdGVtLnJlbmRlcigpIH1cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+ICkgfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvQmFzZUhlbHA+XG5cdFx0XHQ8L0ZsZXhJdGVtPlxuXHRcdFx0PEZsZXhJdGVtIGlzQmxvY2sgc3R5bGU9eyB7IGZsZXg6IDMsIG1hcmdpbkxlZnQ6ICd1bnNldCcgfSB9PlxuXHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1jb250cm9sLWNsZWFyJyB9XG5cdFx0XHRcdFx0aGlkZUxhYmVsRnJvbVZpc2lvblxuXHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudC50b19zZXQgPz8gJycgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHVwZGF0ZUN1cnJlbnQoIHsgdG9fc2V0OiB2YWwgfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmxleEl0ZW0+XG5cdFx0PC9GbGV4PlxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRvcHRpb25zPXsgb3B0aW9ucyB9XG5cdFx0XHR2YWx1ZT17IGN1cnJlbnQuZnJlcXVlbmN5ID8/ICdvbl9jaGFuZ2UnIH1cblx0XHRcdGxhYmVsPXsgX18oICdBcHBseSB0eXBlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0bGFiZWxQb3NpdGlvbj17ICdzaWRlJyB9XG5cdFx0XHRvbkNoYW5nZT17IGZyZXF1ZW5jeSA9PiB1cGRhdGVDdXJyZW50KCB7IGZyZXF1ZW5jeSB9ICkgfVxuXHRcdFx0aGVscD17IGN1cnJlbnRIZWxwIH1cblx0XHQvPlxuXHRcdDxSZXBlYXRlclN0YXRlIHN0YXRlPXsgdXBkYXRlQ29uZGl0aW9ucyB9PlxuXHRcdFx0PENvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlcj5cblx0XHRcdFx0PFJlcGVhdGVyIGl0ZW1zPXsgY3VycmVudC5jb25kaXRpb25zID8/IFtdIH0+XG5cdFx0XHRcdFx0PENvbmRpdGlvbkl0ZW0vPlxuXHRcdFx0XHQ8L1JlcGVhdGVyPlxuXHRcdFx0PC9Db25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXI+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZmIgZmxleCBqYy1zcGFjZS1iZXR3ZWVuIGFpLWNlbnRlcicgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8UmVwZWF0ZXJBZGROZXc+XG5cdFx0XHRcdFx0eyBfXyggJ0FkZCBOZXcgQ29uZGl0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L1JlcGVhdGVyQWRkTmV3PlxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZmIgbS11bnNldCBjbGVhci1jb250cm9sJyB9XG5cdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdCdTZXQgdmFsdWUgb25seSBpZiBmaWVsZCBpcyBlbXB0eScsXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGN1cnJlbnQuc2V0X29uX2VtcHR5ID8/IGZhbHNlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbCA9PiB1cGRhdGVDdXJyZW50KFxuXHRcdFx0XHRcdFx0eyBzZXRfb25fZW1wdHk6IHZhbCB9LFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9SZXBlYXRlclN0YXRlPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNJdGVtQm9keTsiLCJpbXBvcnQgRHluYW1pY0l0ZW0gZnJvbSAnLi9EeW5hbWljSXRlbSc7XG5pbXBvcnQgVG9vbHMgZnJvbSAnLi4vLi4vdG9vbHMnO1xuaW1wb3J0IEJhc2VIZWxwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFzZUhlbHAnO1xuaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCB1c2VVbmlxS2V5IGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VVbmlxS2V5JztcbmltcG9ydCB1c2VJc0hhc0F0dHJpYnV0ZSBmcm9tICcuLi8uLi9ob29rcy91c2VJc0hhc0F0dHJpYnV0ZSc7XG5pbXBvcnQgQ29udGFpbmVyc0xpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJzTGlzdCc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblxuXHQgICAgICBCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIER5bmFtaWNWYWx1ZXMoKSB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgdW5pcUtleSA9IHVzZVVuaXFLZXkoKTtcblx0Y29uc3QgdmFsdWUgICA9IGF0dHJpYnV0ZXMudmFsdWUgPz8ge307XG5cdGNvbnN0IGdyb3VwcyAgPSB2YWx1ZS5ncm91cHMgPz8gW107XG5cblx0Y29uc3QgWyBvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0aWYgKCAhdXNlSXNIYXNBdHRyaWJ1dGUoICd2YWx1ZScgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IG9yR3JvdXBzID0gZ3JvdXBzLmZpbHRlcihcblx0XHQvLyBFeGNsdWRlIGZpcnN0IGl0ZW1cblx0XHQoIGMsIGluZGV4ICkgPT4gMCAhPT0gaW5kZXgsXG5cdCk7XG5cblx0Y29uc3QgdXBkYXRlVmFsdWUgPSBzZXR0aW5ncyA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Li4uYXR0cmlidXRlcyxcblx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdC4uLnZhbHVlLFxuXHRcdFx0XHQuLi4oXG5cdFx0XHRcdFx0J2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHNldHRpbmdzXG5cdFx0XHRcdFx0PyBzZXR0aW5ncyggdmFsdWUgKVxuXHRcdFx0XHRcdDogc2V0dGluZ3Ncblx0XHRcdFx0KSxcblx0XHRcdH0sXG5cdFx0fSApO1xuXHR9O1xuXG5cdHJldHVybiA8PlxuXHRcdDxCYXNlSGVscD5cblx0XHRcdHsgX18oXG5cdFx0XHRcdGBPciB1c2UgYSBjb25kaXRpb24tZGVwZW5kZW50IHZhbHVlYCxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSArICcgJyB9XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge30gfVxuXHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdGBGb3JtZXIgU2V0IFZhbHVlIGZ1bmN0aW9uYWxpdHksIG1vdmVkIGZyb20gdGhlIENvbmRpdGlvbmFsIEJsb2NrYCxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgfVxuXHRcdFx0XHRzaG93VG9vbHRpcFxuXHRcdFx0Pig/KTwvQnV0dG9uPlxuXHRcdDwvQmFzZUhlbHA+XG5cdFx0eyBCb29sZWFuKCBncm91cHMubGVuZ3RoICkgPyA8Q29udGFpbmVyc0xpc3Q+XG5cdFx0XHQ8RHluYW1pY0l0ZW1cblx0XHRcdFx0a2V5PXsgdW5pcUtleSggZ3JvdXBzWyAwIF0uaWQgKSB9XG5cdFx0XHRcdGN1cnJlbnQ9eyBncm91cHNbIDAgXSB9XG5cdFx0XHRcdHVwZGF0ZT17IHVwZGF0ZVZhbHVlIH1cblx0XHRcdFx0aXNPcGVuTW9kYWw9eyBvcGVuTW9kYWwgfVxuXHRcdFx0XHRzZXRPcGVuTW9kYWw9eyBzZXRPcGVuTW9kYWwgfVxuXHRcdFx0Lz5cblx0XHRcdHsgQm9vbGVhbiggb3JHcm91cHMubGVuZ3RoICkgJiYgb3JHcm91cHMubWFwKCBjdXJyZW50ID0+IDw+XG5cdFx0XHRcdDxiPnsgX18oICdPUicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L2I+XG5cdFx0XHRcdDxEeW5hbWljSXRlbVxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoIGN1cnJlbnQuaWQgKSB9XG5cdFx0XHRcdFx0Y3VycmVudD17IGN1cnJlbnQgfVxuXHRcdFx0XHRcdHVwZGF0ZT17IHVwZGF0ZVZhbHVlIH1cblx0XHRcdFx0XHRpc09wZW5Nb2RhbD17IG9wZW5Nb2RhbCB9XG5cdFx0XHRcdFx0c2V0T3Blbk1vZGFsPXsgc2V0T3Blbk1vZGFsIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvPiApIH1cblx0XHQ8L0NvbnRhaW5lcnNMaXN0PiA6IG51bGwgfVxuXHRcdDxCdXR0b25cblx0XHRcdGljb249eyAncGx1cy1hbHQyJyB9XG5cdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSBUb29scy5nZXRSYW5kb21JRCgpO1xuXG5cdFx0XHRcdHVwZGF0ZVZhbHVlKCB7XG5cdFx0XHRcdFx0Z3JvdXBzOiBbXG5cdFx0XHRcdFx0XHQuLi5ncm91cHMsXG5cdFx0XHRcdFx0XHR7IGlkLCBjb25kaXRpb25zOiBbIHsgX192aXNpYmxlOiB0cnVlIH0gXSB9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRzZXRPcGVuTW9kYWwoIGlkICk7XG5cdFx0XHR9IH1cblx0XHQ+XG5cdFx0XHR7IF9fKCAnQWRkIER5bmFtaWMgVmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0PC9CdXR0b24+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1ZhbHVlczsiLCJjb25zdCB7IHVzZVNlbGVjdCB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gdXNlRGVmYXVsdEV2ZW50cygpIHtcblx0Y29uc3QgZXZlbnRzT2JqZWN0cyA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL2V2ZW50cycgKS5nZXRBbHdheXNUeXBlcygpICk7XG5cdGNvbnN0IGV2ZW50cyAgICAgICAgPSBbXTtcblxuXHRmb3IgKCBjb25zdCB7IHZhbHVlIH0gb2YgZXZlbnRzT2JqZWN0cyApIHtcblx0XHRldmVudHMucHVzaCggdmFsdWUgKTtcblx0fVxuXG5cdHJldHVybiBbIC4uLm5ldyBTZXQoIGV2ZW50cyApIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURlZmF1bHRFdmVudHM7IiwiY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gdXNlRHluYW1pY0V2ZW50cygpIHtcblx0cmV0dXJuIHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL2V2ZW50cycgKS5nZXREeW5hbWljVHlwZXMoKS5tYXAoXG5cdFx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlLFxuXHRcdCksXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUR5bmFtaWNFdmVudHM7IiwiaW1wb3J0IHVzZURlZmF1bHRFdmVudHMgZnJvbSAnLi91c2VEZWZhdWx0RXZlbnRzJztcbmltcG9ydCB1c2VFdmVudHNGcm9tR2F0ZXdheXMgZnJvbSAnLi91c2VFdmVudHNGcm9tR2F0ZXdheXMnO1xuaW1wb3J0IHVzZUV2ZW50c0Zyb21BY3Rpb25zIGZyb20gJy4vdXNlRXZlbnRzRnJvbUFjdGlvbnMnO1xuaW1wb3J0IHVzZUR5bmFtaWNFdmVudHMgZnJvbSAnLi91c2VEeW5hbWljRXZlbnRzJztcblxuY29uc3QgeyB1c2VTZWxlY3QgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIHVzZUV2ZW50cyggYWN0aW9uICkge1xuXHRjb25zdCBsaXN0ID0gW1xuXHRcdC4uLnVzZURlZmF1bHRFdmVudHMoIGFjdGlvbiApLFxuXHRcdC4uLnVzZUV2ZW50c0Zyb21HYXRld2F5cyggYWN0aW9uICksXG5cdFx0Li4udXNlRXZlbnRzRnJvbUFjdGlvbnMoIGFjdGlvbiApLFxuXHRcdC4uLnVzZUR5bmFtaWNFdmVudHMoIGFjdGlvbiApLFxuXHRdO1xuXG5cdHJldHVybiB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2pldC1mb3Jtcy9ldmVudHMnICkuZmlsdGVyTGlzdChcblx0XHRcdGFjdGlvbi50eXBlLFxuXHRcdFx0bGlzdCxcblx0XHQpLFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VFdmVudHM7IiwiaW1wb3J0IHVzZVNlbGVjdFBvc3RNZXRhIGZyb20gJy4uLy4uL2hvb2tzL3VzZVNlbGVjdFBvc3RNZXRhJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gdXNlRXZlbnRzRnJvbUFjdGlvbnMoIHsgaW5kZXggfSApIHtcblx0Y29uc3QgYWN0aW9uc01ldGEgPSB1c2VTZWxlY3RQb3N0TWV0YSggJ19qZl9hY3Rpb25zJyApO1xuXHRjb25zdCBhY3Rpb25zTWFwICA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL2FjdGlvbnMnICkuZ2V0QWN0aW9uc01hcCgpLFxuXHRcdFtdLFxuXHQpO1xuXG5cdGFjdGlvbnNNZXRhLnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRjb25zdCBldmVudHMgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBhY3Rpb24gb2YgYWN0aW9uc01ldGEgKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSBhY3Rpb25zTWFwPy5bIGFjdGlvbi50eXBlIF0/LnByb3ZpZGVFdmVudHM7XG5cblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYmFjayApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgWyBhY3Rpb24udHlwZSBdOiBjdXJyZW50ID0ge30gfSA9IGFjdGlvbi5zZXR0aW5ncztcblxuXHRcdGV2ZW50cy5wdXNoKCAuLi5jYWxsYmFjayggY3VycmVudCApICk7XG5cdH1cblxuXHRyZXR1cm4gWyAuLi5uZXcgU2V0KCBldmVudHMgKSBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VFdmVudHNGcm9tQWN0aW9uczsiLCJpbXBvcnQgdXNlU2VsZWN0UG9zdE1ldGEgZnJvbSAnLi4vLi4vaG9va3MvdXNlU2VsZWN0UG9zdE1ldGEnO1xuXG5jb25zdCB7IHVzZVNlbGVjdCB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gdXNlRXZlbnRzRnJvbUdhdGV3YXlzKCkge1xuXHRjb25zdCBnYXRld2F5cyAgICAgICAgICA9IHVzZVNlbGVjdFBvc3RNZXRhKCAnX2pmX2dhdGV3YXlzJyApO1xuXHRjb25zdCB7IHNjZW5hcmlvID0ge30gfSA9IGdhdGV3YXlzWyBnYXRld2F5cz8uZ2F0ZXdheSBdID8/IHt9O1xuXG5cdHJldHVybiB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHtcblx0XHRcdGNvbnN0IGV2ZW50c09iamVjdHMgPSAoXG5cdFx0XHRcdHNlbGVjdCggJ2pldC1mb3Jtcy9ldmVudHMnICkuZ2V0R2F0ZXdheVR5cGVzKClcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IGV2ZW50cyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBldmVudCBvZiBldmVudHNPYmplY3RzICkge1xuXHRcdFx0XHRjb25zdCBjb3JyZWN0R2F0ZXdheSAgPSBldmVudC5nYXRld2F5XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgID8gZXZlbnQuZ2F0ZXdheSA9PT0gZ2F0ZXdheXMuZ2F0ZXdheVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWU7XG5cdFx0XHRcdGNvbnN0IGNvcnJlY3RTY2VuYXJpbyA9IGV2ZW50LnNjZW5hcmlvXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgID8gZXZlbnQuc2NlbmFyaW8gPT09IHNjZW5hcmlvPy5pZFxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWU7XG5cblx0XHRcdFx0aWYgKCBjb3JyZWN0R2F0ZXdheSAmJiBjb3JyZWN0U2NlbmFyaW8gKSB7XG5cdFx0XHRcdFx0ZXZlbnRzLnB1c2goIGV2ZW50LnZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsgLi4ubmV3IFNldCggZXZlbnRzICkgXTtcblx0XHR9LFxuXHRcdFsgZ2F0ZXdheXMuZ2F0ZXdheSwgc2NlbmFyaW8/LmlkIF0sXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUV2ZW50c0Zyb21HYXRld2F5czsiLCJpbXBvcnQgdXNlRXZlbnRzIGZyb20gJy4vdXNlRXZlbnRzJztcblxuY29uc3QgeyB1c2VTZWxlY3QgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3RFdmVudHMoKSB7XG5cdGNvbnN0IGN1cnJlbnRBY3Rpb24gPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2pldC1mb3Jtcy9hY3Rpb25zJyApLmdldEN1cnJlbnRBY3Rpb24oKSxcblx0KTtcblxuXHRyZXR1cm4gdXNlRXZlbnRzKCBjdXJyZW50QWN0aW9uICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RFdmVudHM7IiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cmVnaXN0ZXIoIGl0ZW1zICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMucmVnaXN0ZXIsXG5cdFx0XHRpdGVtcyxcblx0XHR9O1xuXHR9LFxuXHRsb2NrQWN0aW9ucygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLmxvY2tBY3Rpb25zLFxuXHRcdH07XG5cdH0sXG5cdHVuUmVnaXN0ZXIoIHR5cGVzICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMudW5SZWdpc3Rlcixcblx0XHRcdHR5cGVzLFxuXHRcdH07XG5cdH0sXG5cdGNsZWFyRHluYW1pY0V2ZW50cygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLmNsZWFyRHluYW1pY0V2ZW50cyxcblx0XHR9O1xuXHR9LFxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyOiAnUkVHSVNURVInLFxuXHR1blJlZ2lzdGVyOiAnVU5SRUdJU1RFUicsXG5cdGxvY2tBY3Rpb25zOiAnTE9DS19BQ1RJT05TJyxcblx0Y2xlYXJEeW5hbWljRXZlbnRzOiAnQ0xFQVJfRFlOQU1JQ19FVkVOVFMnLFxufTtcblxuXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdFsgY29uc3RhbnRzLnJlZ2lzdGVyIF0oIHN0YXRlLCBhY3Rpb24gKSB7XG5cdFx0Y29uc3QgeyB0eXBlcyB9ID0gc3RhdGU7XG5cblx0XHRmb3IgKCBjb25zdCBpdGVtIG9mIGFjdGlvbi5pdGVtcyApIHtcblx0XHRcdGl0ZW0udGl0bGUgPSBpdGVtLmxhYmVsO1xuXG5cdFx0XHRjb25zdCBpc3NldEluZGV4ID0gc2VsZWN0b3JzLmdldFR5cGVJbmRleCggc3RhdGUsIGl0ZW0udmFsdWUgKTtcblxuXHRcdFx0Ly8gaXMgbmV3IGV2ZW50IHR5cGVcblx0XHRcdGlmICggLTEgPT09IGlzc2V0SW5kZXggKSB7XG5cdFx0XHRcdHR5cGVzLnB1c2goIHsgLi4uaXRlbSB9ICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dHlwZXNbIGlzc2V0SW5kZXggXSA9IHsgLi4uaXRlbSB9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdHR5cGVzLFxuXHRcdH07XG5cdH0sXG5cdFsgY29uc3RhbnRzLmxvY2tBY3Rpb25zIF0oIHN0YXRlICkge1xuXHRcdGZvciAoIGNvbnN0IHsgaWQsIHNlbGY6IGFjdGlvblNlbGYgfSBvZiB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzICkge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHdpbmRvd1sgYWN0aW9uU2VsZiBdID8/IGZhbHNlO1xuXG5cdFx0XHRpZiAoIGZhbHNlID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHQgICAgICBfX3Vuc3VwcG9ydGVkX2V2ZW50czogdW5TdXAsXG5cdFx0XHRcdCAgICAgIF9fc3VwcG9ydGVkX2V2ZW50czogc3VwLFxuXHRcdFx0ICAgICAgfSA9IGN1cnJlbnQ7XG5cblx0XHRcdGNvbnN0IGFjdGlvbiA9IHtcblx0XHRcdFx0dW5zdXBwb3J0ZWQ6IHN0YXRlLnR5cGVzLmZpbHRlcihcblx0XHRcdFx0XHQoIHsgc2VsZiB9ICkgPT4gdW5TdXAuaW5jbHVkZXMoIHNlbGYgKSApLlxuXHRcdFx0XHRcdG1hcCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApLFxuXHRcdFx0XHRzdXBwb3J0ZWQ6IHN0YXRlLnR5cGVzLmZpbHRlcihcblx0XHRcdFx0XHQoIHsgc2VsZiB9ICkgPT4gc3VwLmluY2x1ZGVzKCBzZWxmICkgKS5cblx0XHRcdFx0XHRtYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKSxcblx0XHRcdH07XG5cblx0XHRcdGlmICggIWFjdGlvbi5zdXBwb3J0ZWQubGVuZ3RoICYmICFhY3Rpb24udW5zdXBwb3J0ZWQubGVuZ3RoICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGUubG9ja2VkQWN0aW9uc1sgaWQgXSA9IGFjdGlvbjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdFsgY29uc3RhbnRzLnVuUmVnaXN0ZXIgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRjb25zdCB7IHR5cGVzIH0gPSBhY3Rpb247XG5cblx0XHRzdGF0ZS50eXBlcyA9IHN0YXRlLnR5cGVzLmZpbHRlcihcblx0XHRcdCggeyB2YWx1ZSB9ICkgPT4gIXR5cGVzLmluY2x1ZGVzKCB2YWx1ZSApLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdFsgY29uc3RhbnRzLmNsZWFyRHluYW1pY0V2ZW50cyBdKCBzdGF0ZSApIHtcblx0XHRzdGF0ZS50eXBlcyA9IHN0YXRlLnR5cGVzLmZpbHRlcihcblx0XHRcdCggeyBpc0R5bmFtaWMgPSBmYWxzZSB9ICkgPT4gIWlzRHluYW1pYyxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxufTsiLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5jb25zdCB7IGNyZWF0ZVJlZHV4U3RvcmUgfSA9IHdwLmRhdGE7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHV4U3RvcmUoICdqZXQtZm9ybXMvZXZlbnRzJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnMsXG59ICk7XG4iLCJpbXBvcnQgZGlzcGF0Y2hlcnMgZnJvbSAnLi9kaXNwYXRjaGVycyc7XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XG5cdHR5cGVzOiBbXSxcblx0bGFiZWxzOiB7fSxcblx0bG9ja2VkQWN0aW9uczoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xuXHRjb25zdCBjYWxsYmFjayA9IGRpc3BhdGNoZXJzWyBhY3Rpb24/LnR5cGUgXTtcblxuXHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBjYWxsYmFjayggc3RhdGUsIGFjdGlvbiApO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufSIsImNvbnN0IHNlbGVjdG9ycyA9IHtcblx0Z2V0VHlwZUluZGV4KCBzdGF0ZSwgc2x1ZyApIHtcblx0XHRyZXR1cm4gc3RhdGUudHlwZXMuZmluZEluZGV4KCBldmVudCA9PiBldmVudC52YWx1ZSA9PT0gc2x1ZyApO1xuXHR9LFxuXHRnZXRUeXBlcyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLnR5cGVzO1xuXHR9LFxuXHRnZXRHYXRld2F5VHlwZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS50eXBlcy5maWx0ZXIoIGV2ZW50ID0+IChcblx0XHRcdCdnYXRld2F5JyBpbiBldmVudFxuXHRcdCkgKTtcblx0fSxcblx0Z2V0QWx3YXlzVHlwZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS50eXBlcy5maWx0ZXIoIGV2ZW50ID0+IChcblx0XHRcdCdhbHdheXMnIGluIGV2ZW50XG5cdFx0KSApO1xuXHR9LFxuXHRnZXREeW5hbWljVHlwZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS50eXBlcy5maWx0ZXIoICggeyBpc0R5bmFtaWMgfSApID0+IGlzRHluYW1pYyApO1xuXHR9LFxuXHRnZXRUeXBlKCBzdGF0ZSwgc2x1ZyApIHtcblx0XHRjb25zdCBpbmRleCA9IHNlbGVjdG9ycy5nZXRUeXBlSW5kZXgoIHN0YXRlLCBzbHVnICk7XG5cblx0XHRyZXR1cm4gc3RhdGUudHlwZXNbIGluZGV4IF07XG5cdH0sXG5cdGdldFVuc3VwcG9ydGVkKCBzdGF0ZSwgYWN0aW9uSWQgKSB7XG5cdFx0Y29uc3QgYWN0aW9uID0gc3RhdGUubG9ja2VkQWN0aW9uc1sgYWN0aW9uSWQgXSA/PyBmYWxzZTtcblxuXHRcdGlmICggZmFsc2UgPT09IGFjdGlvbiApIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWN0aW9uLnVuc3VwcG9ydGVkO1xuXHR9LFxuXHRnZXRTdXBwb3J0ZWQoIHN0YXRlLCBhY3Rpb25JZCApIHtcblx0XHRjb25zdCBhY3Rpb24gPSBzdGF0ZS5sb2NrZWRBY3Rpb25zWyBhY3Rpb25JZCBdID8/IGZhbHNlO1xuXG5cdFx0aWYgKCBmYWxzZSA9PT0gYWN0aW9uICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY3Rpb24uc3VwcG9ydGVkO1xuXHR9LFxuXHRpc1ZhbGlkKCBzdGF0ZSwgYWN0aW9uSWQsIGV2ZW50U2x1ZyApIHtcblx0XHRjb25zdCB1bnN1cHBvcnRlZCA9IHNlbGVjdG9ycy5nZXRVbnN1cHBvcnRlZCggc3RhdGUsIGFjdGlvbklkICk7XG5cblx0XHRpZiAoIHVuc3VwcG9ydGVkLmxlbmd0aCAmJiB1bnN1cHBvcnRlZC5pbmNsdWRlcyggZXZlbnRTbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc3VwcG9ydGVkID0gc2VsZWN0b3JzLmdldFN1cHBvcnRlZCggc3RhdGUsIGFjdGlvbklkICk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0IXN1cHBvcnRlZC5sZW5ndGggfHwgc3VwcG9ydGVkLmluY2x1ZGVzKCBldmVudFNsdWcgKVxuXHRcdCk7XG5cdH0sXG5cdGZpbHRlckxpc3QoIHN0YXRlLCBhY3Rpb25JZCwgZXZlbnRMaXN0ICkge1xuXHRcdHJldHVybiBldmVudExpc3QuZmlsdGVyKFxuXHRcdFx0Y3VycmVudCA9PiBzZWxlY3RvcnMuaXNWYWxpZCggc3RhdGUsIGFjdGlvbklkLCBjdXJyZW50ICksXG5cdFx0KTtcblx0fSxcblx0Z2V0SGVscE1hcCggc3RhdGUgKSB7XG5cdFx0Y29uc3QgbWFwID0ge307XG5cblx0XHRmb3IgKCBjb25zdCB7IHZhbHVlLCBoZWxwIH0gb2Ygc3RhdGUudHlwZXMgKSB7XG5cdFx0XHRtYXBbIHZhbHVlIF0gPSBoZWxwO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC4uLnNlbGVjdG9ycyxcbn07IiwiaW1wb3J0IHdpdGhTZWxlY3RHYXRld2F5cyBmcm9tICcuLi9ob29rcy93aXRoU2VsZWN0R2F0ZXdheXMnO1xuaW1wb3J0IHsgRmV0Y2hBcGlCdXR0b24gfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuZnVuY3Rpb24gR2F0ZXdheUZldGNoQnV0dG9uKCB7XG5cdGluaXRpYWxMYWJlbCA9ICdWYWxpZCcsXG5cdGxhYmVsID0gJ0luVmFsaWQnLFxuXHRhcGlBcmdzID0ge30sXG5cdGdhdGV3YXlSZXF1ZXN0SWQsXG5cdGxvYWRpbmdHYXRld2F5LFxuXHRvbkxvYWRpbmcgPSAoKSA9PiB7fSxcblx0b25TdWNjZXNzID0gKCkgPT4ge30sXG5cdG9uRmFpbCA9ICgpID0+IHt9LFxuXHRpc0hpZGRlbiA9IGZhbHNlLFxufSApIHtcblxuXHRyZXR1cm4gPEZldGNoQXBpQnV0dG9uXG5cdFx0aWQ9eyBnYXRld2F5UmVxdWVzdElkIH1cblx0XHRsb2FkaW5nU3RhdGU9eyBsb2FkaW5nR2F0ZXdheSB9XG5cdFx0aW5pdGlhbExhYmVsPXsgaW5pdGlhbExhYmVsIH1cblx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRhcGlBcmdzPXsgYXBpQXJncyB9XG5cdFx0b25GYWlsPXsgb25GYWlsIH1cblx0XHRvbkxvYWRpbmc9eyBvbkxvYWRpbmcgfVxuXHRcdG9uU3VjY2Vzcz17IG9uU3VjY2VzcyB9XG5cdFx0aXNIaWRkZW49eyBpc0hpZGRlbiB9XG5cdC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KCB3aXRoU2VsZWN0R2F0ZXdheXMgKSxcbikoIEdhdGV3YXlGZXRjaEJ1dHRvbiApOyIsImZ1bmN0aW9uIGdhdGV3YXlBdHRyKCBhdHRyID0gZmFsc2UsIGlzRW1wdHkgPSAnJyApIHtcblx0Y29uc3QgZGF0YSA9IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5nYXRld2F5cztcblxuXHRpZiAoICFhdHRyICkge1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cdGlmICggIWRhdGFbIGF0dHIgXSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCBzb3VyY2UgPSBkYXRhWyBhdHRyIF07XG5cblx0cmV0dXJuIG5hbWUgPT4gc291cmNlWyBuYW1lIF0gPyBzb3VyY2VbIG5hbWUgXSA6IGlzRW1wdHk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhdGV3YXlBdHRyOyIsImltcG9ydCBnYXRld2F5QXR0ciBmcm9tICcuL2dhdGV3YXlBdHRyJztcblxuZnVuY3Rpb24gZ2F0ZXdheUxhYmVsKCB0eXBlLCBpc0VtcHR5ID0gJycgKSB7XG5cdGNvbnN0IGxhYmVsID0gZ2F0ZXdheUF0dHIoICdsYWJlbHMnICk7XG5cblx0cmV0dXJuIGF0dHIgPT4gbGFiZWwoIHR5cGUgKSA/IGxhYmVsKCB0eXBlIClbIGF0dHIgXSA6IGlzRW1wdHk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhdGV3YXlMYWJlbDsiLCJmdW5jdGlvbiBpc3NldFJlbmRlckdhdGV3YXkoIGlkLCB3aGF0ID0gJ2NyZWQnICkge1xuXHRyZXR1cm4gKFxuXHRcdHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdCAmJiB3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3RbIGlkIF0gJiZcblx0XHR3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3RbIGlkIF1bIHdoYXQgXVxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc3NldFJlbmRlckdhdGV3YXk7IiwiZnVuY3Rpb24gcmVnaXN0ZXJHYXRld2F5KCBpZCwgY2FsbGJhY2ssIGZvcldoYXQgPSAnY3JlZCcgKSB7XG5cdHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdCAgICAgICA9IHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdCB8fCB7fTtcblx0d2luZG93LkpldEZCR2F0ZXdheXNMaXN0WyBpZCBdID0gd2luZG93LkpldEZCR2F0ZXdheXNMaXN0WyBpZCBdIHx8XG5cdFx0e307XG5cblx0d2luZG93LkpldEZCR2F0ZXdheXNMaXN0WyBpZCBdWyBmb3JXaGF0IF0gPSBjYWxsYmFjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJHYXRld2F5OyIsImltcG9ydCBpc3NldFJlbmRlckdhdGV3YXkgZnJvbSAnLi9pc3NldFJlbmRlckdhdGV3YXknO1xuXG5mdW5jdGlvbiByZW5kZXJHYXRld2F5KCBpZCwgcHJvcHMsIHdoYXQgPSAnY3JlZCcgKSB7XG5cdGlmICggIWlzc2V0UmVuZGVyR2F0ZXdheSggaWQsIHdoYXQgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRjb25zdCBHYXRld2F5Q29tcG9uZW50ID0gd2luZG93LkpldEZCR2F0ZXdheXNMaXN0WyBpZCBdWyB3aGF0IF07XG5cblx0cmV0dXJuIDxHYXRld2F5Q29tcG9uZW50IHsgLi4ucHJvcHMgfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2F0ZXdheTsiLCJpbXBvcnQgaXNzZXRSZW5kZXJHYXRld2F5IGZyb20gJy4vaXNzZXRSZW5kZXJHYXRld2F5JztcbmltcG9ydCByZW5kZXJHYXRld2F5IGZyb20gJy4vcmVuZGVyR2F0ZXdheSc7XG5cbmZ1bmN0aW9uIHJlbmRlckdhdGV3YXlXaXRoUGxhY2Vob2xkZXIoXG5cdGlkLFxuXHRwcm9wcyxcblx0d2hhdCAgICAgICAgPSAnY3JlZCcsXG5cdFBsYWNlaG9sZGVyID0gbnVsbCxcbikge1xuXHRpZiAoICFpc3NldFJlbmRlckdhdGV3YXkoIGlkLCB3aGF0ICkgKSB7XG5cdFx0cmV0dXJuIFBsYWNlaG9sZGVyO1xuXHR9XG5cdHByb3BzLlBsYWNlaG9sZGVyID0gUGxhY2Vob2xkZXI7XG5cblx0cmV0dXJuIHJlbmRlckdhdGV3YXkoIGlkLCBwcm9wcywgd2hhdCApO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyOyIsImZ1bmN0aW9uIHdpdGhEaXNwYXRjaEdhdGV3YXlzICggZGlzcGF0Y2ggKXtcblx0Y29uc3Qgc3RvcmUgPSBkaXNwYXRjaCggJ2pldC1mb3Jtcy9nYXRld2F5cycgKTtcblxuXHRyZXR1cm4ge1xuXHRcdHNldEdhdGV3YXlSZXF1ZXN0OiBzdG9yZS5zZXRSZXF1ZXN0LFxuXHRcdHNldEdhdGV3YXlTY2VuYXJpbzogc3RvcmUuc2V0U2NlbmFyaW8sXG5cdFx0c2V0U2NlbmFyaW86IHN0b3JlLnNldEN1cnJlbnRTY2VuYXJpbyxcblx0XHRzZXRHYXRld2F5OiBzdG9yZS5zZXRHYXRld2F5LFxuXHRcdHNldEdhdGV3YXlJbm5lcjogc3RvcmUuc2V0R2F0ZXdheUlubmVyLFxuXHRcdHNldEdhdGV3YXlTcGVjaWZpYzogc3RvcmUuc2V0R2F0ZXdheVNwZWNpZmljLFxuXHRcdGNsZWFyR2F0ZXdheTogc3RvcmUuY2xlYXJHYXRld2F5LFxuXHRcdGNsZWFyU2NlbmFyaW86IHN0b3JlLmNsZWFyU2NlbmFyaW8sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXNwYXRjaEdhdGV3YXlzOyIsImltcG9ydCBnYXRld2F5QXR0ciBmcm9tICcuLi9oZWxwZXJzL2dhdGV3YXlBdHRyJztcbmltcG9ydCBnYXRld2F5TGFiZWwgZnJvbSAnLi4vaGVscGVycy9nYXRld2F5TGFiZWwnO1xuaW1wb3J0IHsgZ2xvYmFsVGFiIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcblxuZnVuY3Rpb24gd2l0aFNlbGVjdEdhdGV3YXlzKCBzZWxlY3QgKSB7XG5cdGNvbnN0IHN0b3JlID0gc2VsZWN0KCAnamV0LWZvcm1zL2dhdGV3YXlzJyApO1xuXG5cdGNvbnN0IGdhdGV3YXlSZXF1ZXN0SWQgPSBzdG9yZS5nZXRDdXJyZW50UmVxdWVzdElkKCk7XG5cdGNvbnN0IGdhdGV3YXlTcGVjaWZpYyAgPSBzdG9yZS5nZXRHYXRld2F5U3BlY2lmaWMoKTtcblx0Y29uc3Qgc2NlbmFyaW8gICAgICAgICA9IHN0b3JlLmdldFNjZW5hcmlvKCk7XG5cblx0Y29uc3QgQ1VSUkVOVF9HQVRFV0FZICAgICAgICAgICAgICAgICAgICAgID0gc3RvcmUuZ2V0R2F0ZXdheUlkKCk7XG5cdGNvbnN0IHsgaWQ6IENVUlJFTlRfU0NFTkFSSU8gPSAnUEFZX05PVycgfSA9IHNjZW5hcmlvO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICB1c2VfZ2xvYmFsOiB1c2VHbG9iYWwgPSBmYWxzZSxcblx0ICAgICAgfSA9IGdhdGV3YXlTcGVjaWZpYztcblxuXHRjb25zdCBjdXJyZW50VGFiID0gZ2xvYmFsVGFiKCB7IHNsdWc6IENVUlJFTlRfR0FURVdBWSB9ICk7XG5cblx0Y29uc3QgZ2V0U3BlY2lmaWNPckdsb2JhbCA9ICgga2V5LCBpZkVtcHR5ID0gJycgKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdHVzZUdsb2JhbCA/IChcblx0XHRcdFx0Y3VycmVudFRhYlsga2V5IF0gfHwgaWZFbXB0eVxuXHRcdFx0KSA6IChcblx0XHRcdFx0Z2F0ZXdheVNwZWNpZmljWyBrZXkgXSB8fCBpZkVtcHR5XG5cdFx0XHQpXG5cdFx0KTtcblx0fTtcblxuXHRjb25zdCBjYWxsYWJsZUdhdGV3YXkgICAgICAgICA9IGdhdGV3YXlBdHRyKCAnYWRkaXRpb25hbCcgKTtcblx0Y29uc3QgYWRkaXRpb25hbFNvdXJjZUdhdGV3YXkgPSBjYWxsYWJsZUdhdGV3YXkoIENVUlJFTlRfR0FURVdBWSApO1xuXG5cdGNvbnN0IGxvYWRpbmdHYXRld2F5ID0gc2VsZWN0KCAnamV0LWZvcm1zL2FjdGlvbnMnICkuXG5cdFx0Z2V0TG9hZGluZyggZ2F0ZXdheVJlcXVlc3RJZCApO1xuXG5cdGNvbnN0IGdsb2JhbEdhdGV3YXlMYWJlbCAgID0gZ2F0ZXdheUF0dHIoICdsYWJlbHMnICk7XG5cdGNvbnN0IHNwZWNpZmljR2F0ZXdheUxhYmVsID0gZ2F0ZXdheUxhYmVsKCBDVVJSRU5UX0dBVEVXQVkgKTtcblxuXHRjb25zdCBjdXN0b21HYXRld2F5TGFiZWwgPSBmdW5jdGlvbiAoIGtleSApIHtcblx0XHRyZXR1cm4gZ2xvYmFsR2F0ZXdheUxhYmVsKCBgJHsgQ1VSUkVOVF9HQVRFV0FZIH0uJHsga2V5IH1gICk7XG5cdH07XG5cdGNvbnN0IHNjZW5hcmlvTGFiZWwgICAgICA9IGZ1bmN0aW9uICgga2V5ICkge1xuXHRcdHJldHVybiBjdXN0b21HYXRld2F5TGFiZWwoIGBzY2VuYXJpby4keyBDVVJSRU5UX1NDRU5BUklPIH0uJHsga2V5IH1gICk7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRnYXRld2F5R2VuZXJhbDogc3RvcmUuZ2V0R2F0ZXdheSgpLFxuXHRcdGdhdGV3YXlSZXF1ZXN0OiBzdG9yZS5nZXRDdXJyZW50UmVxdWVzdCgpLFxuXHRcdHNjZW5hcmlvU291cmNlOiBhZGRpdGlvbmFsU291cmNlR2F0ZXdheVsgQ1VSUkVOVF9TQ0VOQVJJTyBdIHx8IHt9LFxuXHRcdGN1cnJlbnRTY2VuYXJpbzogc2NlbmFyaW9bIENVUlJFTlRfU0NFTkFSSU8gXSB8fCB7fSxcblx0XHRDVVJSRU5UX1NDRU5BUklPLFxuXHRcdGdhdGV3YXlTY2VuYXJpbzogc2NlbmFyaW8sXG5cdFx0YWRkaXRpb25hbFNvdXJjZUdhdGV3YXksXG5cdFx0Z2F0ZXdheVNwZWNpZmljLFxuXHRcdGdhdGV3YXlSZXF1ZXN0SWQsXG5cdFx0bG9hZGluZ0dhdGV3YXksXG5cdFx0Z2V0U3BlY2lmaWNPckdsb2JhbCxcblx0XHRnbG9iYWxHYXRld2F5TGFiZWwsXG5cdFx0c3BlY2lmaWNHYXRld2F5TGFiZWwsXG5cdFx0Y3VzdG9tR2F0ZXdheUxhYmVsLFxuXHRcdHNjZW5hcmlvTGFiZWwsXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWxlY3RHYXRld2F5czsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjbGVhckdhdGV3YXkoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5jbGVhckdhdGV3YXksXG5cdFx0fTtcblx0fSxcblx0Y2xlYXJTY2VuYXJpbygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLmNsZWFyU2NlbmFyaW8sXG5cdFx0fTtcblx0fSxcblx0c2V0UmVxdWVzdCggaXRlbSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnNldFJlcXVlc3QsXG5cdFx0XHRpdGVtLFxuXHRcdH07XG5cdH0sXG5cdHNldEdhdGV3YXkoIGl0ZW0gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5zZXRHYXRld2F5LFxuXHRcdFx0aXRlbSxcblx0XHR9O1xuXHR9LFxuXHRzZXRHYXRld2F5SW5uZXIoIGl0ZW0gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5zZXRHYXRld2F5SW5uZXIsXG5cdFx0XHRpdGVtLFxuXHRcdH07XG5cdH0sXG5cdHNldEdhdGV3YXlTcGVjaWZpYyggaXRlbSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnNldEdhdGV3YXlTcGVjaWZpYyxcblx0XHRcdGl0ZW0sXG5cdFx0fTtcblx0fSxcblx0c2V0U2NlbmFyaW8oIGl0ZW0gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5zZXRTY2VuYXJpbyxcblx0XHRcdGl0ZW0sXG5cdFx0fTtcblx0fSxcblx0c2V0Q3VycmVudFNjZW5hcmlvKCBpdGVtICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuc2V0Q3VycmVudFNjZW5hcmlvLFxuXHRcdFx0aXRlbSxcblx0XHR9O1xuXHR9LFxuXHRyZWdpc3RlckV2ZW50VHlwZSggaXRlbSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnJlZ2lzdGVyRXZlbnRUeXBlLFxuXHRcdFx0aXRlbSxcblx0XHR9O1xuXHR9LFxuXHRoYXJkU2V0R2F0ZXdheSggaXRlbSwgdmFsdWUgPSAnJyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLmhhcmRTZXRHYXRld2F5LFxuXHRcdFx0aXRlbSxcblx0XHRcdHZhbHVlLFxuXHRcdH07XG5cdH0sXG5cdGhhcmRTZXRHYXRld2F5U3BlY2lmaWMoIGl0ZW0sIHZhbHVlID0gJycgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5oYXJkU2V0R2F0ZXdheVNwZWNpZmljLFxuXHRcdFx0aXRlbSxcblx0XHRcdHZhbHVlLFxuXHRcdH07XG5cdH0sXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRjbGVhckdhdGV3YXk6ICdDTEVBUl9HQVRFV0FZJyxcblx0Y2xlYXJTY2VuYXJpbzogJ0NMRUFSX1NDRU5BUklPJyxcblx0c2V0U2NlbmFyaW86ICdTRVRfQ1VSUkVOVF9HQVRFV0FZX1NDRU5BUklPJyxcblx0c2V0R2F0ZXdheTogJ1NFVF9DVVJSRU5UX0dBVEVXQVknLFxuXHRzZXRHYXRld2F5U3BlY2lmaWM6ICdTRVRfQ1VSUkVOVF9HQVRFV0FZX1NQRUNJRklDJyxcblx0c2V0R2F0ZXdheUlubmVyOiAnU0VUX0NVUlJFTlRfR0FURVdBWV9JTk5FUicsXG5cdHNldFJlcXVlc3Q6ICdTRVRfQ1VSUkVOVF9SRVFVRVNUJyxcblx0c2V0Q3VycmVudFNjZW5hcmlvOiAnU0VUX0NVUlJFTlRfU0NFTkFSSU8nLFxuXHRyZWdpc3RlckV2ZW50VHlwZTogJ1JFR0lTVEVSX0VWRU5UX1RZUEUnLFxuXHRoYXJkU2V0R2F0ZXdheTogJ0hBUkRfU0VUX0NVUlJFTlRfR0FURVdBWScsXG5cdGhhcmRTZXRHYXRld2F5U3BlY2lmaWM6ICdIQVJEX1NFVF9DVVJSRU5UX0dBVEVXQVlfU1BFQ0lGSUMnXG59XG5cblxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRbIGNvbnN0YW50cy5jbGVhckdhdGV3YXkgXTogKCBzdGF0ZSApID0+IChcblx0XHR7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGN1cnJlbnRHYXRld2F5OiB7fSxcblx0XHR9XG5cdCksXG5cdFsgY29uc3RhbnRzLmNsZWFyU2NlbmFyaW8gXTogKCBzdGF0ZSApID0+IChcblx0XHR7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGN1cnJlbnRTY2VuYXJpbzoge30sXG5cdFx0fVxuXHQpLFxuXHRbIGNvbnN0YW50cy5zZXRTY2VuYXJpbyBdOiAoIHN0YXRlLCBhY3Rpb24gKSA9PiAoXG5cdFx0e1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjdXJyZW50U2NlbmFyaW86IHtcblx0XHRcdFx0Li4uc3RhdGUuY3VycmVudFNjZW5hcmlvLFxuXHRcdFx0XHQuLi4oXG5cdFx0XHRcdFx0YWN0aW9uLml0ZW0gfHwge31cblx0XHRcdFx0KSxcblx0XHRcdH0sXG5cdFx0fVxuXHQpLFxuXHRbIGNvbnN0YW50cy5zZXRHYXRld2F5IF06ICggc3RhdGUsIGFjdGlvbiApID0+IChcblx0XHR7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGN1cnJlbnRHYXRld2F5OiB7XG5cdFx0XHRcdC4uLnN0YXRlLmN1cnJlbnRHYXRld2F5LFxuXHRcdFx0XHQuLi5hY3Rpb24uaXRlbSxcblx0XHRcdH0sXG5cdFx0fVxuXHQpLFxuXHRbIGNvbnN0YW50cy5zZXRHYXRld2F5U3BlY2lmaWMgXTogKCBzdGF0ZSwgYWN0aW9uICkgPT4gKFxuXHRcdHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y3VycmVudEdhdGV3YXk6IHtcblx0XHRcdFx0Li4uc3RhdGUuY3VycmVudEdhdGV3YXksXG5cdFx0XHRcdFsgc3RhdGUuY3VycmVudEdhdGV3YXkuZ2F0ZXdheSBdOiB7XG5cdFx0XHRcdFx0Li4uc2VsZWN0b3JzLmdldEdhdGV3YXlTcGVjaWZpYyggc3RhdGUgKSxcblx0XHRcdFx0XHQuLi5hY3Rpb24uaXRlbSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fVxuXHQpLFxuXHRbIGNvbnN0YW50cy5zZXRHYXRld2F5SW5uZXIgXTogKCBzdGF0ZSwgYWN0aW9uICkgPT4ge1xuXHRcdGNvbnN0IHsga2V5LCB2YWx1ZSB9ID0gYWN0aW9uLml0ZW07XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y3VycmVudEdhdGV3YXk6IHtcblx0XHRcdFx0Li4uc3RhdGUuY3VycmVudEdhdGV3YXksXG5cdFx0XHRcdFsga2V5IF06IHtcblx0XHRcdFx0XHQuLi4oXG5cdFx0XHRcdFx0XHRzdGF0ZS5jdXJyZW50R2F0ZXdheVsga2V5IF0gfHwge31cblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdC4uLnZhbHVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXHR9LFxuXHRbIGNvbnN0YW50cy5zZXRSZXF1ZXN0IF06ICggc3RhdGUsIGFjdGlvbiApID0+IHtcblx0XHRjb25zdCBpdGVtcyA9IFsgc2VsZWN0b3JzLmdldEdhdGV3YXlJZCggc3RhdGUgKSwgYWN0aW9uLml0ZW0/LmlkIF0uZmlsdGVyKCB2YWx1ZSA9PiB2YWx1ZSApO1xuXHRcdGFjdGlvbi5pdGVtLmlkID0gaXRlbXMuam9pbiggJy8nICk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjdXJyZW50UmVxdWVzdDogYWN0aW9uLml0ZW0sXG5cdFx0fTtcblx0fSxcblx0WyBjb25zdGFudHMuc2V0Q3VycmVudFNjZW5hcmlvIF06ICggc3RhdGUsIGFjdGlvbiApID0+IChcblx0XHR7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGN1cnJlbnRTY2VuYXJpbzoge1xuXHRcdFx0XHQuLi5zdGF0ZS5jdXJyZW50U2NlbmFyaW8sXG5cdFx0XHRcdFsgc3RhdGUuY3VycmVudFNjZW5hcmlvPy5pZCBdOiB7XG5cdFx0XHRcdFx0Li4uKFxuXHRcdFx0XHRcdFx0c3RhdGUuY3VycmVudFNjZW5hcmlvWyBzdGF0ZS5jdXJyZW50U2NlbmFyaW8/LmlkIF0gfHwge31cblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdC4uLihcblx0XHRcdFx0XHRcdGFjdGlvbi5pdGVtIHx8IHt9XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fVxuXHQpLFxuXHRbIGNvbnN0YW50cy5oYXJkU2V0R2F0ZXdheSBdOiAoIHN0YXRlLCBhY3Rpb24gKSA9PiB7XG5cdFx0aWYgKCBhY3Rpb24uaXRlbSApIHtcblx0XHRcdHN0YXRlLmN1cnJlbnRHYXRld2F5WyBhY3Rpb24uaXRlbSBdID0gYWN0aW9uLnZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHR9O1xuXHR9LFxuXHRbIGNvbnN0YW50cy5oYXJkU2V0R2F0ZXdheVNwZWNpZmljIF06ICggc3RhdGUsIGFjdGlvbiApID0+IHtcblx0XHRpZiAoIGFjdGlvbi5pdGVtICYmIHN0YXRlLmN1cnJlbnRHYXRld2F5Py5nYXRld2F5ICkge1xuXHRcdFx0c3RhdGUuY3VycmVudEdhdGV3YXlbIHN0YXRlLmN1cnJlbnRHYXRld2F5Py5nYXRld2F5IF0gPSB7fTtcblx0XHRcdHN0YXRlLmN1cnJlbnRHYXRld2F5WyBzdGF0ZS5jdXJyZW50R2F0ZXdheT8uZ2F0ZXdheSBdWyBhY3Rpb24uaXRlbSBdID0gYWN0aW9uLnZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHR9O1xuXHR9LFxuXHRbIGNvbnN0YW50cy5yZWdpc3RlckV2ZW50VHlwZSBdOiAoIHN0YXRlLCBhY3Rpb24gKSA9PiB7XG5cdFx0Y29uc3QgZXZlbnQgPSB7XG5cdFx0XHQuLi5hY3Rpb24uaXRlbSxcblx0XHRcdGdhdGV3YXk6IGFjdGlvbi5pdGVtPy5nYXRld2F5ID8/IHN0YXRlLmN1cnJlbnRHYXRld2F5Py5nYXRld2F5LFxuXHRcdFx0c2NlbmFyaW86IGFjdGlvbi5pdGVtPy5zY2VuYXJpbyA/PyBzdGF0ZS5jdXJyZW50U2NlbmFyaW8/LmlkLFxuXHRcdH07XG5cblx0XHRzdGF0ZS5ldmVudFR5cGVzLnB1c2goIGV2ZW50ICk7XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG59OyIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmNvbnN0IHsgY3JlYXRlUmVkdXhTdG9yZSB9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdXhTdG9yZSggJ2pldC1mb3Jtcy9nYXRld2F5cycsIHtcblx0cmVkdWNlcixcblx0YWN0aW9ucyxcblx0c2VsZWN0b3JzLFxufSApO1xuXG5cbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcblx0Y3VycmVudFJlcXVlc3Q6IHtcblx0XHRpZDogLSAxLFxuXHR9LFxuXHRjdXJyZW50R2F0ZXdheToge30sXG5cdGN1cnJlbnRTY2VuYXJpbzoge30sXG5cdGV2ZW50VHlwZXM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCBzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIGFjdGlvbiApIHtcblx0Y29uc3QgY2FsbGJhY2sgPSBkaXNwYXRjaGVyc1sgYWN0aW9uPy50eXBlIF07XG5cblx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gY2FsbGJhY2soIHN0YXRlLCBhY3Rpb24gKTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn0iLCJjb25zdCBzZWxlY3RvcnMgPSB7XG5cdGdldEN1cnJlbnRSZXF1ZXN0SWQoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50UmVxdWVzdC5pZDtcblx0fSxcblx0Z2V0Q3VycmVudFJlcXVlc3QoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50UmVxdWVzdDtcblx0fSxcblx0Z2V0U2NlbmFyaW8oIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50U2NlbmFyaW87XG5cdH0sXG5cdGdldFNjZW5hcmlvSWQoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50U2NlbmFyaW8/LmlkO1xuXHR9LFxuXHRnZXRHYXRld2F5SWQoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50R2F0ZXdheT8uZ2F0ZXdheTtcblx0fSxcblx0Z2V0R2F0ZXdheSggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnRHYXRld2F5O1xuXHR9LFxuXHRnZXRFdmVudFR5cGVzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuZXZlbnRUeXBlcztcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Li4uc2VsZWN0b3JzLFxuXHRnZXRHYXRld2F5U3BlY2lmaWMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50R2F0ZXdheVsgc2VsZWN0b3JzLmdldEdhdGV3YXlJZCggc3RhdGUgKSBdIHx8IHt9O1xuXHR9LFxufSIsImltcG9ydCB7IHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5mdW5jdGlvbiB1c2VJc0hhc0F0dHJpYnV0ZSggYXR0ck5hbWUgKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cdGNvbnN0IHR5cGUgICAgICAgPSBibG9ja1Byb3BzWyAnZGF0YS10eXBlJyBdO1xuXG5cdHJldHVybiB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHtcblx0XHRcdGNvbnN0IGJsb2NrID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICkuZ2V0QmxvY2tUeXBlKCB0eXBlICk7XG5cblx0XHRcdHJldHVybiAhIWJsb2NrLmF0dHJpYnV0ZXNbIGF0dHJOYW1lIF07XG5cdFx0fSxcblx0XHRbIGF0dHJOYW1lLCB0eXBlIF0sXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUlzSGFzQXR0cmlidXRlOyIsImNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuXHQgICAgICB1c2VEaXNwYXRjaCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiB1c2VPcGVuRWRpdG9yUGFuZWwoIHBhbmVsTmFtZSApIHtcblx0Y29uc3QgeyBlbmFibGVDb21wbGVtZW50YXJ5QXJlYSB9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2ludGVyZmFjZScgKTtcblx0Y29uc3QgeyB0b2dnbGVFZGl0b3JQYW5lbE9wZW5lZCB9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXQtcG9zdCcgKTtcblxuXHRjb25zdCBpc09wZW5lZCA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnY29yZS9lZGl0LXBvc3QnICkuaXNFZGl0b3JQYW5lbE9wZW5lZCggcGFuZWxOYW1lICksXG5cdFx0WyBwYW5lbE5hbWUgXSxcblx0KTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdC8vIHN3aXRjaCBmcm9tIGJsb2NrIHRvIHBvc3QgcGFuZWxcblx0XHRlbmFibGVDb21wbGVtZW50YXJ5QXJlYSggJ2NvcmUvZWRpdC1wb3N0JywgJ2VkaXQtcG9zdC9kb2N1bWVudCcgKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHQhaXNPcGVuZWQgJiYgdG9nZ2xlRWRpdG9yUGFuZWxPcGVuZWQoIHBhbmVsTmFtZSApO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VPcGVuRWRpdG9yUGFuZWw7IiwiaW1wb3J0IFNhZmVEZWxldGVDb250ZXh0IGZyb20gJy4uL3JlcGVhdGVyL2NvbnRleHQvc2FmZS5kZWxldGUnO1xuaW1wb3J0IHsgc3ByaW50ZiwgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qgb25TYXZlRGVsZXRpbmcgPSBpbmRleCA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuXHRyZXR1cm4gY29uZmlybShcblx0XHRzcHJpbnRmKFxuXHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVkIC0gaXRlbSBpbmRleFxuXHRcdFx0X18oXG5cdFx0XHRcdGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIGl0ZW0gJWQ/YCxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0XHRcdGluZGV4ICsgMSxcblx0XHQpLFxuXHQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHNldEl0ZW1zRGF0YVxuICogQHJldHVybiB7e1xuICogY2xvbmVJdGVtOiBGdW5jdGlvbixcbiAqIGFkZE5ld0l0ZW06IEZ1bmN0aW9uLFxuICogY2hhbmdlQ3VycmVudEl0ZW06IEZ1bmN0aW9uLFxuICogdG9nZ2xlVmlzaWJsZTogRnVuY3Rpb24sXG4gKiBtb3ZlRG93bjogRnVuY3Rpb24sXG4gKiBtb3ZlVXA6IEZ1bmN0aW9uLFxuICogcmVtb3ZlT3B0aW9uOiBGdW5jdGlvblxuICogfXxudWxsfVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gdXNlUmVwZWF0ZXJTdGF0ZSggc2V0SXRlbXNEYXRhICkge1xuXHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2Ygc2V0SXRlbXNEYXRhICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cdGNvbnN0IGlzU2FmZURlbGV0aW5nID0gdXNlQ29udGV4dCggU2FmZURlbGV0ZUNvbnRleHQgKTtcblxuXHRjb25zdCBjaGFuZ2VDdXJyZW50SXRlbSA9IGZ1bmN0aW9uICggdmFsdWVUb1NldCwgaW5kZXggKSB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblxuXHRcdFx0cHJldkNsb25lWyBpbmRleCBdID0ge1xuXHRcdFx0XHQuLi5wcmV2WyBpbmRleCBdLFxuXHRcdFx0XHQuLi52YWx1ZVRvU2V0LFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZU9wdGlvbiA9IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cdFx0aWYgKCBpc1NhZmVEZWxldGluZyAmJiAhb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblx0XHRcdHByZXZDbG9uZS5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IGFkZE5ld0l0ZW0gPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiBbXG5cdFx0XHQuLi5wcmV2LCB7XG5cdFx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0Li4udmFsdWUsXG5cdFx0XHR9LFxuXHRcdF0gKTtcblx0fTtcblxuXHRjb25zdCBjbG9uZUl0ZW0gPSBmdW5jdGlvbiAoIGluZGV4ICkge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgICAgICAgICA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblx0XHRcdGNvbnN0IFsgYmVmb3JlLCBhZnRlciBdID0gW1xuXHRcdFx0XHRwcmV2Q2xvbmUuc2xpY2UoIDAsIGluZGV4ICsgMSApLFxuXHRcdFx0XHRwcmV2Q2xvbmUuc2xpY2UoIGluZGV4ICsgMSApLFxuXHRcdFx0XTtcblxuXHRcdFx0cmV0dXJuIFsgLi4uYmVmb3JlLCBwcmV2Q2xvbmVbIGluZGV4IF0sIC4uLmFmdGVyIF07XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IG1vdmVSZXBlYXRlckl0ZW0gPSBmdW5jdGlvbiAoIHsgb2xkSW5kZXgsIG5ld0luZGV4IH0gKSB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblxuXHRcdFx0W1xuXHRcdFx0XHRwcmV2Q2xvbmVbIG5ld0luZGV4IF0sXG5cdFx0XHRcdHByZXZDbG9uZVsgb2xkSW5kZXggXSxcblx0XHRcdF0gPSBbIHByZXZDbG9uZVsgb2xkSW5kZXggXSwgcHJldkNsb25lWyBuZXdJbmRleCBdIF07XG5cblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IG1vdmVVcCAgID0gZnVuY3Rpb24gKCBpbmRleCApIHtcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4IC0gMSB9ICk7XG5cdH07XG5cdGNvbnN0IG1vdmVEb3duID0gZnVuY3Rpb24gKCBpbmRleCApIHtcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4ICsgMSB9ICk7XG5cdH07XG5cblx0Y29uc3QgdG9nZ2xlVmlzaWJsZSA9IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSAgICAgICAgICAgICAgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cdFx0XHRwcmV2Q2xvbmVbIGluZGV4IF0uX192aXNpYmxlID0gIShcblx0XHRcdFx0cHJldkNsb25lWyBpbmRleCBdLl9fdmlzaWJsZVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRjaGFuZ2VDdXJyZW50SXRlbSxcblx0XHR0b2dnbGVWaXNpYmxlLFxuXHRcdG1vdmVEb3duLFxuXHRcdG1vdmVVcCxcblx0XHRjbG9uZUl0ZW0sXG5cdFx0YWRkTmV3SXRlbSxcblx0XHRyZW1vdmVPcHRpb24sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcGVhdGVyU3RhdGU7IiwiY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gdXNlU2VsZWN0UG9zdE1ldGEoIG5hbWUgKSB7XG5cdGNvbnN0IGFsbE1ldGEgPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9LFxuXHQpO1xuXG5cdHJldHVybiBKU09OLnBhcnNlKCBhbGxNZXRhWyBuYW1lIF0gfHwgJ3t9JyApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTZWxlY3RQb3N0TWV0YTsiLCJjb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuXHQgICAgICB1c2VFZmZlY3QsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHQgICAgICB1c2VEaXNwYXRjaCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5cbmZ1bmN0aW9uIHVzZVN1Y2Nlc3NOb3RpY2UgKCB0ZXh0LCBvcHRpb25zID0ge30gKSB7XG5cdGNvbnN0IFsgaGFzQ29waWVkLCBzZXRIYXNDb3BpZWQgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBub3RpY2VTdG9yZSAgICAgICAgICAgICAgICAgPSB1c2VEaXNwYXRjaCggd3Aubm90aWNlcy5zdG9yZSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggaGFzQ29waWVkICkge1xuXHRcdFx0bm90aWNlU3RvcmUuY3JlYXRlV2FybmluZ05vdGljZSggdGV4dCxcblx0XHRcdFx0eyB0eXBlOiAnc25hY2tiYXInLCAuLi5vcHRpb25zIH0gKTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbIGhhc0NvcGllZCBdICk7XG5cblx0cmV0dXJuIHNldEhhc0NvcGllZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU3VjY2Vzc05vdGljZTsiLCJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IGdldEZvcm1GaWVsZHMgPSAoIGJsb2NrUGFyc2VyRnVuYywgYmxvY2tzICkgPT4ge1xuXHRibG9ja3MuZm9yRWFjaCggYmxvY2sgPT4ge1xuXHRcdGJsb2NrUGFyc2VyRnVuYyggYmxvY2sgKTtcblxuXHRcdGlmICggYmxvY2suaW5uZXJCbG9ja3MubGVuZ3RoICkge1xuXHRcdFx0Z2V0Rm9ybUZpZWxkcyggYmxvY2tQYXJzZXJGdW5jLCBibG9jay5pbm5lckJsb2NrcyApO1xuXHRcdH1cblx0fSApO1xufTtcblxuY29uc3Qgd2l0aFNlbGVjdEZvcm1GaWVsZHMgPSAoXG5cdGV4Y2x1ZGUgICAgICAgID0gW10sXG5cdHBsYWNlaG9sZGVyICAgID0gZmFsc2UsXG5cdHN1cHByZXNzRmlsdGVyID0gZmFsc2UsXG4pID0+IHNlbGVjdCA9PiB7XG5cblx0bGV0IGZvcm1GaWVsZHMgPSBbXTtcblx0Y29uc3Qgc2tpcEZpZWxkcyA9IFtcblx0XHQnc3VibWl0Jyxcblx0XHQnZm9ybS1icmVhaycsXG5cdFx0J2hlYWRpbmcnLFxuXHRcdCdncm91cC1icmVhaycsXG5cdFx0J2NvbmRpdGlvbmFsJyxcblx0XHQuLi5leGNsdWRlLFxuXHRdO1xuXG5cdGdldEZvcm1GaWVsZHMoIGJsb2NrID0+IHtcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXG5cdFx0XHQmJiBibG9jay5hdHRyaWJ1dGVzLm5hbWVcblx0XHRcdCYmICFza2lwRmllbGRzLmZpbmQoIGZpZWxkID0+IGJsb2NrLm5hbWUuaW5jbHVkZXMoIGZpZWxkICkgKVxuXHRcdCkge1xuXG5cdFx0XHQvKmNvbnN0IGJsb2NrVHlwZSA9IHNlbGVjdCggYmxvY2tzU3RvcmUgKS5nZXRCbG9ja1R5cGUoIGJsb2NrLm5hbWUgKTsqL1xuXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxuXHRcdFx0XHRuYW1lOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzLmxhYmVsIHx8IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcblx0XHRcdFx0dmFsdWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcblx0XHRcdFx0Ly9pY29uOiBibG9ja1R5cGUuaWNvbi5zcmMsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9LCBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKSApO1xuXG5cdGZvcm1GaWVsZHMgPSBwbGFjZWhvbGRlclxuXHQgICAgICAgICAgICAgPyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXG5cdCAgICAgICAgICAgICA6IGZvcm1GaWVsZHM7XG5cblx0cmV0dXJuIHtcblx0XHRmb3JtRmllbGRzOiBzdXBwcmVzc0ZpbHRlciA/IGZvcm1GaWVsZHMgOiBhcHBseUZpbHRlcnMoXG5cdFx0XHQnamV0LmZiLmdldEZvcm1GaWVsZHNCbG9ja3MnLCBmb3JtRmllbGRzICksXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0Rm9ybUZpZWxkczsiLCJpbXBvcnQgQmFzZVBvcG92ZXJJdGVtIGZyb20gJy4vQmFzZVBvcG92ZXJJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBCYXNlRmlsdGVyKCkge1xuXHRCYXNlUG9wb3Zlckl0ZW0uY2FsbCggdGhpcyApO1xufVxuXG5CYXNlRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VQb3BvdmVySXRlbS5wcm90b3R5cGUgKTtcblxuQmFzZUZpbHRlci5wcm90b3R5cGUuZG9jQXJndW1lbnQgICAgICA9IGZhbHNlO1xuQmFzZUZpbHRlci5wcm90b3R5cGUuaGVscCAgICAgICAgICAgICA9IG51bGw7XG5CYXNlRmlsdGVyLnByb3RvdHlwZS5pc1NlcnZlclNpZGUgICAgID0gZmFsc2U7XG5CYXNlRmlsdGVyLnByb3RvdHlwZS5pc0NsaWVudFNpZGUgICAgID0gZmFsc2U7XG5CYXNlRmlsdGVyLnByb3RvdHlwZS5nZXRBcmd1bWVudHNMaXN0ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoICF0aGlzLmRvY0FyZ3VtZW50IHx8ICF0aGlzLmRvY0FyZ3VtZW50Lmxlbmd0aCApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KCB0aGlzLmRvY0FyZ3VtZW50IClcblx0ICAgICAgICAgICAgID8gdGhpcy5kb2NBcmd1bWVudFxuXHQgICAgICAgICAgICAgOiBbIHRoaXMuZG9jQXJndW1lbnQgXTtcblxuXHRjb25zdCByZXNwb25zZSA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IGxpc3RFbGVtZW50IG9mIGxpc3QgKSB7XG5cdFx0c3dpdGNoICggbGlzdEVsZW1lbnQgKSB7XG5cdFx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0Y2FzZSBTdHJpbmc6XG5cdFx0XHRcdHJlc3BvbnNlLnB1c2goIF9fKCAnU3RyaW5nJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0Y2FzZSBOdW1iZXI6XG5cdFx0XHRcdHJlc3BvbnNlLnB1c2goIF9fKCAnTnVtYmVyJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdhcnJheSc6XG5cdFx0XHRjYXNlIEFycmF5OlxuXHRcdFx0XHRyZXNwb25zZS5wdXNoKCBfXyggJ0FycmF5JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdhbnknOlxuXHRcdFx0XHRyZXNwb25zZS5wdXNoKCBfXyggJ0FueXRoaW5nJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3BvbnNlLmpvaW4oICcgfCAnICk7XG59O1xuQmFzZUZpbHRlci5wcm90b3R5cGUuZnVsbEhlbHAgICAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCAhdGhpcy5kb2NBcmd1bWVudCAmJiAhdGhpcy5oZWxwICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgSGVscCA9IHRoaXMuaGVscDtcblx0Y29uc3QgbGlzdCA9IHRoaXMuZ2V0QXJndW1lbnRzTGlzdCgpO1xuXG5cdHJldHVybiA8PlxuXHRcdHsgbGlzdCAmJiA8ZGl2IHN0eWxlPXsge1xuXHRcdFx0bWFyZ2luQm90dG9tOiAnMC41ZW0nLFxuXHRcdH0gfT5cblx0XHRcdHsgX18oICdBcmd1bWVudHM6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxuXHRcdFx0PGNvZGU+eyBsaXN0IH08L2NvZGU+XG5cdFx0PC9kaXY+IH1cblx0XHR7ICdmdW5jdGlvbicgIT09IHR5cGVvZiBIZWxwID8gSGVscCA6IDxIZWxwLz4gfVxuXHQ8Lz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlRmlsdGVyOyIsImltcG9ydCBCYXNlUG9wb3Zlckl0ZW0gZnJvbSAnLi9CYXNlUG9wb3Zlckl0ZW0nO1xuXG5mdW5jdGlvbiBCYXNlTWFjcm8oKSB7XG5cdEJhc2VQb3BvdmVySXRlbS5jYWxsKCB0aGlzICk7XG59XG5cbkJhc2VNYWNyby5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlUG9wb3Zlckl0ZW0ucHJvdG90eXBlICk7XG5cbi8qKlxuICogQ2FuIGJlIHVzZWQgaW4gU2VuZCBFbWFpbCBhY3Rpb24gJiBvdGhlciBhY3Rpb25zLi4uXG4gKi9cbkJhc2VNYWNyby5wcm90b3R5cGUuaXNTZXJ2ZXJTaWRlID0gZmFsc2U7XG5cbi8qKlxuICogQ2FuIGJlIHVzZWQgaW4gQ2FsY3VsYXRlZCBmaWVsZCAmIG90aGVyIGZpZWxkIGF0dHJpYnV0ZXNcbiAqL1xuQmFzZU1hY3JvLnByb3RvdHlwZS5pc0NsaWVudFNpZGUgPSBmYWxzZTtcblxuLyoqXG4gKiBFeC46IEN1cnJlbnREYXRlXG4gKi9cbkJhc2VNYWNyby5wcm90b3R5cGUubmFtZSA9ICcnO1xuXG4vKipcbiAqIFdpdGggbmFtZXNwYWNlXG4gKiBFeC46IENUXG4gKi9cbkJhc2VNYWNyby5wcm90b3R5cGUubmFtZXNwYWNlID0gJ0NUJztcblxuLyoqXG4gKiBAdHlwZSB7bnVsbCB8IHN0cmluZyB8IEZ1bmN0aW9ufVxuICovXG5CYXNlTWFjcm8ucHJvdG90eXBlLmhlbHAgPSBudWxsO1xuXG5CYXNlTWFjcm8ucHJvdG90eXBlLmZ1bGxIZWxwID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5oZWxwO1xufTtcblxuQmFzZU1hY3JvLnByb3RvdHlwZS5mdWxsTmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGAlJHsgdGhpcy5uYW1lc3BhY2UgfTo6JHsgdGhpcy5uYW1lIH0lYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VNYWNybzsiLCJmdW5jdGlvbiBCYXNlUG9wb3Zlckl0ZW0oKSB7XG5cbn1cblxuQmFzZVBvcG92ZXJJdGVtLnByb3RvdHlwZSA9IHtcblx0ZnVsbE5hbWUoKSB7XG5cdH0sXG5cdGZ1bGxIZWxwKCkge1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZVBvcG92ZXJJdGVtOyIsImltcG9ydCBFeHRyYU1hY3JvQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0V4dHJhTWFjcm9Db250ZXh0JztcbmltcG9ydCBCYXNlTWFjcm8gZnJvbSAnLi4vYWJzdHJhY3QvQmFzZU1hY3JvJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGhpc01hY3JvID0gbmV3IEJhc2VNYWNybygpO1xuXG50aGlzTWFjcm8uZnVsbE5hbWUgPSAoKSA9PiAnJXRoaXMlJztcbnRoaXNNYWNyby5mdWxsSGVscCA9ICgpID0+IF9fKFxuXHQnUmV0dXJucyBjdXJyZW50IGZpZWxkIHZhbHVlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXInLFxuKTtcblxuZnVuY3Rpb24gQ2xpZW50U2lkZU1hY3JvcyggeyBjaGlsZHJlbiwgd2l0aFRoaXMgPSBmYWxzZSB9ICkge1xuXHRjb25zdCBleHRyYSA9IHVzZVNlbGVjdChcblx0XHQoIHNlbGVjdCApID0+IHNlbGVjdCggJ2pldC1mb3Jtcy9tYWNyb3MnICkuZ2V0Q2xpZW50TWFjcm9zKCksXG5cdFx0W10sXG5cdCk7XG5cblx0Y29uc3QgdmFsdWUgPSB3aXRoVGhpc1xuXHQgICAgICAgICAgICAgID8geyBleHRyYSwgYWZ0ZXJGaWVsZHM6IFsgdGhpc01hY3JvIF0gfVxuXHQgICAgICAgICAgICAgIDogeyBleHRyYSB9O1xuXG5cdHJldHVybiA8RXh0cmFNYWNyb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB2YWx1ZSB9PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0V4dHJhTWFjcm9Db250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50U2lkZU1hY3JvczsiLCJpbXBvcnQgUG9wb3Zlckl0ZW1NYWNybyBmcm9tICcuL1BvcG92ZXJJdGVtTWFjcm8nO1xuXG5jb25zdCB7XG5cdCAgICAgIENoaWxkcmVuLFxuXHQgICAgICBjbG9uZUVsZW1lbnQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgUGFuZWxCb2R5LFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEdyb3VwSXRlbXNQb3BvdmVyKCB7IHRpdGxlLCBpdGVtcywgY2hpbGRyZW4sIGluaXRpYWxPcGVuIH0gKSB7XG5cdGNvbnN0IGVsZW1lbnRzID0gaXRlbXMubWFwKFxuXHRcdCggaXRlbSwgaW5kZXggKSA9PiA8UG9wb3Zlckl0ZW1NYWNybyBrZXk9eyBpbmRleCB9IGN1cnJlbnQ9eyBpdGVtIH0vPixcblx0KTtcblxuXHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IHRpdGxlIH0gaW5pdGlhbE9wZW49eyBpbml0aWFsT3BlbiB9PlxuXHRcdDx1bCBzdHlsZT17IHtcblx0XHRcdHBhZGRpbmc6ICcwIDAuNWVtJyxcblx0XHR9IH0+XG5cdFx0XHR7IENoaWxkcmVuLm1hcCggZWxlbWVudHMsIGN1cnJlbnQgPT4gY2xvbmVFbGVtZW50KFxuXHRcdFx0XHRjdXJyZW50LFxuXHRcdFx0XHR7fSxcblx0XHRcdFx0Y2hpbGRyZW4sXG5cdFx0XHQpICkgfVxuXHRcdDwvdWw+XG5cdDwvUGFuZWxCb2R5Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBJdGVtc1BvcG92ZXI7IiwiaW1wb3J0IFBvcG92ZXJJdGVtIGZyb20gJy4uL2NvbnRleHQvUG9wb3Zlckl0ZW0nO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIE1hY3JvRmllbGRJdGVtKCB7IG9uQ2xpY2sgfSApIHtcblx0Y29uc3QgZmllbGQgPSB1c2VDb250ZXh0KCBQb3BvdmVySXRlbSApO1xuXG5cdGNvbnN0IHZhbHVlID0gZmllbGQuZnVsbE5hbWVcblx0ICAgICAgICAgICAgICA/IGZpZWxkLmZ1bGxOYW1lKClcblx0ICAgICAgICAgICAgICA6IGAlJHsgZmllbGQudmFsdWUgfSVgO1xuXG5cdHJldHVybiA8QnV0dG9uXG5cdFx0aXNMaW5rXG5cdFx0b25DbGljaz17ICgpID0+IG9uQ2xpY2soIHZhbHVlICkgfVxuXHQ+XG5cdFx0eyB2YWx1ZSB9XG5cdDwvQnV0dG9uPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjcm9GaWVsZEl0ZW07IiwiaW1wb3J0IFBvcG92ZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvUG9wb3ZlckNvbnRleHQnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuXHQgICAgICB1c2VSZWYsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuXHQgICAgICBQb3BvdmVyLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIE1hY3Jvc0J1dHRvblRlbXBsYXRlKCB7XG5cdGNoaWxkcmVuLFxuXHQuLi5wcm9wc1xufSApIHtcblx0Y29uc3QgWyBzaG93UG9wb3Zlciwgc2V0U2hvd1BvcG92ZXIgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBidXR0b25SZWYgICAgICAgICAgICAgICAgICAgICAgID0gdXNlUmVmKCk7XG5cblx0cmV0dXJuIDxQb3BvdmVyQ29udGV4dC5Qcm92aWRlclxuXHRcdHZhbHVlPXsgeyBzaG93UG9wb3Zlciwgc2V0U2hvd1BvcG92ZXIgfSB9XG5cdD5cblx0XHQ8QnV0dG9uXG5cdFx0XHRyZWY9eyBidXR0b25SZWYgfVxuXHRcdFx0aWNvbj17ICdhZG1pbi10b29scycgfVxuXHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcblx0XHRcdGlzU21hbGxcblx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZmItaXMtdGhpY2snIH1cblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93UG9wb3ZlciggcHJldiA9PiAhcHJldiApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+XG5cdFx0eyBzaG93UG9wb3ZlciAmJiAoXG5cdFx0XHQ8UG9wb3ZlclxuXHRcdFx0XHRhbmNob3JSZWY9eyBidXR0b25SZWYuY3VycmVudCB9XG5cdFx0XHRcdHBvc2l0aW9uPXsgJ3RvcC1zdGFydCcgfVxuXHRcdFx0XHRub0Fycm93PXsgZmFsc2UgfVxuXHRcdFx0XHRpc0FsdGVybmF0ZVxuXHRcdFx0XHRvbkZvY3VzT3V0c2lkZT17IGV2ZW50ID0+IHtcblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBXZSBzaG91bGQgc2tpcCBoYW5kbGluZyBpZiBmb2N1c2VkIG5vZGUgaXQncyBub3QgZXF1YWxzXG5cdFx0XHRcdFx0ICogdGhlIGJ1dHRvbiB3aGljaCB0cmlnZ2VycyBwb3BvdmVyXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0aWYgKCBldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBidXR0b25SZWYuY3VycmVudCApIHtcblx0XHRcdFx0XHRcdHNldFNob3dQb3BvdmVyKCBmYWxzZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB9XG5cdFx0XHRcdG9uQ2xvc2U9eyAoKSA9PiBzZXRTaG93UG9wb3ZlciggZmFsc2UgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0PC9Qb3BvdmVyPlxuXHRcdCkgfVxuXHQ8L1BvcG92ZXJDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjcm9zQnV0dG9uVGVtcGxhdGU7IiwiaW1wb3J0IE1hY3Jvc0ZpZWxkc1RlbXBsYXRlIGZyb20gJy4vTWFjcm9zRmllbGRzVGVtcGxhdGUnO1xuaW1wb3J0IE1hY3JvRmllbGRJdGVtIGZyb20gJy4vTWFjcm9GaWVsZEl0ZW0nO1xuaW1wb3J0IHsgdXNlRmllbGRzIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1ibG9ja3MtdG8tYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIE1hY3Jvc0ZpZWxkcygge1xuXHRvbkNsaWNrID0gKCkgPT4ge30sXG5cdHdpdGhDdXJyZW50ID0gZmFsc2UsXG5cdC4uLnByb3BzXG59ICkge1xuXHRjb25zdCBmaWVsZHMgPSB1c2VGaWVsZHMoIHsgZXhjbHVkZUN1cnJlbnQ6ICF3aXRoQ3VycmVudCB9ICk7XG5cblx0cmV0dXJuIDxNYWNyb3NGaWVsZHNUZW1wbGF0ZVxuXHRcdHdpdGhDdXJyZW50PXsgd2l0aEN1cnJlbnQgfVxuXHRcdGZpZWxkcz17IGZpZWxkcyB9XG5cdFx0eyAuLi5wcm9wcyB9XG5cdD5cblx0XHQ8TWFjcm9GaWVsZEl0ZW0gb25DbGljaz17IG9uQ2xpY2sgfS8+XG5cdDwvTWFjcm9zRmllbGRzVGVtcGxhdGU+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NGaWVsZHM7IiwiaW1wb3J0IE1hY3Jvc0J1dHRvblRlbXBsYXRlIGZyb20gJy4vTWFjcm9zQnV0dG9uVGVtcGxhdGUnO1xuaW1wb3J0IEV4dHJhTWFjcm9Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvRXh0cmFNYWNyb0NvbnRleHQnO1xuaW1wb3J0IEdyb3VwSXRlbXNQb3BvdmVyIGZyb20gJy4vR3JvdXBJdGVtc1BvcG92ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gTWFjcm9zRmllbGRzVGVtcGxhdGUoIHtcblx0Y2hpbGRyZW4sXG5cdGZpZWxkcyxcblx0Li4ucHJvcHNcbn0gKSB7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHt7XG5cdCAqIGV4dHJhOiBCYXNlTWFjcm9bXSxcblx0ICogZmlsdGVyczogQmFzZUZpbHRlcltdXG5cdCAqIGJlZm9yZUZpZWxkczogQmFzZVBvcG92ZXJJdGVtW11cblx0ICogYWZ0ZXJGaWVsZHM6IEJhc2VQb3BvdmVySXRlbVtdXG5cdCAqIH19XG5cdCAqL1xuXHRjb25zdCBtYWNyb3MgPSB1c2VDb250ZXh0KCBFeHRyYU1hY3JvQ29udGV4dCApO1xuXG5cdGNvbnN0IGZ1bGxGaWVsZHMgPSBbXG5cdFx0Li4uKFxuXHRcdFx0bWFjcm9zLmJlZm9yZUZpZWxkcyA/PyBbXVxuXHRcdCksXG5cdFx0Li4uZmllbGRzLFxuXHRcdC4uLihcblx0XHRcdG1hY3Jvcy5hZnRlckZpZWxkcyA/PyBbXVxuXHRcdCksXG5cdF07XG5cblx0aWYgKCAhZnVsbEZpZWxkcy5sZW5ndGggJiZcblx0XHQhbWFjcm9zPy5leHRyYT8ubGVuZ3RoICYmXG5cdFx0IW1hY3Jvcz8uZmlsdGVycz8ubGVuZ3RoXG5cdCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxNYWNyb3NCdXR0b25UZW1wbGF0ZSB7IC4uLnByb3BzIH0+XG5cdFx0eyBCb29sZWFuKCBmdWxsRmllbGRzLmxlbmd0aCApICYmIDxHcm91cEl0ZW1zUG9wb3ZlclxuXHRcdFx0dGl0bGU9eyBfXyggJ0ZpZWxkczonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRpdGVtcz17IGZ1bGxGaWVsZHMgfVxuXHRcdFx0aW5pdGlhbE9wZW49eyB0cnVlIH1cblx0XHQ+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L0dyb3VwSXRlbXNQb3BvdmVyPiB9XG5cdFx0eyBCb29sZWFuKCBtYWNyb3M/LmV4dHJhPy5sZW5ndGggKSAmJiA8R3JvdXBJdGVtc1BvcG92ZXJcblx0XHRcdHRpdGxlPXsgX18oICdFeHRyYSBtYWNyb3M6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0aXRlbXM9eyBtYWNyb3MuZXh0cmEgfVxuXHRcdD5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvR3JvdXBJdGVtc1BvcG92ZXI+IH1cblx0XHR7IEJvb2xlYW4oIG1hY3Jvcz8uZmlsdGVycz8ubGVuZ3RoICkgJiYgPEdyb3VwSXRlbXNQb3BvdmVyXG5cdFx0XHR0aXRsZT17IF9fKCAnRmlsdGVyczonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRpdGVtcz17IG1hY3Jvcy5maWx0ZXJzIH1cblx0XHQ+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L0dyb3VwSXRlbXNQb3BvdmVyPiB9XG5cdDwvTWFjcm9zQnV0dG9uVGVtcGxhdGU+O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hY3Jvc0ZpZWxkc1RlbXBsYXRlOyIsImltcG9ydCBQb3BvdmVySXRlbSBmcm9tICcuLi9jb250ZXh0L1BvcG92ZXJJdGVtJztcbmltcG9ydCBCYXNlUG9wb3Zlckl0ZW0gZnJvbSAnLi4vYWJzdHJhY3QvQmFzZVBvcG92ZXJJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBAcGFyYW0gcm9vdDAgICAgICAgICAge0Jhc2VQb3BvdmVySXRlbX1cbiAqIEBwYXJhbSByb290MC5jdXJyZW50XG4gKiBAcGFyYW0gcm9vdDAuY2hpbGRyZW5cbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBQb3BvdmVySXRlbU1hY3JvKCB7IGN1cnJlbnQsIGNoaWxkcmVuIH0gKSB7XG5cdGNvbnN0IFsgc2hvd0hlbHAsIHNldFNob3dIZWxwIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRpZiAoICEoXG5cdFx0Y3VycmVudCBpbnN0YW5jZW9mIEJhc2VQb3BvdmVySXRlbVxuXHQpICkge1xuXHRcdHJldHVybiA8bGk+XG5cdFx0XHQ8UG9wb3Zlckl0ZW0uUHJvdmlkZXIgdmFsdWU9eyBjdXJyZW50IH0+XG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0PC9Qb3BvdmVySXRlbS5Qcm92aWRlcj5cblx0XHQ8L2xpPjtcblx0fVxuXG5cdGNvbnN0IE1hY3JvSGVscCA9IGN1cnJlbnQuZnVsbEhlbHAuYmluZCggY3VycmVudCApO1xuXG5cdHJldHVybiA8bGk+XG5cdFx0PFBvcG92ZXJJdGVtLlByb3ZpZGVyIHZhbHVlPXsgY3VycmVudCB9PlxuXHRcdFx0PGRpdiBzdHlsZT17IHtcblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0Z2FwOiAnMC42ZW0nLFxuXHRcdFx0fSB9PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRcdFx0aWNvbj17IHNob3dIZWxwXG5cdFx0XHRcdFx0ICAgICAgID8gJ2Fycm93LWRvd24nXG5cdFx0XHRcdFx0ICAgICAgIDogJ2Fycm93LXJpZ2h0JyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYi1pcy10aGljaycgfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93SGVscCggcHJldiA9PiAhcHJldiApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsgc2hvd0hlbHAgJiYgPE1hY3JvSGVscC8+IH1cblx0XHQ8L1BvcG92ZXJJdGVtLlByb3ZpZGVyPlxuXHQ8L2xpPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3Zlckl0ZW1NYWNybzsiLCJpbXBvcnQgRXh0cmFNYWNyb0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9FeHRyYU1hY3JvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VSZXF1ZXN0RmllbGRzIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcblxuZnVuY3Rpb24gU2VydmVyU2lkZU1hY3JvcyggeyBjaGlsZHJlbiB9ICkge1xuXHRjb25zdCByZXF1ZXN0RmllbGRzID0gdXNlUmVxdWVzdEZpZWxkcygpO1xuXG5cdHJldHVybiA8RXh0cmFNYWNyb0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7IGFmdGVyRmllbGRzOiByZXF1ZXN0RmllbGRzIH0gfT5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9FeHRyYU1hY3JvQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclNpZGVNYWNyb3M7IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgRXh0cmFNYWNyb0NvbnRleHQgICAgPSBjcmVhdGVDb250ZXh0KCBbXSApO1xuXG5leHBvcnQgZGVmYXVsdCBFeHRyYU1hY3JvQ29udGV4dDsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCBQb3BvdmVyQ29udGV4dCAgICA9IGNyZWF0ZUNvbnRleHQoIGZhbHNlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJDb250ZXh0OyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IFBvcG92ZXJJdGVtICAgICAgID0gY3JlYXRlQ29udGV4dCggeyBuYW1lOiAnJyB9ICk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJJdGVtOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEFkZERheUZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAnYWRkRGF5Jztcblx0dGhpcy5kb2NBcmd1bWVudCAgPSBOdW1iZXI7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyhcblx0XHRgQWRkcyB0aGUgcGFzc2VkIG51bWJlciBvZiBkYXlzIHZpYSBhbiBhcmd1bWVudCB0byBhIG1hY3JvIHRoYXQgcmV0dXJucyBhIGRhdGUgb3IgYSB0aW1lc3RhbXAuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCk7XG59XG5cbkFkZERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGREYXlGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQWRkTW9udGhGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ2FkZE1vbnRoJztcblx0dGhpcy5kb2NBcmd1bWVudCAgPSBOdW1iZXI7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyhcblx0XHRgQWRkcyB0aGUgcGFzc2VkIG51bWJlciBvZiBtb250aHMgdmlhIGFuIGFyZ3VtZW50IHRvIGEgbWFjcm8gdGhhdCByZXR1cm5zIGEgZGF0ZSBvciBhIHRpbWVzdGFtcC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KTtcbn1cblxuQWRkTW9udGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTW9udGhGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQWRkWWVhckZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAnYWRkWWVhcic7XG5cdHRoaXMuZG9jQXJndW1lbnQgID0gTnVtYmVyO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oXG5cdFx0YEFkZHMgdGhlIHBhc3NlZCBudW1iZXIgb2YgeWVhcnMgdGhyb3VnaCBhbiBhcmd1bWVudCB0byBhIG1hY3JvIHRoYXQgcmV0dXJucyBhIGRhdGUgb3IgYSB0aW1lc3RhbXAuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCk7XG59XG5cbkFkZFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkWWVhckZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBGYWxsYmFja0ZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAnaWZFbXB0eSc7XG5cdHRoaXMuZG9jQXJndW1lbnQgID0gJ2FueSc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyhcblx0XHRgSWYgdGhlIG1hY3JvIHJldHVybnMgYW4gZW1wdHkgdmFsdWUsIHRoZW4gdGhlIGZpbHRlciByZXR1cm5zIHRoZSB2YWx1ZSBwYXNzZWQgaW4gdGhlIGFyZ3VtZW50YCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCk7XG59XG5cbkZhbGxiYWNrRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEZhbGxiYWNrRmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIExlbmd0aEZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAnbGVuZ3RoJztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKFxuXHRcdGBSZXR1cm5zIHRoZSBsZW5ndGggb2YgYSBzdHJpbmcgb3IgYXJyYXlgLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KTtcbn1cblxuTGVuZ3RoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aEZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdERheUZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAnc3ViRGF5Jztcblx0dGhpcy5kb2NBcmd1bWVudCAgPSBOdW1iZXI7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyhcblx0XHRgU3VidHJhY3RzIHRoZSBudW1iZXIgb2YgZGF5cyBieSBhcmd1bWVudCBmcm9tIGEgbWFjcm8gdGhhdCByZXR1cm5zIGEgZGF0ZSBvciB0aW1lc3RhbXAuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCk7XG59XG5cblN1YnRyYWN0RGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0RGF5RmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFN1YnRyYWN0TW9udGhGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ3N1Yk1vbnRoJztcblx0dGhpcy5kb2NBcmd1bWVudCAgPSBOdW1iZXI7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyhcblx0XHRgU3VidHJhY3RzIHRoZSBudW1iZXIgb2YgbW9udGhzIGJ5IGFyZ3VtZW50IGZyb20gYSBtYWNybyB0aGF0IHJldHVybnMgYSBkYXRlIG9yIHRpbWVzdGFtcC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KTtcbn1cblxuU3VidHJhY3RNb250aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1vbnRoRmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFN1YnRyYWN0WWVhckZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAnc3ViWWVhcic7XG5cdHRoaXMuZG9jQXJndW1lbnQgID0gTnVtYmVyO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oXG5cdFx0YFN1YnRyYWN0cyB0aGUgbnVtYmVyIG9mIHllYXJzIGJ5IGFyZ3VtZW50IGZyb20gYSBtYWNybyB0aGF0IHJldHVybnMgYSBkYXRlIG9yIHRpbWVzdGFtcC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KTtcbn1cblxuU3VidHJhY3RZZWFyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0WWVhckZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBUb0RhdGVGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ3RvRGF0ZSc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSAoKSA9PiA8PlxuXHRcdHsgX18oXG5cdFx0XHRgR2V0cyB0aGUgdGltZXN0YW1wIGZyb20gdGhlIG1hY3JvIGFuZCBmb3JtYXRzIGl0IGFjY29yZGluZyB0byB0aGUgZm9ybWF0IG9mIHRoZSBEYXRlIEZpZWxkLmAsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSB9XG5cdFx0PGhyLz5cblx0XHR7IF9fKCAnRXhhbXBsZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyB9XG5cdFx0PGNvZGU+MjAyMi0wMi0yNDwvY29kZT5cblx0PC8+O1xufVxuXG5Ub0RhdGVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EYXRlRmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFRvRGF0ZVRpbWVGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ3RvRGF0ZVRpbWUnO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gKCkgPT4gPD5cblx0XHR7IF9fKFxuXHRcdFx0YEdldHMgdGhlIHRpbWVzdGFtcCBmcm9tIHRoZSBtYWNybyBhbmQgZm9ybWF0cyBpdCBhY2NvcmRpbmcgdG8gdGhlIGZvcm1hdCBvZiB0aGUgRGF0ZXRpbWUgRmllbGQuYCxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpIH1cblx0XHQ8aHIvPlxuXHRcdHsgX18oICdFeGFtcGxlOicsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnIH1cblx0XHQ8Y29kZT4yMDIyLTAyLTI0VDA0OjI1PC9jb2RlPlxuXHQ8Lz47XG59XG5cblRvRGF0ZVRpbWVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EYXRlVGltZUZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBUb1RpbWVGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ3RvVGltZSc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSAoKSA9PiA8PlxuXHRcdHsgX18oXG5cdFx0XHRgR2V0cyB0aGUgdGltZXN0YW1wIGZyb20gdGhlIG1hY3JvIGFuZCBmb3JtYXRzIGl0IGFjY29yZGluZyB0byB0aGUgZm9ybWF0IG9mIHRoZSBUaW1lIEZpZWxkLmAsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSB9XG5cdFx0PGhyLz5cblx0XHR7IF9fKCAnRXhhbXBsZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyB9XG5cdFx0PGNvZGU+MDQ6MjU8L2NvZGU+XG5cdDwvPjtcbn1cblxuVG9UaW1lRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvVGltZUZpbHRlcjsiLCIvKipcbiAqIEBwYXJhbSBpbml0aWFsICAgICB7U3RyaW5nfVxuICogQHBhcmFtIG5hbWUgICAgICAgIHtTdHJpbmd9XG4gKiBAcGFyYW0gbm9kZUVsZW1lbnQge0hUTUxJbnB1dEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGluc2VydE1hY3JvKCBpbml0aWFsLCBuYW1lLCBub2RlRWxlbWVudCApIHtcblx0Y29uc3Qgc3RhcnQgPSBub2RlRWxlbWVudC5zZWxlY3Rpb25TdGFydCxcblx0ICAgICAgZW5kICAgPSBub2RlRWxlbWVudC5zZWxlY3Rpb25FbmQ7XG5cblx0aW5pdGlhbCA9IGluaXRpYWwgPz8gJyc7XG5cblx0bGV0IHN0YXJ0U3RyaW5nID0gaW5pdGlhbC5zbGljZSggMCwgc3RhcnQgKTtcblx0Y29uc3QgZW5kU3RyaW5nID0gaW5pdGlhbC5zbGljZSggZW5kICk7XG5cblx0c3RhcnRTdHJpbmcgPSBzdGFydFN0cmluZyArIG5hbWU7XG5cblx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdG5vZGVFbGVtZW50LmZvY3VzKCk7XG5cdFx0bm9kZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzdGFydFN0cmluZy5sZW5ndGg7XG5cdFx0bm9kZUVsZW1lbnQuc2VsZWN0aW9uRW5kICAgPSBzdGFydFN0cmluZy5sZW5ndGg7XG5cdH0gKTtcblxuXHRyZXR1cm4gc3RhcnRTdHJpbmcgKyBlbmRTdHJpbmc7XG59XG5cbmV4cG9ydCB7IGluc2VydE1hY3JvIH07IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCB7IGluc2VydE1hY3JvIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VSZWYsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gdXNlSW5zZXJ0TWFjcm8oIGF0dHJOYW1lICkge1xuXHRjb25zdCBbIGF0dHJpYnV0ZXMsIHVwZGF0ZUF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IGluaXRpYWwgPSBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdID8/ICcnO1xuXG5cdGNvbnN0IGlucHV0ICA9IHVzZVJlZigpO1xuXHRjb25zdCB1cGRhdGUgPSBtYWNybyA9PiB7XG5cdFx0dXBkYXRlQXR0cmlidXRlcygge1xuXHRcdFx0WyBhdHRyTmFtZSBdOiBpbnNlcnRNYWNybyggaW5pdGlhbCwgbWFjcm8sIGlucHV0LmN1cnJlbnQgKSxcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIFsgaW5wdXQsIHVwZGF0ZSBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnNlcnRNYWNybzsiLCJpbXBvcnQgQmFzZU1hY3JvIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VNYWNybyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEN1cnJlbnREYXRlTWFjcm8oKSB7XG5cdEJhc2VNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5uYW1lICAgICAgICAgPSAnQ3VycmVudERhdGUnO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5mdWxsSGVscCA9ICgpID0+IDw+XG5cdFx0eyBfXyggJ1JldHVybnMgdGhlIGN1cnJlbnQgdGltZXN0YW1wLiBSZXBsYWNpbmcnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0eyAnICcgfVxuXHRcdDxjb2RlPkRhdGUubm93KCk8L2NvZGU+XG5cdDwvPjtcbn1cblxuQ3VycmVudERhdGVNYWNyby5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnREYXRlTWFjcm87IiwiaW1wb3J0IEJhc2VNYWNybyBmcm9tICcuLi9hYnN0cmFjdC9CYXNlTWFjcm8nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBEYXlJblNlY01hY3JvKCkge1xuXHRCYXNlTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubmFtZSAgICAgICAgID0gJ0RheV9Jbl9TZWMnO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oICdOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIG9uZSBkYXknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbn1cblxuRGF5SW5TZWNNYWNyby5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IERheUluU2VjTWFjcm87IiwiaW1wb3J0IEJhc2VNYWNybyBmcm9tICcuLi9hYnN0cmFjdC9CYXNlTWFjcm8nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBNaW5JblNlY01hY3JvKCkge1xuXHRCYXNlTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubmFtZSAgICAgICAgID0gJ01pbl9Jbl9TZWMnO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oXG5cdFx0J051bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gb25lIG1pbnV0ZScsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpO1xufVxuXG5NaW5JblNlY01hY3JvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTWluSW5TZWNNYWNybzsiLCJpbXBvcnQgQmFzZU1hY3JvIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VNYWNybyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIE1vbnRoSW5TZWNNYWNybygpIHtcblx0QmFzZU1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLm5hbWUgICAgICAgICA9ICdNb250aF9Jbl9TZWMnO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oICdOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIG9uZSBtb250aCcsICdqZXQtZm9ybS1idWlsZGVyJyApO1xufVxuXG5Nb250aEluU2VjTWFjcm8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZU1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBNb250aEluU2VjTWFjcm87IiwiaW1wb3J0IEJhc2VNYWNybyBmcm9tICcuLi9hYnN0cmFjdC9CYXNlTWFjcm8nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBZZWFySW5TZWNNYWNybygpIHtcblx0QmFzZU1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLm5hbWUgICAgICAgICA9ICdZZWFyX0luX1NlYyc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyggJ051bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gb25lIHllYXInLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbn1cblxuWWVhckluU2VjTWFjcm8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZU1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBZZWFySW5TZWNNYWNybzsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRyZWdpc3Rlck1hY3JvKCBpdGVtcywgaXNDbGllbnQgPSB0cnVlICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMucmVnaXN0ZXJNYWNybyxcblx0XHRcdGl0ZW1zLFxuXHRcdFx0aXNDbGllbnQsXG5cdFx0fTtcblx0fSxcblxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyTWFjcm86ICdSRUdJU1RFUl9NQUNSTycsXG5cdHJlZ2lzdGVyRmlsdGVyOiAnUkVHSVNURVJfRklMVEVSJyxcbn07XG5cblxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgQmFzZU1hY3JvIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VNYWNybyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0WyBjb25zdGFudHMucmVnaXN0ZXJNYWNybyBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IHsgaXRlbXMsIGlzQ2xpZW50IH0gPSBhY3Rpb247XG5cdFx0Y29uc3QgbWFjcm9zICAgICAgICAgICAgICA9IEFycmF5LmlzQXJyYXkoIGl0ZW1zICkgPyBpdGVtcyA6IFsgaXRlbXMgXTtcblxuXHRcdGZvciAoIGNvbnN0IG1hY3JvIG9mIG1hY3JvcyApIHtcblx0XHRcdGlmICggbWFjcm8gaW5zdGFuY2VvZiBCYXNlTWFjcm8gKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnXl5eIEludmFsaWQgbWFjcm8gaXRlbSBeXl4nICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc0NsaWVudCApIHtcblx0XHRcdHN0YXRlLmNsaWVudE1hY3Jvcy5wdXNoKCAuLi5tYWNyb3MgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRzdGF0ZS5zZXJ2ZXJNYWNyb3MucHVzaCggLi4ubWFjcm9zICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxufTsiLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5jb25zdCB7IGNyZWF0ZVJlZHV4U3RvcmUgfSA9IHdwLmRhdGE7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHV4U3RvcmUoICdqZXQtZm9ybXMvbWFjcm9zJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnMsXG59ICk7XG4iLCJpbXBvcnQgZGlzcGF0Y2hlcnMgZnJvbSAnLi9kaXNwYXRjaGVycyc7XG5pbXBvcnQgQ3VycmVudERhdGVNYWNybyBmcm9tICcuLi9tYWNyb3MvQ3VycmVudERhdGVNYWNybyc7XG5pbXBvcnQgTWluSW5TZWNNYWNybyBmcm9tICcuLi9tYWNyb3MvTWluSW5TZWNNYWNybyc7XG5pbXBvcnQgTW9udGhJblNlY01hY3JvIGZyb20gJy4uL21hY3Jvcy9Nb250aEluU2VjTWFjcm8nO1xuaW1wb3J0IERheUluU2VjTWFjcm8gZnJvbSAnLi4vbWFjcm9zL0RheUluU2VjTWFjcm8nO1xuaW1wb3J0IFllYXJJblNlY01hY3JvIGZyb20gJy4uL21hY3Jvcy9ZZWFySW5TZWNNYWNybyc7XG5pbXBvcnQgQWRkRGF5RmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvQWRkRGF5RmlsdGVyJztcbmltcG9ydCBBZGRNb250aEZpbHRlciBmcm9tICcuLi9maWx0ZXJzL0FkZE1vbnRoRmlsdGVyJztcbmltcG9ydCBBZGRZZWFyRmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvQWRkWWVhckZpbHRlcic7XG5pbXBvcnQgRmFsbGJhY2tGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9GYWxsYmFja0ZpbHRlcic7XG5pbXBvcnQgTGVuZ3RoRmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvTGVuZ3RoRmlsdGVyJztcbmltcG9ydCBUb0RhdGVGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9Ub0RhdGVGaWx0ZXInO1xuaW1wb3J0IFRvRGF0ZVRpbWVGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9Ub0RhdGVUaW1lRmlsdGVyJztcbmltcG9ydCBUb1RpbWVGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9Ub1RpbWVGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0RGF5RmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvU3VidHJhY3REYXlGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0TW9udGhGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9TdWJ0cmFjdE1vbnRoRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdFllYXJGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9TdWJ0cmFjdFllYXJGaWx0ZXInO1xuXG4vKipcbiAqXG4gKiBAdHlwZSB7e1xuICogbWFjcm9zOiBCYXNlTWFjcm9bXSxcbiAqIGZpbHRlcnM6IEJhc2VGaWx0ZXJbXVxuICogfX1cbiAqL1xuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcblx0bWFjcm9zOiBbXG5cdFx0bmV3IEN1cnJlbnREYXRlTWFjcm8oKSxcblx0XHRuZXcgTWluSW5TZWNNYWNybygpLFxuXHRcdG5ldyBEYXlJblNlY01hY3JvKCksXG5cdFx0bmV3IE1vbnRoSW5TZWNNYWNybygpLFxuXHRcdG5ldyBZZWFySW5TZWNNYWNybygpLFxuXHRdLFxuXHRmaWx0ZXJzOiBbXG5cdFx0bmV3IEZhbGxiYWNrRmlsdGVyKCksXG5cdFx0bmV3IExlbmd0aEZpbHRlcigpLFxuXHRcdG5ldyBBZGREYXlGaWx0ZXIoKSxcblx0XHRuZXcgQWRkTW9udGhGaWx0ZXIoKSxcblx0XHRuZXcgQWRkWWVhckZpbHRlcigpLFxuXHRcdG5ldyBTdWJ0cmFjdERheUZpbHRlcigpLFxuXHRcdG5ldyBTdWJ0cmFjdE1vbnRoRmlsdGVyKCksXG5cdFx0bmV3IFN1YnRyYWN0WWVhckZpbHRlcigpLFxuXHRcdG5ldyBUb0RhdGVGaWx0ZXIoKSxcblx0XHRuZXcgVG9EYXRlVGltZUZpbHRlcigpLFxuXHRcdG5ldyBUb1RpbWVGaWx0ZXIoKSxcblx0XSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XG5cdGNvbnN0IGNhbGxiYWNrID0gZGlzcGF0Y2hlcnNbIGFjdGlvbj8udHlwZSBdO1xuXG5cdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKCBzdGF0ZSwgYWN0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59IiwiY29uc3Qgc2VsZWN0b3JzID0ge1xuXHRnZXRDbGllbnRNYWNyb3MoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5tYWNyb3MuZmlsdGVyKFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcGFyYW0gbWFjcm8ge0Jhc2VNYWNyb31cblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gKCBtYWNybyApIHtcblx0XHRcdFx0cmV0dXJuIG1hY3JvLmlzQ2xpZW50U2lkZTtcblx0XHRcdH0sXG5cdFx0KTtcblx0fSxcblx0Z2V0U2VydmVyTWFjcm9zKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUubWFjcm9zLmZpbHRlcihcblx0XHRcdC8qKlxuXHRcdFx0ICogQHBhcmFtIG1hY3JvIHtCYXNlTWFjcm99XG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uICggbWFjcm8gKSB7XG5cdFx0XHRcdHJldHVybiBtYWNyby5pc1NlcnZlclNpZGU7XG5cdFx0XHR9LFxuXHRcdCk7XG5cdH0sXG5cdGdldENsaWVudEZpbHRlcnMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5maWx0ZXJzLmZpbHRlcihcblx0XHRcdC8qKlxuXHRcdFx0ICogQHBhcmFtIG1hY3JvIHtCYXNlRmlsdGVyfVxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiAoIG1hY3JvICkge1xuXHRcdFx0XHRyZXR1cm4gbWFjcm8uaXNDbGllbnRTaWRlO1xuXHRcdFx0fSxcblx0XHQpO1xuXHR9LFxuXHRnZXRTZXJ2ZXJGaWx0ZXJzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuZmlsdGVycy5maWx0ZXIoXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwYXJhbSBtYWNybyB7QmFzZUZpbHRlcn1cblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gKCBtYWNybyApIHtcblx0XHRcdFx0cmV0dXJuIG1hY3JvLmlzU2VydmVyU2lkZTtcblx0XHRcdH0sXG5cdFx0KTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Li4uc2VsZWN0b3JzLFxufTsiLCJjb25zdCB3YWl0Rm9yRWRpdG9yID0gYXN5bmMgKCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGNvbnN0IHBvc3RUeXBlID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0Q3VycmVudFBvc3RUeXBlKCk7XG5cdFx0XHRpZiAocG9zdFR5cGUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH1cblx0XHR9LCAxMDApO1xuXHR9KTtcbn07XG5cbmNvbnN0IGdldE1ldGEgPSAoKSA9PiB7XG5cdGNvbnN0IHsgc2VsZWN0IH0gPSB3cC5kYXRhO1xuXHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICk7XG59O1xuXG5jb25zdCBlZGl0TWV0YSA9ICggbmFtZSwgb2JqZWN0VmFsdWUgKSA9PiB7XG5cdGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHdwLmRhdGE7XG5cblx0Y29uc3QgeyBlZGl0UG9zdCB9ID0gZGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcblx0Y29uc3QgZm9ybUJ1aWxkZXJNZXRhID0gZ2V0TWV0YSgpO1xuXG5cdGVkaXRQb3N0KCB7XG5cdFx0bWV0YTogKFxuXHRcdFx0e1xuXHRcdFx0XHQuLi5mb3JtQnVpbGRlck1ldGEsXG5cdFx0XHRcdFsgbmFtZSBdOiBKU09OLnN0cmluZ2lmeSggb2JqZWN0VmFsdWUgKSxcblx0XHRcdH1cblx0XHQpLFxuXHR9ICk7XG59O1xuXG5jb25zdCBnZXRBY3RpdmVBY3Rpb25zID0gYWN0aW9ucyA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlID0gW107XG5cblx0Zm9yICggY29uc3QgWyBhY3Rpb25JZCwgeyBhY3RpdmUgPSBmYWxzZSB9IF0gb2YgT2JqZWN0LmVudHJpZXMoIGFjdGlvbnMgKSApIHtcblx0XHRpZiAoICEgYWN0aXZlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHJlc3BvbnNlLnB1c2goICsgYWN0aW9uSWQgKTtcblx0fVxuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldEdhdGV3YXlzQWN0aW9ucyA9ICgpID0+IHtcblx0Y29uc3QgZm9ybUJ1aWxkZXJNZXRhID0gZ2V0TWV0YSgpO1xuXG5cdGxldCBnYXRld2F5cyA9IHt9LFxuXHRcdGFjdGlvbnMgPSBbXTtcblxuXHR0cnkge1xuXHRcdGdhdGV3YXlzID0gSlNPTi5wYXJzZSggZm9ybUJ1aWxkZXJNZXRhLl9qZl9nYXRld2F5cyApO1xuXHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0aWYgKCAxID09PSBnYXRld2F5cy5sYXN0X21pZ3JhdGUgKSB7XG5cdFx0dGhyb3cgJ21pZ3JhdGVkJztcblx0fVxuXG5cdHRyeSB7XG5cdFx0YWN0aW9ucyA9IEpTT04ucGFyc2UoIGZvcm1CdWlsZGVyTWV0YS5famZfYWN0aW9ucyApO1xuXHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0cmV0dXJuIFsgZ2F0ZXdheXMgXTtcblx0fVxuXG5cdHJldHVybiBbIGdhdGV3YXlzLCBhY3Rpb25zIF07XG59O1xuXG5jb25zdCBtaWdyYXRlID0gKCBnYXRld2F5cywgYWN0aW9ucyApID0+IHtcblx0Y29uc3Qgb25TdWNjZXNzID0gZ2V0QWN0aXZlQWN0aW9ucyggZ2F0ZXdheXMubm90aWZpY2F0aW9uc19zdWNjZXNzID8/IHt9ICk7XG5cdGNvbnN0IG9uRmFpbGVkID0gZ2V0QWN0aXZlQWN0aW9ucyggZ2F0ZXdheXMubm90aWZpY2F0aW9uc19mYWlsZWQgPz8ge30gKTtcblx0Y29uc3Qgb25CZWZvcmUgPSBnZXRBY3RpdmVBY3Rpb25zKCBnYXRld2F5cy5ub3RpZmljYXRpb25zX2JlZm9yZSA/PyB7fSApO1xuXHRjb25zdCB1c2VSZWRpcmVjdCA9IGdhdGV3YXlzLnVzZV9zdWNjZXNzX3JlZGlyZWN0ID8/IGZhbHNlO1xuXG5cdGxldCBoYXNSZWRpcmVjdCA9IGZhbHNlO1xuXG5cdGlmICggISBvblN1Y2Nlc3MubGVuZ3RoICYmICEgb25GYWlsZWQubGVuZ3RoICYmICEgb25CZWZvcmUubGVuZ3RoICYmICEgdXNlUmVkaXJlY3QgKSB7XG5cdFx0dGhyb3cgJ25vdGhpbmdfdG9fbWlncmF0ZSc7XG5cdH1cblxuXHRyZXR1cm4gYWN0aW9ucy5tYXAoIGFjdGlvbiA9PiB7XG5cdFx0YWN0aW9uLmV2ZW50cyA9IGFjdGlvbi5ldmVudHMgPz8gW107XG5cblx0XHRpZiAoIG9uU3VjY2Vzcy5pbmNsdWRlcyggYWN0aW9uLmlkICkgKSB7XG5cdFx0XHRhY3Rpb24uZXZlbnRzLnB1c2goICdHQVRFV0FZLlNVQ0NFU1MnICk7XG5cdFx0fVxuXHRcdGlmICggb25GYWlsZWQuaW5jbHVkZXMoIGFjdGlvbi5pZCApICkge1xuXHRcdFx0YWN0aW9uLmV2ZW50cy5wdXNoKCAnR0FURVdBWS5GQUlMRUQnICk7XG5cdFx0fVxuXHRcdGlmICggb25CZWZvcmUuaW5jbHVkZXMoIGFjdGlvbi5pZCApICkge1xuXHRcdFx0YWN0aW9uLmV2ZW50cy5wdXNoKCAnREVGQVVMVC5QUk9DRVNTJyApO1xuXHRcdH1cblx0XHRpZiAoIHVzZVJlZGlyZWN0ICYmICEgaGFzUmVkaXJlY3QgJiYgJ3JlZGlyZWN0X3RvX3BhZ2UnID09PSBhY3Rpb24udHlwZSApIHtcblx0XHRcdGFjdGlvbi5ldmVudHMucHVzaCggJ0dBVEVXQVkuU1VDQ0VTUycgKTtcblx0XHRcdGhhc1JlZGlyZWN0ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWN0aW9uO1xuXHR9ICk7XG59O1xuXG5jb25zdCBydW5FdmVudCA9IGFzeW5jICgpID0+IHtcblx0YXdhaXQgd2FpdEZvckVkaXRvcigpO1xuXG5cdGxldCBnYXRld2F5cyA9IHt9LCBhY3Rpb25zID0gW107XG5cblx0dHJ5IHtcblx0XHRbIGdhdGV3YXlzID0ge30sIGFjdGlvbnMgPSBbXSBdID0gZ2V0R2F0ZXdheXNBY3Rpb25zKCk7XG5cdH0gY2F0Y2ggKCBlcnJvciApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRnYXRld2F5cy5sYXN0X21pZ3JhdGUgPSAxO1xuXHRlZGl0TWV0YSggJ19qZl9nYXRld2F5cycsIGdhdGV3YXlzICk7XG5cblx0Y29uc3Qgd2l0aENvbmRpdGlvbnMgPSBbXTtcblx0dHJ5IHtcblx0XHR3aXRoQ29uZGl0aW9ucy5wdXNoKCAuLi5taWdyYXRlKCBnYXRld2F5cywgYWN0aW9ucyApICk7XG5cdH0gY2F0Y2ggKCBlcnJvciApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlZGl0TWV0YSggJ19qZl9hY3Rpb25zJywgd2l0aENvbmRpdGlvbnMgKTtcbn07XG5cbndwLmRvbVJlYWR5KCgpID0+IHJ1bkV2ZW50KCkpOyIsImltcG9ydCBHcm91cGVkU2VsZWN0Q29udHJvbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcblx0ICAgICAgQ3VzdG9tU2VsZWN0Q29udHJvbCxcblx0ICAgICAgQ2FyZCxcblx0ICAgICAgQ2FyZEJvZHksXG5cdCAgICAgIENhcmRIZWFkZXIsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIEF2YWlsYWJsZU1hcEZpZWxkUHJlc2V0KCB7XG5cdGZpZWxkc01hcCxcblx0ZmllbGQsXG5cdGluZGV4LFxuXHR2YWx1ZSxcblx0b25DaGFuZ2VWYWx1ZSxcblx0aXNNYXBGaWVsZFZpc2libGUsXG59ICkge1xuXG5cdGxldCBjdXJyZW50VmFsID0gbnVsbDtcblxuXHRpZiAoICEgZmllbGRzTWFwICkge1xuXHRcdGZpZWxkc01hcCA9IHt9O1xuXHR9XG5cblx0Y3VycmVudFZhbCA9IGZpZWxkc01hcFsgZmllbGQgXTtcblxuXHRpZiAoICEgY3VycmVudFZhbCB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIGN1cnJlbnRWYWwgKSB7XG5cdFx0Y3VycmVudFZhbCA9IHt9O1xuXHR9XG5cblx0Y29uc3QgQXZhaWxhYmxlRmllbGRXcmFwcGVyID0gKCB7IGZpZWxkOiBmaWVsZExvY2FsLCBuYW1lLCBpbmRleDogaW5kZXhMb2NhbCwgZkluZGV4LCBjaGlsZHJlbiB9ICkgPT4gPENhcmRcblx0XHRrZXk9eyBmaWVsZExvY2FsICsgbmFtZSArIGluZGV4TG9jYWwgKyBmSW5kZXggfVxuXHRcdHNpemU9eyAnZXh0cmFTbWFsbCcgfVxuXHRcdHN0eWxlPXsgeyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9IH1cblx0PlxuXHRcdDxDYXJkSGVhZGVyPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdqZXQtbGFiZWwtb3ZlcmZsb3cnPnsgZmllbGRMb2NhbCB9PC9zcGFuPlxuXHRcdDwvQ2FyZEhlYWRlcj5cblx0XHQ8Q2FyZEJvZHlcblx0XHRcdGtleT17IGZpZWxkTG9jYWwgKyBuYW1lICsgaW5kZXhMb2NhbCArIGZJbmRleCB9XG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cblx0XHQ+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L0NhcmRCb2R5PlxuXHQ8L0NhcmQ+O1xuXG5cdGZ1bmN0aW9uIEF2YWlsYWJsZUZpZWxkV3JhcHBlckZ1bmMoIHsgZmllbGQ6IGZpZWxkTG9jYWwsIG5hbWUsIGluZGV4OiBpbmRleExvY2FsLCBmSW5kZXggfSwgY2hpbGRyZW4gKSB7XG5cdFx0cmV0dXJuIDxDYXJkXG5cdFx0XHRrZXk9eyBmaWVsZExvY2FsICsgbmFtZSArIGluZGV4TG9jYWwgKyBmSW5kZXggfVxuXHRcdFx0c2l6ZT17ICdleHRyYVNtYWxsJyB9XG5cdFx0XHRzdHlsZT17IHsgbWFyZ2luQm90dG9tOiAnMTBweCcgfSB9XG5cdFx0PlxuXHRcdFx0PENhcmRIZWFkZXI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0namV0LWxhYmVsLW92ZXJmbG93Jz57IGZpZWxkTG9jYWwgfTwvc3Bhbj5cblx0XHRcdDwvQ2FyZEhlYWRlcj5cblx0XHRcdDxDYXJkQm9keVxuXHRcdFx0XHRrZXk9eyBmaWVsZExvY2FsICsgbmFtZSArIGluZGV4TG9jYWwgKyBmSW5kZXggfVxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cblx0XHRcdD5cblx0XHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHQ8L0NhcmRCb2R5PlxuXHRcdDwvQ2FyZD47XG5cdH1cblxuXHRyZXR1cm4gPEZyYWdtZW50IGtleT17IGBtYXBfZmllbGRfcHJlc2V0XyR7IGZpZWxkICsgaW5kZXggfWAgfT5cblxuXHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiAqL31cblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcubWFwX2ZpZWxkcy5tYXAoICggZGF0YSwgZkluZGV4ICkgPT4ge1xuXHRcdFx0Y29uc3QgcHJvcHMgPSB7IGZpZWxkLCBuYW1lOiBkYXRhLm5hbWUsIGluZGV4LCBmSW5kZXggfTtcblxuXHRcdFx0Y29uc3QgdW5pcUtleSA9ICdjb250cm9sXycgKyBmaWVsZCArIGRhdGEubmFtZSArIGluZGV4ICsgZkluZGV4O1xuXG5cdFx0XHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XG5cdFx0XHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxuXHRcdFx0XHRcdFx0QXZhaWxhYmxlRmllbGRXcmFwcGVyRnVuYyggcHJvcHMsIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5ICsgJ1RleHRDb250cm9sJyB9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xuXHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxuXHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0XHQvPiApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcblx0XHRcdFx0XHRcdDxBdmFpbGFibGVGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9IGtleT17IHVuaXFLZXkgfT5cblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9BdmFpbGFibGVGaWVsZFdyYXBwZXI+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0Y2FzZSAnY3VzdG9tX3NlbGVjdCc6XG5cdFx0XHRcdFx0cmV0dXJuICggaXNNYXBGaWVsZFZpc2libGUoIHZhbHVlLCBkYXRhLCBmaWVsZCApICYmXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XG5cdFx0XHRcdFx0XHRcdDxDdXN0b21TZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHsgc2VsZWN0ZWRJdGVtIH0gKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IHNlbGVjdGVkSXRlbS5rZXk7XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBkYXRhLm9wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5rZXkgPT09IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9BdmFpbGFibGVGaWVsZFdyYXBwZXI+ICk7XG5cdFx0XHRcdGNhc2UgJ2dyb3VwZWRfc2VsZWN0Jzpcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcblx0XHRcdFx0XHRcdDxBdmFpbGFibGVGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9IGtleT17IHVuaXFLZXkgfT5cblx0XHRcdFx0XHRcdFx0PEdyb3VwZWRTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj4gKTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9ICkgfVxuXHQ8L0ZyYWdtZW50Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhaWxhYmxlTWFwRmllbGRQcmVzZXQ7IiwiaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSAnLi93aXRoUHJlc2V0JztcbmltcG9ydCBHbG9iYWxGaWVsZFByZXNldCBmcm9tICcuL0dsb2JhbEZpZWxkUHJlc2V0JztcbmltcG9ydCBNYXBGaWVsZFByZXNldCBmcm9tICcuL01hcEZpZWxkUHJlc2V0JztcbmltcG9ydCBDb250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0XG5cdGZyb20gJy4uL2NvbnRleHQvQ29udHJvbFByZXNldFJlc3RyaWN0aW9uQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IFRvZ2dsZUNvbnRyb2wsIEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxubGV0IER5bmFtaWNQcmVzZXQgPSBmdW5jdGlvbiAoIHtcblx0dmFsdWUsXG5cdG9uQ2hhbmdlLFxuXHRwYXJzZVZhbHVlLFxuXHRleGNsdWRlT3B0aW9ucyxcblx0aXNDdXJyZW50RmllbGRWaXNpYmxlLFxuXHRpc1Zpc2libGUsXG59ICkge1xuXG5cdGNvbnN0IHBvc2l0aW9uICAgPSAnZHluYW1pYyc7XG5cdGNvbnN0IHN0YXRlVmFsdWUgPSBwYXJzZVZhbHVlKCB2YWx1ZSApO1xuXG5cdGNvbnN0IHJlc3RyaWN0aW9uQ29udGV4dCA9IHVzZUNvbnRleHQoIENvbnRyb2xQcmVzZXRSZXN0cmljdGlvbkNvbnRleHQgKTtcblxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCBuZXdWYWx1ZSwgbmFtZSApID0+IHtcblx0XHRvbkNoYW5nZSggKCkgPT4gSlNPTi5zdHJpbmdpZnkoXG5cdFx0XHR7IC4uLnN0YXRlVmFsdWUsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9LFxuXHRcdCkgKTtcblx0fTtcblxuXHRyZXR1cm4gPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsgNCB9PlxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5nbG9iYWxfZmllbGRzLm1hcChcblx0XHRcdCggZGF0YSwgaW5kZXggKSA9PiA8R2xvYmFsRmllbGRQcmVzZXRcblx0XHRcdFx0a2V5PXsgYGN1cnJlbnRfZmllbGRfJHsgZGF0YS5uYW1lIH1fJHsgaW5kZXggfWAgfVxuXHRcdFx0XHR2YWx1ZT17IHN0YXRlVmFsdWUgfVxuXHRcdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdFx0ZGF0YT17IGRhdGEgfVxuXHRcdFx0XHRleGNsdWRlT3B0aW9ucz17IGV4Y2x1ZGVPcHRpb25zIH1cblx0XHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0XHRpc1Zpc2libGU9eyBpc1Zpc2libGUgfVxuXHRcdFx0XHRwb3NpdGlvbj17IHBvc2l0aW9uIH1cblx0XHRcdC8+ICkgfVxuXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLm1hcF9maWVsZHMubWFwKFxuXHRcdFx0KCBkYXRhLCBpbmRleCApID0+IDxNYXBGaWVsZFByZXNldFxuXHRcdFx0XHRrZXk9eyBgY3VycmVudF9maWVsZF8keyBkYXRhLm5hbWUgfV8keyBpbmRleCB9YCB9XG5cdFx0XHRcdGN1cnJlbnRTdGF0ZT17IHN0YXRlVmFsdWUgfVxuXHRcdFx0XHR2YWx1ZT17IHN0YXRlVmFsdWVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgXSB9XG5cdFx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0XHRkYXRhPXsgZGF0YSB9XG5cdFx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cblx0XHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cblx0XHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XG5cdFx0XHQvPiApIH1cblx0XHR7IHJlc3RyaWN0aW9uQ29udGV4dD8uc2hvdyAmJiA8VG9nZ2xlQ29udHJvbFxuXHRcdFx0bGFiZWw9eyBfXyggJ1Jlc3RyaWN0IGFjY2VzcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGhlbHA9eyAoXG5cdFx0XHRcdCAgICAgICBzdGF0ZVZhbHVlLnJlc3RyaWN0ZWQgPz8gdHJ1ZVxuXHRcdFx0ICAgICAgICkgPyBfXyhcblx0XHRcdFx0YFdpbGwgc2V0IGRlZmF1bHQgdmFsdWUgZnJvbSBwcmVzZXQgb25seSBmb3IgdXNlcnMgd2hvIGFsbG93ZWQgdG8gZWRpdCB0aGlzIHZhbHVlYCxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSA6IF9fKFxuXHRcdFx0XHRgQWx3YXlzIHNldCBkZWZhdWx0IHZhbHVlIGZyb20gcHJlc2V0LiBNYWtlIHN1cmUgaXQgY2FuJ3QgYmUgYWNjaWRlbnRhbGx5IGNoYW5nZWQgZnJvbSBmb3JtIEFjdGlvbnNgLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH1cblx0XHRcdGNoZWNrZWQ9eyBzdGF0ZVZhbHVlLnJlc3RyaWN0ZWQgPz8gdHJ1ZSB9XG5cdFx0XHRvbkNoYW5nZT17IHJlc3RyaWN0ZWQgPT4gb25DaGFuZ2UoIHByZXYgPT4gSlNPTi5zdHJpbmdpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHRcdHJlc3RyaWN0ZWQ6IHJlc3RyaWN0ZWQgPyB1bmRlZmluZWQgOiByZXN0cmljdGVkLFxuXHRcdFx0XHR9LFxuXHRcdFx0KSApIH1cblx0XHQvPiB9XG5cdDwvRmxleD47XG59O1xuXG5EeW5hbWljUHJlc2V0ID0gd2l0aFByZXNldCggRHluYW1pY1ByZXNldCApO1xuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUHJlc2V0OyIsImltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tICcuLi8uLi9hY3Rpb24tbW9kYWwvY29tcG9uZW50cy9BY3Rpb25Nb2RhbCc7XG5cbmNvbnN0IHtcblx0ICAgICAgUGF0aCxcblx0ICAgICAgU1ZHLFxuXHQgICAgICBCYXNlQ29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIEZpZWxkV2l0aFByZXNldCgge1xuXHRjaGlsZHJlbiA9IG51bGwsXG5cdE1vZGFsRWRpdG9yLFxuXHR0cmlnZ2VyQ2xhc3NlcyA9IFtdLFxuXHRiYXNlQ29udHJvbFByb3BzID0ge30sXG59ICkge1xuXG5cdGNvbnN0IFsgbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0Y29uc3QgY2hhbmdlTW9kYWxTdGF0ZSA9ICgpID0+IHtcblx0XHRzZXRNb2RhbFN0YXRlKCBwcmV2ID0+ICFwcmV2ICk7XG5cdH07XG5cdGNvbnN0IGNsYXNzTmFtZXMgICAgICAgPSBbXG5cdFx0J2pldC1mb3JtLWR5bmFtaWMtcHJlc2V0X190cmlnZ2VyJyxcblx0XHQuLi50cmlnZ2VyQ2xhc3Nlcyxcblx0XS5qb2luKCAnICcgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWR5bmFtaWMtcHJlc2V0XCJcblx0XHRcdHsgLi4uYmFzZUNvbnRyb2xQcm9wcyB9XG5cdFx0PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMsanN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovIH1cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lcyB9XG5cdFx0XHRcdG9uQ2xpY2s9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cblx0XHRcdD48U1ZHIHZpZXdCb3g9XCIwIDAgNTQgNjRcIiBmaWxsPVwibm9uZVwiXG5cdFx0XHQgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PFBhdGhcblx0XHRcdFx0ZD1cIk00Mi42Mzk2IDI2LjQzNDdDMzcuODY4MiAyNy4zNDM2IDMyLjU2NjYgMjguMDI1MiAyNy4xODk0IDI4LjAyNTJDMjEuODEyMSAyOC4wMjUyIDE2LjQzNDggMjcuMzQzNiAxMS43MzkxIDI2LjQzNDdDNi45Njc3NCAyNS40NTAyIDMuMTgwOTMgMjMuODU5NyAwLjM3ODY4IDIxLjk2NjNMMC4zNzg2OCAyOC4wMjUyQzAuMzc4NjggMjkuNTM5OSAxLjU5MDQ2IDMxLjEzMDQgMy43ODY4MiAzMi40MTc5QzUuOTgzMTcgMzMuNzA1NCA5LjQ2NzA0IDM0LjkxNzIgMTMuNjMyNSAzNS41OTg4QzE3Ljc5OCAzNi4yODA1IDIyLjExNSAzNi44MTA2IDI3LjE4OTQgMzYuODEwNkMzMi4yNjM3IDM2LjgxMDYgMzYuNjU2NCAzNi41MDc3IDQwLjc0NjIgMzUuNTk4OEM0NC44MzU5IDM0LjY5IDQ4LjMxOTggMzMuNzA1NCA1MC41MTYyIDMyLjQxNzlDNTIuNzEyNSAzMS4xMzA0IDU0IDI5LjUzOTkgNTQgMjguMDI1Mkw1NCAyMS45NjYzQzUxLjEyMiAyMy44NTk3IDQ3LjMzNTIgMjUuNDUwMiA0Mi42Mzk2IDI2LjQzNDdaTTQyLjYzOTYgNTMuNTQ4NEMzNy44NjgyIDU0LjUzMjkgMzIuNTY2NiA1NS4xMzg4IDI3LjE4OTQgNTUuMTM4OEMyMS44MTIxIDU1LjEzODggMTYuNDM0OCA1NC41MzI5IDExLjczOTEgNTMuNTQ4NEM3LjA0MzQ4IDUyLjU2MzggMy4xODA5MyA1MS4wNDkxIDAuMzc4NjgyIDQ5LjE1NTZMMC4zNzg2ODIgNTUuMTM4OEMwLjM3ODY4MyA1Ni43MjkzIDEuNTkwNDYgNTguMzE5NyAzLjc4NjgyIDU5LjUzMTVDNi4zNjE4NiA2MC44MTkgOS40NjcwNSA2Mi4xMDY2IDEzLjYzMjUgNjIuNzEyNUMxNy43MjIzIDYzLjY5NyAyMi4xMTUgNjQgMjcuMTg5NCA2NEMzMi4yNjM3IDY0IDM2LjY1NjQgNjMuNjk3IDQwLjc0NjIgNjIuNzEyNUM0NC44MzU5IDYxLjgwMzYgNDguMzE5OCA2MC44MTkgNTAuNTE2MiA1OS41MzE1QzUyLjcxMjUgNTcuOTQxMSA1NCA1Ni43MjkzIDU0IDU0LjgzNTlMNTQgNDguODUyN0M1MS4xMjIgNTEuMDQ5MSA0Ny4zMzUyIDUyLjI2MDggNDIuNjM5NiA1My41NDg0Wk00Mi42Mzk2IDM5Ljk5MTVDMzcuODY4MiA0MC45MDA0IDMyLjU2NjYgNDEuNTgyIDI3LjE4OTQgNDEuNTgyQzIxLjgxMjEgNDEuNTgyIDE2LjQzNDggNDAuOTAwNCAxMS43MzkxIDM5Ljk5MTVDNi45Njc3NCAzOS4wMDcgMy4xODA5MyAzNy40OTIyIDAuMzc4NjgxIDM1LjU5ODhMMC4zNzg2ODEgNDEuNTgyQzAuMzc4NjgxIDQzLjE3MjUgMS41OTA0NiA0NC42ODcyIDMuNzg2ODIgNDUuOTc0N0M2LjM2MTg1IDQ3LjI2MjIgOS40NjcwNSA0OC40NzQgMTMuNjMyNSA0OS4xNTU2QzE3LjcyMjMgNTAuMDY0NSAyMi4xMTUgNTAuMzY3NCAyNy4xODk0IDUwLjM2NzRDMzIuMjYzNyA1MC4zNjc0IDM2LjY1NjQgNTAuMDY0NSA0MC43NDYyIDQ5LjE1NTZDNDQuODM1OSA0OC4xNzExIDQ4LjMxOTggNDcuMjYyMiA1MC41MTYyIDQ1Ljk3NDdDNTIuNzEyNSA0NC4zODQzIDU0IDQzLjE3MjUgNTQgNDEuNTgyTDU0IDM1LjU5ODhDNTEuMTIyIDM3LjQ5MjIgNDcuMzM1MiAzOS4wMDcgNDIuNjM5NiAzOS45OTE1Wk00MC40NDMyIDIuMTIzMzdDMzYuMzUzNSAxLjEzODc5IDMxLjg4NSAwLjgzNTg0OCAyNi44ODY0IDAuODM1ODQ5QzIxLjg4NzggMC44MzU4NDkgMTcuNDE5NCAxLjEzODc5IDEzLjI1MzkgMi4xMjMzN0M5LjA4ODM2IDMuMTA3OTQgNS42ODAyMiA0LjAxNjc4IDMuNDgzODcgNS4zMDQzQzEuMjg3NTEgNi41OTE4MSAtMy40NzgyZS0wNiA4LjEwNjU0IC0zLjMzOTE2ZS0wNiA5LjY5N0wtMi45NTUxM2UtMDYgMTQuMDg5N0MtMi44MTYwOWUtMDYgMTUuNjgwMiAxLjI4NzUyIDE3LjI3MDYgMy40ODM4NyAxOC41NTgyQzYuMDU4OTEgMTkuNzY5OSA5LjE2NDEgMjEuMDU3NSAxMy4yNTM5IDIxLjY2MzNDMTcuMzQzNiAyMi4yNjkyIDIxLjgxMjEgMjIuOTUwOSAyNi44ODY0IDIyLjk1MDlDMzEuOTYwNyAyMi45NTA5IDM2LjM1MzUgMjIuOTUwOSA0MC40NDMyIDIyLjM0NUM0NC41MzMgMjEuNzM5MSA0OC4wMTY5IDIwLjQ1MTYgNTAuMjEzMiAxOS4xNjRDNTIuNzEyNSAxNy41NzM2IDU0IDE1Ljk4MzEgNTQgMTQuMzkyN0w1NCA5Ljk5OTk1QzU0IDguNDA5NDggNTIuNzEyNSA2LjgxOTAyIDUwLjUxNjIgNS42MDcyNEM0OC4zMTk4IDQuMzk1NDYgNDQuNTMzIDIuNzI5MjYgNDAuNDQzMiAyLjEyMzM3WlwiXG5cdFx0XHRcdGZpbGw9XCIjN0U4OTkzXCIvPjwvU1ZHPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9CYXNlQ29udHJvbD5cblx0XHR7IG1vZGFsU3RhdGUgJiYgKFxuXHRcdFx0PEFjdGlvbk1vZGFsXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsgY2hhbmdlTW9kYWxTdGF0ZSB9XG5cdFx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XG5cdFx0XHRcdHRpdGxlPXsgJ0VkaXQgUHJlc2V0JyB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgbW9kYWxQcm9wcyA9PiA8TW9kYWxFZGl0b3Jcblx0XHRcdFx0XHR7IC4uLm1vZGFsUHJvcHMgfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHQ8L0FjdGlvbk1vZGFsPlxuXHRcdCkgfVxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkV2l0aFByZXNldDsiLCJjb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEdsb2JhbEZpZWxkUHJlc2V0KCB7XG5cdGRhdGEsXG5cdHZhbHVlLFxuXHRpbmRleCxcblx0b25DaGFuZ2VWYWx1ZSxcblx0aXNWaXNpYmxlLFxuXHRleGNsdWRlT3B0aW9ucyA9IG9wdGlvbnMgPT4gb3B0aW9ucyxcblx0cG9zaXRpb24sXG59ICkge1xuXG5cdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiAoIGlzVmlzaWJsZSggdmFsdWUsIGRhdGEsIHBvc2l0aW9uICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGRhdGEubmFtZSApXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxuXHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdHJldHVybiAoIGlzVmlzaWJsZSggdmFsdWUsIGRhdGEsIHBvc2l0aW9uICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyggZGF0YS5vcHRpb25zICkgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWVbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbEZpZWxkUHJlc2V0OyIsImltcG9ydCBHcm91cGVkU2VsZWN0Q29udHJvbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sJztcbmltcG9ydCB7XG5cdFRleHRDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRDdXN0b21TZWxlY3RDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBNYXBGaWVsZFByZXNldCgge1xuXHRkYXRhLFxuXHR2YWx1ZSxcblx0aW5kZXgsXG5cdGN1cnJlbnRTdGF0ZSxcblx0b25DaGFuZ2VWYWx1ZSxcblx0aXNDdXJyZW50RmllbGRWaXNpYmxlLFxufSApIHtcblxuXHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCxcblx0XHRcdFx0XHRcdFx0XHQnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxuXHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyAnY29udHJvbF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCxcblx0XHRcdFx0XHRcdFx0XHQnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxuXHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0Y2FzZSAnY3VzdG9tX3NlbGVjdCc6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Q3VzdG9tU2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWN1c3RvbS1zZWxlY3QtY29udHJvbFwiXG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggeyBzZWxlY3RlZEl0ZW0gfSApID0+IHtcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBzZWxlY3RlZEl0ZW0ua2V5O1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHQnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgZGF0YS5vcHRpb25zLmZpbmQoXG5cdFx0XHRcdFx0XHRcdG9wdGlvbiA9PiBvcHRpb24ua2V5ID09PSB2YWx1ZSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0Y2FzZSAnZ3JvdXBlZF9zZWxlY3QnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExhYmVsPnsgZGF0YS5sYWJlbCB9PC9MYWJlbD5cblx0XHRcdFx0XHQ8R3JvdXBlZFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCxcblx0XHRcdFx0XHRcdFx0XHQnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcEZpZWxkUHJlc2V0OyIsImltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gJy4vRHluYW1pY1ByZXNldCc7XG5pbXBvcnQge1xuXHRTdGlja3lNb2RhbEFjdGlvbnMsXG5cdE1vZGFsRm9vdGVyU3R5bGUsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZnVuY3Rpb24gUHJlc2V0QnV0dG9uKCB7XG5cdHZhbHVlLFxuXHRvbkNoYW5nZSxcblx0dGl0bGUsXG59ICkge1xuXG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIHN0YXRlVmFsdWUsIHNldFN0YXRlVmFsdWUgXSA9IHVzZVN0YXRlKCB2YWx1ZSApO1xuXG5cdGNvbnN0IHVwZGF0ZUNsaWNrID0gKCkgPT4ge1xuXHRcdG9uQ2hhbmdlKCBzdGF0ZVZhbHVlICk7XG5cdFx0c2V0U2hvd01vZGFsKCBmYWxzZSApO1xuXHR9O1xuXG5cdGNvbnN0IGNhbmNlbENsaWNrID0gKCkgPT4ge1xuXHRcdHNldFNob3dNb2RhbCggZmFsc2UgKTtcblx0fTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8QnV0dG9uXG5cdFx0XHRpY29uPXsgJ2RhdGFiYXNlJyB9XG5cdFx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxuXHRcdFx0aXNTbWFsbFxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYi1pcy10aGljaycgfVxuXHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dNb2RhbCggdHJ1ZSApIH1cblx0XHQvPlxuXHRcdHsgc2hvd01vZGFsICYmIDxNb2RhbFxuXHRcdFx0c2l6ZT1cIm1lZGl1bVwiXG5cdFx0XHR0aXRsZT17IHRpdGxlID8/IF9fKCAnRWRpdCBQcmVzZXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldFNob3dNb2RhbCggZmFsc2UgKSB9XG5cdFx0XHRjbGFzc05hbWU9eyBNb2RhbEZvb3RlclN0eWxlIH1cblx0XHQ+XG5cdFx0XHQ8RHluYW1pY1ByZXNldFxuXHRcdFx0XHRrZXk9eyAnZHluYW1pY19rZXlfcHJlc2V0JyB9XG5cdFx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgc2V0U3RhdGVWYWx1ZSB9XG5cdFx0XHQvPlxuXHRcdFx0PFN0aWNreU1vZGFsQWN0aW9ucz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB1cGRhdGVDbGljayB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IF9fKCAnVXBkYXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0b25DbGljaz17IGNhbmNlbENsaWNrIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdDYW5jZWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9TdGlja3lNb2RhbEFjdGlvbnM+XG5cdFx0PC9Nb2RhbD4gfVxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXNldEJ1dHRvbjsiLCJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiB3aXRoUHJlc2V0KCBXcmFwcGVkQ29tcG9uZW50ICkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHRyZXR1cm4gZnVuY3Rpb24gSmV0Rm9ybVByZXNldEVkaXRvciggcHJvcHMgKSB7XG5cblx0XHRjb25zdCBwYXJzZVZhbHVlID0gKCkgPT4ge1xuXHRcdFx0bGV0IHZhbCA9IHt9O1xuXG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgcHJvcHMudmFsdWUgKSB7XG5cdFx0XHRcdHZhbCA9IHsgLi4ucHJvcHMudmFsdWUgfTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBwcm9wcy52YWx1ZSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhbCA9IEpTT04ucGFyc2UoIHByb3BzLnZhbHVlICk7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWwgKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKCBleGNlcHRpb24gKSB7XG5cdFx0XHRcdFx0dmFsID0ge307XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhbC5qZXRfcHJlc2V0ID0gdHJ1ZTtcblxuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cblx0XHRjb25zdCBpc1Zpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XG5cdFx0XHRyZXR1cm4gKCAoIGRhdGEucG9zaXRpb24gJiYgcG9zaXRpb24gPT09IGRhdGEucG9zaXRpb24gKVxuXHRcdFx0XHR8fCAhIGRhdGEucG9zaXRpb24gfHwgJ3F1ZXJ5X3ZhcicgIT09IGN1cnJlbnRTdGF0ZS5mcm9tICkgJiYgaXNHbG9iYWxWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgaXNHbG9iYWxWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEgKSA9PiB7XG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcblx0XHRcdFx0c3dpdGNoICggZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xuXHRcdFx0XHRcdGNhc2UgJ3F1ZXJ5X3Zhcic6XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQoICdwb3N0JyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS5wb3N0X2Zyb20gKVxuXHRcdFx0XHRcdFx0XHR8fCAoICd1c2VyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS51c2VyX2Zyb20gKVxuXHRcdFx0XHRcdFx0XHR8fCAoICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUuZnJvbSApXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnByZXNldC5lZGl0b3IuY3VzdG9tLmNvbmRpdGlvbicsIGZhbHNlLCBkYXRhLmN1c3RvbV9jb25kaXRpb24sIGN1cnJlbnRTdGF0ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBpc0N1cnJlbnRGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XG5cblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGRhdGEucG9zaXRpb24gJiYgcG9zaXRpb24gIT09IGRhdGEucG9zaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZSAmJiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXNNYXBGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgZmllbGQgKSA9PiB7XG5cblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmICEgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZSAmJiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0fTtcblxuXHRcdGNvbnN0IGV4Y2x1ZGVPcHRpb25zID0gKCBzZWxlY3RPcHRpb25zICkgPT4ge1xuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsgLi4uc2VsZWN0T3B0aW9ucyBdO1xuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKCAoIG9wdGlvbiwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdGlmICggcHJvcHMuZXhjbHVkZVNvdXJjZXMgJiYgcHJvcHMuZXhjbHVkZVNvdXJjZXMuaW5jbHVkZXMoIG9wdGlvbi52YWx1ZSApICkge1xuXHRcdFx0XHRcdG9wdGlvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHR9O1xuXG5cdFx0cmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50XG5cdFx0XHRrZXk9J3dyYXBwZWQtcHJlc2V0LWVkaXRvcidcblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0cGFyc2VWYWx1ZT17IHBhcnNlVmFsdWUgfVxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cblx0XHRcdGlzTWFwRmllbGRWaXNpYmxlPXsgaXNNYXBGaWVsZFZpc2libGUgfVxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxuXHRcdC8+O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQ7XG4iLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENvbnRyb2xQcmVzZXRSZXN0cmljdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCB7fSApO1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0OyIsImltcG9ydCBpc1ByZXNldFN0cmluZyBmcm9tICcuL2lzUHJlc2V0U3RyaW5nJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBodW1hblJlYWRhYmxlUHJlc2V0KCB2YWx1ZSwgaGlnaGxpZ2h0ID0gJ2NvZGUnICkge1xuXHR2YWx1ZSA9IHZhbHVlID8/ICcnO1xuXG5cdGlmICggIWlzUHJlc2V0U3RyaW5nKCB2YWx1ZSApICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGNvbnN0IHBhcnNlZFByZXNldCA9IEpTT04ucGFyc2UoIHZhbHVlICk7XG5cdGNvbnN0IGxhYmVsICAgICAgICA9IF9fKCAnUHJlc2V0IGZyb20nLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcblx0Y29uc3QgZnJvbSAgICAgICAgID0gcGFyc2VkUHJlc2V0Py5mcm9tID8/ICcoZW1wdHkpJztcblxuXHRsZXQgaGlnaGxpZ2h0ZWRGcm9tO1xuXG5cdHN3aXRjaCAoIGhpZ2hsaWdodCApIHtcblx0XHRjYXNlICdjb2RlJzpcblx0XHRcdGhpZ2hsaWdodGVkRnJvbSA9IGA8Y29kZT4keyBmcm9tIH08L2NvZGU+YDtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2InOlxuXHRcdFx0aGlnaGxpZ2h0ZWRGcm9tID0gYDxiPiR7IGZyb20gfTwvYj5gO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGxhYmVsLFxuXHRcdGhpZ2hsaWdodGVkRnJvbSxcblx0XS5qb2luKCAnICcgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHVtYW5SZWFkYWJsZVByZXNldDsiLCJmdW5jdGlvbiBpc1ByZXNldFN0cmluZyggcHJlc2V0ICkge1xuXHRsZXQgcGFyc2VkUHJlc2V0O1xuXHR0cnkge1xuXHRcdHBhcnNlZFByZXNldCA9IEpTT04ucGFyc2UoIHByZXNldCApO1xuXHR9XG5cdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuICEhcGFyc2VkUHJlc2V0Py5qZXRfcHJlc2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1ByZXNldFN0cmluZzsiLCJpbXBvcnQgeyBzcHJpbnRmLCBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRGcmFnbWVudCxcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdENhcmQsXG5cdENhcmRCb2R5LFxuXHRDYXJkSGVhZGVyLFxuXHRUb2dnbGVDb250cm9sLFxuXHRGbGV4LFxuXHRGbGV4SXRlbSxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFJlcGVhdGVyV2l0aFN0YXRlKCB7XG5cdGNoaWxkcmVuLFxuXHRJdGVtSGVhZGluZyxcblx0cmVwZWF0ZXJDbGFzc2VzID0gW10sXG5cdHJlcGVhdGVySXRlbUNsYXNzZXMgPSBbXSxcblx0bmV3SXRlbSxcblx0YWRkTmV3QnV0dG9uTGFiZWwgPSAnQWRkIE5ldycsXG5cdGl0ZW1zID0gW10sXG5cdGlzU2F2ZUFjdGlvbixcblx0b25TYXZlSXRlbXMsXG5cdG9uVW5Nb3VudCxcblx0b25BZGROZXdJdGVtLFxuXHRvblJlbW92ZUl0ZW0sXG5cdGhlbHAgPSB7XG5cdFx0aGVscFNvdXJjZToge30sXG5cdFx0aGVscFZpc2libGU6ICgpID0+IGZhbHNlLFxuXHRcdGhlbHBLZXk6ICcnLFxuXHR9LFxuXHRhZGRpdGlvbmFsQ29udHJvbHMgPSBudWxsLFxufSApIHtcblxuXHRjb25zdCBjbGFzc05hbWVzICAgICA9IFtcblx0XHQnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50Jyxcblx0XHQuLi5yZXBlYXRlckNsYXNzZXMsXG5cdF0uam9pbiggJyAnICk7XG5cdGNvbnN0IGl0ZW1DbGFzc05hbWVzID0gW1xuXHRcdCdqZXQtZm9ybS1idWlsZGVyX19yZXBlYXRlci1jb21wb25lbnQtaXRlbScsXG5cdFx0Li4ucmVwZWF0ZXJJdGVtQ2xhc3Nlcyxcblx0XS5qb2luKCAnICcgKTtcblxuXHRjb25zdCBwYXJzZWRJdGVtcyA9ICgpID0+IHtcblx0XHRpZiAoIGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4gaXRlbXMubWFwKCBpdGVtID0+IHtcblx0XHRcdFx0aXRlbS5fX3Zpc2libGUgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0Li4ubmV3SXRlbSxcblx0XHRcdFx0X192aXNpYmxlOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRdO1xuXG5cdH07XG5cblx0Y29uc3QgWyBpdGVtc0RhdGEsIHNldEl0ZW1zRGF0YSBdID0gdXNlU3RhdGUoIFtdICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwYXJzZWRJdGVtcygpICk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbXSApO1xuXG5cdGNvbnN0IFsgaXNTYWZlRGVsZXRpbmcsIHNldFNhZmVEZWxldGluZyBdID0gdXNlU3RhdGUoIHRydWUgKTtcblxuXHRjb25zdCBjaGFuZ2VDdXJyZW50SXRlbSA9ICggdmFsdWVUb1NldCwgaW5kZXggKSA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblxuXHRcdFx0cHJldkNsb25lWyBpbmRleCBdID0ge1xuXHRcdFx0XHQuLi5wcmV2WyBpbmRleCBdLFxuXHRcdFx0XHQuLi52YWx1ZVRvU2V0LFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IG9uU2F2ZURlbGV0aW5nID0gaW5kZXggPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuXHRcdHJldHVybiBjb25maXJtKFxuXHRcdFx0c3ByaW50Zihcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVkIC0gaXRlbSBpbmRleFxuXHRcdFx0XHRfXyhcblx0XHRcdFx0XHRgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSBpdGVtICVkP2AsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHQpLFxuXHRcdFx0XHRpbmRleCArIDEsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlT3B0aW9uID0gKCBpbmRleCApID0+IHtcblx0XHRpZiAoXG5cdFx0XHRpc1NhZmVEZWxldGluZyAmJiAhb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgfHxcblx0XHRcdG9uUmVtb3ZlSXRlbSAmJiAhb25SZW1vdmVJdGVtKCBpbmRleCwgaXRlbXNEYXRhIClcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXHRcdFx0cHJldkNsb25lLnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgYWRkTmV3SXRlbSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0aWYgKCBvbkFkZE5ld0l0ZW0gKSB7XG5cdFx0XHRvbkFkZE5ld0l0ZW0oIHZhbHVlLCBpdGVtc0RhdGEgKTtcblx0XHR9XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IFtcblx0XHRcdC4uLnByZXYsIHtcblx0XHRcdFx0Li4udmFsdWUsXG5cdFx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XSApO1xuXHR9O1xuXG5cdGNvbnN0IGNsb25lSXRlbSA9ICggaW5kZXggKSA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSAgICAgICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXHRcdFx0Y29uc3QgWyBiZWZvcmUsIGFmdGVyIF0gPSBbXG5cdFx0XHRcdHByZXZDbG9uZS5zbGljZSggMCwgaW5kZXggKyAxICksXG5cdFx0XHRcdHByZXZDbG9uZS5zbGljZSggaW5kZXggKyAxICksXG5cdFx0XHRdO1xuXG5cdFx0XHRyZXR1cm4gWyAuLi5iZWZvcmUsIHByZXZDbG9uZVsgaW5kZXggXSwgLi4uYWZ0ZXIgXTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgbW92ZVJlcGVhdGVySXRlbSA9ICggeyBvbGRJbmRleCwgbmV3SW5kZXggfSApID0+IHtcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXG5cdFx0XHRbXG5cdFx0XHRcdHByZXZDbG9uZVsgbmV3SW5kZXggXSxcblx0XHRcdFx0cHJldkNsb25lWyBvbGRJbmRleCBdLFxuXHRcdFx0XSA9IFsgcHJldkNsb25lWyBvbGRJbmRleCBdLCBwcmV2Q2xvbmVbIG5ld0luZGV4IF0gXTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgbW92ZVVwICAgPSAoIGluZGV4ICkgPT4ge1xuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggLSAxIH0gKTtcblx0fTtcblx0Y29uc3QgbW92ZURvd24gPSAoIGluZGV4ICkgPT4ge1xuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggKyAxIH0gKTtcblx0fTtcblxuXHRjb25zdCBpc0Rpc2FibGVkRW5kID0gKCBpbmRleCApID0+IHtcblx0XHRyZXR1cm4gIShcblx0XHRcdGluZGV4IDwgaXRlbXNEYXRhLmxlbmd0aCAtIDFcblx0XHQpO1xuXHR9O1xuXHQvKlxuXG5cdCAqL1xuXG5cdGNvbnN0IHRvZ2dsZVZpc2libGUgPSBpbmRleCA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSAgICAgICAgICAgICAgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cdFx0XHRwcmV2Q2xvbmVbIGluZGV4IF0uX192aXNpYmxlID0gIShcblx0XHRcdFx0cHJldkNsb25lWyBpbmRleCBdLl9fdmlzaWJsZVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0LyogZXNsaW50LWRpc2FibGUgbWF4LWRlcHRoICovXG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XG5cdFx0XHRmb3IgKCBjb25zdCBpdGVtc0RhdGFLZXkgaW4gaXRlbXNEYXRhICkge1xuXHRcdFx0XHRmb3IgKCBjb25zdCBpdGVtS2V5IGluIGl0ZW1zRGF0YVsgaXRlbXNEYXRhS2V5IF0gKSB7XG5cdFx0XHRcdFx0aWYgKCBpdGVtS2V5LnN0YXJ0c1dpdGgoICdfXycgKSApIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSBpdGVtc0RhdGFbIGl0ZW1zRGF0YUtleSBdWyBpdGVtS2V5IF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRvblNhdmVJdGVtcyggaXRlbXNEYXRhICk7XG5cdFx0XHRvblVuTW91bnQoKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XG5cdFx0XHRvblVuTW91bnQoKTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XG5cblx0LyogZXNsaW50LWVuYWJsZSBtYXgtZGVwdGggKi9cblxuXHRjb25zdCBnZXRSZXBlYXRlckl0ZW1JZCA9IGluZGV4ID0+IGBqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtXyR7IGluZGV4IH1gO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBoZWxwU291cmNlLFxuXHRcdCAgICAgIGhlbHBWaXNpYmxlLFxuXHRcdCAgICAgIGhlbHBLZXksXG5cdCAgICAgIH0gPSBoZWxwO1xuXG5cdGNvbnN0IGlzVmlzaWJsZUhlbHAgPSBoZWxwVmlzaWJsZSggaXRlbXNEYXRhICkgJiYgaGVscFNvdXJjZSAmJlxuXHRcdGhlbHBTb3VyY2VbIGhlbHBLZXkgXTtcblxuXHRyZXR1cm4gPGRpdlxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxuXHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyJyB9XG5cdD5cblx0XHR7IGlzVmlzaWJsZUhlbHAgJiYgPHA+eyBoZWxwU291cmNlWyBoZWxwS2V5IF0ubGFiZWwgfTwvcD4gfVxuXG5cdFx0eyAwIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8PlxuXHRcdFx0PEZsZXg+XG5cdFx0XHRcdDxGbGV4SXRlbT5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgaXNTYWZlRGVsZXRpbmcgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRTYWZlRGVsZXRpbmcgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRmxleEl0ZW0+XG5cdFx0XHRcdDxGbGV4SXRlbSBzdHlsZT17IHtcblx0XHRcdFx0XHRmbGV4OiAndW5zZXQnLFxuXHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzFlbScsXG5cdFx0XHRcdH0gfT5cblx0XHRcdFx0XHR7Lyo8QnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0IDxCdXR0b25cblx0XHRcdFx0XHQgaXNTZWNvbmRhcnlcblx0XHRcdFx0XHQgb25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHQgfSB9XG5cdFx0XHRcdFx0ID5cblx0XHRcdFx0XHQgeyBfXyggJ0NvcHkgaXRlbXMgdG8gY2xpcGJvYXJkJywgJ2pldC1mcm9tLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdCA8L0J1dHRvbj5cblx0XHRcdFx0XHQgPEJ1dHRvblxuXHRcdFx0XHRcdCBpc1NlY29uZGFyeVxuXHRcdFx0XHRcdCBvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdCB9IH1cblx0XHRcdFx0XHQgPlxuXHRcdFx0XHRcdCB7IF9fKCAnSW1wb3J0IGl0ZW1zIGZyb20gY2xpcGJvYXJkJywgJ2pldC1mcm9tLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdCA8L0J1dHRvbj5cblx0XHRcdFx0XHQgPC9CdXR0b25Hcm91cD4qLyB9XG5cdFx0XHRcdDwvRmxleEl0ZW0+XG5cdFx0XHQ8L0ZsZXg+XG5cdFx0PC8+IH1cblx0XHR7IGFkZGl0aW9uYWxDb250cm9scyB9XG5cdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uICovIH1cblx0XHR7IGl0ZW1zRGF0YS5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4gPENhcmRcblx0XHRcdGVsZXZhdGlvbj17IDIgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgaXRlbUNsYXNzTmFtZXMgfVxuXHRcdFx0a2V5PXsgZ2V0UmVwZWF0ZXJJdGVtSWQoIGluZGV4ICkgfVxuXHRcdD5cblx0XHRcdDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17ICdyZXBlYXRlcl9faXRlbV9faGVhZGVyJyB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdGVyLWl0ZW1fX2xlZnQtaGVhZGluZ1wiPlxuXHRcdFx0XHRcdDxCdXR0b25Hcm91cCBjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbnMnIH0+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0aWNvbj17IGN1cnJlbnRJdGVtLl9fdmlzaWJsZSA/ICduby1hbHQnIDogJ2VkaXQnIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHRvZ2dsZVZpc2libGUoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17ICFCb29sZWFuKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17ICdhcnJvdy11cC1hbHQyJyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlVXAoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzRGlzYWJsZWRFbmQoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LWRvd24tYWx0MicgfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZURvd24oIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9PlxuXHRcdFx0XHRcdFx0XHR7IEl0ZW1IZWFkaW5nICYmIDxJdGVtSGVhZGluZ1xuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtPXsgZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbShcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEsIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHR7ICFJdGVtSGVhZGluZyAmJiBgIyR7IGluZGV4ICsgMSB9YCB9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8QnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBjbG9uZUl0ZW0oIGluZGV4ICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHsgX18oICdDbG9uZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZU9wdGlvbiggaW5kZXggKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyBfXyggJ0RlbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdDwvQ2FyZEhlYWRlcj5cblx0XHRcdHsgY3VycmVudEl0ZW0uX192aXNpYmxlICYmIDxDYXJkQm9keVxuXHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbV9fY29udGVudCcgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGNoaWxkcmVuICYmIDxGcmFnbWVudFxuXHRcdFx0XHRcdGtleT17IGByZXBlYXRlci1jb21wb25lbnRfX2l0ZW1fJHsgaW5kZXggfWAgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtLFxuXHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW06IGRhdGEgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIGRhdGEsXG5cdFx0XHRcdFx0XHRcdGluZGV4ICksXG5cdFx0XHRcdFx0XHRjdXJyZW50SW5kZXg6IGluZGV4LFxuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxuXHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdHsgIWNoaWxkcmVuICYmICdTZXQgdXAgeW91ciBSZXBlYXRlciBUZW1wbGF0ZSwgcGxlYXNlLicgfVxuXHRcdFx0PC9DYXJkQm9keT4gfVxuXHRcdDwvQ2FyZD4gKSB9XG5cdFx0eyAxIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8PlxuXHRcdFx0eyBhZGRpdGlvbmFsQ29udHJvbHMgfVxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWNvbnRyb2wtY2xlYXJcIlxuXHRcdFx0XHRsYWJlbD17IF9fKCAnU2FmZSBkZWxldGluZycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBzZXRTYWZlRGVsZXRpbmcgfVxuXHRcdFx0Lz5cblx0XHQ8Lz4gfVxuXHRcdDxCdXR0b25cblx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4gYWRkTmV3SXRlbSggbmV3SXRlbSApIH1cblx0XHQ+XG5cdFx0XHR7IGFkZE5ld0J1dHRvbkxhYmVsIH1cblx0XHQ8L0J1dHRvbj5cblx0PC9kaXY+O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyV2l0aFN0YXRlOyIsImltcG9ydCB1c2VSZXBlYXRlclN0YXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVJlcGVhdGVyU3RhdGUnO1xuaW1wb3J0IFJlcGVhdGVyU3RhdGVDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcmVwZWF0ZXIuc3RhdGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbi8qKlxuICogQHBhcmFtICBwcm9wcyB7eyBpdGVtLCBvblNldFN0YXRlLCBmdW5jdGlvbnMsIGNoaWxkcmVuIH19XG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBSZXBlYXRlckFkZE5ldyggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBpdGVtLFxuXHRcdCAgICAgIG9uU2V0U3RhdGUsXG5cdFx0ICAgICAgZnVuY3Rpb25zLFxuXHRcdCAgICAgIGNoaWxkcmVuLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0LyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cblxuXHRjb25zdCB7IGFkZE5ld0l0ZW0gfSA9IGZ1bmN0aW9uc1xuXHQ/PyB1c2VSZXBlYXRlclN0YXRlKCBvblNldFN0YXRlIClcblx0Pz8gdXNlQ29udGV4dCggUmVwZWF0ZXJTdGF0ZUNvbnRleHQgKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuXG5cdHJldHVybiA8QnV0dG9uXG5cdFx0aWNvbj17ICdwbHVzLWFsdDInIH1cblx0XHRpc1NlY29uZGFyeVxuXHRcdG9uQ2xpY2s9eyAoKSA9PiBhZGROZXdJdGVtKCBpdGVtICkgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvQnV0dG9uPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJBZGROZXc7IiwiaW1wb3J0IHVzZVJlcGVhdGVyU3RhdGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlUmVwZWF0ZXJTdGF0ZSc7XG5pbXBvcnQgUmVwZWF0ZXJTdGF0ZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5zdGF0ZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gUmVwZWF0ZXJBZGRPck9wZXJhdG9yKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIG9uU2V0U3RhdGUsXG5cdFx0ICAgICAgZnVuY3Rpb25zLFxuXHRcdCAgICAgIGNoaWxkcmVuLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0LyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cblxuXHRjb25zdCB7IGFkZE5ld0l0ZW0gfSA9IGZ1bmN0aW9uc1xuXHQ/PyB1c2VSZXBlYXRlclN0YXRlKCBvblNldFN0YXRlIClcblx0Pz8gdXNlQ29udGV4dCggUmVwZWF0ZXJTdGF0ZUNvbnRleHQgKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuXG5cdHJldHVybiA8QnV0dG9uXG5cdFx0aXNTZWNvbmRhcnlcblx0XHRpY29uPXsgJ3JhbmRvbWl6ZScgfVxuXHRcdG9uQ2xpY2s9eyAoKSA9PiBhZGROZXdJdGVtKCB7XG5cdFx0XHRfX3Zpc2libGU6IGZhbHNlLFxuXHRcdFx0b3Jfb3BlcmF0b3I6IHRydWUsXG5cdFx0fSApIH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0J1dHRvbj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyQWRkT3JPcGVyYXRvcjsiLCJpbXBvcnQgUmVwZWF0ZXJIZWFkQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmhlYWQnO1xuaW1wb3J0IFJlcGVhdGVyQnV0dG9uc0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5jdXN0b20uaXRlbS5idXR0b25zJztcbmltcG9ydCB1c2VSZXBlYXRlclN0YXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVJlcGVhdGVyU3RhdGUnO1xuaW1wb3J0IFJlcGVhdGVySXRlbUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5pdGVtJztcbmltcG9ydCBSZXBlYXRlclN0YXRlQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3JlcGVhdGVyLnN0YXRlJztcbmltcG9ydCBNYWNyb3NCdXR0b25UZW1wbGF0ZVxuXHRmcm9tICcuLi8uLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zQnV0dG9uVGVtcGxhdGUnO1xuaW1wb3J0IFBvcG92ZXJDb250ZXh0IGZyb20gJy4uLy4uL21hY3Jvcy5idXR0b24vY29udGV4dC9Qb3BvdmVyQ29udGV4dCc7XG5cbmNvbnN0IHtcblx0ICAgICAgQ2FyZCxcblx0ICAgICAgQnV0dG9uR3JvdXAsXG5cdCAgICAgIEJ1dHRvbixcblx0ICAgICAgQ2FyZEhlYWRlcixcblx0ICAgICAgQ2FyZEJvZHksXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEBwYXJhbSAgcHJvcHMge3sgaXRlbXMsIG9uU2V0U3RhdGUsIGZ1bmN0aW9ucywgY2hpbGRyZW4gfX1cbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fVxuICogQGNsYXNzXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBSZXBlYXRlciggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBpdGVtcyxcblx0XHQgICAgICBvblNldFN0YXRlLFxuXHRcdCAgICAgIGZ1bmN0aW9ucyxcblx0XHQgICAgICBjaGlsZHJlbixcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzICovXG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIGNsb25lSXRlbSxcblx0XHQgICAgICBtb3ZlVXAsXG5cdFx0ICAgICAgbW92ZURvd24sXG5cdFx0ICAgICAgdG9nZ2xlVmlzaWJsZSxcblx0XHQgICAgICBjaGFuZ2VDdXJyZW50SXRlbSxcblx0XHQgICAgICByZW1vdmVPcHRpb24sXG5cdCAgICAgIH0gPSBmdW5jdGlvbnNcblx0Pz8gdXNlUmVwZWF0ZXJTdGF0ZSggb25TZXRTdGF0ZSApXG5cdD8/IHVzZUNvbnRleHQoIFJlcGVhdGVyU3RhdGVDb250ZXh0ICk7XG5cblx0LyogZXNsaW50LWVuYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBpc1N1cHBvcnRlZDogaXNTdXBwb3J0ZWRIZWFkZXIsXG5cdFx0ICAgICAgcmVuZGVyOiBDdXN0b21IZWFkZXIsXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBSZXBlYXRlckhlYWRDb250ZXh0ICk7XG5cdGNvbnN0IHtcblx0XHQgICAgICBlZGl0OiBzdXBwb3J0RWRpdCxcblx0XHQgICAgICBtb3ZlOiBzdXBwb3J0TW92ZSxcblx0XHQgICAgICBjbG9uZTogc3VwcG9ydENsb25lLFxuXHRcdCAgICAgIGRlbGV0ZTogc3VwcG9ydERlbGV0ZSxcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIFJlcGVhdGVyQnV0dG9uc0NvbnRleHQgKTtcblxuXHRjb25zdCBSZXBlYXRlckhlYWRlciA9ICggeyBjdXJyZW50SXRlbSwgaW5kZXggfSApID0+IHtcblx0XHRpZiAoIGlzU3VwcG9ydGVkSGVhZGVyKCBjdXJyZW50SXRlbSApICkge1xuXHRcdFx0cmV0dXJuIDxDdXN0b21IZWFkZXJcblx0XHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XG5cdFx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0Lz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxzcGFuXG5cdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbS10aXRsZScgfVxuXHRcdD5cblx0XHRcdHsgYCMkeyBpbmRleCArIDEgfWAgfVxuXHRcdDwvc3Bhbj47XG5cdH07XG5cblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50JyB9XG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXInIH1cblx0PlxuXHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiAqL31cblx0XHR7IGl0ZW1zLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiA8Q2FyZFxuXHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdGVsZXZhdGlvbj17IDIgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudC1pdGVtJyB9XG5cdFx0XHRrZXk9eyBgamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50LWl0ZW0tJHsgaW5kZXggfWAgfVxuXHRcdD5cblx0XHRcdDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17ICdyZXBlYXRlcl9faXRlbV9faGVhZGVyJyB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdGVyLWl0ZW1fX2xlZnQtaGVhZGluZ1wiPlxuXHRcdFx0XHRcdDxCdXR0b25Hcm91cCBjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbnMnIH0+XG5cdFx0XHRcdFx0XHR7IChcblx0XHRcdFx0XHRcdFx0IXN1cHBvcnRFZGl0IHx8IHN1cHBvcnRFZGl0KCBjdXJyZW50SXRlbSApXG5cdFx0XHRcdFx0XHQpICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRpY29uPXsgY3VycmVudEl0ZW0uX192aXNpYmxlID8gJ25vLWFsdCcgOiAnZWRpdCcgfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gdG9nZ2xlVmlzaWJsZSggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uIGpldC1mYi1pcy10aGljaycgfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0XHRcdCFzdXBwb3J0TW92ZSB8fCBzdXBwb3J0TW92ZSggY3VycmVudEl0ZW0gKVxuXHRcdFx0XHRcdFx0KSAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyAhQm9vbGVhbiggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyAnYXJyb3ctdXAtYWx0MicgfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZVVwKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24gamV0LWZiLWlzLXRoaWNrJyB9XG5cdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHR7IChcblx0XHRcdFx0XHRcdFx0IXN1cHBvcnRNb3ZlIHx8IHN1cHBvcnRNb3ZlKCBjdXJyZW50SXRlbSApXG5cdFx0XHRcdFx0XHQpICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17ICEoXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBpdGVtcy5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LWRvd24tYWx0MicgfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZURvd24oIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbiBqZXQtZmItaXMtdGhpY2snIH1cblx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdDxSZXBlYXRlckhlYWRlclxuXHRcdFx0XHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XG5cdFx0XHRcdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEJ1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdHsgKFxuXHRcdFx0XHRcdFx0IXN1cHBvcnRDbG9uZSB8fCBzdXBwb3J0Q2xvbmUoIGN1cnJlbnRJdGVtIClcblx0XHRcdFx0XHQpICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGNsb25lSXRlbSggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiLWlzLXRoaWNrJyB9XG5cdFx0XHRcdFx0XHRpY29uPXsgJ2FkbWluLXBhZ2UnIH1cblx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0XHQhc3VwcG9ydERlbGV0ZSB8fCBzdXBwb3J0RGVsZXRlKCBjdXJyZW50SXRlbSApXG5cdFx0XHRcdFx0KSAmJiA8TWFjcm9zQnV0dG9uVGVtcGxhdGVcblx0XHRcdFx0XHRcdGljb249eyAndHJhc2gnIH1cblx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UG9wb3ZlckNvbnRleHQuQ29uc3VtZXI+XG5cdFx0XHRcdFx0XHRcdHsgKCB7IHNldFNob3dQb3BvdmVyIH0gKSA9PiA8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC41ZW0nLFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICdtYXgtY29udGVudCcsXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0J0RlbGV0ZSB0aGlzIGl0ZW0/Jyxcblx0XHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHRcdFx0XHQpIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0Jm5ic3A7XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlT3B0aW9uKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnWWVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdHsgJyAvICcgfVxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dQb3BvdmVyKCBmYWxzZSApIH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnTm8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiB9XG5cdFx0XHRcdFx0XHQ8L1BvcG92ZXJDb250ZXh0LkNvbnN1bWVyPlxuXHRcdFx0XHRcdDwvTWFjcm9zQnV0dG9uVGVtcGxhdGU+IH1cblx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdDwvQ2FyZEhlYWRlcj5cblx0XHRcdHsgY3VycmVudEl0ZW0uX192aXNpYmxlICYmIDxDYXJkQm9keVxuXHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbV9fY29udGVudCcgfVxuXHRcdFx0XHRrZXk9eyBgamV0LWZvcm0tYnVpbGRlcl9fY2FyZC1ib2R5LSR7IGluZGV4IH1gIH1cblx0XHRcdD5cblx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgY29udGV4dCA9IHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEl0ZW0sXG5cdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtOiBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKFxuXHRcdFx0XHRcdFx0XHRcdGRhdGEsIGluZGV4ICksXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRJbmRleDogaW5kZXgsXG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gPFJlcGVhdGVySXRlbUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyBjb250ZXh0IH0+XG5cdFx0XHRcdFx0XHRcdHsgIWNoaWxkcmVuICYmXG5cdFx0XHRcdFx0XHRcdCdTZXQgdXAgeW91ciBSZXBlYXRlciBUZW1wbGF0ZSwgcGxlYXNlLicgfVxuXHRcdFx0XHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlblxuXHRcdFx0XHRcdFx0XHQgID8gY2hpbGRyZW4oIGNvbnRleHQgKVxuXHRcdFx0XHRcdFx0XHQgIDogY2hpbGRyZW5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9SZXBlYXRlckl0ZW1Db250ZXh0LlByb3ZpZGVyPjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCkoKSB9XG5cdFx0XHQ8L0NhcmRCb2R5PiB9XG5cdFx0PC9DYXJkPiApIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlcjsiLCJpbXBvcnQgUmVwZWF0ZXJTdGF0ZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5zdGF0ZSc7XG5pbXBvcnQgdXNlUmVwZWF0ZXJTdGF0ZSBmcm9tICcuLi8uLi9ob29rcy91c2VSZXBlYXRlclN0YXRlJztcblxuZnVuY3Rpb24gUmVwZWF0ZXJTdGF0ZSggeyBzdGF0ZSwgY2hpbGRyZW4gfSApIHtcblx0Y29uc3QgZnVuY3Rpb25zID0gdXNlUmVwZWF0ZXJTdGF0ZSggc3RhdGUgKTtcblxuXHRyZXR1cm4gPFJlcGVhdGVyU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgZnVuY3Rpb25zIH0+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvUmVwZWF0ZXJTdGF0ZUNvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlclN0YXRlOyIsImltcG9ydCBTYWZlRGVsZXRlQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3NhZmUuZGVsZXRlJztcblxuY29uc3QgeyBUb2dnbGVDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIFNhZmVEZWxldGVUb2dnbGUoIHByb3BzICkge1xuXHRjb25zdCBbIGlzU2FmZURlbGV0aW5nLCBzZXRTYWZlRGVsZXRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdGxhYmVsPXsgX18oICdTYWZlIGRlbGV0aW5nJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cblx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cblx0XHQvPlxuXHRcdDxTYWZlRGVsZXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IGlzU2FmZURlbGV0aW5nIH0+XG5cdFx0XHR7IHByb3BzLmNoaWxkcmVuIH1cblx0XHQ8L1NhZmVEZWxldGVDb250ZXh0LlByb3ZpZGVyPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhZmVEZWxldGVUb2dnbGU7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQoIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGlzU3VwcG9ydGVkOiBpdGVtID0+IGZhbHNlLFxuXHRyZW5kZXI6ICggeyBjaGlsZHJlbiB9ICkgPT4gY2hpbGRyZW4sXG59ICk7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5jb25zdCBSZXBlYXRlckJ1dHRvbnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRlZGl0OiBpdGVtID0+IHRydWUsXG5cdG1vdmU6IGl0ZW0gPT4gdHJ1ZSxcblx0Y2xvbmU6IGl0ZW0gPT4gdHJ1ZSxcblx0ZGVsZXRlOiBpdGVtID0+IHRydWUsXG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyQnV0dG9uc0NvbnRleHQ7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5jb25zdCBSZXBlYXRlckhlYWRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRpc1N1cHBvcnRlZDogaXRlbSA9PiBmYWxzZSxcblx0cmVuZGVyOiAoIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKSA9PiBudWxsLFxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlckhlYWRDb250ZXh0OyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgUmVwZWF0ZXJJdGVtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0Y3VycmVudEl0ZW06IHt9LFxuXHRjaGFuZ2VDdXJyZW50SXRlbTogKCkgPT4ge30sXG5cdGN1cnJlbnRJbmRleDogLTEsXG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVySXRlbUNvbnRleHQ7IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBSZXBlYXRlclN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIGZhbHNlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyU3RhdGVDb250ZXh0OyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGV4dCggZmFsc2UgKTsiLCJpbXBvcnQgZ2F0ZXdheXMgZnJvbSAnLi9nYXRld2F5cy9zdG9yZSc7XG5pbXBvcnQgZXZlbnRzU3RvcmUgZnJvbSAnLi9ldmVudHMvc3RvcmUnO1xuaW1wb3J0IGJsb2NrQ29uZGl0aW9ucyBmcm9tICcuL2Jsb2NrLWNvbmRpdGlvbnMvc3RvcmUnO1xuaW1wb3J0IG1hY3JvcyBmcm9tICcuL21hY3Jvcy5idXR0b24vc3RvcmUnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi92YWxpZGF0aW9uL3N0b3JlJztcbmltcG9ydCBmaWVsZHMgZnJvbSAnLi9ibG9ja3Mvc3RvcmUnO1xuaW1wb3J0ICcuL21pZ3JhdGlvbnMvbWlncmF0ZS5nYXRld2F5cy5zZXR0aW5ncyc7XG5cbmNvbnN0IHtcblx0ICAgICAgcmVnaXN0ZXIsXG5cdCAgICAgIGRpc3BhdGNoLFxuICAgICAgfSA9IHdwLmRhdGE7XG5jb25zdCB7XG5cdCAgICAgIGFkZEFjdGlvbixcbiAgICAgIH0gPSB3cC5ob29rcztcblxuY29uc3Qgc3RvcmVzID0gW1xuXHRnYXRld2F5cyxcblx0ZXZlbnRzU3RvcmUsXG5cdGJsb2NrQ29uZGl0aW9ucyxcblx0bWFjcm9zLFxuXHR2YWxpZGF0aW9uLFxuXHRmaWVsZHMsXG5dO1xuXG5zdG9yZXMuZm9yRWFjaCggcmVnaXN0ZXIgKTtcblxuZGlzcGF0Y2goICdqZXQtZm9ybXMvZXZlbnRzJyApLnJlZ2lzdGVyKCB3aW5kb3cuamV0Rm9ybUV2ZW50cy50eXBlcyApO1xuZGlzcGF0Y2goICdqZXQtZm9ybXMvZXZlbnRzJyApLmxvY2tBY3Rpb25zKCk7XG5kaXNwYXRjaCggJ2pldC1mb3Jtcy92YWxpZGF0aW9uJyApLnJlZ2lzdGVyKCB3aW5kb3cuamV0Rm9ybVZhbGlkYXRpb24gKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLmNoYW5nZS5ibG9ja0NvbmRpdGlvbnMucmVuZGVyU3RhdGUnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9ldmVudHMnLFxuXHRmdW5jdGlvbiAoIHN0YXRlcyApIHtcblx0XHRkaXNwYXRjaCggJ2pldC1mb3Jtcy9ldmVudHMnICkuY2xlYXJEeW5hbWljRXZlbnRzKCk7XG5cblx0XHRjb25zdCBldmVudHMgPSBzdGF0ZXMubWFwKCAoIHsgdmFsdWUgfSApID0+IHtcblx0XHRcdHZhbHVlID0gJ09OLicgKyB2YWx1ZTtcblxuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsOiB2YWx1ZSwgaXNEeW5hbWljOiB0cnVlIH07XG5cdFx0fSApO1xuXG5cdFx0ZGlzcGF0Y2goICdqZXQtZm9ybXMvZXZlbnRzJyApLnJlZ2lzdGVyKCBldmVudHMgKTtcblx0fSxcbik7XG5cbmRpc3BhdGNoKCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkucmVnaXN0ZXIoXG5cdHdpbmRvdy5qZXRGb3JtQmxvY2tDb25kaXRpb25zLFxuKTtcbiIsImltcG9ydCB7IGFwcGx5RmlsdGVycyB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5jbGFzcyBUb29scyB7XG5cblx0c3RhdGljIHdpdGhQbGFjZWhvbGRlciggc291cmNlLCBsYWJlbCA9ICctLScsIHZhbHVlID0gJycgKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgbGFiZWwsIHZhbHVlIH0sXG5cdFx0XHQuLi5zb3VyY2UsXG5cdFx0XTtcblx0fVxuXG5cdHN0YXRpYyBnZXRSYW5kb21JRCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDg5OTkgKSArIDEwMDA7XG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBldmVudCA9IG5hbWUgPT4ge1xuXHRjb25zdCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgPSBuZXcgRXZlbnQoIG5hbWUgKTtcblx0cmV0dXJuICgpID0+IGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGluaXRpYWxpemVDYWxsYmFja3NFdmVudCApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3RlbiA9ICggbmFtZSwgZnVuYyApID0+IHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZnVuYyApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbiggbGlzdEFyciwgbmFtZSApIHtcblx0aWYgKCAhbGlzdEFycj8ubGVuZ3RoICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHJldHVybiBsaXN0QXJyLm1hcCggY3VycmVudCA9PiB7XG5cdFx0cmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY3VycmVudCA/IGN1cnJlbnRbIG5hbWUgXSA6IGN1cnJlbnQ7XG5cdH0gKTtcbn1cblxuY29uc3QgY29udmVydFN5bWJvbHMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIudG9vbHMuY29udmVydFN5bWJvbHMnLCB7XG5cdGNoZWNrQ3lyUmVnZXg6IC9b0LAt0Y/RkdGX0ZTSkdGWXS9pLFxuXHRjeXJSZWdleDogL1vQsC3Rj9GR0ZfRlNKR0ZZdL2dpLFxuXHRjaGFyc01hcDoge1xuXHRcdCfQsCc6ICdhJywgJ9CxJzogJ2InLCAn0LInOiAndicsICfQsyc6ICdnJywgJ9C0JzogJ2QnLFxuXHRcdCfQtSc6ICdlJywgJ9GRJzogJ2lvJywgJ9C2JzogJ3poJywgJ9C3JzogJ3onLCAn0LgnOiAnaScsXG5cdFx0J9C5JzogJ2knLCAn0LonOiAnaycsICfQuyc6ICdsJywgJ9C8JzogJ20nLCAn0L0nOiAnbicsXG5cdFx0J9C+JzogJ28nLCAn0L8nOiAncCcsICfRgCc6ICdyJywgJ9GBJzogJ3MnLCAn0YInOiAndCcsXG5cdFx0J9GDJzogJ3UnLCAn0YQnOiAnZicsICfRhSc6ICdraCcsICfRhic6ICd0cycsICfRhyc6ICdjaCcsXG5cdFx0J9GIJzogJ3NoJywgJ9GJJzogJ3NoY2gnLCAn0YsnOiAneScsICfRjSc6ICdlJywgJ9GOJzogJ2l1Jyxcblx0XHQn0Y8nOiAnaWEnLCAn0ZcnOiAnaScsICfRlCc6ICdpZScsICfSkSc6ICdnJywgJ9GWJzogJ2knLFxuXHR9LFxufSApO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVDeXJUb0xhdGluKCBzdHIgKSB7XG5cdGlmICggY29udmVydFN5bWJvbHMuY2hlY2tDeXJSZWdleC50ZXN0KCBzdHIgKSApIHtcblx0XHRzdHIgPSBzdHIucmVwbGFjZSggY29udmVydFN5bWJvbHMuY3lyUmVnZXgsIGZ1bmN0aW9uICggbWF0Y2ggKSB7XG5cblx0XHRcdGlmICggdW5kZWZpbmVkID09PSBjb252ZXJ0U3ltYm9scy5jaGFyc01hcFsgbWF0Y2ggXSApIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY29udmVydFN5bWJvbHMuY2hhcnNNYXBbIG1hdGNoIF07XG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnZlcnRlZE5hbWUoIHZhbHVlVG9DaGFuZ2UgKSB7XG5cdGxldCBzbHVnID0gdmFsdWVUb0NoYW5nZS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8vIFJlcGxhY2UgYWNjZW50c1xuXHRzbHVnID0gc2x1Zy5ub3JtYWxpemUoICdORkQnICkucmVwbGFjZSggL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnICk7XG5cblx0Ly8gUmVwbGFjZSBjeXJpbGxpY1xuXHRzbHVnID0gbWF5YmVDeXJUb0xhdGluKCBzbHVnICk7XG5cblx0Ly8gR2V0IGxpc3Qgb2Ygd29yZHNcblx0Y29uc3Qgc2x1Z1BhcnRzID0gc2x1Zy5tYXRjaCggL1xcYihcXHcrKVxcYi9nICk7XG5cblx0c2x1ZyA9ICcnO1xuXG5cdGZvciAoIGNvbnN0IFsgc2x1Z0luZGV4LCBzbHVnUGFydCBdIG9mIE9iamVjdC5lbnRyaWVzKCBzbHVnUGFydHMgKSApIHtcblx0XHRzbHVnICs9IChcblx0XHRcdDAgPT09ICtzbHVnSW5kZXggPyAnJyA6ICdfJ1xuXHRcdCkgKyBzbHVnUGFydDtcblxuXHRcdGNvbnN0IGlzTGFzdCA9IDEgKyArc2x1Z0luZGV4ID09PSBzbHVnUGFydHMubGVuZ3RoO1xuXG5cdFx0aWYgKCBzbHVnLmxlbmd0aCA+IDYwICkge1xuXHRcdFx0cmV0dXJuIHNsdWcgKyAoXG5cdFx0XHRcdGlzTGFzdCA/ICcnIDogJ19fJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc2x1Zztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzbmFtZXMoIC4uLmFkZGl0aW9uYWwgKSB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xuXG5cdGNvbnN0IHBhcnNlVmFsdWVzID0gc291cmNlID0+IHtcblx0XHRzb3VyY2UuZm9yRWFjaCggaXRlbUNsYXNzID0+IHtcblx0XHRcdGlmICggIWl0ZW1DbGFzcyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpdGVtQ2xhc3MgKSApIHtcblx0XHRcdFx0cGFyc2VWYWx1ZXMoIGl0ZW1DbGFzcyApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGl0ZW1DbGFzcyApIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goIGl0ZW1DbGFzcy50cmltKCkgKTtcblx0XHRcdH1cblx0XHRcdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiBpdGVtQ2xhc3MgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGZvciAoIGNvbnN0IGl0ZW1DbGFzc0tleSBpbiBpdGVtQ2xhc3MgKSB7XG5cdFx0XHRcdGlmICggaXRlbUNsYXNzWyBpdGVtQ2xhc3NLZXkgXSApIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaCggKFxuXHRcdFx0XHRcdFx0aXRlbUNsYXNzS2V5ICsgJydcblx0XHRcdFx0XHQpLnRyaW0oKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdHBhcnNlVmFsdWVzKCBhZGRpdGlvbmFsICk7XG5cblx0cmV0dXJuIHJlc3VsdC5qb2luKCAnICcgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRPYmplY3RUb09wdGlvbnNMaXN0KCBlbnRyaWVzID0gW10sIHtcblx0dXNlUGxhY2Vob2xkZXIgPSB0cnVlLFxuXHRsYWJlbCA9ICctLScsXG5cdHZhbHVlID0gJycsXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7fSApIHtcblx0Y29uc3QgcGxhY2Vob2xkZXIgPSB7IGxhYmVsLCB2YWx1ZSB9O1xuXG5cdGlmICggIWVudHJpZXMgKSB7XG5cdFx0cmV0dXJuIHVzZVBsYWNlaG9sZGVyID8gWyBwbGFjZWhvbGRlciBdIDogW107XG5cdH1cblxuXHRjb25zdCBvcHRpb25zID0gT2JqZWN0LmVudHJpZXMoIGVudHJpZXMgKS5tYXAoICggb3B0aW9uICkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogb3B0aW9uLnZhbHVlLFxuXHRcdFx0bGFiZWw6IG9wdGlvbi5sYWJlbCxcblx0XHR9O1xuXHR9ICk7XG5cblx0cmV0dXJuIHVzZVBsYWNlaG9sZGVyID8gWyBwbGFjZWhvbGRlciwgLi4ub3B0aW9ucyBdIDogb3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2V0VXJsKCB1cmwgPSAnJyApIHtcblx0cmV0dXJuIEpldEZvcm1FZGl0b3JEYXRhLmFzc2V0c1VybCArIHVybDtcbn1cblxuLyoqXG4gKiBAc2luY2UgMy4xLjBcbiAqXG4gKiBAcGFyYW0gIG9ialxuICogQHBhcmFtICBwYXRoXG4gKiBAcGFyYW0gIHZhbHVlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KCBvYmosIHBhdGgsIHZhbHVlICkge1xuXHQvLyBDcmVhdGUgYSBzaGFsbG93IGNvcHkgb2YgdGhlIG9iamVjdFxuXHRjb25zdCBuZXdPYmogPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggb2JqICkgKTtcblxuXHRsZXQgY3VycmVudE9iaiA9IG5ld09iajtcblx0bGV0IGN1cnJlbnRLZXk7XG5cblx0Ly8gVHJhdmVyc2UgdGhlIG9iamVjdCBhY2NvcmRpbmcgdG8gdGhlIHBhdGhcblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKyApIHtcblx0XHRjdXJyZW50S2V5ID0gcGF0aFsgaSBdO1xuXG5cdFx0Ly8gSWYgdGhlIGN1cnJlbnQga2V5IGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBhIG5ldyBvYmplY3QgYXQgdGhhdCBrZXlcblx0XHRpZiAoICFjdXJyZW50T2JqWyBjdXJyZW50S2V5IF0gKSB7XG5cdFx0XHRjdXJyZW50T2JqWyBjdXJyZW50S2V5IF0gPSB7fTtcblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgdGhlIGN1cnJlbnQgb2JqZWN0IGFuZCBrZXlcblx0XHRpZiAoIGkgPT09IHBhdGgubGVuZ3RoIC0gMSApIHtcblx0XHRcdC8vIElmIHRoaXMgaXMgdGhlIGxhc3Qga2V5IGluIHRoZSBwYXRoLCBzZXQgdGhlIHZhbHVlXG5cdFx0XHRjdXJyZW50T2JqWyBjdXJyZW50S2V5IF0gPSB2YWx1ZTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBPdGhlcndpc2UsIGNvbnRpbnVlIHRyYXZlcnNpbmcgdGhlIG9iamVjdFxuXHRcdFx0Y3VycmVudE9ialsgY3VycmVudEtleSBdID0geyAuLi5jdXJyZW50T2JqWyBjdXJyZW50S2V5IF0gfTtcblx0XHRcdGN1cnJlbnRPYmogICAgICAgICAgICAgICA9IGN1cnJlbnRPYmpbIGN1cnJlbnRLZXkgXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIEBzaW5jZSAzLjEuMFxuICpcbiAqIEBwYXJhbSAgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KCB2YWx1ZSApIHtcblx0aWYgKCBudWxsID09PSB2YWx1ZSB8fCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHZhbHVlICYmICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiAhT2JqZWN0LmtleXMoIHZhbHVlICk/Lmxlbmd0aDtcblx0fVxuXG5cdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gMCA9PT0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gIXZhbHVlPy5sZW5ndGg7XG59XG5cbmV4cG9ydCBjb25zdCBleHRlbmRQcm90b3R5cGUgPSAoIFBhcmVudEZ1bmN0aW9uICkgPT4ge1xuXHRmdW5jdGlvbiBDaGlsZEZ1bmN0aW9uUHJvdG90eXBlKCkge1xuXHRcdFBhcmVudEZ1bmN0aW9uLmNhbGwoIHRoaXMgKTtcblx0fVxuXG5cdENoaWxkRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0XHRQYXJlbnRGdW5jdGlvbi5wcm90b3R5cGUsXG5cdCk7XG5cblx0cmV0dXJuIENoaWxkRnVuY3Rpb25Qcm90b3R5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sczsiLCJjb25zdCB7IHN0b3JlOiBibG9ja3NTdG9yZSB9ID0gd3AuYmxvY2tzO1xuXG5jbGFzcyBNZXNzYWdlSXRlbSB7XG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlICkge1xuXHRcdHRoaXMuaWQgICAgID0gbWVzc2FnZS5pZDtcblx0XHR0aGlzLmJsb2NrcyA9IFtdO1xuXG5cdFx0dGhpcy5zZXRCbG9ja3NNZXRhKCBtZXNzYWdlLnN1cHBvcnRlZCApO1xuXHR9XG5cblx0c2V0QmxvY2tzTWV0YSggYmxvY2tzICkge1xuXHRcdGlmICggIWJsb2Nrcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5ibG9ja3MgPSBibG9ja3MubWFwKCBibG9jayA9PiB7XG5cdFx0XHRjb25zdCBibG9ja1R5cGUgPSB3cC5kYXRhLnNlbGVjdCggYmxvY2tzU3RvcmUgKS5nZXRCbG9ja1R5cGUoXG5cdFx0XHRcdGBqZXQtZm9ybXMvJHsgYmxvY2sgfWAsXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0aXRsZTogYmxvY2tUeXBlLnRpdGxlLFxuXHRcdFx0XHRpY29uOiBibG9ja1R5cGUuaWNvbi5zcmMsXG5cdFx0XHR9O1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSXRlbTsiLCJpbXBvcnQgTWVzc2FnZUl0ZW0gZnJvbSAnLi9NZXNzYWdlSXRlbSc7XG5cbmNsYXNzIFZhbGlkYXRpb25NZXNzYWdlcyB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHR9XG5cblx0cHVzaCggbWVzc2FnZSApIHtcblx0XHR0aGlzLml0ZW1zLnB1c2goIG5ldyBNZXNzYWdlSXRlbSggbWVzc2FnZSApICk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uTWVzc2FnZXM7IiwiaW1wb3J0IEVkaXRSdWxlc01vZGFsQ29udGV4dCBmcm9tICcuL0VkaXRSdWxlc01vZGFsQ29udGV4dCc7XG5pbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IERldGFpbHNDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRhaWxzQ29udGFpbmVyJztcbmltcG9ydCBIb3ZlckNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hvdmVyQ29udGFpbmVyJztcbmltcG9ydCBIdW1hblJlYWRhYmxlUnVsZSBmcm9tICcuL0h1bWFuUmVhZGFibGVSdWxlJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIEFkdmFuY2VkUnVsZUl0ZW0oIHsgcnVsZSwgaW5kZXggPSAwIH0gKSB7XG5cdGNvbnN0IHsgc2V0U2hvd01vZGFsIH0gICAgICAgICAgICAgID0gdXNlQ29udGV4dCggRWRpdFJ1bGVzTW9kYWxDb250ZXh0ICk7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgWyBpc0hvdmVyLCBzZXRIb3ZlciBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9XCJqZXQtZmIgcC1yZWxhdGl2ZVwiXG5cdFx0b25Nb3VzZU92ZXI9eyAoKSA9PiBzZXRIb3ZlciggdHJ1ZSApIH1cblx0XHRvbkZvY3VzPXsgKCkgPT4gc2V0SG92ZXIoIHRydWUgKSB9XG5cdFx0b25Nb3VzZU91dD17ICgpID0+IHNldEhvdmVyKCBmYWxzZSApIH1cblx0XHRvbkJsdXI9eyAoKSA9PiBzZXRIb3ZlciggZmFsc2UgKSB9XG5cdD5cblx0XHQ8SG92ZXJDb250YWluZXIgaXNIb3Zlcj17IGlzSG92ZXIgfT5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRpY29uPXsgJ2VkaXQnIH1cblx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdC4uLmF0dHJpYnV0ZXMudmFsaWRhdGlvbixcblx0XHRcdFx0XHRcdFx0cnVsZXM6IGF0dHJpYnV0ZXMudmFsaWRhdGlvbi5ydWxlcy5tYXAoXG5cdFx0XHRcdFx0XHRcdFx0KCBjdXJyZW50LCBjdXJyZW50SW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50Ll9fdmlzaWJsZSA9IGluZGV4ID09PSBjdXJyZW50SW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0c2V0U2hvd01vZGFsKCBwcmV2ID0+ICFwcmV2ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnRWRpdCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0aWNvbj17ICd0cmFzaCcgfVxuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRcdFx0Li4uYXR0cmlidXRlcy52YWxpZGF0aW9uLFxuXHRcdFx0XHRcdFx0XHRydWxlczogYXR0cmlidXRlcy52YWxpZGF0aW9uLnJ1bGVzLmZpbHRlcihcblx0XHRcdFx0XHRcdFx0XHQoIGN1cnJlbnQsIGN1cnJlbnRJbmRleCApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJbmRleCAhPT0gaW5kZXhcblx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnRGVsZXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9Ib3ZlckNvbnRhaW5lcj5cblx0XHQ8RGV0YWlsc0NvbnRhaW5lcj5cblx0XHRcdDxIdW1hblJlYWRhYmxlUnVsZSBydWxlPXsgcnVsZSB9Lz5cblx0XHQ8L0RldGFpbHNDb250YWluZXI+XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSdWxlSXRlbTsiLCJpbXBvcnQgVG9vbHMgZnJvbSAnLi4vLi4vdG9vbHMnO1xuaW1wb3J0IFJlcGVhdGVySXRlbUNvbnRleHQgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29udGV4dC9yZXBlYXRlci5pdGVtJztcbmltcG9ydCBCYXNlSGVscCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhc2VIZWxwJztcbmltcG9ydCBBZHZhbmNlZE1vZGFsQ29udHJvbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkdmFuY2VkTW9kYWxDb250cm9sJztcbmltcG9ydCBDaG9vc2VSZWxhdGVkRmllbGQgZnJvbSAnLi9DaG9vc2VSZWxhdGVkRmllbGQnO1xuaW1wb3J0IHsgTm90aWNlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSBcImpldC1mb3JtLWJ1aWxkZXItYWN0aW9uc1wiO1xuXG5jb25zdCB7XG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG5cdCAgICAgIFRleHRhcmVhQ29udHJvbCxcblx0ICAgICAgVGV4dENvbnRyb2wsXG5cdCAgICAgIHdpdGhGaWx0ZXJzLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG5cdCAgICAgIHVzZVN0YXRlLFxuXHQgICAgICB1c2VFZmZlY3QsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IHdwLmhvb2tzO1xuY29uc3Qge1xuXHQgICAgICBydWxlX3R5cGVzOiBydWxlVHlwZXMsXG5cdCAgICAgIHNzcl9jYWxsYmFja3M6IHNzckNhbGxiYWNrcyxcbiAgICAgIH0gPSB3aW5kb3cuamV0Rm9ybVZhbGlkYXRpb247XG5cbmNvbnN0IHNzckNhbGxiYWNrc0tleXMgPSBzc3JDYWxsYmFja3MubWFwKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlICk7XG5cbmZ1bmN0aW9uIGdldExhYmVsKCB0eXBlICkge1xuXHRjb25zdCBpbmRleFJ1bGUgPSBydWxlVHlwZXMuZmluZEluZGV4KCAoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSB0eXBlICk7XG5cdGNvbnN0IGZhbGxiYWNrICA9IF9fKCAnRW50ZXIgdmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcblxuXHRpZiAoIC0xID09PSBpbmRleFJ1bGUgKSB7XG5cdFx0cmV0dXJuIGZhbGxiYWNrO1xuXHR9XG5cblx0cmV0dXJuIHJ1bGVUeXBlc1sgaW5kZXhSdWxlIF0/LmNvbnRyb2xfbGFiZWwgPz8gZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIFJ1bGVTcGVjaWZpY0NvbnRyb2xzKCB7XG5cdGN1cnJlbnRJdGVtLFxuXHRjaGFuZ2VDdXJyZW50SXRlbSxcbn0gKSB7XG5cdGNvbnN0IFsgbGFiZWwsIHNldExhYmVsIF0gPSB1c2VTdGF0ZSggKCkgPT4gZ2V0TGFiZWwoIGN1cnJlbnRJdGVtLnR5cGUgKSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNldExhYmVsKCBnZXRMYWJlbCggY3VycmVudEl0ZW0udHlwZSApICk7XG5cdH0sIFsgY3VycmVudEl0ZW0udHlwZSBdICk7XG5cblx0c3dpdGNoICggY3VycmVudEl0ZW0udHlwZSApIHtcblx0XHRjYXNlICdlcXVhbCc6XG5cdFx0Y2FzZSAnY29udGFpbic6XG5cdFx0Y2FzZSAnY29udGFpbl9ub3QnOlxuXHRcdGNhc2UgJ3JlZ2V4cCc6XG5cdFx0Y2FzZSAncmVnZXhwX25vdCc6XG5cdFx0XHRyZXR1cm4gPD5cblx0XHRcdFx0PENob29zZVJlbGF0ZWRGaWVsZC8+XG5cdFx0XHRcdHsgIUJvb2xlYW4oIGN1cnJlbnRJdGVtLmZpZWxkICkgJiYgPEFkdmFuY2VkTW9kYWxDb250cm9sXG5cdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0b25DaGFuZ2VQcmVzZXQ9eyB2YWx1ZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZSB9ICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlTWFjcm9zPXsgbmFtZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSgge1xuXHRcdFx0XHRcdFx0dmFsdWU6IChcblx0XHRcdFx0XHRcdFx0Y3VycmVudEl0ZW0udmFsdWUgPz8gJydcblx0XHRcdFx0XHRcdCkgKyBuYW1lLFxuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7ICggeyBpbnN0YW5jZUlkIH0gKSA9PiA8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdFx0XHRpZD17IGluc3RhbmNlSWQgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IHZhbHVlIH0gKSB9XG5cdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHQ8L0FkdmFuY2VkTW9kYWxDb250cm9sPiB9XG5cdFx0XHQ8Lz47XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5hZHZhbmNlZC5ydWxlLmNvbnRyb2xzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHQoIERlZmF1bHRDb250cm9scyApID0+ICggcHJvcHMgKSA9PiB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSA9IHByb3BzO1xuXHRcdGNvbnN0IFsgc2hvd0RldGFpbHMsIHNldFNob3dEZXRhaWxzIF0gICAgPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRcdGNvbnN0IFsgYWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xuXG5cdFx0Y29uc3QgaGFzU2F2ZVJlY29yZCA9IGFjdGlvbnMuc29tZShjdXJyZW50ID0+XG5cdFx0XHRjdXJyZW50LnR5cGUgPT09ICdzYXZlX3JlY29yZCcgJiYgKGN1cnJlbnQuaXNfZXhlY3V0ZSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnQuaXNfZXhlY3V0ZSA9PT0gdHJ1ZSlcblx0XHQpID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJztcblxuXHRcdGlmICggJ3NzcicgIT09IGN1cnJlbnRJdGVtLnR5cGUgKSB7XG5cdFx0XHRyZXR1cm4gPERlZmF1bHRDb250cm9scyB7IC4uLnByb3BzIH0gLz47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZnVuY3Rpb25OYW1lID0gY3VycmVudEl0ZW0udmFsdWUgfHwgJ2N1c3RvbV9qZmJfZmllbGRfdmFsaWRhdGlvbic7XG5cblx0XHRyZXR1cm4gPD5cblx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0b3B0aW9ucz17IFRvb2xzLndpdGhQbGFjZWhvbGRlcihcblx0XHRcdFx0XHRzc3JDYWxsYmFja3MsXG5cdFx0XHRcdFx0X18oICdDdXN0b20gZnVuY3Rpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0KSB9XG5cdFx0XHRcdGxhYmVsPXsgX18oICdDaG9vc2UgY2FsbGJhY2snLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IHZhbHVlIH0gKSB9XG5cdFx0XHQvPlxuXHRcdFx0eyAnaXNfZmllbGRfdmFsdWVfdW5pcXVlJyA9PT0gY3VycmVudEl0ZW0udmFsdWUgJiYgKFxuXHRcdFx0XHQ8Tm90aWNlIHN0YXR1cz17IGhhc1NhdmVSZWNvcmQgfSBpc0Rpc21pc3NpYmxlPXsgZmFsc2UgfT5cblx0XHRcdFx0XHR7IF9fKCAnVGhpcyBjYWxsYmFjayByZXF1aXJlcyB0aGUgU2F2ZSBGb3JtIFJlY29yZCBhY3Rpb24gdG8gd29yayBjb3JyZWN0bHkuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L05vdGljZT5cblx0XHRcdCl9XG5cdFx0XHR7ICFzc3JDYWxsYmFja3NLZXlzLmluY2x1ZGVzKCBjdXJyZW50SXRlbS52YWx1ZSApICYmIDw+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdGdW5jdGlvbiBuYW1lJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWUgfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJhc2VIZWxwPlxuXHRcdFx0XHRcdHsgX18oICdFeGFtcGxlIG9mIHJlZ2lzdGVyaW5nIGEgZnVuY3Rpb24gYmVsb3cuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxuXHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovfVxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93RGV0YWlscyggcHJldiA9PiAhcHJldiApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7IHNob3dEZXRhaWxzXG5cdFx0XHRcdFx0XHQgID8gX18oICdIaWRlJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdFx0XHRcdCAgOiBfXyggJ1Nob3cnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L0Jhc2VIZWxwPlxuXHRcdFx0XHR7IHNob3dEZXRhaWxzICYmIDxwcmU+XG5cdFx0XHRcdFx0eyBgLyoqXG4gKiBUbyBnZXQgYWxsIHRoZSB2YWx1ZXMgb2YgdGhlIGZpZWxkcyBpbiB0aGUgZm9ybSwgeW91IGNhbiB1c2UgdGhlIGV4cHJlc3Npb246XG4gKiBqZXRfZmJfcmVxdWVzdF9oYW5kbGVyKCktPmdldF9yZXF1ZXN0KCkgb3IgJGNvbnRleHQtPmdldF9yZXF1ZXN0KClcbiAqXG4gKiBJZiB0aGUgZmllbGQgaXMgbG9jYXRlZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSByZXBlYXRlciwgdGhlbiBvbmx5XG4gKiBqZXRfZmJfcmVxdWVzdF9oYW5kbGVyKCktPmdldF9yZXF1ZXN0KCksIGJ1dCAkY29udGV4dC0+Z2V0X3JlcXVlc3QoKSBcbiAqIHdpbGwgcmV0dXJuIHRoZSB2YWx1ZXMgb2YgYWxsIGZpZWxkcyBvZiB0aGUgY3VycmVudCByZXBlYXRlciBlbGVtZW50XG4gKlxuICogQHBhcmFtICR2YWx1ZSBtaXhlZFxuICogQHBhcmFtICRjb250ZXh0IFxcXFxKZXRfRm9ybV9CdWlsZGVyXFxcXFJlcXVlc3RcXFxcUGFyc2VyX0NvbnRleHRcbiAqXG4gKiBAcmV0dXJuIGJvb2xcbiAqL1xuZnVuY3Rpb24gJHsgZnVuY3Rpb25OYW1lIH0oICR2YWx1ZSwgJGNvbnRleHQgKTogYm9vbCB7XG5cdC8vIHlvdXIgbG9naWNcblx0cmV0dXJuIHRydWU7XG59YCB9XG5cdFx0XHRcdDwvcHJlPiB9XG5cdFx0XHQ8Lz4gfVxuXHRcdDwvPjtcblx0fSxcbik7XG5cbmNvbnN0IFJ1bGVDb250cm9scyA9IHdpdGhGaWx0ZXJzKFxuXHQnamV0LmZiLmFkdmFuY2VkLnJ1bGUuY29udHJvbHMnLFxuKSggUnVsZVNwZWNpZmljQ29udHJvbHMgKTtcblxuZnVuY3Rpb24gQWR2YW5jZWRSdWxlTW9kYWxJdGVtKCkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgY3VycmVudEl0ZW0sXG5cdFx0ICAgICAgY2hhbmdlQ3VycmVudEl0ZW0sXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBSZXBlYXRlckl0ZW1Db250ZXh0ICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdG9wdGlvbnM9eyBUb29scy53aXRoUGxhY2Vob2xkZXIoIHJ1bGVUeXBlcyApIH1cblx0XHRcdGxhYmVsPXsgX18oICdSdWxlIHR5cGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnR5cGUgfVxuXHRcdFx0b25DaGFuZ2U9eyB0eXBlID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IHR5cGUgfSApIH1cblx0XHQvPlxuXHRcdDxSdWxlQ29udHJvbHNcblx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBjaGFuZ2VDdXJyZW50SXRlbSB9XG5cdFx0Lz5cblx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnRXJyb3IgbWVzc2FnZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ubWVzc2FnZSB9XG5cdFx0XHRvbkNoYW5nZT17IG1lc3NhZ2UgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgbWVzc2FnZSB9ICkgfVxuXHRcdC8+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSdWxlTW9kYWxJdGVtOyIsImltcG9ydCBFZGl0UnVsZXNNb2RhbENvbnRleHQgZnJvbSAnLi9FZGl0UnVsZXNNb2RhbENvbnRleHQnO1xuaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCBEZXRhaWxzQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsc0NvbnRhaW5lcic7XG5pbXBvcnQgSG92ZXJDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ib3ZlckNvbnRhaW5lcic7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEFkdmFuY2VkUnVsZXNJc0VtcHR5KCkge1xuXHRjb25zdCB7IHNldFNob3dNb2RhbCB9ICAgICAgICAgICAgICA9IHVzZUNvbnRleHQoIEVkaXRSdWxlc01vZGFsQ29udGV4dCApO1xuXHRjb25zdCBbIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IFsgaXNIb3Zlciwgc2V0SG92ZXIgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPVwiamV0LWZiIHAtcmVsYXRpdmVcIlxuXHRcdG9uTW91c2VPdmVyPXsgKCkgPT4gc2V0SG92ZXIoIHRydWUgKSB9XG5cdFx0b25Gb2N1cz17ICgpID0+IHNldEhvdmVyKCB0cnVlICkgfVxuXHRcdG9uTW91c2VPdXQ9eyAoKSA9PiBzZXRIb3ZlciggZmFsc2UgKSB9XG5cdFx0b25CbHVyPXsgKCkgPT4gc2V0SG92ZXIoIGZhbHNlICkgfVxuXHQ+XG5cdFx0PEhvdmVyQ29udGFpbmVyIGlzSG92ZXI9eyBpc0hvdmVyIH0+XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0aWNvbj17ICdwbHVzLWFsdDInIH1cblx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdC4uLmF0dHJpYnV0ZXMudmFsaWRhdGlvbixcblx0XHRcdFx0XHRcdFx0cnVsZXM6IFtcblx0XHRcdFx0XHRcdFx0XHR7IF9fdmlzaWJsZTogdHJ1ZSB9LFxuXHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0c2V0U2hvd01vZGFsKCBwcmV2ID0+ICFwcmV2ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnQWRkIG5ldycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvSG92ZXJDb250YWluZXI+XG5cdFx0PERldGFpbHNDb250YWluZXI+XG5cdFx0XHQ8c3BhbiBkYXRhLXRpdGxlPXsgX18oXG5cdFx0XHRcdCdZb3UgaGF2ZSBubyBydWxlcyBmb3IgdGhpcyBmaWVsZC4nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH0vPlxuXHRcdFx0PHNwYW4gZGF0YS10aXRsZT17IF9fKFxuXHRcdFx0XHQnUGxlYXNlIGNsaWNrIGhlcmUgdG8gYWRkIG5ldy4nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH0vPlxuXHRcdDwvRGV0YWlsc0NvbnRhaW5lcj5cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZFJ1bGVzSXNFbXB0eTsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IEFkdmFuY2VkUnVsZXNJc0VtcHR5IGZyb20gJy4vQWR2YW5jZWRSdWxlc0lzRW1wdHknO1xuaW1wb3J0IENvbnRhaW5lcnNMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyc0xpc3QnO1xuaW1wb3J0IEFkdmFuY2VkUnVsZUl0ZW0gZnJvbSAnLi9BZHZhbmNlZFJ1bGVJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBDaGlsZHJlbixcblx0ICAgICAgY2xvbmVFbGVtZW50LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHJlbmRlckdyb3VwID0gKCBjdXJyZW50LCBpbmRleCApID0+IDw+XG5cdDxiPnsgX18oICdBTkQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9iPlxuXHQ8QWR2YW5jZWRSdWxlSXRlbVxuXHRcdHJ1bGU9eyBjdXJyZW50IH1cblx0XHRpbmRleD17IGluZGV4IH1cblx0Lz5cbjwvPjtcblxuZnVuY3Rpb24gZ2V0UnVsZXNMaXN0KCBydWxlcyApIHtcblx0Y29uc3QgYW5kUnVsZXMgPSBydWxlcy5maWx0ZXIoXG5cdFx0KCBjLCBpbmRleCApID0+IDAgIT09IGluZGV4LFxuXHQpO1xuXG5cdHJldHVybiBbXG5cdFx0PEFkdmFuY2VkUnVsZUl0ZW1cblx0XHRcdHJ1bGU9eyBydWxlc1sgMCBdIH1cblx0XHRcdGtleT1cImZpcnN0X2l0ZW1cIlxuXHRcdC8+LFxuXHRcdC4uLmFuZFJ1bGVzLm1hcChcblx0XHRcdCggaXRlbSwgaW5kZXggKSA9PiByZW5kZXJHcm91cCggaXRlbSwgaW5kZXggKyAxICksXG5cdFx0KSxcblx0XTtcbn1cblxuZnVuY3Rpb24gQWR2YW5jZWRSdWxlc0xpc3QoKSB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCAhYXR0cmlidXRlcz8udmFsaWRhdGlvbj8ucnVsZXM/Lmxlbmd0aCApIHtcblx0XHRyZXR1cm4gPEFkdmFuY2VkUnVsZXNJc0VtcHR5Lz47XG5cdH1cblxuXHRyZXR1cm4gPENvbnRhaW5lcnNMaXN0PlxuXHRcdHsgQ2hpbGRyZW4ubWFwKFxuXHRcdFx0Z2V0UnVsZXNMaXN0KCBhdHRyaWJ1dGVzLnZhbGlkYXRpb24ucnVsZXMgKSxcblx0XHRcdGNsb25lRWxlbWVudCxcblx0XHQpIH1cblx0PC9Db250YWluZXJzTGlzdD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkUnVsZXNMaXN0OyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlT25VcGRhdGVNb2RhbCBmcm9tICcuLi8uLi9hY3Rpb24tbW9kYWwvaG9va3MvdXNlT25VcGRhdGVNb2RhbCc7XG5pbXBvcnQgUmVwZWF0ZXIgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlcic7XG5pbXBvcnQgUmVwZWF0ZXJBZGROZXcgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5hZGQubmV3JztcbmltcG9ydCBBZHZhbmNlZFJ1bGVNb2RhbEl0ZW0gZnJvbSAnLi9BZHZhbmNlZFJ1bGVNb2RhbEl0ZW0nO1xuaW1wb3J0IFJlcGVhdGVyU3RhdGUgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5zdGF0ZSc7XG5pbXBvcnQgUmVwZWF0ZXJIZWFkQ29udGV4dFxuXHRmcm9tICcuLi8uLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmhlYWQnO1xuaW1wb3J0IGh1bWFuUmVhZGFibGVSdWxlIGZyb20gJy4uL2hlbHBlcnMvaHVtYW5SZWFkYWJsZVJ1bGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEFkdmFuY2VkUnVsZXNNb2RhbCgpIHtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblx0Y29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gICAgICAgPSB1c2VTdGF0ZShcblx0XHQoKSA9PiBhdHRyaWJ1dGVzLnZhbGlkYXRpb24/LnJ1bGVzID8/IFtdLFxuXHQpO1xuXG5cdHVzZU9uVXBkYXRlTW9kYWwoICgpID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKCBwcmV2ID0+IChcblx0XHRcdHtcblx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdC4uLmF0dHJpYnV0ZXMudmFsaWRhdGlvbixcblx0XHRcdFx0XHRydWxlczogY3VycmVudCxcblx0XHRcdFx0fSxcblx0XHRcdH1cblx0XHQpICk7XG5cdH0gKTtcblxuXHRyZXR1cm4gPFJlcGVhdGVyU3RhdGUgc3RhdGU9eyBzZXRDdXJyZW50IH0+XG5cdFx0PFJlcGVhdGVySGVhZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0XHRpc1N1cHBvcnRlZDogKCkgPT4gdHJ1ZSxcblx0XHRcdHJlbmRlcjogKCB7IGN1cnJlbnRJdGVtIH0gKSA9PiA8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbS10aXRsZScgfVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtcblx0XHRcdFx0XHRfX2h0bWw6IGh1bWFuUmVhZGFibGVSdWxlKCBjdXJyZW50SXRlbSApLFxuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0fSB9PlxuXHRcdFx0PFJlcGVhdGVyIGl0ZW1zPXsgY3VycmVudCB9PlxuXHRcdFx0XHQ8QWR2YW5jZWRSdWxlTW9kYWxJdGVtLz5cblx0XHRcdDwvUmVwZWF0ZXI+XG5cdFx0PC9SZXBlYXRlckhlYWRDb250ZXh0LlByb3ZpZGVyPlxuXHRcdDxSZXBlYXRlckFkZE5ldz5cblx0XHRcdHsgX18oICdBZGQgUnVsZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ8L1JlcGVhdGVyQWRkTmV3PlxuXHQ8L1JlcGVhdGVyU3RhdGU+O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkUnVsZXNNb2RhbDsiLCJpbXBvcnQgUmVwZWF0ZXJJdGVtQ29udGV4dCBmcm9tICcuLi8uLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLml0ZW0nO1xuaW1wb3J0IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50XG5cdGZyb20gJy4uLy4uL2Jsb2Nrcy9oZWxwZXJzL2dldEZpZWxkc1dpdGhvdXRDdXJyZW50JztcblxuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG5cdCAgICAgIHVzZU1lbW8sXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQ2hvb3NlUmVsYXRlZEZpZWxkKCkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgY3VycmVudEl0ZW0sXG5cdFx0ICAgICAgY2hhbmdlQ3VycmVudEl0ZW0sXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBSZXBlYXRlckl0ZW1Db250ZXh0ICk7XG5cblx0Y29uc3QgZmllbGRzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRGaWVsZHNXaXRob3V0Q3VycmVudChcblx0XHRcdF9fKCAnQ3VzdG9tIHZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0KSxcblx0XHRbXSxcblx0KTtcblxuXHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcblx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0b3B0aW9ucz17IGZpZWxkcyB9XG5cdFx0bGFiZWw9eyBfXyggJ0Nob29zZSBmaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmZpZWxkIH1cblx0XHRvbkNoYW5nZT17IGZpZWxkID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IGZpZWxkIH0gKSB9XG5cdC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaG9vc2VSZWxhdGVkRmllbGQ7IiwiaW1wb3J0IEFkdmFuY2VkUnVsZXNNb2RhbCBmcm9tICcuL0FkdmFuY2VkUnVsZXNNb2RhbCc7XG5pbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSAnLi4vLi4vYWN0aW9uLW1vZGFsL2NvbXBvbmVudHMvQWN0aW9uTW9kYWwnO1xuaW1wb3J0IEFkdmFuY2VkUnVsZXNMaXN0IGZyb20gJy4vQWR2YW5jZWRSdWxlc0xpc3QnO1xuaW1wb3J0IEVkaXRSdWxlc01vZGFsQ29udGV4dCBmcm9tICcuL0VkaXRSdWxlc01vZGFsQ29udGV4dCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gRWRpdEFkdmFuY2VkUnVsZXNCdXR0b24oKSB7XG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxFZGl0UnVsZXNNb2RhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0XHRzaG93TW9kYWwsXG5cdFx0XHRzZXRTaG93TW9kYWwsXG5cdFx0fSB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmIgbWItMjRcIj5cblx0XHRcdFx0PEFkdmFuY2VkUnVsZXNMaXN0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvRWRpdFJ1bGVzTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxuXHRcdHsgc2hvd01vZGFsICYmIDxBY3Rpb25Nb2RhbFxuXHRcdFx0dGl0bGU9eyBfXyggJ0VkaXQgQWR2YW5jZWQgUnVsZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRTaG93TW9kYWwoIGZhbHNlICkgfVxuXHRcdD5cblx0XHRcdDxBZHZhbmNlZFJ1bGVzTW9kYWwvPlxuXHRcdDwvQWN0aW9uTW9kYWw+IH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0QWR2YW5jZWRSdWxlc0J1dHRvbjsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEVkaXRSdWxlc01vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0c2hvd01vZGFsOiBmYWxzZSxcblx0c2V0U2hvd01vZGFsOiAoKSA9PiB7fSxcbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFJ1bGVzTW9kYWxDb250ZXh0OyIsImltcG9ydCBodW1hblJlYWRhYmxlUnVsZSBmcm9tICcuLi9oZWxwZXJzL2h1bWFuUmVhZGFibGVSdWxlJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBIdW1hblJlYWRhYmxlUnVsZSggeyBydWxlIH0gKSB7XG5cdHJldHVybiBydWxlLnR5cGUgPyA8PlxuXHRcdDxzcGFuXG5cdFx0XHRkYXRhLXRpdGxlPXsgX18oICdSdWxlOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge1xuXHRcdFx0XHRfX2h0bWw6IGh1bWFuUmVhZGFibGVSdWxlKCBydWxlICksXG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdHsgQm9vbGVhbiggcnVsZS5tZXNzYWdlICkgJiYgPHNwYW5cblx0XHRcdGRhdGEtdGl0bGU9eyBfXyggJ01lc3NhZ2U6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7XG5cdFx0XHRcdF9faHRtbDogcnVsZS5tZXNzYWdlLFxuXHRcdFx0fSB9XG5cdFx0Lz4gfVxuXHQ8Lz4gOiA8c3BhblxuXHRcdCAgICAgICBkYXRhLXRpdGxlPXsgX18oXG5cdFx0XHQgICAgICAgJ1RoZSBydWxlIGlzIG5vdCBmdWxseSBjb25maWd1cmVkLicsXG5cdFx0XHQgICAgICAgJ2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCAgICAgICApIH1cblx0ICAgICAgIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIdW1hblJlYWRhYmxlUnVsZTsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZVVuaXFLZXknO1xuaW1wb3J0IHsgdXNlTWV0YVN0YXRlIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1kYXRhJztcbmltcG9ydCBnZXRJdGVtQnlOYW1lIGZyb20gJy4uL2hlbHBlcnMvZ2V0SXRlbUJ5TmFtZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gVmFsaWRhdGlvbkJsb2NrTWVzc2FnZSgge1xuXHRuYW1lLFxufSApIHtcblx0Y29uc3QgdW5pcUtleSAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VVbmlxS2V5KCk7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cdGNvbnN0IFsgYXJncyBdICAgICAgICAgICAgICAgICAgICAgID0gdXNlTWV0YVN0YXRlKFxuXHRcdCdfamZfdmFsaWRhdGlvbicsXG5cdFx0J3t9Jyxcblx0XHRbXSxcblx0KTtcblxuXHRjb25zdCBpc0luaGVyaXQgPSAhYXR0cmlidXRlcy52YWxpZGF0aW9uPy50eXBlO1xuXHRjb25zdCBtZXNzYWdlcyAgPSBpc0luaGVyaXRcblx0ICAgICAgICAgICAgICAgICAgPyBhcmdzPy5tZXNzYWdlcyA/PyB7fVxuXHQgICAgICAgICAgICAgICAgICA6IGF0dHJpYnV0ZXMudmFsaWRhdGlvbj8ubWVzc2FnZXMgPz8ge307XG5cblx0Y29uc3QgY3VycmVudCA9IGdldEl0ZW1CeU5hbWUoIG5hbWUgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGRpc2FibGVkPXsgaXNJbmhlcml0IH1cblx0XHRcdGtleT17IHVuaXFLZXkoICdtYXNzYWdlXycgKyBuYW1lICkgfVxuXHRcdFx0bGFiZWw9eyBjdXJyZW50Py5sYWJlbCB9XG5cdFx0XHRoZWxwPXsgY3VycmVudD8uaGVscCB9XG5cdFx0XHR2YWx1ZT17IG1lc3NhZ2VzWyBuYW1lIF0gPz8gY3VycmVudD8uaW5pdGlhbCB9XG5cdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldEF0dHJpYnV0ZXMoIHByZXYgPT4gKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0XHQuLi5hdHRyaWJ1dGVzLnZhbGlkYXRpb24sXG5cdFx0XHRcdFx0XHRtZXNzYWdlczoge1xuXHRcdFx0XHRcdFx0XHQuLi5tZXNzYWdlcyxcblx0XHRcdFx0XHRcdFx0WyBuYW1lIF06IHZhbHVlLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHQpICkgfVxuXHRcdC8+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvbkJsb2NrTWVzc2FnZTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBnZXRJdGVtQnlOYW1lIGZyb20gJy4uL2hlbHBlcnMvZ2V0SXRlbUJ5TmFtZSc7XG5pbXBvcnQgeyBGbGV4LCBUZXh0Q29udHJvbCwgVG9vbHRpcCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5pbXBvcnQgeyBMYWJlbCwgQ2xlYXJCYXNlQ29udHJvbFN0eWxlIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZCggSWNvbiApYFxuICAgIHN2ZyB7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuYDtcblxuZnVuY3Rpb24gVmFsaWRhdGlvbk1ldGFNZXNzYWdlKCB7XG5cdG1lc3NhZ2UsXG5cdHVwZGF0ZSxcblx0dmFsdWUgPSBudWxsLFxuXHRoZWxwID0gbnVsbCxcbn0gKSB7XG5cdGNvbnN0IGN1cnJlbnQgPSBnZXRJdGVtQnlOYW1lKCBtZXNzYWdlLmlkICk7XG5cblx0cmV0dXJuIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuXHRcdDxGbGV4PlxuXHRcdFx0PExhYmVsIGh0bWxGb3I9eyBtZXNzYWdlLmlkIH0+eyBjdXJyZW50LmxhYmVsIH08L0xhYmVsPlxuXHRcdFx0PEZsZXggc3R5bGU9eyB7IHdpZHRoOiAnYXV0bycgfSB9PlxuXHRcdFx0XHR7IG1lc3NhZ2UuYmxvY2tzLm1hcCggYmxvY2sgPT4gKFxuXHRcdFx0XHRcdDxUb29sdGlwXG5cdFx0XHRcdFx0XHRrZXk9eyAnbWVzc2FnZV9ibG9ja19pdGVtJyArIGJsb2NrLnRpdGxlIH1cblx0XHRcdFx0XHRcdHRleHQ9eyBibG9jay50aXRsZSB9XG5cdFx0XHRcdFx0XHRkZWxheT17IDIwMCB9XG5cdFx0XHRcdFx0XHRwb3NpdGlvbj17ICd0b3AgY2VudGVyJyB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFN0eWxlZEljb24gaWNvbj17IGJsb2NrLmljb24gfS8+XG5cdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHQpICkgfVxuXHRcdFx0PC9GbGV4PlxuXHRcdDwvRmxleD5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGNsYXNzTmFtZT17IENsZWFyQmFzZUNvbnRyb2xTdHlsZSB9XG5cdFx0XHRpZD17IG1lc3NhZ2UuaWQgfVxuXHRcdFx0aGVscD17IGhlbHAgPz8gY3VycmVudD8uaGVscCB9XG5cdFx0XHR2YWx1ZT17IHZhbHVlID8/IGN1cnJlbnQ/LmluaXRpYWwgfVxuXHRcdFx0b25DaGFuZ2U9eyBtZXNzYWdlVGV4dCA9PiB1cGRhdGUoIHByZXYgPT4gKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0XHRbIG1lc3NhZ2UuaWQgXTogbWVzc2FnZVRleHQsXG5cdFx0XHRcdH1cblx0XHRcdCkgKSB9XG5cdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0Lz5cblx0PC9GbGV4Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvbk1ldGFNZXNzYWdlOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlVW5pcUtleSBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlVW5pcUtleSc7XG5cbmNvbnN0IHtcblx0ICAgICAgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2w6IFRvZ2dsZUdyb3VwQ29udHJvbCxcblx0ICAgICAgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2xPcHRpb246IFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5sZXQgeyBmb3JtYXRzIH0gPSB3aW5kb3cuamV0Rm9ybVZhbGlkYXRpb247XG5cbmZ1bmN0aW9uIFZhbGlkYXRpb25Ub2dnbGVHcm91cCggeyBleGNsdWRlQnJvd3NlciA9IGZhbHNlIH0gKSB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cdGNvbnN0IHVuaXFLZXkgICAgICAgICAgICAgICAgICAgICAgID0gdXNlVW5pcUtleSgpO1xuXG5cdGZvcm1hdHMgPSBmb3JtYXRzLmZpbHRlcihcblx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlICE9PSAnYnJvd3NlcicgfHwgIWV4Y2x1ZGVCcm93c2VyLFxuXHQpO1xuXG5cdHJldHVybiA8VG9nZ2xlR3JvdXBDb250cm9sXG5cdFx0b25DaGFuZ2U9eyB0eXBlID0+IHNldEF0dHJpYnV0ZXMoIHByZXYgPT4gKFxuXHRcdFx0e1xuXHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0Li4uYXR0cmlidXRlcy52YWxpZGF0aW9uLFxuXHRcdFx0XHRcdHR5cGUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9XG5cdFx0KSApIH1cblx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmFsaWRhdGlvbj8udHlwZSA/PyAnJyB9XG5cdFx0bGFiZWw9eyBfXyggJ1ZhbGlkYXRpb24gdHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRpc0Jsb2NrPXsgdHJ1ZSB9XG5cdFx0aXNBZGFwdGl2ZVdpZHRoPXsgZmFsc2UgfVxuXHQ+XG5cdFx0PFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0bGFiZWw9eyBfXyggJ0luaGVyaXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHR2YWx1ZT17ICcnIH1cblx0XHRcdGFyaWEtbGFiZWw9eyBfXyggJ0luaGVyaXQgZnJvbSBmb3JtXFwncyBhcmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0c2hvd1Rvb2x0aXBcblx0XHQvPlxuXHRcdHsgZm9ybWF0cy5tYXAoXG5cdFx0XHRjdXJyZW50ID0+IDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0a2V5PXsgdW5pcUtleSggY3VycmVudC52YWx1ZSArICdfa2V5JyApIH1cblx0XHRcdFx0bGFiZWw9eyBjdXJyZW50LmxhYmVsIH1cblx0XHRcdFx0dmFsdWU9eyBjdXJyZW50LnZhbHVlIH1cblx0XHRcdFx0YXJpYS1sYWJlbD17IGN1cnJlbnQudGl0bGUgfVxuXHRcdFx0XHRzaG93VG9vbHRpcFxuXHRcdFx0Lz4gKSB9XG5cdDwvVG9nZ2xlR3JvdXBDb250cm9sPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvblRvZ2dsZUdyb3VwOyIsImNvbnN0IHsgbWVzc2FnZXMgfSA9IHdpbmRvdy5qZXRGb3JtVmFsaWRhdGlvbjtcblxuZnVuY3Rpb24gZ2V0SXRlbUJ5TmFtZSggZmluZE5hbWUgKSB7XG5cdHJldHVybiBtZXNzYWdlcy5maW5kKFxuXHRcdCggeyBpZCB9ICkgPT4gZmluZE5hbWUgPT09IGlkLFxuXHQpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEl0ZW1CeU5hbWU7XG4iLCJjb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG4vKipcbiAqIEBwYXJhbSAgcnVsZVxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh1bWFuUmVhZGFibGVSdWxlKCBydWxlICkge1xuXHRyZXR1cm4gc2VsZWN0KCAnamV0LWZvcm1zL3ZhbGlkYXRpb24nICkucmVhZFJ1bGUoIHJ1bGUgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHVtYW5SZWFkYWJsZVJ1bGU7IiwiaW1wb3J0IFZhbGlkYXRpb25NZXNzYWdlcyBmcm9tICcuLi9jbGFzc2VzL1ZhbGlkYXRpb25NZXNzYWdlcyc7XG5cbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHdpbmRvdy5qZXRGb3JtVmFsaWRhdGlvbjtcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHNvcnRlZCA9IG1lc3NhZ2VzLnNvcnQoICggcHJldiwgbmV4dCApID0+IHtcblx0cmV0dXJuIHByZXYuc3VwcG9ydGVkLmxlbmd0aCAtIG5leHQuc3VwcG9ydGVkLmxlbmd0aDtcbn0gKTtcblxuZnVuY3Rpb24gZ2V0R3JvdXBlZE1lc3NhZ2VzKCkge1xuXHRjb25zdCBncm91cHMgPSBuZXcgVmFsaWRhdGlvbk1lc3NhZ2VzKCk7XG5cblx0Zm9yICggY29uc3QgbWVzc2FnZSBvZiBzb3J0ZWQgKSB7XG5cdFx0Z3JvdXBzLnB1c2goIG1lc3NhZ2UgKTtcblx0fVxuXG5cdHJldHVybiBncm91cHMuaXRlbXM7XG59XG5cbmZ1bmN0aW9uIHVzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXMoKSB7XG5cdGNvbnN0IFsgbWVzc2FnZXNTdGF0ZSBdID0gdXNlU3RhdGUoIGdldEdyb3VwZWRNZXNzYWdlcyApO1xuXG5cdHJldHVybiBtZXNzYWdlc1N0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VHcm91cGVkVmFsaWRhdGlvbk1lc3NhZ2VzOyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyKCBpdGVtcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnJlZ2lzdGVyLFxuXHRcdFx0aXRlbXMsXG5cdFx0fTtcblx0fSxcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRyZWdpc3RlcjogJ1JFR0lTVEVSJ1xufVxuXG5cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBkaXNwYXRjaGVycyA9IHtcblx0WyBjb25zdGFudHMucmVnaXN0ZXIgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRjb25zdCB7XG5cdFx0XHQgICAgICBtZXNzYWdlcyxcblx0XHRcdCAgICAgIHNzcl9jYWxsYmFja3MsXG5cdFx0XHQgICAgICBmb3JtYXRzLFxuXHRcdFx0ICAgICAgcnVsZV90eXBlcyxcblx0XHQgICAgICB9ID0gYWN0aW9uLml0ZW1zO1xuXG5cdFx0c3RhdGUubWVzc2FnZXMgICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIG1lc3NhZ2VzICkgKTtcblx0XHRzdGF0ZS5zc3JDYWxsYmFja3MgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggc3NyX2NhbGxiYWNrcyApICk7XG5cdFx0c3RhdGUuZm9ybWF0cyAgICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGZvcm1hdHMgKSApO1xuXHRcdHN0YXRlLnJ1bGVUeXBlcyAgICA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBydWxlX3R5cGVzICkgKTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Li4uZGlzcGF0Y2hlcnMsXG59OyIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmNvbnN0IHsgY3JlYXRlUmVkdXhTdG9yZSB9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdXhTdG9yZSggJ2pldC1mb3Jtcy92YWxpZGF0aW9uJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnMsXG59ICk7XG4iLCJpbXBvcnQgZGlzcGF0Y2hlcnMgZnJvbSAnLi9kaXNwYXRjaGVycyc7XG5pbXBvcnQgaHVtYW5SZWFkYWJsZVByZXNldCBmcm9tICcuLi8uLi9wcmVzZXQvaGVscGVycy9odW1hblJlYWRhYmxlUHJlc2V0JztcblxuY29uc3Qge1xuXHQgICAgICBzZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcblx0bWVzc2FnZXM6IFtdLFxuXHRzc3JDYWxsYmFja3M6IFtdLFxuXHRmb3JtYXRzOiBbXSxcblx0cnVsZVR5cGVzOiBbXSxcblx0cnVsZVJlYWRlcnM6IHtcblx0XHRkZWZhdWx0ICggcnVsZSApIHtcblx0XHRcdGNvbnN0IHJ1bGVPcHRpb25zID0gc2VsZWN0KCAnamV0LWZvcm1zL3ZhbGlkYXRpb24nICkuZ2V0UnVsZShcblx0XHRcdFx0cnVsZS50eXBlLFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCAhcnVsZU9wdGlvbnMgKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblxuXHRcdFx0bGV0IHZhbHVlID0gcnVsZT8uZmllbGQgfHwgcnVsZT8udmFsdWUgfHwgJyc7XG5cblx0XHRcdHZhbHVlID0gKFxuXHRcdFx0XHRodW1hblJlYWRhYmxlUHJlc2V0KCB2YWx1ZSwgJ2InICkgfHwgJyhubyB2YWx1ZSknXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRydWxlT3B0aW9ucy5sYWJlbCxcblx0XHRcdFx0YDxjb2RlPiR7IHZhbHVlIH08L2NvZGU+YCxcblx0XHRcdF0uam9pbiggJyAnICk7XG5cdFx0fSxcblx0XHRzc3IgKCBydWxlICkge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0X18oICdGdW5jdGlvbjonLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0cnVsZT8udmFsdWUsXG5cdFx0XHRdLmpvaW4oICcgJyApO1xuXHRcdH0sXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xuXHRjb25zdCBjYWxsYmFjayA9IGRpc3BhdGNoZXJzWyBhY3Rpb24/LnR5cGUgXTtcblxuXHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBjYWxsYmFjayggc3RhdGUsIGFjdGlvbiApO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufSIsImNvbnN0IHNlbGVjdG9ycyA9IHtcblx0Z2V0UnVsZSggc3RhdGUsIHR5cGUgKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBzdGF0ZS5ydWxlVHlwZXMuZmluZEluZGV4KFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gdHlwZSxcblx0XHQpO1xuXG5cdFx0aWYgKCAtMSA9PT0gaW5kZXggKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLnJ1bGVUeXBlc1sgaW5kZXggXTtcblx0fSxcblx0cmVhZFJ1bGUoIHN0YXRlLCBydWxlICkge1xuXHRcdGNvbnN0IHsgdHlwZSA9ICcnIH0gPSBydWxlO1xuXG5cdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7RnVuY3Rpb259XG5cdFx0ICovXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSBzdGF0ZS5ydWxlUmVhZGVyc1sgdHlwZSBdID8/IGZhbHNlO1xuXG5cdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2FsbGJhY2sgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2soIHJ1bGUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUucnVsZVJlYWRlcnMuZGVmYXVsdCggcnVsZSApO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5zZWxlY3RvcnMsXG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3ltYTJ0NHtoZWlnaHQ6NDBweDttaW4taGVpZ2h0OjQwcHg7bGluZS1oZWlnaHQ6MS41O31cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcGFja2FnZS9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sLmpzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN5bWEydDR7aGVpZ2h0OjQwcHg7bWluLWhlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjEuNTt9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2ZxbWs1eSBzdmd7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweDt9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL1ZhbGlkYXRpb25NZXRhTWVzc2FnZS5qc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhLFdBQVcsQ0FBQyxVQUFVLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNmcW1rNXkgc3Zne2hlaWdodDoyNHB4O3dpZHRoOjI0cHg7fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9Hcm91cGVkU2VsZWN0Q29udHJvbC5qc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1NTQzM2VhM1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0dyb3VwZWRTZWxlY3RDb250cm9sLmpzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9Hcm91cGVkU2VsZWN0Q29udHJvbC5qc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL1ZhbGlkYXRpb25NZXRhTWVzc2FnZS5qc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2MmViY2M4YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL1ZhbGlkYXRpb25NZXRhTWVzc2FnZS5qc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vVmFsaWRhdGlvbk1ldGFNZXNzYWdlLmpzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImJsb2Nrc1RvQWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJhcGlGZXRjaFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIHNyYy9jc3MudHNcbnZhciBpZHggPSAwO1xudmFyIGNzcyA9ICgpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIHJldHVybiBgbW9ja2VkLWNzcy0ke2lkeCsrfWA7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdVc2luZyB0aGUgXCJjc3NcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LidcbiAgKTtcbn07XG52YXIgY3NzX2RlZmF1bHQgPSBjc3M7XG5cbi8vIHNyYy9jeC50c1xudmFyIGN4ID0gZnVuY3Rpb24gY3gyKCkge1xuICBjb25zdCBwcmVzZW50Q2xhc3NOYW1lcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBhdG9taWNDbGFzc2VzID0ge307XG4gIGNvbnN0IG5vbkF0b21pY0NsYXNzZXMgPSBbXTtcbiAgcHJlc2VudENsYXNzTmFtZXMuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgY29uc3QgaW5kaXZpZHVhbENsYXNzTmFtZXMgPSBhcmcgPyBhcmcuc3BsaXQoXCIgXCIpIDogW107XG4gICAgaW5kaXZpZHVhbENsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJhdG1fXCIpKSB7XG4gICAgICAgIGNvbnN0IFssIGtleUhhc2hdID0gY2xhc3NOYW1lLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSA9IGNsYXNzTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbkF0b21pY0NsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAoY29uc3Qga2V5SGFzaCBpbiBhdG9taWNDbGFzc2VzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhdG9taWNDbGFzc2VzLCBrZXlIYXNoKSkge1xuICAgICAgcmVzdWx0LnB1c2goYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKC4uLm5vbkF0b21pY0NsYXNzZXMpO1xuICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpO1xufTtcbnZhciBjeF9kZWZhdWx0ID0gY3g7XG5leHBvcnQge1xuICBjc3NfZGVmYXVsdCBhcyBjc3MsXG4gIGN4X2RlZmF1bHQgYXMgY3hcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiLy8gc3JjL3N0eWxlZC50c1xuaW1wb3J0IHZhbGlkQXR0ciBmcm9tIFwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3ggfSBmcm9tIFwiQGxpbmFyaWEvY29yZVwiO1xudmFyIGlzQ2FwaXRhbCA9IChjaCkgPT4gY2gudG9VcHBlckNhc2UoKSA9PT0gY2g7XG52YXIgZmlsdGVyS2V5ID0gKGtleXMpID0+IChrZXkpID0+IGtleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbnZhciBvbWl0ID0gKG9iaiwga2V5cykgPT4ge1xuICBjb25zdCByZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoZmlsdGVyS2V5KGtleXMpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICByZXNba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn07XG5mdW5jdGlvbiBmaWx0ZXJQcm9wcyhhc0lzLCBwcm9wcywgb21pdEtleXMpIHtcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IG9taXQocHJvcHMsIG9taXRLZXlzKTtcbiAgaWYgKCFhc0lzKSB7XG4gICAgY29uc3QgaW50ZXJvcFZhbGlkQXR0ciA9IHR5cGVvZiB2YWxpZEF0dHIgPT09IFwiZnVuY3Rpb25cIiA/IHsgZGVmYXVsdDogdmFsaWRBdHRyIH0gOiB2YWxpZEF0dHI7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVyZWRQcm9wcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWludGVyb3BWYWxpZEF0dHIuZGVmYXVsdChrZXkpKSB7XG4gICAgICAgIGRlbGV0ZSBmaWx0ZXJlZFByb3BzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkUHJvcHM7XG59XG52YXIgd2FybklmSW52YWxpZCA9ICh2YWx1ZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlLG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBBbiBpbnRlcnBvbGF0aW9uIGV2YWx1YXRlZCB0byAnJHtzdHJpbmdpZmllZH0nIGluIHRoZSBjb21wb25lbnQgJyR7Y29tcG9uZW50TmFtZX0nLCB3aGljaCBpcyBwcm9iYWJseSBhIG1pc3Rha2UuIFlvdSBzaG91bGQgZXhwbGljaXRseSBjYXN0IG9yIHRyYW5zZm9ybSB0aGUgdmFsdWUgdG8gYSBzdHJpbmcuYFxuICAgICk7XG4gIH1cbn07XG52YXIgaWR4ID0gMDtcbmZ1bmN0aW9uIHN0eWxlZCh0YWcpIHtcbiAgbGV0IG1vY2tlZENsYXNzID0gXCJcIjtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIG1vY2tlZENsYXNzICs9IGBtb2NrZWQtc3R5bGVkLSR7aWR4Kyt9YDtcbiAgICBpZiAodGFnICYmIHRhZy5fX3d5d19tZXRhICYmIHRhZy5fX3d5d19tZXRhLmNsYXNzTmFtZSkge1xuICAgICAgbW9ja2VkQ2xhc3MgKz0gYCAke3RhZy5fX3d5d19tZXRhLmNsYXNzTmFtZX1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKG9wdGlvbnMpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInRlc3RcIikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdVc2luZyB0aGUgXCJzdHlsZWRcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NhbGxzdGFjay9saW5hcmlhI3NldHVwJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZW5kZXIgPSAocHJvcHMsIHJlZikgPT4ge1xuICAgICAgY29uc3QgeyBhczogY29tcG9uZW50ID0gdGFnLCBjbGFzczogY2xhc3NOYW1lID0gbW9ja2VkQ2xhc3MgfSA9IHByb3BzO1xuICAgICAgY29uc3Qgc2hvdWxkS2VlcFByb3BzID0gb3B0aW9ucy5wcm9wc0FzSXMgPT09IHZvaWQgMCA/ICEodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJzdHJpbmdcIiAmJiBjb21wb25lbnQuaW5kZXhPZihcIi1cIikgPT09IC0xICYmICFpc0NhcGl0YWwoY29tcG9uZW50WzBdKSkgOiBvcHRpb25zLnByb3BzQXNJcztcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvcHMgPSBmaWx0ZXJQcm9wcyhzaG91bGRLZWVwUHJvcHMsIHByb3BzLCBbXG4gICAgICAgIFwiYXNcIixcbiAgICAgICAgXCJjbGFzc1wiXG4gICAgICBdKTtcbiAgICAgIGZpbHRlcmVkUHJvcHMucmVmID0gcmVmO1xuICAgICAgZmlsdGVyZWRQcm9wcy5jbGFzc05hbWUgPSBvcHRpb25zLmF0b21pYyA/IGN4KG9wdGlvbnMuY2xhc3MsIGZpbHRlcmVkUHJvcHMuY2xhc3NOYW1lIHx8IGNsYXNzTmFtZSkgOiBjeChmaWx0ZXJlZFByb3BzLmNsYXNzTmFtZSB8fCBjbGFzc05hbWUsIG9wdGlvbnMuY2xhc3MpO1xuICAgICAgY29uc3QgeyB2YXJzIH0gPSBvcHRpb25zO1xuICAgICAgaWYgKHZhcnMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHZhcnMpIHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHZhcnNbbmFtZV07XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFyaWFibGVbMF07XG4gICAgICAgICAgY29uc3QgdW5pdCA9IHZhcmlhYmxlWzFdIHx8IFwiXCI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgcmVzdWx0ID09PSBcImZ1bmN0aW9uXCIgPyByZXN1bHQocHJvcHMpIDogcmVzdWx0O1xuICAgICAgICAgIHdhcm5JZkludmFsaWQodmFsdWUsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgICAgc3R5bGVbYC0tJHtuYW1lfWBdID0gYCR7dmFsdWV9JHt1bml0fWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3duU3R5bGUgPSBmaWx0ZXJlZFByb3BzLnN0eWxlIHx8IHt9O1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3duU3R5bGUpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHN0eWxlW2tleV0gPSBvd25TdHlsZVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbHRlcmVkUHJvcHMuc3R5bGUgPSBzdHlsZTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWcuX193eXdfbWV0YSAmJiB0YWcgIT09IGNvbXBvbmVudCkge1xuICAgICAgICBmaWx0ZXJlZFByb3BzLmFzID0gY29tcG9uZW50O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIGZpbHRlcmVkUHJvcHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBmaWx0ZXJlZFByb3BzKTtcbiAgICB9O1xuICAgIGNvbnN0IFJlc3VsdCA9IFJlYWN0LmZvcndhcmRSZWYgPyBSZWFjdC5mb3J3YXJkUmVmKHJlbmRlcikgOiAoXG4gICAgICAvLyBSZWFjdC5mb3J3YXJkUmVmIHdvbid0IGF2YWlsYWJsZSBvbiBvbGRlciBSZWFjdCB2ZXJzaW9ucyBhbmQgaW4gUHJlYWN0XG4gICAgICAvLyBGYWxsYmFjayB0byBhIGlubmVyUmVmIHByb3AgaW4gdGhhdCBjYXNlXG4gICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdCA9IG9taXQocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcihyZXN0LCBwcm9wcy5pbm5lclJlZik7XG4gICAgICB9XG4gICAgKTtcbiAgICBSZXN1bHQuZGlzcGxheU5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgUmVzdWx0Ll9fd3l3X21ldGEgPSB7XG4gICAgICBjbGFzc05hbWU6IG9wdGlvbnMuY2xhc3MgfHwgbW9ja2VkQ2xhc3MsXG4gICAgICBleHRlbmRzOiB0YWdcbiAgICB9O1xuICAgIHJldHVybiBSZXN1bHQ7XG4gIH07XG59XG52YXIgc3R5bGVkX2RlZmF1bHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgUHJveHkoc3R5bGVkLCB7XG4gIGdldChvLCBwcm9wKSB7XG4gICAgcmV0dXJuIG8ocHJvcCk7XG4gIH1cbn0pIDogc3R5bGVkO1xuZXhwb3J0IHtcbiAgc3R5bGVkX2RlZmF1bHQgYXMgc3R5bGVkXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWN0aW9uRmllbGRzTWFwIGZyb20gJy4vYWN0aW9uLWZpZWxkcy1tYXAvY29tcG9uZW50cy9BY3Rpb25GaWVsZHNNYXAnO1xuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gJy4vYWN0aW9uLW1vZGFsL2NvbXBvbmVudHMvQWN0aW9uTW9kYWwnO1xuaW1wb3J0IFdyYXBwZXJSZXF1aXJlZENvbnRyb2xcblx0ZnJvbSAnLi9hY3Rpb24tZmllbGRzLW1hcC9jb21wb25lbnRzL1dyYXBwZXJSZXF1aXJlZENvbnRyb2wnO1xuaW1wb3J0IFRvb2xzLCB7XG5cdGNsYXNzbmFtZXMsXG5cdGV2ZW50LFxuXHRnZXRDb252ZXJ0ZWROYW1lLFxuXHRsaXN0ZW4sXG5cdG1heWJlQ3lyVG9MYXRpbixcblx0Y29udmVydE9iamVjdFRvT3B0aW9uc0xpc3QsXG5cdGNvbHVtbixcblx0YXNzZXRVcmwsXG5cdHNldCxcblx0aXNFbXB0eSxcblx0ZXh0ZW5kUHJvdG90eXBlLFxufSBmcm9tICcuL3Rvb2xzJztcblxuaW1wb3J0IGdldEF2YWlsYWJsZUZpZWxkcyBmcm9tICcuL2Jsb2Nrcy9oZWxwZXJzL2dldEF2YWlsYWJsZUZpZWxkcyc7XG5pbXBvcnQgZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nXG5cdGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nJztcbmltcG9ydCBnZXRCbG9ja3NCeU5hbWUgZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRCbG9ja3NCeU5hbWUnO1xuaW1wb3J0IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50IGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQnO1xuaW1wb3J0IGdldEZvcm1GaWVsZHNCbG9ja3MgZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRGb3JtRmllbGRzQmxvY2tzJztcbmltcG9ydCBnZXRJbm5lckJsb2NrcyBmcm9tICcuL2Jsb2Nrcy9oZWxwZXJzL2dldElubmVyQmxvY2tzJztcbmltcG9ydCBhcHBlbmRGaWVsZCBmcm9tICcuL2Jsb2Nrcy9oZWxwZXJzL2FwcGVuZEZpZWxkJztcblxuaW1wb3J0IGdhdGV3YXlBdHRyIGZyb20gJy4vZ2F0ZXdheXMvaGVscGVycy9nYXRld2F5QXR0cic7XG5pbXBvcnQgZ2F0ZXdheUxhYmVsIGZyb20gJy4vZ2F0ZXdheXMvaGVscGVycy9nYXRld2F5TGFiZWwnO1xuaW1wb3J0IHJlZ2lzdGVyR2F0ZXdheSBmcm9tICcuL2dhdGV3YXlzL2hlbHBlcnMvcmVnaXN0ZXJHYXRld2F5JztcbmltcG9ydCByZW5kZXJHYXRld2F5IGZyb20gJy4vZ2F0ZXdheXMvaGVscGVycy9yZW5kZXJHYXRld2F5JztcbmltcG9ydCByZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyXG5cdGZyb20gJy4vZ2F0ZXdheXMvaGVscGVycy9yZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyJztcbmltcG9ydCB1c2VTdWNjZXNzTm90aWNlIGZyb20gJy4vaG9va3MvdXNlU3VjY2Vzc05vdGljZSc7XG5pbXBvcnQgdXNlU2VsZWN0UG9zdE1ldGEgZnJvbSAnLi9ob29rcy91c2VTZWxlY3RQb3N0TWV0YSc7XG5pbXBvcnQgdXNlT25VcGRhdGVNb2RhbCBmcm9tICcuL2FjdGlvbi1tb2RhbC9ob29rcy91c2VPblVwZGF0ZU1vZGFsJztcbmltcG9ydCB3aXRoU2VsZWN0Rm9ybUZpZWxkcyBmcm9tICcuL2hvb2tzL3dpdGhTZWxlY3RGb3JtRmllbGRzJztcbmltcG9ydCB3aXRoU2VsZWN0R2F0ZXdheXMgZnJvbSAnLi9nYXRld2F5cy9ob29rcy93aXRoU2VsZWN0R2F0ZXdheXMnO1xuaW1wb3J0IHdpdGhEaXNwYXRjaEdhdGV3YXlzIGZyb20gJy4vZ2F0ZXdheXMvaG9va3Mvd2l0aERpc3BhdGNoR2F0ZXdheXMnO1xuaW1wb3J0IHVzZVJlcXVlc3RFdmVudHMgZnJvbSAnLi9ldmVudHMvaG9va3MvdXNlUmVxdWVzdEV2ZW50cyc7XG5pbXBvcnQgdXNlQmxvY2tDb25kaXRpb25zIGZyb20gJy4vYmxvY2stY29uZGl0aW9ucy9ob29rcy91c2VCbG9ja0NvbmRpdGlvbnMnO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi9ibG9ja3MvaG9va3MvdXNlVW5pcUtleSc7XG5pbXBvcnQgdXNlSXNBZHZhbmNlZFZhbGlkYXRpb24gZnJvbSAnLi9ibG9ja3MvaG9va3MvdXNlSXNBZHZhbmNlZFZhbGlkYXRpb24nO1xuaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5pbXBvcnQgRHluYW1pY1ByZXNldCBmcm9tICcuL3ByZXNldC9jb21wb25lbnRzL0R5bmFtaWNQcmVzZXQnO1xuaW1wb3J0IEpldEZpZWxkc01hcENvbnRyb2wgZnJvbSAnLi4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwJztcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSAnLi9wcmVzZXQvY29tcG9uZW50cy9GaWVsZFdpdGhQcmVzZXQnO1xuaW1wb3J0IEdsb2JhbEZpZWxkUHJlc2V0IGZyb20gJy4vcHJlc2V0L2NvbXBvbmVudHMvR2xvYmFsRmllbGRQcmVzZXQnO1xuaW1wb3J0IEF2YWlsYWJsZU1hcEZpZWxkUHJlc2V0XG5cdGZyb20gJy4vcHJlc2V0L2NvbXBvbmVudHMvQXZhaWxhYmxlTWFwRmllbGRQcmVzZXQnO1xuaW1wb3J0IE1hcEZpZWxkUHJlc2V0IGZyb20gJy4vcHJlc2V0L2NvbXBvbmVudHMvTWFwRmllbGRQcmVzZXQnO1xuaW1wb3J0IHVzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXNcblx0ZnJvbSAnLi92YWxpZGF0aW9uL2hvb2tzL3VzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXMnO1xuaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0ZpZWxkV3JhcHBlcic7XG5pbXBvcnQgTWFjcm9zSW5zZXJ0ZXIgZnJvbSAnLi9jb21wb25lbnRzL01hY3Jvc0luc2VydGVyJztcbmltcG9ydCBSZXBlYXRlcldpdGhTdGF0ZSBmcm9tICcuL3JlcGVhdGVyL2NvbXBvbmVudHMvUmVwZWF0ZXJXaXRoU3RhdGUnO1xuaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSAnLi9wcmVzZXQvY29tcG9uZW50cy93aXRoUHJlc2V0JztcbmltcG9ydCBBZHZhbmNlZEZpZWxkcyBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0FkdmFuY2VkRmllbGRzJztcbmltcG9ydCBHZW5lcmFsRmllbGRzIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvR2VuZXJhbEZpZWxkcyc7XG5pbXBvcnQgVG9vbEJhckZpZWxkcyBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL1Rvb2xCYXJGaWVsZHMnO1xuaW1wb3J0IEhvcml6b250YWxMaW5lIGZyb20gJy4vY29tcG9uZW50cy9Ib3Jpem9udGFsTGluZSc7XG5pbXBvcnQgRmllbGRTZXR0aW5nc1dyYXBwZXIgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9GaWVsZFNldHRpbmdzV3JhcHBlcic7XG5pbXBvcnQgR3JvdXBlZFNlbGVjdENvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sJztcbmltcG9ydCBnZXRCbG9ja0NvbnRyb2xzIGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0QmxvY2tDb250cm9scyc7XG5pbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi9jb21wb25lbnRzL0Jhc2VIZWxwJztcbmltcG9ydCBHYXRld2F5RmV0Y2hCdXR0b24gZnJvbSAnLi9nYXRld2F5cy9jb21wb25lbnRzL0dhdGV3YXlGZXRjaEJ1dHRvbic7XG5pbXBvcnQgJy4vc3RvcmUubWFuYWdlcic7XG5pbXBvcnQgQWN0aW9uTW9kYWxDb250ZXh0IGZyb20gJy4vYWN0aW9uLW1vZGFsL2NvbnRleHQvQWN0aW9uTW9kYWxDb250ZXh0JztcbmltcG9ydCBTYWZlRGVsZXRlQ29udGV4dCBmcm9tICcuL3JlcGVhdGVyL2NvbnRleHQvc2FmZS5kZWxldGUnO1xuaW1wb3J0IFJlcGVhdGVySXRlbUNvbnRleHQgZnJvbSAnLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLml0ZW0nO1xuaW1wb3J0IFJlcGVhdGVyQm9keUNvbnRleHQgZnJvbSAnLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmJvZHknO1xuaW1wb3J0IFJlcGVhdGVySGVhZENvbnRleHQgZnJvbSAnLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmhlYWQnO1xuaW1wb3J0IFJlcGVhdGVyQnV0dG9uc0NvbnRleHRcblx0ZnJvbSAnLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmJ1dHRvbnMnO1xuaW1wb3J0IEJsb2NrVmFsdWVJdGVtQ29udGV4dCBmcm9tICcuL2NvbnRleHQvYmxvY2sudmFsdWUuaXRlbS5jb250ZXh0JztcbmltcG9ydCBTYWZlRGVsZXRlVG9nZ2xlIGZyb20gJy4vcmVwZWF0ZXIvY29tcG9uZW50cy9zYWZlLmRlbGV0ZS50b2dnbGUnO1xuaW1wb3J0IFJlcGVhdGVyQWRkTmV3IGZyb20gJy4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5hZGQubmV3JztcbmltcG9ydCBSZXBlYXRlciBmcm9tICcuL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXInO1xuaW1wb3J0IFZhbGlkYXRpb25Ub2dnbGVHcm91cFxuXHRmcm9tICcuL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uVG9nZ2xlR3JvdXAnO1xuaW1wb3J0IFZhbGlkYXRpb25CbG9ja01lc3NhZ2Vcblx0ZnJvbSAnLi92YWxpZGF0aW9uL2NvbXBvbmVudHMvVmFsaWRhdGlvbkJsb2NrTWVzc2FnZSc7XG5pbXBvcnQgVmFsaWRhdGlvbk1ldGFNZXNzYWdlXG5cdGZyb20gJy4vdmFsaWRhdGlvbi9jb21wb25lbnRzL1ZhbGlkYXRpb25NZXRhTWVzc2FnZSc7XG5pbXBvcnQgQWN0aW9uRmllbGRzTWFwQ29udGV4dFxuXHRmcm9tICcuL2FjdGlvbi1maWVsZHMtbWFwL2NvbnRleHQvQWN0aW9uRmllbGRzTWFwQ29udGV4dCc7XG5pbXBvcnQgQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dFxuXHRmcm9tICcuL2FjdGlvbi1maWVsZHMtbWFwL2NvbnRleHQvQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCc7XG5pbXBvcnQgRHluYW1pY1Byb3BlcnR5U2VsZWN0XG5cdGZyb20gJy4vYWN0aW9uLWZpZWxkcy1tYXAvY29tcG9uZW50cy9EeW5hbWljUHJvcGVydHlTZWxlY3QnO1xuaW1wb3J0IER5bmFtaWNWYWx1ZXMgZnJvbSAnLi9keW5hbWljLnZhbHVlL2NvbXBvbmVudHMvRHluYW1pY1ZhbHVlcyc7XG5pbXBvcnQgUmVwZWF0ZXJBZGRPck9wZXJhdG9yIGZyb20gJy4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5hZGQub3InO1xuaW1wb3J0IEVkaXRBZHZhbmNlZFJ1bGVzQnV0dG9uXG5cdGZyb20gJy4vdmFsaWRhdGlvbi9jb21wb25lbnRzL0VkaXRBZHZhbmNlZFJ1bGVzQnV0dG9uJztcbmltcG9ydCBSZXBlYXRlclN0YXRlQ29udGV4dCBmcm9tICcuL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuc3RhdGUnO1xuaW1wb3J0IFJlcGVhdGVyU3RhdGUgZnJvbSAnLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLnN0YXRlJztcbmltcG9ydCBGaWVsZENvbnRyb2wgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9GaWVsZENvbnRyb2wnO1xuaW1wb3J0IEJsb2NrTGFiZWwgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0xhYmVsJztcbmltcG9ydCBCbG9ja05hbWUgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja05hbWUnO1xuaW1wb3J0IEJsb2NrRGVzY3JpcHRpb24gZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0Rlc2NyaXB0aW9uJztcbmltcG9ydCBCbG9ja0RlZmF1bHRWYWx1ZSBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrRGVmYXVsdFZhbHVlJztcbmltcG9ydCBCbG9ja1BsYWNlaG9sZGVyIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tQbGFjZWhvbGRlcic7XG5pbXBvcnQgQmxvY2tBZGRQcmV2QnV0dG9uIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tBZGRQcmV2QnV0dG9uJztcbmltcG9ydCBCbG9ja1ByZXZCdXR0b25MYWJlbCBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrUHJldkJ1dHRvbkxhYmVsJztcbmltcG9ydCBCbG9ja1Zpc2liaWxpdHkgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja1Zpc2liaWxpdHknO1xuaW1wb3J0IEJsb2NrQ2xhc3NOYW1lIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tDbGFzc05hbWUnO1xuaW1wb3J0IEJsb2NrQWR2YW5jZWRWYWx1ZSBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrQWR2YW5jZWRWYWx1ZSc7XG5pbXBvcnQgTWFjcm9zRmllbGRzVGVtcGxhdGVcblx0ZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zRmllbGRzVGVtcGxhdGUnO1xuaW1wb3J0IE1hY3Jvc0J1dHRvblRlbXBsYXRlXG5cdGZyb20gJy4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0J1dHRvblRlbXBsYXRlJztcbmltcG9ydCBNYWNyb3NGaWVsZHMgZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zRmllbGRzJztcbmltcG9ydCBQb3BvdmVyQ29udGV4dCBmcm9tICcuL21hY3Jvcy5idXR0b24vY29udGV4dC9Qb3BvdmVyQ29udGV4dCc7XG5pbXBvcnQgUG9wb3Zlckl0ZW0gZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbnRleHQvUG9wb3Zlckl0ZW0nO1xuaW1wb3J0IFByZXNldEJ1dHRvbiBmcm9tICcuL3ByZXNldC9jb21wb25lbnRzL1ByZXNldEJ1dHRvbic7XG5pbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9Db25kaXRpb25JdGVtJztcbmltcG9ydCBBZHZhbmNlZEluc3BlY3RvckNvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL0FkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCc7XG5pbXBvcnQgQWR2YW5jZWRNb2RhbENvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL0FkdmFuY2VkTW9kYWxDb250cm9sJztcbmltcG9ydCBDbGllbnRTaWRlTWFjcm9zXG5cdGZyb20gJy4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL0NsaWVudFNpZGVNYWNyb3MnO1xuaW1wb3J0IHsgaW5zZXJ0TWFjcm8gfSBmcm9tICcuL21hY3Jvcy5idXR0b24vZnVuY3Rpb25zJztcbmltcG9ydCB1c2VJbnNlcnRNYWNybyBmcm9tICcuL21hY3Jvcy5idXR0b24vaG9va3MvdXNlSW5zZXJ0TWFjcm8nO1xuaW1wb3J0IFRvZ2dsZUNvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL1RvZ2dsZUNvbnRyb2wnO1xuaW1wb3J0IERldGFpbHNDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHNDb250YWluZXInO1xuaW1wb3J0IEhvdmVyQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9Ib3ZlckNvbnRhaW5lcic7XG5pbXBvcnQgZ2V0Q3VycmVudElubmVyQmxvY2tzIGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0Q3VycmVudElubmVyQmxvY2tzJztcbmltcG9ydCBDb250YWluZXJzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFpbmVyc0xpc3QnO1xuaW1wb3J0IEh1bWFuUmVhZGFibGVDb25kaXRpb25zXG5cdGZyb20gJy4vYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0h1bWFuUmVhZGFibGVDb25kaXRpb25zJztcbmltcG9ydCBodW1hblJlYWRhYmxlQ29uZGl0aW9uXG5cdGZyb20gJy4vYmxvY2stY29uZGl0aW9ucy9oZWxwZXJzL2h1bWFuUmVhZGFibGVDb25kaXRpb24nO1xuaW1wb3J0IENvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlclxuXHRmcm9tICcuL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9Db25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXInO1xuaW1wb3J0IFNlcnZlclNpZGVNYWNyb3MgZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvU2VydmVyU2lkZU1hY3Jvcyc7XG5pbXBvcnQgdXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlIGZyb20gJy4vYmxvY2tzL2hvb2tzL3VzZVVuaXF1ZU5hbWVPbkR1cGxpY2F0ZSc7XG5pbXBvcnQgU2VsZWN0VmFyaWF0aW9ucyBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL1NlbGVjdFZhcmlhdGlvbnMnO1xuaW1wb3J0IFRvZ2dsZUdyb3VwVmFyaWF0aW9ucyBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL1RvZ2dsZUdyb3VwVmFyaWF0aW9ucyc7XG5pbXBvcnQgQmFzZUxhYmVsIGZyb20gJy4vY29tcG9uZW50cy9CYXNlTGFiZWwnO1xuaW1wb3J0IHVzZVN1cHBvcnQgZnJvbSAnLi9ibG9ja3MvaG9va3MvdXNlU3VwcG9ydCc7XG5pbXBvcnQgQXR0cmlidXRlSGVscCBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0F0dHJpYnV0ZUhlbHAnO1xuaW1wb3J0IEFjdGlvbkJ1dHRvblBsYWNlaG9sZGVyXG5cdGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvY29tcG9uZW50cy9BY3Rpb25CdXR0b25QbGFjZWhvbGRlcic7XG5pbXBvcnQgQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbFxuXHRmcm9tICcuL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGwnO1xuaW1wb3J0IHVzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0XG5cdGZyb20gJy4vYmxvY2tzL2hvb2tzL3VzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0JztcbmltcG9ydCBTY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXJcblx0ZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9TY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXInO1xuaW1wb3J0IGdldFN1cHBvcnQgZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRTdXBwb3J0JztcbmltcG9ydCB1c2VFdmVudHMgZnJvbSAnLi9ldmVudHMvaG9va3MvdXNlRXZlbnRzJztcbmltcG9ydCB1c2VPcGVuRWRpdG9yUGFuZWwgZnJvbSAnLi9ob29rcy91c2VPcGVuRWRpdG9yUGFuZWwnO1xuXG4vLyBKRkJDb21wb25lbnRzXG53aW5kb3cuSmV0RkJDb21wb25lbnRzID0ge1xuXHQuLi4oXG5cdFx0d2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz8ge31cblx0KSxcblx0QmFzZUxhYmVsLFxuXHRBY3Rpb25GaWVsZHNNYXAsXG5cdEFjdGlvbk1vZGFsLFxuXHRBY3Rpb25Nb2RhbENvbnRleHQsXG5cdFNhZmVEZWxldGVDb250ZXh0LFxuXHRSZXBlYXRlckl0ZW1Db250ZXh0LFxuXHRSZXBlYXRlckJvZHlDb250ZXh0LFxuXHRSZXBlYXRlckhlYWRDb250ZXh0LFxuXHRSZXBlYXRlckJ1dHRvbnNDb250ZXh0LFxuXHRBY3Rpb25GaWVsZHNNYXBDb250ZXh0LFxuXHRDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0LFxuXHRCbG9ja1ZhbHVlSXRlbUNvbnRleHQsXG5cdER5bmFtaWNQcm9wZXJ0eVNlbGVjdCxcblx0U2FmZURlbGV0ZVRvZ2dsZSxcblx0UmVwZWF0ZXJBZGROZXcsXG5cdFJlcGVhdGVyQWRkT3JPcGVyYXRvcixcblx0UmVwZWF0ZXIsXG5cdFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXG5cdER5bmFtaWNQcmVzZXQsXG5cdEpldEZpZWxkc01hcENvbnRyb2wsXG5cdEZpZWxkV2l0aFByZXNldCxcblx0R2xvYmFsRmllbGQ6IEdsb2JhbEZpZWxkUHJlc2V0LFxuXHRBdmFpbGFibGVNYXBGaWVsZDogQXZhaWxhYmxlTWFwRmllbGRQcmVzZXQsXG5cdE1hcEZpZWxkOiBNYXBGaWVsZFByZXNldCxcblx0RmllbGRXcmFwcGVyLFxuXHRNYWNyb3NJbnNlcnRlcixcblx0UmVwZWF0ZXJXaXRoU3RhdGUsXG5cdEFkdmFuY2VkRmllbGRzLFxuXHRHZW5lcmFsRmllbGRzLFxuXHRUb29sQmFyRmllbGRzLFxuXHRGaWVsZENvbnRyb2wsXG5cdEhvcml6b250YWxMaW5lLFxuXHRGaWVsZFNldHRpbmdzV3JhcHBlcixcblx0R3JvdXBlZFNlbGVjdENvbnRyb2wsXG5cdEJhc2VIZWxwLFxuXHRHYXRld2F5RmV0Y2hCdXR0b24sXG5cdFZhbGlkYXRpb25Ub2dnbGVHcm91cCxcblx0VmFsaWRhdGlvbkJsb2NrTWVzc2FnZSxcblx0VmFsaWRhdGlvbk1ldGFNZXNzYWdlLFxuXHREeW5hbWljVmFsdWVzLFxuXHRFZGl0QWR2YW5jZWRSdWxlc0J1dHRvbixcblx0UmVwZWF0ZXJTdGF0ZUNvbnRleHQsXG5cdFJlcGVhdGVyU3RhdGUsXG5cdEJsb2NrTGFiZWwsXG5cdEJsb2NrTmFtZSxcblx0QmxvY2tEZXNjcmlwdGlvbixcblx0QmxvY2tEZWZhdWx0VmFsdWUsXG5cdEJsb2NrUGxhY2Vob2xkZXIsXG5cdEJsb2NrQWRkUHJldkJ1dHRvbixcblx0QmxvY2tQcmV2QnV0dG9uTGFiZWwsXG5cdEJsb2NrVmlzaWJpbGl0eSxcblx0QmxvY2tDbGFzc05hbWUsXG5cdEJsb2NrQWR2YW5jZWRWYWx1ZSxcblx0TWFjcm9zRmllbGRzLFxuXHRNYWNyb3NCdXR0b25UZW1wbGF0ZSxcblx0TWFjcm9zRmllbGRzVGVtcGxhdGUsXG5cdFNob3dQb3BvdmVyQ29udGV4dDogUG9wb3ZlckNvbnRleHQsXG5cdFBvcG92ZXJJdGVtLFxuXHRQcmVzZXRCdXR0b24sXG5cdENvbmRpdGlvbkl0ZW0sXG5cdEFkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCxcblx0QWR2YW5jZWRNb2RhbENvbnRyb2wsXG5cdENsaWVudFNpZGVNYWNyb3MsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdERldGFpbHNDb250YWluZXIsXG5cdEhvdmVyQ29udGFpbmVyLFxuXHRDb250YWluZXJzTGlzdCxcblx0SHVtYW5SZWFkYWJsZUNvbmRpdGlvbnMsXG5cdENvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlcixcblx0U2VydmVyU2lkZU1hY3Jvcyxcblx0U2VsZWN0VmFyaWF0aW9ucyxcblx0VG9nZ2xlR3JvdXBWYXJpYXRpb25zLFxuXHRBdHRyaWJ1dGVIZWxwLFxuXHRBY3Rpb25CdXR0b25QbGFjZWhvbGRlcixcblx0QWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbCxcblx0U2NvcGVkQXR0cmlidXRlc1Byb3ZpZGVyLFxufTtcblxuLy8gSkZCRnVuY3Rpb25zXG53aW5kb3cuSmV0RkJBY3Rpb25zID0ge1xuXHQuLi4oXG5cdFx0d2luZG93Py5KZXRGQkFjdGlvbnMgPz8ge31cblx0KSxcblx0d2l0aFByZXNldCxcblx0Z2V0SW5uZXJCbG9ja3MsXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcblx0Z2V0QXZhaWxhYmxlRmllbGRzLFxuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcblx0Z2F0ZXdheUF0dHIsXG5cdGdhdGV3YXlMYWJlbCxcblx0cmVnaXN0ZXJHYXRld2F5LFxuXHRUb29scyxcblx0ZXZlbnQsXG5cdGxpc3Rlbixcblx0cmVuZGVyR2F0ZXdheSxcblx0cmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlcixcblx0bWF5YmVDeXJUb0xhdGluLFxuXHRnZXRDb252ZXJ0ZWROYW1lLFxuXHRnZXRCbG9ja0NvbnRyb2xzLFxuXHRjbGFzc25hbWVzLFxuXHRnZXRCbG9ja3NCeU5hbWUsXG5cdGNvbnZlcnRPYmplY3RUb09wdGlvbnNMaXN0LFxuXHRhcHBlbmRGaWVsZCxcblx0aW5zZXJ0TWFjcm8sXG5cdGNvbHVtbixcblx0Z2V0Q3VycmVudElubmVyQmxvY2tzLFxuXHRodW1hblJlYWRhYmxlQ29uZGl0aW9uLFxuXHRhc3NldFVybCxcblx0c2V0LFxuXHRpc0VtcHR5LFxuXHRnZXRTdXBwb3J0LFxuXHRleHRlbmRQcm90b3R5cGUsXG59O1xuXG4vLyBKRkJIb29rc1xud2luZG93LkpldEZCSG9va3MgPSB7XG5cdC4uLihcblx0XHR3aW5kb3c/LkpldEZCSG9va3MgPz8ge31cblx0KSxcblx0dXNlU2VsZWN0UG9zdE1ldGEsXG5cdHVzZVN1Y2Nlc3NOb3RpY2UsXG5cdHVzZUV2ZW50cyxcblx0dXNlUmVxdWVzdEV2ZW50cyxcblx0dXNlQmxvY2tDb25kaXRpb25zLFxuXHR1c2VVbmlxS2V5LFxuXHR1c2VCbG9ja0F0dHJpYnV0ZXMsXG5cdHVzZUlzQWR2YW5jZWRWYWxpZGF0aW9uLFxuXHR1c2VHcm91cGVkVmFsaWRhdGlvbk1lc3NhZ2VzLFxuXHR3aXRoU2VsZWN0Rm9ybUZpZWxkcyxcblx0d2l0aFNlbGVjdEdhdGV3YXlzLFxuXHR3aXRoRGlzcGF0Y2hHYXRld2F5cyxcblx0dXNlT25VcGRhdGVNb2RhbCxcblx0dXNlSW5zZXJ0TWFjcm8sXG5cdHVzZUlzSGFzQXR0cmlidXRlLFxuXHR1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUsXG5cdHVzZVN1cHBvcnQsXG5cdHVzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0LFxuXHR1c2VPcGVuRWRpdG9yUGFuZWwsXG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=