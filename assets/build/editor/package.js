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
        __next40pxDefaultSize: true
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
        __next40pxDefaultSize: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yL3BhY2thZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFPQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUdBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQW1CQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBR0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFVQTtBQUFBO0FBS0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQTs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBSUE7QUFLQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBT0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQVNBO0FBQ0E7QUFJQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBR0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFVQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBTUE7QUFHQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQU9BO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQVNBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFRQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBU0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFhQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaElBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFLQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBT0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcklBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBS0E7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBdUJBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFBQTtBQUFBOztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFBQTtBQUFBOztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBVUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQVFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pPQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvZW1vdGlvbi1pcy1wcm9wLXZhbGlkLmVzbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuZXNtLmpzIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tYnV0dG9ucy9jb21wb25lbnRzL0FjdGlvbkJ1dHRvblBsYWNlaG9sZGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYWN0aW9uLWZpZWxkcy1tYXAvY29tcG9uZW50cy9BY3Rpb25GaWVsZHNNYXAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tZmllbGRzLW1hcC9jb21wb25lbnRzL0R5bmFtaWNQcm9wZXJ0eVNlbGVjdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1maWVsZHMtbWFwL2NvbXBvbmVudHMvV3JhcHBlclJlcXVpcmVkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1maWVsZHMtbWFwL2NvbnRleHQvQWN0aW9uRmllbGRzTWFwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1maWVsZHMtbWFwL2NvbnRleHQvQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYWN0aW9uLW1vZGFsL2NvbXBvbmVudHMvQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1tb2RhbC9jb250ZXh0L0FjdGlvbk1vZGFsQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1tb2RhbC9ob29rcy91c2VPblVwZGF0ZU1vZGFsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0JlZm9yZUNvbmRpdGlvbk9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL2NvbXBvbmVudHMvQ29uZGl0aW9uSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9Db25kaXRpb25PcHRpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0NvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9FZGl0Q3VzdG9tUmVuZGVyU3RhdGVzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0h1bWFuUmVhZGFibGVDb25kaXRpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL1JlbmRlclN0YXRlT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvaGVscGVycy9odW1hblJlYWRhYmxlQ29uZGl0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9ob29rcy91c2VCbG9ja0NvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL3N0b3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvc3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9BZHZhbmNlZEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0F0dHJpYnV0ZUhlbHAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0FkZFByZXZCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0FkdmFuY2VkVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0NsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrRGVmYXVsdFZhbHVlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tEZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja05hbWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja1BsYWNlaG9sZGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tQcmV2QnV0dG9uTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja1JlcXVpcmVkLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tWaXNpYmlsaXR5LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvRmllbGRDb250cm9sLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvRmllbGRTZXR0aW5nc1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9GaWVsZFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9HZW5lcmFsRmllbGRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvU2NvcGVkQXR0cmlidXRlc1Byb3ZpZGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvU2VsZWN0VmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL1RvZ2dsZUdyb3VwVmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL1Rvb2xCYXJEZWZhdWx0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvVG9vbEJhckZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb250ZXh0L1Njb3BlZEF0dHJpYnV0ZXNDb250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvQ2hhbmdlTmFtZUJ5TGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9Db250cm9sc1NldHRpbmdzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvYXBwZW5kRmllbGQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9ibG9ja3NSZWN1cnNpdmVJdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldEF2YWlsYWJsZUZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldEF2YWlsYWJsZUZpZWxkc1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldEJsb2NrQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRCbG9ja3NCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRDdXJyZW50SW5uZXJCbG9ja3MuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRGaWVsZHNXaXRob3V0Q3VycmVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldEZvcm1GaWVsZHNCbG9ja3MuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRJbm5lckJsb2Nrcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZUlzQWR2YW5jZWRWYWxpZGF0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZUlzVW5pcXVlRmllbGROYW1lLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaG9va3MvdXNlVW5pcUtleS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9ob29rcy91c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9zdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvZ2V0UHJlcGFyZWRCbG9ja3MuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0FkdmFuY2VkSW5zcGVjdG9yQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvQWR2YW5jZWRNb2RhbENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0Jhc2VIZWxwLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9CYXNlTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0NvbnRhaW5lcnNMaXN0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9EZXRhaWxzQ29udGFpbmVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9Hcm91cGVkU2VsZWN0Q29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvSG9yaXpvbnRhbExpbmUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0hvdmVyQ29udGFpbmVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9NYWNyb3NJbnNlcnRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvVG9nZ2xlQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbnRleHQvYmxvY2sudmFsdWUuaXRlbS5jb250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZHluYW1pYy52YWx1ZS9jb21wb25lbnRzL0R5bmFtaWNJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZHluYW1pYy52YWx1ZS9jb21wb25lbnRzL0R5bmFtaWNJdGVtQm9keS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2R5bmFtaWMudmFsdWUvY29tcG9uZW50cy9EeW5hbWljVmFsdWVzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL2hvb2tzL3VzZURlZmF1bHRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvaG9va3MvdXNlRHluYW1pY0V2ZW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2V2ZW50cy9ob29rcy91c2VFdmVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvaG9va3MvdXNlRXZlbnRzRnJvbUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvaG9va3MvdXNlRXZlbnRzRnJvbUdhdGV3YXlzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL2hvb2tzL3VzZVJlcXVlc3RFdmVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2V2ZW50cy9zdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2V2ZW50cy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9jb21wb25lbnRzL0dhdGV3YXlGZXRjaEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL2hlbHBlcnMvZ2F0ZXdheUF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9oZWxwZXJzL2dhdGV3YXlMYWJlbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL2hlbHBlcnMvaXNzZXRSZW5kZXJHYXRld2F5LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvaGVscGVycy9yZWdpc3RlckdhdGV3YXkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9oZWxwZXJzL3JlbmRlckdhdGV3YXkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9oZWxwZXJzL3JlbmRlckdhdGV3YXlXaXRoUGxhY2Vob2xkZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9ob29rcy93aXRoRGlzcGF0Y2hHYXRld2F5cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL2hvb2tzL3dpdGhTZWxlY3RHYXRld2F5cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9zdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9zdG9yZS9kaXNwYXRjaGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvaG9va3MvdXNlT3BlbkVkaXRvclBhbmVsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvaG9va3MvdXNlUmVwZWF0ZXJTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2hvb2tzL3VzZVNlbGVjdFBvc3RNZXRhLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvaG9va3MvdXNlU3VjY2Vzc05vdGljZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2hvb2tzL3dpdGhTZWxlY3RGb3JtRmllbGRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9hYnN0cmFjdC9CYXNlRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9hYnN0cmFjdC9CYXNlTWFjcm8uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2Fic3RyYWN0L0Jhc2VQb3BvdmVySXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9DbGllbnRTaWRlTWFjcm9zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL0dyb3VwSXRlbXNQb3BvdmVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3JvRmllbGRJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0J1dHRvblRlbXBsYXRlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0ZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb3NGaWVsZHNUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9Qb3BvdmVySXRlbU1hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL1NlcnZlclNpZGVNYWNyb3MuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2NvbnRleHQvRXh0cmFNYWNyb0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2NvbnRleHQvUG9wb3ZlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2NvbnRleHQvUG9wb3Zlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2ZpbHRlcnMvQWRkRGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL0FkZE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL0FkZFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2ZpbHRlcnMvRmFsbGJhY2tGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2ZpbHRlcnMvTGVuZ3RoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL1N1YnRyYWN0RGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL1N1YnRyYWN0TW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL1RvRGF0ZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZmlsdGVycy9Ub0RhdGVUaW1lRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL1RvVGltZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9ob29rcy91c2VJbnNlcnRNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vbWFjcm9zL0N1cnJlbnREYXRlTWFjcm8uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL21hY3Jvcy9EYXlJblNlY01hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9tYWNyb3MvTWluSW5TZWNNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vbWFjcm9zL01vbnRoSW5TZWNNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vbWFjcm9zL1llYXJJblNlY01hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9zdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL3N0b3JlL2Rpc3BhdGNoZXJzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWlncmF0aW9ucy9taWdyYXRlLmdhdGV3YXlzLnNldHRpbmdzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2NvbXBvbmVudHMvQXZhaWxhYmxlTWFwRmllbGRQcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9wcmVzZXQvY29tcG9uZW50cy9EeW5hbWljUHJlc2V0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2NvbXBvbmVudHMvRmllbGRXaXRoUHJlc2V0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2NvbXBvbmVudHMvR2xvYmFsRmllbGRQcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9wcmVzZXQvY29tcG9uZW50cy9NYXBGaWVsZFByZXNldC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9jb21wb25lbnRzL1ByZXNldEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9jb21wb25lbnRzL3dpdGhQcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9wcmVzZXQvY29udGV4dC9Db250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2hlbHBlcnMvaHVtYW5SZWFkYWJsZVByZXNldC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9oZWxwZXJzL2lzUHJlc2V0U3RyaW5nLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcmVwZWF0ZXIvY29tcG9uZW50cy9SZXBlYXRlcldpdGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuYWRkLm5ldy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuYWRkLm9yLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuc3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb21wb25lbnRzL3NhZmUuZGVsZXRlLnRvZ2dsZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uYm9keS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uaGVhZC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuaXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuc3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb250ZXh0L3NhZmUuZGVsZXRlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2Uvc3RvcmUubWFuYWdlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3Rvb2xzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jbGFzc2VzL01lc3NhZ2VJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jbGFzc2VzL1ZhbGlkYXRpb25NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9BZHZhbmNlZFJ1bGVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL0FkdmFuY2VkUnVsZU1vZGFsSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9BZHZhbmNlZFJ1bGVzSXNFbXB0eS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9BZHZhbmNlZFJ1bGVzTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9BZHZhbmNlZFJ1bGVzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvQ2hvb3NlUmVsYXRlZEZpZWxkLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL0VkaXRBZHZhbmNlZFJ1bGVzQnV0dG9uLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL0VkaXRSdWxlc01vZGFsQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9IdW1hblJlYWRhYmxlUnVsZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uQmxvY2tNZXNzYWdlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL1ZhbGlkYXRpb25NZXRhTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uVG9nZ2xlR3JvdXAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2hlbHBlcnMvZ2V0SXRlbUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vaGVscGVycy9odW1hblJlYWRhYmxlUnVsZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vaG9va3MvdXNlR3JvdXBlZFZhbGlkYXRpb25NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vc3RvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9zdG9yZS9kaXNwYXRjaGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvR3JvdXBlZFNlbGVjdENvbnRyb2wuanM/ZDI0YyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uTWV0YU1lc3NhZ2UuanM/NWFhNiIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sLmpzPzAxNTMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvVmFsaWRhdGlvbk1ldGFNZXNzYWdlLmpzPzExZmIiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImFjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImJsb2Nrc1RvQWN0aW9uc1wiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJhcGlGZXRjaFwiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9AbGluYXJpYS9jb3JlL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvcmVhY3QvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWJicnxhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkaXNhYmxlUmVtb3RlUGxheWJhY2t8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8ZW50ZXJLZXlIaW50fGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHJhbnNsYXRlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5jcmVtZW50YWx8ZmFsbGJhY2t8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufG9wdGlvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpc1Byb3BWYWxpZCA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IHsgaXNQcm9wVmFsaWQgYXMgZGVmYXVsdCB9O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgeyBtZW1vaXplIGFzIGRlZmF1bHQgfTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG4vKiogQHR5cGVkZWYge3tpY29uOiBKU1guRWxlbWVudCwgc2l6ZT86IG51bWJlcn0gJiBpbXBvcnQoJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcycpLlNWR1Byb3BzfSBJY29uUHJvcHMgKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gU1ZHIGljb24uXG4gKlxuICogQHBhcmFtIHtJY29uUHJvcHN9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgaWNvbiBpcyB0aGUgU1ZHIGNvbXBvbmVudCB0byByZW5kZXJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgaXMgYSBudW1iZXIgc3BlY2lmaXlpbmcgdGhlIGljb24gc2l6ZSBpbiBwaXhlbHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyIHByb3BzIHdpbGwgYmUgcGFzc2VkIHRvIHdyYXBwZWQgU1ZHIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJ3JlYWN0JykuRm9yd2FyZGVkUmVmPEhUTUxFbGVtZW50Pn0gcmVmICAgVGhlIGZvcndhcmRlZCByZWYgdG8gdGhlIFNWRyBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSAgSWNvbiBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gSWNvbih7XG4gIGljb24sXG4gIHNpemUgPSAyNCxcbiAgLi4ucHJvcHNcbn0sIHJlZikge1xuICByZXR1cm4gY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICB3aWR0aDogc2l6ZSxcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgLi4ucHJvcHMsXG4gICAgcmVmXG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihJY29uKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1xuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY2xhc3MgSmV0RmllbGRzTWFwQ29udHJvbCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIHByb3BzICk7XG5cblx0XHR0aGlzLmZpZWxkVHlwZXMgPSB0aGlzLnByb3BzLmZpZWxkVHlwZXM7XG5cdFx0dGhpcy50YXhvbm9taWVzTGlzdCA9IHRoaXMucHJvcHMudGF4b25vbWllc0xpc3Q7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcblx0XHR0aGlzLm1ldGFQcm9wID0gdGhpcy5wcm9wcy5tZXRhUHJvcCA/IHRoaXMucHJvcHMubWV0YVByb3AgOiAncG9zdF9tZXRhJztcblx0XHR0aGlzLnRlcm1zUHJvcCA9IHRoaXMucHJvcHMudGVybXNQcm9wID8gdGhpcy5wcm9wcy50ZXJtc1Byb3AgOiAncG9zdF90ZXJtcyc7XG5cdFx0dGhpcy5pbmRleCA9IHRoaXMucHJvcHMuaW5kZXg7XG5cblx0XHR0aGlzLmluaXQoKTtcblx0XHR0aGlzLmJpbmRGdW5jdGlvbnMoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0eXBlOiB0aGlzLmdldEZpZWxkVHlwZSggdGhpcy5wcm9wcy5maWVsZFZhbHVlICksXG5cdFx0fTtcblx0fVxuXG5cdGJpbmRGdW5jdGlvbnMoKSB7XG5cdFx0dGhpcy5vbkNoYW5nZVR5cGUgPSB0aGlzLm9uQ2hhbmdlVHlwZS5iaW5kKCB0aGlzICk7XG5cdFx0dGhpcy5vbkNoYW5nZVZhbHVlID0gdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKTtcblx0fVxuXG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLmlkID0gYGluc3BlY3Rvci1zZWxlY3QtY29udHJvbC0keyB0aGlzLmluZGV4IH1gO1xuXHRcdHRoaXMucHJlcGFyZWRUYXhlcyA9IFtdO1xuXHRcdHRoaXMudGF4UHJlZml4ID0gJ2pldF90YXhfXyc7XG5cblx0XHRpZiAoICEgdGhpcy50YXhvbm9taWVzTGlzdCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnRheG9ub21pZXNMaXN0Lmxlbmd0aDsgaSArKyApIHtcblx0XHRcdHRoaXMucHJlcGFyZWRUYXhlcy5wdXNoKCB7XG5cdFx0XHRcdHZhbHVlOiB0aGlzLnRheFByZWZpeCArIHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS52YWx1ZSxcblx0XHRcdFx0bGFiZWw6IHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS5sYWJlbCxcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRnZXRGaWVsZE5hbWUoIHZhbHVlICkge1xuXG5cdFx0aWYgKCAhIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkVHlwZSA9IHRoaXMuZ2V0RmllbGRUeXBlKCB2YWx1ZSApO1xuXG5cdFx0aWYgKCB0aGlzLnRlcm1zUHJvcCA9PT0gZmllbGRUeXBlIHx8IHRoaXMubWV0YVByb3AgPT09IGZpZWxkVHlwZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0XG5cblx0fTtcblxuXHRpc1Rlcm1Pck1ldGEoIHZhbHVlICkge1xuXHRcdHJldHVybiAoIHRoaXMudGVybXNQcm9wID09PSB2YWx1ZSB8fCB0aGlzLm1ldGFQcm9wID09PSB2YWx1ZSApO1xuXHR9XG5cblxuXHRnZXRGaWVsZFR5cGUoIHZhbHVlICkge1xuXG5cdFx0aWYgKCAhIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGRUeXBlcy5sZW5ndGg7IGkgKysgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSB0aGlzLmZpZWxkVHlwZXNbIGkgXS52YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdmFsdWUuaW5jbHVkZXMoIHRoaXMudGF4UHJlZml4ICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXJtc1Byb3A7XG5cdFx0fVxuXHRcdFxuXHRcdFx0cmV0dXJuIHRoaXMubWV0YVByb3A7XG5cdFx0XG5cblx0fTtcblxuXG5cdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlICkge1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcblx0XHRcdC4uLnRoaXMucHJvcHMuZmllbGRzTWFwLFxuXHRcdFx0WyB0aGlzLnByb3BzLmZpZWxkTmFtZSBdOiBuZXdWYWx1ZVxuXHRcdH0gKTtcblx0fTtcblxuXG5cdG9uQ2hhbmdlVHlwZSggbmV3VmFsdWUgKSB7XG5cdFx0bGV0IHZhbCA9IHRoaXMuZ2V0RmllbGRUeXBlKCBuZXdWYWx1ZSApO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSgge1xuXHRcdFx0dHlwZTogdmFsXG5cdFx0fSApO1xuXG5cdFx0aWYgKCB0aGlzLmlzVGVybU9yTWV0YSggdmFsICkgKSB7XG5cdFx0XHR2YWwgPSAnJztcblx0XHR9XG5cblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHZhbCApO1xuXHR9XG5cblxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXG5cblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9fcm93XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1wb3N0LWZpZWxkLWNvbnRyb2xcIj5cblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfdHlwZV8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cblx0XHRcdFx0XHRsYWJlbD17IHRoaXMucHJvcHMuZmllbGROYW1lIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnN0YXRlLnR5cGUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVR5cGUgfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZpZWxkVHlwZXMgfVxuXHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNjBweCdcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAoIHRoaXMubWV0YVByb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF9uYW1lXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5wcm9wcy5maWVsZFZhbHVlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnMjAwcHgnIH0gfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHRcdHsgKCB0aGlzLnRlcm1zUHJvcCA9PT0gdGhpcy5zdGF0ZS50eXBlICkgJiYgPFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLXdpdGhvdXQtbGFiZWwnXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3RheF8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLnByZXBhcmVkVGF4ZXMgfVxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+O1xuXHR9XG5cblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBKZXRGaWVsZHNNYXBDb250cm9sOyIsImNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcblx0ICAgICAgUmljaFRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEFjdGlvbkJ1dHRvblBsYWNlaG9sZGVyKCBwcm9wcyApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRyZXR1cm4gPGRpdiB7IC4uLmJsb2NrUHJvcHMgfSA+XG5cdFx0PGRpdiBjbGFzc05hbWU9eyBwcm9wcy53cmFwcGVyQ2xhc3Nlcy5qb2luKCAnICcgKSB9PlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0Y2xhc3NOYW1lPXsgcHJvcHMuYnV0dG9uQ2xhc3Nlcy5qb2luKCAnICcgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiSW5wdXQgU3VibWl0IGxhYmVsLi4uXCJcblx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cblx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMubGFiZWwgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbGFiZWwgPT4gcHJvcHMuc2V0QXR0cmlidXRlcyggeyBsYWJlbCB9ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQnV0dG9uUGxhY2Vob2xkZXI7IiwiaW1wb3J0IEFjdGlvbkZpZWxkc01hcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BY3Rpb25GaWVsZHNNYXBDb250ZXh0JztcbmltcG9ydCB7XG5cdFJvd0NvbnRyb2xFbmQsXG5cdExhYmVsLFxuXHRSb3dDb250cm9sLFxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5mdW5jdGlvbiBBY3Rpb25GaWVsZHNNYXAoIHtcblx0ZmllbGRzID0gW10sXG5cdGxhYmVsID0gJ1tFbXB0eSBsYWJlbF0nLFxuXHRjaGlsZHJlbiA9IG51bGwsXG5cdHBsYWluSGVscCA9ICcnLFxuXHRjdXN0b21IZWxwID0gZmFsc2UsXG59ICkge1xuXG5cdHJldHVybiA8Um93Q29udHJvbCBhbGlnbj1cImZsZXgtc3RhcnRcIj5cblx0XHQ8TGFiZWw+eyBsYWJlbCB9PC9MYWJlbD5cblx0XHQ8Um93Q29udHJvbEVuZD5cblx0XHRcdHsgKFxuXHRcdFx0XHRjdXN0b21IZWxwICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXN0b21IZWxwXG5cdFx0XHQpICYmIGN1c3RvbUhlbHAoKSB9XG5cblx0XHRcdHsgQm9vbGVhbiggcGxhaW5IZWxwLmxlbmd0aCApICYmIDxzcGFuXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfVxuXHRcdFx0PnsgcGxhaW5IZWxwIH08L3NwYW4+IH1cblxuXHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGRJZCwgZmllbGREYXRhIF0sIGluZGV4ICkgPT4gPEZyYWdtZW50XG5cdFx0XHRcdGtleT17IGBmaWVsZF9pbl9tYXBfJHsgZmllbGRJZCArIGluZGV4IH1gIH1cblx0XHRcdD5cblx0XHRcdFx0PEFjdGlvbkZpZWxkc01hcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0XHRcdFx0bmFtZTogZmllbGRJZCxcblx0XHRcdFx0XHRkYXRhOiBmaWVsZERhdGEsXG5cdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdH0gfT5cblx0XHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlblxuXHRcdFx0XHRcdCAgPyBjaGlsZHJlbiggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKVxuXHRcdFx0XHRcdCAgOiBjaGlsZHJlbiB9XG5cdFx0XHRcdDwvQWN0aW9uRmllbGRzTWFwQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdDwvRnJhZ21lbnQ+ICkgfVxuXHRcdDwvUm93Q29udHJvbEVuZD5cblx0PC9Sb3dDb250cm9sPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRmllbGRzTWFwO1xuXG4iLCJpbXBvcnQgeyBDdXJyZW50QWN0aW9uRWRpdENvbnRleHQgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuaW1wb3J0IEFjdGlvbkZpZWxkc01hcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BY3Rpb25GaWVsZHNNYXBDb250ZXh0JztcbmltcG9ydCBDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBEeW5hbWljUHJvcGVydHlTZWxlY3QoIHtcblx0ZHluYW1pYyA9IFtdLFxuXHRwYXJzZVZhbHVlID0gbnVsbCxcblx0Y2hpbGRyZW4gPSBudWxsLFxuXHRwcm9wZXJ0aWVzID0gbnVsbCxcbn0gKSB7XG5cblx0Ly8gY29udGV4dCB3aXRoIGFjdGlvbiBwcm9wc1xuXHRjb25zdCB7XG5cdFx0ICAgICAgc291cmNlLFxuXHRcdCAgICAgIHNldHRpbmdzLFxuXHRcdCAgICAgIHNldE1hcEZpZWxkLFxuXHQgICAgICB9ID0gdXNlQ29udGV4dCggQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0ICk7XG5cblx0cHJvcGVydGllcyA9IChcblx0XHRwcm9wZXJ0aWVzID8/IHNvdXJjZS5wcm9wZXJ0aWVzXG5cdCk7XG5cblx0Ly8gY29udGV4dCB3aXRoIGN1cnJlbnQgZmllbGQgaW4gYSBmaWVsZCBtYXBcblx0Y29uc3Qge1xuXHRcdCAgICAgIG5hbWUsXG5cdFx0ICAgICAgaW5kZXgsXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0ICk7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIGZpZWxkc19tYXA6IGZpZWxkc01hcCA9IHt9LFxuXHQgICAgICB9ID0gc2V0dGluZ3M7XG5cblx0ZnVuY3Rpb24gZ2V0VHlwZUZpZWxkVmFsdWUoIHZhbHVlICkge1xuXHRcdGZvciAoIGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSBwcm9wZXJ0eS52YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBwYXJzZVZhbHVlID8gcGFyc2VWYWx1ZSggdmFsdWUgKSA6IGR5bmFtaWNbIDAgXSA/PyAnJztcblx0fVxuXG5cdGNvbnN0IFsgY3VycmVudFByb3AsIHNldEN1cnJlbnRQcm9wIF0gPSB1c2VTdGF0ZShcblx0XHQoKSA9PiBnZXRUeXBlRmllbGRWYWx1ZSggZmllbGRzTWFwWyBuYW1lIF0gPz8gJycgKSxcblx0KTtcblxuXHRjb25zdCBnZXRIZWxwID0gKCkgPT4ge1xuXHRcdGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydGllcy5maW5kKFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gY3VycmVudFByb3AsXG5cdFx0KTtcblxuXHRcdHJldHVybiBwcm9wZXJ0eT8uaGVscCA/PyAnJztcblx0fTtcblxuXHRjb25zdCBGaWVsZFNlbGVjdCA9IChcblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PXsgbmFtZSArIGluZGV4IH1cblx0XHRcdHZhbHVlPXsgY3VycmVudFByb3AgfVxuXHRcdFx0b3B0aW9ucz17IHByb3BlcnRpZXMgfVxuXHRcdFx0aGVscD17IGdldEhlbHAoKSB9XG5cdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHtcblx0XHRcdFx0Y29uc3QgcHJvcCA9IGdldFR5cGVGaWVsZFZhbHVlKCB2YWx1ZSApO1xuXG5cdFx0XHRcdHNldEN1cnJlbnRQcm9wKCBwcm9wICk7XG5cdFx0XHRcdHNldE1hcEZpZWxkKCB7XG5cdFx0XHRcdFx0bmFtZUZpZWxkOiBuYW1lLFxuXHRcdFx0XHRcdHZhbHVlOiBkeW5hbWljLmluY2x1ZGVzKCB2YWx1ZSApID8gJycgOiB2YWx1ZSxcblx0XHRcdFx0fSApO1xuXHRcdFx0fSB9XG5cdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0Lz5cblx0KTtcblxuXHRyZXR1cm4gPEN1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0RmllbGRTZWxlY3QsXG5cdFx0cHJvcGVydHk6IGN1cnJlbnRQcm9wLFxuXHR9IH0+XG5cdFx0eyBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XG5cdFx0eyAhY2hpbGRyZW4gJiYgRmllbGRTZWxlY3QgfVxuXHQ8L0N1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUHJvcGVydHlTZWxlY3Q7IiwiaW1wb3J0IEFjdGlvbkZpZWxkc01hcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BY3Rpb25GaWVsZHNNYXBDb250ZXh0JztcblxuY29uc3QgeyBSYXdIVE1MLCB1c2VDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcmFwcGVyUmVxdWlyZWRDb250cm9sKCB7XG5cdGNoaWxkcmVuLFxuXHRsYWJlbEtleSA9ICdsYWJlbCcsXG5cdHJlcXVpcmVkS2V5ID0gJ3JlcXVpcmVkJyxcblx0aGVscEtleSA9ICdoZWxwJyxcblx0ZmllbGQgPSBbXSxcbn0gKSB7XG5cblx0bGV0IHsgbmFtZSwgZGF0YSB9ID0gdXNlQ29udGV4dCggQWN0aW9uRmllbGRzTWFwQ29udGV4dCApO1xuXG5cdGlmICggZmllbGQubGVuZ3RoICkge1xuXHRcdFsgbmFtZSwgZGF0YSBdID0gZmllbGQ7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXG5cdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lIH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1maWVsZC1tYXBfX3Jvdy1sYWJlbFwiPlxuXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdmaWVsZHMtbWFwX19sYWJlbCcgfT5cblx0XHRcdFx0XHR7IChcblx0XHRcdFx0XHRcdGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgJiYgZGF0YVsgbGFiZWxLZXkgXVxuXHRcdFx0XHRcdCkgJiYgZGF0YVsgbGFiZWxLZXkgXSB9XG5cdFx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0XHQhZGF0YS5oYXNPd25Qcm9wZXJ0eSggbGFiZWxLZXkgKVxuXHRcdFx0XHRcdCkgJiYgZGF0YSB9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0ZGF0YS5oYXNPd25Qcm9wZXJ0eSggcmVxdWlyZWRLZXkgKSAmJiBkYXRhWyByZXF1aXJlZEtleSBdXG5cdFx0XHRcdCkgJiZcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2ZpZWxkcy1tYXBfX3JlcXVpcmVkJyB9PiAqPC9zcGFuPiB9XG5cdFx0XHRcdHsgZGF0YVsgaGVscEtleSBdICYmIDxwXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XG5cdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXG5cdFx0XHRcdFx0XHRtYXJnaW46ICcxZW0gMCAwIDAnLFxuXHRcdFx0XHRcdH0gfT5cblx0XHRcdFx0XHQ8UmF3SFRNTD57IGRhdGFbIGhlbHBLZXkgXSB9PC9SYXdIVE1MPlxuXHRcdFx0XHQ8L3A+IH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9kaXY+XG5cdCk7XG59IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRuYW1lOiAnJyxcblx0ZGF0YToge30sXG5cdGluZGV4OiAwLFxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0O1xuIiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRGaWVsZFNlbGVjdDogbnVsbCxcblx0cHJvcGVydHk6ICcnXG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQ7IiwiaW1wb3J0IEFjdGlvbk1vZGFsQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0FjdGlvbk1vZGFsQ29udGV4dCc7XG5pbXBvcnQgQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbCBmcm9tICcuL0FjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGwnO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCB7XG5cdCAgICAgIFNsb3Q6IEZvb3RlclNsb3QsXG4gICAgICB9ID0gQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIEFjdGlvbk1vZGFsKCB7XG5cdG9uUmVxdWVzdENsb3NlLFxuXHRjaGlsZHJlbixcblx0dGl0bGUgPSAnJyxcblx0Y2xhc3NOYW1lcyA9IFtdLFxuXHRjbGFzc05hbWUgPSAnJyxcblx0b25VcGRhdGVDbGljayxcblx0b25DYW5jZWxDbGljayxcblx0dXBkYXRlQnRuTGFiZWwgPSAnVXBkYXRlJyxcblx0dXBkYXRlQnRuUHJvcHMgPSB7fSxcblx0Y2FuY2VsQnRuUHJvcHMgPSB7fSxcblx0Y2FuY2VsQnRuTGFiZWwgPSAnQ2FuY2VsJyxcblx0Zml4ZWRIZWlnaHQgPSAnJyxcblx0Li4ucHJvcHNcbn0gKSB7XG5cblx0Y29uc3QgbW9kYWxDbGFzc2VzID0gWyAnamV0LWZvcm0tZWRpdC1tb2RhbCcsIC4uLmNsYXNzTmFtZXMsIGNsYXNzTmFtZSBdO1xuXG5cdGNvbnN0IFsgYWN0aW9uQ2xpY2ssIHNldEFjdGlvbkNsaWNrIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xuXG5cdGNvbnN0IHVwZGF0ZUNsaWNrID0gKCkgPT4ge1xuXHRcdGlmICggb25VcGRhdGVDbGljayApIHtcblx0XHRcdG9uVXBkYXRlQ2xpY2soKTtcblx0XHR9XG5cdFx0c2V0QWN0aW9uQ2xpY2soIHRydWUgKTtcblx0fTtcblx0Y29uc3QgY2FuY2VsQ2xpY2sgPSAoKSA9PiB7XG5cdFx0aWYgKCBvbkNhbmNlbENsaWNrICkge1xuXHRcdFx0b25DYW5jZWxDbGljaygpO1xuXHRcdH1cblx0XHRzZXRBY3Rpb25DbGljayggZmFsc2UgKTtcblx0fTtcblxuXHRsZXQgc3R5bGUgPSB7fTtcblx0aWYgKCBmaXhlZEhlaWdodCApIHtcblx0XHRzdHlsZSA9IHsgaGVpZ2h0OiBmaXhlZEhlaWdodCB9O1xuXHRcdG1vZGFsQ2xhc3Nlcy5wdXNoKCAnamV0LW1vZGFsLWZpeGVkLWhlaWdodCcgKTtcblx0fVxuXG5cdHJldHVybiA8TW9kYWxcblx0XHRvblJlcXVlc3RDbG9zZT17IG9uUmVxdWVzdENsb3NlIH1cblx0XHRjbGFzc05hbWU9eyBtb2RhbENsYXNzZXMuam9pbiggJyAnICkgfVxuXHRcdHRpdGxlPXsgdGl0bGUgfVxuXHRcdHN0eWxlPXsgc3R5bGUgfVxuXHRcdHsgLi4ucHJvcHMgfVxuXHQ+XG5cdFx0eyAhY2hpbGRyZW4gJiYgPGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fY29udGVudFwiXG5cdFx0PlxuXHRcdFx0eyBfXyggJ0FjdGlvbiBjYWxsYmFjayBpcyBub3QgZm91bmQuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvZGl2PiB9XG5cdFx0eyBjaGlsZHJlbiAmJiA8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX193cmFwcGVyXCI+XG5cdFx0XHRcdDxBY3Rpb25Nb2RhbENvbnRleHQuUHJvdmlkZXJcblx0XHRcdFx0XHR2YWx1ZT17IHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgfVxuXHRcdFx0XHRcdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0FjdGlvbk1vZGFsQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEZvb3RlclNsb3QgZmlsbFByb3BzPXsgeyB1cGRhdGVDbGljaywgY2FuY2VsQ2xpY2sgfSB9PlxuXHRcdFx0XHR7ICggZmlsbHMgKSA9PiAoXG5cdFx0XHRcdFx0Qm9vbGVhbiggZmlsbHM/Lmxlbmd0aCApXG5cdFx0XHRcdFx0PyBmaWxscyA6IDxCdXR0b25Hcm91cFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fYWN0aW9uc1wiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IHVwZGF0ZUNsaWNrIH1cblx0XHRcdFx0XHRcdFx0eyAuLi51cGRhdGVCdG5Qcm9wcyB9XG5cdFx0XHRcdFx0XHQ+eyB1cGRhdGVCdG5MYWJlbCB9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogJzAgMCAwIDEwcHgnLFxuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IGNhbmNlbENsaWNrIH1cblx0XHRcdFx0XHRcdFx0eyAuLi5jYW5jZWxCdG5Qcm9wcyB9XG5cdFx0XHRcdFx0XHQ+eyBjYW5jZWxCdG5MYWJlbCB9PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L0Zvb3RlclNsb3Q+XG5cdFx0PC8+IH1cblx0PC9Nb2RhbD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1vZGFsOyIsImNvbnN0IHtcblx0ICAgICAgY3JlYXRlU2xvdEZpbGwsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbCA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCQWN0aW9uTW9kYWxGb290ZXInICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGw7XG4iLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEFjdGlvbk1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0YWN0aW9uQ2xpY2s6IG51bGwsXG5cdG9uUmVxdWVzdENsb3NlOiAoKSA9PiB7XG5cdH0sXG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1vZGFsQ29udGV4dDsiLCJpbXBvcnQgQWN0aW9uTW9kYWxDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQWN0aW9uTW9kYWxDb250ZXh0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbi8qKlxuICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gdXNlT25VcGRhdGVNb2RhbCggY2FsbGJhY2sgKSB7XG5cdGNvbnN0IHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gPSB1c2VDb250ZXh0KCBBY3Rpb25Nb2RhbENvbnRleHQgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHQvLyB1cGRhdGUgZmllbGQgYXR0cmlidXRlc1xuXHRcdGlmICggYWN0aW9uQ2xpY2sgKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblxuXHRcdGlmICggbnVsbCAhPT0gYWN0aW9uQ2xpY2sgKSB7XG5cdFx0XHRvblJlcXVlc3RDbG9zZSgpO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdH0sIFsgYWN0aW9uQ2xpY2sgXSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VPblVwZGF0ZU1vZGFsOyIsImltcG9ydCB7IHVzZUZpZWxkcyB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYmxvY2tzLXRvLWFjdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG5cdCAgICAgIHdpdGhGaWx0ZXJzLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3QgQmVmb3JlQ29uZGl0aW9uT3B0aW9ucyA9IHdpdGhGaWx0ZXJzKCAnamV0LmZiLmJsb2NrLmNvbmRpdGlvbnMub3B0aW9ucycgKShcblx0cHJvcHMgPT4ge1xuXHRcdGNvbnN0IHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gPSBwcm9wcztcblxuXHRcdGNvbnN0IGZvcm1GaWVsZHMgPSB1c2VGaWVsZHMoIHsgcGxhY2Vob2xkZXI6ICctLScgfSApO1xuXG5cdFx0c3dpdGNoICggY3VycmVudEl0ZW0ub3BlcmF0b3IgKSB7XG5cdFx0XHRjYXNlICdyZW5kZXJfc3RhdGUnOlxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5maWVsZCB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZmllbGQ6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz47XG5cdFx0fVxuXHR9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmVmb3JlQ29uZGl0aW9uT3B0aW9uczsiLCJpbXBvcnQgUmVwZWF0ZXJJdGVtQ29udGV4dCBmcm9tICcuLi8uLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLml0ZW0nO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZVVuaXFLZXknO1xuaW1wb3J0IHVzZUJsb2NrQ29uZGl0aW9ucyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0NvbmRpdGlvbnMnO1xuaW1wb3J0IENvbmRpdGlvbk9wdGlvbnMgZnJvbSAnLi9Db25kaXRpb25PcHRpb25zJztcbmltcG9ydCBCZWZvcmVDb25kaXRpb25PcHRpb25zIGZyb20gJy4vQmVmb3JlQ29uZGl0aW9uT3B0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIENvbmRpdGlvbkl0ZW0oKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBjdXJyZW50SXRlbSxcblx0XHQgICAgICBjaGFuZ2VDdXJyZW50SXRlbSxcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIFJlcGVhdGVySXRlbUNvbnRleHQgKTtcblxuXHRjb25zdCB1bmlxS2V5ICAgICAgID0gdXNlVW5pcUtleSgpO1xuXHRjb25zdCB7IG9wZXJhdG9ycyB9ID0gdXNlQmxvY2tDb25kaXRpb25zKCk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PEJlZm9yZUNvbmRpdGlvbk9wdGlvbnNcblx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBjaGFuZ2VDdXJyZW50SXRlbSB9XG5cdFx0Lz5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdENvbnRyb2wtb3BlcmF0b3InICkgfVxuXHRcdFx0bGFiZWw9eyBfXyggJ09wZXJhdG9yJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5vcGVyYXRvciB9XG5cdFx0XHRvcHRpb25zPXsgb3BlcmF0b3JzIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgb3BlcmF0b3I6IG5ld1ZhbHVlIH0gKSB9XG5cdFx0Lz5cblx0XHQ8Q29uZGl0aW9uT3B0aW9uc1xuXHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XG5cdFx0XHRjaGFuZ2VDdXJyZW50SXRlbT17IGNoYW5nZUN1cnJlbnRJdGVtIH1cblx0XHQvPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbkl0ZW07IiwiaW1wb3J0IFJlbmRlclN0YXRlT3B0aW9ucyBmcm9tICcuL1JlbmRlclN0YXRlT3B0aW9ucyc7XG5pbXBvcnQgdXNlVW5pcUtleSBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlVW5pcUtleSc7XG5pbXBvcnQgQ2xpZW50U2lkZU1hY3JvcyBmcm9tICcuLi8uLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvQ2xpZW50U2lkZU1hY3Jvcyc7XG5pbXBvcnQgQWR2YW5jZWRNb2RhbENvbnRyb2wgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZHZhbmNlZE1vZGFsQ29udHJvbCc7XG5cbmNvbnN0IHtcblx0ICAgICAgVGV4dGFyZWFDb250cm9sLFxuXHQgICAgICB3aXRoRmlsdGVycyxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCBDb25kaXRpb25PcHRpb25zID0gd2l0aEZpbHRlcnMoICdqZXQuZmIuYmxvY2suY29uZGl0aW9ucy5vcHRpb25zJyApKFxuXHRwcm9wcyA9PiB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSA9IHByb3BzO1xuXG5cdFx0Y29uc3QgdW5pcUtleSA9IHVzZVVuaXFLZXkoKTtcblxuXHRcdGlmICggWyAnZW1wdHknLCAnbm90X2VtcHR5JyBdLmluY2x1ZGVzKCBjdXJyZW50SXRlbS5vcGVyYXRvciApICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0c3dpdGNoICggY3VycmVudEl0ZW0ub3BlcmF0b3IgKSB7XG5cdFx0XHRjYXNlICdyZW5kZXJfc3RhdGUnOlxuXHRcdFx0XHRyZXR1cm4gPFJlbmRlclN0YXRlT3B0aW9uc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdSZW5kZXJTdGF0ZU9wdGlvbnMnICkgfVxuXHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtPXsgY2hhbmdlQ3VycmVudEl0ZW0gfVxuXHRcdFx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0XHQvPjtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiA8Q2xpZW50U2lkZU1hY3Jvcz5cblx0XHRcdFx0XHQ8QWR2YW5jZWRNb2RhbENvbnRyb2xcblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1ZhbHVlIHRvIGNvbXBhcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZVByZXNldD17IHZhbHVlID0+IGNoYW5nZUN1cnJlbnRJdGVtKFxuXHRcdFx0XHRcdFx0XHR7IHZhbHVlIH0gKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZU1hY3Jvcz17IG5hbWUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IChcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50SXRlbS52YWx1ZSA/PyAnJ1xuXHRcdFx0XHRcdFx0XHQpICsgbmFtZSxcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyAoIHsgaW5zdGFuY2VJZCB9ICkgPT4gPFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRpZD17IGluc3RhbmNlSWQgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZSB9ICkgfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdDwvQWR2YW5jZWRNb2RhbENvbnRyb2w+XG5cdFx0XHRcdDwvQ2xpZW50U2lkZU1hY3Jvcz47XG5cdFx0fVxuXHR9ICk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbk9wdGlvbnM7IiwiaW1wb3J0IFJlcGVhdGVySGVhZENvbnRleHRcblx0ZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29udGV4dC9yZXBlYXRlci5jdXN0b20uaXRlbS5oZWFkJztcbmltcG9ydCBSZXBlYXRlckJ1dHRvbnNDb250ZXh0XG5cdGZyb20gJy4uLy4uL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uYnV0dG9ucyc7XG5pbXBvcnQgaHVtYW5SZWFkYWJsZUNvbmRpdGlvbiBmcm9tICcuLi9oZWxwZXJzL2h1bWFuUmVhZGFibGVDb25kaXRpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIENvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlciggeyBjaGlsZHJlbiB9ICkge1xuXHRyZXR1cm4gPFJlcGVhdGVySGVhZENvbnRleHQuUHJvdmlkZXJcblx0XHR2YWx1ZT17IHtcblx0XHRcdGlzU3VwcG9ydGVkOiAoKSA9PiB0cnVlLFxuXHRcdFx0cmVuZGVyOiAoIHsgY3VycmVudEl0ZW0gfSApID0+IDxzcGFuXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9XG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge1xuXHRcdFx0XHRcdF9faHRtbDogY3VycmVudEl0ZW0/Lm9yX29wZXJhdG9yXG5cdFx0XHRcdFx0ICAgICAgICA/IF9fKCAnT1InLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0XHRcdCAgICAgICAgOiBodW1hblJlYWRhYmxlQ29uZGl0aW9uKCBjdXJyZW50SXRlbSApLFxuXHRcdFx0XHR9IH1cblx0XHRcdC8+LFxuXHRcdH0gfVxuXHQ+XG5cdFx0PFJlcGVhdGVyQnV0dG9uc0NvbnRleHQuUHJvdmlkZXJcblx0XHRcdHZhbHVlPXsge1xuXHRcdFx0XHRlZGl0OiBpdGVtID0+ICFpdGVtLm9yX29wZXJhdG9yLFxuXHRcdFx0fSB9XG5cdFx0PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9SZXBlYXRlckJ1dHRvbnNDb250ZXh0LlByb3ZpZGVyPlxuXHQ8L1JlcGVhdGVySGVhZENvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXI7IiwiaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gJy4uLy4uL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsJztcbmltcG9ydCBBY3Rpb25Nb2RhbEZvb3RlclNsb3RGaWxsXG5cdGZyb20gJy4uLy4uL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGwnO1xuaW1wb3J0IGFwaUZldGNoIGZyb20gJ0B3b3JkcHJlc3MvYXBpLWZldGNoJztcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dENvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmNvbnN0IHtcblx0ICAgICAgcmVzdF9hZGRfc3RhdGU6IHJlc3RBZGRTdGF0ZSxcblx0ICAgICAgcmVzdF9kZWxldGVfc3RhdGU6IHJlc3REZWxldGVTdGF0ZSxcbiAgICAgIH0gPSB3aW5kb3cuamV0Rm9ybUJsb2NrQ29uZGl0aW9ucztcblxuY29uc3QgeyBGaWxsOiBNb2RhbEZvb3RlckZpbGwgfSA9IEFjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGw7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5jb25zdCBFZGl0Q3VzdG9tUmVuZGVyU3RhdGVzID0gKCB7XG5cdHNldFNob3dNb2RhbCxcblx0Y2hhbmdlQ3VycmVudEl0ZW0sXG5cdGN1cnJlbnRJdGVtLFxufSApID0+IHtcblxuXHRjb25zdCBbIGlzTG9hZGluZywgc2V0QnV0dG9uTG9hZGluZyBdICAgPSB1c2VTdGF0ZSggZmFsc2UgKTtcblx0Y29uc3QgWyBpc0xvYWRpbmdJdGVtLCBzZXRJdGVtTG9hZGluZyBdID0gdXNlU3RhdGUoIHt9ICk7XG5cdGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gICAgICAgICAgICAgICA9IHVzZVN0YXRlKCAnJyApO1xuXHRsZXQgY3VycmVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBbXG5cdFx0Li4uY3VycmVudEl0ZW0ucmVuZGVyX3N0YXRlID8/IFtdLFxuXHRdO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBhZGRSZW5kZXJTdGF0ZSxcblx0XHQgICAgICBkZWxldGVSZW5kZXJTdGF0ZXMsXG5cdCAgICAgIH0gPSB1c2VEaXNwYXRjaCggJ2pldC1mb3Jtcy9ibG9jay1jb25kaXRpb25zJyApO1xuXG5cdGNvbnN0IGN1c3RvbVN0YXRlcyA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkuXG5cdFx0XHRnZXRDdXN0b21SZW5kZXJTdGF0ZXMoKSxcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdFx0WyBpc0xvYWRpbmcsIGlzTG9hZGluZ0l0ZW0gXSxcblx0KTtcblxuXHRjb25zdCBhZGRTdGF0ZSA9ICgpID0+IHtcblx0XHRzZXRCdXR0b25Mb2FkaW5nKCB0cnVlICk7XG5cdFx0cmVzdEFkZFN0YXRlLmRhdGEgPSB7IHZhbHVlIH07XG5cblx0XHRhcGlGZXRjaCggcmVzdEFkZFN0YXRlICkudGhlbiggcmVzcG9uc2UgPT4ge1xuXHRcdFx0b25TdWNjZXNzQWRkKCByZXNwb25zZS5zdGF0ZSApO1xuXHRcdFx0c2V0QnV0dG9uTG9hZGluZyggZmFsc2UgKTtcblx0XHRcdHNldFNob3dNb2RhbCggZmFsc2UgKTtcblxuXHRcdH0gKS5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGVycm9yICk7XG5cdFx0XHRzZXRCdXR0b25Mb2FkaW5nKCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVTdGF0ZSA9IG5hbWUgPT4ge1xuXHRcdHJlc3REZWxldGVTdGF0ZS5kYXRhID0geyBsaXN0OiBbIG5hbWUgXSB9O1xuXHRcdHNldEl0ZW1Mb2FkaW5nKCBwcmV2ID0+IChcblx0XHRcdHsgLi4ucHJldiwgWyBuYW1lIF06IHRydWUgfVxuXHRcdCkgKTtcblxuXHRcdGFwaUZldGNoKCByZXN0RGVsZXRlU3RhdGUgKS50aGVuKCAoKSA9PiB7XG5cdFx0XHRvbkRlbGV0ZSggbmFtZSApO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHR9ICkuY2F0Y2goIGNvbnNvbGUuZXJyb3IgKS5maW5hbGx5KCAoKSA9PiB7XG5cdFx0XHRzZXRJdGVtTG9hZGluZyggcHJldiA9PiAoXG5cdFx0XHRcdHsgLi4ucHJldiwgWyBuYW1lIF06IGZhbHNlIH1cblx0XHRcdCkgKTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3Qgb25TdWNjZXNzQWRkID0gc3RhdGUgPT4ge1xuXHRcdGFkZFJlbmRlclN0YXRlKCBzdGF0ZSApO1xuXHRcdGN1cnJlbnQucHVzaCggc3RhdGUudmFsdWUgKTtcblxuXHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7XG5cdFx0XHRyZW5kZXJfc3RhdGU6IGN1cnJlbnQsXG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IG9uRGVsZXRlID0gbmFtZSA9PiB7XG5cdFx0ZGVsZXRlUmVuZGVyU3RhdGVzKCBuYW1lICk7XG5cdFx0Y3VycmVudCA9IGN1cnJlbnQuZmlsdGVyKCBpdGVtID0+IGl0ZW0gIT09IG5hbWUgKTtcblxuXHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7XG5cdFx0XHRyZW5kZXJfc3RhdGU6IGN1cnJlbnQsXG5cdFx0fSApO1xuXHR9O1xuXG5cdHJldHVybiA8QWN0aW9uTW9kYWxcblx0XHR0aXRsZT17IF9fKCAnUmVnaXN0ZXIgY3VzdG9tIHJlbmRlciBzdGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldFNob3dNb2RhbCggZmFsc2UgKSB9XG5cdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTQ1JyBdIH1cblx0PlxuXHRcdHsvKjxOb3RpY2VJbmZvIHN0eWxlPXsgeyBtYXJnaW5Cb3R0b206ICcxZW0nIH0gfS8+Ki8gfVxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mYiB3aXRoLWJ1dHRvbicgfT5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRWYWx1ZSggbmV3VmFsdWUgKSB9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oXG5cdFx0XHRcdFx0J1NldCB5b3VyIGN1c3RvbSBzdGF0ZSBuYW1lJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgfVxuXHRcdFx0Lz5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0dmFyaWFudD17ICdzZWNvbmRhcnknIH1cblx0XHRcdFx0b25DbGljaz17IGFkZFN0YXRlIH1cblx0XHRcdFx0ZGlzYWJsZWQ9eyBpc0xvYWRpbmcgfVxuXHRcdFx0XHRpc0J1c3k9eyBpc0xvYWRpbmcgfVxuXHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAnN3B4IDEycHgnLFxuXHRcdFx0XHRcdGhlaWdodDogJ3Vuc2V0Jyxcblx0XHRcdFx0fSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgX18oICdBZGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XHR7IEJvb2xlYW4oIGN1c3RvbVN0YXRlcz8ubGVuZ3RoICkgJiYgPD5cblx0XHRcdDxiIGNsYXNzTmFtZT17ICdqZXQtZmIgZmxleCBtYi0wNS1lbScgfT5cblx0XHRcdFx0eyBfXyggJ01hbmFnZSB5b3VyIGN1c3RvbSBzdGF0ZXM6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9iPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZiLWJ1dHRvbnMtZmxleCcgfT5cblx0XHRcdFx0eyBjdXN0b21TdGF0ZXMubWFwKCBzdGF0ZSA9PiA8QnV0dG9uXG5cdFx0XHRcdFx0a2V5PXsgc3RhdGUudmFsdWUgfVxuXHRcdFx0XHRcdGljb249eyAnbm8tYWx0JyB9XG5cdFx0XHRcdFx0aWNvblBvc2l0aW9uPXsgJ3JpZ2h0JyB9XG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZVN0YXRlKCBzdGF0ZS52YWx1ZSApIH1cblx0XHRcdFx0XHRpc0J1c3k9eyBpc0xvYWRpbmdJdGVtWyBzdGF0ZS52YWx1ZSBdID8/IGZhbHNlIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgc3RhdGUubGFiZWwgfVxuXHRcdFx0XHQ8L0J1dHRvbj4gKSB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz4gfVxuXHRcdDxNb2RhbEZvb3RlckZpbGw+XG5cdFx0XHQ8c3Bhbi8+XG5cdFx0PC9Nb2RhbEZvb3RlckZpbGw+XG5cdDwvQWN0aW9uTW9kYWw+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdEN1c3RvbVJlbmRlclN0YXRlczsiLCJpbXBvcnQgaHVtYW5SZWFkYWJsZUNvbmRpdGlvbiBmcm9tICcuLi9oZWxwZXJzL2h1bWFuUmVhZGFibGVDb25kaXRpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIENoaWxkcmVuLFxuXHQgICAgICBjbG9uZUVsZW1lbnQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gSHVtYW5SZWFkYWJsZUNvbmRpdGlvbnMoIHsgY29uZGl0aW9ucywgc2hvd1dhcm5pbmcgPSBmYWxzZSB9ICkge1xuXHRsZXQgY29uZGl0aW9uc0VsZW1lbnRzID0gW107XG5cdGxldCBmaXJzdFJlYWRDb25kaXRpb24gPSAnJztcblxuXHRpZiAoIEJvb2xlYW4oIGNvbmRpdGlvbnM/Lmxlbmd0aCApICkge1xuXHRcdGZpcnN0UmVhZENvbmRpdGlvbiA9IGh1bWFuUmVhZGFibGVDb25kaXRpb24oIGNvbmRpdGlvbnNbIDAgXSApO1xuXG5cdFx0Y29uZGl0aW9uc0VsZW1lbnRzID0gY29uZGl0aW9ucy5maWx0ZXIoXG5cdFx0XHQvLyBFeGNsdWRlIGZpcnN0IGl0ZW1cblx0XHRcdCggYywgaW5kZXggKSA9PiAwICE9PSBpbmRleCxcblx0XHQpLm1hcChcblx0XHRcdCggY29uZGl0aW9uLCBpbmRleCApID0+IDxzcGFuXG5cdFx0XHRcdGtleT17IGluZGV4IH1cblx0XHRcdFx0ZGF0YS10aXRsZT17IF9fKCAnQW5kJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnOicgfVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtcblx0XHRcdFx0XHRfX2h0bWw6IGh1bWFuUmVhZGFibGVDb25kaXRpb24oIGNvbmRpdGlvbiApLFxuXHRcdFx0XHR9IH1cblx0XHRcdC8+LFxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gZmlyc3RSZWFkQ29uZGl0aW9uID8gPD5cblx0XHQgPHNwYW5cblx0XHRcdCBkYXRhLXRpdGxlPXsgX18oXG5cdFx0XHRcdCAnSWYnLCAnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQgKSArICc6JyB9XG5cdFx0XHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7XG5cdFx0XHRcdCBfX2h0bWw6IGZpcnN0UmVhZENvbmRpdGlvbixcblx0XHRcdCB9IH1cblx0XHQgLz5cblx0XHR7IENoaWxkcmVuLm1hcCggY29uZGl0aW9uc0VsZW1lbnRzLCBjbG9uZUVsZW1lbnQgKSB9XG5cdDwvPiA6IHNob3dXYXJuaW5nICYmIDxzcGFuXG5cdFx0ZGF0YS10aXRsZT17IF9fKFxuXHRcdFx0J1RoZSBjb25kaXRpb24gaXMgbm90IGZ1bGx5IGNvbmZpZ3VyZWQuJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpIH1cblx0Lz47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSHVtYW5SZWFkYWJsZUNvbmRpdGlvbnM7IiwiaW1wb3J0IEVkaXRDdXN0b21SZW5kZXJTdGF0ZXMgZnJvbSAnLi9FZGl0Q3VzdG9tUmVuZGVyU3RhdGVzJztcbmltcG9ydCB7IGNvbHVtbiB9IGZyb20gJy4uLy4uL3Rvb2xzJztcblxuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG5cdCAgICAgIEJhc2VDb250cm9sLFxuXHQgICAgICBGb3JtVG9rZW5GaWVsZCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmNvbnN0IFJlbmRlclN0YXRlT3B0aW9ucyA9ICggeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSApID0+IHtcblx0Y29uc3QgWyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0Y29uc3QgcmVuZGVyU3RhdGVzID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBjb2x1bW4oXG5cdFx0XHRzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5nZXRSZW5kZXJTdGF0ZXMoKSxcblx0XHRcdCd2YWx1ZScsXG5cdFx0KSxcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdFx0WyBzaG93TW9kYWwgXSxcblx0KTtcblx0Ly8gbGFiZWw9eyAgfVxuXHRyZXR1cm4gPD5cblx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tYmFzZS1jb250cm9sLXdpdGgtbGFiZWwtd2l0aG91dC1pZCAqLyB9XG5cdFx0PEJhc2VDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnUmVuZGVyIFN0YXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2NvbnRyb2wtZmxleCcgfVxuXHRcdD5cblxuXHRcdFx0PGRpdj5cblx0XHRcdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovIH1cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17ICdqZXQtZmIgbGFiZWwgbWItMDUtZW0nIH0+XG5cdFx0XHRcdFx0eyBfXyggJ0FkZCByZW5kZXIgc3RhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mYiB3aXRoLWJ1dHRvbiBjbGVhci1sYWJlbCcgfT5cblx0XHRcdFx0XHQ8Rm9ybVRva2VuRmllbGRcblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ucmVuZGVyX3N0YXRlIH1cblx0XHRcdFx0XHRcdHN1Z2dlc3Rpb25zPXsgcmVuZGVyU3RhdGVzIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IGNoYW5nZUN1cnJlbnRJdGVtKFxuXHRcdFx0XHRcdFx0XHR7IHJlbmRlcl9zdGF0ZTogdmFsIH0sXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdHRva2VuaXplT25TcGFjZVxuXHRcdFx0XHRcdFx0X19leHBlcmltZW50YWxFeHBhbmRPbkZvY3VzXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTmV3IHJlbmRlciBzdGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9eyAnc2Vjb25kYXJ5JyB9XG5cdFx0XHRcdFx0XHRpY29uPXsgJ3BsdXMtYWx0MicgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dNb2RhbCggdHJ1ZSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0eyBzaG93TW9kYWwgJiYgPEVkaXRDdXN0b21SZW5kZXJTdGF0ZXNcblx0XHRcdHNldFNob3dNb2RhbD17IHNldFNob3dNb2RhbCB9XG5cdFx0XHRjaGFuZ2VDdXJyZW50SXRlbT17IGNoYW5nZUN1cnJlbnRJdGVtIH1cblx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdC8+IH1cblx0PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyU3RhdGVPcHRpb25zOyIsImNvbnN0IHtcblx0ICAgICAgc2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbi8qKlxuICogQHBhcmFtICBjb25kaXRpb25cbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5mdW5jdGlvbiBodW1hblJlYWRhYmxlQ29uZGl0aW9uKCBjb25kaXRpb24gKSB7XG5cdHJldHVybiBzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5yZWFkQ29uZGl0aW9uKCBjb25kaXRpb24gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHVtYW5SZWFkYWJsZUNvbmRpdGlvbjsiLCJjb25zdCB7IHVzZVNlbGVjdCB9ID0gd3AuZGF0YTtcblxuLyoqXG4gKiBAcmV0dXJuIHt7ZnVuY3Rpb25zLCBvcGVyYXRvcnN9fVxuICovXG5mdW5jdGlvbiB1c2VCbG9ja0NvbmRpdGlvbnMoKSB7XG5cdGNvbnN0IFsgb3BlcmF0b3JzLCBmdW5jdGlvbnMgXSA9IHVzZVNlbGVjdCggc2VsZWN0ID0+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0c2VsZWN0KCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkuZ2V0T3BlcmF0b3JzKCksXG5cdFx0XHRzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5nZXRGdW5jdGlvbnMoKSxcblx0XHRdO1xuXHR9LCBbXSApO1xuXG5cdHJldHVybiB7XG5cdFx0b3BlcmF0b3JzLFxuXHRcdGZ1bmN0aW9ucyxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQmxvY2tDb25kaXRpb25zOyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyKCBpdGVtcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnJlZ2lzdGVyLFxuXHRcdFx0aXRlbXMsXG5cdFx0fTtcblx0fSxcblx0YWRkUmVuZGVyU3RhdGUoIGl0ZW0gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5hZGRSZW5kZXJTdGF0ZSxcblx0XHRcdGl0ZW0sXG5cdFx0fTtcblx0fSxcblx0YWRkUmVuZGVyU3RhdGVzKCBpdGVtcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLmFkZFJlbmRlclN0YXRlcyxcblx0XHRcdGl0ZW1zLFxuXHRcdH07XG5cdH0sXG5cdGRlbGV0ZVJlbmRlclN0YXRlcyggaXRlbXMgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5kZWxldGVSZW5kZXJTdGF0ZXMsXG5cdFx0XHRpdGVtcyxcblx0XHR9XG5cdH1cblxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyOiAnUkVHSVNURVInLFxuXHRhZGRSZW5kZXJTdGF0ZTogJ0FERF9SRU5ERVJfU1RBVEUnLFxuXHRhZGRSZW5kZXJTdGF0ZXM6ICdBRERfUkVOREVSX1NUQVRFUycsXG5cdGRlbGV0ZVJlbmRlclN0YXRlczogJ0RFTEVURV9SRU5ERVJfU1RBVEVTJyxcbn1cblxuXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgeyBkb0FjdGlvbiB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IGRpc3BhdGNoZXJzID0ge1xuXHRbIGNvbnN0YW50cy5yZWdpc3RlciBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IHsgb3BlcmF0b3JzLCBmdW5jdGlvbnMsIHJlbmRlcl9zdGF0ZXM6IHJlbmRlclN0YXRlcyB9ID0gYWN0aW9uLml0ZW1zO1xuXG5cdFx0c3RhdGUub3BlcmF0b3JzICAgID0gWyAuLi5vcGVyYXRvcnMgXTtcblx0XHRzdGF0ZS5mdW5jdGlvbnMgICAgPSBbIC4uLmZ1bmN0aW9ucyBdO1xuXHRcdHN0YXRlLnJlbmRlclN0YXRlcyA9IFsgLi4ucmVuZGVyU3RhdGVzIF07XG5cblx0XHRkb0FjdGlvbihcblx0XHRcdCdqZXQuZmIuY2hhbmdlLmJsb2NrQ29uZGl0aW9ucy5yZW5kZXJTdGF0ZScsXG5cdFx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMsXG5cdFx0KTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0WyBjb25zdGFudHMuYWRkUmVuZGVyU3RhdGUgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMucHVzaCggYWN0aW9uLml0ZW0gKTtcblxuXHRcdGRvQWN0aW9uKFxuXHRcdFx0J2pldC5mYi5jaGFuZ2UuYmxvY2tDb25kaXRpb25zLnJlbmRlclN0YXRlJyxcblx0XHRcdHN0YXRlLnJlbmRlclN0YXRlcyxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRbIGNvbnN0YW50cy5hZGRSZW5kZXJTdGF0ZXMgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRmb3IgKCBjb25zdCBpdGVtIG9mIGFjdGlvbi5pdGVtcyApIHtcblx0XHRcdHN0YXRlLnJlbmRlclN0YXRlcy5wdXNoKCBpdGVtICk7XG5cdFx0fVxuXG5cdFx0ZG9BY3Rpb24oXG5cdFx0XHQnamV0LmZiLmNoYW5nZS5ibG9ja0NvbmRpdGlvbnMucmVuZGVyU3RhdGUnLFxuXHRcdFx0c3RhdGUucmVuZGVyU3RhdGVzLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdFsgY29uc3RhbnRzLmRlbGV0ZVJlbmRlclN0YXRlcyBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IGl0ZW1zID0gQXJyYXkuaXNBcnJheSggYWN0aW9uLml0ZW1zIClcblx0XHQgICAgICAgICAgICA/IFsgLi4uYWN0aW9uLml0ZW1zIF1cblx0XHQgICAgICAgICAgICA6IFsgYWN0aW9uLml0ZW1zIF07XG5cblx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMgPSBzdGF0ZS5yZW5kZXJTdGF0ZXMuZmlsdGVyKFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiAhaXRlbXMuaW5jbHVkZXMoIHZhbHVlICksXG5cdFx0KTtcblxuXHRcdGRvQWN0aW9uKFxuXHRcdFx0J2pldC5mYi5jaGFuZ2UuYmxvY2tDb25kaXRpb25zLnJlbmRlclN0YXRlJyxcblx0XHRcdHN0YXRlLnJlbmRlclN0YXRlcyxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5kaXNwYXRjaGVycyxcbn07IiwiaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcblxuY29uc3QgeyBjcmVhdGVSZWR1eFN0b3JlIH0gPSB3cC5kYXRhO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9ycyxcbn0gKTtcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcbmltcG9ydCBodW1hblJlYWRhYmxlUHJlc2V0IGZyb20gJy4uLy4uL3ByZXNldC9oZWxwZXJzL2h1bWFuUmVhZGFibGVQcmVzZXQnO1xuXG5jb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCBlbXB0eUNvbmRpdGlvbiA9IGZ1bmN0aW9uICggY29uZGl0aW9uICkge1xuXHRjb25zdCBvcGVyYXRvck9wdGlvbnMgPSBzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5cblx0XHRnZXRPcGVyYXRvciggY29uZGl0aW9uPy5vcGVyYXRvciApO1xuXG5cdGlmICggIW9wZXJhdG9yT3B0aW9ucyApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Y29uc3QgZmllbGQgPSBjb25kaXRpb24/LmZpZWxkIHx8ICcobm8gZmllbGQpJztcblxuXHRyZXR1cm4gW1xuXHRcdGA8Y29kZT4keyBmaWVsZCB9PC9jb2RlPmAsXG5cdFx0b3BlcmF0b3JPcHRpb25zLmxhYmVsLFxuXHRdLmpvaW4oICcgJyApO1xufTtcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcblx0ZnVuY3Rpb25zOiBbXSxcblx0b3BlcmF0b3JzOiBbXSxcblx0Y29uZGl0aW9uUmVhZGVyczoge1xuXHRcdGRlZmF1bHQgKCBjb25kaXRpb24gKSB7XG5cdFx0XHRjb25zdCBvcGVyYXRvck9wdGlvbnMgPSBzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5cblx0XHRcdFx0Z2V0T3BlcmF0b3IoIGNvbmRpdGlvbj8ub3BlcmF0b3IgKTtcblxuXHRcdFx0aWYgKCAhb3BlcmF0b3JPcHRpb25zICkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmaWVsZCA9IGNvbmRpdGlvbj8uZmllbGQgfHwgJyhubyBmaWVsZCknO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSAoXG5cdFx0XHRcdGh1bWFuUmVhZGFibGVQcmVzZXQoIGNvbmRpdGlvbi52YWx1ZSwgJ2InICkgfHwgJyhubyB2YWx1ZSknXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRgPGNvZGU+JHsgZmllbGQgfTwvY29kZT5gLFxuXHRcdFx0XHRvcGVyYXRvck9wdGlvbnMubGFiZWwsXG5cdFx0XHRcdGA8Y29kZT4keyB2YWx1ZSB9PC9jb2RlPmAsXG5cdFx0XHRdLmpvaW4oICcgJyApO1xuXHRcdH0sXG5cdFx0ZW1wdHk6IGVtcHR5Q29uZGl0aW9uLFxuXHRcdG5vdF9lbXB0eTogZW1wdHlDb25kaXRpb24sXG5cdFx0cmVuZGVyX3N0YXRlICggY29uZGl0aW9uICkge1xuXHRcdFx0Y29uc3Qgc3RhdGVzID0gKFxuXHRcdFx0XHRjb25kaXRpb24/LnJlbmRlcl9zdGF0ZSA/PyBbXVxuXHRcdFx0KS5tYXAoXG5cdFx0XHRcdGN1cnJlbnQgPT4gYDxjb2RlPiR7IGN1cnJlbnQgfTwvY29kZT5gLFxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgbGFiZWwgPSAxID09PSBzdGF0ZXMubGVuZ3RoXG5cdFx0XHQgICAgICAgICAgICAgID8gX18oICdJcyByZW5kZXIgc3RhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0ICAgICAgICAgICAgICA6IF9fKFxuXHRcdFx0XHRcdCdPbmUgb2YgdGhlIHJlbmRlciBzdGF0ZXMnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdHN0YXRlcy5qb2luKCAnLCAnICksXG5cdFx0XHRdLmpvaW4oICc6ICcgKTtcblx0XHR9LFxuXHR9LFxuXHRyZW5kZXJTdGF0ZXM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCBzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIGFjdGlvbiApIHtcblx0Y29uc3QgY2FsbGJhY2sgPSBkaXNwYXRjaGVyc1sgYWN0aW9uPy50eXBlIF07XG5cblx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gY2FsbGJhY2soIHN0YXRlLCBhY3Rpb24gKTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn0iLCJjb25zdCBzZWxlY3RvcnMgPSB7XG5cdGdldEZ1bmN0aW9ucyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmZ1bmN0aW9ucztcblx0fSxcblx0Z2V0T3BlcmF0b3JzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUub3BlcmF0b3JzO1xuXHR9LFxuXHRnZXRSZW5kZXJTdGF0ZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5yZW5kZXJTdGF0ZXM7XG5cdH0sXG5cdGdldFN3aXRjaGFibGVSZW5kZXJTdGF0ZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5yZW5kZXJTdGF0ZXMuZmlsdGVyKFxuXHRcdFx0KCB7IGlzX2N1c3RvbTogaXNDdXN0b20gPSBmYWxzZSwgY2FuX2JlX3N3aXRjaGVkOiBjYW5CZVN3aXRjaGVkID0gZmFsc2UgfSApID0+IChcblx0XHRcdFx0aXNDdXN0b20gfHwgY2FuQmVTd2l0Y2hlZFxuXHRcdFx0KSxcblx0XHQpO1xuXHR9LFxuXHRnZXRDdXN0b21SZW5kZXJTdGF0ZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5yZW5kZXJTdGF0ZXMuZmlsdGVyKFxuXHRcdFx0KCB7IGlzX2N1c3RvbTogaXNDdXN0b20gPSBmYWxzZSB9ICkgPT4gaXNDdXN0b20sXG5cdFx0KTtcblx0fSxcblx0Z2V0T3BlcmF0b3IoIHN0YXRlLCBvcGVyYXRvciApIHtcblx0XHRjb25zdCBpbmRleCA9IHN0YXRlLm9wZXJhdG9ycy5maW5kSW5kZXgoXG5cdFx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSBvcGVyYXRvcixcblx0XHQpO1xuXG5cdFx0aWYgKCAtMSA9PT0gaW5kZXggKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLm9wZXJhdG9yc1sgaW5kZXggXTtcblx0fSxcblx0cmVhZENvbmRpdGlvbiggc3RhdGUsIGNvbmRpdGlvbiApIHtcblx0XHRjb25zdCB7IG9wZXJhdG9yID0gJycgfSA9IGNvbmRpdGlvbjtcblxuXHRcdGlmICggIW9wZXJhdG9yICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtGdW5jdGlvbn1cblx0XHQgKi9cblx0XHRjb25zdCBjYWxsYmFjayA9IHN0YXRlLmNvbmRpdGlvblJlYWRlcnNbIG9wZXJhdG9yIF0gPz8gZmFsc2U7XG5cblx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjYWxsYmFjayApIHtcblx0XHRcdHJldHVybiBjYWxsYmFjayggY29uZGl0aW9uICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLmNvbmRpdGlvblJlYWRlcnMuZGVmYXVsdCggY29uZGl0aW9uICk7XG5cdH0sXG5cdGdldEZ1bmN0aW9uKCBzdGF0ZSwgZnVuY1R5cGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmZ1bmN0aW9ucy5maW5kKFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gZnVuY1R5cGUsXG5cdFx0KTtcblx0fSxcblx0Z2V0RnVuY3Rpb25EaXNwbGF5KCBzdGF0ZSwgZnVuY1R5cGUgKSB7XG5cdFx0cmV0dXJuIHNlbGVjdG9ycy5nZXRGdW5jdGlvbiggc3RhdGUsIGZ1bmNUeXBlICk/LmRpc3BsYXk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC4uLnNlbGVjdG9ycyxcbn07IiwiaW1wb3J0IEJsb2NrUGxhY2Vob2xkZXIgZnJvbSAnLi9CbG9ja1BsYWNlaG9sZGVyJztcbmltcG9ydCBCbG9ja0FkZFByZXZCdXR0b24gZnJvbSAnLi9CbG9ja0FkZFByZXZCdXR0b24nO1xuaW1wb3J0IEJsb2NrUHJldkJ1dHRvbkxhYmVsIGZyb20gJy4vQmxvY2tQcmV2QnV0dG9uTGFiZWwnO1xuaW1wb3J0IEJsb2NrVmlzaWJpbGl0eSBmcm9tICcuL0Jsb2NrVmlzaWJpbGl0eSc7XG5pbXBvcnQgQmxvY2tDbGFzc05hbWUgZnJvbSAnLi9CbG9ja0NsYXNzTmFtZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgSW5zcGVjdG9yQWR2YW5jZWRDb250cm9scyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZnVuY3Rpb24gQWR2YW5jZWRGaWVsZHMoKSB7XG5cdHJldHVybiA8SW5zcGVjdG9yQWR2YW5jZWRDb250cm9scz5cblx0XHQ8QmxvY2tQbGFjZWhvbGRlci8+XG5cdFx0PEJsb2NrQWRkUHJldkJ1dHRvbi8+XG5cdFx0PEJsb2NrUHJldkJ1dHRvbkxhYmVsLz5cblx0XHQ8QmxvY2tWaXNpYmlsaXR5Lz5cblx0XHQ8QmxvY2tDbGFzc05hbWUvPlxuXHQ8L0luc3BlY3RvckFkdmFuY2VkQ29udHJvbHM+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZEZpZWxkczsiLCJpbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNlSGVscCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tFZGl0Q29udGV4dCxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBBdHRyaWJ1dGVIZWxwKCB7IG5hbWUgPSBmYWxzZSwgY2hpbGRyZW4gPSBudWxsIH0gKSB7XG5cdGNvbnN0IHsgbmFtZTogYmxvY2tOYW1lIH0gPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSB1c2VTZWxlY3QoIHNlbGVjdCA9PiB7XG5cdFx0aWYgKCBmYWxzZSA9PT0gbmFtZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgYmxvY2sgPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKS5nZXRCbG9ja1R5cGUoIGJsb2NrTmFtZSApO1xuXG5cdFx0cmV0dXJuIGJsb2NrLmF0dHJpYnV0ZXNbIG5hbWUgXT8uamZiID8/IGZhbHNlO1xuXHR9LCBbIGJsb2NrTmFtZSwgbmFtZSBdICk7XG5cblx0aWYgKCAhc2V0dGluZ3MgKSB7XG5cdFx0cmV0dXJuIEJvb2xlYW4oIGNoaWxkcmVuICkgJiYgPEJhc2VIZWxwIGNsYXNzTmFtZT1cImpldC1mYiBtYi0yNFwiPlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9CYXNlSGVscD47XG5cdH1cblxuXHRyZXR1cm4gPEJhc2VIZWxwIGNsYXNzTmFtZT1cImpldC1mYiBtYi0yNFwiPlxuXHRcdHsgY2hpbGRyZW4gJiYgPD57IGNoaWxkcmVuIH0mbmJzcDs8Lz4gfVxuXHRcdHsgKFxuXHRcdFx0c2V0dGluZ3M/LnNob3J0Y29kZSAmJiAhc2V0dGluZ3MucmljaCAmJiAhY2hpbGRyZW5cblx0XHQpICYmIChcblx0XHRcdF9fKFxuXHRcdFx0XHQnWW91IGNhbiB1c2Ugc2hvcnRjb2RlcyBoZXJlLicsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdClcblx0XHQpIH1cblx0XHR7IChcblx0XHRcdHNldHRpbmdzPy5zaG9ydGNvZGUgJiYgIXNldHRpbmdzLnJpY2ggJiYgY2hpbGRyZW5cblx0XHQpICYmIChcblx0XHRcdF9fKFxuXHRcdFx0XHQnWW91IGNhbiBhbHNvIHVzZSBzaG9ydGNvZGVzIGhlcmUuJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KVxuXHRcdCkgfVxuXHQ8L0Jhc2VIZWxwPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlSGVscDsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gQmxvY2tBZGRQcmV2QnV0dG9uKCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRpZiAoICEgdXNlSXNIYXNBdHRyaWJ1dGUoICdhZGRfcHJldicgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8VG9nZ2xlQ29udHJvbFxuXHRcdGxhYmVsPXsgbGFiZWwgPz8gX18oICdBZGQgUHJldiBQYWdlIEJ1dHRvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRoZWxwPXsgaGVscCA/PyBfXyhcblx0XHRcdGBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIFwiQWN0aW9uIEJ1dHRvblwiIGJsb2NrIHdpdGggdGhlIFwiR28gdG8gUHJldiBQYWdlXCIgdHlwZWAsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSB9XG5cdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuYWRkX3ByZXYgfVxuXHRcdG9uQ2hhbmdlPXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoIHsgYWRkX3ByZXY6IHZhbCB9ICkgfVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tBZGRQcmV2QnV0dG9uOyIsImltcG9ydCBCbG9ja0RlZmF1bHRWYWx1ZSBmcm9tICcuL0Jsb2NrRGVmYXVsdFZhbHVlJztcbmltcG9ydCBEeW5hbWljVmFsdWVzIGZyb20gJy4uLy4uL2R5bmFtaWMudmFsdWUvY29tcG9uZW50cy9EeW5hbWljVmFsdWVzJztcblxuZnVuY3Rpb24gQmxvY2tBZHZhbmNlZFZhbHVlKCB7IGhlbHAsIGxhYmVsLCBoYXNNYWNybyA9IHRydWUsIC4uLnByb3BzIH0gKSB7XG5cdHJldHVybiA8ZGl2IHsgLi4ucHJvcHMgfT5cblx0XHQ8QmxvY2tEZWZhdWx0VmFsdWVcblx0XHRcdGhlbHA9eyBoZWxwIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0aGFzTWFjcm89eyBoYXNNYWNybyB9XG5cdFx0Lz5cblx0XHQ8aHIvPlxuXHRcdDxEeW5hbWljVmFsdWVzLz5cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0FkdmFuY2VkVmFsdWU7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJsb2NrQ2xhc3NOYW1lKCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRyZXR1cm4gPFRleHRDb250cm9sXG5cdFx0bGFiZWw9eyBsYWJlbCA/PyBfXyggXCJDU1MgQ2xhc3MgTmFtZVwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNsYXNzX25hbWUgfVxuXHRcdGhlbHA9eyBoZWxwID8/ICcnIH1cblx0XHRvbkNoYW5nZT17IHZhbCA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNsYXNzX25hbWU6IHZhbCB9ICkgfVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tDbGFzc05hbWU7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IEFkdmFuY2VkSW5zcGVjdG9yQ29udHJvbFxuXHRmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuaW1wb3J0IENsaWVudFNpZGVNYWNyb3MgZnJvbSAnLi4vLi4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL0NsaWVudFNpZGVNYWNyb3MnO1xuaW1wb3J0IHVzZUluc2VydE1hY3JvIGZyb20gJy4uLy4uL21hY3Jvcy5idXR0b24vaG9va3MvdXNlSW5zZXJ0TWFjcm8nO1xuaW1wb3J0IEF0dHJpYnV0ZUhlbHAgZnJvbSAnLi9BdHRyaWJ1dGVIZWxwJztcbmltcG9ydCBDb250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0XG5cdGZyb20gJy4uLy4uL3ByZXNldC9jb250ZXh0L0NvbnRyb2xQcmVzZXRSZXN0cmljdGlvbkNvbnRleHQnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJsb2NrRGVmYXVsdFZhbHVlKCB7IGxhYmVsLCBoZWxwLCBoYXNNYWNybyA9IHRydWUgfSApIHtcblx0Y29uc3QgW1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0ICAgICAgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IFsgaW5wdXQsIHVwZGF0ZUlucHV0IF0gPSB1c2VJbnNlcnRNYWNybyggJ2RlZmF1bHQnICk7XG5cblx0aWYgKCAhdXNlSXNIYXNBdHRyaWJ1dGUoICdkZWZhdWx0JyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxDb250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBzaG93OiB0cnVlIH0gfT5cblx0XHQ8Q2xpZW50U2lkZU1hY3Jvcz5cblx0XHRcdDxBZHZhbmNlZEluc3BlY3RvckNvbnRyb2xcblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRlZmF1bHQgfVxuXHRcdFx0XHRsYWJlbD17IGxhYmVsID8/IF9fKCAnRGVmYXVsdCBWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0b25DaGFuZ2VQcmVzZXQ9eyB2YWwgPT4gc2V0QXR0cmlidXRlcyggeyBkZWZhdWx0OiB2YWwgfSApIH1cblx0XHRcdFx0b25DaGFuZ2VNYWNyb3M9eyBoYXNNYWNybyA/IHVwZGF0ZUlucHV0IDogZmFsc2UgfVxuXHRcdFx0PlxuXHRcdFx0XHR7ICggeyBpbnN0YW5jZUlkIH0gKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIDw+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0cmVmPXsgaW5wdXQgfVxuXHRcdFx0XHRcdFx0XHRpZD17IGluc3RhbmNlSWQgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVmYXVsdCB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mYiBtLXVuc2V0XCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gc2V0QXR0cmlidXRlcyhcblx0XHRcdFx0XHRcdFx0XHR7IGRlZmF1bHQ6IHZhbCB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxBdHRyaWJ1dGVIZWxwIG5hbWU9XCJkZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdHsgaGVscCA/PyAnJyB9XG5cdFx0XHRcdFx0XHQ8L0F0dHJpYnV0ZUhlbHA+XG5cdFx0XHRcdFx0PC8+O1xuXHRcdFx0XHR9IH1cblx0XHRcdDwvQWR2YW5jZWRJbnNwZWN0b3JDb250cm9sPlxuXHRcdDwvQ2xpZW50U2lkZU1hY3Jvcz5cblx0PC9Db250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tEZWZhdWx0VmFsdWU7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlJztcbmltcG9ydCBBdHRyaWJ1dGVIZWxwIGZyb20gJy4vQXR0cmlidXRlSGVscCc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gQmxvY2tEZXNjcmlwdGlvbiggeyBsYWJlbCwgaGVscCB9ICkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCAhdXNlSXNIYXNBdHRyaWJ1dGUoICdkZXNjJyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDw+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRsYWJlbD17IGxhYmVsID8/IF9fKCAnRmllbGQgRGVzY3JpcHRpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVzYyB9XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmIgbS11bnNldFwiXG5cdFx0XHRvbkNoYW5nZT17IGRlc2MgPT4gc2V0QXR0cmlidXRlcyggeyBkZXNjIH0gKSB9XG5cdFx0Lz5cblx0XHQ8QXR0cmlidXRlSGVscCBuYW1lPVwiZGVzY1wiPlxuXHRcdFx0eyBoZWxwID8/ICcnIH1cblx0XHQ8L0F0dHJpYnV0ZUhlbHA+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tEZXNjcmlwdGlvbjsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgQ2hhbmdlTmFtZUJ5TGFiZWwgZnJvbSAnLi4vaGVscGVycy9DaGFuZ2VOYW1lQnlMYWJlbCc7XG5pbXBvcnQgQXR0cmlidXRlSGVscCBmcm9tICcuL0F0dHJpYnV0ZUhlbHAnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7XG5cdCAgICBfX2V4cGVyaW1lbnRhbFVzZUZvY3VzT3V0c2lkZSxcblx0ICAgIHVzZUZvY3VzT3V0c2lkZSxcbiAgICB9ID0gd3AuY29tcG9zZTtcblxudXNlRm9jdXNPdXRzaWRlID0gdXNlRm9jdXNPdXRzaWRlIHx8IF9fZXhwZXJpbWVudGFsVXNlRm9jdXNPdXRzaWRlO1xuXG5mdW5jdGlvbiBCbG9ja0xhYmVsKCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRmdW5jdGlvbiBvbkJsdXJMYWJlbCgpIHtcblx0XHRDaGFuZ2VOYW1lQnlMYWJlbCggYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyApO1xuXHR9XG5cblx0Y29uc3QgcmVmID0gdXNlRm9jdXNPdXRzaWRlKCBvbkJsdXJMYWJlbCApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCA/PyBfXyggJ0ZpZWxkIExhYmVsJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZiIG0tdW5zZXRcIlxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cblx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoIHsgbGFiZWw6IHZhbCB9ICkgfVxuXHRcdFx0eyAuLi5yZWYgfVxuXHRcdC8+XG5cdFx0PEF0dHJpYnV0ZUhlbHAgbmFtZT1cImxhYmVsXCI+XG5cdFx0XHR7IGhlbHAgPz8gJycgfVxuXHRcdDwvQXR0cmlidXRlSGVscD5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0xhYmVsOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCB1c2VJc0hhc0F0dHJpYnV0ZSBmcm9tICcuLi8uLi9ob29rcy91c2VJc0hhc0F0dHJpYnV0ZSc7XG5pbXBvcnQgdXNlSXNVbmlxdWVGaWVsZE5hbWUgZnJvbSAnLi4vaG9va3MvdXNlSXNVbmlxdWVGaWVsZE5hbWUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuXHQgICAgICBJY29uLFxuXHQgICAgICBGbGV4LFxuXHQgICAgICBUb29sdGlwLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUluc3RhbmNlSWQsXG4gICAgICB9ID0gd3AuY29tcG9zZTtcblxuZnVuY3Rpb24gQmxvY2tOYW1lKCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRjb25zdCB7IG1lc3NhZ2UgfSA9IHVzZUlzVW5pcXVlRmllbGROYW1lKCk7XG5cdGNvbnN0IGluc3RhbmNlSWQgID0gdXNlSW5zdGFuY2VJZCggQmxvY2tOYW1lLCAnQWR2YW5jZWRJbnNwZWN0b3JDb250cm9sJyApO1xuXG5cdGlmICggIXVzZUlzSGFzQXR0cmlidXRlKCAnbmFtZScgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdDxGbGV4XG5cdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cblx0XHRcdGp1c3RpZnk9eyAnZmxleC1zdGFydCcgfVxuXHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdG1hcmdpbkJvdHRvbTogJzhweCcsXG5cdFx0XHR9IH1cblx0XHQ+XG5cdFx0XHQ8bGFiZWxcblx0XHRcdFx0aHRtbEZvcj17IGluc3RhbmNlSWQgfVxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiIGxhYmVsJyB9XG5cdFx0XHQ+eyBsYWJlbCA/PyBfXyggJ0Zvcm0gZmllbGQgbmFtZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L2xhYmVsPlxuXHRcdFx0eyAoXG5cdFx0XHRcdCEhbWVzc2FnZVxuXHRcdFx0KSAmJiA8VG9vbHRpcFxuXHRcdFx0XHR0ZXh0PXsgbWVzc2FnZSB9XG5cdFx0XHRcdGRlbGF5PXsgMjAwIH1cblx0XHRcdFx0cG9zaXRpb249eyAndG9wIGNlbnRlcicgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8SWNvblxuXHRcdFx0XHRcdGljb249eyAnd2FybmluZycgfVxuXHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICdvcmFuZ2UnLFxuXHRcdFx0XHRcdFx0Y3Vyc29yOiAnaGVscCcsXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2x0aXA+IH1cblx0XHQ8L0ZsZXg+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRpZD17IGluc3RhbmNlSWQgfVxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm5hbWUgfVxuXHRcdFx0aGVscD17IGhlbHAgPz8gX18oXG5cdFx0XHRcdCdTaG91bGQgY29udGFpbiBvbmx5IExhdGluIGxldHRlcnMsIG51bWJlcnMsIGAtYCBvciBgX2AgY2hhcnMsIG5vIHNwYWNlcyBvbmx5IGxvd2VyIGNhc2UnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmFtZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG5hbWUgfSApIH1cblx0XHQvPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrTmFtZTsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJsb2NrUGxhY2Vob2xkZXIoIHsgbGFiZWwsIGhlbHAgfSApIHtcblx0Y29uc3QgW1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0ICAgICAgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGlmICggISB1c2VJc0hhc0F0dHJpYnV0ZSggJ3BsYWNlaG9sZGVyJyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxUZXh0Q29udHJvbFxuXHRcdGxhYmVsPXsgbGFiZWwgPz8gX18oICdQbGFjZWhvbGRlcicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgfVxuXHRcdGhlbHA9eyBoZWxwID8/ICcnIH1cblx0XHRvbkNoYW5nZT17IHBsYWNlaG9sZGVyID0+IHNldEF0dHJpYnV0ZXMoIHsgcGxhY2Vob2xkZXIgfSApIH1cblx0Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrUGxhY2Vob2xkZXI7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IEF0dHJpYnV0ZUhlbHAgZnJvbSAnLi9BdHRyaWJ1dGVIZWxwJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBCbG9ja1ByZXZCdXR0b25MYWJlbCggeyBsYWJlbCwgaGVscCB9ICkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCAhYXR0cmlidXRlcy5hZGRfcHJldiApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9e1xuXHRcdFx0XHRsYWJlbCA/PyBfXyggJ1ByZXYgUGFnZSBCdXR0b24gTGFiZWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0fVxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnByZXZfbGFiZWwgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZiIG0tdW5zZXRcIlxuXHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gc2V0QXR0cmlidXRlcyggeyBwcmV2X2xhYmVsOiB2YWwgfSApIH1cblx0XHQvPlxuXHRcdDxBdHRyaWJ1dGVIZWxwIG5hbWU9XCJwcmV2X2xhYmVsXCI+XG5cdFx0XHR7IGhlbHAgPz8gJycgfVxuXHRcdDwvQXR0cmlidXRlSGVscD5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1ByZXZCdXR0b25MYWJlbDsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgIFRvb2xiYXJCdXR0b24sXG4gICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgQmxvY2tDb250cm9scyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgeyBTVkcsIFBhdGggfSA9IHdwLnByaW1pdGl2ZXM7XG5cbmZ1bmN0aW9uIEJsb2NrUmVxdWlyZWQoKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRpZiAoICF1c2VJc0hhc0F0dHJpYnV0ZSggJ3JlcXVpcmVkJyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxCbG9ja0NvbnRyb2xzIGdyb3VwPVwiYmxvY2tcIj5cblx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0aWNvbj17IDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIj5cblx0XHRcdFx0PFBhdGggZD1cIk0xMiA0TDEyIDIwXCIgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cblx0XHRcdFx0PFBhdGggZD1cIk0xNy4zMTM3IDYuMDAwMjRMNi4wMDAwMSAxNy4zMTRcIiBzdHJva2U9XCJjdXJyZW50Y29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuXHRcdFx0XHQ8UGF0aCBkPVwiTTIwIDEyTDQgMTJcIiBzdHJva2U9XCJjdXJyZW50Y29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuXHRcdFx0XHQ8UGF0aCBkPVwiTTE3LjMxMzcgMTcuMzEzN0w2LjAwMDAxIDYuMDAwMDFcIiBzdHJva2U9XCJjdXJyZW50Y29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuXHRcdFx0PC9TVkc+IH1cblx0XHRcdHRpdGxlPXsgYXR0cmlidXRlcy5yZXF1aXJlZFxuXHRcdFx0ICAgICAgICA/IF9fKFxuXHRcdFx0XHRcdCdDbGljayB0byBtYWtlIHRoaXMgZmllbGQgb3B0aW9uYWwnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KVxuXHRcdFx0ICAgICAgICA6IF9fKFxuXHRcdFx0XHRcdCdDbGljayB0byBtYWtlIHRoaXMgZmllbGQgcmVxdWlyZWQnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0b25DbGljaz17ICgpID0+IHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0cmVxdWlyZWQ6ICFhdHRyaWJ1dGVzLnJlcXVpcmVkLFxuXHRcdFx0fSApIH1cblx0XHRcdGlzQWN0aXZlPXsgYXR0cmlidXRlcy5yZXF1aXJlZCB9XG5cdFx0Lz5cblx0PC9CbG9ja0NvbnRyb2xzPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tSZXF1aXJlZDsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gQmxvY2tWaXNpYmlsaXR5KCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRpZiAoICF1c2VJc0hhc0F0dHJpYnV0ZSggJ3Zpc2liaWxpdHknICkgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcblx0XHRvcHRpb25zPXsgW1xuXHRcdFx0e1xuXHRcdFx0XHRcInZhbHVlXCI6IFwiYWxsXCIsXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRm9yIGFsbFwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwidmFsdWVcIjogXCJsb2dnZWRfaWRcIixcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJPbmx5IGZvciBsb2dnZWQgaW4gdXNlcnNcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInZhbHVlXCI6IFwibm90X2xvZ2dlZF9pblwiLFxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIk9ubHkgZm9yIE5PVC1sb2dnZWQgaW4gdXNlcnNcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHR9LFxuXHRcdF0gfVxuXHRcdGxhYmVsPXsgbGFiZWwgPz8gX18oIFwiRmllbGQgVmlzaWJpbGl0eVwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0aGVscD17IGhlbHAgPz8gJycgfVxuXHRcdHZhbHVlPXsgYXR0cmlidXRlcy52aXNpYmlsaXR5IH1cblx0XHRvbkNoYW5nZT17IHZpc2liaWxpdHkgPT4gc2V0QXR0cmlidXRlcyggeyB2aXNpYmlsaXR5IH0gKSB9XG5cdC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1Zpc2liaWxpdHk7IiwiaW1wb3J0IENvbnRyb2xzU2V0dGluZ3MgZnJvbSAnLi4vaGVscGVycy9Db250cm9sc1NldHRpbmdzJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcblx0ICAgICAgQmFzZUNvbnRyb2wsXG5cdCAgICAgIF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcblxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gdXNlQ29udHJvbHMoIHtcblx0dHlwZSxcblx0YXR0cmlidXRlcyxcblx0YXR0cnNTZXR0aW5ncyA9IHt9LFxufSApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblx0Y29uc3QgYmxvY2tOYW1lICA9IGJsb2NrUHJvcHNbICdkYXRhLXR5cGUnIF07XG5cdGNvbnN0IGNvbnRyb2xzICAgPSBDb250cm9sc1NldHRpbmdzKCk7XG5cblx0aWYgKCAhY29udHJvbHNbIHR5cGUgXSApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IGNvbnRyb2xzWyB0eXBlIF07XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cblx0Y29uc3QgaXNWYWxpZENvbmRpdGlvbiA9ICggYXR0ciApID0+IHtcblx0XHRpZiAoICFhdHRyLmNvbmRpdGlvbiApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICggYmxvY2tOYW1lICYmIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZSApIHtcblx0XHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgJiYgYmxvY2tOYW1lICE9PVxuXHRcdFx0XHRhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWVcblx0XHRcdFx0JiYgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lLmxlbmd0aFxuXHRcdFx0XHQmJiAhYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lLmluY2x1ZGVzKCBibG9ja05hbWUgKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBvYmplY3ROb3RNYXRjaCA9IChcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKCAnb2JqZWN0JyAhPT0gdHlwZW9mIGF0dHIuY29uZGl0aW9uLmF0dHIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciA9ICdhbmQnLCBpdGVtcyA9IHt9IH0gPSBhdHRyLmNvbmRpdGlvbi5hdHRyO1xuXG5cdFx0XHRcdGlmICggJ29yJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyVG9Db21wYXJlIGluIGl0ZW1zICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdmFsdWVDb21wYXJlID0gaXRlbXNbIGF0dHJUb0NvbXBhcmUgXTtcblxuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0XHRcdFx0aWYgKCB2YWx1ZUNvbXBhcmUgPT09IGF0dHJpYnV0ZXNbIGF0dHJUb0NvbXBhcmUgXSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAnYW5kJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyVG9Db21wYXJlIGluIGl0ZW1zICkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggaXRlbXNbIGF0dHJUb0NvbXBhcmUgXSAhPT1cblx0XHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXNbIGF0dHJUb0NvbXBhcmUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0KSgpO1xuXG5cdFx0aWYgKCAhb2JqZWN0Tm90TWF0Y2hcblx0XHRcdHx8IChcblx0XHRcdFx0J3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5hdHRyXG5cdFx0XHRcdCYmIGF0dHIuY29uZGl0aW9uLmF0dHJcblx0XHRcdFx0JiYgIWF0dHJpYnV0ZXNbIGF0dHIuY29uZGl0aW9uLmF0dHIgXVxuXHRcdFx0KVxuXHRcdFx0fHwgKFxuXHRcdFx0XHQnc3RyaW5nJyA9PT0gdHlwZW9mIGF0dHIuY29uZGl0aW9uXG5cdFx0XHRcdCYmICFhdHRyaWJ1dGVzWyBhdHRyLmNvbmRpdGlvbiBdXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0cmV0dXJuIGN1cnJlbnRDb250cm9sLmF0dHJzLmZpbHRlcihcblx0XHQoIHsgYXR0ck5hbWUsIGxhYmVsLCAuLi5hdHRyIH0gKSA9PiB7XG5cdFx0XHRjb25zdCBpc1JlZ2lzdGVyQXR0cmlidXRlID0gKFxuXHRcdFx0XHRhdHRyTmFtZSBpbiBhdHRyaWJ1dGVzXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgdmFsaWRDb25kaXRpb24gICAgICA9IGlzVmFsaWRDb25kaXRpb24oIGF0dHIgKTtcblx0XHRcdGNvbnN0IGlzSGlkZGVuICAgICAgICAgICAgPSAoXG5cdFx0XHRcdGF0dHJOYW1lIGluIGF0dHJzU2V0dGluZ3Ncblx0XHRcdFx0JiYgJ3Nob3cnIGluIGF0dHJzU2V0dGluZ3NbIGF0dHJOYW1lIF1cblx0XHRcdFx0JiYgZmFsc2UgPT09IGF0dHJzU2V0dGluZ3NbIGF0dHJOYW1lIF0uc2hvd1xuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aXNSZWdpc3RlckF0dHJpYnV0ZSAmJiB2YWxpZENvbmRpdGlvbiAmJiAhaXNIaWRkZW5cblx0XHRcdCk7XG5cdFx0fSApO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIDMuMC4wXG4gKlxuICogQHBhcmFtICBwcm9wc1xuICogQHJldHVybiB7dW5rbm93bltdfVxuICogQGNsYXNzXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBGaWVsZENvbnRyb2woIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgZmllbGRDb250cm9scyA9IHVzZUNvbnRyb2xzKCBwcm9wcyApO1xuXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiB2YWx1ZSB9ICk7XG5cdH07XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cblx0cmV0dXJuIGZpZWxkQ29udHJvbHMubWFwKCAoIHsgaGVscCA9ICcnLCBhdHRyTmFtZSwgbGFiZWwsIC4uLmF0dHIgfSApID0+IHtcblx0XHRzd2l0Y2ggKCBhdHRyLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0cmV0dXJuIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRleHRDb250cm9sYCB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gb25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApIH1cblx0XHRcdFx0Lz47XG5cblx0XHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRcdHJldHVybiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVNlbGVjdENvbnRyb2xgIH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgYXR0ci5vcHRpb25zIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+O1xuXHRcdFx0Y2FzZSAndG9nZ2xlJzpcblx0XHRcdFx0cmV0dXJuIDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVG9nZ2xlQ29udHJvbGAgfVxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPjtcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRcdFx0XHQgQHdvcmRwcmVzcy9uby1iYXNlLWNvbnRyb2wtd2l0aC1sYWJlbC13aXRob3V0LWlkXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRyZXR1cm4gPEJhc2VDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tQmFzZUNvbnRyb2xgIH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1OdW1iZXJDb250cm9sYCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBOdW1iZXIoIG5ld1ZhbCApLCBhdHRyTmFtZSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHAnIH1cblx0XHRcdFx0XHQgICBzdHlsZT17IHtcblx0XHRcdFx0XHRcdCAgIGNvbG9yOiAncmdiKDExNywgMTE3LCAxMTcpJyxcblx0XHRcdFx0XHQgICB9IH0+eyBoZWxwIH08L3A+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+O1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdH0gKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZENvbnRyb2w7IiwiY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBQYW5lbEJvZHksXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IHdwLmhvb2tzO1xuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG4vKipcbiAqIEBwYXJhbSAgcHJvcHNcbiAqIEByZXR1cm4ge2Jvb2xlYW58SlNYLkVsZW1lbnR9XG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gRmllbGRTZXR0aW5nc1dyYXBwZXIoIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgdGl0bGUsXG5cdFx0ICAgICAgY2hpbGRyZW4sXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXHRjb25zdCBibG9ja05hbWUgPSBibG9ja1Byb3BzWyAnZGF0YS10eXBlJyBdLnJlcGxhY2UoICcvJywgJy0nICk7XG5cblx0Y29uc3QgQ3VzdG9tU2V0dGluZ3MgPSBhcHBseUZpbHRlcnMoXG5cdFx0YGpldC5mYi5yZW5kZXIuc2V0dGluZ3MuJHsgYmxvY2tOYW1lIH1gLFxuXHRcdG51bGwsXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHRjaGlsZHJlbiB8fCBDdXN0b21TZXR0aW5nc1xuXHQpICYmIDxQYW5lbEJvZHlcblx0XHR0aXRsZT17IHRpdGxlIHx8IF9fKCAnRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdD5cblx0XHR7IGNoaWxkcmVuIH1cblx0XHR7IEN1c3RvbVNldHRpbmdzIH1cblx0PC9QYW5lbEJvZHk+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFNldHRpbmdzV3JhcHBlcjsiLCJpbXBvcnQge1xuXHRjbGFzc25hbWVzLFxufSBmcm9tICcuLi8uLi90b29scyc7XG5pbXBvcnQgdXNlU2VsZWN0UG9zdE1ldGEgZnJvbSAnLi4vLi4vaG9va3MvdXNlU2VsZWN0UG9zdE1ldGEnO1xuaW1wb3J0IENoYW5nZU5hbWVCeUxhYmVsIGZyb20gJy4uL2hlbHBlcnMvQ2hhbmdlTmFtZUJ5TGFiZWwnO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi4vaG9va3MvdXNlVW5pcUtleSc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZUNvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICBSaWNoVGV4dCxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmxldCB7XG5cdCAgICBfX2V4cGVyaW1lbnRhbFVzZUZvY3VzT3V0c2lkZSxcblx0ICAgIHVzZUZvY3VzT3V0c2lkZSxcbiAgICB9ICAgPSB3cC5jb21wb3NlO1xuXG51c2VGb2N1c091dHNpZGUgPSB1c2VGb2N1c091dHNpZGUgfHwgX19leHBlcmltZW50YWxVc2VGb2N1c091dHNpZGU7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFJpY2hEZXNjcmlwdGlvbiggY29udGVudCApIHtcblx0cmV0dXJuIDxzbWFsbCBzdHlsZT17IHtcblx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcblx0XHRwYWRkaW5nOiAnMC4yZW0gMC44ZW0gMCAwJyxcblx0XHRjb2xvcjogJyM4ZThhOGEnLFxuXHR9IH0+XG5cdFx0eyBjb250ZW50IH1cblx0PC9zbWFsbD47XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBGaWVsZFdyYXBwZXIoIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBjaGlsZHJlbixcblx0XHQgICAgICB3cmFwQ2xhc3NlcyAgICAgICA9IFtdLFxuXHRcdCAgICAgIHZhbHVlSWZFbXB0eUxhYmVsID0gJycsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0XHQgICAgICBjaGlsZHJlblBvc2l0aW9uICA9ICdiZXR3ZWVuJyxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IHVuaXFLZXkgPSB1c2VVbmlxS2V5KCk7XG5cblx0Y29uc3QgYXJncyA9IHVzZVNlbGVjdFBvc3RNZXRhKCAnX2pmX2FyZ3MnICk7XG5cblx0ZnVuY3Rpb24gb25CbHVyTGFiZWwoKSB7XG5cdFx0Q2hhbmdlTmFtZUJ5TGFiZWwoIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgKTtcblx0fVxuXG5cdGNvbnN0IHJlZiA9IHVzZUZvY3VzT3V0c2lkZSggb25CbHVyTGFiZWwgKTtcblxuXHRmdW5jdGlvbiByZW5kZXJMYWJlbCgpIHtcblx0XHRyZXR1cm4gPEJhc2VDb250cm9sLlZpc3VhbExhYmVsPlxuXHRcdFx0eyBSaWNoRGVzY3JpcHRpb24oIF9fKCAnaW5wdXQgbGFiZWw6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKSB9XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX2xhYmVsXCJcblx0XHRcdD5cblx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3JpY2gtbGFiZWwnICkgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTGFiZWwuLi5cIlxuXHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5sYWJlbFxuXHRcdFx0XHRcdCAgICAgICAgPyBhdHRyaWJ1dGVzLmxhYmVsXG5cdFx0XHRcdFx0ICAgICAgICA6IHZhbHVlSWZFbXB0eUxhYmVsIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld0xhYmVsID0+IHNldEF0dHJpYnV0ZXMoXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiBuZXdMYWJlbCB9ICkgfVxuXHRcdFx0XHRcdGlzU2VsZWN0ZWQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0eyAuLi5yZWYgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMucmVxdWlyZWQgJiZcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcXVpcmVkJyB9PlxuXHRcdFx0XHRcdHsgYXJncy5yZXF1aXJlZF9tYXJrID8gYXJncy5yZXF1aXJlZF9tYXJrIDogJyonIH1cblx0XHRcdFx0PC9zcGFuPiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sLlZpc3VhbExhYmVsPjtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlckRlc2NyaXB0aW9uKCkge1xuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX2Rlc2MtLXdyYXBwZXJcIj5cblx0XHRcdHsgUmljaERlc2NyaXB0aW9uKFxuXHRcdFx0XHRfXyggJ2lucHV0IGRlc2NyaXB0aW9uOicsICdqZXQtZm9ybS1idWlsZGVyJyApICkgfVxuXHRcdFx0PEJhc2VDb250cm9sIGtleT17ICdjdXN0b21faGVscF9kZXNjcmlwdGlvbicgfVxuXHRcdFx0ICAgICAgICAgICAgIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19kZXNjJyB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwXCI+XG5cdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncmljaC1kZXNjcmlwdGlvbicgKSB9XG5cdFx0XHRcdFx0XHR0YWdOYW1lPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZXNjIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgZGVzYyA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRlc2MgfSApIH1cblx0XHRcdFx0XHRcdHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcwcHgnIH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHQ8L2Rpdj47XG5cdH1cblxuXHRpZiAoICdyb3cnID09PSBhcmdzLmZpZWxkc19sYXlvdXQgKSB7XG5cdFx0d3JhcENsYXNzZXMucHVzaCggJ2pldC1mb3JtLWJ1aWxkZXItcm93X19mbGV4JyApO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZUhvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHRjbGFzc05hbWU9eyBjbGFzc25hbWVzKFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCcsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyLXJvdycsXG5cdFx0XHRcdHdyYXBDbGFzc2VzLFxuXHRcdFx0KSB9XG5cdFx0PlxuXHRcdFx0eyAncm93JyAhPT0gYXJncy5maWVsZHNfbGF5b3V0ICYmIDw+XG5cdFx0XHRcdHsgJ3RvcCcgPT09IGNoaWxkcmVuUG9zaXRpb24gJiYgY2hpbGRyZW4gfVxuXHRcdFx0XHR7IHJlbmRlckxhYmVsKCkgfVxuXHRcdFx0XHR7ICdiZXR3ZWVuJyA9PT0gY2hpbGRyZW5Qb3NpdGlvbiAmJiBjaGlsZHJlbiB9XG5cdFx0XHRcdHsgcmVuZGVyRGVzY3JpcHRpb24oKSB9XG5cdFx0XHRcdHsgJ2JvdHRvbScgPT09IGNoaWxkcmVuUG9zaXRpb24gJiYgY2hpbGRyZW4gfVxuXHRcdFx0PC8+IH1cblx0XHRcdHsgJ3JvdycgPT09IGFyZ3MuZmllbGRzX2xheW91dCAmJiA8PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXItcm93X19mbGV4LS1sYWJlbFwiPlxuXHRcdFx0XHRcdHsgcmVuZGVyTGFiZWwoKSB9XG5cdFx0XHRcdFx0eyByZW5kZXJEZXNjcmlwdGlvbigpIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1idWlsZGVyLXJvd19fZmxleC0tY29udGVudFwiPnsgY2hpbGRyZW4gfTwvZGl2PlxuXHRcdFx0PC8+IH1cblx0XHQ8L0Jhc2VDb250cm9sPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFdyYXBwZXI7IiwiaW1wb3J0IEJsb2NrTGFiZWwgZnJvbSAnLi9CbG9ja0xhYmVsJztcbmltcG9ydCBCbG9ja05hbWUgZnJvbSAnLi9CbG9ja05hbWUnO1xuaW1wb3J0IEJsb2NrRGVzY3JpcHRpb24gZnJvbSAnLi9CbG9ja0Rlc2NyaXB0aW9uJztcbmltcG9ydCBCbG9ja0RlZmF1bHRWYWx1ZSBmcm9tICcuL0Jsb2NrRGVmYXVsdFZhbHVlJztcblxuY29uc3Qge1xuXHQgICAgICBQYW5lbEJvZHksXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gR2VuZXJhbEZpZWxkcyggeyBoYXNNYWNybyA9IHRydWUgfSApIHtcblx0cmV0dXJuIDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0dlbmVyYWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdCAgICAgICAgICAgICAgICAgIGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWZpZWxkcycgfT5cblx0XHQ8QmxvY2tMYWJlbC8+XG5cdFx0PEJsb2NrTmFtZS8+XG5cdFx0PEJsb2NrRGVzY3JpcHRpb24vPlxuXHRcdDxCbG9ja0RlZmF1bHRWYWx1ZSBoYXNNYWNybz17IGhhc01hY3JvIH0gLz5cblx0PC9QYW5lbEJvZHk+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5lcmFsRmllbGRzOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCBTY29wZWRBdHRyaWJ1dGVzQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L1Njb3BlZEF0dHJpYnV0ZXNDb250ZXh0JztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5mdW5jdGlvbiBTY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXIoIHsgY2hpbGRyZW4gfSApIHtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblx0Y29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gICAgICAgPSB1c2VTdGF0ZSggKCkgPT4gYXR0cmlidXRlcyApO1xuXG5cdHJldHVybiA8U2NvcGVkQXR0cmlidXRlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0cmVhbEF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG5cdFx0c2V0UmVhbEF0dHJpYnV0ZXM6IHNldEF0dHJpYnV0ZXMsXG5cdFx0YXR0cmlidXRlczogY3VycmVudCxcblx0XHRzZXRBdHRyaWJ1dGVzOiBzZXRDdXJyZW50LFxuXHR9IH0+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvU2NvcGVkQXR0cmlidXRlc0NvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXI7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIEN1c3RvbVNlbGVjdENvbnRyb2wsXG5cdCAgICAgIEljb24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tFZGl0Q29udGV4dCxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZnVuY3Rpb24gU2VsZWN0VmFyaWF0aW9ucyggeyB2YWx1ZSB9ICkge1xuXHRjb25zdCB7IG5hbWUgfSAgICAgICAgICAgID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXHRjb25zdCBbICwgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgeyB2YXJpYXRpb25zLCByYXdWYXJpYXRpb25zIH0gPSB1c2VTZWxlY3QoXG5cdFx0KCBzZWxlY3QgKSA9PiB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdCAgICAgIGdldEJsb2NrVmFyaWF0aW9ucyxcblx0XHRcdCAgICAgIH0gPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKTtcblxuXHRcdFx0Y29uc3QgaXRlbXMgICAgICAgICA9IGdldEJsb2NrVmFyaWF0aW9ucyggbmFtZSwgJ2Jsb2NrJyApO1xuXHRcdFx0Y29uc3Qgb3B0aW9ucyAgICAgICA9IFtdO1xuXHRcdFx0Y29uc3QgdmFyaWF0aW9uc01hcCA9IHt9O1xuXG5cdFx0XHRmb3IgKCBjb25zdCBpdGVtIG9mIGl0ZW1zICkge1xuXHRcdFx0XHRvcHRpb25zLnB1c2goIHtcblx0XHRcdFx0XHRrZXk6IGl0ZW0ubmFtZSxcblx0XHRcdFx0XHRuYW1lOiA8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZiIGZsZXggZ2FwLTFlbSBhaS1jZW50ZXInIH0+XG5cdFx0XHRcdFx0XHQ8SWNvbiBpY29uPXsgaXRlbS5pY29uIH0vPlxuXHRcdFx0XHRcdFx0eyBpdGVtLnRpdGxlIH1cblx0XHRcdFx0XHQ8L3NwYW4+LFxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHZhcmlhdGlvbnNNYXBbIGl0ZW0ubmFtZSBdID0gaXRlbTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFyaWF0aW9uczogb3B0aW9ucyxcblx0XHRcdFx0cmF3VmFyaWF0aW9uczogdmFyaWF0aW9uc01hcCxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRbIG5hbWUgXSxcblx0KTtcblxuXHRpZiAoICF2YXJpYXRpb25zLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8Q3VzdG9tU2VsZWN0Q29udHJvbFxuXHRcdF9fbmV4dFVuY29uc3RyYWluZWRXaWR0aFxuXHRcdGhpZGVMYWJlbEZyb21WaXNpb25cblx0XHRvcHRpb25zPXsgdmFyaWF0aW9ucyB9XG5cdFx0c2l6ZT17ICdfX3Vuc3RhYmxlLWxhcmdlJyB9XG5cdFx0b25DaGFuZ2U9eyAoIHsgc2VsZWN0ZWRJdGVtIH0gKSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHQuLi5yYXdWYXJpYXRpb25zWyBzZWxlY3RlZEl0ZW0ua2V5IF0uYXR0cmlidXRlcyxcblx0XHR9ICkgfVxuXHRcdHZhbHVlPXsgdmFyaWF0aW9ucy5maW5kKFxuXHRcdFx0KCB7IGtleSB9ICkgPT4ga2V5ID09PSB2YWx1ZSApXG5cdFx0fVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0VmFyaWF0aW9uczsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQ2hpbGRyZW4sXG5cdCAgICAgIGNsb25lRWxlbWVudCxcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmxldCB7XG5cdCAgICBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbCxcblx0ICAgIF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uSWNvbixcblx0ICAgIF9fZXhwZXJpbWVudGFsVG9vbGJhckNvbnRleHQsXG5cdCAgICBUb2dnbGVHcm91cENvbnRyb2wsXG5cdCAgICBUb2dnbGVHcm91cENvbnRyb2xPcHRpb25JY29uLFxuXHQgICAgVG9vbGJhckl0ZW0sXG5cdCAgICBUb29sYmFyR3JvdXAsXG5cdCAgICBUb29sYmFyQ29udGV4dCxcbiAgICB9ID0gd3AuY29tcG9uZW50cztcblxuVG9nZ2xlR3JvdXBDb250cm9sICAgICAgICAgICA9IChcblx0VG9nZ2xlR3JvdXBDb250cm9sIHx8IF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sXG4pO1xuVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uSWNvbiA9IChcblx0VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uSWNvbiB8fCBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbkljb25cbik7XG5Ub29sYmFyQ29udGV4dCAgICAgICAgICAgICAgID0gKFxuXHRUb29sYmFyQ29udGV4dCB8fCBfX2V4cGVyaW1lbnRhbFRvb2xiYXJDb250ZXh0XG4pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gVG9nZ2xlR3JvdXBWYXJpYXRpb25zQmFzZSggeyB2YWx1ZSB9ICkge1xuXHRjb25zdCB7IG5hbWUgfSAgICAgPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cdGNvbnN0IHRvb2xiYXJTdGF0ZSA9IHVzZUNvbnRleHQoIFRvb2xiYXJDb250ZXh0ICk7XG5cblx0Y29uc3QgWyAsIHNldEF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IHsgdmFyaWF0aW9ucywgY29tcG9uZW50cyB9ID0gdXNlU2VsZWN0KFxuXHRcdCggc2VsZWN0ICkgPT4ge1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHQgICAgICBnZXRCbG9ja1ZhcmlhdGlvbnMsXG5cdFx0XHQgICAgICB9ID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICk7XG5cblx0XHRcdGNvbnN0IGl0ZW1zID0gZ2V0QmxvY2tWYXJpYXRpb25zKCBuYW1lLCAnYmxvY2snICk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZhcmlhdGlvbnM6IGl0ZW1zLFxuXHRcdFx0XHRjb21wb25lbnRzOiBpdGVtcy5tYXAoXG5cdFx0XHRcdFx0Y3VycmVudCA9PiAoXG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRvb2xiYXJTdGF0ZT8uY3VycmVudElkID8/XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRvb2xiYXJTdGF0ZT8uYmFzZUlkXG5cdFx0XHRcdFx0ICAgICAgICAgICApXG5cdFx0XHRcdFx0ICAgICAgICAgICA/IDxUb29sYmFySXRlbVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBrZXk9eyBjdXJyZW50Lm5hbWUgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBhcz17IFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbkljb24gfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICB2YWx1ZT17IGN1cnJlbnQubmFtZSB9XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIGxhYmVsPXsgY3VycmVudC50aXRsZSB9XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIGljb249eyBjdXJyZW50Lmljb24gfVxuXHRcdFx0XHRcdCAgICAgICAgICAgLz4gOiA8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uSWNvblxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBrZXk9eyBjdXJyZW50Lm5hbWUgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICB2YWx1ZT17IGN1cnJlbnQubmFtZSB9XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIGxhYmVsPXsgY3VycmVudC50aXRsZSB9XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIGljb249eyBjdXJyZW50Lmljb24gfVxuXHRcdFx0XHRcdCAgICAgICAgICAgLz4gKSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdFx0W10sXG5cdCk7XG5cblx0aWYgKCAhdmFyaWF0aW9ucy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJqZmItdmFyaWF0aW9ucy10b29sYmFyLXRvZ2dsZVwiPjxUb2dnbGVHcm91cENvbnRyb2xcblx0XHRoaWRlTGFiZWxGcm9tVmlzaW9uXG5cdFx0b25DaGFuZ2U9eyB2YXJOYW1lID0+IHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdC4uLnZhcmlhdGlvbnMuZmluZChcblx0XHRcdFx0KCB7IG5hbWU6IHZhcmlhdGlvbk5hbWUgfSApID0+IHZhcmlhdGlvbk5hbWUgPT09IHZhck5hbWUsXG5cdFx0XHQpLmF0dHJpYnV0ZXMsXG5cdFx0fSApIH1cblx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRpc0Jsb2NrXG5cdD5cblx0XHR7IENoaWxkcmVuLm1hcChcblx0XHRcdGNvbXBvbmVudHMsXG5cdFx0XHRjbG9uZUVsZW1lbnQsXG5cdFx0KSB9XG5cdDwvVG9nZ2xlR3JvdXBDb250cm9sPjwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gVG9nZ2xlR3JvdXBWYXJpYXRpb25zKCBwcm9wcyApIHtcblx0Y29uc3QgdG9vbGJhclN0YXRlID0gdXNlQ29udGV4dCggVG9vbGJhckNvbnRleHQgKTtcblxuXHRpZiAoICF0b29sYmFyU3RhdGU/LmN1cnJlbnRJZCApIHtcblx0XHRyZXR1cm4gPFRvZ2dsZUdyb3VwVmFyaWF0aW9uc0Jhc2UgeyAuLi5wcm9wcyB9Lz47XG5cdH1cblxuXHRyZXR1cm4gPFRvb2xiYXJHcm91cCBjbGFzc05hbWU9eyAnamV0LWZiIHRvZ2dsZS10b29sYmFyLWdyb3VwJyB9PlxuXHRcdDxUb2dnbGVHcm91cFZhcmlhdGlvbnNCYXNlIHsgLi4ucHJvcHMgfS8+XG5cdDwvVG9vbGJhckdyb3VwPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlR3JvdXBWYXJpYXRpb25zOyIsImltcG9ydCB1c2VVbmlxS2V5IGZyb20gJy4uL2hvb2tzL3VzZVVuaXFLZXknO1xuaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZVN1Y2Nlc3NOb3RpY2UgZnJvbSAnLi4vLi4vaG9va3MvdXNlU3VjY2Vzc05vdGljZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmxvY2tDb250cm9scyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHQgICAgICB1c2VDb3B5VG9DbGlwYm9hcmQsXG4gICAgICB9ID0gd3AuY29tcG9zZTtcblxuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcblx0ICAgICAgVG9vbGJhckdyb3VwLFxuXHQgICAgICBUb29sYmFySXRlbSxcblx0ICAgICAgVG9vbGJhckJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBUb29sQmFyRGVmYXVsdCggeyBjaGlsZHJlbiA9IG51bGwgfSApIHtcblx0Y29uc3QgdW5pcUtleSA9IHVzZVVuaXFLZXkoKTtcblxuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgZGlzcGxheU5vdGljZSA9IHVzZVN1Y2Nlc3NOb3RpY2UoXG5cdFx0YENvcGllZCBcIiR7IGF0dHJpYnV0ZXMubmFtZSB9XCIgdG8gY2xpcGJvYXJkLmAsXG5cdCk7XG5cblx0Y29uc3QgY29weVJlZiA9IHVzZUNvcHlUb0NsaXBib2FyZChcblx0XHRhdHRyaWJ1dGVzLm5hbWUsXG5cdFx0KCkgPT4gZGlzcGxheU5vdGljZSggdHJ1ZSApLFxuXHQpO1xuXG5cdHJldHVybiA8QmxvY2tDb250cm9sc1xuXHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzLUJsb2NrQ29udHJvbHMnICkgfVxuXHQ+XG5cdFx0PFRvb2xiYXJHcm91cFxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtVG9vbGJhckdyb3VwJyApIH1cblx0XHRcdGNsYXNzTmFtZT1cImpldC1mYi1ibG9jay10b29sYmFyXCJcblx0XHQ+XG5cdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdGljb249XCJhZG1pbi1wYWdlXCJcblx0XHRcdFx0c2hvd1Rvb2x0aXBcblx0XHRcdFx0c2hvcnRjdXQ9XCJDb3B5IG5hbWVcIlxuXHRcdFx0XHRyZWY9eyBjb3B5UmVmIH1cblx0XHRcdC8+XG5cdFx0XHQ8VG9vbGJhckl0ZW1cblx0XHRcdFx0YXM9eyBUZXh0Q29udHJvbCB9XG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5uYW1lIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBuYW1lID0+IHNldEF0dHJpYnV0ZXMoIHsgbmFtZSB9ICkgfVxuXHRcdFx0Lz5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvVG9vbGJhckdyb3VwPlxuXHQ8L0Jsb2NrQ29udHJvbHM+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sQmFyRGVmYXVsdDsiLCJpbXBvcnQgVG9vbEJhckRlZmF1bHQgZnJvbSAnLi9Ub29sQmFyRGVmYXVsdCc7XG5pbXBvcnQgQmxvY2tSZXF1aXJlZCBmcm9tICcuL0Jsb2NrUmVxdWlyZWQnO1xuXG5mdW5jdGlvbiBUb29sQmFyRmllbGRzKCB7IGNoaWxkcmVuID0gbnVsbCB9ICkge1xuXHRyZXR1cm4gPD5cblx0XHQ8VG9vbEJhckRlZmF1bHQ+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L1Rvb2xCYXJEZWZhdWx0PlxuXHRcdDxCbG9ja1JlcXVpcmVkLz5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sQmFyRmllbGRzOyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgU2NvcGVkQXR0cmlidXRlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCB7fSApO1xuXG5leHBvcnQgZGVmYXVsdCBTY29wZWRBdHRyaWJ1dGVzQ29udGV4dDsiLCJpbXBvcnQgeyBnZXRDb252ZXJ0ZWROYW1lIH0gZnJvbSAnLi4vLi4vdG9vbHMnO1xuXG5mdW5jdGlvbiBDaGFuZ2VOYW1lQnlMYWJlbCggYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyApIHtcblx0aWYgKCAxID49IGF0dHJpYnV0ZXMubGFiZWwubGVuZ3RoXG5cdFx0fHwgKFxuXHRcdFx0YXR0cmlidXRlcy5uYW1lICYmICdmaWVsZF9uYW1lJyAhPT1cblx0XHRcdGF0dHJpYnV0ZXMubmFtZVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0c2V0QXR0cmlidXRlcygge1xuXHRcdG5hbWU6IGdldENvbnZlcnRlZE5hbWUoIGF0dHJpYnV0ZXMubGFiZWwgKSxcblx0fSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2VOYW1lQnlMYWJlbDsiLCJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IENvbnRyb2xzU2V0dGluZ3MgPSAoKSA9PiBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZmllbGRzLmNvbnRyb2xzJywge30gKVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sc1NldHRpbmdzOyIsImNvbnN0IHsgYWRkRmlsdGVyIH0gPSB3cC5ob29rcztcblxuZnVuY3Rpb24gYXBwZW5kRmllbGQoIGNhbGxiYWNrLCBmaWVsZE5hbWVzID0gW10gKSAge1xuXHRhZGRGaWx0ZXIoICdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJywgJ2pldC1mb3JtLWJ1aWxkZXInLCBibG9ja3MgPT4ge1xuXHRcdHJldHVybiBibG9ja3MubWFwKCBibG9jayA9PiB7XG5cdFx0XHRpZiAoIGZpZWxkTmFtZXMubGVuZ3RoICYmICEgZmllbGROYW1lcy5pbmNsdWRlcyggYmxvY2submFtZSApICkge1xuXHRcdFx0XHRyZXR1cm4gYmxvY2s7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjYWxsYmFjayggYmxvY2sgKTtcblx0XHR9ICk7XG5cdH0gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kRmllbGQ7IiwiY29uc3QgeyBzZWxlY3QgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9ja1BhcnNlckZ1bmMgKSB7XG5cdGNvbnN0IGJsb2Nrc1JlY3Vyc2l2ZUlubmVySXRlcmF0b3IgPSAoIGJsb2NrcywgcGFyZW50ID0gbnVsbCApID0+IHtcblxuXHRcdGJsb2NrcyA9IGJsb2NrcyB8fCBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKTtcblxuXHRcdGJsb2Nrcy5mb3JFYWNoKCBibG9jayA9PiB7XG5cdFx0XHRibG9ja1BhcnNlckZ1bmMoIGJsb2NrLCBwYXJlbnQgKTtcblxuXHRcdFx0aWYgKCBibG9jay5pbm5lckJsb2Nrcy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRQYXJlbnQgPSAnamV0LWZvcm1zL3JlcGVhdGVyLWZpZWxkJyA9PT0gYmxvY2submFtZVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPyBibG9ja1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgOiBwYXJlbnQ7XG5cblx0XHRcdFx0YmxvY2tzUmVjdXJzaXZlSW5uZXJJdGVyYXRvcihcblx0XHRcdFx0XHRibG9jay5pbm5lckJsb2Nrcyxcblx0XHRcdFx0XHRjdXJyZW50UGFyZW50LFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnY29yZS9ibG9jaycgIT09IGJsb2NrLm5hbWUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBIYXJkY29kZSB0aGUgcmVjZWlwdCBvZiBpbnRlcm5hbCBibG9ja3MgXCJSZXVzYWJsZSBibG9ja1wiLlxuXHRcdFx0ICogVGhpcyBpcyB0aGUgb25seSB3YXkgc28gZmFyLlxuXHRcdFx0ICpcblx0XHRcdCAqIEFkZGVkIGFmdGVyIG1ham9yIHJlZmFjdG9yaW5nXG5cdFx0XHQgKiBAc2luY2UgMy4wLjRcblx0XHRcdCAqXG5cdFx0XHQgKiBJbnRyb2R1Y2VkXG5cdFx0XHQgKiBAc2luY2UgMi4xLjFcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSB7e2NsaWVudElkOiBzdHJpbmcsIGlubmVyQmxvY2tzOiBBcnJheX1bXX1cblx0XHRcdCAqL1xuXHRcdFx0bGV0IGlubmVyUmV1c2FibGUgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKT8uXG5cdFx0XHRcdF9fdW5zdGFibGVHZXRDbGllbnRJZHNUcmVlPy4oXG5cdFx0XHRcdFx0YmxvY2suY2xpZW50SWQsXG5cdFx0XHRcdCk7XG5cblx0XHRcdGlmICggISBpbm5lclJldXNhYmxlPy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaW5uZXJSZXVzYWJsZUlkcyA9IGlubmVyUmV1c2FibGUubWFwKFxuXHRcdFx0XHQoIHsgY2xpZW50SWQgfSApID0+IGNsaWVudElkLFxuXHRcdFx0KTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBXZSB1cGRhdGUgdGhpcyB2YXJpYWJsZSBiZWNhdXNlIGBfX3Vuc3RhYmxlR2V0Q2xpZW50SWRzVHJlZWBcblx0XHRcdCAqIHJldHVybnMgaW5zdWZmaWNpZW50IGluZm9ybWF0aW9uIGFib3V0IHRoZSBibG9jay5cblx0XHRcdCAqIE5hbWVseSwgdGhlIGBuYW1lYCBwcm9wZXJ0eSBpcyBtaXNzaW5nXG5cdFx0XHQgKi9cblx0XHRcdGlubmVyUmV1c2FibGUgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3NCeUNsaWVudElkKFxuXHRcdFx0XHRpbm5lclJldXNhYmxlSWRzLFxuXHRcdFx0KTtcblxuXHRcdFx0YmxvY2tzUmVjdXJzaXZlSW5uZXJJdGVyYXRvciggaW5uZXJSZXVzYWJsZSApO1xuXHRcdH0gKTtcblx0fTtcblxuXHRibG9ja3NSZWN1cnNpdmVJbm5lckl0ZXJhdG9yKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yOyIsImltcG9ydCBnZXRGb3JtRmllbGRzQmxvY2tzIGZyb20gJy4vZ2V0Rm9ybUZpZWxkc0Jsb2Nrcyc7XG5cbmZ1bmN0aW9uIGdldEF2YWlsYWJsZUZpZWxkcyggZXhjbHVkZSA9IFtdLCBjb250ZXh0ID0gJ2RlZmF1bHQnICkge1xuXHRjb25zdCBmaWVsZHMgICA9IFtdO1xuXHRjb25zdCBibG9ja3MgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCBleGNsdWRlLCBmYWxzZSwgZmFsc2UsIGNvbnRleHQgKTtcblxuXHRpZiAoIGJsb2NrcyApIHtcblx0XHRibG9ja3MuZm9yRWFjaCggaXRlbSA9PiBmaWVsZHMucHVzaCggaXRlbS5uYW1lICkgKTtcblx0fVxuXHRyZXR1cm4gZmllbGRzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBdmFpbGFibGVGaWVsZHM7IiwiaW1wb3J0IGdldEF2YWlsYWJsZUZpZWxkcyBmcm9tICcuL2dldEF2YWlsYWJsZUZpZWxkcyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyggYmxvY2tOYW1lICkge1xuXHRjb25zdCBmaWVsZHMgPSBnZXRBdmFpbGFibGVGaWVsZHMoIFsgYmxvY2tOYW1lIF0gKTtcblxuXHRjb25zdCBmaWVsZHNTdHJpbmcgPSBbXTtcblx0ZmllbGRzLmZvckVhY2goIGZ1bmN0aW9uICggaXRlbSApIHtcblx0XHRmaWVsZHNTdHJpbmcucHVzaCggJyVGSUVMRDo6JyArIGl0ZW0gKyAnJScgKTtcblx0fSApO1xuXG5cdHJldHVybiBfXyggJ0F2YWlsYWJsZSBmaWVsZHM6ICcsICdqZXQtZm9ybS1idWlsZGVyJyApICtcblx0XHRmaWVsZHNTdHJpbmcuam9pbiggJywgJyApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmc7IiwiaW1wb3J0IENvbnRyb2xzU2V0dGluZ3MgZnJvbSAnLi9Db250cm9sc1NldHRpbmdzJztcblxuZnVuY3Rpb24gZ2V0QmxvY2tDb250cm9scyggdHlwZSA9ICdhbGwnICkge1xuXHRpZiAoICF0eXBlICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRjb25zdCBjb250cm9scyA9IENvbnRyb2xzU2V0dGluZ3MoKTtcblxuXHRpZiAoICdhbGwnID09PSB0eXBlICkge1xuXHRcdHJldHVybiBjb250cm9scztcblx0fVxuXG5cdGlmICggY29udHJvbHNbIHR5cGUgXVxuXHRcdCYmIGNvbnRyb2xzWyB0eXBlIF0uYXR0cnNcblx0XHQmJiBBcnJheS5pc0FycmF5KCBjb250cm9sc1sgdHlwZSBdLmF0dHJzIClcblx0XHQmJiAwIDwgY29udHJvbHNbIHR5cGUgXS5hdHRycy5sZW5ndGhcblx0KSB7XG5cdFx0cmV0dXJuIGNvbnRyb2xzWyB0eXBlIF0uYXR0cnM7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEJsb2NrQ29udHJvbHM7IiwiaW1wb3J0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yIGZyb20gJy4vYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3InO1xuXG5mdW5jdGlvbiBnZXRCbG9ja3NCeU5hbWUoIGJsb2NrTmFtZXMgKSB7XG5cdGNvbnN0IGJsb2NrcyA9IFtdO1xuXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XG5cdFx0aWYgKCAhYmxvY2tOYW1lcy5pbmNsdWRlcyggYmxvY2submFtZSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRibG9ja3MucHVzaCggYmxvY2sgKTtcblx0fSApO1xuXG5cdHJldHVybiBibG9ja3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEJsb2Nrc0J5TmFtZTsiLCJpbXBvcnQgZ2V0SW5uZXJCbG9ja3MgZnJvbSAnLi9nZXRJbm5lckJsb2Nrcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudElubmVyQmxvY2tzKCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3Ncblx0Y29uc3QgeyAnZGF0YS1ibG9jayc6IGRhdGFCbG9jayB9ID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdHJldHVybiBnZXRJbm5lckJsb2NrcyggZGF0YUJsb2NrICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEN1cnJlbnRJbm5lckJsb2NrczsiLCJpbXBvcnQgYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IgZnJvbSAnLi9ibG9ja3NSZWN1cnNpdmVJdGVyYXRvcic7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IHdwLmhvb2tzO1xuY29uc3Qge1xuXHQgICAgICBzZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQoXG5cdHBsYWNlaG9sZGVyICAgID0gZmFsc2UsXG5cdHN1cHByZXNzRmlsdGVyID0gZmFsc2UsXG5cdGNvbnRleHQgICAgICAgID0gJ2RlZmF1bHQnLFxuKSB7XG5cblx0Y29uc3Qgc2tpcEZpZWxkcyA9IFtcblx0XHQnc3VibWl0Jyxcblx0XHQnZm9ybS1icmVhaycsXG5cdFx0J2hlYWRpbmcnLFxuXHRcdCdncm91cC1icmVhaycsXG5cdFx0J2NvbmRpdGlvbmFsJyxcblx0XTtcblx0bGV0IGZvcm1GaWVsZHMgICA9IFtdO1xuXG5cdGNvbnN0IGN1cnJlbnQgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNlbGVjdGVkQmxvY2soKTtcblxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcblx0XHRcdCYmIGN1cnJlbnQ/LmNsaWVudElkICE9PSBibG9jay5jbGllbnRJZFxuXHRcdFx0JiYgIXNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXG5cdFx0KSB7XG5cdFx0XHRjb25zdCBibG9ja1R5cGUgPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKS5cblx0XHRcdFx0Z2V0QmxvY2tUeXBlKCBibG9jay5uYW1lICk7XG5cblx0XHRcdGxldCB7IGZpZWxkczogbmV3RmllbGRzID0gW10gfSA9IGJsb2NrVHlwZS5qZmJSZXNvbHZlQmxvY2suY2FsbChcblx0XHRcdFx0YmxvY2ssXG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIGJsb2NrVHlwZS5oYXNPd25Qcm9wZXJ0eSggJ2pmYkdldEZpZWxkcycgKSApIHtcblx0XHRcdFx0bmV3RmllbGRzID0gYmxvY2tUeXBlLmpmYkdldEZpZWxkcy5jYWxsKCBibG9jaywgY29udGV4dCApO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goXG5cdFx0XHRcdC4uLm5ld0ZpZWxkcy5maWx0ZXIoIGZvcm1GaWVsZCA9PiAhZm9ybUZpZWxkcy5zb21lKFxuXHRcdFx0XHRcdCggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgPT09IGZvcm1GaWVsZC52YWx1ZSxcblx0XHRcdFx0KSApLFxuXHRcdFx0KTtcblx0XHR9XG5cdH0gKTtcblxuXHRmb3JtRmllbGRzID0gcGxhY2Vob2xkZXJcblx0ICAgICAgICAgICAgID8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxuXHQgICAgICAgICAgICAgOiBmb3JtRmllbGRzO1xuXG5cdHJldHVybiBzdXBwcmVzc0ZpbHRlciA/IGZvcm1GaWVsZHMgOiBhcHBseUZpbHRlcnMoXG5cdFx0J2pldC5mYi5nZXRGb3JtRmllbGRzQmxvY2tzJywgZm9ybUZpZWxkcywgY29udGV4dCApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGaWVsZHNXaXRob3V0Q3VycmVudDsiLCJpbXBvcnQgYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IgZnJvbSAnLi9ibG9ja3NSZWN1cnNpdmVJdGVyYXRvcic7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IHdwLmhvb2tzO1xuY29uc3Qge1xuXHQgICAgICBzZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gZ2V0Rm9ybUZpZWxkc0Jsb2Nrcyhcblx0ZXhjbHVkZSAgICAgICAgPSBbXSxcblx0cGxhY2Vob2xkZXIgICAgPSBmYWxzZSxcblx0c3VwcHJlc3NGaWx0ZXIgPSBmYWxzZSxcblx0Y29udGV4dCAgICAgICAgPSAnZGVmYXVsdCcsXG4pIHtcblx0bGV0IGZvcm1GaWVsZHMgPSBbXTtcblx0Y29uc3Qgc2tpcEZpZWxkcyA9IFtcblx0XHQnc3VibWl0Jyxcblx0XHQnZm9ybS1icmVhaycsXG5cdFx0J2hlYWRpbmcnLFxuXHRcdCdncm91cC1icmVhaycsXG5cdFx0J2NvbmRpdGlvbmFsJyxcblx0XHQuLi5leGNsdWRlLFxuXHRdO1xuXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XG5cdFx0aWYgKCBibG9jay5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxuXHRcdFx0JiYgIXNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXG5cdFx0KSB7XG5cblx0XHRcdGNvbnN0IGJsb2NrVHlwZSA9IHNlbGVjdCggJ2NvcmUvYmxvY2tzJyApLlxuXHRcdFx0XHRnZXRCbG9ja1R5cGUoIGJsb2NrLm5hbWUgKTtcblxuXHRcdFx0bGV0IHsgZmllbGRzOiBuZXdGaWVsZHMgPSBbXSB9ID0gYmxvY2tUeXBlLmpmYlJlc29sdmVCbG9jay5jYWxsKFxuXHRcdFx0XHRibG9jayxcblx0XHRcdFx0Y29udGV4dCxcblx0XHRcdCk7XG5cblx0XHRcdGlmICggYmxvY2tUeXBlLmhhc093blByb3BlcnR5KCAnamZiR2V0RmllbGRzJyApICkge1xuXHRcdFx0XHRuZXdGaWVsZHMgPSBibG9ja1R5cGUuamZiR2V0RmllbGRzLmNhbGwoIGJsb2NrLCBjb250ZXh0ICk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcm1GaWVsZHMucHVzaChcblx0XHRcdFx0Li4ubmV3RmllbGRzLmZpbHRlciggY3VycmVudCA9PiAhZm9ybUZpZWxkcy5zb21lKFxuXHRcdFx0XHRcdCggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgPT09IGN1cnJlbnQudmFsdWUsXG5cdFx0XHRcdCkgKSxcblx0XHRcdCk7XG5cdFx0fVxuXHR9ICk7XG5cblx0Zm9ybUZpZWxkcyA9IHBsYWNlaG9sZGVyXG5cdCAgICAgICAgICAgICA/IFsgeyB2YWx1ZTogJycsIGxhYmVsOiBwbGFjZWhvbGRlciB9LCAuLi5mb3JtRmllbGRzIF1cblx0ICAgICAgICAgICAgIDogZm9ybUZpZWxkcztcblxuXHRyZXR1cm4gc3VwcHJlc3NGaWx0ZXIgPyBmb3JtRmllbGRzIDogYXBwbHlGaWx0ZXJzKFxuXHRcdCdqZXQuZmIuZ2V0Rm9ybUZpZWxkc0Jsb2NrcycsIGZvcm1GaWVsZHMsIGNvbnRleHQgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rm9ybUZpZWxkc0Jsb2NrczsiLCJmdW5jdGlvbiBnZXRJbm5lckJsb2NrcyggY2xpZW50SWQgKSB7XG5cdGNvbnN0IGJsb2NrID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9jayggY2xpZW50SWQgKTtcblx0cmV0dXJuIGJsb2NrID8gYmxvY2suaW5uZXJCbG9ja3MgOiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SW5uZXJCbG9ja3M7IiwiY29uc3QgeyBnZXQgfSA9IHdpbmRvdy5fO1xuXG4vKipcbiAqIEBwYXJhbSBibG9ja1NldHRpbmdzIHtPYmplY3R9IGZyb20gYmxvY2suanNvblxuICogQHBhcmFtIHN1cHBvcnRzUGF0aCAge1N0cmluZ3xBcnJheX1cbiAqL1xuZnVuY3Rpb24gZ2V0U3VwcG9ydCggYmxvY2tTZXR0aW5ncywgc3VwcG9ydHNQYXRoICkge1xuXHRpZiAoICFBcnJheS5pc0FycmF5KCBzdXBwb3J0c1BhdGggKSApIHtcblx0XHRzdXBwb3J0c1BhdGggPSBbIHN1cHBvcnRzUGF0aCBdO1xuXHR9XG5cblx0cmV0dXJuIGdldChcblx0XHRibG9ja1NldHRpbmdzLFxuXHRcdFsgJ3N1cHBvcnRzJywgLi4uc3VwcG9ydHNQYXRoIF0sXG5cdFx0ZmFsc2UsXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN1cHBvcnQ7IiwiaW1wb3J0IHsgdXNlQmxvY2tFZGl0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IHVzZVNlbGVjdCwgdXNlRGlzcGF0Y2gsIHNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmZ1bmN0aW9uIHVzZUJsb2NrQXR0cmlidXRlcyggb3RoZXJDbGllbnRJZCA9IG51bGwgKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cdGxldCB7IGNsaWVudElkIH0gPSBibG9ja1Byb3BzO1xuXG5cdGlmICggb3RoZXJDbGllbnRJZCApIHtcblx0XHRjbGllbnRJZCA9IG90aGVyQ2xpZW50SWQ7XG5cdH1cblxuXHRjb25zdCBhdHRyaWJ1dGVzICAgICAgPSB1c2VTZWxlY3QoIHNlbGVjdFN0b3JlID0+IChcblx0XHRzZWxlY3RTdG9yZSggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrQXR0cmlidXRlcyggY2xpZW50SWQgKVxuXHQpLCBbIGNsaWVudElkIF0gKTtcblx0Y29uc3QgeyB1cGRhdGVCbG9jayB9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKTtcblxuXHQvKipcblx0ICogQHBhcmFtIHByb3BzIHtPYmplY3R8RnVuY3Rpb259XG5cdCAqL1xuXHRjb25zdCB1cGRhdGVBdHRyaWJ1dGVzID0gcHJvcHMgPT4ge1xuXHRcdHByb3BzID0gJ29iamVjdCcgPT09IHR5cGVvZiBwcm9wc1xuXHRcdCAgICAgICAgPyBwcm9wc1xuXHRcdCAgICAgICAgOiBwcm9wcyggYXR0cmlidXRlcyApO1xuXG5cdFx0cHJvcHMgPSBzZWxlY3QoICdqZXQtZm9ybXMvZmllbGRzJyApLmdldFNhbml0aXplZEF0dHJpYnV0ZXMoXG5cdFx0XHRwcm9wcyxcblx0XHRcdGJsb2NrUHJvcHMsXG5cdFx0KTtcblxuXHRcdHVwZGF0ZUJsb2NrKCBjbGllbnRJZCwgeyBhdHRyaWJ1dGVzOiBwcm9wcyB9ICk7XG5cdH07XG5cblx0cmV0dXJuIFsgYXR0cmlidXRlcywgdXBkYXRlQXR0cmlidXRlcyBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VCbG9ja0F0dHJpYnV0ZXM7IiwiaW1wb3J0IHVzZVNlbGVjdFBvc3RNZXRhIGZyb20gJy4uLy4uL2hvb2tzL3VzZVNlbGVjdFBvc3RNZXRhJztcbmltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuXG5mdW5jdGlvbiB1c2VJc0FkdmFuY2VkVmFsaWRhdGlvbigpIHtcblx0Y29uc3QgeyB0eXBlIH0gICAgICAgPSB1c2VTZWxlY3RQb3N0TWV0YSggJ19qZl92YWxpZGF0aW9uJyApO1xuXHRjb25zdCBbIGF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGlmICggYXR0cmlidXRlcy52YWxpZGF0aW9uPy50eXBlICkge1xuXHRcdHJldHVybiAnYWR2YW5jZWQnID09PSBhdHRyaWJ1dGVzLnZhbGlkYXRpb24/LnR5cGU7XG5cdH1cblxuXHRyZXR1cm4gJ2FkdmFuY2VkJyA9PT0gdHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSXNBZHZhbmNlZFZhbGlkYXRpb247IiwiaW1wb3J0IHsgdXNlUmVxdWVzdEZpZWxkcyB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlQmxvY2tFZGl0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3QgYWN0aW9uVHlwZXNNYXAgPSB7fTtcblxuZm9yICggY29uc3QgeyBpZCwgbmFtZSB9IG9mIHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMgKSB7XG5cdGFjdGlvblR5cGVzTWFwWyBpZCBdID0gbmFtZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIHVzZUlzVW5pcXVlRmllbGROYW1lKCkge1xuXHRjb25zdCB7IGNsaWVudElkIH0gPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cdGNvbnN0IGFjdGlvbkZpZWxkcyA9IHVzZVJlcXVlc3RGaWVsZHMoXG5cdFx0eyByZXR1cm5PbkVtcHR5Q3VycmVudEFjdGlvbjogZmFsc2UgfSxcblx0KTtcblxuXHRjb25zdCB7IGluRm9ybUZpZWxkcywgaGFzUGFyZW50LCBmaWVsZE5hbWVzIH0gPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnRCbG9jayA9IHNlbGVjdCggJ2pldC1mb3Jtcy9maWVsZHMnICkuXG5cdFx0XHRcdGdldEJsb2NrQnlJZCggY2xpZW50SWQgKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aGFzUGFyZW50OiAhIWN1cnJlbnRCbG9jaz8ucGFyZW50QmxvY2ssXG5cdFx0XHRcdGZpZWxkTmFtZXM6IGN1cnJlbnRCbG9jaz8uZmllbGRzPy5tYXA/Lihcblx0XHRcdFx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlICkgPz8gW10sXG5cdFx0XHRcdGluRm9ybUZpZWxkczogc2VsZWN0KCAnamV0LWZvcm1zL2ZpZWxkcycgKS5cblx0XHRcdFx0XHRpc1VuaXF1ZU5hbWUoIGNsaWVudElkICksXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0WyBjbGllbnRJZCBdLFxuXHQpO1xuXG5cdGlmICggIWluRm9ybUZpZWxkcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZXJyb3I6ICdub3RfdW5pcXVlX2luX2ZpZWxkcycsXG5cdFx0XHRtZXNzYWdlOiBfXyhcblx0XHRcdFx0J1RoZSBmb3JtIGZpZWxkIG5hbWUgbXVzdCBiZSB1bmlxdWUuIFBsZWFzZSBjaGFuZ2UgaXQnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpLFxuXHRcdH07XG5cdH1cblxuXHRpZiAoIGhhc1BhcmVudCApIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRjb25zdCBjb21wdXRlZCA9IGFjdGlvbkZpZWxkcy5maW5kKFxuXHRcdCggeyB2YWx1ZSB9ICkgPT4gZmllbGROYW1lcy5pbmNsdWRlcyggdmFsdWUgKSApO1xuXG5cdGlmICggIWNvbXB1dGVkICkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXJyb3I6ICdub3RfdW5pcXVlX2luX2FjdGlvbnMnLFxuXHRcdG1lc3NhZ2U6IGNvbXB1dGVkPy5mcm9tXG5cdFx0ICAgICAgICAgPyBzcHJpbnRmKFxuXHRcdFx0XHRcdCAvLyB0cmFuc2xhdG9yczogJXMgLSBhY3Rpb24gbmFtZVxuXHRcdFx0XHRfXyhcblx0XHRcdFx0XHRgVGhlICVzIGFjdGlvbiBhbHJlYWR5IHVzZXMgdGhpcyBmaWVsZCBuYW1lLiBQbGVhc2UgY2hhbmdlIGl0YCxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCksXG5cdFx0XHRcdGFjdGlvblR5cGVzTWFwWyBjb21wdXRlZC5mcm9tIF0sXG5cdFx0XHQpXG5cblx0XHQgICAgICAgICA6IF9fKFxuXHRcdFx0XHQnVGhlIGZvcm0gZmllbGQgbmFtZSBtdXN0IGJlIHVuaXF1ZS4gUGxlYXNlIGNoYW5nZSBpdCcsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUlzVW5pcXVlRmllbGROYW1lOyIsImltcG9ydCBTY29wZWRBdHRyaWJ1dGVzQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L1Njb3BlZEF0dHJpYnV0ZXNDb250ZXh0JztcblxuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbi8qKlxuICogQHJldHVybiB7e1xuICogYXR0cmlidXRlczogT2JqZWN0LFxuICogc2V0QXR0cmlidXRlczogRnVuY3Rpb24sXG4gKiByZWFsQXR0cmlidXRlczogT2JqZWN0LFxuICogc2V0UmVhbEF0dHJpYnV0ZXM6IEZ1bmN0aW9uLFxuICogfX1cbiAqL1xuZnVuY3Rpb24gdXNlU2NvcGVkQXR0cmlidXRlc0NvbnRleHQoKSB7XG5cdHJldHVybiB1c2VDb250ZXh0KCBTY29wZWRBdHRyaWJ1dGVzQ29udGV4dCApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTY29wZWRBdHRyaWJ1dGVzQ29udGV4dDsiLCJjb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHsgZ2V0IH0gPSB3aW5kb3cuXztcblxuZnVuY3Rpb24gdXNlU3VwcG9ydCggc3VwcG9ydE5hbWUgKSB7XG5cdGNvbnN0IHsgbmFtZSB9ID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXG5cdHJldHVybiB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHtcblx0XHRcdGNvbnN0IGJsb2NrVHlwZSA9IHNlbGVjdCggJ2NvcmUvYmxvY2tzJyApLmdldEJsb2NrVHlwZSggbmFtZSApO1xuXG5cdFx0XHRyZXR1cm4gZ2V0KCBibG9ja1R5cGUsIFsgJ3N1cHBvcnRzJywgc3VwcG9ydE5hbWUgXSwgZmFsc2UgKTtcblx0XHR9LFxuXHRcdFsgbmFtZSwgc3VwcG9ydE5hbWUgXSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU3VwcG9ydDsiLCJjb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmZ1bmN0aW9uIHVzZVVuaXFLZXkoKSB7XG5cdGNvbnN0IHsgY2xpZW50SWQgfSA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcblxuXHRyZXR1cm4gc2x1ZyA9PiAoXG5cdFx0c2x1ZyArICctJyArIGNsaWVudElkXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVuaXFLZXk7IiwiaW1wb3J0IHsgc3RvcmVOYW1lIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlRWZmZWN0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZnVuY3Rpb24gdXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlKCBjdXN0b21DaGFuZ2VOYW1lcyA9IG51bGwgKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgICAgID0gdXNlQmxvY2tQcm9wcygpO1xuXHRjb25zdCBbICwgc2V0QXR0cnMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IGNsaWVudElkID0gYmxvY2tQcm9wc1sgJ2RhdGEtYmxvY2snIF07XG5cblx0Y29uc3QgbmFtZXMgPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHtcblx0XHRcdGNvbnN0IGlzSnVzdCA9IHNlbGVjdCggc3RvcmVOYW1lICkuaXNSZWNlbnRseUFkZGVkKCBjbGllbnRJZCApO1xuXG5cdFx0XHRpZiAoICFpc0p1c3QgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHQgICAgICBoYXNDaGFuZ2VkLFxuXHRcdFx0XHQgICAgICBuYW1lczogdW5pcXVlTmFtZXMsXG5cdFx0XHQgICAgICB9ID0gc2VsZWN0KCBzdG9yZU5hbWUgKS5nZXRVbmlxdWVOYW1lcyggY2xpZW50SWQgKTtcblxuXHRcdFx0cmV0dXJuIGhhc0NoYW5nZWQgPyB1bmlxdWVOYW1lcyA6IGZhbHNlO1xuXHRcdH0sXG5cdFx0WyBjbGllbnRJZCBdLFxuXHQpO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggIW5hbWVzICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1c3RvbUNoYW5nZU5hbWVzICkge1xuXHRcdFx0Y3VzdG9tQ2hhbmdlTmFtZXMoIG5hbWVzICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZXRBdHRycygge1xuXHRcdFx0bmFtZTogbmFtZXMuc3BsaXQoICd8JyApWyAwIF0sXG5cdFx0fSApO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgWyBuYW1lcyBdICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVuaXF1ZU5hbWVPbkR1cGxpY2F0ZTsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBnZXRQcmVwYXJlZEJsb2NrcyBmcm9tICcuL2dldFByZXBhcmVkQmxvY2tzJztcbmltcG9ydCB7IHN0b3JlTmFtZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcblx0ICAgICAgZGlzcGF0Y2gsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRCbG9ja3MoIGFjdGlvbiA9IG51bGwgKSB7XG5cdFx0aWYgKCBudWxsID09PSBhY3Rpb24gKSB7XG5cdFx0XHRhY3Rpb24gPSBnZXRQcmVwYXJlZEJsb2NrcygpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhhc0V4ZWN1dGVkID0gc2VsZWN0KCBzdG9yZU5hbWUgKS5pc0V4ZWN1dGVkKCk7XG5cblx0XHRpZiAoICFoYXNFeGVjdXRlZCApIHtcblx0XHRcdGRpc3BhdGNoKCBzdG9yZU5hbWUgKS50b2dnbGVFeGVjdXRlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGhhc0V4ZWN1dGVkID8gY29uc3RhbnRzLnNldEJsb2NrcyA6IGNvbnN0YW50cy5zZXRCbG9ja3NGaXJzdCxcblx0XHRcdGJsb2NrczogYWN0aW9uLmJsb2Nrcyxcblx0XHRcdGJsb2NrTWFwOiBhY3Rpb24uYmxvY2tNYXAsXG5cdFx0fTtcblx0fSxcblx0dG9nZ2xlRXhlY3V0ZSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnRvZ2dsZUV4ZWN1dGUsXG5cdFx0fTtcblx0fSxcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRCbG9ja3M6ICdTRVRfQkxPQ0tTJyxcblx0c2V0QmxvY2tzRmlyc3Q6ICdTRVRfQkxPQ0tTX0ZJUlNUJyxcblx0dG9nZ2xlRXhlY3V0ZTogJ1RPR0dMRV9FWEVDVVRFJyxcbn07XG5cblxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IGRpc3BhdGNoZXJzID0ge1xuXHRbIGNvbnN0YW50cy5zZXRCbG9ja3MgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRjb25zdCByZWNlbnRseUFkZGVkID0gW107XG5cblx0XHRmb3IgKCBjb25zdCBibG9ja01hcEtleSBpbiBhY3Rpb24uYmxvY2tNYXAgKSB7XG5cdFx0XHRpZiAoICFhY3Rpb24uYmxvY2tNYXAuaGFzT3duUHJvcGVydHkoIGJsb2NrTWFwS2V5ICkgfHxcblx0XHRcdFx0c3RhdGUuYmxvY2tNYXAuaGFzT3duUHJvcGVydHkoIGJsb2NrTWFwS2V5IClcblx0XHRcdCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJlY2VudGx5QWRkZWQucHVzaCggYmxvY2tNYXBLZXkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRibG9ja3M6IGFjdGlvbi5ibG9ja3MsXG5cdFx0XHRibG9ja01hcDogYWN0aW9uLmJsb2NrTWFwLFxuXHRcdFx0cmVjZW50bHlBZGRlZCxcblx0XHR9O1xuXHR9LFxuXHRbIGNvbnN0YW50cy5zZXRCbG9ja3NGaXJzdCBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGJsb2NrczogYWN0aW9uLmJsb2Nrcyxcblx0XHRcdGJsb2NrTWFwOiBhY3Rpb24uYmxvY2tNYXAsXG5cdFx0fTtcblx0fSxcblx0WyBjb25zdGFudHMudG9nZ2xlRXhlY3V0ZSBdKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRleGVjdXRlZDogdHJ1ZSxcblx0XHR9O1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5kaXNwYXRjaGVycyxcbn07IiwiaW1wb3J0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yIGZyb20gJy4uL2hlbHBlcnMvYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3InO1xuY29uc3Qge1xuXHQgICAgICBzZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gZ2V0UHJlcGFyZWRCbG9ja3MoKSB7XG5cdGNvbnN0IGJsb2NrcyAgID0gW107XG5cdGNvbnN0IGJsb2NrTWFwID0ge307XG5cblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoICggYmxvY2ssIHBhcmVudCApID0+IHtcblx0XHRpZiAoICFibG9jaz8ubmFtZT8uaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGJsb2NrVHlwZSA9IHNlbGVjdCggJ2NvcmUvYmxvY2tzJyApLmdldEJsb2NrVHlwZSggYmxvY2submFtZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgICA9IGJsb2NrVHlwZS5qZmJSZXNvbHZlQmxvY2suY2FsbCggYmxvY2sgKTtcblxuXHRcdC8vIGRlcHJlY2F0ZWQgc2luY2UgMy4yLjBcblx0XHRpZiAoIGJsb2NrVHlwZS5oYXNPd25Qcm9wZXJ0eSggJ2pmYkdldEZpZWxkcycgKSApIHtcblx0XHRcdGN1cnJlbnQuZmllbGRzICA9IGJsb2NrVHlwZS5qZmJHZXRGaWVsZHMuY2FsbCggYmxvY2sgKTtcblx0XHR9XG5cblx0XHRpZiAoICFwYXJlbnQ/Lm5hbWUgKSB7XG5cdFx0XHRibG9ja3MucHVzaCggY3VycmVudCApO1xuXHRcdFx0YmxvY2tNYXBbIGN1cnJlbnQuY2xpZW50SWQgXSA9IGN1cnJlbnQ7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdGNvbnN0IHBhcmVudEZpZWxkID0gYmxvY2tNYXBbIHBhcmVudD8uY2xpZW50SWQgXSA/PyBmYWxzZTtcblxuXHRcdGlmICggIXBhcmVudEZpZWxkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggY3VycmVudCwgJ3BhcmVudEJsb2NrJywge1xuXHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gcGFyZW50RmllbGQ7XG5cdFx0XHR9LFxuXHRcdH0gKTtcblxuXHRcdHBhcmVudEZpZWxkLmlubmVyQmxvY2tzID0gcGFyZW50RmllbGQ/LmlubmVyQmxvY2tzIHx8IFtdO1xuXHRcdHBhcmVudEZpZWxkLmlubmVyQmxvY2tzLnB1c2goIGN1cnJlbnQgKTtcblxuXHRcdGJsb2NrTWFwWyBjdXJyZW50LmNsaWVudElkIF0gPSBjdXJyZW50O1xuXHR9ICk7XG5cblx0cmV0dXJuIHsgYmxvY2tzLCBibG9ja01hcCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRQcmVwYXJlZEJsb2NrczsiLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IGdldFByZXBhcmVkQmxvY2tzIGZyb20gJy4vZ2V0UHJlcGFyZWRCbG9ja3MnO1xuXG5jb25zdCB7XG5cdCAgICAgIGNyZWF0ZVJlZHV4U3RvcmUsXG5cdCAgICAgIGRpc3BhdGNoLFxuXHQgICAgICBzZWxlY3QsXG5cdCAgICAgIHN1YnNjcmliZSxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5leHBvcnQgY29uc3Qgc3RvcmVOYW1lID0gJ2pldC1mb3Jtcy9maWVsZHMnO1xuXG5sZXQgcHJldkJsb2NrQ291bnQ7XG5sZXQgcHJldkJsb2NrQXR0cnM7XG5cbnN1YnNjcmliZSggKCkgPT4ge1xuXHRjb25zdCB7IGRlYm91bmNlIH0gID0gd2luZG93Ll87XG5cdGNvbnN0IHsgc2V0QmxvY2tzIH0gPSBkaXNwYXRjaCggc3RvcmVOYW1lICk7XG5cblx0Y29uc3QgcmVzZXRCbG9ja3MgPSBkZWJvdW5jZSggKCkgPT4ge1xuXHRcdGNvbnN0IGNvdW50QmxvY2tzID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0R2xvYmFsQmxvY2tDb3VudCgpO1xuXG5cdFx0aWYgKCBwcmV2QmxvY2tDb3VudCAhPT0gY291bnRCbG9ja3MgKSB7XG5cdFx0XHRwcmV2QmxvY2tDb3VudCA9IGNvdW50QmxvY2tzO1xuXHRcdFx0c2V0QmxvY2tzKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhY3Rpb24gICAgPSBnZXRQcmVwYXJlZEJsb2NrcygpO1xuXHRcdGNvbnN0IGpzb25BdHRycyA9IEpTT04uc3RyaW5naWZ5KCBhY3Rpb24uYmxvY2tzICk7XG5cblx0XHRpZiAoIGpzb25BdHRycyA9PT0gcHJldkJsb2NrQXR0cnMgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cHJldkJsb2NrQXR0cnMgPSBqc29uQXR0cnM7XG5cdFx0c2V0QmxvY2tzKCBhY3Rpb24gKTtcblx0fSwgMTAwICk7XG5cblx0cmVzZXRCbG9ja3MoKTtcbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdXhTdG9yZSggc3RvcmVOYW1lLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9ycyxcbn0gKTtcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcblx0YmxvY2tzOiBbXSxcblx0YmxvY2tNYXA6IHt9LFxuXHRleGVjdXRlZDogZmFsc2UsXG5cdHJlY2VudGx5QWRkZWQ6IFtdLFxuXHRzYW5pdGl6ZXJzOiB7XG5cdFx0bmFtZTogW1xuXHRcdFx0bmFtZSA9PiBuYW1lLnJlcGxhY2UoIC9bXlxcd1xcLV0vZ2ksICcnICksXG5cdFx0XHRuYW1lID0+IG5hbWUgPT09ICdjaGlsZHJlbicgPyAnXycgKyBuYW1lIDogbmFtZSxcblx0XHRdLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCBzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIGFjdGlvbiApIHtcblx0Y29uc3QgY2FsbGJhY2sgPSBkaXNwYXRjaGVyc1sgYWN0aW9uPy50eXBlIF07XG5cblx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gY2FsbGJhY2soIHN0YXRlLCBhY3Rpb24gKTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn0iLCJjb25zdCBzZWxlY3RvcnMgPSB7XG5cdGdldEJsb2Nrcyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmJsb2Nrcztcblx0fSxcblx0Z2V0QmxvY2tNYXAoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5ibG9ja01hcDtcblx0fSxcblx0Z2V0RmllbGRzKFxuXHRcdHN0YXRlLFxuXHRcdHtcblx0XHRcdHdpdGhJbm5lciA9IHRydWUsXG5cdFx0XHRjdXJyZW50SWQgPSBmYWxzZSxcblx0XHR9LFxuXHQpIHtcblx0XHRjb25zdCBmaWVsZHMgPSBbXTtcblxuXHRcdGNvbnN0IGl0ZXJhdGVGaWVsZHMgPSBibG9ja3MgPT4ge1xuXHRcdFx0Zm9yICggY29uc3QgYmxvY2sgb2YgYmxvY2tzICkge1xuXHRcdFx0XHRpZiAoIGJsb2NrLmZpZWxkcz8ubGVuZ3RoICYmIGJsb2NrLmNsaWVudElkICE9PSBjdXJyZW50SWQgKSB7XG5cdFx0XHRcdFx0ZmllbGRzLnB1c2goIC4uLmJsb2NrLmZpZWxkcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAhd2l0aElubmVyIHx8ICFibG9jay5pbm5lckJsb2Nrcz8ubGVuZ3RoICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aXRlcmF0ZUZpZWxkcyggYmxvY2suaW5uZXJCbG9ja3MgKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aXRlcmF0ZUZpZWxkcyggc3RhdGUuYmxvY2tzICk7XG5cblx0XHRyZXR1cm4gZmllbGRzO1xuXHR9LFxuXHRpc0V4ZWN1dGVkKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuZXhlY3V0ZWQ7XG5cdH0sXG5cdGlzUmVjZW50bHlBZGRlZCggc3RhdGUsIGNsaWVudElkICkge1xuXHRcdHJldHVybiAtMSAhPT0gc3RhdGUucmVjZW50bHlBZGRlZC5pbmRleE9mKCBjbGllbnRJZCApO1xuXHR9LFxuXHRnZXRVbmlxdWVOYW1lcyggc3RhdGUsIGNsaWVudElkICkge1xuXHRcdGNvbnN0IGN1cnJlbnRCbG9jayA9IHN0YXRlLmJsb2NrTWFwWyBjbGllbnRJZCBdID8/IGZhbHNlO1xuXG5cdFx0aWYgKCAhY3VycmVudEJsb2NrICkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aGFzQ2hhbmdlZDogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGxldCBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRjb25zdCBuYW1lcyA9IGN1cnJlbnRCbG9jaz8uZmllbGRzPy5tYXA/LiggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApID8/XG5cdFx0XHRbXTtcblx0XHRjb25zdCBzY29wZSA9IGN1cnJlbnRCbG9jay5oYXNPd25Qcm9wZXJ0eSggJ3BhcmVudEJsb2NrJyApXG5cdFx0ICAgICAgICAgICAgICA/IGN1cnJlbnRCbG9jay5wYXJlbnRCbG9jay5pbm5lckJsb2Nrc1xuXHRcdCAgICAgICAgICAgICAgOiBzdGF0ZS5ibG9ja3M7XG5cblx0XHRjb25zdCB3YWxrZXJGaWVsZHMgPSAoIGZpZWxkcyApID0+IHtcblx0XHRcdGZvciAoIGNvbnN0IGZpZWxkIG9mIGZpZWxkcyApIHtcblx0XHRcdFx0Y29uc3QgbmFtZUluZGV4ID0gbmFtZXMuaW5kZXhPZiggZmllbGQudmFsdWUgKTtcblxuXHRcdFx0XHRpZiAoIC0xID09PSBuYW1lSW5kZXggKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICdmaWVsZF9uYW1lJyA9PT0gZmllbGQudmFsdWUgKSB7XG5cdFx0XHRcdFx0aGFzQ2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRuYW1lc1sgbmFtZUluZGV4IF0gPSBgJHsgbmFtZXNbIG5hbWVJbmRleCBdIH1fY29weWA7XG5cdFx0XHRcdGhhc0NoYW5nZWQgICAgICAgICA9IHRydWU7XG5cdFx0XHRcdHdhbGtlckZpZWxkcyggZmllbGRzICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZvciAoIGNvbnN0IGJsb2NrIG9mIHNjb3BlICkge1xuXHRcdFx0aWYgKCBjbGllbnRJZCA9PT0gYmxvY2suY2xpZW50SWQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0d2Fsa2VyRmllbGRzKCBibG9jaz8uZmllbGRzID8/IFtdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGhhc0NoYW5nZWQsXG5cdFx0XHRuYW1lczogbmFtZXMuam9pbiggJ3wnICksXG5cdFx0fTtcblx0fSxcblx0Z2V0U2FuaXRpemVkQXR0cmlidXRlcyggc3RhdGUsIGF0dHJzLCB7IG5hbWU6IHR5cGUgfSA9IHt9ICkge1xuXHRcdGZvciAoIGNvbnN0IGF0dHJzS2V5IGluIGF0dHJzICkge1xuXHRcdFx0aWYgKCAhYXR0cnMuaGFzT3duUHJvcGVydHkoIGF0dHJzS2V5ICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzYW5pdGl6ZXJzID0gKFxuXHRcdFx0XHRzdGF0ZS5zYW5pdGl6ZXJzPy5bIHR5cGUgXT8uWyBhdHRyc0tleSBdID8/XG5cdFx0XHRcdHN0YXRlLnNhbml0aXplcnM/LlsgYXR0cnNLZXkgXSA/P1xuXHRcdFx0XHRmYWxzZVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCAhc2FuaXRpemVycz8ubGVuZ3RoICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICggY29uc3Qgc2FuaXRpemVyIG9mIHNhbml0aXplcnMgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2Ygc2FuaXRpemVyICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF0dHJzWyBhdHRyc0tleSBdID0gc2FuaXRpemVyKCBhdHRyc1sgYXR0cnNLZXkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBhdHRycztcblx0fSxcblx0aXNVbmlxdWVOYW1lKCBzdGF0ZSwgY2xpZW50SWQgKSB7XG5cdFx0Y29uc3QgeyBoYXNDaGFuZ2VkIH0gPSBzZWxlY3RvcnMuZ2V0VW5pcXVlTmFtZXMoIHN0YXRlLCBjbGllbnRJZCApO1xuXG5cdFx0cmV0dXJuICFoYXNDaGFuZ2VkO1xuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMS4wXG5cdCAqXG5cdCAqIEBwYXJhbSAgc3RhdGVcblx0ICogQHBhcmFtICBibG9ja0lkIHtTdHJpbmd9IEJsb2NrIGNsaWVudElkIG9yIG5hbWVcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGdldEJsb2NrKCBzdGF0ZSwgYmxvY2tJZCApIHtcblx0XHRyZXR1cm4gc3RhdGUuYmxvY2tzLmZpbmQoICggeyBuYW1lLCBjbGllbnRJZCB9ICkgPT4gKFxuXHRcdFx0WyBuYW1lLCBjbGllbnRJZCBdLmluY2x1ZGVzKCBibG9ja0lkIClcblx0XHQpICk7XG5cdH0sXG5cdGdldEJsb2NrQnlOYW1lKCBzdGF0ZSwgZmllbGROYW1lICkge1xuXHRcdGlmICggIWZpZWxkTmFtZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpdGVyYXRlRmllbGRzID0gYmxvY2tzID0+IHtcblx0XHRcdGZvciAoIGNvbnN0IGJsb2NrIG9mIGJsb2NrcyApIHtcblx0XHRcdFx0aWYgKCBibG9jay5maWVsZHMuc29tZShcblx0XHRcdFx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSBmaWVsZE5hbWUsXG5cdFx0XHRcdCkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGJsb2NrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAhYmxvY2suaW5uZXJCbG9ja3M/Lmxlbmd0aCApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGl0ZXJhdGVGaWVsZHMoIGJsb2NrLmlubmVyQmxvY2tzICk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGl0ZXJhdGVGaWVsZHMoIHN0YXRlLmJsb2NrcyApO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRnZXRCbG9ja05hbWVCeU5hbWUoIHN0YXRlLCBmaWVsZE5hbWUgKSB7XG5cdFx0Y29uc3QgYmxvY2sgPSBzZWxlY3RvcnMuZ2V0QmxvY2tCeU5hbWUoIHN0YXRlLCBmaWVsZE5hbWUgKTtcblxuXHRcdHJldHVybiBibG9jaz8ubmFtZSA/PyAnJztcblx0fSxcblx0Z2V0QmxvY2tCeUlkKCBzdGF0ZSwgY2xpZW50SWQgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmJsb2NrTWFwWyBjbGllbnRJZCBdID8/IGZhbHNlO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5zZWxlY3RvcnMsXG59OyIsImltcG9ydCBQcmVzZXRCdXR0b24gZnJvbSAnLi4vcHJlc2V0L2NvbXBvbmVudHMvUHJlc2V0QnV0dG9uJztcbmltcG9ydCBNYWNyb3NGaWVsZHMgZnJvbSAnLi4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0ZpZWxkcyc7XG5pbXBvcnQgQmFzZUxhYmVsIGZyb20gJy4vQmFzZUxhYmVsJztcblxuY29uc3Qge1xuXHQgICAgICBGbGV4SXRlbSxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICB1c2VJbnN0YW5jZUlkLFxuICAgICAgfSA9IHdwLmNvbXBvc2U7XG5cbmZ1bmN0aW9uIEFkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCgge1xuXHRjaGlsZHJlbixcblx0dmFsdWUsXG5cdGxhYmVsLFxuXHRvbkNoYW5nZVByZXNldCA9IGZhbHNlLFxuXHRvbkNoYW5nZU1hY3JvcyA9IGZhbHNlLFxufSApIHtcblxuXHRjb25zdCBpbnN0YW5jZUlkID0gdXNlSW5zdGFuY2VJZCggRmxleEl0ZW0sXG5cdFx0J2pmYi1BZHZhbmNlZEluc3BlY3RvckNvbnRyb2wnICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PEJhc2VMYWJlbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRodG1sRm9yPXsgaW5zdGFuY2VJZCB9XG5cdFx0PlxuXHRcdFx0eyBmYWxzZSAhPT0gb25DaGFuZ2VQcmVzZXQgJiYgPFByZXNldEJ1dHRvblxuXHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBvbkNoYW5nZVByZXNldCB9XG5cdFx0XHQvPiB9XG5cdFx0XHR7IGZhbHNlICE9PSBvbkNoYW5nZU1hY3JvcyAmJiA8TWFjcm9zRmllbGRzXG5cdFx0XHRcdG9uQ2xpY2s9eyBvbkNoYW5nZU1hY3JvcyB9XG5cdFx0XHQvPiB9XG5cdFx0PC9CYXNlTGFiZWw+XG5cdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW5cblx0XHQgID8gY2hpbGRyZW4oIHsgaW5zdGFuY2VJZCB9IClcblx0XHQgIDogY2hpbGRyZW5cblx0XHR9XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRJbnNwZWN0b3JDb250cm9sOyIsImltcG9ydCBQcmVzZXRCdXR0b24gZnJvbSAnLi4vcHJlc2V0L2NvbXBvbmVudHMvUHJlc2V0QnV0dG9uJztcbmltcG9ydCBNYWNyb3NGaWVsZHMgZnJvbSAnLi4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0ZpZWxkcyc7XG5pbXBvcnQgeyBGbGV4LCBGbGV4SXRlbSB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VJbnN0YW5jZUlkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuZnVuY3Rpb24gQWR2YW5jZWRNb2RhbENvbnRyb2woIHtcblx0Y2hpbGRyZW4sXG5cdHZhbHVlLFxuXHRsYWJlbCxcblx0b25DaGFuZ2VQcmVzZXQgPSBmYWxzZSxcblx0b25DaGFuZ2VNYWNyb3MgPSBmYWxzZSxcblx0bWFjcm9XaXRoQ3VycmVudCA9IGZhbHNlLFxufSApIHtcblxuXHRjb25zdCBpbnN0YW5jZUlkID0gdXNlSW5zdGFuY2VJZCggRmxleEl0ZW0sICdqZmItQWR2YW5jZWRNb2RhbENvbnRyb2wnICk7XG5cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sJyB9PlxuXHRcdDxGbGV4XG5cdFx0XHRhbGlnbj17ICdmbGV4LXN0YXJ0JyB9XG5cdFx0XHRjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkJyB9XG5cdFx0PlxuXHRcdFx0PEZsZXhJdGVtIGlzQmxvY2s+XG5cdFx0XHRcdDxGbGV4XG5cdFx0XHRcdFx0YWxpZ249eyAnY2VudGVyJyB9XG5cdFx0XHRcdFx0anVzdGlmeT17ICdmbGV4LXN0YXJ0JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bGFiZWxcblx0XHRcdFx0XHRcdGh0bWxGb3I9eyBpbnN0YW5jZUlkIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZmIgbGFiZWwnIH1cblx0XHRcdFx0XHQ+eyBsYWJlbCB9PC9sYWJlbD5cblx0XHRcdFx0XHR7IGZhbHNlICE9PSBvbkNoYW5nZVByZXNldCAmJiA8UHJlc2V0QnV0dG9uXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2VQcmVzZXQgfVxuXHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHR7IGZhbHNlICE9PSBvbkNoYW5nZU1hY3JvcyAmJiA8TWFjcm9zRmllbGRzXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgb25DaGFuZ2VNYWNyb3MgfVxuXHRcdFx0XHRcdFx0d2l0aEN1cnJlbnQ9eyBtYWNyb1dpdGhDdXJyZW50IH1cblx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdDwvRmxleD5cblx0XHRcdDwvRmxleEl0ZW0+XG5cdFx0XHQ8RmxleEl0ZW0gaXNCbG9jayBzdHlsZT17IHsgZmxleDogMywgbWFyZ2luTGVmdDogJ3Vuc2V0JyB9IH0+XG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuXG5cdFx0XHRcdCAgPyBjaGlsZHJlbiggeyBpbnN0YW5jZUlkIH0gKVxuXHRcdFx0XHQgIDogY2hpbGRyZW5cblx0XHRcdFx0fVxuXHRcdFx0PC9GbGV4SXRlbT5cblx0XHQ8L0ZsZXg+XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRNb2RhbENvbnRyb2w7IiwiZnVuY3Rpb24gQmFzZUhlbHAoIHtcblx0Y2hpbGRyZW4sXG5cdGNsYXNzTmFtZSA9ICcnLFxuXHRzdHlsZSA9IHt9LFxuXHQuLi5wcm9wc1xufSApIHtcblx0cmV0dXJuIDxwXG5cdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYi1iYXNlLWNvbnRyb2xfX2hlbHAnICsgKFxuXHRcdFx0Y2xhc3NOYW1lID8gYCAkeyBjbGFzc05hbWUgfWAgOiAnJ1xuXHRcdCkgfVxuXHRcdHN0eWxlPXsge1xuXHRcdFx0Zm9udFNpemU6ICcxMnB4Jyxcblx0XHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXG5cdFx0XHRjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXG5cdFx0XHRtYXJnaW5Ub3A6ICcwcHgnLFxuXHRcdFx0Li4uc3R5bGUsXG5cdFx0fSB9XG5cdFx0eyAuLi5wcm9wcyB9XG5cdD5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9wPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUhlbHA7IiwiY29uc3Qge1xuXHQgICAgICBGbGV4LFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJhc2VMYWJlbCggeyBsYWJlbCwgY2hpbGRyZW4sIC4uLnByb3BzIH0gKSB7XG5cdHJldHVybiA8RmxleFxuXHRcdGFsaWduPXsgJ2NlbnRlcicgfVxuXHRcdGp1c3RpZnk9eyAnZmxleC1zdGFydCcgfVxuXHRcdHN0eWxlPXsge1xuXHRcdFx0bWFyZ2luQm90dG9tOiAnOHB4Jyxcblx0XHR9IH1cblx0PlxuXHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqL31cblx0XHQ8bGFiZWxcblx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZmIgbGFiZWwnIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdD5cblx0XHRcdHsgbGFiZWwgfVxuXHRcdDwvbGFiZWw+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvRmxleD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VMYWJlbDsiLCJmdW5jdGlvbiBDb250YWluZXJzTGlzdCggeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSApIHtcblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9eyAnamV0LWZiIGZsZXggZmxleC1kaXItY29sdW1uIGdhcC1kZWZhdWx0JyB9XG5cdFx0c3R5bGU9eyB7XG5cdFx0XHRtYXJnaW5Cb3R0b206ICcxZW0nLFxuXHRcdH0gfVxuXHRcdHsgLi4ucHJvcHMgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyc0xpc3Q7IiwiZnVuY3Rpb24gRGV0YWlsc0NvbnRhaW5lciggeyBjaGlsZHJlbiB9ICkge1xuXHRyZXR1cm4gPGRpdlxuXHRcdGNsYXNzTmFtZT17IFtcblx0XHRcdCdqZXQtZmInLFxuXHRcdFx0J2ZsZXgnLFxuXHRcdFx0J2ZsZXgtZGlyLWNvbHVtbicsXG5cdFx0XHQnY29udGFpbmVyJyxcblx0XHRcdCdnYXAtMWVtJyxcblx0XHRdLmpvaW4oICcgJyApIH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNDb250YWluZXI7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vdG9vbHMnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuXG5jb25zdCBTdHlsZWRTZWxlY3QgPSBzdHlsZWQuc2VsZWN0YFxuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG5gO1xuXG5mdW5jdGlvbiBHcm91cGVkU2VsZWN0Q29udHJvbCgge1xuXHRpZCxcblx0bGFiZWwsXG5cdG9uQ2hhbmdlLFxuXHRvcHRpb25zID0gW10sXG5cdHZhbHVlLFxufSApIHtcblx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggZXZlbnQgKSA9PiB7XG5cdFx0b25DaGFuZ2UoIGV2ZW50LnRhcmdldC52YWx1ZSApO1xuXHR9O1xuXG5cdC8vIERpc2FibGUgcmVhc29uOiBBIHNlbGVjdCB3aXRoIGFuIG9uY2hhbmdlIHRocm93cyBhIHdhcm5pbmdcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRyZXR1cm4gIWlzRW1wdHkoIG9wdGlvbnMgKSAmJiAoXG5cdFx0PFN0eWxlZFNlbGVjdFxuXHRcdFx0aWQ9eyBpZCB9XG5cdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLXNlbGVjdC1jb250cm9sX19pbnB1dFwiXG5cdFx0XHRvbkNoYW5nZT17IG9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0PlxuXHRcdFx0PG9wdGlvblxuXHRcdFx0XHRrZXk9eyBgJHsgbGFiZWwgfS1wbGFjZWhvbGRlcmAgfVxuXHRcdFx0XHR2YWx1ZT17IGBgIH1cblx0XHRcdD57IGAtLWAgfTwvb3B0aW9uPlxuXHRcdFx0eyBvcHRpb25zLm1hcCggKCBvcHRHcm91cCwgZ3JvdXBJbmRleCApID0+IHtcblx0XHRcdFx0cmV0dXJuICFpc0VtcHR5KCBvcHRHcm91cC52YWx1ZXMgKSAmJiA8b3B0Z3JvdXBcblx0XHRcdFx0XHRrZXk9eyBgJHsgb3B0R3JvdXAubGFiZWwgfS0keyBncm91cEluZGV4IH1gIH1cblx0XHRcdFx0XHRsYWJlbD17IG9wdEdyb3VwLmxhYmVsIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgb3B0R3JvdXAudmFsdWVzLm1hcCggKCBvcHRpb24sIGluZGV4ICkgPT5cblx0XHRcdFx0XHRcdDxvcHRpb25cblx0XHRcdFx0XHRcdFx0a2V5PXsgYCR7IG9wdGlvbi52YWx1ZSB9LSR7IGluZGV4IH0tJHsgZ3JvdXBJbmRleCB9YCB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgb3B0aW9uLnZhbHVlIH1cblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBvcHRpb24uZGlzYWJsZWQgfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7IG9wdGlvbi5sYWJlbCB9XG5cdFx0XHRcdFx0XHQ8L29wdGlvbj4sXG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdDwvb3B0Z3JvdXA+O1xuXHRcdFx0fSApIH1cblx0XHQ8L1N0eWxlZFNlbGVjdD5cblx0KTtcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cGVkU2VsZWN0Q29udHJvbDsiLCJmdW5jdGlvbiBIb3Jpem9udGFsTGluZSggcHJvcHMgKSB7XG5cdHJldHVybiA8aHIgc3R5bGU9eyB7IC4uLnByb3BzIH0gfS8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsTGluZTsiLCJmdW5jdGlvbiBIb3ZlckNvbnRhaW5lciggeyBpc0hvdmVyID0gZmFsc2UsIGNoaWxkcmVuIH0gKSB7XG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPXsgW1xuXHRcdFx0J2pldC1mYicsXG5cdFx0XHRpc0hvdmVyID8gJ3Nob3cnIDogJ2hpZGUnLFxuXHRcdFx0J3AtYWJzb2x1dGUnLFxuXHRcdFx0J3doLTEwMCcsXG5cdFx0XHQnZmxleC1jZW50ZXInLFxuXHRcdFx0J2dhcC0wNWVtJyxcblx0XHRdLmpvaW4oICcgJyApIH1cblx0XHRzdHlsZT17IHtcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmZjYycsXG5cdFx0XHR0cmFuc2l0aW9uOiAnMC4zcycsXG5cdFx0fSB9XG5cdD5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb3ZlckNvbnRhaW5lcjsiLCJjb25zdCB7XG5cdFx0ICBCdXR0b24sXG5cdFx0ICBQb3BvdmVyLFxuXHRcdCAgUGFuZWxCb2R5LFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICB1c2VTdGF0ZSxcblx0ICB9ID0gd3AuZWxlbWVudDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIE1hY3Jvc0luc2VydGVyKCB7XG5cdFx0XHRcdFx0XHRcdCBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0IGZpZWxkcyxcblx0XHRcdFx0XHRcdFx0IG9uRmllbGRDbGljayxcblx0XHRcdFx0XHRcdFx0IGN1c3RvbU1hY3Jvcyxcblx0XHRcdFx0XHRcdFx0IHpJbmRleCA9IDEwMDAwMDAsXG5cdFx0XHRcdFx0XHRcdCAuLi5wb3BvdmVyUHJvcHNcblx0XHRcdFx0XHRcdCB9ICkge1xuXG5cdGNvbnN0IFsgc2hvd1BvcG92ZXIsIHNldFBvcG92ZXJTdGF0ZSBdID0gdXNlU3RhdGUoICgpID0+IGZhbHNlICk7XG5cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3MtaW5zZXJ0ZXJcIj5cblx0XHQ8QnV0dG9uXG5cdFx0XHRpc1RlcnRpYXJ5XG5cdFx0XHRpc1NtYWxsXG5cdFx0XHRpY29uPXsgc2hvd1BvcG92ZXIgPyAnbm8tYWx0JyA6ICdhZG1pbi10b29scycgfVxuXHRcdFx0bGFiZWw9eyAnSW5zZXJ0IG1hY3JvcycgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3MtdHJpZ2dlclwiXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRzZXRQb3BvdmVyU3RhdGUoIHByZXYgPT4gISBwcmV2ICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdHsgc2hvd1BvcG92ZXIgJiYgKFxuXHRcdFx0PFBvcG92ZXJcblx0XHRcdFx0c3R5bGU9eyB7IHpJbmRleCB9IH1cblx0XHRcdFx0cG9zaXRpb249eyAnYm90dG9tIGxlZnQnIH1cblx0XHRcdFx0eyAuLi5wb3BvdmVyUHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGZpZWxkcy5sZW5ndGggJiYgPFBhbmVsQm9keSB0aXRsZT17ICdGb3JtIEZpZWxkcycgfT5cblx0XHRcdFx0XHR7IGZpZWxkcy5tYXAoIGZpZWxkID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdmaWVsZF8nICsgZmllbGQubmFtZSB9PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggZmllbGQubmFtZSApXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdD57ICclJyArIGZpZWxkLm5hbWUgKyAnJScgfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+O1xuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cdFx0XHRcdHsgY3VzdG9tTWFjcm9zICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnQ3VzdG9tIE1hY3JvcycgfT5cblx0XHRcdFx0XHR7IGN1c3RvbU1hY3Jvcy5tYXAoIG1hY3JvcyA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnbWFjcm9zXycgKyBtYWNyb3MgfT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZpZWxkQ2xpY2soIG1hY3JvcyApXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdD57ICclJyArIG1hY3JvcyArICclJyB9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj47XG5cdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cblx0XHRcdDwvUG9wb3Zlcj5cblx0XHQpIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NJbnNlcnRlcjsiLCJpbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi9CYXNlSGVscCc7XG5cbmNvbnN0IHtcblx0ICAgICAgRm9ybVRvZ2dsZSxcblx0ICAgICAgQmFzZUNvbnRyb2wsXG5cdCAgICAgIEZsZXgsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICB1c2VJbnN0YW5jZUlkLFxuICAgICAgfSA9IHdwLmNvbXBvc2U7XG5cbmZ1bmN0aW9uIFRvZ2dsZUNvbnRyb2woIHtcblx0Y2hlY2tlZCA9IGZhbHNlLFxuXHRkaXNhYmxlZCA9IGZhbHNlLFxuXHRvbkNoYW5nZSA9ICgpID0+IHt9LFxuXHRjaGlsZHJlbiA9IG51bGwsXG5cdGhlbHAgPSBudWxsLFxuXHRmbGV4TGFiZWxQcm9wcyA9IHt9LFxuXHRvdXRzaWRlTGFiZWwgPSBudWxsLFxuXHRfX25leHRIYXNOb01hcmdpbkJvdHRvbSA9IGZhbHNlLFxuXHQuLi5wcm9wc1xufSApIHtcblx0Y29uc3QgSGVscCA9IGhlbHA7XG5cblx0Y29uc3QgaW5zdGFuY2VJZCA9IHVzZUluc3RhbmNlSWQoIFRvZ2dsZUNvbnRyb2wgKTtcblx0Y29uc3QgaWQgICAgICAgICA9IGBpbnNwZWN0b3ItamZiLXRvZ2dsZS1jb250cm9sLSR7IGluc3RhbmNlSWQgfWA7XG5cblx0cmV0dXJuIDxCYXNlQ29udHJvbFxuXHRcdGlkPXsgaWQgfVxuXHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXsgX19uZXh0SGFzTm9NYXJnaW5Cb3R0b20gfVxuXHQ+XG5cdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG5cdFx0XHQ8RmxleFxuXHRcdFx0XHRnYXA9eyAzIH1cblx0XHRcdFx0YWxpZ249XCJmbGV4LXN0YXJ0XCJcblx0XHRcdFx0anVzdGlmeT1cImZsZXgtc3RhcnRcIlxuXHRcdFx0XHR7IC4uLmZsZXhMYWJlbFByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0PEZvcm1Ub2dnbGVcblx0XHRcdFx0XHRpZD17IGlkIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgY2hlY2tlZCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGV2ZW50ICkgPT4gb25DaGFuZ2UoIGV2ZW50LnRhcmdldC5jaGVja2VkICkgfVxuXHRcdFx0XHRcdGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj17IGlkIH0+XG5cdFx0XHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdHsgb3V0c2lkZUxhYmVsIH1cblx0XHRcdDwvRmxleD5cblx0XHRcdHsgJ3N0cmluZycgPT09IHR5cGVvZiBIZWxwXG5cdFx0XHQgID8gPEJhc2VIZWxwPnsgSGVscCB9PC9CYXNlSGVscD5cblx0XHRcdCAgOiBIZWxwICYmIDxIZWxwLz4gfVxuXHRcdDwvRmxleD5cblx0PC9CYXNlQ29udHJvbD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUNvbnRyb2w7IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZXh0KCB7fSApOyIsImltcG9ydCBEeW5hbWljSXRlbUJvZHkgZnJvbSAnLi9EeW5hbWljSXRlbUJvZHknO1xuaW1wb3J0IEJsb2NrVmFsdWVJdGVtQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L2Jsb2NrLnZhbHVlLml0ZW0uY29udGV4dCc7XG5pbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSAnLi4vLi4vYWN0aW9uLW1vZGFsL2NvbXBvbmVudHMvQWN0aW9uTW9kYWwnO1xuaW1wb3J0IGh1bWFuUmVhZGFibGVQcmVzZXQgZnJvbSAnLi4vLi4vcHJlc2V0L2hlbHBlcnMvaHVtYW5SZWFkYWJsZVByZXNldCc7XG5pbXBvcnQgSHVtYW5SZWFkYWJsZUNvbmRpdGlvbnNcblx0ZnJvbSAnLi4vLi4vYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0h1bWFuUmVhZGFibGVDb25kaXRpb25zJztcbmltcG9ydCBIb3ZlckNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hvdmVyQ29udGFpbmVyJztcbmltcG9ydCBEZXRhaWxzQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsc0NvbnRhaW5lcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBEeW5hbWljSXRlbSggeyBjdXJyZW50LCB1cGRhdGUsIGlzT3Blbk1vZGFsLCBzZXRPcGVuTW9kYWwgfSApIHtcblx0Y29uc3QgdXBkYXRlQ3VycmVudCA9IHNldHRpbmdzID0+IHtcblx0XHR1cGRhdGUoIHZhbHVlID0+IHtcblx0XHRcdGNvbnN0IGdyb3VwcyA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB2YWx1ZS5ncm91cHMgKSApO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBncm91cEluZGV4IGluIGdyb3VwcyApIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCFncm91cHMuaGFzT3duUHJvcGVydHkoIGdyb3VwSW5kZXggKSB8fFxuXHRcdFx0XHRcdGN1cnJlbnQuaWQgIT09IGdyb3Vwc1sgZ3JvdXBJbmRleCBdLmlkXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGdyb3Vwc1sgZ3JvdXBJbmRleCBdID0ge1xuXHRcdFx0XHRcdC4uLmdyb3Vwc1sgZ3JvdXBJbmRleCBdLFxuXHRcdFx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHsgZ3JvdXBzIH07XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZUN1cnJlbnQgPSAoKSA9PiB7XG5cdFx0dXBkYXRlKCB2YWx1ZSA9PiB7XG5cdFx0XHRjb25zdCBncm91cHMgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdmFsdWUuZ3JvdXBzICkgKTtcblxuXHRcdFx0cmV0dXJuIHsgZ3JvdXBzOiBncm91cHMuZmlsdGVyKCAoIHsgaWQgfSApID0+IGlkICE9PSBjdXJyZW50LmlkICkgfTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgWyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cdGNvbnN0IFsgaXNIb3Zlciwgc2V0SG92ZXIgXSAgICAgICA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdGNvbnN0IGlzRW1wdHkgPSAxID49IE9iamVjdC5rZXlzKCBjdXJyZW50ICk/Lmxlbmd0aDtcblxuXHRyZXR1cm4gPEJsb2NrVmFsdWVJdGVtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHtcblx0XHR1cGRhdGU6IHVwZGF0ZUN1cnJlbnQsXG5cdFx0Y3VycmVudCxcblx0fSB9PlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mYiBwLXJlbGF0aXZlXCJcblx0XHRcdG9uTW91c2VPdmVyPXsgKCkgPT4gc2V0SG92ZXIoIHRydWUgKSB9XG5cdFx0XHRvbkZvY3VzPXsgKCkgPT4gc2V0SG92ZXIoIHRydWUgKSB9XG5cdFx0XHRvbk1vdXNlT3V0PXsgKCkgPT4gc2V0SG92ZXIoIGZhbHNlICkgfVxuXHRcdFx0b25CbHVyPXsgKCkgPT4gc2V0SG92ZXIoIGZhbHNlICkgfVxuXHRcdD5cblx0XHRcdDxIb3ZlckNvbnRhaW5lciBpc0hvdmVyPXsgaXNIb3ZlciB9PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0aWNvbj17IHNob3dNb2RhbCA/ICduby1hbHQnIDogJ2VkaXQnIH1cblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0U2hvd01vZGFsKCBwcmV2ID0+ICFwcmV2ICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBfXyggJ0VkaXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRpY29uPXsgJ3RyYXNoJyB9XG5cdFx0XHRcdFx0b25DbGljaz17IGRlbGV0ZUN1cnJlbnQgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBfXyggJ0RlbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L0hvdmVyQ29udGFpbmVyPlxuXHRcdFx0PERldGFpbHNDb250YWluZXI+XG5cdFx0XHRcdHsgaXNFbXB0eSA/IDxkaXZcblx0XHRcdFx0XHRkYXRhLXRpdGxlPXsgX18oXG5cdFx0XHRcdFx0XHQnVGhpcyB2YWx1ZSBpdGVtIGlzIGVtcHR5Jyxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0Lz4gOiA8PlxuXHRcdFx0XHRcdCAgPHNwYW5cblx0XHRcdFx0XHRcdCAgZGF0YS10aXRsZT17IF9fKCAnU2V0JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnOicgfVxuXHRcdFx0XHRcdFx0ICBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtcblx0XHRcdFx0XHRcdFx0ICBfX2h0bWw6IGh1bWFuUmVhZGFibGVQcmVzZXQoIGN1cnJlbnQudG9fc2V0ICksXG5cdFx0XHRcdFx0XHQgIH0gfVxuXHRcdFx0XHRcdCAgLz5cblx0XHRcdFx0XHQgIDxIdW1hblJlYWRhYmxlQ29uZGl0aW9uc1xuXHRcdFx0XHRcdFx0ICBjb25kaXRpb25zPXsgY3VycmVudD8uY29uZGl0aW9ucyB9XG5cdFx0XHRcdFx0ICAvPlxuXHRcdFx0XHQgIDwvPiB9XG5cdFx0XHQ8L0RldGFpbHNDb250YWluZXI+XG5cdFx0PC9kaXY+XG5cdFx0eyAoXG5cdFx0XHRzaG93TW9kYWwgfHwgaXNPcGVuTW9kYWwgPT09IGN1cnJlbnQuaWRcblx0XHQpICYmIDxBY3Rpb25Nb2RhbFxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4ge1xuXHRcdFx0XHRzZXRTaG93TW9kYWwoIGZhbHNlICk7XG5cdFx0XHRcdHNldE9wZW5Nb2RhbCggZmFsc2UgKTtcblx0XHRcdH0gfVxuXHRcdFx0dGl0bGU9eyBfXyggJ0VkaXQgRHluYW1pYyBWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ+XG5cdFx0XHQ8RHluYW1pY0l0ZW1Cb2R5Lz5cblx0XHQ8L0FjdGlvbk1vZGFsPiB9XG5cdDwvQmxvY2tWYWx1ZUl0ZW1Db250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0l0ZW07IiwiaW1wb3J0IEJsb2NrVmFsdWVJdGVtQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L2Jsb2NrLnZhbHVlLml0ZW0uY29udGV4dCc7XG5pbXBvcnQgUmVwZWF0ZXIgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlcic7XG5pbXBvcnQgUmVwZWF0ZXJBZGROZXcgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5hZGQubmV3JztcbmltcG9ydCBCYXNlSGVscCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhc2VIZWxwJztcbmltcG9ydCBSZXBlYXRlclN0YXRlIGZyb20gJy4uLy4uL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuc3RhdGUnO1xuaW1wb3J0IHVzZU9uVXBkYXRlTW9kYWwgZnJvbSAnLi4vLi4vYWN0aW9uLW1vZGFsL2hvb2tzL3VzZU9uVXBkYXRlTW9kYWwnO1xuaW1wb3J0IFByZXNldEJ1dHRvbiBmcm9tICcuLi8uLi9wcmVzZXQvY29tcG9uZW50cy9QcmVzZXRCdXR0b24nO1xuaW1wb3J0IE1hY3Jvc0ZpZWxkcyBmcm9tICcuLi8uLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zRmllbGRzJztcbmltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4uLy4uL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9Db25kaXRpb25JdGVtJztcbmltcG9ydCBDbGllbnRTaWRlTWFjcm9zIGZyb20gJy4uLy4uL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9DbGllbnRTaWRlTWFjcm9zJztcbmltcG9ydCBDb25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXJcblx0ZnJvbSAnLi4vLi4vYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0NvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG5cdCAgICAgIHVzZUNvbnRleHQsXG5cdCAgICAgIEZyYWdtZW50LFxuXHQgICAgICB1c2VFZmZlY3QsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcblx0ICAgICAgVGV4dGFyZWFDb250cm9sLFxuXHQgICAgICBGbGV4SXRlbSxcblx0ICAgICAgRmxleCxcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBoZWxwID0gW1xuXHR7XG5cdFx0a2V5OiAnY29tbWFzJyxcblx0XHRyZW5kZXI6ICgpID0+IDxsaT5cblx0XHRcdHsgX18oXG5cdFx0XHRcdGBJZiB0aGlzIGZpZWxkIHN1cHBvcnRzIG11bHRpcGxlIHZhbHVlcywgeW91IGNhbiBzZXBhcmF0ZSB0aGVtIHdpdGggY29tbWFzYCxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSB9XG5cdFx0PC9saT4sXG5cdH0sXG5dO1xuXG5jb25zdCBvcHRpb25zID0gW1xuXHR7XG5cdFx0dmFsdWU6ICdvbl9jaGFuZ2UnLFxuXHRcdGxhYmVsOiBfXyhcblx0XHRcdCdPbiBjaGFuZ2UgY29uZGl0aW9ucyByZXN1bHQnLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCksXG5cdFx0aGVscDogX18oXG5cdFx0XHRgVGhlIHZhbHVlIHdpbGwgYmUgYXBwbGllZCBpZiBjb25kaXRpb24gY2hlY2stdXBzIHJldHVybiBhIHJlc3VsdCBkaWZmZXJlbnQgZnJvbSB0aGUgZmlyc3QgY2hlY2stdXAncyBjYWNoZWQgdmFsdWVgLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCksXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ29uY2UnLFxuXHRcdGxhYmVsOiBfXyggJ09uY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRoZWxwOiBfXyhcblx0XHRcdGBUaGUgdmFsdWUgd2lsbCBiZSBhcHBsaWVkIG9ubHkgdGhlIGZpcnN0IHRpbWUgdGhlIGNvbmRpdGlvbiBpcyBtYXRjaGVkYCxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpLFxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdhbHdheXMnLFxuXHRcdGxhYmVsOiBfXyggJ0Fsd2F5cycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGhlbHA6IF9fKFxuXHRcdFx0YFRoZSB2YWx1ZSB3aWxsIGJlIGFwcGxpZWQgZXZlcnkgdGltZSB0aGUgY29uZGl0aW9uIGlzIG1hdGNoZWRgLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCksXG5cdH0sXG5dO1xuXG5jb25zdCBnZXRIZWxwID0gZnJlcXVlbmN5ID0+IHtcblx0Y29uc3Qgb3B0aW9uID0gb3B0aW9ucy5maW5kKCBjdXJyZW50ID0+IHtcblx0XHRyZXR1cm4gY3VycmVudC52YWx1ZSA9PT0gKFxuXHRcdFx0ZnJlcXVlbmN5ID8/ICdvbl9jaGFuZ2UnXG5cdFx0KTtcblx0fSApO1xuXG5cdHJldHVybiBvcHRpb24uaGVscDtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBEeW5hbWljSXRlbUJvZHkoKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBjdXJyZW50OiBjdXJyZW50VmFsdWUsXG5cdFx0ICAgICAgdXBkYXRlLFxuXHQgICAgICB9ID0gdXNlQ29udGV4dCggQmxvY2tWYWx1ZUl0ZW1Db250ZXh0ICk7XG5cblx0Y29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gPSB1c2VTdGF0ZSggKCkgPT4gY3VycmVudFZhbHVlICk7XG5cblx0Y29uc3QgWyBjdXJyZW50SGVscCwgc2V0Q3VycmVudEhlbHAgXSA9IHVzZVN0YXRlKFxuXHRcdCgpID0+IGdldEhlbHAoIGN1cnJlbnQuZnJlcXVlbmN5ICksXG5cdCk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0c2V0Q3VycmVudEhlbHAoIGdldEhlbHAoIGN1cnJlbnQuZnJlcXVlbmN5ICkgKTtcblx0fSwgWyBjdXJyZW50LmZyZXF1ZW5jeSBdICk7XG5cblx0Y29uc3QgdXBkYXRlQ3VycmVudCA9IHNldHRpbmdzID0+IHtcblx0XHRzZXRDdXJyZW50KCBwcmV2ID0+IChcblx0XHRcdHtcblx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0Li4uc2V0dGluZ3MsXG5cdFx0XHR9XG5cdFx0KSApO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZUNvbmRpdGlvbnMgPSBjb25kaXRpb25zID0+IHtcblx0XHR1cGRhdGVDdXJyZW50KCB7XG5cdFx0XHRjb25kaXRpb25zOiAnZnVuY3Rpb24nID09PSB0eXBlb2YgY29uZGl0aW9uc1xuXHRcdFx0ICAgICAgICAgICAgPyBjb25kaXRpb25zKCBjdXJyZW50LmNvbmRpdGlvbnMgPz8gW10gKVxuXHRcdFx0ICAgICAgICAgICAgOiBjb25kaXRpb25zLFxuXHRcdH0gKTtcblx0fTtcblxuXHR1c2VPblVwZGF0ZU1vZGFsKCAoKSA9PiB1cGRhdGUoIGN1cnJlbnQgKSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxGbGV4IGFsaWduPXsgJ2ZsZXgtc3RhcnQnIH0+XG5cdFx0XHQ8RmxleEl0ZW0gaXNCbG9jaz5cblx0XHRcdFx0PEZsZXhcblx0XHRcdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cblx0XHRcdFx0XHRqdXN0aWZ5PXsgJ2ZsZXgtc3RhcnQnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZmIgbGFiZWwnIH0+XG5cdFx0XHRcdFx0XHR7IF9fKCAnVmFsdWUgdG8gc2V0JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8UHJlc2V0QnV0dG9uXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnQudG9fc2V0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHVwZGF0ZUN1cnJlbnQoXG5cdFx0XHRcdFx0XHRcdHsgdG9fc2V0OiB2YWwgfSxcblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PENsaWVudFNpZGVNYWNyb3Mgd2l0aFRoaXM+XG5cdFx0XHRcdFx0XHQ8TWFjcm9zRmllbGRzXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBuYW1lID0+IHVwZGF0ZUN1cnJlbnQoIHtcblx0XHRcdFx0XHRcdFx0XHR0b19zZXQ6IGAkeyBjdXJyZW50LnRvX3NldCA/PyAnJyB9JHsgbmFtZSB9YCxcblx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9DbGllbnRTaWRlTWFjcm9zPlxuXHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHRcdDxCYXNlSGVscD5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7IGhlbHAubWFwKCBoZWxwSXRlbSA9PiA8RnJhZ21lbnQga2V5PXsgaGVscEl0ZW0ua2V5IH0+XG5cdFx0XHRcdFx0XHRcdHsgaGVscEl0ZW0ucmVuZGVyKCkgfVxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD4gKSB9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9CYXNlSGVscD5cblx0XHRcdDwvRmxleEl0ZW0+XG5cdFx0XHQ8RmxleEl0ZW0gaXNCbG9jayBzdHlsZT17IHsgZmxleDogMywgbWFyZ2luTGVmdDogJ3Vuc2V0JyB9IH0+XG5cdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWNvbnRyb2wtY2xlYXInIH1cblx0XHRcdFx0XHRoaWRlTGFiZWxGcm9tVmlzaW9uXG5cdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50LnRvX3NldCA/PyAnJyB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gdXBkYXRlQ3VycmVudCggeyB0b19zZXQ6IHZhbCB9ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GbGV4SXRlbT5cblx0XHQ8L0ZsZXg+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdG9wdGlvbnM9eyBvcHRpb25zIH1cblx0XHRcdHZhbHVlPXsgY3VycmVudC5mcmVxdWVuY3kgPz8gJ29uX2NoYW5nZScgfVxuXHRcdFx0bGFiZWw9eyBfXyggJ0FwcGx5IHR5cGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRsYWJlbFBvc2l0aW9uPXsgJ3NpZGUnIH1cblx0XHRcdG9uQ2hhbmdlPXsgZnJlcXVlbmN5ID0+IHVwZGF0ZUN1cnJlbnQoIHsgZnJlcXVlbmN5IH0gKSB9XG5cdFx0XHRoZWxwPXsgY3VycmVudEhlbHAgfVxuXHRcdC8+XG5cdFx0PFJlcGVhdGVyU3RhdGUgc3RhdGU9eyB1cGRhdGVDb25kaXRpb25zIH0+XG5cdFx0XHQ8Q29uZGl0aW9uc1JlcGVhdGVyQ29udGV4dFByb3ZpZGVyPlxuXHRcdFx0XHQ8UmVwZWF0ZXIgaXRlbXM9eyBjdXJyZW50LmNvbmRpdGlvbnMgPz8gW10gfT5cblx0XHRcdFx0XHQ8Q29uZGl0aW9uSXRlbS8+XG5cdFx0XHRcdDwvUmVwZWF0ZXI+XG5cdFx0XHQ8L0NvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlcj5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYiBmbGV4IGpjLXNwYWNlLWJldHdlZW4gYWktY2VudGVyJyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxSZXBlYXRlckFkZE5ldz5cblx0XHRcdFx0XHR7IF9fKCAnQWRkIE5ldyBDb25kaXRpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdDwvUmVwZWF0ZXJBZGROZXc+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYiBtLXVuc2V0IGNsZWFyLWNvbnRyb2wnIH1cblx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0J1NldCB2YWx1ZSBvbmx5IGlmIGZpZWxkIGlzIGVtcHR5Jyxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgY3VycmVudC5zZXRfb25fZW1wdHkgPz8gZmFsc2UgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHVwZGF0ZUN1cnJlbnQoXG5cdFx0XHRcdFx0XHR7IHNldF9vbl9lbXB0eTogdmFsIH0sXG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L1JlcGVhdGVyU3RhdGU+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0l0ZW1Cb2R5OyIsImltcG9ydCBEeW5hbWljSXRlbSBmcm9tICcuL0R5bmFtaWNJdGVtJztcbmltcG9ydCBUb29scyBmcm9tICcuLi8uLi90b29scyc7XG5pbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNlSGVscCc7XG5pbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZVVuaXFLZXknO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlJztcbmltcG9ydCBDb250YWluZXJzTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcnNMaXN0JztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXG5cdCAgICAgIEJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gRHluYW1pY1ZhbHVlcygpIHtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRjb25zdCB1bmlxS2V5ID0gdXNlVW5pcUtleSgpO1xuXHRjb25zdCB2YWx1ZSAgID0gYXR0cmlidXRlcy52YWx1ZSA/PyB7fTtcblx0Y29uc3QgZ3JvdXBzICA9IHZhbHVlLmdyb3VwcyA/PyBbXTtcblxuXHRjb25zdCBbIG9wZW5Nb2RhbCwgc2V0T3Blbk1vZGFsIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRpZiAoICF1c2VJc0hhc0F0dHJpYnV0ZSggJ3ZhbHVlJyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3Qgb3JHcm91cHMgPSBncm91cHMuZmlsdGVyKFxuXHRcdC8vIEV4Y2x1ZGUgZmlyc3QgaXRlbVxuXHRcdCggYywgaW5kZXggKSA9PiAwICE9PSBpbmRleCxcblx0KTtcblxuXHRjb25zdCB1cGRhdGVWYWx1ZSA9IHNldHRpbmdzID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHQuLi5hdHRyaWJ1dGVzLFxuXHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0Li4udmFsdWUsXG5cdFx0XHRcdC4uLihcblx0XHRcdFx0XHQnZnVuY3Rpb24nID09PSB0eXBlb2Ygc2V0dGluZ3Ncblx0XHRcdFx0XHQ/IHNldHRpbmdzKCB2YWx1ZSApXG5cdFx0XHRcdFx0OiBzZXR0aW5nc1xuXHRcdFx0XHQpLFxuXHRcdFx0fSxcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIDw+XG5cdFx0PEJhc2VIZWxwPlxuXHRcdFx0eyBfXyhcblx0XHRcdFx0YE9yIHVzZSBhIGNvbmRpdGlvbi1kZXBlbmRlbnQgdmFsdWVgLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpICsgJyAnIH1cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7fSB9XG5cdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0YEZvcm1lciBTZXQgVmFsdWUgZnVuY3Rpb25hbGl0eSwgbW92ZWQgZnJvbSB0aGUgQ29uZGl0aW9uYWwgQmxvY2tgLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KSB9XG5cdFx0XHRcdHNob3dUb29sdGlwXG5cdFx0XHQ+KD8pPC9CdXR0b24+XG5cdFx0PC9CYXNlSGVscD5cblx0XHR7IEJvb2xlYW4oIGdyb3Vwcy5sZW5ndGggKSA/IDxDb250YWluZXJzTGlzdD5cblx0XHRcdDxEeW5hbWljSXRlbVxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCBncm91cHNbIDAgXS5pZCApIH1cblx0XHRcdFx0Y3VycmVudD17IGdyb3Vwc1sgMCBdIH1cblx0XHRcdFx0dXBkYXRlPXsgdXBkYXRlVmFsdWUgfVxuXHRcdFx0XHRpc09wZW5Nb2RhbD17IG9wZW5Nb2RhbCB9XG5cdFx0XHRcdHNldE9wZW5Nb2RhbD17IHNldE9wZW5Nb2RhbCB9XG5cdFx0XHQvPlxuXHRcdFx0eyBCb29sZWFuKCBvckdyb3Vwcy5sZW5ndGggKSAmJiBvckdyb3Vwcy5tYXAoIGN1cnJlbnQgPT4gPD5cblx0XHRcdFx0PGI+eyBfXyggJ09SJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvYj5cblx0XHRcdFx0PER5bmFtaWNJdGVtXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggY3VycmVudC5pZCApIH1cblx0XHRcdFx0XHRjdXJyZW50PXsgY3VycmVudCB9XG5cdFx0XHRcdFx0dXBkYXRlPXsgdXBkYXRlVmFsdWUgfVxuXHRcdFx0XHRcdGlzT3Blbk1vZGFsPXsgb3Blbk1vZGFsIH1cblx0XHRcdFx0XHRzZXRPcGVuTW9kYWw9eyBzZXRPcGVuTW9kYWwgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC8+ICkgfVxuXHRcdDwvQ29udGFpbmVyc0xpc3Q+IDogbnVsbCB9XG5cdFx0PEJ1dHRvblxuXHRcdFx0aWNvbj17ICdwbHVzLWFsdDInIH1cblx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IFRvb2xzLmdldFJhbmRvbUlEKCk7XG5cblx0XHRcdFx0dXBkYXRlVmFsdWUoIHtcblx0XHRcdFx0XHRncm91cHM6IFtcblx0XHRcdFx0XHRcdC4uLmdyb3Vwcyxcblx0XHRcdFx0XHRcdHsgaWQsIGNvbmRpdGlvbnM6IFsgeyBfX3Zpc2libGU6IHRydWUgfSBdIH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdHNldE9wZW5Nb2RhbCggaWQgKTtcblx0XHRcdH0gfVxuXHRcdD5cblx0XHRcdHsgX18oICdBZGQgRHluYW1pYyBWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ8L0J1dHRvbj5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljVmFsdWVzOyIsImNvbnN0IHsgdXNlU2VsZWN0IH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiB1c2VEZWZhdWx0RXZlbnRzKCkge1xuXHRjb25zdCBldmVudHNPYmplY3RzID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdqZXQtZm9ybXMvZXZlbnRzJyApLmdldEFsd2F5c1R5cGVzKCkgKTtcblx0Y29uc3QgZXZlbnRzICAgICAgICA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IHsgdmFsdWUgfSBvZiBldmVudHNPYmplY3RzICkge1xuXHRcdGV2ZW50cy5wdXNoKCB2YWx1ZSApO1xuXHR9XG5cblx0cmV0dXJuIFsgLi4ubmV3IFNldCggZXZlbnRzICkgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRGVmYXVsdEV2ZW50czsiLCJjb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiB1c2VEeW5hbWljRXZlbnRzKCkge1xuXHRyZXR1cm4gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdqZXQtZm9ybXMvZXZlbnRzJyApLmdldER5bmFtaWNUeXBlcygpLm1hcChcblx0XHRcdCggeyB2YWx1ZSB9ICkgPT4gdmFsdWUsXG5cdFx0KSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRHluYW1pY0V2ZW50czsiLCJpbXBvcnQgdXNlRGVmYXVsdEV2ZW50cyBmcm9tICcuL3VzZURlZmF1bHRFdmVudHMnO1xuaW1wb3J0IHVzZUV2ZW50c0Zyb21HYXRld2F5cyBmcm9tICcuL3VzZUV2ZW50c0Zyb21HYXRld2F5cyc7XG5pbXBvcnQgdXNlRXZlbnRzRnJvbUFjdGlvbnMgZnJvbSAnLi91c2VFdmVudHNGcm9tQWN0aW9ucyc7XG5pbXBvcnQgdXNlRHluYW1pY0V2ZW50cyBmcm9tICcuL3VzZUR5bmFtaWNFdmVudHMnO1xuXG5jb25zdCB7IHVzZVNlbGVjdCB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gdXNlRXZlbnRzKCBhY3Rpb24gKSB7XG5cdGNvbnN0IGxpc3QgPSBbXG5cdFx0Li4udXNlRGVmYXVsdEV2ZW50cyggYWN0aW9uICksXG5cdFx0Li4udXNlRXZlbnRzRnJvbUdhdGV3YXlzKCBhY3Rpb24gKSxcblx0XHQuLi51c2VFdmVudHNGcm9tQWN0aW9ucyggYWN0aW9uICksXG5cdFx0Li4udXNlRHluYW1pY0V2ZW50cyggYWN0aW9uICksXG5cdF07XG5cblx0cmV0dXJuIHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL2V2ZW50cycgKS5maWx0ZXJMaXN0KFxuXHRcdFx0YWN0aW9uLnR5cGUsXG5cdFx0XHRsaXN0LFxuXHRcdCksXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUV2ZW50czsiLCJpbXBvcnQgdXNlU2VsZWN0UG9zdE1ldGEgZnJvbSAnLi4vLi4vaG9va3MvdXNlU2VsZWN0UG9zdE1ldGEnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiB1c2VFdmVudHNGcm9tQWN0aW9ucyggeyBpbmRleCB9ICkge1xuXHRjb25zdCBhY3Rpb25zTWV0YSA9IHVzZVNlbGVjdFBvc3RNZXRhKCAnX2pmX2FjdGlvbnMnICk7XG5cdGNvbnN0IGFjdGlvbnNNYXAgID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdqZXQtZm9ybXMvYWN0aW9ucycgKS5nZXRBY3Rpb25zTWFwKCksXG5cdFx0W10sXG5cdCk7XG5cblx0YWN0aW9uc01ldGEuc3BsaWNlKCBpbmRleCwgMSApO1xuXG5cdGNvbnN0IGV2ZW50cyA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zTWV0YSApIHtcblx0XHRjb25zdCBjYWxsYmFjayA9IGFjdGlvbnNNYXA/LlsgYWN0aW9uLnR5cGUgXT8ucHJvdmlkZUV2ZW50cztcblxuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxiYWNrICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBbIGFjdGlvbi50eXBlIF06IGN1cnJlbnQgPSB7fSB9ID0gYWN0aW9uLnNldHRpbmdzO1xuXG5cdFx0ZXZlbnRzLnB1c2goIC4uLmNhbGxiYWNrKCBjdXJyZW50ICkgKTtcblx0fVxuXG5cdHJldHVybiBbIC4uLm5ldyBTZXQoIGV2ZW50cyApIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUV2ZW50c0Zyb21BY3Rpb25zOyIsImltcG9ydCB1c2VTZWxlY3RQb3N0TWV0YSBmcm9tICcuLi8uLi9ob29rcy91c2VTZWxlY3RQb3N0TWV0YSc7XG5cbmNvbnN0IHsgdXNlU2VsZWN0IH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiB1c2VFdmVudHNGcm9tR2F0ZXdheXMoKSB7XG5cdGNvbnN0IGdhdGV3YXlzICAgICAgICAgID0gdXNlU2VsZWN0UG9zdE1ldGEoICdfamZfZ2F0ZXdheXMnICk7XG5cdGNvbnN0IHsgc2NlbmFyaW8gPSB7fSB9ID0gZ2F0ZXdheXNbIGdhdGV3YXlzPy5nYXRld2F5IF0gPz8ge307XG5cblx0cmV0dXJuIHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4ge1xuXHRcdFx0Y29uc3QgZXZlbnRzT2JqZWN0cyA9IChcblx0XHRcdFx0c2VsZWN0KCAnamV0LWZvcm1zL2V2ZW50cycgKS5nZXRHYXRld2F5VHlwZXMoKVxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgZXZlbnRzID0gW107XG5cblx0XHRcdGZvciAoIGNvbnN0IGV2ZW50IG9mIGV2ZW50c09iamVjdHMgKSB7XG5cdFx0XHRcdGNvbnN0IGNvcnJlY3RHYXRld2F5ICA9IGV2ZW50LmdhdGV3YXlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPyBldmVudC5nYXRld2F5ID09PSBnYXRld2F5cy5nYXRld2F5XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZTtcblx0XHRcdFx0Y29uc3QgY29ycmVjdFNjZW5hcmlvID0gZXZlbnQuc2NlbmFyaW9cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPyBldmVudC5zY2VuYXJpbyA9PT0gc2NlbmFyaW8/LmlkXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZTtcblxuXHRcdFx0XHRpZiAoIGNvcnJlY3RHYXRld2F5ICYmIGNvcnJlY3RTY2VuYXJpbyApIHtcblx0XHRcdFx0XHRldmVudHMucHVzaCggZXZlbnQudmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gWyAuLi5uZXcgU2V0KCBldmVudHMgKSBdO1xuXHRcdH0sXG5cdFx0WyBnYXRld2F5cy5nYXRld2F5LCBzY2VuYXJpbz8uaWQgXSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRXZlbnRzRnJvbUdhdGV3YXlzOyIsImltcG9ydCB1c2VFdmVudHMgZnJvbSAnLi91c2VFdmVudHMnO1xuXG5jb25zdCB7IHVzZVNlbGVjdCB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gdXNlUmVxdWVzdEV2ZW50cygpIHtcblx0Y29uc3QgY3VycmVudEFjdGlvbiA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL2FjdGlvbnMnICkuZ2V0Q3VycmVudEFjdGlvbigpLFxuXHQpO1xuXG5cdHJldHVybiB1c2VFdmVudHMoIGN1cnJlbnRBY3Rpb24gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdEV2ZW50czsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRyZWdpc3RlciggaXRlbXMgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5yZWdpc3Rlcixcblx0XHRcdGl0ZW1zLFxuXHRcdH07XG5cdH0sXG5cdGxvY2tBY3Rpb25zKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMubG9ja0FjdGlvbnMsXG5cdFx0fTtcblx0fSxcblx0dW5SZWdpc3RlciggdHlwZXMgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy51blJlZ2lzdGVyLFxuXHRcdFx0dHlwZXMsXG5cdFx0fTtcblx0fSxcblx0Y2xlYXJEeW5hbWljRXZlbnRzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuY2xlYXJEeW5hbWljRXZlbnRzLFxuXHRcdH07XG5cdH0sXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcblx0cmVnaXN0ZXI6ICdSRUdJU1RFUicsXG5cdHVuUmVnaXN0ZXI6ICdVTlJFR0lTVEVSJyxcblx0bG9ja0FjdGlvbnM6ICdMT0NLX0FDVElPTlMnLFxuXHRjbGVhckR5bmFtaWNFdmVudHM6ICdDTEVBUl9EWU5BTUlDX0VWRU5UUycsXG59O1xuXG5cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0WyBjb25zdGFudHMucmVnaXN0ZXIgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRjb25zdCB7IHR5cGVzIH0gPSBzdGF0ZTtcblxuXHRcdGZvciAoIGNvbnN0IGl0ZW0gb2YgYWN0aW9uLml0ZW1zICkge1xuXHRcdFx0aXRlbS50aXRsZSA9IGl0ZW0ubGFiZWw7XG5cblx0XHRcdGNvbnN0IGlzc2V0SW5kZXggPSBzZWxlY3RvcnMuZ2V0VHlwZUluZGV4KCBzdGF0ZSwgaXRlbS52YWx1ZSApO1xuXG5cdFx0XHQvLyBpcyBuZXcgZXZlbnQgdHlwZVxuXHRcdFx0aWYgKCAtMSA9PT0gaXNzZXRJbmRleCApIHtcblx0XHRcdFx0dHlwZXMucHVzaCggeyAuLi5pdGVtIH0gKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0eXBlc1sgaXNzZXRJbmRleCBdID0geyAuLi5pdGVtIH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0dHlwZXMsXG5cdFx0fTtcblx0fSxcblx0WyBjb25zdGFudHMubG9ja0FjdGlvbnMgXSggc3RhdGUgKSB7XG5cdFx0Zm9yICggY29uc3QgeyBpZCwgc2VsZjogYWN0aW9uU2VsZiB9IG9mIHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gd2luZG93WyBhY3Rpb25TZWxmIF0gPz8gZmFsc2U7XG5cblx0XHRcdGlmICggZmFsc2UgPT09IGN1cnJlbnQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdCAgICAgIF9fdW5zdXBwb3J0ZWRfZXZlbnRzOiB1blN1cCxcblx0XHRcdFx0ICAgICAgX19zdXBwb3J0ZWRfZXZlbnRzOiBzdXAsXG5cdFx0XHQgICAgICB9ID0gY3VycmVudDtcblxuXHRcdFx0Y29uc3QgYWN0aW9uID0ge1xuXHRcdFx0XHR1bnN1cHBvcnRlZDogc3RhdGUudHlwZXMuZmlsdGVyKFxuXHRcdFx0XHRcdCggeyBzZWxmIH0gKSA9PiB1blN1cC5pbmNsdWRlcyggc2VsZiApICkuXG5cdFx0XHRcdFx0bWFwKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlICksXG5cdFx0XHRcdHN1cHBvcnRlZDogc3RhdGUudHlwZXMuZmlsdGVyKFxuXHRcdFx0XHRcdCggeyBzZWxmIH0gKSA9PiBzdXAuaW5jbHVkZXMoIHNlbGYgKSApLlxuXHRcdFx0XHRcdG1hcCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApLFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCAhYWN0aW9uLnN1cHBvcnRlZC5sZW5ndGggJiYgIWFjdGlvbi51bnN1cHBvcnRlZC5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0ZS5sb2NrZWRBY3Rpb25zWyBpZCBdID0gYWN0aW9uO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0WyBjb25zdGFudHMudW5SZWdpc3RlciBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IHsgdHlwZXMgfSA9IGFjdGlvbjtcblxuXHRcdHN0YXRlLnR5cGVzID0gc3RhdGUudHlwZXMuZmlsdGVyKFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiAhdHlwZXMuaW5jbHVkZXMoIHZhbHVlICksXG5cdFx0KTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0WyBjb25zdGFudHMuY2xlYXJEeW5hbWljRXZlbnRzIF0oIHN0YXRlICkge1xuXHRcdHN0YXRlLnR5cGVzID0gc3RhdGUudHlwZXMuZmlsdGVyKFxuXHRcdFx0KCB7IGlzRHluYW1pYyA9IGZhbHNlIH0gKSA9PiAhaXNEeW5hbWljLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG59OyIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmNvbnN0IHsgY3JlYXRlUmVkdXhTdG9yZSB9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdXhTdG9yZSggJ2pldC1mb3Jtcy9ldmVudHMnLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9ycyxcbn0gKTtcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcblx0dHlwZXM6IFtdLFxuXHRsYWJlbHM6IHt9LFxuXHRsb2NrZWRBY3Rpb25zOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XG5cdGNvbnN0IGNhbGxiYWNrID0gZGlzcGF0Y2hlcnNbIGFjdGlvbj8udHlwZSBdO1xuXG5cdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKCBzdGF0ZSwgYWN0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59IiwiY29uc3Qgc2VsZWN0b3JzID0ge1xuXHRnZXRUeXBlSW5kZXgoIHN0YXRlLCBzbHVnICkge1xuXHRcdHJldHVybiBzdGF0ZS50eXBlcy5maW5kSW5kZXgoIGV2ZW50ID0+IGV2ZW50LnZhbHVlID09PSBzbHVnICk7XG5cdH0sXG5cdGdldFR5cGVzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUudHlwZXM7XG5cdH0sXG5cdGdldEdhdGV3YXlUeXBlcyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLnR5cGVzLmZpbHRlciggZXZlbnQgPT4gKFxuXHRcdFx0J2dhdGV3YXknIGluIGV2ZW50XG5cdFx0KSApO1xuXHR9LFxuXHRnZXRBbHdheXNUeXBlcyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLnR5cGVzLmZpbHRlciggZXZlbnQgPT4gKFxuXHRcdFx0J2Fsd2F5cycgaW4gZXZlbnRcblx0XHQpICk7XG5cdH0sXG5cdGdldER5bmFtaWNUeXBlcyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLnR5cGVzLmZpbHRlciggKCB7IGlzRHluYW1pYyB9ICkgPT4gaXNEeW5hbWljICk7XG5cdH0sXG5cdGdldFR5cGUoIHN0YXRlLCBzbHVnICkge1xuXHRcdGNvbnN0IGluZGV4ID0gc2VsZWN0b3JzLmdldFR5cGVJbmRleCggc3RhdGUsIHNsdWcgKTtcblxuXHRcdHJldHVybiBzdGF0ZS50eXBlc1sgaW5kZXggXTtcblx0fSxcblx0Z2V0VW5zdXBwb3J0ZWQoIHN0YXRlLCBhY3Rpb25JZCApIHtcblx0XHRjb25zdCBhY3Rpb24gPSBzdGF0ZS5sb2NrZWRBY3Rpb25zWyBhY3Rpb25JZCBdID8/IGZhbHNlO1xuXG5cdFx0aWYgKCBmYWxzZSA9PT0gYWN0aW9uICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY3Rpb24udW5zdXBwb3J0ZWQ7XG5cdH0sXG5cdGdldFN1cHBvcnRlZCggc3RhdGUsIGFjdGlvbklkICkge1xuXHRcdGNvbnN0IGFjdGlvbiA9IHN0YXRlLmxvY2tlZEFjdGlvbnNbIGFjdGlvbklkIF0gPz8gZmFsc2U7XG5cblx0XHRpZiAoIGZhbHNlID09PSBhY3Rpb24gKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjdGlvbi5zdXBwb3J0ZWQ7XG5cdH0sXG5cdGlzVmFsaWQoIHN0YXRlLCBhY3Rpb25JZCwgZXZlbnRTbHVnICkge1xuXHRcdGNvbnN0IHVuc3VwcG9ydGVkID0gc2VsZWN0b3JzLmdldFVuc3VwcG9ydGVkKCBzdGF0ZSwgYWN0aW9uSWQgKTtcblxuXHRcdGlmICggdW5zdXBwb3J0ZWQubGVuZ3RoICYmIHVuc3VwcG9ydGVkLmluY2x1ZGVzKCBldmVudFNsdWcgKSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBzdXBwb3J0ZWQgPSBzZWxlY3RvcnMuZ2V0U3VwcG9ydGVkKCBzdGF0ZSwgYWN0aW9uSWQgKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQhc3VwcG9ydGVkLmxlbmd0aCB8fCBzdXBwb3J0ZWQuaW5jbHVkZXMoIGV2ZW50U2x1ZyApXG5cdFx0KTtcblx0fSxcblx0ZmlsdGVyTGlzdCggc3RhdGUsIGFjdGlvbklkLCBldmVudExpc3QgKSB7XG5cdFx0cmV0dXJuIGV2ZW50TGlzdC5maWx0ZXIoXG5cdFx0XHRjdXJyZW50ID0+IHNlbGVjdG9ycy5pc1ZhbGlkKCBzdGF0ZSwgYWN0aW9uSWQsIGN1cnJlbnQgKSxcblx0XHQpO1xuXHR9LFxuXHRnZXRIZWxwTWFwKCBzdGF0ZSApIHtcblx0XHRjb25zdCBtYXAgPSB7fTtcblxuXHRcdGZvciAoIGNvbnN0IHsgdmFsdWUsIGhlbHAgfSBvZiBzdGF0ZS50eXBlcyApIHtcblx0XHRcdG1hcFsgdmFsdWUgXSA9IGhlbHA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Li4uc2VsZWN0b3JzLFxufTsiLCJpbXBvcnQgd2l0aFNlbGVjdEdhdGV3YXlzIGZyb20gJy4uL2hvb2tzL3dpdGhTZWxlY3RHYXRld2F5cyc7XG5pbXBvcnQgeyBGZXRjaEFwaUJ1dHRvbiB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcbmltcG9ydCB7IHdpdGhTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5mdW5jdGlvbiBHYXRld2F5RmV0Y2hCdXR0b24oIHtcblx0aW5pdGlhbExhYmVsID0gJ1ZhbGlkJyxcblx0bGFiZWwgPSAnSW5WYWxpZCcsXG5cdGFwaUFyZ3MgPSB7fSxcblx0Z2F0ZXdheVJlcXVlc3RJZCxcblx0bG9hZGluZ0dhdGV3YXksXG5cdG9uTG9hZGluZyA9ICgpID0+IHt9LFxuXHRvblN1Y2Nlc3MgPSAoKSA9PiB7fSxcblx0b25GYWlsID0gKCkgPT4ge30sXG5cdGlzSGlkZGVuID0gZmFsc2UsXG59ICkge1xuXG5cdHJldHVybiA8RmV0Y2hBcGlCdXR0b25cblx0XHRpZD17IGdhdGV3YXlSZXF1ZXN0SWQgfVxuXHRcdGxvYWRpbmdTdGF0ZT17IGxvYWRpbmdHYXRld2F5IH1cblx0XHRpbml0aWFsTGFiZWw9eyBpbml0aWFsTGFiZWwgfVxuXHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdGFwaUFyZ3M9eyBhcGlBcmdzIH1cblx0XHRvbkZhaWw9eyBvbkZhaWwgfVxuXHRcdG9uTG9hZGluZz17IG9uTG9hZGluZyB9XG5cdFx0b25TdWNjZXNzPXsgb25TdWNjZXNzIH1cblx0XHRpc0hpZGRlbj17IGlzSGlkZGVuIH1cblx0Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoIHdpdGhTZWxlY3RHYXRld2F5cyApLFxuKSggR2F0ZXdheUZldGNoQnV0dG9uICk7IiwiZnVuY3Rpb24gZ2F0ZXdheUF0dHIoIGF0dHIgPSBmYWxzZSwgaXNFbXB0eSA9ICcnICkge1xuXHRjb25zdCBkYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xuXG5cdGlmICggIWF0dHIgKSB7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblx0aWYgKCAhZGF0YVsgYXR0ciBdICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IHNvdXJjZSA9IGRhdGFbIGF0dHIgXTtcblxuXHRyZXR1cm4gbmFtZSA9PiBzb3VyY2VbIG5hbWUgXSA/IHNvdXJjZVsgbmFtZSBdIDogaXNFbXB0eTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2F0ZXdheUF0dHI7IiwiaW1wb3J0IGdhdGV3YXlBdHRyIGZyb20gJy4vZ2F0ZXdheUF0dHInO1xuXG5mdW5jdGlvbiBnYXRld2F5TGFiZWwoIHR5cGUsIGlzRW1wdHkgPSAnJyApIHtcblx0Y29uc3QgbGFiZWwgPSBnYXRld2F5QXR0ciggJ2xhYmVscycgKTtcblxuXHRyZXR1cm4gYXR0ciA9PiBsYWJlbCggdHlwZSApID8gbGFiZWwoIHR5cGUgKVsgYXR0ciBdIDogaXNFbXB0eTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2F0ZXdheUxhYmVsOyIsImZ1bmN0aW9uIGlzc2V0UmVuZGVyR2F0ZXdheSggaWQsIHdoYXQgPSAnY3JlZCcgKSB7XG5cdHJldHVybiAoXG5cdFx0d2luZG93LkpldEZCR2F0ZXdheXNMaXN0ICYmIHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSAmJlxuXHRcdHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdFsgaWQgXVsgd2hhdCBdXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzc2V0UmVuZGVyR2F0ZXdheTsiLCJmdW5jdGlvbiByZWdpc3RlckdhdGV3YXkoIGlkLCBjYWxsYmFjaywgZm9yV2hhdCA9ICdjcmVkJyApIHtcblx0d2luZG93LkpldEZCR2F0ZXdheXNMaXN0ICAgICAgID0gd2luZG93LkpldEZCR2F0ZXdheXNMaXN0IHx8IHt9O1xuXHR3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3RbIGlkIF0gPSB3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3RbIGlkIF0gfHxcblx0XHR7fTtcblxuXHR3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3RbIGlkIF1bIGZvcldoYXQgXSA9IGNhbGxiYWNrO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckdhdGV3YXk7IiwiaW1wb3J0IGlzc2V0UmVuZGVyR2F0ZXdheSBmcm9tICcuL2lzc2V0UmVuZGVyR2F0ZXdheSc7XG5cbmZ1bmN0aW9uIHJlbmRlckdhdGV3YXkoIGlkLCBwcm9wcywgd2hhdCA9ICdjcmVkJyApIHtcblx0aWYgKCAhaXNzZXRSZW5kZXJHYXRld2F5KCBpZCwgd2hhdCApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IEdhdGV3YXlDb21wb25lbnQgPSB3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3RbIGlkIF1bIHdoYXQgXTtcblxuXHRyZXR1cm4gPEdhdGV3YXlDb21wb25lbnQgeyAuLi5wcm9wcyB9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJHYXRld2F5OyIsImltcG9ydCBpc3NldFJlbmRlckdhdGV3YXkgZnJvbSAnLi9pc3NldFJlbmRlckdhdGV3YXknO1xuaW1wb3J0IHJlbmRlckdhdGV3YXkgZnJvbSAnLi9yZW5kZXJHYXRld2F5JztcblxuZnVuY3Rpb24gcmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlcihcblx0aWQsXG5cdHByb3BzLFxuXHR3aGF0ICAgICAgICA9ICdjcmVkJyxcblx0UGxhY2Vob2xkZXIgPSBudWxsLFxuKSB7XG5cdGlmICggIWlzc2V0UmVuZGVyR2F0ZXdheSggaWQsIHdoYXQgKSApIHtcblx0XHRyZXR1cm4gUGxhY2Vob2xkZXI7XG5cdH1cblx0cHJvcHMuUGxhY2Vob2xkZXIgPSBQbGFjZWhvbGRlcjtcblxuXHRyZXR1cm4gcmVuZGVyR2F0ZXdheSggaWQsIHByb3BzLCB3aGF0ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhdGV3YXlXaXRoUGxhY2Vob2xkZXI7IiwiZnVuY3Rpb24gd2l0aERpc3BhdGNoR2F0ZXdheXMgKCBkaXNwYXRjaCApe1xuXHRjb25zdCBzdG9yZSA9IGRpc3BhdGNoKCAnamV0LWZvcm1zL2dhdGV3YXlzJyApO1xuXG5cdHJldHVybiB7XG5cdFx0c2V0R2F0ZXdheVJlcXVlc3Q6IHN0b3JlLnNldFJlcXVlc3QsXG5cdFx0c2V0R2F0ZXdheVNjZW5hcmlvOiBzdG9yZS5zZXRTY2VuYXJpbyxcblx0XHRzZXRTY2VuYXJpbzogc3RvcmUuc2V0Q3VycmVudFNjZW5hcmlvLFxuXHRcdHNldEdhdGV3YXk6IHN0b3JlLnNldEdhdGV3YXksXG5cdFx0c2V0R2F0ZXdheUlubmVyOiBzdG9yZS5zZXRHYXRld2F5SW5uZXIsXG5cdFx0c2V0R2F0ZXdheVNwZWNpZmljOiBzdG9yZS5zZXRHYXRld2F5U3BlY2lmaWMsXG5cdFx0Y2xlYXJHYXRld2F5OiBzdG9yZS5jbGVhckdhdGV3YXksXG5cdFx0Y2xlYXJTY2VuYXJpbzogc3RvcmUuY2xlYXJTY2VuYXJpbyxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpc3BhdGNoR2F0ZXdheXM7IiwiaW1wb3J0IGdhdGV3YXlBdHRyIGZyb20gJy4uL2hlbHBlcnMvZ2F0ZXdheUF0dHInO1xuaW1wb3J0IGdhdGV3YXlMYWJlbCBmcm9tICcuLi9oZWxwZXJzL2dhdGV3YXlMYWJlbCc7XG5pbXBvcnQgeyBnbG9iYWxUYWIgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuXG5mdW5jdGlvbiB3aXRoU2VsZWN0R2F0ZXdheXMoIHNlbGVjdCApIHtcblx0Y29uc3Qgc3RvcmUgPSBzZWxlY3QoICdqZXQtZm9ybXMvZ2F0ZXdheXMnICk7XG5cblx0Y29uc3QgZ2F0ZXdheVJlcXVlc3RJZCA9IHN0b3JlLmdldEN1cnJlbnRSZXF1ZXN0SWQoKTtcblx0Y29uc3QgZ2F0ZXdheVNwZWNpZmljICA9IHN0b3JlLmdldEdhdGV3YXlTcGVjaWZpYygpO1xuXHRjb25zdCBzY2VuYXJpbyAgICAgICAgID0gc3RvcmUuZ2V0U2NlbmFyaW8oKTtcblxuXHRjb25zdCBDVVJSRU5UX0dBVEVXQVkgICAgICAgICAgICAgICAgICAgICAgPSBzdG9yZS5nZXRHYXRld2F5SWQoKTtcblx0Y29uc3QgeyBpZDogQ1VSUkVOVF9TQ0VOQVJJTyA9ICdQQVlfTk9XJyB9ID0gc2NlbmFyaW87XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIHVzZV9nbG9iYWw6IHVzZUdsb2JhbCA9IGZhbHNlLFxuXHQgICAgICB9ID0gZ2F0ZXdheVNwZWNpZmljO1xuXG5cdGNvbnN0IGN1cnJlbnRUYWIgPSBnbG9iYWxUYWIoIHsgc2x1ZzogQ1VSUkVOVF9HQVRFV0FZIH0gKTtcblxuXHRjb25zdCBnZXRTcGVjaWZpY09yR2xvYmFsID0gKCBrZXksIGlmRW1wdHkgPSAnJyApID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dXNlR2xvYmFsID8gKFxuXHRcdFx0XHRjdXJyZW50VGFiWyBrZXkgXSB8fCBpZkVtcHR5XG5cdFx0XHQpIDogKFxuXHRcdFx0XHRnYXRld2F5U3BlY2lmaWNbIGtleSBdIHx8IGlmRW1wdHlcblx0XHRcdClcblx0XHQpO1xuXHR9O1xuXG5cdGNvbnN0IGNhbGxhYmxlR2F0ZXdheSAgICAgICAgID0gZ2F0ZXdheUF0dHIoICdhZGRpdGlvbmFsJyApO1xuXHRjb25zdCBhZGRpdGlvbmFsU291cmNlR2F0ZXdheSA9IGNhbGxhYmxlR2F0ZXdheSggQ1VSUkVOVF9HQVRFV0FZICk7XG5cblx0Y29uc3QgbG9hZGluZ0dhdGV3YXkgPSBzZWxlY3QoICdqZXQtZm9ybXMvYWN0aW9ucycgKS5cblx0XHRnZXRMb2FkaW5nKCBnYXRld2F5UmVxdWVzdElkICk7XG5cblx0Y29uc3QgZ2xvYmFsR2F0ZXdheUxhYmVsICAgPSBnYXRld2F5QXR0ciggJ2xhYmVscycgKTtcblx0Y29uc3Qgc3BlY2lmaWNHYXRld2F5TGFiZWwgPSBnYXRld2F5TGFiZWwoIENVUlJFTlRfR0FURVdBWSApO1xuXG5cdGNvbnN0IGN1c3RvbUdhdGV3YXlMYWJlbCA9IGZ1bmN0aW9uICgga2V5ICkge1xuXHRcdHJldHVybiBnbG9iYWxHYXRld2F5TGFiZWwoIGAkeyBDVVJSRU5UX0dBVEVXQVkgfS4keyBrZXkgfWAgKTtcblx0fTtcblx0Y29uc3Qgc2NlbmFyaW9MYWJlbCAgICAgID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cdFx0cmV0dXJuIGN1c3RvbUdhdGV3YXlMYWJlbCggYHNjZW5hcmlvLiR7IENVUlJFTlRfU0NFTkFSSU8gfS4keyBrZXkgfWAgKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGdhdGV3YXlHZW5lcmFsOiBzdG9yZS5nZXRHYXRld2F5KCksXG5cdFx0Z2F0ZXdheVJlcXVlc3Q6IHN0b3JlLmdldEN1cnJlbnRSZXF1ZXN0KCksXG5cdFx0c2NlbmFyaW9Tb3VyY2U6IGFkZGl0aW9uYWxTb3VyY2VHYXRld2F5WyBDVVJSRU5UX1NDRU5BUklPIF0gfHwge30sXG5cdFx0Y3VycmVudFNjZW5hcmlvOiBzY2VuYXJpb1sgQ1VSUkVOVF9TQ0VOQVJJTyBdIHx8IHt9LFxuXHRcdENVUlJFTlRfU0NFTkFSSU8sXG5cdFx0Z2F0ZXdheVNjZW5hcmlvOiBzY2VuYXJpbyxcblx0XHRhZGRpdGlvbmFsU291cmNlR2F0ZXdheSxcblx0XHRnYXRld2F5U3BlY2lmaWMsXG5cdFx0Z2F0ZXdheVJlcXVlc3RJZCxcblx0XHRsb2FkaW5nR2F0ZXdheSxcblx0XHRnZXRTcGVjaWZpY09yR2xvYmFsLFxuXHRcdGdsb2JhbEdhdGV3YXlMYWJlbCxcblx0XHRzcGVjaWZpY0dhdGV3YXlMYWJlbCxcblx0XHRjdXN0b21HYXRld2F5TGFiZWwsXG5cdFx0c2NlbmFyaW9MYWJlbCxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlbGVjdEdhdGV3YXlzOyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNsZWFyR2F0ZXdheSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLmNsZWFyR2F0ZXdheSxcblx0XHR9O1xuXHR9LFxuXHRjbGVhclNjZW5hcmlvKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuY2xlYXJTY2VuYXJpbyxcblx0XHR9O1xuXHR9LFxuXHRzZXRSZXF1ZXN0KCBpdGVtICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuc2V0UmVxdWVzdCxcblx0XHRcdGl0ZW0sXG5cdFx0fTtcblx0fSxcblx0c2V0R2F0ZXdheSggaXRlbSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnNldEdhdGV3YXksXG5cdFx0XHRpdGVtLFxuXHRcdH07XG5cdH0sXG5cdHNldEdhdGV3YXlJbm5lciggaXRlbSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnNldEdhdGV3YXlJbm5lcixcblx0XHRcdGl0ZW0sXG5cdFx0fTtcblx0fSxcblx0c2V0R2F0ZXdheVNwZWNpZmljKCBpdGVtICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuc2V0R2F0ZXdheVNwZWNpZmljLFxuXHRcdFx0aXRlbSxcblx0XHR9O1xuXHR9LFxuXHRzZXRTY2VuYXJpbyggaXRlbSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnNldFNjZW5hcmlvLFxuXHRcdFx0aXRlbSxcblx0XHR9O1xuXHR9LFxuXHRzZXRDdXJyZW50U2NlbmFyaW8oIGl0ZW0gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5zZXRDdXJyZW50U2NlbmFyaW8sXG5cdFx0XHRpdGVtLFxuXHRcdH07XG5cdH0sXG5cdHJlZ2lzdGVyRXZlbnRUeXBlKCBpdGVtICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMucmVnaXN0ZXJFdmVudFR5cGUsXG5cdFx0XHRpdGVtLFxuXHRcdH07XG5cdH0sXG5cdGhhcmRTZXRHYXRld2F5KCBpdGVtLCB2YWx1ZSA9ICcnICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuaGFyZFNldEdhdGV3YXksXG5cdFx0XHRpdGVtLFxuXHRcdFx0dmFsdWUsXG5cdFx0fTtcblx0fSxcblx0aGFyZFNldEdhdGV3YXlTcGVjaWZpYyggaXRlbSwgdmFsdWUgPSAnJyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLmhhcmRTZXRHYXRld2F5U3BlY2lmaWMsXG5cdFx0XHRpdGVtLFxuXHRcdFx0dmFsdWUsXG5cdFx0fTtcblx0fSxcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG5cdGNsZWFyR2F0ZXdheTogJ0NMRUFSX0dBVEVXQVknLFxuXHRjbGVhclNjZW5hcmlvOiAnQ0xFQVJfU0NFTkFSSU8nLFxuXHRzZXRTY2VuYXJpbzogJ1NFVF9DVVJSRU5UX0dBVEVXQVlfU0NFTkFSSU8nLFxuXHRzZXRHYXRld2F5OiAnU0VUX0NVUlJFTlRfR0FURVdBWScsXG5cdHNldEdhdGV3YXlTcGVjaWZpYzogJ1NFVF9DVVJSRU5UX0dBVEVXQVlfU1BFQ0lGSUMnLFxuXHRzZXRHYXRld2F5SW5uZXI6ICdTRVRfQ1VSUkVOVF9HQVRFV0FZX0lOTkVSJyxcblx0c2V0UmVxdWVzdDogJ1NFVF9DVVJSRU5UX1JFUVVFU1QnLFxuXHRzZXRDdXJyZW50U2NlbmFyaW86ICdTRVRfQ1VSUkVOVF9TQ0VOQVJJTycsXG5cdHJlZ2lzdGVyRXZlbnRUeXBlOiAnUkVHSVNURVJfRVZFTlRfVFlQRScsXG5cdGhhcmRTZXRHYXRld2F5OiAnSEFSRF9TRVRfQ1VSUkVOVF9HQVRFV0FZJyxcblx0aGFyZFNldEdhdGV3YXlTcGVjaWZpYzogJ0hBUkRfU0VUX0NVUlJFTlRfR0FURVdBWV9TUEVDSUZJQydcbn1cblxuXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdFsgY29uc3RhbnRzLmNsZWFyR2F0ZXdheSBdOiAoIHN0YXRlICkgPT4gKFxuXHRcdHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y3VycmVudEdhdGV3YXk6IHt9LFxuXHRcdH1cblx0KSxcblx0WyBjb25zdGFudHMuY2xlYXJTY2VuYXJpbyBdOiAoIHN0YXRlICkgPT4gKFxuXHRcdHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y3VycmVudFNjZW5hcmlvOiB7fSxcblx0XHR9XG5cdCksXG5cdFsgY29uc3RhbnRzLnNldFNjZW5hcmlvIF06ICggc3RhdGUsIGFjdGlvbiApID0+IChcblx0XHR7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGN1cnJlbnRTY2VuYXJpbzoge1xuXHRcdFx0XHQuLi5zdGF0ZS5jdXJyZW50U2NlbmFyaW8sXG5cdFx0XHRcdC4uLihcblx0XHRcdFx0XHRhY3Rpb24uaXRlbSB8fCB7fVxuXHRcdFx0XHQpLFxuXHRcdFx0fSxcblx0XHR9XG5cdCksXG5cdFsgY29uc3RhbnRzLnNldEdhdGV3YXkgXTogKCBzdGF0ZSwgYWN0aW9uICkgPT4gKFxuXHRcdHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y3VycmVudEdhdGV3YXk6IHtcblx0XHRcdFx0Li4uc3RhdGUuY3VycmVudEdhdGV3YXksXG5cdFx0XHRcdC4uLmFjdGlvbi5pdGVtLFxuXHRcdFx0fSxcblx0XHR9XG5cdCksXG5cdFsgY29uc3RhbnRzLnNldEdhdGV3YXlTcGVjaWZpYyBdOiAoIHN0YXRlLCBhY3Rpb24gKSA9PiAoXG5cdFx0e1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjdXJyZW50R2F0ZXdheToge1xuXHRcdFx0XHQuLi5zdGF0ZS5jdXJyZW50R2F0ZXdheSxcblx0XHRcdFx0WyBzdGF0ZS5jdXJyZW50R2F0ZXdheS5nYXRld2F5IF06IHtcblx0XHRcdFx0XHQuLi5zZWxlY3RvcnMuZ2V0R2F0ZXdheVNwZWNpZmljKCBzdGF0ZSApLFxuXHRcdFx0XHRcdC4uLmFjdGlvbi5pdGVtLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9XG5cdCksXG5cdFsgY29uc3RhbnRzLnNldEdhdGV3YXlJbm5lciBdOiAoIHN0YXRlLCBhY3Rpb24gKSA9PiB7XG5cdFx0Y29uc3QgeyBrZXksIHZhbHVlIH0gPSBhY3Rpb24uaXRlbTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjdXJyZW50R2F0ZXdheToge1xuXHRcdFx0XHQuLi5zdGF0ZS5jdXJyZW50R2F0ZXdheSxcblx0XHRcdFx0WyBrZXkgXToge1xuXHRcdFx0XHRcdC4uLihcblx0XHRcdFx0XHRcdHN0YXRlLmN1cnJlbnRHYXRld2F5WyBrZXkgXSB8fCB7fVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0Li4udmFsdWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cdH0sXG5cdFsgY29uc3RhbnRzLnNldFJlcXVlc3QgXTogKCBzdGF0ZSwgYWN0aW9uICkgPT4ge1xuXHRcdGNvbnN0IGl0ZW1zID0gWyBzZWxlY3RvcnMuZ2V0R2F0ZXdheUlkKCBzdGF0ZSApLCBhY3Rpb24uaXRlbT8uaWQgXS5maWx0ZXIoIHZhbHVlID0+IHZhbHVlICk7XG5cdFx0YWN0aW9uLml0ZW0uaWQgPSBpdGVtcy5qb2luKCAnLycgKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGN1cnJlbnRSZXF1ZXN0OiBhY3Rpb24uaXRlbSxcblx0XHR9O1xuXHR9LFxuXHRbIGNvbnN0YW50cy5zZXRDdXJyZW50U2NlbmFyaW8gXTogKCBzdGF0ZSwgYWN0aW9uICkgPT4gKFxuXHRcdHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y3VycmVudFNjZW5hcmlvOiB7XG5cdFx0XHRcdC4uLnN0YXRlLmN1cnJlbnRTY2VuYXJpbyxcblx0XHRcdFx0WyBzdGF0ZS5jdXJyZW50U2NlbmFyaW8/LmlkIF06IHtcblx0XHRcdFx0XHQuLi4oXG5cdFx0XHRcdFx0XHRzdGF0ZS5jdXJyZW50U2NlbmFyaW9bIHN0YXRlLmN1cnJlbnRTY2VuYXJpbz8uaWQgXSB8fCB7fVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0Li4uKFxuXHRcdFx0XHRcdFx0YWN0aW9uLml0ZW0gfHwge31cblx0XHRcdFx0XHQpLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9XG5cdCksXG5cdFsgY29uc3RhbnRzLmhhcmRTZXRHYXRld2F5IF06ICggc3RhdGUsIGFjdGlvbiApID0+IHtcblx0XHRpZiAoIGFjdGlvbi5pdGVtICkge1xuXHRcdFx0c3RhdGUuY3VycmVudEdhdGV3YXlbIGFjdGlvbi5pdGVtIF0gPSBhY3Rpb24udmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdH07XG5cdH0sXG5cdFsgY29uc3RhbnRzLmhhcmRTZXRHYXRld2F5U3BlY2lmaWMgXTogKCBzdGF0ZSwgYWN0aW9uICkgPT4ge1xuXHRcdGlmICggYWN0aW9uLml0ZW0gJiYgc3RhdGUuY3VycmVudEdhdGV3YXk/LmdhdGV3YXkgKSB7XG5cdFx0XHRzdGF0ZS5jdXJyZW50R2F0ZXdheVsgc3RhdGUuY3VycmVudEdhdGV3YXk/LmdhdGV3YXkgXSA9IHt9O1xuXHRcdFx0c3RhdGUuY3VycmVudEdhdGV3YXlbIHN0YXRlLmN1cnJlbnRHYXRld2F5Py5nYXRld2F5IF1bIGFjdGlvbi5pdGVtIF0gPSBhY3Rpb24udmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdH07XG5cdH0sXG5cdFsgY29uc3RhbnRzLnJlZ2lzdGVyRXZlbnRUeXBlIF06ICggc3RhdGUsIGFjdGlvbiApID0+IHtcblx0XHRjb25zdCBldmVudCA9IHtcblx0XHRcdC4uLmFjdGlvbi5pdGVtLFxuXHRcdFx0Z2F0ZXdheTogYWN0aW9uLml0ZW0/LmdhdGV3YXkgPz8gc3RhdGUuY3VycmVudEdhdGV3YXk/LmdhdGV3YXksXG5cdFx0XHRzY2VuYXJpbzogYWN0aW9uLml0ZW0/LnNjZW5hcmlvID8/IHN0YXRlLmN1cnJlbnRTY2VuYXJpbz8uaWQsXG5cdFx0fTtcblxuXHRcdHN0YXRlLmV2ZW50VHlwZXMucHVzaCggZXZlbnQgKTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcbn07IiwiaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcblxuY29uc3QgeyBjcmVhdGVSZWR1eFN0b3JlIH0gPSB3cC5kYXRhO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCAnamV0LWZvcm1zL2dhdGV3YXlzJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnMsXG59ICk7XG5cblxuIiwiaW1wb3J0IGRpc3BhdGNoZXJzIGZyb20gJy4vZGlzcGF0Y2hlcnMnO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0ge1xuXHRjdXJyZW50UmVxdWVzdDoge1xuXHRcdGlkOiAtIDEsXG5cdH0sXG5cdGN1cnJlbnRHYXRld2F5OiB7fSxcblx0Y3VycmVudFNjZW5hcmlvOiB7fSxcblx0ZXZlbnRUeXBlczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xuXHRjb25zdCBjYWxsYmFjayA9IGRpc3BhdGNoZXJzWyBhY3Rpb24/LnR5cGUgXTtcblxuXHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBjYWxsYmFjayggc3RhdGUsIGFjdGlvbiApO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufSIsImNvbnN0IHNlbGVjdG9ycyA9IHtcblx0Z2V0Q3VycmVudFJlcXVlc3RJZCggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnRSZXF1ZXN0LmlkO1xuXHR9LFxuXHRnZXRDdXJyZW50UmVxdWVzdCggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnRSZXF1ZXN0O1xuXHR9LFxuXHRnZXRTY2VuYXJpbyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnRTY2VuYXJpbztcblx0fSxcblx0Z2V0U2NlbmFyaW9JZCggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnRTY2VuYXJpbz8uaWQ7XG5cdH0sXG5cdGdldEdhdGV3YXlJZCggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnRHYXRld2F5Py5nYXRld2F5O1xuXHR9LFxuXHRnZXRHYXRld2F5KCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudEdhdGV3YXk7XG5cdH0sXG5cdGdldEV2ZW50VHlwZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5ldmVudFR5cGVzO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5zZWxlY3RvcnMsXG5cdGdldEdhdGV3YXlTcGVjaWZpYyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmN1cnJlbnRHYXRld2F5WyBzZWxlY3RvcnMuZ2V0R2F0ZXdheUlkKCBzdGF0ZSApIF0gfHwge307XG5cdH0sXG59IiwiaW1wb3J0IHsgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmZ1bmN0aW9uIHVzZUlzSGFzQXR0cmlidXRlKCBhdHRyTmFtZSApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblx0Y29uc3QgdHlwZSAgICAgICA9IGJsb2NrUHJvcHNbICdkYXRhLXR5cGUnIF07XG5cblx0cmV0dXJuIHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4ge1xuXHRcdFx0Y29uc3QgYmxvY2sgPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKS5nZXRCbG9ja1R5cGUoIHR5cGUgKTtcblxuXHRcdFx0cmV0dXJuICEhYmxvY2suYXR0cmlidXRlc1sgYXR0ck5hbWUgXTtcblx0XHR9LFxuXHRcdFsgYXR0ck5hbWUsIHR5cGUgXSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSXNIYXNBdHRyaWJ1dGU7IiwiY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG5cdCAgICAgIHVzZURpc3BhdGNoLFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIHVzZU9wZW5FZGl0b3JQYW5lbCggcGFuZWxOYW1lICkge1xuXHRjb25zdCB7IGVuYWJsZUNvbXBsZW1lbnRhcnlBcmVhIH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvaW50ZXJmYWNlJyApO1xuXHRjb25zdCB7IHRvZ2dsZUVkaXRvclBhbmVsT3BlbmVkIH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdC1wb3N0JyApO1xuXG5cdGNvbnN0IGlzT3BlbmVkID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdjb3JlL2VkaXQtcG9zdCcgKS5pc0VkaXRvclBhbmVsT3BlbmVkKCBwYW5lbE5hbWUgKSxcblx0XHRbIHBhbmVsTmFtZSBdLFxuXHQpO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0Ly8gc3dpdGNoIGZyb20gYmxvY2sgdG8gcG9zdCBwYW5lbFxuXHRcdGVuYWJsZUNvbXBsZW1lbnRhcnlBcmVhKCAnY29yZS9lZGl0LXBvc3QnLCAnZWRpdC1wb3N0L2RvY3VtZW50JyApO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdCFpc09wZW5lZCAmJiB0b2dnbGVFZGl0b3JQYW5lbE9wZW5lZCggcGFuZWxOYW1lICk7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU9wZW5FZGl0b3JQYW5lbDsiLCJpbXBvcnQgU2FmZURlbGV0ZUNvbnRleHQgZnJvbSAnLi4vcmVwZWF0ZXIvY29udGV4dC9zYWZlLmRlbGV0ZSc7XG5pbXBvcnQgeyBzcHJpbnRmLCBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBvblNhdmVEZWxldGluZyA9IGluZGV4ID0+IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG5cdHJldHVybiBjb25maXJtKFxuXHRcdHNwcmludGYoXG5cdFx0XHQvLyB0cmFuc2xhdG9yczogJWQgLSBpdGVtIGluZGV4XG5cdFx0XHRfXyhcblx0XHRcdFx0YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgaXRlbSAlZD9gLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpLFxuXHRcdFx0aW5kZXggKyAxLFxuXHRcdCksXG5cdCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAgc2V0SXRlbXNEYXRhXG4gKiBAcmV0dXJuIHt7XG4gKiBjbG9uZUl0ZW06IEZ1bmN0aW9uLFxuICogYWRkTmV3SXRlbTogRnVuY3Rpb24sXG4gKiBjaGFuZ2VDdXJyZW50SXRlbTogRnVuY3Rpb24sXG4gKiB0b2dnbGVWaXNpYmxlOiBGdW5jdGlvbixcbiAqIG1vdmVEb3duOiBGdW5jdGlvbixcbiAqIG1vdmVVcDogRnVuY3Rpb24sXG4gKiByZW1vdmVPcHRpb246IEZ1bmN0aW9uXG4gKiB9fG51bGx9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiB1c2VSZXBlYXRlclN0YXRlKCBzZXRJdGVtc0RhdGEgKSB7XG5cdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBzZXRJdGVtc0RhdGEgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3Ncblx0Y29uc3QgaXNTYWZlRGVsZXRpbmcgPSB1c2VDb250ZXh0KCBTYWZlRGVsZXRlQ29udGV4dCApO1xuXG5cdGNvbnN0IGNoYW5nZUN1cnJlbnRJdGVtID0gZnVuY3Rpb24gKCB2YWx1ZVRvU2V0LCBpbmRleCApIHtcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXG5cdFx0XHRwcmV2Q2xvbmVbIGluZGV4IF0gPSB7XG5cdFx0XHRcdC4uLnByZXZbIGluZGV4IF0sXG5cdFx0XHRcdC4uLnZhbHVlVG9TZXQsXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlT3B0aW9uID0gZnVuY3Rpb24gKCBpbmRleCApIHtcblx0XHRpZiAoIGlzU2FmZURlbGV0aW5nICYmICFvblNhdmVEZWxldGluZyggaW5kZXggKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXHRcdFx0cHJldkNsb25lLnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgYWRkTmV3SXRlbSA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IFtcblx0XHRcdC4uLnByZXYsIHtcblx0XHRcdFx0X192aXNpYmxlOiB0cnVlLFxuXHRcdFx0XHQuLi52YWx1ZSxcblx0XHRcdH0sXG5cdFx0XSApO1xuXHR9O1xuXG5cdGNvbnN0IGNsb25lSXRlbSA9IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSAgICAgICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXHRcdFx0Y29uc3QgWyBiZWZvcmUsIGFmdGVyIF0gPSBbXG5cdFx0XHRcdHByZXZDbG9uZS5zbGljZSggMCwgaW5kZXggKyAxICksXG5cdFx0XHRcdHByZXZDbG9uZS5zbGljZSggaW5kZXggKyAxICksXG5cdFx0XHRdO1xuXG5cdFx0XHRyZXR1cm4gWyAuLi5iZWZvcmUsIHByZXZDbG9uZVsgaW5kZXggXSwgLi4uYWZ0ZXIgXTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgbW92ZVJlcGVhdGVySXRlbSA9IGZ1bmN0aW9uICggeyBvbGRJbmRleCwgbmV3SW5kZXggfSApIHtcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXG5cdFx0XHRbXG5cdFx0XHRcdHByZXZDbG9uZVsgbmV3SW5kZXggXSxcblx0XHRcdFx0cHJldkNsb25lWyBvbGRJbmRleCBdLFxuXHRcdFx0XSA9IFsgcHJldkNsb25lWyBvbGRJbmRleCBdLCBwcmV2Q2xvbmVbIG5ld0luZGV4IF0gXTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgbW92ZVVwICAgPSBmdW5jdGlvbiAoIGluZGV4ICkge1xuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggLSAxIH0gKTtcblx0fTtcblx0Y29uc3QgbW92ZURvd24gPSBmdW5jdGlvbiAoIGluZGV4ICkge1xuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggKyAxIH0gKTtcblx0fTtcblxuXHRjb25zdCB0b2dnbGVWaXNpYmxlID0gZnVuY3Rpb24gKCBpbmRleCApIHtcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lICAgICAgICAgICAgICA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblx0XHRcdHByZXZDbG9uZVsgaW5kZXggXS5fX3Zpc2libGUgPSAhKFxuXHRcdFx0XHRwcmV2Q2xvbmVbIGluZGV4IF0uX192aXNpYmxlXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gcHJldkNsb25lO1xuXHRcdH0gKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNoYW5nZUN1cnJlbnRJdGVtLFxuXHRcdHRvZ2dsZVZpc2libGUsXG5cdFx0bW92ZURvd24sXG5cdFx0bW92ZVVwLFxuXHRcdGNsb25lSXRlbSxcblx0XHRhZGROZXdJdGVtLFxuXHRcdHJlbW92ZU9wdGlvbixcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVwZWF0ZXJTdGF0ZTsiLCJjb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiB1c2VTZWxlY3RQb3N0TWV0YSggbmFtZSApIHtcblx0Y29uc3QgYWxsTWV0YSA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge30sXG5cdCk7XG5cblx0cmV0dXJuIEpTT04ucGFyc2UoIGFsbE1ldGFbIG5hbWUgXSB8fCAne30nICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlbGVjdFBvc3RNZXRhOyIsImNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG5cdCAgICAgIHVzZUVmZmVjdCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZURpc3BhdGNoLFxuICAgICAgfSA9IHdwLmRhdGE7XG5cblxuZnVuY3Rpb24gdXNlU3VjY2Vzc05vdGljZSAoIHRleHQsIG9wdGlvbnMgPSB7fSApIHtcblx0Y29uc3QgWyBoYXNDb3BpZWQsIHNldEhhc0NvcGllZCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cdGNvbnN0IG5vdGljZVN0b3JlICAgICAgICAgICAgICAgICA9IHVzZURpc3BhdGNoKCB3cC5ub3RpY2VzLnN0b3JlICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCBoYXNDb3BpZWQgKSB7XG5cdFx0XHRub3RpY2VTdG9yZS5jcmVhdGVXYXJuaW5nTm90aWNlKCB0ZXh0LFxuXHRcdFx0XHR7IHR5cGU6ICdzbmFja2JhcicsIC4uLm9wdGlvbnMgfSApO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdH0sIFsgaGFzQ29waWVkIF0gKTtcblxuXHRyZXR1cm4gc2V0SGFzQ29waWVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTdWNjZXNzTm90aWNlOyIsImNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcblxuY29uc3QgZ2V0Rm9ybUZpZWxkcyA9ICggYmxvY2tQYXJzZXJGdW5jLCBibG9ja3MgKSA9PiB7XG5cdGJsb2Nrcy5mb3JFYWNoKCBibG9jayA9PiB7XG5cdFx0YmxvY2tQYXJzZXJGdW5jKCBibG9jayApO1xuXG5cdFx0aWYgKCBibG9jay5pbm5lckJsb2Nrcy5sZW5ndGggKSB7XG5cdFx0XHRnZXRGb3JtRmllbGRzKCBibG9ja1BhcnNlckZ1bmMsIGJsb2NrLmlubmVyQmxvY2tzICk7XG5cdFx0fVxuXHR9ICk7XG59O1xuXG5jb25zdCB3aXRoU2VsZWN0Rm9ybUZpZWxkcyA9IChcblx0ZXhjbHVkZSAgICAgICAgPSBbXSxcblx0cGxhY2Vob2xkZXIgICAgPSBmYWxzZSxcblx0c3VwcHJlc3NGaWx0ZXIgPSBmYWxzZSxcbikgPT4gc2VsZWN0ID0+IHtcblxuXHRsZXQgZm9ybUZpZWxkcyA9IFtdO1xuXHRjb25zdCBza2lwRmllbGRzID0gW1xuXHRcdCdzdWJtaXQnLFxuXHRcdCdmb3JtLWJyZWFrJyxcblx0XHQnaGVhZGluZycsXG5cdFx0J2dyb3VwLWJyZWFrJyxcblx0XHQnY29uZGl0aW9uYWwnLFxuXHRcdC4uLmV4Y2x1ZGUsXG5cdF07XG5cblx0Z2V0Rm9ybUZpZWxkcyggYmxvY2sgPT4ge1xuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcblx0XHRcdCYmIGJsb2NrLmF0dHJpYnV0ZXMubmFtZVxuXHRcdFx0JiYgIXNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXG5cdFx0KSB7XG5cblx0XHRcdC8qY29uc3QgYmxvY2tUeXBlID0gc2VsZWN0KCBibG9ja3NTdG9yZSApLmdldEJsb2NrVHlwZSggYmxvY2submFtZSApOyovXG5cblx0XHRcdGZvcm1GaWVsZHMucHVzaCgge1xuXHRcdFx0XHRibG9ja05hbWU6IGJsb2NrLm5hbWUsXG5cdFx0XHRcdG5hbWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcblx0XHRcdFx0bGFiZWw6IGJsb2NrLmF0dHJpYnV0ZXMubGFiZWwgfHwgYmxvY2suYXR0cmlidXRlcy5uYW1lLFxuXHRcdFx0XHR2YWx1ZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxuXHRcdFx0XHQvL2ljb246IGJsb2NrVHlwZS5pY29uLnNyYyxcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0sIHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpICk7XG5cblx0Zm9ybUZpZWxkcyA9IHBsYWNlaG9sZGVyXG5cdCAgICAgICAgICAgICA/IFsgeyB2YWx1ZTogJycsIGxhYmVsOiBwbGFjZWhvbGRlciB9LCAuLi5mb3JtRmllbGRzIF1cblx0ICAgICAgICAgICAgIDogZm9ybUZpZWxkcztcblxuXHRyZXR1cm4ge1xuXHRcdGZvcm1GaWVsZHM6IHN1cHByZXNzRmlsdGVyID8gZm9ybUZpZWxkcyA6IGFwcGx5RmlsdGVycyhcblx0XHRcdCdqZXQuZmIuZ2V0Rm9ybUZpZWxkc0Jsb2NrcycsIGZvcm1GaWVsZHMgKSxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWxlY3RGb3JtRmllbGRzOyIsImltcG9ydCBCYXNlUG9wb3Zlckl0ZW0gZnJvbSAnLi9CYXNlUG9wb3Zlckl0ZW0nO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEJhc2VGaWx0ZXIoKSB7XG5cdEJhc2VQb3BvdmVySXRlbS5jYWxsKCB0aGlzICk7XG59XG5cbkJhc2VGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVBvcG92ZXJJdGVtLnByb3RvdHlwZSApO1xuXG5CYXNlRmlsdGVyLnByb3RvdHlwZS5kb2NBcmd1bWVudCAgICAgID0gZmFsc2U7XG5CYXNlRmlsdGVyLnByb3RvdHlwZS5oZWxwICAgICAgICAgICAgID0gbnVsbDtcbkJhc2VGaWx0ZXIucHJvdG90eXBlLmlzU2VydmVyU2lkZSAgICAgPSBmYWxzZTtcbkJhc2VGaWx0ZXIucHJvdG90eXBlLmlzQ2xpZW50U2lkZSAgICAgPSBmYWxzZTtcbkJhc2VGaWx0ZXIucHJvdG90eXBlLmdldEFyZ3VtZW50c0xpc3QgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMuZG9jQXJndW1lbnQgfHwgIXRoaXMuZG9jQXJndW1lbnQubGVuZ3RoICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkoIHRoaXMuZG9jQXJndW1lbnQgKVxuXHQgICAgICAgICAgICAgPyB0aGlzLmRvY0FyZ3VtZW50XG5cdCAgICAgICAgICAgICA6IFsgdGhpcy5kb2NBcmd1bWVudCBdO1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gW107XG5cblx0Zm9yICggY29uc3QgbGlzdEVsZW1lbnQgb2YgbGlzdCApIHtcblx0XHRzd2l0Y2ggKCBsaXN0RWxlbWVudCApIHtcblx0XHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRjYXNlIFN0cmluZzpcblx0XHRcdFx0cmVzcG9uc2UucHVzaCggX18oICdTdHJpbmcnLCAnamV0LWZvcm0tYnVpbGRlcicgKSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRjYXNlIE51bWJlcjpcblx0XHRcdFx0cmVzcG9uc2UucHVzaCggX18oICdOdW1iZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2FycmF5Jzpcblx0XHRcdGNhc2UgQXJyYXk6XG5cdFx0XHRcdHJlc3BvbnNlLnB1c2goIF9fKCAnQXJyYXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2FueSc6XG5cdFx0XHRcdHJlc3BvbnNlLnB1c2goIF9fKCAnQW55dGhpbmcnLCAnamV0LWZvcm0tYnVpbGRlcicgKSApO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzcG9uc2Uuam9pbiggJyB8ICcgKTtcbn07XG5CYXNlRmlsdGVyLnByb3RvdHlwZS5mdWxsSGVscCAgICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoICF0aGlzLmRvY0FyZ3VtZW50ICYmICF0aGlzLmhlbHAgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBIZWxwID0gdGhpcy5oZWxwO1xuXHRjb25zdCBsaXN0ID0gdGhpcy5nZXRBcmd1bWVudHNMaXN0KCk7XG5cblx0cmV0dXJuIDw+XG5cdFx0eyBsaXN0ICYmIDxkaXYgc3R5bGU9eyB7XG5cdFx0XHRtYXJnaW5Cb3R0b206ICcwLjVlbScsXG5cdFx0fSB9PlxuXHRcdFx0eyBfXyggJ0FyZ3VtZW50czonLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyB9XG5cdFx0XHQ8Y29kZT57IGxpc3QgfTwvY29kZT5cblx0XHQ8L2Rpdj4gfVxuXHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIEhlbHAgPyBIZWxwIDogPEhlbHAvPiB9XG5cdDwvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VGaWx0ZXI7IiwiaW1wb3J0IEJhc2VQb3BvdmVySXRlbSBmcm9tICcuL0Jhc2VQb3BvdmVySXRlbSc7XG5cbmZ1bmN0aW9uIEJhc2VNYWNybygpIHtcblx0QmFzZVBvcG92ZXJJdGVtLmNhbGwoIHRoaXMgKTtcbn1cblxuQmFzZU1hY3JvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VQb3BvdmVySXRlbS5wcm90b3R5cGUgKTtcblxuLyoqXG4gKiBDYW4gYmUgdXNlZCBpbiBTZW5kIEVtYWlsIGFjdGlvbiAmIG90aGVyIGFjdGlvbnMuLi5cbiAqL1xuQmFzZU1hY3JvLnByb3RvdHlwZS5pc1NlcnZlclNpZGUgPSBmYWxzZTtcblxuLyoqXG4gKiBDYW4gYmUgdXNlZCBpbiBDYWxjdWxhdGVkIGZpZWxkICYgb3RoZXIgZmllbGQgYXR0cmlidXRlc1xuICovXG5CYXNlTWFjcm8ucHJvdG90eXBlLmlzQ2xpZW50U2lkZSA9IGZhbHNlO1xuXG4vKipcbiAqIEV4LjogQ3VycmVudERhdGVcbiAqL1xuQmFzZU1hY3JvLnByb3RvdHlwZS5uYW1lID0gJyc7XG5cbi8qKlxuICogV2l0aCBuYW1lc3BhY2VcbiAqIEV4LjogQ1RcbiAqL1xuQmFzZU1hY3JvLnByb3RvdHlwZS5uYW1lc3BhY2UgPSAnQ1QnO1xuXG4vKipcbiAqIEB0eXBlIHtudWxsIHwgc3RyaW5nIHwgRnVuY3Rpb259XG4gKi9cbkJhc2VNYWNyby5wcm90b3R5cGUuaGVscCA9IG51bGw7XG5cbkJhc2VNYWNyby5wcm90b3R5cGUuZnVsbEhlbHAgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmhlbHA7XG59O1xuXG5CYXNlTWFjcm8ucHJvdG90eXBlLmZ1bGxOYW1lID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gYCUkeyB0aGlzLm5hbWVzcGFjZSB9OjokeyB0aGlzLm5hbWUgfSVgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZU1hY3JvOyIsImZ1bmN0aW9uIEJhc2VQb3BvdmVySXRlbSgpIHtcblxufVxuXG5CYXNlUG9wb3Zlckl0ZW0ucHJvdG90eXBlID0ge1xuXHRmdWxsTmFtZSgpIHtcblx0fSxcblx0ZnVsbEhlbHAoKSB7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlUG9wb3Zlckl0ZW07IiwiaW1wb3J0IEV4dHJhTWFjcm9Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvRXh0cmFNYWNyb0NvbnRleHQnO1xuaW1wb3J0IEJhc2VNYWNybyBmcm9tICcuLi9hYnN0cmFjdC9CYXNlTWFjcm8nO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aGlzTWFjcm8gPSBuZXcgQmFzZU1hY3JvKCk7XG5cbnRoaXNNYWNyby5mdWxsTmFtZSA9ICgpID0+ICcldGhpcyUnO1xudGhpc01hY3JvLmZ1bGxIZWxwID0gKCkgPT4gX18oXG5cdCdSZXR1cm5zIGN1cnJlbnQgZmllbGQgdmFsdWUnLFxuXHQnamV0LWZvcm0tYnVpbGRlcicsXG4pO1xuXG5mdW5jdGlvbiBDbGllbnRTaWRlTWFjcm9zKCB7IGNoaWxkcmVuLCB3aXRoVGhpcyA9IGZhbHNlIH0gKSB7XG5cdGNvbnN0IGV4dHJhID0gdXNlU2VsZWN0KFxuXHRcdCggc2VsZWN0ICkgPT4gc2VsZWN0KCAnamV0LWZvcm1zL21hY3JvcycgKS5nZXRDbGllbnRNYWNyb3MoKSxcblx0XHRbXSxcblx0KTtcblxuXHRjb25zdCB2YWx1ZSA9IHdpdGhUaGlzXG5cdCAgICAgICAgICAgICAgPyB7IGV4dHJhLCBhZnRlckZpZWxkczogWyB0aGlzTWFjcm8gXSB9XG5cdCAgICAgICAgICAgICAgOiB7IGV4dHJhIH07XG5cblx0cmV0dXJuIDxFeHRyYU1hY3JvQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHZhbHVlIH0+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvRXh0cmFNYWNyb0NvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDbGllbnRTaWRlTWFjcm9zOyIsImltcG9ydCBQb3BvdmVySXRlbU1hY3JvIGZyb20gJy4vUG9wb3Zlckl0ZW1NYWNybyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQ2hpbGRyZW4sXG5cdCAgICAgIGNsb25lRWxlbWVudCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBQYW5lbEJvZHksXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gR3JvdXBJdGVtc1BvcG92ZXIoIHsgdGl0bGUsIGl0ZW1zLCBjaGlsZHJlbiwgaW5pdGlhbE9wZW4gfSApIHtcblx0Y29uc3QgZWxlbWVudHMgPSBpdGVtcy5tYXAoXG5cdFx0KCBpdGVtLCBpbmRleCApID0+IDxQb3BvdmVySXRlbU1hY3JvIGtleT17IGluZGV4IH0gY3VycmVudD17IGl0ZW0gfS8+LFxuXHQpO1xuXG5cdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgdGl0bGUgfSBpbml0aWFsT3Blbj17IGluaXRpYWxPcGVuIH0+XG5cdFx0PHVsIHN0eWxlPXsge1xuXHRcdFx0cGFkZGluZzogJzAgMC41ZW0nLFxuXHRcdH0gfT5cblx0XHRcdHsgQ2hpbGRyZW4ubWFwKCBlbGVtZW50cywgY3VycmVudCA9PiBjbG9uZUVsZW1lbnQoXG5cdFx0XHRcdGN1cnJlbnQsXG5cdFx0XHRcdHt9LFxuXHRcdFx0XHRjaGlsZHJlbixcblx0XHRcdCkgKSB9XG5cdFx0PC91bD5cblx0PC9QYW5lbEJvZHk+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cEl0ZW1zUG9wb3ZlcjsiLCJpbXBvcnQgUG9wb3Zlckl0ZW0gZnJvbSAnLi4vY29udGV4dC9Qb3BvdmVySXRlbSc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gTWFjcm9GaWVsZEl0ZW0oIHsgb25DbGljayB9ICkge1xuXHRjb25zdCBmaWVsZCA9IHVzZUNvbnRleHQoIFBvcG92ZXJJdGVtICk7XG5cblx0Y29uc3QgdmFsdWUgPSBmaWVsZC5mdWxsTmFtZVxuXHQgICAgICAgICAgICAgID8gZmllbGQuZnVsbE5hbWUoKVxuXHQgICAgICAgICAgICAgIDogYCUkeyBmaWVsZC52YWx1ZSB9JWA7XG5cblx0cmV0dXJuIDxCdXR0b25cblx0XHRpc0xpbmtcblx0XHRvbkNsaWNrPXsgKCkgPT4gb25DbGljayggdmFsdWUgKSB9XG5cdD5cblx0XHR7IHZhbHVlIH1cblx0PC9CdXR0b24+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNyb0ZpZWxkSXRlbTsiLCJpbXBvcnQgUG9wb3ZlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9Qb3BvdmVyQ29udGV4dCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG5cdCAgICAgIHVzZVJlZixcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG5cdCAgICAgIFBvcG92ZXIsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gTWFjcm9zQnV0dG9uVGVtcGxhdGUoIHtcblx0Y2hpbGRyZW4sXG5cdC4uLnByb3BzXG59ICkge1xuXHRjb25zdCBbIHNob3dQb3BvdmVyLCBzZXRTaG93UG9wb3ZlciBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cdGNvbnN0IGJ1dHRvblJlZiAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VSZWYoKTtcblxuXHRyZXR1cm4gPFBvcG92ZXJDb250ZXh0LlByb3ZpZGVyXG5cdFx0dmFsdWU9eyB7IHNob3dQb3BvdmVyLCBzZXRTaG93UG9wb3ZlciB9IH1cblx0PlxuXHRcdDxCdXR0b25cblx0XHRcdHJlZj17IGJ1dHRvblJlZiB9XG5cdFx0XHRpY29uPXsgJ2FkbWluLXRvb2xzJyB9XG5cdFx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxuXHRcdFx0aXNTbWFsbFxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYi1pcy10aGljaycgfVxuXHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dQb3BvdmVyKCBwcmV2ID0+ICFwcmV2ICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz5cblx0XHR7IHNob3dQb3BvdmVyICYmIChcblx0XHRcdDxQb3BvdmVyXG5cdFx0XHRcdGFuY2hvclJlZj17IGJ1dHRvblJlZi5jdXJyZW50IH1cblx0XHRcdFx0cG9zaXRpb249eyAndG9wLXN0YXJ0JyB9XG5cdFx0XHRcdG5vQXJyb3c9eyBmYWxzZSB9XG5cdFx0XHRcdGlzQWx0ZXJuYXRlXG5cdFx0XHRcdG9uRm9jdXNPdXRzaWRlPXsgZXZlbnQgPT4ge1xuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdCAqIFdlIHNob3VsZCBza2lwIGhhbmRsaW5nIGlmIGZvY3VzZWQgbm9kZSBpdCdzIG5vdCBlcXVhbHNcblx0XHRcdFx0XHQgKiB0aGUgYnV0dG9uIHdoaWNoIHRyaWdnZXJzIHBvcG92ZXJcblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRpZiAoIGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGJ1dHRvblJlZi5jdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0c2V0U2hvd1BvcG92ZXIoIGZhbHNlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IH1cblx0XHRcdFx0b25DbG9zZT17ICgpID0+IHNldFNob3dQb3BvdmVyKCBmYWxzZSApIH1cblx0XHRcdD5cblx0XHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHQ8L1BvcG92ZXI+XG5cdFx0KSB9XG5cdDwvUG9wb3ZlckNvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NCdXR0b25UZW1wbGF0ZTsiLCJpbXBvcnQgTWFjcm9zRmllbGRzVGVtcGxhdGUgZnJvbSAnLi9NYWNyb3NGaWVsZHNUZW1wbGF0ZSc7XG5pbXBvcnQgTWFjcm9GaWVsZEl0ZW0gZnJvbSAnLi9NYWNyb0ZpZWxkSXRlbSc7XG5pbXBvcnQgeyB1c2VGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWJsb2Nrcy10by1hY3Rpb25zJztcblxuZnVuY3Rpb24gTWFjcm9zRmllbGRzKCB7XG5cdG9uQ2xpY2sgPSAoKSA9PiB7fSxcblx0d2l0aEN1cnJlbnQgPSBmYWxzZSxcblx0Li4ucHJvcHNcbn0gKSB7XG5cdGNvbnN0IGZpZWxkcyA9IHVzZUZpZWxkcyggeyBleGNsdWRlQ3VycmVudDogIXdpdGhDdXJyZW50IH0gKTtcblxuXHRyZXR1cm4gPE1hY3Jvc0ZpZWxkc1RlbXBsYXRlXG5cdFx0d2l0aEN1cnJlbnQ9eyB3aXRoQ3VycmVudCB9XG5cdFx0ZmllbGRzPXsgZmllbGRzIH1cblx0XHR7IC4uLnByb3BzIH1cblx0PlxuXHRcdDxNYWNyb0ZpZWxkSXRlbSBvbkNsaWNrPXsgb25DbGljayB9Lz5cblx0PC9NYWNyb3NGaWVsZHNUZW1wbGF0ZT47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hY3Jvc0ZpZWxkczsiLCJpbXBvcnQgTWFjcm9zQnV0dG9uVGVtcGxhdGUgZnJvbSAnLi9NYWNyb3NCdXR0b25UZW1wbGF0ZSc7XG5pbXBvcnQgRXh0cmFNYWNyb0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9FeHRyYU1hY3JvQ29udGV4dCc7XG5pbXBvcnQgR3JvdXBJdGVtc1BvcG92ZXIgZnJvbSAnLi9Hcm91cEl0ZW1zUG9wb3Zlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBNYWNyb3NGaWVsZHNUZW1wbGF0ZSgge1xuXHRjaGlsZHJlbixcblx0ZmllbGRzLFxuXHQuLi5wcm9wc1xufSApIHtcblxuXHQvKipcblx0ICogQHR5cGUge3tcblx0ICogZXh0cmE6IEJhc2VNYWNyb1tdLFxuXHQgKiBmaWx0ZXJzOiBCYXNlRmlsdGVyW11cblx0ICogYmVmb3JlRmllbGRzOiBCYXNlUG9wb3Zlckl0ZW1bXVxuXHQgKiBhZnRlckZpZWxkczogQmFzZVBvcG92ZXJJdGVtW11cblx0ICogfX1cblx0ICovXG5cdGNvbnN0IG1hY3JvcyA9IHVzZUNvbnRleHQoIEV4dHJhTWFjcm9Db250ZXh0ICk7XG5cblx0Y29uc3QgZnVsbEZpZWxkcyA9IFtcblx0XHQuLi4oXG5cdFx0XHRtYWNyb3MuYmVmb3JlRmllbGRzID8/IFtdXG5cdFx0KSxcblx0XHQuLi5maWVsZHMsXG5cdFx0Li4uKFxuXHRcdFx0bWFjcm9zLmFmdGVyRmllbGRzID8/IFtdXG5cdFx0KSxcblx0XTtcblxuXHRpZiAoICFmdWxsRmllbGRzLmxlbmd0aCAmJlxuXHRcdCFtYWNyb3M/LmV4dHJhPy5sZW5ndGggJiZcblx0XHQhbWFjcm9zPy5maWx0ZXJzPy5sZW5ndGhcblx0KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPE1hY3Jvc0J1dHRvblRlbXBsYXRlIHsgLi4ucHJvcHMgfT5cblx0XHR7IEJvb2xlYW4oIGZ1bGxGaWVsZHMubGVuZ3RoICkgJiYgPEdyb3VwSXRlbXNQb3BvdmVyXG5cdFx0XHR0aXRsZT17IF9fKCAnRmllbGRzOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGl0ZW1zPXsgZnVsbEZpZWxkcyB9XG5cdFx0XHRpbml0aWFsT3Blbj17IHRydWUgfVxuXHRcdD5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvR3JvdXBJdGVtc1BvcG92ZXI+IH1cblx0XHR7IEJvb2xlYW4oIG1hY3Jvcz8uZXh0cmE/Lmxlbmd0aCApICYmIDxHcm91cEl0ZW1zUG9wb3ZlclxuXHRcdFx0dGl0bGU9eyBfXyggJ0V4dHJhIG1hY3JvczonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRpdGVtcz17IG1hY3Jvcy5leHRyYSB9XG5cdFx0PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9Hcm91cEl0ZW1zUG9wb3Zlcj4gfVxuXHRcdHsgQm9vbGVhbiggbWFjcm9zPy5maWx0ZXJzPy5sZW5ndGggKSAmJiA8R3JvdXBJdGVtc1BvcG92ZXJcblx0XHRcdHRpdGxlPXsgX18oICdGaWx0ZXJzOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGl0ZW1zPXsgbWFjcm9zLmZpbHRlcnMgfVxuXHRcdD5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvR3JvdXBJdGVtc1BvcG92ZXI+IH1cblx0PC9NYWNyb3NCdXR0b25UZW1wbGF0ZT47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjcm9zRmllbGRzVGVtcGxhdGU7IiwiaW1wb3J0IFBvcG92ZXJJdGVtIGZyb20gJy4uL2NvbnRleHQvUG9wb3Zlckl0ZW0nO1xuaW1wb3J0IEJhc2VQb3BvdmVySXRlbSBmcm9tICcuLi9hYnN0cmFjdC9CYXNlUG9wb3Zlckl0ZW0nO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIEJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIEBwYXJhbSByb290MCAgICAgICAgICB7QmFzZVBvcG92ZXJJdGVtfVxuICogQHBhcmFtIHJvb3QwLmN1cnJlbnRcbiAqIEBwYXJhbSByb290MC5jaGlsZHJlblxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFBvcG92ZXJJdGVtTWFjcm8oIHsgY3VycmVudCwgY2hpbGRyZW4gfSApIHtcblx0Y29uc3QgWyBzaG93SGVscCwgc2V0U2hvd0hlbHAgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdGlmICggIShcblx0XHRjdXJyZW50IGluc3RhbmNlb2YgQmFzZVBvcG92ZXJJdGVtXG5cdCkgKSB7XG5cdFx0cmV0dXJuIDxsaT5cblx0XHRcdDxQb3BvdmVySXRlbS5Qcm92aWRlciB2YWx1ZT17IGN1cnJlbnQgfT5cblx0XHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHQ8L1BvcG92ZXJJdGVtLlByb3ZpZGVyPlxuXHRcdDwvbGk+O1xuXHR9XG5cblx0Y29uc3QgTWFjcm9IZWxwID0gY3VycmVudC5mdWxsSGVscC5iaW5kKCBjdXJyZW50ICk7XG5cblx0cmV0dXJuIDxsaT5cblx0XHQ8UG9wb3Zlckl0ZW0uUHJvdmlkZXIgdmFsdWU9eyBjdXJyZW50IH0+XG5cdFx0XHQ8ZGl2IHN0eWxlPXsge1xuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRnYXA6ICcwLjZlbScsXG5cdFx0XHR9IH0+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcblx0XHRcdFx0XHRpY29uPXsgc2hvd0hlbHBcblx0XHRcdFx0XHQgICAgICAgPyAnYXJyb3ctZG93bidcblx0XHRcdFx0XHQgICAgICAgOiAnYXJyb3ctcmlnaHQnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiLWlzLXRoaWNrJyB9XG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dIZWxwKCBwcmV2ID0+ICFwcmV2ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyBzaG93SGVscCAmJiA8TWFjcm9IZWxwLz4gfVxuXHRcdDwvUG9wb3Zlckl0ZW0uUHJvdmlkZXI+XG5cdDwvbGk+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVySXRlbU1hY3JvOyIsImltcG9ydCBFeHRyYU1hY3JvQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0V4dHJhTWFjcm9Db250ZXh0JztcbmltcG9ydCB7IHVzZVJlcXVlc3RGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuXG5mdW5jdGlvbiBTZXJ2ZXJTaWRlTWFjcm9zKCB7IGNoaWxkcmVuIH0gKSB7XG5cdGNvbnN0IHJlcXVlc3RGaWVsZHMgPSB1c2VSZXF1ZXN0RmllbGRzKCk7XG5cblx0cmV0dXJuIDxFeHRyYU1hY3JvQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHsgYWZ0ZXJGaWVsZHM6IHJlcXVlc3RGaWVsZHMgfSB9PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0V4dHJhTWFjcm9Db250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyU2lkZU1hY3JvczsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCBFeHRyYU1hY3JvQ29udGV4dCAgICA9IGNyZWF0ZUNvbnRleHQoIFtdICk7XG5cbmV4cG9ydCBkZWZhdWx0IEV4dHJhTWFjcm9Db250ZXh0OyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IFBvcG92ZXJDb250ZXh0ICAgID0gY3JlYXRlQ29udGV4dCggZmFsc2UgKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlckNvbnRleHQ7IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgUG9wb3Zlckl0ZW0gICAgICAgPSBjcmVhdGVDb250ZXh0KCB7IG5hbWU6ICcnIH0gKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3Zlckl0ZW07IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQWRkRGF5RmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICdhZGREYXknO1xuXHR0aGlzLmRvY0FyZ3VtZW50ICA9IE51bWJlcjtcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKFxuXHRcdGBBZGRzIHRoZSBwYXNzZWQgbnVtYmVyIG9mIGRheXMgdmlhIGFuIGFyZ3VtZW50IHRvIGEgbWFjcm8gdGhhdCByZXR1cm5zIGEgZGF0ZSBvciBhIHRpbWVzdGFtcC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KTtcbn1cblxuQWRkRGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZERheUZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBBZGRNb250aEZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAnYWRkTW9udGgnO1xuXHR0aGlzLmRvY0FyZ3VtZW50ICA9IE51bWJlcjtcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKFxuXHRcdGBBZGRzIHRoZSBwYXNzZWQgbnVtYmVyIG9mIG1vbnRocyB2aWEgYW4gYXJndW1lbnQgdG8gYSBtYWNybyB0aGF0IHJldHVybnMgYSBkYXRlIG9yIGEgdGltZXN0YW1wLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpO1xufVxuXG5BZGRNb250aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRNb250aEZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBBZGRZZWFyRmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICdhZGRZZWFyJztcblx0dGhpcy5kb2NBcmd1bWVudCAgPSBOdW1iZXI7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyhcblx0XHRgQWRkcyB0aGUgcGFzc2VkIG51bWJlciBvZiB5ZWFycyB0aHJvdWdoIGFuIGFyZ3VtZW50IHRvIGEgbWFjcm8gdGhhdCByZXR1cm5zIGEgZGF0ZSBvciBhIHRpbWVzdGFtcC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KTtcbn1cblxuQWRkWWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRZZWFyRmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEZhbGxiYWNrRmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICdpZkVtcHR5Jztcblx0dGhpcy5kb2NBcmd1bWVudCAgPSAnYW55Jztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKFxuXHRcdGBJZiB0aGUgbWFjcm8gcmV0dXJucyBhbiBlbXB0eSB2YWx1ZSwgdGhlbiB0aGUgZmlsdGVyIHJldHVybnMgdGhlIHZhbHVlIHBhc3NlZCBpbiB0aGUgYXJndW1lbnRgLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KTtcbn1cblxuRmFsbGJhY2tGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgRmFsbGJhY2tGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gTGVuZ3RoRmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICdsZW5ndGgnO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oXG5cdFx0YFJldHVybnMgdGhlIGxlbmd0aCBvZiBhIHN0cmluZyBvciBhcnJheWAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpO1xufVxuXG5MZW5ndGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTGVuZ3RoRmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFN1YnRyYWN0RGF5RmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICdzdWJEYXknO1xuXHR0aGlzLmRvY0FyZ3VtZW50ICA9IE51bWJlcjtcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKFxuXHRcdGBTdWJ0cmFjdHMgdGhlIG51bWJlciBvZiBkYXlzIGJ5IGFyZ3VtZW50IGZyb20gYSBtYWNybyB0aGF0IHJldHVybnMgYSBkYXRlIG9yIHRpbWVzdGFtcC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KTtcbn1cblxuU3VidHJhY3REYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3REYXlGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gU3VidHJhY3RNb250aEZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAnc3ViTW9udGgnO1xuXHR0aGlzLmRvY0FyZ3VtZW50ICA9IE51bWJlcjtcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKFxuXHRcdGBTdWJ0cmFjdHMgdGhlIG51bWJlciBvZiBtb250aHMgYnkgYXJndW1lbnQgZnJvbSBhIG1hY3JvIHRoYXQgcmV0dXJucyBhIGRhdGUgb3IgdGltZXN0YW1wLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpO1xufVxuXG5TdWJ0cmFjdE1vbnRoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0TW9udGhGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gU3VidHJhY3RZZWFyRmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICdzdWJZZWFyJztcblx0dGhpcy5kb2NBcmd1bWVudCAgPSBOdW1iZXI7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyhcblx0XHRgU3VidHJhY3RzIHRoZSBudW1iZXIgb2YgeWVhcnMgYnkgYXJndW1lbnQgZnJvbSBhIG1hY3JvIHRoYXQgcmV0dXJucyBhIGRhdGUgb3IgdGltZXN0YW1wLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpO1xufVxuXG5TdWJ0cmFjdFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RZZWFyRmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFRvRGF0ZUZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAndG9EYXRlJztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9ICgpID0+IDw+XG5cdFx0eyBfXyhcblx0XHRcdGBHZXRzIHRoZSB0aW1lc3RhbXAgZnJvbSB0aGUgbWFjcm8gYW5kIGZvcm1hdHMgaXQgYWNjb3JkaW5nIHRvIHRoZSBmb3JtYXQgb2YgdGhlIERhdGUgRmllbGQuYCxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpIH1cblx0XHQ8aHIvPlxuXHRcdHsgX18oICdFeGFtcGxlOicsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnIH1cblx0XHQ8Y29kZT4yMDIyLTAyLTI0PC9jb2RlPlxuXHQ8Lz47XG59XG5cblRvRGF0ZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0RhdGVGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gVG9EYXRlVGltZUZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAndG9EYXRlVGltZSc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSAoKSA9PiA8PlxuXHRcdHsgX18oXG5cdFx0XHRgR2V0cyB0aGUgdGltZXN0YW1wIGZyb20gdGhlIG1hY3JvIGFuZCBmb3JtYXRzIGl0IGFjY29yZGluZyB0byB0aGUgZm9ybWF0IG9mIHRoZSBEYXRldGltZSBGaWVsZC5gLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCkgfVxuXHRcdDxoci8+XG5cdFx0eyBfXyggJ0V4YW1wbGU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxuXHRcdDxjb2RlPjIwMjItMDItMjRUMDQ6MjU8L2NvZGU+XG5cdDwvPjtcbn1cblxuVG9EYXRlVGltZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0RhdGVUaW1lRmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFRvVGltZUZpbHRlcigpIHtcblx0QmFzZUZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mdWxsTmFtZSAgICAgPSAoKSA9PiAndG9UaW1lJztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9ICgpID0+IDw+XG5cdFx0eyBfXyhcblx0XHRcdGBHZXRzIHRoZSB0aW1lc3RhbXAgZnJvbSB0aGUgbWFjcm8gYW5kIGZvcm1hdHMgaXQgYWNjb3JkaW5nIHRvIHRoZSBmb3JtYXQgb2YgdGhlIFRpbWUgRmllbGQuYCxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpIH1cblx0XHQ8aHIvPlxuXHRcdHsgX18oICdFeGFtcGxlOicsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnIH1cblx0XHQ8Y29kZT4wNDoyNTwvY29kZT5cblx0PC8+O1xufVxuXG5Ub1RpbWVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9UaW1lRmlsdGVyOyIsIi8qKlxuICogQHBhcmFtIGluaXRpYWwgICAgIHtTdHJpbmd9XG4gKiBAcGFyYW0gbmFtZSAgICAgICAge1N0cmluZ31cbiAqIEBwYXJhbSBub2RlRWxlbWVudCB7SFRNTElucHV0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0TWFjcm8oIGluaXRpYWwsIG5hbWUsIG5vZGVFbGVtZW50ICkge1xuXHRjb25zdCBzdGFydCA9IG5vZGVFbGVtZW50LnNlbGVjdGlvblN0YXJ0LFxuXHQgICAgICBlbmQgICA9IG5vZGVFbGVtZW50LnNlbGVjdGlvbkVuZDtcblxuXHRpbml0aWFsID0gaW5pdGlhbCA/PyAnJztcblxuXHRsZXQgc3RhcnRTdHJpbmcgPSBpbml0aWFsLnNsaWNlKCAwLCBzdGFydCApO1xuXHRjb25zdCBlbmRTdHJpbmcgPSBpbml0aWFsLnNsaWNlKCBlbmQgKTtcblxuXHRzdGFydFN0cmluZyA9IHN0YXJ0U3RyaW5nICsgbmFtZTtcblxuXHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0bm9kZUVsZW1lbnQuZm9jdXMoKTtcblx0XHRub2RlRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0U3RyaW5nLmxlbmd0aDtcblx0XHRub2RlRWxlbWVudC5zZWxlY3Rpb25FbmQgICA9IHN0YXJ0U3RyaW5nLmxlbmd0aDtcblx0fSApO1xuXG5cdHJldHVybiBzdGFydFN0cmluZyArIGVuZFN0cmluZztcbn1cblxuZXhwb3J0IHsgaW5zZXJ0TWFjcm8gfTsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgaW5zZXJ0TWFjcm8gfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVJlZixcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5mdW5jdGlvbiB1c2VJbnNlcnRNYWNybyggYXR0ck5hbWUgKSB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgdXBkYXRlQXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgaW5pdGlhbCA9IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gPz8gJyc7XG5cblx0Y29uc3QgaW5wdXQgID0gdXNlUmVmKCk7XG5cdGNvbnN0IHVwZGF0ZSA9IG1hY3JvID0+IHtcblx0XHR1cGRhdGVBdHRyaWJ1dGVzKCB7XG5cdFx0XHRbIGF0dHJOYW1lIF06IGluc2VydE1hY3JvKCBpbml0aWFsLCBtYWNybywgaW5wdXQuY3VycmVudCApLFxuXHRcdH0gKTtcblx0fTtcblxuXHRyZXR1cm4gWyBpbnB1dCwgdXBkYXRlIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUluc2VydE1hY3JvOyIsImltcG9ydCBCYXNlTWFjcm8gZnJvbSAnLi4vYWJzdHJhY3QvQmFzZU1hY3JvJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQ3VycmVudERhdGVNYWNybygpIHtcblx0QmFzZU1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLm5hbWUgICAgICAgICA9ICdDdXJyZW50RGF0ZSc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmZ1bGxIZWxwID0gKCkgPT4gPD5cblx0XHR7IF9fKCAnUmV0dXJucyB0aGUgY3VycmVudCB0aW1lc3RhbXAuIFJlcGxhY2luZycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHR7ICcgJyB9XG5cdFx0PGNvZGU+RGF0ZS5ub3coKTwvY29kZT5cblx0PC8+O1xufVxuXG5DdXJyZW50RGF0ZU1hY3JvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudERhdGVNYWNybzsiLCJpbXBvcnQgQmFzZU1hY3JvIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VNYWNybyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIERheUluU2VjTWFjcm8oKSB7XG5cdEJhc2VNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5uYW1lICAgICAgICAgPSAnRGF5X0luX1NlYyc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyggJ051bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gb25lIGRheScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xufVxuXG5EYXlJblNlY01hY3JvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF5SW5TZWNNYWNybzsiLCJpbXBvcnQgQmFzZU1hY3JvIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VNYWNybyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIE1pbkluU2VjTWFjcm8oKSB7XG5cdEJhc2VNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5uYW1lICAgICAgICAgPSAnTWluX0luX1NlYyc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyhcblx0XHQnTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBvbmUgbWludXRlJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCk7XG59XG5cbk1pbkluU2VjTWFjcm8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZU1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBNaW5JblNlY01hY3JvOyIsImltcG9ydCBCYXNlTWFjcm8gZnJvbSAnLi4vYWJzdHJhY3QvQmFzZU1hY3JvJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gTW9udGhJblNlY01hY3JvKCkge1xuXHRCYXNlTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubmFtZSAgICAgICAgID0gJ01vbnRoX0luX1NlYyc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyggJ051bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gb25lIG1vbnRoJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG59XG5cbk1vbnRoSW5TZWNNYWNyby5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRoSW5TZWNNYWNybzsiLCJpbXBvcnQgQmFzZU1hY3JvIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VNYWNybyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFllYXJJblNlY01hY3JvKCkge1xuXHRCYXNlTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubmFtZSAgICAgICAgID0gJ1llYXJfSW5fU2VjJztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKCAnTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBvbmUgeWVhcicsICdqZXQtZm9ybS1idWlsZGVyJyApO1xufVxuXG5ZZWFySW5TZWNNYWNyby5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJJblNlY01hY3JvOyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyTWFjcm8oIGl0ZW1zLCBpc0NsaWVudCA9IHRydWUgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5yZWdpc3Rlck1hY3JvLFxuXHRcdFx0aXRlbXMsXG5cdFx0XHRpc0NsaWVudCxcblx0XHR9O1xuXHR9LFxuXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcblx0cmVnaXN0ZXJNYWNybzogJ1JFR0lTVEVSX01BQ1JPJyxcblx0cmVnaXN0ZXJGaWx0ZXI6ICdSRUdJU1RFUl9GSUxURVInLFxufTtcblxuXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBCYXNlTWFjcm8gZnJvbSAnLi4vYWJzdHJhY3QvQmFzZU1hY3JvJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRbIGNvbnN0YW50cy5yZWdpc3Rlck1hY3JvIF0oIHN0YXRlLCBhY3Rpb24gKSB7XG5cdFx0Y29uc3QgeyBpdGVtcywgaXNDbGllbnQgfSA9IGFjdGlvbjtcblx0XHRjb25zdCBtYWNyb3MgICAgICAgICAgICAgID0gQXJyYXkuaXNBcnJheSggaXRlbXMgKSA/IGl0ZW1zIDogWyBpdGVtcyBdO1xuXG5cdFx0Zm9yICggY29uc3QgbWFjcm8gb2YgbWFjcm9zICkge1xuXHRcdFx0aWYgKCBtYWNybyBpbnN0YW5jZW9mIEJhc2VNYWNybyApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdeXl4gSW52YWxpZCBtYWNybyBpdGVtIF5eXicgKTtcblx0XHR9XG5cblx0XHRpZiAoIGlzQ2xpZW50ICkge1xuXHRcdFx0c3RhdGUuY2xpZW50TWFjcm9zLnB1c2goIC4uLm1hY3JvcyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHN0YXRlLnNlcnZlck1hY3Jvcy5wdXNoKCAuLi5tYWNyb3MgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG59OyIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmNvbnN0IHsgY3JlYXRlUmVkdXhTdG9yZSB9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdXhTdG9yZSggJ2pldC1mb3Jtcy9tYWNyb3MnLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9ycyxcbn0gKTtcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcbmltcG9ydCBDdXJyZW50RGF0ZU1hY3JvIGZyb20gJy4uL21hY3Jvcy9DdXJyZW50RGF0ZU1hY3JvJztcbmltcG9ydCBNaW5JblNlY01hY3JvIGZyb20gJy4uL21hY3Jvcy9NaW5JblNlY01hY3JvJztcbmltcG9ydCBNb250aEluU2VjTWFjcm8gZnJvbSAnLi4vbWFjcm9zL01vbnRoSW5TZWNNYWNybyc7XG5pbXBvcnQgRGF5SW5TZWNNYWNybyBmcm9tICcuLi9tYWNyb3MvRGF5SW5TZWNNYWNybyc7XG5pbXBvcnQgWWVhckluU2VjTWFjcm8gZnJvbSAnLi4vbWFjcm9zL1llYXJJblNlY01hY3JvJztcbmltcG9ydCBBZGREYXlGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9BZGREYXlGaWx0ZXInO1xuaW1wb3J0IEFkZE1vbnRoRmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvQWRkTW9udGhGaWx0ZXInO1xuaW1wb3J0IEFkZFllYXJGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9BZGRZZWFyRmlsdGVyJztcbmltcG9ydCBGYWxsYmFja0ZpbHRlciBmcm9tICcuLi9maWx0ZXJzL0ZhbGxiYWNrRmlsdGVyJztcbmltcG9ydCBMZW5ndGhGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9MZW5ndGhGaWx0ZXInO1xuaW1wb3J0IFRvRGF0ZUZpbHRlciBmcm9tICcuLi9maWx0ZXJzL1RvRGF0ZUZpbHRlcic7XG5pbXBvcnQgVG9EYXRlVGltZUZpbHRlciBmcm9tICcuLi9maWx0ZXJzL1RvRGF0ZVRpbWVGaWx0ZXInO1xuaW1wb3J0IFRvVGltZUZpbHRlciBmcm9tICcuLi9maWx0ZXJzL1RvVGltZUZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3REYXlGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9TdWJ0cmFjdERheUZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3RNb250aEZpbHRlciBmcm9tICcuLi9maWx0ZXJzL1N1YnRyYWN0TW9udGhGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0WWVhckZpbHRlciBmcm9tICcuLi9maWx0ZXJzL1N1YnRyYWN0WWVhckZpbHRlcic7XG5cbi8qKlxuICpcbiAqIEB0eXBlIHt7XG4gKiBtYWNyb3M6IEJhc2VNYWNyb1tdLFxuICogZmlsdGVyczogQmFzZUZpbHRlcltdXG4gKiB9fVxuICovXG5jb25zdCBERUZBVUxUX1NUQVRFID0ge1xuXHRtYWNyb3M6IFtcblx0XHRuZXcgQ3VycmVudERhdGVNYWNybygpLFxuXHRcdG5ldyBNaW5JblNlY01hY3JvKCksXG5cdFx0bmV3IERheUluU2VjTWFjcm8oKSxcblx0XHRuZXcgTW9udGhJblNlY01hY3JvKCksXG5cdFx0bmV3IFllYXJJblNlY01hY3JvKCksXG5cdF0sXG5cdGZpbHRlcnM6IFtcblx0XHRuZXcgRmFsbGJhY2tGaWx0ZXIoKSxcblx0XHRuZXcgTGVuZ3RoRmlsdGVyKCksXG5cdFx0bmV3IEFkZERheUZpbHRlcigpLFxuXHRcdG5ldyBBZGRNb250aEZpbHRlcigpLFxuXHRcdG5ldyBBZGRZZWFyRmlsdGVyKCksXG5cdFx0bmV3IFN1YnRyYWN0RGF5RmlsdGVyKCksXG5cdFx0bmV3IFN1YnRyYWN0TW9udGhGaWx0ZXIoKSxcblx0XHRuZXcgU3VidHJhY3RZZWFyRmlsdGVyKCksXG5cdFx0bmV3IFRvRGF0ZUZpbHRlcigpLFxuXHRcdG5ldyBUb0RhdGVUaW1lRmlsdGVyKCksXG5cdFx0bmV3IFRvVGltZUZpbHRlcigpLFxuXHRdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCBzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIGFjdGlvbiApIHtcblx0Y29uc3QgY2FsbGJhY2sgPSBkaXNwYXRjaGVyc1sgYWN0aW9uPy50eXBlIF07XG5cblx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gY2FsbGJhY2soIHN0YXRlLCBhY3Rpb24gKTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn0iLCJjb25zdCBzZWxlY3RvcnMgPSB7XG5cdGdldENsaWVudE1hY3Jvcyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLm1hY3Jvcy5maWx0ZXIoXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwYXJhbSBtYWNybyB7QmFzZU1hY3JvfVxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiAoIG1hY3JvICkge1xuXHRcdFx0XHRyZXR1cm4gbWFjcm8uaXNDbGllbnRTaWRlO1xuXHRcdFx0fSxcblx0XHQpO1xuXHR9LFxuXHRnZXRTZXJ2ZXJNYWNyb3MoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5tYWNyb3MuZmlsdGVyKFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcGFyYW0gbWFjcm8ge0Jhc2VNYWNyb31cblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gKCBtYWNybyApIHtcblx0XHRcdFx0cmV0dXJuIG1hY3JvLmlzU2VydmVyU2lkZTtcblx0XHRcdH0sXG5cdFx0KTtcblx0fSxcblx0Z2V0Q2xpZW50RmlsdGVycyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmZpbHRlcnMuZmlsdGVyKFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcGFyYW0gbWFjcm8ge0Jhc2VGaWx0ZXJ9XG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uICggbWFjcm8gKSB7XG5cdFx0XHRcdHJldHVybiBtYWNyby5pc0NsaWVudFNpZGU7XG5cdFx0XHR9LFxuXHRcdCk7XG5cdH0sXG5cdGdldFNlcnZlckZpbHRlcnMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5maWx0ZXJzLmZpbHRlcihcblx0XHRcdC8qKlxuXHRcdFx0ICogQHBhcmFtIG1hY3JvIHtCYXNlRmlsdGVyfVxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiAoIG1hY3JvICkge1xuXHRcdFx0XHRyZXR1cm4gbWFjcm8uaXNTZXJ2ZXJTaWRlO1xuXHRcdFx0fSxcblx0XHQpO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5zZWxlY3RvcnMsXG59OyIsImNvbnN0IHdhaXRGb3JFZGl0b3IgPSBhc3luYyAoKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0Y29uc3QgcG9zdFR5cGUgPSB3cC5kYXRhLnNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRDdXJyZW50UG9zdFR5cGUoKTtcblx0XHRcdGlmIChwb3N0VHlwZSkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fVxuXHRcdH0sIDEwMCk7XG5cdH0pO1xufTtcblxuY29uc3QgZ2V0TWV0YSA9ICgpID0+IHtcblx0Y29uc3QgeyBzZWxlY3QgfSA9IHdwLmRhdGE7XG5cdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKTtcbn07XG5cbmNvbnN0IGVkaXRNZXRhID0gKCBuYW1lLCBvYmplY3RWYWx1ZSApID0+IHtcblx0Y29uc3QgeyBkaXNwYXRjaCB9ID0gd3AuZGF0YTtcblxuXHRjb25zdCB7IGVkaXRQb3N0IH0gPSBkaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xuXHRjb25zdCBmb3JtQnVpbGRlck1ldGEgPSBnZXRNZXRhKCk7XG5cblx0ZWRpdFBvc3QoIHtcblx0XHRtZXRhOiAoXG5cdFx0XHR7XG5cdFx0XHRcdC4uLmZvcm1CdWlsZGVyTWV0YSxcblx0XHRcdFx0WyBuYW1lIF06IEpTT04uc3RyaW5naWZ5KCBvYmplY3RWYWx1ZSApLFxuXHRcdFx0fVxuXHRcdCksXG5cdH0gKTtcbn07XG5cbmNvbnN0IGdldEFjdGl2ZUFjdGlvbnMgPSBhY3Rpb25zID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBbIGFjdGlvbklkLCB7IGFjdGl2ZSA9IGZhbHNlIH0gXSBvZiBPYmplY3QuZW50cmllcyggYWN0aW9ucyApICkge1xuXHRcdGlmICggISBhY3RpdmUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmVzcG9uc2UucHVzaCggKyBhY3Rpb25JZCApO1xuXHR9XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0R2F0ZXdheXNBY3Rpb25zID0gKCkgPT4ge1xuXHRjb25zdCBmb3JtQnVpbGRlck1ldGEgPSBnZXRNZXRhKCk7XG5cblx0bGV0IGdhdGV3YXlzID0ge30sXG5cdFx0YWN0aW9ucyA9IFtdO1xuXG5cdHRyeSB7XG5cdFx0Z2F0ZXdheXMgPSBKU09OLnBhcnNlKCBmb3JtQnVpbGRlck1ldGEuX2pmX2dhdGV3YXlzICk7XG5cdH0gY2F0Y2ggKCBlcnJvciApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRpZiAoIDEgPT09IGdhdGV3YXlzLmxhc3RfbWlncmF0ZSApIHtcblx0XHR0aHJvdyAnbWlncmF0ZWQnO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRhY3Rpb25zID0gSlNPTi5wYXJzZSggZm9ybUJ1aWxkZXJNZXRhLl9qZl9hY3Rpb25zICk7XG5cdH0gY2F0Y2ggKCBlcnJvciApIHtcblx0XHRyZXR1cm4gWyBnYXRld2F5cyBdO1xuXHR9XG5cblx0cmV0dXJuIFsgZ2F0ZXdheXMsIGFjdGlvbnMgXTtcbn07XG5cbmNvbnN0IG1pZ3JhdGUgPSAoIGdhdGV3YXlzLCBhY3Rpb25zICkgPT4ge1xuXHRjb25zdCBvblN1Y2Nlc3MgPSBnZXRBY3RpdmVBY3Rpb25zKCBnYXRld2F5cy5ub3RpZmljYXRpb25zX3N1Y2Nlc3MgPz8ge30gKTtcblx0Y29uc3Qgb25GYWlsZWQgPSBnZXRBY3RpdmVBY3Rpb25zKCBnYXRld2F5cy5ub3RpZmljYXRpb25zX2ZhaWxlZCA/PyB7fSApO1xuXHRjb25zdCBvbkJlZm9yZSA9IGdldEFjdGl2ZUFjdGlvbnMoIGdhdGV3YXlzLm5vdGlmaWNhdGlvbnNfYmVmb3JlID8/IHt9ICk7XG5cdGNvbnN0IHVzZVJlZGlyZWN0ID0gZ2F0ZXdheXMudXNlX3N1Y2Nlc3NfcmVkaXJlY3QgPz8gZmFsc2U7XG5cblx0bGV0IGhhc1JlZGlyZWN0ID0gZmFsc2U7XG5cblx0aWYgKCAhIG9uU3VjY2Vzcy5sZW5ndGggJiYgISBvbkZhaWxlZC5sZW5ndGggJiYgISBvbkJlZm9yZS5sZW5ndGggJiYgISB1c2VSZWRpcmVjdCApIHtcblx0XHR0aHJvdyAnbm90aGluZ190b19taWdyYXRlJztcblx0fVxuXG5cdHJldHVybiBhY3Rpb25zLm1hcCggYWN0aW9uID0+IHtcblx0XHRhY3Rpb24uZXZlbnRzID0gYWN0aW9uLmV2ZW50cyA/PyBbXTtcblxuXHRcdGlmICggb25TdWNjZXNzLmluY2x1ZGVzKCBhY3Rpb24uaWQgKSApIHtcblx0XHRcdGFjdGlvbi5ldmVudHMucHVzaCggJ0dBVEVXQVkuU1VDQ0VTUycgKTtcblx0XHR9XG5cdFx0aWYgKCBvbkZhaWxlZC5pbmNsdWRlcyggYWN0aW9uLmlkICkgKSB7XG5cdFx0XHRhY3Rpb24uZXZlbnRzLnB1c2goICdHQVRFV0FZLkZBSUxFRCcgKTtcblx0XHR9XG5cdFx0aWYgKCBvbkJlZm9yZS5pbmNsdWRlcyggYWN0aW9uLmlkICkgKSB7XG5cdFx0XHRhY3Rpb24uZXZlbnRzLnB1c2goICdERUZBVUxULlBST0NFU1MnICk7XG5cdFx0fVxuXHRcdGlmICggdXNlUmVkaXJlY3QgJiYgISBoYXNSZWRpcmVjdCAmJiAncmVkaXJlY3RfdG9fcGFnZScgPT09IGFjdGlvbi50eXBlICkge1xuXHRcdFx0YWN0aW9uLmV2ZW50cy5wdXNoKCAnR0FURVdBWS5TVUNDRVNTJyApO1xuXHRcdFx0aGFzUmVkaXJlY3QgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY3Rpb247XG5cdH0gKTtcbn07XG5cbmNvbnN0IHJ1bkV2ZW50ID0gYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCB3YWl0Rm9yRWRpdG9yKCk7XG5cblx0bGV0IGdhdGV3YXlzID0ge30sIGFjdGlvbnMgPSBbXTtcblxuXHR0cnkge1xuXHRcdFsgZ2F0ZXdheXMgPSB7fSwgYWN0aW9ucyA9IFtdIF0gPSBnZXRHYXRld2F5c0FjdGlvbnMoKTtcblx0fSBjYXRjaCAoIGVycm9yICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGdhdGV3YXlzLmxhc3RfbWlncmF0ZSA9IDE7XG5cdGVkaXRNZXRhKCAnX2pmX2dhdGV3YXlzJywgZ2F0ZXdheXMgKTtcblxuXHRjb25zdCB3aXRoQ29uZGl0aW9ucyA9IFtdO1xuXHR0cnkge1xuXHRcdHdpdGhDb25kaXRpb25zLnB1c2goIC4uLm1pZ3JhdGUoIGdhdGV3YXlzLCBhY3Rpb25zICkgKTtcblx0fSBjYXRjaCAoIGVycm9yICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGVkaXRNZXRhKCAnX2pmX2FjdGlvbnMnLCB3aXRoQ29uZGl0aW9ucyApO1xufTtcblxud3AuZG9tUmVhZHkoKCkgPT4gcnVuRXZlbnQoKSk7IiwiaW1wb3J0IEdyb3VwZWRTZWxlY3RDb250cm9sIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR3JvdXBlZFNlbGVjdENvbnRyb2wnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuXHQgICAgICBTZWxlY3RDb250cm9sLFxuXHQgICAgICBDdXN0b21TZWxlY3RDb250cm9sLFxuXHQgICAgICBDYXJkLFxuXHQgICAgICBDYXJkQm9keSxcblx0ICAgICAgQ2FyZEhlYWRlcixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gQXZhaWxhYmxlTWFwRmllbGRQcmVzZXQoIHtcblx0ZmllbGRzTWFwLFxuXHRmaWVsZCxcblx0aW5kZXgsXG5cdHZhbHVlLFxuXHRvbkNoYW5nZVZhbHVlLFxuXHRpc01hcEZpZWxkVmlzaWJsZSxcbn0gKSB7XG5cblx0bGV0IGN1cnJlbnRWYWwgPSBudWxsO1xuXG5cdGlmICggISBmaWVsZHNNYXAgKSB7XG5cdFx0ZmllbGRzTWFwID0ge307XG5cdH1cblxuXHRjdXJyZW50VmFsID0gZmllbGRzTWFwWyBmaWVsZCBdO1xuXG5cdGlmICggISBjdXJyZW50VmFsIHx8ICdvYmplY3QnICE9PSB0eXBlb2YgY3VycmVudFZhbCApIHtcblx0XHRjdXJyZW50VmFsID0ge307XG5cdH1cblxuXHRjb25zdCBBdmFpbGFibGVGaWVsZFdyYXBwZXIgPSAoIHsgZmllbGQ6IGZpZWxkTG9jYWwsIG5hbWUsIGluZGV4OiBpbmRleExvY2FsLCBmSW5kZXgsIGNoaWxkcmVuIH0gKSA9PiA8Q2FyZFxuXHRcdGtleT17IGZpZWxkTG9jYWwgKyBuYW1lICsgaW5kZXhMb2NhbCArIGZJbmRleCB9XG5cdFx0c2l6ZT17ICdleHRyYVNtYWxsJyB9XG5cdFx0c3R5bGU9eyB7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH0gfVxuXHQ+XG5cdFx0PENhcmRIZWFkZXI+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2pldC1sYWJlbC1vdmVyZmxvdyc+eyBmaWVsZExvY2FsIH08L3NwYW4+XG5cdFx0PC9DYXJkSGVhZGVyPlxuXHRcdDxDYXJkQm9keVxuXHRcdFx0a2V5PXsgZmllbGRMb2NhbCArIG5hbWUgKyBpbmRleExvY2FsICsgZkluZGV4IH1cblx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX2ZpZWxkcy1tYXAtaXRlbScgfVxuXHRcdD5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvQ2FyZEJvZHk+XG5cdDwvQ2FyZD47XG5cblx0ZnVuY3Rpb24gQXZhaWxhYmxlRmllbGRXcmFwcGVyRnVuYyggeyBmaWVsZDogZmllbGRMb2NhbCwgbmFtZSwgaW5kZXg6IGluZGV4TG9jYWwsIGZJbmRleCB9LCBjaGlsZHJlbiApIHtcblx0XHRyZXR1cm4gPENhcmRcblx0XHRcdGtleT17IGZpZWxkTG9jYWwgKyBuYW1lICsgaW5kZXhMb2NhbCArIGZJbmRleCB9XG5cdFx0XHRzaXplPXsgJ2V4dHJhU21hbGwnIH1cblx0XHRcdHN0eWxlPXsgeyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9IH1cblx0XHQ+XG5cdFx0XHQ8Q2FyZEhlYWRlcj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdqZXQtbGFiZWwtb3ZlcmZsb3cnPnsgZmllbGRMb2NhbCB9PC9zcGFuPlxuXHRcdFx0PC9DYXJkSGVhZGVyPlxuXHRcdFx0PENhcmRCb2R5XG5cdFx0XHRcdGtleT17IGZpZWxkTG9jYWwgKyBuYW1lICsgaW5kZXhMb2NhbCArIGZJbmRleCB9XG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX2ZpZWxkcy1tYXAtaXRlbScgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdDwvQ2FyZEJvZHk+XG5cdFx0PC9DYXJkPjtcblx0fVxuXG5cdHJldHVybiA8RnJhZ21lbnQga2V5PXsgYG1hcF9maWVsZF9wcmVzZXRfJHsgZmllbGQgKyBpbmRleCB9YCB9PlxuXG5cdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uICovfVxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5tYXBfZmllbGRzLm1hcCggKCBkYXRhLCBmSW5kZXggKSA9PiB7XG5cdFx0XHRjb25zdCBwcm9wcyA9IHsgZmllbGQsIG5hbWU6IGRhdGEubmFtZSwgaW5kZXgsIGZJbmRleCB9O1xuXG5cdFx0XHRjb25zdCB1bmlxS2V5ID0gJ2NvbnRyb2xfJyArIGZpZWxkICsgZGF0YS5uYW1lICsgaW5kZXggKyBmSW5kZXg7XG5cblx0XHRcdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcblx0XHRcdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRcdFx0cmV0dXJuICggaXNNYXBGaWVsZFZpc2libGUoIHZhbHVlLCBkYXRhLCBmaWVsZCApICYmXG5cdFx0XHRcdFx0XHRBdmFpbGFibGVGaWVsZFdyYXBwZXJGdW5jKCBwcm9wcywgPFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkgKyAnVGV4dENvbnRyb2wnIH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXG5cdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWwsXG5cdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHRcdC8+IClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcblx0XHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxuXHRcdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRjYXNlICdjdXN0b21fc2VsZWN0Jzpcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcblx0XHRcdFx0XHRcdDxBdmFpbGFibGVGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9IGtleT17IHVuaXFLZXkgfT5cblx0XHRcdFx0XHRcdFx0PEN1c3RvbVNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggeyBzZWxlY3RlZEl0ZW0gfSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gc2VsZWN0ZWRJdGVtLmtleTtcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGRhdGEub3B0aW9ucy5maW5kKCBvcHRpb24gPT4gb3B0aW9uLmtleSA9PT0gY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj4gKTtcblx0XHRcdFx0Y2FzZSAnZ3JvdXBlZF9zZWxlY3QnOlxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxuXHRcdFx0XHRcdFx0XHQ8R3JvdXBlZFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPiApO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH0gKSB9XG5cdDwvRnJhZ21lbnQ+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdmFpbGFibGVNYXBGaWVsZFByZXNldDsiLCJpbXBvcnQgd2l0aFByZXNldCBmcm9tICcuL3dpdGhQcmVzZXQnO1xuaW1wb3J0IEdsb2JhbEZpZWxkUHJlc2V0IGZyb20gJy4vR2xvYmFsRmllbGRQcmVzZXQnO1xuaW1wb3J0IE1hcEZpZWxkUHJlc2V0IGZyb20gJy4vTWFwRmllbGRQcmVzZXQnO1xuaW1wb3J0IENvbnRyb2xQcmVzZXRSZXN0cmljdGlvbkNvbnRleHRcblx0ZnJvbSAnLi4vY29udGV4dC9Db250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgVG9nZ2xlQ29udHJvbCwgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5sZXQgRHluYW1pY1ByZXNldCA9IGZ1bmN0aW9uICgge1xuXHR2YWx1ZSxcblx0b25DaGFuZ2UsXG5cdHBhcnNlVmFsdWUsXG5cdGV4Y2x1ZGVPcHRpb25zLFxuXHRpc0N1cnJlbnRGaWVsZFZpc2libGUsXG5cdGlzVmlzaWJsZSxcbn0gKSB7XG5cblx0Y29uc3QgcG9zaXRpb24gICA9ICdkeW5hbWljJztcblx0Y29uc3Qgc3RhdGVWYWx1ZSA9IHBhcnNlVmFsdWUoIHZhbHVlICk7XG5cblx0Y29uc3QgcmVzdHJpY3Rpb25Db250ZXh0ID0gdXNlQ29udGV4dCggQ29udHJvbFByZXNldFJlc3RyaWN0aW9uQ29udGV4dCApO1xuXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIG5ld1ZhbHVlLCBuYW1lICkgPT4ge1xuXHRcdG9uQ2hhbmdlKCAoKSA9PiBKU09OLnN0cmluZ2lmeShcblx0XHRcdHsgLi4uc3RhdGVWYWx1ZSwgWyBuYW1lIF06IG5ld1ZhbHVlIH0sXG5cdFx0KSApO1xuXHR9O1xuXG5cdHJldHVybiA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9eyA0IH0+XG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLmdsb2JhbF9maWVsZHMubWFwKFxuXHRcdFx0KCBkYXRhLCBpbmRleCApID0+IDxHbG9iYWxGaWVsZFByZXNldFxuXHRcdFx0XHRrZXk9eyBgY3VycmVudF9maWVsZF8keyBkYXRhLm5hbWUgfV8keyBpbmRleCB9YCB9XG5cdFx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZSB9XG5cdFx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0XHRkYXRhPXsgZGF0YSB9XG5cdFx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxuXHRcdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHRcdGlzVmlzaWJsZT17IGlzVmlzaWJsZSB9XG5cdFx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxuXHRcdFx0Lz4gKSB9XG5cblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcubWFwX2ZpZWxkcy5tYXAoXG5cdFx0XHQoIGRhdGEsIGluZGV4ICkgPT4gPE1hcEZpZWxkUHJlc2V0XG5cdFx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cblx0XHRcdFx0Y3VycmVudFN0YXRlPXsgc3RhdGVWYWx1ZSB9XG5cdFx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0aW5kZXg9eyBpbmRleCB9XG5cdFx0XHRcdGRhdGE9eyBkYXRhIH1cblx0XHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGU9eyBpc0N1cnJlbnRGaWVsZFZpc2libGUgfVxuXHRcdFx0XHRwb3NpdGlvbj17IHBvc2l0aW9uIH1cblx0XHRcdC8+ICkgfVxuXHRcdHsgcmVzdHJpY3Rpb25Db250ZXh0Py5zaG93ICYmIDxUb2dnbGVDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnUmVzdHJpY3QgYWNjZXNzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0aGVscD17IChcblx0XHRcdFx0ICAgICAgIHN0YXRlVmFsdWUucmVzdHJpY3RlZCA/PyB0cnVlXG5cdFx0XHQgICAgICAgKSA/IF9fKFxuXHRcdFx0XHRgV2lsbCBzZXQgZGVmYXVsdCB2YWx1ZSBmcm9tIHByZXNldCBvbmx5IGZvciB1c2VycyB3aG8gYWxsb3dlZCB0byBlZGl0IHRoaXMgdmFsdWVgLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIDogX18oXG5cdFx0XHRcdGBBbHdheXMgc2V0IGRlZmF1bHQgdmFsdWUgZnJvbSBwcmVzZXQuIE1ha2Ugc3VyZSBpdCBjYW4ndCBiZSBhY2NpZGVudGFsbHkgY2hhbmdlZCBmcm9tIGZvcm0gQWN0aW9uc2AsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgfVxuXHRcdFx0Y2hlY2tlZD17IHN0YXRlVmFsdWUucmVzdHJpY3RlZCA/PyB0cnVlIH1cblx0XHRcdG9uQ2hhbmdlPXsgcmVzdHJpY3RlZCA9PiBvbkNoYW5nZSggcHJldiA9PiBKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC4uLnByZXYsXG5cdFx0XHRcdFx0cmVzdHJpY3RlZDogcmVzdHJpY3RlZCA/IHVuZGVmaW5lZCA6IHJlc3RyaWN0ZWQsXG5cdFx0XHRcdH0sXG5cdFx0XHQpICkgfVxuXHRcdC8+IH1cblx0PC9GbGV4Pjtcbn07XG5cbkR5bmFtaWNQcmVzZXQgPSB3aXRoUHJlc2V0KCBEeW5hbWljUHJlc2V0ICk7XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNQcmVzZXQ7IiwiaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gJy4uLy4uL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsJztcblxuY29uc3Qge1xuXHQgICAgICBQYXRoLFxuXHQgICAgICBTVkcsXG5cdCAgICAgIEJhc2VDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gRmllbGRXaXRoUHJlc2V0KCB7XG5cdGNoaWxkcmVuID0gbnVsbCxcblx0TW9kYWxFZGl0b3IsXG5cdHRyaWdnZXJDbGFzc2VzID0gW10sXG5cdGJhc2VDb250cm9sUHJvcHMgPSB7fSxcbn0gKSB7XG5cblx0Y29uc3QgWyBtb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRjb25zdCBjaGFuZ2VNb2RhbFN0YXRlID0gKCkgPT4ge1xuXHRcdHNldE1vZGFsU3RhdGUoIHByZXYgPT4gIXByZXYgKTtcblx0fTtcblx0Y29uc3QgY2xhc3NOYW1lcyAgICAgICA9IFtcblx0XHQnamV0LWZvcm0tZHluYW1pYy1wcmVzZXRfX3RyaWdnZXInLFxuXHRcdC4uLnRyaWdnZXJDbGFzc2VzLFxuXHRdLmpvaW4oICcgJyApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZHluYW1pYy1wcmVzZXRcIlxuXHRcdFx0eyAuLi5iYXNlQ29udHJvbFByb3BzIH1cblx0XHQ+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyxqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi8gfVxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWVzIH1cblx0XHRcdFx0b25DbGljaz17IGNoYW5nZU1vZGFsU3RhdGUgfVxuXHRcdFx0PjxTVkcgdmlld0JveD1cIjAgMCA1NCA2NFwiIGZpbGw9XCJub25lXCJcblx0XHRcdCAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aFxuXHRcdFx0XHRkPVwiTTQyLjYzOTYgMjYuNDM0N0MzNy44NjgyIDI3LjM0MzYgMzIuNTY2NiAyOC4wMjUyIDI3LjE4OTQgMjguMDI1MkMyMS44MTIxIDI4LjAyNTIgMTYuNDM0OCAyNy4zNDM2IDExLjczOTEgMjYuNDM0N0M2Ljk2Nzc0IDI1LjQ1MDIgMy4xODA5MyAyMy44NTk3IDAuMzc4NjggMjEuOTY2M0wwLjM3ODY4IDI4LjAyNTJDMC4zNzg2OCAyOS41Mzk5IDEuNTkwNDYgMzEuMTMwNCAzLjc4NjgyIDMyLjQxNzlDNS45ODMxNyAzMy43MDU0IDkuNDY3MDQgMzQuOTE3MiAxMy42MzI1IDM1LjU5ODhDMTcuNzk4IDM2LjI4MDUgMjIuMTE1IDM2LjgxMDYgMjcuMTg5NCAzNi44MTA2QzMyLjI2MzcgMzYuODEwNiAzNi42NTY0IDM2LjUwNzcgNDAuNzQ2MiAzNS41OTg4QzQ0LjgzNTkgMzQuNjkgNDguMzE5OCAzMy43MDU0IDUwLjUxNjIgMzIuNDE3OUM1Mi43MTI1IDMxLjEzMDQgNTQgMjkuNTM5OSA1NCAyOC4wMjUyTDU0IDIxLjk2NjNDNTEuMTIyIDIzLjg1OTcgNDcuMzM1MiAyNS40NTAyIDQyLjYzOTYgMjYuNDM0N1pNNDIuNjM5NiA1My41NDg0QzM3Ljg2ODIgNTQuNTMyOSAzMi41NjY2IDU1LjEzODggMjcuMTg5NCA1NS4xMzg4QzIxLjgxMjEgNTUuMTM4OCAxNi40MzQ4IDU0LjUzMjkgMTEuNzM5MSA1My41NDg0QzcuMDQzNDggNTIuNTYzOCAzLjE4MDkzIDUxLjA0OTEgMC4zNzg2ODIgNDkuMTU1NkwwLjM3ODY4MiA1NS4xMzg4QzAuMzc4NjgzIDU2LjcyOTMgMS41OTA0NiA1OC4zMTk3IDMuNzg2ODIgNTkuNTMxNUM2LjM2MTg2IDYwLjgxOSA5LjQ2NzA1IDYyLjEwNjYgMTMuNjMyNSA2Mi43MTI1QzE3LjcyMjMgNjMuNjk3IDIyLjExNSA2NCAyNy4xODk0IDY0QzMyLjI2MzcgNjQgMzYuNjU2NCA2My42OTcgNDAuNzQ2MiA2Mi43MTI1QzQ0LjgzNTkgNjEuODAzNiA0OC4zMTk4IDYwLjgxOSA1MC41MTYyIDU5LjUzMTVDNTIuNzEyNSA1Ny45NDExIDU0IDU2LjcyOTMgNTQgNTQuODM1OUw1NCA0OC44NTI3QzUxLjEyMiA1MS4wNDkxIDQ3LjMzNTIgNTIuMjYwOCA0Mi42Mzk2IDUzLjU0ODRaTTQyLjYzOTYgMzkuOTkxNUMzNy44NjgyIDQwLjkwMDQgMzIuNTY2NiA0MS41ODIgMjcuMTg5NCA0MS41ODJDMjEuODEyMSA0MS41ODIgMTYuNDM0OCA0MC45MDA0IDExLjczOTEgMzkuOTkxNUM2Ljk2Nzc0IDM5LjAwNyAzLjE4MDkzIDM3LjQ5MjIgMC4zNzg2ODEgMzUuNTk4OEwwLjM3ODY4MSA0MS41ODJDMC4zNzg2ODEgNDMuMTcyNSAxLjU5MDQ2IDQ0LjY4NzIgMy43ODY4MiA0NS45NzQ3QzYuMzYxODUgNDcuMjYyMiA5LjQ2NzA1IDQ4LjQ3NCAxMy42MzI1IDQ5LjE1NTZDMTcuNzIyMyA1MC4wNjQ1IDIyLjExNSA1MC4zNjc0IDI3LjE4OTQgNTAuMzY3NEMzMi4yNjM3IDUwLjM2NzQgMzYuNjU2NCA1MC4wNjQ1IDQwLjc0NjIgNDkuMTU1NkM0NC44MzU5IDQ4LjE3MTEgNDguMzE5OCA0Ny4yNjIyIDUwLjUxNjIgNDUuOTc0N0M1Mi43MTI1IDQ0LjM4NDMgNTQgNDMuMTcyNSA1NCA0MS41ODJMNTQgMzUuNTk4OEM1MS4xMjIgMzcuNDkyMiA0Ny4zMzUyIDM5LjAwNyA0Mi42Mzk2IDM5Ljk5MTVaTTQwLjQ0MzIgMi4xMjMzN0MzNi4zNTM1IDEuMTM4NzkgMzEuODg1IDAuODM1ODQ4IDI2Ljg4NjQgMC44MzU4NDlDMjEuODg3OCAwLjgzNTg0OSAxNy40MTk0IDEuMTM4NzkgMTMuMjUzOSAyLjEyMzM3QzkuMDg4MzYgMy4xMDc5NCA1LjY4MDIyIDQuMDE2NzggMy40ODM4NyA1LjMwNDNDMS4yODc1MSA2LjU5MTgxIC0zLjQ3ODJlLTA2IDguMTA2NTQgLTMuMzM5MTZlLTA2IDkuNjk3TC0yLjk1NTEzZS0wNiAxNC4wODk3Qy0yLjgxNjA5ZS0wNiAxNS42ODAyIDEuMjg3NTIgMTcuMjcwNiAzLjQ4Mzg3IDE4LjU1ODJDNi4wNTg5MSAxOS43Njk5IDkuMTY0MSAyMS4wNTc1IDEzLjI1MzkgMjEuNjYzM0MxNy4zNDM2IDIyLjI2OTIgMjEuODEyMSAyMi45NTA5IDI2Ljg4NjQgMjIuOTUwOUMzMS45NjA3IDIyLjk1MDkgMzYuMzUzNSAyMi45NTA5IDQwLjQ0MzIgMjIuMzQ1QzQ0LjUzMyAyMS43MzkxIDQ4LjAxNjkgMjAuNDUxNiA1MC4yMTMyIDE5LjE2NEM1Mi43MTI1IDE3LjU3MzYgNTQgMTUuOTgzMSA1NCAxNC4zOTI3TDU0IDkuOTk5OTVDNTQgOC40MDk0OCA1Mi43MTI1IDYuODE5MDIgNTAuNTE2MiA1LjYwNzI0QzQ4LjMxOTggNC4zOTU0NiA0NC41MzMgMi43MjkyNiA0MC40NDMyIDIuMTIzMzdaXCJcblx0XHRcdFx0ZmlsbD1cIiM3RTg5OTNcIi8+PC9TVkc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdHsgbW9kYWxTdGF0ZSAmJiAoXG5cdFx0XHQ8QWN0aW9uTW9kYWxcblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cblx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cblx0XHRcdFx0dGl0bGU9eyAnRWRpdCBQcmVzZXQnIH1cblx0XHRcdD5cblx0XHRcdFx0eyBtb2RhbFByb3BzID0+IDxNb2RhbEVkaXRvclxuXHRcdFx0XHRcdHsgLi4ubW9kYWxQcm9wcyB9XG5cdFx0XHRcdC8+IH1cblx0XHRcdDwvQWN0aW9uTW9kYWw+XG5cdFx0KSB9XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRXaXRoUHJlc2V0OyIsImNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gR2xvYmFsRmllbGRQcmVzZXQoIHtcblx0ZGF0YSxcblx0dmFsdWUsXG5cdGluZGV4LFxuXHRvbkNoYW5nZVZhbHVlLFxuXHRpc1Zpc2libGUsXG5cdGV4Y2x1ZGVPcHRpb25zID0gb3B0aW9ucyA9PiBvcHRpb25zLFxuXHRwb3NpdGlvbixcbn0gKSB7XG5cblx0c3dpdGNoICggZGF0YS50eXBlICkge1xuXHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0cmV0dXJuICggaXNWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgcG9zaXRpb24gKSAmJlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlWyBkYXRhLm5hbWUgXSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfJyArIGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMoIGRhdGEub3B0aW9ucyApIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlWyBkYXRhLm5hbWUgXSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbEZpZWxkUHJlc2V0OyIsImltcG9ydCBHcm91cGVkU2VsZWN0Q29udHJvbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sJztcbmltcG9ydCB7XG5cdFRleHRDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRDdXN0b21TZWxlY3RDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBNYXBGaWVsZFByZXNldCgge1xuXHRkYXRhLFxuXHR2YWx1ZSxcblx0aW5kZXgsXG5cdGN1cnJlbnRTdGF0ZSxcblx0b25DaGFuZ2VWYWx1ZSxcblx0aXNDdXJyZW50RmllbGRWaXNpYmxlLFxufSApIHtcblxuXHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCxcblx0XHRcdFx0XHRcdFx0XHQnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxuXHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyAnY29udHJvbF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCxcblx0XHRcdFx0XHRcdFx0XHQnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxuXHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0Y2FzZSAnY3VzdG9tX3NlbGVjdCc6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Q3VzdG9tU2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWN1c3RvbS1zZWxlY3QtY29udHJvbFwiXG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggeyBzZWxlY3RlZEl0ZW0gfSApID0+IHtcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSBzZWxlY3RlZEl0ZW0ua2V5O1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHQnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgZGF0YS5vcHRpb25zLmZpbmQoXG5cdFx0XHRcdFx0XHRcdG9wdGlvbiA9PiBvcHRpb24ua2V5ID09PSB2YWx1ZSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0Y2FzZSAnZ3JvdXBlZF9zZWxlY3QnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExhYmVsPnsgZGF0YS5sYWJlbCB9PC9MYWJlbD5cblx0XHRcdFx0XHQ8R3JvdXBlZFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCxcblx0XHRcdFx0XHRcdFx0XHQnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcEZpZWxkUHJlc2V0OyIsImltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gJy4vRHluYW1pY1ByZXNldCc7XG5pbXBvcnQge1xuXHRTdGlja3lNb2RhbEFjdGlvbnMsXG5cdE1vZGFsRm9vdGVyU3R5bGUsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZnVuY3Rpb24gUHJlc2V0QnV0dG9uKCB7XG5cdHZhbHVlLFxuXHRvbkNoYW5nZSxcblx0dGl0bGUsXG59ICkge1xuXG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIHN0YXRlVmFsdWUsIHNldFN0YXRlVmFsdWUgXSA9IHVzZVN0YXRlKCB2YWx1ZSApO1xuXG5cdGNvbnN0IHVwZGF0ZUNsaWNrID0gKCkgPT4ge1xuXHRcdG9uQ2hhbmdlKCBzdGF0ZVZhbHVlICk7XG5cdFx0c2V0U2hvd01vZGFsKCBmYWxzZSApO1xuXHR9O1xuXG5cdGNvbnN0IGNhbmNlbENsaWNrID0gKCkgPT4ge1xuXHRcdHNldFNob3dNb2RhbCggZmFsc2UgKTtcblx0fTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8QnV0dG9uXG5cdFx0XHRpY29uPXsgJ2RhdGFiYXNlJyB9XG5cdFx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxuXHRcdFx0aXNTbWFsbFxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYi1pcy10aGljaycgfVxuXHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dNb2RhbCggdHJ1ZSApIH1cblx0XHQvPlxuXHRcdHsgc2hvd01vZGFsICYmIDxNb2RhbFxuXHRcdFx0c2l6ZT1cIm1lZGl1bVwiXG5cdFx0XHR0aXRsZT17IHRpdGxlID8/IF9fKCAnRWRpdCBQcmVzZXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldFNob3dNb2RhbCggZmFsc2UgKSB9XG5cdFx0XHRjbGFzc05hbWU9eyBNb2RhbEZvb3RlclN0eWxlIH1cblx0XHQ+XG5cdFx0XHQ8RHluYW1pY1ByZXNldFxuXHRcdFx0XHRrZXk9eyAnZHluYW1pY19rZXlfcHJlc2V0JyB9XG5cdFx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgc2V0U3RhdGVWYWx1ZSB9XG5cdFx0XHQvPlxuXHRcdFx0PFN0aWNreU1vZGFsQWN0aW9ucz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB1cGRhdGVDbGljayB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IF9fKCAnVXBkYXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0b25DbGljaz17IGNhbmNlbENsaWNrIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdDYW5jZWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9TdGlja3lNb2RhbEFjdGlvbnM+XG5cdFx0PC9Nb2RhbD4gfVxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXNldEJ1dHRvbjsiLCJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiB3aXRoUHJlc2V0KCBXcmFwcGVkQ29tcG9uZW50ICkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHRyZXR1cm4gZnVuY3Rpb24gSmV0Rm9ybVByZXNldEVkaXRvciggcHJvcHMgKSB7XG5cblx0XHRjb25zdCBwYXJzZVZhbHVlID0gKCkgPT4ge1xuXHRcdFx0bGV0IHZhbCA9IHt9O1xuXG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgcHJvcHMudmFsdWUgKSB7XG5cdFx0XHRcdHZhbCA9IHsgLi4ucHJvcHMudmFsdWUgfTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBwcm9wcy52YWx1ZSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhbCA9IEpTT04ucGFyc2UoIHByb3BzLnZhbHVlICk7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWwgKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKCBleGNlcHRpb24gKSB7XG5cdFx0XHRcdFx0dmFsID0ge307XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhbC5qZXRfcHJlc2V0ID0gdHJ1ZTtcblxuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cblx0XHRjb25zdCBpc1Zpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XG5cdFx0XHRyZXR1cm4gKCAoIGRhdGEucG9zaXRpb24gJiYgcG9zaXRpb24gPT09IGRhdGEucG9zaXRpb24gKVxuXHRcdFx0XHR8fCAhIGRhdGEucG9zaXRpb24gfHwgJ3F1ZXJ5X3ZhcicgIT09IGN1cnJlbnRTdGF0ZS5mcm9tICkgJiYgaXNHbG9iYWxWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgaXNHbG9iYWxWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEgKSA9PiB7XG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcblx0XHRcdFx0c3dpdGNoICggZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xuXHRcdFx0XHRcdGNhc2UgJ3F1ZXJ5X3Zhcic6XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQoICdwb3N0JyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS5wb3N0X2Zyb20gKVxuXHRcdFx0XHRcdFx0XHR8fCAoICd1c2VyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS51c2VyX2Zyb20gKVxuXHRcdFx0XHRcdFx0XHR8fCAoICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUuZnJvbSApXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnByZXNldC5lZGl0b3IuY3VzdG9tLmNvbmRpdGlvbicsIGZhbHNlLCBkYXRhLmN1c3RvbV9jb25kaXRpb24sIGN1cnJlbnRTdGF0ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBpc0N1cnJlbnRGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XG5cblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGRhdGEucG9zaXRpb24gJiYgcG9zaXRpb24gIT09IGRhdGEucG9zaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZSAmJiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXNNYXBGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgZmllbGQgKSA9PiB7XG5cblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmICEgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZSAmJiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0fTtcblxuXHRcdGNvbnN0IGV4Y2x1ZGVPcHRpb25zID0gKCBzZWxlY3RPcHRpb25zICkgPT4ge1xuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsgLi4uc2VsZWN0T3B0aW9ucyBdO1xuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKCAoIG9wdGlvbiwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdGlmICggcHJvcHMuZXhjbHVkZVNvdXJjZXMgJiYgcHJvcHMuZXhjbHVkZVNvdXJjZXMuaW5jbHVkZXMoIG9wdGlvbi52YWx1ZSApICkge1xuXHRcdFx0XHRcdG9wdGlvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHR9O1xuXG5cdFx0cmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50XG5cdFx0XHRrZXk9J3dyYXBwZWQtcHJlc2V0LWVkaXRvcidcblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0cGFyc2VWYWx1ZT17IHBhcnNlVmFsdWUgfVxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cblx0XHRcdGlzTWFwRmllbGRWaXNpYmxlPXsgaXNNYXBGaWVsZFZpc2libGUgfVxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxuXHRcdC8+O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQ7XG4iLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENvbnRyb2xQcmVzZXRSZXN0cmljdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCB7fSApO1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0OyIsImltcG9ydCBpc1ByZXNldFN0cmluZyBmcm9tICcuL2lzUHJlc2V0U3RyaW5nJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBodW1hblJlYWRhYmxlUHJlc2V0KCB2YWx1ZSwgaGlnaGxpZ2h0ID0gJ2NvZGUnICkge1xuXHR2YWx1ZSA9IHZhbHVlID8/ICcnO1xuXG5cdGlmICggIWlzUHJlc2V0U3RyaW5nKCB2YWx1ZSApICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGNvbnN0IHBhcnNlZFByZXNldCA9IEpTT04ucGFyc2UoIHZhbHVlICk7XG5cdGNvbnN0IGxhYmVsICAgICAgICA9IF9fKCAnUHJlc2V0IGZyb20nLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcblx0Y29uc3QgZnJvbSAgICAgICAgID0gcGFyc2VkUHJlc2V0Py5mcm9tID8/ICcoZW1wdHkpJztcblxuXHRsZXQgaGlnaGxpZ2h0ZWRGcm9tO1xuXG5cdHN3aXRjaCAoIGhpZ2hsaWdodCApIHtcblx0XHRjYXNlICdjb2RlJzpcblx0XHRcdGhpZ2hsaWdodGVkRnJvbSA9IGA8Y29kZT4keyBmcm9tIH08L2NvZGU+YDtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2InOlxuXHRcdFx0aGlnaGxpZ2h0ZWRGcm9tID0gYDxiPiR7IGZyb20gfTwvYj5gO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGxhYmVsLFxuXHRcdGhpZ2hsaWdodGVkRnJvbSxcblx0XS5qb2luKCAnICcgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHVtYW5SZWFkYWJsZVByZXNldDsiLCJmdW5jdGlvbiBpc1ByZXNldFN0cmluZyggcHJlc2V0ICkge1xuXHRsZXQgcGFyc2VkUHJlc2V0O1xuXHR0cnkge1xuXHRcdHBhcnNlZFByZXNldCA9IEpTT04ucGFyc2UoIHByZXNldCApO1xuXHR9XG5cdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuICEhcGFyc2VkUHJlc2V0Py5qZXRfcHJlc2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1ByZXNldFN0cmluZzsiLCJpbXBvcnQgeyBzcHJpbnRmLCBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRGcmFnbWVudCxcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdENhcmQsXG5cdENhcmRCb2R5LFxuXHRDYXJkSGVhZGVyLFxuXHRUb2dnbGVDb250cm9sLFxuXHRGbGV4LFxuXHRGbGV4SXRlbSxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFJlcGVhdGVyV2l0aFN0YXRlKCB7XG5cdGNoaWxkcmVuLFxuXHRJdGVtSGVhZGluZyxcblx0cmVwZWF0ZXJDbGFzc2VzID0gW10sXG5cdHJlcGVhdGVySXRlbUNsYXNzZXMgPSBbXSxcblx0bmV3SXRlbSxcblx0YWRkTmV3QnV0dG9uTGFiZWwgPSAnQWRkIE5ldycsXG5cdGl0ZW1zID0gW10sXG5cdGlzU2F2ZUFjdGlvbixcblx0b25TYXZlSXRlbXMsXG5cdG9uVW5Nb3VudCxcblx0b25BZGROZXdJdGVtLFxuXHRvblJlbW92ZUl0ZW0sXG5cdGhlbHAgPSB7XG5cdFx0aGVscFNvdXJjZToge30sXG5cdFx0aGVscFZpc2libGU6ICgpID0+IGZhbHNlLFxuXHRcdGhlbHBLZXk6ICcnLFxuXHR9LFxuXHRhZGRpdGlvbmFsQ29udHJvbHMgPSBudWxsLFxufSApIHtcblxuXHRjb25zdCBjbGFzc05hbWVzICAgICA9IFtcblx0XHQnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50Jyxcblx0XHQuLi5yZXBlYXRlckNsYXNzZXMsXG5cdF0uam9pbiggJyAnICk7XG5cdGNvbnN0IGl0ZW1DbGFzc05hbWVzID0gW1xuXHRcdCdqZXQtZm9ybS1idWlsZGVyX19yZXBlYXRlci1jb21wb25lbnQtaXRlbScsXG5cdFx0Li4ucmVwZWF0ZXJJdGVtQ2xhc3Nlcyxcblx0XS5qb2luKCAnICcgKTtcblxuXHRjb25zdCBwYXJzZWRJdGVtcyA9ICgpID0+IHtcblx0XHRpZiAoIGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRyZXR1cm4gaXRlbXMubWFwKCBpdGVtID0+IHtcblx0XHRcdFx0aXRlbS5fX3Zpc2libGUgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0Li4ubmV3SXRlbSxcblx0XHRcdFx0X192aXNpYmxlOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRdO1xuXG5cdH07XG5cblx0Y29uc3QgWyBpdGVtc0RhdGEsIHNldEl0ZW1zRGF0YSBdID0gdXNlU3RhdGUoIFtdICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwYXJzZWRJdGVtcygpICk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbXSApO1xuXG5cdGNvbnN0IFsgaXNTYWZlRGVsZXRpbmcsIHNldFNhZmVEZWxldGluZyBdID0gdXNlU3RhdGUoIHRydWUgKTtcblxuXHRjb25zdCBjaGFuZ2VDdXJyZW50SXRlbSA9ICggdmFsdWVUb1NldCwgaW5kZXggKSA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblxuXHRcdFx0cHJldkNsb25lWyBpbmRleCBdID0ge1xuXHRcdFx0XHQuLi5wcmV2WyBpbmRleCBdLFxuXHRcdFx0XHQuLi52YWx1ZVRvU2V0LFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IG9uU2F2ZURlbGV0aW5nID0gaW5kZXggPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuXHRcdHJldHVybiBjb25maXJtKFxuXHRcdFx0c3ByaW50Zihcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVkIC0gaXRlbSBpbmRleFxuXHRcdFx0XHRfXyhcblx0XHRcdFx0XHRgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSBpdGVtICVkP2AsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHQpLFxuXHRcdFx0XHRpbmRleCArIDEsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlT3B0aW9uID0gKCBpbmRleCApID0+IHtcblx0XHRpZiAoXG5cdFx0XHRpc1NhZmVEZWxldGluZyAmJiAhb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgfHxcblx0XHRcdG9uUmVtb3ZlSXRlbSAmJiAhb25SZW1vdmVJdGVtKCBpbmRleCwgaXRlbXNEYXRhIClcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXHRcdFx0cHJldkNsb25lLnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgYWRkTmV3SXRlbSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0aWYgKCBvbkFkZE5ld0l0ZW0gKSB7XG5cdFx0XHRvbkFkZE5ld0l0ZW0oIHZhbHVlLCBpdGVtc0RhdGEgKTtcblx0XHR9XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IFtcblx0XHRcdC4uLnByZXYsIHtcblx0XHRcdFx0Li4udmFsdWUsXG5cdFx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XSApO1xuXHR9O1xuXG5cdGNvbnN0IGNsb25lSXRlbSA9ICggaW5kZXggKSA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSAgICAgICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXHRcdFx0Y29uc3QgWyBiZWZvcmUsIGFmdGVyIF0gPSBbXG5cdFx0XHRcdHByZXZDbG9uZS5zbGljZSggMCwgaW5kZXggKyAxICksXG5cdFx0XHRcdHByZXZDbG9uZS5zbGljZSggaW5kZXggKyAxICksXG5cdFx0XHRdO1xuXG5cdFx0XHRyZXR1cm4gWyAuLi5iZWZvcmUsIHByZXZDbG9uZVsgaW5kZXggXSwgLi4uYWZ0ZXIgXTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgbW92ZVJlcGVhdGVySXRlbSA9ICggeyBvbGRJbmRleCwgbmV3SW5kZXggfSApID0+IHtcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXG5cdFx0XHRbXG5cdFx0XHRcdHByZXZDbG9uZVsgbmV3SW5kZXggXSxcblx0XHRcdFx0cHJldkNsb25lWyBvbGRJbmRleCBdLFxuXHRcdFx0XSA9IFsgcHJldkNsb25lWyBvbGRJbmRleCBdLCBwcmV2Q2xvbmVbIG5ld0luZGV4IF0gXTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgbW92ZVVwICAgPSAoIGluZGV4ICkgPT4ge1xuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggLSAxIH0gKTtcblx0fTtcblx0Y29uc3QgbW92ZURvd24gPSAoIGluZGV4ICkgPT4ge1xuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggKyAxIH0gKTtcblx0fTtcblxuXHRjb25zdCBpc0Rpc2FibGVkRW5kID0gKCBpbmRleCApID0+IHtcblx0XHRyZXR1cm4gIShcblx0XHRcdGluZGV4IDwgaXRlbXNEYXRhLmxlbmd0aCAtIDFcblx0XHQpO1xuXHR9O1xuXHQvKlxuXG5cdCAqL1xuXG5cdGNvbnN0IHRvZ2dsZVZpc2libGUgPSBpbmRleCA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSAgICAgICAgICAgICAgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cdFx0XHRwcmV2Q2xvbmVbIGluZGV4IF0uX192aXNpYmxlID0gIShcblx0XHRcdFx0cHJldkNsb25lWyBpbmRleCBdLl9fdmlzaWJsZVxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHByZXZDbG9uZTtcblx0XHR9ICk7XG5cdH07XG5cblx0LyogZXNsaW50LWRpc2FibGUgbWF4LWRlcHRoICovXG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XG5cdFx0XHRmb3IgKCBjb25zdCBpdGVtc0RhdGFLZXkgaW4gaXRlbXNEYXRhICkge1xuXHRcdFx0XHRmb3IgKCBjb25zdCBpdGVtS2V5IGluIGl0ZW1zRGF0YVsgaXRlbXNEYXRhS2V5IF0gKSB7XG5cdFx0XHRcdFx0aWYgKCBpdGVtS2V5LnN0YXJ0c1dpdGgoICdfXycgKSApIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSBpdGVtc0RhdGFbIGl0ZW1zRGF0YUtleSBdWyBpdGVtS2V5IF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRvblNhdmVJdGVtcyggaXRlbXNEYXRhICk7XG5cdFx0XHRvblVuTW91bnQoKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XG5cdFx0XHRvblVuTW91bnQoKTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XG5cblx0LyogZXNsaW50LWVuYWJsZSBtYXgtZGVwdGggKi9cblxuXHRjb25zdCBnZXRSZXBlYXRlckl0ZW1JZCA9IGluZGV4ID0+IGBqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtXyR7IGluZGV4IH1gO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBoZWxwU291cmNlLFxuXHRcdCAgICAgIGhlbHBWaXNpYmxlLFxuXHRcdCAgICAgIGhlbHBLZXksXG5cdCAgICAgIH0gPSBoZWxwO1xuXG5cdGNvbnN0IGlzVmlzaWJsZUhlbHAgPSBoZWxwVmlzaWJsZSggaXRlbXNEYXRhICkgJiYgaGVscFNvdXJjZSAmJlxuXHRcdGhlbHBTb3VyY2VbIGhlbHBLZXkgXTtcblxuXHRyZXR1cm4gPGRpdlxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxuXHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyJyB9XG5cdD5cblx0XHR7IGlzVmlzaWJsZUhlbHAgJiYgPHA+eyBoZWxwU291cmNlWyBoZWxwS2V5IF0ubGFiZWwgfTwvcD4gfVxuXG5cdFx0eyAwIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8PlxuXHRcdFx0PEZsZXg+XG5cdFx0XHRcdDxGbGV4SXRlbT5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgaXNTYWZlRGVsZXRpbmcgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRTYWZlRGVsZXRpbmcgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRmxleEl0ZW0+XG5cdFx0XHRcdDxGbGV4SXRlbSBzdHlsZT17IHtcblx0XHRcdFx0XHRmbGV4OiAndW5zZXQnLFxuXHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzFlbScsXG5cdFx0XHRcdH0gfT5cblx0XHRcdFx0XHR7Lyo8QnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0IDxCdXR0b25cblx0XHRcdFx0XHQgaXNTZWNvbmRhcnlcblx0XHRcdFx0XHQgb25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHQgfSB9XG5cdFx0XHRcdFx0ID5cblx0XHRcdFx0XHQgeyBfXyggJ0NvcHkgaXRlbXMgdG8gY2xpcGJvYXJkJywgJ2pldC1mcm9tLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdCA8L0J1dHRvbj5cblx0XHRcdFx0XHQgPEJ1dHRvblxuXHRcdFx0XHRcdCBpc1NlY29uZGFyeVxuXHRcdFx0XHRcdCBvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdCB9IH1cblx0XHRcdFx0XHQgPlxuXHRcdFx0XHRcdCB7IF9fKCAnSW1wb3J0IGl0ZW1zIGZyb20gY2xpcGJvYXJkJywgJ2pldC1mcm9tLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdCA8L0J1dHRvbj5cblx0XHRcdFx0XHQgPC9CdXR0b25Hcm91cD4qLyB9XG5cdFx0XHRcdDwvRmxleEl0ZW0+XG5cdFx0XHQ8L0ZsZXg+XG5cdFx0PC8+IH1cblx0XHR7IGFkZGl0aW9uYWxDb250cm9scyB9XG5cdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uICovIH1cblx0XHR7IGl0ZW1zRGF0YS5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4gPENhcmRcblx0XHRcdGVsZXZhdGlvbj17IDIgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgaXRlbUNsYXNzTmFtZXMgfVxuXHRcdFx0a2V5PXsgZ2V0UmVwZWF0ZXJJdGVtSWQoIGluZGV4ICkgfVxuXHRcdD5cblx0XHRcdDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17ICdyZXBlYXRlcl9faXRlbV9faGVhZGVyJyB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdGVyLWl0ZW1fX2xlZnQtaGVhZGluZ1wiPlxuXHRcdFx0XHRcdDxCdXR0b25Hcm91cCBjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbnMnIH0+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0aWNvbj17IGN1cnJlbnRJdGVtLl9fdmlzaWJsZSA/ICduby1hbHQnIDogJ2VkaXQnIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHRvZ2dsZVZpc2libGUoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17ICFCb29sZWFuKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17ICdhcnJvdy11cC1hbHQyJyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlVXAoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzRGlzYWJsZWRFbmQoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LWRvd24tYWx0MicgfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZURvd24oIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9PlxuXHRcdFx0XHRcdFx0XHR7IEl0ZW1IZWFkaW5nICYmIDxJdGVtSGVhZGluZ1xuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtPXsgZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbShcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEsIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHR7ICFJdGVtSGVhZGluZyAmJiBgIyR7IGluZGV4ICsgMSB9YCB9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8QnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBjbG9uZUl0ZW0oIGluZGV4ICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHsgX18oICdDbG9uZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZU9wdGlvbiggaW5kZXggKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyBfXyggJ0RlbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdDwvQ2FyZEhlYWRlcj5cblx0XHRcdHsgY3VycmVudEl0ZW0uX192aXNpYmxlICYmIDxDYXJkQm9keVxuXHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbV9fY29udGVudCcgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGNoaWxkcmVuICYmIDxGcmFnbWVudFxuXHRcdFx0XHRcdGtleT17IGByZXBlYXRlci1jb21wb25lbnRfX2l0ZW1fJHsgaW5kZXggfWAgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHtcblx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtLFxuXHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW06IGRhdGEgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIGRhdGEsXG5cdFx0XHRcdFx0XHRcdGluZGV4ICksXG5cdFx0XHRcdFx0XHRjdXJyZW50SW5kZXg6IGluZGV4LFxuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxuXHRcdFx0XHQ8L0ZyYWdtZW50PiB9XG5cdFx0XHRcdHsgIWNoaWxkcmVuICYmICdTZXQgdXAgeW91ciBSZXBlYXRlciBUZW1wbGF0ZSwgcGxlYXNlLicgfVxuXHRcdFx0PC9DYXJkQm9keT4gfVxuXHRcdDwvQ2FyZD4gKSB9XG5cdFx0eyAxIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8PlxuXHRcdFx0eyBhZGRpdGlvbmFsQ29udHJvbHMgfVxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWNvbnRyb2wtY2xlYXJcIlxuXHRcdFx0XHRsYWJlbD17IF9fKCAnU2FmZSBkZWxldGluZycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBzZXRTYWZlRGVsZXRpbmcgfVxuXHRcdFx0Lz5cblx0XHQ8Lz4gfVxuXHRcdDxCdXR0b25cblx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4gYWRkTmV3SXRlbSggbmV3SXRlbSApIH1cblx0XHQ+XG5cdFx0XHR7IGFkZE5ld0J1dHRvbkxhYmVsIH1cblx0XHQ8L0J1dHRvbj5cblx0PC9kaXY+O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyV2l0aFN0YXRlOyIsImltcG9ydCB1c2VSZXBlYXRlclN0YXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVJlcGVhdGVyU3RhdGUnO1xuaW1wb3J0IFJlcGVhdGVyU3RhdGVDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcmVwZWF0ZXIuc3RhdGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbi8qKlxuICogQHBhcmFtICBwcm9wcyB7eyBpdGVtLCBvblNldFN0YXRlLCBmdW5jdGlvbnMsIGNoaWxkcmVuIH19XG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBSZXBlYXRlckFkZE5ldyggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBpdGVtLFxuXHRcdCAgICAgIG9uU2V0U3RhdGUsXG5cdFx0ICAgICAgZnVuY3Rpb25zLFxuXHRcdCAgICAgIGNoaWxkcmVuLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0LyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cblxuXHRjb25zdCB7IGFkZE5ld0l0ZW0gfSA9IGZ1bmN0aW9uc1xuXHQ/PyB1c2VSZXBlYXRlclN0YXRlKCBvblNldFN0YXRlIClcblx0Pz8gdXNlQ29udGV4dCggUmVwZWF0ZXJTdGF0ZUNvbnRleHQgKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuXG5cdHJldHVybiA8QnV0dG9uXG5cdFx0aWNvbj17ICdwbHVzLWFsdDInIH1cblx0XHRpc1NlY29uZGFyeVxuXHRcdG9uQ2xpY2s9eyAoKSA9PiBhZGROZXdJdGVtKCBpdGVtICkgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvQnV0dG9uPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJBZGROZXc7IiwiaW1wb3J0IHVzZVJlcGVhdGVyU3RhdGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlUmVwZWF0ZXJTdGF0ZSc7XG5pbXBvcnQgUmVwZWF0ZXJTdGF0ZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5zdGF0ZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gUmVwZWF0ZXJBZGRPck9wZXJhdG9yKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIG9uU2V0U3RhdGUsXG5cdFx0ICAgICAgZnVuY3Rpb25zLFxuXHRcdCAgICAgIGNoaWxkcmVuLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0LyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cblxuXHRjb25zdCB7IGFkZE5ld0l0ZW0gfSA9IGZ1bmN0aW9uc1xuXHQ/PyB1c2VSZXBlYXRlclN0YXRlKCBvblNldFN0YXRlIClcblx0Pz8gdXNlQ29udGV4dCggUmVwZWF0ZXJTdGF0ZUNvbnRleHQgKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuXG5cdHJldHVybiA8QnV0dG9uXG5cdFx0aXNTZWNvbmRhcnlcblx0XHRpY29uPXsgJ3JhbmRvbWl6ZScgfVxuXHRcdG9uQ2xpY2s9eyAoKSA9PiBhZGROZXdJdGVtKCB7XG5cdFx0XHRfX3Zpc2libGU6IGZhbHNlLFxuXHRcdFx0b3Jfb3BlcmF0b3I6IHRydWUsXG5cdFx0fSApIH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0J1dHRvbj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyQWRkT3JPcGVyYXRvcjsiLCJpbXBvcnQgUmVwZWF0ZXJIZWFkQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmhlYWQnO1xuaW1wb3J0IFJlcGVhdGVyQnV0dG9uc0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5jdXN0b20uaXRlbS5idXR0b25zJztcbmltcG9ydCB1c2VSZXBlYXRlclN0YXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVJlcGVhdGVyU3RhdGUnO1xuaW1wb3J0IFJlcGVhdGVySXRlbUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5pdGVtJztcbmltcG9ydCBSZXBlYXRlclN0YXRlQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3JlcGVhdGVyLnN0YXRlJztcbmltcG9ydCBNYWNyb3NCdXR0b25UZW1wbGF0ZVxuXHRmcm9tICcuLi8uLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zQnV0dG9uVGVtcGxhdGUnO1xuaW1wb3J0IFBvcG92ZXJDb250ZXh0IGZyb20gJy4uLy4uL21hY3Jvcy5idXR0b24vY29udGV4dC9Qb3BvdmVyQ29udGV4dCc7XG5cbmNvbnN0IHtcblx0ICAgICAgQ2FyZCxcblx0ICAgICAgQnV0dG9uR3JvdXAsXG5cdCAgICAgIEJ1dHRvbixcblx0ICAgICAgQ2FyZEhlYWRlcixcblx0ICAgICAgQ2FyZEJvZHksXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEBwYXJhbSAgcHJvcHMge3sgaXRlbXMsIG9uU2V0U3RhdGUsIGZ1bmN0aW9ucywgY2hpbGRyZW4gfX1cbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fVxuICogQGNsYXNzXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBSZXBlYXRlciggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBpdGVtcyxcblx0XHQgICAgICBvblNldFN0YXRlLFxuXHRcdCAgICAgIGZ1bmN0aW9ucyxcblx0XHQgICAgICBjaGlsZHJlbixcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzICovXG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIGNsb25lSXRlbSxcblx0XHQgICAgICBtb3ZlVXAsXG5cdFx0ICAgICAgbW92ZURvd24sXG5cdFx0ICAgICAgdG9nZ2xlVmlzaWJsZSxcblx0XHQgICAgICBjaGFuZ2VDdXJyZW50SXRlbSxcblx0XHQgICAgICByZW1vdmVPcHRpb24sXG5cdCAgICAgIH0gPSBmdW5jdGlvbnNcblx0Pz8gdXNlUmVwZWF0ZXJTdGF0ZSggb25TZXRTdGF0ZSApXG5cdD8/IHVzZUNvbnRleHQoIFJlcGVhdGVyU3RhdGVDb250ZXh0ICk7XG5cblx0LyogZXNsaW50LWVuYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBpc1N1cHBvcnRlZDogaXNTdXBwb3J0ZWRIZWFkZXIsXG5cdFx0ICAgICAgcmVuZGVyOiBDdXN0b21IZWFkZXIsXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBSZXBlYXRlckhlYWRDb250ZXh0ICk7XG5cdGNvbnN0IHtcblx0XHQgICAgICBlZGl0OiBzdXBwb3J0RWRpdCxcblx0XHQgICAgICBtb3ZlOiBzdXBwb3J0TW92ZSxcblx0XHQgICAgICBjbG9uZTogc3VwcG9ydENsb25lLFxuXHRcdCAgICAgIGRlbGV0ZTogc3VwcG9ydERlbGV0ZSxcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIFJlcGVhdGVyQnV0dG9uc0NvbnRleHQgKTtcblxuXHRjb25zdCBSZXBlYXRlckhlYWRlciA9ICggeyBjdXJyZW50SXRlbSwgaW5kZXggfSApID0+IHtcblx0XHRpZiAoIGlzU3VwcG9ydGVkSGVhZGVyKCBjdXJyZW50SXRlbSApICkge1xuXHRcdFx0cmV0dXJuIDxDdXN0b21IZWFkZXJcblx0XHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XG5cdFx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0Lz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxzcGFuXG5cdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbS10aXRsZScgfVxuXHRcdD5cblx0XHRcdHsgYCMkeyBpbmRleCArIDEgfWAgfVxuXHRcdDwvc3Bhbj47XG5cdH07XG5cblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50JyB9XG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXInIH1cblx0PlxuXHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiAqL31cblx0XHR7IGl0ZW1zLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiA8Q2FyZFxuXHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdGVsZXZhdGlvbj17IDIgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudC1pdGVtJyB9XG5cdFx0XHRrZXk9eyBgamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50LWl0ZW0tJHsgaW5kZXggfWAgfVxuXHRcdD5cblx0XHRcdDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17ICdyZXBlYXRlcl9faXRlbV9faGVhZGVyJyB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdGVyLWl0ZW1fX2xlZnQtaGVhZGluZ1wiPlxuXHRcdFx0XHRcdDxCdXR0b25Hcm91cCBjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbnMnIH0+XG5cdFx0XHRcdFx0XHR7IChcblx0XHRcdFx0XHRcdFx0IXN1cHBvcnRFZGl0IHx8IHN1cHBvcnRFZGl0KCBjdXJyZW50SXRlbSApXG5cdFx0XHRcdFx0XHQpICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRpY29uPXsgY3VycmVudEl0ZW0uX192aXNpYmxlID8gJ25vLWFsdCcgOiAnZWRpdCcgfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gdG9nZ2xlVmlzaWJsZSggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uIGpldC1mYi1pcy10aGljaycgfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0XHRcdCFzdXBwb3J0TW92ZSB8fCBzdXBwb3J0TW92ZSggY3VycmVudEl0ZW0gKVxuXHRcdFx0XHRcdFx0KSAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyAhQm9vbGVhbiggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyAnYXJyb3ctdXAtYWx0MicgfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZVVwKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24gamV0LWZiLWlzLXRoaWNrJyB9XG5cdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHR7IChcblx0XHRcdFx0XHRcdFx0IXN1cHBvcnRNb3ZlIHx8IHN1cHBvcnRNb3ZlKCBjdXJyZW50SXRlbSApXG5cdFx0XHRcdFx0XHQpICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcblx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17ICEoXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBpdGVtcy5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LWRvd24tYWx0MicgfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZURvd24oIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbiBqZXQtZmItaXMtdGhpY2snIH1cblx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdDxSZXBlYXRlckhlYWRlclxuXHRcdFx0XHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XG5cdFx0XHRcdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEJ1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdHsgKFxuXHRcdFx0XHRcdFx0IXN1cHBvcnRDbG9uZSB8fCBzdXBwb3J0Q2xvbmUoIGN1cnJlbnRJdGVtIClcblx0XHRcdFx0XHQpICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGNsb25lSXRlbSggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiLWlzLXRoaWNrJyB9XG5cdFx0XHRcdFx0XHRpY29uPXsgJ2FkbWluLXBhZ2UnIH1cblx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0XHQhc3VwcG9ydERlbGV0ZSB8fCBzdXBwb3J0RGVsZXRlKCBjdXJyZW50SXRlbSApXG5cdFx0XHRcdFx0KSAmJiA8TWFjcm9zQnV0dG9uVGVtcGxhdGVcblx0XHRcdFx0XHRcdGljb249eyAndHJhc2gnIH1cblx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UG9wb3ZlckNvbnRleHQuQ29uc3VtZXI+XG5cdFx0XHRcdFx0XHRcdHsgKCB7IHNldFNob3dQb3BvdmVyIH0gKSA9PiA8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC41ZW0nLFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICdtYXgtY29udGVudCcsXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0J0RlbGV0ZSB0aGlzIGl0ZW0/Jyxcblx0XHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHRcdFx0XHQpIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0Jm5ic3A7XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlT3B0aW9uKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnWWVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdHsgJyAvICcgfVxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dQb3BvdmVyKCBmYWxzZSApIH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnTm8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiB9XG5cdFx0XHRcdFx0XHQ8L1BvcG92ZXJDb250ZXh0LkNvbnN1bWVyPlxuXHRcdFx0XHRcdDwvTWFjcm9zQnV0dG9uVGVtcGxhdGU+IH1cblx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdDwvQ2FyZEhlYWRlcj5cblx0XHRcdHsgY3VycmVudEl0ZW0uX192aXNpYmxlICYmIDxDYXJkQm9keVxuXHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbV9fY29udGVudCcgfVxuXHRcdFx0XHRrZXk9eyBgamV0LWZvcm0tYnVpbGRlcl9fY2FyZC1ib2R5LSR7IGluZGV4IH1gIH1cblx0XHRcdD5cblx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgY29udGV4dCA9IHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEl0ZW0sXG5cdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtOiBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKFxuXHRcdFx0XHRcdFx0XHRcdGRhdGEsIGluZGV4ICksXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRJbmRleDogaW5kZXgsXG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gPFJlcGVhdGVySXRlbUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyBjb250ZXh0IH0+XG5cdFx0XHRcdFx0XHRcdHsgIWNoaWxkcmVuICYmXG5cdFx0XHRcdFx0XHRcdCdTZXQgdXAgeW91ciBSZXBlYXRlciBUZW1wbGF0ZSwgcGxlYXNlLicgfVxuXHRcdFx0XHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlblxuXHRcdFx0XHRcdFx0XHQgID8gY2hpbGRyZW4oIGNvbnRleHQgKVxuXHRcdFx0XHRcdFx0XHQgIDogY2hpbGRyZW5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9SZXBlYXRlckl0ZW1Db250ZXh0LlByb3ZpZGVyPjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCkoKSB9XG5cdFx0XHQ8L0NhcmRCb2R5PiB9XG5cdFx0PC9DYXJkPiApIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlcjsiLCJpbXBvcnQgUmVwZWF0ZXJTdGF0ZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5zdGF0ZSc7XG5pbXBvcnQgdXNlUmVwZWF0ZXJTdGF0ZSBmcm9tICcuLi8uLi9ob29rcy91c2VSZXBlYXRlclN0YXRlJztcblxuZnVuY3Rpb24gUmVwZWF0ZXJTdGF0ZSggeyBzdGF0ZSwgY2hpbGRyZW4gfSApIHtcblx0Y29uc3QgZnVuY3Rpb25zID0gdXNlUmVwZWF0ZXJTdGF0ZSggc3RhdGUgKTtcblxuXHRyZXR1cm4gPFJlcGVhdGVyU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgZnVuY3Rpb25zIH0+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvUmVwZWF0ZXJTdGF0ZUNvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlclN0YXRlOyIsImltcG9ydCBTYWZlRGVsZXRlQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3NhZmUuZGVsZXRlJztcblxuY29uc3QgeyBUb2dnbGVDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIFNhZmVEZWxldGVUb2dnbGUoIHByb3BzICkge1xuXHRjb25zdCBbIGlzU2FmZURlbGV0aW5nLCBzZXRTYWZlRGVsZXRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdGxhYmVsPXsgX18oICdTYWZlIGRlbGV0aW5nJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cblx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cblx0XHQvPlxuXHRcdDxTYWZlRGVsZXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IGlzU2FmZURlbGV0aW5nIH0+XG5cdFx0XHR7IHByb3BzLmNoaWxkcmVuIH1cblx0XHQ8L1NhZmVEZWxldGVDb250ZXh0LlByb3ZpZGVyPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhZmVEZWxldGVUb2dnbGU7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQoIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGlzU3VwcG9ydGVkOiBpdGVtID0+IGZhbHNlLFxuXHRyZW5kZXI6ICggeyBjaGlsZHJlbiB9ICkgPT4gY2hpbGRyZW4sXG59ICk7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5jb25zdCBSZXBlYXRlckJ1dHRvbnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRlZGl0OiBpdGVtID0+IHRydWUsXG5cdG1vdmU6IGl0ZW0gPT4gdHJ1ZSxcblx0Y2xvbmU6IGl0ZW0gPT4gdHJ1ZSxcblx0ZGVsZXRlOiBpdGVtID0+IHRydWUsXG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyQnV0dG9uc0NvbnRleHQ7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5jb25zdCBSZXBlYXRlckhlYWRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRpc1N1cHBvcnRlZDogaXRlbSA9PiBmYWxzZSxcblx0cmVuZGVyOiAoIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKSA9PiBudWxsLFxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlckhlYWRDb250ZXh0OyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgUmVwZWF0ZXJJdGVtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0Y3VycmVudEl0ZW06IHt9LFxuXHRjaGFuZ2VDdXJyZW50SXRlbTogKCkgPT4ge30sXG5cdGN1cnJlbnRJbmRleDogLTEsXG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVySXRlbUNvbnRleHQ7IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBSZXBlYXRlclN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIGZhbHNlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyU3RhdGVDb250ZXh0OyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGV4dCggZmFsc2UgKTsiLCJpbXBvcnQgZ2F0ZXdheXMgZnJvbSAnLi9nYXRld2F5cy9zdG9yZSc7XG5pbXBvcnQgZXZlbnRzU3RvcmUgZnJvbSAnLi9ldmVudHMvc3RvcmUnO1xuaW1wb3J0IGJsb2NrQ29uZGl0aW9ucyBmcm9tICcuL2Jsb2NrLWNvbmRpdGlvbnMvc3RvcmUnO1xuaW1wb3J0IG1hY3JvcyBmcm9tICcuL21hY3Jvcy5idXR0b24vc3RvcmUnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi92YWxpZGF0aW9uL3N0b3JlJztcbmltcG9ydCBmaWVsZHMgZnJvbSAnLi9ibG9ja3Mvc3RvcmUnO1xuaW1wb3J0ICcuL21pZ3JhdGlvbnMvbWlncmF0ZS5nYXRld2F5cy5zZXR0aW5ncyc7XG5cbmNvbnN0IHtcblx0ICAgICAgcmVnaXN0ZXIsXG5cdCAgICAgIGRpc3BhdGNoLFxuICAgICAgfSA9IHdwLmRhdGE7XG5jb25zdCB7XG5cdCAgICAgIGFkZEFjdGlvbixcbiAgICAgIH0gPSB3cC5ob29rcztcblxuY29uc3Qgc3RvcmVzID0gW1xuXHRnYXRld2F5cyxcblx0ZXZlbnRzU3RvcmUsXG5cdGJsb2NrQ29uZGl0aW9ucyxcblx0bWFjcm9zLFxuXHR2YWxpZGF0aW9uLFxuXHRmaWVsZHMsXG5dO1xuXG5zdG9yZXMuZm9yRWFjaCggcmVnaXN0ZXIgKTtcblxuZGlzcGF0Y2goICdqZXQtZm9ybXMvZXZlbnRzJyApLnJlZ2lzdGVyKCB3aW5kb3cuamV0Rm9ybUV2ZW50cy50eXBlcyApO1xuZGlzcGF0Y2goICdqZXQtZm9ybXMvZXZlbnRzJyApLmxvY2tBY3Rpb25zKCk7XG5kaXNwYXRjaCggJ2pldC1mb3Jtcy92YWxpZGF0aW9uJyApLnJlZ2lzdGVyKCB3aW5kb3cuamV0Rm9ybVZhbGlkYXRpb24gKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLmNoYW5nZS5ibG9ja0NvbmRpdGlvbnMucmVuZGVyU3RhdGUnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9ldmVudHMnLFxuXHRmdW5jdGlvbiAoIHN0YXRlcyApIHtcblx0XHRkaXNwYXRjaCggJ2pldC1mb3Jtcy9ldmVudHMnICkuY2xlYXJEeW5hbWljRXZlbnRzKCk7XG5cblx0XHRjb25zdCBldmVudHMgPSBzdGF0ZXMubWFwKCAoIHsgdmFsdWUgfSApID0+IHtcblx0XHRcdHZhbHVlID0gJ09OLicgKyB2YWx1ZTtcblxuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsOiB2YWx1ZSwgaXNEeW5hbWljOiB0cnVlIH07XG5cdFx0fSApO1xuXG5cdFx0ZGlzcGF0Y2goICdqZXQtZm9ybXMvZXZlbnRzJyApLnJlZ2lzdGVyKCBldmVudHMgKTtcblx0fSxcbik7XG5cbmRpc3BhdGNoKCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkucmVnaXN0ZXIoXG5cdHdpbmRvdy5qZXRGb3JtQmxvY2tDb25kaXRpb25zLFxuKTtcbiIsImltcG9ydCB7IGFwcGx5RmlsdGVycyB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5jbGFzcyBUb29scyB7XG5cblx0c3RhdGljIHdpdGhQbGFjZWhvbGRlciggc291cmNlLCBsYWJlbCA9ICctLScsIHZhbHVlID0gJycgKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgbGFiZWwsIHZhbHVlIH0sXG5cdFx0XHQuLi5zb3VyY2UsXG5cdFx0XTtcblx0fVxuXG5cdHN0YXRpYyBnZXRSYW5kb21JRCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDg5OTkgKSArIDEwMDA7XG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBldmVudCA9IG5hbWUgPT4ge1xuXHRjb25zdCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgPSBuZXcgRXZlbnQoIG5hbWUgKTtcblx0cmV0dXJuICgpID0+IGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGluaXRpYWxpemVDYWxsYmFja3NFdmVudCApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3RlbiA9ICggbmFtZSwgZnVuYyApID0+IHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZnVuYyApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbiggbGlzdEFyciwgbmFtZSApIHtcblx0aWYgKCAhbGlzdEFycj8ubGVuZ3RoICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHJldHVybiBsaXN0QXJyLm1hcCggY3VycmVudCA9PiB7XG5cdFx0cmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY3VycmVudCA/IGN1cnJlbnRbIG5hbWUgXSA6IGN1cnJlbnQ7XG5cdH0gKTtcbn1cblxuY29uc3QgY29udmVydFN5bWJvbHMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIudG9vbHMuY29udmVydFN5bWJvbHMnLCB7XG5cdGNoZWNrQ3lyUmVnZXg6IC9b0LAt0Y/RkdGX0ZTSkdGWXS9pLFxuXHRjeXJSZWdleDogL1vQsC3Rj9GR0ZfRlNKR0ZZdL2dpLFxuXHRjaGFyc01hcDoge1xuXHRcdCfQsCc6ICdhJywgJ9CxJzogJ2InLCAn0LInOiAndicsICfQsyc6ICdnJywgJ9C0JzogJ2QnLFxuXHRcdCfQtSc6ICdlJywgJ9GRJzogJ2lvJywgJ9C2JzogJ3poJywgJ9C3JzogJ3onLCAn0LgnOiAnaScsXG5cdFx0J9C5JzogJ2knLCAn0LonOiAnaycsICfQuyc6ICdsJywgJ9C8JzogJ20nLCAn0L0nOiAnbicsXG5cdFx0J9C+JzogJ28nLCAn0L8nOiAncCcsICfRgCc6ICdyJywgJ9GBJzogJ3MnLCAn0YInOiAndCcsXG5cdFx0J9GDJzogJ3UnLCAn0YQnOiAnZicsICfRhSc6ICdraCcsICfRhic6ICd0cycsICfRhyc6ICdjaCcsXG5cdFx0J9GIJzogJ3NoJywgJ9GJJzogJ3NoY2gnLCAn0YsnOiAneScsICfRjSc6ICdlJywgJ9GOJzogJ2l1Jyxcblx0XHQn0Y8nOiAnaWEnLCAn0ZcnOiAnaScsICfRlCc6ICdpZScsICfSkSc6ICdnJywgJ9GWJzogJ2knLFxuXHR9LFxufSApO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVDeXJUb0xhdGluKCBzdHIgKSB7XG5cdGlmICggY29udmVydFN5bWJvbHMuY2hlY2tDeXJSZWdleC50ZXN0KCBzdHIgKSApIHtcblx0XHRzdHIgPSBzdHIucmVwbGFjZSggY29udmVydFN5bWJvbHMuY3lyUmVnZXgsIGZ1bmN0aW9uICggbWF0Y2ggKSB7XG5cblx0XHRcdGlmICggdW5kZWZpbmVkID09PSBjb252ZXJ0U3ltYm9scy5jaGFyc01hcFsgbWF0Y2ggXSApIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY29udmVydFN5bWJvbHMuY2hhcnNNYXBbIG1hdGNoIF07XG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnZlcnRlZE5hbWUoIHZhbHVlVG9DaGFuZ2UgKSB7XG5cdGxldCBzbHVnID0gdmFsdWVUb0NoYW5nZS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8vIFJlcGxhY2UgYWNjZW50c1xuXHRzbHVnID0gc2x1Zy5ub3JtYWxpemUoICdORkQnICkucmVwbGFjZSggL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnICk7XG5cblx0Ly8gUmVwbGFjZSBjeXJpbGxpY1xuXHRzbHVnID0gbWF5YmVDeXJUb0xhdGluKCBzbHVnICk7XG5cblx0Ly8gR2V0IGxpc3Qgb2Ygd29yZHNcblx0Y29uc3Qgc2x1Z1BhcnRzID0gc2x1Zy5tYXRjaCggL1xcYihcXHcrKVxcYi9nICk7XG5cblx0c2x1ZyA9ICcnO1xuXG5cdGZvciAoIGNvbnN0IFsgc2x1Z0luZGV4LCBzbHVnUGFydCBdIG9mIE9iamVjdC5lbnRyaWVzKCBzbHVnUGFydHMgKSApIHtcblx0XHRzbHVnICs9IChcblx0XHRcdDAgPT09ICtzbHVnSW5kZXggPyAnJyA6ICdfJ1xuXHRcdCkgKyBzbHVnUGFydDtcblxuXHRcdGNvbnN0IGlzTGFzdCA9IDEgKyArc2x1Z0luZGV4ID09PSBzbHVnUGFydHMubGVuZ3RoO1xuXG5cdFx0aWYgKCBzbHVnLmxlbmd0aCA+IDYwICkge1xuXHRcdFx0cmV0dXJuIHNsdWcgKyAoXG5cdFx0XHRcdGlzTGFzdCA/ICcnIDogJ19fJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc2x1Zztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzbmFtZXMoIC4uLmFkZGl0aW9uYWwgKSB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xuXG5cdGNvbnN0IHBhcnNlVmFsdWVzID0gc291cmNlID0+IHtcblx0XHRzb3VyY2UuZm9yRWFjaCggaXRlbUNsYXNzID0+IHtcblx0XHRcdGlmICggIWl0ZW1DbGFzcyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpdGVtQ2xhc3MgKSApIHtcblx0XHRcdFx0cGFyc2VWYWx1ZXMoIGl0ZW1DbGFzcyApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGl0ZW1DbGFzcyApIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goIGl0ZW1DbGFzcy50cmltKCkgKTtcblx0XHRcdH1cblx0XHRcdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiBpdGVtQ2xhc3MgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGZvciAoIGNvbnN0IGl0ZW1DbGFzc0tleSBpbiBpdGVtQ2xhc3MgKSB7XG5cdFx0XHRcdGlmICggaXRlbUNsYXNzWyBpdGVtQ2xhc3NLZXkgXSApIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaCggKFxuXHRcdFx0XHRcdFx0aXRlbUNsYXNzS2V5ICsgJydcblx0XHRcdFx0XHQpLnRyaW0oKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdHBhcnNlVmFsdWVzKCBhZGRpdGlvbmFsICk7XG5cblx0cmV0dXJuIHJlc3VsdC5qb2luKCAnICcgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRPYmplY3RUb09wdGlvbnNMaXN0KCBlbnRyaWVzID0gW10sIHtcblx0dXNlUGxhY2Vob2xkZXIgPSB0cnVlLFxuXHRsYWJlbCA9ICctLScsXG5cdHZhbHVlID0gJycsXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB7fSApIHtcblx0Y29uc3QgcGxhY2Vob2xkZXIgPSB7IGxhYmVsLCB2YWx1ZSB9O1xuXG5cdGlmICggIWVudHJpZXMgKSB7XG5cdFx0cmV0dXJuIHVzZVBsYWNlaG9sZGVyID8gWyBwbGFjZWhvbGRlciBdIDogW107XG5cdH1cblxuXHRjb25zdCBvcHRpb25zID0gT2JqZWN0LmVudHJpZXMoIGVudHJpZXMgKS5tYXAoICggb3B0aW9uICkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogb3B0aW9uLnZhbHVlLFxuXHRcdFx0bGFiZWw6IG9wdGlvbi5sYWJlbCxcblx0XHR9O1xuXHR9ICk7XG5cblx0cmV0dXJuIHVzZVBsYWNlaG9sZGVyID8gWyBwbGFjZWhvbGRlciwgLi4ub3B0aW9ucyBdIDogb3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2V0VXJsKCB1cmwgPSAnJyApIHtcblx0cmV0dXJuIEpldEZvcm1FZGl0b3JEYXRhLmFzc2V0c1VybCArIHVybDtcbn1cblxuLyoqXG4gKiBAc2luY2UgMy4xLjBcbiAqXG4gKiBAcGFyYW0gIG9ialxuICogQHBhcmFtICBwYXRoXG4gKiBAcGFyYW0gIHZhbHVlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KCBvYmosIHBhdGgsIHZhbHVlICkge1xuXHQvLyBDcmVhdGUgYSBzaGFsbG93IGNvcHkgb2YgdGhlIG9iamVjdFxuXHRjb25zdCBuZXdPYmogPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggb2JqICkgKTtcblxuXHRsZXQgY3VycmVudE9iaiA9IG5ld09iajtcblx0bGV0IGN1cnJlbnRLZXk7XG5cblx0Ly8gVHJhdmVyc2UgdGhlIG9iamVjdCBhY2NvcmRpbmcgdG8gdGhlIHBhdGhcblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKyApIHtcblx0XHRjdXJyZW50S2V5ID0gcGF0aFsgaSBdO1xuXG5cdFx0Ly8gSWYgdGhlIGN1cnJlbnQga2V5IGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBhIG5ldyBvYmplY3QgYXQgdGhhdCBrZXlcblx0XHRpZiAoICFjdXJyZW50T2JqWyBjdXJyZW50S2V5IF0gKSB7XG5cdFx0XHRjdXJyZW50T2JqWyBjdXJyZW50S2V5IF0gPSB7fTtcblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgdGhlIGN1cnJlbnQgb2JqZWN0IGFuZCBrZXlcblx0XHRpZiAoIGkgPT09IHBhdGgubGVuZ3RoIC0gMSApIHtcblx0XHRcdC8vIElmIHRoaXMgaXMgdGhlIGxhc3Qga2V5IGluIHRoZSBwYXRoLCBzZXQgdGhlIHZhbHVlXG5cdFx0XHRjdXJyZW50T2JqWyBjdXJyZW50S2V5IF0gPSB2YWx1ZTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBPdGhlcndpc2UsIGNvbnRpbnVlIHRyYXZlcnNpbmcgdGhlIG9iamVjdFxuXHRcdFx0Y3VycmVudE9ialsgY3VycmVudEtleSBdID0geyAuLi5jdXJyZW50T2JqWyBjdXJyZW50S2V5IF0gfTtcblx0XHRcdGN1cnJlbnRPYmogICAgICAgICAgICAgICA9IGN1cnJlbnRPYmpbIGN1cnJlbnRLZXkgXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIEBzaW5jZSAzLjEuMFxuICpcbiAqIEBwYXJhbSAgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KCB2YWx1ZSApIHtcblx0aWYgKCBudWxsID09PSB2YWx1ZSB8fCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHZhbHVlICYmICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiAhT2JqZWN0LmtleXMoIHZhbHVlICk/Lmxlbmd0aDtcblx0fVxuXG5cdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gMCA9PT0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gIXZhbHVlPy5sZW5ndGg7XG59XG5cbmV4cG9ydCBjb25zdCBleHRlbmRQcm90b3R5cGUgPSAoIFBhcmVudEZ1bmN0aW9uICkgPT4ge1xuXHRmdW5jdGlvbiBDaGlsZEZ1bmN0aW9uUHJvdG90eXBlKCkge1xuXHRcdFBhcmVudEZ1bmN0aW9uLmNhbGwoIHRoaXMgKTtcblx0fVxuXG5cdENoaWxkRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0XHRQYXJlbnRGdW5jdGlvbi5wcm90b3R5cGUsXG5cdCk7XG5cblx0cmV0dXJuIENoaWxkRnVuY3Rpb25Qcm90b3R5cGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sczsiLCJjb25zdCB7IHN0b3JlOiBibG9ja3NTdG9yZSB9ID0gd3AuYmxvY2tzO1xuXG5jbGFzcyBNZXNzYWdlSXRlbSB7XG5cdGNvbnN0cnVjdG9yKCBtZXNzYWdlICkge1xuXHRcdHRoaXMuaWQgICAgID0gbWVzc2FnZS5pZDtcblx0XHR0aGlzLmJsb2NrcyA9IFtdO1xuXG5cdFx0dGhpcy5zZXRCbG9ja3NNZXRhKCBtZXNzYWdlLnN1cHBvcnRlZCApO1xuXHR9XG5cblx0c2V0QmxvY2tzTWV0YSggYmxvY2tzICkge1xuXHRcdGlmICggIWJsb2Nrcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5ibG9ja3MgPSBibG9ja3MubWFwKCBibG9jayA9PiB7XG5cdFx0XHRjb25zdCBibG9ja1R5cGUgPSB3cC5kYXRhLnNlbGVjdCggYmxvY2tzU3RvcmUgKS5nZXRCbG9ja1R5cGUoXG5cdFx0XHRcdGBqZXQtZm9ybXMvJHsgYmxvY2sgfWAsXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0aXRsZTogYmxvY2tUeXBlLnRpdGxlLFxuXHRcdFx0XHRpY29uOiBibG9ja1R5cGUuaWNvbi5zcmMsXG5cdFx0XHR9O1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSXRlbTsiLCJpbXBvcnQgTWVzc2FnZUl0ZW0gZnJvbSAnLi9NZXNzYWdlSXRlbSc7XG5cbmNsYXNzIFZhbGlkYXRpb25NZXNzYWdlcyB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pdGVtcyA9IFtdO1xuXHR9XG5cblx0cHVzaCggbWVzc2FnZSApIHtcblx0XHR0aGlzLml0ZW1zLnB1c2goIG5ldyBNZXNzYWdlSXRlbSggbWVzc2FnZSApICk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uTWVzc2FnZXM7IiwiaW1wb3J0IEVkaXRSdWxlc01vZGFsQ29udGV4dCBmcm9tICcuL0VkaXRSdWxlc01vZGFsQ29udGV4dCc7XG5pbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IERldGFpbHNDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRhaWxzQ29udGFpbmVyJztcbmltcG9ydCBIb3ZlckNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hvdmVyQ29udGFpbmVyJztcbmltcG9ydCBIdW1hblJlYWRhYmxlUnVsZSBmcm9tICcuL0h1bWFuUmVhZGFibGVSdWxlJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIEFkdmFuY2VkUnVsZUl0ZW0oIHsgcnVsZSwgaW5kZXggPSAwIH0gKSB7XG5cdGNvbnN0IHsgc2V0U2hvd01vZGFsIH0gICAgICAgICAgICAgID0gdXNlQ29udGV4dCggRWRpdFJ1bGVzTW9kYWxDb250ZXh0ICk7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgWyBpc0hvdmVyLCBzZXRIb3ZlciBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9XCJqZXQtZmIgcC1yZWxhdGl2ZVwiXG5cdFx0b25Nb3VzZU92ZXI9eyAoKSA9PiBzZXRIb3ZlciggdHJ1ZSApIH1cblx0XHRvbkZvY3VzPXsgKCkgPT4gc2V0SG92ZXIoIHRydWUgKSB9XG5cdFx0b25Nb3VzZU91dD17ICgpID0+IHNldEhvdmVyKCBmYWxzZSApIH1cblx0XHRvbkJsdXI9eyAoKSA9PiBzZXRIb3ZlciggZmFsc2UgKSB9XG5cdD5cblx0XHQ8SG92ZXJDb250YWluZXIgaXNIb3Zlcj17IGlzSG92ZXIgfT5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRpY29uPXsgJ2VkaXQnIH1cblx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdC4uLmF0dHJpYnV0ZXMudmFsaWRhdGlvbixcblx0XHRcdFx0XHRcdFx0cnVsZXM6IGF0dHJpYnV0ZXMudmFsaWRhdGlvbi5ydWxlcy5tYXAoXG5cdFx0XHRcdFx0XHRcdFx0KCBjdXJyZW50LCBjdXJyZW50SW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50Ll9fdmlzaWJsZSA9IGluZGV4ID09PSBjdXJyZW50SW5kZXg7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0c2V0U2hvd01vZGFsKCBwcmV2ID0+ICFwcmV2ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnRWRpdCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0aWNvbj17ICd0cmFzaCcgfVxuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRcdFx0Li4uYXR0cmlidXRlcy52YWxpZGF0aW9uLFxuXHRcdFx0XHRcdFx0XHRydWxlczogYXR0cmlidXRlcy52YWxpZGF0aW9uLnJ1bGVzLmZpbHRlcihcblx0XHRcdFx0XHRcdFx0XHQoIGN1cnJlbnQsIGN1cnJlbnRJbmRleCApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJbmRleCAhPT0gaW5kZXhcblx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnRGVsZXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9Ib3ZlckNvbnRhaW5lcj5cblx0XHQ8RGV0YWlsc0NvbnRhaW5lcj5cblx0XHRcdDxIdW1hblJlYWRhYmxlUnVsZSBydWxlPXsgcnVsZSB9Lz5cblx0XHQ8L0RldGFpbHNDb250YWluZXI+XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSdWxlSXRlbTsiLCJpbXBvcnQgVG9vbHMgZnJvbSAnLi4vLi4vdG9vbHMnO1xuaW1wb3J0IFJlcGVhdGVySXRlbUNvbnRleHQgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29udGV4dC9yZXBlYXRlci5pdGVtJztcbmltcG9ydCBCYXNlSGVscCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhc2VIZWxwJztcbmltcG9ydCBBZHZhbmNlZE1vZGFsQ29udHJvbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkdmFuY2VkTW9kYWxDb250cm9sJztcbmltcG9ydCBDaG9vc2VSZWxhdGVkRmllbGQgZnJvbSAnLi9DaG9vc2VSZWxhdGVkRmllbGQnO1xuaW1wb3J0IHsgTm90aWNlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7dXNlQWN0aW9uc30gZnJvbSBcImpldC1mb3JtLWJ1aWxkZXItYWN0aW9uc1wiO1xuXG5jb25zdCB7XG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG5cdCAgICAgIFRleHRhcmVhQ29udHJvbCxcblx0ICAgICAgVGV4dENvbnRyb2wsXG5cdCAgICAgIHdpdGhGaWx0ZXJzLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG5cdCAgICAgIHVzZVN0YXRlLFxuXHQgICAgICB1c2VFZmZlY3QsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IHdwLmhvb2tzO1xuY29uc3Qge1xuXHQgICAgICBydWxlX3R5cGVzOiBydWxlVHlwZXMsXG5cdCAgICAgIHNzcl9jYWxsYmFja3M6IHNzckNhbGxiYWNrcyxcbiAgICAgIH0gPSB3aW5kb3cuamV0Rm9ybVZhbGlkYXRpb247XG5cbmNvbnN0IHNzckNhbGxiYWNrc0tleXMgPSBzc3JDYWxsYmFja3MubWFwKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlICk7XG5cbmZ1bmN0aW9uIGdldExhYmVsKCB0eXBlICkge1xuXHRjb25zdCBpbmRleFJ1bGUgPSBydWxlVHlwZXMuZmluZEluZGV4KCAoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSB0eXBlICk7XG5cdGNvbnN0IGZhbGxiYWNrICA9IF9fKCAnRW50ZXIgdmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcblxuXHRpZiAoIC0xID09PSBpbmRleFJ1bGUgKSB7XG5cdFx0cmV0dXJuIGZhbGxiYWNrO1xuXHR9XG5cblx0cmV0dXJuIHJ1bGVUeXBlc1sgaW5kZXhSdWxlIF0/LmNvbnRyb2xfbGFiZWwgPz8gZmFsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIFJ1bGVTcGVjaWZpY0NvbnRyb2xzKCB7XG5cdGN1cnJlbnRJdGVtLFxuXHRjaGFuZ2VDdXJyZW50SXRlbSxcbn0gKSB7XG5cdGNvbnN0IFsgbGFiZWwsIHNldExhYmVsIF0gPSB1c2VTdGF0ZSggKCkgPT4gZ2V0TGFiZWwoIGN1cnJlbnRJdGVtLnR5cGUgKSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNldExhYmVsKCBnZXRMYWJlbCggY3VycmVudEl0ZW0udHlwZSApICk7XG5cdH0sIFsgY3VycmVudEl0ZW0udHlwZSBdICk7XG5cblx0c3dpdGNoICggY3VycmVudEl0ZW0udHlwZSApIHtcblx0XHRjYXNlICdlcXVhbCc6XG5cdFx0Y2FzZSAnY29udGFpbic6XG5cdFx0Y2FzZSAnY29udGFpbl9ub3QnOlxuXHRcdGNhc2UgJ3JlZ2V4cCc6XG5cdFx0Y2FzZSAncmVnZXhwX25vdCc6XG5cdFx0XHRyZXR1cm4gPD5cblx0XHRcdFx0PENob29zZVJlbGF0ZWRGaWVsZC8+XG5cdFx0XHRcdHsgIUJvb2xlYW4oIGN1cnJlbnRJdGVtLmZpZWxkICkgJiYgPEFkdmFuY2VkTW9kYWxDb250cm9sXG5cdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0b25DaGFuZ2VQcmVzZXQ9eyB2YWx1ZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZSB9ICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlTWFjcm9zPXsgbmFtZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSgge1xuXHRcdFx0XHRcdFx0dmFsdWU6IChcblx0XHRcdFx0XHRcdFx0Y3VycmVudEl0ZW0udmFsdWUgPz8gJydcblx0XHRcdFx0XHRcdCkgKyBuYW1lLFxuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7ICggeyBpbnN0YW5jZUlkIH0gKSA9PiA8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdFx0XHRpZD17IGluc3RhbmNlSWQgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IHZhbHVlIH0gKSB9XG5cdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHQ8L0FkdmFuY2VkTW9kYWxDb250cm9sPiB9XG5cdFx0XHQ8Lz47XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5hZHZhbmNlZC5ydWxlLmNvbnRyb2xzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHQoIERlZmF1bHRDb250cm9scyApID0+ICggcHJvcHMgKSA9PiB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSA9IHByb3BzO1xuXHRcdGNvbnN0IFsgc2hvd0RldGFpbHMsIHNldFNob3dEZXRhaWxzIF0gICAgPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRcdGNvbnN0IFsgYWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xuXG5cdFx0Y29uc3QgaGFzU2F2ZVJlY29yZCA9IGFjdGlvbnMuc29tZShjdXJyZW50ID0+XG5cdFx0XHRjdXJyZW50LnR5cGUgPT09ICdzYXZlX3JlY29yZCcgJiYgKGN1cnJlbnQuaXNfZXhlY3V0ZSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnQuaXNfZXhlY3V0ZSA9PT0gdHJ1ZSlcblx0XHQpID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJztcblxuXHRcdGlmICggJ3NzcicgIT09IGN1cnJlbnRJdGVtLnR5cGUgKSB7XG5cdFx0XHRyZXR1cm4gPERlZmF1bHRDb250cm9scyB7IC4uLnByb3BzIH0gLz47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZnVuY3Rpb25OYW1lID0gY3VycmVudEl0ZW0udmFsdWUgfHwgJ2N1c3RvbV9qZmJfZmllbGRfdmFsaWRhdGlvbic7XG5cblx0XHRyZXR1cm4gPD5cblx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0b3B0aW9ucz17IFRvb2xzLndpdGhQbGFjZWhvbGRlcihcblx0XHRcdFx0XHRzc3JDYWxsYmFja3MsXG5cdFx0XHRcdFx0X18oICdDdXN0b20gZnVuY3Rpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0KSB9XG5cdFx0XHRcdGxhYmVsPXsgX18oICdDaG9vc2UgY2FsbGJhY2snLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IHZhbHVlIH0gKSB9XG5cdFx0XHQvPlxuXHRcdFx0eyAnaXNfZmllbGRfdmFsdWVfdW5pcXVlJyA9PT0gY3VycmVudEl0ZW0udmFsdWUgJiYgKFxuXHRcdFx0XHQ8Tm90aWNlIHN0YXR1cz17IGhhc1NhdmVSZWNvcmQgfSBpc0Rpc21pc3NpYmxlPXsgZmFsc2UgfT5cblx0XHRcdFx0XHR7IF9fKCAnVGhpcyBjYWxsYmFjayByZXF1aXJlcyB0aGUgU2F2ZSBGb3JtIFJlY29yZCBhY3Rpb24gdG8gd29yayBjb3JyZWN0bHkuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L05vdGljZT5cblx0XHRcdCl9XG5cdFx0XHR7ICFzc3JDYWxsYmFja3NLZXlzLmluY2x1ZGVzKCBjdXJyZW50SXRlbS52YWx1ZSApICYmIDw+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdGdW5jdGlvbiBuYW1lJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWUgfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJhc2VIZWxwPlxuXHRcdFx0XHRcdHsgX18oICdFeGFtcGxlIG9mIHJlZ2lzdGVyaW5nIGEgZnVuY3Rpb24gYmVsb3cuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxuXHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovfVxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93RGV0YWlscyggcHJldiA9PiAhcHJldiApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7IHNob3dEZXRhaWxzXG5cdFx0XHRcdFx0XHQgID8gX18oICdIaWRlJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdFx0XHRcdCAgOiBfXyggJ1Nob3cnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L0Jhc2VIZWxwPlxuXHRcdFx0XHR7IHNob3dEZXRhaWxzICYmIDxwcmU+XG5cdFx0XHRcdFx0eyBgLyoqXG4gKiBUbyBnZXQgYWxsIHRoZSB2YWx1ZXMgb2YgdGhlIGZpZWxkcyBpbiB0aGUgZm9ybSwgeW91IGNhbiB1c2UgdGhlIGV4cHJlc3Npb246XG4gKiBqZXRfZmJfcmVxdWVzdF9oYW5kbGVyKCktPmdldF9yZXF1ZXN0KCkgb3IgJGNvbnRleHQtPmdldF9yZXF1ZXN0KClcbiAqXG4gKiBJZiB0aGUgZmllbGQgaXMgbG9jYXRlZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSByZXBlYXRlciwgdGhlbiBvbmx5XG4gKiBqZXRfZmJfcmVxdWVzdF9oYW5kbGVyKCktPmdldF9yZXF1ZXN0KCksIGJ1dCAkY29udGV4dC0+Z2V0X3JlcXVlc3QoKSBcbiAqIHdpbGwgcmV0dXJuIHRoZSB2YWx1ZXMgb2YgYWxsIGZpZWxkcyBvZiB0aGUgY3VycmVudCByZXBlYXRlciBlbGVtZW50XG4gKlxuICogQHBhcmFtICR2YWx1ZSBtaXhlZFxuICogQHBhcmFtICRjb250ZXh0IFxcXFxKZXRfRm9ybV9CdWlsZGVyXFxcXFJlcXVlc3RcXFxcUGFyc2VyX0NvbnRleHRcbiAqXG4gKiBAcmV0dXJuIGJvb2xcbiAqL1xuZnVuY3Rpb24gJHsgZnVuY3Rpb25OYW1lIH0oICR2YWx1ZSwgJGNvbnRleHQgKTogYm9vbCB7XG5cdC8vIHlvdXIgbG9naWNcblx0cmV0dXJuIHRydWU7XG59YCB9XG5cdFx0XHRcdDwvcHJlPiB9XG5cdFx0XHQ8Lz4gfVxuXHRcdDwvPjtcblx0fSxcbik7XG5cbmNvbnN0IFJ1bGVDb250cm9scyA9IHdpdGhGaWx0ZXJzKFxuXHQnamV0LmZiLmFkdmFuY2VkLnJ1bGUuY29udHJvbHMnLFxuKSggUnVsZVNwZWNpZmljQ29udHJvbHMgKTtcblxuZnVuY3Rpb24gQWR2YW5jZWRSdWxlTW9kYWxJdGVtKCkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgY3VycmVudEl0ZW0sXG5cdFx0ICAgICAgY2hhbmdlQ3VycmVudEl0ZW0sXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBSZXBlYXRlckl0ZW1Db250ZXh0ICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdG9wdGlvbnM9eyBUb29scy53aXRoUGxhY2Vob2xkZXIoIHJ1bGVUeXBlcyApIH1cblx0XHRcdGxhYmVsPXsgX18oICdSdWxlIHR5cGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnR5cGUgfVxuXHRcdFx0b25DaGFuZ2U9eyB0eXBlID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IHR5cGUgfSApIH1cblx0XHQvPlxuXHRcdDxSdWxlQ29udHJvbHNcblx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBjaGFuZ2VDdXJyZW50SXRlbSB9XG5cdFx0Lz5cblx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnRXJyb3IgbWVzc2FnZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ubWVzc2FnZSB9XG5cdFx0XHRvbkNoYW5nZT17IG1lc3NhZ2UgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgbWVzc2FnZSB9ICkgfVxuXHRcdC8+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSdWxlTW9kYWxJdGVtOyIsImltcG9ydCBFZGl0UnVsZXNNb2RhbENvbnRleHQgZnJvbSAnLi9FZGl0UnVsZXNNb2RhbENvbnRleHQnO1xuaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCBEZXRhaWxzQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsc0NvbnRhaW5lcic7XG5pbXBvcnQgSG92ZXJDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ib3ZlckNvbnRhaW5lcic7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEFkdmFuY2VkUnVsZXNJc0VtcHR5KCkge1xuXHRjb25zdCB7IHNldFNob3dNb2RhbCB9ICAgICAgICAgICAgICA9IHVzZUNvbnRleHQoIEVkaXRSdWxlc01vZGFsQ29udGV4dCApO1xuXHRjb25zdCBbIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IFsgaXNIb3Zlciwgc2V0SG92ZXIgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPVwiamV0LWZiIHAtcmVsYXRpdmVcIlxuXHRcdG9uTW91c2VPdmVyPXsgKCkgPT4gc2V0SG92ZXIoIHRydWUgKSB9XG5cdFx0b25Gb2N1cz17ICgpID0+IHNldEhvdmVyKCB0cnVlICkgfVxuXHRcdG9uTW91c2VPdXQ9eyAoKSA9PiBzZXRIb3ZlciggZmFsc2UgKSB9XG5cdFx0b25CbHVyPXsgKCkgPT4gc2V0SG92ZXIoIGZhbHNlICkgfVxuXHQ+XG5cdFx0PEhvdmVyQ29udGFpbmVyIGlzSG92ZXI9eyBpc0hvdmVyIH0+XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0aWNvbj17ICdwbHVzLWFsdDInIH1cblx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdC4uLmF0dHJpYnV0ZXMudmFsaWRhdGlvbixcblx0XHRcdFx0XHRcdFx0cnVsZXM6IFtcblx0XHRcdFx0XHRcdFx0XHR7IF9fdmlzaWJsZTogdHJ1ZSB9LFxuXHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0c2V0U2hvd01vZGFsKCBwcmV2ID0+ICFwcmV2ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnQWRkIG5ldycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvSG92ZXJDb250YWluZXI+XG5cdFx0PERldGFpbHNDb250YWluZXI+XG5cdFx0XHQ8c3BhbiBkYXRhLXRpdGxlPXsgX18oXG5cdFx0XHRcdCdZb3UgaGF2ZSBubyBydWxlcyBmb3IgdGhpcyBmaWVsZC4nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH0vPlxuXHRcdFx0PHNwYW4gZGF0YS10aXRsZT17IF9fKFxuXHRcdFx0XHQnUGxlYXNlIGNsaWNrIGhlcmUgdG8gYWRkIG5ldy4nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH0vPlxuXHRcdDwvRGV0YWlsc0NvbnRhaW5lcj5cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZFJ1bGVzSXNFbXB0eTsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IEFkdmFuY2VkUnVsZXNJc0VtcHR5IGZyb20gJy4vQWR2YW5jZWRSdWxlc0lzRW1wdHknO1xuaW1wb3J0IENvbnRhaW5lcnNMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyc0xpc3QnO1xuaW1wb3J0IEFkdmFuY2VkUnVsZUl0ZW0gZnJvbSAnLi9BZHZhbmNlZFJ1bGVJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBDaGlsZHJlbixcblx0ICAgICAgY2xvbmVFbGVtZW50LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHJlbmRlckdyb3VwID0gKCBjdXJyZW50LCBpbmRleCApID0+IDw+XG5cdDxiPnsgX18oICdBTkQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9iPlxuXHQ8QWR2YW5jZWRSdWxlSXRlbVxuXHRcdHJ1bGU9eyBjdXJyZW50IH1cblx0XHRpbmRleD17IGluZGV4IH1cblx0Lz5cbjwvPjtcblxuZnVuY3Rpb24gZ2V0UnVsZXNMaXN0KCBydWxlcyApIHtcblx0Y29uc3QgYW5kUnVsZXMgPSBydWxlcy5maWx0ZXIoXG5cdFx0KCBjLCBpbmRleCApID0+IDAgIT09IGluZGV4LFxuXHQpO1xuXG5cdHJldHVybiBbXG5cdFx0PEFkdmFuY2VkUnVsZUl0ZW1cblx0XHRcdHJ1bGU9eyBydWxlc1sgMCBdIH1cblx0XHRcdGtleT1cImZpcnN0X2l0ZW1cIlxuXHRcdC8+LFxuXHRcdC4uLmFuZFJ1bGVzLm1hcChcblx0XHRcdCggaXRlbSwgaW5kZXggKSA9PiByZW5kZXJHcm91cCggaXRlbSwgaW5kZXggKyAxICksXG5cdFx0KSxcblx0XTtcbn1cblxuZnVuY3Rpb24gQWR2YW5jZWRSdWxlc0xpc3QoKSB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCAhYXR0cmlidXRlcz8udmFsaWRhdGlvbj8ucnVsZXM/Lmxlbmd0aCApIHtcblx0XHRyZXR1cm4gPEFkdmFuY2VkUnVsZXNJc0VtcHR5Lz47XG5cdH1cblxuXHRyZXR1cm4gPENvbnRhaW5lcnNMaXN0PlxuXHRcdHsgQ2hpbGRyZW4ubWFwKFxuXHRcdFx0Z2V0UnVsZXNMaXN0KCBhdHRyaWJ1dGVzLnZhbGlkYXRpb24ucnVsZXMgKSxcblx0XHRcdGNsb25lRWxlbWVudCxcblx0XHQpIH1cblx0PC9Db250YWluZXJzTGlzdD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkUnVsZXNMaXN0OyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlT25VcGRhdGVNb2RhbCBmcm9tICcuLi8uLi9hY3Rpb24tbW9kYWwvaG9va3MvdXNlT25VcGRhdGVNb2RhbCc7XG5pbXBvcnQgUmVwZWF0ZXIgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlcic7XG5pbXBvcnQgUmVwZWF0ZXJBZGROZXcgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5hZGQubmV3JztcbmltcG9ydCBBZHZhbmNlZFJ1bGVNb2RhbEl0ZW0gZnJvbSAnLi9BZHZhbmNlZFJ1bGVNb2RhbEl0ZW0nO1xuaW1wb3J0IFJlcGVhdGVyU3RhdGUgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5zdGF0ZSc7XG5pbXBvcnQgUmVwZWF0ZXJIZWFkQ29udGV4dFxuXHRmcm9tICcuLi8uLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmhlYWQnO1xuaW1wb3J0IGh1bWFuUmVhZGFibGVSdWxlIGZyb20gJy4uL2hlbHBlcnMvaHVtYW5SZWFkYWJsZVJ1bGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEFkdmFuY2VkUnVsZXNNb2RhbCgpIHtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblx0Y29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gICAgICAgPSB1c2VTdGF0ZShcblx0XHQoKSA9PiBhdHRyaWJ1dGVzLnZhbGlkYXRpb24/LnJ1bGVzID8/IFtdLFxuXHQpO1xuXG5cdHVzZU9uVXBkYXRlTW9kYWwoICgpID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKCBwcmV2ID0+IChcblx0XHRcdHtcblx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdC4uLmF0dHJpYnV0ZXMudmFsaWRhdGlvbixcblx0XHRcdFx0XHRydWxlczogY3VycmVudCxcblx0XHRcdFx0fSxcblx0XHRcdH1cblx0XHQpICk7XG5cdH0gKTtcblxuXHRyZXR1cm4gPFJlcGVhdGVyU3RhdGUgc3RhdGU9eyBzZXRDdXJyZW50IH0+XG5cdFx0PFJlcGVhdGVySGVhZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0XHRpc1N1cHBvcnRlZDogKCkgPT4gdHJ1ZSxcblx0XHRcdHJlbmRlcjogKCB7IGN1cnJlbnRJdGVtIH0gKSA9PiA8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbS10aXRsZScgfVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtcblx0XHRcdFx0XHRfX2h0bWw6IGh1bWFuUmVhZGFibGVSdWxlKCBjdXJyZW50SXRlbSApLFxuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0fSB9PlxuXHRcdFx0PFJlcGVhdGVyIGl0ZW1zPXsgY3VycmVudCB9PlxuXHRcdFx0XHQ8QWR2YW5jZWRSdWxlTW9kYWxJdGVtLz5cblx0XHRcdDwvUmVwZWF0ZXI+XG5cdFx0PC9SZXBlYXRlckhlYWRDb250ZXh0LlByb3ZpZGVyPlxuXHRcdDxSZXBlYXRlckFkZE5ldz5cblx0XHRcdHsgX18oICdBZGQgUnVsZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ8L1JlcGVhdGVyQWRkTmV3PlxuXHQ8L1JlcGVhdGVyU3RhdGU+O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkUnVsZXNNb2RhbDsiLCJpbXBvcnQgUmVwZWF0ZXJJdGVtQ29udGV4dCBmcm9tICcuLi8uLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLml0ZW0nO1xuaW1wb3J0IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50XG5cdGZyb20gJy4uLy4uL2Jsb2Nrcy9oZWxwZXJzL2dldEZpZWxkc1dpdGhvdXRDdXJyZW50JztcblxuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG5cdCAgICAgIHVzZU1lbW8sXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQ2hvb3NlUmVsYXRlZEZpZWxkKCkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgY3VycmVudEl0ZW0sXG5cdFx0ICAgICAgY2hhbmdlQ3VycmVudEl0ZW0sXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBSZXBlYXRlckl0ZW1Db250ZXh0ICk7XG5cblx0Y29uc3QgZmllbGRzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRGaWVsZHNXaXRob3V0Q3VycmVudChcblx0XHRcdF9fKCAnQ3VzdG9tIHZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0KSxcblx0XHRbXSxcblx0KTtcblxuXHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcblx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0b3B0aW9ucz17IGZpZWxkcyB9XG5cdFx0bGFiZWw9eyBfXyggJ0Nob29zZSBmaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmZpZWxkIH1cblx0XHRvbkNoYW5nZT17IGZpZWxkID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IGZpZWxkIH0gKSB9XG5cdC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaG9vc2VSZWxhdGVkRmllbGQ7IiwiaW1wb3J0IEFkdmFuY2VkUnVsZXNNb2RhbCBmcm9tICcuL0FkdmFuY2VkUnVsZXNNb2RhbCc7XG5pbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSAnLi4vLi4vYWN0aW9uLW1vZGFsL2NvbXBvbmVudHMvQWN0aW9uTW9kYWwnO1xuaW1wb3J0IEFkdmFuY2VkUnVsZXNMaXN0IGZyb20gJy4vQWR2YW5jZWRSdWxlc0xpc3QnO1xuaW1wb3J0IEVkaXRSdWxlc01vZGFsQ29udGV4dCBmcm9tICcuL0VkaXRSdWxlc01vZGFsQ29udGV4dCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gRWRpdEFkdmFuY2VkUnVsZXNCdXR0b24oKSB7XG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxFZGl0UnVsZXNNb2RhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0XHRzaG93TW9kYWwsXG5cdFx0XHRzZXRTaG93TW9kYWwsXG5cdFx0fSB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmIgbWItMjRcIj5cblx0XHRcdFx0PEFkdmFuY2VkUnVsZXNMaXN0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvRWRpdFJ1bGVzTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxuXHRcdHsgc2hvd01vZGFsICYmIDxBY3Rpb25Nb2RhbFxuXHRcdFx0dGl0bGU9eyBfXyggJ0VkaXQgQWR2YW5jZWQgUnVsZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRTaG93TW9kYWwoIGZhbHNlICkgfVxuXHRcdD5cblx0XHRcdDxBZHZhbmNlZFJ1bGVzTW9kYWwvPlxuXHRcdDwvQWN0aW9uTW9kYWw+IH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0QWR2YW5jZWRSdWxlc0J1dHRvbjsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEVkaXRSdWxlc01vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0c2hvd01vZGFsOiBmYWxzZSxcblx0c2V0U2hvd01vZGFsOiAoKSA9PiB7fSxcbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFJ1bGVzTW9kYWxDb250ZXh0OyIsImltcG9ydCBodW1hblJlYWRhYmxlUnVsZSBmcm9tICcuLi9oZWxwZXJzL2h1bWFuUmVhZGFibGVSdWxlJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBIdW1hblJlYWRhYmxlUnVsZSggeyBydWxlIH0gKSB7XG5cdHJldHVybiBydWxlLnR5cGUgPyA8PlxuXHRcdDxzcGFuXG5cdFx0XHRkYXRhLXRpdGxlPXsgX18oICdSdWxlOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge1xuXHRcdFx0XHRfX2h0bWw6IGh1bWFuUmVhZGFibGVSdWxlKCBydWxlICksXG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdHsgQm9vbGVhbiggcnVsZS5tZXNzYWdlICkgJiYgPHNwYW5cblx0XHRcdGRhdGEtdGl0bGU9eyBfXyggJ01lc3NhZ2U6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7XG5cdFx0XHRcdF9faHRtbDogcnVsZS5tZXNzYWdlLFxuXHRcdFx0fSB9XG5cdFx0Lz4gfVxuXHQ8Lz4gOiA8c3BhblxuXHRcdCAgICAgICBkYXRhLXRpdGxlPXsgX18oXG5cdFx0XHQgICAgICAgJ1RoZSBydWxlIGlzIG5vdCBmdWxseSBjb25maWd1cmVkLicsXG5cdFx0XHQgICAgICAgJ2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCAgICAgICApIH1cblx0ICAgICAgIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIdW1hblJlYWRhYmxlUnVsZTsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZVVuaXFLZXknO1xuaW1wb3J0IHsgdXNlTWV0YVN0YXRlIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1kYXRhJztcbmltcG9ydCBnZXRJdGVtQnlOYW1lIGZyb20gJy4uL2hlbHBlcnMvZ2V0SXRlbUJ5TmFtZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gVmFsaWRhdGlvbkJsb2NrTWVzc2FnZSgge1xuXHRuYW1lLFxufSApIHtcblx0Y29uc3QgdW5pcUtleSAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VVbmlxS2V5KCk7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cdGNvbnN0IFsgYXJncyBdICAgICAgICAgICAgICAgICAgICAgID0gdXNlTWV0YVN0YXRlKFxuXHRcdCdfamZfdmFsaWRhdGlvbicsXG5cdFx0J3t9Jyxcblx0XHRbXSxcblx0KTtcblxuXHRjb25zdCBpc0luaGVyaXQgPSAhYXR0cmlidXRlcy52YWxpZGF0aW9uPy50eXBlO1xuXHRjb25zdCBtZXNzYWdlcyAgPSBpc0luaGVyaXRcblx0ICAgICAgICAgICAgICAgICAgPyBhcmdzPy5tZXNzYWdlcyA/PyB7fVxuXHQgICAgICAgICAgICAgICAgICA6IGF0dHJpYnV0ZXMudmFsaWRhdGlvbj8ubWVzc2FnZXMgPz8ge307XG5cblx0Y29uc3QgY3VycmVudCA9IGdldEl0ZW1CeU5hbWUoIG5hbWUgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGRpc2FibGVkPXsgaXNJbmhlcml0IH1cblx0XHRcdGtleT17IHVuaXFLZXkoICdtYXNzYWdlXycgKyBuYW1lICkgfVxuXHRcdFx0bGFiZWw9eyBjdXJyZW50Py5sYWJlbCB9XG5cdFx0XHRoZWxwPXsgY3VycmVudD8uaGVscCB9XG5cdFx0XHR2YWx1ZT17IG1lc3NhZ2VzWyBuYW1lIF0gPz8gY3VycmVudD8uaW5pdGlhbCB9XG5cdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldEF0dHJpYnV0ZXMoIHByZXYgPT4gKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0XHQuLi5hdHRyaWJ1dGVzLnZhbGlkYXRpb24sXG5cdFx0XHRcdFx0XHRtZXNzYWdlczoge1xuXHRcdFx0XHRcdFx0XHQuLi5tZXNzYWdlcyxcblx0XHRcdFx0XHRcdFx0WyBuYW1lIF06IHZhbHVlLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9XG5cdFx0XHQpICkgfVxuXHRcdC8+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvbkJsb2NrTWVzc2FnZTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBnZXRJdGVtQnlOYW1lIGZyb20gJy4uL2hlbHBlcnMvZ2V0SXRlbUJ5TmFtZSc7XG5pbXBvcnQgeyBGbGV4LCBUZXh0Q29udHJvbCwgVG9vbHRpcCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5pbXBvcnQgeyBMYWJlbCwgQ2xlYXJCYXNlQ29udHJvbFN0eWxlIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZCggSWNvbiApYFxuICAgIHN2ZyB7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuYDtcblxuZnVuY3Rpb24gVmFsaWRhdGlvbk1ldGFNZXNzYWdlKCB7XG5cdG1lc3NhZ2UsXG5cdHVwZGF0ZSxcblx0dmFsdWUgPSBudWxsLFxuXHRoZWxwID0gbnVsbCxcbn0gKSB7XG5cdGNvbnN0IGN1cnJlbnQgPSBnZXRJdGVtQnlOYW1lKCBtZXNzYWdlLmlkICk7XG5cblx0cmV0dXJuIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuXHRcdDxGbGV4PlxuXHRcdFx0PExhYmVsIGh0bWxGb3I9eyBtZXNzYWdlLmlkIH0+eyBjdXJyZW50LmxhYmVsIH08L0xhYmVsPlxuXHRcdFx0PEZsZXggc3R5bGU9eyB7IHdpZHRoOiAnYXV0bycgfSB9PlxuXHRcdFx0XHR7IG1lc3NhZ2UuYmxvY2tzLm1hcCggYmxvY2sgPT4gKFxuXHRcdFx0XHRcdDxUb29sdGlwXG5cdFx0XHRcdFx0XHRrZXk9eyAnbWVzc2FnZV9ibG9ja19pdGVtJyArIGJsb2NrLnRpdGxlIH1cblx0XHRcdFx0XHRcdHRleHQ9eyBibG9jay50aXRsZSB9XG5cdFx0XHRcdFx0XHRkZWxheT17IDIwMCB9XG5cdFx0XHRcdFx0XHRwb3NpdGlvbj17ICd0b3AgY2VudGVyJyB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFN0eWxlZEljb24gaWNvbj17IGJsb2NrLmljb24gfS8+XG5cdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHQpICkgfVxuXHRcdFx0PC9GbGV4PlxuXHRcdDwvRmxleD5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGNsYXNzTmFtZT17IENsZWFyQmFzZUNvbnRyb2xTdHlsZSB9XG5cdFx0XHRpZD17IG1lc3NhZ2UuaWQgfVxuXHRcdFx0aGVscD17IGhlbHAgPz8gY3VycmVudD8uaGVscCB9XG5cdFx0XHR2YWx1ZT17IHZhbHVlID8/IGN1cnJlbnQ/LmluaXRpYWwgfVxuXHRcdFx0b25DaGFuZ2U9eyBtZXNzYWdlVGV4dCA9PiB1cGRhdGUoIHByZXYgPT4gKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0XHRbIG1lc3NhZ2UuaWQgXTogbWVzc2FnZVRleHQsXG5cdFx0XHRcdH1cblx0XHRcdCkgKSB9XG5cdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0Lz5cblx0PC9GbGV4Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvbk1ldGFNZXNzYWdlOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlVW5pcUtleSBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlVW5pcUtleSc7XG5cbmNvbnN0IHtcblx0ICAgICAgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2w6IFRvZ2dsZUdyb3VwQ29udHJvbCxcblx0ICAgICAgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2xPcHRpb246IFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5sZXQgeyBmb3JtYXRzIH0gPSB3aW5kb3cuamV0Rm9ybVZhbGlkYXRpb247XG5cbmZ1bmN0aW9uIFZhbGlkYXRpb25Ub2dnbGVHcm91cCggeyBleGNsdWRlQnJvd3NlciA9IGZhbHNlIH0gKSB7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cdGNvbnN0IHVuaXFLZXkgICAgICAgICAgICAgICAgICAgICAgID0gdXNlVW5pcUtleSgpO1xuXG5cdGZvcm1hdHMgPSBmb3JtYXRzLmZpbHRlcihcblx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlICE9PSAnYnJvd3NlcicgfHwgIWV4Y2x1ZGVCcm93c2VyLFxuXHQpO1xuXG5cdHJldHVybiA8VG9nZ2xlR3JvdXBDb250cm9sXG5cdFx0b25DaGFuZ2U9eyB0eXBlID0+IHNldEF0dHJpYnV0ZXMoIHByZXYgPT4gKFxuXHRcdFx0e1xuXHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0Li4uYXR0cmlidXRlcy52YWxpZGF0aW9uLFxuXHRcdFx0XHRcdHR5cGUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9XG5cdFx0KSApIH1cblx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmFsaWRhdGlvbj8udHlwZSA/PyAnJyB9XG5cdFx0bGFiZWw9eyBfXyggJ1ZhbGlkYXRpb24gdHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRpc0Jsb2NrPXsgdHJ1ZSB9XG5cdFx0aXNBZGFwdGl2ZVdpZHRoPXsgZmFsc2UgfVxuXHQ+XG5cdFx0PFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0bGFiZWw9eyBfXyggJ0luaGVyaXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHR2YWx1ZT17ICcnIH1cblx0XHRcdGFyaWEtbGFiZWw9eyBfXyggJ0luaGVyaXQgZnJvbSBmb3JtXFwncyBhcmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0c2hvd1Rvb2x0aXBcblx0XHQvPlxuXHRcdHsgZm9ybWF0cy5tYXAoXG5cdFx0XHRjdXJyZW50ID0+IDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0a2V5PXsgdW5pcUtleSggY3VycmVudC52YWx1ZSArICdfa2V5JyApIH1cblx0XHRcdFx0bGFiZWw9eyBjdXJyZW50LmxhYmVsIH1cblx0XHRcdFx0dmFsdWU9eyBjdXJyZW50LnZhbHVlIH1cblx0XHRcdFx0YXJpYS1sYWJlbD17IGN1cnJlbnQudGl0bGUgfVxuXHRcdFx0XHRzaG93VG9vbHRpcFxuXHRcdFx0Lz4gKSB9XG5cdDwvVG9nZ2xlR3JvdXBDb250cm9sPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvblRvZ2dsZUdyb3VwOyIsImNvbnN0IHsgbWVzc2FnZXMgfSA9IHdpbmRvdy5qZXRGb3JtVmFsaWRhdGlvbjtcblxuZnVuY3Rpb24gZ2V0SXRlbUJ5TmFtZSggZmluZE5hbWUgKSB7XG5cdHJldHVybiBtZXNzYWdlcy5maW5kKFxuXHRcdCggeyBpZCB9ICkgPT4gZmluZE5hbWUgPT09IGlkLFxuXHQpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEl0ZW1CeU5hbWU7XG4iLCJjb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG4vKipcbiAqIEBwYXJhbSAgcnVsZVxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh1bWFuUmVhZGFibGVSdWxlKCBydWxlICkge1xuXHRyZXR1cm4gc2VsZWN0KCAnamV0LWZvcm1zL3ZhbGlkYXRpb24nICkucmVhZFJ1bGUoIHJ1bGUgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHVtYW5SZWFkYWJsZVJ1bGU7IiwiaW1wb3J0IFZhbGlkYXRpb25NZXNzYWdlcyBmcm9tICcuLi9jbGFzc2VzL1ZhbGlkYXRpb25NZXNzYWdlcyc7XG5cbmNvbnN0IHsgbWVzc2FnZXMgfSA9IHdpbmRvdy5qZXRGb3JtVmFsaWRhdGlvbjtcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHNvcnRlZCA9IG1lc3NhZ2VzLnNvcnQoICggcHJldiwgbmV4dCApID0+IHtcblx0cmV0dXJuIHByZXYuc3VwcG9ydGVkLmxlbmd0aCAtIG5leHQuc3VwcG9ydGVkLmxlbmd0aDtcbn0gKTtcblxuZnVuY3Rpb24gZ2V0R3JvdXBlZE1lc3NhZ2VzKCkge1xuXHRjb25zdCBncm91cHMgPSBuZXcgVmFsaWRhdGlvbk1lc3NhZ2VzKCk7XG5cblx0Zm9yICggY29uc3QgbWVzc2FnZSBvZiBzb3J0ZWQgKSB7XG5cdFx0Z3JvdXBzLnB1c2goIG1lc3NhZ2UgKTtcblx0fVxuXG5cdHJldHVybiBncm91cHMuaXRlbXM7XG59XG5cbmZ1bmN0aW9uIHVzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXMoKSB7XG5cdGNvbnN0IFsgbWVzc2FnZXNTdGF0ZSBdID0gdXNlU3RhdGUoIGdldEdyb3VwZWRNZXNzYWdlcyApO1xuXG5cdHJldHVybiBtZXNzYWdlc1N0YXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VHcm91cGVkVmFsaWRhdGlvbk1lc3NhZ2VzOyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyKCBpdGVtcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnJlZ2lzdGVyLFxuXHRcdFx0aXRlbXMsXG5cdFx0fTtcblx0fSxcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRyZWdpc3RlcjogJ1JFR0lTVEVSJ1xufVxuXG5cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBkaXNwYXRjaGVycyA9IHtcblx0WyBjb25zdGFudHMucmVnaXN0ZXIgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRjb25zdCB7XG5cdFx0XHQgICAgICBtZXNzYWdlcyxcblx0XHRcdCAgICAgIHNzcl9jYWxsYmFja3MsXG5cdFx0XHQgICAgICBmb3JtYXRzLFxuXHRcdFx0ICAgICAgcnVsZV90eXBlcyxcblx0XHQgICAgICB9ID0gYWN0aW9uLml0ZW1zO1xuXG5cdFx0c3RhdGUubWVzc2FnZXMgICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIG1lc3NhZ2VzICkgKTtcblx0XHRzdGF0ZS5zc3JDYWxsYmFja3MgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggc3NyX2NhbGxiYWNrcyApICk7XG5cdFx0c3RhdGUuZm9ybWF0cyAgICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGZvcm1hdHMgKSApO1xuXHRcdHN0YXRlLnJ1bGVUeXBlcyAgICA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBydWxlX3R5cGVzICkgKTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Li4uZGlzcGF0Y2hlcnMsXG59OyIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmNvbnN0IHsgY3JlYXRlUmVkdXhTdG9yZSB9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdXhTdG9yZSggJ2pldC1mb3Jtcy92YWxpZGF0aW9uJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnMsXG59ICk7XG4iLCJpbXBvcnQgZGlzcGF0Y2hlcnMgZnJvbSAnLi9kaXNwYXRjaGVycyc7XG5pbXBvcnQgaHVtYW5SZWFkYWJsZVByZXNldCBmcm9tICcuLi8uLi9wcmVzZXQvaGVscGVycy9odW1hblJlYWRhYmxlUHJlc2V0JztcblxuY29uc3Qge1xuXHQgICAgICBzZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcblx0bWVzc2FnZXM6IFtdLFxuXHRzc3JDYWxsYmFja3M6IFtdLFxuXHRmb3JtYXRzOiBbXSxcblx0cnVsZVR5cGVzOiBbXSxcblx0cnVsZVJlYWRlcnM6IHtcblx0XHRkZWZhdWx0ICggcnVsZSApIHtcblx0XHRcdGNvbnN0IHJ1bGVPcHRpb25zID0gc2VsZWN0KCAnamV0LWZvcm1zL3ZhbGlkYXRpb24nICkuZ2V0UnVsZShcblx0XHRcdFx0cnVsZS50eXBlLFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCAhcnVsZU9wdGlvbnMgKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblxuXHRcdFx0bGV0IHZhbHVlID0gcnVsZT8uZmllbGQgfHwgcnVsZT8udmFsdWUgfHwgJyc7XG5cblx0XHRcdHZhbHVlID0gKFxuXHRcdFx0XHRodW1hblJlYWRhYmxlUHJlc2V0KCB2YWx1ZSwgJ2InICkgfHwgJyhubyB2YWx1ZSknXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRydWxlT3B0aW9ucy5sYWJlbCxcblx0XHRcdFx0YDxjb2RlPiR7IHZhbHVlIH08L2NvZGU+YCxcblx0XHRcdF0uam9pbiggJyAnICk7XG5cdFx0fSxcblx0XHRzc3IgKCBydWxlICkge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0X18oICdGdW5jdGlvbjonLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0cnVsZT8udmFsdWUsXG5cdFx0XHRdLmpvaW4oICcgJyApO1xuXHRcdH0sXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xuXHRjb25zdCBjYWxsYmFjayA9IGRpc3BhdGNoZXJzWyBhY3Rpb24/LnR5cGUgXTtcblxuXHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBjYWxsYmFjayggc3RhdGUsIGFjdGlvbiApO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufSIsImNvbnN0IHNlbGVjdG9ycyA9IHtcblx0Z2V0UnVsZSggc3RhdGUsIHR5cGUgKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBzdGF0ZS5ydWxlVHlwZXMuZmluZEluZGV4KFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gdHlwZSxcblx0XHQpO1xuXG5cdFx0aWYgKCAtMSA9PT0gaW5kZXggKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLnJ1bGVUeXBlc1sgaW5kZXggXTtcblx0fSxcblx0cmVhZFJ1bGUoIHN0YXRlLCBydWxlICkge1xuXHRcdGNvbnN0IHsgdHlwZSA9ICcnIH0gPSBydWxlO1xuXG5cdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7RnVuY3Rpb259XG5cdFx0ICovXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSBzdGF0ZS5ydWxlUmVhZGVyc1sgdHlwZSBdID8/IGZhbHNlO1xuXG5cdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2FsbGJhY2sgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2soIHJ1bGUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUucnVsZVJlYWRlcnMuZGVmYXVsdCggcnVsZSApO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5zZWxlY3RvcnMsXG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3ltYTJ0NHtoZWlnaHQ6NDBweDttaW4taGVpZ2h0OjQwcHg7bGluZS1oZWlnaHQ6MS41O31cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcGFja2FnZS9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sLmpzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN5bWEydDR7aGVpZ2h0OjQwcHg7bWluLWhlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjEuNTt9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2ZxbWs1eSBzdmd7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweDt9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL1ZhbGlkYXRpb25NZXRhTWVzc2FnZS5qc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhLFdBQVcsQ0FBQyxVQUFVLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNmcW1rNXkgc3Zne2hlaWdodDoyNHB4O3dpZHRoOjI0cHg7fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9Hcm91cGVkU2VsZWN0Q29udHJvbC5qc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1NTQzM2VhM1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0dyb3VwZWRTZWxlY3RDb250cm9sLmpzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9Hcm91cGVkU2VsZWN0Q29udHJvbC5qc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL1ZhbGlkYXRpb25NZXRhTWVzc2FnZS5qc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2MmViY2M4YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL1ZhbGlkYXRpb25NZXRhTWVzc2FnZS5qc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vVmFsaWRhdGlvbk1ldGFNZXNzYWdlLmpzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImJsb2Nrc1RvQWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJhcGlGZXRjaFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIHNyYy9jc3MudHNcbnZhciBpZHggPSAwO1xudmFyIGNzcyA9ICgpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIHJldHVybiBgbW9ja2VkLWNzcy0ke2lkeCsrfWA7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdVc2luZyB0aGUgXCJjc3NcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LidcbiAgKTtcbn07XG52YXIgY3NzX2RlZmF1bHQgPSBjc3M7XG5cbi8vIHNyYy9jeC50c1xudmFyIGN4ID0gZnVuY3Rpb24gY3gyKCkge1xuICBjb25zdCBwcmVzZW50Q2xhc3NOYW1lcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBhdG9taWNDbGFzc2VzID0ge307XG4gIGNvbnN0IG5vbkF0b21pY0NsYXNzZXMgPSBbXTtcbiAgcHJlc2VudENsYXNzTmFtZXMuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgY29uc3QgaW5kaXZpZHVhbENsYXNzTmFtZXMgPSBhcmcgPyBhcmcuc3BsaXQoXCIgXCIpIDogW107XG4gICAgaW5kaXZpZHVhbENsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJhdG1fXCIpKSB7XG4gICAgICAgIGNvbnN0IFssIGtleUhhc2hdID0gY2xhc3NOYW1lLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSA9IGNsYXNzTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbkF0b21pY0NsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAoY29uc3Qga2V5SGFzaCBpbiBhdG9taWNDbGFzc2VzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhdG9taWNDbGFzc2VzLCBrZXlIYXNoKSkge1xuICAgICAgcmVzdWx0LnB1c2goYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKC4uLm5vbkF0b21pY0NsYXNzZXMpO1xuICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpO1xufTtcbnZhciBjeF9kZWZhdWx0ID0gY3g7XG5leHBvcnQge1xuICBjc3NfZGVmYXVsdCBhcyBjc3MsXG4gIGN4X2RlZmF1bHQgYXMgY3hcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiLy8gc3JjL3N0eWxlZC50c1xuaW1wb3J0IHZhbGlkQXR0ciBmcm9tIFwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3ggfSBmcm9tIFwiQGxpbmFyaWEvY29yZVwiO1xudmFyIGlzQ2FwaXRhbCA9IChjaCkgPT4gY2gudG9VcHBlckNhc2UoKSA9PT0gY2g7XG52YXIgZmlsdGVyS2V5ID0gKGtleXMpID0+IChrZXkpID0+IGtleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbnZhciBvbWl0ID0gKG9iaiwga2V5cykgPT4ge1xuICBjb25zdCByZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoZmlsdGVyS2V5KGtleXMpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICByZXNba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn07XG5mdW5jdGlvbiBmaWx0ZXJQcm9wcyhhc0lzLCBwcm9wcywgb21pdEtleXMpIHtcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IG9taXQocHJvcHMsIG9taXRLZXlzKTtcbiAgaWYgKCFhc0lzKSB7XG4gICAgY29uc3QgaW50ZXJvcFZhbGlkQXR0ciA9IHR5cGVvZiB2YWxpZEF0dHIgPT09IFwiZnVuY3Rpb25cIiA/IHsgZGVmYXVsdDogdmFsaWRBdHRyIH0gOiB2YWxpZEF0dHI7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVyZWRQcm9wcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWludGVyb3BWYWxpZEF0dHIuZGVmYXVsdChrZXkpKSB7XG4gICAgICAgIGRlbGV0ZSBmaWx0ZXJlZFByb3BzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkUHJvcHM7XG59XG52YXIgd2FybklmSW52YWxpZCA9ICh2YWx1ZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlLG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBBbiBpbnRlcnBvbGF0aW9uIGV2YWx1YXRlZCB0byAnJHtzdHJpbmdpZmllZH0nIGluIHRoZSBjb21wb25lbnQgJyR7Y29tcG9uZW50TmFtZX0nLCB3aGljaCBpcyBwcm9iYWJseSBhIG1pc3Rha2UuIFlvdSBzaG91bGQgZXhwbGljaXRseSBjYXN0IG9yIHRyYW5zZm9ybSB0aGUgdmFsdWUgdG8gYSBzdHJpbmcuYFxuICAgICk7XG4gIH1cbn07XG52YXIgaWR4ID0gMDtcbmZ1bmN0aW9uIHN0eWxlZCh0YWcpIHtcbiAgbGV0IG1vY2tlZENsYXNzID0gXCJcIjtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIG1vY2tlZENsYXNzICs9IGBtb2NrZWQtc3R5bGVkLSR7aWR4Kyt9YDtcbiAgICBpZiAodGFnICYmIHRhZy5fX3d5d19tZXRhICYmIHRhZy5fX3d5d19tZXRhLmNsYXNzTmFtZSkge1xuICAgICAgbW9ja2VkQ2xhc3MgKz0gYCAke3RhZy5fX3d5d19tZXRhLmNsYXNzTmFtZX1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKG9wdGlvbnMpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInRlc3RcIikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdVc2luZyB0aGUgXCJzdHlsZWRcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NhbGxzdGFjay9saW5hcmlhI3NldHVwJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZW5kZXIgPSAocHJvcHMsIHJlZikgPT4ge1xuICAgICAgY29uc3QgeyBhczogY29tcG9uZW50ID0gdGFnLCBjbGFzczogY2xhc3NOYW1lID0gbW9ja2VkQ2xhc3MgfSA9IHByb3BzO1xuICAgICAgY29uc3Qgc2hvdWxkS2VlcFByb3BzID0gb3B0aW9ucy5wcm9wc0FzSXMgPT09IHZvaWQgMCA/ICEodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJzdHJpbmdcIiAmJiBjb21wb25lbnQuaW5kZXhPZihcIi1cIikgPT09IC0xICYmICFpc0NhcGl0YWwoY29tcG9uZW50WzBdKSkgOiBvcHRpb25zLnByb3BzQXNJcztcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvcHMgPSBmaWx0ZXJQcm9wcyhzaG91bGRLZWVwUHJvcHMsIHByb3BzLCBbXG4gICAgICAgIFwiYXNcIixcbiAgICAgICAgXCJjbGFzc1wiXG4gICAgICBdKTtcbiAgICAgIGZpbHRlcmVkUHJvcHMucmVmID0gcmVmO1xuICAgICAgZmlsdGVyZWRQcm9wcy5jbGFzc05hbWUgPSBvcHRpb25zLmF0b21pYyA/IGN4KG9wdGlvbnMuY2xhc3MsIGZpbHRlcmVkUHJvcHMuY2xhc3NOYW1lIHx8IGNsYXNzTmFtZSkgOiBjeChmaWx0ZXJlZFByb3BzLmNsYXNzTmFtZSB8fCBjbGFzc05hbWUsIG9wdGlvbnMuY2xhc3MpO1xuICAgICAgY29uc3QgeyB2YXJzIH0gPSBvcHRpb25zO1xuICAgICAgaWYgKHZhcnMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHZhcnMpIHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHZhcnNbbmFtZV07XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFyaWFibGVbMF07XG4gICAgICAgICAgY29uc3QgdW5pdCA9IHZhcmlhYmxlWzFdIHx8IFwiXCI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgcmVzdWx0ID09PSBcImZ1bmN0aW9uXCIgPyByZXN1bHQocHJvcHMpIDogcmVzdWx0O1xuICAgICAgICAgIHdhcm5JZkludmFsaWQodmFsdWUsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgICAgc3R5bGVbYC0tJHtuYW1lfWBdID0gYCR7dmFsdWV9JHt1bml0fWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3duU3R5bGUgPSBmaWx0ZXJlZFByb3BzLnN0eWxlIHx8IHt9O1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3duU3R5bGUpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHN0eWxlW2tleV0gPSBvd25TdHlsZVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbHRlcmVkUHJvcHMuc3R5bGUgPSBzdHlsZTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWcuX193eXdfbWV0YSAmJiB0YWcgIT09IGNvbXBvbmVudCkge1xuICAgICAgICBmaWx0ZXJlZFByb3BzLmFzID0gY29tcG9uZW50O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIGZpbHRlcmVkUHJvcHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBmaWx0ZXJlZFByb3BzKTtcbiAgICB9O1xuICAgIGNvbnN0IFJlc3VsdCA9IFJlYWN0LmZvcndhcmRSZWYgPyBSZWFjdC5mb3J3YXJkUmVmKHJlbmRlcikgOiAoXG4gICAgICAvLyBSZWFjdC5mb3J3YXJkUmVmIHdvbid0IGF2YWlsYWJsZSBvbiBvbGRlciBSZWFjdCB2ZXJzaW9ucyBhbmQgaW4gUHJlYWN0XG4gICAgICAvLyBGYWxsYmFjayB0byBhIGlubmVyUmVmIHByb3AgaW4gdGhhdCBjYXNlXG4gICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdCA9IG9taXQocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcihyZXN0LCBwcm9wcy5pbm5lclJlZik7XG4gICAgICB9XG4gICAgKTtcbiAgICBSZXN1bHQuZGlzcGxheU5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgUmVzdWx0Ll9fd3l3X21ldGEgPSB7XG4gICAgICBjbGFzc05hbWU6IG9wdGlvbnMuY2xhc3MgfHwgbW9ja2VkQ2xhc3MsXG4gICAgICBleHRlbmRzOiB0YWdcbiAgICB9O1xuICAgIHJldHVybiBSZXN1bHQ7XG4gIH07XG59XG52YXIgc3R5bGVkX2RlZmF1bHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgUHJveHkoc3R5bGVkLCB7XG4gIGdldChvLCBwcm9wKSB7XG4gICAgcmV0dXJuIG8ocHJvcCk7XG4gIH1cbn0pIDogc3R5bGVkO1xuZXhwb3J0IHtcbiAgc3R5bGVkX2RlZmF1bHQgYXMgc3R5bGVkXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWN0aW9uRmllbGRzTWFwIGZyb20gJy4vYWN0aW9uLWZpZWxkcy1tYXAvY29tcG9uZW50cy9BY3Rpb25GaWVsZHNNYXAnO1xuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gJy4vYWN0aW9uLW1vZGFsL2NvbXBvbmVudHMvQWN0aW9uTW9kYWwnO1xuaW1wb3J0IFdyYXBwZXJSZXF1aXJlZENvbnRyb2xcblx0ZnJvbSAnLi9hY3Rpb24tZmllbGRzLW1hcC9jb21wb25lbnRzL1dyYXBwZXJSZXF1aXJlZENvbnRyb2wnO1xuaW1wb3J0IFRvb2xzLCB7XG5cdGNsYXNzbmFtZXMsXG5cdGV2ZW50LFxuXHRnZXRDb252ZXJ0ZWROYW1lLFxuXHRsaXN0ZW4sXG5cdG1heWJlQ3lyVG9MYXRpbixcblx0Y29udmVydE9iamVjdFRvT3B0aW9uc0xpc3QsXG5cdGNvbHVtbixcblx0YXNzZXRVcmwsXG5cdHNldCxcblx0aXNFbXB0eSxcblx0ZXh0ZW5kUHJvdG90eXBlLFxufSBmcm9tICcuL3Rvb2xzJztcblxuaW1wb3J0IGdldEF2YWlsYWJsZUZpZWxkcyBmcm9tICcuL2Jsb2Nrcy9oZWxwZXJzL2dldEF2YWlsYWJsZUZpZWxkcyc7XG5pbXBvcnQgZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nXG5cdGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nJztcbmltcG9ydCBnZXRCbG9ja3NCeU5hbWUgZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRCbG9ja3NCeU5hbWUnO1xuaW1wb3J0IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50IGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQnO1xuaW1wb3J0IGdldEZvcm1GaWVsZHNCbG9ja3MgZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRGb3JtRmllbGRzQmxvY2tzJztcbmltcG9ydCBnZXRJbm5lckJsb2NrcyBmcm9tICcuL2Jsb2Nrcy9oZWxwZXJzL2dldElubmVyQmxvY2tzJztcbmltcG9ydCBhcHBlbmRGaWVsZCBmcm9tICcuL2Jsb2Nrcy9oZWxwZXJzL2FwcGVuZEZpZWxkJztcblxuaW1wb3J0IGdhdGV3YXlBdHRyIGZyb20gJy4vZ2F0ZXdheXMvaGVscGVycy9nYXRld2F5QXR0cic7XG5pbXBvcnQgZ2F0ZXdheUxhYmVsIGZyb20gJy4vZ2F0ZXdheXMvaGVscGVycy9nYXRld2F5TGFiZWwnO1xuaW1wb3J0IHJlZ2lzdGVyR2F0ZXdheSBmcm9tICcuL2dhdGV3YXlzL2hlbHBlcnMvcmVnaXN0ZXJHYXRld2F5JztcbmltcG9ydCByZW5kZXJHYXRld2F5IGZyb20gJy4vZ2F0ZXdheXMvaGVscGVycy9yZW5kZXJHYXRld2F5JztcbmltcG9ydCByZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyXG5cdGZyb20gJy4vZ2F0ZXdheXMvaGVscGVycy9yZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyJztcbmltcG9ydCB1c2VTdWNjZXNzTm90aWNlIGZyb20gJy4vaG9va3MvdXNlU3VjY2Vzc05vdGljZSc7XG5pbXBvcnQgdXNlU2VsZWN0UG9zdE1ldGEgZnJvbSAnLi9ob29rcy91c2VTZWxlY3RQb3N0TWV0YSc7XG5pbXBvcnQgdXNlT25VcGRhdGVNb2RhbCBmcm9tICcuL2FjdGlvbi1tb2RhbC9ob29rcy91c2VPblVwZGF0ZU1vZGFsJztcbmltcG9ydCB3aXRoU2VsZWN0Rm9ybUZpZWxkcyBmcm9tICcuL2hvb2tzL3dpdGhTZWxlY3RGb3JtRmllbGRzJztcbmltcG9ydCB3aXRoU2VsZWN0R2F0ZXdheXMgZnJvbSAnLi9nYXRld2F5cy9ob29rcy93aXRoU2VsZWN0R2F0ZXdheXMnO1xuaW1wb3J0IHdpdGhEaXNwYXRjaEdhdGV3YXlzIGZyb20gJy4vZ2F0ZXdheXMvaG9va3Mvd2l0aERpc3BhdGNoR2F0ZXdheXMnO1xuaW1wb3J0IHVzZVJlcXVlc3RFdmVudHMgZnJvbSAnLi9ldmVudHMvaG9va3MvdXNlUmVxdWVzdEV2ZW50cyc7XG5pbXBvcnQgdXNlQmxvY2tDb25kaXRpb25zIGZyb20gJy4vYmxvY2stY29uZGl0aW9ucy9ob29rcy91c2VCbG9ja0NvbmRpdGlvbnMnO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi9ibG9ja3MvaG9va3MvdXNlVW5pcUtleSc7XG5pbXBvcnQgdXNlSXNBZHZhbmNlZFZhbGlkYXRpb24gZnJvbSAnLi9ibG9ja3MvaG9va3MvdXNlSXNBZHZhbmNlZFZhbGlkYXRpb24nO1xuaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5pbXBvcnQgRHluYW1pY1ByZXNldCBmcm9tICcuL3ByZXNldC9jb21wb25lbnRzL0R5bmFtaWNQcmVzZXQnO1xuaW1wb3J0IEpldEZpZWxkc01hcENvbnRyb2wgZnJvbSAnLi4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwJztcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSAnLi9wcmVzZXQvY29tcG9uZW50cy9GaWVsZFdpdGhQcmVzZXQnO1xuaW1wb3J0IEdsb2JhbEZpZWxkUHJlc2V0IGZyb20gJy4vcHJlc2V0L2NvbXBvbmVudHMvR2xvYmFsRmllbGRQcmVzZXQnO1xuaW1wb3J0IEF2YWlsYWJsZU1hcEZpZWxkUHJlc2V0XG5cdGZyb20gJy4vcHJlc2V0L2NvbXBvbmVudHMvQXZhaWxhYmxlTWFwRmllbGRQcmVzZXQnO1xuaW1wb3J0IE1hcEZpZWxkUHJlc2V0IGZyb20gJy4vcHJlc2V0L2NvbXBvbmVudHMvTWFwRmllbGRQcmVzZXQnO1xuaW1wb3J0IHVzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXNcblx0ZnJvbSAnLi92YWxpZGF0aW9uL2hvb2tzL3VzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXMnO1xuaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0ZpZWxkV3JhcHBlcic7XG5pbXBvcnQgTWFjcm9zSW5zZXJ0ZXIgZnJvbSAnLi9jb21wb25lbnRzL01hY3Jvc0luc2VydGVyJztcbmltcG9ydCBSZXBlYXRlcldpdGhTdGF0ZSBmcm9tICcuL3JlcGVhdGVyL2NvbXBvbmVudHMvUmVwZWF0ZXJXaXRoU3RhdGUnO1xuaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSAnLi9wcmVzZXQvY29tcG9uZW50cy93aXRoUHJlc2V0JztcbmltcG9ydCBBZHZhbmNlZEZpZWxkcyBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0FkdmFuY2VkRmllbGRzJztcbmltcG9ydCBHZW5lcmFsRmllbGRzIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvR2VuZXJhbEZpZWxkcyc7XG5pbXBvcnQgVG9vbEJhckZpZWxkcyBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL1Rvb2xCYXJGaWVsZHMnO1xuaW1wb3J0IEhvcml6b250YWxMaW5lIGZyb20gJy4vY29tcG9uZW50cy9Ib3Jpem9udGFsTGluZSc7XG5pbXBvcnQgRmllbGRTZXR0aW5nc1dyYXBwZXIgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9GaWVsZFNldHRpbmdzV3JhcHBlcic7XG5pbXBvcnQgR3JvdXBlZFNlbGVjdENvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sJztcbmltcG9ydCBnZXRCbG9ja0NvbnRyb2xzIGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0QmxvY2tDb250cm9scyc7XG5pbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi9jb21wb25lbnRzL0Jhc2VIZWxwJztcbmltcG9ydCBHYXRld2F5RmV0Y2hCdXR0b24gZnJvbSAnLi9nYXRld2F5cy9jb21wb25lbnRzL0dhdGV3YXlGZXRjaEJ1dHRvbic7XG5pbXBvcnQgJy4vc3RvcmUubWFuYWdlcic7XG5pbXBvcnQgQWN0aW9uTW9kYWxDb250ZXh0IGZyb20gJy4vYWN0aW9uLW1vZGFsL2NvbnRleHQvQWN0aW9uTW9kYWxDb250ZXh0JztcbmltcG9ydCBTYWZlRGVsZXRlQ29udGV4dCBmcm9tICcuL3JlcGVhdGVyL2NvbnRleHQvc2FmZS5kZWxldGUnO1xuaW1wb3J0IFJlcGVhdGVySXRlbUNvbnRleHQgZnJvbSAnLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLml0ZW0nO1xuaW1wb3J0IFJlcGVhdGVyQm9keUNvbnRleHQgZnJvbSAnLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmJvZHknO1xuaW1wb3J0IFJlcGVhdGVySGVhZENvbnRleHQgZnJvbSAnLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmhlYWQnO1xuaW1wb3J0IFJlcGVhdGVyQnV0dG9uc0NvbnRleHRcblx0ZnJvbSAnLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLmN1c3RvbS5pdGVtLmJ1dHRvbnMnO1xuaW1wb3J0IEJsb2NrVmFsdWVJdGVtQ29udGV4dCBmcm9tICcuL2NvbnRleHQvYmxvY2sudmFsdWUuaXRlbS5jb250ZXh0JztcbmltcG9ydCBTYWZlRGVsZXRlVG9nZ2xlIGZyb20gJy4vcmVwZWF0ZXIvY29tcG9uZW50cy9zYWZlLmRlbGV0ZS50b2dnbGUnO1xuaW1wb3J0IFJlcGVhdGVyQWRkTmV3IGZyb20gJy4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5hZGQubmV3JztcbmltcG9ydCBSZXBlYXRlciBmcm9tICcuL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXInO1xuaW1wb3J0IFZhbGlkYXRpb25Ub2dnbGVHcm91cFxuXHRmcm9tICcuL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uVG9nZ2xlR3JvdXAnO1xuaW1wb3J0IFZhbGlkYXRpb25CbG9ja01lc3NhZ2Vcblx0ZnJvbSAnLi92YWxpZGF0aW9uL2NvbXBvbmVudHMvVmFsaWRhdGlvbkJsb2NrTWVzc2FnZSc7XG5pbXBvcnQgVmFsaWRhdGlvbk1ldGFNZXNzYWdlXG5cdGZyb20gJy4vdmFsaWRhdGlvbi9jb21wb25lbnRzL1ZhbGlkYXRpb25NZXRhTWVzc2FnZSc7XG5pbXBvcnQgQWN0aW9uRmllbGRzTWFwQ29udGV4dFxuXHRmcm9tICcuL2FjdGlvbi1maWVsZHMtbWFwL2NvbnRleHQvQWN0aW9uRmllbGRzTWFwQ29udGV4dCc7XG5pbXBvcnQgQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dFxuXHRmcm9tICcuL2FjdGlvbi1maWVsZHMtbWFwL2NvbnRleHQvQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCc7XG5pbXBvcnQgRHluYW1pY1Byb3BlcnR5U2VsZWN0XG5cdGZyb20gJy4vYWN0aW9uLWZpZWxkcy1tYXAvY29tcG9uZW50cy9EeW5hbWljUHJvcGVydHlTZWxlY3QnO1xuaW1wb3J0IER5bmFtaWNWYWx1ZXMgZnJvbSAnLi9keW5hbWljLnZhbHVlL2NvbXBvbmVudHMvRHluYW1pY1ZhbHVlcyc7XG5pbXBvcnQgUmVwZWF0ZXJBZGRPck9wZXJhdG9yIGZyb20gJy4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5hZGQub3InO1xuaW1wb3J0IEVkaXRBZHZhbmNlZFJ1bGVzQnV0dG9uXG5cdGZyb20gJy4vdmFsaWRhdGlvbi9jb21wb25lbnRzL0VkaXRBZHZhbmNlZFJ1bGVzQnV0dG9uJztcbmltcG9ydCBSZXBlYXRlclN0YXRlQ29udGV4dCBmcm9tICcuL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuc3RhdGUnO1xuaW1wb3J0IFJlcGVhdGVyU3RhdGUgZnJvbSAnLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLnN0YXRlJztcbmltcG9ydCBGaWVsZENvbnRyb2wgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9GaWVsZENvbnRyb2wnO1xuaW1wb3J0IEJsb2NrTGFiZWwgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0xhYmVsJztcbmltcG9ydCBCbG9ja05hbWUgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja05hbWUnO1xuaW1wb3J0IEJsb2NrRGVzY3JpcHRpb24gZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0Rlc2NyaXB0aW9uJztcbmltcG9ydCBCbG9ja0RlZmF1bHRWYWx1ZSBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrRGVmYXVsdFZhbHVlJztcbmltcG9ydCBCbG9ja1BsYWNlaG9sZGVyIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tQbGFjZWhvbGRlcic7XG5pbXBvcnQgQmxvY2tBZGRQcmV2QnV0dG9uIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tBZGRQcmV2QnV0dG9uJztcbmltcG9ydCBCbG9ja1ByZXZCdXR0b25MYWJlbCBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrUHJldkJ1dHRvbkxhYmVsJztcbmltcG9ydCBCbG9ja1Zpc2liaWxpdHkgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja1Zpc2liaWxpdHknO1xuaW1wb3J0IEJsb2NrQ2xhc3NOYW1lIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tDbGFzc05hbWUnO1xuaW1wb3J0IEJsb2NrQWR2YW5jZWRWYWx1ZSBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrQWR2YW5jZWRWYWx1ZSc7XG5pbXBvcnQgTWFjcm9zRmllbGRzVGVtcGxhdGVcblx0ZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zRmllbGRzVGVtcGxhdGUnO1xuaW1wb3J0IE1hY3Jvc0J1dHRvblRlbXBsYXRlXG5cdGZyb20gJy4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0J1dHRvblRlbXBsYXRlJztcbmltcG9ydCBNYWNyb3NGaWVsZHMgZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zRmllbGRzJztcbmltcG9ydCBQb3BvdmVyQ29udGV4dCBmcm9tICcuL21hY3Jvcy5idXR0b24vY29udGV4dC9Qb3BvdmVyQ29udGV4dCc7XG5pbXBvcnQgUG9wb3Zlckl0ZW0gZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbnRleHQvUG9wb3Zlckl0ZW0nO1xuaW1wb3J0IFByZXNldEJ1dHRvbiBmcm9tICcuL3ByZXNldC9jb21wb25lbnRzL1ByZXNldEJ1dHRvbic7XG5pbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9Db25kaXRpb25JdGVtJztcbmltcG9ydCBBZHZhbmNlZEluc3BlY3RvckNvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL0FkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCc7XG5pbXBvcnQgQWR2YW5jZWRNb2RhbENvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL0FkdmFuY2VkTW9kYWxDb250cm9sJztcbmltcG9ydCBDbGllbnRTaWRlTWFjcm9zXG5cdGZyb20gJy4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL0NsaWVudFNpZGVNYWNyb3MnO1xuaW1wb3J0IHsgaW5zZXJ0TWFjcm8gfSBmcm9tICcuL21hY3Jvcy5idXR0b24vZnVuY3Rpb25zJztcbmltcG9ydCB1c2VJbnNlcnRNYWNybyBmcm9tICcuL21hY3Jvcy5idXR0b24vaG9va3MvdXNlSW5zZXJ0TWFjcm8nO1xuaW1wb3J0IFRvZ2dsZUNvbnRyb2wgZnJvbSAnLi9jb21wb25lbnRzL1RvZ2dsZUNvbnRyb2wnO1xuaW1wb3J0IERldGFpbHNDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHNDb250YWluZXInO1xuaW1wb3J0IEhvdmVyQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9Ib3ZlckNvbnRhaW5lcic7XG5pbXBvcnQgZ2V0Q3VycmVudElubmVyQmxvY2tzIGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0Q3VycmVudElubmVyQmxvY2tzJztcbmltcG9ydCBDb250YWluZXJzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFpbmVyc0xpc3QnO1xuaW1wb3J0IEh1bWFuUmVhZGFibGVDb25kaXRpb25zXG5cdGZyb20gJy4vYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0h1bWFuUmVhZGFibGVDb25kaXRpb25zJztcbmltcG9ydCBodW1hblJlYWRhYmxlQ29uZGl0aW9uXG5cdGZyb20gJy4vYmxvY2stY29uZGl0aW9ucy9oZWxwZXJzL2h1bWFuUmVhZGFibGVDb25kaXRpb24nO1xuaW1wb3J0IENvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlclxuXHRmcm9tICcuL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9Db25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXInO1xuaW1wb3J0IFNlcnZlclNpZGVNYWNyb3MgZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvU2VydmVyU2lkZU1hY3Jvcyc7XG5pbXBvcnQgdXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlIGZyb20gJy4vYmxvY2tzL2hvb2tzL3VzZVVuaXF1ZU5hbWVPbkR1cGxpY2F0ZSc7XG5pbXBvcnQgU2VsZWN0VmFyaWF0aW9ucyBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL1NlbGVjdFZhcmlhdGlvbnMnO1xuaW1wb3J0IFRvZ2dsZUdyb3VwVmFyaWF0aW9ucyBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL1RvZ2dsZUdyb3VwVmFyaWF0aW9ucyc7XG5pbXBvcnQgQmFzZUxhYmVsIGZyb20gJy4vY29tcG9uZW50cy9CYXNlTGFiZWwnO1xuaW1wb3J0IHVzZVN1cHBvcnQgZnJvbSAnLi9ibG9ja3MvaG9va3MvdXNlU3VwcG9ydCc7XG5pbXBvcnQgQXR0cmlidXRlSGVscCBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0F0dHJpYnV0ZUhlbHAnO1xuaW1wb3J0IEFjdGlvbkJ1dHRvblBsYWNlaG9sZGVyXG5cdGZyb20gJy4vYWN0aW9uLWJ1dHRvbnMvY29tcG9uZW50cy9BY3Rpb25CdXR0b25QbGFjZWhvbGRlcic7XG5pbXBvcnQgQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbFxuXHRmcm9tICcuL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGwnO1xuaW1wb3J0IHVzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0XG5cdGZyb20gJy4vYmxvY2tzL2hvb2tzL3VzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0JztcbmltcG9ydCBTY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXJcblx0ZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9TY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXInO1xuaW1wb3J0IGdldFN1cHBvcnQgZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRTdXBwb3J0JztcbmltcG9ydCB1c2VFdmVudHMgZnJvbSAnLi9ldmVudHMvaG9va3MvdXNlRXZlbnRzJztcbmltcG9ydCB1c2VPcGVuRWRpdG9yUGFuZWwgZnJvbSAnLi9ob29rcy91c2VPcGVuRWRpdG9yUGFuZWwnO1xuXG4vLyBKRkJDb21wb25lbnRzXG53aW5kb3cuSmV0RkJDb21wb25lbnRzID0ge1xuXHQuLi4oXG5cdFx0d2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz8ge31cblx0KSxcblx0QmFzZUxhYmVsLFxuXHRBY3Rpb25GaWVsZHNNYXAsXG5cdEFjdGlvbk1vZGFsLFxuXHRBY3Rpb25Nb2RhbENvbnRleHQsXG5cdFNhZmVEZWxldGVDb250ZXh0LFxuXHRSZXBlYXRlckl0ZW1Db250ZXh0LFxuXHRSZXBlYXRlckJvZHlDb250ZXh0LFxuXHRSZXBlYXRlckhlYWRDb250ZXh0LFxuXHRSZXBlYXRlckJ1dHRvbnNDb250ZXh0LFxuXHRBY3Rpb25GaWVsZHNNYXBDb250ZXh0LFxuXHRDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0LFxuXHRCbG9ja1ZhbHVlSXRlbUNvbnRleHQsXG5cdER5bmFtaWNQcm9wZXJ0eVNlbGVjdCxcblx0U2FmZURlbGV0ZVRvZ2dsZSxcblx0UmVwZWF0ZXJBZGROZXcsXG5cdFJlcGVhdGVyQWRkT3JPcGVyYXRvcixcblx0UmVwZWF0ZXIsXG5cdFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXG5cdER5bmFtaWNQcmVzZXQsXG5cdEpldEZpZWxkc01hcENvbnRyb2wsXG5cdEZpZWxkV2l0aFByZXNldCxcblx0R2xvYmFsRmllbGQ6IEdsb2JhbEZpZWxkUHJlc2V0LFxuXHRBdmFpbGFibGVNYXBGaWVsZDogQXZhaWxhYmxlTWFwRmllbGRQcmVzZXQsXG5cdE1hcEZpZWxkOiBNYXBGaWVsZFByZXNldCxcblx0RmllbGRXcmFwcGVyLFxuXHRNYWNyb3NJbnNlcnRlcixcblx0UmVwZWF0ZXJXaXRoU3RhdGUsXG5cdEFkdmFuY2VkRmllbGRzLFxuXHRHZW5lcmFsRmllbGRzLFxuXHRUb29sQmFyRmllbGRzLFxuXHRGaWVsZENvbnRyb2wsXG5cdEhvcml6b250YWxMaW5lLFxuXHRGaWVsZFNldHRpbmdzV3JhcHBlcixcblx0R3JvdXBlZFNlbGVjdENvbnRyb2wsXG5cdEJhc2VIZWxwLFxuXHRHYXRld2F5RmV0Y2hCdXR0b24sXG5cdFZhbGlkYXRpb25Ub2dnbGVHcm91cCxcblx0VmFsaWRhdGlvbkJsb2NrTWVzc2FnZSxcblx0VmFsaWRhdGlvbk1ldGFNZXNzYWdlLFxuXHREeW5hbWljVmFsdWVzLFxuXHRFZGl0QWR2YW5jZWRSdWxlc0J1dHRvbixcblx0UmVwZWF0ZXJTdGF0ZUNvbnRleHQsXG5cdFJlcGVhdGVyU3RhdGUsXG5cdEJsb2NrTGFiZWwsXG5cdEJsb2NrTmFtZSxcblx0QmxvY2tEZXNjcmlwdGlvbixcblx0QmxvY2tEZWZhdWx0VmFsdWUsXG5cdEJsb2NrUGxhY2Vob2xkZXIsXG5cdEJsb2NrQWRkUHJldkJ1dHRvbixcblx0QmxvY2tQcmV2QnV0dG9uTGFiZWwsXG5cdEJsb2NrVmlzaWJpbGl0eSxcblx0QmxvY2tDbGFzc05hbWUsXG5cdEJsb2NrQWR2YW5jZWRWYWx1ZSxcblx0TWFjcm9zRmllbGRzLFxuXHRNYWNyb3NCdXR0b25UZW1wbGF0ZSxcblx0TWFjcm9zRmllbGRzVGVtcGxhdGUsXG5cdFNob3dQb3BvdmVyQ29udGV4dDogUG9wb3ZlckNvbnRleHQsXG5cdFBvcG92ZXJJdGVtLFxuXHRQcmVzZXRCdXR0b24sXG5cdENvbmRpdGlvbkl0ZW0sXG5cdEFkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCxcblx0QWR2YW5jZWRNb2RhbENvbnRyb2wsXG5cdENsaWVudFNpZGVNYWNyb3MsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdERldGFpbHNDb250YWluZXIsXG5cdEhvdmVyQ29udGFpbmVyLFxuXHRDb250YWluZXJzTGlzdCxcblx0SHVtYW5SZWFkYWJsZUNvbmRpdGlvbnMsXG5cdENvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlcixcblx0U2VydmVyU2lkZU1hY3Jvcyxcblx0U2VsZWN0VmFyaWF0aW9ucyxcblx0VG9nZ2xlR3JvdXBWYXJpYXRpb25zLFxuXHRBdHRyaWJ1dGVIZWxwLFxuXHRBY3Rpb25CdXR0b25QbGFjZWhvbGRlcixcblx0QWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbCxcblx0U2NvcGVkQXR0cmlidXRlc1Byb3ZpZGVyLFxufTtcblxuLy8gSkZCRnVuY3Rpb25zXG53aW5kb3cuSmV0RkJBY3Rpb25zID0ge1xuXHQuLi4oXG5cdFx0d2luZG93Py5KZXRGQkFjdGlvbnMgPz8ge31cblx0KSxcblx0d2l0aFByZXNldCxcblx0Z2V0SW5uZXJCbG9ja3MsXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcblx0Z2V0QXZhaWxhYmxlRmllbGRzLFxuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcblx0Z2F0ZXdheUF0dHIsXG5cdGdhdGV3YXlMYWJlbCxcblx0cmVnaXN0ZXJHYXRld2F5LFxuXHRUb29scyxcblx0ZXZlbnQsXG5cdGxpc3Rlbixcblx0cmVuZGVyR2F0ZXdheSxcblx0cmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlcixcblx0bWF5YmVDeXJUb0xhdGluLFxuXHRnZXRDb252ZXJ0ZWROYW1lLFxuXHRnZXRCbG9ja0NvbnRyb2xzLFxuXHRjbGFzc25hbWVzLFxuXHRnZXRCbG9ja3NCeU5hbWUsXG5cdGNvbnZlcnRPYmplY3RUb09wdGlvbnNMaXN0LFxuXHRhcHBlbmRGaWVsZCxcblx0aW5zZXJ0TWFjcm8sXG5cdGNvbHVtbixcblx0Z2V0Q3VycmVudElubmVyQmxvY2tzLFxuXHRodW1hblJlYWRhYmxlQ29uZGl0aW9uLFxuXHRhc3NldFVybCxcblx0c2V0LFxuXHRpc0VtcHR5LFxuXHRnZXRTdXBwb3J0LFxuXHRleHRlbmRQcm90b3R5cGUsXG59O1xuXG4vLyBKRkJIb29rc1xud2luZG93LkpldEZCSG9va3MgPSB7XG5cdC4uLihcblx0XHR3aW5kb3c/LkpldEZCSG9va3MgPz8ge31cblx0KSxcblx0dXNlU2VsZWN0UG9zdE1ldGEsXG5cdHVzZVN1Y2Nlc3NOb3RpY2UsXG5cdHVzZUV2ZW50cyxcblx0dXNlUmVxdWVzdEV2ZW50cyxcblx0dXNlQmxvY2tDb25kaXRpb25zLFxuXHR1c2VVbmlxS2V5LFxuXHR1c2VCbG9ja0F0dHJpYnV0ZXMsXG5cdHVzZUlzQWR2YW5jZWRWYWxpZGF0aW9uLFxuXHR1c2VHcm91cGVkVmFsaWRhdGlvbk1lc3NhZ2VzLFxuXHR3aXRoU2VsZWN0Rm9ybUZpZWxkcyxcblx0d2l0aFNlbGVjdEdhdGV3YXlzLFxuXHR3aXRoRGlzcGF0Y2hHYXRld2F5cyxcblx0dXNlT25VcGRhdGVNb2RhbCxcblx0dXNlSW5zZXJ0TWFjcm8sXG5cdHVzZUlzSGFzQXR0cmlidXRlLFxuXHR1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUsXG5cdHVzZVN1cHBvcnQsXG5cdHVzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0LFxuXHR1c2VPcGVuRWRpdG9yUGFuZWwsXG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=