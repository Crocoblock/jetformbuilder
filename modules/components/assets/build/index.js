/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!*****************************************************************************************!*\
  !*** ../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


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

/***/ "../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*****************************************************************************!*\
  !*** ../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*****************************************************************************/
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

/***/ "../../../../node_modules/@wordpress/icons/build-module/icon/index.js":
/*!****************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \****************************************************************************/
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

/***/ "./ClearBaseControlStyle.js":
/*!**********************************!*\
  !*** ./ClearBaseControlStyle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ClearBaseControlStyle = "cswoqso";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClearBaseControlStyle);
__webpack_require__(/*! ./ClearBaseControlStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ClearBaseControlStyle.js */ "./ClearBaseControlStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ClearBaseControlStyle.js");

/***/ }),

/***/ "./ControlWithErrorStyle.js":
/*!**********************************!*\
  !*** ./ControlWithErrorStyle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable import/no-extraneous-dependencies */

const ClearBaseControlStyle = "cuape64";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClearBaseControlStyle);
__webpack_require__(/*! ./ControlWithErrorStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ControlWithErrorStyle.js */ "./ControlWithErrorStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ControlWithErrorStyle.js");

/***/ }),

/***/ "./FormLabeledTokenField.jsx":
/*!***********************************!*\
  !*** ./FormLabeledTokenField.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function FormLabeledTokenField({
  suggestions = [],
  value = [],
  valueProp = 'value',
  labelProp = 'label',
  __experimentalValidateInput = token => true,
  ...props
}) {
  const [valueToLabel, labelToValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const valToLabel = {};
    const labelToVal = {};
    for (const suggestion of suggestions) {
      var _suggestion$valueProp, _suggestion$labelProp;
      const val = (_suggestion$valueProp = suggestion[valueProp]) !== null && _suggestion$valueProp !== void 0 ? _suggestion$valueProp : '';
      const label = (_suggestion$labelProp = suggestion[labelProp]) !== null && _suggestion$labelProp !== void 0 ? _suggestion$labelProp : '';
      valToLabel[val] = label;
      labelToVal[label] = val;
    }
    return [valToLabel, labelToVal];
  }, []);
  const labelSuggestions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => suggestions.map(current => current[labelProp] || '').filter(current => current && !value.includes(labelToValue[current])), [value]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormTokenField, {
    displayTransform: countrySlug => {
      var _valueToLabel$country;
      return (_valueToLabel$country = valueToLabel[countrySlug]) !== null && _valueToLabel$country !== void 0 ? _valueToLabel$country : countrySlug;
    },
    saveTransform: countryLabel => {
      var _labelToValue$country;
      return (_labelToValue$country = labelToValue[countryLabel]) !== null && _labelToValue$country !== void 0 ? _labelToValue$country : countryLabel;
    },
    suggestions: labelSuggestions,
    value: value,
    __experimentalValidateInput: token => {
      var _labelToValue$token;
      return __experimentalValidateInput((_labelToValue$token = labelToValue[token]) !== null && _labelToValue$token !== void 0 ? _labelToValue$token : token);
    },
    ...props
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLabeledTokenField);

/***/ }),

/***/ "./Help.jsx":
/*!******************!*\
  !*** ./Help.jsx ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");

const Help = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('p')({
  name: "Help",
  class: "h1u00eq1",
  propsAsIs: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);
__webpack_require__(/*! ./Help.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Help.jsx */ "./Help.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Help.jsx");

/***/ }),

/***/ "./IconText.jsx":
/*!**********************!*\
  !*** ./IconText.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/icon/index.js");




const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex;
const StyledFlex = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_2__.styled)(_exp())({
  name: "StyledFlex",
  class: "s82flgq",
  propsAsIs: true
});
const errorIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
function IconText({
  children,
  icon,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledFlex, {
    justify: "flex-start",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 24,
    icon: icon !== null && icon !== void 0 ? icon : errorIcon
  }), children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconText);
__webpack_require__(/*! ./IconText.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./IconText.jsx */ "./IconText.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./IconText.jsx");

/***/ }),

/***/ "./Label/Label.jsx":
/*!*************************!*\
  !*** ./Label/Label.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");

const Label = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('label')({
  name: "Label",
  class: "lnj4cxf",
  propsAsIs: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);
__webpack_require__(/*! ./Label.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label.jsx */ "./Label/Label.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label/Label.jsx");

/***/ }),

/***/ "./Label/LabelWithActions.jsx":
/*!************************************!*\
  !*** ./Label/LabelWithActions.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _RowControl_RowControlStartStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RowControl/RowControlStartStyle */ "./RowControl/RowControlStartStyle.js");
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @linaria/core */ "../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);





function NoStyledLabelWithActions({
  children,
  className,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: "flex-start",
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_3__.cx)(_RowControl_RowControlStartStyle__WEBPACK_IMPORTED_MODULE_1__["default"], className),
    ...props
  }, children);
}
const _exp = /*#__PURE__*/() => NoStyledLabelWithActions;
const LabelWithActions = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)(_exp())({
  name: "LabelWithActions",
  class: "lm6imcb",
  propsAsIs: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelWithActions);
__webpack_require__(/*! ./LabelWithActions.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./LabelWithActions.jsx */ "./Label/LabelWithActions.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label/LabelWithActions.jsx");

/***/ }),

/***/ "./Label/RequiredLabel.jsx":
/*!*********************************!*\
  !*** ./Label/RequiredLabel.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label */ "./Label/Label.jsx");


const _exp = /*#__PURE__*/() => _Label__WEBPACK_IMPORTED_MODULE_0__["default"];
const _exp2 = /*#__PURE__*/() => ({
  size = 1.5
}) => size + 'em';
const RequiredLabel = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_exp())({
  name: "RequiredLabel",
  class: "rta9zu",
  propsAsIs: true,
  vars: {
    "rta9zu-0": [_exp2()]
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequiredLabel);
__webpack_require__(/*! ./RequiredLabel.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RequiredLabel.jsx */ "./Label/RequiredLabel.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label/RequiredLabel.jsx");

/***/ }),

/***/ "./Modal/ModalFooterStyle.js":
/*!***********************************!*\
  !*** ./Modal/ModalFooterStyle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line import/no-extraneous-dependencies

const ModalFooterStyle = "madeb2s";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalFooterStyle);
__webpack_require__(/*! ./ModalFooterStyle.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ModalFooterStyle.js */ "./Modal/ModalFooterStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Modal/ModalFooterStyle.js");

/***/ }),

/***/ "./Modal/StickyFooter.js":
/*!*******************************!*\
  !*** ./Modal/StickyFooter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const StickyFooter = "sh0lqos";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickyFooter);
__webpack_require__(/*! ./StickyFooter.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./StickyFooter.js */ "./Modal/StickyFooter.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Modal/StickyFooter.js");

/***/ }),

/***/ "./Modal/StickyModalActions.jsx":
/*!**************************************!*\
  !*** ./Modal/StickyModalActions.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StickyFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StickyFooter */ "./Modal/StickyFooter.js");



function StickyModalActions({
  className = '',
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justify: "flex-start",
    className: (_StickyFooter__WEBPACK_IMPORTED_MODULE_2__["default"] + ' ' + className).trim(),
    ...props
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickyModalActions);

/***/ }),

/***/ "./Popover/Components/PopoverStandard.jsx":
/*!************************************************!*\
  !*** ./Popover/Components/PopoverStandard.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");

// eslint-disable-next-line import/no-extraneous-dependencies

const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Popover;
const PopoverStandard = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_exp())({
  name: "PopoverStandard",
  class: "pp9mjqr",
  propsAsIs: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverStandard);
__webpack_require__(/*! ./PopoverStandard.wyw-in-js.css!=!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./PopoverStandard.jsx */ "./Popover/Components/PopoverStandard.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Popover/Components/PopoverStandard.jsx");

/***/ }),

/***/ "./Popover/Hooks/useTriggerPopover.js":
/*!********************************************!*\
  !*** ./Popover/Hooks/useTriggerPopover.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function useTriggerPopover() {
  const [showPopover, setShowPopover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const buttonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const popoverProps = {
    anchor: buttonRef.current,
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
  };
  return {
    ref: buttonRef,
    setShowPopover,
    showPopover,
    popoverProps
  };
}
window.JetFBHooks = window.JetFBHooks || {};
window.JetFBHooks.useTriggerPopover = useTriggerPopover;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTriggerPopover);

/***/ }),

/***/ "./ResponsiveModal.jsx":
/*!*****************************!*\
  !*** ./ResponsiveModal.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);


const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal;
const ResponsiveModal = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_exp())({
  name: "ResponsiveModal",
  class: "rnqs1ii",
  propsAsIs: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveModal);
__webpack_require__(/*! ./ResponsiveModal.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ResponsiveModal.jsx */ "./ResponsiveModal.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ResponsiveModal.jsx");

/***/ }),

/***/ "./RowControl/RowControl.jsx":
/*!***********************************!*\
  !*** ./RowControl/RowControl.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ClearBaseControlStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ClearBaseControlStyle */ "./ClearBaseControlStyle.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);






function UnForwardedRowControl({
  children,
  className,
  createId = true,
  controlSize = 3,
  ...props
}, ref) {
  const htmlId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useInstanceId)(UnForwardedRowControl, 'jfb-control', createId ? '' : '1');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    ref: ref,
    className: [className, _ClearBaseControlStyle__WEBPACK_IMPORTED_MODULE_2__["default"]].join(' '),
    gap: 2,
    align: "flex-start",
    ...props
  }, 'function' === typeof children ? children({
    id: htmlId
  }) : children);
}
const UnStyledRowControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(UnForwardedRowControl);
const _exp = /*#__PURE__*/() => UnStyledRowControl;
const _exp5 = /*#__PURE__*/() => ({
  controlSize = 3
}) => controlSize;
const RowControl = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_5__.styled)(_exp())({
  name: "RowControl",
  class: "rv9blu0",
  propsAsIs: true,
  vars: {
    "rv9blu0-0": [_exp5()]
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowControl);
__webpack_require__(/*! ./RowControl.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl.jsx */ "./RowControl/RowControl.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl/RowControl.jsx");

/***/ }),

/***/ "./RowControl/RowControlEnd.jsx":
/*!**************************************!*\
  !*** ./RowControl/RowControlEnd.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @linaria/core */ "../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _ControlWithErrorStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ControlWithErrorStyle */ "./ControlWithErrorStyle.js");
/* harmony import */ var _RowControlEndStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowControlEndStyle */ "./RowControl/RowControlEndStyle.js");
/* harmony import */ var _IconText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../IconText */ "./IconText.jsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);

/* eslint-disable import/no-extraneous-dependencies */






function RowControlEnd({
  children,
  hasError = false,
  showDefaultNotice = true,
  errorText = "",
  className,
  ...props
}) {
  const defaultErrorText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Please fill this required field', 'jet-form-builder');
  let newErrorText = '';
  if (errorText.length) {
    newErrorText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(errorText, 'jet-form-builder');
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_6__.cx)(_RowControlEndStyle__WEBPACK_IMPORTED_MODULE_2__["default"], hasError && _ControlWithErrorStyle__WEBPACK_IMPORTED_MODULE_1__["default"], className),
    direction: "column",
    ...props
  }, hasError && showDefaultNotice && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_IconText__WEBPACK_IMPORTED_MODULE_3__["default"], null, newErrorText.length ? newErrorText : defaultErrorText), children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowControlEnd);

/***/ }),

/***/ "./RowControl/RowControlEndStyle.js":
/*!******************************************!*\
  !*** ./RowControl/RowControlEndStyle.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const RowControlEndStyle = "rxii470";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowControlEndStyle);
__webpack_require__(/*! ./RowControlEndStyle.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControlEndStyle.js */ "./RowControl/RowControlEndStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl/RowControlEndStyle.js");

/***/ }),

/***/ "./RowControl/RowControlStart.jsx":
/*!****************************************!*\
  !*** ./RowControl/RowControlStart.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @linaria/core */ "../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _RowControlStartStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowControlStartStyle */ "./RowControl/RowControlStartStyle.js");



function RowControlStart({
  className,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_2__.cx)(className, _RowControlStartStyle__WEBPACK_IMPORTED_MODULE_1__["default"]),
    ...props
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowControlStart);

/***/ }),

/***/ "./RowControl/RowControlStartStyle.js":
/*!********************************************!*\
  !*** ./RowControl/RowControlStartStyle.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const RowControlStartStyle = "r8cg2q0";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowControlStartStyle);
__webpack_require__(/*! ./RowControlStartStyle.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControlStartStyle.js */ "./RowControl/RowControlStartStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl/RowControlStartStyle.js");

/***/ }),

/***/ "./Sortable.jsx":
/*!**********************!*\
  !*** ./Sortable.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-sortablejs */ "../../../../node_modules/react-sortablejs/dist/index.js");
/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_sortablejs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react_sortablejs__WEBPACK_IMPORTED_MODULE_0__.ReactSortable);

/***/ }),

/***/ "./WideLine.jsx":
/*!**********************!*\
  !*** ./WideLine.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");

const WideLine = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('hr')({
  name: "WideLine",
  class: "w1m59y8q",
  propsAsIs: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WideLine);
__webpack_require__(/*! ./WideLine.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./WideLine.jsx */ "./WideLine.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./WideLine.jsx");

/***/ }),

/***/ "./ClearBaseControlStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ClearBaseControlStyle.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./ClearBaseControlStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ClearBaseControlStyle.js ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ControlWithErrorStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ControlWithErrorStyle.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./ControlWithErrorStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ControlWithErrorStyle.js ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./Help.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Help.jsx":
/*!**********************************************************************************************************************************!*\
  !*** ./Help.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Help.jsx ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./IconText.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./IconText.jsx":
/*!******************************************************************************************************************************************!*\
  !*** ./IconText.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./IconText.jsx ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./Label/Label.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label/Label.jsx":
/*!************************************************************************************************************************************************!*\
  !*** ./Label/Label.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label/Label.jsx ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./Label/LabelWithActions.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label/LabelWithActions.jsx":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./Label/LabelWithActions.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label/LabelWithActions.jsx ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./Label/RequiredLabel.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label/RequiredLabel.jsx":
/*!****************************************************************************************************************************************************************!*\
  !*** ./Label/RequiredLabel.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Label/RequiredLabel.jsx ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./Modal/ModalFooterStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Modal/ModalFooterStyle.js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./Modal/ModalFooterStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Modal/ModalFooterStyle.js ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./Modal/StickyFooter.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Modal/StickyFooter.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./Modal/StickyFooter.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Modal/StickyFooter.js ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./Popover/Components/PopoverStandard.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Popover/Components/PopoverStandard.jsx":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./Popover/Components/PopoverStandard.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./Popover/Components/PopoverStandard.jsx ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./ResponsiveModal.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ResponsiveModal.jsx":
/*!********************************************************************************************************************************************************!*\
  !*** ./ResponsiveModal.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ResponsiveModal.jsx ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./RowControl/RowControl.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl/RowControl.jsx":
/*!********************************************************************************************************************************************************************!*\
  !*** ./RowControl/RowControl.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl/RowControl.jsx ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./RowControl/RowControlEndStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl/RowControlEndStyle.js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./RowControl/RowControlEndStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl/RowControlEndStyle.js ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./RowControl/RowControlStartStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl/RowControlStartStyle.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./RowControl/RowControlStartStyle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./RowControl/RowControlStartStyle.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./WideLine.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./WideLine.jsx":
/*!******************************************************************************************************************************************!*\
  !*** ./WideLine.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./WideLine.jsx ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../../node_modules/react-sortablejs/dist/index.js":
/*!***************************************************************!*\
  !*** ../../../../node_modules/react-sortablejs/dist/index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $8zHUo$sortablejs = __webpack_require__(/*! sortablejs */ "../../../../node_modules/sortablejs/modular/sortable.esm.js");
var $8zHUo$classnames = __webpack_require__(/*! classnames */ "../../../../node_modules/react-sortablejs/node_modules/classnames/index.js");
var $8zHUo$react = __webpack_require__(/*! react */ "react");
var $8zHUo$tinyinvariant = __webpack_require__(/*! tiny-invariant */ "../../../../node_modules/tiny-invariant/dist/tiny-invariant.esm.js");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

$parcel$export(module.exports, "Sortable", () => $882b6d93070905b3$re_export$Sortable);
$parcel$export(module.exports, "Direction", () => $882b6d93070905b3$re_export$Direction);
$parcel$export(module.exports, "DOMRect", () => $882b6d93070905b3$re_export$DOMRect);
$parcel$export(module.exports, "GroupOptions", () => $882b6d93070905b3$re_export$GroupOptions);
$parcel$export(module.exports, "MoveEvent", () => $882b6d93070905b3$re_export$MoveEvent);
$parcel$export(module.exports, "Options", () => $882b6d93070905b3$re_export$Options);
$parcel$export(module.exports, "PullResult", () => $882b6d93070905b3$re_export$PullResult);
$parcel$export(module.exports, "PutResult", () => $882b6d93070905b3$re_export$PutResult);
$parcel$export(module.exports, "SortableEvent", () => $882b6d93070905b3$re_export$SortableEvent);
$parcel$export(module.exports, "SortableOptions", () => $882b6d93070905b3$re_export$SortableOptions);
$parcel$export(module.exports, "Utils", () => $882b6d93070905b3$re_export$Utils);
$parcel$export(module.exports, "ReactSortable", () => $7fe8e3ea572bda7a$export$11bbed9ee0012c13);





function $eb03e74f8f7db1f3$export$1d0aa160432dfea5(node) {
    if (node.parentElement !== null) node.parentElement.removeChild(node);
}
function $eb03e74f8f7db1f3$export$6d240faa51aa562f(parent, newChild, index) {
    const refChild = parent.children[index] || null;
    parent.insertBefore(newChild, refChild);
}
function $eb03e74f8f7db1f3$export$d7d742816c28cf91(customs) {
    $eb03e74f8f7db1f3$export$77f49a256021c8de(customs);
    $eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs);
}
function $eb03e74f8f7db1f3$export$77f49a256021c8de(customs) {
    customs.forEach((curr)=>$eb03e74f8f7db1f3$export$1d0aa160432dfea5(curr.element));
}
function $eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs) {
    customs.forEach((curr)=>{
        $eb03e74f8f7db1f3$export$6d240faa51aa562f(curr.parentElement, curr.element, curr.oldIndex);
    });
}
function $eb03e74f8f7db1f3$export$4655efe700f887a(evt, list) {
    const mode = $eb03e74f8f7db1f3$export$1fc0f6205829e19c(evt);
    const parentElement = {
        parentElement: evt.from
    };
    let custom = [];
    switch(mode){
        case "normal":
            /* eslint-disable */ const item = {
                element: evt.item,
                newIndex: evt.newIndex,
                oldIndex: evt.oldIndex,
                parentElement: evt.from
            };
            custom = [
                item
            ];
            break;
        case "swap":
            const drag = {
                element: evt.item,
                oldIndex: evt.oldIndex,
                newIndex: evt.newIndex,
                ...parentElement
            };
            const swap = {
                element: evt.swapItem,
                oldIndex: evt.newIndex,
                newIndex: evt.oldIndex,
                ...parentElement
            };
            custom = [
                drag,
                swap
            ];
            break;
        case "multidrag":
            custom = evt.oldIndicies.map((curr, index)=>({
                    element: curr.multiDragElement,
                    oldIndex: curr.index,
                    newIndex: evt.newIndicies[index].index,
                    ...parentElement
                }));
            break;
    }
    /* eslint-enable */ const customs = $eb03e74f8f7db1f3$export$bc06a3af7dc65f53(custom, list);
    return customs;
}
function $eb03e74f8f7db1f3$export$c25cf8080bd305ec(normalized, list) {
    const a = $eb03e74f8f7db1f3$export$be2da95e6167b0bd(normalized, list);
    const b = $eb03e74f8f7db1f3$export$eca851ee65ae17e4(normalized, a);
    return b;
}
function $eb03e74f8f7db1f3$export$be2da95e6167b0bd(normalized, list) {
    const newList = [
        ...list
    ];
    normalized.concat().reverse().forEach((curr)=>newList.splice(curr.oldIndex, 1));
    return newList;
}
function $eb03e74f8f7db1f3$export$eca851ee65ae17e4(normalized, list, evt, clone) {
    const newList = [
        ...list
    ];
    normalized.forEach((curr)=>{
        const newItem = clone && evt && clone(curr.item, evt);
        newList.splice(curr.newIndex, 0, newItem || curr.item);
    });
    return newList;
}
function $eb03e74f8f7db1f3$export$1fc0f6205829e19c(evt) {
    if (evt.oldIndicies && evt.oldIndicies.length > 0) return "multidrag";
    if (evt.swapItem) return "swap";
    return "normal";
}
function $eb03e74f8f7db1f3$export$bc06a3af7dc65f53(inputs, list) {
    const normalized = inputs.map((curr)=>({
            ...curr,
            item: list[curr.oldIndex]
        })).sort((a, b)=>a.oldIndex - b.oldIndex);
    return normalized;
}
function $eb03e74f8f7db1f3$export$7553c81e62e31b7e(props) {
    /* eslint-disable */ const { list: // react sortable props
    list , setList: setList , children: children , tag: tag , style: style , className: className , clone: clone , onAdd: // sortable options that have methods we want to overwrite
    onAdd , onChange: onChange , onChoose: onChoose , onClone: onClone , onEnd: onEnd , onFilter: onFilter , onRemove: onRemove , onSort: onSort , onStart: onStart , onUnchoose: onUnchoose , onUpdate: onUpdate , onMove: onMove , onSpill: onSpill , onSelect: onSelect , onDeselect: onDeselect , ...options } = props;
    /* eslint-enable */ return options;
}


/** Holds a global reference for which react element is being dragged */ // @todo - use context to manage this. How does one use 2 different providers?
const $7fe8e3ea572bda7a$var$store = {
    dragging: null
};
class $7fe8e3ea572bda7a$export$11bbed9ee0012c13 extends (0, $8zHUo$react.Component) {
    /* eslint-disable-next-line */ static defaultProps = {
        clone: (item)=>item
    };
    constructor(props){
        super(props);
        // @todo forward ref this component
        this.ref = /*#__PURE__*/ (0, $8zHUo$react.createRef)();
        // make all state false because we can't change sortable unless a mouse gesture is made.
        const newList = [
            ...props.list
        ].map((item)=>Object.assign(item, {
                chosen: false,
                selected: false
            }));
        props.setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
        (0, ($parcel$interopDefault($8zHUo$tinyinvariant)))(//@ts-expect-error: Doesn't exist. Will deprecate soon.
        !props.plugins, `
Plugins prop is no longer supported.
Instead, mount it with "Sortable.mount(new MultiDrag())"
Please read the updated README.md at https://github.com/SortableJS/react-sortablejs.
      `);
    }
    componentDidMount() {
        if (this.ref.current === null) return;
        const newOptions = this.makeOptions();
        (0, ($parcel$interopDefault($8zHUo$sortablejs))).create(this.ref.current, newOptions);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.disabled !== this.props.disabled && this.sortable) this.sortable.option("disabled", this.props.disabled);
    }
    render() {
        const { tag: tag , style: style , className: className , id: id  } = this.props;
        const classicProps = {
            style: style,
            className: className,
            id: id
        };
        // if no tag, default to a `div` element.
        const newTag = !tag || tag === null ? "div" : tag;
        return /*#__PURE__*/ (0, $8zHUo$react.createElement)(newTag, {
            // @todo - find a way (perhaps with the callback) to allow AntD components to work
            ref: this.ref,
            ...classicProps
        }, this.getChildren());
    }
    getChildren() {
        const { children: children , dataIdAttr: dataIdAttr , selectedClass: selectedClass = "sortable-selected" , chosenClass: chosenClass = "sortable-chosen" , dragClass: /* eslint-disable */ dragClass = "sortable-drag" , fallbackClass: fallbackClass = "sortable-falback" , ghostClass: ghostClass = "sortable-ghost" , swapClass: swapClass = "sortable-swap-highlight" , filter: /* eslint-enable */ filter = "sortable-filter" , list: list ,  } = this.props;
        // if no children, don't do anything.
        if (!children || children == null) return null;
        const dataid = dataIdAttr || "data-id";
        /* eslint-disable-next-line */ return (0, $8zHUo$react.Children).map(children, (child, index)=>{
            if (child === undefined) return undefined;
            const item = list[index] || {};
            const { className: prevClassName  } = child.props;
            // @todo - handle the function if avalable. I don't think anyone will be doing this soon.
            const filtered = typeof filter === "string" && {
                [filter.replace(".", "")]: !!item.filtered
            };
            const className = (0, ($parcel$interopDefault($8zHUo$classnames)))(prevClassName, {
                [selectedClass]: item.selected,
                [chosenClass]: item.chosen,
                ...filtered
            });
            return /*#__PURE__*/ (0, $8zHUo$react.cloneElement)(child, {
                [dataid]: child.key,
                className: className
            });
        });
    }
    /** Appends the `sortable` property to this component */ get sortable() {
        const el = this.ref.current;
        if (el === null) return null;
        const key = Object.keys(el).find((k)=>k.includes("Sortable"));
        if (!key) return null;
        //@ts-expect-error: fix me.
        return el[key];
    }
    /** Converts all the props from `ReactSortable` into the `options` object that `Sortable.create(el, [options])` can use. */ makeOptions() {
        const DOMHandlers = [
            "onAdd",
            "onChoose",
            "onDeselect",
            "onEnd",
            "onRemove",
            "onSelect",
            "onSpill",
            "onStart",
            "onUnchoose",
            "onUpdate", 
        ];
        const NonDOMHandlers = [
            "onChange",
            "onClone",
            "onFilter",
            "onSort", 
        ];
        const newOptions = (0, $eb03e74f8f7db1f3$export$7553c81e62e31b7e)(this.props);
        DOMHandlers.forEach((name)=>newOptions[name] = this.prepareOnHandlerPropAndDOM(name));
        NonDOMHandlers.forEach((name)=>newOptions[name] = this.prepareOnHandlerProp(name));
        /** onMove has 2 arguments and needs to be handled seperately. */ const onMove1 = (evt, originalEvt)=>{
            const { onMove: onMove  } = this.props;
            const defaultValue = evt.willInsertAfter || -1;
            if (!onMove) return defaultValue;
            const result = onMove(evt, originalEvt, this.sortable, $7fe8e3ea572bda7a$var$store);
            if (typeof result === "undefined") return false;
            return result;
        };
        return {
            ...newOptions,
            onMove: onMove1
        };
    }
    /** Prepares a method that will be used in the sortable options to call an `on[Handler]` prop & an `on[Handler]` ReactSortable method.  */ prepareOnHandlerPropAndDOM(evtName) {
        return (evt)=>{
            // call the component prop
            this.callOnHandlerProp(evt, evtName);
            // calls state change
            //@ts-expect-error: until @types multidrag item is in
            this[evtName](evt);
        };
    }
    /** Prepares a method that will be used in the sortable options to call an `on[Handler]` prop */ prepareOnHandlerProp(evtName) {
        return (evt)=>{
            // call the component prop
            this.callOnHandlerProp(evt, evtName);
        };
    }
    /** Calls the `props.on[Handler]` function */ callOnHandlerProp(evt, evtName) {
        const propEvent = this.props[evtName];
        if (propEvent) propEvent(evt, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    // SORTABLE DOM HANDLING
    onAdd(evt) {
        const { list: list , setList: setList , clone: clone  } = this.props;
        /* eslint-disable-next-line */ const otherList = [
            ...$7fe8e3ea572bda7a$var$store.dragging.props.list
        ];
        const customs = (0, $eb03e74f8f7db1f3$export$4655efe700f887a)(evt, otherList);
        (0, $eb03e74f8f7db1f3$export$77f49a256021c8de)(customs);
        const newList = (0, $eb03e74f8f7db1f3$export$eca851ee65ae17e4)(customs, list, evt, clone).map((item)=>Object.assign(item, {
                selected: false
            }));
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onRemove(evt) {
        const { list: list , setList: setList  } = this.props;
        const mode = (0, $eb03e74f8f7db1f3$export$1fc0f6205829e19c)(evt);
        const customs = (0, $eb03e74f8f7db1f3$export$4655efe700f887a)(evt, list);
        (0, $eb03e74f8f7db1f3$export$a6177d5829f70ebc)(customs);
        let newList = [
            ...list
        ];
        // remove state if not in clone mode. otherwise, keep.
        if (evt.pullMode !== "clone") newList = (0, $eb03e74f8f7db1f3$export$be2da95e6167b0bd)(customs, newList);
        else {
            // switch used to get the clone
            let customClones = customs;
            switch(mode){
                case "multidrag":
                    customClones = customs.map((item, index)=>({
                            ...item,
                            element: evt.clones[index]
                        }));
                    break;
                case "normal":
                    customClones = customs.map((item)=>({
                            ...item,
                            element: evt.clone
                        }));
                    break;
                case "swap":
                default:
                    (0, ($parcel$interopDefault($8zHUo$tinyinvariant)))(true, `mode "${mode}" cannot clone. Please remove "props.clone" from <ReactSortable/> when using the "${mode}" plugin`);
            }
            (0, $eb03e74f8f7db1f3$export$77f49a256021c8de)(customClones);
            // replace selected items with cloned items
            customs.forEach((curr)=>{
                const index = curr.oldIndex;
                /* eslint-disable-next-line */ const newItem = this.props.clone(curr.item, evt);
                newList.splice(index, 1, newItem);
            });
        }
        // remove item.selected from list
        newList = newList.map((item)=>Object.assign(item, {
                selected: false
            }));
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onUpdate(evt) {
        const { list: list , setList: setList  } = this.props;
        const customs = (0, $eb03e74f8f7db1f3$export$4655efe700f887a)(evt, list);
        (0, $eb03e74f8f7db1f3$export$77f49a256021c8de)(customs);
        (0, $eb03e74f8f7db1f3$export$a6177d5829f70ebc)(customs);
        const newList = (0, $eb03e74f8f7db1f3$export$c25cf8080bd305ec)(customs, list);
        return setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onStart() {
        $7fe8e3ea572bda7a$var$store.dragging = this;
    }
    onEnd() {
        $7fe8e3ea572bda7a$var$store.dragging = null;
    }
    onChoose(evt) {
        const { list: list , setList: setList  } = this.props;
        const newList = list.map((item, index)=>{
            let newItem = item;
            if (index === evt.oldIndex) newItem = Object.assign(item, {
                chosen: true
            });
            return newItem;
        });
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onUnchoose(evt) {
        const { list: list , setList: setList  } = this.props;
        const newList = list.map((item, index)=>{
            let newItem = item;
            if (index === evt.oldIndex) newItem = Object.assign(newItem, {
                chosen: false
            });
            return newItem;
        });
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onSpill(evt) {
        const { removeOnSpill: removeOnSpill , revertOnSpill: revertOnSpill  } = this.props;
        if (removeOnSpill && !revertOnSpill) (0, $eb03e74f8f7db1f3$export$1d0aa160432dfea5)(evt.item);
    }
    onSelect(evt) {
        const { list: list , setList: setList  } = this.props;
        const newList = list.map((item)=>Object.assign(item, {
                selected: false
            }));
        evt.newIndicies.forEach((curr)=>{
            const index = curr.index;
            if (index === -1) {
                console.log(`"${evt.type}" had indice of "${curr.index}", which is probably -1 and doesn't usually happen here.`);
                console.log(evt);
                return;
            }
            newList[index].selected = true;
        });
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onDeselect(evt) {
        const { list: list , setList: setList  } = this.props;
        const newList = list.map((item)=>Object.assign(item, {
                selected: false
            }));
        evt.newIndicies.forEach((curr)=>{
            const index = curr.index;
            if (index === -1) return;
            newList[index].selected = true;
        });
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
}


var $faefaad95e5fcca0$exports = {};


$parcel$exportWildcard(module.exports, $faefaad95e5fcca0$exports);


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../../node_modules/react-sortablejs/node_modules/classnames/index.js":
/*!**********************************************************************************!*\
  !*** ../../../../node_modules/react-sortablejs/node_modules/classnames/index.js ***!
  \**********************************************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../../../../node_modules/sortablejs/modular/sortable.esm.js":
/*!*******************************************************************!*\
  !*** ../../../../node_modules/sortablejs/modular/sortable.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
/* harmony export */   Sortable: () => (/* binding */ Sortable),
/* harmony export */   Swap: () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "1.15.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches( /**HTMLElement*/el, /**String*/selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest( /**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }
      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = '';
  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');
      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
      i = 0,
      n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}

/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode;

    // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect();

          // Set relative to edges of padding box of container
          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
      scaleX = elMatrix && elMatrix.a,
      scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}

/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
    elSideVal = getRect(el)[elSide];

  /* jshint boss:true */
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
      visible = void 0;
    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}

/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
    i = 0,
    children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}

/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}

/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */
function index(el, selector) {
  var index = 0;
  if (!el || !el.parentNode) {
    return -1;
  }

  /* jshint boss:true */
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }
  return index;
}

/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */
function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
    offsetTop = 0,
    winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el),
        scaleX = elMatrix.a,
        scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}

/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
        _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}
function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}
function getChildContainingRectFromElement(container, options, ghostEl) {
  var rect = {};
  Array.from(container.children).forEach(function (child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl) return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
    animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);

        // If animating: compensate for current animation
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }
      var animating = false,
        animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
          target = state.target,
          fromRect = target.fromRect,
          toRect = getRect(target),
          prevFromRect = target.prevFromRect,
          prevToRect = target.prevToRect,
          animatingRect = state.rect,
          targetMatrix = matrix(target, true);
        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) &&
          // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }

        // if fromRect != toRect: animate
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
          scaleX = elMatrix && elMatrix.a,
          scaleY = elMatrix && elMatrix.d,
          translateX = (currentRect.left - toRect.left) / (scaleX || 1),
          translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }
    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function () {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return;
      // Fire global events if it exists in this sortable
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      }

      // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;

      // Add default options from plugin
      _extends(defaults, initialized.defaults);
    });
    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);
      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return;

      // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
    rootEl = _ref.rootEl,
    name = _ref.name,
    targetEl = _ref.targetEl,
    cloneEl = _ref.cloneEl,
    toEl = _ref.toEl,
    fromEl = _ref.fromEl,
    oldIndex = _ref.oldIndex,
    newIndex = _ref.newIndex,
    oldDraggableIndex = _ref.oldDraggableIndex,
    newDraggableIndex = _ref.newDraggableIndex,
    originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
    options = sortable.options,
    onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }
  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];
var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    originalEvent = _ref.evt,
    data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}
var dragEl,
  parentEl,
  ghostEl,
  rootEl,
  nextEl,
  lastDownEl,
  cloneEl,
  cloneHidden,
  oldIndex,
  newIndex,
  oldDraggableIndex,
  newDraggableIndex,
  activeGroup,
  putSortable,
  awaitingDragStarted = false,
  ignoreNextClick = false,
  sortables = [],
  tapEvt,
  touchEvt,
  lastDx,
  lastDy,
  tapDistanceLeft,
  tapDistanceTop,
  moved,
  lastTarget,
  lastDirection,
  pastFirstInvertThresh = false,
  isCircumstantialInvert = false,
  targetMoveDistance,
  // For positioning ghost absolutely
  ghostRelativeParent,
  ghostRelativeParentInitialScroll = [],
  // (left, top)

  _silent = false,
  savedInputChecked = [];

/** @const */
var documentExists = typeof document !== 'undefined',
  PositionGhostAbsolutely = IOS,
  CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
  // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
  supportCssPointerEvents = function () {
    if (!documentExists) return;
    // false when <= IE11
    if (IE11OrLess) {
      return false;
    }
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
  _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }
    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },
  _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  },
  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function (sortable) {
      var threshold = sortable[expando].options.emptyInsertThreshold;
      if (!threshold || lastChild(sortable)) return;
      var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
      if (insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  },
  _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
  _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', 'none');
    }
  },
  _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', '');
    }
  };

// #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      // Create imitation event
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};

/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el; // root element
  this.options = options = _extends({}, options);

  // Export instance
  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults);

  // Set default options
  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }
  _prepareGroup(options);

  // Bind all private methods
  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  }

  // Setup drag mode
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  }

  // Bind events
  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }
  sortables.push(this.el);

  // Restore sorting
  options.store && options.store.get && this.sort(options.store.get(this) || []);

  // Add animation state manager
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart( /** Event|TouchEvent */evt) {
    if (!evt.cancelable) return;
    var _this = this,
      el = this.el,
      options = this.options,
      preventOnFilter = options.preventOnFilter,
      type = evt.type,
      touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
      target = (touch || evt).target,
      originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
      filter = options.filter;
    _saveInputCheckedState(el);

    // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    }

    // cancel dnd if original target is content editable
    if (originalTarget.isContentEditable) {
      return;
    }

    // Safari ignores further event handling after mousedown
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    }

    // Get the index of the dragged element within its parent
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);

    // Check filter
    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }

    // Prepare `dragstart`
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart( /** Event */evt, /** Touch */touch, /** HTMLElement */target) {
    var _this = this,
      el = _this.el,
      options = _this.options,
      ownerDocument = el.ownerDocument,
      dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';
      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }

        // Bind the events: dragstart/dragend
        _this._triggerDragStart(evt, touch);

        // Drag start event
        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        });

        // Chosen item
        toggleClass(dragEl, options.chosenClass, true);
      };

      // Disable "draggable"
      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop);

      // Make dragEl draggable (must be before delay for FireFox)
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent('delayStart', this, {
        evt: evt
      });

      // Delay is impossible for native DnD in Edge or IE
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag
        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler( /** TouchEvent|PointerEvent **/e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart( /** Event */evt, /** Touch */touch) {
    touch = touch || evt.pointerType == 'touch' && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }
    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });
      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }
      var options = this.options;

      // Apply effect
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();

      // Drag start event
      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent; // store last element
        }
        /* jshint boss:true */ while (parent = parent.parentNode);
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove( /**TouchEvent*/evt) {
    if (tapEvt) {
      var options = this.options,
        fallbackTolerance = options.fallbackTolerance,
        fallbackOffset = options.fallbackOffset,
        touch = evt.touches ? evt.touches[0] : evt,
        ghostMatrix = ghostEl && matrix(ghostEl, true),
        scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
        scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
        relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
        dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
        dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);

      // only set the status to dragging, when we are actually dragging
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
        rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
        options = this.options;

      // Position absolutely
      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);

      // Set transform-origin
      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart( /**Event*/evt, /**boolean*/fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent('setupClone', this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }

    // #1143: IFrame support workaround
    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);

    // Set proper drop events
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, 'drop', _this);

      // #1276 fix:
      css(dragEl, 'transform', 'translateZ(0)');
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;
    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver( /**Event*/evt) {
    var el = this.el,
      target = evt.target,
      dragRect,
      targetRect,
      revert,
      options = this.options,
      group = options.group,
      activeSortable = Sortable.active,
      isOwner = activeGroup === group,
      canSort = options.sort,
      fromSortable = putSortable || activeSortable,
      vertical,
      _this = this,
      completedFired = false;
    if (_silent) return;
    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    }

    // Capture animation state
    function capture() {
      dragOverEvent('dragOverAnimationCapture');
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }

    // Return invocation when dragEl is inserted (or completed)
    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }

        // Animation
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }

      // Null lastTarget if it is not inside a previously swapped element
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }

      // no bubbling and not fallback
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);

        // Do not detect for empty insert if already inserted
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }

    // Call when dragEl has been inserted
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;
      if (revert) {
        parentEl = rootEl; // actualization
        capture();
        this._hideClone();
        dragOverEvent('revert');
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list

        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        }

        // if there is a last element, it is the target
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
          targetBeforeFirstSwap,
          differentLevel = dragEl.parentNode !== el,
          differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
          side1 = vertical ? 'top' : 'left',
          scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
          scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        }
        // If dragEl is already beside target: Do not insert
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
          after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }

          // Undo chrome's scroll adjustment (has no effect on other browsers)
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode; // actualization

          // must be done before animation
          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop( /**Event*/evt) {
    var el = this.el,
      options = this.options;

    // Get the index of the dragged element within its parent
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode;

    // Get again after plugin event
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);

    // Unbind events
    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, 'user-select', '');
    }
    css(dragEl, 'transform', '');
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }
        _disableDraggable(dragEl);
        dragEl.style['will-change'] = '';

        // Remove classes
        // ghostClass is added in dragStarted
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);

        // Drag stop event
        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            // Remove event
            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            });

            // drag from one list and drop into another
            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          });

          // Save sorting
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent( /**Event*/evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);
        break;
      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
      el,
      children = this.el.children,
      i = 0,
      n = children.length,
      options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
      rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];
      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);
    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    }
    // Remove draggable attributes
    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return;

      // show clone at dragEl or original position
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};
function _globalDragOver( /**Event*/evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
    sortable = fromEl[expando],
    onMoveFn = sortable.options.onMove,
    retVal;
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
    targetLength = vertical ? targetRect.height : targetRect.width,
    targetS1 = vertical ? targetRect.top : targetRect.left,
    targetS2 = vertical ? targetRect.bottom : targetRect.right,
    invert = false;
  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}

/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}

/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
    i = str.length,
    sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}

// Fixed #973:
if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}

// Export utils
Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};

/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */
Sortable.get = function (element) {
  return element[expando];
};

/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */
Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }
  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};

/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */
Sortable.create = function (el, options) {
  return new Sortable(el, options);
};

// Export
Sortable.version = version;

var autoScrolls = [],
  scrollEl,
  scrollRootEl,
  scrolling = false,
  lastAutoScrollX,
  lastAutoScrollY,
  touchEvt$1,
  pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };

    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX,
        y = (evt.touches ? evt.touches[0] : evt).clientY,
        elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;

      // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);

        // Listener for pointer element change
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          // Detect for pointer elem change, emulating native DnD behaviour
          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
    y = (evt.touches ? evt.touches[0] : evt).clientY,
    sens = options.scrollSensitivity,
    speed = options.scrollSpeed,
    winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
    scrollCustomFn;

  // New scroll root, set scrollEl
  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent,
      rect = getRect(el),
      top = rect.top,
      bottom = rect.bottom,
      left = rect.left,
      right = rect.right,
      width = rect.width,
      height = rect.height,
      canScrollX = void 0,
      canScrollY = void 0,
      scrollWidth = el.scrollWidth,
      scrollHeight = el.scrollHeight,
      elCSS = css(el),
      scrollPosX = el.scrollLeft,
      scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */
        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    dragEl = _ref.dragEl,
    activeSortable = _ref.activeSortable,
    dispatchSortableEvent = _ref.dispatchSortableEvent,
    hideGhostForTarget = _ref.hideGhostForTarget,
    unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};
function Revert() {}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
      putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable) {
      putSortable.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }
    this.sortable.animateAll();
    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};
_extends(Revert, {
  pluginName: 'revertOnSpill'
});
function Remove() {}
Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
      putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};
_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;
function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }
  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
        target = _ref2.target,
        onMove = _ref2.onMove,
        activeSortable = _ref2.activeSortable,
        changed = _ref2.changed,
        cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
        options = this.options;
      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;
        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }
        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }
      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
        putSortable = _ref3.putSortable,
        dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}
function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
    p2 = n2.parentNode,
    i1,
    i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);
  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }
  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
  multiDragClones = [],
  lastMultiDragSelect,
  // for selection with modifier key down (SHIFT)
  multiDragSortable,
  initialFolding = false,
  // Initial multi-drag fold when drag started
  folding = false,
  // Folding any other time
  dragStarted = false,
  dragEl$1,
  clonesFromRect,
  clonesHidden;
function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }
    }
    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';
        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }
        dataTransfer.setData('Text', data);
      }
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
        cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;
      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }
      sortable._hideClone();
      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
        rootEl = _ref3.rootEl,
        dispatchSortableEvent = _ref3.dispatchSortableEvent,
        cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;
      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
        rootEl = _ref4.rootEl,
        cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;
      var sortable = _ref5.sortable,
        cloneNowHidden = _ref5.cloneNowHidden,
        cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');
        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;
      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      });

      // Sort multi-drag elements
      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;
      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;
      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM

        sortable.captureAnimationState();
        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }
      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;
        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        }

        // Remove all auxiliary multidrag items from el, if sorting enabled
        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
        completed = _ref8.completed,
        cancel = _ref8.cancel;
      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
        rootEl = _ref9.rootEl,
        sortable = _ref9.sortable,
        dragRect = _ref9.dragRect;
      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
        isOwner = _ref10.isOwner,
        insertion = _ref10.insertion,
        activeSortable = _ref10.activeSortable,
        parentEl = _ref10.parentEl,
        putSortable = _ref10.putSortable;
      var options = this.options;
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }
        initialFolding = false;
        // If leaving sort:false root, or already folding - Fold to new location
        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute);

            // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        }

        // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }
          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;
            activeSortable._showClone(sortable);

            // Unfold animation for clones if showing from hidden
            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
        isOwner = _ref11.isOwner,
        activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });
      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
        rootEl = _ref12.rootEl,
        parentEl = _ref12.parentEl,
        sortable = _ref12.sortable,
        dispatchSortableEvent = _ref12.dispatchSortableEvent,
        oldIndex = _ref12.oldIndex,
        putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
        children = parentEl.children;

      // Multi-drag selection
      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }
        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvent: evt
          });

          // Modifier activated, select from last to dragEl
          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
              currentIndex = index(dragEl$1);
            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;
              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }
              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvent: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }
          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      }

      // Multi-drag drop
      if (dragStarted && this.isMultiDrag) {
        folding = false;
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
            multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();
          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect;

                  // Prepare unfold animation
                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            }

            // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed
            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }
              multiDragIndex++;
            });

            // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.
            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });
              if (update) {
                dispatchSortableEvent('update');
                dispatchSortableEvent('sort');
              }
            }
          }

          // Must be done after capturing individual rects (scroll bar)
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }
        multiDragSortable = toSortable;
      }

      // Remove clones if necessary
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return;

      // Only deselect if selection is in this sortable
      if (multiDragSortable !== this.sortable) return;

      // Only deselect if target is not item in this sortable
      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return;

      // Only deselect if left click
      if (evt && evt.button !== 0) return;
      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
          multiDragSortable = sortable;
        }
        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
          index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;
      var oldIndicies = [],
        newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        });

        // multiDragElements will already be sorted if folding
        var newIndex;
        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }
        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();
        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }
        return key;
      }
    }
  });
}
function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}

/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */
function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}
function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ }),

/***/ "../../../../node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!**************************************************************************!*\
  !*** ../../../../node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? prefix + ": " + provided : prefix;
    throw new Error(value);
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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "../../../../node_modules/@linaria/core/dist/index.mjs":
/*!*************************************************************!*\
  !*** ../../../../node_modules/@linaria/core/dist/index.mjs ***!
  \*************************************************************/
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

/***/ "../../../../node_modules/@linaria/react/dist/index.mjs":
/*!**************************************************************!*\
  !*** ../../../../node_modules/@linaria/react/dist/index.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styled: () => (/* binding */ styled_default)
/* harmony export */ });
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/is-prop-valid */ "../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @linaria/core */ "../../../../node_modules/@linaria/core/dist/index.mjs");
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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearBaseControlStyle: () => (/* reexport safe */ _ClearBaseControlStyle__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   ControlWithErrorStyle: () => (/* reexport safe */ _ControlWithErrorStyle__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   FormLabeledTokenField: () => (/* reexport safe */ _FormLabeledTokenField__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   Help: () => (/* reexport safe */ _Help__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   IconText: () => (/* reexport safe */ _IconText__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Label: () => (/* reexport safe */ _Label_Label__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   LabelWithActions: () => (/* reexport safe */ _Label_LabelWithActions__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   ModalFooterStyle: () => (/* reexport safe */ _Modal_ModalFooterStyle__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   PopoverStandard: () => (/* reexport safe */ _Popover_Components_PopoverStandard__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   RequiredLabel: () => (/* reexport safe */ _Label_RequiredLabel__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ResponsiveModal: () => (/* reexport safe */ _ResponsiveModal__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   RowControl: () => (/* reexport safe */ _RowControl_RowControl__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   RowControlEnd: () => (/* reexport safe */ _RowControl_RowControlEnd__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   RowControlEndStyle: () => (/* reexport safe */ _RowControl_RowControlEndStyle__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   RowControlStart: () => (/* reexport safe */ _RowControl_RowControlStart__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   RowControlStartStyle: () => (/* reexport safe */ _RowControl_RowControlStartStyle__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   Sortable: () => (/* reexport safe */ _Sortable__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   StickyModalActions: () => (/* reexport safe */ _Modal_StickyModalActions__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   WideLine: () => (/* reexport safe */ _WideLine__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   useTriggerPopover: () => (/* reexport safe */ _Popover_Hooks_useTriggerPopover__WEBPACK_IMPORTED_MODULE_18__["default"])
/* harmony export */ });
/* harmony import */ var _Label_Label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label/Label */ "./Label/Label.jsx");
/* harmony import */ var _Label_RequiredLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label/RequiredLabel */ "./Label/RequiredLabel.jsx");
/* harmony import */ var _Label_LabelWithActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Label/LabelWithActions */ "./Label/LabelWithActions.jsx");
/* harmony import */ var _Help__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Help */ "./Help.jsx");
/* harmony import */ var _Sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sortable */ "./Sortable.jsx");
/* harmony import */ var _ResponsiveModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResponsiveModal */ "./ResponsiveModal.jsx");
/* harmony import */ var _RowControl_RowControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RowControl/RowControl */ "./RowControl/RowControl.jsx");
/* harmony import */ var _RowControl_RowControlEnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RowControl/RowControlEnd */ "./RowControl/RowControlEnd.jsx");
/* harmony import */ var _RowControl_RowControlStartStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RowControl/RowControlStartStyle */ "./RowControl/RowControlStartStyle.js");
/* harmony import */ var _RowControl_RowControlStart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RowControl/RowControlStart */ "./RowControl/RowControlStart.jsx");
/* harmony import */ var _RowControl_RowControlEndStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RowControl/RowControlEndStyle */ "./RowControl/RowControlEndStyle.js");
/* harmony import */ var _ClearBaseControlStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ClearBaseControlStyle */ "./ClearBaseControlStyle.js");
/* harmony import */ var _ControlWithErrorStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ControlWithErrorStyle */ "./ControlWithErrorStyle.js");
/* harmony import */ var _Modal_StickyModalActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Modal/StickyModalActions */ "./Modal/StickyModalActions.jsx");
/* harmony import */ var _Modal_ModalFooterStyle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Modal/ModalFooterStyle */ "./Modal/ModalFooterStyle.js");
/* harmony import */ var _WideLine__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./WideLine */ "./WideLine.jsx");
/* harmony import */ var _IconText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./IconText */ "./IconText.jsx");
/* harmony import */ var _FormLabeledTokenField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FormLabeledTokenField */ "./FormLabeledTokenField.jsx");
/* harmony import */ var _Popover_Hooks_useTriggerPopover__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Popover/Hooks/useTriggerPopover */ "./Popover/Hooks/useTriggerPopover.js");
/* harmony import */ var _Popover_Components_PopoverStandard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Popover/Components/PopoverStandard */ "./Popover/Components/PopoverStandard.jsx");







// RowControl






// Control styles



// Modal



// Misc





})();

(window.jfb = window.jfb || {}).components = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUdBO0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQUE7QUFFQTtBQUtBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7O0FBR0E7QUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFFQTtBQVFBO0FBQUE7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2eEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9lbW90aW9uLWlzLXByb3AtdmFsaWQuZXNtLmpzIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL0NsZWFyQmFzZUNvbnRyb2xTdHlsZS5qcyIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL0NvbnRyb2xXaXRoRXJyb3JTdHlsZS5qcyIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL0Zvcm1MYWJlbGVkVG9rZW5GaWVsZC5qc3giLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi9IZWxwLmpzeCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL0ljb25UZXh0LmpzeCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL0xhYmVsL0xhYmVsLmpzeCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL0xhYmVsL0xhYmVsV2l0aEFjdGlvbnMuanN4Iiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vTGFiZWwvUmVxdWlyZWRMYWJlbC5qc3giLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi9Nb2RhbC9Nb2RhbEZvb3RlclN0eWxlLmpzIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vTW9kYWwvU3RpY2t5Rm9vdGVyLmpzIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vTW9kYWwvU3RpY2t5TW9kYWxBY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL1BvcG92ZXIvQ29tcG9uZW50cy9Qb3BvdmVyU3RhbmRhcmQuanN4Iiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vUG9wb3Zlci9Ib29rcy91c2VUcmlnZ2VyUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL1Jlc3BvbnNpdmVNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi9Sb3dDb250cm9sL1Jvd0NvbnRyb2wuanN4Iiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vUm93Q29udHJvbC9Sb3dDb250cm9sRW5kLmpzeCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL1Jvd0NvbnRyb2wvUm93Q29udHJvbEVuZFN0eWxlLmpzIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vUm93Q29udHJvbC9Sb3dDb250cm9sU3RhcnQuanN4Iiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vUm93Q29udHJvbC9Sb3dDb250cm9sU3RhcnRTdHlsZS5qcyIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL1NvcnRhYmxlLmpzeCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL1dpZGVMaW5lLmpzeCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL0NsZWFyQmFzZUNvbnRyb2xTdHlsZS5qcz80NGJiIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vQ29udHJvbFdpdGhFcnJvclN0eWxlLmpzP2U3YjQiLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi9IZWxwLmpzeD82ODQ5Iiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vSWNvblRleHQuanN4P2E0NjYiLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi9MYWJlbC9MYWJlbC5qc3g/NzZiNiIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL0xhYmVsL0xhYmVsV2l0aEFjdGlvbnMuanN4PzBlYTQiLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi9MYWJlbC9SZXF1aXJlZExhYmVsLmpzeD84ZDdlIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vTW9kYWwvTW9kYWxGb290ZXJTdHlsZS5qcz9lNjc2Iiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vTW9kYWwvU3RpY2t5Rm9vdGVyLmpzPzdjZDUiLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi9Qb3BvdmVyL0NvbXBvbmVudHMvUG9wb3ZlclN0YW5kYXJkLmpzeD9lYjNhIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vUmVzcG9uc2l2ZU1vZGFsLmpzeD9lZGI3Iiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vUm93Q29udHJvbC9Sb3dDb250cm9sLmpzeD9hNjljIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vUm93Q29udHJvbC9Sb3dDb250cm9sRW5kU3R5bGUuanM/NDRlNiIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL1Jvd0NvbnRyb2wvUm93Q29udHJvbFN0YXJ0U3R5bGUuanM/NmQyOCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy8uL1dpZGVMaW5lLmpzeD8xMDdmIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1zb3J0YWJsZWpzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNvcnRhYmxlanMvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5lc20uanMiLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RpbnktaW52YXJpYW50L2Rpc3QvdGlueS1pbnZhcmlhbnQuZXNtLmpzIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbGluYXJpYS9jb3JlL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbGluYXJpYS9yZWFjdC9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWNvbXBvbmVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY29tcG9uZW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1jb21wb25lbnRzLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFiYnJ8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZGlzYWJsZVJlbW90ZVBsYXliYWNrfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGVudGVyS2V5SGludHxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHRyYW5zbGF0ZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluY3JlbWVudGFsfGZhbGxiYWNrfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxvcHRpb258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaXNQcm9wVmFsaWQgPSAvKiAjX19QVVJFX18gKi9tZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCB7IGlzUHJvcFZhbGlkIGFzIGRlZmF1bHQgfTtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgbWVtb2l6ZSBhcyBkZWZhdWx0IH07XG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuLyoqIEB0eXBlZGVmIHt7aWNvbjogSlNYLkVsZW1lbnQsIHNpemU/OiBudW1iZXJ9ICYgaW1wb3J0KCdAd29yZHByZXNzL3ByaW1pdGl2ZXMnKS5TVkdQcm9wc30gSWNvblByb3BzICovXG5cbi8qKlxuICogUmV0dXJuIGFuIFNWRyBpY29uLlxuICpcbiAqIEBwYXJhbSB7SWNvblByb3BzfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzIGljb24gaXMgdGhlIFNWRyBjb21wb25lbnQgdG8gcmVuZGVyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplIGlzIGEgbnVtYmVyIHNwZWNpZml5aW5nIHRoZSBpY29uIHNpemUgaW4gcGl4ZWxzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdGhlciBwcm9wcyB3aWxsIGJlIHBhc3NlZCB0byB3cmFwcGVkIFNWRyBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCdyZWFjdCcpLkZvcndhcmRlZFJlZjxIVE1MRWxlbWVudD59IHJlZiAgIFRoZSBmb3J3YXJkZWQgcmVmIHRvIHRoZSBTVkcgZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gIEljb24gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIEljb24oe1xuICBpY29uLFxuICBzaXplID0gMjQsXG4gIC4uLnByb3BzXG59LCByZWYpIHtcbiAgcmV0dXJuIGNsb25lRWxlbWVudChpY29uLCB7XG4gICAgd2lkdGg6IHNpemUsXG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIC4uLnByb3BzLFxuICAgIHJlZlxuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoSWNvbik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAbGluYXJpYS9jb3JlJztcblxuY29uc3QgQ2xlYXJCYXNlQ29udHJvbFN0eWxlID0gY3NzYFxuICAgIC5jb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGQuY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IHVuc2V0O1xuICAgICAgICBib3JkZXItdG9wOiB1bnNldDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDbGVhckJhc2VDb250cm9sU3R5bGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BsaW5hcmlhL2NvcmUnO1xuXG5jb25zdCBDbGVhckJhc2VDb250cm9sU3R5bGUgPSBjc3NgXG4gICAgLmNvbXBvbmVudHMtaW5wdXQtY29udHJvbF9fYmFja2Ryb3AuY29tcG9uZW50cy1pbnB1dC1jb250cm9sX19iYWNrZHJvcCxcbiAgICAuY29tcG9uZW50cy10ZXh0YXJlYS1jb250cm9sX19pbnB1dCxcbiAgICAuY29tcG9uZW50cy10ZXh0LWNvbnRyb2xfX2lucHV0W3R5cGU9dGV4dF0sXG4gICAgLmNvbXBvbmVudHMtdGV4dC1jb250cm9sX19pbnB1dFt0eXBlPW51bWJlcl0sXG4gICAgLmNvbXBvbmVudHMtY29tYm9ib3gtY29udHJvbF9fc3VnZ2VzdGlvbnMtY29udGFpbmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC41cHggI2NjMTgxODtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2MxODE4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDbGVhckJhc2VDb250cm9sU3R5bGU7XG4iLCJpbXBvcnQgeyBGb3JtVG9rZW5GaWVsZCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZnVuY3Rpb24gRm9ybUxhYmVsZWRUb2tlbkZpZWxkKCB7XG5cdHN1Z2dlc3Rpb25zID0gW10sXG5cdHZhbHVlID0gW10sXG5cdHZhbHVlUHJvcCA9ICd2YWx1ZScsXG5cdGxhYmVsUHJvcCA9ICdsYWJlbCcsXG5cdF9fZXhwZXJpbWVudGFsVmFsaWRhdGVJbnB1dCA9IHRva2VuID0+IHRydWUsXG5cdC4uLnByb3BzXG59ICkge1xuXG5cdGNvbnN0IFsgdmFsdWVUb0xhYmVsLCBsYWJlbFRvVmFsdWUgXSA9IHVzZU1lbW8oICgpID0+IHtcblx0XHRjb25zdCB2YWxUb0xhYmVsID0ge307XG5cdFx0Y29uc3QgbGFiZWxUb1ZhbCA9IHt9O1xuXG5cdFx0Zm9yICggY29uc3Qgc3VnZ2VzdGlvbiBvZiBzdWdnZXN0aW9ucyApIHtcblx0XHRcdGNvbnN0IHZhbCAgID0gc3VnZ2VzdGlvblsgdmFsdWVQcm9wIF0gPz8gJyc7XG5cdFx0XHRjb25zdCBsYWJlbCA9IHN1Z2dlc3Rpb25bIGxhYmVsUHJvcCBdID8/ICcnO1xuXG5cdFx0XHR2YWxUb0xhYmVsWyB2YWwgXSAgID0gbGFiZWw7XG5cdFx0XHRsYWJlbFRvVmFsWyBsYWJlbCBdID0gdmFsO1xuXHRcdH1cblxuXHRcdHJldHVybiBbIHZhbFRvTGFiZWwsIGxhYmVsVG9WYWwgXTtcblx0fSwgW10gKTtcblxuXHRjb25zdCBsYWJlbFN1Z2dlc3Rpb25zID0gdXNlTWVtbyhcblx0XHQoKSA9PiBzdWdnZXN0aW9ucy5tYXAoIGN1cnJlbnQgPT4gY3VycmVudFsgbGFiZWxQcm9wIF0gfHwgJycgKS5maWx0ZXIoXG5cdFx0XHRjdXJyZW50ID0+IChcblx0XHRcdFx0Y3VycmVudCAmJiAhdmFsdWUuaW5jbHVkZXMoIGxhYmVsVG9WYWx1ZVsgY3VycmVudCBdIClcblx0XHRcdCksXG5cdFx0KSxcblx0XHRbIHZhbHVlIF0sXG5cdCk7XG5cblx0cmV0dXJuIDxGb3JtVG9rZW5GaWVsZFxuXHRcdGRpc3BsYXlUcmFuc2Zvcm09eyBjb3VudHJ5U2x1ZyA9PiAoXG5cdFx0XHR2YWx1ZVRvTGFiZWxbIGNvdW50cnlTbHVnIF0gPz8gY291bnRyeVNsdWdcblx0XHQpIH1cblx0XHRzYXZlVHJhbnNmb3JtPXsgY291bnRyeUxhYmVsID0+IChcblx0XHRcdGxhYmVsVG9WYWx1ZVsgY291bnRyeUxhYmVsIF0gPz8gY291bnRyeUxhYmVsXG5cdFx0KSB9XG5cdFx0c3VnZ2VzdGlvbnM9eyBsYWJlbFN1Z2dlc3Rpb25zIH1cblx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRfX2V4cGVyaW1lbnRhbFZhbGlkYXRlSW5wdXQ9eyB0b2tlbiA9PiAoXG5cdFx0XHRfX2V4cGVyaW1lbnRhbFZhbGlkYXRlSW5wdXQoIGxhYmVsVG9WYWx1ZVsgdG9rZW4gXSA/PyB0b2tlbiApXG5cdFx0KSB9XG5cdFx0eyAuLi5wcm9wcyB9XG5cdC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtTGFiZWxlZFRva2VuRmllbGQ7IiwiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuXG5jb25zdCBIZWxwID0gc3R5bGVkLnBgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xuICAgIG1hcmdpbi10b3A6IDBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHA7IiwiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbmNvbnN0IFN0eWxlZEZsZXggPSBzdHlsZWQoIEZsZXggKWBcbiAgICBjb2xvcjogI2NjMTgxODtcblxuICAgICYmIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuYDtcblxuY29uc3QgZXJyb3JJY29uID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCI+XG5cdDxwYXRoXG5cdFx0ZD1cIk0xMiAxNi45OVYxN00xMiA3VjE0TTIxIDEyQzIxIDE2Ljk3MDYgMTYuOTcwNiAyMSAxMiAyMUM3LjAyOTQ0IDIxIDMgMTYuOTcwNiAzIDEyQzMgNy4wMjk0NCA3LjAyOTQ0IDMgMTIgM0MxNi45NzA2IDMgMjEgNy4wMjk0NCAyMSAxMlpcIlxuXHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMS41XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuPC9zdmc+O1xuXG5mdW5jdGlvbiBJY29uVGV4dCggeyBjaGlsZHJlbiwgaWNvbiwgLi4ucHJvcHMgfSApIHtcblx0cmV0dXJuIDxTdHlsZWRGbGV4IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgeyAuLi5wcm9wcyB9PlxuXHRcdDxJY29uIHNpemU9eyAyNCB9IGljb249eyBpY29uID8/IGVycm9ySWNvbiB9Lz5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9TdHlsZWRGbGV4Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvblRleHQ7IiwiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDsiLCJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5pbXBvcnQgUmVxdWlyZWRMYWJlbCBmcm9tICcuL1JlcXVpcmVkTGFiZWwnO1xuaW1wb3J0IFJvd0NvbnRyb2xTdGFydFN0eWxlIGZyb20gJy4uL1Jvd0NvbnRyb2wvUm93Q29udHJvbFN0YXJ0U3R5bGUnO1xuaW1wb3J0IHsgY3ggfSBmcm9tICdAbGluYXJpYS9jb3JlJztcbmltcG9ydCB7IEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5mdW5jdGlvbiBOb1N0eWxlZExhYmVsV2l0aEFjdGlvbnMoIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSApIHtcblx0cmV0dXJuIDxGbGV4XG5cdFx0anVzdGlmeT1cImZsZXgtc3RhcnRcIlxuXHRcdGNsYXNzTmFtZT17IGN4KCBSb3dDb250cm9sU3RhcnRTdHlsZSwgY2xhc3NOYW1lICkgfVxuXHRcdHsgLi4ucHJvcHMgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvRmxleD47XG59XG5cbmNvbnN0IExhYmVsV2l0aEFjdGlvbnMgPSBzdHlsZWQoIE5vU3R5bGVkTGFiZWxXaXRoQWN0aW9ucyApYFxuICAgICR7IFJlcXVpcmVkTGFiZWwgfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG5cbiAgICAgICAgLnJ0bCAmIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsV2l0aEFjdGlvbnM7IiwiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuXG5jb25zdCBSZXF1aXJlZExhYmVsID0gc3R5bGVkKCBMYWJlbCApYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnKic7XG4gICAgICAgIGZvbnQtc2l6ZTogJHsgKCB7IHNpemUgPSAxLjUgfSApID0+IHNpemUgKyAnZW0nIH07XG4gICAgICAgIGNvbG9yOiAjZDYzNjM4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG5cbiAgICAgICAgLnJ0bCAmIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICB9XG5cbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1aXJlZExhYmVsOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BsaW5hcmlhL2NvcmUnO1xuXG5jb25zdCBNb2RhbEZvb3RlclN0eWxlID0gY3NzYFxuICAgIC5jb21wb25lbnRzLW1vZGFsX19jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHVuc2V0O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsRm9vdGVyU3R5bGU7IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGxpbmFyaWEvY29yZSc7XG5cbmNvbnN0IFN0aWNreUZvb3RlciA9IGNzc2BcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDE4cHggMCAyMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICB6LWluZGV4OiAxMDA7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdGlja3lGb290ZXI7IiwiaW1wb3J0IHsgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgU3RpY2t5Rm9vdGVyIGZyb20gJy4vU3RpY2t5Rm9vdGVyJztcblxuZnVuY3Rpb24gU3RpY2t5TW9kYWxBY3Rpb25zKCB7IGNsYXNzTmFtZSA9ICcnLCAuLi5wcm9wcyB9ICkge1xuXHRyZXR1cm4gPEZsZXhcblx0XHRqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG5cdFx0Y2xhc3NOYW1lPXsgKFxuXHRcdFx0U3RpY2t5Rm9vdGVyICsgJyAnICsgY2xhc3NOYW1lXG5cdFx0KS50cmltKCkgfVxuXHRcdHsgLi4ucHJvcHMgfVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5TW9kYWxBY3Rpb25zOyIsImltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuXG5jb25zdCBQb3BvdmVyU3RhbmRhcmQgPSBzdHlsZWQoIFBvcG92ZXIgKWBcbiAgICAuY29tcG9uZW50cy1wb3BvdmVyX19jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyU3RhbmRhcmQ7IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmZ1bmN0aW9uIHVzZVRyaWdnZXJQb3BvdmVyKCkge1xuXHRjb25zdCBbIHNob3dQb3BvdmVyLCBzZXRTaG93UG9wb3ZlciBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0Y29uc3QgYnV0dG9uUmVmID0gdXNlUmVmKCk7XG5cblx0Y29uc3QgcG9wb3ZlclByb3BzID0ge1xuXHRcdGFuY2hvcjogYnV0dG9uUmVmLmN1cnJlbnQsXG5cdFx0b25Gb2N1c091dHNpZGU6IGV2ZW50ID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogV2Ugc2hvdWxkIHNraXAgaGFuZGxpbmcgaWYgZm9jdXNlZCBub2RlIGl0J3Mgbm90IGVxdWFsc1xuXHRcdFx0ICogdGhlIGJ1dHRvbiB3aGljaCB0cmlnZ2VycyBwb3BvdmVyXG5cdFx0XHQgKi9cblx0XHRcdGlmICggZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gYnV0dG9uUmVmLmN1cnJlbnQgKSB7XG5cdFx0XHRcdHNldFNob3dQb3BvdmVyKCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25DbG9zZTogKCkgPT4gc2V0U2hvd1BvcG92ZXIoIGZhbHNlICksXG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRyZWY6IGJ1dHRvblJlZixcblx0XHRzZXRTaG93UG9wb3Zlcixcblx0XHRzaG93UG9wb3Zlcixcblx0XHRwb3BvdmVyUHJvcHMsXG5cdH07XG59XG5cbndpbmRvdy5KZXRGQkhvb2tzID0gd2luZG93LkpldEZCSG9va3MgfHwge307XG53aW5kb3cuSmV0RkJIb29rcy51c2VUcmlnZ2VyUG9wb3ZlciA9IHVzZVRyaWdnZXJQb3BvdmVyO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUcmlnZ2VyUG9wb3ZlcjsiLCJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmNvbnN0IFJlc3BvbnNpdmVNb2RhbCA9IHN0eWxlZCggTW9kYWwgKWBcbiAgICAmJiB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogNTV2dztcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVNb2RhbDsiLCJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCBDbGVhckJhc2VDb250cm9sU3R5bGUgZnJvbSAnLi4vQ2xlYXJCYXNlQ29udHJvbFN0eWxlJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi9MYWJlbC9MYWJlbCc7XG5pbXBvcnQgeyB1c2VJbnN0YW5jZUlkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IFJvd0NvbnRyb2xFbmRTdHlsZSBmcm9tICcuL1Jvd0NvbnRyb2xFbmRTdHlsZSc7XG5pbXBvcnQgUm93Q29udHJvbFN0YXJ0U3R5bGUgZnJvbSAnLi9Sb3dDb250cm9sU3RhcnRTdHlsZSc7XG5cbmZ1bmN0aW9uIFVuRm9yd2FyZGVkUm93Q29udHJvbCgge1xuXHRjaGlsZHJlbixcblx0Y2xhc3NOYW1lLFxuXHRjcmVhdGVJZCA9IHRydWUsXG5cdGNvbnRyb2xTaXplID0gMyxcblx0Li4ucHJvcHNcbn0sIHJlZiApIHtcblx0Y29uc3QgaHRtbElkID0gdXNlSW5zdGFuY2VJZChcblx0XHRVbkZvcndhcmRlZFJvd0NvbnRyb2wsXG5cdFx0J2pmYi1jb250cm9sJyxcblx0XHRjcmVhdGVJZCA/ICcnIDogJzEnLFxuXHQpO1xuXG5cdHJldHVybiA8RmxleFxuXHRcdHJlZj17IHJlZiB9XG5cdFx0Y2xhc3NOYW1lPXsgWyBjbGFzc05hbWUsIENsZWFyQmFzZUNvbnRyb2xTdHlsZSBdLmpvaW4oICcgJyApIH1cblx0XHRnYXA9eyAyIH1cblx0XHRhbGlnbj1cImZsZXgtc3RhcnRcIlxuXHRcdHsgLi4ucHJvcHMgfVxuXHQ+XG5cdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW5cblx0XHQgID8gY2hpbGRyZW4oIHsgaWQ6IGh0bWxJZCB9IClcblx0XHQgIDogY2hpbGRyZW4gfVxuXHQ8L0ZsZXg+O1xufVxuXG5jb25zdCBVblN0eWxlZFJvd0NvbnRyb2wgPSBmb3J3YXJkUmVmKCBVbkZvcndhcmRlZFJvd0NvbnRyb2wgKTtcblxuY29uc3QgUm93Q29udHJvbCA9IHN0eWxlZCggVW5TdHlsZWRSb3dDb250cm9sIClgXG4gICAgJiA+ICR7IExhYmVsIH0sICYgPiAuJHsgUm93Q29udHJvbFN0YXJ0U3R5bGUgfSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgJiA+IC5jb21wb25lbnRzLWJhc2UtY29udHJvbCxcbiAgICAmID4gLiR7IFJvd0NvbnRyb2xFbmRTdHlsZSB9LFxuICAgICYgPiAuY29tcG9uZW50cy1mb3JtLXRva2VuLWZpZWxkIHtcbiAgICAgICAgZmxleDogJHsgKCB7IGNvbnRyb2xTaXplID0gMyB9ICkgPT4gY29udHJvbFNpemUgfTtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBSb3dDb250cm9sO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgeyBjeCB9IGZyb20gJ0BsaW5hcmlhL2NvcmUnO1xuaW1wb3J0IENvbnRyb2xXaXRoRXJyb3JTdHlsZSBmcm9tICcuLi9Db250cm9sV2l0aEVycm9yU3R5bGUnO1xuaW1wb3J0IFJvd0NvbnRyb2xFbmRTdHlsZSBmcm9tICcuL1Jvd0NvbnRyb2xFbmRTdHlsZSc7XG5pbXBvcnQgSWNvblRleHQgZnJvbSAnLi4vSWNvblRleHQnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmZ1bmN0aW9uIFJvd0NvbnRyb2xFbmQoIHtcblx0Y2hpbGRyZW4sXG5cdGhhc0Vycm9yID0gZmFsc2UsXG5cdHNob3dEZWZhdWx0Tm90aWNlID0gdHJ1ZSxcblx0ZXJyb3JUZXh0PVwiXCIsXG5cdGNsYXNzTmFtZSxcblx0Li4ucHJvcHNcbn0gKSB7XG5cblx0Y29uc3QgZGVmYXVsdEVycm9yVGV4dCA9IF9fKFxuXHRcdCdQbGVhc2UgZmlsbCB0aGlzIHJlcXVpcmVkIGZpZWxkJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdClcblxuXHRsZXQgbmV3RXJyb3JUZXh0ID0gJyc7XG5cblx0aWYgKCBlcnJvclRleHQubGVuZ3RoICkge1xuXHRcdG5ld0Vycm9yVGV4dCA9IF9fKFxuXHRcdFx0ZXJyb3JUZXh0LFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdClcblx0fVxuXG5cdHJldHVybiA8RmxleFxuXHRcdGNsYXNzTmFtZT17IGN4KFxuXHRcdFx0Um93Q29udHJvbEVuZFN0eWxlLFxuXHRcdFx0aGFzRXJyb3IgJiYgQ29udHJvbFdpdGhFcnJvclN0eWxlLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdCkgfVxuXHRcdGRpcmVjdGlvbj1cImNvbHVtblwiXG5cdFx0eyAuLi5wcm9wcyB9XG5cdD5cblx0XHR7IGhhc0Vycm9yICYmIHNob3dEZWZhdWx0Tm90aWNlICYmIDxJY29uVGV4dD5cblx0XHRcdHsgbmV3RXJyb3JUZXh0Lmxlbmd0aCA/IG5ld0Vycm9yVGV4dCA6IGRlZmF1bHRFcnJvclRleHQgfVxuXHRcdDwvSWNvblRleHQ+IH1cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9GbGV4Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm93Q29udHJvbEVuZDsiLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAbGluYXJpYS9jb3JlJztcblxuY29uc3QgUm93Q29udHJvbEVuZFN0eWxlID0gY3NzYFxuICAgIG1hcmdpbjogdW5zZXQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBSb3dDb250cm9sRW5kU3R5bGU7IiwiaW1wb3J0IHsgY3ggfSBmcm9tICdAbGluYXJpYS9jb3JlJztcbmltcG9ydCBSb3dDb250cm9sU3RhcnRTdHlsZSBmcm9tICcuL1Jvd0NvbnRyb2xTdGFydFN0eWxlJztcblxuZnVuY3Rpb24gUm93Q29udHJvbFN0YXJ0KCB7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSApIHtcblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9eyBjeCggY2xhc3NOYW1lLCBSb3dDb250cm9sU3RhcnRTdHlsZSApIH1cblx0XHR7IC4uLnByb3BzIH1cblx0Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvd0NvbnRyb2xTdGFydDsiLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAbGluYXJpYS9jb3JlJztcblxuY29uc3QgUm93Q29udHJvbFN0YXJ0U3R5bGUgPSBjc3NgXG4gICAgbWFyZ2luOiB1bnNldDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFJvd0NvbnRyb2xTdGFydFN0eWxlOyIsImltcG9ydCB7IFJlYWN0U29ydGFibGUgfSBmcm9tICdyZWFjdC1zb3J0YWJsZWpzJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RTb3J0YWJsZTsiLCJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5cbmNvbnN0IFdpZGVMaW5lID0gc3R5bGVkLmhyYFxuICAgIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgV2lkZUxpbmU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyICQ4ekhVbyRzb3J0YWJsZWpzID0gcmVxdWlyZShcInNvcnRhYmxlanNcIik7XG52YXIgJDh6SFVvJGNsYXNzbmFtZXMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcbnZhciAkOHpIVW8kcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgJDh6SFVvJHRpbnlpbnZhcmlhbnQgPSByZXF1aXJlKFwidGlueS1pbnZhcmlhbnRcIik7XG5cbmZ1bmN0aW9uICRwYXJjZWwkaW50ZXJvcERlZmF1bHQoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhLmRlZmF1bHQgOiBhO1xufVxuZnVuY3Rpb24gJHBhcmNlbCRleHBvcnQoZSwgbiwgdiwgcykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgbiwge2dldDogdiwgc2V0OiBzLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9KTtcbn1cbmZ1bmN0aW9uICRwYXJjZWwkZXhwb3J0V2lsZGNhcmQoZGVzdCwgc291cmNlKSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufVxuXG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJTb3J0YWJsZVwiLCAoKSA9PiAkODgyYjZkOTMwNzA5MDViMyRyZV9leHBvcnQkU29ydGFibGUpO1xuJHBhcmNlbCRleHBvcnQobW9kdWxlLmV4cG9ydHMsIFwiRGlyZWN0aW9uXCIsICgpID0+ICQ4ODJiNmQ5MzA3MDkwNWIzJHJlX2V4cG9ydCREaXJlY3Rpb24pO1xuJHBhcmNlbCRleHBvcnQobW9kdWxlLmV4cG9ydHMsIFwiRE9NUmVjdFwiLCAoKSA9PiAkODgyYjZkOTMwNzA5MDViMyRyZV9leHBvcnQkRE9NUmVjdCk7XG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJHcm91cE9wdGlvbnNcIiwgKCkgPT4gJDg4MmI2ZDkzMDcwOTA1YjMkcmVfZXhwb3J0JEdyb3VwT3B0aW9ucyk7XG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJNb3ZlRXZlbnRcIiwgKCkgPT4gJDg4MmI2ZDkzMDcwOTA1YjMkcmVfZXhwb3J0JE1vdmVFdmVudCk7XG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJPcHRpb25zXCIsICgpID0+ICQ4ODJiNmQ5MzA3MDkwNWIzJHJlX2V4cG9ydCRPcHRpb25zKTtcbiRwYXJjZWwkZXhwb3J0KG1vZHVsZS5leHBvcnRzLCBcIlB1bGxSZXN1bHRcIiwgKCkgPT4gJDg4MmI2ZDkzMDcwOTA1YjMkcmVfZXhwb3J0JFB1bGxSZXN1bHQpO1xuJHBhcmNlbCRleHBvcnQobW9kdWxlLmV4cG9ydHMsIFwiUHV0UmVzdWx0XCIsICgpID0+ICQ4ODJiNmQ5MzA3MDkwNWIzJHJlX2V4cG9ydCRQdXRSZXN1bHQpO1xuJHBhcmNlbCRleHBvcnQobW9kdWxlLmV4cG9ydHMsIFwiU29ydGFibGVFdmVudFwiLCAoKSA9PiAkODgyYjZkOTMwNzA5MDViMyRyZV9leHBvcnQkU29ydGFibGVFdmVudCk7XG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJTb3J0YWJsZU9wdGlvbnNcIiwgKCkgPT4gJDg4MmI2ZDkzMDcwOTA1YjMkcmVfZXhwb3J0JFNvcnRhYmxlT3B0aW9ucyk7XG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJVdGlsc1wiLCAoKSA9PiAkODgyYjZkOTMwNzA5MDViMyRyZV9leHBvcnQkVXRpbHMpO1xuJHBhcmNlbCRleHBvcnQobW9kdWxlLmV4cG9ydHMsIFwiUmVhY3RTb3J0YWJsZVwiLCAoKSA9PiAkN2ZlOGUzZWE1NzJiZGE3YSRleHBvcnQkMTFiYmVkOWVlMDAxMmMxMyk7XG5cblxuXG5cblxuZnVuY3Rpb24gJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JDFkMGFhMTYwNDMyZGZlYTUobm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudEVsZW1lbnQgIT09IG51bGwpIG5vZGUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uICRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCQ2ZDI0MGZhYTUxYWE1NjJmKHBhcmVudCwgbmV3Q2hpbGQsIGluZGV4KSB7XG4gICAgY29uc3QgcmVmQ2hpbGQgPSBwYXJlbnQuY2hpbGRyZW5baW5kZXhdIHx8IG51bGw7XG4gICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdDaGlsZCwgcmVmQ2hpbGQpO1xufVxuZnVuY3Rpb24gJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JGQ3ZDc0MjgxNmMyOGNmOTEoY3VzdG9tcykge1xuICAgICRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCQ3N2Y0OWEyNTYwMjFjOGRlKGN1c3RvbXMpO1xuICAgICRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCRhNjE3N2Q1ODI5ZjcwZWJjKGN1c3RvbXMpO1xufVxuZnVuY3Rpb24gJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JDc3ZjQ5YTI1NjAyMWM4ZGUoY3VzdG9tcykge1xuICAgIGN1c3RvbXMuZm9yRWFjaCgoY3Vycik9PiRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCQxZDBhYTE2MDQzMmRmZWE1KGN1cnIuZWxlbWVudCkpO1xufVxuZnVuY3Rpb24gJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JGE2MTc3ZDU4MjlmNzBlYmMoY3VzdG9tcykge1xuICAgIGN1c3RvbXMuZm9yRWFjaCgoY3Vycik9PntcbiAgICAgICAgJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JDZkMjQwZmFhNTFhYTU2MmYoY3Vyci5wYXJlbnRFbGVtZW50LCBjdXJyLmVsZW1lbnQsIGN1cnIub2xkSW5kZXgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JDQ2NTVlZmU3MDBmODg3YShldnQsIGxpc3QpIHtcbiAgICBjb25zdCBtb2RlID0gJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JDFmYzBmNjIwNTgyOWUxOWMoZXZ0KTtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0ge1xuICAgICAgICBwYXJlbnRFbGVtZW50OiBldnQuZnJvbVxuICAgIH07XG4gICAgbGV0IGN1c3RvbSA9IFtdO1xuICAgIHN3aXRjaChtb2RlKXtcbiAgICAgICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi8gY29uc3QgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBldnQuaXRlbSxcbiAgICAgICAgICAgICAgICBuZXdJbmRleDogZXZ0Lm5ld0luZGV4LFxuICAgICAgICAgICAgICAgIG9sZEluZGV4OiBldnQub2xkSW5kZXgsXG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudDogZXZ0LmZyb21cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjdXN0b20gPSBbXG4gICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic3dhcFwiOlxuICAgICAgICAgICAgY29uc3QgZHJhZyA9IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBldnQuaXRlbSxcbiAgICAgICAgICAgICAgICBvbGRJbmRleDogZXZ0Lm9sZEluZGV4LFxuICAgICAgICAgICAgICAgIG5ld0luZGV4OiBldnQubmV3SW5kZXgsXG4gICAgICAgICAgICAgICAgLi4ucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHN3YXAgPSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZXZ0LnN3YXBJdGVtLFxuICAgICAgICAgICAgICAgIG9sZEluZGV4OiBldnQubmV3SW5kZXgsXG4gICAgICAgICAgICAgICAgbmV3SW5kZXg6IGV2dC5vbGRJbmRleCxcbiAgICAgICAgICAgICAgICAuLi5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY3VzdG9tID0gW1xuICAgICAgICAgICAgICAgIGRyYWcsXG4gICAgICAgICAgICAgICAgc3dhcFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibXVsdGlkcmFnXCI6XG4gICAgICAgICAgICBjdXN0b20gPSBldnQub2xkSW5kaWNpZXMubWFwKChjdXJyLCBpbmRleCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGN1cnIubXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgb2xkSW5kZXg6IGN1cnIuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIG5ld0luZGV4OiBldnQubmV3SW5kaWNpZXNbaW5kZXhdLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAuLi5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgKi8gY29uc3QgY3VzdG9tcyA9ICRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCRiYzA2YTNhZjdkYzY1ZjUzKGN1c3RvbSwgbGlzdCk7XG4gICAgcmV0dXJuIGN1c3RvbXM7XG59XG5mdW5jdGlvbiAkZWIwM2U3NGY4ZjdkYjFmMyRleHBvcnQkYzI1Y2Y4MDgwYmQzMDVlYyhub3JtYWxpemVkLCBsaXN0KSB7XG4gICAgY29uc3QgYSA9ICRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCRiZTJkYTk1ZTYxNjdiMGJkKG5vcm1hbGl6ZWQsIGxpc3QpO1xuICAgIGNvbnN0IGIgPSAkZWIwM2U3NGY4ZjdkYjFmMyRleHBvcnQkZWNhODUxZWU2NWFlMTdlNChub3JtYWxpemVkLCBhKTtcbiAgICByZXR1cm4gYjtcbn1cbmZ1bmN0aW9uICRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCRiZTJkYTk1ZTYxNjdiMGJkKG5vcm1hbGl6ZWQsIGxpc3QpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gW1xuICAgICAgICAuLi5saXN0XG4gICAgXTtcbiAgICBub3JtYWxpemVkLmNvbmNhdCgpLnJldmVyc2UoKS5mb3JFYWNoKChjdXJyKT0+bmV3TGlzdC5zcGxpY2UoY3Vyci5vbGRJbmRleCwgMSkpO1xuICAgIHJldHVybiBuZXdMaXN0O1xufVxuZnVuY3Rpb24gJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JGVjYTg1MWVlNjVhZTE3ZTQobm9ybWFsaXplZCwgbGlzdCwgZXZ0LCBjbG9uZSkge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBbXG4gICAgICAgIC4uLmxpc3RcbiAgICBdO1xuICAgIG5vcm1hbGl6ZWQuZm9yRWFjaCgoY3Vycik9PntcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGNsb25lICYmIGV2dCAmJiBjbG9uZShjdXJyLml0ZW0sIGV2dCk7XG4gICAgICAgIG5ld0xpc3Quc3BsaWNlKGN1cnIubmV3SW5kZXgsIDAsIG5ld0l0ZW0gfHwgY3Vyci5pdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3TGlzdDtcbn1cbmZ1bmN0aW9uICRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCQxZmMwZjYyMDU4MjllMTljKGV2dCkge1xuICAgIGlmIChldnQub2xkSW5kaWNpZXMgJiYgZXZ0Lm9sZEluZGljaWVzLmxlbmd0aCA+IDApIHJldHVybiBcIm11bHRpZHJhZ1wiO1xuICAgIGlmIChldnQuc3dhcEl0ZW0pIHJldHVybiBcInN3YXBcIjtcbiAgICByZXR1cm4gXCJub3JtYWxcIjtcbn1cbmZ1bmN0aW9uICRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCRiYzA2YTNhZjdkYzY1ZjUzKGlucHV0cywgbGlzdCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBpbnB1dHMubWFwKChjdXJyKT0+KHtcbiAgICAgICAgICAgIC4uLmN1cnIsXG4gICAgICAgICAgICBpdGVtOiBsaXN0W2N1cnIub2xkSW5kZXhdXG4gICAgICAgIH0pKS5zb3J0KChhLCBiKT0+YS5vbGRJbmRleCAtIGIub2xkSW5kZXgpO1xuICAgIHJldHVybiBub3JtYWxpemVkO1xufVxuZnVuY3Rpb24gJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JDc1NTNjODFlNjJlMzFiN2UocHJvcHMpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqLyBjb25zdCB7IGxpc3Q6IC8vIHJlYWN0IHNvcnRhYmxlIHByb3BzXG4gICAgbGlzdCAsIHNldExpc3Q6IHNldExpc3QgLCBjaGlsZHJlbjogY2hpbGRyZW4gLCB0YWc6IHRhZyAsIHN0eWxlOiBzdHlsZSAsIGNsYXNzTmFtZTogY2xhc3NOYW1lICwgY2xvbmU6IGNsb25lICwgb25BZGQ6IC8vIHNvcnRhYmxlIG9wdGlvbnMgdGhhdCBoYXZlIG1ldGhvZHMgd2Ugd2FudCB0byBvdmVyd3JpdGVcbiAgICBvbkFkZCAsIG9uQ2hhbmdlOiBvbkNoYW5nZSAsIG9uQ2hvb3NlOiBvbkNob29zZSAsIG9uQ2xvbmU6IG9uQ2xvbmUgLCBvbkVuZDogb25FbmQgLCBvbkZpbHRlcjogb25GaWx0ZXIgLCBvblJlbW92ZTogb25SZW1vdmUgLCBvblNvcnQ6IG9uU29ydCAsIG9uU3RhcnQ6IG9uU3RhcnQgLCBvblVuY2hvb3NlOiBvblVuY2hvb3NlICwgb25VcGRhdGU6IG9uVXBkYXRlICwgb25Nb3ZlOiBvbk1vdmUgLCBvblNwaWxsOiBvblNwaWxsICwgb25TZWxlY3Q6IG9uU2VsZWN0ICwgb25EZXNlbGVjdDogb25EZXNlbGVjdCAsIC4uLm9wdGlvbnMgfSA9IHByb3BzO1xuICAgIC8qIGVzbGludC1lbmFibGUgKi8gcmV0dXJuIG9wdGlvbnM7XG59XG5cblxuLyoqIEhvbGRzIGEgZ2xvYmFsIHJlZmVyZW5jZSBmb3Igd2hpY2ggcmVhY3QgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkICovIC8vIEB0b2RvIC0gdXNlIGNvbnRleHQgdG8gbWFuYWdlIHRoaXMuIEhvdyBkb2VzIG9uZSB1c2UgMiBkaWZmZXJlbnQgcHJvdmlkZXJzP1xuY29uc3QgJDdmZThlM2VhNTcyYmRhN2EkdmFyJHN0b3JlID0ge1xuICAgIGRyYWdnaW5nOiBudWxsXG59O1xuY2xhc3MgJDdmZThlM2VhNTcyYmRhN2EkZXhwb3J0JDExYmJlZDllZTAwMTJjMTMgZXh0ZW5kcyAoMCwgJDh6SFVvJHJlYWN0LkNvbXBvbmVudCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqLyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjbG9uZTogKGl0ZW0pPT5pdGVtXG4gICAgfTtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy8gQHRvZG8gZm9yd2FyZCByZWYgdGhpcyBjb21wb25lbnRcbiAgICAgICAgdGhpcy5yZWYgPSAvKiNfX1BVUkVfXyovICgwLCAkOHpIVW8kcmVhY3QuY3JlYXRlUmVmKSgpO1xuICAgICAgICAvLyBtYWtlIGFsbCBzdGF0ZSBmYWxzZSBiZWNhdXNlIHdlIGNhbid0IGNoYW5nZSBzb3J0YWJsZSB1bmxlc3MgYSBtb3VzZSBnZXN0dXJlIGlzIG1hZGUuXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbXG4gICAgICAgICAgICAuLi5wcm9wcy5saXN0XG4gICAgICAgIF0ubWFwKChpdGVtKT0+T2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgY2hvc2VuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgcHJvcHMuc2V0TGlzdChuZXdMaXN0LCB0aGlzLnNvcnRhYmxlLCAkN2ZlOGUzZWE1NzJiZGE3YSR2YXIkc3RvcmUpO1xuICAgICAgICAoMCwgKCRwYXJjZWwkaW50ZXJvcERlZmF1bHQoJDh6SFVvJHRpbnlpbnZhcmlhbnQpKSkoLy9AdHMtZXhwZWN0LWVycm9yOiBEb2Vzbid0IGV4aXN0LiBXaWxsIGRlcHJlY2F0ZSBzb29uLlxuICAgICAgICAhcHJvcHMucGx1Z2lucywgYFxuUGx1Z2lucyBwcm9wIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQuXG5JbnN0ZWFkLCBtb3VudCBpdCB3aXRoIFwiU29ydGFibGUubW91bnQobmV3IE11bHRpRHJhZygpKVwiXG5QbGVhc2UgcmVhZCB0aGUgdXBkYXRlZCBSRUFETUUubWQgYXQgaHR0cHM6Ly9naXRodWIuY29tL1NvcnRhYmxlSlMvcmVhY3Qtc29ydGFibGVqcy5cbiAgICAgIGApO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmLmN1cnJlbnQgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHRoaXMubWFrZU9wdGlvbnMoKTtcbiAgICAgICAgKDAsICgkcGFyY2VsJGludGVyb3BEZWZhdWx0KCQ4ekhVbyRzb3J0YWJsZWpzKSkpLmNyZWF0ZSh0aGlzLnJlZi5jdXJyZW50LCBuZXdPcHRpb25zKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkICYmIHRoaXMuc29ydGFibGUpIHRoaXMuc29ydGFibGUub3B0aW9uKFwiZGlzYWJsZWRcIiwgdGhpcy5wcm9wcy5kaXNhYmxlZCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0YWc6IHRhZyAsIHN0eWxlOiBzdHlsZSAsIGNsYXNzTmFtZTogY2xhc3NOYW1lICwgaWQ6IGlkICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY2xhc3NpY1Byb3BzID0ge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgICBpZDogaWRcbiAgICAgICAgfTtcbiAgICAgICAgLy8gaWYgbm8gdGFnLCBkZWZhdWx0IHRvIGEgYGRpdmAgZWxlbWVudC5cbiAgICAgICAgY29uc3QgbmV3VGFnID0gIXRhZyB8fCB0YWcgPT09IG51bGwgPyBcImRpdlwiIDogdGFnO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyAoMCwgJDh6SFVvJHJlYWN0LmNyZWF0ZUVsZW1lbnQpKG5ld1RhZywge1xuICAgICAgICAgICAgLy8gQHRvZG8gLSBmaW5kIGEgd2F5IChwZXJoYXBzIHdpdGggdGhlIGNhbGxiYWNrKSB0byBhbGxvdyBBbnREIGNvbXBvbmVudHMgdG8gd29ya1xuICAgICAgICAgICAgcmVmOiB0aGlzLnJlZixcbiAgICAgICAgICAgIC4uLmNsYXNzaWNQcm9wc1xuICAgICAgICB9LCB0aGlzLmdldENoaWxkcmVuKCkpO1xuICAgIH1cbiAgICBnZXRDaGlsZHJlbigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogY2hpbGRyZW4gLCBkYXRhSWRBdHRyOiBkYXRhSWRBdHRyICwgc2VsZWN0ZWRDbGFzczogc2VsZWN0ZWRDbGFzcyA9IFwic29ydGFibGUtc2VsZWN0ZWRcIiAsIGNob3NlbkNsYXNzOiBjaG9zZW5DbGFzcyA9IFwic29ydGFibGUtY2hvc2VuXCIgLCBkcmFnQ2xhc3M6IC8qIGVzbGludC1kaXNhYmxlICovIGRyYWdDbGFzcyA9IFwic29ydGFibGUtZHJhZ1wiICwgZmFsbGJhY2tDbGFzczogZmFsbGJhY2tDbGFzcyA9IFwic29ydGFibGUtZmFsYmFja1wiICwgZ2hvc3RDbGFzczogZ2hvc3RDbGFzcyA9IFwic29ydGFibGUtZ2hvc3RcIiAsIHN3YXBDbGFzczogc3dhcENsYXNzID0gXCJzb3J0YWJsZS1zd2FwLWhpZ2hsaWdodFwiICwgZmlsdGVyOiAvKiBlc2xpbnQtZW5hYmxlICovIGZpbHRlciA9IFwic29ydGFibGUtZmlsdGVyXCIgLCBsaXN0OiBsaXN0ICwgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvLyBpZiBubyBjaGlsZHJlbiwgZG9uJ3QgZG8gYW55dGhpbmcuXG4gICAgICAgIGlmICghY2hpbGRyZW4gfHwgY2hpbGRyZW4gPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGRhdGFpZCA9IGRhdGFJZEF0dHIgfHwgXCJkYXRhLWlkXCI7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqLyByZXR1cm4gKDAsICQ4ekhVbyRyZWFjdC5DaGlsZHJlbikubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbGlzdFtpbmRleF0gfHwge307XG4gICAgICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogcHJldkNsYXNzTmFtZSAgfSA9IGNoaWxkLnByb3BzO1xuICAgICAgICAgICAgLy8gQHRvZG8gLSBoYW5kbGUgdGhlIGZ1bmN0aW9uIGlmIGF2YWxhYmxlLiBJIGRvbid0IHRoaW5rIGFueW9uZSB3aWxsIGJlIGRvaW5nIHRoaXMgc29vbi5cbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdHlwZW9mIGZpbHRlciA9PT0gXCJzdHJpbmdcIiAmJiB7XG4gICAgICAgICAgICAgICAgW2ZpbHRlci5yZXBsYWNlKFwiLlwiLCBcIlwiKV06ICEhaXRlbS5maWx0ZXJlZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9ICgwLCAoJHBhcmNlbCRpbnRlcm9wRGVmYXVsdCgkOHpIVW8kY2xhc3NuYW1lcykpKShwcmV2Q2xhc3NOYW1lLCB7XG4gICAgICAgICAgICAgICAgW3NlbGVjdGVkQ2xhc3NdOiBpdGVtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIFtjaG9zZW5DbGFzc106IGl0ZW0uY2hvc2VuLFxuICAgICAgICAgICAgICAgIC4uLmZpbHRlcmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovICgwLCAkOHpIVW8kcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICAgICAgICAgIFtkYXRhaWRdOiBjaGlsZC5rZXksXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgdGhlIGBzb3J0YWJsZWAgcHJvcGVydHkgdG8gdGhpcyBjb21wb25lbnQgKi8gZ2V0IHNvcnRhYmxlKCkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMucmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGVsKS5maW5kKChrKT0+ay5pbmNsdWRlcyhcIlNvcnRhYmxlXCIpKTtcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiBudWxsO1xuICAgICAgICAvL0B0cy1leHBlY3QtZXJyb3I6IGZpeCBtZS5cbiAgICAgICAgcmV0dXJuIGVsW2tleV07XG4gICAgfVxuICAgIC8qKiBDb252ZXJ0cyBhbGwgdGhlIHByb3BzIGZyb20gYFJlYWN0U29ydGFibGVgIGludG8gdGhlIGBvcHRpb25zYCBvYmplY3QgdGhhdCBgU29ydGFibGUuY3JlYXRlKGVsLCBbb3B0aW9uc10pYCBjYW4gdXNlLiAqLyBtYWtlT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgRE9NSGFuZGxlcnMgPSBbXG4gICAgICAgICAgICBcIm9uQWRkXCIsXG4gICAgICAgICAgICBcIm9uQ2hvb3NlXCIsXG4gICAgICAgICAgICBcIm9uRGVzZWxlY3RcIixcbiAgICAgICAgICAgIFwib25FbmRcIixcbiAgICAgICAgICAgIFwib25SZW1vdmVcIixcbiAgICAgICAgICAgIFwib25TZWxlY3RcIixcbiAgICAgICAgICAgIFwib25TcGlsbFwiLFxuICAgICAgICAgICAgXCJvblN0YXJ0XCIsXG4gICAgICAgICAgICBcIm9uVW5jaG9vc2VcIixcbiAgICAgICAgICAgIFwib25VcGRhdGVcIiwgXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IE5vbkRPTUhhbmRsZXJzID0gW1xuICAgICAgICAgICAgXCJvbkNoYW5nZVwiLFxuICAgICAgICAgICAgXCJvbkNsb25lXCIsXG4gICAgICAgICAgICBcIm9uRmlsdGVyXCIsXG4gICAgICAgICAgICBcIm9uU29ydFwiLCBcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9ICgwLCAkZWIwM2U3NGY4ZjdkYjFmMyRleHBvcnQkNzU1M2M4MWU2MmUzMWI3ZSkodGhpcy5wcm9wcyk7XG4gICAgICAgIERPTUhhbmRsZXJzLmZvckVhY2goKG5hbWUpPT5uZXdPcHRpb25zW25hbWVdID0gdGhpcy5wcmVwYXJlT25IYW5kbGVyUHJvcEFuZERPTShuYW1lKSk7XG4gICAgICAgIE5vbkRPTUhhbmRsZXJzLmZvckVhY2goKG5hbWUpPT5uZXdPcHRpb25zW25hbWVdID0gdGhpcy5wcmVwYXJlT25IYW5kbGVyUHJvcChuYW1lKSk7XG4gICAgICAgIC8qKiBvbk1vdmUgaGFzIDIgYXJndW1lbnRzIGFuZCBuZWVkcyB0byBiZSBoYW5kbGVkIHNlcGVyYXRlbHkuICovIGNvbnN0IG9uTW92ZTEgPSAoZXZ0LCBvcmlnaW5hbEV2dCk9PntcbiAgICAgICAgICAgIGNvbnN0IHsgb25Nb3ZlOiBvbk1vdmUgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gZXZ0LndpbGxJbnNlcnRBZnRlciB8fCAtMTtcbiAgICAgICAgICAgIGlmICghb25Nb3ZlKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb25Nb3ZlKGV2dCwgb3JpZ2luYWxFdnQsIHRoaXMuc29ydGFibGUsICQ3ZmU4ZTNlYTU3MmJkYTdhJHZhciRzdG9yZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLm5ld09wdGlvbnMsXG4gICAgICAgICAgICBvbk1vdmU6IG9uTW92ZTFcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqIFByZXBhcmVzIGEgbWV0aG9kIHRoYXQgd2lsbCBiZSB1c2VkIGluIHRoZSBzb3J0YWJsZSBvcHRpb25zIHRvIGNhbGwgYW4gYG9uW0hhbmRsZXJdYCBwcm9wICYgYW4gYG9uW0hhbmRsZXJdYCBSZWFjdFNvcnRhYmxlIG1ldGhvZC4gICovIHByZXBhcmVPbkhhbmRsZXJQcm9wQW5kRE9NKGV2dE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChldnQpPT57XG4gICAgICAgICAgICAvLyBjYWxsIHRoZSBjb21wb25lbnQgcHJvcFxuICAgICAgICAgICAgdGhpcy5jYWxsT25IYW5kbGVyUHJvcChldnQsIGV2dE5hbWUpO1xuICAgICAgICAgICAgLy8gY2FsbHMgc3RhdGUgY2hhbmdlXG4gICAgICAgICAgICAvL0B0cy1leHBlY3QtZXJyb3I6IHVudGlsIEB0eXBlcyBtdWx0aWRyYWcgaXRlbSBpcyBpblxuICAgICAgICAgICAgdGhpc1tldnROYW1lXShldnQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKiogUHJlcGFyZXMgYSBtZXRob2QgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIHNvcnRhYmxlIG9wdGlvbnMgdG8gY2FsbCBhbiBgb25bSGFuZGxlcl1gIHByb3AgKi8gcHJlcGFyZU9uSGFuZGxlclByb3AoZXZ0TmFtZSkge1xuICAgICAgICByZXR1cm4gKGV2dCk9PntcbiAgICAgICAgICAgIC8vIGNhbGwgdGhlIGNvbXBvbmVudCBwcm9wXG4gICAgICAgICAgICB0aGlzLmNhbGxPbkhhbmRsZXJQcm9wKGV2dCwgZXZ0TmFtZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKiBDYWxscyB0aGUgYHByb3BzLm9uW0hhbmRsZXJdYCBmdW5jdGlvbiAqLyBjYWxsT25IYW5kbGVyUHJvcChldnQsIGV2dE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvcEV2ZW50ID0gdGhpcy5wcm9wc1tldnROYW1lXTtcbiAgICAgICAgaWYgKHByb3BFdmVudCkgcHJvcEV2ZW50KGV2dCwgdGhpcy5zb3J0YWJsZSwgJDdmZThlM2VhNTcyYmRhN2EkdmFyJHN0b3JlKTtcbiAgICB9XG4gICAgLy8gU09SVEFCTEUgRE9NIEhBTkRMSU5HXG4gICAgb25BZGQoZXZ0KSB7XG4gICAgICAgIGNvbnN0IHsgbGlzdDogbGlzdCAsIHNldExpc3Q6IHNldExpc3QgLCBjbG9uZTogY2xvbmUgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi8gY29uc3Qgb3RoZXJMaXN0ID0gW1xuICAgICAgICAgICAgLi4uJDdmZThlM2VhNTcyYmRhN2EkdmFyJHN0b3JlLmRyYWdnaW5nLnByb3BzLmxpc3RcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgY3VzdG9tcyA9ICgwLCAkZWIwM2U3NGY4ZjdkYjFmMyRleHBvcnQkNDY1NWVmZTcwMGY4ODdhKShldnQsIG90aGVyTGlzdCk7XG4gICAgICAgICgwLCAkZWIwM2U3NGY4ZjdkYjFmMyRleHBvcnQkNzdmNDlhMjU2MDIxYzhkZSkoY3VzdG9tcyk7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSAoMCwgJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JGVjYTg1MWVlNjVhZTE3ZTQpKGN1c3RvbXMsIGxpc3QsIGV2dCwgY2xvbmUpLm1hcCgoaXRlbSk9Pk9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICBzZXRMaXN0KG5ld0xpc3QsIHRoaXMuc29ydGFibGUsICQ3ZmU4ZTNlYTU3MmJkYTdhJHZhciRzdG9yZSk7XG4gICAgfVxuICAgIG9uUmVtb3ZlKGV2dCkge1xuICAgICAgICBjb25zdCB7IGxpc3Q6IGxpc3QgLCBzZXRMaXN0OiBzZXRMaXN0ICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgbW9kZSA9ICgwLCAkZWIwM2U3NGY4ZjdkYjFmMyRleHBvcnQkMWZjMGY2MjA1ODI5ZTE5YykoZXZ0KTtcbiAgICAgICAgY29uc3QgY3VzdG9tcyA9ICgwLCAkZWIwM2U3NGY4ZjdkYjFmMyRleHBvcnQkNDY1NWVmZTcwMGY4ODdhKShldnQsIGxpc3QpO1xuICAgICAgICAoMCwgJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JGE2MTc3ZDU4MjlmNzBlYmMpKGN1c3RvbXMpO1xuICAgICAgICBsZXQgbmV3TGlzdCA9IFtcbiAgICAgICAgICAgIC4uLmxpc3RcbiAgICAgICAgXTtcbiAgICAgICAgLy8gcmVtb3ZlIHN0YXRlIGlmIG5vdCBpbiBjbG9uZSBtb2RlLiBvdGhlcndpc2UsIGtlZXAuXG4gICAgICAgIGlmIChldnQucHVsbE1vZGUgIT09IFwiY2xvbmVcIikgbmV3TGlzdCA9ICgwLCAkZWIwM2U3NGY4ZjdkYjFmMyRleHBvcnQkYmUyZGE5NWU2MTY3YjBiZCkoY3VzdG9tcywgbmV3TGlzdCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gc3dpdGNoIHVzZWQgdG8gZ2V0IHRoZSBjbG9uZVxuICAgICAgICAgICAgbGV0IGN1c3RvbUNsb25lcyA9IGN1c3RvbXM7XG4gICAgICAgICAgICBzd2l0Y2gobW9kZSl7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpZHJhZ1wiOlxuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbG9uZXMgPSBjdXN0b21zLm1hcCgoaXRlbSwgaW5kZXgpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZXZ0LmNsb25lc1tpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbG9uZXMgPSBjdXN0b21zLm1hcCgoaXRlbSk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBldnQuY2xvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN3YXBcIjpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAoMCwgKCRwYXJjZWwkaW50ZXJvcERlZmF1bHQoJDh6SFVvJHRpbnlpbnZhcmlhbnQpKSkodHJ1ZSwgYG1vZGUgXCIke21vZGV9XCIgY2Fubm90IGNsb25lLiBQbGVhc2UgcmVtb3ZlIFwicHJvcHMuY2xvbmVcIiBmcm9tIDxSZWFjdFNvcnRhYmxlLz4gd2hlbiB1c2luZyB0aGUgXCIke21vZGV9XCIgcGx1Z2luYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoMCwgJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JDc3ZjQ5YTI1NjAyMWM4ZGUpKGN1c3RvbUNsb25lcyk7XG4gICAgICAgICAgICAvLyByZXBsYWNlIHNlbGVjdGVkIGl0ZW1zIHdpdGggY2xvbmVkIGl0ZW1zXG4gICAgICAgICAgICBjdXN0b21zLmZvckVhY2goKGN1cnIpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyLm9sZEluZGV4O1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqLyBjb25zdCBuZXdJdGVtID0gdGhpcy5wcm9wcy5jbG9uZShjdXJyLml0ZW0sIGV2dCk7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDEsIG5ld0l0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIGl0ZW0uc2VsZWN0ZWQgZnJvbSBsaXN0XG4gICAgICAgIG5ld0xpc3QgPSBuZXdMaXN0Lm1hcCgoaXRlbSk9Pk9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICBzZXRMaXN0KG5ld0xpc3QsIHRoaXMuc29ydGFibGUsICQ3ZmU4ZTNlYTU3MmJkYTdhJHZhciRzdG9yZSk7XG4gICAgfVxuICAgIG9uVXBkYXRlKGV2dCkge1xuICAgICAgICBjb25zdCB7IGxpc3Q6IGxpc3QgLCBzZXRMaXN0OiBzZXRMaXN0ICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3VzdG9tcyA9ICgwLCAkZWIwM2U3NGY4ZjdkYjFmMyRleHBvcnQkNDY1NWVmZTcwMGY4ODdhKShldnQsIGxpc3QpO1xuICAgICAgICAoMCwgJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JDc3ZjQ5YTI1NjAyMWM4ZGUpKGN1c3RvbXMpO1xuICAgICAgICAoMCwgJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JGE2MTc3ZDU4MjlmNzBlYmMpKGN1c3RvbXMpO1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gKDAsICRlYjAzZTc0ZjhmN2RiMWYzJGV4cG9ydCRjMjVjZjgwODBiZDMwNWVjKShjdXN0b21zLCBsaXN0KTtcbiAgICAgICAgcmV0dXJuIHNldExpc3QobmV3TGlzdCwgdGhpcy5zb3J0YWJsZSwgJDdmZThlM2VhNTcyYmRhN2EkdmFyJHN0b3JlKTtcbiAgICB9XG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgJDdmZThlM2VhNTcyYmRhN2EkdmFyJHN0b3JlLmRyYWdnaW5nID0gdGhpcztcbiAgICB9XG4gICAgb25FbmQoKSB7XG4gICAgICAgICQ3ZmU4ZTNlYTU3MmJkYTdhJHZhciRzdG9yZS5kcmFnZ2luZyA9IG51bGw7XG4gICAgfVxuICAgIG9uQ2hvb3NlKGV2dCkge1xuICAgICAgICBjb25zdCB7IGxpc3Q6IGxpc3QgLCBzZXRMaXN0OiBzZXRMaXN0ICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IGxpc3QubWFwKChpdGVtLCBpbmRleCk9PntcbiAgICAgICAgICAgIGxldCBuZXdJdGVtID0gaXRlbTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gZXZ0Lm9sZEluZGV4KSBuZXdJdGVtID0gT2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgY2hvc2VuOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZXdJdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0TGlzdChuZXdMaXN0LCB0aGlzLnNvcnRhYmxlLCAkN2ZlOGUzZWE1NzJiZGE3YSR2YXIkc3RvcmUpO1xuICAgIH1cbiAgICBvblVuY2hvb3NlKGV2dCkge1xuICAgICAgICBjb25zdCB7IGxpc3Q6IGxpc3QgLCBzZXRMaXN0OiBzZXRMaXN0ICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IGxpc3QubWFwKChpdGVtLCBpbmRleCk9PntcbiAgICAgICAgICAgIGxldCBuZXdJdGVtID0gaXRlbTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gZXZ0Lm9sZEluZGV4KSBuZXdJdGVtID0gT2JqZWN0LmFzc2lnbihuZXdJdGVtLCB7XG4gICAgICAgICAgICAgICAgY2hvc2VuOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldExpc3QobmV3TGlzdCwgdGhpcy5zb3J0YWJsZSwgJDdmZThlM2VhNTcyYmRhN2EkdmFyJHN0b3JlKTtcbiAgICB9XG4gICAgb25TcGlsbChldnQpIHtcbiAgICAgICAgY29uc3QgeyByZW1vdmVPblNwaWxsOiByZW1vdmVPblNwaWxsICwgcmV2ZXJ0T25TcGlsbDogcmV2ZXJ0T25TcGlsbCAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChyZW1vdmVPblNwaWxsICYmICFyZXZlcnRPblNwaWxsKSAoMCwgJGViMDNlNzRmOGY3ZGIxZjMkZXhwb3J0JDFkMGFhMTYwNDMyZGZlYTUpKGV2dC5pdGVtKTtcbiAgICB9XG4gICAgb25TZWxlY3QoZXZ0KSB7XG4gICAgICAgIGNvbnN0IHsgbGlzdDogbGlzdCAsIHNldExpc3Q6IHNldExpc3QgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gbGlzdC5tYXAoKGl0ZW0pPT5PYmplY3QuYXNzaWduKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgZXZ0Lm5ld0luZGljaWVzLmZvckVhY2goKGN1cnIpPT57XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGN1cnIuaW5kZXg7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFwiJHtldnQudHlwZX1cIiBoYWQgaW5kaWNlIG9mIFwiJHtjdXJyLmluZGV4fVwiLCB3aGljaCBpcyBwcm9iYWJseSAtMSBhbmQgZG9lc24ndCB1c3VhbGx5IGhhcHBlbiBoZXJlLmApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3TGlzdFtpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0TGlzdChuZXdMaXN0LCB0aGlzLnNvcnRhYmxlLCAkN2ZlOGUzZWE1NzJiZGE3YSR2YXIkc3RvcmUpO1xuICAgIH1cbiAgICBvbkRlc2VsZWN0KGV2dCkge1xuICAgICAgICBjb25zdCB7IGxpc3Q6IGxpc3QgLCBzZXRMaXN0OiBzZXRMaXN0ICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IGxpc3QubWFwKChpdGVtKT0+T2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIGV2dC5uZXdJbmRpY2llcy5mb3JFYWNoKChjdXJyKT0+e1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyLmluZGV4O1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuICAgICAgICAgICAgbmV3TGlzdFtpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0TGlzdChuZXdMaXN0LCB0aGlzLnNvcnRhYmxlLCAkN2ZlOGUzZWE1NzJiZGE3YSR2YXIkc3RvcmUpO1xuICAgIH1cbn1cblxuXG52YXIgJGZhZWZhYWQ5NWU1ZmNjYTAkZXhwb3J0cyA9IHt9O1xuXG5cbiRwYXJjZWwkZXhwb3J0V2lsZGNhcmQobW9kdWxlLmV4cG9ydHMsICRmYWVmYWFkOTVlNWZjY2EwJGV4cG9ydHMpO1xuXG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKiohXG4gKiBTb3J0YWJsZSAxLjE1LjJcbiAqIEBhdXRob3JcdFJ1YmFYYSAgIDx0cmFzaEBydWJheGEub3JnPlxuICogQGF1dGhvclx0b3dlbm0gICAgPG93ZW4yMzM1NUBnbWFpbC5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciB2ZXJzaW9uID0gXCIxLjE1LjJcIjtcblxuZnVuY3Rpb24gdXNlckFnZW50KHBhdHRlcm4pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICByZXR1cm4gISEgLypAX19QVVJFX18qL25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gocGF0dGVybik7XG4gIH1cbn1cbnZhciBJRTExT3JMZXNzID0gdXNlckFnZW50KC8oPzpUcmlkZW50LipydlsgOl0/MTFcXC58bXNpZXxpZW1vYmlsZXxXaW5kb3dzIFBob25lKS9pKTtcbnZhciBFZGdlID0gdXNlckFnZW50KC9FZGdlL2kpO1xudmFyIEZpcmVGb3ggPSB1c2VyQWdlbnQoL2ZpcmVmb3gvaSk7XG52YXIgU2FmYXJpID0gdXNlckFnZW50KC9zYWZhcmkvaSkgJiYgIXVzZXJBZ2VudCgvY2hyb21lL2kpICYmICF1c2VyQWdlbnQoL2FuZHJvaWQvaSk7XG52YXIgSU9TID0gdXNlckFnZW50KC9pUChhZHxvZHxob25lKS9pKTtcbnZhciBDaHJvbWVGb3JBbmRyb2lkID0gdXNlckFnZW50KC9jaHJvbWUvaSkgJiYgdXNlckFnZW50KC9hbmRyb2lkL2kpO1xuXG52YXIgY2FwdHVyZU1vZGUgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgZm4pIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sICFJRTExT3JMZXNzICYmIGNhcHR1cmVNb2RlKTtcbn1cbmZ1bmN0aW9uIG9mZihlbCwgZXZlbnQsIGZuKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCAhSUUxMU9yTGVzcyAmJiBjYXB0dXJlTW9kZSk7XG59XG5mdW5jdGlvbiBtYXRjaGVzKCAvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IpIHtcbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuO1xuICBzZWxlY3RvclswXSA9PT0gJz4nICYmIChzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cmluZygxKSk7XG4gIGlmIChlbCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZWwubWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudE9ySG9zdChlbCkge1xuICByZXR1cm4gZWwuaG9zdCAmJiBlbCAhPT0gZG9jdW1lbnQgJiYgZWwuaG9zdC5ub2RlVHlwZSA/IGVsLmhvc3QgOiBlbC5wYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gY2xvc2VzdCggLyoqSFRNTEVsZW1lbnQqL2VsLCAvKipTdHJpbmcqL3NlbGVjdG9yLCAvKipIVE1MRWxlbWVudCovY3R4LCBpbmNsdWRlQ1RYKSB7XG4gIGlmIChlbCkge1xuICAgIGN0eCA9IGN0eCB8fCBkb2N1bWVudDtcbiAgICBkbyB7XG4gICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCAmJiAoc2VsZWN0b3JbMF0gPT09ICc+JyA/IGVsLnBhcmVudE5vZGUgPT09IGN0eCAmJiBtYXRjaGVzKGVsLCBzZWxlY3RvcikgOiBtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHx8IGluY2x1ZGVDVFggJiYgZWwgPT09IGN0eCkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgICBpZiAoZWwgPT09IGN0eCkgYnJlYWs7XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgfSB3aGlsZSAoZWwgPSBnZXRQYXJlbnRPckhvc3QoZWwpKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbnZhciBSX1NQQUNFID0gL1xccysvZztcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsLCBuYW1lLCBzdGF0ZSkge1xuICBpZiAoZWwgJiYgbmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdFtzdGF0ZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykucmVwbGFjZShSX1NQQUNFLCAnICcpLnJlcGxhY2UoJyAnICsgbmFtZSArICcgJywgJyAnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IChjbGFzc05hbWUgKyAoc3RhdGUgPyAnICcgKyBuYW1lIDogJycpKS5yZXBsYWNlKFJfU1BBQ0UsICcgJyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjc3MoZWwsIHByb3AsIHZhbCkge1xuICB2YXIgc3R5bGUgPSBlbCAmJiBlbC5zdHlsZTtcbiAgaWYgKHN0eWxlKSB7XG4gICAgaWYgKHZhbCA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgICB2YWwgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsLCAnJyk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmN1cnJlbnRTdHlsZSkge1xuICAgICAgICB2YWwgPSBlbC5jdXJyZW50U3R5bGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcCA9PT0gdm9pZCAwID8gdmFsIDogdmFsW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShwcm9wIGluIHN0eWxlKSAmJiBwcm9wLmluZGV4T2YoJ3dlYmtpdCcpID09PSAtMSkge1xuICAgICAgICBwcm9wID0gJy13ZWJraXQtJyArIHByb3A7XG4gICAgICB9XG4gICAgICBzdHlsZVtwcm9wXSA9IHZhbCArICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICcnIDogJ3B4Jyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXRyaXgoZWwsIHNlbGZPbmx5KSB7XG4gIHZhciBhcHBsaWVkVHJhbnNmb3JtcyA9ICcnO1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gZWw7XG4gIH0gZWxzZSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGNzcyhlbCwgJ3RyYW5zZm9ybScpO1xuICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICBhcHBsaWVkVHJhbnNmb3JtcyA9IHRyYW5zZm9ybSArICcgJyArIGFwcGxpZWRUcmFuc2Zvcm1zO1xuICAgICAgfVxuICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICAgIH0gd2hpbGUgKCFzZWxmT25seSAmJiAoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG4gIH1cbiAgdmFyIG1hdHJpeEZuID0gd2luZG93LkRPTU1hdHJpeCB8fCB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4IHx8IHdpbmRvdy5DU1NNYXRyaXggfHwgd2luZG93Lk1TQ1NTTWF0cml4O1xuICAvKmpzaGludCAtVzA1NiAqL1xuICByZXR1cm4gbWF0cml4Rm4gJiYgbmV3IG1hdHJpeEZuKGFwcGxpZWRUcmFuc2Zvcm1zKTtcbn1cbmZ1bmN0aW9uIGZpbmQoY3R4LCB0YWdOYW1lLCBpdGVyYXRvcikge1xuICBpZiAoY3R4KSB7XG4gICAgdmFyIGxpc3QgPSBjdHguZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSksXG4gICAgICBpID0gMCxcbiAgICAgIG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBpZiAoaXRlcmF0b3IpIHtcbiAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdG9yKGxpc3RbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuICByZXR1cm4gW107XG59XG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkge1xuICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQ7XG4gIGlmIChzY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgXCJib3VuZGluZyBjbGllbnQgcmVjdFwiIG9mIGdpdmVuIGVsZW1lbnRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgICAgICAgICAgICAgICAgICBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZ0NsaWVudFJlY3QgaXMgd2FudGVkXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gcmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayAgV2hldGhlciB0aGUgcmVjdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgYmxvY2sgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaW5lclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQgIFdoZXRoZXIgdGhlIHJlY3Qgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSByZWxhdGl2ZSBwYXJlbnQgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaWVuclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHVuZG9TY2FsZSAgICAgICAgICAgICAgICAgIFdoZXRoZXIgdGhlIGNvbnRhaW5lcidzIHNjYWxlKCkgc2hvdWxkIGJlIHVuZG9uZVxyXG4gKiBAcGFyYW0gIHtbSFRNTEVsZW1lbnRdfSBjb250YWluZXIgICAgICAgICAgICAgIFRoZSBwYXJlbnQgdGhlIGVsZW1lbnQgd2lsbCBiZSBwbGFjZWQgaW5cclxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgYm91bmRpbmdDbGllbnRSZWN0IG9mIGVsLCB3aXRoIHNwZWNpZmllZCBhZGp1c3RtZW50c1xyXG4gKi9cbmZ1bmN0aW9uIGdldFJlY3QoZWwsIHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2ssIHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQsIHVuZG9TY2FsZSwgY29udGFpbmVyKSB7XG4gIGlmICghZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIGVsICE9PSB3aW5kb3cpIHJldHVybjtcbiAgdmFyIGVsUmVjdCwgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0LCBoZWlnaHQsIHdpZHRoO1xuICBpZiAoZWwgIT09IHdpbmRvdyAmJiBlbC5wYXJlbnROb2RlICYmIGVsICE9PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0b3AgPSBlbFJlY3QudG9wO1xuICAgIGxlZnQgPSBlbFJlY3QubGVmdDtcbiAgICBib3R0b20gPSBlbFJlY3QuYm90dG9tO1xuICAgIHJpZ2h0ID0gZWxSZWN0LnJpZ2h0O1xuICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gMDtcbiAgICBsZWZ0ID0gMDtcbiAgICBib3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuICBpZiAoKHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2sgfHwgcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCkgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3IgdHJhbnNsYXRlKClcbiAgICBjb250YWluZXIgPSBjb250YWluZXIgfHwgZWwucGFyZW50Tm9kZTtcblxuICAgIC8vIHNvbHZlcyAjMTEyMyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzc5NTM4MDYvNjA4ODMxMilcbiAgICAvLyBOb3QgbmVlZGVkIG9uIDw9IElFMTFcbiAgICBpZiAoIUlFMTFPckxlc3MpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIChjc3MoY29udGFpbmVyLCAndHJhbnNmb3JtJykgIT09ICdub25lJyB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50ICYmIGNzcyhjb250YWluZXIsICdwb3NpdGlvbicpICE9PSAnc3RhdGljJykpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIC8vIFNldCByZWxhdGl2ZSB0byBlZGdlcyBvZiBwYWRkaW5nIGJveCBvZiBjb250YWluZXJcbiAgICAgICAgICB0b3AgLT0gY29udGFpbmVyUmVjdC50b3AgKyBwYXJzZUludChjc3MoY29udGFpbmVyLCAnYm9yZGVyLXRvcC13aWR0aCcpKTtcbiAgICAgICAgICBsZWZ0IC09IGNvbnRhaW5lclJlY3QubGVmdCArIHBhcnNlSW50KGNzcyhjb250YWluZXIsICdib3JkZXItbGVmdC13aWR0aCcpKTtcbiAgICAgICAgICBib3R0b20gPSB0b3AgKyBlbFJlY3QuaGVpZ2h0O1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIGVsUmVjdC53aWR0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgICB9IHdoaWxlIChjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9XG4gIGlmICh1bmRvU2NhbGUgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3Igc2NhbGUoKVxuICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeChjb250YWluZXIgfHwgZWwpLFxuICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgIHNjYWxlWSA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmQ7XG4gICAgaWYgKGVsTWF0cml4KSB7XG4gICAgICB0b3AgLz0gc2NhbGVZO1xuICAgICAgbGVmdCAvPSBzY2FsZVg7XG4gICAgICB3aWR0aCAvPSBzY2FsZVg7XG4gICAgICBoZWlnaHQgLz0gc2NhbGVZO1xuICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdG9wOiB0b3AsXG4gICAgbGVmdDogbGVmdCxcbiAgICBib3R0b206IGJvdHRvbSxcbiAgICByaWdodDogcmlnaHQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBzaWRlIG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgcGFzdCBhIHNpZGUgb2YgaXRzIHBhcmVudHNcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbCAgICAgICAgICAgVGhlIGVsZW1lbnQgd2hvJ3Mgc2lkZSBiZWluZyBzY3JvbGxlZCBvdXQgb2YgdmlldyBpcyBpbiBxdWVzdGlvblxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIGVsU2lkZSAgICAgICBTaWRlIG9mIHRoZSBlbGVtZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBwYXJlbnRTaWRlICAgU2lkZSBvZiB0aGUgcGFyZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgICAgICAgVGhlIHBhcmVudCBzY3JvbGwgZWxlbWVudCB0aGF0IHRoZSBlbCdzIHNpZGUgaXMgc2Nyb2xsZWQgcGFzdCwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzdWNoIGVsZW1lbnRcclxuICovXG5mdW5jdGlvbiBpc1Njcm9sbGVkUGFzdChlbCwgZWxTaWRlLCBwYXJlbnRTaWRlKSB7XG4gIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgdHJ1ZSksXG4gICAgZWxTaWRlVmFsID0gZ2V0UmVjdChlbClbZWxTaWRlXTtcblxuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICB2YXIgcGFyZW50U2lkZVZhbCA9IGdldFJlY3QocGFyZW50KVtwYXJlbnRTaWRlXSxcbiAgICAgIHZpc2libGUgPSB2b2lkIDA7XG4gICAgaWYgKHBhcmVudFNpZGUgPT09ICd0b3AnIHx8IHBhcmVudFNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgdmlzaWJsZSA9IGVsU2lkZVZhbCA+PSBwYXJlbnRTaWRlVmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpYmxlID0gZWxTaWRlVmFsIDw9IHBhcmVudFNpZGVWYWw7XG4gICAgfVxuICAgIGlmICghdmlzaWJsZSkgcmV0dXJuIHBhcmVudDtcbiAgICBpZiAocGFyZW50ID09PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIGJyZWFrO1xuICAgIHBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KHBhcmVudCwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXHJcbiAqIEdldHMgbnRoIGNoaWxkIG9mIGVsLCBpZ25vcmluZyBoaWRkZW4gY2hpbGRyZW4sIHNvcnRhYmxlJ3MgZWxlbWVudHMgKGRvZXMgbm90IGlnbm9yZSBjbG9uZSBpZiBpdCdzIHZpc2libGUpXHJcbiAqIGFuZCBub24tZHJhZ2dhYmxlIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICBUaGUgcGFyZW50IGVsZW1lbnRcclxuICogQHBhcmFtICB7TnVtYmVyfSBjaGlsZE51bSAgICAgIFRoZSBpbmRleCBvZiB0aGUgY2hpbGRcclxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zICAgICAgIFBhcmVudCBTb3J0YWJsZSdzIG9wdGlvbnNcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgIFRoZSBjaGlsZCBhdCBpbmRleCBjaGlsZE51bSwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXG5mdW5jdGlvbiBnZXRDaGlsZChlbCwgY2hpbGROdW0sIG9wdGlvbnMsIGluY2x1ZGVEcmFnRWwpIHtcbiAgdmFyIGN1cnJlbnRDaGlsZCA9IDAsXG4gICAgaSA9IDAsXG4gICAgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgd2hpbGUgKGkgPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBpZiAoY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGNoaWxkcmVuW2ldICE9PSBTb3J0YWJsZS5naG9zdCAmJiAoaW5jbHVkZURyYWdFbCB8fCBjaGlsZHJlbltpXSAhPT0gU29ydGFibGUuZHJhZ2dlZCkgJiYgY2xvc2VzdChjaGlsZHJlbltpXSwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkTnVtKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbltpXTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRDaGlsZCsrO1xuICAgIH1cbiAgICBpKys7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxyXG4gKiBHZXRzIHRoZSBsYXN0IGNoaWxkIGluIHRoZSBlbCwgaWdub3JpbmcgZ2hvc3RFbCBvciBpbnZpc2libGUgZWxlbWVudHMgKGNsb25lcylcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFBhcmVudCBlbGVtZW50XHJcbiAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvciAgICBBbnkgb3RoZXIgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgaWdub3JlZFxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGxhc3QgY2hpbGQsIGlnbm9yaW5nIGdob3N0RWxcclxuICovXG5mdW5jdGlvbiBsYXN0Q2hpbGQoZWwsIHNlbGVjdG9yKSB7XG4gIHZhciBsYXN0ID0gZWwubGFzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKGxhc3QgJiYgKGxhc3QgPT09IFNvcnRhYmxlLmdob3N0IHx8IGNzcyhsYXN0LCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgc2VsZWN0b3IgJiYgIW1hdGNoZXMobGFzdCwgc2VsZWN0b3IpKSkge1xuICAgIGxhc3QgPSBsYXN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH1cbiAgcmV0dXJuIGxhc3QgfHwgbnVsbDtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIGFuIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnQgZm9yIGEgc2VsZWN0ZWQgc2V0IG9mXHJcbiAqIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0gIHtzZWxlY3Rvcn0gc2VsZWN0b3JcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cbmZ1bmN0aW9uIGluZGV4KGVsLCBzZWxlY3Rvcikge1xuICB2YXIgaW5kZXggPSAwO1xuICBpZiAoIWVsIHx8ICFlbC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB3aGlsZSAoZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdURU1QTEFURScgJiYgZWwgIT09IFNvcnRhYmxlLmNsb25lICYmICghc2VsZWN0b3IgfHwgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSkge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgZ2l2ZW4gZWxlbWVudCwgYWRkZWQgd2l0aCBhbGwgdGhlIHNjcm9sbCBvZmZzZXRzIG9mIHBhcmVudCBlbGVtZW50cy5cclxuICogVGhlIHZhbHVlIGlzIHJldHVybmVkIGluIHJlYWwgcGl4ZWxzLlxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgIE9mZnNldHMgaW4gdGhlIGZvcm1hdCBvZiBbbGVmdCwgdG9wXVxyXG4gKi9cbmZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGVsKSB7XG4gIHZhciBvZmZzZXRMZWZ0ID0gMCxcbiAgICBvZmZzZXRUb3AgPSAwLFxuICAgIHdpblNjcm9sbGVyID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICBpZiAoZWwpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgoZWwpLFxuICAgICAgICBzY2FsZVggPSBlbE1hdHJpeC5hLFxuICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeC5kO1xuICAgICAgb2Zmc2V0TGVmdCArPSBlbC5zY3JvbGxMZWZ0ICogc2NhbGVYO1xuICAgICAgb2Zmc2V0VG9wICs9IGVsLnNjcm9sbFRvcCAqIHNjYWxlWTtcbiAgICB9IHdoaWxlIChlbCAhPT0gd2luU2Nyb2xsZXIgJiYgKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuICB9XG4gIHJldHVybiBbb2Zmc2V0TGVmdCwgb2Zmc2V0VG9wXTtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBvYmplY3Qgd2l0aGluIHRoZSBnaXZlbiBhcnJheVxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyICAgQXJyYXkgdGhhdCBtYXkgb3IgbWF5IG5vdCBob2xkIHRoZSBvYmplY3RcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogIEFuIG9iamVjdCB0aGF0IGhhcyBhIGtleS12YWx1ZSBwYWlyIHVuaXF1ZSB0byBhbmQgaWRlbnRpY2FsIHRvIGEga2V5LXZhbHVlIHBhaXIgaW4gdGhlIG9iamVjdCB5b3Ugd2FudCB0byBmaW5kXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICBUaGUgaW5kZXggb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXksIG9yIC0xXHJcbiAqL1xuZnVuY3Rpb24gaW5kZXhPZk9iamVjdChhcnIsIG9iaikge1xuICBmb3IgKHZhciBpIGluIGFycikge1xuICAgIGlmICghYXJyLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgb2JqW2tleV0gPT09IGFycltpXVtrZXldKSByZXR1cm4gTnVtYmVyKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgaW5jbHVkZVNlbGYpIHtcbiAgLy8gc2tpcCB0byB3aW5kb3dcbiAgaWYgKCFlbCB8fCAhZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB2YXIgZWxlbSA9IGVsO1xuICB2YXIgZ290U2VsZiA9IGZhbHNlO1xuICBkbyB7XG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBnZXQgZWxlbSBjc3MgaWYgaXQgaXNuJ3QgZXZlbiBvdmVyZmxvd2luZyBpbiB0aGUgZmlyc3QgcGxhY2UgKHBlcmZvcm1hbmNlKVxuICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB2YXIgZWxlbUNTUyA9IGNzcyhlbGVtKTtcbiAgICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCAmJiAoZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ2F1dG8nIHx8IGVsZW1DU1Mub3ZlcmZsb3dYID09ICdzY3JvbGwnKSB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0ICYmIChlbGVtQ1NTLm92ZXJmbG93WSA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1kgPT0gJ3Njcm9sbCcpKSB7XG4gICAgICAgIGlmICghZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgfHwgZWxlbSA9PT0gZG9jdW1lbnQuYm9keSkgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgICAgICAgaWYgKGdvdFNlbGYgfHwgaW5jbHVkZVNlbGYpIHJldHVybiBlbGVtO1xuICAgICAgICBnb3RTZWxmID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB9IHdoaWxlIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKTtcbiAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbn1cbmZ1bmN0aW9uIGV4dGVuZChkc3QsIHNyYykge1xuICBpZiAoZHN0ICYmIHNyYykge1xuICAgIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZHN0O1xufVxuZnVuY3Rpb24gaXNSZWN0RXF1YWwocmVjdDEsIHJlY3QyKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHJlY3QxLnRvcCkgPT09IE1hdGgucm91bmQocmVjdDIudG9wKSAmJiBNYXRoLnJvdW5kKHJlY3QxLmxlZnQpID09PSBNYXRoLnJvdW5kKHJlY3QyLmxlZnQpICYmIE1hdGgucm91bmQocmVjdDEuaGVpZ2h0KSA9PT0gTWF0aC5yb3VuZChyZWN0Mi5oZWlnaHQpICYmIE1hdGgucm91bmQocmVjdDEud2lkdGgpID09PSBNYXRoLnJvdW5kKHJlY3QyLndpZHRoKTtcbn1cbnZhciBfdGhyb3R0bGVUaW1lb3V0O1xuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIG1zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFfdGhyb3R0bGVUaW1lb3V0KSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoX3RoaXMsIGFyZ3NbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgX3Rocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhyb3R0bGVUaW1lb3V0ID0gdm9pZCAwO1xuICAgICAgfSwgbXMpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNhbmNlbFRocm90dGxlKCkge1xuICBjbGVhclRpbWVvdXQoX3Rocm90dGxlVGltZW91dCk7XG4gIF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG59XG5mdW5jdGlvbiBzY3JvbGxCeShlbCwgeCwgeSkge1xuICBlbC5zY3JvbGxMZWZ0ICs9IHg7XG4gIGVsLnNjcm9sbFRvcCArPSB5O1xufVxuZnVuY3Rpb24gY2xvbmUoZWwpIHtcbiAgdmFyIFBvbHltZXIgPSB3aW5kb3cuUG9seW1lcjtcbiAgdmFyICQgPSB3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0bztcbiAgaWYgKFBvbHltZXIgJiYgUG9seW1lci5kb20pIHtcbiAgICByZXR1cm4gUG9seW1lci5kb20oZWwpLmNsb25lTm9kZSh0cnVlKTtcbiAgfSBlbHNlIGlmICgkKSB7XG4gICAgcmV0dXJuICQoZWwpLmNsb25lKHRydWUpWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFJlY3QoZWwsIHJlY3QpIHtcbiAgY3NzKGVsLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgY3NzKGVsLCAndG9wJywgcmVjdC50b3ApO1xuICBjc3MoZWwsICdsZWZ0JywgcmVjdC5sZWZ0KTtcbiAgY3NzKGVsLCAnd2lkdGgnLCByZWN0LndpZHRoKTtcbiAgY3NzKGVsLCAnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xufVxuZnVuY3Rpb24gdW5zZXRSZWN0KGVsKSB7XG4gIGNzcyhlbCwgJ3Bvc2l0aW9uJywgJycpO1xuICBjc3MoZWwsICd0b3AnLCAnJyk7XG4gIGNzcyhlbCwgJ2xlZnQnLCAnJyk7XG4gIGNzcyhlbCwgJ3dpZHRoJywgJycpO1xuICBjc3MoZWwsICdoZWlnaHQnLCAnJyk7XG59XG5mdW5jdGlvbiBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoY29udGFpbmVyLCBvcHRpb25zLCBnaG9zdEVsKSB7XG4gIHZhciByZWN0ID0ge307XG4gIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciBfcmVjdCRsZWZ0LCBfcmVjdCR0b3AsIF9yZWN0JHJpZ2h0LCBfcmVjdCRib3R0b207XG4gICAgaWYgKCFjbG9zZXN0KGNoaWxkLCBvcHRpb25zLmRyYWdnYWJsZSwgY29udGFpbmVyLCBmYWxzZSkgfHwgY2hpbGQuYW5pbWF0ZWQgfHwgY2hpbGQgPT09IGdob3N0RWwpIHJldHVybjtcbiAgICB2YXIgY2hpbGRSZWN0ID0gZ2V0UmVjdChjaGlsZCk7XG4gICAgcmVjdC5sZWZ0ID0gTWF0aC5taW4oKF9yZWN0JGxlZnQgPSByZWN0LmxlZnQpICE9PSBudWxsICYmIF9yZWN0JGxlZnQgIT09IHZvaWQgMCA/IF9yZWN0JGxlZnQgOiBJbmZpbml0eSwgY2hpbGRSZWN0LmxlZnQpO1xuICAgIHJlY3QudG9wID0gTWF0aC5taW4oKF9yZWN0JHRvcCA9IHJlY3QudG9wKSAhPT0gbnVsbCAmJiBfcmVjdCR0b3AgIT09IHZvaWQgMCA/IF9yZWN0JHRvcCA6IEluZmluaXR5LCBjaGlsZFJlY3QudG9wKTtcbiAgICByZWN0LnJpZ2h0ID0gTWF0aC5tYXgoKF9yZWN0JHJpZ2h0ID0gcmVjdC5yaWdodCkgIT09IG51bGwgJiYgX3JlY3QkcmlnaHQgIT09IHZvaWQgMCA/IF9yZWN0JHJpZ2h0IDogLUluZmluaXR5LCBjaGlsZFJlY3QucmlnaHQpO1xuICAgIHJlY3QuYm90dG9tID0gTWF0aC5tYXgoKF9yZWN0JGJvdHRvbSA9IHJlY3QuYm90dG9tKSAhPT0gbnVsbCAmJiBfcmVjdCRib3R0b20gIT09IHZvaWQgMCA/IF9yZWN0JGJvdHRvbSA6IC1JbmZpbml0eSwgY2hpbGRSZWN0LmJvdHRvbSk7XG4gIH0pO1xuICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cbnZhciBleHBhbmRvID0gJ1NvcnRhYmxlJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG5mdW5jdGlvbiBBbmltYXRpb25TdGF0ZU1hbmFnZXIoKSB7XG4gIHZhciBhbmltYXRpb25TdGF0ZXMgPSBbXSxcbiAgICBhbmltYXRpb25DYWxsYmFja0lkO1xuICByZXR1cm4ge1xuICAgIGNhcHR1cmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gY2FwdHVyZUFuaW1hdGlvblN0YXRlKCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzID0gW107XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHJldHVybjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbik7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY3NzKGNoaWxkLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgY2hpbGQgPT09IFNvcnRhYmxlLmdob3N0KSByZXR1cm47XG4gICAgICAgIGFuaW1hdGlvblN0YXRlcy5wdXNoKHtcbiAgICAgICAgICB0YXJnZXQ6IGNoaWxkLFxuICAgICAgICAgIHJlY3Q6IGdldFJlY3QoY2hpbGQpXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZnJvbVJlY3QgPSBfb2JqZWN0U3ByZWFkMih7fSwgYW5pbWF0aW9uU3RhdGVzW2FuaW1hdGlvblN0YXRlcy5sZW5ndGggLSAxXS5yZWN0KTtcblxuICAgICAgICAvLyBJZiBhbmltYXRpbmc6IGNvbXBlbnNhdGUgZm9yIGN1cnJlbnQgYW5pbWF0aW9uXG4gICAgICAgIGlmIChjaGlsZC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICB2YXIgY2hpbGRNYXRyaXggPSBtYXRyaXgoY2hpbGQsIHRydWUpO1xuICAgICAgICAgIGlmIChjaGlsZE1hdHJpeCkge1xuICAgICAgICAgICAgZnJvbVJlY3QudG9wIC09IGNoaWxkTWF0cml4LmY7XG4gICAgICAgICAgICBmcm9tUmVjdC5sZWZ0IC09IGNoaWxkTWF0cml4LmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkLmZyb21SZWN0ID0gZnJvbVJlY3Q7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFkZEFuaW1hdGlvblN0YXRlOiBmdW5jdGlvbiBhZGRBbmltYXRpb25TdGF0ZShzdGF0ZSkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvblN0YXRlKHRhcmdldCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnNwbGljZShpbmRleE9mT2JqZWN0KGFuaW1hdGlvblN0YXRlcywge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgfSksIDEpO1xuICAgIH0sXG4gICAgYW5pbWF0ZUFsbDogZnVuY3Rpb24gYW5pbWF0ZUFsbChjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0aW9uQ2FsbGJhY2tJZCk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhbmltYXRpbmcgPSBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICBhbmltYXRpb25TdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIHRpbWUgPSAwLFxuICAgICAgICAgIHRhcmdldCA9IHN0YXRlLnRhcmdldCxcbiAgICAgICAgICBmcm9tUmVjdCA9IHRhcmdldC5mcm9tUmVjdCxcbiAgICAgICAgICB0b1JlY3QgPSBnZXRSZWN0KHRhcmdldCksXG4gICAgICAgICAgcHJldkZyb21SZWN0ID0gdGFyZ2V0LnByZXZGcm9tUmVjdCxcbiAgICAgICAgICBwcmV2VG9SZWN0ID0gdGFyZ2V0LnByZXZUb1JlY3QsXG4gICAgICAgICAgYW5pbWF0aW5nUmVjdCA9IHN0YXRlLnJlY3QsXG4gICAgICAgICAgdGFyZ2V0TWF0cml4ID0gbWF0cml4KHRhcmdldCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0YXJnZXRNYXRyaXgpIHtcbiAgICAgICAgICAvLyBDb21wZW5zYXRlIGZvciBjdXJyZW50IGFuaW1hdGlvblxuICAgICAgICAgIHRvUmVjdC50b3AgLT0gdGFyZ2V0TWF0cml4LmY7XG4gICAgICAgICAgdG9SZWN0LmxlZnQgLT0gdGFyZ2V0TWF0cml4LmU7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LnRvUmVjdCA9IHRvUmVjdDtcbiAgICAgICAgaWYgKHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAvLyBDb3VsZCBhbHNvIGNoZWNrIGlmIGFuaW1hdGluZ1JlY3QgaXMgYmV0d2VlbiBmcm9tUmVjdCBhbmQgdG9SZWN0XG4gICAgICAgICAgaWYgKGlzUmVjdEVxdWFsKHByZXZGcm9tUmVjdCwgdG9SZWN0KSAmJiAhaXNSZWN0RXF1YWwoZnJvbVJlY3QsIHRvUmVjdCkgJiZcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgYW5pbWF0aW5nUmVjdCBpcyBvbiBsaW5lIGJldHdlZW4gdG9SZWN0ICYgZnJvbVJlY3RcbiAgICAgICAgICAoYW5pbWF0aW5nUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChhbmltYXRpbmdSZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkgPT09IChmcm9tUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpKSB7XG4gICAgICAgICAgICAvLyBJZiByZXR1cm5pbmcgdG8gc2FtZSBwbGFjZSBhcyBzdGFydGVkIGZyb20gYW5pbWF0aW9uIGFuZCBvbiBzYW1lIGF4aXNcbiAgICAgICAgICAgIHRpbWUgPSBjYWxjdWxhdGVSZWFsVGltZShhbmltYXRpbmdSZWN0LCBwcmV2RnJvbVJlY3QsIHByZXZUb1JlY3QsIF90aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGZyb21SZWN0ICE9IHRvUmVjdDogYW5pbWF0ZVxuICAgICAgICBpZiAoIWlzUmVjdEVxdWFsKHRvUmVjdCwgZnJvbVJlY3QpKSB7XG4gICAgICAgICAgdGFyZ2V0LnByZXZGcm9tUmVjdCA9IGZyb21SZWN0O1xuICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gdG9SZWN0O1xuICAgICAgICAgIGlmICghdGltZSkge1xuICAgICAgICAgICAgdGltZSA9IF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpcy5hbmltYXRlKHRhcmdldCwgYW5pbWF0aW5nUmVjdCwgdG9SZWN0LCB0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgYW5pbWF0aW9uVGltZSA9IE1hdGgubWF4KGFuaW1hdGlvblRpbWUsIHRpbWUpO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0aW9uUmVzZXRUaW1lcik7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGlvblJlc2V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhcmdldC5hbmltYXRpb25UaW1lID0gMDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2RnJvbVJlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LmZyb21SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgIH0sIHRpbWUpO1xuICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSB0aW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25DYWxsYmFja0lkKTtcbiAgICAgIGlmICghYW5pbWF0aW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25DYWxsYmFja0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgYW5pbWF0aW9uVGltZSk7XG4gICAgICB9XG4gICAgICBhbmltYXRpb25TdGF0ZXMgPSBbXTtcbiAgICB9LFxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uIGFuaW1hdGUodGFyZ2V0LCBjdXJyZW50UmVjdCwgdG9SZWN0LCBkdXJhdGlvbikge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgodGhpcy5lbCksXG4gICAgICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5kLFxuICAgICAgICAgIHRyYW5zbGF0ZVggPSAoY3VycmVudFJlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IChjdXJyZW50UmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChzY2FsZVkgfHwgMSk7XG4gICAgICAgIHRhcmdldC5hbmltYXRpbmdYID0gISF0cmFuc2xhdGVYO1xuICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9ICEhdHJhbnNsYXRlWTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgdHJhbnNsYXRlWCArICdweCwnICsgdHJhbnNsYXRlWSArICdweCwwKScpO1xuICAgICAgICB0aGlzLmZvclJlcGFpbnREdW1teSA9IHJlcGFpbnQodGFyZ2V0KTsgLy8gcmVwYWludFxuXG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJ3RyYW5zZm9ybSAnICsgZHVyYXRpb24gKyAnbXMnICsgKHRoaXMub3B0aW9ucy5lYXNpbmcgPyAnICcgKyB0aGlzLm9wdGlvbnMuZWFzaW5nIDogJycpKTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgICAgdHlwZW9mIHRhcmdldC5hbmltYXRlZCA9PT0gJ251bWJlcicgJiYgY2xlYXJUaW1lb3V0KHRhcmdldC5hbmltYXRlZCk7XG4gICAgICAgIHRhcmdldC5hbmltYXRlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1ggPSBmYWxzZTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9IGZhbHNlO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcmVwYWludCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5vZmZzZXRXaWR0aDtcbn1cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJlYWxUaW1lKGFuaW1hdGluZ1JlY3QsIGZyb21SZWN0LCB0b1JlY3QsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhmcm9tUmVjdC50b3AgLSBhbmltYXRpbmdSZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gYW5pbWF0aW5nUmVjdC5sZWZ0LCAyKSkgLyBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbVJlY3QudG9wIC0gdG9SZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQsIDIpKSAqIG9wdGlvbnMuYW5pbWF0aW9uO1xufVxuXG52YXIgcGx1Z2lucyA9IFtdO1xudmFyIGRlZmF1bHRzID0ge1xuICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG59O1xudmFyIFBsdWdpbk1hbmFnZXIgPSB7XG4gIG1vdW50OiBmdW5jdGlvbiBtb3VudChwbHVnaW4pIHtcbiAgICAvLyBTZXQgZGVmYXVsdCBzdGF0aWMgcHJvcGVydGllc1xuICAgIGZvciAodmFyIG9wdGlvbiBpbiBkZWZhdWx0cykge1xuICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG9wdGlvbikgJiYgIShvcHRpb24gaW4gcGx1Z2luKSkge1xuICAgICAgICBwbHVnaW5bb3B0aW9uXSA9IGRlZmF1bHRzW29wdGlvbl07XG4gICAgICB9XG4gICAgfVxuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgaWYgKHAucGx1Z2luTmFtZSA9PT0gcGx1Z2luLnBsdWdpbk5hbWUpIHtcbiAgICAgICAgdGhyb3cgXCJTb3J0YWJsZTogQ2Fubm90IG1vdW50IHBsdWdpbiBcIi5jb25jYXQocGx1Z2luLnBsdWdpbk5hbWUsIFwiIG1vcmUgdGhhbiBvbmNlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICB9LFxuICBwbHVnaW5FdmVudDogZnVuY3Rpb24gcGx1Z2luRXZlbnQoZXZlbnROYW1lLCBzb3J0YWJsZSwgZXZ0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLmV2ZW50Q2FuY2VsZWQgPSBmYWxzZTtcbiAgICBldnQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZXZlbnRDYW5jZWxlZCA9IHRydWU7XG4gICAgfTtcbiAgICB2YXIgZXZlbnROYW1lR2xvYmFsID0gZXZlbnROYW1lICsgJ0dsb2JhbCc7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG4gICAgICAvLyBGaXJlIGdsb2JhbCBldmVudHMgaWYgaXQgZXhpc3RzIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXSkge1xuICAgICAgICBzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXShfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlXG4gICAgICAgIH0sIGV2dCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGZpcmUgcGx1Z2luIGV2ZW50IGlmIHBsdWdpbiBpcyBlbmFibGVkIGluIHRoaXMgc29ydGFibGUsXG4gICAgICAvLyBhbmQgcGx1Z2luIGhhcyBldmVudCBkZWZpbmVkXG4gICAgICBpZiAoc29ydGFibGUub3B0aW9uc1twbHVnaW4ucGx1Z2luTmFtZV0gJiYgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0oX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZVxuICAgICAgICB9LCBldnQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uIGluaXRpYWxpemVQbHVnaW5zKHNvcnRhYmxlLCBlbCwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgdmFyIHBsdWdpbk5hbWUgPSBwbHVnaW4ucGx1Z2luTmFtZTtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9uc1twbHVnaW5OYW1lXSAmJiAhcGx1Z2luLmluaXRpYWxpemVCeURlZmF1bHQpIHJldHVybjtcbiAgICAgIHZhciBpbml0aWFsaXplZCA9IG5ldyBwbHVnaW4oc29ydGFibGUsIGVsLCBzb3J0YWJsZS5vcHRpb25zKTtcbiAgICAgIGluaXRpYWxpemVkLnNvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICBpbml0aWFsaXplZC5vcHRpb25zID0gc29ydGFibGUub3B0aW9ucztcbiAgICAgIHNvcnRhYmxlW3BsdWdpbk5hbWVdID0gaW5pdGlhbGl6ZWQ7XG5cbiAgICAgIC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgZnJvbSBwbHVnaW5cbiAgICAgIF9leHRlbmRzKGRlZmF1bHRzLCBpbml0aWFsaXplZC5kZWZhdWx0cyk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgb3B0aW9uIGluIHNvcnRhYmxlLm9wdGlvbnMpIHtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSBjb250aW51ZTtcbiAgICAgIHZhciBtb2RpZmllZCA9IHRoaXMubW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBvcHRpb24sIHNvcnRhYmxlLm9wdGlvbnNbb3B0aW9uXSk7XG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0gPSBtb2RpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldEV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSB7XG4gICAgdmFyIGV2ZW50UHJvcGVydGllcyA9IHt9O1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbi5ldmVudFByb3BlcnRpZXMgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICAgIF9leHRlbmRzKGV2ZW50UHJvcGVydGllcywgcGx1Z2luLmV2ZW50UHJvcGVydGllcy5jYWxsKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSwgbmFtZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBldmVudFByb3BlcnRpZXM7XG4gIH0sXG4gIG1vZGlmeU9wdGlvbjogZnVuY3Rpb24gbW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBtb2RpZmllZFZhbHVlO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAvLyBQbHVnaW4gbXVzdCBleGlzdCBvbiB0aGUgU29ydGFibGVcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG5cbiAgICAgIC8vIElmIHN0YXRpYyBvcHRpb24gbGlzdGVuZXIgZXhpc3RzIGZvciB0aGlzIG9wdGlvbiwgY2FsbCBpbiB0aGUgY29udGV4dCBvZiB0aGUgU29ydGFibGUncyBpbnN0YW5jZSBvZiB0aGlzIHBsdWdpblxuICAgICAgaWYgKHBsdWdpbi5vcHRpb25MaXN0ZW5lcnMgJiYgdHlwZW9mIHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0uY2FsbChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWRWYWx1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChfcmVmKSB7XG4gIHZhciBzb3J0YWJsZSA9IF9yZWYuc29ydGFibGUsXG4gICAgcm9vdEVsID0gX3JlZi5yb290RWwsXG4gICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICB0YXJnZXRFbCA9IF9yZWYudGFyZ2V0RWwsXG4gICAgY2xvbmVFbCA9IF9yZWYuY2xvbmVFbCxcbiAgICB0b0VsID0gX3JlZi50b0VsLFxuICAgIGZyb21FbCA9IF9yZWYuZnJvbUVsLFxuICAgIG9sZEluZGV4ID0gX3JlZi5vbGRJbmRleCxcbiAgICBuZXdJbmRleCA9IF9yZWYubmV3SW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXggPSBfcmVmLm9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gX3JlZi5uZXdEcmFnZ2FibGVJbmRleCxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50LFxuICAgIHB1dFNvcnRhYmxlID0gX3JlZi5wdXRTb3J0YWJsZSxcbiAgICBleHRyYUV2ZW50UHJvcGVydGllcyA9IF9yZWYuZXh0cmFFdmVudFByb3BlcnRpZXM7XG4gIHNvcnRhYmxlID0gc29ydGFibGUgfHwgcm9vdEVsICYmIHJvb3RFbFtleHBhbmRvXTtcbiAgaWYgKCFzb3J0YWJsZSkgcmV0dXJuO1xuICB2YXIgZXZ0LFxuICAgIG9wdGlvbnMgPSBzb3J0YWJsZS5vcHRpb25zLFxuICAgIG9uTmFtZSA9ICdvbicgKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSk7XG4gIC8vIFN1cHBvcnQgZm9yIG5ldyBDdXN0b21FdmVudCBmZWF0dXJlXG4gIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICB9XG4gIGV2dC50byA9IHRvRWwgfHwgcm9vdEVsO1xuICBldnQuZnJvbSA9IGZyb21FbCB8fCByb290RWw7XG4gIGV2dC5pdGVtID0gdGFyZ2V0RWwgfHwgcm9vdEVsO1xuICBldnQuY2xvbmUgPSBjbG9uZUVsO1xuICBldnQub2xkSW5kZXggPSBvbGRJbmRleDtcbiAgZXZ0Lm5ld0luZGV4ID0gbmV3SW5kZXg7XG4gIGV2dC5vbGREcmFnZ2FibGVJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICBldnQubmV3RHJhZ2dhYmxlSW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleDtcbiAgZXZ0Lm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICBldnQucHVsbE1vZGUgPSBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlIDogdW5kZWZpbmVkO1xuICB2YXIgYWxsRXZlbnRQcm9wZXJ0aWVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhRXZlbnRQcm9wZXJ0aWVzKSwgUGx1Z2luTWFuYWdlci5nZXRFdmVudFByb3BlcnRpZXMobmFtZSwgc29ydGFibGUpKTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIGFsbEV2ZW50UHJvcGVydGllcykge1xuICAgIGV2dFtvcHRpb25dID0gYWxsRXZlbnRQcm9wZXJ0aWVzW29wdGlvbl07XG4gIH1cbiAgaWYgKHJvb3RFbCkge1xuICAgIHJvb3RFbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbiAgaWYgKG9wdGlvbnNbb25OYW1lXSkge1xuICAgIG9wdGlvbnNbb25OYW1lXS5jYWxsKHNvcnRhYmxlLCBldnQpO1xuICB9XG59XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJldnRcIl07XG52YXIgcGx1Z2luRXZlbnQgPSBmdW5jdGlvbiBwbHVnaW5FdmVudChldmVudE5hbWUsIHNvcnRhYmxlKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5ldnQsXG4gICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuICBQbHVnaW5NYW5hZ2VyLnBsdWdpbkV2ZW50LmJpbmQoU29ydGFibGUpKGV2ZW50TmFtZSwgc29ydGFibGUsIF9vYmplY3RTcHJlYWQyKHtcbiAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICBwYXJlbnRFbDogcGFyZW50RWwsXG4gICAgZ2hvc3RFbDogZ2hvc3RFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBuZXh0RWw6IG5leHRFbCxcbiAgICBsYXN0RG93bkVsOiBsYXN0RG93bkVsLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgY2xvbmVIaWRkZW46IGNsb25lSGlkZGVuLFxuICAgIGRyYWdTdGFydGVkOiBtb3ZlZCxcbiAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGUsXG4gICAgYWN0aXZlU29ydGFibGU6IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgIG9sZEluZGV4OiBvbGRJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleDogb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICBoaWRlR2hvc3RGb3JUYXJnZXQ6IF9oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQ6IF91bmhpZGVHaG9zdEZvclRhcmdldCxcbiAgICBjbG9uZU5vd0hpZGRlbjogZnVuY3Rpb24gY2xvbmVOb3dIaWRkZW4oKSB7XG4gICAgICBjbG9uZUhpZGRlbiA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9uZU5vd1Nob3duOiBmdW5jdGlvbiBjbG9uZU5vd1Nob3duKCkge1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9LFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KG5hbWUpIHtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGRhdGEpKTtcbn07XG5mdW5jdGlvbiBfZGlzcGF0Y2hFdmVudChpbmZvKSB7XG4gIGRpc3BhdGNoRXZlbnQoX29iamVjdFNwcmVhZDIoe1xuICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZSxcbiAgICBjbG9uZUVsOiBjbG9uZUVsLFxuICAgIHRhcmdldEVsOiBkcmFnRWwsXG4gICAgcm9vdEVsOiByb290RWwsXG4gICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgIG9sZERyYWdnYWJsZUluZGV4OiBvbGREcmFnZ2FibGVJbmRleCxcbiAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG5ld0RyYWdnYWJsZUluZGV4XG4gIH0sIGluZm8pKTtcbn1cbnZhciBkcmFnRWwsXG4gIHBhcmVudEVsLFxuICBnaG9zdEVsLFxuICByb290RWwsXG4gIG5leHRFbCxcbiAgbGFzdERvd25FbCxcbiAgY2xvbmVFbCxcbiAgY2xvbmVIaWRkZW4sXG4gIG9sZEluZGV4LFxuICBuZXdJbmRleCxcbiAgb2xkRHJhZ2dhYmxlSW5kZXgsXG4gIG5ld0RyYWdnYWJsZUluZGV4LFxuICBhY3RpdmVHcm91cCxcbiAgcHV0U29ydGFibGUsXG4gIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgaWdub3JlTmV4dENsaWNrID0gZmFsc2UsXG4gIHNvcnRhYmxlcyA9IFtdLFxuICB0YXBFdnQsXG4gIHRvdWNoRXZ0LFxuICBsYXN0RHgsXG4gIGxhc3REeSxcbiAgdGFwRGlzdGFuY2VMZWZ0LFxuICB0YXBEaXN0YW5jZVRvcCxcbiAgbW92ZWQsXG4gIGxhc3RUYXJnZXQsXG4gIGxhc3REaXJlY3Rpb24sXG4gIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlLFxuICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2UsXG4gIHRhcmdldE1vdmVEaXN0YW5jZSxcbiAgLy8gRm9yIHBvc2l0aW9uaW5nIGdob3N0IGFic29sdXRlbHlcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudCxcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBbXSxcbiAgLy8gKGxlZnQsIHRvcClcblxuICBfc2lsZW50ID0gZmFsc2UsXG4gIHNhdmVkSW5wdXRDaGVja2VkID0gW107XG5cbi8qKiBAY29uc3QgKi9cbnZhciBkb2N1bWVudEV4aXN0cyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcsXG4gIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ID0gSU9TLFxuICBDU1NGbG9hdFByb3BlcnR5ID0gRWRnZSB8fCBJRTExT3JMZXNzID8gJ2Nzc0Zsb2F0JyA6ICdmbG9hdCcsXG4gIC8vIFRoaXMgd2lsbCBub3QgcGFzcyBmb3IgSUU5LCBiZWNhdXNlIElFOSBEbkQgb25seSB3b3JrcyBvbiBhbmNob3JzXG4gIHN1cHBvcnREcmFnZ2FibGUgPSBkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCAmJiAhSU9TICYmICdkcmFnZ2FibGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICBzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRvY3VtZW50RXhpc3RzKSByZXR1cm47XG4gICAgLy8gZmFsc2Ugd2hlbiA8PSBJRTExXG4gICAgaWYgKElFMTFPckxlc3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgneCcpO1xuICAgIGVsLnN0eWxlLmNzc1RleHQgPSAncG9pbnRlci1ldmVudHM6YXV0byc7XG4gICAgcmV0dXJuIGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPT09ICdhdXRvJztcbiAgfSgpLFxuICBfZGV0ZWN0RGlyZWN0aW9uID0gZnVuY3Rpb24gX2RldGVjdERpcmVjdGlvbihlbCwgb3B0aW9ucykge1xuICAgIHZhciBlbENTUyA9IGNzcyhlbCksXG4gICAgICBlbFdpZHRoID0gcGFyc2VJbnQoZWxDU1Mud2lkdGgpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ0xlZnQpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ1JpZ2h0KSAtIHBhcnNlSW50KGVsQ1NTLmJvcmRlckxlZnRXaWR0aCkgLSBwYXJzZUludChlbENTUy5ib3JkZXJSaWdodFdpZHRoKSxcbiAgICAgIGNoaWxkMSA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zKSxcbiAgICAgIGNoaWxkMiA9IGdldENoaWxkKGVsLCAxLCBvcHRpb25zKSxcbiAgICAgIGZpcnN0Q2hpbGRDU1MgPSBjaGlsZDEgJiYgY3NzKGNoaWxkMSksXG4gICAgICBzZWNvbmRDaGlsZENTUyA9IGNoaWxkMiAmJiBjc3MoY2hpbGQyKSxcbiAgICAgIGZpcnN0Q2hpbGRXaWR0aCA9IGZpcnN0Q2hpbGRDU1MgJiYgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDEpLndpZHRoLFxuICAgICAgc2Vjb25kQ2hpbGRXaWR0aCA9IHNlY29uZENoaWxkQ1NTICYmIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDIpLndpZHRoO1xuICAgIGlmIChlbENTUy5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgIHJldHVybiBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uJyB8fCBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uLXJldmVyc2UnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKGVsQ1NTLmRpc3BsYXkgPT09ICdncmlkJykge1xuICAgICAgcmV0dXJuIGVsQ1NTLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoJyAnKS5sZW5ndGggPD0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGlmIChjaGlsZDEgJiYgZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdICYmIGZpcnN0Q2hpbGRDU1NbXCJmbG9hdFwiXSAhPT0gJ25vbmUnKSB7XG4gICAgICB2YXIgdG91Y2hpbmdTaWRlQ2hpbGQyID0gZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdID09PSAnbGVmdCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgcmV0dXJuIGNoaWxkMiAmJiAoc2Vjb25kQ2hpbGRDU1MuY2xlYXIgPT09ICdib3RoJyB8fCBzZWNvbmRDaGlsZENTUy5jbGVhciA9PT0gdG91Y2hpbmdTaWRlQ2hpbGQyKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDEgJiYgKGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2Jsb2NrJyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdmbGV4JyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICd0YWJsZScgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnZ3JpZCcgfHwgZmlyc3RDaGlsZFdpZHRoID49IGVsV2lkdGggJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyB8fCBjaGlsZDIgJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyAmJiBmaXJzdENoaWxkV2lkdGggKyBzZWNvbmRDaGlsZFdpZHRoID4gZWxXaWR0aCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICB9LFxuICBfZHJhZ0VsSW5Sb3dDb2x1bW4gPSBmdW5jdGlvbiBfZHJhZ0VsSW5Sb3dDb2x1bW4oZHJhZ1JlY3QsIHRhcmdldFJlY3QsIHZlcnRpY2FsKSB7XG4gICAgdmFyIGRyYWdFbFMxT3BwID0gdmVydGljYWwgPyBkcmFnUmVjdC5sZWZ0IDogZHJhZ1JlY3QudG9wLFxuICAgICAgZHJhZ0VsUzJPcHAgPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LnJpZ2h0IDogZHJhZ1JlY3QuYm90dG9tLFxuICAgICAgZHJhZ0VsT3BwTGVuZ3RoID0gdmVydGljYWwgPyBkcmFnUmVjdC53aWR0aCA6IGRyYWdSZWN0LmhlaWdodCxcbiAgICAgIHRhcmdldFMxT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmxlZnQgOiB0YXJnZXRSZWN0LnRvcCxcbiAgICAgIHRhcmdldFMyT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LnJpZ2h0IDogdGFyZ2V0UmVjdC5ib3R0b20sXG4gICAgICB0YXJnZXRPcHBMZW5ndGggPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3Qud2lkdGggOiB0YXJnZXRSZWN0LmhlaWdodDtcbiAgICByZXR1cm4gZHJhZ0VsUzFPcHAgPT09IHRhcmdldFMxT3BwIHx8IGRyYWdFbFMyT3BwID09PSB0YXJnZXRTMk9wcCB8fCBkcmFnRWxTMU9wcCArIGRyYWdFbE9wcExlbmd0aCAvIDIgPT09IHRhcmdldFMxT3BwICsgdGFyZ2V0T3BwTGVuZ3RoIC8gMjtcbiAgfSxcbiAgLyoqXHJcbiAgICogRGV0ZWN0cyBmaXJzdCBuZWFyZXN0IGVtcHR5IHNvcnRhYmxlIHRvIFggYW5kIFkgcG9zaXRpb24gdXNpbmcgZW1wdHlJbnNlcnRUaHJlc2hvbGQuXHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICAgICAgWCBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgICAgIFkgcG9zaXRpb25cclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICBFbGVtZW50IG9mIHRoZSBmaXJzdCBmb3VuZCBuZWFyZXN0IFNvcnRhYmxlXHJcbiAgICovXG4gIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSA9IGZ1bmN0aW9uIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSh4LCB5KSB7XG4gICAgdmFyIHJldDtcbiAgICBzb3J0YWJsZXMuc29tZShmdW5jdGlvbiAoc29ydGFibGUpIHtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSBzb3J0YWJsZVtleHBhbmRvXS5vcHRpb25zLmVtcHR5SW5zZXJ0VGhyZXNob2xkO1xuICAgICAgaWYgKCF0aHJlc2hvbGQgfHwgbGFzdENoaWxkKHNvcnRhYmxlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJlY3QgPSBnZXRSZWN0KHNvcnRhYmxlKSxcbiAgICAgICAgaW5zaWRlSG9yaXpvbnRhbGx5ID0geCA+PSByZWN0LmxlZnQgLSB0aHJlc2hvbGQgJiYgeCA8PSByZWN0LnJpZ2h0ICsgdGhyZXNob2xkLFxuICAgICAgICBpbnNpZGVWZXJ0aWNhbGx5ID0geSA+PSByZWN0LnRvcCAtIHRocmVzaG9sZCAmJiB5IDw9IHJlY3QuYm90dG9tICsgdGhyZXNob2xkO1xuICAgICAgaWYgKGluc2lkZUhvcml6b250YWxseSAmJiBpbnNpZGVWZXJ0aWNhbGx5KSB7XG4gICAgICAgIHJldHVybiByZXQgPSBzb3J0YWJsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBfcHJlcGFyZUdyb3VwID0gZnVuY3Rpb24gX3ByZXBhcmVHcm91cChvcHRpb25zKSB7XG4gICAgZnVuY3Rpb24gdG9Gbih2YWx1ZSwgcHVsbCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgZHJhZ0VsLCBldnQpIHtcbiAgICAgICAgdmFyIHNhbWVHcm91cCA9IHRvLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiBmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiB0by5vcHRpb25zLmdyb3VwLm5hbWUgPT09IGZyb20ub3B0aW9ucy5ncm91cC5uYW1lO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiAocHVsbCB8fCBzYW1lR3JvdXApKSB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIHZhbHVlXG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIGFuZCBwdXQgdmFsdWUgaWYgc2FtZSBncm91cFxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHB1bGwgJiYgdmFsdWUgPT09ICdjbG9uZScpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHRvRm4odmFsdWUodG8sIGZyb20sIGRyYWdFbCwgZXZ0KSwgcHVsbCkodG8sIGZyb20sIGRyYWdFbCwgZXZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb3RoZXJHcm91cCA9IChwdWxsID8gdG8gOiBmcm9tKS5vcHRpb25zLmdyb3VwLm5hbWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09IG90aGVyR3JvdXAgfHwgdmFsdWUuam9pbiAmJiB2YWx1ZS5pbmRleE9mKG90aGVyR3JvdXApID4gLTE7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHZhciBncm91cCA9IHt9O1xuICAgIHZhciBvcmlnaW5hbEdyb3VwID0gb3B0aW9ucy5ncm91cDtcbiAgICBpZiAoIW9yaWdpbmFsR3JvdXAgfHwgX3R5cGVvZihvcmlnaW5hbEdyb3VwKSAhPSAnb2JqZWN0Jykge1xuICAgICAgb3JpZ2luYWxHcm91cCA9IHtcbiAgICAgICAgbmFtZTogb3JpZ2luYWxHcm91cFxuICAgICAgfTtcbiAgICB9XG4gICAgZ3JvdXAubmFtZSA9IG9yaWdpbmFsR3JvdXAubmFtZTtcbiAgICBncm91cC5jaGVja1B1bGwgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHVsbCwgdHJ1ZSk7XG4gICAgZ3JvdXAuY2hlY2tQdXQgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHV0KTtcbiAgICBncm91cC5yZXZlcnRDbG9uZSA9IG9yaWdpbmFsR3JvdXAucmV2ZXJ0Q2xvbmU7XG4gICAgb3B0aW9ucy5ncm91cCA9IGdyb3VwO1xuICB9LFxuICBfaGlkZUdob3N0Rm9yVGFyZ2V0ID0gZnVuY3Rpb24gX2hpZGVHaG9zdEZvclRhcmdldCgpIHtcbiAgICBpZiAoIXN1cHBvcnRDc3NQb2ludGVyRXZlbnRzICYmIGdob3N0RWwpIHtcbiAgICAgIGNzcyhnaG9zdEVsLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9LFxuICBfdW5oaWRlR2hvc3RGb3JUYXJnZXQgPSBmdW5jdGlvbiBfdW5oaWRlR2hvc3RGb3JUYXJnZXQoKSB7XG4gICAgaWYgKCFzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyAmJiBnaG9zdEVsKSB7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgfVxuICB9O1xuXG4vLyAjMTE4NCBmaXggLSBQcmV2ZW50IGNsaWNrIGV2ZW50IG9uIGZhbGxiYWNrIGlmIGRyYWdnZWQgYnV0IGl0ZW0gbm90IGNoYW5nZWQgcG9zaXRpb25cbmlmIChkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoaWdub3JlTmV4dENsaWNrKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAmJiBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHRydWUpO1xufVxudmFyIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50ID0gZnVuY3Rpb24gbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQoZXZ0KSB7XG4gIGlmIChkcmFnRWwpIHtcbiAgICBldnQgPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0O1xuICAgIHZhciBuZWFyZXN0ID0gX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlKGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSk7XG4gICAgaWYgKG5lYXJlc3QpIHtcbiAgICAgIC8vIENyZWF0ZSBpbWl0YXRpb24gZXZlbnRcbiAgICAgIHZhciBldmVudCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSBpbiBldnQpIHtcbiAgICAgICAgaWYgKGV2dC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGV2ZW50W2ldID0gZXZ0W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC50YXJnZXQgPSBldmVudC5yb290RWwgPSBuZWFyZXN0O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB2b2lkIDA7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSB2b2lkIDA7XG4gICAgICBuZWFyZXN0W2V4cGFuZG9dLl9vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2NoZWNrT3V0c2lkZVRhcmdldEVsID0gZnVuY3Rpb24gX2NoZWNrT3V0c2lkZVRhcmdldEVsKGV2dCkge1xuICBpZiAoZHJhZ0VsKSB7XG4gICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbChldnQudGFyZ2V0KTtcbiAgfVxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyAgU29ydGFibGVcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIFtvcHRpb25zXVxyXG4gKi9cbmZ1bmN0aW9uIFNvcnRhYmxlKGVsLCBvcHRpb25zKSB7XG4gIGlmICghKGVsICYmIGVsLm5vZGVUeXBlICYmIGVsLm5vZGVUeXBlID09PSAxKSkge1xuICAgIHRocm93IFwiU29ydGFibGU6IGBlbGAgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCwgbm90IFwiLmNvbmNhdCh7fS50b1N0cmluZy5jYWxsKGVsKSk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsOyAvLyByb290IGVsZW1lbnRcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zKTtcblxuICAvLyBFeHBvcnQgaW5zdGFuY2VcbiAgZWxbZXhwYW5kb10gPSB0aGlzO1xuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgZ3JvdXA6IG51bGwsXG4gICAgc29ydDogdHJ1ZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc3RvcmU6IG51bGwsXG4gICAgaGFuZGxlOiBudWxsLFxuICAgIGRyYWdnYWJsZTogL15bdW9dbCQvaS50ZXN0KGVsLm5vZGVOYW1lKSA/ICc+bGknIDogJz4qJyxcbiAgICBzd2FwVGhyZXNob2xkOiAxLFxuICAgIC8vIHBlcmNlbnRhZ2U7IDAgPD0geCA8PSAxXG4gICAgaW52ZXJ0U3dhcDogZmFsc2UsXG4gICAgLy8gaW52ZXJ0IGFsd2F5c1xuICAgIGludmVydGVkU3dhcFRocmVzaG9sZDogbnVsbCxcbiAgICAvLyB3aWxsIGJlIHNldCB0byBzYW1lIGFzIHN3YXBUaHJlc2hvbGQgaWYgZGVmYXVsdFxuICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgIGRpcmVjdGlvbjogZnVuY3Rpb24gZGlyZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9kZXRlY3REaXJlY3Rpb24oZWwsIHRoaXMub3B0aW9ucyk7XG4gICAgfSxcbiAgICBnaG9zdENsYXNzOiAnc29ydGFibGUtZ2hvc3QnLFxuICAgIGNob3NlbkNsYXNzOiAnc29ydGFibGUtY2hvc2VuJyxcbiAgICBkcmFnQ2xhc3M6ICdzb3J0YWJsZS1kcmFnJyxcbiAgICBpZ25vcmU6ICdhLCBpbWcnLFxuICAgIGZpbHRlcjogbnVsbCxcbiAgICBwcmV2ZW50T25GaWx0ZXI6IHRydWUsXG4gICAgYW5pbWF0aW9uOiAwLFxuICAgIGVhc2luZzogbnVsbCxcbiAgICBzZXREYXRhOiBmdW5jdGlvbiBzZXREYXRhKGRhdGFUcmFuc2ZlciwgZHJhZ0VsKSB7XG4gICAgICBkYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsIGRyYWdFbC50ZXh0Q29udGVudCk7XG4gICAgfSxcbiAgICBkcm9wQnViYmxlOiBmYWxzZSxcbiAgICBkcmFnb3ZlckJ1YmJsZTogZmFsc2UsXG4gICAgZGF0YUlkQXR0cjogJ2RhdGEtaWQnLFxuICAgIGRlbGF5OiAwLFxuICAgIGRlbGF5T25Ub3VjaE9ubHk6IGZhbHNlLFxuICAgIHRvdWNoU3RhcnRUaHJlc2hvbGQ6IChOdW1iZXIucGFyc2VJbnQgPyBOdW1iZXIgOiB3aW5kb3cpLnBhcnNlSW50KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxMCkgfHwgMSxcbiAgICBmb3JjZUZhbGxiYWNrOiBmYWxzZSxcbiAgICBmYWxsYmFja0NsYXNzOiAnc29ydGFibGUtZmFsbGJhY2snLFxuICAgIGZhbGxiYWNrT25Cb2R5OiBmYWxzZSxcbiAgICBmYWxsYmFja1RvbGVyYW5jZTogMCxcbiAgICBmYWxsYmFja09mZnNldDoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9LFxuICAgIHN1cHBvcnRQb2ludGVyOiBTb3J0YWJsZS5zdXBwb3J0UG9pbnRlciAhPT0gZmFsc2UgJiYgJ1BvaW50ZXJFdmVudCcgaW4gd2luZG93ICYmICFTYWZhcmksXG4gICAgZW1wdHlJbnNlcnRUaHJlc2hvbGQ6IDVcbiAgfTtcbiAgUGx1Z2luTWFuYWdlci5pbml0aWFsaXplUGx1Z2lucyh0aGlzLCBlbCwgZGVmYXVsdHMpO1xuXG4gIC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcbiAgZm9yICh2YXIgbmFtZSBpbiBkZWZhdWx0cykge1xuICAgICEobmFtZSBpbiBvcHRpb25zKSAmJiAob3B0aW9uc1tuYW1lXSA9IGRlZmF1bHRzW25hbWVdKTtcbiAgfVxuICBfcHJlcGFyZUdyb3VwKG9wdGlvbnMpO1xuXG4gIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldHVwIGRyYWcgbW9kZVxuICB0aGlzLm5hdGl2ZURyYWdnYWJsZSA9IG9wdGlvbnMuZm9yY2VGYWxsYmFjayA/IGZhbHNlIDogc3VwcG9ydERyYWdnYWJsZTtcbiAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgLy8gVG91Y2ggc3RhcnQgdGhyZXNob2xkIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gdGhlIG5hdGl2ZSBkcmFnc3RhcnQgdGhyZXNob2xkXG4gICAgdGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQgPSAxO1xuICB9XG5cbiAgLy8gQmluZCBldmVudHNcbiAgaWYgKG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICBvbihlbCwgJ3BvaW50ZXJkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gIH0gZWxzZSB7XG4gICAgb24oZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvbihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgfVxuICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICBvbihlbCwgJ2RyYWdvdmVyJywgdGhpcyk7XG4gICAgb24oZWwsICdkcmFnZW50ZXInLCB0aGlzKTtcbiAgfVxuICBzb3J0YWJsZXMucHVzaCh0aGlzLmVsKTtcblxuICAvLyBSZXN0b3JlIHNvcnRpbmdcbiAgb3B0aW9ucy5zdG9yZSAmJiBvcHRpb25zLnN0b3JlLmdldCAmJiB0aGlzLnNvcnQob3B0aW9ucy5zdG9yZS5nZXQodGhpcykgfHwgW10pO1xuXG4gIC8vIEFkZCBhbmltYXRpb24gc3RhdGUgbWFuYWdlclxuICBfZXh0ZW5kcyh0aGlzLCBBbmltYXRpb25TdGF0ZU1hbmFnZXIoKSk7XG59XG5Tb3J0YWJsZS5wcm90b3R5cGUgPSAvKiogQGxlbmRzIFNvcnRhYmxlLnByb3RvdHlwZSAqL3tcbiAgY29uc3RydWN0b3I6IFNvcnRhYmxlLFxuICBfaXNPdXRzaWRlVGhpc0VsOiBmdW5jdGlvbiBfaXNPdXRzaWRlVGhpc0VsKHRhcmdldCkge1xuICAgIGlmICghdGhpcy5lbC5jb250YWlucyh0YXJnZXQpICYmIHRhcmdldCAhPT0gdGhpcy5lbCkge1xuICAgICAgbGFzdFRhcmdldCA9IG51bGw7XG4gICAgfVxuICB9LFxuICBfZ2V0RGlyZWN0aW9uOiBmdW5jdGlvbiBfZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5vcHRpb25zLmRpcmVjdGlvbi5jYWxsKHRoaXMsIGV2dCwgdGFyZ2V0LCBkcmFnRWwpIDogdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcbiAgfSxcbiAgX29uVGFwU3RhcnQ6IGZ1bmN0aW9uIF9vblRhcFN0YXJ0KCAvKiogRXZlbnR8VG91Y2hFdmVudCAqL2V2dCkge1xuICAgIGlmICghZXZ0LmNhbmNlbGFibGUpIHJldHVybjtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgZWwgPSB0aGlzLmVsLFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIHByZXZlbnRPbkZpbHRlciA9IG9wdGlvbnMucHJldmVudE9uRmlsdGVyLFxuICAgICAgdHlwZSA9IGV2dC50eXBlLFxuICAgICAgdG91Y2ggPSBldnQudG91Y2hlcyAmJiBldnQudG91Y2hlc1swXSB8fCBldnQucG9pbnRlclR5cGUgJiYgZXZ0LnBvaW50ZXJUeXBlID09PSAndG91Y2gnICYmIGV2dCxcbiAgICAgIHRhcmdldCA9ICh0b3VjaCB8fCBldnQpLnRhcmdldCxcbiAgICAgIG9yaWdpbmFsVGFyZ2V0ID0gZXZ0LnRhcmdldC5zaGFkb3dSb290ICYmIChldnQucGF0aCAmJiBldnQucGF0aFswXSB8fCBldnQuY29tcG9zZWRQYXRoICYmIGV2dC5jb21wb3NlZFBhdGgoKVswXSkgfHwgdGFyZ2V0LFxuICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgX3NhdmVJbnB1dENoZWNrZWRTdGF0ZShlbCk7XG5cbiAgICAvLyBEb24ndCB0cmlnZ2VyIHN0YXJ0IGV2ZW50IHdoZW4gYW4gZWxlbWVudCBpcyBiZWVuIGRyYWdnZWQsIG90aGVyd2lzZSB0aGUgZXZ0Lm9sZGluZGV4IGFsd2F5cyB3cm9uZyB3aGVuIHNldCBvcHRpb24uZ3JvdXAuXG4gICAgaWYgKGRyYWdFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoL21vdXNlZG93bnxwb2ludGVyZG93bi8udGVzdCh0eXBlKSAmJiBldnQuYnV0dG9uICE9PSAwIHx8IG9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjsgLy8gb25seSBsZWZ0IGJ1dHRvbiBhbmQgZW5hYmxlZFxuICAgIH1cblxuICAgIC8vIGNhbmNlbCBkbmQgaWYgb3JpZ2luYWwgdGFyZ2V0IGlzIGNvbnRlbnQgZWRpdGFibGVcbiAgICBpZiAob3JpZ2luYWxUYXJnZXQuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTYWZhcmkgaWdub3JlcyBmdXJ0aGVyIGV2ZW50IGhhbmRsaW5nIGFmdGVyIG1vdXNlZG93blxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnZ2FibGUgJiYgU2FmYXJpICYmIHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0VMRUNUJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0YXJnZXQgPSBjbG9zZXN0KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCBmYWxzZSk7XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuYW5pbWF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxhc3REb3duRWwgPT09IHRhcmdldCkge1xuICAgICAgLy8gSWdub3JpbmcgZHVwbGljYXRlIGBkb3duYFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGRyYWdnZWQgZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudFxuICAgIG9sZEluZGV4ID0gaW5kZXgodGFyZ2V0KTtcbiAgICBvbGREcmFnZ2FibGVJbmRleCA9IGluZGV4KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuXG4gICAgLy8gQ2hlY2sgZmlsdGVyXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChmaWx0ZXIuY2FsbCh0aGlzLCBldnQsIHRhcmdldCwgdGhpcykpIHtcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICByb290RWw6IG9yaWdpbmFsVGFyZ2V0LFxuICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgIHRhcmdldEVsOiB0YXJnZXQsXG4gICAgICAgICAgdG9FbDogZWwsXG4gICAgICAgICAgZnJvbUVsOiBlbFxuICAgICAgICB9KTtcbiAgICAgICAgcGx1Z2luRXZlbnQoJ2ZpbHRlcicsIF90aGlzLCB7XG4gICAgICAgICAgZXZ0OiBldnRcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXZlbnRPbkZpbHRlciAmJiBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuOyAvLyBjYW5jZWwgZG5kXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWx0ZXIpIHtcbiAgICAgIGZpbHRlciA9IGZpbHRlci5zcGxpdCgnLCcpLnNvbWUoZnVuY3Rpb24gKGNyaXRlcmlhKSB7XG4gICAgICAgIGNyaXRlcmlhID0gY2xvc2VzdChvcmlnaW5hbFRhcmdldCwgY3JpdGVyaWEudHJpbSgpLCBlbCwgZmFsc2UpO1xuICAgICAgICBpZiAoY3JpdGVyaWEpIHtcbiAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgICAgICByb290RWw6IGNyaXRlcmlhLFxuICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcicsXG4gICAgICAgICAgICB0YXJnZXRFbDogdGFyZ2V0LFxuICAgICAgICAgICAgZnJvbUVsOiBlbCxcbiAgICAgICAgICAgIHRvRWw6IGVsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGx1Z2luRXZlbnQoJ2ZpbHRlcicsIF90aGlzLCB7XG4gICAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgcHJldmVudE9uRmlsdGVyICYmIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47IC8vIGNhbmNlbCBkbmRcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaGFuZGxlICYmICFjbG9zZXN0KG9yaWdpbmFsVGFyZ2V0LCBvcHRpb25zLmhhbmRsZSwgZWwsIGZhbHNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmUgYGRyYWdzdGFydGBcbiAgICB0aGlzLl9wcmVwYXJlRHJhZ1N0YXJ0KGV2dCwgdG91Y2gsIHRhcmdldCk7XG4gIH0sXG4gIF9wcmVwYXJlRHJhZ1N0YXJ0OiBmdW5jdGlvbiBfcHJlcGFyZURyYWdTdGFydCggLyoqIEV2ZW50ICovZXZ0LCAvKiogVG91Y2ggKi90b3VjaCwgLyoqIEhUTUxFbGVtZW50ICovdGFyZ2V0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgIGVsID0gX3RoaXMuZWwsXG4gICAgICBvcHRpb25zID0gX3RoaXMub3B0aW9ucyxcbiAgICAgIG93bmVyRG9jdW1lbnQgPSBlbC5vd25lckRvY3VtZW50LFxuICAgICAgZHJhZ1N0YXJ0Rm47XG4gICAgaWYgKHRhcmdldCAmJiAhZHJhZ0VsICYmIHRhcmdldC5wYXJlbnROb2RlID09PSBlbCkge1xuICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgcm9vdEVsID0gZWw7XG4gICAgICBkcmFnRWwgPSB0YXJnZXQ7XG4gICAgICBwYXJlbnRFbCA9IGRyYWdFbC5wYXJlbnROb2RlO1xuICAgICAgbmV4dEVsID0gZHJhZ0VsLm5leHRTaWJsaW5nO1xuICAgICAgbGFzdERvd25FbCA9IHRhcmdldDtcbiAgICAgIGFjdGl2ZUdyb3VwID0gb3B0aW9ucy5ncm91cDtcbiAgICAgIFNvcnRhYmxlLmRyYWdnZWQgPSBkcmFnRWw7XG4gICAgICB0YXBFdnQgPSB7XG4gICAgICAgIHRhcmdldDogZHJhZ0VsLFxuICAgICAgICBjbGllbnRYOiAodG91Y2ggfHwgZXZ0KS5jbGllbnRYLFxuICAgICAgICBjbGllbnRZOiAodG91Y2ggfHwgZXZ0KS5jbGllbnRZXG4gICAgICB9O1xuICAgICAgdGFwRGlzdGFuY2VMZWZ0ID0gdGFwRXZ0LmNsaWVudFggLSBkcmFnUmVjdC5sZWZ0O1xuICAgICAgdGFwRGlzdGFuY2VUb3AgPSB0YXBFdnQuY2xpZW50WSAtIGRyYWdSZWN0LnRvcDtcbiAgICAgIHRoaXMuX2xhc3RYID0gKHRvdWNoIHx8IGV2dCkuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xhc3RZID0gKHRvdWNoIHx8IGV2dCkuY2xpZW50WTtcbiAgICAgIGRyYWdFbC5zdHlsZVsnd2lsbC1jaGFuZ2UnXSA9ICdhbGwnO1xuICAgICAgZHJhZ1N0YXJ0Rm4gPSBmdW5jdGlvbiBkcmFnU3RhcnRGbigpIHtcbiAgICAgICAgcGx1Z2luRXZlbnQoJ2RlbGF5RW5kZWQnLCBfdGhpcywge1xuICAgICAgICAgIGV2dDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIF90aGlzLl9vbkRyb3AoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVsYXllZCBkcmFnIGhhcyBiZWVuIHRyaWdnZXJlZFxuICAgICAgICAvLyB3ZSBjYW4gcmUtZW5hYmxlIHRoZSBldmVudHM6IHRvdWNobW92ZS9tb3VzZW1vdmVcbiAgICAgICAgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpO1xuICAgICAgICBpZiAoIUZpcmVGb3ggJiYgX3RoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgZHJhZ0VsLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIHRoZSBldmVudHM6IGRyYWdzdGFydC9kcmFnZW5kXG4gICAgICAgIF90aGlzLl90cmlnZ2VyRHJhZ1N0YXJ0KGV2dCwgdG91Y2gpO1xuXG4gICAgICAgIC8vIERyYWcgc3RhcnQgZXZlbnRcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICBuYW1lOiAnY2hvb3NlJyxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hvc2VuIGl0ZW1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmNob3NlbkNsYXNzLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIERpc2FibGUgXCJkcmFnZ2FibGVcIlxuICAgICAgb3B0aW9ucy5pZ25vcmUuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuICAgICAgICBmaW5kKGRyYWdFbCwgY3JpdGVyaWEudHJpbSgpLCBfZGlzYWJsZURyYWdnYWJsZSk7XG4gICAgICB9KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdkcmFnb3ZlcicsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG5cbiAgICAgIC8vIE1ha2UgZHJhZ0VsIGRyYWdnYWJsZSAobXVzdCBiZSBiZWZvcmUgZGVsYXkgZm9yIEZpcmVGb3gpXG4gICAgICBpZiAoRmlyZUZveCAmJiB0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZCA9IDQ7XG4gICAgICAgIGRyYWdFbC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcGx1Z2luRXZlbnQoJ2RlbGF5U3RhcnQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcblxuICAgICAgLy8gRGVsYXkgaXMgaW1wb3NzaWJsZSBmb3IgbmF0aXZlIERuRCBpbiBFZGdlIG9yIElFXG4gICAgICBpZiAob3B0aW9ucy5kZWxheSAmJiAoIW9wdGlvbnMuZGVsYXlPblRvdWNoT25seSB8fCB0b3VjaCkgJiYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSB8fCAhKEVkZ2UgfHwgSUUxMU9yTGVzcykpKSB7XG4gICAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgdGhpcy5fb25Ecm9wKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIG1vdmVzIHRoZSBwb2ludGVyIG9yIGxldCBnbyB0aGUgY2xpY2sgb3IgdG91Y2hcbiAgICAgICAgLy8gYmVmb3JlIHRoZSBkZWxheSBoYXMgYmVlbiByZWFjaGVkOlxuICAgICAgICAvLyBkaXNhYmxlIHRoZSBkZWxheWVkIGRyYWdcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwb3J0UG9pbnRlciAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgX3RoaXMuX2RyYWdTdGFydFRpbWVyID0gc2V0VGltZW91dChkcmFnU3RhcnRGbiwgb3B0aW9ucy5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnU3RhcnRGbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcjogZnVuY3Rpb24gX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciggLyoqIFRvdWNoRXZlbnR8UG9pbnRlckV2ZW50ICoqL2UpIHtcbiAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuICAgIGlmIChNYXRoLm1heChNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdGhpcy5fbGFzdFkpKSA+PSBNYXRoLmZsb29yKHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkIC8gKHRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKCk7XG4gICAgfVxuICB9LFxuICBfZGlzYWJsZURlbGF5ZWREcmFnOiBmdW5jdGlvbiBfZGlzYWJsZURlbGF5ZWREcmFnKCkge1xuICAgIGRyYWdFbCAmJiBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gIH0sXG4gIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHM6IGZ1bmN0aW9uIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICB9LFxuICBfdHJpZ2dlckRyYWdTdGFydDogZnVuY3Rpb24gX3RyaWdnZXJEcmFnU3RhcnQoIC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gpIHtcbiAgICB0b3VjaCA9IHRvdWNoIHx8IGV2dC5wb2ludGVyVHlwZSA9PSAndG91Y2gnICYmIGV2dDtcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlIHx8IHRvdWNoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvdWNoKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgIG9uKHJvb3RFbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgLy8gVGltZW91dCBuZWNjZXNzYXJ5IGZvciBJRTlcbiAgICAgICAgX25leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9LFxuICBfZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIF9kcmFnU3RhcnRlZChmYWxsYmFjaywgZXZ0KSB7XG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgIGlmIChyb290RWwgJiYgZHJhZ0VsKSB7XG4gICAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0ZWQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgX2NoZWNrT3V0c2lkZVRhcmdldEVsKTtcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBBcHBseSBlZmZlY3RcbiAgICAgICFmYWxsYmFjayAmJiB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICBTb3J0YWJsZS5hY3RpdmUgPSB0aGlzO1xuICAgICAgZmFsbGJhY2sgJiYgdGhpcy5fYXBwZW5kR2hvc3QoKTtcblxuICAgICAgLy8gRHJhZyBzdGFydCBldmVudFxuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgbmFtZTogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbnVsbGluZygpO1xuICAgIH1cbiAgfSxcbiAgX2VtdWxhdGVEcmFnT3ZlcjogZnVuY3Rpb24gX2VtdWxhdGVEcmFnT3ZlcigpIHtcbiAgICBpZiAodG91Y2hFdnQpIHtcbiAgICAgIHRoaXMuX2xhc3RYID0gdG91Y2hFdnQuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xhc3RZID0gdG91Y2hFdnQuY2xpZW50WTtcbiAgICAgIF9oaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgdmFyIHBhcmVudCA9IHRhcmdldDtcbiAgICAgIHdoaWxlICh0YXJnZXQgJiYgdGFyZ2V0LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnNoYWRvd1Jvb3QuZWxlbWVudEZyb21Qb2ludCh0b3VjaEV2dC5jbGllbnRYLCB0b3VjaEV2dC5jbGllbnRZKTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gcGFyZW50KSBicmVhaztcbiAgICAgICAgcGFyZW50ID0gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbCh0YXJnZXQpO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHBhcmVudFtleHBhbmRvXSkge1xuICAgICAgICAgICAgdmFyIGluc2VydGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgaW5zZXJ0ZWQgPSBwYXJlbnRbZXhwYW5kb10uX29uRHJhZ092ZXIoe1xuICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaEV2dC5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaEV2dC5jbGllbnRZLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluc2VydGVkICYmICF0aGlzLm9wdGlvbnMuZHJhZ292ZXJCdWJibGUpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IHBhcmVudDsgLy8gc3RvcmUgbGFzdCBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqLyB3aGlsZSAocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgICAgX3VuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gICAgfVxuICB9LFxuICBfb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIF9vblRvdWNoTW92ZSggLyoqVG91Y2hFdmVudCovZXZ0KSB7XG4gICAgaWYgKHRhcEV2dCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGZhbGxiYWNrVG9sZXJhbmNlID0gb3B0aW9ucy5mYWxsYmFja1RvbGVyYW5jZSxcbiAgICAgICAgZmFsbGJhY2tPZmZzZXQgPSBvcHRpb25zLmZhbGxiYWNrT2Zmc2V0LFxuICAgICAgICB0b3VjaCA9IGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQsXG4gICAgICAgIGdob3N0TWF0cml4ID0gZ2hvc3RFbCAmJiBtYXRyaXgoZ2hvc3RFbCwgdHJ1ZSksXG4gICAgICAgIHNjYWxlWCA9IGdob3N0RWwgJiYgZ2hvc3RNYXRyaXggJiYgZ2hvc3RNYXRyaXguYSxcbiAgICAgICAgc2NhbGVZID0gZ2hvc3RFbCAmJiBnaG9zdE1hdHJpeCAmJiBnaG9zdE1hdHJpeC5kLFxuICAgICAgICByZWxhdGl2ZVNjcm9sbE9mZnNldCA9IFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgJiYgZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCksXG4gICAgICAgIGR4ID0gKHRvdWNoLmNsaWVudFggLSB0YXBFdnQuY2xpZW50WCArIGZhbGxiYWNrT2Zmc2V0LngpIC8gKHNjYWxlWCB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzBdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMF0gOiAwKSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgIGR5ID0gKHRvdWNoLmNsaWVudFkgLSB0YXBFdnQuY2xpZW50WSArIGZhbGxiYWNrT2Zmc2V0LnkpIC8gKHNjYWxlWSB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzFdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMV0gOiAwKSAvIChzY2FsZVkgfHwgMSk7XG5cbiAgICAgIC8vIG9ubHkgc2V0IHRoZSBzdGF0dXMgdG8gZHJhZ2dpbmcsIHdoZW4gd2UgYXJlIGFjdHVhbGx5IGRyYWdnaW5nXG4gICAgICBpZiAoIVNvcnRhYmxlLmFjdGl2ZSAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAoZmFsbGJhY2tUb2xlcmFuY2UgJiYgTWF0aC5tYXgoTWF0aC5hYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgTWF0aC5hYnModG91Y2guY2xpZW50WSAtIHRoaXMuX2xhc3RZKSkgPCBmYWxsYmFja1RvbGVyYW5jZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vbkRyYWdTdGFydChldnQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGdob3N0RWwpIHtcbiAgICAgICAgaWYgKGdob3N0TWF0cml4KSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZSArPSBkeCAtIChsYXN0RHggfHwgMCk7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZiArPSBkeSAtIChsYXN0RHkgfHwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXggPSB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgZTogZHgsXG4gICAgICAgICAgICBmOiBkeVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNzc01hdHJpeCA9IFwibWF0cml4KFwiLmNvbmNhdChnaG9zdE1hdHJpeC5hLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmIsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguYywgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5kLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmUsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZiwgXCIpXCIpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ3dlYmtpdFRyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnbW96VHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICdtc1RyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgbGFzdER4ID0gZHg7XG4gICAgICAgIGxhc3REeSA9IGR5O1xuICAgICAgICB0b3VjaEV2dCA9IHRvdWNoO1xuICAgICAgfVxuICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuICBfYXBwZW5kR2hvc3Q6IGZ1bmN0aW9uIF9hcHBlbmRHaG9zdCgpIHtcbiAgICAvLyBCdWcgaWYgdXNpbmcgc2NhbGUoKTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjYzNzA1OFxuICAgIC8vIE5vdCBiZWluZyBhZGp1c3RlZCBmb3JcbiAgICBpZiAoIWdob3N0RWwpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLm9wdGlvbnMuZmFsbGJhY2tPbkJvZHkgPyBkb2N1bWVudC5ib2R5IDogcm9vdEVsLFxuICAgICAgICByZWN0ID0gZ2V0UmVjdChkcmFnRWwsIHRydWUsIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5LCB0cnVlLCBjb250YWluZXIpLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBQb3NpdGlvbiBhYnNvbHV0ZWx5XG4gICAgICBpZiAoUG9zaXRpb25HaG9zdEFic29sdXRlbHkpIHtcbiAgICAgICAgLy8gR2V0IHJlbGF0aXZlbHkgcG9zaXRpb25lZCBwYXJlbnRcbiAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGNvbnRhaW5lcjtcbiAgICAgICAgd2hpbGUgKGNzcyhnaG9zdFJlbGF0aXZlUGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgJiYgY3NzKGdob3N0UmVsYXRpdmVQYXJlbnQsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGdob3N0UmVsYXRpdmVQYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCA9PT0gZG9jdW1lbnQpIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgICAgcmVjdC50b3AgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgcmVjdC5sZWZ0ICs9IGdob3N0UmVsYXRpdmVQYXJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsID0gZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCk7XG4gICAgICB9XG4gICAgICBnaG9zdEVsID0gZHJhZ0VsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5mYWxsYmFja0NsYXNzLCB0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCB0cnVlKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNpdGlvbicsICcnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgY3NzKGdob3N0RWwsICdib3gtc2l6aW5nJywgJ2JvcmRlci1ib3gnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbWFyZ2luJywgMCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RvcCcsIHJlY3QudG9wKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbGVmdCcsIHJlY3QubGVmdCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3dpZHRoJywgcmVjdC53aWR0aCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2hlaWdodCcsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnb3BhY2l0eScsICcwLjgnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAncG9zaXRpb24nLCBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnekluZGV4JywgJzEwMDAwMCcpO1xuICAgICAgY3NzKGdob3N0RWwsICdwb2ludGVyRXZlbnRzJywgJ25vbmUnKTtcbiAgICAgIFNvcnRhYmxlLmdob3N0ID0gZ2hvc3RFbDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnaG9zdEVsKTtcblxuICAgICAgLy8gU2V0IHRyYW5zZm9ybS1vcmlnaW5cbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtLW9yaWdpbicsIHRhcERpc3RhbmNlTGVmdCAvIHBhcnNlSW50KGdob3N0RWwuc3R5bGUud2lkdGgpICogMTAwICsgJyUgJyArIHRhcERpc3RhbmNlVG9wIC8gcGFyc2VJbnQoZ2hvc3RFbC5zdHlsZS5oZWlnaHQpICogMTAwICsgJyUnKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRyYWdTdGFydDogZnVuY3Rpb24gX29uRHJhZ1N0YXJ0KCAvKipFdmVudCovZXZ0LCAvKipib29sZWFuKi9mYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGFUcmFuc2ZlciA9IGV2dC5kYXRhVHJhbnNmZXI7XG4gICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zO1xuICAgIHBsdWdpbkV2ZW50KCdkcmFnU3RhcnQnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGx1Z2luRXZlbnQoJ3NldHVwQ2xvbmUnLCB0aGlzKTtcbiAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIGNsb25lRWwgPSBjbG9uZShkcmFnRWwpO1xuICAgICAgY2xvbmVFbC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgIGNsb25lRWwuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICBjbG9uZUVsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGNsb25lRWwsIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuICAgICAgU29ydGFibGUuY2xvbmUgPSBjbG9uZUVsO1xuICAgIH1cblxuICAgIC8vICMxMTQzOiBJRnJhbWUgc3VwcG9ydCB3b3JrYXJvdW5kXG4gICAgX3RoaXMuY2xvbmVJZCA9IF9uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBwbHVnaW5FdmVudCgnY2xvbmUnLCBfdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICBuYW1lOiAnY2xvbmUnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAhZmFsbGJhY2sgJiYgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgcHJvcGVyIGRyb3AgZXZlbnRzXG4gICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSB0cnVlO1xuICAgICAgX3RoaXMuX2xvb3BJZCA9IHNldEludGVydmFsKF90aGlzLl9lbXVsYXRlRHJhZ092ZXIsIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVW5kbyB3aGF0IHdhcyBzZXQgaW4gX3ByZXBhcmVEcmFnU3RhcnQgYmVmb3JlIGRyYWcgc3RhcnRlZFxuICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBpZiAoZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgICBvcHRpb25zLnNldERhdGEgJiYgb3B0aW9ucy5zZXREYXRhLmNhbGwoX3RoaXMsIGRhdGFUcmFuc2ZlciwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIG9uKGRvY3VtZW50LCAnZHJvcCcsIF90aGlzKTtcblxuICAgICAgLy8gIzEyNzYgZml4OlxuICAgICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVaKDApJyk7XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgIF90aGlzLl9kcmFnU3RhcnRJZCA9IF9uZXh0VGljayhfdGhpcy5fZHJhZ1N0YXJ0ZWQuYmluZChfdGhpcywgZmFsbGJhY2ssIGV2dCkpO1xuICAgIG9uKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCBfdGhpcyk7XG4gICAgbW92ZWQgPSB0cnVlO1xuICAgIGlmIChTYWZhcmkpIHtcbiAgICAgIGNzcyhkb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnbm9uZScpO1xuICAgIH1cbiAgfSxcbiAgLy8gUmV0dXJucyB0cnVlIC0gaWYgbm8gZnVydGhlciBhY3Rpb24gaXMgbmVlZGVkIChlaXRoZXIgaW5zZXJ0ZWQgb3IgYW5vdGhlciBjb25kaXRpb24pXG4gIF9vbkRyYWdPdmVyOiBmdW5jdGlvbiBfb25EcmFnT3ZlciggLyoqRXZlbnQqL2V2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICB0YXJnZXQgPSBldnQudGFyZ2V0LFxuICAgICAgZHJhZ1JlY3QsXG4gICAgICB0YXJnZXRSZWN0LFxuICAgICAgcmV2ZXJ0LFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGdyb3VwID0gb3B0aW9ucy5ncm91cCxcbiAgICAgIGFjdGl2ZVNvcnRhYmxlID0gU29ydGFibGUuYWN0aXZlLFxuICAgICAgaXNPd25lciA9IGFjdGl2ZUdyb3VwID09PSBncm91cCxcbiAgICAgIGNhblNvcnQgPSBvcHRpb25zLnNvcnQsXG4gICAgICBmcm9tU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCBhY3RpdmVTb3J0YWJsZSxcbiAgICAgIHZlcnRpY2FsLFxuICAgICAgX3RoaXMgPSB0aGlzLFxuICAgICAgY29tcGxldGVkRmlyZWQgPSBmYWxzZTtcbiAgICBpZiAoX3NpbGVudCkgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIGRyYWdPdmVyRXZlbnQobmFtZSwgZXh0cmEpIHtcbiAgICAgIHBsdWdpbkV2ZW50KG5hbWUsIF90aGlzLCBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIGV2dDogZXZ0LFxuICAgICAgICBpc093bmVyOiBpc093bmVyLFxuICAgICAgICBheGlzOiB2ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHJldmVydDogcmV2ZXJ0LFxuICAgICAgICBkcmFnUmVjdDogZHJhZ1JlY3QsXG4gICAgICAgIHRhcmdldFJlY3Q6IHRhcmdldFJlY3QsXG4gICAgICAgIGNhblNvcnQ6IGNhblNvcnQsXG4gICAgICAgIGZyb21Tb3J0YWJsZTogZnJvbVNvcnRhYmxlLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXG4gICAgICAgIG9uTW92ZTogZnVuY3Rpb24gb25Nb3ZlKHRhcmdldCwgYWZ0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIGdldFJlY3QodGFyZ2V0KSwgZXZ0LCBhZnRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZWQ6IGNoYW5nZWRcbiAgICAgIH0sIGV4dHJhKSk7XG4gICAgfVxuXG4gICAgLy8gQ2FwdHVyZSBhbmltYXRpb24gc3RhdGVcbiAgICBmdW5jdGlvbiBjYXB0dXJlKCkge1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlJyk7XG4gICAgICBfdGhpcy5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgIGZyb21Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gaW52b2NhdGlvbiB3aGVuIGRyYWdFbCBpcyBpbnNlcnRlZCAob3IgY29tcGxldGVkKVxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlZChpbnNlcnRpb24pIHtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQ29tcGxldGVkJywge1xuICAgICAgICBpbnNlcnRpb246IGluc2VydGlvblxuICAgICAgfSk7XG4gICAgICBpZiAoaW5zZXJ0aW9uKSB7XG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIGhpZGRlbiBiZWZvcmUgZm9sZGluZyBhbmltYXRpb24gdG8gY2FwdHVyZSBkcmFnUmVjdEFic29sdXRlIHByb3Blcmx5XG4gICAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoX3RoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgICAgLy8gU2V0IGdob3N0IGNsYXNzIHRvIG5ldyBzb3J0YWJsZSdzIGdob3N0IGNsYXNzXG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcyA6IGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5naG9zdENsYXNzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHV0U29ydGFibGUgIT09IF90aGlzICYmIF90aGlzICE9PSBTb3J0YWJsZS5hY3RpdmUpIHtcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IF90aGlzO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzID09PSBTb3J0YWJsZS5hY3RpdmUgJiYgcHV0U29ydGFibGUpIHtcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmltYXRpb25cbiAgICAgICAgaWYgKGZyb21Tb3J0YWJsZSA9PT0gX3RoaXMpIHtcbiAgICAgICAgICBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuYW5pbWF0ZUFsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZScpO1xuICAgICAgICAgIF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgICAgZnJvbVNvcnRhYmxlLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTnVsbCBsYXN0VGFyZ2V0IGlmIGl0IGlzIG5vdCBpbnNpZGUgYSBwcmV2aW91c2x5IHN3YXBwZWQgZWxlbWVudFxuICAgICAgaWYgKHRhcmdldCA9PT0gZHJhZ0VsICYmICFkcmFnRWwuYW5pbWF0ZWQgfHwgdGFyZ2V0ID09PSBlbCAmJiAhdGFyZ2V0LmFuaW1hdGVkKSB7XG4gICAgICAgIGxhc3RUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBubyBidWJibGluZyBhbmQgbm90IGZhbGxiYWNrXG4gICAgICBpZiAoIW9wdGlvbnMuZHJhZ292ZXJCdWJibGUgJiYgIWV2dC5yb290RWwgJiYgdGFyZ2V0ICE9PSBkb2N1bWVudCkge1xuICAgICAgICBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5faXNPdXRzaWRlVGhpc0VsKGV2dC50YXJnZXQpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkZXRlY3QgZm9yIGVtcHR5IGluc2VydCBpZiBhbHJlYWR5IGluc2VydGVkXG4gICAgICAgICFpbnNlcnRpb24gJiYgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQoZXZ0KTtcbiAgICAgIH1cbiAgICAgICFvcHRpb25zLmRyYWdvdmVyQnViYmxlICYmIGV2dC5zdG9wUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuIGNvbXBsZXRlZEZpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHdoZW4gZHJhZ0VsIGhhcyBiZWVuIGluc2VydGVkXG4gICAgZnVuY3Rpb24gY2hhbmdlZCgpIHtcbiAgICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgbmFtZTogJ2NoYW5nZScsXG4gICAgICAgIHRvRWw6IGVsLFxuICAgICAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGV2dC5wcmV2ZW50RGVmYXVsdCAhPT0gdm9pZCAwKSB7XG4gICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGFyZ2V0ID0gY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgdHJ1ZSk7XG4gICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXInKTtcbiAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuIGNvbXBsZXRlZEZpcmVkO1xuICAgIGlmIChkcmFnRWwuY29udGFpbnMoZXZ0LnRhcmdldCkgfHwgdGFyZ2V0LmFuaW1hdGVkICYmIHRhcmdldC5hbmltYXRpbmdYICYmIHRhcmdldC5hbmltYXRpbmdZIHx8IF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9PT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICB9XG4gICAgaWdub3JlTmV4dENsaWNrID0gZmFsc2U7XG4gICAgaWYgKGFjdGl2ZVNvcnRhYmxlICYmICFvcHRpb25zLmRpc2FibGVkICYmIChpc093bmVyID8gY2FuU29ydCB8fCAocmV2ZXJ0ID0gcGFyZW50RWwgIT09IHJvb3RFbCkgLy8gUmV2ZXJ0aW5nIGl0ZW0gaW50byB0aGUgb3JpZ2luYWwgbGlzdFxuICAgIDogcHV0U29ydGFibGUgPT09IHRoaXMgfHwgKHRoaXMubGFzdFB1dE1vZGUgPSBhY3RpdmVHcm91cC5jaGVja1B1bGwodGhpcywgYWN0aXZlU29ydGFibGUsIGRyYWdFbCwgZXZ0KSkgJiYgZ3JvdXAuY2hlY2tQdXQodGhpcywgYWN0aXZlU29ydGFibGUsIGRyYWdFbCwgZXZ0KSkpIHtcbiAgICAgIHZlcnRpY2FsID0gdGhpcy5fZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KSA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwpO1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJWYWxpZCcpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybiBjb21wbGV0ZWRGaXJlZDtcbiAgICAgIGlmIChyZXZlcnQpIHtcbiAgICAgICAgcGFyZW50RWwgPSByb290RWw7IC8vIGFjdHVhbGl6YXRpb25cbiAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgICAgZHJhZ092ZXJFdmVudCgncmV2ZXJ0Jyk7XG4gICAgICAgIGlmICghU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIGlmIChuZXh0RWwpIHtcbiAgICAgICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBuZXh0RWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBlbExhc3RDaGlsZCA9IGxhc3RDaGlsZChlbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgICAgaWYgKCFlbExhc3RDaGlsZCB8fCBfZ2hvc3RJc0xhc3QoZXZ0LCB2ZXJ0aWNhbCwgdGhpcykgJiYgIWVsTGFzdENoaWxkLmFuaW1hdGVkKSB7XG4gICAgICAgIC8vIEluc2VydCB0byBlbmQgb2YgbGlzdFxuXG4gICAgICAgIC8vIElmIGFscmVhZHkgYXQgZW5kIG9mIGxpc3Q6IERvIG5vdCBpbnNlcnRcbiAgICAgICAgaWYgKGVsTGFzdENoaWxkID09PSBkcmFnRWwpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbGFzdCBlbGVtZW50LCBpdCBpcyB0aGUgdGFyZ2V0XG4gICAgICAgIGlmIChlbExhc3RDaGlsZCAmJiBlbCA9PT0gZXZ0LnRhcmdldCkge1xuICAgICAgICAgIHRhcmdldCA9IGVsTGFzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCAhIXRhcmdldCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGlmIChlbExhc3RDaGlsZCAmJiBlbExhc3RDaGlsZC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgLy8gdGhlIGxhc3QgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgbm90IHRoZSBsYXN0IG5vZGVcbiAgICAgICAgICAgIGVsLmluc2VydEJlZm9yZShkcmFnRWwsIGVsTGFzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50RWwgPSBlbDsgLy8gYWN0dWFsaXphdGlvblxuXG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxMYXN0Q2hpbGQgJiYgX2dob3N0SXNGaXJzdChldnQsIHZlcnRpY2FsLCB0aGlzKSkge1xuICAgICAgICAvLyBJbnNlcnQgdG8gc3RhcnQgb2YgbGlzdFxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zLCB0cnVlKTtcbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQgPT09IGRyYWdFbCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IGZpcnN0Q2hpbGQ7XG4gICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICAgIGlmIChfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCBmYWxzZSkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGVsLmluc2VydEJlZm9yZShkcmFnRWwsIGZpcnN0Q2hpbGQpO1xuICAgICAgICAgIHBhcmVudEVsID0gZWw7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5wYXJlbnROb2RlID09PSBlbCkge1xuICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gMCxcbiAgICAgICAgICB0YXJnZXRCZWZvcmVGaXJzdFN3YXAsXG4gICAgICAgICAgZGlmZmVyZW50TGV2ZWwgPSBkcmFnRWwucGFyZW50Tm9kZSAhPT0gZWwsXG4gICAgICAgICAgZGlmZmVyZW50Um93Q29sID0gIV9kcmFnRWxJblJvd0NvbHVtbihkcmFnRWwuYW5pbWF0ZWQgJiYgZHJhZ0VsLnRvUmVjdCB8fCBkcmFnUmVjdCwgdGFyZ2V0LmFuaW1hdGVkICYmIHRhcmdldC50b1JlY3QgfHwgdGFyZ2V0UmVjdCwgdmVydGljYWwpLFxuICAgICAgICAgIHNpZGUxID0gdmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JyxcbiAgICAgICAgICBzY3JvbGxlZFBhc3RUb3AgPSBpc1Njcm9sbGVkUGFzdCh0YXJnZXQsICd0b3AnLCAndG9wJykgfHwgaXNTY3JvbGxlZFBhc3QoZHJhZ0VsLCAndG9wJywgJ3RvcCcpLFxuICAgICAgICAgIHNjcm9sbEJlZm9yZSA9IHNjcm9sbGVkUGFzdFRvcCA/IHNjcm9sbGVkUGFzdFRvcC5zY3JvbGxUb3AgOiB2b2lkIDA7XG4gICAgICAgIGlmIChsYXN0VGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXRCZWZvcmVGaXJzdFN3YXAgPSB0YXJnZXRSZWN0W3NpZGUxXTtcbiAgICAgICAgICBwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSBmYWxzZTtcbiAgICAgICAgICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gIWRpZmZlcmVudFJvd0NvbCAmJiBvcHRpb25zLmludmVydFN3YXAgfHwgZGlmZmVyZW50TGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgZGlyZWN0aW9uID0gX2dldFN3YXBEaXJlY3Rpb24oZXZ0LCB0YXJnZXQsIHRhcmdldFJlY3QsIHZlcnRpY2FsLCBkaWZmZXJlbnRSb3dDb2wgPyAxIDogb3B0aW9ucy5zd2FwVGhyZXNob2xkLCBvcHRpb25zLmludmVydGVkU3dhcFRocmVzaG9sZCA9PSBudWxsID8gb3B0aW9ucy5zd2FwVGhyZXNob2xkIDogb3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQsIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQsIGxhc3RUYXJnZXQgPT09IHRhcmdldCk7XG4gICAgICAgIHZhciBzaWJsaW5nO1xuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSAwKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGFyZ2V0IGlzIGJlc2lkZSBkcmFnRWwgaW4gcmVzcGVjdGl2ZSBkaXJlY3Rpb24gKGlnbm9yaW5nIGhpZGRlbiBlbGVtZW50cylcbiAgICAgICAgICB2YXIgZHJhZ0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBkcmFnSW5kZXggLT0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgc2libGluZyA9IHBhcmVudEVsLmNoaWxkcmVuW2RyYWdJbmRleF07XG4gICAgICAgICAgfSB3aGlsZSAoc2libGluZyAmJiAoY3NzKHNpYmxpbmcsICdkaXNwbGF5JykgPT09ICdub25lJyB8fCBzaWJsaW5nID09PSBnaG9zdEVsKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgZHJhZ0VsIGlzIGFscmVhZHkgYmVzaWRlIHRhcmdldDogRG8gbm90IGluc2VydFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAwIHx8IHNpYmxpbmcgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHZhciBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcsXG4gICAgICAgICAgYWZ0ZXIgPSBmYWxzZTtcbiAgICAgICAgYWZ0ZXIgPSBkaXJlY3Rpb24gPT09IDE7XG4gICAgICAgIHZhciBtb3ZlVmVjdG9yID0gX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgYWZ0ZXIpO1xuICAgICAgICBpZiAobW92ZVZlY3RvciAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAobW92ZVZlY3RvciA9PT0gMSB8fCBtb3ZlVmVjdG9yID09PSAtMSkge1xuICAgICAgICAgICAgYWZ0ZXIgPSBtb3ZlVmVjdG9yID09PSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfc2lsZW50ID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KF91bnNpbGVudCwgMzApO1xuICAgICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgICBpZiAoYWZ0ZXIgJiYgIW5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBhZnRlciA/IG5leHRTaWJsaW5nIDogdGFyZ2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBVbmRvIGNocm9tZSdzIHNjcm9sbCBhZGp1c3RtZW50IChoYXMgbm8gZWZmZWN0IG9uIG90aGVyIGJyb3dzZXJzKVxuICAgICAgICAgIGlmIChzY3JvbGxlZFBhc3RUb3ApIHtcbiAgICAgICAgICAgIHNjcm9sbEJ5KHNjcm9sbGVkUGFzdFRvcCwgMCwgc2Nyb2xsQmVmb3JlIC0gc2Nyb2xsZWRQYXN0VG9wLnNjcm9sbFRvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudEVsID0gZHJhZ0VsLnBhcmVudE5vZGU7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIC8vIG11c3QgYmUgZG9uZSBiZWZvcmUgYW5pbWF0aW9uXG4gICAgICAgICAgaWYgKHRhcmdldEJlZm9yZUZpcnN0U3dhcCAhPT0gdW5kZWZpbmVkICYmICFpc0NpcmN1bXN0YW50aWFsSW52ZXJ0KSB7XG4gICAgICAgICAgICB0YXJnZXRNb3ZlRGlzdGFuY2UgPSBNYXRoLmFicyh0YXJnZXRCZWZvcmVGaXJzdFN3YXAgLSBnZXRSZWN0KHRhcmdldClbc2lkZTFdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChlbC5jb250YWlucyhkcmFnRWwpKSB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIF9pZ25vcmVXaGlsZUFuaW1hdGluZzogbnVsbCxcbiAgX29mZk1vdmVFdmVudHM6IGZ1bmN0aW9uIF9vZmZNb3ZlRXZlbnRzKCkge1xuICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAnZHJhZ292ZXInLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgb2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgfSxcbiAgX29mZlVwRXZlbnRzOiBmdW5jdGlvbiBfb2ZmVXBFdmVudHMoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCB0aGlzKTtcbiAgfSxcbiAgX29uRHJvcDogZnVuY3Rpb24gX29uRHJvcCggLyoqRXZlbnQqL2V2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IHdpdGhpbiBpdHMgcGFyZW50XG4gICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgcGx1Z2luRXZlbnQoJ2Ryb3AnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIHBhcmVudEVsID0gZHJhZ0VsICYmIGRyYWdFbC5wYXJlbnROb2RlO1xuXG4gICAgLy8gR2V0IGFnYWluIGFmdGVyIHBsdWdpbiBldmVudFxuICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2U7XG4gICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9sb29wSWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuY2xvbmVJZCk7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuX2RyYWdTdGFydElkKTtcblxuICAgIC8vIFVuYmluZCBldmVudHNcbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2Ryb3AnLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdGhpcy5fb2ZmTW92ZUV2ZW50cygpO1xuICAgIHRoaXMuX29mZlVwRXZlbnRzKCk7XG4gICAgaWYgKFNhZmFyaSkge1xuICAgICAgY3NzKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICcnKTtcbiAgICB9XG4gICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICBpZiAoZXZ0KSB7XG4gICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICFvcHRpb25zLmRyb3BCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgZ2hvc3RFbCAmJiBnaG9zdEVsLnBhcmVudE5vZGUgJiYgZ2hvc3RFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdob3N0RWwpO1xuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNsb25lKHMpXG4gICAgICAgIGNsb25lRWwgJiYgY2xvbmVFbC5wYXJlbnROb2RlICYmIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgb2ZmKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgICAgICBkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcblxuICAgICAgICAvLyBSZW1vdmUgY2xhc3Nlc1xuICAgICAgICAvLyBnaG9zdENsYXNzIGlzIGFkZGVkIGluIGRyYWdTdGFydGVkXG4gICAgICAgIGlmIChtb3ZlZCAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiB0aGlzLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gRHJhZyBzdG9wIGV2ZW50XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICBuYW1lOiAndW5jaG9vc2UnLFxuICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgIG5ld0luZGV4OiBudWxsLFxuICAgICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBudWxsLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJvb3RFbCAhPT0gcGFyZW50RWwpIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgLy8gQWRkIGV2ZW50XG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdhZGQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgZnJvbUVsOiByb290RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBldmVudFxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBkcmFnIGZyb20gb25lIGxpc3QgYW5kIGRyb3AgaW50byBhbm90aGVyXG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdzb3J0JyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIGZyb21FbDogcm9vdEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUuc2F2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChuZXdJbmRleCAhPT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGRyYWcgJiBkcm9wIHdpdGhpbiB0aGUgc2FtZSBsaXN0XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgLyoganNoaW50IGVxbnVsbDp0cnVlICovXG4gICAgICAgICAgaWYgKG5ld0luZGV4ID09IG51bGwgfHwgbmV3SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IG9sZEluZGV4O1xuICAgICAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICBuYW1lOiAnZW5kJyxcbiAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBTYXZlIHNvcnRpbmdcbiAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9udWxsaW5nKCk7XG4gIH0sXG4gIF9udWxsaW5nOiBmdW5jdGlvbiBfbnVsbGluZygpIHtcbiAgICBwbHVnaW5FdmVudCgnbnVsbGluZycsIHRoaXMpO1xuICAgIHJvb3RFbCA9IGRyYWdFbCA9IHBhcmVudEVsID0gZ2hvc3RFbCA9IG5leHRFbCA9IGNsb25lRWwgPSBsYXN0RG93bkVsID0gY2xvbmVIaWRkZW4gPSB0YXBFdnQgPSB0b3VjaEV2dCA9IG1vdmVkID0gbmV3SW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleCA9IG9sZEluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXggPSBsYXN0VGFyZ2V0ID0gbGFzdERpcmVjdGlvbiA9IHB1dFNvcnRhYmxlID0gYWN0aXZlR3JvdXAgPSBTb3J0YWJsZS5kcmFnZ2VkID0gU29ydGFibGUuZ2hvc3QgPSBTb3J0YWJsZS5jbG9uZSA9IFNvcnRhYmxlLmFjdGl2ZSA9IG51bGw7XG4gICAgc2F2ZWRJbnB1dENoZWNrZWQuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IGxhc3REeCA9IGxhc3REeSA9IDA7XG4gIH0sXG4gIGhhbmRsZUV2ZW50OiBmdW5jdGlvbiBoYW5kbGVFdmVudCggLyoqRXZlbnQqL2V2dCkge1xuICAgIHN3aXRjaCAoZXZ0LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Ryb3AnOlxuICAgICAgY2FzZSAnZHJhZ2VuZCc6XG4gICAgICAgIHRoaXMuX29uRHJvcChldnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XG4gICAgICBjYXNlICdkcmFnb3Zlcic6XG4gICAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgICB0aGlzLl9vbkRyYWdPdmVyKGV2dCk7XG4gICAgICAgICAgX2dsb2JhbERyYWdPdmVyKGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3RzdGFydCc6XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNlcmlhbGl6ZXMgdGhlIGl0ZW0gaW50byBhbiBhcnJheSBvZiBzdHJpbmcuXHJcbiAgICogQHJldHVybnMge1N0cmluZ1tdfVxyXG4gICAqL1xuICB0b0FycmF5OiBmdW5jdGlvbiB0b0FycmF5KCkge1xuICAgIHZhciBvcmRlciA9IFtdLFxuICAgICAgZWwsXG4gICAgICBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW4sXG4gICAgICBpID0gMCxcbiAgICAgIG4gPSBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBlbCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNsb3Nlc3QoZWwsIG9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSkpIHtcbiAgICAgICAgb3JkZXIucHVzaChlbC5nZXRBdHRyaWJ1dGUob3B0aW9ucy5kYXRhSWRBdHRyKSB8fCBfZ2VuZXJhdGVJZChlbCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3JkZXI7XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNvcnRzIHRoZSBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlIGFycmF5LlxyXG4gICAqIEBwYXJhbSAge1N0cmluZ1tdfSAgb3JkZXIgIG9yZGVyIG9mIHRoZSBpdGVtc1xyXG4gICAqL1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KG9yZGVyLCB1c2VBbmltYXRpb24pIHtcbiAgICB2YXIgaXRlbXMgPSB7fSxcbiAgICAgIHJvb3RFbCA9IHRoaXMuZWw7XG4gICAgdGhpcy50b0FycmF5KCkuZm9yRWFjaChmdW5jdGlvbiAoaWQsIGkpIHtcbiAgICAgIHZhciBlbCA9IHJvb3RFbC5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjbG9zZXN0KGVsLCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCByb290RWwsIGZhbHNlKSkge1xuICAgICAgICBpdGVtc1tpZF0gPSBlbDtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB1c2VBbmltYXRpb24gJiYgdGhpcy5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICBvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgaWYgKGl0ZW1zW2lkXSkge1xuICAgICAgICByb290RWwucmVtb3ZlQ2hpbGQoaXRlbXNbaWRdKTtcbiAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGl0ZW1zW2lkXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdXNlQW5pbWF0aW9uICYmIHRoaXMuYW5pbWF0ZUFsbCgpO1xuICB9LFxuICAvKipcclxuICAgKiBTYXZlIHRoZSBjdXJyZW50IHNvcnRpbmdcclxuICAgKi9cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICB2YXIgc3RvcmUgPSB0aGlzLm9wdGlvbnMuc3RvcmU7XG4gICAgc3RvcmUgJiYgc3RvcmUuc2V0ICYmIHN0b3JlLnNldCh0aGlzKTtcbiAgfSxcbiAgLyoqXHJcbiAgICogRm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0LCBnZXQgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHRoZSBzZWxlY3RvciBieSB0ZXN0aW5nIHRoZSBlbGVtZW50IGl0c2VsZiBhbmQgdHJhdmVyc2luZyB1cCB0aHJvdWdoIGl0cyBhbmNlc3RvcnMgaW4gdGhlIERPTSB0cmVlLlxyXG4gICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAgICogQHBhcmFtICAge1N0cmluZ30gICAgICAgW3NlbGVjdG9yXSAgZGVmYXVsdDogYG9wdGlvbnMuZHJhZ2dhYmxlYFxyXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHxudWxsfVxyXG4gICAqL1xuICBjbG9zZXN0OiBmdW5jdGlvbiBjbG9zZXN0JDEoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGNsb3Nlc3QoZWwsIHNlbGVjdG9yIHx8IHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuZWwsIGZhbHNlKTtcbiAgfSxcbiAgLyoqXHJcbiAgICogU2V0L2dldCBvcHRpb25cclxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSBuYW1lXHJcbiAgICogQHBhcmFtICAgeyp9ICAgICAgW3ZhbHVlXVxyXG4gICAqIEByZXR1cm5zIHsqfVxyXG4gICAqL1xuICBvcHRpb246IGZ1bmN0aW9uIG9wdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1vZGlmaWVkVmFsdWUgPSBQbHVnaW5NYW5hZ2VyLm1vZGlmeU9wdGlvbih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkVmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnNbbmFtZV0gPSBtb2RpZmllZFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUgPT09ICdncm91cCcpIHtcbiAgICAgICAgX3ByZXBhcmVHcm91cChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8qKlxyXG4gICAqIERlc3Ryb3lcclxuICAgKi9cbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBwbHVnaW5FdmVudCgnZGVzdHJveScsIHRoaXMpO1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgZWxbZXhwYW5kb10gPSBudWxsO1xuICAgIG9mZihlbCwgJ21vdXNlZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIG9mZihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvZmYoZWwsICdwb2ludGVyZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgb2ZmKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgZHJhZ2dhYmxlIGF0dHJpYnV0ZXNcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkcmFnZ2FibGVdJyksIGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKTtcbiAgICB9KTtcbiAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgICBzb3J0YWJsZXMuc3BsaWNlKHNvcnRhYmxlcy5pbmRleE9mKHRoaXMuZWwpLCAxKTtcbiAgICB0aGlzLmVsID0gZWwgPSBudWxsO1xuICB9LFxuICBfaGlkZUNsb25lOiBmdW5jdGlvbiBfaGlkZUNsb25lKCkge1xuICAgIGlmICghY2xvbmVIaWRkZW4pIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdoaWRlQ2xvbmUnLCB0aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47XG4gICAgICBjc3MoY2xvbmVFbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSAmJiBjbG9uZUVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgY2xvbmVFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgY2xvbmVIaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgX3Nob3dDbG9uZTogZnVuY3Rpb24gX3Nob3dDbG9uZShwdXRTb3J0YWJsZSkge1xuICAgIGlmIChwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSAhPT0gJ2Nsb25lJykge1xuICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjbG9uZUhpZGRlbikge1xuICAgICAgcGx1Z2luRXZlbnQoJ3Nob3dDbG9uZScsIHRoaXMpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybjtcblxuICAgICAgLy8gc2hvdyBjbG9uZSBhdCBkcmFnRWwgb3Igb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgIGlmIChkcmFnRWwucGFyZW50Tm9kZSA9PSByb290RWwgJiYgIXRoaXMub3B0aW9ucy5ncm91cC5yZXZlcnRDbG9uZSkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIGRyYWdFbCk7XG4gICAgICB9IGVsc2UgaWYgKG5leHRFbCkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIG5leHRFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoY2xvbmVFbCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmdyb3VwLnJldmVydENsb25lKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZShkcmFnRWwsIGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgY3NzKGNsb25lRWwsICdkaXNwbGF5JywgJycpO1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBfZ2xvYmFsRHJhZ092ZXIoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgaWYgKGV2dC5kYXRhVHJhbnNmZXIpIHtcbiAgICBldnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gIH1cbiAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG59XG5mdW5jdGlvbiBfb25Nb3ZlKGZyb21FbCwgdG9FbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0RWwsIHRhcmdldFJlY3QsIG9yaWdpbmFsRXZlbnQsIHdpbGxJbnNlcnRBZnRlcikge1xuICB2YXIgZXZ0LFxuICAgIHNvcnRhYmxlID0gZnJvbUVsW2V4cGFuZG9dLFxuICAgIG9uTW92ZUZuID0gc29ydGFibGUub3B0aW9ucy5vbk1vdmUsXG4gICAgcmV0VmFsO1xuICAvLyBTdXBwb3J0IGZvciBuZXcgQ3VzdG9tRXZlbnQgZmVhdHVyZVxuICBpZiAod2luZG93LkN1c3RvbUV2ZW50ICYmICFJRTExT3JMZXNzICYmICFFZGdlKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdtb3ZlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KCdtb3ZlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbiAgZXZ0LnRvID0gdG9FbDtcbiAgZXZ0LmZyb20gPSBmcm9tRWw7XG4gIGV2dC5kcmFnZ2VkID0gZHJhZ0VsO1xuICBldnQuZHJhZ2dlZFJlY3QgPSBkcmFnUmVjdDtcbiAgZXZ0LnJlbGF0ZWQgPSB0YXJnZXRFbCB8fCB0b0VsO1xuICBldnQucmVsYXRlZFJlY3QgPSB0YXJnZXRSZWN0IHx8IGdldFJlY3QodG9FbCk7XG4gIGV2dC53aWxsSW5zZXJ0QWZ0ZXIgPSB3aWxsSW5zZXJ0QWZ0ZXI7XG4gIGV2dC5vcmlnaW5hbEV2ZW50ID0gb3JpZ2luYWxFdmVudDtcbiAgZnJvbUVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgaWYgKG9uTW92ZUZuKSB7XG4gICAgcmV0VmFsID0gb25Nb3ZlRm4uY2FsbChzb3J0YWJsZSwgZXZ0LCBvcmlnaW5hbEV2ZW50KTtcbiAgfVxuICByZXR1cm4gcmV0VmFsO1xufVxuZnVuY3Rpb24gX2Rpc2FibGVEcmFnZ2FibGUoZWwpIHtcbiAgZWwuZHJhZ2dhYmxlID0gZmFsc2U7XG59XG5mdW5jdGlvbiBfdW5zaWxlbnQoKSB7XG4gIF9zaWxlbnQgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIF9naG9zdElzRmlyc3QoZXZ0LCB2ZXJ0aWNhbCwgc29ydGFibGUpIHtcbiAgdmFyIGZpcnN0RWxSZWN0ID0gZ2V0UmVjdChnZXRDaGlsZChzb3J0YWJsZS5lbCwgMCwgc29ydGFibGUub3B0aW9ucywgdHJ1ZSkpO1xuICB2YXIgY2hpbGRDb250YWluaW5nUmVjdCA9IGdldENoaWxkQ29udGFpbmluZ1JlY3RGcm9tRWxlbWVudChzb3J0YWJsZS5lbCwgc29ydGFibGUub3B0aW9ucywgZ2hvc3RFbCk7XG4gIHZhciBzcGFjZXIgPSAxMDtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZXZ0LmNsaWVudFggPCBjaGlsZENvbnRhaW5pbmdSZWN0LmxlZnQgLSBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPCBmaXJzdEVsUmVjdC50b3AgJiYgZXZ0LmNsaWVudFggPCBmaXJzdEVsUmVjdC5yaWdodCA6IGV2dC5jbGllbnRZIDwgY2hpbGRDb250YWluaW5nUmVjdC50b3AgLSBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPCBmaXJzdEVsUmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPCBmaXJzdEVsUmVjdC5sZWZ0O1xufVxuZnVuY3Rpb24gX2dob3N0SXNMYXN0KGV2dCwgdmVydGljYWwsIHNvcnRhYmxlKSB7XG4gIHZhciBsYXN0RWxSZWN0ID0gZ2V0UmVjdChsYXN0Q2hpbGQoc29ydGFibGUuZWwsIHNvcnRhYmxlLm9wdGlvbnMuZHJhZ2dhYmxlKSk7XG4gIHZhciBjaGlsZENvbnRhaW5pbmdSZWN0ID0gZ2V0Q2hpbGRDb250YWluaW5nUmVjdEZyb21FbGVtZW50KHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLCBnaG9zdEVsKTtcbiAgdmFyIHNwYWNlciA9IDEwO1xuICByZXR1cm4gdmVydGljYWwgPyBldnQuY2xpZW50WCA+IGNoaWxkQ29udGFpbmluZ1JlY3QucmlnaHQgKyBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPiBsYXN0RWxSZWN0LmJvdHRvbSAmJiBldnQuY2xpZW50WCA+IGxhc3RFbFJlY3QubGVmdCA6IGV2dC5jbGllbnRZID4gY2hpbGRDb250YWluaW5nUmVjdC5ib3R0b20gKyBzcGFjZXIgfHwgZXZ0LmNsaWVudFggPiBsYXN0RWxSZWN0LnJpZ2h0ICYmIGV2dC5jbGllbnRZID4gbGFzdEVsUmVjdC50b3A7XG59XG5mdW5jdGlvbiBfZ2V0U3dhcERpcmVjdGlvbihldnQsIHRhcmdldCwgdGFyZ2V0UmVjdCwgdmVydGljYWwsIHN3YXBUaHJlc2hvbGQsIGludmVydGVkU3dhcFRocmVzaG9sZCwgaW52ZXJ0U3dhcCwgaXNMYXN0VGFyZ2V0KSB7XG4gIHZhciBtb3VzZU9uQXhpcyA9IHZlcnRpY2FsID8gZXZ0LmNsaWVudFkgOiBldnQuY2xpZW50WCxcbiAgICB0YXJnZXRMZW5ndGggPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QuaGVpZ2h0IDogdGFyZ2V0UmVjdC53aWR0aCxcbiAgICB0YXJnZXRTMSA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC50b3AgOiB0YXJnZXRSZWN0LmxlZnQsXG4gICAgdGFyZ2V0UzIgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QuYm90dG9tIDogdGFyZ2V0UmVjdC5yaWdodCxcbiAgICBpbnZlcnQgPSBmYWxzZTtcbiAgaWYgKCFpbnZlcnRTd2FwKSB7XG4gICAgLy8gTmV2ZXIgaW52ZXJ0IG9yIGNyZWF0ZSBkcmFnRWwgc2hhZG93IHdoZW4gdGFyZ2V0IG1vdmVtZW5ldCBjYXVzZXMgbW91c2UgdG8gbW92ZSBwYXN0IHRoZSBlbmQgb2YgcmVndWxhciBzd2FwVGhyZXNob2xkXG4gICAgaWYgKGlzTGFzdFRhcmdldCAmJiB0YXJnZXRNb3ZlRGlzdGFuY2UgPCB0YXJnZXRMZW5ndGggKiBzd2FwVGhyZXNob2xkKSB7XG4gICAgICAvLyBtdWx0aXBsaWVkIG9ubHkgYnkgc3dhcFRocmVzaG9sZCBiZWNhdXNlIG1vdXNlIHdpbGwgYWxyZWFkeSBiZSBpbnNpZGUgdGFyZ2V0IGJ5ICgxIC0gdGhyZXNob2xkKSAqIHRhcmdldExlbmd0aCAvIDJcbiAgICAgIC8vIGNoZWNrIGlmIHBhc3QgZmlyc3QgaW52ZXJ0IHRocmVzaG9sZCBvbiBzaWRlIG9wcG9zaXRlIG9mIGxhc3REaXJlY3Rpb25cbiAgICAgIGlmICghcGFzdEZpcnN0SW52ZXJ0VGhyZXNoICYmIChsYXN0RGlyZWN0aW9uID09PSAxID8gbW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIgOiBtb3VzZU9uQXhpcyA8IHRhcmdldFMyIC0gdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMikpIHtcbiAgICAgICAgLy8gcGFzdCBmaXJzdCBpbnZlcnQgdGhyZXNob2xkLCBkbyBub3QgcmVzdHJpY3QgaW52ZXJ0ZWQgdGhyZXNob2xkIHRvIGRyYWdFbCBzaGFkb3dcbiAgICAgICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghcGFzdEZpcnN0SW52ZXJ0VGhyZXNoKSB7XG4gICAgICAgIC8vIGRyYWdFbCBzaGFkb3cgKHRhcmdldCBtb3ZlIGRpc3RhbmNlIHNoYWRvdylcbiAgICAgICAgaWYgKGxhc3REaXJlY3Rpb24gPT09IDEgPyBtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgdGFyZ2V0TW92ZURpc3RhbmNlIC8vIG92ZXIgZHJhZ0VsIHNoYWRvd1xuICAgICAgICA6IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRNb3ZlRGlzdGFuY2UpIHtcbiAgICAgICAgICByZXR1cm4gLWxhc3REaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmVydCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlZ3VsYXJcbiAgICAgIGlmIChtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogKDEgLSBzd2FwVGhyZXNob2xkKSAvIDIgJiYgbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyKSB7XG4gICAgICAgIHJldHVybiBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGludmVydCA9IGludmVydCB8fCBpbnZlcnRTd2FwO1xuICBpZiAoaW52ZXJ0KSB7XG4gICAgLy8gSW52ZXJ0IG9mIHJlZ3VsYXJcbiAgICBpZiAobW91c2VPbkF4aXMgPCB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIgfHwgbW91c2VPbkF4aXMgPiB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIpIHtcbiAgICAgIHJldHVybiBtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoIC8gMiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbi8qKlxyXG4gKiBHZXRzIHRoZSBkaXJlY3Rpb24gZHJhZ0VsIG11c3QgYmUgc3dhcHBlZCByZWxhdGl2ZSB0byB0YXJnZXQgaW4gb3JkZXIgdG8gbWFrZSBpdFxyXG4gKiBzZWVtIHRoYXQgZHJhZ0VsIGhhcyBiZWVuIFwiaW5zZXJ0ZWRcIiBpbnRvIHRoYXQgZWxlbWVudCdzIHBvc2l0aW9uXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSB0YXJnZXQgICAgICAgVGhlIHRhcmdldCB3aG9zZSBwb3NpdGlvbiBkcmFnRWwgaXMgYmVpbmcgaW5zZXJ0ZWQgYXRcclxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICBEaXJlY3Rpb24gZHJhZ0VsIG11c3QgYmUgc3dhcHBlZFxyXG4gKi9cbmZ1bmN0aW9uIF9nZXRJbnNlcnREaXJlY3Rpb24odGFyZ2V0KSB7XG4gIGlmIChpbmRleChkcmFnRWwpIDwgaW5kZXgodGFyZ2V0KSkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAtMTtcbiAgfVxufVxuXG4vKipcclxuICogR2VuZXJhdGUgaWRcclxuICogQHBhcmFtICAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cbmZ1bmN0aW9uIF9nZW5lcmF0ZUlkKGVsKSB7XG4gIHZhciBzdHIgPSBlbC50YWdOYW1lICsgZWwuY2xhc3NOYW1lICsgZWwuc3JjICsgZWwuaHJlZiArIGVsLnRleHRDb250ZW50LFxuICAgIGkgPSBzdHIubGVuZ3RoLFxuICAgIHN1bSA9IDA7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBzdW0gKz0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIHN1bS50b1N0cmluZygzNik7XG59XG5mdW5jdGlvbiBfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlKHJvb3QpIHtcbiAgc2F2ZWRJbnB1dENoZWNrZWQubGVuZ3RoID0gMDtcbiAgdmFyIGlucHV0cyA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG4gIHZhciBpZHggPSBpbnB1dHMubGVuZ3RoO1xuICB3aGlsZSAoaWR4LS0pIHtcbiAgICB2YXIgZWwgPSBpbnB1dHNbaWR4XTtcbiAgICBlbC5jaGVja2VkICYmIHNhdmVkSW5wdXRDaGVja2VkLnB1c2goZWwpO1xuICB9XG59XG5mdW5jdGlvbiBfbmV4dFRpY2soZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufVxuZnVuY3Rpb24gX2NhbmNlbE5leHRUaWNrKGlkKSB7XG4gIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufVxuXG4vLyBGaXhlZCAjOTczOlxuaWYgKGRvY3VtZW50RXhpc3RzKSB7XG4gIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICgoU29ydGFibGUuYWN0aXZlIHx8IGF3YWl0aW5nRHJhZ1N0YXJ0ZWQpICYmIGV2dC5jYW5jZWxhYmxlKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBFeHBvcnQgdXRpbHNcblNvcnRhYmxlLnV0aWxzID0ge1xuICBvbjogb24sXG4gIG9mZjogb2ZmLFxuICBjc3M6IGNzcyxcbiAgZmluZDogZmluZCxcbiAgaXM6IGZ1bmN0aW9uIGlzKGVsLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiAhIWNsb3Nlc3QoZWwsIHNlbGVjdG9yLCBlbCwgZmFsc2UpO1xuICB9LFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdGhyb3R0bGU6IHRocm90dGxlLFxuICBjbG9zZXN0OiBjbG9zZXN0LFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIGNsb25lOiBjbG9uZSxcbiAgaW5kZXg6IGluZGV4LFxuICBuZXh0VGljazogX25leHRUaWNrLFxuICBjYW5jZWxOZXh0VGljazogX2NhbmNlbE5leHRUaWNrLFxuICBkZXRlY3REaXJlY3Rpb246IF9kZXRlY3REaXJlY3Rpb24sXG4gIGdldENoaWxkOiBnZXRDaGlsZFxufTtcblxuLyoqXHJcbiAqIEdldCB0aGUgU29ydGFibGUgaW5zdGFuY2Ugb2YgYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudFxyXG4gKiBAcmV0dXJuIHtTb3J0YWJsZXx1bmRlZmluZWR9ICAgICAgICAgVGhlIGluc3RhbmNlIG9mIFNvcnRhYmxlXHJcbiAqL1xuU29ydGFibGUuZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnRbZXhwYW5kb107XG59O1xuXG4vKipcclxuICogTW91bnQgYSBwbHVnaW4gdG8gU29ydGFibGVcclxuICogQHBhcmFtICB7Li4uU29ydGFibGVQbHVnaW58U29ydGFibGVQbHVnaW5bXX0gcGx1Z2lucyAgICAgICBQbHVnaW5zIGJlaW5nIG1vdW50ZWRcclxuICovXG5Tb3J0YWJsZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBsdWdpbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICBpZiAocGx1Z2luc1swXS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHBsdWdpbnMgPSBwbHVnaW5zWzBdO1xuICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIGlmICghcGx1Z2luLnByb3RvdHlwZSB8fCAhcGx1Z2luLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgXCJTb3J0YWJsZTogTW91bnRlZCBwbHVnaW4gbXVzdCBiZSBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBub3QgXCIuY29uY2F0KHt9LnRvU3RyaW5nLmNhbGwocGx1Z2luKSk7XG4gICAgfVxuICAgIGlmIChwbHVnaW4udXRpbHMpIFNvcnRhYmxlLnV0aWxzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIFNvcnRhYmxlLnV0aWxzKSwgcGx1Z2luLnV0aWxzKTtcbiAgICBQbHVnaW5NYW5hZ2VyLm1vdW50KHBsdWdpbik7XG4gIH0pO1xufTtcblxuLyoqXHJcbiAqIENyZWF0ZSBzb3J0YWJsZSBpbnN0YW5jZVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAgZWxcclxuICogQHBhcmFtIHtPYmplY3R9ICAgICAgW29wdGlvbnNdXHJcbiAqL1xuU29ydGFibGUuY3JlYXRlID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgU29ydGFibGUoZWwsIG9wdGlvbnMpO1xufTtcblxuLy8gRXhwb3J0XG5Tb3J0YWJsZS52ZXJzaW9uID0gdmVyc2lvbjtcblxudmFyIGF1dG9TY3JvbGxzID0gW10sXG4gIHNjcm9sbEVsLFxuICBzY3JvbGxSb290RWwsXG4gIHNjcm9sbGluZyA9IGZhbHNlLFxuICBsYXN0QXV0b1Njcm9sbFgsXG4gIGxhc3RBdXRvU2Nyb2xsWSxcbiAgdG91Y2hFdnQkMSxcbiAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWw7XG5mdW5jdGlvbiBBdXRvU2Nyb2xsUGx1Z2luKCkge1xuICBmdW5jdGlvbiBBdXRvU2Nyb2xsKCkge1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBmb3JjZUF1dG9TY3JvbGxGYWxsYmFjazogZmFsc2UsXG4gICAgICBzY3JvbGxTZW5zaXRpdml0eTogMzAsXG4gICAgICBzY3JvbGxTcGVlZDogMTAsXG4gICAgICBidWJibGVTY3JvbGw6IHRydWVcbiAgICB9O1xuXG4gICAgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG4gICAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEF1dG9TY3JvbGwucHJvdG90eXBlID0ge1xuICAgIGRyYWdTdGFydGVkOiBmdW5jdGlvbiBkcmFnU3RhcnRlZChfcmVmKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IF9yZWYub3JpZ2luYWxFdmVudDtcbiAgICAgIGlmICh0aGlzLnNvcnRhYmxlLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgICAgb24oZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3JpZ2luYWxFdmVudC50b3VjaGVzKSB7XG4gICAgICAgICAgb24oZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJDb21wbGV0ZWQ6IGZ1bmN0aW9uIGRyYWdPdmVyQ29tcGxldGVkKF9yZWYyKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IF9yZWYyLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAvLyBGb3Igd2hlbiBidWJibGluZyBpcyBjYW5jZWxlZCBhbmQgdXNpbmcgZmFsbGJhY2sgKGZhbGxiYWNrICd0b3VjaG1vdmUnIGFsd2F5cyByZWFjaGVkKVxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZHJhZ092ZXJCdWJibGUgJiYgIW9yaWdpbmFsRXZlbnQucm9vdEVsKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwob3JpZ2luYWxFdmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKCkge1xuICAgICAgaWYgKHRoaXMuc29ydGFibGUubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICB9XG4gICAgICBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCk7XG4gICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICBjYW5jZWxUaHJvdHRsZSgpO1xuICAgIH0sXG4gICAgbnVsbGluZzogZnVuY3Rpb24gbnVsbGluZygpIHtcbiAgICAgIHRvdWNoRXZ0JDEgPSBzY3JvbGxSb290RWwgPSBzY3JvbGxFbCA9IHNjcm9sbGluZyA9IHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsID0gbGFzdEF1dG9TY3JvbGxYID0gbGFzdEF1dG9TY3JvbGxZID0gbnVsbDtcbiAgICAgIGF1dG9TY3JvbGxzLmxlbmd0aCA9IDA7XG4gICAgfSxcbiAgICBfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsOiBmdW5jdGlvbiBfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKGV2dCkge1xuICAgICAgdGhpcy5faGFuZGxlQXV0b1Njcm9sbChldnQsIHRydWUpO1xuICAgIH0sXG4gICAgX2hhbmRsZUF1dG9TY3JvbGw6IGZ1bmN0aW9uIF9oYW5kbGVBdXRvU2Nyb2xsKGV2dCwgZmFsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgeCA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRYLFxuICAgICAgICB5ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFksXG4gICAgICAgIGVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgICAgdG91Y2hFdnQkMSA9IGV2dDtcblxuICAgICAgLy8gSUUgZG9lcyBub3Qgc2VlbSB0byBoYXZlIG5hdGl2ZSBhdXRvc2Nyb2xsLFxuICAgICAgLy8gRWRnZSdzIGF1dG9zY3JvbGwgc2VlbXMgdG9vIGNvbmRpdGlvbmFsLFxuICAgICAgLy8gTUFDT1MgU2FmYXJpIGRvZXMgbm90IGhhdmUgYXV0b3Njcm9sbCxcbiAgICAgIC8vIEZpcmVmb3ggYW5kIENocm9tZSBhcmUgZ29vZFxuICAgICAgaWYgKGZhbGxiYWNrIHx8IHRoaXMub3B0aW9ucy5mb3JjZUF1dG9TY3JvbGxGYWxsYmFjayB8fCBFZGdlIHx8IElFMTFPckxlc3MgfHwgU2FmYXJpKSB7XG4gICAgICAgIGF1dG9TY3JvbGwoZXZ0LCB0aGlzLm9wdGlvbnMsIGVsZW0sIGZhbGxiYWNrKTtcblxuICAgICAgICAvLyBMaXN0ZW5lciBmb3IgcG9pbnRlciBlbGVtZW50IGNoYW5nZVxuICAgICAgICB2YXIgb2dFbGVtU2Nyb2xsZXIgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCB0cnVlKTtcbiAgICAgICAgaWYgKHNjcm9sbGluZyAmJiAoIXBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIHx8IHggIT09IGxhc3RBdXRvU2Nyb2xsWCB8fCB5ICE9PSBsYXN0QXV0b1Njcm9sbFkpKSB7XG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgJiYgY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpO1xuICAgICAgICAgIC8vIERldGVjdCBmb3IgcG9pbnRlciBlbGVtIGNoYW5nZSwgZW11bGF0aW5nIG5hdGl2ZSBEbkQgYmVoYXZpb3VyXG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV3RWxlbSA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSksIHRydWUpO1xuICAgICAgICAgICAgaWYgKG5ld0VsZW0gIT09IG9nRWxlbVNjcm9sbGVyKSB7XG4gICAgICAgICAgICAgIG9nRWxlbVNjcm9sbGVyID0gbmV3RWxlbTtcbiAgICAgICAgICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXV0b1Njcm9sbChldnQsIF90aGlzLm9wdGlvbnMsIG5ld0VsZW0sIGZhbGxiYWNrKTtcbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgbGFzdEF1dG9TY3JvbGxYID0geDtcbiAgICAgICAgICBsYXN0QXV0b1Njcm9sbFkgPSB5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBEbkQgaXMgZW5hYmxlZCAoYW5kIGJyb3dzZXIgaGFzIGdvb2QgYXV0b3Njcm9sbGluZyksIGZpcnN0IGF1dG9zY3JvbGwgd2lsbCBhbHJlYWR5IHNjcm9sbCwgc28gZ2V0IHBhcmVudCBhdXRvc2Nyb2xsIG9mIGZpcnN0IGF1dG9zY3JvbGxcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYnViYmxlU2Nyb2xsIHx8IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIHRydWUpID09PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICAgICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF1dG9TY3JvbGwoZXZ0LCB0aGlzLm9wdGlvbnMsIGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIGZhbHNlKSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKEF1dG9TY3JvbGwsIHtcbiAgICBwbHVnaW5OYW1lOiAnc2Nyb2xsJyxcbiAgICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG4gIH0pO1xufVxuZnVuY3Rpb24gY2xlYXJBdXRvU2Nyb2xscygpIHtcbiAgYXV0b1Njcm9sbHMuZm9yRWFjaChmdW5jdGlvbiAoYXV0b1Njcm9sbCkge1xuICAgIGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbC5waWQpO1xuICB9KTtcbiAgYXV0b1Njcm9sbHMgPSBbXTtcbn1cbmZ1bmN0aW9uIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKSB7XG4gIGNsZWFySW50ZXJ2YWwocG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwpO1xufVxudmFyIGF1dG9TY3JvbGwgPSB0aHJvdHRsZShmdW5jdGlvbiAoZXZ0LCBvcHRpb25zLCByb290RWwsIGlzRmFsbGJhY2spIHtcbiAgLy8gQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MDU1MjFcbiAgaWYgKCFvcHRpb25zLnNjcm9sbCkgcmV0dXJuO1xuICB2YXIgeCA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRYLFxuICAgIHkgPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WSxcbiAgICBzZW5zID0gb3B0aW9ucy5zY3JvbGxTZW5zaXRpdml0eSxcbiAgICBzcGVlZCA9IG9wdGlvbnMuc2Nyb2xsU3BlZWQsXG4gICAgd2luU2Nyb2xsZXIgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gIHZhciBzY3JvbGxUaGlzSW5zdGFuY2UgPSBmYWxzZSxcbiAgICBzY3JvbGxDdXN0b21GbjtcblxuICAvLyBOZXcgc2Nyb2xsIHJvb3QsIHNldCBzY3JvbGxFbFxuICBpZiAoc2Nyb2xsUm9vdEVsICE9PSByb290RWwpIHtcbiAgICBzY3JvbGxSb290RWwgPSByb290RWw7XG4gICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgIHNjcm9sbEVsID0gb3B0aW9ucy5zY3JvbGw7XG4gICAgc2Nyb2xsQ3VzdG9tRm4gPSBvcHRpb25zLnNjcm9sbEZuO1xuICAgIGlmIChzY3JvbGxFbCA9PT0gdHJ1ZSkge1xuICAgICAgc2Nyb2xsRWwgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChyb290RWwsIHRydWUpO1xuICAgIH1cbiAgfVxuICB2YXIgbGF5ZXJzT3V0ID0gMDtcbiAgdmFyIGN1cnJlbnRQYXJlbnQgPSBzY3JvbGxFbDtcbiAgZG8ge1xuICAgIHZhciBlbCA9IGN1cnJlbnRQYXJlbnQsXG4gICAgICByZWN0ID0gZ2V0UmVjdChlbCksXG4gICAgICB0b3AgPSByZWN0LnRvcCxcbiAgICAgIGJvdHRvbSA9IHJlY3QuYm90dG9tLFxuICAgICAgbGVmdCA9IHJlY3QubGVmdCxcbiAgICAgIHJpZ2h0ID0gcmVjdC5yaWdodCxcbiAgICAgIHdpZHRoID0gcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodCA9IHJlY3QuaGVpZ2h0LFxuICAgICAgY2FuU2Nyb2xsWCA9IHZvaWQgMCxcbiAgICAgIGNhblNjcm9sbFkgPSB2b2lkIDAsXG4gICAgICBzY3JvbGxXaWR0aCA9IGVsLnNjcm9sbFdpZHRoLFxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gZWwuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZWxDU1MgPSBjc3MoZWwpLFxuICAgICAgc2Nyb2xsUG9zWCA9IGVsLnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxQb3NZID0gZWwuc2Nyb2xsVG9wO1xuICAgIGlmIChlbCA9PT0gd2luU2Nyb2xsZXIpIHtcbiAgICAgIGNhblNjcm9sbFggPSB3aWR0aCA8IHNjcm9sbFdpZHRoICYmIChlbENTUy5vdmVyZmxvd1ggPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Zpc2libGUnKTtcbiAgICAgIGNhblNjcm9sbFkgPSBoZWlnaHQgPCBzY3JvbGxIZWlnaHQgJiYgKGVsQ1NTLm92ZXJmbG93WSA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Njcm9sbCcgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAndmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5TY3JvbGxYID0gd2lkdGggPCBzY3JvbGxXaWR0aCAmJiAoZWxDU1Mub3ZlcmZsb3dYID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAnc2Nyb2xsJyk7XG4gICAgICBjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChlbENTUy5vdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICdzY3JvbGwnKTtcbiAgICB9XG4gICAgdmFyIHZ4ID0gY2FuU2Nyb2xsWCAmJiAoTWF0aC5hYnMocmlnaHQgLSB4KSA8PSBzZW5zICYmIHNjcm9sbFBvc1ggKyB3aWR0aCA8IHNjcm9sbFdpZHRoKSAtIChNYXRoLmFicyhsZWZ0IC0geCkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1gpO1xuICAgIHZhciB2eSA9IGNhblNjcm9sbFkgJiYgKE1hdGguYWJzKGJvdHRvbSAtIHkpIDw9IHNlbnMgJiYgc2Nyb2xsUG9zWSArIGhlaWdodCA8IHNjcm9sbEhlaWdodCkgLSAoTWF0aC5hYnModG9wIC0geSkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1kpO1xuICAgIGlmICghYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbGF5ZXJzT3V0OyBpKyspIHtcbiAgICAgICAgaWYgKCFhdXRvU2Nyb2xsc1tpXSkge1xuICAgICAgICAgIGF1dG9TY3JvbGxzW2ldID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggIT0gdnggfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSAhPSB2eSB8fCBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLmVsICE9PSBlbCkge1xuICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5lbCA9IGVsO1xuICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eCA9IHZ4O1xuICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSA9IHZ5O1xuICAgICAgY2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnBpZCk7XG4gICAgICBpZiAodnggIT0gMCB8fCB2eSAhPSAwKSB7XG4gICAgICAgIHNjcm9sbFRoaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgICAgIC8qIGpzaGludCBsb29wZnVuYzp0cnVlICovXG4gICAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0ucGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGVtdWxhdGUgZHJhZyBvdmVyIGR1cmluZyBhdXRvc2Nyb2xsIChmYWxsYmFjayksIGVtdWxhdGluZyBuYXRpdmUgRG5EIGJlaGF2aW91clxuICAgICAgICAgIGlmIChpc0ZhbGxiYWNrICYmIHRoaXMubGF5ZXIgPT09IDApIHtcbiAgICAgICAgICAgIFNvcnRhYmxlLmFjdGl2ZS5fb25Ub3VjaE1vdmUodG91Y2hFdnQkMSk7IC8vIFRvIG1vdmUgZ2hvc3QgaWYgaXQgaXMgcG9zaXRpb25lZCBhYnNvbHV0ZWx5XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXRZID0gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnkgPyBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eSAqIHNwZWVkIDogMDtcbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0WCA9IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ID8gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnggKiBzcGVlZCA6IDA7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzY3JvbGxDdXN0b21GbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHNjcm9sbEN1c3RvbUZuLmNhbGwoU29ydGFibGUuZHJhZ2dlZC5wYXJlbnROb2RlW2V4cGFuZG9dLCBzY3JvbGxPZmZzZXRYLCBzY3JvbGxPZmZzZXRZLCBldnQsIHRvdWNoRXZ0JDEsIGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLmVsKSAhPT0gJ2NvbnRpbnVlJykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNjcm9sbEJ5KGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLmVsLCBzY3JvbGxPZmZzZXRYLCBzY3JvbGxPZmZzZXRZKTtcbiAgICAgICAgfS5iaW5kKHtcbiAgICAgICAgICBsYXllcjogbGF5ZXJzT3V0XG4gICAgICAgIH0pLCAyNCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxheWVyc091dCsrO1xuICB9IHdoaWxlIChvcHRpb25zLmJ1YmJsZVNjcm9sbCAmJiBjdXJyZW50UGFyZW50ICE9PSB3aW5TY3JvbGxlciAmJiAoY3VycmVudFBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGN1cnJlbnRQYXJlbnQsIGZhbHNlKSkpO1xuICBzY3JvbGxpbmcgPSBzY3JvbGxUaGlzSW5zdGFuY2U7IC8vIGluIGNhc2UgYW5vdGhlciBmdW5jdGlvbiBjYXRjaGVzIHNjcm9sbGluZyBhcyBmYWxzZSBpbiBiZXR3ZWVuIHdoZW4gaXQgaXMgbm90XG59LCAzMCk7XG5cbnZhciBkcm9wID0gZnVuY3Rpb24gZHJvcChfcmVmKSB7XG4gIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50LFxuICAgIHB1dFNvcnRhYmxlID0gX3JlZi5wdXRTb3J0YWJsZSxcbiAgICBkcmFnRWwgPSBfcmVmLmRyYWdFbCxcbiAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYuYWN0aXZlU29ydGFibGUsXG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZi5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgaGlkZUdob3N0Rm9yVGFyZ2V0ID0gX3JlZi5oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQgPSBfcmVmLnVuaGlkZUdob3N0Rm9yVGFyZ2V0O1xuICBpZiAoIW9yaWdpbmFsRXZlbnQpIHJldHVybjtcbiAgdmFyIHRvU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCBhY3RpdmVTb3J0YWJsZTtcbiAgaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gIHZhciB0b3VjaCA9IG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogb3JpZ2luYWxFdmVudDtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7XG4gIHVuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gIGlmICh0b1NvcnRhYmxlICYmICF0b1NvcnRhYmxlLmVsLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ3NwaWxsJyk7XG4gICAgdGhpcy5vblNwaWxsKHtcbiAgICAgIGRyYWdFbDogZHJhZ0VsLFxuICAgICAgcHV0U29ydGFibGU6IHB1dFNvcnRhYmxlXG4gICAgfSk7XG4gIH1cbn07XG5mdW5jdGlvbiBSZXZlcnQoKSB7fVxuUmV2ZXJ0LnByb3RvdHlwZSA9IHtcbiAgc3RhcnRJbmRleDogbnVsbCxcbiAgZHJhZ1N0YXJ0OiBmdW5jdGlvbiBkcmFnU3RhcnQoX3JlZjIpIHtcbiAgICB2YXIgb2xkRHJhZ2dhYmxlSW5kZXggPSBfcmVmMi5vbGREcmFnZ2FibGVJbmRleDtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgfSxcbiAgb25TcGlsbDogZnVuY3Rpb24gb25TcGlsbChfcmVmMykge1xuICAgIHZhciBkcmFnRWwgPSBfcmVmMy5kcmFnRWwsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWYzLnB1dFNvcnRhYmxlO1xuICAgIHRoaXMuc29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgaWYgKHB1dFNvcnRhYmxlKSB7XG4gICAgICBwdXRTb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG4gICAgdmFyIG5leHRTaWJsaW5nID0gZ2V0Q2hpbGQodGhpcy5zb3J0YWJsZS5lbCwgdGhpcy5zdGFydEluZGV4LCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmIChuZXh0U2libGluZykge1xuICAgICAgdGhpcy5zb3J0YWJsZS5lbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBuZXh0U2libGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGFibGUuZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICB9XG4gICAgdGhpcy5zb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgaWYgKHB1dFNvcnRhYmxlKSB7XG4gICAgICBwdXRTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgfVxuICB9LFxuICBkcm9wOiBkcm9wXG59O1xuX2V4dGVuZHMoUmV2ZXJ0LCB7XG4gIHBsdWdpbk5hbWU6ICdyZXZlcnRPblNwaWxsJ1xufSk7XG5mdW5jdGlvbiBSZW1vdmUoKSB7fVxuUmVtb3ZlLnByb3RvdHlwZSA9IHtcbiAgb25TcGlsbDogZnVuY3Rpb24gb25TcGlsbChfcmVmNCkge1xuICAgIHZhciBkcmFnRWwgPSBfcmVmNC5kcmFnRWwsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWY0LnB1dFNvcnRhYmxlO1xuICAgIHZhciBwYXJlbnRTb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgcGFyZW50U29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgZHJhZ0VsLnBhcmVudE5vZGUgJiYgZHJhZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ0VsKTtcbiAgICBwYXJlbnRTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gIH0sXG4gIGRyb3A6IGRyb3Bcbn07XG5fZXh0ZW5kcyhSZW1vdmUsIHtcbiAgcGx1Z2luTmFtZTogJ3JlbW92ZU9uU3BpbGwnXG59KTtcblxudmFyIGxhc3RTd2FwRWw7XG5mdW5jdGlvbiBTd2FwUGx1Z2luKCkge1xuICBmdW5jdGlvbiBTd2FwKCkge1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzd2FwQ2xhc3M6ICdzb3J0YWJsZS1zd2FwLWhpZ2hsaWdodCdcbiAgICB9O1xuICB9XG4gIFN3YXAucHJvdG90eXBlID0ge1xuICAgIGRyYWdTdGFydDogZnVuY3Rpb24gZHJhZ1N0YXJ0KF9yZWYpIHtcbiAgICAgIHZhciBkcmFnRWwgPSBfcmVmLmRyYWdFbDtcbiAgICAgIGxhc3RTd2FwRWwgPSBkcmFnRWw7XG4gICAgfSxcbiAgICBkcmFnT3ZlclZhbGlkOiBmdW5jdGlvbiBkcmFnT3ZlclZhbGlkKF9yZWYyKSB7XG4gICAgICB2YXIgY29tcGxldGVkID0gX3JlZjIuY29tcGxldGVkLFxuICAgICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICAgIG9uTW92ZSA9IF9yZWYyLm9uTW92ZSxcbiAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMi5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgY2hhbmdlZCA9IF9yZWYyLmNoYW5nZWQsXG4gICAgICAgIGNhbmNlbCA9IF9yZWYyLmNhbmNlbDtcbiAgICAgIGlmICghYWN0aXZlU29ydGFibGUub3B0aW9ucy5zd2FwKSByZXR1cm47XG4gICAgICB2YXIgZWwgPSB0aGlzLnNvcnRhYmxlLmVsLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IGVsKSB7XG4gICAgICAgIHZhciBwcmV2U3dhcEVsID0gbGFzdFN3YXBFbDtcbiAgICAgICAgaWYgKG9uTW92ZSh0YXJnZXQpICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKHRhcmdldCwgb3B0aW9ucy5zd2FwQ2xhc3MsIHRydWUpO1xuICAgICAgICAgIGxhc3RTd2FwRWwgPSB0YXJnZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdFN3YXBFbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZTd2FwRWwgJiYgcHJldlN3YXBFbCAhPT0gbGFzdFN3YXBFbCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKHByZXZTd2FwRWwsIG9wdGlvbnMuc3dhcENsYXNzLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZWQoKTtcbiAgICAgIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcChfcmVmMykge1xuICAgICAgdmFyIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjMuYWN0aXZlU29ydGFibGUsXG4gICAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjMucHV0U29ydGFibGUsXG4gICAgICAgIGRyYWdFbCA9IF9yZWYzLmRyYWdFbDtcbiAgICAgIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgdGhpcy5zb3J0YWJsZTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgbGFzdFN3YXBFbCAmJiB0b2dnbGVDbGFzcyhsYXN0U3dhcEVsLCBvcHRpb25zLnN3YXBDbGFzcywgZmFsc2UpO1xuICAgICAgaWYgKGxhc3RTd2FwRWwgJiYgKG9wdGlvbnMuc3dhcCB8fCBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5vcHRpb25zLnN3YXApKSB7XG4gICAgICAgIGlmIChkcmFnRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b1NvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIGlmICh0b1NvcnRhYmxlICE9PSBhY3RpdmVTb3J0YWJsZSkgYWN0aXZlU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgc3dhcE5vZGVzKGRyYWdFbCwgbGFzdFN3YXBFbCk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgICAgaWYgKHRvU29ydGFibGUgIT09IGFjdGl2ZVNvcnRhYmxlKSBhY3RpdmVTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG51bGxpbmc6IGZ1bmN0aW9uIG51bGxpbmcoKSB7XG4gICAgICBsYXN0U3dhcEVsID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhTd2FwLCB7XG4gICAgcGx1Z2luTmFtZTogJ3N3YXAnLFxuICAgIGV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZXZlbnRQcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3dhcEl0ZW06IGxhc3RTd2FwRWxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHN3YXBOb2RlcyhuMSwgbjIpIHtcbiAgdmFyIHAxID0gbjEucGFyZW50Tm9kZSxcbiAgICBwMiA9IG4yLnBhcmVudE5vZGUsXG4gICAgaTEsXG4gICAgaTI7XG4gIGlmICghcDEgfHwgIXAyIHx8IHAxLmlzRXF1YWxOb2RlKG4yKSB8fCBwMi5pc0VxdWFsTm9kZShuMSkpIHJldHVybjtcbiAgaTEgPSBpbmRleChuMSk7XG4gIGkyID0gaW5kZXgobjIpO1xuICBpZiAocDEuaXNFcXVhbE5vZGUocDIpICYmIGkxIDwgaTIpIHtcbiAgICBpMisrO1xuICB9XG4gIHAxLmluc2VydEJlZm9yZShuMiwgcDEuY2hpbGRyZW5baTFdKTtcbiAgcDIuaW5zZXJ0QmVmb3JlKG4xLCBwMi5jaGlsZHJlbltpMl0pO1xufVxuXG52YXIgbXVsdGlEcmFnRWxlbWVudHMgPSBbXSxcbiAgbXVsdGlEcmFnQ2xvbmVzID0gW10sXG4gIGxhc3RNdWx0aURyYWdTZWxlY3QsXG4gIC8vIGZvciBzZWxlY3Rpb24gd2l0aCBtb2RpZmllciBrZXkgZG93biAoU0hJRlQpXG4gIG11bHRpRHJhZ1NvcnRhYmxlLFxuICBpbml0aWFsRm9sZGluZyA9IGZhbHNlLFxuICAvLyBJbml0aWFsIG11bHRpLWRyYWcgZm9sZCB3aGVuIGRyYWcgc3RhcnRlZFxuICBmb2xkaW5nID0gZmFsc2UsXG4gIC8vIEZvbGRpbmcgYW55IG90aGVyIHRpbWVcbiAgZHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgZHJhZ0VsJDEsXG4gIGNsb25lc0Zyb21SZWN0LFxuICBjbG9uZXNIaWRkZW47XG5mdW5jdGlvbiBNdWx0aURyYWdQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIE11bHRpRHJhZyhzb3J0YWJsZSkge1xuICAgIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuICAgIGZvciAodmFyIGZuIGluIHRoaXMpIHtcbiAgICAgIGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNvcnRhYmxlLm9wdGlvbnMuYXZvaWRJbXBsaWNpdERlc2VsZWN0KSB7XG4gICAgICBpZiAoc29ydGFibGUub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICBvbihkb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgICAgb24oZG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb24oZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5fY2hlY2tLZXlEb3duKTtcbiAgICBvbihkb2N1bWVudCwgJ2tleXVwJywgdGhpcy5fY2hlY2tLZXlVcCk7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdGVkQ2xhc3M6ICdzb3J0YWJsZS1zZWxlY3RlZCcsXG4gICAgICBtdWx0aURyYWdLZXk6IG51bGwsXG4gICAgICBhdm9pZEltcGxpY2l0RGVzZWxlY3Q6IGZhbHNlLFxuICAgICAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhVHJhbnNmZXIsIGRyYWdFbCkge1xuICAgICAgICB2YXIgZGF0YSA9ICcnO1xuICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoICYmIG11bHRpRHJhZ1NvcnRhYmxlID09PSBzb3J0YWJsZSkge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQsIGkpIHtcbiAgICAgICAgICAgIGRhdGEgKz0gKCFpID8gJycgOiAnLCAnKSArIG11bHRpRHJhZ0VsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGRyYWdFbC50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsIGRhdGEpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgTXVsdGlEcmFnLnByb3RvdHlwZSA9IHtcbiAgICBtdWx0aURyYWdLZXlEb3duOiBmYWxzZSxcbiAgICBpc011bHRpRHJhZzogZmFsc2UsXG4gICAgZGVsYXlTdGFydEdsb2JhbDogZnVuY3Rpb24gZGVsYXlTdGFydEdsb2JhbChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ2dlZCA9IF9yZWYuZHJhZ0VsO1xuICAgICAgZHJhZ0VsJDEgPSBkcmFnZ2VkO1xuICAgIH0sXG4gICAgZGVsYXlFbmRlZDogZnVuY3Rpb24gZGVsYXlFbmRlZCgpIHtcbiAgICAgIHRoaXMuaXNNdWx0aURyYWcgPSB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSk7XG4gICAgfSxcbiAgICBzZXR1cENsb25lOiBmdW5jdGlvbiBzZXR1cENsb25lKF9yZWYyKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMi5zb3J0YWJsZSxcbiAgICAgICAgY2FuY2VsID0gX3JlZjIuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lcy5wdXNoKGNsb25lKG11bHRpRHJhZ0VsZW1lbnRzW2ldKSk7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5zb3J0YWJsZUluZGV4ID0gbXVsdGlEcmFnRWxlbWVudHNbaV0uc29ydGFibGVJbmRleDtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcbiAgICAgICAgdG9nZ2xlQ2xhc3MobXVsdGlEcmFnQ2xvbmVzW2ldLCB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50c1tpXSA9PT0gZHJhZ0VsJDEgJiYgdG9nZ2xlQ2xhc3MobXVsdGlEcmFnQ2xvbmVzW2ldLCB0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKF9yZWYzKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMy5zb3J0YWJsZSxcbiAgICAgICAgcm9vdEVsID0gX3JlZjMucm9vdEVsLFxuICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmMy5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgICAgIGNhbmNlbCA9IF9yZWYzLmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUpIHtcbiAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCAmJiBtdWx0aURyYWdTb3J0YWJsZSA9PT0gc29ydGFibGUpIHtcbiAgICAgICAgICBpbnNlcnRNdWx0aURyYWdDbG9uZXModHJ1ZSwgcm9vdEVsKTtcbiAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ2Nsb25lJyk7XG4gICAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dDbG9uZTogZnVuY3Rpb24gc2hvd0Nsb25lKF9yZWY0KSB7XG4gICAgICB2YXIgY2xvbmVOb3dTaG93biA9IF9yZWY0LmNsb25lTm93U2hvd24sXG4gICAgICAgIHJvb3RFbCA9IF9yZWY0LnJvb3RFbCxcbiAgICAgICAgY2FuY2VsID0gX3JlZjQuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBpbnNlcnRNdWx0aURyYWdDbG9uZXMoZmFsc2UsIHJvb3RFbCk7XG4gICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgY3NzKGNsb25lLCAnZGlzcGxheScsICcnKTtcbiAgICAgIH0pO1xuICAgICAgY2xvbmVOb3dTaG93bigpO1xuICAgICAgY2xvbmVzSGlkZGVuID0gZmFsc2U7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGhpZGVDbG9uZTogZnVuY3Rpb24gaGlkZUNsb25lKF9yZWY1KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjUuc29ydGFibGUsXG4gICAgICAgIGNsb25lTm93SGlkZGVuID0gX3JlZjUuY2xvbmVOb3dIaWRkZW4sXG4gICAgICAgIGNhbmNlbCA9IF9yZWY1LmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgIGNzcyhjbG9uZSwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSAmJiBjbG9uZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgY2xvbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xvbmVOb3dIaWRkZW4oKTtcbiAgICAgIGNsb25lc0hpZGRlbiA9IHRydWU7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGRyYWdTdGFydEdsb2JhbDogZnVuY3Rpb24gZHJhZ1N0YXJ0R2xvYmFsKF9yZWY2KSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNi5zb3J0YWJsZTtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZyAmJiBtdWx0aURyYWdTb3J0YWJsZSkge1xuICAgICAgICBtdWx0aURyYWdTb3J0YWJsZS5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICB9XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFNvcnQgbXVsdGktZHJhZyBlbGVtZW50c1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMgPSBtdWx0aURyYWdFbGVtZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnNvcnRhYmxlSW5kZXggLSBiLnNvcnRhYmxlSW5kZXg7XG4gICAgICB9KTtcbiAgICAgIGRyYWdTdGFydGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIGRyYWdTdGFydGVkOiBmdW5jdGlvbiBkcmFnU3RhcnRlZChfcmVmNykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNy5zb3J0YWJsZTtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIC8vIENhcHR1cmUgcmVjdHMsXG4gICAgICAgIC8vIGhpZGUgbXVsdGkgZHJhZyBlbGVtZW50cyAoYnkgcG9zaXRpb25pbmcgdGhlbSBhYnNvbHV0ZSksXG4gICAgICAgIC8vIHNldCBtdWx0aSBkcmFnIGVsZW1lbnRzIHJlY3RzIHRvIGRyYWdSZWN0LFxuICAgICAgICAvLyBzaG93IG11bHRpIGRyYWcgZWxlbWVudHMsXG4gICAgICAgIC8vIGFuaW1hdGUgdG8gcmVjdHMsXG4gICAgICAgIC8vIHVuc2V0IHJlY3RzICYgcmVtb3ZlIGZyb20gRE9NXG5cbiAgICAgICAgc29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBjc3MobXVsdGlEcmFnRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwkMSwgZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgc2V0UmVjdChtdWx0aURyYWdFbGVtZW50LCBkcmFnUmVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9sZGluZyA9IHRydWU7XG4gICAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzb3J0YWJsZS5hbmltYXRlQWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICBpbml0aWFsRm9sZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBhdXhpbGlhcnkgbXVsdGlkcmFnIGl0ZW1zIGZyb20gZWwsIGlmIHNvcnRpbmcgZW5hYmxlZFxuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuc29ydCkge1xuICAgICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZHJhZ092ZXI6IGZ1bmN0aW9uIGRyYWdPdmVyKF9yZWY4KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3JlZjgudGFyZ2V0LFxuICAgICAgICBjb21wbGV0ZWQgPSBfcmVmOC5jb21wbGV0ZWQsXG4gICAgICAgIGNhbmNlbCA9IF9yZWY4LmNhbmNlbDtcbiAgICAgIGlmIChmb2xkaW5nICYmIH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKHRhcmdldCkpIHtcbiAgICAgICAgY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXZlcnQ6IGZ1bmN0aW9uIHJldmVydChfcmVmOSkge1xuICAgICAgdmFyIGZyb21Tb3J0YWJsZSA9IF9yZWY5LmZyb21Tb3J0YWJsZSxcbiAgICAgICAgcm9vdEVsID0gX3JlZjkucm9vdEVsLFxuICAgICAgICBzb3J0YWJsZSA9IF9yZWY5LnNvcnRhYmxlLFxuICAgICAgICBkcmFnUmVjdCA9IF9yZWY5LmRyYWdSZWN0O1xuICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gU2V0dXAgdW5mb2xkIGFuaW1hdGlvblxuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgc29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgdGFyZ2V0OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgICAgcmVjdDogZm9sZGluZyA/IGdldFJlY3QobXVsdGlEcmFnRWxlbWVudCkgOiBkcmFnUmVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHVuc2V0UmVjdChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LmZyb21SZWN0ID0gZHJhZ1JlY3Q7XG4gICAgICAgICAgZnJvbVNvcnRhYmxlLnJlbW92ZUFuaW1hdGlvblN0YXRlKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICBpbnNlcnRNdWx0aURyYWdFbGVtZW50cyghdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlLCByb290RWwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJDb21wbGV0ZWQ6IGZ1bmN0aW9uIGRyYWdPdmVyQ29tcGxldGVkKF9yZWYxMCkge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjEwLnNvcnRhYmxlLFxuICAgICAgICBpc093bmVyID0gX3JlZjEwLmlzT3duZXIsXG4gICAgICAgIGluc2VydGlvbiA9IF9yZWYxMC5pbnNlcnRpb24sXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjEwLmFjdGl2ZVNvcnRhYmxlLFxuICAgICAgICBwYXJlbnRFbCA9IF9yZWYxMC5wYXJlbnRFbCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMTAucHV0U29ydGFibGU7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmIChpbnNlcnRpb24pIHtcbiAgICAgICAgLy8gQ2xvbmVzIG11c3QgYmUgaGlkZGVuIGJlZm9yZSBmb2xkaW5nIGFuaW1hdGlvbiB0byBjYXB0dXJlIGRyYWdSZWN0QWJzb2x1dGUgcHJvcGVybHlcbiAgICAgICAgaWYgKGlzT3duZXIpIHtcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5faGlkZUNsb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gSWYgbGVhdmluZyBzb3J0OmZhbHNlIHJvb3QsIG9yIGFscmVhZHkgZm9sZGluZyAtIEZvbGQgdG8gbmV3IGxvY2F0aW9uXG4gICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbiAmJiBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxICYmIChmb2xkaW5nIHx8ICFpc093bmVyICYmICFhY3RpdmVTb3J0YWJsZS5vcHRpb25zLnNvcnQgJiYgIXB1dFNvcnRhYmxlKSkge1xuICAgICAgICAgIC8vIEZvbGQ6IFNldCBhbGwgbXVsdGkgZHJhZyBlbGVtZW50cydzIHJlY3RzIHRvIGRyYWdFbCdzIHJlY3Qgd2hlbiBtdWx0aS1kcmFnIGVsZW1lbnRzIGFyZSBpbnZpc2libGVcbiAgICAgICAgICB2YXIgZHJhZ1JlY3RBYnNvbHV0ZSA9IGdldFJlY3QoZHJhZ0VsJDEsIGZhbHNlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIHNldFJlY3QobXVsdGlEcmFnRWxlbWVudCwgZHJhZ1JlY3RBYnNvbHV0ZSk7XG5cbiAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudChzKSB0byBlbmQgb2YgcGFyZW50RWwgc28gdGhhdCBpdCBkb2VzIG5vdCBpbnRlcmZlcmUgd2l0aCBtdWx0aS1kcmFnIGNsb25lcyBpbnNlcnRpb24gaWYgdGhleSBhcmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIHdoaWxlIGZvbGRpbmcsIGFuZCBzbyB0aGF0IHdlIGNhbiBjYXB0dXJlIHRoZW0gYWdhaW4gYmVjYXVzZSBvbGQgc29ydGFibGUgd2lsbCBubyBsb25nZXIgYmUgZnJvbVNvcnRhYmxlXG4gICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIHNob3duIChhbmQgY2hlY2sgdG8gcmVtb3ZlIG11bHRpIGRyYWdzKSBhZnRlciBmb2xkaW5nIHdoZW4gaW50ZXJmZXJpbmcgbXVsdGlEcmFnRWxlbWVudHMgYXJlIG1vdmVkIG91dFxuICAgICAgICBpZiAoIWlzT3duZXIpIHtcbiAgICAgICAgICAvLyBPbmx5IHJlbW92ZSBpZiBub3QgZm9sZGluZyAoZm9sZGluZyB3aWxsIHJlbW92ZSB0aGVtIGFueXdheXMpXG4gICAgICAgICAgaWYgKCFmb2xkaW5nKSB7XG4gICAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIGNsb25lc0hpZGRlbkJlZm9yZSA9IGNsb25lc0hpZGRlbjtcbiAgICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoc29ydGFibGUpO1xuXG4gICAgICAgICAgICAvLyBVbmZvbGQgYW5pbWF0aW9uIGZvciBjbG9uZXMgaWYgc2hvd2luZyBmcm9tIGhpZGRlblxuICAgICAgICAgICAgaWYgKGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuYW5pbWF0aW9uICYmICFjbG9uZXNIaWRkZW4gJiYgY2xvbmVzSGlkZGVuQmVmb3JlKSB7XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogY2xvbmUsXG4gICAgICAgICAgICAgICAgICByZWN0OiBjbG9uZXNGcm9tUmVjdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNsb25lLmZyb21SZWN0ID0gY2xvbmVzRnJvbVJlY3Q7XG4gICAgICAgICAgICAgICAgY2xvbmUudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoc29ydGFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlOiBmdW5jdGlvbiBkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmUoX3JlZjExKSB7XG4gICAgICB2YXIgZHJhZ1JlY3QgPSBfcmVmMTEuZHJhZ1JlY3QsXG4gICAgICAgIGlzT3duZXIgPSBfcmVmMTEuaXNPd25lcixcbiAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMTEuYWN0aXZlU29ydGFibGU7XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgIH0pO1xuICAgICAgaWYgKGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuYW5pbWF0aW9uICYmICFpc093bmVyICYmIGFjdGl2ZVNvcnRhYmxlLm11bHRpRHJhZy5pc011bHRpRHJhZykge1xuICAgICAgICBjbG9uZXNGcm9tUmVjdCA9IF9leHRlbmRzKHt9LCBkcmFnUmVjdCk7XG4gICAgICAgIHZhciBkcmFnTWF0cml4ID0gbWF0cml4KGRyYWdFbCQxLCB0cnVlKTtcbiAgICAgICAgY2xvbmVzRnJvbVJlY3QudG9wIC09IGRyYWdNYXRyaXguZjtcbiAgICAgICAgY2xvbmVzRnJvbVJlY3QubGVmdCAtPSBkcmFnTWF0cml4LmU7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlOiBmdW5jdGlvbiBkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlKCkge1xuICAgICAgaWYgKGZvbGRpbmcpIHtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcChfcmVmMTIpIHtcbiAgICAgIHZhciBldnQgPSBfcmVmMTIub3JpZ2luYWxFdmVudCxcbiAgICAgICAgcm9vdEVsID0gX3JlZjEyLnJvb3RFbCxcbiAgICAgICAgcGFyZW50RWwgPSBfcmVmMTIucGFyZW50RWwsXG4gICAgICAgIHNvcnRhYmxlID0gX3JlZjEyLnNvcnRhYmxlLFxuICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmMTIuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgICAgICBvbGRJbmRleCA9IF9yZWYxMi5vbGRJbmRleCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMTIucHV0U29ydGFibGU7XG4gICAgICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgICBpZiAoIWV2dCkgcmV0dXJuO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNoaWxkcmVuID0gcGFyZW50RWwuY2hpbGRyZW47XG5cbiAgICAgIC8vIE11bHRpLWRyYWcgc2VsZWN0aW9uXG4gICAgICBpZiAoIWRyYWdTdGFydGVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm11bHRpRHJhZ0tleSAmJiAhdGhpcy5tdWx0aURyYWdLZXlEb3duKSB7XG4gICAgICAgICAgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwkMSwgb3B0aW9ucy5zZWxlY3RlZENsYXNzLCAhfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpKTtcbiAgICAgICAgaWYgKCF+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSkpIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5wdXNoKGRyYWdFbCQxKTtcbiAgICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgIHJvb3RFbDogcm9vdEVsLFxuICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICB0YXJnZXRFbDogZHJhZ0VsJDEsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIE1vZGlmaWVyIGFjdGl2YXRlZCwgc2VsZWN0IGZyb20gbGFzdCB0byBkcmFnRWxcbiAgICAgICAgICBpZiAoZXZ0LnNoaWZ0S2V5ICYmIGxhc3RNdWx0aURyYWdTZWxlY3QgJiYgc29ydGFibGUuZWwuY29udGFpbnMobGFzdE11bHRpRHJhZ1NlbGVjdCkpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBpbmRleChsYXN0TXVsdGlEcmFnU2VsZWN0KSxcbiAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXgoZHJhZ0VsJDEpO1xuICAgICAgICAgICAgaWYgKH5sYXN0SW5kZXggJiYgfmN1cnJlbnRJbmRleCAmJiBsYXN0SW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAvLyBNdXN0IGluY2x1ZGUgbGFzdE11bHRpRHJhZ1NlbGVjdCAoc2VsZWN0IGl0KSwgaW4gY2FzZSBtb2RpZmllZCBzZWxlY3Rpb24gZnJvbSBubyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ1dCBwcmV2aW91cyBzZWxlY3Rpb24gZXhpc3RlZClcbiAgICAgICAgICAgICAgdmFyIG4sIGk7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpID0gbGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIG4gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaSA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgICBuID0gbGFzdEluZGV4ICsgMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihjaGlsZHJlbltpXSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGNoaWxkcmVuW2ldLCBvcHRpb25zLnNlbGVjdGVkQ2xhc3MsIHRydWUpO1xuICAgICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgIHRhcmdldEVsOiBjaGlsZHJlbltpXSxcbiAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RNdWx0aURyYWdTZWxlY3QgPSBkcmFnRWwkMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSB0b1NvcnRhYmxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNwbGljZShtdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKSwgMSk7XG4gICAgICAgICAgbGFzdE11bHRpRHJhZ1NlbGVjdCA9IG51bGw7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgIG5hbWU6ICdkZXNlbGVjdCcsXG4gICAgICAgICAgICB0YXJnZXRFbDogZHJhZ0VsJDEsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNdWx0aS1kcmFnIGRyb3BcbiAgICAgIGlmIChkcmFnU3RhcnRlZCAmJiB0aGlzLmlzTXVsdGlEcmFnKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gRG8gbm90IFwidW5mb2xkXCIgYWZ0ZXIgYXJvdW5kIGRyYWdFbCBpZiByZXZlcnRlZFxuICAgICAgICBpZiAoKHBhcmVudEVsW2V4cGFuZG9dLm9wdGlvbnMuc29ydCB8fCBwYXJlbnRFbCAhPT0gcm9vdEVsKSAmJiBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwkMSksXG4gICAgICAgICAgICBtdWx0aURyYWdJbmRleCA9IGluZGV4KGRyYWdFbCQxLCAnOm5vdCguJyArIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzICsgJyknKTtcbiAgICAgICAgICBpZiAoIWluaXRpYWxGb2xkaW5nICYmIG9wdGlvbnMuYW5pbWF0aW9uKSBkcmFnRWwkMS50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgIHRvU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgaWYgKCFpbml0aWFsRm9sZGluZykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgIGRyYWdFbCQxLmZyb21SZWN0ID0gZHJhZ1JlY3Q7XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgIT09IGRyYWdFbCQxKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3Q7XG4gICAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LmZyb21SZWN0ID0gcmVjdDtcblxuICAgICAgICAgICAgICAgICAgLy8gUHJlcGFyZSB1bmZvbGQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICB0b1NvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICByZWN0OiByZWN0XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNdWx0aSBkcmFnIGVsZW1lbnRzIGFyZSBub3QgbmVjZXNzYXJpbHkgcmVtb3ZlZCBmcm9tIHRoZSBET00gb24gZHJvcCwgc28gdG8gcmVpbnNlcnRcbiAgICAgICAgICAgIC8vIHByb3Blcmx5IHRoZXkgbXVzdCBhbGwgYmUgcmVtb3ZlZFxuICAgICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW211bHRpRHJhZ0luZGV4XSkge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZShtdWx0aURyYWdFbGVtZW50LCBjaGlsZHJlblttdWx0aURyYWdJbmRleF0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0luZGV4Kys7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSWYgaW5pdGlhbCBmb2xkaW5nIGlzIGRvbmUsIHRoZSBlbGVtZW50cyBtYXkgaGF2ZSBjaGFuZ2VkIHBvc2l0aW9uIGJlY2F1c2UgdGhleSBhcmUgbm93XG4gICAgICAgICAgICAvLyB1bmZvbGRpbmcgYXJvdW5kIGRyYWdFbCwgZXZlbiB0aG91Z2ggZHJhZ0VsIG1heSBub3QgaGF2ZSBoaXMgaW5kZXggY2hhbmdlZCwgc28gdXBkYXRlIGV2ZW50XG4gICAgICAgICAgICAvLyBtdXN0IGJlIGZpcmVkIGhlcmUgYXMgU29ydGFibGUgd2lsbCBub3QuXG4gICAgICAgICAgICBpZiAob2xkSW5kZXggPT09IGluZGV4KGRyYWdFbCQxKSkge1xuICAgICAgICAgICAgICB2YXIgdXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ICE9PSBpbmRleChtdWx0aURyYWdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCd1cGRhdGUnKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ3NvcnQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE11c3QgYmUgZG9uZSBhZnRlciBjYXB0dXJpbmcgaW5kaXZpZHVhbCByZWN0cyAoc2Nyb2xsIGJhcilcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSB0b1NvcnRhYmxlO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgY2xvbmVzIGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgICAgY2xvbmUucGFyZW50Tm9kZSAmJiBjbG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBudWxsaW5nR2xvYmFsOiBmdW5jdGlvbiBudWxsaW5nR2xvYmFsKCkge1xuICAgICAgdGhpcy5pc011bHRpRHJhZyA9IGRyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgICBtdWx0aURyYWdDbG9uZXMubGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIGRlc3Ryb3lHbG9iYWw6IGZ1bmN0aW9uIGRlc3Ryb3lHbG9iYWwoKSB7XG4gICAgICB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuX2NoZWNrS2V5RG93bik7XG4gICAgICBvZmYoZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMuX2NoZWNrS2V5VXApO1xuICAgIH0sXG4gICAgX2Rlc2VsZWN0TXVsdGlEcmFnOiBmdW5jdGlvbiBfZGVzZWxlY3RNdWx0aURyYWcoZXZ0KSB7XG4gICAgICBpZiAodHlwZW9mIGRyYWdTdGFydGVkICE9PSBcInVuZGVmaW5lZFwiICYmIGRyYWdTdGFydGVkKSByZXR1cm47XG5cbiAgICAgIC8vIE9ubHkgZGVzZWxlY3QgaWYgc2VsZWN0aW9uIGlzIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChtdWx0aURyYWdTb3J0YWJsZSAhPT0gdGhpcy5zb3J0YWJsZSkgcmV0dXJuO1xuXG4gICAgICAvLyBPbmx5IGRlc2VsZWN0IGlmIHRhcmdldCBpcyBub3QgaXRlbSBpbiB0aGlzIHNvcnRhYmxlXG4gICAgICBpZiAoZXZ0ICYmIGNsb3Nlc3QoZXZ0LnRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5zb3J0YWJsZS5lbCwgZmFsc2UpKSByZXR1cm47XG5cbiAgICAgIC8vIE9ubHkgZGVzZWxlY3QgaWYgbGVmdCBjbGlja1xuICAgICAgaWYgKGV2dCAmJiBldnQuYnV0dG9uICE9PSAwKSByZXR1cm47XG4gICAgICB3aGlsZSAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBlbCA9IG11bHRpRHJhZ0VsZW1lbnRzWzBdO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuc2hpZnQoKTtcbiAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgc29ydGFibGU6IHRoaXMuc29ydGFibGUsXG4gICAgICAgICAgcm9vdEVsOiB0aGlzLnNvcnRhYmxlLmVsLFxuICAgICAgICAgIG5hbWU6ICdkZXNlbGVjdCcsXG4gICAgICAgICAgdGFyZ2V0RWw6IGVsLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jaGVja0tleURvd246IGZ1bmN0aW9uIF9jaGVja0tleURvd24oZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmtleSA9PT0gdGhpcy5vcHRpb25zLm11bHRpRHJhZ0tleSkge1xuICAgICAgICB0aGlzLm11bHRpRHJhZ0tleURvd24gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgX2NoZWNrS2V5VXA6IGZ1bmN0aW9uIF9jaGVja0tleVVwKGV2dCkge1xuICAgICAgaWYgKGV2dC5rZXkgPT09IHRoaXMub3B0aW9ucy5tdWx0aURyYWdLZXkpIHtcbiAgICAgICAgdGhpcy5tdWx0aURyYWdLZXlEb3duID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gX2V4dGVuZHMoTXVsdGlEcmFnLCB7XG4gICAgLy8gU3RhdGljIG1ldGhvZHMgJiBwcm9wZXJ0aWVzXG4gICAgcGx1Z2luTmFtZTogJ211bHRpRHJhZycsXG4gICAgdXRpbHM6IHtcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTZWxlY3RzIHRoZSBwcm92aWRlZCBtdWx0aS1kcmFnIGl0ZW1cclxuICAgICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgIFRoZSBlbGVtZW50IHRvIGJlIHNlbGVjdGVkXHJcbiAgICAgICAqL1xuICAgICAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoZWwpIHtcbiAgICAgICAgdmFyIHNvcnRhYmxlID0gZWwucGFyZW50Tm9kZVtleHBhbmRvXTtcbiAgICAgICAgaWYgKCFzb3J0YWJsZSB8fCAhc29ydGFibGUub3B0aW9ucy5tdWx0aURyYWcgfHwgfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZWwpKSByZXR1cm47XG4gICAgICAgIGlmIChtdWx0aURyYWdTb3J0YWJsZSAmJiBtdWx0aURyYWdTb3J0YWJsZSAhPT0gc29ydGFibGUpIHtcbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZS5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSBzb3J0YWJsZTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgc29ydGFibGUub3B0aW9ucy5zZWxlY3RlZENsYXNzLCB0cnVlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChlbCk7XG4gICAgICB9LFxuICAgICAgLyoqXHJcbiAgICAgICAqIERlc2VsZWN0cyB0aGUgcHJvdmlkZWQgbXVsdGktZHJhZyBpdGVtXHJcbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBkZXNlbGVjdGVkXHJcbiAgICAgICAqL1xuICAgICAgZGVzZWxlY3Q6IGZ1bmN0aW9uIGRlc2VsZWN0KGVsKSB7XG4gICAgICAgIHZhciBzb3J0YWJsZSA9IGVsLnBhcmVudE5vZGVbZXhwYW5kb10sXG4gICAgICAgICAgaW5kZXggPSBtdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGVsKTtcbiAgICAgICAgaWYgKCFzb3J0YWJsZSB8fCAhc29ydGFibGUub3B0aW9ucy5tdWx0aURyYWcgfHwgIX5pbmRleCkgcmV0dXJuO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgc29ydGFibGUub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBldmVudFByb3BlcnRpZXM6IGZ1bmN0aW9uIGV2ZW50UHJvcGVydGllcygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgdmFyIG9sZEluZGljaWVzID0gW10sXG4gICAgICAgIG5ld0luZGljaWVzID0gW107XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG9sZEluZGljaWVzLnB1c2goe1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgaW5kZXg6IG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtdWx0aURyYWdFbGVtZW50cyB3aWxsIGFscmVhZHkgYmUgc29ydGVkIGlmIGZvbGRpbmdcbiAgICAgICAgdmFyIG5ld0luZGV4O1xuICAgICAgICBpZiAoZm9sZGluZyAmJiBtdWx0aURyYWdFbGVtZW50ICE9PSBkcmFnRWwkMSkge1xuICAgICAgICAgIG5ld0luZGV4ID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9sZGluZykge1xuICAgICAgICAgIG5ld0luZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCwgJzpub3QoLicgKyBfdGhpczMub3B0aW9ucy5zZWxlY3RlZENsYXNzICsgJyknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0luZGljaWVzLnB1c2goe1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgaW5kZXg6IG5ld0luZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpdGVtczogX3RvQ29uc3VtYWJsZUFycmF5KG11bHRpRHJhZ0VsZW1lbnRzKSxcbiAgICAgICAgY2xvbmVzOiBbXS5jb25jYXQobXVsdGlEcmFnQ2xvbmVzKSxcbiAgICAgICAgb2xkSW5kaWNpZXM6IG9sZEluZGljaWVzLFxuICAgICAgICBuZXdJbmRpY2llczogbmV3SW5kaWNpZXNcbiAgICAgIH07XG4gICAgfSxcbiAgICBvcHRpb25MaXN0ZW5lcnM6IHtcbiAgICAgIG11bHRpRHJhZ0tleTogZnVuY3Rpb24gbXVsdGlEcmFnS2V5KGtleSkge1xuICAgICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2N0cmwnKSB7XG4gICAgICAgICAga2V5ID0gJ0NvbnRyb2wnO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAga2V5ID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBpbnNlcnRNdWx0aURyYWdFbGVtZW50cyhjbG9uZXNJbnNlcnRlZCwgcm9vdEVsKSB7XG4gIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQsIGkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcm9vdEVsLmNoaWxkcmVuW211bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCArIChjbG9uZXNJbnNlcnRlZCA/IE51bWJlcihpKSA6IDApXTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICByb290RWwuaW5zZXJ0QmVmb3JlKG11bHRpRHJhZ0VsZW1lbnQsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcclxuICogSW5zZXJ0IG11bHRpLWRyYWcgY2xvbmVzXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gZWxlbWVudHNJbnNlcnRlZCAgV2hldGhlciB0aGUgbXVsdGktZHJhZyBlbGVtZW50cyBhcmUgaW5zZXJ0ZWRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHJvb3RFbFxyXG4gKi9cbmZ1bmN0aW9uIGluc2VydE11bHRpRHJhZ0Nsb25lcyhlbGVtZW50c0luc2VydGVkLCByb290RWwpIHtcbiAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lLCBpKSB7XG4gICAgdmFyIHRhcmdldCA9IHJvb3RFbC5jaGlsZHJlbltjbG9uZS5zb3J0YWJsZUluZGV4ICsgKGVsZW1lbnRzSW5zZXJ0ZWQgPyBOdW1iZXIoaSkgOiAwKV07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZSwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKSB7XG4gIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICBtdWx0aURyYWdFbGVtZW50LnBhcmVudE5vZGUgJiYgbXVsdGlEcmFnRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICB9KTtcbn1cblxuU29ydGFibGUubW91bnQobmV3IEF1dG9TY3JvbGxQbHVnaW4oKSk7XG5Tb3J0YWJsZS5tb3VudChSZW1vdmUsIFJldmVydCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlO1xuZXhwb3J0IHsgTXVsdGlEcmFnUGx1Z2luIGFzIE11bHRpRHJhZywgU29ydGFibGUsIFN3YXBQbHVnaW4gYXMgU3dhcCB9O1xuIiwidmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG52YXIgcHJlZml4ID0gJ0ludmFyaWFudCBmYWlsZWQnO1xuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXgpO1xuICAgIH1cbiAgICB2YXIgcHJvdmlkZWQgPSB0eXBlb2YgbWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJyA/IG1lc3NhZ2UoKSA6IG1lc3NhZ2U7XG4gICAgdmFyIHZhbHVlID0gcHJvdmlkZWQgPyBwcmVmaXggKyBcIjogXCIgKyBwcm92aWRlZCA6IHByZWZpeDtcbiAgICB0aHJvdyBuZXcgRXJyb3IodmFsdWUpO1xufVxuXG5leHBvcnQgeyBpbnZhcmlhbnQgYXMgZGVmYXVsdCB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBzcmMvY3NzLnRzXG52YXIgaWR4ID0gMDtcbnZhciBjc3MgPSAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCIpIHtcbiAgICByZXR1cm4gYG1vY2tlZC1jc3MtJHtpZHgrK31gO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnVXNpbmcgdGhlIFwiY3NzXCIgdGFnIGluIHJ1bnRpbWUgaXMgbm90IHN1cHBvcnRlZC4gTWFrZSBzdXJlIHlvdSBoYXZlIHNldCB1cCB0aGUgQmFiZWwgcGx1Z2luIGNvcnJlY3RseS4nXG4gICk7XG59O1xudmFyIGNzc19kZWZhdWx0ID0gY3NzO1xuXG4vLyBzcmMvY3gudHNcbnZhciBjeCA9IGZ1bmN0aW9uIGN4MigpIHtcbiAgY29uc3QgcHJlc2VudENsYXNzTmFtZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgYXRvbWljQ2xhc3NlcyA9IHt9O1xuICBjb25zdCBub25BdG9taWNDbGFzc2VzID0gW107XG4gIHByZXNlbnRDbGFzc05hbWVzLmZvckVhY2goKGFyZykgPT4ge1xuICAgIGNvbnN0IGluZGl2aWR1YWxDbGFzc05hbWVzID0gYXJnID8gYXJnLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgIGluZGl2aWR1YWxDbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgaWYgKGNsYXNzTmFtZS5zdGFydHNXaXRoKFwiYXRtX1wiKSkge1xuICAgICAgICBjb25zdCBbLCBrZXlIYXNoXSA9IGNsYXNzTmFtZS5zcGxpdChcIl9cIik7XG4gICAgICAgIGF0b21pY0NsYXNzZXNba2V5SGFzaF0gPSBjbGFzc05hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub25BdG9taWNDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGNvbnN0IGtleUhhc2ggaW4gYXRvbWljQ2xhc3Nlcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXRvbWljQ2xhc3Nlcywga2V5SGFzaCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGF0b21pY0NsYXNzZXNba2V5SGFzaF0pO1xuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaCguLi5ub25BdG9taWNDbGFzc2VzKTtcbiAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKTtcbn07XG52YXIgY3hfZGVmYXVsdCA9IGN4O1xuZXhwb3J0IHtcbiAgY3NzX2RlZmF1bHQgYXMgY3NzLFxuICBjeF9kZWZhdWx0IGFzIGN4XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIHNyYy9zdHlsZWQudHNcbmltcG9ydCB2YWxpZEF0dHIgZnJvbSBcIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGN4IH0gZnJvbSBcIkBsaW5hcmlhL2NvcmVcIjtcbnZhciBpc0NhcGl0YWwgPSAoY2gpID0+IGNoLnRvVXBwZXJDYXNlKCkgPT09IGNoO1xudmFyIGZpbHRlcktleSA9IChrZXlzKSA9PiAoa2V5KSA9PiBrZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG52YXIgb21pdCA9IChvYmosIGtleXMpID0+IHtcbiAgY29uc3QgcmVzID0ge307XG4gIE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKGZpbHRlcktleShrZXlzKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzW2tleV0gPSBvYmpba2V5XTtcbiAgfSk7XG4gIHJldHVybiByZXM7XG59O1xuZnVuY3Rpb24gZmlsdGVyUHJvcHMoYXNJcywgcHJvcHMsIG9taXRLZXlzKSB7XG4gIGNvbnN0IGZpbHRlcmVkUHJvcHMgPSBvbWl0KHByb3BzLCBvbWl0S2V5cyk7XG4gIGlmICghYXNJcykge1xuICAgIGNvbnN0IGludGVyb3BWYWxpZEF0dHIgPSB0eXBlb2YgdmFsaWRBdHRyID09PSBcImZ1bmN0aW9uXCIgPyB7IGRlZmF1bHQ6IHZhbGlkQXR0ciB9IDogdmFsaWRBdHRyO1xuICAgIE9iamVjdC5rZXlzKGZpbHRlcmVkUHJvcHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCFpbnRlcm9wVmFsaWRBdHRyLmRlZmF1bHQoa2V5KSkge1xuICAgICAgICBkZWxldGUgZmlsdGVyZWRQcm9wc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBmaWx0ZXJlZFByb3BzO1xufVxudmFyIHdhcm5JZkludmFsaWQgPSAodmFsdWUsIGNvbXBvbmVudE5hbWUpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSxuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogU3RyaW5nKHZhbHVlKTtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgQW4gaW50ZXJwb2xhdGlvbiBldmFsdWF0ZWQgdG8gJyR7c3RyaW5naWZpZWR9JyBpbiB0aGUgY29tcG9uZW50ICcke2NvbXBvbmVudE5hbWV9Jywgd2hpY2ggaXMgcHJvYmFibHkgYSBtaXN0YWtlLiBZb3Ugc2hvdWxkIGV4cGxpY2l0bHkgY2FzdCBvciB0cmFuc2Zvcm0gdGhlIHZhbHVlIHRvIGEgc3RyaW5nLmBcbiAgICApO1xuICB9XG59O1xudmFyIGlkeCA9IDA7XG5mdW5jdGlvbiBzdHlsZWQodGFnKSB7XG4gIGxldCBtb2NrZWRDbGFzcyA9IFwiXCI7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCIpIHtcbiAgICBtb2NrZWRDbGFzcyArPSBgbW9ja2VkLXN0eWxlZC0ke2lkeCsrfWA7XG4gICAgaWYgKHRhZyAmJiB0YWcuX193eXdfbWV0YSAmJiB0YWcuX193eXdfbWV0YS5jbGFzc05hbWUpIHtcbiAgICAgIG1vY2tlZENsYXNzICs9IGAgJHt0YWcuX193eXdfbWV0YS5jbGFzc05hbWV9YDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChvcHRpb25zKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJ0ZXN0XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnVXNpbmcgdGhlIFwic3R5bGVkXCIgdGFnIGluIHJ1bnRpbWUgaXMgbm90IHN1cHBvcnRlZC4gTWFrZSBzdXJlIHlvdSBoYXZlIHNldCB1cCB0aGUgQmFiZWwgcGx1Z2luIGNvcnJlY3RseS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jYWxsc3RhY2svbGluYXJpYSNzZXR1cCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVuZGVyID0gKHByb3BzLCByZWYpID0+IHtcbiAgICAgIGNvbnN0IHsgYXM6IGNvbXBvbmVudCA9IHRhZywgY2xhc3M6IGNsYXNzTmFtZSA9IG1vY2tlZENsYXNzIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IHNob3VsZEtlZXBQcm9wcyA9IG9wdGlvbnMucHJvcHNBc0lzID09PSB2b2lkIDAgPyAhKHR5cGVvZiBjb21wb25lbnQgPT09IFwic3RyaW5nXCIgJiYgY29tcG9uZW50LmluZGV4T2YoXCItXCIpID09PSAtMSAmJiAhaXNDYXBpdGFsKGNvbXBvbmVudFswXSkpIDogb3B0aW9ucy5wcm9wc0FzSXM7XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb3BzID0gZmlsdGVyUHJvcHMoc2hvdWxkS2VlcFByb3BzLCBwcm9wcywgW1xuICAgICAgICBcImFzXCIsXG4gICAgICAgIFwiY2xhc3NcIlxuICAgICAgXSk7XG4gICAgICBmaWx0ZXJlZFByb3BzLnJlZiA9IHJlZjtcbiAgICAgIGZpbHRlcmVkUHJvcHMuY2xhc3NOYW1lID0gb3B0aW9ucy5hdG9taWMgPyBjeChvcHRpb25zLmNsYXNzLCBmaWx0ZXJlZFByb3BzLmNsYXNzTmFtZSB8fCBjbGFzc05hbWUpIDogY3goZmlsdGVyZWRQcm9wcy5jbGFzc05hbWUgfHwgY2xhc3NOYW1lLCBvcHRpb25zLmNsYXNzKTtcbiAgICAgIGNvbnN0IHsgdmFycyB9ID0gb3B0aW9ucztcbiAgICAgIGlmICh2YXJzKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge307XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiB2YXJzKSB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGUgPSB2YXJzW25hbWVdO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhcmlhYmxlWzBdO1xuICAgICAgICAgIGNvbnN0IHVuaXQgPSB2YXJpYWJsZVsxXSB8fCBcIlwiO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHJlc3VsdCA9PT0gXCJmdW5jdGlvblwiID8gcmVzdWx0KHByb3BzKSA6IHJlc3VsdDtcbiAgICAgICAgICB3YXJuSWZJbnZhbGlkKHZhbHVlLCBvcHRpb25zLm5hbWUpO1xuICAgICAgICAgIHN0eWxlW2AtLSR7bmFtZX1gXSA9IGAke3ZhbHVlfSR7dW5pdH1gO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG93blN0eWxlID0gZmlsdGVyZWRQcm9wcy5zdHlsZSB8fCB7fTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG93blN0eWxlKTtcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBzdHlsZVtrZXldID0gb3duU3R5bGVba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmaWx0ZXJlZFByb3BzLnN0eWxlID0gc3R5bGU7XG4gICAgICB9XG4gICAgICBpZiAodGFnLl9fd3l3X21ldGEgJiYgdGFnICE9PSBjb21wb25lbnQpIHtcbiAgICAgICAgZmlsdGVyZWRQcm9wcy5hcyA9IGNvbXBvbmVudDtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnLCBmaWx0ZXJlZFByb3BzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgZmlsdGVyZWRQcm9wcyk7XG4gICAgfTtcbiAgICBjb25zdCBSZXN1bHQgPSBSZWFjdC5mb3J3YXJkUmVmID8gUmVhY3QuZm9yd2FyZFJlZihyZW5kZXIpIDogKFxuICAgICAgLy8gUmVhY3QuZm9yd2FyZFJlZiB3b24ndCBhdmFpbGFibGUgb24gb2xkZXIgUmVhY3QgdmVyc2lvbnMgYW5kIGluIFByZWFjdFxuICAgICAgLy8gRmFsbGJhY2sgdG8gYSBpbm5lclJlZiBwcm9wIGluIHRoYXQgY2FzZVxuICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3QgPSBvbWl0KHByb3BzLCBbXCJpbm5lclJlZlwiXSk7XG4gICAgICAgIHJldHVybiByZW5kZXIocmVzdCwgcHJvcHMuaW5uZXJSZWYpO1xuICAgICAgfVxuICAgICk7XG4gICAgUmVzdWx0LmRpc3BsYXlOYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgIFJlc3VsdC5fX3d5d19tZXRhID0ge1xuICAgICAgY2xhc3NOYW1lOiBvcHRpb25zLmNsYXNzIHx8IG1vY2tlZENsYXNzLFxuICAgICAgZXh0ZW5kczogdGFnXG4gICAgfTtcbiAgICByZXR1cm4gUmVzdWx0O1xuICB9O1xufVxudmFyIHN0eWxlZF9kZWZhdWx0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gbmV3IFByb3h5KHN0eWxlZCwge1xuICBnZXQobywgcHJvcCkge1xuICAgIHJldHVybiBvKHByb3ApO1xuICB9XG59KSA6IHN0eWxlZDtcbmV4cG9ydCB7XG4gIHN0eWxlZF9kZWZhdWx0IGFzIHN0eWxlZFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMYWJlbCB9IGZyb20gJy4vTGFiZWwvTGFiZWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXF1aXJlZExhYmVsIH0gZnJvbSAnLi9MYWJlbC9SZXF1aXJlZExhYmVsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGFiZWxXaXRoQWN0aW9ucyB9IGZyb20gJy4vTGFiZWwvTGFiZWxXaXRoQWN0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlbHAgfSBmcm9tICcuL0hlbHAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTb3J0YWJsZSB9IGZyb20gJy4vU29ydGFibGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXNwb25zaXZlTW9kYWwgfSBmcm9tICcuL1Jlc3BvbnNpdmVNb2RhbCc7XG5cbi8vIFJvd0NvbnRyb2xcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm93Q29udHJvbCB9IGZyb20gJy4vUm93Q29udHJvbC9Sb3dDb250cm9sJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm93Q29udHJvbEVuZCB9IGZyb20gJy4vUm93Q29udHJvbC9Sb3dDb250cm9sRW5kJztcbmV4cG9ydCB7XG5cdGRlZmF1bHQgYXMgUm93Q29udHJvbFN0YXJ0U3R5bGUsXG59IGZyb20gJy4vUm93Q29udHJvbC9Sb3dDb250cm9sU3RhcnRTdHlsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJvd0NvbnRyb2xTdGFydCB9IGZyb20gJy4vUm93Q29udHJvbC9Sb3dDb250cm9sU3RhcnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3dDb250cm9sRW5kU3R5bGUgfSBmcm9tICcuL1Jvd0NvbnRyb2wvUm93Q29udHJvbEVuZFN0eWxlJztcblxuLy8gQ29udHJvbCBzdHlsZXNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xlYXJCYXNlQ29udHJvbFN0eWxlIH0gZnJvbSAnLi9DbGVhckJhc2VDb250cm9sU3R5bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250cm9sV2l0aEVycm9yU3R5bGUgfSBmcm9tICcuL0NvbnRyb2xXaXRoRXJyb3JTdHlsZSc7XG5cbi8vIE1vZGFsXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0aWNreU1vZGFsQWN0aW9ucyB9IGZyb20gJy4vTW9kYWwvU3RpY2t5TW9kYWxBY3Rpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWxGb290ZXJTdHlsZSB9IGZyb20gJy4vTW9kYWwvTW9kYWxGb290ZXJTdHlsZSc7XG5cbi8vIE1pc2NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2lkZUxpbmUgfSBmcm9tICcuL1dpZGVMaW5lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvblRleHQgfSBmcm9tICcuL0ljb25UZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9ybUxhYmVsZWRUb2tlbkZpZWxkIH0gZnJvbSAnLi9Gb3JtTGFiZWxlZFRva2VuRmllbGQnO1xuXG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIHVzZVRyaWdnZXJQb3BvdmVyLFxufSBmcm9tICcuL1BvcG92ZXIvSG9va3MvdXNlVHJpZ2dlclBvcG92ZXInO1xuZXhwb3J0IHtcblx0ZGVmYXVsdCBhcyBQb3BvdmVyU3RhbmRhcmQsXG59IGZyb20gJy4vUG9wb3Zlci9Db21wb25lbnRzL1BvcG92ZXJTdGFuZGFyZCc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=