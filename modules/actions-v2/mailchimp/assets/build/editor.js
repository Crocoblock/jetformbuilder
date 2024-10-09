/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!********************************************************************************************!*\
  !*** ../../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "../../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

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

/***/ "../../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!********************************************************************************!*\
  !*** ../../../../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \********************************************************************************/
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

/***/ "../../../../../node_modules/@wordpress/icons/build-module/library/cloud.js":
/*!**********************************************************************************!*\
  !*** ../../../../../node_modules/@wordpress/icons/build-module/library/cloud.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

const cloud = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloud);
//# sourceMappingURL=cloud.js.map

/***/ }),

/***/ "./action/APIKeyHelp.jsx":
/*!*******************************!*\
  !*** ./action/APIKeyHelp.jsx ***!
  \*******************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function APIKeyHelp({
  ...props
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...props
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('How to obtain your MailChimp API Key?', 'jet-form-builder'), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: "https://mailchimp.com/help/about-api-keys/"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('More info here', 'jet-form-builder')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIKeyHelp);

/***/ }),

/***/ "./action/APIKeyRow.jsx":
/*!******************************!*\
  !*** ./action/APIKeyRow.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @linaria/core */ "../../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "../../../../../node_modules/@wordpress/icons/build-module/library/cloud.js");
/* harmony import */ var _APIKeyHelp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./APIKeyHelp */ "./action/APIKeyHelp.jsx");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @linaria/react */ "../../../../../node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var jet_form_builder_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jet-form-builder-data */ "jet-form-builder-data");
/* harmony import */ var jet_form_builder_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_9__);

/* eslint-disable import/no-extraneous-dependencies */












const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl;
const StyledTextControl = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_10__.styled)(_exp())({
  name: "StyledTextControl",
  class: "sotfoyb",
  propsAsIs: true
});

// eslint-disable-next-line max-lines-per-function
function APIKeyRow({
  settings,
  onChangeSettingObj
}) {
  const {
    fetchApiData
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.STORE_NAME);
  const {
    isFetchLoading,
    fetchError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => ({
    isFetchLoading: select(_store__WEBPACK_IMPORTED_MODULE_6__.STORE_NAME).isFetchLoading(),
    fetchError: select(_store__WEBPACK_IMPORTED_MODULE_6__.STORE_NAME).getFetchError()
  }), []);
  const {
    hasError,
    setShowError
  } = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_9__.useActionValidatorProvider)({
    isSupported: error => 'api_key' === error?.property
  });
  const {
    value: globalSettings,
    onChange: setGlobalSettings
  } = (0,jet_form_builder_data__WEBPACK_IMPORTED_MODULE_8__.useSiteOptionJSON)('jet_form_builder_settings__mailchimp-tab');
  const id = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useInstanceId)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControl, 'jfb-control');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControl, {
    createId: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RequiredLabel, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('API Key', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_11__.cx)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControlEndStyle, (hasError || Boolean(fetchError)) && jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.ControlWithErrorStyle),
    direction: "column"
  }, hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please fill this required field', 'jet-form-builder')), Boolean(fetchError) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fetching data was failed', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, null, settings.use_global ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledTextControl, {
    id: id,
    value: globalSettings.api_key,
    onChange: api_key => setGlobalSettings({
      api_key
    }),
    onBlur: () => setShowError(true),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledTextControl, {
    id: id,
    value: settings.api_key,
    onChange: api_key => onChangeSettingObj({
      api_key
    }),
    onBlur: () => setShowError(true),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: () => fetchApiData(settings.use_global ? globalSettings.api_key : settings.api_key),
    disabled: isFetchLoading,
    isBusy: isFetchLoading,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
    variant: "secondary",
    __next40pxDefaultSize: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fetch', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_APIKeyHelp__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIKeyRow);
__webpack_require__(/*! ./APIKeyRow.wyw-in-js.css!=!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./APIKeyRow.jsx */ "./action/APIKeyRow.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./action/APIKeyRow.jsx");

/***/ }),

/***/ "./action/FieldsMapRow.jsx":
/*!*********************************!*\
  !*** ./action/FieldsMapRow.jsx ***!
  \*********************************/
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @linaria/core */ "../../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_7__);









function FieldsMapRow({
  getMapField,
  setMapField,
  listId
}) {
  const formFields = (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_7__.useFields)({
    withInner: false,
    placeholder: '--'
  });
  const fields = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    var _allFields$listId;
    const allFields = select(_store__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME).getFields();
    return (_allFields$listId = allFields?.[listId]) !== null && _allFields$listId !== void 0 ? _allFields$listId : [];
  }, [listId]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.RowControl, {
    align: "flex-start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.Label, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fields map', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_8__.cx)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.RowControlEndStyle),
    direction: "column",
    gap: 4
  }, fields.map(field => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_6__.FieldsMapField, {
    key: field.value,
    tag: field.value,
    label: field.label,
    isRequired: field.required,
    formFields: formFields,
    value: getMapField({
      name: field.value
    }),
    onChange: value => setMapField({
      nameField: field.value,
      value
    })
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldsMapRow);

/***/ }),

/***/ "./action/GroupsSelectRow.jsx":
/*!************************************!*\
  !*** ./action/GroupsSelectRow.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   transformGroupsToArray: () => (/* binding */ transformGroupsToArray)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store/index.js");





function transformGroupsToArray(groups) {
  const groupEntries = Object.entries(groups);
  const result = [];
  for (const [groupId, isActive] of groupEntries) {
    if (!isActive) {
      continue;
    }
    result.push(groupId);
  }
  return result;
}
function GroupsSelectRow({
  settings,
  onChangeSettingObj,
  listId
}) {
  const groups = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    var _allGroups$listId;
    const allGroups = select(_store__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getGroups();
    return (_allGroups$listId = allGroups?.[listId]) !== null && _allGroups$listId !== void 0 ? _allGroups$listId : [];
  }, [listId]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, {
    createId: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Groups', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.FormLabeledTokenField, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose a group', 'jet-form-builder'),
    value: settings.groups_ids,
    onChange: groups_ids => onChangeSettingObj({
      groups_ids
    }),
    suggestions: groups,
    __experimentalValidateInput: group => groups.some(({
      value
    }) => value === group),
    __experimentalExpandOnFocus: true,
    __experimentalShowHowTo: false,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupsSelectRow);

/***/ }),

/***/ "./action/SelectListRow.jsx":
/*!**********************************!*\
  !*** ./action/SelectListRow.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @linaria/core */ "../../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7__);









function SelectListRow({
  settings,
  onChangeSettingObj
}) {
  const lists = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_6__.STORE_NAME).getLists(), []);
  const {
    hasError,
    setShowError
  } = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7__.useActionValidatorProvider)({
    isSupported: error => 'list_id' === error?.property
  });
  const id = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useInstanceId)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControl, 'jfb-control');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControl, {
    createId: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RequiredLabel, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Audience', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_8__.cx)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControlEndStyle, hasError && jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.ControlWithErrorStyle),
    direction: "column"
  }, hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please fill this required field', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    id: id,
    value: settings.list_id,
    onChange: list_id => onChangeSettingObj({
      list_id
    }),
    onBlur: () => setShowError(true),
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('-- Select list / audience --', 'jet-form-builder')
    }, ...lists],
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectListRow);

/***/ }),

/***/ "./action/TagsRow.jsx":
/*!****************************!*\
  !*** ./action/TagsRow.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




function TagsRow({
  settings,
  onChangeSettingObj
}) {
  /**
   * @see https://github.com/Crocoblock/issues-tracker/issues/10783
   */
  const tagsValue = Array.isArray(settings.tags) ? settings.tags : [];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, {
    createId: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tags', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormTokenField, {
    value: tagsValue,
    onChange: tags => onChangeSettingObj({
      tags
    }),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagsRow);

/***/ }),

/***/ "./action/icon.jsx":
/*!*************************!*\
  !*** ./action/icon.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "0",
  fill: "none",
  width: "20",
  height: "20"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 1.1L4 5.9c-1.1.4-2 1.8-2 3v8.7c0 1.2.9 1.8 2 1.4l12-4.8c1.1-.4 2-1.8 2-3V2.5c0-1.2-.9-1.8-2-1.4zm.6 2.6l-6 9.3-6.7-4.5c-.1-.1-.4-.4-.2-.7.2-.4.7-.2.7-.2l6.3 2.3s4.8-6.3 5.1-6.7c.1-.2.4-.3.7-.1.3.2.2.5.1.6z"
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./action/index.js":
/*!*************************!*\
  !*** ./action/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./action/render.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./action/icon.jsx");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validators */ "./action/validators.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  type: 'mailchimp',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('MailChimp', 'jet-form-builder'),
  edit: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  docHref: 'https://jetformbuilder.com/features/mailchimp/',
  category: 'communication',
  validators: _validators__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./action/render.js":
/*!**************************!*\
  !*** ./action/render.js ***!
  \**************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _APIKeyRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./APIKeyRow */ "./action/APIKeyRow.jsx");
