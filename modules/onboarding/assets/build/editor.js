/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!*****************************************************************************************!*\
  !*** ../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


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

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/copy-small.js":
/*!************************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/copy-small.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

const copySmall = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.625 5.5h9.75c.069 0 .125.056.125.125v9.75a.125.125 0 0 1-.125.125h-9.75a.125.125 0 0 1-.125-.125v-9.75c0-.069.056-.125.125-.125ZM4 5.625C4 4.728 4.728 4 5.625 4h9.75C16.273 4 17 4.728 17 5.625v9.75c0 .898-.727 1.625-1.625 1.625h-9.75A1.625 1.625 0 0 1 4 15.375v-9.75Zm14.5 11.656v-9H20v9C20 18.8 18.77 20 17.251 20H6.25v-1.5h11.001c.69 0 1.249-.528 1.249-1.219Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySmall);
//# sourceMappingURL=copy-small.js.map

/***/ }),

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/edit.js":
/*!******************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/external.js":
/*!**********************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/external.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

const external = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (external);
//# sourceMappingURL=external.js.map

/***/ }),

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/next.js":
/*!******************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/next.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

const next = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next);
//# sourceMappingURL=next.js.map

/***/ }),

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/pencil.js":
/*!********************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/pencil.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/plus.js":
/*!******************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./editor/previewButton/PreviewButton.jsx":
/*!************************************************!*\
  !*** ./editor/previewButton/PreviewButton.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);





function PreviewButton() {
  const [previewPage, setPreviewPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const isSavingForm = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select('core/editor').isSavingPost();
  }, []);
  const wasSaving = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!previewPage) {
      return;
    }
    if (!wasSaving.current && isSavingForm) {
      wasSaving.current = true;
    }
    if (wasSaving.current && !isSavingForm) {
      // The post has finished saving
      previewPage.location.reload();
      wasSaving.current = false; // Reset the flag
    }
  }, [isSavingForm]);
  const openPreviewPage = () => {
    if (previewPage && !previewPage?.closed) {
      previewPage.focus();
      return;
    }
    setPreviewPage(window.open(JFBOnboardingConfig.previewURL));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    onClick: openPreviewPage
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewButton);

/***/ }),

/***/ "./editor/previewButton/appendButton.js":
/*!**********************************************!*\
  !*** ./editor/previewButton/appendButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PreviewButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewButton */ "./editor/previewButton/PreviewButton.jsx");



const buttonDiv = document.createElement('div');
buttonDiv.classList.add('jfb-preview-wrapper');

// Render our button.
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(buttonDiv).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PreviewButton__WEBPACK_IMPORTED_MODULE_2__["default"], null));
const appendButton = function (unsubscribeCallback) {
  const header = document.querySelector('.edit-post-header__settings');
  if (!header) {
    return null;
  }
  unsubscribeCallback();
  header.insertBefore(buttonDiv, header.querySelector('.editor-post-publish-button'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendButton);

/***/ }),

/***/ "./editor/previewButton/index.js":
/*!***************************************!*\
  !*** ./editor/previewButton/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _appendButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appendButton */ "./editor/previewButton/appendButton.js");



_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  const unsubscribe = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.subscribe)(() => (0,_appendButton__WEBPACK_IMPORTED_MODULE_2__["default"])(unsubscribe));
});

/***/ }),

/***/ "./editor/useFormButton/FirstPart.jsx":
/*!********************************************!*\
  !*** ./editor/useFormButton/FirstPart.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




const {
  BuilderHelpSlotFill
} = JetFBComponents;
function FirstPart() {
  const builders = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('jet-forms/use-form').getBuilders(), []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1. How you want to use the form?', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please select the method how you planning to use the form - as element of page builder, as block or a plain shortcode', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: "flex-start",
    wrap: true
  }, builders.map(({
    name,
    view: BuilderView
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BuilderView, {
    key: name,
    name: name
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BuilderHelpSlotFill.Slot, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstPart);

/***/ }),

/***/ "./editor/useFormButton/SecondPart/SecondPart.jsx":
/*!********************************************************!*\
  !*** ./editor/useFormButton/SecondPart/SecondPart.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/edit.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _VideoInstructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VideoInstructions */ "./editor/useFormButton/SecondPart/VideoInstructions.jsx");
/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useSettings */ "./editor/useFormButton/hooks/useSettings.js");
/* harmony import */ var _SelectPageControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectPageControl */ "./editor/useFormButton/SecondPart/SelectPageControl.jsx");







function SecondPart() {
  const [settings, updateSettings] = (0,_hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2. Where you want to use the form?', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Where you want to place the form', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    direction: "column",
    gap: 4
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: "flex-start",
    wrap: true,
    gap: 4
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => updateSettings({
      pageType: 'select'
    }),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    variant: 'select' === settings.pageType ? 'primary' : 'secondary'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select page to add the form', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      margin: 'unset'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('or', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => updateSettings({
      pageType: 'new'
    }),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    variant: 'new' === settings.pageType ? 'primary' : 'secondary'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Create new page', 'jet-form-builder'))), 'select' === settings.pageType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SelectPageControl__WEBPACK_IMPORTED_MODULE_5__["default"], null), 'new' === settings.pageType && null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_VideoInstructions__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondPart);

/***/ }),

/***/ "./editor/useFormButton/SecondPart/SelectPageControl.jsx":
/*!***************************************************************!*\
  !*** ./editor/useFormButton/SecondPart/SelectPageControl.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useSettings */ "./editor/useFormButton/hooks/useSettings.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");







const {
  Label
} = JetFBComponents;
const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex;
const WrapperComboboxWithButton = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_6__.styled)(_exp())({
  name: "WrapperComboboxWithButton",
  class: "w2n4eg6",
  propsAsIs: true
});
function SelectPageControl() {
  var _pages$records$map;
  const [settings, updateSettings] = (0,_hooks_useSettings__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const pages = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityRecords)('postType', 'page', {
    per_page: 20,
    search
  });
  const pagesList = (_pages$records$map = pages.records?.map?.(page => ({
    value: page.id,
    label: page.title.raw
  }))) !== null && _pages$records$map !== void 0 ? _pages$records$map : [];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Label, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select a page', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrapperComboboxWithButton, {
    align: "flex-start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ComboboxControl, {
    options: pagesList,
    value: settings.pageId,
    onChange: pageId => updateSettings({
      pageId
    }),
    onFilterValueChange: setSearch,
    __nextHasNoMarginBottom: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: () => {},
    isBusy: false,
    disabled: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Use the form', 'jet-form-builder-pdf'))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectPageControl);
__webpack_require__(/*! ./SelectPageControl.wyw-in-js.css!=!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./SelectPageControl.jsx */ "./editor/useFormButton/SecondPart/SelectPageControl.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/SelectPageControl.jsx");

/***/ }),

/***/ "./editor/useFormButton/SecondPart/VideoInstructions.jsx":
/*!***************************************************************!*\
  !*** ./editor/useFormButton/SecondPart/VideoInstructions.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);






const VideoIframe = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_5__.styled)('iframe')({
  name: "VideoIframe",
  class: "v1ja33m1",
  propsAsIs: false
});
function VideoInstructions() {
  const currentBuilder = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select('jet-forms/use-form').getCurrentBuilder(), []);
  const [showVideo, setShowVideo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "link",
    onClick: () => setShowVideo(prev => !prev)
  }, showVideo ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hide video instructions', 'jet-form-builder') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show video instructions', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(VideoIframe, {
    src: currentBuilder.embed.src,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerPolicy: "strict-origin-when-cross-origin",
    allowFullScreen: true,
    style: {
      display: showVideo ? 'block' : 'none'
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoInstructions);
__webpack_require__(/*! ./VideoInstructions.wyw-in-js.css!=!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./VideoInstructions.jsx */ "./editor/useFormButton/SecondPart/VideoInstructions.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/VideoInstructions.jsx");

/***/ }),

/***/ "./editor/useFormButton/UseFormButton.jsx":
/*!************************************************!*\
  !*** ./editor/useFormButton/UseFormButton.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/next.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FirstPart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FirstPart */ "./editor/useFormButton/FirstPart.jsx");
/* harmony import */ var _SecondPart_SecondPart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SecondPart/SecondPart */ "./editor/useFormButton/SecondPart/SecondPart.jsx");








function UseFormButton() {
  const {
    closeGeneralSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/edit-post');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginSidebar, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    name: "sidebar",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use the form', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use the form', 'jet-form-builder'),
    onRequestClose: closeGeneralSidebar
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FirstPart__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SecondPart_SecondPart__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UseFormButton);

/***/ }),

/***/ "./editor/useFormButton/blockBuilder/BlockBuilder.jsx":
/*!************************************************************!*\
  !*** ./editor/useFormButton/blockBuilder/BlockBuilder.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/copy-small.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useSettings */ "./editor/useFormButton/hooks/useSettings.js");





const {
  BuilderHelpSlotFill
} = JetFBComponents;
function BlockBuilder({
  name
}) {
  const [settings, updateSettings] = (0,_hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const isActive = name === settings.builder;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => updateSettings({
      builder: name
    }),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    variant: isActive ? 'primary' : 'secondary'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block for Block Editor', 'jet-form-builder')), isActive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BuilderHelpSlotFill.Fill, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The form will be automatically added to the end of the selected page', 'jet-form-builder'))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockBuilder);

/***/ }),

/***/ "./editor/useFormButton/blockBuilder/index.js":
/*!****************************************************!*\
  !*** ./editor/useFormButton/blockBuilder/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlockBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockBuilder */ "./editor/useFormButton/blockBuilder/BlockBuilder.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'blocks',
  view: _BlockBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./editor/useFormButton/hooks/useSettings.js":
/*!***************************************************!*\
  !*** ./editor/useFormButton/hooks/useSettings.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @returns {[Object, Function]}
 */
function useSettings() {
  const {
    updateSettings
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('jet-forms/use-form');
  const settings = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select('jet-forms/use-form').getSettings(), []);
  return [settings, updateSettings];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSettings);

/***/ }),

/***/ "./editor/useFormButton/index.js":
/*!***************************************!*\
  !*** ./editor/useFormButton/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UseFormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UseFormButton */ "./editor/useFormButton/UseFormButton.jsx");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.pcss */ "./editor/useFormButton/index.pcss");



