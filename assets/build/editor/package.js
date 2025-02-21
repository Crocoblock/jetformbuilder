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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupControl, {
    hideLabelFromVision: true,
    onChange: varName => setAttributes({
      ...variations.find(({
        name: variationName
      }) => variationName === varName).attributes
    }),
    value: value,
    isBlock: true
  }, Children.map(components, cloneElement));
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
  }), !ssrCallbacksKeys.includes(currentItem.value) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yL3BhY2thZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFPQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUdBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQW1CQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBR0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFVQTtBQUFBO0FBS0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQTs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFJQTtBQUtBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFPQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBU0E7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6S0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFHQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQVVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUdBO0FBRUE7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFLQTtBQUFBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBT0E7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNsSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBU0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBT0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBU0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQWFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFLQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBT0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcklBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBS0E7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBdUJBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFBQTtBQUFBOztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFBQTtBQUFBOztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBVUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQVFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pPQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvZW1vdGlvbi1pcy1wcm9wLXZhbGlkLmVzbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuZXNtLmpzIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tYnV0dG9ucy9jb21wb25lbnRzL0FjdGlvbkJ1dHRvblBsYWNlaG9sZGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYWN0aW9uLWZpZWxkcy1tYXAvY29tcG9uZW50cy9BY3Rpb25GaWVsZHNNYXAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9hY3Rpb24tZmllbGRzLW1hcC9jb21wb25lbnRzL0R5bmFtaWNQcm9wZXJ0eVNlbGVjdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1maWVsZHMtbWFwL2NvbXBvbmVudHMvV3JhcHBlclJlcXVpcmVkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1maWVsZHMtbWFwL2NvbnRleHQvQWN0aW9uRmllbGRzTWFwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1maWVsZHMtbWFwL2NvbnRleHQvQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYWN0aW9uLW1vZGFsL2NvbXBvbmVudHMvQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1tb2RhbC9jb250ZXh0L0FjdGlvbk1vZGFsQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2FjdGlvbi1tb2RhbC9ob29rcy91c2VPblVwZGF0ZU1vZGFsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0JlZm9yZUNvbmRpdGlvbk9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL2NvbXBvbmVudHMvQ29uZGl0aW9uSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9Db25kaXRpb25PcHRpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0NvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvY29tcG9uZW50cy9FZGl0Q3VzdG9tUmVuZGVyU3RhdGVzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0h1bWFuUmVhZGFibGVDb25kaXRpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL1JlbmRlclN0YXRlT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvaGVscGVycy9odW1hblJlYWRhYmxlQ29uZGl0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9ob29rcy91c2VCbG9ja0NvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL3N0b3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2NrLWNvbmRpdGlvbnMvc3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9jay1jb25kaXRpb25zL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2stY29uZGl0aW9ucy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9BZHZhbmNlZEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0F0dHJpYnV0ZUhlbHAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0FkZFByZXZCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0FkdmFuY2VkVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0NsYXNzTmFtZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrRGVmYXVsdFZhbHVlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tEZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja05hbWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja1BsYWNlaG9sZGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tQcmV2QnV0dG9uTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9CbG9ja1JlcXVpcmVkLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tWaXNpYmlsaXR5LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvRmllbGRDb250cm9sLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvRmllbGRTZXR0aW5nc1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9GaWVsZFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvY29tcG9uZW50cy9HZW5lcmFsRmllbGRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvU2NvcGVkQXR0cmlidXRlc1Byb3ZpZGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvU2VsZWN0VmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL1RvZ2dsZUdyb3VwVmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb21wb25lbnRzL1Rvb2xCYXJEZWZhdWx0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2NvbXBvbmVudHMvVG9vbEJhckZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9jb250ZXh0L1Njb3BlZEF0dHJpYnV0ZXNDb250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvQ2hhbmdlTmFtZUJ5TGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9Db250cm9sc1NldHRpbmdzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hlbHBlcnMvYXBwZW5kRmllbGQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9ibG9ja3NSZWN1cnNpdmVJdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldEF2YWlsYWJsZUZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldEF2YWlsYWJsZUZpZWxkc1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldEJsb2NrQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRCbG9ja3NCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRDdXJyZW50SW5uZXJCbG9ja3MuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRGaWVsZHNXaXRob3V0Q3VycmVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldEZvcm1GaWVsZHNCbG9ja3MuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaGVscGVycy9nZXRJbm5lckJsb2Nrcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9oZWxwZXJzL2dldFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZUlzQWR2YW5jZWRWYWxpZGF0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZUlzVW5pcXVlRmllbGROYW1lLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvYmxvY2tzL2hvb2tzL3VzZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3MvaG9va3MvdXNlVW5pcUtleS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9ob29rcy91c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9zdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvZ2V0UHJlcGFyZWRCbG9ja3MuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ibG9ja3Mvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2Jsb2Nrcy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0FkdmFuY2VkSW5zcGVjdG9yQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvQWR2YW5jZWRNb2RhbENvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0Jhc2VIZWxwLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9CYXNlTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0NvbnRhaW5lcnNMaXN0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9EZXRhaWxzQ29udGFpbmVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9Hcm91cGVkU2VsZWN0Q29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvSG9yaXpvbnRhbExpbmUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0hvdmVyQ29udGFpbmVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvY29tcG9uZW50cy9NYWNyb3NJbnNlcnRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvVG9nZ2xlQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbnRleHQvYmxvY2sudmFsdWUuaXRlbS5jb250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZHluYW1pYy52YWx1ZS9jb21wb25lbnRzL0R5bmFtaWNJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZHluYW1pYy52YWx1ZS9jb21wb25lbnRzL0R5bmFtaWNJdGVtQm9keS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2R5bmFtaWMudmFsdWUvY29tcG9uZW50cy9EeW5hbWljVmFsdWVzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL2hvb2tzL3VzZURlZmF1bHRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvaG9va3MvdXNlRHluYW1pY0V2ZW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2V2ZW50cy9ob29rcy91c2VFdmVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvaG9va3MvdXNlRXZlbnRzRnJvbUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvaG9va3MvdXNlRXZlbnRzRnJvbUdhdGV3YXlzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZXZlbnRzL2hvb2tzL3VzZVJlcXVlc3RFdmVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2V2ZW50cy9zdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9ldmVudHMvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2V2ZW50cy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9jb21wb25lbnRzL0dhdGV3YXlGZXRjaEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL2hlbHBlcnMvZ2F0ZXdheUF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9oZWxwZXJzL2dhdGV3YXlMYWJlbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL2hlbHBlcnMvaXNzZXRSZW5kZXJHYXRld2F5LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvaGVscGVycy9yZWdpc3RlckdhdGV3YXkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9oZWxwZXJzL3JlbmRlckdhdGV3YXkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9oZWxwZXJzL3JlbmRlckdhdGV3YXlXaXRoUGxhY2Vob2xkZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9ob29rcy93aXRoRGlzcGF0Y2hHYXRld2F5cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL2hvb2tzL3dpdGhTZWxlY3RHYXRld2F5cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9zdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9nYXRld2F5cy9zdG9yZS9kaXNwYXRjaGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvZ2F0ZXdheXMvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2dhdGV3YXlzL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvaG9va3MvdXNlT3BlbkVkaXRvclBhbmVsLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvaG9va3MvdXNlUmVwZWF0ZXJTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2hvb2tzL3VzZVNlbGVjdFBvc3RNZXRhLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvaG9va3MvdXNlU3VjY2Vzc05vdGljZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2hvb2tzL3dpdGhTZWxlY3RGb3JtRmllbGRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9hYnN0cmFjdC9CYXNlRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9hYnN0cmFjdC9CYXNlTWFjcm8uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2Fic3RyYWN0L0Jhc2VQb3BvdmVySXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9DbGllbnRTaWRlTWFjcm9zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL0dyb3VwSXRlbXNQb3BvdmVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3JvRmllbGRJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0J1dHRvblRlbXBsYXRlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0ZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb3NGaWVsZHNUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9Qb3BvdmVySXRlbU1hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL1NlcnZlclNpZGVNYWNyb3MuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2NvbnRleHQvRXh0cmFNYWNyb0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2NvbnRleHQvUG9wb3ZlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2NvbnRleHQvUG9wb3Zlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2ZpbHRlcnMvQWRkRGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL0FkZE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL0FkZFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2ZpbHRlcnMvRmFsbGJhY2tGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2ZpbHRlcnMvTGVuZ3RoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL1N1YnRyYWN0RGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL1N1YnRyYWN0TW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL1RvRGF0ZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZmlsdGVycy9Ub0RhdGVUaW1lRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9maWx0ZXJzL1RvVGltZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9ob29rcy91c2VJbnNlcnRNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vbWFjcm9zL0N1cnJlbnREYXRlTWFjcm8uanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL21hY3Jvcy9EYXlJblNlY01hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9tYWNyb3MvTWluSW5TZWNNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vbWFjcm9zL01vbnRoSW5TZWNNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vbWFjcm9zL1llYXJJblNlY01hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9zdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9tYWNyb3MuYnV0dG9uL3N0b3JlL2Rpc3BhdGNoZXJzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFjcm9zLmJ1dHRvbi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL21hY3Jvcy5idXR0b24vc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWlncmF0aW9ucy9taWdyYXRlLmdhdGV3YXlzLnNldHRpbmdzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2NvbXBvbmVudHMvQXZhaWxhYmxlTWFwRmllbGRQcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9wcmVzZXQvY29tcG9uZW50cy9EeW5hbWljUHJlc2V0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2NvbXBvbmVudHMvRmllbGRXaXRoUHJlc2V0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2NvbXBvbmVudHMvR2xvYmFsRmllbGRQcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9wcmVzZXQvY29tcG9uZW50cy9NYXBGaWVsZFByZXNldC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9jb21wb25lbnRzL1ByZXNldEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9jb21wb25lbnRzL3dpdGhQcmVzZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9wcmVzZXQvY29udGV4dC9Db250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcHJlc2V0L2hlbHBlcnMvaHVtYW5SZWFkYWJsZVByZXNldC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ByZXNldC9oZWxwZXJzL2lzUHJlc2V0U3RyaW5nLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcmVwZWF0ZXIvY29tcG9uZW50cy9SZXBlYXRlcldpdGhTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuYWRkLm5ldy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuYWRkLm9yLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuc3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb21wb25lbnRzL3NhZmUuZGVsZXRlLnRvZ2dsZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uYm9keS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uaGVhZC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuaXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuc3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9yZXBlYXRlci9jb250ZXh0L3NhZmUuZGVsZXRlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2Uvc3RvcmUubWFuYWdlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3Rvb2xzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jbGFzc2VzL01lc3NhZ2VJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jbGFzc2VzL1ZhbGlkYXRpb25NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9BZHZhbmNlZFJ1bGVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL0FkdmFuY2VkUnVsZU1vZGFsSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9BZHZhbmNlZFJ1bGVzSXNFbXB0eS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9BZHZhbmNlZFJ1bGVzTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9BZHZhbmNlZFJ1bGVzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvQ2hvb3NlUmVsYXRlZEZpZWxkLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL0VkaXRBZHZhbmNlZFJ1bGVzQnV0dG9uLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL0VkaXRSdWxlc01vZGFsQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9IdW1hblJlYWRhYmxlUnVsZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uQmxvY2tNZXNzYWdlLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9jb21wb25lbnRzL1ZhbGlkYXRpb25NZXRhTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uVG9nZ2xlR3JvdXAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2hlbHBlcnMvZ2V0SXRlbUJ5TmFtZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vaGVscGVycy9odW1hblJlYWRhYmxlUnVsZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vaG9va3MvdXNlR3JvdXBlZFZhbGlkYXRpb25NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vc3RvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvdmFsaWRhdGlvbi9zdG9yZS9kaXNwYXRjaGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL2NvbXBvbmVudHMvR3JvdXBlZFNlbGVjdENvbnRyb2wuanM/ZDI0YyIsIndlYnBhY2s6Ly9qZmIvLi9wYWNrYWdlL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uTWV0YU1lc3NhZ2UuanM/NWFhNiIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS9jb21wb25lbnRzL0dyb3VwZWRTZWxlY3RDb250cm9sLmpzPzAxNTMiLCJ3ZWJwYWNrOi8vamZiLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvVmFsaWRhdGlvbk1ldGFNZXNzYWdlLmpzPzExZmIiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImFjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImJsb2Nrc1RvQWN0aW9uc1wiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJhcGlGZXRjaFwiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9AbGluYXJpYS9jb3JlL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvcmVhY3QvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL3BhY2thZ2UvbWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWJicnxhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkaXNhYmxlUmVtb3RlUGxheWJhY2t8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8ZW50ZXJLZXlIaW50fGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHJhbnNsYXRlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5jcmVtZW50YWx8ZmFsbGJhY2t8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufG9wdGlvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpc1Byb3BWYWxpZCA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IHsgaXNQcm9wVmFsaWQgYXMgZGVmYXVsdCB9O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgeyBtZW1vaXplIGFzIGRlZmF1bHQgfTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG4vKiogQHR5cGVkZWYge3tpY29uOiBKU1guRWxlbWVudCwgc2l6ZT86IG51bWJlcn0gJiBpbXBvcnQoJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcycpLlNWR1Byb3BzfSBJY29uUHJvcHMgKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gU1ZHIGljb24uXG4gKlxuICogQHBhcmFtIHtJY29uUHJvcHN9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgaWNvbiBpcyB0aGUgU1ZHIGNvbXBvbmVudCB0byByZW5kZXJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgaXMgYSBudW1iZXIgc3BlY2lmaXlpbmcgdGhlIGljb24gc2l6ZSBpbiBwaXhlbHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyIHByb3BzIHdpbGwgYmUgcGFzc2VkIHRvIHdyYXBwZWQgU1ZHIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJ3JlYWN0JykuRm9yd2FyZGVkUmVmPEhUTUxFbGVtZW50Pn0gcmVmICAgVGhlIGZvcndhcmRlZCByZWYgdG8gdGhlIFNWRyBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSAgSWNvbiBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gSWNvbih7XG4gIGljb24sXG4gIHNpemUgPSAyNCxcbiAgLi4ucHJvcHNcbn0sIHJlZikge1xuICByZXR1cm4gY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICB3aWR0aDogc2l6ZSxcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgLi4ucHJvcHMsXG4gICAgcmVmXG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihJY29uKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1xuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY2xhc3MgSmV0RmllbGRzTWFwQ29udHJvbCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIHByb3BzICk7XG5cblx0XHR0aGlzLmZpZWxkVHlwZXMgPSB0aGlzLnByb3BzLmZpZWxkVHlwZXM7XG5cdFx0dGhpcy50YXhvbm9taWVzTGlzdCA9IHRoaXMucHJvcHMudGF4b25vbWllc0xpc3Q7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcblx0XHR0aGlzLm1ldGFQcm9wID0gdGhpcy5wcm9wcy5tZXRhUHJvcCA/IHRoaXMucHJvcHMubWV0YVByb3AgOiAncG9zdF9tZXRhJztcblx0XHR0aGlzLnRlcm1zUHJvcCA9IHRoaXMucHJvcHMudGVybXNQcm9wID8gdGhpcy5wcm9wcy50ZXJtc1Byb3AgOiAncG9zdF90ZXJtcyc7XG5cdFx0dGhpcy5pbmRleCA9IHRoaXMucHJvcHMuaW5kZXg7XG5cblx0XHR0aGlzLmluaXQoKTtcblx0XHR0aGlzLmJpbmRGdW5jdGlvbnMoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0eXBlOiB0aGlzLmdldEZpZWxkVHlwZSggdGhpcy5wcm9wcy5maWVsZFZhbHVlICksXG5cdFx0fTtcblx0fVxuXG5cdGJpbmRGdW5jdGlvbnMoKSB7XG5cdFx0dGhpcy5vbkNoYW5nZVR5cGUgPSB0aGlzLm9uQ2hhbmdlVHlwZS5iaW5kKCB0aGlzICk7XG5cdFx0dGhpcy5vbkNoYW5nZVZhbHVlID0gdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKTtcblx0fVxuXG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLmlkID0gYGluc3BlY3Rvci1zZWxlY3QtY29udHJvbC0keyB0aGlzLmluZGV4IH1gO1xuXHRcdHRoaXMucHJlcGFyZWRUYXhlcyA9IFtdO1xuXHRcdHRoaXMudGF4UHJlZml4ID0gJ2pldF90YXhfXyc7XG5cblx0XHRpZiAoICEgdGhpcy50YXhvbm9taWVzTGlzdCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnRheG9ub21pZXNMaXN0Lmxlbmd0aDsgaSArKyApIHtcblx0XHRcdHRoaXMucHJlcGFyZWRUYXhlcy5wdXNoKCB7XG5cdFx0XHRcdHZhbHVlOiB0aGlzLnRheFByZWZpeCArIHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS52YWx1ZSxcblx0XHRcdFx0bGFiZWw6IHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS5sYWJlbCxcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRnZXRGaWVsZE5hbWUoIHZhbHVlICkge1xuXG5cdFx0aWYgKCAhIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkVHlwZSA9IHRoaXMuZ2V0RmllbGRUeXBlKCB2YWx1ZSApO1xuXG5cdFx0aWYgKCB0aGlzLnRlcm1zUHJvcCA9PT0gZmllbGRUeXBlIHx8IHRoaXMubWV0YVByb3AgPT09IGZpZWxkVHlwZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0XG5cblx0fTtcblxuXHRpc1Rlcm1Pck1ldGEoIHZhbHVlICkge1xuXHRcdHJldHVybiAoIHRoaXMudGVybXNQcm9wID09PSB2YWx1ZSB8fCB0aGlzLm1ldGFQcm9wID09PSB2YWx1ZSApO1xuXHR9XG5cblxuXHRnZXRGaWVsZFR5cGUoIHZhbHVlICkge1xuXG5cdFx0aWYgKCAhIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGRUeXBlcy5sZW5ndGg7IGkgKysgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSB0aGlzLmZpZWxkVHlwZXNbIGkgXS52YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdmFsdWUuaW5jbHVkZXMoIHRoaXMudGF4UHJlZml4ICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXJtc1Byb3A7XG5cdFx0fVxuXHRcdFxuXHRcdFx0cmV0dXJuIHRoaXMubWV0YVByb3A7XG5cdFx0XG5cblx0fTtcblxuXG5cdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlICkge1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcblx0XHRcdC4uLnRoaXMucHJvcHMuZmllbGRzTWFwLFxuXHRcdFx0WyB0aGlzLnByb3BzLmZpZWxkTmFtZSBdOiBuZXdWYWx1ZVxuXHRcdH0gKTtcblx0fTtcblxuXG5cdG9uQ2hhbmdlVHlwZSggbmV3VmFsdWUgKSB7XG5cdFx0bGV0IHZhbCA9IHRoaXMuZ2V0RmllbGRUeXBlKCBuZXdWYWx1ZSApO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSgge1xuXHRcdFx0dHlwZTogdmFsXG5cdFx0fSApO1xuXG5cdFx0aWYgKCB0aGlzLmlzVGVybU9yTWV0YSggdmFsICkgKSB7XG5cdFx0XHR2YWwgPSAnJztcblx0XHR9XG5cblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHZhbCApO1xuXHR9XG5cblxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXG5cblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9fcm93XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1wb3N0LWZpZWxkLWNvbnRyb2xcIj5cblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfdHlwZV8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cblx0XHRcdFx0XHRsYWJlbD17IHRoaXMucHJvcHMuZmllbGROYW1lIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnN0YXRlLnR5cGUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVR5cGUgfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZpZWxkVHlwZXMgfVxuXHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNjBweCdcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAoIHRoaXMubWV0YVByb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF9uYW1lXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5wcm9wcy5maWVsZFZhbHVlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnMjAwcHgnIH0gfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHRcdHsgKCB0aGlzLnRlcm1zUHJvcCA9PT0gdGhpcy5zdGF0ZS50eXBlICkgJiYgPFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLXdpdGhvdXQtbGFiZWwnXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3RheF8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLnByZXBhcmVkVGF4ZXMgfVxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+O1xuXHR9XG5cblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBKZXRGaWVsZHNNYXBDb250cm9sOyIsImNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcblx0ICAgICAgUmljaFRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEFjdGlvbkJ1dHRvblBsYWNlaG9sZGVyKCBwcm9wcyApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRyZXR1cm4gPGRpdiB7IC4uLmJsb2NrUHJvcHMgfSA+XG5cdFx0PGRpdiBjbGFzc05hbWU9eyBwcm9wcy53cmFwcGVyQ2xhc3Nlcy5qb2luKCAnICcgKSB9PlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0Y2xhc3NOYW1lPXsgcHJvcHMuYnV0dG9uQ2xhc3Nlcy5qb2luKCAnICcgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiSW5wdXQgU3VibWl0IGxhYmVsLi4uXCJcblx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cblx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMubGFiZWwgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbGFiZWwgPT4gcHJvcHMuc2V0QXR0cmlidXRlcyggeyBsYWJlbCB9ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQnV0dG9uUGxhY2Vob2xkZXI7IiwiaW1wb3J0IEFjdGlvbkZpZWxkc01hcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BY3Rpb25GaWVsZHNNYXBDb250ZXh0JztcbmltcG9ydCB7XG5cdFJvd0NvbnRyb2xFbmQsXG5cdExhYmVsLFxuXHRSb3dDb250cm9sLFxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5mdW5jdGlvbiBBY3Rpb25GaWVsZHNNYXAoIHtcblx0ZmllbGRzID0gW10sXG5cdGxhYmVsID0gJ1tFbXB0eSBsYWJlbF0nLFxuXHRjaGlsZHJlbiA9IG51bGwsXG5cdHBsYWluSGVscCA9ICcnLFxuXHRjdXN0b21IZWxwID0gZmFsc2UsXG59ICkge1xuXG5cdHJldHVybiA8Um93Q29udHJvbCBhbGlnbj1cImZsZXgtc3RhcnRcIj5cblx0XHQ8TGFiZWw+eyBsYWJlbCB9PC9MYWJlbD5cblx0XHQ8Um93Q29udHJvbEVuZD5cblx0XHRcdHsgKFxuXHRcdFx0XHRjdXN0b21IZWxwICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXN0b21IZWxwXG5cdFx0XHQpICYmIGN1c3RvbUhlbHAoKSB9XG5cblx0XHRcdHsgQm9vbGVhbiggcGxhaW5IZWxwLmxlbmd0aCApICYmIDxzcGFuXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfVxuXHRcdFx0PnsgcGxhaW5IZWxwIH08L3NwYW4+IH1cblxuXHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGRJZCwgZmllbGREYXRhIF0sIGluZGV4ICkgPT4gPEZyYWdtZW50XG5cdFx0XHRcdGtleT17IGBmaWVsZF9pbl9tYXBfJHsgZmllbGRJZCArIGluZGV4IH1gIH1cblx0XHRcdD5cblx0XHRcdFx0PEFjdGlvbkZpZWxkc01hcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0XHRcdFx0bmFtZTogZmllbGRJZCxcblx0XHRcdFx0XHRkYXRhOiBmaWVsZERhdGEsXG5cdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdH0gfT5cblx0XHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlblxuXHRcdFx0XHRcdCAgPyBjaGlsZHJlbiggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKVxuXHRcdFx0XHRcdCAgOiBjaGlsZHJlbiB9XG5cdFx0XHRcdDwvQWN0aW9uRmllbGRzTWFwQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdDwvRnJhZ21lbnQ+ICkgfVxuXHRcdDwvUm93Q29udHJvbEVuZD5cblx0PC9Sb3dDb250cm9sPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uRmllbGRzTWFwO1xuXG4iLCJpbXBvcnQgeyBDdXJyZW50QWN0aW9uRWRpdENvbnRleHQgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuaW1wb3J0IEFjdGlvbkZpZWxkc01hcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BY3Rpb25GaWVsZHNNYXBDb250ZXh0JztcbmltcG9ydCBDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBEeW5hbWljUHJvcGVydHlTZWxlY3QoIHtcblx0ZHluYW1pYyA9IFtdLFxuXHRwYXJzZVZhbHVlID0gbnVsbCxcblx0Y2hpbGRyZW4gPSBudWxsLFxuXHRwcm9wZXJ0aWVzID0gbnVsbCxcbn0gKSB7XG5cblx0Ly8gY29udGV4dCB3aXRoIGFjdGlvbiBwcm9wc1xuXHRjb25zdCB7XG5cdFx0ICAgICAgc291cmNlLFxuXHRcdCAgICAgIHNldHRpbmdzLFxuXHRcdCAgICAgIHNldE1hcEZpZWxkLFxuXHQgICAgICB9ID0gdXNlQ29udGV4dCggQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0ICk7XG5cblx0cHJvcGVydGllcyA9IChcblx0XHRwcm9wZXJ0aWVzID8/IHNvdXJjZS5wcm9wZXJ0aWVzXG5cdCk7XG5cblx0Ly8gY29udGV4dCB3aXRoIGN1cnJlbnQgZmllbGQgaW4gYSBmaWVsZCBtYXBcblx0Y29uc3Qge1xuXHRcdCAgICAgIG5hbWUsXG5cdFx0ICAgICAgaW5kZXgsXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0ICk7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIGZpZWxkc19tYXA6IGZpZWxkc01hcCA9IHt9LFxuXHQgICAgICB9ID0gc2V0dGluZ3M7XG5cblx0ZnVuY3Rpb24gZ2V0VHlwZUZpZWxkVmFsdWUoIHZhbHVlICkge1xuXHRcdGZvciAoIGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXMgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSBwcm9wZXJ0eS52YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBwYXJzZVZhbHVlID8gcGFyc2VWYWx1ZSggdmFsdWUgKSA6IGR5bmFtaWNbIDAgXSA/PyAnJztcblx0fVxuXG5cdGNvbnN0IFsgY3VycmVudFByb3AsIHNldEN1cnJlbnRQcm9wIF0gPSB1c2VTdGF0ZShcblx0XHQoKSA9PiBnZXRUeXBlRmllbGRWYWx1ZSggZmllbGRzTWFwWyBuYW1lIF0gPz8gJycgKSxcblx0KTtcblxuXHRjb25zdCBnZXRIZWxwID0gKCkgPT4ge1xuXHRcdGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydGllcy5maW5kKFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gY3VycmVudFByb3AsXG5cdFx0KTtcblxuXHRcdHJldHVybiBwcm9wZXJ0eT8uaGVscCA/PyAnJztcblx0fTtcblxuXHRjb25zdCBGaWVsZFNlbGVjdCA9IChcblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PXsgbmFtZSArIGluZGV4IH1cblx0XHRcdHZhbHVlPXsgY3VycmVudFByb3AgfVxuXHRcdFx0b3B0aW9ucz17IHByb3BlcnRpZXMgfVxuXHRcdFx0aGVscD17IGdldEhlbHAoKSB9XG5cdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHtcblx0XHRcdFx0Y29uc3QgcHJvcCA9IGdldFR5cGVGaWVsZFZhbHVlKCB2YWx1ZSApO1xuXG5cdFx0XHRcdHNldEN1cnJlbnRQcm9wKCBwcm9wICk7XG5cdFx0XHRcdHNldE1hcEZpZWxkKCB7XG5cdFx0XHRcdFx0bmFtZUZpZWxkOiBuYW1lLFxuXHRcdFx0XHRcdHZhbHVlOiBkeW5hbWljLmluY2x1ZGVzKCB2YWx1ZSApID8gJycgOiB2YWx1ZSxcblx0XHRcdFx0fSApO1xuXHRcdFx0fSB9XG5cdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0Lz5cblx0KTtcblxuXHRyZXR1cm4gPEN1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0RmllbGRTZWxlY3QsXG5cdFx0cHJvcGVydHk6IGN1cnJlbnRQcm9wLFxuXHR9IH0+XG5cdFx0eyBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XG5cdFx0eyAhY2hpbGRyZW4gJiYgRmllbGRTZWxlY3QgfVxuXHQ8L0N1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUHJvcGVydHlTZWxlY3Q7IiwiaW1wb3J0IEFjdGlvbkZpZWxkc01hcENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BY3Rpb25GaWVsZHNNYXBDb250ZXh0JztcblxuY29uc3QgeyBSYXdIVE1MLCB1c2VDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcmFwcGVyUmVxdWlyZWRDb250cm9sKCB7XG5cdGNoaWxkcmVuLFxuXHRsYWJlbEtleSA9ICdsYWJlbCcsXG5cdHJlcXVpcmVkS2V5ID0gJ3JlcXVpcmVkJyxcblx0aGVscEtleSA9ICdoZWxwJyxcblx0ZmllbGQgPSBbXSxcbn0gKSB7XG5cblx0bGV0IHsgbmFtZSwgZGF0YSB9ID0gdXNlQ29udGV4dCggQWN0aW9uRmllbGRzTWFwQ29udGV4dCApO1xuXG5cdGlmICggZmllbGQubGVuZ3RoICkge1xuXHRcdFsgbmFtZSwgZGF0YSBdID0gZmllbGQ7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXG5cdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lIH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1maWVsZC1tYXBfX3Jvdy1sYWJlbFwiPlxuXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdmaWVsZHMtbWFwX19sYWJlbCcgfT5cblx0XHRcdFx0XHR7IChcblx0XHRcdFx0XHRcdGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgJiYgZGF0YVsgbGFiZWxLZXkgXVxuXHRcdFx0XHRcdCkgJiYgZGF0YVsgbGFiZWxLZXkgXSB9XG5cdFx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0XHQhZGF0YS5oYXNPd25Qcm9wZXJ0eSggbGFiZWxLZXkgKVxuXHRcdFx0XHRcdCkgJiYgZGF0YSB9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0ZGF0YS5oYXNPd25Qcm9wZXJ0eSggcmVxdWlyZWRLZXkgKSAmJiBkYXRhWyByZXF1aXJlZEtleSBdXG5cdFx0XHRcdCkgJiZcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2ZpZWxkcy1tYXBfX3JlcXVpcmVkJyB9PiAqPC9zcGFuPiB9XG5cdFx0XHRcdHsgZGF0YVsgaGVscEtleSBdICYmIDxwXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwJyB9XG5cdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXG5cdFx0XHRcdFx0XHRtYXJnaW46ICcxZW0gMCAwIDAnLFxuXHRcdFx0XHRcdH0gfT5cblx0XHRcdFx0XHQ8UmF3SFRNTD57IGRhdGFbIGhlbHBLZXkgXSB9PC9SYXdIVE1MPlxuXHRcdFx0XHQ8L3A+IH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9kaXY+XG5cdCk7XG59IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRuYW1lOiAnJyxcblx0ZGF0YToge30sXG5cdGluZGV4OiAwLFxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0O1xuIiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRGaWVsZFNlbGVjdDogbnVsbCxcblx0cHJvcGVydHk6ICcnXG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQ7IiwiaW1wb3J0IEFjdGlvbk1vZGFsQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0FjdGlvbk1vZGFsQ29udGV4dCc7XG5pbXBvcnQgQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbCBmcm9tICcuL0FjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGwnO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCB7XG5cdCAgICAgIFNsb3Q6IEZvb3RlclNsb3QsXG4gICAgICB9ID0gQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIEFjdGlvbk1vZGFsKCB7XG5cdG9uUmVxdWVzdENsb3NlLFxuXHRjaGlsZHJlbixcblx0dGl0bGUgPSAnJyxcblx0Y2xhc3NOYW1lcyA9IFtdLFxuXHRjbGFzc05hbWUgPSAnJyxcblx0b25VcGRhdGVDbGljayxcblx0b25DYW5jZWxDbGljayxcblx0dXBkYXRlQnRuTGFiZWwgPSAnVXBkYXRlJyxcblx0dXBkYXRlQnRuUHJvcHMgPSB7fSxcblx0Y2FuY2VsQnRuUHJvcHMgPSB7fSxcblx0Y2FuY2VsQnRuTGFiZWwgPSAnQ2FuY2VsJyxcblx0Zml4ZWRIZWlnaHQgPSAnJyxcblx0Li4ucHJvcHNcbn0gKSB7XG5cblx0Y29uc3QgbW9kYWxDbGFzc2VzID0gWyAnamV0LWZvcm0tZWRpdC1tb2RhbCcsIC4uLmNsYXNzTmFtZXMsIGNsYXNzTmFtZSBdO1xuXG5cdGNvbnN0IFsgYWN0aW9uQ2xpY2ssIHNldEFjdGlvbkNsaWNrIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xuXG5cdGNvbnN0IHVwZGF0ZUNsaWNrID0gKCkgPT4ge1xuXHRcdGlmICggb25VcGRhdGVDbGljayApIHtcblx0XHRcdG9uVXBkYXRlQ2xpY2soKTtcblx0XHR9XG5cdFx0c2V0QWN0aW9uQ2xpY2soIHRydWUgKTtcblx0fTtcblx0Y29uc3QgY2FuY2VsQ2xpY2sgPSAoKSA9PiB7XG5cdFx0aWYgKCBvbkNhbmNlbENsaWNrICkge1xuXHRcdFx0b25DYW5jZWxDbGljaygpO1xuXHRcdH1cblx0XHRzZXRBY3Rpb25DbGljayggZmFsc2UgKTtcblx0fTtcblxuXHRsZXQgc3R5bGUgPSB7fTtcblx0aWYgKCBmaXhlZEhlaWdodCApIHtcblx0XHRzdHlsZSA9IHsgaGVpZ2h0OiBmaXhlZEhlaWdodCB9O1xuXHRcdG1vZGFsQ2xhc3Nlcy5wdXNoKCAnamV0LW1vZGFsLWZpeGVkLWhlaWdodCcgKTtcblx0fVxuXG5cdHJldHVybiA8TW9kYWxcblx0XHRvblJlcXVlc3RDbG9zZT17IG9uUmVxdWVzdENsb3NlIH1cblx0XHRjbGFzc05hbWU9eyBtb2RhbENsYXNzZXMuam9pbiggJyAnICkgfVxuXHRcdHRpdGxlPXsgdGl0bGUgfVxuXHRcdHN0eWxlPXsgc3R5bGUgfVxuXHRcdHsgLi4ucHJvcHMgfVxuXHQ+XG5cdFx0eyAhY2hpbGRyZW4gJiYgPGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fY29udGVudFwiXG5cdFx0PlxuXHRcdFx0eyBfXyggJ0FjdGlvbiBjYWxsYmFjayBpcyBub3QgZm91bmQuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvZGl2PiB9XG5cdFx0eyBjaGlsZHJlbiAmJiA8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX193cmFwcGVyXCI+XG5cdFx0XHRcdDxBY3Rpb25Nb2RhbENvbnRleHQuUHJvdmlkZXJcblx0XHRcdFx0XHR2YWx1ZT17IHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgfVxuXHRcdFx0XHRcdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0FjdGlvbk1vZGFsQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEZvb3RlclNsb3QgZmlsbFByb3BzPXsgeyB1cGRhdGVDbGljaywgY2FuY2VsQ2xpY2sgfSB9PlxuXHRcdFx0XHR7ICggZmlsbHMgKSA9PiAoXG5cdFx0XHRcdFx0Qm9vbGVhbiggZmlsbHM/Lmxlbmd0aCApXG5cdFx0XHRcdFx0PyBmaWxscyA6IDxCdXR0b25Hcm91cFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fYWN0aW9uc1wiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IHVwZGF0ZUNsaWNrIH1cblx0XHRcdFx0XHRcdFx0eyAuLi51cGRhdGVCdG5Qcm9wcyB9XG5cdFx0XHRcdFx0XHQ+eyB1cGRhdGVCdG5MYWJlbCB9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogJzAgMCAwIDEwcHgnLFxuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17IGNhbmNlbENsaWNrIH1cblx0XHRcdFx0XHRcdFx0eyAuLi5jYW5jZWxCdG5Qcm9wcyB9XG5cdFx0XHRcdFx0XHQ+eyBjYW5jZWxCdG5MYWJlbCB9PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L0Zvb3RlclNsb3Q+XG5cdFx0PC8+IH1cblx0PC9Nb2RhbD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1vZGFsOyIsImNvbnN0IHtcblx0ICAgICAgY3JlYXRlU2xvdEZpbGwsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbCA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCQWN0aW9uTW9kYWxGb290ZXInICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGw7XG4iLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEFjdGlvbk1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0YWN0aW9uQ2xpY2s6IG51bGwsXG5cdG9uUmVxdWVzdENsb3NlOiAoKSA9PiB7XG5cdH0sXG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1vZGFsQ29udGV4dDsiLCJpbXBvcnQgQWN0aW9uTW9kYWxDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvQWN0aW9uTW9kYWxDb250ZXh0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbi8qKlxuICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gdXNlT25VcGRhdGVNb2RhbCggY2FsbGJhY2sgKSB7XG5cdGNvbnN0IHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gPSB1c2VDb250ZXh0KCBBY3Rpb25Nb2RhbENvbnRleHQgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHQvLyB1cGRhdGUgZmllbGQgYXR0cmlidXRlc1xuXHRcdGlmICggYWN0aW9uQ2xpY2sgKSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblxuXHRcdGlmICggbnVsbCAhPT0gYWN0aW9uQ2xpY2sgKSB7XG5cdFx0XHRvblJlcXVlc3RDbG9zZSgpO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdH0sIFsgYWN0aW9uQ2xpY2sgXSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VPblVwZGF0ZU1vZGFsOyIsImltcG9ydCB7IHVzZUZpZWxkcyB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYmxvY2tzLXRvLWFjdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG5cdCAgICAgIHdpdGhGaWx0ZXJzLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3QgQmVmb3JlQ29uZGl0aW9uT3B0aW9ucyA9IHdpdGhGaWx0ZXJzKCAnamV0LmZiLmJsb2NrLmNvbmRpdGlvbnMub3B0aW9ucycgKShcblx0cHJvcHMgPT4ge1xuXHRcdGNvbnN0IHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gPSBwcm9wcztcblxuXHRcdGNvbnN0IGZvcm1GaWVsZHMgPSB1c2VGaWVsZHMoIHsgcGxhY2Vob2xkZXI6ICctLScgfSApO1xuXG5cdFx0c3dpdGNoICggY3VycmVudEl0ZW0ub3BlcmF0b3IgKSB7XG5cdFx0XHRjYXNlICdyZW5kZXJfc3RhdGUnOlxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5maWVsZCB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZmllbGQ6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz47XG5cdFx0fVxuXHR9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmVmb3JlQ29uZGl0aW9uT3B0aW9uczsiLCJpbXBvcnQgUmVwZWF0ZXJJdGVtQ29udGV4dCBmcm9tICcuLi8uLi9yZXBlYXRlci9jb250ZXh0L3JlcGVhdGVyLml0ZW0nO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZVVuaXFLZXknO1xuaW1wb3J0IHVzZUJsb2NrQ29uZGl0aW9ucyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0NvbmRpdGlvbnMnO1xuaW1wb3J0IENvbmRpdGlvbk9wdGlvbnMgZnJvbSAnLi9Db25kaXRpb25PcHRpb25zJztcbmltcG9ydCBCZWZvcmVDb25kaXRpb25PcHRpb25zIGZyb20gJy4vQmVmb3JlQ29uZGl0aW9uT3B0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIENvbmRpdGlvbkl0ZW0oKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBjdXJyZW50SXRlbSxcblx0XHQgICAgICBjaGFuZ2VDdXJyZW50SXRlbSxcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIFJlcGVhdGVySXRlbUNvbnRleHQgKTtcblxuXHRjb25zdCB1bmlxS2V5ICAgICAgID0gdXNlVW5pcUtleSgpO1xuXHRjb25zdCB7IG9wZXJhdG9ycyB9ID0gdXNlQmxvY2tDb25kaXRpb25zKCk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PEJlZm9yZUNvbmRpdGlvbk9wdGlvbnNcblx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBjaGFuZ2VDdXJyZW50SXRlbSB9XG5cdFx0Lz5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdENvbnRyb2wtb3BlcmF0b3InICkgfVxuXHRcdFx0bGFiZWw9eyBfXyggJ09wZXJhdG9yJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5vcGVyYXRvciB9XG5cdFx0XHRvcHRpb25zPXsgb3BlcmF0b3JzIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgb3BlcmF0b3I6IG5ld1ZhbHVlIH0gKSB9XG5cdFx0Lz5cblx0XHQ8Q29uZGl0aW9uT3B0aW9uc1xuXHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XG5cdFx0XHRjaGFuZ2VDdXJyZW50SXRlbT17IGNoYW5nZUN1cnJlbnRJdGVtIH1cblx0XHQvPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbkl0ZW07IiwiaW1wb3J0IFJlbmRlclN0YXRlT3B0aW9ucyBmcm9tICcuL1JlbmRlclN0YXRlT3B0aW9ucyc7XG5pbXBvcnQgdXNlVW5pcUtleSBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlVW5pcUtleSc7XG5pbXBvcnQgQ2xpZW50U2lkZU1hY3JvcyBmcm9tICcuLi8uLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvQ2xpZW50U2lkZU1hY3Jvcyc7XG5pbXBvcnQgQWR2YW5jZWRNb2RhbENvbnRyb2wgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZHZhbmNlZE1vZGFsQ29udHJvbCc7XG5cbmNvbnN0IHtcblx0ICAgICAgVGV4dGFyZWFDb250cm9sLFxuXHQgICAgICB3aXRoRmlsdGVycyxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCBDb25kaXRpb25PcHRpb25zID0gd2l0aEZpbHRlcnMoICdqZXQuZmIuYmxvY2suY29uZGl0aW9ucy5vcHRpb25zJyApKFxuXHRwcm9wcyA9PiB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSA9IHByb3BzO1xuXG5cdFx0Y29uc3QgdW5pcUtleSA9IHVzZVVuaXFLZXkoKTtcblxuXHRcdGlmICggWyAnZW1wdHknLCAnbm90X2VtcHR5JyBdLmluY2x1ZGVzKCBjdXJyZW50SXRlbS5vcGVyYXRvciApICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0c3dpdGNoICggY3VycmVudEl0ZW0ub3BlcmF0b3IgKSB7XG5cdFx0XHRjYXNlICdyZW5kZXJfc3RhdGUnOlxuXHRcdFx0XHRyZXR1cm4gPFJlbmRlclN0YXRlT3B0aW9uc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdSZW5kZXJTdGF0ZU9wdGlvbnMnICkgfVxuXHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtPXsgY2hhbmdlQ3VycmVudEl0ZW0gfVxuXHRcdFx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0XHQvPjtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiA8Q2xpZW50U2lkZU1hY3Jvcz5cblx0XHRcdFx0XHQ8QWR2YW5jZWRNb2RhbENvbnRyb2xcblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1ZhbHVlIHRvIGNvbXBhcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZVByZXNldD17IHZhbHVlID0+IGNoYW5nZUN1cnJlbnRJdGVtKFxuXHRcdFx0XHRcdFx0XHR7IHZhbHVlIH0gKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZU1hY3Jvcz17IG5hbWUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IChcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50SXRlbS52YWx1ZSA/PyAnJ1xuXHRcdFx0XHRcdFx0XHQpICsgbmFtZSxcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyAoIHsgaW5zdGFuY2VJZCB9ICkgPT4gPFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRpZD17IGluc3RhbmNlSWQgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZSB9ICkgfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdDwvQWR2YW5jZWRNb2RhbENvbnRyb2w+XG5cdFx0XHRcdDwvQ2xpZW50U2lkZU1hY3Jvcz47XG5cdFx0fVxuXHR9ICk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbk9wdGlvbnM7IiwiaW1wb3J0IFJlcGVhdGVySGVhZENvbnRleHRcblx0ZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29udGV4dC9yZXBlYXRlci5jdXN0b20uaXRlbS5oZWFkJztcbmltcG9ydCBSZXBlYXRlckJ1dHRvbnNDb250ZXh0XG5cdGZyb20gJy4uLy4uL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uYnV0dG9ucyc7XG5pbXBvcnQgaHVtYW5SZWFkYWJsZUNvbmRpdGlvbiBmcm9tICcuLi9oZWxwZXJzL2h1bWFuUmVhZGFibGVDb25kaXRpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIENvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlciggeyBjaGlsZHJlbiB9ICkge1xuXHRyZXR1cm4gPFJlcGVhdGVySGVhZENvbnRleHQuUHJvdmlkZXJcblx0XHR2YWx1ZT17IHtcblx0XHRcdGlzU3VwcG9ydGVkOiAoKSA9PiB0cnVlLFxuXHRcdFx0cmVuZGVyOiAoIHsgY3VycmVudEl0ZW0gfSApID0+IDxzcGFuXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9XG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge1xuXHRcdFx0XHRcdF9faHRtbDogY3VycmVudEl0ZW0/Lm9yX29wZXJhdG9yXG5cdFx0XHRcdFx0ICAgICAgICA/IF9fKCAnT1InLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0XHRcdCAgICAgICAgOiBodW1hblJlYWRhYmxlQ29uZGl0aW9uKCBjdXJyZW50SXRlbSApLFxuXHRcdFx0XHR9IH1cblx0XHRcdC8+LFxuXHRcdH0gfVxuXHQ+XG5cdFx0PFJlcGVhdGVyQnV0dG9uc0NvbnRleHQuUHJvdmlkZXJcblx0XHRcdHZhbHVlPXsge1xuXHRcdFx0XHRlZGl0OiBpdGVtID0+ICFpdGVtLm9yX29wZXJhdG9yLFxuXHRcdFx0fSB9XG5cdFx0PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9SZXBlYXRlckJ1dHRvbnNDb250ZXh0LlByb3ZpZGVyPlxuXHQ8L1JlcGVhdGVySGVhZENvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXI7IiwiaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gJy4uLy4uL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsJztcbmltcG9ydCBBY3Rpb25Nb2RhbEZvb3RlclNsb3RGaWxsXG5cdGZyb20gJy4uLy4uL2FjdGlvbi1tb2RhbC9jb21wb25lbnRzL0FjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGwnO1xuaW1wb3J0IGFwaUZldGNoIGZyb20gJ0B3b3JkcHJlc3MvYXBpLWZldGNoJztcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dENvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgdXNlU2VsZWN0LCB1c2VEaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmNvbnN0IHtcblx0ICAgICAgcmVzdF9hZGRfc3RhdGU6IHJlc3RBZGRTdGF0ZSxcblx0ICAgICAgcmVzdF9kZWxldGVfc3RhdGU6IHJlc3REZWxldGVTdGF0ZSxcbiAgICAgIH0gPSB3aW5kb3cuamV0Rm9ybUJsb2NrQ29uZGl0aW9ucztcblxuY29uc3QgeyBGaWxsOiBNb2RhbEZvb3RlckZpbGwgfSA9IEFjdGlvbk1vZGFsRm9vdGVyU2xvdEZpbGw7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5jb25zdCBFZGl0Q3VzdG9tUmVuZGVyU3RhdGVzID0gKCB7XG5cdHNldFNob3dNb2RhbCxcblx0Y2hhbmdlQ3VycmVudEl0ZW0sXG5cdGN1cnJlbnRJdGVtLFxufSApID0+IHtcblxuXHRjb25zdCBbIGlzTG9hZGluZywgc2V0QnV0dG9uTG9hZGluZyBdICAgPSB1c2VTdGF0ZSggZmFsc2UgKTtcblx0Y29uc3QgWyBpc0xvYWRpbmdJdGVtLCBzZXRJdGVtTG9hZGluZyBdID0gdXNlU3RhdGUoIHt9ICk7XG5cdGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gICAgICAgICAgICAgICA9IHVzZVN0YXRlKCAnJyApO1xuXHRsZXQgY3VycmVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSBbXG5cdFx0Li4uY3VycmVudEl0ZW0ucmVuZGVyX3N0YXRlID8/IFtdLFxuXHRdO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBhZGRSZW5kZXJTdGF0ZSxcblx0XHQgICAgICBkZWxldGVSZW5kZXJTdGF0ZXMsXG5cdCAgICAgIH0gPSB1c2VEaXNwYXRjaCggJ2pldC1mb3Jtcy9ibG9jay1jb25kaXRpb25zJyApO1xuXG5cdGNvbnN0IGN1c3RvbVN0YXRlcyA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkuXG5cdFx0XHRnZXRDdXN0b21SZW5kZXJTdGF0ZXMoKSxcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdFx0WyBpc0xvYWRpbmcsIGlzTG9hZGluZ0l0ZW0gXSxcblx0KTtcblxuXHRjb25zdCBhZGRTdGF0ZSA9ICgpID0+IHtcblx0XHRzZXRCdXR0b25Mb2FkaW5nKCB0cnVlICk7XG5cdFx0cmVzdEFkZFN0YXRlLmRhdGEgPSB7IHZhbHVlIH07XG5cblx0XHRhcGlGZXRjaCggcmVzdEFkZFN0YXRlICkudGhlbiggcmVzcG9uc2UgPT4ge1xuXHRcdFx0b25TdWNjZXNzQWRkKCByZXNwb25zZS5zdGF0ZSApO1xuXHRcdFx0c2V0QnV0dG9uTG9hZGluZyggZmFsc2UgKTtcblx0XHRcdHNldFNob3dNb2RhbCggZmFsc2UgKTtcblxuXHRcdH0gKS5jYXRjaCggZXJyb3IgPT4ge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGVycm9yICk7XG5cdFx0XHRzZXRCdXR0b25Mb2FkaW5nKCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVTdGF0ZSA9IG5hbWUgPT4ge1xuXHRcdHJlc3REZWxldGVTdGF0ZS5kYXRhID0geyBsaXN0OiBbIG5hbWUgXSB9O1xuXHRcdHNldEl0ZW1Mb2FkaW5nKCBwcmV2ID0+IChcblx0XHRcdHsgLi4ucHJldiwgWyBuYW1lIF06IHRydWUgfVxuXHRcdCkgKTtcblxuXHRcdGFwaUZldGNoKCByZXN0RGVsZXRlU3RhdGUgKS50aGVuKCAoKSA9PiB7XG5cdFx0XHRvbkRlbGV0ZSggbmFtZSApO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHR9ICkuY2F0Y2goIGNvbnNvbGUuZXJyb3IgKS5maW5hbGx5KCAoKSA9PiB7XG5cdFx0XHRzZXRJdGVtTG9hZGluZyggcHJldiA9PiAoXG5cdFx0XHRcdHsgLi4ucHJldiwgWyBuYW1lIF06IGZhbHNlIH1cblx0XHRcdCkgKTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3Qgb25TdWNjZXNzQWRkID0gc3RhdGUgPT4ge1xuXHRcdGFkZFJlbmRlclN0YXRlKCBzdGF0ZSApO1xuXHRcdGN1cnJlbnQucHVzaCggc3RhdGUudmFsdWUgKTtcblxuXHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7XG5cdFx0XHRyZW5kZXJfc3RhdGU6IGN1cnJlbnQsXG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IG9uRGVsZXRlID0gbmFtZSA9PiB7XG5cdFx0ZGVsZXRlUmVuZGVyU3RhdGVzKCBuYW1lICk7XG5cdFx0Y3VycmVudCA9IGN1cnJlbnQuZmlsdGVyKCBpdGVtID0+IGl0ZW0gIT09IG5hbWUgKTtcblxuXHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7XG5cdFx0XHRyZW5kZXJfc3RhdGU6IGN1cnJlbnQsXG5cdFx0fSApO1xuXHR9O1xuXG5cdHJldHVybiA8QWN0aW9uTW9kYWxcblx0XHR0aXRsZT17IF9fKCAnUmVnaXN0ZXIgY3VzdG9tIHJlbmRlciBzdGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldFNob3dNb2RhbCggZmFsc2UgKSB9XG5cdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTQ1JyBdIH1cblx0PlxuXHRcdHsvKjxOb3RpY2VJbmZvIHN0eWxlPXsgeyBtYXJnaW5Cb3R0b206ICcxZW0nIH0gfS8+Ki8gfVxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mYiB3aXRoLWJ1dHRvbicgfT5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRWYWx1ZSggbmV3VmFsdWUgKSB9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oXG5cdFx0XHRcdFx0J1NldCB5b3VyIGN1c3RvbSBzdGF0ZSBuYW1lJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgfVxuXHRcdFx0Lz5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0dmFyaWFudD17ICdzZWNvbmRhcnknIH1cblx0XHRcdFx0b25DbGljaz17IGFkZFN0YXRlIH1cblx0XHRcdFx0ZGlzYWJsZWQ9eyBpc0xvYWRpbmcgfVxuXHRcdFx0XHRpc0J1c3k9eyBpc0xvYWRpbmcgfVxuXHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAnN3B4IDEycHgnLFxuXHRcdFx0XHRcdGhlaWdodDogJ3Vuc2V0Jyxcblx0XHRcdFx0fSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgX18oICdBZGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XHR7IEJvb2xlYW4oIGN1c3RvbVN0YXRlcz8ubGVuZ3RoICkgJiYgPD5cblx0XHRcdDxiIGNsYXNzTmFtZT17ICdqZXQtZmIgZmxleCBtYi0wNS1lbScgfT5cblx0XHRcdFx0eyBfXyggJ01hbmFnZSB5b3VyIGN1c3RvbSBzdGF0ZXM6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9iPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZiLWJ1dHRvbnMtZmxleCcgfT5cblx0XHRcdFx0eyBjdXN0b21TdGF0ZXMubWFwKCBzdGF0ZSA9PiA8QnV0dG9uXG5cdFx0XHRcdFx0a2V5PXsgc3RhdGUudmFsdWUgfVxuXHRcdFx0XHRcdGljb249eyAnbm8tYWx0JyB9XG5cdFx0XHRcdFx0aWNvblBvc2l0aW9uPXsgJ3JpZ2h0JyB9XG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZVN0YXRlKCBzdGF0ZS52YWx1ZSApIH1cblx0XHRcdFx0XHRpc0J1c3k9eyBpc0xvYWRpbmdJdGVtWyBzdGF0ZS52YWx1ZSBdID8/IGZhbHNlIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgc3RhdGUubGFiZWwgfVxuXHRcdFx0XHQ8L0J1dHRvbj4gKSB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz4gfVxuXHRcdDxNb2RhbEZvb3RlckZpbGw+XG5cdFx0XHQ8c3Bhbi8+XG5cdFx0PC9Nb2RhbEZvb3RlckZpbGw+XG5cdDwvQWN0aW9uTW9kYWw+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdEN1c3RvbVJlbmRlclN0YXRlczsiLCJpbXBvcnQgaHVtYW5SZWFkYWJsZUNvbmRpdGlvbiBmcm9tICcuLi9oZWxwZXJzL2h1bWFuUmVhZGFibGVDb25kaXRpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIENoaWxkcmVuLFxuXHQgICAgICBjbG9uZUVsZW1lbnQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gSHVtYW5SZWFkYWJsZUNvbmRpdGlvbnMoIHsgY29uZGl0aW9ucywgc2hvd1dhcm5pbmcgPSBmYWxzZSB9ICkge1xuXHRsZXQgY29uZGl0aW9uc0VsZW1lbnRzID0gW107XG5cdGxldCBmaXJzdFJlYWRDb25kaXRpb24gPSAnJztcblxuXHRpZiAoIEJvb2xlYW4oIGNvbmRpdGlvbnM/Lmxlbmd0aCApICkge1xuXHRcdGZpcnN0UmVhZENvbmRpdGlvbiA9IGh1bWFuUmVhZGFibGVDb25kaXRpb24oIGNvbmRpdGlvbnNbIDAgXSApO1xuXG5cdFx0Y29uZGl0aW9uc0VsZW1lbnRzID0gY29uZGl0aW9ucy5maWx0ZXIoXG5cdFx0XHQvLyBFeGNsdWRlIGZpcnN0IGl0ZW1cblx0XHRcdCggYywgaW5kZXggKSA9PiAwICE9PSBpbmRleCxcblx0XHQpLm1hcChcblx0XHRcdCggY29uZGl0aW9uLCBpbmRleCApID0+IDxzcGFuXG5cdFx0XHRcdGtleT17IGluZGV4IH1cblx0XHRcdFx0ZGF0YS10aXRsZT17IF9fKCAnQW5kJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnOicgfVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtcblx0XHRcdFx0XHRfX2h0bWw6IGh1bWFuUmVhZGFibGVDb25kaXRpb24oIGNvbmRpdGlvbiApLFxuXHRcdFx0XHR9IH1cblx0XHRcdC8+LFxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gZmlyc3RSZWFkQ29uZGl0aW9uID8gPD5cblx0XHQgPHNwYW5cblx0XHRcdCBkYXRhLXRpdGxlPXsgX18oXG5cdFx0XHRcdCAnSWYnLCAnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQgKSArICc6JyB9XG5cdFx0XHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7XG5cdFx0XHRcdCBfX2h0bWw6IGZpcnN0UmVhZENvbmRpdGlvbixcblx0XHRcdCB9IH1cblx0XHQgLz5cblx0XHR7IENoaWxkcmVuLm1hcCggY29uZGl0aW9uc0VsZW1lbnRzLCBjbG9uZUVsZW1lbnQgKSB9XG5cdDwvPiA6IHNob3dXYXJuaW5nICYmIDxzcGFuXG5cdFx0ZGF0YS10aXRsZT17IF9fKFxuXHRcdFx0J1RoZSBjb25kaXRpb24gaXMgbm90IGZ1bGx5IGNvbmZpZ3VyZWQuJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpIH1cblx0Lz47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSHVtYW5SZWFkYWJsZUNvbmRpdGlvbnM7IiwiaW1wb3J0IEVkaXRDdXN0b21SZW5kZXJTdGF0ZXMgZnJvbSAnLi9FZGl0Q3VzdG9tUmVuZGVyU3RhdGVzJztcbmltcG9ydCB7IGNvbHVtbiB9IGZyb20gJy4uLy4uL3Rvb2xzJztcblxuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG5cdCAgICAgIEJhc2VDb250cm9sLFxuXHQgICAgICBGb3JtVG9rZW5GaWVsZCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmNvbnN0IFJlbmRlclN0YXRlT3B0aW9ucyA9ICggeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSApID0+IHtcblx0Y29uc3QgWyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0Y29uc3QgcmVuZGVyU3RhdGVzID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBjb2x1bW4oXG5cdFx0XHRzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5nZXRSZW5kZXJTdGF0ZXMoKSxcblx0XHRcdCd2YWx1ZScsXG5cdFx0KSxcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdFx0WyBzaG93TW9kYWwgXSxcblx0KTtcblx0Ly8gbGFiZWw9eyAgfVxuXHRyZXR1cm4gPD5cblx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tYmFzZS1jb250cm9sLXdpdGgtbGFiZWwtd2l0aG91dC1pZCAqLyB9XG5cdFx0PEJhc2VDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnUmVuZGVyIFN0YXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2NvbnRyb2wtZmxleCcgfVxuXHRcdD5cblxuXHRcdFx0PGRpdj5cblx0XHRcdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovIH1cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17ICdqZXQtZmIgbGFiZWwgbWItMDUtZW0nIH0+XG5cdFx0XHRcdFx0eyBfXyggJ0FkZCByZW5kZXIgc3RhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mYiB3aXRoLWJ1dHRvbiBjbGVhci1sYWJlbCcgfT5cblx0XHRcdFx0XHQ8Rm9ybVRva2VuRmllbGRcblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ucmVuZGVyX3N0YXRlIH1cblx0XHRcdFx0XHRcdHN1Z2dlc3Rpb25zPXsgcmVuZGVyU3RhdGVzIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IGNoYW5nZUN1cnJlbnRJdGVtKFxuXHRcdFx0XHRcdFx0XHR7IHJlbmRlcl9zdGF0ZTogdmFsIH0sXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdHRva2VuaXplT25TcGFjZVxuXHRcdFx0XHRcdFx0X19leHBlcmltZW50YWxFeHBhbmRPbkZvY3VzXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTmV3IHJlbmRlciBzdGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9eyAnc2Vjb25kYXJ5JyB9XG5cdFx0XHRcdFx0XHRpY29uPXsgJ3BsdXMtYWx0MicgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dNb2RhbCggdHJ1ZSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0eyBzaG93TW9kYWwgJiYgPEVkaXRDdXN0b21SZW5kZXJTdGF0ZXNcblx0XHRcdHNldFNob3dNb2RhbD17IHNldFNob3dNb2RhbCB9XG5cdFx0XHRjaGFuZ2VDdXJyZW50SXRlbT17IGNoYW5nZUN1cnJlbnRJdGVtIH1cblx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdC8+IH1cblx0PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyU3RhdGVPcHRpb25zOyIsImNvbnN0IHtcblx0ICAgICAgc2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbi8qKlxuICogQHBhcmFtICBjb25kaXRpb25cbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5mdW5jdGlvbiBodW1hblJlYWRhYmxlQ29uZGl0aW9uKCBjb25kaXRpb24gKSB7XG5cdHJldHVybiBzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5yZWFkQ29uZGl0aW9uKCBjb25kaXRpb24gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHVtYW5SZWFkYWJsZUNvbmRpdGlvbjsiLCJjb25zdCB7IHVzZVNlbGVjdCB9ID0gd3AuZGF0YTtcblxuLyoqXG4gKiBAcmV0dXJuIHt7ZnVuY3Rpb25zLCBvcGVyYXRvcnN9fVxuICovXG5mdW5jdGlvbiB1c2VCbG9ja0NvbmRpdGlvbnMoKSB7XG5cdGNvbnN0IFsgb3BlcmF0b3JzLCBmdW5jdGlvbnMgXSA9IHVzZVNlbGVjdCggc2VsZWN0ID0+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0c2VsZWN0KCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnICkuZ2V0T3BlcmF0b3JzKCksXG5cdFx0XHRzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5nZXRGdW5jdGlvbnMoKSxcblx0XHRdO1xuXHR9LCBbXSApO1xuXG5cdHJldHVybiB7XG5cdFx0b3BlcmF0b3JzLFxuXHRcdGZ1bmN0aW9ucyxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQmxvY2tDb25kaXRpb25zOyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyKCBpdGVtcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnJlZ2lzdGVyLFxuXHRcdFx0aXRlbXMsXG5cdFx0fTtcblx0fSxcblx0YWRkUmVuZGVyU3RhdGUoIGl0ZW0gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5hZGRSZW5kZXJTdGF0ZSxcblx0XHRcdGl0ZW0sXG5cdFx0fTtcblx0fSxcblx0YWRkUmVuZGVyU3RhdGVzKCBpdGVtcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLmFkZFJlbmRlclN0YXRlcyxcblx0XHRcdGl0ZW1zLFxuXHRcdH07XG5cdH0sXG5cdGRlbGV0ZVJlbmRlclN0YXRlcyggaXRlbXMgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5kZWxldGVSZW5kZXJTdGF0ZXMsXG5cdFx0XHRpdGVtcyxcblx0XHR9XG5cdH1cblxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyOiAnUkVHSVNURVInLFxuXHRhZGRSZW5kZXJTdGF0ZTogJ0FERF9SRU5ERVJfU1RBVEUnLFxuXHRhZGRSZW5kZXJTdGF0ZXM6ICdBRERfUkVOREVSX1NUQVRFUycsXG5cdGRlbGV0ZVJlbmRlclN0YXRlczogJ0RFTEVURV9SRU5ERVJfU1RBVEVTJyxcbn1cblxuXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgeyBkb0FjdGlvbiB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IGRpc3BhdGNoZXJzID0ge1xuXHRbIGNvbnN0YW50cy5yZWdpc3RlciBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IHsgb3BlcmF0b3JzLCBmdW5jdGlvbnMsIHJlbmRlcl9zdGF0ZXM6IHJlbmRlclN0YXRlcyB9ID0gYWN0aW9uLml0ZW1zO1xuXG5cdFx0c3RhdGUub3BlcmF0b3JzICAgID0gWyAuLi5vcGVyYXRvcnMgXTtcblx0XHRzdGF0ZS5mdW5jdGlvbnMgICAgPSBbIC4uLmZ1bmN0aW9ucyBdO1xuXHRcdHN0YXRlLnJlbmRlclN0YXRlcyA9IFsgLi4ucmVuZGVyU3RhdGVzIF07XG5cblx0XHRkb0FjdGlvbihcblx0XHRcdCdqZXQuZmIuY2hhbmdlLmJsb2NrQ29uZGl0aW9ucy5yZW5kZXJTdGF0ZScsXG5cdFx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMsXG5cdFx0KTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0WyBjb25zdGFudHMuYWRkUmVuZGVyU3RhdGUgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMucHVzaCggYWN0aW9uLml0ZW0gKTtcblxuXHRcdGRvQWN0aW9uKFxuXHRcdFx0J2pldC5mYi5jaGFuZ2UuYmxvY2tDb25kaXRpb25zLnJlbmRlclN0YXRlJyxcblx0XHRcdHN0YXRlLnJlbmRlclN0YXRlcyxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRbIGNvbnN0YW50cy5hZGRSZW5kZXJTdGF0ZXMgXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRmb3IgKCBjb25zdCBpdGVtIG9mIGFjdGlvbi5pdGVtcyApIHtcblx0XHRcdHN0YXRlLnJlbmRlclN0YXRlcy5wdXNoKCBpdGVtICk7XG5cdFx0fVxuXG5cdFx0ZG9BY3Rpb24oXG5cdFx0XHQnamV0LmZiLmNoYW5nZS5ibG9ja0NvbmRpdGlvbnMucmVuZGVyU3RhdGUnLFxuXHRcdFx0c3RhdGUucmVuZGVyU3RhdGVzLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdFsgY29uc3RhbnRzLmRlbGV0ZVJlbmRlclN0YXRlcyBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IGl0ZW1zID0gQXJyYXkuaXNBcnJheSggYWN0aW9uLml0ZW1zIClcblx0XHQgICAgICAgICAgICA/IFsgLi4uYWN0aW9uLml0ZW1zIF1cblx0XHQgICAgICAgICAgICA6IFsgYWN0aW9uLml0ZW1zIF07XG5cblx0XHRzdGF0ZS5yZW5kZXJTdGF0ZXMgPSBzdGF0ZS5yZW5kZXJTdGF0ZXMuZmlsdGVyKFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiAhaXRlbXMuaW5jbHVkZXMoIHZhbHVlICksXG5cdFx0KTtcblxuXHRcdGRvQWN0aW9uKFxuXHRcdFx0J2pldC5mYi5jaGFuZ2UuYmxvY2tDb25kaXRpb25zLnJlbmRlclN0YXRlJyxcblx0XHRcdHN0YXRlLnJlbmRlclN0YXRlcyxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5kaXNwYXRjaGVycyxcbn07IiwiaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcblxuY29uc3QgeyBjcmVhdGVSZWR1eFN0b3JlIH0gPSB3cC5kYXRhO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCAnamV0LWZvcm1zL2Jsb2NrLWNvbmRpdGlvbnMnLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9ycyxcbn0gKTtcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcbmltcG9ydCBodW1hblJlYWRhYmxlUHJlc2V0IGZyb20gJy4uLy4uL3ByZXNldC9oZWxwZXJzL2h1bWFuUmVhZGFibGVQcmVzZXQnO1xuXG5jb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCBlbXB0eUNvbmRpdGlvbiA9IGZ1bmN0aW9uICggY29uZGl0aW9uICkge1xuXHRjb25zdCBvcGVyYXRvck9wdGlvbnMgPSBzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5cblx0XHRnZXRPcGVyYXRvciggY29uZGl0aW9uPy5vcGVyYXRvciApO1xuXG5cdGlmICggIW9wZXJhdG9yT3B0aW9ucyApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Y29uc3QgZmllbGQgPSBjb25kaXRpb24/LmZpZWxkIHx8ICcobm8gZmllbGQpJztcblxuXHRyZXR1cm4gW1xuXHRcdGA8Y29kZT4keyBmaWVsZCB9PC9jb2RlPmAsXG5cdFx0b3BlcmF0b3JPcHRpb25zLmxhYmVsLFxuXHRdLmpvaW4oICcgJyApO1xufTtcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcblx0ZnVuY3Rpb25zOiBbXSxcblx0b3BlcmF0b3JzOiBbXSxcblx0Y29uZGl0aW9uUmVhZGVyczoge1xuXHRcdGRlZmF1bHQgKCBjb25kaXRpb24gKSB7XG5cdFx0XHRjb25zdCBvcGVyYXRvck9wdGlvbnMgPSBzZWxlY3QoICdqZXQtZm9ybXMvYmxvY2stY29uZGl0aW9ucycgKS5cblx0XHRcdFx0Z2V0T3BlcmF0b3IoIGNvbmRpdGlvbj8ub3BlcmF0b3IgKTtcblxuXHRcdFx0aWYgKCAhb3BlcmF0b3JPcHRpb25zICkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmaWVsZCA9IGNvbmRpdGlvbj8uZmllbGQgfHwgJyhubyBmaWVsZCknO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSAoXG5cdFx0XHRcdGh1bWFuUmVhZGFibGVQcmVzZXQoIGNvbmRpdGlvbi52YWx1ZSwgJ2InICkgfHwgJyhubyB2YWx1ZSknXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRgPGNvZGU+JHsgZmllbGQgfTwvY29kZT5gLFxuXHRcdFx0XHRvcGVyYXRvck9wdGlvbnMubGFiZWwsXG5cdFx0XHRcdGA8Y29kZT4keyB2YWx1ZSB9PC9jb2RlPmAsXG5cdFx0XHRdLmpvaW4oICcgJyApO1xuXHRcdH0sXG5cdFx0ZW1wdHk6IGVtcHR5Q29uZGl0aW9uLFxuXHRcdG5vdF9lbXB0eTogZW1wdHlDb25kaXRpb24sXG5cdFx0cmVuZGVyX3N0YXRlICggY29uZGl0aW9uICkge1xuXHRcdFx0Y29uc3Qgc3RhdGVzID0gKFxuXHRcdFx0XHRjb25kaXRpb24/LnJlbmRlcl9zdGF0ZSA/PyBbXVxuXHRcdFx0KS5tYXAoXG5cdFx0XHRcdGN1cnJlbnQgPT4gYDxjb2RlPiR7IGN1cnJlbnQgfTwvY29kZT5gLFxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgbGFiZWwgPSAxID09PSBzdGF0ZXMubGVuZ3RoXG5cdFx0XHQgICAgICAgICAgICAgID8gX18oICdJcyByZW5kZXIgc3RhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0ICAgICAgICAgICAgICA6IF9fKFxuXHRcdFx0XHRcdCdPbmUgb2YgdGhlIHJlbmRlciBzdGF0ZXMnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdHN0YXRlcy5qb2luKCAnLCAnICksXG5cdFx0XHRdLmpvaW4oICc6ICcgKTtcblx0XHR9LFxuXHR9LFxuXHRyZW5kZXJTdGF0ZXM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCBzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIGFjdGlvbiApIHtcblx0Y29uc3QgY2FsbGJhY2sgPSBkaXNwYXRjaGVyc1sgYWN0aW9uPy50eXBlIF07XG5cblx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gY2FsbGJhY2soIHN0YXRlLCBhY3Rpb24gKTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn0iLCJjb25zdCBzZWxlY3RvcnMgPSB7XG5cdGdldEZ1bmN0aW9ucyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmZ1bmN0aW9ucztcblx0fSxcblx0Z2V0T3BlcmF0b3JzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUub3BlcmF0b3JzO1xuXHR9LFxuXHRnZXRSZW5kZXJTdGF0ZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5yZW5kZXJTdGF0ZXM7XG5cdH0sXG5cdGdldFN3aXRjaGFibGVSZW5kZXJTdGF0ZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5yZW5kZXJTdGF0ZXMuZmlsdGVyKFxuXHRcdFx0KCB7IGlzX2N1c3RvbTogaXNDdXN0b20gPSBmYWxzZSwgY2FuX2JlX3N3aXRjaGVkOiBjYW5CZVN3aXRjaGVkID0gZmFsc2UgfSApID0+IChcblx0XHRcdFx0aXNDdXN0b20gfHwgY2FuQmVTd2l0Y2hlZFxuXHRcdFx0KSxcblx0XHQpO1xuXHR9LFxuXHRnZXRDdXN0b21SZW5kZXJTdGF0ZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5yZW5kZXJTdGF0ZXMuZmlsdGVyKFxuXHRcdFx0KCB7IGlzX2N1c3RvbTogaXNDdXN0b20gPSBmYWxzZSB9ICkgPT4gaXNDdXN0b20sXG5cdFx0KTtcblx0fSxcblx0Z2V0T3BlcmF0b3IoIHN0YXRlLCBvcGVyYXRvciApIHtcblx0XHRjb25zdCBpbmRleCA9IHN0YXRlLm9wZXJhdG9ycy5maW5kSW5kZXgoXG5cdFx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSBvcGVyYXRvcixcblx0XHQpO1xuXG5cdFx0aWYgKCAtMSA9PT0gaW5kZXggKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLm9wZXJhdG9yc1sgaW5kZXggXTtcblx0fSxcblx0cmVhZENvbmRpdGlvbiggc3RhdGUsIGNvbmRpdGlvbiApIHtcblx0XHRjb25zdCB7IG9wZXJhdG9yID0gJycgfSA9IGNvbmRpdGlvbjtcblxuXHRcdGlmICggIW9wZXJhdG9yICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtGdW5jdGlvbn1cblx0XHQgKi9cblx0XHRjb25zdCBjYWxsYmFjayA9IHN0YXRlLmNvbmRpdGlvblJlYWRlcnNbIG9wZXJhdG9yIF0gPz8gZmFsc2U7XG5cblx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjYWxsYmFjayApIHtcblx0XHRcdHJldHVybiBjYWxsYmFjayggY29uZGl0aW9uICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlLmNvbmRpdGlvblJlYWRlcnMuZGVmYXVsdCggY29uZGl0aW9uICk7XG5cdH0sXG5cdGdldEZ1bmN0aW9uKCBzdGF0ZSwgZnVuY1R5cGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmZ1bmN0aW9ucy5maW5kKFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gZnVuY1R5cGUsXG5cdFx0KTtcblx0fSxcblx0Z2V0RnVuY3Rpb25EaXNwbGF5KCBzdGF0ZSwgZnVuY1R5cGUgKSB7XG5cdFx0cmV0dXJuIHNlbGVjdG9ycy5nZXRGdW5jdGlvbiggc3RhdGUsIGZ1bmNUeXBlICk/LmRpc3BsYXk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC4uLnNlbGVjdG9ycyxcbn07IiwiaW1wb3J0IEJsb2NrUGxhY2Vob2xkZXIgZnJvbSAnLi9CbG9ja1BsYWNlaG9sZGVyJztcbmltcG9ydCBCbG9ja0FkZFByZXZCdXR0b24gZnJvbSAnLi9CbG9ja0FkZFByZXZCdXR0b24nO1xuaW1wb3J0IEJsb2NrUHJldkJ1dHRvbkxhYmVsIGZyb20gJy4vQmxvY2tQcmV2QnV0dG9uTGFiZWwnO1xuaW1wb3J0IEJsb2NrVmlzaWJpbGl0eSBmcm9tICcuL0Jsb2NrVmlzaWJpbGl0eSc7XG5pbXBvcnQgQmxvY2tDbGFzc05hbWUgZnJvbSAnLi9CbG9ja0NsYXNzTmFtZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgSW5zcGVjdG9yQWR2YW5jZWRDb250cm9scyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZnVuY3Rpb24gQWR2YW5jZWRGaWVsZHMoKSB7XG5cdHJldHVybiA8SW5zcGVjdG9yQWR2YW5jZWRDb250cm9scz5cblx0XHQ8QmxvY2tQbGFjZWhvbGRlci8+XG5cdFx0PEJsb2NrQWRkUHJldkJ1dHRvbi8+XG5cdFx0PEJsb2NrUHJldkJ1dHRvbkxhYmVsLz5cblx0XHQ8QmxvY2tWaXNpYmlsaXR5Lz5cblx0XHQ8QmxvY2tDbGFzc05hbWUvPlxuXHQ8L0luc3BlY3RvckFkdmFuY2VkQ29udHJvbHM+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZEZpZWxkczsiLCJpbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNlSGVscCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tFZGl0Q29udGV4dCxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBBdHRyaWJ1dGVIZWxwKCB7IG5hbWUgPSBmYWxzZSwgY2hpbGRyZW4gPSBudWxsIH0gKSB7XG5cdGNvbnN0IHsgbmFtZTogYmxvY2tOYW1lIH0gPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSB1c2VTZWxlY3QoIHNlbGVjdCA9PiB7XG5cdFx0aWYgKCBmYWxzZSA9PT0gbmFtZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgYmxvY2sgPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKS5nZXRCbG9ja1R5cGUoIGJsb2NrTmFtZSApO1xuXG5cdFx0cmV0dXJuIGJsb2NrLmF0dHJpYnV0ZXNbIG5hbWUgXT8uamZiID8/IGZhbHNlO1xuXHR9LCBbIGJsb2NrTmFtZSwgbmFtZSBdICk7XG5cblx0aWYgKCAhc2V0dGluZ3MgKSB7XG5cdFx0cmV0dXJuIEJvb2xlYW4oIGNoaWxkcmVuICkgJiYgPEJhc2VIZWxwIGNsYXNzTmFtZT1cImpldC1mYiBtYi0yNFwiPlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9CYXNlSGVscD47XG5cdH1cblxuXHRyZXR1cm4gPEJhc2VIZWxwIGNsYXNzTmFtZT1cImpldC1mYiBtYi0yNFwiPlxuXHRcdHsgY2hpbGRyZW4gJiYgPD57IGNoaWxkcmVuIH0mbmJzcDs8Lz4gfVxuXHRcdHsgKFxuXHRcdFx0c2V0dGluZ3M/LnNob3J0Y29kZSAmJiAhc2V0dGluZ3MucmljaCAmJiAhY2hpbGRyZW5cblx0XHQpICYmIChcblx0XHRcdF9fKFxuXHRcdFx0XHQnWW91IGNhbiB1c2Ugc2hvcnRjb2RlcyBoZXJlLicsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdClcblx0XHQpIH1cblx0XHR7IChcblx0XHRcdHNldHRpbmdzPy5zaG9ydGNvZGUgJiYgIXNldHRpbmdzLnJpY2ggJiYgY2hpbGRyZW5cblx0XHQpICYmIChcblx0XHRcdF9fKFxuXHRcdFx0XHQnWW91IGNhbiBhbHNvIHVzZSBzaG9ydGNvZGVzIGhlcmUuJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KVxuXHRcdCkgfVxuXHQ8L0Jhc2VIZWxwPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlSGVscDsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gQmxvY2tBZGRQcmV2QnV0dG9uKCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRpZiAoICEgdXNlSXNIYXNBdHRyaWJ1dGUoICdhZGRfcHJldicgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8VG9nZ2xlQ29udHJvbFxuXHRcdGxhYmVsPXsgbGFiZWwgPz8gX18oICdBZGQgUHJldiBQYWdlIEJ1dHRvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRoZWxwPXsgaGVscCA/PyBfXyhcblx0XHRcdGBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIFwiQWN0aW9uIEJ1dHRvblwiIGJsb2NrIHdpdGggdGhlIFwiR28gdG8gUHJldiBQYWdlXCIgdHlwZWAsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSB9XG5cdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuYWRkX3ByZXYgfVxuXHRcdG9uQ2hhbmdlPXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoIHsgYWRkX3ByZXY6IHZhbCB9ICkgfVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tBZGRQcmV2QnV0dG9uOyIsImltcG9ydCBCbG9ja0RlZmF1bHRWYWx1ZSBmcm9tICcuL0Jsb2NrRGVmYXVsdFZhbHVlJztcbmltcG9ydCBEeW5hbWljVmFsdWVzIGZyb20gJy4uLy4uL2R5bmFtaWMudmFsdWUvY29tcG9uZW50cy9EeW5hbWljVmFsdWVzJztcblxuZnVuY3Rpb24gQmxvY2tBZHZhbmNlZFZhbHVlKCB7IGhlbHAsIGxhYmVsLCBoYXNNYWNybyA9IHRydWUsIC4uLnByb3BzIH0gKSB7XG5cdHJldHVybiA8ZGl2IHsgLi4ucHJvcHMgfT5cblx0XHQ8QmxvY2tEZWZhdWx0VmFsdWVcblx0XHRcdGhlbHA9eyBoZWxwIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0aGFzTWFjcm89eyBoYXNNYWNybyB9XG5cdFx0Lz5cblx0XHQ8aHIvPlxuXHRcdDxEeW5hbWljVmFsdWVzLz5cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0FkdmFuY2VkVmFsdWU7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJsb2NrQ2xhc3NOYW1lKCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRyZXR1cm4gPFRleHRDb250cm9sXG5cdFx0bGFiZWw9eyBsYWJlbCA/PyBfXyggXCJDU1MgQ2xhc3MgTmFtZVwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNsYXNzX25hbWUgfVxuXHRcdGhlbHA9eyBoZWxwID8/ICcnIH1cblx0XHRvbkNoYW5nZT17IHZhbCA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNsYXNzX25hbWU6IHZhbCB9ICkgfVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tDbGFzc05hbWU7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IEFkdmFuY2VkSW5zcGVjdG9yQ29udHJvbFxuXHRmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuaW1wb3J0IENsaWVudFNpZGVNYWNyb3MgZnJvbSAnLi4vLi4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL0NsaWVudFNpZGVNYWNyb3MnO1xuaW1wb3J0IHVzZUluc2VydE1hY3JvIGZyb20gJy4uLy4uL21hY3Jvcy5idXR0b24vaG9va3MvdXNlSW5zZXJ0TWFjcm8nO1xuaW1wb3J0IEF0dHJpYnV0ZUhlbHAgZnJvbSAnLi9BdHRyaWJ1dGVIZWxwJztcbmltcG9ydCBDb250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0XG5cdGZyb20gJy4uLy4uL3ByZXNldC9jb250ZXh0L0NvbnRyb2xQcmVzZXRSZXN0cmljdGlvbkNvbnRleHQnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJsb2NrRGVmYXVsdFZhbHVlKCB7IGxhYmVsLCBoZWxwLCBoYXNNYWNybyA9IHRydWUgfSApIHtcblx0Y29uc3QgW1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0ICAgICAgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IFsgaW5wdXQsIHVwZGF0ZUlucHV0IF0gPSB1c2VJbnNlcnRNYWNybyggJ2RlZmF1bHQnICk7XG5cblx0aWYgKCAhdXNlSXNIYXNBdHRyaWJ1dGUoICdkZWZhdWx0JyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxDb250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBzaG93OiB0cnVlIH0gfT5cblx0XHQ8Q2xpZW50U2lkZU1hY3Jvcz5cblx0XHRcdDxBZHZhbmNlZEluc3BlY3RvckNvbnRyb2xcblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRlZmF1bHQgfVxuXHRcdFx0XHRsYWJlbD17IGxhYmVsID8/IF9fKCAnRGVmYXVsdCBWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0b25DaGFuZ2VQcmVzZXQ9eyB2YWwgPT4gc2V0QXR0cmlidXRlcyggeyBkZWZhdWx0OiB2YWwgfSApIH1cblx0XHRcdFx0b25DaGFuZ2VNYWNyb3M9eyBoYXNNYWNybyA/IHVwZGF0ZUlucHV0IDogZmFsc2UgfVxuXHRcdFx0PlxuXHRcdFx0XHR7ICggeyBpbnN0YW5jZUlkIH0gKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIDw+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0cmVmPXsgaW5wdXQgfVxuXHRcdFx0XHRcdFx0XHRpZD17IGluc3RhbmNlSWQgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVmYXVsdCB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mYiBtLXVuc2V0XCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gc2V0QXR0cmlidXRlcyhcblx0XHRcdFx0XHRcdFx0XHR7IGRlZmF1bHQ6IHZhbCB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxBdHRyaWJ1dGVIZWxwIG5hbWU9XCJkZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHRcdHsgaGVscCA/PyAnJyB9XG5cdFx0XHRcdFx0XHQ8L0F0dHJpYnV0ZUhlbHA+XG5cdFx0XHRcdFx0PC8+O1xuXHRcdFx0XHR9IH1cblx0XHRcdDwvQWR2YW5jZWRJbnNwZWN0b3JDb250cm9sPlxuXHRcdDwvQ2xpZW50U2lkZU1hY3Jvcz5cblx0PC9Db250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tEZWZhdWx0VmFsdWU7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHVzZUlzSGFzQXR0cmlidXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzSGFzQXR0cmlidXRlJztcbmltcG9ydCBBdHRyaWJ1dGVIZWxwIGZyb20gJy4vQXR0cmlidXRlSGVscCc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gQmxvY2tEZXNjcmlwdGlvbiggeyBsYWJlbCwgaGVscCB9ICkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCAhdXNlSXNIYXNBdHRyaWJ1dGUoICdkZXNjJyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDw+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRsYWJlbD17IGxhYmVsID8/IF9fKCAnRmllbGQgRGVzY3JpcHRpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVzYyB9XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZmIgbS11bnNldFwiXG5cdFx0XHRvbkNoYW5nZT17IGRlc2MgPT4gc2V0QXR0cmlidXRlcyggeyBkZXNjIH0gKSB9XG5cdFx0Lz5cblx0XHQ8QXR0cmlidXRlSGVscCBuYW1lPVwiZGVzY1wiPlxuXHRcdFx0eyBoZWxwID8/ICcnIH1cblx0XHQ8L0F0dHJpYnV0ZUhlbHA+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tEZXNjcmlwdGlvbjsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgQ2hhbmdlTmFtZUJ5TGFiZWwgZnJvbSAnLi4vaGVscGVycy9DaGFuZ2VOYW1lQnlMYWJlbCc7XG5pbXBvcnQgQXR0cmlidXRlSGVscCBmcm9tICcuL0F0dHJpYnV0ZUhlbHAnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7XG5cdCAgICBfX2V4cGVyaW1lbnRhbFVzZUZvY3VzT3V0c2lkZSxcblx0ICAgIHVzZUZvY3VzT3V0c2lkZSxcbiAgICB9ID0gd3AuY29tcG9zZTtcblxudXNlRm9jdXNPdXRzaWRlID0gdXNlRm9jdXNPdXRzaWRlIHx8IF9fZXhwZXJpbWVudGFsVXNlRm9jdXNPdXRzaWRlO1xuXG5mdW5jdGlvbiBCbG9ja0xhYmVsKCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRmdW5jdGlvbiBvbkJsdXJMYWJlbCgpIHtcblx0XHRDaGFuZ2VOYW1lQnlMYWJlbCggYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyApO1xuXHR9XG5cblx0Y29uc3QgcmVmID0gdXNlRm9jdXNPdXRzaWRlKCBvbkJsdXJMYWJlbCApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCA/PyBfXyggJ0ZpZWxkIExhYmVsJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZiIG0tdW5zZXRcIlxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cblx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoIHsgbGFiZWw6IHZhbCB9ICkgfVxuXHRcdFx0eyAuLi5yZWYgfVxuXHRcdC8+XG5cdFx0PEF0dHJpYnV0ZUhlbHAgbmFtZT1cImxhYmVsXCI+XG5cdFx0XHR7IGhlbHAgPz8gJycgfVxuXHRcdDwvQXR0cmlidXRlSGVscD5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0xhYmVsOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCB1c2VJc0hhc0F0dHJpYnV0ZSBmcm9tICcuLi8uLi9ob29rcy91c2VJc0hhc0F0dHJpYnV0ZSc7XG5pbXBvcnQgdXNlSXNVbmlxdWVGaWVsZE5hbWUgZnJvbSAnLi4vaG9va3MvdXNlSXNVbmlxdWVGaWVsZE5hbWUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuXHQgICAgICBJY29uLFxuXHQgICAgICBGbGV4LFxuXHQgICAgICBUb29sdGlwLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUluc3RhbmNlSWQsXG4gICAgICB9ID0gd3AuY29tcG9zZTtcblxuZnVuY3Rpb24gQmxvY2tOYW1lKCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRjb25zdCB7IG1lc3NhZ2UgfSA9IHVzZUlzVW5pcXVlRmllbGROYW1lKCk7XG5cdGNvbnN0IGluc3RhbmNlSWQgID0gdXNlSW5zdGFuY2VJZCggQmxvY2tOYW1lLCAnQWR2YW5jZWRJbnNwZWN0b3JDb250cm9sJyApO1xuXG5cdGlmICggIXVzZUlzSGFzQXR0cmlidXRlKCAnbmFtZScgKSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdDxGbGV4XG5cdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cblx0XHRcdGp1c3RpZnk9eyAnZmxleC1zdGFydCcgfVxuXHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdG1hcmdpbkJvdHRvbTogJzhweCcsXG5cdFx0XHR9IH1cblx0XHQ+XG5cdFx0XHQ8bGFiZWxcblx0XHRcdFx0aHRtbEZvcj17IGluc3RhbmNlSWQgfVxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiIGxhYmVsJyB9XG5cdFx0XHQ+eyBsYWJlbCA/PyBfXyggJ0Zvcm0gZmllbGQgbmFtZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L2xhYmVsPlxuXHRcdFx0eyAoXG5cdFx0XHRcdCEhbWVzc2FnZVxuXHRcdFx0KSAmJiA8VG9vbHRpcFxuXHRcdFx0XHR0ZXh0PXsgbWVzc2FnZSB9XG5cdFx0XHRcdGRlbGF5PXsgMjAwIH1cblx0XHRcdFx0cG9zaXRpb249eyAndG9wIGNlbnRlcicgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8SWNvblxuXHRcdFx0XHRcdGljb249eyAnd2FybmluZycgfVxuXHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICdvcmFuZ2UnLFxuXHRcdFx0XHRcdFx0Y3Vyc29yOiAnaGVscCcsXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2x0aXA+IH1cblx0XHQ8L0ZsZXg+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRpZD17IGluc3RhbmNlSWQgfVxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm5hbWUgfVxuXHRcdFx0aGVscD17IGhlbHAgPz8gX18oXG5cdFx0XHRcdCdTaG91bGQgY29udGFpbiBvbmx5IExhdGluIGxldHRlcnMsIG51bWJlcnMsIGAtYCBvciBgX2AgY2hhcnMsIG5vIHNwYWNlcyBvbmx5IGxvd2VyIGNhc2UnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmFtZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG5hbWUgfSApIH1cblx0XHQvPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrTmFtZTsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEJsb2NrUGxhY2Vob2xkZXIoIHsgbGFiZWwsIGhlbHAgfSApIHtcblx0Y29uc3QgW1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0ICAgICAgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGlmICggISB1c2VJc0hhc0F0dHJpYnV0ZSggJ3BsYWNlaG9sZGVyJyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxUZXh0Q29udHJvbFxuXHRcdGxhYmVsPXsgbGFiZWwgPz8gX18oICdQbGFjZWhvbGRlcicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgfVxuXHRcdGhlbHA9eyBoZWxwID8/ICcnIH1cblx0XHRvbkNoYW5nZT17IHBsYWNlaG9sZGVyID0+IHNldEF0dHJpYnV0ZXMoIHsgcGxhY2Vob2xkZXIgfSApIH1cblx0Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrUGxhY2Vob2xkZXI7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IEF0dHJpYnV0ZUhlbHAgZnJvbSAnLi9BdHRyaWJ1dGVIZWxwJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBCbG9ja1ByZXZCdXR0b25MYWJlbCggeyBsYWJlbCwgaGVscCB9ICkge1xuXHRjb25zdCBbXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCAhYXR0cmlidXRlcy5hZGRfcHJldiApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9e1xuXHRcdFx0XHRsYWJlbCA/PyBfXyggJ1ByZXYgUGFnZSBCdXR0b24gTGFiZWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0fVxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnByZXZfbGFiZWwgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZiIG0tdW5zZXRcIlxuXHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gc2V0QXR0cmlidXRlcyggeyBwcmV2X2xhYmVsOiB2YWwgfSApIH1cblx0XHQvPlxuXHRcdDxBdHRyaWJ1dGVIZWxwIG5hbWU9XCJwcmV2X2xhYmVsXCI+XG5cdFx0XHR7IGhlbHAgPz8gJycgfVxuXHRcdDwvQXR0cmlidXRlSGVscD5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1ByZXZCdXR0b25MYWJlbDsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgIFRvb2xiYXJCdXR0b24sXG4gICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgQmxvY2tDb250cm9scyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgeyBTVkcsIFBhdGggfSA9IHdwLnByaW1pdGl2ZXM7XG5cbmZ1bmN0aW9uIEJsb2NrUmVxdWlyZWQoKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRpZiAoICF1c2VJc0hhc0F0dHJpYnV0ZSggJ3JlcXVpcmVkJyApICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxCbG9ja0NvbnRyb2xzIGdyb3VwPVwiYmxvY2tcIj5cblx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0aWNvbj17IDxTVkcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIj5cblx0XHRcdFx0PFBhdGggZD1cIk0xMiA0TDEyIDIwXCIgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cblx0XHRcdFx0PFBhdGggZD1cIk0xNy4zMTM3IDYuMDAwMjRMNi4wMDAwMSAxNy4zMTRcIiBzdHJva2U9XCJjdXJyZW50Y29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuXHRcdFx0XHQ8UGF0aCBkPVwiTTIwIDEyTDQgMTJcIiBzdHJva2U9XCJjdXJyZW50Y29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuXHRcdFx0XHQ8UGF0aCBkPVwiTTE3LjMxMzcgMTcuMzEzN0w2LjAwMDAxIDYuMDAwMDFcIiBzdHJva2U9XCJjdXJyZW50Y29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuXHRcdFx0PC9TVkc+IH1cblx0XHRcdHRpdGxlPXsgYXR0cmlidXRlcy5yZXF1aXJlZFxuXHRcdFx0ICAgICAgICA/IF9fKFxuXHRcdFx0XHRcdCdDbGljayB0byBtYWtlIHRoaXMgZmllbGQgb3B0aW9uYWwnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KVxuXHRcdFx0ICAgICAgICA6IF9fKFxuXHRcdFx0XHRcdCdDbGljayB0byBtYWtlIHRoaXMgZmllbGQgcmVxdWlyZWQnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0b25DbGljaz17ICgpID0+IHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0cmVxdWlyZWQ6ICFhdHRyaWJ1dGVzLnJlcXVpcmVkLFxuXHRcdFx0fSApIH1cblx0XHRcdGlzQWN0aXZlPXsgYXR0cmlidXRlcy5yZXF1aXJlZCB9XG5cdFx0Lz5cblx0PC9CbG9ja0NvbnRyb2xzPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tSZXF1aXJlZDsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gQmxvY2tWaXNpYmlsaXR5KCB7IGxhYmVsLCBoZWxwIH0gKSB7XG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRpZiAoICF1c2VJc0hhc0F0dHJpYnV0ZSggJ3Zpc2liaWxpdHknICkgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcblx0XHRvcHRpb25zPXsgW1xuXHRcdFx0e1xuXHRcdFx0XHRcInZhbHVlXCI6IFwiYWxsXCIsXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRm9yIGFsbFwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwidmFsdWVcIjogXCJsb2dnZWRfaWRcIixcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJPbmx5IGZvciBsb2dnZWQgaW4gdXNlcnNcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcInZhbHVlXCI6IFwibm90X2xvZ2dlZF9pblwiLFxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIk9ubHkgZm9yIE5PVC1sb2dnZWQgaW4gdXNlcnNcIiwgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHR9LFxuXHRcdF0gfVxuXHRcdGxhYmVsPXsgbGFiZWwgPz8gX18oIFwiRmllbGQgVmlzaWJpbGl0eVwiLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0aGVscD17IGhlbHAgPz8gJycgfVxuXHRcdHZhbHVlPXsgYXR0cmlidXRlcy52aXNpYmlsaXR5IH1cblx0XHRvbkNoYW5nZT17IHZpc2liaWxpdHkgPT4gc2V0QXR0cmlidXRlcyggeyB2aXNpYmlsaXR5IH0gKSB9XG5cdC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1Zpc2liaWxpdHk7IiwiaW1wb3J0IENvbnRyb2xzU2V0dGluZ3MgZnJvbSAnLi4vaGVscGVycy9Db250cm9sc1NldHRpbmdzJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcblx0ICAgICAgQmFzZUNvbnRyb2wsXG5cdCAgICAgIF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcblxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gdXNlQ29udHJvbHMoIHtcblx0dHlwZSxcblx0YXR0cmlidXRlcyxcblx0YXR0cnNTZXR0aW5ncyA9IHt9LFxufSApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblx0Y29uc3QgYmxvY2tOYW1lICA9IGJsb2NrUHJvcHNbICdkYXRhLXR5cGUnIF07XG5cdGNvbnN0IGNvbnRyb2xzICAgPSBDb250cm9sc1NldHRpbmdzKCk7XG5cblx0aWYgKCAhY29udHJvbHNbIHR5cGUgXSApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IGNvbnRyb2xzWyB0eXBlIF07XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cblx0Y29uc3QgaXNWYWxpZENvbmRpdGlvbiA9ICggYXR0ciApID0+IHtcblx0XHRpZiAoICFhdHRyLmNvbmRpdGlvbiApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICggYmxvY2tOYW1lICYmIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZSApIHtcblx0XHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgJiYgYmxvY2tOYW1lICE9PVxuXHRcdFx0XHRhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWVcblx0XHRcdFx0JiYgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lLmxlbmd0aFxuXHRcdFx0XHQmJiAhYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lLmluY2x1ZGVzKCBibG9ja05hbWUgKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBvYmplY3ROb3RNYXRjaCA9IChcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKCAnb2JqZWN0JyAhPT0gdHlwZW9mIGF0dHIuY29uZGl0aW9uLmF0dHIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgeyBvcGVyYXRvciA9ICdhbmQnLCBpdGVtcyA9IHt9IH0gPSBhdHRyLmNvbmRpdGlvbi5hdHRyO1xuXG5cdFx0XHRcdGlmICggJ29yJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyVG9Db21wYXJlIGluIGl0ZW1zICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdmFsdWVDb21wYXJlID0gaXRlbXNbIGF0dHJUb0NvbXBhcmUgXTtcblxuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0XHRcdFx0aWYgKCB2YWx1ZUNvbXBhcmUgPT09IGF0dHJpYnV0ZXNbIGF0dHJUb0NvbXBhcmUgXSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAnYW5kJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyVG9Db21wYXJlIGluIGl0ZW1zICkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggaXRlbXNbIGF0dHJUb0NvbXBhcmUgXSAhPT1cblx0XHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXNbIGF0dHJUb0NvbXBhcmUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0KSgpO1xuXG5cdFx0aWYgKCAhb2JqZWN0Tm90TWF0Y2hcblx0XHRcdHx8IChcblx0XHRcdFx0J3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5hdHRyXG5cdFx0XHRcdCYmIGF0dHIuY29uZGl0aW9uLmF0dHJcblx0XHRcdFx0JiYgIWF0dHJpYnV0ZXNbIGF0dHIuY29uZGl0aW9uLmF0dHIgXVxuXHRcdFx0KVxuXHRcdFx0fHwgKFxuXHRcdFx0XHQnc3RyaW5nJyA9PT0gdHlwZW9mIGF0dHIuY29uZGl0aW9uXG5cdFx0XHRcdCYmICFhdHRyaWJ1dGVzWyBhdHRyLmNvbmRpdGlvbiBdXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0cmV0dXJuIGN1cnJlbnRDb250cm9sLmF0dHJzLmZpbHRlcihcblx0XHQoIHsgYXR0ck5hbWUsIGxhYmVsLCAuLi5hdHRyIH0gKSA9PiB7XG5cdFx0XHRjb25zdCBpc1JlZ2lzdGVyQXR0cmlidXRlID0gKFxuXHRcdFx0XHRhdHRyTmFtZSBpbiBhdHRyaWJ1dGVzXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgdmFsaWRDb25kaXRpb24gICAgICA9IGlzVmFsaWRDb25kaXRpb24oIGF0dHIgKTtcblx0XHRcdGNvbnN0IGlzSGlkZGVuICAgICAgICAgICAgPSAoXG5cdFx0XHRcdGF0dHJOYW1lIGluIGF0dHJzU2V0dGluZ3Ncblx0XHRcdFx0JiYgJ3Nob3cnIGluIGF0dHJzU2V0dGluZ3NbIGF0dHJOYW1lIF1cblx0XHRcdFx0JiYgZmFsc2UgPT09IGF0dHJzU2V0dGluZ3NbIGF0dHJOYW1lIF0uc2hvd1xuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aXNSZWdpc3RlckF0dHJpYnV0ZSAmJiB2YWxpZENvbmRpdGlvbiAmJiAhaXNIaWRkZW5cblx0XHRcdCk7XG5cdFx0fSApO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIDMuMC4wXG4gKlxuICogQHBhcmFtICBwcm9wc1xuICogQHJldHVybiB7dW5rbm93bltdfVxuICogQGNsYXNzXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBGaWVsZENvbnRyb2woIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgZmllbGRDb250cm9scyA9IHVzZUNvbnRyb2xzKCBwcm9wcyApO1xuXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiB2YWx1ZSB9ICk7XG5cdH07XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cblx0cmV0dXJuIGZpZWxkQ29udHJvbHMubWFwKCAoIHsgaGVscCA9ICcnLCBhdHRyTmFtZSwgbGFiZWwsIC4uLmF0dHIgfSApID0+IHtcblx0XHRzd2l0Y2ggKCBhdHRyLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0cmV0dXJuIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRleHRDb250cm9sYCB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gb25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApIH1cblx0XHRcdFx0Lz47XG5cblx0XHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRcdHJldHVybiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVNlbGVjdENvbnRyb2xgIH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgYXR0ci5vcHRpb25zIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+O1xuXHRcdFx0Y2FzZSAndG9nZ2xlJzpcblx0XHRcdFx0cmV0dXJuIDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVG9nZ2xlQ29udHJvbGAgfVxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPjtcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRcdFx0XHQgQHdvcmRwcmVzcy9uby1iYXNlLWNvbnRyb2wtd2l0aC1sYWJlbC13aXRob3V0LWlkXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRyZXR1cm4gPEJhc2VDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tQmFzZUNvbnRyb2xgIH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1OdW1iZXJDb250cm9sYCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBOdW1iZXIoIG5ld1ZhbCApLCBhdHRyTmFtZSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHAnIH1cblx0XHRcdFx0XHQgICBzdHlsZT17IHtcblx0XHRcdFx0XHRcdCAgIGNvbG9yOiAncmdiKDExNywgMTE3LCAxMTcpJyxcblx0XHRcdFx0XHQgICB9IH0+eyBoZWxwIH08L3A+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+O1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdH0gKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZENvbnRyb2w7IiwiY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBQYW5lbEJvZHksXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IHdwLmhvb2tzO1xuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG4vKipcbiAqIEBwYXJhbSAgcHJvcHNcbiAqIEByZXR1cm4ge2Jvb2xlYW58SlNYLkVsZW1lbnR9XG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gRmllbGRTZXR0aW5nc1dyYXBwZXIoIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgdGl0bGUsXG5cdFx0ICAgICAgY2hpbGRyZW4sXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXHRjb25zdCBibG9ja05hbWUgPSBibG9ja1Byb3BzWyAnZGF0YS10eXBlJyBdLnJlcGxhY2UoICcvJywgJy0nICk7XG5cblx0Y29uc3QgQ3VzdG9tU2V0dGluZ3MgPSBhcHBseUZpbHRlcnMoXG5cdFx0YGpldC5mYi5yZW5kZXIuc2V0dGluZ3MuJHsgYmxvY2tOYW1lIH1gLFxuXHRcdG51bGwsXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHRjaGlsZHJlbiB8fCBDdXN0b21TZXR0aW5nc1xuXHQpICYmIDxQYW5lbEJvZHlcblx0XHR0aXRsZT17IHRpdGxlIHx8IF9fKCAnRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdD5cblx0XHR7IGNoaWxkcmVuIH1cblx0XHR7IEN1c3RvbVNldHRpbmdzIH1cblx0PC9QYW5lbEJvZHk+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFNldHRpbmdzV3JhcHBlcjsiLCJpbXBvcnQge1xuXHRjbGFzc25hbWVzLFxufSBmcm9tICcuLi8uLi90b29scyc7XG5pbXBvcnQgdXNlU2VsZWN0UG9zdE1ldGEgZnJvbSAnLi4vLi4vaG9va3MvdXNlU2VsZWN0UG9zdE1ldGEnO1xuaW1wb3J0IENoYW5nZU5hbWVCeUxhYmVsIGZyb20gJy4uL2hlbHBlcnMvQ2hhbmdlTmFtZUJ5TGFiZWwnO1xuaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi4vaG9va3MvdXNlVW5pcUtleSc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZUNvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICBSaWNoVGV4dCxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmxldCB7XG5cdCAgICBfX2V4cGVyaW1lbnRhbFVzZUZvY3VzT3V0c2lkZSxcblx0ICAgIHVzZUZvY3VzT3V0c2lkZSxcbiAgICB9ICAgPSB3cC5jb21wb3NlO1xuXG51c2VGb2N1c091dHNpZGUgPSB1c2VGb2N1c091dHNpZGUgfHwgX19leHBlcmltZW50YWxVc2VGb2N1c091dHNpZGU7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFJpY2hEZXNjcmlwdGlvbiggY29udGVudCApIHtcblx0cmV0dXJuIDxzbWFsbCBzdHlsZT17IHtcblx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcblx0XHRwYWRkaW5nOiAnMC4yZW0gMC44ZW0gMCAwJyxcblx0XHRjb2xvcjogJyM4ZThhOGEnLFxuXHR9IH0+XG5cdFx0eyBjb250ZW50IH1cblx0PC9zbWFsbD47XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBGaWVsZFdyYXBwZXIoIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBjaGlsZHJlbixcblx0XHQgICAgICB3cmFwQ2xhc3NlcyAgICAgICA9IFtdLFxuXHRcdCAgICAgIHZhbHVlSWZFbXB0eUxhYmVsID0gJycsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0XHQgICAgICBjaGlsZHJlblBvc2l0aW9uICA9ICdiZXR3ZWVuJyxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IHVuaXFLZXkgPSB1c2VVbmlxS2V5KCk7XG5cblx0Y29uc3QgYXJncyA9IHVzZVNlbGVjdFBvc3RNZXRhKCAnX2pmX2FyZ3MnICk7XG5cblx0ZnVuY3Rpb24gb25CbHVyTGFiZWwoKSB7XG5cdFx0Q2hhbmdlTmFtZUJ5TGFiZWwoIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgKTtcblx0fVxuXG5cdGNvbnN0IHJlZiA9IHVzZUZvY3VzT3V0c2lkZSggb25CbHVyTGFiZWwgKTtcblxuXHRmdW5jdGlvbiByZW5kZXJMYWJlbCgpIHtcblx0XHRyZXR1cm4gPEJhc2VDb250cm9sLlZpc3VhbExhYmVsPlxuXHRcdFx0eyBSaWNoRGVzY3JpcHRpb24oIF9fKCAnaW5wdXQgbGFiZWw6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKSB9XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX2xhYmVsXCJcblx0XHRcdD5cblx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3JpY2gtbGFiZWwnICkgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTGFiZWwuLi5cIlxuXHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5sYWJlbFxuXHRcdFx0XHRcdCAgICAgICAgPyBhdHRyaWJ1dGVzLmxhYmVsXG5cdFx0XHRcdFx0ICAgICAgICA6IHZhbHVlSWZFbXB0eUxhYmVsIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld0xhYmVsID0+IHNldEF0dHJpYnV0ZXMoXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiBuZXdMYWJlbCB9ICkgfVxuXHRcdFx0XHRcdGlzU2VsZWN0ZWQ9eyBmYWxzZSB9XG5cdFx0XHRcdFx0eyAuLi5yZWYgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMucmVxdWlyZWQgJiZcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcXVpcmVkJyB9PlxuXHRcdFx0XHRcdHsgYXJncy5yZXF1aXJlZF9tYXJrID8gYXJncy5yZXF1aXJlZF9tYXJrIDogJyonIH1cblx0XHRcdFx0PC9zcGFuPiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sLlZpc3VhbExhYmVsPjtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlckRlc2NyaXB0aW9uKCkge1xuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX2Rlc2MtLXdyYXBwZXJcIj5cblx0XHRcdHsgUmljaERlc2NyaXB0aW9uKFxuXHRcdFx0XHRfXyggJ2lucHV0IGRlc2NyaXB0aW9uOicsICdqZXQtZm9ybS1idWlsZGVyJyApICkgfVxuXHRcdFx0PEJhc2VDb250cm9sIGtleT17ICdjdXN0b21faGVscF9kZXNjcmlwdGlvbicgfVxuXHRcdFx0ICAgICAgICAgICAgIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19kZXNjJyB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwXCI+XG5cdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncmljaC1kZXNjcmlwdGlvbicgKSB9XG5cdFx0XHRcdFx0XHR0YWdOYW1lPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbi4uLlwiXG5cdFx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZXNjIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgZGVzYyA9PiBzZXRBdHRyaWJ1dGVzKCB7IGRlc2MgfSApIH1cblx0XHRcdFx0XHRcdHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcwcHgnIH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHQ8L2Rpdj47XG5cdH1cblxuXHRpZiAoICdyb3cnID09PSBhcmdzLmZpZWxkc19sYXlvdXQgKSB7XG5cdFx0d3JhcENsYXNzZXMucHVzaCggJ2pldC1mb3JtLWJ1aWxkZXItcm93X19mbGV4JyApO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZUhvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHRjbGFzc05hbWU9eyBjbGFzc25hbWVzKFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCcsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyLXJvdycsXG5cdFx0XHRcdHdyYXBDbGFzc2VzLFxuXHRcdFx0KSB9XG5cdFx0PlxuXHRcdFx0eyAncm93JyAhPT0gYXJncy5maWVsZHNfbGF5b3V0ICYmIDw+XG5cdFx0XHRcdHsgJ3RvcCcgPT09IGNoaWxkcmVuUG9zaXRpb24gJiYgY2hpbGRyZW4gfVxuXHRcdFx0XHR7IHJlbmRlckxhYmVsKCkgfVxuXHRcdFx0XHR7ICdiZXR3ZWVuJyA9PT0gY2hpbGRyZW5Qb3NpdGlvbiAmJiBjaGlsZHJlbiB9XG5cdFx0XHRcdHsgcmVuZGVyRGVzY3JpcHRpb24oKSB9XG5cdFx0XHRcdHsgJ2JvdHRvbScgPT09IGNoaWxkcmVuUG9zaXRpb24gJiYgY2hpbGRyZW4gfVxuXHRcdFx0PC8+IH1cblx0XHRcdHsgJ3JvdycgPT09IGFyZ3MuZmllbGRzX2xheW91dCAmJiA8PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXItcm93X19mbGV4LS1sYWJlbFwiPlxuXHRcdFx0XHRcdHsgcmVuZGVyTGFiZWwoKSB9XG5cdFx0XHRcdFx0eyByZW5kZXJEZXNjcmlwdGlvbigpIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1idWlsZGVyLXJvd19fZmxleC0tY29udGVudFwiPnsgY2hpbGRyZW4gfTwvZGl2PlxuXHRcdFx0PC8+IH1cblx0XHQ8L0Jhc2VDb250cm9sPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFdyYXBwZXI7IiwiaW1wb3J0IEJsb2NrTGFiZWwgZnJvbSAnLi9CbG9ja0xhYmVsJztcbmltcG9ydCBCbG9ja05hbWUgZnJvbSAnLi9CbG9ja05hbWUnO1xuaW1wb3J0IEJsb2NrRGVzY3JpcHRpb24gZnJvbSAnLi9CbG9ja0Rlc2NyaXB0aW9uJztcbmltcG9ydCBCbG9ja0RlZmF1bHRWYWx1ZSBmcm9tICcuL0Jsb2NrRGVmYXVsdFZhbHVlJztcblxuY29uc3Qge1xuXHQgICAgICBQYW5lbEJvZHksXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gR2VuZXJhbEZpZWxkcyggeyBoYXNNYWNybyA9IHRydWUgfSApIHtcblx0cmV0dXJuIDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0dlbmVyYWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdCAgICAgICAgICAgICAgICAgIGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWZpZWxkcycgfT5cblx0XHQ8QmxvY2tMYWJlbC8+XG5cdFx0PEJsb2NrTmFtZS8+XG5cdFx0PEJsb2NrRGVzY3JpcHRpb24vPlxuXHRcdDxCbG9ja0RlZmF1bHRWYWx1ZSBoYXNNYWNybz17IGhhc01hY3JvIH0gLz5cblx0PC9QYW5lbEJvZHk+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5lcmFsRmllbGRzOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCBTY29wZWRBdHRyaWJ1dGVzQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L1Njb3BlZEF0dHJpYnV0ZXNDb250ZXh0JztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5mdW5jdGlvbiBTY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXIoIHsgY2hpbGRyZW4gfSApIHtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblx0Y29uc3QgWyBjdXJyZW50LCBzZXRDdXJyZW50IF0gICAgICAgPSB1c2VTdGF0ZSggKCkgPT4gYXR0cmlidXRlcyApO1xuXG5cdHJldHVybiA8U2NvcGVkQXR0cmlidXRlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyB7XG5cdFx0cmVhbEF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG5cdFx0c2V0UmVhbEF0dHJpYnV0ZXM6IHNldEF0dHJpYnV0ZXMsXG5cdFx0YXR0cmlidXRlczogY3VycmVudCxcblx0XHRzZXRBdHRyaWJ1dGVzOiBzZXRDdXJyZW50LFxuXHR9IH0+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvU2NvcGVkQXR0cmlidXRlc0NvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXI7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIEN1c3RvbVNlbGVjdENvbnRyb2wsXG5cdCAgICAgIEljb24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tFZGl0Q29udGV4dCxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZnVuY3Rpb24gU2VsZWN0VmFyaWF0aW9ucyggeyB2YWx1ZSB9ICkge1xuXHRjb25zdCB7IG5hbWUgfSAgICAgICAgICAgID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXHRjb25zdCBbICwgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgeyB2YXJpYXRpb25zLCByYXdWYXJpYXRpb25zIH0gPSB1c2VTZWxlY3QoXG5cdFx0KCBzZWxlY3QgKSA9PiB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdCAgICAgIGdldEJsb2NrVmFyaWF0aW9ucyxcblx0XHRcdCAgICAgIH0gPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKTtcblxuXHRcdFx0Y29uc3QgaXRlbXMgICAgICAgICA9IGdldEJsb2NrVmFyaWF0aW9ucyggbmFtZSwgJ2Jsb2NrJyApO1xuXHRcdFx0Y29uc3Qgb3B0aW9ucyAgICAgICA9IFtdO1xuXHRcdFx0Y29uc3QgdmFyaWF0aW9uc01hcCA9IHt9O1xuXG5cdFx0XHRmb3IgKCBjb25zdCBpdGVtIG9mIGl0ZW1zICkge1xuXHRcdFx0XHRvcHRpb25zLnB1c2goIHtcblx0XHRcdFx0XHRrZXk6IGl0ZW0ubmFtZSxcblx0XHRcdFx0XHRuYW1lOiA8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZiIGZsZXggZ2FwLTFlbSBhaS1jZW50ZXInIH0+XG5cdFx0XHRcdFx0XHQ8SWNvbiBpY29uPXsgaXRlbS5pY29uIH0vPlxuXHRcdFx0XHRcdFx0eyBpdGVtLnRpdGxlIH1cblx0XHRcdFx0XHQ8L3NwYW4+LFxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHZhcmlhdGlvbnNNYXBbIGl0ZW0ubmFtZSBdID0gaXRlbTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFyaWF0aW9uczogb3B0aW9ucyxcblx0XHRcdFx0cmF3VmFyaWF0aW9uczogdmFyaWF0aW9uc01hcCxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRbIG5hbWUgXSxcblx0KTtcblxuXHRpZiAoICF2YXJpYXRpb25zLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8Q3VzdG9tU2VsZWN0Q29udHJvbFxuXHRcdF9fbmV4dFVuY29uc3RyYWluZWRXaWR0aFxuXHRcdGhpZGVMYWJlbEZyb21WaXNpb25cblx0XHRvcHRpb25zPXsgdmFyaWF0aW9ucyB9XG5cdFx0c2l6ZT17ICdfX3Vuc3RhYmxlLWxhcmdlJyB9XG5cdFx0b25DaGFuZ2U9eyAoIHsgc2VsZWN0ZWRJdGVtIH0gKSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHQuLi5yYXdWYXJpYXRpb25zWyBzZWxlY3RlZEl0ZW0ua2V5IF0uYXR0cmlidXRlcyxcblx0XHR9ICkgfVxuXHRcdHZhbHVlPXsgdmFyaWF0aW9ucy5maW5kKFxuXHRcdFx0KCB7IGtleSB9ICkgPT4ga2V5ID09PSB2YWx1ZSApXG5cdFx0fVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0VmFyaWF0aW9uczsiLCJpbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQ2hpbGRyZW4sXG5cdCAgICAgIGNsb25lRWxlbWVudCxcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmxldCB7XG5cdCAgICBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbCxcblx0ICAgIF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uSWNvbixcblx0ICAgIF9fZXhwZXJpbWVudGFsVG9vbGJhckNvbnRleHQsXG5cdCAgICBUb2dnbGVHcm91cENvbnRyb2wsXG5cdCAgICBUb2dnbGVHcm91cENvbnRyb2xPcHRpb25JY29uLFxuXHQgICAgVG9vbGJhckl0ZW0sXG5cdCAgICBUb29sYmFyR3JvdXAsXG5cdCAgICBUb29sYmFyQ29udGV4dCxcbiAgICB9ID0gd3AuY29tcG9uZW50cztcblxuVG9nZ2xlR3JvdXBDb250cm9sICAgICAgICAgICA9IChcblx0VG9nZ2xlR3JvdXBDb250cm9sIHx8IF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sXG4pO1xuVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uSWNvbiA9IChcblx0VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uSWNvbiB8fCBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbkljb25cbik7XG5Ub29sYmFyQ29udGV4dCAgICAgICAgICAgICAgID0gKFxuXHRUb29sYmFyQ29udGV4dCB8fCBfX2V4cGVyaW1lbnRhbFRvb2xiYXJDb250ZXh0XG4pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gVG9nZ2xlR3JvdXBWYXJpYXRpb25zQmFzZSggeyB2YWx1ZSB9ICkge1xuXHRjb25zdCB7IG5hbWUgfSAgICAgPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cdGNvbnN0IHRvb2xiYXJTdGF0ZSA9IHVzZUNvbnRleHQoIFRvb2xiYXJDb250ZXh0ICk7XG5cblx0Y29uc3QgWyAsIHNldEF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IHsgdmFyaWF0aW9ucywgY29tcG9uZW50cyB9ID0gdXNlU2VsZWN0KFxuXHRcdCggc2VsZWN0ICkgPT4ge1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHQgICAgICBnZXRCbG9ja1ZhcmlhdGlvbnMsXG5cdFx0XHQgICAgICB9ID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICk7XG5cblx0XHRcdGNvbnN0IGl0ZW1zID0gZ2V0QmxvY2tWYXJpYXRpb25zKCBuYW1lLCAnYmxvY2snICk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZhcmlhdGlvbnM6IGl0ZW1zLFxuXHRcdFx0XHRjb21wb25lbnRzOiBpdGVtcy5tYXAoXG5cdFx0XHRcdFx0Y3VycmVudCA9PiAoXG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRvb2xiYXJTdGF0ZT8uY3VycmVudElkID8/XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIHRvb2xiYXJTdGF0ZT8uYmFzZUlkXG5cdFx0XHRcdFx0ICAgICAgICAgICApXG5cdFx0XHRcdFx0ICAgICAgICAgICA/IDxUb29sYmFySXRlbVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBrZXk9eyBjdXJyZW50Lm5hbWUgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBhcz17IFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbkljb24gfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICB2YWx1ZT17IGN1cnJlbnQubmFtZSB9XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIGxhYmVsPXsgY3VycmVudC50aXRsZSB9XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIGljb249eyBjdXJyZW50Lmljb24gfVxuXHRcdFx0XHRcdCAgICAgICAgICAgLz4gOiA8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uSWNvblxuXHRcdFx0XHRcdFx0ICAgICAgICAgICBrZXk9eyBjdXJyZW50Lm5hbWUgfVxuXHRcdFx0XHRcdFx0ICAgICAgICAgICB2YWx1ZT17IGN1cnJlbnQubmFtZSB9XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIGxhYmVsPXsgY3VycmVudC50aXRsZSB9XG5cdFx0XHRcdFx0XHQgICAgICAgICAgIGljb249eyBjdXJyZW50Lmljb24gfVxuXHRcdFx0XHRcdCAgICAgICAgICAgLz4gKSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdFx0W10sXG5cdCk7XG5cblx0aWYgKCAhdmFyaWF0aW9ucy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPFRvZ2dsZUdyb3VwQ29udHJvbFxuXHRcdGhpZGVMYWJlbEZyb21WaXNpb25cblx0XHRvbkNoYW5nZT17IHZhck5hbWUgPT4gc2V0QXR0cmlidXRlcygge1xuXHRcdFx0Li4udmFyaWF0aW9ucy5maW5kKFxuXHRcdFx0XHQoIHsgbmFtZTogdmFyaWF0aW9uTmFtZSB9ICkgPT4gdmFyaWF0aW9uTmFtZSA9PT0gdmFyTmFtZSxcblx0XHRcdCkuYXR0cmlidXRlcyxcblx0XHR9ICkgfVxuXHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdGlzQmxvY2tcblx0PlxuXHRcdHsgQ2hpbGRyZW4ubWFwKFxuXHRcdFx0Y29tcG9uZW50cyxcblx0XHRcdGNsb25lRWxlbWVudCxcblx0XHQpIH1cblx0PC9Ub2dnbGVHcm91cENvbnRyb2w+O1xufVxuXG5mdW5jdGlvbiBUb2dnbGVHcm91cFZhcmlhdGlvbnMoIHByb3BzICkge1xuXHRjb25zdCB0b29sYmFyU3RhdGUgPSB1c2VDb250ZXh0KCBUb29sYmFyQ29udGV4dCApO1xuXG5cdGlmICggIXRvb2xiYXJTdGF0ZT8uY3VycmVudElkICkge1xuXHRcdHJldHVybiA8VG9nZ2xlR3JvdXBWYXJpYXRpb25zQmFzZSB7IC4uLnByb3BzIH0vPjtcblx0fVxuXG5cdHJldHVybiA8VG9vbGJhckdyb3VwIGNsYXNzTmFtZT17ICdqZXQtZmIgdG9nZ2xlLXRvb2xiYXItZ3JvdXAnIH0+XG5cdFx0PFRvZ2dsZUdyb3VwVmFyaWF0aW9uc0Jhc2UgeyAuLi5wcm9wcyB9Lz5cblx0PC9Ub29sYmFyR3JvdXA+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVHcm91cFZhcmlhdGlvbnM7IiwiaW1wb3J0IHVzZVVuaXFLZXkgZnJvbSAnLi4vaG9va3MvdXNlVW5pcUtleSc7XG5pbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlU3VjY2Vzc05vdGljZSBmcm9tICcuLi8uLi9ob29rcy91c2VTdWNjZXNzTm90aWNlJztcblxuY29uc3Qge1xuXHQgICAgICBCbG9ja0NvbnRyb2xzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUNvcHlUb0NsaXBib2FyZCxcbiAgICAgIH0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuXHQgICAgICBUb29sYmFyR3JvdXAsXG5cdCAgICAgIFRvb2xiYXJJdGVtLFxuXHQgICAgICBUb29sYmFyQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIFRvb2xCYXJEZWZhdWx0KCB7IGNoaWxkcmVuID0gbnVsbCB9ICkge1xuXHRjb25zdCB1bmlxS2V5ID0gdXNlVW5pcUtleSgpO1xuXG5cdGNvbnN0IFtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRjb25zdCBkaXNwbGF5Tm90aWNlID0gdXNlU3VjY2Vzc05vdGljZShcblx0XHRgQ29waWVkIFwiJHsgYXR0cmlidXRlcy5uYW1lIH1cIiB0byBjbGlwYm9hcmQuYCxcblx0KTtcblxuXHRjb25zdCBjb3B5UmVmID0gdXNlQ29weVRvQ2xpcGJvYXJkKFxuXHRcdGF0dHJpYnV0ZXMubmFtZSxcblx0XHQoKSA9PiBkaXNwbGF5Tm90aWNlKCB0cnVlICksXG5cdCk7XG5cblx0cmV0dXJuIDxCbG9ja0NvbnRyb2xzXG5cdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtQmxvY2tDb250cm9scycgKSB9XG5cdD5cblx0XHQ8VG9vbGJhckdyb3VwXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcy1Ub29sYmFyR3JvdXAnICkgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZiLWJsb2NrLXRvb2xiYXJcIlxuXHRcdD5cblx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0aWNvbj1cImFkbWluLXBhZ2VcIlxuXHRcdFx0XHRzaG93VG9vbHRpcFxuXHRcdFx0XHRzaG9ydGN1dD1cIkNvcHkgbmFtZVwiXG5cdFx0XHRcdHJlZj17IGNvcHlSZWYgfVxuXHRcdFx0Lz5cblx0XHRcdDxUb29sYmFySXRlbVxuXHRcdFx0XHRhcz17IFRleHRDb250cm9sIH1cblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm5hbWUgfVxuXHRcdFx0XHRvbkNoYW5nZT17IG5hbWUgPT4gc2V0QXR0cmlidXRlcyggeyBuYW1lIH0gKSB9XG5cdFx0XHQvPlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9Ub29sYmFyR3JvdXA+XG5cdDwvQmxvY2tDb250cm9scz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xCYXJEZWZhdWx0OyIsImltcG9ydCBUb29sQmFyRGVmYXVsdCBmcm9tICcuL1Rvb2xCYXJEZWZhdWx0JztcbmltcG9ydCBCbG9ja1JlcXVpcmVkIGZyb20gJy4vQmxvY2tSZXF1aXJlZCc7XG5cbmZ1bmN0aW9uIFRvb2xCYXJGaWVsZHMoIHsgY2hpbGRyZW4gPSBudWxsIH0gKSB7XG5cdHJldHVybiA8PlxuXHRcdDxUb29sQmFyRGVmYXVsdD5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvVG9vbEJhckRlZmF1bHQ+XG5cdFx0PEJsb2NrUmVxdWlyZWQvPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xCYXJGaWVsZHM7IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBTY29wZWRBdHRyaWJ1dGVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHt9ICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0OyIsImltcG9ydCB7IGdldENvbnZlcnRlZE5hbWUgfSBmcm9tICcuLi8uLi90b29scyc7XG5cbmZ1bmN0aW9uIENoYW5nZU5hbWVCeUxhYmVsKCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzICkge1xuXHRpZiAoIDEgPj0gYXR0cmlidXRlcy5sYWJlbC5sZW5ndGhcblx0XHR8fCAoXG5cdFx0XHRhdHRyaWJ1dGVzLm5hbWUgJiYgJ2ZpZWxkX25hbWUnICE9PVxuXHRcdFx0YXR0cmlidXRlcy5uYW1lXG5cdFx0KVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0bmFtZTogZ2V0Q29udmVydGVkTmFtZSggYXR0cmlidXRlcy5sYWJlbCApLFxuXHR9ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZU5hbWVCeUxhYmVsOyIsImNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcblxuY29uc3QgQ29udHJvbHNTZXR0aW5ncyA9ICgpID0+IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5maWVsZHMuY29udHJvbHMnLCB7fSApXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzU2V0dGluZ3M7IiwiY29uc3QgeyBhZGRGaWx0ZXIgfSA9IHdwLmhvb2tzO1xuXG5mdW5jdGlvbiBhcHBlbmRGaWVsZCggY2FsbGJhY2ssIGZpZWxkTmFtZXMgPSBbXSApICB7XG5cdGFkZEZpbHRlciggJ2pldC5mYi5yZWdpc3Rlci5maWVsZHMnLCAnamV0LWZvcm0tYnVpbGRlcicsIGJsb2NrcyA9PiB7XG5cdFx0cmV0dXJuIGJsb2Nrcy5tYXAoIGJsb2NrID0+IHtcblx0XHRcdGlmICggZmllbGROYW1lcy5sZW5ndGggJiYgISBmaWVsZE5hbWVzLmluY2x1ZGVzKCBibG9jay5uYW1lICkgKSB7XG5cdFx0XHRcdHJldHVybiBibG9jaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKCBibG9jayApO1xuXHRcdH0gKTtcblx0fSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRGaWVsZDsiLCJjb25zdCB7IHNlbGVjdCB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrUGFyc2VyRnVuYyApIHtcblx0Y29uc3QgYmxvY2tzUmVjdXJzaXZlSW5uZXJJdGVyYXRvciA9ICggYmxvY2tzLCBwYXJlbnQgPSBudWxsICkgPT4ge1xuXG5cdFx0YmxvY2tzID0gYmxvY2tzIHx8IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xuXG5cdFx0YmxvY2tzLmZvckVhY2goIGJsb2NrID0+IHtcblx0XHRcdGJsb2NrUGFyc2VyRnVuYyggYmxvY2ssIHBhcmVudCApO1xuXG5cdFx0XHRpZiAoIGJsb2NrLmlubmVyQmxvY2tzLmxlbmd0aCApIHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBhcmVudCA9ICdqZXQtZm9ybXMvcmVwZWF0ZXItZmllbGQnID09PSBibG9jay5uYW1lXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA/IGJsb2NrXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA6IHBhcmVudDtcblxuXHRcdFx0XHRibG9ja3NSZWN1cnNpdmVJbm5lckl0ZXJhdG9yKFxuXHRcdFx0XHRcdGJsb2NrLmlubmVyQmxvY2tzLFxuXHRcdFx0XHRcdGN1cnJlbnRQYXJlbnQsXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdjb3JlL2Jsb2NrJyAhPT0gYmxvY2submFtZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEhhcmRjb2RlIHRoZSByZWNlaXB0IG9mIGludGVybmFsIGJsb2NrcyBcIlJldXNhYmxlIGJsb2NrXCIuXG5cdFx0XHQgKiBUaGlzIGlzIHRoZSBvbmx5IHdheSBzbyBmYXIuXG5cdFx0XHQgKlxuXHRcdFx0ICogQWRkZWQgYWZ0ZXIgbWFqb3IgcmVmYWN0b3Jpbmdcblx0XHRcdCAqIEBzaW5jZSAzLjAuNFxuXHRcdFx0ICpcblx0XHRcdCAqIEludHJvZHVjZWRcblx0XHRcdCAqIEBzaW5jZSAyLjEuMVxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIHt7Y2xpZW50SWQ6IHN0cmluZywgaW5uZXJCbG9ja3M6IEFycmF5fVtdfVxuXHRcdFx0ICovXG5cdFx0XHRsZXQgaW5uZXJSZXVzYWJsZSA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApPy5cblx0XHRcdFx0X191bnN0YWJsZUdldENsaWVudElkc1RyZWU/Lihcblx0XHRcdFx0XHRibG9jay5jbGllbnRJZCxcblx0XHRcdFx0KTtcblxuXHRcdFx0aWYgKCAhIGlubmVyUmV1c2FibGU/Lmxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpbm5lclJldXNhYmxlSWRzID0gaW5uZXJSZXVzYWJsZS5tYXAoXG5cdFx0XHRcdCggeyBjbGllbnRJZCB9ICkgPT4gY2xpZW50SWQsXG5cdFx0XHQpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIFdlIHVwZGF0ZSB0aGlzIHZhcmlhYmxlIGJlY2F1c2UgYF9fdW5zdGFibGVHZXRDbGllbnRJZHNUcmVlYFxuXHRcdFx0ICogcmV0dXJucyBpbnN1ZmZpY2llbnQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGJsb2NrLlxuXHRcdFx0ICogTmFtZWx5LCB0aGUgYG5hbWVgIHByb3BlcnR5IGlzIG1pc3Npbmdcblx0XHRcdCAqL1xuXHRcdFx0aW5uZXJSZXVzYWJsZSA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2Nrc0J5Q2xpZW50SWQoXG5cdFx0XHRcdGlubmVyUmV1c2FibGVJZHMsXG5cdFx0XHQpO1xuXG5cdFx0XHRibG9ja3NSZWN1cnNpdmVJbm5lckl0ZXJhdG9yKCBpbm5lclJldXNhYmxlICk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdGJsb2Nrc1JlY3Vyc2l2ZUlubmVySXRlcmF0b3IoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3I7IiwiaW1wb3J0IGdldEZvcm1GaWVsZHNCbG9ja3MgZnJvbSAnLi9nZXRGb3JtRmllbGRzQmxvY2tzJztcblxuZnVuY3Rpb24gZ2V0QXZhaWxhYmxlRmllbGRzKCBleGNsdWRlID0gW10sIGNvbnRleHQgPSAnZGVmYXVsdCcgKSB7XG5cdGNvbnN0IGZpZWxkcyAgID0gW107XG5cdGNvbnN0IGJsb2NrcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIGV4Y2x1ZGUsIGZhbHNlLCBmYWxzZSwgY29udGV4dCApO1xuXG5cdGlmICggYmxvY2tzICkge1xuXHRcdGJsb2Nrcy5mb3JFYWNoKCBpdGVtID0+IGZpZWxkcy5wdXNoKCBpdGVtLm5hbWUgKSApO1xuXHR9XG5cdHJldHVybiBmaWVsZHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEF2YWlsYWJsZUZpZWxkczsiLCJpbXBvcnQgZ2V0QXZhaWxhYmxlRmllbGRzIGZyb20gJy4vZ2V0QXZhaWxhYmxlRmllbGRzJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nKCBibG9ja05hbWUgKSB7XG5cdGNvbnN0IGZpZWxkcyA9IGdldEF2YWlsYWJsZUZpZWxkcyggWyBibG9ja05hbWUgXSApO1xuXG5cdGNvbnN0IGZpZWxkc1N0cmluZyA9IFtdO1xuXHRmaWVsZHMuZm9yRWFjaCggZnVuY3Rpb24gKCBpdGVtICkge1xuXHRcdGZpZWxkc1N0cmluZy5wdXNoKCAnJUZJRUxEOjonICsgaXRlbSArICclJyApO1xuXHR9ICk7XG5cblx0cmV0dXJuIF9fKCAnQXZhaWxhYmxlIGZpZWxkczogJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgK1xuXHRcdGZpZWxkc1N0cmluZy5qb2luKCAnLCAnICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZzsiLCJpbXBvcnQgQ29udHJvbHNTZXR0aW5ncyBmcm9tICcuL0NvbnRyb2xzU2V0dGluZ3MnO1xuXG5mdW5jdGlvbiBnZXRCbG9ja0NvbnRyb2xzKCB0eXBlID0gJ2FsbCcgKSB7XG5cdGlmICggIXR5cGUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGNvbnN0IGNvbnRyb2xzID0gQ29udHJvbHNTZXR0aW5ncygpO1xuXG5cdGlmICggJ2FsbCcgPT09IHR5cGUgKSB7XG5cdFx0cmV0dXJuIGNvbnRyb2xzO1xuXHR9XG5cblx0aWYgKCBjb250cm9sc1sgdHlwZSBdXG5cdFx0JiYgY29udHJvbHNbIHR5cGUgXS5hdHRyc1xuXHRcdCYmIEFycmF5LmlzQXJyYXkoIGNvbnRyb2xzWyB0eXBlIF0uYXR0cnMgKVxuXHRcdCYmIDAgPCBjb250cm9sc1sgdHlwZSBdLmF0dHJzLmxlbmd0aFxuXHQpIHtcblx0XHRyZXR1cm4gY29udHJvbHNbIHR5cGUgXS5hdHRycztcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QmxvY2tDb250cm9sczsiLCJpbXBvcnQgYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IgZnJvbSAnLi9ibG9ja3NSZWN1cnNpdmVJdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEJsb2Nrc0J5TmFtZSggYmxvY2tOYW1lcyApIHtcblx0Y29uc3QgYmxvY2tzID0gW107XG5cblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrID0+IHtcblx0XHRpZiAoICFibG9ja05hbWVzLmluY2x1ZGVzKCBibG9jay5uYW1lICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGJsb2Nrcy5wdXNoKCBibG9jayApO1xuXHR9ICk7XG5cblx0cmV0dXJuIGJsb2Nrcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QmxvY2tzQnlOYW1lOyIsImltcG9ydCBnZXRJbm5lckJsb2NrcyBmcm9tICcuL2dldElubmVyQmxvY2tzJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50SW5uZXJCbG9ja3MoKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXHRjb25zdCB7ICdkYXRhLWJsb2NrJzogZGF0YUJsb2NrIH0gPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIGdldElubmVyQmxvY2tzKCBkYXRhQmxvY2sgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q3VycmVudElubmVyQmxvY2tzOyIsImltcG9ydCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciBmcm9tICcuL2Jsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG4gICAgICB9ID0gd3AuaG9va3M7XG5jb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiBnZXRGaWVsZHNXaXRob3V0Q3VycmVudChcblx0cGxhY2Vob2xkZXIgICAgPSBmYWxzZSxcblx0c3VwcHJlc3NGaWx0ZXIgPSBmYWxzZSxcblx0Y29udGV4dCAgICAgICAgPSAnZGVmYXVsdCcsXG4pIHtcblxuXHRjb25zdCBza2lwRmllbGRzID0gW1xuXHRcdCdzdWJtaXQnLFxuXHRcdCdmb3JtLWJyZWFrJyxcblx0XHQnaGVhZGluZycsXG5cdFx0J2dyb3VwLWJyZWFrJyxcblx0XHQnY29uZGl0aW9uYWwnLFxuXHRdO1xuXHRsZXQgZm9ybUZpZWxkcyAgID0gW107XG5cblx0Y29uc3QgY3VycmVudCA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9jaygpO1xuXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XG5cdFx0aWYgKCBibG9jay5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxuXHRcdFx0JiYgY3VycmVudD8uY2xpZW50SWQgIT09IGJsb2NrLmNsaWVudElkXG5cdFx0XHQmJiAhc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcblx0XHQpIHtcblx0XHRcdGNvbnN0IGJsb2NrVHlwZSA9IHNlbGVjdCggJ2NvcmUvYmxvY2tzJyApLlxuXHRcdFx0XHRnZXRCbG9ja1R5cGUoIGJsb2NrLm5hbWUgKTtcblxuXHRcdFx0bGV0IHsgZmllbGRzOiBuZXdGaWVsZHMgPSBbXSB9ID0gYmxvY2tUeXBlLmpmYlJlc29sdmVCbG9jay5jYWxsKFxuXHRcdFx0XHRibG9jayxcblx0XHRcdFx0Y29udGV4dCxcblx0XHRcdCk7XG5cblx0XHRcdGlmICggYmxvY2tUeXBlLmhhc093blByb3BlcnR5KCAnamZiR2V0RmllbGRzJyApICkge1xuXHRcdFx0XHRuZXdGaWVsZHMgPSBibG9ja1R5cGUuamZiR2V0RmllbGRzLmNhbGwoIGJsb2NrLCBjb250ZXh0ICk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcm1GaWVsZHMucHVzaChcblx0XHRcdFx0Li4ubmV3RmllbGRzLmZpbHRlciggZm9ybUZpZWxkID0+ICFmb3JtRmllbGRzLnNvbWUoXG5cdFx0XHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gZm9ybUZpZWxkLnZhbHVlLFxuXHRcdFx0XHQpICksXG5cdFx0XHQpO1xuXHRcdH1cblx0fSApO1xuXG5cdGZvcm1GaWVsZHMgPSBwbGFjZWhvbGRlclxuXHQgICAgICAgICAgICAgPyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXG5cdCAgICAgICAgICAgICA6IGZvcm1GaWVsZHM7XG5cblx0cmV0dXJuIHN1cHByZXNzRmlsdGVyID8gZm9ybUZpZWxkcyA6IGFwcGx5RmlsdGVycyhcblx0XHQnamV0LmZiLmdldEZvcm1GaWVsZHNCbG9ja3MnLCBmb3JtRmllbGRzLCBjb250ZXh0ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50OyIsImltcG9ydCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciBmcm9tICcuL2Jsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG4gICAgICB9ID0gd3AuaG9va3M7XG5jb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiBnZXRGb3JtRmllbGRzQmxvY2tzKFxuXHRleGNsdWRlICAgICAgICA9IFtdLFxuXHRwbGFjZWhvbGRlciAgICA9IGZhbHNlLFxuXHRzdXBwcmVzc0ZpbHRlciA9IGZhbHNlLFxuXHRjb250ZXh0ICAgICAgICA9ICdkZWZhdWx0Jyxcbikge1xuXHRsZXQgZm9ybUZpZWxkcyA9IFtdO1xuXHRjb25zdCBza2lwRmllbGRzID0gW1xuXHRcdCdzdWJtaXQnLFxuXHRcdCdmb3JtLWJyZWFrJyxcblx0XHQnaGVhZGluZycsXG5cdFx0J2dyb3VwLWJyZWFrJyxcblx0XHQnY29uZGl0aW9uYWwnLFxuXHRcdC4uLmV4Y2x1ZGUsXG5cdF07XG5cblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrID0+IHtcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXG5cdFx0XHQmJiAhc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcblx0XHQpIHtcblxuXHRcdFx0Y29uc3QgYmxvY2tUeXBlID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICkuXG5cdFx0XHRcdGdldEJsb2NrVHlwZSggYmxvY2submFtZSApO1xuXG5cdFx0XHRsZXQgeyBmaWVsZHM6IG5ld0ZpZWxkcyA9IFtdIH0gPSBibG9ja1R5cGUuamZiUmVzb2x2ZUJsb2NrLmNhbGwoXG5cdFx0XHRcdGJsb2NrLFxuXHRcdFx0XHRjb250ZXh0LFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBibG9ja1R5cGUuaGFzT3duUHJvcGVydHkoICdqZmJHZXRGaWVsZHMnICkgKSB7XG5cdFx0XHRcdG5ld0ZpZWxkcyA9IGJsb2NrVHlwZS5qZmJHZXRGaWVsZHMuY2FsbCggYmxvY2ssIGNvbnRleHQgKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKFxuXHRcdFx0XHQuLi5uZXdGaWVsZHMuZmlsdGVyKCBjdXJyZW50ID0+ICFmb3JtRmllbGRzLnNvbWUoXG5cdFx0XHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gY3VycmVudC52YWx1ZSxcblx0XHRcdFx0KSApLFxuXHRcdFx0KTtcblx0XHR9XG5cdH0gKTtcblxuXHRmb3JtRmllbGRzID0gcGxhY2Vob2xkZXJcblx0ICAgICAgICAgICAgID8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxuXHQgICAgICAgICAgICAgOiBmb3JtRmllbGRzO1xuXG5cdHJldHVybiBzdXBwcmVzc0ZpbHRlciA/IGZvcm1GaWVsZHMgOiBhcHBseUZpbHRlcnMoXG5cdFx0J2pldC5mYi5nZXRGb3JtRmllbGRzQmxvY2tzJywgZm9ybUZpZWxkcywgY29udGV4dCApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGb3JtRmllbGRzQmxvY2tzOyIsImZ1bmN0aW9uIGdldElubmVyQmxvY2tzKCBjbGllbnRJZCApIHtcblx0Y29uc3QgYmxvY2sgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrKCBjbGllbnRJZCApO1xuXHRyZXR1cm4gYmxvY2sgPyBibG9jay5pbm5lckJsb2NrcyA6IFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRJbm5lckJsb2NrczsiLCJjb25zdCB7IGdldCB9ID0gd2luZG93Ll87XG5cbi8qKlxuICogQHBhcmFtIGJsb2NrU2V0dGluZ3Mge09iamVjdH0gZnJvbSBibG9jay5qc29uXG4gKiBAcGFyYW0gc3VwcG9ydHNQYXRoICB7U3RyaW5nfEFycmF5fVxuICovXG5mdW5jdGlvbiBnZXRTdXBwb3J0KCBibG9ja1NldHRpbmdzLCBzdXBwb3J0c1BhdGggKSB7XG5cdGlmICggIUFycmF5LmlzQXJyYXkoIHN1cHBvcnRzUGF0aCApICkge1xuXHRcdHN1cHBvcnRzUGF0aCA9IFsgc3VwcG9ydHNQYXRoIF07XG5cdH1cblxuXHRyZXR1cm4gZ2V0KFxuXHRcdGJsb2NrU2V0dGluZ3MsXG5cdFx0WyAnc3VwcG9ydHMnLCAuLi5zdXBwb3J0c1BhdGggXSxcblx0XHRmYWxzZSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U3VwcG9ydDsiLCJpbXBvcnQgeyB1c2VCbG9ja0VkaXRDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgdXNlU2VsZWN0LCB1c2VEaXNwYXRjaCwgc2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuZnVuY3Rpb24gdXNlQmxvY2tBdHRyaWJ1dGVzKCBvdGhlckNsaWVudElkID0gbnVsbCApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcblx0bGV0IHsgY2xpZW50SWQgfSA9IGJsb2NrUHJvcHM7XG5cblx0aWYgKCBvdGhlckNsaWVudElkICkge1xuXHRcdGNsaWVudElkID0gb3RoZXJDbGllbnRJZDtcblx0fVxuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgICAgICA9IHVzZVNlbGVjdCggc2VsZWN0U3RvcmUgPT4gKFxuXHRcdHNlbGVjdFN0b3JlKCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tBdHRyaWJ1dGVzKCBjbGllbnRJZCApXG5cdCksIFsgY2xpZW50SWQgXSApO1xuXHRjb25zdCB7IHVwZGF0ZUJsb2NrIH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcHJvcHMge09iamVjdHxGdW5jdGlvbn1cblx0ICovXG5cdGNvbnN0IHVwZGF0ZUF0dHJpYnV0ZXMgPSBwcm9wcyA9PiB7XG5cdFx0cHJvcHMgPSAnb2JqZWN0JyA9PT0gdHlwZW9mIHByb3BzXG5cdFx0ICAgICAgICA/IHByb3BzXG5cdFx0ICAgICAgICA6IHByb3BzKCBhdHRyaWJ1dGVzICk7XG5cblx0XHRwcm9wcyA9IHNlbGVjdCggJ2pldC1mb3Jtcy9maWVsZHMnICkuZ2V0U2FuaXRpemVkQXR0cmlidXRlcyhcblx0XHRcdHByb3BzLFxuXHRcdFx0YmxvY2tQcm9wcyxcblx0XHQpO1xuXG5cdFx0dXBkYXRlQmxvY2soIGNsaWVudElkLCB7IGF0dHJpYnV0ZXM6IHByb3BzIH0gKTtcblx0fTtcblxuXHRyZXR1cm4gWyBhdHRyaWJ1dGVzLCB1cGRhdGVBdHRyaWJ1dGVzIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUJsb2NrQXR0cmlidXRlczsiLCJpbXBvcnQgdXNlU2VsZWN0UG9zdE1ldGEgZnJvbSAnLi4vLi4vaG9va3MvdXNlU2VsZWN0UG9zdE1ldGEnO1xuaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5cbmZ1bmN0aW9uIHVzZUlzQWR2YW5jZWRWYWxpZGF0aW9uKCkge1xuXHRjb25zdCB7IHR5cGUgfSAgICAgICA9IHVzZVNlbGVjdFBvc3RNZXRhKCAnX2pmX3ZhbGlkYXRpb24nICk7XG5cdGNvbnN0IFsgYXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0aWYgKCBhdHRyaWJ1dGVzLnZhbGlkYXRpb24/LnR5cGUgKSB7XG5cdFx0cmV0dXJuICdhZHZhbmNlZCcgPT09IGF0dHJpYnV0ZXMudmFsaWRhdGlvbj8udHlwZTtcblx0fVxuXG5cdHJldHVybiAnYWR2YW5jZWQnID09PSB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VJc0FkdmFuY2VkVmFsaWRhdGlvbjsiLCJpbXBvcnQgeyB1c2VSZXF1ZXN0RmllbGRzIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyB1c2VCbG9ja0VkaXRDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgc3ByaW50ZiwgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCBhY3Rpb25UeXBlc01hcCA9IHt9O1xuXG5mb3IgKCBjb25zdCB7IGlkLCBuYW1lIH0gb2Ygd2luZG93LmpldEZvcm1BY3Rpb25UeXBlcyApIHtcblx0YWN0aW9uVHlwZXNNYXBbIGlkIF0gPSBuYW1lO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gdXNlSXNVbmlxdWVGaWVsZE5hbWUoKSB7XG5cdGNvbnN0IHsgY2xpZW50SWQgfSA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcblx0Y29uc3QgYWN0aW9uRmllbGRzID0gdXNlUmVxdWVzdEZpZWxkcyhcblx0XHR7IHJldHVybk9uRW1wdHlDdXJyZW50QWN0aW9uOiBmYWxzZSB9LFxuXHQpO1xuXG5cdGNvbnN0IHsgaW5Gb3JtRmllbGRzLCBoYXNQYXJlbnQsIGZpZWxkTmFtZXMgfSA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4ge1xuXHRcdFx0Y29uc3QgY3VycmVudEJsb2NrID0gc2VsZWN0KCAnamV0LWZvcm1zL2ZpZWxkcycgKS5cblx0XHRcdFx0Z2V0QmxvY2tCeUlkKCBjbGllbnRJZCApO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoYXNQYXJlbnQ6ICEhY3VycmVudEJsb2NrPy5wYXJlbnRCbG9jayxcblx0XHRcdFx0ZmllbGROYW1lczogY3VycmVudEJsb2NrPy5maWVsZHM/Lm1hcD8uKFxuXHRcdFx0XHRcdCggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKSA/PyBbXSxcblx0XHRcdFx0aW5Gb3JtRmllbGRzOiBzZWxlY3QoICdqZXQtZm9ybXMvZmllbGRzJyApLlxuXHRcdFx0XHRcdGlzVW5pcXVlTmFtZSggY2xpZW50SWQgKSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRbIGNsaWVudElkIF0sXG5cdCk7XG5cblx0aWYgKCAhaW5Gb3JtRmllbGRzICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlcnJvcjogJ25vdF91bmlxdWVfaW5fZmllbGRzJyxcblx0XHRcdG1lc3NhZ2U6IF9fKFxuXHRcdFx0XHQnVGhlIGZvcm0gZmllbGQgbmFtZSBtdXN0IGJlIHVuaXF1ZS4gUGxlYXNlIGNoYW5nZSBpdCcsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0fTtcblx0fVxuXG5cdGlmICggaGFzUGFyZW50ICkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0IGNvbXB1dGVkID0gYWN0aW9uRmllbGRzLmZpbmQoXG5cdFx0KCB7IHZhbHVlIH0gKSA9PiBmaWVsZE5hbWVzLmluY2x1ZGVzKCB2YWx1ZSApICk7XG5cblx0aWYgKCAhY29tcHV0ZWQgKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRlcnJvcjogJ25vdF91bmlxdWVfaW5fYWN0aW9ucycsXG5cdFx0bWVzc2FnZTogY29tcHV0ZWQ/LmZyb21cblx0XHQgICAgICAgICA/IHNwcmludGYoXG5cdFx0XHRcdFx0IC8vIHRyYW5zbGF0b3JzOiAlcyAtIGFjdGlvbiBuYW1lXG5cdFx0XHRcdF9fKFxuXHRcdFx0XHRcdGBUaGUgJXMgYWN0aW9uIGFscmVhZHkgdXNlcyB0aGlzIGZpZWxkIG5hbWUuIFBsZWFzZSBjaGFuZ2UgaXRgLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KSxcblx0XHRcdFx0YWN0aW9uVHlwZXNNYXBbIGNvbXB1dGVkLmZyb20gXSxcblx0XHRcdClcblxuXHRcdCAgICAgICAgIDogX18oXG5cdFx0XHRcdCdUaGUgZm9ybSBmaWVsZCBuYW1lIG11c3QgYmUgdW5pcXVlLiBQbGVhc2UgY2hhbmdlIGl0Jyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSXNVbmlxdWVGaWVsZE5hbWU7IiwiaW1wb3J0IFNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvU2NvcGVkQXR0cmlidXRlc0NvbnRleHQnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuLyoqXG4gKiBAcmV0dXJuIHt7XG4gKiBhdHRyaWJ1dGVzOiBPYmplY3QsXG4gKiBzZXRBdHRyaWJ1dGVzOiBGdW5jdGlvbixcbiAqIHJlYWxBdHRyaWJ1dGVzOiBPYmplY3QsXG4gKiBzZXRSZWFsQXR0cmlidXRlczogRnVuY3Rpb24sXG4gKiB9fVxuICovXG5mdW5jdGlvbiB1c2VTY29wZWRBdHRyaWJ1dGVzQ29udGV4dCgpIHtcblx0cmV0dXJuIHVzZUNvbnRleHQoIFNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0OyIsImNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tFZGl0Q29udGV4dCxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3QgeyBnZXQgfSA9IHdpbmRvdy5fO1xuXG5mdW5jdGlvbiB1c2VTdXBwb3J0KCBzdXBwb3J0TmFtZSApIHtcblx0Y29uc3QgeyBuYW1lIH0gPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cblx0cmV0dXJuIHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4ge1xuXHRcdFx0Y29uc3QgYmxvY2tUeXBlID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICkuZ2V0QmxvY2tUeXBlKCBuYW1lICk7XG5cblx0XHRcdHJldHVybiBnZXQoIGJsb2NrVHlwZSwgWyAnc3VwcG9ydHMnLCBzdXBwb3J0TmFtZSBdLCBmYWxzZSApO1xuXHRcdH0sXG5cdFx0WyBuYW1lLCBzdXBwb3J0TmFtZSBdLFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTdXBwb3J0OyIsImNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tFZGl0Q29udGV4dCxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZnVuY3Rpb24gdXNlVW5pcUtleSgpIHtcblx0Y29uc3QgeyBjbGllbnRJZCB9ID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXG5cdHJldHVybiBzbHVnID0+IChcblx0XHRzbHVnICsgJy0nICsgY2xpZW50SWRcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVW5pcUtleTsiLCJpbXBvcnQgeyBzdG9yZU5hbWUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4vdXNlQmxvY2tBdHRyaWJ1dGVzJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VFZmZlY3QsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5mdW5jdGlvbiB1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUoIGN1c3RvbUNoYW5nZU5hbWVzID0gbnVsbCApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyAgICAgPSB1c2VCbG9ja1Byb3BzKCk7XG5cdGNvbnN0IFsgLCBzZXRBdHRycyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgY2xpZW50SWQgPSBibG9ja1Byb3BzWyAnZGF0YS1ibG9jaycgXTtcblxuXHRjb25zdCBuYW1lcyA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4ge1xuXHRcdFx0Y29uc3QgaXNKdXN0ID0gc2VsZWN0KCBzdG9yZU5hbWUgKS5pc1JlY2VudGx5QWRkZWQoIGNsaWVudElkICk7XG5cblx0XHRcdGlmICggIWlzSnVzdCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdCAgICAgIGhhc0NoYW5nZWQsXG5cdFx0XHRcdCAgICAgIG5hbWVzOiB1bmlxdWVOYW1lcyxcblx0XHRcdCAgICAgIH0gPSBzZWxlY3QoIHN0b3JlTmFtZSApLmdldFVuaXF1ZU5hbWVzKCBjbGllbnRJZCApO1xuXG5cdFx0XHRyZXR1cm4gaGFzQ2hhbmdlZCA/IHVuaXF1ZU5hbWVzIDogZmFsc2U7XG5cdFx0fSxcblx0XHRbIGNsaWVudElkIF0sXG5cdCk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCAhbmFtZXMgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VzdG9tQ2hhbmdlTmFtZXMgKSB7XG5cdFx0XHRjdXN0b21DaGFuZ2VOYW1lcyggbmFtZXMgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHNldEF0dHJzKCB7XG5cdFx0XHRuYW1lOiBuYW1lcy5zcGxpdCggJ3wnIClbIDAgXSxcblx0XHR9ICk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbIG5hbWVzIF0gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlOyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGdldFByZXBhcmVkQmxvY2tzIGZyb20gJy4vZ2V0UHJlcGFyZWRCbG9ja3MnO1xuaW1wb3J0IHsgc3RvcmVOYW1lIH0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IHtcblx0ICAgICAgc2VsZWN0LFxuXHQgICAgICBkaXNwYXRjaCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHNldEJsb2NrcyggYWN0aW9uID0gbnVsbCApIHtcblx0XHRpZiAoIG51bGwgPT09IGFjdGlvbiApIHtcblx0XHRcdGFjdGlvbiA9IGdldFByZXBhcmVkQmxvY2tzKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGFzRXhlY3V0ZWQgPSBzZWxlY3QoIHN0b3JlTmFtZSApLmlzRXhlY3V0ZWQoKTtcblxuXHRcdGlmICggIWhhc0V4ZWN1dGVkICkge1xuXHRcdFx0ZGlzcGF0Y2goIHN0b3JlTmFtZSApLnRvZ2dsZUV4ZWN1dGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogaGFzRXhlY3V0ZWQgPyBjb25zdGFudHMuc2V0QmxvY2tzIDogY29uc3RhbnRzLnNldEJsb2Nrc0ZpcnN0LFxuXHRcdFx0YmxvY2tzOiBhY3Rpb24uYmxvY2tzLFxuXHRcdFx0YmxvY2tNYXA6IGFjdGlvbi5ibG9ja01hcCxcblx0XHR9O1xuXHR9LFxuXHR0b2dnbGVFeGVjdXRlKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMudG9nZ2xlRXhlY3V0ZSxcblx0XHR9O1xuXHR9LFxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG5cdHNldEJsb2NrczogJ1NFVF9CTE9DS1MnLFxuXHRzZXRCbG9ja3NGaXJzdDogJ1NFVF9CTE9DS1NfRklSU1QnLFxuXHR0b2dnbGVFeGVjdXRlOiAnVE9HR0xFX0VYRUNVVEUnLFxufTtcblxuXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgZGlzcGF0Y2hlcnMgPSB7XG5cdFsgY29uc3RhbnRzLnNldEJsb2NrcyBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IHJlY2VudGx5QWRkZWQgPSBbXTtcblxuXHRcdGZvciAoIGNvbnN0IGJsb2NrTWFwS2V5IGluIGFjdGlvbi5ibG9ja01hcCApIHtcblx0XHRcdGlmICggIWFjdGlvbi5ibG9ja01hcC5oYXNPd25Qcm9wZXJ0eSggYmxvY2tNYXBLZXkgKSB8fFxuXHRcdFx0XHRzdGF0ZS5ibG9ja01hcC5oYXNPd25Qcm9wZXJ0eSggYmxvY2tNYXBLZXkgKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmVjZW50bHlBZGRlZC5wdXNoKCBibG9ja01hcEtleSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGJsb2NrczogYWN0aW9uLmJsb2Nrcyxcblx0XHRcdGJsb2NrTWFwOiBhY3Rpb24uYmxvY2tNYXAsXG5cdFx0XHRyZWNlbnRseUFkZGVkLFxuXHRcdH07XG5cdH0sXG5cdFsgY29uc3RhbnRzLnNldEJsb2Nrc0ZpcnN0IF0oIHN0YXRlLCBhY3Rpb24gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0YmxvY2tzOiBhY3Rpb24uYmxvY2tzLFxuXHRcdFx0YmxvY2tNYXA6IGFjdGlvbi5ibG9ja01hcCxcblx0XHR9O1xuXHR9LFxuXHRbIGNvbnN0YW50cy50b2dnbGVFeGVjdXRlIF0oIHN0YXRlICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGV4ZWN1dGVkOiB0cnVlLFxuXHRcdH07XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC4uLmRpc3BhdGNoZXJzLFxufTsiLCJpbXBvcnQgYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IgZnJvbSAnLi4vaGVscGVycy9ibG9ja3NSZWN1cnNpdmVJdGVyYXRvcic7XG5jb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiBnZXRQcmVwYXJlZEJsb2NrcygpIHtcblx0Y29uc3QgYmxvY2tzICAgPSBbXTtcblx0Y29uc3QgYmxvY2tNYXAgPSB7fTtcblxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggKCBibG9jaywgcGFyZW50ICkgPT4ge1xuXHRcdGlmICggIWJsb2NrPy5uYW1lPy5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYmxvY2tUeXBlID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICkuZ2V0QmxvY2tUeXBlKCBibG9jay5uYW1lICk7XG5cdFx0Y29uc3QgY3VycmVudCAgID0gYmxvY2tUeXBlLmpmYlJlc29sdmVCbG9jay5jYWxsKCBibG9jayApO1xuXG5cdFx0Ly8gZGVwcmVjYXRlZCBzaW5jZSAzLjIuMFxuXHRcdGlmICggYmxvY2tUeXBlLmhhc093blByb3BlcnR5KCAnamZiR2V0RmllbGRzJyApICkge1xuXHRcdFx0Y3VycmVudC5maWVsZHMgID0gYmxvY2tUeXBlLmpmYkdldEZpZWxkcy5jYWxsKCBibG9jayApO1xuXHRcdH1cblxuXHRcdGlmICggIXBhcmVudD8ubmFtZSApIHtcblx0XHRcdGJsb2Nrcy5wdXNoKCBjdXJyZW50ICk7XG5cdFx0XHRibG9ja01hcFsgY3VycmVudC5jbGllbnRJZCBdID0gY3VycmVudDtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0Y29uc3QgcGFyZW50RmllbGQgPSBibG9ja01hcFsgcGFyZW50Py5jbGllbnRJZCBdID8/IGZhbHNlO1xuXG5cdFx0aWYgKCAhcGFyZW50RmllbGQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBjdXJyZW50LCAncGFyZW50QmxvY2snLCB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdHJldHVybiBwYXJlbnRGaWVsZDtcblx0XHRcdH0sXG5cdFx0fSApO1xuXG5cdFx0cGFyZW50RmllbGQuaW5uZXJCbG9ja3MgPSBwYXJlbnRGaWVsZD8uaW5uZXJCbG9ja3MgfHwgW107XG5cdFx0cGFyZW50RmllbGQuaW5uZXJCbG9ja3MucHVzaCggY3VycmVudCApO1xuXG5cdFx0YmxvY2tNYXBbIGN1cnJlbnQuY2xpZW50SWQgXSA9IGN1cnJlbnQ7XG5cdH0gKTtcblxuXHRyZXR1cm4geyBibG9ja3MsIGJsb2NrTWFwIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByZXBhcmVkQmxvY2tzOyIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgZ2V0UHJlcGFyZWRCbG9ja3MgZnJvbSAnLi9nZXRQcmVwYXJlZEJsb2Nrcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgY3JlYXRlUmVkdXhTdG9yZSxcblx0ICAgICAgZGlzcGF0Y2gsXG5cdCAgICAgIHNlbGVjdCxcblx0ICAgICAgc3Vic2NyaWJlLFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmV4cG9ydCBjb25zdCBzdG9yZU5hbWUgPSAnamV0LWZvcm1zL2ZpZWxkcyc7XG5cbmxldCBwcmV2QmxvY2tDb3VudDtcbmxldCBwcmV2QmxvY2tBdHRycztcblxuc3Vic2NyaWJlKCAoKSA9PiB7XG5cdGNvbnN0IHsgZGVib3VuY2UgfSAgPSB3aW5kb3cuXztcblx0Y29uc3QgeyBzZXRCbG9ja3MgfSA9IGRpc3BhdGNoKCBzdG9yZU5hbWUgKTtcblxuXHRjb25zdCByZXNldEJsb2NrcyA9IGRlYm91bmNlKCAoKSA9PiB7XG5cdFx0Y29uc3QgY291bnRCbG9ja3MgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRHbG9iYWxCbG9ja0NvdW50KCk7XG5cblx0XHRpZiAoIHByZXZCbG9ja0NvdW50ICE9PSBjb3VudEJsb2NrcyApIHtcblx0XHRcdHByZXZCbG9ja0NvdW50ID0gY291bnRCbG9ja3M7XG5cdFx0XHRzZXRCbG9ja3MoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFjdGlvbiAgICA9IGdldFByZXBhcmVkQmxvY2tzKCk7XG5cdFx0Y29uc3QganNvbkF0dHJzID0gSlNPTi5zdHJpbmdpZnkoIGFjdGlvbi5ibG9ja3MgKTtcblxuXHRcdGlmICgganNvbkF0dHJzID09PSBwcmV2QmxvY2tBdHRycyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRwcmV2QmxvY2tBdHRycyA9IGpzb25BdHRycztcblx0XHRzZXRCbG9ja3MoIGFjdGlvbiApO1xuXHR9LCAxMDAgKTtcblxuXHRyZXNldEJsb2NrcygpO1xufSApO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCBzdG9yZU5hbWUsIHtcblx0cmVkdWNlcixcblx0YWN0aW9ucyxcblx0c2VsZWN0b3JzLFxufSApO1xuIiwiaW1wb3J0IGRpc3BhdGNoZXJzIGZyb20gJy4vZGlzcGF0Y2hlcnMnO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0ge1xuXHRibG9ja3M6IFtdLFxuXHRibG9ja01hcDoge30sXG5cdGV4ZWN1dGVkOiBmYWxzZSxcblx0cmVjZW50bHlBZGRlZDogW10sXG5cdHNhbml0aXplcnM6IHtcblx0XHRuYW1lOiBbXG5cdFx0XHRuYW1lID0+IG5hbWUucmVwbGFjZSggL1teXFx3XFwtXS9naSwgJycgKSxcblx0XHRcdG5hbWUgPT4gbmFtZSA9PT0gJ2NoaWxkcmVuJyA/ICdfJyArIG5hbWUgOiBuYW1lLFxuXHRcdF0sXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xuXHRjb25zdCBjYWxsYmFjayA9IGRpc3BhdGNoZXJzWyBhY3Rpb24/LnR5cGUgXTtcblxuXHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBjYWxsYmFjayggc3RhdGUsIGFjdGlvbiApO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufSIsImNvbnN0IHNlbGVjdG9ycyA9IHtcblx0Z2V0QmxvY2tzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuYmxvY2tzO1xuXHR9LFxuXHRnZXRCbG9ja01hcCggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmJsb2NrTWFwO1xuXHR9LFxuXHRnZXRGaWVsZHMoXG5cdFx0c3RhdGUsXG5cdFx0e1xuXHRcdFx0d2l0aElubmVyID0gdHJ1ZSxcblx0XHRcdGN1cnJlbnRJZCA9IGZhbHNlLFxuXHRcdH0sXG5cdCkge1xuXHRcdGNvbnN0IGZpZWxkcyA9IFtdO1xuXG5cdFx0Y29uc3QgaXRlcmF0ZUZpZWxkcyA9IGJsb2NrcyA9PiB7XG5cdFx0XHRmb3IgKCBjb25zdCBibG9jayBvZiBibG9ja3MgKSB7XG5cdFx0XHRcdGlmICggYmxvY2suZmllbGRzPy5sZW5ndGggJiYgYmxvY2suY2xpZW50SWQgIT09IGN1cnJlbnRJZCApIHtcblx0XHRcdFx0XHRmaWVsZHMucHVzaCggLi4uYmxvY2suZmllbGRzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICF3aXRoSW5uZXIgfHwgIWJsb2NrLmlubmVyQmxvY2tzPy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVyYXRlRmllbGRzKCBibG9jay5pbm5lckJsb2NrcyApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRpdGVyYXRlRmllbGRzKCBzdGF0ZS5ibG9ja3MgKTtcblxuXHRcdHJldHVybiBmaWVsZHM7XG5cdH0sXG5cdGlzRXhlY3V0ZWQoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5leGVjdXRlZDtcblx0fSxcblx0aXNSZWNlbnRseUFkZGVkKCBzdGF0ZSwgY2xpZW50SWQgKSB7XG5cdFx0cmV0dXJuIC0xICE9PSBzdGF0ZS5yZWNlbnRseUFkZGVkLmluZGV4T2YoIGNsaWVudElkICk7XG5cdH0sXG5cdGdldFVuaXF1ZU5hbWVzKCBzdGF0ZSwgY2xpZW50SWQgKSB7XG5cdFx0Y29uc3QgY3VycmVudEJsb2NrID0gc3RhdGUuYmxvY2tNYXBbIGNsaWVudElkIF0gPz8gZmFsc2U7XG5cblx0XHRpZiAoICFjdXJyZW50QmxvY2sgKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoYXNDaGFuZ2VkOiBmYWxzZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0bGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuXHRcdGNvbnN0IG5hbWVzID0gY3VycmVudEJsb2NrPy5maWVsZHM/Lm1hcD8uKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlICkgPz9cblx0XHRcdFtdO1xuXHRcdGNvbnN0IHNjb3BlID0gY3VycmVudEJsb2NrLmhhc093blByb3BlcnR5KCAncGFyZW50QmxvY2snIClcblx0XHQgICAgICAgICAgICAgID8gY3VycmVudEJsb2NrLnBhcmVudEJsb2NrLmlubmVyQmxvY2tzXG5cdFx0ICAgICAgICAgICAgICA6IHN0YXRlLmJsb2NrcztcblxuXHRcdGNvbnN0IHdhbGtlckZpZWxkcyA9ICggZmllbGRzICkgPT4ge1xuXHRcdFx0Zm9yICggY29uc3QgZmllbGQgb2YgZmllbGRzICkge1xuXHRcdFx0XHRjb25zdCBuYW1lSW5kZXggPSBuYW1lcy5pbmRleE9mKCBmaWVsZC52YWx1ZSApO1xuXG5cdFx0XHRcdGlmICggLTEgPT09IG5hbWVJbmRleCApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggJ2ZpZWxkX25hbWUnID09PSBmaWVsZC52YWx1ZSApIHtcblx0XHRcdFx0XHRoYXNDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG5hbWVzWyBuYW1lSW5kZXggXSA9IGAkeyBuYW1lc1sgbmFtZUluZGV4IF0gfV9jb3B5YDtcblx0XHRcdFx0aGFzQ2hhbmdlZCAgICAgICAgID0gdHJ1ZTtcblx0XHRcdFx0d2Fsa2VyRmllbGRzKCBmaWVsZHMgKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Zm9yICggY29uc3QgYmxvY2sgb2Ygc2NvcGUgKSB7XG5cdFx0XHRpZiAoIGNsaWVudElkID09PSBibG9jay5jbGllbnRJZCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR3YWxrZXJGaWVsZHMoIGJsb2NrPy5maWVsZHMgPz8gW10gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aGFzQ2hhbmdlZCxcblx0XHRcdG5hbWVzOiBuYW1lcy5qb2luKCAnfCcgKSxcblx0XHR9O1xuXHR9LFxuXHRnZXRTYW5pdGl6ZWRBdHRyaWJ1dGVzKCBzdGF0ZSwgYXR0cnMsIHsgbmFtZTogdHlwZSB9ID0ge30gKSB7XG5cdFx0Zm9yICggY29uc3QgYXR0cnNLZXkgaW4gYXR0cnMgKSB7XG5cdFx0XHRpZiAoICFhdHRycy5oYXNPd25Qcm9wZXJ0eSggYXR0cnNLZXkgKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNhbml0aXplcnMgPSAoXG5cdFx0XHRcdHN0YXRlLnNhbml0aXplcnM/LlsgdHlwZSBdPy5bIGF0dHJzS2V5IF0gPz9cblx0XHRcdFx0c3RhdGUuc2FuaXRpemVycz8uWyBhdHRyc0tleSBdID8/XG5cdFx0XHRcdGZhbHNlXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoICFzYW5pdGl6ZXJzPy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBjb25zdCBzYW5pdGl6ZXIgb2Ygc2FuaXRpemVycyApIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBzYW5pdGl6ZXIgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXR0cnNbIGF0dHJzS2V5IF0gPSBzYW5pdGl6ZXIoIGF0dHJzWyBhdHRyc0tleSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGF0dHJzO1xuXHR9LFxuXHRpc1VuaXF1ZU5hbWUoIHN0YXRlLCBjbGllbnRJZCApIHtcblx0XHRjb25zdCB7IGhhc0NoYW5nZWQgfSA9IHNlbGVjdG9ycy5nZXRVbmlxdWVOYW1lcyggc3RhdGUsIGNsaWVudElkICk7XG5cblx0XHRyZXR1cm4gIWhhc0NoYW5nZWQ7XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4xLjBcblx0ICpcblx0ICogQHBhcmFtICBzdGF0ZVxuXHQgKiBAcGFyYW0gIGJsb2NrSWQge1N0cmluZ30gQmxvY2sgY2xpZW50SWQgb3IgbmFtZVxuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0Z2V0QmxvY2soIHN0YXRlLCBibG9ja0lkICkge1xuXHRcdHJldHVybiBzdGF0ZS5ibG9ja3MuZmluZCggKCB7IG5hbWUsIGNsaWVudElkIH0gKSA9PiAoXG5cdFx0XHRbIG5hbWUsIGNsaWVudElkIF0uaW5jbHVkZXMoIGJsb2NrSWQgKVxuXHRcdCkgKTtcblx0fSxcblx0Z2V0QmxvY2tCeU5hbWUoIHN0YXRlLCBmaWVsZE5hbWUgKSB7XG5cdFx0aWYgKCAhZmllbGROYW1lICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGl0ZXJhdGVGaWVsZHMgPSBibG9ja3MgPT4ge1xuXHRcdFx0Zm9yICggY29uc3QgYmxvY2sgb2YgYmxvY2tzICkge1xuXHRcdFx0XHRpZiAoIGJsb2NrLmZpZWxkcy5zb21lKFxuXHRcdFx0XHRcdCggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgPT09IGZpZWxkTmFtZSxcblx0XHRcdFx0KSApIHtcblx0XHRcdFx0XHRyZXR1cm4gYmxvY2s7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICFibG9jay5pbm5lckJsb2Nrcz8ubGVuZ3RoICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aXRlcmF0ZUZpZWxkcyggYmxvY2suaW5uZXJCbG9ja3MgKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aXRlcmF0ZUZpZWxkcyggc3RhdGUuYmxvY2tzICk7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdGdldEJsb2NrTmFtZUJ5TmFtZSggc3RhdGUsIGZpZWxkTmFtZSApIHtcblx0XHRjb25zdCBibG9jayA9IHNlbGVjdG9ycy5nZXRCbG9ja0J5TmFtZSggc3RhdGUsIGZpZWxkTmFtZSApO1xuXG5cdFx0cmV0dXJuIGJsb2NrPy5uYW1lID8/ICcnO1xuXHR9LFxuXHRnZXRCbG9ja0J5SWQoIHN0YXRlLCBjbGllbnRJZCApIHtcblx0XHRyZXR1cm4gc3RhdGUuYmxvY2tNYXBbIGNsaWVudElkIF0gPz8gZmFsc2U7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC4uLnNlbGVjdG9ycyxcbn07IiwiaW1wb3J0IFByZXNldEJ1dHRvbiBmcm9tICcuLi9wcmVzZXQvY29tcG9uZW50cy9QcmVzZXRCdXR0b24nO1xuaW1wb3J0IE1hY3Jvc0ZpZWxkcyBmcm9tICcuLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zRmllbGRzJztcbmltcG9ydCBCYXNlTGFiZWwgZnJvbSAnLi9CYXNlTGFiZWwnO1xuXG5jb25zdCB7XG5cdCAgICAgIEZsZXhJdGVtLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUluc3RhbmNlSWQsXG4gICAgICB9ID0gd3AuY29tcG9zZTtcblxuZnVuY3Rpb24gQWR2YW5jZWRJbnNwZWN0b3JDb250cm9sKCB7XG5cdGNoaWxkcmVuLFxuXHR2YWx1ZSxcblx0bGFiZWwsXG5cdG9uQ2hhbmdlUHJlc2V0ID0gZmFsc2UsXG5cdG9uQ2hhbmdlTWFjcm9zID0gZmFsc2UsXG59ICkge1xuXG5cdGNvbnN0IGluc3RhbmNlSWQgPSB1c2VJbnN0YW5jZUlkKCBGbGV4SXRlbSxcblx0XHQnamZiLUFkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCcgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8QmFzZUxhYmVsXG5cdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdGh0bWxGb3I9eyBpbnN0YW5jZUlkIH1cblx0XHQ+XG5cdFx0XHR7IGZhbHNlICE9PSBvbkNoYW5nZVByZXNldCAmJiA8UHJlc2V0QnV0dG9uXG5cdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdFx0XHRvbkNoYW5nZT17IG9uQ2hhbmdlUHJlc2V0IH1cblx0XHRcdC8+IH1cblx0XHRcdHsgZmFsc2UgIT09IG9uQ2hhbmdlTWFjcm9zICYmIDxNYWNyb3NGaWVsZHNcblx0XHRcdFx0b25DbGljaz17IG9uQ2hhbmdlTWFjcm9zIH1cblx0XHRcdC8+IH1cblx0XHQ8L0Jhc2VMYWJlbD5cblx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlblxuXHRcdCAgPyBjaGlsZHJlbiggeyBpbnN0YW5jZUlkIH0gKVxuXHRcdCAgOiBjaGlsZHJlblxuXHRcdH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZEluc3BlY3RvckNvbnRyb2w7IiwiaW1wb3J0IFByZXNldEJ1dHRvbiBmcm9tICcuLi9wcmVzZXQvY29tcG9uZW50cy9QcmVzZXRCdXR0b24nO1xuaW1wb3J0IE1hY3Jvc0ZpZWxkcyBmcm9tICcuLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zRmllbGRzJztcbmltcG9ydCB7IEZsZXgsIEZsZXhJdGVtIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUluc3RhbmNlSWQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG5mdW5jdGlvbiBBZHZhbmNlZE1vZGFsQ29udHJvbCgge1xuXHRjaGlsZHJlbixcblx0dmFsdWUsXG5cdGxhYmVsLFxuXHRvbkNoYW5nZVByZXNldCA9IGZhbHNlLFxuXHRvbkNoYW5nZU1hY3JvcyA9IGZhbHNlLFxuXHRtYWNyb1dpdGhDdXJyZW50ID0gZmFsc2UsXG59ICkge1xuXG5cdGNvbnN0IGluc3RhbmNlSWQgPSB1c2VJbnN0YW5jZUlkKCBGbGV4SXRlbSwgJ2pmYi1BZHZhbmNlZE1vZGFsQ29udHJvbCcgKTtcblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2wnIH0+XG5cdFx0PEZsZXhcblx0XHRcdGFsaWduPXsgJ2ZsZXgtc3RhcnQnIH1cblx0XHRcdGNsYXNzTmFtZT17ICdjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGQnIH1cblx0XHQ+XG5cdFx0XHQ8RmxleEl0ZW0gaXNCbG9jaz5cblx0XHRcdFx0PEZsZXhcblx0XHRcdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cblx0XHRcdFx0XHRqdXN0aWZ5PXsgJ2ZsZXgtc3RhcnQnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxsYWJlbFxuXHRcdFx0XHRcdFx0aHRtbEZvcj17IGluc3RhbmNlSWQgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYiBsYWJlbCcgfVxuXHRcdFx0XHRcdD57IGxhYmVsIH08L2xhYmVsPlxuXHRcdFx0XHRcdHsgZmFsc2UgIT09IG9uQ2hhbmdlUHJlc2V0ICYmIDxQcmVzZXRCdXR0b25cblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkNoYW5nZVByZXNldCB9XG5cdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdHsgZmFsc2UgIT09IG9uQ2hhbmdlTWFjcm9zICYmIDxNYWNyb3NGaWVsZHNcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvbkNoYW5nZU1hY3JvcyB9XG5cdFx0XHRcdFx0XHR3aXRoQ3VycmVudD17IG1hY3JvV2l0aEN1cnJlbnQgfVxuXHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0PC9GbGV4SXRlbT5cblx0XHRcdDxGbGV4SXRlbSBpc0Jsb2NrIHN0eWxlPXsgeyBmbGV4OiAzLCBtYXJnaW5MZWZ0OiAndW5zZXQnIH0gfT5cblx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW5cblx0XHRcdFx0ICA/IGNoaWxkcmVuKCB7IGluc3RhbmNlSWQgfSApXG5cdFx0XHRcdCAgOiBjaGlsZHJlblxuXHRcdFx0XHR9XG5cdFx0XHQ8L0ZsZXhJdGVtPlxuXHRcdDwvRmxleD5cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZE1vZGFsQ29udHJvbDsiLCJmdW5jdGlvbiBCYXNlSGVscCgge1xuXHRjaGlsZHJlbixcblx0Y2xhc3NOYW1lID0gJycsXG5cdHN0eWxlID0ge30sXG5cdC4uLnByb3BzXG59ICkge1xuXHRyZXR1cm4gPHBcblx0XHRjbGFzc05hbWU9eyAnamV0LWZiLWJhc2UtY29udHJvbF9faGVscCcgKyAoXG5cdFx0XHRjbGFzc05hbWUgPyBgICR7IGNsYXNzTmFtZSB9YCA6ICcnXG5cdFx0KSB9XG5cdFx0c3R5bGU9eyB7XG5cdFx0XHRmb250U2l6ZTogJzEycHgnLFxuXHRcdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcblx0XHRcdGNvbG9yOiAncmdiKDExNywgMTE3LCAxMTcpJyxcblx0XHRcdG1hcmdpblRvcDogJzBweCcsXG5cdFx0XHQuLi5zdHlsZSxcblx0XHR9IH1cblx0XHR7IC4uLnByb3BzIH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L3A+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlSGVscDsiLCJjb25zdCB7XG5cdCAgICAgIEZsZXgsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gQmFzZUxhYmVsKCB7IGxhYmVsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSApIHtcblx0cmV0dXJuIDxGbGV4XG5cdFx0YWxpZ249eyAnY2VudGVyJyB9XG5cdFx0anVzdGlmeT17ICdmbGV4LXN0YXJ0JyB9XG5cdFx0c3R5bGU9eyB7XG5cdFx0XHRtYXJnaW5Cb3R0b206ICc4cHgnLFxuXHRcdH0gfVxuXHQ+XG5cdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sICovfVxuXHRcdDxsYWJlbFxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYiBsYWJlbCcgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0PlxuXHRcdFx0eyBsYWJlbCB9XG5cdFx0PC9sYWJlbD5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9GbGV4Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxhYmVsOyIsImZ1bmN0aW9uIENvbnRhaW5lcnNMaXN0KCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ICkge1xuXHRyZXR1cm4gPGRpdlxuXHRcdGNsYXNzTmFtZT17ICdqZXQtZmIgZmxleCBmbGV4LWRpci1jb2x1bW4gZ2FwLWRlZmF1bHQnIH1cblx0XHRzdHlsZT17IHtcblx0XHRcdG1hcmdpbkJvdHRvbTogJzFlbScsXG5cdFx0fSB9XG5cdFx0eyAuLi5wcm9wcyB9XG5cdD5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJzTGlzdDsiLCJmdW5jdGlvbiBEZXRhaWxzQ29udGFpbmVyKCB7IGNoaWxkcmVuIH0gKSB7XG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPXsgW1xuXHRcdFx0J2pldC1mYicsXG5cdFx0XHQnZmxleCcsXG5cdFx0XHQnZmxleC1kaXItY29sdW1uJyxcblx0XHRcdCdjb250YWluZXInLFxuXHRcdFx0J2dhcC0xZW0nLFxuXHRcdF0uam9pbiggJyAnICkgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc0NvbnRhaW5lcjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi90b29scyc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5cbmNvbnN0IFN0eWxlZFNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbmA7XG5cbmZ1bmN0aW9uIEdyb3VwZWRTZWxlY3RDb250cm9sKCB7XG5cdGlkLFxuXHRsYWJlbCxcblx0b25DaGFuZ2UsXG5cdG9wdGlvbnMgPSBbXSxcblx0dmFsdWUsXG59ICkge1xuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCBldmVudCApID0+IHtcblx0XHRvbkNoYW5nZSggZXZlbnQudGFyZ2V0LnZhbHVlICk7XG5cdH07XG5cblx0Ly8gRGlzYWJsZSByZWFzb246IEEgc2VsZWN0IHdpdGggYW4gb25jaGFuZ2UgdGhyb3dzIGEgd2FybmluZ1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdHJldHVybiAhaXNFbXB0eSggb3B0aW9ucyApICYmIChcblx0XHQ8U3R5bGVkU2VsZWN0XG5cdFx0XHRpZD17IGlkIH1cblx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtc2VsZWN0LWNvbnRyb2xfX2lucHV0XCJcblx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHQ+XG5cdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdGtleT17IGAkeyBsYWJlbCB9LXBsYWNlaG9sZGVyYCB9XG5cdFx0XHRcdHZhbHVlPXsgYGAgfVxuXHRcdFx0PnsgYC0tYCB9PC9vcHRpb24+XG5cdFx0XHR7IG9wdGlvbnMubWFwKCAoIG9wdEdyb3VwLCBncm91cEluZGV4ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gIWlzRW1wdHkoIG9wdEdyb3VwLnZhbHVlcyApICYmIDxvcHRncm91cFxuXHRcdFx0XHRcdGtleT17IGAkeyBvcHRHcm91cC5sYWJlbCB9LSR7IGdyb3VwSW5kZXggfWAgfVxuXHRcdFx0XHRcdGxhYmVsPXsgb3B0R3JvdXAubGFiZWwgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBvcHRHcm91cC52YWx1ZXMubWFwKCAoIG9wdGlvbiwgaW5kZXggKSA9PlxuXHRcdFx0XHRcdFx0PG9wdGlvblxuXHRcdFx0XHRcdFx0XHRrZXk9eyBgJHsgb3B0aW9uLnZhbHVlIH0tJHsgaW5kZXggfS0keyBncm91cEluZGV4IH1gIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBvcHRpb24udmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IG9wdGlvbi5kaXNhYmxlZCB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHsgb3B0aW9uLmxhYmVsIH1cblx0XHRcdFx0XHRcdDwvb3B0aW9uPixcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9vcHRncm91cD47XG5cdFx0XHR9ICkgfVxuXHRcdDwvU3R5bGVkU2VsZWN0PlxuXHQpO1xuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwZWRTZWxlY3RDb250cm9sOyIsImZ1bmN0aW9uIEhvcml6b250YWxMaW5lKCBwcm9wcyApIHtcblx0cmV0dXJuIDxociBzdHlsZT17IHsgLi4ucHJvcHMgfSB9Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxMaW5lOyIsImZ1bmN0aW9uIEhvdmVyQ29udGFpbmVyKCB7IGlzSG92ZXIgPSBmYWxzZSwgY2hpbGRyZW4gfSApIHtcblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9eyBbXG5cdFx0XHQnamV0LWZiJyxcblx0XHRcdGlzSG92ZXIgPyAnc2hvdycgOiAnaGlkZScsXG5cdFx0XHQncC1hYnNvbHV0ZScsXG5cdFx0XHQnd2gtMTAwJyxcblx0XHRcdCdmbGV4LWNlbnRlcicsXG5cdFx0XHQnZ2FwLTA1ZW0nLFxuXHRcdF0uam9pbiggJyAnICkgfVxuXHRcdHN0eWxlPXsge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZmNjJyxcblx0XHRcdHRyYW5zaXRpb246ICcwLjNzJyxcblx0XHR9IH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdmVyQ29udGFpbmVyOyIsImNvbnN0IHtcblx0XHQgIEJ1dHRvbixcblx0XHQgIFBvcG92ZXIsXG5cdFx0ICBQYW5lbEJvZHksXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0XHQgIHVzZVN0YXRlLFxuXHQgIH0gPSB3cC5lbGVtZW50O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gTWFjcm9zSW5zZXJ0ZXIoIHtcblx0XHRcdFx0XHRcdFx0IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHQgZmllbGRzLFxuXHRcdFx0XHRcdFx0XHQgb25GaWVsZENsaWNrLFxuXHRcdFx0XHRcdFx0XHQgY3VzdG9tTWFjcm9zLFxuXHRcdFx0XHRcdFx0XHQgekluZGV4ID0gMTAwMDAwMCxcblx0XHRcdFx0XHRcdFx0IC4uLnBvcG92ZXJQcm9wc1xuXHRcdFx0XHRcdFx0IH0gKSB7XG5cblx0Y29uc3QgWyBzaG93UG9wb3Zlciwgc2V0UG9wb3ZlclN0YXRlIF0gPSB1c2VTdGF0ZSggKCkgPT4gZmFsc2UgKTtcblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy1pbnNlcnRlclwiPlxuXHRcdDxCdXR0b25cblx0XHRcdGlzVGVydGlhcnlcblx0XHRcdGlzU21hbGxcblx0XHRcdGljb249eyBzaG93UG9wb3ZlciA/ICduby1hbHQnIDogJ2FkbWluLXRvb2xzJyB9XG5cdFx0XHRsYWJlbD17ICdJbnNlcnQgbWFjcm9zJyB9XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy10cmlnZ2VyXCJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdHNldFBvcG92ZXJTdGF0ZSggcHJldiA9PiAhIHByZXYgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0eyBzaG93UG9wb3ZlciAmJiAoXG5cdFx0XHQ8UG9wb3ZlclxuXHRcdFx0XHRzdHlsZT17IHsgekluZGV4IH0gfVxuXHRcdFx0XHRwb3NpdGlvbj17ICdib3R0b20gbGVmdCcgfVxuXHRcdFx0XHR7IC4uLnBvcG92ZXJQcm9wcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgZmllbGRzLmxlbmd0aCAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0Zvcm0gRmllbGRzJyB9PlxuXHRcdFx0XHRcdHsgZmllbGRzLm1hcCggZmllbGQgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXsgJ2ZpZWxkXycgKyBmaWVsZC5uYW1lIH0+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0b25GaWVsZENsaWNrKCBmaWVsZC5uYW1lIClcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0PnsgJyUnICsgZmllbGQubmFtZSArICclJyB9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj47XG5cdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cblx0XHRcdFx0eyBjdXN0b21NYWNyb3MgJiYgPFBhbmVsQm9keSB0aXRsZT17ICdDdXN0b20gTWFjcm9zJyB9PlxuXHRcdFx0XHRcdHsgY3VzdG9tTWFjcm9zLm1hcCggbWFjcm9zID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdtYWNyb3NfJyArIG1hY3JvcyB9PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggbWFjcm9zIClcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0PnsgJyUnICsgbWFjcm9zICsgJyUnIH08L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2Pjtcblx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHQ8L1BhbmVsQm9keT4gfVxuXHRcdFx0PC9Qb3BvdmVyPlxuXHRcdCkgfVxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hY3Jvc0luc2VydGVyOyIsImltcG9ydCBCYXNlSGVscCBmcm9tICcuL0Jhc2VIZWxwJztcblxuY29uc3Qge1xuXHQgICAgICBGb3JtVG9nZ2xlLFxuXHQgICAgICBCYXNlQ29udHJvbCxcblx0ICAgICAgRmxleCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUluc3RhbmNlSWQsXG4gICAgICB9ID0gd3AuY29tcG9zZTtcblxuZnVuY3Rpb24gVG9nZ2xlQ29udHJvbCgge1xuXHRjaGVja2VkID0gZmFsc2UsXG5cdGRpc2FibGVkID0gZmFsc2UsXG5cdG9uQ2hhbmdlID0gKCkgPT4ge30sXG5cdGNoaWxkcmVuID0gbnVsbCxcblx0aGVscCA9IG51bGwsXG5cdGZsZXhMYWJlbFByb3BzID0ge30sXG5cdG91dHNpZGVMYWJlbCA9IG51bGwsXG5cdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tID0gZmFsc2UsXG5cdC4uLnByb3BzXG59ICkge1xuXHRjb25zdCBIZWxwID0gaGVscDtcblxuXHRjb25zdCBpbnN0YW5jZUlkID0gdXNlSW5zdGFuY2VJZCggVG9nZ2xlQ29udHJvbCApO1xuXHRjb25zdCBpZCAgICAgICAgID0gYGluc3BlY3Rvci1qZmItdG9nZ2xlLWNvbnRyb2wtJHsgaW5zdGFuY2VJZCB9YDtcblxuXHRyZXR1cm4gPEJhc2VDb250cm9sXG5cdFx0aWQ9eyBpZCB9XG5cdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b209eyBfX25leHRIYXNOb01hcmdpbkJvdHRvbSB9XG5cdD5cblx0XHQ8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cblx0XHRcdDxGbGV4XG5cdFx0XHRcdGdhcD17IDMgfVxuXHRcdFx0XHRhbGlnbj1cImZsZXgtc3RhcnRcIlxuXHRcdFx0XHRqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG5cdFx0XHRcdHsgLi4uZmxleExhYmVsUHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8Rm9ybVRvZ2dsZVxuXHRcdFx0XHRcdGlkPXsgaWQgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBjaGVja2VkIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggZXZlbnQgKSA9PiBvbkNoYW5nZSggZXZlbnQudGFyZ2V0LmNoZWNrZWQgKSB9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPXsgaWQgfT5cblx0XHRcdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0eyBvdXRzaWRlTGFiZWwgfVxuXHRcdFx0PC9GbGV4PlxuXHRcdFx0eyAnc3RyaW5nJyA9PT0gdHlwZW9mIEhlbHBcblx0XHRcdCAgPyA8QmFzZUhlbHA+eyBIZWxwIH08L0Jhc2VIZWxwPlxuXHRcdFx0ICA6IEhlbHAgJiYgPEhlbHAvPiB9XG5cdFx0PC9GbGV4PlxuXHQ8L0Jhc2VDb250cm9sPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQ29udHJvbDsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQoIHt9ICk7IiwiaW1wb3J0IER5bmFtaWNJdGVtQm9keSBmcm9tICcuL0R5bmFtaWNJdGVtQm9keSc7XG5pbXBvcnQgQmxvY2tWYWx1ZUl0ZW1Db250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvYmxvY2sudmFsdWUuaXRlbS5jb250ZXh0JztcbmltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tICcuLi8uLi9hY3Rpb24tbW9kYWwvY29tcG9uZW50cy9BY3Rpb25Nb2RhbCc7XG5pbXBvcnQgaHVtYW5SZWFkYWJsZVByZXNldCBmcm9tICcuLi8uLi9wcmVzZXQvaGVscGVycy9odW1hblJlYWRhYmxlUHJlc2V0JztcbmltcG9ydCBIdW1hblJlYWRhYmxlQ29uZGl0aW9uc1xuXHRmcm9tICcuLi8uLi9ibG9jay1jb25kaXRpb25zL2NvbXBvbmVudHMvSHVtYW5SZWFkYWJsZUNvbmRpdGlvbnMnO1xuaW1wb3J0IEhvdmVyQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSG92ZXJDb250YWluZXInO1xuaW1wb3J0IERldGFpbHNDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRhaWxzQ29udGFpbmVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIER5bmFtaWNJdGVtKCB7IGN1cnJlbnQsIHVwZGF0ZSwgaXNPcGVuTW9kYWwsIHNldE9wZW5Nb2RhbCB9ICkge1xuXHRjb25zdCB1cGRhdGVDdXJyZW50ID0gc2V0dGluZ3MgPT4ge1xuXHRcdHVwZGF0ZSggdmFsdWUgPT4ge1xuXHRcdFx0Y29uc3QgZ3JvdXBzID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHZhbHVlLmdyb3VwcyApICk7XG5cblx0XHRcdGZvciAoIGNvbnN0IGdyb3VwSW5kZXggaW4gZ3JvdXBzICkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IWdyb3Vwcy5oYXNPd25Qcm9wZXJ0eSggZ3JvdXBJbmRleCApIHx8XG5cdFx0XHRcdFx0Y3VycmVudC5pZCAhPT0gZ3JvdXBzWyBncm91cEluZGV4IF0uaWRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Z3JvdXBzWyBncm91cEluZGV4IF0gPSB7XG5cdFx0XHRcdFx0Li4uZ3JvdXBzWyBncm91cEluZGV4IF0sXG5cdFx0XHRcdFx0Li4uc2V0dGluZ3MsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4geyBncm91cHMgfTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgZGVsZXRlQ3VycmVudCA9ICgpID0+IHtcblx0XHR1cGRhdGUoIHZhbHVlID0+IHtcblx0XHRcdGNvbnN0IGdyb3VwcyA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB2YWx1ZS5ncm91cHMgKSApO1xuXG5cdFx0XHRyZXR1cm4geyBncm91cHM6IGdyb3Vwcy5maWx0ZXIoICggeyBpZCB9ICkgPT4gaWQgIT09IGN1cnJlbnQuaWQgKSB9O1xuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCBbIHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblx0Y29uc3QgWyBpc0hvdmVyLCBzZXRIb3ZlciBdICAgICAgID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0Y29uc3QgaXNFbXB0eSA9IDEgPj0gT2JqZWN0LmtleXMoIGN1cnJlbnQgKT8ubGVuZ3RoO1xuXG5cdHJldHVybiA8QmxvY2tWYWx1ZUl0ZW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXsge1xuXHRcdHVwZGF0ZTogdXBkYXRlQ3VycmVudCxcblx0XHRjdXJyZW50LFxuXHR9IH0+XG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZiIHAtcmVsYXRpdmVcIlxuXHRcdFx0b25Nb3VzZU92ZXI9eyAoKSA9PiBzZXRIb3ZlciggdHJ1ZSApIH1cblx0XHRcdG9uRm9jdXM9eyAoKSA9PiBzZXRIb3ZlciggdHJ1ZSApIH1cblx0XHRcdG9uTW91c2VPdXQ9eyAoKSA9PiBzZXRIb3ZlciggZmFsc2UgKSB9XG5cdFx0XHRvbkJsdXI9eyAoKSA9PiBzZXRIb3ZlciggZmFsc2UgKSB9XG5cdFx0PlxuXHRcdFx0PEhvdmVyQ29udGFpbmVyIGlzSG92ZXI9eyBpc0hvdmVyIH0+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRpY29uPXsgc2hvd01vZGFsID8gJ25vLWFsdCcgOiAnZWRpdCcgfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93TW9kYWwoIHByZXYgPT4gIXByZXYgKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IF9fKCAnRWRpdCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdGljb249eyAndHJhc2gnIH1cblx0XHRcdFx0XHRvbkNsaWNrPXsgZGVsZXRlQ3VycmVudCB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IF9fKCAnRGVsZXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvSG92ZXJDb250YWluZXI+XG5cdFx0XHQ8RGV0YWlsc0NvbnRhaW5lcj5cblx0XHRcdFx0eyBpc0VtcHR5ID8gPGRpdlxuXHRcdFx0XHRcdGRhdGEtdGl0bGU9eyBfXyhcblx0XHRcdFx0XHRcdCdUaGlzIHZhbHVlIGl0ZW0gaXMgZW1wdHknLFxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQvPiA6IDw+XG5cdFx0XHRcdFx0ICA8c3BhblxuXHRcdFx0XHRcdFx0ICBkYXRhLXRpdGxlPXsgX18oICdTZXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICc6JyB9XG5cdFx0XHRcdFx0XHQgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge1xuXHRcdFx0XHRcdFx0XHQgIF9faHRtbDogaHVtYW5SZWFkYWJsZVByZXNldCggY3VycmVudC50b19zZXQgKSxcblx0XHRcdFx0XHRcdCAgfSB9XG5cdFx0XHRcdFx0ICAvPlxuXHRcdFx0XHRcdCAgPEh1bWFuUmVhZGFibGVDb25kaXRpb25zXG5cdFx0XHRcdFx0XHQgIGNvbmRpdGlvbnM9eyBjdXJyZW50Py5jb25kaXRpb25zIH1cblx0XHRcdFx0XHQgIC8+XG5cdFx0XHRcdCAgPC8+IH1cblx0XHRcdDwvRGV0YWlsc0NvbnRhaW5lcj5cblx0XHQ8L2Rpdj5cblx0XHR7IChcblx0XHRcdHNob3dNb2RhbCB8fCBpc09wZW5Nb2RhbCA9PT0gY3VycmVudC5pZFxuXHRcdCkgJiYgPEFjdGlvbk1vZGFsXG5cdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiB7XG5cdFx0XHRcdHNldFNob3dNb2RhbCggZmFsc2UgKTtcblx0XHRcdFx0c2V0T3Blbk1vZGFsKCBmYWxzZSApO1xuXHRcdFx0fSB9XG5cdFx0XHR0aXRsZT17IF9fKCAnRWRpdCBEeW5hbWljIFZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdD5cblx0XHRcdDxEeW5hbWljSXRlbUJvZHkvPlxuXHRcdDwvQWN0aW9uTW9kYWw+IH1cblx0PC9CbG9ja1ZhbHVlSXRlbUNvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljSXRlbTsiLCJpbXBvcnQgQmxvY2tWYWx1ZUl0ZW1Db250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvYmxvY2sudmFsdWUuaXRlbS5jb250ZXh0JztcbmltcG9ydCBSZXBlYXRlciBmcm9tICcuLi8uLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyJztcbmltcG9ydCBSZXBlYXRlckFkZE5ldyBmcm9tICcuLi8uLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLmFkZC5uZXcnO1xuaW1wb3J0IEJhc2VIZWxwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFzZUhlbHAnO1xuaW1wb3J0IFJlcGVhdGVyU3RhdGUgZnJvbSAnLi4vLi4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlci5zdGF0ZSc7XG5pbXBvcnQgdXNlT25VcGRhdGVNb2RhbCBmcm9tICcuLi8uLi9hY3Rpb24tbW9kYWwvaG9va3MvdXNlT25VcGRhdGVNb2RhbCc7XG5pbXBvcnQgUHJlc2V0QnV0dG9uIGZyb20gJy4uLy4uL3ByZXNldC9jb21wb25lbnRzL1ByZXNldEJ1dHRvbic7XG5pbXBvcnQgTWFjcm9zRmllbGRzIGZyb20gJy4uLy4uL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb3NGaWVsZHMnO1xuaW1wb3J0IENvbmRpdGlvbkl0ZW0gZnJvbSAnLi4vLi4vYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0NvbmRpdGlvbkl0ZW0nO1xuaW1wb3J0IENsaWVudFNpZGVNYWNyb3MgZnJvbSAnLi4vLi4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL0NsaWVudFNpZGVNYWNyb3MnO1xuaW1wb3J0IENvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlclxuXHRmcm9tICcuLi8uLi9ibG9jay1jb25kaXRpb25zL2NvbXBvbmVudHMvQ29uZGl0aW9uc1JlcGVhdGVyQ29udGV4dFByb3ZpZGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcblx0ICAgICAgdXNlQ29udGV4dCxcblx0ICAgICAgRnJhZ21lbnQsXG5cdCAgICAgIHVzZUVmZmVjdCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuXHQgICAgICBUZXh0YXJlYUNvbnRyb2wsXG5cdCAgICAgIEZsZXhJdGVtLFxuXHQgICAgICBGbGV4LFxuXHQgICAgICBUb2dnbGVDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGhlbHAgPSBbXG5cdHtcblx0XHRrZXk6ICdjb21tYXMnLFxuXHRcdHJlbmRlcjogKCkgPT4gPGxpPlxuXHRcdFx0eyBfXyhcblx0XHRcdFx0YElmIHRoaXMgZmllbGQgc3VwcG9ydHMgbXVsdGlwbGUgdmFsdWVzLCB5b3UgY2FuIHNlcGFyYXRlIHRoZW0gd2l0aCBjb21tYXNgLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH1cblx0XHQ8L2xpPixcblx0fSxcbl07XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG5cdHtcblx0XHR2YWx1ZTogJ29uX2NoYW5nZScsXG5cdFx0bGFiZWw6IF9fKFxuXHRcdFx0J09uIGNoYW5nZSBjb25kaXRpb25zIHJlc3VsdCcsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSxcblx0XHRoZWxwOiBfXyhcblx0XHRcdGBUaGUgdmFsdWUgd2lsbCBiZSBhcHBsaWVkIGlmIGNvbmRpdGlvbiBjaGVjay11cHMgcmV0dXJuIGEgcmVzdWx0IGRpZmZlcmVudCBmcm9tIHRoZSBmaXJzdCBjaGVjay11cCdzIGNhY2hlZCB2YWx1ZWAsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSxcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAnb25jZScsXG5cdFx0bGFiZWw6IF9fKCAnT25jZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGhlbHA6IF9fKFxuXHRcdFx0YFRoZSB2YWx1ZSB3aWxsIGJlIGFwcGxpZWQgb25seSB0aGUgZmlyc3QgdGltZSB0aGUgY29uZGl0aW9uIGlzIG1hdGNoZWRgLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCksXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2Fsd2F5cycsXG5cdFx0bGFiZWw6IF9fKCAnQWx3YXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0aGVscDogX18oXG5cdFx0XHRgVGhlIHZhbHVlIHdpbGwgYmUgYXBwbGllZCBldmVyeSB0aW1lIHRoZSBjb25kaXRpb24gaXMgbWF0Y2hlZGAsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSxcblx0fSxcbl07XG5cbmNvbnN0IGdldEhlbHAgPSBmcmVxdWVuY3kgPT4ge1xuXHRjb25zdCBvcHRpb24gPSBvcHRpb25zLmZpbmQoIGN1cnJlbnQgPT4ge1xuXHRcdHJldHVybiBjdXJyZW50LnZhbHVlID09PSAoXG5cdFx0XHRmcmVxdWVuY3kgPz8gJ29uX2NoYW5nZSdcblx0XHQpO1xuXHR9ICk7XG5cblx0cmV0dXJuIG9wdGlvbi5oZWxwO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIER5bmFtaWNJdGVtQm9keSgpIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIGN1cnJlbnQ6IGN1cnJlbnRWYWx1ZSxcblx0XHQgICAgICB1cGRhdGUsXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBCbG9ja1ZhbHVlSXRlbUNvbnRleHQgKTtcblxuXHRjb25zdCBbIGN1cnJlbnQsIHNldEN1cnJlbnQgXSA9IHVzZVN0YXRlKCAoKSA9PiBjdXJyZW50VmFsdWUgKTtcblxuXHRjb25zdCBbIGN1cnJlbnRIZWxwLCBzZXRDdXJyZW50SGVscCBdID0gdXNlU3RhdGUoXG5cdFx0KCkgPT4gZ2V0SGVscCggY3VycmVudC5mcmVxdWVuY3kgKSxcblx0KTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRzZXRDdXJyZW50SGVscCggZ2V0SGVscCggY3VycmVudC5mcmVxdWVuY3kgKSApO1xuXHR9LCBbIGN1cnJlbnQuZnJlcXVlbmN5IF0gKTtcblxuXHRjb25zdCB1cGRhdGVDdXJyZW50ID0gc2V0dGluZ3MgPT4ge1xuXHRcdHNldEN1cnJlbnQoIHByZXYgPT4gKFxuXHRcdFx0e1xuXHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdH1cblx0XHQpICk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlQ29uZGl0aW9ucyA9IGNvbmRpdGlvbnMgPT4ge1xuXHRcdHVwZGF0ZUN1cnJlbnQoIHtcblx0XHRcdGNvbmRpdGlvbnM6ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjb25kaXRpb25zXG5cdFx0XHQgICAgICAgICAgICA/IGNvbmRpdGlvbnMoIGN1cnJlbnQuY29uZGl0aW9ucyA/PyBbXSApXG5cdFx0XHQgICAgICAgICAgICA6IGNvbmRpdGlvbnMsXG5cdFx0fSApO1xuXHR9O1xuXG5cdHVzZU9uVXBkYXRlTW9kYWwoICgpID0+IHVwZGF0ZSggY3VycmVudCApICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PEZsZXggYWxpZ249eyAnZmxleC1zdGFydCcgfT5cblx0XHRcdDxGbGV4SXRlbSBpc0Jsb2NrPlxuXHRcdFx0XHQ8RmxleFxuXHRcdFx0XHRcdGFsaWduPXsgJ2NlbnRlcicgfVxuXHRcdFx0XHRcdGp1c3RpZnk9eyAnZmxleC1zdGFydCcgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2pldC1mYiBsYWJlbCcgfT5cblx0XHRcdFx0XHRcdHsgX18oICdWYWx1ZSB0byBzZXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDxQcmVzZXRCdXR0b25cblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudC50b19zZXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gdXBkYXRlQ3VycmVudChcblx0XHRcdFx0XHRcdFx0eyB0b19zZXQ6IHZhbCB9LFxuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Q2xpZW50U2lkZU1hY3JvcyB3aXRoVGhpcz5cblx0XHRcdFx0XHRcdDxNYWNyb3NGaWVsZHNcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IG5hbWUgPT4gdXBkYXRlQ3VycmVudCgge1xuXHRcdFx0XHRcdFx0XHRcdHRvX3NldDogYCR7IGN1cnJlbnQudG9fc2V0ID8/ICcnIH0keyBuYW1lIH1gLFxuXHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NsaWVudFNpZGVNYWNyb3M+XG5cdFx0XHRcdDwvRmxleD5cblx0XHRcdFx0PEJhc2VIZWxwPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHsgaGVscC5tYXAoIGhlbHBJdGVtID0+IDxGcmFnbWVudCBrZXk9eyBoZWxwSXRlbS5rZXkgfT5cblx0XHRcdFx0XHRcdFx0eyBoZWxwSXRlbS5yZW5kZXIoKSB9XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiApIH1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L0Jhc2VIZWxwPlxuXHRcdFx0PC9GbGV4SXRlbT5cblx0XHRcdDxGbGV4SXRlbSBpc0Jsb2NrIHN0eWxlPXsgeyBmbGV4OiAzLCBtYXJnaW5MZWZ0OiAndW5zZXQnIH0gfT5cblx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtY29udHJvbC1jbGVhcicgfVxuXHRcdFx0XHRcdGhpZGVMYWJlbEZyb21WaXNpb25cblx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnQudG9fc2V0ID8/ICcnIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbCA9PiB1cGRhdGVDdXJyZW50KCB7IHRvX3NldDogdmFsIH0gKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0ZsZXhJdGVtPlxuXHRcdDwvRmxleD5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0b3B0aW9ucz17IG9wdGlvbnMgfVxuXHRcdFx0dmFsdWU9eyBjdXJyZW50LmZyZXF1ZW5jeSA/PyAnb25fY2hhbmdlJyB9XG5cdFx0XHRsYWJlbD17IF9fKCAnQXBwbHkgdHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGxhYmVsUG9zaXRpb249eyAnc2lkZScgfVxuXHRcdFx0b25DaGFuZ2U9eyBmcmVxdWVuY3kgPT4gdXBkYXRlQ3VycmVudCggeyBmcmVxdWVuY3kgfSApIH1cblx0XHRcdGhlbHA9eyBjdXJyZW50SGVscCB9XG5cdFx0Lz5cblx0XHQ8UmVwZWF0ZXJTdGF0ZSBzdGF0ZT17IHVwZGF0ZUNvbmRpdGlvbnMgfT5cblx0XHRcdDxDb25kaXRpb25zUmVwZWF0ZXJDb250ZXh0UHJvdmlkZXI+XG5cdFx0XHRcdDxSZXBlYXRlciBpdGVtcz17IGN1cnJlbnQuY29uZGl0aW9ucyA/PyBbXSB9PlxuXHRcdFx0XHRcdDxDb25kaXRpb25JdGVtLz5cblx0XHRcdFx0PC9SZXBlYXRlcj5cblx0XHRcdDwvQ29uZGl0aW9uc1JlcGVhdGVyQ29udGV4dFByb3ZpZGVyPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiIGZsZXggamMtc3BhY2UtYmV0d2VlbiBhaS1jZW50ZXInIH1cblx0XHRcdD5cblx0XHRcdFx0PFJlcGVhdGVyQWRkTmV3PlxuXHRcdFx0XHRcdHsgX18oICdBZGQgTmV3IENvbmRpdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9SZXBlYXRlckFkZE5ldz5cblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiIG0tdW5zZXQgY2xlYXItY29udHJvbCcgfVxuXHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHQnU2V0IHZhbHVlIG9ubHkgaWYgZmllbGQgaXMgZW1wdHknLFxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBjdXJyZW50LnNldF9vbl9lbXB0eSA/PyBmYWxzZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gdXBkYXRlQ3VycmVudChcblx0XHRcdFx0XHRcdHsgc2V0X29uX2VtcHR5OiB2YWwgfSxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvUmVwZWF0ZXJTdGF0ZT5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljSXRlbUJvZHk7IiwiaW1wb3J0IER5bmFtaWNJdGVtIGZyb20gJy4vRHluYW1pY0l0ZW0nO1xuaW1wb3J0IFRvb2xzIGZyb20gJy4uLy4uL3Rvb2xzJztcbmltcG9ydCBCYXNlSGVscCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhc2VIZWxwJztcbmltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlVW5pcUtleSBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlVW5pcUtleSc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSXNIYXNBdHRyaWJ1dGUnO1xuaW1wb3J0IENvbnRhaW5lcnNMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyc0xpc3QnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBEeW5hbWljVmFsdWVzKCkge1xuXHRjb25zdCBbIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IHVuaXFLZXkgPSB1c2VVbmlxS2V5KCk7XG5cdGNvbnN0IHZhbHVlICAgPSBhdHRyaWJ1dGVzLnZhbHVlID8/IHt9O1xuXHRjb25zdCBncm91cHMgID0gdmFsdWUuZ3JvdXBzID8/IFtdO1xuXG5cdGNvbnN0IFsgb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdGlmICggIXVzZUlzSGFzQXR0cmlidXRlKCAndmFsdWUnICkgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBvckdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoXG5cdFx0Ly8gRXhjbHVkZSBmaXJzdCBpdGVtXG5cdFx0KCBjLCBpbmRleCApID0+IDAgIT09IGluZGV4LFxuXHQpO1xuXG5cdGNvbnN0IHVwZGF0ZVZhbHVlID0gc2V0dGluZ3MgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdC4uLmF0dHJpYnV0ZXMsXG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHQuLi52YWx1ZSxcblx0XHRcdFx0Li4uKFxuXHRcdFx0XHRcdCdmdW5jdGlvbicgPT09IHR5cGVvZiBzZXR0aW5nc1xuXHRcdFx0XHRcdD8gc2V0dGluZ3MoIHZhbHVlIClcblx0XHRcdFx0XHQ6IHNldHRpbmdzXG5cdFx0XHRcdCksXG5cdFx0XHR9LFxuXHRcdH0gKTtcblx0fTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8QmFzZUhlbHA+XG5cdFx0XHR7IF9fKFxuXHRcdFx0XHRgT3IgdXNlIGEgY29uZGl0aW9uLWRlcGVuZGVudCB2YWx1ZWAsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgKyAnICcgfVxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0b25DbGljaz17ICgpID0+IHt9IH1cblx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRgRm9ybWVyIFNldCBWYWx1ZSBmdW5jdGlvbmFsaXR5LCBtb3ZlZCBmcm9tIHRoZSBDb25kaXRpb25hbCBCbG9ja2AsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHQpIH1cblx0XHRcdFx0c2hvd1Rvb2x0aXBcblx0XHRcdD4oPyk8L0J1dHRvbj5cblx0XHQ8L0Jhc2VIZWxwPlxuXHRcdHsgQm9vbGVhbiggZ3JvdXBzLmxlbmd0aCApID8gPENvbnRhaW5lcnNMaXN0PlxuXHRcdFx0PER5bmFtaWNJdGVtXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoIGdyb3Vwc1sgMCBdLmlkICkgfVxuXHRcdFx0XHRjdXJyZW50PXsgZ3JvdXBzWyAwIF0gfVxuXHRcdFx0XHR1cGRhdGU9eyB1cGRhdGVWYWx1ZSB9XG5cdFx0XHRcdGlzT3Blbk1vZGFsPXsgb3Blbk1vZGFsIH1cblx0XHRcdFx0c2V0T3Blbk1vZGFsPXsgc2V0T3Blbk1vZGFsIH1cblx0XHRcdC8+XG5cdFx0XHR7IEJvb2xlYW4oIG9yR3JvdXBzLmxlbmd0aCApICYmIG9yR3JvdXBzLm1hcCggY3VycmVudCA9PiA8PlxuXHRcdFx0XHQ8Yj57IF9fKCAnT1InLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9iPlxuXHRcdFx0XHQ8RHluYW1pY0l0ZW1cblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCBjdXJyZW50LmlkICkgfVxuXHRcdFx0XHRcdGN1cnJlbnQ9eyBjdXJyZW50IH1cblx0XHRcdFx0XHR1cGRhdGU9eyB1cGRhdGVWYWx1ZSB9XG5cdFx0XHRcdFx0aXNPcGVuTW9kYWw9eyBvcGVuTW9kYWwgfVxuXHRcdFx0XHRcdHNldE9wZW5Nb2RhbD17IHNldE9wZW5Nb2RhbCB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8Lz4gKSB9XG5cdFx0PC9Db250YWluZXJzTGlzdD4gOiBudWxsIH1cblx0XHQ8QnV0dG9uXG5cdFx0XHRpY29uPXsgJ3BsdXMtYWx0MicgfVxuXHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gVG9vbHMuZ2V0UmFuZG9tSUQoKTtcblxuXHRcdFx0XHR1cGRhdGVWYWx1ZSgge1xuXHRcdFx0XHRcdGdyb3VwczogW1xuXHRcdFx0XHRcdFx0Li4uZ3JvdXBzLFxuXHRcdFx0XHRcdFx0eyBpZCwgY29uZGl0aW9uczogWyB7IF9fdmlzaWJsZTogdHJ1ZSB9IF0gfSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0c2V0T3Blbk1vZGFsKCBpZCApO1xuXHRcdFx0fSB9XG5cdFx0PlxuXHRcdFx0eyBfXyggJ0FkZCBEeW5hbWljIFZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvQnV0dG9uPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNWYWx1ZXM7IiwiY29uc3QgeyB1c2VTZWxlY3QgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIHVzZURlZmF1bHRFdmVudHMoKSB7XG5cdGNvbnN0IGV2ZW50c09iamVjdHMgPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2pldC1mb3Jtcy9ldmVudHMnICkuZ2V0QWx3YXlzVHlwZXMoKSApO1xuXHRjb25zdCBldmVudHMgICAgICAgID0gW107XG5cblx0Zm9yICggY29uc3QgeyB2YWx1ZSB9IG9mIGV2ZW50c09iamVjdHMgKSB7XG5cdFx0ZXZlbnRzLnB1c2goIHZhbHVlICk7XG5cdH1cblxuXHRyZXR1cm4gWyAuLi5uZXcgU2V0KCBldmVudHMgKSBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEZWZhdWx0RXZlbnRzOyIsImNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIHVzZUR5bmFtaWNFdmVudHMoKSB7XG5cdHJldHVybiB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2pldC1mb3Jtcy9ldmVudHMnICkuZ2V0RHluYW1pY1R5cGVzKCkubWFwKFxuXHRcdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSxcblx0XHQpLFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEeW5hbWljRXZlbnRzOyIsImltcG9ydCB1c2VEZWZhdWx0RXZlbnRzIGZyb20gJy4vdXNlRGVmYXVsdEV2ZW50cyc7XG5pbXBvcnQgdXNlRXZlbnRzRnJvbUdhdGV3YXlzIGZyb20gJy4vdXNlRXZlbnRzRnJvbUdhdGV3YXlzJztcbmltcG9ydCB1c2VFdmVudHNGcm9tQWN0aW9ucyBmcm9tICcuL3VzZUV2ZW50c0Zyb21BY3Rpb25zJztcbmltcG9ydCB1c2VEeW5hbWljRXZlbnRzIGZyb20gJy4vdXNlRHluYW1pY0V2ZW50cyc7XG5cbmNvbnN0IHsgdXNlU2VsZWN0IH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiB1c2VFdmVudHMoIGFjdGlvbiApIHtcblx0Y29uc3QgbGlzdCA9IFtcblx0XHQuLi51c2VEZWZhdWx0RXZlbnRzKCBhY3Rpb24gKSxcblx0XHQuLi51c2VFdmVudHNGcm9tR2F0ZXdheXMoIGFjdGlvbiApLFxuXHRcdC4uLnVzZUV2ZW50c0Zyb21BY3Rpb25zKCBhY3Rpb24gKSxcblx0XHQuLi51c2VEeW5hbWljRXZlbnRzKCBhY3Rpb24gKSxcblx0XTtcblxuXHRyZXR1cm4gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdqZXQtZm9ybXMvZXZlbnRzJyApLmZpbHRlckxpc3QoXG5cdFx0XHRhY3Rpb24udHlwZSxcblx0XHRcdGxpc3QsXG5cdFx0KSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRXZlbnRzOyIsImltcG9ydCB1c2VTZWxlY3RQb3N0TWV0YSBmcm9tICcuLi8uLi9ob29rcy91c2VTZWxlY3RQb3N0TWV0YSc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIHVzZUV2ZW50c0Zyb21BY3Rpb25zKCB7IGluZGV4IH0gKSB7XG5cdGNvbnN0IGFjdGlvbnNNZXRhID0gdXNlU2VsZWN0UG9zdE1ldGEoICdfamZfYWN0aW9ucycgKTtcblx0Y29uc3QgYWN0aW9uc01hcCAgPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2pldC1mb3Jtcy9hY3Rpb25zJyApLmdldEFjdGlvbnNNYXAoKSxcblx0XHRbXSxcblx0KTtcblxuXHRhY3Rpb25zTWV0YS5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0Y29uc3QgZXZlbnRzID0gW107XG5cblx0Zm9yICggY29uc3QgYWN0aW9uIG9mIGFjdGlvbnNNZXRhICkge1xuXHRcdGNvbnN0IGNhbGxiYWNrID0gYWN0aW9uc01hcD8uWyBhY3Rpb24udHlwZSBdPy5wcm92aWRlRXZlbnRzO1xuXG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGJhY2sgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB7IFsgYWN0aW9uLnR5cGUgXTogY3VycmVudCA9IHt9IH0gPSBhY3Rpb24uc2V0dGluZ3M7XG5cblx0XHRldmVudHMucHVzaCggLi4uY2FsbGJhY2soIGN1cnJlbnQgKSApO1xuXHR9XG5cblx0cmV0dXJuIFsgLi4ubmV3IFNldCggZXZlbnRzICkgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRXZlbnRzRnJvbUFjdGlvbnM7IiwiaW1wb3J0IHVzZVNlbGVjdFBvc3RNZXRhIGZyb20gJy4uLy4uL2hvb2tzL3VzZVNlbGVjdFBvc3RNZXRhJztcblxuY29uc3QgeyB1c2VTZWxlY3QgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIHVzZUV2ZW50c0Zyb21HYXRld2F5cygpIHtcblx0Y29uc3QgZ2F0ZXdheXMgICAgICAgICAgPSB1c2VTZWxlY3RQb3N0TWV0YSggJ19qZl9nYXRld2F5cycgKTtcblx0Y29uc3QgeyBzY2VuYXJpbyA9IHt9IH0gPSBnYXRld2F5c1sgZ2F0ZXdheXM/LmdhdGV3YXkgXSA/PyB7fTtcblxuXHRyZXR1cm4gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiB7XG5cdFx0XHRjb25zdCBldmVudHNPYmplY3RzID0gKFxuXHRcdFx0XHRzZWxlY3QoICdqZXQtZm9ybXMvZXZlbnRzJyApLmdldEdhdGV3YXlUeXBlcygpXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCBldmVudHMgPSBbXTtcblxuXHRcdFx0Zm9yICggY29uc3QgZXZlbnQgb2YgZXZlbnRzT2JqZWN0cyApIHtcblx0XHRcdFx0Y29uc3QgY29ycmVjdEdhdGV3YXkgID0gZXZlbnQuZ2F0ZXdheVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA/IGV2ZW50LmdhdGV3YXkgPT09IGdhdGV3YXlzLmdhdGV3YXlcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlO1xuXHRcdFx0XHRjb25zdCBjb3JyZWN0U2NlbmFyaW8gPSBldmVudC5zY2VuYXJpb1xuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA/IGV2ZW50LnNjZW5hcmlvID09PSBzY2VuYXJpbz8uaWRcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlO1xuXG5cdFx0XHRcdGlmICggY29ycmVjdEdhdGV3YXkgJiYgY29ycmVjdFNjZW5hcmlvICkge1xuXHRcdFx0XHRcdGV2ZW50cy5wdXNoKCBldmVudC52YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbIC4uLm5ldyBTZXQoIGV2ZW50cyApIF07XG5cdFx0fSxcblx0XHRbIGdhdGV3YXlzLmdhdGV3YXksIHNjZW5hcmlvPy5pZCBdLFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VFdmVudHNGcm9tR2F0ZXdheXM7IiwiaW1wb3J0IHVzZUV2ZW50cyBmcm9tICcuL3VzZUV2ZW50cyc7XG5cbmNvbnN0IHsgdXNlU2VsZWN0IH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0RXZlbnRzKCkge1xuXHRjb25zdCBjdXJyZW50QWN0aW9uID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdqZXQtZm9ybXMvYWN0aW9ucycgKS5nZXRDdXJyZW50QWN0aW9uKCksXG5cdCk7XG5cblx0cmV0dXJuIHVzZUV2ZW50cyggY3VycmVudEFjdGlvbiApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RXZlbnRzOyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyKCBpdGVtcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnJlZ2lzdGVyLFxuXHRcdFx0aXRlbXMsXG5cdFx0fTtcblx0fSxcblx0bG9ja0FjdGlvbnMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5sb2NrQWN0aW9ucyxcblx0XHR9O1xuXHR9LFxuXHR1blJlZ2lzdGVyKCB0eXBlcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnVuUmVnaXN0ZXIsXG5cdFx0XHR0eXBlcyxcblx0XHR9O1xuXHR9LFxuXHRjbGVhckR5bmFtaWNFdmVudHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5jbGVhckR5bmFtaWNFdmVudHMsXG5cdFx0fTtcblx0fSxcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRyZWdpc3RlcjogJ1JFR0lTVEVSJyxcblx0dW5SZWdpc3RlcjogJ1VOUkVHSVNURVInLFxuXHRsb2NrQWN0aW9uczogJ0xPQ0tfQUNUSU9OUycsXG5cdGNsZWFyRHluYW1pY0V2ZW50czogJ0NMRUFSX0RZTkFNSUNfRVZFTlRTJyxcbn07XG5cblxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRbIGNvbnN0YW50cy5yZWdpc3RlciBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IHsgdHlwZXMgfSA9IHN0YXRlO1xuXG5cdFx0Zm9yICggY29uc3QgaXRlbSBvZiBhY3Rpb24uaXRlbXMgKSB7XG5cdFx0XHRpdGVtLnRpdGxlID0gaXRlbS5sYWJlbDtcblxuXHRcdFx0Y29uc3QgaXNzZXRJbmRleCA9IHNlbGVjdG9ycy5nZXRUeXBlSW5kZXgoIHN0YXRlLCBpdGVtLnZhbHVlICk7XG5cblx0XHRcdC8vIGlzIG5ldyBldmVudCB0eXBlXG5cdFx0XHRpZiAoIC0xID09PSBpc3NldEluZGV4ICkge1xuXHRcdFx0XHR0eXBlcy5wdXNoKCB7IC4uLml0ZW0gfSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHR5cGVzWyBpc3NldEluZGV4IF0gPSB7IC4uLml0ZW0gfTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHR0eXBlcyxcblx0XHR9O1xuXHR9LFxuXHRbIGNvbnN0YW50cy5sb2NrQWN0aW9ucyBdKCBzdGF0ZSApIHtcblx0XHRmb3IgKCBjb25zdCB7IGlkLCBzZWxmOiBhY3Rpb25TZWxmIH0gb2Ygd2luZG93LmpldEZvcm1BY3Rpb25UeXBlcyApIHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSB3aW5kb3dbIGFjdGlvblNlbGYgXSA/PyBmYWxzZTtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VycmVudCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0ICAgICAgX191bnN1cHBvcnRlZF9ldmVudHM6IHVuU3VwLFxuXHRcdFx0XHQgICAgICBfX3N1cHBvcnRlZF9ldmVudHM6IHN1cCxcblx0XHRcdCAgICAgIH0gPSBjdXJyZW50O1xuXG5cdFx0XHRjb25zdCBhY3Rpb24gPSB7XG5cdFx0XHRcdHVuc3VwcG9ydGVkOiBzdGF0ZS50eXBlcy5maWx0ZXIoXG5cdFx0XHRcdFx0KCB7IHNlbGYgfSApID0+IHVuU3VwLmluY2x1ZGVzKCBzZWxmICkgKS5cblx0XHRcdFx0XHRtYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKSxcblx0XHRcdFx0c3VwcG9ydGVkOiBzdGF0ZS50eXBlcy5maWx0ZXIoXG5cdFx0XHRcdFx0KCB7IHNlbGYgfSApID0+IHN1cC5pbmNsdWRlcyggc2VsZiApICkuXG5cdFx0XHRcdFx0bWFwKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlICksXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoICFhY3Rpb24uc3VwcG9ydGVkLmxlbmd0aCAmJiAhYWN0aW9uLnVuc3VwcG9ydGVkLmxlbmd0aCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRlLmxvY2tlZEFjdGlvbnNbIGlkIF0gPSBhY3Rpb247XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRbIGNvbnN0YW50cy51blJlZ2lzdGVyIF0oIHN0YXRlLCBhY3Rpb24gKSB7XG5cdFx0Y29uc3QgeyB0eXBlcyB9ID0gYWN0aW9uO1xuXG5cdFx0c3RhdGUudHlwZXMgPSBzdGF0ZS50eXBlcy5maWx0ZXIoXG5cdFx0XHQoIHsgdmFsdWUgfSApID0+ICF0eXBlcy5pbmNsdWRlcyggdmFsdWUgKSxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRbIGNvbnN0YW50cy5jbGVhckR5bmFtaWNFdmVudHMgXSggc3RhdGUgKSB7XG5cdFx0c3RhdGUudHlwZXMgPSBzdGF0ZS50eXBlcy5maWx0ZXIoXG5cdFx0XHQoIHsgaXNEeW5hbWljID0gZmFsc2UgfSApID0+ICFpc0R5bmFtaWMsXG5cdFx0KTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcbn07IiwiaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcblxuY29uc3QgeyBjcmVhdGVSZWR1eFN0b3JlIH0gPSB3cC5kYXRhO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCAnamV0LWZvcm1zL2V2ZW50cycsIHtcblx0cmVkdWNlcixcblx0YWN0aW9ucyxcblx0c2VsZWN0b3JzLFxufSApO1xuIiwiaW1wb3J0IGRpc3BhdGNoZXJzIGZyb20gJy4vZGlzcGF0Y2hlcnMnO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0ge1xuXHR0eXBlczogW10sXG5cdGxhYmVsczoge30sXG5cdGxvY2tlZEFjdGlvbnM6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCBzdGF0ZSA9IERFRkFVTFRfU1RBVEUsIGFjdGlvbiApIHtcblx0Y29uc3QgY2FsbGJhY2sgPSBkaXNwYXRjaGVyc1sgYWN0aW9uPy50eXBlIF07XG5cblx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gY2FsbGJhY2soIHN0YXRlLCBhY3Rpb24gKTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZTtcbn0iLCJjb25zdCBzZWxlY3RvcnMgPSB7XG5cdGdldFR5cGVJbmRleCggc3RhdGUsIHNsdWcgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLnR5cGVzLmZpbmRJbmRleCggZXZlbnQgPT4gZXZlbnQudmFsdWUgPT09IHNsdWcgKTtcblx0fSxcblx0Z2V0VHlwZXMoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS50eXBlcztcblx0fSxcblx0Z2V0R2F0ZXdheVR5cGVzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUudHlwZXMuZmlsdGVyKCBldmVudCA9PiAoXG5cdFx0XHQnZ2F0ZXdheScgaW4gZXZlbnRcblx0XHQpICk7XG5cdH0sXG5cdGdldEFsd2F5c1R5cGVzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUudHlwZXMuZmlsdGVyKCBldmVudCA9PiAoXG5cdFx0XHQnYWx3YXlzJyBpbiBldmVudFxuXHRcdCkgKTtcblx0fSxcblx0Z2V0RHluYW1pY1R5cGVzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUudHlwZXMuZmlsdGVyKCAoIHsgaXNEeW5hbWljIH0gKSA9PiBpc0R5bmFtaWMgKTtcblx0fSxcblx0Z2V0VHlwZSggc3RhdGUsIHNsdWcgKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBzZWxlY3RvcnMuZ2V0VHlwZUluZGV4KCBzdGF0ZSwgc2x1ZyApO1xuXG5cdFx0cmV0dXJuIHN0YXRlLnR5cGVzWyBpbmRleCBdO1xuXHR9LFxuXHRnZXRVbnN1cHBvcnRlZCggc3RhdGUsIGFjdGlvbklkICkge1xuXHRcdGNvbnN0IGFjdGlvbiA9IHN0YXRlLmxvY2tlZEFjdGlvbnNbIGFjdGlvbklkIF0gPz8gZmFsc2U7XG5cblx0XHRpZiAoIGZhbHNlID09PSBhY3Rpb24gKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjdGlvbi51bnN1cHBvcnRlZDtcblx0fSxcblx0Z2V0U3VwcG9ydGVkKCBzdGF0ZSwgYWN0aW9uSWQgKSB7XG5cdFx0Y29uc3QgYWN0aW9uID0gc3RhdGUubG9ja2VkQWN0aW9uc1sgYWN0aW9uSWQgXSA/PyBmYWxzZTtcblxuXHRcdGlmICggZmFsc2UgPT09IGFjdGlvbiApIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWN0aW9uLnN1cHBvcnRlZDtcblx0fSxcblx0aXNWYWxpZCggc3RhdGUsIGFjdGlvbklkLCBldmVudFNsdWcgKSB7XG5cdFx0Y29uc3QgdW5zdXBwb3J0ZWQgPSBzZWxlY3RvcnMuZ2V0VW5zdXBwb3J0ZWQoIHN0YXRlLCBhY3Rpb25JZCApO1xuXG5cdFx0aWYgKCB1bnN1cHBvcnRlZC5sZW5ndGggJiYgdW5zdXBwb3J0ZWQuaW5jbHVkZXMoIGV2ZW50U2x1ZyApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN1cHBvcnRlZCA9IHNlbGVjdG9ycy5nZXRTdXBwb3J0ZWQoIHN0YXRlLCBhY3Rpb25JZCApO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdCFzdXBwb3J0ZWQubGVuZ3RoIHx8IHN1cHBvcnRlZC5pbmNsdWRlcyggZXZlbnRTbHVnIClcblx0XHQpO1xuXHR9LFxuXHRmaWx0ZXJMaXN0KCBzdGF0ZSwgYWN0aW9uSWQsIGV2ZW50TGlzdCApIHtcblx0XHRyZXR1cm4gZXZlbnRMaXN0LmZpbHRlcihcblx0XHRcdGN1cnJlbnQgPT4gc2VsZWN0b3JzLmlzVmFsaWQoIHN0YXRlLCBhY3Rpb25JZCwgY3VycmVudCApLFxuXHRcdCk7XG5cdH0sXG5cdGdldEhlbHBNYXAoIHN0YXRlICkge1xuXHRcdGNvbnN0IG1hcCA9IHt9O1xuXG5cdFx0Zm9yICggY29uc3QgeyB2YWx1ZSwgaGVscCB9IG9mIHN0YXRlLnR5cGVzICkge1xuXHRcdFx0bWFwWyB2YWx1ZSBdID0gaGVscDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5zZWxlY3RvcnMsXG59OyIsImltcG9ydCB3aXRoU2VsZWN0R2F0ZXdheXMgZnJvbSAnLi4vaG9va3Mvd2l0aFNlbGVjdEdhdGV3YXlzJztcbmltcG9ydCB7IEZldGNoQXBpQnV0dG9uIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuaW1wb3J0IHsgd2l0aFNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmZ1bmN0aW9uIEdhdGV3YXlGZXRjaEJ1dHRvbigge1xuXHRpbml0aWFsTGFiZWwgPSAnVmFsaWQnLFxuXHRsYWJlbCA9ICdJblZhbGlkJyxcblx0YXBpQXJncyA9IHt9LFxuXHRnYXRld2F5UmVxdWVzdElkLFxuXHRsb2FkaW5nR2F0ZXdheSxcblx0b25Mb2FkaW5nID0gKCkgPT4ge30sXG5cdG9uU3VjY2VzcyA9ICgpID0+IHt9LFxuXHRvbkZhaWwgPSAoKSA9PiB7fSxcblx0aXNIaWRkZW4gPSBmYWxzZSxcbn0gKSB7XG5cblx0cmV0dXJuIDxGZXRjaEFwaUJ1dHRvblxuXHRcdGlkPXsgZ2F0ZXdheVJlcXVlc3RJZCB9XG5cdFx0bG9hZGluZ1N0YXRlPXsgbG9hZGluZ0dhdGV3YXkgfVxuXHRcdGluaXRpYWxMYWJlbD17IGluaXRpYWxMYWJlbCB9XG5cdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0YXBpQXJncz17IGFwaUFyZ3MgfVxuXHRcdG9uRmFpbD17IG9uRmFpbCB9XG5cdFx0b25Mb2FkaW5nPXsgb25Mb2FkaW5nIH1cblx0XHRvblN1Y2Nlc3M9eyBvblN1Y2Nlc3MgfVxuXHRcdGlzSGlkZGVuPXsgaXNIaWRkZW4gfVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCggd2l0aFNlbGVjdEdhdGV3YXlzICksXG4pKCBHYXRld2F5RmV0Y2hCdXR0b24gKTsiLCJmdW5jdGlvbiBnYXRld2F5QXR0ciggYXR0ciA9IGZhbHNlLCBpc0VtcHR5ID0gJycgKSB7XG5cdGNvbnN0IGRhdGEgPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuZ2F0ZXdheXM7XG5cblx0aWYgKCAhYXR0ciApIHtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXHRpZiAoICFkYXRhWyBhdHRyIF0gKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3Qgc291cmNlID0gZGF0YVsgYXR0ciBdO1xuXG5cdHJldHVybiBuYW1lID0+IHNvdXJjZVsgbmFtZSBdID8gc291cmNlWyBuYW1lIF0gOiBpc0VtcHR5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYXRld2F5QXR0cjsiLCJpbXBvcnQgZ2F0ZXdheUF0dHIgZnJvbSAnLi9nYXRld2F5QXR0cic7XG5cbmZ1bmN0aW9uIGdhdGV3YXlMYWJlbCggdHlwZSwgaXNFbXB0eSA9ICcnICkge1xuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xuXG5cdHJldHVybiBhdHRyID0+IGxhYmVsKCB0eXBlICkgPyBsYWJlbCggdHlwZSApWyBhdHRyIF0gOiBpc0VtcHR5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYXRld2F5TGFiZWw7IiwiZnVuY3Rpb24gaXNzZXRSZW5kZXJHYXRld2F5KCBpZCwgd2hhdCA9ICdjcmVkJyApIHtcblx0cmV0dXJuIChcblx0XHR3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3QgJiYgd2luZG93LkpldEZCR2F0ZXdheXNMaXN0WyBpZCBdICYmXG5cdFx0d2luZG93LkpldEZCR2F0ZXdheXNMaXN0WyBpZCBdWyB3aGF0IF1cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNzZXRSZW5kZXJHYXRld2F5OyIsImZ1bmN0aW9uIHJlZ2lzdGVyR2F0ZXdheSggaWQsIGNhbGxiYWNrLCBmb3JXaGF0ID0gJ2NyZWQnICkge1xuXHR3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3QgICAgICAgPSB3aW5kb3cuSmV0RkJHYXRld2F5c0xpc3QgfHwge307XG5cdHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSA9IHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSB8fFxuXHRcdHt9O1xuXG5cdHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdFsgaWQgXVsgZm9yV2hhdCBdID0gY2FsbGJhY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyR2F0ZXdheTsiLCJpbXBvcnQgaXNzZXRSZW5kZXJHYXRld2F5IGZyb20gJy4vaXNzZXRSZW5kZXJHYXRld2F5JztcblxuZnVuY3Rpb24gcmVuZGVyR2F0ZXdheSggaWQsIHByb3BzLCB3aGF0ID0gJ2NyZWQnICkge1xuXHRpZiAoICFpc3NldFJlbmRlckdhdGV3YXkoIGlkLCB3aGF0ICkgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y29uc3QgR2F0ZXdheUNvbXBvbmVudCA9IHdpbmRvdy5KZXRGQkdhdGV3YXlzTGlzdFsgaWQgXVsgd2hhdCBdO1xuXG5cdHJldHVybiA8R2F0ZXdheUNvbXBvbmVudCB7IC4uLnByb3BzIH0gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckdhdGV3YXk7IiwiaW1wb3J0IGlzc2V0UmVuZGVyR2F0ZXdheSBmcm9tICcuL2lzc2V0UmVuZGVyR2F0ZXdheSc7XG5pbXBvcnQgcmVuZGVyR2F0ZXdheSBmcm9tICcuL3JlbmRlckdhdGV3YXknO1xuXG5mdW5jdGlvbiByZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyKFxuXHRpZCxcblx0cHJvcHMsXG5cdHdoYXQgICAgICAgID0gJ2NyZWQnLFxuXHRQbGFjZWhvbGRlciA9IG51bGwsXG4pIHtcblx0aWYgKCAhaXNzZXRSZW5kZXJHYXRld2F5KCBpZCwgd2hhdCApICkge1xuXHRcdHJldHVybiBQbGFjZWhvbGRlcjtcblx0fVxuXHRwcm9wcy5QbGFjZWhvbGRlciA9IFBsYWNlaG9sZGVyO1xuXG5cdHJldHVybiByZW5kZXJHYXRld2F5KCBpZCwgcHJvcHMsIHdoYXQgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlcjsiLCJmdW5jdGlvbiB3aXRoRGlzcGF0Y2hHYXRld2F5cyAoIGRpc3BhdGNoICl7XG5cdGNvbnN0IHN0b3JlID0gZGlzcGF0Y2goICdqZXQtZm9ybXMvZ2F0ZXdheXMnICk7XG5cblx0cmV0dXJuIHtcblx0XHRzZXRHYXRld2F5UmVxdWVzdDogc3RvcmUuc2V0UmVxdWVzdCxcblx0XHRzZXRHYXRld2F5U2NlbmFyaW86IHN0b3JlLnNldFNjZW5hcmlvLFxuXHRcdHNldFNjZW5hcmlvOiBzdG9yZS5zZXRDdXJyZW50U2NlbmFyaW8sXG5cdFx0c2V0R2F0ZXdheTogc3RvcmUuc2V0R2F0ZXdheSxcblx0XHRzZXRHYXRld2F5SW5uZXI6IHN0b3JlLnNldEdhdGV3YXlJbm5lcixcblx0XHRzZXRHYXRld2F5U3BlY2lmaWM6IHN0b3JlLnNldEdhdGV3YXlTcGVjaWZpYyxcblx0XHRjbGVhckdhdGV3YXk6IHN0b3JlLmNsZWFyR2F0ZXdheSxcblx0XHRjbGVhclNjZW5hcmlvOiBzdG9yZS5jbGVhclNjZW5hcmlvLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2hHYXRld2F5czsiLCJpbXBvcnQgZ2F0ZXdheUF0dHIgZnJvbSAnLi4vaGVscGVycy9nYXRld2F5QXR0cic7XG5pbXBvcnQgZ2F0ZXdheUxhYmVsIGZyb20gJy4uL2hlbHBlcnMvZ2F0ZXdheUxhYmVsJztcbmltcG9ydCB7IGdsb2JhbFRhYiB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIHdpdGhTZWxlY3RHYXRld2F5cyggc2VsZWN0ICkge1xuXHRjb25zdCBzdG9yZSA9IHNlbGVjdCggJ2pldC1mb3Jtcy9nYXRld2F5cycgKTtcblxuXHRjb25zdCBnYXRld2F5UmVxdWVzdElkID0gc3RvcmUuZ2V0Q3VycmVudFJlcXVlc3RJZCgpO1xuXHRjb25zdCBnYXRld2F5U3BlY2lmaWMgID0gc3RvcmUuZ2V0R2F0ZXdheVNwZWNpZmljKCk7XG5cdGNvbnN0IHNjZW5hcmlvICAgICAgICAgPSBzdG9yZS5nZXRTY2VuYXJpbygpO1xuXG5cdGNvbnN0IENVUlJFTlRfR0FURVdBWSAgICAgICAgICAgICAgICAgICAgICA9IHN0b3JlLmdldEdhdGV3YXlJZCgpO1xuXHRjb25zdCB7IGlkOiBDVVJSRU5UX1NDRU5BUklPID0gJ1BBWV9OT1cnIH0gPSBzY2VuYXJpbztcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgdXNlX2dsb2JhbDogdXNlR2xvYmFsID0gZmFsc2UsXG5cdCAgICAgIH0gPSBnYXRld2F5U3BlY2lmaWM7XG5cblx0Y29uc3QgY3VycmVudFRhYiA9IGdsb2JhbFRhYiggeyBzbHVnOiBDVVJSRU5UX0dBVEVXQVkgfSApO1xuXG5cdGNvbnN0IGdldFNwZWNpZmljT3JHbG9iYWwgPSAoIGtleSwgaWZFbXB0eSA9ICcnICkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHR1c2VHbG9iYWwgPyAoXG5cdFx0XHRcdGN1cnJlbnRUYWJbIGtleSBdIHx8IGlmRW1wdHlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdGdhdGV3YXlTcGVjaWZpY1sga2V5IF0gfHwgaWZFbXB0eVxuXHRcdFx0KVxuXHRcdCk7XG5cdH07XG5cblx0Y29uc3QgY2FsbGFibGVHYXRld2F5ICAgICAgICAgPSBnYXRld2F5QXR0ciggJ2FkZGl0aW9uYWwnICk7XG5cdGNvbnN0IGFkZGl0aW9uYWxTb3VyY2VHYXRld2F5ID0gY2FsbGFibGVHYXRld2F5KCBDVVJSRU5UX0dBVEVXQVkgKTtcblxuXHRjb25zdCBsb2FkaW5nR2F0ZXdheSA9IHNlbGVjdCggJ2pldC1mb3Jtcy9hY3Rpb25zJyApLlxuXHRcdGdldExvYWRpbmcoIGdhdGV3YXlSZXF1ZXN0SWQgKTtcblxuXHRjb25zdCBnbG9iYWxHYXRld2F5TGFiZWwgICA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xuXHRjb25zdCBzcGVjaWZpY0dhdGV3YXlMYWJlbCA9IGdhdGV3YXlMYWJlbCggQ1VSUkVOVF9HQVRFV0FZICk7XG5cblx0Y29uc3QgY3VzdG9tR2F0ZXdheUxhYmVsID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cdFx0cmV0dXJuIGdsb2JhbEdhdGV3YXlMYWJlbCggYCR7IENVUlJFTlRfR0FURVdBWSB9LiR7IGtleSB9YCApO1xuXHR9O1xuXHRjb25zdCBzY2VuYXJpb0xhYmVsICAgICAgPSBmdW5jdGlvbiAoIGtleSApIHtcblx0XHRyZXR1cm4gY3VzdG9tR2F0ZXdheUxhYmVsKCBgc2NlbmFyaW8uJHsgQ1VSUkVOVF9TQ0VOQVJJTyB9LiR7IGtleSB9YCApO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Z2F0ZXdheUdlbmVyYWw6IHN0b3JlLmdldEdhdGV3YXkoKSxcblx0XHRnYXRld2F5UmVxdWVzdDogc3RvcmUuZ2V0Q3VycmVudFJlcXVlc3QoKSxcblx0XHRzY2VuYXJpb1NvdXJjZTogYWRkaXRpb25hbFNvdXJjZUdhdGV3YXlbIENVUlJFTlRfU0NFTkFSSU8gXSB8fCB7fSxcblx0XHRjdXJyZW50U2NlbmFyaW86IHNjZW5hcmlvWyBDVVJSRU5UX1NDRU5BUklPIF0gfHwge30sXG5cdFx0Q1VSUkVOVF9TQ0VOQVJJTyxcblx0XHRnYXRld2F5U2NlbmFyaW86IHNjZW5hcmlvLFxuXHRcdGFkZGl0aW9uYWxTb3VyY2VHYXRld2F5LFxuXHRcdGdhdGV3YXlTcGVjaWZpYyxcblx0XHRnYXRld2F5UmVxdWVzdElkLFxuXHRcdGxvYWRpbmdHYXRld2F5LFxuXHRcdGdldFNwZWNpZmljT3JHbG9iYWwsXG5cdFx0Z2xvYmFsR2F0ZXdheUxhYmVsLFxuXHRcdHNwZWNpZmljR2F0ZXdheUxhYmVsLFxuXHRcdGN1c3RvbUdhdGV3YXlMYWJlbCxcblx0XHRzY2VuYXJpb0xhYmVsLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0R2F0ZXdheXM7IiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y2xlYXJHYXRld2F5KCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuY2xlYXJHYXRld2F5LFxuXHRcdH07XG5cdH0sXG5cdGNsZWFyU2NlbmFyaW8oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5jbGVhclNjZW5hcmlvLFxuXHRcdH07XG5cdH0sXG5cdHNldFJlcXVlc3QoIGl0ZW0gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5zZXRSZXF1ZXN0LFxuXHRcdFx0aXRlbSxcblx0XHR9O1xuXHR9LFxuXHRzZXRHYXRld2F5KCBpdGVtICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuc2V0R2F0ZXdheSxcblx0XHRcdGl0ZW0sXG5cdFx0fTtcblx0fSxcblx0c2V0R2F0ZXdheUlubmVyKCBpdGVtICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuc2V0R2F0ZXdheUlubmVyLFxuXHRcdFx0aXRlbSxcblx0XHR9O1xuXHR9LFxuXHRzZXRHYXRld2F5U3BlY2lmaWMoIGl0ZW0gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5zZXRHYXRld2F5U3BlY2lmaWMsXG5cdFx0XHRpdGVtLFxuXHRcdH07XG5cdH0sXG5cdHNldFNjZW5hcmlvKCBpdGVtICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuc2V0U2NlbmFyaW8sXG5cdFx0XHRpdGVtLFxuXHRcdH07XG5cdH0sXG5cdHNldEN1cnJlbnRTY2VuYXJpbyggaXRlbSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnNldEN1cnJlbnRTY2VuYXJpbyxcblx0XHRcdGl0ZW0sXG5cdFx0fTtcblx0fSxcblx0cmVnaXN0ZXJFdmVudFR5cGUoIGl0ZW0gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5yZWdpc3RlckV2ZW50VHlwZSxcblx0XHRcdGl0ZW0sXG5cdFx0fTtcblx0fSxcblx0aGFyZFNldEdhdGV3YXkoIGl0ZW0sIHZhbHVlID0gJycgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5oYXJkU2V0R2F0ZXdheSxcblx0XHRcdGl0ZW0sXG5cdFx0XHR2YWx1ZSxcblx0XHR9O1xuXHR9LFxuXHRoYXJkU2V0R2F0ZXdheVNwZWNpZmljKCBpdGVtLCB2YWx1ZSA9ICcnICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMuaGFyZFNldEdhdGV3YXlTcGVjaWZpYyxcblx0XHRcdGl0ZW0sXG5cdFx0XHR2YWx1ZSxcblx0XHR9O1xuXHR9LFxufSIsImV4cG9ydCBkZWZhdWx0IHtcblx0Y2xlYXJHYXRld2F5OiAnQ0xFQVJfR0FURVdBWScsXG5cdGNsZWFyU2NlbmFyaW86ICdDTEVBUl9TQ0VOQVJJTycsXG5cdHNldFNjZW5hcmlvOiAnU0VUX0NVUlJFTlRfR0FURVdBWV9TQ0VOQVJJTycsXG5cdHNldEdhdGV3YXk6ICdTRVRfQ1VSUkVOVF9HQVRFV0FZJyxcblx0c2V0R2F0ZXdheVNwZWNpZmljOiAnU0VUX0NVUlJFTlRfR0FURVdBWV9TUEVDSUZJQycsXG5cdHNldEdhdGV3YXlJbm5lcjogJ1NFVF9DVVJSRU5UX0dBVEVXQVlfSU5ORVInLFxuXHRzZXRSZXF1ZXN0OiAnU0VUX0NVUlJFTlRfUkVRVUVTVCcsXG5cdHNldEN1cnJlbnRTY2VuYXJpbzogJ1NFVF9DVVJSRU5UX1NDRU5BUklPJyxcblx0cmVnaXN0ZXJFdmVudFR5cGU6ICdSRUdJU1RFUl9FVkVOVF9UWVBFJyxcblx0aGFyZFNldEdhdGV3YXk6ICdIQVJEX1NFVF9DVVJSRU5UX0dBVEVXQVknLFxuXHRoYXJkU2V0R2F0ZXdheVNwZWNpZmljOiAnSEFSRF9TRVRfQ1VSUkVOVF9HQVRFV0FZX1NQRUNJRklDJ1xufVxuXG5cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0WyBjb25zdGFudHMuY2xlYXJHYXRld2F5IF06ICggc3RhdGUgKSA9PiAoXG5cdFx0e1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjdXJyZW50R2F0ZXdheToge30sXG5cdFx0fVxuXHQpLFxuXHRbIGNvbnN0YW50cy5jbGVhclNjZW5hcmlvIF06ICggc3RhdGUgKSA9PiAoXG5cdFx0e1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjdXJyZW50U2NlbmFyaW86IHt9LFxuXHRcdH1cblx0KSxcblx0WyBjb25zdGFudHMuc2V0U2NlbmFyaW8gXTogKCBzdGF0ZSwgYWN0aW9uICkgPT4gKFxuXHRcdHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y3VycmVudFNjZW5hcmlvOiB7XG5cdFx0XHRcdC4uLnN0YXRlLmN1cnJlbnRTY2VuYXJpbyxcblx0XHRcdFx0Li4uKFxuXHRcdFx0XHRcdGFjdGlvbi5pdGVtIHx8IHt9XG5cdFx0XHRcdCksXG5cdFx0XHR9LFxuXHRcdH1cblx0KSxcblx0WyBjb25zdGFudHMuc2V0R2F0ZXdheSBdOiAoIHN0YXRlLCBhY3Rpb24gKSA9PiAoXG5cdFx0e1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjdXJyZW50R2F0ZXdheToge1xuXHRcdFx0XHQuLi5zdGF0ZS5jdXJyZW50R2F0ZXdheSxcblx0XHRcdFx0Li4uYWN0aW9uLml0ZW0sXG5cdFx0XHR9LFxuXHRcdH1cblx0KSxcblx0WyBjb25zdGFudHMuc2V0R2F0ZXdheVNwZWNpZmljIF06ICggc3RhdGUsIGFjdGlvbiApID0+IChcblx0XHR7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGN1cnJlbnRHYXRld2F5OiB7XG5cdFx0XHRcdC4uLnN0YXRlLmN1cnJlbnRHYXRld2F5LFxuXHRcdFx0XHRbIHN0YXRlLmN1cnJlbnRHYXRld2F5LmdhdGV3YXkgXToge1xuXHRcdFx0XHRcdC4uLnNlbGVjdG9ycy5nZXRHYXRld2F5U3BlY2lmaWMoIHN0YXRlICksXG5cdFx0XHRcdFx0Li4uYWN0aW9uLml0ZW0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH1cblx0KSxcblx0WyBjb25zdGFudHMuc2V0R2F0ZXdheUlubmVyIF06ICggc3RhdGUsIGFjdGlvbiApID0+IHtcblx0XHRjb25zdCB7IGtleSwgdmFsdWUgfSA9IGFjdGlvbi5pdGVtO1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGN1cnJlbnRHYXRld2F5OiB7XG5cdFx0XHRcdC4uLnN0YXRlLmN1cnJlbnRHYXRld2F5LFxuXHRcdFx0XHRbIGtleSBdOiB7XG5cdFx0XHRcdFx0Li4uKFxuXHRcdFx0XHRcdFx0c3RhdGUuY3VycmVudEdhdGV3YXlbIGtleSBdIHx8IHt9XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHQuLi52YWx1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fSxcblx0WyBjb25zdGFudHMuc2V0UmVxdWVzdCBdOiAoIHN0YXRlLCBhY3Rpb24gKSA9PiB7XG5cdFx0Y29uc3QgaXRlbXMgPSBbIHNlbGVjdG9ycy5nZXRHYXRld2F5SWQoIHN0YXRlICksIGFjdGlvbi5pdGVtPy5pZCBdLmZpbHRlciggdmFsdWUgPT4gdmFsdWUgKTtcblx0XHRhY3Rpb24uaXRlbS5pZCA9IGl0ZW1zLmpvaW4oICcvJyApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Y3VycmVudFJlcXVlc3Q6IGFjdGlvbi5pdGVtLFxuXHRcdH07XG5cdH0sXG5cdFsgY29uc3RhbnRzLnNldEN1cnJlbnRTY2VuYXJpbyBdOiAoIHN0YXRlLCBhY3Rpb24gKSA9PiAoXG5cdFx0e1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRjdXJyZW50U2NlbmFyaW86IHtcblx0XHRcdFx0Li4uc3RhdGUuY3VycmVudFNjZW5hcmlvLFxuXHRcdFx0XHRbIHN0YXRlLmN1cnJlbnRTY2VuYXJpbz8uaWQgXToge1xuXHRcdFx0XHRcdC4uLihcblx0XHRcdFx0XHRcdHN0YXRlLmN1cnJlbnRTY2VuYXJpb1sgc3RhdGUuY3VycmVudFNjZW5hcmlvPy5pZCBdIHx8IHt9XG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHQuLi4oXG5cdFx0XHRcdFx0XHRhY3Rpb24uaXRlbSB8fCB7fVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH1cblx0KSxcblx0WyBjb25zdGFudHMuaGFyZFNldEdhdGV3YXkgXTogKCBzdGF0ZSwgYWN0aW9uICkgPT4ge1xuXHRcdGlmICggYWN0aW9uLml0ZW0gKSB7XG5cdFx0XHRzdGF0ZS5jdXJyZW50R2F0ZXdheVsgYWN0aW9uLml0ZW0gXSA9IGFjdGlvbi52YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0fTtcblx0fSxcblx0WyBjb25zdGFudHMuaGFyZFNldEdhdGV3YXlTcGVjaWZpYyBdOiAoIHN0YXRlLCBhY3Rpb24gKSA9PiB7XG5cdFx0aWYgKCBhY3Rpb24uaXRlbSAmJiBzdGF0ZS5jdXJyZW50R2F0ZXdheT8uZ2F0ZXdheSApIHtcblx0XHRcdHN0YXRlLmN1cnJlbnRHYXRld2F5WyBzdGF0ZS5jdXJyZW50R2F0ZXdheT8uZ2F0ZXdheSBdID0ge307XG5cdFx0XHRzdGF0ZS5jdXJyZW50R2F0ZXdheVsgc3RhdGUuY3VycmVudEdhdGV3YXk/LmdhdGV3YXkgXVsgYWN0aW9uLml0ZW0gXSA9IGFjdGlvbi52YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0fTtcblx0fSxcblx0WyBjb25zdGFudHMucmVnaXN0ZXJFdmVudFR5cGUgXTogKCBzdGF0ZSwgYWN0aW9uICkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50ID0ge1xuXHRcdFx0Li4uYWN0aW9uLml0ZW0sXG5cdFx0XHRnYXRld2F5OiBhY3Rpb24uaXRlbT8uZ2F0ZXdheSA/PyBzdGF0ZS5jdXJyZW50R2F0ZXdheT8uZ2F0ZXdheSxcblx0XHRcdHNjZW5hcmlvOiBhY3Rpb24uaXRlbT8uc2NlbmFyaW8gPz8gc3RhdGUuY3VycmVudFNjZW5hcmlvPy5pZCxcblx0XHR9O1xuXG5cdFx0c3RhdGUuZXZlbnRUeXBlcy5wdXNoKCBldmVudCApO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxufTsiLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5jb25zdCB7IGNyZWF0ZVJlZHV4U3RvcmUgfSA9IHdwLmRhdGE7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHV4U3RvcmUoICdqZXQtZm9ybXMvZ2F0ZXdheXMnLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9ycyxcbn0gKTtcblxuXG4iLCJpbXBvcnQgZGlzcGF0Y2hlcnMgZnJvbSAnLi9kaXNwYXRjaGVycyc7XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XG5cdGN1cnJlbnRSZXF1ZXN0OiB7XG5cdFx0aWQ6IC0gMSxcblx0fSxcblx0Y3VycmVudEdhdGV3YXk6IHt9LFxuXHRjdXJyZW50U2NlbmFyaW86IHt9LFxuXHRldmVudFR5cGVzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XG5cdGNvbnN0IGNhbGxiYWNrID0gZGlzcGF0Y2hlcnNbIGFjdGlvbj8udHlwZSBdO1xuXG5cdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKCBzdGF0ZSwgYWN0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59IiwiY29uc3Qgc2VsZWN0b3JzID0ge1xuXHRnZXRDdXJyZW50UmVxdWVzdElkKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudFJlcXVlc3QuaWQ7XG5cdH0sXG5cdGdldEN1cnJlbnRSZXF1ZXN0KCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudFJlcXVlc3Q7XG5cdH0sXG5cdGdldFNjZW5hcmlvKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudFNjZW5hcmlvO1xuXHR9LFxuXHRnZXRTY2VuYXJpb0lkKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudFNjZW5hcmlvPy5pZDtcblx0fSxcblx0Z2V0R2F0ZXdheUlkKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudEdhdGV3YXk/LmdhdGV3YXk7XG5cdH0sXG5cdGdldEdhdGV3YXkoIHN0YXRlICkge1xuXHRcdHJldHVybiBzdGF0ZS5jdXJyZW50R2F0ZXdheTtcblx0fSxcblx0Z2V0RXZlbnRUeXBlcyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmV2ZW50VHlwZXM7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC4uLnNlbGVjdG9ycyxcblx0Z2V0R2F0ZXdheVNwZWNpZmljKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuY3VycmVudEdhdGV3YXlbIHNlbGVjdG9ycy5nZXRHYXRld2F5SWQoIHN0YXRlICkgXSB8fCB7fTtcblx0fSxcbn0iLCJpbXBvcnQgeyB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuZnVuY3Rpb24gdXNlSXNIYXNBdHRyaWJ1dGUoIGF0dHJOYW1lICkge1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXHRjb25zdCB0eXBlICAgICAgID0gYmxvY2tQcm9wc1sgJ2RhdGEtdHlwZScgXTtcblxuXHRyZXR1cm4gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiB7XG5cdFx0XHRjb25zdCBibG9jayA9IHNlbGVjdCggJ2NvcmUvYmxvY2tzJyApLmdldEJsb2NrVHlwZSggdHlwZSApO1xuXG5cdFx0XHRyZXR1cm4gISFibG9jay5hdHRyaWJ1dGVzWyBhdHRyTmFtZSBdO1xuXHRcdH0sXG5cdFx0WyBhdHRyTmFtZSwgdHlwZSBdLFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VJc0hhc0F0dHJpYnV0ZTsiLCJjb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcblx0ICAgICAgdXNlRGlzcGF0Y2gsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gdXNlT3BlbkVkaXRvclBhbmVsKCBwYW5lbE5hbWUgKSB7XG5cdGNvbnN0IHsgZW5hYmxlQ29tcGxlbWVudGFyeUFyZWEgfSA9IHVzZURpc3BhdGNoKCAnY29yZS9pbnRlcmZhY2UnICk7XG5cdGNvbnN0IHsgdG9nZ2xlRWRpdG9yUGFuZWxPcGVuZWQgfSA9IHVzZURpc3BhdGNoKCAnY29yZS9lZGl0LXBvc3QnICk7XG5cblx0Y29uc3QgaXNPcGVuZWQgPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2NvcmUvZWRpdC1wb3N0JyApLmlzRWRpdG9yUGFuZWxPcGVuZWQoIHBhbmVsTmFtZSApLFxuXHRcdFsgcGFuZWxOYW1lIF0sXG5cdCk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHQvLyBzd2l0Y2ggZnJvbSBibG9jayB0byBwb3N0IHBhbmVsXG5cdFx0ZW5hYmxlQ29tcGxlbWVudGFyeUFyZWEoICdjb3JlL2VkaXQtcG9zdCcsICdlZGl0LXBvc3QvZG9jdW1lbnQnICk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0IWlzT3BlbmVkICYmIHRvZ2dsZUVkaXRvclBhbmVsT3BlbmVkKCBwYW5lbE5hbWUgKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlT3BlbkVkaXRvclBhbmVsOyIsImltcG9ydCBTYWZlRGVsZXRlQ29udGV4dCBmcm9tICcuLi9yZXBlYXRlci9jb250ZXh0L3NhZmUuZGVsZXRlJztcbmltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IG9uU2F2ZURlbGV0aW5nID0gaW5kZXggPT4ge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcblx0cmV0dXJuIGNvbmZpcm0oXG5cdFx0c3ByaW50Zihcblx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlZCAtIGl0ZW0gaW5kZXhcblx0XHRcdF9fKFxuXHRcdFx0XHRgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSBpdGVtICVkP2AsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0XHRpbmRleCArIDEsXG5cdFx0KSxcblx0KTtcbn07XG5cbi8qKlxuICogQHBhcmFtICBzZXRJdGVtc0RhdGFcbiAqIEByZXR1cm4ge3tcbiAqIGNsb25lSXRlbTogRnVuY3Rpb24sXG4gKiBhZGROZXdJdGVtOiBGdW5jdGlvbixcbiAqIGNoYW5nZUN1cnJlbnRJdGVtOiBGdW5jdGlvbixcbiAqIHRvZ2dsZVZpc2libGU6IEZ1bmN0aW9uLFxuICogbW92ZURvd246IEZ1bmN0aW9uLFxuICogbW92ZVVwOiBGdW5jdGlvbixcbiAqIHJlbW92ZU9wdGlvbjogRnVuY3Rpb25cbiAqIH18bnVsbH1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIHVzZVJlcGVhdGVyU3RhdGUoIHNldEl0ZW1zRGF0YSApIHtcblx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHNldEl0ZW1zRGF0YSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXHRjb25zdCBpc1NhZmVEZWxldGluZyA9IHVzZUNvbnRleHQoIFNhZmVEZWxldGVDb250ZXh0ICk7XG5cblx0Y29uc3QgY2hhbmdlQ3VycmVudEl0ZW0gPSBmdW5jdGlvbiAoIHZhbHVlVG9TZXQsIGluZGV4ICkge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cblx0XHRcdHByZXZDbG9uZVsgaW5kZXggXSA9IHtcblx0XHRcdFx0Li4ucHJldlsgaW5kZXggXSxcblx0XHRcdFx0Li4udmFsdWVUb1NldCxcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gcHJldkNsb25lO1xuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVPcHRpb24gPSBmdW5jdGlvbiAoIGluZGV4ICkge1xuXHRcdGlmICggaXNTYWZlRGVsZXRpbmcgJiYgIW9uU2F2ZURlbGV0aW5nKCBpbmRleCApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cdFx0XHRwcmV2Q2xvbmUuc3BsaWNlKCBpbmRleCwgMSApO1xuXG5cdFx0XHRyZXR1cm4gcHJldkNsb25lO1xuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCBhZGROZXdJdGVtID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4gW1xuXHRcdFx0Li4ucHJldiwge1xuXHRcdFx0XHRfX3Zpc2libGU6IHRydWUsXG5cdFx0XHRcdC4uLnZhbHVlLFxuXHRcdFx0fSxcblx0XHRdICk7XG5cdH07XG5cblx0Y29uc3QgY2xvbmVJdGVtID0gZnVuY3Rpb24gKCBpbmRleCApIHtcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xuXHRcdFx0Y29uc3QgcHJldkNsb25lICAgICAgICAgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cdFx0XHRjb25zdCBbIGJlZm9yZSwgYWZ0ZXIgXSA9IFtcblx0XHRcdFx0cHJldkNsb25lLnNsaWNlKCAwLCBpbmRleCArIDEgKSxcblx0XHRcdFx0cHJldkNsb25lLnNsaWNlKCBpbmRleCArIDEgKSxcblx0XHRcdF07XG5cblx0XHRcdHJldHVybiBbIC4uLmJlZm9yZSwgcHJldkNsb25lWyBpbmRleCBdLCAuLi5hZnRlciBdO1xuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCBtb3ZlUmVwZWF0ZXJJdGVtID0gZnVuY3Rpb24gKCB7IG9sZEluZGV4LCBuZXdJbmRleCB9ICkge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cblx0XHRcdFtcblx0XHRcdFx0cHJldkNsb25lWyBuZXdJbmRleCBdLFxuXHRcdFx0XHRwcmV2Q2xvbmVbIG9sZEluZGV4IF0sXG5cdFx0XHRdID0gWyBwcmV2Q2xvbmVbIG9sZEluZGV4IF0sIHByZXZDbG9uZVsgbmV3SW5kZXggXSBdO1xuXG5cdFx0XHRyZXR1cm4gcHJldkNsb25lO1xuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCBtb3ZlVXAgICA9IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cdFx0bW92ZVJlcGVhdGVySXRlbSggeyBvbGRJbmRleDogaW5kZXgsIG5ld0luZGV4OiBpbmRleCAtIDEgfSApO1xuXHR9O1xuXHRjb25zdCBtb3ZlRG93biA9IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cdFx0bW92ZVJlcGVhdGVySXRlbSggeyBvbGRJbmRleDogaW5kZXgsIG5ld0luZGV4OiBpbmRleCArIDEgfSApO1xuXHR9O1xuXG5cdGNvbnN0IHRvZ2dsZVZpc2libGUgPSBmdW5jdGlvbiAoIGluZGV4ICkge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgICAgICAgICAgICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXHRcdFx0cHJldkNsb25lWyBpbmRleCBdLl9fdmlzaWJsZSA9ICEoXG5cdFx0XHRcdHByZXZDbG9uZVsgaW5kZXggXS5fX3Zpc2libGVcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Y2hhbmdlQ3VycmVudEl0ZW0sXG5cdFx0dG9nZ2xlVmlzaWJsZSxcblx0XHRtb3ZlRG93bixcblx0XHRtb3ZlVXAsXG5cdFx0Y2xvbmVJdGVtLFxuXHRcdGFkZE5ld0l0ZW0sXG5cdFx0cmVtb3ZlT3B0aW9uLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXBlYXRlclN0YXRlOyIsImNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIHVzZVNlbGVjdFBvc3RNZXRhKCBuYW1lICkge1xuXHRjb25zdCBhbGxNZXRhID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fSxcblx0KTtcblxuXHRyZXR1cm4gSlNPTi5wYXJzZSggYWxsTWV0YVsgbmFtZSBdIHx8ICd7fScgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2VsZWN0UG9zdE1ldGE7IiwiY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcblx0ICAgICAgdXNlRWZmZWN0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlRGlzcGF0Y2gsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuXG5mdW5jdGlvbiB1c2VTdWNjZXNzTm90aWNlICggdGV4dCwgb3B0aW9ucyA9IHt9ICkge1xuXHRjb25zdCBbIGhhc0NvcGllZCwgc2V0SGFzQ29waWVkIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblx0Y29uc3Qgbm90aWNlU3RvcmUgICAgICAgICAgICAgICAgID0gdXNlRGlzcGF0Y2goIHdwLm5vdGljZXMuc3RvcmUgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRpZiAoIGhhc0NvcGllZCApIHtcblx0XHRcdG5vdGljZVN0b3JlLmNyZWF0ZVdhcm5pbmdOb3RpY2UoIHRleHQsXG5cdFx0XHRcdHsgdHlwZTogJ3NuYWNrYmFyJywgLi4ub3B0aW9ucyB9ICk7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgWyBoYXNDb3BpZWQgXSApO1xuXG5cdHJldHVybiBzZXRIYXNDb3BpZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN1Y2Nlc3NOb3RpY2U7IiwiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5jb25zdCBnZXRGb3JtRmllbGRzID0gKCBibG9ja1BhcnNlckZ1bmMsIGJsb2NrcyApID0+IHtcblx0YmxvY2tzLmZvckVhY2goIGJsb2NrID0+IHtcblx0XHRibG9ja1BhcnNlckZ1bmMoIGJsb2NrICk7XG5cblx0XHRpZiAoIGJsb2NrLmlubmVyQmxvY2tzLmxlbmd0aCApIHtcblx0XHRcdGdldEZvcm1GaWVsZHMoIGJsb2NrUGFyc2VyRnVuYywgYmxvY2suaW5uZXJCbG9ja3MgKTtcblx0XHR9XG5cdH0gKTtcbn07XG5cbmNvbnN0IHdpdGhTZWxlY3RGb3JtRmllbGRzID0gKFxuXHRleGNsdWRlICAgICAgICA9IFtdLFxuXHRwbGFjZWhvbGRlciAgICA9IGZhbHNlLFxuXHRzdXBwcmVzc0ZpbHRlciA9IGZhbHNlLFxuKSA9PiBzZWxlY3QgPT4ge1xuXG5cdGxldCBmb3JtRmllbGRzID0gW107XG5cdGNvbnN0IHNraXBGaWVsZHMgPSBbXG5cdFx0J3N1Ym1pdCcsXG5cdFx0J2Zvcm0tYnJlYWsnLFxuXHRcdCdoZWFkaW5nJyxcblx0XHQnZ3JvdXAtYnJlYWsnLFxuXHRcdCdjb25kaXRpb25hbCcsXG5cdFx0Li4uZXhjbHVkZSxcblx0XTtcblxuXHRnZXRGb3JtRmllbGRzKCBibG9jayA9PiB7XG5cdFx0aWYgKCBibG9jay5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxuXHRcdFx0JiYgYmxvY2suYXR0cmlidXRlcy5uYW1lXG5cdFx0XHQmJiAhc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcblx0XHQpIHtcblxuXHRcdFx0Lypjb25zdCBibG9ja1R5cGUgPSBzZWxlY3QoIGJsb2Nrc1N0b3JlICkuZ2V0QmxvY2tUeXBlKCBibG9jay5uYW1lICk7Ki9cblxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKCB7XG5cdFx0XHRcdGJsb2NrTmFtZTogYmxvY2submFtZSxcblx0XHRcdFx0bmFtZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxuXHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdC8vaWNvbjogYmxvY2tUeXBlLmljb24uc3JjLFxuXHRcdFx0fSApO1xuXHRcdH1cblx0fSwgc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCkgKTtcblxuXHRmb3JtRmllbGRzID0gcGxhY2Vob2xkZXJcblx0ICAgICAgICAgICAgID8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxuXHQgICAgICAgICAgICAgOiBmb3JtRmllbGRzO1xuXG5cdHJldHVybiB7XG5cdFx0Zm9ybUZpZWxkczogc3VwcHJlc3NGaWx0ZXIgPyBmb3JtRmllbGRzIDogYXBwbHlGaWx0ZXJzKFxuXHRcdFx0J2pldC5mYi5nZXRGb3JtRmllbGRzQmxvY2tzJywgZm9ybUZpZWxkcyApLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlbGVjdEZvcm1GaWVsZHM7IiwiaW1wb3J0IEJhc2VQb3BvdmVySXRlbSBmcm9tICcuL0Jhc2VQb3BvdmVySXRlbSc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQmFzZUZpbHRlcigpIHtcblx0QmFzZVBvcG92ZXJJdGVtLmNhbGwoIHRoaXMgKTtcbn1cblxuQmFzZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlUG9wb3Zlckl0ZW0ucHJvdG90eXBlICk7XG5cbkJhc2VGaWx0ZXIucHJvdG90eXBlLmRvY0FyZ3VtZW50ICAgICAgPSBmYWxzZTtcbkJhc2VGaWx0ZXIucHJvdG90eXBlLmhlbHAgICAgICAgICAgICAgPSBudWxsO1xuQmFzZUZpbHRlci5wcm90b3R5cGUuaXNTZXJ2ZXJTaWRlICAgICA9IGZhbHNlO1xuQmFzZUZpbHRlci5wcm90b3R5cGUuaXNDbGllbnRTaWRlICAgICA9IGZhbHNlO1xuQmFzZUZpbHRlci5wcm90b3R5cGUuZ2V0QXJndW1lbnRzTGlzdCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCAhdGhpcy5kb2NBcmd1bWVudCB8fCAhdGhpcy5kb2NBcmd1bWVudC5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheSggdGhpcy5kb2NBcmd1bWVudCApXG5cdCAgICAgICAgICAgICA/IHRoaXMuZG9jQXJndW1lbnRcblx0ICAgICAgICAgICAgIDogWyB0aGlzLmRvY0FyZ3VtZW50IF07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBsaXN0RWxlbWVudCBvZiBsaXN0ICkge1xuXHRcdHN3aXRjaCAoIGxpc3RFbGVtZW50ICkge1xuXHRcdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdGNhc2UgU3RyaW5nOlxuXHRcdFx0XHRyZXNwb25zZS5wdXNoKCBfXyggJ1N0cmluZycsICdqZXQtZm9ybS1idWlsZGVyJyApICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdGNhc2UgTnVtYmVyOlxuXHRcdFx0XHRyZXNwb25zZS5wdXNoKCBfXyggJ051bWJlcicsICdqZXQtZm9ybS1idWlsZGVyJyApICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYXJyYXknOlxuXHRcdFx0Y2FzZSBBcnJheTpcblx0XHRcdFx0cmVzcG9uc2UucHVzaCggX18oICdBcnJheScsICdqZXQtZm9ybS1idWlsZGVyJyApICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYW55Jzpcblx0XHRcdFx0cmVzcG9uc2UucHVzaCggX18oICdBbnl0aGluZycsICdqZXQtZm9ybS1idWlsZGVyJyApICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXNwb25zZS5qb2luKCAnIHwgJyApO1xufTtcbkJhc2VGaWx0ZXIucHJvdG90eXBlLmZ1bGxIZWxwICAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMuZG9jQXJndW1lbnQgJiYgIXRoaXMuaGVscCApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IEhlbHAgPSB0aGlzLmhlbHA7XG5cdGNvbnN0IGxpc3QgPSB0aGlzLmdldEFyZ3VtZW50c0xpc3QoKTtcblxuXHRyZXR1cm4gPD5cblx0XHR7IGxpc3QgJiYgPGRpdiBzdHlsZT17IHtcblx0XHRcdG1hcmdpbkJvdHRvbTogJzAuNWVtJyxcblx0XHR9IH0+XG5cdFx0XHR7IF9fKCAnQXJndW1lbnRzOicsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnIH1cblx0XHRcdDxjb2RlPnsgbGlzdCB9PC9jb2RlPlxuXHRcdDwvZGl2PiB9XG5cdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgSGVscCA/IEhlbHAgOiA8SGVscC8+IH1cblx0PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUZpbHRlcjsiLCJpbXBvcnQgQmFzZVBvcG92ZXJJdGVtIGZyb20gJy4vQmFzZVBvcG92ZXJJdGVtJztcblxuZnVuY3Rpb24gQmFzZU1hY3JvKCkge1xuXHRCYXNlUG9wb3Zlckl0ZW0uY2FsbCggdGhpcyApO1xufVxuXG5CYXNlTWFjcm8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVBvcG92ZXJJdGVtLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIENhbiBiZSB1c2VkIGluIFNlbmQgRW1haWwgYWN0aW9uICYgb3RoZXIgYWN0aW9ucy4uLlxuICovXG5CYXNlTWFjcm8ucHJvdG90eXBlLmlzU2VydmVyU2lkZSA9IGZhbHNlO1xuXG4vKipcbiAqIENhbiBiZSB1c2VkIGluIENhbGN1bGF0ZWQgZmllbGQgJiBvdGhlciBmaWVsZCBhdHRyaWJ1dGVzXG4gKi9cbkJhc2VNYWNyby5wcm90b3R5cGUuaXNDbGllbnRTaWRlID0gZmFsc2U7XG5cbi8qKlxuICogRXguOiBDdXJyZW50RGF0ZVxuICovXG5CYXNlTWFjcm8ucHJvdG90eXBlLm5hbWUgPSAnJztcblxuLyoqXG4gKiBXaXRoIG5hbWVzcGFjZVxuICogRXguOiBDVFxuICovXG5CYXNlTWFjcm8ucHJvdG90eXBlLm5hbWVzcGFjZSA9ICdDVCc7XG5cbi8qKlxuICogQHR5cGUge251bGwgfCBzdHJpbmcgfCBGdW5jdGlvbn1cbiAqL1xuQmFzZU1hY3JvLnByb3RvdHlwZS5oZWxwID0gbnVsbDtcblxuQmFzZU1hY3JvLnByb3RvdHlwZS5mdWxsSGVscCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuaGVscDtcbn07XG5cbkJhc2VNYWNyby5wcm90b3R5cGUuZnVsbE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBgJSR7IHRoaXMubmFtZXNwYWNlIH06OiR7IHRoaXMubmFtZSB9JWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlTWFjcm87IiwiZnVuY3Rpb24gQmFzZVBvcG92ZXJJdGVtKCkge1xuXG59XG5cbkJhc2VQb3BvdmVySXRlbS5wcm90b3R5cGUgPSB7XG5cdGZ1bGxOYW1lKCkge1xuXHR9LFxuXHRmdWxsSGVscCgpIHtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VQb3BvdmVySXRlbTsiLCJpbXBvcnQgRXh0cmFNYWNyb0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9FeHRyYU1hY3JvQ29udGV4dCc7XG5pbXBvcnQgQmFzZU1hY3JvIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VNYWNybyc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRoaXNNYWNybyA9IG5ldyBCYXNlTWFjcm8oKTtcblxudGhpc01hY3JvLmZ1bGxOYW1lID0gKCkgPT4gJyV0aGlzJSc7XG50aGlzTWFjcm8uZnVsbEhlbHAgPSAoKSA9PiBfXyhcblx0J1JldHVybnMgY3VycmVudCBmaWVsZCB2YWx1ZScsXG5cdCdqZXQtZm9ybS1idWlsZGVyJyxcbik7XG5cbmZ1bmN0aW9uIENsaWVudFNpZGVNYWNyb3MoIHsgY2hpbGRyZW4sIHdpdGhUaGlzID0gZmFsc2UgfSApIHtcblx0Y29uc3QgZXh0cmEgPSB1c2VTZWxlY3QoXG5cdFx0KCBzZWxlY3QgKSA9PiBzZWxlY3QoICdqZXQtZm9ybXMvbWFjcm9zJyApLmdldENsaWVudE1hY3JvcygpLFxuXHRcdFtdLFxuXHQpO1xuXG5cdGNvbnN0IHZhbHVlID0gd2l0aFRoaXNcblx0ICAgICAgICAgICAgICA/IHsgZXh0cmEsIGFmdGVyRmllbGRzOiBbIHRoaXNNYWNybyBdIH1cblx0ICAgICAgICAgICAgICA6IHsgZXh0cmEgfTtcblxuXHRyZXR1cm4gPEV4dHJhTWFjcm9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgdmFsdWUgfT5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9FeHRyYU1hY3JvQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaWVudFNpZGVNYWNyb3M7IiwiaW1wb3J0IFBvcG92ZXJJdGVtTWFjcm8gZnJvbSAnLi9Qb3BvdmVySXRlbU1hY3JvJztcblxuY29uc3Qge1xuXHQgICAgICBDaGlsZHJlbixcblx0ICAgICAgY2xvbmVFbGVtZW50LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIFBhbmVsQm9keSxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBHcm91cEl0ZW1zUG9wb3ZlciggeyB0aXRsZSwgaXRlbXMsIGNoaWxkcmVuLCBpbml0aWFsT3BlbiB9ICkge1xuXHRjb25zdCBlbGVtZW50cyA9IGl0ZW1zLm1hcChcblx0XHQoIGl0ZW0sIGluZGV4ICkgPT4gPFBvcG92ZXJJdGVtTWFjcm8ga2V5PXsgaW5kZXggfSBjdXJyZW50PXsgaXRlbSB9Lz4sXG5cdCk7XG5cblx0cmV0dXJuIDxQYW5lbEJvZHkgdGl0bGU9eyB0aXRsZSB9IGluaXRpYWxPcGVuPXsgaW5pdGlhbE9wZW4gfT5cblx0XHQ8dWwgc3R5bGU9eyB7XG5cdFx0XHRwYWRkaW5nOiAnMCAwLjVlbScsXG5cdFx0fSB9PlxuXHRcdFx0eyBDaGlsZHJlbi5tYXAoIGVsZW1lbnRzLCBjdXJyZW50ID0+IGNsb25lRWxlbWVudChcblx0XHRcdFx0Y3VycmVudCxcblx0XHRcdFx0e30sXG5cdFx0XHRcdGNoaWxkcmVuLFxuXHRcdFx0KSApIH1cblx0XHQ8L3VsPlxuXHQ8L1BhbmVsQm9keT47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwSXRlbXNQb3BvdmVyOyIsImltcG9ydCBQb3BvdmVySXRlbSBmcm9tICcuLi9jb250ZXh0L1BvcG92ZXJJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIEJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBNYWNyb0ZpZWxkSXRlbSggeyBvbkNsaWNrIH0gKSB7XG5cdGNvbnN0IGZpZWxkID0gdXNlQ29udGV4dCggUG9wb3Zlckl0ZW0gKTtcblxuXHRjb25zdCB2YWx1ZSA9IGZpZWxkLmZ1bGxOYW1lXG5cdCAgICAgICAgICAgICAgPyBmaWVsZC5mdWxsTmFtZSgpXG5cdCAgICAgICAgICAgICAgOiBgJSR7IGZpZWxkLnZhbHVlIH0lYDtcblxuXHRyZXR1cm4gPEJ1dHRvblxuXHRcdGlzTGlua1xuXHRcdG9uQ2xpY2s9eyAoKSA9PiBvbkNsaWNrKCB2YWx1ZSApIH1cblx0PlxuXHRcdHsgdmFsdWUgfVxuXHQ8L0J1dHRvbj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hY3JvRmllbGRJdGVtOyIsImltcG9ydCBQb3BvdmVyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L1BvcG92ZXJDb250ZXh0JztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcblx0ICAgICAgdXNlUmVmLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIEJ1dHRvbixcblx0ICAgICAgUG9wb3ZlcixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBNYWNyb3NCdXR0b25UZW1wbGF0ZSgge1xuXHRjaGlsZHJlbixcblx0Li4ucHJvcHNcbn0gKSB7XG5cdGNvbnN0IFsgc2hvd1BvcG92ZXIsIHNldFNob3dQb3BvdmVyIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblx0Y29uc3QgYnV0dG9uUmVmICAgICAgICAgICAgICAgICAgICAgICA9IHVzZVJlZigpO1xuXG5cdHJldHVybiA8UG9wb3ZlckNvbnRleHQuUHJvdmlkZXJcblx0XHR2YWx1ZT17IHsgc2hvd1BvcG92ZXIsIHNldFNob3dQb3BvdmVyIH0gfVxuXHQ+XG5cdFx0PEJ1dHRvblxuXHRcdFx0cmVmPXsgYnV0dG9uUmVmIH1cblx0XHRcdGljb249eyAnYWRtaW4tdG9vbHMnIH1cblx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRpc1NtYWxsXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZiLWlzLXRoaWNrJyB9XG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0U2hvd1BvcG92ZXIoIHByZXYgPT4gIXByZXYgKSB9XG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPlxuXHRcdHsgc2hvd1BvcG92ZXIgJiYgKFxuXHRcdFx0PFBvcG92ZXJcblx0XHRcdFx0YW5jaG9yUmVmPXsgYnV0dG9uUmVmLmN1cnJlbnQgfVxuXHRcdFx0XHRwb3NpdGlvbj17ICd0b3Atc3RhcnQnIH1cblx0XHRcdFx0bm9BcnJvdz17IGZhbHNlIH1cblx0XHRcdFx0aXNBbHRlcm5hdGVcblx0XHRcdFx0b25Gb2N1c091dHNpZGU9eyBldmVudCA9PiB7XG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogV2Ugc2hvdWxkIHNraXAgaGFuZGxpbmcgaWYgZm9jdXNlZCBub2RlIGl0J3Mgbm90IGVxdWFsc1xuXHRcdFx0XHRcdCAqIHRoZSBidXR0b24gd2hpY2ggdHJpZ2dlcnMgcG9wb3ZlclxuXHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdGlmICggZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gYnV0dG9uUmVmLmN1cnJlbnQgKSB7XG5cdFx0XHRcdFx0XHRzZXRTaG93UG9wb3ZlciggZmFsc2UgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gfVxuXHRcdFx0XHRvbkNsb3NlPXsgKCkgPT4gc2V0U2hvd1BvcG92ZXIoIGZhbHNlICkgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdDwvUG9wb3Zlcj5cblx0XHQpIH1cblx0PC9Qb3BvdmVyQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hY3Jvc0J1dHRvblRlbXBsYXRlOyIsImltcG9ydCBNYWNyb3NGaWVsZHNUZW1wbGF0ZSBmcm9tICcuL01hY3Jvc0ZpZWxkc1RlbXBsYXRlJztcbmltcG9ydCBNYWNyb0ZpZWxkSXRlbSBmcm9tICcuL01hY3JvRmllbGRJdGVtJztcbmltcG9ydCB7IHVzZUZpZWxkcyB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYmxvY2tzLXRvLWFjdGlvbnMnO1xuXG5mdW5jdGlvbiBNYWNyb3NGaWVsZHMoIHtcblx0b25DbGljayA9ICgpID0+IHt9LFxuXHR3aXRoQ3VycmVudCA9IGZhbHNlLFxuXHQuLi5wcm9wc1xufSApIHtcblx0Y29uc3QgZmllbGRzID0gdXNlRmllbGRzKCB7IGV4Y2x1ZGVDdXJyZW50OiAhd2l0aEN1cnJlbnQgfSApO1xuXG5cdHJldHVybiA8TWFjcm9zRmllbGRzVGVtcGxhdGVcblx0XHR3aXRoQ3VycmVudD17IHdpdGhDdXJyZW50IH1cblx0XHRmaWVsZHM9eyBmaWVsZHMgfVxuXHRcdHsgLi4ucHJvcHMgfVxuXHQ+XG5cdFx0PE1hY3JvRmllbGRJdGVtIG9uQ2xpY2s9eyBvbkNsaWNrIH0vPlxuXHQ8L01hY3Jvc0ZpZWxkc1RlbXBsYXRlPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjcm9zRmllbGRzOyIsImltcG9ydCBNYWNyb3NCdXR0b25UZW1wbGF0ZSBmcm9tICcuL01hY3Jvc0J1dHRvblRlbXBsYXRlJztcbmltcG9ydCBFeHRyYU1hY3JvQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0V4dHJhTWFjcm9Db250ZXh0JztcbmltcG9ydCBHcm91cEl0ZW1zUG9wb3ZlciBmcm9tICcuL0dyb3VwSXRlbXNQb3BvdmVyJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIE1hY3Jvc0ZpZWxkc1RlbXBsYXRlKCB7XG5cdGNoaWxkcmVuLFxuXHRmaWVsZHMsXG5cdC4uLnByb3BzXG59ICkge1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7e1xuXHQgKiBleHRyYTogQmFzZU1hY3JvW10sXG5cdCAqIGZpbHRlcnM6IEJhc2VGaWx0ZXJbXVxuXHQgKiBiZWZvcmVGaWVsZHM6IEJhc2VQb3BvdmVySXRlbVtdXG5cdCAqIGFmdGVyRmllbGRzOiBCYXNlUG9wb3Zlckl0ZW1bXVxuXHQgKiB9fVxuXHQgKi9cblx0Y29uc3QgbWFjcm9zID0gdXNlQ29udGV4dCggRXh0cmFNYWNyb0NvbnRleHQgKTtcblxuXHRjb25zdCBmdWxsRmllbGRzID0gW1xuXHRcdC4uLihcblx0XHRcdG1hY3Jvcy5iZWZvcmVGaWVsZHMgPz8gW11cblx0XHQpLFxuXHRcdC4uLmZpZWxkcyxcblx0XHQuLi4oXG5cdFx0XHRtYWNyb3MuYWZ0ZXJGaWVsZHMgPz8gW11cblx0XHQpLFxuXHRdO1xuXG5cdGlmICggIWZ1bGxGaWVsZHMubGVuZ3RoICYmXG5cdFx0IW1hY3Jvcz8uZXh0cmE/Lmxlbmd0aCAmJlxuXHRcdCFtYWNyb3M/LmZpbHRlcnM/Lmxlbmd0aFxuXHQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiA8TWFjcm9zQnV0dG9uVGVtcGxhdGUgeyAuLi5wcm9wcyB9PlxuXHRcdHsgQm9vbGVhbiggZnVsbEZpZWxkcy5sZW5ndGggKSAmJiA8R3JvdXBJdGVtc1BvcG92ZXJcblx0XHRcdHRpdGxlPXsgX18oICdGaWVsZHM6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0aXRlbXM9eyBmdWxsRmllbGRzIH1cblx0XHRcdGluaXRpYWxPcGVuPXsgdHJ1ZSB9XG5cdFx0PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9Hcm91cEl0ZW1zUG9wb3Zlcj4gfVxuXHRcdHsgQm9vbGVhbiggbWFjcm9zPy5leHRyYT8ubGVuZ3RoICkgJiYgPEdyb3VwSXRlbXNQb3BvdmVyXG5cdFx0XHR0aXRsZT17IF9fKCAnRXh0cmEgbWFjcm9zOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGl0ZW1zPXsgbWFjcm9zLmV4dHJhIH1cblx0XHQ+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L0dyb3VwSXRlbXNQb3BvdmVyPiB9XG5cdFx0eyBCb29sZWFuKCBtYWNyb3M/LmZpbHRlcnM/Lmxlbmd0aCApICYmIDxHcm91cEl0ZW1zUG9wb3ZlclxuXHRcdFx0dGl0bGU9eyBfXyggJ0ZpbHRlcnM6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0aXRlbXM9eyBtYWNyb3MuZmlsdGVycyB9XG5cdFx0PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9Hcm91cEl0ZW1zUG9wb3Zlcj4gfVxuXHQ8L01hY3Jvc0J1dHRvblRlbXBsYXRlPjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NGaWVsZHNUZW1wbGF0ZTsiLCJpbXBvcnQgUG9wb3Zlckl0ZW0gZnJvbSAnLi4vY29udGV4dC9Qb3BvdmVySXRlbSc7XG5pbXBvcnQgQmFzZVBvcG92ZXJJdGVtIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VQb3BvdmVySXRlbSc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogQHBhcmFtIHJvb3QwICAgICAgICAgIHtCYXNlUG9wb3Zlckl0ZW19XG4gKiBAcGFyYW0gcm9vdDAuY3VycmVudFxuICogQHBhcmFtIHJvb3QwLmNoaWxkcmVuXG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gUG9wb3Zlckl0ZW1NYWNybyggeyBjdXJyZW50LCBjaGlsZHJlbiB9ICkge1xuXHRjb25zdCBbIHNob3dIZWxwLCBzZXRTaG93SGVscCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0aWYgKCAhKFxuXHRcdGN1cnJlbnQgaW5zdGFuY2VvZiBCYXNlUG9wb3Zlckl0ZW1cblx0KSApIHtcblx0XHRyZXR1cm4gPGxpPlxuXHRcdFx0PFBvcG92ZXJJdGVtLlByb3ZpZGVyIHZhbHVlPXsgY3VycmVudCB9PlxuXHRcdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdDwvUG9wb3Zlckl0ZW0uUHJvdmlkZXI+XG5cdFx0PC9saT47XG5cdH1cblxuXHRjb25zdCBNYWNyb0hlbHAgPSBjdXJyZW50LmZ1bGxIZWxwLmJpbmQoIGN1cnJlbnQgKTtcblxuXHRyZXR1cm4gPGxpPlxuXHRcdDxQb3BvdmVySXRlbS5Qcm92aWRlciB2YWx1ZT17IGN1cnJlbnQgfT5cblx0XHRcdDxkaXYgc3R5bGU9eyB7XG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdGdhcDogJzAuNmVtJyxcblx0XHRcdH0gfT5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxuXHRcdFx0XHRcdGljb249eyBzaG93SGVscFxuXHRcdFx0XHRcdCAgICAgICA/ICdhcnJvdy1kb3duJ1xuXHRcdFx0XHRcdCAgICAgICA6ICdhcnJvdy1yaWdodCcgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZmItaXMtdGhpY2snIH1cblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0U2hvd0hlbHAoIHByZXYgPT4gIXByZXYgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7IHNob3dIZWxwICYmIDxNYWNyb0hlbHAvPiB9XG5cdFx0PC9Qb3BvdmVySXRlbS5Qcm92aWRlcj5cblx0PC9saT47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJJdGVtTWFjcm87IiwiaW1wb3J0IEV4dHJhTWFjcm9Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvRXh0cmFNYWNyb0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlUmVxdWVzdEZpZWxkcyB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNlcnZlclNpZGVNYWNyb3MoIHsgY2hpbGRyZW4gfSApIHtcblx0Y29uc3QgcmVxdWVzdEZpZWxkcyA9IHVzZVJlcXVlc3RGaWVsZHMoKTtcblxuXHRyZXR1cm4gPEV4dHJhTWFjcm9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBhZnRlckZpZWxkczogcmVxdWVzdEZpZWxkcyB9IH0+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvRXh0cmFNYWNyb0NvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJTaWRlTWFjcm9zOyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IEV4dHJhTWFjcm9Db250ZXh0ICAgID0gY3JlYXRlQ29udGV4dCggW10gKTtcblxuZXhwb3J0IGRlZmF1bHQgRXh0cmFNYWNyb0NvbnRleHQ7IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgUG9wb3ZlckNvbnRleHQgICAgPSBjcmVhdGVDb250ZXh0KCBmYWxzZSApO1xuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyQ29udGV4dDsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCBQb3BvdmVySXRlbSAgICAgICA9IGNyZWF0ZUNvbnRleHQoIHsgbmFtZTogJycgfSApO1xuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVySXRlbTsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBBZGREYXlGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ2FkZERheSc7XG5cdHRoaXMuZG9jQXJndW1lbnQgID0gTnVtYmVyO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oXG5cdFx0YEFkZHMgdGhlIHBhc3NlZCBudW1iZXIgb2YgZGF5cyB2aWEgYW4gYXJndW1lbnQgdG8gYSBtYWNybyB0aGF0IHJldHVybnMgYSBkYXRlIG9yIGEgdGltZXN0YW1wLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpO1xufVxuXG5BZGREYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRGF5RmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEFkZE1vbnRoRmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICdhZGRNb250aCc7XG5cdHRoaXMuZG9jQXJndW1lbnQgID0gTnVtYmVyO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oXG5cdFx0YEFkZHMgdGhlIHBhc3NlZCBudW1iZXIgb2YgbW9udGhzIHZpYSBhbiBhcmd1bWVudCB0byBhIG1hY3JvIHRoYXQgcmV0dXJucyBhIGRhdGUgb3IgYSB0aW1lc3RhbXAuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCk7XG59XG5cbkFkZE1vbnRoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE1vbnRoRmlsdGVyOyIsImltcG9ydCBCYXNlRmlsdGVyIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VGaWx0ZXInO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEFkZFllYXJGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ2FkZFllYXInO1xuXHR0aGlzLmRvY0FyZ3VtZW50ICA9IE51bWJlcjtcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKFxuXHRcdGBBZGRzIHRoZSBwYXNzZWQgbnVtYmVyIG9mIHllYXJzIHRocm91Z2ggYW4gYXJndW1lbnQgdG8gYSBtYWNybyB0aGF0IHJldHVybnMgYSBkYXRlIG9yIGEgdGltZXN0YW1wLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpO1xufVxuXG5BZGRZZWFyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFllYXJGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gRmFsbGJhY2tGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ2lmRW1wdHknO1xuXHR0aGlzLmRvY0FyZ3VtZW50ICA9ICdhbnknO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oXG5cdFx0YElmIHRoZSBtYWNybyByZXR1cm5zIGFuIGVtcHR5IHZhbHVlLCB0aGVuIHRoZSBmaWx0ZXIgcmV0dXJucyB0aGUgdmFsdWUgcGFzc2VkIGluIHRoZSBhcmd1bWVudGAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpO1xufVxuXG5GYWxsYmFja0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBGYWxsYmFja0ZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBMZW5ndGhGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ2xlbmd0aCc7XG5cdHRoaXMuaXNDbGllbnRTaWRlID0gdHJ1ZTtcblxuXHR0aGlzLmhlbHAgPSBfXyhcblx0XHRgUmV0dXJucyB0aGUgbGVuZ3RoIG9mIGEgc3RyaW5nIG9yIGFycmF5YCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCk7XG59XG5cbkxlbmd0aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBMZW5ndGhGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gU3VidHJhY3REYXlGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ3N1YkRheSc7XG5cdHRoaXMuZG9jQXJndW1lbnQgID0gTnVtYmVyO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oXG5cdFx0YFN1YnRyYWN0cyB0aGUgbnVtYmVyIG9mIGRheXMgYnkgYXJndW1lbnQgZnJvbSBhIG1hY3JvIHRoYXQgcmV0dXJucyBhIGRhdGUgb3IgdGltZXN0YW1wLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpO1xufVxuXG5TdWJ0cmFjdERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdERheUZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdE1vbnRoRmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICdzdWJNb250aCc7XG5cdHRoaXMuZG9jQXJndW1lbnQgID0gTnVtYmVyO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oXG5cdFx0YFN1YnRyYWN0cyB0aGUgbnVtYmVyIG9mIG1vbnRocyBieSBhcmd1bWVudCBmcm9tIGEgbWFjcm8gdGhhdCByZXR1cm5zIGEgZGF0ZSBvciB0aW1lc3RhbXAuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCk7XG59XG5cblN1YnRyYWN0TW9udGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RNb250aEZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdFllYXJGaWx0ZXIoKSB7XG5cdEJhc2VGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZnVsbE5hbWUgICAgID0gKCkgPT4gJ3N1YlllYXInO1xuXHR0aGlzLmRvY0FyZ3VtZW50ICA9IE51bWJlcjtcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKFxuXHRcdGBTdWJ0cmFjdHMgdGhlIG51bWJlciBvZiB5ZWFycyBieSBhcmd1bWVudCBmcm9tIGEgbWFjcm8gdGhhdCByZXR1cm5zIGEgZGF0ZSBvciB0aW1lc3RhbXAuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCk7XG59XG5cblN1YnRyYWN0WWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdFllYXJGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gVG9EYXRlRmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICd0b0RhdGUnO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gKCkgPT4gPD5cblx0XHR7IF9fKFxuXHRcdFx0YEdldHMgdGhlIHRpbWVzdGFtcCBmcm9tIHRoZSBtYWNybyBhbmQgZm9ybWF0cyBpdCBhY2NvcmRpbmcgdG8gdGhlIGZvcm1hdCBvZiB0aGUgRGF0ZSBGaWVsZC5gLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCkgfVxuXHRcdDxoci8+XG5cdFx0eyBfXyggJ0V4YW1wbGU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxuXHRcdDxjb2RlPjIwMjItMDItMjQ8L2NvZGU+XG5cdDwvPjtcbn1cblxuVG9EYXRlRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRGF0ZUZpbHRlcjsiLCJpbXBvcnQgQmFzZUZpbHRlciBmcm9tICcuLi9hYnN0cmFjdC9CYXNlRmlsdGVyJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBUb0RhdGVUaW1lRmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICd0b0RhdGVUaW1lJztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9ICgpID0+IDw+XG5cdFx0eyBfXyhcblx0XHRcdGBHZXRzIHRoZSB0aW1lc3RhbXAgZnJvbSB0aGUgbWFjcm8gYW5kIGZvcm1hdHMgaXQgYWNjb3JkaW5nIHRvIHRoZSBmb3JtYXQgb2YgdGhlIERhdGV0aW1lIEZpZWxkLmAsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSB9XG5cdFx0PGhyLz5cblx0XHR7IF9fKCAnRXhhbXBsZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyB9XG5cdFx0PGNvZGU+MjAyMi0wMi0yNFQwNDoyNTwvY29kZT5cblx0PC8+O1xufVxuXG5Ub0RhdGVUaW1lRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRGF0ZVRpbWVGaWx0ZXI7IiwiaW1wb3J0IEJhc2VGaWx0ZXIgZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUZpbHRlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gVG9UaW1lRmlsdGVyKCkge1xuXHRCYXNlRmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmZ1bGxOYW1lICAgICA9ICgpID0+ICd0b1RpbWUnO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gKCkgPT4gPD5cblx0XHR7IF9fKFxuXHRcdFx0YEdldHMgdGhlIHRpbWVzdGFtcCBmcm9tIHRoZSBtYWNybyBhbmQgZm9ybWF0cyBpdCBhY2NvcmRpbmcgdG8gdGhlIGZvcm1hdCBvZiB0aGUgVGltZSBGaWVsZC5gLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCkgfVxuXHRcdDxoci8+XG5cdFx0eyBfXyggJ0V4YW1wbGU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxuXHRcdDxjb2RlPjA0OjI1PC9jb2RlPlxuXHQ8Lz47XG59XG5cblRvVGltZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb1RpbWVGaWx0ZXI7IiwiLyoqXG4gKiBAcGFyYW0gaW5pdGlhbCAgICAge1N0cmluZ31cbiAqIEBwYXJhbSBuYW1lICAgICAgICB7U3RyaW5nfVxuICogQHBhcmFtIG5vZGVFbGVtZW50IHtIVE1MSW5wdXRFbGVtZW50fVxuICovXG5mdW5jdGlvbiBpbnNlcnRNYWNybyggaW5pdGlhbCwgbmFtZSwgbm9kZUVsZW1lbnQgKSB7XG5cdGNvbnN0IHN0YXJ0ID0gbm9kZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQsXG5cdCAgICAgIGVuZCAgID0gbm9kZUVsZW1lbnQuc2VsZWN0aW9uRW5kO1xuXG5cdGluaXRpYWwgPSBpbml0aWFsID8/ICcnO1xuXG5cdGxldCBzdGFydFN0cmluZyA9IGluaXRpYWwuc2xpY2UoIDAsIHN0YXJ0ICk7XG5cdGNvbnN0IGVuZFN0cmluZyA9IGluaXRpYWwuc2xpY2UoIGVuZCApO1xuXG5cdHN0YXJ0U3RyaW5nID0gc3RhcnRTdHJpbmcgKyBuYW1lO1xuXG5cdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRub2RlRWxlbWVudC5mb2N1cygpO1xuXHRcdG5vZGVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRTdHJpbmcubGVuZ3RoO1xuXHRcdG5vZGVFbGVtZW50LnNlbGVjdGlvbkVuZCAgID0gc3RhcnRTdHJpbmcubGVuZ3RoO1xuXHR9ICk7XG5cblx0cmV0dXJuIHN0YXJ0U3RyaW5nICsgZW5kU3RyaW5nO1xufVxuXG5leHBvcnQgeyBpbnNlcnRNYWNybyB9OyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgeyBpbnNlcnRNYWNybyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlUmVmLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHVzZUluc2VydE1hY3JvKCBhdHRyTmFtZSApIHtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzLCB1cGRhdGVBdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRjb25zdCBpbml0aWFsID0gYXR0cmlidXRlc1sgYXR0ck5hbWUgXSA/PyAnJztcblxuXHRjb25zdCBpbnB1dCAgPSB1c2VSZWYoKTtcblx0Y29uc3QgdXBkYXRlID0gbWFjcm8gPT4ge1xuXHRcdHVwZGF0ZUF0dHJpYnV0ZXMoIHtcblx0XHRcdFsgYXR0ck5hbWUgXTogaW5zZXJ0TWFjcm8oIGluaXRpYWwsIG1hY3JvLCBpbnB1dC5jdXJyZW50ICksXG5cdFx0fSApO1xuXHR9O1xuXG5cdHJldHVybiBbIGlucHV0LCB1cGRhdGUgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5zZXJ0TWFjcm87IiwiaW1wb3J0IEJhc2VNYWNybyBmcm9tICcuLi9hYnN0cmFjdC9CYXNlTWFjcm8nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBDdXJyZW50RGF0ZU1hY3JvKCkge1xuXHRCYXNlTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubmFtZSAgICAgICAgID0gJ0N1cnJlbnREYXRlJztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuZnVsbEhlbHAgPSAoKSA9PiA8PlxuXHRcdHsgX18oICdSZXR1cm5zIHRoZSBjdXJyZW50IHRpbWVzdGFtcC4gUmVwbGFjaW5nJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdHsgJyAnIH1cblx0XHQ8Y29kZT5EYXRlLm5vdygpPC9jb2RlPlxuXHQ8Lz47XG59XG5cbkN1cnJlbnREYXRlTWFjcm8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZU1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50RGF0ZU1hY3JvOyIsImltcG9ydCBCYXNlTWFjcm8gZnJvbSAnLi4vYWJzdHJhY3QvQmFzZU1hY3JvJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gRGF5SW5TZWNNYWNybygpIHtcblx0QmFzZU1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLm5hbWUgICAgICAgICA9ICdEYXlfSW5fU2VjJztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKCAnTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBvbmUgZGF5JywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG59XG5cbkRheUluU2VjTWFjcm8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZU1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBEYXlJblNlY01hY3JvOyIsImltcG9ydCBCYXNlTWFjcm8gZnJvbSAnLi4vYWJzdHJhY3QvQmFzZU1hY3JvJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gTWluSW5TZWNNYWNybygpIHtcblx0QmFzZU1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLm5hbWUgICAgICAgICA9ICdNaW5fSW5fU2VjJztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKFxuXHRcdCdOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIG9uZSBtaW51dGUnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KTtcbn1cblxuTWluSW5TZWNNYWNyby5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1pbkluU2VjTWFjcm87IiwiaW1wb3J0IEJhc2VNYWNybyBmcm9tICcuLi9hYnN0cmFjdC9CYXNlTWFjcm8nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBNb250aEluU2VjTWFjcm8oKSB7XG5cdEJhc2VNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5uYW1lICAgICAgICAgPSAnTW9udGhfSW5fU2VjJztcblx0dGhpcy5pc0NsaWVudFNpZGUgPSB0cnVlO1xuXG5cdHRoaXMuaGVscCA9IF9fKCAnTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBvbmUgbW9udGgnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbn1cblxuTW9udGhJblNlY01hY3JvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9udGhJblNlY01hY3JvOyIsImltcG9ydCBCYXNlTWFjcm8gZnJvbSAnLi4vYWJzdHJhY3QvQmFzZU1hY3JvJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gWWVhckluU2VjTWFjcm8oKSB7XG5cdEJhc2VNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5uYW1lICAgICAgICAgPSAnWWVhcl9Jbl9TZWMnO1xuXHR0aGlzLmlzQ2xpZW50U2lkZSA9IHRydWU7XG5cblx0dGhpcy5oZWxwID0gX18oICdOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIG9uZSB5ZWFyJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG59XG5cblllYXJJblNlY01hY3JvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgWWVhckluU2VjTWFjcm87IiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cmVnaXN0ZXJNYWNybyggaXRlbXMsIGlzQ2xpZW50ID0gdHJ1ZSApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnJlZ2lzdGVyTWFjcm8sXG5cdFx0XHRpdGVtcyxcblx0XHRcdGlzQ2xpZW50LFxuXHRcdH07XG5cdH0sXG5cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRyZWdpc3Rlck1hY3JvOiAnUkVHSVNURVJfTUFDUk8nLFxuXHRyZWdpc3RlckZpbHRlcjogJ1JFR0lTVEVSX0ZJTFRFUicsXG59O1xuXG5cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEJhc2VNYWNybyBmcm9tICcuLi9hYnN0cmFjdC9CYXNlTWFjcm8nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdFsgY29uc3RhbnRzLnJlZ2lzdGVyTWFjcm8gXSggc3RhdGUsIGFjdGlvbiApIHtcblx0XHRjb25zdCB7IGl0ZW1zLCBpc0NsaWVudCB9ID0gYWN0aW9uO1xuXHRcdGNvbnN0IG1hY3JvcyAgICAgICAgICAgICAgPSBBcnJheS5pc0FycmF5KCBpdGVtcyApID8gaXRlbXMgOiBbIGl0ZW1zIF07XG5cblx0XHRmb3IgKCBjb25zdCBtYWNybyBvZiBtYWNyb3MgKSB7XG5cdFx0XHRpZiAoIG1hY3JvIGluc3RhbmNlb2YgQmFzZU1hY3JvICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ15eXiBJbnZhbGlkIG1hY3JvIGl0ZW0gXl5eJyApO1xuXHRcdH1cblxuXHRcdGlmICggaXNDbGllbnQgKSB7XG5cdFx0XHRzdGF0ZS5jbGllbnRNYWNyb3MucHVzaCggLi4ubWFjcm9zICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0c3RhdGUuc2VydmVyTWFjcm9zLnB1c2goIC4uLm1hY3JvcyApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcbn07IiwiaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcblxuY29uc3QgeyBjcmVhdGVSZWR1eFN0b3JlIH0gPSB3cC5kYXRhO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCAnamV0LWZvcm1zL21hY3JvcycsIHtcblx0cmVkdWNlcixcblx0YWN0aW9ucyxcblx0c2VsZWN0b3JzLFxufSApO1xuIiwiaW1wb3J0IGRpc3BhdGNoZXJzIGZyb20gJy4vZGlzcGF0Y2hlcnMnO1xuaW1wb3J0IEN1cnJlbnREYXRlTWFjcm8gZnJvbSAnLi4vbWFjcm9zL0N1cnJlbnREYXRlTWFjcm8nO1xuaW1wb3J0IE1pbkluU2VjTWFjcm8gZnJvbSAnLi4vbWFjcm9zL01pbkluU2VjTWFjcm8nO1xuaW1wb3J0IE1vbnRoSW5TZWNNYWNybyBmcm9tICcuLi9tYWNyb3MvTW9udGhJblNlY01hY3JvJztcbmltcG9ydCBEYXlJblNlY01hY3JvIGZyb20gJy4uL21hY3Jvcy9EYXlJblNlY01hY3JvJztcbmltcG9ydCBZZWFySW5TZWNNYWNybyBmcm9tICcuLi9tYWNyb3MvWWVhckluU2VjTWFjcm8nO1xuaW1wb3J0IEFkZERheUZpbHRlciBmcm9tICcuLi9maWx0ZXJzL0FkZERheUZpbHRlcic7XG5pbXBvcnQgQWRkTW9udGhGaWx0ZXIgZnJvbSAnLi4vZmlsdGVycy9BZGRNb250aEZpbHRlcic7XG5pbXBvcnQgQWRkWWVhckZpbHRlciBmcm9tICcuLi9maWx0ZXJzL0FkZFllYXJGaWx0ZXInO1xuaW1wb3J0IEZhbGxiYWNrRmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvRmFsbGJhY2tGaWx0ZXInO1xuaW1wb3J0IExlbmd0aEZpbHRlciBmcm9tICcuLi9maWx0ZXJzL0xlbmd0aEZpbHRlcic7XG5pbXBvcnQgVG9EYXRlRmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvVG9EYXRlRmlsdGVyJztcbmltcG9ydCBUb0RhdGVUaW1lRmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvVG9EYXRlVGltZUZpbHRlcic7XG5pbXBvcnQgVG9UaW1lRmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvVG9UaW1lRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdERheUZpbHRlciBmcm9tICcuLi9maWx0ZXJzL1N1YnRyYWN0RGF5RmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdE1vbnRoRmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvU3VidHJhY3RNb250aEZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3RZZWFyRmlsdGVyIGZyb20gJy4uL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyJztcblxuLyoqXG4gKlxuICogQHR5cGUge3tcbiAqIG1hY3JvczogQmFzZU1hY3JvW10sXG4gKiBmaWx0ZXJzOiBCYXNlRmlsdGVyW11cbiAqIH19XG4gKi9cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XG5cdG1hY3JvczogW1xuXHRcdG5ldyBDdXJyZW50RGF0ZU1hY3JvKCksXG5cdFx0bmV3IE1pbkluU2VjTWFjcm8oKSxcblx0XHRuZXcgRGF5SW5TZWNNYWNybygpLFxuXHRcdG5ldyBNb250aEluU2VjTWFjcm8oKSxcblx0XHRuZXcgWWVhckluU2VjTWFjcm8oKSxcblx0XSxcblx0ZmlsdGVyczogW1xuXHRcdG5ldyBGYWxsYmFja0ZpbHRlcigpLFxuXHRcdG5ldyBMZW5ndGhGaWx0ZXIoKSxcblx0XHRuZXcgQWRkRGF5RmlsdGVyKCksXG5cdFx0bmV3IEFkZE1vbnRoRmlsdGVyKCksXG5cdFx0bmV3IEFkZFllYXJGaWx0ZXIoKSxcblx0XHRuZXcgU3VidHJhY3REYXlGaWx0ZXIoKSxcblx0XHRuZXcgU3VidHJhY3RNb250aEZpbHRlcigpLFxuXHRcdG5ldyBTdWJ0cmFjdFllYXJGaWx0ZXIoKSxcblx0XHRuZXcgVG9EYXRlRmlsdGVyKCksXG5cdFx0bmV3IFRvRGF0ZVRpbWVGaWx0ZXIoKSxcblx0XHRuZXcgVG9UaW1lRmlsdGVyKCksXG5cdF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xuXHRjb25zdCBjYWxsYmFjayA9IGRpc3BhdGNoZXJzWyBhY3Rpb24/LnR5cGUgXTtcblxuXHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBjYWxsYmFjayggc3RhdGUsIGFjdGlvbiApO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufSIsImNvbnN0IHNlbGVjdG9ycyA9IHtcblx0Z2V0Q2xpZW50TWFjcm9zKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUubWFjcm9zLmZpbHRlcihcblx0XHRcdC8qKlxuXHRcdFx0ICogQHBhcmFtIG1hY3JvIHtCYXNlTWFjcm99XG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uICggbWFjcm8gKSB7XG5cdFx0XHRcdHJldHVybiBtYWNyby5pc0NsaWVudFNpZGU7XG5cdFx0XHR9LFxuXHRcdCk7XG5cdH0sXG5cdGdldFNlcnZlck1hY3Jvcyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLm1hY3Jvcy5maWx0ZXIoXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwYXJhbSBtYWNybyB7QmFzZU1hY3JvfVxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiAoIG1hY3JvICkge1xuXHRcdFx0XHRyZXR1cm4gbWFjcm8uaXNTZXJ2ZXJTaWRlO1xuXHRcdFx0fSxcblx0XHQpO1xuXHR9LFxuXHRnZXRDbGllbnRGaWx0ZXJzKCBzdGF0ZSApIHtcblx0XHRyZXR1cm4gc3RhdGUuZmlsdGVycy5maWx0ZXIoXG5cdFx0XHQvKipcblx0XHRcdCAqIEBwYXJhbSBtYWNybyB7QmFzZUZpbHRlcn1cblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gKCBtYWNybyApIHtcblx0XHRcdFx0cmV0dXJuIG1hY3JvLmlzQ2xpZW50U2lkZTtcblx0XHRcdH0sXG5cdFx0KTtcblx0fSxcblx0Z2V0U2VydmVyRmlsdGVycyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLmZpbHRlcnMuZmlsdGVyKFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAcGFyYW0gbWFjcm8ge0Jhc2VGaWx0ZXJ9XG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uICggbWFjcm8gKSB7XG5cdFx0XHRcdHJldHVybiBtYWNyby5pc1NlcnZlclNpZGU7XG5cdFx0XHR9LFxuXHRcdCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC4uLnNlbGVjdG9ycyxcbn07IiwiY29uc3Qgd2FpdEZvckVkaXRvciA9IGFzeW5jICgpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRjb25zdCBwb3N0VHlwZSA9IHdwLmRhdGEuc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEN1cnJlbnRQb3N0VHlwZSgpO1xuXHRcdFx0aWYgKHBvc3RUeXBlKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwKTtcblx0fSk7XG59O1xuXG5jb25zdCBnZXRNZXRhID0gKCkgPT4ge1xuXHRjb25zdCB7IHNlbGVjdCB9ID0gd3AuZGF0YTtcblx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApO1xufTtcblxuY29uc3QgZWRpdE1ldGEgPSAoIG5hbWUsIG9iamVjdFZhbHVlICkgPT4ge1xuXHRjb25zdCB7IGRpc3BhdGNoIH0gPSB3cC5kYXRhO1xuXG5cdGNvbnN0IHsgZWRpdFBvc3QgfSA9IGRpc3BhdGNoKCAnY29yZS9lZGl0b3InICk7XG5cdGNvbnN0IGZvcm1CdWlsZGVyTWV0YSA9IGdldE1ldGEoKTtcblxuXHRlZGl0UG9zdCgge1xuXHRcdG1ldGE6IChcblx0XHRcdHtcblx0XHRcdFx0Li4uZm9ybUJ1aWxkZXJNZXRhLFxuXHRcdFx0XHRbIG5hbWUgXTogSlNPTi5zdHJpbmdpZnkoIG9iamVjdFZhbHVlICksXG5cdFx0XHR9XG5cdFx0KSxcblx0fSApO1xufTtcblxuY29uc3QgZ2V0QWN0aXZlQWN0aW9ucyA9IGFjdGlvbnMgPT4ge1xuXHRjb25zdCByZXNwb25zZSA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IFsgYWN0aW9uSWQsIHsgYWN0aXZlID0gZmFsc2UgfSBdIG9mIE9iamVjdC5lbnRyaWVzKCBhY3Rpb25zICkgKSB7XG5cdFx0aWYgKCAhIGFjdGl2ZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXNwb25zZS5wdXNoKCArIGFjdGlvbklkICk7XG5cdH1cblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRHYXRld2F5c0FjdGlvbnMgPSAoKSA9PiB7XG5cdGNvbnN0IGZvcm1CdWlsZGVyTWV0YSA9IGdldE1ldGEoKTtcblxuXHRsZXQgZ2F0ZXdheXMgPSB7fSxcblx0XHRhY3Rpb25zID0gW107XG5cblx0dHJ5IHtcblx0XHRnYXRld2F5cyA9IEpTT04ucGFyc2UoIGZvcm1CdWlsZGVyTWV0YS5famZfZ2F0ZXdheXMgKTtcblx0fSBjYXRjaCAoIGVycm9yICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGlmICggMSA9PT0gZ2F0ZXdheXMubGFzdF9taWdyYXRlICkge1xuXHRcdHRocm93ICdtaWdyYXRlZCc7XG5cdH1cblxuXHR0cnkge1xuXHRcdGFjdGlvbnMgPSBKU09OLnBhcnNlKCBmb3JtQnVpbGRlck1ldGEuX2pmX2FjdGlvbnMgKTtcblx0fSBjYXRjaCAoIGVycm9yICkge1xuXHRcdHJldHVybiBbIGdhdGV3YXlzIF07XG5cdH1cblxuXHRyZXR1cm4gWyBnYXRld2F5cywgYWN0aW9ucyBdO1xufTtcblxuY29uc3QgbWlncmF0ZSA9ICggZ2F0ZXdheXMsIGFjdGlvbnMgKSA9PiB7XG5cdGNvbnN0IG9uU3VjY2VzcyA9IGdldEFjdGl2ZUFjdGlvbnMoIGdhdGV3YXlzLm5vdGlmaWNhdGlvbnNfc3VjY2VzcyA/PyB7fSApO1xuXHRjb25zdCBvbkZhaWxlZCA9IGdldEFjdGl2ZUFjdGlvbnMoIGdhdGV3YXlzLm5vdGlmaWNhdGlvbnNfZmFpbGVkID8/IHt9ICk7XG5cdGNvbnN0IG9uQmVmb3JlID0gZ2V0QWN0aXZlQWN0aW9ucyggZ2F0ZXdheXMubm90aWZpY2F0aW9uc19iZWZvcmUgPz8ge30gKTtcblx0Y29uc3QgdXNlUmVkaXJlY3QgPSBnYXRld2F5cy51c2Vfc3VjY2Vzc19yZWRpcmVjdCA/PyBmYWxzZTtcblxuXHRsZXQgaGFzUmVkaXJlY3QgPSBmYWxzZTtcblxuXHRpZiAoICEgb25TdWNjZXNzLmxlbmd0aCAmJiAhIG9uRmFpbGVkLmxlbmd0aCAmJiAhIG9uQmVmb3JlLmxlbmd0aCAmJiAhIHVzZVJlZGlyZWN0ICkge1xuXHRcdHRocm93ICdub3RoaW5nX3RvX21pZ3JhdGUnO1xuXHR9XG5cblx0cmV0dXJuIGFjdGlvbnMubWFwKCBhY3Rpb24gPT4ge1xuXHRcdGFjdGlvbi5ldmVudHMgPSBhY3Rpb24uZXZlbnRzID8/IFtdO1xuXG5cdFx0aWYgKCBvblN1Y2Nlc3MuaW5jbHVkZXMoIGFjdGlvbi5pZCApICkge1xuXHRcdFx0YWN0aW9uLmV2ZW50cy5wdXNoKCAnR0FURVdBWS5TVUNDRVNTJyApO1xuXHRcdH1cblx0XHRpZiAoIG9uRmFpbGVkLmluY2x1ZGVzKCBhY3Rpb24uaWQgKSApIHtcblx0XHRcdGFjdGlvbi5ldmVudHMucHVzaCggJ0dBVEVXQVkuRkFJTEVEJyApO1xuXHRcdH1cblx0XHRpZiAoIG9uQmVmb3JlLmluY2x1ZGVzKCBhY3Rpb24uaWQgKSApIHtcblx0XHRcdGFjdGlvbi5ldmVudHMucHVzaCggJ0RFRkFVTFQuUFJPQ0VTUycgKTtcblx0XHR9XG5cdFx0aWYgKCB1c2VSZWRpcmVjdCAmJiAhIGhhc1JlZGlyZWN0ICYmICdyZWRpcmVjdF90b19wYWdlJyA9PT0gYWN0aW9uLnR5cGUgKSB7XG5cdFx0XHRhY3Rpb24uZXZlbnRzLnB1c2goICdHQVRFV0FZLlNVQ0NFU1MnICk7XG5cdFx0XHRoYXNSZWRpcmVjdCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjdGlvbjtcblx0fSApO1xufTtcblxuY29uc3QgcnVuRXZlbnQgPSBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IHdhaXRGb3JFZGl0b3IoKTtcblxuXHRsZXQgZ2F0ZXdheXMgPSB7fSwgYWN0aW9ucyA9IFtdO1xuXG5cdHRyeSB7XG5cdFx0WyBnYXRld2F5cyA9IHt9LCBhY3Rpb25zID0gW10gXSA9IGdldEdhdGV3YXlzQWN0aW9ucygpO1xuXHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Z2F0ZXdheXMubGFzdF9taWdyYXRlID0gMTtcblx0ZWRpdE1ldGEoICdfamZfZ2F0ZXdheXMnLCBnYXRld2F5cyApO1xuXG5cdGNvbnN0IHdpdGhDb25kaXRpb25zID0gW107XG5cdHRyeSB7XG5cdFx0d2l0aENvbmRpdGlvbnMucHVzaCggLi4ubWlncmF0ZSggZ2F0ZXdheXMsIGFjdGlvbnMgKSApO1xuXHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWRpdE1ldGEoICdfamZfYWN0aW9ucycsIHdpdGhDb25kaXRpb25zICk7XG59O1xuXG53cC5kb21SZWFkeSgoKSA9PiBydW5FdmVudCgpKTsiLCJpbXBvcnQgR3JvdXBlZFNlbGVjdENvbnRyb2wgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Hcm91cGVkU2VsZWN0Q29udHJvbCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG5cdCAgICAgIEN1c3RvbVNlbGVjdENvbnRyb2wsXG5cdCAgICAgIENhcmQsXG5cdCAgICAgIENhcmRCb2R5LFxuXHQgICAgICBDYXJkSGVhZGVyLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBBdmFpbGFibGVNYXBGaWVsZFByZXNldCgge1xuXHRmaWVsZHNNYXAsXG5cdGZpZWxkLFxuXHRpbmRleCxcblx0dmFsdWUsXG5cdG9uQ2hhbmdlVmFsdWUsXG5cdGlzTWFwRmllbGRWaXNpYmxlLFxufSApIHtcblxuXHRsZXQgY3VycmVudFZhbCA9IG51bGw7XG5cblx0aWYgKCAhIGZpZWxkc01hcCApIHtcblx0XHRmaWVsZHNNYXAgPSB7fTtcblx0fVxuXG5cdGN1cnJlbnRWYWwgPSBmaWVsZHNNYXBbIGZpZWxkIF07XG5cblx0aWYgKCAhIGN1cnJlbnRWYWwgfHwgJ29iamVjdCcgIT09IHR5cGVvZiBjdXJyZW50VmFsICkge1xuXHRcdGN1cnJlbnRWYWwgPSB7fTtcblx0fVxuXG5cdGNvbnN0IEF2YWlsYWJsZUZpZWxkV3JhcHBlciA9ICggeyBmaWVsZDogZmllbGRMb2NhbCwgbmFtZSwgaW5kZXg6IGluZGV4TG9jYWwsIGZJbmRleCwgY2hpbGRyZW4gfSApID0+IDxDYXJkXG5cdFx0a2V5PXsgZmllbGRMb2NhbCArIG5hbWUgKyBpbmRleExvY2FsICsgZkluZGV4IH1cblx0XHRzaXplPXsgJ2V4dHJhU21hbGwnIH1cblx0XHRzdHlsZT17IHsgbWFyZ2luQm90dG9tOiAnMTBweCcgfSB9XG5cdD5cblx0XHQ8Q2FyZEhlYWRlcj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT0namV0LWxhYmVsLW92ZXJmbG93Jz57IGZpZWxkTG9jYWwgfTwvc3Bhbj5cblx0XHQ8L0NhcmRIZWFkZXI+XG5cdFx0PENhcmRCb2R5XG5cdFx0XHRrZXk9eyBmaWVsZExvY2FsICsgbmFtZSArIGluZGV4TG9jYWwgKyBmSW5kZXggfVxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fZmllbGRzLW1hcC1pdGVtJyB9XG5cdFx0PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9DYXJkQm9keT5cblx0PC9DYXJkPjtcblxuXHRmdW5jdGlvbiBBdmFpbGFibGVGaWVsZFdyYXBwZXJGdW5jKCB7IGZpZWxkOiBmaWVsZExvY2FsLCBuYW1lLCBpbmRleDogaW5kZXhMb2NhbCwgZkluZGV4IH0sIGNoaWxkcmVuICkge1xuXHRcdHJldHVybiA8Q2FyZFxuXHRcdFx0a2V5PXsgZmllbGRMb2NhbCArIG5hbWUgKyBpbmRleExvY2FsICsgZkluZGV4IH1cblx0XHRcdHNpemU9eyAnZXh0cmFTbWFsbCcgfVxuXHRcdFx0c3R5bGU9eyB7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH0gfVxuXHRcdD5cblx0XHRcdDxDYXJkSGVhZGVyPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2pldC1sYWJlbC1vdmVyZmxvdyc+eyBmaWVsZExvY2FsIH08L3NwYW4+XG5cdFx0XHQ8L0NhcmRIZWFkZXI+XG5cdFx0XHQ8Q2FyZEJvZHlcblx0XHRcdFx0a2V5PXsgZmllbGRMb2NhbCArIG5hbWUgKyBpbmRleExvY2FsICsgZkluZGV4IH1cblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fZmllbGRzLW1hcC1pdGVtJyB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0PC9DYXJkQm9keT5cblx0XHQ8L0NhcmQ+O1xuXHR9XG5cblx0cmV0dXJuIDxGcmFnbWVudCBrZXk9eyBgbWFwX2ZpZWxkX3ByZXNldF8keyBmaWVsZCArIGluZGV4IH1gIH0+XG5cblx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb24gKi99XG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLm1hcF9maWVsZHMubWFwKCAoIGRhdGEsIGZJbmRleCApID0+IHtcblx0XHRcdGNvbnN0IHByb3BzID0geyBmaWVsZCwgbmFtZTogZGF0YS5uYW1lLCBpbmRleCwgZkluZGV4IH07XG5cblx0XHRcdGNvbnN0IHVuaXFLZXkgPSAnY29udHJvbF8nICsgZmllbGQgKyBkYXRhLm5hbWUgKyBpbmRleCArIGZJbmRleDtcblxuXHRcdFx0c3dpdGNoICggZGF0YS50eXBlICkge1xuXHRcdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcblx0XHRcdFx0XHRcdEF2YWlsYWJsZUZpZWxkV3JhcHBlckZ1bmMoIHByb3BzLCA8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSArICdUZXh0Q29udHJvbCcgfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcblx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcblx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxuXHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdFx0Lz4gKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRcdFx0cmV0dXJuICggaXNNYXBGaWVsZFZpc2libGUoIHZhbHVlLCBkYXRhLCBmaWVsZCApICYmXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGNhc2UgJ2N1c3RvbV9zZWxlY3QnOlxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxuXHRcdFx0XHRcdFx0XHQ8Q3VzdG9tU2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB7IHNlbGVjdGVkSXRlbSB9ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBzZWxlY3RlZEl0ZW0ua2V5O1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcblx0XHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgZGF0YS5vcHRpb25zLmZpbmQoIG9wdGlvbiA9PiBvcHRpb24ua2V5ID09PSBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPiApO1xuXHRcdFx0XHRjYXNlICdncm91cGVkX3NlbGVjdCc6XG5cdFx0XHRcdFx0cmV0dXJuICggaXNNYXBGaWVsZFZpc2libGUoIHZhbHVlLCBkYXRhLCBmaWVsZCApICYmXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XG5cdFx0XHRcdFx0XHRcdDxHcm91cGVkU2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbCxcblx0XHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9BdmFpbGFibGVGaWVsZFdyYXBwZXI+ICk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fSApIH1cblx0PC9GcmFnbWVudD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF2YWlsYWJsZU1hcEZpZWxkUHJlc2V0OyIsImltcG9ydCB3aXRoUHJlc2V0IGZyb20gJy4vd2l0aFByZXNldCc7XG5pbXBvcnQgR2xvYmFsRmllbGRQcmVzZXQgZnJvbSAnLi9HbG9iYWxGaWVsZFByZXNldCc7XG5pbXBvcnQgTWFwRmllbGRQcmVzZXQgZnJvbSAnLi9NYXBGaWVsZFByZXNldCc7XG5pbXBvcnQgQ29udHJvbFByZXNldFJlc3RyaWN0aW9uQ29udGV4dFxuXHRmcm9tICcuLi9jb250ZXh0L0NvbnRyb2xQcmVzZXRSZXN0cmljdGlvbkNvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBUb2dnbGVDb250cm9sLCBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmxldCBEeW5hbWljUHJlc2V0ID0gZnVuY3Rpb24gKCB7XG5cdHZhbHVlLFxuXHRvbkNoYW5nZSxcblx0cGFyc2VWYWx1ZSxcblx0ZXhjbHVkZU9wdGlvbnMsXG5cdGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcblx0aXNWaXNpYmxlLFxufSApIHtcblxuXHRjb25zdCBwb3NpdGlvbiAgID0gJ2R5bmFtaWMnO1xuXHRjb25zdCBzdGF0ZVZhbHVlID0gcGFyc2VWYWx1ZSggdmFsdWUgKTtcblxuXHRjb25zdCByZXN0cmljdGlvbkNvbnRleHQgPSB1c2VDb250ZXh0KCBDb250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0ICk7XG5cblx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggbmV3VmFsdWUsIG5hbWUgKSA9PiB7XG5cdFx0b25DaGFuZ2UoICgpID0+IEpTT04uc3RyaW5naWZ5KFxuXHRcdFx0eyAuLi5zdGF0ZVZhbHVlLCBbIG5hbWUgXTogbmV3VmFsdWUgfSxcblx0XHQpICk7XG5cdH07XG5cblx0cmV0dXJuIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17IDQgfT5cblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcuZ2xvYmFsX2ZpZWxkcy5tYXAoXG5cdFx0XHQoIGRhdGEsIGluZGV4ICkgPT4gPEdsb2JhbEZpZWxkUHJlc2V0XG5cdFx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cblx0XHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlIH1cblx0XHRcdFx0aW5kZXg9eyBpbmRleCB9XG5cdFx0XHRcdGRhdGE9eyBkYXRhIH1cblx0XHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XG5cdFx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cblx0XHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cblx0XHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XG5cdFx0XHQvPiApIH1cblxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5tYXBfZmllbGRzLm1hcChcblx0XHRcdCggZGF0YSwgaW5kZXggKSA9PiA8TWFwRmllbGRQcmVzZXRcblx0XHRcdFx0a2V5PXsgYGN1cnJlbnRfZmllbGRfJHsgZGF0YS5uYW1lIH1fJHsgaW5kZXggfWAgfVxuXHRcdFx0XHRjdXJyZW50U3RhdGU9eyBzdGF0ZVZhbHVlIH1cblx0XHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIF0gfVxuXHRcdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdFx0ZGF0YT17IGRhdGEgfVxuXHRcdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XG5cdFx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxuXHRcdFx0Lz4gKSB9XG5cdFx0eyByZXN0cmljdGlvbkNvbnRleHQ/LnNob3cgJiYgPFRvZ2dsZUNvbnRyb2xcblx0XHRcdGxhYmVsPXsgX18oICdSZXN0cmljdCBhY2Nlc3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRoZWxwPXsgKFxuXHRcdFx0XHQgICAgICAgc3RhdGVWYWx1ZS5yZXN0cmljdGVkID8/IHRydWVcblx0XHRcdCAgICAgICApID8gX18oXG5cdFx0XHRcdGBXaWxsIHNldCBkZWZhdWx0IHZhbHVlIGZyb20gcHJlc2V0IG9ubHkgZm9yIHVzZXJzIHdobyBhbGxvd2VkIHRvIGVkaXQgdGhpcyB2YWx1ZWAsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgOiBfXyhcblx0XHRcdFx0YEFsd2F5cyBzZXQgZGVmYXVsdCB2YWx1ZSBmcm9tIHByZXNldC4gTWFrZSBzdXJlIGl0IGNhbid0IGJlIGFjY2lkZW50YWxseSBjaGFuZ2VkIGZyb20gZm9ybSBBY3Rpb25zYCxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSB9XG5cdFx0XHRjaGVja2VkPXsgc3RhdGVWYWx1ZS5yZXN0cmljdGVkID8/IHRydWUgfVxuXHRcdFx0b25DaGFuZ2U9eyByZXN0cmljdGVkID0+IG9uQ2hhbmdlKCBwcmV2ID0+IEpTT04uc3RyaW5naWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0XHRyZXN0cmljdGVkOiByZXN0cmljdGVkID8gdW5kZWZpbmVkIDogcmVzdHJpY3RlZCxcblx0XHRcdFx0fSxcblx0XHRcdCkgKSB9XG5cdFx0Lz4gfVxuXHQ8L0ZsZXg+O1xufTtcblxuRHluYW1pY1ByZXNldCA9IHdpdGhQcmVzZXQoIER5bmFtaWNQcmVzZXQgKTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1ByZXNldDsiLCJpbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSAnLi4vLi4vYWN0aW9uLW1vZGFsL2NvbXBvbmVudHMvQWN0aW9uTW9kYWwnO1xuXG5jb25zdCB7XG5cdCAgICAgIFBhdGgsXG5cdCAgICAgIFNWRyxcblx0ICAgICAgQmFzZUNvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5mdW5jdGlvbiBGaWVsZFdpdGhQcmVzZXQoIHtcblx0Y2hpbGRyZW4gPSBudWxsLFxuXHRNb2RhbEVkaXRvcixcblx0dHJpZ2dlckNsYXNzZXMgPSBbXSxcblx0YmFzZUNvbnRyb2xQcm9wcyA9IHt9LFxufSApIHtcblxuXHRjb25zdCBbIG1vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGUgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdGNvbnN0IGNoYW5nZU1vZGFsU3RhdGUgPSAoKSA9PiB7XG5cdFx0c2V0TW9kYWxTdGF0ZSggcHJldiA9PiAhcHJldiApO1xuXHR9O1xuXHRjb25zdCBjbGFzc05hbWVzICAgICAgID0gW1xuXHRcdCdqZXQtZm9ybS1keW5hbWljLXByZXNldF9fdHJpZ2dlcicsXG5cdFx0Li4udHJpZ2dlckNsYXNzZXMsXG5cdF0uam9pbiggJyAnICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PEJhc2VDb250cm9sXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1keW5hbWljLXByZXNldFwiXG5cdFx0XHR7IC4uLmJhc2VDb250cm9sUHJvcHMgfVxuXHRcdD5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzLGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqLyB9XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxuXHRcdFx0XHRvbkNsaWNrPXsgY2hhbmdlTW9kYWxTdGF0ZSB9XG5cdFx0XHQ+PFNWRyB2aWV3Qm94PVwiMCAwIDU0IDY0XCIgZmlsbD1cIm5vbmVcIlxuXHRcdFx0ICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoXG5cdFx0XHRcdGQ9XCJNNDIuNjM5NiAyNi40MzQ3QzM3Ljg2ODIgMjcuMzQzNiAzMi41NjY2IDI4LjAyNTIgMjcuMTg5NCAyOC4wMjUyQzIxLjgxMjEgMjguMDI1MiAxNi40MzQ4IDI3LjM0MzYgMTEuNzM5MSAyNi40MzQ3QzYuOTY3NzQgMjUuNDUwMiAzLjE4MDkzIDIzLjg1OTcgMC4zNzg2OCAyMS45NjYzTDAuMzc4NjggMjguMDI1MkMwLjM3ODY4IDI5LjUzOTkgMS41OTA0NiAzMS4xMzA0IDMuNzg2ODIgMzIuNDE3OUM1Ljk4MzE3IDMzLjcwNTQgOS40NjcwNCAzNC45MTcyIDEzLjYzMjUgMzUuNTk4OEMxNy43OTggMzYuMjgwNSAyMi4xMTUgMzYuODEwNiAyNy4xODk0IDM2LjgxMDZDMzIuMjYzNyAzNi44MTA2IDM2LjY1NjQgMzYuNTA3NyA0MC43NDYyIDM1LjU5ODhDNDQuODM1OSAzNC42OSA0OC4zMTk4IDMzLjcwNTQgNTAuNTE2MiAzMi40MTc5QzUyLjcxMjUgMzEuMTMwNCA1NCAyOS41Mzk5IDU0IDI4LjAyNTJMNTQgMjEuOTY2M0M1MS4xMjIgMjMuODU5NyA0Ny4zMzUyIDI1LjQ1MDIgNDIuNjM5NiAyNi40MzQ3Wk00Mi42Mzk2IDUzLjU0ODRDMzcuODY4MiA1NC41MzI5IDMyLjU2NjYgNTUuMTM4OCAyNy4xODk0IDU1LjEzODhDMjEuODEyMSA1NS4xMzg4IDE2LjQzNDggNTQuNTMyOSAxMS43MzkxIDUzLjU0ODRDNy4wNDM0OCA1Mi41NjM4IDMuMTgwOTMgNTEuMDQ5MSAwLjM3ODY4MiA0OS4xNTU2TDAuMzc4NjgyIDU1LjEzODhDMC4zNzg2ODMgNTYuNzI5MyAxLjU5MDQ2IDU4LjMxOTcgMy43ODY4MiA1OS41MzE1QzYuMzYxODYgNjAuODE5IDkuNDY3MDUgNjIuMTA2NiAxMy42MzI1IDYyLjcxMjVDMTcuNzIyMyA2My42OTcgMjIuMTE1IDY0IDI3LjE4OTQgNjRDMzIuMjYzNyA2NCAzNi42NTY0IDYzLjY5NyA0MC43NDYyIDYyLjcxMjVDNDQuODM1OSA2MS44MDM2IDQ4LjMxOTggNjAuODE5IDUwLjUxNjIgNTkuNTMxNUM1Mi43MTI1IDU3Ljk0MTEgNTQgNTYuNzI5MyA1NCA1NC44MzU5TDU0IDQ4Ljg1MjdDNTEuMTIyIDUxLjA0OTEgNDcuMzM1MiA1Mi4yNjA4IDQyLjYzOTYgNTMuNTQ4NFpNNDIuNjM5NiAzOS45OTE1QzM3Ljg2ODIgNDAuOTAwNCAzMi41NjY2IDQxLjU4MiAyNy4xODk0IDQxLjU4MkMyMS44MTIxIDQxLjU4MiAxNi40MzQ4IDQwLjkwMDQgMTEuNzM5MSAzOS45OTE1QzYuOTY3NzQgMzkuMDA3IDMuMTgwOTMgMzcuNDkyMiAwLjM3ODY4MSAzNS41OTg4TDAuMzc4NjgxIDQxLjU4MkMwLjM3ODY4MSA0My4xNzI1IDEuNTkwNDYgNDQuNjg3MiAzLjc4NjgyIDQ1Ljk3NDdDNi4zNjE4NSA0Ny4yNjIyIDkuNDY3MDUgNDguNDc0IDEzLjYzMjUgNDkuMTU1NkMxNy43MjIzIDUwLjA2NDUgMjIuMTE1IDUwLjM2NzQgMjcuMTg5NCA1MC4zNjc0QzMyLjI2MzcgNTAuMzY3NCAzNi42NTY0IDUwLjA2NDUgNDAuNzQ2MiA0OS4xNTU2QzQ0LjgzNTkgNDguMTcxMSA0OC4zMTk4IDQ3LjI2MjIgNTAuNTE2MiA0NS45NzQ3QzUyLjcxMjUgNDQuMzg0MyA1NCA0My4xNzI1IDU0IDQxLjU4Mkw1NCAzNS41OTg4QzUxLjEyMiAzNy40OTIyIDQ3LjMzNTIgMzkuMDA3IDQyLjYzOTYgMzkuOTkxNVpNNDAuNDQzMiAyLjEyMzM3QzM2LjM1MzUgMS4xMzg3OSAzMS44ODUgMC44MzU4NDggMjYuODg2NCAwLjgzNTg0OUMyMS44ODc4IDAuODM1ODQ5IDE3LjQxOTQgMS4xMzg3OSAxMy4yNTM5IDIuMTIzMzdDOS4wODgzNiAzLjEwNzk0IDUuNjgwMjIgNC4wMTY3OCAzLjQ4Mzg3IDUuMzA0M0MxLjI4NzUxIDYuNTkxODEgLTMuNDc4MmUtMDYgOC4xMDY1NCAtMy4zMzkxNmUtMDYgOS42OTdMLTIuOTU1MTNlLTA2IDE0LjA4OTdDLTIuODE2MDllLTA2IDE1LjY4MDIgMS4yODc1MiAxNy4yNzA2IDMuNDgzODcgMTguNTU4MkM2LjA1ODkxIDE5Ljc2OTkgOS4xNjQxIDIxLjA1NzUgMTMuMjUzOSAyMS42NjMzQzE3LjM0MzYgMjIuMjY5MiAyMS44MTIxIDIyLjk1MDkgMjYuODg2NCAyMi45NTA5QzMxLjk2MDcgMjIuOTUwOSAzNi4zNTM1IDIyLjk1MDkgNDAuNDQzMiAyMi4zNDVDNDQuNTMzIDIxLjczOTEgNDguMDE2OSAyMC40NTE2IDUwLjIxMzIgMTkuMTY0QzUyLjcxMjUgMTcuNTczNiA1NCAxNS45ODMxIDU0IDE0LjM5MjdMNTQgOS45OTk5NUM1NCA4LjQwOTQ4IDUyLjcxMjUgNi44MTkwMiA1MC41MTYyIDUuNjA3MjRDNDguMzE5OCA0LjM5NTQ2IDQ0LjUzMyAyLjcyOTI2IDQwLjQ0MzIgMi4xMjMzN1pcIlxuXHRcdFx0XHRmaWxsPVwiIzdFODk5M1wiLz48L1NWRz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0eyBtb2RhbFN0YXRlICYmIChcblx0XHRcdDxBY3Rpb25Nb2RhbFxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNoYW5nZU1vZGFsU3RhdGUgfVxuXHRcdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxuXHRcdFx0XHR0aXRsZT17ICdFZGl0IFByZXNldCcgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IG1vZGFsUHJvcHMgPT4gPE1vZGFsRWRpdG9yXG5cdFx0XHRcdFx0eyAuLi5tb2RhbFByb3BzIH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0PC9BY3Rpb25Nb2RhbD5cblx0XHQpIH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFdpdGhQcmVzZXQ7IiwiY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBHbG9iYWxGaWVsZFByZXNldCgge1xuXHRkYXRhLFxuXHR2YWx1ZSxcblx0aW5kZXgsXG5cdG9uQ2hhbmdlVmFsdWUsXG5cdGlzVmlzaWJsZSxcblx0ZXhjbHVkZU9wdGlvbnMgPSBvcHRpb25zID0+IG9wdGlvbnMsXG5cdHBvc2l0aW9uLFxufSApIHtcblxuXHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfJyArIGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWVbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfJyArIGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMoIGRhdGEub3B0aW9ucyApIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlWyBkYXRhLm5hbWUgXSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxGaWVsZFByZXNldDsiLCJpbXBvcnQgR3JvdXBlZFNlbGVjdENvbnRyb2wgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Hcm91cGVkU2VsZWN0Q29udHJvbCc7XG5pbXBvcnQge1xuXHRUZXh0Q29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0Q3VzdG9tU2VsZWN0Q29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gTWFwRmllbGRQcmVzZXQoIHtcblx0ZGF0YSxcblx0dmFsdWUsXG5cdGluZGV4LFxuXHRjdXJyZW50U3RhdGUsXG5cdG9uQ2hhbmdlVmFsdWUsXG5cdGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcbn0gKSB7XG5cblx0c3dpdGNoICggZGF0YS50eXBlICkge1xuXHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyAnY29udHJvbF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsXG5cdFx0XHRcdFx0XHRcdFx0J2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgJ2NvbnRyb2xfJyArIGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsXG5cdFx0XHRcdFx0XHRcdFx0J2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdGNhc2UgJ2N1c3RvbV9zZWxlY3QnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEN1c3RvbVNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1jdXN0b20tc2VsZWN0LWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHsgc2VsZWN0ZWRJdGVtIH0gKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0gc2VsZWN0ZWRJdGVtLmtleTtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0J2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGRhdGEub3B0aW9ucy5maW5kKFxuXHRcdFx0XHRcdFx0XHRvcHRpb24gPT4gb3B0aW9uLmtleSA9PT0gdmFsdWUgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdGNhc2UgJ2dyb3VwZWRfc2VsZWN0Jzpcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxMYWJlbD57IGRhdGEubGFiZWwgfTwvTGFiZWw+XG5cdFx0XHRcdFx0PEdyb3VwZWRTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsXG5cdFx0XHRcdFx0XHRcdFx0J2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBGaWVsZFByZXNldDsiLCJpbXBvcnQgRHluYW1pY1ByZXNldCBmcm9tICcuL0R5bmFtaWNQcmVzZXQnO1xuaW1wb3J0IHtcblx0U3RpY2t5TW9kYWxBY3Rpb25zLFxuXHRNb2RhbEZvb3RlclN0eWxlLFxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmZ1bmN0aW9uIFByZXNldEJ1dHRvbigge1xuXHR2YWx1ZSxcblx0b25DaGFuZ2UsXG5cdHRpdGxlLFxufSApIHtcblxuXHRjb25zdCBbIHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblx0Y29uc3QgWyBzdGF0ZVZhbHVlLCBzZXRTdGF0ZVZhbHVlIF0gPSB1c2VTdGF0ZSggdmFsdWUgKTtcblxuXHRjb25zdCB1cGRhdGVDbGljayA9ICgpID0+IHtcblx0XHRvbkNoYW5nZSggc3RhdGVWYWx1ZSApO1xuXHRcdHNldFNob3dNb2RhbCggZmFsc2UgKTtcblx0fTtcblxuXHRjb25zdCBjYW5jZWxDbGljayA9ICgpID0+IHtcblx0XHRzZXRTaG93TW9kYWwoIGZhbHNlICk7XG5cdH07XG5cblx0cmV0dXJuIDw+XG5cdFx0PEJ1dHRvblxuXHRcdFx0aWNvbj17ICdkYXRhYmFzZScgfVxuXHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcblx0XHRcdGlzU21hbGxcblx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZmItaXMtdGhpY2snIH1cblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93TW9kYWwoIHRydWUgKSB9XG5cdFx0Lz5cblx0XHR7IHNob3dNb2RhbCAmJiA8TW9kYWxcblx0XHRcdHNpemU9XCJtZWRpdW1cIlxuXHRcdFx0dGl0bGU9eyB0aXRsZSA/PyBfXyggJ0VkaXQgUHJlc2V0JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRTaG93TW9kYWwoIGZhbHNlICkgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgTW9kYWxGb290ZXJTdHlsZSB9XG5cdFx0PlxuXHRcdFx0PER5bmFtaWNQcmVzZXRcblx0XHRcdFx0a2V5PXsgJ2R5bmFtaWNfa2V5X3ByZXNldCcgfVxuXHRcdFx0XHR2YWx1ZT17IHN0YXRlVmFsdWUgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHNldFN0YXRlVmFsdWUgfVxuXHRcdFx0Lz5cblx0XHRcdDxTdGlja3lNb2RhbEFjdGlvbnM+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRvbkNsaWNrPXsgdXBkYXRlQ2xpY2sgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBfXyggJ1VwZGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyBjYW5jZWxDbGljayB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IF9fKCAnQ2FuY2VsJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvU3RpY2t5TW9kYWxBY3Rpb25zPlxuXHRcdDwvTW9kYWw+IH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVzZXRCdXR0b247IiwiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gd2l0aFByZXNldCggV3JhcHBlZENvbXBvbmVudCApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cblx0cmV0dXJuIGZ1bmN0aW9uIEpldEZvcm1QcmVzZXRFZGl0b3IoIHByb3BzICkge1xuXG5cdFx0Y29uc3QgcGFyc2VWYWx1ZSA9ICgpID0+IHtcblx0XHRcdGxldCB2YWwgPSB7fTtcblxuXHRcdFx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xuXHRcdFx0XHR2YWwgPSB7IC4uLnByb3BzLnZhbHVlIH07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggcHJvcHMudmFsdWUgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBwcm9wcy52YWx1ZSApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YWwgPSBKU09OLnBhcnNlKCBwcm9wcy52YWx1ZSApO1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdFx0XHRpZiAoICdudW1iZXInID09PSB0eXBlb2YgdmFsICkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoICggZXhjZXB0aW9uICkge1xuXHRcdFx0XHRcdHZhbCA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR2YWwuamV0X3ByZXNldCA9IHRydWU7XG5cblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXNWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIHBvc2l0aW9uICkgPT4ge1xuXHRcdFx0cmV0dXJuICggKCBkYXRhLnBvc2l0aW9uICYmIHBvc2l0aW9uID09PSBkYXRhLnBvc2l0aW9uIClcblx0XHRcdFx0fHwgISBkYXRhLnBvc2l0aW9uIHx8ICdxdWVyeV92YXInICE9PSBjdXJyZW50U3RhdGUuZnJvbSApICYmIGlzR2xvYmFsVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzR2xvYmFsVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhICkgPT4ge1xuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XG5cdFx0XHRcdHN3aXRjaCAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcblx0XHRcdFx0XHRjYXNlICdxdWVyeV92YXInOlxuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0KCAncG9zdCcgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUucG9zdF9mcm9tIClcblx0XHRcdFx0XHRcdFx0fHwgKCAndXNlcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUudXNlcl9mcm9tIClcblx0XHRcdFx0XHRcdFx0fHwgKCAncXVlcnlfdmFyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIGFwcGx5RmlsdGVycyggJ2pldC5mYi5wcmVzZXQuZWRpdG9yLmN1c3RvbS5jb25kaXRpb24nLCBmYWxzZSwgZGF0YS5jdXN0b21fY29uZGl0aW9uLCBjdXJyZW50U3RhdGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXNDdXJyZW50RmllbGRWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIHBvc2l0aW9uICkgPT4ge1xuXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBkYXRhLnBvc2l0aW9uICYmIHBvc2l0aW9uICE9PSBkYXRhLnBvc2l0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmICEgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWUgJiYgY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlzTWFwRmllbGRWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIGZpZWxkICkgPT4ge1xuXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiAhIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWUgJiYgY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdH07XG5cblx0XHRjb25zdCBleGNsdWRlT3B0aW9ucyA9ICggc2VsZWN0T3B0aW9ucyApID0+IHtcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBbIC4uLnNlbGVjdE9wdGlvbnMgXTtcblx0XHRcdG9wdGlvbnMuZm9yRWFjaCggKCBvcHRpb24sIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRpZiAoIHByb3BzLmV4Y2x1ZGVTb3VyY2VzICYmIHByb3BzLmV4Y2x1ZGVTb3VyY2VzLmluY2x1ZGVzKCBvcHRpb24udmFsdWUgKSApIHtcblx0XHRcdFx0XHRvcHRpb25zLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdFx0cmV0dXJuIG9wdGlvbnM7XG5cdFx0fTtcblxuXHRcdHJldHVybiA8V3JhcHBlZENvbXBvbmVudFxuXHRcdFx0a2V5PSd3cmFwcGVkLXByZXNldC1lZGl0b3InXG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdHBhcnNlVmFsdWU9eyBwYXJzZVZhbHVlIH1cblx0XHRcdGlzVmlzaWJsZT17IGlzVmlzaWJsZSB9XG5cdFx0XHRpc01hcEZpZWxkVmlzaWJsZT17IGlzTWFwRmllbGRWaXNpYmxlIH1cblx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XG5cdFx0XHRleGNsdWRlT3B0aW9ucz17IGV4Y2x1ZGVPcHRpb25zIH1cblx0XHQvPjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0O1xuIiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDb250cm9sUHJlc2V0UmVzdHJpY3Rpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgge30gKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFByZXNldFJlc3RyaWN0aW9uQ29udGV4dDsiLCJpbXBvcnQgaXNQcmVzZXRTdHJpbmcgZnJvbSAnLi9pc1ByZXNldFN0cmluZyc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gaHVtYW5SZWFkYWJsZVByZXNldCggdmFsdWUsIGhpZ2hsaWdodCA9ICdjb2RlJyApIHtcblx0dmFsdWUgPSB2YWx1ZSA/PyAnJztcblxuXHRpZiAoICFpc1ByZXNldFN0cmluZyggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjb25zdCBwYXJzZWRQcmVzZXQgPSBKU09OLnBhcnNlKCB2YWx1ZSApO1xuXHRjb25zdCBsYWJlbCAgICAgICAgPSBfXyggJ1ByZXNldCBmcm9tJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5cdGNvbnN0IGZyb20gICAgICAgICA9IHBhcnNlZFByZXNldD8uZnJvbSA/PyAnKGVtcHR5KSc7XG5cblx0bGV0IGhpZ2hsaWdodGVkRnJvbTtcblxuXHRzd2l0Y2ggKCBoaWdobGlnaHQgKSB7XG5cdFx0Y2FzZSAnY29kZSc6XG5cdFx0XHRoaWdobGlnaHRlZEZyb20gPSBgPGNvZGU+JHsgZnJvbSB9PC9jb2RlPmA7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdiJzpcblx0XHRcdGhpZ2hsaWdodGVkRnJvbSA9IGA8Yj4keyBmcm9tIH08L2I+YDtcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRsYWJlbCxcblx0XHRoaWdobGlnaHRlZEZyb20sXG5cdF0uam9pbiggJyAnICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGh1bWFuUmVhZGFibGVQcmVzZXQ7IiwiZnVuY3Rpb24gaXNQcmVzZXRTdHJpbmcoIHByZXNldCApIHtcblx0bGV0IHBhcnNlZFByZXNldDtcblx0dHJ5IHtcblx0XHRwYXJzZWRQcmVzZXQgPSBKU09OLnBhcnNlKCBwcmVzZXQgKTtcblx0fVxuXHRjYXRjaCAoIGVycm9yICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiAhIXBhcnNlZFByZXNldD8uamV0X3ByZXNldDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQcmVzZXRTdHJpbmc7IiwiaW1wb3J0IHsgc3ByaW50ZiwgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0RnJhZ21lbnQsXG5cdHVzZVN0YXRlLFxuXHR1c2VFZmZlY3QsXG59IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRCdXR0b24sXG5cdEJ1dHRvbkdyb3VwLFxuXHRDYXJkLFxuXHRDYXJkQm9keSxcblx0Q2FyZEhlYWRlcixcblx0VG9nZ2xlQ29udHJvbCxcblx0RmxleCxcblx0RmxleEl0ZW0sXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBSZXBlYXRlcldpdGhTdGF0ZSgge1xuXHRjaGlsZHJlbixcblx0SXRlbUhlYWRpbmcsXG5cdHJlcGVhdGVyQ2xhc3NlcyA9IFtdLFxuXHRyZXBlYXRlckl0ZW1DbGFzc2VzID0gW10sXG5cdG5ld0l0ZW0sXG5cdGFkZE5ld0J1dHRvbkxhYmVsID0gJ0FkZCBOZXcnLFxuXHRpdGVtcyA9IFtdLFxuXHRpc1NhdmVBY3Rpb24sXG5cdG9uU2F2ZUl0ZW1zLFxuXHRvblVuTW91bnQsXG5cdG9uQWRkTmV3SXRlbSxcblx0b25SZW1vdmVJdGVtLFxuXHRoZWxwID0ge1xuXHRcdGhlbHBTb3VyY2U6IHt9LFxuXHRcdGhlbHBWaXNpYmxlOiAoKSA9PiBmYWxzZSxcblx0XHRoZWxwS2V5OiAnJyxcblx0fSxcblx0YWRkaXRpb25hbENvbnRyb2xzID0gbnVsbCxcbn0gKSB7XG5cblx0Y29uc3QgY2xhc3NOYW1lcyAgICAgPSBbXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudCcsXG5cdFx0Li4ucmVwZWF0ZXJDbGFzc2VzLFxuXHRdLmpvaW4oICcgJyApO1xuXHRjb25zdCBpdGVtQ2xhc3NOYW1lcyA9IFtcblx0XHQnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50LWl0ZW0nLFxuXHRcdC4uLnJlcGVhdGVySXRlbUNsYXNzZXMsXG5cdF0uam9pbiggJyAnICk7XG5cblx0Y29uc3QgcGFyc2VkSXRlbXMgPSAoKSA9PiB7XG5cdFx0aWYgKCBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICkge1xuXHRcdFx0cmV0dXJuIGl0ZW1zLm1hcCggaXRlbSA9PiB7XG5cdFx0XHRcdGl0ZW0uX192aXNpYmxlID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdC4uLm5ld0l0ZW0sXG5cdFx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHR9O1xuXG5cdGNvbnN0IFsgaXRlbXNEYXRhLCBzZXRJdGVtc0RhdGEgXSA9IHVzZVN0YXRlKCBbXSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcGFyc2VkSXRlbXMoKSApO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgW10gKTtcblxuXHRjb25zdCBbIGlzU2FmZURlbGV0aW5nLCBzZXRTYWZlRGVsZXRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XG5cblx0Y29uc3QgY2hhbmdlQ3VycmVudEl0ZW0gPSAoIHZhbHVlVG9TZXQsIGluZGV4ICkgPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggcHJldiApICk7XG5cblx0XHRcdHByZXZDbG9uZVsgaW5kZXggXSA9IHtcblx0XHRcdFx0Li4ucHJldlsgaW5kZXggXSxcblx0XHRcdFx0Li4udmFsdWVUb1NldCxcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gcHJldkNsb25lO1xuXHRcdH0gKTtcblx0fTtcblxuXHRjb25zdCBvblNhdmVEZWxldGluZyA9IGluZGV4ID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcblx0XHRyZXR1cm4gY29uZmlybShcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlZCAtIGl0ZW0gaW5kZXhcblx0XHRcdFx0X18oXG5cdFx0XHRcdFx0YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgaXRlbSAlZD9gLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KSxcblx0XHRcdFx0aW5kZXggKyAxLFxuXHRcdFx0KSxcblx0XHQpO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZU9wdGlvbiA9ICggaW5kZXggKSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0aXNTYWZlRGVsZXRpbmcgJiYgIW9uU2F2ZURlbGV0aW5nKCBpbmRleCApIHx8XG5cdFx0XHRvblJlbW92ZUl0ZW0gJiYgIW9uUmVtb3ZlSXRlbSggaW5kZXgsIGl0ZW1zRGF0YSApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblx0XHRcdHByZXZDbG9uZS5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IGFkZE5ld0l0ZW0gPSAoIHZhbHVlICkgPT4ge1xuXHRcdGlmICggb25BZGROZXdJdGVtICkge1xuXHRcdFx0b25BZGROZXdJdGVtKCB2YWx1ZSwgaXRlbXNEYXRhICk7XG5cdFx0fVxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiBbXG5cdFx0XHQuLi5wcmV2LCB7XG5cdFx0XHRcdC4uLnZhbHVlLFxuXHRcdFx0XHRfX3Zpc2libGU6IHRydWUsXG5cdFx0XHR9LFxuXHRcdF0gKTtcblx0fTtcblxuXHRjb25zdCBjbG9uZUl0ZW0gPSAoIGluZGV4ICkgPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgICAgICAgICA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblx0XHRcdGNvbnN0IFsgYmVmb3JlLCBhZnRlciBdID0gW1xuXHRcdFx0XHRwcmV2Q2xvbmUuc2xpY2UoIDAsIGluZGV4ICsgMSApLFxuXHRcdFx0XHRwcmV2Q2xvbmUuc2xpY2UoIGluZGV4ICsgMSApLFxuXHRcdFx0XTtcblxuXHRcdFx0cmV0dXJuIFsgLi4uYmVmb3JlLCBwcmV2Q2xvbmVbIGluZGV4IF0sIC4uLmFmdGVyIF07XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IG1vdmVSZXBlYXRlckl0ZW0gPSAoIHsgb2xkSW5kZXgsIG5ld0luZGV4IH0gKSA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IHByZXZDbG9uZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2ICkgKTtcblxuXHRcdFx0W1xuXHRcdFx0XHRwcmV2Q2xvbmVbIG5ld0luZGV4IF0sXG5cdFx0XHRcdHByZXZDbG9uZVsgb2xkSW5kZXggXSxcblx0XHRcdF0gPSBbIHByZXZDbG9uZVsgb2xkSW5kZXggXSwgcHJldkNsb25lWyBuZXdJbmRleCBdIF07XG5cblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IG1vdmVVcCAgID0gKCBpbmRleCApID0+IHtcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4IC0gMSB9ICk7XG5cdH07XG5cdGNvbnN0IG1vdmVEb3duID0gKCBpbmRleCApID0+IHtcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4ICsgMSB9ICk7XG5cdH07XG5cblx0Y29uc3QgaXNEaXNhYmxlZEVuZCA9ICggaW5kZXggKSA9PiB7XG5cdFx0cmV0dXJuICEoXG5cdFx0XHRpbmRleCA8IGl0ZW1zRGF0YS5sZW5ndGggLSAxXG5cdFx0KTtcblx0fTtcblx0LypcblxuXHQgKi9cblxuXHRjb25zdCB0b2dnbGVWaXNpYmxlID0gaW5kZXggPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRjb25zdCBwcmV2Q2xvbmUgICAgICAgICAgICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByZXYgKSApO1xuXHRcdFx0cHJldkNsb25lWyBpbmRleCBdLl9fdmlzaWJsZSA9ICEoXG5cdFx0XHRcdHByZXZDbG9uZVsgaW5kZXggXS5fX3Zpc2libGVcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBwcmV2Q2xvbmU7XG5cdFx0fSApO1xuXHR9O1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1kZXB0aCAqL1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xuXHRcdFx0Zm9yICggY29uc3QgaXRlbXNEYXRhS2V5IGluIGl0ZW1zRGF0YSApIHtcblx0XHRcdFx0Zm9yICggY29uc3QgaXRlbUtleSBpbiBpdGVtc0RhdGFbIGl0ZW1zRGF0YUtleSBdICkge1xuXHRcdFx0XHRcdGlmICggaXRlbUtleS5zdGFydHNXaXRoKCAnX18nICkgKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgaXRlbXNEYXRhWyBpdGVtc0RhdGFLZXkgXVsgaXRlbUtleSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0b25TYXZlSXRlbXMoIGl0ZW1zRGF0YSApO1xuXHRcdFx0b25Vbk1vdW50KCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xuXHRcdFx0b25Vbk1vdW50KCk7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgWyBpc1NhdmVBY3Rpb24gXSApO1xuXG5cdC8qIGVzbGludC1lbmFibGUgbWF4LWRlcHRoICovXG5cblx0Y29uc3QgZ2V0UmVwZWF0ZXJJdGVtSWQgPSBpbmRleCA9PiBgamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbV8keyBpbmRleCB9YDtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgaGVscFNvdXJjZSxcblx0XHQgICAgICBoZWxwVmlzaWJsZSxcblx0XHQgICAgICBoZWxwS2V5LFxuXHQgICAgICB9ID0gaGVscDtcblxuXHRjb25zdCBpc1Zpc2libGVIZWxwID0gaGVscFZpc2libGUoIGl0ZW1zRGF0YSApICYmIGhlbHBTb3VyY2UgJiZcblx0XHRoZWxwU291cmNlWyBoZWxwS2V5IF07XG5cblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWVzIH1cblx0XHRrZXk9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcicgfVxuXHQ+XG5cdFx0eyBpc1Zpc2libGVIZWxwICYmIDxwPnsgaGVscFNvdXJjZVsgaGVscEtleSBdLmxhYmVsIH08L3A+IH1cblxuXHRcdHsgMCA8IGl0ZW1zRGF0YS5sZW5ndGggJiYgPD5cblx0XHRcdDxGbGV4PlxuXHRcdFx0XHQ8RmxleEl0ZW0+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTYWZlIGRlbGV0aW5nJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0ZsZXhJdGVtPlxuXHRcdFx0XHQ8RmxleEl0ZW0gc3R5bGU9eyB7XG5cdFx0XHRcdFx0ZmxleDogJ3Vuc2V0Jyxcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxZW0nLFxuXHRcdFx0XHR9IH0+XG5cdFx0XHRcdFx0ey8qPEJ1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdCA8QnV0dG9uXG5cdFx0XHRcdFx0IGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0IG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0IH0gfVxuXHRcdFx0XHRcdCA+XG5cdFx0XHRcdFx0IHsgX18oICdDb3B5IGl0ZW1zIHRvIGNsaXBib2FyZCcsICdqZXQtZnJvbS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQgPC9CdXR0b24+XG5cdFx0XHRcdFx0IDxCdXR0b25cblx0XHRcdFx0XHQgaXNTZWNvbmRhcnlcblx0XHRcdFx0XHQgb25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHQgfSB9XG5cdFx0XHRcdFx0ID5cblx0XHRcdFx0XHQgeyBfXyggJ0ltcG9ydCBpdGVtcyBmcm9tIGNsaXBib2FyZCcsICdqZXQtZnJvbS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQgPC9CdXR0b24+XG5cdFx0XHRcdFx0IDwvQnV0dG9uR3JvdXA+Ki8gfVxuXHRcdFx0XHQ8L0ZsZXhJdGVtPlxuXHRcdFx0PC9GbGV4PlxuXHRcdDwvPiB9XG5cdFx0eyBhZGRpdGlvbmFsQ29udHJvbHMgfVxuXHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiAqLyB9XG5cdFx0eyBpdGVtc0RhdGEubWFwKCAoIGN1cnJlbnRJdGVtLCBpbmRleCApID0+IDxDYXJkXG5cdFx0XHRlbGV2YXRpb249eyAyIH1cblx0XHRcdGNsYXNzTmFtZT17IGl0ZW1DbGFzc05hbWVzIH1cblx0XHRcdGtleT17IGdldFJlcGVhdGVySXRlbUlkKCBpbmRleCApIH1cblx0XHQ+XG5cdFx0XHQ8Q2FyZEhlYWRlciBjbGFzc05hbWU9eyAncmVwZWF0ZXJfX2l0ZW1fX2hlYWRlcicgfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXBlYXRlci1pdGVtX19sZWZ0LWhlYWRpbmdcIj5cblx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b25zJyB9PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdGljb249eyBjdXJyZW50SXRlbS5fX3Zpc2libGUgPyAnbm8tYWx0JyA6ICdlZGl0JyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB0b2dnbGVWaXNpYmxlKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyAhQm9vbGVhbiggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdGljb249eyAnYXJyb3ctdXAtYWx0MicgfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZVVwKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBpc0Rpc2FibGVkRW5kKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17ICdhcnJvdy1kb3duLWFsdDInIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG1vdmVEb3duKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbS10aXRsZScgfT5cblx0XHRcdFx0XHRcdFx0eyBJdGVtSGVhZGluZyAmJiA8SXRlbUhlYWRpbmdcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50SXRlbT17IGN1cnJlbnRJdGVtIH1cblx0XHRcdFx0XHRcdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbT17IGRhdGEgPT4gY2hhbmdlQ3VycmVudEl0ZW0oXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0eyAhSXRlbUhlYWRpbmcgJiYgYCMkeyBpbmRleCArIDEgfWAgfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEJ1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gY2xvbmVJdGVtKCBpbmRleCApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7IF9fKCAnQ2xvbmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiByZW1vdmVPcHRpb24oIGluZGV4ICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHsgX18oICdEZWxldGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHQ8L0NhcmRIZWFkZXI+XG5cdFx0XHR7IGN1cnJlbnRJdGVtLl9fdmlzaWJsZSAmJiA8Q2FyZEJvZHlcblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWl0ZW1fX2NvbnRlbnQnIH1cblx0XHRcdD5cblx0XHRcdFx0eyBjaGlsZHJlbiAmJiA8RnJhZ21lbnRcblx0XHRcdFx0XHRrZXk9eyBgcmVwZWF0ZXItY29tcG9uZW50X19pdGVtXyR7IGluZGV4IH1gIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuKCB7XG5cdFx0XHRcdFx0XHRjdXJyZW50SXRlbSxcblx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtOiBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKCBkYXRhLFxuXHRcdFx0XHRcdFx0XHRpbmRleCApLFxuXHRcdFx0XHRcdFx0Y3VycmVudEluZGV4OiBpbmRleCxcblx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cblx0XHRcdFx0PC9GcmFnbWVudD4gfVxuXHRcdFx0XHR7ICFjaGlsZHJlbiAmJiAnU2V0IHVwIHlvdXIgUmVwZWF0ZXIgVGVtcGxhdGUsIHBsZWFzZS4nIH1cblx0XHRcdDwvQ2FyZEJvZHk+IH1cblx0XHQ8L0NhcmQ+ICkgfVxuXHRcdHsgMSA8IGl0ZW1zRGF0YS5sZW5ndGggJiYgPD5cblx0XHRcdHsgYWRkaXRpb25hbENvbnRyb2xzIH1cblx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdGNsYXNzTmFtZT1cImpldC1jb250cm9sLWNsZWFyXCJcblx0XHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdGNoZWNrZWQ9eyBpc1NhZmVEZWxldGluZyB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cblx0XHRcdC8+XG5cdFx0PC8+IH1cblx0XHQ8QnV0dG9uXG5cdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0b25DbGljaz17ICgpID0+IGFkZE5ld0l0ZW0oIG5ld0l0ZW0gKSB9XG5cdFx0PlxuXHRcdFx0eyBhZGROZXdCdXR0b25MYWJlbCB9XG5cdFx0PC9CdXR0b24+XG5cdDwvZGl2PjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlcldpdGhTdGF0ZTsiLCJpbXBvcnQgdXNlUmVwZWF0ZXJTdGF0ZSBmcm9tICcuLi8uLi9ob29rcy91c2VSZXBlYXRlclN0YXRlJztcbmltcG9ydCBSZXBlYXRlclN0YXRlQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3JlcGVhdGVyLnN0YXRlJztcblxuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG4vKipcbiAqIEBwYXJhbSAgcHJvcHMge3sgaXRlbSwgb25TZXRTdGF0ZSwgZnVuY3Rpb25zLCBjaGlsZHJlbiB9fVxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9XG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gUmVwZWF0ZXJBZGROZXcoIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgaXRlbSxcblx0XHQgICAgICBvblNldFN0YXRlLFxuXHRcdCAgICAgIGZ1bmN0aW9ucyxcblx0XHQgICAgICBjaGlsZHJlbixcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzICovXG5cblx0Y29uc3QgeyBhZGROZXdJdGVtIH0gPSBmdW5jdGlvbnNcblx0Pz8gdXNlUmVwZWF0ZXJTdGF0ZSggb25TZXRTdGF0ZSApXG5cdD8/IHVzZUNvbnRleHQoIFJlcGVhdGVyU3RhdGVDb250ZXh0ICk7XG5cblx0LyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cblxuXHRyZXR1cm4gPEJ1dHRvblxuXHRcdGljb249eyAncGx1cy1hbHQyJyB9XG5cdFx0aXNTZWNvbmRhcnlcblx0XHRvbkNsaWNrPXsgKCkgPT4gYWRkTmV3SXRlbSggaXRlbSApIH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0J1dHRvbj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyQWRkTmV3OyIsImltcG9ydCB1c2VSZXBlYXRlclN0YXRlIGZyb20gJy4uLy4uL2hvb2tzL3VzZVJlcGVhdGVyU3RhdGUnO1xuaW1wb3J0IFJlcGVhdGVyU3RhdGVDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcmVwZWF0ZXIuc3RhdGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIFJlcGVhdGVyQWRkT3JPcGVyYXRvciggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBvblNldFN0YXRlLFxuXHRcdCAgICAgIGZ1bmN0aW9ucyxcblx0XHQgICAgICBjaGlsZHJlbixcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzICovXG5cblx0Y29uc3QgeyBhZGROZXdJdGVtIH0gPSBmdW5jdGlvbnNcblx0Pz8gdXNlUmVwZWF0ZXJTdGF0ZSggb25TZXRTdGF0ZSApXG5cdD8/IHVzZUNvbnRleHQoIFJlcGVhdGVyU3RhdGVDb250ZXh0ICk7XG5cblx0LyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cblxuXHRyZXR1cm4gPEJ1dHRvblxuXHRcdGlzU2Vjb25kYXJ5XG5cdFx0aWNvbj17ICdyYW5kb21pemUnIH1cblx0XHRvbkNsaWNrPXsgKCkgPT4gYWRkTmV3SXRlbSgge1xuXHRcdFx0X192aXNpYmxlOiBmYWxzZSxcblx0XHRcdG9yX29wZXJhdG9yOiB0cnVlLFxuXHRcdH0gKSB9XG5cdD5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9CdXR0b24+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlckFkZE9yT3BlcmF0b3I7IiwiaW1wb3J0IFJlcGVhdGVySGVhZENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5jdXN0b20uaXRlbS5oZWFkJztcbmltcG9ydCBSZXBlYXRlckJ1dHRvbnNDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uYnV0dG9ucyc7XG5pbXBvcnQgdXNlUmVwZWF0ZXJTdGF0ZSBmcm9tICcuLi8uLi9ob29rcy91c2VSZXBlYXRlclN0YXRlJztcbmltcG9ydCBSZXBlYXRlckl0ZW1Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvcmVwZWF0ZXIuaXRlbSc7XG5pbXBvcnQgUmVwZWF0ZXJTdGF0ZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9yZXBlYXRlci5zdGF0ZSc7XG5pbXBvcnQgTWFjcm9zQnV0dG9uVGVtcGxhdGVcblx0ZnJvbSAnLi4vLi4vbWFjcm9zLmJ1dHRvbi9jb21wb25lbnRzL01hY3Jvc0J1dHRvblRlbXBsYXRlJztcbmltcG9ydCBQb3BvdmVyQ29udGV4dCBmcm9tICcuLi8uLi9tYWNyb3MuYnV0dG9uL2NvbnRleHQvUG9wb3ZlckNvbnRleHQnO1xuXG5jb25zdCB7XG5cdCAgICAgIENhcmQsXG5cdCAgICAgIEJ1dHRvbkdyb3VwLFxuXHQgICAgICBCdXR0b24sXG5cdCAgICAgIENhcmRIZWFkZXIsXG5cdCAgICAgIENhcmRCb2R5LFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIHVzZUNvbnRleHQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBAcGFyYW0gIHByb3BzIHt7IGl0ZW1zLCBvblNldFN0YXRlLCBmdW5jdGlvbnMsIGNoaWxkcmVuIH19XG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAqIEBjbGFzc1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gUmVwZWF0ZXIoIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgaXRlbXMsXG5cdFx0ICAgICAgb25TZXRTdGF0ZSxcblx0XHQgICAgICBmdW5jdGlvbnMsXG5cdFx0ICAgICAgY2hpbGRyZW4sXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBjbG9uZUl0ZW0sXG5cdFx0ICAgICAgbW92ZVVwLFxuXHRcdCAgICAgIG1vdmVEb3duLFxuXHRcdCAgICAgIHRvZ2dsZVZpc2libGUsXG5cdFx0ICAgICAgY2hhbmdlQ3VycmVudEl0ZW0sXG5cdFx0ICAgICAgcmVtb3ZlT3B0aW9uLFxuXHQgICAgICB9ID0gZnVuY3Rpb25zXG5cdD8/IHVzZVJlcGVhdGVyU3RhdGUoIG9uU2V0U3RhdGUgKVxuXHQ/PyB1c2VDb250ZXh0KCBSZXBlYXRlclN0YXRlQ29udGV4dCApO1xuXG5cdC8qIGVzbGludC1lbmFibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cblxuXHRjb25zdCB7XG5cdFx0ICAgICAgaXNTdXBwb3J0ZWQ6IGlzU3VwcG9ydGVkSGVhZGVyLFxuXHRcdCAgICAgIHJlbmRlcjogQ3VzdG9tSGVhZGVyLFxuXHQgICAgICB9ID0gdXNlQ29udGV4dCggUmVwZWF0ZXJIZWFkQ29udGV4dCApO1xuXHRjb25zdCB7XG5cdFx0ICAgICAgZWRpdDogc3VwcG9ydEVkaXQsXG5cdFx0ICAgICAgbW92ZTogc3VwcG9ydE1vdmUsXG5cdFx0ICAgICAgY2xvbmU6IHN1cHBvcnRDbG9uZSxcblx0XHQgICAgICBkZWxldGU6IHN1cHBvcnREZWxldGUsXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBSZXBlYXRlckJ1dHRvbnNDb250ZXh0ICk7XG5cblx0Y29uc3QgUmVwZWF0ZXJIZWFkZXIgPSAoIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKSA9PiB7XG5cdFx0aWYgKCBpc1N1cHBvcnRlZEhlYWRlciggY3VycmVudEl0ZW0gKSApIHtcblx0XHRcdHJldHVybiA8Q3VzdG9tSGVhZGVyXG5cdFx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiA8c3BhblxuXHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWl0ZW0tdGl0bGUnIH1cblx0XHQ+XG5cdFx0XHR7IGAjJHsgaW5kZXggKyAxIH1gIH1cblx0XHQ8L3NwYW4+O1xuXHR9O1xuXG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudCcgfVxuXHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyJyB9XG5cdD5cblx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb24gKi99XG5cdFx0eyBpdGVtcy5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4gPENhcmRcblx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRlbGV2YXRpb249eyAyIH1cblx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19yZXBlYXRlci1jb21wb25lbnQtaXRlbScgfVxuXHRcdFx0a2V5PXsgYGpldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudC1pdGVtLSR7IGluZGV4IH1gIH1cblx0XHQ+XG5cdFx0XHQ8Q2FyZEhlYWRlciBjbGFzc05hbWU9eyAncmVwZWF0ZXJfX2l0ZW1fX2hlYWRlcicgfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXBlYXRlci1pdGVtX19sZWZ0LWhlYWRpbmdcIj5cblx0XHRcdFx0XHQ8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b25zJyB9PlxuXHRcdFx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0XHRcdCFzdXBwb3J0RWRpdCB8fCBzdXBwb3J0RWRpdCggY3VycmVudEl0ZW0gKVxuXHRcdFx0XHRcdFx0KSAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0aWNvbj17IGN1cnJlbnRJdGVtLl9fdmlzaWJsZSA/ICduby1hbHQnIDogJ2VkaXQnIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHRvZ2dsZVZpc2libGUoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbiBqZXQtZmItaXMtdGhpY2snIH1cblx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHRcdHsgKFxuXHRcdFx0XHRcdFx0XHQhc3VwcG9ydE1vdmUgfHwgc3VwcG9ydE1vdmUoIGN1cnJlbnRJdGVtIClcblx0XHRcdFx0XHRcdCkgJiYgPEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxuXHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXsgIUJvb2xlYW4oIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LXVwLWFsdDInIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG1vdmVVcCggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uIGpldC1mYi1pcy10aGljaycgfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0eyAoXG5cdFx0XHRcdFx0XHRcdCFzdXBwb3J0TW92ZSB8fCBzdXBwb3J0TW92ZSggY3VycmVudEl0ZW0gKVxuXHRcdFx0XHRcdFx0KSAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyAhKFxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0aWNvbj17ICdhcnJvdy1kb3duLWFsdDInIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG1vdmVEb3duKCBpbmRleCApIH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24gamV0LWZiLWlzLXRoaWNrJyB9XG5cdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHQ8UmVwZWF0ZXJIZWFkZXJcblx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0XHRcdFx0aW5kZXg9eyBpbmRleCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxCdXR0b25Hcm91cD5cblx0XHRcdFx0XHR7IChcblx0XHRcdFx0XHRcdCFzdXBwb3J0Q2xvbmUgfHwgc3VwcG9ydENsb25lKCBjdXJyZW50SXRlbSApXG5cdFx0XHRcdFx0KSAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxuXHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBjbG9uZUl0ZW0oIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mYi1pcy10aGljaycgfVxuXHRcdFx0XHRcdFx0aWNvbj17ICdhZG1pbi1wYWdlJyB9XG5cdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdHsgKFxuXHRcdFx0XHRcdFx0IXN1cHBvcnREZWxldGUgfHwgc3VwcG9ydERlbGV0ZSggY3VycmVudEl0ZW0gKVxuXHRcdFx0XHRcdCkgJiYgPE1hY3Jvc0J1dHRvblRlbXBsYXRlXG5cdFx0XHRcdFx0XHRpY29uPXsgJ3RyYXNoJyB9XG5cdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFBvcG92ZXJDb250ZXh0LkNvbnN1bWVyPlxuXHRcdFx0XHRcdFx0XHR7ICggeyBzZXRTaG93UG9wb3ZlciB9ICkgPT4gPGRpdlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzAuNWVtJyxcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnbWF4LWNvbnRlbnQnLFxuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+eyBfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdEZWxldGUgdGhpcyBpdGVtPycsXG5cdFx0XHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0XHRcdFx0KSB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdCZuYnNwO1xuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZU9wdGlvbiggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBfXyggJ1llcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHR7ICcgLyAnIH1cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93UG9wb3ZlciggZmFsc2UgKSB9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBfXyggJ05vJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gfVxuXHRcdFx0XHRcdFx0PC9Qb3BvdmVyQ29udGV4dC5Db25zdW1lcj5cblx0XHRcdFx0XHQ8L01hY3Jvc0J1dHRvblRlbXBsYXRlPiB9XG5cdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHQ8L0NhcmRIZWFkZXI+XG5cdFx0XHR7IGN1cnJlbnRJdGVtLl9fdmlzaWJsZSAmJiA8Q2FyZEJvZHlcblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWl0ZW1fX2NvbnRlbnQnIH1cblx0XHRcdFx0a2V5PXsgYGpldC1mb3JtLWJ1aWxkZXJfX2NhcmQtYm9keS0keyBpbmRleCB9YCB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgKFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGNvbnRleHQgPSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtLFxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbTogZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbShcblx0XHRcdFx0XHRcdFx0XHRkYXRhLCBpbmRleCApLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50SW5kZXg6IGluZGV4LFxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIDxSZXBlYXRlckl0ZW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgY29udGV4dCB9PlxuXHRcdFx0XHRcdFx0XHR7ICFjaGlsZHJlbiAmJlxuXHRcdFx0XHRcdFx0XHQnU2V0IHVwIHlvdXIgUmVwZWF0ZXIgVGVtcGxhdGUsIHBsZWFzZS4nIH1cblx0XHRcdFx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW5cblx0XHRcdFx0XHRcdFx0ICA/IGNoaWxkcmVuKCBjb250ZXh0IClcblx0XHRcdFx0XHRcdFx0ICA6IGNoaWxkcmVuXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvUmVwZWF0ZXJJdGVtQ29udGV4dC5Qcm92aWRlcj47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpKCkgfVxuXHRcdFx0PC9DYXJkQm9keT4gfVxuXHRcdDwvQ2FyZD4gKSB9XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXI7IiwiaW1wb3J0IFJlcGVhdGVyU3RhdGVDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcmVwZWF0ZXIuc3RhdGUnO1xuaW1wb3J0IHVzZVJlcGVhdGVyU3RhdGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlUmVwZWF0ZXJTdGF0ZSc7XG5cbmZ1bmN0aW9uIFJlcGVhdGVyU3RhdGUoIHsgc3RhdGUsIGNoaWxkcmVuIH0gKSB7XG5cdGNvbnN0IGZ1bmN0aW9ucyA9IHVzZVJlcGVhdGVyU3RhdGUoIHN0YXRlICk7XG5cblx0cmV0dXJuIDxSZXBlYXRlclN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IGZ1bmN0aW9ucyB9PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L1JlcGVhdGVyU3RhdGVDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJTdGF0ZTsiLCJpbXBvcnQgU2FmZURlbGV0ZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9zYWZlLmRlbGV0ZSc7XG5cbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHVzZVN0YXRlIH0gPSB3cC5lbGVtZW50O1xuXG5mdW5jdGlvbiBTYWZlRGVsZXRlVG9nZ2xlKCBwcm9wcyApIHtcblx0Y29uc3QgWyBpc1NhZmVEZWxldGluZywgc2V0U2FmZURlbGV0aW5nIF0gPSB1c2VTdGF0ZSggdHJ1ZSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnU2FmZSBkZWxldGluZycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGNoZWNrZWQ9eyBpc1NhZmVEZWxldGluZyB9XG5cdFx0XHRvbkNoYW5nZT17IHNldFNhZmVEZWxldGluZyB9XG5cdFx0Lz5cblx0XHQ8U2FmZURlbGV0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyBpc1NhZmVEZWxldGluZyB9PlxuXHRcdFx0eyBwcm9wcy5jaGlsZHJlbiB9XG5cdFx0PC9TYWZlRGVsZXRlQ29udGV4dC5Qcm92aWRlcj5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTYWZlRGVsZXRlVG9nZ2xlOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZXh0KCB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRpc1N1cHBvcnRlZDogaXRlbSA9PiBmYWxzZSxcblx0cmVuZGVyOiAoIHsgY2hpbGRyZW4gfSApID0+IGNoaWxkcmVuLFxufSApOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuY29uc3QgUmVwZWF0ZXJCdXR0b25zQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0ZWRpdDogaXRlbSA9PiB0cnVlLFxuXHRtb3ZlOiBpdGVtID0+IHRydWUsXG5cdGNsb25lOiBpdGVtID0+IHRydWUsXG5cdGRlbGV0ZTogaXRlbSA9PiB0cnVlLFxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlckJ1dHRvbnNDb250ZXh0OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuY29uc3QgUmVwZWF0ZXJIZWFkQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0aXNTdXBwb3J0ZWQ6IGl0ZW0gPT4gZmFsc2UsXG5cdHJlbmRlcjogKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICkgPT4gbnVsbCxcbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJIZWFkQ29udGV4dDsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IFJlcGVhdGVySXRlbUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCB7XG5cdGN1cnJlbnRJdGVtOiB7fSxcblx0Y2hhbmdlQ3VycmVudEl0ZW06ICgpID0+IHt9LFxuXHRjdXJyZW50SW5kZXg6IC0xLFxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlckl0ZW1Db250ZXh0OyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgUmVwZWF0ZXJTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCBmYWxzZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlclN0YXRlQ29udGV4dDsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRleHQoIGZhbHNlICk7IiwiaW1wb3J0IGdhdGV3YXlzIGZyb20gJy4vZ2F0ZXdheXMvc3RvcmUnO1xuaW1wb3J0IGV2ZW50c1N0b3JlIGZyb20gJy4vZXZlbnRzL3N0b3JlJztcbmltcG9ydCBibG9ja0NvbmRpdGlvbnMgZnJvbSAnLi9ibG9jay1jb25kaXRpb25zL3N0b3JlJztcbmltcG9ydCBtYWNyb3MgZnJvbSAnLi9tYWNyb3MuYnV0dG9uL3N0b3JlJztcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vdmFsaWRhdGlvbi9zdG9yZSc7XG5pbXBvcnQgZmllbGRzIGZyb20gJy4vYmxvY2tzL3N0b3JlJztcbmltcG9ydCAnLi9taWdyYXRpb25zL21pZ3JhdGUuZ2F0ZXdheXMuc2V0dGluZ3MnO1xuXG5jb25zdCB7XG5cdCAgICAgIHJlZ2lzdGVyLFxuXHQgICAgICBkaXNwYXRjaCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuY29uc3Qge1xuXHQgICAgICBhZGRBY3Rpb24sXG4gICAgICB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IHN0b3JlcyA9IFtcblx0Z2F0ZXdheXMsXG5cdGV2ZW50c1N0b3JlLFxuXHRibG9ja0NvbmRpdGlvbnMsXG5cdG1hY3Jvcyxcblx0dmFsaWRhdGlvbixcblx0ZmllbGRzLFxuXTtcblxuc3RvcmVzLmZvckVhY2goIHJlZ2lzdGVyICk7XG5cbmRpc3BhdGNoKCAnamV0LWZvcm1zL2V2ZW50cycgKS5yZWdpc3Rlciggd2luZG93LmpldEZvcm1FdmVudHMudHlwZXMgKTtcbmRpc3BhdGNoKCAnamV0LWZvcm1zL2V2ZW50cycgKS5sb2NrQWN0aW9ucygpO1xuZGlzcGF0Y2goICdqZXQtZm9ybXMvdmFsaWRhdGlvbicgKS5yZWdpc3Rlciggd2luZG93LmpldEZvcm1WYWxpZGF0aW9uICk7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5jaGFuZ2UuYmxvY2tDb25kaXRpb25zLnJlbmRlclN0YXRlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvZXZlbnRzJyxcblx0ZnVuY3Rpb24gKCBzdGF0ZXMgKSB7XG5cdFx0ZGlzcGF0Y2goICdqZXQtZm9ybXMvZXZlbnRzJyApLmNsZWFyRHluYW1pY0V2ZW50cygpO1xuXG5cdFx0Y29uc3QgZXZlbnRzID0gc3RhdGVzLm1hcCggKCB7IHZhbHVlIH0gKSA9PiB7XG5cdFx0XHR2YWx1ZSA9ICdPTi4nICsgdmFsdWU7XG5cblx0XHRcdHJldHVybiB7IHZhbHVlLCBsYWJlbDogdmFsdWUsIGlzRHluYW1pYzogdHJ1ZSB9O1xuXHRcdH0gKTtcblxuXHRcdGRpc3BhdGNoKCAnamV0LWZvcm1zL2V2ZW50cycgKS5yZWdpc3RlciggZXZlbnRzICk7XG5cdH0sXG4pO1xuXG5kaXNwYXRjaCggJ2pldC1mb3Jtcy9ibG9jay1jb25kaXRpb25zJyApLnJlZ2lzdGVyKFxuXHR3aW5kb3cuamV0Rm9ybUJsb2NrQ29uZGl0aW9ucyxcbik7XG4iLCJpbXBvcnQgeyBhcHBseUZpbHRlcnMgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuY2xhc3MgVG9vbHMge1xuXG5cdHN0YXRpYyB3aXRoUGxhY2Vob2xkZXIoIHNvdXJjZSwgbGFiZWwgPSAnLS0nLCB2YWx1ZSA9ICcnICkge1xuXHRcdHJldHVybiBbXG5cdFx0XHR7IGxhYmVsLCB2YWx1ZSB9LFxuXHRcdFx0Li4uc291cmNlLFxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZ2V0UmFuZG9tSUQoKSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiA4OTk5ICkgKyAxMDAwO1xuXHR9O1xufVxuXG5leHBvcnQgY29uc3QgZXZlbnQgPSBuYW1lID0+IHtcblx0Y29uc3QgaW5pdGlhbGl6ZUNhbGxiYWNrc0V2ZW50ID0gbmV3IEV2ZW50KCBuYW1lICk7XG5cdHJldHVybiAoKSA9PiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaXN0ZW4gPSAoIG5hbWUsIGZ1bmMgKSA9PiB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIGZ1bmMgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW4oIGxpc3RBcnIsIG5hbWUgKSB7XG5cdGlmICggIWxpc3RBcnI/Lmxlbmd0aCApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRyZXR1cm4gbGlzdEFyci5tYXAoIGN1cnJlbnQgPT4ge1xuXHRcdHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGN1cnJlbnQgPyBjdXJyZW50WyBuYW1lIF0gOiBjdXJyZW50O1xuXHR9ICk7XG59XG5cbmNvbnN0IGNvbnZlcnRTeW1ib2xzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnRvb2xzLmNvbnZlcnRTeW1ib2xzJywge1xuXHRjaGVja0N5clJlZ2V4OiAvW9CwLdGP0ZHRl9GU0pHRll0vaSxcblx0Y3lyUmVnZXg6IC9b0LAt0Y/RkdGX0ZTSkdGWXS9naSxcblx0Y2hhcnNNYXA6IHtcblx0XHQn0LAnOiAnYScsICfQsSc6ICdiJywgJ9CyJzogJ3YnLCAn0LMnOiAnZycsICfQtCc6ICdkJyxcblx0XHQn0LUnOiAnZScsICfRkSc6ICdpbycsICfQtic6ICd6aCcsICfQtyc6ICd6JywgJ9C4JzogJ2knLFxuXHRcdCfQuSc6ICdpJywgJ9C6JzogJ2snLCAn0LsnOiAnbCcsICfQvCc6ICdtJywgJ9C9JzogJ24nLFxuXHRcdCfQvic6ICdvJywgJ9C/JzogJ3AnLCAn0YAnOiAncicsICfRgSc6ICdzJywgJ9GCJzogJ3QnLFxuXHRcdCfRgyc6ICd1JywgJ9GEJzogJ2YnLCAn0YUnOiAna2gnLCAn0YYnOiAndHMnLCAn0YcnOiAnY2gnLFxuXHRcdCfRiCc6ICdzaCcsICfRiSc6ICdzaGNoJywgJ9GLJzogJ3knLCAn0Y0nOiAnZScsICfRjic6ICdpdScsXG5cdFx0J9GPJzogJ2lhJywgJ9GXJzogJ2knLCAn0ZQnOiAnaWUnLCAn0pEnOiAnZycsICfRlic6ICdpJyxcblx0fSxcbn0gKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlQ3lyVG9MYXRpbiggc3RyICkge1xuXHRpZiAoIGNvbnZlcnRTeW1ib2xzLmNoZWNrQ3lyUmVnZXgudGVzdCggc3RyICkgKSB7XG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoIGNvbnZlcnRTeW1ib2xzLmN5clJlZ2V4LCBmdW5jdGlvbiAoIG1hdGNoICkge1xuXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gY29udmVydFN5bWJvbHMuY2hhcnNNYXBbIG1hdGNoIF0gKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNvbnZlcnRTeW1ib2xzLmNoYXJzTWFwWyBtYXRjaCBdO1xuXHRcdH0gKTtcblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb252ZXJ0ZWROYW1lKCB2YWx1ZVRvQ2hhbmdlICkge1xuXHRsZXQgc2x1ZyA9IHZhbHVlVG9DaGFuZ2UudG9Mb3dlckNhc2UoKTtcblxuXHQvLyBSZXBsYWNlIGFjY2VudHNcblx0c2x1ZyA9IHNsdWcubm9ybWFsaXplKCAnTkZEJyApLnJlcGxhY2UoIC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJyApO1xuXG5cdC8vIFJlcGxhY2UgY3lyaWxsaWNcblx0c2x1ZyA9IG1heWJlQ3lyVG9MYXRpbiggc2x1ZyApO1xuXG5cdC8vIEdldCBsaXN0IG9mIHdvcmRzXG5cdGNvbnN0IHNsdWdQYXJ0cyA9IHNsdWcubWF0Y2goIC9cXGIoXFx3KylcXGIvZyApO1xuXG5cdHNsdWcgPSAnJztcblxuXHRmb3IgKCBjb25zdCBbIHNsdWdJbmRleCwgc2x1Z1BhcnQgXSBvZiBPYmplY3QuZW50cmllcyggc2x1Z1BhcnRzICkgKSB7XG5cdFx0c2x1ZyArPSAoXG5cdFx0XHQwID09PSArc2x1Z0luZGV4ID8gJycgOiAnXydcblx0XHQpICsgc2x1Z1BhcnQ7XG5cblx0XHRjb25zdCBpc0xhc3QgPSAxICsgK3NsdWdJbmRleCA9PT0gc2x1Z1BhcnRzLmxlbmd0aDtcblxuXHRcdGlmICggc2x1Zy5sZW5ndGggPiA2MCApIHtcblx0XHRcdHJldHVybiBzbHVnICsgKFxuXHRcdFx0XHRpc0xhc3QgPyAnJyA6ICdfXydcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHNsdWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc25hbWVzKCAuLi5hZGRpdGlvbmFsICkge1xuXHRjb25zdCByZXN1bHQgPSBbXTtcblxuXHRjb25zdCBwYXJzZVZhbHVlcyA9IHNvdXJjZSA9PiB7XG5cdFx0c291cmNlLmZvckVhY2goIGl0ZW1DbGFzcyA9PiB7XG5cdFx0XHRpZiAoICFpdGVtQ2xhc3MgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggaXRlbUNsYXNzICkgKSB7XG5cdFx0XHRcdHBhcnNlVmFsdWVzKCBpdGVtQ2xhc3MgKTtcblx0XHRcdH1cblx0XHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBpdGVtQ2xhc3MgKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKCBpdGVtQ2xhc3MudHJpbSgpICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICdvYmplY3QnICE9PSB0eXBlb2YgaXRlbUNsYXNzICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmb3IgKCBjb25zdCBpdGVtQ2xhc3NLZXkgaW4gaXRlbUNsYXNzICkge1xuXHRcdFx0XHRpZiAoIGl0ZW1DbGFzc1sgaXRlbUNsYXNzS2V5IF0gKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2goIChcblx0XHRcdFx0XHRcdGl0ZW1DbGFzc0tleSArICcnXG5cdFx0XHRcdFx0KS50cmltKCkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcblxuXHRwYXJzZVZhbHVlcyggYWRkaXRpb25hbCApO1xuXG5cdHJldHVybiByZXN1bHQuam9pbiggJyAnICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0T2JqZWN0VG9PcHRpb25zTGlzdCggZW50cmllcyA9IFtdLCB7XG5cdHVzZVBsYWNlaG9sZGVyID0gdHJ1ZSxcblx0bGFiZWwgPSAnLS0nLFxuXHR2YWx1ZSA9ICcnLFxufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0ge30gKSB7XG5cdGNvbnN0IHBsYWNlaG9sZGVyID0geyBsYWJlbCwgdmFsdWUgfTtcblxuXHRpZiAoICFlbnRyaWVzICkge1xuXHRcdHJldHVybiB1c2VQbGFjZWhvbGRlciA/IFsgcGxhY2Vob2xkZXIgXSA6IFtdO1xuXHR9XG5cblx0Y29uc3Qgb3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKCBlbnRyaWVzICkubWFwKCAoIG9wdGlvbiApID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IG9wdGlvbi52YWx1ZSxcblx0XHRcdGxhYmVsOiBvcHRpb24ubGFiZWwsXG5cdFx0fTtcblx0fSApO1xuXG5cdHJldHVybiB1c2VQbGFjZWhvbGRlciA/IFsgcGxhY2Vob2xkZXIsIC4uLm9wdGlvbnMgXSA6IG9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NldFVybCggdXJsID0gJycgKSB7XG5cdHJldHVybiBKZXRGb3JtRWRpdG9yRGF0YS5hc3NldHNVcmwgKyB1cmw7XG59XG5cbi8qKlxuICogQHNpbmNlIDMuMS4wXG4gKlxuICogQHBhcmFtICBvYmpcbiAqIEBwYXJhbSAgcGF0aFxuICogQHBhcmFtICB2YWx1ZVxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldCggb2JqLCBwYXRoLCB2YWx1ZSApIHtcblx0Ly8gQ3JlYXRlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBvYmplY3Rcblx0Y29uc3QgbmV3T2JqID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIG9iaiApICk7XG5cblx0bGV0IGN1cnJlbnRPYmogPSBuZXdPYmo7XG5cdGxldCBjdXJyZW50S2V5O1xuXG5cdC8vIFRyYXZlcnNlIHRoZSBvYmplY3QgYWNjb3JkaW5nIHRvIHRoZSBwYXRoXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKysgKSB7XG5cdFx0Y3VycmVudEtleSA9IHBhdGhbIGkgXTtcblxuXHRcdC8vIElmIHRoZSBjdXJyZW50IGtleSBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgYSBuZXcgb2JqZWN0IGF0IHRoYXQga2V5XG5cdFx0aWYgKCAhY3VycmVudE9ialsgY3VycmVudEtleSBdICkge1xuXHRcdFx0Y3VycmVudE9ialsgY3VycmVudEtleSBdID0ge307XG5cdFx0fVxuXG5cdFx0Ly8gVXBkYXRlIHRoZSBjdXJyZW50IG9iamVjdCBhbmQga2V5XG5cdFx0aWYgKCBpID09PSBwYXRoLmxlbmd0aCAtIDEgKSB7XG5cdFx0XHQvLyBJZiB0aGlzIGlzIHRoZSBsYXN0IGtleSBpbiB0aGUgcGF0aCwgc2V0IHRoZSB2YWx1ZVxuXHRcdFx0Y3VycmVudE9ialsgY3VycmVudEtleSBdID0gdmFsdWU7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gT3RoZXJ3aXNlLCBjb250aW51ZSB0cmF2ZXJzaW5nIHRoZSBvYmplY3Rcblx0XHRcdGN1cnJlbnRPYmpbIGN1cnJlbnRLZXkgXSA9IHsgLi4uY3VycmVudE9ialsgY3VycmVudEtleSBdIH07XG5cdFx0XHRjdXJyZW50T2JqICAgICAgICAgICAgICAgPSBjdXJyZW50T2JqWyBjdXJyZW50S2V5IF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld09iajtcbn1cblxuLyoqXG4gKiBAc2luY2UgMy4xLjBcbiAqXG4gKiBAcGFyYW0gIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eSggdmFsdWUgKSB7XG5cdGlmICggbnVsbCA9PT0gdmFsdWUgfHwgdW5kZWZpbmVkID09PSB2YWx1ZSApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiB2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gIU9iamVjdC5rZXlzKCB2YWx1ZSApPy5sZW5ndGg7XG5cdH1cblxuXHRpZiAoICdudW1iZXInID09PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIDAgPT09IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuICF2YWx1ZT8ubGVuZ3RoO1xufVxuXG5leHBvcnQgY29uc3QgZXh0ZW5kUHJvdG90eXBlID0gKCBQYXJlbnRGdW5jdGlvbiApID0+IHtcblx0ZnVuY3Rpb24gQ2hpbGRGdW5jdGlvblByb3RvdHlwZSgpIHtcblx0XHRQYXJlbnRGdW5jdGlvbi5jYWxsKCB0aGlzICk7XG5cdH1cblxuXHRDaGlsZEZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdFx0UGFyZW50RnVuY3Rpb24ucHJvdG90eXBlLFxuXHQpO1xuXG5cdHJldHVybiBDaGlsZEZ1bmN0aW9uUHJvdG90eXBlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHM7IiwiY29uc3QgeyBzdG9yZTogYmxvY2tzU3RvcmUgfSA9IHdwLmJsb2NrcztcblxuY2xhc3MgTWVzc2FnZUl0ZW0ge1xuXHRjb25zdHJ1Y3RvciggbWVzc2FnZSApIHtcblx0XHR0aGlzLmlkICAgICA9IG1lc3NhZ2UuaWQ7XG5cdFx0dGhpcy5ibG9ja3MgPSBbXTtcblxuXHRcdHRoaXMuc2V0QmxvY2tzTWV0YSggbWVzc2FnZS5zdXBwb3J0ZWQgKTtcblx0fVxuXG5cdHNldEJsb2Nrc01ldGEoIGJsb2NrcyApIHtcblx0XHRpZiAoICFibG9ja3MubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuYmxvY2tzID0gYmxvY2tzLm1hcCggYmxvY2sgPT4ge1xuXHRcdFx0Y29uc3QgYmxvY2tUeXBlID0gd3AuZGF0YS5zZWxlY3QoIGJsb2Nrc1N0b3JlICkuZ2V0QmxvY2tUeXBlKFxuXHRcdFx0XHRgamV0LWZvcm1zLyR7IGJsb2NrIH1gLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGl0bGU6IGJsb2NrVHlwZS50aXRsZSxcblx0XHRcdFx0aWNvbjogYmxvY2tUeXBlLmljb24uc3JjLFxuXHRcdFx0fTtcblx0XHR9ICk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUl0ZW07IiwiaW1wb3J0IE1lc3NhZ2VJdGVtIGZyb20gJy4vTWVzc2FnZUl0ZW0nO1xuXG5jbGFzcyBWYWxpZGF0aW9uTWVzc2FnZXMge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaXRlbXMgPSBbXTtcblx0fVxuXG5cdHB1c2goIG1lc3NhZ2UgKSB7XG5cdFx0dGhpcy5pdGVtcy5wdXNoKCBuZXcgTWVzc2FnZUl0ZW0oIG1lc3NhZ2UgKSApO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvbk1lc3NhZ2VzOyIsImltcG9ydCBFZGl0UnVsZXNNb2RhbENvbnRleHQgZnJvbSAnLi9FZGl0UnVsZXNNb2RhbENvbnRleHQnO1xuaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCBEZXRhaWxzQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsc0NvbnRhaW5lcic7XG5pbXBvcnQgSG92ZXJDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ib3ZlckNvbnRhaW5lcic7XG5pbXBvcnQgSHVtYW5SZWFkYWJsZVJ1bGUgZnJvbSAnLi9IdW1hblJlYWRhYmxlUnVsZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBBZHZhbmNlZFJ1bGVJdGVtKCB7IHJ1bGUsIGluZGV4ID0gMCB9ICkge1xuXHRjb25zdCB7IHNldFNob3dNb2RhbCB9ICAgICAgICAgICAgICA9IHVzZUNvbnRleHQoIEVkaXRSdWxlc01vZGFsQ29udGV4dCApO1xuXHRjb25zdCBbIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXG5cdGNvbnN0IFsgaXNIb3Zlciwgc2V0SG92ZXIgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPVwiamV0LWZiIHAtcmVsYXRpdmVcIlxuXHRcdG9uTW91c2VPdmVyPXsgKCkgPT4gc2V0SG92ZXIoIHRydWUgKSB9XG5cdFx0b25Gb2N1cz17ICgpID0+IHNldEhvdmVyKCB0cnVlICkgfVxuXHRcdG9uTW91c2VPdXQ9eyAoKSA9PiBzZXRIb3ZlciggZmFsc2UgKSB9XG5cdFx0b25CbHVyPXsgKCkgPT4gc2V0SG92ZXIoIGZhbHNlICkgfVxuXHQ+XG5cdFx0PEhvdmVyQ29udGFpbmVyIGlzSG92ZXI9eyBpc0hvdmVyIH0+XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0aWNvbj17ICdlZGl0JyB9XG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdFx0XHQuLi5hdHRyaWJ1dGVzLnZhbGlkYXRpb24sXG5cdFx0XHRcdFx0XHRcdHJ1bGVzOiBhdHRyaWJ1dGVzLnZhbGlkYXRpb24ucnVsZXMubWFwKFxuXHRcdFx0XHRcdFx0XHRcdCggY3VycmVudCwgY3VycmVudEluZGV4ICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudC5fX3Zpc2libGUgPSBpbmRleCA9PT0gY3VycmVudEluZGV4O1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHNldFNob3dNb2RhbCggcHJldiA9PiAhcHJldiApO1xuXHRcdFx0XHR9IH1cblx0XHRcdD5cblx0XHRcdFx0eyBfXyggJ0VkaXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdGljb249eyAndHJhc2gnIH1cblx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdC4uLmF0dHJpYnV0ZXMudmFsaWRhdGlvbixcblx0XHRcdFx0XHRcdFx0cnVsZXM6IGF0dHJpYnV0ZXMudmFsaWRhdGlvbi5ydWxlcy5maWx0ZXIoXG5cdFx0XHRcdFx0XHRcdFx0KCBjdXJyZW50LCBjdXJyZW50SW5kZXggKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50SW5kZXggIT09IGluZGV4XG5cdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdD5cblx0XHRcdFx0eyBfXyggJ0RlbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvSG92ZXJDb250YWluZXI+XG5cdFx0PERldGFpbHNDb250YWluZXI+XG5cdFx0XHQ8SHVtYW5SZWFkYWJsZVJ1bGUgcnVsZT17IHJ1bGUgfS8+XG5cdFx0PC9EZXRhaWxzQ29udGFpbmVyPlxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkUnVsZUl0ZW07IiwiaW1wb3J0IFRvb2xzIGZyb20gJy4uLy4uL3Rvb2xzJztcbmltcG9ydCBSZXBlYXRlckl0ZW1Db250ZXh0IGZyb20gJy4uLy4uL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuaXRlbSc7XG5pbXBvcnQgQmFzZUhlbHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNlSGVscCc7XG5pbXBvcnQgQWR2YW5jZWRNb2RhbENvbnRyb2wgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZHZhbmNlZE1vZGFsQ29udHJvbCc7XG5pbXBvcnQgQ2hvb3NlUmVsYXRlZEZpZWxkIGZyb20gJy4vQ2hvb3NlUmVsYXRlZEZpZWxkJztcblxuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuXHQgICAgICBUZXh0YXJlYUNvbnRyb2wsXG5cdCAgICAgIFRleHRDb250cm9sLFxuXHQgICAgICB3aXRoRmlsdGVycyxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuXHQgICAgICB1c2VTdGF0ZSxcblx0ICAgICAgdXNlRWZmZWN0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIGFkZEZpbHRlcixcbiAgICAgIH0gPSB3cC5ob29rcztcbmNvbnN0IHtcblx0ICAgICAgcnVsZV90eXBlczogcnVsZVR5cGVzLFxuXHQgICAgICBzc3JfY2FsbGJhY2tzOiBzc3JDYWxsYmFja3MsXG4gICAgICB9ID0gd2luZG93LmpldEZvcm1WYWxpZGF0aW9uO1xuXG5jb25zdCBzc3JDYWxsYmFja3NLZXlzID0gc3NyQ2FsbGJhY2tzLm1hcCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApO1xuXG5mdW5jdGlvbiBnZXRMYWJlbCggdHlwZSApIHtcblx0Y29uc3QgaW5kZXhSdWxlID0gcnVsZVR5cGVzLmZpbmRJbmRleCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gdHlwZSApO1xuXHRjb25zdCBmYWxsYmFjayAgPSBfXyggJ0VudGVyIHZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5cblx0aWYgKCAtMSA9PT0gaW5kZXhSdWxlICkge1xuXHRcdHJldHVybiBmYWxsYmFjaztcblx0fVxuXG5cdHJldHVybiBydWxlVHlwZXNbIGluZGV4UnVsZSBdPy5jb250cm9sX2xhYmVsID8/IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBSdWxlU3BlY2lmaWNDb250cm9scygge1xuXHRjdXJyZW50SXRlbSxcblx0Y2hhbmdlQ3VycmVudEl0ZW0sXG59ICkge1xuXHRjb25zdCBbIGxhYmVsLCBzZXRMYWJlbCBdID0gdXNlU3RhdGUoICgpID0+IGdldExhYmVsKCBjdXJyZW50SXRlbS50eXBlICkgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRzZXRMYWJlbCggZ2V0TGFiZWwoIGN1cnJlbnRJdGVtLnR5cGUgKSApO1xuXHR9LCBbIGN1cnJlbnRJdGVtLnR5cGUgXSApO1xuXG5cdHN3aXRjaCAoIGN1cnJlbnRJdGVtLnR5cGUgKSB7XG5cdFx0Y2FzZSAnZXF1YWwnOlxuXHRcdGNhc2UgJ2NvbnRhaW4nOlxuXHRcdGNhc2UgJ2NvbnRhaW5fbm90Jzpcblx0XHRjYXNlICdyZWdleHAnOlxuXHRcdGNhc2UgJ3JlZ2V4cF9ub3QnOlxuXHRcdFx0cmV0dXJuIDw+XG5cdFx0XHRcdDxDaG9vc2VSZWxhdGVkRmllbGQvPlxuXHRcdFx0XHR7ICFCb29sZWFuKCBjdXJyZW50SXRlbS5maWVsZCApICYmIDxBZHZhbmNlZE1vZGFsQ29udHJvbFxuXHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlUHJlc2V0PXsgdmFsdWUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWUgfSApIH1cblx0XHRcdFx0XHRvbkNoYW5nZU1hY3Jvcz17IG5hbWUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHtcblx0XHRcdFx0XHRcdHZhbHVlOiAoXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtLnZhbHVlID8/ICcnXG5cdFx0XHRcdFx0XHQpICsgbmFtZSxcblx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyAoIHsgaW5zdGFuY2VJZCB9ICkgPT4gPFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9eyBpbnN0YW5jZUlkIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZSB9ICkgfVxuXHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0PC9BZHZhbmNlZE1vZGFsQ29udHJvbD4gfVxuXHRcdFx0PC8+O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuYWR2YW5jZWQucnVsZS5jb250cm9scycsXG5cdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cblx0KCBEZWZhdWx0Q29udHJvbHMgKSA9PiAoIHByb3BzICkgPT4ge1xuXHRcdGNvbnN0IHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gPSBwcm9wcztcblx0XHRjb25zdCBbIHNob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlscyBdICAgID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0XHRpZiAoICdzc3InICE9PSBjdXJyZW50SXRlbS50eXBlICkge1xuXHRcdFx0cmV0dXJuIDxEZWZhdWx0Q29udHJvbHMgeyAuLi5wcm9wcyB9IC8+O1xuXHRcdH1cblxuXHRcdGNvbnN0IGZ1bmN0aW9uTmFtZSA9IGN1cnJlbnRJdGVtLnZhbHVlIHx8ICdjdXN0b21famZiX2ZpZWxkX3ZhbGlkYXRpb24nO1xuXG5cdFx0cmV0dXJuIDw+XG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdG9wdGlvbnM9eyBUb29scy53aXRoUGxhY2Vob2xkZXIoXG5cdFx0XHRcdFx0c3NyQ2FsbGJhY2tzLFxuXHRcdFx0XHRcdF9fKCAnQ3VzdG9tIGZ1bmN0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdCkgfVxuXHRcdFx0XHRsYWJlbD17IF9fKCAnQ2hvb3NlIGNhbGxiYWNrJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cblx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZSB9ICkgfVxuXHRcdFx0Lz5cblx0XHRcdHsgIXNzckNhbGxiYWNrc0tleXMuaW5jbHVkZXMoIGN1cnJlbnRJdGVtLnZhbHVlICkgJiYgPD5cblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Z1bmN0aW9uIG5hbWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZSB9ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QmFzZUhlbHA+XG5cdFx0XHRcdFx0eyBfXyggJ0V4YW1wbGUgb2YgcmVnaXN0ZXJpbmcgYSBmdW5jdGlvbiBiZWxvdy4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyB9XG5cdFx0XHRcdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi99XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dEZXRhaWxzKCBwcmV2ID0+ICFwcmV2ICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHsgc2hvd0RldGFpbHNcblx0XHRcdFx0XHRcdCAgPyBfXyggJ0hpZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0XHRcdFx0ICA6IF9fKCAnU2hvdycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvQmFzZUhlbHA+XG5cdFx0XHRcdHsgc2hvd0RldGFpbHMgJiYgPHByZT5cblx0XHRcdFx0XHR7IGAvKipcbiAqIFRvIGdldCBhbGwgdGhlIHZhbHVlcyBvZiB0aGUgZmllbGRzIGluIHRoZSBmb3JtLCB5b3UgY2FuIHVzZSB0aGUgZXhwcmVzc2lvbjpcbiAqIGpldF9mYl9yZXF1ZXN0X2hhbmRsZXIoKS0+Z2V0X3JlcXVlc3QoKSBvciAkY29udGV4dC0+Z2V0X3JlcXVlc3QoKVxuICpcbiAqIElmIHRoZSBmaWVsZCBpcyBsb2NhdGVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHJlcGVhdGVyLCB0aGVuIG9ubHlcbiAqIGpldF9mYl9yZXF1ZXN0X2hhbmRsZXIoKS0+Z2V0X3JlcXVlc3QoKSwgYnV0ICRjb250ZXh0LT5nZXRfcmVxdWVzdCgpIFxuICogd2lsbCByZXR1cm4gdGhlIHZhbHVlcyBvZiBhbGwgZmllbGRzIG9mIHRoZSBjdXJyZW50IHJlcGVhdGVyIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gJHZhbHVlIG1peGVkXG4gKiBAcGFyYW0gJGNvbnRleHQgXFxcXEpldF9Gb3JtX0J1aWxkZXJcXFxcUmVxdWVzdFxcXFxQYXJzZXJfQ29udGV4dFxuICpcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiAkeyBmdW5jdGlvbk5hbWUgfSggJHZhbHVlLCAkY29udGV4dCApOiBib29sIHtcblx0Ly8geW91ciBsb2dpY1xuXHRyZXR1cm4gdHJ1ZTtcbn1gIH1cblx0XHRcdFx0PC9wcmU+IH1cblx0XHRcdDwvPiB9XG5cdFx0PC8+O1xuXHR9LFxuKTtcblxuY29uc3QgUnVsZUNvbnRyb2xzID0gd2l0aEZpbHRlcnMoXG5cdCdqZXQuZmIuYWR2YW5jZWQucnVsZS5jb250cm9scycsXG4pKCBSdWxlU3BlY2lmaWNDb250cm9scyApO1xuXG5mdW5jdGlvbiBBZHZhbmNlZFJ1bGVNb2RhbEl0ZW0oKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBjdXJyZW50SXRlbSxcblx0XHQgICAgICBjaGFuZ2VDdXJyZW50SXRlbSxcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIFJlcGVhdGVySXRlbUNvbnRleHQgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0b3B0aW9ucz17IFRvb2xzLndpdGhQbGFjZWhvbGRlciggcnVsZVR5cGVzICkgfVxuXHRcdFx0bGFiZWw9eyBfXyggJ1J1bGUgdHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udHlwZSB9XG5cdFx0XHRvbkNoYW5nZT17IHR5cGUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgdHlwZSB9ICkgfVxuXHRcdC8+XG5cdFx0PFJ1bGVDb250cm9sc1xuXHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XG5cdFx0XHRjaGFuZ2VDdXJyZW50SXRlbT17IGNoYW5nZUN1cnJlbnRJdGVtIH1cblx0XHQvPlxuXHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdGxhYmVsPXsgX18oICdFcnJvciBtZXNzYWdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5tZXNzYWdlIH1cblx0XHRcdG9uQ2hhbmdlPXsgbWVzc2FnZSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggeyBtZXNzYWdlIH0gKSB9XG5cdFx0Lz5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZFJ1bGVNb2RhbEl0ZW07IiwiaW1wb3J0IEVkaXRSdWxlc01vZGFsQ29udGV4dCBmcm9tICcuL0VkaXRSdWxlc01vZGFsQ29udGV4dCc7XG5pbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VCbG9ja0F0dHJpYnV0ZXMnO1xuaW1wb3J0IERldGFpbHNDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRhaWxzQ29udGFpbmVyJztcbmltcG9ydCBIb3ZlckNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hvdmVyQ29udGFpbmVyJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gQWR2YW5jZWRSdWxlc0lzRW1wdHkoKSB7XG5cdGNvbnN0IHsgc2V0U2hvd01vZGFsIH0gICAgICAgICAgICAgID0gdXNlQ29udGV4dCggRWRpdFJ1bGVzTW9kYWxDb250ZXh0ICk7XG5cdGNvbnN0IFsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyBdID0gdXNlQmxvY2tBdHRyaWJ1dGVzKCk7XG5cblx0Y29uc3QgWyBpc0hvdmVyLCBzZXRIb3ZlciBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9XCJqZXQtZmIgcC1yZWxhdGl2ZVwiXG5cdFx0b25Nb3VzZU92ZXI9eyAoKSA9PiBzZXRIb3ZlciggdHJ1ZSApIH1cblx0XHRvbkZvY3VzPXsgKCkgPT4gc2V0SG92ZXIoIHRydWUgKSB9XG5cdFx0b25Nb3VzZU91dD17ICgpID0+IHNldEhvdmVyKCBmYWxzZSApIH1cblx0XHRvbkJsdXI9eyAoKSA9PiBzZXRIb3ZlciggZmFsc2UgKSB9XG5cdD5cblx0XHQ8SG92ZXJDb250YWluZXIgaXNIb3Zlcj17IGlzSG92ZXIgfT5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRpY29uPXsgJ3BsdXMtYWx0MicgfVxuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRcdFx0Li4uYXR0cmlidXRlcy52YWxpZGF0aW9uLFxuXHRcdFx0XHRcdFx0XHRydWxlczogW1xuXHRcdFx0XHRcdFx0XHRcdHsgX192aXNpYmxlOiB0cnVlIH0sXG5cdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRzZXRTaG93TW9kYWwoIHByZXYgPT4gIXByZXYgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgX18oICdBZGQgbmV3JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9Ib3ZlckNvbnRhaW5lcj5cblx0XHQ8RGV0YWlsc0NvbnRhaW5lcj5cblx0XHRcdDxzcGFuIGRhdGEtdGl0bGU9eyBfXyhcblx0XHRcdFx0J1lvdSBoYXZlIG5vIHJ1bGVzIGZvciB0aGlzIGZpZWxkLicsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgfS8+XG5cdFx0XHQ8c3BhbiBkYXRhLXRpdGxlPXsgX18oXG5cdFx0XHRcdCdQbGVhc2UgY2xpY2sgaGVyZSB0byBhZGQgbmV3LicsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgfS8+XG5cdFx0PC9EZXRhaWxzQ29udGFpbmVyPlxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkUnVsZXNJc0VtcHR5OyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgQWR2YW5jZWRSdWxlc0lzRW1wdHkgZnJvbSAnLi9BZHZhbmNlZFJ1bGVzSXNFbXB0eSc7XG5pbXBvcnQgQ29udGFpbmVyc0xpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJzTGlzdCc7XG5pbXBvcnQgQWR2YW5jZWRSdWxlSXRlbSBmcm9tICcuL0FkdmFuY2VkUnVsZUl0ZW0nO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIENoaWxkcmVuLFxuXHQgICAgICBjbG9uZUVsZW1lbnQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgcmVuZGVyR3JvdXAgPSAoIGN1cnJlbnQsIGluZGV4ICkgPT4gPD5cblx0PGI+eyBfXyggJ0FORCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L2I+XG5cdDxBZHZhbmNlZFJ1bGVJdGVtXG5cdFx0cnVsZT17IGN1cnJlbnQgfVxuXHRcdGluZGV4PXsgaW5kZXggfVxuXHQvPlxuPC8+O1xuXG5mdW5jdGlvbiBnZXRSdWxlc0xpc3QoIHJ1bGVzICkge1xuXHRjb25zdCBhbmRSdWxlcyA9IHJ1bGVzLmZpbHRlcihcblx0XHQoIGMsIGluZGV4ICkgPT4gMCAhPT0gaW5kZXgsXG5cdCk7XG5cblx0cmV0dXJuIFtcblx0XHQ8QWR2YW5jZWRSdWxlSXRlbVxuXHRcdFx0cnVsZT17IHJ1bGVzWyAwIF0gfVxuXHRcdFx0a2V5PVwiZmlyc3RfaXRlbVwiXG5cdFx0Lz4sXG5cdFx0Li4uYW5kUnVsZXMubWFwKFxuXHRcdFx0KCBpdGVtLCBpbmRleCApID0+IHJlbmRlckdyb3VwKCBpdGVtLCBpbmRleCArIDEgKSxcblx0XHQpLFxuXHRdO1xufVxuXG5mdW5jdGlvbiBBZHZhbmNlZFJ1bGVzTGlzdCgpIHtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblxuXHRpZiAoICFhdHRyaWJ1dGVzPy52YWxpZGF0aW9uPy5ydWxlcz8ubGVuZ3RoICkge1xuXHRcdHJldHVybiA8QWR2YW5jZWRSdWxlc0lzRW1wdHkvPjtcblx0fVxuXG5cdHJldHVybiA8Q29udGFpbmVyc0xpc3Q+XG5cdFx0eyBDaGlsZHJlbi5tYXAoXG5cdFx0XHRnZXRSdWxlc0xpc3QoIGF0dHJpYnV0ZXMudmFsaWRhdGlvbi5ydWxlcyApLFxuXHRcdFx0Y2xvbmVFbGVtZW50LFxuXHRcdCkgfVxuXHQ8L0NvbnRhaW5lcnNMaXN0Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSdWxlc0xpc3Q7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCB1c2VPblVwZGF0ZU1vZGFsIGZyb20gJy4uLy4uL2FjdGlvbi1tb2RhbC9ob29rcy91c2VPblVwZGF0ZU1vZGFsJztcbmltcG9ydCBSZXBlYXRlciBmcm9tICcuLi8uLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyJztcbmltcG9ydCBSZXBlYXRlckFkZE5ldyBmcm9tICcuLi8uLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLmFkZC5uZXcnO1xuaW1wb3J0IEFkdmFuY2VkUnVsZU1vZGFsSXRlbSBmcm9tICcuL0FkdmFuY2VkUnVsZU1vZGFsSXRlbSc7XG5pbXBvcnQgUmVwZWF0ZXJTdGF0ZSBmcm9tICcuLi8uLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLnN0YXRlJztcbmltcG9ydCBSZXBlYXRlckhlYWRDb250ZXh0XG5cdGZyb20gJy4uLy4uL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uaGVhZCc7XG5pbXBvcnQgaHVtYW5SZWFkYWJsZVJ1bGUgZnJvbSAnLi4vaGVscGVycy9odW1hblJlYWRhYmxlUnVsZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU3RhdGUsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gQWR2YW5jZWRSdWxlc01vZGFsKCkge1xuXHRjb25zdCBbIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xuXHRjb25zdCBbIGN1cnJlbnQsIHNldEN1cnJlbnQgXSAgICAgICA9IHVzZVN0YXRlKFxuXHRcdCgpID0+IGF0dHJpYnV0ZXMudmFsaWRhdGlvbj8ucnVsZXMgPz8gW10sXG5cdCk7XG5cblx0dXNlT25VcGRhdGVNb2RhbCggKCkgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoIHByZXYgPT4gKFxuXHRcdFx0e1xuXHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0Li4uYXR0cmlidXRlcy52YWxpZGF0aW9uLFxuXHRcdFx0XHRcdHJ1bGVzOiBjdXJyZW50LFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCkgKTtcblx0fSApO1xuXG5cdHJldHVybiA8UmVwZWF0ZXJTdGF0ZSBzdGF0ZT17IHNldEN1cnJlbnQgfT5cblx0XHQ8UmVwZWF0ZXJIZWFkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHtcblx0XHRcdGlzU3VwcG9ydGVkOiAoKSA9PiB0cnVlLFxuXHRcdFx0cmVuZGVyOiAoIHsgY3VycmVudEl0ZW0gfSApID0+IDxzcGFuXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9XG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge1xuXHRcdFx0XHRcdF9faHRtbDogaHVtYW5SZWFkYWJsZVJ1bGUoIGN1cnJlbnRJdGVtICksXG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHR9IH0+XG5cdFx0XHQ8UmVwZWF0ZXIgaXRlbXM9eyBjdXJyZW50IH0+XG5cdFx0XHRcdDxBZHZhbmNlZFJ1bGVNb2RhbEl0ZW0vPlxuXHRcdFx0PC9SZXBlYXRlcj5cblx0XHQ8L1JlcGVhdGVySGVhZENvbnRleHQuUHJvdmlkZXI+XG5cdFx0PFJlcGVhdGVyQWRkTmV3PlxuXHRcdFx0eyBfXyggJ0FkZCBSdWxlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvUmVwZWF0ZXJBZGROZXc+XG5cdDwvUmVwZWF0ZXJTdGF0ZT47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSdWxlc01vZGFsOyIsImltcG9ydCBSZXBlYXRlckl0ZW1Db250ZXh0IGZyb20gJy4uLy4uL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuaXRlbSc7XG5pbXBvcnQgZ2V0RmllbGRzV2l0aG91dEN1cnJlbnRcblx0ZnJvbSAnLi4vLi4vYmxvY2tzL2hlbHBlcnMvZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQnO1xuXG5jb25zdCB7XG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcblx0ICAgICAgdXNlTWVtbyxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBDaG9vc2VSZWxhdGVkRmllbGQoKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBjdXJyZW50SXRlbSxcblx0XHQgICAgICBjaGFuZ2VDdXJyZW50SXRlbSxcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIFJlcGVhdGVySXRlbUNvbnRleHQgKTtcblxuXHRjb25zdCBmaWVsZHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50KFxuXHRcdFx0X18oICdDdXN0b20gdmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHQpLFxuXHRcdFtdLFxuXHQpO1xuXG5cdHJldHVybiA8U2VsZWN0Q29udHJvbFxuXHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRvcHRpb25zPXsgZmllbGRzIH1cblx0XHRsYWJlbD17IF9fKCAnQ2hvb3NlIGZpZWxkJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZmllbGQgfVxuXHRcdG9uQ2hhbmdlPXsgZmllbGQgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgZmllbGQgfSApIH1cblx0Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENob29zZVJlbGF0ZWRGaWVsZDsiLCJpbXBvcnQgQWR2YW5jZWRSdWxlc01vZGFsIGZyb20gJy4vQWR2YW5jZWRSdWxlc01vZGFsJztcbmltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tICcuLi8uLi9hY3Rpb24tbW9kYWwvY29tcG9uZW50cy9BY3Rpb25Nb2RhbCc7XG5pbXBvcnQgQWR2YW5jZWRSdWxlc0xpc3QgZnJvbSAnLi9BZHZhbmNlZFJ1bGVzTGlzdCc7XG5pbXBvcnQgRWRpdFJ1bGVzTW9kYWxDb250ZXh0IGZyb20gJy4vRWRpdFJ1bGVzTW9kYWxDb250ZXh0JztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBFZGl0QWR2YW5jZWRSdWxlc0J1dHRvbigpIHtcblx0Y29uc3QgWyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PEVkaXRSdWxlc01vZGFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHtcblx0XHRcdHNob3dNb2RhbCxcblx0XHRcdHNldFNob3dNb2RhbCxcblx0XHR9IH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mYiBtYi0yNFwiPlxuXHRcdFx0XHQ8QWR2YW5jZWRSdWxlc0xpc3QvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9FZGl0UnVsZXNNb2RhbENvbnRleHQuUHJvdmlkZXI+XG5cdFx0eyBzaG93TW9kYWwgJiYgPEFjdGlvbk1vZGFsXG5cdFx0XHR0aXRsZT17IF9fKCAnRWRpdCBBZHZhbmNlZCBSdWxlcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldFNob3dNb2RhbCggZmFsc2UgKSB9XG5cdFx0PlxuXHRcdFx0PEFkdmFuY2VkUnVsZXNNb2RhbC8+XG5cdFx0PC9BY3Rpb25Nb2RhbD4gfVxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRBZHZhbmNlZFJ1bGVzQnV0dG9uOyIsImNvbnN0IHsgY3JlYXRlQ29udGV4dCB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgRWRpdFJ1bGVzTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRzaG93TW9kYWw6IGZhbHNlLFxuXHRzZXRTaG93TW9kYWw6ICgpID0+IHt9LFxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0UnVsZXNNb2RhbENvbnRleHQ7IiwiaW1wb3J0IGh1bWFuUmVhZGFibGVSdWxlIGZyb20gJy4uL2hlbHBlcnMvaHVtYW5SZWFkYWJsZVJ1bGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEh1bWFuUmVhZGFibGVSdWxlKCB7IHJ1bGUgfSApIHtcblx0cmV0dXJuIHJ1bGUudHlwZSA/IDw+XG5cdFx0PHNwYW5cblx0XHRcdGRhdGEtdGl0bGU9eyBfXyggJ1J1bGU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7XG5cdFx0XHRcdF9faHRtbDogaHVtYW5SZWFkYWJsZVJ1bGUoIHJ1bGUgKSxcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0eyBCb29sZWFuKCBydWxlLm1lc3NhZ2UgKSAmJiA8c3BhblxuXHRcdFx0ZGF0YS10aXRsZT17IF9fKCAnTWVzc2FnZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtcblx0XHRcdFx0X19odG1sOiBydWxlLm1lc3NhZ2UsXG5cdFx0XHR9IH1cblx0XHQvPiB9XG5cdDwvPiA6IDxzcGFuXG5cdFx0ICAgICAgIGRhdGEtdGl0bGU9eyBfXyhcblx0XHRcdCAgICAgICAnVGhlIHJ1bGUgaXMgbm90IGZ1bGx5IGNvbmZpZ3VyZWQuJyxcblx0XHRcdCAgICAgICAnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0ICAgICAgICkgfVxuXHQgICAgICAgLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh1bWFuUmVhZGFibGVSdWxlOyIsImltcG9ydCB1c2VCbG9ja0F0dHJpYnV0ZXMgZnJvbSAnLi4vLi4vYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlVW5pcUtleSBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlVW5pcUtleSc7XG5pbXBvcnQgeyB1c2VNZXRhU3RhdGUgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWRhdGEnO1xuaW1wb3J0IGdldEl0ZW1CeU5hbWUgZnJvbSAnLi4vaGVscGVycy9nZXRJdGVtQnlOYW1lJztcblxuY29uc3Qge1xuXHQgICAgICBUZXh0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBWYWxpZGF0aW9uQmxvY2tNZXNzYWdlKCB7XG5cdG5hbWUsXG59ICkge1xuXHRjb25zdCB1bmlxS2V5ICAgICAgICAgICAgICAgICAgICAgICA9IHVzZVVuaXFLZXkoKTtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblx0Y29uc3QgWyBhcmdzIF0gICAgICAgICAgICAgICAgICAgICAgPSB1c2VNZXRhU3RhdGUoXG5cdFx0J19qZl92YWxpZGF0aW9uJyxcblx0XHQne30nLFxuXHRcdFtdLFxuXHQpO1xuXG5cdGNvbnN0IGlzSW5oZXJpdCA9ICFhdHRyaWJ1dGVzLnZhbGlkYXRpb24/LnR5cGU7XG5cdGNvbnN0IG1lc3NhZ2VzICA9IGlzSW5oZXJpdFxuXHQgICAgICAgICAgICAgICAgICA/IGFyZ3M/Lm1lc3NhZ2VzID8/IHt9XG5cdCAgICAgICAgICAgICAgICAgIDogYXR0cmlidXRlcy52YWxpZGF0aW9uPy5tZXNzYWdlcyA/PyB7fTtcblxuXHRjb25zdCBjdXJyZW50ID0gZ2V0SXRlbUJ5TmFtZSggbmFtZSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0ZGlzYWJsZWQ9eyBpc0luaGVyaXQgfVxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ21hc3NhZ2VfJyArIG5hbWUgKSB9XG5cdFx0XHRsYWJlbD17IGN1cnJlbnQ/LmxhYmVsIH1cblx0XHRcdGhlbHA9eyBjdXJyZW50Py5oZWxwIH1cblx0XHRcdHZhbHVlPXsgbWVzc2FnZXNbIG5hbWUgXSA/PyBjdXJyZW50Py5pbml0aWFsIH1cblx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gc2V0QXR0cmlidXRlcyggcHJldiA9PiAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRcdC4uLmF0dHJpYnV0ZXMudmFsaWRhdGlvbixcblx0XHRcdFx0XHRcdG1lc3NhZ2VzOiB7XG5cdFx0XHRcdFx0XHRcdC4uLm1lc3NhZ2VzLFxuXHRcdFx0XHRcdFx0XHRbIG5hbWUgXTogdmFsdWUsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH1cblx0XHRcdCkgKSB9XG5cdFx0Lz5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uQmxvY2tNZXNzYWdlOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IGdldEl0ZW1CeU5hbWUgZnJvbSAnLi4vaGVscGVycy9nZXRJdGVtQnlOYW1lJztcbmltcG9ydCB7IEZsZXgsIFRleHRDb250cm9sLCBUb29sdGlwIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcbmltcG9ydCB7IExhYmVsLCBDbGVhckJhc2VDb250cm9sU3R5bGUgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKCBJY29uIClgXG4gICAgc3ZnIHtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICB9XG5gO1xuXG5mdW5jdGlvbiBWYWxpZGF0aW9uTWV0YU1lc3NhZ2UoIHtcblx0bWVzc2FnZSxcblx0dXBkYXRlLFxuXHR2YWx1ZSA9IG51bGwsXG5cdGhlbHAgPSBudWxsLFxufSApIHtcblx0Y29uc3QgY3VycmVudCA9IGdldEl0ZW1CeU5hbWUoIG1lc3NhZ2UuaWQgKTtcblxuXHRyZXR1cm4gPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG5cdFx0PEZsZXg+XG5cdFx0XHQ8TGFiZWwgaHRtbEZvcj17IG1lc3NhZ2UuaWQgfT57IGN1cnJlbnQubGFiZWwgfTwvTGFiZWw+XG5cdFx0XHQ8RmxleCBzdHlsZT17IHsgd2lkdGg6ICdhdXRvJyB9IH0+XG5cdFx0XHRcdHsgbWVzc2FnZS5ibG9ja3MubWFwKCBibG9jayA9PiAoXG5cdFx0XHRcdFx0PFRvb2x0aXBcblx0XHRcdFx0XHRcdGtleT17ICdtZXNzYWdlX2Jsb2NrX2l0ZW0nICsgYmxvY2sudGl0bGUgfVxuXHRcdFx0XHRcdFx0dGV4dD17IGJsb2NrLnRpdGxlIH1cblx0XHRcdFx0XHRcdGRlbGF5PXsgMjAwIH1cblx0XHRcdFx0XHRcdHBvc2l0aW9uPXsgJ3RvcCBjZW50ZXInIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8U3R5bGVkSWNvbiBpY29uPXsgYmxvY2suaWNvbiB9Lz5cblx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdCkgKSB9XG5cdFx0XHQ8L0ZsZXg+XG5cdFx0PC9GbGV4PlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0Y2xhc3NOYW1lPXsgQ2xlYXJCYXNlQ29udHJvbFN0eWxlIH1cblx0XHRcdGlkPXsgbWVzc2FnZS5pZCB9XG5cdFx0XHRoZWxwPXsgaGVscCA/PyBjdXJyZW50Py5oZWxwIH1cblx0XHRcdHZhbHVlPXsgdmFsdWUgPz8gY3VycmVudD8uaW5pdGlhbCB9XG5cdFx0XHRvbkNoYW5nZT17IG1lc3NhZ2VUZXh0ID0+IHVwZGF0ZSggcHJldiA9PiAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHRcdFsgbWVzc2FnZS5pZCBdOiBtZXNzYWdlVGV4dCxcblx0XHRcdFx0fVxuXHRcdFx0KSApIH1cblx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHQvPlxuXHQ8L0ZsZXg+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uTWV0YU1lc3NhZ2U7IiwiaW1wb3J0IHVzZUJsb2NrQXR0cmlidXRlcyBmcm9tICcuLi8uLi9ibG9ja3MvaG9va3MvdXNlQmxvY2tBdHRyaWJ1dGVzJztcbmltcG9ydCB1c2VVbmlxS2V5IGZyb20gJy4uLy4uL2Jsb2Nrcy9ob29rcy91c2VVbmlxS2V5JztcblxuY29uc3Qge1xuXHQgICAgICBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbDogVG9nZ2xlR3JvdXBDb250cm9sLFxuXHQgICAgICBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbjogVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmxldCB7IGZvcm1hdHMgfSA9IHdpbmRvdy5qZXRGb3JtVmFsaWRhdGlvbjtcblxuZnVuY3Rpb24gVmFsaWRhdGlvblRvZ2dsZUdyb3VwKCB7IGV4Y2x1ZGVCcm93c2VyID0gZmFsc2UgfSApIHtcblx0Y29uc3QgWyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIF0gPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblx0Y29uc3QgdW5pcUtleSAgICAgICAgICAgICAgICAgICAgICAgPSB1c2VVbmlxS2V5KCk7XG5cblx0Zm9ybWF0cyA9IGZvcm1hdHMuZmlsdGVyKFxuXHRcdCggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgIT09ICdicm93c2VyJyB8fCAhZXhjbHVkZUJyb3dzZXIsXG5cdCk7XG5cblx0cmV0dXJuIDxUb2dnbGVHcm91cENvbnRyb2xcblx0XHRvbkNoYW5nZT17IHR5cGUgPT4gc2V0QXR0cmlidXRlcyggcHJldiA9PiAoXG5cdFx0XHR7XG5cdFx0XHRcdC4uLnByZXYsXG5cdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHQuLi5hdHRyaWJ1dGVzLnZhbGlkYXRpb24sXG5cdFx0XHRcdFx0dHlwZSxcblx0XHRcdFx0fSxcblx0XHRcdH1cblx0XHQpICkgfVxuXHRcdHZhbHVlPXsgYXR0cmlidXRlcy52YWxpZGF0aW9uPy50eXBlID8/ICcnIH1cblx0XHRsYWJlbD17IF9fKCAnVmFsaWRhdGlvbiB0eXBlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdGlzQmxvY2s9eyB0cnVlIH1cblx0XHRpc0FkYXB0aXZlV2lkdGg9eyBmYWxzZSB9XG5cdD5cblx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uXG5cdFx0XHRsYWJlbD17IF9fKCAnSW5oZXJpdCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdHZhbHVlPXsgJycgfVxuXHRcdFx0YXJpYS1sYWJlbD17IF9fKCAnSW5oZXJpdCBmcm9tIGZvcm1cXCdzIGFyZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRzaG93VG9vbHRpcFxuXHRcdC8+XG5cdFx0eyBmb3JtYXRzLm1hcChcblx0XHRcdGN1cnJlbnQgPT4gPFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCBjdXJyZW50LnZhbHVlICsgJ19rZXknICkgfVxuXHRcdFx0XHRsYWJlbD17IGN1cnJlbnQubGFiZWwgfVxuXHRcdFx0XHR2YWx1ZT17IGN1cnJlbnQudmFsdWUgfVxuXHRcdFx0XHRhcmlhLWxhYmVsPXsgY3VycmVudC50aXRsZSB9XG5cdFx0XHRcdHNob3dUb29sdGlwXG5cdFx0XHQvPiApIH1cblx0PC9Ub2dnbGVHcm91cENvbnRyb2w+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uVG9nZ2xlR3JvdXA7IiwiY29uc3QgeyBtZXNzYWdlcyB9ID0gd2luZG93LmpldEZvcm1WYWxpZGF0aW9uO1xuXG5mdW5jdGlvbiBnZXRJdGVtQnlOYW1lKCBmaW5kTmFtZSApIHtcblx0cmV0dXJuIG1lc3NhZ2VzLmZpbmQoXG5cdFx0KCB7IGlkIH0gKSA9PiBmaW5kTmFtZSA9PT0gaWQsXG5cdCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SXRlbUJ5TmFtZTtcbiIsImNvbnN0IHtcblx0ICAgICAgc2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbi8qKlxuICogQHBhcmFtICBydWxlXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHVtYW5SZWFkYWJsZVJ1bGUoIHJ1bGUgKSB7XG5cdHJldHVybiBzZWxlY3QoICdqZXQtZm9ybXMvdmFsaWRhdGlvbicgKS5yZWFkUnVsZSggcnVsZSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBodW1hblJlYWRhYmxlUnVsZTsiLCJpbXBvcnQgVmFsaWRhdGlvbk1lc3NhZ2VzIGZyb20gJy4uL2NsYXNzZXMvVmFsaWRhdGlvbk1lc3NhZ2VzJztcblxuY29uc3QgeyBtZXNzYWdlcyB9ID0gd2luZG93LmpldEZvcm1WYWxpZGF0aW9uO1xuY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qgc29ydGVkID0gbWVzc2FnZXMuc29ydCggKCBwcmV2LCBuZXh0ICkgPT4ge1xuXHRyZXR1cm4gcHJldi5zdXBwb3J0ZWQubGVuZ3RoIC0gbmV4dC5zdXBwb3J0ZWQubGVuZ3RoO1xufSApO1xuXG5mdW5jdGlvbiBnZXRHcm91cGVkTWVzc2FnZXMoKSB7XG5cdGNvbnN0IGdyb3VwcyA9IG5ldyBWYWxpZGF0aW9uTWVzc2FnZXMoKTtcblxuXHRmb3IgKCBjb25zdCBtZXNzYWdlIG9mIHNvcnRlZCApIHtcblx0XHRncm91cHMucHVzaCggbWVzc2FnZSApO1xuXHR9XG5cblx0cmV0dXJuIGdyb3Vwcy5pdGVtcztcbn1cblxuZnVuY3Rpb24gdXNlR3JvdXBlZFZhbGlkYXRpb25NZXNzYWdlcygpIHtcblx0Y29uc3QgWyBtZXNzYWdlc1N0YXRlIF0gPSB1c2VTdGF0ZSggZ2V0R3JvdXBlZE1lc3NhZ2VzICk7XG5cblx0cmV0dXJuIG1lc3NhZ2VzU3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXM7IiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cmVnaXN0ZXIoIGl0ZW1zICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMucmVnaXN0ZXIsXG5cdFx0XHRpdGVtcyxcblx0XHR9O1xuXHR9LFxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyOiAnUkVHSVNURVInXG59XG5cblxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IGRpc3BhdGNoZXJzID0ge1xuXHRbIGNvbnN0YW50cy5yZWdpc3RlciBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IHtcblx0XHRcdCAgICAgIG1lc3NhZ2VzLFxuXHRcdFx0ICAgICAgc3NyX2NhbGxiYWNrcyxcblx0XHRcdCAgICAgIGZvcm1hdHMsXG5cdFx0XHQgICAgICBydWxlX3R5cGVzLFxuXHRcdCAgICAgIH0gPSBhY3Rpb24uaXRlbXM7XG5cblx0XHRzdGF0ZS5tZXNzYWdlcyAgICAgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggbWVzc2FnZXMgKSApO1xuXHRcdHN0YXRlLnNzckNhbGxiYWNrcyA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBzc3JfY2FsbGJhY2tzICkgKTtcblx0XHRzdGF0ZS5mb3JtYXRzICAgICAgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggZm9ybWF0cyApICk7XG5cdFx0c3RhdGUucnVsZVR5cGVzICAgID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHJ1bGVfdHlwZXMgKSApO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5kaXNwYXRjaGVycyxcbn07IiwiaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcblxuY29uc3QgeyBjcmVhdGVSZWR1eFN0b3JlIH0gPSB3cC5kYXRhO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCAnamV0LWZvcm1zL3ZhbGlkYXRpb24nLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9ycyxcbn0gKTtcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcbmltcG9ydCBodW1hblJlYWRhYmxlUHJlc2V0IGZyb20gJy4uLy4uL3ByZXNldC9oZWxwZXJzL2h1bWFuUmVhZGFibGVQcmVzZXQnO1xuXG5jb25zdCB7XG5cdCAgICAgIHNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCBERUZBVUxUX1NUQVRFID0ge1xuXHRtZXNzYWdlczogW10sXG5cdHNzckNhbGxiYWNrczogW10sXG5cdGZvcm1hdHM6IFtdLFxuXHRydWxlVHlwZXM6IFtdLFxuXHRydWxlUmVhZGVyczoge1xuXHRcdGRlZmF1bHQgKCBydWxlICkge1xuXHRcdFx0Y29uc3QgcnVsZU9wdGlvbnMgPSBzZWxlY3QoICdqZXQtZm9ybXMvdmFsaWRhdGlvbicgKS5nZXRSdWxlKFxuXHRcdFx0XHRydWxlLnR5cGUsXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoICFydWxlT3B0aW9ucyApIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdmFsdWUgPSBydWxlPy5maWVsZCB8fCBydWxlPy52YWx1ZSB8fCAnJztcblxuXHRcdFx0dmFsdWUgPSAoXG5cdFx0XHRcdGh1bWFuUmVhZGFibGVQcmVzZXQoIHZhbHVlLCAnYicgKSB8fCAnKG5vIHZhbHVlKSdcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHJ1bGVPcHRpb25zLmxhYmVsLFxuXHRcdFx0XHRgPGNvZGU+JHsgdmFsdWUgfTwvY29kZT5gLFxuXHRcdFx0XS5qb2luKCAnICcgKTtcblx0XHR9LFxuXHRcdHNzciAoIHJ1bGUgKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRfXyggJ0Z1bmN0aW9uOicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRydWxlPy52YWx1ZSxcblx0XHRcdF0uam9pbiggJyAnICk7XG5cdFx0fSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XG5cdGNvbnN0IGNhbGxiYWNrID0gZGlzcGF0Y2hlcnNbIGFjdGlvbj8udHlwZSBdO1xuXG5cdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKCBzdGF0ZSwgYWN0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59IiwiY29uc3Qgc2VsZWN0b3JzID0ge1xuXHRnZXRSdWxlKCBzdGF0ZSwgdHlwZSApIHtcblx0XHRjb25zdCBpbmRleCA9IHN0YXRlLnJ1bGVUeXBlcy5maW5kSW5kZXgoXG5cdFx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSB0eXBlLFxuXHRcdCk7XG5cblx0XHRpZiAoIC0xID09PSBpbmRleCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGUucnVsZVR5cGVzWyBpbmRleCBdO1xuXHR9LFxuXHRyZWFkUnVsZSggc3RhdGUsIHJ1bGUgKSB7XG5cdFx0Y29uc3QgeyB0eXBlID0gJycgfSA9IHJ1bGU7XG5cblx0XHRpZiAoICF0eXBlICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtGdW5jdGlvbn1cblx0XHQgKi9cblx0XHRjb25zdCBjYWxsYmFjayA9IHN0YXRlLnJ1bGVSZWFkZXJzWyB0eXBlIF0gPz8gZmFsc2U7XG5cblx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjYWxsYmFjayApIHtcblx0XHRcdHJldHVybiBjYWxsYmFjayggcnVsZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZS5ydWxlUmVhZGVycy5kZWZhdWx0KCBydWxlICk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdC4uLnNlbGVjdG9ycyxcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zeW1hMnQ0e2hlaWdodDo0MHB4O21pbi1oZWlnaHQ6NDBweDtsaW5lLWhlaWdodDoxLjU7fVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9wYWNrYWdlL2NvbXBvbmVudHMvR3JvdXBlZFNlbGVjdENvbnRyb2wuanNcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUyxXQUFXLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3ltYTJ0NHtoZWlnaHQ6NDBweDttaW4taGVpZ2h0OjQwcHg7bGluZS1oZWlnaHQ6MS41O31cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZnFtazV5IHN2Z3toZWlnaHQ6MjRweDt3aWR0aDoyNHB4O31cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcGFja2FnZS92YWxpZGF0aW9uL2NvbXBvbmVudHMvVmFsaWRhdGlvbk1ldGFNZXNzYWdlLmpzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWEsV0FBVyxDQUFDLFVBQVUsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2ZxbWs1eSBzdmd7aGVpZ2h0OjI0cHg7d2lkdGg6MjRweDt9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0dyb3VwZWRTZWxlY3RDb250cm9sLmpzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU1NDMzZWEzXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vR3JvdXBlZFNlbGVjdENvbnRyb2wuanNcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0dyb3VwZWRTZWxlY3RDb250cm9sLmpzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vVmFsaWRhdGlvbk1ldGFNZXNzYWdlLmpzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjYyZWJjYzhhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vVmFsaWRhdGlvbk1ldGFNZXNzYWdlLmpzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9WYWxpZGF0aW9uTWV0YU1lc3NhZ2UuanNcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJhY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYmxvY2tzVG9BY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImFwaUZldGNoXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gc3JjL2Nzcy50c1xudmFyIGlkeCA9IDA7XG52YXIgY3NzID0gKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgcmV0dXJuIGBtb2NrZWQtY3NzLSR7aWR4Kyt9YDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1VzaW5nIHRoZSBcImNzc1wiIHRhZyBpbiBydW50aW1lIGlzIG5vdCBzdXBwb3J0ZWQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBzZXQgdXAgdGhlIEJhYmVsIHBsdWdpbiBjb3JyZWN0bHkuJ1xuICApO1xufTtcbnZhciBjc3NfZGVmYXVsdCA9IGNzcztcblxuLy8gc3JjL2N4LnRzXG52YXIgY3ggPSBmdW5jdGlvbiBjeDIoKSB7XG4gIGNvbnN0IHByZXNlbnRDbGFzc05hbWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IGF0b21pY0NsYXNzZXMgPSB7fTtcbiAgY29uc3Qgbm9uQXRvbWljQ2xhc3NlcyA9IFtdO1xuICBwcmVzZW50Q2xhc3NOYW1lcy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICBjb25zdCBpbmRpdmlkdWFsQ2xhc3NOYW1lcyA9IGFyZyA/IGFyZy5zcGxpdChcIiBcIikgOiBbXTtcbiAgICBpbmRpdmlkdWFsQ2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aChcImF0bV9cIikpIHtcbiAgICAgICAgY29uc3QgWywga2V5SGFzaF0gPSBjbGFzc05hbWUuc3BsaXQoXCJfXCIpO1xuICAgICAgICBhdG9taWNDbGFzc2VzW2tleUhhc2hdID0gY2xhc3NOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uQXRvbWljQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChjb25zdCBrZXlIYXNoIGluIGF0b21pY0NsYXNzZXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF0b21pY0NsYXNzZXMsIGtleUhhc2gpKSB7XG4gICAgICByZXN1bHQucHVzaChhdG9taWNDbGFzc2VzW2tleUhhc2hdKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goLi4ubm9uQXRvbWljQ2xhc3Nlcyk7XG4gIHJldHVybiByZXN1bHQuam9pbihcIiBcIik7XG59O1xudmFyIGN4X2RlZmF1bHQgPSBjeDtcbmV4cG9ydCB7XG4gIGNzc19kZWZhdWx0IGFzIGNzcyxcbiAgY3hfZGVmYXVsdCBhcyBjeFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBzcmMvc3R5bGVkLnRzXG5pbXBvcnQgdmFsaWRBdHRyIGZyb20gXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjeCB9IGZyb20gXCJAbGluYXJpYS9jb3JlXCI7XG52YXIgaXNDYXBpdGFsID0gKGNoKSA9PiBjaC50b1VwcGVyQ2FzZSgpID09PSBjaDtcbnZhciBmaWx0ZXJLZXkgPSAoa2V5cykgPT4gKGtleSkgPT4ga2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xudmFyIG9taXQgPSAob2JqLCBrZXlzKSA9PiB7XG4gIGNvbnN0IHJlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcihmaWx0ZXJLZXkoa2V5cykpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHJlc1trZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufTtcbmZ1bmN0aW9uIGZpbHRlclByb3BzKGFzSXMsIHByb3BzLCBvbWl0S2V5cykge1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gb21pdChwcm9wcywgb21pdEtleXMpO1xuICBpZiAoIWFzSXMpIHtcbiAgICBjb25zdCBpbnRlcm9wVmFsaWRBdHRyID0gdHlwZW9mIHZhbGlkQXR0ciA9PT0gXCJmdW5jdGlvblwiID8geyBkZWZhdWx0OiB2YWxpZEF0dHIgfSA6IHZhbGlkQXR0cjtcbiAgICBPYmplY3Qua2V5cyhmaWx0ZXJlZFByb3BzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICghaW50ZXJvcFZhbGlkQXR0ci5kZWZhdWx0KGtleSkpIHtcbiAgICAgICAgZGVsZXRlIGZpbHRlcmVkUHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZmlsdGVyZWRQcm9wcztcbn1cbnZhciB3YXJuSWZJbnZhbGlkID0gKHZhbHVlLCBjb21wb25lbnROYW1lKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUsbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJpbmdpZmllZCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYEFuIGludGVycG9sYXRpb24gZXZhbHVhdGVkIHRvICcke3N0cmluZ2lmaWVkfScgaW4gdGhlIGNvbXBvbmVudCAnJHtjb21wb25lbnROYW1lfScsIHdoaWNoIGlzIHByb2JhYmx5IGEgbWlzdGFrZS4gWW91IHNob3VsZCBleHBsaWNpdGx5IGNhc3Qgb3IgdHJhbnNmb3JtIHRoZSB2YWx1ZSB0byBhIHN0cmluZy5gXG4gICAgKTtcbiAgfVxufTtcbnZhciBpZHggPSAwO1xuZnVuY3Rpb24gc3R5bGVkKHRhZykge1xuICBsZXQgbW9ja2VkQ2xhc3MgPSBcIlwiO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgbW9ja2VkQ2xhc3MgKz0gYG1vY2tlZC1zdHlsZWQtJHtpZHgrK31gO1xuICAgIGlmICh0YWcgJiYgdGFnLl9fd3l3X21ldGEgJiYgdGFnLl9fd3l3X21ldGEuY2xhc3NOYW1lKSB7XG4gICAgICBtb2NrZWRDbGFzcyArPSBgICR7dGFnLl9fd3l3X21ldGEuY2xhc3NOYW1lfWA7XG4gICAgfVxuICB9XG4gIHJldHVybiAob3B0aW9ucykgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwidGVzdFwiKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1VzaW5nIHRoZSBcInN0eWxlZFwiIHRhZyBpbiBydW50aW1lIGlzIG5vdCBzdXBwb3J0ZWQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBzZXQgdXAgdGhlIEJhYmVsIHBsdWdpbiBjb3JyZWN0bHkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2FsbHN0YWNrL2xpbmFyaWEjc2V0dXAnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlciA9IChwcm9wcywgcmVmKSA9PiB7XG4gICAgICBjb25zdCB7IGFzOiBjb21wb25lbnQgPSB0YWcsIGNsYXNzOiBjbGFzc05hbWUgPSBtb2NrZWRDbGFzcyB9ID0gcHJvcHM7XG4gICAgICBjb25zdCBzaG91bGRLZWVwUHJvcHMgPSBvcHRpb25zLnByb3BzQXNJcyA9PT0gdm9pZCAwID8gISh0eXBlb2YgY29tcG9uZW50ID09PSBcInN0cmluZ1wiICYmIGNvbXBvbmVudC5pbmRleE9mKFwiLVwiKSA9PT0gLTEgJiYgIWlzQ2FwaXRhbChjb21wb25lbnRbMF0pKSA6IG9wdGlvbnMucHJvcHNBc0lzO1xuICAgICAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IGZpbHRlclByb3BzKHNob3VsZEtlZXBQcm9wcywgcHJvcHMsIFtcbiAgICAgICAgXCJhc1wiLFxuICAgICAgICBcImNsYXNzXCJcbiAgICAgIF0pO1xuICAgICAgZmlsdGVyZWRQcm9wcy5yZWYgPSByZWY7XG4gICAgICBmaWx0ZXJlZFByb3BzLmNsYXNzTmFtZSA9IG9wdGlvbnMuYXRvbWljID8gY3gob3B0aW9ucy5jbGFzcywgZmlsdGVyZWRQcm9wcy5jbGFzc05hbWUgfHwgY2xhc3NOYW1lKSA6IGN4KGZpbHRlcmVkUHJvcHMuY2xhc3NOYW1lIHx8IGNsYXNzTmFtZSwgb3B0aW9ucy5jbGFzcyk7XG4gICAgICBjb25zdCB7IHZhcnMgfSA9IG9wdGlvbnM7XG4gICAgICBpZiAodmFycykge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdmFycykge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdmFyc1tuYW1lXTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YXJpYWJsZVswXTtcbiAgICAgICAgICBjb25zdCB1bml0ID0gdmFyaWFibGVbMV0gfHwgXCJcIjtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiByZXN1bHQgPT09IFwiZnVuY3Rpb25cIiA/IHJlc3VsdChwcm9wcykgOiByZXN1bHQ7XG4gICAgICAgICAgd2FybklmSW52YWxpZCh2YWx1ZSwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgICBzdHlsZVtgLS0ke25hbWV9YF0gPSBgJHt2YWx1ZX0ke3VuaXR9YDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvd25TdHlsZSA9IGZpbHRlcmVkUHJvcHMuc3R5bGUgfHwge307XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvd25TdHlsZSk7XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc3R5bGVba2V5XSA9IG93blN0eWxlW2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlsdGVyZWRQcm9wcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgfVxuICAgICAgaWYgKHRhZy5fX3d5d19tZXRhICYmIHRhZyAhPT0gY29tcG9uZW50KSB7XG4gICAgICAgIGZpbHRlcmVkUHJvcHMuYXMgPSBjb21wb25lbnQ7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZywgZmlsdGVyZWRQcm9wcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIGZpbHRlcmVkUHJvcHMpO1xuICAgIH07XG4gICAgY29uc3QgUmVzdWx0ID0gUmVhY3QuZm9yd2FyZFJlZiA/IFJlYWN0LmZvcndhcmRSZWYocmVuZGVyKSA6IChcbiAgICAgIC8vIFJlYWN0LmZvcndhcmRSZWYgd29uJ3QgYXZhaWxhYmxlIG9uIG9sZGVyIFJlYWN0IHZlcnNpb25zIGFuZCBpbiBQcmVhY3RcbiAgICAgIC8vIEZhbGxiYWNrIHRvIGEgaW5uZXJSZWYgcHJvcCBpbiB0aGF0IGNhc2VcbiAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCByZXN0ID0gb21pdChwcm9wcywgW1wiaW5uZXJSZWZcIl0pO1xuICAgICAgICByZXR1cm4gcmVuZGVyKHJlc3QsIHByb3BzLmlubmVyUmVmKTtcbiAgICAgIH1cbiAgICApO1xuICAgIFJlc3VsdC5kaXNwbGF5TmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICBSZXN1bHQuX193eXdfbWV0YSA9IHtcbiAgICAgIGNsYXNzTmFtZTogb3B0aW9ucy5jbGFzcyB8fCBtb2NrZWRDbGFzcyxcbiAgICAgIGV4dGVuZHM6IHRhZ1xuICAgIH07XG4gICAgcmV0dXJuIFJlc3VsdDtcbiAgfTtcbn1cbnZhciBzdHlsZWRfZGVmYXVsdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBQcm94eShzdHlsZWQsIHtcbiAgZ2V0KG8sIHByb3ApIHtcbiAgICByZXR1cm4gbyhwcm9wKTtcbiAgfVxufSkgOiBzdHlsZWQ7XG5leHBvcnQge1xuICBzdHlsZWRfZGVmYXVsdCBhcyBzdHlsZWRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBY3Rpb25GaWVsZHNNYXAgZnJvbSAnLi9hY3Rpb24tZmllbGRzLW1hcC9jb21wb25lbnRzL0FjdGlvbkZpZWxkc01hcCc7XG5pbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSAnLi9hY3Rpb24tbW9kYWwvY29tcG9uZW50cy9BY3Rpb25Nb2RhbCc7XG5pbXBvcnQgV3JhcHBlclJlcXVpcmVkQ29udHJvbFxuXHRmcm9tICcuL2FjdGlvbi1maWVsZHMtbWFwL2NvbXBvbmVudHMvV3JhcHBlclJlcXVpcmVkQ29udHJvbCc7XG5pbXBvcnQgVG9vbHMsIHtcblx0Y2xhc3NuYW1lcyxcblx0ZXZlbnQsXG5cdGdldENvbnZlcnRlZE5hbWUsXG5cdGxpc3Rlbixcblx0bWF5YmVDeXJUb0xhdGluLFxuXHRjb252ZXJ0T2JqZWN0VG9PcHRpb25zTGlzdCxcblx0Y29sdW1uLFxuXHRhc3NldFVybCxcblx0c2V0LFxuXHRpc0VtcHR5LFxuXHRleHRlbmRQcm90b3R5cGUsXG59IGZyb20gJy4vdG9vbHMnO1xuXG5pbXBvcnQgZ2V0QXZhaWxhYmxlRmllbGRzIGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0QXZhaWxhYmxlRmllbGRzJztcbmltcG9ydCBnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmdcblx0ZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcnO1xuaW1wb3J0IGdldEJsb2Nrc0J5TmFtZSBmcm9tICcuL2Jsb2Nrcy9oZWxwZXJzL2dldEJsb2Nrc0J5TmFtZSc7XG5pbXBvcnQgZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQgZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRGaWVsZHNXaXRob3V0Q3VycmVudCc7XG5pbXBvcnQgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyBmcm9tICcuL2Jsb2Nrcy9oZWxwZXJzL2dldEZvcm1GaWVsZHNCbG9ja3MnO1xuaW1wb3J0IGdldElubmVyQmxvY2tzIGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvZ2V0SW5uZXJCbG9ja3MnO1xuaW1wb3J0IGFwcGVuZEZpZWxkIGZyb20gJy4vYmxvY2tzL2hlbHBlcnMvYXBwZW5kRmllbGQnO1xuXG5pbXBvcnQgZ2F0ZXdheUF0dHIgZnJvbSAnLi9nYXRld2F5cy9oZWxwZXJzL2dhdGV3YXlBdHRyJztcbmltcG9ydCBnYXRld2F5TGFiZWwgZnJvbSAnLi9nYXRld2F5cy9oZWxwZXJzL2dhdGV3YXlMYWJlbCc7XG5pbXBvcnQgcmVnaXN0ZXJHYXRld2F5IGZyb20gJy4vZ2F0ZXdheXMvaGVscGVycy9yZWdpc3RlckdhdGV3YXknO1xuaW1wb3J0IHJlbmRlckdhdGV3YXkgZnJvbSAnLi9nYXRld2F5cy9oZWxwZXJzL3JlbmRlckdhdGV3YXknO1xuaW1wb3J0IHJlbmRlckdhdGV3YXlXaXRoUGxhY2Vob2xkZXJcblx0ZnJvbSAnLi9nYXRld2F5cy9oZWxwZXJzL3JlbmRlckdhdGV3YXlXaXRoUGxhY2Vob2xkZXInO1xuaW1wb3J0IHVzZVN1Y2Nlc3NOb3RpY2UgZnJvbSAnLi9ob29rcy91c2VTdWNjZXNzTm90aWNlJztcbmltcG9ydCB1c2VTZWxlY3RQb3N0TWV0YSBmcm9tICcuL2hvb2tzL3VzZVNlbGVjdFBvc3RNZXRhJztcbmltcG9ydCB1c2VPblVwZGF0ZU1vZGFsIGZyb20gJy4vYWN0aW9uLW1vZGFsL2hvb2tzL3VzZU9uVXBkYXRlTW9kYWwnO1xuaW1wb3J0IHdpdGhTZWxlY3RGb3JtRmllbGRzIGZyb20gJy4vaG9va3Mvd2l0aFNlbGVjdEZvcm1GaWVsZHMnO1xuaW1wb3J0IHdpdGhTZWxlY3RHYXRld2F5cyBmcm9tICcuL2dhdGV3YXlzL2hvb2tzL3dpdGhTZWxlY3RHYXRld2F5cyc7XG5pbXBvcnQgd2l0aERpc3BhdGNoR2F0ZXdheXMgZnJvbSAnLi9nYXRld2F5cy9ob29rcy93aXRoRGlzcGF0Y2hHYXRld2F5cyc7XG5pbXBvcnQgdXNlUmVxdWVzdEV2ZW50cyBmcm9tICcuL2V2ZW50cy9ob29rcy91c2VSZXF1ZXN0RXZlbnRzJztcbmltcG9ydCB1c2VCbG9ja0NvbmRpdGlvbnMgZnJvbSAnLi9ibG9jay1jb25kaXRpb25zL2hvb2tzL3VzZUJsb2NrQ29uZGl0aW9ucyc7XG5pbXBvcnQgdXNlVW5pcUtleSBmcm9tICcuL2Jsb2Nrcy9ob29rcy91c2VVbmlxS2V5JztcbmltcG9ydCB1c2VJc0FkdmFuY2VkVmFsaWRhdGlvbiBmcm9tICcuL2Jsb2Nrcy9ob29rcy91c2VJc0FkdmFuY2VkVmFsaWRhdGlvbic7XG5pbXBvcnQgdXNlQmxvY2tBdHRyaWJ1dGVzIGZyb20gJy4vYmxvY2tzL2hvb2tzL3VzZUJsb2NrQXR0cmlidXRlcyc7XG5pbXBvcnQgdXNlSXNIYXNBdHRyaWJ1dGUgZnJvbSAnLi9ob29rcy91c2VJc0hhc0F0dHJpYnV0ZSc7XG5cbmltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gJy4vcHJlc2V0L2NvbXBvbmVudHMvRHluYW1pY1ByZXNldCc7XG5pbXBvcnQgSmV0RmllbGRzTWFwQ29udHJvbCBmcm9tICcuLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXAnO1xuaW1wb3J0IEZpZWxkV2l0aFByZXNldCBmcm9tICcuL3ByZXNldC9jb21wb25lbnRzL0ZpZWxkV2l0aFByZXNldCc7XG5pbXBvcnQgR2xvYmFsRmllbGRQcmVzZXQgZnJvbSAnLi9wcmVzZXQvY29tcG9uZW50cy9HbG9iYWxGaWVsZFByZXNldCc7XG5pbXBvcnQgQXZhaWxhYmxlTWFwRmllbGRQcmVzZXRcblx0ZnJvbSAnLi9wcmVzZXQvY29tcG9uZW50cy9BdmFpbGFibGVNYXBGaWVsZFByZXNldCc7XG5pbXBvcnQgTWFwRmllbGRQcmVzZXQgZnJvbSAnLi9wcmVzZXQvY29tcG9uZW50cy9NYXBGaWVsZFByZXNldCc7XG5pbXBvcnQgdXNlR3JvdXBlZFZhbGlkYXRpb25NZXNzYWdlc1xuXHRmcm9tICcuL3ZhbGlkYXRpb24vaG9va3MvdXNlR3JvdXBlZFZhbGlkYXRpb25NZXNzYWdlcyc7XG5pbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvRmllbGRXcmFwcGVyJztcbmltcG9ydCBNYWNyb3NJbnNlcnRlciBmcm9tICcuL2NvbXBvbmVudHMvTWFjcm9zSW5zZXJ0ZXInO1xuaW1wb3J0IFJlcGVhdGVyV2l0aFN0YXRlIGZyb20gJy4vcmVwZWF0ZXIvY29tcG9uZW50cy9SZXBlYXRlcldpdGhTdGF0ZSc7XG5pbXBvcnQgd2l0aFByZXNldCBmcm9tICcuL3ByZXNldC9jb21wb25lbnRzL3dpdGhQcmVzZXQnO1xuaW1wb3J0IEFkdmFuY2VkRmllbGRzIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQWR2YW5jZWRGaWVsZHMnO1xuaW1wb3J0IEdlbmVyYWxGaWVsZHMgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9HZW5lcmFsRmllbGRzJztcbmltcG9ydCBUb29sQmFyRmllbGRzIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvVG9vbEJhckZpZWxkcyc7XG5pbXBvcnQgSG9yaXpvbnRhbExpbmUgZnJvbSAnLi9jb21wb25lbnRzL0hvcml6b250YWxMaW5lJztcbmltcG9ydCBGaWVsZFNldHRpbmdzV3JhcHBlciBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0ZpZWxkU2V0dGluZ3NXcmFwcGVyJztcbmltcG9ydCBHcm91cGVkU2VsZWN0Q29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvR3JvdXBlZFNlbGVjdENvbnRyb2wnO1xuaW1wb3J0IGdldEJsb2NrQ29udHJvbHMgZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRCbG9ja0NvbnRyb2xzJztcbmltcG9ydCBCYXNlSGVscCBmcm9tICcuL2NvbXBvbmVudHMvQmFzZUhlbHAnO1xuaW1wb3J0IEdhdGV3YXlGZXRjaEJ1dHRvbiBmcm9tICcuL2dhdGV3YXlzL2NvbXBvbmVudHMvR2F0ZXdheUZldGNoQnV0dG9uJztcbmltcG9ydCAnLi9zdG9yZS5tYW5hZ2VyJztcbmltcG9ydCBBY3Rpb25Nb2RhbENvbnRleHQgZnJvbSAnLi9hY3Rpb24tbW9kYWwvY29udGV4dC9BY3Rpb25Nb2RhbENvbnRleHQnO1xuaW1wb3J0IFNhZmVEZWxldGVDb250ZXh0IGZyb20gJy4vcmVwZWF0ZXIvY29udGV4dC9zYWZlLmRlbGV0ZSc7XG5pbXBvcnQgUmVwZWF0ZXJJdGVtQ29udGV4dCBmcm9tICcuL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuaXRlbSc7XG5pbXBvcnQgUmVwZWF0ZXJCb2R5Q29udGV4dCBmcm9tICcuL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uYm9keSc7XG5pbXBvcnQgUmVwZWF0ZXJIZWFkQ29udGV4dCBmcm9tICcuL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uaGVhZCc7XG5pbXBvcnQgUmVwZWF0ZXJCdXR0b25zQ29udGV4dFxuXHRmcm9tICcuL3JlcGVhdGVyL2NvbnRleHQvcmVwZWF0ZXIuY3VzdG9tLml0ZW0uYnV0dG9ucyc7XG5pbXBvcnQgQmxvY2tWYWx1ZUl0ZW1Db250ZXh0IGZyb20gJy4vY29udGV4dC9ibG9jay52YWx1ZS5pdGVtLmNvbnRleHQnO1xuaW1wb3J0IFNhZmVEZWxldGVUb2dnbGUgZnJvbSAnLi9yZXBlYXRlci9jb21wb25lbnRzL3NhZmUuZGVsZXRlLnRvZ2dsZSc7XG5pbXBvcnQgUmVwZWF0ZXJBZGROZXcgZnJvbSAnLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLmFkZC5uZXcnO1xuaW1wb3J0IFJlcGVhdGVyIGZyb20gJy4vcmVwZWF0ZXIvY29tcG9uZW50cy9yZXBlYXRlcic7XG5pbXBvcnQgVmFsaWRhdGlvblRvZ2dsZUdyb3VwXG5cdGZyb20gJy4vdmFsaWRhdGlvbi9jb21wb25lbnRzL1ZhbGlkYXRpb25Ub2dnbGVHcm91cCc7XG5pbXBvcnQgVmFsaWRhdGlvbkJsb2NrTWVzc2FnZVxuXHRmcm9tICcuL3ZhbGlkYXRpb24vY29tcG9uZW50cy9WYWxpZGF0aW9uQmxvY2tNZXNzYWdlJztcbmltcG9ydCBWYWxpZGF0aW9uTWV0YU1lc3NhZ2Vcblx0ZnJvbSAnLi92YWxpZGF0aW9uL2NvbXBvbmVudHMvVmFsaWRhdGlvbk1ldGFNZXNzYWdlJztcbmltcG9ydCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0XG5cdGZyb20gJy4vYWN0aW9uLWZpZWxkcy1tYXAvY29udGV4dC9BY3Rpb25GaWVsZHNNYXBDb250ZXh0JztcbmltcG9ydCBDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0XG5cdGZyb20gJy4vYWN0aW9uLWZpZWxkcy1tYXAvY29udGV4dC9DdXJyZW50UHJvcGVydHlNYXBDb250ZXh0JztcbmltcG9ydCBEeW5hbWljUHJvcGVydHlTZWxlY3Rcblx0ZnJvbSAnLi9hY3Rpb24tZmllbGRzLW1hcC9jb21wb25lbnRzL0R5bmFtaWNQcm9wZXJ0eVNlbGVjdCc7XG5pbXBvcnQgRHluYW1pY1ZhbHVlcyBmcm9tICcuL2R5bmFtaWMudmFsdWUvY29tcG9uZW50cy9EeW5hbWljVmFsdWVzJztcbmltcG9ydCBSZXBlYXRlckFkZE9yT3BlcmF0b3IgZnJvbSAnLi9yZXBlYXRlci9jb21wb25lbnRzL3JlcGVhdGVyLmFkZC5vcic7XG5pbXBvcnQgRWRpdEFkdmFuY2VkUnVsZXNCdXR0b25cblx0ZnJvbSAnLi92YWxpZGF0aW9uL2NvbXBvbmVudHMvRWRpdEFkdmFuY2VkUnVsZXNCdXR0b24nO1xuaW1wb3J0IFJlcGVhdGVyU3RhdGVDb250ZXh0IGZyb20gJy4vcmVwZWF0ZXIvY29udGV4dC9yZXBlYXRlci5zdGF0ZSc7XG5pbXBvcnQgUmVwZWF0ZXJTdGF0ZSBmcm9tICcuL3JlcGVhdGVyL2NvbXBvbmVudHMvcmVwZWF0ZXIuc3RhdGUnO1xuaW1wb3J0IEZpZWxkQ29udHJvbCBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0ZpZWxkQ29udHJvbCc7XG5pbXBvcnQgQmxvY2tMYWJlbCBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrTGFiZWwnO1xuaW1wb3J0IEJsb2NrTmFtZSBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrTmFtZSc7XG5pbXBvcnQgQmxvY2tEZXNjcmlwdGlvbiBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrRGVzY3JpcHRpb24nO1xuaW1wb3J0IEJsb2NrRGVmYXVsdFZhbHVlIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tEZWZhdWx0VmFsdWUnO1xuaW1wb3J0IEJsb2NrUGxhY2Vob2xkZXIgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja1BsYWNlaG9sZGVyJztcbmltcG9ydCBCbG9ja0FkZFByZXZCdXR0b24gZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0FkZFByZXZCdXR0b24nO1xuaW1wb3J0IEJsb2NrUHJldkJ1dHRvbkxhYmVsIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tQcmV2QnV0dG9uTGFiZWwnO1xuaW1wb3J0IEJsb2NrVmlzaWJpbGl0eSBmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL0Jsb2NrVmlzaWJpbGl0eSc7XG5pbXBvcnQgQmxvY2tDbGFzc05hbWUgZnJvbSAnLi9ibG9ja3MvY29tcG9uZW50cy9CbG9ja0NsYXNzTmFtZSc7XG5pbXBvcnQgQmxvY2tBZHZhbmNlZFZhbHVlIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQmxvY2tBZHZhbmNlZFZhbHVlJztcbmltcG9ydCBNYWNyb3NGaWVsZHNUZW1wbGF0ZVxuXHRmcm9tICcuL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb3NGaWVsZHNUZW1wbGF0ZSc7XG5pbXBvcnQgTWFjcm9zQnV0dG9uVGVtcGxhdGVcblx0ZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvTWFjcm9zQnV0dG9uVGVtcGxhdGUnO1xuaW1wb3J0IE1hY3Jvc0ZpZWxkcyBmcm9tICcuL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9NYWNyb3NGaWVsZHMnO1xuaW1wb3J0IFBvcG92ZXJDb250ZXh0IGZyb20gJy4vbWFjcm9zLmJ1dHRvbi9jb250ZXh0L1BvcG92ZXJDb250ZXh0JztcbmltcG9ydCBQb3BvdmVySXRlbSBmcm9tICcuL21hY3Jvcy5idXR0b24vY29udGV4dC9Qb3BvdmVySXRlbSc7XG5pbXBvcnQgUHJlc2V0QnV0dG9uIGZyb20gJy4vcHJlc2V0L2NvbXBvbmVudHMvUHJlc2V0QnV0dG9uJztcbmltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0NvbmRpdGlvbkl0ZW0nO1xuaW1wb3J0IEFkdmFuY2VkSW5zcGVjdG9yQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvQWR2YW5jZWRJbnNwZWN0b3JDb250cm9sJztcbmltcG9ydCBBZHZhbmNlZE1vZGFsQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvQWR2YW5jZWRNb2RhbENvbnRyb2wnO1xuaW1wb3J0IENsaWVudFNpZGVNYWNyb3Ncblx0ZnJvbSAnLi9tYWNyb3MuYnV0dG9uL2NvbXBvbmVudHMvQ2xpZW50U2lkZU1hY3Jvcyc7XG5pbXBvcnQgeyBpbnNlcnRNYWNybyB9IGZyb20gJy4vbWFjcm9zLmJ1dHRvbi9mdW5jdGlvbnMnO1xuaW1wb3J0IHVzZUluc2VydE1hY3JvIGZyb20gJy4vbWFjcm9zLmJ1dHRvbi9ob29rcy91c2VJbnNlcnRNYWNybyc7XG5pbXBvcnQgVG9nZ2xlQ29udHJvbCBmcm9tICcuL2NvbXBvbmVudHMvVG9nZ2xlQ29udHJvbCc7XG5pbXBvcnQgRGV0YWlsc0NvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvRGV0YWlsc0NvbnRhaW5lcic7XG5pbXBvcnQgSG92ZXJDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL0hvdmVyQ29udGFpbmVyJztcbmltcG9ydCBnZXRDdXJyZW50SW5uZXJCbG9ja3MgZnJvbSAnLi9ibG9ja3MvaGVscGVycy9nZXRDdXJyZW50SW5uZXJCbG9ja3MnO1xuaW1wb3J0IENvbnRhaW5lcnNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWluZXJzTGlzdCc7XG5pbXBvcnQgSHVtYW5SZWFkYWJsZUNvbmRpdGlvbnNcblx0ZnJvbSAnLi9ibG9jay1jb25kaXRpb25zL2NvbXBvbmVudHMvSHVtYW5SZWFkYWJsZUNvbmRpdGlvbnMnO1xuaW1wb3J0IGh1bWFuUmVhZGFibGVDb25kaXRpb25cblx0ZnJvbSAnLi9ibG9jay1jb25kaXRpb25zL2hlbHBlcnMvaHVtYW5SZWFkYWJsZUNvbmRpdGlvbic7XG5pbXBvcnQgQ29uZGl0aW9uc1JlcGVhdGVyQ29udGV4dFByb3ZpZGVyXG5cdGZyb20gJy4vYmxvY2stY29uZGl0aW9ucy9jb21wb25lbnRzL0NvbmRpdGlvbnNSZXBlYXRlckNvbnRleHRQcm92aWRlcic7XG5pbXBvcnQgU2VydmVyU2lkZU1hY3JvcyBmcm9tICcuL21hY3Jvcy5idXR0b24vY29tcG9uZW50cy9TZXJ2ZXJTaWRlTWFjcm9zJztcbmltcG9ydCB1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUgZnJvbSAnLi9ibG9ja3MvaG9va3MvdXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlJztcbmltcG9ydCBTZWxlY3RWYXJpYXRpb25zIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvU2VsZWN0VmFyaWF0aW9ucyc7XG5pbXBvcnQgVG9nZ2xlR3JvdXBWYXJpYXRpb25zIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvVG9nZ2xlR3JvdXBWYXJpYXRpb25zJztcbmltcG9ydCBCYXNlTGFiZWwgZnJvbSAnLi9jb21wb25lbnRzL0Jhc2VMYWJlbCc7XG5pbXBvcnQgdXNlU3VwcG9ydCBmcm9tICcuL2Jsb2Nrcy9ob29rcy91c2VTdXBwb3J0JztcbmltcG9ydCBBdHRyaWJ1dGVIZWxwIGZyb20gJy4vYmxvY2tzL2NvbXBvbmVudHMvQXR0cmlidXRlSGVscCc7XG5pbXBvcnQgQWN0aW9uQnV0dG9uUGxhY2Vob2xkZXJcblx0ZnJvbSAnLi9hY3Rpb24tYnV0dG9ucy9jb21wb25lbnRzL0FjdGlvbkJ1dHRvblBsYWNlaG9sZGVyJztcbmltcG9ydCBBY3Rpb25Nb2RhbEZvb3RlclNsb3RGaWxsXG5cdGZyb20gJy4vYWN0aW9uLW1vZGFsL2NvbXBvbmVudHMvQWN0aW9uTW9kYWxGb290ZXJTbG90RmlsbCc7XG5pbXBvcnQgdXNlU2NvcGVkQXR0cmlidXRlc0NvbnRleHRcblx0ZnJvbSAnLi9ibG9ja3MvaG9va3MvdXNlU2NvcGVkQXR0cmlidXRlc0NvbnRleHQnO1xuaW1wb3J0IFNjb3BlZEF0dHJpYnV0ZXNQcm92aWRlclxuXHRmcm9tICcuL2Jsb2Nrcy9jb21wb25lbnRzL1Njb3BlZEF0dHJpYnV0ZXNQcm92aWRlcic7XG5pbXBvcnQgZ2V0U3VwcG9ydCBmcm9tICcuL2Jsb2Nrcy9oZWxwZXJzL2dldFN1cHBvcnQnO1xuaW1wb3J0IHVzZUV2ZW50cyBmcm9tICcuL2V2ZW50cy9ob29rcy91c2VFdmVudHMnO1xuaW1wb3J0IHVzZU9wZW5FZGl0b3JQYW5lbCBmcm9tICcuL2hvb2tzL3VzZU9wZW5FZGl0b3JQYW5lbCc7XG5cbi8vIEpGQkNvbXBvbmVudHNcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgPSB7XG5cdC4uLihcblx0XHR3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fVxuXHQpLFxuXHRCYXNlTGFiZWwsXG5cdEFjdGlvbkZpZWxkc01hcCxcblx0QWN0aW9uTW9kYWwsXG5cdEFjdGlvbk1vZGFsQ29udGV4dCxcblx0U2FmZURlbGV0ZUNvbnRleHQsXG5cdFJlcGVhdGVySXRlbUNvbnRleHQsXG5cdFJlcGVhdGVyQm9keUNvbnRleHQsXG5cdFJlcGVhdGVySGVhZENvbnRleHQsXG5cdFJlcGVhdGVyQnV0dG9uc0NvbnRleHQsXG5cdEFjdGlvbkZpZWxkc01hcENvbnRleHQsXG5cdEN1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQsXG5cdEJsb2NrVmFsdWVJdGVtQ29udGV4dCxcblx0RHluYW1pY1Byb3BlcnR5U2VsZWN0LFxuXHRTYWZlRGVsZXRlVG9nZ2xlLFxuXHRSZXBlYXRlckFkZE5ldyxcblx0UmVwZWF0ZXJBZGRPck9wZXJhdG9yLFxuXHRSZXBlYXRlcixcblx0V3JhcHBlclJlcXVpcmVkQ29udHJvbCxcblx0RHluYW1pY1ByZXNldCxcblx0SmV0RmllbGRzTWFwQ29udHJvbCxcblx0RmllbGRXaXRoUHJlc2V0LFxuXHRHbG9iYWxGaWVsZDogR2xvYmFsRmllbGRQcmVzZXQsXG5cdEF2YWlsYWJsZU1hcEZpZWxkOiBBdmFpbGFibGVNYXBGaWVsZFByZXNldCxcblx0TWFwRmllbGQ6IE1hcEZpZWxkUHJlc2V0LFxuXHRGaWVsZFdyYXBwZXIsXG5cdE1hY3Jvc0luc2VydGVyLFxuXHRSZXBlYXRlcldpdGhTdGF0ZSxcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEdlbmVyYWxGaWVsZHMsXG5cdFRvb2xCYXJGaWVsZHMsXG5cdEZpZWxkQ29udHJvbCxcblx0SG9yaXpvbnRhbExpbmUsXG5cdEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxuXHRHcm91cGVkU2VsZWN0Q29udHJvbCxcblx0QmFzZUhlbHAsXG5cdEdhdGV3YXlGZXRjaEJ1dHRvbixcblx0VmFsaWRhdGlvblRvZ2dsZUdyb3VwLFxuXHRWYWxpZGF0aW9uQmxvY2tNZXNzYWdlLFxuXHRWYWxpZGF0aW9uTWV0YU1lc3NhZ2UsXG5cdER5bmFtaWNWYWx1ZXMsXG5cdEVkaXRBZHZhbmNlZFJ1bGVzQnV0dG9uLFxuXHRSZXBlYXRlclN0YXRlQ29udGV4dCxcblx0UmVwZWF0ZXJTdGF0ZSxcblx0QmxvY2tMYWJlbCxcblx0QmxvY2tOYW1lLFxuXHRCbG9ja0Rlc2NyaXB0aW9uLFxuXHRCbG9ja0RlZmF1bHRWYWx1ZSxcblx0QmxvY2tQbGFjZWhvbGRlcixcblx0QmxvY2tBZGRQcmV2QnV0dG9uLFxuXHRCbG9ja1ByZXZCdXR0b25MYWJlbCxcblx0QmxvY2tWaXNpYmlsaXR5LFxuXHRCbG9ja0NsYXNzTmFtZSxcblx0QmxvY2tBZHZhbmNlZFZhbHVlLFxuXHRNYWNyb3NGaWVsZHMsXG5cdE1hY3Jvc0J1dHRvblRlbXBsYXRlLFxuXHRNYWNyb3NGaWVsZHNUZW1wbGF0ZSxcblx0U2hvd1BvcG92ZXJDb250ZXh0OiBQb3BvdmVyQ29udGV4dCxcblx0UG9wb3Zlckl0ZW0sXG5cdFByZXNldEJ1dHRvbixcblx0Q29uZGl0aW9uSXRlbSxcblx0QWR2YW5jZWRJbnNwZWN0b3JDb250cm9sLFxuXHRBZHZhbmNlZE1vZGFsQ29udHJvbCxcblx0Q2xpZW50U2lkZU1hY3Jvcyxcblx0VG9nZ2xlQ29udHJvbCxcblx0RGV0YWlsc0NvbnRhaW5lcixcblx0SG92ZXJDb250YWluZXIsXG5cdENvbnRhaW5lcnNMaXN0LFxuXHRIdW1hblJlYWRhYmxlQ29uZGl0aW9ucyxcblx0Q29uZGl0aW9uc1JlcGVhdGVyQ29udGV4dFByb3ZpZGVyLFxuXHRTZXJ2ZXJTaWRlTWFjcm9zLFxuXHRTZWxlY3RWYXJpYXRpb25zLFxuXHRUb2dnbGVHcm91cFZhcmlhdGlvbnMsXG5cdEF0dHJpYnV0ZUhlbHAsXG5cdEFjdGlvbkJ1dHRvblBsYWNlaG9sZGVyLFxuXHRBY3Rpb25Nb2RhbEZvb3RlclNsb3RGaWxsLFxuXHRTY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXIsXG59O1xuXG4vLyBKRkJGdW5jdGlvbnNcbndpbmRvdy5KZXRGQkFjdGlvbnMgPSB7XG5cdC4uLihcblx0XHR3aW5kb3c/LkpldEZCQWN0aW9ucyA/PyB7fVxuXHQpLFxuXHR3aXRoUHJlc2V0LFxuXHRnZXRJbm5lckJsb2Nrcyxcblx0Z2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nLFxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxuXHRnYXRld2F5QXR0cixcblx0Z2F0ZXdheUxhYmVsLFxuXHRyZWdpc3RlckdhdGV3YXksXG5cdFRvb2xzLFxuXHRldmVudCxcblx0bGlzdGVuLFxuXHRyZW5kZXJHYXRld2F5LFxuXHRyZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyLFxuXHRtYXliZUN5clRvTGF0aW4sXG5cdGdldENvbnZlcnRlZE5hbWUsXG5cdGdldEJsb2NrQ29udHJvbHMsXG5cdGNsYXNzbmFtZXMsXG5cdGdldEJsb2Nrc0J5TmFtZSxcblx0Y29udmVydE9iamVjdFRvT3B0aW9uc0xpc3QsXG5cdGFwcGVuZEZpZWxkLFxuXHRpbnNlcnRNYWNybyxcblx0Y29sdW1uLFxuXHRnZXRDdXJyZW50SW5uZXJCbG9ja3MsXG5cdGh1bWFuUmVhZGFibGVDb25kaXRpb24sXG5cdGFzc2V0VXJsLFxuXHRzZXQsXG5cdGlzRW1wdHksXG5cdGdldFN1cHBvcnQsXG5cdGV4dGVuZFByb3RvdHlwZSxcbn07XG5cbi8vIEpGQkhvb2tzXG53aW5kb3cuSmV0RkJIb29rcyA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdz8uSmV0RkJIb29rcyA/PyB7fVxuXHQpLFxuXHR1c2VTZWxlY3RQb3N0TWV0YSxcblx0dXNlU3VjY2Vzc05vdGljZSxcblx0dXNlRXZlbnRzLFxuXHR1c2VSZXF1ZXN0RXZlbnRzLFxuXHR1c2VCbG9ja0NvbmRpdGlvbnMsXG5cdHVzZVVuaXFLZXksXG5cdHVzZUJsb2NrQXR0cmlidXRlcyxcblx0dXNlSXNBZHZhbmNlZFZhbGlkYXRpb24sXG5cdHVzZUdyb3VwZWRWYWxpZGF0aW9uTWVzc2FnZXMsXG5cdHdpdGhTZWxlY3RGb3JtRmllbGRzLFxuXHR3aXRoU2VsZWN0R2F0ZXdheXMsXG5cdHdpdGhEaXNwYXRjaEdhdGV3YXlzLFxuXHR1c2VPblVwZGF0ZU1vZGFsLFxuXHR1c2VJbnNlcnRNYWNybyxcblx0dXNlSXNIYXNBdHRyaWJ1dGUsXG5cdHVzZVVuaXF1ZU5hbWVPbkR1cGxpY2F0ZSxcblx0dXNlU3VwcG9ydCxcblx0dXNlU2NvcGVkQXR0cmlidXRlc0NvbnRleHQsXG5cdHVzZU9wZW5FZGl0b3JQYW5lbCxcbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==