/* harmony import */ var _SelectListRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectListRow */ "./action/SelectListRow.jsx");
/* harmony import */ var _GroupsSelectRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupsSelectRow */ "./action/GroupsSelectRow.jsx");
/* harmony import */ var _TagsRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TagsRow */ "./action/TagsRow.jsx");
/* harmony import */ var _FieldsMapRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FieldsMapRow */ "./action/FieldsMapRow.jsx");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_11__);

/* eslint-disable react-hooks/exhaustive-deps */











const {
  ToggleControl
} = JetFBComponents;

// eslint-disable-next-line max-lines-per-function
function MailChimpRender(props) {
  const {
    settings,
    onChangeSettingObj,
    getMapField,
    setMapField
  } = props;
  const {
    hasError,
    hasLists
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.useSelect)(select => ({
    hasError: Boolean(select(_store__WEBPACK_IMPORTED_MODULE_10__.STORE_NAME).getFetchError()),
    hasLists: Boolean(select(_store__WEBPACK_IMPORTED_MODULE_10__.STORE_NAME).getLists().length)
  }), []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    const newSettings = {};
    if (settings.tags && !Array.isArray(settings.tags)) {
      newSettings.tags = settings.tags.split(',').map(tag => tag.trim());
    }
    if (settings.groups_ids && !Array.isArray(settings.groups_ids)) {
      newSettings.groups_ids = (0,_GroupsSelectRow__WEBPACK_IMPORTED_MODULE_6__.transformGroupsToArray)(settings.groups_ids);
    }
    if (!Object.values(newSettings)?.length) {
      return;
    }
    onChangeSettingObj({
      ...newSettings
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* eslint-disable jsx-a11y/no-onchange */
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.ClearBaseControlStyle,
    checked: settings.use_global,
    onChange: val => onChangeSettingObj({
      use_global: Boolean(val)
    }),
    __nextHasNoMarginBottom: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use', 'jet-form-builder') + ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: JetFormEditorData.global_settings_url + '#mailchimp-tab'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Global Settings', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_APIKeyRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    settings: settings,
    onChangeSettingObj: onChangeSettingObj
  }), !hasError && hasLists && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SelectListRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    settings: settings,
    onChangeSettingObj: onChangeSettingObj
  }), Boolean(settings.list_id) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GroupsSelectRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    listId: settings.list_id,
    settings: settings,
    onChangeSettingObj: onChangeSettingObj
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TagsRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    settings: settings,
    onChangeSettingObj: onChangeSettingObj
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Double Opt-In', 'jet-form-builder'),
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.ClearBaseControlStyle,
    checked: settings.double_opt_in,
    onChange: val => {
      onChangeSettingObj({
        double_opt_in: Boolean(val)
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FieldsMapRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    listId: settings.list_id,
    getMapField: getMapField,
    setMapField: setMapField
  }))));
  /* eslint-enable jsx-a11y/no-onchange */
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MailChimpRender);

/***/ }),

/***/ "./action/validators.js":
/*!******************************!*\
  !*** ./action/validators.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([({
  settings
}) => {
  if (settings.use_global) {
    return false;
  }
  return settings?.api_key ? false : {
    type: 'empty',
    property: 'api_key'
  };
}, ({
  settings
}) => {
  return settings?.list_id ? false : {
    type: 'empty',
    property: 'list_id'
  };
}, ({
  settings
}) => {
  const fields = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_store__WEBPACK_IMPORTED_MODULE_1__.STORE_NAME).getFields();
  if (!Object.keys(fields).length) {
    return false;
  }
  const errors = [];
  const {
    list_id: listId
  } = settings;
  const listFields = fields[listId];
  if (!listFields?.length) {
    return false;
  }
  for (const listField of listFields) {
    if (!listField.required) {
      continue;
    }
    const fieldValue = settings?.fields_map?.[listField.value];
    if (!fieldValue) {
      errors.push({
        type: 'empty',
        property: 'field_' + listField.value
      });
    }
  }
  return errors;
}]);

/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchApiData: () => (/* binding */ fetchApiData)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/constants.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);



const fetchApiData = apiKey => async ({
  dispatch
}) => {
  if (!apiKey) {
    return;
  }
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.START_FETCH
  });
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_FETCH_ERROR,
    error: false
  });
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)('jet-form-builder/v1/mailchimp', {
    apiKey
  });
  let response;
  try {
    response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path
    });
  } catch (error) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_FETCH_ERROR,
      error
    });
    return;
  } finally {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__.END_FETCH
    });
  }
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_LISTS,
    payload: response.lists
  });
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_GROUPS,
    payload: response.groups
  });
  dispatch({
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.SET_FIELDS,
    payload: response.fields
  });
};

/***/ }),

/***/ "./store/constants.js":
/*!****************************!*\
  !*** ./store/constants.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   END_FETCH: () => (/* binding */ END_FETCH),
/* harmony export */   SET_FETCH_ERROR: () => (/* binding */ SET_FETCH_ERROR),
/* harmony export */   SET_FIELDS: () => (/* binding */ SET_FIELDS),
/* harmony export */   SET_GROUPS: () => (/* binding */ SET_GROUPS),
/* harmony export */   SET_LISTS: () => (/* binding */ SET_LISTS),
/* harmony export */   START_FETCH: () => (/* binding */ START_FETCH)
/* harmony export */ });
const SET_LISTS = 'SET_LISTS';
const SET_GROUPS = 'SET_GROUPS';
const SET_FIELDS = 'SET_FIELDS';
const START_FETCH = 'START_FETCH';
const END_FETCH = 'END_FETCH';
const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./store/selectors.js");




const STORE_NAME = 'jet-forms/mailchimp';
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./store/reducer.js":
/*!**************************!*\
  !*** ./store/reducer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/constants.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


const api = function (state = {}, action) {
  switch (action?.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SET_LISTS:
      return {
        ...state,
        lists: action.payload
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SET_GROUPS:
      return {
        ...state,
        groups: action.payload
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SET_FIELDS:
      return {
        ...state,
        fields: action.payload
      };
  }
  return state;
};
const fetch = function (state = {}, action) {
  switch (action?.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.START_FETCH:
      return {
        ...state,
        loading: true
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.END_FETCH:
      return {
        ...state,
        loading: false
      };
    case _constants__WEBPACK_IMPORTED_MODULE_0__.SET_FETCH_ERROR:
      return {
        ...state,
        error: action.error
      };
  }
  return state;
};
const reducer = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  api,
  fetch
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./store/selectors.js":
/*!****************************!*\
  !*** ./store/selectors.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFetchError: () => (/* binding */ getFetchError),
/* harmony export */   getFields: () => (/* binding */ getFields),
/* harmony export */   getGroups: () => (/* binding */ getGroups),
/* harmony export */   getLists: () => (/* binding */ getLists),
/* harmony export */   isFetchLoading: () => (/* binding */ isFetchLoading)
/* harmony export */ });
function getLists(state) {
  var _state$api$lists;
  return (_state$api$lists = state?.api?.lists) !== null && _state$api$lists !== void 0 ? _state$api$lists : [];
}
function getGroups(state) {
  var _state$api$groups;
  return (_state$api$groups = state?.api?.groups) !== null && _state$api$groups !== void 0 ? _state$api$groups : {};
}
function getFields(state) {
  var _state$api$fields;
  return (_state$api$fields = state?.api?.fields) !== null && _state$api$fields !== void 0 ? _state$api$fields : {};
}
function isFetchLoading(state) {
  var _state$fetch$loading;
  return (_state$fetch$loading = state.fetch?.loading) !== null && _state$fetch$loading !== void 0 ? _state$fetch$loading : false;
}
function getFetchError(state) {
  var _state$fetch$error;
  return (_state$fetch$error = state.fetch?.error) !== null && _state$fetch$error !== void 0 ? _state$fetch$error : false;
}

/***/ }),