(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('jfb-use-form', {
  render: _UseFormButton__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./editor/welcomeBlock/edit.js":
/*!*************************************!*\
  !*** ./editor/welcomeBlock/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview */ "./editor/welcomeBlock/preview.js");


const {
  __
} = wp.i18n;
const {
  cloneElement,
  Children
} = wp.element;
const {
  Placeholder,
  Flex,
  ExternalLink,
  Tooltip
} = wp.components;
const {
  useBlockProps
} = wp.blockEditor;
const {
  useSelect,
  useDispatch
} = wp.data;
const {
  PatternInserterButton,
  ToggleControl
} = JetFBComponents;
const HelpIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false",
  style: {
    color: 'rgb(117, 117, 117)'
  }
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"
}));
function WelcomeBlockEdit({
  attributes
}) {
  const blockProps = useBlockProps();
  const elements = useSelect(select => select('jet-forms/patterns').getTypes().map(({
    view: View,
    ...pattern
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(View, {
    pattern: pattern
  })), []);
  const saveRecord = useSelect(select => select('jet-forms/patterns').getSetting('saveRecord'));
  const {
    updateSettings
  } = useDispatch('jet-forms/patterns');
  if (attributes.isPreview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, _preview__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
    icon: 'admin-tools',
    label: __('Select form pattern', 'jet-form-builder'),
    instructions: __('You can select one of predefined layout, or build custom', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "block-editor-block-variation-picker__variations jet-fb",
    role: "list",
    "aria-label": __('Form patterns', 'jet-form-builder')
  }, Children.map(elements, cloneElement)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, {
    className: "block-editor-block-variation-picker__skip",
    justify: "space-between"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, {
    justify: "flex-start",
    style: {
      width: 'auto'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PatternInserterButton, {
    patternName: 'default',
    variant: "secondary",
    style: {
      margin: 'unset'
    }
  }, __('Start from scratch', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExternalLink, {
    href: "https://jetformbuilder.com/features/creating-a-form/"
  }, __('Learn more about creating forms', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    checked: saveRecord,
    onChange: saveRecord => updateSettings({
      saveRecord
    }),
    flexLabelProps: {
      align: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, null, __('Save form records', 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
    text: __(`Adds "Save Form Record" action to store 
all form submissions into database`, 'jet-form-builder'),
    delay: 200
  }, HelpIcon))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomeBlockEdit);

/***/ }),

/***/ "./editor/welcomeBlock/index.js":
/*!**************************************!*\
  !*** ./editor/welcomeBlock/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/welcomeBlock/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./editor/welcomeBlock/block.json");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.pcss */ "./editor/welcomeBlock/index.pcss");




const {
  name,
  icon
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const {
  __
} = wp.i18n;
_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.isPreview = {
  'type': 'boolean',
  'default': false
};
const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  description: __(`Use the Welcome block to quickly fetch all pre-made Form Patterns, start building from scratch, generate via AI, save form records, etc.`, 'jet-form-builder'),
  example: {
    attributes: {
      isPreview: true
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
};


/***/ }),

/***/ "./editor/welcomeBlock/preview.js":
/*!****************************************!*\
  !*** ./editor/welcomeBlock/preview.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const preview = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "298",
  height: "144",
  viewBox: "0 0 298 144",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "298",
  height: "144",
  fill: "#E2E8F0"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "12",
  y: "12",
  width: "86",
  height: "120",
  rx: "4",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "25",
  y: "25",
  width: "60",
  height: "60",
  rx: "4",
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M47.8 41C47.3582 41 47 41.4477 47 42C47 42.5523 47.3582 43 47.8 43H62.2C62.6418 43 63 42.5523 63 42C63 41.4477 62.6418 41 62.2 41H47.8Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M43 50C43 48.3431 44.3431 47 46 47H64C65.6569 47 67 48.3431 67 50C67 51.6569 65.6569 53 64 53H46C44.3431 53 43 51.6569 43 50ZM46 49C45.4477 49 45 49.4477 45 50C45 50.5523 45.4477 51 46 51H64C64.5523 51 65 50.5523 65 50C65 49.4477 64.5523 49 64 49H46Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M46 55C44.3431 55 43 56.3431 43 58C43 59.6569 44.3431 61 46 61H64C65.6569 61 67 59.6569 67 58C67 56.3431 65.6569 55 64 55H46ZM45 58C45 57.4477 45.4477 57 46 57H64C64.5523 57 65 57.4477 65 58C65 58.5523 64.5523 59 64 59H46C45.4477 59 45 58.5523 45 58Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M49 66C49 64.3431 50.3431 63 52 63H58C59.6569 63 61 64.3431 61 66C61 67.6569 59.6569 69 58 69H52C50.3431 69 49 67.6569 49 66ZM52 65C51.4477 65 51 65.4477 51 66C51 66.5523 51.4477 67 52 67H58C58.5523 67 59 66.5523 59 66C59 65.4477 58.5523 65 58 65H52Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39 39C39 36.7909 40.7909 35 43 35H67C69.2091 35 71 36.7909 71 39V71C71 73.2091 69.2091 75 67 75H43C40.7909 75 39 73.2091 39 71V39ZM43 37H67C68.1046 37 69 37.8954 69 39V71C69 72.1046 68.1046 73 67 73H43C41.8954 73 41 72.1046 41 71V39C41 37.8954 41.8954 37 43 37Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M25.207 99.2871H26.332C26.2734 99.8262 26.1191 100.309 25.8691 100.734C25.6191 101.16 25.2656 101.498 24.8086 101.748C24.3516 101.994 23.7812 102.117 23.0977 102.117C22.5977 102.117 22.1426 102.023 21.7324 101.836C21.3262 101.648 20.9766 101.383 20.6836 101.039C20.3906 100.691 20.1641 100.275 20.0039 99.791C19.8477 99.3027 19.7695 98.7598 19.7695 98.1621V97.3125C19.7695 96.7148 19.8477 96.1738 20.0039 95.6895C20.1641 95.2012 20.3926 94.7832 20.6895 94.4355C20.9902 94.0879 21.3516 93.8203 21.7734 93.6328C22.1953 93.4453 22.6699 93.3516 23.1973 93.3516C23.8418 93.3516 24.3867 93.4727 24.832 93.7148C25.2773 93.957 25.623 94.293 25.8691 94.7227C26.1191 95.1484 26.2734 95.6426 26.332 96.2051H25.207C25.1523 95.8066 25.0508 95.4648 24.9023 95.1797C24.7539 94.8906 24.543 94.668 24.2695 94.5117C23.9961 94.3555 23.6387 94.2773 23.1973 94.2773C22.8184 94.2773 22.4844 94.3496 22.1953 94.4941C21.9102 94.6387 21.6699 94.8438 21.4746 95.1094C21.2832 95.375 21.1387 95.6934 21.041 96.0645C20.9434 96.4355 20.8945 96.8477 20.8945 97.3008V98.1621C20.8945 98.5801 20.9375 98.9727 21.0234 99.3398C21.1133 99.707 21.248 100.029 21.4277 100.307C21.6074 100.584 21.8359 100.803 22.1133 100.963C22.3906 101.119 22.7188 101.197 23.0977 101.197C23.5781 101.197 23.9609 101.121 24.2461 100.969C24.5312 100.816 24.7461 100.598 24.8906 100.312C25.0391 100.027 25.1445 99.6855 25.207 99.2871ZM27.4219 98.9004V98.7656C27.4219 98.3086 27.4883 97.8848 27.6211 97.4941C27.7539 97.0996 27.9453 96.7578 28.1953 96.4688C28.4453 96.1758 28.748 95.9492 29.1035 95.7891C29.459 95.625 29.8574 95.543 30.2988 95.543C30.7441 95.543 31.1445 95.625 31.5 95.7891C31.8594 95.9492 32.1641 96.1758 32.4141 96.4688C32.668 96.7578 32.8613 97.0996 32.9941 97.4941C33.127 97.8848 33.1934 98.3086 33.1934 98.7656V98.9004C33.1934 99.3574 33.127 99.7812 32.9941 100.172C32.8613 100.562 32.668 100.904 32.4141 101.197C32.1641 101.486 31.8613 101.713 31.5059 101.877C31.1543 102.037 30.7559 102.117 30.3105 102.117C29.8652 102.117 29.4648 102.037 29.1094 101.877C28.7539 101.713 28.4492 101.486 28.1953 101.197C27.9453 100.904 27.7539 100.562 27.6211 100.172C27.4883 99.7812 27.4219 99.3574 27.4219 98.9004ZM28.5059 98.7656V98.9004C28.5059 99.2168 28.543 99.5156 28.6172 99.7969C28.6914 100.074 28.8027 100.32 28.9512 100.535C29.1035 100.75 29.293 100.92 29.5195 101.045C29.7461 101.166 30.0098 101.227 30.3105 101.227C30.6074 101.227 30.8672 101.166 31.0898 101.045C31.3164 100.92 31.5039 100.75 31.6523 100.535C31.8008 100.32 31.9121 100.074 31.9863 99.7969C32.0645 99.5156 32.1035 99.2168 32.1035 98.9004V98.7656C32.1035 98.4531 32.0645 98.1582 31.9863 97.8809C31.9121 97.5996 31.7988 97.3516 31.6465 97.1367C31.498 96.918 31.3105 96.7461 31.084 96.6211C30.8613 96.4961 30.5996 96.4336 30.2988 96.4336C30.002 96.4336 29.7402 96.4961 29.5137 96.6211C29.291 96.7461 29.1035 96.918 28.9512 97.1367C28.8027 97.3516 28.6914 97.5996 28.6172 97.8809C28.543 98.1582 28.5059 98.4531 28.5059 98.7656ZM35.6367 97.0137V102H34.5527V95.6602H35.5781L35.6367 97.0137ZM35.3789 98.5898L34.9277 98.5723C34.9316 98.1387 34.9961 97.7383 35.1211 97.3711C35.2461 97 35.4219 96.6777 35.6484 96.4043C35.875 96.1309 36.1445 95.9199 36.457 95.7715C36.7734 95.6191 37.123 95.543 37.5059 95.543C37.8184 95.543 38.0996 95.5859 38.3496 95.6719C38.5996 95.7539 38.8125 95.8867 38.9883 96.0703C39.168 96.2539 39.3047 96.4922 39.3984 96.7852C39.4922 97.0742 39.5391 97.4277 39.5391 97.8457V102H38.4492V97.834C38.4492 97.502 38.4004 97.2363 38.3027 97.0371C38.2051 96.834 38.0625 96.6875 37.875 96.5977C37.6875 96.5039 37.457 96.457 37.1836 96.457C36.9141 96.457 36.668 96.5137 36.4453 96.627C36.2266 96.7402 36.0371 96.8965 35.877 97.0957C35.7207 97.2949 35.5977 97.5234 35.5078 97.7812C35.4219 98.0352 35.3789 98.3047 35.3789 98.5898ZM43.8398 95.6602V96.4922H40.4121V95.6602H43.8398ZM41.5723 94.1191H42.6562V100.43C42.6562 100.645 42.6895 100.807 42.7559 100.916C42.8223 101.025 42.9082 101.098 43.0137 101.133C43.1191 101.168 43.2324 101.186 43.3535 101.186C43.4434 101.186 43.5371 101.178 43.6348 101.162C43.7363 101.143 43.8125 101.127 43.8633 101.115L43.8691 102C43.7832 102.027 43.6699 102.053 43.5293 102.076C43.3926 102.104 43.2266 102.117 43.0312 102.117C42.7656 102.117 42.5215 102.064 42.2988 101.959C42.0762 101.854 41.8984 101.678 41.7656 101.432C41.6367 101.182 41.5723 100.846 41.5723 100.424V94.1191ZM48.8496 100.916V97.6523C48.8496 97.4023 48.7988 97.1855 48.6973 97.002C48.5996 96.8145 48.4512 96.6699 48.252 96.5684C48.0527 96.4668 47.8066 96.416 47.5137 96.416C47.2402 96.416 47 96.4629 46.793 96.5566C46.5898 96.6504 46.4297 96.7734 46.3125 96.9258C46.1992 97.0781 46.1426 97.2422 46.1426 97.418H45.0586C45.0586 97.1914 45.1172 96.9668 45.2344 96.7441C45.3516 96.5215 45.5195 96.3203 45.7383 96.1406C45.9609 95.957 46.2266 95.8125 46.5352 95.707C46.8477 95.5977 47.1953 95.543 47.5781 95.543C48.0391 95.543 48.4453 95.6211 48.7969 95.7773C49.1523 95.9336 49.4297 96.1699 49.6289 96.4863C49.832 96.7988 49.9336 97.1914 49.9336 97.6641V100.617C49.9336 100.828 49.9512 101.053 49.9863 101.291C50.0254 101.529 50.082 101.734 50.1562 101.906V102H49.0254C48.9707 101.875 48.9277 101.709 48.8965 101.502C48.8652 101.291 48.8496 101.096 48.8496 100.916ZM49.0371 98.1562L49.0488 98.918H47.9531C47.6445 98.918 47.3691 98.9434 47.127 98.9941C46.8848 99.041 46.6816 99.1133 46.5176 99.2109C46.3535 99.3086 46.2285 99.4316 46.1426 99.5801C46.0566 99.7246 46.0137 99.8945 46.0137 100.09C46.0137 100.289 46.0586 100.471 46.1484 100.635C46.2383 100.799 46.373 100.93 46.5527 101.027C46.7363 101.121 46.9609 101.168 47.2266 101.168C47.5586 101.168 47.8516 101.098 48.1055 100.957C48.3594 100.816 48.5605 100.645 48.709 100.441C48.8613 100.238 48.9434 100.041 48.9551 99.8496L49.418 100.371C49.3906 100.535 49.3164 100.717 49.1953 100.916C49.0742 101.115 48.9121 101.307 48.709 101.49C48.5098 101.67 48.2715 101.82 47.9941 101.941C47.7207 102.059 47.4121 102.117 47.0684 102.117C46.6387 102.117 46.2617 102.033 45.9375 101.865C45.6172 101.697 45.3672 101.473 45.1875 101.191C45.0117 100.906 44.9238 100.588 44.9238 100.236C44.9238 99.8965 44.9902 99.5977 45.123 99.3398C45.2559 99.0781 45.4473 98.8613 45.6973 98.6895C45.9473 98.5137 46.248 98.3809 46.5996 98.291C46.9512 98.2012 47.3438 98.1562 47.7773 98.1562H49.0371ZM54.1758 101.227C54.4336 101.227 54.6719 101.174 54.8906 101.068C55.1094 100.963 55.2891 100.818 55.4297 100.635C55.5703 100.447 55.6504 100.234 55.6699 99.9961H56.7012C56.6816 100.371 56.5547 100.721 56.3203 101.045C56.0898 101.365 55.7871 101.625 55.4121 101.824C55.0371 102.02 54.625 102.117 54.1758 102.117C53.6992 102.117 53.2832 102.033 52.9277 101.865C52.5762 101.697 52.2832 101.467 52.0488 101.174C51.8184 100.881 51.6445 100.545 51.5273 100.166C51.4141 99.7832 51.3574 99.3789 51.3574 98.9531V98.707C51.3574 98.2812 51.4141 97.8789 51.5273 97.5C51.6445 97.1172 51.8184 96.7793 52.0488 96.4863C52.2832 96.1934 52.5762 95.9629 52.9277 95.7949C53.2832 95.627 53.6992 95.543 54.1758 95.543C54.6719 95.543 55.1055 95.6445 55.4766 95.8477C55.8477 96.0469 56.1387 96.3203 56.3496 96.668C56.5645 97.0117 56.6816 97.4023 56.7012 97.8398H55.6699C55.6504 97.5781 55.5762 97.3418 55.4473 97.1309C55.3223 96.9199 55.1504 96.752 54.9316 96.627C54.7168 96.498 54.4648 96.4336 54.1758 96.4336C53.8438 96.4336 53.5645 96.5 53.3379 96.6328C53.1152 96.7617 52.9375 96.9375 52.8047 97.1602C52.6758 97.3789 52.582 97.623 52.5234 97.8926C52.4688 98.1582 52.4414 98.4297 52.4414 98.707V98.9531C52.4414 99.2305 52.4688 99.5039 52.5234 99.7734C52.5781 100.043 52.6699 100.287 52.7988 100.506C52.9316 100.725 53.1094 100.9 53.332 101.033C53.5586 101.162 53.8398 101.227 54.1758 101.227ZM60.5742 95.6602V96.4922H57.1465V95.6602H60.5742ZM58.3066 94.1191H59.3906V100.43C59.3906 100.645 59.4238 100.807 59.4902 100.916C59.5566 101.025 59.6426 101.098 59.748 101.133C59.8535 101.168 59.9668 101.186 60.0879 101.186C60.1777 101.186 60.2715 101.178 60.3691 101.162C60.4707 101.143 60.5469 101.127 60.5977 101.115L60.6035 102C60.5176 102.027 60.4043 102.053 60.2637 102.076C60.127 102.104 59.9609 102.117 59.7656 102.117C59.5 102.117 59.2559 102.064 59.0332 101.959C58.8105 101.854 58.6328 101.678 58.5 101.432C58.3711 101.182 58.3066 100.846 58.3066 100.424V94.1191ZM66.1172 93.4688V102H64.9863V93.4688H66.1172ZM69.6914 97.3066V98.2324H65.8711V97.3066H69.6914ZM70.2715 93.4688V94.3945H65.8711V93.4688H70.2715ZM71.0391 98.9004V98.7656C71.0391 98.3086 71.1055 97.8848 71.2383 97.4941C71.3711 97.0996 71.5625 96.7578 71.8125 96.4688C72.0625 96.1758 72.3652 95.9492 72.7207 95.7891C73.0762 95.625 73.4746 95.543 73.916 95.543C74.3613 95.543 74.7617 95.625 75.1172 95.7891C75.4766 95.9492 75.7812 96.1758 76.0312 96.4688C76.2852 96.7578 76.4785 97.0996 76.6113 97.4941C76.7441 97.8848 76.8105 98.3086 76.8105 98.7656V98.9004C76.8105 99.3574 76.7441 99.7812 76.6113 100.172C76.4785 100.562 76.2852 100.904 76.0312 101.197C75.7812 101.486 75.4785 101.713 75.123 101.877C74.7715 102.037 74.373 102.117 73.9277 102.117C73.4824 102.117 73.082 102.037 72.7266 101.877C72.3711 101.713 72.0664 101.486 71.8125 101.197C71.5625 100.904 71.3711 100.562 71.2383 100.172C71.1055 99.7812 71.0391 99.3574 71.0391 98.9004ZM72.123 98.7656V98.9004C72.123 99.2168 72.1602 99.5156 72.2344 99.7969C72.3086 100.074 72.4199 100.32 72.5684 100.535C72.7207 100.75 72.9102 100.92 73.1367 101.045C73.3633 101.166 73.627 101.227 73.9277 101.227C74.2246 101.227 74.4844 101.166 74.707 101.045C74.9336 100.92 75.1211 100.75 75.2695 100.535C75.418 100.32 75.5293 100.074 75.6035 99.7969C75.6816 99.5156 75.7207 99.2168 75.7207 98.9004V98.7656C75.7207 98.4531 75.6816 98.1582 75.6035 97.8809C75.5293 97.5996 75.416 97.3516 75.2637 97.1367C75.1152 96.918 74.9277 96.7461 74.7012 96.6211C74.4785 96.4961 74.2168 96.4336 73.916 96.4336C73.6191 96.4336 73.3574 96.4961 73.1309 96.6211C72.9082 96.7461 72.7207 96.918 72.5684 97.1367C72.4199 97.3516 72.3086 97.5996 72.2344 97.8809C72.1602 98.1582 72.123 98.4531 72.123 98.7656ZM79.2539 96.6562V102H78.1699V95.6602H79.2246L79.2539 96.6562ZM81.2344 95.625L81.2285 96.6328C81.1387 96.6133 81.0527 96.6016 80.9707 96.5977C80.8926 96.5898 80.8027 96.5859 80.7012 96.5859C80.4512 96.5859 80.2305 96.625 80.0391 96.7031C79.8477 96.7812 79.6855 96.8906 79.5527 97.0312C79.4199 97.1719 79.3145 97.3398 79.2363 97.5352C79.1621 97.7266 79.1133 97.9375 79.0898 98.168L78.7852 98.3438C78.7852 97.9609 78.8223 97.6016 78.8965 97.2656C78.9746 96.9297 79.0938 96.6328 79.2539 96.375C79.4141 96.1133 79.6172 95.9102 79.8633 95.7656C80.1133 95.6172 80.4102 95.543 80.7539 95.543C80.832 95.543 80.9219 95.5527 81.0234 95.5723C81.125 95.5879 81.1953 95.6055 81.2344 95.625ZM83.3145 96.9199V102H82.2246V95.6602H83.2559L83.3145 96.9199ZM83.0918 98.5898L82.5879 98.5723C82.5918 98.1387 82.6484 97.7383 82.7578 97.3711C82.8672 97 83.0293 96.6777 83.2441 96.4043C83.459 96.1309 83.7266 95.9199 84.0469 95.7715C84.3672 95.6191 84.7383 95.543 85.1602 95.543C85.457 95.543 85.7305 95.5859 85.9805 95.6719C86.2305 95.7539 86.4473 95.8848 86.6309 96.0645C86.8145 96.2441 86.957 96.4746 87.0586 96.7559C87.1602 97.0371 87.2109 97.377 87.2109 97.7754V102H86.127V97.8281C86.127 97.4961 86.0703 97.2305 85.957 97.0312C85.8477 96.832 85.6914 96.6875 85.4883 96.5977C85.2852 96.5039 85.0469 96.457 84.7734 96.457C84.4531 96.457 84.1855 96.5137 83.9707 96.627C83.7559 96.7402 83.584 96.8965 83.4551 97.0957C83.3262 97.2949 83.2324 97.5234 83.1738 97.7812C83.1191 98.0352 83.0918 98.3047 83.0918 98.5898ZM87.1992 97.9922L86.4727 98.2148C86.4766 97.8672 86.5332 97.5332 86.6426 97.2129C86.7559 96.8926 86.918 96.6074 87.1289 96.3574C87.3438 96.1074 87.6074 95.9102 87.9199 95.7656C88.2324 95.6172 88.5898 95.543 88.9922 95.543C89.332 95.543 89.6328 95.5879 89.8945 95.6777C90.1602 95.7676 90.3828 95.9062 90.5625 96.0938C90.7461 96.2773 90.8848 96.5137 90.9785 96.8027C91.0723 97.0918 91.1191 97.4355 91.1191 97.834V102H90.0293V97.8223C90.0293 97.4668 89.9727 97.1914 89.8594 96.9961C89.75 96.7969 89.5938 96.6582 89.3906 96.5801C89.1914 96.498 88.9531 96.457 88.6758 96.457C88.4375 96.457 88.2266 96.498 88.043 96.5801C87.8594 96.6621 87.7051 96.7754 87.5801 96.9199C87.4551 97.0605 87.3594 97.2227 87.293 97.4062C87.2305 97.5898 87.1992 97.7852 87.1992 97.9922Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "19",
  y: "110",
  width: "70",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "25",
  y: "116",
  width: "58",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "107",
  y: "13",
  width: "84",
  height: "118",
  rx: "3",
  fill: "white",
  stroke: "#4272F9",
  strokeWidth: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "119",
  y: "25",
  width: "60",
  height: "60",
  rx: "4",
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M136 46.0444C135.448 46.0444 135 46.4954 135 47.0517C135 47.6081 135.448 48.0591 136 48.0591H156C156.552 48.0591 157 47.6081 157 47.0517C157 46.4954 156.552 46.0444 156 46.0444H136Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M135 51.0813C135 50.5249 135.448 50.0739 136 50.0739H156C156.552 50.0739 157 50.5249 157 51.0813C157 51.6377 156.552 52.0887 156 52.0887H136C135.448 52.0887 135 51.6377 135 51.0813Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M136 54.1035C135.448 54.1035 135 54.5545 135 55.1109C135 55.6672 135.448 56.1183 136 56.1183H151C151.552 56.1183 152 55.6672 152 55.1109C152 54.5545 151.552 54.1035 151 54.1035H136Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M131 44.0296C131 41.8041 132.791 40 135 40H157C159.209 40 161 41.8041 161 44.0296V55.1109H163C165.209 55.1109 167 56.915 167 59.1404V65.1848C167 67.4103 165.209 69.2144 163 69.2144H162.286L159.866 71.839C159.669 72.0537 159.331 72.0537 159.134 71.839L156.714 69.2144H151C148.791 69.2144 147 67.4103 147 65.1848V62.1626H144.214L140.866 65.7947C140.669 66.0093 140.331 66.0093 140.134 65.7947L136.786 62.1626H135C132.791 62.1626 131 60.3585 131 58.1331V44.0296ZM137.658 60.1478L140.5 63.2312L143.342 60.1478H157C158.105 60.1478 159 59.2458 159 58.1331V44.0296C159 42.9168 158.105 42.0148 157 42.0148H135C133.895 42.0148 133 42.9168 133 44.0296V58.1331C133 59.2458 133.895 60.1478 135 60.1478H137.658ZM149 62.1626V65.1848C149 66.2975 149.895 67.1996 151 67.1996H157.586L159.5 69.2756L161.414 67.1996H163C164.105 67.1996 165 66.2975 165 65.1848V59.1404C165 58.0277 164.105 57.1257 163 57.1257H161V58.1331C161 60.3585 159.209 62.1626 157 62.1626H149Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M125.436 93.4688V102H124.305V93.4688H125.436ZM129.01 97.3066V98.2324H125.189V97.3066H129.01ZM129.59 93.4688V94.3945H125.189V93.4688H129.59ZM133.275 102.117C132.834 102.117 132.434 102.043 132.074 101.895C131.719 101.742 131.412 101.529 131.154 101.256C130.9 100.982 130.705 100.658 130.568 100.283C130.432 99.9082 130.363 99.498 130.363 99.0527V98.8066C130.363 98.291 130.439 97.832 130.592 97.4297C130.744 97.0234 130.951 96.6797 131.213 96.3984C131.475 96.1172 131.771 95.9043 132.104 95.7598C132.436 95.6152 132.779 95.543 133.135 95.543C133.588 95.543 133.979 95.6211 134.307 95.7773C134.639 95.9336 134.91 96.1523 135.121 96.4336C135.332 96.7109 135.488 97.0391 135.59 97.418C135.691 97.793 135.742 98.2031 135.742 98.6484V99.1348H131.008V98.25H134.658V98.168C134.643 97.8867 134.584 97.6133 134.482 97.3477C134.385 97.082 134.229 96.8633 134.014 96.6914C133.799 96.5195 133.506 96.4336 133.135 96.4336C132.889 96.4336 132.662 96.4863 132.455 96.5918C132.248 96.6934 132.07 96.8457 131.922 97.0488C131.773 97.252 131.658 97.5 131.576 97.793C131.494 98.0859 131.453 98.4238 131.453 98.8066V99.0527C131.453 99.3535 131.494 99.6367 131.576 99.9023C131.662 100.164 131.785 100.395 131.945 100.594C132.109 100.793 132.307 100.949 132.537 101.062C132.771 101.176 133.037 101.232 133.334 101.232C133.717 101.232 134.041 101.154 134.307 100.998C134.572 100.842 134.805 100.633 135.004 100.371L135.66 100.893C135.523 101.1 135.35 101.297 135.139 101.484C134.928 101.672 134.668 101.824 134.359 101.941C134.055 102.059 133.693 102.117 133.275 102.117ZM139.639 102.117C139.197 102.117 138.797 102.043 138.438 101.895C138.082 101.742 137.775 101.529 137.518 101.256C137.264 100.982 137.068 100.658 136.932 100.283C136.795 99.9082 136.727 99.498 136.727 99.0527V98.8066C136.727 98.291 136.803 97.832 136.955 97.4297C137.107 97.0234 137.314 96.6797 137.576 96.3984C137.838 96.1172 138.135 95.9043 138.467 95.7598C138.799 95.6152 139.143 95.543 139.498 95.543C139.951 95.543 140.342 95.6211 140.67 95.7773C141.002 95.9336 141.273 96.1523 141.484 96.4336C141.695 96.7109 141.852 97.0391 141.953 97.418C142.055 97.793 142.105 98.2031 142.105 98.6484V99.1348H137.371V98.25H141.021V98.168C141.006 97.8867 140.947 97.6133 140.846 97.3477C140.748 97.082 140.592 96.8633 140.377 96.6914C140.162 96.5195 139.869 96.4336 139.498 96.4336C139.252 96.4336 139.025 96.4863 138.818 96.5918C138.611 96.6934 138.434 96.8457 138.285 97.0488C138.137 97.252 138.021 97.5 137.939 97.793C137.857 98.0859 137.816 98.4238 137.816 98.8066V99.0527C137.816 99.3535 137.857 99.6367 137.939 99.9023C138.025 100.164 138.148 100.395 138.309 100.594C138.473 100.793 138.67 100.949 138.9 101.062C139.135 101.176 139.4 101.232 139.697 101.232C140.08 101.232 140.404 101.154 140.67 100.998C140.936 100.842 141.168 100.633 141.367 100.371L142.023 100.893C141.887 101.1 141.713 101.297 141.502 101.484C141.291 101.672 141.031 101.824 140.723 101.941C140.418 102.059 140.057 102.117 139.639 102.117ZM147.367 100.77V93H148.457V102H147.461L147.367 100.77ZM143.102 98.9004V98.7773C143.102 98.293 143.16 97.8535 143.277 97.459C143.398 97.0605 143.568 96.7188 143.787 96.4336C144.01 96.1484 144.273 95.9297 144.578 95.7773C144.887 95.6211 145.23 95.543 145.609 95.543C146.008 95.543 146.355 95.6133 146.652 95.7539C146.953 95.8906 147.207 96.0918 147.414 96.3574C147.625 96.6191 147.791 96.9355 147.912 97.3066C148.033 97.6777 148.117 98.0977 148.164 98.5664V99.1055C148.121 99.5703 148.037 99.9883 147.912 100.359C147.791 100.73 147.625 101.047 147.414 101.309C147.207 101.57 146.953 101.771 146.652 101.912C146.352 102.049 146 102.117 145.598 102.117C145.227 102.117 144.887 102.037 144.578 101.877C144.273 101.717 144.01 101.492 143.787 101.203C143.568 100.914 143.398 100.574 143.277 100.184C143.16 99.7891 143.102 99.3613 143.102 98.9004ZM144.191 98.7773V98.9004C144.191 99.2168 144.223 99.5137 144.285 99.791C144.352 100.068 144.453 100.312 144.59 100.523C144.727 100.734 144.9 100.9 145.111 101.021C145.322 101.139 145.574 101.197 145.867 101.197C146.227 101.197 146.521 101.121 146.752 100.969C146.986 100.816 147.174 100.615 147.314 100.365C147.455 100.115 147.564 99.8438 147.643 99.5508V98.1387C147.596 97.9238 147.527 97.7168 147.438 97.5176C147.352 97.3145 147.238 97.1348 147.098 96.9785C146.961 96.8184 146.791 96.6914 146.588 96.5977C146.389 96.5039 146.152 96.457 145.879 96.457C145.582 96.457 145.326 96.5195 145.111 96.6445C144.9 96.7656 144.727 96.9336 144.59 97.1484C144.453 97.3594 144.352 97.6055 144.285 97.8867C144.223 98.1641 144.191 98.4609 144.191 98.7773ZM153.35 98.0098H151.188L151.176 97.1016H153.139C153.463 97.1016 153.746 97.0469 153.988 96.9375C154.23 96.8281 154.418 96.6719 154.551 96.4688C154.688 96.2617 154.756 96.0156 154.756 95.7305C154.756 95.418 154.695 95.1641 154.574 94.9688C154.457 94.7695 154.275 94.625 154.029 94.5352C153.787 94.4414 153.479 94.3945 153.104 94.3945H151.439V102H150.309V93.4688H153.104C153.541 93.4688 153.932 93.5137 154.275 93.6035C154.619 93.6895 154.91 93.8262 155.148 94.0137C155.391 94.1973 155.574 94.4316 155.699 94.7168C155.824 95.002 155.887 95.3438 155.887 95.7422C155.887 96.0938 155.797 96.4121 155.617 96.6973C155.438 96.9785 155.188 97.209 154.867 97.3887C154.551 97.5684 154.18 97.6836 153.754 97.7344L153.35 98.0098ZM153.297 102H150.742L151.381 101.08H153.297C153.656 101.08 153.961 101.018 154.211 100.893C154.465 100.768 154.658 100.592 154.791 100.365C154.924 100.135 154.99 99.8633 154.99 99.5508C154.99 99.2344 154.934 98.9609 154.82 98.7305C154.707 98.5 154.529 98.3223 154.287 98.1973C154.045 98.0723 153.732 98.0098 153.35 98.0098H151.738L151.75 97.1016H153.953L154.193 97.4297C154.604 97.4648 154.951 97.582 155.236 97.7812C155.521 97.9766 155.738 98.2266 155.887 98.5312C156.039 98.8359 156.115 99.1719 156.115 99.5391C156.115 100.07 155.998 100.52 155.764 100.887C155.533 101.25 155.207 101.527 154.785 101.719C154.363 101.906 153.867 102 153.297 102ZM161.359 100.916V97.6523C161.359 97.4023 161.309 97.1855 161.207 97.002C161.109 96.8145 160.961 96.6699 160.762 96.5684C160.562 96.4668 160.316 96.416 160.023 96.416C159.75 96.416 159.51 96.4629 159.303 96.5566C159.1 96.6504 158.939 96.7734 158.822 96.9258C158.709 97.0781 158.652 97.2422 158.652 97.418H157.568C157.568 97.1914 157.627 96.9668 157.744 96.7441C157.861 96.5215 158.029 96.3203 158.248 96.1406C158.471 95.957 158.736 95.8125 159.045 95.707C159.357 95.5977 159.705 95.543 160.088 95.543C160.549 95.543 160.955 95.6211 161.307 95.7773C161.662 95.9336 161.939 96.1699 162.139 96.4863C162.342 96.7988 162.443 97.1914 162.443 97.6641V100.617C162.443 100.828 162.461 101.053 162.496 101.291C162.535 101.529 162.592 101.734 162.666 101.906V102H161.535C161.48 101.875 161.438 101.709 161.406 101.502C161.375 101.291 161.359 101.096 161.359 100.916ZM161.547 98.1562L161.559 98.918H160.463C160.154 98.918 159.879 98.9434 159.637 98.9941C159.395 99.041 159.191 99.1133 159.027 99.2109C158.863 99.3086 158.738 99.4316 158.652 99.5801C158.566 99.7246 158.523 99.8945 158.523 100.09C158.523 100.289 158.568 100.471 158.658 100.635C158.748 100.799 158.883 100.93 159.062 101.027C159.246 101.121 159.471 101.168 159.736 101.168C160.068 101.168 160.361 101.098 160.615 100.957C160.869 100.816 161.07 100.645 161.219 100.441C161.371 100.238 161.453 100.041 161.465 99.8496L161.928 100.371C161.9 100.535 161.826 100.717 161.705 100.916C161.584 101.115 161.422 101.307 161.219 101.49C161.02 101.67 160.781 101.82 160.504 101.941C160.23 102.059 159.922 102.117 159.578 102.117C159.148 102.117 158.771 102.033 158.447 101.865C158.127 101.697 157.877 101.473 157.697 101.191C157.521 100.906 157.434 100.588 157.434 100.236C157.434 99.8965 157.5 99.5977 157.633 99.3398C157.766 99.0781 157.957 98.8613 158.207 98.6895C158.457 98.5137 158.758 98.3809 159.109 98.291C159.461 98.2012 159.854 98.1562 160.287 98.1562H161.547ZM166.686 101.227C166.943 101.227 167.182 101.174 167.4 101.068C167.619 100.963 167.799 100.818 167.939 100.635C168.08 100.447 168.16 100.234 168.18 99.9961H169.211C169.191 100.371 169.064 100.721 168.83 101.045C168.6 101.365 168.297 101.625 167.922 101.824C167.547 102.02 167.135 102.117 166.686 102.117C166.209 102.117 165.793 102.033 165.438 101.865C165.086 101.697 164.793 101.467 164.559 101.174C164.328 100.881 164.154 100.545 164.037 100.166C163.924 99.7832 163.867 99.3789 163.867 98.9531V98.707C163.867 98.2812 163.924 97.8789 164.037 97.5C164.154 97.1172 164.328 96.7793 164.559 96.4863C164.793 96.1934 165.086 95.9629 165.438 95.7949C165.793 95.627 166.209 95.543 166.686 95.543C167.182 95.543 167.615 95.6445 167.986 95.8477C168.357 96.0469 168.648 96.3203 168.859 96.668C169.074 97.0117 169.191 97.4023 169.211 97.8398H168.18C168.16 97.5781 168.086 97.3418 167.957 97.1309C167.832 96.9199 167.66 96.752 167.441 96.627C167.227 96.498 166.975 96.4336 166.686 96.4336C166.354 96.4336 166.074 96.5 165.848 96.6328C165.625 96.7617 165.447 96.9375 165.314 97.1602C165.186 97.3789 165.092 97.623 165.033 97.8926C164.979 98.1582 164.951 98.4297 164.951 98.707V98.9531C164.951 99.2305 164.979 99.5039 165.033 99.7734C165.088 100.043 165.18 100.287 165.309 100.506C165.441 100.725 165.619 100.9 165.842 101.033C166.068 101.162 166.35 101.227 166.686 101.227ZM171.52 93V102H170.43V93H171.52ZM175.393 95.6602L172.627 98.6191L171.08 100.225L170.992 99.0703L172.1 97.7461L174.068 95.6602H175.393ZM174.402 102L172.141 98.9766L172.703 98.0098L175.68 102H174.402Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "113",
  y: "110",
  width: "70",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "119",
  y: "116",
  width: "58",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "200",
  y: "12",
  width: "86",
  height: "120",
  rx: "4",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "213",
  y: "25",
  width: "60",
  height: "60",
  rx: "4",
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M231 46.0074C231 45.451 231.448 45 232 45H246C246.552 45 247 45.451 247 46.0074C247 46.5638 246.552 47.0148 246 47.0148H232C231.448 47.0148 231 46.5638 231 46.0074Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M232 49.0296C231.448 49.0296 231 49.4806 231 50.037C231 50.5933 231.448 51.0444 232 51.0444H246C246.552 51.0444 247 50.5933 247 50.037C247 49.4806 246.552 49.0296 246 49.0296H232Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M232 53.0591C231.448 53.0591 231 53.5102 231 54.0665C231 54.6229 231.448 55.0739 232 55.0739H241C241.552 55.0739 242 54.6229 242 54.0665C242 53.5102 241.552 53.0591 241 53.0591H232Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M231 57.9926C231 57.4362 231.448 56.9852 232 56.9852H238C238.552 56.9852 239 57.4362 239 57.9926C239 58.549 238.552 59 238 59H232C231.448 59 231 58.549 231 57.9926Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M249 59C249 58.4477 249.448 58 250 58C250.552 58 251 58.4477 251 59V61H253C253.552 61 254 61.4477 254 62C254 62.5523 253.552 63 253 63H251V65C251 65.5523 250.552 66 250 66C249.448 66 249 65.5523 249 65V63H247C246.448 63 246 62.5523 246 62C246 61.4477 246.448 61 247 61H249V59Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M251 43V53.0549C255.5 53.5524 259 57.3674 259 62C259 66.9706 254.971 71 250 71C247.857 71 245.888 70.2508 244.343 69H231C228.791 69 227 67.2091 227 65V43C227 40.7909 228.791 39 231 39H247C249.209 39 251 40.7909 251 43ZM231 41H247C248.105 41 249 41.8954 249 43V53.0549C244.5 53.5524 241 57.3674 241 62C241 63.8501 241.558 65.5699 242.516 67H231C229.895 67 229 66.1046 229 65V43C229 41.8954 229.895 41 231 41ZM257 62C257 65.866 253.866 69 250 69C246.134 69 243 65.866 243 62C243 58.134 246.134 55 250 55C253.866 55 257 58.134 257 62Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M216.611 93.4688V102H215.48V93.4688H216.611ZM219.588 97.0137V102H218.504V95.6602H219.529L219.588 97.0137ZM219.33 98.5898L218.879 98.5723C218.883 98.1387 218.947 97.7383 219.072 97.3711C219.197 97 219.373 96.6777 219.6 96.4043C219.826 96.1309 220.096 95.9199 220.408 95.7715C220.725 95.6191 221.074 95.543 221.457 95.543C221.77 95.543 222.051 95.5859 222.301 95.6719C222.551 95.7539 222.764 95.8867 222.939 96.0703C223.119 96.2539 223.256 96.4922 223.35 96.7852C223.443 97.0742 223.49 97.4277 223.49 97.8457V102H222.4V97.834C222.4 97.502 222.352 97.2363 222.254 97.0371C222.156 96.834 222.014 96.6875 221.826 96.5977C221.639 96.5039 221.408 96.457 221.135 96.457C220.865 96.457 220.619 96.5137 220.396 96.627C220.178 96.7402 219.988 96.8965 219.828 97.0957C219.672 97.2949 219.549 97.5234 219.459 97.7812C219.373 98.0352 219.33 98.3047 219.33 98.5898ZM228.828 100.318C228.828 100.162 228.793 100.018 228.723 99.8848C228.656 99.748 228.518 99.625 228.307 99.5156C228.1 99.4023 227.787 99.3047 227.369 99.2227C227.018 99.1484 226.699 99.0605 226.414 98.959C226.133 98.8574 225.893 98.7344 225.693 98.5898C225.498 98.4453 225.348 98.2754 225.242 98.0801C225.137 97.8848 225.084 97.6562 225.084 97.3945C225.084 97.1445 225.139 96.9082 225.248 96.6855C225.361 96.4629 225.52 96.2656 225.723 96.0938C225.93 95.9219 226.178 95.7871 226.467 95.6895C226.756 95.5918 227.078 95.543 227.434 95.543C227.941 95.543 228.375 95.6328 228.734 95.8125C229.094 95.9922 229.369 96.2324 229.561 96.5332C229.752 96.8301 229.848 97.1602 229.848 97.5234H228.764C228.764 97.3477 228.711 97.1777 228.605 97.0137C228.504 96.8457 228.354 96.707 228.154 96.5977C227.959 96.4883 227.719 96.4336 227.434 96.4336C227.133 96.4336 226.889 96.4805 226.701 96.5742C226.518 96.6641 226.383 96.7793 226.297 96.9199C226.215 97.0605 226.174 97.209 226.174 97.3652C226.174 97.4824 226.193 97.5879 226.232 97.6816C226.275 97.7715 226.35 97.8555 226.455 97.9336C226.561 98.0078 226.709 98.0781 226.9 98.1445C227.092 98.2109 227.336 98.2773 227.633 98.3438C228.152 98.4609 228.58 98.6016 228.916 98.7656C229.252 98.9297 229.502 99.1309 229.666 99.3691C229.83 99.6074 229.912 99.8965 229.912 100.236C229.912 100.514 229.854 100.768 229.736 100.998C229.623 101.229 229.457 101.428 229.238 101.596C229.023 101.76 228.766 101.889 228.465 101.982C228.168 102.072 227.834 102.117 227.463 102.117C226.904 102.117 226.432 102.018 226.045 101.818C225.658 101.619 225.365 101.361 225.166 101.045C224.967 100.729 224.867 100.395 224.867 100.043H225.957C225.973 100.34 226.059 100.576 226.215 100.752C226.371 100.924 226.562 101.047 226.789 101.121C227.016 101.191 227.24 101.227 227.463 101.227C227.76 101.227 228.008 101.188 228.207 101.109C228.41 101.031 228.564 100.924 228.67 100.787C228.775 100.65 228.828 100.494 228.828 100.318ZM233.967 102.117C233.525 102.117 233.125 102.043 232.766 101.895C232.41 101.742 232.104 101.529 231.846 101.256C231.592 100.982 231.396 100.658 231.26 100.283C231.123 99.9082 231.055 99.498 231.055 99.0527V98.8066C231.055 98.291 231.131 97.832 231.283 97.4297C231.436 97.0234 231.643 96.6797 231.904 96.3984C232.166 96.1172 232.463 95.9043 232.795 95.7598C233.127 95.6152 233.471 95.543 233.826 95.543C234.279 95.543 234.67 95.6211 234.998 95.7773C235.33 95.9336 235.602 96.1523 235.812 96.4336C236.023 96.7109 236.18 97.0391 236.281 97.418C236.383 97.793 236.434 98.2031 236.434 98.6484V99.1348H231.699V98.25H235.35V98.168C235.334 97.8867 235.275 97.6133 235.174 97.3477C235.076 97.082 234.92 96.8633 234.705 96.6914C234.49 96.5195 234.197 96.4336 233.826 96.4336C233.58 96.4336 233.354 96.4863 233.146 96.5918C232.939 96.6934 232.762 96.8457 232.613 97.0488C232.465 97.252 232.35 97.5 232.268 97.793C232.186 98.0859 232.145 98.4238 232.145 98.8066V99.0527C232.145 99.3535 232.186 99.6367 232.268 99.9023C232.354 100.164 232.477 100.395 232.637 100.594C232.801 100.793 232.998 100.949 233.229 101.062C233.463 101.176 233.729 101.232 234.025 101.232C234.408 101.232 234.732 101.154 234.998 100.998C235.264 100.842 235.496 100.633 235.695 100.371L236.352 100.893C236.215 101.1 236.041 101.297 235.83 101.484C235.619 101.672 235.359 101.824 235.051 101.941C234.746 102.059 234.385 102.117 233.967 102.117ZM238.783 96.6562V102H237.699V95.6602H238.754L238.783 96.6562ZM240.764 95.625L240.758 96.6328C240.668 96.6133 240.582 96.6016 240.5 96.5977C240.422 96.5898 240.332 96.5859 240.23 96.5859C239.98 96.5859 239.76 96.625 239.568 96.7031C239.377 96.7812 239.215 96.8906 239.082 97.0312C238.949 97.1719 238.844 97.3398 238.766 97.5352C238.691 97.7266 238.643 97.9375 238.619 98.168L238.314 98.3438C238.314 97.9609 238.352 97.6016 238.426 97.2656C238.504 96.9297 238.623 96.6328 238.783 96.375C238.943 96.1133 239.146 95.9102 239.393 95.7656C239.643 95.6172 239.939 95.543 240.283 95.543C240.361 95.543 240.451 95.5527 240.553 95.5723C240.654 95.5879 240.725 95.6055 240.764 95.625ZM244.713 95.6602V96.4922H241.285V95.6602H244.713ZM242.445 94.1191H243.529V100.43C243.529 100.645 243.562 100.807 243.629 100.916C243.695 101.025 243.781 101.098 243.887 101.133C243.992 101.168 244.105 101.186 244.227 101.186C244.316 101.186 244.41 101.178 244.508 101.162C244.609 101.143 244.686 101.127 244.736 101.115L244.742 102C244.656 102.027 244.543 102.053 244.402 102.076C244.266 102.104 244.1 102.117 243.904 102.117C243.639 102.117 243.395 102.064 243.172 101.959C242.949 101.854 242.771 101.678 242.639 101.432C242.51 101.182 242.445 100.846 242.445 100.424V94.1191ZM252.271 98.6543H249.992V97.7344H252.271C252.713 97.7344 253.07 97.6641 253.344 97.5234C253.617 97.3828 253.816 97.1875 253.941 96.9375C254.07 96.6875 254.135 96.4023 254.135 96.082C254.135 95.7891 254.07 95.5137 253.941 95.2559C253.816 94.998 253.617 94.791 253.344 94.6348C253.07 94.4746 252.713 94.3945 252.271 94.3945H250.256V102H249.125V93.4688H252.271C252.916 93.4688 253.461 93.5801 253.906 93.8027C254.352 94.0254 254.689 94.334 254.92 94.7285C255.15 95.1191 255.266 95.5664 255.266 96.0703C255.266 96.6172 255.15 97.084 254.92 97.4707C254.689 97.8574 254.352 98.1523 253.906 98.3555C253.461 98.5547 252.916 98.6543 252.271 98.6543ZM256.162 98.9004V98.7656C256.162 98.3086 256.229 97.8848 256.361 97.4941C256.494 97.0996 256.686 96.7578 256.936 96.4688C257.186 96.1758 257.488 95.9492 257.844 95.7891C258.199 95.625 258.598 95.543 259.039 95.543C259.484 95.543 259.885 95.625 260.24 95.7891C260.6 95.9492 260.904 96.1758 261.154 96.4688C261.408 96.7578 261.602 97.0996 261.734 97.4941C261.867 97.8848 261.934 98.3086 261.934 98.7656V98.9004C261.934 99.3574 261.867 99.7812 261.734 100.172C261.602 100.562 261.408 100.904 261.154 101.197C260.904 101.486 260.602 101.713 260.246 101.877C259.895 102.037 259.496 102.117 259.051 102.117C258.605 102.117 258.205 102.037 257.85 101.877C257.494 101.713 257.189 101.486 256.936 101.197C256.686 100.904 256.494 100.562 256.361 100.172C256.229 99.7812 256.162 99.3574 256.162 98.9004ZM257.246 98.7656V98.9004C257.246 99.2168 257.283 99.5156 257.357 99.7969C257.432 100.074 257.543 100.32 257.691 100.535C257.844 100.75 258.033 100.92 258.26 101.045C258.486 101.166 258.75 101.227 259.051 101.227C259.348 101.227 259.607 101.166 259.83 101.045C260.057 100.92 260.244 100.75 260.393 100.535C260.541 100.32 260.652 100.074 260.727 99.7969C260.805 99.5156 260.844 99.2168 260.844 98.9004V98.7656C260.844 98.4531 260.805 98.1582 260.727 97.8809C260.652 97.5996 260.539 97.3516 260.387 97.1367C260.238 96.918 260.051 96.7461 259.824 96.6211C259.602 96.4961 259.34 96.4336 259.039 96.4336C258.742 96.4336 258.48 96.4961 258.254 96.6211C258.031 96.7461 257.844 96.918 257.691 97.1367C257.543 97.3516 257.432 97.5996 257.357 97.8809C257.283 98.1582 257.246 98.4531 257.246 98.7656ZM266.984 100.318C266.984 100.162 266.949 100.018 266.879 99.8848C266.812 99.748 266.674 99.625 266.463 99.5156C266.256 99.4023 265.943 99.3047 265.525 99.2227C265.174 99.1484 264.855 99.0605 264.57 98.959C264.289 98.8574 264.049 98.7344 263.85 98.5898C263.654 98.4453 263.504 98.2754 263.398 98.0801C263.293 97.8848 263.24 97.6562 263.24 97.3945C263.24 97.1445 263.295 96.9082 263.404 96.6855C263.518 96.4629 263.676 96.2656 263.879 96.0938C264.086 95.9219 264.334 95.7871 264.623 95.6895C264.912 95.5918 265.234 95.543 265.59 95.543C266.098 95.543 266.531 95.6328 266.891 95.8125C267.25 95.9922 267.525 96.2324 267.717 96.5332C267.908 96.8301 268.004 97.1602 268.004 97.5234H266.92C266.92 97.3477 266.867 97.1777 266.762 97.0137C266.66 96.8457 266.51 96.707 266.311 96.5977C266.115 96.4883 265.875 96.4336 265.59 96.4336C265.289 96.4336 265.045 96.4805 264.857 96.5742C264.674 96.6641 264.539 96.7793 264.453 96.9199C264.371 97.0605 264.33 97.209 264.33 97.3652C264.33 97.4824 264.35 97.5879 264.389 97.6816C264.432 97.7715 264.506 97.8555 264.611 97.9336C264.717 98.0078 264.865 98.0781 265.057 98.1445C265.248 98.2109 265.492 98.2773 265.789 98.3438C266.309 98.4609 266.736 98.6016 267.072 98.7656C267.408 98.9297 267.658 99.1309 267.822 99.3691C267.986 99.6074 268.068 99.8965 268.068 100.236C268.068 100.514 268.01 100.768 267.893 100.998C267.779 101.229 267.613 101.428 267.395 101.596C267.18 101.76 266.922 101.889 266.621 101.982C266.324 102.072 265.99 102.117 265.619 102.117C265.061 102.117 264.588 102.018 264.201 101.818C263.814 101.619 263.521 101.361 263.322 101.045C263.123 100.729 263.023 100.395 263.023 100.043H264.113C264.129 100.34 264.215 100.576 264.371 100.752C264.527 100.924 264.719 101.047 264.945 101.121C265.172 101.191 265.396 101.227 265.619 101.227C265.916 101.227 266.164 101.188 266.363 101.109C266.566 101.031 266.721 100.924 266.826 100.787C266.932 100.65 266.984 100.494 266.984 100.318ZM272.146 95.6602V96.4922H268.719V95.6602H272.146ZM269.879 94.1191H270.963V100.43C270.963 100.645 270.996 100.807 271.062 100.916C271.129 101.025 271.215 101.098 271.32 101.133C271.426 101.168 271.539 101.186 271.66 101.186C271.75 101.186 271.844 101.178 271.941 101.162C272.043 101.143 272.119 101.127 272.17 101.115L272.176 102C272.09 102.027 271.977 102.053 271.836 102.076C271.699 102.104 271.533 102.117 271.338 102.117C271.072 102.117 270.828 102.064 270.605 101.959C270.383 101.854 270.205 101.678 270.072 101.432C269.943 101.182 269.879 100.846 269.879 100.424V94.1191Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "207",
  y: "110",
  width: "70",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "213",
  y: "116",
  width: "58",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./editor/useFormButton/index.pcss":
/*!*********************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./editor/useFormButton/index.pcss ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `div[id="jfb-use-form:sidebar"]{display:none}`, "",{"version":3,"sources":["webpack://./editor/useFormButton/index.pcss"],"names":[],"mappings":"AAAA,+BACI,YACJ","sourcesContent":["div[id=\"jfb-use-form:sidebar\"] {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./editor/welcomeBlock/index.pcss":
/*!********************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./editor/welcomeBlock/index.pcss ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.wp-block-jet-forms-welcome li.is-pro{position:relative;opacity:0.5}.wp-block-jet-forms-welcome li.is-pro .block-editor-block-variation-picker__variation::after{content:"PRO";position:absolute;top:0.4em;right:0.4em;background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));padding:0 0.2em;border-radius:0.5em;color:var(--wp-components-color-accent-inverted,#fff);border:1px solid var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));font-size:0.9em}.wp-block-jet-forms-welcome .block-editor-block-variation-picker__variations{gap:0.4em}.wp-block-jet-forms-welcome .block-editor-block-variation-picker__variations>li{width:-moz-min-content;width:min-content;margin:0.6em 0}.wp-block-jet-forms-welcome .block-editor-block-variation-picker__variations>li .components-button{padding:1.5em}`, "",{"version":3,"sources":["webpack://./editor/welcomeBlock/index.pcss"],"names":[],"mappings":"AACC,sCACC,iBAAkB,CAClB,WAiBD,CAbE,6FACC,aAAc,CACd,iBAAkB,CAClB,SAAU,CACV,WAAY,CACZ,gFAAmF,CACnF,eAAgB,CAChB,mBAAoB,CACpB,qDAAuD,CACvD,sFAAyF,CACzF,eACD,CAIF,6EACC,SAUD,CARC,gFACC,sBAAkB,CAAlB,iBAAkB,CAClB,cAKD,CAHC,mGACC,aACD","sourcesContent":[".wp-block-jet-forms-welcome {\r\n\tli.is-pro {\r\n\t\tposition: relative;\r\n\t\topacity: 0.5;\r\n\r\n\t\t.block-editor-block-variation-picker__variation {\r\n\r\n\t\t\t&::after {\r\n\t\t\t\tcontent: \"PRO\";\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0.4em;\r\n\t\t\t\tright: 0.4em;\r\n\t\t\t\tbackground: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));\r\n\t\t\t\tpadding: 0 0.2em;\r\n\t\t\t\tborder-radius: 0.5em;\r\n\t\t\t\tcolor: var(--wp-components-color-accent-inverted, #fff);\r\n\t\t\t\tborder: 1px solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));\r\n\t\t\t\tfont-size: 0.9em;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.block-editor-block-variation-picker__variations {\r\n\t\tgap: 0.4em;\r\n\r\n\t\t& > li {\r\n\t\t\twidth: min-content;\r\n\t\t\tmargin: 0.6em 0;\r\n\r\n\t\t\t.components-button {\r\n\t\t\t\tpadding: 1.5em;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/SelectPageControl.jsx":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/SelectPageControl.jsx ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.w2n4eg6>div{flex:1}.w2n4eg6 .components-base-control__field{margin-bottom:inherit;padding-bottom:0}
`, "",{"version":3,"sources":["webpack://./editor/useFormButton/SecondPart/SelectPageControl.jsx"],"names":[],"mappings":"AAAA,aAAuC,MAAO,CAAC,yCAAyC,qBAAqB,CAAC,gBAAiB","sourcesContent":[".w2n4eg6>div{-webkit-flex:1;-ms-flex:1;flex:1;}.w2n4eg6 .components-base-control__field{margin-bottom:inherit;padding-bottom:0;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/VideoInstructions.jsx":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/VideoInstructions.jsx ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.v1ja33m1{border:0;width:560px;height:315px;margin:0 auto}
`, "",{"version":3,"sources":["webpack://./editor/useFormButton/SecondPart/VideoInstructions.jsx"],"names":[],"mappings":"AAAA,UAAU,QAAQ,CAAC,WAAW,CAAC,YAAY,CAAC,aAAc","sourcesContent":[".v1ja33m1{border:0;width:560px;height:315px;margin:0 auto;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../node_modules/css-loader/dist/runtime/api.js":
/*!***************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************/
/***/ ((module) => {



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

/***/ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!**********************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \**********************************************************************/
/***/ ((module) => {



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

/***/ "./editor/useFormButton/index.pcss":
/*!*****************************************!*\
  !*** ./editor/useFormButton/index.pcss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!./index.pcss */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./editor/useFormButton/index.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./editor/welcomeBlock/index.pcss":
/*!****************************************!*\
  !*** ./editor/welcomeBlock/index.pcss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!./index.pcss */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./editor/welcomeBlock/index.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./editor/useFormButton/SecondPart/SelectPageControl.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/SelectPageControl.jsx":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./editor/useFormButton/SecondPart/SelectPageControl.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/SelectPageControl.jsx ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_SelectPageControl_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./SelectPageControl.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/SelectPageControl.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_SelectPageControl_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_SelectPageControl_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_SelectPageControl_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_SelectPageControl_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./editor/useFormButton/SecondPart/VideoInstructions.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/VideoInstructions.jsx":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./editor/useFormButton/SecondPart/VideoInstructions.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/VideoInstructions.jsx ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_VideoInstructions_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./VideoInstructions.jsx */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/useFormButton/SecondPart/VideoInstructions.jsx");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_VideoInstructions_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_VideoInstructions_jsx__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_VideoInstructions_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_wyw_in_js_webpack_loader_lib_outputCssLoader_js_cacheProvider_VideoInstructions_jsx__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!********************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!********************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*******************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "../../../../node_modules/@linaria/core/dist/index.mjs":
/*!*************************************************************!*\
  !*** ../../../../node_modules/@linaria/core/dist/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./editor/welcomeBlock/block.json":
/*!****************************************!*\
  !*** ./editor/welcomeBlock/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/welcome","title":"Welcome","category":"jet-form-builder-elements","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path d=\\"M38.68 13.32L40 18L41.32 13.32L46 12L41.32 10.68L40 6L38.68 10.68L34 12L38.68 13.32Z\\" fill=\\"#0F172A\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M14 29C14 27.3431 15.3431 26 17 26H25C26.6569 26 28 27.3431 28 29C28 30.6569 26.6569 32 25 32H17C15.3431 32 14 30.6569 14 29ZM17 28C16.4477 28 16 28.4477 16 29C16 29.5523 16.4477 30 17 30H25C25.5523 30 26 29.5523 26 29C26 28.4477 25.5523 28 25 28H17Z\\" fill=\\"#0F172A\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M17 34C15.3431 34 14 35.3431 14 37C14 38.6569 15.3431 40 17 40H31C32.6569 40 34 38.6569 34 37C34 35.3431 32.6569 34 31 34H17ZM16 37C16 36.4477 16.4477 36 17 36H31C31.5523 36 32 36.4477 32 37C32 37.5523 31.5523 38 31 38H17C16.4477 38 16 37.5523 16 37Z\\" fill=\\"#0F172A\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M14 47C14 45.3431 15.3431 44 17 44H23C24.6569 44 26 45.3431 26 47C26 48.6569 24.6569 50 23 50H17C15.3431 50 14 48.6569 14 47ZM17 46C16.4477 46 16 46.4477 16 47C16 47.5523 16.4477 48 17 48H23C23.5523 48 24 47.5523 24 47C24 46.4477 23.5523 46 23 46H17Z\\" fill=\\"#0F172A\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M12 18H31.5294L40 26.5714V54C40 56.2091 38.2091 58 36 58H12C9.79086 58 8 56.2091 8 54V22C8 19.7909 9.79086 18 12 18ZM38 54C38 55.1046 37.1046 56 36 56H12C10.8954 56 10 55.1046 10 54V22C10 20.8954 10.8954 20 12 20H29V25C29 27.2091 30.7909 29 33 29H38V54ZM37.6117 27L31 20.3096V25C31 26.1046 31.8954 27 33 27H37.6117Z\\" fill=\\"#0F172A\\"/>\\n<path d=\\"M47 31L45.46 25.54L40 24L45.46 22.46L47 17L48.54 22.46L54 24L48.54 25.54L47 31Z\\" fill=\\"#0F172A\\"/>\\n<path d=\\"M51.12 14.88L52 18L52.88 14.88L56 14L52.88 13.12L52 10L51.12 13.12L48 14L51.12 14.88Z\\" fill=\\"#0F172A\\"/>\\n</svg>","keywords":["jetformbuilder","start","welcome"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"attributes":{}}');

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./editor/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _welcomeBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomeBlock */ "./editor/welcomeBlock/index.js");
/* harmony import */ var _previewButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previewButton */ "./editor/previewButton/index.js");
/* harmony import */ var _useFormButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useFormButton */ "./editor/useFormButton/index.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useFormButton_blockBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useFormButton/blockBuilder */ "./editor/useFormButton/blockBuilder/index.js");






(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('jet.fb.register.fields', 'jet-form-builder/welcome-block', function (blocks) {
  blocks.push(_welcomeBlock__WEBPACK_IMPORTED_MODULE_0__);
  return blocks;
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)('jet-forms/use-form').registerBuilders([_useFormButton_blockBuilder__WEBPACK_IMPORTED_MODULE_5__["default"]]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBT0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUlBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQWdCQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBO0FBR0E7QUFBQTtBQVVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvZW1vdGlvbi1pcy1wcm9wLXZhbGlkLmVzbS5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5lc20uanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvY29weS1zbWFsbC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9lZGl0LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L2V4dGVybmFsLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L25leHQuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvcGVuY2lsLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L3BsdXMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3IvcHJldmlld0J1dHRvbi9QcmV2aWV3QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci9wcmV2aWV3QnV0dG9uL2FwcGVuZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci9wcmV2aWV3QnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3VzZUZvcm1CdXR0b24vRmlyc3RQYXJ0LmpzeCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci91c2VGb3JtQnV0dG9uL1NlY29uZFBhcnQvU2Vjb25kUGFydC5qc3giLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3IvdXNlRm9ybUJ1dHRvbi9TZWNvbmRQYXJ0L1NlbGVjdFBhZ2VDb250cm9sLmpzeCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci91c2VGb3JtQnV0dG9uL1NlY29uZFBhcnQvVmlkZW9JbnN0cnVjdGlvbnMuanN4Iiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3VzZUZvcm1CdXR0b24vVXNlRm9ybUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3IvdXNlRm9ybUJ1dHRvbi9ibG9ja0J1aWxkZXIvQmxvY2tCdWlsZGVyLmpzeCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci91c2VGb3JtQnV0dG9uL2Jsb2NrQnVpbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci91c2VGb3JtQnV0dG9uL2hvb2tzL3VzZVNldHRpbmdzLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3VzZUZvcm1CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3Ivd2VsY29tZUJsb2NrL2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3Ivd2VsY29tZUJsb2NrL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3dlbGNvbWVCbG9jay9wcmV2aWV3LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3VzZUZvcm1CdXR0b24vaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci93ZWxjb21lQmxvY2svaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci91c2VGb3JtQnV0dG9uL1NlY29uZFBhcnQvU2VsZWN0UGFnZUNvbnRyb2wuanN4PzBmMWMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3IvdXNlRm9ybUJ1dHRvbi9TZWNvbmRQYXJ0L1ZpZGVvSW5zdHJ1Y3Rpb25zLmpzeD83ODIwIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3IvdXNlRm9ybUJ1dHRvbi9pbmRleC5wY3NzPzdhNmMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3Ivd2VsY29tZUJsb2NrL2luZGV4LnBjc3M/MWI1ZiIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci91c2VGb3JtQnV0dG9uL1NlY29uZFBhcnQvU2VsZWN0UGFnZUNvbnRyb2wuanN4PzE5NTciLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3IvdXNlRm9ybUJ1dHRvbi9TZWNvbmRQYXJ0L1ZpZGVvSW5zdHJ1Y3Rpb25zLmpzeD81ZDRlIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb3JlRGF0YVwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkb21SZWFkeVwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVkaXRQb3N0XCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInBsdWdpbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbGluYXJpYS9jb3JlL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbGluYXJpYS9yZWFjdC9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFiYnJ8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZGlzYWJsZVJlbW90ZVBsYXliYWNrfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGVudGVyS2V5SGludHxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHRyYW5zbGF0ZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluY3JlbWVudGFsfGZhbGxiYWNrfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxvcHRpb258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaXNQcm9wVmFsaWQgPSAvKiAjX19QVVJFX18gKi9tZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCB7IGlzUHJvcFZhbGlkIGFzIGRlZmF1bHQgfTtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgbWVtb2l6ZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGNvcHlTbWFsbCA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgZDogXCJNNS42MjUgNS41aDkuNzVjLjA2OSAwIC4xMjUuMDU2LjEyNS4xMjV2OS43NWEuMTI1LjEyNSAwIDAgMS0uMTI1LjEyNWgtOS43NWEuMTI1LjEyNSAwIDAgMS0uMTI1LS4xMjV2LTkuNzVjMC0uMDY5LjA1Ni0uMTI1LjEyNS0uMTI1Wk00IDUuNjI1QzQgNC43MjggNC43MjggNCA1LjYyNSA0aDkuNzVDMTYuMjczIDQgMTcgNC43MjggMTcgNS42MjV2OS43NWMwIC44OTgtLjcyNyAxLjYyNS0xLjYyNSAxLjYyNWgtOS43NUExLjYyNSAxLjYyNSAwIDAgMSA0IDE1LjM3NXYtOS43NVptMTQuNSAxMS42NTZ2LTlIMjB2OUMyMCAxOC44IDE4Ljc3IDIwIDE3LjI1MSAyMEg2LjI1di0xLjVoMTEuMDAxYy42OSAwIDEuMjQ5LS41MjggMS4yNDktMS4yMTlaXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGNvcHlTbWFsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcHktc21hbGwuanMubWFwIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHBlbmNpbCB9IGZyb20gJy4vcGVuY2lsJztcbmV4cG9ydCBkZWZhdWx0IHBlbmNpbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVkaXQuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFBhdGgsIFNWRyB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBleHRlcm5hbCA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIk0xOS41IDQuNWgtN1Y2aDQuNDRsLTUuOTcgNS45NyAxLjA2IDEuMDZMMTggNy4wNnY0LjQ0aDEuNXYtN1ptLTEzIDFhMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDEwYTIgMiAwIDAgMCAyLTJ2LTNIMTd2M2EuNS41IDAgMCAxLS41LjVoLTEwYS41LjUgMCAwIDEtLjUtLjV2LTEwYS41LjUgMCAwIDEgLjUtLjVoM1Y1LjVoLTNaXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGV4dGVybmFsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXh0ZXJuYWwuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBuZXh0ID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTYuNiA2TDUuNCA3bDQuNSA1LTQuNSA1IDEuMSAxIDUuNS02LTUuNC02em02IDBsLTEuMSAxIDQuNSA1LTQuNSA1IDEuMSAxIDUuNS02LTUuNS02elwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBuZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV4dC5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IHBlbmNpbCA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIm0xOSA3LTMtMy04LjUgOC41LTEgNCA0LTFMMTkgN1ptLTcgMTEuNUg1VjIwaDd2LTEuNVpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgcGVuY2lsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGVuY2lsLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgcGx1cyA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIk0xMSAxMi41VjE3LjVIMTIuNVYxMi41SDE3LjVWMTFIMTIuNVY2SDExVjExSDZWMTIuNUgxMVpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgcGx1cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsdXMuanMubWFwIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgZXh0ZXJuYWwgfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcclxuXHJcbmZ1bmN0aW9uIFByZXZpZXdCdXR0b24oKSB7XHJcblx0Y29uc3QgWyBwcmV2aWV3UGFnZSwgc2V0UHJldmlld1BhZ2UgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRjb25zdCBpc1NhdmluZ0Zvcm0gPSB1c2VTZWxlY3QoIHNlbGVjdCA9PiB7XHJcblx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuaXNTYXZpbmdQb3N0KCk7XHJcblx0fSwgW10gKTtcclxuXHJcblx0Y29uc3Qgd2FzU2F2aW5nID0gdXNlUmVmKCBmYWxzZSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggIXByZXZpZXdQYWdlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoICF3YXNTYXZpbmcuY3VycmVudCAmJiBpc1NhdmluZ0Zvcm0gKSB7XHJcblx0XHRcdHdhc1NhdmluZy5jdXJyZW50ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHdhc1NhdmluZy5jdXJyZW50ICYmICFpc1NhdmluZ0Zvcm0gKSB7XHJcblx0XHRcdC8vIFRoZSBwb3N0IGhhcyBmaW5pc2hlZCBzYXZpbmdcclxuXHRcdFx0cHJldmlld1BhZ2UubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdHdhc1NhdmluZy5jdXJyZW50ID0gZmFsc2U7IC8vIFJlc2V0IHRoZSBmbGFnXHJcblx0XHR9XHJcblx0fSwgWyBpc1NhdmluZ0Zvcm0gXSApO1xyXG5cclxuXHRjb25zdCBvcGVuUHJldmlld1BhZ2UgPSAoKSA9PiB7XHJcblx0XHRpZiAoIHByZXZpZXdQYWdlICYmICFwcmV2aWV3UGFnZT8uY2xvc2VkICkge1xyXG5cdFx0XHRwcmV2aWV3UGFnZS5mb2N1cygpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldFByZXZpZXdQYWdlKCB3aW5kb3cub3BlbiggSkZCT25ib2FyZGluZ0NvbmZpZy5wcmV2aWV3VVJMICkgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPEJ1dHRvblxyXG5cdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcclxuXHRcdGljb249eyBleHRlcm5hbCB9XHJcblx0XHRvbkNsaWNrPXsgb3BlblByZXZpZXdQYWdlIH1cclxuXHQvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJldmlld0J1dHRvbjsiLCJpbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuaW1wb3J0IFByZXZpZXdCdXR0b24gZnJvbSAnLi9QcmV2aWV3QnV0dG9uJztcclxuXHJcbmNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbmJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCAnamZiLXByZXZpZXctd3JhcHBlcicgKTtcclxuXHJcbi8vIFJlbmRlciBvdXIgYnV0dG9uLlxyXG5jcmVhdGVSb290KCBidXR0b25EaXYgKS5yZW5kZXIoIDxQcmV2aWV3QnV0dG9uLz4gKTtcclxuXHJcbmNvbnN0IGFwcGVuZEJ1dHRvbiA9IGZ1bmN0aW9uICggdW5zdWJzY3JpYmVDYWxsYmFjayApIHtcclxuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5lZGl0LXBvc3QtaGVhZGVyX19zZXR0aW5ncycsXHJcblx0KTtcclxuXHJcblx0aWYgKCAhaGVhZGVyICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHR1bnN1YnNjcmliZUNhbGxiYWNrKCk7XHJcblx0aGVhZGVyLmluc2VydEJlZm9yZShcclxuXHRcdGJ1dHRvbkRpdixcclxuXHRcdGhlYWRlci5xdWVyeVNlbGVjdG9yKCAnLmVkaXRvci1wb3N0LXB1Ymxpc2gtYnV0dG9uJyApLFxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBlbmRCdXR0b247IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcclxuaW1wb3J0IGRvbVJlYWR5IGZyb20gJ0B3b3JkcHJlc3MvZG9tLXJlYWR5JztcclxuaW1wb3J0IGFwcGVuZEJ1dHRvbiBmcm9tICcuL2FwcGVuZEJ1dHRvbic7XHJcblxyXG5kb21SZWFkeSggKCkgPT4ge1xyXG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKCAoKSA9PiBhcHBlbmRCdXR0b24oIHVuc3Vic2NyaWJlICkgKTtcclxufSApOyIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQnVpbGRlckhlbHBTbG90RmlsbCxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmZ1bmN0aW9uIEZpcnN0UGFydCgpIHtcclxuXHRjb25zdCBidWlsZGVycyA9IHVzZVNlbGVjdCggc2VsZWN0ID0+IChcclxuXHRcdHNlbGVjdCggJ2pldC1mb3Jtcy91c2UtZm9ybScgKS5nZXRCdWlsZGVycygpXHJcblx0KSwgW10gKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8aDM+XHJcblx0XHRcdHsgX18oXHJcblx0XHRcdFx0JzEuIEhvdyB5b3Ugd2FudCB0byB1c2UgdGhlIGZvcm0/JyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdCkgfVxyXG5cdFx0PC9oMz5cclxuXHRcdDxwPlxyXG5cdFx0XHR7IF9fKFxyXG5cdFx0XHRcdCdQbGVhc2Ugc2VsZWN0IHRoZSBtZXRob2QgaG93IHlvdSBwbGFubmluZyB0byB1c2UgdGhlIGZvcm0gLSBhcyBlbGVtZW50IG9mIHBhZ2UgYnVpbGRlciwgYXMgYmxvY2sgb3IgYSBwbGFpbiBzaG9ydGNvZGUnLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KSB9XHJcblx0XHQ8L3A+XHJcblx0XHQ8RmxleCBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIHdyYXA+XHJcblx0XHRcdHsgYnVpbGRlcnMubWFwKCAoIHsgbmFtZSwgdmlldzogQnVpbGRlclZpZXcgfSApID0+IChcclxuXHRcdFx0XHQ8QnVpbGRlclZpZXcga2V5PXsgbmFtZSB9IG5hbWU9eyBuYW1lIH0vPlxyXG5cdFx0XHQpICkgfVxyXG5cdFx0PC9GbGV4PlxyXG5cdFx0PEJ1aWxkZXJIZWxwU2xvdEZpbGwuU2xvdC8+XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJzdFBhcnQ7IiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBlZGl0LCBwbHVzIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XHJcbmltcG9ydCBWaWRlb0luc3RydWN0aW9ucyBmcm9tICcuL1ZpZGVvSW5zdHJ1Y3Rpb25zJztcclxuaW1wb3J0IHVzZVNldHRpbmdzIGZyb20gJy4uL2hvb2tzL3VzZVNldHRpbmdzJztcclxuaW1wb3J0IFNlbGVjdFBhZ2VDb250cm9sIGZyb20gJy4vU2VsZWN0UGFnZUNvbnRyb2wnO1xyXG5cclxuZnVuY3Rpb24gU2Vjb25kUGFydCgpIHtcclxuXHRjb25zdCBbIHNldHRpbmdzLCB1cGRhdGVTZXR0aW5ncyBdID0gdXNlU2V0dGluZ3MoKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8aDM+XHJcblx0XHRcdHsgX18oXHJcblx0XHRcdFx0JzIuIFdoZXJlIHlvdSB3YW50IHRvIHVzZSB0aGUgZm9ybT8nLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KSB9XHJcblx0XHQ8L2gzPlxyXG5cdFx0PHA+XHJcblx0XHRcdHsgX18oXHJcblx0XHRcdFx0J1doZXJlIHlvdSB3YW50IHRvIHBsYWNlIHRoZSBmb3JtJyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdCkgfVxyXG5cdFx0PC9wPlxyXG5cdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXsgNCB9PlxyXG5cdFx0XHQ8RmxleCBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIHdyYXAgZ2FwPXsgNCB9PlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB1cGRhdGVTZXR0aW5ncyhcclxuXHRcdFx0XHRcdFx0eyBwYWdlVHlwZTogJ3NlbGVjdCcgfSApIH1cclxuXHRcdFx0XHRcdGljb249eyBlZGl0IH1cclxuXHRcdFx0XHRcdHZhcmlhbnQ9eyAnc2VsZWN0JyA9PT0gc2V0dGluZ3MucGFnZVR5cGVcclxuXHRcdFx0XHRcdCAgICAgICAgICA/ICdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0ICAgICAgICAgIDogJ3NlY29uZGFyeScgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHRcdCdTZWxlY3QgcGFnZSB0byBhZGQgdGhlIGZvcm0nLFxyXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8cCBzdHlsZT17IHsgbWFyZ2luOiAndW5zZXQnIH0gfT5cclxuXHRcdFx0XHRcdHsgX18oICdvcicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHVwZGF0ZVNldHRpbmdzKCB7IHBhZ2VUeXBlOiAnbmV3JyB9ICkgfVxyXG5cdFx0XHRcdFx0aWNvbj17IHBsdXMgfVxyXG5cdFx0XHRcdFx0dmFyaWFudD17ICduZXcnID09PSBzZXR0aW5ncy5wYWdlVHlwZVxyXG5cdFx0XHRcdFx0ICAgICAgICAgID8gJ3ByaW1hcnknXHJcblx0XHRcdFx0XHQgICAgICAgICAgOiAnc2Vjb25kYXJ5JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBfXyhcclxuXHRcdFx0XHRcdFx0J0NyZWF0ZSBuZXcgcGFnZScsXHJcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdHsgJ3NlbGVjdCcgPT09IHNldHRpbmdzLnBhZ2VUeXBlICYmIDxTZWxlY3RQYWdlQ29udHJvbC8+IH1cclxuXHRcdFx0eyAnbmV3JyA9PT0gc2V0dGluZ3MucGFnZVR5cGUgJiYgbnVsbCB9XHJcblx0XHRcdDxWaWRlb0luc3RydWN0aW9ucy8+XHJcblx0XHQ8L0ZsZXg+XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRQYXJ0OyIsImltcG9ydCB1c2VTZXR0aW5ncyBmcm9tICcuLi9ob29rcy91c2VTZXR0aW5ncyc7XHJcbmltcG9ydCB7IENvbWJvYm94Q29udHJvbCwgRmxleCwgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgeyB1c2VFbnRpdHlSZWNvcmRzIH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcclxuXHJcbmNvbnN0IHsgTGFiZWwgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IFdyYXBwZXJDb21ib2JveFdpdGhCdXR0b24gPSBzdHlsZWQoIEZsZXggKWBcclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogaW5oZXJpdDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFNlbGVjdFBhZ2VDb250cm9sKCkge1xyXG5cdGNvbnN0IFsgc2V0dGluZ3MsIHVwZGF0ZVNldHRpbmdzIF0gPSB1c2VTZXR0aW5ncygpO1xyXG5cdGNvbnN0IFsgc2VhcmNoLCBzZXRTZWFyY2ggXSAgICAgICAgPSB1c2VTdGF0ZSggJycgKTtcclxuXHJcblx0Y29uc3QgcGFnZXMgICAgID0gdXNlRW50aXR5UmVjb3JkcyhcclxuXHRcdCdwb3N0VHlwZScsXHJcblx0XHQncGFnZScsXHJcblx0XHR7XHJcblx0XHRcdHBlcl9wYWdlOiAyMCxcclxuXHRcdFx0c2VhcmNoLFxyXG5cdFx0fSxcclxuXHQpO1xyXG5cdGNvbnN0IHBhZ2VzTGlzdCA9IHBhZ2VzLnJlY29yZHM/Lm1hcD8uKCBwYWdlID0+IChcclxuXHRcdHtcclxuXHRcdFx0dmFsdWU6IHBhZ2UuaWQsXHJcblx0XHRcdGxhYmVsOiBwYWdlLnRpdGxlLnJhdyxcclxuXHRcdH1cclxuXHQpICkgPz8gW107XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PExhYmVsPlxyXG5cdFx0XHR7IF9fKFxyXG5cdFx0XHRcdCdTZWxlY3QgYSBwYWdlJyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdCkgfVxyXG5cdFx0PC9MYWJlbD5cclxuXHRcdDxXcmFwcGVyQ29tYm9ib3hXaXRoQnV0dG9uIGFsaWduPVwiZmxleC1zdGFydFwiPlxyXG5cdFx0XHQ8Q29tYm9ib3hDb250cm9sXHJcblx0XHRcdFx0b3B0aW9ucz17IHBhZ2VzTGlzdCB9XHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5wYWdlSWQgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgcGFnZUlkID0+IHVwZGF0ZVNldHRpbmdzKCB7IHBhZ2VJZCB9ICkgfVxyXG5cdFx0XHRcdG9uRmlsdGVyVmFsdWVDaGFuZ2U9eyBzZXRTZWFyY2ggfVxyXG5cdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXHJcblx0XHRcdC8+XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXHJcblx0XHRcdFx0b25DbGljaz17ICgpID0+IHt9IH1cclxuXHRcdFx0XHRpc0J1c3k9eyBmYWxzZSB9XHJcblx0XHRcdFx0ZGlzYWJsZWQ9eyBmYWxzZSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IF9fKCAnVXNlIHRoZSBmb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXItcGRmJyApIH1cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHQ8L1dyYXBwZXJDb21ib2JveFdpdGhCdXR0b24+XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RQYWdlQ29udHJvbDsiLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5cclxuY29uc3QgVmlkZW9JZnJhbWUgPSBzdHlsZWQuaWZyYW1lYFxyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgd2lkdGg6IDU2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gVmlkZW9JbnN0cnVjdGlvbnMoKSB7XHJcblx0Y29uc3QgY3VycmVudEJ1aWxkZXIgPSB1c2VTZWxlY3QoIHNlbGVjdCA9PiAoXHJcblx0XHRzZWxlY3QoICdqZXQtZm9ybXMvdXNlLWZvcm0nICkuZ2V0Q3VycmVudEJ1aWxkZXIoKVxyXG5cdCksIFtdICk7XHJcblxyXG5cdGNvbnN0IFsgc2hvd1ZpZGVvLCBzZXRTaG93VmlkZW8gXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxkaXY+XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHR2YXJpYW50PVwibGlua1wiXHJcblx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dWaWRlbyggcHJldiA9PiAhcHJldiApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgc2hvd1ZpZGVvXHJcblx0XHRcdFx0ICA/IF9fKFxyXG5cdFx0XHRcdFx0XHQnSGlkZSB2aWRlbyBpbnN0cnVjdGlvbnMnLFxyXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHQpIDogX18oXHJcblx0XHRcdFx0XHRcdCdTaG93IHZpZGVvIGluc3RydWN0aW9ucycsXHJcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdCkgfVxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PFZpZGVvSWZyYW1lXHJcblx0XHRcdHNyYz17IGN1cnJlbnRCdWlsZGVyLmVtYmVkLnNyYyB9XHJcblx0XHRcdGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCJcclxuXHRcdFx0cmVmZXJyZXJQb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCJcclxuXHRcdFx0YWxsb3dGdWxsU2NyZWVuXHJcblx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdGRpc3BsYXk6IHNob3dWaWRlbyA/ICdibG9jaycgOiAnbm9uZScsXHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvSW5zdHJ1Y3Rpb25zOyIsImltcG9ydCB7IFBsdWdpblNpZGViYXIgfSBmcm9tICdAd29yZHByZXNzL2VkaXQtcG9zdCc7XHJcbmltcG9ydCB7IG5leHQgfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQge1xyXG5cdE1vZGFsLFxyXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcclxuaW1wb3J0IEZpcnN0UGFydCBmcm9tICcuL0ZpcnN0UGFydCc7XHJcbmltcG9ydCBTZWNvbmRQYXJ0IGZyb20gJy4vU2Vjb25kUGFydC9TZWNvbmRQYXJ0JztcclxuXHJcbmZ1bmN0aW9uIFVzZUZvcm1CdXR0b24oKSB7XHJcblx0Y29uc3QgeyBjbG9zZUdlbmVyYWxTaWRlYmFyIH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdC1wb3N0JyApO1xyXG5cclxuXHRyZXR1cm4gPFBsdWdpblNpZGViYXJcclxuXHRcdGljb249eyBuZXh0IH1cclxuXHRcdG5hbWU9XCJzaWRlYmFyXCJcclxuXHRcdHRpdGxlPXsgX18oICdVc2UgdGhlIGZvcm0nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0PlxyXG5cdFx0PE1vZGFsXHJcblx0XHRcdHRpdGxlPXsgX18oICdVc2UgdGhlIGZvcm0nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgY2xvc2VHZW5lcmFsU2lkZWJhciB9XHJcblx0XHQ+XHJcblx0XHRcdDxGaXJzdFBhcnQvPlxyXG5cdFx0XHQ8U2Vjb25kUGFydC8+XHJcblx0XHQ8L01vZGFsPlxyXG5cdDwvUGx1Z2luU2lkZWJhcj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZUZvcm1CdXR0b247IiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgY29weVNtYWxsIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHVzZVNldHRpbmdzIGZyb20gJy4uL2hvb2tzL3VzZVNldHRpbmdzJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBCdWlsZGVySGVscFNsb3RGaWxsLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gQmxvY2tCdWlsZGVyKCB7IG5hbWUgfSApIHtcclxuXHRjb25zdCBbIHNldHRpbmdzLCB1cGRhdGVTZXR0aW5ncyBdID0gdXNlU2V0dGluZ3MoKTtcclxuXHJcblx0Y29uc3QgaXNBY3RpdmUgPSBuYW1lID09PSBzZXR0aW5ncy5idWlsZGVyO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxCdXR0b25cclxuXHRcdFx0b25DbGljaz17ICgpID0+IHVwZGF0ZVNldHRpbmdzKCB7IGJ1aWxkZXI6IG5hbWUgfSApIH1cclxuXHRcdFx0aWNvbj17IGNvcHlTbWFsbCB9XHJcblx0XHRcdHZhcmlhbnQ9eyBpc0FjdGl2ZSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknIH1cclxuXHRcdD5cclxuXHRcdFx0eyBfXyhcclxuXHRcdFx0XHQnQmxvY2sgZm9yIEJsb2NrIEVkaXRvcicsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpIH1cclxuXHRcdDwvQnV0dG9uPlxyXG5cdFx0eyBpc0FjdGl2ZSAmJiA8QnVpbGRlckhlbHBTbG90RmlsbC5GaWxsPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHR7IF9fKFxyXG5cdFx0XHRcdFx0J1RoZSBmb3JtIHdpbGwgYmUgYXV0b21hdGljYWxseSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBzZWxlY3RlZCBwYWdlJyxcclxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9CdWlsZGVySGVscFNsb3RGaWxsLkZpbGw+IH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrQnVpbGRlcjsiLCJpbXBvcnQgQmxvY2tCdWlsZGVyIGZyb20gJy4vQmxvY2tCdWlsZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnYmxvY2tzJyxcclxuXHR2aWV3OiBCbG9ja0J1aWxkZXIsXHJcbn07IiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcblxyXG4vKipcclxuICogQHJldHVybnMge1tPYmplY3QsIEZ1bmN0aW9uXX1cclxuICovXHJcbmZ1bmN0aW9uIHVzZVNldHRpbmdzKCkge1xyXG5cdGNvbnN0IHsgdXBkYXRlU2V0dGluZ3MgfSA9IHVzZURpc3BhdGNoKCAnamV0LWZvcm1zL3VzZS1mb3JtJyApO1xyXG5cclxuXHRjb25zdCBzZXR0aW5ncyA9IHVzZVNlbGVjdCggc2VsZWN0ID0+IChcclxuXHRcdHNlbGVjdCggJ2pldC1mb3Jtcy91c2UtZm9ybScgKS5nZXRTZXR0aW5ncygpXHJcblx0KSwgW10gKTtcclxuXHJcblx0cmV0dXJuIFsgc2V0dGluZ3MsIHVwZGF0ZVNldHRpbmdzIF07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNldHRpbmdzOyIsImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQHdvcmRwcmVzcy9wbHVnaW5zJztcclxuaW1wb3J0IFVzZUZvcm1CdXR0b24gZnJvbSAnLi9Vc2VGb3JtQnV0dG9uJztcclxuaW1wb3J0ICcuL2luZGV4LnBjc3MnXHJcblxyXG5yZWdpc3RlclBsdWdpbihcclxuXHQnamZiLXVzZS1mb3JtJyxcclxuXHR7IHJlbmRlcjogVXNlRm9ybUJ1dHRvbiB9LFxyXG4pOyIsImltcG9ydCBwcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGNsb25lRWxlbWVudCxcclxuXHQgICAgICBDaGlsZHJlbixcclxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUGxhY2Vob2xkZXIsXHJcblx0ICAgICAgRmxleCxcclxuXHQgICAgICBFeHRlcm5hbExpbmssXHJcblx0ICAgICAgVG9vbHRpcCxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcclxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZVNlbGVjdCxcclxuXHQgICAgICB1c2VEaXNwYXRjaCxcclxuICAgICAgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUGF0dGVybkluc2VydGVyQnV0dG9uLFxyXG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCBIZWxwSWNvbiA9IDxzdmdcclxuXHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcblx0d2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuXHRmb2N1c2FibGU9XCJmYWxzZVwiXHJcblx0c3R5bGU9eyB7XHJcblx0XHRjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXHJcblx0fSB9XHJcbj5cclxuXHQ8cGF0aFxyXG5cdFx0ZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcblx0XHRkPVwiTTEyIDQuNzVhNy4yNSA3LjI1IDAgMTAwIDE0LjUgNy4yNSA3LjI1IDAgMDAwLTE0LjV6TTMuMjUgMTJhOC43NSA4Ljc1IDAgMTExNy41IDAgOC43NSA4Ljc1IDAgMDEtMTcuNSAwek0xMiA4Ljc1YTEuNSAxLjUgMCAwMS4xNjcgMi45OWMtLjQ2NS4wNTItLjkxNy40NC0uOTE3IDEuMDFWMTRoMS41di0uODQ1QTMgMyAwIDEwOSAxMC4yNWgxLjVhMS41IDEuNSAwIDAxMS41LTEuNXpNMTEuMjUgMTV2MS41aDEuNVYxNWgtMS41elwiLz5cclxuPC9zdmc+O1xyXG5cclxuZnVuY3Rpb24gV2VsY29tZUJsb2NrRWRpdCggeyBhdHRyaWJ1dGVzIH0gKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3QgZWxlbWVudHMgPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL3BhdHRlcm5zJyApLmdldFR5cGVzKCkubWFwKFxyXG5cdFx0XHQoIHsgdmlldzogVmlldywgLi4ucGF0dGVybiB9ICkgPT4gPFZpZXcgcGF0dGVybj17IHBhdHRlcm4gfS8+LFxyXG5cdFx0KSxcclxuXHRcdFtdLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNhdmVSZWNvcmQgPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL3BhdHRlcm5zJyApLmdldFNldHRpbmcoICdzYXZlUmVjb3JkJyApLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHsgdXBkYXRlU2V0dGluZ3MgfSA9IHVzZURpc3BhdGNoKCAnamV0LWZvcm1zL3BhdHRlcm5zJyApO1xyXG5cclxuXHRpZiAoIGF0dHJpYnV0ZXMuaXNQcmV2aWV3ICkge1xyXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9eyB7XHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0fSB9PlxyXG5cdFx0XHR7IHByZXZpZXcgfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0gPlxyXG5cdFx0PFBsYWNlaG9sZGVyXHJcblx0XHRcdGljb249eyAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0bGFiZWw9eyBfXyggJ1NlbGVjdCBmb3JtIHBhdHRlcm4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdGluc3RydWN0aW9ucz17IF9fKFxyXG5cdFx0XHRcdCdZb3UgY2FuIHNlbGVjdCBvbmUgb2YgcHJlZGVmaW5lZCBsYXlvdXQsIG9yIGJ1aWxkIGN1c3RvbScsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpIH1cclxuXHRcdD5cclxuXHRcdFx0PHVsXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvbnMgamV0LWZiXCJcclxuXHRcdFx0XHRyb2xlPVwibGlzdFwiXHJcblx0XHRcdFx0YXJpYS1sYWJlbD17IF9fKCAnRm9ybSBwYXR0ZXJucycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgQ2hpbGRyZW4ubWFwKFxyXG5cdFx0XHRcdFx0ZWxlbWVudHMsXHJcblx0XHRcdFx0XHRjbG9uZUVsZW1lbnQsXHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdDwvdWw+XHJcblx0XHRcdDxGbGV4XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3NraXBcIlxyXG5cdFx0XHRcdGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxGbGV4XHJcblx0XHRcdFx0XHRqdXN0aWZ5PVwiZmxleC1zdGFydFwiXHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICdhdXRvJyxcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxQYXR0ZXJuSW5zZXJ0ZXJCdXR0b25cclxuXHRcdFx0XHRcdFx0cGF0dGVybk5hbWU9eyAnZGVmYXVsdCcgfVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0XHRcdFx0c3R5bGU9eyB7IG1hcmdpbjogJ3Vuc2V0JyB9IH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ1N0YXJ0IGZyb20gc2NyYXRjaCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdDwvUGF0dGVybkluc2VydGVyQnV0dG9uPlxyXG5cdFx0XHRcdFx0PEV4dGVybmFsTGlua1xyXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vZmVhdHVyZXMvY3JlYXRpbmctYS1mb3JtL1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHRcdFx0J0xlYXJuIG1vcmUgYWJvdXQgY3JlYXRpbmcgZm9ybXMnLFxyXG5cdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHQ8L0V4dGVybmFsTGluaz5cclxuXHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBzYXZlUmVjb3JkIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2F2ZVJlY29yZCA9PiB1cGRhdGVTZXR0aW5ncygge1xyXG5cdFx0XHRcdFx0XHRzYXZlUmVjb3JkLFxyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdGZsZXhMYWJlbFByb3BzPXsge1xyXG5cdFx0XHRcdFx0XHRhbGlnbjogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8RmxleD5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ1NhdmUgZm9ybSByZWNvcmRzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHQ8VG9vbHRpcFxyXG5cdFx0XHRcdFx0XHRcdHRleHQ9eyBfXyhcclxuXHRcdFx0XHRcdFx0XHRcdGBBZGRzIFwiU2F2ZSBGb3JtIFJlY29yZFwiIGFjdGlvbiB0byBzdG9yZSBcclxuYWxsIGZvcm0gc3VibWlzc2lvbnMgaW50byBkYXRhYmFzZWAsXHJcblx0XHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHRcdFx0ZGVsYXk9eyAyMDAgfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0eyBIZWxwSWNvbiB9XHJcblx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHQ8L1RvZ2dsZUNvbnRyb2w+XHJcblx0XHRcdDwvRmxleD5cclxuXHRcdDwvUGxhY2Vob2xkZXI+XHJcblx0PC9kaXY+O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZUJsb2NrRWRpdDsiLCJpbXBvcnQgV2VsY29tZUJsb2NrRWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcclxuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIG5hbWUsXHJcblx0ICAgICAgaWNvbixcclxuICAgICAgfSA9IG1ldGFkYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbm1ldGFkYXRhLmF0dHJpYnV0ZXMuaXNQcmV2aWV3ID0ge1xyXG5cdCd0eXBlJzogJ2Jvb2xlYW4nLFxyXG5cdCdkZWZhdWx0JzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGRlc2NyaXB0aW9uOiBfXyhcclxuXHRcdGBVc2UgdGhlIFdlbGNvbWUgYmxvY2sgdG8gcXVpY2tseSBmZXRjaCBhbGwgcHJlLW1hZGUgRm9ybSBQYXR0ZXJucywgc3RhcnQgYnVpbGRpbmcgZnJvbSBzY3JhdGNoLCBnZW5lcmF0ZSB2aWEgQUksIHNhdmUgZm9ybSByZWNvcmRzLCBldGMuYCxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGVkaXQ6IFdlbGNvbWVCbG9ja0VkaXQsXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3MsXHJcbn07IiwiY29uc3QgcHJldmlldyA9IChcclxuXHQ8c3ZnIHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgdmlld0JveD1cIjAgMCAyOTggMTQ0XCIgZmlsbD1cIm5vbmVcIlxyXG5cdCAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0PHJlY3Qgd2lkdGg9XCIyOThcIiBoZWlnaHQ9XCIxNDRcIiBmaWxsPVwiI0UyRThGMFwiLz5cclxuXHRcdDxyZWN0IHg9XCIxMlwiIHk9XCIxMlwiIHdpZHRoPVwiODZcIiBoZWlnaHQ9XCIxMjBcIiByeD1cIjRcIiBmaWxsPVwid2hpdGVcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMjVcIiB5PVwiMjVcIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiByeD1cIjRcIiBmaWxsPVwiI0YxRjVGOVwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNNDcuOCA0MUM0Ny4zNTgyIDQxIDQ3IDQxLjQ0NzcgNDcgNDJDNDcgNDIuNTUyMyA0Ny4zNTgyIDQzIDQ3LjggNDNINjIuMkM2Mi42NDE4IDQzIDYzIDQyLjU1MjMgNjMgNDJDNjMgNDEuNDQ3NyA2Mi42NDE4IDQxIDYyLjIgNDFINDcuOFpcIlxyXG5cdFx0XHRmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNNDMgNTBDNDMgNDguMzQzMSA0NC4zNDMxIDQ3IDQ2IDQ3SDY0QzY1LjY1NjkgNDcgNjcgNDguMzQzMSA2NyA1MEM2NyA1MS42NTY5IDY1LjY1NjkgNTMgNjQgNTNINDZDNDQuMzQzMSA1MyA0MyA1MS42NTY5IDQzIDUwWk00NiA0OUM0NS40NDc3IDQ5IDQ1IDQ5LjQ0NzcgNDUgNTBDNDUgNTAuNTUyMyA0NS40NDc3IDUxIDQ2IDUxSDY0QzY0LjU1MjMgNTEgNjUgNTAuNTUyMyA2NSA1MEM2NSA0OS40NDc3IDY0LjU1MjMgNDkgNjQgNDlINDZaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk00NiA1NUM0NC4zNDMxIDU1IDQzIDU2LjM0MzEgNDMgNThDNDMgNTkuNjU2OSA0NC4zNDMxIDYxIDQ2IDYxSDY0QzY1LjY1NjkgNjEgNjcgNTkuNjU2OSA2NyA1OEM2NyA1Ni4zNDMxIDY1LjY1NjkgNTUgNjQgNTVINDZaTTQ1IDU4QzQ1IDU3LjQ0NzcgNDUuNDQ3NyA1NyA0NiA1N0g2NEM2NC41NTIzIDU3IDY1IDU3LjQ0NzcgNjUgNThDNjUgNTguNTUyMyA2NC41NTIzIDU5IDY0IDU5SDQ2QzQ1LjQ0NzcgNTkgNDUgNTguNTUyMyA0NSA1OFpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTQ5IDY2QzQ5IDY0LjM0MzEgNTAuMzQzMSA2MyA1MiA2M0g1OEM1OS42NTY5IDYzIDYxIDY0LjM0MzEgNjEgNjZDNjEgNjcuNjU2OSA1OS42NTY5IDY5IDU4IDY5SDUyQzUwLjM0MzEgNjkgNDkgNjcuNjU2OSA0OSA2NlpNNTIgNjVDNTEuNDQ3NyA2NSA1MSA2NS40NDc3IDUxIDY2QzUxIDY2LjU1MjMgNTEuNDQ3NyA2NyA1MiA2N0g1OEM1OC41NTIzIDY3IDU5IDY2LjU1MjMgNTkgNjZDNTkgNjUuNDQ3NyA1OC41NTIzIDY1IDU4IDY1SDUyWlwiXHJcblx0XHQgICAgICBmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNMzkgMzlDMzkgMzYuNzkwOSA0MC43OTA5IDM1IDQzIDM1SDY3QzY5LjIwOTEgMzUgNzEgMzYuNzkwOSA3MSAzOVY3MUM3MSA3My4yMDkxIDY5LjIwOTEgNzUgNjcgNzVINDNDNDAuNzkwOSA3NSAzOSA3My4yMDkxIDM5IDcxVjM5Wk00MyAzN0g2N0M2OC4xMDQ2IDM3IDY5IDM3Ljg5NTQgNjkgMzlWNzFDNjkgNzIuMTA0NiA2OC4xMDQ2IDczIDY3IDczSDQzQzQxLjg5NTQgNzMgNDEgNzIuMTA0NiA0MSA3MVYzOUM0MSAzNy44OTU0IDQxLjg5NTQgMzcgNDMgMzdaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0yNS4yMDcgOTkuMjg3MUgyNi4zMzJDMjYuMjczNCA5OS44MjYyIDI2LjExOTEgMTAwLjMwOSAyNS44NjkxIDEwMC43MzRDMjUuNjE5MSAxMDEuMTYgMjUuMjY1NiAxMDEuNDk4IDI0LjgwODYgMTAxLjc0OEMyNC4zNTE2IDEwMS45OTQgMjMuNzgxMiAxMDIuMTE3IDIzLjA5NzcgMTAyLjExN0MyMi41OTc3IDEwMi4xMTcgMjIuMTQyNiAxMDIuMDIzIDIxLjczMjQgMTAxLjgzNkMyMS4zMjYyIDEwMS42NDggMjAuOTc2NiAxMDEuMzgzIDIwLjY4MzYgMTAxLjAzOUMyMC4zOTA2IDEwMC42OTEgMjAuMTY0MSAxMDAuMjc1IDIwLjAwMzkgOTkuNzkxQzE5Ljg0NzcgOTkuMzAyNyAxOS43Njk1IDk4Ljc1OTggMTkuNzY5NSA5OC4xNjIxVjk3LjMxMjVDMTkuNzY5NSA5Ni43MTQ4IDE5Ljg0NzcgOTYuMTczOCAyMC4wMDM5IDk1LjY4OTVDMjAuMTY0MSA5NS4yMDEyIDIwLjM5MjYgOTQuNzgzMiAyMC42ODk1IDk0LjQzNTVDMjAuOTkwMiA5NC4wODc5IDIxLjM1MTYgOTMuODIwMyAyMS43NzM0IDkzLjYzMjhDMjIuMTk1MyA5My40NDUzIDIyLjY2OTkgOTMuMzUxNiAyMy4xOTczIDkzLjM1MTZDMjMuODQxOCA5My4zNTE2IDI0LjM4NjcgOTMuNDcyNyAyNC44MzIgOTMuNzE0OEMyNS4yNzczIDkzLjk1NyAyNS42MjMgOTQuMjkzIDI1Ljg2OTEgOTQuNzIyN0MyNi4xMTkxIDk1LjE0ODQgMjYuMjczNCA5NS42NDI2IDI2LjMzMiA5Ni4yMDUxSDI1LjIwN0MyNS4xNTIzIDk1LjgwNjYgMjUuMDUwOCA5NS40NjQ4IDI0LjkwMjMgOTUuMTc5N0MyNC43NTM5IDk0Ljg5MDYgMjQuNTQzIDk0LjY2OCAyNC4yNjk1IDk0LjUxMTdDMjMuOTk2MSA5NC4zNTU1IDIzLjYzODcgOTQuMjc3MyAyMy4xOTczIDk0LjI3NzNDMjIuODE4NCA5NC4yNzczIDIyLjQ4NDQgOTQuMzQ5NiAyMi4xOTUzIDk0LjQ5NDFDMjEuOTEwMiA5NC42Mzg3IDIxLjY2OTkgOTQuODQzOCAyMS40NzQ2IDk1LjEwOTRDMjEuMjgzMiA5NS4zNzUgMjEuMTM4NyA5NS42OTM0IDIxLjA0MSA5Ni4wNjQ1QzIwLjk0MzQgOTYuNDM1NSAyMC44OTQ1IDk2Ljg0NzcgMjAuODk0NSA5Ny4zMDA4Vjk4LjE2MjFDMjAuODk0NSA5OC41ODAxIDIwLjkzNzUgOTguOTcyNyAyMS4wMjM0IDk5LjMzOThDMjEuMTEzMyA5OS43MDcgMjEuMjQ4IDEwMC4wMjkgMjEuNDI3NyAxMDAuMzA3QzIxLjYwNzQgMTAwLjU4NCAyMS44MzU5IDEwMC44MDMgMjIuMTEzMyAxMDAuOTYzQzIyLjM5MDYgMTAxLjExOSAyMi43MTg4IDEwMS4xOTcgMjMuMDk3NyAxMDEuMTk3QzIzLjU3ODEgMTAxLjE5NyAyMy45NjA5IDEwMS4xMjEgMjQuMjQ2MSAxMDAuOTY5QzI0LjUzMTIgMTAwLjgxNiAyNC43NDYxIDEwMC41OTggMjQuODkwNiAxMDAuMzEyQzI1LjAzOTEgMTAwLjAyNyAyNS4xNDQ1IDk5LjY4NTUgMjUuMjA3IDk5LjI4NzFaTTI3LjQyMTkgOTguOTAwNFY5OC43NjU2QzI3LjQyMTkgOTguMzA4NiAyNy40ODgzIDk3Ljg4NDggMjcuNjIxMSA5Ny40OTQxQzI3Ljc1MzkgOTcuMDk5NiAyNy45NDUzIDk2Ljc1NzggMjguMTk1MyA5Ni40Njg4QzI4LjQ0NTMgOTYuMTc1OCAyOC43NDggOTUuOTQ5MiAyOS4xMDM1IDk1Ljc4OTFDMjkuNDU5IDk1LjYyNSAyOS44NTc0IDk1LjU0MyAzMC4yOTg4IDk1LjU0M0MzMC43NDQxIDk1LjU0MyAzMS4xNDQ1IDk1LjYyNSAzMS41IDk1Ljc4OTFDMzEuODU5NCA5NS45NDkyIDMyLjE2NDEgOTYuMTc1OCAzMi40MTQxIDk2LjQ2ODhDMzIuNjY4IDk2Ljc1NzggMzIuODYxMyA5Ny4wOTk2IDMyLjk5NDEgOTcuNDk0MUMzMy4xMjcgOTcuODg0OCAzMy4xOTM0IDk4LjMwODYgMzMuMTkzNCA5OC43NjU2Vjk4LjkwMDRDMzMuMTkzNCA5OS4zNTc0IDMzLjEyNyA5OS43ODEyIDMyLjk5NDEgMTAwLjE3MkMzMi44NjEzIDEwMC41NjIgMzIuNjY4IDEwMC45MDQgMzIuNDE0MSAxMDEuMTk3QzMyLjE2NDEgMTAxLjQ4NiAzMS44NjEzIDEwMS43MTMgMzEuNTA1OSAxMDEuODc3QzMxLjE1NDMgMTAyLjAzNyAzMC43NTU5IDEwMi4xMTcgMzAuMzEwNSAxMDIuMTE3QzI5Ljg2NTIgMTAyLjExNyAyOS40NjQ4IDEwMi4wMzcgMjkuMTA5NCAxMDEuODc3QzI4Ljc1MzkgMTAxLjcxMyAyOC40NDkyIDEwMS40ODYgMjguMTk1MyAxMDEuMTk3QzI3Ljk0NTMgMTAwLjkwNCAyNy43NTM5IDEwMC41NjIgMjcuNjIxMSAxMDAuMTcyQzI3LjQ4ODMgOTkuNzgxMiAyNy40MjE5IDk5LjM1NzQgMjcuNDIxOSA5OC45MDA0Wk0yOC41MDU5IDk4Ljc2NTZWOTguOTAwNEMyOC41MDU5IDk5LjIxNjggMjguNTQzIDk5LjUxNTYgMjguNjE3MiA5OS43OTY5QzI4LjY5MTQgMTAwLjA3NCAyOC44MDI3IDEwMC4zMiAyOC45NTEyIDEwMC41MzVDMjkuMTAzNSAxMDAuNzUgMjkuMjkzIDEwMC45MiAyOS41MTk1IDEwMS4wNDVDMjkuNzQ2MSAxMDEuMTY2IDMwLjAwOTggMTAxLjIyNyAzMC4zMTA1IDEwMS4yMjdDMzAuNjA3NCAxMDEuMjI3IDMwLjg2NzIgMTAxLjE2NiAzMS4wODk4IDEwMS4wNDVDMzEuMzE2NCAxMDAuOTIgMzEuNTAzOSAxMDAuNzUgMzEuNjUyMyAxMDAuNTM1QzMxLjgwMDggMTAwLjMyIDMxLjkxMjEgMTAwLjA3NCAzMS45ODYzIDk5Ljc5NjlDMzIuMDY0NSA5OS41MTU2IDMyLjEwMzUgOTkuMjE2OCAzMi4xMDM1IDk4LjkwMDRWOTguNzY1NkMzMi4xMDM1IDk4LjQ1MzEgMzIuMDY0NSA5OC4xNTgyIDMxLjk4NjMgOTcuODgwOUMzMS45MTIxIDk3LjU5OTYgMzEuNzk4OCA5Ny4zNTE2IDMxLjY0NjUgOTcuMTM2N0MzMS40OTggOTYuOTE4IDMxLjMxMDUgOTYuNzQ2MSAzMS4wODQgOTYuNjIxMUMzMC44NjEzIDk2LjQ5NjEgMzAuNTk5NiA5Ni40MzM2IDMwLjI5ODggOTYuNDMzNkMzMC4wMDIgOTYuNDMzNiAyOS43NDAyIDk2LjQ5NjEgMjkuNTEzNyA5Ni42MjExQzI5LjI5MSA5Ni43NDYxIDI5LjEwMzUgOTYuOTE4IDI4Ljk1MTIgOTcuMTM2N0MyOC44MDI3IDk3LjM1MTYgMjguNjkxNCA5Ny41OTk2IDI4LjYxNzIgOTcuODgwOUMyOC41NDMgOTguMTU4MiAyOC41MDU5IDk4LjQ1MzEgMjguNTA1OSA5OC43NjU2Wk0zNS42MzY3IDk3LjAxMzdWMTAySDM0LjU1MjdWOTUuNjYwMkgzNS41NzgxTDM1LjYzNjcgOTcuMDEzN1pNMzUuMzc4OSA5OC41ODk4TDM0LjkyNzcgOTguNTcyM0MzNC45MzE2IDk4LjEzODcgMzQuOTk2MSA5Ny43MzgzIDM1LjEyMTEgOTcuMzcxMUMzNS4yNDYxIDk3IDM1LjQyMTkgOTYuNjc3NyAzNS42NDg0IDk2LjQwNDNDMzUuODc1IDk2LjEzMDkgMzYuMTQ0NSA5NS45MTk5IDM2LjQ1NyA5NS43NzE1QzM2Ljc3MzQgOTUuNjE5MSAzNy4xMjMgOTUuNTQzIDM3LjUwNTkgOTUuNTQzQzM3LjgxODQgOTUuNTQzIDM4LjA5OTYgOTUuNTg1OSAzOC4zNDk2IDk1LjY3MTlDMzguNTk5NiA5NS43NTM5IDM4LjgxMjUgOTUuODg2NyAzOC45ODgzIDk2LjA3MDNDMzkuMTY4IDk2LjI1MzkgMzkuMzA0NyA5Ni40OTIyIDM5LjM5ODQgOTYuNzg1MkMzOS40OTIyIDk3LjA3NDIgMzkuNTM5MSA5Ny40Mjc3IDM5LjUzOTEgOTcuODQ1N1YxMDJIMzguNDQ5MlY5Ny44MzRDMzguNDQ5MiA5Ny41MDIgMzguNDAwNCA5Ny4yMzYzIDM4LjMwMjcgOTcuMDM3MUMzOC4yMDUxIDk2LjgzNCAzOC4wNjI1IDk2LjY4NzUgMzcuODc1IDk2LjU5NzdDMzcuNjg3NSA5Ni41MDM5IDM3LjQ1NyA5Ni40NTcgMzcuMTgzNiA5Ni40NTdDMzYuOTE0MSA5Ni40NTcgMzYuNjY4IDk2LjUxMzcgMzYuNDQ1MyA5Ni42MjdDMzYuMjI2NiA5Ni43NDAyIDM2LjAzNzEgOTYuODk2NSAzNS44NzcgOTcuMDk1N0MzNS43MjA3IDk3LjI5NDkgMzUuNTk3NyA5Ny41MjM0IDM1LjUwNzggOTcuNzgxMkMzNS40MjE5IDk4LjAzNTIgMzUuMzc4OSA5OC4zMDQ3IDM1LjM3ODkgOTguNTg5OFpNNDMuODM5OCA5NS42NjAyVjk2LjQ5MjJINDAuNDEyMVY5NS42NjAySDQzLjgzOThaTTQxLjU3MjMgOTQuMTE5MUg0Mi42NTYyVjEwMC40M0M0Mi42NTYyIDEwMC42NDUgNDIuNjg5NSAxMDAuODA3IDQyLjc1NTkgMTAwLjkxNkM0Mi44MjIzIDEwMS4wMjUgNDIuOTA4MiAxMDEuMDk4IDQzLjAxMzcgMTAxLjEzM0M0My4xMTkxIDEwMS4xNjggNDMuMjMyNCAxMDEuMTg2IDQzLjM1MzUgMTAxLjE4NkM0My40NDM0IDEwMS4xODYgNDMuNTM3MSAxMDEuMTc4IDQzLjYzNDggMTAxLjE2MkM0My43MzYzIDEwMS4xNDMgNDMuODEyNSAxMDEuMTI3IDQzLjg2MzMgMTAxLjExNUw0My44NjkxIDEwMkM0My43ODMyIDEwMi4wMjcgNDMuNjY5OSAxMDIuMDUzIDQzLjUyOTMgMTAyLjA3NkM0My4zOTI2IDEwMi4xMDQgNDMuMjI2NiAxMDIuMTE3IDQzLjAzMTIgMTAyLjExN0M0Mi43NjU2IDEwMi4xMTcgNDIuNTIxNSAxMDIuMDY0IDQyLjI5ODggMTAxLjk1OUM0Mi4wNzYyIDEwMS44NTQgNDEuODk4NCAxMDEuNjc4IDQxLjc2NTYgMTAxLjQzMkM0MS42MzY3IDEwMS4xODIgNDEuNTcyMyAxMDAuODQ2IDQxLjU3MjMgMTAwLjQyNFY5NC4xMTkxWk00OC44NDk2IDEwMC45MTZWOTcuNjUyM0M0OC44NDk2IDk3LjQwMjMgNDguNzk4OCA5Ny4xODU1IDQ4LjY5NzMgOTcuMDAyQzQ4LjU5OTYgOTYuODE0NSA0OC40NTEyIDk2LjY2OTkgNDguMjUyIDk2LjU2ODRDNDguMDUyNyA5Ni40NjY4IDQ3LjgwNjYgOTYuNDE2IDQ3LjUxMzcgOTYuNDE2QzQ3LjI0MDIgOTYuNDE2IDQ3IDk2LjQ2MjkgNDYuNzkzIDk2LjU1NjZDNDYuNTg5OCA5Ni42NTA0IDQ2LjQyOTcgOTYuNzczNCA0Ni4zMTI1IDk2LjkyNThDNDYuMTk5MiA5Ny4wNzgxIDQ2LjE0MjYgOTcuMjQyMiA0Ni4xNDI2IDk3LjQxOEg0NS4wNTg2QzQ1LjA1ODYgOTcuMTkxNCA0NS4xMTcyIDk2Ljk2NjggNDUuMjM0NCA5Ni43NDQxQzQ1LjM1MTYgOTYuNTIxNSA0NS41MTk1IDk2LjMyMDMgNDUuNzM4MyA5Ni4xNDA2QzQ1Ljk2MDkgOTUuOTU3IDQ2LjIyNjYgOTUuODEyNSA0Ni41MzUyIDk1LjcwN0M0Ni44NDc3IDk1LjU5NzcgNDcuMTk1MyA5NS41NDMgNDcuNTc4MSA5NS41NDNDNDguMDM5MSA5NS41NDMgNDguNDQ1MyA5NS42MjExIDQ4Ljc5NjkgOTUuNzc3M0M0OS4xNTIzIDk1LjkzMzYgNDkuNDI5NyA5Ni4xNjk5IDQ5LjYyODkgOTYuNDg2M0M0OS44MzIgOTYuNzk4OCA0OS45MzM2IDk3LjE5MTQgNDkuOTMzNiA5Ny42NjQxVjEwMC42MTdDNDkuOTMzNiAxMDAuODI4IDQ5Ljk1MTIgMTAxLjA1MyA0OS45ODYzIDEwMS4yOTFDNTAuMDI1NCAxMDEuNTI5IDUwLjA4MiAxMDEuNzM0IDUwLjE1NjIgMTAxLjkwNlYxMDJINDkuMDI1NEM0OC45NzA3IDEwMS44NzUgNDguOTI3NyAxMDEuNzA5IDQ4Ljg5NjUgMTAxLjUwMkM0OC44NjUyIDEwMS4yOTEgNDguODQ5NiAxMDEuMDk2IDQ4Ljg0OTYgMTAwLjkxNlpNNDkuMDM3MSA5OC4xNTYyTDQ5LjA0ODggOTguOTE4SDQ3Ljk1MzFDNDcuNjQ0NSA5OC45MTggNDcuMzY5MSA5OC45NDM0IDQ3LjEyNyA5OC45OTQxQzQ2Ljg4NDggOTkuMDQxIDQ2LjY4MTYgOTkuMTEzMyA0Ni41MTc2IDk5LjIxMDlDNDYuMzUzNSA5OS4zMDg2IDQ2LjIyODUgOTkuNDMxNiA0Ni4xNDI2IDk5LjU4MDFDNDYuMDU2NiA5OS43MjQ2IDQ2LjAxMzcgOTkuODk0NSA0Ni4wMTM3IDEwMC4wOUM0Ni4wMTM3IDEwMC4yODkgNDYuMDU4NiAxMDAuNDcxIDQ2LjE0ODQgMTAwLjYzNUM0Ni4yMzgzIDEwMC43OTkgNDYuMzczIDEwMC45MyA0Ni41NTI3IDEwMS4wMjdDNDYuNzM2MyAxMDEuMTIxIDQ2Ljk2MDkgMTAxLjE2OCA0Ny4yMjY2IDEwMS4xNjhDNDcuNTU4NiAxMDEuMTY4IDQ3Ljg1MTYgMTAxLjA5OCA0OC4xMDU1IDEwMC45NTdDNDguMzU5NCAxMDAuODE2IDQ4LjU2MDUgMTAwLjY0NSA0OC43MDkgMTAwLjQ0MUM0OC44NjEzIDEwMC4yMzggNDguOTQzNCAxMDAuMDQxIDQ4Ljk1NTEgOTkuODQ5Nkw0OS40MTggMTAwLjM3MUM0OS4zOTA2IDEwMC41MzUgNDkuMzE2NCAxMDAuNzE3IDQ5LjE5NTMgMTAwLjkxNkM0OS4wNzQyIDEwMS4xMTUgNDguOTEyMSAxMDEuMzA3IDQ4LjcwOSAxMDEuNDlDNDguNTA5OCAxMDEuNjcgNDguMjcxNSAxMDEuODIgNDcuOTk0MSAxMDEuOTQxQzQ3LjcyMDcgMTAyLjA1OSA0Ny40MTIxIDEwMi4xMTcgNDcuMDY4NCAxMDIuMTE3QzQ2LjYzODcgMTAyLjExNyA0Ni4yNjE3IDEwMi4wMzMgNDUuOTM3NSAxMDEuODY1QzQ1LjYxNzIgMTAxLjY5NyA0NS4zNjcyIDEwMS40NzMgNDUuMTg3NSAxMDEuMTkxQzQ1LjAxMTcgMTAwLjkwNiA0NC45MjM4IDEwMC41ODggNDQuOTIzOCAxMDAuMjM2QzQ0LjkyMzggOTkuODk2NSA0NC45OTAyIDk5LjU5NzcgNDUuMTIzIDk5LjMzOThDNDUuMjU1OSA5OS4wNzgxIDQ1LjQ0NzMgOTguODYxMyA0NS42OTczIDk4LjY4OTVDNDUuOTQ3MyA5OC41MTM3IDQ2LjI0OCA5OC4zODA5IDQ2LjU5OTYgOTguMjkxQzQ2Ljk1MTIgOTguMjAxMiA0Ny4zNDM4IDk4LjE1NjIgNDcuNzc3MyA5OC4xNTYySDQ5LjAzNzFaTTU0LjE3NTggMTAxLjIyN0M1NC40MzM2IDEwMS4yMjcgNTQuNjcxOSAxMDEuMTc0IDU0Ljg5MDYgMTAxLjA2OEM1NS4xMDk0IDEwMC45NjMgNTUuMjg5MSAxMDAuODE4IDU1LjQyOTcgMTAwLjYzNUM1NS41NzAzIDEwMC40NDcgNTUuNjUwNCAxMDAuMjM0IDU1LjY2OTkgOTkuOTk2MUg1Ni43MDEyQzU2LjY4MTYgMTAwLjM3MSA1Ni41NTQ3IDEwMC43MjEgNTYuMzIwMyAxMDEuMDQ1QzU2LjA4OTggMTAxLjM2NSA1NS43ODcxIDEwMS42MjUgNTUuNDEyMSAxMDEuODI0QzU1LjAzNzEgMTAyLjAyIDU0LjYyNSAxMDIuMTE3IDU0LjE3NTggMTAyLjExN0M1My42OTkyIDEwMi4xMTcgNTMuMjgzMiAxMDIuMDMzIDUyLjkyNzcgMTAxLjg2NUM1Mi41NzYyIDEwMS42OTcgNTIuMjgzMiAxMDEuNDY3IDUyLjA0ODggMTAxLjE3NEM1MS44MTg0IDEwMC44ODEgNTEuNjQ0NSAxMDAuNTQ1IDUxLjUyNzMgMTAwLjE2NkM1MS40MTQxIDk5Ljc4MzIgNTEuMzU3NCA5OS4zNzg5IDUxLjM1NzQgOTguOTUzMVY5OC43MDdDNTEuMzU3NCA5OC4yODEyIDUxLjQxNDEgOTcuODc4OSA1MS41MjczIDk3LjVDNTEuNjQ0NSA5Ny4xMTcyIDUxLjgxODQgOTYuNzc5MyA1Mi4wNDg4IDk2LjQ4NjNDNTIuMjgzMiA5Ni4xOTM0IDUyLjU3NjIgOTUuOTYyOSA1Mi45Mjc3IDk1Ljc5NDlDNTMuMjgzMiA5NS42MjcgNTMuNjk5MiA5NS41NDMgNTQuMTc1OCA5NS41NDNDNTQuNjcxOSA5NS41NDMgNTUuMTA1NSA5NS42NDQ1IDU1LjQ3NjYgOTUuODQ3N0M1NS44NDc3IDk2LjA0NjkgNTYuMTM4NyA5Ni4zMjAzIDU2LjM0OTYgOTYuNjY4QzU2LjU2NDUgOTcuMDExNyA1Ni42ODE2IDk3LjQwMjMgNTYuNzAxMiA5Ny44Mzk4SDU1LjY2OTlDNTUuNjUwNCA5Ny41NzgxIDU1LjU3NjIgOTcuMzQxOCA1NS40NDczIDk3LjEzMDlDNTUuMzIyMyA5Ni45MTk5IDU1LjE1MDQgOTYuNzUyIDU0LjkzMTYgOTYuNjI3QzU0LjcxNjggOTYuNDk4IDU0LjQ2NDggOTYuNDMzNiA1NC4xNzU4IDk2LjQzMzZDNTMuODQzOCA5Ni40MzM2IDUzLjU2NDUgOTYuNSA1My4zMzc5IDk2LjYzMjhDNTMuMTE1MiA5Ni43NjE3IDUyLjkzNzUgOTYuOTM3NSA1Mi44MDQ3IDk3LjE2MDJDNTIuNjc1OCA5Ny4zNzg5IDUyLjU4MiA5Ny42MjMgNTIuNTIzNCA5Ny44OTI2QzUyLjQ2ODggOTguMTU4MiA1Mi40NDE0IDk4LjQyOTcgNTIuNDQxNCA5OC43MDdWOTguOTUzMUM1Mi40NDE0IDk5LjIzMDUgNTIuNDY4OCA5OS41MDM5IDUyLjUyMzQgOTkuNzczNEM1Mi41NzgxIDEwMC4wNDMgNTIuNjY5OSAxMDAuMjg3IDUyLjc5ODggMTAwLjUwNkM1Mi45MzE2IDEwMC43MjUgNTMuMTA5NCAxMDAuOSA1My4zMzIgMTAxLjAzM0M1My41NTg2IDEwMS4xNjIgNTMuODM5OCAxMDEuMjI3IDU0LjE3NTggMTAxLjIyN1pNNjAuNTc0MiA5NS42NjAyVjk2LjQ5MjJINTcuMTQ2NVY5NS42NjAySDYwLjU3NDJaTTU4LjMwNjYgOTQuMTE5MUg1OS4zOTA2VjEwMC40M0M1OS4zOTA2IDEwMC42NDUgNTkuNDIzOCAxMDAuODA3IDU5LjQ5MDIgMTAwLjkxNkM1OS41NTY2IDEwMS4wMjUgNTkuNjQyNiAxMDEuMDk4IDU5Ljc0OCAxMDEuMTMzQzU5Ljg1MzUgMTAxLjE2OCA1OS45NjY4IDEwMS4xODYgNjAuMDg3OSAxMDEuMTg2QzYwLjE3NzcgMTAxLjE4NiA2MC4yNzE1IDEwMS4xNzggNjAuMzY5MSAxMDEuMTYyQzYwLjQ3MDcgMTAxLjE0MyA2MC41NDY5IDEwMS4xMjcgNjAuNTk3NyAxMDEuMTE1TDYwLjYwMzUgMTAyQzYwLjUxNzYgMTAyLjAyNyA2MC40MDQzIDEwMi4wNTMgNjAuMjYzNyAxMDIuMDc2QzYwLjEyNyAxMDIuMTA0IDU5Ljk2MDkgMTAyLjExNyA1OS43NjU2IDEwMi4xMTdDNTkuNSAxMDIuMTE3IDU5LjI1NTkgMTAyLjA2NCA1OS4wMzMyIDEwMS45NTlDNTguODEwNSAxMDEuODU0IDU4LjYzMjggMTAxLjY3OCA1OC41IDEwMS40MzJDNTguMzcxMSAxMDEuMTgyIDU4LjMwNjYgMTAwLjg0NiA1OC4zMDY2IDEwMC40MjRWOTQuMTE5MVpNNjYuMTE3MiA5My40Njg4VjEwMkg2NC45ODYzVjkzLjQ2ODhINjYuMTE3MlpNNjkuNjkxNCA5Ny4zMDY2Vjk4LjIzMjRINjUuODcxMVY5Ny4zMDY2SDY5LjY5MTRaTTcwLjI3MTUgOTMuNDY4OFY5NC4zOTQ1SDY1Ljg3MTFWOTMuNDY4OEg3MC4yNzE1Wk03MS4wMzkxIDk4LjkwMDRWOTguNzY1NkM3MS4wMzkxIDk4LjMwODYgNzEuMTA1NSA5Ny44ODQ4IDcxLjIzODMgOTcuNDk0MUM3MS4zNzExIDk3LjA5OTYgNzEuNTYyNSA5Ni43NTc4IDcxLjgxMjUgOTYuNDY4OEM3Mi4wNjI1IDk2LjE3NTggNzIuMzY1MiA5NS45NDkyIDcyLjcyMDcgOTUuNzg5MUM3My4wNzYyIDk1LjYyNSA3My40NzQ2IDk1LjU0MyA3My45MTYgOTUuNTQzQzc0LjM2MTMgOTUuNTQzIDc0Ljc2MTcgOTUuNjI1IDc1LjExNzIgOTUuNzg5MUM3NS40NzY2IDk1Ljk0OTIgNzUuNzgxMiA5Ni4xNzU4IDc2LjAzMTIgOTYuNDY4OEM3Ni4yODUyIDk2Ljc1NzggNzYuNDc4NSA5Ny4wOTk2IDc2LjYxMTMgOTcuNDk0MUM3Ni43NDQxIDk3Ljg4NDggNzYuODEwNSA5OC4zMDg2IDc2LjgxMDUgOTguNzY1NlY5OC45MDA0Qzc2LjgxMDUgOTkuMzU3NCA3Ni43NDQxIDk5Ljc4MTIgNzYuNjExMyAxMDAuMTcyQzc2LjQ3ODUgMTAwLjU2MiA3Ni4yODUyIDEwMC45MDQgNzYuMDMxMiAxMDEuMTk3Qzc1Ljc4MTIgMTAxLjQ4NiA3NS40Nzg1IDEwMS43MTMgNzUuMTIzIDEwMS44NzdDNzQuNzcxNSAxMDIuMDM3IDc0LjM3MyAxMDIuMTE3IDczLjkyNzcgMTAyLjExN0M3My40ODI0IDEwMi4xMTcgNzMuMDgyIDEwMi4wMzcgNzIuNzI2NiAxMDEuODc3QzcyLjM3MTEgMTAxLjcxMyA3Mi4wNjY0IDEwMS40ODYgNzEuODEyNSAxMDEuMTk3QzcxLjU2MjUgMTAwLjkwNCA3MS4zNzExIDEwMC41NjIgNzEuMjM4MyAxMDAuMTcyQzcxLjEwNTUgOTkuNzgxMiA3MS4wMzkxIDk5LjM1NzQgNzEuMDM5MSA5OC45MDA0Wk03Mi4xMjMgOTguNzY1NlY5OC45MDA0QzcyLjEyMyA5OS4yMTY4IDcyLjE2MDIgOTkuNTE1NiA3Mi4yMzQ0IDk5Ljc5NjlDNzIuMzA4NiAxMDAuMDc0IDcyLjQxOTkgMTAwLjMyIDcyLjU2ODQgMTAwLjUzNUM3Mi43MjA3IDEwMC43NSA3Mi45MTAyIDEwMC45MiA3My4xMzY3IDEwMS4wNDVDNzMuMzYzMyAxMDEuMTY2IDczLjYyNyAxMDEuMjI3IDczLjkyNzcgMTAxLjIyN0M3NC4yMjQ2IDEwMS4yMjcgNzQuNDg0NCAxMDEuMTY2IDc0LjcwNyAxMDEuMDQ1Qzc0LjkzMzYgMTAwLjkyIDc1LjEyMTEgMTAwLjc1IDc1LjI2OTUgMTAwLjUzNUM3NS40MTggMTAwLjMyIDc1LjUyOTMgMTAwLjA3NCA3NS42MDM1IDk5Ljc5NjlDNzUuNjgxNiA5OS41MTU2IDc1LjcyMDcgOTkuMjE2OCA3NS43MjA3IDk4LjkwMDRWOTguNzY1NkM3NS43MjA3IDk4LjQ1MzEgNzUuNjgxNiA5OC4xNTgyIDc1LjYwMzUgOTcuODgwOUM3NS41MjkzIDk3LjU5OTYgNzUuNDE2IDk3LjM1MTYgNzUuMjYzNyA5Ny4xMzY3Qzc1LjExNTIgOTYuOTE4IDc0LjkyNzcgOTYuNzQ2MSA3NC43MDEyIDk2LjYyMTFDNzQuNDc4NSA5Ni40OTYxIDc0LjIxNjggOTYuNDMzNiA3My45MTYgOTYuNDMzNkM3My42MTkxIDk2LjQzMzYgNzMuMzU3NCA5Ni40OTYxIDczLjEzMDkgOTYuNjIxMUM3Mi45MDgyIDk2Ljc0NjEgNzIuNzIwNyA5Ni45MTggNzIuNTY4NCA5Ny4xMzY3QzcyLjQxOTkgOTcuMzUxNiA3Mi4zMDg2IDk3LjU5OTYgNzIuMjM0NCA5Ny44ODA5QzcyLjE2MDIgOTguMTU4MiA3Mi4xMjMgOTguNDUzMSA3Mi4xMjMgOTguNzY1NlpNNzkuMjUzOSA5Ni42NTYyVjEwMkg3OC4xNjk5Vjk1LjY2MDJINzkuMjI0Nkw3OS4yNTM5IDk2LjY1NjJaTTgxLjIzNDQgOTUuNjI1TDgxLjIyODUgOTYuNjMyOEM4MS4xMzg3IDk2LjYxMzMgODEuMDUyNyA5Ni42MDE2IDgwLjk3MDcgOTYuNTk3N0M4MC44OTI2IDk2LjU4OTggODAuODAyNyA5Ni41ODU5IDgwLjcwMTIgOTYuNTg1OUM4MC40NTEyIDk2LjU4NTkgODAuMjMwNSA5Ni42MjUgODAuMDM5MSA5Ni43MDMxQzc5Ljg0NzcgOTYuNzgxMiA3OS42ODU1IDk2Ljg5MDYgNzkuNTUyNyA5Ny4wMzEyQzc5LjQxOTkgOTcuMTcxOSA3OS4zMTQ1IDk3LjMzOTggNzkuMjM2MyA5Ny41MzUyQzc5LjE2MjEgOTcuNzI2NiA3OS4xMTMzIDk3LjkzNzUgNzkuMDg5OCA5OC4xNjhMNzguNzg1MiA5OC4zNDM4Qzc4Ljc4NTIgOTcuOTYwOSA3OC44MjIzIDk3LjYwMTYgNzguODk2NSA5Ny4yNjU2Qzc4Ljk3NDYgOTYuOTI5NyA3OS4wOTM4IDk2LjYzMjggNzkuMjUzOSA5Ni4zNzVDNzkuNDE0MSA5Ni4xMTMzIDc5LjYxNzIgOTUuOTEwMiA3OS44NjMzIDk1Ljc2NTZDODAuMTEzMyA5NS42MTcyIDgwLjQxMDIgOTUuNTQzIDgwLjc1MzkgOTUuNTQzQzgwLjgzMiA5NS41NDMgODAuOTIxOSA5NS41NTI3IDgxLjAyMzQgOTUuNTcyM0M4MS4xMjUgOTUuNTg3OSA4MS4xOTUzIDk1LjYwNTUgODEuMjM0NCA5NS42MjVaTTgzLjMxNDUgOTYuOTE5OVYxMDJIODIuMjI0NlY5NS42NjAySDgzLjI1NTlMODMuMzE0NSA5Ni45MTk5Wk04My4wOTE4IDk4LjU4OThMODIuNTg3OSA5OC41NzIzQzgyLjU5MTggOTguMTM4NyA4Mi42NDg0IDk3LjczODMgODIuNzU3OCA5Ny4zNzExQzgyLjg2NzIgOTcgODMuMDI5MyA5Ni42Nzc3IDgzLjI0NDEgOTYuNDA0M0M4My40NTkgOTYuMTMwOSA4My43MjY2IDk1LjkxOTkgODQuMDQ2OSA5NS43NzE1Qzg0LjM2NzIgOTUuNjE5MSA4NC43MzgzIDk1LjU0MyA4NS4xNjAyIDk1LjU0M0M4NS40NTcgOTUuNTQzIDg1LjczMDUgOTUuNTg1OSA4NS45ODA1IDk1LjY3MTlDODYuMjMwNSA5NS43NTM5IDg2LjQ0NzMgOTUuODg0OCA4Ni42MzA5IDk2LjA2NDVDODYuODE0NSA5Ni4yNDQxIDg2Ljk1NyA5Ni40NzQ2IDg3LjA1ODYgOTYuNzU1OUM4Ny4xNjAyIDk3LjAzNzEgODcuMjEwOSA5Ny4zNzcgODcuMjEwOSA5Ny43NzU0VjEwMkg4Ni4xMjdWOTcuODI4MUM4Ni4xMjcgOTcuNDk2MSA4Ni4wNzAzIDk3LjIzMDUgODUuOTU3IDk3LjAzMTJDODUuODQ3NyA5Ni44MzIgODUuNjkxNCA5Ni42ODc1IDg1LjQ4ODMgOTYuNTk3N0M4NS4yODUyIDk2LjUwMzkgODUuMDQ2OSA5Ni40NTcgODQuNzczNCA5Ni40NTdDODQuNDUzMSA5Ni40NTcgODQuMTg1NSA5Ni41MTM3IDgzLjk3MDcgOTYuNjI3QzgzLjc1NTkgOTYuNzQwMiA4My41ODQgOTYuODk2NSA4My40NTUxIDk3LjA5NTdDODMuMzI2MiA5Ny4yOTQ5IDgzLjIzMjQgOTcuNTIzNCA4My4xNzM4IDk3Ljc4MTJDODMuMTE5MSA5OC4wMzUyIDgzLjA5MTggOTguMzA0NyA4My4wOTE4IDk4LjU4OThaTTg3LjE5OTIgOTcuOTkyMkw4Ni40NzI3IDk4LjIxNDhDODYuNDc2NiA5Ny44NjcyIDg2LjUzMzIgOTcuNTMzMiA4Ni42NDI2IDk3LjIxMjlDODYuNzU1OSA5Ni44OTI2IDg2LjkxOCA5Ni42MDc0IDg3LjEyODkgOTYuMzU3NEM4Ny4zNDM4IDk2LjEwNzQgODcuNjA3NCA5NS45MTAyIDg3LjkxOTkgOTUuNzY1NkM4OC4yMzI0IDk1LjYxNzIgODguNTg5OCA5NS41NDMgODguOTkyMiA5NS41NDNDODkuMzMyIDk1LjU0MyA4OS42MzI4IDk1LjU4NzkgODkuODk0NSA5NS42Nzc3QzkwLjE2MDIgOTUuNzY3NiA5MC4zODI4IDk1LjkwNjIgOTAuNTYyNSA5Ni4wOTM4QzkwLjc0NjEgOTYuMjc3MyA5MC44ODQ4IDk2LjUxMzcgOTAuOTc4NSA5Ni44MDI3QzkxLjA3MjMgOTcuMDkxOCA5MS4xMTkxIDk3LjQzNTUgOTEuMTE5MSA5Ny44MzRWMTAySDkwLjAyOTNWOTcuODIyM0M5MC4wMjkzIDk3LjQ2NjggODkuOTcyNyA5Ny4xOTE0IDg5Ljg1OTQgOTYuOTk2MUM4OS43NSA5Ni43OTY5IDg5LjU5MzggOTYuNjU4MiA4OS4zOTA2IDk2LjU4MDFDODkuMTkxNCA5Ni40OTggODguOTUzMSA5Ni40NTcgODguNjc1OCA5Ni40NTdDODguNDM3NSA5Ni40NTcgODguMjI2NiA5Ni40OTggODguMDQzIDk2LjU4MDFDODcuODU5NCA5Ni42NjIxIDg3LjcwNTEgOTYuNzc1NCA4Ny41ODAxIDk2LjkxOTlDODcuNDU1MSA5Ny4wNjA1IDg3LjM1OTQgOTcuMjIyNyA4Ny4yOTMgOTcuNDA2MkM4Ny4yMzA1IDk3LjU4OTggODcuMTk5MiA5Ny43ODUyIDg3LjE5OTIgOTcuOTkyMlpcIlxyXG5cdFx0XHRmaWxsPVwiIzBGMTcyQVwiLz5cclxuXHRcdDxyZWN0IHg9XCIxOVwiIHk9XCIxMTBcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjI1XCIgeT1cIjExNlwiIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMTA3XCIgeT1cIjEzXCIgd2lkdGg9XCI4NFwiIGhlaWdodD1cIjExOFwiIHJ4PVwiM1wiIGZpbGw9XCJ3aGl0ZVwiXHJcblx0XHQgICAgICBzdHJva2U9XCIjNDI3MkY5XCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjExOVwiIHk9XCIyNVwiIHdpZHRoPVwiNjBcIiBoZWlnaHQ9XCI2MFwiIHJ4PVwiNFwiIGZpbGw9XCIjRjFGNUY5XCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMzYgNDYuMDQ0NEMxMzUuNDQ4IDQ2LjA0NDQgMTM1IDQ2LjQ5NTQgMTM1IDQ3LjA1MTdDMTM1IDQ3LjYwODEgMTM1LjQ0OCA0OC4wNTkxIDEzNiA0OC4wNTkxSDE1NkMxNTYuNTUyIDQ4LjA1OTEgMTU3IDQ3LjYwODEgMTU3IDQ3LjA1MTdDMTU3IDQ2LjQ5NTQgMTU2LjU1MiA0Ni4wNDQ0IDE1NiA0Ni4wNDQ0SDEzNlpcIlxyXG5cdFx0XHRmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTM1IDUxLjA4MTNDMTM1IDUwLjUyNDkgMTM1LjQ0OCA1MC4wNzM5IDEzNiA1MC4wNzM5SDE1NkMxNTYuNTUyIDUwLjA3MzkgMTU3IDUwLjUyNDkgMTU3IDUxLjA4MTNDMTU3IDUxLjYzNzcgMTU2LjU1MiA1Mi4wODg3IDE1NiA1Mi4wODg3SDEzNkMxMzUuNDQ4IDUyLjA4ODcgMTM1IDUxLjYzNzcgMTM1IDUxLjA4MTNaXCJcclxuXHRcdFx0ZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTEzNiA1NC4xMDM1QzEzNS40NDggNTQuMTAzNSAxMzUgNTQuNTU0NSAxMzUgNTUuMTEwOUMxMzUgNTUuNjY3MiAxMzUuNDQ4IDU2LjExODMgMTM2IDU2LjExODNIMTUxQzE1MS41NTIgNTYuMTE4MyAxNTIgNTUuNjY3MiAxNTIgNTUuMTEwOUMxNTIgNTQuNTU0NSAxNTEuNTUyIDU0LjEwMzUgMTUxIDU0LjEwMzVIMTM2WlwiXHJcblx0XHRcdGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNMTMxIDQ0LjAyOTZDMTMxIDQxLjgwNDEgMTMyLjc5MSA0MCAxMzUgNDBIMTU3QzE1OS4yMDkgNDAgMTYxIDQxLjgwNDEgMTYxIDQ0LjAyOTZWNTUuMTEwOUgxNjNDMTY1LjIwOSA1NS4xMTA5IDE2NyA1Ni45MTUgMTY3IDU5LjE0MDRWNjUuMTg0OEMxNjcgNjcuNDEwMyAxNjUuMjA5IDY5LjIxNDQgMTYzIDY5LjIxNDRIMTYyLjI4NkwxNTkuODY2IDcxLjgzOUMxNTkuNjY5IDcyLjA1MzcgMTU5LjMzMSA3Mi4wNTM3IDE1OS4xMzQgNzEuODM5TDE1Ni43MTQgNjkuMjE0NEgxNTFDMTQ4Ljc5MSA2OS4yMTQ0IDE0NyA2Ny40MTAzIDE0NyA2NS4xODQ4VjYyLjE2MjZIMTQ0LjIxNEwxNDAuODY2IDY1Ljc5NDdDMTQwLjY2OSA2Ni4wMDkzIDE0MC4zMzEgNjYuMDA5MyAxNDAuMTM0IDY1Ljc5NDdMMTM2Ljc4NiA2Mi4xNjI2SDEzNUMxMzIuNzkxIDYyLjE2MjYgMTMxIDYwLjM1ODUgMTMxIDU4LjEzMzFWNDQuMDI5NlpNMTM3LjY1OCA2MC4xNDc4TDE0MC41IDYzLjIzMTJMMTQzLjM0MiA2MC4xNDc4SDE1N0MxNTguMTA1IDYwLjE0NzggMTU5IDU5LjI0NTggMTU5IDU4LjEzMzFWNDQuMDI5NkMxNTkgNDIuOTE2OCAxNTguMTA1IDQyLjAxNDggMTU3IDQyLjAxNDhIMTM1QzEzMy44OTUgNDIuMDE0OCAxMzMgNDIuOTE2OCAxMzMgNDQuMDI5NlY1OC4xMzMxQzEzMyA1OS4yNDU4IDEzMy44OTUgNjAuMTQ3OCAxMzUgNjAuMTQ3OEgxMzcuNjU4Wk0xNDkgNjIuMTYyNlY2NS4xODQ4QzE0OSA2Ni4yOTc1IDE0OS44OTUgNjcuMTk5NiAxNTEgNjcuMTk5NkgxNTcuNTg2TDE1OS41IDY5LjI3NTZMMTYxLjQxNCA2Ny4xOTk2SDE2M0MxNjQuMTA1IDY3LjE5OTYgMTY1IDY2LjI5NzUgMTY1IDY1LjE4NDhWNTkuMTQwNEMxNjUgNTguMDI3NyAxNjQuMTA1IDU3LjEyNTcgMTYzIDU3LjEyNTdIMTYxVjU4LjEzMzFDMTYxIDYwLjM1ODUgMTU5LjIwOSA2Mi4xNjI2IDE1NyA2Mi4xNjI2SDE0OVpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTEyNS40MzYgOTMuNDY4OFYxMDJIMTI0LjMwNVY5My40Njg4SDEyNS40MzZaTTEyOS4wMSA5Ny4zMDY2Vjk4LjIzMjRIMTI1LjE4OVY5Ny4zMDY2SDEyOS4wMVpNMTI5LjU5IDkzLjQ2ODhWOTQuMzk0NUgxMjUuMTg5VjkzLjQ2ODhIMTI5LjU5Wk0xMzMuMjc1IDEwMi4xMTdDMTMyLjgzNCAxMDIuMTE3IDEzMi40MzQgMTAyLjA0MyAxMzIuMDc0IDEwMS44OTVDMTMxLjcxOSAxMDEuNzQyIDEzMS40MTIgMTAxLjUyOSAxMzEuMTU0IDEwMS4yNTZDMTMwLjkgMTAwLjk4MiAxMzAuNzA1IDEwMC42NTggMTMwLjU2OCAxMDAuMjgzQzEzMC40MzIgOTkuOTA4MiAxMzAuMzYzIDk5LjQ5OCAxMzAuMzYzIDk5LjA1MjdWOTguODA2NkMxMzAuMzYzIDk4LjI5MSAxMzAuNDM5IDk3LjgzMiAxMzAuNTkyIDk3LjQyOTdDMTMwLjc0NCA5Ny4wMjM0IDEzMC45NTEgOTYuNjc5NyAxMzEuMjEzIDk2LjM5ODRDMTMxLjQ3NSA5Ni4xMTcyIDEzMS43NzEgOTUuOTA0MyAxMzIuMTA0IDk1Ljc1OThDMTMyLjQzNiA5NS42MTUyIDEzMi43NzkgOTUuNTQzIDEzMy4xMzUgOTUuNTQzQzEzMy41ODggOTUuNTQzIDEzMy45NzkgOTUuNjIxMSAxMzQuMzA3IDk1Ljc3NzNDMTM0LjYzOSA5NS45MzM2IDEzNC45MSA5Ni4xNTIzIDEzNS4xMjEgOTYuNDMzNkMxMzUuMzMyIDk2LjcxMDkgMTM1LjQ4OCA5Ny4wMzkxIDEzNS41OSA5Ny40MThDMTM1LjY5MSA5Ny43OTMgMTM1Ljc0MiA5OC4yMDMxIDEzNS43NDIgOTguNjQ4NFY5OS4xMzQ4SDEzMS4wMDhWOTguMjVIMTM0LjY1OFY5OC4xNjhDMTM0LjY0MyA5Ny44ODY3IDEzNC41ODQgOTcuNjEzMyAxMzQuNDgyIDk3LjM0NzdDMTM0LjM4NSA5Ny4wODIgMTM0LjIyOSA5Ni44NjMzIDEzNC4wMTQgOTYuNjkxNEMxMzMuNzk5IDk2LjUxOTUgMTMzLjUwNiA5Ni40MzM2IDEzMy4xMzUgOTYuNDMzNkMxMzIuODg5IDk2LjQzMzYgMTMyLjY2MiA5Ni40ODYzIDEzMi40NTUgOTYuNTkxOEMxMzIuMjQ4IDk2LjY5MzQgMTMyLjA3IDk2Ljg0NTcgMTMxLjkyMiA5Ny4wNDg4QzEzMS43NzMgOTcuMjUyIDEzMS42NTggOTcuNSAxMzEuNTc2IDk3Ljc5M0MxMzEuNDk0IDk4LjA4NTkgMTMxLjQ1MyA5OC40MjM4IDEzMS40NTMgOTguODA2NlY5OS4wNTI3QzEzMS40NTMgOTkuMzUzNSAxMzEuNDk0IDk5LjYzNjcgMTMxLjU3NiA5OS45MDIzQzEzMS42NjIgMTAwLjE2NCAxMzEuNzg1IDEwMC4zOTUgMTMxLjk0NSAxMDAuNTk0QzEzMi4xMDkgMTAwLjc5MyAxMzIuMzA3IDEwMC45NDkgMTMyLjUzNyAxMDEuMDYyQzEzMi43NzEgMTAxLjE3NiAxMzMuMDM3IDEwMS4yMzIgMTMzLjMzNCAxMDEuMjMyQzEzMy43MTcgMTAxLjIzMiAxMzQuMDQxIDEwMS4xNTQgMTM0LjMwNyAxMDAuOTk4QzEzNC41NzIgMTAwLjg0MiAxMzQuODA1IDEwMC42MzMgMTM1LjAwNCAxMDAuMzcxTDEzNS42NiAxMDAuODkzQzEzNS41MjMgMTAxLjEgMTM1LjM1IDEwMS4yOTcgMTM1LjEzOSAxMDEuNDg0QzEzNC45MjggMTAxLjY3MiAxMzQuNjY4IDEwMS44MjQgMTM0LjM1OSAxMDEuOTQxQzEzNC4wNTUgMTAyLjA1OSAxMzMuNjkzIDEwMi4xMTcgMTMzLjI3NSAxMDIuMTE3Wk0xMzkuNjM5IDEwMi4xMTdDMTM5LjE5NyAxMDIuMTE3IDEzOC43OTcgMTAyLjA0MyAxMzguNDM4IDEwMS44OTVDMTM4LjA4MiAxMDEuNzQyIDEzNy43NzUgMTAxLjUyOSAxMzcuNTE4IDEwMS4yNTZDMTM3LjI2NCAxMDAuOTgyIDEzNy4wNjggMTAwLjY1OCAxMzYuOTMyIDEwMC4yODNDMTM2Ljc5NSA5OS45MDgyIDEzNi43MjcgOTkuNDk4IDEzNi43MjcgOTkuMDUyN1Y5OC44MDY2QzEzNi43MjcgOTguMjkxIDEzNi44MDMgOTcuODMyIDEzNi45NTUgOTcuNDI5N0MxMzcuMTA3IDk3LjAyMzQgMTM3LjMxNCA5Ni42Nzk3IDEzNy41NzYgOTYuMzk4NEMxMzcuODM4IDk2LjExNzIgMTM4LjEzNSA5NS45MDQzIDEzOC40NjcgOTUuNzU5OEMxMzguNzk5IDk1LjYxNTIgMTM5LjE0MyA5NS41NDMgMTM5LjQ5OCA5NS41NDNDMTM5Ljk1MSA5NS41NDMgMTQwLjM0MiA5NS42MjExIDE0MC42NyA5NS43NzczQzE0MS4wMDIgOTUuOTMzNiAxNDEuMjczIDk2LjE1MjMgMTQxLjQ4NCA5Ni40MzM2QzE0MS42OTUgOTYuNzEwOSAxNDEuODUyIDk3LjAzOTEgMTQxLjk1MyA5Ny40MThDMTQyLjA1NSA5Ny43OTMgMTQyLjEwNSA5OC4yMDMxIDE0Mi4xMDUgOTguNjQ4NFY5OS4xMzQ4SDEzNy4zNzFWOTguMjVIMTQxLjAyMVY5OC4xNjhDMTQxLjAwNiA5Ny44ODY3IDE0MC45NDcgOTcuNjEzMyAxNDAuODQ2IDk3LjM0NzdDMTQwLjc0OCA5Ny4wODIgMTQwLjU5MiA5Ni44NjMzIDE0MC4zNzcgOTYuNjkxNEMxNDAuMTYyIDk2LjUxOTUgMTM5Ljg2OSA5Ni40MzM2IDEzOS40OTggOTYuNDMzNkMxMzkuMjUyIDk2LjQzMzYgMTM5LjAyNSA5Ni40ODYzIDEzOC44MTggOTYuNTkxOEMxMzguNjExIDk2LjY5MzQgMTM4LjQzNCA5Ni44NDU3IDEzOC4yODUgOTcuMDQ4OEMxMzguMTM3IDk3LjI1MiAxMzguMDIxIDk3LjUgMTM3LjkzOSA5Ny43OTNDMTM3Ljg1NyA5OC4wODU5IDEzNy44MTYgOTguNDIzOCAxMzcuODE2IDk4LjgwNjZWOTkuMDUyN0MxMzcuODE2IDk5LjM1MzUgMTM3Ljg1NyA5OS42MzY3IDEzNy45MzkgOTkuOTAyM0MxMzguMDI1IDEwMC4xNjQgMTM4LjE0OCAxMDAuMzk1IDEzOC4zMDkgMTAwLjU5NEMxMzguNDczIDEwMC43OTMgMTM4LjY3IDEwMC45NDkgMTM4LjkgMTAxLjA2MkMxMzkuMTM1IDEwMS4xNzYgMTM5LjQgMTAxLjIzMiAxMzkuNjk3IDEwMS4yMzJDMTQwLjA4IDEwMS4yMzIgMTQwLjQwNCAxMDEuMTU0IDE0MC42NyAxMDAuOTk4QzE0MC45MzYgMTAwLjg0MiAxNDEuMTY4IDEwMC42MzMgMTQxLjM2NyAxMDAuMzcxTDE0Mi4wMjMgMTAwLjg5M0MxNDEuODg3IDEwMS4xIDE0MS43MTMgMTAxLjI5NyAxNDEuNTAyIDEwMS40ODRDMTQxLjI5MSAxMDEuNjcyIDE0MS4wMzEgMTAxLjgyNCAxNDAuNzIzIDEwMS45NDFDMTQwLjQxOCAxMDIuMDU5IDE0MC4wNTcgMTAyLjExNyAxMzkuNjM5IDEwMi4xMTdaTTE0Ny4zNjcgMTAwLjc3VjkzSDE0OC40NTdWMTAySDE0Ny40NjFMMTQ3LjM2NyAxMDAuNzdaTTE0My4xMDIgOTguOTAwNFY5OC43NzczQzE0My4xMDIgOTguMjkzIDE0My4xNiA5Ny44NTM1IDE0My4yNzcgOTcuNDU5QzE0My4zOTggOTcuMDYwNSAxNDMuNTY4IDk2LjcxODggMTQzLjc4NyA5Ni40MzM2QzE0NC4wMSA5Ni4xNDg0IDE0NC4yNzMgOTUuOTI5NyAxNDQuNTc4IDk1Ljc3NzNDMTQ0Ljg4NyA5NS42MjExIDE0NS4yMyA5NS41NDMgMTQ1LjYwOSA5NS41NDNDMTQ2LjAwOCA5NS41NDMgMTQ2LjM1NSA5NS42MTMzIDE0Ni42NTIgOTUuNzUzOUMxNDYuOTUzIDk1Ljg5MDYgMTQ3LjIwNyA5Ni4wOTE4IDE0Ny40MTQgOTYuMzU3NEMxNDcuNjI1IDk2LjYxOTEgMTQ3Ljc5MSA5Ni45MzU1IDE0Ny45MTIgOTcuMzA2NkMxNDguMDMzIDk3LjY3NzcgMTQ4LjExNyA5OC4wOTc3IDE0OC4xNjQgOTguNTY2NFY5OS4xMDU1QzE0OC4xMjEgOTkuNTcwMyAxNDguMDM3IDk5Ljk4ODMgMTQ3LjkxMiAxMDAuMzU5QzE0Ny43OTEgMTAwLjczIDE0Ny42MjUgMTAxLjA0NyAxNDcuNDE0IDEwMS4zMDlDMTQ3LjIwNyAxMDEuNTcgMTQ2Ljk1MyAxMDEuNzcxIDE0Ni42NTIgMTAxLjkxMkMxNDYuMzUyIDEwMi4wNDkgMTQ2IDEwMi4xMTcgMTQ1LjU5OCAxMDIuMTE3QzE0NS4yMjcgMTAyLjExNyAxNDQuODg3IDEwMi4wMzcgMTQ0LjU3OCAxMDEuODc3QzE0NC4yNzMgMTAxLjcxNyAxNDQuMDEgMTAxLjQ5MiAxNDMuNzg3IDEwMS4yMDNDMTQzLjU2OCAxMDAuOTE0IDE0My4zOTggMTAwLjU3NCAxNDMuMjc3IDEwMC4xODRDMTQzLjE2IDk5Ljc4OTEgMTQzLjEwMiA5OS4zNjEzIDE0My4xMDIgOTguOTAwNFpNMTQ0LjE5MSA5OC43NzczVjk4LjkwMDRDMTQ0LjE5MSA5OS4yMTY4IDE0NC4yMjMgOTkuNTEzNyAxNDQuMjg1IDk5Ljc5MUMxNDQuMzUyIDEwMC4wNjggMTQ0LjQ1MyAxMDAuMzEyIDE0NC41OSAxMDAuNTIzQzE0NC43MjcgMTAwLjczNCAxNDQuOSAxMDAuOSAxNDUuMTExIDEwMS4wMjFDMTQ1LjMyMiAxMDEuMTM5IDE0NS41NzQgMTAxLjE5NyAxNDUuODY3IDEwMS4xOTdDMTQ2LjIyNyAxMDEuMTk3IDE0Ni41MjEgMTAxLjEyMSAxNDYuNzUyIDEwMC45NjlDMTQ2Ljk4NiAxMDAuODE2IDE0Ny4xNzQgMTAwLjYxNSAxNDcuMzE0IDEwMC4zNjVDMTQ3LjQ1NSAxMDAuMTE1IDE0Ny41NjQgOTkuODQzOCAxNDcuNjQzIDk5LjU1MDhWOTguMTM4N0MxNDcuNTk2IDk3LjkyMzggMTQ3LjUyNyA5Ny43MTY4IDE0Ny40MzggOTcuNTE3NkMxNDcuMzUyIDk3LjMxNDUgMTQ3LjIzOCA5Ny4xMzQ4IDE0Ny4wOTggOTYuOTc4NUMxNDYuOTYxIDk2LjgxODQgMTQ2Ljc5MSA5Ni42OTE0IDE0Ni41ODggOTYuNTk3N0MxNDYuMzg5IDk2LjUwMzkgMTQ2LjE1MiA5Ni40NTcgMTQ1Ljg3OSA5Ni40NTdDMTQ1LjU4MiA5Ni40NTcgMTQ1LjMyNiA5Ni41MTk1IDE0NS4xMTEgOTYuNjQ0NUMxNDQuOSA5Ni43NjU2IDE0NC43MjcgOTYuOTMzNiAxNDQuNTkgOTcuMTQ4NEMxNDQuNDUzIDk3LjM1OTQgMTQ0LjM1MiA5Ny42MDU1IDE0NC4yODUgOTcuODg2N0MxNDQuMjIzIDk4LjE2NDEgMTQ0LjE5MSA5OC40NjA5IDE0NC4xOTEgOTguNzc3M1pNMTUzLjM1IDk4LjAwOThIMTUxLjE4OEwxNTEuMTc2IDk3LjEwMTZIMTUzLjEzOUMxNTMuNDYzIDk3LjEwMTYgMTUzLjc0NiA5Ny4wNDY5IDE1My45ODggOTYuOTM3NUMxNTQuMjMgOTYuODI4MSAxNTQuNDE4IDk2LjY3MTkgMTU0LjU1MSA5Ni40Njg4QzE1NC42ODggOTYuMjYxNyAxNTQuNzU2IDk2LjAxNTYgMTU0Ljc1NiA5NS43MzA1QzE1NC43NTYgOTUuNDE4IDE1NC42OTUgOTUuMTY0MSAxNTQuNTc0IDk0Ljk2ODhDMTU0LjQ1NyA5NC43Njk1IDE1NC4yNzUgOTQuNjI1IDE1NC4wMjkgOTQuNTM1MkMxNTMuNzg3IDk0LjQ0MTQgMTUzLjQ3OSA5NC4zOTQ1IDE1My4xMDQgOTQuMzk0NUgxNTEuNDM5VjEwMkgxNTAuMzA5VjkzLjQ2ODhIMTUzLjEwNEMxNTMuNTQxIDkzLjQ2ODggMTUzLjkzMiA5My41MTM3IDE1NC4yNzUgOTMuNjAzNUMxNTQuNjE5IDkzLjY4OTUgMTU0LjkxIDkzLjgyNjIgMTU1LjE0OCA5NC4wMTM3QzE1NS4zOTEgOTQuMTk3MyAxNTUuNTc0IDk0LjQzMTYgMTU1LjY5OSA5NC43MTY4QzE1NS44MjQgOTUuMDAyIDE1NS44ODcgOTUuMzQzOCAxNTUuODg3IDk1Ljc0MjJDMTU1Ljg4NyA5Ni4wOTM4IDE1NS43OTcgOTYuNDEyMSAxNTUuNjE3IDk2LjY5NzNDMTU1LjQzOCA5Ni45Nzg1IDE1NS4xODggOTcuMjA5IDE1NC44NjcgOTcuMzg4N0MxNTQuNTUxIDk3LjU2ODQgMTU0LjE4IDk3LjY4MzYgMTUzLjc1NCA5Ny43MzQ0TDE1My4zNSA5OC4wMDk4Wk0xNTMuMjk3IDEwMkgxNTAuNzQyTDE1MS4zODEgMTAxLjA4SDE1My4yOTdDMTUzLjY1NiAxMDEuMDggMTUzLjk2MSAxMDEuMDE4IDE1NC4yMTEgMTAwLjg5M0MxNTQuNDY1IDEwMC43NjggMTU0LjY1OCAxMDAuNTkyIDE1NC43OTEgMTAwLjM2NUMxNTQuOTI0IDEwMC4xMzUgMTU0Ljk5IDk5Ljg2MzMgMTU0Ljk5IDk5LjU1MDhDMTU0Ljk5IDk5LjIzNDQgMTU0LjkzNCA5OC45NjA5IDE1NC44MiA5OC43MzA1QzE1NC43MDcgOTguNSAxNTQuNTI5IDk4LjMyMjMgMTU0LjI4NyA5OC4xOTczQzE1NC4wNDUgOTguMDcyMyAxNTMuNzMyIDk4LjAwOTggMTUzLjM1IDk4LjAwOThIMTUxLjczOEwxNTEuNzUgOTcuMTAxNkgxNTMuOTUzTDE1NC4xOTMgOTcuNDI5N0MxNTQuNjA0IDk3LjQ2NDggMTU0Ljk1MSA5Ny41ODIgMTU1LjIzNiA5Ny43ODEyQzE1NS41MjEgOTcuOTc2NiAxNTUuNzM4IDk4LjIyNjYgMTU1Ljg4NyA5OC41MzEyQzE1Ni4wMzkgOTguODM1OSAxNTYuMTE1IDk5LjE3MTkgMTU2LjExNSA5OS41MzkxQzE1Ni4xMTUgMTAwLjA3IDE1NS45OTggMTAwLjUyIDE1NS43NjQgMTAwLjg4N0MxNTUuNTMzIDEwMS4yNSAxNTUuMjA3IDEwMS41MjcgMTU0Ljc4NSAxMDEuNzE5QzE1NC4zNjMgMTAxLjkwNiAxNTMuODY3IDEwMiAxNTMuMjk3IDEwMlpNMTYxLjM1OSAxMDAuOTE2Vjk3LjY1MjNDMTYxLjM1OSA5Ny40MDIzIDE2MS4zMDkgOTcuMTg1NSAxNjEuMjA3IDk3LjAwMkMxNjEuMTA5IDk2LjgxNDUgMTYwLjk2MSA5Ni42Njk5IDE2MC43NjIgOTYuNTY4NEMxNjAuNTYyIDk2LjQ2NjggMTYwLjMxNiA5Ni40MTYgMTYwLjAyMyA5Ni40MTZDMTU5Ljc1IDk2LjQxNiAxNTkuNTEgOTYuNDYyOSAxNTkuMzAzIDk2LjU1NjZDMTU5LjEgOTYuNjUwNCAxNTguOTM5IDk2Ljc3MzQgMTU4LjgyMiA5Ni45MjU4QzE1OC43MDkgOTcuMDc4MSAxNTguNjUyIDk3LjI0MjIgMTU4LjY1MiA5Ny40MThIMTU3LjU2OEMxNTcuNTY4IDk3LjE5MTQgMTU3LjYyNyA5Ni45NjY4IDE1Ny43NDQgOTYuNzQ0MUMxNTcuODYxIDk2LjUyMTUgMTU4LjAyOSA5Ni4zMjAzIDE1OC4yNDggOTYuMTQwNkMxNTguNDcxIDk1Ljk1NyAxNTguNzM2IDk1LjgxMjUgMTU5LjA0NSA5NS43MDdDMTU5LjM1NyA5NS41OTc3IDE1OS43MDUgOTUuNTQzIDE2MC4wODggOTUuNTQzQzE2MC41NDkgOTUuNTQzIDE2MC45NTUgOTUuNjIxMSAxNjEuMzA3IDk1Ljc3NzNDMTYxLjY2MiA5NS45MzM2IDE2MS45MzkgOTYuMTY5OSAxNjIuMTM5IDk2LjQ4NjNDMTYyLjM0MiA5Ni43OTg4IDE2Mi40NDMgOTcuMTkxNCAxNjIuNDQzIDk3LjY2NDFWMTAwLjYxN0MxNjIuNDQzIDEwMC44MjggMTYyLjQ2MSAxMDEuMDUzIDE2Mi40OTYgMTAxLjI5MUMxNjIuNTM1IDEwMS41MjkgMTYyLjU5MiAxMDEuNzM0IDE2Mi42NjYgMTAxLjkwNlYxMDJIMTYxLjUzNUMxNjEuNDggMTAxLjg3NSAxNjEuNDM4IDEwMS43MDkgMTYxLjQwNiAxMDEuNTAyQzE2MS4zNzUgMTAxLjI5MSAxNjEuMzU5IDEwMS4wOTYgMTYxLjM1OSAxMDAuOTE2Wk0xNjEuNTQ3IDk4LjE1NjJMMTYxLjU1OSA5OC45MThIMTYwLjQ2M0MxNjAuMTU0IDk4LjkxOCAxNTkuODc5IDk4Ljk0MzQgMTU5LjYzNyA5OC45OTQxQzE1OS4zOTUgOTkuMDQxIDE1OS4xOTEgOTkuMTEzMyAxNTkuMDI3IDk5LjIxMDlDMTU4Ljg2MyA5OS4zMDg2IDE1OC43MzggOTkuNDMxNiAxNTguNjUyIDk5LjU4MDFDMTU4LjU2NiA5OS43MjQ2IDE1OC41MjMgOTkuODk0NSAxNTguNTIzIDEwMC4wOUMxNTguNTIzIDEwMC4yODkgMTU4LjU2OCAxMDAuNDcxIDE1OC42NTggMTAwLjYzNUMxNTguNzQ4IDEwMC43OTkgMTU4Ljg4MyAxMDAuOTMgMTU5LjA2MiAxMDEuMDI3QzE1OS4yNDYgMTAxLjEyMSAxNTkuNDcxIDEwMS4xNjggMTU5LjczNiAxMDEuMTY4QzE2MC4wNjggMTAxLjE2OCAxNjAuMzYxIDEwMS4wOTggMTYwLjYxNSAxMDAuOTU3QzE2MC44NjkgMTAwLjgxNiAxNjEuMDcgMTAwLjY0NSAxNjEuMjE5IDEwMC40NDFDMTYxLjM3MSAxMDAuMjM4IDE2MS40NTMgMTAwLjA0MSAxNjEuNDY1IDk5Ljg0OTZMMTYxLjkyOCAxMDAuMzcxQzE2MS45IDEwMC41MzUgMTYxLjgyNiAxMDAuNzE3IDE2MS43MDUgMTAwLjkxNkMxNjEuNTg0IDEwMS4xMTUgMTYxLjQyMiAxMDEuMzA3IDE2MS4yMTkgMTAxLjQ5QzE2MS4wMiAxMDEuNjcgMTYwLjc4MSAxMDEuODIgMTYwLjUwNCAxMDEuOTQxQzE2MC4yMyAxMDIuMDU5IDE1OS45MjIgMTAyLjExNyAxNTkuNTc4IDEwMi4xMTdDMTU5LjE0OCAxMDIuMTE3IDE1OC43NzEgMTAyLjAzMyAxNTguNDQ3IDEwMS44NjVDMTU4LjEyNyAxMDEuNjk3IDE1Ny44NzcgMTAxLjQ3MyAxNTcuNjk3IDEwMS4xOTFDMTU3LjUyMSAxMDAuOTA2IDE1Ny40MzQgMTAwLjU4OCAxNTcuNDM0IDEwMC4yMzZDMTU3LjQzNCA5OS44OTY1IDE1Ny41IDk5LjU5NzcgMTU3LjYzMyA5OS4zMzk4QzE1Ny43NjYgOTkuMDc4MSAxNTcuOTU3IDk4Ljg2MTMgMTU4LjIwNyA5OC42ODk1QzE1OC40NTcgOTguNTEzNyAxNTguNzU4IDk4LjM4MDkgMTU5LjEwOSA5OC4yOTFDMTU5LjQ2MSA5OC4yMDEyIDE1OS44NTQgOTguMTU2MiAxNjAuMjg3IDk4LjE1NjJIMTYxLjU0N1pNMTY2LjY4NiAxMDEuMjI3QzE2Ni45NDMgMTAxLjIyNyAxNjcuMTgyIDEwMS4xNzQgMTY3LjQgMTAxLjA2OEMxNjcuNjE5IDEwMC45NjMgMTY3Ljc5OSAxMDAuODE4IDE2Ny45MzkgMTAwLjYzNUMxNjguMDggMTAwLjQ0NyAxNjguMTYgMTAwLjIzNCAxNjguMTggOTkuOTk2MUgxNjkuMjExQzE2OS4xOTEgMTAwLjM3MSAxNjkuMDY0IDEwMC43MjEgMTY4LjgzIDEwMS4wNDVDMTY4LjYgMTAxLjM2NSAxNjguMjk3IDEwMS42MjUgMTY3LjkyMiAxMDEuODI0QzE2Ny41NDcgMTAyLjAyIDE2Ny4xMzUgMTAyLjExNyAxNjYuNjg2IDEwMi4xMTdDMTY2LjIwOSAxMDIuMTE3IDE2NS43OTMgMTAyLjAzMyAxNjUuNDM4IDEwMS44NjVDMTY1LjA4NiAxMDEuNjk3IDE2NC43OTMgMTAxLjQ2NyAxNjQuNTU5IDEwMS4xNzRDMTY0LjMyOCAxMDAuODgxIDE2NC4xNTQgMTAwLjU0NSAxNjQuMDM3IDEwMC4xNjZDMTYzLjkyNCA5OS43ODMyIDE2My44NjcgOTkuMzc4OSAxNjMuODY3IDk4Ljk1MzFWOTguNzA3QzE2My44NjcgOTguMjgxMiAxNjMuOTI0IDk3Ljg3ODkgMTY0LjAzNyA5Ny41QzE2NC4xNTQgOTcuMTE3MiAxNjQuMzI4IDk2Ljc3OTMgMTY0LjU1OSA5Ni40ODYzQzE2NC43OTMgOTYuMTkzNCAxNjUuMDg2IDk1Ljk2MjkgMTY1LjQzOCA5NS43OTQ5QzE2NS43OTMgOTUuNjI3IDE2Ni4yMDkgOTUuNTQzIDE2Ni42ODYgOTUuNTQzQzE2Ny4xODIgOTUuNTQzIDE2Ny42MTUgOTUuNjQ0NSAxNjcuOTg2IDk1Ljg0NzdDMTY4LjM1NyA5Ni4wNDY5IDE2OC42NDggOTYuMzIwMyAxNjguODU5IDk2LjY2OEMxNjkuMDc0IDk3LjAxMTcgMTY5LjE5MSA5Ny40MDIzIDE2OS4yMTEgOTcuODM5OEgxNjguMThDMTY4LjE2IDk3LjU3ODEgMTY4LjA4NiA5Ny4zNDE4IDE2Ny45NTcgOTcuMTMwOUMxNjcuODMyIDk2LjkxOTkgMTY3LjY2IDk2Ljc1MiAxNjcuNDQxIDk2LjYyN0MxNjcuMjI3IDk2LjQ5OCAxNjYuOTc1IDk2LjQzMzYgMTY2LjY4NiA5Ni40MzM2QzE2Ni4zNTQgOTYuNDMzNiAxNjYuMDc0IDk2LjUgMTY1Ljg0OCA5Ni42MzI4QzE2NS42MjUgOTYuNzYxNyAxNjUuNDQ3IDk2LjkzNzUgMTY1LjMxNCA5Ny4xNjAyQzE2NS4xODYgOTcuMzc4OSAxNjUuMDkyIDk3LjYyMyAxNjUuMDMzIDk3Ljg5MjZDMTY0Ljk3OSA5OC4xNTgyIDE2NC45NTEgOTguNDI5NyAxNjQuOTUxIDk4LjcwN1Y5OC45NTMxQzE2NC45NTEgOTkuMjMwNSAxNjQuOTc5IDk5LjUwMzkgMTY1LjAzMyA5OS43NzM0QzE2NS4wODggMTAwLjA0MyAxNjUuMTggMTAwLjI4NyAxNjUuMzA5IDEwMC41MDZDMTY1LjQ0MSAxMDAuNzI1IDE2NS42MTkgMTAwLjkgMTY1Ljg0MiAxMDEuMDMzQzE2Ni4wNjggMTAxLjE2MiAxNjYuMzUgMTAxLjIyNyAxNjYuNjg2IDEwMS4yMjdaTTE3MS41MiA5M1YxMDJIMTcwLjQzVjkzSDE3MS41MlpNMTc1LjM5MyA5NS42NjAyTDE3Mi42MjcgOTguNjE5MUwxNzEuMDggMTAwLjIyNUwxNzAuOTkyIDk5LjA3MDNMMTcyLjEgOTcuNzQ2MUwxNzQuMDY4IDk1LjY2MDJIMTc1LjM5M1pNMTc0LjQwMiAxMDJMMTcyLjE0MSA5OC45NzY2TDE3Mi43MDMgOTguMDA5OEwxNzUuNjggMTAySDE3NC40MDJaXCJcclxuXHRcdFx0ZmlsbD1cIiMwRjE3MkFcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMTEzXCIgeT1cIjExMFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMTE5XCIgeT1cIjExNlwiIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMjAwXCIgeT1cIjEyXCIgd2lkdGg9XCI4NlwiIGhlaWdodD1cIjEyMFwiIHJ4PVwiNFwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuXHRcdDxyZWN0IHg9XCIyMTNcIiB5PVwiMjVcIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiByeD1cIjRcIiBmaWxsPVwiI0YxRjVGOVwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMjMxIDQ2LjAwNzRDMjMxIDQ1LjQ1MSAyMzEuNDQ4IDQ1IDIzMiA0NUgyNDZDMjQ2LjU1MiA0NSAyNDcgNDUuNDUxIDI0NyA0Ni4wMDc0QzI0NyA0Ni41NjM4IDI0Ni41NTIgNDcuMDE0OCAyNDYgNDcuMDE0OEgyMzJDMjMxLjQ0OCA0Ny4wMTQ4IDIzMSA0Ni41NjM4IDIzMSA0Ni4wMDc0WlwiXHJcblx0XHRcdGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0yMzIgNDkuMDI5NkMyMzEuNDQ4IDQ5LjAyOTYgMjMxIDQ5LjQ4MDYgMjMxIDUwLjAzN0MyMzEgNTAuNTkzMyAyMzEuNDQ4IDUxLjA0NDQgMjMyIDUxLjA0NDRIMjQ2QzI0Ni41NTIgNTEuMDQ0NCAyNDcgNTAuNTkzMyAyNDcgNTAuMDM3QzI0NyA0OS40ODA2IDI0Ni41NTIgNDkuMDI5NiAyNDYgNDkuMDI5NkgyMzJaXCJcclxuXHRcdFx0ZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTIzMiA1My4wNTkxQzIzMS40NDggNTMuMDU5MSAyMzEgNTMuNTEwMiAyMzEgNTQuMDY2NUMyMzEgNTQuNjIyOSAyMzEuNDQ4IDU1LjA3MzkgMjMyIDU1LjA3MzlIMjQxQzI0MS41NTIgNTUuMDczOSAyNDIgNTQuNjIyOSAyNDIgNTQuMDY2NUMyNDIgNTMuNTEwMiAyNDEuNTUyIDUzLjA1OTEgMjQxIDUzLjA1OTFIMjMyWlwiXHJcblx0XHRcdGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0yMzEgNTcuOTkyNkMyMzEgNTcuNDM2MiAyMzEuNDQ4IDU2Ljk4NTIgMjMyIDU2Ljk4NTJIMjM4QzIzOC41NTIgNTYuOTg1MiAyMzkgNTcuNDM2MiAyMzkgNTcuOTkyNkMyMzkgNTguNTQ5IDIzOC41NTIgNTkgMjM4IDU5SDIzMkMyMzEuNDQ4IDU5IDIzMSA1OC41NDkgMjMxIDU3Ljk5MjZaXCJcclxuXHRcdFx0ZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTI0OSA1OUMyNDkgNTguNDQ3NyAyNDkuNDQ4IDU4IDI1MCA1OEMyNTAuNTUyIDU4IDI1MSA1OC40NDc3IDI1MSA1OVY2MUgyNTNDMjUzLjU1MiA2MSAyNTQgNjEuNDQ3NyAyNTQgNjJDMjU0IDYyLjU1MjMgMjUzLjU1MiA2MyAyNTMgNjNIMjUxVjY1QzI1MSA2NS41NTIzIDI1MC41NTIgNjYgMjUwIDY2QzI0OS40NDggNjYgMjQ5IDY1LjU1MjMgMjQ5IDY1VjYzSDI0N0MyNDYuNDQ4IDYzIDI0NiA2Mi41NTIzIDI0NiA2MkMyNDYgNjEuNDQ3NyAyNDYuNDQ4IDYxIDI0NyA2MUgyNDlWNTlaXCJcclxuXHRcdFx0ZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTI1MSA0M1Y1My4wNTQ5QzI1NS41IDUzLjU1MjQgMjU5IDU3LjM2NzQgMjU5IDYyQzI1OSA2Ni45NzA2IDI1NC45NzEgNzEgMjUwIDcxQzI0Ny44NTcgNzEgMjQ1Ljg4OCA3MC4yNTA4IDI0NC4zNDMgNjlIMjMxQzIyOC43OTEgNjkgMjI3IDY3LjIwOTEgMjI3IDY1VjQzQzIyNyA0MC43OTA5IDIyOC43OTEgMzkgMjMxIDM5SDI0N0MyNDkuMjA5IDM5IDI1MSA0MC43OTA5IDI1MSA0M1pNMjMxIDQxSDI0N0MyNDguMTA1IDQxIDI0OSA0MS44OTU0IDI0OSA0M1Y1My4wNTQ5QzI0NC41IDUzLjU1MjQgMjQxIDU3LjM2NzQgMjQxIDYyQzI0MSA2My44NTAxIDI0MS41NTggNjUuNTY5OSAyNDIuNTE2IDY3SDIzMUMyMjkuODk1IDY3IDIyOSA2Ni4xMDQ2IDIyOSA2NVY0M0MyMjkgNDEuODk1NCAyMjkuODk1IDQxIDIzMSA0MVpNMjU3IDYyQzI1NyA2NS44NjYgMjUzLjg2NiA2OSAyNTAgNjlDMjQ2LjEzNCA2OSAyNDMgNjUuODY2IDI0MyA2MkMyNDMgNTguMTM0IDI0Ni4xMzQgNTUgMjUwIDU1QzI1My44NjYgNTUgMjU3IDU4LjEzNCAyNTcgNjJaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0yMTYuNjExIDkzLjQ2ODhWMTAySDIxNS40OFY5My40Njg4SDIxNi42MTFaTTIxOS41ODggOTcuMDEzN1YxMDJIMjE4LjUwNFY5NS42NjAySDIxOS41MjlMMjE5LjU4OCA5Ny4wMTM3Wk0yMTkuMzMgOTguNTg5OEwyMTguODc5IDk4LjU3MjNDMjE4Ljg4MyA5OC4xMzg3IDIxOC45NDcgOTcuNzM4MyAyMTkuMDcyIDk3LjM3MTFDMjE5LjE5NyA5NyAyMTkuMzczIDk2LjY3NzcgMjE5LjYgOTYuNDA0M0MyMTkuODI2IDk2LjEzMDkgMjIwLjA5NiA5NS45MTk5IDIyMC40MDggOTUuNzcxNUMyMjAuNzI1IDk1LjYxOTEgMjIxLjA3NCA5NS41NDMgMjIxLjQ1NyA5NS41NDNDMjIxLjc3IDk1LjU0MyAyMjIuMDUxIDk1LjU4NTkgMjIyLjMwMSA5NS42NzE5QzIyMi41NTEgOTUuNzUzOSAyMjIuNzY0IDk1Ljg4NjcgMjIyLjkzOSA5Ni4wNzAzQzIyMy4xMTkgOTYuMjUzOSAyMjMuMjU2IDk2LjQ5MjIgMjIzLjM1IDk2Ljc4NTJDMjIzLjQ0MyA5Ny4wNzQyIDIyMy40OSA5Ny40Mjc3IDIyMy40OSA5Ny44NDU3VjEwMkgyMjIuNFY5Ny44MzRDMjIyLjQgOTcuNTAyIDIyMi4zNTIgOTcuMjM2MyAyMjIuMjU0IDk3LjAzNzFDMjIyLjE1NiA5Ni44MzQgMjIyLjAxNCA5Ni42ODc1IDIyMS44MjYgOTYuNTk3N0MyMjEuNjM5IDk2LjUwMzkgMjIxLjQwOCA5Ni40NTcgMjIxLjEzNSA5Ni40NTdDMjIwLjg2NSA5Ni40NTcgMjIwLjYxOSA5Ni41MTM3IDIyMC4zOTYgOTYuNjI3QzIyMC4xNzggOTYuNzQwMiAyMTkuOTg4IDk2Ljg5NjUgMjE5LjgyOCA5Ny4wOTU3QzIxOS42NzIgOTcuMjk0OSAyMTkuNTQ5IDk3LjUyMzQgMjE5LjQ1OSA5Ny43ODEyQzIxOS4zNzMgOTguMDM1MiAyMTkuMzMgOTguMzA0NyAyMTkuMzMgOTguNTg5OFpNMjI4LjgyOCAxMDAuMzE4QzIyOC44MjggMTAwLjE2MiAyMjguNzkzIDEwMC4wMTggMjI4LjcyMyA5OS44ODQ4QzIyOC42NTYgOTkuNzQ4IDIyOC41MTggOTkuNjI1IDIyOC4zMDcgOTkuNTE1NkMyMjguMSA5OS40MDIzIDIyNy43ODcgOTkuMzA0NyAyMjcuMzY5IDk5LjIyMjdDMjI3LjAxOCA5OS4xNDg0IDIyNi42OTkgOTkuMDYwNSAyMjYuNDE0IDk4Ljk1OUMyMjYuMTMzIDk4Ljg1NzQgMjI1Ljg5MyA5OC43MzQ0IDIyNS42OTMgOTguNTg5OEMyMjUuNDk4IDk4LjQ0NTMgMjI1LjM0OCA5OC4yNzU0IDIyNS4yNDIgOTguMDgwMUMyMjUuMTM3IDk3Ljg4NDggMjI1LjA4NCA5Ny42NTYyIDIyNS4wODQgOTcuMzk0NUMyMjUuMDg0IDk3LjE0NDUgMjI1LjEzOSA5Ni45MDgyIDIyNS4yNDggOTYuNjg1NUMyMjUuMzYxIDk2LjQ2MjkgMjI1LjUyIDk2LjI2NTYgMjI1LjcyMyA5Ni4wOTM4QzIyNS45MyA5NS45MjE5IDIyNi4xNzggOTUuNzg3MSAyMjYuNDY3IDk1LjY4OTVDMjI2Ljc1NiA5NS41OTE4IDIyNy4wNzggOTUuNTQzIDIyNy40MzQgOTUuNTQzQzIyNy45NDEgOTUuNTQzIDIyOC4zNzUgOTUuNjMyOCAyMjguNzM0IDk1LjgxMjVDMjI5LjA5NCA5NS45OTIyIDIyOS4zNjkgOTYuMjMyNCAyMjkuNTYxIDk2LjUzMzJDMjI5Ljc1MiA5Ni44MzAxIDIyOS44NDggOTcuMTYwMiAyMjkuODQ4IDk3LjUyMzRIMjI4Ljc2NEMyMjguNzY0IDk3LjM0NzcgMjI4LjcxMSA5Ny4xNzc3IDIyOC42MDUgOTcuMDEzN0MyMjguNTA0IDk2Ljg0NTcgMjI4LjM1NCA5Ni43MDcgMjI4LjE1NCA5Ni41OTc3QzIyNy45NTkgOTYuNDg4MyAyMjcuNzE5IDk2LjQzMzYgMjI3LjQzNCA5Ni40MzM2QzIyNy4xMzMgOTYuNDMzNiAyMjYuODg5IDk2LjQ4MDUgMjI2LjcwMSA5Ni41NzQyQzIyNi41MTggOTYuNjY0MSAyMjYuMzgzIDk2Ljc3OTMgMjI2LjI5NyA5Ni45MTk5QzIyNi4yMTUgOTcuMDYwNSAyMjYuMTc0IDk3LjIwOSAyMjYuMTc0IDk3LjM2NTJDMjI2LjE3NCA5Ny40ODI0IDIyNi4xOTMgOTcuNTg3OSAyMjYuMjMyIDk3LjY4MTZDMjI2LjI3NSA5Ny43NzE1IDIyNi4zNSA5Ny44NTU1IDIyNi40NTUgOTcuOTMzNkMyMjYuNTYxIDk4LjAwNzggMjI2LjcwOSA5OC4wNzgxIDIyNi45IDk4LjE0NDVDMjI3LjA5MiA5OC4yMTA5IDIyNy4zMzYgOTguMjc3MyAyMjcuNjMzIDk4LjM0MzhDMjI4LjE1MiA5OC40NjA5IDIyOC41OCA5OC42MDE2IDIyOC45MTYgOTguNzY1NkMyMjkuMjUyIDk4LjkyOTcgMjI5LjUwMiA5OS4xMzA5IDIyOS42NjYgOTkuMzY5MUMyMjkuODMgOTkuNjA3NCAyMjkuOTEyIDk5Ljg5NjUgMjI5LjkxMiAxMDAuMjM2QzIyOS45MTIgMTAwLjUxNCAyMjkuODU0IDEwMC43NjggMjI5LjczNiAxMDAuOTk4QzIyOS42MjMgMTAxLjIyOSAyMjkuNDU3IDEwMS40MjggMjI5LjIzOCAxMDEuNTk2QzIyOS4wMjMgMTAxLjc2IDIyOC43NjYgMTAxLjg4OSAyMjguNDY1IDEwMS45ODJDMjI4LjE2OCAxMDIuMDcyIDIyNy44MzQgMTAyLjExNyAyMjcuNDYzIDEwMi4xMTdDMjI2LjkwNCAxMDIuMTE3IDIyNi40MzIgMTAyLjAxOCAyMjYuMDQ1IDEwMS44MThDMjI1LjY1OCAxMDEuNjE5IDIyNS4zNjUgMTAxLjM2MSAyMjUuMTY2IDEwMS4wNDVDMjI0Ljk2NyAxMDAuNzI5IDIyNC44NjcgMTAwLjM5NSAyMjQuODY3IDEwMC4wNDNIMjI1Ljk1N0MyMjUuOTczIDEwMC4zNCAyMjYuMDU5IDEwMC41NzYgMjI2LjIxNSAxMDAuNzUyQzIyNi4zNzEgMTAwLjkyNCAyMjYuNTYyIDEwMS4wNDcgMjI2Ljc4OSAxMDEuMTIxQzIyNy4wMTYgMTAxLjE5MSAyMjcuMjQgMTAxLjIyNyAyMjcuNDYzIDEwMS4yMjdDMjI3Ljc2IDEwMS4yMjcgMjI4LjAwOCAxMDEuMTg4IDIyOC4yMDcgMTAxLjEwOUMyMjguNDEgMTAxLjAzMSAyMjguNTY0IDEwMC45MjQgMjI4LjY3IDEwMC43ODdDMjI4Ljc3NSAxMDAuNjUgMjI4LjgyOCAxMDAuNDk0IDIyOC44MjggMTAwLjMxOFpNMjMzLjk2NyAxMDIuMTE3QzIzMy41MjUgMTAyLjExNyAyMzMuMTI1IDEwMi4wNDMgMjMyLjc2NiAxMDEuODk1QzIzMi40MSAxMDEuNzQyIDIzMi4xMDQgMTAxLjUyOSAyMzEuODQ2IDEwMS4yNTZDMjMxLjU5MiAxMDAuOTgyIDIzMS4zOTYgMTAwLjY1OCAyMzEuMjYgMTAwLjI4M0MyMzEuMTIzIDk5LjkwODIgMjMxLjA1NSA5OS40OTggMjMxLjA1NSA5OS4wNTI3Vjk4LjgwNjZDMjMxLjA1NSA5OC4yOTEgMjMxLjEzMSA5Ny44MzIgMjMxLjI4MyA5Ny40Mjk3QzIzMS40MzYgOTcuMDIzNCAyMzEuNjQzIDk2LjY3OTcgMjMxLjkwNCA5Ni4zOTg0QzIzMi4xNjYgOTYuMTE3MiAyMzIuNDYzIDk1LjkwNDMgMjMyLjc5NSA5NS43NTk4QzIzMy4xMjcgOTUuNjE1MiAyMzMuNDcxIDk1LjU0MyAyMzMuODI2IDk1LjU0M0MyMzQuMjc5IDk1LjU0MyAyMzQuNjcgOTUuNjIxMSAyMzQuOTk4IDk1Ljc3NzNDMjM1LjMzIDk1LjkzMzYgMjM1LjYwMiA5Ni4xNTIzIDIzNS44MTIgOTYuNDMzNkMyMzYuMDIzIDk2LjcxMDkgMjM2LjE4IDk3LjAzOTEgMjM2LjI4MSA5Ny40MThDMjM2LjM4MyA5Ny43OTMgMjM2LjQzNCA5OC4yMDMxIDIzNi40MzQgOTguNjQ4NFY5OS4xMzQ4SDIzMS42OTlWOTguMjVIMjM1LjM1Vjk4LjE2OEMyMzUuMzM0IDk3Ljg4NjcgMjM1LjI3NSA5Ny42MTMzIDIzNS4xNzQgOTcuMzQ3N0MyMzUuMDc2IDk3LjA4MiAyMzQuOTIgOTYuODYzMyAyMzQuNzA1IDk2LjY5MTRDMjM0LjQ5IDk2LjUxOTUgMjM0LjE5NyA5Ni40MzM2IDIzMy44MjYgOTYuNDMzNkMyMzMuNTggOTYuNDMzNiAyMzMuMzU0IDk2LjQ4NjMgMjMzLjE0NiA5Ni41OTE4QzIzMi45MzkgOTYuNjkzNCAyMzIuNzYyIDk2Ljg0NTcgMjMyLjYxMyA5Ny4wNDg4QzIzMi40NjUgOTcuMjUyIDIzMi4zNSA5Ny41IDIzMi4yNjggOTcuNzkzQzIzMi4xODYgOTguMDg1OSAyMzIuMTQ1IDk4LjQyMzggMjMyLjE0NSA5OC44MDY2Vjk5LjA1MjdDMjMyLjE0NSA5OS4zNTM1IDIzMi4xODYgOTkuNjM2NyAyMzIuMjY4IDk5LjkwMjNDMjMyLjM1NCAxMDAuMTY0IDIzMi40NzcgMTAwLjM5NSAyMzIuNjM3IDEwMC41OTRDMjMyLjgwMSAxMDAuNzkzIDIzMi45OTggMTAwLjk0OSAyMzMuMjI5IDEwMS4wNjJDMjMzLjQ2MyAxMDEuMTc2IDIzMy43MjkgMTAxLjIzMiAyMzQuMDI1IDEwMS4yMzJDMjM0LjQwOCAxMDEuMjMyIDIzNC43MzIgMTAxLjE1NCAyMzQuOTk4IDEwMC45OThDMjM1LjI2NCAxMDAuODQyIDIzNS40OTYgMTAwLjYzMyAyMzUuNjk1IDEwMC4zNzFMMjM2LjM1MiAxMDAuODkzQzIzNi4yMTUgMTAxLjEgMjM2LjA0MSAxMDEuMjk3IDIzNS44MyAxMDEuNDg0QzIzNS42MTkgMTAxLjY3MiAyMzUuMzU5IDEwMS44MjQgMjM1LjA1MSAxMDEuOTQxQzIzNC43NDYgMTAyLjA1OSAyMzQuMzg1IDEwMi4xMTcgMjMzLjk2NyAxMDIuMTE3Wk0yMzguNzgzIDk2LjY1NjJWMTAySDIzNy42OTlWOTUuNjYwMkgyMzguNzU0TDIzOC43ODMgOTYuNjU2MlpNMjQwLjc2NCA5NS42MjVMMjQwLjc1OCA5Ni42MzI4QzI0MC42NjggOTYuNjEzMyAyNDAuNTgyIDk2LjYwMTYgMjQwLjUgOTYuNTk3N0MyNDAuNDIyIDk2LjU4OTggMjQwLjMzMiA5Ni41ODU5IDI0MC4yMyA5Ni41ODU5QzIzOS45OCA5Ni41ODU5IDIzOS43NiA5Ni42MjUgMjM5LjU2OCA5Ni43MDMxQzIzOS4zNzcgOTYuNzgxMiAyMzkuMjE1IDk2Ljg5MDYgMjM5LjA4MiA5Ny4wMzEyQzIzOC45NDkgOTcuMTcxOSAyMzguODQ0IDk3LjMzOTggMjM4Ljc2NiA5Ny41MzUyQzIzOC42OTEgOTcuNzI2NiAyMzguNjQzIDk3LjkzNzUgMjM4LjYxOSA5OC4xNjhMMjM4LjMxNCA5OC4zNDM4QzIzOC4zMTQgOTcuOTYwOSAyMzguMzUyIDk3LjYwMTYgMjM4LjQyNiA5Ny4yNjU2QzIzOC41MDQgOTYuOTI5NyAyMzguNjIzIDk2LjYzMjggMjM4Ljc4MyA5Ni4zNzVDMjM4Ljk0MyA5Ni4xMTMzIDIzOS4xNDYgOTUuOTEwMiAyMzkuMzkzIDk1Ljc2NTZDMjM5LjY0MyA5NS42MTcyIDIzOS45MzkgOTUuNTQzIDI0MC4yODMgOTUuNTQzQzI0MC4zNjEgOTUuNTQzIDI0MC40NTEgOTUuNTUyNyAyNDAuNTUzIDk1LjU3MjNDMjQwLjY1NCA5NS41ODc5IDI0MC43MjUgOTUuNjA1NSAyNDAuNzY0IDk1LjYyNVpNMjQ0LjcxMyA5NS42NjAyVjk2LjQ5MjJIMjQxLjI4NVY5NS42NjAySDI0NC43MTNaTTI0Mi40NDUgOTQuMTE5MUgyNDMuNTI5VjEwMC40M0MyNDMuNTI5IDEwMC42NDUgMjQzLjU2MiAxMDAuODA3IDI0My42MjkgMTAwLjkxNkMyNDMuNjk1IDEwMS4wMjUgMjQzLjc4MSAxMDEuMDk4IDI0My44ODcgMTAxLjEzM0MyNDMuOTkyIDEwMS4xNjggMjQ0LjEwNSAxMDEuMTg2IDI0NC4yMjcgMTAxLjE4NkMyNDQuMzE2IDEwMS4xODYgMjQ0LjQxIDEwMS4xNzggMjQ0LjUwOCAxMDEuMTYyQzI0NC42MDkgMTAxLjE0MyAyNDQuNjg2IDEwMS4xMjcgMjQ0LjczNiAxMDEuMTE1TDI0NC43NDIgMTAyQzI0NC42NTYgMTAyLjAyNyAyNDQuNTQzIDEwMi4wNTMgMjQ0LjQwMiAxMDIuMDc2QzI0NC4yNjYgMTAyLjEwNCAyNDQuMSAxMDIuMTE3IDI0My45MDQgMTAyLjExN0MyNDMuNjM5IDEwMi4xMTcgMjQzLjM5NSAxMDIuMDY0IDI0My4xNzIgMTAxLjk1OUMyNDIuOTQ5IDEwMS44NTQgMjQyLjc3MSAxMDEuNjc4IDI0Mi42MzkgMTAxLjQzMkMyNDIuNTEgMTAxLjE4MiAyNDIuNDQ1IDEwMC44NDYgMjQyLjQ0NSAxMDAuNDI0Vjk0LjExOTFaTTI1Mi4yNzEgOTguNjU0M0gyNDkuOTkyVjk3LjczNDRIMjUyLjI3MUMyNTIuNzEzIDk3LjczNDQgMjUzLjA3IDk3LjY2NDEgMjUzLjM0NCA5Ny41MjM0QzI1My42MTcgOTcuMzgyOCAyNTMuODE2IDk3LjE4NzUgMjUzLjk0MSA5Ni45Mzc1QzI1NC4wNyA5Ni42ODc1IDI1NC4xMzUgOTYuNDAyMyAyNTQuMTM1IDk2LjA4MkMyNTQuMTM1IDk1Ljc4OTEgMjU0LjA3IDk1LjUxMzcgMjUzLjk0MSA5NS4yNTU5QzI1My44MTYgOTQuOTk4IDI1My42MTcgOTQuNzkxIDI1My4zNDQgOTQuNjM0OEMyNTMuMDcgOTQuNDc0NiAyNTIuNzEzIDk0LjM5NDUgMjUyLjI3MSA5NC4zOTQ1SDI1MC4yNTZWMTAySDI0OS4xMjVWOTMuNDY4OEgyNTIuMjcxQzI1Mi45MTYgOTMuNDY4OCAyNTMuNDYxIDkzLjU4MDEgMjUzLjkwNiA5My44MDI3QzI1NC4zNTIgOTQuMDI1NCAyNTQuNjg5IDk0LjMzNCAyNTQuOTIgOTQuNzI4NUMyNTUuMTUgOTUuMTE5MSAyNTUuMjY2IDk1LjU2NjQgMjU1LjI2NiA5Ni4wNzAzQzI1NS4yNjYgOTYuNjE3MiAyNTUuMTUgOTcuMDg0IDI1NC45MiA5Ny40NzA3QzI1NC42ODkgOTcuODU3NCAyNTQuMzUyIDk4LjE1MjMgMjUzLjkwNiA5OC4zNTU1QzI1My40NjEgOTguNTU0NyAyNTIuOTE2IDk4LjY1NDMgMjUyLjI3MSA5OC42NTQzWk0yNTYuMTYyIDk4LjkwMDRWOTguNzY1NkMyNTYuMTYyIDk4LjMwODYgMjU2LjIyOSA5Ny44ODQ4IDI1Ni4zNjEgOTcuNDk0MUMyNTYuNDk0IDk3LjA5OTYgMjU2LjY4NiA5Ni43NTc4IDI1Ni45MzYgOTYuNDY4OEMyNTcuMTg2IDk2LjE3NTggMjU3LjQ4OCA5NS45NDkyIDI1Ny44NDQgOTUuNzg5MUMyNTguMTk5IDk1LjYyNSAyNTguNTk4IDk1LjU0MyAyNTkuMDM5IDk1LjU0M0MyNTkuNDg0IDk1LjU0MyAyNTkuODg1IDk1LjYyNSAyNjAuMjQgOTUuNzg5MUMyNjAuNiA5NS45NDkyIDI2MC45MDQgOTYuMTc1OCAyNjEuMTU0IDk2LjQ2ODhDMjYxLjQwOCA5Ni43NTc4IDI2MS42MDIgOTcuMDk5NiAyNjEuNzM0IDk3LjQ5NDFDMjYxLjg2NyA5Ny44ODQ4IDI2MS45MzQgOTguMzA4NiAyNjEuOTM0IDk4Ljc2NTZWOTguOTAwNEMyNjEuOTM0IDk5LjM1NzQgMjYxLjg2NyA5OS43ODEyIDI2MS43MzQgMTAwLjE3MkMyNjEuNjAyIDEwMC41NjIgMjYxLjQwOCAxMDAuOTA0IDI2MS4xNTQgMTAxLjE5N0MyNjAuOTA0IDEwMS40ODYgMjYwLjYwMiAxMDEuNzEzIDI2MC4yNDYgMTAxLjg3N0MyNTkuODk1IDEwMi4wMzcgMjU5LjQ5NiAxMDIuMTE3IDI1OS4wNTEgMTAyLjExN0MyNTguNjA1IDEwMi4xMTcgMjU4LjIwNSAxMDIuMDM3IDI1Ny44NSAxMDEuODc3QzI1Ny40OTQgMTAxLjcxMyAyNTcuMTg5IDEwMS40ODYgMjU2LjkzNiAxMDEuMTk3QzI1Ni42ODYgMTAwLjkwNCAyNTYuNDk0IDEwMC41NjIgMjU2LjM2MSAxMDAuMTcyQzI1Ni4yMjkgOTkuNzgxMiAyNTYuMTYyIDk5LjM1NzQgMjU2LjE2MiA5OC45MDA0Wk0yNTcuMjQ2IDk4Ljc2NTZWOTguOTAwNEMyNTcuMjQ2IDk5LjIxNjggMjU3LjI4MyA5OS41MTU2IDI1Ny4zNTcgOTkuNzk2OUMyNTcuNDMyIDEwMC4wNzQgMjU3LjU0MyAxMDAuMzIgMjU3LjY5MSAxMDAuNTM1QzI1Ny44NDQgMTAwLjc1IDI1OC4wMzMgMTAwLjkyIDI1OC4yNiAxMDEuMDQ1QzI1OC40ODYgMTAxLjE2NiAyNTguNzUgMTAxLjIyNyAyNTkuMDUxIDEwMS4yMjdDMjU5LjM0OCAxMDEuMjI3IDI1OS42MDcgMTAxLjE2NiAyNTkuODMgMTAxLjA0NUMyNjAuMDU3IDEwMC45MiAyNjAuMjQ0IDEwMC43NSAyNjAuMzkzIDEwMC41MzVDMjYwLjU0MSAxMDAuMzIgMjYwLjY1MiAxMDAuMDc0IDI2MC43MjcgOTkuNzk2OUMyNjAuODA1IDk5LjUxNTYgMjYwLjg0NCA5OS4yMTY4IDI2MC44NDQgOTguOTAwNFY5OC43NjU2QzI2MC44NDQgOTguNDUzMSAyNjAuODA1IDk4LjE1ODIgMjYwLjcyNyA5Ny44ODA5QzI2MC42NTIgOTcuNTk5NiAyNjAuNTM5IDk3LjM1MTYgMjYwLjM4NyA5Ny4xMzY3QzI2MC4yMzggOTYuOTE4IDI2MC4wNTEgOTYuNzQ2MSAyNTkuODI0IDk2LjYyMTFDMjU5LjYwMiA5Ni40OTYxIDI1OS4zNCA5Ni40MzM2IDI1OS4wMzkgOTYuNDMzNkMyNTguNzQyIDk2LjQzMzYgMjU4LjQ4IDk2LjQ5NjEgMjU4LjI1NCA5Ni42MjExQzI1OC4wMzEgOTYuNzQ2MSAyNTcuODQ0IDk2LjkxOCAyNTcuNjkxIDk3LjEzNjdDMjU3LjU0MyA5Ny4zNTE2IDI1Ny40MzIgOTcuNTk5NiAyNTcuMzU3IDk3Ljg4MDlDMjU3LjI4MyA5OC4xNTgyIDI1Ny4yNDYgOTguNDUzMSAyNTcuMjQ2IDk4Ljc2NTZaTTI2Ni45ODQgMTAwLjMxOEMyNjYuOTg0IDEwMC4xNjIgMjY2Ljk0OSAxMDAuMDE4IDI2Ni44NzkgOTkuODg0OEMyNjYuODEyIDk5Ljc0OCAyNjYuNjc0IDk5LjYyNSAyNjYuNDYzIDk5LjUxNTZDMjY2LjI1NiA5OS40MDIzIDI2NS45NDMgOTkuMzA0NyAyNjUuNTI1IDk5LjIyMjdDMjY1LjE3NCA5OS4xNDg0IDI2NC44NTUgOTkuMDYwNSAyNjQuNTcgOTguOTU5QzI2NC4yODkgOTguODU3NCAyNjQuMDQ5IDk4LjczNDQgMjYzLjg1IDk4LjU4OThDMjYzLjY1NCA5OC40NDUzIDI2My41MDQgOTguMjc1NCAyNjMuMzk4IDk4LjA4MDFDMjYzLjI5MyA5Ny44ODQ4IDI2My4yNCA5Ny42NTYyIDI2My4yNCA5Ny4zOTQ1QzI2My4yNCA5Ny4xNDQ1IDI2My4yOTUgOTYuOTA4MiAyNjMuNDA0IDk2LjY4NTVDMjYzLjUxOCA5Ni40NjI5IDI2My42NzYgOTYuMjY1NiAyNjMuODc5IDk2LjA5MzhDMjY0LjA4NiA5NS45MjE5IDI2NC4zMzQgOTUuNzg3MSAyNjQuNjIzIDk1LjY4OTVDMjY0LjkxMiA5NS41OTE4IDI2NS4yMzQgOTUuNTQzIDI2NS41OSA5NS41NDNDMjY2LjA5OCA5NS41NDMgMjY2LjUzMSA5NS42MzI4IDI2Ni44OTEgOTUuODEyNUMyNjcuMjUgOTUuOTkyMiAyNjcuNTI1IDk2LjIzMjQgMjY3LjcxNyA5Ni41MzMyQzI2Ny45MDggOTYuODMwMSAyNjguMDA0IDk3LjE2MDIgMjY4LjAwNCA5Ny41MjM0SDI2Ni45MkMyNjYuOTIgOTcuMzQ3NyAyNjYuODY3IDk3LjE3NzcgMjY2Ljc2MiA5Ny4wMTM3QzI2Ni42NiA5Ni44NDU3IDI2Ni41MSA5Ni43MDcgMjY2LjMxMSA5Ni41OTc3QzI2Ni4xMTUgOTYuNDg4MyAyNjUuODc1IDk2LjQzMzYgMjY1LjU5IDk2LjQzMzZDMjY1LjI4OSA5Ni40MzM2IDI2NS4wNDUgOTYuNDgwNSAyNjQuODU3IDk2LjU3NDJDMjY0LjY3NCA5Ni42NjQxIDI2NC41MzkgOTYuNzc5MyAyNjQuNDUzIDk2LjkxOTlDMjY0LjM3MSA5Ny4wNjA1IDI2NC4zMyA5Ny4yMDkgMjY0LjMzIDk3LjM2NTJDMjY0LjMzIDk3LjQ4MjQgMjY0LjM1IDk3LjU4NzkgMjY0LjM4OSA5Ny42ODE2QzI2NC40MzIgOTcuNzcxNSAyNjQuNTA2IDk3Ljg1NTUgMjY0LjYxMSA5Ny45MzM2QzI2NC43MTcgOTguMDA3OCAyNjQuODY1IDk4LjA3ODEgMjY1LjA1NyA5OC4xNDQ1QzI2NS4yNDggOTguMjEwOSAyNjUuNDkyIDk4LjI3NzMgMjY1Ljc4OSA5OC4zNDM4QzI2Ni4zMDkgOTguNDYwOSAyNjYuNzM2IDk4LjYwMTYgMjY3LjA3MiA5OC43NjU2QzI2Ny40MDggOTguOTI5NyAyNjcuNjU4IDk5LjEzMDkgMjY3LjgyMiA5OS4zNjkxQzI2Ny45ODYgOTkuNjA3NCAyNjguMDY4IDk5Ljg5NjUgMjY4LjA2OCAxMDAuMjM2QzI2OC4wNjggMTAwLjUxNCAyNjguMDEgMTAwLjc2OCAyNjcuODkzIDEwMC45OThDMjY3Ljc3OSAxMDEuMjI5IDI2Ny42MTMgMTAxLjQyOCAyNjcuMzk1IDEwMS41OTZDMjY3LjE4IDEwMS43NiAyNjYuOTIyIDEwMS44ODkgMjY2LjYyMSAxMDEuOTgyQzI2Ni4zMjQgMTAyLjA3MiAyNjUuOTkgMTAyLjExNyAyNjUuNjE5IDEwMi4xMTdDMjY1LjA2MSAxMDIuMTE3IDI2NC41ODggMTAyLjAxOCAyNjQuMjAxIDEwMS44MThDMjYzLjgxNCAxMDEuNjE5IDI2My41MjEgMTAxLjM2MSAyNjMuMzIyIDEwMS4wNDVDMjYzLjEyMyAxMDAuNzI5IDI2My4wMjMgMTAwLjM5NSAyNjMuMDIzIDEwMC4wNDNIMjY0LjExM0MyNjQuMTI5IDEwMC4zNCAyNjQuMjE1IDEwMC41NzYgMjY0LjM3MSAxMDAuNzUyQzI2NC41MjcgMTAwLjkyNCAyNjQuNzE5IDEwMS4wNDcgMjY0Ljk0NSAxMDEuMTIxQzI2NS4xNzIgMTAxLjE5MSAyNjUuMzk2IDEwMS4yMjcgMjY1LjYxOSAxMDEuMjI3QzI2NS45MTYgMTAxLjIyNyAyNjYuMTY0IDEwMS4xODggMjY2LjM2MyAxMDEuMTA5QzI2Ni41NjYgMTAxLjAzMSAyNjYuNzIxIDEwMC45MjQgMjY2LjgyNiAxMDAuNzg3QzI2Ni45MzIgMTAwLjY1IDI2Ni45ODQgMTAwLjQ5NCAyNjYuOTg0IDEwMC4zMThaTTI3Mi4xNDYgOTUuNjYwMlY5Ni40OTIySDI2OC43MTlWOTUuNjYwMkgyNzIuMTQ2Wk0yNjkuODc5IDk0LjExOTFIMjcwLjk2M1YxMDAuNDNDMjcwLjk2MyAxMDAuNjQ1IDI3MC45OTYgMTAwLjgwNyAyNzEuMDYyIDEwMC45MTZDMjcxLjEyOSAxMDEuMDI1IDI3MS4yMTUgMTAxLjA5OCAyNzEuMzIgMTAxLjEzM0MyNzEuNDI2IDEwMS4xNjggMjcxLjUzOSAxMDEuMTg2IDI3MS42NiAxMDEuMTg2QzI3MS43NSAxMDEuMTg2IDI3MS44NDQgMTAxLjE3OCAyNzEuOTQxIDEwMS4xNjJDMjcyLjA0MyAxMDEuMTQzIDI3Mi4xMTkgMTAxLjEyNyAyNzIuMTcgMTAxLjExNUwyNzIuMTc2IDEwMkMyNzIuMDkgMTAyLjAyNyAyNzEuOTc3IDEwMi4wNTMgMjcxLjgzNiAxMDIuMDc2QzI3MS42OTkgMTAyLjEwNCAyNzEuNTMzIDEwMi4xMTcgMjcxLjMzOCAxMDIuMTE3QzI3MS4wNzIgMTAyLjExNyAyNzAuODI4IDEwMi4wNjQgMjcwLjYwNSAxMDEuOTU5QzI3MC4zODMgMTAxLjg1NCAyNzAuMjA1IDEwMS42NzggMjcwLjA3MiAxMDEuNDMyQzI2OS45NDMgMTAxLjE4MiAyNjkuODc5IDEwMC44NDYgMjY5Ljg3OSAxMDAuNDI0Vjk0LjExOTFaXCJcclxuXHRcdFx0ZmlsbD1cIiMwRjE3MkFcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMjA3XCIgeT1cIjExMFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMjEzXCIgeT1cIjExNlwiIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0PC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmV2aWV3OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaXZbaWQ9XCJqZmItdXNlLWZvcm06c2lkZWJhclwiXXtkaXNwbGF5Om5vbmV9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9lZGl0b3IvdXNlRm9ybUJ1dHRvbi9pbmRleC5wY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtCQUNJLFlBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGl2W2lkPVxcXCJqZmItdXNlLWZvcm06c2lkZWJhclxcXCJdIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAud3AtYmxvY2stamV0LWZvcm1zLXdlbGNvbWUgbGkuaXMtcHJve3Bvc2l0aW9uOnJlbGF0aXZlO29wYWNpdHk6MC41fS53cC1ibG9jay1qZXQtZm9ybXMtd2VsY29tZSBsaS5pcy1wcm8gLmJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb246OmFmdGVye2NvbnRlbnQ6XCJQUk9cIjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MC40ZW07cmlnaHQ6MC40ZW07YmFja2dyb3VuZDp2YXIoLS13cC1jb21wb25lbnRzLWNvbG9yLWFjY2VudCx2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvciwjMzg1OGU5KSk7cGFkZGluZzowIDAuMmVtO2JvcmRlci1yYWRpdXM6MC41ZW07Y29sb3I6dmFyKC0td3AtY29tcG9uZW50cy1jb2xvci1hY2NlbnQtaW52ZXJ0ZWQsI2ZmZik7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS13cC1jb21wb25lbnRzLWNvbG9yLWFjY2VudCx2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvciwjMzg1OGU5KSk7Zm9udC1zaXplOjAuOWVtfS53cC1ibG9jay1qZXQtZm9ybXMtd2VsY29tZSAuYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvbnN7Z2FwOjAuNGVtfS53cC1ibG9jay1qZXQtZm9ybXMtd2VsY29tZSAuYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvbnM+bGl7d2lkdGg6LW1vei1taW4tY29udGVudDt3aWR0aDptaW4tY29udGVudDttYXJnaW46MC42ZW0gMH0ud3AtYmxvY2stamV0LWZvcm1zLXdlbGNvbWUgLmJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb25zPmxpIC5jb21wb25lbnRzLWJ1dHRvbntwYWRkaW5nOjEuNWVtfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZWRpdG9yL3dlbGNvbWVCbG9jay9pbmRleC5wY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNDLHNDQUNDLGlCQUFrQixDQUNsQixXQWlCRCxDQWJFLDZGQUNDLGFBQWMsQ0FDZCxpQkFBa0IsQ0FDbEIsU0FBVSxDQUNWLFdBQVksQ0FDWixnRkFBbUYsQ0FDbkYsZUFBZ0IsQ0FDaEIsbUJBQW9CLENBQ3BCLHFEQUF1RCxDQUN2RCxzRkFBeUYsQ0FDekYsZUFDRCxDQUlGLDZFQUNDLFNBVUQsQ0FSQyxnRkFDQyxzQkFBa0IsQ0FBbEIsaUJBQWtCLENBQ2xCLGNBS0QsQ0FIQyxtR0FDQyxhQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53cC1ibG9jay1qZXQtZm9ybXMtd2VsY29tZSB7XFxyXFxuXFx0bGkuaXMtcHJvIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0b3BhY2l0eTogMC41O1xcclxcblxcclxcblxcdFxcdC5ibG9jay1lZGl0b3ItYmxvY2stdmFyaWF0aW9uLXBpY2tlcl9fdmFyaWF0aW9uIHtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0Y29udGVudDogXFxcIlBST1xcXCI7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdHRvcDogMC40ZW07XFxyXFxuXFx0XFx0XFx0XFx0cmlnaHQ6IDAuNGVtO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQ6IHZhcigtLXdwLWNvbXBvbmVudHMtY29sb3ItYWNjZW50LCB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvciwgIzM4NThlOSkpO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgMC4yZW07XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLXdwLWNvbXBvbmVudHMtY29sb3ItYWNjZW50LWludmVydGVkLCAjZmZmKTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13cC1jb21wb25lbnRzLWNvbG9yLWFjY2VudCwgdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IsICMzODU4ZTkpKTtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDAuOWVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5ibG9jay1lZGl0b3ItYmxvY2stdmFyaWF0aW9uLXBpY2tlcl9fdmFyaWF0aW9ucyB7XFxyXFxuXFx0XFx0Z2FwOiAwLjRlbTtcXHJcXG5cXHJcXG5cXHRcXHQmID4gbGkge1xcclxcblxcdFxcdFxcdHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAuNmVtIDA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmNvbXBvbmVudHMtYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAxLjVlbTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudzJuNGVnNj5kaXZ7ZmxleDoxfS53Mm40ZWc2IC5jb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGR7bWFyZ2luLWJvdHRvbTppbmhlcml0O3BhZGRpbmctYm90dG9tOjB9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2VkaXRvci91c2VGb3JtQnV0dG9uL1NlY29uZFBhcnQvU2VsZWN0UGFnZUNvbnRyb2wuanN4XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQXVDLE1BQU8sQ0FBQyx5Q0FBeUMscUJBQXFCLENBQUMsZ0JBQWlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53Mm40ZWc2PmRpdnstd2Via2l0LWZsZXg6MTstbXMtZmxleDoxO2ZsZXg6MTt9LncybjRlZzYgLmNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZHttYXJnaW4tYm90dG9tOmluaGVyaXQ7cGFkZGluZy1ib3R0b206MDt9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudjFqYTMzbTF7Ym9yZGVyOjA7d2lkdGg6NTYwcHg7aGVpZ2h0OjMxNXB4O21hcmdpbjowIGF1dG99XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2VkaXRvci91c2VGb3JtQnV0dG9uL1NlY29uZFBhcnQvVmlkZW9JbnN0cnVjdGlvbnMuanN4XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsYUFBY1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudjFqYTMzbTF7Ym9yZGVyOjA7d2lkdGg6NTYwcHg7aGVpZ2h0OjMxNXB4O21hcmdpbjowIGF1dG87fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5wY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgucGNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgucGNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnBjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vU2VsZWN0UGFnZUNvbnRyb2wuanN4XCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9TZWxlY3RQYWdlQ29udHJvbC5qc3hcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vVmlkZW9JbnN0cnVjdGlvbnMuanN4XCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9vdXRwdXRDc3NMb2FkZXIuanM/Y2FjaGVQcm92aWRlcj0hLi9WaWRlb0luc3RydWN0aW9ucy5qc3hcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvcmVEYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkb21SZWFkeVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWRpdFBvc3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJwbHVnaW5zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJwcmltaXRpdmVzXCJdOyIsIi8vIHNyYy9jc3MudHNcbnZhciBpZHggPSAwO1xudmFyIGNzcyA9ICgpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIHJldHVybiBgbW9ja2VkLWNzcy0ke2lkeCsrfWA7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdVc2luZyB0aGUgXCJjc3NcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LidcbiAgKTtcbn07XG52YXIgY3NzX2RlZmF1bHQgPSBjc3M7XG5cbi8vIHNyYy9jeC50c1xudmFyIGN4ID0gZnVuY3Rpb24gY3gyKCkge1xuICBjb25zdCBwcmVzZW50Q2xhc3NOYW1lcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBhdG9taWNDbGFzc2VzID0ge307XG4gIGNvbnN0IG5vbkF0b21pY0NsYXNzZXMgPSBbXTtcbiAgcHJlc2VudENsYXNzTmFtZXMuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgY29uc3QgaW5kaXZpZHVhbENsYXNzTmFtZXMgPSBhcmcgPyBhcmcuc3BsaXQoXCIgXCIpIDogW107XG4gICAgaW5kaXZpZHVhbENsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJhdG1fXCIpKSB7XG4gICAgICAgIGNvbnN0IFssIGtleUhhc2hdID0gY2xhc3NOYW1lLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSA9IGNsYXNzTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbkF0b21pY0NsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAoY29uc3Qga2V5SGFzaCBpbiBhdG9taWNDbGFzc2VzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhdG9taWNDbGFzc2VzLCBrZXlIYXNoKSkge1xuICAgICAgcmVzdWx0LnB1c2goYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKC4uLm5vbkF0b21pY0NsYXNzZXMpO1xuICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpO1xufTtcbnZhciBjeF9kZWZhdWx0ID0gY3g7XG5leHBvcnQge1xuICBjc3NfZGVmYXVsdCBhcyBjc3MsXG4gIGN4X2RlZmF1bHQgYXMgY3hcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiLy8gc3JjL3N0eWxlZC50c1xuaW1wb3J0IHZhbGlkQXR0ciBmcm9tIFwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3ggfSBmcm9tIFwiQGxpbmFyaWEvY29yZVwiO1xudmFyIGlzQ2FwaXRhbCA9IChjaCkgPT4gY2gudG9VcHBlckNhc2UoKSA9PT0gY2g7XG52YXIgZmlsdGVyS2V5ID0gKGtleXMpID0+IChrZXkpID0+IGtleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbnZhciBvbWl0ID0gKG9iaiwga2V5cykgPT4ge1xuICBjb25zdCByZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoZmlsdGVyS2V5KGtleXMpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICByZXNba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn07XG5mdW5jdGlvbiBmaWx0ZXJQcm9wcyhhc0lzLCBwcm9wcywgb21pdEtleXMpIHtcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IG9taXQocHJvcHMsIG9taXRLZXlzKTtcbiAgaWYgKCFhc0lzKSB7XG4gICAgY29uc3QgaW50ZXJvcFZhbGlkQXR0ciA9IHR5cGVvZiB2YWxpZEF0dHIgPT09IFwiZnVuY3Rpb25cIiA/IHsgZGVmYXVsdDogdmFsaWRBdHRyIH0gOiB2YWxpZEF0dHI7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVyZWRQcm9wcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWludGVyb3BWYWxpZEF0dHIuZGVmYXVsdChrZXkpKSB7XG4gICAgICAgIGRlbGV0ZSBmaWx0ZXJlZFByb3BzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkUHJvcHM7XG59XG52YXIgd2FybklmSW52YWxpZCA9ICh2YWx1ZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlLG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBBbiBpbnRlcnBvbGF0aW9uIGV2YWx1YXRlZCB0byAnJHtzdHJpbmdpZmllZH0nIGluIHRoZSBjb21wb25lbnQgJyR7Y29tcG9uZW50TmFtZX0nLCB3aGljaCBpcyBwcm9iYWJseSBhIG1pc3Rha2UuIFlvdSBzaG91bGQgZXhwbGljaXRseSBjYXN0IG9yIHRyYW5zZm9ybSB0aGUgdmFsdWUgdG8gYSBzdHJpbmcuYFxuICAgICk7XG4gIH1cbn07XG52YXIgaWR4ID0gMDtcbmZ1bmN0aW9uIHN0eWxlZCh0YWcpIHtcbiAgbGV0IG1vY2tlZENsYXNzID0gXCJcIjtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIG1vY2tlZENsYXNzICs9IGBtb2NrZWQtc3R5bGVkLSR7aWR4Kyt9YDtcbiAgICBpZiAodGFnICYmIHRhZy5fX3d5d19tZXRhICYmIHRhZy5fX3d5d19tZXRhLmNsYXNzTmFtZSkge1xuICAgICAgbW9ja2VkQ2xhc3MgKz0gYCAke3RhZy5fX3d5d19tZXRhLmNsYXNzTmFtZX1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKG9wdGlvbnMpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInRlc3RcIikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdVc2luZyB0aGUgXCJzdHlsZWRcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NhbGxzdGFjay9saW5hcmlhI3NldHVwJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZW5kZXIgPSAocHJvcHMsIHJlZikgPT4ge1xuICAgICAgY29uc3QgeyBhczogY29tcG9uZW50ID0gdGFnLCBjbGFzczogY2xhc3NOYW1lID0gbW9ja2VkQ2xhc3MgfSA9IHByb3BzO1xuICAgICAgY29uc3Qgc2hvdWxkS2VlcFByb3BzID0gb3B0aW9ucy5wcm9wc0FzSXMgPT09IHZvaWQgMCA/ICEodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJzdHJpbmdcIiAmJiBjb21wb25lbnQuaW5kZXhPZihcIi1cIikgPT09IC0xICYmICFpc0NhcGl0YWwoY29tcG9uZW50WzBdKSkgOiBvcHRpb25zLnByb3BzQXNJcztcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvcHMgPSBmaWx0ZXJQcm9wcyhzaG91bGRLZWVwUHJvcHMsIHByb3BzLCBbXG4gICAgICAgIFwiYXNcIixcbiAgICAgICAgXCJjbGFzc1wiXG4gICAgICBdKTtcbiAgICAgIGZpbHRlcmVkUHJvcHMucmVmID0gcmVmO1xuICAgICAgZmlsdGVyZWRQcm9wcy5jbGFzc05hbWUgPSBvcHRpb25zLmF0b21pYyA/IGN4KG9wdGlvbnMuY2xhc3MsIGZpbHRlcmVkUHJvcHMuY2xhc3NOYW1lIHx8IGNsYXNzTmFtZSkgOiBjeChmaWx0ZXJlZFByb3BzLmNsYXNzTmFtZSB8fCBjbGFzc05hbWUsIG9wdGlvbnMuY2xhc3MpO1xuICAgICAgY29uc3QgeyB2YXJzIH0gPSBvcHRpb25zO1xuICAgICAgaWYgKHZhcnMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHZhcnMpIHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHZhcnNbbmFtZV07XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFyaWFibGVbMF07XG4gICAgICAgICAgY29uc3QgdW5pdCA9IHZhcmlhYmxlWzFdIHx8IFwiXCI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgcmVzdWx0ID09PSBcImZ1bmN0aW9uXCIgPyByZXN1bHQocHJvcHMpIDogcmVzdWx0O1xuICAgICAgICAgIHdhcm5JZkludmFsaWQodmFsdWUsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgICAgc3R5bGVbYC0tJHtuYW1lfWBdID0gYCR7dmFsdWV9JHt1bml0fWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3duU3R5bGUgPSBmaWx0ZXJlZFByb3BzLnN0eWxlIHx8IHt9O1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3duU3R5bGUpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHN0eWxlW2tleV0gPSBvd25TdHlsZVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbHRlcmVkUHJvcHMuc3R5bGUgPSBzdHlsZTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWcuX193eXdfbWV0YSAmJiB0YWcgIT09IGNvbXBvbmVudCkge1xuICAgICAgICBmaWx0ZXJlZFByb3BzLmFzID0gY29tcG9uZW50O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIGZpbHRlcmVkUHJvcHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBmaWx0ZXJlZFByb3BzKTtcbiAgICB9O1xuICAgIGNvbnN0IFJlc3VsdCA9IFJlYWN0LmZvcndhcmRSZWYgPyBSZWFjdC5mb3J3YXJkUmVmKHJlbmRlcikgOiAoXG4gICAgICAvLyBSZWFjdC5mb3J3YXJkUmVmIHdvbid0IGF2YWlsYWJsZSBvbiBvbGRlciBSZWFjdCB2ZXJzaW9ucyBhbmQgaW4gUHJlYWN0XG4gICAgICAvLyBGYWxsYmFjayB0byBhIGlubmVyUmVmIHByb3AgaW4gdGhhdCBjYXNlXG4gICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdCA9IG9taXQocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcihyZXN0LCBwcm9wcy5pbm5lclJlZik7XG4gICAgICB9XG4gICAgKTtcbiAgICBSZXN1bHQuZGlzcGxheU5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgUmVzdWx0Ll9fd3l3X21ldGEgPSB7XG4gICAgICBjbGFzc05hbWU6IG9wdGlvbnMuY2xhc3MgfHwgbW9ja2VkQ2xhc3MsXG4gICAgICBleHRlbmRzOiB0YWdcbiAgICB9O1xuICAgIHJldHVybiBSZXN1bHQ7XG4gIH07XG59XG52YXIgc3R5bGVkX2RlZmF1bHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgUHJveHkoc3R5bGVkLCB7XG4gIGdldChvLCBwcm9wKSB7XG4gICAgcmV0dXJuIG8ocHJvcCk7XG4gIH1cbn0pIDogc3R5bGVkO1xuZXhwb3J0IHtcbiAgc3R5bGVkX2RlZmF1bHQgYXMgc3R5bGVkXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIHdlbGNvbWUgZnJvbSAnLi93ZWxjb21lQmxvY2snO1xyXG5pbXBvcnQgJy4vcHJldmlld0J1dHRvbic7XHJcbmltcG9ydCAnLi91c2VGb3JtQnV0dG9uJztcclxuaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XHJcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcclxuaW1wb3J0IGJsb2NrQnVpbGRlciBmcm9tICcuL3VzZUZvcm1CdXR0b24vYmxvY2tCdWlsZGVyJztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvd2VsY29tZS1ibG9jaycsXHJcblx0ZnVuY3Rpb24gKCBibG9ja3MgKSB7XHJcblx0XHRibG9ja3MucHVzaCggd2VsY29tZSApO1xyXG5cclxuXHRcdHJldHVybiBibG9ja3M7XHJcblx0fSxcclxuKTtcclxuXHJcbmRpc3BhdGNoKCAnamV0LWZvcm1zL3VzZS1mb3JtJyApLnJlZ2lzdGVyQnVpbGRlcnMoIFtcclxuXHRibG9ja0J1aWxkZXIsXHJcbl0gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=