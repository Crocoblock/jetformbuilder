/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"
/*!*****************************************************************************************!*\
  !*** ../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ },

/***/ "../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"
/*!*****************************************************************************!*\
  !*** ../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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




/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/icon/index.js"
/*!****************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/chevron-left-small.js"
/*!********************************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/chevron-left-small.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronLeftSmall = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m13.1 16-3.4-4 3.4-4 1.1 1-2.6 3 2.6 3-1.1 1z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronLeftSmall);
//# sourceMappingURL=chevron-left-small.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/chevron-right-small.js"
/*!*********************************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/chevron-right-small.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronRightSmall = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronRightSmall);
//# sourceMappingURL=chevron-right-small.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/close-small.js"
/*!*************************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const closeSmall = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeSmall);
//# sourceMappingURL=close-small.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/close.js"
/*!*******************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/close.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const close = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (close);
//# sourceMappingURL=close.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js"
/*!***********************************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const commentAuthorAvatar = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  clipRule: "evenodd"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentAuthorAvatar);
//# sourceMappingURL=comment-author-avatar.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/drag-handle.js"
/*!*************************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/drag-handle.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const dragHandle = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragHandle);
//# sourceMappingURL=drag-handle.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/edit.js"
/*!******************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "../../../../node_modules/@wordpress/icons/build-module/library/pencil.js");
/**
 * Internal dependencies
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_pencil__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=edit.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/pencil.js"
/*!********************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/pencil.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const pencil = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pencil);
//# sourceMappingURL=pencil.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/plugins.js"
/*!*********************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/plugins.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const plugins = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);
//# sourceMappingURL=plugins.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/plus.js"
/*!******************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const plus = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plus);
//# sourceMappingURL=plus.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/seen.js"
/*!******************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/seen.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const seen = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (seen);
//# sourceMappingURL=seen.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/shuffle.js"
/*!*********************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/shuffle.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const shuffle = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/SVG"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.192 6.75L15.47 5.03l1.06-1.06 3.537 3.53-3.537 3.53-1.06-1.06 1.723-1.72h-3.19c-.602 0-.993.202-1.28.498-.309.319-.538.792-.695 1.383-.13.488-.222 1.023-.296 1.508-.034.664-.116 1.413-.303 2.117-.193.721-.513 1.467-1.068 2.04-.575.594-1.359.954-2.357.954H4v-1.5h4.003c.601 0 .993-.202 1.28-.498.308-.319.538-.792.695-1.383.149-.557.216-1.093.288-1.662l.039-.31a9.653 9.653 0 0 1 .272-1.653c.193-.722.513-1.467 1.067-2.04.576-.594 1.36-.954 2.358-.954h3.19zM8.004 6.75c.8 0 1.46.23 1.988.628a6.24 6.24 0 0 0-.684 1.396 1.725 1.725 0 0 0-.024-.026c-.287-.296-.679-.498-1.28-.498H4v-1.5h4.003zM12.699 14.726c-.161.459-.38.94-.684 1.396.527.397 1.188.628 1.988.628h3.19l-1.722 1.72 1.06 1.06L20.067 16l-3.537-3.53-1.06 1.06 1.723 1.72h-3.19c-.602 0-.993-.202-1.28-.498a1.96 1.96 0 0 1-.024-.026z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shuffle);
//# sourceMappingURL=shuffle.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/trash.js"
/*!*******************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/trash.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const trash = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trash);
//# sourceMappingURL=trash.js.map

/***/ },

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/unseen.js"
/*!********************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/unseen.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const unseen = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4.67 10.664s-2.09 1.11-2.917 1.582l.494.87 1.608-.914.002.002c.343.502.86 1.17 1.563 1.84.348.33.742.663 1.185.976L5.57 16.744l.858.515 1.02-1.701a9.1 9.1 0 0 0 4.051 1.18V19h1v-2.263a9.1 9.1 0 0 0 4.05-1.18l1.021 1.7.858-.514-1.034-1.723c.442-.313.837-.646 1.184-.977.703-.669 1.22-1.337 1.563-1.839l.002-.003 1.61.914.493-.87c-1.75-.994-2.918-1.58-2.918-1.58l-.003.005a8.29 8.29 0 0 1-.422.689 10.097 10.097 0 0 1-1.36 1.598c-1.218 1.16-3.042 2.293-5.544 2.293-2.503 0-4.327-1.132-5.546-2.293a10.099 10.099 0 0 1-1.359-1.599 8.267 8.267 0 0 1-.422-.689l-.003-.005Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unseen);
//# sourceMappingURL=unseen.js.map

/***/ },

/***/ "./abstract/ActionsFlow.js"
/*!*********************************!*\
  !*** ./abstract/ActionsFlow.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseAction */ "./abstract/BaseAction.js");

function ActionsFlow(list = null) {
  /**
   * @type {BaseAction[]}
   */
  this.list = list;
}
ActionsFlow.prototype = {
  setList(list) {
    this.list = list;
  },
  resetID() {
    for (const action of this.list) {
      action.resetID();
    }
  },
  /**
   * @param  type {String}
   * @return {boolean}
   */
  hasType(type) {
    return this.list.some(current => current.type === type);
  },
  add(props) {
    if ('string' === typeof props) {
      props = {
        type: props
      };
    }
    this.list.push(new _BaseAction__WEBPACK_IMPORTED_MODULE_0__["default"](props));
  }
};

// backward compatibility
window.JetFBComponents = window.JetFBComponents || {};
window.JetFBComponents.ActionsFlow = ActionsFlow;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsFlow);

/***/ },

/***/ "./abstract/BaseAction.js"
/*!********************************!*\
  !*** ./abstract/BaseAction.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function BaseAction(props = null) {
  this.initData(props);
}
function getRandomID() {
  return Math.floor(Math.random() * 8999) + 1000;
}
BaseAction.prototype.initData = function (props) {
  var _props$id, _props$settings, _props$type, _props$editor_name, _props$conditions, _props$events;
  this.id = (_props$id = props?.id) !== null && _props$id !== void 0 ? _props$id : getRandomID();
  this.settings = (_props$settings = props?.settings) !== null && _props$settings !== void 0 ? _props$settings : {};
  this.type = (_props$type = props?.type) !== null && _props$type !== void 0 ? _props$type : 'send_email';
  this.editor_name = (_props$editor_name = props?.editor_name) !== null && _props$editor_name !== void 0 ? _props$editor_name : '';
  this.conditions = (_props$conditions = props?.conditions) !== null && _props$conditions !== void 0 ? _props$conditions : [];
  this.events = (_props$events = props?.events) !== null && _props$events !== void 0 ? _props$events : [];
  Object.defineProperty(this, 'selfSettings', {
    get: () => {
      var _this$type;
      return this.settings.hasOwnProperty((_this$type = this.type) !== null && _this$type !== void 0 ? _this$type : '') ? this.settings[this.type] : {};
    },
    set: value => {
      var _this$type2;
      if (!this.settings.hasOwnProperty((_this$type2 = this.type) !== null && _this$type2 !== void 0 ? _this$type2 : '')) {
        this.settings[this.type] = {};
      }
      this.settings[this.type] = {
        ...this.settings[this.type],
        ...value
      };
    }
  });
  Object.defineProperty(this, 'index', {
    get: () => {
      var _props$index;
      return (_props$index = props?.index) !== null && _props$index !== void 0 ? _props$index : 0;
    }
  });
};

/**
 * Used in case, when we create BaseAction instance
 * with such structure:
 * {
 *     type: 'action_slug',
 *     settings: {
 *         setting_1: 'value_1',
 *         setting_2: 'value_2'
 *     }
 * }
 *
 * But JetFormBuilder store action's data in different way.
 * So to transform settings into this structure:
 * {
 *     type: 'action_slug',
 *     settings: {
 *         action_slug: {
 *              setting_1: 'value_1',
 *              setting_2: 'value_2'
 *         }
 *     }
 * }
 * we use this method.
 */
BaseAction.prototype.refactorSettings = function () {
  const settings = this.settings;
  this.settings = {};
  this.selfSettings = settings;
};
BaseAction.prototype.resetID = function () {
  this.id = getRandomID();
};

// backward compatibility
window.JetFBComponents = window.JetFBComponents || {};
window.JetFBComponents.BaseAction = BaseAction;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseAction);

/***/ },

/***/ "./abstract/BaseComputedField.js"
/*!***************************************!*\
  !*** ./abstract/BaseComputedField.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function BaseComputedField() {
  /**
   * @type {BaseAction}
   */
  this.action = null;
  this.hasInList = false;
}

/**
 * @param action {BaseAction}
 * @param fields {Object[]}
 */
// eslint-disable-next-line no-unused-vars
BaseComputedField.prototype.isSupported = function (action, fields) {
  return this.getSupportedActions().includes(action.type);
};
BaseComputedField.prototype.isSupportedGlobal = function () {
  return false;
};

/**
 * @return {string[]}
 */
BaseComputedField.prototype.getSupportedActions = function () {
  return [];
};

/**
 * @param action {BaseAction}
 */
BaseComputedField.prototype.setAction = function (action) {
  this.action = action;
};

/**
 * @return {string}
 */
BaseComputedField.prototype.getName = function () {
  return '';
};

/**
 * @return {string}
 */
BaseComputedField.prototype.getLabel = function () {
  return '';
};

/**
 * @return {string|Function}
 */
BaseComputedField.prototype.getHelp = function () {
  return '';
};

// backward compatibility
window.JetFBComponents = window.JetFBComponents || {};
window.JetFBComponents.BaseComputedField = BaseComputedField;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseComputedField);

/***/ },

/***/ "./components/ActionFetchButton.js"
/*!*****************************************!*\
  !*** ./components/ActionFetchButton.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_withCurrentAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/withCurrentAction */ "./hooks/withCurrentAction.js");
/* harmony import */ var _hooks_withSelectActionLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/withSelectActionLoading */ "./hooks/withSelectActionLoading.js");
/* harmony import */ var _FetchApiButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FetchApiButton */ "./components/FetchApiButton.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
var _window$JetFBComponen;






function ActionFetchButton({
  currentAction,
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FetchApiButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: currentAction.id,
    ...props
  });
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionFetchButton = ActionFetchButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(_hooks_withCurrentAction__WEBPACK_IMPORTED_MODULE_1__["default"]), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(_hooks_withSelectActionLoading__WEBPACK_IMPORTED_MODULE_2__["default"]))(ActionFetchButton));

/***/ },

/***/ "./components/ActionItemBody.jsx"
/*!***************************************!*\
  !*** ./components/ActionItemBody.jsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/drag-handle.js");
/* harmony import */ var _ActionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionTitle */ "./components/ActionTitle.jsx");
/* harmony import */ var _EditActionSettingsButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditActionSettingsButton */ "./components/EditActionSettingsButton.js");
/* harmony import */ var _EditActionConditionsButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditActionConditionsButton */ "./components/EditActionConditionsButton.jsx");
/* harmony import */ var _ToggleActionExecutionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToggleActionExecutionButton */ "./components/ToggleActionExecutionButton.jsx");
/* harmony import */ var _DeleteActionButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteActionButton */ "./components/DeleteActionButton.jsx");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
var _window$JetFBComponen;












const _exp = /*#__PURE__*/() => _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"];
const CursoredIcon = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_9__.styled)(_exp())({
  name: "CursoredIcon",
  class: "cue09js",
  propsAsIs: true
});
const _exp2 = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex;
const FlexActionButtons = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_9__.styled)(_exp2())({
  name: "FlexActionButtons",
  class: "f13vj9vm",
  propsAsIs: true
});
const _exp3 = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody;
const ActionCardBody = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_9__.styled)(_exp3())({
  name: "ActionCardBody",
  class: "a4jlrqo",
  propsAsIs: true
});
const _exp6 = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex;
const ActionTitleWrap = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_9__.styled)(_exp6())({
  name: "ActionTitleWrap",
  class: "alc8tnc",
  propsAsIs: true
});
function ActionItemBody() {
  const {
    action
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const [isTitleEditing, setIsTitleEditing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_11__.useState)(false);
  const actionType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_10__.useSelect)(select => select('jet-forms/actions').getAction(action.type), [action.type]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionCardBody, {
    "data-title-editing": isTitleEditing ? 'true' : undefined
  }, undefined === actionType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    align: "center",
    justify: "space-between"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "Action ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "\"", action.type, "\""), " is not supported"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DeleteActionButton__WEBPACK_IMPORTED_MODULE_8__["default"], null)), undefined !== actionType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    align: "center",
    justify: "flex-start",
    gap: 1
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CursoredIcon, {
    className: 'jfb-action-handle',
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionTitleWrap, {
    align: "center",
    justify: "flex-start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ActionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onEditingChange: setIsTitleEditing
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FlexActionButtons, {
    justify: "flex-end"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditActionSettingsButton__WEBPACK_IMPORTED_MODULE_5__["default"], null), !actionType.disableConditions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditActionConditionsButton__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ToggleActionExecutionButton__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DeleteActionButton__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionItemBody = ActionItemBody;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionItemBody);
__webpack_require__(/*! ./ActionItemBody.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ActionItemBody.jsx */ "./components/ActionItemBody.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemBody.jsx");

/***/ },

/***/ "./components/ActionItemFooter.jsx"
/*!*****************************************!*\
  !*** ./components/ActionItemFooter.jsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _EventsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventsList */ "./components/EventsList.jsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
var _window$JetFBComponen;





/**
 * @param  children.children
 * @param  children
 * @param  props
 * @return {boolean|JSX.Element}
 */
function ActionItemFooter({
  children,
  ...props
} = {}) {
  const {
    action
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const excludedEvents = window.JetFormEditorData.actionConditionExcludeEvents;
  if (excludedEvents[action.type]) {
    if (action.events?.length) {
      action.events = action.events.filter(item => !excludedEvents[action.type].includes(item));
    }
  }
  return Boolean(action.events?.length) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {
    style: {
      flexWrap: 'wrap',
      rowGap: '0.5em'
    },
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EventsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    events: action.events
  }), children);
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionItemFooter = ActionItemFooter;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionItemFooter);

/***/ },

/***/ "./components/ActionItemHeader.jsx"
/*!*****************************************!*\
  !*** ./components/ActionItemHeader.jsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
var _window$JetFBComponen;





/**
 * @param children
 * @param props
 * @returns {JSX.Element|null}
 */
function ActionItemHeader({
  children,
  ...props
} = {}) {
  const {
    action
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const header = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.applyFilters)(`jet.fb.section.actions.header.${action.type}`, null, action);
  if (!header) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
    ...props
  }, header, children);
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionItemHeader = ActionItemHeader;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionItemHeader);

/***/ },

/***/ "./components/ActionItemWrapper.jsx"
/*!******************************************!*\
  !*** ./components/ActionItemWrapper.jsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @linaria/core */ "../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _hooks_useActionErrors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useActionErrors */ "./hooks/useActionErrors.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
var _window$JetFBComponen;

/* eslint-disable import/no-extraneous-dependencies */








const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card;
const MarginLessCard = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_4__.styled)(_exp())({
  name: "MarginLessCard",
  class: "myen4j",
  propsAsIs: true
});
const errorStyle = "e9ooo02";
const currentStyle = "c131zb0w";
const disabledStyle = "da595pz";
function ActionItemWrapper({
  className = '',
  ...props
} = {}) {
  var _action$is_execute;
  const {
    action
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    currentAction,
    isFixed
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    currentAction: select('jet-forms/actions').getCurrentAction(),
    isFixed: select('jet-forms/actions').isFixed(action.type)
  }), [action.type]);
  const errors = (0,_hooks_useActionErrors__WEBPACK_IMPORTED_MODULE_6__["default"])(action);
  const isExecute = (_action$is_execute = action.is_execute) !== null && _action$is_execute !== void 0 ? _action$is_execute : true;
  const errorText = Boolean(errors.length) ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('This action isn\'t set up properly. Please check the settings of the action', 'jet-form-builder') : '';
  const WrapperComponent = errorText ? _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip : _wordpress_element__WEBPACK_IMPORTED_MODULE_8__.Fragment;
  const wrapperProps = errorText ? {
    text: errorText,
    delay: 200,
    placement: 'top'
  } : {};
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrapperComponent, {
    ...wrapperProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MarginLessCard, {
    elevation: 2,
    size: 'extraSmall',
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_5__.cx)('jet-form-action', className, !isFixed && 'draggable', !isExecute && disabledStyle, currentAction?.id === action.id && currentStyle, errors.length && errorStyle),
    ...props
  }));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionItemWrapper = ActionItemWrapper;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionItemWrapper);
__webpack_require__(/*! ./ActionItemWrapper.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ActionItemWrapper.jsx */ "./components/ActionItemWrapper.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemWrapper.jsx");

/***/ },

/***/ "./components/ActionMessages.js"
/*!**************************************!*\
  !*** ./components/ActionMessages.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionMessagesSlotFills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionMessagesSlotFills */ "./components/ActionMessagesSlotFills.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jet-form-builder-actions */ "./index.js");
var _window$JetFBComponen;

/* eslint-disable import/no-extraneous-dependencies */





function ActionMessageRow(props) {
  const {
    type,
    label,
    value,
    onChange
  } = props;
  const {
    Slot: RowSlot
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => _ActionMessagesSlotFills__WEBPACK_IMPORTED_MODULE_1__["default"][type], [type]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__.TableListRow, {
    tag: "jfb-message-item",
    label: label
  }, ({
    htmlId
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RowSlot, {
    fillProps: {
      ...props,
      id: htmlId
    }
  }, fills => Boolean(fills?.length) ? fills : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.StyledTextControl, {
    id: htmlId,
    value: value,
    onChange: onChange
  })));
}
function ActionMessages(props) {
  const {
    settings,
    source,
    getMapField,
    setMapField,
    messages,
    onChangeSetting
  } = props;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const oldMessages = settings.messages || {};
    const newMessages = {};
    Object.entries(source.__messages).forEach(([type, data]) => {
      if (!oldMessages[type]) {
        newMessages[type] = data.value;
      }
    });
    if (newMessages) {
      onChangeSetting({
        ...oldMessages,
        ...newMessages
      }, 'messages');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setMessage = (value, nameField) => {
    const sourceName = 'messages';
    setMapField({
      value,
      nameField,
      source: sourceName
    });
  };
  const getMessage = name => {
    const sourceName = 'messages';
    return getMapField({
      name,
      source: sourceName
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    createId: false,
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.TableListStyle.Wrap
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.Label, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.TableListStyle.Label
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Messages Settings`, 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.Help, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.TableListStyle.WhiteSpaceNormal
  }, "Change error message according to USER LOGIN form field; it can be username or email."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__.TableListContainer, null, settings.messages && Object.entries(settings.messages).map(([type]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionMessageRow, {
    key: 'message_' + type,
    type: type,
    label: messages(type).label,
    value: getMessage(type),
    onChange: newValue => setMessage(newValue, type)
  }))));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionMessages = ActionMessages;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionMessages);

/***/ },

/***/ "./components/ActionMessagesSlotFills.js"
/*!***********************************************!*\
  !*** ./components/ActionMessagesSlotFills.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
var _window$JetFBComponen;

const ActionMessagesSlotFills = {};
for (const {
  self
} of window.jetFormActionTypes) {
  if (!window[self]?.hasOwnProperty?.('__messages') || !Object.keys(window[self].__messages)?.length) {
    continue;
  }
  for (const messageKey of Object.keys(window[self].__messages)) {
    // eslint-disable-next-line max-depth
    if (ActionMessagesSlotFills.hasOwnProperty(messageKey)) {
      continue;
    }
    ActionMessagesSlotFills[messageKey] = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.createSlotFill)(`JFBActionMessageRow-${messageKey}`);
  }
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionMessagesSlotFills = ActionMessagesSlotFills;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionMessagesSlotFills);

/***/ },

/***/ "./components/ActionModalBackButton.jsx"
/*!**********************************************!*\
  !*** ./components/ActionModalBackButton.jsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/chevron-left-small.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/chevron-right-small.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useActionsEdit */ "./hooks/useActionsEdit.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBComponen;









const isRTL = document.body.classList.contains('rtl');
function ActionModalBackButton() {
  const {
    deleteAction
  } = (0,_hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    index
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    ref,
    setShowPopover,
    showPopover,
    popoverProps
  } = (0,jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.useTriggerPopover)();
  const {
    showActionsInserterModal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.STORE_NAME);
  const canBack = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => 'inserter' === select(_store__WEBPACK_IMPORTED_MODULE_9__.STORE_NAME).getOpenScenario(), []);
  return canBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    ref: ref,
    variant: "tertiary",
    icon: isRTL ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    onClick: () => setShowPopover(prev => !prev)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Back', 'jet-form-builder')), showPopover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.PopoverStandard, {
    placement: "bottom",
    noArrow: false,
    ...popoverProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Are you sure? All your changes will be lost.', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isLink: true,
    isDestructive: true,
    onClick: () => {
      deleteAction(index);
      showActionsInserterModal(true);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Yes', 'jet-form-builder')), ' / ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isLink: true,
    onClick: () => setShowPopover(false)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No', 'jet-form-builder'))));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionModalBackButton = ActionModalBackButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionModalBackButton);

/***/ },

/***/ "./components/ActionModalCloseButton.jsx"
/*!***********************************************!*\
  !*** ./components/ActionModalCloseButton.jsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/close.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useUpdateCurrentAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useUpdateCurrentAction */ "./hooks/useUpdateCurrentAction.js");
var _window$JetFBComponen;





function ActionModalCloseButton() {
  const {
    clearCurrent
  } = (0,_hooks_useUpdateCurrentAction__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    onClick: () => clearCurrent(),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Close', 'jet-form-builder')
  }));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionModalCloseButton = ActionModalCloseButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionModalCloseButton);

/***/ },

/***/ "./components/ActionModalHeaderSlotFill.js"
/*!*************************************************!*\
  !*** ./components/ActionModalHeaderSlotFill.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
var _window$JetFBComponen;

const ActionModalHeaderSlotFill = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.createSlotFill)('JFBActionModalHeader');

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionModalHeaderSlotFill = ActionModalHeaderSlotFill;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionModalHeaderSlotFill);

/***/ },

/***/ "./components/ActionTitle.jsx"
/*!************************************!*\
  !*** ./components/ActionTitle.jsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useActionsEdit */ "./hooks/useActionsEdit.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _utils_getActionDisplayName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getActionDisplayName */ "./utils/getActionDisplayName.js");
var _window$JetFBComponen;










const ActionTitleWrap = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_5__.styled)('div')({
  name: "ActionTitleWrap",
  class: "a14pz2hj",
  propsAsIs: false
});
const ActionButton = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_5__.styled)('button')({
  name: "ActionButton",
  class: "a1yeh6gv",
  propsAsIs: false
});
const ActionLabel = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_5__.styled)('span')({
  name: "ActionLabel",
  class: "an7tpyw",
  propsAsIs: false
});
const ActionNameInput = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_5__.styled)('input')({
  name: "ActionNameInput",
  class: "a1wl0ukk",
  propsAsIs: false
});
function ActionNameEditor({
  fallbackLabel,
  nextName,
  setNextName,
  commitName,
  setIsEditing,
  previousNameRef,
  isEscapePressedRef,
  inputRef
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionNameInput, {
    ref: inputRef,
    value: nextName,
    onChange: event => setNextName(event.target.value),
    onBlur: () => {
      if (isEscapePressedRef.current) {
        isEscapePressedRef.current = false;
        return;
      }
      commitName();
    },
    onKeyDown: event => {
      if ('Enter' === event.key) {
        event.preventDefault();
        commitName();
      }
      if ('Escape' === event.key) {
        event.preventDefault();
        isEscapePressedRef.current = true;
        setNextName(previousNameRef.current);
        setIsEditing(false);
      }
    },
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Action display name', 'jet-form-builder'),
    placeholder: fallbackLabel,
    type: "text",
    maxLength: 255,
    spellCheck: false
  });
}
function ActionNameButton({
  displayName,
  startEditing
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionButton, {
    type: "button",
    onClick: startEditing,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(/* translators: %s - current action display name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Rename action: %s', 'jet-form-builder'), displayName)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionLabel, {
    title: displayName
  }, displayName));
}
function UnsupportedActionButton({
  deleteAction,
  index
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
    isDestructive: true,
    variant: "secondary",
    onClick: () => deleteAction(index)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Action is not registered. Delete', 'jet-form-builder'));
}
function useActionRename(action, actionFromList, updateActionObj) {
  var _actionFromList$label;
  const [isEditing, setIsEditing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [nextName, setNextName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)('');
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  const previousNameRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useRef)('');
  const isEscapePressedRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useRef)(false);
  const fallbackLabel = (_actionFromList$label = actionFromList?.label) !== null && _actionFromList$label !== void 0 ? _actionFromList$label : '';
  const displayName = (0,_utils_getActionDisplayName__WEBPACK_IMPORTED_MODULE_9__["default"])(action, fallbackLabel);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
      return;
    }
    setNextName(displayName);
  }, [displayName, isEditing]);
  return {
    displayName,
    fallbackLabel,
    inputRef,
    isEditing,
    isEscapePressedRef,
    nextName,
    previousNameRef,
    setIsEditing,
    setNextName,
    startEditing: () => {
      previousNameRef.current = displayName;
      setNextName(displayName);
      setIsEditing(true);
    },
    commitName: () => {
      const trimmedName = nextName.trim();
      const normalizedName = !trimmedName || trimmedName === fallbackLabel ? '' : trimmedName;
      if (action.editor_name !== normalizedName) {
        updateActionObj(action.id, {
          editor_name: normalizedName
        });
      }
      setIsEditing(false);
    }
  };
}
function ActionTitle({
  onEditingChange = () => {}
}) {
  const {
    deleteAction,
    updateActionObj
  } = (0,_hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    action,
    index
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const actionFromList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_8__.STORE_NAME).getAction(action.type), [action.type]);
  const renameProps = useActionRename(action, actionFromList, updateActionObj);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    onEditingChange(renameProps.isEditing);
  }, [renameProps.isEditing]);
  if (!actionFromList) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(UnsupportedActionButton, {
      deleteAction: deleteAction,
      index: index
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionTitleWrap, null, renameProps.isEditing && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionNameEditor, {
    fallbackLabel: renameProps.fallbackLabel,
    nextName: renameProps.nextName,
    setNextName: renameProps.setNextName,
    commitName: renameProps.commitName,
    setIsEditing: renameProps.setIsEditing,
    previousNameRef: renameProps.previousNameRef,
    isEscapePressedRef: renameProps.isEscapePressedRef,
    inputRef: renameProps.inputRef
  }), !renameProps.isEditing && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionNameButton, {
    displayName: renameProps.displayName,
    startEditing: renameProps.startEditing
  }));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionTitle = ActionTitle;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionTitle);
__webpack_require__(/*! ./ActionTitle.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ActionTitle.jsx */ "./components/ActionTitle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionTitle.jsx");

/***/ },

/***/ "./components/ActionsAfterNewButtonSlotFill.js"
/*!*****************************************************!*\
  !*** ./components/ActionsAfterNewButtonSlotFill.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
var _window$JetFBComponen;

const ActionsAfterNewButtonSlotFill = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.createSlotFill)('JFBActionsAfterNewButton');

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionsAfterNewButtonSlotFill = ActionsAfterNewButtonSlotFill;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsAfterNewButtonSlotFill);

/***/ },

/***/ "./components/AddAction/ActionGridItem.jsx"
/*!*************************************************!*\
  !*** ./components/AddAction/ActionGridItem.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/plugins.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProActionOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProActionOverlay */ "./components/ProActionOverlay.jsx");

/* eslint-disable import/no-extraneous-dependencies */





const ActionTitle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('h5')({
  name: "ActionTitle",
  class: "ajopllc",
  propsAsIs: false
});
const _exp = /*#__PURE__*/() => _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"];
const ColoredIcon = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_exp())({
  name: "ColoredIcon",
  class: "c1j3i9l6",
  propsAsIs: true
});
const Overlay = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('div')({
  name: "Overlay",
  class: "odma714",
  propsAsIs: false
});
const _exp2 = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex;
const FlexWrapper = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_exp2())({
  name: "FlexWrapper",
  class: "fqw6jzj",
  propsAsIs: true
});
function ActionGridItem({
  action,
  onClick
}) {
  var _action$disabledOverl, _action$icon;
  const ActionOverlay = (_action$disabledOverl = action?.disabledOverlay) !== null && _action$disabledOverl !== void 0 ? _action$disabledOverl : _ProActionOverlay__WEBPACK_IMPORTED_MODULE_6__["default"];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FlexWrapper, {
    onClick: onClick,
    direction: "column",
    align: "center",
    justify: "flex-start",
    className: action.disabled ? 'jfb-action-grid-item is-disabled' : 'jfb-action-grid-item'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColoredIcon, {
    icon: (_action$icon = action?.icon) !== null && _action$icon !== void 0 ? _action$icon : _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    size: 32
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionTitle, null, action.label), action?.docHref && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: action?.docHref
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Documentation', 'jet-form-builder')), action.disabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Overlay, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionOverlay, {
    action: action
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionGridItem);
__webpack_require__(/*! ./ActionGridItem.wyw-in-js.css!=!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ActionGridItem.jsx */ "./components/AddAction/ActionGridItem.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/ActionGridItem.jsx");

/***/ },

/***/ "./components/AddAction/AddActionButton.jsx"
/*!**************************************************!*\
  !*** ./components/AddAction/AddActionButton.jsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _AddActionModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddActionModal */ "./components/AddAction/AddActionModal.jsx");
var _window$JetFBComponen;

/* eslint-disable import/no-extraneous-dependencies */






function AddActionButton() {
  const {
    showActionsInserterModal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME);
  const showModal = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).isShowActionsInserterModal(), []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isPrimary: true,
    onClick: () => showActionsInserterModal(true),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('New Action', 'jet-form-builder')), showModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddActionModal__WEBPACK_IMPORTED_MODULE_6__["default"], null));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.AddActionButton = AddActionButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddActionButton);

/***/ },

/***/ "./components/AddAction/AddActionModal.jsx"
/*!*************************************************!*\
  !*** ./components/AddAction/AddActionModal.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _ActionGridItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionGridItem */ "./components/AddAction/ActionGridItem.jsx");
/* harmony import */ var _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../abstract/BaseAction */ "./abstract/BaseAction.js");
/* harmony import */ var _hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useActionsEdit */ "./hooks/useActionsEdit.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _useCategoriesAndActionTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useCategoriesAndActionTypes */ "./components/AddAction/useCategoriesAndActionTypes.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hooks_usePreventEditorUndoInModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/usePreventEditorUndoInModal */ "./hooks/usePreventEditorUndoInModal.js");

/* eslint-disable import/no-extraneous-dependencies */













const StyledPlaceholder = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_9__.styled)('div')({
  name: "StyledPlaceholder",
  class: "sfffqhk",
  propsAsIs: false
});

// eslint-disable-next-line max-lines-per-function
function AddActionModal() {
  (0,_hooks_usePreventEditorUndoInModal__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const searchInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_11__.useRef)(null);
  const {
    actions,
    setActions
  } = (0,_hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    openActionSettings,
    showActionsInserterModal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.STORE_NAME);
  const {
    search,
    setSearch,
    category,
    categories,
    actionTypes,
    setCategory
  } = (0,_useCategoriesAndActionTypes__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const onAddAction = (event, action) => {
    const nodeClasses = Array.from(event.target?.classList);
    if (nodeClasses?.[0]?.includes?.('components-external-link')) {
      return;
    }
    const newAction = {
      ...new _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_5__["default"]({
        type: action.type
      })
    };
    setActions([...actions, newAction]);
    showActionsInserterModal(false);
    openActionSettings({
      item: newAction,
      index: actions.length,
      scenario: 'inserter'
    });
  };

  // ADDED: focus search input right after modal is rendered.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    const frame = window.requestAnimationFrame(() => {
      searchInputRef.current?.focus?.();
    });
    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    return () => {
      setSearch('');
      setCategory('');
    };
  }, [setCategory, setSearch]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    size: "large",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add new action', 'jet-form-builder'),
    onRequestClose: () => showActionsInserterModal(false),
    headerActions: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_12__.StyledFlexControl, {
      expanded: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      ref: searchInputRef,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search action by name…', 'jet-form-builder'),
      value: search,
      onChange: setSearch
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      value: category,
      onChange: setCategory,
      options: categories
    }))
  }, !Boolean(actionTypes?.length) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledPlaceholder, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No actions were found by your search parameters.', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
    onClick: () => {
      setSearch('');
      setCategory('');
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear search & category fields', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalGrid, {
    columns: 4,
    className: "jfb-actions-grid"
  }, actionTypes.map(action => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ActionGridItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: action.type,
    action: action,
    onClick: event => {
      if (action.disabled) {
        return;
      }
      onAddAction(event, action);
    }
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddActionModal);
__webpack_require__(/*! ./AddActionModal.wyw-in-js.css!=!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./AddActionModal.jsx */ "./components/AddAction/AddActionModal.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/AddActionModal.jsx");

/***/ },

/***/ "./components/AddAction/useCategoriesAndActionTypes.js"
/*!*************************************************************!*\
  !*** ./components/AddAction/useCategoriesAndActionTypes.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





// eslint-disable-next-line max-lines-per-function
const useCategoriesAndActionTypes = () => {
  const [category, setCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    actionTypes,
    categories
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const selector = select(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME);
    const actionTypesList = selector.getSortedActions().filter(mappedAction =>
    // category condition
    (!category || !mappedAction?.category && 'misc' === category || mappedAction?.category === category) &&
    // search condition
    mappedAction?.label?.toLowerCase?.().includes?.(search.toLowerCase()));
    const categoriesList = [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('All', 'jet-form-builder')
    }, ...selector.getCategories().map(mappedCategory => ({
      value: mappedCategory?.type,
      label: mappedCategory?.label
    })), {
      value: 'misc',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Misc', 'jet-form-builder')
    }];
    return {
      actionTypes: actionTypesList,
      categories: categoriesList
    };
  }, [search, category]);
  return {
    search,
    setSearch,
    category,
    categories,
    actionTypes,
    setCategory
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCategoriesAndActionTypes);

/***/ },

/***/ "./components/AllProActionsLink.js"
/*!*****************************************!*\
  !*** ./components/AllProActionsLink.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/icon/index.js");
var _window$JetFBComponen;

/* eslint-disable import/no-extraneous-dependencies */




const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex;
const StyledFlex = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)(_exp())({
  name: "StyledFlex",
  class: "sauuswy",
  propsAsIs: true
});
function AllProActionsLink() {
  return !JetFormEditorData.isActivePro && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledFlex, {
    gap: 3,
    justify: "center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: JetFormEditorData.utmLinks.allProActions,
    target: "_blank",
    rel: "external noreferrer noopener",
    style: {
      textDecoration: 'none'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('All PRO Actions', 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: 20,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      "aria-hidden": "true",
      focusable: "false",
      fill: "currentColor"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"
    }))
  }))));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.AllProActionsLink = AllProActionsLink;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllProActionsLink);
__webpack_require__(/*! ./AllProActionsLink.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./AllProActionsLink.js */ "./components/AllProActionsLink.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AllProActionsLink.js");

/***/ },

/***/ "./components/DeleteActionButton.jsx"
/*!*******************************************!*\
  !*** ./components/DeleteActionButton.jsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useActionsEdit */ "./hooks/useActionsEdit.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/trash.js");
var _window$JetFBComponen;








// eslint-disable-next-line max-lines-per-function
function DeleteActionButton() {
  const {
    index
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    deleteAction
  } = (0,_hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    showPopover,
    setShowPopover,
    ref,
    popoverProps
  } = (0,jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.useTriggerPopover)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    ref: ref,
    isDestructive: true,
    size: "small",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delete action', 'jet-form-builder'),
    tooltipPosition: "top",
    onClick: () => setShowPopover(prev => !prev)
  }), showPopover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.PopoverStandard, {
    placement: "top-end",
    noArrow: false,
    ...popoverProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Delete this action?', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isLink: true,
    isDestructive: true,
    onClick: () => deleteAction(index)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Yes', 'jet-form-builder')), ' / ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isLink: true,
    onClick: () => setShowPopover(false)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No', 'jet-form-builder'))));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.DeleteActionButton = DeleteActionButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteActionButton);

/***/ },

/***/ "./components/EditActionConditionsButton.jsx"
/*!***************************************************!*\
  !*** ./components/EditActionConditionsButton.jsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/shuffle.js");
var _window$JetFBComponen;

/* eslint-disable import/no-extraneous-dependencies */






const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button;
const StyledButton = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_5__.styled)(_exp())({
  name: "StyledButton",
  class: "s1ani5eo",
  propsAsIs: true
});
function EditActionConditionsButton() {
  var _action$conditions$le;
  const {
    action,
    index
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    setCurrentAction,
    setMeta
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('jet-forms/actions');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledButton, {
    size: "small",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    "data-conditions-count": (_action$conditions$le = action?.conditions?.length) !== null && _action$conditions$le !== void 0 ? _action$conditions$le : 0,
    onClick: () => {
      setCurrentAction({
        ...action,
        index
      });
      setMeta({
        index,
        modalType: 'conditions'
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit Conditions & Events', 'jet-form-builder'),
    tooltipPosition: "top"
  });
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.EditActionConditionsButton = EditActionConditionsButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditActionConditionsButton);
__webpack_require__(/*! ./EditActionConditionsButton.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./EditActionConditionsButton.jsx */ "./components/EditActionConditionsButton.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EditActionConditionsButton.jsx");

/***/ },

/***/ "./components/EditActionSettingsButton.js"
/*!************************************************!*\
  !*** ./components/EditActionSettingsButton.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useActionCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useActionCallback */ "./hooks/useActionCallback.js");
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/edit.js");
var _window$JetFBComponen;

/* eslint-disable import/no-extraneous-dependencies */






function EditActionSettingsButton() {
  const {
    action,
    index
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    setCurrentAction,
    setMeta
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('jet-forms/actions');
  const ActionCallback = (0,_hooks_useActionCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(action.type);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    disabled: !ActionCallback,
    size: "small",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Edit Action', 'jet-form-builder'),
    tooltipPosition: "top",
    onClick: () => {
      setCurrentAction({
        ...action,
        index
      });
      setMeta({
        index,
        modalType: 'settings'
      });
    }
  });
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.EditActionSettingsButton = EditActionSettingsButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditActionSettingsButton);

/***/ },

/***/ "./components/EventsList.jsx"
/*!***********************************!*\
  !*** ./components/EventsList.jsx ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useActionsEdit */ "./hooks/useActionsEdit.js");
/* harmony import */ var _context_ActionListItemContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ActionListItemContext */ "./context/ActionListItemContext.js");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
var _window$JetFBComponen;







const EventButton = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_3__.styled)('button')({
  name: "EventButton",
  class: "ekbdm2s",
  propsAsIs: false
});
function EventItem(props) {
  var _event$title, _event$value;
  const {
    slug,
    index: eventIndex
  } = props;
  const {
    action
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useContext)(_context_ActionListItemContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const event = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('jet-forms/events').getType(slug), [slug]);
  const {
    updateActionObj
  } = (0,_hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const onDelete = () => {
    action.events.splice(eventIndex, 1);
    updateActionObj(action.id, {
      ...action
    });
  };
  const title = [(_event$title = event?.title) !== null && _event$title !== void 0 ? _event$title : '', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('(Click to delete)', 'jet-form-builder')].join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventButton, {
    type: 'button',
    title: title,
    onClick: onDelete
  }, (_event$value = event?.value) !== null && _event$value !== void 0 ? _event$value : slug);
}
function EventsList(props) {
  const {
    events = []
  } = props;
  return events.map((event, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventItem, {
    key: event,
    slug: event,
    index: index
  }));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.EventsList = EventsList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsList);
__webpack_require__(/*! ./EventsList.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./EventsList.jsx */ "./components/EventsList.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EventsList.jsx");

/***/ },

/***/ "./components/FetchAjaxButton.js"
/*!***************************************!*\
  !*** ./components/FetchAjaxButton.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RequestButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestButton */ "./components/RequestButton.js");
/* harmony import */ var _hooks_withSelectActionLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/withSelectActionLoading */ "./hooks/withSelectActionLoading.js");
/* harmony import */ var _hooks_withDispatchActionLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/withDispatchActionLoading */ "./hooks/withDispatchActionLoading.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
var _window$JetFBComponen;






function FetchAjaxButton({
  initialLabel = 'Valid',
  label = 'InValid',
  ajaxArgs = {},
  loadingState,
  setLoading,
  id,
  setResultSuccess,
  setResultFail
}) {
  const getLabel = () => {
    if (-1 === loadingState.id && initialLabel) {
      return initialLabel;
    }
    return label;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RequestButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: loadingState.loading,
    ajaxArgs: ajaxArgs,
    label: getLabel(),
    onLoading: () => {
      setLoading(id);
    },
    onSuccessRequest: response => {
      setResultSuccess(id, response);
    },
    onFailRequest: () => setResultFail(id),
    className: loadingState.buttonClassName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons"
  }));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.FetchAjaxButton = FetchAjaxButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(_hooks_withSelectActionLoading__WEBPACK_IMPORTED_MODULE_2__["default"]), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withDispatch)(_hooks_withDispatchActionLoading__WEBPACK_IMPORTED_MODULE_3__["default"]))(FetchAjaxButton));

/***/ },

/***/ "./components/FetchApiButton.js"
/*!**************************************!*\
  !*** ./components/FetchApiButton.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RequestButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestButton */ "./components/RequestButton.js");
/* harmony import */ var _hooks_withDispatchActionLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/withDispatchActionLoading */ "./hooks/withDispatchActionLoading.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
var _window$JetFBComponen;






function FetchApiButton({
  initialLabel = 'Valid',
  label = 'InValid',
  apiArgs = {},
  loadingState,
  setLoading,
  id,
  setResultSuccess,
  setResultFail,
  onLoading = () => {},
  onSuccess = () => {},
  onFail = () => {},
  isHidden = false
}) {
  const getLabel = () => {
    if ((-1 === loadingState.id || loadingState.loading) && initialLabel) {
      return initialLabel;
    }
    return label;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RequestButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: loadingState.loading,
    hasFetched: loadingState.id,
    label: getLabel(),
    className: loadingState.buttonClassName,
    isHidden: isHidden,
    customRequest: () => {
      setLoading(id);
      onLoading();
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()(apiArgs).then(response => {
        setResultSuccess(id, response);
        onSuccess(response);
      }).catch(error => {
        setResultFail(id);
        onFail(error);
      });
    },
    isDestructive: loadingState.buttonClassName.includes('is-invalid')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons"
  }));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.FetchApiButton = FetchApiButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withDispatch)(_hooks_withDispatchActionLoading__WEBPACK_IMPORTED_MODULE_2__["default"]))(FetchApiButton));

/***/ },

/***/ "./components/FieldsMapField.jsx"
/*!***************************************!*\
  !*** ./components/FieldsMapField.jsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @linaria/core */ "../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useActionValidatorProvider */ "./hooks/useActionValidatorProvider.js");

/* eslint-disable import/no-extraneous-dependencies */







const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex;
const StyledFlex = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_6__.styled)(_exp())({
  name: "StyledFlex",
  class: "s5b5a3p",
  propsAsIs: true
});
function FieldsMapField({
  tag,
  label,
  help = '',
  isRequired,
  formFields,
  value,
  onChange
}) {
  const LabelComponent = isRequired ? jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RequiredLabel : jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label;
  const {
    hasError,
    setShowError
  } = (0,_hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_7__["default"])({
    isSupported: error => `field_${tag}` === error?.property
  });
  const htmlId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useInstanceId)(FieldsMapField, 'jfb-field-map');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
    elevation: 2
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledFlex, {
    direction: "column",
    gap: 3
  }, hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please fill this required field', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, {
    createId: false,
    controlSize: 1,
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_4__.cx)(hasError && jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.ControlWithErrorStyle)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LabelComponent, {
    htmlFor: htmlId
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.StyledSelectControl, {
    id: htmlId,
    value: value,
    onChange: onChange,
    onBlur: () => setShowError(true),
    options: formFields
  })), Boolean(help) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Help, null, help)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldsMapField);
__webpack_require__(/*! ./FieldsMapField.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./FieldsMapField.jsx */ "./components/FieldsMapField.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/FieldsMapField.jsx");

/***/ },

/***/ "./components/ListActionItem.js"
/*!**************************************!*\
  !*** ./components/ListActionItem.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionItemWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionItemWrapper */ "./components/ActionItemWrapper.jsx");
/* harmony import */ var _ActionItemFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionItemFooter */ "./components/ActionItemFooter.jsx");
/* harmony import */ var _ActionItemHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionItemHeader */ "./components/ActionItemHeader.jsx");
/* harmony import */ var _ActionItemBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionItemBody */ "./components/ActionItemBody.jsx");
var _window$JetFBComponen;





function ListActionItem() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ActionItemWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ActionItemHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ActionItemBody__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ActionItemFooter__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ListActionItem = ListActionItem;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListActionItem);

/***/ },

/***/ "./components/PlaceholderMessage.js"
/*!******************************************!*\
  !*** ./components/PlaceholderMessage.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _window$JetFBComponen;

function PlaceholderMessage({
  style,
  children
}) {
  const propStyle = {
    fontSize: '1.5em',
    padding: '2em',
    textAlign: 'center',
    backgroundColor: 'aliceblue',
    ...style
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: propStyle
  }, children);
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.PlaceholderMessage = PlaceholderMessage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderMessage);

/***/ },

/***/ "./components/ProActionOverlay.jsx"
/*!*****************************************!*\
  !*** ./components/ProActionOverlay.jsx ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function ProActionOverlay({
  action
}) {
  var _action$proActionLink;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    direction: "column",
    justify: "space-evenly",
    align: "center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is paid addon. You can buy it here:', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: (_action$proActionLink = action.proActionLink) !== null && _action$proActionLink !== void 0 ? _action$proActionLink : 'https://jetformbuilder.com/pricing/'
  }, "jetformbuilder.com"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProActionOverlay);

/***/ },

/***/ "./components/RequestButton.js"
/*!*************************************!*\
  !*** ./components/RequestButton.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
var _window$JetFBComponen;




// eslint-disable-next-line max-lines-per-function
function RequestButton({
  label,
  ajaxArgs = {},
  onSuccessRequest = () => {},
  onFailRequest = () => {},
  onLoading = () => {},
  className = '',
  children = () => {},
  disabled = false,
  customRequest = false,
  isHidden = false,
  hasFetched = -1,
  ...buttonProps
}) {
  className = 'string' === typeof className ? className : className.join(' ');
  const defaultRequest = () => {
    onLoading();
    jQuery.ajax({
      url: ajaxurl,
      type: 'POST',
      data: ajaxArgs
    }).done(response => response.success ? onSuccessRequest(response) : onFailRequest()).fail(() => onFailRequest());
  };
  const request = () => {
    if (false === customRequest) {
      defaultRequest();
    } else if ('function' === typeof customRequest) {
      customRequest();
    } else {
      onFailRequest();
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isHidden && -1 === hasFetched) {
      request();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isHidden) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: disabled,
    key: 'validate_api_key',
    onClick: request,
    className: className + ' jet-fb-button line-with-input',
    variant: 'secondary',
    ...buttonProps
  }, children && children, label);
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.RequestButton = RequestButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestButton);

/***/ },

/***/ "./components/RequestLoadingButton.js"
/*!********************************************!*\
  !*** ./components/RequestLoadingButton.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RequestButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestButton */ "./components/RequestButton.js");
/* harmony import */ var _hooks_useStateLoadingClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useStateLoadingClasses */ "./hooks/useStateLoadingClasses.js");
var _window$JetFBComponen;



function RequestLoadingButton({
  label,
  ajaxArgs = {},
  onSuccessRequest = () => {},
  onFailRequest = () => {}
}) {
  const [className, setLoadingClass, clearLoadingClass] = (0,_hooks_useStateLoadingClasses__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RequestButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ajaxArgs: ajaxArgs,
    label: label,
    onLoading: setLoadingClass,
    onSuccessRequest: response => {
      clearLoadingClass();
      onSuccessRequest(response);
    },
    onFailRequest: () => {
      clearLoadingClass();
      onFailRequest();
    },
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons"
  }));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.RequestLoadingButton = RequestLoadingButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestLoadingButton);

/***/ },

/***/ "./components/SingleValueAsArrayToggle.jsx"
/*!*************************************************!*\
  !*** ./components/SingleValueAsArrayToggle.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const FLAGS_SOURCE = 'single_value_as_array';
function SingleValueAsArrayToggle({
  fieldName,
  getMapField,
  setMapField,
  showHelp = false
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save single value as array', 'jet-form-builder'),
    help: showHelp ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Other target field settings may affect whether the value is saved as an array.', 'jet-form-builder') : undefined,
    checked: !!getMapField({
      source: FLAGS_SOURCE,
      name: fieldName
    }),
    onChange: value => setMapField({
      source: FLAGS_SOURCE,
      nameField: fieldName,
      value: !!value
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleValueAsArrayToggle);

/***/ },

/***/ "./components/TableList.jsx"
/*!**********************************!*\
  !*** ./components/TableList.jsx ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableListContainer: () => (/* binding */ TableListContainer),
/* harmony export */   TableListHead: () => (/* binding */ TableListHead),
/* harmony export */   TableListRow: () => (/* binding */ TableListRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @linaria/core */ "../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useActionValidatorProvider */ "./hooks/useActionValidatorProvider.js");
/* harmony import */ var _ValidatorProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValidatorProvider */ "./components/ValidatorProvider.jsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_9__);

/* eslint-disable import/no-extraneous-dependencies */









const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex;
const StyledFlex = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_6__.styled)(_exp())({
  name: "StyledFlex",
  class: "s1goy86j",
  propsAsIs: true
});
function TableListContainer({
  children
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.TableListStyle.Card
  }, children);
}
function TableListRowContent({
  tag,
  label,
  help,
  isRequired,
  children
}) {
  const LabelComponent = isRequired ? jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RequiredLabel : jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label;
  const {
    hasError,
    setShowError
  } = (0,_hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_7__["default"])({
    isSupported: error => `field_${tag}` === error?.property
  });
  const htmlId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useInstanceId)(TableListRowContent, tag);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledFlex, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.TableListStyle.Td,
    direction: "column",
    gap: 3
  }, hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please fill this required field', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, {
    createId: false,
    controlSize: 1,
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_4__.cx)(hasError && jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.ControlWithErrorStyle)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.TableListStyle.TdItem
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LabelComponent, {
    htmlFor: htmlId,
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.TableListStyle.WhiteSpaceNormal
  }, label), Boolean(help) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Help, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.TableListStyle.WhiteSpaceNormal
  }, help)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.TableListStyle.TdItem
  }, typeof children === 'function' ? children({
    setShowError,
    htmlId
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_9__.isValidElement)(children) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_9__.cloneElement)(children, {
    setShowError
  }) : children)));
}
function TableListRow({
  tag,
  label,
  help = '',
  isRequired,
  children
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ValidatorProvider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isSupported: error => {
      return `field_${tag}` === error?.property;
    }
  }, ({
    hasError,
    setShowError
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableListRowContent, {
    tag: tag,
    label: label,
    help: help,
    isRequired: isRequired
  }, children));
}
function TableListHead({
  columns
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.TableListStyle.Th
  }, columns.map((column, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
    key: `col_${index}`,
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.TableListStyle.ThItem
  }, column)));
}

__webpack_require__(/*! ./TableList.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./TableList.jsx */ "./components/TableList.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/TableList.jsx");

/***/ },

/***/ "./components/ToggleActionExecutionButton.jsx"
/*!****************************************************!*\
  !*** ./components/ToggleActionExecutionButton.jsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useActionsEdit */ "./hooks/useActionsEdit.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/seen.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/unseen.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
var _window$JetFBComponen;

/* eslint-disable import/no-extraneous-dependencies */





function ToggleActionExecutionButton() {
  var _action$is_execute;
  const {
    action
  } = (0,_hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const isExecute = (_action$is_execute = action.is_execute) !== null && _action$is_execute !== void 0 ? _action$is_execute : true;
  const {
    toggleExecute
  } = (0,_hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    size: "small",
    icon: isExecute ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    label: isExecute ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Turn off', 'jet-form-builder') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Turn on', 'jet-form-builder'),
    onClick: () => toggleExecute(action),
    tooltipPosition: "top"
  });
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ToggleActionExecutionButton = ToggleActionExecutionButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleActionExecutionButton);

/***/ },

/***/ "./components/ValidateButton.js"
/*!**************************************!*\
  !*** ./components/ValidateButton.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RequestButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestButton */ "./components/RequestButton.js");
/* harmony import */ var _hooks_useStateValidClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useStateValidClasses */ "./hooks/useStateValidClasses.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
var _window$JetFBComponen;




function ValidateButton({
  initialValid = null,
  label,
  ajaxArgs = {},
  onValid = () => {},
  onInvalid = () => {}
}) {
  const [buttonProps, setButtonProps] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const [className, setValidClass, setInvalidClass, setLoadingClass] = (0,_hooks_useStateValidClasses__WEBPACK_IMPORTED_MODULE_2__["default"])(initialValid || null);
  const setValid = response => {
    setValidClass();
    onValid(response);
    setButtonProps({});
  };
  const setInvalid = () => {
    setInvalidClass();
    onInvalid();
    setButtonProps({
      isDestructive: true
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RequestButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ajaxArgs: ajaxArgs,
    label: label,
    onLoading: setLoadingClass,
    onSuccessRequest: setValid,
    onFailRequest: setInvalid,
    className: className,
    ...buttonProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons"
  }));
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ValidateButton = ValidateButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidateButton);

/***/ },

/***/ "./components/ValidateButtonWithStore.js"
/*!***********************************************!*\
  !*** ./components/ValidateButtonWithStore.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FetchAjaxButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchAjaxButton */ "./components/FetchAjaxButton.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
var _window$JetFBComponen;




function ValidateButtonWithStore(props) {
  const currentAction = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME).getCurrentAction();
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FetchAjaxButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: currentAction.id,
    ...props
  });
}

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window?.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ValidateButtonWithStore = ValidateButtonWithStore;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidateButtonWithStore);

/***/ },

/***/ "./components/ValidatedSelectControl.jsx"
/*!***********************************************!*\
  !*** ./components/ValidatedSelectControl.jsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useActionValidatorProvider */ "./hooks/useActionValidatorProvider.js");

/* eslint-disable import/no-extraneous-dependencies */



function ValidatedSelectControl({
  value,
  onChange,
  label,
  help = '',
  options,
  required = false,
  isErrorSupported = () => false
}) {
  const {
    hasError,
    setShowError
  } = (0,_hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_2__["default"])({
    isSupported: isErrorSupported
  });
  const LabelComponent = required ? jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RequiredLabel : jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LabelComponent, {
    htmlFor: id
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControlEnd, {
    hasError: hasError
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.StyledSelectControl, {
    id: id,
    value: value,
    onChange: onChange,
    onBlur: () => setShowError(true),
    help: help,
    options: options
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatedSelectControl);

/***/ },

/***/ "./components/ValidatedTextControl.jsx"
/*!*********************************************!*\
  !*** ./components/ValidatedTextControl.jsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useActionValidatorProvider */ "./hooks/useActionValidatorProvider.js");

/* eslint-disable import/no-extraneous-dependencies */



function ValidatedTextControl({
  value,
  onChange,
  label,
  help,
  isErrorSupported = () => false,
  errorText = "",
  required = false,
  disabled = false
}) {
  const {
    hasError,
    setShowError
  } = (0,_hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_2__["default"])({
    isSupported: isErrorSupported
  });
  const LabelComponent = required ? jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RequiredLabel : jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LabelComponent, {
    htmlFor: id
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControlEnd, {
    hasError: hasError,
    errorText: errorText
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.StyledTextControl, {
    id: id,
    value: value,
    onChange: onChange,
    onBlur: () => setShowError(true),
    help: help,
    disabled: disabled
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatedTextControl);

/***/ },

/***/ "./components/ValidatorProvider.jsx"
/*!******************************************!*\
  !*** ./components/ValidatorProvider.jsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useActionValidatorProvider */ "./hooks/useActionValidatorProvider.js");

function ValidatorProvider({
  isSupported,
  children
}) {
  return children((0,_hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_0__["default"])({
    isSupported
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidatorProvider);

/***/ },

/***/ "./context/ActionListItemContext.js"
/*!******************************************!*\
  !*** ./context/ActionListItemContext.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
var _window$JetFBComponen;

const ActionListItemContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  index: -1,
  action: {}
});

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.ActionListItemContext = ActionListItemContext;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionListItemContext);

/***/ },

/***/ "./context/CurrentActionEditContext.js"
/*!*********************************************!*\
  !*** ./context/CurrentActionEditContext.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
var _window$JetFBComponen;

const CurrentActionEditContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

// backward compatibility
window.JetFBComponents = (_window$JetFBComponen = window.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {};
window.JetFBComponents.CurrentActionEditContext = CurrentActionEditContext;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentActionEditContext);

/***/ },

/***/ "./helpers/addAction.js"
/*!******************************!*\
  !*** ./helpers/addAction.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBActions;


function addAction(actionType, actionInstance) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).addCallback(actionType, actionInstance);
}

// backward compatibility
window.JetFBActions = (_window$JetFBActions = window.JetFBActions) !== null && _window$JetFBActions !== void 0 ? _window$JetFBActions : {};
window.JetFBActions.addAction = addAction;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addAction);

/***/ },

/***/ "./helpers/addComputedField.js"
/*!*************************************!*\
  !*** ./helpers/addComputedField.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBActions;



/**
 * @param field
 * @param settings {{
 *                 isScoped: boolean|undefined
 *                 priority: number|undefined
 *                 }}
 */
function addComputedField(field, settings = {}) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).addComputedField(field, settings);
}

//backward compatibility
window.JetFBActions = (_window$JetFBActions = window.JetFBActions) !== null && _window$JetFBActions !== void 0 ? _window$JetFBActions : {};
window.JetFBActions.addComputedField = addComputedField;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComputedField);

/***/ },

/***/ "./helpers/convertFlow.js"
/*!********************************!*\
  !*** ./helpers/convertFlow.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseAction */ "./abstract/BaseAction.js");
/* harmony import */ var _abstract_ActionsFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/ActionsFlow */ "./abstract/ActionsFlow.js");
var _window$JetFBActions;



/**
 * @param  flow
 * @return {ActionsFlow}
 */
function convertFlow(flow = []) {
  const actions = [];
  for (const flowAction of flow) {
    const current = new _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_0__["default"](flowAction);
    current.refactorSettings();
    actions.push(current);
  }
  return new _abstract_ActionsFlow__WEBPACK_IMPORTED_MODULE_1__["default"](actions);
}

//backward compatibility
window.JetFBActions = (_window$JetFBActions = window.JetFBActions) !== null && _window$JetFBActions !== void 0 ? _window$JetFBActions : {};
window.JetFBActions.convertFlow = convertFlow;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertFlow);

/***/ },

/***/ "./helpers/convertListToFieldsMap.js"
/*!*******************************************!*\
  !*** ./helpers/convertListToFieldsMap.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _window$JetFBActions;
function convertListToFieldsMap(...sources) {
  const response = [];
  for (const source of sources) {
    if (!Array.isArray(source)) {
      continue;
    }
    response.push(...source.map(item => {
      const id = item.value;
      return [id, item];
    }));
  }
  return response;
}

// backward compatibility
window.JetFBActions = (_window$JetFBActions = window.JetFBActions) !== null && _window$JetFBActions !== void 0 ? _window$JetFBActions : {};
window.JetFBActions.convertListToFieldsMap = convertListToFieldsMap;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertListToFieldsMap);

/***/ },

/***/ "./helpers/globalTab.js"
/*!******************************!*\
  !*** ./helpers/globalTab.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _window$JetFBActions;
function globalTab({
  slug,
  element = '',
  empty = ''
}) {
  const global = JetFormEditorData.global_settings;
  if (!global) {
    return empty;
  }
  if (element) {
    return global[slug] && global[slug][element] ? global[slug][element] : empty;
  }
  return global[slug] || empty;
}

// backward compatibility
window.JetFBActions = (_window$JetFBActions = window.JetFBActions) !== null && _window$JetFBActions !== void 0 ? _window$JetFBActions : {};
window.JetFBActions.globalTab = globalTab;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalTab);

/***/ },

/***/ "./helpers/legacyLocalize.js"
/*!***********************************!*\
  !*** ./helpers/legacyLocalize.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocalizedFullPack: () => (/* binding */ getLocalizedFullPack)
/* harmony export */ });
function getLocalized(actionType, objectKey = '') {
  const preparedAction = window.jetFormActionTypes.find(action => actionType === action.id);
  if (!preparedAction) {
    return false;
  }
  const actionSelfLocalized = window[preparedAction.self];
  return objectKey && actionSelfLocalized[objectKey] ? actionSelfLocalized[objectKey] : actionSelfLocalized;
}
function getSourceObjectName(actionType) {
  const preparedAction = window.jetFormActionTypes.find(action => actionType === action.id);
  return preparedAction ? preparedAction.self : false;
}
function getLocalizedWithFunc({
  actionType = false,
  source = false
}, objectKey, ifEmptyReturn = '') {
  let action = false;
  if (source && source[objectKey]) {
    action = source[objectKey];
  } else if (actionType) {
    action = getLocalized(actionType)[objectKey];
  }
  if (!action) {
    return () => ifEmptyReturn;
  }
  return attr => {
    if (attr) {
      return action[attr] ? action[attr] : ifEmptyReturn;
    }
    return action;
  };
}
function localizedLabel(settings) {
  return getLocalizedWithFunc(settings, '__labels', '[Empty Label]');
}
function localizedHelp(settings) {
  return getLocalizedWithFunc(settings, '__help_messages');
}
function localizedGatewayAttrs(settings) {
  return getLocalizedWithFunc(settings, '__gateway_attrs', []);
}
function localizedMessages(settings) {
  return getLocalizedWithFunc(settings, '__messages', {});
}
function getLocalizedFullPack(actionType, source = false) {
  if (!source) {
    source = getLocalized(actionType);
  }
  function setSource(props = {}) {
    const name = getSourceObjectName(actionType);
    if (!name || !window[name]) {
      return false;
    }
    window[name] = {
      ...window[name],
      ...props
    };
    return true;
  }
  const label = localizedLabel({
    source
  });
  const help = localizedHelp({
    source
  });
  const messages = localizedMessages({
    source
  });
  const gatewayAttrs = localizedGatewayAttrs({
    source
  });
  return {
    source,
    label,
    help,
    messages,
    gatewayAttrs,
    setSource
  };
}

/***/ },

/***/ "./helpers/registerAction.js"
/*!***********************************!*\
  !*** ./helpers/registerAction.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");



// eslint-disable-next-line jsdoc/require-returns-check
/**
 * @param  actionSettings {{
 *                        type: string,
 *                        label: string,
 *                        edit: Function,
 *                        icon: React.JSX.Element|null,
 *                        category: string|null,
 *                        docHref: string|null,
 *                        provideEvents: Function|null
 *                        disableConditions: Boolean|null,
 *                        disabled: Boolean|null,
 *                        fixed: Boolean|null,
 *                        validators: Function[]|null
 *                        }}
 * @return {(function({select: *, dispatch: *}): void)|*}
 */
function registerAction(actionSettings) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).registerAction(actionSettings);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerAction);

/***/ },

/***/ "./helpers/withActionLocalizeScript.js"
/*!*********************************************!*\
  !*** ./helpers/withActionLocalizeScript.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CurrentActionEditContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/CurrentActionEditContext */ "./context/CurrentActionEditContext.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _legacyLocalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacyLocalize */ "./helpers/legacyLocalize.js");





// eslint-disable-next-line max-lines-per-function
function withActionLocalizeScript(actionType, ActionInstance) {
  const localizedData = (0,_legacyLocalize__WEBPACK_IMPORTED_MODULE_3__.getLocalizedFullPack)(actionType);
  return props => {
    const onChangeSetting = (value, key) => {
      props.onChange({
        ...props.settings,
        [key]: value
      });
    };
    const onChangeSettingObj = value => {
      props.onChange({
        ...props.settings,
        ...value
      });
    };
    const getMapField = ({
      source = 'fields_map',
      name
    }) => {
      const settings = props.settings;
      if (typeof settings[source] !== 'undefined' && typeof settings[source][name] !== 'undefined') {
        return settings[source][name];
      }
      return '';
    };
    const setMapField = ({
      source = 'fields_map',
      nameField,
      value
    }) => {
      const fieldsMap = {
        ...props.settings[source],
        [nameField]: value
      };
      props.onChange({
        ...props.settings,
        [source]: fieldsMap
      });
    };
    const additionalProps = {
      onChangeSetting,
      getMapField,
      setMapField,
      onChangeSettingObj
    };
    const resultProps = {
      ...props,
      ...localizedData,
      ...additionalProps
    };
    const CustomSettings = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.withFilters)(`jet.fb.render.action.${actionType}`)(() => null);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_CurrentActionEditContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
      value: resultProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionInstance, {
      ...resultProps
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomSettings, {
      ...resultProps
    }));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withActionLocalizeScript);

/***/ },

/***/ "./hooks/useActionCallback.js"
/*!************************************!*\
  !*** ./hooks/useActionCallback.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useActionCallback: () => (/* binding */ useActionCallback)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
var _window$JetFBHooks;

const useActionCallback = (actionType = false) => {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    return actionType ? select('jet-forms/actions').getAction(actionType)?.edit : select('jet-forms/actions').getCurrentEdit();
  }, [actionType]);
};

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useActionCallback = useActionCallback;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useActionCallback);

/***/ },

/***/ "./hooks/useActionErrors.js"
/*!**********************************!*\
  !*** ./hooks/useActionErrors.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseAction */ "./abstract/BaseAction.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.js");



function useActionErrors(action) {
  action = new _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_0__["default"](action);
  const validators = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const actionType = select(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME).getAction(action.type);
    return actionType?.validators ? actionType.validators : [];
  }, [action.type]);
  const errors = [];
  for (const validator of validators) {
    const error = validator({
      settings: action.selfSettings
    });
    if (Array.isArray(error)) {
      errors.push(...error);
      continue;
    }
    if (!error) {
      continue;
    }
    errors.push(error);
  }
  return errors;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useActionErrors);

/***/ },

/***/ "./hooks/useActionValidatorProvider.js"
/*!*********************************************!*\
  !*** ./hooks/useActionValidatorProvider.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useActionErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useActionErrors */ "./hooks/useActionErrors.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store/index.js");




function useActionValidatorProvider({
  isSupported
}) {
  const {
    currentAction,
    isShowErrors
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    currentAction: select(_store__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME).getCurrentAction(),
    isShowErrors: select(_store__WEBPACK_IMPORTED_MODULE_3__.STORE_NAME).getErrorVisibility()
  }), []);
  const [isShowLocalError, setShowError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  /**
   * We could receive errors only after changing local state
   * (probably on blur event) or after changing global state
   * (probably after click on the Update button)
   */
  const errors = (0,_useActionErrors__WEBPACK_IMPORTED_MODULE_2__["default"])(isShowLocalError || isShowErrors ? currentAction : {
    type: false
  });
  const hasSupportedError = errors.some(isSupported);
  return {
    hasError: hasSupportedError,
    setShowError
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useActionValidatorProvider);

/***/ },

/***/ "./hooks/useActions.js"
/*!*****************************!*\
  !*** ./hooks/useActions.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jet_form_builder_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jet-form-builder-data */ "jet-form-builder-data");
/* harmony import */ var jet_form_builder_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_data__WEBPACK_IMPORTED_MODULE_0__);
var _window$JetFBHooks;

function useActions(deps = undefined) {
  return (0,jet_form_builder_data__WEBPACK_IMPORTED_MODULE_0__.useMetaState)('_jf_actions', '[]', deps);
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useActions = useActions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useActions);

/***/ },

/***/ "./hooks/useActionsEdit.js"
/*!*********************************!*\
  !*** ./hooks/useActionsEdit.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useActionsEdit: () => (/* binding */ useActionsEdit)
/* harmony export */ });
/* harmony import */ var _useActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useActions */ "./hooks/useActions.js");
var _window$JetFBHooks;


/**
 * @return {{moveAction: moveAction, updateActionObj: updateActionObj,
 *     setActions: (function(*=): void), toggleExecute: toggleExecute, actions:
 *     *, deleteAction: deleteAction, addActionProps: addActionProps}}
 */
const useActionsEdit = () => {
  const [actions, setActions] = (0,_useActions__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const moveAction = (fromIndex, toIndex) => {
    const item = JSON.parse(JSON.stringify(actions[fromIndex])),
      replacedItem = JSON.parse(JSON.stringify(actions[toIndex]));
    actions.splice(toIndex, 1, item);
    actions.splice(fromIndex, 1, replacedItem);
    setActions([...actions]);
  };
  const deleteAction = index => {
    actions.splice(index, 1);
    setActions([...actions]);
  };
  const updateActionObj = (id, props) => {
    const newActions = actions.map(current => {
      if (id !== current.id) {
        return current;
      }
      return {
        ...JSON.parse(JSON.stringify(current)),
        ...props
      };
    });
    setActions([...newActions]);
  };
  const addActionProps = props => {
    const actionProps = JSON.parse(JSON.stringify(props));
    actionProps.id = 0 > actionProps.id ? actionProps.id * -1 : actionProps.id;
    setActions([...actions, {
      ...actionProps
    }]);
  };
  const toggleExecute = action => {
    var _action$is_execute;
    updateActionObj(action.id, {
      is_execute: !((_action$is_execute = action.is_execute) !== null && _action$is_execute !== void 0 ? _action$is_execute : true)
    });
  };
  return {
    actions,
    setActions,
    moveAction,
    deleteAction,
    updateActionObj,
    toggleExecute,
    addActionProps
  };
};

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useActionsEdit = useActionsEdit;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useActionsEdit);

/***/ },

/***/ "./hooks/useCurrentAction.js"
/*!***********************************!*\
  !*** ./hooks/useCurrentAction.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBHooks;


function useCurrentAction() {
  const [currentAction, currentSettings] = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const state = select(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getCurrentAction();
    const settings = select(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getCurrentSettings();
    return [state, settings];
  }, []);
  const {
    updateCurrentSettings: updateSettings
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME);
  return {
    currentAction,
    currentSettings,
    updateSettings
  };
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useCurrentAction = useCurrentAction;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCurrentAction);

/***/ },

/***/ "./hooks/useLoopedAction.js"
/*!**********************************!*\
  !*** ./hooks/useLoopedAction.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context_ActionListItemContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/ActionListItemContext */ "./context/ActionListItemContext.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
var _window$JetFBHooks;



/**
 * @return {{action: Object, index: number}}
 */
function useLoopedAction() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ActionListItemContext__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useLoopedAction = useLoopedAction;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLoopedAction);

/***/ },

/***/ "./hooks/usePreventEditorUndoInModal.js"
/*!**********************************************!*\
  !*** ./hooks/usePreventEditorUndoInModal.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const MODAL_SELECTOR = '.components-modal__frame';
const isUndoShortcut = event => {
  const isMacUndo = event.metaKey && !event.ctrlKey;
  const isWinUndo = event.ctrlKey && !event.metaKey;
  return (isMacUndo || isWinUndo) && 'z' === event.key.toLowerCase() && !event.altKey;
};
const isInsideModal = event => {
  const path = event.composedPath?.();
  if (path?.length) {
    return path.some(element => element instanceof Element && element.matches?.(MODAL_SELECTOR));
  }
  return event.target?.closest?.(MODAL_SELECTOR);
};
const usePreventEditorUndoInModal = () => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleKeyDown = event => {
      if (!isUndoShortcut(event)) {
        return;
      }
      if (!isInsideModal(event)) {
        return;
      }

      /**
       * Important:
       * Do NOT call preventDefault().
       *
       * Browser native undo should still work for inputs/textareas,
       * including the browser's own form-control undo history.
       *
       * We only stop Gutenberg/editor keyboard handlers from receiving
       * Cmd/Ctrl+Z while the event comes from inside a modal.
       */
      event.stopPropagation();
    };
    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePreventEditorUndoInModal);

/***/ },

/***/ "./hooks/useRequestFields.js"
/*!***********************************!*\
  !*** ./hooks/useRequestFields.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getComputedFields: () => (/* binding */ getComputedFields),
/* harmony export */   getRequestFields: () => (/* binding */ getRequestFields)
/* harmony export */ });
/* harmony import */ var _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/BaseAction */ "./abstract/BaseAction.js");
/* harmony import */ var _context_CurrentActionEditContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/CurrentActionEditContext */ "./context/CurrentActionEditContext.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBHooks;



const {
  useSelect
} = wp.data;
const {
  useContext
} = wp.element;
const getRequestFields = ({
  actions,
  fields
}) => {
  for (const action of actions) {
    const {
      [action.type]: current = {}
    } = action.settings;
    if (!current.requestFields) {
      continue;
    }
    for (const requestField of current.requestFields) {
      const index = fields.findIndex(field => field.value === requestField.name);

      // eslint-disable-next-line max-depth
      if (-1 !== index) {
        continue;
      }
      fields.push({
        from: action.type,
        id: action.id,
        label: requestField.name,
        value: requestField.name,
        name: requestField.name,
        help: requestField.help
      });
    }
  }
};
const processComputedField = ({
  computed,
  action,
  fields,
  nameSet
}) => {
  if (!computed.isSupported(action, fields)) {
    return;
  }
  computed.setAction(action);
  computed.hasInList = false;
  let name = computed.getName();
  if (nameSet.has(name)) {
    computed.hasInList = true;
    name = computed.getName();
  }
  if (fields.some(({
    value
  }) => value === name)) {
    return;
  }
  nameSet.add(name);
  const label = computed.getLabel();
  fields.push({
    from: action.type,
    id: action.id,
    label: label || name,
    value: name,
    name,
    help: computed.getHelp()
  });
};
function getComputedFields({
  fields,
  actions,
  computed,
  nameSet
}) {
  /**
   * @type {BaseAction[]}
   */
  actions = actions.map(item => new _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_0__["default"](item));
  for (const {
    field: computedField,
    settings
  } of computed) {
    if (settings?.isScoped) {
      continue;
    }

    /**
     * @type {BaseComputedField}
     */
    const current = new computedField();
    for (const action of actions) {
      processComputedField({
        computed: current,
        action,
        nameSet,
        fields
      });
    }
    if (current.action || !current.isSupportedGlobal()) {
      continue;
    }
    const label = current.getLabel();
    const name = current.getName();
    fields.push({
      label: label || name,
      value: name,
      name,
      help: current.getHelp()
    });
  }
}
function useRequestFields({
  returnOnEmptyCurrentAction = true
} = {}) {
  const meta = useSelect(select => {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  }, []);
  const actionProps = useContext(_context_CurrentActionEditContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const {
    currentAction,
    computedList
  } = useSelect(select => ({
    currentAction: select(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME).getCurrentAction(),
    computedList: select(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME).getComputedFields()
  }), []);
  if (!actionProps?.actionId && returnOnEmptyCurrentAction) {
    return [];
  }
  const actions = JSON.parse(meta._jf_actions || '[]');

  // current action could be empty object
  if (!Number.isNaN(Number(currentAction?.index))) {
    actions.splice(currentAction.index);
  }
  const nameSet = new Set();
  const fields = [];
  for (const {
    field: computedField,
    settings
  } of computedList) {
    if (!settings?.isScoped) {
      continue;
    }

    /**
     * @type {BaseComputedField}
     */
    const current = new computedField();
    processComputedField({
      computed: current,
      action: currentAction,
      nameSet,
      fields
    });
  }

  /**
   * Should be deprecated
   *
   * @type {*[]}
   */
  getRequestFields({
    actions,
    fields
  });
  getComputedFields({
    fields,
    actions,
    computed: computedList,
    nameSet
  });
  return fields;
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useRequestFields = useRequestFields;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequestFields);

/***/ },

/***/ "./hooks/useStateLoadingClasses.js"
/*!*****************************************!*\
  !*** ./hooks/useStateLoadingClasses.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useStateValidClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useStateValidClasses */ "./hooks/useStateValidClasses.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


function useStateLoadingClasses() {
  const [classes, setClasses] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([..._useStateValidClasses__WEBPACK_IMPORTED_MODULE_0__.initClasses]);
  const setLoadingClass = () => {
    setClasses([..._useStateValidClasses__WEBPACK_IMPORTED_MODULE_0__.initClasses, 'loading']);
  };
  const clearLoadingClass = () => {
    setClasses(_useStateValidClasses__WEBPACK_IMPORTED_MODULE_0__.initClasses);
  };
  return [classes.join(' '), setLoadingClass, clearLoadingClass];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStateLoadingClasses);

/***/ },

/***/ "./hooks/useStateValidClasses.js"
/*!***************************************!*\
  !*** ./hooks/useStateValidClasses.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initClasses: () => (/* binding */ initClasses)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const initClasses = ['jet-form-validate-button'];
function useStateValidClasses(initialValid) {
  const validClass = 'is-valid';
  const invalidClass = 'is-invalid';
  const initStateClasses = () => {
    if (initialValid) {
      return [validClass];
    }
    return false === initialValid ? [invalidClass] : [];
  };
  const [classes, setClasses] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(() => [...initClasses, ...initStateClasses()]);
  const setValidClass = () => {
    setClasses([...initClasses, validClass]);
  };
  const setInvalidClass = () => {
    setClasses([...initClasses, invalidClass]);
  };
  const setLoadingClass = () => {
    setClasses([...initClasses, 'loading']);
  };
  return [classes.join(' '), setValidClass, setInvalidClass, setLoadingClass];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStateValidClasses);

/***/ },

/***/ "./hooks/useUpdateCurrentAction.js"
/*!*****************************************!*\
  !*** ./hooks/useUpdateCurrentAction.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useUpdateCurrentAction: () => (/* binding */ useUpdateCurrentAction)
/* harmony export */ });
/* harmony import */ var _useCurrentAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCurrentAction */ "./hooks/useCurrentAction.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBHooks;




/**
 * Update current meta in store (while editing it in modal)
 * @return {{setCurrentAction, clearCurrent, setTypeSettings,
 *     updateCurrentConditions}}
 */
const useUpdateCurrentAction = () => {
  const {
    currentAction
  } = (0,_useCurrentAction__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    setCurrentAction,
    clearCurrent,
    updateCurrentConditions
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME);
  const setTypeSettings = settings => {
    setCurrentAction({
      ...currentAction,
      settings: {
        ...currentAction.settings,
        [currentAction.type]: settings
      }
    });
  };
  return {
    setCurrentAction,
    setTypeSettings,
    clearCurrent,
    updateCurrentConditions
  };
};

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useUpdateCurrentAction = useUpdateCurrentAction;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdateCurrentAction);

/***/ },

/***/ "./hooks/useUpdateCurrentActionMeta.js"
/*!*********************************************!*\
  !*** ./hooks/useUpdateCurrentActionMeta.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useUpdateCurrentActionMeta: () => (/* binding */ useUpdateCurrentActionMeta)
/* harmony export */ });
/* harmony import */ var _useCurrentAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCurrentAction */ "./hooks/useCurrentAction.js");
/* harmony import */ var _useActionsEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useActionsEdit */ "./hooks/useActionsEdit.js");
var _window$JetFBHooks;



/**
 * Update action in meta
 * @return {function(*=): void}
 */
const useUpdateCurrentActionMeta = () => {
  const {
    currentAction
  } = (0,_useCurrentAction__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    updateActionObj,
    addActionProps
  } = (0,_useActionsEdit__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // need to add action & save props
  if (0 > currentAction.id) {
    return newProps => addActionProps(newProps);
  }
  return newProps => {
    updateActionObj(currentAction.id, newProps);
  };
};

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useUpdateCurrentActionMeta = useUpdateCurrentActionMeta;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdateCurrentActionMeta);

/***/ },

/***/ "./hooks/withCurrentAction.js"
/*!************************************!*\
  !*** ./hooks/withCurrentAction.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBHooks;

function withCurrentAction(select) {
  const currentAction = select(_store__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).getCurrentAction();
  return {
    currentAction
  };
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.withCurrentAction = withCurrentAction;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withCurrentAction);

/***/ },

/***/ "./hooks/withDispatchActionLoading.js"
/*!********************************************!*\
  !*** ./hooks/withDispatchActionLoading.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBHooks;

function withDispatchActionLoading(dispatch) {
  return {
    setLoading(actionId) {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).setLoading({
        id: actionId
      });
    },
    setResultSuccess(actionId, response) {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).setLoadingResult({
        id: actionId,
        success: true,
        response
      });
    },
    setResultFail(actionId) {
      dispatch(_store__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).setLoadingResult({
        id: actionId,
        success: false,
        response: {}
      });
    }
  };
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.withDispatchActionLoading = withDispatchActionLoading;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withDispatchActionLoading);

/***/ },

/***/ "./hooks/withRequestFields.js"
/*!************************************!*\
  !*** ./hooks/withRequestFields.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useRequestFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRequestFields */ "./hooks/useRequestFields.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBHooks;


function withRequestFields(select) {
  const meta = select('core/editor').getEditedPostAttribute('meta') || {};
  const actions = JSON.parse(meta._jf_actions || '[]');
  const currentAction = select(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getCurrentAction();
  const computed = select(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getComputedFields();
  actions.splice(currentAction.index);
  const fields = [];
  const nameSet = new Set();
  (0,_useRequestFields__WEBPACK_IMPORTED_MODULE_0__.getRequestFields)({
    actions,
    fields
  });
  (0,_useRequestFields__WEBPACK_IMPORTED_MODULE_0__.getComputedFields)({
    fields,
    actions,
    computed,
    nameSet
  });
  return {
    requestFields: fields
  };
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.withRequestFields = withRequestFields;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withRequestFields);

/***/ },

/***/ "./hooks/withSelectActionLoading.js"
/*!******************************************!*\
  !*** ./hooks/withSelectActionLoading.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./store/index.js");
var _window$JetFBHooks;

function withSelectActionLoading(select) {
  const loadingState = select(_store__WEBPACK_IMPORTED_MODULE_0__.STORE_NAME).getCurrentLoading();
  return {
    loadingState
  };
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.withSelectActionLoading = withSelectActionLoading;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelectActionLoading);

/***/ },

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionFetchButton: () => (/* reexport safe */ _components_ActionFetchButton__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   ActionGridItem: () => (/* reexport safe */ _components_AddAction_ActionGridItem__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   ActionItemBody: () => (/* reexport safe */ _components_ActionItemBody__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   ActionItemFooter: () => (/* reexport safe */ _components_ActionItemFooter__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   ActionItemHeader: () => (/* reexport safe */ _components_ActionItemHeader__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   ActionItemWrapper: () => (/* reexport safe */ _components_ActionItemWrapper__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   ActionListItemContext: () => (/* reexport safe */ _context_ActionListItemContext__WEBPACK_IMPORTED_MODULE_53__["default"]),
/* harmony export */   ActionMessages: () => (/* reexport safe */ _components_ActionMessages__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   ActionMessagesSlotFills: () => (/* reexport safe */ _components_ActionMessagesSlotFills__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   ActionModalBackButton: () => (/* reexport safe */ _components_ActionModalBackButton__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   ActionModalCloseButton: () => (/* reexport safe */ _components_ActionModalCloseButton__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   ActionModalHeaderSlotFill: () => (/* reexport safe */ _components_ActionModalHeaderSlotFill__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   ActionTitle: () => (/* reexport safe */ _components_ActionTitle__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   ActionsAfterNewButtonSlotFill: () => (/* reexport safe */ _components_ActionsAfterNewButtonSlotFill__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   ActionsFlow: () => (/* reexport safe */ _abstract_ActionsFlow__WEBPACK_IMPORTED_MODULE_52__["default"]),
/* harmony export */   AddActionButton: () => (/* reexport safe */ _components_AddAction_AddActionButton__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   AllProActionsLink: () => (/* reexport safe */ _components_AllProActionsLink__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   BaseAction: () => (/* reexport safe */ _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_50__["default"]),
/* harmony export */   BaseComputedField: () => (/* reexport safe */ _abstract_BaseComputedField__WEBPACK_IMPORTED_MODULE_51__["default"]),
/* harmony export */   CurrentActionEditContext: () => (/* reexport safe */ _context_CurrentActionEditContext__WEBPACK_IMPORTED_MODULE_54__["default"]),
/* harmony export */   DeleteActionButton: () => (/* reexport safe */ _components_DeleteActionButton__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   EditActionConditionsButton: () => (/* reexport safe */ _components_EditActionConditionsButton__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EditActionSettingsButton: () => (/* reexport safe */ _components_EditActionSettingsButton__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   EventsList: () => (/* reexport safe */ _components_EventsList__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   FetchAjaxButton: () => (/* reexport safe */ _components_FetchAjaxButton__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   FetchApiButton: () => (/* reexport safe */ _components_FetchApiButton__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   FieldsMapField: () => (/* reexport safe */ _components_FieldsMapField__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   ListActionItem: () => (/* reexport safe */ _components_ListActionItem__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   PlaceholderMessage: () => (/* reexport safe */ _components_PlaceholderMessage__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   RequestButton: () => (/* reexport safe */ _components_RequestButton__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   RequestLoadingButton: () => (/* reexport safe */ _components_RequestLoadingButton__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   STORE_NAME: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME),
/* harmony export */   SingleValueAsArrayToggle: () => (/* reexport safe */ _components_SingleValueAsArrayToggle__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   TableListContainer: () => (/* reexport safe */ _components_TableList__WEBPACK_IMPORTED_MODULE_34__.TableListContainer),
/* harmony export */   TableListHead: () => (/* reexport safe */ _components_TableList__WEBPACK_IMPORTED_MODULE_34__.TableListHead),
/* harmony export */   TableListRow: () => (/* reexport safe */ _components_TableList__WEBPACK_IMPORTED_MODULE_34__.TableListRow),
/* harmony export */   ToggleActionExecutionButton: () => (/* reexport safe */ _components_ToggleActionExecutionButton__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   ValidateButton: () => (/* reexport safe */ _components_ValidateButton__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   ValidateButtonWithStore: () => (/* reexport safe */ _components_ValidateButtonWithStore__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   ValidatedSelectControl: () => (/* reexport safe */ _components_ValidatedSelectControl__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   ValidatedTextControl: () => (/* reexport safe */ _components_ValidatedTextControl__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   ValidatorProvider: () => (/* reexport safe */ _components_ValidatorProvider__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   addAction: () => (/* reexport safe */ _helpers_addAction__WEBPACK_IMPORTED_MODULE_56__["default"]),
/* harmony export */   addComputedField: () => (/* reexport safe */ _helpers_addComputedField__WEBPACK_IMPORTED_MODULE_57__["default"]),
/* harmony export */   convertFlow: () => (/* reexport safe */ _helpers_convertFlow__WEBPACK_IMPORTED_MODULE_58__["default"]),
/* harmony export */   convertListToFieldsMap: () => (/* reexport safe */ _helpers_convertListToFieldsMap__WEBPACK_IMPORTED_MODULE_59__["default"]),
/* harmony export */   globalTab: () => (/* reexport safe */ _helpers_globalTab__WEBPACK_IMPORTED_MODULE_60__["default"]),
/* harmony export */   registerAction: () => (/* reexport safe */ _helpers_registerAction__WEBPACK_IMPORTED_MODULE_55__["default"]),
/* harmony export */   useActionCallback: () => (/* reexport safe */ _hooks_useActionCallback__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   useActionErrors: () => (/* reexport safe */ _hooks_useActionErrors__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   useActionValidatorProvider: () => (/* reexport safe */ _hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_40__["default"]),
/* harmony export */   useActions: () => (/* reexport safe */ _hooks_useActions__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   useActionsEdit: () => (/* reexport safe */ _hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_39__["default"]),
/* harmony export */   useCurrentAction: () => (/* reexport safe */ _hooks_useCurrentAction__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   useLoopedAction: () => (/* reexport safe */ _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   useRequestFields: () => (/* reexport safe */ _hooks_useRequestFields__WEBPACK_IMPORTED_MODULE_43__["default"]),
/* harmony export */   useUpdateCurrentAction: () => (/* reexport safe */ _hooks_useUpdateCurrentAction__WEBPACK_IMPORTED_MODULE_44__["default"]),
/* harmony export */   useUpdateCurrentActionMeta: () => (/* reexport safe */ _hooks_useUpdateCurrentActionMeta__WEBPACK_IMPORTED_MODULE_45__["default"]),
/* harmony export */   withCurrentAction: () => (/* reexport safe */ _hooks_withCurrentAction__WEBPACK_IMPORTED_MODULE_46__["default"]),
/* harmony export */   withDispatchActionLoading: () => (/* reexport safe */ _hooks_withDispatchActionLoading__WEBPACK_IMPORTED_MODULE_47__["default"]),
/* harmony export */   withRequestFields: () => (/* reexport safe */ _hooks_withRequestFields__WEBPACK_IMPORTED_MODULE_48__["default"]),
/* harmony export */   withSelectActionLoading: () => (/* reexport safe */ _hooks_withSelectActionLoading__WEBPACK_IMPORTED_MODULE_49__["default"])
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./store/index.js");
/* harmony import */ var _components_ActionFetchButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ActionFetchButton */ "./components/ActionFetchButton.js");
/* harmony import */ var _components_AddAction_ActionGridItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AddAction/ActionGridItem */ "./components/AddAction/ActionGridItem.jsx");
/* harmony import */ var _components_ActionItemBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ActionItemBody */ "./components/ActionItemBody.jsx");
/* harmony import */ var _components_ActionItemFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ActionItemFooter */ "./components/ActionItemFooter.jsx");
/* harmony import */ var _components_ActionItemHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ActionItemHeader */ "./components/ActionItemHeader.jsx");
/* harmony import */ var _components_ActionItemWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ActionItemWrapper */ "./components/ActionItemWrapper.jsx");
/* harmony import */ var _components_ActionMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ActionMessages */ "./components/ActionMessages.js");
/* harmony import */ var _components_ActionMessagesSlotFills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ActionMessagesSlotFills */ "./components/ActionMessagesSlotFills.js");
/* harmony import */ var _components_ActionModalBackButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ActionModalBackButton */ "./components/ActionModalBackButton.jsx");
/* harmony import */ var _components_ActionModalCloseButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ActionModalCloseButton */ "./components/ActionModalCloseButton.jsx");
/* harmony import */ var _components_ActionModalHeaderSlotFill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ActionModalHeaderSlotFill */ "./components/ActionModalHeaderSlotFill.js");
/* harmony import */ var _components_ActionsAfterNewButtonSlotFill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ActionsAfterNewButtonSlotFill */ "./components/ActionsAfterNewButtonSlotFill.js");
/* harmony import */ var _components_ActionTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ActionTitle */ "./components/ActionTitle.jsx");
/* harmony import */ var _components_AddAction_AddActionButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/AddAction/AddActionButton */ "./components/AddAction/AddActionButton.jsx");
/* harmony import */ var _components_AllProActionsLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/AllProActionsLink */ "./components/AllProActionsLink.js");
/* harmony import */ var _components_DeleteActionButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/DeleteActionButton */ "./components/DeleteActionButton.jsx");
/* harmony import */ var _components_EditActionConditionsButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/EditActionConditionsButton */ "./components/EditActionConditionsButton.jsx");
/* harmony import */ var _components_EditActionSettingsButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/EditActionSettingsButton */ "./components/EditActionSettingsButton.js");
/* harmony import */ var _components_EventsList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/EventsList */ "./components/EventsList.jsx");
/* harmony import */ var _components_FetchAjaxButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/FetchAjaxButton */ "./components/FetchAjaxButton.js");
/* harmony import */ var _components_FetchApiButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/FetchApiButton */ "./components/FetchApiButton.js");
/* harmony import */ var _components_ListActionItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/ListActionItem */ "./components/ListActionItem.js");
/* harmony import */ var _components_PlaceholderMessage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/PlaceholderMessage */ "./components/PlaceholderMessage.js");
/* harmony import */ var _components_RequestButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/RequestButton */ "./components/RequestButton.js");
/* harmony import */ var _components_RequestLoadingButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/RequestLoadingButton */ "./components/RequestLoadingButton.js");
/* harmony import */ var _components_ToggleActionExecutionButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/ToggleActionExecutionButton */ "./components/ToggleActionExecutionButton.jsx");
/* harmony import */ var _components_ValidateButton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/ValidateButton */ "./components/ValidateButton.js");
/* harmony import */ var _components_ValidateButtonWithStore__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/ValidateButtonWithStore */ "./components/ValidateButtonWithStore.js");
/* harmony import */ var _components_ValidatorProvider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/ValidatorProvider */ "./components/ValidatorProvider.jsx");
/* harmony import */ var _components_FieldsMapField__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/FieldsMapField */ "./components/FieldsMapField.jsx");
/* harmony import */ var _components_ValidatedTextControl__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/ValidatedTextControl */ "./components/ValidatedTextControl.jsx");
/* harmony import */ var _components_ValidatedSelectControl__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/ValidatedSelectControl */ "./components/ValidatedSelectControl.jsx");
/* harmony import */ var _components_TableList__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/TableList */ "./components/TableList.jsx");
/* harmony import */ var _components_SingleValueAsArrayToggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/SingleValueAsArrayToggle */ "./components/SingleValueAsArrayToggle.jsx");
/* harmony import */ var _hooks_useActionCallback__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./hooks/useActionCallback */ "./hooks/useActionCallback.js");
/* harmony import */ var _hooks_useActionErrors__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./hooks/useActionErrors */ "./hooks/useActionErrors.js");
/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./hooks/useActions */ "./hooks/useActions.js");
/* harmony import */ var _hooks_useActionsEdit__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./hooks/useActionsEdit */ "./hooks/useActionsEdit.js");
/* harmony import */ var _hooks_useActionValidatorProvider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./hooks/useActionValidatorProvider */ "./hooks/useActionValidatorProvider.js");
/* harmony import */ var _hooks_useCurrentAction__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./hooks/useCurrentAction */ "./hooks/useCurrentAction.js");
/* harmony import */ var _hooks_useLoopedAction__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./hooks/useLoopedAction */ "./hooks/useLoopedAction.js");
/* harmony import */ var _hooks_useRequestFields__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./hooks/useRequestFields */ "./hooks/useRequestFields.js");
/* harmony import */ var _hooks_useUpdateCurrentAction__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./hooks/useUpdateCurrentAction */ "./hooks/useUpdateCurrentAction.js");
/* harmony import */ var _hooks_useUpdateCurrentActionMeta__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./hooks/useUpdateCurrentActionMeta */ "./hooks/useUpdateCurrentActionMeta.js");
/* harmony import */ var _hooks_withCurrentAction__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./hooks/withCurrentAction */ "./hooks/withCurrentAction.js");
/* harmony import */ var _hooks_withDispatchActionLoading__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./hooks/withDispatchActionLoading */ "./hooks/withDispatchActionLoading.js");
/* harmony import */ var _hooks_withRequestFields__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./hooks/withRequestFields */ "./hooks/withRequestFields.js");
/* harmony import */ var _hooks_withSelectActionLoading__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./hooks/withSelectActionLoading */ "./hooks/withSelectActionLoading.js");
/* harmony import */ var _abstract_BaseAction__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./abstract/BaseAction */ "./abstract/BaseAction.js");
/* harmony import */ var _abstract_BaseComputedField__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./abstract/BaseComputedField */ "./abstract/BaseComputedField.js");
/* harmony import */ var _abstract_ActionsFlow__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./abstract/ActionsFlow */ "./abstract/ActionsFlow.js");
/* harmony import */ var _context_ActionListItemContext__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./context/ActionListItemContext */ "./context/ActionListItemContext.js");
/* harmony import */ var _context_CurrentActionEditContext__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./context/CurrentActionEditContext */ "./context/CurrentActionEditContext.js");
/* harmony import */ var _helpers_registerAction__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./helpers/registerAction */ "./helpers/registerAction.js");
/* harmony import */ var _helpers_addAction__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./helpers/addAction */ "./helpers/addAction.js");
/* harmony import */ var _helpers_addComputedField__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./helpers/addComputedField */ "./helpers/addComputedField.js");
/* harmony import */ var _helpers_convertFlow__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./helpers/convertFlow */ "./helpers/convertFlow.js");
/* harmony import */ var _helpers_convertListToFieldsMap__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./helpers/convertListToFieldsMap */ "./helpers/convertListToFieldsMap.js");
/* harmony import */ var _helpers_globalTab__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./helpers/globalTab */ "./helpers/globalTab.js");


(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(_store__WEBPACK_IMPORTED_MODULE_1__["default"]);


/**
 * Components
 */



































/**
 * Hooks
 */















/**
 * Abstract
 */




/**
 * Context
 */



/**
 * Helpers
 */







/***/ },

/***/ "./store/actions.js"
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAction: () => (/* binding */ addAction),
/* harmony export */   addCallback: () => (/* binding */ addCallback),
/* harmony export */   addComputedField: () => (/* binding */ addComputedField),
/* harmony export */   clearCurrent: () => (/* binding */ clearCurrent),
/* harmony export */   editAction: () => (/* binding */ editAction),
/* harmony export */   editMeta: () => (/* binding */ editMeta),
/* harmony export */   openActionSettings: () => (/* binding */ openActionSettings),
/* harmony export */   registerAction: () => (/* binding */ registerAction),
/* harmony export */   registerActions: () => (/* binding */ registerActions),
/* harmony export */   registerCategory: () => (/* binding */ registerCategory),
/* harmony export */   setCurrentAction: () => (/* binding */ setCurrentAction),
/* harmony export */   setLoading: () => (/* binding */ setLoading),
/* harmony export */   setLoadingResult: () => (/* binding */ setLoadingResult),
/* harmony export */   setMeta: () => (/* binding */ setMeta),
/* harmony export */   showActionsInserterModal: () => (/* binding */ showActionsInserterModal),
/* harmony export */   updateCurrentConditions: () => (/* binding */ updateCurrentConditions),
/* harmony export */   updateCurrentSettings: () => (/* binding */ updateCurrentSettings)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/constants.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./store/functions.js");


function setCurrentAction(item = {}) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_ACTION,
    item
  };
}
function setMeta(item) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_META,
    item
  };
}
function editMeta(item) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.EDIT_META,
    item
  };
}
function clearCurrent() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.CLEAR_CURRENT
  };
}
function setLoading(loadingState) {
  var _loadingState$loading, _loadingState$state;
  (_loadingState$loading = loadingState.loading) !== null && _loadingState$loading !== void 0 ? _loadingState$loading : loadingState.loading = true;
  (_loadingState$state = loadingState.state) !== null && _loadingState$state !== void 0 ? _loadingState$state : loadingState.state = 'loading';
  return ({
    dispatch,
    select
  }) => {
    const actionIndex = select.getLoadingIndex(loadingState.id);
    const loading = [...select.getAllLoading()];
    if (actionIndex !== -1) {
      loading[actionIndex] = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getLoadingItem)(loadingState);
    } else {
      loading.push((0,_functions__WEBPACK_IMPORTED_MODULE_1__.getLoadingItem)(loadingState));
    }
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_LOADING,
      payload: loading
    });
  };
}
function setLoadingResult(item) {
  return ({
    dispatch
  }) => {
    dispatch.setLoading({
      id: item.id,
      state: item.success ? 'is-valid' : 'is-invalid',
      success: item.success,
      response: item.response,
      loading: false
    });
  };
}
function updateCurrentSettings(item) {
  return ({
    select,
    dispatch
  }) => {
    const currentAction = select.getCurrentAction();
    const updateSettings = {
      ...select.getCurrentSettings(),
      ...item
    };
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_ACTION,
      item: {
        ...currentAction,
        settings: {
          ...currentAction.settings,
          [currentAction.type]: updateSettings
        }
      }
    });
  };
}
function updateCurrentConditions(item) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.UPDATE_CURRENT_CONDITIONS,
    item
  };
}
function registerActions(types) {
  return ({
    dispatch
  }) => {
    for (const actionType of types) {
      dispatch.registerAction(actionType);
    }
  };
}
function registerAction(actionSettings) {
  return ({
    select,
    dispatch
  }) => {
    const action = select.getAction(actionSettings.type);
    if (!action) {
      dispatch.addAction(actionSettings);
      return;
    }
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.EDIT_ACTION,
      actionSettings
    });
  };
}

/**
 * @param  category {{ type: string, label: string }}
 * @return {{type: string, category}}
 */
function registerCategory(category) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER_CATEGORY,
    category
  };
}
function addAction(actionSettings) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER_ACTION,
    actionSettings
  };
}

/**
 * @deprecated 3.4.0. Use registerAction instead of this
 *
 * @param  actionType
 * @param  callback
 * @return {(function({dispatch: *}): void)|*}
 */
function addCallback(actionType, callback) {
  return ({
    dispatch
  }) => {
    dispatch.registerAction({
      type: actionType,
      edit: callback
    });
  };
}
function addComputedField(field, settings = {}) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.ADD_COMPUTED_FIELD,
    field,
    settings
  };
}

/**
 * @deprecated 3.4.0. Use registerAction instead of this
 *
 * @param  actionType
 * @param  replace
 * @return {(function({dispatch: *}): void)|*}
 */
function editAction(actionType, replace) {
  return ({
    dispatch
  }) => {
    dispatch.registerAction({
      ...replace,
      type: actionType
    });
  };
}
function openActionSettings({
  item,
  index,
  scenario = ''
}) {
  return ({
    dispatch
  }) => {
    dispatch.setCurrentAction({
      ...item,
      index
    });
    dispatch.setMeta({
      index,
      modalType: 'settings',
      scenario
    });
  };
}

/**
 * @param show {Boolean}
 */
function showActionsInserterModal(show) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.SHOW_ACTIONS_INSERTER_MODAL,
    show
  };
}

/***/ },

/***/ "./store/categories.js"
/*!*****************************!*\
  !*** ./store/categories.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  type: 'communication',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Communication & Notifications', 'jet-form-builder')
}, {
  type: 'user',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('User Management', 'jet-form-builder')
}, {
  type: 'content',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content & Data Management', 'jet-form-builder')
}, {
  type: 'advanced',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced Integration', 'jet-form-builder')
}]);

/***/ },

/***/ "./store/constants.js"
/*!****************************!*\
  !*** ./store/constants.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_COMPUTED_FIELD: () => (/* binding */ ADD_COMPUTED_FIELD),
/* harmony export */   CLEAR_CURRENT: () => (/* binding */ CLEAR_CURRENT),
/* harmony export */   EDIT_ACTION: () => (/* binding */ EDIT_ACTION),
/* harmony export */   EDIT_META: () => (/* binding */ EDIT_META),
/* harmony export */   REGISTER_ACTION: () => (/* binding */ REGISTER_ACTION),
/* harmony export */   REGISTER_CATEGORY: () => (/* binding */ REGISTER_CATEGORY),
/* harmony export */   SET_CURRENT_ACTION: () => (/* binding */ SET_CURRENT_ACTION),
/* harmony export */   SET_LOADING: () => (/* binding */ SET_LOADING),
/* harmony export */   SET_META: () => (/* binding */ SET_META),
/* harmony export */   SHOW_ACTIONS_INSERTER_MODAL: () => (/* binding */ SHOW_ACTIONS_INSERTER_MODAL),
/* harmony export */   UPDATE_CURRENT_CONDITIONS: () => (/* binding */ UPDATE_CURRENT_CONDITIONS)
/* harmony export */ });
const SET_CURRENT_ACTION = 'SET_CURRENT_ACTION';
const SET_LOADING = 'SET_LOADING';
const UPDATE_CURRENT_CONDITIONS = 'UPDATE_ACTION_CONDITIONS';
const SET_META = 'SET_CURRENT_META';
const EDIT_META = 'EDIT_CURRENT_META';
const CLEAR_CURRENT = 'CLEAR_CURRENT';
const ADD_COMPUTED_FIELD = 'ADD_COMPUTED_FIELD';
const EDIT_ACTION = 'EDIT_ACTION';
const REGISTER_ACTION = 'REGISTER_ACTION';
const REGISTER_CATEGORY = 'REGISTER_CATEGORY';
const SHOW_ACTIONS_INSERTER_MODAL = 'SHOW_ACTIONS_INSERTER_MODAL';

/***/ },

/***/ "./store/default.state.js"
/*!********************************!*\
  !*** ./store/default.state.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./store/functions.js");
/* harmony import */ var _pro_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pro.actions */ "./store/pro.actions.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./store/categories.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  currentAction: {},
  types: [..._pro_actions__WEBPACK_IMPORTED_MODULE_1__["default"]],
  categories: [..._categories__WEBPACK_IMPORTED_MODULE_2__["default"]],
  meta: {},
  loadingState: [(0,_functions__WEBPACK_IMPORTED_MODULE_0__.getLoadingItem)()],
  computedFields: [],
  showActionsInserterModal: false
});

/***/ },

/***/ "./store/functions.js"
/*!****************************!*\
  !*** ./store/functions.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoadingItem: () => (/* binding */ getLoadingItem)
/* harmony export */ });
/* harmony import */ var _loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.state */ "./store/loading.state.js");

const getLoadingItem = (additional = {}) => {
  const item = {
    ..._loading_state__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
  if (additional.state) {
    item.buttonClassName = ['jet-form-validate-button', additional.state];
  }
  return {
    ...item,
    ...additional
  };
};

/***/ },

/***/ "./store/index.js"
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./store/selectors.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




const STORE_NAME = 'jet-forms/actions';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.createReduxStore)(STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__
}));

/***/ },

/***/ "./store/loading.state.js"
/*!********************************!*\
  !*** ./store/loading.state.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  id: -1,
  state: '',
  success: false,
  response: {},
  loading: false,
  buttonClassName: ['jet-form-validate-button']
});

/***/ },

/***/ "./store/pro.actions.js"
/*!******************************!*\
  !*** ./store/pro.actions.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js");


// eslint-disable-next-line import/no-extraneous-dependencies

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  type: 'login',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('User Login', 'jet-form-builder'),
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
  disabled: true,
  category: 'user',
  proActionLink: 'https://jetformbuilder.com/addons/user-login/'
}, {
  type: 'redirect_to_woo_checkout',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add to Cart & Redirect to Checkout', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "0",
    fill: "none",
    width: "20",
    height: "20"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6 13h9c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1V4H2c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v2h13l-4 7H6v1zm-.5 3c.83 0 1.5.67 1.5 1.5S6.33 19 5.5 19 4 18.33 4 17.5 4.67 16 5.5 16zm9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
  }))),
  disabled: true,
  proActionLink: 'https://jetformbuilder.com/addons/woocommerce-cart-checkout-action/'
}]);

/***/ },

/***/ "./store/reducer.js"
/*!**************************!*\
  !*** ./store/reducer.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, "name", { value: "default", configurable: true });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/constants.js");
/* harmony import */ var _helpers_withActionLocalizeScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/withActionLocalizeScript */ "./helpers/withActionLocalizeScript.js");
/* harmony import */ var _default_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.state */ "./store/default.state.js");




// eslint-disable-next-line max-lines-per-function
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = _default_state__WEBPACK_IMPORTED_MODULE_2__["default"], action) {
  switch (action?.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SET_CURRENT_ACTION:
      const update = {};
      if (typeof action.item === 'function') {
        update.currentAction = action.item(state.currentAction);
      } else {
        update.currentAction = action.item;
      }
      return {
        ...state,
        ...update
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SET_META:
      return {
        ...state,
        meta: {
          ...action.item
        }
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.EDIT_META:
      return {
        ...state,
        meta: {
          ...state.meta,
          ...action.item
        }
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.CLEAR_CURRENT:
      return {
        ...state,
        currentAction: {},
        meta: {}
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SET_LOADING:
      return {
        ...state,
        loadingState: action.payload
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.UPDATE_CURRENT_CONDITIONS:
      const {
        conditions = []
      } = state.currentAction;
      const updateConditions = typeof action.item === 'function' ? action.item(conditions) : action.item;
      return {
        ...state,
        currentAction: {
          ...state.currentAction,
          conditions: updateConditions
        }
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER_ACTION:
      const {
        actionSettings
      } = action;

      // backward compatibility
      if (!actionSettings.hasOwnProperty('label')) {
        actionSettings.label = window.jetFormActionTypes.find(currentAction => currentAction.id === actionSettings.type)?.name;
      }
      return {
        ...state,
        types: [...state.types, {
          ...actionSettings,
          edit: (0,_helpers_withActionLocalizeScript__WEBPACK_IMPORTED_MODULE_1__["default"])(actionSettings.type, actionSettings.edit)
        }]
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, {
          ...action.category
        }]
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.ADD_COMPUTED_FIELD:
      const computedFields = [...state.computedFields, {
        field: action.field,
        settings: action.settings
      }].sort((current, next) => {
        var _current$settings$pri, _next$settings$priori;
        return ((_current$settings$pri = current.settings?.priority) !== null && _current$settings$pri !== void 0 ? _current$settings$pri : 10) - ((_next$settings$priori = next.settings?.priority) !== null && _next$settings$priori !== void 0 ? _next$settings$priori : 10);
      });
      return {
        ...state,
        computedFields
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.EDIT_ACTION:
      const {
        actionSettings: editActionSettings
      } = action;
      if ('edit' in editActionSettings) {
        editActionSettings.edit = (0,_helpers_withActionLocalizeScript__WEBPACK_IMPORTED_MODULE_1__["default"])(editActionSettings.type, editActionSettings.edit);
      }
      const types = state.types.map(current => current.type !== editActionSettings.type ? current : {
        ...current,
        ...editActionSettings
      });
      return {
        ...state,
        types
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SHOW_ACTIONS_INSERTER_MODAL:
      return {
        ...state,
        showActionsInserterModal: action.show
      };
    default:
      return state;
  }
}

/***/ },

/***/ "./store/selectors.js"
/*!****************************!*\
  !*** ./store/selectors.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAction: () => (/* binding */ getAction),
/* harmony export */   getActions: () => (/* binding */ getActions),
/* harmony export */   getActionsMap: () => (/* binding */ getActionsMap),
/* harmony export */   getAllLoading: () => (/* binding */ getAllLoading),
/* harmony export */   getCategories: () => (/* binding */ getCategories),
/* harmony export */   getComputedFields: () => (/* binding */ getComputedFields),
/* harmony export */   getCurrentAction: () => (/* binding */ getCurrentAction),
/* harmony export */   getCurrentEdit: () => (/* binding */ getCurrentEdit),
/* harmony export */   getCurrentLoading: () => (/* binding */ getCurrentLoading),
/* harmony export */   getCurrentSettings: () => (/* binding */ getCurrentSettings),
/* harmony export */   getErrorVisibility: () => (/* binding */ getErrorVisibility),
/* harmony export */   getLoading: () => (/* binding */ getLoading),
/* harmony export */   getLoadingIndex: () => (/* binding */ getLoadingIndex),
/* harmony export */   getMetaIndex: () => (/* binding */ getMetaIndex),
/* harmony export */   getOpenScenario: () => (/* binding */ getOpenScenario),
/* harmony export */   getSortedActions: () => (/* binding */ getSortedActions),
/* harmony export */   isConditionalModal: () => (/* binding */ isConditionalModal),
/* harmony export */   isFixed: () => (/* binding */ isFixed),
/* harmony export */   isSettingsModal: () => (/* binding */ isSettingsModal),
/* harmony export */   isShowActionsInserterModal: () => (/* binding */ isShowActionsInserterModal)
/* harmony export */ });
/* harmony import */ var _loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.state */ "./store/loading.state.js");

function getLoadingIndex(state, actionId) {
  return state.loadingState.findIndex(action => action.id === actionId);
}
function getLoading(state, actionId) {
  const actionIndex = getLoadingIndex(state, actionId);
  return actionIndex !== -1 ? state.loadingState[actionIndex] : {
    ..._loading_state__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}
function getComputedFields(state) {
  return state.computedFields;
}
function getActionsMap(state) {
  const map = {};
  for (const listElement of state.types) {
    map[listElement.type] = listElement;
  }
  return map;
}
function getActions(state) {
  return state.types;
}
function getSortedActions(state) {
  // Step 1: Create a mapping of category type to its index
  const categoryOrder = {};
  state.categories.forEach((category, index) => {
    categoryOrder[category.type] = index;
  });

  // Step 2: Sort the actions array using the mapping
  return state.types.toSorted((prev, current) => {
    const prevOrder = categoryOrder.hasOwnProperty(prev.category) ? categoryOrder[prev.category] : Infinity;
    const currentOrder = categoryOrder.hasOwnProperty(current.category) ? categoryOrder[current.category] : Infinity;
    return prevOrder - currentOrder;
  });
}
function getCategories(state) {
  return state.categories;
}
function getAction(state, actionType) {
  return state.types.find(({
    type
  }) => type === actionType);
}
function isShowActionsInserterModal(state) {
  return state.showActionsInserterModal;
}
function isSettingsModal(state) {
  return 'settings' === state.meta?.modalType;
}
function isConditionalModal(state) {
  return 'conditions' === state.meta?.modalType;
}
function isFixed(state, actionType) {
  var _action$fixed;
  const action = getAction(state, actionType);
  return (_action$fixed = action?.fixed) !== null && _action$fixed !== void 0 ? _action$fixed : false;
}

/**
 * Use to determine how was opened the action settings modal
 *
 * @param  state
 * @return {string}
 */
function getOpenScenario(state) {
  return state.meta?.scenario;
}
function getMetaIndex(state) {
  return state.meta?.index;
}
function getErrorVisibility(state) {
  return state.meta?.errorsShow;
}
function getCurrentAction(state) {
  return state.currentAction;
}
function getCurrentEdit(state) {
  var _state$currentAction$;
  const type = (_state$currentAction$ = state.currentAction?.type) !== null && _state$currentAction$ !== void 0 ? _state$currentAction$ : false;
  return getAction(state, type)?.edit;
}
function getCurrentSettings(state) {
  var _state$currentAction$2, _state$currentAction$3, _settings$type;
  const settings = (_state$currentAction$2 = state.currentAction?.settings) !== null && _state$currentAction$2 !== void 0 ? _state$currentAction$2 : {};
  const type = (_state$currentAction$3 = state.currentAction?.type) !== null && _state$currentAction$3 !== void 0 ? _state$currentAction$3 : false;
  return (_settings$type = settings[type]) !== null && _settings$type !== void 0 ? _settings$type : {};
}
function getCurrentLoading(state) {
  const actionId = state.currentAction?.id;
  return getLoading(state, actionId);
}
function getAllLoading(state) {
  return state.loadingState;
}

/***/ },

/***/ "./utils/getActionDisplayName.js"
/*!***************************************!*\
  !*** ./utils/getActionDisplayName.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getActionDisplayName)
/* harmony export */ });
function getActionDisplayName(action = {}, fallbackLabel = '') {
  const editorName = action?.editor_name;
  if ('string' === typeof editorName && editorName.trim()) {
    return editorName.trim();
  }
  return fallbackLabel;
}

/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemBody.jsx"
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemBody.jsx ***!
  \************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cue09js{cursor:not-allowed;opacity:0.3;}.jet-form-action.draggable .cue09js{cursor:-webkit-grab;cursor:grab;opacity:1;}
.f13vj9vm{position:absolute;opacity:0;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;top:0;right:0;height:100%;background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 15%);padding:0 4px 0 25px;}.f13vj9vm.f13vj9vm{width:auto;}.rtl .f13vj9vm{left:0;padding:0 25px 0 4px;}
.a4jlrqo{position:relative;}.a4jlrqo:hover:not([data-title-editing="true"]) .f13vj9vm{opacity:1;pointer-events:auto;}.a4jlrqo[data-title-editing="true"] .f13vj9vm{opacity:0;pointer-events:none;}
.alc8tnc{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}
`, "",{"version":3,"sources":["webpack://./components/ActionItemBody.jsx"],"names":[],"mappings":"AAAA,SAAS,kBAAkB,CAAC,WAAW,CAAC,CAAC,oCAAoC,mBAAmB,CAAC,WAAW,CAAC,SAAS,CAAC;AACvH,UAAU,iBAAiB,CAAC,SAAS,CAAC,mCAAmC,CAAC,2BAA2B,CAAC,KAAK,CAAC,OAAO,CAAC,WAAW,CAAC,wFAAwF,CAAC,oBAAoB,CAAC,CAAC,mBAAmB,UAAU,CAAC,CAAC,eAAe,MAAM,CAAC,oBAAoB,CAAC;AACzT,SAAS,iBAAiB,CAAC,CAAC,0DAA0D,SAAS,CAAC,mBAAmB,CAAC,CAAC,8CAA8C,SAAS,CAAC,mBAAmB,CAAC;AACjM,SAAS,cAAc,CAAC,UAAU,CAAC,MAAM,CAAC,WAAW,CAAC","sourcesContent":[".cue09js{cursor:not-allowed;opacity:0.3;}.jet-form-action.draggable .cue09js{cursor:-webkit-grab;cursor:grab;opacity:1;}\n.f13vj9vm{position:absolute;opacity:0;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;top:0;right:0;height:100%;background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 15%);padding:0 4px 0 25px;}.f13vj9vm.f13vj9vm{width:auto;}.rtl .f13vj9vm{left:0;padding:0 25px 0 4px;}\n.a4jlrqo{position:relative;}.a4jlrqo:hover:not([data-title-editing=\"true\"]) .f13vj9vm{opacity:1;pointer-events:auto;}.a4jlrqo[data-title-editing=\"true\"] .f13vj9vm{opacity:0;pointer-events:none;}\n.alc8tnc{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemWrapper.jsx"
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemWrapper.jsx ***!
  \***************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.myen4j{margin-bottom:unset;}
.e9ooo02.e9ooo02{box-shadow:#cc1818 0 0 0 2px;}
.c131zb0w{-webkit-animation:show-current-c131zb0w 2s infinite;animation:show-current-c131zb0w 2s infinite;}@-webkit-keyframes show-current-c131zb0w{50%{box-shadow:rgba(3, 102, 214, 0.3) 0 0 0 3px;}}@keyframes show-current-c131zb0w{50%{box-shadow:rgba(3, 102, 214, 0.3) 0 0 0 3px;}}
.da595pz{background-image:repeating-linear-gradient(-45deg, #ffffff75 0 20px, #d5d5d57d 20px 40px);}
`, "",{"version":3,"sources":["webpack://./components/ActionItemWrapper.jsx"],"names":[],"mappings":"AAAA,QAAQ,mBAAmB,CAAC;AAC5B,iBAAiB,4BAA4B,CAAC;AAC9C,UAAU,mDAAmD,CAAC,2CAA2C,CAAC,CAAC,yCAAyC,IAAI,2CAA2C,CAAC,CAAC,CAAC,iCAAiC,IAAI,2CAA2C,CAAC,CAAC;AACxR,SAAS,yFAAyF,CAAC","sourcesContent":[".myen4j{margin-bottom:unset;}\n.e9ooo02.e9ooo02{box-shadow:#cc1818 0 0 0 2px;}\n.c131zb0w{-webkit-animation:show-current-c131zb0w 2s infinite;animation:show-current-c131zb0w 2s infinite;}@-webkit-keyframes show-current-c131zb0w{50%{box-shadow:rgba(3, 102, 214, 0.3) 0 0 0 3px;}}@keyframes show-current-c131zb0w{50%{box-shadow:rgba(3, 102, 214, 0.3) 0 0 0 3px;}}\n.da595pz{background-image:repeating-linear-gradient(-45deg, #ffffff75 0 20px, #d5d5d57d 20px 40px);}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionTitle.jsx"
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionTitle.jsx ***!
  \*********************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.a14pz2hj{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}
.a1yeh6gv{display:block;width:100%;padding:0;border:none;background:transparent;text-align:left;cursor:text;}
.an7tpyw{display:block;font-size:13px;line-height:1.4;overflow:hidden;text-overflow:ellipsis;}
.a1wl0ukk{width:100%;min-height:30px;padding:0 8px;border:1px solid #949494;border-radius:2px;font-size:13px;line-height:1.4;}
`, "",{"version":3,"sources":["webpack://./components/ActionTitle.jsx"],"names":[],"mappings":"AAAA,UAAU,cAAc,CAAC,UAAU,CAAC,MAAM,CAAC,WAAW,CAAC;AACvD,UAAU,aAAa,CAAC,UAAU,CAAC,SAAS,CAAC,WAAW,CAAC,sBAAsB,CAAC,eAAe,CAAC,WAAW,CAAC;AAC5G,SAAS,aAAa,CAAC,cAAc,CAAC,eAAe,CAAC,eAAe,CAAC,sBAAsB,CAAC;AAC7F,UAAU,UAAU,CAAC,eAAe,CAAC,aAAa,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,cAAc,CAAC,eAAe,CAAC","sourcesContent":[".a14pz2hj{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}\n.a1yeh6gv{display:block;width:100%;padding:0;border:none;background:transparent;text-align:left;cursor:text;}\n.an7tpyw{display:block;font-size:13px;line-height:1.4;overflow:hidden;text-overflow:ellipsis;}\n.a1wl0ukk{width:100%;min-height:30px;padding:0 8px;border:1px solid #949494;border-radius:2px;font-size:13px;line-height:1.4;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/ActionGridItem.jsx"
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/ActionGridItem.jsx ***!
  \**********************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ajopllc{margin:unset;text-align:center;font-size:15px;color:#1d2327;}
.c1j3i9l6{fill:currentColor;}
.odma714{opacity:0;position:absolute;width:100%;height:100%;z-index:1;top:0;left:0;background-color:rgba(255, 255, 255, 0.6);padding:1em;text-align:center;color:#1d2327;font-weight:600;cursor:auto;}
.fqw6jzj{cursor:pointer;padding:1.5em;border-radius:2px;border:1px solid #ddd;position:relative;color:#848485;}.fqw6jzj,.fqw6jzj .ajopllc,.fqw6jzj .odma714{-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}.fqw6jzj:hover{box-shadow:rgba(0, 0, 0, 0.16) 0 1px 4px;}.fqw6jzj:hover,.fqw6jzj:hover .ajopllc{color:var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));}.fqw6jzj.is-disabled,.fqw6jzj.is-disabled .ajopllc{color:#c7c7c7;}.fqw6jzj.is-disabled:hover>*:not(.odma714){-webkit-filter:blur(2px);filter:blur(2px);}.fqw6jzj.is-disabled:hover .odma714{opacity:1;}
`, "",{"version":3,"sources":["webpack://./components/AddAction/ActionGridItem.jsx"],"names":[],"mappings":"AAAA,SAAS,YAAY,CAAC,iBAAiB,CAAC,cAAc,CAAC,aAAa,CAAC;AACrE,UAAU,iBAAiB,CAAC;AAC5B,SAAS,SAAS,CAAC,iBAAiB,CAAC,UAAU,CAAC,WAAW,CAAC,SAAS,CAAC,KAAK,CAAC,MAAM,CAAC,yCAAyC,CAAC,WAAW,CAAC,iBAAiB,CAAC,aAAa,CAAC,eAAe,CAAC,WAAW,CAAC;AACrM,SAAS,cAAc,CAAC,aAAa,CAAC,iBAAiB,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,aAAa,CAAC,CAAC,6CAA6C,mCAAmC,CAAC,2BAA2B,CAAC,CAAC,eAAe,wCAAwC,CAAC,CAAC,uCAAuC,6EAA6E,CAAC,CAAC,mDAAmD,aAAa,CAAC,CAAC,2CAA2C,wBAAwB,CAAC,gBAAgB,CAAC,CAAC,oCAAoC,SAAS,CAAC","sourcesContent":[".ajopllc{margin:unset;text-align:center;font-size:15px;color:#1d2327;}\n.c1j3i9l6{fill:currentColor;}\n.odma714{opacity:0;position:absolute;width:100%;height:100%;z-index:1;top:0;left:0;background-color:rgba(255, 255, 255, 0.6);padding:1em;text-align:center;color:#1d2327;font-weight:600;cursor:auto;}\n.fqw6jzj{cursor:pointer;padding:1.5em;border-radius:2px;border:1px solid #ddd;position:relative;color:#848485;}.fqw6jzj,.fqw6jzj .ajopllc,.fqw6jzj .odma714{-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}.fqw6jzj:hover{box-shadow:rgba(0, 0, 0, 0.16) 0 1px 4px;}.fqw6jzj:hover,.fqw6jzj:hover .ajopllc{color:var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));}.fqw6jzj.is-disabled,.fqw6jzj.is-disabled .ajopllc{color:#c7c7c7;}.fqw6jzj.is-disabled:hover>*:not(.odma714){-webkit-filter:blur(2px);filter:blur(2px);}.fqw6jzj.is-disabled:hover .odma714{opacity:1;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/AddActionModal.jsx"
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/AddActionModal.jsx ***!
  \**********************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sfffqhk{text-align:center;}
`, "",{"version":3,"sources":["webpack://./components/AddAction/AddActionModal.jsx"],"names":[],"mappings":"AAAA,SAAS,iBAAiB,CAAC","sourcesContent":[".sfffqhk{text-align:center;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AllProActionsLink.js"
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AllProActionsLink.js ***!
  \**************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sauuswy{border-top:1px solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));margin-top:16px;margin-left:-16px;margin-bottom:-8px;padding-top:8px;}.sauuswy.sauuswy{width:calc(100% + 32px);}
`, "",{"version":3,"sources":["webpack://./components/AllProActionsLink.js"],"names":[],"mappings":"AAAA,SAAS,4FAA4F,CAAC,eAAe,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,eAAe,CAAC,CAAC,iBAAiB,uBAAuB,CAAC","sourcesContent":[".sauuswy{border-top:1px solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));margin-top:16px;margin-left:-16px;margin-bottom:-8px;padding-top:8px;}.sauuswy.sauuswy{width:calc(100% + 32px);}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EditActionConditionsButton.jsx"
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EditActionConditionsButton.jsx ***!
  \************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.s1ani5eo:not([data-conditions-count="0"])::after{content:attr(data-conditions-count);position:absolute;font-size:1.2em;background-color:var(--wp-admin-theme-color);color:#fff;padding:2px 4px;border-radius:6px;top:0;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-family:monospace;line-height:normal;}
`, "",{"version":3,"sources":["webpack://./components/EditActionConditionsButton.jsx"],"names":[],"mappings":"AAAA,kDAAkD,mCAAmC,CAAC,iBAAiB,CAAC,eAAe,CAAC,4CAA4C,CAAC,UAAU,CAAC,eAAe,CAAC,iBAAiB,CAAC,KAAK,CAAC,kCAAkC,CAAC,+BAA+B,CAAC,8BAA8B,CAAC,0BAA0B,CAAC,qBAAqB,CAAC,kBAAkB,CAAC","sourcesContent":[".s1ani5eo:not([data-conditions-count=\"0\"])::after{content:attr(data-conditions-count);position:absolute;font-size:1.2em;background-color:var(--wp-admin-theme-color);color:#fff;padding:2px 4px;border-radius:6px;top:0;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-family:monospace;line-height:normal;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EventsList.jsx"
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EventsList.jsx ***!
  \********************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ekbdm2s{padding:0 4px;border-radius:5px;color:#5c5c5c;font-size:0.9em;background-color:#f3f4f5;cursor:pointer;margin:auto;border:0;font-family:monospace;}.ekbdm2s:after{content:' X';font-weight:bold;}.ekbdm2s:focus{outline:1px solid #5c5c5c;background-color:#e7e8e9;}
`, "",{"version":3,"sources":["webpack://./components/EventsList.jsx"],"names":[],"mappings":"AAAA,SAAS,aAAa,CAAC,iBAAiB,CAAC,aAAa,CAAC,eAAe,CAAC,wBAAwB,CAAC,cAAc,CAAC,WAAW,CAAC,QAAQ,CAAC,qBAAqB,CAAC,CAAC,eAAe,YAAY,CAAC,gBAAgB,CAAC,CAAC,eAAe,yBAAyB,CAAC,wBAAwB,CAAC","sourcesContent":[".ekbdm2s{padding:0 4px;border-radius:5px;color:#5c5c5c;font-size:0.9em;background-color:#f3f4f5;cursor:pointer;margin:auto;border:0;font-family:monospace;}.ekbdm2s:after{content:' X';font-weight:bold;}.ekbdm2s:focus{outline:1px solid #5c5c5c;background-color:#e7e8e9;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/FieldsMapField.jsx"
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/FieldsMapField.jsx ***!
  \************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.s5b5a3p{padding:1em;}
`, "",{"version":3,"sources":["webpack://./components/FieldsMapField.jsx"],"names":[],"mappings":"AAAA,SAAS,WAAW,CAAC","sourcesContent":[".s5b5a3p{padding:1em;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/TableList.jsx"
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/TableList.jsx ***!
  \*******************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.s1goy86j{padding:1em;}
`, "",{"version":3,"sources":["webpack://./components/TableList.jsx"],"names":[],"mappings":"AAAA,UAAU,WAAW,CAAC","sourcesContent":[".s1goy86j{padding:1em;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../../../node_modules/css-loader/dist/runtime/api.js"
/*!***************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************/
(module) {



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

/***/ },

/***/ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!**********************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \**********************************************************************/
(module) {



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

/***/ },

/***/ "./components/ActionItemBody.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemBody.jsx"
/*!****************************************************************************************************************************************************************************!*\
  !*** ./components/ActionItemBody.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemBody.jsx ***!
  \****************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemBody_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ActionItemBody.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemBody.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemBody_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemBody_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemBody_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemBody_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./components/ActionItemWrapper.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemWrapper.jsx"
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./components/ActionItemWrapper.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemWrapper.jsx ***!
  \**********************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemWrapper_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ActionItemWrapper.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionItemWrapper.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemWrapper_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemWrapper_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemWrapper_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionItemWrapper_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./components/ActionTitle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionTitle.jsx"
/*!**********************************************************************************************************************************************************************!*\
  !*** ./components/ActionTitle.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionTitle.jsx ***!
  \**********************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionTitle_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ActionTitle.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/ActionTitle.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionTitle_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionTitle_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionTitle_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionTitle_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./components/AddAction/ActionGridItem.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/ActionGridItem.jsx"
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./components/AddAction/ActionGridItem.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/ActionGridItem.jsx ***!
  \************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionGridItem_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./ActionGridItem.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/ActionGridItem.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionGridItem_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionGridItem_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionGridItem_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_ActionGridItem_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./components/AddAction/AddActionModal.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/AddActionModal.jsx"
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./components/AddAction/AddActionModal.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/AddActionModal.jsx ***!
  \************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AddActionModal_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./AddActionModal.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AddAction/AddActionModal.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AddActionModal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AddActionModal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AddActionModal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AddActionModal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./components/AllProActionsLink.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AllProActionsLink.js"
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./components/AllProActionsLink.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AllProActionsLink.js ***!
  \*********************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AllProActionsLink_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./AllProActionsLink.js */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/AllProActionsLink.js");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AllProActionsLink_js__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AllProActionsLink_js__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AllProActionsLink_js__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_AllProActionsLink_js__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./components/EditActionConditionsButton.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EditActionConditionsButton.jsx"
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./components/EditActionConditionsButton.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EditActionConditionsButton.jsx ***!
  \****************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EditActionConditionsButton_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./EditActionConditionsButton.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EditActionConditionsButton.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EditActionConditionsButton_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EditActionConditionsButton_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EditActionConditionsButton_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EditActionConditionsButton_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./components/EventsList.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EventsList.jsx"
/*!********************************************************************************************************************************************************************!*\
  !*** ./components/EventsList.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EventsList.jsx ***!
  \********************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EventsList_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./EventsList.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/EventsList.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EventsList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EventsList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EventsList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_EventsList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./components/FieldsMapField.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/FieldsMapField.jsx"
/*!****************************************************************************************************************************************************************************!*\
  !*** ./components/FieldsMapField.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/FieldsMapField.jsx ***!
  \****************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_FieldsMapField_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./FieldsMapField.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/FieldsMapField.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_FieldsMapField_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_FieldsMapField_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_FieldsMapField_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_FieldsMapField_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./components/TableList.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/TableList.jsx"
/*!******************************************************************************************************************************************************************!*\
  !*** ./components/TableList.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/TableList.jsx ***!
  \******************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_TableList_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./TableList.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./components/TableList.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_TableList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_TableList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_TableList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_TableList_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!**************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!********************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!********************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!*************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*************************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*******************************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "jet-form-builder-components"
/*!*************************************!*\
  !*** external ["jfb","components"] ***!
  \*************************************/
(module) {

module.exports = window["jfb"]["components"];

/***/ },

/***/ "jet-form-builder-data"
/*!*******************************!*\
  !*** external ["jfb","data"] ***!
  \*******************************/
(module) {

module.exports = window["jfb"]["data"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/compose"
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["compose"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["primitives"];

/***/ },

/***/ "../../../../node_modules/@linaria/core/dist/index.mjs"
/*!*************************************************************!*\
  !*** ../../../../node_modules/@linaria/core/dist/index.mjs ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css_default),
/* harmony export */   cx: () => (/* binding */ cx_default)
/* harmony export */ });
// src/css.ts
var idx = 0;
var css = () => {
  if (false) // removed by dead control flow
{}
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

/***/ },

/***/ "../../../../node_modules/@linaria/react/dist/index.mjs"
/*!**************************************************************!*\
  !*** ../../../../node_modules/@linaria/react/dist/index.mjs ***!
  \**************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
  if (false) // removed by dead control flow
{}
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
        return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(tag, filteredProps);
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(component, filteredProps);
    };
    const Result = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef ? (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(render) : (
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

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	(window.jfb = window.jfb || {}).actions = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQU1BO0FBVUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBSUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFLQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BOQTtBQUVBOztBQUlBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFHQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBT0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBR0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQWFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7Ozs7O0FFQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2Vtb3Rpb24taXMtcHJvcC12YWxpZC5lc20uanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuZXNtLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9pY29uL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L2NoZXZyb24tbGVmdC1zbWFsbC5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9jaGV2cm9uLXJpZ2h0LXNtYWxsLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L2Nsb3NlLXNtYWxsLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L2Nsb3NlLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L2NvbW1lbnQtYXV0aG9yLWF2YXRhci5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9kcmFnLWhhbmRsZS5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9lZGl0LmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L3BlbmNpbC5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9wbHVnaW5zLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L3BsdXMuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvc2Vlbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9zaHVmZmxlLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L3RyYXNoLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L3Vuc2Vlbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2Fic3RyYWN0L0FjdGlvbnNGbG93LmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vYWJzdHJhY3QvQmFzZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2Fic3RyYWN0L0Jhc2VDb21wdXRlZEZpZWxkLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9BY3Rpb25GZXRjaEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWN0aW9uSXRlbUJvZHkuanN4Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9BY3Rpb25JdGVtRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWN0aW9uSXRlbUhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0FjdGlvbkl0ZW1XcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWN0aW9uTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0FjdGlvbk1lc3NhZ2VzU2xvdEZpbGxzLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9BY3Rpb25Nb2RhbEJhY2tCdXR0b24uanN4Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9BY3Rpb25Nb2RhbENsb3NlQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWN0aW9uTW9kYWxIZWFkZXJTbG90RmlsbC5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWN0aW9uVGl0bGUuanN4Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9BY3Rpb25zQWZ0ZXJOZXdCdXR0b25TbG90RmlsbC5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWRkQWN0aW9uL0FjdGlvbkdyaWRJdGVtLmpzeCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWRkQWN0aW9uL0FkZEFjdGlvbkJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0FkZEFjdGlvbi9BZGRBY3Rpb25Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0FkZEFjdGlvbi91c2VDYXRlZ29yaWVzQW5kQWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0FsbFByb0FjdGlvbnNMaW5rLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9EZWxldGVBY3Rpb25CdXR0b24uanN4Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9FZGl0QWN0aW9uQ29uZGl0aW9uc0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0VkaXRBY3Rpb25TZXR0aW5nc0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvRXZlbnRzTGlzdC5qc3giLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0ZldGNoQWpheEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvRmV0Y2hBcGlCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0ZpZWxkc01hcEZpZWxkLmpzeCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvTGlzdEFjdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL1BsYWNlaG9sZGVyTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvUHJvQWN0aW9uT3ZlcmxheS5qc3giLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL1JlcXVlc3RCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL1JlcXVlc3RMb2FkaW5nQnV0dG9uLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9TaW5nbGVWYWx1ZUFzQXJyYXlUb2dnbGUuanN4Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9UYWJsZUxpc3QuanN4Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9Ub2dnbGVBY3Rpb25FeGVjdXRpb25CdXR0b24uanN4Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9WYWxpZGF0ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvVmFsaWRhdGVCdXR0b25XaXRoU3RvcmUuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL1ZhbGlkYXRlZFNlbGVjdENvbnRyb2wuanN4Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9WYWxpZGF0ZWRUZXh0Q29udHJvbC5qc3giLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL1ZhbGlkYXRvclByb3ZpZGVyLmpzeCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbnRleHQvQWN0aW9uTGlzdEl0ZW1Db250ZXh0LmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29udGV4dC9DdXJyZW50QWN0aW9uRWRpdENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9oZWxwZXJzL2FkZEFjdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hlbHBlcnMvYWRkQ29tcHV0ZWRGaWVsZC5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hlbHBlcnMvY29udmVydEZsb3cuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9oZWxwZXJzL2NvbnZlcnRMaXN0VG9GaWVsZHNNYXAuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9oZWxwZXJzL2dsb2JhbFRhYi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hlbHBlcnMvbGVnYWN5TG9jYWxpemUuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9oZWxwZXJzL3JlZ2lzdGVyQWN0aW9uLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vaGVscGVycy93aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9ob29rcy91c2VBY3Rpb25DYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hvb2tzL3VzZUFjdGlvbkVycm9ycy5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hvb2tzL3VzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vaG9va3MvdXNlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hvb2tzL3VzZUFjdGlvbnNFZGl0LmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vaG9va3MvdXNlQ3VycmVudEFjdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hvb2tzL3VzZUxvb3BlZEFjdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hvb2tzL3VzZVByZXZlbnRFZGl0b3JVbmRvSW5Nb2RhbC5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hvb2tzL3VzZVJlcXVlc3RGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9ob29rcy91c2VTdGF0ZUxvYWRpbmdDbGFzc2VzLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vaG9va3MvdXNlU3RhdGVWYWxpZENsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9ob29rcy91c2VVcGRhdGVDdXJyZW50QWN0aW9uLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vaG9va3MvdXNlVXBkYXRlQ3VycmVudEFjdGlvbk1ldGEuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9ob29rcy93aXRoQ3VycmVudEFjdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hvb2tzL3dpdGhEaXNwYXRjaEFjdGlvbkxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9ob29rcy93aXRoUmVxdWVzdEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2hvb2tzL3dpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vc3RvcmUvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL3N0b3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL3N0b3JlL2RlZmF1bHQuc3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9zdG9yZS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL3N0b3JlL2xvYWRpbmcuc3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9zdG9yZS9wcm8uYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi91dGlscy9nZXRBY3Rpb25EaXNwbGF5TmFtZS5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWN0aW9uSXRlbUJvZHkuanN4PzNhZTMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0FjdGlvbkl0ZW1XcmFwcGVyLmpzeD9hNWM1Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9BY3Rpb25UaXRsZS5qc3g/MjY5MSIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWRkQWN0aW9uL0FjdGlvbkdyaWRJdGVtLmpzeD9lOThlIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9BZGRBY3Rpb24vQWRkQWN0aW9uTW9kYWwuanN4P2Q5MjQiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0FsbFByb0FjdGlvbnNMaW5rLmpzPzU4YmIiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0VkaXRBY3Rpb25Db25kaXRpb25zQnV0dG9uLmpzeD82ZDY1Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9FdmVudHNMaXN0LmpzeD8wMjljIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9GaWVsZHNNYXBGaWVsZC5qc3g/YzZjNCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvVGFibGVMaXN0LmpzeD80NTgwIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0FjdGlvbkl0ZW1Cb2R5LmpzeD9iYWJjIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9BY3Rpb25JdGVtV3JhcHBlci5qc3g/OWFjNSIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWN0aW9uVGl0bGUuanN4P2M4MTYiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL0FkZEFjdGlvbi9BY3Rpb25HcmlkSXRlbS5qc3g/NjY1YiIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvQWRkQWN0aW9uL0FkZEFjdGlvbk1vZGFsLmpzeD8zNDI1Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9BbGxQcm9BY3Rpb25zTGluay5qcz83ZjU3Iiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4vY29tcG9uZW50cy9FZGl0QWN0aW9uQ29uZGl0aW9uc0J1dHRvbi5qc3g/MDE4NSIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvRXZlbnRzTGlzdC5qc3g/Njg3NiIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uL2NvbXBvbmVudHMvRmllbGRzTWFwRmllbGQuanN4P2Q2NjgiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi9jb21wb25lbnRzL1RhYmxlTGlzdC5qc3g/NzA1OCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pmYi1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2pmYi1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYXBpRmV0Y2hcIl0iLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicHJpbWl0aXZlc1wiXSIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvY29yZS9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvcmVhY3QvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1hY3Rpb25zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9qZmItYWN0aW9ucy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vamZiLWFjdGlvbnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhYmJyfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRpc2FibGVSZW1vdGVQbGF5YmFja3xkb3dubG9hZHxkcmFnZ2FibGV8ZW5jVHlwZXxlbnRlcktleUhpbnR8ZmV0Y2hwcmlvcml0eXxmZXRjaFByaW9yaXR5fGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9wb3Zlcnxwb3BvdmVyVGFyZ2V0fHBvcG92ZXJUYXJnZXRBY3Rpb258cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHJhbnNsYXRlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5jcmVtZW50YWx8ZmFsbGJhY2t8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufG9wdGlvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpc1Byb3BWYWxpZCA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IHsgaXNQcm9wVmFsaWQgYXMgZGVmYXVsdCB9O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgeyBtZW1vaXplIGFzIGRlZmF1bHQgfTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG4vKiogQHR5cGVkZWYge3tpY29uOiBKU1guRWxlbWVudCwgc2l6ZT86IG51bWJlcn0gJiBpbXBvcnQoJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcycpLlNWR1Byb3BzfSBJY29uUHJvcHMgKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gU1ZHIGljb24uXG4gKlxuICogQHBhcmFtIHtJY29uUHJvcHN9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMgaWNvbiBpcyB0aGUgU1ZHIGNvbXBvbmVudCB0byByZW5kZXJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgaXMgYSBudW1iZXIgc3BlY2lmaXlpbmcgdGhlIGljb24gc2l6ZSBpbiBwaXhlbHNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyIHByb3BzIHdpbGwgYmUgcGFzc2VkIHRvIHdyYXBwZWQgU1ZHIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJ3JlYWN0JykuRm9yd2FyZGVkUmVmPEhUTUxFbGVtZW50Pn0gcmVmICAgVGhlIGZvcndhcmRlZCByZWYgdG8gdGhlIFNWRyBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSAgSWNvbiBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gSWNvbih7XG4gIGljb24sXG4gIHNpemUgPSAyNCxcbiAgLi4ucHJvcHNcbn0sIHJlZikge1xuICByZXR1cm4gY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICB3aWR0aDogc2l6ZSxcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgLi4ucHJvcHMsXG4gICAgcmVmXG4gIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihJY29uKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgY2hldnJvbkxlZnRTbWFsbCA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIm0xMy4xIDE2LTMuNC00IDMuNC00IDEuMSAxLTIuNiAzIDIuNiAzLTEuMSAxelwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBjaGV2cm9uTGVmdFNtYWxsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hldnJvbi1sZWZ0LXNtYWxsLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgY2hldnJvblJpZ2h0U21hbGwgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTAuODYyMiA4LjA0MDUzTDE0LjI4MDUgMTIuMDI4NkwxMC44NjIyIDE2LjAxNjdMOS43MjMyNyAxNS4wNDA1TDEyLjMwNDkgMTIuMDI4Nkw5LjcyMzI3IDkuMDE2NzJMMTAuODYyMiA4LjA0MDUzWlwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBjaGV2cm9uUmlnaHRTbWFsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoZXZyb24tcmlnaHQtc21hbGwuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBjbG9zZVNtYWxsID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTEyIDEzLjA2bDMuNzEyIDMuNzEzIDEuMDYxLTEuMDZMMTMuMDYxIDEybDMuNzEyLTMuNzEyLTEuMDYtMS4wNkwxMiAxMC45MzggOC4yODggNy4yMjdsLTEuMDYxIDEuMDZMMTAuOTM5IDEybC0zLjcxMiAzLjcxMiAxLjA2IDEuMDYxTDEyIDEzLjA2MXpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgY2xvc2VTbWFsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsb3NlLXNtYWxsLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgY2xvc2UgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTMgMTEuOGw2LjEtNi4zLTEtMS02LjEgNi4yLTYuMS02LjItMSAxIDYuMSA2LjMtNi41IDYuNyAxIDEgNi41LTYuNiA2LjUgNi42IDEtMXpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgY2xvc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbG9zZS5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgUGF0aCwgU1ZHIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGNvbW1lbnRBdXRob3JBdmF0YXIgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBkOiBcIk03LjI1IDE2LjQzN2E2LjUgNi41IDAgMSAxIDkuNSAwVjE2QTIuNzUgMi43NSAwIDAgMCAxNCAxMy4yNWgtNEEyLjc1IDIuNzUgMCAwIDAgNy4yNSAxNnYuNDM3Wm0xLjUgMS4xOTNhNi40NyA2LjQ3IDAgMCAwIDMuMjUuODcgNi40NyA2LjQ3IDAgMCAwIDMuMjUtLjg3VjE2YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNWgtNGMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2MS42M1pNNCAxMmE4IDggMCAxIDEgMTYgMCA4IDggMCAwIDEtMTYgMFptMTAtMmEyIDIgMCAxIDEtNCAwIDIgMiAwIDAgMSA0IDBaXCIsXG4gIGNsaXBSdWxlOiBcImV2ZW5vZGRcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgY29tbWVudEF1dGhvckF2YXRhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1lbnQtYXV0aG9yLWF2YXRhci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGRyYWdIYW5kbGUgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB3aWR0aDogXCIyNFwiLFxuICBoZWlnaHQ6IFwiMjRcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTggN2gyVjVIOHYyem0wIDZoMnYtMkg4djJ6bTAgNmgydi0ySDh2MnptNi0xNHYyaDJWNWgtMnptMCA4aDJ2LTJoLTJ2MnptMCA2aDJ2LTJoLTJ2MnpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgZHJhZ0hhbmRsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRyYWctaGFuZGxlLmpzLm1hcCIsIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBwZW5jaWwgfSBmcm9tICcuL3BlbmNpbCc7XG5leHBvcnQgZGVmYXVsdCBwZW5jaWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lZGl0LmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgcGVuY2lsID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwibTE5IDctMy0zLTguNSA4LjUtMSA0IDQtMUwxOSA3Wm0tNyAxMS41SDVWMjBoN3YtMS41WlwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBwZW5jaWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wZW5jaWwuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBwbHVnaW5zID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTEwLjUgNHY0aDNWNEgxNXY0aDEuNWExIDEgMCAwMTEgMXY0bC0zIDR2MmExIDEgMCAwMS0xIDFoLTNhMSAxIDAgMDEtMS0xdi0ybC0zLTRWOWExIDEgMCAwMTEtMUg5VjRoMS41em0uNSAxMi41djJoMnYtMmwzLTR2LTNIOHYzbDMgNHpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2lucztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsdWdpbnMuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBwbHVzID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTExIDEyLjVWMTcuNUgxMi41VjEyLjVIMTcuNVYxMUgxMi41VjZIMTFWMTFINlYxMi41SDExWlwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBwbHVzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGx1cy5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IHNlZW4gPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMy45OTk2MSAxM0M0LjY3MDQzIDEzLjMzNTQgNC42NzAzIDEzLjMzNTcgNC42NzAxNyAxMy4zMzU5TDQuNjcyOTggMTMuMzMwNUM0LjY3NjIxIDEzLjMyNDIgNC42ODE4NCAxMy4zMTM1IDQuNjg5ODggMTMuMjk4NUM0LjcwNTk1IDEzLjI2ODYgNC43MzE2IDEzLjIyMTggNC43NjY5NSAxMy4xNjA4QzQuODM3NyAxMy4wMzg1IDQuOTQ2OTIgMTIuODU5MiA1LjA5NTQxIDEyLjY0MTlDNS4zOTMxMiAxMi4yMDYyIDUuODQ0MzYgMTEuNjI0IDYuNDU0MzUgMTEuMDQzMUM3LjY3MzA4IDkuODgyNDEgOS40OTcxOSA4Ljc1IDExLjk5OTYgOC43NUMxNC41MDIgOC43NSAxNi4zMjYxIDkuODgyNDEgMTcuNTQ0OSAxMS4wNDMxQzE4LjE1NDkgMTEuNjI0IDE4LjYwNjEgMTIuMjA2MiAxOC45MDM4IDEyLjY0MTlDMTkuMDUyMyAxMi44NTkyIDE5LjE2MTUgMTMuMDM4NSAxOS4yMzIzIDEzLjE2MDhDMTkuMjY3NiAxMy4yMjE4IDE5LjI5MzMgMTMuMjY4NiAxOS4zMDkzIDEzLjI5ODVDMTkuMzE3NCAxMy4zMTM1IDE5LjMyMyAxMy4zMjQyIDE5LjMyNjIgMTMuMzMwNUwxOS4zMjkxIDEzLjMzNTlDMTkuMzI4OSAxMy4zMzU3IDE5LjMyODggMTMuMzM1NCAxOS45OTk2IDEzQzIwLjY3MDQgMTIuNjY0NiAyMC42NzAzIDEyLjY2NDMgMjAuNjcwMSAxMi42NjRMMjAuNjY5NyAxMi42NjMyTDIwLjY2ODggMTIuNjYxNEwyMC42NjYyIDEyLjY1NjNMMjAuNjU4MyAxMi42NDA4QzIwLjY1MTcgMTIuNjI4MiAyMC42NDI3IDEyLjYxMDggMjAuNjMxIDEyLjU4OTJDMjAuNjA3OCAxMi41NDU5IDIwLjU3NDQgMTIuNDg1MiAyMC41MzA2IDEyLjQwOTZDMjAuNDQzMiAxMi4yNTg0IDIwLjMxNDEgMTIuMDQ3MSAyMC4xNDIzIDExLjc5NTZDMTkuNzk5NCAxMS4yOTM4IDE5LjI4MTkgMTAuNjI2IDE4LjU3OTQgOS45NTY5QzE3LjE3MzEgOC42MTc1OSAxNC45OTcyIDcuMjUgMTEuOTk5NiA3LjI1QzkuMDAyMDMgNy4yNSA2LjgyNjE0IDguNjE3NTkgNS40MTk4NyA5Ljk1NjlDNC43MTczNiAxMC42MjYgNC4xOTk4NCAxMS4yOTM4IDMuODU2OTQgMTEuNzk1NkMzLjY4NTExIDEyLjA0NzEgMy41NTYwNSAxMi4yNTg0IDMuNDY4NiAxMi40MDk2QzMuNDI0ODQgMTIuNDg1MiAzLjM5MTQyIDEyLjU0NTkgMy4zNjgxOCAxMi41ODkyQzMuMzU2NTYgMTIuNjEwOCAzLjM0NzQ4IDEyLjYyODIgMy4zNDA5MiAxMi42NDA4TDMuMzMyOTcgMTIuNjU2M0wzLjMzMDQxIDEyLjY2MTRMMy4zMjk0OCAxMi42NjMyTDMuMzI5MTEgMTIuNjY0QzMuMzI4OTQgMTIuNjY0MyAzLjMyODc5IDEyLjY2NDYgMy45OTk2MSAxM1pNMTEuOTk5NiAxNkMxMy45MzI2IDE2IDE1LjQ5OTYgMTQuNDMzIDE1LjQ5OTYgMTIuNUMxNS40OTk2IDEwLjU2NyAxMy45MzI2IDkgMTEuOTk5NiA5QzEwLjA2NjYgOSA4LjQ5OTYxIDEwLjU2NyA4LjQ5OTYxIDEyLjVDOC40OTk2MSAxNC40MzMgMTAuMDY2NiAxNiAxMS45OTk2IDE2WlwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBzZWVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2Vlbi5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IHNodWZmbGUgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL1NWR1wiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTcuMTkyIDYuNzVMMTUuNDcgNS4wM2wxLjA2LTEuMDYgMy41MzcgMy41My0zLjUzNyAzLjUzLTEuMDYtMS4wNiAxLjcyMy0xLjcyaC0zLjE5Yy0uNjAyIDAtLjk5My4yMDItMS4yOC40OTgtLjMwOS4zMTktLjUzOC43OTItLjY5NSAxLjM4My0uMTMuNDg4LS4yMjIgMS4wMjMtLjI5NiAxLjUwOC0uMDM0LjY2NC0uMTE2IDEuNDEzLS4zMDMgMi4xMTctLjE5My43MjEtLjUxMyAxLjQ2Ny0xLjA2OCAyLjA0LS41NzUuNTk0LTEuMzU5Ljk1NC0yLjM1Ny45NTRINHYtMS41aDQuMDAzYy42MDEgMCAuOTkzLS4yMDIgMS4yOC0uNDk4LjMwOC0uMzE5LjUzOC0uNzkyLjY5NS0xLjM4My4xNDktLjU1Ny4yMTYtMS4wOTMuMjg4LTEuNjYybC4wMzktLjMxYTkuNjUzIDkuNjUzIDAgMCAxIC4yNzItMS42NTNjLjE5My0uNzIyLjUxMy0xLjQ2NyAxLjA2Ny0yLjA0LjU3Ni0uNTk0IDEuMzYtLjk1NCAyLjM1OC0uOTU0aDMuMTl6TTguMDA0IDYuNzVjLjggMCAxLjQ2LjIzIDEuOTg4LjYyOGE2LjI0IDYuMjQgMCAwIDAtLjY4NCAxLjM5NiAxLjcyNSAxLjcyNSAwIDAgMC0uMDI0LS4wMjZjLS4yODctLjI5Ni0uNjc5LS40OTgtMS4yOC0uNDk4SDR2LTEuNWg0LjAwM3pNMTIuNjk5IDE0LjcyNmMtLjE2MS40NTktLjM4Ljk0LS42ODQgMS4zOTYuNTI3LjM5NyAxLjE4OC42MjggMS45ODguNjI4aDMuMTlsLTEuNzIyIDEuNzIgMS4wNiAxLjA2TDIwLjA2NyAxNmwtMy41MzctMy41My0xLjA2IDEuMDYgMS43MjMgMS43MmgtMy4xOWMtLjYwMiAwLS45OTMtLjIwMi0xLjI4LS40OThhMS45NiAxLjk2IDAgMCAxLS4wMjQtLjAyNnpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgc2h1ZmZsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNodWZmbGUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCB0cmFzaCA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgZDogXCJNMTIgNS41QTIuMjUgMi4yNSAwIDAgMCA5Ljg3OCA3aDQuMjQ0QTIuMjUxIDIuMjUxIDAgMCAwIDEyIDUuNVpNMTIgNGEzLjc1MSAzLjc1MSAwIDAgMC0zLjY3NSAzSDV2MS41aDEuMjdsLjgxOCA4Ljk5N2EyLjc1IDIuNzUgMCAwIDAgMi43MzkgMi41MDFoNC4zNDdhMi43NSAyLjc1IDAgMCAwIDIuNzM4LTIuNUwxNy43MyA4LjVIMTlWN2gtMy4zMjVBMy43NTEgMy43NTEgMCAwIDAgMTIgNFptNC4yMjQgNC41SDcuNzc2bC44MDYgOC44NjFhMS4yNSAxLjI1IDAgMCAwIDEuMjQ1IDEuMTM3aDQuMzQ3YTEuMjUgMS4yNSAwIDAgMCAxLjI0NS0xLjEzN2wuODA1LTguODYxWlwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCB0cmFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYXNoLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgdW5zZWVuID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTQuNjcgMTAuNjY0cy0yLjA5IDEuMTEtMi45MTcgMS41ODJsLjQ5NC44NyAxLjYwOC0uOTE0LjAwMi4wMDJjLjM0My41MDIuODYgMS4xNyAxLjU2MyAxLjg0LjM0OC4zMy43NDIuNjYzIDEuMTg1Ljk3Nkw1LjU3IDE2Ljc0NGwuODU4LjUxNSAxLjAyLTEuNzAxYTkuMSA5LjEgMCAwIDAgNC4wNTEgMS4xOFYxOWgxdi0yLjI2M2E5LjEgOS4xIDAgMCAwIDQuMDUtMS4xOGwxLjAyMSAxLjcuODU4LS41MTQtMS4wMzQtMS43MjNjLjQ0Mi0uMzEzLjgzNy0uNjQ2IDEuMTg0LS45NzcuNzAzLS42NjkgMS4yMi0xLjMzNyAxLjU2My0xLjgzOWwuMDAyLS4wMDMgMS42MS45MTQuNDkzLS44N2MtMS43NS0uOTk0LTIuOTE4LTEuNTgtMi45MTgtMS41OGwtLjAwMy4wMDVhOC4yOSA4LjI5IDAgMCAxLS40MjIuNjg5IDEwLjA5NyAxMC4wOTcgMCAwIDEtMS4zNiAxLjU5OGMtMS4yMTggMS4xNi0zLjA0MiAyLjI5My01LjU0NCAyLjI5My0yLjUwMyAwLTQuMzI3LTEuMTMyLTUuNTQ2LTIuMjkzYTEwLjA5OSAxMC4wOTkgMCAwIDEtMS4zNTktMS41OTkgOC4yNjcgOC4yNjcgMCAwIDEtLjQyMi0uNjg5bC0uMDAzLS4wMDVaXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHVuc2Vlbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuc2Vlbi5qcy5tYXAiLCJpbXBvcnQgQmFzZUFjdGlvbiBmcm9tICcuL0Jhc2VBY3Rpb24nO1xuXG5mdW5jdGlvbiBBY3Rpb25zRmxvdyggbGlzdCA9IG51bGwgKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7QmFzZUFjdGlvbltdfVxuXHQgKi9cblx0dGhpcy5saXN0ID0gbGlzdDtcbn1cblxuQWN0aW9uc0Zsb3cucHJvdG90eXBlID0ge1xuXHRzZXRMaXN0KCBsaXN0ICkge1xuXHRcdHRoaXMubGlzdCA9IGxpc3Q7XG5cdH0sXG5cdHJlc2V0SUQoKSB7XG5cdFx0Zm9yICggY29uc3QgYWN0aW9uIG9mIHRoaXMubGlzdCApIHtcblx0XHRcdGFjdGlvbi5yZXNldElEKCk7XG5cdFx0fVxuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtICB0eXBlIHtTdHJpbmd9XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNUeXBlKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLmxpc3Quc29tZSggY3VycmVudCA9PiBjdXJyZW50LnR5cGUgPT09IHR5cGUgKTtcblx0fSxcblx0YWRkKCBwcm9wcyApIHtcblx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgcHJvcHMgKSB7XG5cdFx0XHRwcm9wcyA9IHsgdHlwZTogcHJvcHMgfTtcblx0XHR9XG5cblx0XHR0aGlzLmxpc3QucHVzaCggbmV3IEJhc2VBY3Rpb24oIHByb3BzICkgKTtcblx0fSxcbn07XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgPSB3aW5kb3cuSmV0RkJDb21wb25lbnRzIHx8IHt9O1xud2luZG93LkpldEZCQ29tcG9uZW50cy5BY3Rpb25zRmxvdyA9IEFjdGlvbnNGbG93O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zRmxvdzsiLCJmdW5jdGlvbiBCYXNlQWN0aW9uKCBwcm9wcyA9IG51bGwgKSB7XG5cdHRoaXMuaW5pdERhdGEoIHByb3BzICk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUlEKCkge1xuXHRyZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDg5OTkgKSArIDEwMDA7XG59XG5cbkJhc2VBY3Rpb24ucHJvdG90eXBlLmluaXREYXRhID0gZnVuY3Rpb24gKCBwcm9wcyApIHtcblx0dGhpcy5pZCAgICAgICAgID0gcHJvcHM/LmlkID8/IGdldFJhbmRvbUlEKCk7XG5cdHRoaXMuc2V0dGluZ3MgICA9IHByb3BzPy5zZXR0aW5ncyA/PyB7fTtcblx0dGhpcy50eXBlICAgICAgID0gcHJvcHM/LnR5cGUgPz8gJ3NlbmRfZW1haWwnO1xuXHR0aGlzLmVkaXRvcl9uYW1lID0gcHJvcHM/LmVkaXRvcl9uYW1lID8/ICcnO1xuXHR0aGlzLmNvbmRpdGlvbnMgPSBwcm9wcz8uY29uZGl0aW9ucyA/PyBbXTtcblx0dGhpcy5ldmVudHMgICAgID0gcHJvcHM/LmV2ZW50cyA/PyBbXTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMsICdzZWxmU2V0dGluZ3MnLCB7XG5cdFx0Z2V0OiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSggdGhpcy50eXBlID8/ICcnIClcblx0XHRcdCAgICAgICA/IHRoaXMuc2V0dGluZ3NbIHRoaXMudHlwZSBdXG5cdFx0XHQgICAgICAgOiB7fTtcblx0XHR9LFxuXHRcdHNldDogdmFsdWUgPT4ge1xuXHRcdFx0aWYgKCAhdGhpcy5zZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSggdGhpcy50eXBlID8/ICcnICkgKSB7XG5cdFx0XHRcdHRoaXMuc2V0dGluZ3NbIHRoaXMudHlwZSBdID0ge307XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0dGluZ3NbIHRoaXMudHlwZSBdID0ge1xuXHRcdFx0XHQuLi50aGlzLnNldHRpbmdzWyB0aGlzLnR5cGUgXSxcblx0XHRcdFx0Li4udmFsdWUsXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0gKTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMsICdpbmRleCcsIHtcblx0XHRnZXQ6ICgpID0+IHtcblx0XHRcdHJldHVybiBwcm9wcz8uaW5kZXggPz8gMDtcblx0XHR9LFxuXHR9ICk7XG59O1xuXG4vKipcbiAqIFVzZWQgaW4gY2FzZSwgd2hlbiB3ZSBjcmVhdGUgQmFzZUFjdGlvbiBpbnN0YW5jZVxuICogd2l0aCBzdWNoIHN0cnVjdHVyZTpcbiAqIHtcbiAqICAgICB0eXBlOiAnYWN0aW9uX3NsdWcnLFxuICogICAgIHNldHRpbmdzOiB7XG4gKiAgICAgICAgIHNldHRpbmdfMTogJ3ZhbHVlXzEnLFxuICogICAgICAgICBzZXR0aW5nXzI6ICd2YWx1ZV8yJ1xuICogICAgIH1cbiAqIH1cbiAqXG4gKiBCdXQgSmV0Rm9ybUJ1aWxkZXIgc3RvcmUgYWN0aW9uJ3MgZGF0YSBpbiBkaWZmZXJlbnQgd2F5LlxuICogU28gdG8gdHJhbnNmb3JtIHNldHRpbmdzIGludG8gdGhpcyBzdHJ1Y3R1cmU6XG4gKiB7XG4gKiAgICAgdHlwZTogJ2FjdGlvbl9zbHVnJyxcbiAqICAgICBzZXR0aW5nczoge1xuICogICAgICAgICBhY3Rpb25fc2x1Zzoge1xuICogICAgICAgICAgICAgIHNldHRpbmdfMTogJ3ZhbHVlXzEnLFxuICogICAgICAgICAgICAgIHNldHRpbmdfMjogJ3ZhbHVlXzInXG4gKiAgICAgICAgIH1cbiAqICAgICB9XG4gKiB9XG4gKiB3ZSB1c2UgdGhpcyBtZXRob2QuXG4gKi9cbkJhc2VBY3Rpb24ucHJvdG90eXBlLnJlZmFjdG9yU2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncztcblx0dGhpcy5zZXR0aW5ncyAgPSB7fTtcblxuXHR0aGlzLnNlbGZTZXR0aW5ncyA9IHNldHRpbmdzO1xufTtcblxuQmFzZUFjdGlvbi5wcm90b3R5cGUucmVzZXRJRCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5pZCA9IGdldFJhbmRvbUlEKCk7XG59O1xuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzID0gd2luZG93LkpldEZCQ29tcG9uZW50cyB8fCB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuQmFzZUFjdGlvbiA9IEJhc2VBY3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VBY3Rpb247XG4iLCJmdW5jdGlvbiBCYXNlQ29tcHV0ZWRGaWVsZCgpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtCYXNlQWN0aW9ufVxuXHQgKi9cblx0dGhpcy5hY3Rpb24gPSBudWxsO1xuXHR0aGlzLmhhc0luTGlzdCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSBhY3Rpb24ge0Jhc2VBY3Rpb259XG4gKiBAcGFyYW0gZmllbGRzIHtPYmplY3RbXX1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5CYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGFjdGlvbiwgZmllbGRzICkge1xuXHRyZXR1cm4gdGhpcy5nZXRTdXBwb3J0ZWRBY3Rpb25zKCkuaW5jbHVkZXMoIGFjdGlvbi50eXBlICk7XG59O1xuXG5CYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUuaXNTdXBwb3J0ZWRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbkJhc2VDb21wdXRlZEZpZWxkLnByb3RvdHlwZS5nZXRTdXBwb3J0ZWRBY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gW107XG59O1xuXG4vKipcbiAqIEBwYXJhbSBhY3Rpb24ge0Jhc2VBY3Rpb259XG4gKi9cbkJhc2VDb21wdXRlZEZpZWxkLnByb3RvdHlwZS5zZXRBY3Rpb24gPSBmdW5jdGlvbiAoIGFjdGlvbiApIHtcblx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuQmFzZUNvbXB1dGVkRmllbGQucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAnJztcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5CYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUuZ2V0TGFiZWwgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAnJztcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfEZ1bmN0aW9ufVxuICovXG5CYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUuZ2V0SGVscCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuICcnO1xufTtcblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHMgfHwge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLkJhc2VDb21wdXRlZEZpZWxkID0gQmFzZUNvbXB1dGVkRmllbGQ7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wdXRlZEZpZWxkOyIsImltcG9ydCB3aXRoQ3VycmVudEFjdGlvbiBmcm9tICcuLi9ob29rcy93aXRoQ3VycmVudEFjdGlvbic7XG5pbXBvcnQgd2l0aFNlbGVjdEFjdGlvbkxvYWRpbmcgZnJvbSAnLi4vaG9va3Mvd2l0aFNlbGVjdEFjdGlvbkxvYWRpbmcnO1xuaW1wb3J0IEZldGNoQXBpQnV0dG9uIGZyb20gJy4vRmV0Y2hBcGlCdXR0b24nO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuZnVuY3Rpb24gQWN0aW9uRmV0Y2hCdXR0b24oIHtcblx0Y3VycmVudEFjdGlvbixcblx0Li4ucHJvcHNcbn0gKSB7XG5cblx0cmV0dXJuIDxGZXRjaEFwaUJ1dHRvblxuXHRcdGlkPXsgY3VycmVudEFjdGlvbi5pZCB9XG5cdFx0eyAuLi5wcm9wcyB9XG5cdC8+O1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgICAgID0gd2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz8ge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLkFjdGlvbkZldGNoQnV0dG9uID0gQWN0aW9uRmV0Y2hCdXR0b247XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoIHdpdGhDdXJyZW50QWN0aW9uICksXG5cdHdpdGhTZWxlY3QoIHdpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nICksXG4pKCBBY3Rpb25GZXRjaEJ1dHRvbiApOyIsImltcG9ydCB7IEZsZXgsIENhcmRCb2R5IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IGRyYWdIYW5kbGUsIEljb24gfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcbmltcG9ydCBBY3Rpb25UaXRsZSBmcm9tICcuL0FjdGlvblRpdGxlJztcbmltcG9ydCBFZGl0QWN0aW9uU2V0dGluZ3NCdXR0b24gZnJvbSAnLi9FZGl0QWN0aW9uU2V0dGluZ3NCdXR0b24nO1xuaW1wb3J0IEVkaXRBY3Rpb25Db25kaXRpb25zQnV0dG9uIGZyb20gJy4vRWRpdEFjdGlvbkNvbmRpdGlvbnNCdXR0b24nO1xuaW1wb3J0IFRvZ2dsZUFjdGlvbkV4ZWN1dGlvbkJ1dHRvbiBmcm9tICcuL1RvZ2dsZUFjdGlvbkV4ZWN1dGlvbkJ1dHRvbic7XG5pbXBvcnQgRGVsZXRlQWN0aW9uQnV0dG9uIGZyb20gJy4vRGVsZXRlQWN0aW9uQnV0dG9uJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgdXNlTG9vcGVkQWN0aW9uIGZyb20gJy4uL2hvb2tzL3VzZUxvb3BlZEFjdGlvbic7XG5cbmNvbnN0IEN1cnNvcmVkSWNvbiA9IHN0eWxlZCggSWNvbiApYFxuXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRvcGFjaXR5OiAwLjM7XG5cblx0LmpldC1mb3JtLWFjdGlvbi5kcmFnZ2FibGUgJiB7XG5cdFx0Y3Vyc29yOiBncmFiO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cbmA7XG5cbmNvbnN0IEZsZXhBY3Rpb25CdXR0b25zID0gc3R5bGVkKCBGbGV4IClgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0b3BhY2l0eTogMDtcblx0dHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTUlKTtcblx0cGFkZGluZzogMCA0cHggMCAyNXB4O1xuXG5cdCYmIHtcblx0XHR3aWR0aDogYXV0bztcblx0fVxuXG5cdC5ydGwgJiB7XG5cdFx0bGVmdDogMDtcblx0XHRwYWRkaW5nOiAwIDI1cHggMCA0cHg7XG5cdH1cbmA7XG5cbmNvbnN0IEFjdGlvbkNhcmRCb2R5ID0gc3R5bGVkKCBDYXJkQm9keSApYFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0Jjpob3Zlcjpub3QoW2RhdGEtdGl0bGUtZWRpdGluZz1cInRydWVcIl0pIHtcblx0XHQkeyBGbGV4QWN0aW9uQnV0dG9ucyB9IHtcblx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRwb2ludGVyLWV2ZW50czogYXV0bztcblx0XHR9XG5cdH1cblxuXHQmW2RhdGEtdGl0bGUtZWRpdGluZz1cInRydWVcIl0ge1xuXHRcdCR7IEZsZXhBY3Rpb25CdXR0b25zIH0ge1xuXHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdH1cblx0fVxuYDtcblxuY29uc3QgQWN0aW9uVGl0bGVXcmFwID0gc3R5bGVkKCBGbGV4IClgXG5cdGZsZXg6IDE7XG5cdG1pbi13aWR0aDogMDtcbmA7XG5cbmZ1bmN0aW9uIEFjdGlvbkl0ZW1Cb2R5KCkge1xuXHRjb25zdCB7IGFjdGlvbiB9ID0gdXNlTG9vcGVkQWN0aW9uKCk7XG5cdGNvbnN0IFsgaXNUaXRsZUVkaXRpbmcsIHNldElzVGl0bGVFZGl0aW5nIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRjb25zdCBhY3Rpb25UeXBlID0gdXNlU2VsZWN0KCBzZWxlY3QgPT4gKFxuXHRcdHNlbGVjdCggJ2pldC1mb3Jtcy9hY3Rpb25zJyApLmdldEFjdGlvbiggYWN0aW9uLnR5cGUgKVxuXHQpLCBbIGFjdGlvbi50eXBlIF0gKTtcblxuXHRyZXR1cm4gPEFjdGlvbkNhcmRCb2R5IGRhdGEtdGl0bGUtZWRpdGluZz17IGlzVGl0bGVFZGl0aW5nID8gJ3RydWUnIDogdW5kZWZpbmVkIH0+XG5cdFx0eyB1bmRlZmluZWQgPT09IGFjdGlvblR5cGUgJiYgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuXHRcdFx0PHNtYWxsPkFjdGlvbiA8Yj4mcXVvdDt7IGFjdGlvbi50eXBlIH0mcXVvdDs8L2I+IGlzIG5vdCBzdXBwb3J0ZWQ8L3NtYWxsPlxuXHRcdFx0PERlbGV0ZUFjdGlvbkJ1dHRvbi8+XG5cdFx0PC9GbGV4PiB9XG5cblx0XHR7IHVuZGVmaW5lZCAhPT0gYWN0aW9uVHlwZSAmJiA8PlxuXHRcdFx0PEZsZXggYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGdhcD17IDEgfT5cblx0XHRcdFx0PEN1cnNvcmVkSWNvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZmItYWN0aW9uLWhhbmRsZScgfVxuXHRcdFx0XHRcdGljb249eyBkcmFnSGFuZGxlIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEFjdGlvblRpdGxlV3JhcCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCI+XG5cdFx0XHRcdFx0PEFjdGlvblRpdGxlIG9uRWRpdGluZ0NoYW5nZT17IHNldElzVGl0bGVFZGl0aW5nIH0vPlxuXHRcdFx0XHQ8L0FjdGlvblRpdGxlV3JhcD5cblx0XHRcdDwvRmxleD5cblxuXHRcdFx0PEZsZXhBY3Rpb25CdXR0b25zIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuXHRcdFx0XHQ8RWRpdEFjdGlvblNldHRpbmdzQnV0dG9uLz5cblx0XHRcdFx0eyAhYWN0aW9uVHlwZS5kaXNhYmxlQ29uZGl0aW9ucyAmJiA8RWRpdEFjdGlvbkNvbmRpdGlvbnNCdXR0b24vPiB9XG5cdFx0XHRcdDxUb2dnbGVBY3Rpb25FeGVjdXRpb25CdXR0b24vPlxuXHRcdFx0XHQ8RGVsZXRlQWN0aW9uQnV0dG9uLz5cblx0XHRcdDwvRmxleEFjdGlvbkJ1dHRvbnM+XG5cdFx0PC8+IH1cblx0PC9BY3Rpb25DYXJkQm9keT47XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuQWN0aW9uSXRlbUJvZHkgPSBBY3Rpb25JdGVtQm9keTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uSXRlbUJvZHk7XG4iLCJpbXBvcnQgdXNlTG9vcGVkQWN0aW9uIGZyb20gJy4uL2hvb2tzL3VzZUxvb3BlZEFjdGlvbic7XG5pbXBvcnQgRXZlbnRzTGlzdCBmcm9tICcuL0V2ZW50c0xpc3QnO1xuaW1wb3J0IHsgQ2FyZEZvb3RlciB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbi8qKlxuICogQHBhcmFtICBjaGlsZHJlbi5jaGlsZHJlblxuICogQHBhcmFtICBjaGlsZHJlblxuICogQHBhcmFtICBwcm9wc1xuICogQHJldHVybiB7Ym9vbGVhbnxKU1guRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gQWN0aW9uSXRlbUZvb3RlciggeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHt9ICkge1xuXHRjb25zdCB7IGFjdGlvbiB9ICAgICA9IHVzZUxvb3BlZEFjdGlvbigpO1xuXHRjb25zdCBleGNsdWRlZEV2ZW50cyA9IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5hY3Rpb25Db25kaXRpb25FeGNsdWRlRXZlbnRzO1xuXG5cdGlmICggZXhjbHVkZWRFdmVudHNbIGFjdGlvbi50eXBlIF0gKSB7XG5cdFx0aWYgKCBhY3Rpb24uZXZlbnRzPy5sZW5ndGggKSB7XG5cdFx0XHRhY3Rpb24uZXZlbnRzID0gYWN0aW9uLmV2ZW50cy5maWx0ZXIoIGl0ZW0gPT4gIWV4Y2x1ZGVkRXZlbnRzWyBhY3Rpb24udHlwZSBdLmluY2x1ZGVzKCBpdGVtICkgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gQm9vbGVhbiggYWN0aW9uLmV2ZW50cz8ubGVuZ3RoICkgJiYgPENhcmRGb290ZXJcblx0XHRzdHlsZT17IHtcblx0XHRcdGZsZXhXcmFwOiAnd3JhcCcsXG5cdFx0XHRyb3dHYXA6ICcwLjVlbScsXG5cdFx0fSB9XG5cdFx0eyAuLi5wcm9wcyB9XG5cdD5cblx0XHQ8RXZlbnRzTGlzdCBldmVudHM9eyBhY3Rpb24uZXZlbnRzIH0vPlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0NhcmRGb290ZXI+O1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuQWN0aW9uSXRlbUZvb3RlciA9IEFjdGlvbkl0ZW1Gb290ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkl0ZW1Gb290ZXI7IiwiaW1wb3J0IHVzZUxvb3BlZEFjdGlvbiBmcm9tICcuLi9ob29rcy91c2VMb29wZWRBY3Rpb24nO1xuaW1wb3J0IHsgYXBwbHlGaWx0ZXJzIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5pbXBvcnQgeyBDYXJkSGVhZGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuLyoqXG4gKiBAcGFyYW0gY2hpbGRyZW5cbiAqIEBwYXJhbSBwcm9wc1xuICogQHJldHVybnMge0pTWC5FbGVtZW50fG51bGx9XG4gKi9cbmZ1bmN0aW9uIEFjdGlvbkl0ZW1IZWFkZXIoIHsgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB7fSApIHtcblx0Y29uc3QgeyBhY3Rpb24gfSA9IHVzZUxvb3BlZEFjdGlvbigpO1xuXG5cdGNvbnN0IGhlYWRlciA9IGFwcGx5RmlsdGVycyhcblx0XHRgamV0LmZiLnNlY3Rpb24uYWN0aW9ucy5oZWFkZXIuJHsgYWN0aW9uLnR5cGUgfWAsXG5cdFx0bnVsbCxcblx0XHRhY3Rpb24sXG5cdCk7XG5cblx0aWYgKCAhaGVhZGVyICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIDxDYXJkSGVhZGVyIHsgLi4ucHJvcHMgfT5cblx0XHR7IGhlYWRlciB9XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvQ2FyZEhlYWRlcj47XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgICAgICAgICAgICAgICAgICA9IHdpbmRvdz8uSmV0RkJDb21wb25lbnRzID8/IHt9O1xud2luZG93LkpldEZCQ29tcG9uZW50cy5BY3Rpb25JdGVtSGVhZGVyID0gQWN0aW9uSXRlbUhlYWRlcjtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uSXRlbUhlYWRlcjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB1c2VMb29wZWRBY3Rpb24gZnJvbSAnLi4vaG9va3MvdXNlTG9vcGVkQWN0aW9uJztcbmltcG9ydCB7IENhcmQsIFRvb2x0aXAgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcbmltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAbGluYXJpYS9jb3JlJztcbmltcG9ydCB1c2VBY3Rpb25FcnJvcnMgZnJvbSAnLi4vaG9va3MvdXNlQWN0aW9uRXJyb3JzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuY29uc3QgTWFyZ2luTGVzc0NhcmQgPSBzdHlsZWQoIENhcmQgKWBcbiAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbmA7XG5cbmNvbnN0IGVycm9yU3R5bGUgPSBjc3NgXG4gICAgJiYge1xuICAgICAgICBib3gtc2hhZG93OiAjY2MxODE4IDAgMCAwIDJweDtcbiAgICB9XG5gO1xuXG5jb25zdCBjdXJyZW50U3R5bGUgPSBjc3NgXG4gICAgYW5pbWF0aW9uOiBzaG93LWN1cnJlbnQgMnMgaW5maW5pdGU7XG5cbiAgICBAa2V5ZnJhbWVzIHNob3ctY3VycmVudCB7XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDMsIDEwMiwgMjE0LCAwLjMpIDAgMCAwIDNweDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IGRpc2FibGVkU3R5bGUgPSBjc3NgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmZmY3NSAwIDIwcHgsICNkNWQ1ZDU3ZCAyMHB4IDQwcHgpO1xuYDtcblxuZnVuY3Rpb24gQWN0aW9uSXRlbVdyYXBwZXIoIHsgY2xhc3NOYW1lID0gJycsIC4uLnByb3BzIH0gPSB7fSApIHtcblx0Y29uc3QgeyBhY3Rpb24gfSA9IHVzZUxvb3BlZEFjdGlvbigpO1xuXG5cdGNvbnN0IHsgY3VycmVudEFjdGlvbiwgaXNGaXhlZCB9ID0gdXNlU2VsZWN0KCBzZWxlY3QgPT4gKFxuXHRcdFx0e1xuXHRcdFx0XHRjdXJyZW50QWN0aW9uOiBzZWxlY3QoICdqZXQtZm9ybXMvYWN0aW9ucycgKS5nZXRDdXJyZW50QWN0aW9uKCksXG5cdFx0XHRcdGlzRml4ZWQ6IHNlbGVjdCggJ2pldC1mb3Jtcy9hY3Rpb25zJyApLmlzRml4ZWQoIGFjdGlvbi50eXBlICksXG5cdFx0XHR9XG5cdFx0KSxcblx0XHRbIGFjdGlvbi50eXBlIF0sXG5cdCk7XG5cblx0Y29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRXJyb3JzKCBhY3Rpb24gKTtcblxuXHRjb25zdCBpc0V4ZWN1dGUgPSAoXG5cdFx0YWN0aW9uLmlzX2V4ZWN1dGUgPz8gdHJ1ZVxuXHQpO1xuXG5cdGNvbnN0IGVycm9yVGV4dCA9IChcblx0XHRCb29sZWFuKCBlcnJvcnMubGVuZ3RoIClcblx0XHQ/IF9fKFxuXHRcdFx0J1RoaXMgYWN0aW9uIGlzblxcJ3Qgc2V0IHVwIHByb3Blcmx5LiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIG9mIHRoZSBhY3Rpb24nLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdClcblx0XHQ6ICcnXG5cdCk7XG5cblx0Y29uc3QgV3JhcHBlckNvbXBvbmVudCA9IGVycm9yVGV4dCA/IFRvb2x0aXAgOiBGcmFnbWVudDtcblx0Y29uc3Qgd3JhcHBlclByb3BzICAgICA9IGVycm9yVGV4dCA/IHtcblx0XHR0ZXh0OiBlcnJvclRleHQsXG5cdFx0ZGVsYXk6IDIwMCxcblx0XHRwbGFjZW1lbnQ6ICd0b3AnLFxuXHR9IDoge307XG5cblx0cmV0dXJuIDxXcmFwcGVyQ29tcG9uZW50IHsgLi4ud3JhcHBlclByb3BzIH0+XG5cdFx0PE1hcmdpbkxlc3NDYXJkXG5cdFx0XHRlbGV2YXRpb249eyAyIH1cblx0XHRcdHNpemU9eyAnZXh0cmFTbWFsbCcgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgY3goXG5cdFx0XHRcdCdqZXQtZm9ybS1hY3Rpb24nLFxuXHRcdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRcdCFpc0ZpeGVkICYmICdkcmFnZ2FibGUnLFxuXHRcdFx0XHQhaXNFeGVjdXRlICYmIGRpc2FibGVkU3R5bGUsXG5cdFx0XHRcdGN1cnJlbnRBY3Rpb24/LmlkID09PSBhY3Rpb24uaWQgJiYgY3VycmVudFN0eWxlLFxuXHRcdFx0XHRlcnJvcnMubGVuZ3RoICYmIGVycm9yU3R5bGUsXG5cdFx0XHQpIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+XG5cdDwvV3JhcHBlckNvbXBvbmVudD47XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgICAgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuQWN0aW9uSXRlbVdyYXBwZXIgPSBBY3Rpb25JdGVtV3JhcHBlcjtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uSXRlbVdyYXBwZXI7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgQWN0aW9uTWVzc2FnZXNTbG90RmlsbHMgZnJvbSAnLi9BY3Rpb25NZXNzYWdlc1Nsb3RGaWxscyc7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0SGVscCxcblx0TGFiZWwsXG5cdFN0eWxlZFRleHRDb250cm9sLFxuXHRUYWJsZUxpc3RTdHlsZSxcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IFRhYmxlTGlzdFJvdywgVGFibGVMaXN0Q29udGFpbmVyIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcblxuZnVuY3Rpb24gQWN0aW9uTWVzc2FnZVJvdyggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHR0eXBlLFxuXHRcdGxhYmVsLFxuXHRcdHZhbHVlLFxuXHRcdG9uQ2hhbmdlLFxuXHR9ID0gcHJvcHM7XG5cblx0Y29uc3QgeyBTbG90OiBSb3dTbG90IH0gPSB1c2VNZW1vKCAoKSA9PiBBY3Rpb25NZXNzYWdlc1Nsb3RGaWxsc1sgdHlwZSBdLFxuXHRcdFsgdHlwZSBdICk7XG5cblx0cmV0dXJuIDxUYWJsZUxpc3RSb3dcblx0XHRcdHRhZz1cImpmYi1tZXNzYWdlLWl0ZW1cIlxuXHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0PlxuXHRcdHsgKCB7IGh0bWxJZCB9ICkgPT4gKFxuXHRcdFx0PFJvd1Nsb3QgZmlsbFByb3BzPXsgeyAuLi5wcm9wcywgaWQ6IGh0bWxJZCB9IH0+XG5cdFx0XHRcdHsgKCBmaWxscyApID0+IChcblx0XHRcdFx0XHRCb29sZWFuKCBmaWxscz8ubGVuZ3RoICkgPyBmaWxscyA6XG5cdFx0XHRcdFx0PFN0eWxlZFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRpZD17IGh0bWxJZCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9Sb3dTbG90PlxuXHRcdCkgfVxuXHQ8L1RhYmxlTGlzdFJvdz47XG59XG5cbmZ1bmN0aW9uIEFjdGlvbk1lc3NhZ2VzKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgc2V0dGluZ3MsXG5cdFx0ICAgICAgc291cmNlLFxuXHRcdCAgICAgIGdldE1hcEZpZWxkLFxuXHRcdCAgICAgIHNldE1hcEZpZWxkLFxuXHRcdCAgICAgIG1lc3NhZ2VzLFxuXHRcdCAgICAgIG9uQ2hhbmdlU2V0dGluZyxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGNvbnN0IG9sZE1lc3NhZ2VzID0gc2V0dGluZ3MubWVzc2FnZXMgfHwge307XG5cdFx0Y29uc3QgbmV3TWVzc2FnZXMgPSB7fTtcblxuXHRcdE9iamVjdC5lbnRyaWVzKCBzb3VyY2UuX19tZXNzYWdlcyApLmZvckVhY2goICggWyB0eXBlLCBkYXRhIF0gKSA9PiB7XG5cdFx0XHRpZiAoICFvbGRNZXNzYWdlc1sgdHlwZSBdICkge1xuXHRcdFx0XHRuZXdNZXNzYWdlc1sgdHlwZSBdID0gZGF0YS52YWx1ZTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRpZiAoIG5ld01lc3NhZ2VzICkge1xuXHRcdFx0b25DaGFuZ2VTZXR0aW5nKCB7IC4uLm9sZE1lc3NhZ2VzLCAuLi5uZXdNZXNzYWdlcyB9LCAnbWVzc2FnZXMnICk7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgW10gKTtcblxuXHRjb25zdCBzZXRNZXNzYWdlID0gKCB2YWx1ZSwgbmFtZUZpZWxkICkgPT4ge1xuXHRcdGNvbnN0IHNvdXJjZU5hbWUgPSAnbWVzc2FnZXMnO1xuXG5cdFx0c2V0TWFwRmllbGQoIHsgdmFsdWUsIG5hbWVGaWVsZCwgc291cmNlOiBzb3VyY2VOYW1lIH0gKTtcblx0fTtcblxuXHRjb25zdCBnZXRNZXNzYWdlID0gbmFtZSA9PiB7XG5cdFx0Y29uc3Qgc291cmNlTmFtZSA9ICdtZXNzYWdlcyc7XG5cblx0XHRyZXR1cm4gZ2V0TWFwRmllbGQoIHsgbmFtZSwgc291cmNlOiBzb3VyY2VOYW1lIH0gKTtcblx0fTtcblxuXHRyZXR1cm4gPGRpdiBjcmVhdGVJZD17IGZhbHNlIH0gY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5XcmFwfT5cblx0XHQ8TGFiZWwgY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5MYWJlbH0+XG5cdFx0XHR7IF9fKCBgTWVzc2FnZXMgU2V0dGluZ3NgLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0PC9MYWJlbD5cblx0XHQ8SGVscCBjbGFzc05hbWU9e1RhYmxlTGlzdFN0eWxlLldoaXRlU3BhY2VOb3JtYWx9PlxuXHRcdFx0Q2hhbmdlIGVycm9yIG1lc3NhZ2UgYWNjb3JkaW5nIHRvIFVTRVIgTE9HSU4gZm9ybSBmaWVsZDsgaXQgY2FuIGJlIHVzZXJuYW1lIG9yIGVtYWlsLlxuXHRcdDwvSGVscD5cblx0XHQ8VGFibGVMaXN0Q29udGFpbmVyPlxuXHRcdFx0eyBzZXR0aW5ncy5tZXNzYWdlcyAmJiBPYmplY3QuZW50cmllcyggc2V0dGluZ3MubWVzc2FnZXMgKS5cblx0XHRcdFx0bWFwKCAoIFsgdHlwZSBdICkgPT4gPEFjdGlvbk1lc3NhZ2VSb3dcblx0XHRcdFx0XHRcdGtleT17ICdtZXNzYWdlXycgKyB0eXBlIH1cblx0XHRcdFx0XHRcdHR5cGU9eyB0eXBlIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgbWVzc2FnZXMoIHR5cGUgKS5sYWJlbCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGdldE1lc3NhZ2UoIHR5cGUgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldE1lc3NhZ2UoIG5ld1ZhbHVlLCB0eXBlICkgfVxuXHRcdFx0XHRcdC8+LFxuXHRcdFx0KSB9XG5cdFx0PC9UYWJsZUxpc3RDb250YWluZXI+XG5cdDwvZGl2Pjtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyAgICAgICAgICAgICAgICA9IHdpbmRvdz8uSmV0RkJDb21wb25lbnRzID8/IHt9O1xud2luZG93LkpldEZCQ29tcG9uZW50cy5BY3Rpb25NZXNzYWdlcyA9IEFjdGlvbk1lc3NhZ2VzO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25NZXNzYWdlczsiLCJpbXBvcnQgeyBjcmVhdGVTbG90RmlsbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmNvbnN0IEFjdGlvbk1lc3NhZ2VzU2xvdEZpbGxzID0ge307XG5cbmZvciAoIGNvbnN0IHsgc2VsZiB9IG9mIHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMgKSB7XG5cdGlmIChcblx0XHQhd2luZG93WyBzZWxmIF0/Lmhhc093blByb3BlcnR5Py4oICdfX21lc3NhZ2VzJyApIHx8XG5cdFx0IU9iamVjdC5rZXlzKCB3aW5kb3dbIHNlbGYgXS5fX21lc3NhZ2VzICk/Lmxlbmd0aFxuXHQpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IG1lc3NhZ2VLZXkgb2YgT2JqZWN0LmtleXMoIHdpbmRvd1sgc2VsZiBdLl9fbWVzc2FnZXMgKSApIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXG5cdFx0aWYgKCBBY3Rpb25NZXNzYWdlc1Nsb3RGaWxscy5oYXNPd25Qcm9wZXJ0eSggbWVzc2FnZUtleSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdEFjdGlvbk1lc3NhZ2VzU2xvdEZpbGxzWyBtZXNzYWdlS2V5IF0gPSBjcmVhdGVTbG90RmlsbChcblx0XHRcdGBKRkJBY3Rpb25NZXNzYWdlUm93LSR7IG1lc3NhZ2VLZXkgfWAsXG5cdFx0KTtcblx0fVxufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgICAgICAgICAgID0gd2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz8ge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLkFjdGlvbk1lc3NhZ2VzU2xvdEZpbGxzID0gQWN0aW9uTWVzc2FnZXNTbG90RmlsbHM7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1lc3NhZ2VzU2xvdEZpbGxzOyIsImltcG9ydCB7IGNoZXZyb25MZWZ0U21hbGwsIGNoZXZyb25SaWdodFNtYWxsIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtcblx0UG9wb3ZlclN0YW5kYXJkLFxuXHR1c2VUcmlnZ2VyUG9wb3Zlcixcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHVzZUxvb3BlZEFjdGlvbiBmcm9tICcuLi9ob29rcy91c2VMb29wZWRBY3Rpb24nO1xuaW1wb3J0IHVzZUFjdGlvbnNFZGl0IGZyb20gJy4uL2hvb2tzL3VzZUFjdGlvbnNFZGl0JztcbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmNvbnN0IGlzUlRMID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoICdydGwnICk7XG5cbmZ1bmN0aW9uIEFjdGlvbk1vZGFsQmFja0J1dHRvbigpIHtcblx0Y29uc3QgeyBkZWxldGVBY3Rpb24gfSA9IHVzZUFjdGlvbnNFZGl0KCk7XG5cdGNvbnN0IHsgaW5kZXggfSAgICAgICAgPSB1c2VMb29wZWRBY3Rpb24oKTtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgcmVmLFxuXHRcdCAgICAgIHNldFNob3dQb3BvdmVyLFxuXHRcdCAgICAgIHNob3dQb3BvdmVyLFxuXHRcdCAgICAgIHBvcG92ZXJQcm9wcyxcblx0ICAgICAgfSA9IHVzZVRyaWdnZXJQb3BvdmVyKCk7XG5cblx0Y29uc3QgeyBzaG93QWN0aW9uc0luc2VydGVyTW9kYWwgfSA9IHVzZURpc3BhdGNoKCBTVE9SRV9OQU1FICk7XG5cblx0Y29uc3QgY2FuQmFjayA9IHVzZVNlbGVjdCggc2VsZWN0ID0+IChcblx0XHQnaW5zZXJ0ZXInID09PSBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRPcGVuU2NlbmFyaW8oKVxuXHQpLCBbXSApO1xuXG5cdHJldHVybiBjYW5CYWNrICYmIDw+XG5cdFx0PEJ1dHRvblxuXHRcdFx0cmVmPXsgcmVmIH1cblx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRpY29uPXsgaXNSVEwgPyBjaGV2cm9uUmlnaHRTbWFsbCA6IGNoZXZyb25MZWZ0U21hbGwgfVxuXHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dQb3BvdmVyKCBwcmV2ID0+ICFwcmV2ICkgfVxuXHRcdD5cblx0XHRcdHsgX18oICdCYWNrJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvQnV0dG9uPlxuXHRcdHsgc2hvd1BvcG92ZXIgJiYgPFBvcG92ZXJTdGFuZGFyZFxuXHRcdFx0cGxhY2VtZW50PVwiYm90dG9tXCJcblx0XHRcdG5vQXJyb3c9eyBmYWxzZSB9XG5cdFx0XHR7IC4uLnBvcG92ZXJQcm9wcyB9XG5cdFx0PlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHsgX18oXG5cdFx0XHRcdFx0J0FyZSB5b3Ugc3VyZT8gQWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3QuJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0Jm5ic3A7XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0ZGVsZXRlQWN0aW9uKCBpbmRleCApO1xuXHRcdFx0XHRcdHNob3dBY3Rpb25zSW5zZXJ0ZXJNb2RhbCggdHJ1ZSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdD5cblx0XHRcdFx0eyBfXyggJ1llcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0eyAnIC8gJyB9XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0U2hvd1BvcG92ZXIoIGZhbHNlICkgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnTm8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L1BvcG92ZXJTdGFuZGFyZD4gfVxuXHQ8Lz47XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgICAgICAgICAgICAgICAgICAgICAgID0gd2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz8ge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLkFjdGlvbk1vZGFsQmFja0J1dHRvbiA9IEFjdGlvbk1vZGFsQmFja0J1dHRvbjtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTW9kYWxCYWNrQnV0dG9uOyIsImltcG9ydCB7IGNsb3NlIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHVzZVVwZGF0ZUN1cnJlbnRBY3Rpb24gZnJvbSAnLi4vaG9va3MvdXNlVXBkYXRlQ3VycmVudEFjdGlvbic7XG5cbmZ1bmN0aW9uIEFjdGlvbk1vZGFsQ2xvc2VCdXR0b24oKSB7XG5cdGNvbnN0IHsgY2xlYXJDdXJyZW50IH0gPSB1c2VVcGRhdGVDdXJyZW50QWN0aW9uKCk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PEJ1dHRvblxuXHRcdFx0aWNvbj17IGNsb3NlIH1cblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBjbGVhckN1cnJlbnQoKSB9XG5cdFx0XHRsYWJlbD17IF9fKCAnQ2xvc2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0Lz5cblx0PC8+O1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuQWN0aW9uTW9kYWxDbG9zZUJ1dHRvbiA9IEFjdGlvbk1vZGFsQ2xvc2VCdXR0b247XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1vZGFsQ2xvc2VCdXR0b247IiwiaW1wb3J0IHsgY3JlYXRlU2xvdEZpbGwgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5jb25zdCBBY3Rpb25Nb2RhbEhlYWRlclNsb3RGaWxsID0gY3JlYXRlU2xvdEZpbGwoICdKRkJBY3Rpb25Nb2RhbEhlYWRlcicgKTtcblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgID0gd2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz9cblx0e307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLkFjdGlvbk1vZGFsSGVhZGVyU2xvdEZpbGwgPSBBY3Rpb25Nb2RhbEhlYWRlclNsb3RGaWxsO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25Nb2RhbEhlYWRlclNsb3RGaWxsOyIsImltcG9ydCB1c2VMb29wZWRBY3Rpb24gZnJvbSAnLi4vaG9va3MvdXNlTG9vcGVkQWN0aW9uJztcbmltcG9ydCB1c2VBY3Rpb25zRWRpdCBmcm9tICcuLi9ob29rcy91c2VBY3Rpb25zRWRpdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBTVE9SRV9OQU1FIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IGdldEFjdGlvbkRpc3BsYXlOYW1lIGZyb20gJy4uL3V0aWxzL2dldEFjdGlvbkRpc3BsYXlOYW1lJztcblxuY29uc3QgQWN0aW9uVGl0bGVXcmFwID0gc3R5bGVkLmRpdmBcblx0ZmxleDogMTtcblx0bWluLXdpZHRoOiAwO1xuYDtcblxuY29uc3QgQWN0aW9uQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRjdXJzb3I6IHRleHQ7XG5gO1xuXG5jb25zdCBBY3Rpb25MYWJlbCA9IHN0eWxlZC5zcGFuYFxuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxM3B4O1xuXHRsaW5lLWhlaWdodDogMS40O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XG5cbmNvbnN0IEFjdGlvbk5hbWVJbnB1dCA9IHN0eWxlZC5pbnB1dGBcblx0d2lkdGg6IDEwMCU7XG5cdG1pbi1oZWlnaHQ6IDMwcHg7XG5cdHBhZGRpbmc6IDAgOHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjOTQ5NDk0O1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0bGluZS1oZWlnaHQ6IDEuNDtcbmA7XG5cbmZ1bmN0aW9uIEFjdGlvbk5hbWVFZGl0b3IoIHtcblx0ZmFsbGJhY2tMYWJlbCxcblx0bmV4dE5hbWUsXG5cdHNldE5leHROYW1lLFxuXHRjb21taXROYW1lLFxuXHRzZXRJc0VkaXRpbmcsXG5cdHByZXZpb3VzTmFtZVJlZixcblx0aXNFc2NhcGVQcmVzc2VkUmVmLFxuXHRpbnB1dFJlZixcbn0gKSB7XG5cdHJldHVybiA8QWN0aW9uTmFtZUlucHV0XG5cdFx0cmVmPXsgaW5wdXRSZWYgfVxuXHRcdHZhbHVlPXsgbmV4dE5hbWUgfVxuXHRcdG9uQ2hhbmdlPXsgZXZlbnQgPT4gc2V0TmV4dE5hbWUoIGV2ZW50LnRhcmdldC52YWx1ZSApIH1cblx0XHRvbkJsdXI9eyAoKSA9PiB7XG5cdFx0XHRpZiAoIGlzRXNjYXBlUHJlc3NlZFJlZi5jdXJyZW50ICkge1xuXHRcdFx0XHRpc0VzY2FwZVByZXNzZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbW1pdE5hbWUoKTtcblx0XHR9IH1cblx0XHRvbktleURvd249eyBldmVudCA9PiB7XG5cdFx0XHRpZiAoICdFbnRlcicgPT09IGV2ZW50LmtleSApIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29tbWl0TmFtZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdFc2NhcGUnID09PSBldmVudC5rZXkgKSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGlzRXNjYXBlUHJlc3NlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcblx0XHRcdFx0c2V0TmV4dE5hbWUoIHByZXZpb3VzTmFtZVJlZi5jdXJyZW50ICk7XG5cdFx0XHRcdHNldElzRWRpdGluZyggZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9IH1cblx0XHRhcmlhLWxhYmVsPXsgX18oICdBY3Rpb24gZGlzcGxheSBuYW1lJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdHBsYWNlaG9sZGVyPXsgZmFsbGJhY2tMYWJlbCB9XG5cdFx0dHlwZT1cInRleHRcIlxuXHRcdG1heExlbmd0aD17IDI1NSB9XG5cdFx0c3BlbGxDaGVjaz17IGZhbHNlIH1cblx0Lz47XG59XG5cbmZ1bmN0aW9uIEFjdGlvbk5hbWVCdXR0b24oIHsgZGlzcGxheU5hbWUsIHN0YXJ0RWRpdGluZyB9ICkge1xuXHRyZXR1cm4gPEFjdGlvbkJ1dHRvblxuXHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdG9uQ2xpY2s9eyBzdGFydEVkaXRpbmcgfVxuXHRcdGFyaWEtbGFiZWw9eyBzcHJpbnRmKFxuXHRcdFx0LyogdHJhbnNsYXRvcnM6ICVzIC0gY3VycmVudCBhY3Rpb24gZGlzcGxheSBuYW1lICovXG5cdFx0XHRfXyggJ1JlbmFtZSBhY3Rpb246ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRkaXNwbGF5TmFtZSxcblx0XHQpIH1cblx0PlxuXHRcdDxBY3Rpb25MYWJlbCB0aXRsZT17IGRpc3BsYXlOYW1lIH0+XG5cdFx0XHR7IGRpc3BsYXlOYW1lIH1cblx0XHQ8L0FjdGlvbkxhYmVsPlxuXHQ8L0FjdGlvbkJ1dHRvbj47XG59XG5cbmZ1bmN0aW9uIFVuc3VwcG9ydGVkQWN0aW9uQnV0dG9uKCB7IGRlbGV0ZUFjdGlvbiwgaW5kZXggfSApIHtcblx0cmV0dXJuIDxCdXR0b25cblx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0b25DbGljaz17ICgpID0+IGRlbGV0ZUFjdGlvbiggaW5kZXggKSB9XG5cdD5cblx0XHR7IF9fKCAnQWN0aW9uIGlzIG5vdCByZWdpc3RlcmVkLiBEZWxldGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdDwvQnV0dG9uPjtcbn1cblxuZnVuY3Rpb24gdXNlQWN0aW9uUmVuYW1lKCBhY3Rpb24sIGFjdGlvbkZyb21MaXN0LCB1cGRhdGVBY3Rpb25PYmogKSB7XG5cdGNvbnN0IFsgaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmcgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIG5leHROYW1lLCBzZXROZXh0TmFtZSBdID0gdXNlU3RhdGUoICcnICk7XG5cdGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCBudWxsICk7XG5cdGNvbnN0IHByZXZpb3VzTmFtZVJlZiA9IHVzZVJlZiggJycgKTtcblx0Y29uc3QgaXNFc2NhcGVQcmVzc2VkUmVmID0gdXNlUmVmKCBmYWxzZSApO1xuXHRjb25zdCBmYWxsYmFja0xhYmVsID0gYWN0aW9uRnJvbUxpc3Q/LmxhYmVsID8/ICcnO1xuXHRjb25zdCBkaXNwbGF5TmFtZSA9IGdldEFjdGlvbkRpc3BsYXlOYW1lKCBhY3Rpb24sIGZhbGxiYWNrTGFiZWwgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRpZiAoIGlzRWRpdGluZyApIHtcblx0XHRcdGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG5cdFx0XHRpbnB1dFJlZi5jdXJyZW50Py5zZWxlY3QoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZXROZXh0TmFtZSggZGlzcGxheU5hbWUgKTtcblx0fSwgWyBkaXNwbGF5TmFtZSwgaXNFZGl0aW5nIF0gKTtcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3BsYXlOYW1lLFxuXHRcdGZhbGxiYWNrTGFiZWwsXG5cdFx0aW5wdXRSZWYsXG5cdFx0aXNFZGl0aW5nLFxuXHRcdGlzRXNjYXBlUHJlc3NlZFJlZixcblx0XHRuZXh0TmFtZSxcblx0XHRwcmV2aW91c05hbWVSZWYsXG5cdFx0c2V0SXNFZGl0aW5nLFxuXHRcdHNldE5leHROYW1lLFxuXHRcdHN0YXJ0RWRpdGluZzogKCkgPT4ge1xuXHRcdFx0cHJldmlvdXNOYW1lUmVmLmN1cnJlbnQgPSBkaXNwbGF5TmFtZTtcblx0XHRcdHNldE5leHROYW1lKCBkaXNwbGF5TmFtZSApO1xuXHRcdFx0c2V0SXNFZGl0aW5nKCB0cnVlICk7XG5cdFx0fSxcblx0XHRjb21taXROYW1lOiAoKSA9PiB7XG5cdFx0XHRjb25zdCB0cmltbWVkTmFtZSA9IG5leHROYW1lLnRyaW0oKTtcblx0XHRcdGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gKFxuXHRcdFx0XHQhdHJpbW1lZE5hbWUgfHwgdHJpbW1lZE5hbWUgPT09IGZhbGxiYWNrTGFiZWxcblx0XHRcdClcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IHRyaW1tZWROYW1lO1xuXG5cdFx0XHRpZiAoIGFjdGlvbi5lZGl0b3JfbmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgKSB7XG5cdFx0XHRcdHVwZGF0ZUFjdGlvbk9iaiggYWN0aW9uLmlkLCB7IGVkaXRvcl9uYW1lOiBub3JtYWxpemVkTmFtZSB9ICk7XG5cdFx0XHR9XG5cblx0XHRcdHNldElzRWRpdGluZyggZmFsc2UgKTtcblx0XHR9LFxuXHR9O1xufVxuXG5mdW5jdGlvbiBBY3Rpb25UaXRsZSggeyBvbkVkaXRpbmdDaGFuZ2UgPSAoKSA9PiB7fSB9ICkge1xuXHRjb25zdCB7IGRlbGV0ZUFjdGlvbiwgdXBkYXRlQWN0aW9uT2JqIH0gPSB1c2VBY3Rpb25zRWRpdCgpO1xuXHRjb25zdCB7IGFjdGlvbiwgaW5kZXggfSA9IHVzZUxvb3BlZEFjdGlvbigpO1xuXG5cdGNvbnN0IGFjdGlvbkZyb21MaXN0ID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRBY3Rpb24oIGFjdGlvbi50eXBlICksXG5cdFx0WyBhY3Rpb24udHlwZSBdLFxuXHQpO1xuXG5cdGNvbnN0IHJlbmFtZVByb3BzID0gdXNlQWN0aW9uUmVuYW1lKFxuXHRcdGFjdGlvbixcblx0XHRhY3Rpb25Gcm9tTGlzdCxcblx0XHR1cGRhdGVBY3Rpb25PYmosXG5cdCk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0b25FZGl0aW5nQ2hhbmdlKCByZW5hbWVQcm9wcy5pc0VkaXRpbmcgKTtcblx0fSwgWyByZW5hbWVQcm9wcy5pc0VkaXRpbmcgXSApO1xuXG5cdGlmICggIWFjdGlvbkZyb21MaXN0ICkge1xuXHRcdHJldHVybiA8VW5zdXBwb3J0ZWRBY3Rpb25CdXR0b25cblx0XHRcdGRlbGV0ZUFjdGlvbj17IGRlbGV0ZUFjdGlvbiB9XG5cdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHQvPjtcblx0fVxuXG5cdHJldHVybiA8QWN0aW9uVGl0bGVXcmFwPlxuXHRcdHsgcmVuYW1lUHJvcHMuaXNFZGl0aW5nICYmIDxBY3Rpb25OYW1lRWRpdG9yXG5cdFx0XHRmYWxsYmFja0xhYmVsPXsgcmVuYW1lUHJvcHMuZmFsbGJhY2tMYWJlbCB9XG5cdFx0XHRuZXh0TmFtZT17IHJlbmFtZVByb3BzLm5leHROYW1lIH1cblx0XHRcdHNldE5leHROYW1lPXsgcmVuYW1lUHJvcHMuc2V0TmV4dE5hbWUgfVxuXHRcdFx0Y29tbWl0TmFtZT17IHJlbmFtZVByb3BzLmNvbW1pdE5hbWUgfVxuXHRcdFx0c2V0SXNFZGl0aW5nPXsgcmVuYW1lUHJvcHMuc2V0SXNFZGl0aW5nIH1cblx0XHRcdHByZXZpb3VzTmFtZVJlZj17IHJlbmFtZVByb3BzLnByZXZpb3VzTmFtZVJlZiB9XG5cdFx0XHRpc0VzY2FwZVByZXNzZWRSZWY9eyByZW5hbWVQcm9wcy5pc0VzY2FwZVByZXNzZWRSZWYgfVxuXHRcdFx0aW5wdXRSZWY9eyByZW5hbWVQcm9wcy5pbnB1dFJlZiB9XG5cdFx0Lz4gfVxuXG5cdFx0eyAhcmVuYW1lUHJvcHMuaXNFZGl0aW5nICYmIDxBY3Rpb25OYW1lQnV0dG9uXG5cdFx0XHRkaXNwbGF5TmFtZT17IHJlbmFtZVByb3BzLmRpc3BsYXlOYW1lIH1cblx0XHRcdHN0YXJ0RWRpdGluZz17IHJlbmFtZVByb3BzLnN0YXJ0RWRpdGluZyB9XG5cdFx0Lz4gfVxuXHQ8L0FjdGlvblRpdGxlV3JhcD47XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuQWN0aW9uVGl0bGUgPSBBY3Rpb25UaXRsZTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uVGl0bGU7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbG90RmlsbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmNvbnN0IEFjdGlvbnNBZnRlck5ld0J1dHRvblNsb3RGaWxsID0gY3JlYXRlU2xvdEZpbGwoXG5cdCdKRkJBY3Rpb25zQWZ0ZXJOZXdCdXR0b24nLFxuKTtcblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHdpbmRvdz8uSmV0RkJDb21wb25lbnRzID8/XG5cdHt9O1xud2luZG93LkpldEZCQ29tcG9uZW50cy5BY3Rpb25zQWZ0ZXJOZXdCdXR0b25TbG90RmlsbCA9IEFjdGlvbnNBZnRlck5ld0J1dHRvblNsb3RGaWxsO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zQWZ0ZXJOZXdCdXR0b25TbG90RmlsbDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcbmltcG9ydCB7IEZsZXgsIEV4dGVybmFsTGluayB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwbHVnaW5zLCBJY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgUHJvQWN0aW9uT3ZlcmxheSBmcm9tICcuLi9Qcm9BY3Rpb25PdmVybGF5JztcblxuY29uc3QgQWN0aW9uVGl0bGUgPSBzdHlsZWQuaDVgXG4gICAgbWFyZ2luOiB1bnNldDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMWQyMzI3O1xuYDtcblxuY29uc3QgQ29sb3JlZEljb24gPSBzdHlsZWQoIEljb24gKWBcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG5gO1xuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzFkMjMyNztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogYXV0bztcbmA7XG5cbmNvbnN0IEZsZXhXcmFwcGVyID0gc3R5bGVkKCBGbGV4IClgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogIzg0ODQ4NTtcblxuICAgICYsICYgJHsgQWN0aW9uVGl0bGUgfSwgJiAkeyBPdmVybGF5IH0ge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDAgMXB4IDRweDtcbiAgICB9XG5cblxuICAgICY6aG92ZXIsICY6aG92ZXIgJHsgQWN0aW9uVGl0bGUgfSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13cC1jb21wb25lbnRzLWNvbG9yLWFjY2VudCwgdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IsICMzODU4ZTkpKTtcbiAgICB9XG5cbiAgICAmLmlzLWRpc2FibGVkIHtcbiAgICAgICAgJiwgJiAkeyBBY3Rpb25UaXRsZSB9IHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzdjN2M3O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciA+ICo6bm90KCR7IE92ZXJsYXkgfSkge1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICR7IE92ZXJsYXkgfSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmZ1bmN0aW9uIEFjdGlvbkdyaWRJdGVtKCB7IGFjdGlvbiwgb25DbGljayB9ICkge1xuXHRjb25zdCBBY3Rpb25PdmVybGF5ID0gYWN0aW9uPy5kaXNhYmxlZE92ZXJsYXkgPz8gUHJvQWN0aW9uT3ZlcmxheTtcblxuXHRyZXR1cm4gPEZsZXhXcmFwcGVyXG5cdFx0b25DbGljaz17IG9uQ2xpY2sgfVxuXHRcdGRpcmVjdGlvbj1cImNvbHVtblwiXG5cdFx0YWxpZ249XCJjZW50ZXJcIlxuXHRcdGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcblx0XHRjbGFzc05hbWU9eyBhY3Rpb24uZGlzYWJsZWQgPyAnamZiLWFjdGlvbi1ncmlkLWl0ZW0gaXMtZGlzYWJsZWQnIDogJ2pmYi1hY3Rpb24tZ3JpZC1pdGVtJyB9XG5cdD5cblx0XHQ8Q29sb3JlZEljb24gaWNvbj17IGFjdGlvbj8uaWNvbiA/PyBwbHVnaW5zIH0gc2l6ZT17IDMyIH0vPlxuXHRcdDxBY3Rpb25UaXRsZT57IGFjdGlvbi5sYWJlbCB9PC9BY3Rpb25UaXRsZT5cblx0XHR7IGFjdGlvbj8uZG9jSHJlZiAmJiA8RXh0ZXJuYWxMaW5rIGhyZWY9eyBhY3Rpb24/LmRvY0hyZWYgfT5cblx0XHRcdHsgX18oICdEb2N1bWVudGF0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvRXh0ZXJuYWxMaW5rPiB9XG5cdFx0eyBhY3Rpb24uZGlzYWJsZWQgJiYgPE92ZXJsYXk+XG5cdFx0XHQ8QWN0aW9uT3ZlcmxheSBhY3Rpb249eyBhY3Rpb24gfS8+XG5cdFx0PC9PdmVybGF5PiB9XG5cdDwvRmxleFdyYXBwZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25HcmlkSXRlbTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7XG5cdEJ1dHRvbixcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHBsdXMgfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcbmltcG9ydCBBZGRBY3Rpb25Nb2RhbCBmcm9tICcuL0FkZEFjdGlvbk1vZGFsJztcblxuZnVuY3Rpb24gQWRkQWN0aW9uQnV0dG9uKCkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgc2hvd0FjdGlvbnNJbnNlcnRlck1vZGFsLFxuXHQgICAgICB9ID0gdXNlRGlzcGF0Y2goIFNUT1JFX05BTUUgKTtcblxuXHRjb25zdCBzaG93TW9kYWwgPSB1c2VTZWxlY3QoIHNlbGVjdCA9PiAoXG5cdFx0c2VsZWN0KCBTVE9SRV9OQU1FICkuaXNTaG93QWN0aW9uc0luc2VydGVyTW9kYWwoKVxuXHQpLCBbXSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxCdXR0b25cblx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0b25DbGljaz17ICgpID0+IHNob3dBY3Rpb25zSW5zZXJ0ZXJNb2RhbCggdHJ1ZSApIH1cblx0XHRcdGljb249eyBwbHVzIH1cblx0XHQ+XG5cdFx0XHR7IF9fKCAnTmV3IEFjdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ8L0J1dHRvbj5cblx0XHR7IHNob3dNb2RhbCAmJiA8QWRkQWN0aW9uTW9kYWwvPiB9XG5cdDwvPjtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyAgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuQWRkQWN0aW9uQnV0dG9uID0gQWRkQWN0aW9uQnV0dG9uO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRBY3Rpb25CdXR0b247IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHdvcmRwcmVzcy9uby11bnNhZmUtd3AtYXBpc1xuXHRfX2V4cGVyaW1lbnRhbEdyaWQgYXMgR3JpZCxcblx0QnV0dG9uLFxuXHRNb2RhbCxcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2wsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBjbG9zZVNtYWxsIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5pbXBvcnQgQWN0aW9uR3JpZEl0ZW0gZnJvbSAnLi9BY3Rpb25HcmlkSXRlbSc7XG5pbXBvcnQgQmFzZUFjdGlvbiBmcm9tICcuLi8uLi9hYnN0cmFjdC9CYXNlQWN0aW9uJztcbmltcG9ydCB1c2VBY3Rpb25zRWRpdCBmcm9tICcuLi8uLi9ob29rcy91c2VBY3Rpb25zRWRpdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyBTVE9SRV9OQU1FIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuaW1wb3J0IHVzZUNhdGVnb3JpZXNBbmRBY3Rpb25UeXBlcyBmcm9tICcuL3VzZUNhdGVnb3JpZXNBbmRBY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBTdHlsZWRGbGV4Q29udHJvbCB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgdXNlUHJldmVudEVkaXRvclVuZG9Jbk1vZGFsIGZyb20gJy4uLy4uL2hvb2tzL3VzZVByZXZlbnRFZGl0b3JVbmRvSW5Nb2RhbCc7XG5cbmNvbnN0IFN0eWxlZFBsYWNlaG9sZGVyID0gc3R5bGVkLmRpdmBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gQWRkQWN0aW9uTW9kYWwoKSB7ICBcblxuXHR1c2VQcmV2ZW50RWRpdG9yVW5kb0luTW9kYWwoKTtcblxuXHRjb25zdCBzZWFyY2hJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuXHRjb25zdCB7IGFjdGlvbnMsIHNldEFjdGlvbnMgfSA9IHVzZUFjdGlvbnNFZGl0KCk7XG5cblx0Y29uc3Qge1xuXHRcdG9wZW5BY3Rpb25TZXR0aW5ncyxcblx0XHRzaG93QWN0aW9uc0luc2VydGVyTW9kYWwsXG5cdH0gPSB1c2VEaXNwYXRjaChTVE9SRV9OQU1FKTtcblxuXHRjb25zdCB7XG5cdFx0c2VhcmNoLFxuXHRcdHNldFNlYXJjaCxcblx0XHRjYXRlZ29yeSxcblx0XHRjYXRlZ29yaWVzLFxuXHRcdGFjdGlvblR5cGVzLFxuXHRcdHNldENhdGVnb3J5LFxuXHR9ID0gdXNlQ2F0ZWdvcmllc0FuZEFjdGlvblR5cGVzKCk7XG5cblx0Y29uc3Qgb25BZGRBY3Rpb24gPSAoZXZlbnQsIGFjdGlvbikgPT4ge1xuXHRcdGNvbnN0IG5vZGVDbGFzc2VzID0gQXJyYXkuZnJvbShldmVudC50YXJnZXQ/LmNsYXNzTGlzdCk7XG5cblx0XHRpZiAobm9kZUNsYXNzZXM/LlswXT8uaW5jbHVkZXM/LignY29tcG9uZW50cy1leHRlcm5hbC1saW5rJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBuZXdBY3Rpb24gPSB7XG5cdFx0XHQuLi5uZXcgQmFzZUFjdGlvbih7XG5cdFx0XHRcdHR5cGU6IGFjdGlvbi50eXBlLFxuXHRcdFx0fSksXG5cdFx0fTtcblxuXHRcdHNldEFjdGlvbnMoW1xuXHRcdFx0Li4uYWN0aW9ucyxcblx0XHRcdG5ld0FjdGlvbixcblx0XHRdKTtcblxuXHRcdHNob3dBY3Rpb25zSW5zZXJ0ZXJNb2RhbChmYWxzZSk7XG5cblx0XHRvcGVuQWN0aW9uU2V0dGluZ3Moe1xuXHRcdFx0aXRlbTogbmV3QWN0aW9uLFxuXHRcdFx0aW5kZXg6IGFjdGlvbnMubGVuZ3RoLFxuXHRcdFx0c2NlbmFyaW86ICdpbnNlcnRlcicsXG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gQURERUQ6IGZvY3VzIHNlYXJjaCBpbnB1dCByaWdodCBhZnRlciBtb2RhbCBpcyByZW5kZXJlZC5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBmcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0c2VhcmNoSW5wdXRSZWYuY3VycmVudD8uZm9jdXM/LigpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZSk7XG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHNldFNlYXJjaCgnJyk7XG5cdFx0XHRzZXRDYXRlZ29yeSgnJyk7XG5cdFx0fTtcblx0fSwgW3NldENhdGVnb3J5LCBzZXRTZWFyY2hdKTtcblxuXHRyZXR1cm4gPE1vZGFsXG5cdFx0c2l6ZT1cImxhcmdlXCJcblx0XHR0aXRsZT17X18oJ0FkZCBuZXcgYWN0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInKX1cblx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gc2hvd0FjdGlvbnNJbnNlcnRlck1vZGFsKGZhbHNlKX1cblx0XHRoZWFkZXJBY3Rpb25zPXs8U3R5bGVkRmxleENvbnRyb2wgZXhwYW5kZWQ9e2ZhbHNlfT5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRyZWY9e3NlYXJjaElucHV0UmVmfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17X18oXG5cdFx0XHRcdFx0J1NlYXJjaCBhY3Rpb24gYnkgbmFtZeKApicsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHQpfVxuXHRcdFx0XHR2YWx1ZT17c2VhcmNofVxuXHRcdFx0XHRvbkNoYW5nZT17c2V0U2VhcmNofVxuXHRcdFx0Lz5cblx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdHZhbHVlPXtjYXRlZ29yeX1cblx0XHRcdFx0b25DaGFuZ2U9e3NldENhdGVnb3J5fVxuXHRcdFx0XHRvcHRpb25zPXtjYXRlZ29yaWVzfVxuXHRcdFx0Lz5cblx0XHQ8L1N0eWxlZEZsZXhDb250cm9sPn1cblx0PlxuXHRcdHshQm9vbGVhbihhY3Rpb25UeXBlcz8ubGVuZ3RoKSAmJiA8U3R5bGVkUGxhY2Vob2xkZXI+XG5cdFx0XHQ8aDM+e19fKFxuXHRcdFx0XHQnTm8gYWN0aW9ucyB3ZXJlIGZvdW5kIGJ5IHlvdXIgc2VhcmNoIHBhcmFtZXRlcnMuJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KX08L2gzPlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0aWNvbj17Y2xvc2VTbWFsbH1cblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdHNldFNlYXJjaCgnJyk7XG5cdFx0XHRcdFx0c2V0Q2F0ZWdvcnkoJycpO1xuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0J0NsZWFyIHNlYXJjaCAmIGNhdGVnb3J5IGZpZWxkcycsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHQpfVxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9TdHlsZWRQbGFjZWhvbGRlcj59XG5cblx0XHQ8R3JpZCBjb2x1bW5zPXs0fSBjbGFzc05hbWU9XCJqZmItYWN0aW9ucy1ncmlkXCI+XG5cdFx0XHR7YWN0aW9uVHlwZXMubWFwKGFjdGlvbiA9PiAoXG5cdFx0XHRcdDxBY3Rpb25HcmlkSXRlbVxuXHRcdFx0XHRcdGtleT17YWN0aW9uLnR5cGV9XG5cdFx0XHRcdFx0YWN0aW9uPXthY3Rpb259XG5cdFx0XHRcdFx0b25DbGljaz17ZXZlbnQgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGFjdGlvbi5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdG9uQWRkQWN0aW9uKGV2ZW50LCBhY3Rpb24pO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpKX1cblx0XHQ8L0dyaWQ+XG5cdDwvTW9kYWw+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRBY3Rpb25Nb2RhbDsiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uLy4uL3N0b3JlJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmNvbnN0IHVzZUNhdGVnb3JpZXNBbmRBY3Rpb25UeXBlcyA9ICgpID0+IHtcblx0Y29uc3QgWyBjYXRlZ29yeSwgc2V0Q2F0ZWdvcnkgXSA9IHVzZVN0YXRlKCAnJyApO1xuXHRjb25zdCBbIHNlYXJjaCwgc2V0U2VhcmNoIF0gICAgID0gdXNlU3RhdGUoICcnICk7XG5cblx0Y29uc3QgeyBhY3Rpb25UeXBlcywgY2F0ZWdvcmllcyB9ID0gdXNlU2VsZWN0KCBzZWxlY3QgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0KCBTVE9SRV9OQU1FICk7XG5cblx0XHRjb25zdCBhY3Rpb25UeXBlc0xpc3QgPSBzZWxlY3Rvci5nZXRTb3J0ZWRBY3Rpb25zKCkuZmlsdGVyKFxuXHRcdFx0bWFwcGVkQWN0aW9uID0+IChcblx0XHRcdFx0Ly8gY2F0ZWdvcnkgY29uZGl0aW9uXG5cdFx0XHRcdChcblx0XHRcdFx0XHQhY2F0ZWdvcnkgfHxcblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHQhbWFwcGVkQWN0aW9uPy5jYXRlZ29yeSAmJiAnbWlzYycgPT09IGNhdGVnb3J5XG5cdFx0XHRcdFx0KSB8fFxuXHRcdFx0XHRcdG1hcHBlZEFjdGlvbj8uY2F0ZWdvcnkgPT09IGNhdGVnb3J5XG5cdFx0XHRcdCkgJiZcblx0XHRcdFx0Ly8gc2VhcmNoIGNvbmRpdGlvblxuXHRcdFx0XHRtYXBwZWRBY3Rpb24/LmxhYmVsPy50b0xvd2VyQ2FzZT8uKCkuaW5jbHVkZXM/Lihcblx0XHRcdFx0XHRzZWFyY2gudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHQpO1xuXG5cdFx0Y29uc3QgY2F0ZWdvcmllc0xpc3QgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdFx0bGFiZWw6IF9fKCAnQWxsJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHR9LFxuXHRcdFx0Li4uc2VsZWN0b3IuZ2V0Q2F0ZWdvcmllcygpLm1hcChcblx0XHRcdFx0bWFwcGVkQ2F0ZWdvcnkgPT4gKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZhbHVlOiBtYXBwZWRDYXRlZ29yeT8udHlwZSxcblx0XHRcdFx0XHRcdGxhYmVsOiBtYXBwZWRDYXRlZ29yeT8ubGFiZWwsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpLFxuXHRcdFx0KSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6ICdtaXNjJyxcblx0XHRcdFx0bGFiZWw6IF9fKCAnTWlzYycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0fSxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvblR5cGVzOiBhY3Rpb25UeXBlc0xpc3QsXG5cdFx0XHRjYXRlZ29yaWVzOiBjYXRlZ29yaWVzTGlzdCxcblx0XHR9O1xuXHR9LCBbIHNlYXJjaCwgY2F0ZWdvcnkgXSApO1xuXG5cdHJldHVybiB7XG5cdFx0c2VhcmNoLFxuXHRcdHNldFNlYXJjaCxcblx0XHRjYXRlZ29yeSxcblx0XHRjYXRlZ29yaWVzLFxuXHRcdGFjdGlvblR5cGVzLFxuXHRcdHNldENhdGVnb3J5LFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2F0ZWdvcmllc0FuZEFjdGlvblR5cGVzOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbmNvbnN0IFN0eWxlZEZsZXggPSBzdHlsZWQoIEZsZXggKWBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0td3AtY29tcG9uZW50cy1jb2xvci1hY2NlbnQsIHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yLCAjMzg1OGU5KSk7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgJiYge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XG4gICAgfVxuYDtcblxuZnVuY3Rpb24gQWxsUHJvQWN0aW9uc0xpbmsoKSB7XG5cdHJldHVybiAoXG5cdFx0IUpldEZvcm1FZGl0b3JEYXRhLmlzQWN0aXZlUHJvXG5cdCkgJiYgPFN0eWxlZEZsZXhcblx0XHRnYXA9eyAzIH1cblx0XHRqdXN0aWZ5PVwiY2VudGVyXCJcblx0PlxuXHRcdDxhXG5cdFx0XHRocmVmPXsgSmV0Rm9ybUVkaXRvckRhdGEudXRtTGlua3MuYWxsUHJvQWN0aW9ucyB9XG5cdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0cmVsPVwiZXh0ZXJuYWwgbm9yZWZlcnJlciBub29wZW5lclwiXG5cdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRcdH0gfVxuXHRcdD5cblx0XHRcdDxGbGV4PlxuXHRcdFx0XHR7IF9fKCAnQWxsIFBSTyBBY3Rpb25zJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8SWNvblxuXHRcdFx0XHRcdHNpemU9eyAyMCB9XG5cdFx0XHRcdFx0aWNvbj17XG5cdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0ICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0XHRcdCAgICAgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRcdFx0XHRcdCAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0ICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTE5LjUgNC41aC03VjZoNC40NGwtNS45NyA1Ljk3IDEuMDYgMS4wNkwxOCA3LjA2djQuNDRoMS41di03Wm0tMTMgMWEyIDIgMCAwIDAtMiAydjEwYTIgMiAwIDAgMCAyIDJoMTBhMiAyIDAgMCAwIDItMnYtM0gxN3YzYS41LjUgMCAwIDEtLjUuNWgtMTBhLjUuNSAwIDAgMS0uNS0uNXYtMTBhLjUuNSAwIDAgMSAuNS0uNWgzVjUuNWgtM1pcIi8+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0ZsZXg+XG5cdFx0PC9hPlxuXHQ8L1N0eWxlZEZsZXg+O1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgICAgID0gd2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz8ge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLkFsbFByb0FjdGlvbnNMaW5rID0gQWxsUHJvQWN0aW9uc0xpbms7XG5cbmV4cG9ydCBkZWZhdWx0IEFsbFByb0FjdGlvbnNMaW5rOyIsImltcG9ydCB1c2VMb29wZWRBY3Rpb24gZnJvbSAnLi4vaG9va3MvdXNlTG9vcGVkQWN0aW9uJztcbmltcG9ydCB1c2VBY3Rpb25zRWRpdCBmcm9tICcuLi9ob29rcy91c2VBY3Rpb25zRWRpdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0dXNlVHJpZ2dlclBvcG92ZXIsXG5cdFBvcG92ZXJTdGFuZGFyZCxcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IHRyYXNoIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBEZWxldGVBY3Rpb25CdXR0b24oKSB7XG5cdGNvbnN0IHsgaW5kZXggfSAgICAgICAgPSB1c2VMb29wZWRBY3Rpb24oKTtcblx0Y29uc3QgeyBkZWxldGVBY3Rpb24gfSA9IHVzZUFjdGlvbnNFZGl0KCk7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIHNob3dQb3BvdmVyLFxuXHRcdCAgICAgIHNldFNob3dQb3BvdmVyLFxuXHRcdCAgICAgIHJlZixcblx0XHQgICAgICBwb3BvdmVyUHJvcHMsXG5cdCAgICAgIH0gPSB1c2VUcmlnZ2VyUG9wb3ZlcigpO1xuXG5cdHJldHVybiA8PlxuXHRcdDxCdXR0b25cblx0XHRcdHJlZj17IHJlZiB9XG5cdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0aWNvbj17IHRyYXNoIH1cblx0XHRcdGxhYmVsPXsgX18oICdEZWxldGUgYWN0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0dG9vbHRpcFBvc2l0aW9uPVwidG9wXCJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93UG9wb3ZlciggcHJldiA9PiAhcHJldiApIH1cblx0XHQvPlxuXHRcdHsgc2hvd1BvcG92ZXIgJiYgPFBvcG92ZXJTdGFuZGFyZFxuXHRcdFx0cGxhY2VtZW50PVwidG9wLWVuZFwiXG5cdFx0XHRub0Fycm93PXsgZmFsc2UgfVxuXHRcdFx0eyAuLi5wb3BvdmVyUHJvcHMgfVxuXHRcdD5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7IF9fKCAnRGVsZXRlIHRoaXMgYWN0aW9uPycsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0Jm5ic3A7XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBkZWxldGVBY3Rpb24oIGluZGV4ICkgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnWWVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9CdXR0b24+XG5cdFx0XHR7ICcgLyAnIH1cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93UG9wb3ZlciggZmFsc2UgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgX18oICdObycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvUG9wb3ZlclN0YW5kYXJkPiB9XG5cdDwvPjtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyAgICAgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuRGVsZXRlQWN0aW9uQnV0dG9uID0gRGVsZXRlQWN0aW9uQnV0dG9uO1xuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVBY3Rpb25CdXR0b247IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgdXNlTG9vcGVkQWN0aW9uIGZyb20gJy4uL2hvb2tzL3VzZUxvb3BlZEFjdGlvbic7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuaW1wb3J0IHsgc2h1ZmZsZSB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoIEJ1dHRvbiApYFxuICAgICY6bm90KFtkYXRhLWNvbmRpdGlvbnMtY291bnQ9XCIwXCJdKTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtY29uZGl0aW9ucy1jb3VudCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMnB4IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5gO1xuXG5mdW5jdGlvbiBFZGl0QWN0aW9uQ29uZGl0aW9uc0J1dHRvbigpIHtcblx0Y29uc3QgeyBhY3Rpb24sIGluZGV4IH0gPSB1c2VMb29wZWRBY3Rpb24oKTtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgc2V0Q3VycmVudEFjdGlvbixcblx0XHQgICAgICBzZXRNZXRhLFxuXHQgICAgICB9ID0gdXNlRGlzcGF0Y2goICdqZXQtZm9ybXMvYWN0aW9ucycgKTtcblxuXHRyZXR1cm4gPFN0eWxlZEJ1dHRvblxuXHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0aWNvbj17IHNodWZmbGUgfVxuXHRcdGRhdGEtY29uZGl0aW9ucy1jb3VudD17IGFjdGlvbj8uY29uZGl0aW9ucz8ubGVuZ3RoID8/IDAgfVxuXHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRzZXRDdXJyZW50QWN0aW9uKCB7IC4uLmFjdGlvbiwgaW5kZXggfSApO1xuXHRcdFx0c2V0TWV0YSggeyBpbmRleCwgbW9kYWxUeXBlOiAnY29uZGl0aW9ucycgfSApO1xuXHRcdH0gfVxuXHRcdGxhYmVsPXsgX18oXG5cdFx0XHQnRWRpdCBDb25kaXRpb25zICYgRXZlbnRzJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpIH1cblx0XHR0b29sdGlwUG9zaXRpb249XCJ0b3BcIlxuXHQvPjtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHdpbmRvdz8uSmV0RkJDb21wb25lbnRzID8/XG5cdHt9O1xud2luZG93LkpldEZCQ29tcG9uZW50cy5FZGl0QWN0aW9uQ29uZGl0aW9uc0J1dHRvbiA9IEVkaXRBY3Rpb25Db25kaXRpb25zQnV0dG9uO1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0QWN0aW9uQ29uZGl0aW9uc0J1dHRvbjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB1c2VBY3Rpb25DYWxsYmFjayBmcm9tICcuLi9ob29rcy91c2VBY3Rpb25DYWxsYmFjayc7XG5pbXBvcnQgdXNlTG9vcGVkQWN0aW9uIGZyb20gJy4uL2hvb2tzL3VzZUxvb3BlZEFjdGlvbic7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZWRpdCB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG5mdW5jdGlvbiBFZGl0QWN0aW9uU2V0dGluZ3NCdXR0b24oKSB7XG5cdGNvbnN0IHsgYWN0aW9uLCBpbmRleCB9ID0gdXNlTG9vcGVkQWN0aW9uKCk7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIHNldEN1cnJlbnRBY3Rpb24sXG5cdFx0ICAgICAgc2V0TWV0YSxcblx0ICAgICAgfSA9IHVzZURpc3BhdGNoKCAnamV0LWZvcm1zL2FjdGlvbnMnICk7XG5cblx0Y29uc3QgQWN0aW9uQ2FsbGJhY2sgPSB1c2VBY3Rpb25DYWxsYmFjayggYWN0aW9uLnR5cGUgKTtcblxuXHRyZXR1cm4gPEJ1dHRvblxuXHRcdGRpc2FibGVkPXsgIUFjdGlvbkNhbGxiYWNrIH1cblx0XHRzaXplPVwic21hbGxcIlxuXHRcdGljb249eyBlZGl0IH1cblx0XHRsYWJlbD17IF9fKCAnRWRpdCBBY3Rpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0dG9vbHRpcFBvc2l0aW9uPVwidG9wXCJcblx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0c2V0Q3VycmVudEFjdGlvbiggeyAuLi5hY3Rpb24sIGluZGV4IH0gKTtcblx0XHRcdHNldE1ldGEoIHsgaW5kZXgsIG1vZGFsVHlwZTogJ3NldHRpbmdzJyB9ICk7XG5cdFx0fSB9XG5cdC8+O1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgICAgICAgICAgICA9IHdpbmRvdz8uSmV0RkJDb21wb25lbnRzID8/IHt9O1xud2luZG93LkpldEZCQ29tcG9uZW50cy5FZGl0QWN0aW9uU2V0dGluZ3NCdXR0b24gPSBFZGl0QWN0aW9uU2V0dGluZ3NCdXR0b247XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRBY3Rpb25TZXR0aW5nc0J1dHRvbjsiLCJpbXBvcnQgdXNlQWN0aW9uc0VkaXQgZnJvbSAnLi4vaG9va3MvdXNlQWN0aW9uc0VkaXQnO1xuaW1wb3J0IEFjdGlvbkxpc3RJdGVtQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L0FjdGlvbkxpc3RJdGVtQ29udGV4dCc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmNvbnN0IEV2ZW50QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBwYWRkaW5nOiAwIDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICM1YzVjNWM7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyBYJztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAjNWM1YzVjO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlOGU5O1xuICAgIH1cbmA7XG5cbmZ1bmN0aW9uIEV2ZW50SXRlbSggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBzbHVnLFxuXHRcdCAgICAgIGluZGV4OiBldmVudEluZGV4LFxuXHQgICAgICB9ID0gcHJvcHM7XG5cdGNvbnN0IHtcblx0XHQgICAgICBhY3Rpb24sXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBBY3Rpb25MaXN0SXRlbUNvbnRleHQgKTtcblxuXHRjb25zdCBldmVudCA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL2V2ZW50cycgKS5nZXRUeXBlKCBzbHVnICksXG5cdFx0WyBzbHVnIF0sXG5cdCk7XG5cblx0Y29uc3QgeyB1cGRhdGVBY3Rpb25PYmogfSA9IHVzZUFjdGlvbnNFZGl0KCk7XG5cblx0Y29uc3Qgb25EZWxldGUgPSAoKSA9PiB7XG5cdFx0YWN0aW9uLmV2ZW50cy5zcGxpY2UoIGV2ZW50SW5kZXgsIDEgKTtcblxuXHRcdHVwZGF0ZUFjdGlvbk9iaiggYWN0aW9uLmlkLCB7IC4uLmFjdGlvbiB9ICk7XG5cdH07XG5cblx0Y29uc3QgdGl0bGUgPSBbXG5cdFx0ZXZlbnQ/LnRpdGxlID8/ICcnLFxuXHRcdF9fKCAnKENsaWNrIHRvIGRlbGV0ZSknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XS5qb2luKCAnICcgKTtcblxuXHRyZXR1cm4gPEV2ZW50QnV0dG9uXG5cdFx0dHlwZT17ICdidXR0b24nIH1cblx0XHR0aXRsZT17IHRpdGxlIH1cblx0XHRvbkNsaWNrPXsgb25EZWxldGUgfVxuXHQ+XG5cdFx0eyBldmVudD8udmFsdWUgPz8gc2x1ZyB9XG5cdDwvRXZlbnRCdXR0b24+O1xufVxuXG5mdW5jdGlvbiBFdmVudHNMaXN0KCBwcm9wcyApIHtcblx0Y29uc3QgeyBldmVudHMgPSBbXSB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIGV2ZW50cy5tYXAoICggZXZlbnQsIGluZGV4ICkgPT4gPEV2ZW50SXRlbVxuXHRcdGtleT17IGV2ZW50IH1cblx0XHRzbHVnPXsgZXZlbnQgfVxuXHRcdGluZGV4PXsgaW5kZXggfVxuXHQvPiApO1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuRXZlbnRzTGlzdCA9IEV2ZW50c0xpc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c0xpc3Q7IiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSAnLi9SZXF1ZXN0QnV0dG9uJztcbmltcG9ydCB3aXRoU2VsZWN0QWN0aW9uTG9hZGluZyBmcm9tICcuLi9ob29rcy93aXRoU2VsZWN0QWN0aW9uTG9hZGluZyc7XG5pbXBvcnQgd2l0aERpc3BhdGNoQWN0aW9uTG9hZGluZ1xuXHRmcm9tICcuLi9ob29rcy93aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuaW1wb3J0IHsgd2l0aFNlbGVjdCwgd2l0aERpc3BhdGNoIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuZnVuY3Rpb24gRmV0Y2hBamF4QnV0dG9uKCB7XG5cdGluaXRpYWxMYWJlbCA9ICdWYWxpZCcsXG5cdGxhYmVsID0gJ0luVmFsaWQnLFxuXHRhamF4QXJncyA9IHt9LFxuXHRsb2FkaW5nU3RhdGUsXG5cdHNldExvYWRpbmcsXG5cdGlkLFxuXHRzZXRSZXN1bHRTdWNjZXNzLFxuXHRzZXRSZXN1bHRGYWlsLFxufSApIHtcblxuXHRjb25zdCBnZXRMYWJlbCA9ICgpID0+IHtcblx0XHRpZiAoIC0xID09PSBsb2FkaW5nU3RhdGUuaWQgJiYgaW5pdGlhbExhYmVsICkge1xuXHRcdFx0cmV0dXJuIGluaXRpYWxMYWJlbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGFiZWw7XG5cdH07XG5cblx0cmV0dXJuIDxSZXF1ZXN0QnV0dG9uXG5cdFx0ZGlzYWJsZWQ9eyBsb2FkaW5nU3RhdGUubG9hZGluZyB9XG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XG5cdFx0bGFiZWw9eyBnZXRMYWJlbCgpIH1cblx0XHRvbkxvYWRpbmc9eyAoKSA9PiB7XG5cdFx0XHRzZXRMb2FkaW5nKCBpZCApO1xuXHRcdH0gfVxuXHRcdG9uU3VjY2Vzc1JlcXVlc3Q9eyByZXNwb25zZSA9PiB7XG5cdFx0XHRzZXRSZXN1bHRTdWNjZXNzKCBpZCwgcmVzcG9uc2UgKTtcblx0XHR9IH1cblx0XHRvbkZhaWxSZXF1ZXN0PXsgKCkgPT4gc2V0UmVzdWx0RmFpbCggaWQgKSB9XG5cdFx0Y2xhc3NOYW1lPXsgbG9hZGluZ1N0YXRlLmJ1dHRvbkNsYXNzTmFtZSB9XG5cdD5cblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XG5cdDwvUmVxdWVzdEJ1dHRvbj47XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgICAgICAgICAgICAgICAgID0gd2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz8ge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLkZldGNoQWpheEJ1dHRvbiA9IEZldGNoQWpheEJ1dHRvbjtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCggd2l0aFNlbGVjdEFjdGlvbkxvYWRpbmcgKSxcblx0d2l0aERpc3BhdGNoKCB3aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nICksXG4pKCBGZXRjaEFqYXhCdXR0b24gKTsiLCJpbXBvcnQgUmVxdWVzdEJ1dHRvbiBmcm9tICcuL1JlcXVlc3RCdXR0b24nO1xuaW1wb3J0IHdpdGhEaXNwYXRjaEFjdGlvbkxvYWRpbmdcblx0ZnJvbSAnLi4vaG9va3Mvd2l0aERpc3BhdGNoQWN0aW9uTG9hZGluZyc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcbmltcG9ydCB7IHdpdGhEaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xuXG5mdW5jdGlvbiBGZXRjaEFwaUJ1dHRvbigge1xuXHRpbml0aWFsTGFiZWwgPSAnVmFsaWQnLFxuXHRsYWJlbCA9ICdJblZhbGlkJyxcblx0YXBpQXJncyA9IHt9LFxuXHRsb2FkaW5nU3RhdGUsXG5cdHNldExvYWRpbmcsXG5cdGlkLFxuXHRzZXRSZXN1bHRTdWNjZXNzLFxuXHRzZXRSZXN1bHRGYWlsLFxuXHRvbkxvYWRpbmcgPSAoKSA9PiB7fSxcblx0b25TdWNjZXNzID0gKCkgPT4ge30sXG5cdG9uRmFpbCA9ICgpID0+IHt9LFxuXHRpc0hpZGRlbiA9IGZhbHNlLFxufSApIHtcblxuXHRjb25zdCBnZXRMYWJlbCA9ICgpID0+IHtcblx0XHRpZiAoIChcblx0XHRcdC0xID09PSBsb2FkaW5nU3RhdGUuaWQgfHwgbG9hZGluZ1N0YXRlLmxvYWRpbmdcblx0XHQpICYmIGluaXRpYWxMYWJlbCApIHtcblx0XHRcdHJldHVybiBpbml0aWFsTGFiZWw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxhYmVsO1xuXHR9O1xuXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxuXHRcdGRpc2FibGVkPXsgbG9hZGluZ1N0YXRlLmxvYWRpbmcgfVxuXHRcdGhhc0ZldGNoZWQ9eyBsb2FkaW5nU3RhdGUuaWQgfVxuXHRcdGxhYmVsPXsgZ2V0TGFiZWwoKSB9XG5cdFx0Y2xhc3NOYW1lPXsgbG9hZGluZ1N0YXRlLmJ1dHRvbkNsYXNzTmFtZSB9XG5cdFx0aXNIaWRkZW49eyBpc0hpZGRlbiB9XG5cdFx0Y3VzdG9tUmVxdWVzdD17ICgpID0+IHtcblx0XHRcdHNldExvYWRpbmcoIGlkICk7XG5cdFx0XHRvbkxvYWRpbmcoKTtcblxuXHRcdFx0YXBpRmV0Y2goIGFwaUFyZ3MgKS50aGVuKCByZXNwb25zZSA9PiB7XG5cdFx0XHRcdHNldFJlc3VsdFN1Y2Nlc3MoIGlkLCByZXNwb25zZSApO1xuXHRcdFx0XHRvblN1Y2Nlc3MoIHJlc3BvbnNlICk7XG5cdFx0XHR9ICkuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0c2V0UmVzdWx0RmFpbCggaWQgKTtcblx0XHRcdFx0b25GYWlsKCBlcnJvciApO1xuXHRcdFx0fSApO1xuXHRcdH0gfVxuXHRcdGlzRGVzdHJ1Y3RpdmU9eyBsb2FkaW5nU3RhdGUuYnV0dG9uQ2xhc3NOYW1lLmluY2x1ZGVzKCAnaXMtaW52YWxpZCcgKSB9XG5cdD5cblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XG5cdDwvUmVxdWVzdEJ1dHRvbj47XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuRmV0Y2hBcGlCdXR0b24gPSBGZXRjaEFwaUJ1dHRvbjtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aERpc3BhdGNoKCB3aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nICksXG4pKCBGZXRjaEFwaUJ1dHRvbiApOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHtcblx0UmVxdWlyZWRMYWJlbCxcblx0TGFiZWwsXG5cdEljb25UZXh0LFxuXHRSb3dDb250cm9sLCBDb250cm9sV2l0aEVycm9yU3R5bGUsXG5cdEhlbHAsXG5cdFN0eWxlZFNlbGVjdENvbnRyb2xcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IENhcmQsIEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgY3ggfSBmcm9tICdAbGluYXJpYS9jb3JlJztcbmltcG9ydCB7IHVzZUluc3RhbmNlSWQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xuaW1wb3J0IHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyIGZyb20gJy4uL2hvb2tzL3VzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyJztcblxuY29uc3QgU3R5bGVkRmxleCA9IHN0eWxlZCggRmxleCApYFxuICAgIHBhZGRpbmc6IDFlbTtcbmA7XG5cbmZ1bmN0aW9uIEZpZWxkc01hcEZpZWxkKCB7XG5cdHRhZyxcblx0bGFiZWwsXG5cdGhlbHAgPSAnJyxcblx0aXNSZXF1aXJlZCxcblx0Zm9ybUZpZWxkcyxcblx0dmFsdWUsXG5cdG9uQ2hhbmdlLFxufSApIHtcblx0Y29uc3QgTGFiZWxDb21wb25lbnQgPSBpc1JlcXVpcmVkID8gUmVxdWlyZWRMYWJlbCA6IExhYmVsO1xuXG5cdGNvbnN0IHsgaGFzRXJyb3IsIHNldFNob3dFcnJvciB9ID0gdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIoIHtcblx0XHRpc1N1cHBvcnRlZDogZXJyb3IgPT4gKFxuXHRcdFx0YGZpZWxkXyR7IHRhZyB9YCA9PT0gZXJyb3I/LnByb3BlcnR5XG5cdFx0KSxcblx0fSApO1xuXG5cdGNvbnN0IGh0bWxJZCA9IHVzZUluc3RhbmNlSWQoIEZpZWxkc01hcEZpZWxkLCAnamZiLWZpZWxkLW1hcCcgKTtcblxuXHRyZXR1cm4gPENhcmQgZWxldmF0aW9uPXsgMiB9PlxuXHRcdDxTdHlsZWRGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17IDMgfT5cblx0XHRcdHsgaGFzRXJyb3IgJiYgPEljb25UZXh0PlxuXHRcdFx0XHR7IF9fKFxuXHRcdFx0XHRcdCdQbGVhc2UgZmlsbCB0aGlzIHJlcXVpcmVkIGZpZWxkJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9JY29uVGV4dD4gfVxuXHRcdFx0PFJvd0NvbnRyb2xcblx0XHRcdFx0Y3JlYXRlSWQ9eyBmYWxzZSB9XG5cdFx0XHRcdGNvbnRyb2xTaXplPXsgMSB9XG5cdFx0XHRcdGNsYXNzTmFtZT17IGN4KFxuXHRcdFx0XHRcdGhhc0Vycm9yICYmIENvbnRyb2xXaXRoRXJyb3JTdHlsZSxcblx0XHRcdFx0KSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxMYWJlbENvbXBvbmVudCBodG1sRm9yPXsgaHRtbElkIH0+XG5cdFx0XHRcdFx0eyBsYWJlbCB9XG5cdFx0XHRcdDwvTGFiZWxDb21wb25lbnQ+XG5cdFx0XHRcdDxTdHlsZWRTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0aWQ9eyBodG1sSWQgfVxuXHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuXHRcdFx0XHRcdG9uQmx1cj17ICgpID0+IHNldFNob3dFcnJvciggdHJ1ZSApIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Jvd0NvbnRyb2w+XG5cdFx0XHR7IEJvb2xlYW4oIGhlbHAgKSAmJiA8SGVscD5cblx0XHRcdFx0eyBoZWxwIH1cblx0XHRcdDwvSGVscD4gfVxuXHRcdDwvU3R5bGVkRmxleD5cblx0PC9DYXJkPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRzTWFwRmllbGQ7IiwiaW1wb3J0IEFjdGlvbkl0ZW1XcmFwcGVyIGZyb20gJy4vQWN0aW9uSXRlbVdyYXBwZXInO1xuaW1wb3J0IEFjdGlvbkl0ZW1Gb290ZXIgZnJvbSAnLi9BY3Rpb25JdGVtRm9vdGVyJztcbmltcG9ydCBBY3Rpb25JdGVtSGVhZGVyIGZyb20gJy4vQWN0aW9uSXRlbUhlYWRlcic7XG5pbXBvcnQgQWN0aW9uSXRlbUJvZHkgZnJvbSAnLi9BY3Rpb25JdGVtQm9keSc7XG5cbmZ1bmN0aW9uIExpc3RBY3Rpb25JdGVtKCkge1xuXHRyZXR1cm4gPD5cblx0XHQ8QWN0aW9uSXRlbVdyYXBwZXI+XG5cdFx0XHQ8QWN0aW9uSXRlbUhlYWRlci8+XG5cdFx0XHQ8QWN0aW9uSXRlbUJvZHkvPlxuXHRcdFx0PEFjdGlvbkl0ZW1Gb290ZXIvPlxuXHRcdDwvQWN0aW9uSXRlbVdyYXBwZXI+XG5cdDwvPjtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyAgICAgICAgICAgICAgICA9IHdpbmRvdz8uSmV0RkJDb21wb25lbnRzID8/IHt9O1xud2luZG93LkpldEZCQ29tcG9uZW50cy5MaXN0QWN0aW9uSXRlbSA9IExpc3RBY3Rpb25JdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0QWN0aW9uSXRlbTsiLCJmdW5jdGlvbiBQbGFjZWhvbGRlck1lc3NhZ2UoIHsgc3R5bGUsIGNoaWxkcmVuIH0gKSB7XG5cdGNvbnN0IHByb3BTdHlsZSA9IHtcblx0XHRmb250U2l6ZTogJzEuNWVtJyxcblx0XHRwYWRkaW5nOiAnMmVtJyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdGJhY2tncm91bmRDb2xvcjogJ2FsaWNlYmx1ZScsXG5cdFx0Li4uc3R5bGUsXG5cdH07XG5cblx0cmV0dXJuIDxwIHN0eWxlPXsgcHJvcFN0eWxlIH0+eyBjaGlsZHJlbiB9PC9wPjtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyAgICAgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuUGxhY2Vob2xkZXJNZXNzYWdlID0gUGxhY2Vob2xkZXJNZXNzYWdlO1xuXG5leHBvcnQgZGVmYXVsdCBQbGFjZWhvbGRlck1lc3NhZ2U7IiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rLCBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuZnVuY3Rpb24gUHJvQWN0aW9uT3ZlcmxheSggeyBhY3Rpb24gfSApIHtcblxuXHRyZXR1cm4gPEZsZXhcblx0XHRkaXJlY3Rpb249XCJjb2x1bW5cIlxuXHRcdGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxuXHRcdGFsaWduPVwiY2VudGVyXCJcblx0PlxuXHRcdDxzcGFuPnsgX18oXG5cdFx0XHQnVGhpcyBpcyBwYWlkIGFkZG9uLiBZb3UgY2FuIGJ1eSBpdCBoZXJlOicsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSB9PC9zcGFuPlxuXHRcdDxFeHRlcm5hbExpbmtcblx0XHRcdGhyZWY9eyAoXG5cdFx0XHRcdGFjdGlvbi5wcm9BY3Rpb25MaW5rID8/XG5cdFx0XHRcdCdodHRwczovL2pldGZvcm1idWlsZGVyLmNvbS9wcmljaW5nLydcblx0XHRcdCkgfVxuXHRcdD5cblx0XHRcdGpldGZvcm1idWlsZGVyLmNvbVxuXHRcdDwvRXh0ZXJuYWxMaW5rPlxuXHQ8L0ZsZXg+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9BY3Rpb25PdmVybGF5OyIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gUmVxdWVzdEJ1dHRvbigge1xuXHRsYWJlbCxcblx0YWpheEFyZ3MgPSB7fSxcblx0b25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHtcblx0fSxcblx0b25GYWlsUmVxdWVzdCA9ICgpID0+IHtcblx0fSxcblx0b25Mb2FkaW5nID0gKCkgPT4ge1xuXHR9LFxuXHRjbGFzc05hbWUgPSAnJyxcblx0Y2hpbGRyZW4gPSAoKSA9PiB7XG5cdH0sXG5cdGRpc2FibGVkID0gZmFsc2UsXG5cdGN1c3RvbVJlcXVlc3QgPSBmYWxzZSxcblx0aXNIaWRkZW4gPSBmYWxzZSxcblx0aGFzRmV0Y2hlZCA9IC0xLFxuXHQuLi5idXR0b25Qcm9wc1xufSApIHtcblxuXHRjbGFzc05hbWUgPSAoXG5cdFx0J3N0cmluZycgPT09IHR5cGVvZiBjbGFzc05hbWVcblx0XHQ/IGNsYXNzTmFtZVxuXHRcdDogY2xhc3NOYW1lLmpvaW4oICcgJyApXG5cdCk7XG5cblx0Y29uc3QgZGVmYXVsdFJlcXVlc3QgPSAoKSA9PiB7XG5cdFx0b25Mb2FkaW5nKCk7XG5cblx0XHRqUXVlcnkuYWpheCgge1xuXHRcdFx0dXJsOiBhamF4dXJsLFxuXHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0ZGF0YTogYWpheEFyZ3MsXG5cdFx0fSApLlxuXHRcdFx0ZG9uZSggcmVzcG9uc2UgPT4gcmVzcG9uc2Uuc3VjY2Vzc1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgPyBvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApXG5cdFx0XHQgICAgICAgICAgICAgICAgICA6IG9uRmFpbFJlcXVlc3QoKSApLlxuXHRcdFx0ZmFpbCggKCkgPT4gb25GYWlsUmVxdWVzdCgpICk7XG5cdH07XG5cblx0Y29uc3QgcmVxdWVzdCA9ICgpID0+IHtcblx0XHRpZiAoIGZhbHNlID09PSBjdXN0b21SZXF1ZXN0ICkge1xuXHRcdFx0ZGVmYXVsdFJlcXVlc3QoKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXN0b21SZXF1ZXN0ICkge1xuXHRcdFx0Y3VzdG9tUmVxdWVzdCgpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdG9uRmFpbFJlcXVlc3QoKTtcblx0XHR9XG5cdH07XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCBpc0hpZGRlbiAmJiAtMSA9PT0gaGFzRmV0Y2hlZCApIHtcblx0XHRcdHJlcXVlc3QoKTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbXSApO1xuXG5cdGlmICggaXNIaWRkZW4gKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gPEJ1dHRvblxuXHRcdGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuXHRcdGtleT17ICd2YWxpZGF0ZV9hcGlfa2V5JyB9XG5cdFx0b25DbGljaz17IHJlcXVlc3QgfVxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSArICcgamV0LWZiLWJ1dHRvbiBsaW5lLXdpdGgtaW5wdXQnIH1cblx0XHR2YXJpYW50PXsgJ3NlY29uZGFyeScgfVxuXHRcdHsgLi4uYnV0dG9uUHJvcHMgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XG5cdFx0eyBsYWJlbCB9XG5cdDwvQnV0dG9uPjtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQ29tcG9uZW50cyAgICAgICAgICAgICAgID0gd2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz8ge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLlJlcXVlc3RCdXR0b24gPSBSZXF1ZXN0QnV0dG9uO1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0QnV0dG9uO1xuIiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSAnLi9SZXF1ZXN0QnV0dG9uJztcbmltcG9ydCB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzIGZyb20gJy4uL2hvb2tzL3VzZVN0YXRlTG9hZGluZ0NsYXNzZXMnO1xuXG5mdW5jdGlvbiBSZXF1ZXN0TG9hZGluZ0J1dHRvbigge1xuXHRsYWJlbCxcblx0YWpheEFyZ3MgPSB7fSxcblx0b25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHt9LFxuXHRvbkZhaWxSZXF1ZXN0ID0gKCkgPT4ge30sXG59ICkge1xuXG5cdGNvbnN0IFtcblx0XHQgICAgICBjbGFzc05hbWUsXG5cdFx0ICAgICAgc2V0TG9hZGluZ0NsYXNzLFxuXHRcdCAgICAgIGNsZWFyTG9hZGluZ0NsYXNzLFxuXHQgICAgICBdID0gdXNlU3RhdGVMb2FkaW5nQ2xhc3NlcygpO1xuXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxuXHRcdGFqYXhBcmdzPXsgYWpheEFyZ3MgfVxuXHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XG5cdFx0b25TdWNjZXNzUmVxdWVzdD17IHJlc3BvbnNlID0+IHtcblx0XHRcdGNsZWFyTG9hZGluZ0NsYXNzKCk7XG5cdFx0XHRvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApO1xuXHRcdH0gfVxuXHRcdG9uRmFpbFJlcXVlc3Q9eyAoKSA9PiB7XG5cdFx0XHRjbGVhckxvYWRpbmdDbGFzcygpO1xuXHRcdFx0b25GYWlsUmVxdWVzdCgpO1xuXHRcdH0gfVxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdD5cblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XG5cdDwvUmVxdWVzdEJ1dHRvbj47XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgICAgICAgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuUmVxdWVzdExvYWRpbmdCdXR0b24gPSBSZXF1ZXN0TG9hZGluZ0J1dHRvbjtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdExvYWRpbmdCdXR0b247IiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBUb2dnbGVDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuY29uc3QgRkxBR1NfU09VUkNFID0gJ3NpbmdsZV92YWx1ZV9hc19hcnJheSc7XG5cbmZ1bmN0aW9uIFNpbmdsZVZhbHVlQXNBcnJheVRvZ2dsZSh7XG4gICAgZmllbGROYW1lLFxuICAgIGdldE1hcEZpZWxkLFxuICAgIHNldE1hcEZpZWxkLFxuICAgIHNob3dIZWxwID0gZmFsc2UsXG59KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgICAgbGFiZWw9e19fKCdTYXZlIHNpbmdsZSB2YWx1ZSBhcyBhcnJheScsICdqZXQtZm9ybS1idWlsZGVyJyl9XG4gICAgICAgICAgICBoZWxwPXtcbiAgICAgICAgICAgICAgICBzaG93SGVscFxuICAgICAgICAgICAgICAgICAgICA/IF9fKCdPdGhlciB0YXJnZXQgZmllbGQgc2V0dGluZ3MgbWF5IGFmZmVjdCB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBzYXZlZCBhcyBhbiBhcnJheS4nLCAnamV0LWZvcm0tYnVpbGRlcicpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVja2VkPXshIWdldE1hcEZpZWxkKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IEZMQUdTX1NPVVJDRSxcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRNYXBGaWVsZCh7XG4gICAgICAgICAgICAgICAgc291cmNlOiBGTEFHU19TT1VSQ0UsXG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkOiBmaWVsZE5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICEhdmFsdWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVZhbHVlQXNBcnJheVRvZ2dsZTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7XG5cdFJlcXVpcmVkTGFiZWwsXG5cdExhYmVsLFxuXHRJY29uVGV4dCxcblx0Um93Q29udHJvbCwgQ29udHJvbFdpdGhFcnJvclN0eWxlLFxuXHRIZWxwLFxuXHRUYWJsZUxpc3RTdHlsZSxcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IEZsZXgsIEZsZXhJdGVtLCBDYXJkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IGN4IH0gZnJvbSAnQGxpbmFyaWEvY29yZSc7XG5pbXBvcnQgeyB1c2VJbnN0YW5jZUlkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcbmltcG9ydCB1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlciBmcm9tICcuLi9ob29rcy91c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlcic7XG5pbXBvcnQgVmFsaWRhdG9yUHJvdmlkZXIgZnJvbSAnLi9WYWxpZGF0b3JQcm92aWRlcic7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCwgY2xvbmVFbGVtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuY29uc3QgU3R5bGVkRmxleCA9IHN0eWxlZCggRmxleCApYFxuICAgIHBhZGRpbmc6IDFlbTtcbmA7XG5cbmZ1bmN0aW9uIFRhYmxlTGlzdENvbnRhaW5lciggeyBjaGlsZHJlbiB9ICkge1xuXHRyZXR1cm4gPENhcmQgY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5DYXJkfT5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9DYXJkPjtcbn1cblxuZnVuY3Rpb24gVGFibGVMaXN0Um93Q29udGVudCgge1xuXHR0YWcsXG5cdGxhYmVsLFxuXHRoZWxwLFxuXHRpc1JlcXVpcmVkLFxuXHRjaGlsZHJlblxufSApIHtcblx0Y29uc3QgTGFiZWxDb21wb25lbnQgPSBpc1JlcXVpcmVkID8gUmVxdWlyZWRMYWJlbCA6IExhYmVsO1xuXG5cdGNvbnN0IHsgaGFzRXJyb3IsIHNldFNob3dFcnJvciB9ID0gdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIoIHtcblx0XHRpc1N1cHBvcnRlZDogZXJyb3IgPT4gKFxuXHRcdFx0YGZpZWxkXyR7IHRhZyB9YCA9PT0gZXJyb3I/LnByb3BlcnR5XG5cdFx0KSxcblx0fSApO1xuXG5cdGNvbnN0IGh0bWxJZCA9IHVzZUluc3RhbmNlSWQoIFRhYmxlTGlzdFJvd0NvbnRlbnQsIHRhZyApO1xuXG5cdHJldHVybiA8U3R5bGVkRmxleCBjbGFzc05hbWU9e1RhYmxlTGlzdFN0eWxlLlRkfSBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9eyAzIH0+XG5cdFx0eyBoYXNFcnJvciAmJiA8SWNvblRleHQ+XG5cdFx0XHR7IF9fKFxuXHRcdFx0XHQnUGxlYXNlIGZpbGwgdGhpcyByZXF1aXJlZCBmaWVsZCcsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgfVxuXHRcdDwvSWNvblRleHQ+IH1cblx0XHQ8Um93Q29udHJvbFxuXHRcdFx0Y3JlYXRlSWQ9eyBmYWxzZSB9XG5cdFx0XHRjb250cm9sU2l6ZT17IDEgfVxuXHRcdFx0Y2xhc3NOYW1lPXsgY3goXG5cdFx0XHRcdGhhc0Vycm9yICYmIENvbnRyb2xXaXRoRXJyb3JTdHlsZSxcblx0XHRcdCkgfVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5UZEl0ZW19PlxuXHRcdFx0XHQ8TGFiZWxDb21wb25lbnQgaHRtbEZvcj17IGh0bWxJZCB9ICBjbGFzc05hbWU9e1RhYmxlTGlzdFN0eWxlLldoaXRlU3BhY2VOb3JtYWx9PlxuXHRcdFx0XHRcdHsgbGFiZWwgfVxuXHRcdFx0XHQ8L0xhYmVsQ29tcG9uZW50PlxuXHRcdFx0XHR7IEJvb2xlYW4oIGhlbHAgKSAmJiA8SGVscCBjbGFzc05hbWU9e1RhYmxlTGlzdFN0eWxlLldoaXRlU3BhY2VOb3JtYWx9PlxuXHRcdFx0XHRcdHsgaGVscCB9XG5cdFx0XHRcdDwvSGVscD4gfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5UZEl0ZW19PlxuXHRcdFx0XHR7IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRcdD8gY2hpbGRyZW4oIHsgc2V0U2hvd0Vycm9yLCBodG1sSWQgfSApXG5cdFx0XHRcdFx0OiBpc1ZhbGlkRWxlbWVudCggY2hpbGRyZW4gKVxuXHRcdFx0XHRcdFx0PyBjbG9uZUVsZW1lbnQoIGNoaWxkcmVuLCB7IHNldFNob3dFcnJvciB9IClcblx0XHRcdFx0XHRcdDogY2hpbGRyZW5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9Sb3dDb250cm9sPlxuXHQ8L1N0eWxlZEZsZXg+O1xufVxuXG5mdW5jdGlvbiBUYWJsZUxpc3RSb3coIHtcblx0dGFnLFxuXHRsYWJlbCxcblx0aGVscCA9ICcnLFxuXHRpc1JlcXVpcmVkLFxuXHRjaGlsZHJlblxufSApIHtcblxuXHRyZXR1cm4gPFZhbGlkYXRvclByb3ZpZGVyXG5cdFx0aXNTdXBwb3J0ZWQ9eyBlcnJvciA9PiB7XG5cdFx0XHRyZXR1cm4gYGZpZWxkXyR7IHRhZyB9YCA9PT0gZXJyb3I/LnByb3BlcnR5XG5cdFx0fSB9XG5cdD5cblx0XHR7ICggeyBoYXNFcnJvciwgc2V0U2hvd0Vycm9yIH0gKSA9PiA8VGFibGVMaXN0Um93Q29udGVudFxuXHRcdFx0dGFnPXsgdGFnIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0aGVscD17IGhlbHAgfVxuXHRcdFx0aXNSZXF1aXJlZD17IGlzUmVxdWlyZWQgfVxuXHRcdD5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvVGFibGVMaXN0Um93Q29udGVudD4gfVxuXHQ8L1ZhbGlkYXRvclByb3ZpZGVyPjtcbn1cblxuZnVuY3Rpb24gVGFibGVMaXN0SGVhZCggeyBjb2x1bW5zIH0gKSB7XG5cdHJldHVybiAoXG5cdFx0PEZsZXggY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5UaH0+XG5cdFx0XHR7IGNvbHVtbnMubWFwKCAoIGNvbHVtbiwgaW5kZXggKSA9PiAoXG5cdFx0XHRcdDxGbGV4SXRlbVxuXHRcdFx0XHRcdGtleT17IGBjb2xfJHtpbmRleH1gIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9e1RhYmxlTGlzdFN0eWxlLlRoSXRlbX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgY29sdW1uIH1cblx0XHRcdFx0PC9GbGV4SXRlbT5cblx0XHRcdCkgKSB9XG5cdFx0PC9GbGV4PlxuXHQpO1xufVxuXG5leHBvcnQge1xuXHRUYWJsZUxpc3RDb250YWluZXIsXG5cdFRhYmxlTGlzdFJvdyxcblx0VGFibGVMaXN0SGVhZFxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB1c2VMb29wZWRBY3Rpb24gZnJvbSAnLi4vaG9va3MvdXNlTG9vcGVkQWN0aW9uJztcbmltcG9ydCB1c2VBY3Rpb25zRWRpdCBmcm9tICcuLi9ob29rcy91c2VBY3Rpb25zRWRpdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2VlbiwgdW5zZWVuIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmZ1bmN0aW9uIFRvZ2dsZUFjdGlvbkV4ZWN1dGlvbkJ1dHRvbigpIHtcblx0Y29uc3QgeyBhY3Rpb24gfSA9IHVzZUxvb3BlZEFjdGlvbigpO1xuXG5cdGNvbnN0IGlzRXhlY3V0ZSA9IChcblx0XHRhY3Rpb24uaXNfZXhlY3V0ZSA/PyB0cnVlXG5cdCk7XG5cblx0Y29uc3QgeyB0b2dnbGVFeGVjdXRlIH0gPSB1c2VBY3Rpb25zRWRpdCgpO1xuXG5cdHJldHVybiA8QnV0dG9uXG5cdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRpY29uPXsgaXNFeGVjdXRlID8gdW5zZWVuIDogc2VlbiB9XG5cdFx0bGFiZWw9eyBpc0V4ZWN1dGVcblx0XHQgICAgICAgID8gX18oICdUdXJuIG9mZicsICdqZXQtZm9ybS1idWlsZGVyJyApXG5cdFx0ICAgICAgICA6IF9fKCAnVHVybiBvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRvbkNsaWNrPXsgKCkgPT4gdG9nZ2xlRXhlY3V0ZSggYWN0aW9uICkgfVxuXHRcdHRvb2x0aXBQb3NpdGlvbj1cInRvcFwiXG5cdC8+O1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHdpbmRvdz8uSmV0RkJDb21wb25lbnRzID8/XG5cdHt9O1xud2luZG93LkpldEZCQ29tcG9uZW50cy5Ub2dnbGVBY3Rpb25FeGVjdXRpb25CdXR0b24gPSBUb2dnbGVBY3Rpb25FeGVjdXRpb25CdXR0b247XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUFjdGlvbkV4ZWN1dGlvbkJ1dHRvbjsiLCJpbXBvcnQgUmVxdWVzdEJ1dHRvbiBmcm9tICcuL1JlcXVlc3RCdXR0b24nO1xuaW1wb3J0IHVzZVN0YXRlVmFsaWRDbGFzc2VzIGZyb20gJy4uL2hvb2tzL3VzZVN0YXRlVmFsaWRDbGFzc2VzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZnVuY3Rpb24gVmFsaWRhdGVCdXR0b24oIHtcblx0aW5pdGlhbFZhbGlkID0gbnVsbCxcblx0bGFiZWwsXG5cdGFqYXhBcmdzID0ge30sXG5cdG9uVmFsaWQgPSAoKSA9PiB7fSxcblx0b25JbnZhbGlkID0gKCkgPT4ge30sXG59ICkge1xuXG5cdGNvbnN0IFsgYnV0dG9uUHJvcHMsIHNldEJ1dHRvblByb3BzIF0gPSB1c2VTdGF0ZSgge30gKTtcblxuXHRjb25zdCBbXG5cdFx0ICAgICAgY2xhc3NOYW1lLFxuXHRcdCAgICAgIHNldFZhbGlkQ2xhc3MsXG5cdFx0ICAgICAgc2V0SW52YWxpZENsYXNzLFxuXHRcdCAgICAgIHNldExvYWRpbmdDbGFzcyxcblx0ICAgICAgXSA9IHVzZVN0YXRlVmFsaWRDbGFzc2VzKCBpbml0aWFsVmFsaWQgfHwgbnVsbCApO1xuXG5cdGNvbnN0IHNldFZhbGlkID0gcmVzcG9uc2UgPT4ge1xuXHRcdHNldFZhbGlkQ2xhc3MoKTtcblx0XHRvblZhbGlkKCByZXNwb25zZSApO1xuXHRcdHNldEJ1dHRvblByb3BzKCB7fSApO1xuXHR9O1xuXG5cdGNvbnN0IHNldEludmFsaWQgPSAoKSA9PiB7XG5cdFx0c2V0SW52YWxpZENsYXNzKCk7XG5cdFx0b25JbnZhbGlkKCk7XG5cdFx0c2V0QnV0dG9uUHJvcHMoIHsgaXNEZXN0cnVjdGl2ZTogdHJ1ZSB9ICk7XG5cdH07XG5cblx0cmV0dXJuIDxSZXF1ZXN0QnV0dG9uXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XG5cdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0b25Mb2FkaW5nPXsgc2V0TG9hZGluZ0NsYXNzIH1cblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgc2V0VmFsaWQgfVxuXHRcdG9uRmFpbFJlcXVlc3Q9eyBzZXRJbnZhbGlkIH1cblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdHsgLi4uYnV0dG9uUHJvcHMgfVxuXHQ+XG5cdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxuXHQ8L1JlcXVlc3RCdXR0b24+O1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgID0gd2luZG93Py5KZXRGQkNvbXBvbmVudHMgPz8ge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLlZhbGlkYXRlQnV0dG9uID0gVmFsaWRhdGVCdXR0b247XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRlQnV0dG9uOyIsImltcG9ydCBGZXRjaEFqYXhCdXR0b24gZnJvbSAnLi9GZXRjaEFqYXhCdXR0b24nO1xuaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmZ1bmN0aW9uIFZhbGlkYXRlQnV0dG9uV2l0aFN0b3JlKCBwcm9wcyApIHtcblxuXHRjb25zdCBjdXJyZW50QWN0aW9uID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHRyZXR1cm4gc2VsZWN0KCBTVE9SRV9OQU1FICkuZ2V0Q3VycmVudEFjdGlvbigpO1xuXHR9LCBbXSApO1xuXG5cdHJldHVybiA8RmV0Y2hBamF4QnV0dG9uXG5cdFx0aWQ9eyBjdXJyZW50QWN0aW9uLmlkIH1cblx0XHR7IC4uLnByb3BzIH1cblx0Lz47XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgICAgICAgICAgICAgICAgICAgICAgICAgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cyA/PyB7fTtcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMuVmFsaWRhdGVCdXR0b25XaXRoU3RvcmUgPSBWYWxpZGF0ZUJ1dHRvbldpdGhTdG9yZTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVCdXR0b25XaXRoU3RvcmU7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQge1xuXHRSZXF1aXJlZExhYmVsLFxuXHRMYWJlbCxcblx0Um93Q29udHJvbCxcblx0Um93Q29udHJvbEVuZCxcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IFN0eWxlZFNlbGVjdENvbnRyb2wgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyIGZyb20gJy4uL2hvb2tzL3VzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyJztcblxuZnVuY3Rpb24gVmFsaWRhdGVkU2VsZWN0Q29udHJvbCgge1xuXHR2YWx1ZSxcblx0b25DaGFuZ2UsXG5cdGxhYmVsLFxuXHRoZWxwID0gJycsXG5cdG9wdGlvbnMsXG5cdHJlcXVpcmVkID0gZmFsc2UsXG5cdGlzRXJyb3JTdXBwb3J0ZWQgPSAoKSA9PiBmYWxzZSxcbn0gKSB7XG5cblx0Y29uc3QgeyBoYXNFcnJvciwgc2V0U2hvd0Vycm9yIH0gPSB1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlcigge1xuXHRcdGlzU3VwcG9ydGVkOiBpc0Vycm9yU3VwcG9ydGVkLFxuXHR9ICk7XG5cblx0Y29uc3QgTGFiZWxDb21wb25lbnQgPSByZXF1aXJlZCA/IFJlcXVpcmVkTGFiZWwgOiBMYWJlbDtcblxuXHRyZXR1cm4gPFJvd0NvbnRyb2w+XG5cdFx0eyAoIHsgaWQgfSApID0+IDw+XG5cdFx0XHQ8TGFiZWxDb21wb25lbnQgaHRtbEZvcj17IGlkIH0+XG5cdFx0XHRcdHsgbGFiZWwgfVxuXHRcdFx0PC9MYWJlbENvbXBvbmVudD5cblx0XHRcdDxSb3dDb250cm9sRW5kIGhhc0Vycm9yPXsgaGFzRXJyb3IgfT5cblx0XHRcdFx0PFN0eWxlZFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRpZD17IGlkIH1cblx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG9uQ2hhbmdlIH1cblx0XHRcdFx0XHRvbkJsdXI9eyAoKSA9PiBzZXRTaG93RXJyb3IoIHRydWUgKSB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyBvcHRpb25zIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUm93Q29udHJvbEVuZD5cblx0XHQ8Lz4gfVxuXHQ8L1Jvd0NvbnRyb2w+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZWRTZWxlY3RDb250cm9sOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHtcblx0TGFiZWwsXG5cdFJlcXVpcmVkTGFiZWwsXG5cdFJvd0NvbnRyb2wsXG5cdFJvd0NvbnRyb2xFbmQsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTdHlsZWRUZXh0Q29udHJvbCB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIgZnJvbSAnLi4vaG9va3MvdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXInO1xuXG5mdW5jdGlvbiBWYWxpZGF0ZWRUZXh0Q29udHJvbCgge1xuXHR2YWx1ZSxcblx0b25DaGFuZ2UsXG5cdGxhYmVsLFxuXHRoZWxwLFxuXHRpc0Vycm9yU3VwcG9ydGVkID0gKCkgPT4gZmFsc2UsXG5cdGVycm9yVGV4dCA9IFwiXCIsXG5cdHJlcXVpcmVkID0gZmFsc2UsXG5cdGRpc2FibGVkID0gZmFsc2Vcbn0gKSB7XG5cblx0Y29uc3QgeyBoYXNFcnJvciwgc2V0U2hvd0Vycm9yIH0gPSB1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlcigge1xuXHRcdGlzU3VwcG9ydGVkOiBpc0Vycm9yU3VwcG9ydGVkLFxuXHR9ICk7XG5cblx0Y29uc3QgTGFiZWxDb21wb25lbnQgPSByZXF1aXJlZCA/IFJlcXVpcmVkTGFiZWwgOiBMYWJlbDtcblxuXHRyZXR1cm4gPFJvd0NvbnRyb2w+XG5cdFx0eyAoIHsgaWQgfSApID0+IDw+XG5cdFx0XHQ8TGFiZWxDb21wb25lbnQgaHRtbEZvcj17IGlkIH0+XG5cdFx0XHRcdHsgbGFiZWwgfVxuXHRcdFx0PC9MYWJlbENvbXBvbmVudD5cblx0XHRcdDxSb3dDb250cm9sRW5kIGhhc0Vycm9yPXsgaGFzRXJyb3IgfSBlcnJvclRleHQ9eyBlcnJvclRleHQgfT5cblx0XHRcdFx0PFN0eWxlZFRleHRDb250cm9sXG5cdFx0XHRcdFx0aWQ9eyBpZCB9XG5cdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkNoYW5nZSB9XG5cdFx0XHRcdFx0b25CbHVyPXsgKCkgPT4gc2V0U2hvd0Vycm9yKCB0cnVlICkgfVxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIH1cblx0XHRcdFx0XHRkaXNhYmxlZD17IGRpc2FibGVkIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUm93Q29udHJvbEVuZD5cblx0XHQ8Lz4gfVxuXHQ8L1Jvd0NvbnRyb2w+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZWRUZXh0Q29udHJvbDsiLCJpbXBvcnQgdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIgZnJvbSAnLi4vaG9va3MvdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXInO1xuXG5mdW5jdGlvbiBWYWxpZGF0b3JQcm92aWRlciggeyBpc1N1cHBvcnRlZCwgY2hpbGRyZW4gfSApIHtcblx0cmV0dXJuIGNoaWxkcmVuKCB1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlciggeyBpc1N1cHBvcnRlZCB9ICkgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdG9yUHJvdmlkZXI7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmNvbnN0IEFjdGlvbkxpc3RJdGVtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0aW5kZXg6IC0xLFxuXHRhY3Rpb246IHt9LFxufSApO1xuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgICAgICAgICA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHMgPz8ge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLkFjdGlvbkxpc3RJdGVtQ29udGV4dCA9IEFjdGlvbkxpc3RJdGVtQ29udGV4dDtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTGlzdEl0ZW1Db250ZXh0OyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5jb25zdCBDdXJyZW50QWN0aW9uRWRpdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCB7fSApO1xuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJDb21wb25lbnRzICAgICAgICAgICAgICAgICAgICAgICAgICA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHMgPz8ge307XG53aW5kb3cuSmV0RkJDb21wb25lbnRzLkN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCA9IEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dDtcblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0OyIsImltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmZ1bmN0aW9uIGFkZEFjdGlvbiggYWN0aW9uVHlwZSwgYWN0aW9uSW5zdGFuY2UgKSB7XG5cdGRpc3BhdGNoKCBTVE9SRV9OQU1FICkuYWRkQ2FsbGJhY2soIGFjdGlvblR5cGUsIGFjdGlvbkluc3RhbmNlICk7XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkFjdGlvbnMgICAgICAgICAgID0gd2luZG93LkpldEZCQWN0aW9ucyA/PyB7fTtcbndpbmRvdy5KZXRGQkFjdGlvbnMuYWRkQWN0aW9uID0gYWRkQWN0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCBhZGRBY3Rpb247IiwiaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uL3N0b3JlJztcblxuLyoqXG4gKiBAcGFyYW0gZmllbGRcbiAqIEBwYXJhbSBzZXR0aW5ncyB7e1xuICogICAgICAgICAgICAgICAgIGlzU2NvcGVkOiBib29sZWFufHVuZGVmaW5lZFxuICogICAgICAgICAgICAgICAgIHByaW9yaXR5OiBudW1iZXJ8dW5kZWZpbmVkXG4gKiAgICAgICAgICAgICAgICAgfX1cbiAqL1xuZnVuY3Rpb24gYWRkQ29tcHV0ZWRGaWVsZCggZmllbGQsIHNldHRpbmdzID0ge30gKSB7XG5cdGRpc3BhdGNoKCBTVE9SRV9OQU1FICkuYWRkQ29tcHV0ZWRGaWVsZCggZmllbGQsIHNldHRpbmdzICk7XG59XG5cbi8vYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQWN0aW9ucyAgICAgICAgICAgICAgICAgID0gd2luZG93LkpldEZCQWN0aW9ucyA/PyB7fTtcbndpbmRvdy5KZXRGQkFjdGlvbnMuYWRkQ29tcHV0ZWRGaWVsZCA9IGFkZENvbXB1dGVkRmllbGQ7XG5cbmV4cG9ydCBkZWZhdWx0IGFkZENvbXB1dGVkRmllbGQ7IiwiaW1wb3J0IEJhc2VBY3Rpb24gZnJvbSAnLi4vYWJzdHJhY3QvQmFzZUFjdGlvbic7XG5pbXBvcnQgQWN0aW9uc0Zsb3cgZnJvbSAnLi4vYWJzdHJhY3QvQWN0aW9uc0Zsb3cnO1xuXG4vKipcbiAqIEBwYXJhbSAgZmxvd1xuICogQHJldHVybiB7QWN0aW9uc0Zsb3d9XG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRGbG93KCBmbG93ID0gW10gKSB7XG5cdGNvbnN0IGFjdGlvbnMgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBmbG93QWN0aW9uIG9mIGZsb3cgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBCYXNlQWN0aW9uKCBmbG93QWN0aW9uICk7XG5cdFx0Y3VycmVudC5yZWZhY3RvclNldHRpbmdzKCk7XG5cblx0XHRhY3Rpb25zLnB1c2goIGN1cnJlbnQgKTtcblx0fVxuXG5cdHJldHVybiBuZXcgQWN0aW9uc0Zsb3coIGFjdGlvbnMgKTtcbn1cblxuLy9iYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJBY3Rpb25zICAgICAgICAgICAgID0gd2luZG93LkpldEZCQWN0aW9ucyA/PyB7fTtcbndpbmRvdy5KZXRGQkFjdGlvbnMuY29udmVydEZsb3cgPSBjb252ZXJ0RmxvdztcblxuZXhwb3J0IGRlZmF1bHQgY29udmVydEZsb3c7IiwiZnVuY3Rpb24gY29udmVydExpc3RUb0ZpZWxkc01hcCggLi4uc291cmNlcyApIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBzb3VyY2Ugb2Ygc291cmNlcyApIHtcblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCBzb3VyY2UgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXNwb25zZS5wdXNoKCAuLi5zb3VyY2UubWFwKCBpdGVtID0+IHtcblx0XHRcdGNvbnN0IGlkID0gaXRlbS52YWx1ZTtcblxuXHRcdFx0cmV0dXJuIFsgaWQsIGl0ZW0gXTtcblx0XHR9ICkgKTtcblx0fVxuXG5cdHJldHVybiByZXNwb25zZTtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQWN0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgID0gd2luZG93LkpldEZCQWN0aW9ucyA/PyB7fTtcbndpbmRvdy5KZXRGQkFjdGlvbnMuY29udmVydExpc3RUb0ZpZWxkc01hcCA9IGNvbnZlcnRMaXN0VG9GaWVsZHNNYXA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnRMaXN0VG9GaWVsZHNNYXA7IiwiZnVuY3Rpb24gZ2xvYmFsVGFiKCB7IHNsdWcsIGVsZW1lbnQgPSAnJywgZW1wdHkgPSAnJyB9ICkge1xuXHRjb25zdCBnbG9iYWwgPSBKZXRGb3JtRWRpdG9yRGF0YS5nbG9iYWxfc2V0dGluZ3M7XG5cblx0aWYgKCAhZ2xvYmFsICkge1xuXHRcdHJldHVybiBlbXB0eTtcblx0fVxuXG5cdGlmICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0ICAgICAgIGdsb2JhbFsgc2x1ZyBdICYmIGdsb2JhbFsgc2x1ZyBdWyBlbGVtZW50IF1cblx0XHQgICAgICAgKSA/IGdsb2JhbFsgc2x1ZyBdWyBlbGVtZW50IF0gOiBlbXB0eTtcblx0fVxuXG5cdHJldHVybiBnbG9iYWxbIHNsdWcgXSB8fCBlbXB0eTtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCQWN0aW9ucyAgICAgICAgICAgPSB3aW5kb3cuSmV0RkJBY3Rpb25zID8/IHt9O1xud2luZG93LkpldEZCQWN0aW9ucy5nbG9iYWxUYWIgPSBnbG9iYWxUYWI7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFRhYjsiLCJmdW5jdGlvbiBnZXRMb2NhbGl6ZWQoYWN0aW9uVHlwZSwgb2JqZWN0S2V5ID0gJycpIHtcblx0Y29uc3QgcHJlcGFyZWRBY3Rpb24gPSB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLmZpbmQoYWN0aW9uID0+IGFjdGlvblR5cGUgPT09IGFjdGlvbi5pZCk7XG5cdGlmICghcHJlcGFyZWRBY3Rpb24pIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Y29uc3QgYWN0aW9uU2VsZkxvY2FsaXplZCA9IHdpbmRvd1sgcHJlcGFyZWRBY3Rpb24uc2VsZiBdO1xuXG5cdHJldHVybiAob2JqZWN0S2V5ICYmIGFjdGlvblNlbGZMb2NhbGl6ZWRbIG9iamVjdEtleSBdKSA/IGFjdGlvblNlbGZMb2NhbGl6ZWRbIG9iamVjdEtleSBdIDogYWN0aW9uU2VsZkxvY2FsaXplZDtcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlT2JqZWN0TmFtZShhY3Rpb25UeXBlKSB7XG5cdGNvbnN0IHByZXBhcmVkQWN0aW9uID0gd2luZG93LmpldEZvcm1BY3Rpb25UeXBlcy5maW5kKGFjdGlvbiA9PiBhY3Rpb25UeXBlID09PSBhY3Rpb24uaWQpO1xuXG5cdHJldHVybiBwcmVwYXJlZEFjdGlvbiA/IHByZXBhcmVkQWN0aW9uLnNlbGYgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxpemVkV2l0aEZ1bmMoeyBhY3Rpb25UeXBlID0gZmFsc2UsIHNvdXJjZSA9IGZhbHNlIH0sIG9iamVjdEtleSwgaWZFbXB0eVJldHVybiA9ICcnKSB7XG5cdGxldCBhY3Rpb24gPSBmYWxzZTtcblxuXHRpZiAoc291cmNlICYmIHNvdXJjZVsgb2JqZWN0S2V5IF0pIHtcblx0XHRhY3Rpb24gPSBzb3VyY2VbIG9iamVjdEtleSBdO1xuXHR9IGVsc2UgaWYgKGFjdGlvblR5cGUpIHtcblx0XHRhY3Rpb24gPSAoZ2V0TG9jYWxpemVkKGFjdGlvblR5cGUpWyBvYmplY3RLZXkgXSk7XG5cdH1cblxuXHRpZiAoIWFjdGlvbikge1xuXHRcdHJldHVybiAoKSA9PiBpZkVtcHR5UmV0dXJuO1xuXHR9XG5cblx0cmV0dXJuIGF0dHIgPT4ge1xuXHRcdGlmIChhdHRyKSB7XG5cdFx0XHRyZXR1cm4gKGFjdGlvblsgYXR0ciBdID8gYWN0aW9uWyBhdHRyIF0gOiBpZkVtcHR5UmV0dXJuKTtcblx0XHR9IFxuXHRcdFx0cmV0dXJuIGFjdGlvbjtcblx0XHRcblx0fTtcbn1cblxuZnVuY3Rpb24gbG9jYWxpemVkTGFiZWwoc2V0dGluZ3MpIHtcblx0cmV0dXJuIGdldExvY2FsaXplZFdpdGhGdW5jKHNldHRpbmdzLCAnX19sYWJlbHMnLCAnW0VtcHR5IExhYmVsXScpO1xufVxuXG5mdW5jdGlvbiBsb2NhbGl6ZWRIZWxwKHNldHRpbmdzKSB7XG5cdHJldHVybiBnZXRMb2NhbGl6ZWRXaXRoRnVuYyhzZXR0aW5ncywgJ19faGVscF9tZXNzYWdlcycpO1xufVxuXG5mdW5jdGlvbiBsb2NhbGl6ZWRHYXRld2F5QXR0cnMoc2V0dGluZ3MpIHtcblx0cmV0dXJuIGdldExvY2FsaXplZFdpdGhGdW5jKHNldHRpbmdzLCAnX19nYXRld2F5X2F0dHJzJywgW10pO1xufVxuXG5mdW5jdGlvbiBsb2NhbGl6ZWRNZXNzYWdlcyhzZXR0aW5ncykge1xuXHRyZXR1cm4gZ2V0TG9jYWxpemVkV2l0aEZ1bmMoc2V0dGluZ3MsICdfX21lc3NhZ2VzJywge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxpemVkRnVsbFBhY2soYWN0aW9uVHlwZSwgc291cmNlID0gZmFsc2UpIHtcblx0aWYgKCFzb3VyY2UpIHtcblx0XHRzb3VyY2UgPSBnZXRMb2NhbGl6ZWQoYWN0aW9uVHlwZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRTb3VyY2UocHJvcHMgPSB7fSkge1xuXHRcdGNvbnN0IG5hbWUgPSBnZXRTb3VyY2VPYmplY3ROYW1lKGFjdGlvblR5cGUpO1xuXG5cdFx0aWYgKCFuYW1lIHx8ICF3aW5kb3dbIG5hbWUgXSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR3aW5kb3dbIG5hbWUgXSA9IHtcblx0XHRcdC4uLndpbmRvd1sgbmFtZSBdLFxuXHRcdFx0Li4ucHJvcHMsXG5cdFx0fTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Y29uc3QgbGFiZWwgPSBsb2NhbGl6ZWRMYWJlbCh7IHNvdXJjZSB9KTtcblx0Y29uc3QgaGVscCA9IGxvY2FsaXplZEhlbHAoeyBzb3VyY2UgfSk7XG5cdGNvbnN0IG1lc3NhZ2VzID0gbG9jYWxpemVkTWVzc2FnZXMoeyBzb3VyY2UgfSk7XG5cdGNvbnN0IGdhdGV3YXlBdHRycyA9IGxvY2FsaXplZEdhdGV3YXlBdHRycyh7IHNvdXJjZSB9KTtcblxuXHRyZXR1cm4geyBzb3VyY2UsIGxhYmVsLCBoZWxwLCBtZXNzYWdlcywgZ2F0ZXdheUF0dHJzLCBzZXRTb3VyY2UgfTtcbn1cbiIsImltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcbi8qKlxuICogQHBhcmFtICBhY3Rpb25TZXR0aW5ncyB7e1xuICogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmcsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXQ6IEZ1bmN0aW9uLFxuICogICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBSZWFjdC5KU1guRWxlbWVudHxudWxsLFxuICogICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogc3RyaW5nfG51bGwsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGRvY0hyZWY6IHN0cmluZ3xudWxsLFxuICogICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlRXZlbnRzOiBGdW5jdGlvbnxudWxsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDb25kaXRpb25zOiBCb29sZWFufG51bGwsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBCb29sZWFufG51bGwsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkOiBCb29sZWFufG51bGwsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IEZ1bmN0aW9uW118bnVsbFxuICogICAgICAgICAgICAgICAgICAgICAgICB9fVxuICogQHJldHVybiB7KGZ1bmN0aW9uKHtzZWxlY3Q6ICosIGRpc3BhdGNoOiAqfSk6IHZvaWQpfCp9XG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyQWN0aW9uKCBhY3Rpb25TZXR0aW5ncyApIHtcblx0ZGlzcGF0Y2goIFNUT1JFX05BTUUgKS5yZWdpc3RlckFjdGlvbiggYWN0aW9uU2V0dGluZ3MgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBY3Rpb247IiwiaW1wb3J0IEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L0N1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCc7XG5pbXBvcnQgeyB3aXRoRmlsdGVycyB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBnZXRMb2NhbGl6ZWRGdWxsUGFjayB9IGZyb20gJy4vbGVnYWN5TG9jYWxpemUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0KCBhY3Rpb25UeXBlLCBBY3Rpb25JbnN0YW5jZSApIHtcblx0Y29uc3QgbG9jYWxpemVkRGF0YSA9IGdldExvY2FsaXplZEZ1bGxQYWNrKCBhY3Rpb25UeXBlICk7XG5cblx0cmV0dXJuIHByb3BzID0+IHtcblx0XHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRwcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcblx0XHRcdFx0WyBrZXkgXTogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uQ2hhbmdlU2V0dGluZ09iaiA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcblx0XHRcdFx0Li4udmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGdldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZSB9ICkgPT4ge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBwcm9wcy5zZXR0aW5ncztcblxuXHRcdFx0aWYgKCB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0XHR0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF0gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fTtcblxuXHRcdGNvbnN0IHNldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZUZpZWxkLCB2YWx1ZSB9ICkgPT4ge1xuXHRcdFx0Y29uc3QgZmllbGRzTWFwID0ge1xuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5nc1sgc291cmNlIF0sXG5cdFx0XHRcdFsgbmFtZUZpZWxkIF06IHZhbHVlLFxuXHRcdFx0fTtcblxuXHRcdFx0cHJvcHMub25DaGFuZ2UoIHtcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3MsXG5cdFx0XHRcdFsgc291cmNlIF06IGZpZWxkc01hcCxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgYWRkaXRpb25hbFByb3BzID0ge1xuXHRcdFx0b25DaGFuZ2VTZXR0aW5nLFxuXHRcdFx0Z2V0TWFwRmllbGQsXG5cdFx0XHRzZXRNYXBGaWVsZCxcblx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaixcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVzdWx0UHJvcHMgPSB7IC4uLnByb3BzLCAuLi5sb2NhbGl6ZWREYXRhLCAuLi5hZGRpdGlvbmFsUHJvcHMgfTtcblxuXHRcdGNvbnN0IEN1c3RvbVNldHRpbmdzID0gd2l0aEZpbHRlcnMoXG5cdFx0XHRgamV0LmZiLnJlbmRlci5hY3Rpb24uJHsgYWN0aW9uVHlwZSB9YCxcblx0XHQpKFxuXHRcdFx0KCkgPT4gbnVsbCxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIDxDdXJyZW50QWN0aW9uRWRpdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyByZXN1bHRQcm9wcyB9PlxuXHRcdFx0PEFjdGlvbkluc3RhbmNlIHsgLi4ucmVzdWx0UHJvcHMgfSAvPlxuXHRcdFx0PEN1c3RvbVNldHRpbmdzIHsgLi4ucmVzdWx0UHJvcHMgfSAvPlxuXHRcdDwvQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0LlByb3ZpZGVyPjtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0OyIsImltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCB1c2VBY3Rpb25DYWxsYmFjayA9ICggYWN0aW9uVHlwZSA9IGZhbHNlICkgPT4ge1xuXHRyZXR1cm4gdXNlU2VsZWN0KCBzZWxlY3QgPT4ge1xuXHRcdHJldHVybiBhY3Rpb25UeXBlXG5cdFx0ICAgICAgID8gc2VsZWN0KCAnamV0LWZvcm1zL2FjdGlvbnMnICkuZ2V0QWN0aW9uKCBhY3Rpb25UeXBlICk/LmVkaXRcblx0XHQgICAgICAgOiBzZWxlY3QoICdqZXQtZm9ybXMvYWN0aW9ucycgKS5nZXRDdXJyZW50RWRpdCgpO1xuXHR9LCBbIGFjdGlvblR5cGUgXSApO1xufTtcblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCSG9va3MgICAgICAgICAgICAgICAgICAgPSB3aW5kb3cuSmV0RkJIb29rcyA/PyB7fTtcbndpbmRvdy5KZXRGQkhvb2tzLnVzZUFjdGlvbkNhbGxiYWNrID0gdXNlQWN0aW9uQ2FsbGJhY2s7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFjdGlvbkNhbGxiYWNrOyIsImltcG9ydCBCYXNlQWN0aW9uIGZyb20gJy4uL2Fic3RyYWN0L0Jhc2VBY3Rpb24nO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmZ1bmN0aW9uIHVzZUFjdGlvbkVycm9ycyggYWN0aW9uICkge1xuXHRhY3Rpb24gPSBuZXcgQmFzZUFjdGlvbiggYWN0aW9uICk7XG5cblx0Y29uc3QgdmFsaWRhdG9ycyA9IHVzZVNlbGVjdCggc2VsZWN0ID0+IHtcblx0XHRcdGNvbnN0IGFjdGlvblR5cGUgPSBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRBY3Rpb24oXG5cdFx0XHRcdGFjdGlvbi50eXBlLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIGFjdGlvblR5cGU/LnZhbGlkYXRvcnMgPyBhY3Rpb25UeXBlLnZhbGlkYXRvcnMgOiBbXTtcblx0XHR9LFxuXHRcdFsgYWN0aW9uLnR5cGUgXSxcblx0KTtcblxuXHRjb25zdCBlcnJvcnMgPSBbXTtcblxuXHRmb3IgKCBjb25zdCB2YWxpZGF0b3Igb2YgdmFsaWRhdG9ycyApIHtcblx0XHRjb25zdCBlcnJvciA9IHZhbGlkYXRvciggeyBzZXR0aW5nczogYWN0aW9uLnNlbGZTZXR0aW5ncyB9ICk7XG5cblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGVycm9yICkgKSB7XG5cdFx0XHRlcnJvcnMucHVzaCggLi4uZXJyb3IgKTtcblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCAhZXJyb3IgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0ZXJyb3JzLnB1c2goIGVycm9yICk7XG5cdH1cblxuXHRyZXR1cm4gZXJyb3JzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VBY3Rpb25FcnJvcnM7IiwiaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB1c2VBY3Rpb25FcnJvcnMgZnJvbSAnLi91c2VBY3Rpb25FcnJvcnMnO1xuaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uL3N0b3JlJztcblxuZnVuY3Rpb24gdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIoIHsgaXNTdXBwb3J0ZWQgfSApIHtcblx0Y29uc3QgeyBjdXJyZW50QWN0aW9uLCBpc1Nob3dFcnJvcnMgfSA9IHVzZVNlbGVjdCggc2VsZWN0ID0+IChcblx0XHR7XG5cdFx0XHRjdXJyZW50QWN0aW9uOiBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRDdXJyZW50QWN0aW9uKCksXG5cdFx0XHRpc1Nob3dFcnJvcnM6IHNlbGVjdCggU1RPUkVfTkFNRSApLmdldEVycm9yVmlzaWJpbGl0eSgpLFxuXHRcdH1cblx0KSwgW10gKTtcblxuXHRjb25zdCBbIGlzU2hvd0xvY2FsRXJyb3IsIHNldFNob3dFcnJvciBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0LyoqXG5cdCAqIFdlIGNvdWxkIHJlY2VpdmUgZXJyb3JzIG9ubHkgYWZ0ZXIgY2hhbmdpbmcgbG9jYWwgc3RhdGVcblx0ICogKHByb2JhYmx5IG9uIGJsdXIgZXZlbnQpIG9yIGFmdGVyIGNoYW5naW5nIGdsb2JhbCBzdGF0ZVxuXHQgKiAocHJvYmFibHkgYWZ0ZXIgY2xpY2sgb24gdGhlIFVwZGF0ZSBidXR0b24pXG5cdCAqL1xuXHRjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25FcnJvcnMoXG5cdFx0KFxuXHRcdFx0aXNTaG93TG9jYWxFcnJvciB8fCBpc1Nob3dFcnJvcnNcblx0XHQpXG5cdFx0PyBjdXJyZW50QWN0aW9uXG5cdFx0OiB7IHR5cGU6IGZhbHNlIH0sXG5cdCk7XG5cblx0Y29uc3QgaGFzU3VwcG9ydGVkRXJyb3IgPSBlcnJvcnMuc29tZSggaXNTdXBwb3J0ZWQgKTtcblxuXHRyZXR1cm4geyBoYXNFcnJvcjogaGFzU3VwcG9ydGVkRXJyb3IsIHNldFNob3dFcnJvciB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlcjsiLCJpbXBvcnQgeyB1c2VNZXRhU3RhdGUgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWRhdGEnO1xuXG5mdW5jdGlvbiB1c2VBY3Rpb25zKCBkZXBzID0gdW5kZWZpbmVkICkge1xuXHRyZXR1cm4gdXNlTWV0YVN0YXRlKCAnX2pmX2FjdGlvbnMnLCAnW10nLCBkZXBzICk7XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkhvb2tzICAgICAgICAgICAgPSB3aW5kb3cuSmV0RkJIb29rcyA/PyB7fTtcbndpbmRvdy5KZXRGQkhvb2tzLnVzZUFjdGlvbnMgPSB1c2VBY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VBY3Rpb25zOyIsImltcG9ydCB1c2VBY3Rpb25zIGZyb20gJy4vdXNlQWN0aW9ucyc7XG5cbi8qKlxuICogQHJldHVybiB7e21vdmVBY3Rpb246IG1vdmVBY3Rpb24sIHVwZGF0ZUFjdGlvbk9iajogdXBkYXRlQWN0aW9uT2JqLFxuICogICAgIHNldEFjdGlvbnM6IChmdW5jdGlvbigqPSk6IHZvaWQpLCB0b2dnbGVFeGVjdXRlOiB0b2dnbGVFeGVjdXRlLCBhY3Rpb25zOlxuICogICAgICosIGRlbGV0ZUFjdGlvbjogZGVsZXRlQWN0aW9uLCBhZGRBY3Rpb25Qcm9wczogYWRkQWN0aW9uUHJvcHN9fVxuICovXG5leHBvcnQgY29uc3QgdXNlQWN0aW9uc0VkaXQgPSAoKSA9PiB7XG5cdGNvbnN0IFsgYWN0aW9ucywgc2V0QWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xuXG5cdGNvbnN0IG1vdmVBY3Rpb24gPSAoIGZyb21JbmRleCwgdG9JbmRleCApID0+IHtcblx0XHRjb25zdCBpdGVtICAgICAgICAgPSBKU09OLnBhcnNlKFxuXHRcdFx0ICAgICAgSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnNbIGZyb21JbmRleCBdICkgKSxcblx0XHQgICAgICByZXBsYWNlZEl0ZW0gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uc1sgdG9JbmRleCBdICkgKTtcblxuXHRcdGFjdGlvbnMuc3BsaWNlKCB0b0luZGV4LCAxLCBpdGVtICk7XG5cdFx0YWN0aW9ucy5zcGxpY2UoIGZyb21JbmRleCwgMSwgcmVwbGFjZWRJdGVtICk7XG5cblx0XHRzZXRBY3Rpb25zKCBbIC4uLmFjdGlvbnMgXSApO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZUFjdGlvbiA9ICggaW5kZXggKSA9PiB7XG5cdFx0YWN0aW9ucy5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHRzZXRBY3Rpb25zKCBbIC4uLmFjdGlvbnMgXSApO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZUFjdGlvbk9iaiA9ICggaWQsIHByb3BzICkgPT4ge1xuXHRcdGNvbnN0IG5ld0FjdGlvbnMgPSBhY3Rpb25zLm1hcCggY3VycmVudCA9PiB7XG5cdFx0XHRpZiAoIGlkICE9PSBjdXJyZW50LmlkICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLkpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBjdXJyZW50ICkgKSxcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHR9O1xuXHRcdH0gKTtcblxuXHRcdHNldEFjdGlvbnMoIFsgLi4ubmV3QWN0aW9ucyBdICk7XG5cdH07XG5cblx0Y29uc3QgYWRkQWN0aW9uUHJvcHMgPSAoIHByb3BzICkgPT4ge1xuXHRcdGNvbnN0IGFjdGlvblByb3BzID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHByb3BzICkgKTtcblxuXHRcdGFjdGlvblByb3BzLmlkID0gMCA+IGFjdGlvblByb3BzLmlkXG5cdFx0ICAgICAgICAgICAgICAgICA/IGFjdGlvblByb3BzLmlkICogLTFcblx0XHQgICAgICAgICAgICAgICAgIDogYWN0aW9uUHJvcHMuaWQ7XG5cblx0XHRzZXRBY3Rpb25zKCBbIC4uLmFjdGlvbnMsIHsgLi4uYWN0aW9uUHJvcHMgfSBdICk7XG5cdH07XG5cblx0Y29uc3QgdG9nZ2xlRXhlY3V0ZSA9ICggYWN0aW9uICkgPT4ge1xuXHRcdHVwZGF0ZUFjdGlvbk9iaiggYWN0aW9uLmlkLCB7XG5cdFx0XHRpc19leGVjdXRlOiAhKFxuXHRcdFx0XHRhY3Rpb24uaXNfZXhlY3V0ZSA/PyB0cnVlXG5cdFx0XHQpLFxuXHRcdH0gKTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGFjdGlvbnMsXG5cdFx0c2V0QWN0aW9ucyxcblx0XHRtb3ZlQWN0aW9uLFxuXHRcdGRlbGV0ZUFjdGlvbixcblx0XHR1cGRhdGVBY3Rpb25PYmosXG5cdFx0dG9nZ2xlRXhlY3V0ZSxcblx0XHRhZGRBY3Rpb25Qcm9wcyxcblx0fTtcbn07XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkhvb2tzICAgICAgICAgICAgICAgID0gd2luZG93LkpldEZCSG9va3MgPz8ge307XG53aW5kb3cuSmV0RkJIb29rcy51c2VBY3Rpb25zRWRpdCA9IHVzZUFjdGlvbnNFZGl0O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VBY3Rpb25zRWRpdDsiLCJpbXBvcnQgeyB1c2VTZWxlY3QsIHVzZURpc3BhdGNoIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmZ1bmN0aW9uIHVzZUN1cnJlbnRBY3Rpb24oKSB7XG5cdGNvbnN0IFsgY3VycmVudEFjdGlvbiwgY3VycmVudFNldHRpbmdzIF0gPSB1c2VTZWxlY3QoIHNlbGVjdCA9PiB7XG5cdFx0Y29uc3Qgc3RhdGUgICAgPSBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRDdXJyZW50QWN0aW9uKCk7XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRDdXJyZW50U2V0dGluZ3MoKTtcblxuXHRcdHJldHVybiBbIHN0YXRlLCBzZXR0aW5ncyBdO1xuXHR9LCBbXSApO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICB1cGRhdGVDdXJyZW50U2V0dGluZ3M6IHVwZGF0ZVNldHRpbmdzLFxuXHQgICAgICB9ID0gdXNlRGlzcGF0Y2goIFNUT1JFX05BTUUgKTtcblxuXHRyZXR1cm4geyBjdXJyZW50QWN0aW9uLCBjdXJyZW50U2V0dGluZ3MsIHVwZGF0ZVNldHRpbmdzIH07XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkhvb2tzICAgICAgICAgICAgICAgICAgPSB3aW5kb3cuSmV0RkJIb29rcyA/PyB7fTtcbndpbmRvdy5KZXRGQkhvb2tzLnVzZUN1cnJlbnRBY3Rpb24gPSB1c2VDdXJyZW50QWN0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDdXJyZW50QWN0aW9uOyIsImltcG9ydCBBY3Rpb25MaXN0SXRlbUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9BY3Rpb25MaXN0SXRlbUNvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbi8qKlxuICogQHJldHVybiB7e2FjdGlvbjogT2JqZWN0LCBpbmRleDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gdXNlTG9vcGVkQWN0aW9uKCkge1xuXHRyZXR1cm4gdXNlQ29udGV4dCggQWN0aW9uTGlzdEl0ZW1Db250ZXh0ICk7XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkhvb2tzICAgICAgICAgICAgICAgICA9IHdpbmRvdy5KZXRGQkhvb2tzID8/IHt9O1xud2luZG93LkpldEZCSG9va3MudXNlTG9vcGVkQWN0aW9uID0gdXNlTG9vcGVkQWN0aW9uO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb29wZWRBY3Rpb247IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuY29uc3QgTU9EQUxfU0VMRUNUT1IgPSAnLmNvbXBvbmVudHMtbW9kYWxfX2ZyYW1lJztcblxuY29uc3QgaXNVbmRvU2hvcnRjdXQgPSBldmVudCA9PiB7XG5cdGNvbnN0IGlzTWFjVW5kbyA9IGV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmN0cmxLZXk7XG5cdGNvbnN0IGlzV2luVW5kbyA9IGV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXk7XG5cblx0cmV0dXJuIChcblx0XHQoaXNNYWNVbmRvIHx8IGlzV2luVW5kbykgJiZcblx0XHQneicgPT09IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpICYmXG5cdFx0IWV2ZW50LmFsdEtleVxuXHQpO1xufTtcblxuY29uc3QgaXNJbnNpZGVNb2RhbCA9IGV2ZW50ID0+IHtcblx0Y29uc3QgcGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aD8uKCk7XG5cblx0aWYgKHBhdGg/Lmxlbmd0aCkge1xuXHRcdHJldHVybiBwYXRoLnNvbWUoZWxlbWVudCA9PiAoXG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCAmJlxuXHRcdFx0ZWxlbWVudC5tYXRjaGVzPy4oTU9EQUxfU0VMRUNUT1IpXG5cdFx0KSk7XG5cdH1cblxuXHRyZXR1cm4gZXZlbnQudGFyZ2V0Py5jbG9zZXN0Py4oTU9EQUxfU0VMRUNUT1IpO1xufTtcblxuY29uc3QgdXNlUHJldmVudEVkaXRvclVuZG9Jbk1vZGFsID0gKCkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZUtleURvd24gPSBldmVudCA9PiB7XG5cdFx0XHRpZiAoIWlzVW5kb1Nob3J0Y3V0KGV2ZW50KSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICghaXNJbnNpZGVNb2RhbChldmVudCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEltcG9ydGFudDpcblx0XHRcdCAqIERvIE5PVCBjYWxsIHByZXZlbnREZWZhdWx0KCkuXG5cdFx0XHQgKlxuXHRcdFx0ICogQnJvd3NlciBuYXRpdmUgdW5kbyBzaG91bGQgc3RpbGwgd29yayBmb3IgaW5wdXRzL3RleHRhcmVhcyxcblx0XHRcdCAqIGluY2x1ZGluZyB0aGUgYnJvd3NlcidzIG93biBmb3JtLWNvbnRyb2wgdW5kbyBoaXN0b3J5LlxuXHRcdFx0ICpcblx0XHRcdCAqIFdlIG9ubHkgc3RvcCBHdXRlbmJlcmcvZWRpdG9yIGtleWJvYXJkIGhhbmRsZXJzIGZyb20gcmVjZWl2aW5nXG5cdFx0XHQgKiBDbWQvQ3RybCtaIHdoaWxlIHRoZSBldmVudCBjb21lcyBmcm9tIGluc2lkZSBhIG1vZGFsLlxuXHRcdFx0ICovXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9O1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duLCB0cnVlKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIHRydWUpO1xuXHRcdH07XG5cdH0sIFtdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVByZXZlbnRFZGl0b3JVbmRvSW5Nb2RhbDsiLCJpbXBvcnQgQmFzZUFjdGlvbiBmcm9tICcuLi9hYnN0cmFjdC9CYXNlQWN0aW9uJztcbmltcG9ydCBDdXJyZW50QWN0aW9uRWRpdENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9DdXJyZW50QWN0aW9uRWRpdENvbnRleHQnO1xuaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uL3N0b3JlJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICB1c2VDb250ZXh0LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IGdldFJlcXVlc3RGaWVsZHMgPSAoIHsgYWN0aW9ucywgZmllbGRzIH0gKSA9PiB7XG5cdGZvciAoIGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zICkge1xuXHRcdGNvbnN0IHtcblx0XHRcdCAgICAgIFsgYWN0aW9uLnR5cGUgXTogY3VycmVudCA9IHt9LFxuXHRcdCAgICAgIH0gPSBhY3Rpb24uc2V0dGluZ3M7XG5cblx0XHRpZiAoICFjdXJyZW50LnJlcXVlc3RGaWVsZHMgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCByZXF1ZXN0RmllbGQgb2YgY3VycmVudC5yZXF1ZXN0RmllbGRzICkge1xuXHRcdFx0Y29uc3QgaW5kZXggPSBmaWVsZHMuZmluZEluZGV4KFxuXHRcdFx0XHRmaWVsZCA9PiBmaWVsZC52YWx1ZSA9PT0gcmVxdWVzdEZpZWxkLm5hbWUsXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXG5cdFx0XHRpZiAoIC0xICE9PSBpbmRleCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZpZWxkcy5wdXNoKCB7XG5cdFx0XHRcdGZyb206IGFjdGlvbi50eXBlLFxuXHRcdFx0XHRpZDogYWN0aW9uLmlkLFxuXHRcdFx0XHRsYWJlbDogcmVxdWVzdEZpZWxkLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiByZXF1ZXN0RmllbGQubmFtZSxcblx0XHRcdFx0bmFtZTogcmVxdWVzdEZpZWxkLm5hbWUsXG5cdFx0XHRcdGhlbHA6IHJlcXVlc3RGaWVsZC5oZWxwLFxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgcHJvY2Vzc0NvbXB1dGVkRmllbGQgPSAoIHsgY29tcHV0ZWQsIGFjdGlvbiwgZmllbGRzLCBuYW1lU2V0IH0gKSA9PiB7XG5cdGlmICggIWNvbXB1dGVkLmlzU3VwcG9ydGVkKCBhY3Rpb24sIGZpZWxkcyApICkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb21wdXRlZC5zZXRBY3Rpb24oIGFjdGlvbiApO1xuXHRjb21wdXRlZC5oYXNJbkxpc3QgPSBmYWxzZTtcblxuXHRsZXQgbmFtZSA9IGNvbXB1dGVkLmdldE5hbWUoKTtcblxuXHRpZiAoIG5hbWVTZXQuaGFzKCBuYW1lICkgKSB7XG5cdFx0Y29tcHV0ZWQuaGFzSW5MaXN0ID0gdHJ1ZTtcblxuXHRcdG5hbWUgPSBjb21wdXRlZC5nZXROYW1lKCk7XG5cdH1cblxuXHRpZiAoIGZpZWxkcy5zb21lKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSBuYW1lICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bmFtZVNldC5hZGQoIG5hbWUgKTtcblx0Y29uc3QgbGFiZWwgPSBjb21wdXRlZC5nZXRMYWJlbCgpO1xuXG5cdGZpZWxkcy5wdXNoKCB7XG5cdFx0ZnJvbTogYWN0aW9uLnR5cGUsXG5cdFx0aWQ6IGFjdGlvbi5pZCxcblx0XHRsYWJlbDogbGFiZWwgfHwgbmFtZSxcblx0XHR2YWx1ZTogbmFtZSxcblx0XHRuYW1lLFxuXHRcdGhlbHA6IGNvbXB1dGVkLmdldEhlbHAoKSxcblx0fSApO1xufTtcblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRGaWVsZHMoIHsgZmllbGRzLCBhY3Rpb25zLCBjb21wdXRlZCwgbmFtZVNldCB9ICkge1xuXHQvKipcblx0ICogQHR5cGUge0Jhc2VBY3Rpb25bXX1cblx0ICovXG5cdGFjdGlvbnMgPSBhY3Rpb25zLm1hcCggaXRlbSA9PiBuZXcgQmFzZUFjdGlvbiggaXRlbSApICk7XG5cblx0Zm9yICggY29uc3QgeyBmaWVsZDogY29tcHV0ZWRGaWVsZCwgc2V0dGluZ3MgfSBvZiBjb21wdXRlZCApIHtcblx0XHRpZiAoIHNldHRpbmdzPy5pc1Njb3BlZCApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtCYXNlQ29tcHV0ZWRGaWVsZH1cblx0XHQgKi9cblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGNvbXB1dGVkRmllbGQoKTtcblxuXHRcdGZvciAoIGNvbnN0IGFjdGlvbiBvZiBhY3Rpb25zICkge1xuXHRcdFx0cHJvY2Vzc0NvbXB1dGVkRmllbGQoIHtcblx0XHRcdFx0Y29tcHV0ZWQ6IGN1cnJlbnQsXG5cdFx0XHRcdGFjdGlvbixcblx0XHRcdFx0bmFtZVNldCxcblx0XHRcdFx0ZmllbGRzLFxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmICggY3VycmVudC5hY3Rpb24gfHwgIWN1cnJlbnQuaXNTdXBwb3J0ZWRHbG9iYWwoKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBsYWJlbCA9IGN1cnJlbnQuZ2V0TGFiZWwoKTtcblx0XHRjb25zdCBuYW1lICA9IGN1cnJlbnQuZ2V0TmFtZSgpO1xuXG5cdFx0ZmllbGRzLnB1c2goIHtcblx0XHRcdGxhYmVsOiBsYWJlbCB8fCBuYW1lLFxuXHRcdFx0dmFsdWU6IG5hbWUsXG5cdFx0XHRuYW1lLFxuXHRcdFx0aGVscDogY3VycmVudC5nZXRIZWxwKCksXG5cdFx0fSApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3RGaWVsZHMoIHsgcmV0dXJuT25FbXB0eUN1cnJlbnRBY3Rpb24gPSB0cnVlIH0gPSB7fSApIHtcblx0Y29uc3QgbWV0YSA9IHVzZVNlbGVjdCggKCBzZWxlY3QgKSA9PiB7XG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xuXHR9LCBbXSApO1xuXG5cdGNvbnN0IGFjdGlvblByb3BzID0gdXNlQ29udGV4dCggQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0ICk7XG5cblx0Y29uc3QgeyBjdXJyZW50QWN0aW9uLCBjb21wdXRlZExpc3QgfSA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4gKFxuXHRcdFx0e1xuXHRcdFx0XHRjdXJyZW50QWN0aW9uOiBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRDdXJyZW50QWN0aW9uKCksXG5cdFx0XHRcdGNvbXB1dGVkTGlzdDogc2VsZWN0KCBTVE9SRV9OQU1FICkuZ2V0Q29tcHV0ZWRGaWVsZHMoKSxcblx0XHRcdH1cblx0XHQpLFxuXHRcdFtdLFxuXHQpO1xuXG5cdGlmICggIWFjdGlvblByb3BzPy5hY3Rpb25JZCAmJiByZXR1cm5PbkVtcHR5Q3VycmVudEFjdGlvbiApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBhY3Rpb25zID0gSlNPTi5wYXJzZSggbWV0YS5famZfYWN0aW9ucyB8fCAnW10nICk7XG5cblx0Ly8gY3VycmVudCBhY3Rpb24gY291bGQgYmUgZW1wdHkgb2JqZWN0XG5cdGlmICggIU51bWJlci5pc05hTiggTnVtYmVyKCBjdXJyZW50QWN0aW9uPy5pbmRleCApICkgKSB7XG5cdFx0YWN0aW9ucy5zcGxpY2UoIGN1cnJlbnRBY3Rpb24uaW5kZXggKTtcblx0fVxuXG5cdGNvbnN0IG5hbWVTZXQgPSBuZXcgU2V0KCk7XG5cdGNvbnN0IGZpZWxkcyAgPSBbXTtcblxuXHRmb3IgKCBjb25zdCB7IGZpZWxkOiBjb21wdXRlZEZpZWxkLCBzZXR0aW5ncyB9IG9mIGNvbXB1dGVkTGlzdCApIHtcblx0XHRpZiAoICFzZXR0aW5ncz8uaXNTY29wZWQgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7QmFzZUNvbXB1dGVkRmllbGR9XG5cdFx0ICovXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBjb21wdXRlZEZpZWxkKCk7XG5cblx0XHRwcm9jZXNzQ29tcHV0ZWRGaWVsZCgge1xuXHRcdFx0Y29tcHV0ZWQ6IGN1cnJlbnQsXG5cdFx0XHRhY3Rpb246IGN1cnJlbnRBY3Rpb24sXG5cdFx0XHRuYW1lU2V0LFxuXHRcdFx0ZmllbGRzLFxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG91bGQgYmUgZGVwcmVjYXRlZFxuXHQgKlxuXHQgKiBAdHlwZSB7KltdfVxuXHQgKi9cblx0Z2V0UmVxdWVzdEZpZWxkcyggeyBhY3Rpb25zLCBmaWVsZHMgfSApO1xuXG5cdGdldENvbXB1dGVkRmllbGRzKCB7XG5cdFx0ZmllbGRzLFxuXHRcdGFjdGlvbnMsXG5cdFx0Y29tcHV0ZWQ6IGNvbXB1dGVkTGlzdCxcblx0XHRuYW1lU2V0LFxuXHR9ICk7XG5cblx0cmV0dXJuIGZpZWxkcztcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCSG9va3MgICAgICAgICAgICAgICAgICA9IHdpbmRvdy5KZXRGQkhvb2tzID8/IHt9O1xud2luZG93LkpldEZCSG9va3MudXNlUmVxdWVzdEZpZWxkcyA9IHVzZVJlcXVlc3RGaWVsZHM7XG5cbmV4cG9ydCB7IGdldFJlcXVlc3RGaWVsZHMsIGdldENvbXB1dGVkRmllbGRzIH07XG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RmllbGRzOyIsImltcG9ydCB7IGluaXRDbGFzc2VzIH0gZnJvbSAnLi91c2VTdGF0ZVZhbGlkQ2xhc3Nlcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmZ1bmN0aW9uIHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMoKSB7XG5cdGNvbnN0IFsgY2xhc3Nlcywgc2V0Q2xhc3NlcyBdID0gdXNlU3RhdGUoIFsgLi4uaW5pdENsYXNzZXMgXSApO1xuXG5cdGNvbnN0IHNldExvYWRpbmdDbGFzcyAgID0gKCkgPT4ge1xuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsICdsb2FkaW5nJyBdICk7XG5cdH07XG5cdGNvbnN0IGNsZWFyTG9hZGluZ0NsYXNzID0gKCkgPT4ge1xuXHRcdHNldENsYXNzZXMoIGluaXRDbGFzc2VzICk7XG5cdH07XG5cblx0cmV0dXJuIFsgY2xhc3Nlcy5qb2luKCAnICcgKSwgc2V0TG9hZGluZ0NsYXNzLCBjbGVhckxvYWRpbmdDbGFzcyBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzOyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IGluaXRDbGFzc2VzID0gWyAnamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyBdO1xuXG5mdW5jdGlvbiB1c2VTdGF0ZVZhbGlkQ2xhc3NlcyggaW5pdGlhbFZhbGlkICkge1xuXHRjb25zdCB2YWxpZENsYXNzICAgPSAnaXMtdmFsaWQnO1xuXHRjb25zdCBpbnZhbGlkQ2xhc3MgPSAnaXMtaW52YWxpZCc7XG5cblx0Y29uc3QgaW5pdFN0YXRlQ2xhc3NlcyA9ICgpID0+IHtcblx0XHRpZiAoIGluaXRpYWxWYWxpZCApIHtcblx0XHRcdHJldHVybiBbIHZhbGlkQ2xhc3MgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2UgPT09IGluaXRpYWxWYWxpZCA/IFsgaW52YWxpZENsYXNzIF0gOiBbXTtcblx0fTtcblxuXHRjb25zdCBbIGNsYXNzZXMsIHNldENsYXNzZXMgXSA9IHVzZVN0YXRlKCAoKSA9PiAoXG5cdFx0WyAuLi5pbml0Q2xhc3NlcywgLi4uaW5pdFN0YXRlQ2xhc3NlcygpIF1cblx0KSApO1xuXG5cdGNvbnN0IHNldFZhbGlkQ2xhc3MgICA9ICgpID0+IHtcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCB2YWxpZENsYXNzIF0gKTtcblx0fTtcblx0Y29uc3Qgc2V0SW52YWxpZENsYXNzID0gKCkgPT4ge1xuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsIGludmFsaWRDbGFzcyBdICk7XG5cdH07XG5cdGNvbnN0IHNldExvYWRpbmdDbGFzcyA9ICgpID0+IHtcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCAnbG9hZGluZycgXSApO1xuXHR9O1xuXG5cdHJldHVybiBbXG5cdFx0Y2xhc3Nlcy5qb2luKCAnICcgKSxcblx0XHRzZXRWYWxpZENsYXNzLFxuXHRcdHNldEludmFsaWRDbGFzcyxcblx0XHRzZXRMb2FkaW5nQ2xhc3MsXG5cdF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0YXRlVmFsaWRDbGFzc2VzOyIsImltcG9ydCB1c2VDdXJyZW50QWN0aW9uIGZyb20gJy4vdXNlQ3VycmVudEFjdGlvbic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyBTVE9SRV9OQU1FIH0gZnJvbSAnLi4vc3RvcmUnO1xuXG4vKipcbiAqIFVwZGF0ZSBjdXJyZW50IG1ldGEgaW4gc3RvcmUgKHdoaWxlIGVkaXRpbmcgaXQgaW4gbW9kYWwpXG4gKiBAcmV0dXJuIHt7c2V0Q3VycmVudEFjdGlvbiwgY2xlYXJDdXJyZW50LCBzZXRUeXBlU2V0dGluZ3MsXG4gKiAgICAgdXBkYXRlQ3VycmVudENvbmRpdGlvbnN9fVxuICovXG5leHBvcnQgY29uc3QgdXNlVXBkYXRlQ3VycmVudEFjdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgeyBjdXJyZW50QWN0aW9uIH0gPSB1c2VDdXJyZW50QWN0aW9uKCk7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIHNldEN1cnJlbnRBY3Rpb24sXG5cdFx0ICAgICAgY2xlYXJDdXJyZW50LFxuXHRcdCAgICAgIHVwZGF0ZUN1cnJlbnRDb25kaXRpb25zLFxuXHQgICAgICB9ID0gdXNlRGlzcGF0Y2goIFNUT1JFX05BTUUgKTtcblxuXHRjb25zdCBzZXRUeXBlU2V0dGluZ3MgPSBzZXR0aW5ncyA9PiB7XG5cdFx0c2V0Q3VycmVudEFjdGlvbigge1xuXHRcdFx0Li4uY3VycmVudEFjdGlvbixcblx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdC4uLmN1cnJlbnRBY3Rpb24uc2V0dGluZ3MsXG5cdFx0XHRcdFsgY3VycmVudEFjdGlvbi50eXBlIF06IHNldHRpbmdzLFxuXHRcdFx0fSxcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRzZXRDdXJyZW50QWN0aW9uLFxuXHRcdHNldFR5cGVTZXR0aW5ncyxcblx0XHRjbGVhckN1cnJlbnQsXG5cdFx0dXBkYXRlQ3VycmVudENvbmRpdGlvbnMsXG5cdH07XG59O1xuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJIb29rcyAgICAgICAgICAgICAgICAgICAgICAgID0gd2luZG93LkpldEZCSG9va3MgPz8ge307XG53aW5kb3cuSmV0RkJIb29rcy51c2VVcGRhdGVDdXJyZW50QWN0aW9uID0gdXNlVXBkYXRlQ3VycmVudEFjdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVXBkYXRlQ3VycmVudEFjdGlvbjsiLCJpbXBvcnQgdXNlQ3VycmVudEFjdGlvbiBmcm9tICcuL3VzZUN1cnJlbnRBY3Rpb24nO1xuaW1wb3J0IHVzZUFjdGlvbnNFZGl0IGZyb20gJy4vdXNlQWN0aW9uc0VkaXQnO1xuXG4vKipcbiAqIFVwZGF0ZSBhY3Rpb24gaW4gbWV0YVxuICogQHJldHVybiB7ZnVuY3Rpb24oKj0pOiB2b2lkfVxuICovXG5leHBvcnQgY29uc3QgdXNlVXBkYXRlQ3VycmVudEFjdGlvbk1ldGEgPSAoKSA9PiB7XG5cdGNvbnN0IHsgY3VycmVudEFjdGlvbiB9ICAgICAgICAgICAgICAgICAgID0gdXNlQ3VycmVudEFjdGlvbigpO1xuXHRjb25zdCB7IHVwZGF0ZUFjdGlvbk9iaiwgYWRkQWN0aW9uUHJvcHMgfSA9IHVzZUFjdGlvbnNFZGl0KCk7XG5cblx0Ly8gbmVlZCB0byBhZGQgYWN0aW9uICYgc2F2ZSBwcm9wc1xuXHRpZiAoIDAgPiBjdXJyZW50QWN0aW9uLmlkICkge1xuXHRcdHJldHVybiBuZXdQcm9wcyA9PiBhZGRBY3Rpb25Qcm9wcyggbmV3UHJvcHMgKTtcblx0fVxuXG5cdHJldHVybiBuZXdQcm9wcyA9PiB7XG5cdFx0dXBkYXRlQWN0aW9uT2JqKCBjdXJyZW50QWN0aW9uLmlkLCBuZXdQcm9wcyApO1xuXHR9O1xufTtcblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCSG9va3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB3aW5kb3cuSmV0RkJIb29rcyA/PyB7fTtcbndpbmRvdy5KZXRGQkhvb2tzLnVzZVVwZGF0ZUN1cnJlbnRBY3Rpb25NZXRhID0gdXNlVXBkYXRlQ3VycmVudEFjdGlvbk1ldGE7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVwZGF0ZUN1cnJlbnRBY3Rpb25NZXRhOyIsImltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmZ1bmN0aW9uIHdpdGhDdXJyZW50QWN0aW9uKCBzZWxlY3QgKSB7XG5cdGNvbnN0IGN1cnJlbnRBY3Rpb24gPSBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRDdXJyZW50QWN0aW9uKCk7XG5cblx0cmV0dXJuIHsgY3VycmVudEFjdGlvbiB9O1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJIb29rcyAgICAgICAgICAgICAgICAgICA9IHdpbmRvdy5KZXRGQkhvb2tzID8/IHt9O1xud2luZG93LkpldEZCSG9va3Mud2l0aEN1cnJlbnRBY3Rpb24gPSB3aXRoQ3VycmVudEFjdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEN1cnJlbnRBY3Rpb247IiwiaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uL3N0b3JlJztcblxuZnVuY3Rpb24gd2l0aERpc3BhdGNoQWN0aW9uTG9hZGluZyggZGlzcGF0Y2ggKSB7XG5cdHJldHVybiB7XG5cdFx0c2V0TG9hZGluZyggYWN0aW9uSWQgKSB7XG5cdFx0XHRkaXNwYXRjaCggU1RPUkVfTkFNRSApLnNldExvYWRpbmcoIHsgaWQ6IGFjdGlvbklkIH0gKTtcblx0XHR9LFxuXHRcdHNldFJlc3VsdFN1Y2Nlc3MoIGFjdGlvbklkLCByZXNwb25zZSApIHtcblx0XHRcdGRpc3BhdGNoKCBTVE9SRV9OQU1FICkuc2V0TG9hZGluZ1Jlc3VsdCgge1xuXHRcdFx0XHRpZDogYWN0aW9uSWQsXG5cdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXG5cdFx0XHRcdHJlc3BvbnNlLFxuXHRcdFx0fSApO1xuXHRcdH0sXG5cdFx0c2V0UmVzdWx0RmFpbCggYWN0aW9uSWQgKSB7XG5cdFx0XHRkaXNwYXRjaCggU1RPUkVfTkFNRSApLnNldExvYWRpbmdSZXN1bHQoIHtcblx0XHRcdFx0aWQ6IGFjdGlvbklkLFxuXHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcblx0XHRcdFx0cmVzcG9uc2U6IHt9LFxuXHRcdFx0fSApO1xuXHRcdH0sXG5cdH07XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkhvb2tzICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB3aW5kb3cuSmV0RkJIb29rcyA/PyB7fTtcbndpbmRvdy5KZXRGQkhvb2tzLndpdGhEaXNwYXRjaEFjdGlvbkxvYWRpbmcgPSB3aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nOyIsImltcG9ydCB7IGdldFJlcXVlc3RGaWVsZHMsIGdldENvbXB1dGVkRmllbGRzIH0gZnJvbSAnLi91c2VSZXF1ZXN0RmllbGRzJztcbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmZ1bmN0aW9uIHdpdGhSZXF1ZXN0RmllbGRzKCBzZWxlY3QgKSB7XG5cdGNvbnN0IG1ldGEgICAgICAgICAgPSBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5cblx0XHRnZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcblx0Y29uc3QgYWN0aW9ucyAgICAgICA9IEpTT04ucGFyc2UoIG1ldGEuX2pmX2FjdGlvbnMgfHwgJ1tdJyApO1xuXHRjb25zdCBjdXJyZW50QWN0aW9uID0gc2VsZWN0KCBTVE9SRV9OQU1FICkuZ2V0Q3VycmVudEFjdGlvbigpO1xuXHRjb25zdCBjb21wdXRlZCAgICAgID0gc2VsZWN0KCBTVE9SRV9OQU1FICkuZ2V0Q29tcHV0ZWRGaWVsZHMoKTtcblxuXHRhY3Rpb25zLnNwbGljZSggY3VycmVudEFjdGlvbi5pbmRleCApO1xuXG5cdGNvbnN0IGZpZWxkcyAgPSBbXTtcblx0Y29uc3QgbmFtZVNldCA9IG5ldyBTZXQoKTtcblxuXHRnZXRSZXF1ZXN0RmllbGRzKCB7IGFjdGlvbnMsIGZpZWxkcyB9ICk7XG5cdGdldENvbXB1dGVkRmllbGRzKCB7IGZpZWxkcywgYWN0aW9ucywgY29tcHV0ZWQsIG5hbWVTZXQgfSApO1xuXG5cdHJldHVybiB7IHJlcXVlc3RGaWVsZHM6IGZpZWxkcyB9O1xufVxuXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG53aW5kb3cuSmV0RkJIb29rcyAgICAgICAgICAgICAgICAgICA9IHdpbmRvdy5KZXRGQkhvb2tzID8/IHt9O1xud2luZG93LkpldEZCSG9va3Mud2l0aFJlcXVlc3RGaWVsZHMgPSB3aXRoUmVxdWVzdEZpZWxkcztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcXVlc3RGaWVsZHM7IiwiaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uL3N0b3JlJztcblxuZnVuY3Rpb24gd2l0aFNlbGVjdEFjdGlvbkxvYWRpbmcoIHNlbGVjdCApIHtcblx0Y29uc3QgbG9hZGluZ1N0YXRlID0gc2VsZWN0KCBTVE9SRV9OQU1FICkuZ2V0Q3VycmVudExvYWRpbmcoKTtcblxuXHRyZXR1cm4geyBsb2FkaW5nU3RhdGUgfTtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCSG9va3MgICAgICAgICAgICAgICAgICAgICAgICAgPSB3aW5kb3cuSmV0RkJIb29rcyA/PyB7fTtcbndpbmRvdy5KZXRGQkhvb2tzLndpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nID0gd2l0aFNlbGVjdEFjdGlvbkxvYWRpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWxlY3RBY3Rpb25Mb2FkaW5nOyIsImltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxucmVnaXN0ZXIoIHN0b3JlICk7XG5cbmV4cG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBDb21wb25lbnRzXG4gKi9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWN0aW9uRmV0Y2hCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvQWN0aW9uRmV0Y2hCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBY3Rpb25HcmlkSXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9BZGRBY3Rpb24vQWN0aW9uR3JpZEl0ZW0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBY3Rpb25JdGVtQm9keSB9IGZyb20gJy4vY29tcG9uZW50cy9BY3Rpb25JdGVtQm9keSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbkl0ZW1Gb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWN0aW9uSXRlbUZvb3Rlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbkl0ZW1IZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWN0aW9uSXRlbUhlYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbkl0ZW1XcmFwcGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0FjdGlvbkl0ZW1XcmFwcGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWN0aW9uTWVzc2FnZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvQWN0aW9uTWVzc2FnZXMnO1xuZXhwb3J0IHtcblx0ZGVmYXVsdCBhcyBBY3Rpb25NZXNzYWdlc1Nsb3RGaWxscyxcbn0gZnJvbSAnLi9jb21wb25lbnRzL0FjdGlvbk1lc3NhZ2VzU2xvdEZpbGxzJztcbmV4cG9ydCB7XG5cdGRlZmF1bHQgYXMgQWN0aW9uTW9kYWxCYWNrQnV0dG9uLFxufSBmcm9tICcuL2NvbXBvbmVudHMvQWN0aW9uTW9kYWxCYWNrQnV0dG9uJztcbmV4cG9ydCB7XG5cdGRlZmF1bHQgYXMgQWN0aW9uTW9kYWxDbG9zZUJ1dHRvbixcbn0gZnJvbSAnLi9jb21wb25lbnRzL0FjdGlvbk1vZGFsQ2xvc2VCdXR0b24nO1xuZXhwb3J0IHtcblx0ZGVmYXVsdCBhcyBBY3Rpb25Nb2RhbEhlYWRlclNsb3RGaWxsLFxufSBmcm9tICcuL2NvbXBvbmVudHMvQWN0aW9uTW9kYWxIZWFkZXJTbG90RmlsbCc7XG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIEFjdGlvbnNBZnRlck5ld0J1dHRvblNsb3RGaWxsLFxufSBmcm9tICcuL2NvbXBvbmVudHMvQWN0aW9uc0FmdGVyTmV3QnV0dG9uU2xvdEZpbGwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBY3Rpb25UaXRsZSB9IGZyb20gJy4vY29tcG9uZW50cy9BY3Rpb25UaXRsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFkZEFjdGlvbkJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9BZGRBY3Rpb24vQWRkQWN0aW9uQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWxsUHJvQWN0aW9uc0xpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxsUHJvQWN0aW9uc0xpbmsnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWxldGVBY3Rpb25CdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvRGVsZXRlQWN0aW9uQnV0dG9uJztcbmV4cG9ydCB7XG5cdGRlZmF1bHQgYXMgRWRpdEFjdGlvbkNvbmRpdGlvbnNCdXR0b24sXG59IGZyb20gJy4vY29tcG9uZW50cy9FZGl0QWN0aW9uQ29uZGl0aW9uc0J1dHRvbic7XG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIEVkaXRBY3Rpb25TZXR0aW5nc0J1dHRvbixcbn0gZnJvbSAnLi9jb21wb25lbnRzL0VkaXRBY3Rpb25TZXR0aW5nc0J1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV2ZW50c0xpc3QgfSBmcm9tICcuL2NvbXBvbmVudHMvRXZlbnRzTGlzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZldGNoQWpheEJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9GZXRjaEFqYXhCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGZXRjaEFwaUJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9GZXRjaEFwaUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RBY3Rpb25JdGVtIH0gZnJvbSAnLi9jb21wb25lbnRzL0xpc3RBY3Rpb25JdGVtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGxhY2Vob2xkZXJNZXNzYWdlIH0gZnJvbSAnLi9jb21wb25lbnRzL1BsYWNlaG9sZGVyTWVzc2FnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlcXVlc3RCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvUmVxdWVzdEJ1dHRvbic7XG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIFJlcXVlc3RMb2FkaW5nQnV0dG9uLFxufSBmcm9tICcuL2NvbXBvbmVudHMvUmVxdWVzdExvYWRpbmdCdXR0b24nO1xuZXhwb3J0IHtcblx0ZGVmYXVsdCBhcyBUb2dnbGVBY3Rpb25FeGVjdXRpb25CdXR0b24sXG59IGZyb20gJy4vY29tcG9uZW50cy9Ub2dnbGVBY3Rpb25FeGVjdXRpb25CdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWYWxpZGF0ZUJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9WYWxpZGF0ZUJ1dHRvbic7XG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIFZhbGlkYXRlQnV0dG9uV2l0aFN0b3JlLFxufSBmcm9tICcuL2NvbXBvbmVudHMvVmFsaWRhdGVCdXR0b25XaXRoU3RvcmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWYWxpZGF0b3JQcm92aWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9WYWxpZGF0b3JQcm92aWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpZWxkc01hcEZpZWxkIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZpZWxkc01hcEZpZWxkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmFsaWRhdGVkVGV4dENvbnRyb2wsIH0gZnJvbSAnLi9jb21wb25lbnRzL1ZhbGlkYXRlZFRleHRDb250cm9sJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmFsaWRhdGVkU2VsZWN0Q29udHJvbCwgfSBmcm9tICcuL2NvbXBvbmVudHMvVmFsaWRhdGVkU2VsZWN0Q29udHJvbCc7XG5leHBvcnQgeyBUYWJsZUxpc3RSb3csIFRhYmxlTGlzdENvbnRhaW5lciwgVGFibGVMaXN0SGVhZCB9IGZyb20gJy4vY29tcG9uZW50cy9UYWJsZUxpc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaW5nbGVWYWx1ZUFzQXJyYXlUb2dnbGUsIH0gZnJvbSAnLi9jb21wb25lbnRzL1NpbmdsZVZhbHVlQXNBcnJheVRvZ2dsZSc7XG5cblxuLyoqXG4gKiBIb29rc1xuICovXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUFjdGlvbkNhbGxiYWNrIH0gZnJvbSAnLi9ob29rcy91c2VBY3Rpb25DYWxsYmFjayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUFjdGlvbkVycm9ycyB9IGZyb20gJy4vaG9va3MvdXNlQWN0aW9uRXJyb3JzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQWN0aW9ucyB9IGZyb20gJy4vaG9va3MvdXNlQWN0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUFjdGlvbnNFZGl0IH0gZnJvbSAnLi9ob29rcy91c2VBY3Rpb25zRWRpdCc7XG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyLFxufSBmcm9tICcuL2hvb2tzL3VzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQ3VycmVudEFjdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlQ3VycmVudEFjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUxvb3BlZEFjdGlvbiB9IGZyb20gJy4vaG9va3MvdXNlTG9vcGVkQWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUmVxdWVzdEZpZWxkcyB9IGZyb20gJy4vaG9va3MvdXNlUmVxdWVzdEZpZWxkcyc7XG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIHVzZVVwZGF0ZUN1cnJlbnRBY3Rpb24sXG59IGZyb20gJy4vaG9va3MvdXNlVXBkYXRlQ3VycmVudEFjdGlvbic7XG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIHVzZVVwZGF0ZUN1cnJlbnRBY3Rpb25NZXRhLFxufSBmcm9tICcuL2hvb2tzL3VzZVVwZGF0ZUN1cnJlbnRBY3Rpb25NZXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aEN1cnJlbnRBY3Rpb24gfSBmcm9tICcuL2hvb2tzL3dpdGhDdXJyZW50QWN0aW9uJztcbmV4cG9ydCB7XG5cdGRlZmF1bHQgYXMgd2l0aERpc3BhdGNoQWN0aW9uTG9hZGluZyxcbn0gZnJvbSAnLi9ob29rcy93aXRoRGlzcGF0Y2hBY3Rpb25Mb2FkaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJlcXVlc3RGaWVsZHMgfSBmcm9tICcuL2hvb2tzL3dpdGhSZXF1ZXN0RmllbGRzJztcbmV4cG9ydCB7XG5cdGRlZmF1bHQgYXMgd2l0aFNlbGVjdEFjdGlvbkxvYWRpbmcsXG59IGZyb20gJy4vaG9va3Mvd2l0aFNlbGVjdEFjdGlvbkxvYWRpbmcnO1xuXG4vKipcbiAqIEFic3RyYWN0XG4gKi9cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFzZUFjdGlvbiB9IGZyb20gJy4vYWJzdHJhY3QvQmFzZUFjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2VDb21wdXRlZEZpZWxkIH0gZnJvbSAnLi9hYnN0cmFjdC9CYXNlQ29tcHV0ZWRGaWVsZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbnNGbG93IH0gZnJvbSAnLi9hYnN0cmFjdC9BY3Rpb25zRmxvdyc7XG5cbi8qKlxuICogQ29udGV4dFxuICovXG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIEFjdGlvbkxpc3RJdGVtQ29udGV4dCxcbn0gZnJvbSAnLi9jb250ZXh0L0FjdGlvbkxpc3RJdGVtQ29udGV4dCc7XG5leHBvcnQge1xuXHRkZWZhdWx0IGFzIEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCxcbn0gZnJvbSAnLi9jb250ZXh0L0N1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCc7XG5cbi8qKlxuICogSGVscGVyc1xuICovXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZ2lzdGVyQWN0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL3JlZ2lzdGVyQWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWRkQWN0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL2FkZEFjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFkZENvbXB1dGVkRmllbGQgfSBmcm9tICcuL2hlbHBlcnMvYWRkQ29tcHV0ZWRGaWVsZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnZlcnRGbG93IH0gZnJvbSAnLi9oZWxwZXJzL2NvbnZlcnRGbG93JztcbmV4cG9ydCB7XG5cdGRlZmF1bHQgYXMgY29udmVydExpc3RUb0ZpZWxkc01hcCxcbn0gZnJvbSAnLi9oZWxwZXJzL2NvbnZlcnRMaXN0VG9GaWVsZHNNYXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnbG9iYWxUYWIgfSBmcm9tICcuL2hlbHBlcnMvZ2xvYmFsVGFiJztcbiIsImltcG9ydCB7XG5cdFNFVF9DVVJSRU5UX0FDVElPTixcblx0U0VUX0xPQURJTkcsXG5cdFVQREFURV9DVVJSRU5UX0NPTkRJVElPTlMsXG5cdFNFVF9NRVRBLFxuXHRFRElUX01FVEEsXG5cdENMRUFSX0NVUlJFTlQsXG5cdEFERF9DT01QVVRFRF9GSUVMRCxcblx0RURJVF9BQ1RJT04sXG5cdFJFR0lTVEVSX0FDVElPTixcblx0UkVHSVNURVJfQ0FURUdPUlksXG5cdFNIT1dfQUNUSU9OU19JTlNFUlRFUl9NT0RBTCxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0TG9hZGluZ0l0ZW0gfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50QWN0aW9uKCBpdGVtID0ge30gKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogU0VUX0NVUlJFTlRfQUNUSU9OLFxuXHRcdGl0ZW0sXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNZXRhKCBpdGVtICkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNFVF9NRVRBLFxuXHRcdGl0ZW0sXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0TWV0YSggaXRlbSApIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBFRElUX01FVEEsXG5cdFx0aXRlbSxcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ3VycmVudCgpIHtcblx0cmV0dXJuIHsgdHlwZTogQ0xFQVJfQ1VSUkVOVCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9hZGluZyggbG9hZGluZ1N0YXRlICkge1xuXHRsb2FkaW5nU3RhdGUubG9hZGluZyA/Pz0gdHJ1ZTtcblx0bG9hZGluZ1N0YXRlLnN0YXRlID8/PSAnbG9hZGluZyc7XG5cblx0cmV0dXJuICggeyBkaXNwYXRjaCwgc2VsZWN0IH0gKSA9PiB7XG5cdFx0Y29uc3QgYWN0aW9uSW5kZXggPSBzZWxlY3QuZ2V0TG9hZGluZ0luZGV4KCBsb2FkaW5nU3RhdGUuaWQgKTtcblx0XHRjb25zdCBsb2FkaW5nICAgICA9IFsgLi4uc2VsZWN0LmdldEFsbExvYWRpbmcoKSBdO1xuXG5cdFx0aWYgKCBhY3Rpb25JbmRleCAhPT0gLTEgKSB7XG5cdFx0XHRsb2FkaW5nWyBhY3Rpb25JbmRleCBdID0gZ2V0TG9hZGluZ0l0ZW0oIGxvYWRpbmdTdGF0ZSApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxvYWRpbmcucHVzaCggZ2V0TG9hZGluZ0l0ZW0oIGxvYWRpbmdTdGF0ZSApICk7XG5cdFx0fVxuXG5cdFx0ZGlzcGF0Y2goIHtcblx0XHRcdHR5cGU6IFNFVF9MT0FESU5HLFxuXHRcdFx0cGF5bG9hZDogbG9hZGluZyxcblx0XHR9ICk7XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2FkaW5nUmVzdWx0KCBpdGVtICkge1xuXHRyZXR1cm4gKCB7IGRpc3BhdGNoIH0gKSA9PiB7XG5cdFx0ZGlzcGF0Y2guc2V0TG9hZGluZygge1xuXHRcdFx0aWQ6IGl0ZW0uaWQsXG5cdFx0XHRzdGF0ZTogaXRlbS5zdWNjZXNzID8gJ2lzLXZhbGlkJyA6ICdpcy1pbnZhbGlkJyxcblx0XHRcdHN1Y2Nlc3M6IGl0ZW0uc3VjY2Vzcyxcblx0XHRcdHJlc3BvbnNlOiBpdGVtLnJlc3BvbnNlLFxuXHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0fSApO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ3VycmVudFNldHRpbmdzKCBpdGVtICkge1xuXHRyZXR1cm4gKCB7IHNlbGVjdCwgZGlzcGF0Y2ggfSApID0+IHtcblx0XHRjb25zdCBjdXJyZW50QWN0aW9uID0gc2VsZWN0LmdldEN1cnJlbnRBY3Rpb24oKTtcblxuXHRcdGNvbnN0IHVwZGF0ZVNldHRpbmdzID0ge1xuXHRcdFx0Li4uc2VsZWN0LmdldEN1cnJlbnRTZXR0aW5ncygpLFxuXHRcdFx0Li4uaXRlbSxcblx0XHR9O1xuXG5cdFx0ZGlzcGF0Y2goIHtcblx0XHRcdHR5cGU6IFNFVF9DVVJSRU5UX0FDVElPTixcblx0XHRcdGl0ZW06IHtcblx0XHRcdFx0Li4uY3VycmVudEFjdGlvbixcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHQuLi5jdXJyZW50QWN0aW9uLnNldHRpbmdzLFxuXHRcdFx0XHRcdFsgY3VycmVudEFjdGlvbi50eXBlIF06IHVwZGF0ZVNldHRpbmdzLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9ICk7XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDdXJyZW50Q29uZGl0aW9ucyggaXRlbSApIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBVUERBVEVfQ1VSUkVOVF9DT05ESVRJT05TLFxuXHRcdGl0ZW0sXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckFjdGlvbnMoIHR5cGVzICkge1xuXHRyZXR1cm4gKCB7IGRpc3BhdGNoIH0gKSA9PiB7XG5cdFx0Zm9yICggY29uc3QgYWN0aW9uVHlwZSBvZiB0eXBlcyApIHtcblx0XHRcdGRpc3BhdGNoLnJlZ2lzdGVyQWN0aW9uKCBhY3Rpb25UeXBlICk7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJBY3Rpb24oIGFjdGlvblNldHRpbmdzICkge1xuXHRyZXR1cm4gKCB7IHNlbGVjdCwgZGlzcGF0Y2ggfSApID0+IHtcblx0XHRjb25zdCBhY3Rpb24gPSBzZWxlY3QuZ2V0QWN0aW9uKCBhY3Rpb25TZXR0aW5ncy50eXBlICk7XG5cblx0XHRpZiAoICFhY3Rpb24gKSB7XG5cdFx0XHRkaXNwYXRjaC5hZGRBY3Rpb24oIGFjdGlvblNldHRpbmdzICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRkaXNwYXRjaCgge1xuXHRcdFx0dHlwZTogRURJVF9BQ1RJT04sXG5cdFx0XHRhY3Rpb25TZXR0aW5ncyxcblx0XHR9ICk7XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtICBjYXRlZ29yeSB7eyB0eXBlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcgfX1cbiAqIEByZXR1cm4ge3t0eXBlOiBzdHJpbmcsIGNhdGVnb3J5fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ2F0ZWdvcnkoIGNhdGVnb3J5ICkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFJFR0lTVEVSX0NBVEVHT1JZLFxuXHRcdGNhdGVnb3J5LFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWN0aW9uKCBhY3Rpb25TZXR0aW5ncyApIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBSRUdJU1RFUl9BQ1RJT04sXG5cdFx0YWN0aW9uU2V0dGluZ3MsXG5cdH07XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgMy40LjAuIFVzZSByZWdpc3RlckFjdGlvbiBpbnN0ZWFkIG9mIHRoaXNcbiAqXG4gKiBAcGFyYW0gIGFjdGlvblR5cGVcbiAqIEBwYXJhbSAgY2FsbGJhY2tcbiAqIEByZXR1cm4geyhmdW5jdGlvbih7ZGlzcGF0Y2g6ICp9KTogdm9pZCl8Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENhbGxiYWNrKCBhY3Rpb25UeXBlLCBjYWxsYmFjayApIHtcblx0cmV0dXJuICggeyBkaXNwYXRjaCB9ICkgPT4ge1xuXHRcdGRpc3BhdGNoLnJlZ2lzdGVyQWN0aW9uKCB7XG5cdFx0XHR0eXBlOiBhY3Rpb25UeXBlLFxuXHRcdFx0ZWRpdDogY2FsbGJhY2ssXG5cdFx0fSApO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29tcHV0ZWRGaWVsZCggZmllbGQsIHNldHRpbmdzID0ge30gKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogQUREX0NPTVBVVEVEX0ZJRUxELFxuXHRcdGZpZWxkLFxuXHRcdHNldHRpbmdzLFxuXHR9O1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIDMuNC4wLiBVc2UgcmVnaXN0ZXJBY3Rpb24gaW5zdGVhZCBvZiB0aGlzXG4gKlxuICogQHBhcmFtICBhY3Rpb25UeXBlXG4gKiBAcGFyYW0gIHJlcGxhY2VcbiAqIEByZXR1cm4geyhmdW5jdGlvbih7ZGlzcGF0Y2g6ICp9KTogdm9pZCl8Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVkaXRBY3Rpb24oIGFjdGlvblR5cGUsIHJlcGxhY2UgKSB7XG5cdHJldHVybiAoIHsgZGlzcGF0Y2ggfSApID0+IHtcblx0XHRkaXNwYXRjaC5yZWdpc3RlckFjdGlvbigge1xuXHRcdFx0Li4ucmVwbGFjZSxcblx0XHRcdHR5cGU6IGFjdGlvblR5cGUsXG5cdFx0fSApO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkFjdGlvblNldHRpbmdzKCB7IGl0ZW0sIGluZGV4LCBzY2VuYXJpbyA9ICcnIH0gKSB7XG5cdHJldHVybiAoIHsgZGlzcGF0Y2ggfSApID0+IHtcblx0XHRkaXNwYXRjaC5zZXRDdXJyZW50QWN0aW9uKCB7XG5cdFx0XHQuLi5pdGVtLFxuXHRcdFx0aW5kZXgsXG5cdFx0fSApO1xuXHRcdGRpc3BhdGNoLnNldE1ldGEoIHtcblx0XHRcdGluZGV4LFxuXHRcdFx0bW9kYWxUeXBlOiAnc2V0dGluZ3MnLFxuXHRcdFx0c2NlbmFyaW8sXG5cdFx0fSApO1xuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSBzaG93IHtCb29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FjdGlvbnNJbnNlcnRlck1vZGFsKCBzaG93ICkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNIT1dfQUNUSU9OU19JTlNFUlRFUl9NT0RBTCxcblx0XHRzaG93LFxuXHR9O1xufVxuIiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5leHBvcnQgZGVmYXVsdCBbXG5cdHtcblx0XHR0eXBlOiAnY29tbXVuaWNhdGlvbicsXG5cdFx0bGFiZWw6IF9fKCAnQ29tbXVuaWNhdGlvbiAmIE5vdGlmaWNhdGlvbnMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICd1c2VyJyxcblx0XHRsYWJlbDogX18oICdVc2VyIE1hbmFnZW1lbnQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICdjb250ZW50Jyxcblx0XHRsYWJlbDogX18oICdDb250ZW50ICYgRGF0YSBNYW5hZ2VtZW50JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAnYWR2YW5jZWQnLFxuXHRcdGxhYmVsOiBfXyggJ0FkdmFuY2VkIEludGVncmF0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5dOyIsImV4cG9ydCBjb25zdCBTRVRfQ1VSUkVOVF9BQ1RJT04gPSAnU0VUX0NVUlJFTlRfQUNUSU9OJztcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9ICdTRVRfTE9BRElORyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0NVUlJFTlRfQ09ORElUSU9OUyA9ICdVUERBVEVfQUNUSU9OX0NPTkRJVElPTlMnO1xuZXhwb3J0IGNvbnN0IFNFVF9NRVRBID0gJ1NFVF9DVVJSRU5UX01FVEEnO1xuZXhwb3J0IGNvbnN0IEVESVRfTUVUQSA9ICdFRElUX0NVUlJFTlRfTUVUQSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfQ1VSUkVOVCA9ICdDTEVBUl9DVVJSRU5UJztcbmV4cG9ydCBjb25zdCBBRERfQ09NUFVURURfRklFTEQgPSAnQUREX0NPTVBVVEVEX0ZJRUxEJztcbmV4cG9ydCBjb25zdCBFRElUX0FDVElPTiA9ICdFRElUX0FDVElPTic7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfQUNUSU9OID0gJ1JFR0lTVEVSX0FDVElPTic7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfQ0FURUdPUlkgPSAnUkVHSVNURVJfQ0FURUdPUlknO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUNUSU9OU19JTlNFUlRFUl9NT0RBTCA9ICdTSE9XX0FDVElPTlNfSU5TRVJURVJfTU9EQUwnO1xuIiwiaW1wb3J0IHsgZ2V0TG9hZGluZ0l0ZW0gfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgcHJvQWN0aW9ucyBmcm9tICcuL3Byby5hY3Rpb25zJztcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gJy4vY2F0ZWdvcmllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y3VycmVudEFjdGlvbjoge30sXG5cdHR5cGVzOiBbXG5cdFx0Li4ucHJvQWN0aW9ucyxcblx0XSxcblx0Y2F0ZWdvcmllczogW1xuXHRcdC4uLmNhdGVnb3JpZXMsXG5cdF0sXG5cdG1ldGE6IHt9LFxuXHRsb2FkaW5nU3RhdGU6IFtcblx0XHRnZXRMb2FkaW5nSXRlbSgpLFxuXHRdLFxuXHRjb21wdXRlZEZpZWxkczogW10sXG5cdHNob3dBY3Rpb25zSW5zZXJ0ZXJNb2RhbDogZmFsc2UsXG59OyIsImltcG9ydCBERUZBVUxUX0xPQURJTkdfU1RBVEUgZnJvbSAnLi9sb2FkaW5nLnN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGdldExvYWRpbmdJdGVtID0gKCBhZGRpdGlvbmFsID0ge30gKSA9PiB7XG5cdGNvbnN0IGl0ZW0gPSB7IC4uLkRFRkFVTFRfTE9BRElOR19TVEFURSB9O1xuXHRpZiAoIGFkZGl0aW9uYWwuc3RhdGUgKSB7XG5cdFx0aXRlbS5idXR0b25DbGFzc05hbWUgPSBbICdqZXQtZm9ybS12YWxpZGF0ZS1idXR0b24nLCBhZGRpdGlvbmFsLnN0YXRlIF07XG5cdH1cblx0cmV0dXJuIHsgLi4uaXRlbSwgLi4uYWRkaXRpb25hbCB9O1xufTsiLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGNyZWF0ZVJlZHV4U3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgU1RPUkVfTkFNRSA9ICdqZXQtZm9ybXMvYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHV4U3RvcmUoIFNUT1JFX05BTUUsIHtcblx0cmVkdWNlcixcblx0YWN0aW9ucyxcblx0c2VsZWN0b3JzLFxufSApO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRpZDogLTEsXG5cdHN0YXRlOiAnJyxcblx0c3VjY2VzczogZmFsc2UsXG5cdHJlc3BvbnNlOiB7fSxcblx0bG9hZGluZzogZmFsc2UsXG5cdGJ1dHRvbkNsYXNzTmFtZTogWyAnamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyBdLFxufTsiLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBjb21tZW50QXV0aG9yQXZhdGFyIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcblx0e1xuXHRcdHR5cGU6ICdsb2dpbicsXG5cdFx0bGFiZWw6IF9fKCAnVXNlciBMb2dpbicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGljb246IGNvbW1lbnRBdXRob3JBdmF0YXIsXG5cdFx0ZGlzYWJsZWQ6IHRydWUsXG5cdFx0Y2F0ZWdvcnk6ICd1c2VyJyxcblx0XHRwcm9BY3Rpb25MaW5rOiAnaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vYWRkb25zL3VzZXItbG9naW4vJ1xuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3JlZGlyZWN0X3RvX3dvb19jaGVja291dCcsXG5cdFx0bGFiZWw6IF9fKFxuXHRcdFx0J0FkZCB0byBDYXJ0ICYgUmVkaXJlY3QgdG8gQ2hlY2tvdXQnLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCksXG5cdFx0aWNvbjogPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuXHRcdFx0PHJlY3QgeD1cIjBcIiBmaWxsPVwibm9uZVwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiLz5cblx0XHRcdDxnPlxuXHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdGQ9XCJNNiAxM2g5Yy41NSAwIDEgLjQ1IDEgMXMtLjQ1IDEtMSAxSDVjLS41NSAwLTEtLjQ1LTEtMVY0SDJjLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTFoM2MuNTUgMCAxIC40NSAxIDF2MmgxM2wtNCA3SDZ2MXptLS41IDNjLjgzIDAgMS41LjY3IDEuNSAxLjVTNi4zMyAxOSA1LjUgMTkgNCAxOC4zMyA0IDE3LjUgNC42NyAxNiA1LjUgMTZ6bTkgMGMuODMgMCAxLjUuNjcgMS41IDEuNXMtLjY3IDEuNS0xLjUgMS41LTEuNS0uNjctMS41LTEuNS42Ny0xLjUgMS41LTEuNXpcIi8+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+LFxuXHRcdGRpc2FibGVkOiB0cnVlLFxuXHRcdHByb0FjdGlvbkxpbms6ICdodHRwczovL2pldGZvcm1idWlsZGVyLmNvbS9hZGRvbnMvd29vY29tbWVyY2UtY2FydC1jaGVja291dC1hY3Rpb24vJ1xuXHR9LFxuXTsiLCJpbXBvcnQge1xuXHRTRVRfQ1VSUkVOVF9BQ1RJT04sXG5cdFNFVF9NRVRBLFxuXHRFRElUX01FVEEsXG5cdENMRUFSX0NVUlJFTlQsXG5cdFNFVF9MT0FESU5HLFxuXHRVUERBVEVfQ1VSUkVOVF9DT05ESVRJT05TLFxuXHRSRUdJU1RFUl9BQ1RJT04sXG5cdFJFR0lTVEVSX0NBVEVHT1JZLFxuXHRBRERfQ09NUFVURURfRklFTEQsXG5cdEVESVRfQUNUSU9OLFxuXHRTSE9XX0FDVElPTlNfSU5TRVJURVJfTU9EQUwsXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQgZnJvbSAnLi4vaGVscGVycy93aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQnO1xuaW1wb3J0IERFRkFVTFRfU1RBVEUgZnJvbSAnLi9kZWZhdWx0LnN0YXRlJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XG5cdHN3aXRjaCAoIGFjdGlvbj8udHlwZSApIHtcblx0XHRjYXNlIFNFVF9DVVJSRU5UX0FDVElPTjpcblx0XHRcdGNvbnN0IHVwZGF0ZSA9IHt9O1xuXG5cdFx0XHRpZiAoIHR5cGVvZiBhY3Rpb24uaXRlbSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0dXBkYXRlLmN1cnJlbnRBY3Rpb24gPSBhY3Rpb24uaXRlbSggc3RhdGUuY3VycmVudEFjdGlvbiApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHVwZGF0ZS5jdXJyZW50QWN0aW9uID0gYWN0aW9uLml0ZW07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHQuLi51cGRhdGUsXG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSBTRVRfTUVUQTpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtZXRhOiB7XG5cdFx0XHRcdFx0Li4uYWN0aW9uLml0ZW0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSBFRElUX01FVEE6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bWV0YToge1xuXHRcdFx0XHRcdC4uLnN0YXRlLm1ldGEsXG5cdFx0XHRcdFx0Li4uYWN0aW9uLml0ZW0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSBDTEVBUl9DVVJSRU5UOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGN1cnJlbnRBY3Rpb246IHt9LFxuXHRcdFx0XHRtZXRhOiB7fSxcblx0XHRcdH07XG5cblx0XHRjYXNlIFNFVF9MT0FESU5HOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGxvYWRpbmdTdGF0ZTogYWN0aW9uLnBheWxvYWQsXG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSBVUERBVEVfQ1VSUkVOVF9DT05ESVRJT05TOlxuXHRcdFx0Y29uc3QgeyBjb25kaXRpb25zID0gW10gfSA9IHN0YXRlLmN1cnJlbnRBY3Rpb247XG5cblx0XHRcdGNvbnN0IHVwZGF0ZUNvbmRpdGlvbnMgPSB0eXBlb2YgYWN0aW9uLml0ZW0gPT09ICdmdW5jdGlvbidcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICA/IGFjdGlvbi5pdGVtKCBjb25kaXRpb25zIClcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICA6IGFjdGlvbi5pdGVtO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y3VycmVudEFjdGlvbjoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLmN1cnJlbnRBY3Rpb24sXG5cdFx0XHRcdFx0Y29uZGl0aW9uczogdXBkYXRlQ29uZGl0aW9ucyxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cblx0XHRjYXNlIFJFR0lTVEVSX0FDVElPTjpcblx0XHRcdGNvbnN0IHsgYWN0aW9uU2V0dGluZ3MgfSA9IGFjdGlvbjtcblxuXHRcdFx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXHRcdFx0aWYgKCAhYWN0aW9uU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoICdsYWJlbCcgKSApIHtcblx0XHRcdFx0YWN0aW9uU2V0dGluZ3MubGFiZWwgPSB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLmZpbmQoXG5cdFx0XHRcdFx0Y3VycmVudEFjdGlvbiA9PiAoXG5cdFx0XHRcdFx0XHRjdXJyZW50QWN0aW9uLmlkID09PSBhY3Rpb25TZXR0aW5ncy50eXBlXG5cdFx0XHRcdFx0KSApPy5uYW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dHlwZXM6IFtcblx0XHRcdFx0XHQuLi5zdGF0ZS50eXBlcyxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQuLi5hY3Rpb25TZXR0aW5ncyxcblx0XHRcdFx0XHRcdGVkaXQ6IHdpdGhBY3Rpb25Mb2NhbGl6ZVNjcmlwdChcblx0XHRcdFx0XHRcdFx0YWN0aW9uU2V0dGluZ3MudHlwZSxcblx0XHRcdFx0XHRcdFx0YWN0aW9uU2V0dGluZ3MuZWRpdCxcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH07XG5cblx0XHRjYXNlIFJFR0lTVEVSX0NBVEVHT1JZOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGNhdGVnb3JpZXM6IFtcblx0XHRcdFx0XHQuLi5zdGF0ZS5jYXRlZ29yaWVzLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC4uLmFjdGlvbi5jYXRlZ29yeSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgQUREX0NPTVBVVEVEX0ZJRUxEOlxuXHRcdFx0Y29uc3QgY29tcHV0ZWRGaWVsZHMgPSBbXG5cdFx0XHRcdC4uLnN0YXRlLmNvbXB1dGVkRmllbGRzLFxuXHRcdFx0XHR7IGZpZWxkOiBhY3Rpb24uZmllbGQsIHNldHRpbmdzOiBhY3Rpb24uc2V0dGluZ3MgfSxcblx0XHRcdF0uc29ydCggKCBjdXJyZW50LCBuZXh0ICkgPT4gKFxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0Y3VycmVudC5zZXR0aW5ncz8ucHJpb3JpdHkgPz8gMTBcblx0XHRcdFx0KSAtIChcblx0XHRcdFx0XHRuZXh0LnNldHRpbmdzPy5wcmlvcml0eSA/PyAxMFxuXHRcdFx0XHQpXG5cdFx0XHQpICk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjb21wdXRlZEZpZWxkcyxcblx0XHRcdH07XG5cblx0XHRjYXNlIEVESVRfQUNUSU9OOlxuXHRcdFx0Y29uc3QgeyBhY3Rpb25TZXR0aW5nczogZWRpdEFjdGlvblNldHRpbmdzIH0gPSBhY3Rpb247XG5cblx0XHRcdGlmICggJ2VkaXQnIGluIGVkaXRBY3Rpb25TZXR0aW5ncyApIHtcblx0XHRcdFx0ZWRpdEFjdGlvblNldHRpbmdzLmVkaXQgPSB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQoXG5cdFx0XHRcdFx0ZWRpdEFjdGlvblNldHRpbmdzLnR5cGUsXG5cdFx0XHRcdFx0ZWRpdEFjdGlvblNldHRpbmdzLmVkaXQsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHR5cGVzID0gc3RhdGUudHlwZXMubWFwKCBjdXJyZW50ID0+IChcblx0XHRcdFx0Y3VycmVudC50eXBlICE9PSBlZGl0QWN0aW9uU2V0dGluZ3MudHlwZSA/IGN1cnJlbnQgOiB7XG5cdFx0XHRcdFx0Li4uY3VycmVudCxcblx0XHRcdFx0XHQuLi5lZGl0QWN0aW9uU2V0dGluZ3MsXG5cdFx0XHRcdH1cblx0XHRcdCkgKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHR5cGVzLFxuXHRcdFx0fTtcblxuXHRcdGNhc2UgU0hPV19BQ1RJT05TX0lOU0VSVEVSX01PREFMOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNob3dBY3Rpb25zSW5zZXJ0ZXJNb2RhbDogYWN0aW9uLnNob3csXG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuIiwiaW1wb3J0IERFRkFVTFRfTE9BRElOR19TVEFURSBmcm9tICcuL2xvYWRpbmcuc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9hZGluZ0luZGV4KCBzdGF0ZSwgYWN0aW9uSWQgKSB7XG5cdHJldHVybiBzdGF0ZS5sb2FkaW5nU3RhdGUuZmluZEluZGV4KCBhY3Rpb24gPT4gYWN0aW9uLmlkID09PSBhY3Rpb25JZCApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9hZGluZyggc3RhdGUsIGFjdGlvbklkICkge1xuXHRjb25zdCBhY3Rpb25JbmRleCA9IGdldExvYWRpbmdJbmRleCggc3RhdGUsIGFjdGlvbklkICk7XG5cblx0cmV0dXJuIGFjdGlvbkluZGV4ICE9PSAtMVxuXHQgICAgICAgPyBzdGF0ZS5sb2FkaW5nU3RhdGVbIGFjdGlvbkluZGV4IF1cblx0ICAgICAgIDogeyAuLi5ERUZBVUxUX0xPQURJTkdfU1RBVEUgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXB1dGVkRmllbGRzKCBzdGF0ZSApIHtcblx0cmV0dXJuIHN0YXRlLmNvbXB1dGVkRmllbGRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aW9uc01hcCggc3RhdGUgKSB7XG5cdGNvbnN0IG1hcCA9IHt9O1xuXG5cdGZvciAoIGNvbnN0IGxpc3RFbGVtZW50IG9mIHN0YXRlLnR5cGVzICkge1xuXHRcdG1hcFsgbGlzdEVsZW1lbnQudHlwZSBdID0gbGlzdEVsZW1lbnQ7XG5cdH1cblxuXHRyZXR1cm4gbWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aW9ucyggc3RhdGUgKSB7XG5cdHJldHVybiBzdGF0ZS50eXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvcnRlZEFjdGlvbnMoIHN0YXRlICkge1xuXHQvLyBTdGVwIDE6IENyZWF0ZSBhIG1hcHBpbmcgb2YgY2F0ZWdvcnkgdHlwZSB0byBpdHMgaW5kZXhcblx0Y29uc3QgY2F0ZWdvcnlPcmRlciA9IHt9O1xuXHRzdGF0ZS5jYXRlZ29yaWVzLmZvckVhY2goICggY2F0ZWdvcnksIGluZGV4ICkgPT4ge1xuXHRcdGNhdGVnb3J5T3JkZXJbIGNhdGVnb3J5LnR5cGUgXSA9IGluZGV4O1xuXHR9ICk7XG5cblx0Ly8gU3RlcCAyOiBTb3J0IHRoZSBhY3Rpb25zIGFycmF5IHVzaW5nIHRoZSBtYXBwaW5nXG5cdHJldHVybiBzdGF0ZS50eXBlcy50b1NvcnRlZCggKCBwcmV2LCBjdXJyZW50ICkgPT4ge1xuXHRcdGNvbnN0IHByZXZPcmRlciAgICA9IChcblx0XHRcdGNhdGVnb3J5T3JkZXIuaGFzT3duUHJvcGVydHkoIHByZXYuY2F0ZWdvcnkgKVxuXHRcdFx0PyBjYXRlZ29yeU9yZGVyWyBwcmV2LmNhdGVnb3J5IF1cblx0XHRcdDogSW5maW5pdHlcblx0XHQpO1xuXHRcdGNvbnN0IGN1cnJlbnRPcmRlciA9IChcblx0XHRcdGNhdGVnb3J5T3JkZXIuaGFzT3duUHJvcGVydHkoIGN1cnJlbnQuY2F0ZWdvcnkgKVxuXHRcdFx0PyBjYXRlZ29yeU9yZGVyWyBjdXJyZW50LmNhdGVnb3J5IF1cblx0XHRcdDogSW5maW5pdHlcblx0XHQpO1xuXHRcdHJldHVybiBwcmV2T3JkZXIgLSBjdXJyZW50T3JkZXI7XG5cdH0gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoIHN0YXRlICkge1xuXHRyZXR1cm4gc3RhdGUuY2F0ZWdvcmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGlvbiggc3RhdGUsIGFjdGlvblR5cGUgKSB7XG5cdHJldHVybiBzdGF0ZS50eXBlcy5maW5kKCAoIHsgdHlwZSB9ICkgPT4gdHlwZSA9PT0gYWN0aW9uVHlwZSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaG93QWN0aW9uc0luc2VydGVyTW9kYWwoIHN0YXRlICkge1xuXHRyZXR1cm4gc3RhdGUuc2hvd0FjdGlvbnNJbnNlcnRlck1vZGFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTZXR0aW5nc01vZGFsKCBzdGF0ZSApIHtcblx0cmV0dXJuICdzZXR0aW5ncycgPT09IHN0YXRlLm1ldGE/Lm1vZGFsVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29uZGl0aW9uYWxNb2RhbCggc3RhdGUgKSB7XG5cdHJldHVybiAnY29uZGl0aW9ucycgPT09IHN0YXRlLm1ldGE/Lm1vZGFsVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRml4ZWQoIHN0YXRlLCBhY3Rpb25UeXBlICkge1xuXHRjb25zdCBhY3Rpb24gPSBnZXRBY3Rpb24oIHN0YXRlLCBhY3Rpb25UeXBlICk7XG5cblx0cmV0dXJuIGFjdGlvbj8uZml4ZWQgPz8gZmFsc2U7XG59XG5cbi8qKlxuICogVXNlIHRvIGRldGVybWluZSBob3cgd2FzIG9wZW5lZCB0aGUgYWN0aW9uIHNldHRpbmdzIG1vZGFsXG4gKlxuICogQHBhcmFtICBzdGF0ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3BlblNjZW5hcmlvKCBzdGF0ZSApIHtcblx0cmV0dXJuIHN0YXRlLm1ldGE/LnNjZW5hcmlvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0YUluZGV4KCBzdGF0ZSApIHtcblx0cmV0dXJuIHN0YXRlLm1ldGE/LmluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3JWaXNpYmlsaXR5KCBzdGF0ZSApIHtcblx0cmV0dXJuIHN0YXRlLm1ldGE/LmVycm9yc1Nob3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50QWN0aW9uKCBzdGF0ZSApIHtcblx0cmV0dXJuIHN0YXRlLmN1cnJlbnRBY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RWRpdCggc3RhdGUgKSB7XG5cdGNvbnN0IHR5cGUgPSBzdGF0ZS5jdXJyZW50QWN0aW9uPy50eXBlID8/IGZhbHNlO1xuXG5cdHJldHVybiBnZXRBY3Rpb24oIHN0YXRlLCB0eXBlICk/LmVkaXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50U2V0dGluZ3MoIHN0YXRlICkge1xuXHRjb25zdCBzZXR0aW5ncyA9IHN0YXRlLmN1cnJlbnRBY3Rpb24/LnNldHRpbmdzID8/IHt9O1xuXHRjb25zdCB0eXBlICAgICA9IHN0YXRlLmN1cnJlbnRBY3Rpb24/LnR5cGUgPz8gZmFsc2U7XG5cblx0cmV0dXJuIHNldHRpbmdzWyB0eXBlIF0gPz8ge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50TG9hZGluZyggc3RhdGUgKSB7XG5cdGNvbnN0IGFjdGlvbklkID0gc3RhdGUuY3VycmVudEFjdGlvbj8uaWQ7XG5cblx0cmV0dXJuIGdldExvYWRpbmcoIHN0YXRlLCBhY3Rpb25JZCApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTG9hZGluZyggc3RhdGUgKSB7XG5cdHJldHVybiBzdGF0ZS5sb2FkaW5nU3RhdGU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBY3Rpb25EaXNwbGF5TmFtZSggYWN0aW9uID0ge30sIGZhbGxiYWNrTGFiZWwgPSAnJyApIHtcblx0Y29uc3QgZWRpdG9yTmFtZSA9IGFjdGlvbj8uZWRpdG9yX25hbWU7XG5cblx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGVkaXRvck5hbWUgJiYgZWRpdG9yTmFtZS50cmltKCkgKSB7XG5cdFx0cmV0dXJuIGVkaXRvck5hbWUudHJpbSgpO1xuXHR9XG5cblx0cmV0dXJuIGZhbGxiYWNrTGFiZWw7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmN1ZTA5anN7Y3Vyc29yOm5vdC1hbGxvd2VkO29wYWNpdHk6MC4zO30uamV0LWZvcm0tYWN0aW9uLmRyYWdnYWJsZSAuY3VlMDlqc3tjdXJzb3I6LXdlYmtpdC1ncmFiO2N1cnNvcjpncmFiO29wYWNpdHk6MTt9XG4uZjEzdmo5dm17cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246MC4ycyBlYXNlLWluLW91dDt0b3A6MDtyaWdodDowO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDE1JSk7cGFkZGluZzowIDRweCAwIDI1cHg7fS5mMTN2ajl2bS5mMTN2ajl2bXt3aWR0aDphdXRvO30ucnRsIC5mMTN2ajl2bXtsZWZ0OjA7cGFkZGluZzowIDI1cHggMCA0cHg7fVxuLmE0amxycW97cG9zaXRpb246cmVsYXRpdmU7fS5hNGpscnFvOmhvdmVyOm5vdChbZGF0YS10aXRsZS1lZGl0aW5nPVwidHJ1ZVwiXSkgLmYxM3ZqOXZte29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvO30uYTRqbHJxb1tkYXRhLXRpdGxlLWVkaXRpbmc9XCJ0cnVlXCJdIC5mMTN2ajl2bXtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTt9XG4uYWxjOHRuY3std2Via2l0LWZsZXg6MTstbXMtZmxleDoxO2ZsZXg6MTttaW4td2lkdGg6MDt9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NvbXBvbmVudHMvQWN0aW9uSXRlbUJvZHkuanN4XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsb0NBQW9DLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7QUFDdkgsVUFBVSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsbUNBQW1DLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsd0ZBQXdGLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxtQkFBbUIsVUFBVSxDQUFDLENBQUMsZUFBZSxNQUFNLENBQUMsb0JBQW9CLENBQUM7QUFDelQsU0FBUyxpQkFBaUIsQ0FBQyxDQUFDLDBEQUEwRCxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyw4Q0FBOEMsU0FBUyxDQUFDLG1CQUFtQixDQUFDO0FBQ2pNLFNBQVMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jdWUwOWpze2N1cnNvcjpub3QtYWxsb3dlZDtvcGFjaXR5OjAuMzt9LmpldC1mb3JtLWFjdGlvbi5kcmFnZ2FibGUgLmN1ZTA5anN7Y3Vyc29yOi13ZWJraXQtZ3JhYjtjdXJzb3I6Z3JhYjtvcGFjaXR5OjE7fVxcbi5mMTN2ajl2bXtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjowLjJzIGVhc2UtaW4tb3V0O3RvcDowO3JpZ2h0OjA7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTUlKTtwYWRkaW5nOjAgNHB4IDAgMjVweDt9LmYxM3ZqOXZtLmYxM3ZqOXZte3dpZHRoOmF1dG87fS5ydGwgLmYxM3ZqOXZte2xlZnQ6MDtwYWRkaW5nOjAgMjVweCAwIDRweDt9XFxuLmE0amxycW97cG9zaXRpb246cmVsYXRpdmU7fS5hNGpscnFvOmhvdmVyOm5vdChbZGF0YS10aXRsZS1lZGl0aW5nPVxcXCJ0cnVlXFxcIl0pIC5mMTN2ajl2bXtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bzt9LmE0amxycW9bZGF0YS10aXRsZS1lZGl0aW5nPVxcXCJ0cnVlXFxcIl0gLmYxM3ZqOXZte29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO31cXG4uYWxjOHRuY3std2Via2l0LWZsZXg6MTstbXMtZmxleDoxO2ZsZXg6MTttaW4td2lkdGg6MDt9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubXllbjRqe21hcmdpbi1ib3R0b206dW5zZXQ7fVxuLmU5b29vMDIuZTlvb28wMntib3gtc2hhZG93OiNjYzE4MTggMCAwIDAgMnB4O31cbi5jMTMxemIwd3std2Via2l0LWFuaW1hdGlvbjpzaG93LWN1cnJlbnQtYzEzMXpiMHcgMnMgaW5maW5pdGU7YW5pbWF0aW9uOnNob3ctY3VycmVudC1jMTMxemIwdyAycyBpbmZpbml0ZTt9QC13ZWJraXQta2V5ZnJhbWVzIHNob3ctY3VycmVudC1jMTMxemIwd3s1MCV7Ym94LXNoYWRvdzpyZ2JhKDMsIDEwMiwgMjE0LCAwLjMpIDAgMCAwIDNweDt9fUBrZXlmcmFtZXMgc2hvdy1jdXJyZW50LWMxMzF6YjB3ezUwJXtib3gtc2hhZG93OnJnYmEoMywgMTAyLCAyMTQsIDAuMykgMCAwIDAgM3B4O319XG4uZGE1OTVwentiYWNrZ3JvdW5kLWltYWdlOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZmZmZmNzUgMCAyMHB4LCAjZDVkNWQ1N2QgMjBweCA0MHB4KTt9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NvbXBvbmVudHMvQWN0aW9uSXRlbVdyYXBwZXIuanN4XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFFBQVEsbUJBQW1CLENBQUM7QUFDNUIsaUJBQWlCLDRCQUE0QixDQUFDO0FBQzlDLFVBQVUsbURBQW1ELENBQUMsMkNBQTJDLENBQUMsQ0FBQyx5Q0FBeUMsSUFBSSwyQ0FBMkMsQ0FBQyxDQUFDLENBQUMsaUNBQWlDLElBQUksMkNBQTJDLENBQUMsQ0FBQztBQUN4UixTQUFTLHlGQUF5RixDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5teWVuNGp7bWFyZ2luLWJvdHRvbTp1bnNldDt9XFxuLmU5b29vMDIuZTlvb28wMntib3gtc2hhZG93OiNjYzE4MTggMCAwIDAgMnB4O31cXG4uYzEzMXpiMHd7LXdlYmtpdC1hbmltYXRpb246c2hvdy1jdXJyZW50LWMxMzF6YjB3IDJzIGluZmluaXRlO2FuaW1hdGlvbjpzaG93LWN1cnJlbnQtYzEzMXpiMHcgMnMgaW5maW5pdGU7fUAtd2Via2l0LWtleWZyYW1lcyBzaG93LWN1cnJlbnQtYzEzMXpiMHd7NTAle2JveC1zaGFkb3c6cmdiYSgzLCAxMDIsIDIxNCwgMC4zKSAwIDAgMCAzcHg7fX1Aa2V5ZnJhbWVzIHNob3ctY3VycmVudC1jMTMxemIwd3s1MCV7Ym94LXNoYWRvdzpyZ2JhKDMsIDEwMiwgMjE0LCAwLjMpIDAgMCAwIDNweDt9fVxcbi5kYTU5NXB6e2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmZmY3NSAwIDIwcHgsICNkNWQ1ZDU3ZCAyMHB4IDQwcHgpO31cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hMTRwejJoanstd2Via2l0LWZsZXg6MTstbXMtZmxleDoxO2ZsZXg6MTttaW4td2lkdGg6MDt9XG4uYTF5ZWg2Z3Z7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO3BhZGRpbmc6MDtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3RleHQtYWxpZ246bGVmdDtjdXJzb3I6dGV4dDt9XG4uYW43dHB5d3tkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjEuNDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt9XG4uYTF3bDB1a2t7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjMwcHg7cGFkZGluZzowIDhweDtib3JkZXI6MXB4IHNvbGlkICM5NDk0OTQ7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MS40O31cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY29tcG9uZW50cy9BY3Rpb25UaXRsZS5qc3hcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVSxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdkQsVUFBVSxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztBQUM1RyxTQUFTLGFBQWEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztBQUM3RixVQUFVLFVBQVUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmExNHB6Mmhqey13ZWJraXQtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxO21pbi13aWR0aDowO31cXG4uYTF5ZWg2Z3Z7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO3BhZGRpbmc6MDtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3RleHQtYWxpZ246bGVmdDtjdXJzb3I6dGV4dDt9XFxuLmFuN3RweXd7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxLjQ7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7fVxcbi5hMXdsMHVra3t3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MzBweDtwYWRkaW5nOjAgOHB4O2JvcmRlcjoxcHggc29saWQgIzk0OTQ5NDtib3JkZXItcmFkaXVzOjJweDtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxLjQ7fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmFqb3BsbGN7bWFyZ2luOnVuc2V0O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxNXB4O2NvbG9yOiMxZDIzMjc7fVxuLmMxajNpOWw2e2ZpbGw6Y3VycmVudENvbG9yO31cbi5vZG1hNzE0e29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTt0b3A6MDtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7cGFkZGluZzoxZW07dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6IzFkMjMyNztmb250LXdlaWdodDo2MDA7Y3Vyc29yOmF1dG87fVxuLmZxdzZqemp7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzoxLjVlbTtib3JkZXItcmFkaXVzOjJweDtib3JkZXI6MXB4IHNvbGlkICNkZGQ7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6Izg0ODQ4NTt9LmZxdzZqemosLmZxdzZqemogLmFqb3BsbGMsLmZxdzZqemogLm9kbWE3MTR7LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjowLjJzIGVhc2UtaW4tb3V0O30uZnF3Nmp6ajpob3Zlcntib3gtc2hhZG93OnJnYmEoMCwgMCwgMCwgMC4xNikgMCAxcHggNHB4O30uZnF3Nmp6ajpob3ZlciwuZnF3Nmp6ajpob3ZlciAuYWpvcGxsY3tjb2xvcjp2YXIoLS13cC1jb21wb25lbnRzLWNvbG9yLWFjY2VudCwgdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IsICMzODU4ZTkpKTt9LmZxdzZqemouaXMtZGlzYWJsZWQsLmZxdzZqemouaXMtZGlzYWJsZWQgLmFqb3BsbGN7Y29sb3I6I2M3YzdjNzt9LmZxdzZqemouaXMtZGlzYWJsZWQ6aG92ZXI+Kjpub3QoLm9kbWE3MTQpey13ZWJraXQtZmlsdGVyOmJsdXIoMnB4KTtmaWx0ZXI6Ymx1cigycHgpO30uZnF3Nmp6ai5pcy1kaXNhYmxlZDpob3ZlciAub2RtYTcxNHtvcGFjaXR5OjE7fVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL0FkZEFjdGlvbi9BY3Rpb25HcmlkSXRlbS5qc3hcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUyxZQUFZLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztBQUNyRSxVQUFVLGlCQUFpQixDQUFDO0FBQzVCLFNBQVMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMseUNBQXlDLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0FBQ3JNLFNBQVMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyw2Q0FBNkMsbUNBQW1DLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxlQUFlLHdDQUF3QyxDQUFDLENBQUMsdUNBQXVDLDZFQUE2RSxDQUFDLENBQUMsbURBQW1ELGFBQWEsQ0FBQyxDQUFDLDJDQUEyQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLG9DQUFvQyxTQUFTLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFqb3BsbGN7bWFyZ2luOnVuc2V0O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxNXB4O2NvbG9yOiMxZDIzMjc7fVxcbi5jMWozaTlsNntmaWxsOmN1cnJlbnRDb2xvcjt9XFxuLm9kbWE3MTR7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO3RvcDowO2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtwYWRkaW5nOjFlbTt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojMWQyMzI3O2ZvbnQtd2VpZ2h0OjYwMDtjdXJzb3I6YXV0bzt9XFxuLmZxdzZqemp7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzoxLjVlbTtib3JkZXItcmFkaXVzOjJweDtib3JkZXI6MXB4IHNvbGlkICNkZGQ7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6Izg0ODQ4NTt9LmZxdzZqemosLmZxdzZqemogLmFqb3BsbGMsLmZxdzZqemogLm9kbWE3MTR7LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjowLjJzIGVhc2UtaW4tb3V0O30uZnF3Nmp6ajpob3Zlcntib3gtc2hhZG93OnJnYmEoMCwgMCwgMCwgMC4xNikgMCAxcHggNHB4O30uZnF3Nmp6ajpob3ZlciwuZnF3Nmp6ajpob3ZlciAuYWpvcGxsY3tjb2xvcjp2YXIoLS13cC1jb21wb25lbnRzLWNvbG9yLWFjY2VudCwgdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IsICMzODU4ZTkpKTt9LmZxdzZqemouaXMtZGlzYWJsZWQsLmZxdzZqemouaXMtZGlzYWJsZWQgLmFqb3BsbGN7Y29sb3I6I2M3YzdjNzt9LmZxdzZqemouaXMtZGlzYWJsZWQ6aG92ZXI+Kjpub3QoLm9kbWE3MTQpey13ZWJraXQtZmlsdGVyOmJsdXIoMnB4KTtmaWx0ZXI6Ymx1cigycHgpO30uZnF3Nmp6ai5pcy1kaXNhYmxlZDpob3ZlciAub2RtYTcxNHtvcGFjaXR5OjE7fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNmZmZxaGt7dGV4dC1hbGlnbjpjZW50ZXI7fVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL0FkZEFjdGlvbi9BZGRBY3Rpb25Nb2RhbC5qc3hcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUyxpQkFBaUIsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2ZmZnFoa3t0ZXh0LWFsaWduOmNlbnRlcjt9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2F1dXN3eXtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS13cC1jb21wb25lbnRzLWNvbG9yLWFjY2VudCwgdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IsICMzODU4ZTkpKTttYXJnaW4tdG9wOjE2cHg7bWFyZ2luLWxlZnQ6LTE2cHg7bWFyZ2luLWJvdHRvbTotOHB4O3BhZGRpbmctdG9wOjhweDt9LnNhdXVzd3kuc2F1dXN3eXt3aWR0aDpjYWxjKDEwMCUgKyAzMnB4KTt9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NvbXBvbmVudHMvQWxsUHJvQWN0aW9uc0xpbmsuanNcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUyw0RkFBNEYsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUMsaUJBQWlCLHVCQUF1QixDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zYXV1c3d5e2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLXdwLWNvbXBvbmVudHMtY29sb3ItYWNjZW50LCB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvciwgIzM4NThlOSkpO21hcmdpbi10b3A6MTZweDttYXJnaW4tbGVmdDotMTZweDttYXJnaW4tYm90dG9tOi04cHg7cGFkZGluZy10b3A6OHB4O30uc2F1dXN3eS5zYXV1c3d5e3dpZHRoOmNhbGMoMTAwJSArIDMycHgpO31cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zMWFuaTVlbzpub3QoW2RhdGEtY29uZGl0aW9ucy1jb3VudD1cIjBcIl0pOjphZnRlcntjb250ZW50OmF0dHIoZGF0YS1jb25kaXRpb25zLWNvdW50KTtwb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6MS4yZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvcik7Y29sb3I6I2ZmZjtwYWRkaW5nOjJweCA0cHg7Ym9yZGVyLXJhZGl1czo2cHg7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtmb250LWZhbWlseTptb25vc3BhY2U7bGluZS1oZWlnaHQ6bm9ybWFsO31cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vY29tcG9uZW50cy9FZGl0QWN0aW9uQ29uZGl0aW9uc0J1dHRvbi5qc3hcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0RBQWtELG1DQUFtQyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyw0Q0FBNEMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQywrQkFBK0IsQ0FBQyw4QkFBOEIsQ0FBQywwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuczFhbmk1ZW86bm90KFtkYXRhLWNvbmRpdGlvbnMtY291bnQ9XFxcIjBcXFwiXSk6OmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLWNvbmRpdGlvbnMtY291bnQpO3Bvc2l0aW9uOmFic29sdXRlO2ZvbnQtc2l6ZToxLjJlbTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yKTtjb2xvcjojZmZmO3BhZGRpbmc6MnB4IDRweDtib3JkZXItcmFkaXVzOjZweDt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO2ZvbnQtZmFtaWx5Om1vbm9zcGFjZTtsaW5lLWhlaWdodDpub3JtYWw7fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmVrYmRtMnN7cGFkZGluZzowIDRweDtib3JkZXItcmFkaXVzOjVweDtjb2xvcjojNWM1YzVjO2ZvbnQtc2l6ZTowLjllbTtiYWNrZ3JvdW5kLWNvbG9yOiNmM2Y0ZjU7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOmF1dG87Ym9yZGVyOjA7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO30uZWtiZG0yczphZnRlcntjb250ZW50OicgWCc7Zm9udC13ZWlnaHQ6Ym9sZDt9LmVrYmRtMnM6Zm9jdXN7b3V0bGluZToxcHggc29saWQgIzVjNWM1YztiYWNrZ3JvdW5kLWNvbG9yOiNlN2U4ZTk7fVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL0V2ZW50c0xpc3QuanN4XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQyxlQUFlLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGVBQWUseUJBQXlCLENBQUMsd0JBQXdCLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmVrYmRtMnN7cGFkZGluZzowIDRweDtib3JkZXItcmFkaXVzOjVweDtjb2xvcjojNWM1YzVjO2ZvbnQtc2l6ZTowLjllbTtiYWNrZ3JvdW5kLWNvbG9yOiNmM2Y0ZjU7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOmF1dG87Ym9yZGVyOjA7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO30uZWtiZG0yczphZnRlcntjb250ZW50OicgWCc7Zm9udC13ZWlnaHQ6Ym9sZDt9LmVrYmRtMnM6Zm9jdXN7b3V0bGluZToxcHggc29saWQgIzVjNWM1YztiYWNrZ3JvdW5kLWNvbG9yOiNlN2U4ZTk7fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnM1YjVhM3B7cGFkZGluZzoxZW07fVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL0ZpZWxkc01hcEZpZWxkLmpzeFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTLFdBQVcsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuczViNWEzcHtwYWRkaW5nOjFlbTt9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuczFnb3k4Nmp7cGFkZGluZzoxZW07fVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL1RhYmxlTGlzdC5qc3hcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVSxXQUFXLENBQUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnMxZ295ODZqe3BhZGRpbmc6MWVtO31cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9BY3Rpb25JdGVtQm9keS5qc3hcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0FjdGlvbkl0ZW1Cb2R5LmpzeFwiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9BY3Rpb25JdGVtV3JhcHBlci5qc3hcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0FjdGlvbkl0ZW1XcmFwcGVyLmpzeFwiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9BY3Rpb25UaXRsZS5qc3hcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0FjdGlvblRpdGxlLmpzeFwiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9BY3Rpb25HcmlkSXRlbS5qc3hcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0FjdGlvbkdyaWRJdGVtLmpzeFwiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9BZGRBY3Rpb25Nb2RhbC5qc3hcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0FkZEFjdGlvbk1vZGFsLmpzeFwiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9BbGxQcm9BY3Rpb25zTGluay5qc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vQWxsUHJvQWN0aW9uc0xpbmsuanNcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vRWRpdEFjdGlvbkNvbmRpdGlvbnNCdXR0b24uanN4XCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9FZGl0QWN0aW9uQ29uZGl0aW9uc0J1dHRvbi5qc3hcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vRXZlbnRzTGlzdC5qc3hcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0V2ZW50c0xpc3QuanN4XCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0ZpZWxkc01hcEZpZWxkLmpzeFwiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vRmllbGRzTWFwRmllbGQuanN4XCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL1RhYmxlTGlzdC5qc3hcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL1RhYmxlTGlzdC5qc3hcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYXBpRmV0Y2hcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJwcmltaXRpdmVzXCJdOyIsIi8vIHNyYy9jc3MudHNcbnZhciBpZHggPSAwO1xudmFyIGNzcyA9ICgpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIHJldHVybiBgbW9ja2VkLWNzcy0ke2lkeCsrfWA7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdVc2luZyB0aGUgXCJjc3NcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LidcbiAgKTtcbn07XG52YXIgY3NzX2RlZmF1bHQgPSBjc3M7XG5cbi8vIHNyYy9jeC50c1xudmFyIGN4ID0gZnVuY3Rpb24gY3gyKCkge1xuICBjb25zdCBwcmVzZW50Q2xhc3NOYW1lcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBhdG9taWNDbGFzc2VzID0ge307XG4gIGNvbnN0IG5vbkF0b21pY0NsYXNzZXMgPSBbXTtcbiAgcHJlc2VudENsYXNzTmFtZXMuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgY29uc3QgaW5kaXZpZHVhbENsYXNzTmFtZXMgPSBhcmcgPyBhcmcuc3BsaXQoXCIgXCIpIDogW107XG4gICAgaW5kaXZpZHVhbENsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJhdG1fXCIpKSB7XG4gICAgICAgIGNvbnN0IFssIGtleUhhc2hdID0gY2xhc3NOYW1lLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSA9IGNsYXNzTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbkF0b21pY0NsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAoY29uc3Qga2V5SGFzaCBpbiBhdG9taWNDbGFzc2VzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhdG9taWNDbGFzc2VzLCBrZXlIYXNoKSkge1xuICAgICAgcmVzdWx0LnB1c2goYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKC4uLm5vbkF0b21pY0NsYXNzZXMpO1xuICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpO1xufTtcbnZhciBjeF9kZWZhdWx0ID0gY3g7XG5leHBvcnQge1xuICBjc3NfZGVmYXVsdCBhcyBjc3MsXG4gIGN4X2RlZmF1bHQgYXMgY3hcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiLy8gc3JjL3N0eWxlZC50c1xuaW1wb3J0IHZhbGlkQXR0ciBmcm9tIFwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3ggfSBmcm9tIFwiQGxpbmFyaWEvY29yZVwiO1xudmFyIGlzQ2FwaXRhbCA9IChjaCkgPT4gY2gudG9VcHBlckNhc2UoKSA9PT0gY2g7XG52YXIgZmlsdGVyS2V5ID0gKGtleXMpID0+IChrZXkpID0+IGtleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbnZhciBvbWl0ID0gKG9iaiwga2V5cykgPT4ge1xuICBjb25zdCByZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoZmlsdGVyS2V5KGtleXMpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICByZXNba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn07XG5mdW5jdGlvbiBmaWx0ZXJQcm9wcyhhc0lzLCBwcm9wcywgb21pdEtleXMpIHtcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IG9taXQocHJvcHMsIG9taXRLZXlzKTtcbiAgaWYgKCFhc0lzKSB7XG4gICAgY29uc3QgaW50ZXJvcFZhbGlkQXR0ciA9IHR5cGVvZiB2YWxpZEF0dHIgPT09IFwiZnVuY3Rpb25cIiA/IHsgZGVmYXVsdDogdmFsaWRBdHRyIH0gOiB2YWxpZEF0dHI7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVyZWRQcm9wcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWludGVyb3BWYWxpZEF0dHIuZGVmYXVsdChrZXkpKSB7XG4gICAgICAgIGRlbGV0ZSBmaWx0ZXJlZFByb3BzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkUHJvcHM7XG59XG52YXIgd2FybklmSW52YWxpZCA9ICh2YWx1ZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlLG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBBbiBpbnRlcnBvbGF0aW9uIGV2YWx1YXRlZCB0byAnJHtzdHJpbmdpZmllZH0nIGluIHRoZSBjb21wb25lbnQgJyR7Y29tcG9uZW50TmFtZX0nLCB3aGljaCBpcyBwcm9iYWJseSBhIG1pc3Rha2UuIFlvdSBzaG91bGQgZXhwbGljaXRseSBjYXN0IG9yIHRyYW5zZm9ybSB0aGUgdmFsdWUgdG8gYSBzdHJpbmcuYFxuICAgICk7XG4gIH1cbn07XG52YXIgaWR4ID0gMDtcbmZ1bmN0aW9uIHN0eWxlZCh0YWcpIHtcbiAgbGV0IG1vY2tlZENsYXNzID0gXCJcIjtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIG1vY2tlZENsYXNzICs9IGBtb2NrZWQtc3R5bGVkLSR7aWR4Kyt9YDtcbiAgICBpZiAodGFnICYmIHRhZy5fX3d5d19tZXRhICYmIHRhZy5fX3d5d19tZXRhLmNsYXNzTmFtZSkge1xuICAgICAgbW9ja2VkQ2xhc3MgKz0gYCAke3RhZy5fX3d5d19tZXRhLmNsYXNzTmFtZX1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKG9wdGlvbnMpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInRlc3RcIikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdVc2luZyB0aGUgXCJzdHlsZWRcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NhbGxzdGFjay9saW5hcmlhI3NldHVwJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZW5kZXIgPSAocHJvcHMsIHJlZikgPT4ge1xuICAgICAgY29uc3QgeyBhczogY29tcG9uZW50ID0gdGFnLCBjbGFzczogY2xhc3NOYW1lID0gbW9ja2VkQ2xhc3MgfSA9IHByb3BzO1xuICAgICAgY29uc3Qgc2hvdWxkS2VlcFByb3BzID0gb3B0aW9ucy5wcm9wc0FzSXMgPT09IHZvaWQgMCA/ICEodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJzdHJpbmdcIiAmJiBjb21wb25lbnQuaW5kZXhPZihcIi1cIikgPT09IC0xICYmICFpc0NhcGl0YWwoY29tcG9uZW50WzBdKSkgOiBvcHRpb25zLnByb3BzQXNJcztcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvcHMgPSBmaWx0ZXJQcm9wcyhzaG91bGRLZWVwUHJvcHMsIHByb3BzLCBbXG4gICAgICAgIFwiYXNcIixcbiAgICAgICAgXCJjbGFzc1wiXG4gICAgICBdKTtcbiAgICAgIGZpbHRlcmVkUHJvcHMucmVmID0gcmVmO1xuICAgICAgZmlsdGVyZWRQcm9wcy5jbGFzc05hbWUgPSBvcHRpb25zLmF0b21pYyA/IGN4KG9wdGlvbnMuY2xhc3MsIGZpbHRlcmVkUHJvcHMuY2xhc3NOYW1lIHx8IGNsYXNzTmFtZSkgOiBjeChmaWx0ZXJlZFByb3BzLmNsYXNzTmFtZSB8fCBjbGFzc05hbWUsIG9wdGlvbnMuY2xhc3MpO1xuICAgICAgY29uc3QgeyB2YXJzIH0gPSBvcHRpb25zO1xuICAgICAgaWYgKHZhcnMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHZhcnMpIHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHZhcnNbbmFtZV07XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFyaWFibGVbMF07XG4gICAgICAgICAgY29uc3QgdW5pdCA9IHZhcmlhYmxlWzFdIHx8IFwiXCI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgcmVzdWx0ID09PSBcImZ1bmN0aW9uXCIgPyByZXN1bHQocHJvcHMpIDogcmVzdWx0O1xuICAgICAgICAgIHdhcm5JZkludmFsaWQodmFsdWUsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgICAgc3R5bGVbYC0tJHtuYW1lfWBdID0gYCR7dmFsdWV9JHt1bml0fWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3duU3R5bGUgPSBmaWx0ZXJlZFByb3BzLnN0eWxlIHx8IHt9O1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3duU3R5bGUpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHN0eWxlW2tleV0gPSBvd25TdHlsZVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbHRlcmVkUHJvcHMuc3R5bGUgPSBzdHlsZTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWcuX193eXdfbWV0YSAmJiB0YWcgIT09IGNvbXBvbmVudCkge1xuICAgICAgICBmaWx0ZXJlZFByb3BzLmFzID0gY29tcG9uZW50O1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh0YWcsIGZpbHRlcmVkUHJvcHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBmaWx0ZXJlZFByb3BzKTtcbiAgICB9O1xuICAgIGNvbnN0IFJlc3VsdCA9IGZvcndhcmRSZWYgPyBmb3J3YXJkUmVmKHJlbmRlcikgOiAoXG4gICAgICAvLyBSZWFjdC5mb3J3YXJkUmVmIHdvbid0IGF2YWlsYWJsZSBvbiBvbGRlciBSZWFjdCB2ZXJzaW9ucyBhbmQgaW4gUHJlYWN0XG4gICAgICAvLyBGYWxsYmFjayB0byBhIGlubmVyUmVmIHByb3AgaW4gdGhhdCBjYXNlXG4gICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdCA9IG9taXQocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcihyZXN0LCBwcm9wcy5pbm5lclJlZik7XG4gICAgICB9XG4gICAgKTtcbiAgICBSZXN1bHQuZGlzcGxheU5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgUmVzdWx0Ll9fd3l3X21ldGEgPSB7XG4gICAgICBjbGFzc05hbWU6IG9wdGlvbnMuY2xhc3MgfHwgbW9ja2VkQ2xhc3MsXG4gICAgICBleHRlbmRzOiB0YWdcbiAgICB9O1xuICAgIHJldHVybiBSZXN1bHQ7XG4gIH07XG59XG52YXIgc3R5bGVkX2RlZmF1bHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgUHJveHkoc3R5bGVkLCB7XG4gIGdldChvLCBwcm9wKSB7XG4gICAgcmV0dXJuIG8ocHJvcCk7XG4gIH1cbn0pIDogc3R5bGVkO1xuZXhwb3J0IHtcbiAgc3R5bGVkX2RlZmF1bHQgYXMgc3R5bGVkXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==