/***/ "../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./action/APIKeyRow.jsx":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./action/APIKeyRow.jsx ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sotfoyb{-webkit-flex:1;-ms-flex:1;flex:1;}
`, "",{"version":3,"sources":["webpack://./action/APIKeyRow.jsx"],"names":[],"mappings":"AAAA,SAAS,cAAc,CAAC,UAAU,CAAC,MAAM,CAAC","sourcesContent":[".sotfoyb{-webkit-flex:1;-ms-flex:1;flex:1;}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************/
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

/***/ "../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************************/
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

/***/ "./action/APIKeyRow.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./action/APIKeyRow.jsx":
/*!*************************************************************************************************************************************************************!*\
  !*** ./action/APIKeyRow.wyw-in-js.css!=!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./action/APIKeyRow.jsx ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./APIKeyRow.jsx */ "../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./action/APIKeyRow.jsx");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../../../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("002169f0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../../../../../node_modules/vue-style-loader/lib/addStylesClient.js":
/*!***************************************************************************!*\
  !*** ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "../../../../../node_modules/vue-style-loader/lib/listToStyles.js");
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

/***/ "../../../../../node_modules/vue-style-loader/lib/listToStyles.js":
/*!************************************************************************!*\
  !*** ../../../../../node_modules/vue-style-loader/lib/listToStyles.js ***!
  \************************************************************************/
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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "../../../../../node_modules/@linaria/core/dist/index.mjs":
/*!****************************************************************!*\
  !*** ../../../../../node_modules/@linaria/core/dist/index.mjs ***!
  \****************************************************************/
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

/***/ "../../../../../node_modules/@linaria/react/dist/index.mjs":
/*!*****************************************************************!*\
  !*** ../../../../../node_modules/@linaria/react/dist/index.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styled: () => (/* binding */ styled_default)
/* harmony export */ });
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/is-prop-valid */ "../../../../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @linaria/core */ "../../../../../node_modules/@linaria/core/dist/index.mjs");
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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./action/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./store/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__);




(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.register)(_store__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__.registerAction)(_action__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFNQTtBQUFBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFJQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBTUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvZW1vdGlvbi1pcy1wcm9wLXZhbGlkLmVzbS5qcyIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L2Nsb3VkLmpzIiwid2VicGFjazovL2pmYi1tYWlsY2hpbXAvLi9hY3Rpb24vQVBJS2V5SGVscC5qc3giLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC8uL2FjdGlvbi9BUElLZXlSb3cuanN4Iiwid2VicGFjazovL2pmYi1tYWlsY2hpbXAvLi9hY3Rpb24vRmllbGRzTWFwUm93LmpzeCIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4vYWN0aW9uL0dyb3Vwc1NlbGVjdFJvdy5qc3giLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC8uL2FjdGlvbi9TZWxlY3RMaXN0Um93LmpzeCIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4vYWN0aW9uL1RhZ3NSb3cuanN4Iiwid2VicGFjazovL2pmYi1tYWlsY2hpbXAvLi9hY3Rpb24vaWNvbi5qc3giLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC8uL2FjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4vYWN0aW9uL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4vYWN0aW9uL3ZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC8uL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC8uL3N0b3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC8uL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC8uL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4vYWN0aW9uL0FQSUtleVJvdy5qc3g/YjE0NSIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4vYWN0aW9uL0FQSUtleVJvdy5qc3g/OTBhNiIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovL2pmYi1tYWlsY2hpbXAvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImFjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJibG9ja3NUb0FjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1tYWlsY2hpbXAvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYXBpRmV0Y2hcIl0iLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInByaW1pdGl2ZXNcIl0iLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInVybFwiXSIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbGluYXJpYS9jb3JlL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2pmYi1tYWlsY2hpbXAvLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BsaW5hcmlhL3JlYWN0L2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2pmYi1tYWlsY2hpbXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItbWFpbGNoaW1wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW1haWxjaGltcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1tYWlsY2hpbXAvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWJicnxhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkaXNhYmxlUmVtb3RlUGxheWJhY2t8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8ZW50ZXJLZXlIaW50fGZldGNocHJpb3JpdHl8ZmV0Y2hQcmlvcml0eXxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHRyYW5zbGF0ZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluY3JlbWVudGFsfGZhbGxiYWNrfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxvcHRpb258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaXNQcm9wVmFsaWQgPSAvKiAjX19QVVJFX18gKi9tZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCB7IGlzUHJvcFZhbGlkIGFzIGRlZmF1bHQgfTtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgbWVtb2l6ZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGNsb3VkID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTE3LjMgMTAuMWMwLTIuNS0yLjEtNC40LTQuOC00LjQtMi4yIDAtNC4xIDEuNC00LjYgMy4zaC0uMkM1LjcgOSA0IDEwLjcgNCAxMi44YzAgMi4xIDEuNyAzLjggMy43IDMuOGg5YzEuOCAwIDMuMi0xLjUgMy4yLTMuMy4xLTEuNi0xLjEtMi45LTIuNi0zLjJ6bS0uNSA1LjFoLTljLTEuMiAwLTIuMi0xLjEtMi4yLTIuM3MxLTIuNCAyLjItMi40aDEuM2wuMy0xLjFjLjQtMS4zIDEuNy0yLjIgMy4yLTIuMiAxLjggMCAzLjMgMS4zIDMuMyAyLjl2MS4zbDEuMy4yYy44LjEgMS40LjkgMS40IDEuOC0uMSAxLS45IDEuOC0xLjggMS44elwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBjbG91ZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsb3VkLmpzLm1hcCIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuXHJcbmZ1bmN0aW9uIEFQSUtleUhlbHAoIHsgLi4ucHJvcHMgfSApIHtcclxuXHRyZXR1cm4gPGRpdiB7IC4uLnByb3BzIH0+XHJcblx0XHR7IF9fKFxyXG5cdFx0XHQnSG93IHRvIG9idGFpbiB5b3VyIE1haWxDaGltcCBBUEkgS2V5PycsXHJcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdCkgfVxyXG5cdFx0Jm5ic3A7XHJcblx0XHQ8RXh0ZXJuYWxMaW5rXHJcblx0XHRcdGhyZWY9XCJodHRwczovL21haWxjaGltcC5jb20vaGVscC9hYm91dC1hcGkta2V5cy9cIlxyXG5cdFx0PlxyXG5cdFx0XHR7IF9fKCAnTW9yZSBpbmZvIGhlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHQ8L0V4dGVybmFsTGluaz5cclxuXHQ8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQSUtleUhlbHA7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXHJcbmltcG9ydCB7IHVzZUluc3RhbmNlSWQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xyXG5pbXBvcnQge1xyXG5cdENvbnRyb2xXaXRoRXJyb3JTdHlsZSwgSWNvblRleHQsXHJcblx0UmVxdWlyZWRMYWJlbCxcclxuXHRSb3dDb250cm9sLFxyXG5cdFJvd0NvbnRyb2xFbmRTdHlsZSxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IEZsZXgsIFRleHRDb250cm9sLCBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBjeCB9IGZyb20gJ0BsaW5hcmlhL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcclxuaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgY2xvdWQgfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcclxuaW1wb3J0IEFQSUtleUhlbHAgZnJvbSAnLi9BUElLZXlIZWxwJztcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQGxpbmFyaWEvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTaXRlT3B0aW9uSlNPTiB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItZGF0YSc7XHJcbmltcG9ydCB7IHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuXHJcblxyXG5jb25zdCBTdHlsZWRUZXh0Q29udHJvbCA9IHN0eWxlZCggVGV4dENvbnRyb2wgKWBcclxuICAgIGZsZXg6IDE7XHJcbmA7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5mdW5jdGlvbiBBUElLZXlSb3coIHsgc2V0dGluZ3MsIG9uQ2hhbmdlU2V0dGluZ09iaiB9ICkge1xyXG5cdGNvbnN0IHsgZmV0Y2hBcGlEYXRhIH0gPSB1c2VEaXNwYXRjaCggU1RPUkVfTkFNRSApO1xyXG5cclxuXHRjb25zdCB7IGlzRmV0Y2hMb2FkaW5nLCBmZXRjaEVycm9yIH0gPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aXNGZXRjaExvYWRpbmc6IHNlbGVjdCggU1RPUkVfTkFNRSApLmlzRmV0Y2hMb2FkaW5nKCksXHJcblx0XHRcdFx0ZmV0Y2hFcnJvcjogc2VsZWN0KCBTVE9SRV9OQU1FICkuZ2V0RmV0Y2hFcnJvcigpLFxyXG5cdFx0XHR9XHJcblx0XHQpLFxyXG5cdFx0W10sXHJcblx0KTtcclxuXHJcblx0Y29uc3QgeyBoYXNFcnJvciwgc2V0U2hvd0Vycm9yIH0gPSB1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlcigge1xyXG5cdFx0aXNTdXBwb3J0ZWQ6IGVycm9yID0+ICdhcGlfa2V5JyA9PT0gZXJyb3I/LnByb3BlcnR5LFxyXG5cdH0gKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgdmFsdWU6IGdsb2JhbFNldHRpbmdzLFxyXG5cdFx0ICAgICAgb25DaGFuZ2U6IHNldEdsb2JhbFNldHRpbmdzLFxyXG5cdCAgICAgIH0gPSB1c2VTaXRlT3B0aW9uSlNPTihcclxuXHRcdCdqZXRfZm9ybV9idWlsZGVyX3NldHRpbmdzX19tYWlsY2hpbXAtdGFiJyxcclxuXHQpO1xyXG5cclxuXHRjb25zdCBpZCA9IHVzZUluc3RhbmNlSWQoIFJvd0NvbnRyb2wsICdqZmItY29udHJvbCcgKTtcclxuXHJcblx0cmV0dXJuIDxSb3dDb250cm9sIGNyZWF0ZUlkPXsgZmFsc2UgfT5cclxuXHRcdDxSZXF1aXJlZExhYmVsIGh0bWxGb3I9eyBpZCB9PlxyXG5cdFx0XHR7IF9fKCAnQVBJIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdDwvUmVxdWlyZWRMYWJlbD5cclxuXHRcdDxGbGV4XHJcblx0XHRcdGNsYXNzTmFtZT17IGN4KFxyXG5cdFx0XHRcdFJvd0NvbnRyb2xFbmRTdHlsZSxcclxuXHRcdFx0XHQoXHJcblx0XHRcdFx0XHRoYXNFcnJvciB8fCBCb29sZWFuKCBmZXRjaEVycm9yIClcclxuXHRcdFx0XHQpICYmIENvbnRyb2xXaXRoRXJyb3JTdHlsZSxcclxuXHRcdFx0KSB9XHJcblx0XHRcdGRpcmVjdGlvbj1cImNvbHVtblwiXHJcblx0XHQ+XHJcblx0XHRcdHsgaGFzRXJyb3IgJiYgPEljb25UZXh0PlxyXG5cdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHQnUGxlYXNlIGZpbGwgdGhpcyByZXF1aXJlZCBmaWVsZCcsXHJcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdDwvSWNvblRleHQ+IH1cclxuXHRcdFx0eyBCb29sZWFuKCBmZXRjaEVycm9yICkgJiYgPEljb25UZXh0PlxyXG5cdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHQnRmV0Y2hpbmcgZGF0YSB3YXMgZmFpbGVkJyxcclxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0PC9JY29uVGV4dD4gfVxyXG5cdFx0XHQ8RmxleD5cclxuXHRcdFx0XHR7IHNldHRpbmdzLnVzZV9nbG9iYWwgPyA8U3R5bGVkVGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGlkPXsgaWQgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBnbG9iYWxTZXR0aW5ncy5hcGlfa2V5IH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgYXBpX2tleSA9PiBzZXRHbG9iYWxTZXR0aW5ncyhcclxuXHRcdFx0XHRcdFx0eyBhcGlfa2V5IH0sXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdG9uQmx1cj17ICgpID0+IHNldFNob3dFcnJvciggdHJ1ZSApIH1cclxuXHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxyXG5cdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cclxuXHRcdFx0XHQvPiA6IDxTdHlsZWRUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0ICBpZD17IGlkIH1cclxuXHRcdFx0XHRcdCAgdmFsdWU9eyBzZXR0aW5ncy5hcGlfa2V5IH1cclxuXHRcdFx0XHRcdCAgb25DaGFuZ2U9eyBhcGlfa2V5ID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcclxuXHRcdFx0XHRcdFx0ICB7IGFwaV9rZXkgfSxcclxuXHRcdFx0XHRcdCAgKSB9XHJcblx0XHRcdFx0XHQgIG9uQmx1cj17ICgpID0+IHNldFNob3dFcnJvciggdHJ1ZSApIH1cclxuXHRcdFx0XHRcdCAgX19uZXh0NDBweERlZmF1bHRTaXplXHJcblx0XHRcdFx0XHQgIF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXHJcblx0XHRcdFx0ICAvPiB9XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGZldGNoQXBpRGF0YShcclxuXHRcdFx0XHRcdFx0c2V0dGluZ3MudXNlX2dsb2JhbFxyXG5cdFx0XHRcdFx0XHQ/IGdsb2JhbFNldHRpbmdzLmFwaV9rZXlcclxuXHRcdFx0XHRcdFx0OiBzZXR0aW5ncy5hcGlfa2V5LFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHRkaXNhYmxlZD17IGlzRmV0Y2hMb2FkaW5nIH1cclxuXHRcdFx0XHRcdGlzQnVzeT17IGlzRmV0Y2hMb2FkaW5nIH1cclxuXHRcdFx0XHRcdGljb249eyBjbG91ZCB9XHJcblx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oICdGZXRjaCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9GbGV4PlxyXG5cdFx0XHQ8QVBJS2V5SGVscC8+XHJcblx0XHQ8L0ZsZXg+XHJcblx0PC9Sb3dDb250cm9sPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQVBJS2V5Um93O1xyXG4iLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG5cdExhYmVsLFxyXG5cdFJvd0NvbnRyb2wsXHJcblx0Um93Q29udHJvbEVuZFN0eWxlLFxyXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGN4IH0gZnJvbSAnQGxpbmFyaWEvY29yZSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcbmltcG9ydCB7IEZpZWxkc01hcEZpZWxkIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRmllbGRzIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1ibG9ja3MtdG8tYWN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBGaWVsZHNNYXBSb3coIHsgZ2V0TWFwRmllbGQsIHNldE1hcEZpZWxkLCBsaXN0SWQgfSApIHtcclxuXHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IHVzZUZpZWxkcygge1xyXG5cdFx0d2l0aElubmVyOiBmYWxzZSxcclxuXHRcdHBsYWNlaG9sZGVyOiAnLS0nLFxyXG5cdH0gKTtcclxuXHJcblx0Y29uc3QgZmllbGRzID0gdXNlU2VsZWN0KCBzZWxlY3QgPT4ge1xyXG5cdFx0Y29uc3QgYWxsRmllbGRzID0gc2VsZWN0KCBTVE9SRV9OQU1FICkuZ2V0RmllbGRzKCk7XHJcblxyXG5cdFx0cmV0dXJuIGFsbEZpZWxkcz8uWyBsaXN0SWQgXSA/PyBbXTtcclxuXHR9LCBbIGxpc3RJZCBdICk7XHJcblxyXG5cdHJldHVybiA8Um93Q29udHJvbCBhbGlnbj1cImZsZXgtc3RhcnRcIj5cclxuXHRcdDxMYWJlbD57IF9fKCAnRmllbGRzIG1hcCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L0xhYmVsPlxyXG5cdFx0PEZsZXhcclxuXHRcdFx0Y2xhc3NOYW1lPXsgY3goIFJvd0NvbnRyb2xFbmRTdHlsZSApIH1cclxuXHRcdFx0ZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuXHRcdFx0Z2FwPXsgNCB9XHJcblx0XHQ+XHJcblx0XHRcdHsgZmllbGRzLm1hcCggKCBmaWVsZCApID0+IDxGaWVsZHNNYXBGaWVsZFxyXG5cdFx0XHRcdGtleT17IGZpZWxkLnZhbHVlIH1cclxuXHRcdFx0XHR0YWc9eyBmaWVsZC52YWx1ZSB9XHJcblx0XHRcdFx0bGFiZWw9eyBmaWVsZC5sYWJlbCB9XHJcblx0XHRcdFx0aXNSZXF1aXJlZD17IGZpZWxkLnJlcXVpcmVkIH1cclxuXHRcdFx0XHRmb3JtRmllbGRzPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdFx0dmFsdWU9eyBnZXRNYXBGaWVsZCggeyBuYW1lOiBmaWVsZC52YWx1ZSB9ICkgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gc2V0TWFwRmllbGQoXHJcblx0XHRcdFx0XHR7IG5hbWVGaWVsZDogZmllbGQudmFsdWUsIHZhbHVlIH0sXHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdC8+ICkgfVxyXG5cdFx0PC9GbGV4PlxyXG5cdDwvUm93Q29udHJvbD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkc01hcFJvdztcclxuIiwiaW1wb3J0IHtcclxuXHRGb3JtTGFiZWxlZFRva2VuRmllbGQsXHJcblx0Um93Q29udHJvbCxcclxuXHRMYWJlbCxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtR3JvdXBzVG9BcnJheSggZ3JvdXBzICkge1xyXG5cdGNvbnN0IGdyb3VwRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKCBncm91cHMgKTtcclxuXHRjb25zdCByZXN1bHQgICAgICAgPSBbXTtcclxuXHJcblx0Zm9yICggY29uc3QgWyBncm91cElkLCBpc0FjdGl2ZSBdIG9mIGdyb3VwRW50cmllcyApIHtcclxuXHRcdGlmICggIWlzQWN0aXZlICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdC5wdXNoKCBncm91cElkICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBHcm91cHNTZWxlY3RSb3coIHsgc2V0dGluZ3MsIG9uQ2hhbmdlU2V0dGluZ09iaiwgbGlzdElkIH0gKSB7XHJcblx0Y29uc3QgZ3JvdXBzID0gdXNlU2VsZWN0KCBzZWxlY3QgPT4ge1xyXG5cdFx0Y29uc3QgYWxsR3JvdXBzID0gc2VsZWN0KCBTVE9SRV9OQU1FICkuZ2V0R3JvdXBzKCk7XHJcblxyXG5cdFx0cmV0dXJuIGFsbEdyb3Vwcz8uWyBsaXN0SWQgXSA/PyBbXTtcclxuXHR9LCBbIGxpc3RJZCBdICk7XHJcblxyXG5cdHJldHVybiA8Um93Q29udHJvbCBjcmVhdGVJZD17IGZhbHNlIH0+XHJcblx0XHQ8TGFiZWw+XHJcblx0XHRcdHsgX18oICdHcm91cHMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHQ8L0xhYmVsPlxyXG5cdFx0PEZvcm1MYWJlbGVkVG9rZW5GaWVsZFxyXG5cdFx0XHRsYWJlbD17IF9fKCAnQ2hvb3NlIGEgZ3JvdXAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZ3JvdXBzX2lkcyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgZ3JvdXBzX2lkcyA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0eyBncm91cHNfaWRzIH0sXHJcblx0XHRcdCkgfVxyXG5cdFx0XHRzdWdnZXN0aW9ucz17IGdyb3VwcyB9XHJcblx0XHRcdF9fZXhwZXJpbWVudGFsVmFsaWRhdGVJbnB1dD17IGdyb3VwID0+IChcclxuXHRcdFx0XHRncm91cHMuc29tZSggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gZ3JvdXAgKVxyXG5cdFx0XHQpIH1cclxuXHRcdFx0X19leHBlcmltZW50YWxFeHBhbmRPbkZvY3VzXHJcblx0XHRcdF9fZXhwZXJpbWVudGFsU2hvd0hvd1RvPXsgZmFsc2UgfVxyXG5cdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcclxuXHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cclxuXHRcdC8+XHJcblx0PC9Sb3dDb250cm9sPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzU2VsZWN0Um93O1xyXG4iLCJpbXBvcnQgeyB1c2VJbnN0YW5jZUlkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcclxuaW1wb3J0IHtcclxuXHRDb250cm9sV2l0aEVycm9yU3R5bGUsIEljb25UZXh0LFxyXG5cdFJlcXVpcmVkTGFiZWwsXHJcblx0Um93Q29udHJvbCxcclxuXHRSb3dDb250cm9sRW5kU3R5bGUsXHJcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgeyBGbGV4LCBTZWxlY3RDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgY3ggfSBmcm9tICdAbGluYXJpYS9jb3JlJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcclxuaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gU2VsZWN0TGlzdFJvdyggeyBzZXR0aW5ncywgb25DaGFuZ2VTZXR0aW5nT2JqIH0gKSB7XHJcblx0Y29uc3QgbGlzdHMgPSB1c2VTZWxlY3QoIHNlbGVjdCA9PiAoXHJcblx0XHRzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRMaXN0cygpXHJcblx0KSwgW10gKTtcclxuXHJcblx0Y29uc3QgeyBoYXNFcnJvciwgc2V0U2hvd0Vycm9yIH0gPSB1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlcigge1xyXG5cdFx0aXNTdXBwb3J0ZWQ6IGVycm9yID0+ICdsaXN0X2lkJyA9PT0gZXJyb3I/LnByb3BlcnR5LFxyXG5cdH0gKTtcclxuXHJcblx0Y29uc3QgaWQgPSB1c2VJbnN0YW5jZUlkKCBSb3dDb250cm9sLCAnamZiLWNvbnRyb2wnICk7XHJcblxyXG5cdHJldHVybiA8Um93Q29udHJvbCBjcmVhdGVJZD17IGZhbHNlIH0+XHJcblx0XHQ8UmVxdWlyZWRMYWJlbCBodG1sRm9yPXsgaWQgfT5cclxuXHRcdFx0eyBfXyggJ0F1ZGllbmNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0PC9SZXF1aXJlZExhYmVsPlxyXG5cdFx0PEZsZXhcclxuXHRcdFx0Y2xhc3NOYW1lPXsgY3goXHJcblx0XHRcdFx0Um93Q29udHJvbEVuZFN0eWxlLFxyXG5cdFx0XHRcdGhhc0Vycm9yICYmIENvbnRyb2xXaXRoRXJyb3JTdHlsZSxcclxuXHRcdFx0KSB9XHJcblx0XHRcdGRpcmVjdGlvbj1cImNvbHVtblwiXHJcblx0XHQ+XHJcblx0XHRcdHsgaGFzRXJyb3IgJiYgPEljb25UZXh0PlxyXG5cdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHQnUGxlYXNlIGZpbGwgdGhpcyByZXF1aXJlZCBmaWVsZCcsXHJcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdDwvSWNvblRleHQ+IH1cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRpZD17IGlkIH1cclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmxpc3RfaWQgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbGlzdF9pZCA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0XHR7IGxpc3RfaWQgfSxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0XHRvbkJsdXI9eyAoKSA9PiBzZXRTaG93RXJyb3IoIHRydWUgKSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0XHRcdFx0XHRsYWJlbDogX18oXHJcblx0XHRcdFx0XHRcdFx0Jy0tIFNlbGVjdCBsaXN0IC8gYXVkaWVuY2UgLS0nLFxyXG5cdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQuLi5saXN0cyxcclxuXHRcdFx0XHRdIH1cclxuXHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcclxuXHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9GbGV4PlxyXG5cdDwvUm93Q29udHJvbD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdExpc3RSb3c7XHJcbiIsImltcG9ydCB7XHJcblx0Um93Q29udHJvbCxcclxuXHRMYWJlbCxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IEZvcm1Ub2tlbkZpZWxkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuXHJcbmZ1bmN0aW9uIFRhZ3NSb3coIHsgc2V0dGluZ3MsIG9uQ2hhbmdlU2V0dGluZ09iaiB9ICkge1xyXG5cclxuXHQvKipcclxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMDc4M1xyXG5cdCAqL1xyXG5cdGNvbnN0IHRhZ3NWYWx1ZSA9IEFycmF5LmlzQXJyYXkoc2V0dGluZ3MudGFncykgPyBzZXR0aW5ncy50YWdzIDogW107IFxyXG5cclxuXHRyZXR1cm4gPFJvd0NvbnRyb2wgY3JlYXRlSWQ9eyBmYWxzZSB9PlxyXG5cdFx0PExhYmVsPlxyXG5cdFx0XHR7IF9fKCAnVGFncycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdDwvTGFiZWw+XHJcblx0XHQ8Rm9ybVRva2VuRmllbGRcclxuXHRcdFx0dmFsdWU9eyB0YWdzVmFsdWUgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHRhZ3MgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdHsgdGFncyB9LFxyXG5cdFx0XHQpIH1cclxuXHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXHJcblx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXHJcblx0XHQvPlxyXG5cdDwvUm93Q29udHJvbD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3NSb3c7XHJcbiIsImNvbnN0IGljb24gPSAoXHJcblx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG5cdFx0PHJlY3QgeD1cIjBcIiBmaWxsPVwibm9uZVwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiLz5cclxuXHRcdDxnPlxyXG5cdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdGQ9XCJNMTYgMS4xTDQgNS45Yy0xLjEuNC0yIDEuOC0yIDN2OC43YzAgMS4yLjkgMS44IDIgMS40bDEyLTQuOGMxLjEtLjQgMi0xLjggMi0zVjIuNWMwLTEuMi0uOS0xLjgtMi0xLjR6bS42IDIuNmwtNiA5LjMtNi43LTQuNWMtLjEtLjEtLjQtLjQtLjItLjcuMi0uNC43LS4yLjctLjJsNi4zIDIuM3M0LjgtNi4zIDUuMS02LjdjLjEtLjIuNC0uMy43LS4xLjMuMi4yLjUuMS42elwiLz5cclxuXHRcdDwvZz5cclxuXHQ8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGljb247IiwiaW1wb3J0IE1haWxDaGltcFJlbmRlciBmcm9tICcuL3JlbmRlcic7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJztcclxuaW1wb3J0IHZhbGlkYXRvcnMgZnJvbSAnLi92YWxpZGF0b3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0eXBlOiAnbWFpbGNoaW1wJyxcclxuXHRsYWJlbDogX18oICdNYWlsQ2hpbXAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRlZGl0OiBNYWlsQ2hpbXBSZW5kZXIsXHJcblx0aWNvbixcclxuXHRkb2NIcmVmOiAnaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vZmVhdHVyZXMvbWFpbGNoaW1wLycsXHJcblx0Y2F0ZWdvcnk6ICdjb21tdW5pY2F0aW9uJyxcclxuXHR2YWxpZGF0b3JzLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuaW1wb3J0IHtcclxuXHRGbGV4LFxyXG5cdFRvZ2dsZUNvbnRyb2wgYXMgQ29yZVRvZ2dsZUNvbnRyb2wsXHJcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgeyBDbGVhckJhc2VDb250cm9sU3R5bGUsIFdpZGVMaW5lIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcclxuaW1wb3J0IEFQSUtleVJvdyBmcm9tICcuL0FQSUtleVJvdyc7XHJcbmltcG9ydCBTZWxlY3RMaXN0Um93IGZyb20gJy4vU2VsZWN0TGlzdFJvdyc7XHJcbmltcG9ydCBHcm91cHNTZWxlY3RSb3csIHsgdHJhbnNmb3JtR3JvdXBzVG9BcnJheSB9IGZyb20gJy4vR3JvdXBzU2VsZWN0Um93JztcclxuaW1wb3J0IFRhZ3NSb3cgZnJvbSAnLi9UYWdzUm93JztcclxuaW1wb3J0IEZpZWxkc01hcFJvdyBmcm9tICcuL0ZpZWxkc01hcFJvdyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcbmltcG9ydCB7IFNUT1JFX05BTUUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcblxyXG5jb25zdCB7IFRvZ2dsZUNvbnRyb2wgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmZ1bmN0aW9uIE1haWxDaGltcFJlbmRlciggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHNldHRpbmdzLFxyXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nT2JqLFxyXG5cdFx0ICAgICAgZ2V0TWFwRmllbGQsXHJcblx0XHQgICAgICBzZXRNYXBGaWVsZCxcclxuXHQgICAgICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IHsgaGFzRXJyb3IsIGhhc0xpc3RzIH0gPSB1c2VTZWxlY3QoIHNlbGVjdCA9PiAoXHJcblx0XHR7XHJcblx0XHRcdGhhc0Vycm9yOiBCb29sZWFuKCBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRGZXRjaEVycm9yKCkgKSxcclxuXHRcdFx0aGFzTGlzdHM6IEJvb2xlYW4oIHNlbGVjdCggU1RPUkVfTkFNRSApLmdldExpc3RzKCkubGVuZ3RoICksXHJcblx0XHR9XHJcblx0KSwgW10gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRjb25zdCBuZXdTZXR0aW5ncyA9IHt9O1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MudGFncyAmJiAhQXJyYXkuaXNBcnJheSggc2V0dGluZ3MudGFncyApICkge1xyXG5cdFx0XHRuZXdTZXR0aW5ncy50YWdzID0gc2V0dGluZ3MudGFncy5zcGxpdCggJywnICkubWFwKFxyXG5cdFx0XHRcdHRhZyA9PiB0YWcudHJpbSgpLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggc2V0dGluZ3MuZ3JvdXBzX2lkcyAmJiAhQXJyYXkuaXNBcnJheSggc2V0dGluZ3MuZ3JvdXBzX2lkcyApICkge1xyXG5cdFx0XHRuZXdTZXR0aW5ncy5ncm91cHNfaWRzID0gdHJhbnNmb3JtR3JvdXBzVG9BcnJheShcclxuXHRcdFx0XHRzZXR0aW5ncy5ncm91cHNfaWRzLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggIU9iamVjdC52YWx1ZXMoIG5ld1NldHRpbmdzICk/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9uQ2hhbmdlU2V0dGluZ09iaiggeyAuLi5uZXdTZXR0aW5ncyB9ICk7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW10gKTtcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcblx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXsgQ2xlYXJCYXNlQ29udHJvbFN0eWxlIH1cclxuXHRcdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MudXNlX2dsb2JhbCB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gKFxyXG5cdFx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nT2JqKCB7IHVzZV9nbG9iYWw6IEJvb2xlYW4oIHZhbCApIH0gKVxyXG5cdFx0XHRcdCkgfVxyXG5cdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IF9fKCAnVXNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxyXG5cdFx0XHRcdDxhIGhyZWY9eyBKZXRGb3JtRWRpdG9yRGF0YS5nbG9iYWxfc2V0dGluZ3NfdXJsICtcclxuXHRcdFx0XHRcdCcjbWFpbGNoaW1wLXRhYicgfT5cclxuXHRcdFx0XHRcdHsgX18oICdHbG9iYWwgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L1RvZ2dsZUNvbnRyb2w+XHJcblx0XHRcdDxXaWRlTGluZS8+XHJcblx0XHRcdDxBUElLZXlSb3dcclxuXHRcdFx0XHRzZXR0aW5ncz17IHNldHRpbmdzIH1cclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmdPYmo9eyBvbkNoYW5nZVNldHRpbmdPYmogfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHR7ICFoYXNFcnJvciAmJiBoYXNMaXN0cyAmJiA8PlxyXG5cdFx0XHRcdDxXaWRlTGluZS8+XHJcblx0XHRcdFx0PFNlbGVjdExpc3RSb3dcclxuXHRcdFx0XHRcdHNldHRpbmdzPXsgc2V0dGluZ3MgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nT2JqPXsgb25DaGFuZ2VTZXR0aW5nT2JqIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgQm9vbGVhbiggc2V0dGluZ3MubGlzdF9pZCApICYmIDw+XHJcblx0XHRcdFx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0XHRcdFx0PEdyb3Vwc1NlbGVjdFJvd1xyXG5cdFx0XHRcdFx0XHRsaXN0SWQ9eyBzZXR0aW5ncy5saXN0X2lkIH1cclxuXHRcdFx0XHRcdFx0c2V0dGluZ3M9eyBzZXR0aW5ncyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaj17IG9uQ2hhbmdlU2V0dGluZ09iaiB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFdpZGVMaW5lLz5cclxuXHRcdFx0XHRcdDxUYWdzUm93XHJcblx0XHRcdFx0XHRcdHNldHRpbmdzPXsgc2V0dGluZ3MgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVNldHRpbmdPYmo9eyBvbkNoYW5nZVNldHRpbmdPYmogfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxXaWRlTGluZS8+XHJcblx0XHRcdFx0XHQ8Q29yZVRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RvdWJsZSBPcHQtSW4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IENsZWFyQmFzZUNvbnRyb2xTdHlsZSB9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBzZXR0aW5ncy5kb3VibGVfb3B0X2luIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaigge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZG91YmxlX29wdF9pbjogQm9vbGVhbiggdmFsICksXHJcblx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0XHRcdFx0PEZpZWxkc01hcFJvd1xyXG5cdFx0XHRcdFx0XHRsaXN0SWQ9eyBzZXR0aW5ncy5saXN0X2lkIH1cclxuXHRcdFx0XHRcdFx0Z2V0TWFwRmllbGQ9eyBnZXRNYXBGaWVsZCB9XHJcblx0XHRcdFx0XHRcdHNldE1hcEZpZWxkPXsgc2V0TWFwRmllbGQgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Lz4gfVxyXG5cdFx0XHQ8Lz4gfVxyXG5cdFx0PC9GbGV4PlxyXG5cdCk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWlsQ2hpbXBSZW5kZXI7IiwiaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcclxuaW1wb3J0IHsgU1RPUkVfTkFNRSB9IGZyb20gJy4uL3N0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuXHQoIHsgc2V0dGluZ3MgfSApID0+IHtcclxuXHRcdGlmICggc2V0dGluZ3MudXNlX2dsb2JhbCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHNldHRpbmdzPy5hcGlfa2V5XHJcblx0XHQgICAgICAgPyBmYWxzZVxyXG5cdFx0ICAgICAgIDogeyB0eXBlOiAnZW1wdHknLCBwcm9wZXJ0eTogJ2FwaV9rZXknIH07XHJcblx0fSxcclxuXHQoIHsgc2V0dGluZ3MgfSApID0+IHtcclxuXHRcdHJldHVybiBzZXR0aW5ncz8ubGlzdF9pZFxyXG5cdFx0ICAgICAgID8gZmFsc2VcclxuXHRcdCAgICAgICA6IHsgdHlwZTogJ2VtcHR5JywgcHJvcGVydHk6ICdsaXN0X2lkJyB9O1xyXG5cdH0sXHJcblx0KCB7IHNldHRpbmdzIH0gKSA9PiB7XHJcblx0XHRjb25zdCBmaWVsZHMgPSBzZWxlY3QoIFNUT1JFX05BTUUgKS5nZXRGaWVsZHMoKTtcclxuXHJcblx0XHRpZiAoICFPYmplY3Qua2V5cyggZmllbGRzICkubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRjb25zdCBlcnJvcnMgICAgICAgICAgICAgID0gW107XHJcblx0XHRjb25zdCB7IGxpc3RfaWQ6IGxpc3RJZCB9ID0gc2V0dGluZ3M7XHJcblx0XHRjb25zdCBsaXN0RmllbGRzICAgICAgICAgID0gZmllbGRzWyBsaXN0SWQgXTtcclxuXHJcblx0XHRpZiAoICFsaXN0RmllbGRzPy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCBjb25zdCBsaXN0RmllbGQgb2YgbGlzdEZpZWxkcyApIHtcclxuXHRcdFx0aWYgKCAhbGlzdEZpZWxkLnJlcXVpcmVkICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGZpZWxkVmFsdWUgPSBzZXR0aW5ncz8uZmllbGRzX21hcD8uWyBsaXN0RmllbGQudmFsdWUgXTtcclxuXHJcblx0XHRcdGlmICggIWZpZWxkVmFsdWUgKSB7XHJcblx0XHRcdFx0ZXJyb3JzLnB1c2goXHJcblx0XHRcdFx0XHR7IHR5cGU6ICdlbXB0eScsIHByb3BlcnR5OiAnZmllbGRfJyArIGxpc3RGaWVsZC52YWx1ZSB9LFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZXJyb3JzO1xyXG5cdH0sXHJcbl07IiwiaW1wb3J0IHtcclxuXHRTVEFSVF9GRVRDSCxcclxuXHRFTkRfRkVUQ0gsXHJcblx0U0VUX0ZFVENIX0VSUk9SLFxyXG5cdFNFVF9MSVNUUywgU0VUX0dST1VQUywgU0VUX0ZJRUxEUyxcclxufSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBhcGlGZXRjaCBmcm9tICdAd29yZHByZXNzL2FwaS1mZXRjaCc7XHJcbmltcG9ydCB7IGFkZFF1ZXJ5QXJncyB9IGZyb20gJ0B3b3JkcHJlc3MvdXJsJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEFwaURhdGEgPSAoIGFwaUtleSApID0+IGFzeW5jICggeyBkaXNwYXRjaCB9ICkgPT4ge1xyXG5cdGlmICggIWFwaUtleSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGRpc3BhdGNoKCB7IHR5cGU6IFNUQVJUX0ZFVENIIH0gKTtcclxuXHRkaXNwYXRjaCggeyB0eXBlOiBTRVRfRkVUQ0hfRVJST1IsIGVycm9yOiBmYWxzZSB9ICk7XHJcblxyXG5cdGNvbnN0IHBhdGggPSBhZGRRdWVyeUFyZ3MoXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlci92MS9tYWlsY2hpbXAnLFxyXG5cdFx0eyBhcGlLZXkgfSxcclxuXHQpO1xyXG5cclxuXHRsZXQgcmVzcG9uc2U7XHJcblx0dHJ5IHtcclxuXHRcdHJlc3BvbnNlID0gYXdhaXQgYXBpRmV0Y2goIHsgcGF0aCB9ICk7XHJcblx0fVxyXG5cdGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHRkaXNwYXRjaCggeyB0eXBlOiBTRVRfRkVUQ0hfRVJST1IsIGVycm9yIH0gKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0ZmluYWxseSB7XHJcblx0XHRkaXNwYXRjaCggeyB0eXBlOiBFTkRfRkVUQ0ggfSApO1xyXG5cdH1cclxuXHJcblx0ZGlzcGF0Y2goIHsgdHlwZTogU0VUX0xJU1RTLCBwYXlsb2FkOiByZXNwb25zZS5saXN0cyB9ICk7XHJcblx0ZGlzcGF0Y2goIHsgdHlwZTogU0VUX0dST1VQUywgcGF5bG9hZDogcmVzcG9uc2UuZ3JvdXBzIH0gKTtcclxuXHRkaXNwYXRjaCggeyB0eXBlOiBTRVRfRklFTERTLCBwYXlsb2FkOiByZXNwb25zZS5maWVsZHMgfSApO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgU0VUX0xJU1RTICA9ICdTRVRfTElTVFMnO1xyXG5leHBvcnQgY29uc3QgU0VUX0dST1VQUyA9ICdTRVRfR1JPVVBTJztcclxuZXhwb3J0IGNvbnN0IFNFVF9GSUVMRFMgPSAnU0VUX0ZJRUxEUyc7XHJcblxyXG5leHBvcnQgY29uc3QgU1RBUlRfRkVUQ0ggICAgID0gJ1NUQVJUX0ZFVENIJztcclxuZXhwb3J0IGNvbnN0IEVORF9GRVRDSCAgICAgICA9ICdFTkRfRkVUQ0gnO1xyXG5leHBvcnQgY29uc3QgU0VUX0ZFVENIX0VSUk9SID0gJ1NFVF9GRVRDSF9FUlJPUic7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVJlZHV4U3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XHJcblxyXG5leHBvcnQgY29uc3QgU1RPUkVfTkFNRSA9ICdqZXQtZm9ybXMvbWFpbGNoaW1wJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlUmVkdXhTdG9yZShcclxuXHRTVE9SRV9OQU1FLFxyXG5cdHtcclxuXHRcdHJlZHVjZXIsXHJcblx0XHRhY3Rpb25zLFxyXG5cdFx0c2VsZWN0b3JzLFxyXG5cdH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJpbXBvcnQge1xyXG5cdEVORF9GRVRDSCxcclxuXHRTRVRfRkVUQ0hfRVJST1IsXHJcblx0U0VUX0ZJRUxEUyxcclxuXHRTRVRfR1JPVVBTLFxyXG5cdFNFVF9MSVNUUyxcclxuXHRTVEFSVF9GRVRDSCxcclxufSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcblxyXG5jb25zdCBhcGkgPSBmdW5jdGlvbiAoIHN0YXRlID0ge30sIGFjdGlvbiApIHtcclxuXHRzd2l0Y2ggKCBhY3Rpb24/LnR5cGUgKSB7XHJcblx0XHRjYXNlIFNFVF9MSVNUUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsaXN0czogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFNFVF9HUk9VUFM6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Z3JvdXBzOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgU0VUX0ZJRUxEUzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmaWVsZHM6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2ggPSBmdW5jdGlvbiAoIHN0YXRlID0ge30sIGFjdGlvbiApIHtcclxuXHRzd2l0Y2ggKCBhY3Rpb24/LnR5cGUgKSB7XHJcblx0XHRjYXNlIFNUQVJUX0ZFVENIOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIEVORF9GRVRDSDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgU0VUX0ZFVENIX0VSUk9SOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcblx0XHRcdH07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKCB7XHJcblx0YXBpLFxyXG5cdGZldGNoLFxyXG59ICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0cyggc3RhdGUgKSB7XHJcblx0cmV0dXJuIHN0YXRlPy5hcGk/Lmxpc3RzID8/IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JvdXBzKCBzdGF0ZSApIHtcclxuXHRyZXR1cm4gc3RhdGU/LmFwaT8uZ3JvdXBzID8/IHt9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRzKCBzdGF0ZSApIHtcclxuXHRyZXR1cm4gc3RhdGU/LmFwaT8uZmllbGRzID8/IHt9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGZXRjaExvYWRpbmcoIHN0YXRlICkge1xyXG5cdHJldHVybiBzdGF0ZS5mZXRjaD8ubG9hZGluZyA/PyBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZldGNoRXJyb3IoIHN0YXRlICkge1xyXG5cdHJldHVybiBzdGF0ZS5mZXRjaD8uZXJyb3IgPz8gZmFsc2U7XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNvdGZveWJ7LXdlYmtpdC1mbGV4OjE7LW1zLWZsZXg6MTtmbGV4OjE7fVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hY3Rpb24vQVBJS2V5Um93LmpzeFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zb3Rmb3liey13ZWJraXQtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxO31cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvb3V0cHV0Q3NzTG9hZGVyLmpzP2NhY2hlUHJvdmlkZXI9IS4vQVBJS2V5Um93LmpzeFwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwMDIxNjlmMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0FQSUtleVJvdy5qc3hcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL291dHB1dENzc0xvYWRlci5qcz9jYWNoZVByb3ZpZGVyPSEuL0FQSUtleVJvdy5qc3hcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJhY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYmxvY2tzVG9BY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImFwaUZldGNoXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJwcmltaXRpdmVzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJ1cmxcIl07IiwiLy8gc3JjL2Nzcy50c1xudmFyIGlkeCA9IDA7XG52YXIgY3NzID0gKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgcmV0dXJuIGBtb2NrZWQtY3NzLSR7aWR4Kyt9YDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1VzaW5nIHRoZSBcImNzc1wiIHRhZyBpbiBydW50aW1lIGlzIG5vdCBzdXBwb3J0ZWQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBzZXQgdXAgdGhlIEJhYmVsIHBsdWdpbiBjb3JyZWN0bHkuJ1xuICApO1xufTtcbnZhciBjc3NfZGVmYXVsdCA9IGNzcztcblxuLy8gc3JjL2N4LnRzXG52YXIgY3ggPSBmdW5jdGlvbiBjeDIoKSB7XG4gIGNvbnN0IHByZXNlbnRDbGFzc05hbWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IGF0b21pY0NsYXNzZXMgPSB7fTtcbiAgY29uc3Qgbm9uQXRvbWljQ2xhc3NlcyA9IFtdO1xuICBwcmVzZW50Q2xhc3NOYW1lcy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICBjb25zdCBpbmRpdmlkdWFsQ2xhc3NOYW1lcyA9IGFyZyA/IGFyZy5zcGxpdChcIiBcIikgOiBbXTtcbiAgICBpbmRpdmlkdWFsQ2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aChcImF0bV9cIikpIHtcbiAgICAgICAgY29uc3QgWywga2V5SGFzaF0gPSBjbGFzc05hbWUuc3BsaXQoXCJfXCIpO1xuICAgICAgICBhdG9taWNDbGFzc2VzW2tleUhhc2hdID0gY2xhc3NOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uQXRvbWljQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChjb25zdCBrZXlIYXNoIGluIGF0b21pY0NsYXNzZXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF0b21pY0NsYXNzZXMsIGtleUhhc2gpKSB7XG4gICAgICByZXN1bHQucHVzaChhdG9taWNDbGFzc2VzW2tleUhhc2hdKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goLi4ubm9uQXRvbWljQ2xhc3Nlcyk7XG4gIHJldHVybiByZXN1bHQuam9pbihcIiBcIik7XG59O1xudmFyIGN4X2RlZmF1bHQgPSBjeDtcbmV4cG9ydCB7XG4gIGNzc19kZWZhdWx0IGFzIGNzcyxcbiAgY3hfZGVmYXVsdCBhcyBjeFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBzcmMvc3R5bGVkLnRzXG5pbXBvcnQgdmFsaWRBdHRyIGZyb20gXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjeCB9IGZyb20gXCJAbGluYXJpYS9jb3JlXCI7XG52YXIgaXNDYXBpdGFsID0gKGNoKSA9PiBjaC50b1VwcGVyQ2FzZSgpID09PSBjaDtcbnZhciBmaWx0ZXJLZXkgPSAoa2V5cykgPT4gKGtleSkgPT4ga2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xudmFyIG9taXQgPSAob2JqLCBrZXlzKSA9PiB7XG4gIGNvbnN0IHJlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcihmaWx0ZXJLZXkoa2V5cykpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHJlc1trZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufTtcbmZ1bmN0aW9uIGZpbHRlclByb3BzKGFzSXMsIHByb3BzLCBvbWl0S2V5cykge1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gb21pdChwcm9wcywgb21pdEtleXMpO1xuICBpZiAoIWFzSXMpIHtcbiAgICBjb25zdCBpbnRlcm9wVmFsaWRBdHRyID0gdHlwZW9mIHZhbGlkQXR0ciA9PT0gXCJmdW5jdGlvblwiID8geyBkZWZhdWx0OiB2YWxpZEF0dHIgfSA6IHZhbGlkQXR0cjtcbiAgICBPYmplY3Qua2V5cyhmaWx0ZXJlZFByb3BzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICghaW50ZXJvcFZhbGlkQXR0ci5kZWZhdWx0KGtleSkpIHtcbiAgICAgICAgZGVsZXRlIGZpbHRlcmVkUHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZmlsdGVyZWRQcm9wcztcbn1cbnZhciB3YXJuSWZJbnZhbGlkID0gKHZhbHVlLCBjb21wb25lbnROYW1lKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUsbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJpbmdpZmllZCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYEFuIGludGVycG9sYXRpb24gZXZhbHVhdGVkIHRvICcke3N0cmluZ2lmaWVkfScgaW4gdGhlIGNvbXBvbmVudCAnJHtjb21wb25lbnROYW1lfScsIHdoaWNoIGlzIHByb2JhYmx5IGEgbWlzdGFrZS4gWW91IHNob3VsZCBleHBsaWNpdGx5IGNhc3Qgb3IgdHJhbnNmb3JtIHRoZSB2YWx1ZSB0byBhIHN0cmluZy5gXG4gICAgKTtcbiAgfVxufTtcbnZhciBpZHggPSAwO1xuZnVuY3Rpb24gc3R5bGVkKHRhZykge1xuICBsZXQgbW9ja2VkQ2xhc3MgPSBcIlwiO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgbW9ja2VkQ2xhc3MgKz0gYG1vY2tlZC1zdHlsZWQtJHtpZHgrK31gO1xuICAgIGlmICh0YWcgJiYgdGFnLl9fd3l3X21ldGEgJiYgdGFnLl9fd3l3X21ldGEuY2xhc3NOYW1lKSB7XG4gICAgICBtb2NrZWRDbGFzcyArPSBgICR7dGFnLl9fd3l3X21ldGEuY2xhc3NOYW1lfWA7XG4gICAgfVxuICB9XG4gIHJldHVybiAob3B0aW9ucykgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwidGVzdFwiKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1VzaW5nIHRoZSBcInN0eWxlZFwiIHRhZyBpbiBydW50aW1lIGlzIG5vdCBzdXBwb3J0ZWQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBzZXQgdXAgdGhlIEJhYmVsIHBsdWdpbiBjb3JyZWN0bHkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2FsbHN0YWNrL2xpbmFyaWEjc2V0dXAnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlciA9IChwcm9wcywgcmVmKSA9PiB7XG4gICAgICBjb25zdCB7IGFzOiBjb21wb25lbnQgPSB0YWcsIGNsYXNzOiBjbGFzc05hbWUgPSBtb2NrZWRDbGFzcyB9ID0gcHJvcHM7XG4gICAgICBjb25zdCBzaG91bGRLZWVwUHJvcHMgPSBvcHRpb25zLnByb3BzQXNJcyA9PT0gdm9pZCAwID8gISh0eXBlb2YgY29tcG9uZW50ID09PSBcInN0cmluZ1wiICYmIGNvbXBvbmVudC5pbmRleE9mKFwiLVwiKSA9PT0gLTEgJiYgIWlzQ2FwaXRhbChjb21wb25lbnRbMF0pKSA6IG9wdGlvbnMucHJvcHNBc0lzO1xuICAgICAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IGZpbHRlclByb3BzKHNob3VsZEtlZXBQcm9wcywgcHJvcHMsIFtcbiAgICAgICAgXCJhc1wiLFxuICAgICAgICBcImNsYXNzXCJcbiAgICAgIF0pO1xuICAgICAgZmlsdGVyZWRQcm9wcy5yZWYgPSByZWY7XG4gICAgICBmaWx0ZXJlZFByb3BzLmNsYXNzTmFtZSA9IG9wdGlvbnMuYXRvbWljID8gY3gob3B0aW9ucy5jbGFzcywgZmlsdGVyZWRQcm9wcy5jbGFzc05hbWUgfHwgY2xhc3NOYW1lKSA6IGN4KGZpbHRlcmVkUHJvcHMuY2xhc3NOYW1lIHx8IGNsYXNzTmFtZSwgb3B0aW9ucy5jbGFzcyk7XG4gICAgICBjb25zdCB7IHZhcnMgfSA9IG9wdGlvbnM7XG4gICAgICBpZiAodmFycykge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdmFycykge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdmFyc1tuYW1lXTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YXJpYWJsZVswXTtcbiAgICAgICAgICBjb25zdCB1bml0ID0gdmFyaWFibGVbMV0gfHwgXCJcIjtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiByZXN1bHQgPT09IFwiZnVuY3Rpb25cIiA/IHJlc3VsdChwcm9wcykgOiByZXN1bHQ7XG4gICAgICAgICAgd2FybklmSW52YWxpZCh2YWx1ZSwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgICBzdHlsZVtgLS0ke25hbWV9YF0gPSBgJHt2YWx1ZX0ke3VuaXR9YDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvd25TdHlsZSA9IGZpbHRlcmVkUHJvcHMuc3R5bGUgfHwge307XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvd25TdHlsZSk7XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc3R5bGVba2V5XSA9IG93blN0eWxlW2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlsdGVyZWRQcm9wcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgfVxuICAgICAgaWYgKHRhZy5fX3d5d19tZXRhICYmIHRhZyAhPT0gY29tcG9uZW50KSB7XG4gICAgICAgIGZpbHRlcmVkUHJvcHMuYXMgPSBjb21wb25lbnQ7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZywgZmlsdGVyZWRQcm9wcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIGZpbHRlcmVkUHJvcHMpO1xuICAgIH07XG4gICAgY29uc3QgUmVzdWx0ID0gUmVhY3QuZm9yd2FyZFJlZiA/IFJlYWN0LmZvcndhcmRSZWYocmVuZGVyKSA6IChcbiAgICAgIC8vIFJlYWN0LmZvcndhcmRSZWYgd29uJ3QgYXZhaWxhYmxlIG9uIG9sZGVyIFJlYWN0IHZlcnNpb25zIGFuZCBpbiBQcmVhY3RcbiAgICAgIC8vIEZhbGxiYWNrIHRvIGEgaW5uZXJSZWYgcHJvcCBpbiB0aGF0IGNhc2VcbiAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCByZXN0ID0gb21pdChwcm9wcywgW1wiaW5uZXJSZWZcIl0pO1xuICAgICAgICByZXR1cm4gcmVuZGVyKHJlc3QsIHByb3BzLmlubmVyUmVmKTtcbiAgICAgIH1cbiAgICApO1xuICAgIFJlc3VsdC5kaXNwbGF5TmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICBSZXN1bHQuX193eXdfbWV0YSA9IHtcbiAgICAgIGNsYXNzTmFtZTogb3B0aW9ucy5jbGFzcyB8fCBtb2NrZWRDbGFzcyxcbiAgICAgIGV4dGVuZHM6IHRhZ1xuICAgIH07XG4gICAgcmV0dXJuIFJlc3VsdDtcbiAgfTtcbn1cbnZhciBzdHlsZWRfZGVmYXVsdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBQcm94eShzdHlsZWQsIHtcbiAgZ2V0KG8sIHByb3ApIHtcbiAgICByZXR1cm4gbyhwcm9wKTtcbiAgfVxufSkgOiBzdHlsZWQ7XG5leHBvcnQge1xuICBzdHlsZWRfZGVmYXVsdCBhcyBzdHlsZWRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhY3Rpb24gZnJvbSAnLi9hY3Rpb24nO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJBY3Rpb24gfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xyXG5cclxucmVnaXN0ZXIoIHN0b3JlICk7XHJcbnJlZ2lzdGVyQWN0aW9uKCBhY3Rpb24gKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9