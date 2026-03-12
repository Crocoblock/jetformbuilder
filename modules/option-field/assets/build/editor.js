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

/***/ }),

/***/ "../../shared/blocks/checkbox/block.json":
/*!***********************************************!*\
  !*** ../../shared/blocks/checkbox/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/checkbox-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","checkbox"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false,"jetFBSanitizeValue":true},"title":"Checkbox Field","description":"","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M6 15C6 12.7909 7.79086 11 10 11H20C22.2091 11 24 12.7909 24 15V25C24 27.2091 22.2091 29 20 29H10C7.79086 29 6 27.2091 6 25V15ZM10 13H20C21.1046 13 22 13.8954 22 15V25C22 26.1046 21.1046 27 20 27H10C8.89543 27 8 26.1046 8 25V15C8 13.8954 8.89543 13 10 13Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 18C28 17.4477 28.4477 17 29 17H57C57.5523 17 58 17.4477 58 18C58 18.5523 57.5523 19 57 19H29C28.4477 19 28 18.5523 28 18Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 22C28 21.4477 28.4477 21 29 21H48C48.5523 21 49 21.4477 49 22C49 22.5523 48.5523 23 48 23H29C28.4477 23 28 22.5523 28 22Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M19.6402 40.2318C20.0645 40.5854 20.1218 41.2159 19.7682 41.6402L14.7682 47.6402C14.5884 47.856 14.326 47.9863 14.0453 47.999C13.7646 48.0117 13.4916 47.9058 13.2929 47.7071L10.2929 44.7071C9.90237 44.3166 9.90237 43.6834 10.2929 43.2929C10.6834 42.9024 11.3166 42.9024 11.7071 43.2929L13.9328 45.5186L18.2318 40.3598C18.5853 39.9356 19.2159 39.8782 19.6402 40.2318Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M6 39C6 36.7909 7.79086 35 10 35H20C22.2091 35 24 36.7909 24 39V49C24 51.2091 22.2091 53 20 53H10C7.79086 53 6 51.2091 6 49V39ZM10 37H20C21.1046 37 22 37.8954 22 39V49C22 50.1046 21.1046 51 20 51H10C8.89543 51 8 50.1046 8 49V39C8 37.8954 8.89543 37 10 37Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M29 41C28.4477 41 28 41.4477 28 42C28 42.5523 28.4477 43 29 43H57C57.5523 43 58 42.5523 58 42C58 41.4477 57.5523 41 57 41H29Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 46C28 45.4477 28.4477 45 29 45H48C48.5523 45 49 45.4477 49 46C49 46.5523 48.5523 47 48 47H29C28.4477 47 28 46.5523 28 46Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 9C0 6.79086 1.79086 5 4 5H60C62.2091 5 64 6.79086 64 9V55C64 57.2091 62.2091 59 60 59H4C1.79086 59 0 57.2091 0 55V9ZM4 7H60C61.1046 7 62 7.89543 62 9V55C62 56.1046 61.1046 57 60 57H4C2.89543 57 2 56.1046 2 55V9C2 7.89543 2.89543 7 4 7Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"value":{"type":"object","default":{}},"validation":{"type":"object","default":{}},"custom_option":{"type":"object","default":{"allow":false,"label":"+ Add New"}},"custom_item_template":{"type":"boolean","default":false},"custom_item_template_id":{"type":"string","default":""},"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"generator_args":{"type":"object","default":{}},"generator_auto_update":{"type":"boolean","default":false},"generator_listen_field":{"type":["string","array"],"default":""},"generator_require_all_filled":{"type":"boolean","default":false},"generator_update_on_button":{"type":"string","default":""},"generator_cache_timeout":{"type":"number","default":60},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"default":{"type":"string","default":"","jfb":{"rich-no-preset":true}},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":"","jfb":{"rich":true}},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewStyle":"jet-fb-option-field-checkbox","style":"jet-fb-option-field-checkbox"}');

/***/ }),

/***/ "../../shared/blocks/radio/block.json":
/*!********************************************!*\
  !*** ../../shared/blocks/radio/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/radio-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","radio"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false,"jetFBSwitchPageOnChange":true,"jetFBSanitizeValue":true},"title":"Radio Field","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M6 43C6 38.0294 10.0294 34 15 34C19.9706 34 24 38.0294 24 43C24 47.9706 19.9706 52 15 52C10.0294 52 6 47.9706 6 43ZM15 50C11.134 50 8 46.866 8 43C8 39.134 11.134 36 15 36C18.866 36 22 39.134 22 43C22 46.866 18.866 50 15 50Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 41C28 40.4477 28.4477 40 29 40H57C57.5523 40 58 40.4477 58 41C58 41.5523 57.5523 42 57 42H29C28.4477 42 28 41.5523 28 41Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M29 44C28.4477 44 28 44.4477 28 45C28 45.5523 28.4477 46 29 46H48C48.5523 46 49 45.5523 49 45C49 44.4477 48.5523 44 48 44H29Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 19C28 18.4477 28.4477 18 29 18H57C57.5523 18 58 18.4477 58 19C58 19.5523 57.5523 20 57 20H29C28.4477 20 28 19.5523 28 19Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M29 22C28.4477 22 28 22.4477 28 23C28 23.5523 28.4477 24 29 24H48C48.5523 24 49 23.5523 49 23C49 22.4477 48.5523 22 48 22H29Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M19 21C19 23.2091 17.2091 25 15 25C12.7909 25 11 23.2091 11 21C11 18.7909 12.7909 17 15 17C17.2091 17 19 18.7909 19 21ZM17 21C17 22.1046 16.1046 23 15 23C13.8954 23 13 22.1046 13 21C13 19.8954 13.8954 19 15 19C16.1046 19 17 19.8954 17 21Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M15 12C10.0294 12 6 16.0294 6 21C6 25.9706 10.0294 30 15 30C19.9706 30 24 25.9706 24 21C24 16.0294 19.9706 12 15 12ZM8 21C8 24.866 11.134 28 15 28C18.866 28 22 24.866 22 21C22 17.134 18.866 14 15 14C11.134 14 8 17.134 8 21Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 9C0 6.79086 1.79086 5 4 5H60C62.2091 5 64 6.79086 64 9V55C64 57.2091 62.2091 59 60 59H4C1.79086 59 0 57.2091 0 55V9ZM4 7H60C61.1046 7 62 7.89543 62 9V55C62 56.1046 61.1046 57 60 57H4C2.89543 57 2 56.1046 2 55V9C2 7.89543 2.89543 7 4 7Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"value":{"type":"object","default":{}},"validation":{"type":"object","default":{}},"custom_option":{"type":"boolean","default":false},"custom_item_template":{"type":"boolean","default":false},"custom_item_template_id":{"type":"string","default":""},"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"generator_args":{"type":"object","default":{}},"generator_auto_update":{"type":"boolean","default":false},"generator_listen_field":{"type":["string","array"],"default":""},"generator_require_all_filled":{"type":"boolean","default":false},"generator_update_on_button":{"type":"string","default":""},"generator_cache_timeout":{"type":"number","default":60},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"default":{"type":"string","default":"","jfb":{"rich-no-preset":true}},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":"","jfb":{"rich":true}},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewStyle":"jet-fb-option-field-radio","style":"jet-fb-option-field-radio"}');

/***/ }),

/***/ "../../shared/blocks/select/block.json":
/*!*********************************************!*\
  !*** ../../shared/blocks/select/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/select-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","select"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false,"jetFBSwitchPageOnChange":true,"jetFBSanitizeValue":true},"title":"Select Field","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path d=\\"M52.7071 15.707L50 18.4141L47.2929 15.707C46.9024 15.3164 46.9024 14.6833 47.2929 14.2927C47.6834 13.9022 48.3166 13.9022 48.7071 14.2927L50 15.5856L51.2929 14.2927C51.6834 13.9022 52.3166 13.9022 52.7071 14.2927C53.0976 14.6833 53.0976 15.3164 52.7071 15.707Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M45 7C42.7909 7 41 8.79086 41 11V21C41 23.2091 42.7909 25 45 25H55C57.2091 25 59 23.2091 59 21V11C59 8.79086 57.2091 7 55 7H45ZM55 9H45C43.8954 9 43 9.89543 43 11V21C43 22.1046 43.8954 23 45 23H55C56.1046 23 57 22.1046 57 21V11C57 9.89543 56.1046 9 55 9Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 6C0 3.79086 1.79086 2 4 2H60C62.2091 2 64 3.79086 64 6V26C64 28.2091 62.2091 30 60 30H4C1.79086 30 0 28.2091 0 26V6ZM4 4H60C61.1046 4 62 4.89543 62 6V26C62 27.1046 61.1046 28 60 28H4C2.89543 28 2 27.1046 2 26V6C2 4.89543 2.89543 4 4 4Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M52.7071 47.707L50 50.4141L47.2929 47.707C46.9024 47.3164 46.9024 46.6833 47.2929 46.2927C47.6834 45.9022 48.3166 45.9022 48.7071 46.2927L50 47.5856L51.2929 46.2927C51.6834 45.9022 52.3166 45.9022 52.7071 46.2927C53.0976 46.6833 53.0976 47.3164 52.7071 47.707Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M45 39C42.7909 39 41 40.7909 41 43V53C41 55.2091 42.7909 57 45 57H55C57.2091 57 59 55.2091 59 53V43C59 40.7909 57.2091 39 55 39H45ZM57 43C57 41.8954 56.1046 41 55 41H45C43.8954 41 43 41.8954 43 43V53C43 54.1046 43.8954 55 45 55H55C56.1046 55 57 54.1046 57 53V43Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 38C0 35.7909 1.79086 34 4 34H60C62.2091 34 64 35.7909 64 38V58C64 60.2091 62.2091 62 60 62H4C1.79086 62 0 60.2091 0 58V38ZM4 36H60C61.1046 36 62 36.8954 62 38V58C62 59.1046 61.1046 60 60 60H4C2.89543 60 2 59.1046 2 58V38C2 36.8954 2.89543 36 4 36Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"value":{"type":"object","default":{}},"validation":{"type":"object","default":{}},"multiple":{"type":"boolean","default":false},"multiple_size":{"type":"number","default":4},"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"is_disabled_placeholder":{"type":"boolean","default":false},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"generator_args":{"type":"object","default":{}},"generator_auto_update":{"type":"boolean","default":false},"generator_listen_field":{"type":["string","array"],"default":""},"generator_require_all_filled":{"type":"boolean","default":false},"generator_update_on_button":{"type":"string","default":""},"generator_cache_timeout":{"type":"number","default":60},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"default":{"type":"string","default":"","jfb":{"rich-no-preset":true}},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":"","jfb":{"rich":true}},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewScript":"jet-fb-option-field-select","style":"jet-fb-option-field-select"}');

/***/ }),

/***/ "./editor/blocks/checkbox/edit.js":
/*!****************************************!*\
  !*** ./editor/blocks/checkbox/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckboxEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview */ "./editor/blocks/checkbox/preview.js");
/* harmony import */ var _components_SelectRadioCheckPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SelectRadioCheckPlaceholder */ "./editor/components/SelectRadioCheckPlaceholder.js");
/* harmony import */ var _components_SelectRadioCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SelectRadioCheck */ "./editor/components/SelectRadioCheck.js");
/* harmony import */ var _components_CustomTemplateControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CustomTemplateControls */ "./editor/components/CustomTemplateControls.js");





const {
  AdvancedFields,
  ToolBarFields,
  FieldControl,
  BlockName,
  BlockLabel,
  BlockDescription,
  BlockAdvancedValue
} = JetFBComponents;
const {
  useUniqueNameOnDuplicate
} = JetFBHooks;
const {
  __
} = wp.i18n;
const {
  InspectorControls,
  useBlockProps,
  BlockSettingsMenuControls
} = wp.blockEditor;
const {
  SVG,
  Path
} = wp.primitives;
const {
  PanelBody,
  TextControl,
  ToolbarButton
} = wp.components;
const localized = window.JetFormOptionFieldData;
function CheckboxEdit(props) {
  const blockProps = useBlockProps();
  useUniqueNameOnDuplicate();
  const {
    isSelected,
    editProps: {
      uniqKey
    },
    attributes,
    setAttributes
  } = props;
  if (attributes.isPreview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, _preview__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockSettingsMenuControls, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolBarFields, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarButton, {
    icon: attributes.custom_option.allow ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      width: "32",
      height: "32",
      rx: "2",
      fill: "#101517"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M30 16.796L18.044 28.8813L14 30L15.156 26.0867L27.1107 14L30 16.796Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M12 8H6V21H17.3398L15.3398 23H6L5.7959 22.9893C4.85435 22.8938 4.1062 22.1457 4.01074 21.2041L4 21V8C4 6.89543 4.89543 6 6 6H12V8Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M21 17.3398L19 19.3398V15H21V17.3398Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M19 3H21V6H24V8H21V11H19V8H16V6H19V3Z",
      fill: "currentColor"
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M30 16.796L18.044 28.8813L14 30L15.156 26.0867L27.1107 14L30 16.796Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M12 8H6V21H17.3398L15.3398 23H6L5.7959 22.9893C4.85435 22.8938 4.1062 22.1457 4.01074 21.2041L4 21V8C4 6.89543 4.89543 6 6 6H12V8Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M21 17.3398L19 19.3398V15H21V17.3398Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M19 3H21V6H24V8H21V11H19V8H16V6H19V3Z",
      fill: "currentColor"
    })),
    title: attributes.custom_option.allow ? __('Disable custom options', 'jet-form-builder') : __('Enable custom options', 'jet-form-builder'),
    onClick: () => setAttributes({
      custom_option: {
        ...attributes.custom_option,
        allow: !attributes.custom_option.allow
      }
    }),
    isActive: attributes.custom_option.allow
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('General', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockLabel, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockName, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockDescription, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Value', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAdvancedValue, null), attributes.custom_option.allow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Button label', 'jet-form-builder'),
    onChange: label => setAttributes({
      custom_option: {
        ...attributes.custom_option,
        label
      }
    }),
    help: __('For custom option', 'jet-form-builder'),
    value: attributes.custom_option.label
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AdvancedFields, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    key: uniqKey('viewBlock')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectRadioCheckPlaceholder__WEBPACK_IMPORTED_MODULE_2__.SelectRadioCheckPlaceholder, {
    key: uniqKey('SelectRadioCheckPlaceholder'),
    scriptData: localized,
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectRadioCheck__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CustomTemplateControls__WEBPACK_IMPORTED_MODULE_4__["default"], {
    listingTypes: localized.listings_list,
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldControl, {
    type: "custom_settings",
    key: uniqKey('customSettingsFields'),
    ...props
  }))));
}

/***/ }),

/***/ "./editor/blocks/checkbox/index.js":
/*!*****************************************!*\
  !*** ./editor/blocks/checkbox/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _shared_blocks_checkbox_block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/blocks/checkbox/edit.js");
/* harmony import */ var _shared_blocks_checkbox_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/blocks/checkbox/block.json */ "../../shared/blocks/checkbox/block.json");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.pcss */ "./editor/blocks/checkbox/index.pcss");




const {
  __
} = wp.i18n;
const {
  createBlock
} = wp.blocks;
const {
  name,
  icon
} = _shared_blocks_checkbox_block_json__WEBPACK_IMPORTED_MODULE_2__;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */
const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  description: __(`Make a list of options for the users to choose several variants 
with a multi-optional field. Allow to pick as many variants as the visitor needs.`, 'jet-form-builder'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  useEditProps: ['uniqKey', 'blockName', 'attrHelp'],
  example: {
    attributes: {
      isPreview: true
    }
  },
  transforms: {
    to: [{
      type: 'block',
      blocks: ['jet-forms/text-field'],
      transform: attributes => {
        return createBlock('jet-forms/text-field', {
          ...attributes
        });
      },
      priority: 0
    }],
    from: [{
      type: 'block',
      blocks: ['jet-forms/radio-field', 'jet-forms/select-field', 'jet-forms/text-field'],
      transform: attributes => {
        attributes.custom_option = !!attributes.custom_option?.allow;
        return createBlock(name, {
          ...attributes
        });
      },
      priority: 0
    }]
  }
};


/***/ }),

/***/ "./editor/blocks/checkbox/index.pcss":
/*!*******************************************!*\
  !*** ./editor/blocks/checkbox/index.pcss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./editor/blocks/checkbox/preview.js":
/*!*******************************************!*\
  !*** ./editor/blocks/checkbox/preview.js ***!
  \*******************************************/
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
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22.1641 50.835H23.4766C23.4082 51.4639 23.2282 52.0267 22.9365 52.5234C22.6449 53.0202 22.2324 53.4144 21.6992 53.7061C21.166 53.9932 20.5007 54.1367 19.7031 54.1367C19.1198 54.1367 18.5889 54.0273 18.1104 53.8086C17.6364 53.5898 17.2285 53.2799 16.8867 52.8789C16.5449 52.4733 16.2806 51.988 16.0938 51.4229C15.9115 50.8532 15.8203 50.2197 15.8203 49.5225V48.5312C15.8203 47.834 15.9115 47.2028 16.0938 46.6377C16.2806 46.068 16.5472 45.5804 16.8936 45.1748C17.2445 44.7692 17.666 44.457 18.1582 44.2383C18.6504 44.0195 19.2041 43.9102 19.8193 43.9102C20.5713 43.9102 21.207 44.0514 21.7266 44.334C22.2461 44.6165 22.6494 45.0085 22.9365 45.5098C23.2282 46.0065 23.4082 46.583 23.4766 47.2393H22.1641C22.1003 46.7744 21.9818 46.3757 21.8086 46.043C21.6354 45.7057 21.3893 45.446 21.0703 45.2637C20.7513 45.0814 20.3343 44.9902 19.8193 44.9902C19.3773 44.9902 18.9876 45.0745 18.6504 45.2432C18.3177 45.4118 18.0374 45.651 17.8096 45.9609C17.5863 46.2708 17.4176 46.6423 17.3037 47.0752C17.1898 47.5081 17.1328 47.9889 17.1328 48.5176V49.5225C17.1328 50.0101 17.1829 50.4681 17.2832 50.8965C17.388 51.3249 17.5452 51.7008 17.7549 52.0244C17.9645 52.348 18.2311 52.6032 18.5547 52.79C18.8783 52.9723 19.2611 53.0635 19.7031 53.0635C20.2637 53.0635 20.7103 52.9746 21.043 52.7969C21.3757 52.6191 21.6263 52.3639 21.7949 52.0312C21.9681 51.6986 22.0911 51.2998 22.1641 50.835ZM26.3477 43.5V54H25.083V43.5H26.3477ZM26.0469 50.0215L25.5205 50.001C25.5251 49.4951 25.6003 49.028 25.7461 48.5996C25.8919 48.1667 26.097 47.7907 26.3613 47.4717C26.6257 47.1527 26.9401 46.9066 27.3047 46.7334C27.6738 46.5557 28.0817 46.4668 28.5283 46.4668C28.8929 46.4668 29.221 46.5169 29.5127 46.6172C29.8044 46.7129 30.0527 46.8678 30.2578 47.082C30.4674 47.2962 30.627 47.5742 30.7363 47.916C30.8457 48.2533 30.9004 48.6657 30.9004 49.1533V54H29.6289V49.1396C29.6289 48.7523 29.5719 48.4424 29.458 48.21C29.3441 47.973 29.1777 47.8021 28.959 47.6973C28.7402 47.5879 28.4714 47.5332 28.1523 47.5332C27.8379 47.5332 27.5508 47.5993 27.291 47.7314C27.0358 47.8636 26.8148 48.0459 26.6279 48.2783C26.4456 48.5107 26.3021 48.7773 26.1973 49.0781C26.097 49.3743 26.0469 49.6888 26.0469 50.0215ZM32.459 50.3838V50.2266C32.459 49.6934 32.5365 49.1989 32.6914 48.7432C32.8464 48.2829 33.0697 47.8841 33.3613 47.5469C33.653 47.2051 34.0062 46.9408 34.4209 46.7539C34.8356 46.5625 35.3005 46.4668 35.8154 46.4668C36.335 46.4668 36.8021 46.5625 37.2168 46.7539C37.6361 46.9408 37.9915 47.2051 38.2832 47.5469C38.5794 47.8841 38.805 48.2829 38.96 48.7432C39.1149 49.1989 39.1924 49.6934 39.1924 50.2266V50.3838C39.1924 50.917 39.1149 51.4115 38.96 51.8672C38.805 52.3229 38.5794 52.7217 38.2832 53.0635C37.9915 53.4007 37.6383 53.665 37.2236 53.8564C36.8135 54.0433 36.3486 54.1367 35.8291 54.1367C35.3096 54.1367 34.8424 54.0433 34.4277 53.8564C34.013 53.665 33.6576 53.4007 33.3613 53.0635C33.0697 52.7217 32.8464 52.3229 32.6914 51.8672C32.5365 51.4115 32.459 50.917 32.459 50.3838ZM33.7236 50.2266V50.3838C33.7236 50.7529 33.7669 51.1016 33.8535 51.4297C33.9401 51.7533 34.07 52.0404 34.2432 52.291C34.4209 52.5417 34.6419 52.7399 34.9062 52.8857C35.1706 53.027 35.4782 53.0977 35.8291 53.0977C36.1755 53.0977 36.4785 53.027 36.7383 52.8857C37.0026 52.7399 37.2214 52.5417 37.3945 52.291C37.5677 52.0404 37.6976 51.7533 37.7842 51.4297C37.8753 51.1016 37.9209 50.7529 37.9209 50.3838V50.2266C37.9209 49.862 37.8753 49.5179 37.7842 49.1943C37.6976 48.8662 37.5654 48.5768 37.3877 48.3262C37.2145 48.071 36.9958 47.8704 36.7314 47.7246C36.4717 47.5788 36.1663 47.5059 35.8154 47.5059C35.4691 47.5059 35.1637 47.5788 34.8994 47.7246C34.6396 47.8704 34.4209 48.071 34.2432 48.3262C34.07 48.5768 33.9401 48.8662 33.8535 49.1943C33.7669 49.5179 33.7236 49.862 33.7236 50.2266ZM40.4434 50.3838V50.2266C40.4434 49.6934 40.5208 49.1989 40.6758 48.7432C40.8307 48.2829 41.054 47.8841 41.3457 47.5469C41.6374 47.2051 41.9906 46.9408 42.4053 46.7539C42.82 46.5625 43.2848 46.4668 43.7998 46.4668C44.3193 46.4668 44.7865 46.5625 45.2012 46.7539C45.6204 46.9408 45.9759 47.2051 46.2676 47.5469C46.5638 47.8841 46.7894 48.2829 46.9443 48.7432C47.0993 49.1989 47.1768 49.6934 47.1768 50.2266V50.3838C47.1768 50.917 47.0993 51.4115 46.9443 51.8672C46.7894 52.3229 46.5638 52.7217 46.2676 53.0635C45.9759 53.4007 45.6227 53.665 45.208 53.8564C44.7979 54.0433 44.333 54.1367 43.8135 54.1367C43.2939 54.1367 42.8268 54.0433 42.4121 53.8564C41.9974 53.665 41.6419 53.4007 41.3457 53.0635C41.054 52.7217 40.8307 52.3229 40.6758 51.8672C40.5208 51.4115 40.4434 50.917 40.4434 50.3838ZM41.708 50.2266V50.3838C41.708 50.7529 41.7513 51.1016 41.8379 51.4297C41.9245 51.7533 42.0544 52.0404 42.2275 52.291C42.4053 52.5417 42.6263 52.7399 42.8906 52.8857C43.1549 53.027 43.4626 53.0977 43.8135 53.0977C44.1598 53.0977 44.4629 53.027 44.7227 52.8857C44.987 52.7399 45.2057 52.5417 45.3789 52.291C45.5521 52.0404 45.682 51.7533 45.7686 51.4297C45.8597 51.1016 45.9053 50.7529 45.9053 50.3838V50.2266C45.9053 49.862 45.8597 49.5179 45.7686 49.1943C45.682 48.8662 45.5498 48.5768 45.3721 48.3262C45.1989 48.071 44.9801 47.8704 44.7158 47.7246C44.4561 47.5788 44.1507 47.5059 43.7998 47.5059C43.4535 47.5059 43.1481 47.5788 42.8838 47.7246C42.624 47.8704 42.4053 48.071 42.2275 48.3262C42.0544 48.5768 41.9245 48.8662 41.8379 49.1943C41.7513 49.5179 41.708 49.862 41.708 50.2266ZM53.0693 52.0381C53.0693 51.8558 53.0283 51.6872 52.9463 51.5322C52.8688 51.3727 52.707 51.2292 52.4609 51.1016C52.2194 50.9694 51.8548 50.8555 51.3672 50.7598C50.957 50.6732 50.5856 50.5706 50.2529 50.4521C49.9248 50.3337 49.6445 50.1901 49.4121 50.0215C49.1842 49.8529 49.0088 49.6546 48.8857 49.4268C48.7627 49.1989 48.7012 48.9323 48.7012 48.627C48.7012 48.3353 48.765 48.0596 48.8926 47.7998C49.0247 47.54 49.2093 47.3099 49.4463 47.1094C49.6878 46.9089 49.9772 46.7516 50.3145 46.6377C50.6517 46.5238 51.0277 46.4668 51.4424 46.4668C52.0348 46.4668 52.5407 46.5716 52.96 46.7812C53.3792 46.9909 53.7005 47.2712 53.9238 47.6221C54.1471 47.9684 54.2588 48.3535 54.2588 48.7773H52.9941C52.9941 48.5723 52.9326 48.374 52.8096 48.1826C52.6911 47.9867 52.5156 47.8249 52.2832 47.6973C52.0553 47.5697 51.7751 47.5059 51.4424 47.5059C51.0915 47.5059 50.8066 47.5605 50.5879 47.6699C50.3737 47.7747 50.2165 47.9092 50.1162 48.0732C50.0205 48.2373 49.9727 48.4105 49.9727 48.5928C49.9727 48.7295 49.9954 48.8525 50.041 48.9619C50.0911 49.0667 50.1777 49.1647 50.3008 49.2559C50.4238 49.3424 50.597 49.4245 50.8203 49.502C51.0436 49.5794 51.3285 49.6569 51.6748 49.7344C52.2809 49.8711 52.7799 50.0352 53.1719 50.2266C53.5638 50.418 53.8555 50.6527 54.0469 50.9307C54.2383 51.2087 54.334 51.5459 54.334 51.9424C54.334 52.266 54.2656 52.5622 54.1289 52.8311C53.9967 53.0999 53.8031 53.3324 53.5479 53.5283C53.2972 53.7197 52.9964 53.8701 52.6455 53.9795C52.2992 54.0843 51.9095 54.1367 51.4766 54.1367C50.8249 54.1367 50.2734 54.0205 49.8223 53.7881C49.3711 53.5557 49.0293 53.2549 48.7969 52.8857C48.5645 52.5166 48.4482 52.127 48.4482 51.7168H49.7197C49.738 52.0632 49.8382 52.3389 50.0205 52.5439C50.2028 52.7445 50.4261 52.888 50.6904 52.9746C50.9548 53.0566 51.2168 53.0977 51.4766 53.0977C51.8229 53.0977 52.1123 53.0521 52.3447 52.9609C52.5817 52.8698 52.7617 52.7445 52.8848 52.585C53.0078 52.4255 53.0693 52.2432 53.0693 52.0381ZM59.0645 54.1367C58.5495 54.1367 58.0824 54.0501 57.6631 53.877C57.2484 53.6992 56.8906 53.4508 56.5898 53.1318C56.2936 52.8128 56.0658 52.4346 55.9062 51.9971C55.7467 51.5596 55.667 51.0811 55.667 50.5615V50.2744C55.667 49.6729 55.7559 49.1374 55.9336 48.668C56.1113 48.194 56.3529 47.793 56.6582 47.4648C56.9635 47.1367 57.3099 46.8883 57.6973 46.7197C58.0846 46.5511 58.4857 46.4668 58.9004 46.4668C59.429 46.4668 59.8848 46.5579 60.2676 46.7402C60.6549 46.9225 60.9717 47.1777 61.2178 47.5059C61.4639 47.8294 61.6462 48.2122 61.7646 48.6543C61.8831 49.0918 61.9424 49.5703 61.9424 50.0898V50.6572H56.4189V49.625H60.6777V49.5293C60.6595 49.2012 60.5911 48.8822 60.4727 48.5723C60.3587 48.2624 60.1764 48.0072 59.9258 47.8066C59.6751 47.6061 59.3333 47.5059 58.9004 47.5059C58.6133 47.5059 58.349 47.5674 58.1074 47.6904C57.8659 47.8089 57.6585 47.9867 57.4854 48.2236C57.3122 48.4606 57.1777 48.75 57.082 49.0918C56.9863 49.4336 56.9385 49.8278 56.9385 50.2744V50.5615C56.9385 50.9124 56.9863 51.2428 57.082 51.5527C57.1823 51.8581 57.3258 52.127 57.5127 52.3594C57.7041 52.5918 57.9342 52.7741 58.2031 52.9062C58.4766 53.0384 58.7865 53.1045 59.1328 53.1045C59.5794 53.1045 59.9577 53.0133 60.2676 52.8311C60.5775 52.6488 60.8486 52.4049 61.0811 52.0996L61.8467 52.708C61.6872 52.9495 61.4844 53.1797 61.2383 53.3984C60.9922 53.6172 60.6891 53.7949 60.3291 53.9316C59.9736 54.0684 59.5521 54.1367 59.0645 54.1367ZM72.3877 51.4844C72.3877 51.252 72.3512 51.0469 72.2783 50.8691C72.21 50.6868 72.0869 50.5228 71.9092 50.377C71.736 50.2311 71.4945 50.0921 71.1846 49.96C70.8792 49.8278 70.4919 49.6934 70.0225 49.5566C69.5303 49.4108 69.0859 49.249 68.6895 49.0713C68.293 48.889 67.9535 48.6816 67.6709 48.4492C67.3883 48.2168 67.1719 47.9502 67.0215 47.6494C66.8711 47.3486 66.7959 47.0046 66.7959 46.6172C66.7959 46.2298 66.8757 45.8721 67.0352 45.5439C67.1947 45.2158 67.4225 44.931 67.7188 44.6895C68.0195 44.4434 68.3773 44.252 68.792 44.1152C69.2067 43.9785 69.6693 43.9102 70.1797 43.9102C70.9271 43.9102 71.5605 44.0537 72.0801 44.3408C72.6042 44.6234 73.0029 44.9948 73.2764 45.4551C73.5498 45.9108 73.6865 46.3984 73.6865 46.918H72.374C72.374 46.5443 72.2943 46.2139 72.1348 45.9268C71.9753 45.6351 71.7337 45.4072 71.4102 45.2432C71.0866 45.0745 70.6764 44.9902 70.1797 44.9902C69.7103 44.9902 69.3229 45.0609 69.0176 45.2021C68.7122 45.3434 68.4844 45.5348 68.334 45.7764C68.1882 46.0179 68.1152 46.2936 68.1152 46.6035C68.1152 46.8132 68.1585 47.0046 68.2451 47.1777C68.3363 47.3464 68.4753 47.5036 68.6621 47.6494C68.8535 47.7952 69.0951 47.9297 69.3867 48.0527C69.6829 48.1758 70.0361 48.2943 70.4463 48.4082C71.0114 48.5677 71.499 48.7454 71.9092 48.9414C72.3193 49.1374 72.6566 49.3584 72.9209 49.6045C73.1898 49.846 73.388 50.1217 73.5156 50.4316C73.6478 50.737 73.7139 51.0833 73.7139 51.4707C73.7139 51.8763 73.6318 52.2432 73.4678 52.5713C73.3037 52.8994 73.069 53.1797 72.7637 53.4121C72.4583 53.6445 72.0915 53.8245 71.6631 53.9521C71.2393 54.0752 70.7653 54.1367 70.2412 54.1367C69.7809 54.1367 69.3275 54.0729 68.8809 53.9453C68.4388 53.8177 68.0355 53.6263 67.6709 53.3711C67.3109 53.1159 67.0215 52.8014 66.8027 52.4277C66.5885 52.0495 66.4814 51.612 66.4814 51.1152H67.7939C67.7939 51.457 67.86 51.751 67.9922 51.9971C68.1243 52.2386 68.3044 52.4391 68.5322 52.5986C68.7646 52.7581 69.0267 52.8766 69.3184 52.9541C69.6146 53.027 69.9222 53.0635 70.2412 53.0635C70.7015 53.0635 71.0911 52.9997 71.4102 52.8721C71.7292 52.7445 71.9707 52.5622 72.1348 52.3252C72.3034 52.0882 72.3877 51.8079 72.3877 51.4844ZM78.2734 54.1367C77.7585 54.1367 77.2913 54.0501 76.8721 53.877C76.4574 53.6992 76.0996 53.4508 75.7988 53.1318C75.5026 52.8128 75.2747 52.4346 75.1152 51.9971C74.9557 51.5596 74.876 51.0811 74.876 50.5615V50.2744C74.876 49.6729 74.9648 49.1374 75.1426 48.668C75.3203 48.194 75.5618 47.793 75.8672 47.4648C76.1725 47.1367 76.5189 46.8883 76.9062 46.7197C77.2936 46.5511 77.6947 46.4668 78.1094 46.4668C78.638 46.4668 79.0938 46.5579 79.4766 46.7402C79.8639 46.9225 80.1807 47.1777 80.4268 47.5059C80.6729 47.8294 80.8551 48.2122 80.9736 48.6543C81.0921 49.0918 81.1514 49.5703 81.1514 50.0898V50.6572H75.6279V49.625H79.8867V49.5293C79.8685 49.2012 79.8001 48.8822 79.6816 48.5723C79.5677 48.2624 79.3854 48.0072 79.1348 47.8066C78.8841 47.6061 78.5423 47.5059 78.1094 47.5059C77.8223 47.5059 77.5579 47.5674 77.3164 47.6904C77.0749 47.8089 76.8675 47.9867 76.6943 48.2236C76.5212 48.4606 76.3867 48.75 76.291 49.0918C76.1953 49.4336 76.1475 49.8278 76.1475 50.2744V50.5615C76.1475 50.9124 76.1953 51.2428 76.291 51.5527C76.3913 51.8581 76.5348 52.127 76.7217 52.3594C76.9131 52.5918 77.1432 52.7741 77.4121 52.9062C77.6855 53.0384 77.9954 53.1045 78.3418 53.1045C78.7884 53.1045 79.1667 53.0133 79.4766 52.8311C79.7865 52.6488 80.0576 52.4049 80.29 52.0996L81.0557 52.708C80.8962 52.9495 80.6934 53.1797 80.4473 53.3984C80.2012 53.6172 79.8981 53.7949 79.5381 53.9316C79.1826 54.0684 78.7611 54.1367 78.2734 54.1367ZM83.8926 47.7656V54H82.6279V46.6035H83.8584L83.8926 47.7656ZM86.2031 46.5625L86.1963 47.7383C86.0915 47.7155 85.9912 47.7018 85.8955 47.6973C85.8044 47.6882 85.6995 47.6836 85.5811 47.6836C85.2894 47.6836 85.0319 47.7292 84.8086 47.8203C84.5853 47.9115 84.3962 48.0391 84.2412 48.2031C84.0863 48.3672 83.9632 48.5632 83.8721 48.791C83.7855 49.0143 83.7285 49.2604 83.7012 49.5293L83.3457 49.7344C83.3457 49.2878 83.389 48.8685 83.4756 48.4766C83.5667 48.0846 83.7057 47.7383 83.8926 47.4375C84.0794 47.1322 84.3164 46.8952 84.6035 46.7266C84.8952 46.5534 85.2415 46.4668 85.6426 46.4668C85.7337 46.4668 85.8385 46.4782 85.957 46.501C86.0755 46.5192 86.1576 46.5397 86.2031 46.5625ZM89.7441 52.8584L91.7676 46.6035H93.0596L90.4004 54H89.5527L89.7441 52.8584ZM88.0557 46.6035L90.1406 52.8926L90.2842 54H89.4365L86.7568 46.6035H88.0557ZM95.6504 46.6035V54H94.3789V46.6035H95.6504ZM94.2832 44.6416C94.2832 44.4365 94.3447 44.2633 94.4678 44.1221C94.5954 43.9808 94.7822 43.9102 95.0283 43.9102C95.2699 43.9102 95.4544 43.9808 95.582 44.1221C95.7142 44.2633 95.7803 44.4365 95.7803 44.6416C95.7803 44.8376 95.7142 45.0062 95.582 45.1475C95.4544 45.2842 95.2699 45.3525 95.0283 45.3525C94.7822 45.3525 94.5954 45.2842 94.4678 45.1475C94.3447 45.0062 94.2832 44.8376 94.2832 44.6416ZM100.641 53.0977C100.941 53.0977 101.219 53.0361 101.475 52.9131C101.73 52.79 101.939 52.6214 102.104 52.4072C102.268 52.1885 102.361 51.9401 102.384 51.6621H103.587C103.564 52.0996 103.416 52.5075 103.143 52.8857C102.874 53.2594 102.521 53.5625 102.083 53.7949C101.646 54.0228 101.165 54.1367 100.641 54.1367C100.085 54.1367 99.5993 54.0387 99.1846 53.8428C98.7744 53.6468 98.4326 53.3779 98.1592 53.0361C97.8903 52.6943 97.6875 52.3024 97.5508 51.8604C97.4186 51.4137 97.3525 50.9421 97.3525 50.4453V50.1582C97.3525 49.6615 97.4186 49.1921 97.5508 48.75C97.6875 48.3034 97.8903 47.9092 98.1592 47.5674C98.4326 47.2256 98.7744 46.9567 99.1846 46.7607C99.5993 46.5648 100.085 46.4668 100.641 46.4668C101.219 46.4668 101.725 46.5853 102.158 46.8223C102.591 47.0547 102.931 47.3737 103.177 47.7793C103.427 48.1803 103.564 48.6361 103.587 49.1465H102.384C102.361 48.8411 102.274 48.5654 102.124 48.3193C101.978 48.0732 101.778 47.8773 101.522 47.7314C101.272 47.5811 100.978 47.5059 100.641 47.5059C100.253 47.5059 99.9274 47.5833 99.6631 47.7383C99.4033 47.8887 99.196 48.0938 99.041 48.3535C98.8906 48.6087 98.7812 48.8936 98.7129 49.208C98.6491 49.5179 98.6172 49.8346 98.6172 50.1582V50.4453C98.6172 50.7689 98.6491 51.0879 98.7129 51.4023C98.7767 51.7168 98.8838 52.0016 99.0342 52.2568C99.1891 52.512 99.3965 52.7171 99.6562 52.8721C99.9206 53.0225 100.249 53.0977 100.641 53.0977ZM108.078 54.1367C107.563 54.1367 107.096 54.0501 106.677 53.877C106.262 53.6992 105.904 53.4508 105.604 53.1318C105.307 52.8128 105.079 52.4346 104.92 51.9971C104.76 51.5596 104.681 51.0811 104.681 50.5615V50.2744C104.681 49.6729 104.77 49.1374 104.947 48.668C105.125 48.194 105.367 47.793 105.672 47.4648C105.977 47.1367 106.324 46.8883 106.711 46.7197C107.098 46.5511 107.499 46.4668 107.914 46.4668C108.443 46.4668 108.898 46.5579 109.281 46.7402C109.669 46.9225 109.985 47.1777 110.231 47.5059C110.478 47.8294 110.66 48.2122 110.778 48.6543C110.897 49.0918 110.956 49.5703 110.956 50.0898V50.6572H105.433V49.625H109.691V49.5293C109.673 49.2012 109.605 48.8822 109.486 48.5723C109.372 48.2624 109.19 48.0072 108.939 47.8066C108.689 47.6061 108.347 47.5059 107.914 47.5059C107.627 47.5059 107.363 47.5674 107.121 47.6904C106.88 47.8089 106.672 47.9867 106.499 48.2236C106.326 48.4606 106.191 48.75 106.096 49.0918C106 49.4336 105.952 49.8278 105.952 50.2744V50.5615C105.952 50.9124 106 51.2428 106.096 51.5527C106.196 51.8581 106.34 52.127 106.526 52.3594C106.718 52.5918 106.948 52.7741 107.217 52.9062C107.49 53.0384 107.8 53.1045 108.146 53.1045C108.593 53.1045 108.971 53.0133 109.281 52.8311C109.591 52.6488 109.862 52.4049 110.095 52.0996L110.86 52.708C110.701 52.9495 110.498 53.1797 110.252 53.3984C110.006 53.6172 109.703 53.7949 109.343 53.9316C108.987 54.0684 108.566 54.1367 108.078 54.1367Z",
  fill: "#64748B"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M29.25 65.75V76.25H18.75V65.75H29.25ZM29.25 64.25H18.75C17.925 64.25 17.25 64.925 17.25 65.75V76.25C17.25 77.075 17.925 77.75 18.75 77.75H29.25C30.075 77.75 30.75 77.075 30.75 76.25V65.75C30.75 64.925 30.075 64.25 29.25 64.25Z",
  fill: "#64748B"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M39.5039 72.707L41.3384 66.2578H42.2271L41.7129 68.7651L39.7388 75.5H38.8564L39.5039 72.707ZM37.606 66.2578L39.0659 72.5801L39.5039 75.5H38.6279L36.3872 66.2578H37.606ZM44.6011 72.5737L46.0293 66.2578H47.2544L45.02 75.5H44.144L44.6011 72.5737ZM42.3604 66.2578L44.144 72.707L44.7915 75.5H43.9092L42.0049 68.7651L41.4844 66.2578H42.3604ZM51.082 75.627C50.6038 75.627 50.1701 75.5465 49.7808 75.3857C49.3957 75.2207 49.0635 74.9901 48.7842 74.6938C48.5091 74.3976 48.2975 74.0464 48.1494 73.6401C48.0013 73.2339 47.9272 72.7896 47.9272 72.3071V72.0405C47.9272 71.4819 48.0098 70.9847 48.1748 70.5488C48.3398 70.1087 48.5641 69.7363 48.8477 69.4316C49.1312 69.127 49.4528 68.8963 49.8125 68.7397C50.1722 68.5832 50.5446 68.5049 50.9297 68.5049C51.4206 68.5049 51.8438 68.5895 52.1992 68.7588C52.5589 68.9281 52.853 69.165 53.0815 69.4697C53.3101 69.7702 53.4793 70.1257 53.5894 70.5361C53.6994 70.9424 53.7544 71.3867 53.7544 71.8691V72.396H48.6255V71.4375H52.5801V71.3486C52.5632 71.0439 52.4997 70.7477 52.3896 70.46C52.2839 70.1722 52.1146 69.9352 51.8818 69.749C51.6491 69.5628 51.3317 69.4697 50.9297 69.4697C50.6631 69.4697 50.4176 69.5269 50.1934 69.6411C49.9691 69.7511 49.7765 69.9162 49.6157 70.1362C49.4549 70.3563 49.3301 70.625 49.2412 70.9424C49.1523 71.2598 49.1079 71.6258 49.1079 72.0405V72.3071C49.1079 72.633 49.1523 72.9398 49.2412 73.2275C49.3343 73.5111 49.4676 73.7607 49.6411 73.9766C49.8188 74.1924 50.0326 74.3617 50.2822 74.4844C50.5361 74.6071 50.8239 74.6685 51.1455 74.6685C51.5602 74.6685 51.9115 74.5838 52.1992 74.4146C52.487 74.2453 52.7388 74.0189 52.9546 73.7354L53.6655 74.3003C53.5174 74.5246 53.3291 74.7383 53.1006 74.9414C52.8721 75.1445 52.5907 75.3096 52.2563 75.4365C51.9263 75.5635 51.5348 75.627 51.082 75.627ZM56.4014 65.75V75.5H55.2207V65.75H56.4014ZM59.5625 65.75V75.5H58.3818V65.75H59.5625ZM62.6221 70.0981V75.5H61.4478V68.6318H62.5586L62.6221 70.0981ZM62.3428 71.8057L61.854 71.7866C61.8582 71.3169 61.9281 70.8831 62.0635 70.4854C62.1989 70.0833 62.3893 69.7342 62.6348 69.438C62.8802 69.1418 63.1722 68.9132 63.5107 68.7524C63.8535 68.5874 64.2323 68.5049 64.647 68.5049C64.9855 68.5049 65.2902 68.5514 65.561 68.6445C65.8319 68.7334 66.0625 68.8773 66.2529 69.0762C66.4476 69.2751 66.5957 69.5332 66.6973 69.8506C66.7988 70.1637 66.8496 70.5467 66.8496 70.9995V75.5H65.6689V70.9868C65.6689 70.6271 65.616 70.3394 65.5103 70.1235C65.4045 69.9035 65.25 69.7448 65.0469 69.6475C64.8438 69.5459 64.5941 69.4951 64.2979 69.4951C64.0059 69.4951 63.7393 69.5565 63.498 69.6792C63.2611 69.8019 63.0558 69.9712 62.8823 70.187C62.7131 70.4028 62.5798 70.6504 62.4824 70.9297C62.3893 71.2048 62.3428 71.4967 62.3428 71.8057ZM71.4834 75.627C71.0052 75.627 70.5715 75.5465 70.1821 75.3857C69.797 75.2207 69.4648 74.9901 69.1855 74.6938C68.9105 74.3976 68.6989 74.0464 68.5508 73.6401C68.4027 73.2339 68.3286 72.7896 68.3286 72.3071V72.0405C68.3286 71.4819 68.4111 70.9847 68.5762 70.5488C68.7412 70.1087 68.9655 69.7363 69.249 69.4316C69.5326 69.127 69.8542 68.8963 70.2139 68.7397C70.5736 68.5832 70.946 68.5049 71.3311 68.5049C71.8219 68.5049 72.2451 68.5895 72.6006 68.7588C72.9603 68.9281 73.2544 69.165 73.4829 69.4697C73.7114 69.7702 73.8807 70.1257 73.9907 70.5361C74.1007 70.9424 74.1558 71.3867 74.1558 71.8691V72.396H69.0269V71.4375H72.9814V71.3486C72.9645 71.0439 72.901 70.7477 72.791 70.46C72.6852 70.1722 72.516 69.9352 72.2832 69.749C72.0505 69.5628 71.7331 69.4697 71.3311 69.4697C71.0645 69.4697 70.819 69.5269 70.5947 69.6411C70.3704 69.7511 70.1779 69.9162 70.0171 70.1362C69.8563 70.3563 69.7314 70.625 69.6426 70.9424C69.5537 71.2598 69.5093 71.6258 69.5093 72.0405V72.3071C69.5093 72.633 69.5537 72.9398 69.6426 73.2275C69.7357 73.5111 69.869 73.7607 70.0425 73.9766C70.2202 74.1924 70.4339 74.3617 70.6836 74.4844C70.9375 74.6071 71.2253 74.6685 71.5469 74.6685C71.9616 74.6685 72.3128 74.5838 72.6006 74.4146C72.8883 74.2453 73.1401 74.0189 73.356 73.7354L74.0669 74.3003C73.9188 74.5246 73.7305 74.7383 73.502 74.9414C73.2734 75.1445 72.992 75.3096 72.6577 75.4365C72.3276 75.5635 71.9362 75.627 71.4834 75.627ZM79.5259 73.6782C79.5259 73.509 79.4878 73.3524 79.4116 73.2085C79.3397 73.0604 79.1895 72.9271 78.9609 72.8086C78.7367 72.6859 78.3981 72.5801 77.9453 72.4912C77.5645 72.4108 77.2196 72.3156 76.9106 72.2056C76.606 72.0955 76.3457 71.9622 76.1299 71.8057C75.9183 71.6491 75.7554 71.465 75.6411 71.2534C75.5269 71.0418 75.4697 70.7943 75.4697 70.5107C75.4697 70.2399 75.529 69.9839 75.6475 69.7427C75.7702 69.5015 75.9416 69.2878 76.1616 69.1016C76.3859 68.9154 76.6546 68.7694 76.9678 68.6636C77.2809 68.5578 77.63 68.5049 78.0151 68.5049C78.5653 68.5049 79.035 68.6022 79.4243 68.7969C79.8136 68.9915 80.112 69.2518 80.3193 69.5776C80.5267 69.8993 80.6304 70.2568 80.6304 70.6504H79.4561C79.4561 70.46 79.3989 70.2759 79.2847 70.0981C79.1746 69.9162 79.0117 69.766 78.7959 69.6475C78.5843 69.529 78.3241 69.4697 78.0151 69.4697C77.6893 69.4697 77.4248 69.5205 77.2217 69.6221C77.0228 69.7194 76.8768 69.8442 76.7837 69.9966C76.6948 70.1489 76.6504 70.3097 76.6504 70.479C76.6504 70.606 76.6715 70.7202 76.7139 70.8218C76.7604 70.9191 76.8408 71.0101 76.9551 71.0947C77.0693 71.1751 77.2301 71.2513 77.4375 71.3232C77.6449 71.3952 77.9093 71.4671 78.231 71.5391C78.7938 71.666 79.2572 71.8184 79.6211 71.9961C79.985 72.1738 80.2559 72.3918 80.4336 72.6499C80.6113 72.908 80.7002 73.2212 80.7002 73.5894C80.7002 73.8898 80.6367 74.1649 80.5098 74.4146C80.387 74.6642 80.2072 74.88 79.9702 75.062C79.7375 75.2397 79.4582 75.3794 79.1323 75.481C78.8107 75.5783 78.4489 75.627 78.0469 75.627C77.4417 75.627 76.9297 75.519 76.5107 75.3032C76.0918 75.0874 75.7744 74.8081 75.5586 74.4653C75.3428 74.1226 75.2349 73.7607 75.2349 73.3799H76.4155C76.4325 73.7015 76.5256 73.9575 76.6948 74.1479C76.8641 74.3341 77.0715 74.4674 77.3169 74.5479C77.5623 74.624 77.8057 74.6621 78.0469 74.6621C78.3685 74.6621 78.6372 74.6198 78.853 74.5352C79.0731 74.4505 79.2402 74.3341 79.3545 74.186C79.4688 74.0379 79.5259 73.8687 79.5259 73.6782ZM86.2417 73.6782C86.2417 73.509 86.2036 73.3524 86.1274 73.2085C86.0555 73.0604 85.9053 72.9271 85.6768 72.8086C85.4525 72.6859 85.1139 72.5801 84.6611 72.4912C84.2803 72.4108 83.9354 72.3156 83.6265 72.2056C83.3218 72.0955 83.0615 71.9622 82.8457 71.8057C82.6341 71.6491 82.4712 71.465 82.3569 71.2534C82.2427 71.0418 82.1855 70.7943 82.1855 70.5107C82.1855 70.2399 82.2448 69.9839 82.3633 69.7427C82.486 69.5015 82.6574 69.2878 82.8774 69.1016C83.1017 68.9154 83.3704 68.7694 83.6836 68.6636C83.9967 68.5578 84.3459 68.5049 84.731 68.5049C85.2811 68.5049 85.7508 68.6022 86.1401 68.7969C86.5295 68.9915 86.8278 69.2518 87.0352 69.5776C87.2425 69.8993 87.3462 70.2568 87.3462 70.6504H86.1719C86.1719 70.46 86.1147 70.2759 86.0005 70.0981C85.8905 69.9162 85.7275 69.766 85.5117 69.6475C85.3001 69.529 85.0399 69.4697 84.731 69.4697C84.4051 69.4697 84.1406 69.5205 83.9375 69.6221C83.7386 69.7194 83.5926 69.8442 83.4995 69.9966C83.4106 70.1489 83.3662 70.3097 83.3662 70.479C83.3662 70.606 83.3874 70.7202 83.4297 70.8218C83.4762 70.9191 83.5566 71.0101 83.6709 71.0947C83.7852 71.1751 83.946 71.2513 84.1533 71.3232C84.3607 71.3952 84.6252 71.4671 84.9468 71.5391C85.5096 71.666 85.973 71.8184 86.3369 71.9961C86.7008 72.1738 86.9717 72.3918 87.1494 72.6499C87.3271 72.908 87.416 73.2212 87.416 73.5894C87.416 73.8898 87.3525 74.1649 87.2256 74.4146C87.1029 74.6642 86.923 74.88 86.686 75.062C86.4533 75.2397 86.174 75.3794 85.8481 75.481C85.5265 75.5783 85.1647 75.627 84.7627 75.627C84.1576 75.627 83.6455 75.519 83.2266 75.3032C82.8076 75.0874 82.4902 74.8081 82.2744 74.4653C82.0586 74.1226 81.9507 73.7607 81.9507 73.3799H83.1313C83.1483 73.7015 83.2414 73.9575 83.4106 74.1479C83.5799 74.3341 83.7873 74.4674 84.0327 74.5479C84.2782 74.624 84.5215 74.6621 84.7627 74.6621C85.0843 74.6621 85.353 74.6198 85.5688 74.5352C85.7889 74.4505 85.9561 74.3341 86.0703 74.186C86.1846 74.0379 86.2417 73.8687 86.2417 73.6782ZM93.3511 69.9966V75.5H92.1704V68.6318H93.2876L93.3511 69.9966ZM93.1099 71.8057L92.564 71.7866C92.5682 71.3169 92.6296 70.8831 92.748 70.4854C92.8665 70.0833 93.0422 69.7342 93.2749 69.438C93.5076 69.1418 93.7975 68.9132 94.1445 68.7524C94.4915 68.5874 94.8936 68.5049 95.3506 68.5049C95.6722 68.5049 95.9684 68.5514 96.2393 68.6445C96.5101 68.7334 96.745 68.8752 96.9438 69.0698C97.1427 69.2645 97.2972 69.5142 97.4072 69.8188C97.5173 70.1235 97.5723 70.4917 97.5723 70.9233V75.5H96.3979V70.9805C96.3979 70.6208 96.3366 70.333 96.2139 70.1172C96.0954 69.9014 95.9261 69.7448 95.7061 69.6475C95.486 69.5459 95.2279 69.4951 94.9316 69.4951C94.5846 69.4951 94.2948 69.5565 94.062 69.6792C93.8293 69.8019 93.6431 69.9712 93.5034 70.187C93.3638 70.4028 93.2622 70.6504 93.1987 70.9297C93.1395 71.2048 93.1099 71.4967 93.1099 71.8057ZM97.5596 71.1582L96.7725 71.3994C96.7767 71.0228 96.8381 70.661 96.9565 70.314C97.0793 69.967 97.2549 69.658 97.4834 69.3872C97.7161 69.1164 98.0018 68.9027 98.3403 68.7461C98.6789 68.5853 99.0661 68.5049 99.502 68.5049C99.8701 68.5049 100.196 68.5535 100.479 68.6509C100.767 68.7482 101.008 68.8984 101.203 69.1016C101.402 69.3005 101.552 69.5565 101.654 69.8696C101.755 70.1828 101.806 70.5552 101.806 70.9868V75.5H100.625V70.9741C100.625 70.589 100.564 70.2907 100.441 70.0791C100.323 69.8633 100.154 69.7131 99.9336 69.6284C99.7178 69.5396 99.4596 69.4951 99.1592 69.4951C98.901 69.4951 98.6725 69.5396 98.4736 69.6284C98.2747 69.7173 98.1076 69.84 97.9722 69.9966C97.8368 70.1489 97.7331 70.3245 97.6611 70.5234C97.5934 70.7223 97.5596 70.9339 97.5596 71.1582ZM107.633 74.3257V70.79C107.633 70.5192 107.578 70.2843 107.468 70.0854C107.362 69.8823 107.202 69.7257 106.986 69.6157C106.77 69.5057 106.503 69.4507 106.186 69.4507C105.89 69.4507 105.63 69.5015 105.405 69.603C105.185 69.7046 105.012 69.8379 104.885 70.0029C104.762 70.168 104.701 70.3457 104.701 70.5361H103.526C103.526 70.2907 103.59 70.0474 103.717 69.8062C103.844 69.5649 104.026 69.347 104.263 69.1523C104.504 68.9535 104.792 68.7969 105.126 68.6826C105.465 68.5641 105.841 68.5049 106.256 68.5049C106.755 68.5049 107.195 68.5895 107.576 68.7588C107.961 68.9281 108.262 69.1841 108.478 69.5269C108.698 69.8654 108.808 70.2907 108.808 70.8027V74.002C108.808 74.2305 108.827 74.4738 108.865 74.7319C108.907 74.9901 108.968 75.2122 109.049 75.3984V75.5H107.824C107.764 75.3646 107.718 75.1847 107.684 74.9604C107.65 74.7319 107.633 74.5203 107.633 74.3257ZM107.836 71.3359L107.849 72.1611H106.662C106.328 72.1611 106.029 72.1886 105.767 72.2437C105.505 72.2944 105.285 72.3727 105.107 72.4785C104.929 72.5843 104.794 72.7176 104.701 72.8784C104.608 73.035 104.561 73.2191 104.561 73.4307C104.561 73.6465 104.61 73.8433 104.707 74.021C104.804 74.1987 104.95 74.3405 105.145 74.4463C105.344 74.5479 105.587 74.5986 105.875 74.5986C106.235 74.5986 106.552 74.5225 106.827 74.3701C107.102 74.2178 107.32 74.0316 107.481 73.8115C107.646 73.5915 107.735 73.3778 107.748 73.1704L108.249 73.7354C108.219 73.9131 108.139 74.1099 108.008 74.3257C107.877 74.5415 107.701 74.7489 107.481 74.9478C107.265 75.1424 107.007 75.3053 106.707 75.4365C106.41 75.5635 106.076 75.627 105.704 75.627C105.238 75.627 104.83 75.536 104.479 75.354C104.132 75.172 103.861 74.9287 103.666 74.624C103.476 74.3151 103.38 73.9702 103.38 73.5894C103.38 73.2212 103.452 72.8975 103.596 72.6182C103.74 72.3346 103.947 72.0998 104.218 71.9136C104.489 71.7231 104.815 71.5793 105.196 71.4819C105.577 71.3846 106.002 71.3359 106.472 71.3359H107.836ZM114.654 73.6782C114.654 73.509 114.616 73.3524 114.54 73.2085C114.468 73.0604 114.317 72.9271 114.089 72.8086C113.865 72.6859 113.526 72.5801 113.073 72.4912C112.692 72.4108 112.347 72.3156 112.039 72.2056C111.734 72.0955 111.474 71.9622 111.258 71.8057C111.046 71.6491 110.883 71.465 110.769 71.2534C110.655 71.0418 110.598 70.7943 110.598 70.5107C110.598 70.2399 110.657 69.9839 110.775 69.7427C110.898 69.5015 111.069 69.2878 111.29 69.1016C111.514 68.9154 111.783 68.7694 112.096 68.6636C112.409 68.5578 112.758 68.5049 113.143 68.5049C113.693 68.5049 114.163 68.6022 114.552 68.7969C114.942 68.9915 115.24 69.2518 115.447 69.5776C115.655 69.8993 115.758 70.2568 115.758 70.6504H114.584C114.584 70.46 114.527 70.2759 114.413 70.0981C114.303 69.9162 114.14 69.766 113.924 69.6475C113.712 69.529 113.452 69.4697 113.143 69.4697C112.817 69.4697 112.553 69.5205 112.35 69.6221C112.151 69.7194 112.005 69.8442 111.912 69.9966C111.823 70.1489 111.778 70.3097 111.778 70.479C111.778 70.606 111.799 70.7202 111.842 70.8218C111.888 70.9191 111.969 71.0101 112.083 71.0947C112.197 71.1751 112.358 71.2513 112.565 71.3232C112.773 71.3952 113.037 71.4671 113.359 71.5391C113.922 71.666 114.385 71.8184 114.749 71.9961C115.113 72.1738 115.384 72.3918 115.562 72.6499C115.739 72.908 115.828 73.2212 115.828 73.5894C115.828 73.8898 115.765 74.1649 115.638 74.4146C115.515 74.6642 115.335 74.88 115.098 75.062C114.865 75.2397 114.586 75.3794 114.26 75.481C113.939 75.5783 113.577 75.627 113.175 75.627C112.57 75.627 112.058 75.519 111.639 75.3032C111.22 75.0874 110.902 74.8081 110.687 74.4653C110.471 74.1226 110.363 73.7607 110.363 73.3799H111.543C111.56 73.7015 111.653 73.9575 111.823 74.1479C111.992 74.3341 112.199 74.4674 112.445 74.5479C112.69 74.624 112.934 74.6621 113.175 74.6621C113.496 74.6621 113.765 74.6198 113.981 74.5352C114.201 74.4505 114.368 74.3341 114.482 74.186C114.597 74.0379 114.654 73.8687 114.654 73.6782ZM121.37 73.6782C121.37 73.509 121.332 73.3524 121.255 73.2085C121.183 73.0604 121.033 72.9271 120.805 72.8086C120.58 72.6859 120.242 72.5801 119.789 72.4912C119.408 72.4108 119.063 72.3156 118.754 72.2056C118.45 72.0955 118.189 71.9622 117.974 71.8057C117.762 71.6491 117.599 71.465 117.485 71.2534C117.371 71.0418 117.313 70.7943 117.313 70.5107C117.313 70.2399 117.373 69.9839 117.491 69.7427C117.614 69.5015 117.785 69.2878 118.005 69.1016C118.23 68.9154 118.498 68.7694 118.812 68.6636C119.125 68.5578 119.474 68.5049 119.859 68.5049C120.409 68.5049 120.879 68.6022 121.268 68.7969C121.657 68.9915 121.956 69.2518 122.163 69.5776C122.37 69.8993 122.474 70.2568 122.474 70.6504H121.3C121.3 70.46 121.243 70.2759 121.128 70.0981C121.018 69.9162 120.855 69.766 120.64 69.6475C120.428 69.529 120.168 69.4697 119.859 69.4697C119.533 69.4697 119.269 69.5205 119.065 69.6221C118.867 69.7194 118.721 69.8442 118.627 69.9966C118.539 70.1489 118.494 70.3097 118.494 70.479C118.494 70.606 118.515 70.7202 118.558 70.8218C118.604 70.9191 118.685 71.0101 118.799 71.0947C118.913 71.1751 119.074 71.2513 119.281 71.3232C119.489 71.3952 119.753 71.4671 120.075 71.5391C120.638 71.666 121.101 71.8184 121.465 71.9961C121.829 72.1738 122.1 72.3918 122.277 72.6499C122.455 72.908 122.544 73.2212 122.544 73.5894C122.544 73.8898 122.48 74.1649 122.354 74.4146C122.231 74.6642 122.051 74.88 121.814 75.062C121.581 75.2397 121.302 75.3794 120.976 75.481C120.654 75.5783 120.293 75.627 119.891 75.627C119.285 75.627 118.773 75.519 118.354 75.3032C117.936 75.0874 117.618 74.8081 117.402 74.4653C117.187 74.1226 117.079 73.7607 117.079 73.3799H118.259C118.276 73.7015 118.369 73.9575 118.539 74.1479C118.708 74.3341 118.915 74.4674 119.161 74.5479C119.406 74.624 119.649 74.6621 119.891 74.6621C120.212 74.6621 120.481 74.6198 120.697 74.5352C120.917 74.4505 121.084 74.3341 121.198 74.186C121.312 74.0379 121.37 73.8687 121.37 73.6782ZM128.136 74.3257V70.79C128.136 70.5192 128.081 70.2843 127.971 70.0854C127.865 69.8823 127.705 69.7257 127.489 69.6157C127.273 69.5057 127.006 69.4507 126.689 69.4507C126.393 69.4507 126.132 69.5015 125.908 69.603C125.688 69.7046 125.515 69.8379 125.388 70.0029C125.265 70.168 125.204 70.3457 125.204 70.5361H124.029C124.029 70.2907 124.093 70.0474 124.22 69.8062C124.347 69.5649 124.529 69.347 124.766 69.1523C125.007 68.9535 125.295 68.7969 125.629 68.6826C125.967 68.5641 126.344 68.5049 126.759 68.5049C127.258 68.5049 127.698 68.5895 128.079 68.7588C128.464 68.9281 128.765 69.1841 128.98 69.5269C129.201 69.8654 129.311 70.2907 129.311 70.8027V74.002C129.311 74.2305 129.33 74.4738 129.368 74.7319C129.41 74.9901 129.471 75.2122 129.552 75.3984V75.5H128.327C128.267 75.3646 128.221 75.1847 128.187 74.9604C128.153 74.7319 128.136 74.5203 128.136 74.3257ZM128.339 71.3359L128.352 72.1611H127.165C126.831 72.1611 126.532 72.1886 126.27 72.2437C126.008 72.2944 125.788 72.3727 125.61 72.4785C125.432 72.5843 125.297 72.7176 125.204 72.8784C125.111 73.035 125.064 73.2191 125.064 73.4307C125.064 73.6465 125.113 73.8433 125.21 74.021C125.307 74.1987 125.453 74.3405 125.648 74.4463C125.847 74.5479 126.09 74.5986 126.378 74.5986C126.738 74.5986 127.055 74.5225 127.33 74.3701C127.605 74.2178 127.823 74.0316 127.984 73.8115C128.149 73.5915 128.238 73.3778 128.25 73.1704L128.752 73.7354C128.722 73.9131 128.642 74.1099 128.511 74.3257C128.38 74.5415 128.204 74.7489 127.984 74.9478C127.768 75.1424 127.51 75.3053 127.209 75.4365C126.913 75.5635 126.579 75.627 126.207 75.627C125.741 75.627 125.333 75.536 124.981 75.354C124.634 75.172 124.364 74.9287 124.169 74.624C123.979 74.3151 123.883 73.9702 123.883 73.5894C123.883 73.2212 123.955 72.8975 124.099 72.6182C124.243 72.3346 124.45 72.0998 124.721 71.9136C124.992 71.7231 125.318 71.5793 125.699 71.4819C126.08 71.3846 126.505 71.3359 126.975 71.3359H128.339ZM135.607 68.6318H136.674V75.354C136.674 75.9591 136.551 76.4754 136.306 76.9028C136.06 77.3302 135.717 77.654 135.277 77.874C134.841 78.0983 134.338 78.2104 133.767 78.2104C133.53 78.2104 133.25 78.1724 132.929 78.0962C132.611 78.0243 132.298 77.8994 131.989 77.7217C131.685 77.5482 131.429 77.3133 131.221 77.0171L131.837 76.3188C132.125 76.6659 132.425 76.9071 132.738 77.0425C133.056 77.1779 133.369 77.2456 133.678 77.2456C134.05 77.2456 134.372 77.1758 134.643 77.0361C134.913 76.8965 135.123 76.6891 135.271 76.4141C135.423 76.1432 135.5 75.8089 135.5 75.4111V70.1426L135.607 68.6318ZM130.878 72.1421V72.0088C130.878 71.484 130.94 71.008 131.062 70.5806C131.189 70.1489 131.369 69.7786 131.602 69.4697C131.839 69.1608 132.125 68.9238 132.459 68.7588C132.793 68.5895 133.17 68.5049 133.589 68.5049C134.021 68.5049 134.397 68.5811 134.719 68.7334C135.045 68.8815 135.32 69.0994 135.544 69.3872C135.772 69.6707 135.952 70.0135 136.083 70.4155C136.215 70.8175 136.306 71.2725 136.356 71.7803V72.3643C136.31 72.8678 136.219 73.3206 136.083 73.7227C135.952 74.1247 135.772 74.4674 135.544 74.751C135.32 75.0345 135.045 75.2524 134.719 75.4048C134.393 75.5529 134.012 75.627 133.576 75.627C133.166 75.627 132.793 75.5402 132.459 75.3667C132.129 75.1932 131.845 74.9499 131.608 74.6367C131.371 74.3236 131.189 73.9554 131.062 73.5322C130.94 73.1048 130.878 72.6414 130.878 72.1421ZM132.053 72.0088V72.1421C132.053 72.4849 132.087 72.8065 132.154 73.1069C132.226 73.4074 132.334 73.6719 132.478 73.9004C132.626 74.1289 132.814 74.3088 133.043 74.4399C133.271 74.5669 133.544 74.6304 133.862 74.6304C134.251 74.6304 134.573 74.5479 134.827 74.3828C135.081 74.2178 135.282 73.9998 135.43 73.729C135.582 73.4582 135.701 73.1641 135.785 72.8467V71.3169C135.739 71.0841 135.667 70.8599 135.569 70.644C135.476 70.424 135.354 70.2293 135.201 70.0601C135.053 69.8866 134.869 69.749 134.649 69.6475C134.429 69.5459 134.171 69.4951 133.875 69.4951C133.553 69.4951 133.276 69.5628 133.043 69.6982C132.814 69.8294 132.626 70.0114 132.478 70.2441C132.334 70.4727 132.226 70.7393 132.154 71.0439C132.087 71.3444 132.053 71.666 132.053 72.0088ZM141.308 75.627C140.829 75.627 140.396 75.5465 140.006 75.3857C139.621 75.2207 139.289 74.9901 139.01 74.6938C138.735 74.3976 138.523 74.0464 138.375 73.6401C138.227 73.2339 138.153 72.7896 138.153 72.3071V72.0405C138.153 71.4819 138.235 70.9847 138.4 70.5488C138.565 70.1087 138.79 69.7363 139.073 69.4316C139.357 69.127 139.678 68.8963 140.038 68.7397C140.398 68.5832 140.77 68.5049 141.155 68.5049C141.646 68.5049 142.069 68.5895 142.425 68.7588C142.785 68.9281 143.079 69.165 143.307 69.4697C143.536 69.7702 143.705 70.1257 143.815 70.5361C143.925 70.9424 143.98 71.3867 143.98 71.8691V72.396H138.851V71.4375H142.806V71.3486C142.789 71.0439 142.725 70.7477 142.615 70.46C142.509 70.1722 142.34 69.9352 142.107 69.749C141.875 69.5628 141.557 69.4697 141.155 69.4697C140.889 69.4697 140.643 69.5269 140.419 69.6411C140.195 69.7511 140.002 69.9162 139.841 70.1362C139.681 70.3563 139.556 70.625 139.467 70.9424C139.378 71.2598 139.333 71.6258 139.333 72.0405V72.3071C139.333 72.633 139.378 72.9398 139.467 73.2275C139.56 73.5111 139.693 73.7607 139.867 73.9766C140.044 74.1924 140.258 74.3617 140.508 74.4844C140.762 74.6071 141.049 74.6685 141.371 74.6685C141.786 74.6685 142.137 74.5838 142.425 74.4146C142.713 74.2453 142.964 74.0189 143.18 73.7354L143.891 74.3003C143.743 74.5246 143.555 74.7383 143.326 74.9414C143.098 75.1445 142.816 75.3096 142.482 75.4365C142.152 75.5635 141.76 75.627 141.308 75.627Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22.8563 96.9813L28.275 91.5438L27.4688 90.7375L22.8563 95.3687L20.625 93.1375L19.8188 93.9438L22.8563 96.9813ZM18.375 100.75C18.075 100.75 17.8125 100.637 17.5875 100.412C17.3625 100.187 17.25 99.925 17.25 99.625V88.375C17.25 88.075 17.3625 87.8125 17.5875 87.5875C17.8125 87.3625 18.075 87.25 18.375 87.25H29.625C29.925 87.25 30.1875 87.3625 30.4125 87.5875C30.6375 87.8125 30.75 88.075 30.75 88.375V99.625C30.75 99.925 30.6375 100.187 30.4125 100.412C30.1875 100.637 29.925 100.75 29.625 100.75H18.375Z",
  fill: "#4272F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M44.1885 93.5869V94.1709C44.1885 94.8649 44.1017 95.487 43.9282 96.0371C43.7547 96.5872 43.505 97.0549 43.1792 97.4399C42.8534 97.825 42.4619 98.1191 42.0049 98.3223C41.5521 98.5254 41.0443 98.627 40.4814 98.627C39.9355 98.627 39.4341 98.5254 38.9771 98.3223C38.5243 98.1191 38.1307 97.825 37.7964 97.4399C37.4663 97.0549 37.2103 96.5872 37.0283 96.0371C36.8464 95.487 36.7554 94.8649 36.7554 94.1709V93.5869C36.7554 92.8929 36.8442 92.2729 37.022 91.7271C37.2039 91.1769 37.46 90.7093 37.79 90.3242C38.1201 89.9349 38.5116 89.6387 38.9644 89.4355C39.4214 89.2324 39.9229 89.1309 40.4688 89.1309C41.0316 89.1309 41.5394 89.2324 41.9922 89.4355C42.4492 89.6387 42.8407 89.9349 43.1665 90.3242C43.4966 90.7093 43.7484 91.1769 43.9219 91.7271C44.0996 92.2729 44.1885 92.8929 44.1885 93.5869ZM42.9761 94.1709V93.5742C42.9761 93.0241 42.9189 92.5374 42.8047 92.1143C42.6947 91.6911 42.5317 91.3356 42.3159 91.0479C42.1001 90.7601 41.8356 90.5422 41.5225 90.394C41.2135 90.2459 40.8623 90.1719 40.4688 90.1719C40.0879 90.1719 39.743 90.2459 39.4341 90.394C39.1294 90.5422 38.867 90.7601 38.647 91.0479C38.4312 91.3356 38.264 91.6911 38.1455 92.1143C38.027 92.5374 37.9678 93.0241 37.9678 93.5742V94.1709C37.9678 94.7253 38.027 95.2161 38.1455 95.6436C38.264 96.0667 38.4333 96.4243 38.6533 96.7163C38.8776 97.0041 39.1421 97.222 39.4468 97.3701C39.7557 97.5182 40.1006 97.5923 40.4814 97.5923C40.8792 97.5923 41.2326 97.5182 41.5415 97.3701C41.8504 97.222 42.1107 97.0041 42.3223 96.7163C42.5381 96.4243 42.701 96.0667 42.811 95.6436C42.9211 95.2161 42.9761 94.7253 42.9761 94.1709ZM47.1211 91.6318V98.5H45.9404V91.6318H47.1211ZM45.8516 89.8101C45.8516 89.6196 45.9087 89.4588 46.0229 89.3276C46.1414 89.1965 46.3149 89.1309 46.5435 89.1309C46.7677 89.1309 46.9391 89.1965 47.0576 89.3276C47.1803 89.4588 47.2417 89.6196 47.2417 89.8101C47.2417 89.992 47.1803 90.1486 47.0576 90.2798C46.9391 90.4067 46.7677 90.4702 46.5435 90.4702C46.3149 90.4702 46.1414 90.4067 46.0229 90.2798C45.9087 90.1486 45.8516 89.992 45.8516 89.8101ZM50.2822 88.75V98.5H49.1016V88.75H50.2822ZM57.1313 97.2812L58.896 91.6318H59.6704L59.5181 92.7554L57.7217 98.5H56.9663L57.1313 97.2812ZM55.9443 91.6318L57.4487 97.3447L57.5566 98.5H56.7632L54.77 91.6318H55.9443ZM61.3589 97.3003L62.7935 91.6318H63.9614L61.9683 98.5H61.1812L61.3589 97.3003ZM59.8418 91.6318L61.5684 97.186L61.7651 98.5H61.0161L59.1689 92.7427L59.0166 91.6318H59.8418ZM66.3418 92.7109V98.5H65.1675V91.6318H66.3101L66.3418 92.7109ZM68.4873 91.5938L68.481 92.6855C68.3836 92.6644 68.2905 92.6517 68.2017 92.6475C68.117 92.639 68.0197 92.6348 67.9097 92.6348C67.6388 92.6348 67.3997 92.6771 67.1924 92.7617C66.985 92.8464 66.8094 92.9648 66.6655 93.1172C66.5216 93.2695 66.4074 93.4515 66.3228 93.6631C66.2424 93.8704 66.1895 94.099 66.1641 94.3486L65.834 94.5391C65.834 94.1243 65.8742 93.735 65.9546 93.3711C66.0392 93.0072 66.1683 92.6855 66.3418 92.4062C66.5153 92.1227 66.7354 91.9027 67.002 91.7461C67.2728 91.5853 67.5944 91.5049 67.9668 91.5049C68.0514 91.5049 68.1488 91.5155 68.2588 91.5366C68.3688 91.5535 68.445 91.5726 68.4873 91.5938ZM73.3687 97.3257V93.79C73.3687 93.5192 73.3136 93.2843 73.2036 93.0854C73.0978 92.8823 72.937 92.7257 72.7212 92.6157C72.5054 92.5057 72.2388 92.4507 71.9214 92.4507C71.6252 92.4507 71.3649 92.5015 71.1406 92.603C70.9206 92.7046 70.7471 92.8379 70.6201 93.0029C70.4974 93.168 70.436 93.3457 70.436 93.5361H69.2617C69.2617 93.2907 69.3252 93.0474 69.4521 92.8062C69.5791 92.5649 69.7611 92.347 69.998 92.1523C70.2393 91.9535 70.527 91.7969 70.8613 91.6826C71.1999 91.5641 71.5765 91.5049 71.9912 91.5049C72.4906 91.5049 72.9307 91.5895 73.3115 91.7588C73.6966 91.9281 73.9971 92.1841 74.2129 92.5269C74.4329 92.8654 74.543 93.2907 74.543 93.8027V97.002C74.543 97.2305 74.562 97.4738 74.6001 97.7319C74.6424 97.9901 74.7038 98.2122 74.7842 98.3984V98.5H73.5591C73.4998 98.3646 73.4533 98.1847 73.4194 97.9604C73.3856 97.7319 73.3687 97.5203 73.3687 97.3257ZM73.5718 94.3359L73.5845 95.1611H72.3975C72.0632 95.1611 71.7648 95.1886 71.5024 95.2437C71.2401 95.2944 71.02 95.3727 70.8423 95.4785C70.6646 95.5843 70.5291 95.7176 70.436 95.8784C70.3429 96.035 70.2964 96.2191 70.2964 96.4307C70.2964 96.6465 70.3451 96.8433 70.4424 97.021C70.5397 97.1987 70.6857 97.3405 70.8804 97.4463C71.0793 97.5479 71.3226 97.5986 71.6104 97.5986C71.9701 97.5986 72.2874 97.5225 72.5625 97.3701C72.8376 97.2178 73.0555 97.0316 73.2163 96.8115C73.3813 96.5915 73.4702 96.3778 73.4829 96.1704L73.9844 96.7354C73.9548 96.9131 73.8743 97.1099 73.7432 97.3257C73.612 97.5415 73.4364 97.7489 73.2163 97.9478C73.0005 98.1424 72.7424 98.3053 72.4419 98.4365C72.1457 98.5635 71.8114 98.627 71.439 98.627C70.9735 98.627 70.5651 98.536 70.2139 98.354C69.8669 98.172 69.596 97.9287 69.4014 97.624C69.2109 97.3151 69.1157 96.9702 69.1157 96.5894C69.1157 96.2212 69.1877 95.8975 69.3315 95.6182C69.4754 95.3346 69.6828 95.0998 69.9536 94.9136C70.2244 94.7231 70.5503 94.5793 70.9312 94.4819C71.312 94.3846 71.7373 94.3359 72.207 94.3359H73.5718ZM77.5645 92.9521V101.141H76.3838V91.6318H77.4629L77.5645 92.9521ZM82.1919 95.0088V95.1421C82.1919 95.6414 82.1326 96.1048 82.0142 96.5322C81.8957 96.9554 81.7222 97.3236 81.4937 97.6367C81.2694 97.9499 80.9922 98.1932 80.6621 98.3667C80.332 98.5402 79.9533 98.627 79.5259 98.627C79.09 98.627 78.7049 98.555 78.3706 98.4111C78.0363 98.2673 77.7528 98.0578 77.52 97.7827C77.2873 97.5076 77.1011 97.1776 76.9614 96.7925C76.826 96.4074 76.7329 95.9736 76.6821 95.4912V94.7803C76.7329 94.2725 76.8281 93.8175 76.9678 93.4155C77.1074 93.0135 77.2915 92.6707 77.52 92.3872C77.7528 92.0994 78.0342 91.8815 78.3643 91.7334C78.6943 91.5811 79.0752 91.5049 79.5068 91.5049C79.9385 91.5049 80.3215 91.5895 80.6558 91.7588C80.9901 91.9238 81.2715 92.1608 81.5 92.4697C81.7285 92.7786 81.8999 93.1489 82.0142 93.5806C82.1326 94.008 82.1919 94.484 82.1919 95.0088ZM81.0112 95.1421V95.0088C81.0112 94.666 80.9753 94.3444 80.9033 94.0439C80.8314 93.7393 80.7192 93.4727 80.5669 93.2441C80.4188 93.0114 80.2284 92.8294 79.9956 92.6982C79.7629 92.5628 79.4857 92.4951 79.1641 92.4951C78.8678 92.4951 78.6097 92.5459 78.3896 92.6475C78.1738 92.749 77.9897 92.8866 77.8374 93.0601C77.6851 93.2293 77.5602 93.424 77.4629 93.644C77.3698 93.8599 77.3 94.0841 77.2534 94.3169V95.9609C77.3381 96.2572 77.4565 96.5365 77.6089 96.7988C77.7612 97.057 77.9644 97.2664 78.2183 97.4272C78.4722 97.5838 78.7917 97.6621 79.1768 97.6621C79.4941 97.6621 79.7671 97.5965 79.9956 97.4653C80.2284 97.3299 80.4188 97.1458 80.5669 96.9131C80.7192 96.6803 80.8314 96.4137 80.9033 96.1133C80.9753 95.8086 81.0112 95.4849 81.0112 95.1421Z",
  fill: "#0F172A"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "./editor/blocks/radio/edit.js":
/*!*************************************!*\
  !*** ./editor/blocks/radio/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RadioEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview */ "./editor/blocks/radio/preview.js");
/* harmony import */ var _components_SelectRadioCheckPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SelectRadioCheckPlaceholder */ "./editor/components/SelectRadioCheckPlaceholder.js");
/* harmony import */ var _components_SelectRadioCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SelectRadioCheck */ "./editor/components/SelectRadioCheck.js");
/* harmony import */ var _components_CustomTemplateControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CustomTemplateControls */ "./editor/components/CustomTemplateControls.js");





const {
  ToolBarFields,
  BlockLabel,
  BlockDescription,
  BlockAdvancedValue,
  BlockName,
  AdvancedFields,
  FieldControl,
  SwitchPageOnChangeControls
} = JetFBComponents;
const {
  __
} = wp.i18n;
const {
  InspectorControls,
  useBlockProps,
  BlockSettingsMenuControls
} = wp.blockEditor;
const {
  PanelBody,
  ToolbarButton
} = wp.components;
const {
  useUniqueNameOnDuplicate
} = JetFBHooks;
function RadioEdit(props) {
  const {
    isSelected,
    attributes,
    editProps: {
      uniqKey
    },
    setAttributes
  } = props;
  const blockProps = useBlockProps();
  useUniqueNameOnDuplicate();
  if (attributes.isPreview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, _preview__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockSettingsMenuControls, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolBarFields, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarButton, {
    icon: attributes.custom_option ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      width: "32",
      height: "32",
      rx: "2",
      fill: "#101517"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M30 16.796L18.044 28.8813L14 30L15.156 26.0867L27.1107 14L30 16.796Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M12 8H6V21H17.3398L15.3398 23H6L5.7959 22.9893C4.85435 22.8938 4.1062 22.1457 4.01074 21.2041L4 21V8C4 6.89543 4.89543 6 6 6H12V8Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M21 17.3398L19 19.3398V15H21V17.3398Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M19 3H21V6H24V8H21V11H19V8H16V6H19V3Z",
      fill: "currentColor"
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M30 16.796L18.044 28.8813L14 30L15.156 26.0867L27.1107 14L30 16.796Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M12 8H6V21H17.3398L15.3398 23H6L5.7959 22.9893C4.85435 22.8938 4.1062 22.1457 4.01074 21.2041L4 21V8C4 6.89543 4.89543 6 6 6H12V8Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M21 17.3398L19 19.3398V15H21V17.3398Z",
      fill: "currentColor"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M19 3H21V6H24V8H21V11H19V8H16V6H19V3Z",
      fill: "currentColor"
    })),
    title: attributes.custom_option ? __('Disable custom options', 'jet-form-builder') : __('Enable custom options', 'jet-form-builder'),
    onClick: () => setAttributes({
      custom_option: !attributes.custom_option
    }),
    isActive: attributes.custom_option
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SwitchPageOnChangeControls, null), isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('General', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockLabel, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockName, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockDescription, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Value', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAdvancedValue, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AdvancedFields, {
    key: uniqKey('AdvancedFields'),
    ...props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    key: uniqKey('viewBlock')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectRadioCheckPlaceholder__WEBPACK_IMPORTED_MODULE_2__.SelectRadioCheckPlaceholder, {
    key: uniqKey('SelectRadioCheckPlaceholder'),
    scriptData: window.JetFormOptionFieldData,
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectRadioCheck__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CustomTemplateControls__WEBPACK_IMPORTED_MODULE_4__["default"], {
    listingTypes: window.JetFormOptionFieldData.listings_list,
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldControl, {
    type: "custom_settings",
    key: uniqKey('customSettingsFields'),
    ...props
  }))));
}

/***/ }),

/***/ "./editor/blocks/radio/index.js":
/*!**************************************!*\
  !*** ./editor/blocks/radio/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _shared_blocks_radio_block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/blocks/radio/edit.js");
/* harmony import */ var _shared_blocks_radio_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/blocks/radio/block.json */ "../../shared/blocks/radio/block.json");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.pcss */ "./editor/blocks/radio/index.pcss");




const {
  __
} = wp.i18n;
const {
  createBlock
} = wp.blocks;
const {
  name,
  icon = ''
} = _shared_blocks_radio_block_json__WEBPACK_IMPORTED_MODULE_2__;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */
const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  description: __(`Create a list of available options from which the user can 
choose only a single variant. Build the lists of various lengths.`, 'jet-form-builder'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      isPreview: true
    }
  },
  transforms: {
    to: [{
      type: 'block',
      blocks: ['jet-forms/text-field'],
      transform: attributes => {
        return createBlock('jet-forms/text-field', {
          ...attributes
        });
      },
      priority: 0
    }],
    from: [{
      type: 'block',
      blocks: ['jet-forms/select-field', 'jet-forms/text-field'],
      transform: attributes => {
        return createBlock(name, {
          ...attributes
        });
      },
      priority: 0
    }, {
      type: 'block',
      blocks: ['jet-forms/checkbox-field'],
      transform: attributes => {
        attributes.custom_option = {
          allow: !!attributes.custom_option,
          label: '+ Add New'
        };
        return createBlock(name, {
          ...attributes
        });
      },
      priority: 0
    }]
  }
};


/***/ }),

/***/ "./editor/blocks/radio/index.pcss":
/*!****************************************!*\
  !*** ./editor/blocks/radio/index.pcss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./editor/blocks/radio/preview.js":
/*!****************************************!*\
  !*** ./editor/blocks/radio/preview.js ***!
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
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M19.8262 51.0967H17.167V50.0234H19.8262C20.3411 50.0234 20.7581 49.9414 21.0771 49.7773C21.3962 49.6133 21.6286 49.3854 21.7744 49.0938C21.9248 48.8021 22 48.4694 22 48.0957C22 47.7539 21.9248 47.4326 21.7744 47.1318C21.6286 46.8311 21.3962 46.5895 21.0771 46.4072C20.7581 46.2204 20.3411 46.127 19.8262 46.127H17.4746V55H16.1553V45.0469H19.8262C20.5781 45.0469 21.2139 45.1768 21.7334 45.4365C22.2529 45.6963 22.6471 46.0563 22.916 46.5166C23.1849 46.9723 23.3193 47.4941 23.3193 48.082C23.3193 48.7201 23.1849 49.2646 22.916 49.7158C22.6471 50.167 22.2529 50.5111 21.7334 50.748C21.2139 50.9805 20.5781 51.0967 19.8262 51.0967ZM26.0605 48.7656V55H24.7959V47.6035H26.0264L26.0605 48.7656ZM28.3711 47.5625L28.3643 48.7383C28.2594 48.7155 28.1592 48.7018 28.0635 48.6973C27.9723 48.6882 27.8675 48.6836 27.749 48.6836C27.4574 48.6836 27.1999 48.7292 26.9766 48.8203C26.7533 48.9115 26.5641 49.0391 26.4092 49.2031C26.2542 49.3672 26.1312 49.5632 26.04 49.791C25.9535 50.0143 25.8965 50.2604 25.8691 50.5293L25.5137 50.7344C25.5137 50.2878 25.557 49.8685 25.6436 49.4766C25.7347 49.0846 25.8737 48.7383 26.0605 48.4375C26.2474 48.1322 26.4844 47.8952 26.7715 47.7266C27.0632 47.5534 27.4095 47.4668 27.8105 47.4668C27.9017 47.4668 28.0065 47.4782 28.125 47.501C28.2435 47.5192 28.3255 47.5397 28.3711 47.5625ZM32.4727 55.1367C31.9577 55.1367 31.4906 55.0501 31.0713 54.877C30.6566 54.6992 30.2988 54.4508 29.998 54.1318C29.7018 53.8128 29.474 53.4346 29.3145 52.9971C29.1549 52.5596 29.0752 52.0811 29.0752 51.5615V51.2744C29.0752 50.6729 29.1641 50.1374 29.3418 49.668C29.5195 49.194 29.7611 48.793 30.0664 48.4648C30.3717 48.1367 30.7181 47.8883 31.1055 47.7197C31.4928 47.5511 31.8939 47.4668 32.3086 47.4668C32.8372 47.4668 33.293 47.5579 33.6758 47.7402C34.0632 47.9225 34.3799 48.1777 34.626 48.5059C34.8721 48.8294 35.0544 49.2122 35.1729 49.6543C35.2913 50.0918 35.3506 50.5703 35.3506 51.0898V51.6572H29.8271V50.625H34.0859V50.5293C34.0677 50.2012 33.9993 49.8822 33.8809 49.5723C33.7669 49.2624 33.5846 49.0072 33.334 48.8066C33.0833 48.6061 32.7415 48.5059 32.3086 48.5059C32.0215 48.5059 31.7572 48.5674 31.5156 48.6904C31.2741 48.8089 31.0667 48.9867 30.8936 49.2236C30.7204 49.4606 30.5859 49.75 30.4902 50.0918C30.3945 50.4336 30.3467 50.8278 30.3467 51.2744V51.5615C30.3467 51.9124 30.3945 52.2428 30.4902 52.5527C30.5905 52.8581 30.734 53.127 30.9209 53.3594C31.1123 53.5918 31.3424 53.7741 31.6113 53.9062C31.8848 54.0384 32.1947 54.1045 32.541 54.1045C32.9876 54.1045 33.3659 54.0133 33.6758 53.8311C33.9857 53.6488 34.2568 53.4049 34.4893 53.0996L35.2549 53.708C35.0954 53.9495 34.8926 54.1797 34.6465 54.3984C34.4004 54.6172 34.0973 54.7949 33.7373 54.9316C33.3818 55.0684 32.9603 55.1367 32.4727 55.1367ZM38.7139 55H37.4492V46.8242C37.4492 46.291 37.5449 45.8421 37.7363 45.4775C37.9323 45.1084 38.2126 44.8304 38.5771 44.6436C38.9417 44.4521 39.3747 44.3564 39.876 44.3564C40.0218 44.3564 40.1676 44.3656 40.3135 44.3838C40.4639 44.402 40.6097 44.4294 40.751 44.4658L40.6826 45.498C40.5869 45.4753 40.4775 45.4593 40.3545 45.4502C40.236 45.4411 40.1175 45.4365 39.999 45.4365C39.7301 45.4365 39.4977 45.4912 39.3018 45.6006C39.1104 45.7054 38.9645 45.8604 38.8643 46.0654C38.764 46.2705 38.7139 46.5234 38.7139 46.8242V55ZM40.2861 47.6035V48.5742H36.2803V47.6035H40.2861ZM43.5811 55H42.3164V46.8242C42.3164 46.291 42.4121 45.8421 42.6035 45.4775C42.7995 45.1084 43.0798 44.8304 43.4443 44.6436C43.8089 44.4521 44.2419 44.3564 44.7432 44.3564C44.889 44.3564 45.0348 44.3656 45.1807 44.3838C45.3311 44.402 45.4769 44.4294 45.6182 44.4658L45.5498 45.498C45.4541 45.4753 45.3447 45.4593 45.2217 45.4502C45.1032 45.4411 44.9847 45.4365 44.8662 45.4365C44.5973 45.4365 44.3649 45.4912 44.1689 45.6006C43.9775 45.7054 43.8317 45.8604 43.7314 46.0654C43.6312 46.2705 43.5811 46.5234 43.5811 46.8242V55ZM45.1533 47.6035V48.5742H41.1475V47.6035H45.1533ZM49.4668 55.1367C48.9518 55.1367 48.4847 55.0501 48.0654 54.877C47.6507 54.6992 47.293 54.4508 46.9922 54.1318C46.696 53.8128 46.4681 53.4346 46.3086 52.9971C46.1491 52.5596 46.0693 52.0811 46.0693 51.5615V51.2744C46.0693 50.6729 46.1582 50.1374 46.3359 49.668C46.5137 49.194 46.7552 48.793 47.0605 48.4648C47.3659 48.1367 47.7122 47.8883 48.0996 47.7197C48.487 47.5511 48.888 47.4668 49.3027 47.4668C49.8314 47.4668 50.2871 47.5579 50.6699 47.7402C51.0573 47.9225 51.374 48.1777 51.6201 48.5059C51.8662 48.8294 52.0485 49.2122 52.167 49.6543C52.2855 50.0918 52.3447 50.5703 52.3447 51.0898V51.6572H46.8213V50.625H51.0801V50.5293C51.0618 50.2012 50.9935 49.8822 50.875 49.5723C50.7611 49.2624 50.5788 49.0072 50.3281 48.8066C50.0775 48.6061 49.7357 48.5059 49.3027 48.5059C49.0156 48.5059 48.7513 48.5674 48.5098 48.6904C48.2682 48.8089 48.0609 48.9867 47.8877 49.2236C47.7145 49.4606 47.5801 49.75 47.4844 50.0918C47.3887 50.4336 47.3408 50.8278 47.3408 51.2744V51.5615C47.3408 51.9124 47.3887 52.2428 47.4844 52.5527C47.5846 52.8581 47.7282 53.127 47.915 53.3594C48.1064 53.5918 48.3366 53.7741 48.6055 53.9062C48.8789 54.0384 49.1888 54.1045 49.5352 54.1045C49.9818 54.1045 50.36 54.0133 50.6699 53.8311C50.9798 53.6488 51.251 53.4049 51.4834 53.0996L52.249 53.708C52.0895 53.9495 51.8867 54.1797 51.6406 54.3984C51.3945 54.6172 51.0915 54.7949 50.7314 54.9316C50.376 55.0684 49.9544 55.1367 49.4668 55.1367ZM55.0859 48.7656V55H53.8213V47.6035H55.0518L55.0859 48.7656ZM57.3965 47.5625L57.3896 48.7383C57.2848 48.7155 57.1846 48.7018 57.0889 48.6973C56.9977 48.6882 56.8929 48.6836 56.7744 48.6836C56.4827 48.6836 56.2253 48.7292 56.002 48.8203C55.7786 48.9115 55.5895 49.0391 55.4346 49.2031C55.2796 49.3672 55.1566 49.5632 55.0654 49.791C54.9788 50.0143 54.9219 50.2604 54.8945 50.5293L54.5391 50.7344C54.5391 50.2878 54.5824 49.8685 54.6689 49.4766C54.7601 49.0846 54.8991 48.7383 55.0859 48.4375C55.2728 48.1322 55.5098 47.8952 55.7969 47.7266C56.0885 47.5534 56.4349 47.4668 56.8359 47.4668C56.9271 47.4668 57.0319 47.4782 57.1504 47.501C57.2689 47.5192 57.3509 47.5397 57.3965 47.5625ZM61.498 55.1367C60.9831 55.1367 60.516 55.0501 60.0967 54.877C59.682 54.6992 59.3242 54.4508 59.0234 54.1318C58.7272 53.8128 58.4993 53.4346 58.3398 52.9971C58.1803 52.5596 58.1006 52.0811 58.1006 51.5615V51.2744C58.1006 50.6729 58.1895 50.1374 58.3672 49.668C58.5449 49.194 58.7865 48.793 59.0918 48.4648C59.3971 48.1367 59.7435 47.8883 60.1309 47.7197C60.5182 47.5511 60.9193 47.4668 61.334 47.4668C61.8626 47.4668 62.3184 47.5579 62.7012 47.7402C63.0885 47.9225 63.4053 48.1777 63.6514 48.5059C63.8975 48.8294 64.0798 49.2122 64.1982 49.6543C64.3167 50.0918 64.376 50.5703 64.376 51.0898V51.6572H58.8525V50.625H63.1113V50.5293C63.0931 50.2012 63.0247 49.8822 62.9062 49.5723C62.7923 49.2624 62.61 49.0072 62.3594 48.8066C62.1087 48.6061 61.7669 48.5059 61.334 48.5059C61.0469 48.5059 60.7826 48.5674 60.541 48.6904C60.2995 48.8089 60.0921 48.9867 59.9189 49.2236C59.7458 49.4606 59.6113 49.75 59.5156 50.0918C59.4199 50.4336 59.3721 50.8278 59.3721 51.2744V51.5615C59.3721 51.9124 59.4199 52.2428 59.5156 52.5527C59.6159 52.8581 59.7594 53.127 59.9463 53.3594C60.1377 53.5918 60.3678 53.7741 60.6367 53.9062C60.9102 54.0384 61.2201 54.1045 61.5664 54.1045C62.013 54.1045 62.3913 54.0133 62.7012 53.8311C63.0111 53.6488 63.2822 53.4049 63.5146 53.0996L64.2803 53.708C64.1208 53.9495 63.918 54.1797 63.6719 54.3984C63.4258 54.6172 63.1227 54.7949 62.7627 54.9316C62.4072 55.0684 61.9857 55.1367 61.498 55.1367ZM70.5146 53.5645V44.5H71.7861V55H70.624L70.5146 53.5645ZM65.5381 51.3838V51.2402C65.5381 50.6751 65.6064 50.1624 65.7432 49.7021C65.8844 49.2373 66.0827 48.8385 66.3379 48.5059C66.5977 48.1732 66.9053 47.918 67.2607 47.7402C67.6208 47.5579 68.0218 47.4668 68.4639 47.4668C68.9287 47.4668 69.3343 47.5488 69.6807 47.7129C70.0316 47.8724 70.3278 48.1071 70.5693 48.417C70.8154 48.7223 71.0091 49.0915 71.1504 49.5244C71.2917 49.9574 71.3896 50.4473 71.4443 50.9941V51.623C71.3942 52.1654 71.2962 52.653 71.1504 53.0859C71.0091 53.5189 70.8154 53.888 70.5693 54.1934C70.3278 54.4987 70.0316 54.7334 69.6807 54.8975C69.3298 55.057 68.9196 55.1367 68.4502 55.1367C68.0173 55.1367 67.6208 55.0433 67.2607 54.8564C66.9053 54.6696 66.5977 54.4076 66.3379 54.0703C66.0827 53.7331 65.8844 53.3366 65.7432 52.8809C65.6064 52.4206 65.5381 51.9215 65.5381 51.3838ZM66.8096 51.2402V51.3838C66.8096 51.7529 66.846 52.0993 66.9189 52.4229C66.9964 52.7464 67.1149 53.0312 67.2744 53.2773C67.4339 53.5234 67.6367 53.7171 67.8828 53.8584C68.1289 53.9951 68.4229 54.0635 68.7646 54.0635C69.1839 54.0635 69.528 53.9746 69.7969 53.7969C70.0703 53.6191 70.2891 53.3844 70.4531 53.0928C70.6172 52.8011 70.7448 52.4844 70.8359 52.1426V50.4951C70.7812 50.2445 70.7015 50.0029 70.5967 49.7705C70.4964 49.5335 70.3643 49.3239 70.2002 49.1416C70.0407 48.9548 69.8424 48.8066 69.6055 48.6973C69.373 48.5879 69.0973 48.5332 68.7783 48.5332C68.432 48.5332 68.1335 48.6061 67.8828 48.752C67.6367 48.8932 67.4339 49.0892 67.2744 49.3398C67.1149 49.5859 66.9964 49.873 66.9189 50.2012C66.846 50.5247 66.8096 50.8711 66.8096 51.2402ZM78.4854 49.0732V55H77.2139V47.6035H78.417L78.4854 49.0732ZM78.2256 51.0215L77.6377 51.001C77.6423 50.4951 77.7083 50.028 77.8359 49.5996C77.9635 49.1667 78.1527 48.7907 78.4033 48.4717C78.654 48.1527 78.9661 47.9066 79.3398 47.7334C79.7135 47.5557 80.1465 47.4668 80.6387 47.4668C80.985 47.4668 81.304 47.5169 81.5957 47.6172C81.8874 47.7129 82.1403 47.8656 82.3545 48.0752C82.5687 48.2848 82.735 48.5537 82.8535 48.8818C82.972 49.21 83.0312 49.6064 83.0312 50.0713V55H81.7666V50.1328C81.7666 49.7454 81.7005 49.4355 81.5684 49.2031C81.4408 48.9707 81.2585 48.8021 81.0215 48.6973C80.7845 48.5879 80.5065 48.5332 80.1875 48.5332C79.8138 48.5332 79.5016 48.5993 79.251 48.7314C79.0003 48.8636 78.7998 49.0459 78.6494 49.2783C78.499 49.5107 78.3896 49.7773 78.3213 50.0781C78.2575 50.3743 78.2256 50.6888 78.2256 51.0215ZM83.0176 50.3242L82.1699 50.584C82.1745 50.1784 82.2406 49.7887 82.3682 49.415C82.5003 49.0413 82.6895 48.7087 82.9355 48.417C83.1862 48.1253 83.4938 47.8952 83.8584 47.7266C84.223 47.5534 84.64 47.4668 85.1094 47.4668C85.5059 47.4668 85.8568 47.5192 86.1621 47.624C86.472 47.7288 86.7318 47.8906 86.9414 48.1094C87.1556 48.3236 87.3174 48.5993 87.4268 48.9365C87.5361 49.2738 87.5908 49.6748 87.5908 50.1396V55H86.3193V50.126C86.3193 49.7113 86.2533 49.39 86.1211 49.1621C85.9935 48.9297 85.8112 48.7679 85.5742 48.6768C85.3418 48.5811 85.0638 48.5332 84.7402 48.5332C84.4622 48.5332 84.2161 48.5811 84.002 48.6768C83.7878 48.7725 83.6077 48.9046 83.4619 49.0732C83.3161 49.2373 83.2044 49.4264 83.127 49.6406C83.054 49.8548 83.0176 50.0827 83.0176 50.3242ZM92.5742 55.1367C92.0592 55.1367 91.5921 55.0501 91.1729 54.877C90.7581 54.6992 90.4004 54.4508 90.0996 54.1318C89.8034 53.8128 89.5755 53.4346 89.416 52.9971C89.2565 52.5596 89.1768 52.0811 89.1768 51.5615V51.2744C89.1768 50.6729 89.2656 50.1374 89.4434 49.668C89.6211 49.194 89.8626 48.793 90.168 48.4648C90.4733 48.1367 90.8197 47.8883 91.207 47.7197C91.5944 47.5511 91.9954 47.4668 92.4102 47.4668C92.9388 47.4668 93.3945 47.5579 93.7773 47.7402C94.1647 47.9225 94.4814 48.1777 94.7275 48.5059C94.9736 48.8294 95.1559 49.2122 95.2744 49.6543C95.3929 50.0918 95.4521 50.5703 95.4521 51.0898V51.6572H89.9287V50.625H94.1875V50.5293C94.1693 50.2012 94.1009 49.8822 93.9824 49.5723C93.8685 49.2624 93.6862 49.0072 93.4355 48.8066C93.1849 48.6061 92.8431 48.5059 92.4102 48.5059C92.123 48.5059 91.8587 48.5674 91.6172 48.6904C91.3757 48.8089 91.1683 48.9867 90.9951 49.2236C90.8219 49.4606 90.6875 49.75 90.5918 50.0918C90.4961 50.4336 90.4482 50.8278 90.4482 51.2744V51.5615C90.4482 51.9124 90.4961 52.2428 90.5918 52.5527C90.6921 52.8581 90.8356 53.127 91.0225 53.3594C91.2139 53.5918 91.444 53.7741 91.7129 53.9062C91.9863 54.0384 92.2962 54.1045 92.6426 54.1045C93.0892 54.1045 93.4674 54.0133 93.7773 53.8311C94.0872 53.6488 94.3584 53.4049 94.5908 53.0996L95.3564 53.708C95.1969 53.9495 94.9941 54.1797 94.748 54.3984C94.502 54.6172 94.1989 54.7949 93.8389 54.9316C93.4834 55.0684 93.0618 55.1367 92.5742 55.1367ZM100.025 47.6035V48.5742H96.0264V47.6035H100.025ZM97.3799 45.8057H98.6445V53.168C98.6445 53.4186 98.6833 53.6077 98.7607 53.7354C98.8382 53.863 98.9385 53.9473 99.0615 53.9883C99.1846 54.0293 99.3167 54.0498 99.458 54.0498C99.5628 54.0498 99.6722 54.0407 99.7861 54.0225C99.9046 53.9997 99.9935 53.9814 100.053 53.9678L100.06 55C99.9593 55.0319 99.8271 55.0615 99.6631 55.0889C99.5036 55.1208 99.3099 55.1367 99.082 55.1367C98.7721 55.1367 98.4873 55.0752 98.2275 54.9521C97.9678 54.8291 97.7604 54.624 97.6055 54.3369C97.4551 54.0452 97.3799 53.6533 97.3799 53.1611V45.8057ZM102.773 44.5V55H101.509V44.5H102.773ZM102.473 51.0215L101.946 51.001C101.951 50.4951 102.026 50.028 102.172 49.5996C102.318 49.1667 102.523 48.7907 102.787 48.4717C103.051 48.1527 103.366 47.9066 103.73 47.7334C104.1 47.5557 104.507 47.4668 104.954 47.4668C105.319 47.4668 105.647 47.5169 105.938 47.6172C106.23 47.7129 106.479 47.8678 106.684 48.082C106.893 48.2962 107.053 48.5742 107.162 48.916C107.271 49.2533 107.326 49.6657 107.326 50.1533V55H106.055V50.1396C106.055 49.7523 105.998 49.4424 105.884 49.21C105.77 48.973 105.604 48.8021 105.385 48.6973C105.166 48.5879 104.897 48.5332 104.578 48.5332C104.264 48.5332 103.977 48.5993 103.717 48.7314C103.462 48.8636 103.241 49.0459 103.054 49.2783C102.871 49.5107 102.728 49.7773 102.623 50.0781C102.523 50.3743 102.473 50.6888 102.473 51.0215ZM108.885 51.3838V51.2266C108.885 50.6934 108.962 50.1989 109.117 49.7432C109.272 49.2829 109.495 48.8841 109.787 48.5469C110.079 48.2051 110.432 47.9408 110.847 47.7539C111.261 47.5625 111.726 47.4668 112.241 47.4668C112.761 47.4668 113.228 47.5625 113.643 47.7539C114.062 47.9408 114.417 48.2051 114.709 48.5469C115.005 48.8841 115.231 49.2829 115.386 49.7432C115.541 50.1989 115.618 50.6934 115.618 51.2266V51.3838C115.618 51.917 115.541 52.4115 115.386 52.8672C115.231 53.3229 115.005 53.7217 114.709 54.0635C114.417 54.4007 114.064 54.665 113.649 54.8564C113.239 55.0433 112.774 55.1367 112.255 55.1367C111.735 55.1367 111.268 55.0433 110.854 54.8564C110.439 54.665 110.083 54.4007 109.787 54.0635C109.495 53.7217 109.272 53.3229 109.117 52.8672C108.962 52.4115 108.885 51.917 108.885 51.3838ZM110.149 51.2266V51.3838C110.149 51.7529 110.193 52.1016 110.279 52.4297C110.366 52.7533 110.496 53.0404 110.669 53.291C110.847 53.5417 111.068 53.7399 111.332 53.8857C111.596 54.027 111.904 54.0977 112.255 54.0977C112.601 54.0977 112.904 54.027 113.164 53.8857C113.428 53.7399 113.647 53.5417 113.82 53.291C113.993 53.0404 114.123 52.7533 114.21 52.4297C114.301 52.1016 114.347 51.7529 114.347 51.3838V51.2266C114.347 50.862 114.301 50.5179 114.21 50.1943C114.123 49.8662 113.991 49.5768 113.813 49.3262C113.64 49.071 113.422 48.8704 113.157 48.7246C112.897 48.5788 112.592 48.5059 112.241 48.5059C111.895 48.5059 111.59 48.5788 111.325 48.7246C111.065 48.8704 110.847 49.071 110.669 49.3262C110.496 49.5768 110.366 49.8662 110.279 50.1943C110.193 50.5179 110.149 50.862 110.149 51.2266ZM121.866 53.5645V44.5H123.138V55H121.976L121.866 53.5645ZM116.89 51.3838V51.2402C116.89 50.6751 116.958 50.1624 117.095 49.7021C117.236 49.2373 117.434 48.8385 117.689 48.5059C117.949 48.1732 118.257 47.918 118.612 47.7402C118.972 47.5579 119.373 47.4668 119.815 47.4668C120.28 47.4668 120.686 47.5488 121.032 47.7129C121.383 47.8724 121.679 48.1071 121.921 48.417C122.167 48.7223 122.361 49.0915 122.502 49.5244C122.643 49.9574 122.741 50.4473 122.796 50.9941V51.623C122.746 52.1654 122.648 52.653 122.502 53.0859C122.361 53.5189 122.167 53.888 121.921 54.1934C121.679 54.4987 121.383 54.7334 121.032 54.8975C120.681 55.057 120.271 55.1367 119.802 55.1367C119.369 55.1367 118.972 55.0433 118.612 54.8564C118.257 54.6696 117.949 54.4076 117.689 54.0703C117.434 53.7331 117.236 53.3366 117.095 52.8809C116.958 52.4206 116.89 51.9215 116.89 51.3838ZM118.161 51.2402V51.3838C118.161 51.7529 118.198 52.0993 118.271 52.4229C118.348 52.7464 118.466 53.0312 118.626 53.2773C118.785 53.5234 118.988 53.7171 119.234 53.8584C119.48 53.9951 119.774 54.0635 120.116 54.0635C120.535 54.0635 120.88 53.9746 121.148 53.7969C121.422 53.6191 121.641 53.3844 121.805 53.0928C121.969 52.8011 122.096 52.4844 122.188 52.1426V50.4951C122.133 50.2445 122.053 50.0029 121.948 49.7705C121.848 49.5335 121.716 49.3239 121.552 49.1416C121.392 48.9548 121.194 48.8066 120.957 48.6973C120.725 48.5879 120.449 48.5332 120.13 48.5332C119.784 48.5332 119.485 48.6061 119.234 48.752C118.988 48.8932 118.785 49.0892 118.626 49.3398C118.466 49.5859 118.348 49.873 118.271 50.2012C118.198 50.5247 118.161 50.8711 118.161 51.2402ZM128.244 51.3838V51.2266C128.244 50.6934 128.322 50.1989 128.477 49.7432C128.632 49.2829 128.855 48.8841 129.146 48.5469C129.438 48.2051 129.791 47.9408 130.206 47.7539C130.621 47.5625 131.086 47.4668 131.601 47.4668C132.12 47.4668 132.587 47.5625 133.002 47.7539C133.421 47.9408 133.777 48.2051 134.068 48.5469C134.365 48.8841 134.59 49.2829 134.745 49.7432C134.9 50.1989 134.978 50.6934 134.978 51.2266V51.3838C134.978 51.917 134.9 52.4115 134.745 52.8672C134.59 53.3229 134.365 53.7217 134.068 54.0635C133.777 54.4007 133.424 54.665 133.009 54.8564C132.599 55.0433 132.134 55.1367 131.614 55.1367C131.095 55.1367 130.628 55.0433 130.213 54.8564C129.798 54.665 129.443 54.4007 129.146 54.0635C128.855 53.7217 128.632 53.3229 128.477 52.8672C128.322 52.4115 128.244 51.917 128.244 51.3838ZM129.509 51.2266V51.3838C129.509 51.7529 129.552 52.1016 129.639 52.4297C129.725 52.7533 129.855 53.0404 130.028 53.291C130.206 53.5417 130.427 53.7399 130.691 53.8857C130.956 54.027 131.263 54.0977 131.614 54.0977C131.961 54.0977 132.264 54.027 132.523 53.8857C132.788 53.7399 133.007 53.5417 133.18 53.291C133.353 53.0404 133.483 52.7533 133.569 52.4297C133.66 52.1016 133.706 51.7529 133.706 51.3838V51.2266C133.706 50.862 133.66 50.5179 133.569 50.1943C133.483 49.8662 133.351 49.5768 133.173 49.3262C133 49.071 132.781 48.8704 132.517 48.7246C132.257 48.5788 131.951 48.5059 131.601 48.5059C131.254 48.5059 130.949 48.5788 130.685 48.7246C130.425 48.8704 130.206 49.071 130.028 49.3262C129.855 49.5768 129.725 49.8662 129.639 50.1943C129.552 50.5179 129.509 50.862 129.509 51.2266ZM138.45 55H137.186V46.8242C137.186 46.291 137.281 45.8421 137.473 45.4775C137.669 45.1084 137.949 44.8304 138.313 44.6436C138.678 44.4521 139.111 44.3564 139.612 44.3564C139.758 44.3564 139.904 44.3656 140.05 44.3838C140.2 44.402 140.346 44.4294 140.487 44.4658L140.419 45.498C140.323 45.4753 140.214 45.4593 140.091 45.4502C139.972 45.4411 139.854 45.4365 139.735 45.4365C139.466 45.4365 139.234 45.4912 139.038 45.6006C138.847 45.7054 138.701 45.8604 138.601 46.0654C138.5 46.2705 138.45 46.5234 138.45 46.8242V55ZM140.022 47.6035V48.5742H136.017V47.6035H140.022ZM147.863 54.0977C148.164 54.0977 148.442 54.0361 148.697 53.9131C148.952 53.79 149.162 53.6214 149.326 53.4072C149.49 53.1885 149.584 52.9401 149.606 52.6621H150.81C150.787 53.0996 150.639 53.5075 150.365 53.8857C150.096 54.2594 149.743 54.5625 149.306 54.7949C148.868 55.0228 148.387 55.1367 147.863 55.1367C147.307 55.1367 146.822 55.0387 146.407 54.8428C145.997 54.6468 145.655 54.3779 145.382 54.0361C145.113 53.6943 144.91 53.3024 144.773 52.8604C144.641 52.4137 144.575 51.9421 144.575 51.4453V51.1582C144.575 50.6615 144.641 50.1921 144.773 49.75C144.91 49.3034 145.113 48.9092 145.382 48.5674C145.655 48.2256 145.997 47.9567 146.407 47.7607C146.822 47.5648 147.307 47.4668 147.863 47.4668C148.442 47.4668 148.948 47.5853 149.381 47.8223C149.814 48.0547 150.153 48.3737 150.399 48.7793C150.65 49.1803 150.787 49.6361 150.81 50.1465H149.606C149.584 49.8411 149.497 49.5654 149.347 49.3193C149.201 49.0732 149 48.8773 148.745 48.7314C148.494 48.5811 148.201 48.5059 147.863 48.5059C147.476 48.5059 147.15 48.5833 146.886 48.7383C146.626 48.8887 146.419 49.0938 146.264 49.3535C146.113 49.6087 146.004 49.8936 145.936 50.208C145.872 50.5179 145.84 50.8346 145.84 51.1582V51.4453C145.84 51.7689 145.872 52.0879 145.936 52.4023C145.999 52.7168 146.106 53.0016 146.257 53.2568C146.412 53.512 146.619 53.7171 146.879 53.8721C147.143 54.0225 147.471 54.0977 147.863 54.0977ZM151.896 51.3838V51.2266C151.896 50.6934 151.974 50.1989 152.129 49.7432C152.284 49.2829 152.507 48.8841 152.799 48.5469C153.09 48.2051 153.444 47.9408 153.858 47.7539C154.273 47.5625 154.738 47.4668 155.253 47.4668C155.772 47.4668 156.24 47.5625 156.654 47.7539C157.074 47.9408 157.429 48.2051 157.721 48.5469C158.017 48.8841 158.243 49.2829 158.397 49.7432C158.552 50.1989 158.63 50.6934 158.63 51.2266V51.3838C158.63 51.917 158.552 52.4115 158.397 52.8672C158.243 53.3229 158.017 53.7217 157.721 54.0635C157.429 54.4007 157.076 54.665 156.661 54.8564C156.251 55.0433 155.786 55.1367 155.267 55.1367C154.747 55.1367 154.28 55.0433 153.865 54.8564C153.451 54.665 153.095 54.4007 152.799 54.0635C152.507 53.7217 152.284 53.3229 152.129 52.8672C151.974 52.4115 151.896 51.917 151.896 51.3838ZM153.161 51.2266V51.3838C153.161 51.7529 153.204 52.1016 153.291 52.4297C153.378 52.7533 153.507 53.0404 153.681 53.291C153.858 53.5417 154.079 53.7399 154.344 53.8857C154.608 54.027 154.916 54.0977 155.267 54.0977C155.613 54.0977 155.916 54.027 156.176 53.8857C156.44 53.7399 156.659 53.5417 156.832 53.291C157.005 53.0404 157.135 52.7533 157.222 52.4297C157.313 52.1016 157.358 51.7529 157.358 51.3838V51.2266C157.358 50.862 157.313 50.5179 157.222 50.1943C157.135 49.8662 157.003 49.5768 156.825 49.3262C156.652 49.071 156.433 48.8704 156.169 48.7246C155.909 48.5788 155.604 48.5059 155.253 48.5059C154.907 48.5059 154.601 48.5788 154.337 48.7246C154.077 48.8704 153.858 49.071 153.681 49.3262C153.507 49.5768 153.378 49.8662 153.291 50.1943C153.204 50.5179 153.161 50.862 153.161 51.2266ZM161.474 49.0732V55H160.202V47.6035H161.405L161.474 49.0732ZM161.214 51.0215L160.626 51.001C160.631 50.4951 160.697 50.028 160.824 49.5996C160.952 49.1667 161.141 48.7907 161.392 48.4717C161.642 48.1527 161.954 47.9066 162.328 47.7334C162.702 47.5557 163.135 47.4668 163.627 47.4668C163.973 47.4668 164.292 47.5169 164.584 47.6172C164.876 47.7129 165.129 47.8656 165.343 48.0752C165.557 48.2848 165.723 48.5537 165.842 48.8818C165.96 49.21 166.02 49.6064 166.02 50.0713V55H164.755V50.1328C164.755 49.7454 164.689 49.4355 164.557 49.2031C164.429 48.9707 164.247 48.8021 164.01 48.6973C163.773 48.5879 163.495 48.5332 163.176 48.5332C162.802 48.5332 162.49 48.5993 162.239 48.7314C161.989 48.8636 161.788 49.0459 161.638 49.2783C161.487 49.5107 161.378 49.7773 161.31 50.0781C161.246 50.3743 161.214 50.6888 161.214 51.0215ZM166.006 50.3242L165.158 50.584C165.163 50.1784 165.229 49.7887 165.356 49.415C165.489 49.0413 165.678 48.7087 165.924 48.417C166.174 48.1253 166.482 47.8952 166.847 47.7266C167.211 47.5534 167.628 47.4668 168.098 47.4668C168.494 47.4668 168.845 47.5192 169.15 47.624C169.46 47.7288 169.72 47.8906 169.93 48.1094C170.144 48.3236 170.306 48.5993 170.415 48.9365C170.524 49.2738 170.579 49.6748 170.579 50.1396V55H169.308V50.126C169.308 49.7113 169.242 49.39 169.109 49.1621C168.982 48.9297 168.799 48.7679 168.562 48.6768C168.33 48.5811 168.052 48.5332 167.729 48.5332C167.451 48.5332 167.204 48.5811 166.99 48.6768C166.776 48.7725 166.596 48.9046 166.45 49.0732C166.304 49.2373 166.193 49.4264 166.115 49.6406C166.042 49.8548 166.006 50.0827 166.006 50.3242ZM173.751 49.0732V55H172.479V47.6035H173.683L173.751 49.0732ZM173.491 51.0215L172.903 51.001C172.908 50.4951 172.974 50.028 173.102 49.5996C173.229 49.1667 173.418 48.7907 173.669 48.4717C173.92 48.1527 174.232 47.9066 174.605 47.7334C174.979 47.5557 175.412 47.4668 175.904 47.4668C176.251 47.4668 176.57 47.5169 176.861 47.6172C177.153 47.7129 177.406 47.8656 177.62 48.0752C177.834 48.2848 178.001 48.5537 178.119 48.8818C178.238 49.21 178.297 49.6064 178.297 50.0713V55H177.032V50.1328C177.032 49.7454 176.966 49.4355 176.834 49.2031C176.706 48.9707 176.524 48.8021 176.287 48.6973C176.05 48.5879 175.772 48.5332 175.453 48.5332C175.079 48.5332 174.767 48.5993 174.517 48.7314C174.266 48.8636 174.065 49.0459 173.915 49.2783C173.765 49.5107 173.655 49.7773 173.587 50.0781C173.523 50.3743 173.491 50.6888 173.491 51.0215ZM178.283 50.3242L177.436 50.584C177.44 50.1784 177.506 49.7887 177.634 49.415C177.766 49.0413 177.955 48.7087 178.201 48.417C178.452 48.1253 178.759 47.8952 179.124 47.7266C179.489 47.5534 179.906 47.4668 180.375 47.4668C180.771 47.4668 181.122 47.5192 181.428 47.624C181.738 47.7288 181.997 47.8906 182.207 48.1094C182.421 48.3236 182.583 48.5993 182.692 48.9365C182.802 49.2738 182.856 49.6748 182.856 50.1396V55H181.585V50.126C181.585 49.7113 181.519 49.39 181.387 49.1621C181.259 48.9297 181.077 48.7679 180.84 48.6768C180.607 48.5811 180.329 48.5332 180.006 48.5332C179.728 48.5332 179.482 48.5811 179.268 48.6768C179.053 48.7725 178.873 48.9046 178.728 49.0732C178.582 49.2373 178.47 49.4264 178.393 49.6406C178.32 49.8548 178.283 50.0827 178.283 50.3242ZM189.296 53.291V47.6035H190.567V55H189.357L189.296 53.291ZM189.535 51.7324L190.062 51.7188C190.062 52.2109 190.009 52.6667 189.904 53.0859C189.804 53.5007 189.64 53.8607 189.412 54.166C189.184 54.4714 188.886 54.7106 188.517 54.8838C188.147 55.0524 187.699 55.1367 187.17 55.1367C186.81 55.1367 186.479 55.0843 186.179 54.9795C185.882 54.8747 185.627 54.7129 185.413 54.4941C185.199 54.2754 185.033 53.9906 184.914 53.6396C184.8 53.2887 184.743 52.8672 184.743 52.375V47.6035H186.008V52.3887C186.008 52.7214 186.044 52.9971 186.117 53.2158C186.195 53.43 186.297 53.6009 186.425 53.7285C186.557 53.8516 186.703 53.9382 186.862 53.9883C187.026 54.0384 187.195 54.0635 187.368 54.0635C187.906 54.0635 188.332 53.9609 188.646 53.7559C188.961 53.5462 189.187 53.266 189.323 52.915C189.465 52.5596 189.535 52.1654 189.535 51.7324ZM193.76 49.1826V55H192.495V47.6035H193.691L193.76 49.1826ZM193.459 51.0215L192.933 51.001C192.937 50.4951 193.012 50.028 193.158 49.5996C193.304 49.1667 193.509 48.7907 193.773 48.4717C194.038 48.1527 194.352 47.9066 194.717 47.7334C195.086 47.5557 195.494 47.4668 195.94 47.4668C196.305 47.4668 196.633 47.5169 196.925 47.6172C197.216 47.7129 197.465 47.8678 197.67 48.082C197.88 48.2962 198.039 48.5742 198.148 48.916C198.258 49.2533 198.312 49.6657 198.312 50.1533V55H197.041V50.1396C197.041 49.7523 196.984 49.4424 196.87 49.21C196.756 48.973 196.59 48.8021 196.371 48.6973C196.152 48.5879 195.883 48.5332 195.564 48.5332C195.25 48.5332 194.963 48.5993 194.703 48.7314C194.448 48.8636 194.227 49.0459 194.04 49.2783C193.858 49.5107 193.714 49.7773 193.609 50.0781C193.509 50.3743 193.459 50.6888 193.459 51.0215ZM201.607 47.6035V55H200.336V47.6035H201.607ZM200.24 45.6416C200.24 45.4365 200.302 45.2633 200.425 45.1221C200.552 44.9808 200.739 44.9102 200.985 44.9102C201.227 44.9102 201.411 44.9808 201.539 45.1221C201.671 45.2633 201.737 45.4365 201.737 45.6416C201.737 45.8376 201.671 46.0062 201.539 46.1475C201.411 46.2842 201.227 46.3525 200.985 46.3525C200.739 46.3525 200.552 46.2842 200.425 46.1475C200.302 46.0062 200.24 45.8376 200.24 45.6416ZM206.598 54.0977C206.898 54.0977 207.176 54.0361 207.432 53.9131C207.687 53.79 207.896 53.6214 208.061 53.4072C208.225 53.1885 208.318 52.9401 208.341 52.6621H209.544C209.521 53.0996 209.373 53.5075 209.1 53.8857C208.831 54.2594 208.478 54.5625 208.04 54.7949C207.603 55.0228 207.122 55.1367 206.598 55.1367C206.042 55.1367 205.556 55.0387 205.142 54.8428C204.731 54.6468 204.39 54.3779 204.116 54.0361C203.847 53.6943 203.645 53.3024 203.508 52.8604C203.376 52.4137 203.31 51.9421 203.31 51.4453V51.1582C203.31 50.6615 203.376 50.1921 203.508 49.75C203.645 49.3034 203.847 48.9092 204.116 48.5674C204.39 48.2256 204.731 47.9567 205.142 47.7607C205.556 47.5648 206.042 47.4668 206.598 47.4668C207.176 47.4668 207.682 47.5853 208.115 47.8223C208.548 48.0547 208.888 48.3737 209.134 48.7793C209.384 49.1803 209.521 49.6361 209.544 50.1465H208.341C208.318 49.8411 208.231 49.5654 208.081 49.3193C207.935 49.0732 207.735 48.8773 207.479 48.7314C207.229 48.5811 206.935 48.5059 206.598 48.5059C206.21 48.5059 205.884 48.5833 205.62 48.7383C205.36 48.8887 205.153 49.0938 204.998 49.3535C204.848 49.6087 204.738 49.8936 204.67 50.208C204.606 50.5179 204.574 50.8346 204.574 51.1582V51.4453C204.574 51.7689 204.606 52.0879 204.67 52.4023C204.734 52.7168 204.841 53.0016 204.991 53.2568C205.146 53.512 205.354 53.7171 205.613 53.8721C205.878 54.0225 206.206 54.0977 206.598 54.0977ZM215.327 53.7354V49.9277C215.327 49.6361 215.268 49.3831 215.149 49.1689C215.035 48.9502 214.862 48.7816 214.63 48.6631C214.397 48.5446 214.11 48.4854 213.769 48.4854C213.45 48.4854 213.169 48.54 212.928 48.6494C212.691 48.7588 212.504 48.9023 212.367 49.0801C212.235 49.2578 212.169 49.4492 212.169 49.6543H210.904C210.904 49.39 210.973 49.1279 211.109 48.8682C211.246 48.6084 211.442 48.3737 211.697 48.1641C211.957 47.9499 212.267 47.7812 212.627 47.6582C212.992 47.5306 213.397 47.4668 213.844 47.4668C214.382 47.4668 214.855 47.5579 215.266 47.7402C215.68 47.9225 216.004 48.1982 216.236 48.5674C216.473 48.932 216.592 49.39 216.592 49.9414V53.3867C216.592 53.6328 216.612 53.8949 216.653 54.1729C216.699 54.4508 216.765 54.6901 216.852 54.8906V55H215.532C215.468 54.8542 215.418 54.6605 215.382 54.4189C215.345 54.1729 215.327 53.945 215.327 53.7354ZM215.546 50.5156L215.56 51.4043H214.281C213.921 51.4043 213.6 51.4339 213.317 51.4932C213.035 51.5479 212.798 51.6322 212.606 51.7461C212.415 51.86 212.269 52.0036 212.169 52.1768C212.069 52.3454 212.019 52.5436 212.019 52.7715C212.019 53.0039 212.071 53.2158 212.176 53.4072C212.281 53.5986 212.438 53.7513 212.647 53.8652C212.862 53.9746 213.124 54.0293 213.434 54.0293C213.821 54.0293 214.163 53.9473 214.459 53.7832C214.755 53.6191 214.99 53.4186 215.163 53.1816C215.341 52.9447 215.437 52.7145 215.45 52.4912L215.99 53.0996C215.958 53.291 215.872 53.5029 215.73 53.7354C215.589 53.9678 215.4 54.1911 215.163 54.4053C214.931 54.6149 214.653 54.7904 214.329 54.9316C214.01 55.0684 213.65 55.1367 213.249 55.1367C212.748 55.1367 212.308 55.0387 211.93 54.8428C211.556 54.6468 211.264 54.3848 211.055 54.0566C210.85 53.724 210.747 53.3525 210.747 52.9424C210.747 52.5459 210.825 52.1973 210.979 51.8965C211.134 51.5911 211.358 51.3382 211.649 51.1377C211.941 50.9326 212.292 50.7777 212.702 50.6729C213.112 50.568 213.57 50.5156 214.076 50.5156H215.546ZM221.678 47.6035V48.5742H217.679V47.6035H221.678ZM219.032 45.8057H220.297V53.168C220.297 53.4186 220.336 53.6077 220.413 53.7354C220.491 53.863 220.591 53.9473 220.714 53.9883C220.837 54.0293 220.969 54.0498 221.11 54.0498C221.215 54.0498 221.325 54.0407 221.438 54.0225C221.557 53.9997 221.646 53.9814 221.705 53.9678L221.712 55C221.612 55.0319 221.479 55.0615 221.315 55.0889C221.156 55.1208 220.962 55.1367 220.734 55.1367C220.424 55.1367 220.14 55.0752 219.88 54.9521C219.62 54.8291 219.413 54.624 219.258 54.3369C219.107 54.0452 219.032 53.6533 219.032 53.1611V45.8057ZM224.535 47.6035V55H223.264V47.6035H224.535ZM223.168 45.6416C223.168 45.4365 223.229 45.2633 223.353 45.1221C223.48 44.9808 223.667 44.9102 223.913 44.9102C224.155 44.9102 224.339 44.9808 224.467 45.1221C224.599 45.2633 224.665 45.4365 224.665 45.6416C224.665 45.8376 224.599 46.0062 224.467 46.1475C224.339 46.2842 224.155 46.3525 223.913 46.3525C223.667 46.3525 223.48 46.2842 223.353 46.1475C223.229 46.0062 223.168 45.8376 223.168 45.6416ZM226.23 51.3838V51.2266C226.23 50.6934 226.308 50.1989 226.463 49.7432C226.618 49.2829 226.841 48.8841 227.133 48.5469C227.424 48.2051 227.778 47.9408 228.192 47.7539C228.607 47.5625 229.072 47.4668 229.587 47.4668C230.106 47.4668 230.574 47.5625 230.988 47.7539C231.408 47.9408 231.763 48.2051 232.055 48.5469C232.351 48.8841 232.576 49.2829 232.731 49.7432C232.886 50.1989 232.964 50.6934 232.964 51.2266V51.3838C232.964 51.917 232.886 52.4115 232.731 52.8672C232.576 53.3229 232.351 53.7217 232.055 54.0635C231.763 54.4007 231.41 54.665 230.995 54.8564C230.585 55.0433 230.12 55.1367 229.601 55.1367C229.081 55.1367 228.614 55.0433 228.199 54.8564C227.785 54.665 227.429 54.4007 227.133 54.0635C226.841 53.7217 226.618 53.3229 226.463 52.8672C226.308 52.4115 226.23 51.917 226.23 51.3838ZM227.495 51.2266V51.3838C227.495 51.7529 227.538 52.1016 227.625 52.4297C227.712 52.7533 227.841 53.0404 228.015 53.291C228.192 53.5417 228.413 53.7399 228.678 53.8857C228.942 54.027 229.25 54.0977 229.601 54.0977C229.947 54.0977 230.25 54.027 230.51 53.8857C230.774 53.7399 230.993 53.5417 231.166 53.291C231.339 53.0404 231.469 52.7533 231.556 52.4297C231.647 52.1016 231.692 51.7529 231.692 51.3838V51.2266C231.692 50.862 231.647 50.5179 231.556 50.1943C231.469 49.8662 231.337 49.5768 231.159 49.3262C230.986 49.071 230.767 48.8704 230.503 48.7246C230.243 48.5788 229.938 48.5059 229.587 48.5059C229.241 48.5059 228.935 48.5788 228.671 48.7246C228.411 48.8704 228.192 49.071 228.015 49.3262C227.841 49.5768 227.712 49.8662 227.625 50.1943C227.538 50.5179 227.495 50.862 227.495 51.2266ZM235.814 49.1826V55H234.55V47.6035H235.746L235.814 49.1826ZM235.514 51.0215L234.987 51.001C234.992 50.4951 235.067 50.028 235.213 49.5996C235.359 49.1667 235.564 48.7907 235.828 48.4717C236.092 48.1527 236.407 47.9066 236.771 47.7334C237.141 47.5557 237.549 47.4668 237.995 47.4668C238.36 47.4668 238.688 47.5169 238.979 47.6172C239.271 47.7129 239.52 47.8678 239.725 48.082C239.934 48.2962 240.094 48.5742 240.203 48.916C240.312 49.2533 240.367 49.6657 240.367 50.1533V55H239.096V50.1396C239.096 49.7523 239.039 49.4424 238.925 49.21C238.811 48.973 238.645 48.8021 238.426 48.6973C238.207 48.5879 237.938 48.5332 237.619 48.5332C237.305 48.5332 237.018 48.5993 236.758 48.7314C236.503 48.8636 236.282 49.0459 236.095 49.2783C235.912 49.5107 235.769 49.7773 235.664 50.0781C235.564 50.3743 235.514 50.6888 235.514 51.0215Z",
  fill: "#64748B"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M24 64C19.86 64 16.5 67.36 16.5 71.5C16.5 75.64 19.86 79 24 79C28.14 79 31.5 75.64 31.5 71.5C31.5 67.36 28.14 64 24 64ZM24 77.5C20.685 77.5 18 74.815 18 71.5C18 68.185 20.685 65.5 24 65.5C27.315 65.5 30 68.185 30 71.5C30 74.815 27.315 77.5 24 77.5Z",
  fill: "#64748B"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M42.9443 75.0034V76H38.0503V75.0034H42.9443ZM38.2979 66.7578V76H37.0728V66.7578H38.2979ZM42.2969 70.7314V71.728H38.0503V70.7314H42.2969ZM42.8809 66.7578V67.7607H38.0503V66.7578H42.8809ZM46.7275 71.5884V72.5532H43.6299V71.5884H46.7275ZM49.0444 70.4966V76H47.8638V69.1318H48.981L49.0444 70.4966ZM48.8032 72.3057L48.2573 72.2866C48.2616 71.8169 48.3229 71.3831 48.4414 70.9854C48.5599 70.5833 48.7355 70.2342 48.9683 69.938C49.201 69.6418 49.4909 69.4132 49.8379 69.2524C50.1849 69.0874 50.5869 69.0049 51.0439 69.0049C51.3656 69.0049 51.6618 69.0514 51.9326 69.1445C52.2035 69.2334 52.4383 69.3752 52.6372 69.5698C52.8361 69.7645 52.9906 70.0142 53.1006 70.3188C53.2106 70.6235 53.2656 70.9917 53.2656 71.4233V76H52.0913V71.4805C52.0913 71.1208 52.0299 70.833 51.9072 70.6172C51.7887 70.4014 51.6195 70.2448 51.3994 70.1475C51.1794 70.0459 50.9212 69.9951 50.625 69.9951C50.278 69.9951 49.9881 70.0565 49.7554 70.1792C49.5226 70.3019 49.3364 70.4712 49.1968 70.687C49.0571 70.9028 48.9556 71.1504 48.8921 71.4297C48.8328 71.7048 48.8032 71.9967 48.8032 72.3057ZM53.2529 71.6582L52.4658 71.8994C52.4701 71.5228 52.5314 71.161 52.6499 70.814C52.7726 70.467 52.9482 70.158 53.1768 69.8872C53.4095 69.6164 53.6951 69.4027 54.0337 69.2461C54.3722 69.0853 54.7594 69.0049 55.1953 69.0049C55.5635 69.0049 55.8893 69.0535 56.1729 69.1509C56.4606 69.2482 56.7018 69.3984 56.8965 69.6016C57.0954 69.8005 57.2456 70.0565 57.3472 70.3696C57.4487 70.6828 57.4995 71.0552 57.4995 71.4868V76H56.3188V71.4741C56.3188 71.089 56.2575 70.7907 56.1348 70.5791C56.0163 70.3633 55.847 70.2131 55.627 70.1284C55.4111 70.0396 55.153 69.9951 54.8525 69.9951C54.5944 69.9951 54.3659 70.0396 54.167 70.1284C53.9681 70.2173 53.8009 70.34 53.6655 70.4966C53.5301 70.6489 53.4264 70.8245 53.3545 71.0234C53.2868 71.2223 53.2529 71.4339 53.2529 71.6582ZM63.3267 74.8257V71.29C63.3267 71.0192 63.2716 70.7843 63.1616 70.5854C63.0558 70.3823 62.895 70.2257 62.6792 70.1157C62.4634 70.0057 62.1968 69.9507 61.8794 69.9507C61.5832 69.9507 61.3229 70.0015 61.0986 70.103C60.8786 70.2046 60.7051 70.3379 60.5781 70.5029C60.4554 70.668 60.394 70.8457 60.394 71.0361H59.2197C59.2197 70.7907 59.2832 70.5474 59.4102 70.3062C59.5371 70.0649 59.7191 69.847 59.9561 69.6523C60.1973 69.4535 60.485 69.2969 60.8193 69.1826C61.1579 69.0641 61.5345 69.0049 61.9492 69.0049C62.4486 69.0049 62.8887 69.0895 63.2695 69.2588C63.6546 69.4281 63.9551 69.6841 64.1709 70.0269C64.391 70.3654 64.501 70.7907 64.501 71.3027V74.502C64.501 74.7305 64.52 74.9738 64.5581 75.2319C64.6004 75.4901 64.6618 75.7122 64.7422 75.8984V76H63.5171C63.4578 75.8646 63.4113 75.6847 63.3774 75.4604C63.3436 75.2319 63.3267 75.0203 63.3267 74.8257ZM63.5298 71.8359L63.5425 72.6611H62.3555C62.0212 72.6611 61.7228 72.6886 61.4604 72.7437C61.1981 72.7944 60.978 72.8727 60.8003 72.9785C60.6226 73.0843 60.4871 73.2176 60.394 73.3784C60.3009 73.535 60.2544 73.7191 60.2544 73.9307C60.2544 74.1465 60.3031 74.3433 60.4004 74.521C60.4977 74.6987 60.6437 74.8405 60.8384 74.9463C61.0373 75.0479 61.2806 75.0986 61.5684 75.0986C61.9281 75.0986 62.2454 75.0225 62.5205 74.8701C62.7956 74.7178 63.0135 74.5316 63.1743 74.3115C63.3394 74.0915 63.4282 73.8778 63.4409 73.6704L63.9424 74.2354C63.9128 74.4131 63.8324 74.6099 63.7012 74.8257C63.57 75.0415 63.3944 75.2489 63.1743 75.4478C62.9585 75.6424 62.7004 75.8053 62.3999 75.9365C62.1037 76.0635 61.7694 76.127 61.397 76.127C60.9315 76.127 60.5231 76.036 60.1719 75.854C59.8249 75.672 59.554 75.4287 59.3594 75.124C59.1689 74.8151 59.0737 74.4702 59.0737 74.0894C59.0737 73.7212 59.1457 73.3975 59.2896 73.1182C59.4334 72.8346 59.6408 72.5998 59.9116 72.4136C60.1825 72.2231 60.5083 72.0793 60.8892 71.9819C61.27 71.8846 61.6953 71.8359 62.165 71.8359H63.5298ZM67.624 69.1318V76H66.4434V69.1318H67.624ZM66.3545 67.3101C66.3545 67.1196 66.4116 66.9588 66.5259 66.8276C66.6444 66.6965 66.8179 66.6309 67.0464 66.6309C67.2707 66.6309 67.4421 66.6965 67.5605 66.8276C67.6833 66.9588 67.7446 67.1196 67.7446 67.3101C67.7446 67.492 67.6833 67.6486 67.5605 67.7798C67.4421 67.9067 67.2707 67.9702 67.0464 67.9702C66.8179 67.9702 66.6444 67.9067 66.5259 67.7798C66.4116 67.6486 66.3545 67.492 66.3545 67.3101ZM70.7852 66.25V76H69.6045V66.25H70.7852Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M24 89.75C21.93 89.75 20.25 91.43 20.25 93.5C20.25 95.57 21.93 97.25 24 97.25C26.07 97.25 27.75 95.57 27.75 93.5C27.75 91.43 26.07 89.75 24 89.75ZM24 86C19.86 86 16.5 89.36 16.5 93.5C16.5 97.64 19.86 101 24 101C28.14 101 31.5 97.64 31.5 93.5C31.5 89.36 28.14 86 24 86ZM24 99.5C20.685 99.5 18 96.815 18 93.5C18 90.185 20.685 87.5 24 87.5C27.315 87.5 30 90.185 30 93.5C30 96.815 27.315 99.5 24 99.5Z",
  fill: "#4272F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40.4814 94.3755H38.0122V93.3789H40.4814C40.9596 93.3789 41.3468 93.3027 41.6431 93.1504C41.9393 92.998 42.1551 92.7865 42.2905 92.5156C42.4302 92.2448 42.5 91.9359 42.5 91.5889C42.5 91.2715 42.4302 90.9731 42.2905 90.6938C42.1551 90.4146 41.9393 90.1903 41.6431 90.021C41.3468 89.8475 40.9596 89.7607 40.4814 89.7607H38.2979V98H37.0728V88.7578H40.4814C41.1797 88.7578 41.77 88.8784 42.2524 89.1196C42.7349 89.3608 43.1009 89.6951 43.3506 90.1226C43.6003 90.5457 43.7251 91.0303 43.7251 91.5762C43.7251 92.1686 43.6003 92.6743 43.3506 93.0933C43.1009 93.5122 42.7349 93.8317 42.2524 94.0518C41.77 94.2676 41.1797 94.3755 40.4814 94.3755ZM46.2705 88.25V98H45.0962V88.25H46.2705ZM45.9912 94.3057L45.5024 94.2866C45.5067 93.8169 45.5765 93.3831 45.7119 92.9854C45.8473 92.5833 46.0378 92.2342 46.2832 91.938C46.5286 91.6418 46.8206 91.4132 47.1592 91.2524C47.502 91.0874 47.8807 91.0049 48.2954 91.0049C48.634 91.0049 48.9386 91.0514 49.2095 91.1445C49.4803 91.2334 49.7109 91.3773 49.9014 91.5762C50.096 91.7751 50.2441 92.0332 50.3457 92.3506C50.4473 92.6637 50.498 93.0467 50.498 93.4995V98H49.3174V93.4868C49.3174 93.1271 49.2645 92.8394 49.1587 92.6235C49.0529 92.4035 48.8984 92.2448 48.6953 92.1475C48.4922 92.0459 48.2425 91.9951 47.9463 91.9951C47.6543 91.9951 47.3877 92.0565 47.1465 92.1792C46.9095 92.3019 46.7043 92.4712 46.5308 92.687C46.3615 92.9028 46.2282 93.1504 46.1309 93.4297C46.0378 93.7048 45.9912 93.9967 45.9912 94.3057ZM51.9453 94.6421V94.4961C51.9453 94.001 52.0173 93.5418 52.1611 93.1187C52.305 92.6912 52.5124 92.321 52.7832 92.0078C53.054 91.6904 53.382 91.445 53.7671 91.2715C54.1522 91.0938 54.5838 91.0049 55.062 91.0049C55.5444 91.0049 55.9782 91.0938 56.3633 91.2715C56.7526 91.445 57.0827 91.6904 57.3535 92.0078C57.6286 92.321 57.8381 92.6912 57.9819 93.1187C58.1258 93.5418 58.1978 94.001 58.1978 94.4961V94.6421C58.1978 95.1372 58.1258 95.5964 57.9819 96.0195C57.8381 96.4427 57.6286 96.813 57.3535 97.1304C57.0827 97.4435 56.7547 97.689 56.3696 97.8667C55.9888 98.0402 55.5571 98.127 55.0747 98.127C54.5923 98.127 54.1585 98.0402 53.7734 97.8667C53.3883 97.689 53.0583 97.4435 52.7832 97.1304C52.5124 96.813 52.305 96.4427 52.1611 96.0195C52.0173 95.5964 51.9453 95.1372 51.9453 94.6421ZM53.1196 94.4961V94.6421C53.1196 94.9849 53.1598 95.3086 53.2402 95.6133C53.3206 95.9137 53.4412 96.1803 53.6021 96.4131C53.7671 96.6458 53.9723 96.8299 54.2178 96.9653C54.4632 97.0965 54.7489 97.1621 55.0747 97.1621C55.3963 97.1621 55.6777 97.0965 55.9189 96.9653C56.1644 96.8299 56.3675 96.6458 56.5283 96.4131C56.6891 96.1803 56.8097 95.9137 56.8901 95.6133C56.9748 95.3086 57.0171 94.9849 57.0171 94.6421V94.4961C57.0171 94.1576 56.9748 93.8381 56.8901 93.5376C56.8097 93.2329 56.687 92.9642 56.522 92.7314C56.3612 92.4945 56.158 92.3083 55.9126 92.1729C55.6714 92.0374 55.3879 91.9697 55.062 91.9697C54.7404 91.9697 54.4569 92.0374 54.2114 92.1729C53.9702 92.3083 53.7671 92.4945 53.6021 92.7314C53.4412 92.9642 53.3206 93.2329 53.2402 93.5376C53.1598 93.8381 53.1196 94.1576 53.1196 94.4961ZM60.8447 92.5981V98H59.6704V91.1318H60.7812L60.8447 92.5981ZM60.5654 94.3057L60.0767 94.2866C60.0809 93.8169 60.1507 93.3831 60.2861 92.9854C60.4215 92.5833 60.612 92.2342 60.8574 91.938C61.1029 91.6418 61.3949 91.4132 61.7334 91.2524C62.0762 91.0874 62.4549 91.0049 62.8696 91.0049C63.2082 91.0049 63.5129 91.0514 63.7837 91.1445C64.0545 91.2334 64.2852 91.3773 64.4756 91.5762C64.6702 91.7751 64.8184 92.0332 64.9199 92.3506C65.0215 92.6637 65.0723 93.0467 65.0723 93.4995V98H63.8916V93.4868C63.8916 93.1271 63.8387 92.8394 63.7329 92.6235C63.6271 92.4035 63.4727 92.2448 63.2695 92.1475C63.0664 92.0459 62.8167 91.9951 62.5205 91.9951C62.2285 91.9951 61.9619 92.0565 61.7207 92.1792C61.4837 92.3019 61.2785 92.4712 61.105 92.687C60.9357 92.9028 60.8024 93.1504 60.7051 93.4297C60.612 93.7048 60.5654 93.9967 60.5654 94.3057ZM69.7061 98.127C69.2279 98.127 68.7941 98.0465 68.4048 97.8857C68.0197 97.7207 67.6875 97.4901 67.4082 97.1938C67.1331 96.8976 66.9215 96.5464 66.7734 96.1401C66.6253 95.7339 66.5513 95.2896 66.5513 94.8071V94.5405C66.5513 93.9819 66.6338 93.4847 66.7988 93.0488C66.9639 92.6087 67.1882 92.2363 67.4717 91.9316C67.7552 91.627 68.0768 91.3963 68.4365 91.2397C68.7962 91.0832 69.1686 91.0049 69.5537 91.0049C70.0446 91.0049 70.4678 91.0895 70.8232 91.2588C71.1829 91.4281 71.4771 91.665 71.7056 91.9697C71.9341 92.2702 72.1034 92.6257 72.2134 93.0361C72.3234 93.4424 72.3784 93.8867 72.3784 94.3691V94.896H67.2495V93.9375H71.2041V93.8486C71.1872 93.5439 71.1237 93.2477 71.0137 92.96C70.9079 92.6722 70.7386 92.4352 70.5059 92.249C70.2731 92.0628 69.9557 91.9697 69.5537 91.9697C69.2871 91.9697 69.0417 92.0269 68.8174 92.1411C68.5931 92.2511 68.4006 92.4162 68.2397 92.6362C68.0789 92.8563 67.9541 93.125 67.8652 93.4424C67.7764 93.7598 67.7319 94.1258 67.7319 94.5405V94.8071C67.7319 95.133 67.7764 95.4398 67.8652 95.7275C67.9583 96.0111 68.0916 96.2607 68.2651 96.4766C68.4429 96.6924 68.6566 96.8617 68.9062 96.9844C69.1602 97.1071 69.4479 97.1685 69.7695 97.1685C70.1842 97.1685 70.5355 97.0838 70.8232 96.9146C71.111 96.7453 71.3628 96.5189 71.5786 96.2354L72.2896 96.8003C72.1414 97.0246 71.9531 97.2383 71.7246 97.4414C71.4961 97.6445 71.2147 97.8096 70.8804 97.9365C70.5503 98.0635 70.1589 98.127 69.7061 98.127Z",
  fill: "#0F172A"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "./editor/blocks/select/edit.js":
/*!**************************************!*\
  !*** ./editor/blocks/select/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview */ "./editor/blocks/select/preview.js");
/* harmony import */ var _components_SelectRadioCheckPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SelectRadioCheckPlaceholder */ "./editor/components/SelectRadioCheckPlaceholder.js");
/* harmony import */ var _components_SelectRadioCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SelectRadioCheck */ "./editor/components/SelectRadioCheck.js");




const {
  __
} = wp.i18n;
const {
  ToolBarFields,
  BlockLabel,
  BlockDescription,
  BlockAdvancedValue,
  BlockName,
  BlockPlaceholder,
  BlockAddPrevButton,
  BlockPrevButtonLabel,
  BlockVisibility,
  BlockClassName,
  FieldControl,
  SwitchPageOnChangeControls
} = JetFBComponents;
const {
  useUniqueNameOnDuplicate
} = JetFBHooks;
const {
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  ToggleControl,
  PanelBody,
  RangeControl
} = wp.components;

/**
 * @param props
 * @returns {JSX.Element[]}
 * @constructor
 */
function SelectEdit(props) {
  var _attributes$multiple_;
  const {
    attributes,
    setAttributes,
    isSelected,
    editProps: {
      uniqKey,
      attrHelp
    }
  } = props;
  const blockProps = useBlockProps();
  useUniqueNameOnDuplicate();
  if (attributes.isPreview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, _preview__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolBarFields, {
    key: uniqKey('ToolBarFields'),
    ...props
  }), !attributes.multiple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SwitchPageOnChangeControls, null), isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('General', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockLabel, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockName, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockDescription, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Value', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAdvancedValue, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Advanced', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockPlaceholder, null), !!attributes.placeholder.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    key: uniqKey('is_disabled_placeholder'),
    label: __('Disable placeholder', 'jet-form-builder'),
    checked: attributes.is_disabled_placeholder,
    onChange: is_disabled_placeholder => setAttributes({
      is_disabled_placeholder
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAddPrevButton, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockPrevButtonLabel, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockVisibility, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockClassName, null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: uniqKey('viewBlock'),
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectRadioCheckPlaceholder__WEBPACK_IMPORTED_MODULE_2__.SelectRadioCheckPlaceholder, {
    scriptData: window.JetFormOptionFieldData,
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectRadioCheck__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    key: "multiple",
    label: __('Is multiple', 'jet-form-builder'),
    checked: attributes.multiple,
    help: attrHelp('multiple'),
    onChange: multiple => setAttributes({
      multiple
    })
  }), attributes.multiple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    label: __('Rows count', 'jet-form-builder'),
    value: (_attributes$multiple_ = attributes.multiple_size) !== null && _attributes$multiple_ !== void 0 ? _attributes$multiple_ : 4,
    onChange: multiple_size => setAttributes({
      multiple_size
    }),
    allowReset: true,
    resetFallbackValue: 4,
    min: 1,
    max: 25
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldControl, {
    type: "custom_settings",
    key: uniqKey('customSettingsFields'),
    ...props
  }))));
}

/***/ }),

/***/ "./editor/blocks/select/index.js":
/*!***************************************!*\
  !*** ./editor/blocks/select/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _shared_blocks_select_block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/blocks/select/edit.js");
/* harmony import */ var _shared_blocks_select_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/blocks/select/block.json */ "../../shared/blocks/select/block.json");



const {
  __
} = wp.i18n;
const {
  createBlock
} = wp.blocks;
const {
  name,
  icon = ''
} = _shared_blocks_select_block_json__WEBPACK_IMPORTED_MODULE_2__;

/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  description: __(`Creates a drop-down list, where the user can choose one option. 
Add as many options in the list as needed as the number of them is not limited.`, 'jet-form-builder'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      isPreview: true
    }
  },
  transforms: {
    to: [{
      type: 'block',
      blocks: ['jet-forms/text-field'],
      transform: attributes => {
        return createBlock('jet-forms/text-field', {
          ...attributes
        });
      },
      priority: 0
    }],
    from: [{
      type: 'block',
      blocks: ['jet-forms/checkbox-field', 'jet-forms/radio-field', 'jet-forms/text-field'],
      transform: attributes => {
        return createBlock(name, {
          ...attributes
        });
      },
      priority: 0
    }]
  }
};


/***/ }),

/***/ "./editor/blocks/select/preview.js":
/*!*****************************************!*\
  !*** ./editor/blocks/select/preview.js ***!
  \*****************************************/
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
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M22.1641 24.835H23.4766C23.4082 25.4639 23.2282 26.0267 22.9365 26.5234C22.6449 27.0202 22.2324 27.4144 21.6992 27.7061C21.166 27.9932 20.5007 28.1367 19.7031 28.1367C19.1198 28.1367 18.5889 28.0273 18.1104 27.8086C17.6364 27.5898 17.2285 27.2799 16.8867 26.8789C16.5449 26.4733 16.2806 25.988 16.0938 25.4229C15.9115 24.8532 15.8203 24.2197 15.8203 23.5225V22.5312C15.8203 21.834 15.9115 21.2028 16.0938 20.6377C16.2806 20.068 16.5472 19.5804 16.8936 19.1748C17.2445 18.7692 17.666 18.457 18.1582 18.2383C18.6504 18.0195 19.2041 17.9102 19.8193 17.9102C20.5713 17.9102 21.207 18.0514 21.7266 18.334C22.2461 18.6165 22.6494 19.0085 22.9365 19.5098C23.2282 20.0065 23.4082 20.583 23.4766 21.2393H22.1641C22.1003 20.7744 21.9818 20.3757 21.8086 20.043C21.6354 19.7057 21.3893 19.446 21.0703 19.2637C20.7513 19.0814 20.3343 18.9902 19.8193 18.9902C19.3773 18.9902 18.9876 19.0745 18.6504 19.2432C18.3177 19.4118 18.0374 19.651 17.8096 19.9609C17.5863 20.2708 17.4176 20.6423 17.3037 21.0752C17.1898 21.5081 17.1328 21.9889 17.1328 22.5176V23.5225C17.1328 24.0101 17.1829 24.4681 17.2832 24.8965C17.388 25.3249 17.5452 25.7008 17.7549 26.0244C17.9645 26.348 18.2311 26.6032 18.5547 26.79C18.8783 26.9723 19.2611 27.0635 19.7031 27.0635C20.2637 27.0635 20.7103 26.9746 21.043 26.7969C21.3757 26.6191 21.6263 26.3639 21.7949 26.0312C21.9681 25.6986 22.0911 25.2998 22.1641 24.835ZM26.3477 17.5V28H25.083V17.5H26.3477ZM26.0469 24.0215L25.5205 24.001C25.5251 23.4951 25.6003 23.028 25.7461 22.5996C25.8919 22.1667 26.097 21.7907 26.3613 21.4717C26.6257 21.1527 26.9401 20.9066 27.3047 20.7334C27.6738 20.5557 28.0817 20.4668 28.5283 20.4668C28.8929 20.4668 29.221 20.5169 29.5127 20.6172C29.8044 20.7129 30.0527 20.8678 30.2578 21.082C30.4674 21.2962 30.627 21.5742 30.7363 21.916C30.8457 22.2533 30.9004 22.6657 30.9004 23.1533V28H29.6289V23.1396C29.6289 22.7523 29.5719 22.4424 29.458 22.21C29.3441 21.973 29.1777 21.8021 28.959 21.6973C28.7402 21.5879 28.4714 21.5332 28.1523 21.5332C27.8379 21.5332 27.5508 21.5993 27.291 21.7314C27.0358 21.8636 26.8148 22.0459 26.6279 22.2783C26.4456 22.5107 26.3021 22.7773 26.1973 23.0781C26.097 23.3743 26.0469 23.6888 26.0469 24.0215ZM32.459 24.3838V24.2266C32.459 23.6934 32.5365 23.1989 32.6914 22.7432C32.8464 22.2829 33.0697 21.8841 33.3613 21.5469C33.653 21.2051 34.0062 20.9408 34.4209 20.7539C34.8356 20.5625 35.3005 20.4668 35.8154 20.4668C36.335 20.4668 36.8021 20.5625 37.2168 20.7539C37.6361 20.9408 37.9915 21.2051 38.2832 21.5469C38.5794 21.8841 38.805 22.2829 38.96 22.7432C39.1149 23.1989 39.1924 23.6934 39.1924 24.2266V24.3838C39.1924 24.917 39.1149 25.4115 38.96 25.8672C38.805 26.3229 38.5794 26.7217 38.2832 27.0635C37.9915 27.4007 37.6383 27.665 37.2236 27.8564C36.8135 28.0433 36.3486 28.1367 35.8291 28.1367C35.3096 28.1367 34.8424 28.0433 34.4277 27.8564C34.013 27.665 33.6576 27.4007 33.3613 27.0635C33.0697 26.7217 32.8464 26.3229 32.6914 25.8672C32.5365 25.4115 32.459 24.917 32.459 24.3838ZM33.7236 24.2266V24.3838C33.7236 24.7529 33.7669 25.1016 33.8535 25.4297C33.9401 25.7533 34.07 26.0404 34.2432 26.291C34.4209 26.5417 34.6419 26.7399 34.9062 26.8857C35.1706 27.027 35.4782 27.0977 35.8291 27.0977C36.1755 27.0977 36.4785 27.027 36.7383 26.8857C37.0026 26.7399 37.2214 26.5417 37.3945 26.291C37.5677 26.0404 37.6976 25.7533 37.7842 25.4297C37.8753 25.1016 37.9209 24.7529 37.9209 24.3838V24.2266C37.9209 23.862 37.8753 23.5179 37.7842 23.1943C37.6976 22.8662 37.5654 22.5768 37.3877 22.3262C37.2145 22.071 36.9958 21.8704 36.7314 21.7246C36.4717 21.5788 36.1663 21.5059 35.8154 21.5059C35.4691 21.5059 35.1637 21.5788 34.8994 21.7246C34.6396 21.8704 34.4209 22.071 34.2432 22.3262C34.07 22.5768 33.9401 22.8662 33.8535 23.1943C33.7669 23.5179 33.7236 23.862 33.7236 24.2266ZM40.4434 24.3838V24.2266C40.4434 23.6934 40.5208 23.1989 40.6758 22.7432C40.8307 22.2829 41.054 21.8841 41.3457 21.5469C41.6374 21.2051 41.9906 20.9408 42.4053 20.7539C42.82 20.5625 43.2848 20.4668 43.7998 20.4668C44.3193 20.4668 44.7865 20.5625 45.2012 20.7539C45.6204 20.9408 45.9759 21.2051 46.2676 21.5469C46.5638 21.8841 46.7894 22.2829 46.9443 22.7432C47.0993 23.1989 47.1768 23.6934 47.1768 24.2266V24.3838C47.1768 24.917 47.0993 25.4115 46.9443 25.8672C46.7894 26.3229 46.5638 26.7217 46.2676 27.0635C45.9759 27.4007 45.6227 27.665 45.208 27.8564C44.7979 28.0433 44.333 28.1367 43.8135 28.1367C43.2939 28.1367 42.8268 28.0433 42.4121 27.8564C41.9974 27.665 41.6419 27.4007 41.3457 27.0635C41.054 26.7217 40.8307 26.3229 40.6758 25.8672C40.5208 25.4115 40.4434 24.917 40.4434 24.3838ZM41.708 24.2266V24.3838C41.708 24.7529 41.7513 25.1016 41.8379 25.4297C41.9245 25.7533 42.0544 26.0404 42.2275 26.291C42.4053 26.5417 42.6263 26.7399 42.8906 26.8857C43.1549 27.027 43.4626 27.0977 43.8135 27.0977C44.1598 27.0977 44.4629 27.027 44.7227 26.8857C44.987 26.7399 45.2057 26.5417 45.3789 26.291C45.5521 26.0404 45.682 25.7533 45.7686 25.4297C45.8597 25.1016 45.9053 24.7529 45.9053 24.3838V24.2266C45.9053 23.862 45.8597 23.5179 45.7686 23.1943C45.682 22.8662 45.5498 22.5768 45.3721 22.3262C45.1989 22.071 44.9801 21.8704 44.7158 21.7246C44.4561 21.5788 44.1507 21.5059 43.7998 21.5059C43.4535 21.5059 43.1481 21.5788 42.8838 21.7246C42.624 21.8704 42.4053 22.071 42.2275 22.3262C42.0544 22.5768 41.9245 22.8662 41.8379 23.1943C41.7513 23.5179 41.708 23.862 41.708 24.2266ZM53.0693 26.0381C53.0693 25.8558 53.0283 25.6872 52.9463 25.5322C52.8688 25.3727 52.707 25.2292 52.4609 25.1016C52.2194 24.9694 51.8548 24.8555 51.3672 24.7598C50.957 24.6732 50.5856 24.5706 50.2529 24.4521C49.9248 24.3337 49.6445 24.1901 49.4121 24.0215C49.1842 23.8529 49.0088 23.6546 48.8857 23.4268C48.7627 23.1989 48.7012 22.9323 48.7012 22.627C48.7012 22.3353 48.765 22.0596 48.8926 21.7998C49.0247 21.54 49.2093 21.3099 49.4463 21.1094C49.6878 20.9089 49.9772 20.7516 50.3145 20.6377C50.6517 20.5238 51.0277 20.4668 51.4424 20.4668C52.0348 20.4668 52.5407 20.5716 52.96 20.7812C53.3792 20.9909 53.7005 21.2712 53.9238 21.6221C54.1471 21.9684 54.2588 22.3535 54.2588 22.7773H52.9941C52.9941 22.5723 52.9326 22.374 52.8096 22.1826C52.6911 21.9867 52.5156 21.8249 52.2832 21.6973C52.0553 21.5697 51.7751 21.5059 51.4424 21.5059C51.0915 21.5059 50.8066 21.5605 50.5879 21.6699C50.3737 21.7747 50.2165 21.9092 50.1162 22.0732C50.0205 22.2373 49.9727 22.4105 49.9727 22.5928C49.9727 22.7295 49.9954 22.8525 50.041 22.9619C50.0911 23.0667 50.1777 23.1647 50.3008 23.2559C50.4238 23.3424 50.597 23.4245 50.8203 23.502C51.0436 23.5794 51.3285 23.6569 51.6748 23.7344C52.2809 23.8711 52.7799 24.0352 53.1719 24.2266C53.5638 24.418 53.8555 24.6527 54.0469 24.9307C54.2383 25.2087 54.334 25.5459 54.334 25.9424C54.334 26.266 54.2656 26.5622 54.1289 26.8311C53.9967 27.0999 53.8031 27.3324 53.5479 27.5283C53.2972 27.7197 52.9964 27.8701 52.6455 27.9795C52.2992 28.0843 51.9095 28.1367 51.4766 28.1367C50.8249 28.1367 50.2734 28.0205 49.8223 27.7881C49.3711 27.5557 49.0293 27.2549 48.7969 26.8857C48.5645 26.5166 48.4482 26.127 48.4482 25.7168H49.7197C49.738 26.0632 49.8382 26.3389 50.0205 26.5439C50.2028 26.7445 50.4261 26.888 50.6904 26.9746C50.9548 27.0566 51.2168 27.0977 51.4766 27.0977C51.8229 27.0977 52.1123 27.0521 52.3447 26.9609C52.5817 26.8698 52.7617 26.7445 52.8848 26.585C53.0078 26.4255 53.0693 26.2432 53.0693 26.0381ZM59.0645 28.1367C58.5495 28.1367 58.0824 28.0501 57.6631 27.877C57.2484 27.6992 56.8906 27.4508 56.5898 27.1318C56.2936 26.8128 56.0658 26.4346 55.9062 25.9971C55.7467 25.5596 55.667 25.0811 55.667 24.5615V24.2744C55.667 23.6729 55.7559 23.1374 55.9336 22.668C56.1113 22.194 56.3529 21.793 56.6582 21.4648C56.9635 21.1367 57.3099 20.8883 57.6973 20.7197C58.0846 20.5511 58.4857 20.4668 58.9004 20.4668C59.429 20.4668 59.8848 20.5579 60.2676 20.7402C60.6549 20.9225 60.9717 21.1777 61.2178 21.5059C61.4639 21.8294 61.6462 22.2122 61.7646 22.6543C61.8831 23.0918 61.9424 23.5703 61.9424 24.0898V24.6572H56.4189V23.625H60.6777V23.5293C60.6595 23.2012 60.5911 22.8822 60.4727 22.5723C60.3587 22.2624 60.1764 22.0072 59.9258 21.8066C59.6751 21.6061 59.3333 21.5059 58.9004 21.5059C58.6133 21.5059 58.349 21.5674 58.1074 21.6904C57.8659 21.8089 57.6585 21.9867 57.4854 22.2236C57.3122 22.4606 57.1777 22.75 57.082 23.0918C56.9863 23.4336 56.9385 23.8278 56.9385 24.2744V24.5615C56.9385 24.9124 56.9863 25.2428 57.082 25.5527C57.1823 25.8581 57.3258 26.127 57.5127 26.3594C57.7041 26.5918 57.9342 26.7741 58.2031 26.9062C58.4766 27.0384 58.7865 27.1045 59.1328 27.1045C59.5794 27.1045 59.9577 27.0133 60.2676 26.8311C60.5775 26.6488 60.8486 26.4049 61.0811 26.0996L61.8467 26.708C61.6872 26.9495 61.4844 27.1797 61.2383 27.3984C60.9922 27.6172 60.6891 27.7949 60.3291 27.9316C59.9736 28.0684 59.5521 28.1367 59.0645 28.1367ZM68.9697 27.2344L71.0273 20.6035H72.3809L69.4141 29.1416C69.3457 29.3239 69.2546 29.5199 69.1406 29.7295C69.0312 29.9437 68.89 30.1465 68.7168 30.3379C68.5436 30.5293 68.334 30.6842 68.0879 30.8027C67.8464 30.9258 67.557 30.9873 67.2197 30.9873C67.1195 30.9873 66.9919 30.9736 66.8369 30.9463C66.682 30.9189 66.5726 30.8962 66.5088 30.8779L66.502 29.8525C66.5384 29.8571 66.5954 29.8617 66.6729 29.8662C66.7549 29.8753 66.8118 29.8799 66.8438 29.8799C67.1309 29.8799 67.3747 29.8411 67.5752 29.7637C67.7757 29.6908 67.9443 29.5654 68.0811 29.3877C68.2223 29.2145 68.3431 28.9753 68.4434 28.6699L68.9697 27.2344ZM67.459 20.6035L69.3799 26.3457L69.708 27.6787L68.7988 28.1436L66.0781 20.6035H67.459ZM73.0781 24.3838V24.2266C73.0781 23.6934 73.1556 23.1989 73.3105 22.7432C73.4655 22.2829 73.6888 21.8841 73.9805 21.5469C74.2721 21.2051 74.6253 20.9408 75.04 20.7539C75.4548 20.5625 75.9196 20.4668 76.4346 20.4668C76.9541 20.4668 77.4212 20.5625 77.8359 20.7539C78.2552 20.9408 78.6107 21.2051 78.9023 21.5469C79.1986 21.8841 79.4242 22.2829 79.5791 22.7432C79.734 23.1989 79.8115 23.6934 79.8115 24.2266V24.3838C79.8115 24.917 79.734 25.4115 79.5791 25.8672C79.4242 26.3229 79.1986 26.7217 78.9023 27.0635C78.6107 27.4007 78.2575 27.665 77.8428 27.8564C77.4326 28.0433 76.9678 28.1367 76.4482 28.1367C75.9287 28.1367 75.4616 28.0433 75.0469 27.8564C74.6322 27.665 74.2767 27.4007 73.9805 27.0635C73.6888 26.7217 73.4655 26.3229 73.3105 25.8672C73.1556 25.4115 73.0781 24.917 73.0781 24.3838ZM74.3428 24.2266V24.3838C74.3428 24.7529 74.3861 25.1016 74.4727 25.4297C74.5592 25.7533 74.6891 26.0404 74.8623 26.291C75.04 26.5417 75.2611 26.7399 75.5254 26.8857C75.7897 27.027 76.0973 27.0977 76.4482 27.0977C76.7946 27.0977 77.0977 27.027 77.3574 26.8857C77.6217 26.7399 77.8405 26.5417 78.0137 26.291C78.1868 26.0404 78.3167 25.7533 78.4033 25.4297C78.4945 25.1016 78.54 24.7529 78.54 24.3838V24.2266C78.54 23.862 78.4945 23.5179 78.4033 23.1943C78.3167 22.8662 78.1846 22.5768 78.0068 22.3262C77.8337 22.071 77.6149 21.8704 77.3506 21.7246C77.0908 21.5788 76.7855 21.5059 76.4346 21.5059C76.0882 21.5059 75.7829 21.5788 75.5186 21.7246C75.2588 21.8704 75.04 22.071 74.8623 22.3262C74.6891 22.5768 74.5592 22.8662 74.4727 23.1943C74.3861 23.5179 74.3428 23.862 74.3428 24.2266ZM85.9229 26.291V20.6035H87.1943V28H85.9844L85.9229 26.291ZM86.1621 24.7324L86.6885 24.7188C86.6885 25.2109 86.6361 25.6667 86.5312 26.0859C86.431 26.5007 86.2669 26.8607 86.0391 27.166C85.8112 27.4714 85.5127 27.7106 85.1436 27.8838C84.7744 28.0524 84.3255 28.1367 83.7969 28.1367C83.4368 28.1367 83.1064 28.0843 82.8057 27.9795C82.5094 27.8747 82.2542 27.7129 82.04 27.4941C81.8258 27.2754 81.6595 26.9906 81.541 26.6396C81.4271 26.2887 81.3701 25.8672 81.3701 25.375V20.6035H82.6348V25.3887C82.6348 25.7214 82.6712 25.9971 82.7441 26.2158C82.8216 26.43 82.9242 26.6009 83.0518 26.7285C83.1839 26.8516 83.3298 26.9382 83.4893 26.9883C83.6533 27.0384 83.8219 27.0635 83.9951 27.0635C84.5329 27.0635 84.959 26.9609 85.2734 26.7559C85.5879 26.5462 85.8135 26.266 85.9502 25.915C86.0915 25.5596 86.1621 25.1654 86.1621 24.7324ZM90.3867 21.7656V28H89.1221V20.6035H90.3525L90.3867 21.7656ZM92.6973 20.5625L92.6904 21.7383C92.5856 21.7155 92.4854 21.7018 92.3896 21.6973C92.2985 21.6882 92.1937 21.6836 92.0752 21.6836C91.7835 21.6836 91.526 21.7292 91.3027 21.8203C91.0794 21.9115 90.8903 22.0391 90.7354 22.2031C90.5804 22.3672 90.4574 22.5632 90.3662 22.791C90.2796 23.0143 90.2227 23.2604 90.1953 23.5293L89.8398 23.7344C89.8398 23.2878 89.8831 22.8685 89.9697 22.4766C90.0609 22.0846 90.1999 21.7383 90.3867 21.4375C90.5736 21.1322 90.8105 20.8952 91.0977 20.7266C91.3893 20.5534 91.7357 20.4668 92.1367 20.4668C92.2279 20.4668 92.3327 20.4782 92.4512 20.501C92.5697 20.5192 92.6517 20.5397 92.6973 20.5625ZM101.646 26.0381C101.646 25.8558 101.604 25.6872 101.522 25.5322C101.445 25.3727 101.283 25.2292 101.037 25.1016C100.796 24.9694 100.431 24.8555 99.9434 24.7598C99.5332 24.6732 99.1618 24.5706 98.8291 24.4521C98.501 24.3337 98.2207 24.1901 97.9883 24.0215C97.7604 23.8529 97.585 23.6546 97.4619 23.4268C97.3389 23.1989 97.2773 22.9323 97.2773 22.627C97.2773 22.3353 97.3411 22.0596 97.4688 21.7998C97.6009 21.54 97.7855 21.3099 98.0225 21.1094C98.264 20.9089 98.5534 20.7516 98.8906 20.6377C99.2279 20.5238 99.6038 20.4668 100.019 20.4668C100.611 20.4668 101.117 20.5716 101.536 20.7812C101.955 20.9909 102.277 21.2712 102.5 21.6221C102.723 21.9684 102.835 22.3535 102.835 22.7773H101.57C101.57 22.5723 101.509 22.374 101.386 22.1826C101.267 21.9867 101.092 21.8249 100.859 21.6973C100.632 21.5697 100.351 21.5059 100.019 21.5059C99.6676 21.5059 99.3828 21.5605 99.1641 21.6699C98.9499 21.7747 98.7926 21.9092 98.6924 22.0732C98.5967 22.2373 98.5488 22.4105 98.5488 22.5928C98.5488 22.7295 98.5716 22.8525 98.6172 22.9619C98.6673 23.0667 98.7539 23.1647 98.877 23.2559C99 23.3424 99.1732 23.4245 99.3965 23.502C99.6198 23.5794 99.9046 23.6569 100.251 23.7344C100.857 23.8711 101.356 24.0352 101.748 24.2266C102.14 24.418 102.432 24.6527 102.623 24.9307C102.814 25.2087 102.91 25.5459 102.91 25.9424C102.91 26.266 102.842 26.5622 102.705 26.8311C102.573 27.0999 102.379 27.3324 102.124 27.5283C101.873 27.7197 101.573 27.8701 101.222 27.9795C100.875 28.0843 100.486 28.1367 100.053 28.1367C99.401 28.1367 98.8496 28.0205 98.3984 27.7881C97.9473 27.5557 97.6055 27.2549 97.373 26.8857C97.1406 26.5166 97.0244 26.127 97.0244 25.7168H98.2959C98.3141 26.0632 98.4144 26.3389 98.5967 26.5439C98.779 26.7445 99.0023 26.888 99.2666 26.9746C99.5309 27.0566 99.793 27.0977 100.053 27.0977C100.399 27.0977 100.688 27.0521 100.921 26.9609C101.158 26.8698 101.338 26.7445 101.461 26.585C101.584 26.4255 101.646 26.2432 101.646 26.0381ZM107.668 20.6035V21.5742H103.669V20.6035H107.668ZM105.022 18.8057H106.287V26.168C106.287 26.4186 106.326 26.6077 106.403 26.7354C106.481 26.863 106.581 26.9473 106.704 26.9883C106.827 27.0293 106.959 27.0498 107.101 27.0498C107.205 27.0498 107.315 27.0407 107.429 27.0225C107.547 26.9997 107.636 26.9814 107.695 26.9678L107.702 28C107.602 28.0319 107.47 28.0615 107.306 28.0889C107.146 28.1208 106.952 28.1367 106.725 28.1367C106.415 28.1367 106.13 28.0752 105.87 27.9521C105.61 27.8291 105.403 27.624 105.248 27.3369C105.098 27.0452 105.022 26.6533 105.022 26.1611V18.8057ZM113.513 26.7354V22.9277C113.513 22.6361 113.453 22.3831 113.335 22.1689C113.221 21.9502 113.048 21.7816 112.815 21.6631C112.583 21.5446 112.296 21.4854 111.954 21.4854C111.635 21.4854 111.355 21.54 111.113 21.6494C110.876 21.7588 110.689 21.9023 110.553 22.0801C110.421 22.2578 110.354 22.4492 110.354 22.6543H109.09C109.09 22.39 109.158 22.1279 109.295 21.8682C109.432 21.6084 109.628 21.3737 109.883 21.1641C110.143 20.9499 110.452 20.7812 110.812 20.6582C111.177 20.5306 111.583 20.4668 112.029 20.4668C112.567 20.4668 113.041 20.5579 113.451 20.7402C113.866 20.9225 114.189 21.1982 114.422 21.5674C114.659 21.932 114.777 22.39 114.777 22.9414V26.3867C114.777 26.6328 114.798 26.8949 114.839 27.1729C114.884 27.4508 114.951 27.6901 115.037 27.8906V28H113.718C113.654 27.8542 113.604 27.6605 113.567 27.4189C113.531 27.1729 113.513 26.945 113.513 26.7354ZM113.731 23.5156L113.745 24.4043H112.467C112.107 24.4043 111.785 24.4339 111.503 24.4932C111.22 24.5479 110.983 24.6322 110.792 24.7461C110.601 24.86 110.455 25.0036 110.354 25.1768C110.254 25.3454 110.204 25.5436 110.204 25.7715C110.204 26.0039 110.257 26.2158 110.361 26.4072C110.466 26.5986 110.623 26.7513 110.833 26.8652C111.047 26.9746 111.309 27.0293 111.619 27.0293C112.007 27.0293 112.348 26.9473 112.645 26.7832C112.941 26.6191 113.175 26.4186 113.349 26.1816C113.526 25.9447 113.622 25.7145 113.636 25.4912L114.176 26.0996C114.144 26.291 114.057 26.5029 113.916 26.7354C113.775 26.9678 113.586 27.1911 113.349 27.4053C113.116 27.6149 112.838 27.7904 112.515 27.9316C112.196 28.0684 111.836 28.1367 111.435 28.1367C110.933 28.1367 110.493 28.0387 110.115 27.8428C109.742 27.6468 109.45 27.3848 109.24 27.0566C109.035 26.724 108.933 26.3525 108.933 25.9424C108.933 25.5459 109.01 25.1973 109.165 24.8965C109.32 24.5911 109.543 24.3382 109.835 24.1377C110.127 23.9326 110.478 23.7777 110.888 23.6729C111.298 23.568 111.756 23.5156 112.262 23.5156H113.731ZM118.735 27.2344L120.793 20.6035H122.146L119.18 29.1416C119.111 29.3239 119.02 29.5199 118.906 29.7295C118.797 29.9437 118.656 30.1465 118.482 30.3379C118.309 30.5293 118.1 30.6842 117.854 30.8027C117.612 30.9258 117.323 30.9873 116.985 30.9873C116.885 30.9873 116.757 30.9736 116.603 30.9463C116.448 30.9189 116.338 30.8962 116.274 30.8779L116.268 29.8525C116.304 29.8571 116.361 29.8617 116.438 29.8662C116.521 29.8753 116.577 29.8799 116.609 29.8799C116.896 29.8799 117.14 29.8411 117.341 29.7637C117.541 29.6908 117.71 29.5654 117.847 29.3877C117.988 29.2145 118.109 28.9753 118.209 28.6699L118.735 27.2344ZM117.225 20.6035L119.146 26.3457L119.474 27.6787L118.564 28.1436L115.844 20.6035H117.225Z",
  fill: "#64748B"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "16",
  y: "37",
  width: "266",
  height: "28",
  rx: "3",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M29.4941 47.0767L26.4346 55.5H25.1841L28.707 46.2578H29.5132L29.4941 47.0767ZM32.0586 55.5L28.9927 47.0767L28.9736 46.2578H29.7798L33.3154 55.5H32.0586ZM31.8999 52.0786V53.0815H26.7075V52.0786H31.8999ZM37.1367 48.6318V49.5332H33.4233V48.6318H37.1367ZM34.6802 46.9624H35.8545V53.7988C35.8545 54.0316 35.8905 54.2072 35.9624 54.3257C36.0343 54.4442 36.1274 54.5225 36.2417 54.5605C36.356 54.5986 36.4787 54.6177 36.6099 54.6177C36.7072 54.6177 36.8088 54.6092 36.9146 54.5923C37.0246 54.5711 37.1071 54.5542 37.1621 54.5415L37.1685 55.5C37.0754 55.5296 36.9526 55.5571 36.8003 55.5825C36.6522 55.6121 36.4723 55.627 36.2607 55.627C35.973 55.627 35.7085 55.5698 35.4673 55.4556C35.2261 55.3413 35.0335 55.1509 34.8896 54.8843C34.75 54.6134 34.6802 54.2495 34.6802 53.7925V46.9624ZM44.6143 48.6318V49.5332H40.9009V48.6318H44.6143ZM42.1577 46.9624H43.332V53.7988C43.332 54.0316 43.368 54.2072 43.4399 54.3257C43.5119 54.4442 43.605 54.5225 43.7192 54.5605C43.8335 54.5986 43.9562 54.6177 44.0874 54.6177C44.1847 54.6177 44.2863 54.6092 44.3921 54.5923C44.5021 54.5711 44.5846 54.5542 44.6396 54.5415L44.646 55.5C44.5529 55.5296 44.4302 55.5571 44.2778 55.5825C44.1297 55.6121 43.9499 55.627 43.7383 55.627C43.4505 55.627 43.186 55.5698 42.9448 55.4556C42.7036 55.3413 42.5111 55.1509 42.3672 54.8843C42.2275 54.6134 42.1577 54.2495 42.1577 53.7925V46.9624ZM47.166 45.75V55.5H45.9917V45.75H47.166ZM46.8867 51.8057L46.3979 51.7866C46.4022 51.3169 46.472 50.8831 46.6074 50.4854C46.7428 50.0833 46.9333 49.7342 47.1787 49.438C47.4242 49.1418 47.7161 48.9132 48.0547 48.7524C48.3975 48.5874 48.7762 48.5049 49.1909 48.5049C49.5295 48.5049 49.8341 48.5514 50.105 48.6445C50.3758 48.7334 50.6064 48.8773 50.7969 49.0762C50.9915 49.2751 51.1396 49.5332 51.2412 49.8506C51.3428 50.1637 51.3936 50.5467 51.3936 50.9995V55.5H50.2129V50.9868C50.2129 50.6271 50.16 50.3394 50.0542 50.1235C49.9484 49.9035 49.7939 49.7448 49.5908 49.6475C49.3877 49.5459 49.138 49.4951 48.8418 49.4951C48.5498 49.4951 48.2832 49.5565 48.042 49.6792C47.805 49.8019 47.5998 49.9712 47.4263 50.187C47.257 50.4028 47.1237 50.6504 47.0264 50.9297C46.9333 51.2048 46.8867 51.4967 46.8867 51.8057ZM56.002 55.627C55.5238 55.627 55.09 55.5465 54.7007 55.3857C54.3156 55.2207 53.9834 54.9901 53.7041 54.6938C53.429 54.3976 53.2174 54.0464 53.0693 53.6401C52.9212 53.2339 52.8472 52.7896 52.8472 52.3071V52.0405C52.8472 51.4819 52.9297 50.9847 53.0947 50.5488C53.2598 50.1087 53.484 49.7363 53.7676 49.4316C54.0511 49.127 54.3727 48.8963 54.7324 48.7397C55.0921 48.5832 55.4645 48.5049 55.8496 48.5049C56.3405 48.5049 56.7637 48.5895 57.1191 48.7588C57.4788 48.9281 57.7729 49.165 58.0015 49.4697C58.23 49.7702 58.3993 50.1257 58.5093 50.5361C58.6193 50.9424 58.6743 51.3867 58.6743 51.8691V52.396H53.5454V51.4375H57.5V51.3486C57.4831 51.0439 57.4196 50.7477 57.3096 50.46C57.2038 50.1722 57.0345 49.9352 56.8018 49.749C56.569 49.5628 56.2516 49.4697 55.8496 49.4697C55.583 49.4697 55.3376 49.5269 55.1133 49.6411C54.889 49.7511 54.6965 49.9162 54.5356 50.1362C54.3748 50.3563 54.25 50.625 54.1611 50.9424C54.0723 51.2598 54.0278 51.6258 54.0278 52.0405V52.3071C54.0278 52.633 54.0723 52.9398 54.1611 53.2275C54.2542 53.5111 54.3875 53.7607 54.561 53.9766C54.7388 54.1924 54.9525 54.3617 55.2021 54.4844C55.4561 54.6071 55.7438 54.6685 56.0654 54.6685C56.4801 54.6685 56.8314 54.5838 57.1191 54.4146C57.4069 54.2453 57.6587 54.0189 57.8745 53.7354L58.5854 54.3003C58.4373 54.5246 58.249 54.7383 58.0205 54.9414C57.792 55.1445 57.5106 55.3096 57.1763 55.4365C56.8462 55.5635 56.4548 55.627 56.002 55.627ZM63.2637 45.75H64.4443V54.167L64.3428 55.5H63.2637V45.75ZM69.0845 52.0088V52.1421C69.0845 52.6414 69.0252 53.1048 68.9067 53.5322C68.7882 53.9554 68.6147 54.3236 68.3862 54.6367C68.1577 54.9499 67.8784 55.1932 67.5483 55.3667C67.2183 55.5402 66.8395 55.627 66.4121 55.627C65.9762 55.627 65.5933 55.5529 65.2632 55.4048C64.9373 55.2524 64.6623 55.0345 64.438 54.751C64.2137 54.4674 64.0339 54.1247 63.8984 53.7227C63.7673 53.3206 63.6763 52.8678 63.6255 52.3643V51.7803C63.6763 51.2725 63.7673 50.8175 63.8984 50.4155C64.0339 50.0135 64.2137 49.6707 64.438 49.3872C64.6623 49.0994 64.9373 48.8815 65.2632 48.7334C65.589 48.5811 65.9678 48.5049 66.3994 48.5049C66.8311 48.5049 67.214 48.5895 67.5483 48.7588C67.8826 48.9238 68.1619 49.1608 68.3862 49.4697C68.6147 49.7786 68.7882 50.1489 68.9067 50.5806C69.0252 51.008 69.0845 51.484 69.0845 52.0088ZM67.9038 52.1421V52.0088C67.9038 51.666 67.8721 51.3444 67.8086 51.0439C67.7451 50.7393 67.6436 50.4727 67.5039 50.2441C67.3643 50.0114 67.1802 49.8294 66.9517 49.6982C66.7231 49.5628 66.4417 49.4951 66.1074 49.4951C65.8112 49.4951 65.5531 49.5459 65.333 49.6475C65.1172 49.749 64.9331 49.8866 64.7808 50.0601C64.6284 50.2293 64.5036 50.424 64.4062 50.644C64.3132 50.8599 64.2433 51.0841 64.1968 51.3169V52.8467C64.2645 53.1429 64.3745 53.4285 64.5269 53.7036C64.6834 53.9744 64.8908 54.1966 65.1489 54.3701C65.4113 54.5436 65.735 54.6304 66.1201 54.6304C66.4375 54.6304 66.7083 54.5669 66.9326 54.4399C67.1611 54.3088 67.3452 54.1289 67.4849 53.9004C67.6287 53.6719 67.7345 53.4074 67.8022 53.1069C67.87 52.8065 67.9038 52.4849 67.9038 52.1421ZM73.4199 55.627C72.9417 55.627 72.508 55.5465 72.1187 55.3857C71.7336 55.2207 71.4014 54.9901 71.1221 54.6938C70.847 54.3976 70.6354 54.0464 70.4873 53.6401C70.3392 53.2339 70.2651 52.7896 70.2651 52.3071V52.0405C70.2651 51.4819 70.3477 50.9847 70.5127 50.5488C70.6777 50.1087 70.902 49.7363 71.1855 49.4316C71.4691 49.127 71.7907 48.8963 72.1504 48.7397C72.5101 48.5832 72.8825 48.5049 73.2676 48.5049C73.7585 48.5049 74.1816 48.5895 74.5371 48.7588C74.8968 48.9281 75.1909 49.165 75.4194 49.4697C75.6479 49.7702 75.8172 50.1257 75.9272 50.5361C76.0373 50.9424 76.0923 51.3867 76.0923 51.8691V52.396H70.9634V51.4375H74.918V51.3486C74.901 51.0439 74.8376 50.7477 74.7275 50.46C74.6217 50.1722 74.4525 49.9352 74.2197 49.749C73.987 49.5628 73.6696 49.4697 73.2676 49.4697C73.001 49.4697 72.7555 49.5269 72.5312 49.6411C72.307 49.7511 72.1144 49.9162 71.9536 50.1362C71.7928 50.3563 71.668 50.625 71.5791 50.9424C71.4902 51.2598 71.4458 51.6258 71.4458 52.0405V52.3071C71.4458 52.633 71.4902 52.9398 71.5791 53.2275C71.6722 53.5111 71.8055 53.7607 71.979 53.9766C72.1567 54.1924 72.3704 54.3617 72.6201 54.4844C72.874 54.6071 73.1618 54.6685 73.4834 54.6685C73.8981 54.6685 74.2493 54.5838 74.5371 54.4146C74.8249 54.2453 75.0767 54.0189 75.2925 53.7354L76.0034 54.3003C75.8553 54.5246 75.667 54.7383 75.4385 54.9414C75.21 55.1445 74.9285 55.3096 74.5942 55.4365C74.2642 55.5635 73.8727 55.627 73.4199 55.627ZM81.5132 54.3257V50.79C81.5132 50.5192 81.4582 50.2843 81.3481 50.0854C81.2424 49.8823 81.0815 49.7257 80.8657 49.6157C80.6499 49.5057 80.3833 49.4507 80.0659 49.4507C79.7697 49.4507 79.5094 49.5015 79.2852 49.603C79.0651 49.7046 78.8916 49.8379 78.7646 50.0029C78.6419 50.168 78.5806 50.3457 78.5806 50.5361H77.4062C77.4062 50.2907 77.4697 50.0474 77.5967 49.8062C77.7236 49.5649 77.9056 49.347 78.1426 49.1523C78.3838 48.9535 78.6715 48.7969 79.0059 48.6826C79.3444 48.5641 79.721 48.5049 80.1357 48.5049C80.6351 48.5049 81.0752 48.5895 81.4561 48.7588C81.8411 48.9281 82.1416 49.1841 82.3574 49.5269C82.5775 49.8654 82.6875 50.2907 82.6875 50.8027V54.002C82.6875 54.2305 82.7065 54.4738 82.7446 54.7319C82.7869 54.9901 82.8483 55.2122 82.9287 55.3984V55.5H81.7036C81.6444 55.3646 81.5978 55.1847 81.564 54.9604C81.5301 54.7319 81.5132 54.5203 81.5132 54.3257ZM81.7163 51.3359L81.729 52.1611H80.542C80.2077 52.1611 79.9093 52.1886 79.647 52.2437C79.3846 52.2944 79.1646 52.3727 78.9868 52.4785C78.8091 52.5843 78.6737 52.7176 78.5806 52.8784C78.4875 53.035 78.4409 53.2191 78.4409 53.4307C78.4409 53.6465 78.4896 53.8433 78.5869 54.021C78.6842 54.1987 78.8302 54.3405 79.0249 54.4463C79.2238 54.5479 79.4671 54.5986 79.7549 54.5986C80.1146 54.5986 80.432 54.5225 80.707 54.3701C80.9821 54.2178 81.2 54.0316 81.3608 53.8115C81.5259 53.5915 81.6147 53.3778 81.6274 53.1704L82.1289 53.7354C82.0993 53.9131 82.0189 54.1099 81.8877 54.3257C81.7565 54.5415 81.5809 54.7489 81.3608 54.9478C81.145 55.1424 80.8869 55.3053 80.5864 55.4365C80.2902 55.5635 79.9559 55.627 79.5835 55.627C79.118 55.627 78.7096 55.536 78.3584 55.354C78.0114 55.172 77.7406 54.9287 77.5459 54.624C77.3555 54.3151 77.2603 53.9702 77.2603 53.5894C77.2603 53.2212 77.3322 52.8975 77.4761 52.6182C77.62 52.3346 77.8273 52.0998 78.0981 51.9136C78.369 51.7231 78.6948 51.5793 79.0757 51.4819C79.4565 51.3846 79.8818 51.3359 80.3516 51.3359H81.7163ZM87.2832 54.6621C87.5625 54.6621 87.8206 54.605 88.0576 54.4907C88.2946 54.3765 88.4893 54.2199 88.6416 54.021C88.7939 53.8179 88.8807 53.5872 88.9019 53.3291H90.019C89.9979 53.7354 89.8604 54.1141 89.6064 54.4653C89.3568 54.8123 89.0288 55.0938 88.6226 55.3096C88.2163 55.5212 87.7699 55.627 87.2832 55.627C86.7669 55.627 86.3162 55.536 85.9312 55.354C85.5503 55.172 85.2329 54.9224 84.979 54.605C84.7293 54.2876 84.541 53.9237 84.4141 53.5132C84.2913 53.0985 84.23 52.6605 84.23 52.1992V51.9326C84.23 51.4714 84.2913 51.0355 84.4141 50.625C84.541 50.2103 84.7293 49.8442 84.979 49.5269C85.2329 49.2095 85.5503 48.9598 85.9312 48.7778C86.3162 48.5959 86.7669 48.5049 87.2832 48.5049C87.8206 48.5049 88.2904 48.6149 88.6924 48.835C89.0944 49.0508 89.4097 49.347 89.6382 49.7236C89.8709 50.096 89.9979 50.5192 90.019 50.9932H88.9019C88.8807 50.7096 88.8003 50.4536 88.6606 50.2251C88.5252 49.9966 88.339 49.8146 88.1021 49.6792C87.8693 49.5396 87.5964 49.4697 87.2832 49.4697C86.9235 49.4697 86.6209 49.5417 86.3755 49.6855C86.1343 49.8252 85.9417 50.0156 85.7979 50.2568C85.6582 50.4938 85.5566 50.7583 85.4932 51.0503C85.4339 51.3381 85.4043 51.6322 85.4043 51.9326V52.1992C85.4043 52.4997 85.4339 52.7959 85.4932 53.0879C85.5524 53.3799 85.6519 53.6444 85.7915 53.8813C85.9354 54.1183 86.1279 54.3088 86.3691 54.4526C86.6146 54.5923 86.9193 54.6621 87.2832 54.6621ZM92.5137 45.75V55.5H91.3394V45.75H92.5137ZM92.2344 51.8057L91.7456 51.7866C91.7498 51.3169 91.8197 50.8831 91.9551 50.4854C92.0905 50.0833 92.2809 49.7342 92.5264 49.438C92.7718 49.1418 93.0638 48.9132 93.4023 48.7524C93.7451 48.5874 94.1239 48.5049 94.5386 48.5049C94.8771 48.5049 95.1818 48.5514 95.4526 48.6445C95.7235 48.7334 95.9541 48.8773 96.1445 49.0762C96.3392 49.2751 96.4873 49.5332 96.5889 49.8506C96.6904 50.1637 96.7412 50.5467 96.7412 50.9995V55.5H95.5605V50.9868C95.5605 50.6271 95.5076 50.3394 95.4019 50.1235C95.2961 49.9035 95.1416 49.7448 94.9385 49.6475C94.7354 49.5459 94.4857 49.4951 94.1895 49.4951C93.8975 49.4951 93.6309 49.5565 93.3896 49.6792C93.1527 49.8019 92.9474 49.9712 92.7739 50.187C92.6047 50.4028 92.4714 50.6504 92.374 50.9297C92.2809 51.2048 92.2344 51.4967 92.2344 51.8057Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  clipPath: "url(#clip0_76_1273)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M256 49L261 54L266 49H256Z",
  fill: "#64748B"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "16",
  y: "37",
  width: "266",
  height: "28",
  rx: "3",
  stroke: "#4272F9",
  strokeWidth: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 69C15 66.7909 16.7909 65 19 65H279C281.209 65 283 66.7909 283 69V91.3333H15V69Z",
  fill: "#4272F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M29.4941 74.2434L26.4346 82.6667H25.1841L28.707 73.4246H29.5132L29.4941 74.2434ZM32.0586 82.6667L28.9927 74.2434L28.9736 73.4246H29.7798L33.3154 82.6667H32.0586ZM31.8999 79.2454V80.2483H26.7075V79.2454H31.8999ZM37.1367 75.7986V76.7H33.4233V75.7986H37.1367ZM34.6802 74.1292H35.8545V80.9656C35.8545 81.1983 35.8905 81.3739 35.9624 81.4924C36.0343 81.6109 36.1274 81.6892 36.2417 81.7273C36.356 81.7654 36.4787 81.7844 36.6099 81.7844C36.7072 81.7844 36.8088 81.776 36.9146 81.759C37.0246 81.7379 37.1071 81.7209 37.1621 81.7083L37.1685 82.6667C37.0754 82.6964 36.9526 82.7239 36.8003 82.7493C36.6522 82.7789 36.4723 82.7937 36.2607 82.7937C35.973 82.7937 35.7085 82.7366 35.4673 82.6223C35.2261 82.5081 35.0335 82.3176 34.8896 82.051C34.75 81.7802 34.6802 81.4163 34.6802 80.9592V74.1292ZM44.6143 75.7986V76.7H40.9009V75.7986H44.6143ZM42.1577 74.1292H43.332V80.9656C43.332 81.1983 43.368 81.3739 43.4399 81.4924C43.5119 81.6109 43.605 81.6892 43.7192 81.7273C43.8335 81.7654 43.9562 81.7844 44.0874 81.7844C44.1847 81.7844 44.2863 81.776 44.3921 81.759C44.5021 81.7379 44.5846 81.7209 44.6396 81.7083L44.646 82.6667C44.5529 82.6964 44.4302 82.7239 44.2778 82.7493C44.1297 82.7789 43.9499 82.7937 43.7383 82.7937C43.4505 82.7937 43.186 82.7366 42.9448 82.6223C42.7036 82.5081 42.5111 82.3176 42.3672 82.051C42.2275 81.7802 42.1577 81.4163 42.1577 80.9592V74.1292ZM47.166 72.9167V82.6667H45.9917V72.9167H47.166ZM46.8867 78.9724L46.3979 78.9534C46.4022 78.4836 46.472 78.0499 46.6074 77.6521C46.7428 77.2501 46.9333 76.901 47.1787 76.6047C47.4242 76.3085 47.7161 76.08 48.0547 75.9192C48.3975 75.7542 48.7762 75.6716 49.1909 75.6716C49.5295 75.6716 49.8341 75.7182 50.105 75.8113C50.3758 75.9001 50.6064 76.044 50.7969 76.2429C50.9915 76.4418 51.1396 76.7 51.2412 77.0173C51.3428 77.3305 51.3936 77.7135 51.3936 78.1663V82.6667H50.2129V78.1536C50.2129 77.7939 50.16 77.5061 50.0542 77.2903C49.9484 77.0702 49.7939 76.9115 49.5908 76.8142C49.3877 76.7126 49.138 76.6619 48.8418 76.6619C48.5498 76.6619 48.2832 76.7232 48.042 76.8459C47.805 76.9687 47.5998 77.1379 47.4263 77.3538C47.257 77.5696 47.1237 77.8171 47.0264 78.0964C46.9333 78.3715 46.8867 78.6635 46.8867 78.9724ZM56.002 82.7937C55.5238 82.7937 55.09 82.7133 54.7007 82.5525C54.3156 82.3875 53.9834 82.1568 53.7041 81.8606C53.429 81.5644 53.2174 81.2131 53.0693 80.8069C52.9212 80.4006 52.8472 79.9563 52.8472 79.4739V79.2073C52.8472 78.6487 52.9297 78.1514 53.0947 77.7156C53.2598 77.2755 53.484 76.9031 53.7676 76.5984C54.0511 76.2937 54.3727 76.0631 54.7324 75.9065C55.0921 75.7499 55.4645 75.6716 55.8496 75.6716C56.3405 75.6716 56.7637 75.7563 57.1191 75.9255C57.4788 76.0948 57.7729 76.3318 58.0015 76.6365C58.23 76.9369 58.3993 77.2924 58.5093 77.7029C58.6193 78.1091 58.6743 78.5535 58.6743 79.0359V79.5627H53.5454V78.6042H57.5V78.5154C57.4831 78.2107 57.4196 77.9145 57.3096 77.6267C57.2038 77.3389 57.0345 77.102 56.8018 76.9158C56.569 76.7296 56.2516 76.6365 55.8496 76.6365C55.583 76.6365 55.3376 76.6936 55.1133 76.8079C54.889 76.9179 54.6965 77.0829 54.5356 77.303C54.3748 77.523 54.25 77.7917 54.1611 78.1091C54.0723 78.4265 54.0278 78.7926 54.0278 79.2073V79.4739C54.0278 79.7997 54.0723 80.1065 54.1611 80.3943C54.2542 80.6778 54.3875 80.9275 54.561 81.1433C54.7388 81.3591 54.9525 81.5284 55.2021 81.6511C55.4561 81.7738 55.7438 81.8352 56.0654 81.8352C56.4801 81.8352 56.8314 81.7506 57.1191 81.5813C57.4069 81.412 57.6587 81.1856 57.8745 80.9021L58.5854 81.467C58.4373 81.6913 58.249 81.905 58.0205 82.1082C57.792 82.3113 57.5106 82.4763 57.1763 82.6033C56.8462 82.7302 56.4548 82.7937 56.002 82.7937ZM63.2637 72.9167H64.4443V81.3337L64.3428 82.6667H63.2637V72.9167ZM69.0845 79.1755V79.3088C69.0845 79.8082 69.0252 80.2716 68.9067 80.699C68.7882 81.1222 68.6147 81.4903 68.3862 81.8035C68.1577 82.1166 67.8784 82.3599 67.5483 82.5334C67.2183 82.7069 66.8395 82.7937 66.4121 82.7937C65.9762 82.7937 65.5933 82.7196 65.2632 82.5715C64.9373 82.4192 64.6623 82.2013 64.438 81.9177C64.2137 81.6342 64.0339 81.2914 63.8984 80.8894C63.7673 80.4874 63.6763 80.0346 63.6255 79.531V78.947C63.6763 78.4392 63.7673 77.9843 63.8984 77.5823C64.0339 77.1803 64.2137 76.8375 64.438 76.554C64.6623 76.2662 64.9373 76.0483 65.2632 75.9001C65.589 75.7478 65.9678 75.6716 66.3994 75.6716C66.8311 75.6716 67.214 75.7563 67.5483 75.9255C67.8826 76.0906 68.1619 76.3276 68.3862 76.6365C68.6147 76.9454 68.7882 77.3157 68.9067 77.7473C69.0252 78.1747 69.0845 78.6508 69.0845 79.1755ZM67.9038 79.3088V79.1755C67.9038 78.8328 67.8721 78.5111 67.8086 78.2107C67.7451 77.906 67.6436 77.6394 67.5039 77.4109C67.3643 77.1781 67.1802 76.9962 66.9517 76.865C66.7231 76.7296 66.4417 76.6619 66.1074 76.6619C65.8112 76.6619 65.5531 76.7126 65.333 76.8142C65.1172 76.9158 64.9331 77.0533 64.7808 77.2268C64.6284 77.3961 64.5036 77.5907 64.4062 77.8108C64.3132 78.0266 64.2433 78.2509 64.1968 78.4836V80.0134C64.2645 80.3097 64.3745 80.5953 64.5269 80.8704C64.6834 81.1412 64.8908 81.3634 65.1489 81.5369C65.4113 81.7104 65.735 81.7971 66.1201 81.7971C66.4375 81.7971 66.7083 81.7336 66.9326 81.6067C67.1611 81.4755 67.3452 81.2957 67.4849 81.0671C67.6287 80.8386 67.7345 80.5741 67.8022 80.2737C67.87 79.9732 67.9038 79.6516 67.9038 79.3088ZM73.4199 82.7937C72.9417 82.7937 72.508 82.7133 72.1187 82.5525C71.7336 82.3875 71.4014 82.1568 71.1221 81.8606C70.847 81.5644 70.6354 81.2131 70.4873 80.8069C70.3392 80.4006 70.2651 79.9563 70.2651 79.4739V79.2073C70.2651 78.6487 70.3477 78.1514 70.5127 77.7156C70.6777 77.2755 70.902 76.9031 71.1855 76.5984C71.4691 76.2937 71.7907 76.0631 72.1504 75.9065C72.5101 75.7499 72.8825 75.6716 73.2676 75.6716C73.7585 75.6716 74.1816 75.7563 74.5371 75.9255C74.8968 76.0948 75.1909 76.3318 75.4194 76.6365C75.6479 76.9369 75.8172 77.2924 75.9272 77.7029C76.0373 78.1091 76.0923 78.5535 76.0923 79.0359V79.5627H70.9634V78.6042H74.918V78.5154C74.901 78.2107 74.8376 77.9145 74.7275 77.6267C74.6217 77.3389 74.4525 77.102 74.2197 76.9158C73.987 76.7296 73.6696 76.6365 73.2676 76.6365C73.001 76.6365 72.7555 76.6936 72.5312 76.8079C72.307 76.9179 72.1144 77.0829 71.9536 77.303C71.7928 77.523 71.668 77.7917 71.5791 78.1091C71.4902 78.4265 71.4458 78.7926 71.4458 79.2073V79.4739C71.4458 79.7997 71.4902 80.1065 71.5791 80.3943C71.6722 80.6778 71.8055 80.9275 71.979 81.1433C72.1567 81.3591 72.3704 81.5284 72.6201 81.6511C72.874 81.7738 73.1618 81.8352 73.4834 81.8352C73.8981 81.8352 74.2493 81.7506 74.5371 81.5813C74.8249 81.412 75.0767 81.1856 75.2925 80.9021L76.0034 81.467C75.8553 81.6913 75.667 81.905 75.4385 82.1082C75.21 82.3113 74.9285 82.4763 74.5942 82.6033C74.2642 82.7302 73.8727 82.7937 73.4199 82.7937ZM81.5132 81.4924V77.9568C81.5132 77.686 81.4582 77.4511 81.3481 77.2522C81.2424 77.0491 81.0815 76.8925 80.8657 76.7825C80.6499 76.6724 80.3833 76.6174 80.0659 76.6174C79.7697 76.6174 79.5094 76.6682 79.2852 76.7698C79.0651 76.8713 78.8916 77.0046 78.7646 77.1697C78.6419 77.3347 78.5806 77.5125 78.5806 77.7029H77.4062C77.4062 77.4574 77.4697 77.2141 77.5967 76.9729C77.7236 76.7317 77.9056 76.5138 78.1426 76.3191C78.3838 76.1202 78.6715 75.9636 79.0059 75.8494C79.3444 75.7309 79.721 75.6716 80.1357 75.6716C80.6351 75.6716 81.0752 75.7563 81.4561 75.9255C81.8411 76.0948 82.1416 76.3508 82.3574 76.6936C82.5775 77.0321 82.6875 77.4574 82.6875 77.9695V81.1687C82.6875 81.3972 82.7065 81.6405 82.7446 81.8987C82.7869 82.1568 82.8483 82.379 82.9287 82.5652V82.6667H81.7036C81.6444 82.5313 81.5978 82.3515 81.564 82.1272C81.5301 81.8987 81.5132 81.6871 81.5132 81.4924ZM81.7163 78.5027L81.729 79.3279H80.542C80.2077 79.3279 79.9093 79.3554 79.647 79.4104C79.3846 79.4612 79.1646 79.5395 78.9868 79.6453C78.8091 79.7511 78.6737 79.8844 78.5806 80.0452C78.4875 80.2017 78.4409 80.3858 78.4409 80.5974C78.4409 80.8132 78.4896 81.01 78.5869 81.1877C78.6842 81.3655 78.8302 81.5072 79.0249 81.613C79.2238 81.7146 79.4671 81.7654 79.7549 81.7654C80.1146 81.7654 80.432 81.6892 80.707 81.5369C80.9821 81.3845 81.2 81.1983 81.3608 80.9783C81.5259 80.7582 81.6147 80.5445 81.6274 80.3372L82.1289 80.9021C82.0993 81.0798 82.0189 81.2766 81.8877 81.4924C81.7565 81.7083 81.5809 81.9156 81.3608 82.1145C81.145 82.3092 80.8869 82.4721 80.5864 82.6033C80.2902 82.7302 79.9559 82.7937 79.5835 82.7937C79.118 82.7937 78.7096 82.7027 78.3584 82.5208C78.0114 82.3388 77.7406 82.0955 77.5459 81.7908C77.3555 81.4819 77.2603 81.137 77.2603 80.7561C77.2603 80.3879 77.3322 80.0642 77.4761 79.7849C77.62 79.5014 77.8273 79.2665 78.0981 79.0803C78.369 78.8899 78.6948 78.746 79.0757 78.6487C79.4565 78.5514 79.8818 78.5027 80.3516 78.5027H81.7163ZM87.2832 81.8289C87.5625 81.8289 87.8206 81.7717 88.0576 81.6575C88.2946 81.5432 88.4893 81.3866 88.6416 81.1877C88.7939 80.9846 88.8807 80.754 88.9019 80.4958H90.019C89.9979 80.9021 89.8604 81.2808 89.6064 81.6321C89.3568 81.9791 89.0288 82.2605 88.6226 82.4763C88.2163 82.6879 87.7699 82.7937 87.2832 82.7937C86.7669 82.7937 86.3162 82.7027 85.9312 82.5208C85.5503 82.3388 85.2329 82.0891 84.979 81.7717C84.7293 81.4543 84.541 81.0904 84.4141 80.6799C84.2913 80.2652 84.23 79.8272 84.23 79.366V79.0994C84.23 78.6381 84.2913 78.2022 84.4141 77.7917C84.541 77.377 84.7293 77.011 84.979 76.6936C85.2329 76.3762 85.5503 76.1265 85.9312 75.9446C86.3162 75.7626 86.7669 75.6716 87.2832 75.6716C87.8206 75.6716 88.2904 75.7817 88.6924 76.0017C89.0944 76.2175 89.4097 76.5138 89.6382 76.8904C89.8709 77.2628 89.9979 77.686 90.019 78.1599H88.9019C88.8807 77.8764 88.8003 77.6204 88.6606 77.3918C88.5252 77.1633 88.339 76.9814 88.1021 76.8459C87.8693 76.7063 87.5964 76.6365 87.2832 76.6365C86.9235 76.6365 86.6209 76.7084 86.3755 76.8523C86.1343 76.9919 85.9417 77.1824 85.7979 77.4236C85.6582 77.6606 85.5566 77.925 85.4932 78.217C85.4339 78.5048 85.4043 78.7989 85.4043 79.0994V79.366C85.4043 79.6664 85.4339 79.9626 85.4932 80.2546C85.5524 80.5466 85.6519 80.8111 85.7915 81.0481C85.9354 81.2851 86.1279 81.4755 86.3691 81.6194C86.6146 81.759 86.9193 81.8289 87.2832 81.8289ZM92.5137 72.9167V82.6667H91.3394V72.9167H92.5137ZM92.2344 78.9724L91.7456 78.9534C91.7498 78.4836 91.8197 78.0499 91.9551 77.6521C92.0905 77.2501 92.2809 76.901 92.5264 76.6047C92.7718 76.3085 93.0638 76.08 93.4023 75.9192C93.7451 75.7542 94.1239 75.6716 94.5386 75.6716C94.8771 75.6716 95.1818 75.7182 95.4526 75.8113C95.7235 75.9001 95.9541 76.044 96.1445 76.2429C96.3392 76.4418 96.4873 76.7 96.5889 77.0173C96.6904 77.3305 96.7412 77.7135 96.7412 78.1663V82.6667H95.5605V78.1536C95.5605 77.7939 95.5076 77.5061 95.4019 77.2903C95.2961 77.0702 95.1416 76.9115 94.9385 76.8142C94.7354 76.7126 94.4857 76.6619 94.1895 76.6619C93.8975 76.6619 93.6309 76.7232 93.3896 76.8459C93.1527 76.9687 92.9474 77.1379 92.7739 77.3538C92.6047 77.5696 92.4714 77.8171 92.374 78.0964C92.2809 78.3715 92.2344 78.6635 92.2344 78.9724Z",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "268",
  height: "26.3333",
  transform: "translate(15 91.3333)",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M27.2534 104.601L26.314 104.36L26.7773 99.7578H31.519V100.843H27.7739L27.4946 103.357C27.6639 103.26 27.8776 103.169 28.1357 103.084C28.3981 102.999 28.6986 102.957 29.0371 102.957C29.4645 102.957 29.8475 103.031 30.186 103.179C30.5246 103.323 30.8123 103.53 31.0493 103.801C31.2905 104.072 31.4746 104.398 31.6016 104.779C31.7285 105.16 31.792 105.585 31.792 106.055C31.792 106.499 31.7306 106.907 31.6079 107.28C31.4894 107.652 31.3096 107.978 31.0684 108.257C30.8271 108.532 30.5225 108.746 30.1543 108.898C29.7904 109.051 29.3608 109.127 28.8657 109.127C28.4933 109.127 28.14 109.076 27.8057 108.975C27.4756 108.869 27.1794 108.71 26.917 108.499C26.6589 108.283 26.4473 108.016 26.2822 107.699C26.1214 107.377 26.0199 107 25.9775 106.569H27.0947C27.1455 106.916 27.2471 107.208 27.3994 107.445C27.5518 107.682 27.7507 107.862 27.9961 107.984C28.2458 108.103 28.5356 108.162 28.8657 108.162C29.145 108.162 29.3926 108.113 29.6084 108.016C29.8242 107.919 30.0062 107.779 30.1543 107.597C30.3024 107.415 30.4146 107.195 30.4907 106.937C30.5711 106.679 30.6113 106.389 30.6113 106.067C30.6113 105.775 30.5711 105.505 30.4907 105.255C30.4103 105.005 30.2897 104.787 30.1289 104.601C29.9723 104.415 29.7798 104.271 29.5513 104.169C29.3228 104.064 29.0604 104.011 28.7642 104.011C28.3706 104.011 28.0723 104.064 27.8691 104.169C27.6702 104.275 27.465 104.419 27.2534 104.601ZM37.6001 103.497V109H36.4194V102.132H37.5366L37.6001 103.497ZM37.3589 105.306L36.813 105.287C36.8172 104.817 36.8786 104.383 36.9971 103.985C37.1156 103.583 37.2912 103.234 37.5239 102.938C37.7567 102.642 38.0465 102.413 38.3936 102.252C38.7406 102.087 39.1426 102.005 39.5996 102.005C39.9212 102.005 40.2174 102.051 40.4883 102.145C40.7591 102.233 40.994 102.375 41.1929 102.57C41.3918 102.764 41.5462 103.014 41.6562 103.319C41.7663 103.624 41.8213 103.992 41.8213 104.423V109H40.647V104.48C40.647 104.121 40.5856 103.833 40.4629 103.617C40.3444 103.401 40.1751 103.245 39.9551 103.147C39.735 103.046 39.4769 102.995 39.1807 102.995C38.8337 102.995 38.5438 103.056 38.311 103.179C38.0783 103.302 37.8921 103.471 37.7524 103.687C37.6128 103.903 37.5112 104.15 37.4478 104.43C37.3885 104.705 37.3589 104.997 37.3589 105.306ZM41.8086 104.658L41.0215 104.899C41.0257 104.523 41.0871 104.161 41.2056 103.814C41.3283 103.467 41.5039 103.158 41.7324 102.887C41.9652 102.616 42.2508 102.403 42.5894 102.246C42.9279 102.085 43.3151 102.005 43.751 102.005C44.1191 102.005 44.445 102.054 44.7285 102.151C45.0163 102.248 45.2575 102.398 45.4521 102.602C45.651 102.8 45.8013 103.056 45.9028 103.37C46.0044 103.683 46.0552 104.055 46.0552 104.487V109H44.8745V104.474C44.8745 104.089 44.8132 103.791 44.6904 103.579C44.5719 103.363 44.4027 103.213 44.1826 103.128C43.9668 103.04 43.7087 102.995 43.4082 102.995C43.1501 102.995 42.9215 103.04 42.7227 103.128C42.5238 103.217 42.3566 103.34 42.2212 103.497C42.0858 103.649 41.9821 103.825 41.9102 104.023C41.8424 104.222 41.8086 104.434 41.8086 104.658ZM49.1084 102.132V109H47.9277V102.132H49.1084ZM47.8389 100.31C47.8389 100.12 47.896 99.9588 48.0103 99.8276C48.1287 99.6965 48.3022 99.6309 48.5308 99.6309C48.755 99.6309 48.9264 99.6965 49.0449 99.8276C49.1676 99.9588 49.229 100.12 49.229 100.31C49.229 100.492 49.1676 100.649 49.0449 100.78C48.9264 100.907 48.755 100.97 48.5308 100.97C48.3022 100.97 48.1287 100.907 48.0103 100.78C47.896 100.649 47.8389 100.492 47.8389 100.31ZM52.168 103.598V109H50.9937V102.132H52.1045L52.168 103.598ZM51.8887 105.306L51.3999 105.287C51.4041 104.817 51.474 104.383 51.6094 103.985C51.7448 103.583 51.9352 103.234 52.1807 102.938C52.4261 102.642 52.7181 102.413 53.0566 102.252C53.3994 102.087 53.7782 102.005 54.1929 102.005C54.5314 102.005 54.8361 102.051 55.1069 102.145C55.3778 102.233 55.6084 102.377 55.7988 102.576C55.9935 102.775 56.1416 103.033 56.2432 103.351C56.3447 103.664 56.3955 104.047 56.3955 104.5V109H55.2148V104.487C55.2148 104.127 55.1619 103.839 55.0562 103.624C54.9504 103.403 54.7959 103.245 54.5928 103.147C54.3896 103.046 54.14 102.995 53.8438 102.995C53.5518 102.995 53.2852 103.056 53.0439 103.179C52.807 103.302 52.6017 103.471 52.4282 103.687C52.259 103.903 52.1257 104.15 52.0283 104.43C51.9352 104.705 51.8887 104.997 51.8887 105.306ZM62.3813 107.413V102.132H63.562V109H62.4385L62.3813 107.413ZM62.6035 105.966L63.0923 105.953C63.0923 106.41 63.0436 106.833 62.9463 107.223C62.8532 107.608 62.7008 107.942 62.4893 108.226C62.2777 108.509 62.0005 108.731 61.6577 108.892C61.3149 109.049 60.8981 109.127 60.4072 109.127C60.0729 109.127 59.7661 109.078 59.4868 108.981C59.2118 108.884 58.9748 108.733 58.7759 108.53C58.577 108.327 58.4225 108.063 58.3125 107.737C58.2067 107.411 58.1538 107.02 58.1538 106.562V102.132H59.3281V106.575C59.3281 106.884 59.362 107.14 59.4297 107.343C59.5016 107.542 59.5968 107.701 59.7153 107.819C59.8381 107.934 59.9735 108.014 60.1216 108.061C60.2739 108.107 60.4305 108.13 60.5913 108.13C61.0907 108.13 61.4863 108.035 61.7783 107.845C62.0703 107.65 62.2798 107.39 62.4067 107.064C62.5379 106.734 62.6035 106.368 62.6035 105.966ZM68.2275 102.132V103.033H64.5142V102.132H68.2275ZM65.771 100.462H66.9453V107.299C66.9453 107.532 66.9813 107.707 67.0532 107.826C67.1252 107.944 67.2183 108.022 67.3325 108.061C67.4468 108.099 67.5695 108.118 67.7007 108.118C67.798 108.118 67.8996 108.109 68.0054 108.092C68.1154 108.071 68.1979 108.054 68.2529 108.042L68.2593 109C68.1662 109.03 68.0435 109.057 67.8911 109.083C67.743 109.112 67.5632 109.127 67.3516 109.127C67.0638 109.127 66.7993 109.07 66.5581 108.956C66.3169 108.841 66.1243 108.651 65.9805 108.384C65.8408 108.113 65.771 107.75 65.771 107.292V100.462ZM72.4551 109.127C71.9769 109.127 71.5431 109.047 71.1538 108.886C70.7687 108.721 70.4365 108.49 70.1572 108.194C69.8822 107.898 69.6706 107.546 69.5225 107.14C69.3743 106.734 69.3003 106.29 69.3003 105.807V105.541C69.3003 104.982 69.3828 104.485 69.5479 104.049C69.7129 103.609 69.9372 103.236 70.2207 102.932C70.5042 102.627 70.8258 102.396 71.1855 102.24C71.5452 102.083 71.9176 102.005 72.3027 102.005C72.7936 102.005 73.2168 102.09 73.5723 102.259C73.932 102.428 74.2261 102.665 74.4546 102.97C74.6831 103.27 74.8524 103.626 74.9624 104.036C75.0724 104.442 75.1274 104.887 75.1274 105.369V105.896H69.9985V104.938H73.9531V104.849C73.9362 104.544 73.8727 104.248 73.7627 103.96C73.6569 103.672 73.4876 103.435 73.2549 103.249C73.0221 103.063 72.7048 102.97 72.3027 102.97C72.0361 102.97 71.7907 103.027 71.5664 103.141C71.3421 103.251 71.1496 103.416 70.9888 103.636C70.828 103.856 70.7031 104.125 70.6143 104.442C70.5254 104.76 70.481 105.126 70.481 105.541V105.807C70.481 106.133 70.5254 106.44 70.6143 106.728C70.7074 107.011 70.8407 107.261 71.0142 107.477C71.1919 107.692 71.4056 107.862 71.6553 107.984C71.9092 108.107 72.1969 108.168 72.5186 108.168C72.9333 108.168 73.2845 108.084 73.5723 107.915C73.86 107.745 74.1118 107.519 74.3276 107.235L75.0386 107.8C74.8905 108.025 74.7021 108.238 74.4736 108.441C74.2451 108.645 73.9637 108.81 73.6294 108.937C73.2993 109.063 72.9079 109.127 72.4551 109.127ZM80.4976 107.178C80.4976 107.009 80.4595 106.852 80.3833 106.708C80.3114 106.56 80.1611 106.427 79.9326 106.309C79.7083 106.186 79.3698 106.08 78.917 105.991C78.5361 105.911 78.1912 105.816 77.8823 105.706C77.5776 105.596 77.3174 105.462 77.1016 105.306C76.89 105.149 76.7271 104.965 76.6128 104.753C76.4985 104.542 76.4414 104.294 76.4414 104.011C76.4414 103.74 76.5007 103.484 76.6191 103.243C76.7419 103.001 76.9132 102.788 77.1333 102.602C77.3576 102.415 77.6263 102.269 77.9395 102.164C78.2526 102.058 78.6017 102.005 78.9868 102.005C79.5369 102.005 80.0067 102.102 80.396 102.297C80.7853 102.492 81.0837 102.752 81.291 103.078C81.4984 103.399 81.6021 103.757 81.6021 104.15H80.4277C80.4277 103.96 80.3706 103.776 80.2563 103.598C80.1463 103.416 79.9834 103.266 79.7676 103.147C79.556 103.029 79.2957 102.97 78.9868 102.97C78.661 102.97 78.3965 103.021 78.1934 103.122C77.9945 103.219 77.8485 103.344 77.7554 103.497C77.6665 103.649 77.6221 103.81 77.6221 103.979C77.6221 104.106 77.6432 104.22 77.6855 104.322C77.7321 104.419 77.8125 104.51 77.9268 104.595C78.041 104.675 78.2018 104.751 78.4092 104.823C78.6165 104.895 78.881 104.967 79.2026 105.039C79.7655 105.166 80.2288 105.318 80.5928 105.496C80.9567 105.674 81.2275 105.892 81.4053 106.15C81.583 106.408 81.6719 106.721 81.6719 107.089C81.6719 107.39 81.6084 107.665 81.4814 107.915C81.3587 108.164 81.1789 108.38 80.9419 108.562C80.7091 108.74 80.4299 108.879 80.104 108.981C79.7824 109.078 79.4206 109.127 79.0186 109.127C78.4134 109.127 77.9014 109.019 77.4824 108.803C77.0635 108.587 76.7461 108.308 76.5303 107.965C76.3145 107.623 76.2065 107.261 76.2065 106.88H77.3872C77.4041 107.201 77.4972 107.458 77.6665 107.648C77.8358 107.834 78.0431 107.967 78.2886 108.048C78.534 108.124 78.7773 108.162 79.0186 108.162C79.3402 108.162 79.6089 108.12 79.8247 108.035C80.0448 107.951 80.2119 107.834 80.3262 107.686C80.4404 107.538 80.4976 107.369 80.4976 107.178ZM89.3145 102.132V103.033H85.6011V102.132H89.3145ZM86.8579 100.462H88.0322V107.299C88.0322 107.532 88.0682 107.707 88.1401 107.826C88.2121 107.944 88.3052 108.022 88.4194 108.061C88.5337 108.099 88.6564 108.118 88.7876 108.118C88.8849 108.118 88.9865 108.109 89.0923 108.092C89.2023 108.071 89.2848 108.054 89.3398 108.042L89.3462 109C89.2531 109.03 89.1304 109.057 88.978 109.083C88.8299 109.112 88.6501 109.127 88.4385 109.127C88.1507 109.127 87.8862 109.07 87.645 108.956C87.4038 108.841 87.2113 108.651 87.0674 108.384C86.9277 108.113 86.8579 107.75 86.8579 107.292V100.462ZM90.2539 105.642V105.496C90.2539 105.001 90.3258 104.542 90.4697 104.119C90.6136 103.691 90.821 103.321 91.0918 103.008C91.3626 102.69 91.6906 102.445 92.0757 102.271C92.4608 102.094 92.8924 102.005 93.3706 102.005C93.853 102.005 94.2868 102.094 94.6719 102.271C95.0612 102.445 95.3913 102.69 95.6621 103.008C95.9372 103.321 96.1466 103.691 96.2905 104.119C96.4344 104.542 96.5063 105.001 96.5063 105.496V105.642C96.5063 106.137 96.4344 106.596 96.2905 107.02C96.1466 107.443 95.9372 107.813 95.6621 108.13C95.3913 108.444 95.0633 108.689 94.6782 108.867C94.2974 109.04 93.8657 109.127 93.3833 109.127C92.9009 109.127 92.4671 109.04 92.082 108.867C91.6969 108.689 91.3669 108.444 91.0918 108.13C90.821 107.813 90.6136 107.443 90.4697 107.02C90.3258 106.596 90.2539 106.137 90.2539 105.642ZM91.4282 105.496V105.642C91.4282 105.985 91.4684 106.309 91.5488 106.613C91.6292 106.914 91.7498 107.18 91.9106 107.413C92.0757 107.646 92.2809 107.83 92.5264 107.965C92.7718 108.097 93.0575 108.162 93.3833 108.162C93.7049 108.162 93.9863 108.097 94.2275 107.965C94.473 107.83 94.6761 107.646 94.8369 107.413C94.9977 107.18 95.1183 106.914 95.1987 106.613C95.2834 106.309 95.3257 105.985 95.3257 105.642V105.496C95.3257 105.158 95.2834 104.838 95.1987 104.538C95.1183 104.233 94.9956 103.964 94.8306 103.731C94.6698 103.494 94.4666 103.308 94.2212 103.173C93.98 103.037 93.6965 102.97 93.3706 102.97C93.049 102.97 92.7655 103.037 92.52 103.173C92.2788 103.308 92.0757 103.494 91.9106 103.731C91.7498 103.964 91.6292 104.233 91.5488 104.538C91.4684 104.838 91.4282 105.158 91.4282 105.496ZM104.079 102.132V103.033H100.366V102.132H104.079ZM101.623 100.462H102.797V107.299C102.797 107.532 102.833 107.707 102.905 107.826C102.977 107.944 103.07 108.022 103.184 108.061C103.298 108.099 103.421 108.118 103.552 108.118C103.65 108.118 103.751 108.109 103.857 108.092C103.967 108.071 104.049 108.054 104.104 108.042L104.111 109C104.018 109.03 103.895 109.057 103.743 109.083C103.595 109.112 103.415 109.127 103.203 109.127C102.915 109.127 102.651 109.07 102.41 108.956C102.168 108.841 101.976 108.651 101.832 108.384C101.692 108.113 101.623 107.75 101.623 107.292V100.462ZM106.631 99.25V109H105.457V99.25H106.631ZM106.352 105.306L105.863 105.287C105.867 104.817 105.937 104.383 106.072 103.985C106.208 103.583 106.398 103.234 106.644 102.938C106.889 102.642 107.181 102.413 107.52 102.252C107.862 102.087 108.241 102.005 108.656 102.005C108.994 102.005 109.299 102.051 109.57 102.145C109.841 102.233 110.071 102.377 110.262 102.576C110.456 102.775 110.604 103.033 110.706 103.351C110.808 103.664 110.858 104.047 110.858 104.5V109H109.678V104.487C109.678 104.127 109.625 103.839 109.519 103.624C109.413 103.403 109.259 103.245 109.056 103.147C108.853 103.046 108.603 102.995 108.307 102.995C108.015 102.995 107.748 103.056 107.507 103.179C107.27 103.302 107.065 103.471 106.891 103.687C106.722 103.903 106.589 104.15 106.491 104.43C106.398 104.705 106.352 104.997 106.352 105.306ZM115.467 109.127C114.989 109.127 114.555 109.047 114.166 108.886C113.78 108.721 113.448 108.49 113.169 108.194C112.894 107.898 112.682 107.546 112.534 107.14C112.386 106.734 112.312 106.29 112.312 105.807V105.541C112.312 104.982 112.395 104.485 112.56 104.049C112.725 103.609 112.949 103.236 113.232 102.932C113.516 102.627 113.838 102.396 114.197 102.24C114.557 102.083 114.929 102.005 115.314 102.005C115.805 102.005 116.229 102.09 116.584 102.259C116.944 102.428 117.238 102.665 117.466 102.97C117.695 103.27 117.864 103.626 117.974 104.036C118.084 104.442 118.139 104.887 118.139 105.369V105.896H113.01V104.938H116.965V104.849C116.948 104.544 116.884 104.248 116.774 103.96C116.669 103.672 116.499 103.435 116.267 103.249C116.034 103.063 115.716 102.97 115.314 102.97C115.048 102.97 114.802 103.027 114.578 103.141C114.354 103.251 114.161 103.416 114 103.636C113.84 103.856 113.715 104.125 113.626 104.442C113.537 104.76 113.493 105.126 113.493 105.541V105.807C113.493 106.133 113.537 106.44 113.626 106.728C113.719 107.011 113.852 107.261 114.026 107.477C114.204 107.692 114.417 107.862 114.667 107.984C114.921 108.107 115.209 108.168 115.53 108.168C115.945 108.168 116.296 108.084 116.584 107.915C116.872 107.745 117.124 107.519 117.339 107.235L118.05 107.8C117.902 108.025 117.714 108.238 117.485 108.441C117.257 108.645 116.975 108.81 116.641 108.937C116.311 109.063 115.92 109.127 115.467 109.127ZM126.734 107.178C126.734 107.009 126.696 106.852 126.62 106.708C126.548 106.56 126.397 106.427 126.169 106.309C125.945 106.186 125.606 106.08 125.153 105.991C124.772 105.911 124.428 105.816 124.119 105.706C123.814 105.596 123.554 105.462 123.338 105.306C123.126 105.149 122.963 104.965 122.849 104.753C122.735 104.542 122.678 104.294 122.678 104.011C122.678 103.74 122.737 103.484 122.855 103.243C122.978 103.001 123.15 102.788 123.37 102.602C123.594 102.415 123.863 102.269 124.176 102.164C124.489 102.058 124.838 102.005 125.223 102.005C125.773 102.005 126.243 102.102 126.632 102.297C127.022 102.492 127.32 102.752 127.527 103.078C127.735 103.399 127.838 103.757 127.838 104.15H126.664C126.664 103.96 126.607 103.776 126.493 103.598C126.383 103.416 126.22 103.266 126.004 103.147C125.792 103.029 125.532 102.97 125.223 102.97C124.897 102.97 124.633 103.021 124.43 103.122C124.231 103.219 124.085 103.344 123.992 103.497C123.903 103.649 123.858 103.81 123.858 103.979C123.858 104.106 123.88 104.22 123.922 104.322C123.968 104.419 124.049 104.51 124.163 104.595C124.277 104.675 124.438 104.751 124.646 104.823C124.853 104.895 125.117 104.967 125.439 105.039C126.002 105.166 126.465 105.318 126.829 105.496C127.193 105.674 127.464 105.892 127.642 106.15C127.819 106.408 127.908 106.721 127.908 107.089C127.908 107.39 127.845 107.665 127.718 107.915C127.595 108.164 127.415 108.38 127.178 108.562C126.945 108.74 126.666 108.879 126.34 108.981C126.019 109.078 125.657 109.127 125.255 109.127C124.65 109.127 124.138 109.019 123.719 108.803C123.3 108.587 122.982 108.308 122.767 107.965C122.551 107.623 122.443 107.261 122.443 106.88H123.624C123.64 107.201 123.734 107.458 123.903 107.648C124.072 107.834 124.279 107.967 124.525 108.048C124.77 108.124 125.014 108.162 125.255 108.162C125.576 108.162 125.845 108.12 126.061 108.035C126.281 107.951 126.448 107.834 126.562 107.686C126.677 107.538 126.734 107.369 126.734 107.178ZM130.625 99.25V109H129.451V99.25H130.625ZM130.346 105.306L129.857 105.287C129.861 104.817 129.931 104.383 130.066 103.985C130.202 103.583 130.392 103.234 130.638 102.938C130.883 102.642 131.175 102.413 131.514 102.252C131.856 102.087 132.235 102.005 132.65 102.005C132.988 102.005 133.293 102.051 133.564 102.145C133.835 102.233 134.065 102.377 134.256 102.576C134.451 102.775 134.599 103.033 134.7 103.351C134.802 103.664 134.853 104.047 134.853 104.5V109H133.672V104.487C133.672 104.127 133.619 103.839 133.513 103.624C133.407 103.403 133.253 103.245 133.05 103.147C132.847 103.046 132.597 102.995 132.301 102.995C132.009 102.995 131.742 103.056 131.501 103.179C131.264 103.302 131.059 103.471 130.885 103.687C130.716 103.903 130.583 104.15 130.485 104.43C130.392 104.705 130.346 104.997 130.346 105.306ZM136.3 105.642V105.496C136.3 105.001 136.372 104.542 136.516 104.119C136.66 103.691 136.867 103.321 137.138 103.008C137.409 102.69 137.736 102.445 138.122 102.271C138.507 102.094 138.938 102.005 139.417 102.005C139.899 102.005 140.333 102.094 140.718 102.271C141.107 102.445 141.437 102.69 141.708 103.008C141.983 103.321 142.193 103.691 142.336 104.119C142.48 104.542 142.552 105.001 142.552 105.496V105.642C142.552 106.137 142.48 106.596 142.336 107.02C142.193 107.443 141.983 107.813 141.708 108.13C141.437 108.444 141.109 108.689 140.724 108.867C140.343 109.04 139.912 109.127 139.429 109.127C138.947 109.127 138.513 109.04 138.128 108.867C137.743 108.689 137.413 108.444 137.138 108.13C136.867 107.813 136.66 107.443 136.516 107.02C136.372 106.596 136.3 106.137 136.3 105.642ZM137.474 105.496V105.642C137.474 105.985 137.514 106.309 137.595 106.613C137.675 106.914 137.796 107.18 137.957 107.413C138.122 107.646 138.327 107.83 138.572 107.965C138.818 108.097 139.103 108.162 139.429 108.162C139.751 108.162 140.032 108.097 140.273 107.965C140.519 107.83 140.722 107.646 140.883 107.413C141.044 107.18 141.164 106.914 141.245 106.613C141.329 106.309 141.372 105.985 141.372 105.642V105.496C141.372 105.158 141.329 104.838 141.245 104.538C141.164 104.233 141.042 103.964 140.876 103.731C140.716 103.494 140.513 103.308 140.267 103.173C140.026 103.037 139.742 102.97 139.417 102.97C139.095 102.97 138.811 103.037 138.566 103.173C138.325 103.308 138.122 103.494 137.957 103.731C137.796 103.964 137.675 104.233 137.595 104.538C137.514 104.838 137.474 105.158 137.474 105.496ZM145.199 103.211V109H144.025V102.132H145.167L145.199 103.211ZM147.345 102.094L147.338 103.186C147.241 103.164 147.148 103.152 147.059 103.147C146.974 103.139 146.877 103.135 146.767 103.135C146.496 103.135 146.257 103.177 146.05 103.262C145.842 103.346 145.667 103.465 145.523 103.617C145.379 103.77 145.265 103.951 145.18 104.163C145.1 104.37 145.047 104.599 145.021 104.849L144.691 105.039C144.691 104.624 144.732 104.235 144.812 103.871C144.897 103.507 145.026 103.186 145.199 102.906C145.373 102.623 145.593 102.403 145.859 102.246C146.13 102.085 146.452 102.005 146.824 102.005C146.909 102.005 147.006 102.015 147.116 102.037C147.226 102.054 147.302 102.073 147.345 102.094ZM151.153 109.127C150.675 109.127 150.241 109.047 149.852 108.886C149.467 108.721 149.135 108.49 148.855 108.194C148.58 107.898 148.369 107.546 148.221 107.14C148.073 106.734 147.999 106.29 147.999 105.807V105.541C147.999 104.982 148.081 104.485 148.246 104.049C148.411 103.609 148.635 103.236 148.919 102.932C149.202 102.627 149.524 102.396 149.884 102.24C150.243 102.083 150.616 102.005 151.001 102.005C151.492 102.005 151.915 102.09 152.271 102.259C152.63 102.428 152.924 102.665 153.153 102.97C153.381 103.27 153.551 103.626 153.661 104.036C153.771 104.442 153.826 104.887 153.826 105.369V105.896H148.697V104.938H152.651V104.849C152.634 104.544 152.571 104.248 152.461 103.96C152.355 103.672 152.186 103.435 151.953 103.249C151.72 103.063 151.403 102.97 151.001 102.97C150.734 102.97 150.489 103.027 150.265 103.141C150.04 103.251 149.848 103.416 149.687 103.636C149.526 103.856 149.401 104.125 149.312 104.442C149.224 104.76 149.179 105.126 149.179 105.541V105.807C149.179 106.133 149.224 106.44 149.312 106.728C149.406 107.011 149.539 107.261 149.712 107.477C149.89 107.692 150.104 107.862 150.354 107.984C150.607 108.107 150.895 108.168 151.217 108.168C151.632 108.168 151.983 108.084 152.271 107.915C152.558 107.745 152.81 107.519 153.026 107.235L153.737 107.8C153.589 108.025 153.4 108.238 153.172 108.441C152.943 108.645 152.662 108.81 152.328 108.937C151.998 109.063 151.606 109.127 151.153 109.127Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "268",
  height: "26.3333",
  transform: "translate(15 117.667)",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M29.6274 126.041V135.333H28.4531V127.507L26.0854 128.37V127.31L29.4434 126.041H29.6274ZM38.8823 129.976V131.385C38.8823 132.143 38.8146 132.782 38.6792 133.302C38.5438 133.823 38.3491 134.242 38.0952 134.559C37.8413 134.876 37.5345 135.107 37.1748 135.251C36.8193 135.391 36.4173 135.46 35.9688 135.46C35.6133 135.46 35.2853 135.416 34.9849 135.327C34.6844 135.238 34.4136 135.097 34.1724 134.902C33.9354 134.703 33.7323 134.445 33.563 134.127C33.3937 133.81 33.2646 133.425 33.1758 132.972C33.0869 132.519 33.0425 131.99 33.0425 131.385V129.976C33.0425 129.219 33.1102 128.584 33.2456 128.072C33.3853 127.56 33.582 127.149 33.8359 126.84C34.0898 126.527 34.3945 126.303 34.75 126.167C35.1097 126.032 35.5117 125.964 35.9561 125.964C36.3158 125.964 36.6458 126.009 36.9463 126.098C37.251 126.182 37.5218 126.32 37.7588 126.51C37.9958 126.696 38.1968 126.946 38.3618 127.259C38.5311 127.568 38.6602 127.947 38.749 128.396C38.8379 128.844 38.8823 129.371 38.8823 129.976ZM37.7017 131.576V129.779C37.7017 129.365 37.6763 129.001 37.6255 128.688C37.5789 128.37 37.5091 128.099 37.416 127.875C37.3229 127.651 37.2044 127.469 37.0605 127.329C36.9209 127.189 36.758 127.088 36.5718 127.024C36.3898 126.957 36.1846 126.923 35.9561 126.923C35.6768 126.923 35.4292 126.976 35.2134 127.082C34.9976 127.183 34.8156 127.346 34.6675 127.57C34.5236 127.795 34.4136 128.089 34.3374 128.453C34.2612 128.817 34.2231 129.259 34.2231 129.779V131.576C34.2231 131.99 34.2464 132.356 34.293 132.674C34.3438 132.991 34.4178 133.266 34.5151 133.499C34.6125 133.728 34.731 133.916 34.8706 134.064C35.0103 134.212 35.1711 134.322 35.353 134.394C35.5392 134.462 35.7445 134.496 35.9688 134.496C36.2565 134.496 36.5083 134.441 36.7241 134.331C36.9399 134.221 37.1198 134.049 37.2637 133.816C37.4118 133.579 37.5218 133.277 37.5938 132.909C37.6657 132.536 37.7017 132.092 37.7017 131.576ZM44.9126 129.83V135.333H43.7319V128.465H44.8491L44.9126 129.83ZM44.6714 131.639L44.1255 131.62C44.1297 131.15 44.1911 130.717 44.3096 130.319C44.4281 129.917 44.6037 129.568 44.8364 129.271C45.0692 128.975 45.359 128.747 45.7061 128.586C46.0531 128.421 46.4551 128.338 46.9121 128.338C47.2337 128.338 47.5299 128.385 47.8008 128.478C48.0716 128.567 48.3065 128.709 48.5054 128.903C48.7043 129.098 48.8587 129.348 48.9688 129.652C49.0788 129.957 49.1338 130.325 49.1338 130.757V135.333H47.9595V130.814C47.9595 130.454 47.8981 130.167 47.7754 129.951C47.6569 129.735 47.4876 129.578 47.2676 129.481C47.0475 129.379 46.7894 129.329 46.4932 129.329C46.1462 129.329 45.8563 129.39 45.6235 129.513C45.3908 129.635 45.2046 129.805 45.0649 130.021C44.9253 130.236 44.8237 130.484 44.7603 130.763C44.701 131.038 44.6714 131.33 44.6714 131.639ZM49.1211 130.992L48.334 131.233C48.3382 130.856 48.3996 130.494 48.5181 130.147C48.6408 129.8 48.8164 129.492 49.0449 129.221C49.2777 128.95 49.5633 128.736 49.9019 128.58C50.2404 128.419 50.6276 128.338 51.0635 128.338C51.4316 128.338 51.7575 128.387 52.041 128.484C52.3288 128.582 52.57 128.732 52.7646 128.935C52.9635 129.134 53.1138 129.39 53.2153 129.703C53.3169 130.016 53.3677 130.389 53.3677 130.82V135.333H52.187V130.808C52.187 130.423 52.1257 130.124 52.0029 129.913C51.8844 129.697 51.7152 129.547 51.4951 129.462C51.2793 129.373 51.0212 129.329 50.7207 129.329C50.4626 129.329 50.234 129.373 50.0352 129.462C49.8363 129.551 49.6691 129.674 49.5337 129.83C49.3983 129.982 49.2946 130.158 49.2227 130.357C49.1549 130.556 49.1211 130.767 49.1211 130.992ZM56.4209 128.465V135.333H55.2402V128.465H56.4209ZM55.1514 126.644C55.1514 126.453 55.2085 126.292 55.3228 126.161C55.4412 126.03 55.6147 125.964 55.8433 125.964C56.0675 125.964 56.2389 126.03 56.3574 126.161C56.4801 126.292 56.5415 126.453 56.5415 126.644C56.5415 126.826 56.4801 126.982 56.3574 127.113C56.2389 127.24 56.0675 127.304 55.8433 127.304C55.6147 127.304 55.4412 127.24 55.3228 127.113C55.2085 126.982 55.1514 126.826 55.1514 126.644ZM59.4805 129.932V135.333H58.3062V128.465H59.417L59.4805 129.932ZM59.2012 131.639L58.7124 131.62C58.7166 131.15 58.7865 130.717 58.9219 130.319C59.0573 129.917 59.2477 129.568 59.4932 129.271C59.7386 128.975 60.0306 128.747 60.3691 128.586C60.7119 128.421 61.0907 128.338 61.5054 128.338C61.8439 128.338 62.1486 128.385 62.4194 128.478C62.6903 128.567 62.9209 128.711 63.1113 128.91C63.306 129.109 63.4541 129.367 63.5557 129.684C63.6572 129.997 63.708 130.38 63.708 130.833V135.333H62.5273V130.82C62.5273 130.461 62.4744 130.173 62.3687 129.957C62.2629 129.737 62.1084 129.578 61.9053 129.481C61.7021 129.379 61.4525 129.329 61.1562 129.329C60.8643 129.329 60.5977 129.39 60.3564 129.513C60.1195 129.635 59.9142 129.805 59.7407 130.021C59.5715 130.236 59.4382 130.484 59.3408 130.763C59.2477 131.038 59.2012 131.33 59.2012 131.639ZM69.6938 133.747V128.465H70.8745V135.333H69.751L69.6938 133.747ZM69.916 132.299L70.4048 132.287C70.4048 132.744 70.3561 133.167 70.2588 133.556C70.1657 133.941 70.0133 134.276 69.8018 134.559C69.5902 134.843 69.313 135.065 68.9702 135.226C68.6274 135.382 68.2106 135.46 67.7197 135.46C67.3854 135.46 67.0786 135.412 66.7993 135.314C66.5243 135.217 66.2873 135.067 66.0884 134.864C65.8895 134.661 65.735 134.396 65.625 134.07C65.5192 133.744 65.4663 133.353 65.4663 132.896V128.465H66.6406V132.909C66.6406 133.218 66.6745 133.474 66.7422 133.677C66.8141 133.876 66.9093 134.034 67.0278 134.153C67.1506 134.267 67.286 134.347 67.4341 134.394C67.5864 134.441 67.743 134.464 67.9038 134.464C68.4032 134.464 68.7988 134.369 69.0908 134.178C69.3828 133.984 69.5923 133.723 69.7192 133.397C69.8504 133.067 69.916 132.701 69.916 132.299ZM75.54 128.465V129.367H71.8267V128.465H75.54ZM73.0835 126.796H74.2578V133.632C74.2578 133.865 74.2938 134.041 74.3657 134.159C74.4377 134.278 74.5308 134.356 74.645 134.394C74.7593 134.432 74.882 134.451 75.0132 134.451C75.1105 134.451 75.2121 134.443 75.3179 134.426C75.4279 134.405 75.5104 134.388 75.5654 134.375L75.5718 135.333C75.4787 135.363 75.356 135.391 75.2036 135.416C75.0555 135.446 74.8757 135.46 74.6641 135.46C74.3763 135.46 74.1118 135.403 73.8706 135.289C73.6294 135.175 73.4368 134.984 73.293 134.718C73.1533 134.447 73.0835 134.083 73.0835 133.626V126.796ZM79.7676 135.46C79.2894 135.46 78.8556 135.38 78.4663 135.219C78.0812 135.054 77.749 134.824 77.4697 134.527C77.1947 134.231 76.9831 133.88 76.835 133.474C76.6868 133.067 76.6128 132.623 76.6128 132.141V131.874C76.6128 131.315 76.6953 130.818 76.8604 130.382C77.0254 129.942 77.2497 129.57 77.5332 129.265C77.8167 128.96 78.1383 128.73 78.498 128.573C78.8577 128.417 79.2301 128.338 79.6152 128.338C80.1061 128.338 80.5293 128.423 80.8848 128.592C81.2445 128.762 81.5386 128.999 81.7671 129.303C81.9956 129.604 82.1649 129.959 82.2749 130.37C82.3849 130.776 82.4399 131.22 82.4399 131.703V132.229H77.311V131.271H81.2656V131.182C81.2487 130.877 81.1852 130.581 81.0752 130.293C80.9694 130.006 80.8001 129.769 80.5674 129.583C80.3346 129.396 80.0173 129.303 79.6152 129.303C79.3486 129.303 79.1032 129.36 78.8789 129.475C78.6546 129.585 78.4621 129.75 78.3013 129.97C78.1405 130.19 78.0156 130.458 77.9268 130.776C77.8379 131.093 77.7935 131.459 77.7935 131.874V132.141C77.7935 132.466 77.8379 132.773 77.9268 133.061C78.0199 133.345 78.1532 133.594 78.3267 133.81C78.5044 134.026 78.7181 134.195 78.9678 134.318C79.2217 134.441 79.5094 134.502 79.8311 134.502C80.2458 134.502 80.597 134.417 80.8848 134.248C81.1725 134.079 81.4243 133.852 81.6401 133.569L82.3511 134.134C82.203 134.358 82.0146 134.572 81.7861 134.775C81.5576 134.978 81.2762 135.143 80.9419 135.27C80.6118 135.397 80.2204 135.46 79.7676 135.46ZM87.8101 133.512C87.8101 133.342 87.772 133.186 87.6958 133.042C87.6239 132.894 87.4736 132.761 87.2451 132.642C87.0208 132.519 86.6823 132.414 86.2295 132.325C85.8486 132.244 85.5037 132.149 85.1948 132.039C84.8901 131.929 84.6299 131.796 84.4141 131.639C84.2025 131.483 84.0396 131.299 83.9253 131.087C83.811 130.875 83.7539 130.628 83.7539 130.344C83.7539 130.073 83.8132 129.817 83.9316 129.576C84.0544 129.335 84.2257 129.121 84.4458 128.935C84.6701 128.749 84.9388 128.603 85.252 128.497C85.5651 128.391 85.9142 128.338 86.2993 128.338C86.8494 128.338 87.3192 128.436 87.7085 128.63C88.0978 128.825 88.3962 129.085 88.6035 129.411C88.8109 129.733 88.9146 130.09 88.9146 130.484H87.7402C87.7402 130.293 87.6831 130.109 87.5688 129.932C87.4588 129.75 87.2959 129.599 87.0801 129.481C86.8685 129.362 86.6082 129.303 86.2993 129.303C85.9735 129.303 85.709 129.354 85.5059 129.456C85.307 129.553 85.161 129.678 85.0679 129.83C84.979 129.982 84.9346 130.143 84.9346 130.312C84.9346 130.439 84.9557 130.554 84.998 130.655C85.0446 130.753 85.125 130.844 85.2393 130.928C85.3535 131.009 85.5143 131.085 85.7217 131.157C85.929 131.229 86.1935 131.301 86.5151 131.373C87.078 131.5 87.5413 131.652 87.9053 131.83C88.2692 132.007 88.54 132.225 88.7178 132.483C88.8955 132.742 88.9844 133.055 88.9844 133.423C88.9844 133.723 88.9209 133.998 88.7939 134.248C88.6712 134.498 88.4914 134.714 88.2544 134.896C88.0216 135.073 87.7424 135.213 87.4165 135.314C87.0949 135.412 86.7331 135.46 86.3311 135.46C85.7259 135.46 85.2139 135.353 84.7949 135.137C84.376 134.921 84.0586 134.642 83.8428 134.299C83.627 133.956 83.519 133.594 83.519 133.213H84.6997C84.7166 133.535 84.8097 133.791 84.979 133.981C85.1483 134.168 85.3556 134.301 85.6011 134.381C85.8465 134.458 86.0898 134.496 86.3311 134.496C86.6527 134.496 86.9214 134.453 87.1372 134.369C87.3573 134.284 87.5244 134.168 87.6387 134.02C87.7529 133.871 87.8101 133.702 87.8101 133.512ZM96.627 128.465V129.367H92.9136V128.465H96.627ZM94.1704 126.796H95.3447V133.632C95.3447 133.865 95.3807 134.041 95.4526 134.159C95.5246 134.278 95.6177 134.356 95.7319 134.394C95.8462 134.432 95.9689 134.451 96.1001 134.451C96.1974 134.451 96.299 134.443 96.4048 134.426C96.5148 134.405 96.5973 134.388 96.6523 134.375L96.6587 135.333C96.5656 135.363 96.4429 135.391 96.2905 135.416C96.1424 135.446 95.9626 135.46 95.751 135.46C95.4632 135.46 95.1987 135.403 94.9575 135.289C94.7163 135.175 94.5238 134.984 94.3799 134.718C94.2402 134.447 94.1704 134.083 94.1704 133.626V126.796ZM97.5664 131.976V131.83C97.5664 131.334 97.6383 130.875 97.7822 130.452C97.9261 130.025 98.1335 129.654 98.4043 129.341C98.6751 129.024 99.0031 128.778 99.3882 128.605C99.7733 128.427 100.205 128.338 100.683 128.338C101.166 128.338 101.599 128.427 101.984 128.605C102.374 128.778 102.704 129.024 102.975 129.341C103.25 129.654 103.459 130.025 103.603 130.452C103.747 130.875 103.819 131.334 103.819 131.83V131.976C103.819 132.471 103.747 132.93 103.603 133.353C103.459 133.776 103.25 134.146 102.975 134.464C102.704 134.777 102.376 135.022 101.991 135.2C101.61 135.374 101.178 135.46 100.696 135.46C100.213 135.46 99.7796 135.374 99.3945 135.2C99.0094 135.022 98.6794 134.777 98.4043 134.464C98.1335 134.146 97.9261 133.776 97.7822 133.353C97.6383 132.93 97.5664 132.471 97.5664 131.976ZM98.7407 131.83V131.976C98.7407 132.318 98.7809 132.642 98.8613 132.947C98.9417 133.247 99.0623 133.514 99.2231 133.747C99.3882 133.979 99.5934 134.163 99.8389 134.299C100.084 134.43 100.37 134.496 100.696 134.496C101.017 134.496 101.299 134.43 101.54 134.299C101.785 134.163 101.989 133.979 102.149 133.747C102.31 133.514 102.431 133.247 102.511 132.947C102.596 132.642 102.638 132.318 102.638 131.976V131.83C102.638 131.491 102.596 131.172 102.511 130.871C102.431 130.566 102.308 130.298 102.143 130.065C101.982 129.828 101.779 129.642 101.534 129.506C101.292 129.371 101.009 129.303 100.683 129.303C100.361 129.303 100.078 129.371 99.8325 129.506C99.5913 129.642 99.3882 129.828 99.2231 130.065C99.0623 130.298 98.9417 130.566 98.8613 130.871C98.7809 131.172 98.7407 131.491 98.7407 131.83ZM111.392 128.465V129.367H107.678V128.465H111.392ZM108.935 126.796H110.109V133.632C110.109 133.865 110.145 134.041 110.217 134.159C110.289 134.278 110.382 134.356 110.497 134.394C110.611 134.432 110.734 134.451 110.865 134.451C110.962 134.451 111.064 134.443 111.169 134.426C111.279 134.405 111.362 134.388 111.417 134.375L111.423 135.333C111.33 135.363 111.208 135.391 111.055 135.416C110.907 135.446 110.727 135.46 110.516 135.46C110.228 135.46 109.963 135.403 109.722 135.289C109.481 135.175 109.288 134.984 109.145 134.718C109.005 134.447 108.935 134.083 108.935 133.626V126.796ZM113.943 125.583V135.333H112.769V125.583H113.943ZM113.664 131.639L113.175 131.62C113.18 131.15 113.249 130.717 113.385 130.319C113.52 129.917 113.711 129.568 113.956 129.271C114.201 128.975 114.493 128.747 114.832 128.586C115.175 128.421 115.554 128.338 115.968 128.338C116.307 128.338 116.611 128.385 116.882 128.478C117.153 128.567 117.384 128.711 117.574 128.91C117.769 129.109 117.917 129.367 118.019 129.684C118.12 129.997 118.171 130.38 118.171 130.833V135.333H116.99V130.82C116.99 130.461 116.937 130.173 116.832 129.957C116.726 129.737 116.571 129.578 116.368 129.481C116.165 129.379 115.915 129.329 115.619 129.329C115.327 129.329 115.061 129.39 114.819 129.513C114.582 129.635 114.377 129.805 114.204 130.021C114.034 130.236 113.901 130.484 113.804 130.763C113.711 131.038 113.664 131.33 113.664 131.639ZM122.779 135.46C122.301 135.46 121.867 135.38 121.478 135.219C121.093 135.054 120.761 134.824 120.481 134.527C120.206 134.231 119.995 133.88 119.847 133.474C119.699 133.067 119.625 132.623 119.625 132.141V131.874C119.625 131.315 119.707 130.818 119.872 130.382C120.037 129.942 120.261 129.57 120.545 129.265C120.828 128.96 121.15 128.73 121.51 128.573C121.869 128.417 122.242 128.338 122.627 128.338C123.118 128.338 123.541 128.423 123.896 128.592C124.256 128.762 124.55 128.999 124.779 129.303C125.007 129.604 125.177 129.959 125.287 130.37C125.397 130.776 125.452 131.22 125.452 131.703V132.229H120.323V131.271H124.277V131.182C124.26 130.877 124.197 130.581 124.087 130.293C123.981 130.006 123.812 129.769 123.579 129.583C123.346 129.396 123.029 129.303 122.627 129.303C122.36 129.303 122.115 129.36 121.891 129.475C121.666 129.585 121.474 129.75 121.313 129.97C121.152 130.19 121.027 130.458 120.938 130.776C120.85 131.093 120.805 131.459 120.805 131.874V132.141C120.805 132.466 120.85 132.773 120.938 133.061C121.032 133.345 121.165 133.594 121.338 133.81C121.516 134.026 121.73 134.195 121.979 134.318C122.233 134.441 122.521 134.502 122.843 134.502C123.257 134.502 123.609 134.417 123.896 134.248C124.184 134.079 124.436 133.852 124.652 133.569L125.363 134.134C125.215 134.358 125.026 134.572 124.798 134.775C124.569 134.978 124.288 135.143 123.954 135.27C123.624 135.397 123.232 135.46 122.779 135.46ZM134.046 133.512C134.046 133.342 134.008 133.186 133.932 133.042C133.86 132.894 133.71 132.761 133.481 132.642C133.257 132.519 132.919 132.414 132.466 132.325C132.085 132.244 131.74 132.149 131.431 132.039C131.126 131.929 130.866 131.796 130.65 131.639C130.439 131.483 130.276 131.299 130.162 131.087C130.047 130.875 129.99 130.628 129.99 130.344C129.99 130.073 130.049 129.817 130.168 129.576C130.291 129.335 130.462 129.121 130.682 128.935C130.906 128.749 131.175 128.603 131.488 128.497C131.801 128.391 132.151 128.338 132.536 128.338C133.086 128.338 133.556 128.436 133.945 128.63C134.334 128.825 134.632 129.085 134.84 129.411C135.047 129.733 135.151 130.09 135.151 130.484H133.977C133.977 130.293 133.919 130.109 133.805 129.932C133.695 129.75 133.532 129.599 133.316 129.481C133.105 129.362 132.845 129.303 132.536 129.303C132.21 129.303 131.945 129.354 131.742 129.456C131.543 129.553 131.397 129.678 131.304 129.83C131.215 129.982 131.171 130.143 131.171 130.312C131.171 130.439 131.192 130.554 131.234 130.655C131.281 130.753 131.361 130.844 131.476 130.928C131.59 131.009 131.751 131.085 131.958 131.157C132.165 131.229 132.43 131.301 132.751 131.373C133.314 131.5 133.778 131.652 134.142 131.83C134.506 132.007 134.776 132.225 134.954 132.483C135.132 132.742 135.221 133.055 135.221 133.423C135.221 133.723 135.157 133.998 135.03 134.248C134.908 134.498 134.728 134.714 134.491 134.896C134.258 135.073 133.979 135.213 133.653 135.314C133.331 135.412 132.969 135.46 132.567 135.46C131.962 135.46 131.45 135.353 131.031 135.137C130.612 134.921 130.295 134.642 130.079 134.299C129.863 133.956 129.755 133.594 129.755 133.213H130.936C130.953 133.535 131.046 133.791 131.215 133.981C131.385 134.168 131.592 134.301 131.837 134.381C132.083 134.458 132.326 134.496 132.567 134.496C132.889 134.496 133.158 134.453 133.374 134.369C133.594 134.284 133.761 134.168 133.875 134.02C133.989 133.871 134.046 133.702 134.046 133.512ZM137.938 125.583V135.333H136.763V125.583H137.938ZM137.658 131.639L137.169 131.62C137.174 131.15 137.243 130.717 137.379 130.319C137.514 129.917 137.705 129.568 137.95 129.271C138.196 128.975 138.488 128.747 138.826 128.586C139.169 128.421 139.548 128.338 139.962 128.338C140.301 128.338 140.606 128.385 140.876 128.478C141.147 128.567 141.378 128.711 141.568 128.91C141.763 129.109 141.911 129.367 142.013 129.684C142.114 129.997 142.165 130.38 142.165 130.833V135.333H140.984V130.82C140.984 130.461 140.931 130.173 140.826 129.957C140.72 129.737 140.565 129.578 140.362 129.481C140.159 129.379 139.91 129.329 139.613 129.329C139.321 129.329 139.055 129.39 138.813 129.513C138.576 129.635 138.371 129.805 138.198 130.021C138.028 130.236 137.895 130.484 137.798 130.763C137.705 131.038 137.658 131.33 137.658 131.639ZM143.612 131.976V131.83C143.612 131.334 143.684 130.875 143.828 130.452C143.972 130.025 144.179 129.654 144.45 129.341C144.721 129.024 145.049 128.778 145.434 128.605C145.819 128.427 146.251 128.338 146.729 128.338C147.211 128.338 147.645 128.427 148.03 128.605C148.42 128.778 148.75 129.024 149.021 129.341C149.296 129.654 149.505 130.025 149.649 130.452C149.793 130.875 149.865 131.334 149.865 131.83V131.976C149.865 132.471 149.793 132.93 149.649 133.353C149.505 133.776 149.296 134.146 149.021 134.464C148.75 134.777 148.422 135.022 148.037 135.2C147.656 135.374 147.224 135.46 146.742 135.46C146.259 135.46 145.826 135.374 145.44 135.2C145.055 135.022 144.725 134.777 144.45 134.464C144.179 134.146 143.972 133.776 143.828 133.353C143.684 132.93 143.612 132.471 143.612 131.976ZM144.787 131.83V131.976C144.787 132.318 144.827 132.642 144.907 132.947C144.988 133.247 145.108 133.514 145.269 133.747C145.434 133.979 145.639 134.163 145.885 134.299C146.13 134.43 146.416 134.496 146.742 134.496C147.063 134.496 147.345 134.43 147.586 134.299C147.831 134.163 148.035 133.979 148.195 133.747C148.356 133.514 148.477 133.247 148.557 132.947C148.642 132.642 148.684 132.318 148.684 131.976V131.83C148.684 131.491 148.642 131.172 148.557 130.871C148.477 130.566 148.354 130.298 148.189 130.065C148.028 129.828 147.825 129.642 147.58 129.506C147.338 129.371 147.055 129.303 146.729 129.303C146.407 129.303 146.124 129.371 145.878 129.506C145.637 129.642 145.434 129.828 145.269 130.065C145.108 130.298 144.988 130.566 144.907 130.871C144.827 131.172 144.787 131.491 144.787 131.83ZM152.512 129.544V135.333H151.337V128.465H152.48L152.512 129.544ZM154.657 128.427L154.651 129.519C154.554 129.498 154.46 129.485 154.372 129.481C154.287 129.472 154.19 129.468 154.08 129.468C153.809 129.468 153.57 129.511 153.362 129.595C153.155 129.68 152.979 129.798 152.835 129.951C152.692 130.103 152.577 130.285 152.493 130.497C152.412 130.704 152.359 130.932 152.334 131.182L152.004 131.373C152.004 130.958 152.044 130.569 152.125 130.205C152.209 129.841 152.338 129.519 152.512 129.24C152.685 128.956 152.905 128.736 153.172 128.58C153.443 128.419 153.764 128.338 154.137 128.338C154.221 128.338 154.319 128.349 154.429 128.37C154.539 128.387 154.615 128.406 154.657 128.427ZM158.466 135.46C157.988 135.46 157.554 135.38 157.165 135.219C156.779 135.054 156.447 134.824 156.168 134.527C155.893 134.231 155.681 133.88 155.533 133.474C155.385 133.067 155.311 132.623 155.311 132.141V131.874C155.311 131.315 155.394 130.818 155.559 130.382C155.724 129.942 155.948 129.57 156.231 129.265C156.515 128.96 156.837 128.73 157.196 128.573C157.556 128.417 157.928 128.338 158.313 128.338C158.804 128.338 159.228 128.423 159.583 128.592C159.943 128.762 160.237 128.999 160.465 129.303C160.694 129.604 160.863 129.959 160.973 130.37C161.083 130.776 161.138 131.22 161.138 131.703V132.229H156.009V131.271H159.964V131.182C159.947 130.877 159.883 130.581 159.773 130.293C159.668 130.006 159.498 129.769 159.266 129.583C159.033 129.396 158.715 129.303 158.313 129.303C158.047 129.303 157.801 129.36 157.577 129.475C157.353 129.585 157.16 129.75 157 129.97C156.839 130.19 156.714 130.458 156.625 130.776C156.536 131.093 156.492 131.459 156.492 131.874V132.141C156.492 132.466 156.536 132.773 156.625 133.061C156.718 133.345 156.851 133.594 157.025 133.81C157.203 134.026 157.416 134.195 157.666 134.318C157.92 134.441 158.208 134.502 158.529 134.502C158.944 134.502 159.295 134.417 159.583 134.248C159.871 134.079 160.123 133.852 160.338 133.569L161.049 134.134C160.901 134.358 160.713 134.572 160.484 134.775C160.256 134.978 159.974 135.143 159.64 135.27C159.31 135.397 158.919 135.46 158.466 135.46Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_76_1273"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  fill: "white",
  transform: "translate(249 39)"
}))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "./editor/components/CustomTemplateControls.js":
/*!*****************************************************!*\
  !*** ./editor/components/CustomTemplateControls.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  ToggleControl,
  SelectControl
} = wp.components;
const {
  jetEngineVersion
} = window.JetFormEditorData;
function CustomTemplateControls(props) {
  const {
    listingTypes,
    attributes,
    setAttributes,
    isSelected,
    editProps: {
      uniqKey,
      attrHelp
    }
  } = props;
  const {
    field_options_from = ''
  } = attributes;
  return Boolean(jetEngineVersion.length) && ['terms', 'posts', 'generate'].includes(field_options_from) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    key: uniqKey('use_custom_template'),
    label: __('Use custom template', 'jet-form-builder'),
    checked: attributes.custom_item_template,
    help: attrHelp('custom_item_template'),
    onChange: custom_item_template => setAttributes({
      custom_item_template
    })
  }), attributes.custom_item_template && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    key: uniqKey('SelectControl-custom_item_template_id'),
    label: __('Choose custom template', 'jet-form-builder'),
    value: attributes.custom_item_template_id,
    options: listingTypes,
    onChange: custom_item_template_id => setAttributes({
      custom_item_template_id
    })
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTemplateControls);

/***/ }),

/***/ "./editor/components/FromManual/BulkOptions.js":
/*!*****************************************************!*\
  !*** ./editor/components/FromManual/BulkOptions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toBulk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toBulk */ "./editor/components/FromManual/toBulk.js");
/* harmony import */ var _fromBulk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromBulk */ "./editor/components/FromManual/fromBulk.js");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");








const {
  useScopedAttributesContext,
  useOnUpdateModal
} = JetFBHooks;
const _exp = /*#__PURE__*/() => _wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Flex;
const StyledFlex = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_7__.styled)(_exp())({
  name: "StyledFlex",
  class: "siqun4o",
  propsAsIs: true
});
function optionsToBulk(options) {
  if (options?.length) {
    return options.map(option => {
      const parts = [];
      parts.push(option.label || '');
      parts.push(option.value || '');
      if (option.calculate) {
        parts.push(option.calculate);
      }
      return parts.join(' : ');
    }).join('\n');
  }
  return [];
}
function BulkOptions({
  setModalContent
}) {
  const {
    attributes,
    setAttributes,
    setRealAttributes
  } = useScopedAttributesContext();
  const [bulkSelect, setBulkSelect] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('jfb_current_select');
  const [currentOptions, setCurrentOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const optionsList = [{
    label: 'Select...',
    value: 'jfb_current_select'
  }].concat(window.JetFBBulkOptions.list) || [];
  const bulkSource = window.JetFBBulkOptions.sources;
  const [bulk, setBulk] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(() => (0,_toBulk__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes.field_options));
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (attributes.field_options?.length) {
      setCurrentOptions(optionsToBulk(attributes.field_options));
      setBulk((0,_toBulk__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes.field_options));
    }
  }, []);
  const replaceOptions = (val = bulk) => {
    setAttributes({
      field_options: [...(0,_fromBulk__WEBPACK_IMPORTED_MODULE_2__["default"])(val)]
    });
  };
  const handleSelectChange = value => {
    setBulkSelect(value);
    if ('jfb_current_select' === value) {
      setBulk(currentOptions);
      replaceOptions(currentOptions);
    } else {
      const newBulk = (0,_toBulk__WEBPACK_IMPORTED_MODULE_1__["default"])(bulkSource[value]);
      setBulk(newBulk);
      replaceOptions(newBulk);
    }
  };
  useOnUpdateModal(() => {
    setRealAttributes(attributes);
    setModalContent(false);
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyledFlex, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Options preset:', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    value: bulkSelect,
    onChange: handleSelectChange,
    options: optionsList
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextareaControl, {
    className: "jet-control-clear",
    value: bulk,
    onChange: val => {
      setBulk((0,_toBulk__WEBPACK_IMPORTED_MODULE_1__["default"])(val));
      replaceOptions(val);
    },
    rows: 16
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.Help, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(`You can specify a different value and value 
for the calculator field by separating them with a colon character`, 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "Book #1 : book_1 : 100"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulkOptions);
__webpack_require__(/*! ./BulkOptions.wyw-in-js.css!=!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./BulkOptions.js */ "./editor/components/FromManual/BulkOptions.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/components/FromManual/BulkOptions.js");

/***/ }),

/***/ "./editor/components/FromManual/BulkOptions.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/components/FromManual/BulkOptions.js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./editor/components/FromManual/BulkOptions.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/components/FromManual/BulkOptions.js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./editor/components/FromManual/FromManualFields.js":
/*!**********************************************************!*\
  !*** ./editor/components/FromManual/FromManualFields.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FromManualFieldsContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FromManualFieldsContent */ "./editor/components/FromManual/FromManualFieldsContent.js");
/* harmony import */ var _BulkOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BulkOptions */ "./editor/components/FromManual/BulkOptions.js");



const {
  ActionModal,
  ScopedAttributesProvider
} = JetFBComponents;
const {
  Button,
  Flex
} = wp.components;
const {
  __
} = wp.i18n;
const {
  useState
} = wp.element;
const showBulkIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM19 19H5V5H19V19Z",
  fill: "currentColor"
}));
const hideBulkIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z",
  fill: "currentColor"
}));
function FromManualFields() {
  const [showManualModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const toggleModal = () => {
    setShowModal(toggle => !toggle);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSecondary: true,
    onClick: toggleModal,
    icon: "admin-tools"
  }, __('Manage items', 'jet-form-builder')), showManualModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionModal, {
    title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Flex, {
      align: "center"
    }, __('Edit Options', 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => setModalContent(prev => prev ? '' : 'bulk'),
      icon: modalContent ? hideBulkIcon : showBulkIcon,
      variant: "tertiary"
    }, modalContent ? __('Switch to manual editor', 'jet-form-builder') : __('Switch to bulk editor', 'jet-form-builder'))),
    onRequestClose: toggleModal,
    classNames: ['width-60']
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ScopedAttributesProvider, null, 'bulk' === modalContent ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BulkOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setModalContent: setModalContent
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FromManualFieldsContent__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromManualFields);

/***/ }),

/***/ "./editor/components/FromManual/FromManualFieldsContent.js":
/*!*****************************************************************!*\
  !*** ./editor/components/FromManual/FromManualFieldsContent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FromManualOptionsContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FromManualOptionsContextProvider */ "./editor/components/FromManual/FromManualOptionsContextProvider.js");
/* harmony import */ var _FromManualOptionItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FromManualOptionItem */ "./editor/components/FromManual/FromManualOptionItem.js");



const {
  __
} = wp.i18n;
const {
  Repeater,
  RepeaterAddNew
} = JetFBComponents;
const {
  useScopedAttributesContext,
  useOnUpdateModal
} = JetFBHooks;
function FromManualFieldsContent() {
  var _attributes$field_opt;
  const {
    attributes,
    setAttributes,
    setRealAttributes
  } = useScopedAttributesContext();
  const updateOptions = options => {
    const field_options = 'function' === typeof options ? options(attributes.field_options) : options;
    setAttributes(prev => ({
      ...prev,
      field_options
    }));
  };
  useOnUpdateModal(() => setRealAttributes(attributes));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FromManualOptionsContextProvider__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Repeater, {
    items: (_attributes$field_opt = attributes.field_options) !== null && _attributes$field_opt !== void 0 ? _attributes$field_opt : [],
    onSetState: updateOptions
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FromManualOptionItem__WEBPACK_IMPORTED_MODULE_2__["default"], null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RepeaterAddNew, {
    onSetState: updateOptions
  }, __('Add new Option', 'jet-form-builder')));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromManualFieldsContent);

/***/ }),

/***/ "./editor/components/FromManual/FromManualOptionItem.js":
/*!**************************************************************!*\
  !*** ./editor/components/FromManual/FromManualOptionItem.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @linaria/react */ "../../../../node_modules/@linaria/react/dist/index.mjs");


const {
  useContext
} = wp.element;
const {
  TextControl,
  ToggleControl
} = wp.components;
const {
  __
} = wp.i18n;
const {
  RepeaterItemContext
} = JetFBComponents;
const NoBorderWrapper = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('div')({
  name: "NoBorderWrapper",
  class: "ngu5jkm",
  propsAsIs: false
});
function FromManualOptionItem() {
  const {
    currentItem,
    changeCurrentItem
  } = useContext(RepeaterItemContext);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Label', 'jet-form-builder'),
    value: currentItem.label,
    onChange: label => changeCurrentItem({
      label
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Value', 'jet-form-builder'),
    value: currentItem.value,
    onChange: value => {
      if (currentItem.keep_commas && !String(value).includes(',')) {
        changeCurrentItem({
          value,
          keep_commas: false
        });
        return;
      }
      changeCurrentItem({
        value
      });
    }
  }), currentItem.value && currentItem.value.includes(',') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NoBorderWrapper, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Save as single value (ignore commas)', 'jet-form-builder'),
    help: __('By default, values containing commas are split into multiple options. Enable this to save the value as a single string, including commas.', 'jet-form-builder'),
    checked: !!currentItem.keep_commas,
    onChange: keep_commas => changeCurrentItem({
      keep_commas
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Calculate', 'jet-form-builder'),
    value: currentItem.calculate,
    onChange: calculate => changeCurrentItem({
      calculate
    })
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromManualOptionItem);
__webpack_require__(/*! ./FromManualOptionItem.wyw-in-js.css!=!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./FromManualOptionItem.js */ "./editor/components/FromManual/FromManualOptionItem.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/components/FromManual/FromManualOptionItem.js");

/***/ }),

/***/ "./editor/components/FromManual/FromManualOptionItem.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/components/FromManual/FromManualOptionItem.js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./editor/components/FromManual/FromManualOptionItem.wyw-in-js.css!=!../../../../node_modules/@wyw-in-js/webpack-loader/lib/outputCssLoader.js?cacheProvider=!./editor/components/FromManual/FromManualOptionItem.js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./editor/components/FromManual/FromManualOptionsContextProvider.js":
/*!**************************************************************************!*\
  !*** ./editor/components/FromManual/FromManualOptionsContextProvider.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  RepeaterHeadContext
} = JetFBComponents;
const itemHeading = ({
  currentItem,
  index
}) => {
  const leftPart = [`#${index + 1}`];
  const rightPart = [];
  if (currentItem.label) {
    rightPart.push(`Label [${currentItem.label}]`);
  }
  if (currentItem.value) {
    rightPart.push(`Value [${currentItem.value}]`);
  }
  if (currentItem.calculate) {
    rightPart.push(`Calculate [${currentItem.calculate}]`);
  }
  leftPart.push(rightPart.join(' | '));
  return leftPart.join(' ');
};
function FromManualOptionsContextProvider({
  children
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RepeaterHeadContext.Provider, {
    value: {
      isSupported: () => true,
      render: ({
        currentItem,
        index
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "repeater-item-title"
      }, itemHeading({
        currentItem,
        index
      }))
    }
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromManualOptionsContextProvider);

/***/ }),

/***/ "./editor/components/FromManual/fromBulk.js":
/*!**************************************************!*\
  !*** ./editor/components/FromManual/fromBulk.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param source {String}
 * @returns {Object[]}
 */
function fromBulk(source) {
  if ('string' !== typeof source) {
    return [];
  }
  let rows = source.trim().split('\n');
  return rows.map(fromBulkRow).filter(Boolean);
}
function fromBulkRow(source) {
  if (!source.trim()) {
    return false;
  }
  const parts = source.split(':');
  if (!parts.length) {
    return false;
  }
  let [label, value, calculate] = parts;
  label = label.trim();
  if (1 === parts.length) {
    return {
      label,
      value: ''
    };
  }
  value = 'function' === typeof value?.trim ? value.trim() : false;
  calculate = 'function' === typeof calculate?.trim ? calculate.trim() : false;
  const row = {};
  if (label) {
    row.label = label;
  }
  if (value) {
    row.value = value;
  }
  if (calculate) {
    row.calculate = calculate;
  }
  return row;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fromBulk);

/***/ }),

/***/ "./editor/components/FromManual/toBulk.js":
/*!************************************************!*\
  !*** ./editor/components/FromManual/toBulk.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  isEmpty
} = JetFBActions;
const JSON_PROPERTIES = ['label', 'value', 'calculate'];
function toBulk(source) {
  if (isEmpty(source) || typeof 'string' === source && !source.trim()) {
    return '';
  }
  if ('object' === typeof source) {
    return arrayToBulk(source);
  }
  if ('string' !== typeof source) {
    return '';
  }
  if (!['[', '{'].includes(source[0])) {
    return source;
  }
  let jsonBulk;
  try {
    jsonBulk = JSON.parse(source);
  } catch (error) {
    return source;
  }
  return arrayToBulk(jsonBulk);
}
function arrayToBulk(source) {
  const rows = [];
  if (!Array.isArray(source)) {
    return objectToBulk(source);
  }
  for (const valItem of source) {
    rows.push(objectToBulk(valItem));
  }
  return rows.join('\n');
}
function objectToBulk(source) {
  if ('object' !== typeof source) {
    return ['number', 'string'].includes(typeof source) ? source : '';
  }
  const row = [];
  for (const property of JSON_PROPERTIES) {
    if ('undefined' === typeof source[property]) {
      continue;
    }
    if (!['number', 'string'].includes(typeof source[property])) {
      row.push(0);
      continue;
    }
    row.push(source[property]);
  }
  return row.join(' : ');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toBulk);

/***/ }),

/***/ "./editor/components/FromPostTermsFields.js":
/*!**************************************************!*\
  !*** ./editor/components/FromPostTermsFields.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources */ "./editor/components/sources.js");


const {
  TextControl
} = wp.components;
const {
  __
} = wp.i18n;
function FromPostTermsFields(props) {
  const {
    attributes,
    setAttributes,
    editProps: {
      attrHelp
    }
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_sources__WEBPACK_IMPORTED_MODULE_1__.getSelectSource)(props), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    key: "value_from_key",
    label: __('Value from meta field'),
    value: attributes.value_from_key,
    help: attrHelp('value_from_meta'),
    onChange: newValue => {
      setAttributes({
        value_from_key: newValue
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    key: "calculated_value_from_key",
    label: __('Calculated value from meta field'),
    value: attributes.calculated_value_from_key,
    help: attrHelp('calculated_value_from_key'),
    onChange: newValue => {
      setAttributes({
        calculated_value_from_key: newValue
      });
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromPostTermsFields);

/***/ }),

/***/ "./editor/components/SelectRadioCheck.js":
/*!***********************************************!*\
  !*** ./editor/components/SelectRadioCheck.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources */ "./editor/components/sources.js");
/* harmony import */ var _FromManual_FromManualFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FromManual/FromManualFields */ "./editor/components/FromManual/FromManualFields.js");
/* harmony import */ var _FromPostTermsFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FromPostTermsFields */ "./editor/components/FromPostTermsFields.js");
/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generators */ "./editor/generators/index.js");




// Use new GeneratorSettings component with schema support

const {
  TextControl,
  SelectControl
} = wp.components;
const {
  jetEngineVersion
} = window.JetFormEditorData;
const {
  applyFilters
} = wp.hooks;
const canRenderGlossaries = '' !== jetEngineVersion;
function getFieldOptionsForm(optionsFrom, props) {
  const {
    attributes,
    setAttributes
  } = props;
  switch (optionsFrom) {
    case 'manual_input':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FromManual_FromManualFields__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "from_manual"
      });
    case 'posts':
    case 'terms':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FromPostTermsFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: "form_posts_terms",
        ...props
      });
    case 'meta_field':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        key: "field_options_key",
        label: "Meta field to get value from",
        value: attributes.field_options_key,
        onChange: newValue => {
          setAttributes({
            field_options_key: newValue
          });
        }
      });
    case 'generate':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_generators__WEBPACK_IMPORTED_MODULE_4__.GeneratorSettings, {
        key: "form_generators",
        ...props
      });
    case 'glossary':
      return canRenderGlossaries && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
        key: "select_glossary",
        label: "Select Glossary",
        labelPosition: "top",
        value: attributes.glossary_id,
        onChange: glossary_id => setAttributes({
          glossary_id
        }),
        options: [{
          value: '',
          label: '--'
        }, ...window.JetFormOptionFieldData.glossaries_list]
      });
    default:
      return applyFilters('jet.fb.select.radio.check.controls', null, optionsFrom, props);
  }
}
function SelectRadioCheck(props) {
  const {
    attributes,
    setAttributes,
    isSelected,
    children = []
  } = props;
  const {
    field_options_from
  } = attributes;
  return isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "inside-block-options"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    key: "field_options_from",
    label: "Fill Options From",
    labelPosition: "top",
    value: field_options_from,
    onChange: newValue => {
      setAttributes({
        field_options_from: newValue
      });
    },
    options: _sources__WEBPACK_IMPORTED_MODULE_1__.listFrom
  }), getFieldOptionsForm(field_options_from, props), children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRadioCheck);

/***/ }),

/***/ "./editor/components/SelectRadioCheckPlaceholder.js":
/*!**********************************************************!*\
  !*** ./editor/components/SelectRadioCheckPlaceholder.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectRadioCheckPlaceholder: () => (/* binding */ SelectRadioCheckPlaceholder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources */ "./editor/components/sources.js");


const {
  FieldWrapper
} = JetFBComponents;
const {
  CheckboxControl,
  SelectControl,
  RadioControl
} = wp.components;
const DELIMITER = ' - ';
function SelectRadioCheckPlaceholder(props) {
  const {
    editProps: {
      blockName,
      uniqKey
    },
    scriptData,
    attributes
  } = props;
  const getCheckbox = (label, index = 1) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      className: 'jet-form-builder__field-wrap checkboxes-wrap',
      key: `check_place_holder_block_${label + index}`,
      label: label,
      onChange: () => {}
    });
  };
  const getSelect = ({
    options,
    index
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      key: `select_place_holder_block_${attributes.name + index}`
      //label={ attributes.label }
      ,
      options: options
      //help={ attributes.desc }
      ,
      onChange: () => {}
    });
  };
  const getRadio = ({
    options,
    label,
    index
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      key: `radio_place_holder_block_${label + index}`
      //label={ attributes.label }
      ,
      options: options
      //help={ attributes.desc }
      ,
      onChange: () => {}
    });
  };
  const getProp = (of, propName, ifEmpty = '') => {
    if ('undefined' !== typeof of && 'undefined' !== typeof of[propName]) {
      return of[propName];
    }
    return ifEmpty;
  };
  const getLabelProp = of => {
    return getProp(of, 'label');
  };
  const getFullLabel = () => {
    var _ref, _window$JetFormOption;
    const {
      field_options_from,
      field_options_post_type,
      field_options_tax,
      field_options_key,
      generator_function,
      generator_auto_update,
      generator_listen_field
    } = attributes;
    const optionFieldData = (_ref = (_window$JetFormOption = window.JetFormOptionFieldData) !== null && _window$JetFormOption !== void 0 ? _window$JetFormOption : scriptData) !== null && _ref !== void 0 ? _ref : {};
    let full_label = [];
    let value = [];
    switch (field_options_from) {
      case 'posts':
        if (field_options_post_type) {
          var _optionFieldData$post;
          value.push(getLabelProp(((_optionFieldData$post = optionFieldData.post_types_list) !== null && _optionFieldData$post !== void 0 ? _optionFieldData$post : []).find(option => option.value === field_options_post_type)));
        }
        break;
      case 'terms':
        if (field_options_tax) {
          var _optionFieldData$taxo;
          value.push(getLabelProp(((_optionFieldData$taxo = optionFieldData.taxonomies_list) !== null && _optionFieldData$taxo !== void 0 ? _optionFieldData$taxo : []).find(option => option.value === field_options_tax)));
        }
        break;
      case 'meta_field':
        if (field_options_key) {
          value.push(field_options_key);
        }
        break;
      case 'generate':
        if (generator_function) {
          var _optionFieldData$gene;
          value.push(getLabelProp(((_optionFieldData$gene = optionFieldData.generators_list) !== null && _optionFieldData$gene !== void 0 ? _optionFieldData$gene : []).find(option => option.value === generator_function)));
        }
        if (generator_auto_update && generator_listen_field) {
          const listenFields = Array.isArray(generator_listen_field) ? generator_listen_field : [generator_listen_field];
          if (listenFields.length) {
            value.push(`↻ ${listenFields.join(', ')}`);
          }
        }
        break;
    }
    full_label.push(getLabelProp(_sources__WEBPACK_IMPORTED_MODULE_1__.listFrom.find(option => option.value === field_options_from)));
    if (value.length) {
      full_label.push(value.join(DELIMITER));
    }
    return full_label.join(DELIMITER);
  };
  const getManualField = (label = '') => {
    if (blockName.includes('checkbox')) {
      if (label) {
        return getCheckbox(label);
      }
      return attributes.field_options.map(({
        label: checkLabel
      }, index) => {
        return getCheckbox(checkLabel, index);
      });
    } else if (blockName.includes('select')) {
      if (label) {
        return getSelect({
          attributes,
          options: [{
            label
          }]
        });
      }
      return getSelect({
        attributes,
        options: attributes.field_options
      });
    } else if (blockName.includes('radio')) {
      if (label) {
        return getRadio({
          attributes,
          options: [{
            label
          }]
        });
      }
      return getRadio({
        attributes,
        options: attributes.field_options
      });
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldWrapper, {
    key: 'jet-form-builder-field-wrapper',
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'jet-form-builder__fields-group jet-form-builder__field-preview'
  }, ('manual_input' !== attributes.field_options_from || !attributes.field_options.length) && getManualField(getFullLabel()) || null, 'manual_input' === attributes.field_options_from && attributes.field_options.length && getManualField() || null));
}

/***/ }),

/***/ "./editor/components/sources.js":
/*!**************************************!*\
  !*** ./editor/components/sources.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectSource: () => (/* binding */ getSelectSource),
/* harmony export */   listFrom: () => (/* binding */ listFrom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const localizeData = window.JetFormOptionFieldData;
const {
  SelectControl
} = wp.components;
const {
  jetEngineVersion
} = window.JetFormEditorData;
const listFrom = [{
  'value': 'manual_input',
  'label': __('Manual Input', 'jet-form-builder')
}, {
  'value': 'posts',
  'label': __('Posts', 'jet-form-builder')
}, {
  'value': 'terms',
  'label': __('Terms', 'jet-form-builder')
}, {
  'value': 'meta_field',
  'label': __('Meta Field', 'jet-form-builder')
}, {
  'value': 'generate',
  'label': __('Generate Dynamically', 'jet-form-builder')
}];
if ('' !== jetEngineVersion) {
  listFrom.push({
    'value': 'glossary',
    'label': __('Glossary', 'jet-form-builder')
  });
}
const sources = {
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
const getSelectSource = props => {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    field_options_from
  } = attributes;
  if (!sources[field_options_from] && !sources[field_options_from]) {
    return null;
  }
  const source = sources[field_options_from];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: source.label,
    labelPosition: "top",
    value: attributes[source.attr],
    onChange: newValue => {
      setAttributes({
        [source.attr]: newValue
      });
    },
    options: source.options
  });
};


/***/ }),

/***/ "./editor/generators/GeneratorSettings.js":
/*!************************************************!*\
  !*** ./editor/generators/GeneratorSettings.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneratorSettings: () => (/* binding */ GeneratorSettings),
/* harmony export */   GeneratorSettingsPanel: () => (/* binding */ GeneratorSettingsPanel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slot_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slot-fill */ "./editor/generators/slot-fill.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registry */ "./editor/generators/registry.js");
/* harmony import */ var _schema_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema-renderer */ "./editor/generators/schema-renderer.js");
/* harmony import */ var _legacy_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legacy-controls */ "./editor/generators/legacy-controls.js");
/* harmony import */ var _components_AutoUpdateControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AutoUpdateControls */ "./editor/generators/components/AutoUpdateControls.js");

/**
 * Generator Settings Component.
 *
 * Main component for rendering generator configuration UI.
 * Replaces the old FromGeneratorsFields.js with an extensible Slot/Fill architecture.
 *
 * Uses generator_args (object) attribute for storing generator settings.
 * Maintains backward compatibility with legacy generator_field (pipe-delimited string).
 *
 * @package JetFormBuilder
 */

const {
  SelectControl,
  PanelBody,
  Notice
} = wp.components;
const {
  __
} = wp.i18n;
const {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useMemo
} = wp.element;






/**
 * Legacy generators that use pipe-delimited format for generator_field.
 * Used for migrating old data to generator_args.
 * Format: "field1|field2|field3|field4"
 */
const LEGACY_PIPE_FORMAT = {
  get_from_query: ['query_id', 'value_field', 'label_field', 'calc_field'],
  get_from_field: ['field_name', 'sub_field'],
  get_from_db: ['meta_key'],
  num_range: ['meta_key'],
  get_from_booking_statuses: ['status_group[]']
};

/**
 * Get generator schemas from localized data.
 *
 * @return {Object} Generator schemas keyed by ID.
 */
function getGeneratorSchemas() {
  var _window$JetFormOption;
  return (_window$JetFormOption = window.JetFormOptionFieldData?.generator_schemas) !== null && _window$JetFormOption !== void 0 ? _window$JetFormOption : {};
}

/**
 * Get generators list for select control.
 *
 * @return {Array} Array of { value, label } options.
 */
function getGeneratorsList() {
  var _window$JetFormOption2;
  return (_window$JetFormOption2 = window.JetFormOptionFieldData?.generators_list) !== null && _window$JetFormOption2 !== void 0 ? _window$JetFormOption2 : [];
}

/**
 * Parse legacy pipe-delimited generator_field into object.
 *
 * @param {string} generatorId    Generator ID.
 * @param {string} generatorField Pipe-delimited string.
 *
 * @return {Object} Parsed values as object.
 */
function parseLegacyPipeFormat(generatorId, generatorField) {
  const fieldKeys = LEGACY_PIPE_FORMAT[generatorId];
  if (!fieldKeys || !generatorField) {
    return {};
  }
  const parts = generatorField.split('|');
  const result = {};
  fieldKeys.forEach((key, index) => {
    // Keys ending with [] collect all remaining pipe parts as array
    if (key.endsWith('[]')) {
      const realKey = key.slice(0, -2);
      const collected = parts.slice(index).filter(v => v !== '');
      if (collected.length > 0) {
        result[realKey] = collected;
      }
      return;
    }
    if (parts[index] !== undefined && parts[index] !== '') {
      result[key] = parts[index];
    }
  });
  return result;
}

/**
 * Schema-based controls with generator_args storage.
 *
 * Wraps SchemaBasedControls to save/read from generator_args object attribute.
 *
 * @param {Object}   props               Component props.
 * @param {string}   props.generatorId   Generator ID.
 * @param {Object}   props.schema        Generator schema.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Set attributes function.
 *
 * @return {JSX.Element} Controls with generator_args storage.
 */
function GeneratorArgsControls({
  generatorId,
  schema,
  attributes,
  setAttributes
}) {
  // Get current generator_args or empty object
  const generatorArgs = attributes.generator_args || {};

  // Check for legacy data migration on mount
  useEffect(() => {
    // If generator_args is empty but generator_field has data, migrate it
    if (Object.keys(generatorArgs).length === 0 && attributes.generator_field && LEGACY_PIPE_FORMAT[generatorId]) {
      const migratedArgs = parseLegacyPipeFormat(generatorId, attributes.generator_field);

      // Legacy blocks stored these in separate block attributes
      if (!migratedArgs.calc_field && attributes.calculated_value_from_key) {
        migratedArgs.calc_field = attributes.calculated_value_from_key;
      }
      if (Object.keys(migratedArgs).length > 0) {
        setAttributes({
          generator_args: migratedArgs
          // Keep generator_field for backward compatibility with older PHP
        });
      }
    }
  }, [generatorId]); // Only run when generator changes

  // Create wrapped setAttributes that updates generator_args
  const argsSetAttributes = useCallback(newAttrs => {
    const updates = {};
    const newArgs = {
      ...generatorArgs
    };
    let hasArgUpdates = false;

    // Check for prefixed attributes (gen_<id>_<key>) and convert to generator_args
    const prefix = `gen_${generatorId}_`;
    Object.keys(newAttrs).forEach(attrKey => {
      if (attrKey.startsWith(prefix)) {
        const fieldKey = attrKey.replace(prefix, '');
        newArgs[fieldKey] = newAttrs[attrKey];
        hasArgUpdates = true;
      } else {
        // Pass through non-generator attributes
        updates[attrKey] = newAttrs[attrKey];
      }
    });
    if (hasArgUpdates) {
      updates.generator_args = newArgs;
    }
    setAttributes(updates);
  }, [setAttributes, generatorArgs, generatorId]);

  // Create virtual attributes with values from generator_args for SchemaBasedControls
  const virtualAttributes = useMemo(() => {
    const virtual = {
      ...attributes
    };
    const prefix = `gen_${generatorId}_`;

    // Map generator_args values to prefixed attributes
    Object.keys(generatorArgs).forEach(key => {
      virtual[prefix + key] = generatorArgs[key];
    });
    return virtual;
  }, [attributes, generatorArgs, generatorId]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_schema_renderer__WEBPACK_IMPORTED_MODULE_3__.SchemaBasedControls, {
    generatorId: generatorId,
    schema: schema,
    attributes: virtualAttributes,
    setAttributes: argsSetAttributes
  });
}

/**
 * Main Generator Settings Component.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 * @param {Object}   props.editProps     Additional edit props (attrHelp, etc.).
 *
 * @return {JSX.Element} Generator settings UI.
 */
function GeneratorSettings(props) {
  var _schemas$generatorId, _generatorData$schema, _generatorData$suppor, _generatorData$update;
  const {
    attributes,
    setAttributes,
    editProps = {}
  } = props;
  const {
    generator_function: generatorId
  } = attributes;
  const [errors, setErrors] = useState({});
  const schemas = getGeneratorSchemas();
  const generatorsList = getGeneratorsList();
  const generatorData = (_schemas$generatorId = schemas[generatorId]) !== null && _schemas$generatorId !== void 0 ? _schemas$generatorId : {};
  const currentSchema = (_generatorData$schema = generatorData.schema) !== null && _generatorData$schema !== void 0 ? _generatorData$schema : {};
  const supportsUpdate = (_generatorData$suppor = generatorData.supports_update) !== null && _generatorData$suppor !== void 0 ? _generatorData$suppor : false;
  const contextFields = (_generatorData$update = generatorData.update_context) !== null && _generatorData$update !== void 0 ? _generatorData$update : [];
  const isLegacyGenerator = generatorData.legacy === true;
  const CustomControls = (0,_registry__WEBPACK_IMPORTED_MODULE_2__.getGeneratorControls)(generatorId);
  useEffect(() => {
    setErrors({});
  }, [generatorId]);
  const fillProps = {
    ...props,
    generatorId,
    schema: currentSchema,
    errors,
    setErrors
  };

  /**
   * Handle generator change - clear old settings.
   *
   * @param {string} newGeneratorId New generator ID.
   */
  const handleGeneratorChange = newGeneratorId => {
    setAttributes({
      generator_function: newGeneratorId,
      generator_args: {},
      // Clear args when changing generator
      generator_field: '' // Clear legacy field too
    });
    setErrors({});
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_slot_fill__WEBPACK_IMPORTED_MODULE_1__.BeforeGeneratorSelectorSlot, {
    fillProps: fillProps
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Generator Function', 'jet-form-builder'),
    value: generatorId || '',
    onChange: handleGeneratorChange,
    options: generatorsList,
    className: "jfb-generator-selector"
  }), generatorId && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, CustomControls && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CustomControls, {
    attributes: attributes,
    setAttributes: setAttributes,
    schema: currentSchema,
    generatorId: generatorId,
    editProps: editProps
  }), !CustomControls && !isLegacyGenerator && Object.keys(currentSchema).length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GeneratorArgsControls, {
    generatorId: generatorId,
    schema: currentSchema,
    attributes: attributes,
    setAttributes: setAttributes
  }), !CustomControls && isLegacyGenerator && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_legacy_controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    editProps: editProps,
    generatorId: generatorId
  }), !CustomControls && !isLegacyGenerator && Object.keys(currentSchema).length === 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_schema_renderer__WEBPACK_IMPORTED_MODULE_3__.NoSchemaNotice, {
    generatorId: generatorId,
    generatorName: generatorData.name
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_slot_fill__WEBPACK_IMPORTED_MODULE_1__.GeneratorControlsSlot, {
    fillProps: fillProps
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_slot_fill__WEBPACK_IMPORTED_MODULE_1__.GeneratorAdditionalSlot, {
    fillProps: fillProps
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AutoUpdateControls__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    supportsUpdate: supportsUpdate,
    contextFields: contextFields
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_slot_fill__WEBPACK_IMPORTED_MODULE_1__.AfterGeneratorControlsSlot, {
    fillProps: fillProps
  }), Object.keys(errors).length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Notice, {
    status: "error",
    isDismissible: false,
    className: "jfb-generator-errors"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, Object.entries(errors).map(([field, message]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: field
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, field, ":"), " ", message)))));
}

/**
 * Wrapper component that includes PanelBody.
 *
 * @param {Object} props Component props (same as GeneratorSettings).
 *
 * @return {JSX.Element} Panel with generator settings.
 */
function GeneratorSettingsPanel(props) {
  const {
    attributes
  } = props;
  const {
    generator_function: generatorId
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Generate Options', 'jet-form-builder'),
    initialOpen: !!generatorId,
    className: "jfb-generator-settings-panel"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GeneratorSettings, {
    ...props
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneratorSettings);

/***/ }),

/***/ "./editor/generators/components/AutoUpdateControls.js":
/*!************************************************************!*\
  !*** ./editor/generators/components/AutoUpdateControls.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auto_update_controls_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-update-controls.pcss */ "./editor/generators/components/auto-update-controls.pcss");

/**
 * Auto-Update Controls Component.
 *
 * Renders controls for enabling cascading/auto-update behavior when a generator
 * supports dynamic updates based on other field values.
 *
 * @package JetFormBuilder
 */


const {
  ToggleControl,
  SelectControl,
  TextControl,
  Notice
} = wp.components;
const {
  __
} = wp.i18n;
const {
  Fragment,
  useMemo
} = wp.element;
const {
  select
} = wp.data;
/**
 * Get data fields from block editor (excludes structural and button blocks).
 *
 * @return {Array} Array of { name, label, type } objects.
 */
function getFormFields() {
  var _select$getBlocks;
  const blocks = (_select$getBlocks = select('core/block-editor')?.getBlocks()) !== null && _select$getBlocks !== void 0 ? _select$getBlocks : [];
  const fields = [];
  const excludedBlocks = ['jet-forms/conditional-block', 'jet-forms/submit-field', 'jet-forms/form-break-field', 'jet-forms/form-break-start', 'jet-forms/group-break-field', 'jet-forms/heading-field', 'jet-forms/progress-bar', 'jet-forms/captcha-container', 'jet-forms/form-block'];
  const extractFields = blocksList => {
    blocksList.forEach(block => {
      if (block.attributes?.name && !excludedBlocks.includes(block.name)) {
        fields.push({
          name: block.attributes.name,
          label: block.attributes.label || block.attributes.name,
          type: block.name
        });
      }
      if (block.innerBlocks?.length) {
        extractFields(block.innerBlocks);
      }
    });
  };
  extractFields(blocks);
  return fields;
}

/**
 * Get action buttons (jet-forms/submit-field) excluding action_type="submit".
 *
 * The rendered HTML exposes action_type via data-type on the wrapper div.
 * We store action_type as the value so the frontend can find the button via
 * [data-type="next"] selector on the wrapper element.
 *
 * @return {Array} Array of { actionType, label } objects.
 */
function getActionButtons() {
  var _select$getBlocks2;
  const blocks = (_select$getBlocks2 = select('core/block-editor')?.getBlocks()) !== null && _select$getBlocks2 !== void 0 ? _select$getBlocks2 : [];
  const buttons = [];
  const extractButtons = blocksList => {
    blocksList.forEach(block => {
      if (block.name === 'jet-forms/submit-field') {
        var _block$attributes$act;
        const actionType = (_block$attributes$act = block.attributes?.action_type) !== null && _block$attributes$act !== void 0 ? _block$attributes$act : 'submit';
        if (actionType !== 'submit') {
          buttons.push({
            actionType,
            label: block.attributes?.label || actionType
          });
        }
      }
      if (block.innerBlocks?.length) {
        extractButtons(block.innerBlocks);
      }
    });
  };
  extractButtons(blocks);
  return buttons;
}

/**
 * Auto-Update Controls.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 * @param {boolean}  props.supportsUpdate Whether generator supports auto-update.
 * @param {Array}    props.contextFields  Context field hints from generator's get_auto_update_context_fields().
 *
 * @return {JSX.Element|null} Controls or null if not supported.
 */
function AutoUpdateControls({
  attributes,
  setAttributes,
  supportsUpdate,
  contextFields = []
}) {
  var _listenFieldArray$;
  if (!supportsUpdate) {
    return null;
  }
  const {
    generator_auto_update: autoUpdate = false,
    generator_listen_field: listenField = '',
    generator_require_all_filled: requireAllFilled = false,
    generator_update_on_button: updateOnButton = '',
    generator_cache_timeout: cacheTimeout = 60
  } = attributes;

  // Normalize listen_field to array for consistent handling
  const listenFieldArray = Array.isArray(listenField) ? listenField : listenField ? [listenField] : [];

  // If any context hint declares single: true, restrict "Watch These Fields" to single select.
  const singleListenField = contextFields.some(hint => hint.single);
  const dataFields = useMemo(() => getFormFields(), []);
  const actionButtons = useMemo(() => getActionButtons(), []);
  const fieldOptions = useMemo(() => {
    const opts = dataFields.map(field => ({
      value: field.name,
      label: `${field.label} (${field.name})`
    }));

    // For single-select mode add an empty placeholder option.
    if (singleListenField) {
      return [{
        value: '',
        label: __('— Select field —', 'jet-form-builder')
      }, ...opts];
    }
    return opts;
  }, [dataFields, singleListenField]);
  const buttonOptions = useMemo(() => {
    return [{
      value: '',
      label: __('— Select button —', 'jet-form-builder')
    }, ...actionButtons.map(btn => ({
      value: btn.actionType,
      label: `${btn.label} (${btn.actionType})`
    }))];
  }, [actionButtons]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Enable Auto-Update', 'jet-form-builder'),
    help: __('When enabled, the list of options will automatically refresh whenever a selected field changes its value.', 'jet-form-builder'),
    checked: autoUpdate,
    onChange: value => {
      setAttributes({
        generator_auto_update: value,
        ...(!value && {
          generator_listen_field: '',
          generator_require_all_filled: false,
          generator_update_on_button: ''
        })
      });
    },
    className: "jfb-auto-update-toggle"
  }), autoUpdate && contextFields.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Notice, {
    status: "info",
    isDismissible: false,
    className: "jfb-auto-update-context-hints"
  }, contextFields.map((hint, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    key: i,
    className: "components-base-control__help"
  }, hint.description, hint.example && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, hint.example))))), autoUpdate && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Watch These Fields', 'jet-form-builder'),
    help: singleListenField ? __('Choose the field whose value will be passed to the generator as a filter.', 'jet-form-builder') : __('Choose which fields trigger a refresh when their value changes. Hold Ctrl (Windows) or Cmd (Mac) to select multiple.', 'jet-form-builder'),
    ...(!singleListenField && {
      multiple: true
    }),
    value: singleListenField ? (_listenFieldArray$ = listenFieldArray[0]) !== null && _listenFieldArray$ !== void 0 ? _listenFieldArray$ : '' : listenFieldArray,
    onChange: values => {
      if (singleListenField) {
        setAttributes({
          generator_listen_field: values || ''
        });
        return;
      }
      if (!values || values.length === 0) {
        setAttributes({
          generator_listen_field: ''
        });
        return;
      }
      setAttributes({
        generator_listen_field: values.length === 1 ? values[0] : values
      });
    },
    options: fieldOptions,
    className: singleListenField ? '' : 'jfb-auto-update-field-selector'
  }), autoUpdate && listenFieldArray.length > 0 && !updateOnButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: listenFieldArray.length > 1 ? __('Wait for All Fields', 'jet-form-builder') : __('Skip if Field is Empty', 'jet-form-builder'),
    help: listenFieldArray.length > 1 ? __('When enabled, the options refresh only after every watched field has a value. Useful when multiple fields are needed together to filter results.', 'jet-form-builder') : __('When enabled, the options will not refresh if the watched field is empty. The list stays blank until the user picks a value.', 'jet-form-builder'),
    checked: requireAllFilled,
    onChange: value => setAttributes({
      generator_require_all_filled: value,
      ...(value && {
        generator_update_on_button: ''
      })
    })
  }), autoUpdate && !requireAllFilled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Refresh on Button Click', 'jet-form-builder'),
    help: __('Instead of refreshing automatically, options update only when a selected JetFormBuilder action button is clicked. Supported action types: Update Field, Next Page, Prev Page, Change Render State (submit is not supported). Regular HTML buttons are not supported here. Leave empty to refresh instantly on watched field change.', 'jet-form-builder'),
    value: updateOnButton,
    onChange: value => setAttributes({
      generator_update_on_button: value,
      ...(value && {
        generator_require_all_filled: false
      })
    }),
    options: buttonOptions
  }), autoUpdate && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Cache Duration (seconds)', 'jet-form-builder'),
    help: __('Repeat requests with the same values will reuse the cached result for this many seconds. Set to 0 to always fetch fresh data.', 'jet-form-builder'),
    type: "number",
    min: 0,
    value: cacheTimeout,
    onChange: value => {
      setAttributes({
        generator_cache_timeout: parseInt(value) || 0
      });
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoUpdateControls);

/***/ }),

/***/ "./editor/generators/components/auto-update-controls.pcss":
/*!****************************************************************!*\
  !*** ./editor/generators/components/auto-update-controls.pcss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./editor/generators/index.js":
/*!************************************!*\
  !*** ./editor/generators/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AfterGeneratorControlsFill: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.AfterGeneratorControlsFill),
/* harmony export */   AfterGeneratorControlsSlot: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.AfterGeneratorControlsSlot),
/* harmony export */   AutoUpdateControlsFill: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.AutoUpdateControlsFill),
/* harmony export */   AutoUpdateControlsSlot: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.AutoUpdateControlsSlot),
/* harmony export */   BeforeGeneratorSelectorFill: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.BeforeGeneratorSelectorFill),
/* harmony export */   BeforeGeneratorSelectorSlot: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.BeforeGeneratorSelectorSlot),
/* harmony export */   GeneratorAdditionalFill: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.GeneratorAdditionalFill),
/* harmony export */   GeneratorAdditionalSlot: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.GeneratorAdditionalSlot),
/* harmony export */   GeneratorControlsFill: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.GeneratorControlsFill),
/* harmony export */   GeneratorControlsSlot: () => (/* reexport safe */ _slot_fill__WEBPACK_IMPORTED_MODULE_0__.GeneratorControlsSlot),
/* harmony export */   GeneratorSettings: () => (/* reexport safe */ _GeneratorSettings__WEBPACK_IMPORTED_MODULE_3__.GeneratorSettings),
/* harmony export */   GeneratorSettingsPanel: () => (/* reexport safe */ _GeneratorSettings__WEBPACK_IMPORTED_MODULE_3__.GeneratorSettingsPanel),
/* harmony export */   LegacyControls: () => (/* reexport safe */ _legacy_controls__WEBPACK_IMPORTED_MODULE_4__.LegacyControls),
/* harmony export */   NoSchemaNotice: () => (/* reexport safe */ _schema_renderer__WEBPACK_IMPORTED_MODULE_2__.NoSchemaNotice),
/* harmony export */   SchemaBasedControls: () => (/* reexport safe */ _schema_renderer__WEBPACK_IMPORTED_MODULE_2__.SchemaBasedControls),
/* harmony export */   createGeneratorSetAttributes: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.createGeneratorSetAttributes),
/* harmony export */   getAttributeName: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.getAttributeName),
/* harmony export */   getGeneratorControls: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.getGeneratorControls),
/* harmony export */   getGeneratorMeta: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.getGeneratorMeta),
/* harmony export */   getGeneratorValidator: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.getGeneratorValidator),
/* harmony export */   getLegacyFieldValue: () => (/* reexport safe */ _legacy_controls__WEBPACK_IMPORTED_MODULE_4__.getLegacyFieldValue),
/* harmony export */   getRegisteredGeneratorIds: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.getRegisteredGeneratorIds),
/* harmony export */   hasCustomControls: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.hasCustomControls),
/* harmony export */   hasLegacyFormat: () => (/* reexport safe */ _legacy_controls__WEBPACK_IMPORTED_MODULE_4__.hasLegacyFormat),
/* harmony export */   migrateLegacyAttributes: () => (/* reexport safe */ _legacy_controls__WEBPACK_IMPORTED_MODULE_4__.migrateLegacyAttributes),
/* harmony export */   parseLegacyFormat: () => (/* reexport safe */ _legacy_controls__WEBPACK_IMPORTED_MODULE_4__.parseLegacyFormat),
/* harmony export */   parseSettingsFromAttributes: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.parseSettingsFromAttributes),
/* harmony export */   registerGeneratorControls: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.registerGeneratorControls),
/* harmony export */   registerGeneratorMeta: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.registerGeneratorMeta),
/* harmony export */   registerGeneratorValidator: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.registerGeneratorValidator),
/* harmony export */   unregisterGeneratorControls: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.unregisterGeneratorControls),
/* harmony export */   validateAgainstSchema: () => (/* reexport safe */ _schema_renderer__WEBPACK_IMPORTED_MODULE_2__.validateAgainstSchema),
/* harmony export */   validateGeneratorSettings: () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_1__.validateGeneratorSettings)
/* harmony export */ });
/* harmony import */ var _slot_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot-fill */ "./editor/generators/slot-fill.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registry */ "./editor/generators/registry.js");
/* harmony import */ var _schema_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema-renderer */ "./editor/generators/schema-renderer.js");
/* harmony import */ var _GeneratorSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GeneratorSettings */ "./editor/generators/GeneratorSettings.js");
/* harmony import */ var _legacy_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legacy-controls */ "./editor/generators/legacy-controls.js");
/**
 * Generator UI Infrastructure.
 *
 * Main entry point for the generator settings system.
 * Exports all components, utilities, and the Slot/Fill system.
 *
 * @package JetFormBuilder
 */

// Slot/Fill system for extensibility


// Registry for custom controls


// Schema-based control renderer


// Main settings component


// Legacy controls for backward compatibility


/***/ }),

/***/ "./editor/generators/legacy-controls.js":
/*!**********************************************!*\
  !*** ./editor/generators/legacy-controls.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LegacyControls: () => (/* binding */ LegacyControls),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getLegacyFieldValue: () => (/* binding */ getLegacyFieldValue),
/* harmony export */   hasLegacyFormat: () => (/* binding */ hasLegacyFormat),
/* harmony export */   migrateLegacyAttributes: () => (/* binding */ migrateLegacyAttributes),
/* harmony export */   parseLegacyFormat: () => (/* binding */ parseLegacyFormat)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Legacy Controls Component.
 *
 * Provides backward compatibility for generators that don't have
 * new schema definitions. Renders the old-style "Field Name" input
 * and applies existing filter hooks.
 *
 * @package JetFormBuilder
 */

const {
  TextControl,
  BaseControl,
  __experimentalNumberControl
} = wp.components;
const {
  __
} = wp.i18n;
const {
  applyFilters
} = wp.hooks;
const {
  Fragment
} = wp.element;

// Handle NumberControl availability
let NumberControl = wp.components.NumberControl;
if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

/**
 * Number Range Manual Controls.
 *
 * Special handling for the num_range_manual generator which has
 * dedicated numeric inputs.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Set attributes function.
 *
 * @return {JSX.Element} Number range controls.
 */
function NumRangeManualControls({
  attributes,
  setAttributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    label: __('Start of range', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NumberControl, {
    labelPosition: "top",
    step: 0.01,
    value: attributes.generator_numbers_min,
    onChange: newValue => {
      setAttributes({
        generator_numbers_min: Number(newValue)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    label: __('End of range', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NumberControl, {
    labelPosition: "top",
    step: 0.01,
    value: attributes.generator_numbers_max,
    onChange: newValue => {
      setAttributes({
        generator_numbers_max: Number(newValue)
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    label: __('Step', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NumberControl, {
    labelPosition: "top",
    step: 0.01,
    value: attributes.generator_numbers_step,
    onChange: newValue => {
      setAttributes({
        generator_numbers_step: Number(newValue)
      });
    }
  })));
}

/**
 * Default Legacy Controls.
 *
 * Renders the standard "Field Name" input with additional
 * "Value from meta field" and "Calculated value from meta field" inputs.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Set attributes function.
 * @param {Object}   props.editProps     Additional edit props.
 * @param {string}   props.generatorId   Generator ID.
 *
 * @return {JSX.Element} Legacy controls.
 */
function DefaultLegacyControls({
  attributes,
  setAttributes,
  editProps,
  generatorId
}) {
  var _editProps$attrHelp;
  const attrHelp = (_editProps$attrHelp = editProps?.attrHelp) !== null && _editProps$attrHelp !== void 0 ? _editProps$attrHelp : () => '';

  // Main field control - apply filter for extensions
  const mainControl = applyFilters('jet.fb.select.radio.check.generator.controls', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    key: "generator_field",
    label: __('Field Name', 'jet-form-builder'),
    value: attributes.generator_field || '',
    help: attrHelp('generator_field', attributes),
    onChange: newValue => {
      setAttributes({
        generator_field: newValue
      });
    }
  }), generatorId, {
    attributes,
    setAttributes,
    editProps
  });

  // Additional controls - apply filter for extensions
  const additionalControls = applyFilters('jet.fb.select.radio.check.generator.additionalControls', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    key: "value_from_key",
    label: __('Value from meta field', 'jet-form-builder'),
    help: attrHelp('value_from_meta'),
    value: attributes.value_from_key || '',
    onChange: value_from_key => {
      setAttributes({
        value_from_key
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    key: "calculated_value_from_key",
    label: __('Calculated value from meta field', 'jet-form-builder'),
    help: attrHelp('calculated_value_from_key'),
    value: attributes.calculated_value_from_key || '',
    onChange: newValue => {
      setAttributes({
        calculated_value_from_key: newValue
      });
    }
  })), generatorId, {
    attributes,
    setAttributes,
    editProps
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, mainControl, additionalControls);
}

/**
 * Legacy Controls Component.
 *
 * Main component that determines which legacy controls to render
 * based on the generator type.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Set attributes function.
 * @param {Object}   props.editProps     Additional edit props.
 * @param {string}   props.generatorId   Generator ID.
 *
 * @return {JSX.Element} Appropriate legacy controls for the generator.
 */
function LegacyControls(props) {
  const {
    generatorId
  } = props;

  // Special case: num_range_manual has its own dedicated controls
  if (generatorId === 'num_range_manual') {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NumRangeManualControls, {
      ...props
    });
  }

  // Default legacy controls for all other generators
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DefaultLegacyControls, {
    ...props
  });
}

/**
 * Get legacy field value with migration check.
 *
 * Checks if legacy data needs to be migrated and returns
 * the appropriate value.
 *
 * @param {Object} attributes  Block attributes.
 * @param {string} generatorId Generator ID.
 *
 * @return {string} Field value.
 */
function getLegacyFieldValue(attributes, generatorId) {
  // Check for migrated legacy field
  if (attributes._legacy_generator_field) {
    return attributes._legacy_generator_field;
  }

  // Return current generator_field value
  return attributes.generator_field || '';
}

/**
 * Check if attributes contain legacy format that can be migrated.
 *
 * @param {Object} attributes  Block attributes.
 * @param {string} generatorId Generator ID.
 *
 * @return {boolean} True if migration is possible.
 */
function hasLegacyFormat(attributes, generatorId) {
  const value = attributes.generator_field || '';

  // JetEngine Query uses pipe-delimited format
  if (generatorId === 'get_from_query' && value.includes('|')) {
    return true;
  }
  return false;
}

/**
 * Parse legacy format to structured settings.
 *
 * @param {Object} attributes  Block attributes.
 * @param {string} generatorId Generator ID.
 *
 * @return {Object} Parsed settings.
 */
function parseLegacyFormat(attributes, generatorId) {
  const value = attributes.generator_field || '';
  if (!value) {
    return {};
  }
  switch (generatorId) {
    case 'get_from_query':
      const parts = value.split('|');
      return {
        query_id: parts[0] || '',
        value_field: parts[1] || 'ID',
        label_field: parts[2] || 'post_title',
        calc_field: parts[3] || ''
      };
    default:
      return {
        generator_field: value
      };
  }
}

/**
 * Migrate legacy attributes to new format.
 *
 * Should be called in useEffect when block loads.
 *
 * @param {Object}   attributes    Block attributes.
 * @param {Function} setAttributes Set attributes function.
 * @param {string}   generatorId   Generator ID.
 */
function migrateLegacyAttributes(attributes, setAttributes, generatorId) {
  if (!hasLegacyFormat(attributes, generatorId)) {
    return;
  }
  const parsed = parseLegacyFormat(attributes, generatorId);
  if (Object.keys(parsed).length === 0) {
    return;
  }

  // Build new attributes with prefixed keys
  const newAttrs = {};
  Object.entries(parsed).forEach(([key, value]) => {
    // Skip generator_field - it's the original key
    if (key === 'generator_field') {
      return;
    }
    newAttrs[`gen_${generatorId}_${key}`] = value;
  });

  // Store original value for reference
  newAttrs._legacy_generator_field = attributes.generator_field;

  // Clear the legacy field to prevent re-migration
  // Actually, we keep it for backward compatibility but mark as migrated
  // newAttrs.generator_field = '';

  setAttributes(newAttrs);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LegacyControls);

/***/ }),

/***/ "./editor/generators/registry.js":
/*!***************************************!*\
  !*** ./editor/generators/registry.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGeneratorSetAttributes: () => (/* binding */ createGeneratorSetAttributes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAttributeName: () => (/* binding */ getAttributeName),
/* harmony export */   getGeneratorControls: () => (/* binding */ getGeneratorControls),
/* harmony export */   getGeneratorMeta: () => (/* binding */ getGeneratorMeta),
/* harmony export */   getGeneratorValidator: () => (/* binding */ getGeneratorValidator),
/* harmony export */   getRegisteredGeneratorIds: () => (/* binding */ getRegisteredGeneratorIds),
/* harmony export */   hasCustomControls: () => (/* binding */ hasCustomControls),
/* harmony export */   parseSettingsFromAttributes: () => (/* binding */ parseSettingsFromAttributes),
/* harmony export */   registerGeneratorControls: () => (/* binding */ registerGeneratorControls),
/* harmony export */   registerGeneratorMeta: () => (/* binding */ registerGeneratorMeta),
/* harmony export */   registerGeneratorValidator: () => (/* binding */ registerGeneratorValidator),
/* harmony export */   unregisterGeneratorControls: () => (/* binding */ unregisterGeneratorControls),
/* harmony export */   validateGeneratorSettings: () => (/* binding */ validateGeneratorSettings)
/* harmony export */ });
/**
 * Generator Controls Registry.
 *
 * Manages registration and retrieval of custom control components
 * for different generator types.
 *
 * @package JetFormBuilder
 */

/**
 * Internal storage for registered generator controls.
 *
 * @type {Object.<string, Function>}
 */
const generatorControls = {};

/**
 * Internal storage for registered generator validators.
 *
 * @type {Object.<string, Function>}
 */
const generatorValidators = {};

/**
 * Internal storage for generator metadata (from third parties).
 *
 * @type {Object.<string, Object>}
 */
const generatorMeta = {};

/**
 * Register a custom control component for a generator type.
 *
 * Use this when the schema-based auto-generated controls are not sufficient
 * and you need custom UI logic (e.g., dynamic selectors, API calls, etc.).
 *
 * @param {string}   generatorId Generator ID (e.g., 'jet_engine_query', 'my_custom')
 * @param {Function} Component   React component receiving:
 *                               - attributes: Current block attributes
 *                               - setAttributes: Function to update attributes
 *                               - schema: Generator schema definition
 *                               - generatorId: Current generator ID
 *
 * @example
 * ```js
 * registerGeneratorControls( 'my_generator', ( { attributes, setAttributes, schema } ) => {
 *   return (
 *     <TextControl
 *       label="My Field"
 *       value={ attributes.gen_my_generator_field }
 *       onChange={ ( val ) => setAttributes( { gen_my_generator_field: val } ) }
 *     />
 *   );
 * } );
 * ```
 */
function registerGeneratorControls(generatorId, Component) {
  if (typeof Component !== 'function') {
    console.error(`JetFormBuilder: Generator controls for "${generatorId}" must be a function/component.`);
    return;
  }
  generatorControls[generatorId] = Component;
}

/**
 * Unregister controls for a generator type.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {boolean} True if unregistered, false if not found.
 */
function unregisterGeneratorControls(generatorId) {
  if (generatorId in generatorControls) {
    delete generatorControls[generatorId];
    return true;
  }
  return false;
}

/**
 * Get registered control component for a generator.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {Function|null} Control component or null if not registered.
 */
function getGeneratorControls(generatorId) {
  return generatorControls[generatorId] || null;
}

/**
 * Check if a generator has custom controls registered.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {boolean} True if custom controls are registered.
 */
function hasCustomControls(generatorId) {
  return generatorId in generatorControls;
}

/**
 * Get all registered generator control IDs.
 *
 * @return {string[]} Array of generator IDs with custom controls.
 */
function getRegisteredGeneratorIds() {
  return Object.keys(generatorControls);
}

/**
 * Register a validator function for a generator type.
 *
 * Validators are called before saving to ensure settings are valid.
 *
 * @param {string}   generatorId Generator ID.
 * @param {Function} validator   Function receiving settings, returning { valid: boolean, errors: Object }.
 *
 * @example
 * ```js
 * registerGeneratorValidator( 'my_generator', ( settings ) => {
 *   const errors = {};
 *   if ( ! settings.api_url ) {
 *     errors.api_url = 'API URL is required';
 *   }
 *   return { valid: Object.keys( errors ).length === 0, errors };
 * } );
 * ```
 */
function registerGeneratorValidator(generatorId, validator) {
  if (typeof validator !== 'function') {
    console.error(`JetFormBuilder: Generator validator for "${generatorId}" must be a function.`);
    return;
  }
  generatorValidators[generatorId] = validator;
}

/**
 * Get validator for a generator type.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {Function|null} Validator function or null.
 */
function getGeneratorValidator(generatorId) {
  return generatorValidators[generatorId] || null;
}

/**
 * Validate generator settings.
 *
 * @param {string} generatorId Generator ID.
 * @param {Object} settings    Settings to validate.
 *
 * @return {Object} Validation result { valid: boolean, errors: Object }.
 */
function validateGeneratorSettings(generatorId, settings) {
  const validator = getGeneratorValidator(generatorId);
  if (!validator) {
    return {
      valid: true,
      errors: {}
    };
  }
  return validator(settings);
}

/**
 * Register additional metadata for a generator.
 *
 * Can be used to add custom data that controls might need.
 *
 * @param {string} generatorId Generator ID.
 * @param {Object} meta        Metadata object.
 */
function registerGeneratorMeta(generatorId, meta) {
  generatorMeta[generatorId] = {
    ...(generatorMeta[generatorId] || {}),
    ...meta
  };
}

/**
 * Get metadata for a generator.
 *
 * @param {string} generatorId Generator ID.
 *
 * @return {Object} Metadata object or empty object.
 */
function getGeneratorMeta(generatorId) {
  return generatorMeta[generatorId] || {};
}

/**
 * Helper function to get attribute name with generator prefix.
 *
 * @param {string} generatorId Generator ID.
 * @param {string} fieldKey    Field key from schema.
 *
 * @return {string} Prefixed attribute name.
 */
function getAttributeName(generatorId, fieldKey) {
  return `gen_${generatorId}_${fieldKey}`;
}

/**
 * Helper function to parse settings from attributes.
 *
 * @param {string} generatorId Generator ID.
 * @param {Object} attributes  Block attributes.
 * @param {Object} schema      Generator schema.
 *
 * @return {Object} Parsed settings.
 */
function parseSettingsFromAttributes(generatorId, attributes, schema) {
  const settings = {};
  const prefix = `gen_${generatorId}_`;
  Object.keys(schema).forEach(fieldKey => {
    const attrName = prefix + fieldKey;
    const fieldDef = schema[fieldKey];
    if (attrName in attributes) {
      settings[fieldKey] = attributes[attrName];
    } else {
      var _fieldDef$default;
      settings[fieldKey] = (_fieldDef$default = fieldDef.default) !== null && _fieldDef$default !== void 0 ? _fieldDef$default : '';
    }
  });
  return settings;
}

/**
 * Helper function to create setAttributes wrapper for a generator.
 *
 * @param {string}   generatorId   Generator ID.
 * @param {Function} setAttributes Original setAttributes function.
 *
 * @return {Function} Wrapped setAttributes that auto-prefixes keys.
 */
function createGeneratorSetAttributes(generatorId, setAttributes) {
  return settings => {
    const prefixedSettings = {};
    Object.entries(settings).forEach(([key, value]) => {
      // If key is already prefixed, use as-is
      if (key.startsWith('gen_')) {
        prefixedSettings[key] = value;
      } else {
        prefixedSettings[getAttributeName(generatorId, key)] = value;
      }
    });
    setAttributes(prefixedSettings);
  };
}

/**
 * Export registry to global window object for external access.
 *
 * Third-party developers can use:
 * - window.JetFBGenerators.registerControls( id, Component )
 * - window.JetFBGenerators.registerValidator( id, validator )
 * - window.JetFBGenerators.registerMeta( id, meta )
 */
if (typeof window !== 'undefined') {
  window.JetFBGenerators = window.JetFBGenerators || {};
  Object.assign(window.JetFBGenerators, {
    registerControls: registerGeneratorControls,
    unregisterControls: unregisterGeneratorControls,
    getControls: getGeneratorControls,
    hasCustomControls,
    getRegisteredIds: getRegisteredGeneratorIds,
    registerValidator: registerGeneratorValidator,
    getValidator: getGeneratorValidator,
    validate: validateGeneratorSettings,
    registerMeta: registerGeneratorMeta,
    getMeta: getGeneratorMeta,
    getAttributeName,
    parseSettings: parseSettingsFromAttributes,
    createSetAttributes: createGeneratorSetAttributes
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerGeneratorControls,
  unregisterGeneratorControls,
  getGeneratorControls,
  hasCustomControls,
  getRegisteredGeneratorIds,
  registerGeneratorValidator,
  getGeneratorValidator,
  validateGeneratorSettings,
  registerGeneratorMeta,
  getGeneratorMeta,
  getAttributeName,
  parseSettingsFromAttributes,
  createGeneratorSetAttributes
});

/***/ }),

/***/ "./editor/generators/schema-renderer.js":
/*!**********************************************!*\
  !*** ./editor/generators/schema-renderer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoSchemaNotice: () => (/* binding */ NoSchemaNotice),
/* harmony export */   SchemaBasedControls: () => (/* binding */ SchemaBasedControls),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   validateAgainstSchema: () => (/* binding */ validateAgainstSchema)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Schema-Based Control Renderer.
 *
 * Automatically generates form controls based on generator schema definitions.
 * Used as the default renderer when no custom controls are registered.
 *
 * @package JetFormBuilder
 */

const {
  TextControl,
  TextareaControl,
  SelectControl,
  ToggleControl,
  BaseControl,
  __experimentalNumberControl
} = wp.components;
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;

// Handle NumberControl availability (experimental in some WP versions)
let NumberControl = wp.components.NumberControl;
if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

/**
 * Renders a single control based on field definition.
 *
 * @param {Object}   props             Component props.
 * @param {string}   props.fieldKey    Field key from schema.
 * @param {Object}   props.fieldDef    Field definition from schema.
 * @param {*}        props.value       Current field value.
 * @param {Function} props.onChange    Change handler.
 * @param {string}   props.generatorId Generator ID (for unique keys).
 *
 * @return {JSX.Element|null} Control element or null.
 */
function SchemaControl({
  fieldKey,
  fieldDef,
  value,
  onChange,
  generatorId
}) {
  const {
    type = 'string',
    label = fieldKey,
    help,
    placeholder,
    control = 'text',
    options = [],
    min,
    max,
    step = 1,
    rows = 3,
    disabled = false,
    multiple = false
  } = fieldDef;
  const controlKey = `${generatorId}-${fieldKey}`;
  switch (control) {
    case 'number':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
        key: controlKey,
        label: label,
        help: help,
        className: "jfb-generator-control jfb-generator-control--number"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NumberControl, {
        value: value !== null && value !== void 0 ? value : '',
        onChange: newValue => {
          // NumberControl returns string, convert to number if needed
          const numValue = newValue === '' ? '' : Number(newValue);
          onChange(numValue);
        },
        step: step,
        min: min,
        max: max,
        disabled: disabled
      }));
    case 'select':
      // Normalize options to { value, label } format
      const normalizedOptions = options.map(opt => {
        if (typeof opt === 'string') {
          return {
            value: opt,
            label: opt
          };
        }
        return opt;
      });
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
        key: controlKey,
        label: label,
        help: help,
        value: multiple ? value !== null && value !== void 0 ? value : [] : value !== null && value !== void 0 ? value : '',
        onChange: onChange,
        options: normalizedOptions,
        multiple: multiple,
        disabled: disabled,
        className: "jfb-generator-control jfb-generator-control--select"
      });
    case 'toggle':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
        key: controlKey,
        label: label,
        help: help,
        checked: !!value,
        onChange: onChange,
        disabled: disabled,
        className: "jfb-generator-control jfb-generator-control--toggle"
      });
    case 'textarea':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
        key: controlKey,
        label: label,
        help: help,
        value: value !== null && value !== void 0 ? value : '',
        onChange: onChange,
        placeholder: placeholder,
        rows: rows,
        disabled: disabled,
        className: "jfb-generator-control jfb-generator-control--textarea"
      });
    case 'text':
    default:
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        key: controlKey,
        label: label,
        help: help,
        value: value !== null && value !== void 0 ? value : '',
        onChange: onChange,
        placeholder: placeholder,
        type: type === 'number' ? 'number' : 'text',
        disabled: disabled,
        className: "jfb-generator-control jfb-generator-control--text"
      });
  }
}

/**
 * Renders all controls for a generator based on its schema.
 *
 * @param {Object}   props               Component props.
 * @param {string}   props.generatorId   Generator ID.
 * @param {Object}   props.schema        Generator schema definition.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 *
 * @return {JSX.Element|null} Controls or null if no schema.
 */
function SchemaBasedControls({
  generatorId,
  schema,
  attributes,
  setAttributes
}) {
  if (!schema || Object.keys(schema).length === 0) {
    return null;
  }

  /**
   * Gets the attribute key for a schema field.
   *
   * @param {string} fieldKey Schema field key.
   *
   * @return {string} Block attribute key.
   */
  const getAttributeKey = fieldKey => {
    // For legacy generators like num_range_manual, use direct attribute names
    if (fieldKey.startsWith('generator_')) {
      return fieldKey;
    }
    return `gen_${generatorId}_${fieldKey}`;
  };

  /**
   * Gets current value for a schema field.
   *
   * @param {string} fieldKey Schema field key.
   * @param {Object} fieldDef Field definition.
   *
   * @return {*} Current value.
   */
  const getValue = (fieldKey, fieldDef) => {
    var _fieldDef$default;
    const attrKey = getAttributeKey(fieldKey);
    if (attrKey in attributes) {
      return attributes[attrKey];
    }
    return (_fieldDef$default = fieldDef.default) !== null && _fieldDef$default !== void 0 ? _fieldDef$default : '';
  };

  /**
   * Creates onChange handler for a schema field.
   *
   * @param {string} fieldKey Schema field key.
   *
   * @return {Function} Change handler.
   */
  const createOnChange = fieldKey => newValue => {
    const attrKey = getAttributeKey(fieldKey);
    setAttributes({
      [attrKey]: newValue
    });
  };

  /**
   * Check if a field should be visible based on its condition.
   *
   * Condition format: { 'other_field_key': 'expected_value' }
   *   - Key without '!' suffix: show when value matches (equals)
   *   - Key with '!' suffix:    hide when value matches (not equals)
   *
   * Multiple entries are AND-combined: all must pass.
   *
   * @param {Object} condition Condition definition.
   *
   * @return {boolean} True if field should be visible.
   */
  const isConditionMet = condition => {
    if (!condition || typeof condition !== 'object') {
      return true;
    }
    return Object.entries(condition).every(([rawKey, expected]) => {
      const isNegated = rawKey.endsWith('!');
      const conditionKey = isNegated ? rawKey.slice(0, -1) : rawKey;

      // Look up the current value of the referenced field in attributes
      const conditionFieldDef = schema[conditionKey];
      const currentValue = conditionFieldDef ? getValue(conditionKey, conditionFieldDef) : '';

      // Support array of allowed values
      const matches = Array.isArray(expected) ? expected.includes(currentValue) : String(currentValue) === String(expected);
      return isNegated ? !matches : matches;
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, Object.entries(schema).map(([fieldKey, fieldDef]) => {
    if (fieldDef.condition && !isConditionMet(fieldDef.condition)) {
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SchemaControl, {
      key: fieldKey,
      fieldKey: fieldKey,
      fieldDef: fieldDef,
      value: getValue(fieldKey, fieldDef),
      onChange: createOnChange(fieldKey),
      generatorId: generatorId
    });
  }));
}

/**
 * Renders a notice when no schema is available.
 *
 * @param {Object} props               Component props.
 * @param {string} props.generatorId   Generator ID.
 * @param {string} props.generatorName Generator display name.
 *
 * @return {JSX.Element} Notice element.
 */
function NoSchemaNotice({
  generatorId,
  generatorName
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    className: "jfb-generator-no-schema-notice"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('This generator does not have a configuration schema.', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, __('Generator ID:', 'jet-form-builder'), " ", generatorId)));
}

/**
 * Validates values against schema definitions.
 *
 * @param {Object} schema   Generator schema.
 * @param {Object} values   Values to validate.
 *
 * @return {Object} Validation result { valid: boolean, errors: Object }.
 */
function validateAgainstSchema(schema, values) {
  const errors = {};
  Object.entries(schema).forEach(([fieldKey, fieldDef]) => {
    const value = values[fieldKey];

    // Required check
    if (fieldDef.required && (value === undefined || value === '')) {
      errors[fieldKey] = __('This field is required.', 'jet-form-builder');
      return;
    }

    // Skip further validation if empty and not required
    if (value === undefined || value === '') {
      return;
    }

    // Type-specific validation
    switch (fieldDef.type) {
      case 'number':
        if (isNaN(Number(value))) {
          errors[fieldKey] = __('Must be a valid number.', 'jet-form-builder');
        } else {
          const numValue = Number(value);
          if (fieldDef.min !== undefined && numValue < fieldDef.min) {
            errors[fieldKey] = `${__('Minimum value:', 'jet-form-builder')} ${fieldDef.min}`;
          }
          if (fieldDef.max !== undefined && numValue > fieldDef.max) {
            errors[fieldKey] = `${__('Maximum value:', 'jet-form-builder')} ${fieldDef.max}`;
          }
        }
        break;
      case 'boolean':
        if (typeof value !== 'boolean') {
          // Try to coerce
          if (value !== 'true' && value !== 'false' && value !== 0 && value !== 1) {
            errors[fieldKey] = __('Must be true or false.', 'jet-form-builder');
          }
        }
        break;
    }
  });
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  SchemaBasedControls,
  SchemaControl,
  NoSchemaNotice,
  validateAgainstSchema
});

/***/ }),

/***/ "./editor/generators/slot-fill.js":
/*!****************************************!*\
  !*** ./editor/generators/slot-fill.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AfterGeneratorControlsFill: () => (/* binding */ AfterGeneratorControlsFill),
/* harmony export */   AfterGeneratorControlsSlot: () => (/* binding */ AfterGeneratorControlsSlot),
/* harmony export */   AutoUpdateControlsFill: () => (/* binding */ AutoUpdateControlsFill),
/* harmony export */   AutoUpdateControlsSlot: () => (/* binding */ AutoUpdateControlsSlot),
/* harmony export */   BeforeGeneratorSelectorFill: () => (/* binding */ BeforeGeneratorSelectorFill),
/* harmony export */   BeforeGeneratorSelectorSlot: () => (/* binding */ BeforeGeneratorSelectorSlot),
/* harmony export */   GeneratorAdditionalFill: () => (/* binding */ GeneratorAdditionalFill),
/* harmony export */   GeneratorAdditionalSlot: () => (/* binding */ GeneratorAdditionalSlot),
/* harmony export */   GeneratorControlsFill: () => (/* binding */ GeneratorControlsFill),
/* harmony export */   GeneratorControlsSlot: () => (/* binding */ GeneratorControlsSlot),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Slot/Fill system for generator controls.
 *
 * Provides extensibility points for generator-specific UI controls
 * using WordPress Gutenberg's Slot/Fill pattern.
 *
 * @package JetFormBuilder
 */

const {
  createSlotFill
} = wp.components;

/**
 * Main slot for generator-specific controls.
 *
 * Each generator type can register a Fill for this slot to provide
 * its own custom controls. The Fill receives props via fillProps:
 * - attributes: Block attributes
 * - setAttributes: Function to update attributes
 * - generatorId: Current generator ID
 * - schema: Generator schema definition
 *
 * Usage in a Fill:
 * ```js
 * import { GeneratorControlsFill } from './slot-fill';
 *
 * const MyGeneratorControls = () => (
 *   <GeneratorControlsFill>
 *     { ( { attributes, setAttributes, generatorId, schema } ) => (
 *       generatorId === 'my_generator' && (
 *         <TextControl ... />
 *       )
 *     ) }
 *   </GeneratorControlsFill>
 * );
 * ```
 */
const {
  Fill: GeneratorControlsFill,
  Slot: GeneratorControlsSlot
} = createSlotFill('JFBGeneratorControls');

/**
 * Slot for additional/common controls after generator-specific ones.
 *
 * This slot is rendered after the main generator controls and can be used
 * for controls that are common across multiple generators, like:
 * - Value from meta field
 * - Calculated value from meta field
 *
 * Usage:
 * ```js
 * import { GeneratorAdditionalFill } from './slot-fill';
 *
 * const AdditionalControls = () => (
 *   <GeneratorAdditionalFill>
 *     { ( props ) => (
 *       <TextControl ... />
 *     ) }
 *   </GeneratorAdditionalFill>
 * );
 * ```
 */
const {
  Fill: GeneratorAdditionalFill,
  Slot: GeneratorAdditionalSlot
} = createSlotFill('JFBGeneratorAdditional');

/**
 * Slot for auto-update controls.
 *
 * This slot renders the auto-update toggle and field selector
 * when a generator supports cascading updates.
 */
const {
  Fill: AutoUpdateControlsFill,
  Slot: AutoUpdateControlsSlot
} = createSlotFill('JFBAutoUpdateControls');

/**
 * Slot for before generator selector.
 *
 * Can be used to add content before the generator type dropdown,
 * like notices or informational text.
 */
const {
  Fill: BeforeGeneratorSelectorFill,
  Slot: BeforeGeneratorSelectorSlot
} = createSlotFill('JFBBeforeGeneratorSelector');

/**
 * Slot for after all generator controls.
 *
 * Rendered at the very end of the generator settings panel.
 * Useful for adding debug info, help links, etc.
 */
const {
  Fill: AfterGeneratorControlsFill,
  Slot: AfterGeneratorControlsSlot
} = createSlotFill('JFBAfterGeneratorControls');

/**
 * Export all slots and fills for external use.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  GeneratorControlsFill,
  GeneratorControlsSlot,
  GeneratorAdditionalFill,
  GeneratorAdditionalSlot,
  AutoUpdateControlsFill,
  AutoUpdateControlsSlot,
  BeforeGeneratorSelectorFill,
  BeforeGeneratorSelectorSlot,
  AfterGeneratorControlsFill,
  AfterGeneratorControlsSlot
});

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "jet-form-builder-components":
/*!*************************************!*\
  !*** external ["jfb","components"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["jfb"]["components"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/select */ "./editor/blocks/select/index.js");
/* harmony import */ var _blocks_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/checkbox */ "./editor/blocks/checkbox/index.js");
/* harmony import */ var _blocks_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/radio */ "./editor/blocks/radio/index.js");



const {
  addFilter
} = wp.hooks;
addFilter('jet.fb.register.fields', 'jet-form-builder/select', function (blocks) {
  blocks.push(_blocks_select__WEBPACK_IMPORTED_MODULE_0__, _blocks_checkbox__WEBPACK_IMPORTED_MODULE_1__, _blocks_radio__WEBPACK_IMPORTED_MODULE_2__);
  return blocks;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFLQTtBQUFBO0FBSUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFRQTtBQUVBOzs7Ozs7Ozs7Ozs7QUN2SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7OztBQzNFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7O0FDMVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQWFBO0FBQ0E7O0FBZ0JBO0FBQ0E7O0FBTUE7QUFDQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBY0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNsSEE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBTUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9lbW90aW9uLWlzLXByb3AtdmFsaWQuZXNtLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuZXNtLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BsaW5hcmlhL2NvcmUvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvcmVhY3QvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9ibG9ja3MvY2hlY2tib3gvZWRpdC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2Jsb2Nrcy9jaGVja2JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2Jsb2Nrcy9jaGVja2JveC9pbmRleC5wY3NzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvYmxvY2tzL2NoZWNrYm94L3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9ibG9ja3MvcmFkaW8vZWRpdC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2Jsb2Nrcy9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2Jsb2Nrcy9yYWRpby9pbmRleC5wY3NzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvYmxvY2tzL3JhZGlvL3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9ibG9ja3Mvc2VsZWN0L2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9ibG9ja3Mvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvYmxvY2tzL3NlbGVjdC9wcmV2aWV3LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvY29tcG9uZW50cy9DdXN0b21UZW1wbGF0ZUNvbnRyb2xzLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvY29tcG9uZW50cy9Gcm9tTWFudWFsL0J1bGtPcHRpb25zLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvY29tcG9uZW50cy9Gcm9tTWFudWFsL0J1bGtPcHRpb25zLmpzPzVhZWQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9jb21wb25lbnRzL0Zyb21NYW51YWwvRnJvbU1hbnVhbEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvRnJvbU1hbnVhbC9Gcm9tTWFudWFsRmllbGRzQ29udGVudC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvRnJvbU1hbnVhbC9Gcm9tTWFudWFsT3B0aW9uSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvRnJvbU1hbnVhbC9Gcm9tTWFudWFsT3B0aW9uSXRlbS5qcz9hYTIyIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvY29tcG9uZW50cy9Gcm9tTWFudWFsL0Zyb21NYW51YWxPcHRpb25zQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvY29tcG9uZW50cy9Gcm9tTWFudWFsL2Zyb21CdWxrLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvY29tcG9uZW50cy9Gcm9tTWFudWFsL3RvQnVsay5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvRnJvbVBvc3RUZXJtc0ZpZWxkcy5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvU2VsZWN0UmFkaW9DaGVjay5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvY29tcG9uZW50cy9zb3VyY2VzLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvZ2VuZXJhdG9ycy9HZW5lcmF0b3JTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2dlbmVyYXRvcnMvY29tcG9uZW50cy9BdXRvVXBkYXRlQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9nZW5lcmF0b3JzL2NvbXBvbmVudHMvYXV0by11cGRhdGUtY29udHJvbHMucGNzcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2dlbmVyYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9nZW5lcmF0b3JzL2xlZ2FjeS1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2dlbmVyYXRvcnMvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9nZW5lcmF0b3JzL3NjaGVtYS1yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2dlbmVyYXRvcnMvc2xvdC1maWxsLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhYmJyfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRpc2FibGVSZW1vdGVQbGF5YmFja3xkb3dubG9hZHxkcmFnZ2FibGV8ZW5jVHlwZXxlbnRlcktleUhpbnR8ZmV0Y2hwcmlvcml0eXxmZXRjaFByaW9yaXR5fGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHJhbnNsYXRlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5jcmVtZW50YWx8ZmFsbGJhY2t8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufG9wdGlvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpc1Byb3BWYWxpZCA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IHsgaXNQcm9wVmFsaWQgYXMgZGVmYXVsdCB9O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgeyBtZW1vaXplIGFzIGRlZmF1bHQgfTtcbiIsIi8vIHNyYy9jc3MudHNcbnZhciBpZHggPSAwO1xudmFyIGNzcyA9ICgpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIHJldHVybiBgbW9ja2VkLWNzcy0ke2lkeCsrfWA7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdVc2luZyB0aGUgXCJjc3NcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LidcbiAgKTtcbn07XG52YXIgY3NzX2RlZmF1bHQgPSBjc3M7XG5cbi8vIHNyYy9jeC50c1xudmFyIGN4ID0gZnVuY3Rpb24gY3gyKCkge1xuICBjb25zdCBwcmVzZW50Q2xhc3NOYW1lcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBhdG9taWNDbGFzc2VzID0ge307XG4gIGNvbnN0IG5vbkF0b21pY0NsYXNzZXMgPSBbXTtcbiAgcHJlc2VudENsYXNzTmFtZXMuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgY29uc3QgaW5kaXZpZHVhbENsYXNzTmFtZXMgPSBhcmcgPyBhcmcuc3BsaXQoXCIgXCIpIDogW107XG4gICAgaW5kaXZpZHVhbENsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJhdG1fXCIpKSB7XG4gICAgICAgIGNvbnN0IFssIGtleUhhc2hdID0gY2xhc3NOYW1lLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSA9IGNsYXNzTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbkF0b21pY0NsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAoY29uc3Qga2V5SGFzaCBpbiBhdG9taWNDbGFzc2VzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhdG9taWNDbGFzc2VzLCBrZXlIYXNoKSkge1xuICAgICAgcmVzdWx0LnB1c2goYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKC4uLm5vbkF0b21pY0NsYXNzZXMpO1xuICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpO1xufTtcbnZhciBjeF9kZWZhdWx0ID0gY3g7XG5leHBvcnQge1xuICBjc3NfZGVmYXVsdCBhcyBjc3MsXG4gIGN4X2RlZmF1bHQgYXMgY3hcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiLy8gc3JjL3N0eWxlZC50c1xuaW1wb3J0IHZhbGlkQXR0ciBmcm9tIFwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3ggfSBmcm9tIFwiQGxpbmFyaWEvY29yZVwiO1xudmFyIGlzQ2FwaXRhbCA9IChjaCkgPT4gY2gudG9VcHBlckNhc2UoKSA9PT0gY2g7XG52YXIgZmlsdGVyS2V5ID0gKGtleXMpID0+IChrZXkpID0+IGtleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbnZhciBvbWl0ID0gKG9iaiwga2V5cykgPT4ge1xuICBjb25zdCByZXMgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoZmlsdGVyS2V5KGtleXMpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICByZXNba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn07XG5mdW5jdGlvbiBmaWx0ZXJQcm9wcyhhc0lzLCBwcm9wcywgb21pdEtleXMpIHtcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IG9taXQocHJvcHMsIG9taXRLZXlzKTtcbiAgaWYgKCFhc0lzKSB7XG4gICAgY29uc3QgaW50ZXJvcFZhbGlkQXR0ciA9IHR5cGVvZiB2YWxpZEF0dHIgPT09IFwiZnVuY3Rpb25cIiA/IHsgZGVmYXVsdDogdmFsaWRBdHRyIH0gOiB2YWxpZEF0dHI7XG4gICAgT2JqZWN0LmtleXMoZmlsdGVyZWRQcm9wcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWludGVyb3BWYWxpZEF0dHIuZGVmYXVsdChrZXkpKSB7XG4gICAgICAgIGRlbGV0ZSBmaWx0ZXJlZFByb3BzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkUHJvcHM7XG59XG52YXIgd2FybklmSW52YWxpZCA9ICh2YWx1ZSwgY29tcG9uZW50TmFtZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlLG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBBbiBpbnRlcnBvbGF0aW9uIGV2YWx1YXRlZCB0byAnJHtzdHJpbmdpZmllZH0nIGluIHRoZSBjb21wb25lbnQgJyR7Y29tcG9uZW50TmFtZX0nLCB3aGljaCBpcyBwcm9iYWJseSBhIG1pc3Rha2UuIFlvdSBzaG91bGQgZXhwbGljaXRseSBjYXN0IG9yIHRyYW5zZm9ybSB0aGUgdmFsdWUgdG8gYSBzdHJpbmcuYFxuICAgICk7XG4gIH1cbn07XG52YXIgaWR4ID0gMDtcbmZ1bmN0aW9uIHN0eWxlZCh0YWcpIHtcbiAgbGV0IG1vY2tlZENsYXNzID0gXCJcIjtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIG1vY2tlZENsYXNzICs9IGBtb2NrZWQtc3R5bGVkLSR7aWR4Kyt9YDtcbiAgICBpZiAodGFnICYmIHRhZy5fX3d5d19tZXRhICYmIHRhZy5fX3d5d19tZXRhLmNsYXNzTmFtZSkge1xuICAgICAgbW9ja2VkQ2xhc3MgKz0gYCAke3RhZy5fX3d5d19tZXRhLmNsYXNzTmFtZX1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKG9wdGlvbnMpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInRlc3RcIikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdVc2luZyB0aGUgXCJzdHlsZWRcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NhbGxzdGFjay9saW5hcmlhI3NldHVwJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZW5kZXIgPSAocHJvcHMsIHJlZikgPT4ge1xuICAgICAgY29uc3QgeyBhczogY29tcG9uZW50ID0gdGFnLCBjbGFzczogY2xhc3NOYW1lID0gbW9ja2VkQ2xhc3MgfSA9IHByb3BzO1xuICAgICAgY29uc3Qgc2hvdWxkS2VlcFByb3BzID0gb3B0aW9ucy5wcm9wc0FzSXMgPT09IHZvaWQgMCA/ICEodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJzdHJpbmdcIiAmJiBjb21wb25lbnQuaW5kZXhPZihcIi1cIikgPT09IC0xICYmICFpc0NhcGl0YWwoY29tcG9uZW50WzBdKSkgOiBvcHRpb25zLnByb3BzQXNJcztcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvcHMgPSBmaWx0ZXJQcm9wcyhzaG91bGRLZWVwUHJvcHMsIHByb3BzLCBbXG4gICAgICAgIFwiYXNcIixcbiAgICAgICAgXCJjbGFzc1wiXG4gICAgICBdKTtcbiAgICAgIGZpbHRlcmVkUHJvcHMucmVmID0gcmVmO1xuICAgICAgZmlsdGVyZWRQcm9wcy5jbGFzc05hbWUgPSBvcHRpb25zLmF0b21pYyA/IGN4KG9wdGlvbnMuY2xhc3MsIGZpbHRlcmVkUHJvcHMuY2xhc3NOYW1lIHx8IGNsYXNzTmFtZSkgOiBjeChmaWx0ZXJlZFByb3BzLmNsYXNzTmFtZSB8fCBjbGFzc05hbWUsIG9wdGlvbnMuY2xhc3MpO1xuICAgICAgY29uc3QgeyB2YXJzIH0gPSBvcHRpb25zO1xuICAgICAgaWYgKHZhcnMpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHZhcnMpIHtcbiAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHZhcnNbbmFtZV07XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFyaWFibGVbMF07XG4gICAgICAgICAgY29uc3QgdW5pdCA9IHZhcmlhYmxlWzFdIHx8IFwiXCI7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgcmVzdWx0ID09PSBcImZ1bmN0aW9uXCIgPyByZXN1bHQocHJvcHMpIDogcmVzdWx0O1xuICAgICAgICAgIHdhcm5JZkludmFsaWQodmFsdWUsIG9wdGlvbnMubmFtZSk7XG4gICAgICAgICAgc3R5bGVbYC0tJHtuYW1lfWBdID0gYCR7dmFsdWV9JHt1bml0fWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3duU3R5bGUgPSBmaWx0ZXJlZFByb3BzLnN0eWxlIHx8IHt9O1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3duU3R5bGUpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHN0eWxlW2tleV0gPSBvd25TdHlsZVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbHRlcmVkUHJvcHMuc3R5bGUgPSBzdHlsZTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWcuX193eXdfbWV0YSAmJiB0YWcgIT09IGNvbXBvbmVudCkge1xuICAgICAgICBmaWx0ZXJlZFByb3BzLmFzID0gY29tcG9uZW50O1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh0YWcsIGZpbHRlcmVkUHJvcHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBmaWx0ZXJlZFByb3BzKTtcbiAgICB9O1xuICAgIGNvbnN0IFJlc3VsdCA9IGZvcndhcmRSZWYgPyBmb3J3YXJkUmVmKHJlbmRlcikgOiAoXG4gICAgICAvLyBSZWFjdC5mb3J3YXJkUmVmIHdvbid0IGF2YWlsYWJsZSBvbiBvbGRlciBSZWFjdCB2ZXJzaW9ucyBhbmQgaW4gUHJlYWN0XG4gICAgICAvLyBGYWxsYmFjayB0byBhIGlubmVyUmVmIHByb3AgaW4gdGhhdCBjYXNlXG4gICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdCA9IG9taXQocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcihyZXN0LCBwcm9wcy5pbm5lclJlZik7XG4gICAgICB9XG4gICAgKTtcbiAgICBSZXN1bHQuZGlzcGxheU5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgUmVzdWx0Ll9fd3l3X21ldGEgPSB7XG4gICAgICBjbGFzc05hbWU6IG9wdGlvbnMuY2xhc3MgfHwgbW9ja2VkQ2xhc3MsXG4gICAgICBleHRlbmRzOiB0YWdcbiAgICB9O1xuICAgIHJldHVybiBSZXN1bHQ7XG4gIH07XG59XG52YXIgc3R5bGVkX2RlZmF1bHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBuZXcgUHJveHkoc3R5bGVkLCB7XG4gIGdldChvLCBwcm9wKSB7XG4gICAgcmV0dXJuIG8ocHJvcCk7XG4gIH1cbn0pIDogc3R5bGVkO1xuZXhwb3J0IHtcbiAgc3R5bGVkX2RlZmF1bHQgYXMgc3R5bGVkXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsImltcG9ydCBwcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5pbXBvcnQgeyBTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlcic7XG5pbXBvcnQgU2VsZWN0UmFkaW9DaGVjayBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlbGVjdFJhZGlvQ2hlY2snO1xuaW1wb3J0IEN1c3RvbVRlbXBsYXRlQ29udHJvbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXN0b21UZW1wbGF0ZUNvbnRyb2xzJztcblxuY29uc3Qge1xuXHQgICAgICBBZHZhbmNlZEZpZWxkcyxcblx0ICAgICAgVG9vbEJhckZpZWxkcyxcblx0ICAgICAgRmllbGRDb250cm9sLFxuXHQgICAgICBCbG9ja05hbWUsXG5cdCAgICAgIEJsb2NrTGFiZWwsXG5cdCAgICAgIEJsb2NrRGVzY3JpcHRpb24sXG5cdCAgICAgIEJsb2NrQWR2YW5jZWRWYWx1ZSxcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlLFxuICAgICAgfSA9IEpldEZCSG9va3M7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIEluc3BlY3RvckNvbnRyb2xzLFxuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuXHQgICAgICBCbG9ja1NldHRpbmdzTWVudUNvbnRyb2xzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIFNWRyxcblx0ICAgICAgUGF0aCxcbiAgICAgIH0gPSB3cC5wcmltaXRpdmVzO1xuXG5jb25zdCB7XG5cdCAgICAgIFBhbmVsQm9keSxcblx0ICAgICAgVGV4dENvbnRyb2wsXG5cdCAgICAgIFRvb2xiYXJCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgbG9jYWxpemVkID0gd2luZG93LkpldEZvcm1PcHRpb25GaWVsZERhdGE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94RWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblx0dXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlKCk7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIGlzU2VsZWN0ZWQsXG5cdFx0ICAgICAgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSxcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRpZiAoIGF0dHJpYnV0ZXMuaXNQcmV2aWV3ICkge1xuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXsge1xuXHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHR9IH0+XG5cdFx0XHR7IHByZXZpZXcgfVxuXHRcdDwvZGl2Pjtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdHsgaXNTZWxlY3RlZCAmJiA8QmxvY2tTZXR0aW5nc01lbnVDb250cm9scy8+IH1cblx0XHQ8VG9vbEJhckZpZWxkcz5cblx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdGljb249eyBhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24uYWxsb3dcblx0XHRcdFx0XHQ/IDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG5cdFx0XHRcdFx0PHJlY3Qgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgcng9XCIyXCIgZmlsbD1cIiMxMDE1MTdcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0zMCAxNi43OTZMMTguMDQ0IDI4Ljg4MTNMMTQgMzBMMTUuMTU2IDI2LjA4NjdMMjcuMTEwNyAxNEwzMCAxNi43OTZaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTEyIDhINlYyMUgxNy4zMzk4TDE1LjMzOTggMjNINkw1Ljc5NTkgMjIuOTg5M0M0Ljg1NDM1IDIyLjg5MzggNC4xMDYyIDIyLjE0NTcgNC4wMTA3NCAyMS4yMDQxTDQgMjFWOEM0IDYuODk1NDMgNC44OTU0MyA2IDYgNkgxMlY4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0yMSAxNy4zMzk4TDE5IDE5LjMzOThWMTVIMjFWMTcuMzM5OFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTkgM0gyMVY2SDI0VjhIMjFWMTFIMTlWOEgxNlY2SDE5VjNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ6IDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0zMCAxNi43OTZMMTguMDQ0IDI4Ljg4MTNMMTQgMzBMMTUuMTU2IDI2LjA4NjdMMjcuMTEwNyAxNEwzMCAxNi43OTZaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTEyIDhINlYyMUgxNy4zMzk4TDE1LjMzOTggMjNINkw1Ljc5NTkgMjIuOTg5M0M0Ljg1NDM1IDIyLjg5MzggNC4xMDYyIDIyLjE0NTcgNC4wMTA3NCAyMS4yMDQxTDQgMjFWOEM0IDYuODk1NDMgNC44OTU0MyA2IDYgNkgxMlY4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0yMSAxNy4zMzk4TDE5IDE5LjMzOThWMTVIMjFWMTcuMzM5OFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTkgM0gyMVY2SDI0VjhIMjFWMTFIMTlWOEgxNlY2SDE5VjNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZT17IGF0dHJpYnV0ZXMuY3VzdG9tX29wdGlvbi5hbGxvd1xuXHRcdFx0XHRcdFx0PyBfXyhcblx0XHRcdFx0XHRcdCdEaXNhYmxlIGN1c3RvbSBvcHRpb25zJyxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6IF9fKFxuXHRcdFx0XHRcdFx0J0VuYWJsZSBjdXN0b20gb3B0aW9ucycsXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0Y3VzdG9tX29wdGlvbjoge1xuXHRcdFx0XHRcdFx0Li4uYXR0cmlidXRlcy5jdXN0b21fb3B0aW9uLFxuXHRcdFx0XHRcdFx0YWxsb3c6ICFhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24uYWxsb3csXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSApIH1cblx0XHRcdFx0aXNBY3RpdmU9eyBhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24uYWxsb3cgfVxuXHRcdFx0Lz5cblx0XHQ8L1Rvb2xCYXJGaWVsZHM+XG5cdFx0PEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0dlbmVyYWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHQ8QmxvY2tMYWJlbC8+XG5cdFx0XHRcdDxCbG9ja05hbWUvPlxuXHRcdFx0XHQ8QmxvY2tEZXNjcmlwdGlvbi8+XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1ZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfT5cblx0XHRcdFx0PEJsb2NrQWR2YW5jZWRWYWx1ZS8+XG5cdFx0XHRcdHsgYXR0cmlidXRlcy5jdXN0b21fb3B0aW9uLmFsbG93ICYmIDw+XG5cdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdCdXR0b24gbGFiZWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGxhYmVsID0+IHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0Y3VzdG9tX29wdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdC4uLmF0dHJpYnV0ZXMuY3VzdG9tX29wdGlvbixcblx0XHRcdFx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgX18oICdGb3IgY3VzdG9tIG9wdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jdXN0b21fb3B0aW9uLmxhYmVsIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8Lz4gfVxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHMvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXInICkgfVxuXHRcdFx0XHRzY3JpcHREYXRhPXsgbG9jYWxpemVkIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2sgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHQ8Q3VzdG9tVGVtcGxhdGVDb250cm9sc1xuXHRcdFx0XHRcdGxpc3RpbmdUeXBlcz17IGxvY2FsaXplZC5saXN0aW5nc19saXN0IH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEZpZWxkQ29udHJvbFxuXHRcdFx0XHRcdHR5cGU9XCJjdXN0b21fc2V0dGluZ3NcIlxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdjdXN0b21TZXR0aW5nc0ZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1NlbGVjdFJhZGlvQ2hlY2s+XG5cdFx0PC9kaXY+XG5cdDwvPjtcbn0iLCJpbXBvcnQgQ2hlY2tib3hFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnQHNoYXJlZC9ibG9ja3MvY2hlY2tib3gvYmxvY2suanNvbic7XG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgY3JlYXRlQmxvY2sgfSA9IHdwLmJsb2NrcztcblxuY29uc3QgeyBuYW1lLCBpY29uIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZGVzY3JpcHRpb246IF9fKFxuXHRcdGBNYWtlIGEgbGlzdCBvZiBvcHRpb25zIGZvciB0aGUgdXNlcnMgdG8gY2hvb3NlIHNldmVyYWwgdmFyaWFudHMgXG53aXRoIGEgbXVsdGktb3B0aW9uYWwgZmllbGQuIEFsbG93IHRvIHBpY2sgYXMgbWFueSB2YXJpYW50cyBhcyB0aGUgdmlzaXRvciBuZWVkcy5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0ZWRpdDogQ2hlY2tib3hFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYmxvY2tOYW1lJywgJ2F0dHJIZWxwJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxuXHRcdH0sXG5cdH0sXG5cdHRyYW5zZm9ybXM6IHtcblx0XHR0bzogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0XHRibG9ja3M6IFsgJ2pldC1mb3Jtcy90ZXh0LWZpZWxkJyBdLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICggYXR0cmlidXRlcyApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soICdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXG5cdFx0XHRcdFx0XHR7IC4uLmF0dHJpYnV0ZXMgfSApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcmlvcml0eTogMCxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRmcm9tOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdibG9jaycsXG5cdFx0XHRcdGJsb2NrczogW1xuXHRcdFx0XHRcdCdqZXQtZm9ybXMvcmFkaW8tZmllbGQnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybXMvc2VsZWN0LWZpZWxkJyxcblx0XHRcdFx0XHQnamV0LWZvcm1zL3RleHQtZmllbGQnLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICggYXR0cmlidXRlcyApID0+IHtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24gPSAhIWF0dHJpYnV0ZXMuY3VzdG9tX29wdGlvbj8uYWxsb3c7XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCBuYW1lLCB7IC4uLmF0dHJpYnV0ZXMgfSApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcmlvcml0eTogMCxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5ncyxcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgcHJldmlldyA9IChcblx0PHN2ZyB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHZpZXdCb3g9XCIwIDAgMjk4IDE0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxyZWN0IHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgZmlsbD1cIiNGMUY1RjlcIi8+XG5cdFx0PHBhdGggZD1cIk0yMi4xNjQxIDUwLjgzNUgyMy40NzY2QzIzLjQwODIgNTEuNDYzOSAyMy4yMjgyIDUyLjAyNjcgMjIuOTM2NSA1Mi41MjM0QzIyLjY0NDkgNTMuMDIwMiAyMi4yMzI0IDUzLjQxNDQgMjEuNjk5MiA1My43MDYxQzIxLjE2NiA1My45OTMyIDIwLjUwMDcgNTQuMTM2NyAxOS43MDMxIDU0LjEzNjdDMTkuMTE5OCA1NC4xMzY3IDE4LjU4ODkgNTQuMDI3MyAxOC4xMTA0IDUzLjgwODZDMTcuNjM2NCA1My41ODk4IDE3LjIyODUgNTMuMjc5OSAxNi44ODY3IDUyLjg3ODlDMTYuNTQ0OSA1Mi40NzMzIDE2LjI4MDYgNTEuOTg4IDE2LjA5MzggNTEuNDIyOUMxNS45MTE1IDUwLjg1MzIgMTUuODIwMyA1MC4yMTk3IDE1LjgyMDMgNDkuNTIyNVY0OC41MzEyQzE1LjgyMDMgNDcuODM0IDE1LjkxMTUgNDcuMjAyOCAxNi4wOTM4IDQ2LjYzNzdDMTYuMjgwNiA0Ni4wNjggMTYuNTQ3MiA0NS41ODA0IDE2Ljg5MzYgNDUuMTc0OEMxNy4yNDQ1IDQ0Ljc2OTIgMTcuNjY2IDQ0LjQ1NyAxOC4xNTgyIDQ0LjIzODNDMTguNjUwNCA0NC4wMTk1IDE5LjIwNDEgNDMuOTEwMiAxOS44MTkzIDQzLjkxMDJDMjAuNTcxMyA0My45MTAyIDIxLjIwNyA0NC4wNTE0IDIxLjcyNjYgNDQuMzM0QzIyLjI0NjEgNDQuNjE2NSAyMi42NDk0IDQ1LjAwODUgMjIuOTM2NSA0NS41MDk4QzIzLjIyODIgNDYuMDA2NSAyMy40MDgyIDQ2LjU4MyAyMy40NzY2IDQ3LjIzOTNIMjIuMTY0MUMyMi4xMDAzIDQ2Ljc3NDQgMjEuOTgxOCA0Ni4zNzU3IDIxLjgwODYgNDYuMDQzQzIxLjYzNTQgNDUuNzA1NyAyMS4zODkzIDQ1LjQ0NiAyMS4wNzAzIDQ1LjI2MzdDMjAuNzUxMyA0NS4wODE0IDIwLjMzNDMgNDQuOTkwMiAxOS44MTkzIDQ0Ljk5MDJDMTkuMzc3MyA0NC45OTAyIDE4Ljk4NzYgNDUuMDc0NSAxOC42NTA0IDQ1LjI0MzJDMTguMzE3NyA0NS40MTE4IDE4LjAzNzQgNDUuNjUxIDE3LjgwOTYgNDUuOTYwOUMxNy41ODYzIDQ2LjI3MDggMTcuNDE3NiA0Ni42NDIzIDE3LjMwMzcgNDcuMDc1MkMxNy4xODk4IDQ3LjUwODEgMTcuMTMyOCA0Ny45ODg5IDE3LjEzMjggNDguNTE3NlY0OS41MjI1QzE3LjEzMjggNTAuMDEwMSAxNy4xODI5IDUwLjQ2ODEgMTcuMjgzMiA1MC44OTY1QzE3LjM4OCA1MS4zMjQ5IDE3LjU0NTIgNTEuNzAwOCAxNy43NTQ5IDUyLjAyNDRDMTcuOTY0NSA1Mi4zNDggMTguMjMxMSA1Mi42MDMyIDE4LjU1NDcgNTIuNzlDMTguODc4MyA1Mi45NzIzIDE5LjI2MTEgNTMuMDYzNSAxOS43MDMxIDUzLjA2MzVDMjAuMjYzNyA1My4wNjM1IDIwLjcxMDMgNTIuOTc0NiAyMS4wNDMgNTIuNzk2OUMyMS4zNzU3IDUyLjYxOTEgMjEuNjI2MyA1Mi4zNjM5IDIxLjc5NDkgNTIuMDMxMkMyMS45NjgxIDUxLjY5ODYgMjIuMDkxMSA1MS4yOTk4IDIyLjE2NDEgNTAuODM1Wk0yNi4zNDc3IDQzLjVWNTRIMjUuMDgzVjQzLjVIMjYuMzQ3N1pNMjYuMDQ2OSA1MC4wMjE1TDI1LjUyMDUgNTAuMDAxQzI1LjUyNTEgNDkuNDk1MSAyNS42MDAzIDQ5LjAyOCAyNS43NDYxIDQ4LjU5OTZDMjUuODkxOSA0OC4xNjY3IDI2LjA5NyA0Ny43OTA3IDI2LjM2MTMgNDcuNDcxN0MyNi42MjU3IDQ3LjE1MjcgMjYuOTQwMSA0Ni45MDY2IDI3LjMwNDcgNDYuNzMzNEMyNy42NzM4IDQ2LjU1NTcgMjguMDgxNyA0Ni40NjY4IDI4LjUyODMgNDYuNDY2OEMyOC44OTI5IDQ2LjQ2NjggMjkuMjIxIDQ2LjUxNjkgMjkuNTEyNyA0Ni42MTcyQzI5LjgwNDQgNDYuNzEyOSAzMC4wNTI3IDQ2Ljg2NzggMzAuMjU3OCA0Ny4wODJDMzAuNDY3NCA0Ny4yOTYyIDMwLjYyNyA0Ny41NzQyIDMwLjczNjMgNDcuOTE2QzMwLjg0NTcgNDguMjUzMyAzMC45MDA0IDQ4LjY2NTcgMzAuOTAwNCA0OS4xNTMzVjU0SDI5LjYyODlWNDkuMTM5NkMyOS42Mjg5IDQ4Ljc1MjMgMjkuNTcxOSA0OC40NDI0IDI5LjQ1OCA0OC4yMUMyOS4zNDQxIDQ3Ljk3MyAyOS4xNzc3IDQ3LjgwMjEgMjguOTU5IDQ3LjY5NzNDMjguNzQwMiA0Ny41ODc5IDI4LjQ3MTQgNDcuNTMzMiAyOC4xNTIzIDQ3LjUzMzJDMjcuODM3OSA0Ny41MzMyIDI3LjU1MDggNDcuNTk5MyAyNy4yOTEgNDcuNzMxNEMyNy4wMzU4IDQ3Ljg2MzYgMjYuODE0OCA0OC4wNDU5IDI2LjYyNzkgNDguMjc4M0MyNi40NDU2IDQ4LjUxMDcgMjYuMzAyMSA0OC43NzczIDI2LjE5NzMgNDkuMDc4MUMyNi4wOTcgNDkuMzc0MyAyNi4wNDY5IDQ5LjY4ODggMjYuMDQ2OSA1MC4wMjE1Wk0zMi40NTkgNTAuMzgzOFY1MC4yMjY2QzMyLjQ1OSA0OS42OTM0IDMyLjUzNjUgNDkuMTk4OSAzMi42OTE0IDQ4Ljc0MzJDMzIuODQ2NCA0OC4yODI5IDMzLjA2OTcgNDcuODg0MSAzMy4zNjEzIDQ3LjU0NjlDMzMuNjUzIDQ3LjIwNTEgMzQuMDA2MiA0Ni45NDA4IDM0LjQyMDkgNDYuNzUzOUMzNC44MzU2IDQ2LjU2MjUgMzUuMzAwNSA0Ni40NjY4IDM1LjgxNTQgNDYuNDY2OEMzNi4zMzUgNDYuNDY2OCAzNi44MDIxIDQ2LjU2MjUgMzcuMjE2OCA0Ni43NTM5QzM3LjYzNjEgNDYuOTQwOCAzNy45OTE1IDQ3LjIwNTEgMzguMjgzMiA0Ny41NDY5QzM4LjU3OTQgNDcuODg0MSAzOC44MDUgNDguMjgyOSAzOC45NiA0OC43NDMyQzM5LjExNDkgNDkuMTk4OSAzOS4xOTI0IDQ5LjY5MzQgMzkuMTkyNCA1MC4yMjY2VjUwLjM4MzhDMzkuMTkyNCA1MC45MTcgMzkuMTE0OSA1MS40MTE1IDM4Ljk2IDUxLjg2NzJDMzguODA1IDUyLjMyMjkgMzguNTc5NCA1Mi43MjE3IDM4LjI4MzIgNTMuMDYzNUMzNy45OTE1IDUzLjQwMDcgMzcuNjM4MyA1My42NjUgMzcuMjIzNiA1My44NTY0QzM2LjgxMzUgNTQuMDQzMyAzNi4zNDg2IDU0LjEzNjcgMzUuODI5MSA1NC4xMzY3QzM1LjMwOTYgNTQuMTM2NyAzNC44NDI0IDU0LjA0MzMgMzQuNDI3NyA1My44NTY0QzM0LjAxMyA1My42NjUgMzMuNjU3NiA1My40MDA3IDMzLjM2MTMgNTMuMDYzNUMzMy4wNjk3IDUyLjcyMTcgMzIuODQ2NCA1Mi4zMjI5IDMyLjY5MTQgNTEuODY3MkMzMi41MzY1IDUxLjQxMTUgMzIuNDU5IDUwLjkxNyAzMi40NTkgNTAuMzgzOFpNMzMuNzIzNiA1MC4yMjY2VjUwLjM4MzhDMzMuNzIzNiA1MC43NTI5IDMzLjc2NjkgNTEuMTAxNiAzMy44NTM1IDUxLjQyOTdDMzMuOTQwMSA1MS43NTMzIDM0LjA3IDUyLjA0MDQgMzQuMjQzMiA1Mi4yOTFDMzQuNDIwOSA1Mi41NDE3IDM0LjY0MTkgNTIuNzM5OSAzNC45MDYyIDUyLjg4NTdDMzUuMTcwNiA1My4wMjcgMzUuNDc4MiA1My4wOTc3IDM1LjgyOTEgNTMuMDk3N0MzNi4xNzU1IDUzLjA5NzcgMzYuNDc4NSA1My4wMjcgMzYuNzM4MyA1Mi44ODU3QzM3LjAwMjYgNTIuNzM5OSAzNy4yMjE0IDUyLjU0MTcgMzcuMzk0NSA1Mi4yOTFDMzcuNTY3NyA1Mi4wNDA0IDM3LjY5NzYgNTEuNzUzMyAzNy43ODQyIDUxLjQyOTdDMzcuODc1MyA1MS4xMDE2IDM3LjkyMDkgNTAuNzUyOSAzNy45MjA5IDUwLjM4MzhWNTAuMjI2NkMzNy45MjA5IDQ5Ljg2MiAzNy44NzUzIDQ5LjUxNzkgMzcuNzg0MiA0OS4xOTQzQzM3LjY5NzYgNDguODY2MiAzNy41NjU0IDQ4LjU3NjggMzcuMzg3NyA0OC4zMjYyQzM3LjIxNDUgNDguMDcxIDM2Ljk5NTggNDcuODcwNCAzNi43MzE0IDQ3LjcyNDZDMzYuNDcxNyA0Ny41Nzg4IDM2LjE2NjMgNDcuNTA1OSAzNS44MTU0IDQ3LjUwNTlDMzUuNDY5MSA0Ny41MDU5IDM1LjE2MzcgNDcuNTc4OCAzNC44OTk0IDQ3LjcyNDZDMzQuNjM5NiA0Ny44NzA0IDM0LjQyMDkgNDguMDcxIDM0LjI0MzIgNDguMzI2MkMzNC4wNyA0OC41NzY4IDMzLjk0MDEgNDguODY2MiAzMy44NTM1IDQ5LjE5NDNDMzMuNzY2OSA0OS41MTc5IDMzLjcyMzYgNDkuODYyIDMzLjcyMzYgNTAuMjI2NlpNNDAuNDQzNCA1MC4zODM4VjUwLjIyNjZDNDAuNDQzNCA0OS42OTM0IDQwLjUyMDggNDkuMTk4OSA0MC42NzU4IDQ4Ljc0MzJDNDAuODMwNyA0OC4yODI5IDQxLjA1NCA0Ny44ODQxIDQxLjM0NTcgNDcuNTQ2OUM0MS42Mzc0IDQ3LjIwNTEgNDEuOTkwNiA0Ni45NDA4IDQyLjQwNTMgNDYuNzUzOUM0Mi44MiA0Ni41NjI1IDQzLjI4NDggNDYuNDY2OCA0My43OTk4IDQ2LjQ2NjhDNDQuMzE5MyA0Ni40NjY4IDQ0Ljc4NjUgNDYuNTYyNSA0NS4yMDEyIDQ2Ljc1MzlDNDUuNjIwNCA0Ni45NDA4IDQ1Ljk3NTkgNDcuMjA1MSA0Ni4yNjc2IDQ3LjU0NjlDNDYuNTYzOCA0Ny44ODQxIDQ2Ljc4OTQgNDguMjgyOSA0Ni45NDQzIDQ4Ljc0MzJDNDcuMDk5MyA0OS4xOTg5IDQ3LjE3NjggNDkuNjkzNCA0Ny4xNzY4IDUwLjIyNjZWNTAuMzgzOEM0Ny4xNzY4IDUwLjkxNyA0Ny4wOTkzIDUxLjQxMTUgNDYuOTQ0MyA1MS44NjcyQzQ2Ljc4OTQgNTIuMzIyOSA0Ni41NjM4IDUyLjcyMTcgNDYuMjY3NiA1My4wNjM1QzQ1Ljk3NTkgNTMuNDAwNyA0NS42MjI3IDUzLjY2NSA0NS4yMDggNTMuODU2NEM0NC43OTc5IDU0LjA0MzMgNDQuMzMzIDU0LjEzNjcgNDMuODEzNSA1NC4xMzY3QzQzLjI5MzkgNTQuMTM2NyA0Mi44MjY4IDU0LjA0MzMgNDIuNDEyMSA1My44NTY0QzQxLjk5NzQgNTMuNjY1IDQxLjY0MTkgNTMuNDAwNyA0MS4zNDU3IDUzLjA2MzVDNDEuMDU0IDUyLjcyMTcgNDAuODMwNyA1Mi4zMjI5IDQwLjY3NTggNTEuODY3MkM0MC41MjA4IDUxLjQxMTUgNDAuNDQzNCA1MC45MTcgNDAuNDQzNCA1MC4zODM4Wk00MS43MDggNTAuMjI2NlY1MC4zODM4QzQxLjcwOCA1MC43NTI5IDQxLjc1MTMgNTEuMTAxNiA0MS44Mzc5IDUxLjQyOTdDNDEuOTI0NSA1MS43NTMzIDQyLjA1NDQgNTIuMDQwNCA0Mi4yMjc1IDUyLjI5MUM0Mi40MDUzIDUyLjU0MTcgNDIuNjI2MyA1Mi43Mzk5IDQyLjg5MDYgNTIuODg1N0M0My4xNTQ5IDUzLjAyNyA0My40NjI2IDUzLjA5NzcgNDMuODEzNSA1My4wOTc3QzQ0LjE1OTggNTMuMDk3NyA0NC40NjI5IDUzLjAyNyA0NC43MjI3IDUyLjg4NTdDNDQuOTg3IDUyLjczOTkgNDUuMjA1NyA1Mi41NDE3IDQ1LjM3ODkgNTIuMjkxQzQ1LjU1MjEgNTIuMDQwNCA0NS42ODIgNTEuNzUzMyA0NS43Njg2IDUxLjQyOTdDNDUuODU5NyA1MS4xMDE2IDQ1LjkwNTMgNTAuNzUyOSA0NS45MDUzIDUwLjM4MzhWNTAuMjI2NkM0NS45MDUzIDQ5Ljg2MiA0NS44NTk3IDQ5LjUxNzkgNDUuNzY4NiA0OS4xOTQzQzQ1LjY4MiA0OC44NjYyIDQ1LjU0OTggNDguNTc2OCA0NS4zNzIxIDQ4LjMyNjJDNDUuMTk4OSA0OC4wNzEgNDQuOTgwMSA0Ny44NzA0IDQ0LjcxNTggNDcuNzI0NkM0NC40NTYxIDQ3LjU3ODggNDQuMTUwNyA0Ny41MDU5IDQzLjc5OTggNDcuNTA1OUM0My40NTM1IDQ3LjUwNTkgNDMuMTQ4MSA0Ny41Nzg4IDQyLjg4MzggNDcuNzI0NkM0Mi42MjQgNDcuODcwNCA0Mi40MDUzIDQ4LjA3MSA0Mi4yMjc1IDQ4LjMyNjJDNDIuMDU0NCA0OC41NzY4IDQxLjkyNDUgNDguODY2MiA0MS44Mzc5IDQ5LjE5NDNDNDEuNzUxMyA0OS41MTc5IDQxLjcwOCA0OS44NjIgNDEuNzA4IDUwLjIyNjZaTTUzLjA2OTMgNTIuMDM4MUM1My4wNjkzIDUxLjg1NTggNTMuMDI4MyA1MS42ODcyIDUyLjk0NjMgNTEuNTMyMkM1Mi44Njg4IDUxLjM3MjcgNTIuNzA3IDUxLjIyOTIgNTIuNDYwOSA1MS4xMDE2QzUyLjIxOTQgNTAuOTY5NCA1MS44NTQ4IDUwLjg1NTUgNTEuMzY3MiA1MC43NTk4QzUwLjk1NyA1MC42NzMyIDUwLjU4NTYgNTAuNTcwNiA1MC4yNTI5IDUwLjQ1MjFDNDkuOTI0OCA1MC4zMzM3IDQ5LjY0NDUgNTAuMTkwMSA0OS40MTIxIDUwLjAyMTVDNDkuMTg0MiA0OS44NTI5IDQ5LjAwODggNDkuNjU0NiA0OC44ODU3IDQ5LjQyNjhDNDguNzYyNyA0OS4xOTg5IDQ4LjcwMTIgNDguOTMyMyA0OC43MDEyIDQ4LjYyN0M0OC43MDEyIDQ4LjMzNTMgNDguNzY1IDQ4LjA1OTYgNDguODkyNiA0Ny43OTk4QzQ5LjAyNDcgNDcuNTQgNDkuMjA5MyA0Ny4zMDk5IDQ5LjQ0NjMgNDcuMTA5NEM0OS42ODc4IDQ2LjkwODkgNDkuOTc3MiA0Ni43NTE2IDUwLjMxNDUgNDYuNjM3N0M1MC42NTE3IDQ2LjUyMzggNTEuMDI3NyA0Ni40NjY4IDUxLjQ0MjQgNDYuNDY2OEM1Mi4wMzQ4IDQ2LjQ2NjggNTIuNTQwNyA0Ni41NzE2IDUyLjk2IDQ2Ljc4MTJDNTMuMzc5MiA0Ni45OTA5IDUzLjcwMDUgNDcuMjcxMiA1My45MjM4IDQ3LjYyMjFDNTQuMTQ3MSA0Ny45Njg0IDU0LjI1ODggNDguMzUzNSA1NC4yNTg4IDQ4Ljc3NzNINTIuOTk0MUM1Mi45OTQxIDQ4LjU3MjMgNTIuOTMyNiA0OC4zNzQgNTIuODA5NiA0OC4xODI2QzUyLjY5MTEgNDcuOTg2NyA1Mi41MTU2IDQ3LjgyNDkgNTIuMjgzMiA0Ny42OTczQzUyLjA1NTMgNDcuNTY5NyA1MS43NzUxIDQ3LjUwNTkgNTEuNDQyNCA0Ny41MDU5QzUxLjA5MTUgNDcuNTA1OSA1MC44MDY2IDQ3LjU2MDUgNTAuNTg3OSA0Ny42Njk5QzUwLjM3MzcgNDcuNzc0NyA1MC4yMTY1IDQ3LjkwOTIgNTAuMTE2MiA0OC4wNzMyQzUwLjAyMDUgNDguMjM3MyA0OS45NzI3IDQ4LjQxMDUgNDkuOTcyNyA0OC41OTI4QzQ5Ljk3MjcgNDguNzI5NSA0OS45OTU0IDQ4Ljg1MjUgNTAuMDQxIDQ4Ljk2MTlDNTAuMDkxMSA0OS4wNjY3IDUwLjE3NzcgNDkuMTY0NyA1MC4zMDA4IDQ5LjI1NTlDNTAuNDIzOCA0OS4zNDI0IDUwLjU5NyA0OS40MjQ1IDUwLjgyMDMgNDkuNTAyQzUxLjA0MzYgNDkuNTc5NCA1MS4zMjg1IDQ5LjY1NjkgNTEuNjc0OCA0OS43MzQ0QzUyLjI4MDkgNDkuODcxMSA1Mi43Nzk5IDUwLjAzNTIgNTMuMTcxOSA1MC4yMjY2QzUzLjU2MzggNTAuNDE4IDUzLjg1NTUgNTAuNjUyNyA1NC4wNDY5IDUwLjkzMDdDNTQuMjM4MyA1MS4yMDg3IDU0LjMzNCA1MS41NDU5IDU0LjMzNCA1MS45NDI0QzU0LjMzNCA1Mi4yNjYgNTQuMjY1NiA1Mi41NjIyIDU0LjEyODkgNTIuODMxMUM1My45OTY3IDUzLjA5OTkgNTMuODAzMSA1My4zMzI0IDUzLjU0NzkgNTMuNTI4M0M1My4yOTcyIDUzLjcxOTcgNTIuOTk2NCA1My44NzAxIDUyLjY0NTUgNTMuOTc5NUM1Mi4yOTkyIDU0LjA4NDMgNTEuOTA5NSA1NC4xMzY3IDUxLjQ3NjYgNTQuMTM2N0M1MC44MjQ5IDU0LjEzNjcgNTAuMjczNCA1NC4wMjA1IDQ5LjgyMjMgNTMuNzg4MUM0OS4zNzExIDUzLjU1NTcgNDkuMDI5MyA1My4yNTQ5IDQ4Ljc5NjkgNTIuODg1N0M0OC41NjQ1IDUyLjUxNjYgNDguNDQ4MiA1Mi4xMjcgNDguNDQ4MiA1MS43MTY4SDQ5LjcxOTdDNDkuNzM4IDUyLjA2MzIgNDkuODM4MiA1Mi4zMzg5IDUwLjAyMDUgNTIuNTQzOUM1MC4yMDI4IDUyLjc0NDUgNTAuNDI2MSA1Mi44ODggNTAuNjkwNCA1Mi45NzQ2QzUwLjk1NDggNTMuMDU2NiA1MS4yMTY4IDUzLjA5NzcgNTEuNDc2NiA1My4wOTc3QzUxLjgyMjkgNTMuMDk3NyA1Mi4xMTIzIDUzLjA1MjEgNTIuMzQ0NyA1Mi45NjA5QzUyLjU4MTcgNTIuODY5OCA1Mi43NjE3IDUyLjc0NDUgNTIuODg0OCA1Mi41ODVDNTMuMDA3OCA1Mi40MjU1IDUzLjA2OTMgNTIuMjQzMiA1My4wNjkzIDUyLjAzODFaTTU5LjA2NDUgNTQuMTM2N0M1OC41NDk1IDU0LjEzNjcgNTguMDgyNCA1NC4wNTAxIDU3LjY2MzEgNTMuODc3QzU3LjI0ODQgNTMuNjk5MiA1Ni44OTA2IDUzLjQ1MDggNTYuNTg5OCA1My4xMzE4QzU2LjI5MzYgNTIuODEyOCA1Ni4wNjU4IDUyLjQzNDYgNTUuOTA2MiA1MS45OTcxQzU1Ljc0NjcgNTEuNTU5NiA1NS42NjcgNTEuMDgxMSA1NS42NjcgNTAuNTYxNVY1MC4yNzQ0QzU1LjY2NyA0OS42NzI5IDU1Ljc1NTkgNDkuMTM3NCA1NS45MzM2IDQ4LjY2OEM1Ni4xMTEzIDQ4LjE5NCA1Ni4zNTI5IDQ3Ljc5MyA1Ni42NTgyIDQ3LjQ2NDhDNTYuOTYzNSA0Ny4xMzY3IDU3LjMwOTkgNDYuODg4MyA1Ny42OTczIDQ2LjcxOTdDNTguMDg0NiA0Ni41NTExIDU4LjQ4NTcgNDYuNDY2OCA1OC45MDA0IDQ2LjQ2NjhDNTkuNDI5IDQ2LjQ2NjggNTkuODg0OCA0Ni41NTc5IDYwLjI2NzYgNDYuNzQwMkM2MC42NTQ5IDQ2LjkyMjUgNjAuOTcxNyA0Ny4xNzc3IDYxLjIxNzggNDcuNTA1OUM2MS40NjM5IDQ3LjgyOTQgNjEuNjQ2MiA0OC4yMTIyIDYxLjc2NDYgNDguNjU0M0M2MS44ODMxIDQ5LjA5MTggNjEuOTQyNCA0OS41NzAzIDYxLjk0MjQgNTAuMDg5OFY1MC42NTcySDU2LjQxODlWNDkuNjI1SDYwLjY3NzdWNDkuNTI5M0M2MC42NTk1IDQ5LjIwMTIgNjAuNTkxMSA0OC44ODIyIDYwLjQ3MjcgNDguNTcyM0M2MC4zNTg3IDQ4LjI2MjQgNjAuMTc2NCA0OC4wMDcyIDU5LjkyNTggNDcuODA2NkM1OS42NzUxIDQ3LjYwNjEgNTkuMzMzMyA0Ny41MDU5IDU4LjkwMDQgNDcuNTA1OUM1OC42MTMzIDQ3LjUwNTkgNTguMzQ5IDQ3LjU2NzQgNTguMTA3NCA0Ny42OTA0QzU3Ljg2NTkgNDcuODA4OSA1Ny42NTg1IDQ3Ljk4NjcgNTcuNDg1NCA0OC4yMjM2QzU3LjMxMjIgNDguNDYwNiA1Ny4xNzc3IDQ4Ljc1IDU3LjA4MiA0OS4wOTE4QzU2Ljk4NjMgNDkuNDMzNiA1Ni45Mzg1IDQ5LjgyNzggNTYuOTM4NSA1MC4yNzQ0VjUwLjU2MTVDNTYuOTM4NSA1MC45MTI0IDU2Ljk4NjMgNTEuMjQyOCA1Ny4wODIgNTEuNTUyN0M1Ny4xODIzIDUxLjg1ODEgNTcuMzI1OCA1Mi4xMjcgNTcuNTEyNyA1Mi4zNTk0QzU3LjcwNDEgNTIuNTkxOCA1Ny45MzQyIDUyLjc3NDEgNTguMjAzMSA1Mi45MDYyQzU4LjQ3NjYgNTMuMDM4NCA1OC43ODY1IDUzLjEwNDUgNTkuMTMyOCA1My4xMDQ1QzU5LjU3OTQgNTMuMTA0NSA1OS45NTc3IDUzLjAxMzMgNjAuMjY3NiA1Mi44MzExQzYwLjU3NzUgNTIuNjQ4OCA2MC44NDg2IDUyLjQwNDkgNjEuMDgxMSA1Mi4wOTk2TDYxLjg0NjcgNTIuNzA4QzYxLjY4NzIgNTIuOTQ5NSA2MS40ODQ0IDUzLjE3OTcgNjEuMjM4MyA1My4zOTg0QzYwLjk5MjIgNTMuNjE3MiA2MC42ODkxIDUzLjc5NDkgNjAuMzI5MSA1My45MzE2QzU5Ljk3MzYgNTQuMDY4NCA1OS41NTIxIDU0LjEzNjcgNTkuMDY0NSA1NC4xMzY3Wk03Mi4zODc3IDUxLjQ4NDRDNzIuMzg3NyA1MS4yNTIgNzIuMzUxMiA1MS4wNDY5IDcyLjI3ODMgNTAuODY5MUM3Mi4yMSA1MC42ODY4IDcyLjA4NjkgNTAuNTIyOCA3MS45MDkyIDUwLjM3N0M3MS43MzYgNTAuMjMxMSA3MS40OTQ1IDUwLjA5MjEgNzEuMTg0NiA0OS45NkM3MC44NzkyIDQ5LjgyNzggNzAuNDkxOSA0OS42OTM0IDcwLjAyMjUgNDkuNTU2NkM2OS41MzAzIDQ5LjQxMDggNjkuMDg1OSA0OS4yNDkgNjguNjg5NSA0OS4wNzEzQzY4LjI5MyA0OC44ODkgNjcuOTUzNSA0OC42ODE2IDY3LjY3MDkgNDguNDQ5MkM2Ny4zODgzIDQ4LjIxNjggNjcuMTcxOSA0Ny45NTAyIDY3LjAyMTUgNDcuNjQ5NEM2Ni44NzExIDQ3LjM0ODYgNjYuNzk1OSA0Ny4wMDQ2IDY2Ljc5NTkgNDYuNjE3MkM2Ni43OTU5IDQ2LjIyOTggNjYuODc1NyA0NS44NzIxIDY3LjAzNTIgNDUuNTQzOUM2Ny4xOTQ3IDQ1LjIxNTggNjcuNDIyNSA0NC45MzEgNjcuNzE4OCA0NC42ODk1QzY4LjAxOTUgNDQuNDQzNCA2OC4zNzczIDQ0LjI1MiA2OC43OTIgNDQuMTE1MkM2OS4yMDY3IDQzLjk3ODUgNjkuNjY5MyA0My45MTAyIDcwLjE3OTcgNDMuOTEwMkM3MC45MjcxIDQzLjkxMDIgNzEuNTYwNSA0NC4wNTM3IDcyLjA4MDEgNDQuMzQwOEM3Mi42MDQyIDQ0LjYyMzQgNzMuMDAyOSA0NC45OTQ4IDczLjI3NjQgNDUuNDU1MUM3My41NDk4IDQ1LjkxMDggNzMuNjg2NSA0Ni4zOTg0IDczLjY4NjUgNDYuOTE4SDcyLjM3NEM3Mi4zNzQgNDYuNTQ0MyA3Mi4yOTQzIDQ2LjIxMzkgNzIuMTM0OCA0NS45MjY4QzcxLjk3NTMgNDUuNjM1MSA3MS43MzM3IDQ1LjQwNzIgNzEuNDEwMiA0NS4yNDMyQzcxLjA4NjYgNDUuMDc0NSA3MC42NzY0IDQ0Ljk5MDIgNzAuMTc5NyA0NC45OTAyQzY5LjcxMDMgNDQuOTkwMiA2OS4zMjI5IDQ1LjA2MDkgNjkuMDE3NiA0NS4yMDIxQzY4LjcxMjIgNDUuMzQzNCA2OC40ODQ0IDQ1LjUzNDggNjguMzM0IDQ1Ljc3NjRDNjguMTg4MiA0Ni4wMTc5IDY4LjExNTIgNDYuMjkzNiA2OC4xMTUyIDQ2LjYwMzVDNjguMTE1MiA0Ni44MTMyIDY4LjE1ODUgNDcuMDA0NiA2OC4yNDUxIDQ3LjE3NzdDNjguMzM2MyA0Ny4zNDY0IDY4LjQ3NTMgNDcuNTAzNiA2OC42NjIxIDQ3LjY0OTRDNjguODUzNSA0Ny43OTUyIDY5LjA5NTEgNDcuOTI5NyA2OS4zODY3IDQ4LjA1MjdDNjkuNjgyOSA0OC4xNzU4IDcwLjAzNjEgNDguMjk0MyA3MC40NDYzIDQ4LjQwODJDNzEuMDExNCA0OC41Njc3IDcxLjQ5OSA0OC43NDU0IDcxLjkwOTIgNDguOTQxNEM3Mi4zMTkzIDQ5LjEzNzQgNzIuNjU2NiA0OS4zNTg0IDcyLjkyMDkgNDkuNjA0NUM3My4xODk4IDQ5Ljg0NiA3My4zODggNTAuMTIxNyA3My41MTU2IDUwLjQzMTZDNzMuNjQ3OCA1MC43MzcgNzMuNzEzOSA1MS4wODMzIDczLjcxMzkgNTEuNDcwN0M3My43MTM5IDUxLjg3NjMgNzMuNjMxOCA1Mi4yNDMyIDczLjQ2NzggNTIuNTcxM0M3My4zMDM3IDUyLjg5OTQgNzMuMDY5IDUzLjE3OTcgNzIuNzYzNyA1My40MTIxQzcyLjQ1ODMgNTMuNjQ0NSA3Mi4wOTE1IDUzLjgyNDUgNzEuNjYzMSA1My45NTIxQzcxLjIzOTMgNTQuMDc1MiA3MC43NjUzIDU0LjEzNjcgNzAuMjQxMiA1NC4xMzY3QzY5Ljc4MDkgNTQuMTM2NyA2OS4zMjc1IDU0LjA3MjkgNjguODgwOSA1My45NDUzQzY4LjQzODggNTMuODE3NyA2OC4wMzU1IDUzLjYyNjMgNjcuNjcwOSA1My4zNzExQzY3LjMxMDkgNTMuMTE1OSA2Ny4wMjE1IDUyLjgwMTQgNjYuODAyNyA1Mi40Mjc3QzY2LjU4ODUgNTIuMDQ5NSA2Ni40ODE0IDUxLjYxMiA2Ni40ODE0IDUxLjExNTJINjcuNzkzOUM2Ny43OTM5IDUxLjQ1NyA2Ny44NiA1MS43NTEgNjcuOTkyMiA1MS45OTcxQzY4LjEyNDMgNTIuMjM4NiA2OC4zMDQ0IDUyLjQzOTEgNjguNTMyMiA1Mi41OTg2QzY4Ljc2NDYgNTIuNzU4MSA2OS4wMjY3IDUyLjg3NjYgNjkuMzE4NCA1Mi45NTQxQzY5LjYxNDYgNTMuMDI3IDY5LjkyMjIgNTMuMDYzNSA3MC4yNDEyIDUzLjA2MzVDNzAuNzAxNSA1My4wNjM1IDcxLjA5MTEgNTIuOTk5NyA3MS40MTAyIDUyLjg3MjFDNzEuNzI5MiA1Mi43NDQ1IDcxLjk3MDcgNTIuNTYyMiA3Mi4xMzQ4IDUyLjMyNTJDNzIuMzAzNCA1Mi4wODgyIDcyLjM4NzcgNTEuODA3OSA3Mi4zODc3IDUxLjQ4NDRaTTc4LjI3MzQgNTQuMTM2N0M3Ny43NTg1IDU0LjEzNjcgNzcuMjkxMyA1NC4wNTAxIDc2Ljg3MjEgNTMuODc3Qzc2LjQ1NzQgNTMuNjk5MiA3Ni4wOTk2IDUzLjQ1MDggNzUuNzk4OCA1My4xMzE4Qzc1LjUwMjYgNTIuODEyOCA3NS4yNzQ3IDUyLjQzNDYgNzUuMTE1MiA1MS45OTcxQzc0Ljk1NTcgNTEuNTU5NiA3NC44NzYgNTEuMDgxMSA3NC44NzYgNTAuNTYxNVY1MC4yNzQ0Qzc0Ljg3NiA0OS42NzI5IDc0Ljk2NDggNDkuMTM3NCA3NS4xNDI2IDQ4LjY2OEM3NS4zMjAzIDQ4LjE5NCA3NS41NjE4IDQ3Ljc5MyA3NS44NjcyIDQ3LjQ2NDhDNzYuMTcyNSA0Ny4xMzY3IDc2LjUxODkgNDYuODg4MyA3Ni45MDYyIDQ2LjcxOTdDNzcuMjkzNiA0Ni41NTExIDc3LjY5NDcgNDYuNDY2OCA3OC4xMDk0IDQ2LjQ2NjhDNzguNjM4IDQ2LjQ2NjggNzkuMDkzOCA0Ni41NTc5IDc5LjQ3NjYgNDYuNzQwMkM3OS44NjM5IDQ2LjkyMjUgODAuMTgwNyA0Ny4xNzc3IDgwLjQyNjggNDcuNTA1OUM4MC42NzI5IDQ3LjgyOTQgODAuODU1MSA0OC4yMTIyIDgwLjk3MzYgNDguNjU0M0M4MS4wOTIxIDQ5LjA5MTggODEuMTUxNCA0OS41NzAzIDgxLjE1MTQgNTAuMDg5OFY1MC42NTcySDc1LjYyNzlWNDkuNjI1SDc5Ljg4NjdWNDkuNTI5M0M3OS44Njg1IDQ5LjIwMTIgNzkuODAwMSA0OC44ODIyIDc5LjY4MTYgNDguNTcyM0M3OS41Njc3IDQ4LjI2MjQgNzkuMzg1NCA0OC4wMDcyIDc5LjEzNDggNDcuODA2NkM3OC44ODQxIDQ3LjYwNjEgNzguNTQyMyA0Ny41MDU5IDc4LjEwOTQgNDcuNTA1OUM3Ny44MjIzIDQ3LjUwNTkgNzcuNTU3OSA0Ny41Njc0IDc3LjMxNjQgNDcuNjkwNEM3Ny4wNzQ5IDQ3LjgwODkgNzYuODY3NSA0Ny45ODY3IDc2LjY5NDMgNDguMjIzNkM3Ni41MjEyIDQ4LjQ2MDYgNzYuMzg2NyA0OC43NSA3Ni4yOTEgNDkuMDkxOEM3Ni4xOTUzIDQ5LjQzMzYgNzYuMTQ3NSA0OS44Mjc4IDc2LjE0NzUgNTAuMjc0NFY1MC41NjE1Qzc2LjE0NzUgNTAuOTEyNCA3Ni4xOTUzIDUxLjI0MjggNzYuMjkxIDUxLjU1MjdDNzYuMzkxMyA1MS44NTgxIDc2LjUzNDggNTIuMTI3IDc2LjcyMTcgNTIuMzU5NEM3Ni45MTMxIDUyLjU5MTggNzcuMTQzMiA1Mi43NzQxIDc3LjQxMjEgNTIuOTA2MkM3Ny42ODU1IDUzLjAzODQgNzcuOTk1NCA1My4xMDQ1IDc4LjM0MTggNTMuMTA0NUM3OC43ODg0IDUzLjEwNDUgNzkuMTY2NyA1My4wMTMzIDc5LjQ3NjYgNTIuODMxMUM3OS43ODY1IDUyLjY0ODggODAuMDU3NiA1Mi40MDQ5IDgwLjI5IDUyLjA5OTZMODEuMDU1NyA1Mi43MDhDODAuODk2MiA1Mi45NDk1IDgwLjY5MzQgNTMuMTc5NyA4MC40NDczIDUzLjM5ODRDODAuMjAxMiA1My42MTcyIDc5Ljg5ODEgNTMuNzk0OSA3OS41MzgxIDUzLjkzMTZDNzkuMTgyNiA1NC4wNjg0IDc4Ljc2MTEgNTQuMTM2NyA3OC4yNzM0IDU0LjEzNjdaTTgzLjg5MjYgNDcuNzY1NlY1NEg4Mi42Mjc5VjQ2LjYwMzVIODMuODU4NEw4My44OTI2IDQ3Ljc2NTZaTTg2LjIwMzEgNDYuNTYyNUw4Ni4xOTYzIDQ3LjczODNDODYuMDkxNSA0Ny43MTU1IDg1Ljk5MTIgNDcuNzAxOCA4NS44OTU1IDQ3LjY5NzNDODUuODA0NCA0Ny42ODgyIDg1LjY5OTUgNDcuNjgzNiA4NS41ODExIDQ3LjY4MzZDODUuMjg5NCA0Ny42ODM2IDg1LjAzMTkgNDcuNzI5MiA4NC44MDg2IDQ3LjgyMDNDODQuNTg1MyA0Ny45MTE1IDg0LjM5NjIgNDguMDM5MSA4NC4yNDEyIDQ4LjIwMzFDODQuMDg2MyA0OC4zNjcyIDgzLjk2MzIgNDguNTYzMiA4My44NzIxIDQ4Ljc5MUM4My43ODU1IDQ5LjAxNDMgODMuNzI4NSA0OS4yNjA0IDgzLjcwMTIgNDkuNTI5M0w4My4zNDU3IDQ5LjczNDRDODMuMzQ1NyA0OS4yODc4IDgzLjM4OSA0OC44Njg1IDgzLjQ3NTYgNDguNDc2NkM4My41NjY3IDQ4LjA4NDYgODMuNzA1NyA0Ny43MzgzIDgzLjg5MjYgNDcuNDM3NUM4NC4wNzk0IDQ3LjEzMjIgODQuMzE2NCA0Ni44OTUyIDg0LjYwMzUgNDYuNzI2NkM4NC44OTUyIDQ2LjU1MzQgODUuMjQxNSA0Ni40NjY4IDg1LjY0MjYgNDYuNDY2OEM4NS43MzM3IDQ2LjQ2NjggODUuODM4NSA0Ni40NzgyIDg1Ljk1NyA0Ni41MDFDODYuMDc1NSA0Ni41MTkyIDg2LjE1NzYgNDYuNTM5NyA4Ni4yMDMxIDQ2LjU2MjVaTTg5Ljc0NDEgNTIuODU4NEw5MS43Njc2IDQ2LjYwMzVIOTMuMDU5Nkw5MC40MDA0IDU0SDg5LjU1MjdMODkuNzQ0MSA1Mi44NTg0Wk04OC4wNTU3IDQ2LjYwMzVMOTAuMTQwNiA1Mi44OTI2TDkwLjI4NDIgNTRIODkuNDM2NUw4Ni43NTY4IDQ2LjYwMzVIODguMDU1N1pNOTUuNjUwNCA0Ni42MDM1VjU0SDk0LjM3ODlWNDYuNjAzNUg5NS42NTA0Wk05NC4yODMyIDQ0LjY0MTZDOTQuMjgzMiA0NC40MzY1IDk0LjM0NDcgNDQuMjYzMyA5NC40Njc4IDQ0LjEyMjFDOTQuNTk1NCA0My45ODA4IDk0Ljc4MjIgNDMuOTEwMiA5NS4wMjgzIDQzLjkxMDJDOTUuMjY5OSA0My45MTAyIDk1LjQ1NDQgNDMuOTgwOCA5NS41ODIgNDQuMTIyMUM5NS43MTQyIDQ0LjI2MzMgOTUuNzgwMyA0NC40MzY1IDk1Ljc4MDMgNDQuNjQxNkM5NS43ODAzIDQ0LjgzNzYgOTUuNzE0MiA0NS4wMDYyIDk1LjU4MiA0NS4xNDc1Qzk1LjQ1NDQgNDUuMjg0MiA5NS4yNjk5IDQ1LjM1MjUgOTUuMDI4MyA0NS4zNTI1Qzk0Ljc4MjIgNDUuMzUyNSA5NC41OTU0IDQ1LjI4NDIgOTQuNDY3OCA0NS4xNDc1Qzk0LjM0NDcgNDUuMDA2MiA5NC4yODMyIDQ0LjgzNzYgOTQuMjgzMiA0NC42NDE2Wk0xMDAuNjQxIDUzLjA5NzdDMTAwLjk0MSA1My4wOTc3IDEwMS4yMTkgNTMuMDM2MSAxMDEuNDc1IDUyLjkxMzFDMTAxLjczIDUyLjc5IDEwMS45MzkgNTIuNjIxNCAxMDIuMTA0IDUyLjQwNzJDMTAyLjI2OCA1Mi4xODg1IDEwMi4zNjEgNTEuOTQwMSAxMDIuMzg0IDUxLjY2MjFIMTAzLjU4N0MxMDMuNTY0IDUyLjA5OTYgMTAzLjQxNiA1Mi41MDc1IDEwMy4xNDMgNTIuODg1N0MxMDIuODc0IDUzLjI1OTQgMTAyLjUyMSA1My41NjI1IDEwMi4wODMgNTMuNzk0OUMxMDEuNjQ2IDU0LjAyMjggMTAxLjE2NSA1NC4xMzY3IDEwMC42NDEgNTQuMTM2N0MxMDAuMDg1IDU0LjEzNjcgOTkuNTk5MyA1NC4wMzg3IDk5LjE4NDYgNTMuODQyOEM5OC43NzQ0IDUzLjY0NjggOTguNDMyNiA1My4zNzc5IDk4LjE1OTIgNTMuMDM2MUM5Ny44OTAzIDUyLjY5NDMgOTcuNjg3NSA1Mi4zMDI0IDk3LjU1MDggNTEuODYwNEM5Ny40MTg2IDUxLjQxMzcgOTcuMzUyNSA1MC45NDIxIDk3LjM1MjUgNTAuNDQ1M1Y1MC4xNTgyQzk3LjM1MjUgNDkuNjYxNSA5Ny40MTg2IDQ5LjE5MjEgOTcuNTUwOCA0OC43NUM5Ny42ODc1IDQ4LjMwMzQgOTcuODkwMyA0Ny45MDkyIDk4LjE1OTIgNDcuNTY3NEM5OC40MzI2IDQ3LjIyNTYgOTguNzc0NCA0Ni45NTY3IDk5LjE4NDYgNDYuNzYwN0M5OS41OTkzIDQ2LjU2NDggMTAwLjA4NSA0Ni40NjY4IDEwMC42NDEgNDYuNDY2OEMxMDEuMjE5IDQ2LjQ2NjggMTAxLjcyNSA0Ni41ODUzIDEwMi4xNTggNDYuODIyM0MxMDIuNTkxIDQ3LjA1NDcgMTAyLjkzMSA0Ny4zNzM3IDEwMy4xNzcgNDcuNzc5M0MxMDMuNDI3IDQ4LjE4MDMgMTAzLjU2NCA0OC42MzYxIDEwMy41ODcgNDkuMTQ2NUgxMDIuMzg0QzEwMi4zNjEgNDguODQxMSAxMDIuMjc0IDQ4LjU2NTQgMTAyLjEyNCA0OC4zMTkzQzEwMS45NzggNDguMDczMiAxMDEuNzc4IDQ3Ljg3NzMgMTAxLjUyMiA0Ny43MzE0QzEwMS4yNzIgNDcuNTgxMSAxMDAuOTc4IDQ3LjUwNTkgMTAwLjY0MSA0Ny41MDU5QzEwMC4yNTMgNDcuNTA1OSA5OS45Mjc0IDQ3LjU4MzMgOTkuNjYzMSA0Ny43MzgzQzk5LjQwMzMgNDcuODg4NyA5OS4xOTYgNDguMDkzOCA5OS4wNDEgNDguMzUzNUM5OC44OTA2IDQ4LjYwODcgOTguNzgxMiA0OC44OTM2IDk4LjcxMjkgNDkuMjA4Qzk4LjY0OTEgNDkuNTE3OSA5OC42MTcyIDQ5LjgzNDYgOTguNjE3MiA1MC4xNTgyVjUwLjQ0NTNDOTguNjE3MiA1MC43Njg5IDk4LjY0OTEgNTEuMDg3OSA5OC43MTI5IDUxLjQwMjNDOTguNzc2NyA1MS43MTY4IDk4Ljg4MzggNTIuMDAxNiA5OS4wMzQyIDUyLjI1NjhDOTkuMTg5MSA1Mi41MTIgOTkuMzk2NSA1Mi43MTcxIDk5LjY1NjIgNTIuODcyMUM5OS45MjA2IDUzLjAyMjUgMTAwLjI0OSA1My4wOTc3IDEwMC42NDEgNTMuMDk3N1pNMTA4LjA3OCA1NC4xMzY3QzEwNy41NjMgNTQuMTM2NyAxMDcuMDk2IDU0LjA1MDEgMTA2LjY3NyA1My44NzdDMTA2LjI2MiA1My42OTkyIDEwNS45MDQgNTMuNDUwOCAxMDUuNjA0IDUzLjEzMThDMTA1LjMwNyA1Mi44MTI4IDEwNS4wNzkgNTIuNDM0NiAxMDQuOTIgNTEuOTk3MUMxMDQuNzYgNTEuNTU5NiAxMDQuNjgxIDUxLjA4MTEgMTA0LjY4MSA1MC41NjE1VjUwLjI3NDRDMTA0LjY4MSA0OS42NzI5IDEwNC43NyA0OS4xMzc0IDEwNC45NDcgNDguNjY4QzEwNS4xMjUgNDguMTk0IDEwNS4zNjcgNDcuNzkzIDEwNS42NzIgNDcuNDY0OEMxMDUuOTc3IDQ3LjEzNjcgMTA2LjMyNCA0Ni44ODgzIDEwNi43MTEgNDYuNzE5N0MxMDcuMDk4IDQ2LjU1MTEgMTA3LjQ5OSA0Ni40NjY4IDEwNy45MTQgNDYuNDY2OEMxMDguNDQzIDQ2LjQ2NjggMTA4Ljg5OCA0Ni41NTc5IDEwOS4yODEgNDYuNzQwMkMxMDkuNjY5IDQ2LjkyMjUgMTA5Ljk4NSA0Ny4xNzc3IDExMC4yMzEgNDcuNTA1OUMxMTAuNDc4IDQ3LjgyOTQgMTEwLjY2IDQ4LjIxMjIgMTEwLjc3OCA0OC42NTQzQzExMC44OTcgNDkuMDkxOCAxMTAuOTU2IDQ5LjU3MDMgMTEwLjk1NiA1MC4wODk4VjUwLjY1NzJIMTA1LjQzM1Y0OS42MjVIMTA5LjY5MVY0OS41MjkzQzEwOS42NzMgNDkuMjAxMiAxMDkuNjA1IDQ4Ljg4MjIgMTA5LjQ4NiA0OC41NzIzQzEwOS4zNzIgNDguMjYyNCAxMDkuMTkgNDguMDA3MiAxMDguOTM5IDQ3LjgwNjZDMTA4LjY4OSA0Ny42MDYxIDEwOC4zNDcgNDcuNTA1OSAxMDcuOTE0IDQ3LjUwNTlDMTA3LjYyNyA0Ny41MDU5IDEwNy4zNjMgNDcuNTY3NCAxMDcuMTIxIDQ3LjY5MDRDMTA2Ljg4IDQ3LjgwODkgMTA2LjY3MiA0Ny45ODY3IDEwNi40OTkgNDguMjIzNkMxMDYuMzI2IDQ4LjQ2MDYgMTA2LjE5MSA0OC43NSAxMDYuMDk2IDQ5LjA5MThDMTA2IDQ5LjQzMzYgMTA1Ljk1MiA0OS44Mjc4IDEwNS45NTIgNTAuMjc0NFY1MC41NjE1QzEwNS45NTIgNTAuOTEyNCAxMDYgNTEuMjQyOCAxMDYuMDk2IDUxLjU1MjdDMTA2LjE5NiA1MS44NTgxIDEwNi4zNCA1Mi4xMjcgMTA2LjUyNiA1Mi4zNTk0QzEwNi43MTggNTIuNTkxOCAxMDYuOTQ4IDUyLjc3NDEgMTA3LjIxNyA1Mi45MDYyQzEwNy40OSA1My4wMzg0IDEwNy44IDUzLjEwNDUgMTA4LjE0NiA1My4xMDQ1QzEwOC41OTMgNTMuMTA0NSAxMDguOTcxIDUzLjAxMzMgMTA5LjI4MSA1Mi44MzExQzEwOS41OTEgNTIuNjQ4OCAxMDkuODYyIDUyLjQwNDkgMTEwLjA5NSA1Mi4wOTk2TDExMC44NiA1Mi43MDhDMTEwLjcwMSA1Mi45NDk1IDExMC40OTggNTMuMTc5NyAxMTAuMjUyIDUzLjM5ODRDMTEwLjAwNiA1My42MTcyIDEwOS43MDMgNTMuNzk0OSAxMDkuMzQzIDUzLjkzMTZDMTA4Ljk4NyA1NC4wNjg0IDEwOC41NjYgNTQuMTM2NyAxMDguMDc4IDU0LjEzNjdaXCIgZmlsbD1cIiM2NDc0OEJcIi8+XG5cdFx0PHBhdGggZD1cIk0yOS4yNSA2NS43NVY3Ni4yNUgxOC43NVY2NS43NUgyOS4yNVpNMjkuMjUgNjQuMjVIMTguNzVDMTcuOTI1IDY0LjI1IDE3LjI1IDY0LjkyNSAxNy4yNSA2NS43NVY3Ni4yNUMxNy4yNSA3Ny4wNzUgMTcuOTI1IDc3Ljc1IDE4Ljc1IDc3Ljc1SDI5LjI1QzMwLjA3NSA3Ny43NSAzMC43NSA3Ny4wNzUgMzAuNzUgNzYuMjVWNjUuNzVDMzAuNzUgNjQuOTI1IDMwLjA3NSA2NC4yNSAyOS4yNSA2NC4yNVpcIiBmaWxsPVwiIzY0NzQ4QlwiLz5cblx0XHQ8cGF0aCBkPVwiTTM5LjUwMzkgNzIuNzA3TDQxLjMzODQgNjYuMjU3OEg0Mi4yMjcxTDQxLjcxMjkgNjguNzY1MUwzOS43Mzg4IDc1LjVIMzguODU2NEwzOS41MDM5IDcyLjcwN1pNMzcuNjA2IDY2LjI1NzhMMzkuMDY1OSA3Mi41ODAxTDM5LjUwMzkgNzUuNUgzOC42Mjc5TDM2LjM4NzIgNjYuMjU3OEgzNy42MDZaTTQ0LjYwMTEgNzIuNTczN0w0Ni4wMjkzIDY2LjI1NzhINDcuMjU0NEw0NS4wMiA3NS41SDQ0LjE0NEw0NC42MDExIDcyLjU3MzdaTTQyLjM2MDQgNjYuMjU3OEw0NC4xNDQgNzIuNzA3TDQ0Ljc5MTUgNzUuNUg0My45MDkyTDQyLjAwNDkgNjguNzY1MUw0MS40ODQ0IDY2LjI1NzhINDIuMzYwNFpNNTEuMDgyIDc1LjYyN0M1MC42MDM4IDc1LjYyNyA1MC4xNzAxIDc1LjU0NjUgNDkuNzgwOCA3NS4zODU3QzQ5LjM5NTcgNzUuMjIwNyA0OS4wNjM1IDc0Ljk5MDEgNDguNzg0MiA3NC42OTM4QzQ4LjUwOTEgNzQuMzk3NiA0OC4yOTc1IDc0LjA0NjQgNDguMTQ5NCA3My42NDAxQzQ4LjAwMTMgNzMuMjMzOSA0Ny45MjcyIDcyLjc4OTYgNDcuOTI3MiA3Mi4zMDcxVjcyLjA0MDVDNDcuOTI3MiA3MS40ODE5IDQ4LjAwOTggNzAuOTg0NyA0OC4xNzQ4IDcwLjU0ODhDNDguMzM5OCA3MC4xMDg3IDQ4LjU2NDEgNjkuNzM2MyA0OC44NDc3IDY5LjQzMTZDNDkuMTMxMiA2OS4xMjcgNDkuNDUyOCA2OC44OTYzIDQ5LjgxMjUgNjguNzM5N0M1MC4xNzIyIDY4LjU4MzIgNTAuNTQ0NiA2OC41MDQ5IDUwLjkyOTcgNjguNTA0OUM1MS40MjA2IDY4LjUwNDkgNTEuODQzOCA2OC41ODk1IDUyLjE5OTIgNjguNzU4OEM1Mi41NTg5IDY4LjkyODEgNTIuODUzIDY5LjE2NSA1My4wODE1IDY5LjQ2OTdDNTMuMzEwMSA2OS43NzAyIDUzLjQ3OTMgNzAuMTI1NyA1My41ODk0IDcwLjUzNjFDNTMuNjk5NCA3MC45NDI0IDUzLjc1NDQgNzEuMzg2NyA1My43NTQ0IDcxLjg2OTFWNzIuMzk2SDQ4LjYyNTVWNzEuNDM3NUg1Mi41ODAxVjcxLjM0ODZDNTIuNTYzMiA3MS4wNDM5IDUyLjQ5OTcgNzAuNzQ3NyA1Mi4zODk2IDcwLjQ2QzUyLjI4MzkgNzAuMTcyMiA1Mi4xMTQ2IDY5LjkzNTIgNTEuODgxOCA2OS43NDlDNTEuNjQ5MSA2OS41NjI4IDUxLjMzMTcgNjkuNDY5NyA1MC45Mjk3IDY5LjQ2OTdDNTAuNjYzMSA2OS40Njk3IDUwLjQxNzYgNjkuNTI2OSA1MC4xOTM0IDY5LjY0MTFDNDkuOTY5MSA2OS43NTExIDQ5Ljc3NjUgNjkuOTE2MiA0OS42MTU3IDcwLjEzNjJDNDkuNDU0OSA3MC4zNTYzIDQ5LjMzMDEgNzAuNjI1IDQ5LjI0MTIgNzAuOTQyNEM0OS4xNTIzIDcxLjI1OTggNDkuMTA3OSA3MS42MjU4IDQ5LjEwNzkgNzIuMDQwNVY3Mi4zMDcxQzQ5LjEwNzkgNzIuNjMzIDQ5LjE1MjMgNzIuOTM5OCA0OS4yNDEyIDczLjIyNzVDNDkuMzM0MyA3My41MTExIDQ5LjQ2NzYgNzMuNzYwNyA0OS42NDExIDczLjk3NjZDNDkuODE4OCA3NC4xOTI0IDUwLjAzMjYgNzQuMzYxNyA1MC4yODIyIDc0LjQ4NDRDNTAuNTM2MSA3NC42MDcxIDUwLjgyMzkgNzQuNjY4NSA1MS4xNDU1IDc0LjY2ODVDNTEuNTYwMiA3NC42Njg1IDUxLjkxMTUgNzQuNTgzOCA1Mi4xOTkyIDc0LjQxNDZDNTIuNDg3IDc0LjI0NTMgNTIuNzM4OCA3NC4wMTg5IDUyLjk1NDYgNzMuNzM1NEw1My42NjU1IDc0LjMwMDNDNTMuNTE3NCA3NC41MjQ2IDUzLjMyOTEgNzQuNzM4MyA1My4xMDA2IDc0Ljk0MTRDNTIuODcyMSA3NS4xNDQ1IDUyLjU5MDcgNzUuMzA5NiA1Mi4yNTYzIDc1LjQzNjVDNTEuOTI2MyA3NS41NjM1IDUxLjUzNDggNzUuNjI3IDUxLjA4MiA3NS42MjdaTTU2LjQwMTQgNjUuNzVWNzUuNUg1NS4yMjA3VjY1Ljc1SDU2LjQwMTRaTTU5LjU2MjUgNjUuNzVWNzUuNUg1OC4zODE4VjY1Ljc1SDU5LjU2MjVaTTYyLjYyMjEgNzAuMDk4MVY3NS41SDYxLjQ0NzhWNjguNjMxOEg2Mi41NTg2TDYyLjYyMjEgNzAuMDk4MVpNNjIuMzQyOCA3MS44MDU3TDYxLjg1NCA3MS43ODY2QzYxLjg1ODIgNzEuMzE2OSA2MS45MjgxIDcwLjg4MzEgNjIuMDYzNSA3MC40ODU0QzYyLjE5ODkgNzAuMDgzMyA2Mi4zODkzIDY5LjczNDIgNjIuNjM0OCA2OS40MzhDNjIuODgwMiA2OS4xNDE4IDYzLjE3MjIgNjguOTEzMiA2My41MTA3IDY4Ljc1MjRDNjMuODUzNSA2OC41ODc0IDY0LjIzMjMgNjguNTA0OSA2NC42NDcgNjguNTA0OUM2NC45ODU1IDY4LjUwNDkgNjUuMjkwMiA2OC41NTE0IDY1LjU2MSA2OC42NDQ1QzY1LjgzMTkgNjguNzMzNCA2Ni4wNjI1IDY4Ljg3NzMgNjYuMjUyOSA2OS4wNzYyQzY2LjQ0NzYgNjkuMjc1MSA2Ni41OTU3IDY5LjUzMzIgNjYuNjk3MyA2OS44NTA2QzY2Ljc5ODggNzAuMTYzNyA2Ni44NDk2IDcwLjU0NjcgNjYuODQ5NiA3MC45OTk1Vjc1LjVINjUuNjY4OVY3MC45ODY4QzY1LjY2ODkgNzAuNjI3MSA2NS42MTYgNzAuMzM5NCA2NS41MTAzIDcwLjEyMzVDNjUuNDA0NSA2OS45MDM1IDY1LjI1IDY5Ljc0NDggNjUuMDQ2OSA2OS42NDc1QzY0Ljg0MzggNjkuNTQ1OSA2NC41OTQxIDY5LjQ5NTEgNjQuMjk3OSA2OS40OTUxQzY0LjAwNTkgNjkuNDk1MSA2My43MzkzIDY5LjU1NjUgNjMuNDk4IDY5LjY3OTJDNjMuMjYxMSA2OS44MDE5IDYzLjA1NTggNjkuOTcxMiA2Mi44ODIzIDcwLjE4N0M2Mi43MTMxIDcwLjQwMjggNjIuNTc5OCA3MC42NTA0IDYyLjQ4MjQgNzAuOTI5N0M2Mi4zODkzIDcxLjIwNDggNjIuMzQyOCA3MS40OTY3IDYyLjM0MjggNzEuODA1N1pNNzEuNDgzNCA3NS42MjdDNzEuMDA1MiA3NS42MjcgNzAuNTcxNSA3NS41NDY1IDcwLjE4MjEgNzUuMzg1N0M2OS43OTcgNzUuMjIwNyA2OS40NjQ4IDc0Ljk5MDEgNjkuMTg1NSA3NC42OTM4QzY4LjkxMDUgNzQuMzk3NiA2OC42OTg5IDc0LjA0NjQgNjguNTUwOCA3My42NDAxQzY4LjQwMjcgNzMuMjMzOSA2OC4zMjg2IDcyLjc4OTYgNjguMzI4NiA3Mi4zMDcxVjcyLjA0MDVDNjguMzI4NiA3MS40ODE5IDY4LjQxMTEgNzAuOTg0NyA2OC41NzYyIDcwLjU0ODhDNjguNzQxMiA3MC4xMDg3IDY4Ljk2NTUgNjkuNzM2MyA2OS4yNDkgNjkuNDMxNkM2OS41MzI2IDY5LjEyNyA2OS44NTQyIDY4Ljg5NjMgNzAuMjEzOSA2OC43Mzk3QzcwLjU3MzYgNjguNTgzMiA3MC45NDYgNjguNTA0OSA3MS4zMzExIDY4LjUwNDlDNzEuODIxOSA2OC41MDQ5IDcyLjI0NTEgNjguNTg5NSA3Mi42MDA2IDY4Ljc1ODhDNzIuOTYwMyA2OC45MjgxIDczLjI1NDQgNjkuMTY1IDczLjQ4MjkgNjkuNDY5N0M3My43MTE0IDY5Ljc3MDIgNzMuODgwNyA3MC4xMjU3IDczLjk5MDcgNzAuNTM2MUM3NC4xMDA3IDcwLjk0MjQgNzQuMTU1OCA3MS4zODY3IDc0LjE1NTggNzEuODY5MVY3Mi4zOTZINjkuMDI2OVY3MS40Mzc1SDcyLjk4MTRWNzEuMzQ4NkM3Mi45NjQ1IDcxLjA0MzkgNzIuOTAxIDcwLjc0NzcgNzIuNzkxIDcwLjQ2QzcyLjY4NTIgNzAuMTcyMiA3Mi41MTYgNjkuOTM1MiA3Mi4yODMyIDY5Ljc0OUM3Mi4wNTA1IDY5LjU2MjggNzEuNzMzMSA2OS40Njk3IDcxLjMzMTEgNjkuNDY5N0M3MS4wNjQ1IDY5LjQ2OTcgNzAuODE5IDY5LjUyNjkgNzAuNTk0NyA2OS42NDExQzcwLjM3MDQgNjkuNzUxMSA3MC4xNzc5IDY5LjkxNjIgNzAuMDE3MSA3MC4xMzYyQzY5Ljg1NjMgNzAuMzU2MyA2OS43MzE0IDcwLjYyNSA2OS42NDI2IDcwLjk0MjRDNjkuNTUzNyA3MS4yNTk4IDY5LjUwOTMgNzEuNjI1OCA2OS41MDkzIDcyLjA0MDVWNzIuMzA3MUM2OS41MDkzIDcyLjYzMyA2OS41NTM3IDcyLjkzOTggNjkuNjQyNiA3My4yMjc1QzY5LjczNTcgNzMuNTExMSA2OS44NjkgNzMuNzYwNyA3MC4wNDI1IDczLjk3NjZDNzAuMjIwMiA3NC4xOTI0IDcwLjQzMzkgNzQuMzYxNyA3MC42ODM2IDc0LjQ4NDRDNzAuOTM3NSA3NC42MDcxIDcxLjIyNTMgNzQuNjY4NSA3MS41NDY5IDc0LjY2ODVDNzEuOTYxNiA3NC42Njg1IDcyLjMxMjggNzQuNTgzOCA3Mi42MDA2IDc0LjQxNDZDNzIuODg4MyA3NC4yNDUzIDczLjE0MDEgNzQuMDE4OSA3My4zNTYgNzMuNzM1NEw3NC4wNjY5IDc0LjMwMDNDNzMuOTE4OCA3NC41MjQ2IDczLjczMDUgNzQuNzM4MyA3My41MDIgNzQuOTQxNEM3My4yNzM0IDc1LjE0NDUgNzIuOTkyIDc1LjMwOTYgNzIuNjU3NyA3NS40MzY1QzcyLjMyNzYgNzUuNTYzNSA3MS45MzYyIDc1LjYyNyA3MS40ODM0IDc1LjYyN1pNNzkuNTI1OSA3My42NzgyQzc5LjUyNTkgNzMuNTA5IDc5LjQ4NzggNzMuMzUyNCA3OS40MTE2IDczLjIwODVDNzkuMzM5NyA3My4wNjA0IDc5LjE4OTUgNzIuOTI3MSA3OC45NjA5IDcyLjgwODZDNzguNzM2NyA3Mi42ODU5IDc4LjM5ODEgNzIuNTgwMSA3Ny45NDUzIDcyLjQ5MTJDNzcuNTY0NSA3Mi40MTA4IDc3LjIxOTYgNzIuMzE1NiA3Ni45MTA2IDcyLjIwNTZDNzYuNjA2IDcyLjA5NTUgNzYuMzQ1NyA3MS45NjIyIDc2LjEyOTkgNzEuODA1N0M3NS45MTgzIDcxLjY0OTEgNzUuNzU1NCA3MS40NjUgNzUuNjQxMSA3MS4yNTM0Qzc1LjUyNjkgNzEuMDQxOCA3NS40Njk3IDcwLjc5NDMgNzUuNDY5NyA3MC41MTA3Qzc1LjQ2OTcgNzAuMjM5OSA3NS41MjkgNjkuOTgzOSA3NS42NDc1IDY5Ljc0MjdDNzUuNzcwMiA2OS41MDE1IDc1Ljk0MTYgNjkuMjg3OCA3Ni4xNjE2IDY5LjEwMTZDNzYuMzg1OSA2OC45MTU0IDc2LjY1NDYgNjguNzY5NCA3Ni45Njc4IDY4LjY2MzZDNzcuMjgwOSA2OC41NTc4IDc3LjYzIDY4LjUwNDkgNzguMDE1MSA2OC41MDQ5Qzc4LjU2NTMgNjguNTA0OSA3OS4wMzUgNjguNjAyMiA3OS40MjQzIDY4Ljc5NjlDNzkuODEzNiA2OC45OTE1IDgwLjExMiA2OS4yNTE4IDgwLjMxOTMgNjkuNTc3NkM4MC41MjY3IDY5Ljg5OTMgODAuNjMwNCA3MC4yNTY4IDgwLjYzMDQgNzAuNjUwNEg3OS40NTYxQzc5LjQ1NjEgNzAuNDYgNzkuMzk4OSA3MC4yNzU5IDc5LjI4NDcgNzAuMDk4MUM3OS4xNzQ2IDY5LjkxNjIgNzkuMDExNyA2OS43NjYgNzguNzk1OSA2OS42NDc1Qzc4LjU4NDMgNjkuNTI5IDc4LjMyNDEgNjkuNDY5NyA3OC4wMTUxIDY5LjQ2OTdDNzcuNjg5MyA2OS40Njk3IDc3LjQyNDggNjkuNTIwNSA3Ny4yMjE3IDY5LjYyMjFDNzcuMDIyOCA2OS43MTk0IDc2Ljg3NjggNjkuODQ0MiA3Ni43ODM3IDY5Ljk5NjZDNzYuNjk0OCA3MC4xNDg5IDc2LjY1MDQgNzAuMzA5NyA3Ni42NTA0IDcwLjQ3OUM3Ni42NTA0IDcwLjYwNiA3Ni42NzE1IDcwLjcyMDIgNzYuNzEzOSA3MC44MjE4Qzc2Ljc2MDQgNzAuOTE5MSA3Ni44NDA4IDcxLjAxMDEgNzYuOTU1MSA3MS4wOTQ3Qzc3LjA2OTMgNzEuMTc1MSA3Ny4yMzAxIDcxLjI1MTMgNzcuNDM3NSA3MS4zMjMyQzc3LjY0NDkgNzEuMzk1MiA3Ny45MDkzIDcxLjQ2NzEgNzguMjMxIDcxLjUzOTFDNzguNzkzOCA3MS42NjYgNzkuMjU3MiA3MS44MTg0IDc5LjYyMTEgNzEuOTk2MUM3OS45ODUgNzIuMTczOCA4MC4yNTU5IDcyLjM5MTggODAuNDMzNiA3Mi42NDk5QzgwLjYxMTMgNzIuOTA4IDgwLjcwMDIgNzMuMjIxMiA4MC43MDAyIDczLjU4OTRDODAuNzAwMiA3My44ODk4IDgwLjYzNjcgNzQuMTY0OSA4MC41MDk4IDc0LjQxNDZDODAuMzg3IDc0LjY2NDIgODAuMjA3MiA3NC44OCA3OS45NzAyIDc1LjA2MkM3OS43Mzc1IDc1LjIzOTcgNzkuNDU4MiA3NS4zNzk0IDc5LjEzMjMgNzUuNDgxQzc4LjgxMDcgNzUuNTc4MyA3OC40NDg5IDc1LjYyNyA3OC4wNDY5IDc1LjYyN0M3Ny40NDE3IDc1LjYyNyA3Ni45Mjk3IDc1LjUxOSA3Ni41MTA3IDc1LjMwMzJDNzYuMDkxOCA3NS4wODc0IDc1Ljc3NDQgNzQuODA4MSA3NS41NTg2IDc0LjQ2NTNDNzUuMzQyOCA3NC4xMjI2IDc1LjIzNDkgNzMuNzYwNyA3NS4yMzQ5IDczLjM3OTlINzYuNDE1NUM3Ni40MzI1IDczLjcwMTUgNzYuNTI1NiA3My45NTc1IDc2LjY5NDggNzQuMTQ3OUM3Ni44NjQxIDc0LjMzNDEgNzcuMDcxNSA3NC40Njc0IDc3LjMxNjkgNzQuNTQ3OUM3Ny41NjIzIDc0LjYyNCA3Ny44MDU3IDc0LjY2MjEgNzguMDQ2OSA3NC42NjIxQzc4LjM2ODUgNzQuNjYyMSA3OC42MzcyIDc0LjYxOTggNzguODUzIDc0LjUzNTJDNzkuMDczMSA3NC40NTA1IDc5LjI0MDIgNzQuMzM0MSA3OS4zNTQ1IDc0LjE4NkM3OS40Njg4IDc0LjAzNzkgNzkuNTI1OSA3My44Njg3IDc5LjUyNTkgNzMuNjc4MlpNODYuMjQxNyA3My42NzgyQzg2LjI0MTcgNzMuNTA5IDg2LjIwMzYgNzMuMzUyNCA4Ni4xMjc0IDczLjIwODVDODYuMDU1NSA3My4wNjA0IDg1LjkwNTMgNzIuOTI3MSA4NS42NzY4IDcyLjgwODZDODUuNDUyNSA3Mi42ODU5IDg1LjExMzkgNzIuNTgwMSA4NC42NjExIDcyLjQ5MTJDODQuMjgwMyA3Mi40MTA4IDgzLjkzNTQgNzIuMzE1NiA4My42MjY1IDcyLjIwNTZDODMuMzIxOCA3Mi4wOTU1IDgzLjA2MTUgNzEuOTYyMiA4Mi44NDU3IDcxLjgwNTdDODIuNjM0MSA3MS42NDkxIDgyLjQ3MTIgNzEuNDY1IDgyLjM1NjkgNzEuMjUzNEM4Mi4yNDI3IDcxLjA0MTggODIuMTg1NSA3MC43OTQzIDgyLjE4NTUgNzAuNTEwN0M4Mi4xODU1IDcwLjIzOTkgODIuMjQ0OCA2OS45ODM5IDgyLjM2MzMgNjkuNzQyN0M4Mi40ODYgNjkuNTAxNSA4Mi42NTc0IDY5LjI4NzggODIuODc3NCA2OS4xMDE2QzgzLjEwMTcgNjguOTE1NCA4My4zNzA0IDY4Ljc2OTQgODMuNjgzNiA2OC42NjM2QzgzLjk5NjcgNjguNTU3OCA4NC4zNDU5IDY4LjUwNDkgODQuNzMxIDY4LjUwNDlDODUuMjgxMSA2OC41MDQ5IDg1Ljc1MDggNjguNjAyMiA4Ni4xNDAxIDY4Ljc5NjlDODYuNTI5NSA2OC45OTE1IDg2LjgyNzggNjkuMjUxOCA4Ny4wMzUyIDY5LjU3NzZDODcuMjQyNSA2OS44OTkzIDg3LjM0NjIgNzAuMjU2OCA4Ny4zNDYyIDcwLjY1MDRIODYuMTcxOUM4Ni4xNzE5IDcwLjQ2IDg2LjExNDcgNzAuMjc1OSA4Ni4wMDA1IDcwLjA5ODFDODUuODkwNSA2OS45MTYyIDg1LjcyNzUgNjkuNzY2IDg1LjUxMTcgNjkuNjQ3NUM4NS4zMDAxIDY5LjUyOSA4NS4wMzk5IDY5LjQ2OTcgODQuNzMxIDY5LjQ2OTdDODQuNDA1MSA2OS40Njk3IDg0LjE0MDYgNjkuNTIwNSA4My45Mzc1IDY5LjYyMjFDODMuNzM4NiA2OS43MTk0IDgzLjU5MjYgNjkuODQ0MiA4My40OTk1IDY5Ljk5NjZDODMuNDEwNiA3MC4xNDg5IDgzLjM2NjIgNzAuMzA5NyA4My4zNjYyIDcwLjQ3OUM4My4zNjYyIDcwLjYwNiA4My4zODc0IDcwLjcyMDIgODMuNDI5NyA3MC44MjE4QzgzLjQ3NjIgNzAuOTE5MSA4My41NTY2IDcxLjAxMDEgODMuNjcwOSA3MS4wOTQ3QzgzLjc4NTIgNzEuMTc1MSA4My45NDYgNzEuMjUxMyA4NC4xNTMzIDcxLjMyMzJDODQuMzYwNyA3MS4zOTUyIDg0LjYyNTIgNzEuNDY3MSA4NC45NDY4IDcxLjUzOTFDODUuNTA5NiA3MS42NjYgODUuOTczIDcxLjgxODQgODYuMzM2OSA3MS45OTYxQzg2LjcwMDggNzIuMTczOCA4Ni45NzE3IDcyLjM5MTggODcuMTQ5NCA3Mi42NDk5Qzg3LjMyNzEgNzIuOTA4IDg3LjQxNiA3My4yMjEyIDg3LjQxNiA3My41ODk0Qzg3LjQxNiA3My44ODk4IDg3LjM1MjUgNzQuMTY0OSA4Ny4yMjU2IDc0LjQxNDZDODcuMTAyOSA3NC42NjQyIDg2LjkyMyA3NC44OCA4Ni42ODYgNzUuMDYyQzg2LjQ1MzMgNzUuMjM5NyA4Ni4xNzQgNzUuMzc5NCA4NS44NDgxIDc1LjQ4MUM4NS41MjY1IDc1LjU3ODMgODUuMTY0NyA3NS42MjcgODQuNzYyNyA3NS42MjdDODQuMTU3NiA3NS42MjcgODMuNjQ1NSA3NS41MTkgODMuMjI2NiA3NS4zMDMyQzgyLjgwNzYgNzUuMDg3NCA4Mi40OTAyIDc0LjgwODEgODIuMjc0NCA3NC40NjUzQzgyLjA1ODYgNzQuMTIyNiA4MS45NTA3IDczLjc2MDcgODEuOTUwNyA3My4zNzk5SDgzLjEzMTNDODMuMTQ4MyA3My43MDE1IDgzLjI0MTQgNzMuOTU3NSA4My40MTA2IDc0LjE0NzlDODMuNTc5OSA3NC4zMzQxIDgzLjc4NzMgNzQuNDY3NCA4NC4wMzI3IDc0LjU0NzlDODQuMjc4MiA3NC42MjQgODQuNTIxNSA3NC42NjIxIDg0Ljc2MjcgNzQuNjYyMUM4NS4wODQzIDc0LjY2MjEgODUuMzUzIDc0LjYxOTggODUuNTY4OCA3NC41MzUyQzg1Ljc4ODkgNzQuNDUwNSA4NS45NTYxIDc0LjMzNDEgODYuMDcwMyA3NC4xODZDODYuMTg0NiA3NC4wMzc5IDg2LjI0MTcgNzMuODY4NyA4Ni4yNDE3IDczLjY3ODJaTTkzLjM1MTEgNjkuOTk2NlY3NS41SDkyLjE3MDRWNjguNjMxOEg5My4yODc2TDkzLjM1MTEgNjkuOTk2NlpNOTMuMTA5OSA3MS44MDU3TDkyLjU2NCA3MS43ODY2QzkyLjU2ODIgNzEuMzE2OSA5Mi42Mjk2IDcwLjg4MzEgOTIuNzQ4IDcwLjQ4NTRDOTIuODY2NSA3MC4wODMzIDkzLjA0MjIgNjkuNzM0MiA5My4yNzQ5IDY5LjQzOEM5My41MDc2IDY5LjE0MTggOTMuNzk3NSA2OC45MTMyIDk0LjE0NDUgNjguNzUyNEM5NC40OTE1IDY4LjU4NzQgOTQuODkzNiA2OC41MDQ5IDk1LjM1MDYgNjguNTA0OUM5NS42NzIyIDY4LjUwNDkgOTUuOTY4NCA2OC41NTE0IDk2LjIzOTMgNjguNjQ0NUM5Ni41MTAxIDY4LjczMzQgOTYuNzQ1IDY4Ljg3NTIgOTYuOTQzOCA2OS4wNjk4Qzk3LjE0MjcgNjkuMjY0NSA5Ny4yOTcyIDY5LjUxNDIgOTcuNDA3MiA2OS44MTg4Qzk3LjUxNzMgNzAuMTIzNSA5Ny41NzIzIDcwLjQ5MTcgOTcuNTcyMyA3MC45MjMzVjc1LjVIOTYuMzk3OVY3MC45ODA1Qzk2LjM5NzkgNzAuNjIwOCA5Ni4zMzY2IDcwLjMzMyA5Ni4yMTM5IDcwLjExNzJDOTYuMDk1NCA2OS45MDE0IDk1LjkyNjEgNjkuNzQ0OCA5NS43MDYxIDY5LjY0NzVDOTUuNDg2IDY5LjU0NTkgOTUuMjI3OSA2OS40OTUxIDk0LjkzMTYgNjkuNDk1MUM5NC41ODQ2IDY5LjQ5NTEgOTQuMjk0OCA2OS41NTY1IDk0LjA2MiA2OS42NzkyQzkzLjgyOTMgNjkuODAxOSA5My42NDMxIDY5Ljk3MTIgOTMuNTAzNCA3MC4xODdDOTMuMzYzOCA3MC40MDI4IDkzLjI2MjIgNzAuNjUwNCA5My4xOTg3IDcwLjkyOTdDOTMuMTM5NSA3MS4yMDQ4IDkzLjEwOTkgNzEuNDk2NyA5My4xMDk5IDcxLjgwNTdaTTk3LjU1OTYgNzEuMTU4Mkw5Ni43NzI1IDcxLjM5OTRDOTYuNzc2NyA3MS4wMjI4IDk2LjgzODEgNzAuNjYxIDk2Ljk1NjUgNzAuMzE0Qzk3LjA3OTMgNjkuOTY3IDk3LjI1NDkgNjkuNjU4IDk3LjQ4MzQgNjkuMzg3MkM5Ny43MTYxIDY5LjExNjQgOTguMDAxOCA2OC45MDI3IDk4LjM0MDMgNjguNzQ2MUM5OC42Nzg5IDY4LjU4NTMgOTkuMDY2MSA2OC41MDQ5IDk5LjUwMiA2OC41MDQ5Qzk5Ljg3MDEgNjguNTA0OSAxMDAuMTk2IDY4LjU1MzUgMTAwLjQ3OSA2OC42NTA5QzEwMC43NjcgNjguNzQ4MiAxMDEuMDA4IDY4Ljg5ODQgMTAxLjIwMyA2OS4xMDE2QzEwMS40MDIgNjkuMzAwNSAxMDEuNTUyIDY5LjU1NjUgMTAxLjY1NCA2OS44Njk2QzEwMS43NTUgNzAuMTgyOCAxMDEuODA2IDcwLjU1NTIgMTAxLjgwNiA3MC45ODY4Vjc1LjVIMTAwLjYyNVY3MC45NzQxQzEwMC42MjUgNzAuNTg5IDEwMC41NjQgNzAuMjkwNyAxMDAuNDQxIDcwLjA3OTFDMTAwLjMyMyA2OS44NjMzIDEwMC4xNTQgNjkuNzEzMSA5OS45MzM2IDY5LjYyODRDOTkuNzE3OCA2OS41Mzk2IDk5LjQ1OTYgNjkuNDk1MSA5OS4xNTkyIDY5LjQ5NTFDOTguOTAxIDY5LjQ5NTEgOTguNjcyNSA2OS41Mzk2IDk4LjQ3MzYgNjkuNjI4NEM5OC4yNzQ3IDY5LjcxNzMgOTguMTA3NiA2OS44NCA5Ny45NzIyIDY5Ljk5NjZDOTcuODM2OCA3MC4xNDg5IDk3LjczMzEgNzAuMzI0NSA5Ny42NjExIDcwLjUyMzRDOTcuNTkzNCA3MC43MjIzIDk3LjU1OTYgNzAuOTMzOSA5Ny41NTk2IDcxLjE1ODJaTTEwNy42MzMgNzQuMzI1N1Y3MC43OUMxMDcuNjMzIDcwLjUxOTIgMTA3LjU3OCA3MC4yODQzIDEwNy40NjggNzAuMDg1NEMxMDcuMzYyIDY5Ljg4MjMgMTA3LjIwMiA2OS43MjU3IDEwNi45ODYgNjkuNjE1N0MxMDYuNzcgNjkuNTA1NyAxMDYuNTAzIDY5LjQ1MDcgMTA2LjE4NiA2OS40NTA3QzEwNS44OSA2OS40NTA3IDEwNS42MyA2OS41MDE1IDEwNS40MDUgNjkuNjAzQzEwNS4xODUgNjkuNzA0NiAxMDUuMDEyIDY5LjgzNzkgMTA0Ljg4NSA3MC4wMDI5QzEwNC43NjIgNzAuMTY4IDEwNC43MDEgNzAuMzQ1NyAxMDQuNzAxIDcwLjUzNjFIMTAzLjUyNkMxMDMuNTI2IDcwLjI5MDcgMTAzLjU5IDcwLjA0NzQgMTAzLjcxNyA2OS44MDYyQzEwMy44NDQgNjkuNTY0OSAxMDQuMDI2IDY5LjM0NyAxMDQuMjYzIDY5LjE1MjNDMTA0LjUwNCA2OC45NTM1IDEwNC43OTIgNjguNzk2OSAxMDUuMTI2IDY4LjY4MjZDMTA1LjQ2NSA2OC41NjQxIDEwNS44NDEgNjguNTA0OSAxMDYuMjU2IDY4LjUwNDlDMTA2Ljc1NSA2OC41MDQ5IDEwNy4xOTUgNjguNTg5NSAxMDcuNTc2IDY4Ljc1ODhDMTA3Ljk2MSA2OC45MjgxIDEwOC4yNjIgNjkuMTg0MSAxMDguNDc4IDY5LjUyNjlDMTA4LjY5OCA2OS44NjU0IDEwOC44MDggNzAuMjkwNyAxMDguODA4IDcwLjgwMjdWNzQuMDAyQzEwOC44MDggNzQuMjMwNSAxMDguODI3IDc0LjQ3MzggMTA4Ljg2NSA3NC43MzE5QzEwOC45MDcgNzQuOTkwMSAxMDguOTY4IDc1LjIxMjIgMTA5LjA0OSA3NS4zOTg0Vjc1LjVIMTA3LjgyNEMxMDcuNzY0IDc1LjM2NDYgMTA3LjcxOCA3NS4xODQ3IDEwNy42ODQgNzQuOTYwNEMxMDcuNjUgNzQuNzMxOSAxMDcuNjMzIDc0LjUyMDMgMTA3LjYzMyA3NC4zMjU3Wk0xMDcuODM2IDcxLjMzNTlMMTA3Ljg0OSA3Mi4xNjExSDEwNi42NjJDMTA2LjMyOCA3Mi4xNjExIDEwNi4wMjkgNzIuMTg4NiAxMDUuNzY3IDcyLjI0MzdDMTA1LjUwNSA3Mi4yOTQ0IDEwNS4yODUgNzIuMzcyNyAxMDUuMTA3IDcyLjQ3ODVDMTA0LjkyOSA3Mi41ODQzIDEwNC43OTQgNzIuNzE3NiAxMDQuNzAxIDcyLjg3ODRDMTA0LjYwOCA3My4wMzUgMTA0LjU2MSA3My4yMTkxIDEwNC41NjEgNzMuNDMwN0MxMDQuNTYxIDczLjY0NjUgMTA0LjYxIDczLjg0MzMgMTA0LjcwNyA3NC4wMjFDMTA0LjgwNCA3NC4xOTg3IDEwNC45NSA3NC4zNDA1IDEwNS4xNDUgNzQuNDQ2M0MxMDUuMzQ0IDc0LjU0NzkgMTA1LjU4NyA3NC41OTg2IDEwNS44NzUgNzQuNTk4NkMxMDYuMjM1IDc0LjU5ODYgMTA2LjU1MiA3NC41MjI1IDEwNi44MjcgNzQuMzcwMUMxMDcuMTAyIDc0LjIxNzggMTA3LjMyIDc0LjAzMTYgMTA3LjQ4MSA3My44MTE1QzEwNy42NDYgNzMuNTkxNSAxMDcuNzM1IDczLjM3NzggMTA3Ljc0OCA3My4xNzA0TDEwOC4yNDkgNzMuNzM1NEMxMDguMjE5IDczLjkxMzEgMTA4LjEzOSA3NC4xMDk5IDEwOC4wMDggNzQuMzI1N0MxMDcuODc3IDc0LjU0MTUgMTA3LjcwMSA3NC43NDg5IDEwNy40ODEgNzQuOTQ3OEMxMDcuMjY1IDc1LjE0MjQgMTA3LjAwNyA3NS4zMDUzIDEwNi43MDcgNzUuNDM2NUMxMDYuNDEgNzUuNTYzNSAxMDYuMDc2IDc1LjYyNyAxMDUuNzA0IDc1LjYyN0MxMDUuMjM4IDc1LjYyNyAxMDQuODMgNzUuNTM2IDEwNC40NzkgNzUuMzU0QzEwNC4xMzIgNzUuMTcyIDEwMy44NjEgNzQuOTI4NyAxMDMuNjY2IDc0LjYyNEMxMDMuNDc2IDc0LjMxNTEgMTAzLjM4IDczLjk3MDIgMTAzLjM4IDczLjU4OTRDMTAzLjM4IDczLjIyMTIgMTAzLjQ1MiA3Mi44OTc1IDEwMy41OTYgNzIuNjE4MkMxMDMuNzQgNzIuMzM0NiAxMDMuOTQ3IDcyLjA5OTggMTA0LjIxOCA3MS45MTM2QzEwNC40ODkgNzEuNzIzMSAxMDQuODE1IDcxLjU3OTMgMTA1LjE5NiA3MS40ODE5QzEwNS41NzcgNzEuMzg0NiAxMDYuMDAyIDcxLjMzNTkgMTA2LjQ3MiA3MS4zMzU5SDEwNy44MzZaTTExNC42NTQgNzMuNjc4MkMxMTQuNjU0IDczLjUwOSAxMTQuNjE2IDczLjM1MjQgMTE0LjU0IDczLjIwODVDMTE0LjQ2OCA3My4wNjA0IDExNC4zMTcgNzIuOTI3MSAxMTQuMDg5IDcyLjgwODZDMTEzLjg2NSA3Mi42ODU5IDExMy41MjYgNzIuNTgwMSAxMTMuMDczIDcyLjQ5MTJDMTEyLjY5MiA3Mi40MTA4IDExMi4zNDcgNzIuMzE1NiAxMTIuMDM5IDcyLjIwNTZDMTExLjczNCA3Mi4wOTU1IDExMS40NzQgNzEuOTYyMiAxMTEuMjU4IDcxLjgwNTdDMTExLjA0NiA3MS42NDkxIDExMC44ODMgNzEuNDY1IDExMC43NjkgNzEuMjUzNEMxMTAuNjU1IDcxLjA0MTggMTEwLjU5OCA3MC43OTQzIDExMC41OTggNzAuNTEwN0MxMTAuNTk4IDcwLjIzOTkgMTEwLjY1NyA2OS45ODM5IDExMC43NzUgNjkuNzQyN0MxMTAuODk4IDY5LjUwMTUgMTExLjA2OSA2OS4yODc4IDExMS4yOSA2OS4xMDE2QzExMS41MTQgNjguOTE1NCAxMTEuNzgzIDY4Ljc2OTQgMTEyLjA5NiA2OC42NjM2QzExMi40MDkgNjguNTU3OCAxMTIuNzU4IDY4LjUwNDkgMTEzLjE0MyA2OC41MDQ5QzExMy42OTMgNjguNTA0OSAxMTQuMTYzIDY4LjYwMjIgMTE0LjU1MiA2OC43OTY5QzExNC45NDIgNjguOTkxNSAxMTUuMjQgNjkuMjUxOCAxMTUuNDQ3IDY5LjU3NzZDMTE1LjY1NSA2OS44OTkzIDExNS43NTggNzAuMjU2OCAxMTUuNzU4IDcwLjY1MDRIMTE0LjU4NEMxMTQuNTg0IDcwLjQ2IDExNC41MjcgNzAuMjc1OSAxMTQuNDEzIDcwLjA5ODFDMTE0LjMwMyA2OS45MTYyIDExNC4xNCA2OS43NjYgMTEzLjkyNCA2OS42NDc1QzExMy43MTIgNjkuNTI5IDExMy40NTIgNjkuNDY5NyAxMTMuMTQzIDY5LjQ2OTdDMTEyLjgxNyA2OS40Njk3IDExMi41NTMgNjkuNTIwNSAxMTIuMzUgNjkuNjIyMUMxMTIuMTUxIDY5LjcxOTQgMTEyLjAwNSA2OS44NDQyIDExMS45MTIgNjkuOTk2NkMxMTEuODIzIDcwLjE0ODkgMTExLjc3OCA3MC4zMDk3IDExMS43NzggNzAuNDc5QzExMS43NzggNzAuNjA2IDExMS43OTkgNzAuNzIwMiAxMTEuODQyIDcwLjgyMThDMTExLjg4OCA3MC45MTkxIDExMS45NjkgNzEuMDEwMSAxMTIuMDgzIDcxLjA5NDdDMTEyLjE5NyA3MS4xNzUxIDExMi4zNTggNzEuMjUxMyAxMTIuNTY1IDcxLjMyMzJDMTEyLjc3MyA3MS4zOTUyIDExMy4wMzcgNzEuNDY3MSAxMTMuMzU5IDcxLjUzOTFDMTEzLjkyMiA3MS42NjYgMTE0LjM4NSA3MS44MTg0IDExNC43NDkgNzEuOTk2MUMxMTUuMTEzIDcyLjE3MzggMTE1LjM4NCA3Mi4zOTE4IDExNS41NjIgNzIuNjQ5OUMxMTUuNzM5IDcyLjkwOCAxMTUuODI4IDczLjIyMTIgMTE1LjgyOCA3My41ODk0QzExNS44MjggNzMuODg5OCAxMTUuNzY1IDc0LjE2NDkgMTE1LjYzOCA3NC40MTQ2QzExNS41MTUgNzQuNjY0MiAxMTUuMzM1IDc0Ljg4IDExNS4wOTggNzUuMDYyQzExNC44NjUgNzUuMjM5NyAxMTQuNTg2IDc1LjM3OTQgMTE0LjI2IDc1LjQ4MUMxMTMuOTM5IDc1LjU3ODMgMTEzLjU3NyA3NS42MjcgMTEzLjE3NSA3NS42MjdDMTEyLjU3IDc1LjYyNyAxMTIuMDU4IDc1LjUxOSAxMTEuNjM5IDc1LjMwMzJDMTExLjIyIDc1LjA4NzQgMTEwLjkwMiA3NC44MDgxIDExMC42ODcgNzQuNDY1M0MxMTAuNDcxIDc0LjEyMjYgMTEwLjM2MyA3My43NjA3IDExMC4zNjMgNzMuMzc5OUgxMTEuNTQzQzExMS41NiA3My43MDE1IDExMS42NTMgNzMuOTU3NSAxMTEuODIzIDc0LjE0NzlDMTExLjk5MiA3NC4zMzQxIDExMi4xOTkgNzQuNDY3NCAxMTIuNDQ1IDc0LjU0NzlDMTEyLjY5IDc0LjYyNCAxMTIuOTM0IDc0LjY2MjEgMTEzLjE3NSA3NC42NjIxQzExMy40OTYgNzQuNjYyMSAxMTMuNzY1IDc0LjYxOTggMTEzLjk4MSA3NC41MzUyQzExNC4yMDEgNzQuNDUwNSAxMTQuMzY4IDc0LjMzNDEgMTE0LjQ4MiA3NC4xODZDMTE0LjU5NyA3NC4wMzc5IDExNC42NTQgNzMuODY4NyAxMTQuNjU0IDczLjY3ODJaTTEyMS4zNyA3My42NzgyQzEyMS4zNyA3My41MDkgMTIxLjMzMiA3My4zNTI0IDEyMS4yNTUgNzMuMjA4NUMxMjEuMTgzIDczLjA2MDQgMTIxLjAzMyA3Mi45MjcxIDEyMC44MDUgNzIuODA4NkMxMjAuNTggNzIuNjg1OSAxMjAuMjQyIDcyLjU4MDEgMTE5Ljc4OSA3Mi40OTEyQzExOS40MDggNzIuNDEwOCAxMTkuMDYzIDcyLjMxNTYgMTE4Ljc1NCA3Mi4yMDU2QzExOC40NSA3Mi4wOTU1IDExOC4xODkgNzEuOTYyMiAxMTcuOTc0IDcxLjgwNTdDMTE3Ljc2MiA3MS42NDkxIDExNy41OTkgNzEuNDY1IDExNy40ODUgNzEuMjUzNEMxMTcuMzcxIDcxLjA0MTggMTE3LjMxMyA3MC43OTQzIDExNy4zMTMgNzAuNTEwN0MxMTcuMzEzIDcwLjIzOTkgMTE3LjM3MyA2OS45ODM5IDExNy40OTEgNjkuNzQyN0MxMTcuNjE0IDY5LjUwMTUgMTE3Ljc4NSA2OS4yODc4IDExOC4wMDUgNjkuMTAxNkMxMTguMjMgNjguOTE1NCAxMTguNDk4IDY4Ljc2OTQgMTE4LjgxMiA2OC42NjM2QzExOS4xMjUgNjguNTU3OCAxMTkuNDc0IDY4LjUwNDkgMTE5Ljg1OSA2OC41MDQ5QzEyMC40MDkgNjguNTA0OSAxMjAuODc5IDY4LjYwMjIgMTIxLjI2OCA2OC43OTY5QzEyMS42NTcgNjguOTkxNSAxMjEuOTU2IDY5LjI1MTggMTIyLjE2MyA2OS41Nzc2QzEyMi4zNyA2OS44OTkzIDEyMi40NzQgNzAuMjU2OCAxMjIuNDc0IDcwLjY1MDRIMTIxLjNDMTIxLjMgNzAuNDYgMTIxLjI0MyA3MC4yNzU5IDEyMS4xMjggNzAuMDk4MUMxMjEuMDE4IDY5LjkxNjIgMTIwLjg1NSA2OS43NjYgMTIwLjY0IDY5LjY0NzVDMTIwLjQyOCA2OS41MjkgMTIwLjE2OCA2OS40Njk3IDExOS44NTkgNjkuNDY5N0MxMTkuNTMzIDY5LjQ2OTcgMTE5LjI2OSA2OS41MjA1IDExOS4wNjUgNjkuNjIyMUMxMTguODY3IDY5LjcxOTQgMTE4LjcyMSA2OS44NDQyIDExOC42MjcgNjkuOTk2NkMxMTguNTM5IDcwLjE0ODkgMTE4LjQ5NCA3MC4zMDk3IDExOC40OTQgNzAuNDc5QzExOC40OTQgNzAuNjA2IDExOC41MTUgNzAuNzIwMiAxMTguNTU4IDcwLjgyMThDMTE4LjYwNCA3MC45MTkxIDExOC42ODUgNzEuMDEwMSAxMTguNzk5IDcxLjA5NDdDMTE4LjkxMyA3MS4xNzUxIDExOS4wNzQgNzEuMjUxMyAxMTkuMjgxIDcxLjMyMzJDMTE5LjQ4OSA3MS4zOTUyIDExOS43NTMgNzEuNDY3MSAxMjAuMDc1IDcxLjUzOTFDMTIwLjYzOCA3MS42NjYgMTIxLjEwMSA3MS44MTg0IDEyMS40NjUgNzEuOTk2MUMxMjEuODI5IDcyLjE3MzggMTIyLjEgNzIuMzkxOCAxMjIuMjc3IDcyLjY0OTlDMTIyLjQ1NSA3Mi45MDggMTIyLjU0NCA3My4yMjEyIDEyMi41NDQgNzMuNTg5NEMxMjIuNTQ0IDczLjg4OTggMTIyLjQ4IDc0LjE2NDkgMTIyLjM1NCA3NC40MTQ2QzEyMi4yMzEgNzQuNjY0MiAxMjIuMDUxIDc0Ljg4IDEyMS44MTQgNzUuMDYyQzEyMS41ODEgNzUuMjM5NyAxMjEuMzAyIDc1LjM3OTQgMTIwLjk3NiA3NS40ODFDMTIwLjY1NCA3NS41NzgzIDEyMC4yOTMgNzUuNjI3IDExOS44OTEgNzUuNjI3QzExOS4yODUgNzUuNjI3IDExOC43NzMgNzUuNTE5IDExOC4zNTQgNzUuMzAzMkMxMTcuOTM2IDc1LjA4NzQgMTE3LjYxOCA3NC44MDgxIDExNy40MDIgNzQuNDY1M0MxMTcuMTg3IDc0LjEyMjYgMTE3LjA3OSA3My43NjA3IDExNy4wNzkgNzMuMzc5OUgxMTguMjU5QzExOC4yNzYgNzMuNzAxNSAxMTguMzY5IDczLjk1NzUgMTE4LjUzOSA3NC4xNDc5QzExOC43MDggNzQuMzM0MSAxMTguOTE1IDc0LjQ2NzQgMTE5LjE2MSA3NC41NDc5QzExOS40MDYgNzQuNjI0IDExOS42NDkgNzQuNjYyMSAxMTkuODkxIDc0LjY2MjFDMTIwLjIxMiA3NC42NjIxIDEyMC40ODEgNzQuNjE5OCAxMjAuNjk3IDc0LjUzNTJDMTIwLjkxNyA3NC40NTA1IDEyMS4wODQgNzQuMzM0MSAxMjEuMTk4IDc0LjE4NkMxMjEuMzEyIDc0LjAzNzkgMTIxLjM3IDczLjg2ODcgMTIxLjM3IDczLjY3ODJaTTEyOC4xMzYgNzQuMzI1N1Y3MC43OUMxMjguMTM2IDcwLjUxOTIgMTI4LjA4MSA3MC4yODQzIDEyNy45NzEgNzAuMDg1NEMxMjcuODY1IDY5Ljg4MjMgMTI3LjcwNSA2OS43MjU3IDEyNy40ODkgNjkuNjE1N0MxMjcuMjczIDY5LjUwNTcgMTI3LjAwNiA2OS40NTA3IDEyNi42ODkgNjkuNDUwN0MxMjYuMzkzIDY5LjQ1MDcgMTI2LjEzMiA2OS41MDE1IDEyNS45MDggNjkuNjAzQzEyNS42ODggNjkuNzA0NiAxMjUuNTE1IDY5LjgzNzkgMTI1LjM4OCA3MC4wMDI5QzEyNS4yNjUgNzAuMTY4IDEyNS4yMDQgNzAuMzQ1NyAxMjUuMjA0IDcwLjUzNjFIMTI0LjAyOUMxMjQuMDI5IDcwLjI5MDcgMTI0LjA5MyA3MC4wNDc0IDEyNC4yMiA2OS44MDYyQzEyNC4zNDcgNjkuNTY0OSAxMjQuNTI5IDY5LjM0NyAxMjQuNzY2IDY5LjE1MjNDMTI1LjAwNyA2OC45NTM1IDEyNS4yOTUgNjguNzk2OSAxMjUuNjI5IDY4LjY4MjZDMTI1Ljk2NyA2OC41NjQxIDEyNi4zNDQgNjguNTA0OSAxMjYuNzU5IDY4LjUwNDlDMTI3LjI1OCA2OC41MDQ5IDEyNy42OTggNjguNTg5NSAxMjguMDc5IDY4Ljc1ODhDMTI4LjQ2NCA2OC45MjgxIDEyOC43NjUgNjkuMTg0MSAxMjguOTggNjkuNTI2OUMxMjkuMjAxIDY5Ljg2NTQgMTI5LjMxMSA3MC4yOTA3IDEyOS4zMTEgNzAuODAyN1Y3NC4wMDJDMTI5LjMxMSA3NC4yMzA1IDEyOS4zMyA3NC40NzM4IDEyOS4zNjggNzQuNzMxOUMxMjkuNDEgNzQuOTkwMSAxMjkuNDcxIDc1LjIxMjIgMTI5LjU1MiA3NS4zOTg0Vjc1LjVIMTI4LjMyN0MxMjguMjY3IDc1LjM2NDYgMTI4LjIyMSA3NS4xODQ3IDEyOC4xODcgNzQuOTYwNEMxMjguMTUzIDc0LjczMTkgMTI4LjEzNiA3NC41MjAzIDEyOC4xMzYgNzQuMzI1N1pNMTI4LjMzOSA3MS4zMzU5TDEyOC4zNTIgNzIuMTYxMUgxMjcuMTY1QzEyNi44MzEgNzIuMTYxMSAxMjYuNTMyIDcyLjE4ODYgMTI2LjI3IDcyLjI0MzdDMTI2LjAwOCA3Mi4yOTQ0IDEyNS43ODggNzIuMzcyNyAxMjUuNjEgNzIuNDc4NUMxMjUuNDMyIDcyLjU4NDMgMTI1LjI5NyA3Mi43MTc2IDEyNS4yMDQgNzIuODc4NEMxMjUuMTExIDczLjAzNSAxMjUuMDY0IDczLjIxOTEgMTI1LjA2NCA3My40MzA3QzEyNS4wNjQgNzMuNjQ2NSAxMjUuMTEzIDczLjg0MzMgMTI1LjIxIDc0LjAyMUMxMjUuMzA3IDc0LjE5ODcgMTI1LjQ1MyA3NC4zNDA1IDEyNS42NDggNzQuNDQ2M0MxMjUuODQ3IDc0LjU0NzkgMTI2LjA5IDc0LjU5ODYgMTI2LjM3OCA3NC41OTg2QzEyNi43MzggNzQuNTk4NiAxMjcuMDU1IDc0LjUyMjUgMTI3LjMzIDc0LjM3MDFDMTI3LjYwNSA3NC4yMTc4IDEyNy44MjMgNzQuMDMxNiAxMjcuOTg0IDczLjgxMTVDMTI4LjE0OSA3My41OTE1IDEyOC4yMzggNzMuMzc3OCAxMjguMjUgNzMuMTcwNEwxMjguNzUyIDczLjczNTRDMTI4LjcyMiA3My45MTMxIDEyOC42NDIgNzQuMTA5OSAxMjguNTExIDc0LjMyNTdDMTI4LjM4IDc0LjU0MTUgMTI4LjIwNCA3NC43NDg5IDEyNy45ODQgNzQuOTQ3OEMxMjcuNzY4IDc1LjE0MjQgMTI3LjUxIDc1LjMwNTMgMTI3LjIwOSA3NS40MzY1QzEyNi45MTMgNzUuNTYzNSAxMjYuNTc5IDc1LjYyNyAxMjYuMjA3IDc1LjYyN0MxMjUuNzQxIDc1LjYyNyAxMjUuMzMzIDc1LjUzNiAxMjQuOTgxIDc1LjM1NEMxMjQuNjM0IDc1LjE3MiAxMjQuMzY0IDc0LjkyODcgMTI0LjE2OSA3NC42MjRDMTIzLjk3OSA3NC4zMTUxIDEyMy44ODMgNzMuOTcwMiAxMjMuODgzIDczLjU4OTRDMTIzLjg4MyA3My4yMjEyIDEyMy45NTUgNzIuODk3NSAxMjQuMDk5IDcyLjYxODJDMTI0LjI0MyA3Mi4zMzQ2IDEyNC40NSA3Mi4wOTk4IDEyNC43MjEgNzEuOTEzNkMxMjQuOTkyIDcxLjcyMzEgMTI1LjMxOCA3MS41NzkzIDEyNS42OTkgNzEuNDgxOUMxMjYuMDggNzEuMzg0NiAxMjYuNTA1IDcxLjMzNTkgMTI2Ljk3NSA3MS4zMzU5SDEyOC4zMzlaTTEzNS42MDcgNjguNjMxOEgxMzYuNjc0Vjc1LjM1NEMxMzYuNjc0IDc1Ljk1OTEgMTM2LjU1MSA3Ni40NzU0IDEzNi4zMDYgNzYuOTAyOEMxMzYuMDYgNzcuMzMwMiAxMzUuNzE3IDc3LjY1NCAxMzUuMjc3IDc3Ljg3NEMxMzQuODQxIDc4LjA5ODMgMTM0LjMzOCA3OC4yMTA0IDEzMy43NjcgNzguMjEwNEMxMzMuNTMgNzguMjEwNCAxMzMuMjUgNzguMTcyNCAxMzIuOTI5IDc4LjA5NjJDMTMyLjYxMSA3OC4wMjQzIDEzMi4yOTggNzcuODk5NCAxMzEuOTg5IDc3LjcyMTdDMTMxLjY4NSA3Ny41NDgyIDEzMS40MjkgNzcuMzEzMyAxMzEuMjIxIDc3LjAxNzFMMTMxLjgzNyA3Ni4zMTg4QzEzMi4xMjUgNzYuNjY1OSAxMzIuNDI1IDc2LjkwNzEgMTMyLjczOCA3Ny4wNDI1QzEzMy4wNTYgNzcuMTc3OSAxMzMuMzY5IDc3LjI0NTYgMTMzLjY3OCA3Ny4yNDU2QzEzNC4wNSA3Ny4yNDU2IDEzNC4zNzIgNzcuMTc1OCAxMzQuNjQzIDc3LjAzNjFDMTM0LjkxMyA3Ni44OTY1IDEzNS4xMjMgNzYuNjg5MSAxMzUuMjcxIDc2LjQxNDFDMTM1LjQyMyA3Ni4xNDMyIDEzNS41IDc1LjgwODkgMTM1LjUgNzUuNDExMVY3MC4xNDI2TDEzNS42MDcgNjguNjMxOFpNMTMwLjg3OCA3Mi4xNDIxVjcyLjAwODhDMTMwLjg3OCA3MS40ODQgMTMwLjk0IDcxLjAwOCAxMzEuMDYyIDcwLjU4MDZDMTMxLjE4OSA3MC4xNDg5IDEzMS4zNjkgNjkuNzc4NiAxMzEuNjAyIDY5LjQ2OTdDMTMxLjgzOSA2OS4xNjA4IDEzMi4xMjUgNjguOTIzOCAxMzIuNDU5IDY4Ljc1ODhDMTMyLjc5MyA2OC41ODk1IDEzMy4xNyA2OC41MDQ5IDEzMy41ODkgNjguNTA0OUMxMzQuMDIxIDY4LjUwNDkgMTM0LjM5NyA2OC41ODExIDEzNC43MTkgNjguNzMzNEMxMzUuMDQ1IDY4Ljg4MTUgMTM1LjMyIDY5LjA5OTQgMTM1LjU0NCA2OS4zODcyQzEzNS43NzIgNjkuNjcwNyAxMzUuOTUyIDcwLjAxMzUgMTM2LjA4MyA3MC40MTU1QzEzNi4yMTUgNzAuODE3NSAxMzYuMzA2IDcxLjI3MjUgMTM2LjM1NiA3MS43ODAzVjcyLjM2NDNDMTM2LjMxIDcyLjg2NzggMTM2LjIxOSA3My4zMjA2IDEzNi4wODMgNzMuNzIyN0MxMzUuOTUyIDc0LjEyNDcgMTM1Ljc3MiA3NC40Njc0IDEzNS41NDQgNzQuNzUxQzEzNS4zMiA3NS4wMzQ1IDEzNS4wNDUgNzUuMjUyNCAxMzQuNzE5IDc1LjQwNDhDMTM0LjM5MyA3NS41NTI5IDEzNC4wMTIgNzUuNjI3IDEzMy41NzYgNzUuNjI3QzEzMy4xNjYgNzUuNjI3IDEzMi43OTMgNzUuNTQwMiAxMzIuNDU5IDc1LjM2NjdDMTMyLjEyOSA3NS4xOTMyIDEzMS44NDUgNzQuOTQ5OSAxMzEuNjA4IDc0LjYzNjdDMTMxLjM3MSA3NC4zMjM2IDEzMS4xODkgNzMuOTU1NCAxMzEuMDYyIDczLjUzMjJDMTMwLjk0IDczLjEwNDggMTMwLjg3OCA3Mi42NDE0IDEzMC44NzggNzIuMTQyMVpNMTMyLjA1MyA3Mi4wMDg4VjcyLjE0MjFDMTMyLjA1MyA3Mi40ODQ5IDEzMi4wODcgNzIuODA2NSAxMzIuMTU0IDczLjEwNjlDMTMyLjIyNiA3My40MDc0IDEzMi4zMzQgNzMuNjcxOSAxMzIuNDc4IDczLjkwMDRDMTMyLjYyNiA3NC4xMjg5IDEzMi44MTQgNzQuMzA4OCAxMzMuMDQzIDc0LjQzOTlDMTMzLjI3MSA3NC41NjY5IDEzMy41NDQgNzQuNjMwNCAxMzMuODYyIDc0LjYzMDRDMTM0LjI1MSA3NC42MzA0IDEzNC41NzMgNzQuNTQ3OSAxMzQuODI3IDc0LjM4MjhDMTM1LjA4MSA3NC4yMTc4IDEzNS4yODIgNzMuOTk5OCAxMzUuNDMgNzMuNzI5QzEzNS41ODIgNzMuNDU4MiAxMzUuNzAxIDczLjE2NDEgMTM1Ljc4NSA3Mi44NDY3VjcxLjMxNjlDMTM1LjczOSA3MS4wODQxIDEzNS42NjcgNzAuODU5OSAxMzUuNTY5IDcwLjY0NEMxMzUuNDc2IDcwLjQyNCAxMzUuMzU0IDcwLjIyOTMgMTM1LjIwMSA3MC4wNjAxQzEzNS4wNTMgNjkuODg2NiAxMzQuODY5IDY5Ljc0OSAxMzQuNjQ5IDY5LjY0NzVDMTM0LjQyOSA2OS41NDU5IDEzNC4xNzEgNjkuNDk1MSAxMzMuODc1IDY5LjQ5NTFDMTMzLjU1MyA2OS40OTUxIDEzMy4yNzYgNjkuNTYyOCAxMzMuMDQzIDY5LjY5ODJDMTMyLjgxNCA2OS44Mjk0IDEzMi42MjYgNzAuMDExNCAxMzIuNDc4IDcwLjI0NDFDMTMyLjMzNCA3MC40NzI3IDEzMi4yMjYgNzAuNzM5MyAxMzIuMTU0IDcxLjA0MzlDMTMyLjA4NyA3MS4zNDQ0IDEzMi4wNTMgNzEuNjY2IDEzMi4wNTMgNzIuMDA4OFpNMTQxLjMwOCA3NS42MjdDMTQwLjgyOSA3NS42MjcgMTQwLjM5NiA3NS41NDY1IDE0MC4wMDYgNzUuMzg1N0MxMzkuNjIxIDc1LjIyMDcgMTM5LjI4OSA3NC45OTAxIDEzOS4wMSA3NC42OTM4QzEzOC43MzUgNzQuMzk3NiAxMzguNTIzIDc0LjA0NjQgMTM4LjM3NSA3My42NDAxQzEzOC4yMjcgNzMuMjMzOSAxMzguMTUzIDcyLjc4OTYgMTM4LjE1MyA3Mi4zMDcxVjcyLjA0MDVDMTM4LjE1MyA3MS40ODE5IDEzOC4yMzUgNzAuOTg0NyAxMzguNCA3MC41NDg4QzEzOC41NjUgNzAuMTA4NyAxMzguNzkgNjkuNzM2MyAxMzkuMDczIDY5LjQzMTZDMTM5LjM1NyA2OS4xMjcgMTM5LjY3OCA2OC44OTYzIDE0MC4wMzggNjguNzM5N0MxNDAuMzk4IDY4LjU4MzIgMTQwLjc3IDY4LjUwNDkgMTQxLjE1NSA2OC41MDQ5QzE0MS42NDYgNjguNTA0OSAxNDIuMDY5IDY4LjU4OTUgMTQyLjQyNSA2OC43NTg4QzE0Mi43ODUgNjguOTI4MSAxNDMuMDc5IDY5LjE2NSAxNDMuMzA3IDY5LjQ2OTdDMTQzLjUzNiA2OS43NzAyIDE0My43MDUgNzAuMTI1NyAxNDMuODE1IDcwLjUzNjFDMTQzLjkyNSA3MC45NDI0IDE0My45OCA3MS4zODY3IDE0My45OCA3MS44NjkxVjcyLjM5NkgxMzguODUxVjcxLjQzNzVIMTQyLjgwNlY3MS4zNDg2QzE0Mi43ODkgNzEuMDQzOSAxNDIuNzI1IDcwLjc0NzcgMTQyLjYxNSA3MC40NkMxNDIuNTA5IDcwLjE3MjIgMTQyLjM0IDY5LjkzNTIgMTQyLjEwNyA2OS43NDlDMTQxLjg3NSA2OS41NjI4IDE0MS41NTcgNjkuNDY5NyAxNDEuMTU1IDY5LjQ2OTdDMTQwLjg4OSA2OS40Njk3IDE0MC42NDMgNjkuNTI2OSAxNDAuNDE5IDY5LjY0MTFDMTQwLjE5NSA2OS43NTExIDE0MC4wMDIgNjkuOTE2MiAxMzkuODQxIDcwLjEzNjJDMTM5LjY4MSA3MC4zNTYzIDEzOS41NTYgNzAuNjI1IDEzOS40NjcgNzAuOTQyNEMxMzkuMzc4IDcxLjI1OTggMTM5LjMzMyA3MS42MjU4IDEzOS4zMzMgNzIuMDQwNVY3Mi4zMDcxQzEzOS4zMzMgNzIuNjMzIDEzOS4zNzggNzIuOTM5OCAxMzkuNDY3IDczLjIyNzVDMTM5LjU2IDczLjUxMTEgMTM5LjY5MyA3My43NjA3IDEzOS44NjcgNzMuOTc2NkMxNDAuMDQ0IDc0LjE5MjQgMTQwLjI1OCA3NC4zNjE3IDE0MC41MDggNzQuNDg0NEMxNDAuNzYyIDc0LjYwNzEgMTQxLjA0OSA3NC42Njg1IDE0MS4zNzEgNzQuNjY4NUMxNDEuNzg2IDc0LjY2ODUgMTQyLjEzNyA3NC41ODM4IDE0Mi40MjUgNzQuNDE0NkMxNDIuNzEzIDc0LjI0NTMgMTQyLjk2NCA3NC4wMTg5IDE0My4xOCA3My43MzU0TDE0My44OTEgNzQuMzAwM0MxNDMuNzQzIDc0LjUyNDYgMTQzLjU1NSA3NC43MzgzIDE0My4zMjYgNzQuOTQxNEMxNDMuMDk4IDc1LjE0NDUgMTQyLjgxNiA3NS4zMDk2IDE0Mi40ODIgNzUuNDM2NUMxNDIuMTUyIDc1LjU2MzUgMTQxLjc2IDc1LjYyNyAxNDEuMzA4IDc1LjYyN1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8cGF0aCBkPVwiTTIyLjg1NjMgOTYuOTgxM0wyOC4yNzUgOTEuNTQzOEwyNy40Njg4IDkwLjczNzVMMjIuODU2MyA5NS4zNjg3TDIwLjYyNSA5My4xMzc1TDE5LjgxODggOTMuOTQzOEwyMi44NTYzIDk2Ljk4MTNaTTE4LjM3NSAxMDAuNzVDMTguMDc1IDEwMC43NSAxNy44MTI1IDEwMC42MzcgMTcuNTg3NSAxMDAuNDEyQzE3LjM2MjUgMTAwLjE4NyAxNy4yNSA5OS45MjUgMTcuMjUgOTkuNjI1Vjg4LjM3NUMxNy4yNSA4OC4wNzUgMTcuMzYyNSA4Ny44MTI1IDE3LjU4NzUgODcuNTg3NUMxNy44MTI1IDg3LjM2MjUgMTguMDc1IDg3LjI1IDE4LjM3NSA4Ny4yNUgyOS42MjVDMjkuOTI1IDg3LjI1IDMwLjE4NzUgODcuMzYyNSAzMC40MTI1IDg3LjU4NzVDMzAuNjM3NSA4Ny44MTI1IDMwLjc1IDg4LjA3NSAzMC43NSA4OC4zNzVWOTkuNjI1QzMwLjc1IDk5LjkyNSAzMC42Mzc1IDEwMC4xODcgMzAuNDEyNSAxMDAuNDEyQzMwLjE4NzUgMTAwLjYzNyAyOS45MjUgMTAwLjc1IDI5LjYyNSAxMDAuNzVIMTguMzc1WlwiIGZpbGw9XCIjNDI3MkY5XCIvPlxuXHRcdDxwYXRoIGQ9XCJNNDQuMTg4NSA5My41ODY5Vjk0LjE3MDlDNDQuMTg4NSA5NC44NjQ5IDQ0LjEwMTcgOTUuNDg3IDQzLjkyODIgOTYuMDM3MUM0My43NTQ3IDk2LjU4NzIgNDMuNTA1IDk3LjA1NDkgNDMuMTc5MiA5Ny40Mzk5QzQyLjg1MzQgOTcuODI1IDQyLjQ2MTkgOTguMTE5MSA0Mi4wMDQ5IDk4LjMyMjNDNDEuNTUyMSA5OC41MjU0IDQxLjA0NDMgOTguNjI3IDQwLjQ4MTQgOTguNjI3QzM5LjkzNTUgOTguNjI3IDM5LjQzNDEgOTguNTI1NCAzOC45NzcxIDk4LjMyMjNDMzguNTI0MyA5OC4xMTkxIDM4LjEzMDcgOTcuODI1IDM3Ljc5NjQgOTcuNDM5OUMzNy40NjYzIDk3LjA1NDkgMzcuMjEwMyA5Ni41ODcyIDM3LjAyODMgOTYuMDM3MUMzNi44NDY0IDk1LjQ4NyAzNi43NTU0IDk0Ljg2NDkgMzYuNzU1NCA5NC4xNzA5VjkzLjU4NjlDMzYuNzU1NCA5Mi44OTI5IDM2Ljg0NDIgOTIuMjcyOSAzNy4wMjIgOTEuNzI3MUMzNy4yMDM5IDkxLjE3NjkgMzcuNDYgOTAuNzA5MyAzNy43OSA5MC4zMjQyQzM4LjEyMDEgODkuOTM0OSAzOC41MTE2IDg5LjYzODcgMzguOTY0NCA4OS40MzU1QzM5LjQyMTQgODkuMjMyNCAzOS45MjI5IDg5LjEzMDkgNDAuNDY4OCA4OS4xMzA5QzQxLjAzMTYgODkuMTMwOSA0MS41Mzk0IDg5LjIzMjQgNDEuOTkyMiA4OS40MzU1QzQyLjQ0OTIgODkuNjM4NyA0Mi44NDA3IDg5LjkzNDkgNDMuMTY2NSA5MC4zMjQyQzQzLjQ5NjYgOTAuNzA5MyA0My43NDg0IDkxLjE3NjkgNDMuOTIxOSA5MS43MjcxQzQ0LjA5OTYgOTIuMjcyOSA0NC4xODg1IDkyLjg5MjkgNDQuMTg4NSA5My41ODY5Wk00Mi45NzYxIDk0LjE3MDlWOTMuNTc0MkM0Mi45NzYxIDkzLjAyNDEgNDIuOTE4OSA5Mi41Mzc0IDQyLjgwNDcgOTIuMTE0M0M0Mi42OTQ3IDkxLjY5MTEgNDIuNTMxNyA5MS4zMzU2IDQyLjMxNTkgOTEuMDQ3OUM0Mi4xMDAxIDkwLjc2MDEgNDEuODM1NiA5MC41NDIyIDQxLjUyMjUgOTAuMzk0QzQxLjIxMzUgOTAuMjQ1OSA0MC44NjIzIDkwLjE3MTkgNDAuNDY4OCA5MC4xNzE5QzQwLjA4NzkgOTAuMTcxOSAzOS43NDMgOTAuMjQ1OSAzOS40MzQxIDkwLjM5NEMzOS4xMjk0IDkwLjU0MjIgMzguODY3IDkwLjc2MDEgMzguNjQ3IDkxLjA0NzlDMzguNDMxMiA5MS4zMzU2IDM4LjI2NCA5MS42OTExIDM4LjE0NTUgOTIuMTE0M0MzOC4wMjcgOTIuNTM3NCAzNy45Njc4IDkzLjAyNDEgMzcuOTY3OCA5My41NzQyVjk0LjE3MDlDMzcuOTY3OCA5NC43MjUzIDM4LjAyNyA5NS4yMTYxIDM4LjE0NTUgOTUuNjQzNkMzOC4yNjQgOTYuMDY2NyAzOC40MzMzIDk2LjQyNDMgMzguNjUzMyA5Ni43MTYzQzM4Ljg3NzYgOTcuMDA0MSAzOS4xNDIxIDk3LjIyMiAzOS40NDY4IDk3LjM3MDFDMzkuNzU1NyA5Ny41MTgyIDQwLjEwMDYgOTcuNTkyMyA0MC40ODE0IDk3LjU5MjNDNDAuODc5MiA5Ny41OTIzIDQxLjIzMjYgOTcuNTE4MiA0MS41NDE1IDk3LjM3MDFDNDEuODUwNCA5Ny4yMjIgNDIuMTEwNyA5Ny4wMDQxIDQyLjMyMjMgOTYuNzE2M0M0Mi41MzgxIDk2LjQyNDMgNDIuNzAxIDk2LjA2NjcgNDIuODExIDk1LjY0MzZDNDIuOTIxMSA5NS4yMTYxIDQyLjk3NjEgOTQuNzI1MyA0Mi45NzYxIDk0LjE3MDlaTTQ3LjEyMTEgOTEuNjMxOFY5OC41SDQ1Ljk0MDRWOTEuNjMxOEg0Ny4xMjExWk00NS44NTE2IDg5LjgxMDFDNDUuODUxNiA4OS42MTk2IDQ1LjkwODcgODkuNDU4OCA0Ni4wMjI5IDg5LjMyNzZDNDYuMTQxNCA4OS4xOTY1IDQ2LjMxNDkgODkuMTMwOSA0Ni41NDM1IDg5LjEzMDlDNDYuNzY3NyA4OS4xMzA5IDQ2LjkzOTEgODkuMTk2NSA0Ny4wNTc2IDg5LjMyNzZDNDcuMTgwMyA4OS40NTg4IDQ3LjI0MTcgODkuNjE5NiA0Ny4yNDE3IDg5LjgxMDFDNDcuMjQxNyA4OS45OTIgNDcuMTgwMyA5MC4xNDg2IDQ3LjA1NzYgOTAuMjc5OEM0Ni45MzkxIDkwLjQwNjcgNDYuNzY3NyA5MC40NzAyIDQ2LjU0MzUgOTAuNDcwMkM0Ni4zMTQ5IDkwLjQ3MDIgNDYuMTQxNCA5MC40MDY3IDQ2LjAyMjkgOTAuMjc5OEM0NS45MDg3IDkwLjE0ODYgNDUuODUxNiA4OS45OTIgNDUuODUxNiA4OS44MTAxWk01MC4yODIyIDg4Ljc1Vjk4LjVINDkuMTAxNlY4OC43NUg1MC4yODIyWk01Ny4xMzEzIDk3LjI4MTJMNTguODk2IDkxLjYzMThINTkuNjcwNEw1OS41MTgxIDkyLjc1NTRMNTcuNzIxNyA5OC41SDU2Ljk2NjNMNTcuMTMxMyA5Ny4yODEyWk01NS45NDQzIDkxLjYzMThMNTcuNDQ4NyA5Ny4zNDQ3TDU3LjU1NjYgOTguNUg1Ni43NjMyTDU0Ljc3IDkxLjYzMThINTUuOTQ0M1pNNjEuMzU4OSA5Ny4zMDAzTDYyLjc5MzUgOTEuNjMxOEg2My45NjE0TDYxLjk2ODMgOTguNUg2MS4xODEyTDYxLjM1ODkgOTcuMzAwM1pNNTkuODQxOCA5MS42MzE4TDYxLjU2ODQgOTcuMTg2TDYxLjc2NTEgOTguNUg2MS4wMTYxTDU5LjE2ODkgOTIuNzQyN0w1OS4wMTY2IDkxLjYzMThINTkuODQxOFpNNjYuMzQxOCA5Mi43MTA5Vjk4LjVINjUuMTY3NVY5MS42MzE4SDY2LjMxMDFMNjYuMzQxOCA5Mi43MTA5Wk02OC40ODczIDkxLjU5MzhMNjguNDgxIDkyLjY4NTVDNjguMzgzNiA5Mi42NjQ0IDY4LjI5MDUgOTIuNjUxNyA2OC4yMDE3IDkyLjY0NzVDNjguMTE3IDkyLjYzOSA2OC4wMTk3IDkyLjYzNDggNjcuOTA5NyA5Mi42MzQ4QzY3LjYzODggOTIuNjM0OCA2Ny4zOTk3IDkyLjY3NzEgNjcuMTkyNCA5Mi43NjE3QzY2Ljk4NSA5Mi44NDY0IDY2LjgwOTQgOTIuOTY0OCA2Ni42NjU1IDkzLjExNzJDNjYuNTIxNiA5My4yNjk1IDY2LjQwNzQgOTMuNDUxNSA2Ni4zMjI4IDkzLjY2MzFDNjYuMjQyNCA5My44NzA0IDY2LjE4OTUgOTQuMDk5IDY2LjE2NDEgOTQuMzQ4Nkw2NS44MzQgOTQuNTM5MUM2NS44MzQgOTQuMTI0MyA2NS44NzQyIDkzLjczNSA2NS45NTQ2IDkzLjM3MTFDNjYuMDM5MiA5My4wMDcyIDY2LjE2ODMgOTIuNjg1NSA2Ni4zNDE4IDkyLjQwNjJDNjYuNTE1MyA5Mi4xMjI3IDY2LjczNTQgOTEuOTAyNyA2Ny4wMDIgOTEuNzQ2MUM2Ny4yNzI4IDkxLjU4NTMgNjcuNTk0NCA5MS41MDQ5IDY3Ljk2NjggOTEuNTA0OUM2OC4wNTE0IDkxLjUwNDkgNjguMTQ4OCA5MS41MTU1IDY4LjI1ODggOTEuNTM2NkM2OC4zNjg4IDkxLjU1MzUgNjguNDQ1IDkxLjU3MjYgNjguNDg3MyA5MS41OTM4Wk03My4zNjg3IDk3LjMyNTdWOTMuNzlDNzMuMzY4NyA5My41MTkyIDczLjMxMzYgOTMuMjg0MyA3My4yMDM2IDkzLjA4NTRDNzMuMDk3OCA5Mi44ODIzIDcyLjkzNyA5Mi43MjU3IDcyLjcyMTIgOTIuNjE1N0M3Mi41MDU0IDkyLjUwNTcgNzIuMjM4OCA5Mi40NTA3IDcxLjkyMTQgOTIuNDUwN0M3MS42MjUyIDkyLjQ1MDcgNzEuMzY0OSA5Mi41MDE1IDcxLjE0MDYgOTIuNjAzQzcwLjkyMDYgOTIuNzA0NiA3MC43NDcxIDkyLjgzNzkgNzAuNjIwMSA5My4wMDI5QzcwLjQ5NzQgOTMuMTY4IDcwLjQzNiA5My4zNDU3IDcwLjQzNiA5My41MzYxSDY5LjI2MTdDNjkuMjYxNyA5My4yOTA3IDY5LjMyNTIgOTMuMDQ3NCA2OS40NTIxIDkyLjgwNjJDNjkuNTc5MSA5Mi41NjQ5IDY5Ljc2MTEgOTIuMzQ3IDY5Ljk5OCA5Mi4xNTIzQzcwLjIzOTMgOTEuOTUzNSA3MC41MjcgOTEuNzk2OSA3MC44NjEzIDkxLjY4MjZDNzEuMTk5OSA5MS41NjQxIDcxLjU3NjUgOTEuNTA0OSA3MS45OTEyIDkxLjUwNDlDNzIuNDkwNiA5MS41MDQ5IDcyLjkzMDcgOTEuNTg5NSA3My4zMTE1IDkxLjc1ODhDNzMuNjk2NiA5MS45MjgxIDczLjk5NzEgOTIuMTg0MSA3NC4yMTI5IDkyLjUyNjlDNzQuNDMyOSA5Mi44NjU0IDc0LjU0MyA5My4yOTA3IDc0LjU0MyA5My44MDI3Vjk3LjAwMkM3NC41NDMgOTcuMjMwNSA3NC41NjIgOTcuNDczOCA3NC42MDAxIDk3LjczMTlDNzQuNjQyNCA5Ny45OTAxIDc0LjcwMzggOTguMjEyMiA3NC43ODQyIDk4LjM5ODRWOTguNUg3My41NTkxQzczLjQ5OTggOTguMzY0NiA3My40NTMzIDk4LjE4NDcgNzMuNDE5NCA5Ny45NjA0QzczLjM4NTYgOTcuNzMxOSA3My4zNjg3IDk3LjUyMDMgNzMuMzY4NyA5Ny4zMjU3Wk03My41NzE4IDk0LjMzNTlMNzMuNTg0NSA5NS4xNjExSDcyLjM5NzVDNzIuMDYzMiA5NS4xNjExIDcxLjc2NDggOTUuMTg4NiA3MS41MDI0IDk1LjI0MzdDNzEuMjQwMSA5NS4yOTQ0IDcxLjAyIDk1LjM3MjcgNzAuODQyMyA5NS40Nzg1QzcwLjY2NDYgOTUuNTg0MyA3MC41MjkxIDk1LjcxNzYgNzAuNDM2IDk1Ljg3ODRDNzAuMzQyOSA5Ni4wMzUgNzAuMjk2NCA5Ni4yMTkxIDcwLjI5NjQgOTYuNDMwN0M3MC4yOTY0IDk2LjY0NjUgNzAuMzQ1MSA5Ni44NDMzIDcwLjQ0MjQgOTcuMDIxQzcwLjUzOTcgOTcuMTk4NyA3MC42ODU3IDk3LjM0MDUgNzAuODgwNCA5Ny40NDYzQzcxLjA3OTMgOTcuNTQ3OSA3MS4zMjI2IDk3LjU5ODYgNzEuNjEwNCA5Ny41OTg2QzcxLjk3MDEgOTcuNTk4NiA3Mi4yODc0IDk3LjUyMjUgNzIuNTYyNSA5Ny4zNzAxQzcyLjgzNzYgOTcuMjE3OCA3My4wNTU1IDk3LjAzMTYgNzMuMjE2MyA5Ni44MTE1QzczLjM4MTMgOTYuNTkxNSA3My40NzAyIDk2LjM3NzggNzMuNDgyOSA5Ni4xNzA0TDczLjk4NDQgOTYuNzM1NEM3My45NTQ4IDk2LjkxMzEgNzMuODc0MyA5Ny4xMDk5IDczLjc0MzIgOTcuMzI1N0M3My42MTIgOTcuNTQxNSA3My40MzY0IDk3Ljc0ODkgNzMuMjE2MyA5Ny45NDc4QzczLjAwMDUgOTguMTQyNCA3Mi43NDI0IDk4LjMwNTMgNzIuNDQxOSA5OC40MzY1QzcyLjE0NTcgOTguNTYzNSA3MS44MTE0IDk4LjYyNyA3MS40MzkgOTguNjI3QzcwLjk3MzUgOTguNjI3IDcwLjU2NTEgOTguNTM2IDcwLjIxMzkgOTguMzU0QzY5Ljg2NjkgOTguMTcyIDY5LjU5NiA5Ny45Mjg3IDY5LjQwMTQgOTcuNjI0QzY5LjIxMDkgOTcuMzE1MSA2OS4xMTU3IDk2Ljk3MDIgNjkuMTE1NyA5Ni41ODk0QzY5LjExNTcgOTYuMjIxMiA2OS4xODc3IDk1Ljg5NzUgNjkuMzMxNSA5NS42MTgyQzY5LjQ3NTQgOTUuMzM0NiA2OS42ODI4IDk1LjA5OTggNjkuOTUzNiA5NC45MTM2QzcwLjIyNDQgOTQuNzIzMSA3MC41NTAzIDk0LjU3OTMgNzAuOTMxMiA5NC40ODE5QzcxLjMxMiA5NC4zODQ2IDcxLjczNzMgOTQuMzM1OSA3Mi4yMDcgOTQuMzM1OUg3My41NzE4Wk03Ny41NjQ1IDkyLjk1MjFWMTAxLjE0MUg3Ni4zODM4VjkxLjYzMThINzcuNDYyOUw3Ny41NjQ1IDkyLjk1MjFaTTgyLjE5MTkgOTUuMDA4OFY5NS4xNDIxQzgyLjE5MTkgOTUuNjQxNCA4Mi4xMzI2IDk2LjEwNDggODIuMDE0MiA5Ni41MzIyQzgxLjg5NTcgOTYuOTU1NCA4MS43MjIyIDk3LjMyMzYgODEuNDkzNyA5Ny42MzY3QzgxLjI2OTQgOTcuOTQ5OSA4MC45OTIyIDk4LjE5MzIgODAuNjYyMSA5OC4zNjY3QzgwLjMzMiA5OC41NDAyIDc5Ljk1MzMgOTguNjI3IDc5LjUyNTkgOTguNjI3Qzc5LjA5IDk4LjYyNyA3OC43MDQ5IDk4LjU1NSA3OC4zNzA2IDk4LjQxMTFDNzguMDM2MyA5OC4yNjczIDc3Ljc1MjggOTguMDU3OCA3Ny41MiA5Ny43ODI3Qzc3LjI4NzMgOTcuNTA3NiA3Ny4xMDExIDk3LjE3NzYgNzYuOTYxNCA5Ni43OTI1Qzc2LjgyNiA5Ni40MDc0IDc2LjczMjkgOTUuOTczNiA3Ni42ODIxIDk1LjQ5MTJWOTQuNzgwM0M3Ni43MzI5IDk0LjI3MjUgNzYuODI4MSA5My44MTc1IDc2Ljk2NzggOTMuNDE1NUM3Ny4xMDc0IDkzLjAxMzUgNzcuMjkxNSA5Mi42NzA3IDc3LjUyIDkyLjM4NzJDNzcuNzUyOCA5Mi4wOTk0IDc4LjAzNDIgOTEuODgxNSA3OC4zNjQzIDkxLjczMzRDNzguNjk0MyA5MS41ODExIDc5LjA3NTIgOTEuNTA0OSA3OS41MDY4IDkxLjUwNDlDNzkuOTM4NSA5MS41MDQ5IDgwLjMyMTUgOTEuNTg5NSA4MC42NTU4IDkxLjc1ODhDODAuOTkwMSA5MS45MjM4IDgxLjI3MTUgOTIuMTYwOCA4MS41IDkyLjQ2OTdDODEuNzI4NSA5Mi43Nzg2IDgxLjg5OTkgOTMuMTQ4OSA4Mi4wMTQyIDkzLjU4MDZDODIuMTMyNiA5NC4wMDggODIuMTkxOSA5NC40ODQgODIuMTkxOSA5NS4wMDg4Wk04MS4wMTEyIDk1LjE0MjFWOTUuMDA4OEM4MS4wMTEyIDk0LjY2NiA4MC45NzUzIDk0LjM0NDQgODAuOTAzMyA5NC4wNDM5QzgwLjgzMTQgOTMuNzM5MyA4MC43MTkyIDkzLjQ3MjcgODAuNTY2OSA5My4yNDQxQzgwLjQxODggOTMuMDExNCA4MC4yMjg0IDkyLjgyOTQgNzkuOTk1NiA5Mi42OTgyQzc5Ljc2MjkgOTIuNTYyOCA3OS40ODU3IDkyLjQ5NTEgNzkuMTY0MSA5Mi40OTUxQzc4Ljg2NzggOTIuNDk1MSA3OC42MDk3IDkyLjU0NTkgNzguMzg5NiA5Mi42NDc1Qzc4LjE3MzggOTIuNzQ5IDc3Ljk4OTcgOTIuODg2NiA3Ny44Mzc0IDkzLjA2MDFDNzcuNjg1MSA5My4yMjkzIDc3LjU2MDIgOTMuNDI0IDc3LjQ2MjkgOTMuNjQ0Qzc3LjM2OTggOTMuODU5OSA3Ny4zIDk0LjA4NDEgNzcuMjUzNCA5NC4zMTY5Vjk1Ljk2MDlDNzcuMzM4MSA5Ni4yNTcyIDc3LjQ1NjUgOTYuNTM2NSA3Ny42MDg5IDk2Ljc5ODhDNzcuNzYxMiA5Ny4wNTcgNzcuOTY0NCA5Ny4yNjY0IDc4LjIxODMgOTcuNDI3MkM3OC40NzIyIDk3LjU4MzggNzguNzkxNyA5Ny42NjIxIDc5LjE3NjggOTcuNjYyMUM3OS40OTQxIDk3LjY2MjEgNzkuNzY3MSA5Ny41OTY1IDc5Ljk5NTYgOTcuNDY1M0M4MC4yMjg0IDk3LjMyOTkgODAuNDE4OCA5Ny4xNDU4IDgwLjU2NjkgOTYuOTEzMUM4MC43MTkyIDk2LjY4MDMgODAuODMxNCA5Ni40MTM3IDgwLjkwMzMgOTYuMTEzM0M4MC45NzUzIDk1LjgwODYgODEuMDExMiA5NS40ODQ5IDgxLjAxMTIgOTUuMTQyMVpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0PC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwcmV2aWV3OyIsImltcG9ydCBwcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5pbXBvcnQgeyBTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlcic7XG5pbXBvcnQgU2VsZWN0UmFkaW9DaGVjayBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlbGVjdFJhZGlvQ2hlY2snO1xuaW1wb3J0IEN1c3RvbVRlbXBsYXRlQ29udHJvbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DdXN0b21UZW1wbGF0ZUNvbnRyb2xzJztcblxuY29uc3Qge1xuXHQgICAgICBUb29sQmFyRmllbGRzLFxuXHQgICAgICBCbG9ja0xhYmVsLFxuXHQgICAgICBCbG9ja0Rlc2NyaXB0aW9uLFxuXHQgICAgICBCbG9ja0FkdmFuY2VkVmFsdWUsXG5cdCAgICAgIEJsb2NrTmFtZSxcblx0ICAgICAgQWR2YW5jZWRGaWVsZHMsXG5cdCAgICAgIEZpZWxkQ29udHJvbCxcblx0ICAgICAgU3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHMsXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdCAgICAgIEluc3BlY3RvckNvbnRyb2xzLFxuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuXHQgICAgICBCbG9ja1NldHRpbmdzTWVudUNvbnRyb2xzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIFBhbmVsQm9keSxcblx0ICAgICAgVG9vbGJhckJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVVuaXF1ZU5hbWVPbkR1cGxpY2F0ZSxcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWRpb0VkaXQoIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBpc1NlbGVjdGVkLFxuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblx0dXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlKCk7XG5cblx0aWYgKCBhdHRyaWJ1dGVzLmlzUHJldmlldyApIHtcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17IHtcblx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0fSB9PlxuXHRcdFx0eyBwcmV2aWV3IH1cblx0XHQ8L2Rpdj47XG5cdH1cblxuXHRyZXR1cm4gPD5cblx0XHR7IGlzU2VsZWN0ZWQgJiYgPEJsb2NrU2V0dGluZ3NNZW51Q29udHJvbHMvPiB9XG5cdFx0PFRvb2xCYXJGaWVsZHM+XG5cdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRpY29uPXsgYXR0cmlidXRlcy5jdXN0b21fb3B0aW9uXG5cdFx0XHRcdFx0PyA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdDxyZWN0IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHJ4PVwiMlwiIGZpbGw9XCIjMTAxNTE3XCIvPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMzAgMTYuNzk2TDE4LjA0NCAyOC44ODEzTDE0IDMwTDE1LjE1NiAyNi4wODY3TDI3LjExMDcgMTRMMzAgMTYuNzk2WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0xMiA4SDZWMjFIMTcuMzM5OEwxNS4zMzk4IDIzSDZMNS43OTU5IDIyLjk4OTNDNC44NTQzNSAyMi44OTM4IDQuMTA2MiAyMi4xNDU3IDQuMDEwNzQgMjEuMjA0MUw0IDIxVjhDNCA2Ljg5NTQzIDQuODk1NDMgNiA2IDZIMTJWOFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjEgMTcuMzM5OEwxOSAxOS4zMzk4VjE1SDIxVjE3LjMzOThaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE5IDNIMjFWNkgyNFY4SDIxVjExSDE5VjhIMTZWNkgxOVYzWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0OiA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMzAgMTYuNzk2TDE4LjA0NCAyOC44ODEzTDE0IDMwTDE1LjE1NiAyNi4wODY3TDI3LjExMDcgMTRMMzAgMTYuNzk2WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0xMiA4SDZWMjFIMTcuMzM5OEwxNS4zMzk4IDIzSDZMNS43OTU5IDIyLjk4OTNDNC44NTQzNSAyMi44OTM4IDQuMTA2MiAyMi4xNDU3IDQuMDEwNzQgMjEuMjA0MUw0IDIxVjhDNCA2Ljg5NTQzIDQuODk1NDMgNiA2IDZIMTJWOFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjEgMTcuMzM5OEwxOSAxOS4zMzk4VjE1SDIxVjE3LjMzOThaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE5IDNIMjFWNkgyNFY4SDIxVjExSDE5VjhIMTZWNkgxOVYzWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdH1cblx0XHRcdFx0dGl0bGU9eyBhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb25cblx0XHRcdFx0XHRcdD8gX18oXG5cdFx0XHRcdFx0XHQnRGlzYWJsZSBjdXN0b20gb3B0aW9ucycsXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0OiBfXyhcblx0XHRcdFx0XHRcdCdFbmFibGUgY3VzdG9tIG9wdGlvbnMnLFxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdGN1c3RvbV9vcHRpb246ICFhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24sXG5cdFx0XHRcdH0gKSB9XG5cdFx0XHRcdGlzQWN0aXZlPXsgYXR0cmlidXRlcy5jdXN0b21fb3B0aW9uIH1cblx0XHRcdC8+XG5cdFx0PC9Ub29sQmFyRmllbGRzPlxuXHRcdDxTd2l0Y2hQYWdlT25DaGFuZ2VDb250cm9scy8+XG5cdFx0eyBpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHQ+XG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdHZW5lcmFsJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfT5cblx0XHRcdFx0PEJsb2NrTGFiZWwvPlxuXHRcdFx0XHQ8QmxvY2tOYW1lLz5cblx0XHRcdFx0PEJsb2NrRGVzY3JpcHRpb24vPlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdDxCbG9ja0FkdmFuY2VkVmFsdWUvPlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+IH1cblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlcicgKSB9XG5cdFx0XHRcdHNjcmlwdERhdGE9eyB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrIHsgLi4ucHJvcHMgfT5cblx0XHRcdFx0PEN1c3RvbVRlbXBsYXRlQ29udHJvbHNcblx0XHRcdFx0XHRsaXN0aW5nVHlwZXM9eyB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YS5saXN0aW5nc19saXN0IH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEZpZWxkQ29udHJvbFxuXHRcdFx0XHRcdHR5cGU9XCJjdXN0b21fc2V0dGluZ3NcIlxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdjdXN0b21TZXR0aW5nc0ZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1NlbGVjdFJhZGlvQ2hlY2s+XG5cdFx0PC9kaXY+XG5cdDwvPjtcbn0iLCJpbXBvcnQgUmFkaW9FZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnQHNoYXJlZC9ibG9ja3MvcmFkaW8vYmxvY2suanNvbic7XG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgY3JlYXRlQmxvY2sgfSA9IHdwLmJsb2NrcztcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRkZXNjcmlwdGlvbjogX18oXG5cdFx0YENyZWF0ZSBhIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbnMgZnJvbSB3aGljaCB0aGUgdXNlciBjYW4gXG5jaG9vc2Ugb25seSBhIHNpbmdsZSB2YXJpYW50LiBCdWlsZCB0aGUgbGlzdHMgb2YgdmFyaW91cyBsZW5ndGhzLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRlZGl0OiBSYWRpb0VkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcsICdibG9ja05hbWUnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRpc1ByZXZpZXc6IHRydWUsXG5cdFx0fSxcblx0fSxcblx0dHJhbnNmb3Jtczoge1xuXHRcdHRvOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdibG9jaycsXG5cdFx0XHRcdGJsb2NrczogWyAnamV0LWZvcm1zL3RleHQtZmllbGQnIF0sXG5cdFx0XHRcdHRyYW5zZm9ybTogKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jayggJ2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcblx0XHRcdFx0XHRcdHsgLi4uYXR0cmlidXRlcyB9ICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaW9yaXR5OiAwLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdGZyb206IFtcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogJ2Jsb2NrJyxcblx0XHRcdFx0YmxvY2tzOiBbXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy9zZWxlY3QtZmllbGQnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdHRyYW5zZm9ybTogKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jayggbmFtZSwgeyAuLi5hdHRyaWJ1dGVzIH0gKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpb3JpdHk6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0XHRibG9ja3M6IFtcblx0XHRcdFx0XHQnamV0LWZvcm1zL2NoZWNrYm94LWZpZWxkJyxcblx0XHRcdFx0XSxcblx0XHRcdFx0dHJhbnNmb3JtOiAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdFx0XHRcdFx0YXR0cmlidXRlcy5jdXN0b21fb3B0aW9uID0ge1xuXHRcdFx0XHRcdFx0YWxsb3c6ICEhYXR0cmlidXRlcy5jdXN0b21fb3B0aW9uLFxuXHRcdFx0XHRcdFx0bGFiZWw6ICcrIEFkZCBOZXcnLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCBuYW1lLCB7IC4uLmF0dHJpYnV0ZXMgfSApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcmlvcml0eTogMCxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5ncyxcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgcHJldmlldyA9IChcblx0PHN2ZyB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHZpZXdCb3g9XCIwIDAgMjk4IDE0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxyZWN0IHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgZmlsbD1cIiNGMUY1RjlcIi8+XG5cdFx0PHBhdGggZD1cIk0xOS44MjYyIDUxLjA5NjdIMTcuMTY3VjUwLjAyMzRIMTkuODI2MkMyMC4zNDExIDUwLjAyMzQgMjAuNzU4MSA0OS45NDE0IDIxLjA3NzEgNDkuNzc3M0MyMS4zOTYyIDQ5LjYxMzMgMjEuNjI4NiA0OS4zODU0IDIxLjc3NDQgNDkuMDkzOEMyMS45MjQ4IDQ4LjgwMjEgMjIgNDguNDY5NCAyMiA0OC4wOTU3QzIyIDQ3Ljc1MzkgMjEuOTI0OCA0Ny40MzI2IDIxLjc3NDQgNDcuMTMxOEMyMS42Mjg2IDQ2LjgzMTEgMjEuMzk2MiA0Ni41ODk1IDIxLjA3NzEgNDYuNDA3MkMyMC43NTgxIDQ2LjIyMDQgMjAuMzQxMSA0Ni4xMjcgMTkuODI2MiA0Ni4xMjdIMTcuNDc0NlY1NUgxNi4xNTUzVjQ1LjA0NjlIMTkuODI2MkMyMC41NzgxIDQ1LjA0NjkgMjEuMjEzOSA0NS4xNzY4IDIxLjczMzQgNDUuNDM2NUMyMi4yNTI5IDQ1LjY5NjMgMjIuNjQ3MSA0Ni4wNTYzIDIyLjkxNiA0Ni41MTY2QzIzLjE4NDkgNDYuOTcyMyAyMy4zMTkzIDQ3LjQ5NDEgMjMuMzE5MyA0OC4wODJDMjMuMzE5MyA0OC43MjAxIDIzLjE4NDkgNDkuMjY0NiAyMi45MTYgNDkuNzE1OEMyMi42NDcxIDUwLjE2NyAyMi4yNTI5IDUwLjUxMTEgMjEuNzMzNCA1MC43NDhDMjEuMjEzOSA1MC45ODA1IDIwLjU3ODEgNTEuMDk2NyAxOS44MjYyIDUxLjA5NjdaTTI2LjA2MDUgNDguNzY1NlY1NUgyNC43OTU5VjQ3LjYwMzVIMjYuMDI2NEwyNi4wNjA1IDQ4Ljc2NTZaTTI4LjM3MTEgNDcuNTYyNUwyOC4zNjQzIDQ4LjczODNDMjguMjU5NCA0OC43MTU1IDI4LjE1OTIgNDguNzAxOCAyOC4wNjM1IDQ4LjY5NzNDMjcuOTcyMyA0OC42ODgyIDI3Ljg2NzUgNDguNjgzNiAyNy43NDkgNDguNjgzNkMyNy40NTc0IDQ4LjY4MzYgMjcuMTk5OSA0OC43MjkyIDI2Ljk3NjYgNDguODIwM0MyNi43NTMzIDQ4LjkxMTUgMjYuNTY0MSA0OS4wMzkxIDI2LjQwOTIgNDkuMjAzMUMyNi4yNTQyIDQ5LjM2NzIgMjYuMTMxMiA0OS41NjMyIDI2LjA0IDQ5Ljc5MUMyNS45NTM1IDUwLjAxNDMgMjUuODk2NSA1MC4yNjA0IDI1Ljg2OTEgNTAuNTI5M0wyNS41MTM3IDUwLjczNDRDMjUuNTEzNyA1MC4yODc4IDI1LjU1NyA0OS44Njg1IDI1LjY0MzYgNDkuNDc2NkMyNS43MzQ3IDQ5LjA4NDYgMjUuODczNyA0OC43MzgzIDI2LjA2MDUgNDguNDM3NUMyNi4yNDc0IDQ4LjEzMjIgMjYuNDg0NCA0Ny44OTUyIDI2Ljc3MTUgNDcuNzI2NkMyNy4wNjMyIDQ3LjU1MzQgMjcuNDA5NSA0Ny40NjY4IDI3LjgxMDUgNDcuNDY2OEMyNy45MDE3IDQ3LjQ2NjggMjguMDA2NSA0Ny40NzgyIDI4LjEyNSA0Ny41MDFDMjguMjQzNSA0Ny41MTkyIDI4LjMyNTUgNDcuNTM5NyAyOC4zNzExIDQ3LjU2MjVaTTMyLjQ3MjcgNTUuMTM2N0MzMS45NTc3IDU1LjEzNjcgMzEuNDkwNiA1NS4wNTAxIDMxLjA3MTMgNTQuODc3QzMwLjY1NjYgNTQuNjk5MiAzMC4yOTg4IDU0LjQ1MDggMjkuOTk4IDU0LjEzMThDMjkuNzAxOCA1My44MTI4IDI5LjQ3NCA1My40MzQ2IDI5LjMxNDUgNTIuOTk3MUMyOS4xNTQ5IDUyLjU1OTYgMjkuMDc1MiA1Mi4wODExIDI5LjA3NTIgNTEuNTYxNVY1MS4yNzQ0QzI5LjA3NTIgNTAuNjcyOSAyOS4xNjQxIDUwLjEzNzQgMjkuMzQxOCA0OS42NjhDMjkuNTE5NSA0OS4xOTQgMjkuNzYxMSA0OC43OTMgMzAuMDY2NCA0OC40NjQ4QzMwLjM3MTcgNDguMTM2NyAzMC43MTgxIDQ3Ljg4ODMgMzEuMTA1NSA0Ny43MTk3QzMxLjQ5MjggNDcuNTUxMSAzMS44OTM5IDQ3LjQ2NjggMzIuMzA4NiA0Ny40NjY4QzMyLjgzNzIgNDcuNDY2OCAzMy4yOTMgNDcuNTU3OSAzMy42NzU4IDQ3Ljc0MDJDMzQuMDYzMiA0Ny45MjI1IDM0LjM3OTkgNDguMTc3NyAzNC42MjYgNDguNTA1OUMzNC44NzIxIDQ4LjgyOTQgMzUuMDU0NCA0OS4yMTIyIDM1LjE3MjkgNDkuNjU0M0MzNS4yOTEzIDUwLjA5MTggMzUuMzUwNiA1MC41NzAzIDM1LjM1MDYgNTEuMDg5OFY1MS42NTcySDI5LjgyNzFWNTAuNjI1SDM0LjA4NTlWNTAuNTI5M0MzNC4wNjc3IDUwLjIwMTIgMzMuOTk5MyA0OS44ODIyIDMzLjg4MDkgNDkuNTcyM0MzMy43NjY5IDQ5LjI2MjQgMzMuNTg0NiA0OS4wMDcyIDMzLjMzNCA0OC44MDY2QzMzLjA4MzMgNDguNjA2MSAzMi43NDE1IDQ4LjUwNTkgMzIuMzA4NiA0OC41MDU5QzMyLjAyMTUgNDguNTA1OSAzMS43NTcyIDQ4LjU2NzQgMzEuNTE1NiA0OC42OTA0QzMxLjI3NDEgNDguODA4OSAzMS4wNjY3IDQ4Ljk4NjcgMzAuODkzNiA0OS4yMjM2QzMwLjcyMDQgNDkuNDYwNiAzMC41ODU5IDQ5Ljc1IDMwLjQ5MDIgNTAuMDkxOEMzMC4zOTQ1IDUwLjQzMzYgMzAuMzQ2NyA1MC44Mjc4IDMwLjM0NjcgNTEuMjc0NFY1MS41NjE1QzMwLjM0NjcgNTEuOTEyNCAzMC4zOTQ1IDUyLjI0MjggMzAuNDkwMiA1Mi41NTI3QzMwLjU5MDUgNTIuODU4MSAzMC43MzQgNTMuMTI3IDMwLjkyMDkgNTMuMzU5NEMzMS4xMTIzIDUzLjU5MTggMzEuMzQyNCA1My43NzQxIDMxLjYxMTMgNTMuOTA2MkMzMS44ODQ4IDU0LjAzODQgMzIuMTk0NyA1NC4xMDQ1IDMyLjU0MSA1NC4xMDQ1QzMyLjk4NzYgNTQuMTA0NSAzMy4zNjU5IDU0LjAxMzMgMzMuNjc1OCA1My44MzExQzMzLjk4NTcgNTMuNjQ4OCAzNC4yNTY4IDUzLjQwNDkgMzQuNDg5MyA1My4wOTk2TDM1LjI1NDkgNTMuNzA4QzM1LjA5NTQgNTMuOTQ5NSAzNC44OTI2IDU0LjE3OTcgMzQuNjQ2NSA1NC4zOTg0QzM0LjQwMDQgNTQuNjE3MiAzNC4wOTczIDU0Ljc5NDkgMzMuNzM3MyA1NC45MzE2QzMzLjM4MTggNTUuMDY4NCAzMi45NjAzIDU1LjEzNjcgMzIuNDcyNyA1NS4xMzY3Wk0zOC43MTM5IDU1SDM3LjQ0OTJWNDYuODI0MkMzNy40NDkyIDQ2LjI5MSAzNy41NDQ5IDQ1Ljg0MjEgMzcuNzM2MyA0NS40Nzc1QzM3LjkzMjMgNDUuMTA4NCAzOC4yMTI2IDQ0LjgzMDQgMzguNTc3MSA0NC42NDM2QzM4Ljk0MTcgNDQuNDUyMSAzOS4zNzQ3IDQ0LjM1NjQgMzkuODc2IDQ0LjM1NjRDNDAuMDIxOCA0NC4zNTY0IDQwLjE2NzYgNDQuMzY1NiA0MC4zMTM1IDQ0LjM4MzhDNDAuNDYzOSA0NC40MDIgNDAuNjA5NyA0NC40Mjk0IDQwLjc1MSA0NC40NjU4TDQwLjY4MjYgNDUuNDk4QzQwLjU4NjkgNDUuNDc1MyA0MC40Nzc1IDQ1LjQ1OTMgNDAuMzU0NSA0NS40NTAyQzQwLjIzNiA0NS40NDExIDQwLjExNzUgNDUuNDM2NSAzOS45OTkgNDUuNDM2NUMzOS43MzAxIDQ1LjQzNjUgMzkuNDk3NyA0NS40OTEyIDM5LjMwMTggNDUuNjAwNkMzOS4xMTA0IDQ1LjcwNTQgMzguOTY0NSA0NS44NjA0IDM4Ljg2NDMgNDYuMDY1NEMzOC43NjQgNDYuMjcwNSAzOC43MTM5IDQ2LjUyMzQgMzguNzEzOSA0Ni44MjQyVjU1Wk00MC4yODYxIDQ3LjYwMzVWNDguNTc0MkgzNi4yODAzVjQ3LjYwMzVINDAuMjg2MVpNNDMuNTgxMSA1NUg0Mi4zMTY0VjQ2LjgyNDJDNDIuMzE2NCA0Ni4yOTEgNDIuNDEyMSA0NS44NDIxIDQyLjYwMzUgNDUuNDc3NUM0Mi43OTk1IDQ1LjEwODQgNDMuMDc5OCA0NC44MzA0IDQzLjQ0NDMgNDQuNjQzNkM0My44MDg5IDQ0LjQ1MjEgNDQuMjQxOSA0NC4zNTY0IDQ0Ljc0MzIgNDQuMzU2NEM0NC44ODkgNDQuMzU2NCA0NS4wMzQ4IDQ0LjM2NTYgNDUuMTgwNyA0NC4zODM4QzQ1LjMzMTEgNDQuNDAyIDQ1LjQ3NjkgNDQuNDI5NCA0NS42MTgyIDQ0LjQ2NThMNDUuNTQ5OCA0NS40OThDNDUuNDU0MSA0NS40NzUzIDQ1LjM0NDcgNDUuNDU5MyA0NS4yMjE3IDQ1LjQ1MDJDNDUuMTAzMiA0NS40NDExIDQ0Ljk4NDcgNDUuNDM2NSA0NC44NjYyIDQ1LjQzNjVDNDQuNTk3MyA0NS40MzY1IDQ0LjM2NDkgNDUuNDkxMiA0NC4xNjg5IDQ1LjYwMDZDNDMuOTc3NSA0NS43MDU0IDQzLjgzMTcgNDUuODYwNCA0My43MzE0IDQ2LjA2NTRDNDMuNjMxMiA0Ni4yNzA1IDQzLjU4MTEgNDYuNTIzNCA0My41ODExIDQ2LjgyNDJWNTVaTTQ1LjE1MzMgNDcuNjAzNVY0OC41NzQySDQxLjE0NzVWNDcuNjAzNUg0NS4xNTMzWk00OS40NjY4IDU1LjEzNjdDNDguOTUxOCA1NS4xMzY3IDQ4LjQ4NDcgNTUuMDUwMSA0OC4wNjU0IDU0Ljg3N0M0Ny42NTA3IDU0LjY5OTIgNDcuMjkzIDU0LjQ1MDggNDYuOTkyMiA1NC4xMzE4QzQ2LjY5NiA1My44MTI4IDQ2LjQ2ODEgNTMuNDM0NiA0Ni4zMDg2IDUyLjk5NzFDNDYuMTQ5MSA1Mi41NTk2IDQ2LjA2OTMgNTIuMDgxMSA0Ni4wNjkzIDUxLjU2MTVWNTEuMjc0NEM0Ni4wNjkzIDUwLjY3MjkgNDYuMTU4MiA1MC4xMzc0IDQ2LjMzNTkgNDkuNjY4QzQ2LjUxMzcgNDkuMTk0IDQ2Ljc1NTIgNDguNzkzIDQ3LjA2MDUgNDguNDY0OEM0Ny4zNjU5IDQ4LjEzNjcgNDcuNzEyMiA0Ny44ODgzIDQ4LjA5OTYgNDcuNzE5N0M0OC40ODcgNDcuNTUxMSA0OC44ODggNDcuNDY2OCA0OS4zMDI3IDQ3LjQ2NjhDNDkuODMxNCA0Ny40NjY4IDUwLjI4NzEgNDcuNTU3OSA1MC42Njk5IDQ3Ljc0MDJDNTEuMDU3MyA0Ny45MjI1IDUxLjM3NCA0OC4xNzc3IDUxLjYyMDEgNDguNTA1OUM1MS44NjYyIDQ4LjgyOTQgNTIuMDQ4NSA0OS4yMTIyIDUyLjE2NyA0OS42NTQzQzUyLjI4NTUgNTAuMDkxOCA1Mi4zNDQ3IDUwLjU3MDMgNTIuMzQ0NyA1MS4wODk4VjUxLjY1NzJINDYuODIxM1Y1MC42MjVINTEuMDgwMVY1MC41MjkzQzUxLjA2MTggNTAuMjAxMiA1MC45OTM1IDQ5Ljg4MjIgNTAuODc1IDQ5LjU3MjNDNTAuNzYxMSA0OS4yNjI0IDUwLjU3ODggNDkuMDA3MiA1MC4zMjgxIDQ4LjgwNjZDNTAuMDc3NSA0OC42MDYxIDQ5LjczNTcgNDguNTA1OSA0OS4zMDI3IDQ4LjUwNTlDNDkuMDE1NiA0OC41MDU5IDQ4Ljc1MTMgNDguNTY3NCA0OC41MDk4IDQ4LjY5MDRDNDguMjY4MiA0OC44MDg5IDQ4LjA2MDkgNDguOTg2NyA0Ny44ODc3IDQ5LjIyMzZDNDcuNzE0NSA0OS40NjA2IDQ3LjU4MDEgNDkuNzUgNDcuNDg0NCA1MC4wOTE4QzQ3LjM4ODcgNTAuNDMzNiA0Ny4zNDA4IDUwLjgyNzggNDcuMzQwOCA1MS4yNzQ0VjUxLjU2MTVDNDcuMzQwOCA1MS45MTI0IDQ3LjM4ODcgNTIuMjQyOCA0Ny40ODQ0IDUyLjU1MjdDNDcuNTg0NiA1Mi44NTgxIDQ3LjcyODIgNTMuMTI3IDQ3LjkxNSA1My4zNTk0QzQ4LjEwNjQgNTMuNTkxOCA0OC4zMzY2IDUzLjc3NDEgNDguNjA1NSA1My45MDYyQzQ4Ljg3ODkgNTQuMDM4NCA0OS4xODg4IDU0LjEwNDUgNDkuNTM1MiA1NC4xMDQ1QzQ5Ljk4MTggNTQuMTA0NSA1MC4zNiA1NC4wMTMzIDUwLjY2OTkgNTMuODMxMUM1MC45Nzk4IDUzLjY0ODggNTEuMjUxIDUzLjQwNDkgNTEuNDgzNCA1My4wOTk2TDUyLjI0OSA1My43MDhDNTIuMDg5NSA1My45NDk1IDUxLjg4NjcgNTQuMTc5NyA1MS42NDA2IDU0LjM5ODRDNTEuMzk0NSA1NC42MTcyIDUxLjA5MTUgNTQuNzk0OSA1MC43MzE0IDU0LjkzMTZDNTAuMzc2IDU1LjA2ODQgNDkuOTU0NCA1NS4xMzY3IDQ5LjQ2NjggNTUuMTM2N1pNNTUuMDg1OSA0OC43NjU2VjU1SDUzLjgyMTNWNDcuNjAzNUg1NS4wNTE4TDU1LjA4NTkgNDguNzY1NlpNNTcuMzk2NSA0Ny41NjI1TDU3LjM4OTYgNDguNzM4M0M1Ny4yODQ4IDQ4LjcxNTUgNTcuMTg0NiA0OC43MDE4IDU3LjA4ODkgNDguNjk3M0M1Ni45OTc3IDQ4LjY4ODIgNTYuODkyOSA0OC42ODM2IDU2Ljc3NDQgNDguNjgzNkM1Ni40ODI3IDQ4LjY4MzYgNTYuMjI1MyA0OC43MjkyIDU2LjAwMiA0OC44MjAzQzU1Ljc3ODYgNDguOTExNSA1NS41ODk1IDQ5LjAzOTEgNTUuNDM0NiA0OS4yMDMxQzU1LjI3OTYgNDkuMzY3MiA1NS4xNTY2IDQ5LjU2MzIgNTUuMDY1NCA0OS43OTFDNTQuOTc4OCA1MC4wMTQzIDU0LjkyMTkgNTAuMjYwNCA1NC44OTQ1IDUwLjUyOTNMNTQuNTM5MSA1MC43MzQ0QzU0LjUzOTEgNTAuMjg3OCA1NC41ODI0IDQ5Ljg2ODUgNTQuNjY4OSA0OS40NzY2QzU0Ljc2MDEgNDkuMDg0NiA1NC44OTkxIDQ4LjczODMgNTUuMDg1OSA0OC40Mzc1QzU1LjI3MjggNDguMTMyMiA1NS41MDk4IDQ3Ljg5NTIgNTUuNzk2OSA0Ny43MjY2QzU2LjA4ODUgNDcuNTUzNCA1Ni40MzQ5IDQ3LjQ2NjggNTYuODM1OSA0Ny40NjY4QzU2LjkyNzEgNDcuNDY2OCA1Ny4wMzE5IDQ3LjQ3ODIgNTcuMTUwNCA0Ny41MDFDNTcuMjY4OSA0Ny41MTkyIDU3LjM1MDkgNDcuNTM5NyA1Ny4zOTY1IDQ3LjU2MjVaTTYxLjQ5OCA1NS4xMzY3QzYwLjk4MzEgNTUuMTM2NyA2MC41MTYgNTUuMDUwMSA2MC4wOTY3IDU0Ljg3N0M1OS42ODIgNTQuNjk5MiA1OS4zMjQyIDU0LjQ1MDggNTkuMDIzNCA1NC4xMzE4QzU4LjcyNzIgNTMuODEyOCA1OC40OTkzIDUzLjQzNDYgNTguMzM5OCA1Mi45OTcxQzU4LjE4MDMgNTIuNTU5NiA1OC4xMDA2IDUyLjA4MTEgNTguMTAwNiA1MS41NjE1VjUxLjI3NDRDNTguMTAwNiA1MC42NzI5IDU4LjE4OTUgNTAuMTM3NCA1OC4zNjcyIDQ5LjY2OEM1OC41NDQ5IDQ5LjE5NCA1OC43ODY1IDQ4Ljc5MyA1OS4wOTE4IDQ4LjQ2NDhDNTkuMzk3MSA0OC4xMzY3IDU5Ljc0MzUgNDcuODg4MyA2MC4xMzA5IDQ3LjcxOTdDNjAuNTE4MiA0Ny41NTExIDYwLjkxOTMgNDcuNDY2OCA2MS4zMzQgNDcuNDY2OEM2MS44NjI2IDQ3LjQ2NjggNjIuMzE4NCA0Ny41NTc5IDYyLjcwMTIgNDcuNzQwMkM2My4wODg1IDQ3LjkyMjUgNjMuNDA1MyA0OC4xNzc3IDYzLjY1MTQgNDguNTA1OUM2My44OTc1IDQ4LjgyOTQgNjQuMDc5OCA0OS4yMTIyIDY0LjE5ODIgNDkuNjU0M0M2NC4zMTY3IDUwLjA5MTggNjQuMzc2IDUwLjU3MDMgNjQuMzc2IDUxLjA4OThWNTEuNjU3Mkg1OC44NTI1VjUwLjYyNUg2My4xMTEzVjUwLjUyOTNDNjMuMDkzMSA1MC4yMDEyIDYzLjAyNDcgNDkuODgyMiA2Mi45MDYyIDQ5LjU3MjNDNjIuNzkyMyA0OS4yNjI0IDYyLjYxIDQ5LjAwNzIgNjIuMzU5NCA0OC44MDY2QzYyLjEwODcgNDguNjA2MSA2MS43NjY5IDQ4LjUwNTkgNjEuMzM0IDQ4LjUwNTlDNjEuMDQ2OSA0OC41MDU5IDYwLjc4MjYgNDguNTY3NCA2MC41NDEgNDguNjkwNEM2MC4yOTk1IDQ4LjgwODkgNjAuMDkyMSA0OC45ODY3IDU5LjkxODkgNDkuMjIzNkM1OS43NDU4IDQ5LjQ2MDYgNTkuNjExMyA0OS43NSA1OS41MTU2IDUwLjA5MThDNTkuNDE5OSA1MC40MzM2IDU5LjM3MjEgNTAuODI3OCA1OS4zNzIxIDUxLjI3NDRWNTEuNTYxNUM1OS4zNzIxIDUxLjkxMjQgNTkuNDE5OSA1Mi4yNDI4IDU5LjUxNTYgNTIuNTUyN0M1OS42MTU5IDUyLjg1ODEgNTkuNzU5NCA1My4xMjcgNTkuOTQ2MyA1My4zNTk0QzYwLjEzNzcgNTMuNTkxOCA2MC4zNjc4IDUzLjc3NDEgNjAuNjM2NyA1My45MDYyQzYwLjkxMDIgNTQuMDM4NCA2MS4yMjAxIDU0LjEwNDUgNjEuNTY2NCA1NC4xMDQ1QzYyLjAxMyA1NC4xMDQ1IDYyLjM5MTMgNTQuMDEzMyA2Mi43MDEyIDUzLjgzMTFDNjMuMDExMSA1My42NDg4IDYzLjI4MjIgNTMuNDA0OSA2My41MTQ2IDUzLjA5OTZMNjQuMjgwMyA1My43MDhDNjQuMTIwOCA1My45NDk1IDYzLjkxOCA1NC4xNzk3IDYzLjY3MTkgNTQuMzk4NEM2My40MjU4IDU0LjYxNzIgNjMuMTIyNyA1NC43OTQ5IDYyLjc2MjcgNTQuOTMxNkM2Mi40MDcyIDU1LjA2ODQgNjEuOTg1NyA1NS4xMzY3IDYxLjQ5OCA1NS4xMzY3Wk03MC41MTQ2IDUzLjU2NDVWNDQuNUg3MS43ODYxVjU1SDcwLjYyNEw3MC41MTQ2IDUzLjU2NDVaTTY1LjUzODEgNTEuMzgzOFY1MS4yNDAyQzY1LjUzODEgNTAuNjc1MSA2NS42MDY0IDUwLjE2MjQgNjUuNzQzMiA0OS43MDIxQzY1Ljg4NDQgNDkuMjM3MyA2Ni4wODI3IDQ4LjgzODUgNjYuMzM3OSA0OC41MDU5QzY2LjU5NzcgNDguMTczMiA2Ni45MDUzIDQ3LjkxOCA2Ny4yNjA3IDQ3Ljc0MDJDNjcuNjIwOCA0Ny41NTc5IDY4LjAyMTggNDcuNDY2OCA2OC40NjM5IDQ3LjQ2NjhDNjguOTI4NyA0Ny40NjY4IDY5LjMzNDMgNDcuNTQ4OCA2OS42ODA3IDQ3LjcxMjlDNzAuMDMxNiA0Ny44NzI0IDcwLjMyNzggNDguMTA3MSA3MC41NjkzIDQ4LjQxN0M3MC44MTU0IDQ4LjcyMjMgNzEuMDA5MSA0OS4wOTE1IDcxLjE1MDQgNDkuNTI0NEM3MS4yOTE3IDQ5Ljk1NzQgNzEuMzg5NiA1MC40NDczIDcxLjQ0NDMgNTAuOTk0MVY1MS42MjNDNzEuMzk0MiA1Mi4xNjU0IDcxLjI5NjIgNTIuNjUzIDcxLjE1MDQgNTMuMDg1OUM3MS4wMDkxIDUzLjUxODkgNzAuODE1NCA1My44ODggNzAuNTY5MyA1NC4xOTM0QzcwLjMyNzggNTQuNDk4NyA3MC4wMzE2IDU0LjczMzQgNjkuNjgwNyA1NC44OTc1QzY5LjMyOTggNTUuMDU3IDY4LjkxOTYgNTUuMTM2NyA2OC40NTAyIDU1LjEzNjdDNjguMDE3MyA1NS4xMzY3IDY3LjYyMDggNTUuMDQzMyA2Ny4yNjA3IDU0Ljg1NjRDNjYuOTA1MyA1NC42Njk2IDY2LjU5NzcgNTQuNDA3NiA2Ni4zMzc5IDU0LjA3MDNDNjYuMDgyNyA1My43MzMxIDY1Ljg4NDQgNTMuMzM2NiA2NS43NDMyIDUyLjg4MDlDNjUuNjA2NCA1Mi40MjA2IDY1LjUzODEgNTEuOTIxNSA2NS41MzgxIDUxLjM4MzhaTTY2LjgwOTYgNTEuMjQwMlY1MS4zODM4QzY2LjgwOTYgNTEuNzUyOSA2Ni44NDYgNTIuMDk5MyA2Ni45MTg5IDUyLjQyMjlDNjYuOTk2NCA1Mi43NDY0IDY3LjExNDkgNTMuMDMxMiA2Ny4yNzQ0IDUzLjI3NzNDNjcuNDMzOSA1My41MjM0IDY3LjYzNjcgNTMuNzE3MSA2Ny44ODI4IDUzLjg1ODRDNjguMTI4OSA1My45OTUxIDY4LjQyMjkgNTQuMDYzNSA2OC43NjQ2IDU0LjA2MzVDNjkuMTgzOSA1NC4wNjM1IDY5LjUyOCA1My45NzQ2IDY5Ljc5NjkgNTMuNzk2OUM3MC4wNzAzIDUzLjYxOTEgNzAuMjg5MSA1My4zODQ0IDcwLjQ1MzEgNTMuMDkyOEM3MC42MTcyIDUyLjgwMTEgNzAuNzQ0OCA1Mi40ODQ0IDcwLjgzNTkgNTIuMTQyNlY1MC40OTUxQzcwLjc4MTIgNTAuMjQ0NSA3MC43MDE1IDUwLjAwMjkgNzAuNTk2NyA0OS43NzA1QzcwLjQ5NjQgNDkuNTMzNSA3MC4zNjQzIDQ5LjMyMzkgNzAuMjAwMiA0OS4xNDE2QzcwLjA0MDcgNDguOTU0OCA2OS44NDI0IDQ4LjgwNjYgNjkuNjA1NSA0OC42OTczQzY5LjM3MyA0OC41ODc5IDY5LjA5NzMgNDguNTMzMiA2OC43NzgzIDQ4LjUzMzJDNjguNDMyIDQ4LjUzMzIgNjguMTMzNSA0OC42MDYxIDY3Ljg4MjggNDguNzUyQzY3LjYzNjcgNDguODkzMiA2Ny40MzM5IDQ5LjA4OTIgNjcuMjc0NCA0OS4zMzk4QzY3LjExNDkgNDkuNTg1OSA2Ni45OTY0IDQ5Ljg3MyA2Ni45MTg5IDUwLjIwMTJDNjYuODQ2IDUwLjUyNDcgNjYuODA5NiA1MC44NzExIDY2LjgwOTYgNTEuMjQwMlpNNzguNDg1NCA0OS4wNzMyVjU1SDc3LjIxMzlWNDcuNjAzNUg3OC40MTdMNzguNDg1NCA0OS4wNzMyWk03OC4yMjU2IDUxLjAyMTVMNzcuNjM3NyA1MS4wMDFDNzcuNjQyMyA1MC40OTUxIDc3LjcwODMgNTAuMDI4IDc3LjgzNTkgNDkuNTk5NkM3Ny45NjM1IDQ5LjE2NjcgNzguMTUyNyA0OC43OTA3IDc4LjQwMzMgNDguNDcxN0M3OC42NTQgNDguMTUyNyA3OC45NjYxIDQ3LjkwNjYgNzkuMzM5OCA0Ny43MzM0Qzc5LjcxMzUgNDcuNTU1NyA4MC4xNDY1IDQ3LjQ2NjggODAuNjM4NyA0Ny40NjY4QzgwLjk4NSA0Ny40NjY4IDgxLjMwNCA0Ny41MTY5IDgxLjU5NTcgNDcuNjE3MkM4MS44ODc0IDQ3LjcxMjkgODIuMTQwMyA0Ny44NjU2IDgyLjM1NDUgNDguMDc1MkM4Mi41Njg3IDQ4LjI4NDggODIuNzM1IDQ4LjU1MzcgODIuODUzNSA0OC44ODE4QzgyLjk3MiA0OS4yMSA4My4wMzEyIDQ5LjYwNjQgODMuMDMxMiA1MC4wNzEzVjU1SDgxLjc2NjZWNTAuMTMyOEM4MS43NjY2IDQ5Ljc0NTQgODEuNzAwNSA0OS40MzU1IDgxLjU2ODQgNDkuMjAzMUM4MS40NDA4IDQ4Ljk3MDcgODEuMjU4NSA0OC44MDIxIDgxLjAyMTUgNDguNjk3M0M4MC43ODQ1IDQ4LjU4NzkgODAuNTA2NSA0OC41MzMyIDgwLjE4NzUgNDguNTMzMkM3OS44MTM4IDQ4LjUzMzIgNzkuNTAxNiA0OC41OTkzIDc5LjI1MSA0OC43MzE0Qzc5LjAwMDMgNDguODYzNiA3OC43OTk4IDQ5LjA0NTkgNzguNjQ5NCA0OS4yNzgzQzc4LjQ5OSA0OS41MTA3IDc4LjM4OTYgNDkuNzc3MyA3OC4zMjEzIDUwLjA3ODFDNzguMjU3NSA1MC4zNzQzIDc4LjIyNTYgNTAuNjg4OCA3OC4yMjU2IDUxLjAyMTVaTTgzLjAxNzYgNTAuMzI0Mkw4Mi4xNjk5IDUwLjU4NEM4Mi4xNzQ1IDUwLjE3ODQgODIuMjQwNiA0OS43ODg3IDgyLjM2ODIgNDkuNDE1QzgyLjUwMDMgNDkuMDQxMyA4Mi42ODk1IDQ4LjcwODcgODIuOTM1NSA0OC40MTdDODMuMTg2MiA0OC4xMjUzIDgzLjQ5MzggNDcuODk1MiA4My44NTg0IDQ3LjcyNjZDODQuMjIzIDQ3LjU1MzQgODQuNjQgNDcuNDY2OCA4NS4xMDk0IDQ3LjQ2NjhDODUuNTA1OSA0Ny40NjY4IDg1Ljg1NjggNDcuNTE5MiA4Ni4xNjIxIDQ3LjYyNEM4Ni40NzIgNDcuNzI4OCA4Ni43MzE4IDQ3Ljg5MDYgODYuOTQxNCA0OC4xMDk0Qzg3LjE1NTYgNDguMzIzNiA4Ny4zMTc0IDQ4LjU5OTMgODcuNDI2OCA0OC45MzY1Qzg3LjUzNjEgNDkuMjczOCA4Ny41OTA4IDQ5LjY3NDggODcuNTkwOCA1MC4xMzk2VjU1SDg2LjMxOTNWNTAuMTI2Qzg2LjMxOTMgNDkuNzExMyA4Ni4yNTMzIDQ5LjM5IDg2LjEyMTEgNDkuMTYyMUM4NS45OTM1IDQ4LjkyOTcgODUuODExMiA0OC43Njc5IDg1LjU3NDIgNDguNjc2OEM4NS4zNDE4IDQ4LjU4MTEgODUuMDYzOCA0OC41MzMyIDg0Ljc0MDIgNDguNTMzMkM4NC40NjIyIDQ4LjUzMzIgODQuMjE2MSA0OC41ODExIDg0LjAwMiA0OC42NzY4QzgzLjc4NzggNDguNzcyNSA4My42MDc3IDQ4LjkwNDYgODMuNDYxOSA0OS4wNzMyQzgzLjMxNjEgNDkuMjM3MyA4My4yMDQ0IDQ5LjQyNjQgODMuMTI3IDQ5LjY0MDZDODMuMDU0IDQ5Ljg1NDggODMuMDE3NiA1MC4wODI3IDgzLjAxNzYgNTAuMzI0MlpNOTIuNTc0MiA1NS4xMzY3QzkyLjA1OTIgNTUuMTM2NyA5MS41OTIxIDU1LjA1MDEgOTEuMTcyOSA1NC44NzdDOTAuNzU4MSA1NC42OTkyIDkwLjQwMDQgNTQuNDUwOCA5MC4wOTk2IDU0LjEzMThDODkuODAzNCA1My44MTI4IDg5LjU3NTUgNTMuNDM0NiA4OS40MTYgNTIuOTk3MUM4OS4yNTY1IDUyLjU1OTYgODkuMTc2OCA1Mi4wODExIDg5LjE3NjggNTEuNTYxNVY1MS4yNzQ0Qzg5LjE3NjggNTAuNjcyOSA4OS4yNjU2IDUwLjEzNzQgODkuNDQzNCA0OS42NjhDODkuNjIxMSA0OS4xOTQgODkuODYyNiA0OC43OTMgOTAuMTY4IDQ4LjQ2NDhDOTAuNDczMyA0OC4xMzY3IDkwLjgxOTcgNDcuODg4MyA5MS4yMDcgNDcuNzE5N0M5MS41OTQ0IDQ3LjU1MTEgOTEuOTk1NCA0Ny40NjY4IDkyLjQxMDIgNDcuNDY2OEM5Mi45Mzg4IDQ3LjQ2NjggOTMuMzk0NSA0Ny41NTc5IDkzLjc3NzMgNDcuNzQwMkM5NC4xNjQ3IDQ3LjkyMjUgOTQuNDgxNCA0OC4xNzc3IDk0LjcyNzUgNDguNTA1OUM5NC45NzM2IDQ4LjgyOTQgOTUuMTU1OSA0OS4yMTIyIDk1LjI3NDQgNDkuNjU0M0M5NS4zOTI5IDUwLjA5MTggOTUuNDUyMSA1MC41NzAzIDk1LjQ1MjEgNTEuMDg5OFY1MS42NTcySDg5LjkyODdWNTAuNjI1SDk0LjE4NzVWNTAuNTI5M0M5NC4xNjkzIDUwLjIwMTIgOTQuMTAwOSA0OS44ODIyIDkzLjk4MjQgNDkuNTcyM0M5My44Njg1IDQ5LjI2MjQgOTMuNjg2MiA0OS4wMDcyIDkzLjQzNTUgNDguODA2NkM5My4xODQ5IDQ4LjYwNjEgOTIuODQzMSA0OC41MDU5IDkyLjQxMDIgNDguNTA1OUM5Mi4xMjMgNDguNTA1OSA5MS44NTg3IDQ4LjU2NzQgOTEuNjE3MiA0OC42OTA0QzkxLjM3NTcgNDguODA4OSA5MS4xNjgzIDQ4Ljk4NjcgOTAuOTk1MSA0OS4yMjM2QzkwLjgyMTkgNDkuNDYwNiA5MC42ODc1IDQ5Ljc1IDkwLjU5MTggNTAuMDkxOEM5MC40OTYxIDUwLjQzMzYgOTAuNDQ4MiA1MC44Mjc4IDkwLjQ0ODIgNTEuMjc0NFY1MS41NjE1QzkwLjQ0ODIgNTEuOTEyNCA5MC40OTYxIDUyLjI0MjggOTAuNTkxOCA1Mi41NTI3QzkwLjY5MjEgNTIuODU4MSA5MC44MzU2IDUzLjEyNyA5MS4wMjI1IDUzLjM1OTRDOTEuMjEzOSA1My41OTE4IDkxLjQ0NCA1My43NzQxIDkxLjcxMjkgNTMuOTA2MkM5MS45ODYzIDU0LjAzODQgOTIuMjk2MiA1NC4xMDQ1IDkyLjY0MjYgNTQuMTA0NUM5My4wODkyIDU0LjEwNDUgOTMuNDY3NCA1NC4wMTMzIDkzLjc3NzMgNTMuODMxMUM5NC4wODcyIDUzLjY0ODggOTQuMzU4NCA1My40MDQ5IDk0LjU5MDggNTMuMDk5Nkw5NS4zNTY0IDUzLjcwOEM5NS4xOTY5IDUzLjk0OTUgOTQuOTk0MSA1NC4xNzk3IDk0Ljc0OCA1NC4zOTg0Qzk0LjUwMiA1NC42MTcyIDk0LjE5ODkgNTQuNzk0OSA5My44Mzg5IDU0LjkzMTZDOTMuNDgzNCA1NS4wNjg0IDkzLjA2MTggNTUuMTM2NyA5Mi41NzQyIDU1LjEzNjdaTTEwMC4wMjUgNDcuNjAzNVY0OC41NzQySDk2LjAyNjRWNDcuNjAzNUgxMDAuMDI1Wk05Ny4zNzk5IDQ1LjgwNTdIOTguNjQ0NVY1My4xNjhDOTguNjQ0NSA1My40MTg2IDk4LjY4MzMgNTMuNjA3NyA5OC43NjA3IDUzLjczNTRDOTguODM4MiA1My44NjMgOTguOTM4NSA1My45NDczIDk5LjA2MTUgNTMuOTg4M0M5OS4xODQ2IDU0LjAyOTMgOTkuMzE2NyA1NC4wNDk4IDk5LjQ1OCA1NC4wNDk4Qzk5LjU2MjggNTQuMDQ5OCA5OS42NzIyIDU0LjA0MDcgOTkuNzg2MSA1NC4wMjI1Qzk5LjkwNDYgNTMuOTk5NyA5OS45OTM1IDUzLjk4MTQgMTAwLjA1MyA1My45Njc4TDEwMC4wNiA1NUM5OS45NTkzIDU1LjAzMTkgOTkuODI3MSA1NS4wNjE1IDk5LjY2MzEgNTUuMDg4OUM5OS41MDM2IDU1LjEyMDggOTkuMzA5OSA1NS4xMzY3IDk5LjA4MiA1NS4xMzY3Qzk4Ljc3MjEgNTUuMTM2NyA5OC40ODczIDU1LjA3NTIgOTguMjI3NSA1NC45NTIxQzk3Ljk2NzggNTQuODI5MSA5Ny43NjA0IDU0LjYyNCA5Ny42MDU1IDU0LjMzNjlDOTcuNDU1MSA1NC4wNDUyIDk3LjM3OTkgNTMuNjUzMyA5Ny4zNzk5IDUzLjE2MTFWNDUuODA1N1pNMTAyLjc3MyA0NC41VjU1SDEwMS41MDlWNDQuNUgxMDIuNzczWk0xMDIuNDczIDUxLjAyMTVMMTAxLjk0NiA1MS4wMDFDMTAxLjk1MSA1MC40OTUxIDEwMi4wMjYgNTAuMDI4IDEwMi4xNzIgNDkuNTk5NkMxMDIuMzE4IDQ5LjE2NjcgMTAyLjUyMyA0OC43OTA3IDEwMi43ODcgNDguNDcxN0MxMDMuMDUxIDQ4LjE1MjcgMTAzLjM2NiA0Ny45MDY2IDEwMy43MyA0Ny43MzM0QzEwNC4xIDQ3LjU1NTcgMTA0LjUwNyA0Ny40NjY4IDEwNC45NTQgNDcuNDY2OEMxMDUuMzE5IDQ3LjQ2NjggMTA1LjY0NyA0Ny41MTY5IDEwNS45MzggNDcuNjE3MkMxMDYuMjMgNDcuNzEyOSAxMDYuNDc5IDQ3Ljg2NzggMTA2LjY4NCA0OC4wODJDMTA2Ljg5MyA0OC4yOTYyIDEwNy4wNTMgNDguNTc0MiAxMDcuMTYyIDQ4LjkxNkMxMDcuMjcxIDQ5LjI1MzMgMTA3LjMyNiA0OS42NjU3IDEwNy4zMjYgNTAuMTUzM1Y1NUgxMDYuMDU1VjUwLjEzOTZDMTA2LjA1NSA0OS43NTIzIDEwNS45OTggNDkuNDQyNCAxMDUuODg0IDQ5LjIxQzEwNS43NyA0OC45NzMgMTA1LjYwNCA0OC44MDIxIDEwNS4zODUgNDguNjk3M0MxMDUuMTY2IDQ4LjU4NzkgMTA0Ljg5NyA0OC41MzMyIDEwNC41NzggNDguNTMzMkMxMDQuMjY0IDQ4LjUzMzIgMTAzLjk3NyA0OC41OTkzIDEwMy43MTcgNDguNzMxNEMxMDMuNDYyIDQ4Ljg2MzYgMTAzLjI0MSA0OS4wNDU5IDEwMy4wNTQgNDkuMjc4M0MxMDIuODcxIDQ5LjUxMDcgMTAyLjcyOCA0OS43NzczIDEwMi42MjMgNTAuMDc4MUMxMDIuNTIzIDUwLjM3NDMgMTAyLjQ3MyA1MC42ODg4IDEwMi40NzMgNTEuMDIxNVpNMTA4Ljg4NSA1MS4zODM4VjUxLjIyNjZDMTA4Ljg4NSA1MC42OTM0IDEwOC45NjIgNTAuMTk4OSAxMDkuMTE3IDQ5Ljc0MzJDMTA5LjI3MiA0OS4yODI5IDEwOS40OTUgNDguODg0MSAxMDkuNzg3IDQ4LjU0NjlDMTEwLjA3OSA0OC4yMDUxIDExMC40MzIgNDcuOTQwOCAxMTAuODQ3IDQ3Ljc1MzlDMTExLjI2MSA0Ny41NjI1IDExMS43MjYgNDcuNDY2OCAxMTIuMjQxIDQ3LjQ2NjhDMTEyLjc2MSA0Ny40NjY4IDExMy4yMjggNDcuNTYyNSAxMTMuNjQzIDQ3Ljc1MzlDMTE0LjA2MiA0Ny45NDA4IDExNC40MTcgNDguMjA1MSAxMTQuNzA5IDQ4LjU0NjlDMTE1LjAwNSA0OC44ODQxIDExNS4yMzEgNDkuMjgyOSAxMTUuMzg2IDQ5Ljc0MzJDMTE1LjU0MSA1MC4xOTg5IDExNS42MTggNTAuNjkzNCAxMTUuNjE4IDUxLjIyNjZWNTEuMzgzOEMxMTUuNjE4IDUxLjkxNyAxMTUuNTQxIDUyLjQxMTUgMTE1LjM4NiA1Mi44NjcyQzExNS4yMzEgNTMuMzIyOSAxMTUuMDA1IDUzLjcyMTcgMTE0LjcwOSA1NC4wNjM1QzExNC40MTcgNTQuNDAwNyAxMTQuMDY0IDU0LjY2NSAxMTMuNjQ5IDU0Ljg1NjRDMTEzLjIzOSA1NS4wNDMzIDExMi43NzQgNTUuMTM2NyAxMTIuMjU1IDU1LjEzNjdDMTExLjczNSA1NS4xMzY3IDExMS4yNjggNTUuMDQzMyAxMTAuODU0IDU0Ljg1NjRDMTEwLjQzOSA1NC42NjUgMTEwLjA4MyA1NC40MDA3IDEwOS43ODcgNTQuMDYzNUMxMDkuNDk1IDUzLjcyMTcgMTA5LjI3MiA1My4zMjI5IDEwOS4xMTcgNTIuODY3MkMxMDguOTYyIDUyLjQxMTUgMTA4Ljg4NSA1MS45MTcgMTA4Ljg4NSA1MS4zODM4Wk0xMTAuMTQ5IDUxLjIyNjZWNTEuMzgzOEMxMTAuMTQ5IDUxLjc1MjkgMTEwLjE5MyA1Mi4xMDE2IDExMC4yNzkgNTIuNDI5N0MxMTAuMzY2IDUyLjc1MzMgMTEwLjQ5NiA1My4wNDA0IDExMC42NjkgNTMuMjkxQzExMC44NDcgNTMuNTQxNyAxMTEuMDY4IDUzLjczOTkgMTExLjMzMiA1My44ODU3QzExMS41OTYgNTQuMDI3IDExMS45MDQgNTQuMDk3NyAxMTIuMjU1IDU0LjA5NzdDMTEyLjYwMSA1NC4wOTc3IDExMi45MDQgNTQuMDI3IDExMy4xNjQgNTMuODg1N0MxMTMuNDI4IDUzLjczOTkgMTEzLjY0NyA1My41NDE3IDExMy44MiA1My4yOTFDMTEzLjk5MyA1My4wNDA0IDExNC4xMjMgNTIuNzUzMyAxMTQuMjEgNTIuNDI5N0MxMTQuMzAxIDUyLjEwMTYgMTE0LjM0NyA1MS43NTI5IDExNC4zNDcgNTEuMzgzOFY1MS4yMjY2QzExNC4zNDcgNTAuODYyIDExNC4zMDEgNTAuNTE3OSAxMTQuMjEgNTAuMTk0M0MxMTQuMTIzIDQ5Ljg2NjIgMTEzLjk5MSA0OS41NzY4IDExMy44MTMgNDkuMzI2MkMxMTMuNjQgNDkuMDcxIDExMy40MjIgNDguODcwNCAxMTMuMTU3IDQ4LjcyNDZDMTEyLjg5NyA0OC41Nzg4IDExMi41OTIgNDguNTA1OSAxMTIuMjQxIDQ4LjUwNTlDMTExLjg5NSA0OC41MDU5IDExMS41OSA0OC41Nzg4IDExMS4zMjUgNDguNzI0NkMxMTEuMDY1IDQ4Ljg3MDQgMTEwLjg0NyA0OS4wNzEgMTEwLjY2OSA0OS4zMjYyQzExMC40OTYgNDkuNTc2OCAxMTAuMzY2IDQ5Ljg2NjIgMTEwLjI3OSA1MC4xOTQzQzExMC4xOTMgNTAuNTE3OSAxMTAuMTQ5IDUwLjg2MiAxMTAuMTQ5IDUxLjIyNjZaTTEyMS44NjYgNTMuNTY0NVY0NC41SDEyMy4xMzhWNTVIMTIxLjk3NkwxMjEuODY2IDUzLjU2NDVaTTExNi44OSA1MS4zODM4VjUxLjI0MDJDMTE2Ljg5IDUwLjY3NTEgMTE2Ljk1OCA1MC4xNjI0IDExNy4wOTUgNDkuNzAyMUMxMTcuMjM2IDQ5LjIzNzMgMTE3LjQzNCA0OC44Mzg1IDExNy42ODkgNDguNTA1OUMxMTcuOTQ5IDQ4LjE3MzIgMTE4LjI1NyA0Ny45MTggMTE4LjYxMiA0Ny43NDAyQzExOC45NzIgNDcuNTU3OSAxMTkuMzczIDQ3LjQ2NjggMTE5LjgxNSA0Ny40NjY4QzEyMC4yOCA0Ny40NjY4IDEyMC42ODYgNDcuNTQ4OCAxMjEuMDMyIDQ3LjcxMjlDMTIxLjM4MyA0Ny44NzI0IDEyMS42NzkgNDguMTA3MSAxMjEuOTIxIDQ4LjQxN0MxMjIuMTY3IDQ4LjcyMjMgMTIyLjM2MSA0OS4wOTE1IDEyMi41MDIgNDkuNTI0NEMxMjIuNjQzIDQ5Ljk1NzQgMTIyLjc0MSA1MC40NDczIDEyMi43OTYgNTAuOTk0MVY1MS42MjNDMTIyLjc0NiA1Mi4xNjU0IDEyMi42NDggNTIuNjUzIDEyMi41MDIgNTMuMDg1OUMxMjIuMzYxIDUzLjUxODkgMTIyLjE2NyA1My44ODggMTIxLjkyMSA1NC4xOTM0QzEyMS42NzkgNTQuNDk4NyAxMjEuMzgzIDU0LjczMzQgMTIxLjAzMiA1NC44OTc1QzEyMC42ODEgNTUuMDU3IDEyMC4yNzEgNTUuMTM2NyAxMTkuODAyIDU1LjEzNjdDMTE5LjM2OSA1NS4xMzY3IDExOC45NzIgNTUuMDQzMyAxMTguNjEyIDU0Ljg1NjRDMTE4LjI1NyA1NC42Njk2IDExNy45NDkgNTQuNDA3NiAxMTcuNjg5IDU0LjA3MDNDMTE3LjQzNCA1My43MzMxIDExNy4yMzYgNTMuMzM2NiAxMTcuMDk1IDUyLjg4MDlDMTE2Ljk1OCA1Mi40MjA2IDExNi44OSA1MS45MjE1IDExNi44OSA1MS4zODM4Wk0xMTguMTYxIDUxLjI0MDJWNTEuMzgzOEMxMTguMTYxIDUxLjc1MjkgMTE4LjE5OCA1Mi4wOTkzIDExOC4yNzEgNTIuNDIyOUMxMTguMzQ4IDUyLjc0NjQgMTE4LjQ2NiA1My4wMzEyIDExOC42MjYgNTMuMjc3M0MxMTguNzg1IDUzLjUyMzQgMTE4Ljk4OCA1My43MTcxIDExOS4yMzQgNTMuODU4NEMxMTkuNDggNTMuOTk1MSAxMTkuNzc0IDU0LjA2MzUgMTIwLjExNiA1NC4wNjM1QzEyMC41MzUgNTQuMDYzNSAxMjAuODggNTMuOTc0NiAxMjEuMTQ4IDUzLjc5NjlDMTIxLjQyMiA1My42MTkxIDEyMS42NDEgNTMuMzg0NCAxMjEuODA1IDUzLjA5MjhDMTIxLjk2OSA1Mi44MDExIDEyMi4wOTYgNTIuNDg0NCAxMjIuMTg4IDUyLjE0MjZWNTAuNDk1MUMxMjIuMTMzIDUwLjI0NDUgMTIyLjA1MyA1MC4wMDI5IDEyMS45NDggNDkuNzcwNUMxMjEuODQ4IDQ5LjUzMzUgMTIxLjcxNiA0OS4zMjM5IDEyMS41NTIgNDkuMTQxNkMxMjEuMzkyIDQ4Ljk1NDggMTIxLjE5NCA0OC44MDY2IDEyMC45NTcgNDguNjk3M0MxMjAuNzI1IDQ4LjU4NzkgMTIwLjQ0OSA0OC41MzMyIDEyMC4xMyA0OC41MzMyQzExOS43ODQgNDguNTMzMiAxMTkuNDg1IDQ4LjYwNjEgMTE5LjIzNCA0OC43NTJDMTE4Ljk4OCA0OC44OTMyIDExOC43ODUgNDkuMDg5MiAxMTguNjI2IDQ5LjMzOThDMTE4LjQ2NiA0OS41ODU5IDExOC4zNDggNDkuODczIDExOC4yNzEgNTAuMjAxMkMxMTguMTk4IDUwLjUyNDcgMTE4LjE2MSA1MC44NzExIDExOC4xNjEgNTEuMjQwMlpNMTI4LjI0NCA1MS4zODM4VjUxLjIyNjZDMTI4LjI0NCA1MC42OTM0IDEyOC4zMjIgNTAuMTk4OSAxMjguNDc3IDQ5Ljc0MzJDMTI4LjYzMiA0OS4yODI5IDEyOC44NTUgNDguODg0MSAxMjkuMTQ2IDQ4LjU0NjlDMTI5LjQzOCA0OC4yMDUxIDEyOS43OTEgNDcuOTQwOCAxMzAuMjA2IDQ3Ljc1MzlDMTMwLjYyMSA0Ny41NjI1IDEzMS4wODYgNDcuNDY2OCAxMzEuNjAxIDQ3LjQ2NjhDMTMyLjEyIDQ3LjQ2NjggMTMyLjU4NyA0Ny41NjI1IDEzMy4wMDIgNDcuNzUzOUMxMzMuNDIxIDQ3Ljk0MDggMTMzLjc3NyA0OC4yMDUxIDEzNC4wNjggNDguNTQ2OUMxMzQuMzY1IDQ4Ljg4NDEgMTM0LjU5IDQ5LjI4MjkgMTM0Ljc0NSA0OS43NDMyQzEzNC45IDUwLjE5ODkgMTM0Ljk3OCA1MC42OTM0IDEzNC45NzggNTEuMjI2NlY1MS4zODM4QzEzNC45NzggNTEuOTE3IDEzNC45IDUyLjQxMTUgMTM0Ljc0NSA1Mi44NjcyQzEzNC41OSA1My4zMjI5IDEzNC4zNjUgNTMuNzIxNyAxMzQuMDY4IDU0LjA2MzVDMTMzLjc3NyA1NC40MDA3IDEzMy40MjQgNTQuNjY1IDEzMy4wMDkgNTQuODU2NEMxMzIuNTk5IDU1LjA0MzMgMTMyLjEzNCA1NS4xMzY3IDEzMS42MTQgNTUuMTM2N0MxMzEuMDk1IDU1LjEzNjcgMTMwLjYyOCA1NS4wNDMzIDEzMC4yMTMgNTQuODU2NEMxMjkuNzk4IDU0LjY2NSAxMjkuNDQzIDU0LjQwMDcgMTI5LjE0NiA1NC4wNjM1QzEyOC44NTUgNTMuNzIxNyAxMjguNjMyIDUzLjMyMjkgMTI4LjQ3NyA1Mi44NjcyQzEyOC4zMjIgNTIuNDExNSAxMjguMjQ0IDUxLjkxNyAxMjguMjQ0IDUxLjM4MzhaTTEyOS41MDkgNTEuMjI2NlY1MS4zODM4QzEyOS41MDkgNTEuNzUyOSAxMjkuNTUyIDUyLjEwMTYgMTI5LjYzOSA1Mi40Mjk3QzEyOS43MjUgNTIuNzUzMyAxMjkuODU1IDUzLjA0MDQgMTMwLjAyOCA1My4yOTFDMTMwLjIwNiA1My41NDE3IDEzMC40MjcgNTMuNzM5OSAxMzAuNjkxIDUzLjg4NTdDMTMwLjk1NiA1NC4wMjcgMTMxLjI2MyA1NC4wOTc3IDEzMS42MTQgNTQuMDk3N0MxMzEuOTYxIDU0LjA5NzcgMTMyLjI2NCA1NC4wMjcgMTMyLjUyMyA1My44ODU3QzEzMi43ODggNTMuNzM5OSAxMzMuMDA3IDUzLjU0MTcgMTMzLjE4IDUzLjI5MUMxMzMuMzUzIDUzLjA0MDQgMTMzLjQ4MyA1Mi43NTMzIDEzMy41NjkgNTIuNDI5N0MxMzMuNjYgNTIuMTAxNiAxMzMuNzA2IDUxLjc1MjkgMTMzLjcwNiA1MS4zODM4VjUxLjIyNjZDMTMzLjcwNiA1MC44NjIgMTMzLjY2IDUwLjUxNzkgMTMzLjU2OSA1MC4xOTQzQzEzMy40ODMgNDkuODY2MiAxMzMuMzUxIDQ5LjU3NjggMTMzLjE3MyA0OS4zMjYyQzEzMyA0OS4wNzEgMTMyLjc4MSA0OC44NzA0IDEzMi41MTcgNDguNzI0NkMxMzIuMjU3IDQ4LjU3ODggMTMxLjk1MSA0OC41MDU5IDEzMS42MDEgNDguNTA1OUMxMzEuMjU0IDQ4LjUwNTkgMTMwLjk0OSA0OC41Nzg4IDEzMC42ODUgNDguNzI0NkMxMzAuNDI1IDQ4Ljg3MDQgMTMwLjIwNiA0OS4wNzEgMTMwLjAyOCA0OS4zMjYyQzEyOS44NTUgNDkuNTc2OCAxMjkuNzI1IDQ5Ljg2NjIgMTI5LjYzOSA1MC4xOTQzQzEyOS41NTIgNTAuNTE3OSAxMjkuNTA5IDUwLjg2MiAxMjkuNTA5IDUxLjIyNjZaTTEzOC40NSA1NUgxMzcuMTg2VjQ2LjgyNDJDMTM3LjE4NiA0Ni4yOTEgMTM3LjI4MSA0NS44NDIxIDEzNy40NzMgNDUuNDc3NUMxMzcuNjY5IDQ1LjEwODQgMTM3Ljk0OSA0NC44MzA0IDEzOC4zMTMgNDQuNjQzNkMxMzguNjc4IDQ0LjQ1MjEgMTM5LjExMSA0NC4zNTY0IDEzOS42MTIgNDQuMzU2NEMxMzkuNzU4IDQ0LjM1NjQgMTM5LjkwNCA0NC4zNjU2IDE0MC4wNSA0NC4zODM4QzE0MC4yIDQ0LjQwMiAxNDAuMzQ2IDQ0LjQyOTQgMTQwLjQ4NyA0NC40NjU4TDE0MC40MTkgNDUuNDk4QzE0MC4zMjMgNDUuNDc1MyAxNDAuMjE0IDQ1LjQ1OTMgMTQwLjA5MSA0NS40NTAyQzEzOS45NzIgNDUuNDQxMSAxMzkuODU0IDQ1LjQzNjUgMTM5LjczNSA0NS40MzY1QzEzOS40NjYgNDUuNDM2NSAxMzkuMjM0IDQ1LjQ5MTIgMTM5LjAzOCA0NS42MDA2QzEzOC44NDcgNDUuNzA1NCAxMzguNzAxIDQ1Ljg2MDQgMTM4LjYwMSA0Ni4wNjU0QzEzOC41IDQ2LjI3MDUgMTM4LjQ1IDQ2LjUyMzQgMTM4LjQ1IDQ2LjgyNDJWNTVaTTE0MC4wMjIgNDcuNjAzNVY0OC41NzQySDEzNi4wMTdWNDcuNjAzNUgxNDAuMDIyWk0xNDcuODYzIDU0LjA5NzdDMTQ4LjE2NCA1NC4wOTc3IDE0OC40NDIgNTQuMDM2MSAxNDguNjk3IDUzLjkxMzFDMTQ4Ljk1MiA1My43OSAxNDkuMTYyIDUzLjYyMTQgMTQ5LjMyNiA1My40MDcyQzE0OS40OSA1My4xODg1IDE0OS41ODQgNTIuOTQwMSAxNDkuNjA2IDUyLjY2MjFIMTUwLjgxQzE1MC43ODcgNTMuMDk5NiAxNTAuNjM5IDUzLjUwNzUgMTUwLjM2NSA1My44ODU3QzE1MC4wOTYgNTQuMjU5NCAxNDkuNzQzIDU0LjU2MjUgMTQ5LjMwNiA1NC43OTQ5QzE0OC44NjggNTUuMDIyOCAxNDguMzg3IDU1LjEzNjcgMTQ3Ljg2MyA1NS4xMzY3QzE0Ny4zMDcgNTUuMTM2NyAxNDYuODIyIDU1LjAzODcgMTQ2LjQwNyA1NC44NDI4QzE0NS45OTcgNTQuNjQ2OCAxNDUuNjU1IDU0LjM3NzkgMTQ1LjM4MiA1NC4wMzYxQzE0NS4xMTMgNTMuNjk0MyAxNDQuOTEgNTMuMzAyNCAxNDQuNzczIDUyLjg2MDRDMTQ0LjY0MSA1Mi40MTM3IDE0NC41NzUgNTEuOTQyMSAxNDQuNTc1IDUxLjQ0NTNWNTEuMTU4MkMxNDQuNTc1IDUwLjY2MTUgMTQ0LjY0MSA1MC4xOTIxIDE0NC43NzMgNDkuNzVDMTQ0LjkxIDQ5LjMwMzQgMTQ1LjExMyA0OC45MDkyIDE0NS4zODIgNDguNTY3NEMxNDUuNjU1IDQ4LjIyNTYgMTQ1Ljk5NyA0Ny45NTY3IDE0Ni40MDcgNDcuNzYwN0MxNDYuODIyIDQ3LjU2NDggMTQ3LjMwNyA0Ny40NjY4IDE0Ny44NjMgNDcuNDY2OEMxNDguNDQyIDQ3LjQ2NjggMTQ4Ljk0OCA0Ny41ODUzIDE0OS4zODEgNDcuODIyM0MxNDkuODE0IDQ4LjA1NDcgMTUwLjE1MyA0OC4zNzM3IDE1MC4zOTkgNDguNzc5M0MxNTAuNjUgNDkuMTgwMyAxNTAuNzg3IDQ5LjYzNjEgMTUwLjgxIDUwLjE0NjVIMTQ5LjYwNkMxNDkuNTg0IDQ5Ljg0MTEgMTQ5LjQ5NyA0OS41NjU0IDE0OS4zNDcgNDkuMzE5M0MxNDkuMjAxIDQ5LjA3MzIgMTQ5IDQ4Ljg3NzMgMTQ4Ljc0NSA0OC43MzE0QzE0OC40OTQgNDguNTgxMSAxNDguMjAxIDQ4LjUwNTkgMTQ3Ljg2MyA0OC41MDU5QzE0Ny40NzYgNDguNTA1OSAxNDcuMTUgNDguNTgzMyAxNDYuODg2IDQ4LjczODNDMTQ2LjYyNiA0OC44ODg3IDE0Ni40MTkgNDkuMDkzOCAxNDYuMjY0IDQ5LjM1MzVDMTQ2LjExMyA0OS42MDg3IDE0Ni4wMDQgNDkuODkzNiAxNDUuOTM2IDUwLjIwOEMxNDUuODcyIDUwLjUxNzkgMTQ1Ljg0IDUwLjgzNDYgMTQ1Ljg0IDUxLjE1ODJWNTEuNDQ1M0MxNDUuODQgNTEuNzY4OSAxNDUuODcyIDUyLjA4NzkgMTQ1LjkzNiA1Mi40MDIzQzE0NS45OTkgNTIuNzE2OCAxNDYuMTA2IDUzLjAwMTYgMTQ2LjI1NyA1My4yNTY4QzE0Ni40MTIgNTMuNTEyIDE0Ni42MTkgNTMuNzE3MSAxNDYuODc5IDUzLjg3MjFDMTQ3LjE0MyA1NC4wMjI1IDE0Ny40NzEgNTQuMDk3NyAxNDcuODYzIDU0LjA5NzdaTTE1MS44OTYgNTEuMzgzOFY1MS4yMjY2QzE1MS44OTYgNTAuNjkzNCAxNTEuOTc0IDUwLjE5ODkgMTUyLjEyOSA0OS43NDMyQzE1Mi4yODQgNDkuMjgyOSAxNTIuNTA3IDQ4Ljg4NDEgMTUyLjc5OSA0OC41NDY5QzE1My4wOSA0OC4yMDUxIDE1My40NDQgNDcuOTQwOCAxNTMuODU4IDQ3Ljc1MzlDMTU0LjI3MyA0Ny41NjI1IDE1NC43MzggNDcuNDY2OCAxNTUuMjUzIDQ3LjQ2NjhDMTU1Ljc3MiA0Ny40NjY4IDE1Ni4yNCA0Ny41NjI1IDE1Ni42NTQgNDcuNzUzOUMxNTcuMDc0IDQ3Ljk0MDggMTU3LjQyOSA0OC4yMDUxIDE1Ny43MjEgNDguNTQ2OUMxNTguMDE3IDQ4Ljg4NDEgMTU4LjI0MyA0OS4yODI5IDE1OC4zOTcgNDkuNzQzMkMxNTguNTUyIDUwLjE5ODkgMTU4LjYzIDUwLjY5MzQgMTU4LjYzIDUxLjIyNjZWNTEuMzgzOEMxNTguNjMgNTEuOTE3IDE1OC41NTIgNTIuNDExNSAxNTguMzk3IDUyLjg2NzJDMTU4LjI0MyA1My4zMjI5IDE1OC4wMTcgNTMuNzIxNyAxNTcuNzIxIDU0LjA2MzVDMTU3LjQyOSA1NC40MDA3IDE1Ny4wNzYgNTQuNjY1IDE1Ni42NjEgNTQuODU2NEMxNTYuMjUxIDU1LjA0MzMgMTU1Ljc4NiA1NS4xMzY3IDE1NS4yNjcgNTUuMTM2N0MxNTQuNzQ3IDU1LjEzNjcgMTU0LjI4IDU1LjA0MzMgMTUzLjg2NSA1NC44NTY0QzE1My40NTEgNTQuNjY1IDE1My4wOTUgNTQuNDAwNyAxNTIuNzk5IDU0LjA2MzVDMTUyLjUwNyA1My43MjE3IDE1Mi4yODQgNTMuMzIyOSAxNTIuMTI5IDUyLjg2NzJDMTUxLjk3NCA1Mi40MTE1IDE1MS44OTYgNTEuOTE3IDE1MS44OTYgNTEuMzgzOFpNMTUzLjE2MSA1MS4yMjY2VjUxLjM4MzhDMTUzLjE2MSA1MS43NTI5IDE1My4yMDQgNTIuMTAxNiAxNTMuMjkxIDUyLjQyOTdDMTUzLjM3OCA1Mi43NTMzIDE1My41MDcgNTMuMDQwNCAxNTMuNjgxIDUzLjI5MUMxNTMuODU4IDUzLjU0MTcgMTU0LjA3OSA1My43Mzk5IDE1NC4zNDQgNTMuODg1N0MxNTQuNjA4IDU0LjAyNyAxNTQuOTE2IDU0LjA5NzcgMTU1LjI2NyA1NC4wOTc3QzE1NS42MTMgNTQuMDk3NyAxNTUuOTE2IDU0LjAyNyAxNTYuMTc2IDUzLjg4NTdDMTU2LjQ0IDUzLjczOTkgMTU2LjY1OSA1My41NDE3IDE1Ni44MzIgNTMuMjkxQzE1Ny4wMDUgNTMuMDQwNCAxNTcuMTM1IDUyLjc1MzMgMTU3LjIyMiA1Mi40Mjk3QzE1Ny4zMTMgNTIuMTAxNiAxNTcuMzU4IDUxLjc1MjkgMTU3LjM1OCA1MS4zODM4VjUxLjIyNjZDMTU3LjM1OCA1MC44NjIgMTU3LjMxMyA1MC41MTc5IDE1Ny4yMjIgNTAuMTk0M0MxNTcuMTM1IDQ5Ljg2NjIgMTU3LjAwMyA0OS41NzY4IDE1Ni44MjUgNDkuMzI2MkMxNTYuNjUyIDQ5LjA3MSAxNTYuNDMzIDQ4Ljg3MDQgMTU2LjE2OSA0OC43MjQ2QzE1NS45MDkgNDguNTc4OCAxNTUuNjA0IDQ4LjUwNTkgMTU1LjI1MyA0OC41MDU5QzE1NC45MDcgNDguNTA1OSAxNTQuNjAxIDQ4LjU3ODggMTU0LjMzNyA0OC43MjQ2QzE1NC4wNzcgNDguODcwNCAxNTMuODU4IDQ5LjA3MSAxNTMuNjgxIDQ5LjMyNjJDMTUzLjUwNyA0OS41NzY4IDE1My4zNzggNDkuODY2MiAxNTMuMjkxIDUwLjE5NDNDMTUzLjIwNCA1MC41MTc5IDE1My4xNjEgNTAuODYyIDE1My4xNjEgNTEuMjI2NlpNMTYxLjQ3NCA0OS4wNzMyVjU1SDE2MC4yMDJWNDcuNjAzNUgxNjEuNDA1TDE2MS40NzQgNDkuMDczMlpNMTYxLjIxNCA1MS4wMjE1TDE2MC42MjYgNTEuMDAxQzE2MC42MzEgNTAuNDk1MSAxNjAuNjk3IDUwLjAyOCAxNjAuODI0IDQ5LjU5OTZDMTYwLjk1MiA0OS4xNjY3IDE2MS4xNDEgNDguNzkwNyAxNjEuMzkyIDQ4LjQ3MTdDMTYxLjY0MiA0OC4xNTI3IDE2MS45NTQgNDcuOTA2NiAxNjIuMzI4IDQ3LjczMzRDMTYyLjcwMiA0Ny41NTU3IDE2My4xMzUgNDcuNDY2OCAxNjMuNjI3IDQ3LjQ2NjhDMTYzLjk3MyA0Ny40NjY4IDE2NC4yOTIgNDcuNTE2OSAxNjQuNTg0IDQ3LjYxNzJDMTY0Ljg3NiA0Ny43MTI5IDE2NS4xMjkgNDcuODY1NiAxNjUuMzQzIDQ4LjA3NTJDMTY1LjU1NyA0OC4yODQ4IDE2NS43MjMgNDguNTUzNyAxNjUuODQyIDQ4Ljg4MThDMTY1Ljk2IDQ5LjIxIDE2Ni4wMiA0OS42MDY0IDE2Ni4wMiA1MC4wNzEzVjU1SDE2NC43NTVWNTAuMTMyOEMxNjQuNzU1IDQ5Ljc0NTQgMTY0LjY4OSA0OS40MzU1IDE2NC41NTcgNDkuMjAzMUMxNjQuNDI5IDQ4Ljk3MDcgMTY0LjI0NyA0OC44MDIxIDE2NC4wMSA0OC42OTczQzE2My43NzMgNDguNTg3OSAxNjMuNDk1IDQ4LjUzMzIgMTYzLjE3NiA0OC41MzMyQzE2Mi44MDIgNDguNTMzMiAxNjIuNDkgNDguNTk5MyAxNjIuMjM5IDQ4LjczMTRDMTYxLjk4OSA0OC44NjM2IDE2MS43ODggNDkuMDQ1OSAxNjEuNjM4IDQ5LjI3ODNDMTYxLjQ4NyA0OS41MTA3IDE2MS4zNzggNDkuNzc3MyAxNjEuMzEgNTAuMDc4MUMxNjEuMjQ2IDUwLjM3NDMgMTYxLjIxNCA1MC42ODg4IDE2MS4yMTQgNTEuMDIxNVpNMTY2LjAwNiA1MC4zMjQyTDE2NS4xNTggNTAuNTg0QzE2NS4xNjMgNTAuMTc4NCAxNjUuMjI5IDQ5Ljc4ODcgMTY1LjM1NiA0OS40MTVDMTY1LjQ4OSA0OS4wNDEzIDE2NS42NzggNDguNzA4NyAxNjUuOTI0IDQ4LjQxN0MxNjYuMTc0IDQ4LjEyNTMgMTY2LjQ4MiA0Ny44OTUyIDE2Ni44NDcgNDcuNzI2NkMxNjcuMjExIDQ3LjU1MzQgMTY3LjYyOCA0Ny40NjY4IDE2OC4wOTggNDcuNDY2OEMxNjguNDk0IDQ3LjQ2NjggMTY4Ljg0NSA0Ny41MTkyIDE2OS4xNSA0Ny42MjRDMTY5LjQ2IDQ3LjcyODggMTY5LjcyIDQ3Ljg5MDYgMTY5LjkzIDQ4LjEwOTRDMTcwLjE0NCA0OC4zMjM2IDE3MC4zMDYgNDguNTk5MyAxNzAuNDE1IDQ4LjkzNjVDMTcwLjUyNCA0OS4yNzM4IDE3MC41NzkgNDkuNjc0OCAxNzAuNTc5IDUwLjEzOTZWNTVIMTY5LjMwOFY1MC4xMjZDMTY5LjMwOCA0OS43MTEzIDE2OS4yNDIgNDkuMzkgMTY5LjEwOSA0OS4xNjIxQzE2OC45ODIgNDguOTI5NyAxNjguNzk5IDQ4Ljc2NzkgMTY4LjU2MiA0OC42NzY4QzE2OC4zMyA0OC41ODExIDE2OC4wNTIgNDguNTMzMiAxNjcuNzI5IDQ4LjUzMzJDMTY3LjQ1MSA0OC41MzMyIDE2Ny4yMDQgNDguNTgxMSAxNjYuOTkgNDguNjc2OEMxNjYuNzc2IDQ4Ljc3MjUgMTY2LjU5NiA0OC45MDQ2IDE2Ni40NSA0OS4wNzMyQzE2Ni4zMDQgNDkuMjM3MyAxNjYuMTkzIDQ5LjQyNjQgMTY2LjExNSA0OS42NDA2QzE2Ni4wNDIgNDkuODU0OCAxNjYuMDA2IDUwLjA4MjcgMTY2LjAwNiA1MC4zMjQyWk0xNzMuNzUxIDQ5LjA3MzJWNTVIMTcyLjQ3OVY0Ny42MDM1SDE3My42ODNMMTczLjc1MSA0OS4wNzMyWk0xNzMuNDkxIDUxLjAyMTVMMTcyLjkwMyA1MS4wMDFDMTcyLjkwOCA1MC40OTUxIDE3Mi45NzQgNTAuMDI4IDE3My4xMDIgNDkuNTk5NkMxNzMuMjI5IDQ5LjE2NjcgMTczLjQxOCA0OC43OTA3IDE3My42NjkgNDguNDcxN0MxNzMuOTIgNDguMTUyNyAxNzQuMjMyIDQ3LjkwNjYgMTc0LjYwNSA0Ny43MzM0QzE3NC45NzkgNDcuNTU1NyAxNzUuNDEyIDQ3LjQ2NjggMTc1LjkwNCA0Ny40NjY4QzE3Ni4yNTEgNDcuNDY2OCAxNzYuNTcgNDcuNTE2OSAxNzYuODYxIDQ3LjYxNzJDMTc3LjE1MyA0Ny43MTI5IDE3Ny40MDYgNDcuODY1NiAxNzcuNjIgNDguMDc1MkMxNzcuODM0IDQ4LjI4NDggMTc4LjAwMSA0OC41NTM3IDE3OC4xMTkgNDguODgxOEMxNzguMjM4IDQ5LjIxIDE3OC4yOTcgNDkuNjA2NCAxNzguMjk3IDUwLjA3MTNWNTVIMTc3LjAzMlY1MC4xMzI4QzE3Ny4wMzIgNDkuNzQ1NCAxNzYuOTY2IDQ5LjQzNTUgMTc2LjgzNCA0OS4yMDMxQzE3Ni43MDYgNDguOTcwNyAxNzYuNTI0IDQ4LjgwMjEgMTc2LjI4NyA0OC42OTczQzE3Ni4wNSA0OC41ODc5IDE3NS43NzIgNDguNTMzMiAxNzUuNDUzIDQ4LjUzMzJDMTc1LjA3OSA0OC41MzMyIDE3NC43NjcgNDguNTk5MyAxNzQuNTE3IDQ4LjczMTRDMTc0LjI2NiA0OC44NjM2IDE3NC4wNjUgNDkuMDQ1OSAxNzMuOTE1IDQ5LjI3ODNDMTczLjc2NSA0OS41MTA3IDE3My42NTUgNDkuNzc3MyAxNzMuNTg3IDUwLjA3ODFDMTczLjUyMyA1MC4zNzQzIDE3My40OTEgNTAuNjg4OCAxNzMuNDkxIDUxLjAyMTVaTTE3OC4yODMgNTAuMzI0MkwxNzcuNDM2IDUwLjU4NEMxNzcuNDQgNTAuMTc4NCAxNzcuNTA2IDQ5Ljc4ODcgMTc3LjYzNCA0OS40MTVDMTc3Ljc2NiA0OS4wNDEzIDE3Ny45NTUgNDguNzA4NyAxNzguMjAxIDQ4LjQxN0MxNzguNDUyIDQ4LjEyNTMgMTc4Ljc1OSA0Ny44OTUyIDE3OS4xMjQgNDcuNzI2NkMxNzkuNDg5IDQ3LjU1MzQgMTc5LjkwNiA0Ny40NjY4IDE4MC4zNzUgNDcuNDY2OEMxODAuNzcxIDQ3LjQ2NjggMTgxLjEyMiA0Ny41MTkyIDE4MS40MjggNDcuNjI0QzE4MS43MzggNDcuNzI4OCAxODEuOTk3IDQ3Ljg5MDYgMTgyLjIwNyA0OC4xMDk0QzE4Mi40MjEgNDguMzIzNiAxODIuNTgzIDQ4LjU5OTMgMTgyLjY5MiA0OC45MzY1QzE4Mi44MDIgNDkuMjczOCAxODIuODU2IDQ5LjY3NDggMTgyLjg1NiA1MC4xMzk2VjU1SDE4MS41ODVWNTAuMTI2QzE4MS41ODUgNDkuNzExMyAxODEuNTE5IDQ5LjM5IDE4MS4zODcgNDkuMTYyMUMxODEuMjU5IDQ4LjkyOTcgMTgxLjA3NyA0OC43Njc5IDE4MC44NCA0OC42NzY4QzE4MC42MDcgNDguNTgxMSAxODAuMzI5IDQ4LjUzMzIgMTgwLjAwNiA0OC41MzMyQzE3OS43MjggNDguNTMzMiAxNzkuNDgyIDQ4LjU4MTEgMTc5LjI2OCA0OC42NzY4QzE3OS4wNTMgNDguNzcyNSAxNzguODczIDQ4LjkwNDYgMTc4LjcyOCA0OS4wNzMyQzE3OC41ODIgNDkuMjM3MyAxNzguNDcgNDkuNDI2NCAxNzguMzkzIDQ5LjY0MDZDMTc4LjMyIDQ5Ljg1NDggMTc4LjI4MyA1MC4wODI3IDE3OC4yODMgNTAuMzI0MlpNMTg5LjI5NiA1My4yOTFWNDcuNjAzNUgxOTAuNTY3VjU1SDE4OS4zNTdMMTg5LjI5NiA1My4yOTFaTTE4OS41MzUgNTEuNzMyNEwxOTAuMDYyIDUxLjcxODhDMTkwLjA2MiA1Mi4yMTA5IDE5MC4wMDkgNTIuNjY2NyAxODkuOTA0IDUzLjA4NTlDMTg5LjgwNCA1My41MDA3IDE4OS42NCA1My44NjA3IDE4OS40MTIgNTQuMTY2QzE4OS4xODQgNTQuNDcxNCAxODguODg2IDU0LjcxMDYgMTg4LjUxNyA1NC44ODM4QzE4OC4xNDcgNTUuMDUyNCAxODcuNjk5IDU1LjEzNjcgMTg3LjE3IDU1LjEzNjdDMTg2LjgxIDU1LjEzNjcgMTg2LjQ3OSA1NS4wODQzIDE4Ni4xNzkgNTQuOTc5NUMxODUuODgyIDU0Ljg3NDcgMTg1LjYyNyA1NC43MTI5IDE4NS40MTMgNTQuNDk0MUMxODUuMTk5IDU0LjI3NTQgMTg1LjAzMyA1My45OTA2IDE4NC45MTQgNTMuNjM5NkMxODQuOCA1My4yODg3IDE4NC43NDMgNTIuODY3MiAxODQuNzQzIDUyLjM3NVY0Ny42MDM1SDE4Ni4wMDhWNTIuMzg4N0MxODYuMDA4IDUyLjcyMTQgMTg2LjA0NCA1Mi45OTcxIDE4Ni4xMTcgNTMuMjE1OEMxODYuMTk1IDUzLjQzIDE4Ni4yOTcgNTMuNjAwOSAxODYuNDI1IDUzLjcyODVDMTg2LjU1NyA1My44NTE2IDE4Ni43MDMgNTMuOTM4MiAxODYuODYyIDUzLjk4ODNDMTg3LjAyNiA1NC4wMzg0IDE4Ny4xOTUgNTQuMDYzNSAxODcuMzY4IDU0LjA2MzVDMTg3LjkwNiA1NC4wNjM1IDE4OC4zMzIgNTMuOTYwOSAxODguNjQ2IDUzLjc1NTlDMTg4Ljk2MSA1My41NDYyIDE4OS4xODcgNTMuMjY2IDE4OS4zMjMgNTIuOTE1QzE4OS40NjUgNTIuNTU5NiAxODkuNTM1IDUyLjE2NTQgMTg5LjUzNSA1MS43MzI0Wk0xOTMuNzYgNDkuMTgyNlY1NUgxOTIuNDk1VjQ3LjYwMzVIMTkzLjY5MUwxOTMuNzYgNDkuMTgyNlpNMTkzLjQ1OSA1MS4wMjE1TDE5Mi45MzMgNTEuMDAxQzE5Mi45MzcgNTAuNDk1MSAxOTMuMDEyIDUwLjAyOCAxOTMuMTU4IDQ5LjU5OTZDMTkzLjMwNCA0OS4xNjY3IDE5My41MDkgNDguNzkwNyAxOTMuNzczIDQ4LjQ3MTdDMTk0LjAzOCA0OC4xNTI3IDE5NC4zNTIgNDcuOTA2NiAxOTQuNzE3IDQ3LjczMzRDMTk1LjA4NiA0Ny41NTU3IDE5NS40OTQgNDcuNDY2OCAxOTUuOTQgNDcuNDY2OEMxOTYuMzA1IDQ3LjQ2NjggMTk2LjYzMyA0Ny41MTY5IDE5Ni45MjUgNDcuNjE3MkMxOTcuMjE2IDQ3LjcxMjkgMTk3LjQ2NSA0Ny44Njc4IDE5Ny42NyA0OC4wODJDMTk3Ljg4IDQ4LjI5NjIgMTk4LjAzOSA0OC41NzQyIDE5OC4xNDggNDguOTE2QzE5OC4yNTggNDkuMjUzMyAxOTguMzEyIDQ5LjY2NTcgMTk4LjMxMiA1MC4xNTMzVjU1SDE5Ny4wNDFWNTAuMTM5NkMxOTcuMDQxIDQ5Ljc1MjMgMTk2Ljk4NCA0OS40NDI0IDE5Ni44NyA0OS4yMUMxOTYuNzU2IDQ4Ljk3MyAxOTYuNTkgNDguODAyMSAxOTYuMzcxIDQ4LjY5NzNDMTk2LjE1MiA0OC41ODc5IDE5NS44ODMgNDguNTMzMiAxOTUuNTY0IDQ4LjUzMzJDMTk1LjI1IDQ4LjUzMzIgMTk0Ljk2MyA0OC41OTkzIDE5NC43MDMgNDguNzMxNEMxOTQuNDQ4IDQ4Ljg2MzYgMTk0LjIyNyA0OS4wNDU5IDE5NC4wNCA0OS4yNzgzQzE5My44NTggNDkuNTEwNyAxOTMuNzE0IDQ5Ljc3NzMgMTkzLjYwOSA1MC4wNzgxQzE5My41MDkgNTAuMzc0MyAxOTMuNDU5IDUwLjY4ODggMTkzLjQ1OSA1MS4wMjE1Wk0yMDEuNjA3IDQ3LjYwMzVWNTVIMjAwLjMzNlY0Ny42MDM1SDIwMS42MDdaTTIwMC4yNCA0NS42NDE2QzIwMC4yNCA0NS40MzY1IDIwMC4zMDIgNDUuMjYzMyAyMDAuNDI1IDQ1LjEyMjFDMjAwLjU1MiA0NC45ODA4IDIwMC43MzkgNDQuOTEwMiAyMDAuOTg1IDQ0LjkxMDJDMjAxLjIyNyA0NC45MTAyIDIwMS40MTEgNDQuOTgwOCAyMDEuNTM5IDQ1LjEyMjFDMjAxLjY3MSA0NS4yNjMzIDIwMS43MzcgNDUuNDM2NSAyMDEuNzM3IDQ1LjY0MTZDMjAxLjczNyA0NS44Mzc2IDIwMS42NzEgNDYuMDA2MiAyMDEuNTM5IDQ2LjE0NzVDMjAxLjQxMSA0Ni4yODQyIDIwMS4yMjcgNDYuMzUyNSAyMDAuOTg1IDQ2LjM1MjVDMjAwLjczOSA0Ni4zNTI1IDIwMC41NTIgNDYuMjg0MiAyMDAuNDI1IDQ2LjE0NzVDMjAwLjMwMiA0Ni4wMDYyIDIwMC4yNCA0NS44Mzc2IDIwMC4yNCA0NS42NDE2Wk0yMDYuNTk4IDU0LjA5NzdDMjA2Ljg5OCA1NC4wOTc3IDIwNy4xNzYgNTQuMDM2MSAyMDcuNDMyIDUzLjkxMzFDMjA3LjY4NyA1My43OSAyMDcuODk2IDUzLjYyMTQgMjA4LjA2MSA1My40MDcyQzIwOC4yMjUgNTMuMTg4NSAyMDguMzE4IDUyLjk0MDEgMjA4LjM0MSA1Mi42NjIxSDIwOS41NDRDMjA5LjUyMSA1My4wOTk2IDIwOS4zNzMgNTMuNTA3NSAyMDkuMSA1My44ODU3QzIwOC44MzEgNTQuMjU5NCAyMDguNDc4IDU0LjU2MjUgMjA4LjA0IDU0Ljc5NDlDMjA3LjYwMyA1NS4wMjI4IDIwNy4xMjIgNTUuMTM2NyAyMDYuNTk4IDU1LjEzNjdDMjA2LjA0MiA1NS4xMzY3IDIwNS41NTYgNTUuMDM4NyAyMDUuMTQyIDU0Ljg0MjhDMjA0LjczMSA1NC42NDY4IDIwNC4zOSA1NC4zNzc5IDIwNC4xMTYgNTQuMDM2MUMyMDMuODQ3IDUzLjY5NDMgMjAzLjY0NSA1My4zMDI0IDIwMy41MDggNTIuODYwNEMyMDMuMzc2IDUyLjQxMzcgMjAzLjMxIDUxLjk0MjEgMjAzLjMxIDUxLjQ0NTNWNTEuMTU4MkMyMDMuMzEgNTAuNjYxNSAyMDMuMzc2IDUwLjE5MjEgMjAzLjUwOCA0OS43NUMyMDMuNjQ1IDQ5LjMwMzQgMjAzLjg0NyA0OC45MDkyIDIwNC4xMTYgNDguNTY3NEMyMDQuMzkgNDguMjI1NiAyMDQuNzMxIDQ3Ljk1NjcgMjA1LjE0MiA0Ny43NjA3QzIwNS41NTYgNDcuNTY0OCAyMDYuMDQyIDQ3LjQ2NjggMjA2LjU5OCA0Ny40NjY4QzIwNy4xNzYgNDcuNDY2OCAyMDcuNjgyIDQ3LjU4NTMgMjA4LjExNSA0Ny44MjIzQzIwOC41NDggNDguMDU0NyAyMDguODg4IDQ4LjM3MzcgMjA5LjEzNCA0OC43NzkzQzIwOS4zODQgNDkuMTgwMyAyMDkuNTIxIDQ5LjYzNjEgMjA5LjU0NCA1MC4xNDY1SDIwOC4zNDFDMjA4LjMxOCA0OS44NDExIDIwOC4yMzEgNDkuNTY1NCAyMDguMDgxIDQ5LjMxOTNDMjA3LjkzNSA0OS4wNzMyIDIwNy43MzUgNDguODc3MyAyMDcuNDc5IDQ4LjczMTRDMjA3LjIyOSA0OC41ODExIDIwNi45MzUgNDguNTA1OSAyMDYuNTk4IDQ4LjUwNTlDMjA2LjIxIDQ4LjUwNTkgMjA1Ljg4NCA0OC41ODMzIDIwNS42MiA0OC43MzgzQzIwNS4zNiA0OC44ODg3IDIwNS4xNTMgNDkuMDkzOCAyMDQuOTk4IDQ5LjM1MzVDMjA0Ljg0OCA0OS42MDg3IDIwNC43MzggNDkuODkzNiAyMDQuNjcgNTAuMjA4QzIwNC42MDYgNTAuNTE3OSAyMDQuNTc0IDUwLjgzNDYgMjA0LjU3NCA1MS4xNTgyVjUxLjQ0NTNDMjA0LjU3NCA1MS43Njg5IDIwNC42MDYgNTIuMDg3OSAyMDQuNjcgNTIuNDAyM0MyMDQuNzM0IDUyLjcxNjggMjA0Ljg0MSA1My4wMDE2IDIwNC45OTEgNTMuMjU2OEMyMDUuMTQ2IDUzLjUxMiAyMDUuMzU0IDUzLjcxNzEgMjA1LjYxMyA1My44NzIxQzIwNS44NzggNTQuMDIyNSAyMDYuMjA2IDU0LjA5NzcgMjA2LjU5OCA1NC4wOTc3Wk0yMTUuMzI3IDUzLjczNTRWNDkuOTI3N0MyMTUuMzI3IDQ5LjYzNjEgMjE1LjI2OCA0OS4zODMxIDIxNS4xNDkgNDkuMTY4OUMyMTUuMDM1IDQ4Ljk1MDIgMjE0Ljg2MiA0OC43ODE2IDIxNC42MyA0OC42NjMxQzIxNC4zOTcgNDguNTQ0NiAyMTQuMTEgNDguNDg1NCAyMTMuNzY5IDQ4LjQ4NTRDMjEzLjQ1IDQ4LjQ4NTQgMjEzLjE2OSA0OC41NCAyMTIuOTI4IDQ4LjY0OTRDMjEyLjY5MSA0OC43NTg4IDIxMi41MDQgNDguOTAyMyAyMTIuMzY3IDQ5LjA4MDFDMjEyLjIzNSA0OS4yNTc4IDIxMi4xNjkgNDkuNDQ5MiAyMTIuMTY5IDQ5LjY1NDNIMjEwLjkwNEMyMTAuOTA0IDQ5LjM5IDIxMC45NzMgNDkuMTI3OSAyMTEuMTA5IDQ4Ljg2ODJDMjExLjI0NiA0OC42MDg0IDIxMS40NDIgNDguMzczNyAyMTEuNjk3IDQ4LjE2NDFDMjExLjk1NyA0Ny45NDk5IDIxMi4yNjcgNDcuNzgxMiAyMTIuNjI3IDQ3LjY1ODJDMjEyLjk5MiA0Ny41MzA2IDIxMy4zOTcgNDcuNDY2OCAyMTMuODQ0IDQ3LjQ2NjhDMjE0LjM4MiA0Ny40NjY4IDIxNC44NTUgNDcuNTU3OSAyMTUuMjY2IDQ3Ljc0MDJDMjE1LjY4IDQ3LjkyMjUgMjE2LjAwNCA0OC4xOTgyIDIxNi4yMzYgNDguNTY3NEMyMTYuNDczIDQ4LjkzMiAyMTYuNTkyIDQ5LjM5IDIxNi41OTIgNDkuOTQxNFY1My4zODY3QzIxNi41OTIgNTMuNjMyOCAyMTYuNjEyIDUzLjg5NDkgMjE2LjY1MyA1NC4xNzI5QzIxNi42OTkgNTQuNDUwOCAyMTYuNzY1IDU0LjY5MDEgMjE2Ljg1MiA1NC44OTA2VjU1SDIxNS41MzJDMjE1LjQ2OCA1NC44NTQyIDIxNS40MTggNTQuNjYwNSAyMTUuMzgyIDU0LjQxODlDMjE1LjM0NSA1NC4xNzI5IDIxNS4zMjcgNTMuOTQ1IDIxNS4zMjcgNTMuNzM1NFpNMjE1LjU0NiA1MC41MTU2TDIxNS41NiA1MS40MDQzSDIxNC4yODFDMjEzLjkyMSA1MS40MDQzIDIxMy42IDUxLjQzMzkgMjEzLjMxNyA1MS40OTMyQzIxMy4wMzUgNTEuNTQ3OSAyMTIuNzk4IDUxLjYzMjIgMjEyLjYwNiA1MS43NDYxQzIxMi40MTUgNTEuODYgMjEyLjI2OSA1Mi4wMDM2IDIxMi4xNjkgNTIuMTc2OEMyMTIuMDY5IDUyLjM0NTQgMjEyLjAxOSA1Mi41NDM2IDIxMi4wMTkgNTIuNzcxNUMyMTIuMDE5IDUzLjAwMzkgMjEyLjA3MSA1My4yMTU4IDIxMi4xNzYgNTMuNDA3MkMyMTIuMjgxIDUzLjU5ODYgMjEyLjQzOCA1My43NTEzIDIxMi42NDcgNTMuODY1MkMyMTIuODYyIDUzLjk3NDYgMjEzLjEyNCA1NC4wMjkzIDIxMy40MzQgNTQuMDI5M0MyMTMuODIxIDU0LjAyOTMgMjE0LjE2MyA1My45NDczIDIxNC40NTkgNTMuNzgzMkMyMTQuNzU1IDUzLjYxOTEgMjE0Ljk5IDUzLjQxODYgMjE1LjE2MyA1My4xODE2QzIxNS4zNDEgNTIuOTQ0NyAyMTUuNDM3IDUyLjcxNDUgMjE1LjQ1IDUyLjQ5MTJMMjE1Ljk5IDUzLjA5OTZDMjE1Ljk1OCA1My4yOTEgMjE1Ljg3MiA1My41MDI5IDIxNS43MyA1My43MzU0QzIxNS41ODkgNTMuOTY3OCAyMTUuNCA1NC4xOTExIDIxNS4xNjMgNTQuNDA1M0MyMTQuOTMxIDU0LjYxNDkgMjE0LjY1MyA1NC43OTA0IDIxNC4zMjkgNTQuOTMxNkMyMTQuMDEgNTUuMDY4NCAyMTMuNjUgNTUuMTM2NyAyMTMuMjQ5IDU1LjEzNjdDMjEyLjc0OCA1NS4xMzY3IDIxMi4zMDggNTUuMDM4NyAyMTEuOTMgNTQuODQyOEMyMTEuNTU2IDU0LjY0NjggMjExLjI2NCA1NC4zODQ4IDIxMS4wNTUgNTQuMDU2NkMyMTAuODUgNTMuNzI0IDIxMC43NDcgNTMuMzUyNSAyMTAuNzQ3IDUyLjk0MjRDMjEwLjc0NyA1Mi41NDU5IDIxMC44MjUgNTIuMTk3MyAyMTAuOTc5IDUxLjg5NjVDMjExLjEzNCA1MS41OTExIDIxMS4zNTggNTEuMzM4MiAyMTEuNjQ5IDUxLjEzNzdDMjExLjk0MSA1MC45MzI2IDIxMi4yOTIgNTAuNzc3NyAyMTIuNzAyIDUwLjY3MjlDMjEzLjExMiA1MC41NjggMjEzLjU3IDUwLjUxNTYgMjE0LjA3NiA1MC41MTU2SDIxNS41NDZaTTIyMS42NzggNDcuNjAzNVY0OC41NzQySDIxNy42NzlWNDcuNjAzNUgyMjEuNjc4Wk0yMTkuMDMyIDQ1LjgwNTdIMjIwLjI5N1Y1My4xNjhDMjIwLjI5NyA1My40MTg2IDIyMC4zMzYgNTMuNjA3NyAyMjAuNDEzIDUzLjczNTRDMjIwLjQ5MSA1My44NjMgMjIwLjU5MSA1My45NDczIDIyMC43MTQgNTMuOTg4M0MyMjAuODM3IDU0LjAyOTMgMjIwLjk2OSA1NC4wNDk4IDIyMS4xMSA1NC4wNDk4QzIyMS4yMTUgNTQuMDQ5OCAyMjEuMzI1IDU0LjA0MDcgMjIxLjQzOCA1NC4wMjI1QzIyMS41NTcgNTMuOTk5NyAyMjEuNjQ2IDUzLjk4MTQgMjIxLjcwNSA1My45Njc4TDIyMS43MTIgNTVDMjIxLjYxMiA1NS4wMzE5IDIyMS40NzkgNTUuMDYxNSAyMjEuMzE1IDU1LjA4ODlDMjIxLjE1NiA1NS4xMjA4IDIyMC45NjIgNTUuMTM2NyAyMjAuNzM0IDU1LjEzNjdDMjIwLjQyNCA1NS4xMzY3IDIyMC4xNCA1NS4wNzUyIDIxOS44OCA1NC45NTIxQzIxOS42MiA1NC44MjkxIDIxOS40MTMgNTQuNjI0IDIxOS4yNTggNTQuMzM2OUMyMTkuMTA3IDU0LjA0NTIgMjE5LjAzMiA1My42NTMzIDIxOS4wMzIgNTMuMTYxMVY0NS44MDU3Wk0yMjQuNTM1IDQ3LjYwMzVWNTVIMjIzLjI2NFY0Ny42MDM1SDIyNC41MzVaTTIyMy4xNjggNDUuNjQxNkMyMjMuMTY4IDQ1LjQzNjUgMjIzLjIyOSA0NS4yNjMzIDIyMy4zNTMgNDUuMTIyMUMyMjMuNDggNDQuOTgwOCAyMjMuNjY3IDQ0LjkxMDIgMjIzLjkxMyA0NC45MTAyQzIyNC4xNTUgNDQuOTEwMiAyMjQuMzM5IDQ0Ljk4MDggMjI0LjQ2NyA0NS4xMjIxQzIyNC41OTkgNDUuMjYzMyAyMjQuNjY1IDQ1LjQzNjUgMjI0LjY2NSA0NS42NDE2QzIyNC42NjUgNDUuODM3NiAyMjQuNTk5IDQ2LjAwNjIgMjI0LjQ2NyA0Ni4xNDc1QzIyNC4zMzkgNDYuMjg0MiAyMjQuMTU1IDQ2LjM1MjUgMjIzLjkxMyA0Ni4zNTI1QzIyMy42NjcgNDYuMzUyNSAyMjMuNDggNDYuMjg0MiAyMjMuMzUzIDQ2LjE0NzVDMjIzLjIyOSA0Ni4wMDYyIDIyMy4xNjggNDUuODM3NiAyMjMuMTY4IDQ1LjY0MTZaTTIyNi4yMyA1MS4zODM4VjUxLjIyNjZDMjI2LjIzIDUwLjY5MzQgMjI2LjMwOCA1MC4xOTg5IDIyNi40NjMgNDkuNzQzMkMyMjYuNjE4IDQ5LjI4MjkgMjI2Ljg0MSA0OC44ODQxIDIyNy4xMzMgNDguNTQ2OUMyMjcuNDI0IDQ4LjIwNTEgMjI3Ljc3OCA0Ny45NDA4IDIyOC4xOTIgNDcuNzUzOUMyMjguNjA3IDQ3LjU2MjUgMjI5LjA3MiA0Ny40NjY4IDIyOS41ODcgNDcuNDY2OEMyMzAuMTA2IDQ3LjQ2NjggMjMwLjU3NCA0Ny41NjI1IDIzMC45ODggNDcuNzUzOUMyMzEuNDA4IDQ3Ljk0MDggMjMxLjc2MyA0OC4yMDUxIDIzMi4wNTUgNDguNTQ2OUMyMzIuMzUxIDQ4Ljg4NDEgMjMyLjU3NiA0OS4yODI5IDIzMi43MzEgNDkuNzQzMkMyMzIuODg2IDUwLjE5ODkgMjMyLjk2NCA1MC42OTM0IDIzMi45NjQgNTEuMjI2NlY1MS4zODM4QzIzMi45NjQgNTEuOTE3IDIzMi44ODYgNTIuNDExNSAyMzIuNzMxIDUyLjg2NzJDMjMyLjU3NiA1My4zMjI5IDIzMi4zNTEgNTMuNzIxNyAyMzIuMDU1IDU0LjA2MzVDMjMxLjc2MyA1NC40MDA3IDIzMS40MSA1NC42NjUgMjMwLjk5NSA1NC44NTY0QzIzMC41ODUgNTUuMDQzMyAyMzAuMTIgNTUuMTM2NyAyMjkuNjAxIDU1LjEzNjdDMjI5LjA4MSA1NS4xMzY3IDIyOC42MTQgNTUuMDQzMyAyMjguMTk5IDU0Ljg1NjRDMjI3Ljc4NSA1NC42NjUgMjI3LjQyOSA1NC40MDA3IDIyNy4xMzMgNTQuMDYzNUMyMjYuODQxIDUzLjcyMTcgMjI2LjYxOCA1My4zMjI5IDIyNi40NjMgNTIuODY3MkMyMjYuMzA4IDUyLjQxMTUgMjI2LjIzIDUxLjkxNyAyMjYuMjMgNTEuMzgzOFpNMjI3LjQ5NSA1MS4yMjY2VjUxLjM4MzhDMjI3LjQ5NSA1MS43NTI5IDIyNy41MzggNTIuMTAxNiAyMjcuNjI1IDUyLjQyOTdDMjI3LjcxMiA1Mi43NTMzIDIyNy44NDEgNTMuMDQwNCAyMjguMDE1IDUzLjI5MUMyMjguMTkyIDUzLjU0MTcgMjI4LjQxMyA1My43Mzk5IDIyOC42NzggNTMuODg1N0MyMjguOTQyIDU0LjAyNyAyMjkuMjUgNTQuMDk3NyAyMjkuNjAxIDU0LjA5NzdDMjI5Ljk0NyA1NC4wOTc3IDIzMC4yNSA1NC4wMjcgMjMwLjUxIDUzLjg4NTdDMjMwLjc3NCA1My43Mzk5IDIzMC45OTMgNTMuNTQxNyAyMzEuMTY2IDUzLjI5MUMyMzEuMzM5IDUzLjA0MDQgMjMxLjQ2OSA1Mi43NTMzIDIzMS41NTYgNTIuNDI5N0MyMzEuNjQ3IDUyLjEwMTYgMjMxLjY5MiA1MS43NTI5IDIzMS42OTIgNTEuMzgzOFY1MS4yMjY2QzIzMS42OTIgNTAuODYyIDIzMS42NDcgNTAuNTE3OSAyMzEuNTU2IDUwLjE5NDNDMjMxLjQ2OSA0OS44NjYyIDIzMS4zMzcgNDkuNTc2OCAyMzEuMTU5IDQ5LjMyNjJDMjMwLjk4NiA0OS4wNzEgMjMwLjc2NyA0OC44NzA0IDIzMC41MDMgNDguNzI0NkMyMzAuMjQzIDQ4LjU3ODggMjI5LjkzOCA0OC41MDU5IDIyOS41ODcgNDguNTA1OUMyMjkuMjQxIDQ4LjUwNTkgMjI4LjkzNSA0OC41Nzg4IDIyOC42NzEgNDguNzI0NkMyMjguNDExIDQ4Ljg3MDQgMjI4LjE5MiA0OS4wNzEgMjI4LjAxNSA0OS4zMjYyQzIyNy44NDEgNDkuNTc2OCAyMjcuNzEyIDQ5Ljg2NjIgMjI3LjYyNSA1MC4xOTQzQzIyNy41MzggNTAuNTE3OSAyMjcuNDk1IDUwLjg2MiAyMjcuNDk1IDUxLjIyNjZaTTIzNS44MTQgNDkuMTgyNlY1NUgyMzQuNTVWNDcuNjAzNUgyMzUuNzQ2TDIzNS44MTQgNDkuMTgyNlpNMjM1LjUxNCA1MS4wMjE1TDIzNC45ODcgNTEuMDAxQzIzNC45OTIgNTAuNDk1MSAyMzUuMDY3IDUwLjAyOCAyMzUuMjEzIDQ5LjU5OTZDMjM1LjM1OSA0OS4xNjY3IDIzNS41NjQgNDguNzkwNyAyMzUuODI4IDQ4LjQ3MTdDMjM2LjA5MiA0OC4xNTI3IDIzNi40MDcgNDcuOTA2NiAyMzYuNzcxIDQ3LjczMzRDMjM3LjE0MSA0Ny41NTU3IDIzNy41NDkgNDcuNDY2OCAyMzcuOTk1IDQ3LjQ2NjhDMjM4LjM2IDQ3LjQ2NjggMjM4LjY4OCA0Ny41MTY5IDIzOC45NzkgNDcuNjE3MkMyMzkuMjcxIDQ3LjcxMjkgMjM5LjUyIDQ3Ljg2NzggMjM5LjcyNSA0OC4wODJDMjM5LjkzNCA0OC4yOTYyIDI0MC4wOTQgNDguNTc0MiAyNDAuMjAzIDQ4LjkxNkMyNDAuMzEyIDQ5LjI1MzMgMjQwLjM2NyA0OS42NjU3IDI0MC4zNjcgNTAuMTUzM1Y1NUgyMzkuMDk2VjUwLjEzOTZDMjM5LjA5NiA0OS43NTIzIDIzOS4wMzkgNDkuNDQyNCAyMzguOTI1IDQ5LjIxQzIzOC44MTEgNDguOTczIDIzOC42NDUgNDguODAyMSAyMzguNDI2IDQ4LjY5NzNDMjM4LjIwNyA0OC41ODc5IDIzNy45MzggNDguNTMzMiAyMzcuNjE5IDQ4LjUzMzJDMjM3LjMwNSA0OC41MzMyIDIzNy4wMTggNDguNTk5MyAyMzYuNzU4IDQ4LjczMTRDMjM2LjUwMyA0OC44NjM2IDIzNi4yODIgNDkuMDQ1OSAyMzYuMDk1IDQ5LjI3ODNDMjM1LjkxMiA0OS41MTA3IDIzNS43NjkgNDkuNzc3MyAyMzUuNjY0IDUwLjA3ODFDMjM1LjU2NCA1MC4zNzQzIDIzNS41MTQgNTAuNjg4OCAyMzUuNTE0IDUxLjAyMTVaXCIgZmlsbD1cIiM2NDc0OEJcIi8+XG5cdFx0PHBhdGggZD1cIk0yNCA2NEMxOS44NiA2NCAxNi41IDY3LjM2IDE2LjUgNzEuNUMxNi41IDc1LjY0IDE5Ljg2IDc5IDI0IDc5QzI4LjE0IDc5IDMxLjUgNzUuNjQgMzEuNSA3MS41QzMxLjUgNjcuMzYgMjguMTQgNjQgMjQgNjRaTTI0IDc3LjVDMjAuNjg1IDc3LjUgMTggNzQuODE1IDE4IDcxLjVDMTggNjguMTg1IDIwLjY4NSA2NS41IDI0IDY1LjVDMjcuMzE1IDY1LjUgMzAgNjguMTg1IDMwIDcxLjVDMzAgNzQuODE1IDI3LjMxNSA3Ny41IDI0IDc3LjVaXCIgZmlsbD1cIiM2NDc0OEJcIi8+XG5cdFx0PHBhdGggZD1cIk00Mi45NDQzIDc1LjAwMzRWNzZIMzguMDUwM1Y3NS4wMDM0SDQyLjk0NDNaTTM4LjI5NzkgNjYuNzU3OFY3NkgzNy4wNzI4VjY2Ljc1NzhIMzguMjk3OVpNNDIuMjk2OSA3MC43MzE0VjcxLjcyOEgzOC4wNTAzVjcwLjczMTRINDIuMjk2OVpNNDIuODgwOSA2Ni43NTc4VjY3Ljc2MDdIMzguMDUwM1Y2Ni43NTc4SDQyLjg4MDlaTTQ2LjcyNzUgNzEuNTg4NFY3Mi41NTMySDQzLjYyOTlWNzEuNTg4NEg0Ni43Mjc1Wk00OS4wNDQ0IDcwLjQ5NjZWNzZINDcuODYzOFY2OS4xMzE4SDQ4Ljk4MUw0OS4wNDQ0IDcwLjQ5NjZaTTQ4LjgwMzIgNzIuMzA1N0w0OC4yNTczIDcyLjI4NjZDNDguMjYxNiA3MS44MTY5IDQ4LjMyMjkgNzEuMzgzMSA0OC40NDE0IDcwLjk4NTRDNDguNTU5OSA3MC41ODMzIDQ4LjczNTUgNzAuMjM0MiA0OC45NjgzIDY5LjkzOEM0OS4yMDEgNjkuNjQxOCA0OS40OTA5IDY5LjQxMzIgNDkuODM3OSA2OS4yNTI0QzUwLjE4NDkgNjkuMDg3NCA1MC41ODY5IDY5LjAwNDkgNTEuMDQzOSA2OS4wMDQ5QzUxLjM2NTYgNjkuMDA0OSA1MS42NjE4IDY5LjA1MTQgNTEuOTMyNiA2OS4xNDQ1QzUyLjIwMzUgNjkuMjMzNCA1Mi40MzgzIDY5LjM3NTIgNTIuNjM3MiA2OS41Njk4QzUyLjgzNjEgNjkuNzY0NSA1Mi45OTA2IDcwLjAxNDIgNTMuMTAwNiA3MC4zMTg4QzUzLjIxMDYgNzAuNjIzNSA1My4yNjU2IDcwLjk5MTcgNTMuMjY1NiA3MS40MjMzVjc2SDUyLjA5MTNWNzEuNDgwNUM1Mi4wOTEzIDcxLjEyMDggNTIuMDI5OSA3MC44MzMgNTEuOTA3MiA3MC42MTcyQzUxLjc4ODcgNzAuNDAxNCA1MS42MTk1IDcwLjI0NDggNTEuMzk5NCA3MC4xNDc1QzUxLjE3OTQgNzAuMDQ1OSA1MC45MjEyIDY5Ljk5NTEgNTAuNjI1IDY5Ljk5NTFDNTAuMjc4IDY5Ljk5NTEgNDkuOTg4MSA3MC4wNTY1IDQ5Ljc1NTQgNzAuMTc5MkM0OS41MjI2IDcwLjMwMTkgNDkuMzM2NCA3MC40NzEyIDQ5LjE5NjggNzAuNjg3QzQ5LjA1NzEgNzAuOTAyOCA0OC45NTU2IDcxLjE1MDQgNDguODkyMSA3MS40Mjk3QzQ4LjgzMjggNzEuNzA0OCA0OC44MDMyIDcxLjk5NjcgNDguODAzMiA3Mi4zMDU3Wk01My4yNTI5IDcxLjY1ODJMNTIuNDY1OCA3MS44OTk0QzUyLjQ3MDEgNzEuNTIyOCA1Mi41MzE0IDcxLjE2MSA1Mi42NDk5IDcwLjgxNEM1Mi43NzI2IDcwLjQ2NyA1Mi45NDgyIDcwLjE1OCA1My4xNzY4IDY5Ljg4NzJDNTMuNDA5NSA2OS42MTY0IDUzLjY5NTEgNjkuNDAyNyA1NC4wMzM3IDY5LjI0NjFDNTQuMzcyMiA2OS4wODUzIDU0Ljc1OTQgNjkuMDA0OSA1NS4xOTUzIDY5LjAwNDlDNTUuNTYzNSA2OS4wMDQ5IDU1Ljg4OTMgNjkuMDUzNSA1Ni4xNzI5IDY5LjE1MDlDNTYuNDYwNiA2OS4yNDgyIDU2LjcwMTggNjkuMzk4NCA1Ni44OTY1IDY5LjYwMTZDNTcuMDk1NCA2OS44MDA1IDU3LjI0NTYgNzAuMDU2NSA1Ny4zNDcyIDcwLjM2OTZDNTcuNDQ4NyA3MC42ODI4IDU3LjQ5OTUgNzEuMDU1MiA1Ny40OTk1IDcxLjQ4NjhWNzZINTYuMzE4OFY3MS40NzQxQzU2LjMxODggNzEuMDg5IDU2LjI1NzUgNzAuNzkwNyA1Ni4xMzQ4IDcwLjU3OTFDNTYuMDE2MyA3MC4zNjMzIDU1Ljg0NyA3MC4yMTMxIDU1LjYyNyA3MC4xMjg0QzU1LjQxMTEgNzAuMDM5NiA1NS4xNTMgNjkuOTk1MSA1NC44NTI1IDY5Ljk5NTFDNTQuNTk0NCA2OS45OTUxIDU0LjM2NTkgNzAuMDM5NiA1NC4xNjcgNzAuMTI4NEM1My45NjgxIDcwLjIxNzMgNTMuODAwOSA3MC4zNCA1My42NjU1IDcwLjQ5NjZDNTMuNTMwMSA3MC42NDg5IDUzLjQyNjQgNzAuODI0NSA1My4zNTQ1IDcxLjAyMzRDNTMuMjg2OCA3MS4yMjIzIDUzLjI1MjkgNzEuNDMzOSA1My4yNTI5IDcxLjY1ODJaTTYzLjMyNjcgNzQuODI1N1Y3MS4yOUM2My4zMjY3IDcxLjAxOTIgNjMuMjcxNiA3MC43ODQzIDYzLjE2MTYgNzAuNTg1NEM2My4wNTU4IDcwLjM4MjMgNjIuODk1IDcwLjIyNTcgNjIuNjc5MiA3MC4xMTU3QzYyLjQ2MzQgNzAuMDA1NyA2Mi4xOTY4IDY5Ljk1MDcgNjEuODc5NCA2OS45NTA3QzYxLjU4MzIgNjkuOTUwNyA2MS4zMjI5IDcwLjAwMTUgNjEuMDk4NiA3MC4xMDNDNjAuODc4NiA3MC4yMDQ2IDYwLjcwNTEgNzAuMzM3OSA2MC41NzgxIDcwLjUwMjlDNjAuNDU1NCA3MC42NjggNjAuMzk0IDcwLjg0NTcgNjAuMzk0IDcxLjAzNjFINTkuMjE5N0M1OS4yMTk3IDcwLjc5MDcgNTkuMjgzMiA3MC41NDc0IDU5LjQxMDIgNzAuMzA2MkM1OS41MzcxIDcwLjA2NDkgNTkuNzE5MSA2OS44NDcgNTkuOTU2MSA2OS42NTIzQzYwLjE5NzMgNjkuNDUzNSA2MC40ODUgNjkuMjk2OSA2MC44MTkzIDY5LjE4MjZDNjEuMTU3OSA2OS4wNjQxIDYxLjUzNDUgNjkuMDA0OSA2MS45NDkyIDY5LjAwNDlDNjIuNDQ4NiA2OS4wMDQ5IDYyLjg4ODcgNjkuMDg5NSA2My4yNjk1IDY5LjI1ODhDNjMuNjU0NiA2OS40MjgxIDYzLjk1NTEgNjkuNjg0MSA2NC4xNzA5IDcwLjAyNjlDNjQuMzkxIDcwLjM2NTQgNjQuNTAxIDcwLjc5MDcgNjQuNTAxIDcxLjMwMjdWNzQuNTAyQzY0LjUwMSA3NC43MzA1IDY0LjUyIDc0Ljk3MzggNjQuNTU4MSA3NS4yMzE5QzY0LjYwMDQgNzUuNDkwMSA2NC42NjE4IDc1LjcxMjIgNjQuNzQyMiA3NS44OTg0Vjc2SDYzLjUxNzFDNjMuNDU3OCA3NS44NjQ2IDYzLjQxMTMgNzUuNjg0NyA2My4zNzc0IDc1LjQ2MDRDNjMuMzQzNiA3NS4yMzE5IDYzLjMyNjcgNzUuMDIwMyA2My4zMjY3IDc0LjgyNTdaTTYzLjUyOTggNzEuODM1OUw2My41NDI1IDcyLjY2MTFINjIuMzU1NUM2Mi4wMjEyIDcyLjY2MTEgNjEuNzIyOCA3Mi42ODg2IDYxLjQ2MDQgNzIuNzQzN0M2MS4xOTgxIDcyLjc5NDQgNjAuOTc4IDcyLjg3MjcgNjAuODAwMyA3Mi45Nzg1QzYwLjYyMjYgNzMuMDg0MyA2MC40ODcxIDczLjIxNzYgNjAuMzk0IDczLjM3ODRDNjAuMzAwOSA3My41MzUgNjAuMjU0NCA3My43MTkxIDYwLjI1NDQgNzMuOTMwN0M2MC4yNTQ0IDc0LjE0NjUgNjAuMzAzMSA3NC4zNDMzIDYwLjQwMDQgNzQuNTIxQzYwLjQ5NzcgNzQuNjk4NyA2MC42NDM3IDc0Ljg0MDUgNjAuODM4NCA3NC45NDYzQzYxLjAzNzMgNzUuMDQ3OSA2MS4yODA2IDc1LjA5ODYgNjEuNTY4NCA3NS4wOTg2QzYxLjkyODEgNzUuMDk4NiA2Mi4yNDU0IDc1LjAyMjUgNjIuNTIwNSA3NC44NzAxQzYyLjc5NTYgNzQuNzE3OCA2My4wMTM1IDc0LjUzMTYgNjMuMTc0MyA3NC4zMTE1QzYzLjMzOTQgNzQuMDkxNSA2My40MjgyIDczLjg3NzggNjMuNDQwOSA3My42NzA0TDYzLjk0MjQgNzQuMjM1NEM2My45MTI4IDc0LjQxMzEgNjMuODMyNCA3NC42MDk5IDYzLjcwMTIgNzQuODI1N0M2My41NyA3NS4wNDE1IDYzLjM5NDQgNzUuMjQ4OSA2My4xNzQzIDc1LjQ0NzhDNjIuOTU4NSA3NS42NDI0IDYyLjcwMDQgNzUuODA1MyA2Mi4zOTk5IDc1LjkzNjVDNjIuMTAzNyA3Ni4wNjM1IDYxLjc2OTQgNzYuMTI3IDYxLjM5NyA3Ni4xMjdDNjAuOTMxNSA3Ni4xMjcgNjAuNTIzMSA3Ni4wMzYgNjAuMTcxOSA3NS44NTRDNTkuODI0OSA3NS42NzIgNTkuNTU0IDc1LjQyODcgNTkuMzU5NCA3NS4xMjRDNTkuMTY4OSA3NC44MTUxIDU5LjA3MzcgNzQuNDcwMiA1OS4wNzM3IDc0LjA4OTRDNTkuMDczNyA3My43MjEyIDU5LjE0NTcgNzMuMzk3NSA1OS4yODk2IDczLjExODJDNTkuNDMzNCA3Mi44MzQ2IDU5LjY0MDggNzIuNTk5OCA1OS45MTE2IDcyLjQxMzZDNjAuMTgyNSA3Mi4yMjMxIDYwLjUwODMgNzIuMDc5MyA2MC44ODkyIDcxLjk4MTlDNjEuMjcgNzEuODg0NiA2MS42OTUzIDcxLjgzNTkgNjIuMTY1IDcxLjgzNTlINjMuNTI5OFpNNjcuNjI0IDY5LjEzMThWNzZINjYuNDQzNFY2OS4xMzE4SDY3LjYyNFpNNjYuMzU0NSA2Ny4zMTAxQzY2LjM1NDUgNjcuMTE5NiA2Ni40MTE2IDY2Ljk1ODggNjYuNTI1OSA2Ni44Mjc2QzY2LjY0NDQgNjYuNjk2NSA2Ni44MTc5IDY2LjYzMDkgNjcuMDQ2NCA2Ni42MzA5QzY3LjI3MDcgNjYuNjMwOSA2Ny40NDIxIDY2LjY5NjUgNjcuNTYwNSA2Ni44Mjc2QzY3LjY4MzMgNjYuOTU4OCA2Ny43NDQ2IDY3LjExOTYgNjcuNzQ0NiA2Ny4zMTAxQzY3Ljc0NDYgNjcuNDkyIDY3LjY4MzMgNjcuNjQ4NiA2Ny41NjA1IDY3Ljc3OThDNjcuNDQyMSA2Ny45MDY3IDY3LjI3MDcgNjcuOTcwMiA2Ny4wNDY0IDY3Ljk3MDJDNjYuODE3OSA2Ny45NzAyIDY2LjY0NDQgNjcuOTA2NyA2Ni41MjU5IDY3Ljc3OThDNjYuNDExNiA2Ny42NDg2IDY2LjM1NDUgNjcuNDkyIDY2LjM1NDUgNjcuMzEwMVpNNzAuNzg1MiA2Ni4yNVY3Nkg2OS42MDQ1VjY2LjI1SDcwLjc4NTJaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0PHBhdGggZD1cIk0yNCA4OS43NUMyMS45MyA4OS43NSAyMC4yNSA5MS40MyAyMC4yNSA5My41QzIwLjI1IDk1LjU3IDIxLjkzIDk3LjI1IDI0IDk3LjI1QzI2LjA3IDk3LjI1IDI3Ljc1IDk1LjU3IDI3Ljc1IDkzLjVDMjcuNzUgOTEuNDMgMjYuMDcgODkuNzUgMjQgODkuNzVaTTI0IDg2QzE5Ljg2IDg2IDE2LjUgODkuMzYgMTYuNSA5My41QzE2LjUgOTcuNjQgMTkuODYgMTAxIDI0IDEwMUMyOC4xNCAxMDEgMzEuNSA5Ny42NCAzMS41IDkzLjVDMzEuNSA4OS4zNiAyOC4xNCA4NiAyNCA4NlpNMjQgOTkuNUMyMC42ODUgOTkuNSAxOCA5Ni44MTUgMTggOTMuNUMxOCA5MC4xODUgMjAuNjg1IDg3LjUgMjQgODcuNUMyNy4zMTUgODcuNSAzMCA5MC4xODUgMzAgOTMuNUMzMCA5Ni44MTUgMjcuMzE1IDk5LjUgMjQgOTkuNVpcIiBmaWxsPVwiIzQyNzJGOVwiLz5cblx0XHQ8cGF0aCBkPVwiTTQwLjQ4MTQgOTQuMzc1NUgzOC4wMTIyVjkzLjM3ODlINDAuNDgxNEM0MC45NTk2IDkzLjM3ODkgNDEuMzQ2OCA5My4zMDI3IDQxLjY0MzEgOTMuMTUwNEM0MS45MzkzIDkyLjk5OCA0Mi4xNTUxIDkyLjc4NjUgNDIuMjkwNSA5Mi41MTU2QzQyLjQzMDIgOTIuMjQ0OCA0Mi41IDkxLjkzNTkgNDIuNSA5MS41ODg5QzQyLjUgOTEuMjcxNSA0Mi40MzAyIDkwLjk3MzEgNDIuMjkwNSA5MC42OTM4QzQyLjE1NTEgOTAuNDE0NiA0MS45MzkzIDkwLjE5MDMgNDEuNjQzMSA5MC4wMjFDNDEuMzQ2OCA4OS44NDc1IDQwLjk1OTYgODkuNzYwNyA0MC40ODE0IDg5Ljc2MDdIMzguMjk3OVY5OEgzNy4wNzI4Vjg4Ljc1NzhINDAuNDgxNEM0MS4xNzk3IDg4Ljc1NzggNDEuNzcgODguODc4NCA0Mi4yNTI0IDg5LjExOTZDNDIuNzM0OSA4OS4zNjA4IDQzLjEwMDkgODkuNjk1MSA0My4zNTA2IDkwLjEyMjZDNDMuNjAwMyA5MC41NDU3IDQzLjcyNTEgOTEuMDMwMyA0My43MjUxIDkxLjU3NjJDNDMuNzI1MSA5Mi4xNjg2IDQzLjYwMDMgOTIuNjc0MyA0My4zNTA2IDkzLjA5MzNDNDMuMTAwOSA5My41MTIyIDQyLjczNDkgOTMuODMxNyA0Mi4yNTI0IDk0LjA1MThDNDEuNzcgOTQuMjY3NiA0MS4xNzk3IDk0LjM3NTUgNDAuNDgxNCA5NC4zNzU1Wk00Ni4yNzA1IDg4LjI1Vjk4SDQ1LjA5NjJWODguMjVINDYuMjcwNVpNNDUuOTkxMiA5NC4zMDU3TDQ1LjUwMjQgOTQuMjg2NkM0NS41MDY3IDkzLjgxNjkgNDUuNTc2NSA5My4zODMxIDQ1LjcxMTkgOTIuOTg1NEM0NS44NDczIDkyLjU4MzMgNDYuMDM3OCA5Mi4yMzQyIDQ2LjI4MzIgOTEuOTM4QzQ2LjUyODYgOTEuNjQxOCA0Ni44MjA2IDkxLjQxMzIgNDcuMTU5MiA5MS4yNTI0QzQ3LjUwMiA5MS4wODc0IDQ3Ljg4MDcgOTEuMDA0OSA0OC4yOTU0IDkxLjAwNDlDNDguNjM0IDkxLjAwNDkgNDguOTM4NiA5MS4wNTE0IDQ5LjIwOTUgOTEuMTQ0NUM0OS40ODAzIDkxLjIzMzQgNDkuNzEwOSA5MS4zNzczIDQ5LjkwMTQgOTEuNTc2MkM1MC4wOTYgOTEuNzc1MSA1MC4yNDQxIDkyLjAzMzIgNTAuMzQ1NyA5Mi4zNTA2QzUwLjQ0NzMgOTIuNjYzNyA1MC40OTggOTMuMDQ2NyA1MC40OTggOTMuNDk5NVY5OEg0OS4zMTc0VjkzLjQ4NjhDNDkuMzE3NCA5My4xMjcxIDQ5LjI2NDUgOTIuODM5NCA0OS4xNTg3IDkyLjYyMzVDNDkuMDUyOSA5Mi40MDM1IDQ4Ljg5ODQgOTIuMjQ0OCA0OC42OTUzIDkyLjE0NzVDNDguNDkyMiA5Mi4wNDU5IDQ4LjI0MjUgOTEuOTk1MSA0Ny45NDYzIDkxLjk5NTFDNDcuNjU0MyA5MS45OTUxIDQ3LjM4NzcgOTIuMDU2NSA0Ny4xNDY1IDkyLjE3OTJDNDYuOTA5NSA5Mi4zMDE5IDQ2LjcwNDMgOTIuNDcxMiA0Ni41MzA4IDkyLjY4N0M0Ni4zNjE1IDkyLjkwMjggNDYuMjI4MiA5My4xNTA0IDQ2LjEzMDkgOTMuNDI5N0M0Ni4wMzc4IDkzLjcwNDggNDUuOTkxMiA5My45OTY3IDQ1Ljk5MTIgOTQuMzA1N1pNNTEuOTQ1MyA5NC42NDIxVjk0LjQ5NjFDNTEuOTQ1MyA5NC4wMDEgNTIuMDE3MyA5My41NDE4IDUyLjE2MTEgOTMuMTE4N0M1Mi4zMDUgOTIuNjkxMiA1Mi41MTI0IDkyLjMyMSA1Mi43ODMyIDkyLjAwNzhDNTMuMDU0IDkxLjY5MDQgNTMuMzgyIDkxLjQ0NSA1My43NjcxIDkxLjI3MTVDNTQuMTUyMiA5MS4wOTM4IDU0LjU4MzggOTEuMDA0OSA1NS4wNjIgOTEuMDA0OUM1NS41NDQ0IDkxLjAwNDkgNTUuOTc4MiA5MS4wOTM4IDU2LjM2MzMgOTEuMjcxNUM1Ni43NTI2IDkxLjQ0NSA1Ny4wODI3IDkxLjY5MDQgNTcuMzUzNSA5Mi4wMDc4QzU3LjYyODYgOTIuMzIxIDU3LjgzODEgOTIuNjkxMiA1Ny45ODE5IDkzLjExODdDNTguMTI1OCA5My41NDE4IDU4LjE5NzggOTQuMDAxIDU4LjE5NzggOTQuNDk2MVY5NC42NDIxQzU4LjE5NzggOTUuMTM3MiA1OC4xMjU4IDk1LjU5NjQgNTcuOTgxOSA5Ni4wMTk1QzU3LjgzODEgOTYuNDQyNyA1Ny42Mjg2IDk2LjgxMyA1Ny4zNTM1IDk3LjEzMDRDNTcuMDgyNyA5Ny40NDM1IDU2Ljc1NDcgOTcuNjg5IDU2LjM2OTYgOTcuODY2N0M1NS45ODg4IDk4LjA0MDIgNTUuNTU3MSA5OC4xMjcgNTUuMDc0NyA5OC4xMjdDNTQuNTkyMyA5OC4xMjcgNTQuMTU4NSA5OC4wNDAyIDUzLjc3MzQgOTcuODY2N0M1My4zODgzIDk3LjY4OSA1My4wNTgzIDk3LjQ0MzUgNTIuNzgzMiA5Ny4xMzA0QzUyLjUxMjQgOTYuODEzIDUyLjMwNSA5Ni40NDI3IDUyLjE2MTEgOTYuMDE5NUM1Mi4wMTczIDk1LjU5NjQgNTEuOTQ1MyA5NS4xMzcyIDUxLjk0NTMgOTQuNjQyMVpNNTMuMTE5NiA5NC40OTYxVjk0LjY0MjFDNTMuMTE5NiA5NC45ODQ5IDUzLjE1OTggOTUuMzA4NiA1My4yNDAyIDk1LjYxMzNDNTMuMzIwNiA5NS45MTM3IDUzLjQ0MTIgOTYuMTgwMyA1My42MDIxIDk2LjQxMzFDNTMuNzY3MSA5Ni42NDU4IDUzLjk3MjMgOTYuODI5OSA1NC4yMTc4IDk2Ljk2NTNDNTQuNDYzMiA5Ny4wOTY1IDU0Ljc0ODkgOTcuMTYyMSA1NS4wNzQ3IDk3LjE2MjFDNTUuMzk2MyA5Ny4xNjIxIDU1LjY3NzcgOTcuMDk2NSA1NS45MTg5IDk2Ljk2NTNDNTYuMTY0NCA5Ni44Mjk5IDU2LjM2NzUgOTYuNjQ1OCA1Ni41MjgzIDk2LjQxMzFDNTYuNjg5MSA5Ni4xODAzIDU2LjgwOTcgOTUuOTEzNyA1Ni44OTAxIDk1LjYxMzNDNTYuOTc0OCA5NS4zMDg2IDU3LjAxNzEgOTQuOTg0OSA1Ny4wMTcxIDk0LjY0MjFWOTQuNDk2MUM1Ny4wMTcxIDk0LjE1NzYgNTYuOTc0OCA5My44MzgxIDU2Ljg5MDEgOTMuNTM3NkM1Ni44MDk3IDkzLjIzMjkgNTYuNjg3IDkyLjk2NDIgNTYuNTIyIDkyLjczMTRDNTYuMzYxMiA5Mi40OTQ1IDU2LjE1OCA5Mi4zMDgzIDU1LjkxMjYgOTIuMTcyOUM1NS42NzE0IDkyLjAzNzQgNTUuMzg3OSA5MS45Njk3IDU1LjA2MiA5MS45Njk3QzU0Ljc0MDQgOTEuOTY5NyA1NC40NTY5IDkyLjAzNzQgNTQuMjExNCA5Mi4xNzI5QzUzLjk3MDIgOTIuMzA4MyA1My43NjcxIDkyLjQ5NDUgNTMuNjAyMSA5Mi43MzE0QzUzLjQ0MTIgOTIuOTY0MiA1My4zMjA2IDkzLjIzMjkgNTMuMjQwMiA5My41Mzc2QzUzLjE1OTggOTMuODM4MSA1My4xMTk2IDk0LjE1NzYgNTMuMTE5NiA5NC40OTYxWk02MC44NDQ3IDkyLjU5ODFWOThINTkuNjcwNFY5MS4xMzE4SDYwLjc4MTJMNjAuODQ0NyA5Mi41OTgxWk02MC41NjU0IDk0LjMwNTdMNjAuMDc2NyA5NC4yODY2QzYwLjA4MDkgOTMuODE2OSA2MC4xNTA3IDkzLjM4MzEgNjAuMjg2MSA5Mi45ODU0QzYwLjQyMTUgOTIuNTgzMyA2MC42MTIgOTIuMjM0MiA2MC44NTc0IDkxLjkzOEM2MS4xMDI5IDkxLjY0MTggNjEuMzk0OSA5MS40MTMyIDYxLjczMzQgOTEuMjUyNEM2Mi4wNzYyIDkxLjA4NzQgNjIuNDU0OSA5MS4wMDQ5IDYyLjg2OTYgOTEuMDA0OUM2My4yMDgyIDkxLjAwNDkgNjMuNTEyOSA5MS4wNTE0IDYzLjc4MzcgOTEuMTQ0NUM2NC4wNTQ1IDkxLjIzMzQgNjQuMjg1MiA5MS4zNzczIDY0LjQ3NTYgOTEuNTc2MkM2NC42NzAyIDkxLjc3NTEgNjQuODE4NCA5Mi4wMzMyIDY0LjkxOTkgOTIuMzUwNkM2NS4wMjE1IDkyLjY2MzcgNjUuMDcyMyA5My4wNDY3IDY1LjA3MjMgOTMuNDk5NVY5OEg2My44OTE2VjkzLjQ4NjhDNjMuODkxNiA5My4xMjcxIDYzLjgzODcgOTIuODM5NCA2My43MzI5IDkyLjYyMzVDNjMuNjI3MSA5Mi40MDM1IDYzLjQ3MjcgOTIuMjQ0OCA2My4yNjk1IDkyLjE0NzVDNjMuMDY2NCA5Mi4wNDU5IDYyLjgxNjcgOTEuOTk1MSA2Mi41MjA1IDkxLjk5NTFDNjIuMjI4NSA5MS45OTUxIDYxLjk2MTkgOTIuMDU2NSA2MS43MjA3IDkyLjE3OTJDNjEuNDgzNyA5Mi4zMDE5IDYxLjI3ODUgOTIuNDcxMiA2MS4xMDUgOTIuNjg3QzYwLjkzNTcgOTIuOTAyOCA2MC44MDI0IDkzLjE1MDQgNjAuNzA1MSA5My40Mjk3QzYwLjYxMiA5My43MDQ4IDYwLjU2NTQgOTMuOTk2NyA2MC41NjU0IDk0LjMwNTdaTTY5LjcwNjEgOTguMTI3QzY5LjIyNzkgOTguMTI3IDY4Ljc5NDEgOTguMDQ2NSA2OC40MDQ4IDk3Ljg4NTdDNjguMDE5NyA5Ny43MjA3IDY3LjY4NzUgOTcuNDkwMSA2Ny40MDgyIDk3LjE5MzhDNjcuMTMzMSA5Ni44OTc2IDY2LjkyMTUgOTYuNTQ2NCA2Ni43NzM0IDk2LjE0MDFDNjYuNjI1MyA5NS43MzM5IDY2LjU1MTMgOTUuMjg5NiA2Ni41NTEzIDk0LjgwNzFWOTQuNTQwNUM2Ni41NTEzIDkzLjk4MTkgNjYuNjMzOCA5My40ODQ3IDY2Ljc5ODggOTMuMDQ4OEM2Ni45NjM5IDkyLjYwODcgNjcuMTg4MiA5Mi4yMzYzIDY3LjQ3MTcgOTEuOTMxNkM2Ny43NTUyIDkxLjYyNyA2OC4wNzY4IDkxLjM5NjMgNjguNDM2NSA5MS4yMzk3QzY4Ljc5NjIgOTEuMDgzMiA2OS4xNjg2IDkxLjAwNDkgNjkuNTUzNyA5MS4wMDQ5QzcwLjA0NDYgOTEuMDA0OSA3MC40Njc4IDkxLjA4OTUgNzAuODIzMiA5MS4yNTg4QzcxLjE4MjkgOTEuNDI4MSA3MS40NzcxIDkxLjY2NSA3MS43MDU2IDkxLjk2OTdDNzEuOTM0MSA5Mi4yNzAyIDcyLjEwMzQgOTIuNjI1NyA3Mi4yMTM0IDkzLjAzNjFDNzIuMzIzNCA5My40NDI0IDcyLjM3ODQgOTMuODg2NyA3Mi4zNzg0IDk0LjM2OTFWOTQuODk2SDY3LjI0OTVWOTMuOTM3NUg3MS4yMDQxVjkzLjg0ODZDNzEuMTg3MiA5My41NDM5IDcxLjEyMzcgOTMuMjQ3NyA3MS4wMTM3IDkyLjk2QzcwLjkwNzkgOTIuNjcyMiA3MC43Mzg2IDkyLjQzNTIgNzAuNTA1OSA5Mi4yNDlDNzAuMjczMSA5Mi4wNjI4IDY5Ljk1NTcgOTEuOTY5NyA2OS41NTM3IDkxLjk2OTdDNjkuMjg3MSA5MS45Njk3IDY5LjA0MTcgOTIuMDI2OSA2OC44MTc0IDkyLjE0MTFDNjguNTkzMSA5Mi4yNTExIDY4LjQwMDYgOTIuNDE2MiA2OC4yMzk3IDkyLjYzNjJDNjguMDc4OSA5Mi44NTYzIDY3Ljk1NDEgOTMuMTI1IDY3Ljg2NTIgOTMuNDQyNEM2Ny43NzY0IDkzLjc1OTggNjcuNzMxOSA5NC4xMjU4IDY3LjczMTkgOTQuNTQwNVY5NC44MDcxQzY3LjczMTkgOTUuMTMzIDY3Ljc3NjQgOTUuNDM5OCA2Ny44NjUyIDk1LjcyNzVDNjcuOTU4MyA5Ni4wMTExIDY4LjA5MTYgOTYuMjYwNyA2OC4yNjUxIDk2LjQ3NjZDNjguNDQyOSA5Ni42OTI0IDY4LjY1NjYgOTYuODYxNyA2OC45MDYyIDk2Ljk4NDRDNjkuMTYwMiA5Ny4xMDcxIDY5LjQ0NzkgOTcuMTY4NSA2OS43Njk1IDk3LjE2ODVDNzAuMTg0MiA5Ny4xNjg1IDcwLjUzNTUgOTcuMDgzOCA3MC44MjMyIDk2LjkxNDZDNzEuMTExIDk2Ljc0NTMgNzEuMzYyOCA5Ni41MTg5IDcxLjU3ODYgOTYuMjM1NEw3Mi4yODk2IDk2LjgwMDNDNzIuMTQxNCA5Ny4wMjQ2IDcxLjk1MzEgOTcuMjM4MyA3MS43MjQ2IDk3LjQ0MTRDNzEuNDk2MSA5Ny42NDQ1IDcxLjIxNDcgOTcuODA5NiA3MC44ODA0IDk3LjkzNjVDNzAuNTUwMyA5OC4wNjM1IDcwLjE1ODkgOTguMTI3IDY5LjcwNjEgOTguMTI3WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHQ8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHByZXZpZXc7IiwiaW1wb3J0IHByZXZpZXcgZnJvbSAnLi9wcmV2aWV3JztcbmltcG9ydCB7IFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyJztcbmltcG9ydCBTZWxlY3RSYWRpb0NoZWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0UmFkaW9DaGVjayc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgVG9vbEJhckZpZWxkcyxcblx0ICAgICAgQmxvY2tMYWJlbCxcblx0ICAgICAgQmxvY2tEZXNjcmlwdGlvbixcblx0ICAgICAgQmxvY2tBZHZhbmNlZFZhbHVlLFxuXHQgICAgICBCbG9ja05hbWUsXG5cdCAgICAgIEJsb2NrUGxhY2Vob2xkZXIsXG5cdCAgICAgIEJsb2NrQWRkUHJldkJ1dHRvbixcblx0ICAgICAgQmxvY2tQcmV2QnV0dG9uTGFiZWwsXG5cdCAgICAgIEJsb2NrVmlzaWJpbGl0eSxcblx0ICAgICAgQmxvY2tDbGFzc05hbWUsXG5cdCAgICAgIEZpZWxkQ29udHJvbCxcblx0ICAgICAgU3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHMsXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVVuaXF1ZU5hbWVPbkR1cGxpY2F0ZSxcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xuXG5jb25zdCB7XG5cdCAgICAgIEluc3BlY3RvckNvbnRyb2xzLFxuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXG5cdCAgICAgIFBhbmVsQm9keSxcblx0ICAgICAgUmFuZ2VDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogQHBhcmFtIHByb3BzXG4gKiBAcmV0dXJucyB7SlNYLkVsZW1lbnRbXX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RFZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICAgIGlzU2VsZWN0ZWQsXG5cdFx0ICAgICAgZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH0sXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdHVzZVVuaXF1ZU5hbWVPbkR1cGxpY2F0ZSgpO1xuXG5cdGlmICggYXR0cmlidXRlcy5pc1ByZXZpZXcgKSB7XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9eyB7XG5cdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdH0gfT5cblx0XHRcdHsgcHJldmlldyB9XG5cdFx0PC9kaXY+O1xuXHR9XG5cblx0cmV0dXJuIDw+XG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+XG5cdFx0eyAhYXR0cmlidXRlcy5tdWx0aXBsZSAmJiA8U3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHMvPiB9XG5cdFx0eyBpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHQ+XG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdHZW5lcmFsJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfT5cblx0XHRcdFx0PEJsb2NrTGFiZWwvPlxuXHRcdFx0XHQ8QmxvY2tOYW1lLz5cblx0XHRcdFx0PEJsb2NrRGVzY3JpcHRpb24vPlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdDxCbG9ja0FkdmFuY2VkVmFsdWUvPlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdHRpdGxlPXsgX18oICdBZHZhbmNlZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdD5cblx0XHRcdFx0PEJsb2NrUGxhY2Vob2xkZXIvPlxuXHRcdFx0XHR7IChcblx0XHRcdFx0XHQhIWF0dHJpYnV0ZXMucGxhY2Vob2xkZXIubGVuZ3RoXG5cdFx0XHRcdCkgJiYgPFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnaXNfZGlzYWJsZWRfcGxhY2Vob2xkZXInICkgfVxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdEaXNhYmxlIHBsYWNlaG9sZGVyJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmlzX2Rpc2FibGVkX3BsYWNlaG9sZGVyIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IGlzX2Rpc2FibGVkX3BsYWNlaG9sZGVyID0+IHNldEF0dHJpYnV0ZXMoXG5cdFx0XHRcdFx0XHR7IGlzX2Rpc2FibGVkX3BsYWNlaG9sZGVyIH0gKSB9XG5cdFx0XHRcdC8+IH1cblx0XHRcdFx0PEJsb2NrQWRkUHJldkJ1dHRvbi8+XG5cdFx0XHRcdDxCbG9ja1ByZXZCdXR0b25MYWJlbC8+XG5cdFx0XHRcdDxCbG9ja1Zpc2liaWxpdHkvPlxuXHRcdFx0XHQ8QmxvY2tDbGFzc05hbWUvPlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4gfVxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlclxuXHRcdFx0XHRzY3JpcHREYXRhPXsgd2luZG93LkpldEZvcm1PcHRpb25GaWVsZERhdGEgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVjayB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0a2V5PVwibXVsdGlwbGVcIlxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdJcyBtdWx0aXBsZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5tdWx0aXBsZSB9XG5cdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnbXVsdGlwbGUnICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbXVsdGlwbGUgPT4gc2V0QXR0cmlidXRlcyggeyBtdWx0aXBsZSB9ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMubXVsdGlwbGUgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdSb3dzIGNvdW50JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tdWx0aXBsZV9zaXplID8/IDQgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbXVsdGlwbGVfc2l6ZSA9PiBzZXRBdHRyaWJ1dGVzKFxuXHRcdFx0XHRcdFx0eyBtdWx0aXBsZV9zaXplIH0gKSB9XG5cdFx0XHRcdFx0YWxsb3dSZXNldFxuXHRcdFx0XHRcdHJlc2V0RmFsbGJhY2tWYWx1ZT17IDQgfVxuXHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdG1heD17IDI1IH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0XHQ8RmllbGRDb250cm9sXG5cdFx0XHRcdFx0dHlwZT1cImN1c3RvbV9zZXR0aW5nc1wiXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvU2VsZWN0UmFkaW9DaGVjaz5cblx0XHQ8L2Rpdj5cblx0PC8+O1xufSIsImltcG9ydCBTZWxlY3RFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQHNoYXJlZC9ibG9ja3Mvc2VsZWN0L2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBjcmVhdGVCbG9jayB9ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZGVzY3JpcHRpb246IF9fKFxuXHRcdGBDcmVhdGVzIGEgZHJvcC1kb3duIGxpc3QsIHdoZXJlIHRoZSB1c2VyIGNhbiBjaG9vc2Ugb25lIG9wdGlvbi4gXG5BZGQgYXMgbWFueSBvcHRpb25zIGluIHRoZSBsaXN0IGFzIG5lZWRlZCBhcyB0aGUgbnVtYmVyIG9mIHRoZW0gaXMgbm90IGxpbWl0ZWQuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0KSxcblx0ZWRpdDogU2VsZWN0RWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGlzUHJldmlldzogdHJ1ZSxcblx0XHR9LFxuXHR9LFxuXHR0cmFuc2Zvcm1zOiB7XG5cdFx0dG86IFtcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogJ2Jsb2NrJyxcblx0XHRcdFx0YmxvY2tzOiBbICdqZXQtZm9ybXMvdGV4dC1maWVsZCcgXSxcblx0XHRcdFx0dHJhbnNmb3JtOiAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCAnamV0LWZvcm1zL3RleHQtZmllbGQnLCB7IC4uLmF0dHJpYnV0ZXMgfSApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcmlvcml0eTogMCxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRmcm9tOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdibG9jaycsXG5cdFx0XHRcdGJsb2NrczogW1xuXHRcdFx0XHRcdCdqZXQtZm9ybXMvY2hlY2tib3gtZmllbGQnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybXMvcmFkaW8tZmllbGQnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdHRyYW5zZm9ybTogKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jayggbmFtZSwgeyAuLi5hdHRyaWJ1dGVzIH0gKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpb3JpdHk6IDAsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3Ncbn07IiwiY29uc3QgcHJldmlldyA9IChcblx0PHN2ZyB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHZpZXdCb3g9XCIwIDAgMjk4IDE0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxyZWN0IHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgZmlsbD1cIiNGMUY1RjlcIi8+XG5cdFx0PHBhdGggZD1cIk0yMi4xNjQxIDI0LjgzNUgyMy40NzY2QzIzLjQwODIgMjUuNDYzOSAyMy4yMjgyIDI2LjAyNjcgMjIuOTM2NSAyNi41MjM0QzIyLjY0NDkgMjcuMDIwMiAyMi4yMzI0IDI3LjQxNDQgMjEuNjk5MiAyNy43MDYxQzIxLjE2NiAyNy45OTMyIDIwLjUwMDcgMjguMTM2NyAxOS43MDMxIDI4LjEzNjdDMTkuMTE5OCAyOC4xMzY3IDE4LjU4ODkgMjguMDI3MyAxOC4xMTA0IDI3LjgwODZDMTcuNjM2NCAyNy41ODk4IDE3LjIyODUgMjcuMjc5OSAxNi44ODY3IDI2Ljg3ODlDMTYuNTQ0OSAyNi40NzMzIDE2LjI4MDYgMjUuOTg4IDE2LjA5MzggMjUuNDIyOUMxNS45MTE1IDI0Ljg1MzIgMTUuODIwMyAyNC4yMTk3IDE1LjgyMDMgMjMuNTIyNVYyMi41MzEyQzE1LjgyMDMgMjEuODM0IDE1LjkxMTUgMjEuMjAyOCAxNi4wOTM4IDIwLjYzNzdDMTYuMjgwNiAyMC4wNjggMTYuNTQ3MiAxOS41ODA0IDE2Ljg5MzYgMTkuMTc0OEMxNy4yNDQ1IDE4Ljc2OTIgMTcuNjY2IDE4LjQ1NyAxOC4xNTgyIDE4LjIzODNDMTguNjUwNCAxOC4wMTk1IDE5LjIwNDEgMTcuOTEwMiAxOS44MTkzIDE3LjkxMDJDMjAuNTcxMyAxNy45MTAyIDIxLjIwNyAxOC4wNTE0IDIxLjcyNjYgMTguMzM0QzIyLjI0NjEgMTguNjE2NSAyMi42NDk0IDE5LjAwODUgMjIuOTM2NSAxOS41MDk4QzIzLjIyODIgMjAuMDA2NSAyMy40MDgyIDIwLjU4MyAyMy40NzY2IDIxLjIzOTNIMjIuMTY0MUMyMi4xMDAzIDIwLjc3NDQgMjEuOTgxOCAyMC4zNzU3IDIxLjgwODYgMjAuMDQzQzIxLjYzNTQgMTkuNzA1NyAyMS4zODkzIDE5LjQ0NiAyMS4wNzAzIDE5LjI2MzdDMjAuNzUxMyAxOS4wODE0IDIwLjMzNDMgMTguOTkwMiAxOS44MTkzIDE4Ljk5MDJDMTkuMzc3MyAxOC45OTAyIDE4Ljk4NzYgMTkuMDc0NSAxOC42NTA0IDE5LjI0MzJDMTguMzE3NyAxOS40MTE4IDE4LjAzNzQgMTkuNjUxIDE3LjgwOTYgMTkuOTYwOUMxNy41ODYzIDIwLjI3MDggMTcuNDE3NiAyMC42NDIzIDE3LjMwMzcgMjEuMDc1MkMxNy4xODk4IDIxLjUwODEgMTcuMTMyOCAyMS45ODg5IDE3LjEzMjggMjIuNTE3NlYyMy41MjI1QzE3LjEzMjggMjQuMDEwMSAxNy4xODI5IDI0LjQ2ODEgMTcuMjgzMiAyNC44OTY1QzE3LjM4OCAyNS4zMjQ5IDE3LjU0NTIgMjUuNzAwOCAxNy43NTQ5IDI2LjAyNDRDMTcuOTY0NSAyNi4zNDggMTguMjMxMSAyNi42MDMyIDE4LjU1NDcgMjYuNzlDMTguODc4MyAyNi45NzIzIDE5LjI2MTEgMjcuMDYzNSAxOS43MDMxIDI3LjA2MzVDMjAuMjYzNyAyNy4wNjM1IDIwLjcxMDMgMjYuOTc0NiAyMS4wNDMgMjYuNzk2OUMyMS4zNzU3IDI2LjYxOTEgMjEuNjI2MyAyNi4zNjM5IDIxLjc5NDkgMjYuMDMxMkMyMS45NjgxIDI1LjY5ODYgMjIuMDkxMSAyNS4yOTk4IDIyLjE2NDEgMjQuODM1Wk0yNi4zNDc3IDE3LjVWMjhIMjUuMDgzVjE3LjVIMjYuMzQ3N1pNMjYuMDQ2OSAyNC4wMjE1TDI1LjUyMDUgMjQuMDAxQzI1LjUyNTEgMjMuNDk1MSAyNS42MDAzIDIzLjAyOCAyNS43NDYxIDIyLjU5OTZDMjUuODkxOSAyMi4xNjY3IDI2LjA5NyAyMS43OTA3IDI2LjM2MTMgMjEuNDcxN0MyNi42MjU3IDIxLjE1MjcgMjYuOTQwMSAyMC45MDY2IDI3LjMwNDcgMjAuNzMzNEMyNy42NzM4IDIwLjU1NTcgMjguMDgxNyAyMC40NjY4IDI4LjUyODMgMjAuNDY2OEMyOC44OTI5IDIwLjQ2NjggMjkuMjIxIDIwLjUxNjkgMjkuNTEyNyAyMC42MTcyQzI5LjgwNDQgMjAuNzEyOSAzMC4wNTI3IDIwLjg2NzggMzAuMjU3OCAyMS4wODJDMzAuNDY3NCAyMS4yOTYyIDMwLjYyNyAyMS41NzQyIDMwLjczNjMgMjEuOTE2QzMwLjg0NTcgMjIuMjUzMyAzMC45MDA0IDIyLjY2NTcgMzAuOTAwNCAyMy4xNTMzVjI4SDI5LjYyODlWMjMuMTM5NkMyOS42Mjg5IDIyLjc1MjMgMjkuNTcxOSAyMi40NDI0IDI5LjQ1OCAyMi4yMUMyOS4zNDQxIDIxLjk3MyAyOS4xNzc3IDIxLjgwMjEgMjguOTU5IDIxLjY5NzNDMjguNzQwMiAyMS41ODc5IDI4LjQ3MTQgMjEuNTMzMiAyOC4xNTIzIDIxLjUzMzJDMjcuODM3OSAyMS41MzMyIDI3LjU1MDggMjEuNTk5MyAyNy4yOTEgMjEuNzMxNEMyNy4wMzU4IDIxLjg2MzYgMjYuODE0OCAyMi4wNDU5IDI2LjYyNzkgMjIuMjc4M0MyNi40NDU2IDIyLjUxMDcgMjYuMzAyMSAyMi43NzczIDI2LjE5NzMgMjMuMDc4MUMyNi4wOTcgMjMuMzc0MyAyNi4wNDY5IDIzLjY4ODggMjYuMDQ2OSAyNC4wMjE1Wk0zMi40NTkgMjQuMzgzOFYyNC4yMjY2QzMyLjQ1OSAyMy42OTM0IDMyLjUzNjUgMjMuMTk4OSAzMi42OTE0IDIyLjc0MzJDMzIuODQ2NCAyMi4yODI5IDMzLjA2OTcgMjEuODg0MSAzMy4zNjEzIDIxLjU0NjlDMzMuNjUzIDIxLjIwNTEgMzQuMDA2MiAyMC45NDA4IDM0LjQyMDkgMjAuNzUzOUMzNC44MzU2IDIwLjU2MjUgMzUuMzAwNSAyMC40NjY4IDM1LjgxNTQgMjAuNDY2OEMzNi4zMzUgMjAuNDY2OCAzNi44MDIxIDIwLjU2MjUgMzcuMjE2OCAyMC43NTM5QzM3LjYzNjEgMjAuOTQwOCAzNy45OTE1IDIxLjIwNTEgMzguMjgzMiAyMS41NDY5QzM4LjU3OTQgMjEuODg0MSAzOC44MDUgMjIuMjgyOSAzOC45NiAyMi43NDMyQzM5LjExNDkgMjMuMTk4OSAzOS4xOTI0IDIzLjY5MzQgMzkuMTkyNCAyNC4yMjY2VjI0LjM4MzhDMzkuMTkyNCAyNC45MTcgMzkuMTE0OSAyNS40MTE1IDM4Ljk2IDI1Ljg2NzJDMzguODA1IDI2LjMyMjkgMzguNTc5NCAyNi43MjE3IDM4LjI4MzIgMjcuMDYzNUMzNy45OTE1IDI3LjQwMDcgMzcuNjM4MyAyNy42NjUgMzcuMjIzNiAyNy44NTY0QzM2LjgxMzUgMjguMDQzMyAzNi4zNDg2IDI4LjEzNjcgMzUuODI5MSAyOC4xMzY3QzM1LjMwOTYgMjguMTM2NyAzNC44NDI0IDI4LjA0MzMgMzQuNDI3NyAyNy44NTY0QzM0LjAxMyAyNy42NjUgMzMuNjU3NiAyNy40MDA3IDMzLjM2MTMgMjcuMDYzNUMzMy4wNjk3IDI2LjcyMTcgMzIuODQ2NCAyNi4zMjI5IDMyLjY5MTQgMjUuODY3MkMzMi41MzY1IDI1LjQxMTUgMzIuNDU5IDI0LjkxNyAzMi40NTkgMjQuMzgzOFpNMzMuNzIzNiAyNC4yMjY2VjI0LjM4MzhDMzMuNzIzNiAyNC43NTI5IDMzLjc2NjkgMjUuMTAxNiAzMy44NTM1IDI1LjQyOTdDMzMuOTQwMSAyNS43NTMzIDM0LjA3IDI2LjA0MDQgMzQuMjQzMiAyNi4yOTFDMzQuNDIwOSAyNi41NDE3IDM0LjY0MTkgMjYuNzM5OSAzNC45MDYyIDI2Ljg4NTdDMzUuMTcwNiAyNy4wMjcgMzUuNDc4MiAyNy4wOTc3IDM1LjgyOTEgMjcuMDk3N0MzNi4xNzU1IDI3LjA5NzcgMzYuNDc4NSAyNy4wMjcgMzYuNzM4MyAyNi44ODU3QzM3LjAwMjYgMjYuNzM5OSAzNy4yMjE0IDI2LjU0MTcgMzcuMzk0NSAyNi4yOTFDMzcuNTY3NyAyNi4wNDA0IDM3LjY5NzYgMjUuNzUzMyAzNy43ODQyIDI1LjQyOTdDMzcuODc1MyAyNS4xMDE2IDM3LjkyMDkgMjQuNzUyOSAzNy45MjA5IDI0LjM4MzhWMjQuMjI2NkMzNy45MjA5IDIzLjg2MiAzNy44NzUzIDIzLjUxNzkgMzcuNzg0MiAyMy4xOTQzQzM3LjY5NzYgMjIuODY2MiAzNy41NjU0IDIyLjU3NjggMzcuMzg3NyAyMi4zMjYyQzM3LjIxNDUgMjIuMDcxIDM2Ljk5NTggMjEuODcwNCAzNi43MzE0IDIxLjcyNDZDMzYuNDcxNyAyMS41Nzg4IDM2LjE2NjMgMjEuNTA1OSAzNS44MTU0IDIxLjUwNTlDMzUuNDY5MSAyMS41MDU5IDM1LjE2MzcgMjEuNTc4OCAzNC44OTk0IDIxLjcyNDZDMzQuNjM5NiAyMS44NzA0IDM0LjQyMDkgMjIuMDcxIDM0LjI0MzIgMjIuMzI2MkMzNC4wNyAyMi41NzY4IDMzLjk0MDEgMjIuODY2MiAzMy44NTM1IDIzLjE5NDNDMzMuNzY2OSAyMy41MTc5IDMzLjcyMzYgMjMuODYyIDMzLjcyMzYgMjQuMjI2NlpNNDAuNDQzNCAyNC4zODM4VjI0LjIyNjZDNDAuNDQzNCAyMy42OTM0IDQwLjUyMDggMjMuMTk4OSA0MC42NzU4IDIyLjc0MzJDNDAuODMwNyAyMi4yODI5IDQxLjA1NCAyMS44ODQxIDQxLjM0NTcgMjEuNTQ2OUM0MS42Mzc0IDIxLjIwNTEgNDEuOTkwNiAyMC45NDA4IDQyLjQwNTMgMjAuNzUzOUM0Mi44MiAyMC41NjI1IDQzLjI4NDggMjAuNDY2OCA0My43OTk4IDIwLjQ2NjhDNDQuMzE5MyAyMC40NjY4IDQ0Ljc4NjUgMjAuNTYyNSA0NS4yMDEyIDIwLjc1MzlDNDUuNjIwNCAyMC45NDA4IDQ1Ljk3NTkgMjEuMjA1MSA0Ni4yNjc2IDIxLjU0NjlDNDYuNTYzOCAyMS44ODQxIDQ2Ljc4OTQgMjIuMjgyOSA0Ni45NDQzIDIyLjc0MzJDNDcuMDk5MyAyMy4xOTg5IDQ3LjE3NjggMjMuNjkzNCA0Ny4xNzY4IDI0LjIyNjZWMjQuMzgzOEM0Ny4xNzY4IDI0LjkxNyA0Ny4wOTkzIDI1LjQxMTUgNDYuOTQ0MyAyNS44NjcyQzQ2Ljc4OTQgMjYuMzIyOSA0Ni41NjM4IDI2LjcyMTcgNDYuMjY3NiAyNy4wNjM1QzQ1Ljk3NTkgMjcuNDAwNyA0NS42MjI3IDI3LjY2NSA0NS4yMDggMjcuODU2NEM0NC43OTc5IDI4LjA0MzMgNDQuMzMzIDI4LjEzNjcgNDMuODEzNSAyOC4xMzY3QzQzLjI5MzkgMjguMTM2NyA0Mi44MjY4IDI4LjA0MzMgNDIuNDEyMSAyNy44NTY0QzQxLjk5NzQgMjcuNjY1IDQxLjY0MTkgMjcuNDAwNyA0MS4zNDU3IDI3LjA2MzVDNDEuMDU0IDI2LjcyMTcgNDAuODMwNyAyNi4zMjI5IDQwLjY3NTggMjUuODY3MkM0MC41MjA4IDI1LjQxMTUgNDAuNDQzNCAyNC45MTcgNDAuNDQzNCAyNC4zODM4Wk00MS43MDggMjQuMjI2NlYyNC4zODM4QzQxLjcwOCAyNC43NTI5IDQxLjc1MTMgMjUuMTAxNiA0MS44Mzc5IDI1LjQyOTdDNDEuOTI0NSAyNS43NTMzIDQyLjA1NDQgMjYuMDQwNCA0Mi4yMjc1IDI2LjI5MUM0Mi40MDUzIDI2LjU0MTcgNDIuNjI2MyAyNi43Mzk5IDQyLjg5MDYgMjYuODg1N0M0My4xNTQ5IDI3LjAyNyA0My40NjI2IDI3LjA5NzcgNDMuODEzNSAyNy4wOTc3QzQ0LjE1OTggMjcuMDk3NyA0NC40NjI5IDI3LjAyNyA0NC43MjI3IDI2Ljg4NTdDNDQuOTg3IDI2LjczOTkgNDUuMjA1NyAyNi41NDE3IDQ1LjM3ODkgMjYuMjkxQzQ1LjU1MjEgMjYuMDQwNCA0NS42ODIgMjUuNzUzMyA0NS43Njg2IDI1LjQyOTdDNDUuODU5NyAyNS4xMDE2IDQ1LjkwNTMgMjQuNzUyOSA0NS45MDUzIDI0LjM4MzhWMjQuMjI2NkM0NS45MDUzIDIzLjg2MiA0NS44NTk3IDIzLjUxNzkgNDUuNzY4NiAyMy4xOTQzQzQ1LjY4MiAyMi44NjYyIDQ1LjU0OTggMjIuNTc2OCA0NS4zNzIxIDIyLjMyNjJDNDUuMTk4OSAyMi4wNzEgNDQuOTgwMSAyMS44NzA0IDQ0LjcxNTggMjEuNzI0NkM0NC40NTYxIDIxLjU3ODggNDQuMTUwNyAyMS41MDU5IDQzLjc5OTggMjEuNTA1OUM0My40NTM1IDIxLjUwNTkgNDMuMTQ4MSAyMS41Nzg4IDQyLjg4MzggMjEuNzI0NkM0Mi42MjQgMjEuODcwNCA0Mi40MDUzIDIyLjA3MSA0Mi4yMjc1IDIyLjMyNjJDNDIuMDU0NCAyMi41NzY4IDQxLjkyNDUgMjIuODY2MiA0MS44Mzc5IDIzLjE5NDNDNDEuNzUxMyAyMy41MTc5IDQxLjcwOCAyMy44NjIgNDEuNzA4IDI0LjIyNjZaTTUzLjA2OTMgMjYuMDM4MUM1My4wNjkzIDI1Ljg1NTggNTMuMDI4MyAyNS42ODcyIDUyLjk0NjMgMjUuNTMyMkM1Mi44Njg4IDI1LjM3MjcgNTIuNzA3IDI1LjIyOTIgNTIuNDYwOSAyNS4xMDE2QzUyLjIxOTQgMjQuOTY5NCA1MS44NTQ4IDI0Ljg1NTUgNTEuMzY3MiAyNC43NTk4QzUwLjk1NyAyNC42NzMyIDUwLjU4NTYgMjQuNTcwNiA1MC4yNTI5IDI0LjQ1MjFDNDkuOTI0OCAyNC4zMzM3IDQ5LjY0NDUgMjQuMTkwMSA0OS40MTIxIDI0LjAyMTVDNDkuMTg0MiAyMy44NTI5IDQ5LjAwODggMjMuNjU0NiA0OC44ODU3IDIzLjQyNjhDNDguNzYyNyAyMy4xOTg5IDQ4LjcwMTIgMjIuOTMyMyA0OC43MDEyIDIyLjYyN0M0OC43MDEyIDIyLjMzNTMgNDguNzY1IDIyLjA1OTYgNDguODkyNiAyMS43OTk4QzQ5LjAyNDcgMjEuNTQgNDkuMjA5MyAyMS4zMDk5IDQ5LjQ0NjMgMjEuMTA5NEM0OS42ODc4IDIwLjkwODkgNDkuOTc3MiAyMC43NTE2IDUwLjMxNDUgMjAuNjM3N0M1MC42NTE3IDIwLjUyMzggNTEuMDI3NyAyMC40NjY4IDUxLjQ0MjQgMjAuNDY2OEM1Mi4wMzQ4IDIwLjQ2NjggNTIuNTQwNyAyMC41NzE2IDUyLjk2IDIwLjc4MTJDNTMuMzc5MiAyMC45OTA5IDUzLjcwMDUgMjEuMjcxMiA1My45MjM4IDIxLjYyMjFDNTQuMTQ3MSAyMS45Njg0IDU0LjI1ODggMjIuMzUzNSA1NC4yNTg4IDIyLjc3NzNINTIuOTk0MUM1Mi45OTQxIDIyLjU3MjMgNTIuOTMyNiAyMi4zNzQgNTIuODA5NiAyMi4xODI2QzUyLjY5MTEgMjEuOTg2NyA1Mi41MTU2IDIxLjgyNDkgNTIuMjgzMiAyMS42OTczQzUyLjA1NTMgMjEuNTY5NyA1MS43NzUxIDIxLjUwNTkgNTEuNDQyNCAyMS41MDU5QzUxLjA5MTUgMjEuNTA1OSA1MC44MDY2IDIxLjU2MDUgNTAuNTg3OSAyMS42Njk5QzUwLjM3MzcgMjEuNzc0NyA1MC4yMTY1IDIxLjkwOTIgNTAuMTE2MiAyMi4wNzMyQzUwLjAyMDUgMjIuMjM3MyA0OS45NzI3IDIyLjQxMDUgNDkuOTcyNyAyMi41OTI4QzQ5Ljk3MjcgMjIuNzI5NSA0OS45OTU0IDIyLjg1MjUgNTAuMDQxIDIyLjk2MTlDNTAuMDkxMSAyMy4wNjY3IDUwLjE3NzcgMjMuMTY0NyA1MC4zMDA4IDIzLjI1NTlDNTAuNDIzOCAyMy4zNDI0IDUwLjU5NyAyMy40MjQ1IDUwLjgyMDMgMjMuNTAyQzUxLjA0MzYgMjMuNTc5NCA1MS4zMjg1IDIzLjY1NjkgNTEuNjc0OCAyMy43MzQ0QzUyLjI4MDkgMjMuODcxMSA1Mi43Nzk5IDI0LjAzNTIgNTMuMTcxOSAyNC4yMjY2QzUzLjU2MzggMjQuNDE4IDUzLjg1NTUgMjQuNjUyNyA1NC4wNDY5IDI0LjkzMDdDNTQuMjM4MyAyNS4yMDg3IDU0LjMzNCAyNS41NDU5IDU0LjMzNCAyNS45NDI0QzU0LjMzNCAyNi4yNjYgNTQuMjY1NiAyNi41NjIyIDU0LjEyODkgMjYuODMxMUM1My45OTY3IDI3LjA5OTkgNTMuODAzMSAyNy4zMzI0IDUzLjU0NzkgMjcuNTI4M0M1My4yOTcyIDI3LjcxOTcgNTIuOTk2NCAyNy44NzAxIDUyLjY0NTUgMjcuOTc5NUM1Mi4yOTkyIDI4LjA4NDMgNTEuOTA5NSAyOC4xMzY3IDUxLjQ3NjYgMjguMTM2N0M1MC44MjQ5IDI4LjEzNjcgNTAuMjczNCAyOC4wMjA1IDQ5LjgyMjMgMjcuNzg4MUM0OS4zNzExIDI3LjU1NTcgNDkuMDI5MyAyNy4yNTQ5IDQ4Ljc5NjkgMjYuODg1N0M0OC41NjQ1IDI2LjUxNjYgNDguNDQ4MiAyNi4xMjcgNDguNDQ4MiAyNS43MTY4SDQ5LjcxOTdDNDkuNzM4IDI2LjA2MzIgNDkuODM4MiAyNi4zMzg5IDUwLjAyMDUgMjYuNTQzOUM1MC4yMDI4IDI2Ljc0NDUgNTAuNDI2MSAyNi44ODggNTAuNjkwNCAyNi45NzQ2QzUwLjk1NDggMjcuMDU2NiA1MS4yMTY4IDI3LjA5NzcgNTEuNDc2NiAyNy4wOTc3QzUxLjgyMjkgMjcuMDk3NyA1Mi4xMTIzIDI3LjA1MjEgNTIuMzQ0NyAyNi45NjA5QzUyLjU4MTcgMjYuODY5OCA1Mi43NjE3IDI2Ljc0NDUgNTIuODg0OCAyNi41ODVDNTMuMDA3OCAyNi40MjU1IDUzLjA2OTMgMjYuMjQzMiA1My4wNjkzIDI2LjAzODFaTTU5LjA2NDUgMjguMTM2N0M1OC41NDk1IDI4LjEzNjcgNTguMDgyNCAyOC4wNTAxIDU3LjY2MzEgMjcuODc3QzU3LjI0ODQgMjcuNjk5MiA1Ni44OTA2IDI3LjQ1MDggNTYuNTg5OCAyNy4xMzE4QzU2LjI5MzYgMjYuODEyOCA1Ni4wNjU4IDI2LjQzNDYgNTUuOTA2MiAyNS45OTcxQzU1Ljc0NjcgMjUuNTU5NiA1NS42NjcgMjUuMDgxMSA1NS42NjcgMjQuNTYxNVYyNC4yNzQ0QzU1LjY2NyAyMy42NzI5IDU1Ljc1NTkgMjMuMTM3NCA1NS45MzM2IDIyLjY2OEM1Ni4xMTEzIDIyLjE5NCA1Ni4zNTI5IDIxLjc5MyA1Ni42NTgyIDIxLjQ2NDhDNTYuOTYzNSAyMS4xMzY3IDU3LjMwOTkgMjAuODg4MyA1Ny42OTczIDIwLjcxOTdDNTguMDg0NiAyMC41NTExIDU4LjQ4NTcgMjAuNDY2OCA1OC45MDA0IDIwLjQ2NjhDNTkuNDI5IDIwLjQ2NjggNTkuODg0OCAyMC41NTc5IDYwLjI2NzYgMjAuNzQwMkM2MC42NTQ5IDIwLjkyMjUgNjAuOTcxNyAyMS4xNzc3IDYxLjIxNzggMjEuNTA1OUM2MS40NjM5IDIxLjgyOTQgNjEuNjQ2MiAyMi4yMTIyIDYxLjc2NDYgMjIuNjU0M0M2MS44ODMxIDIzLjA5MTggNjEuOTQyNCAyMy41NzAzIDYxLjk0MjQgMjQuMDg5OFYyNC42NTcySDU2LjQxODlWMjMuNjI1SDYwLjY3NzdWMjMuNTI5M0M2MC42NTk1IDIzLjIwMTIgNjAuNTkxMSAyMi44ODIyIDYwLjQ3MjcgMjIuNTcyM0M2MC4zNTg3IDIyLjI2MjQgNjAuMTc2NCAyMi4wMDcyIDU5LjkyNTggMjEuODA2NkM1OS42NzUxIDIxLjYwNjEgNTkuMzMzMyAyMS41MDU5IDU4LjkwMDQgMjEuNTA1OUM1OC42MTMzIDIxLjUwNTkgNTguMzQ5IDIxLjU2NzQgNTguMTA3NCAyMS42OTA0QzU3Ljg2NTkgMjEuODA4OSA1Ny42NTg1IDIxLjk4NjcgNTcuNDg1NCAyMi4yMjM2QzU3LjMxMjIgMjIuNDYwNiA1Ny4xNzc3IDIyLjc1IDU3LjA4MiAyMy4wOTE4QzU2Ljk4NjMgMjMuNDMzNiA1Ni45Mzg1IDIzLjgyNzggNTYuOTM4NSAyNC4yNzQ0VjI0LjU2MTVDNTYuOTM4NSAyNC45MTI0IDU2Ljk4NjMgMjUuMjQyOCA1Ny4wODIgMjUuNTUyN0M1Ny4xODIzIDI1Ljg1ODEgNTcuMzI1OCAyNi4xMjcgNTcuNTEyNyAyNi4zNTk0QzU3LjcwNDEgMjYuNTkxOCA1Ny45MzQyIDI2Ljc3NDEgNTguMjAzMSAyNi45MDYyQzU4LjQ3NjYgMjcuMDM4NCA1OC43ODY1IDI3LjEwNDUgNTkuMTMyOCAyNy4xMDQ1QzU5LjU3OTQgMjcuMTA0NSA1OS45NTc3IDI3LjAxMzMgNjAuMjY3NiAyNi44MzExQzYwLjU3NzUgMjYuNjQ4OCA2MC44NDg2IDI2LjQwNDkgNjEuMDgxMSAyNi4wOTk2TDYxLjg0NjcgMjYuNzA4QzYxLjY4NzIgMjYuOTQ5NSA2MS40ODQ0IDI3LjE3OTcgNjEuMjM4MyAyNy4zOTg0QzYwLjk5MjIgMjcuNjE3MiA2MC42ODkxIDI3Ljc5NDkgNjAuMzI5MSAyNy45MzE2QzU5Ljk3MzYgMjguMDY4NCA1OS41NTIxIDI4LjEzNjcgNTkuMDY0NSAyOC4xMzY3Wk02OC45Njk3IDI3LjIzNDRMNzEuMDI3MyAyMC42MDM1SDcyLjM4MDlMNjkuNDE0MSAyOS4xNDE2QzY5LjM0NTcgMjkuMzIzOSA2OS4yNTQ2IDI5LjUxOTkgNjkuMTQwNiAyOS43Mjk1QzY5LjAzMTIgMjkuOTQzNyA2OC44OSAzMC4xNDY1IDY4LjcxNjggMzAuMzM3OUM2OC41NDM2IDMwLjUyOTMgNjguMzM0IDMwLjY4NDIgNjguMDg3OSAzMC44MDI3QzY3Ljg0NjQgMzAuOTI1OCA2Ny41NTcgMzAuOTg3MyA2Ny4yMTk3IDMwLjk4NzNDNjcuMTE5NSAzMC45ODczIDY2Ljk5MTkgMzAuOTczNiA2Ni44MzY5IDMwLjk0NjNDNjYuNjgyIDMwLjkxODkgNjYuNTcyNiAzMC44OTYyIDY2LjUwODggMzAuODc3OUw2Ni41MDIgMjkuODUyNUM2Ni41Mzg0IDI5Ljg1NzEgNjYuNTk1NCAyOS44NjE3IDY2LjY3MjkgMjkuODY2MkM2Ni43NTQ5IDI5Ljg3NTMgNjYuODExOCAyOS44Nzk5IDY2Ljg0MzggMjkuODc5OUM2Ny4xMzA5IDI5Ljg3OTkgNjcuMzc0NyAyOS44NDExIDY3LjU3NTIgMjkuNzYzN0M2Ny43NzU3IDI5LjY5MDggNjcuOTQ0MyAyOS41NjU0IDY4LjA4MTEgMjkuMzg3N0M2OC4yMjIzIDI5LjIxNDUgNjguMzQzMSAyOC45NzUzIDY4LjQ0MzQgMjguNjY5OUw2OC45Njk3IDI3LjIzNDRaTTY3LjQ1OSAyMC42MDM1TDY5LjM3OTkgMjYuMzQ1N0w2OS43MDggMjcuNjc4N0w2OC43OTg4IDI4LjE0MzZMNjYuMDc4MSAyMC42MDM1SDY3LjQ1OVpNNzMuMDc4MSAyNC4zODM4VjI0LjIyNjZDNzMuMDc4MSAyMy42OTM0IDczLjE1NTYgMjMuMTk4OSA3My4zMTA1IDIyLjc0MzJDNzMuNDY1NSAyMi4yODI5IDczLjY4ODggMjEuODg0MSA3My45ODA1IDIxLjU0NjlDNzQuMjcyMSAyMS4yMDUxIDc0LjYyNTMgMjAuOTQwOCA3NS4wNCAyMC43NTM5Qzc1LjQ1NDggMjAuNTYyNSA3NS45MTk2IDIwLjQ2NjggNzYuNDM0NiAyMC40NjY4Qzc2Ljk1NDEgMjAuNDY2OCA3Ny40MjEyIDIwLjU2MjUgNzcuODM1OSAyMC43NTM5Qzc4LjI1NTIgMjAuOTQwOCA3OC42MTA3IDIxLjIwNTEgNzguOTAyMyAyMS41NDY5Qzc5LjE5ODYgMjEuODg0MSA3OS40MjQyIDIyLjI4MjkgNzkuNTc5MSAyMi43NDMyQzc5LjczNCAyMy4xOTg5IDc5LjgxMTUgMjMuNjkzNCA3OS44MTE1IDI0LjIyNjZWMjQuMzgzOEM3OS44MTE1IDI0LjkxNyA3OS43MzQgMjUuNDExNSA3OS41NzkxIDI1Ljg2NzJDNzkuNDI0MiAyNi4zMjI5IDc5LjE5ODYgMjYuNzIxNyA3OC45MDIzIDI3LjA2MzVDNzguNjEwNyAyNy40MDA3IDc4LjI1NzUgMjcuNjY1IDc3Ljg0MjggMjcuODU2NEM3Ny40MzI2IDI4LjA0MzMgNzYuOTY3OCAyOC4xMzY3IDc2LjQ0ODIgMjguMTM2N0M3NS45Mjg3IDI4LjEzNjcgNzUuNDYxNiAyOC4wNDMzIDc1LjA0NjkgMjcuODU2NEM3NC42MzIyIDI3LjY2NSA3NC4yNzY3IDI3LjQwMDcgNzMuOTgwNSAyNy4wNjM1QzczLjY4ODggMjYuNzIxNyA3My40NjU1IDI2LjMyMjkgNzMuMzEwNSAyNS44NjcyQzczLjE1NTYgMjUuNDExNSA3My4wNzgxIDI0LjkxNyA3My4wNzgxIDI0LjM4MzhaTTc0LjM0MjggMjQuMjI2NlYyNC4zODM4Qzc0LjM0MjggMjQuNzUyOSA3NC4zODYxIDI1LjEwMTYgNzQuNDcyNyAyNS40Mjk3Qzc0LjU1OTIgMjUuNzUzMyA3NC42ODkxIDI2LjA0MDQgNzQuODYyMyAyNi4yOTFDNzUuMDQgMjYuNTQxNyA3NS4yNjExIDI2LjczOTkgNzUuNTI1NCAyNi44ODU3Qzc1Ljc4OTcgMjcuMDI3IDc2LjA5NzMgMjcuMDk3NyA3Ni40NDgyIDI3LjA5NzdDNzYuNzk0NiAyNy4wOTc3IDc3LjA5NzcgMjcuMDI3IDc3LjM1NzQgMjYuODg1N0M3Ny42MjE3IDI2LjczOTkgNzcuODQwNSAyNi41NDE3IDc4LjAxMzcgMjYuMjkxQzc4LjE4NjggMjYuMDQwNCA3OC4zMTY3IDI1Ljc1MzMgNzguNDAzMyAyNS40Mjk3Qzc4LjQ5NDUgMjUuMTAxNiA3OC41NCAyNC43NTI5IDc4LjU0IDI0LjM4MzhWMjQuMjI2NkM3OC41NCAyMy44NjIgNzguNDk0NSAyMy41MTc5IDc4LjQwMzMgMjMuMTk0M0M3OC4zMTY3IDIyLjg2NjIgNzguMTg0NiAyMi41NzY4IDc4LjAwNjggMjIuMzI2MkM3Ny44MzM3IDIyLjA3MSA3Ny42MTQ5IDIxLjg3MDQgNzcuMzUwNiAyMS43MjQ2Qzc3LjA5MDggMjEuNTc4OCA3Ni43ODU1IDIxLjUwNTkgNzYuNDM0NiAyMS41MDU5Qzc2LjA4ODIgMjEuNTA1OSA3NS43ODI5IDIxLjU3ODggNzUuNTE4NiAyMS43MjQ2Qzc1LjI1ODggMjEuODcwNCA3NS4wNCAyMi4wNzEgNzQuODYyMyAyMi4zMjYyQzc0LjY4OTEgMjIuNTc2OCA3NC41NTkyIDIyLjg2NjIgNzQuNDcyNyAyMy4xOTQzQzc0LjM4NjEgMjMuNTE3OSA3NC4zNDI4IDIzLjg2MiA3NC4zNDI4IDI0LjIyNjZaTTg1LjkyMjkgMjYuMjkxVjIwLjYwMzVIODcuMTk0M1YyOEg4NS45ODQ0TDg1LjkyMjkgMjYuMjkxWk04Ni4xNjIxIDI0LjczMjRMODYuNjg4NSAyNC43MTg4Qzg2LjY4ODUgMjUuMjEwOSA4Ni42MzYxIDI1LjY2NjcgODYuNTMxMiAyNi4wODU5Qzg2LjQzMSAyNi41MDA3IDg2LjI2NjkgMjYuODYwNyA4Ni4wMzkxIDI3LjE2NkM4NS44MTEyIDI3LjQ3MTQgODUuNTEyNyAyNy43MTA2IDg1LjE0MzYgMjcuODgzOEM4NC43NzQ0IDI4LjA1MjQgODQuMzI1NSAyOC4xMzY3IDgzLjc5NjkgMjguMTM2N0M4My40MzY4IDI4LjEzNjcgODMuMTA2NCAyOC4wODQzIDgyLjgwNTcgMjcuOTc5NUM4Mi41MDk0IDI3Ljg3NDcgODIuMjU0MiAyNy43MTI5IDgyLjA0IDI3LjQ5NDFDODEuODI1OCAyNy4yNzU0IDgxLjY1OTUgMjYuOTkwNiA4MS41NDEgMjYuNjM5NkM4MS40MjcxIDI2LjI4ODcgODEuMzcwMSAyNS44NjcyIDgxLjM3MDEgMjUuMzc1VjIwLjYwMzVIODIuNjM0OFYyNS4zODg3QzgyLjYzNDggMjUuNzIxNCA4Mi42NzEyIDI1Ljk5NzEgODIuNzQ0MSAyNi4yMTU4QzgyLjgyMTYgMjYuNDMgODIuOTI0MiAyNi42MDA5IDgzLjA1MTggMjYuNzI4NUM4My4xODM5IDI2Ljg1MTYgODMuMzI5OCAyNi45MzgyIDgzLjQ4OTMgMjYuOTg4M0M4My42NTMzIDI3LjAzODQgODMuODIxOSAyNy4wNjM1IDgzLjk5NTEgMjcuMDYzNUM4NC41MzI5IDI3LjA2MzUgODQuOTU5IDI2Ljk2MDkgODUuMjczNCAyNi43NTU5Qzg1LjU4NzkgMjYuNTQ2MiA4NS44MTM1IDI2LjI2NiA4NS45NTAyIDI1LjkxNUM4Ni4wOTE1IDI1LjU1OTYgODYuMTYyMSAyNS4xNjU0IDg2LjE2MjEgMjQuNzMyNFpNOTAuMzg2NyAyMS43NjU2VjI4SDg5LjEyMjFWMjAuNjAzNUg5MC4zNTI1TDkwLjM4NjcgMjEuNzY1NlpNOTIuNjk3MyAyMC41NjI1TDkyLjY5MDQgMjEuNzM4M0M5Mi41ODU2IDIxLjcxNTUgOTIuNDg1NCAyMS43MDE4IDkyLjM4OTYgMjEuNjk3M0M5Mi4yOTg1IDIxLjY4ODIgOTIuMTkzNyAyMS42ODM2IDkyLjA3NTIgMjEuNjgzNkM5MS43ODM1IDIxLjY4MzYgOTEuNTI2IDIxLjcyOTIgOTEuMzAyNyAyMS44MjAzQzkxLjA3OTQgMjEuOTExNSA5MC44OTAzIDIyLjAzOTEgOTAuNzM1NCAyMi4yMDMxQzkwLjU4MDQgMjIuMzY3MiA5MC40NTc0IDIyLjU2MzIgOTAuMzY2MiAyMi43OTFDOTAuMjc5NiAyMy4wMTQzIDkwLjIyMjcgMjMuMjYwNCA5MC4xOTUzIDIzLjUyOTNMODkuODM5OCAyMy43MzQ0Qzg5LjgzOTggMjMuMjg3OCA4OS44ODMxIDIyLjg2ODUgODkuOTY5NyAyMi40NzY2QzkwLjA2MDkgMjIuMDg0NiA5MC4xOTk5IDIxLjczODMgOTAuMzg2NyAyMS40Mzc1QzkwLjU3MzYgMjEuMTMyMiA5MC44MTA1IDIwLjg5NTIgOTEuMDk3NyAyMC43MjY2QzkxLjM4OTMgMjAuNTUzNCA5MS43MzU3IDIwLjQ2NjggOTIuMTM2NyAyMC40NjY4QzkyLjIyNzkgMjAuNDY2OCA5Mi4zMzI3IDIwLjQ3ODIgOTIuNDUxMiAyMC41MDFDOTIuNTY5NyAyMC41MTkyIDkyLjY1MTcgMjAuNTM5NyA5Mi42OTczIDIwLjU2MjVaTTEwMS42NDYgMjYuMDM4MUMxMDEuNjQ2IDI1Ljg1NTggMTAxLjYwNCAyNS42ODcyIDEwMS41MjIgMjUuNTMyMkMxMDEuNDQ1IDI1LjM3MjcgMTAxLjI4MyAyNS4yMjkyIDEwMS4wMzcgMjUuMTAxNkMxMDAuNzk2IDI0Ljk2OTQgMTAwLjQzMSAyNC44NTU1IDk5Ljk0MzQgMjQuNzU5OEM5OS41MzMyIDI0LjY3MzIgOTkuMTYxOCAyNC41NzA2IDk4LjgyOTEgMjQuNDUyMUM5OC41MDEgMjQuMzMzNyA5OC4yMjA3IDI0LjE5MDEgOTcuOTg4MyAyNC4wMjE1Qzk3Ljc2MDQgMjMuODUyOSA5Ny41ODUgMjMuNjU0NiA5Ny40NjE5IDIzLjQyNjhDOTcuMzM4OSAyMy4xOTg5IDk3LjI3NzMgMjIuOTMyMyA5Ny4yNzczIDIyLjYyN0M5Ny4yNzczIDIyLjMzNTMgOTcuMzQxMSAyMi4wNTk2IDk3LjQ2ODggMjEuNzk5OEM5Ny42MDA5IDIxLjU0IDk3Ljc4NTUgMjEuMzA5OSA5OC4wMjI1IDIxLjEwOTRDOTguMjY0IDIwLjkwODkgOTguNTUzNCAyMC43NTE2IDk4Ljg5MDYgMjAuNjM3N0M5OS4yMjc5IDIwLjUyMzggOTkuNjAzOCAyMC40NjY4IDEwMC4wMTkgMjAuNDY2OEMxMDAuNjExIDIwLjQ2NjggMTAxLjExNyAyMC41NzE2IDEwMS41MzYgMjAuNzgxMkMxMDEuOTU1IDIwLjk5MDkgMTAyLjI3NyAyMS4yNzEyIDEwMi41IDIxLjYyMjFDMTAyLjcyMyAyMS45Njg0IDEwMi44MzUgMjIuMzUzNSAxMDIuODM1IDIyLjc3NzNIMTAxLjU3QzEwMS41NyAyMi41NzIzIDEwMS41MDkgMjIuMzc0IDEwMS4zODYgMjIuMTgyNkMxMDEuMjY3IDIxLjk4NjcgMTAxLjA5MiAyMS44MjQ5IDEwMC44NTkgMjEuNjk3M0MxMDAuNjMyIDIxLjU2OTcgMTAwLjM1MSAyMS41MDU5IDEwMC4wMTkgMjEuNTA1OUM5OS42Njc2IDIxLjUwNTkgOTkuMzgyOCAyMS41NjA1IDk5LjE2NDEgMjEuNjY5OUM5OC45NDk5IDIxLjc3NDcgOTguNzkyNiAyMS45MDkyIDk4LjY5MjQgMjIuMDczMkM5OC41OTY3IDIyLjIzNzMgOTguNTQ4OCAyMi40MTA1IDk4LjU0ODggMjIuNTkyOEM5OC41NDg4IDIyLjcyOTUgOTguNTcxNiAyMi44NTI1IDk4LjYxNzIgMjIuOTYxOUM5OC42NjczIDIzLjA2NjcgOTguNzUzOSAyMy4xNjQ3IDk4Ljg3NyAyMy4yNTU5Qzk5IDIzLjM0MjQgOTkuMTczMiAyMy40MjQ1IDk5LjM5NjUgMjMuNTAyQzk5LjYxOTggMjMuNTc5NCA5OS45MDQ2IDIzLjY1NjkgMTAwLjI1MSAyMy43MzQ0QzEwMC44NTcgMjMuODcxMSAxMDEuMzU2IDI0LjAzNTIgMTAxLjc0OCAyNC4yMjY2QzEwMi4xNCAyNC40MTggMTAyLjQzMiAyNC42NTI3IDEwMi42MjMgMjQuOTMwN0MxMDIuODE0IDI1LjIwODcgMTAyLjkxIDI1LjU0NTkgMTAyLjkxIDI1Ljk0MjRDMTAyLjkxIDI2LjI2NiAxMDIuODQyIDI2LjU2MjIgMTAyLjcwNSAyNi44MzExQzEwMi41NzMgMjcuMDk5OSAxMDIuMzc5IDI3LjMzMjQgMTAyLjEyNCAyNy41MjgzQzEwMS44NzMgMjcuNzE5NyAxMDEuNTczIDI3Ljg3MDEgMTAxLjIyMiAyNy45Nzk1QzEwMC44NzUgMjguMDg0MyAxMDAuNDg2IDI4LjEzNjcgMTAwLjA1MyAyOC4xMzY3Qzk5LjQwMSAyOC4xMzY3IDk4Ljg0OTYgMjguMDIwNSA5OC4zOTg0IDI3Ljc4ODFDOTcuOTQ3MyAyNy41NTU3IDk3LjYwNTUgMjcuMjU0OSA5Ny4zNzMgMjYuODg1N0M5Ny4xNDA2IDI2LjUxNjYgOTcuMDI0NCAyNi4xMjcgOTcuMDI0NCAyNS43MTY4SDk4LjI5NTlDOTguMzE0MSAyNi4wNjMyIDk4LjQxNDQgMjYuMzM4OSA5OC41OTY3IDI2LjU0MzlDOTguNzc5IDI2Ljc0NDUgOTkuMDAyMyAyNi44ODggOTkuMjY2NiAyNi45NzQ2Qzk5LjUzMDkgMjcuMDU2NiA5OS43OTMgMjcuMDk3NyAxMDAuMDUzIDI3LjA5NzdDMTAwLjM5OSAyNy4wOTc3IDEwMC42ODggMjcuMDUyMSAxMDAuOTIxIDI2Ljk2MDlDMTAxLjE1OCAyNi44Njk4IDEwMS4zMzggMjYuNzQ0NSAxMDEuNDYxIDI2LjU4NUMxMDEuNTg0IDI2LjQyNTUgMTAxLjY0NiAyNi4yNDMyIDEwMS42NDYgMjYuMDM4MVpNMTA3LjY2OCAyMC42MDM1VjIxLjU3NDJIMTAzLjY2OVYyMC42MDM1SDEwNy42NjhaTTEwNS4wMjIgMTguODA1N0gxMDYuMjg3VjI2LjE2OEMxMDYuMjg3IDI2LjQxODYgMTA2LjMyNiAyNi42MDc3IDEwNi40MDMgMjYuNzM1NEMxMDYuNDgxIDI2Ljg2MyAxMDYuNTgxIDI2Ljk0NzMgMTA2LjcwNCAyNi45ODgzQzEwNi44MjcgMjcuMDI5MyAxMDYuOTU5IDI3LjA0OTggMTA3LjEwMSAyNy4wNDk4QzEwNy4yMDUgMjcuMDQ5OCAxMDcuMzE1IDI3LjA0MDcgMTA3LjQyOSAyNy4wMjI1QzEwNy41NDcgMjYuOTk5NyAxMDcuNjM2IDI2Ljk4MTQgMTA3LjY5NSAyNi45Njc4TDEwNy43MDIgMjhDMTA3LjYwMiAyOC4wMzE5IDEwNy40NyAyOC4wNjE1IDEwNy4zMDYgMjguMDg4OUMxMDcuMTQ2IDI4LjEyMDggMTA2Ljk1MiAyOC4xMzY3IDEwNi43MjUgMjguMTM2N0MxMDYuNDE1IDI4LjEzNjcgMTA2LjEzIDI4LjA3NTIgMTA1Ljg3IDI3Ljk1MjFDMTA1LjYxIDI3LjgyOTEgMTA1LjQwMyAyNy42MjQgMTA1LjI0OCAyNy4zMzY5QzEwNS4wOTggMjcuMDQ1MiAxMDUuMDIyIDI2LjY1MzMgMTA1LjAyMiAyNi4xNjExVjE4LjgwNTdaTTExMy41MTMgMjYuNzM1NFYyMi45Mjc3QzExMy41MTMgMjIuNjM2MSAxMTMuNDUzIDIyLjM4MzEgMTEzLjMzNSAyMi4xNjg5QzExMy4yMjEgMjEuOTUwMiAxMTMuMDQ4IDIxLjc4MTYgMTEyLjgxNSAyMS42NjMxQzExMi41ODMgMjEuNTQ0NiAxMTIuMjk2IDIxLjQ4NTQgMTExLjk1NCAyMS40ODU0QzExMS42MzUgMjEuNDg1NCAxMTEuMzU1IDIxLjU0IDExMS4xMTMgMjEuNjQ5NEMxMTAuODc2IDIxLjc1ODggMTEwLjY4OSAyMS45MDIzIDExMC41NTMgMjIuMDgwMUMxMTAuNDIxIDIyLjI1NzggMTEwLjM1NCAyMi40NDkyIDExMC4zNTQgMjIuNjU0M0gxMDkuMDlDMTA5LjA5IDIyLjM5IDEwOS4xNTggMjIuMTI3OSAxMDkuMjk1IDIxLjg2ODJDMTA5LjQzMiAyMS42MDg0IDEwOS42MjggMjEuMzczNyAxMDkuODgzIDIxLjE2NDFDMTEwLjE0MyAyMC45NDk5IDExMC40NTIgMjAuNzgxMiAxMTAuODEyIDIwLjY1ODJDMTExLjE3NyAyMC41MzA2IDExMS41ODMgMjAuNDY2OCAxMTIuMDI5IDIwLjQ2NjhDMTEyLjU2NyAyMC40NjY4IDExMy4wNDEgMjAuNTU3OSAxMTMuNDUxIDIwLjc0MDJDMTEzLjg2NiAyMC45MjI1IDExNC4xODkgMjEuMTk4MiAxMTQuNDIyIDIxLjU2NzRDMTE0LjY1OSAyMS45MzIgMTE0Ljc3NyAyMi4zOSAxMTQuNzc3IDIyLjk0MTRWMjYuMzg2N0MxMTQuNzc3IDI2LjYzMjggMTE0Ljc5OCAyNi44OTQ5IDExNC44MzkgMjcuMTcyOUMxMTQuODg0IDI3LjQ1MDggMTE0Ljk1MSAyNy42OTAxIDExNS4wMzcgMjcuODkwNlYyOEgxMTMuNzE4QzExMy42NTQgMjcuODU0MiAxMTMuNjA0IDI3LjY2MDUgMTEzLjU2NyAyNy40MTg5QzExMy41MzEgMjcuMTcyOSAxMTMuNTEzIDI2Ljk0NSAxMTMuNTEzIDI2LjczNTRaTTExMy43MzEgMjMuNTE1NkwxMTMuNzQ1IDI0LjQwNDNIMTEyLjQ2N0MxMTIuMTA3IDI0LjQwNDMgMTExLjc4NSAyNC40MzM5IDExMS41MDMgMjQuNDkzMkMxMTEuMjIgMjQuNTQ3OSAxMTAuOTgzIDI0LjYzMjIgMTEwLjc5MiAyNC43NDYxQzExMC42MDEgMjQuODYgMTEwLjQ1NSAyNS4wMDM2IDExMC4zNTQgMjUuMTc2OEMxMTAuMjU0IDI1LjM0NTQgMTEwLjIwNCAyNS41NDM2IDExMC4yMDQgMjUuNzcxNUMxMTAuMjA0IDI2LjAwMzkgMTEwLjI1NyAyNi4yMTU4IDExMC4zNjEgMjYuNDA3MkMxMTAuNDY2IDI2LjU5ODYgMTEwLjYyMyAyNi43NTEzIDExMC44MzMgMjYuODY1MkMxMTEuMDQ3IDI2Ljk3NDYgMTExLjMwOSAyNy4wMjkzIDExMS42MTkgMjcuMDI5M0MxMTIuMDA3IDI3LjAyOTMgMTEyLjM0OCAyNi45NDczIDExMi42NDUgMjYuNzgzMkMxMTIuOTQxIDI2LjYxOTEgMTEzLjE3NSAyNi40MTg2IDExMy4zNDkgMjYuMTgxNkMxMTMuNTI2IDI1Ljk0NDcgMTEzLjYyMiAyNS43MTQ1IDExMy42MzYgMjUuNDkxMkwxMTQuMTc2IDI2LjA5OTZDMTE0LjE0NCAyNi4yOTEgMTE0LjA1NyAyNi41MDI5IDExMy45MTYgMjYuNzM1NEMxMTMuNzc1IDI2Ljk2NzggMTEzLjU4NiAyNy4xOTExIDExMy4zNDkgMjcuNDA1M0MxMTMuMTE2IDI3LjYxNDkgMTEyLjgzOCAyNy43OTA0IDExMi41MTUgMjcuOTMxNkMxMTIuMTk2IDI4LjA2ODQgMTExLjgzNiAyOC4xMzY3IDExMS40MzUgMjguMTM2N0MxMTAuOTMzIDI4LjEzNjcgMTEwLjQ5MyAyOC4wMzg3IDExMC4xMTUgMjcuODQyOEMxMDkuNzQyIDI3LjY0NjggMTA5LjQ1IDI3LjM4NDggMTA5LjI0IDI3LjA1NjZDMTA5LjAzNSAyNi43MjQgMTA4LjkzMyAyNi4zNTI1IDEwOC45MzMgMjUuOTQyNEMxMDguOTMzIDI1LjU0NTkgMTA5LjAxIDI1LjE5NzMgMTA5LjE2NSAyNC44OTY1QzEwOS4zMiAyNC41OTExIDEwOS41NDMgMjQuMzM4MiAxMDkuODM1IDI0LjEzNzdDMTEwLjEyNyAyMy45MzI2IDExMC40NzggMjMuNzc3NyAxMTAuODg4IDIzLjY3MjlDMTExLjI5OCAyMy41NjggMTExLjc1NiAyMy41MTU2IDExMi4yNjIgMjMuNTE1NkgxMTMuNzMxWk0xMTguNzM1IDI3LjIzNDRMMTIwLjc5MyAyMC42MDM1SDEyMi4xNDZMMTE5LjE4IDI5LjE0MTZDMTE5LjExMSAyOS4zMjM5IDExOS4wMiAyOS41MTk5IDExOC45MDYgMjkuNzI5NUMxMTguNzk3IDI5Ljk0MzcgMTE4LjY1NiAzMC4xNDY1IDExOC40ODIgMzAuMzM3OUMxMTguMzA5IDMwLjUyOTMgMTE4LjEgMzAuNjg0MiAxMTcuODU0IDMwLjgwMjdDMTE3LjYxMiAzMC45MjU4IDExNy4zMjMgMzAuOTg3MyAxMTYuOTg1IDMwLjk4NzNDMTE2Ljg4NSAzMC45ODczIDExNi43NTcgMzAuOTczNiAxMTYuNjAzIDMwLjk0NjNDMTE2LjQ0OCAzMC45MTg5IDExNi4zMzggMzAuODk2MiAxMTYuMjc0IDMwLjg3NzlMMTE2LjI2OCAyOS44NTI1QzExNi4zMDQgMjkuODU3MSAxMTYuMzYxIDI5Ljg2MTcgMTE2LjQzOCAyOS44NjYyQzExNi41MjEgMjkuODc1MyAxMTYuNTc3IDI5Ljg3OTkgMTE2LjYwOSAyOS44Nzk5QzExNi44OTYgMjkuODc5OSAxMTcuMTQgMjkuODQxMSAxMTcuMzQxIDI5Ljc2MzdDMTE3LjU0MSAyOS42OTA4IDExNy43MSAyOS41NjU0IDExNy44NDcgMjkuMzg3N0MxMTcuOTg4IDI5LjIxNDUgMTE4LjEwOSAyOC45NzUzIDExOC4yMDkgMjguNjY5OUwxMTguNzM1IDI3LjIzNDRaTTExNy4yMjUgMjAuNjAzNUwxMTkuMTQ2IDI2LjM0NTdMMTE5LjQ3NCAyNy42Nzg3TDExOC41NjQgMjguMTQzNkwxMTUuODQ0IDIwLjYwMzVIMTE3LjIyNVpcIiBmaWxsPVwiIzY0NzQ4QlwiLz5cblx0XHQ8cmVjdCB4PVwiMTZcIiB5PVwiMzdcIiB3aWR0aD1cIjI2NlwiIGhlaWdodD1cIjI4XCIgcng9XCIzXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdDxwYXRoIGQ9XCJNMjkuNDk0MSA0Ny4wNzY3TDI2LjQzNDYgNTUuNUgyNS4xODQxTDI4LjcwNyA0Ni4yNTc4SDI5LjUxMzJMMjkuNDk0MSA0Ny4wNzY3Wk0zMi4wNTg2IDU1LjVMMjguOTkyNyA0Ny4wNzY3TDI4Ljk3MzYgNDYuMjU3OEgyOS43Nzk4TDMzLjMxNTQgNTUuNUgzMi4wNTg2Wk0zMS44OTk5IDUyLjA3ODZWNTMuMDgxNUgyNi43MDc1VjUyLjA3ODZIMzEuODk5OVpNMzcuMTM2NyA0OC42MzE4VjQ5LjUzMzJIMzMuNDIzM1Y0OC42MzE4SDM3LjEzNjdaTTM0LjY4MDIgNDYuOTYyNEgzNS44NTQ1VjUzLjc5ODhDMzUuODU0NSA1NC4wMzE2IDM1Ljg5MDUgNTQuMjA3MiAzNS45NjI0IDU0LjMyNTdDMzYuMDM0MyA1NC40NDQyIDM2LjEyNzQgNTQuNTIyNSAzNi4yNDE3IDU0LjU2MDVDMzYuMzU2IDU0LjU5ODYgMzYuNDc4NyA1NC42MTc3IDM2LjYwOTkgNTQuNjE3N0MzNi43MDcyIDU0LjYxNzcgMzYuODA4OCA1NC42MDkyIDM2LjkxNDYgNTQuNTkyM0MzNy4wMjQ2IDU0LjU3MTEgMzcuMTA3MSA1NC41NTQyIDM3LjE2MjEgNTQuNTQxNUwzNy4xNjg1IDU1LjVDMzcuMDc1NCA1NS41Mjk2IDM2Ljk1MjYgNTUuNTU3MSAzNi44MDAzIDU1LjU4MjVDMzYuNjUyMiA1NS42MTIxIDM2LjQ3MjMgNTUuNjI3IDM2LjI2MDcgNTUuNjI3QzM1Ljk3MyA1NS42MjcgMzUuNzA4NSA1NS41Njk4IDM1LjQ2NzMgNTUuNDU1NkMzNS4yMjYxIDU1LjM0MTMgMzUuMDMzNSA1NS4xNTA5IDM0Ljg4OTYgNTQuODg0M0MzNC43NSA1NC42MTM0IDM0LjY4MDIgNTQuMjQ5NSAzNC42ODAyIDUzLjc5MjVWNDYuOTYyNFpNNDQuNjE0MyA0OC42MzE4VjQ5LjUzMzJINDAuOTAwOVY0OC42MzE4SDQ0LjYxNDNaTTQyLjE1NzcgNDYuOTYyNEg0My4zMzJWNTMuNzk4OEM0My4zMzIgNTQuMDMxNiA0My4zNjggNTQuMjA3MiA0My40Mzk5IDU0LjMyNTdDNDMuNTExOSA1NC40NDQyIDQzLjYwNSA1NC41MjI1IDQzLjcxOTIgNTQuNTYwNUM0My44MzM1IDU0LjU5ODYgNDMuOTU2MiA1NC42MTc3IDQ0LjA4NzQgNTQuNjE3N0M0NC4xODQ3IDU0LjYxNzcgNDQuMjg2MyA1NC42MDkyIDQ0LjM5MjEgNTQuNTkyM0M0NC41MDIxIDU0LjU3MTEgNDQuNTg0NiA1NC41NTQyIDQ0LjYzOTYgNTQuNTQxNUw0NC42NDYgNTUuNUM0NC41NTI5IDU1LjUyOTYgNDQuNDMwMiA1NS41NTcxIDQ0LjI3NzggNTUuNTgyNUM0NC4xMjk3IDU1LjYxMjEgNDMuOTQ5OSA1NS42MjcgNDMuNzM4MyA1NS42MjdDNDMuNDUwNSA1NS42MjcgNDMuMTg2IDU1LjU2OTggNDIuOTQ0OCA1NS40NTU2QzQyLjcwMzYgNTUuMzQxMyA0Mi41MTExIDU1LjE1MDkgNDIuMzY3MiA1NC44ODQzQzQyLjIyNzUgNTQuNjEzNCA0Mi4xNTc3IDU0LjI0OTUgNDIuMTU3NyA1My43OTI1VjQ2Ljk2MjRaTTQ3LjE2NiA0NS43NVY1NS41SDQ1Ljk5MTdWNDUuNzVINDcuMTY2Wk00Ni44ODY3IDUxLjgwNTdMNDYuMzk3OSA1MS43ODY2QzQ2LjQwMjIgNTEuMzE2OSA0Ni40NzIgNTAuODgzMSA0Ni42MDc0IDUwLjQ4NTRDNDYuNzQyOCA1MC4wODMzIDQ2LjkzMzMgNDkuNzM0MiA0Ny4xNzg3IDQ5LjQzOEM0Ny40MjQyIDQ5LjE0MTggNDcuNzE2MSA0OC45MTMyIDQ4LjA1NDcgNDguNzUyNEM0OC4zOTc1IDQ4LjU4NzQgNDguNzc2MiA0OC41MDQ5IDQ5LjE5MDkgNDguNTA0OUM0OS41Mjk1IDQ4LjUwNDkgNDkuODM0MSA0OC41NTE0IDUwLjEwNSA0OC42NDQ1QzUwLjM3NTggNDguNzMzNCA1MC42MDY0IDQ4Ljg3NzMgNTAuNzk2OSA0OS4wNzYyQzUwLjk5MTUgNDkuMjc1MSA1MS4xMzk2IDQ5LjUzMzIgNTEuMjQxMiA0OS44NTA2QzUxLjM0MjggNTAuMTYzNyA1MS4zOTM2IDUwLjU0NjcgNTEuMzkzNiA1MC45OTk1VjU1LjVINTAuMjEyOVY1MC45ODY4QzUwLjIxMjkgNTAuNjI3MSA1MC4xNiA1MC4zMzk0IDUwLjA1NDIgNTAuMTIzNUM0OS45NDg0IDQ5LjkwMzUgNDkuNzkzOSA0OS43NDQ4IDQ5LjU5MDggNDkuNjQ3NUM0OS4zODc3IDQ5LjU0NTkgNDkuMTM4IDQ5LjQ5NTEgNDguODQxOCA0OS40OTUxQzQ4LjU0OTggNDkuNDk1MSA0OC4yODMyIDQ5LjU1NjUgNDguMDQyIDQ5LjY3OTJDNDcuODA1IDQ5LjgwMTkgNDcuNTk5OCA0OS45NzEyIDQ3LjQyNjMgNTAuMTg3QzQ3LjI1NyA1MC40MDI4IDQ3LjEyMzcgNTAuNjUwNCA0Ny4wMjY0IDUwLjkyOTdDNDYuOTMzMyA1MS4yMDQ4IDQ2Ljg4NjcgNTEuNDk2NyA0Ni44ODY3IDUxLjgwNTdaTTU2LjAwMiA1NS42MjdDNTUuNTIzOCA1NS42MjcgNTUuMDkgNTUuNTQ2NSA1NC43MDA3IDU1LjM4NTdDNTQuMzE1NiA1NS4yMjA3IDUzLjk4MzQgNTQuOTkwMSA1My43MDQxIDU0LjY5MzhDNTMuNDI5IDU0LjM5NzYgNTMuMjE3NCA1NC4wNDY0IDUzLjA2OTMgNTMuNjQwMUM1Mi45MjEyIDUzLjIzMzkgNTIuODQ3MiA1Mi43ODk2IDUyLjg0NzIgNTIuMzA3MVY1Mi4wNDA1QzUyLjg0NzIgNTEuNDgxOSA1Mi45Mjk3IDUwLjk4NDcgNTMuMDk0NyA1MC41NDg4QzUzLjI1OTggNTAuMTA4NyA1My40ODQgNDkuNzM2MyA1My43Njc2IDQ5LjQzMTZDNTQuMDUxMSA0OS4xMjcgNTQuMzcyNyA0OC44OTYzIDU0LjczMjQgNDguNzM5N0M1NS4wOTIxIDQ4LjU4MzIgNTUuNDY0NSA0OC41MDQ5IDU1Ljg0OTYgNDguNTA0OUM1Ni4zNDA1IDQ4LjUwNDkgNTYuNzYzNyA0OC41ODk1IDU3LjExOTEgNDguNzU4OEM1Ny40Nzg4IDQ4LjkyODEgNTcuNzcyOSA0OS4xNjUgNTguMDAxNSA0OS40Njk3QzU4LjIzIDQ5Ljc3MDIgNTguMzk5MyA1MC4xMjU3IDU4LjUwOTMgNTAuNTM2MUM1OC42MTkzIDUwLjk0MjQgNTguNjc0MyA1MS4zODY3IDU4LjY3NDMgNTEuODY5MVY1Mi4zOTZINTMuNTQ1NFY1MS40Mzc1SDU3LjVWNTEuMzQ4NkM1Ny40ODMxIDUxLjA0MzkgNTcuNDE5NiA1MC43NDc3IDU3LjMwOTYgNTAuNDZDNTcuMjAzOCA1MC4xNzIyIDU3LjAzNDUgNDkuOTM1MiA1Ni44MDE4IDQ5Ljc0OUM1Ni41NjkgNDkuNTYyOCA1Ni4yNTE2IDQ5LjQ2OTcgNTUuODQ5NiA0OS40Njk3QzU1LjU4MyA0OS40Njk3IDU1LjMzNzYgNDkuNTI2OSA1NS4xMTMzIDQ5LjY0MTFDNTQuODg5IDQ5Ljc1MTEgNTQuNjk2NSA0OS45MTYyIDU0LjUzNTYgNTAuMTM2MkM1NC4zNzQ4IDUwLjM1NjMgNTQuMjUgNTAuNjI1IDU0LjE2MTEgNTAuOTQyNEM1NC4wNzIzIDUxLjI1OTggNTQuMDI3OCA1MS42MjU4IDU0LjAyNzggNTIuMDQwNVY1Mi4zMDcxQzU0LjAyNzggNTIuNjMzIDU0LjA3MjMgNTIuOTM5OCA1NC4xNjExIDUzLjIyNzVDNTQuMjU0MiA1My41MTExIDU0LjM4NzUgNTMuNzYwNyA1NC41NjEgNTMuOTc2NkM1NC43Mzg4IDU0LjE5MjQgNTQuOTUyNSA1NC4zNjE3IDU1LjIwMjEgNTQuNDg0NEM1NS40NTYxIDU0LjYwNzEgNTUuNzQzOCA1NC42Njg1IDU2LjA2NTQgNTQuNjY4NUM1Ni40ODAxIDU0LjY2ODUgNTYuODMxNCA1NC41ODM4IDU3LjExOTEgNTQuNDE0NkM1Ny40MDY5IDU0LjI0NTMgNTcuNjU4NyA1NC4wMTg5IDU3Ljg3NDUgNTMuNzM1NEw1OC41ODU0IDU0LjMwMDNDNTguNDM3MyA1NC41MjQ2IDU4LjI0OSA1NC43MzgzIDU4LjAyMDUgNTQuOTQxNEM1Ny43OTIgNTUuMTQ0NSA1Ny41MTA2IDU1LjMwOTYgNTcuMTc2MyA1NS40MzY1QzU2Ljg0NjIgNTUuNTYzNSA1Ni40NTQ4IDU1LjYyNyA1Ni4wMDIgNTUuNjI3Wk02My4yNjM3IDQ1Ljc1SDY0LjQ0NDNWNTQuMTY3TDY0LjM0MjggNTUuNUg2My4yNjM3VjQ1Ljc1Wk02OS4wODQ1IDUyLjAwODhWNTIuMTQyMUM2OS4wODQ1IDUyLjY0MTQgNjkuMDI1MiA1My4xMDQ4IDY4LjkwNjcgNTMuNTMyMkM2OC43ODgyIDUzLjk1NTQgNjguNjE0NyA1NC4zMjM2IDY4LjM4NjIgNTQuNjM2N0M2OC4xNTc3IDU0Ljk0OTkgNjcuODc4NCA1NS4xOTMyIDY3LjU0ODMgNTUuMzY2N0M2Ny4yMTgzIDU1LjU0MDIgNjYuODM5NSA1NS42MjcgNjYuNDEyMSA1NS42MjdDNjUuOTc2MiA1NS42MjcgNjUuNTkzMyA1NS41NTI5IDY1LjI2MzIgNTUuNDA0OEM2NC45MzczIDU1LjI1MjQgNjQuNjYyMyA1NS4wMzQ1IDY0LjQzOCA1NC43NTFDNjQuMjEzNyA1NC40Njc0IDY0LjAzMzkgNTQuMTI0NyA2My44OTg0IDUzLjcyMjdDNjMuNzY3MyA1My4zMjA2IDYzLjY3NjMgNTIuODY3OCA2My42MjU1IDUyLjM2NDNWNTEuNzgwM0M2My42NzYzIDUxLjI3MjUgNjMuNzY3MyA1MC44MTc1IDYzLjg5ODQgNTAuNDE1NUM2NC4wMzM5IDUwLjAxMzUgNjQuMjEzNyA0OS42NzA3IDY0LjQzOCA0OS4zODcyQzY0LjY2MjMgNDkuMDk5NCA2NC45MzczIDQ4Ljg4MTUgNjUuMjYzMiA0OC43MzM0QzY1LjU4OSA0OC41ODExIDY1Ljk2NzggNDguNTA0OSA2Ni4zOTk0IDQ4LjUwNDlDNjYuODMxMSA0OC41MDQ5IDY3LjIxNCA0OC41ODk1IDY3LjU0ODMgNDguNzU4OEM2Ny44ODI2IDQ4LjkyMzggNjguMTYxOSA0OS4xNjA4IDY4LjM4NjIgNDkuNDY5N0M2OC42MTQ3IDQ5Ljc3ODYgNjguNzg4MiA1MC4xNDg5IDY4LjkwNjcgNTAuNTgwNkM2OS4wMjUyIDUxLjAwOCA2OS4wODQ1IDUxLjQ4NCA2OS4wODQ1IDUyLjAwODhaTTY3LjkwMzggNTIuMTQyMVY1Mi4wMDg4QzY3LjkwMzggNTEuNjY2IDY3Ljg3MjEgNTEuMzQ0NCA2Ny44MDg2IDUxLjA0MzlDNjcuNzQ1MSA1MC43MzkzIDY3LjY0MzYgNTAuNDcyNyA2Ny41MDM5IDUwLjI0NDFDNjcuMzY0MyA1MC4wMTE0IDY3LjE4MDIgNDkuODI5NCA2Ni45NTE3IDQ5LjY5ODJDNjYuNzIzMSA0OS41NjI4IDY2LjQ0MTcgNDkuNDk1MSA2Ni4xMDc0IDQ5LjQ5NTFDNjUuODExMiA0OS40OTUxIDY1LjU1MzEgNDkuNTQ1OSA2NS4zMzMgNDkuNjQ3NUM2NS4xMTcyIDQ5Ljc0OSA2NC45MzMxIDQ5Ljg4NjYgNjQuNzgwOCA1MC4wNjAxQzY0LjYyODQgNTAuMjI5MyA2NC41MDM2IDUwLjQyNCA2NC40MDYyIDUwLjY0NEM2NC4zMTMyIDUwLjg1OTkgNjQuMjQzMyA1MS4wODQxIDY0LjE5NjggNTEuMzE2OVY1Mi44NDY3QzY0LjI2NDUgNTMuMTQyOSA2NC4zNzQ1IDUzLjQyODUgNjQuNTI2OSA1My43MDM2QzY0LjY4MzQgNTMuOTc0NCA2NC44OTA4IDU0LjE5NjYgNjUuMTQ4OSA1NC4zNzAxQzY1LjQxMTMgNTQuNTQzNiA2NS43MzUgNTQuNjMwNCA2Ni4xMjAxIDU0LjYzMDRDNjYuNDM3NSA1NC42MzA0IDY2LjcwODMgNTQuNTY2OSA2Ni45MzI2IDU0LjQzOTlDNjcuMTYxMSA1NC4zMDg4IDY3LjM0NTIgNTQuMTI4OSA2Ny40ODQ5IDUzLjkwMDRDNjcuNjI4NyA1My42NzE5IDY3LjczNDUgNTMuNDA3NCA2Ny44MDIyIDUzLjEwNjlDNjcuODcgNTIuODA2NSA2Ny45MDM4IDUyLjQ4NDkgNjcuOTAzOCA1Mi4xNDIxWk03My40MTk5IDU1LjYyN0M3Mi45NDE3IDU1LjYyNyA3Mi41MDggNTUuNTQ2NSA3Mi4xMTg3IDU1LjM4NTdDNzEuNzMzNiA1NS4yMjA3IDcxLjQwMTQgNTQuOTkwMSA3MS4xMjIxIDU0LjY5MzhDNzAuODQ3IDU0LjM5NzYgNzAuNjM1NCA1NC4wNDY0IDcwLjQ4NzMgNTMuNjQwMUM3MC4zMzkyIDUzLjIzMzkgNzAuMjY1MSA1Mi43ODk2IDcwLjI2NTEgNTIuMzA3MVY1Mi4wNDA1QzcwLjI2NTEgNTEuNDgxOSA3MC4zNDc3IDUwLjk4NDcgNzAuNTEyNyA1MC41NDg4QzcwLjY3NzcgNTAuMTA4NyA3MC45MDIgNDkuNzM2MyA3MS4xODU1IDQ5LjQzMTZDNzEuNDY5MSA0OS4xMjcgNzEuNzkwNyA0OC44OTYzIDcyLjE1MDQgNDguNzM5N0M3Mi41MTAxIDQ4LjU4MzIgNzIuODgyNSA0OC41MDQ5IDczLjI2NzYgNDguNTA0OUM3My43NTg1IDQ4LjUwNDkgNzQuMTgxNiA0OC41ODk1IDc0LjUzNzEgNDguNzU4OEM3NC44OTY4IDQ4LjkyODEgNzUuMTkwOSA0OS4xNjUgNzUuNDE5NCA0OS40Njk3Qzc1LjY0NzkgNDkuNzcwMiA3NS44MTcyIDUwLjEyNTcgNzUuOTI3MiA1MC41MzYxQzc2LjAzNzMgNTAuOTQyNCA3Ni4wOTIzIDUxLjM4NjcgNzYuMDkyMyA1MS44NjkxVjUyLjM5Nkg3MC45NjM0VjUxLjQzNzVINzQuOTE4VjUxLjM0ODZDNzQuOTAxIDUxLjA0MzkgNzQuODM3NiA1MC43NDc3IDc0LjcyNzUgNTAuNDZDNzQuNjIxNyA1MC4xNzIyIDc0LjQ1MjUgNDkuOTM1MiA3NC4yMTk3IDQ5Ljc0OUM3My45ODcgNDkuNTYyOCA3My42Njk2IDQ5LjQ2OTcgNzMuMjY3NiA0OS40Njk3QzczLjAwMSA0OS40Njk3IDcyLjc1NTUgNDkuNTI2OSA3Mi41MzEyIDQ5LjY0MTFDNzIuMzA3IDQ5Ljc1MTEgNzIuMTE0NCA0OS45MTYyIDcxLjk1MzYgNTAuMTM2MkM3MS43OTI4IDUwLjM1NjMgNzEuNjY4IDUwLjYyNSA3MS41NzkxIDUwLjk0MjRDNzEuNDkwMiA1MS4yNTk4IDcxLjQ0NTggNTEuNjI1OCA3MS40NDU4IDUyLjA0MDVWNTIuMzA3MUM3MS40NDU4IDUyLjYzMyA3MS40OTAyIDUyLjkzOTggNzEuNTc5MSA1My4yMjc1QzcxLjY3MjIgNTMuNTExMSA3MS44MDU1IDUzLjc2MDcgNzEuOTc5IDUzLjk3NjZDNzIuMTU2NyA1NC4xOTI0IDcyLjM3MDQgNTQuMzYxNyA3Mi42MjAxIDU0LjQ4NDRDNzIuODc0IDU0LjYwNzEgNzMuMTYxOCA1NC42Njg1IDczLjQ4MzQgNTQuNjY4NUM3My44OTgxIDU0LjY2ODUgNzQuMjQ5MyA1NC41ODM4IDc0LjUzNzEgNTQuNDE0NkM3NC44MjQ5IDU0LjI0NTMgNzUuMDc2NyA1NC4wMTg5IDc1LjI5MjUgNTMuNzM1NEw3Ni4wMDM0IDU0LjMwMDNDNzUuODU1MyA1NC41MjQ2IDc1LjY2NyA1NC43MzgzIDc1LjQzODUgNTQuOTQxNEM3NS4yMSA1NS4xNDQ1IDc0LjkyODUgNTUuMzA5NiA3NC41OTQyIDU1LjQzNjVDNzQuMjY0MiA1NS41NjM1IDczLjg3MjcgNTUuNjI3IDczLjQxOTkgNTUuNjI3Wk04MS41MTMyIDU0LjMyNTdWNTAuNzlDODEuNTEzMiA1MC41MTkyIDgxLjQ1ODIgNTAuMjg0MyA4MS4zNDgxIDUwLjA4NTRDODEuMjQyNCA0OS44ODIzIDgxLjA4MTUgNDkuNzI1NyA4MC44NjU3IDQ5LjYxNTdDODAuNjQ5OSA0OS41MDU3IDgwLjM4MzMgNDkuNDUwNyA4MC4wNjU5IDQ5LjQ1MDdDNzkuNzY5NyA0OS40NTA3IDc5LjUwOTQgNDkuNTAxNSA3OS4yODUyIDQ5LjYwM0M3OS4wNjUxIDQ5LjcwNDYgNzguODkxNiA0OS44Mzc5IDc4Ljc2NDYgNTAuMDAyOUM3OC42NDE5IDUwLjE2OCA3OC41ODA2IDUwLjM0NTcgNzguNTgwNiA1MC41MzYxSDc3LjQwNjJDNzcuNDA2MiA1MC4yOTA3IDc3LjQ2OTcgNTAuMDQ3NCA3Ny41OTY3IDQ5LjgwNjJDNzcuNzIzNiA0OS41NjQ5IDc3LjkwNTYgNDkuMzQ3IDc4LjE0MjYgNDkuMTUyM0M3OC4zODM4IDQ4Ljk1MzUgNzguNjcxNSA0OC43OTY5IDc5LjAwNTkgNDguNjgyNkM3OS4zNDQ0IDQ4LjU2NDEgNzkuNzIxIDQ4LjUwNDkgODAuMTM1NyA0OC41MDQ5QzgwLjYzNTEgNDguNTA0OSA4MS4wNzUyIDQ4LjU4OTUgODEuNDU2MSA0OC43NTg4QzgxLjg0MTEgNDguOTI4MSA4Mi4xNDE2IDQ5LjE4NDEgODIuMzU3NCA0OS41MjY5QzgyLjU3NzUgNDkuODY1NCA4Mi42ODc1IDUwLjI5MDcgODIuNjg3NSA1MC44MDI3VjU0LjAwMkM4Mi42ODc1IDU0LjIzMDUgODIuNzA2NSA1NC40NzM4IDgyLjc0NDYgNTQuNzMxOUM4Mi43ODY5IDU0Ljk5MDEgODIuODQ4MyA1NS4yMTIyIDgyLjkyODcgNTUuMzk4NFY1NS41SDgxLjcwMzZDODEuNjQ0NCA1NS4zNjQ2IDgxLjU5NzggNTUuMTg0NyA4MS41NjQgNTQuOTYwNEM4MS41MzAxIDU0LjczMTkgODEuNTEzMiA1NC41MjAzIDgxLjUxMzIgNTQuMzI1N1pNODEuNzE2MyA1MS4zMzU5TDgxLjcyOSA1Mi4xNjExSDgwLjU0MkM4MC4yMDc3IDUyLjE2MTEgNzkuOTA5MyA1Mi4xODg2IDc5LjY0NyA1Mi4yNDM3Qzc5LjM4NDYgNTIuMjk0NCA3OS4xNjQ2IDUyLjM3MjcgNzguOTg2OCA1Mi40Nzg1Qzc4LjgwOTEgNTIuNTg0MyA3OC42NzM3IDUyLjcxNzYgNzguNTgwNiA1Mi44Nzg0Qzc4LjQ4NzUgNTMuMDM1IDc4LjQ0MDkgNTMuMjE5MSA3OC40NDA5IDUzLjQzMDdDNzguNDQwOSA1My42NDY1IDc4LjQ4OTYgNTMuODQzMyA3OC41ODY5IDU0LjAyMUM3OC42ODQyIDU0LjE5ODcgNzguODMwMiA1NC4zNDA1IDc5LjAyNDkgNTQuNDQ2M0M3OS4yMjM4IDU0LjU0NzkgNzkuNDY3MSA1NC41OTg2IDc5Ljc1NDkgNTQuNTk4NkM4MC4xMTQ2IDU0LjU5ODYgODAuNDMyIDU0LjUyMjUgODAuNzA3IDU0LjM3MDFDODAuOTgyMSA1NC4yMTc4IDgxLjIgNTQuMDMxNiA4MS4zNjA4IDUzLjgxMTVDODEuNTI1OSA1My41OTE1IDgxLjYxNDcgNTMuMzc3OCA4MS42Mjc0IDUzLjE3MDRMODIuMTI4OSA1My43MzU0QzgyLjA5OTMgNTMuOTEzMSA4Mi4wMTg5IDU0LjEwOTkgODEuODg3NyA1NC4zMjU3QzgxLjc1NjUgNTQuNTQxNSA4MS41ODA5IDU0Ljc0ODkgODEuMzYwOCA1NC45NDc4QzgxLjE0NSA1NS4xNDI0IDgwLjg4NjkgNTUuMzA1MyA4MC41ODY0IDU1LjQzNjVDODAuMjkwMiA1NS41NjM1IDc5Ljk1NTkgNTUuNjI3IDc5LjU4MzUgNTUuNjI3Qzc5LjExOCA1NS42MjcgNzguNzA5NiA1NS41MzYgNzguMzU4NCA1NS4zNTRDNzguMDExNCA1NS4xNzIgNzcuNzQwNiA1NC45Mjg3IDc3LjU0NTkgNTQuNjI0Qzc3LjM1NTUgNTQuMzE1MSA3Ny4yNjAzIDUzLjk3MDIgNzcuMjYwMyA1My41ODk0Qzc3LjI2MDMgNTMuMjIxMiA3Ny4zMzIyIDUyLjg5NzUgNzcuNDc2MSA1Mi42MTgyQzc3LjYyIDUyLjMzNDYgNzcuODI3MyA1Mi4wOTk4IDc4LjA5ODEgNTEuOTEzNkM3OC4zNjkgNTEuNzIzMSA3OC42OTQ4IDUxLjU3OTMgNzkuMDc1NyA1MS40ODE5Qzc5LjQ1NjUgNTEuMzg0NiA3OS44ODE4IDUxLjMzNTkgODAuMzUxNiA1MS4zMzU5SDgxLjcxNjNaTTg3LjI4MzIgNTQuNjYyMUM4Ny41NjI1IDU0LjY2MjEgODcuODIwNiA1NC42MDUgODguMDU3NiA1NC40OTA3Qzg4LjI5NDYgNTQuMzc2NSA4OC40ODkzIDU0LjIxOTkgODguNjQxNiA1NC4wMjFDODguNzkzOSA1My44MTc5IDg4Ljg4MDcgNTMuNTg3MiA4OC45MDE5IDUzLjMyOTFIOTAuMDE5Qzg5Ljk5NzkgNTMuNzM1NCA4OS44NjA0IDU0LjExNDEgODkuNjA2NCA1NC40NjUzQzg5LjM1NjggNTQuODEyMyA4OS4wMjg4IDU1LjA5MzggODguNjIyNiA1NS4zMDk2Qzg4LjIxNjMgNTUuNTIxMiA4Ny43Njk5IDU1LjYyNyA4Ny4yODMyIDU1LjYyN0M4Ni43NjY5IDU1LjYyNyA4Ni4zMTYyIDU1LjUzNiA4NS45MzEyIDU1LjM1NEM4NS41NTAzIDU1LjE3MiA4NS4yMzI5IDU0LjkyMjQgODQuOTc5IDU0LjYwNUM4NC43MjkzIDU0LjI4NzYgODQuNTQxIDUzLjkyMzcgODQuNDE0MSA1My41MTMyQzg0LjI5MTMgNTMuMDk4NSA4NC4yMyA1Mi42NjA1IDg0LjIzIDUyLjE5OTJWNTEuOTMyNkM4NC4yMyA1MS40NzE0IDg0LjI5MTMgNTEuMDM1NSA4NC40MTQxIDUwLjYyNUM4NC41NDEgNTAuMjEwMyA4NC43MjkzIDQ5Ljg0NDIgODQuOTc5IDQ5LjUyNjlDODUuMjMyOSA0OS4yMDk1IDg1LjU1MDMgNDguOTU5OCA4NS45MzEyIDQ4Ljc3NzhDODYuMzE2MiA0OC41OTU5IDg2Ljc2NjkgNDguNTA0OSA4Ny4yODMyIDQ4LjUwNDlDODcuODIwNiA0OC41MDQ5IDg4LjI5MDQgNDguNjE0OSA4OC42OTI0IDQ4LjgzNUM4OS4wOTQ0IDQ5LjA1MDggODkuNDA5NyA0OS4zNDcgODkuNjM4MiA0OS43MjM2Qzg5Ljg3MDkgNTAuMDk2IDg5Ljk5NzkgNTAuNTE5MiA5MC4wMTkgNTAuOTkzMkg4OC45MDE5Qzg4Ljg4MDcgNTAuNzA5NiA4OC44MDAzIDUwLjQ1MzYgODguNjYwNiA1MC4yMjUxQzg4LjUyNTIgNDkuOTk2NiA4OC4zMzkgNDkuODE0NiA4OC4xMDIxIDQ5LjY3OTJDODcuODY5MyA0OS41Mzk2IDg3LjU5NjQgNDkuNDY5NyA4Ny4yODMyIDQ5LjQ2OTdDODYuOTIzNSA0OS40Njk3IDg2LjYyMDkgNDkuNTQxNyA4Ni4zNzU1IDQ5LjY4NTVDODYuMTM0MyA0OS44MjUyIDg1Ljk0MTcgNTAuMDE1NiA4NS43OTc5IDUwLjI1NjhDODUuNjU4MiA1MC40OTM4IDg1LjU1NjYgNTAuNzU4MyA4NS40OTMyIDUxLjA1MDNDODUuNDMzOSA1MS4zMzgxIDg1LjQwNDMgNTEuNjMyMiA4NS40MDQzIDUxLjkzMjZWNTIuMTk5MkM4NS40MDQzIDUyLjQ5OTcgODUuNDMzOSA1Mi43OTU5IDg1LjQ5MzIgNTMuMDg3OUM4NS41NTI0IDUzLjM3OTkgODUuNjUxOSA1My42NDQ0IDg1Ljc5MTUgNTMuODgxM0M4NS45MzU0IDU0LjExODMgODYuMTI3OSA1NC4zMDg4IDg2LjM2OTEgNTQuNDUyNkM4Ni42MTQ2IDU0LjU5MjMgODYuOTE5MyA1NC42NjIxIDg3LjI4MzIgNTQuNjYyMVpNOTIuNTEzNyA0NS43NVY1NS41SDkxLjMzOTRWNDUuNzVIOTIuNTEzN1pNOTIuMjM0NCA1MS44MDU3TDkxLjc0NTYgNTEuNzg2NkM5MS43NDk4IDUxLjMxNjkgOTEuODE5NyA1MC44ODMxIDkxLjk1NTEgNTAuNDg1NEM5Mi4wOTA1IDUwLjA4MzMgOTIuMjgwOSA0OS43MzQyIDkyLjUyNjQgNDkuNDM4QzkyLjc3MTggNDkuMTQxOCA5My4wNjM4IDQ4LjkxMzIgOTMuNDAyMyA0OC43NTI0QzkzLjc0NTEgNDguNTg3NCA5NC4xMjM5IDQ4LjUwNDkgOTQuNTM4NiA0OC41MDQ5Qzk0Ljg3NzEgNDguNTA0OSA5NS4xODE4IDQ4LjU1MTQgOTUuNDUyNiA0OC42NDQ1Qzk1LjcyMzUgNDguNzMzNCA5NS45NTQxIDQ4Ljg3NzMgOTYuMTQ0NSA0OS4wNzYyQzk2LjMzOTIgNDkuMjc1MSA5Ni40ODczIDQ5LjUzMzIgOTYuNTg4OSA0OS44NTA2Qzk2LjY5MDQgNTAuMTYzNyA5Ni43NDEyIDUwLjU0NjcgOTYuNzQxMiA1MC45OTk1VjU1LjVIOTUuNTYwNVY1MC45ODY4Qzk1LjU2MDUgNTAuNjI3MSA5NS41MDc2IDUwLjMzOTQgOTUuNDAxOSA1MC4xMjM1Qzk1LjI5NjEgNDkuOTAzNSA5NS4xNDE2IDQ5Ljc0NDggOTQuOTM4NSA0OS42NDc1Qzk0LjczNTQgNDkuNTQ1OSA5NC40ODU3IDQ5LjQ5NTEgOTQuMTg5NSA0OS40OTUxQzkzLjg5NzUgNDkuNDk1MSA5My42MzA5IDQ5LjU1NjUgOTMuMzg5NiA0OS42NzkyQzkzLjE1MjcgNDkuODAxOSA5Mi45NDc0IDQ5Ljk3MTIgOTIuNzczOSA1MC4xODdDOTIuNjA0NyA1MC40MDI4IDkyLjQ3MTQgNTAuNjUwNCA5Mi4zNzQgNTAuOTI5N0M5Mi4yODA5IDUxLjIwNDggOTIuMjM0NCA1MS40OTY3IDkyLjIzNDQgNTEuODA1N1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDBfNzZfMTI3MylcIj5cblx0XHRcdDxwYXRoIGQ9XCJNMjU2IDQ5TDI2MSA1NEwyNjYgNDlIMjU2WlwiIGZpbGw9XCIjNjQ3NDhCXCIvPlxuXHRcdDwvZz5cblx0XHQ8cmVjdCB4PVwiMTZcIiB5PVwiMzdcIiB3aWR0aD1cIjI2NlwiIGhlaWdodD1cIjI4XCIgcng9XCIzXCIgc3Ryb2tlPVwiIzQyNzJGOVwiIHN0cm9rZVdpZHRoPVwiMlwiLz5cblx0XHQ8cGF0aCBkPVwiTTE1IDY5QzE1IDY2Ljc5MDkgMTYuNzkwOSA2NSAxOSA2NUgyNzlDMjgxLjIwOSA2NSAyODMgNjYuNzkwOSAyODMgNjlWOTEuMzMzM0gxNVY2OVpcIiBmaWxsPVwiIzQyNzJGOVwiLz5cblx0XHQ8cGF0aCBkPVwiTTI5LjQ5NDEgNzQuMjQzNEwyNi40MzQ2IDgyLjY2NjdIMjUuMTg0MUwyOC43MDcgNzMuNDI0NkgyOS41MTMyTDI5LjQ5NDEgNzQuMjQzNFpNMzIuMDU4NiA4Mi42NjY3TDI4Ljk5MjcgNzQuMjQzNEwyOC45NzM2IDczLjQyNDZIMjkuNzc5OEwzMy4zMTU0IDgyLjY2NjdIMzIuMDU4NlpNMzEuODk5OSA3OS4yNDU0VjgwLjI0ODNIMjYuNzA3NVY3OS4yNDU0SDMxLjg5OTlaTTM3LjEzNjcgNzUuNzk4NlY3Ni43SDMzLjQyMzNWNzUuNzk4NkgzNy4xMzY3Wk0zNC42ODAyIDc0LjEyOTJIMzUuODU0NVY4MC45NjU2QzM1Ljg1NDUgODEuMTk4MyAzNS44OTA1IDgxLjM3MzkgMzUuOTYyNCA4MS40OTI0QzM2LjAzNDMgODEuNjEwOSAzNi4xMjc0IDgxLjY4OTIgMzYuMjQxNyA4MS43MjczQzM2LjM1NiA4MS43NjU0IDM2LjQ3ODcgODEuNzg0NCAzNi42MDk5IDgxLjc4NDRDMzYuNzA3MiA4MS43ODQ0IDM2LjgwODggODEuNzc2IDM2LjkxNDYgODEuNzU5QzM3LjAyNDYgODEuNzM3OSAzNy4xMDcxIDgxLjcyMDkgMzcuMTYyMSA4MS43MDgzTDM3LjE2ODUgODIuNjY2N0MzNy4wNzU0IDgyLjY5NjQgMzYuOTUyNiA4Mi43MjM5IDM2LjgwMDMgODIuNzQ5M0MzNi42NTIyIDgyLjc3ODkgMzYuNDcyMyA4Mi43OTM3IDM2LjI2MDcgODIuNzkzN0MzNS45NzMgODIuNzkzNyAzNS43MDg1IDgyLjczNjYgMzUuNDY3MyA4Mi42MjIzQzM1LjIyNjEgODIuNTA4MSAzNS4wMzM1IDgyLjMxNzYgMzQuODg5NiA4Mi4wNTFDMzQuNzUgODEuNzgwMiAzNC42ODAyIDgxLjQxNjMgMzQuNjgwMiA4MC45NTkyVjc0LjEyOTJaTTQ0LjYxNDMgNzUuNzk4NlY3Ni43SDQwLjkwMDlWNzUuNzk4Nkg0NC42MTQzWk00Mi4xNTc3IDc0LjEyOTJINDMuMzMyVjgwLjk2NTZDNDMuMzMyIDgxLjE5ODMgNDMuMzY4IDgxLjM3MzkgNDMuNDM5OSA4MS40OTI0QzQzLjUxMTkgODEuNjEwOSA0My42MDUgODEuNjg5MiA0My43MTkyIDgxLjcyNzNDNDMuODMzNSA4MS43NjU0IDQzLjk1NjIgODEuNzg0NCA0NC4wODc0IDgxLjc4NDRDNDQuMTg0NyA4MS43ODQ0IDQ0LjI4NjMgODEuNzc2IDQ0LjM5MjEgODEuNzU5QzQ0LjUwMjEgODEuNzM3OSA0NC41ODQ2IDgxLjcyMDkgNDQuNjM5NiA4MS43MDgzTDQ0LjY0NiA4Mi42NjY3QzQ0LjU1MjkgODIuNjk2NCA0NC40MzAyIDgyLjcyMzkgNDQuMjc3OCA4Mi43NDkzQzQ0LjEyOTcgODIuNzc4OSA0My45NDk5IDgyLjc5MzcgNDMuNzM4MyA4Mi43OTM3QzQzLjQ1MDUgODIuNzkzNyA0My4xODYgODIuNzM2NiA0Mi45NDQ4IDgyLjYyMjNDNDIuNzAzNiA4Mi41MDgxIDQyLjUxMTEgODIuMzE3NiA0Mi4zNjcyIDgyLjA1MUM0Mi4yMjc1IDgxLjc4MDIgNDIuMTU3NyA4MS40MTYzIDQyLjE1NzcgODAuOTU5MlY3NC4xMjkyWk00Ny4xNjYgNzIuOTE2N1Y4Mi42NjY3SDQ1Ljk5MTdWNzIuOTE2N0g0Ny4xNjZaTTQ2Ljg4NjcgNzguOTcyNEw0Ni4zOTc5IDc4Ljk1MzRDNDYuNDAyMiA3OC40ODM2IDQ2LjQ3MiA3OC4wNDk5IDQ2LjYwNzQgNzcuNjUyMUM0Ni43NDI4IDc3LjI1MDEgNDYuOTMzMyA3Ni45MDEgNDcuMTc4NyA3Ni42MDQ3QzQ3LjQyNDIgNzYuMzA4NSA0Ny43MTYxIDc2LjA4IDQ4LjA1NDcgNzUuOTE5MkM0OC4zOTc1IDc1Ljc1NDIgNDguNzc2MiA3NS42NzE2IDQ5LjE5MDkgNzUuNjcxNkM0OS41Mjk1IDc1LjY3MTYgNDkuODM0MSA3NS43MTgyIDUwLjEwNSA3NS44MTEzQzUwLjM3NTggNzUuOTAwMSA1MC42MDY0IDc2LjA0NCA1MC43OTY5IDc2LjI0MjlDNTAuOTkxNSA3Ni40NDE4IDUxLjEzOTYgNzYuNyA1MS4yNDEyIDc3LjAxNzNDNTEuMzQyOCA3Ny4zMzA1IDUxLjM5MzYgNzcuNzEzNSA1MS4zOTM2IDc4LjE2NjNWODIuNjY2N0g1MC4yMTI5Vjc4LjE1MzZDNTAuMjEyOSA3Ny43OTM5IDUwLjE2IDc3LjUwNjEgNTAuMDU0MiA3Ny4yOTAzQzQ5Ljk0ODQgNzcuMDcwMiA0OS43OTM5IDc2LjkxMTUgNDkuNTkwOCA3Ni44MTQyQzQ5LjM4NzcgNzYuNzEyNiA0OS4xMzggNzYuNjYxOSA0OC44NDE4IDc2LjY2MTlDNDguNTQ5OCA3Ni42NjE5IDQ4LjI4MzIgNzYuNzIzMiA0OC4wNDIgNzYuODQ1OUM0Ny44MDUgNzYuOTY4NyA0Ny41OTk4IDc3LjEzNzkgNDcuNDI2MyA3Ny4zNTM4QzQ3LjI1NyA3Ny41Njk2IDQ3LjEyMzcgNzcuODE3MSA0Ny4wMjY0IDc4LjA5NjRDNDYuOTMzMyA3OC4zNzE1IDQ2Ljg4NjcgNzguNjYzNSA0Ni44ODY3IDc4Ljk3MjRaTTU2LjAwMiA4Mi43OTM3QzU1LjUyMzggODIuNzkzNyA1NS4wOSA4Mi43MTMzIDU0LjcwMDcgODIuNTUyNUM1NC4zMTU2IDgyLjM4NzUgNTMuOTgzNCA4Mi4xNTY4IDUzLjcwNDEgODEuODYwNkM1My40MjkgODEuNTY0NCA1My4yMTc0IDgxLjIxMzEgNTMuMDY5MyA4MC44MDY5QzUyLjkyMTIgODAuNDAwNiA1Mi44NDcyIDc5Ljk1NjMgNTIuODQ3MiA3OS40NzM5Vjc5LjIwNzNDNTIuODQ3MiA3OC42NDg3IDUyLjkyOTcgNzguMTUxNCA1My4wOTQ3IDc3LjcxNTZDNTMuMjU5OCA3Ny4yNzU1IDUzLjQ4NCA3Ni45MDMxIDUzLjc2NzYgNzYuNTk4NEM1NC4wNTExIDc2LjI5MzcgNTQuMzcyNyA3Ni4wNjMxIDU0LjczMjQgNzUuOTA2NUM1NS4wOTIxIDc1Ljc0OTkgNTUuNDY0NSA3NS42NzE2IDU1Ljg0OTYgNzUuNjcxNkM1Ni4zNDA1IDc1LjY3MTYgNTYuNzYzNyA3NS43NTYzIDU3LjExOTEgNzUuOTI1NUM1Ny40Nzg4IDc2LjA5NDggNTcuNzcyOSA3Ni4zMzE4IDU4LjAwMTUgNzYuNjM2NUM1OC4yMyA3Ni45MzY5IDU4LjM5OTMgNzcuMjkyNCA1OC41MDkzIDc3LjcwMjlDNTguNjE5MyA3OC4xMDkxIDU4LjY3NDMgNzguNTUzNSA1OC42NzQzIDc5LjAzNTlWNzkuNTYyN0g1My41NDU0Vjc4LjYwNDJINTcuNVY3OC41MTU0QzU3LjQ4MzEgNzguMjEwNyA1Ny40MTk2IDc3LjkxNDUgNTcuMzA5NiA3Ny42MjY3QzU3LjIwMzggNzcuMzM4OSA1Ny4wMzQ1IDc3LjEwMiA1Ni44MDE4IDc2LjkxNThDNTYuNTY5IDc2LjcyOTYgNTYuMjUxNiA3Ni42MzY1IDU1Ljg0OTYgNzYuNjM2NUM1NS41ODMgNzYuNjM2NSA1NS4zMzc2IDc2LjY5MzYgNTUuMTEzMyA3Ni44MDc5QzU0Ljg4OSA3Ni45MTc5IDU0LjY5NjUgNzcuMDgyOSA1NC41MzU2IDc3LjMwM0M1NC4zNzQ4IDc3LjUyMyA1NC4yNSA3Ny43OTE3IDU0LjE2MTEgNzguMTA5MUM1NC4wNzIzIDc4LjQyNjUgNTQuMDI3OCA3OC43OTI2IDU0LjAyNzggNzkuMjA3M1Y3OS40NzM5QzU0LjAyNzggNzkuNzk5NyA1NC4wNzIzIDgwLjEwNjUgNTQuMTYxMSA4MC4zOTQzQzU0LjI1NDIgODAuNjc3OCA1NC4zODc1IDgwLjkyNzUgNTQuNTYxIDgxLjE0MzNDNTQuNzM4OCA4MS4zNTkxIDU0Ljk1MjUgODEuNTI4NCA1NS4yMDIxIDgxLjY1MTFDNTUuNDU2MSA4MS43NzM4IDU1Ljc0MzggODEuODM1MiA1Ni4wNjU0IDgxLjgzNTJDNTYuNDgwMSA4MS44MzUyIDU2LjgzMTQgODEuNzUwNiA1Ny4xMTkxIDgxLjU4MTNDNTcuNDA2OSA4MS40MTIgNTcuNjU4NyA4MS4xODU2IDU3Ljg3NDUgODAuOTAyMUw1OC41ODU0IDgxLjQ2N0M1OC40MzczIDgxLjY5MTMgNTguMjQ5IDgxLjkwNSA1OC4wMjA1IDgyLjEwODJDNTcuNzkyIDgyLjMxMTMgNTcuNTEwNiA4Mi40NzYzIDU3LjE3NjMgODIuNjAzM0M1Ni44NDYyIDgyLjczMDIgNTYuNDU0OCA4Mi43OTM3IDU2LjAwMiA4Mi43OTM3Wk02My4yNjM3IDcyLjkxNjdINjQuNDQ0M1Y4MS4zMzM3TDY0LjM0MjggODIuNjY2N0g2My4yNjM3VjcyLjkxNjdaTTY5LjA4NDUgNzkuMTc1NVY3OS4zMDg4QzY5LjA4NDUgNzkuODA4MiA2OS4wMjUyIDgwLjI3MTYgNjguOTA2NyA4MC42OTlDNjguNzg4MiA4MS4xMjIyIDY4LjYxNDcgODEuNDkwMyA2OC4zODYyIDgxLjgwMzVDNjguMTU3NyA4Mi4xMTY2IDY3Ljg3ODQgODIuMzU5OSA2Ny41NDgzIDgyLjUzMzRDNjcuMjE4MyA4Mi43MDY5IDY2LjgzOTUgODIuNzkzNyA2Ni40MTIxIDgyLjc5MzdDNjUuOTc2MiA4Mi43OTM3IDY1LjU5MzMgODIuNzE5NiA2NS4yNjMyIDgyLjU3MTVDNjQuOTM3MyA4Mi40MTkyIDY0LjY2MjMgODIuMjAxMyA2NC40MzggODEuOTE3N0M2NC4yMTM3IDgxLjYzNDIgNjQuMDMzOSA4MS4yOTE0IDYzLjg5ODQgODAuODg5NEM2My43NjczIDgwLjQ4NzQgNjMuNjc2MyA4MC4wMzQ2IDYzLjYyNTUgNzkuNTMxVjc4Ljk0N0M2My42NzYzIDc4LjQzOTIgNjMuNzY3MyA3Ny45ODQzIDYzLjg5ODQgNzcuNTgyM0M2NC4wMzM5IDc3LjE4MDMgNjQuMjEzNyA3Ni44Mzc1IDY0LjQzOCA3Ni41NTRDNjQuNjYyMyA3Ni4yNjYyIDY0LjkzNzMgNzYuMDQ4MyA2NS4yNjMyIDc1LjkwMDFDNjUuNTg5IDc1Ljc0NzggNjUuOTY3OCA3NS42NzE2IDY2LjM5OTQgNzUuNjcxNkM2Ni44MzExIDc1LjY3MTYgNjcuMjE0IDc1Ljc1NjMgNjcuNTQ4MyA3NS45MjU1QzY3Ljg4MjYgNzYuMDkwNiA2OC4xNjE5IDc2LjMyNzYgNjguMzg2MiA3Ni42MzY1QzY4LjYxNDcgNzYuOTQ1NCA2OC43ODgyIDc3LjMxNTcgNjguOTA2NyA3Ny43NDczQzY5LjAyNTIgNzguMTc0NyA2OS4wODQ1IDc4LjY1MDggNjkuMDg0NSA3OS4xNzU1Wk02Ny45MDM4IDc5LjMwODhWNzkuMTc1NUM2Ny45MDM4IDc4LjgzMjggNjcuODcyMSA3OC41MTExIDY3LjgwODYgNzguMjEwN0M2Ny43NDUxIDc3LjkwNiA2Ny42NDM2IDc3LjYzOTQgNjcuNTAzOSA3Ny40MTA5QzY3LjM2NDMgNzcuMTc4MSA2Ny4xODAyIDc2Ljk5NjIgNjYuOTUxNyA3Ni44NjVDNjYuNzIzMSA3Ni43Mjk2IDY2LjQ0MTcgNzYuNjYxOSA2Ni4xMDc0IDc2LjY2MTlDNjUuODExMiA3Ni42NjE5IDY1LjU1MzEgNzYuNzEyNiA2NS4zMzMgNzYuODE0MkM2NS4xMTcyIDc2LjkxNTggNjQuOTMzMSA3Ny4wNTMzIDY0Ljc4MDggNzcuMjI2OEM2NC42Mjg0IDc3LjM5NjEgNjQuNTAzNiA3Ny41OTA3IDY0LjQwNjIgNzcuODEwOEM2NC4zMTMyIDc4LjAyNjYgNjQuMjQzMyA3OC4yNTA5IDY0LjE5NjggNzguNDgzNlY4MC4wMTM0QzY0LjI2NDUgODAuMzA5NyA2NC4zNzQ1IDgwLjU5NTMgNjQuNTI2OSA4MC44NzA0QzY0LjY4MzQgODEuMTQxMiA2NC44OTA4IDgxLjM2MzQgNjUuMTQ4OSA4MS41MzY5QzY1LjQxMTMgODEuNzEwNCA2NS43MzUgODEuNzk3MSA2Ni4xMjAxIDgxLjc5NzFDNjYuNDM3NSA4MS43OTcxIDY2LjcwODMgODEuNzMzNiA2Ni45MzI2IDgxLjYwNjdDNjcuMTYxMSA4MS40NzU1IDY3LjM0NTIgODEuMjk1NyA2Ny40ODQ5IDgxLjA2NzFDNjcuNjI4NyA4MC44Mzg2IDY3LjczNDUgODAuNTc0MSA2Ny44MDIyIDgwLjI3MzdDNjcuODcgNzkuOTczMiA2Ny45MDM4IDc5LjY1MTYgNjcuOTAzOCA3OS4zMDg4Wk03My40MTk5IDgyLjc5MzdDNzIuOTQxNyA4Mi43OTM3IDcyLjUwOCA4Mi43MTMzIDcyLjExODcgODIuNTUyNUM3MS43MzM2IDgyLjM4NzUgNzEuNDAxNCA4Mi4xNTY4IDcxLjEyMjEgODEuODYwNkM3MC44NDcgODEuNTY0NCA3MC42MzU0IDgxLjIxMzEgNzAuNDg3MyA4MC44MDY5QzcwLjMzOTIgODAuNDAwNiA3MC4yNjUxIDc5Ljk1NjMgNzAuMjY1MSA3OS40NzM5Vjc5LjIwNzNDNzAuMjY1MSA3OC42NDg3IDcwLjM0NzcgNzguMTUxNCA3MC41MTI3IDc3LjcxNTZDNzAuNjc3NyA3Ny4yNzU1IDcwLjkwMiA3Ni45MDMxIDcxLjE4NTUgNzYuNTk4NEM3MS40NjkxIDc2LjI5MzcgNzEuNzkwNyA3Ni4wNjMxIDcyLjE1MDQgNzUuOTA2NUM3Mi41MTAxIDc1Ljc0OTkgNzIuODgyNSA3NS42NzE2IDczLjI2NzYgNzUuNjcxNkM3My43NTg1IDc1LjY3MTYgNzQuMTgxNiA3NS43NTYzIDc0LjUzNzEgNzUuOTI1NUM3NC44OTY4IDc2LjA5NDggNzUuMTkwOSA3Ni4zMzE4IDc1LjQxOTQgNzYuNjM2NUM3NS42NDc5IDc2LjkzNjkgNzUuODE3MiA3Ny4yOTI0IDc1LjkyNzIgNzcuNzAyOUM3Ni4wMzczIDc4LjEwOTEgNzYuMDkyMyA3OC41NTM1IDc2LjA5MjMgNzkuMDM1OVY3OS41NjI3SDcwLjk2MzRWNzguNjA0Mkg3NC45MThWNzguNTE1NEM3NC45MDEgNzguMjEwNyA3NC44Mzc2IDc3LjkxNDUgNzQuNzI3NSA3Ny42MjY3Qzc0LjYyMTcgNzcuMzM4OSA3NC40NTI1IDc3LjEwMiA3NC4yMTk3IDc2LjkxNThDNzMuOTg3IDc2LjcyOTYgNzMuNjY5NiA3Ni42MzY1IDczLjI2NzYgNzYuNjM2NUM3My4wMDEgNzYuNjM2NSA3Mi43NTU1IDc2LjY5MzYgNzIuNTMxMiA3Ni44MDc5QzcyLjMwNyA3Ni45MTc5IDcyLjExNDQgNzcuMDgyOSA3MS45NTM2IDc3LjMwM0M3MS43OTI4IDc3LjUyMyA3MS42NjggNzcuNzkxNyA3MS41NzkxIDc4LjEwOTFDNzEuNDkwMiA3OC40MjY1IDcxLjQ0NTggNzguNzkyNiA3MS40NDU4IDc5LjIwNzNWNzkuNDczOUM3MS40NDU4IDc5Ljc5OTcgNzEuNDkwMiA4MC4xMDY1IDcxLjU3OTEgODAuMzk0M0M3MS42NzIyIDgwLjY3NzggNzEuODA1NSA4MC45Mjc1IDcxLjk3OSA4MS4xNDMzQzcyLjE1NjcgODEuMzU5MSA3Mi4zNzA0IDgxLjUyODQgNzIuNjIwMSA4MS42NTExQzcyLjg3NCA4MS43NzM4IDczLjE2MTggODEuODM1MiA3My40ODM0IDgxLjgzNTJDNzMuODk4MSA4MS44MzUyIDc0LjI0OTMgODEuNzUwNiA3NC41MzcxIDgxLjU4MTNDNzQuODI0OSA4MS40MTIgNzUuMDc2NyA4MS4xODU2IDc1LjI5MjUgODAuOTAyMUw3Ni4wMDM0IDgxLjQ2N0M3NS44NTUzIDgxLjY5MTMgNzUuNjY3IDgxLjkwNSA3NS40Mzg1IDgyLjEwODJDNzUuMjEgODIuMzExMyA3NC45Mjg1IDgyLjQ3NjMgNzQuNTk0MiA4Mi42MDMzQzc0LjI2NDIgODIuNzMwMiA3My44NzI3IDgyLjc5MzcgNzMuNDE5OSA4Mi43OTM3Wk04MS41MTMyIDgxLjQ5MjRWNzcuOTU2OEM4MS41MTMyIDc3LjY4NiA4MS40NTgyIDc3LjQ1MTEgODEuMzQ4MSA3Ny4yNTIyQzgxLjI0MjQgNzcuMDQ5MSA4MS4wODE1IDc2Ljg5MjUgODAuODY1NyA3Ni43ODI1QzgwLjY0OTkgNzYuNjcyNCA4MC4zODMzIDc2LjYxNzQgODAuMDY1OSA3Ni42MTc0Qzc5Ljc2OTcgNzYuNjE3NCA3OS41MDk0IDc2LjY2ODIgNzkuMjg1MiA3Ni43Njk4Qzc5LjA2NTEgNzYuODcxMyA3OC44OTE2IDc3LjAwNDYgNzguNzY0NiA3Ny4xNjk3Qzc4LjY0MTkgNzcuMzM0NyA3OC41ODA2IDc3LjUxMjUgNzguNTgwNiA3Ny43MDI5SDc3LjQwNjJDNzcuNDA2MiA3Ny40NTc0IDc3LjQ2OTcgNzcuMjE0MSA3Ny41OTY3IDc2Ljk3MjlDNzcuNzIzNiA3Ni43MzE3IDc3LjkwNTYgNzYuNTEzOCA3OC4xNDI2IDc2LjMxOTFDNzguMzgzOCA3Ni4xMjAyIDc4LjY3MTUgNzUuOTYzNiA3OS4wMDU5IDc1Ljg0OTRDNzkuMzQ0NCA3NS43MzA5IDc5LjcyMSA3NS42NzE2IDgwLjEzNTcgNzUuNjcxNkM4MC42MzUxIDc1LjY3MTYgODEuMDc1MiA3NS43NTYzIDgxLjQ1NjEgNzUuOTI1NUM4MS44NDExIDc2LjA5NDggODIuMTQxNiA3Ni4zNTA4IDgyLjM1NzQgNzYuNjkzNkM4Mi41Nzc1IDc3LjAzMjEgODIuNjg3NSA3Ny40NTc0IDgyLjY4NzUgNzcuOTY5NVY4MS4xNjg3QzgyLjY4NzUgODEuMzk3MiA4Mi43MDY1IDgxLjY0MDUgODIuNzQ0NiA4MS44OTg3QzgyLjc4NjkgODIuMTU2OCA4Mi44NDgzIDgyLjM3OSA4Mi45Mjg3IDgyLjU2NTJWODIuNjY2N0g4MS43MDM2QzgxLjY0NDQgODIuNTMxMyA4MS41OTc4IDgyLjM1MTUgODEuNTY0IDgyLjEyNzJDODEuNTMwMSA4MS44OTg3IDgxLjUxMzIgODEuNjg3MSA4MS41MTMyIDgxLjQ5MjRaTTgxLjcxNjMgNzguNTAyN0w4MS43MjkgNzkuMzI3OUg4MC41NDJDODAuMjA3NyA3OS4zMjc5IDc5LjkwOTMgNzkuMzU1NCA3OS42NDcgNzkuNDEwNEM3OS4zODQ2IDc5LjQ2MTIgNzkuMTY0NiA3OS41Mzk1IDc4Ljk4NjggNzkuNjQ1M0M3OC44MDkxIDc5Ljc1MTEgNzguNjczNyA3OS44ODQ0IDc4LjU4MDYgODAuMDQ1MkM3OC40ODc1IDgwLjIwMTcgNzguNDQwOSA4MC4zODU4IDc4LjQ0MDkgODAuNTk3NEM3OC40NDA5IDgwLjgxMzIgNzguNDg5NiA4MS4wMSA3OC41ODY5IDgxLjE4NzdDNzguNjg0MiA4MS4zNjU1IDc4LjgzMDIgODEuNTA3MiA3OS4wMjQ5IDgxLjYxM0M3OS4yMjM4IDgxLjcxNDYgNzkuNDY3MSA4MS43NjU0IDc5Ljc1NDkgODEuNzY1NEM4MC4xMTQ2IDgxLjc2NTQgODAuNDMyIDgxLjY4OTIgODAuNzA3IDgxLjUzNjlDODAuOTgyMSA4MS4zODQ1IDgxLjIgODEuMTk4MyA4MS4zNjA4IDgwLjk3ODNDODEuNTI1OSA4MC43NTgyIDgxLjYxNDcgODAuNTQ0NSA4MS42Mjc0IDgwLjMzNzJMODIuMTI4OSA4MC45MDIxQzgyLjA5OTMgODEuMDc5OCA4Mi4wMTg5IDgxLjI3NjYgODEuODg3NyA4MS40OTI0QzgxLjc1NjUgODEuNzA4MyA4MS41ODA5IDgxLjkxNTYgODEuMzYwOCA4Mi4xMTQ1QzgxLjE0NSA4Mi4zMDkyIDgwLjg4NjkgODIuNDcyMSA4MC41ODY0IDgyLjYwMzNDODAuMjkwMiA4Mi43MzAyIDc5Ljk1NTkgODIuNzkzNyA3OS41ODM1IDgyLjc5MzdDNzkuMTE4IDgyLjc5MzcgNzguNzA5NiA4Mi43MDI3IDc4LjM1ODQgODIuNTIwOEM3OC4wMTE0IDgyLjMzODggNzcuNzQwNiA4Mi4wOTU1IDc3LjU0NTkgODEuNzkwOEM3Ny4zNTU1IDgxLjQ4MTkgNzcuMjYwMyA4MS4xMzcgNzcuMjYwMyA4MC43NTYxQzc3LjI2MDMgODAuMzg3OSA3Ny4zMzIyIDgwLjA2NDIgNzcuNDc2MSA3OS43ODQ5Qzc3LjYyIDc5LjUwMTQgNzcuODI3MyA3OS4yNjY1IDc4LjA5ODEgNzkuMDgwM0M3OC4zNjkgNzguODg5OSA3OC42OTQ4IDc4Ljc0NiA3OS4wNzU3IDc4LjY0ODdDNzkuNDU2NSA3OC41NTE0IDc5Ljg4MTggNzguNTAyNyA4MC4zNTE2IDc4LjUwMjdIODEuNzE2M1pNODcuMjgzMiA4MS44Mjg5Qzg3LjU2MjUgODEuODI4OSA4Ny44MjA2IDgxLjc3MTcgODguMDU3NiA4MS42NTc1Qzg4LjI5NDYgODEuNTQzMiA4OC40ODkzIDgxLjM4NjYgODguNjQxNiA4MS4xODc3Qzg4Ljc5MzkgODAuOTg0NiA4OC44ODA3IDgwLjc1NCA4OC45MDE5IDgwLjQ5NThIOTAuMDE5Qzg5Ljk5NzkgODAuOTAyMSA4OS44NjA0IDgxLjI4MDggODkuNjA2NCA4MS42MzIxQzg5LjM1NjggODEuOTc5MSA4OS4wMjg4IDgyLjI2MDUgODguNjIyNiA4Mi40NzYzQzg4LjIxNjMgODIuNjg3OSA4Ny43Njk5IDgyLjc5MzcgODcuMjgzMiA4Mi43OTM3Qzg2Ljc2NjkgODIuNzkzNyA4Ni4zMTYyIDgyLjcwMjcgODUuOTMxMiA4Mi41MjA4Qzg1LjU1MDMgODIuMzM4OCA4NS4yMzI5IDgyLjA4OTEgODQuOTc5IDgxLjc3MTdDODQuNzI5MyA4MS40NTQzIDg0LjU0MSA4MS4wOTA0IDg0LjQxNDEgODAuNjc5OUM4NC4yOTEzIDgwLjI2NTIgODQuMjMgNzkuODI3MiA4NC4yMyA3OS4zNjZWNzkuMDk5NEM4NC4yMyA3OC42MzgxIDg0LjI5MTMgNzguMjAyMiA4NC40MTQxIDc3Ljc5MTdDODQuNTQxIDc3LjM3NyA4NC43MjkzIDc3LjAxMSA4NC45NzkgNzYuNjkzNkM4NS4yMzI5IDc2LjM3NjIgODUuNTUwMyA3Ni4xMjY1IDg1LjkzMTIgNzUuOTQ0NkM4Ni4zMTYyIDc1Ljc2MjYgODYuNzY2OSA3NS42NzE2IDg3LjI4MzIgNzUuNjcxNkM4Ny44MjA2IDc1LjY3MTYgODguMjkwNCA3NS43ODE3IDg4LjY5MjQgNzYuMDAxN0M4OS4wOTQ0IDc2LjIxNzUgODkuNDA5NyA3Ni41MTM4IDg5LjYzODIgNzYuODkwNEM4OS44NzA5IDc3LjI2MjggODkuOTk3OSA3Ny42ODYgOTAuMDE5IDc4LjE1OTlIODguOTAxOUM4OC44ODA3IDc3Ljg3NjQgODguODAwMyA3Ny42MjA0IDg4LjY2MDYgNzcuMzkxOEM4OC41MjUyIDc3LjE2MzMgODguMzM5IDc2Ljk4MTQgODguMTAyMSA3Ni44NDU5Qzg3Ljg2OTMgNzYuNzA2MyA4Ny41OTY0IDc2LjYzNjUgODcuMjgzMiA3Ni42MzY1Qzg2LjkyMzUgNzYuNjM2NSA4Ni42MjA5IDc2LjcwODQgODYuMzc1NSA3Ni44NTIzQzg2LjEzNDMgNzYuOTkxOSA4NS45NDE3IDc3LjE4MjQgODUuNzk3OSA3Ny40MjM2Qzg1LjY1ODIgNzcuNjYwNiA4NS41NTY2IDc3LjkyNSA4NS40OTMyIDc4LjIxN0M4NS40MzM5IDc4LjUwNDggODUuNDA0MyA3OC43OTg5IDg1LjQwNDMgNzkuMDk5NFY3OS4zNjZDODUuNDA0MyA3OS42NjY0IDg1LjQzMzkgNzkuOTYyNiA4NS40OTMyIDgwLjI1NDZDODUuNTUyNCA4MC41NDY2IDg1LjY1MTkgODAuODExMSA4NS43OTE1IDgxLjA0ODFDODUuOTM1NCA4MS4yODUxIDg2LjEyNzkgODEuNDc1NSA4Ni4zNjkxIDgxLjYxOTRDODYuNjE0NiA4MS43NTkgODYuOTE5MyA4MS44Mjg5IDg3LjI4MzIgODEuODI4OVpNOTIuNTEzNyA3Mi45MTY3VjgyLjY2NjdIOTEuMzM5NFY3Mi45MTY3SDkyLjUxMzdaTTkyLjIzNDQgNzguOTcyNEw5MS43NDU2IDc4Ljk1MzRDOTEuNzQ5OCA3OC40ODM2IDkxLjgxOTcgNzguMDQ5OSA5MS45NTUxIDc3LjY1MjFDOTIuMDkwNSA3Ny4yNTAxIDkyLjI4MDkgNzYuOTAxIDkyLjUyNjQgNzYuNjA0N0M5Mi43NzE4IDc2LjMwODUgOTMuMDYzOCA3Ni4wOCA5My40MDIzIDc1LjkxOTJDOTMuNzQ1MSA3NS43NTQyIDk0LjEyMzkgNzUuNjcxNiA5NC41Mzg2IDc1LjY3MTZDOTQuODc3MSA3NS42NzE2IDk1LjE4MTggNzUuNzE4MiA5NS40NTI2IDc1LjgxMTNDOTUuNzIzNSA3NS45MDAxIDk1Ljk1NDEgNzYuMDQ0IDk2LjE0NDUgNzYuMjQyOUM5Ni4zMzkyIDc2LjQ0MTggOTYuNDg3MyA3Ni43IDk2LjU4ODkgNzcuMDE3M0M5Ni42OTA0IDc3LjMzMDUgOTYuNzQxMiA3Ny43MTM1IDk2Ljc0MTIgNzguMTY2M1Y4Mi42NjY3SDk1LjU2MDVWNzguMTUzNkM5NS41NjA1IDc3Ljc5MzkgOTUuNTA3NiA3Ny41MDYxIDk1LjQwMTkgNzcuMjkwM0M5NS4yOTYxIDc3LjA3MDIgOTUuMTQxNiA3Ni45MTE1IDk0LjkzODUgNzYuODE0MkM5NC43MzU0IDc2LjcxMjYgOTQuNDg1NyA3Ni42NjE5IDk0LjE4OTUgNzYuNjYxOUM5My44OTc1IDc2LjY2MTkgOTMuNjMwOSA3Ni43MjMyIDkzLjM4OTYgNzYuODQ1OUM5My4xNTI3IDc2Ljk2ODcgOTIuOTQ3NCA3Ny4xMzc5IDkyLjc3MzkgNzcuMzUzOEM5Mi42MDQ3IDc3LjU2OTYgOTIuNDcxNCA3Ny44MTcxIDkyLjM3NCA3OC4wOTY0QzkyLjI4MDkgNzguMzcxNSA5Mi4yMzQ0IDc4LjY2MzUgOTIuMjM0NCA3OC45NzI0WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHQ8cmVjdCB3aWR0aD1cIjI2OFwiIGhlaWdodD1cIjI2LjMzMzNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTUgOTEuMzMzMylcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0PHBhdGggZD1cIk0yNy4yNTM0IDEwNC42MDFMMjYuMzE0IDEwNC4zNkwyNi43NzczIDk5Ljc1NzhIMzEuNTE5VjEwMC44NDNIMjcuNzczOUwyNy40OTQ2IDEwMy4zNTdDMjcuNjYzOSAxMDMuMjYgMjcuODc3NiAxMDMuMTY5IDI4LjEzNTcgMTAzLjA4NEMyOC4zOTgxIDEwMi45OTkgMjguNjk4NiAxMDIuOTU3IDI5LjAzNzEgMTAyLjk1N0MyOS40NjQ1IDEwMi45NTcgMjkuODQ3NSAxMDMuMDMxIDMwLjE4NiAxMDMuMTc5QzMwLjUyNDYgMTAzLjMyMyAzMC44MTIzIDEwMy41MyAzMS4wNDkzIDEwMy44MDFDMzEuMjkwNSAxMDQuMDcyIDMxLjQ3NDYgMTA0LjM5OCAzMS42MDE2IDEwNC43NzlDMzEuNzI4NSAxMDUuMTYgMzEuNzkyIDEwNS41ODUgMzEuNzkyIDEwNi4wNTVDMzEuNzkyIDEwNi40OTkgMzEuNzMwNiAxMDYuOTA3IDMxLjYwNzkgMTA3LjI4QzMxLjQ4OTQgMTA3LjY1MiAzMS4zMDk2IDEwNy45NzggMzEuMDY4NCAxMDguMjU3QzMwLjgyNzEgMTA4LjUzMiAzMC41MjI1IDEwOC43NDYgMzAuMTU0MyAxMDguODk4QzI5Ljc5MDQgMTA5LjA1MSAyOS4zNjA4IDEwOS4xMjcgMjguODY1NyAxMDkuMTI3QzI4LjQ5MzMgMTA5LjEyNyAyOC4xNCAxMDkuMDc2IDI3LjgwNTcgMTA4Ljk3NUMyNy40NzU2IDEwOC44NjkgMjcuMTc5NCAxMDguNzEgMjYuOTE3IDEwOC40OTlDMjYuNjU4OSAxMDguMjgzIDI2LjQ0NzMgMTA4LjAxNiAyNi4yODIyIDEwNy42OTlDMjYuMTIxNCAxMDcuMzc3IDI2LjAxOTkgMTA3IDI1Ljk3NzUgMTA2LjU2OUgyNy4wOTQ3QzI3LjE0NTUgMTA2LjkxNiAyNy4yNDcxIDEwNy4yMDggMjcuMzk5NCAxMDcuNDQ1QzI3LjU1MTggMTA3LjY4MiAyNy43NTA3IDEwNy44NjIgMjcuOTk2MSAxMDcuOTg0QzI4LjI0NTggMTA4LjEwMyAyOC41MzU2IDEwOC4xNjIgMjguODY1NyAxMDguMTYyQzI5LjE0NSAxMDguMTYyIDI5LjM5MjYgMTA4LjExMyAyOS42MDg0IDEwOC4wMTZDMjkuODI0MiAxMDcuOTE5IDMwLjAwNjIgMTA3Ljc3OSAzMC4xNTQzIDEwNy41OTdDMzAuMzAyNCAxMDcuNDE1IDMwLjQxNDYgMTA3LjE5NSAzMC40OTA3IDEwNi45MzdDMzAuNTcxMSAxMDYuNjc5IDMwLjYxMTMgMTA2LjM4OSAzMC42MTEzIDEwNi4wNjdDMzAuNjExMyAxMDUuNzc1IDMwLjU3MTEgMTA1LjUwNSAzMC40OTA3IDEwNS4yNTVDMzAuNDEwMyAxMDUuMDA1IDMwLjI4OTcgMTA0Ljc4NyAzMC4xMjg5IDEwNC42MDFDMjkuOTcyMyAxMDQuNDE1IDI5Ljc3OTggMTA0LjI3MSAyOS41NTEzIDEwNC4xNjlDMjkuMzIyOCAxMDQuMDY0IDI5LjA2MDQgMTA0LjAxMSAyOC43NjQyIDEwNC4wMTFDMjguMzcwNiAxMDQuMDExIDI4LjA3MjMgMTA0LjA2NCAyNy44NjkxIDEwNC4xNjlDMjcuNjcwMiAxMDQuMjc1IDI3LjQ2NSAxMDQuNDE5IDI3LjI1MzQgMTA0LjYwMVpNMzcuNjAwMSAxMDMuNDk3VjEwOUgzNi40MTk0VjEwMi4xMzJIMzcuNTM2NkwzNy42MDAxIDEwMy40OTdaTTM3LjM1ODkgMTA1LjMwNkwzNi44MTMgMTA1LjI4N0MzNi44MTcyIDEwNC44MTcgMzYuODc4NiAxMDQuMzgzIDM2Ljk5NzEgMTAzLjk4NUMzNy4xMTU2IDEwMy41ODMgMzcuMjkxMiAxMDMuMjM0IDM3LjUyMzkgMTAyLjkzOEMzNy43NTY3IDEwMi42NDIgMzguMDQ2NSAxMDIuNDEzIDM4LjM5MzYgMTAyLjI1MkMzOC43NDA2IDEwMi4wODcgMzkuMTQyNiAxMDIuMDA1IDM5LjU5OTYgMTAyLjAwNUMzOS45MjEyIDEwMi4wMDUgNDAuMjE3NCAxMDIuMDUxIDQwLjQ4ODMgMTAyLjE0NUM0MC43NTkxIDEwMi4yMzMgNDAuOTk0IDEwMi4zNzUgNDEuMTkyOSAxMDIuNTdDNDEuMzkxOCAxMDIuNzY0IDQxLjU0NjIgMTAzLjAxNCA0MS42NTYyIDEwMy4zMTlDNDEuNzY2MyAxMDMuNjI0IDQxLjgyMTMgMTAzLjk5MiA0MS44MjEzIDEwNC40MjNWMTA5SDQwLjY0N1YxMDQuNDhDNDAuNjQ3IDEwNC4xMjEgNDAuNTg1NiAxMDMuODMzIDQwLjQ2MjkgMTAzLjYxN0M0MC4zNDQ0IDEwMy40MDEgNDAuMTc1MSAxMDMuMjQ1IDM5Ljk1NTEgMTAzLjE0N0MzOS43MzUgMTAzLjA0NiAzOS40NzY5IDEwMi45OTUgMzkuMTgwNyAxMDIuOTk1QzM4LjgzMzcgMTAyLjk5NSAzOC41NDM4IDEwMy4wNTYgMzguMzExIDEwMy4xNzlDMzguMDc4MyAxMDMuMzAyIDM3Ljg5MjEgMTAzLjQ3MSAzNy43NTI0IDEwMy42ODdDMzcuNjEyOCAxMDMuOTAzIDM3LjUxMTIgMTA0LjE1IDM3LjQ0NzggMTA0LjQzQzM3LjM4ODUgMTA0LjcwNSAzNy4zNTg5IDEwNC45OTcgMzcuMzU4OSAxMDUuMzA2Wk00MS44MDg2IDEwNC42NThMNDEuMDIxNSAxMDQuODk5QzQxLjAyNTcgMTA0LjUyMyA0MS4wODcxIDEwNC4xNjEgNDEuMjA1NiAxMDMuODE0QzQxLjMyODMgMTAzLjQ2NyA0MS41MDM5IDEwMy4xNTggNDEuNzMyNCAxMDIuODg3QzQxLjk2NTIgMTAyLjYxNiA0Mi4yNTA4IDEwMi40MDMgNDIuNTg5NCAxMDIuMjQ2QzQyLjkyNzkgMTAyLjA4NSA0My4zMTUxIDEwMi4wMDUgNDMuNzUxIDEwMi4wMDVDNDQuMTE5MSAxMDIuMDA1IDQ0LjQ0NSAxMDIuMDU0IDQ0LjcyODUgMTAyLjE1MUM0NS4wMTYzIDEwMi4yNDggNDUuMjU3NSAxMDIuMzk4IDQ1LjQ1MjEgMTAyLjYwMkM0NS42NTEgMTAyLjggNDUuODAxMyAxMDMuMDU2IDQ1LjkwMjggMTAzLjM3QzQ2LjAwNDQgMTAzLjY4MyA0Ni4wNTUyIDEwNC4wNTUgNDYuMDU1MiAxMDQuNDg3VjEwOUg0NC44NzQ1VjEwNC40NzRDNDQuODc0NSAxMDQuMDg5IDQ0LjgxMzIgMTAzLjc5MSA0NC42OTA0IDEwMy41NzlDNDQuNTcxOSAxMDMuMzYzIDQ0LjQwMjcgMTAzLjIxMyA0NC4xODI2IDEwMy4xMjhDNDMuOTY2OCAxMDMuMDQgNDMuNzA4NyAxMDIuOTk1IDQzLjQwODIgMTAyLjk5NUM0My4xNTAxIDEwMi45OTUgNDIuOTIxNSAxMDMuMDQgNDIuNzIyNyAxMDMuMTI4QzQyLjUyMzggMTAzLjIxNyA0Mi4zNTY2IDEwMy4zNCA0Mi4yMjEyIDEwMy40OTdDNDIuMDg1OCAxMDMuNjQ5IDQxLjk4MjEgMTAzLjgyNSA0MS45MTAyIDEwNC4wMjNDNDEuODQyNCAxMDQuMjIyIDQxLjgwODYgMTA0LjQzNCA0MS44MDg2IDEwNC42NThaTTQ5LjEwODQgMTAyLjEzMlYxMDlINDcuOTI3N1YxMDIuMTMySDQ5LjEwODRaTTQ3LjgzODkgMTAwLjMxQzQ3LjgzODkgMTAwLjEyIDQ3Ljg5NiA5OS45NTg4IDQ4LjAxMDMgOTkuODI3NkM0OC4xMjg3IDk5LjY5NjUgNDguMzAyMiA5OS42MzA5IDQ4LjUzMDggOTkuNjMwOUM0OC43NTUgOTkuNjMwOSA0OC45MjY0IDk5LjY5NjUgNDkuMDQ0OSA5OS44Mjc2QzQ5LjE2NzYgOTkuOTU4OCA0OS4yMjkgMTAwLjEyIDQ5LjIyOSAxMDAuMzFDNDkuMjI5IDEwMC40OTIgNDkuMTY3NiAxMDAuNjQ5IDQ5LjA0NDkgMTAwLjc4QzQ4LjkyNjQgMTAwLjkwNyA0OC43NTUgMTAwLjk3IDQ4LjUzMDggMTAwLjk3QzQ4LjMwMjIgMTAwLjk3IDQ4LjEyODcgMTAwLjkwNyA0OC4wMTAzIDEwMC43OEM0Ny44OTYgMTAwLjY0OSA0Ny44Mzg5IDEwMC40OTIgNDcuODM4OSAxMDAuMzFaTTUyLjE2OCAxMDMuNTk4VjEwOUg1MC45OTM3VjEwMi4xMzJINTIuMTA0NUw1Mi4xNjggMTAzLjU5OFpNNTEuODg4NyAxMDUuMzA2TDUxLjM5OTkgMTA1LjI4N0M1MS40MDQxIDEwNC44MTcgNTEuNDc0IDEwNC4zODMgNTEuNjA5NCAxMDMuOTg1QzUxLjc0NDggMTAzLjU4MyA1MS45MzUyIDEwMy4yMzQgNTIuMTgwNyAxMDIuOTM4QzUyLjQyNjEgMTAyLjY0MiA1Mi43MTgxIDEwMi40MTMgNTMuMDU2NiAxMDIuMjUyQzUzLjM5OTQgMTAyLjA4NyA1My43NzgyIDEwMi4wMDUgNTQuMTkyOSAxMDIuMDA1QzU0LjUzMTQgMTAyLjAwNSA1NC44MzYxIDEwMi4wNTEgNTUuMTA2OSAxMDIuMTQ1QzU1LjM3NzggMTAyLjIzMyA1NS42MDg0IDEwMi4zNzcgNTUuNzk4OCAxMDIuNTc2QzU1Ljk5MzUgMTAyLjc3NSA1Ni4xNDE2IDEwMy4wMzMgNTYuMjQzMiAxMDMuMzUxQzU2LjM0NDcgMTAzLjY2NCA1Ni4zOTU1IDEwNC4wNDcgNTYuMzk1NSAxMDQuNVYxMDlINTUuMjE0OFYxMDQuNDg3QzU1LjIxNDggMTA0LjEyNyA1NS4xNjE5IDEwMy44MzkgNTUuMDU2MiAxMDMuNjI0QzU0Ljk1MDQgMTAzLjQwMyA1NC43OTU5IDEwMy4yNDUgNTQuNTkyOCAxMDMuMTQ3QzU0LjM4OTYgMTAzLjA0NiA1NC4xNCAxMDIuOTk1IDUzLjg0MzggMTAyLjk5NUM1My41NTE4IDEwMi45OTUgNTMuMjg1MiAxMDMuMDU2IDUzLjA0MzkgMTAzLjE3OUM1Mi44MDcgMTAzLjMwMiA1Mi42MDE3IDEwMy40NzEgNTIuNDI4MiAxMDMuNjg3QzUyLjI1OSAxMDMuOTAzIDUyLjEyNTcgMTA0LjE1IDUyLjAyODMgMTA0LjQzQzUxLjkzNTIgMTA0LjcwNSA1MS44ODg3IDEwNC45OTcgNTEuODg4NyAxMDUuMzA2Wk02Mi4zODEzIDEwNy40MTNWMTAyLjEzMkg2My41NjJWMTA5SDYyLjQzODVMNjIuMzgxMyAxMDcuNDEzWk02Mi42MDM1IDEwNS45NjZMNjMuMDkyMyAxMDUuOTUzQzYzLjA5MjMgMTA2LjQxIDYzLjA0MzYgMTA2LjgzMyA2Mi45NDYzIDEwNy4yMjNDNjIuODUzMiAxMDcuNjA4IDYyLjcwMDggMTA3Ljk0MiA2Mi40ODkzIDEwOC4yMjZDNjIuMjc3NyAxMDguNTA5IDYyLjAwMDUgMTA4LjczMSA2MS42NTc3IDEwOC44OTJDNjEuMzE0OSAxMDkuMDQ5IDYwLjg5ODEgMTA5LjEyNyA2MC40MDcyIDEwOS4xMjdDNjAuMDcyOSAxMDkuMTI3IDU5Ljc2NjEgMTA5LjA3OCA1OS40ODY4IDEwOC45ODFDNTkuMjExOCAxMDguODg0IDU4Ljk3NDggMTA4LjczMyA1OC43NzU5IDEwOC41M0M1OC41NzcgMTA4LjMyNyA1OC40MjI1IDEwOC4wNjMgNTguMzEyNSAxMDcuNzM3QzU4LjIwNjcgMTA3LjQxMSA1OC4xNTM4IDEwNy4wMiA1OC4xNTM4IDEwNi41NjJWMTAyLjEzMkg1OS4zMjgxVjEwNi41NzVDNTkuMzI4MSAxMDYuODg0IDU5LjM2MiAxMDcuMTQgNTkuNDI5NyAxMDcuMzQzQzU5LjUwMTYgMTA3LjU0MiA1OS41OTY4IDEwNy43MDEgNTkuNzE1MyAxMDcuODE5QzU5LjgzODEgMTA3LjkzNCA1OS45NzM1IDEwOC4wMTQgNjAuMTIxNiAxMDguMDYxQzYwLjI3MzkgMTA4LjEwNyA2MC40MzA1IDEwOC4xMyA2MC41OTEzIDEwOC4xM0M2MS4wOTA3IDEwOC4xMyA2MS40ODYzIDEwOC4wMzUgNjEuNzc4MyAxMDcuODQ1QzYyLjA3MDMgMTA3LjY1IDYyLjI3OTggMTA3LjM5IDYyLjQwNjcgMTA3LjA2NEM2Mi41Mzc5IDEwNi43MzQgNjIuNjAzNSAxMDYuMzY4IDYyLjYwMzUgMTA1Ljk2NlpNNjguMjI3NSAxMDIuMTMyVjEwMy4wMzNINjQuNTE0MlYxMDIuMTMySDY4LjIyNzVaTTY1Ljc3MSAxMDAuNDYySDY2Ljk0NTNWMTA3LjI5OUM2Ni45NDUzIDEwNy41MzIgNjYuOTgxMyAxMDcuNzA3IDY3LjA1MzIgMTA3LjgyNkM2Ny4xMjUyIDEwNy45NDQgNjcuMjE4MyAxMDguMDIyIDY3LjMzMjUgMTA4LjA2MUM2Ny40NDY4IDEwOC4wOTkgNjcuNTY5NSAxMDguMTE4IDY3LjcwMDcgMTA4LjExOEM2Ny43OTggMTA4LjExOCA2Ny44OTk2IDEwOC4xMDkgNjguMDA1NCAxMDguMDkyQzY4LjExNTQgMTA4LjA3MSA2OC4xOTc5IDEwOC4wNTQgNjguMjUyOSAxMDguMDQyTDY4LjI1OTMgMTA5QzY4LjE2NjIgMTA5LjAzIDY4LjA0MzUgMTA5LjA1NyA2Ny44OTExIDEwOS4wODNDNjcuNzQzIDEwOS4xMTIgNjcuNTYzMiAxMDkuMTI3IDY3LjM1MTYgMTA5LjEyN0M2Ny4wNjM4IDEwOS4xMjcgNjYuNzk5MyAxMDkuMDcgNjYuNTU4MSAxMDguOTU2QzY2LjMxNjkgMTA4Ljg0MSA2Ni4xMjQzIDEwOC42NTEgNjUuOTgwNSAxMDguMzg0QzY1Ljg0MDggMTA4LjExMyA2NS43NzEgMTA3Ljc1IDY1Ljc3MSAxMDcuMjkyVjEwMC40NjJaTTcyLjQ1NTEgMTA5LjEyN0M3MS45NzY5IDEwOS4xMjcgNzEuNTQzMSAxMDkuMDQ3IDcxLjE1MzggMTA4Ljg4NkM3MC43Njg3IDEwOC43MjEgNzAuNDM2NSAxMDguNDkgNzAuMTU3MiAxMDguMTk0QzY5Ljg4MjIgMTA3Ljg5OCA2OS42NzA2IDEwNy41NDYgNjkuNTIyNSAxMDcuMTRDNjkuMzc0MyAxMDYuNzM0IDY5LjMwMDMgMTA2LjI5IDY5LjMwMDMgMTA1LjgwN1YxMDUuNTQxQzY5LjMwMDMgMTA0Ljk4MiA2OS4zODI4IDEwNC40ODUgNjkuNTQ3OSAxMDQuMDQ5QzY5LjcxMjkgMTAzLjYwOSA2OS45MzcyIDEwMy4yMzYgNzAuMjIwNyAxMDIuOTMyQzcwLjUwNDIgMTAyLjYyNyA3MC44MjU4IDEwMi4zOTYgNzEuMTg1NSAxMDIuMjRDNzEuNTQ1MiAxMDIuMDgzIDcxLjkxNzYgMTAyLjAwNSA3Mi4zMDI3IDEwMi4wMDVDNzIuNzkzNiAxMDIuMDA1IDczLjIxNjggMTAyLjA5IDczLjU3MjMgMTAyLjI1OUM3My45MzIgMTAyLjQyOCA3NC4yMjYxIDEwMi42NjUgNzQuNDU0NiAxMDIuOTdDNzQuNjgzMSAxMDMuMjcgNzQuODUyNCAxMDMuNjI2IDc0Ljk2MjQgMTA0LjAzNkM3NS4wNzI0IDEwNC40NDIgNzUuMTI3NCAxMDQuODg3IDc1LjEyNzQgMTA1LjM2OVYxMDUuODk2SDY5Ljk5ODVWMTA0LjkzOEg3My45NTMxVjEwNC44NDlDNzMuOTM2MiAxMDQuNTQ0IDczLjg3MjcgMTA0LjI0OCA3My43NjI3IDEwMy45NkM3My42NTY5IDEwMy42NzIgNzMuNDg3NiAxMDMuNDM1IDczLjI1NDkgMTAzLjI0OUM3My4wMjIxIDEwMy4wNjMgNzIuNzA0OCAxMDIuOTcgNzIuMzAyNyAxMDIuOTdDNzIuMDM2MSAxMDIuOTcgNzEuNzkwNyAxMDMuMDI3IDcxLjU2NjQgMTAzLjE0MUM3MS4zNDIxIDEwMy4yNTEgNzEuMTQ5NiAxMDMuNDE2IDcwLjk4ODggMTAzLjYzNkM3MC44MjggMTAzLjg1NiA3MC43MDMxIDEwNC4xMjUgNzAuNjE0MyAxMDQuNDQyQzcwLjUyNTQgMTA0Ljc2IDcwLjQ4MSAxMDUuMTI2IDcwLjQ4MSAxMDUuNTQxVjEwNS44MDdDNzAuNDgxIDEwNi4xMzMgNzAuNTI1NCAxMDYuNDQgNzAuNjE0MyAxMDYuNzI4QzcwLjcwNzQgMTA3LjAxMSA3MC44NDA3IDEwNy4yNjEgNzEuMDE0MiAxMDcuNDc3QzcxLjE5MTkgMTA3LjY5MiA3MS40MDU2IDEwNy44NjIgNzEuNjU1MyAxMDcuOTg0QzcxLjkwOTIgMTA4LjEwNyA3Mi4xOTY5IDEwOC4xNjggNzIuNTE4NiAxMDguMTY4QzcyLjkzMzMgMTA4LjE2OCA3My4yODQ1IDEwOC4wODQgNzMuNTcyMyAxMDcuOTE1QzczLjg2IDEwNy43NDUgNzQuMTExOCAxMDcuNTE5IDc0LjMyNzYgMTA3LjIzNUw3NS4wMzg2IDEwNy44Qzc0Ljg5MDUgMTA4LjAyNSA3NC43MDIxIDEwOC4yMzggNzQuNDczNiAxMDguNDQxQzc0LjI0NTEgMTA4LjY0NSA3My45NjM3IDEwOC44MSA3My42Mjk0IDEwOC45MzdDNzMuMjk5MyAxMDkuMDYzIDcyLjkwNzkgMTA5LjEyNyA3Mi40NTUxIDEwOS4xMjdaTTgwLjQ5NzYgMTA3LjE3OEM4MC40OTc2IDEwNy4wMDkgODAuNDU5NSAxMDYuODUyIDgwLjM4MzMgMTA2LjcwOEM4MC4zMTE0IDEwNi41NiA4MC4xNjExIDEwNi40MjcgNzkuOTMyNiAxMDYuMzA5Qzc5LjcwODMgMTA2LjE4NiA3OS4zNjk4IDEwNi4wOCA3OC45MTcgMTA1Ljk5MUM3OC41MzYxIDEwNS45MTEgNzguMTkxMiAxMDUuODE2IDc3Ljg4MjMgMTA1LjcwNkM3Ny41Nzc2IDEwNS41OTYgNzcuMzE3NCAxMDUuNDYyIDc3LjEwMTYgMTA1LjMwNkM3Ni44OSAxMDUuMTQ5IDc2LjcyNzEgMTA0Ljk2NSA3Ni42MTI4IDEwNC43NTNDNzYuNDk4NSAxMDQuNTQyIDc2LjQ0MTQgMTA0LjI5NCA3Ni40NDE0IDEwNC4wMTFDNzYuNDQxNCAxMDMuNzQgNzYuNTAwNyAxMDMuNDg0IDc2LjYxOTEgMTAzLjI0M0M3Ni43NDE5IDEwMy4wMDEgNzYuOTEzMiAxMDIuNzg4IDc3LjEzMzMgMTAyLjYwMkM3Ny4zNTc2IDEwMi40MTUgNzcuNjI2MyAxMDIuMjY5IDc3LjkzOTUgMTAyLjE2NEM3OC4yNTI2IDEwMi4wNTggNzguNjAxNyAxMDIuMDA1IDc4Ljk4NjggMTAyLjAwNUM3OS41MzY5IDEwMi4wMDUgODAuMDA2NyAxMDIuMTAyIDgwLjM5NiAxMDIuMjk3QzgwLjc4NTMgMTAyLjQ5MiA4MS4wODM3IDEwMi43NTIgODEuMjkxIDEwMy4wNzhDODEuNDk4NCAxMDMuMzk5IDgxLjYwMjEgMTAzLjc1NyA4MS42MDIxIDEwNC4xNUg4MC40Mjc3QzgwLjQyNzcgMTAzLjk2IDgwLjM3MDYgMTAzLjc3NiA4MC4yNTYzIDEwMy41OThDODAuMTQ2MyAxMDMuNDE2IDc5Ljk4MzQgMTAzLjI2NiA3OS43Njc2IDEwMy4xNDdDNzkuNTU2IDEwMy4wMjkgNzkuMjk1NyAxMDIuOTcgNzguOTg2OCAxMDIuOTdDNzguNjYxIDEwMi45NyA3OC4zOTY1IDEwMy4wMjEgNzguMTkzNCAxMDMuMTIyQzc3Ljk5NDUgMTAzLjIxOSA3Ny44NDg1IDEwMy4zNDQgNzcuNzU1NCAxMDMuNDk3Qzc3LjY2NjUgMTAzLjY0OSA3Ny42MjIxIDEwMy44MSA3Ny42MjIxIDEwMy45NzlDNzcuNjIyMSAxMDQuMTA2IDc3LjY0MzIgMTA0LjIyIDc3LjY4NTUgMTA0LjMyMkM3Ny43MzIxIDEwNC40MTkgNzcuODEyNSAxMDQuNTEgNzcuOTI2OCAxMDQuNTk1Qzc4LjA0MSAxMDQuNjc1IDc4LjIwMTggMTA0Ljc1MSA3OC40MDkyIDEwNC44MjNDNzguNjE2NSAxMDQuODk1IDc4Ljg4MSAxMDQuOTY3IDc5LjIwMjYgMTA1LjAzOUM3OS43NjU1IDEwNS4xNjYgODAuMjI4OCAxMDUuMzE4IDgwLjU5MjggMTA1LjQ5NkM4MC45NTY3IDEwNS42NzQgODEuMjI3NSAxMDUuODkyIDgxLjQwNTMgMTA2LjE1QzgxLjU4MyAxMDYuNDA4IDgxLjY3MTkgMTA2LjcyMSA4MS42NzE5IDEwNy4wODlDODEuNjcxOSAxMDcuMzkgODEuNjA4NCAxMDcuNjY1IDgxLjQ4MTQgMTA3LjkxNUM4MS4zNTg3IDEwOC4xNjQgODEuMTc4OSAxMDguMzggODAuOTQxOSAxMDguNTYyQzgwLjcwOTEgMTA4Ljc0IDgwLjQyOTkgMTA4Ljg3OSA4MC4xMDQgMTA4Ljk4MUM3OS43ODI0IDEwOS4wNzggNzkuNDIwNiAxMDkuMTI3IDc5LjAxODYgMTA5LjEyN0M3OC40MTM0IDEwOS4xMjcgNzcuOTAxNCAxMDkuMDE5IDc3LjQ4MjQgMTA4LjgwM0M3Ny4wNjM1IDEwOC41ODcgNzYuNzQ2MSAxMDguMzA4IDc2LjUzMDMgMTA3Ljk2NUM3Ni4zMTQ1IDEwNy42MjMgNzYuMjA2NSAxMDcuMjYxIDc2LjIwNjUgMTA2Ljg4SDc3LjM4NzJDNzcuNDA0MSAxMDcuMjAxIDc3LjQ5NzIgMTA3LjQ1OCA3Ny42NjY1IDEwNy42NDhDNzcuODM1OCAxMDcuODM0IDc4LjA0MzEgMTA3Ljk2NyA3OC4yODg2IDEwOC4wNDhDNzguNTM0IDEwOC4xMjQgNzguNzc3MyAxMDguMTYyIDc5LjAxODYgMTA4LjE2MkM3OS4zNDAyIDEwOC4xNjIgNzkuNjA4OSAxMDguMTIgNzkuODI0NyAxMDguMDM1QzgwLjA0NDggMTA3Ljk1MSA4MC4yMTE5IDEwNy44MzQgODAuMzI2MiAxMDcuNjg2QzgwLjQ0MDQgMTA3LjUzOCA4MC40OTc2IDEwNy4zNjkgODAuNDk3NiAxMDcuMTc4Wk04OS4zMTQ1IDEwMi4xMzJWMTAzLjAzM0g4NS42MDExVjEwMi4xMzJIODkuMzE0NVpNODYuODU3OSAxMDAuNDYySDg4LjAzMjJWMTA3LjI5OUM4OC4wMzIyIDEwNy41MzIgODguMDY4MiAxMDcuNzA3IDg4LjE0MDEgMTA3LjgyNkM4OC4yMTIxIDEwNy45NDQgODguMzA1MiAxMDguMDIyIDg4LjQxOTQgMTA4LjA2MUM4OC41MzM3IDEwOC4wOTkgODguNjU2NCAxMDguMTE4IDg4Ljc4NzYgMTA4LjExOEM4OC44ODQ5IDEwOC4xMTggODguOTg2NSAxMDguMTA5IDg5LjA5MjMgMTA4LjA5MkM4OS4yMDIzIDEwOC4wNzEgODkuMjg0OCAxMDguMDU0IDg5LjMzOTggMTA4LjA0Mkw4OS4zNDYyIDEwOUM4OS4yNTMxIDEwOS4wMyA4OS4xMzA0IDEwOS4wNTcgODguOTc4IDEwOS4wODNDODguODI5OSAxMDkuMTEyIDg4LjY1MDEgMTA5LjEyNyA4OC40Mzg1IDEwOS4xMjdDODguMTUwNyAxMDkuMTI3IDg3Ljg4NjIgMTA5LjA3IDg3LjY0NSAxMDguOTU2Qzg3LjQwMzggMTA4Ljg0MSA4Ny4yMTEzIDEwOC42NTEgODcuMDY3NCAxMDguMzg0Qzg2LjkyNzcgMTA4LjExMyA4Ni44NTc5IDEwNy43NSA4Ni44NTc5IDEwNy4yOTJWMTAwLjQ2MlpNOTAuMjUzOSAxMDUuNjQyVjEwNS40OTZDOTAuMjUzOSAxMDUuMDAxIDkwLjMyNTggMTA0LjU0MiA5MC40Njk3IDEwNC4xMTlDOTAuNjEzNiAxMDMuNjkxIDkwLjgyMSAxMDMuMzIxIDkxLjA5MTggMTAzLjAwOEM5MS4zNjI2IDEwMi42OSA5MS42OTA2IDEwMi40NDUgOTIuMDc1NyAxMDIuMjcxQzkyLjQ2MDggMTAyLjA5NCA5Mi44OTI0IDEwMi4wMDUgOTMuMzcwNiAxMDIuMDA1QzkzLjg1MyAxMDIuMDA1IDk0LjI4NjggMTAyLjA5NCA5NC42NzE5IDEwMi4yNzFDOTUuMDYxMiAxMDIuNDQ1IDk1LjM5MTMgMTAyLjY5IDk1LjY2MjEgMTAzLjAwOEM5NS45MzcyIDEwMy4zMjEgOTYuMTQ2NiAxMDMuNjkxIDk2LjI5MDUgMTA0LjExOUM5Ni40MzQ0IDEwNC41NDIgOTYuNTA2MyAxMDUuMDAxIDk2LjUwNjMgMTA1LjQ5NlYxMDUuNjQyQzk2LjUwNjMgMTA2LjEzNyA5Ni40MzQ0IDEwNi41OTYgOTYuMjkwNSAxMDcuMDJDOTYuMTQ2NiAxMDcuNDQzIDk1LjkzNzIgMTA3LjgxMyA5NS42NjIxIDEwOC4xM0M5NS4zOTEzIDEwOC40NDQgOTUuMDYzMyAxMDguNjg5IDk0LjY3ODIgMTA4Ljg2N0M5NC4yOTc0IDEwOS4wNCA5My44NjU3IDEwOS4xMjcgOTMuMzgzMyAxMDkuMTI3QzkyLjkwMDkgMTA5LjEyNyA5Mi40NjcxIDEwOS4wNCA5Mi4wODIgMTA4Ljg2N0M5MS42OTY5IDEwOC42ODkgOTEuMzY2OSAxMDguNDQ0IDkxLjA5MTggMTA4LjEzQzkwLjgyMSAxMDcuODEzIDkwLjYxMzYgMTA3LjQ0MyA5MC40Njk3IDEwNy4wMkM5MC4zMjU4IDEwNi41OTYgOTAuMjUzOSAxMDYuMTM3IDkwLjI1MzkgMTA1LjY0MlpNOTEuNDI4MiAxMDUuNDk2VjEwNS42NDJDOTEuNDI4MiAxMDUuOTg1IDkxLjQ2ODQgMTA2LjMwOSA5MS41NDg4IDEwNi42MTNDOTEuNjI5MiAxMDYuOTE0IDkxLjc0OTggMTA3LjE4IDkxLjkxMDYgMTA3LjQxM0M5Mi4wNzU3IDEwNy42NDYgOTIuMjgwOSAxMDcuODMgOTIuNTI2NCAxMDcuOTY1QzkyLjc3MTggMTA4LjA5NyA5My4wNTc1IDEwOC4xNjIgOTMuMzgzMyAxMDguMTYyQzkzLjcwNDkgMTA4LjE2MiA5My45ODYzIDEwOC4wOTcgOTQuMjI3NSAxMDcuOTY1Qzk0LjQ3MyAxMDcuODMgOTQuNjc2MSAxMDcuNjQ2IDk0LjgzNjkgMTA3LjQxM0M5NC45OTc3IDEwNy4xOCA5NS4xMTgzIDEwNi45MTQgOTUuMTk4NyAxMDYuNjEzQzk1LjI4MzQgMTA2LjMwOSA5NS4zMjU3IDEwNS45ODUgOTUuMzI1NyAxMDUuNjQyVjEwNS40OTZDOTUuMzI1NyAxMDUuMTU4IDk1LjI4MzQgMTA0LjgzOCA5NS4xOTg3IDEwNC41MzhDOTUuMTE4MyAxMDQuMjMzIDk0Ljk5NTYgMTAzLjk2NCA5NC44MzA2IDEwMy43MzFDOTQuNjY5OCAxMDMuNDk0IDk0LjQ2NjYgMTAzLjMwOCA5NC4yMjEyIDEwMy4xNzNDOTMuOTggMTAzLjAzNyA5My42OTY1IDEwMi45NyA5My4zNzA2IDEwMi45N0M5My4wNDkgMTAyLjk3IDkyLjc2NTUgMTAzLjAzNyA5Mi41MiAxMDMuMTczQzkyLjI3ODggMTAzLjMwOCA5Mi4wNzU3IDEwMy40OTQgOTEuOTEwNiAxMDMuNzMxQzkxLjc0OTggMTAzLjk2NCA5MS42MjkyIDEwNC4yMzMgOTEuNTQ4OCAxMDQuNTM4QzkxLjQ2ODQgMTA0LjgzOCA5MS40MjgyIDEwNS4xNTggOTEuNDI4MiAxMDUuNDk2Wk0xMDQuMDc5IDEwMi4xMzJWMTAzLjAzM0gxMDAuMzY2VjEwMi4xMzJIMTA0LjA3OVpNMTAxLjYyMyAxMDAuNDYySDEwMi43OTdWMTA3LjI5OUMxMDIuNzk3IDEwNy41MzIgMTAyLjgzMyAxMDcuNzA3IDEwMi45MDUgMTA3LjgyNkMxMDIuOTc3IDEwNy45NDQgMTAzLjA3IDEwOC4wMjIgMTAzLjE4NCAxMDguMDYxQzEwMy4yOTggMTA4LjA5OSAxMDMuNDIxIDEwOC4xMTggMTAzLjU1MiAxMDguMTE4QzEwMy42NSAxMDguMTE4IDEwMy43NTEgMTA4LjEwOSAxMDMuODU3IDEwOC4wOTJDMTAzLjk2NyAxMDguMDcxIDEwNC4wNDkgMTA4LjA1NCAxMDQuMTA0IDEwOC4wNDJMMTA0LjExMSAxMDlDMTA0LjAxOCAxMDkuMDMgMTAzLjg5NSAxMDkuMDU3IDEwMy43NDMgMTA5LjA4M0MxMDMuNTk1IDEwOS4xMTIgMTAzLjQxNSAxMDkuMTI3IDEwMy4yMDMgMTA5LjEyN0MxMDIuOTE1IDEwOS4xMjcgMTAyLjY1MSAxMDkuMDcgMTAyLjQxIDEwOC45NTZDMTAyLjE2OCAxMDguODQxIDEwMS45NzYgMTA4LjY1MSAxMDEuODMyIDEwOC4zODRDMTAxLjY5MiAxMDguMTEzIDEwMS42MjMgMTA3Ljc1IDEwMS42MjMgMTA3LjI5MlYxMDAuNDYyWk0xMDYuNjMxIDk5LjI1VjEwOUgxMDUuNDU3Vjk5LjI1SDEwNi42MzFaTTEwNi4zNTIgMTA1LjMwNkwxMDUuODYzIDEwNS4yODdDMTA1Ljg2NyAxMDQuODE3IDEwNS45MzcgMTA0LjM4MyAxMDYuMDcyIDEwMy45ODVDMTA2LjIwOCAxMDMuNTgzIDEwNi4zOTggMTAzLjIzNCAxMDYuNjQ0IDEwMi45MzhDMTA2Ljg4OSAxMDIuNjQyIDEwNy4xODEgMTAyLjQxMyAxMDcuNTIgMTAyLjI1MkMxMDcuODYyIDEwMi4wODcgMTA4LjI0MSAxMDIuMDA1IDEwOC42NTYgMTAyLjAwNUMxMDguOTk0IDEwMi4wMDUgMTA5LjI5OSAxMDIuMDUxIDEwOS41NyAxMDIuMTQ1QzEwOS44NDEgMTAyLjIzMyAxMTAuMDcxIDEwMi4zNzcgMTEwLjI2MiAxMDIuNTc2QzExMC40NTYgMTAyLjc3NSAxMTAuNjA0IDEwMy4wMzMgMTEwLjcwNiAxMDMuMzUxQzExMC44MDggMTAzLjY2NCAxMTAuODU4IDEwNC4wNDcgMTEwLjg1OCAxMDQuNVYxMDlIMTA5LjY3OFYxMDQuNDg3QzEwOS42NzggMTA0LjEyNyAxMDkuNjI1IDEwMy44MzkgMTA5LjUxOSAxMDMuNjI0QzEwOS40MTMgMTAzLjQwMyAxMDkuMjU5IDEwMy4yNDUgMTA5LjA1NiAxMDMuMTQ3QzEwOC44NTMgMTAzLjA0NiAxMDguNjAzIDEwMi45OTUgMTA4LjMwNyAxMDIuOTk1QzEwOC4wMTUgMTAyLjk5NSAxMDcuNzQ4IDEwMy4wNTYgMTA3LjUwNyAxMDMuMTc5QzEwNy4yNyAxMDMuMzAyIDEwNy4wNjUgMTAzLjQ3MSAxMDYuODkxIDEwMy42ODdDMTA2LjcyMiAxMDMuOTAzIDEwNi41ODkgMTA0LjE1IDEwNi40OTEgMTA0LjQzQzEwNi4zOTggMTA0LjcwNSAxMDYuMzUyIDEwNC45OTcgMTA2LjM1MiAxMDUuMzA2Wk0xMTUuNDY3IDEwOS4xMjdDMTE0Ljk4OSAxMDkuMTI3IDExNC41NTUgMTA5LjA0NyAxMTQuMTY2IDEwOC44ODZDMTEzLjc4IDEwOC43MjEgMTEzLjQ0OCAxMDguNDkgMTEzLjE2OSAxMDguMTk0QzExMi44OTQgMTA3Ljg5OCAxMTIuNjgyIDEwNy41NDYgMTEyLjUzNCAxMDcuMTRDMTEyLjM4NiAxMDYuNzM0IDExMi4zMTIgMTA2LjI5IDExMi4zMTIgMTA1LjgwN1YxMDUuNTQxQzExMi4zMTIgMTA0Ljk4MiAxMTIuMzk1IDEwNC40ODUgMTEyLjU2IDEwNC4wNDlDMTEyLjcyNSAxMDMuNjA5IDExMi45NDkgMTAzLjIzNiAxMTMuMjMyIDEwMi45MzJDMTEzLjUxNiAxMDIuNjI3IDExMy44MzggMTAyLjM5NiAxMTQuMTk3IDEwMi4yNEMxMTQuNTU3IDEwMi4wODMgMTE0LjkyOSAxMDIuMDA1IDExNS4zMTQgMTAyLjAwNUMxMTUuODA1IDEwMi4wMDUgMTE2LjIyOSAxMDIuMDkgMTE2LjU4NCAxMDIuMjU5QzExNi45NDQgMTAyLjQyOCAxMTcuMjM4IDEwMi42NjUgMTE3LjQ2NiAxMDIuOTdDMTE3LjY5NSAxMDMuMjcgMTE3Ljg2NCAxMDMuNjI2IDExNy45NzQgMTA0LjAzNkMxMTguMDg0IDEwNC40NDIgMTE4LjEzOSAxMDQuODg3IDExOC4xMzkgMTA1LjM2OVYxMDUuODk2SDExMy4wMVYxMDQuOTM4SDExNi45NjVWMTA0Ljg0OUMxMTYuOTQ4IDEwNC41NDQgMTE2Ljg4NCAxMDQuMjQ4IDExNi43NzQgMTAzLjk2QzExNi42NjkgMTAzLjY3MiAxMTYuNDk5IDEwMy40MzUgMTE2LjI2NyAxMDMuMjQ5QzExNi4wMzQgMTAzLjA2MyAxMTUuNzE2IDEwMi45NyAxMTUuMzE0IDEwMi45N0MxMTUuMDQ4IDEwMi45NyAxMTQuODAyIDEwMy4wMjcgMTE0LjU3OCAxMDMuMTQxQzExNC4zNTQgMTAzLjI1MSAxMTQuMTYxIDEwMy40MTYgMTE0IDEwMy42MzZDMTEzLjg0IDEwMy44NTYgMTEzLjcxNSAxMDQuMTI1IDExMy42MjYgMTA0LjQ0MkMxMTMuNTM3IDEwNC43NiAxMTMuNDkzIDEwNS4xMjYgMTEzLjQ5MyAxMDUuNTQxVjEwNS44MDdDMTEzLjQ5MyAxMDYuMTMzIDExMy41MzcgMTA2LjQ0IDExMy42MjYgMTA2LjcyOEMxMTMuNzE5IDEwNy4wMTEgMTEzLjg1MiAxMDcuMjYxIDExNC4wMjYgMTA3LjQ3N0MxMTQuMjA0IDEwNy42OTIgMTE0LjQxNyAxMDcuODYyIDExNC42NjcgMTA3Ljk4NEMxMTQuOTIxIDEwOC4xMDcgMTE1LjIwOSAxMDguMTY4IDExNS41MyAxMDguMTY4QzExNS45NDUgMTA4LjE2OCAxMTYuMjk2IDEwOC4wODQgMTE2LjU4NCAxMDcuOTE1QzExNi44NzIgMTA3Ljc0NSAxMTcuMTI0IDEwNy41MTkgMTE3LjMzOSAxMDcuMjM1TDExOC4wNSAxMDcuOEMxMTcuOTAyIDEwOC4wMjUgMTE3LjcxNCAxMDguMjM4IDExNy40ODUgMTA4LjQ0MUMxMTcuMjU3IDEwOC42NDUgMTE2Ljk3NSAxMDguODEgMTE2LjY0MSAxMDguOTM3QzExNi4zMTEgMTA5LjA2MyAxMTUuOTIgMTA5LjEyNyAxMTUuNDY3IDEwOS4xMjdaTTEyNi43MzQgMTA3LjE3OEMxMjYuNzM0IDEwNy4wMDkgMTI2LjY5NiAxMDYuODUyIDEyNi42MiAxMDYuNzA4QzEyNi41NDggMTA2LjU2IDEyNi4zOTcgMTA2LjQyNyAxMjYuMTY5IDEwNi4zMDlDMTI1Ljk0NSAxMDYuMTg2IDEyNS42MDYgMTA2LjA4IDEyNS4xNTMgMTA1Ljk5MUMxMjQuNzcyIDEwNS45MTEgMTI0LjQyOCAxMDUuODE2IDEyNC4xMTkgMTA1LjcwNkMxMjMuODE0IDEwNS41OTYgMTIzLjU1NCAxMDUuNDYyIDEyMy4zMzggMTA1LjMwNkMxMjMuMTI2IDEwNS4xNDkgMTIyLjk2MyAxMDQuOTY1IDEyMi44NDkgMTA0Ljc1M0MxMjIuNzM1IDEwNC41NDIgMTIyLjY3OCAxMDQuMjk0IDEyMi42NzggMTA0LjAxMUMxMjIuNjc4IDEwMy43NCAxMjIuNzM3IDEwMy40ODQgMTIyLjg1NSAxMDMuMjQzQzEyMi45NzggMTAzLjAwMSAxMjMuMTUgMTAyLjc4OCAxMjMuMzcgMTAyLjYwMkMxMjMuNTk0IDEwMi40MTUgMTIzLjg2MyAxMDIuMjY5IDEyNC4xNzYgMTAyLjE2NEMxMjQuNDg5IDEwMi4wNTggMTI0LjgzOCAxMDIuMDA1IDEyNS4yMjMgMTAyLjAwNUMxMjUuNzczIDEwMi4wMDUgMTI2LjI0MyAxMDIuMTAyIDEyNi42MzIgMTAyLjI5N0MxMjcuMDIyIDEwMi40OTIgMTI3LjMyIDEwMi43NTIgMTI3LjUyNyAxMDMuMDc4QzEyNy43MzUgMTAzLjM5OSAxMjcuODM4IDEwMy43NTcgMTI3LjgzOCAxMDQuMTVIMTI2LjY2NEMxMjYuNjY0IDEwMy45NiAxMjYuNjA3IDEwMy43NzYgMTI2LjQ5MyAxMDMuNTk4QzEyNi4zODMgMTAzLjQxNiAxMjYuMjIgMTAzLjI2NiAxMjYuMDA0IDEwMy4xNDdDMTI1Ljc5MiAxMDMuMDI5IDEyNS41MzIgMTAyLjk3IDEyNS4yMjMgMTAyLjk3QzEyNC44OTcgMTAyLjk3IDEyNC42MzMgMTAzLjAyMSAxMjQuNDMgMTAzLjEyMkMxMjQuMjMxIDEwMy4yMTkgMTI0LjA4NSAxMDMuMzQ0IDEyMy45OTIgMTAzLjQ5N0MxMjMuOTAzIDEwMy42NDkgMTIzLjg1OCAxMDMuODEgMTIzLjg1OCAxMDMuOTc5QzEyMy44NTggMTA0LjEwNiAxMjMuODggMTA0LjIyIDEyMy45MjIgMTA0LjMyMkMxMjMuOTY4IDEwNC40MTkgMTI0LjA0OSAxMDQuNTEgMTI0LjE2MyAxMDQuNTk1QzEyNC4yNzcgMTA0LjY3NSAxMjQuNDM4IDEwNC43NTEgMTI0LjY0NiAxMDQuODIzQzEyNC44NTMgMTA0Ljg5NSAxMjUuMTE3IDEwNC45NjcgMTI1LjQzOSAxMDUuMDM5QzEyNi4wMDIgMTA1LjE2NiAxMjYuNDY1IDEwNS4zMTggMTI2LjgyOSAxMDUuNDk2QzEyNy4xOTMgMTA1LjY3NCAxMjcuNDY0IDEwNS44OTIgMTI3LjY0MiAxMDYuMTVDMTI3LjgxOSAxMDYuNDA4IDEyNy45MDggMTA2LjcyMSAxMjcuOTA4IDEwNy4wODlDMTI3LjkwOCAxMDcuMzkgMTI3Ljg0NSAxMDcuNjY1IDEyNy43MTggMTA3LjkxNUMxMjcuNTk1IDEwOC4xNjQgMTI3LjQxNSAxMDguMzggMTI3LjE3OCAxMDguNTYyQzEyNi45NDUgMTA4Ljc0IDEyNi42NjYgMTA4Ljg3OSAxMjYuMzQgMTA4Ljk4MUMxMjYuMDE5IDEwOS4wNzggMTI1LjY1NyAxMDkuMTI3IDEyNS4yNTUgMTA5LjEyN0MxMjQuNjUgMTA5LjEyNyAxMjQuMTM4IDEwOS4wMTkgMTIzLjcxOSAxMDguODAzQzEyMy4zIDEwOC41ODcgMTIyLjk4MiAxMDguMzA4IDEyMi43NjcgMTA3Ljk2NUMxMjIuNTUxIDEwNy42MjMgMTIyLjQ0MyAxMDcuMjYxIDEyMi40NDMgMTA2Ljg4SDEyMy42MjRDMTIzLjY0IDEwNy4yMDEgMTIzLjczNCAxMDcuNDU4IDEyMy45MDMgMTA3LjY0OEMxMjQuMDcyIDEwNy44MzQgMTI0LjI3OSAxMDcuOTY3IDEyNC41MjUgMTA4LjA0OEMxMjQuNzcgMTA4LjEyNCAxMjUuMDE0IDEwOC4xNjIgMTI1LjI1NSAxMDguMTYyQzEyNS41NzYgMTA4LjE2MiAxMjUuODQ1IDEwOC4xMiAxMjYuMDYxIDEwOC4wMzVDMTI2LjI4MSAxMDcuOTUxIDEyNi40NDggMTA3LjgzNCAxMjYuNTYyIDEwNy42ODZDMTI2LjY3NyAxMDcuNTM4IDEyNi43MzQgMTA3LjM2OSAxMjYuNzM0IDEwNy4xNzhaTTEzMC42MjUgOTkuMjVWMTA5SDEyOS40NTFWOTkuMjVIMTMwLjYyNVpNMTMwLjM0NiAxMDUuMzA2TDEyOS44NTcgMTA1LjI4N0MxMjkuODYxIDEwNC44MTcgMTI5LjkzMSAxMDQuMzgzIDEzMC4wNjYgMTAzLjk4NUMxMzAuMjAyIDEwMy41ODMgMTMwLjM5MiAxMDMuMjM0IDEzMC42MzggMTAyLjkzOEMxMzAuODgzIDEwMi42NDIgMTMxLjE3NSAxMDIuNDEzIDEzMS41MTQgMTAyLjI1MkMxMzEuODU2IDEwMi4wODcgMTMyLjIzNSAxMDIuMDA1IDEzMi42NSAxMDIuMDA1QzEzMi45ODggMTAyLjAwNSAxMzMuMjkzIDEwMi4wNTEgMTMzLjU2NCAxMDIuMTQ1QzEzMy44MzUgMTAyLjIzMyAxMzQuMDY1IDEwMi4zNzcgMTM0LjI1NiAxMDIuNTc2QzEzNC40NTEgMTAyLjc3NSAxMzQuNTk5IDEwMy4wMzMgMTM0LjcgMTAzLjM1MUMxMzQuODAyIDEwMy42NjQgMTM0Ljg1MyAxMDQuMDQ3IDEzNC44NTMgMTA0LjVWMTA5SDEzMy42NzJWMTA0LjQ4N0MxMzMuNjcyIDEwNC4xMjcgMTMzLjYxOSAxMDMuODM5IDEzMy41MTMgMTAzLjYyNEMxMzMuNDA3IDEwMy40MDMgMTMzLjI1MyAxMDMuMjQ1IDEzMy4wNSAxMDMuMTQ3QzEzMi44NDcgMTAzLjA0NiAxMzIuNTk3IDEwMi45OTUgMTMyLjMwMSAxMDIuOTk1QzEzMi4wMDkgMTAyLjk5NSAxMzEuNzQyIDEwMy4wNTYgMTMxLjUwMSAxMDMuMTc5QzEzMS4yNjQgMTAzLjMwMiAxMzEuMDU5IDEwMy40NzEgMTMwLjg4NSAxMDMuNjg3QzEzMC43MTYgMTAzLjkwMyAxMzAuNTgzIDEwNC4xNSAxMzAuNDg1IDEwNC40M0MxMzAuMzkyIDEwNC43MDUgMTMwLjM0NiAxMDQuOTk3IDEzMC4zNDYgMTA1LjMwNlpNMTM2LjMgMTA1LjY0MlYxMDUuNDk2QzEzNi4zIDEwNS4wMDEgMTM2LjM3MiAxMDQuNTQyIDEzNi41MTYgMTA0LjExOUMxMzYuNjYgMTAzLjY5MSAxMzYuODY3IDEwMy4zMjEgMTM3LjEzOCAxMDMuMDA4QzEzNy40MDkgMTAyLjY5IDEzNy43MzYgMTAyLjQ0NSAxMzguMTIyIDEwMi4yNzFDMTM4LjUwNyAxMDIuMDk0IDEzOC45MzggMTAyLjAwNSAxMzkuNDE3IDEwMi4wMDVDMTM5Ljg5OSAxMDIuMDA1IDE0MC4zMzMgMTAyLjA5NCAxNDAuNzE4IDEwMi4yNzFDMTQxLjEwNyAxMDIuNDQ1IDE0MS40MzcgMTAyLjY5IDE0MS43MDggMTAzLjAwOEMxNDEuOTgzIDEwMy4zMjEgMTQyLjE5MyAxMDMuNjkxIDE0Mi4zMzYgMTA0LjExOUMxNDIuNDggMTA0LjU0MiAxNDIuNTUyIDEwNS4wMDEgMTQyLjU1MiAxMDUuNDk2VjEwNS42NDJDMTQyLjU1MiAxMDYuMTM3IDE0Mi40OCAxMDYuNTk2IDE0Mi4zMzYgMTA3LjAyQzE0Mi4xOTMgMTA3LjQ0MyAxNDEuOTgzIDEwNy44MTMgMTQxLjcwOCAxMDguMTNDMTQxLjQzNyAxMDguNDQ0IDE0MS4xMDkgMTA4LjY4OSAxNDAuNzI0IDEwOC44NjdDMTQwLjM0MyAxMDkuMDQgMTM5LjkxMiAxMDkuMTI3IDEzOS40MjkgMTA5LjEyN0MxMzguOTQ3IDEwOS4xMjcgMTM4LjUxMyAxMDkuMDQgMTM4LjEyOCAxMDguODY3QzEzNy43NDMgMTA4LjY4OSAxMzcuNDEzIDEwOC40NDQgMTM3LjEzOCAxMDguMTNDMTM2Ljg2NyAxMDcuODEzIDEzNi42NiAxMDcuNDQzIDEzNi41MTYgMTA3LjAyQzEzNi4zNzIgMTA2LjU5NiAxMzYuMyAxMDYuMTM3IDEzNi4zIDEwNS42NDJaTTEzNy40NzQgMTA1LjQ5NlYxMDUuNjQyQzEzNy40NzQgMTA1Ljk4NSAxMzcuNTE0IDEwNi4zMDkgMTM3LjU5NSAxMDYuNjEzQzEzNy42NzUgMTA2LjkxNCAxMzcuNzk2IDEwNy4xOCAxMzcuOTU3IDEwNy40MTNDMTM4LjEyMiAxMDcuNjQ2IDEzOC4zMjcgMTA3LjgzIDEzOC41NzIgMTA3Ljk2NUMxMzguODE4IDEwOC4wOTcgMTM5LjEwMyAxMDguMTYyIDEzOS40MjkgMTA4LjE2MkMxMzkuNzUxIDEwOC4xNjIgMTQwLjAzMiAxMDguMDk3IDE0MC4yNzMgMTA3Ljk2NUMxNDAuNTE5IDEwNy44MyAxNDAuNzIyIDEwNy42NDYgMTQwLjg4MyAxMDcuNDEzQzE0MS4wNDQgMTA3LjE4IDE0MS4xNjQgMTA2LjkxNCAxNDEuMjQ1IDEwNi42MTNDMTQxLjMyOSAxMDYuMzA5IDE0MS4zNzIgMTA1Ljk4NSAxNDEuMzcyIDEwNS42NDJWMTA1LjQ5NkMxNDEuMzcyIDEwNS4xNTggMTQxLjMyOSAxMDQuODM4IDE0MS4yNDUgMTA0LjUzOEMxNDEuMTY0IDEwNC4yMzMgMTQxLjA0MiAxMDMuOTY0IDE0MC44NzYgMTAzLjczMUMxNDAuNzE2IDEwMy40OTQgMTQwLjUxMyAxMDMuMzA4IDE0MC4yNjcgMTAzLjE3M0MxNDAuMDI2IDEwMy4wMzcgMTM5Ljc0MiAxMDIuOTcgMTM5LjQxNyAxMDIuOTdDMTM5LjA5NSAxMDIuOTcgMTM4LjgxMSAxMDMuMDM3IDEzOC41NjYgMTAzLjE3M0MxMzguMzI1IDEwMy4zMDggMTM4LjEyMiAxMDMuNDk0IDEzNy45NTcgMTAzLjczMUMxMzcuNzk2IDEwMy45NjQgMTM3LjY3NSAxMDQuMjMzIDEzNy41OTUgMTA0LjUzOEMxMzcuNTE0IDEwNC44MzggMTM3LjQ3NCAxMDUuMTU4IDEzNy40NzQgMTA1LjQ5NlpNMTQ1LjE5OSAxMDMuMjExVjEwOUgxNDQuMDI1VjEwMi4xMzJIMTQ1LjE2N0wxNDUuMTk5IDEwMy4yMTFaTTE0Ny4zNDUgMTAyLjA5NEwxNDcuMzM4IDEwMy4xODZDMTQ3LjI0MSAxMDMuMTY0IDE0Ny4xNDggMTAzLjE1MiAxNDcuMDU5IDEwMy4xNDdDMTQ2Ljk3NCAxMDMuMTM5IDE0Ni44NzcgMTAzLjEzNSAxNDYuNzY3IDEwMy4xMzVDMTQ2LjQ5NiAxMDMuMTM1IDE0Ni4yNTcgMTAzLjE3NyAxNDYuMDUgMTAzLjI2MkMxNDUuODQyIDEwMy4zNDYgMTQ1LjY2NyAxMDMuNDY1IDE0NS41MjMgMTAzLjYxN0MxNDUuMzc5IDEwMy43NyAxNDUuMjY1IDEwMy45NTEgMTQ1LjE4IDEwNC4xNjNDMTQ1LjEgMTA0LjM3IDE0NS4wNDcgMTA0LjU5OSAxNDUuMDIxIDEwNC44NDlMMTQ0LjY5MSAxMDUuMDM5QzE0NC42OTEgMTA0LjYyNCAxNDQuNzMyIDEwNC4yMzUgMTQ0LjgxMiAxMDMuODcxQzE0NC44OTcgMTAzLjUwNyAxNDUuMDI2IDEwMy4xODYgMTQ1LjE5OSAxMDIuOTA2QzE0NS4zNzMgMTAyLjYyMyAxNDUuNTkzIDEwMi40MDMgMTQ1Ljg1OSAxMDIuMjQ2QzE0Ni4xMyAxMDIuMDg1IDE0Ni40NTIgMTAyLjAwNSAxNDYuODI0IDEwMi4wMDVDMTQ2LjkwOSAxMDIuMDA1IDE0Ny4wMDYgMTAyLjAxNSAxNDcuMTE2IDEwMi4wMzdDMTQ3LjIyNiAxMDIuMDU0IDE0Ny4zMDIgMTAyLjA3MyAxNDcuMzQ1IDEwMi4wOTRaTTE1MS4xNTMgMTA5LjEyN0MxNTAuNjc1IDEwOS4xMjcgMTUwLjI0MSAxMDkuMDQ3IDE0OS44NTIgMTA4Ljg4NkMxNDkuNDY3IDEwOC43MjEgMTQ5LjEzNSAxMDguNDkgMTQ4Ljg1NSAxMDguMTk0QzE0OC41OCAxMDcuODk4IDE0OC4zNjkgMTA3LjU0NiAxNDguMjIxIDEwNy4xNEMxNDguMDczIDEwNi43MzQgMTQ3Ljk5OSAxMDYuMjkgMTQ3Ljk5OSAxMDUuODA3VjEwNS41NDFDMTQ3Ljk5OSAxMDQuOTgyIDE0OC4wODEgMTA0LjQ4NSAxNDguMjQ2IDEwNC4wNDlDMTQ4LjQxMSAxMDMuNjA5IDE0OC42MzUgMTAzLjIzNiAxNDguOTE5IDEwMi45MzJDMTQ5LjIwMiAxMDIuNjI3IDE0OS41MjQgMTAyLjM5NiAxNDkuODg0IDEwMi4yNEMxNTAuMjQzIDEwMi4wODMgMTUwLjYxNiAxMDIuMDA1IDE1MS4wMDEgMTAyLjAwNUMxNTEuNDkyIDEwMi4wMDUgMTUxLjkxNSAxMDIuMDkgMTUyLjI3MSAxMDIuMjU5QzE1Mi42MyAxMDIuNDI4IDE1Mi45MjQgMTAyLjY2NSAxNTMuMTUzIDEwMi45N0MxNTMuMzgxIDEwMy4yNyAxNTMuNTUxIDEwMy42MjYgMTUzLjY2MSAxMDQuMDM2QzE1My43NzEgMTA0LjQ0MiAxNTMuODI2IDEwNC44ODcgMTUzLjgyNiAxMDUuMzY5VjEwNS44OTZIMTQ4LjY5N1YxMDQuOTM4SDE1Mi42NTFWMTA0Ljg0OUMxNTIuNjM0IDEwNC41NDQgMTUyLjU3MSAxMDQuMjQ4IDE1Mi40NjEgMTAzLjk2QzE1Mi4zNTUgMTAzLjY3MiAxNTIuMTg2IDEwMy40MzUgMTUxLjk1MyAxMDMuMjQ5QzE1MS43MiAxMDMuMDYzIDE1MS40MDMgMTAyLjk3IDE1MS4wMDEgMTAyLjk3QzE1MC43MzQgMTAyLjk3IDE1MC40ODkgMTAzLjAyNyAxNTAuMjY1IDEwMy4xNDFDMTUwLjA0IDEwMy4yNTEgMTQ5Ljg0OCAxMDMuNDE2IDE0OS42ODcgMTAzLjYzNkMxNDkuNTI2IDEwMy44NTYgMTQ5LjQwMSAxMDQuMTI1IDE0OS4zMTIgMTA0LjQ0MkMxNDkuMjI0IDEwNC43NiAxNDkuMTc5IDEwNS4xMjYgMTQ5LjE3OSAxMDUuNTQxVjEwNS44MDdDMTQ5LjE3OSAxMDYuMTMzIDE0OS4yMjQgMTA2LjQ0IDE0OS4zMTIgMTA2LjcyOEMxNDkuNDA2IDEwNy4wMTEgMTQ5LjUzOSAxMDcuMjYxIDE0OS43MTIgMTA3LjQ3N0MxNDkuODkgMTA3LjY5MiAxNTAuMTA0IDEwNy44NjIgMTUwLjM1NCAxMDcuOTg0QzE1MC42MDcgMTA4LjEwNyAxNTAuODk1IDEwOC4xNjggMTUxLjIxNyAxMDguMTY4QzE1MS42MzIgMTA4LjE2OCAxNTEuOTgzIDEwOC4wODQgMTUyLjI3MSAxMDcuOTE1QzE1Mi41NTggMTA3Ljc0NSAxNTIuODEgMTA3LjUxOSAxNTMuMDI2IDEwNy4yMzVMMTUzLjczNyAxMDcuOEMxNTMuNTg5IDEwOC4wMjUgMTUzLjQgMTA4LjIzOCAxNTMuMTcyIDEwOC40NDFDMTUyLjk0MyAxMDguNjQ1IDE1Mi42NjIgMTA4LjgxIDE1Mi4zMjggMTA4LjkzN0MxNTEuOTk4IDEwOS4wNjMgMTUxLjYwNiAxMDkuMTI3IDE1MS4xNTMgMTA5LjEyN1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8cmVjdCB3aWR0aD1cIjI2OFwiIGhlaWdodD1cIjI2LjMzMzNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTUgMTE3LjY2NylcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0PHBhdGggZD1cIk0yOS42Mjc0IDEyNi4wNDFWMTM1LjMzM0gyOC40NTMxVjEyNy41MDdMMjYuMDg1NCAxMjguMzdWMTI3LjMxTDI5LjQ0MzQgMTI2LjA0MUgyOS42Mjc0Wk0zOC44ODIzIDEyOS45NzZWMTMxLjM4NUMzOC44ODIzIDEzMi4xNDMgMzguODE0NiAxMzIuNzgyIDM4LjY3OTIgMTMzLjMwMkMzOC41NDM4IDEzMy44MjMgMzguMzQ5MSAxMzQuMjQyIDM4LjA5NTIgMTM0LjU1OUMzNy44NDEzIDEzNC44NzYgMzcuNTM0NSAxMzUuMTA3IDM3LjE3NDggMTM1LjI1MUMzNi44MTkzIDEzNS4zOTEgMzYuNDE3MyAxMzUuNDYgMzUuOTY4OCAxMzUuNDZDMzUuNjEzMyAxMzUuNDYgMzUuMjg1MyAxMzUuNDE2IDM0Ljk4NDkgMTM1LjMyN0MzNC42ODQ0IDEzNS4yMzggMzQuNDEzNiAxMzUuMDk3IDM0LjE3MjQgMTM0LjkwMkMzMy45MzU0IDEzNC43MDMgMzMuNzMyMyAxMzQuNDQ1IDMzLjU2MyAxMzQuMTI3QzMzLjM5MzcgMTMzLjgxIDMzLjI2NDYgMTMzLjQyNSAzMy4xNzU4IDEzMi45NzJDMzMuMDg2OSAxMzIuNTE5IDMzLjA0MjUgMTMxLjk5IDMzLjA0MjUgMTMxLjM4NVYxMjkuOTc2QzMzLjA0MjUgMTI5LjIxOSAzMy4xMTAyIDEyOC41ODQgMzMuMjQ1NiAxMjguMDcyQzMzLjM4NTMgMTI3LjU2IDMzLjU4MiAxMjcuMTQ5IDMzLjgzNTkgMTI2Ljg0QzM0LjA4OTggMTI2LjUyNyAzNC4zOTQ1IDEyNi4zMDMgMzQuNzUgMTI2LjE2N0MzNS4xMDk3IDEyNi4wMzIgMzUuNTExNyAxMjUuOTY0IDM1Ljk1NjEgMTI1Ljk2NEMzNi4zMTU4IDEyNS45NjQgMzYuNjQ1OCAxMjYuMDA5IDM2Ljk0NjMgMTI2LjA5OEMzNy4yNTEgMTI2LjE4MiAzNy41MjE4IDEyNi4zMiAzNy43NTg4IDEyNi41MUMzNy45OTU4IDEyNi42OTYgMzguMTk2OCAxMjYuOTQ2IDM4LjM2MTggMTI3LjI1OUMzOC41MzExIDEyNy41NjggMzguNjYwMiAxMjcuOTQ3IDM4Ljc0OSAxMjguMzk2QzM4LjgzNzkgMTI4Ljg0NCAzOC44ODIzIDEyOS4zNzEgMzguODgyMyAxMjkuOTc2Wk0zNy43MDE3IDEzMS41NzZWMTI5Ljc3OUMzNy43MDE3IDEyOS4zNjUgMzcuNjc2MyAxMjkuMDAxIDM3LjYyNTUgMTI4LjY4OEMzNy41Nzg5IDEyOC4zNyAzNy41MDkxIDEyOC4wOTkgMzcuNDE2IDEyNy44NzVDMzcuMzIyOSAxMjcuNjUxIDM3LjIwNDQgMTI3LjQ2OSAzNy4wNjA1IDEyNy4zMjlDMzYuOTIwOSAxMjcuMTg5IDM2Ljc1OCAxMjcuMDg4IDM2LjU3MTggMTI3LjAyNEMzNi4zODk4IDEyNi45NTcgMzYuMTg0NiAxMjYuOTIzIDM1Ljk1NjEgMTI2LjkyM0MzNS42NzY4IDEyNi45MjMgMzUuNDI5MiAxMjYuOTc2IDM1LjIxMzQgMTI3LjA4MkMzNC45OTc2IDEyNy4xODMgMzQuODE1NiAxMjcuMzQ2IDM0LjY2NzUgMTI3LjU3QzM0LjUyMzYgMTI3Ljc5NSAzNC40MTM2IDEyOC4wODkgMzQuMzM3NCAxMjguNDUzQzM0LjI2MTIgMTI4LjgxNyAzNC4yMjMxIDEyOS4yNTkgMzQuMjIzMSAxMjkuNzc5VjEzMS41NzZDMzQuMjIzMSAxMzEuOTkgMzQuMjQ2NCAxMzIuMzU2IDM0LjI5MyAxMzIuNjc0QzM0LjM0MzggMTMyLjk5MSAzNC40MTc4IDEzMy4yNjYgMzQuNTE1MSAxMzMuNDk5QzM0LjYxMjUgMTMzLjcyOCAzNC43MzEgMTMzLjkxNiAzNC44NzA2IDEzNC4wNjRDMzUuMDEwMyAxMzQuMjEyIDM1LjE3MTEgMTM0LjMyMiAzNS4zNTMgMTM0LjM5NEMzNS41MzkyIDEzNC40NjIgMzUuNzQ0NSAxMzQuNDk2IDM1Ljk2ODggMTM0LjQ5NkMzNi4yNTY1IDEzNC40OTYgMzYuNTA4MyAxMzQuNDQxIDM2LjcyNDEgMTM0LjMzMUMzNi45Mzk5IDEzNC4yMjEgMzcuMTE5OCAxMzQuMDQ5IDM3LjI2MzcgMTMzLjgxNkMzNy40MTE4IDEzMy41NzkgMzcuNTIxOCAxMzMuMjc3IDM3LjU5MzggMTMyLjkwOUMzNy42NjU3IDEzMi41MzYgMzcuNzAxNyAxMzIuMDkyIDM3LjcwMTcgMTMxLjU3NlpNNDQuOTEyNiAxMjkuODNWMTM1LjMzM0g0My43MzE5VjEyOC40NjVINDQuODQ5MUw0NC45MTI2IDEyOS44M1pNNDQuNjcxNCAxMzEuNjM5TDQ0LjEyNTUgMTMxLjYyQzQ0LjEyOTcgMTMxLjE1IDQ0LjE5MTEgMTMwLjcxNyA0NC4zMDk2IDEzMC4zMTlDNDQuNDI4MSAxMjkuOTE3IDQ0LjYwMzcgMTI5LjU2OCA0NC44MzY0IDEyOS4yNzFDNDUuMDY5MiAxMjguOTc1IDQ1LjM1OSAxMjguNzQ3IDQ1LjcwNjEgMTI4LjU4NkM0Ni4wNTMxIDEyOC40MjEgNDYuNDU1MSAxMjguMzM4IDQ2LjkxMjEgMTI4LjMzOEM0Ny4yMzM3IDEyOC4zMzggNDcuNTI5OSAxMjguMzg1IDQ3LjgwMDggMTI4LjQ3OEM0OC4wNzE2IDEyOC41NjcgNDguMzA2NSAxMjguNzA5IDQ4LjUwNTQgMTI4LjkwM0M0OC43MDQzIDEyOS4wOTggNDguODU4NyAxMjkuMzQ4IDQ4Ljk2ODggMTI5LjY1MkM0OS4wNzg4IDEyOS45NTcgNDkuMTMzOCAxMzAuMzI1IDQ5LjEzMzggMTMwLjc1N1YxMzUuMzMzSDQ3Ljk1OTVWMTMwLjgxNEM0Ny45NTk1IDEzMC40NTQgNDcuODk4MSAxMzAuMTY3IDQ3Ljc3NTQgMTI5Ljk1MUM0Ny42NTY5IDEyOS43MzUgNDcuNDg3NiAxMjkuNTc4IDQ3LjI2NzYgMTI5LjQ4MUM0Ny4wNDc1IDEyOS4zNzkgNDYuNzg5NCAxMjkuMzI5IDQ2LjQ5MzIgMTI5LjMyOUM0Ni4xNDYyIDEyOS4zMjkgNDUuODU2MyAxMjkuMzkgNDUuNjIzNSAxMjkuNTEzQzQ1LjM5MDggMTI5LjYzNSA0NS4yMDQ2IDEyOS44MDUgNDUuMDY0OSAxMzAuMDIxQzQ0LjkyNTMgMTMwLjIzNiA0NC44MjM3IDEzMC40ODQgNDQuNzYwMyAxMzAuNzYzQzQ0LjcwMSAxMzEuMDM4IDQ0LjY3MTQgMTMxLjMzIDQ0LjY3MTQgMTMxLjYzOVpNNDkuMTIxMSAxMzAuOTkyTDQ4LjMzNCAxMzEuMjMzQzQ4LjMzODIgMTMwLjg1NiA0OC4zOTk2IDEzMC40OTQgNDguNTE4MSAxMzAuMTQ3QzQ4LjY0MDggMTI5LjggNDguODE2NCAxMjkuNDkyIDQ5LjA0NDkgMTI5LjIyMUM0OS4yNzc3IDEyOC45NSA0OS41NjMzIDEyOC43MzYgNDkuOTAxOSAxMjguNThDNTAuMjQwNCAxMjguNDE5IDUwLjYyNzYgMTI4LjMzOCA1MS4wNjM1IDEyOC4zMzhDNTEuNDMxNiAxMjguMzM4IDUxLjc1NzUgMTI4LjM4NyA1Mi4wNDEgMTI4LjQ4NEM1Mi4zMjg4IDEyOC41ODIgNTIuNTcgMTI4LjczMiA1Mi43NjQ2IDEyOC45MzVDNTIuOTYzNSAxMjkuMTM0IDUzLjExMzggMTI5LjM5IDUzLjIxNTMgMTI5LjcwM0M1My4zMTY5IDEzMC4wMTYgNTMuMzY3NyAxMzAuMzg5IDUzLjM2NzcgMTMwLjgyVjEzNS4zMzNINTIuMTg3VjEzMC44MDhDNTIuMTg3IDEzMC40MjMgNTIuMTI1NyAxMzAuMTI0IDUyLjAwMjkgMTI5LjkxM0M1MS44ODQ0IDEyOS42OTcgNTEuNzE1MiAxMjkuNTQ3IDUxLjQ5NTEgMTI5LjQ2MkM1MS4yNzkzIDEyOS4zNzMgNTEuMDIxMiAxMjkuMzI5IDUwLjcyMDcgMTI5LjMyOUM1MC40NjI2IDEyOS4zMjkgNTAuMjM0IDEyOS4zNzMgNTAuMDM1MiAxMjkuNDYyQzQ5LjgzNjMgMTI5LjU1MSA0OS42NjkxIDEyOS42NzQgNDkuNTMzNyAxMjkuODNDNDkuMzk4MyAxMjkuOTgyIDQ5LjI5NDYgMTMwLjE1OCA0OS4yMjI3IDEzMC4zNTdDNDkuMTU0OSAxMzAuNTU2IDQ5LjEyMTEgMTMwLjc2NyA0OS4xMjExIDEzMC45OTJaTTU2LjQyMDkgMTI4LjQ2NVYxMzUuMzMzSDU1LjI0MDJWMTI4LjQ2NUg1Ni40MjA5Wk01NS4xNTE0IDEyNi42NDRDNTUuMTUxNCAxMjYuNDUzIDU1LjIwODUgMTI2LjI5MiA1NS4zMjI4IDEyNi4xNjFDNTUuNDQxMiAxMjYuMDMgNTUuNjE0NyAxMjUuOTY0IDU1Ljg0MzMgMTI1Ljk2NEM1Ni4wNjc1IDEyNS45NjQgNTYuMjM4OSAxMjYuMDMgNTYuMzU3NCAxMjYuMTYxQzU2LjQ4MDEgMTI2LjI5MiA1Ni41NDE1IDEyNi40NTMgNTYuNTQxNSAxMjYuNjQ0QzU2LjU0MTUgMTI2LjgyNiA1Ni40ODAxIDEyNi45ODIgNTYuMzU3NCAxMjcuMTEzQzU2LjIzODkgMTI3LjI0IDU2LjA2NzUgMTI3LjMwNCA1NS44NDMzIDEyNy4zMDRDNTUuNjE0NyAxMjcuMzA0IDU1LjQ0MTIgMTI3LjI0IDU1LjMyMjggMTI3LjExM0M1NS4yMDg1IDEyNi45ODIgNTUuMTUxNCAxMjYuODI2IDU1LjE1MTQgMTI2LjY0NFpNNTkuNDgwNSAxMjkuOTMyVjEzNS4zMzNINTguMzA2MlYxMjguNDY1SDU5LjQxN0w1OS40ODA1IDEyOS45MzJaTTU5LjIwMTIgMTMxLjYzOUw1OC43MTI0IDEzMS42MkM1OC43MTY2IDEzMS4xNSA1OC43ODY1IDEzMC43MTcgNTguOTIxOSAxMzAuMzE5QzU5LjA1NzMgMTI5LjkxNyA1OS4yNDc3IDEyOS41NjggNTkuNDkzMiAxMjkuMjcxQzU5LjczODYgMTI4Ljk3NSA2MC4wMzA2IDEyOC43NDcgNjAuMzY5MSAxMjguNTg2QzYwLjcxMTkgMTI4LjQyMSA2MS4wOTA3IDEyOC4zMzggNjEuNTA1NCAxMjguMzM4QzYxLjg0MzkgMTI4LjMzOCA2Mi4xNDg2IDEyOC4zODUgNjIuNDE5NCAxMjguNDc4QzYyLjY5MDMgMTI4LjU2NyA2Mi45MjA5IDEyOC43MTEgNjMuMTExMyAxMjguOTFDNjMuMzA2IDEyOS4xMDkgNjMuNDU0MSAxMjkuMzY3IDYzLjU1NTcgMTI5LjY4NEM2My42NTcyIDEyOS45OTcgNjMuNzA4IDEzMC4zOCA2My43MDggMTMwLjgzM1YxMzUuMzMzSDYyLjUyNzNWMTMwLjgyQzYyLjUyNzMgMTMwLjQ2MSA2Mi40NzQ0IDEzMC4xNzMgNjIuMzY4NyAxMjkuOTU3QzYyLjI2MjkgMTI5LjczNyA2Mi4xMDg0IDEyOS41NzggNjEuOTA1MyAxMjkuNDgxQzYxLjcwMjEgMTI5LjM3OSA2MS40NTI1IDEyOS4zMjkgNjEuMTU2MiAxMjkuMzI5QzYwLjg2NDMgMTI5LjMyOSA2MC41OTc3IDEyOS4zOSA2MC4zNTY0IDEyOS41MTNDNjAuMTE5NSAxMjkuNjM1IDU5LjkxNDIgMTI5LjgwNSA1OS43NDA3IDEzMC4wMjFDNTkuNTcxNSAxMzAuMjM2IDU5LjQzODIgMTMwLjQ4NCA1OS4zNDA4IDEzMC43NjNDNTkuMjQ3NyAxMzEuMDM4IDU5LjIwMTIgMTMxLjMzIDU5LjIwMTIgMTMxLjYzOVpNNjkuNjkzOCAxMzMuNzQ3VjEyOC40NjVINzAuODc0NVYxMzUuMzMzSDY5Ljc1MUw2OS42OTM4IDEzMy43NDdaTTY5LjkxNiAxMzIuMjk5TDcwLjQwNDggMTMyLjI4N0M3MC40MDQ4IDEzMi43NDQgNzAuMzU2MSAxMzMuMTY3IDcwLjI1ODggMTMzLjU1NkM3MC4xNjU3IDEzMy45NDEgNzAuMDEzMyAxMzQuMjc2IDY5LjgwMTggMTM0LjU1OUM2OS41OTAyIDEzNC44NDMgNjkuMzEzIDEzNS4wNjUgNjguOTcwMiAxMzUuMjI2QzY4LjYyNzQgMTM1LjM4MiA2OC4yMTA2IDEzNS40NiA2Ny43MTk3IDEzNS40NkM2Ny4zODU0IDEzNS40NiA2Ny4wNzg2IDEzNS40MTIgNjYuNzk5MyAxMzUuMzE0QzY2LjUyNDMgMTM1LjIxNyA2Ni4yODczIDEzNS4wNjcgNjYuMDg4NCAxMzQuODY0QzY1Ljg4OTUgMTM0LjY2MSA2NS43MzUgMTM0LjM5NiA2NS42MjUgMTM0LjA3QzY1LjUxOTIgMTMzLjc0NCA2NS40NjYzIDEzMy4zNTMgNjUuNDY2MyAxMzIuODk2VjEyOC40NjVINjYuNjQwNlYxMzIuOTA5QzY2LjY0MDYgMTMzLjIxOCA2Ni42NzQ1IDEzMy40NzQgNjYuNzQyMiAxMzMuNjc3QzY2LjgxNDEgMTMzLjg3NiA2Ni45MDkzIDEzNC4wMzQgNjcuMDI3OCAxMzQuMTUzQzY3LjE1MDYgMTM0LjI2NyA2Ny4yODYgMTM0LjM0NyA2Ny40MzQxIDEzNC4zOTRDNjcuNTg2NCAxMzQuNDQxIDY3Ljc0MyAxMzQuNDY0IDY3LjkwMzggMTM0LjQ2NEM2OC40MDMyIDEzNC40NjQgNjguNzk4OCAxMzQuMzY5IDY5LjA5MDggMTM0LjE3OEM2OS4zODI4IDEzMy45ODQgNjkuNTkyMyAxMzMuNzIzIDY5LjcxOTIgMTMzLjM5N0M2OS44NTA0IDEzMy4wNjcgNjkuOTE2IDEzMi43MDEgNjkuOTE2IDEzMi4yOTlaTTc1LjU0IDEyOC40NjVWMTI5LjM2N0g3MS44MjY3VjEyOC40NjVINzUuNTRaTTczLjA4MzUgMTI2Ljc5Nkg3NC4yNTc4VjEzMy42MzJDNzQuMjU3OCAxMzMuODY1IDc0LjI5MzggMTM0LjA0MSA3NC4zNjU3IDEzNC4xNTlDNzQuNDM3NyAxMzQuMjc4IDc0LjUzMDggMTM0LjM1NiA3NC42NDUgMTM0LjM5NEM3NC43NTkzIDEzNC40MzIgNzQuODgyIDEzNC40NTEgNzUuMDEzMiAxMzQuNDUxQzc1LjExMDUgMTM0LjQ1MSA3NS4yMTIxIDEzNC40NDMgNzUuMzE3OSAxMzQuNDI2Qzc1LjQyNzkgMTM0LjQwNSA3NS41MTA0IDEzNC4zODggNzUuNTY1NCAxMzQuMzc1TDc1LjU3MTggMTM1LjMzM0M3NS40Nzg3IDEzNS4zNjMgNzUuMzU2IDEzNS4zOTEgNzUuMjAzNiAxMzUuNDE2Qzc1LjA1NTUgMTM1LjQ0NiA3NC44NzU3IDEzNS40NiA3NC42NjQxIDEzNS40NkM3NC4zNzYzIDEzNS40NiA3NC4xMTE4IDEzNS40MDMgNzMuODcwNiAxMzUuMjg5QzczLjYyOTQgMTM1LjE3NSA3My40MzY4IDEzNC45ODQgNzMuMjkzIDEzNC43MThDNzMuMTUzMyAxMzQuNDQ3IDczLjA4MzUgMTM0LjA4MyA3My4wODM1IDEzMy42MjZWMTI2Ljc5NlpNNzkuNzY3NiAxMzUuNDZDNzkuMjg5NCAxMzUuNDYgNzguODU1NiAxMzUuMzggNzguNDY2MyAxMzUuMjE5Qzc4LjA4MTIgMTM1LjA1NCA3Ny43NDkgMTM0LjgyNCA3Ny40Njk3IDEzNC41MjdDNzcuMTk0NyAxMzQuMjMxIDc2Ljk4MzEgMTMzLjg4IDc2LjgzNSAxMzMuNDc0Qzc2LjY4NjggMTMzLjA2NyA3Ni42MTI4IDEzMi42MjMgNzYuNjEyOCAxMzIuMTQxVjEzMS44NzRDNzYuNjEyOCAxMzEuMzE1IDc2LjY5NTMgMTMwLjgxOCA3Ni44NjA0IDEzMC4zODJDNzcuMDI1NCAxMjkuOTQyIDc3LjI0OTcgMTI5LjU3IDc3LjUzMzIgMTI5LjI2NUM3Ny44MTY3IDEyOC45NiA3OC4xMzgzIDEyOC43MyA3OC40OTggMTI4LjU3M0M3OC44NTc3IDEyOC40MTcgNzkuMjMwMSAxMjguMzM4IDc5LjYxNTIgMTI4LjMzOEM4MC4xMDYxIDEyOC4zMzggODAuNTI5MyAxMjguNDIzIDgwLjg4NDggMTI4LjU5MkM4MS4yNDQ1IDEyOC43NjIgODEuNTM4NiAxMjguOTk5IDgxLjc2NzEgMTI5LjMwM0M4MS45OTU2IDEyOS42MDQgODIuMTY0OSAxMjkuOTU5IDgyLjI3NDkgMTMwLjM3QzgyLjM4NDkgMTMwLjc3NiA4Mi40Mzk5IDEzMS4yMiA4Mi40Mzk5IDEzMS43MDNWMTMyLjIyOUg3Ny4zMTFWMTMxLjI3MUg4MS4yNjU2VjEzMS4xODJDODEuMjQ4NyAxMzAuODc3IDgxLjE4NTIgMTMwLjU4MSA4MS4wNzUyIDEzMC4yOTNDODAuOTY5NCAxMzAuMDA2IDgwLjgwMDEgMTI5Ljc2OSA4MC41Njc0IDEyOS41ODNDODAuMzM0NiAxMjkuMzk2IDgwLjAxNzMgMTI5LjMwMyA3OS42MTUyIDEyOS4zMDNDNzkuMzQ4NiAxMjkuMzAzIDc5LjEwMzIgMTI5LjM2IDc4Ljg3ODkgMTI5LjQ3NUM3OC42NTQ2IDEyOS41ODUgNzguNDYyMSAxMjkuNzUgNzguMzAxMyAxMjkuOTdDNzguMTQwNSAxMzAuMTkgNzguMDE1NiAxMzAuNDU4IDc3LjkyNjggMTMwLjc3NkM3Ny44Mzc5IDEzMS4wOTMgNzcuNzkzNSAxMzEuNDU5IDc3Ljc5MzUgMTMxLjg3NFYxMzIuMTQxQzc3Ljc5MzUgMTMyLjQ2NiA3Ny44Mzc5IDEzMi43NzMgNzcuOTI2OCAxMzMuMDYxQzc4LjAxOTkgMTMzLjM0NSA3OC4xNTMyIDEzMy41OTQgNzguMzI2NyAxMzMuODFDNzguNTA0NCAxMzQuMDI2IDc4LjcxODEgMTM0LjE5NSA3OC45Njc4IDEzNC4zMThDNzkuMjIxNyAxMzQuNDQxIDc5LjUwOTQgMTM0LjUwMiA3OS44MzExIDEzNC41MDJDODAuMjQ1OCAxMzQuNTAyIDgwLjU5NyAxMzQuNDE3IDgwLjg4NDggMTM0LjI0OEM4MS4xNzI1IDEzNC4wNzkgODEuNDI0MyAxMzMuODUyIDgxLjY0MDEgMTMzLjU2OUw4Mi4zNTExIDEzNC4xMzRDODIuMjAzIDEzNC4zNTggODIuMDE0NiAxMzQuNTcyIDgxLjc4NjEgMTM0Ljc3NUM4MS41NTc2IDEzNC45NzggODEuMjc2MiAxMzUuMTQzIDgwLjk0MTkgMTM1LjI3QzgwLjYxMTggMTM1LjM5NyA4MC4yMjA0IDEzNS40NiA3OS43Njc2IDEzNS40NlpNODcuODEwMSAxMzMuNTEyQzg3LjgxMDEgMTMzLjM0MiA4Ny43NzIgMTMzLjE4NiA4Ny42OTU4IDEzMy4wNDJDODcuNjIzOSAxMzIuODk0IDg3LjQ3MzYgMTMyLjc2MSA4Ny4yNDUxIDEzMi42NDJDODcuMDIwOCAxMzIuNTE5IDg2LjY4MjMgMTMyLjQxNCA4Ni4yMjk1IDEzMi4zMjVDODUuODQ4NiAxMzIuMjQ0IDg1LjUwMzcgMTMyLjE0OSA4NS4xOTQ4IDEzMi4wMzlDODQuODkwMSAxMzEuOTI5IDg0LjYyOTkgMTMxLjc5NiA4NC40MTQxIDEzMS42MzlDODQuMjAyNSAxMzEuNDgzIDg0LjAzOTYgMTMxLjI5OSA4My45MjUzIDEzMS4wODdDODMuODExIDEzMC44NzUgODMuNzUzOSAxMzAuNjI4IDgzLjc1MzkgMTMwLjM0NEM4My43NTM5IDEzMC4wNzMgODMuODEzMiAxMjkuODE3IDgzLjkzMTYgMTI5LjU3NkM4NC4wNTQ0IDEyOS4zMzUgODQuMjI1NyAxMjkuMTIxIDg0LjQ0NTggMTI4LjkzNUM4NC42NzAxIDEyOC43NDkgODQuOTM4OCAxMjguNjAzIDg1LjI1MiAxMjguNDk3Qzg1LjU2NTEgMTI4LjM5MSA4NS45MTQyIDEyOC4zMzggODYuMjk5MyAxMjguMzM4Qzg2Ljg0OTQgMTI4LjMzOCA4Ny4zMTkyIDEyOC40MzYgODcuNzA4NSAxMjguNjNDODguMDk3OCAxMjguODI1IDg4LjM5NjIgMTI5LjA4NSA4OC42MDM1IDEyOS40MTFDODguODEwOSAxMjkuNzMzIDg4LjkxNDYgMTMwLjA5IDg4LjkxNDYgMTMwLjQ4NEg4Ny43NDAyQzg3Ljc0MDIgMTMwLjI5MyA4Ny42ODMxIDEzMC4xMDkgODcuNTY4OCAxMjkuOTMyQzg3LjQ1ODggMTI5Ljc1IDg3LjI5NTkgMTI5LjU5OSA4Ny4wODAxIDEyOS40ODFDODYuODY4NSAxMjkuMzYyIDg2LjYwODIgMTI5LjMwMyA4Ni4yOTkzIDEyOS4zMDNDODUuOTczNSAxMjkuMzAzIDg1LjcwOSAxMjkuMzU0IDg1LjUwNTkgMTI5LjQ1NkM4NS4zMDcgMTI5LjU1MyA4NS4xNjEgMTI5LjY3OCA4NS4wNjc5IDEyOS44M0M4NC45NzkgMTI5Ljk4MiA4NC45MzQ2IDEzMC4xNDMgODQuOTM0NiAxMzAuMzEyQzg0LjkzNDYgMTMwLjQzOSA4NC45NTU3IDEzMC41NTQgODQuOTk4IDEzMC42NTVDODUuMDQ0NiAxMzAuNzUzIDg1LjEyNSAxMzAuODQ0IDg1LjIzOTMgMTMwLjkyOEM4NS4zNTM1IDEzMS4wMDkgODUuNTE0MyAxMzEuMDg1IDg1LjcyMTcgMTMxLjE1N0M4NS45MjkgMTMxLjIyOSA4Ni4xOTM1IDEzMS4zMDEgODYuNTE1MSAxMzEuMzczQzg3LjA3OCAxMzEuNSA4Ny41NDEzIDEzMS42NTIgODcuOTA1MyAxMzEuODNDODguMjY5MiAxMzIuMDA3IDg4LjU0IDEzMi4yMjUgODguNzE3OCAxMzIuNDgzQzg4Ljg5NTUgMTMyLjc0MiA4OC45ODQ0IDEzMy4wNTUgODguOTg0NCAxMzMuNDIzQzg4Ljk4NDQgMTMzLjcyMyA4OC45MjA5IDEzMy45OTggODguNzkzOSAxMzQuMjQ4Qzg4LjY3MTIgMTM0LjQ5OCA4OC40OTE0IDEzNC43MTQgODguMjU0NCAxMzQuODk2Qzg4LjAyMTYgMTM1LjA3MyA4Ny43NDI0IDEzNS4yMTMgODcuNDE2NSAxMzUuMzE0Qzg3LjA5NDkgMTM1LjQxMiA4Ni43MzMxIDEzNS40NiA4Ni4zMzExIDEzNS40NkM4NS43MjU5IDEzNS40NiA4NS4yMTM5IDEzNS4zNTMgODQuNzk0OSAxMzUuMTM3Qzg0LjM3NiAxMzQuOTIxIDg0LjA1ODYgMTM0LjY0MiA4My44NDI4IDEzNC4yOTlDODMuNjI3IDEzMy45NTYgODMuNTE5IDEzMy41OTQgODMuNTE5IDEzMy4yMTNIODQuNjk5N0M4NC43MTY2IDEzMy41MzUgODQuODA5NyAxMzMuNzkxIDg0Ljk3OSAxMzMuOTgxQzg1LjE0ODMgMTM0LjE2OCA4NS4zNTU2IDEzNC4zMDEgODUuNjAxMSAxMzQuMzgxQzg1Ljg0NjUgMTM0LjQ1OCA4Ni4wODk4IDEzNC40OTYgODYuMzMxMSAxMzQuNDk2Qzg2LjY1MjcgMTM0LjQ5NiA4Ni45MjE0IDEzNC40NTMgODcuMTM3MiAxMzQuMzY5Qzg3LjM1NzMgMTM0LjI4NCA4Ny41MjQ0IDEzNC4xNjggODcuNjM4NyAxMzQuMDJDODcuNzUyOSAxMzMuODcxIDg3LjgxMDEgMTMzLjcwMiA4Ny44MTAxIDEzMy41MTJaTTk2LjYyNyAxMjguNDY1VjEyOS4zNjdIOTIuOTEzNlYxMjguNDY1SDk2LjYyN1pNOTQuMTcwNCAxMjYuNzk2SDk1LjM0NDdWMTMzLjYzMkM5NS4zNDQ3IDEzMy44NjUgOTUuMzgwNyAxMzQuMDQxIDk1LjQ1MjYgMTM0LjE1OUM5NS41MjQ2IDEzNC4yNzggOTUuNjE3NyAxMzQuMzU2IDk1LjczMTkgMTM0LjM5NEM5NS44NDYyIDEzNC40MzIgOTUuOTY4OSAxMzQuNDUxIDk2LjEwMDEgMTM0LjQ1MUM5Ni4xOTc0IDEzNC40NTEgOTYuMjk5IDEzNC40NDMgOTYuNDA0OCAxMzQuNDI2Qzk2LjUxNDggMTM0LjQwNSA5Ni41OTczIDEzNC4zODggOTYuNjUyMyAxMzQuMzc1TDk2LjY1ODcgMTM1LjMzM0M5Ni41NjU2IDEzNS4zNjMgOTYuNDQyOSAxMzUuMzkxIDk2LjI5MDUgMTM1LjQxNkM5Ni4xNDI0IDEzNS40NDYgOTUuOTYyNiAxMzUuNDYgOTUuNzUxIDEzNS40NkM5NS40NjMyIDEzNS40NiA5NS4xOTg3IDEzNS40MDMgOTQuOTU3NSAxMzUuMjg5Qzk0LjcxNjMgMTM1LjE3NSA5NC41MjM4IDEzNC45ODQgOTQuMzc5OSAxMzQuNzE4Qzk0LjI0MDIgMTM0LjQ0NyA5NC4xNzA0IDEzNC4wODMgOTQuMTcwNCAxMzMuNjI2VjEyNi43OTZaTTk3LjU2NjQgMTMxLjk3NlYxMzEuODNDOTcuNTY2NCAxMzEuMzM0IDk3LjYzODMgMTMwLjg3NSA5Ny43ODIyIDEzMC40NTJDOTcuOTI2MSAxMzAuMDI1IDk4LjEzMzUgMTI5LjY1NCA5OC40MDQzIDEyOS4zNDFDOTguNjc1MSAxMjkuMDI0IDk5LjAwMzEgMTI4Ljc3OCA5OS4zODgyIDEyOC42MDVDOTkuNzczMyAxMjguNDI3IDEwMC4yMDUgMTI4LjMzOCAxMDAuNjgzIDEyOC4zMzhDMTAxLjE2NiAxMjguMzM4IDEwMS41OTkgMTI4LjQyNyAxMDEuOTg0IDEyOC42MDVDMTAyLjM3NCAxMjguNzc4IDEwMi43MDQgMTI5LjAyNCAxMDIuOTc1IDEyOS4zNDFDMTAzLjI1IDEyOS42NTQgMTAzLjQ1OSAxMzAuMDI1IDEwMy42MDMgMTMwLjQ1MkMxMDMuNzQ3IDEzMC44NzUgMTAzLjgxOSAxMzEuMzM0IDEwMy44MTkgMTMxLjgzVjEzMS45NzZDMTAzLjgxOSAxMzIuNDcxIDEwMy43NDcgMTMyLjkzIDEwMy42MDMgMTMzLjM1M0MxMDMuNDU5IDEzMy43NzYgMTAzLjI1IDEzNC4xNDYgMTAyLjk3NSAxMzQuNDY0QzEwMi43MDQgMTM0Ljc3NyAxMDIuMzc2IDEzNS4wMjIgMTAxLjk5MSAxMzUuMkMxMDEuNjEgMTM1LjM3NCAxMDEuMTc4IDEzNS40NiAxMDAuNjk2IDEzNS40NkMxMDAuMjEzIDEzNS40NiA5OS43Nzk2IDEzNS4zNzQgOTkuMzk0NSAxMzUuMkM5OS4wMDk0IDEzNS4wMjIgOTguNjc5NCAxMzQuNzc3IDk4LjQwNDMgMTM0LjQ2NEM5OC4xMzM1IDEzNC4xNDYgOTcuOTI2MSAxMzMuNzc2IDk3Ljc4MjIgMTMzLjM1M0M5Ny42MzgzIDEzMi45MyA5Ny41NjY0IDEzMi40NzEgOTcuNTY2NCAxMzEuOTc2Wk05OC43NDA3IDEzMS44M1YxMzEuOTc2Qzk4Ljc0MDcgMTMyLjMxOCA5OC43ODA5IDEzMi42NDIgOTguODYxMyAxMzIuOTQ3Qzk4Ljk0MTcgMTMzLjI0NyA5OS4wNjIzIDEzMy41MTQgOTkuMjIzMSAxMzMuNzQ3Qzk5LjM4ODIgMTMzLjk3OSA5OS41OTM0IDEzNC4xNjMgOTkuODM4OSAxMzQuMjk5QzEwMC4wODQgMTM0LjQzIDEwMC4zNyAxMzQuNDk2IDEwMC42OTYgMTM0LjQ5NkMxMDEuMDE3IDEzNC40OTYgMTAxLjI5OSAxMzQuNDMgMTAxLjU0IDEzNC4yOTlDMTAxLjc4NSAxMzQuMTYzIDEwMS45ODkgMTMzLjk3OSAxMDIuMTQ5IDEzMy43NDdDMTAyLjMxIDEzMy41MTQgMTAyLjQzMSAxMzMuMjQ3IDEwMi41MTEgMTMyLjk0N0MxMDIuNTk2IDEzMi42NDIgMTAyLjYzOCAxMzIuMzE4IDEwMi42MzggMTMxLjk3NlYxMzEuODNDMTAyLjYzOCAxMzEuNDkxIDEwMi41OTYgMTMxLjE3MiAxMDIuNTExIDEzMC44NzFDMTAyLjQzMSAxMzAuNTY2IDEwMi4zMDggMTMwLjI5OCAxMDIuMTQzIDEzMC4wNjVDMTAxLjk4MiAxMjkuODI4IDEwMS43NzkgMTI5LjY0MiAxMDEuNTM0IDEyOS41MDZDMTAxLjI5MiAxMjkuMzcxIDEwMS4wMDkgMTI5LjMwMyAxMDAuNjgzIDEyOS4zMDNDMTAwLjM2MSAxMjkuMzAzIDEwMC4wNzggMTI5LjM3MSA5OS44MzI1IDEyOS41MDZDOTkuNTkxMyAxMjkuNjQyIDk5LjM4ODIgMTI5LjgyOCA5OS4yMjMxIDEzMC4wNjVDOTkuMDYyMyAxMzAuMjk4IDk4Ljk0MTcgMTMwLjU2NiA5OC44NjEzIDEzMC44NzFDOTguNzgwOSAxMzEuMTcyIDk4Ljc0MDcgMTMxLjQ5MSA5OC43NDA3IDEzMS44M1pNMTExLjM5MiAxMjguNDY1VjEyOS4zNjdIMTA3LjY3OFYxMjguNDY1SDExMS4zOTJaTTEwOC45MzUgMTI2Ljc5NkgxMTAuMTA5VjEzMy42MzJDMTEwLjEwOSAxMzMuODY1IDExMC4xNDUgMTM0LjA0MSAxMTAuMjE3IDEzNC4xNTlDMTEwLjI4OSAxMzQuMjc4IDExMC4zODIgMTM0LjM1NiAxMTAuNDk3IDEzNC4zOTRDMTEwLjYxMSAxMzQuNDMyIDExMC43MzQgMTM0LjQ1MSAxMTAuODY1IDEzNC40NTFDMTEwLjk2MiAxMzQuNDUxIDExMS4wNjQgMTM0LjQ0MyAxMTEuMTY5IDEzNC40MjZDMTExLjI3OSAxMzQuNDA1IDExMS4zNjIgMTM0LjM4OCAxMTEuNDE3IDEzNC4zNzVMMTExLjQyMyAxMzUuMzMzQzExMS4zMyAxMzUuMzYzIDExMS4yMDggMTM1LjM5MSAxMTEuMDU1IDEzNS40MTZDMTEwLjkwNyAxMzUuNDQ2IDExMC43MjcgMTM1LjQ2IDExMC41MTYgMTM1LjQ2QzExMC4yMjggMTM1LjQ2IDEwOS45NjMgMTM1LjQwMyAxMDkuNzIyIDEzNS4yODlDMTA5LjQ4MSAxMzUuMTc1IDEwOS4yODggMTM0Ljk4NCAxMDkuMTQ1IDEzNC43MThDMTA5LjAwNSAxMzQuNDQ3IDEwOC45MzUgMTM0LjA4MyAxMDguOTM1IDEzMy42MjZWMTI2Ljc5NlpNMTEzLjk0MyAxMjUuNTgzVjEzNS4zMzNIMTEyLjc2OVYxMjUuNTgzSDExMy45NDNaTTExMy42NjQgMTMxLjYzOUwxMTMuMTc1IDEzMS42MkMxMTMuMTggMTMxLjE1IDExMy4yNDkgMTMwLjcxNyAxMTMuMzg1IDEzMC4zMTlDMTEzLjUyIDEyOS45MTcgMTEzLjcxMSAxMjkuNTY4IDExMy45NTYgMTI5LjI3MUMxMTQuMjAxIDEyOC45NzUgMTE0LjQ5MyAxMjguNzQ3IDExNC44MzIgMTI4LjU4NkMxMTUuMTc1IDEyOC40MjEgMTE1LjU1NCAxMjguMzM4IDExNS45NjggMTI4LjMzOEMxMTYuMzA3IDEyOC4zMzggMTE2LjYxMSAxMjguMzg1IDExNi44ODIgMTI4LjQ3OEMxMTcuMTUzIDEyOC41NjcgMTE3LjM4NCAxMjguNzExIDExNy41NzQgMTI4LjkxQzExNy43NjkgMTI5LjEwOSAxMTcuOTE3IDEyOS4zNjcgMTE4LjAxOSAxMjkuNjg0QzExOC4xMiAxMjkuOTk3IDExOC4xNzEgMTMwLjM4IDExOC4xNzEgMTMwLjgzM1YxMzUuMzMzSDExNi45OVYxMzAuODJDMTE2Ljk5IDEzMC40NjEgMTE2LjkzNyAxMzAuMTczIDExNi44MzIgMTI5Ljk1N0MxMTYuNzI2IDEyOS43MzcgMTE2LjU3MSAxMjkuNTc4IDExNi4zNjggMTI5LjQ4MUMxMTYuMTY1IDEyOS4zNzkgMTE1LjkxNSAxMjkuMzI5IDExNS42MTkgMTI5LjMyOUMxMTUuMzI3IDEyOS4zMjkgMTE1LjA2MSAxMjkuMzkgMTE0LjgxOSAxMjkuNTEzQzExNC41ODIgMTI5LjYzNSAxMTQuMzc3IDEyOS44MDUgMTE0LjIwNCAxMzAuMDIxQzExNC4wMzQgMTMwLjIzNiAxMTMuOTAxIDEzMC40ODQgMTEzLjgwNCAxMzAuNzYzQzExMy43MTEgMTMxLjAzOCAxMTMuNjY0IDEzMS4zMyAxMTMuNjY0IDEzMS42MzlaTTEyMi43NzkgMTM1LjQ2QzEyMi4zMDEgMTM1LjQ2IDEyMS44NjcgMTM1LjM4IDEyMS40NzggMTM1LjIxOUMxMjEuMDkzIDEzNS4wNTQgMTIwLjc2MSAxMzQuODI0IDEyMC40ODEgMTM0LjUyN0MxMjAuMjA2IDEzNC4yMzEgMTE5Ljk5NSAxMzMuODggMTE5Ljg0NyAxMzMuNDc0QzExOS42OTkgMTMzLjA2NyAxMTkuNjI1IDEzMi42MjMgMTE5LjYyNSAxMzIuMTQxVjEzMS44NzRDMTE5LjYyNSAxMzEuMzE1IDExOS43MDcgMTMwLjgxOCAxMTkuODcyIDEzMC4zODJDMTIwLjAzNyAxMjkuOTQyIDEyMC4yNjEgMTI5LjU3IDEyMC41NDUgMTI5LjI2NUMxMjAuODI4IDEyOC45NiAxMjEuMTUgMTI4LjczIDEyMS41MSAxMjguNTczQzEyMS44NjkgMTI4LjQxNyAxMjIuMjQyIDEyOC4zMzggMTIyLjYyNyAxMjguMzM4QzEyMy4xMTggMTI4LjMzOCAxMjMuNTQxIDEyOC40MjMgMTIzLjg5NiAxMjguNTkyQzEyNC4yNTYgMTI4Ljc2MiAxMjQuNTUgMTI4Ljk5OSAxMjQuNzc5IDEyOS4zMDNDMTI1LjAwNyAxMjkuNjA0IDEyNS4xNzcgMTI5Ljk1OSAxMjUuMjg3IDEzMC4zN0MxMjUuMzk3IDEzMC43NzYgMTI1LjQ1MiAxMzEuMjIgMTI1LjQ1MiAxMzEuNzAzVjEzMi4yMjlIMTIwLjMyM1YxMzEuMjcxSDEyNC4yNzdWMTMxLjE4MkMxMjQuMjYgMTMwLjg3NyAxMjQuMTk3IDEzMC41ODEgMTI0LjA4NyAxMzAuMjkzQzEyMy45ODEgMTMwLjAwNiAxMjMuODEyIDEyOS43NjkgMTIzLjU3OSAxMjkuNTgzQzEyMy4zNDYgMTI5LjM5NiAxMjMuMDI5IDEyOS4zMDMgMTIyLjYyNyAxMjkuMzAzQzEyMi4zNiAxMjkuMzAzIDEyMi4xMTUgMTI5LjM2IDEyMS44OTEgMTI5LjQ3NUMxMjEuNjY2IDEyOS41ODUgMTIxLjQ3NCAxMjkuNzUgMTIxLjMxMyAxMjkuOTdDMTIxLjE1MiAxMzAuMTkgMTIxLjAyNyAxMzAuNDU4IDEyMC45MzggMTMwLjc3NkMxMjAuODUgMTMxLjA5MyAxMjAuODA1IDEzMS40NTkgMTIwLjgwNSAxMzEuODc0VjEzMi4xNDFDMTIwLjgwNSAxMzIuNDY2IDEyMC44NSAxMzIuNzczIDEyMC45MzggMTMzLjA2MUMxMjEuMDMyIDEzMy4zNDUgMTIxLjE2NSAxMzMuNTk0IDEyMS4zMzggMTMzLjgxQzEyMS41MTYgMTM0LjAyNiAxMjEuNzMgMTM0LjE5NSAxMjEuOTc5IDEzNC4zMThDMTIyLjIzMyAxMzQuNDQxIDEyMi41MjEgMTM0LjUwMiAxMjIuODQzIDEzNC41MDJDMTIzLjI1NyAxMzQuNTAyIDEyMy42MDkgMTM0LjQxNyAxMjMuODk2IDEzNC4yNDhDMTI0LjE4NCAxMzQuMDc5IDEyNC40MzYgMTMzLjg1MiAxMjQuNjUyIDEzMy41NjlMMTI1LjM2MyAxMzQuMTM0QzEyNS4yMTUgMTM0LjM1OCAxMjUuMDI2IDEzNC41NzIgMTI0Ljc5OCAxMzQuNzc1QzEyNC41NjkgMTM0Ljk3OCAxMjQuMjg4IDEzNS4xNDMgMTIzLjk1NCAxMzUuMjdDMTIzLjYyNCAxMzUuMzk3IDEyMy4yMzIgMTM1LjQ2IDEyMi43NzkgMTM1LjQ2Wk0xMzQuMDQ2IDEzMy41MTJDMTM0LjA0NiAxMzMuMzQyIDEzNC4wMDggMTMzLjE4NiAxMzMuOTMyIDEzMy4wNDJDMTMzLjg2IDEzMi44OTQgMTMzLjcxIDEzMi43NjEgMTMzLjQ4MSAxMzIuNjQyQzEzMy4yNTcgMTMyLjUxOSAxMzIuOTE5IDEzMi40MTQgMTMyLjQ2NiAxMzIuMzI1QzEzMi4wODUgMTMyLjI0NCAxMzEuNzQgMTMyLjE0OSAxMzEuNDMxIDEzMi4wMzlDMTMxLjEyNiAxMzEuOTI5IDEzMC44NjYgMTMxLjc5NiAxMzAuNjUgMTMxLjYzOUMxMzAuNDM5IDEzMS40ODMgMTMwLjI3NiAxMzEuMjk5IDEzMC4xNjIgMTMxLjA4N0MxMzAuMDQ3IDEzMC44NzUgMTI5Ljk5IDEzMC42MjggMTI5Ljk5IDEzMC4zNDRDMTI5Ljk5IDEzMC4wNzMgMTMwLjA0OSAxMjkuODE3IDEzMC4xNjggMTI5LjU3NkMxMzAuMjkxIDEyOS4zMzUgMTMwLjQ2MiAxMjkuMTIxIDEzMC42ODIgMTI4LjkzNUMxMzAuOTA2IDEyOC43NDkgMTMxLjE3NSAxMjguNjAzIDEzMS40ODggMTI4LjQ5N0MxMzEuODAxIDEyOC4zOTEgMTMyLjE1MSAxMjguMzM4IDEzMi41MzYgMTI4LjMzOEMxMzMuMDg2IDEyOC4zMzggMTMzLjU1NiAxMjguNDM2IDEzMy45NDUgMTI4LjYzQzEzNC4zMzQgMTI4LjgyNSAxMzQuNjMyIDEyOS4wODUgMTM0Ljg0IDEyOS40MTFDMTM1LjA0NyAxMjkuNzMzIDEzNS4xNTEgMTMwLjA5IDEzNS4xNTEgMTMwLjQ4NEgxMzMuOTc3QzEzMy45NzcgMTMwLjI5MyAxMzMuOTE5IDEzMC4xMDkgMTMzLjgwNSAxMjkuOTMyQzEzMy42OTUgMTI5Ljc1IDEzMy41MzIgMTI5LjU5OSAxMzMuMzE2IDEyOS40ODFDMTMzLjEwNSAxMjkuMzYyIDEzMi44NDUgMTI5LjMwMyAxMzIuNTM2IDEyOS4zMDNDMTMyLjIxIDEyOS4zMDMgMTMxLjk0NSAxMjkuMzU0IDEzMS43NDIgMTI5LjQ1NkMxMzEuNTQzIDEyOS41NTMgMTMxLjM5NyAxMjkuNjc4IDEzMS4zMDQgMTI5LjgzQzEzMS4yMTUgMTI5Ljk4MiAxMzEuMTcxIDEzMC4xNDMgMTMxLjE3MSAxMzAuMzEyQzEzMS4xNzEgMTMwLjQzOSAxMzEuMTkyIDEzMC41NTQgMTMxLjIzNCAxMzAuNjU1QzEzMS4yODEgMTMwLjc1MyAxMzEuMzYxIDEzMC44NDQgMTMxLjQ3NiAxMzAuOTI4QzEzMS41OSAxMzEuMDA5IDEzMS43NTEgMTMxLjA4NSAxMzEuOTU4IDEzMS4xNTdDMTMyLjE2NSAxMzEuMjI5IDEzMi40MyAxMzEuMzAxIDEzMi43NTEgMTMxLjM3M0MxMzMuMzE0IDEzMS41IDEzMy43NzggMTMxLjY1MiAxMzQuMTQyIDEzMS44M0MxMzQuNTA2IDEzMi4wMDcgMTM0Ljc3NiAxMzIuMjI1IDEzNC45NTQgMTMyLjQ4M0MxMzUuMTMyIDEzMi43NDIgMTM1LjIyMSAxMzMuMDU1IDEzNS4yMjEgMTMzLjQyM0MxMzUuMjIxIDEzMy43MjMgMTM1LjE1NyAxMzMuOTk4IDEzNS4wMyAxMzQuMjQ4QzEzNC45MDggMTM0LjQ5OCAxMzQuNzI4IDEzNC43MTQgMTM0LjQ5MSAxMzQuODk2QzEzNC4yNTggMTM1LjA3MyAxMzMuOTc5IDEzNS4yMTMgMTMzLjY1MyAxMzUuMzE0QzEzMy4zMzEgMTM1LjQxMiAxMzIuOTY5IDEzNS40NiAxMzIuNTY3IDEzNS40NkMxMzEuOTYyIDEzNS40NiAxMzEuNDUgMTM1LjM1MyAxMzEuMDMxIDEzNS4xMzdDMTMwLjYxMiAxMzQuOTIxIDEzMC4yOTUgMTM0LjY0MiAxMzAuMDc5IDEzNC4yOTlDMTI5Ljg2MyAxMzMuOTU2IDEyOS43NTUgMTMzLjU5NCAxMjkuNzU1IDEzMy4yMTNIMTMwLjkzNkMxMzAuOTUzIDEzMy41MzUgMTMxLjA0NiAxMzMuNzkxIDEzMS4yMTUgMTMzLjk4MUMxMzEuMzg1IDEzNC4xNjggMTMxLjU5MiAxMzQuMzAxIDEzMS44MzcgMTM0LjM4MUMxMzIuMDgzIDEzNC40NTggMTMyLjMyNiAxMzQuNDk2IDEzMi41NjcgMTM0LjQ5NkMxMzIuODg5IDEzNC40OTYgMTMzLjE1OCAxMzQuNDUzIDEzMy4zNzQgMTM0LjM2OUMxMzMuNTk0IDEzNC4yODQgMTMzLjc2MSAxMzQuMTY4IDEzMy44NzUgMTM0LjAyQzEzMy45ODkgMTMzLjg3MSAxMzQuMDQ2IDEzMy43MDIgMTM0LjA0NiAxMzMuNTEyWk0xMzcuOTM4IDEyNS41ODNWMTM1LjMzM0gxMzYuNzYzVjEyNS41ODNIMTM3LjkzOFpNMTM3LjY1OCAxMzEuNjM5TDEzNy4xNjkgMTMxLjYyQzEzNy4xNzQgMTMxLjE1IDEzNy4yNDMgMTMwLjcxNyAxMzcuMzc5IDEzMC4zMTlDMTM3LjUxNCAxMjkuOTE3IDEzNy43MDUgMTI5LjU2OCAxMzcuOTUgMTI5LjI3MUMxMzguMTk2IDEyOC45NzUgMTM4LjQ4OCAxMjguNzQ3IDEzOC44MjYgMTI4LjU4NkMxMzkuMTY5IDEyOC40MjEgMTM5LjU0OCAxMjguMzM4IDEzOS45NjIgMTI4LjMzOEMxNDAuMzAxIDEyOC4zMzggMTQwLjYwNiAxMjguMzg1IDE0MC44NzYgMTI4LjQ3OEMxNDEuMTQ3IDEyOC41NjcgMTQxLjM3OCAxMjguNzExIDE0MS41NjggMTI4LjkxQzE0MS43NjMgMTI5LjEwOSAxNDEuOTExIDEyOS4zNjcgMTQyLjAxMyAxMjkuNjg0QzE0Mi4xMTQgMTI5Ljk5NyAxNDIuMTY1IDEzMC4zOCAxNDIuMTY1IDEzMC44MzNWMTM1LjMzM0gxNDAuOTg0VjEzMC44MkMxNDAuOTg0IDEzMC40NjEgMTQwLjkzMSAxMzAuMTczIDE0MC44MjYgMTI5Ljk1N0MxNDAuNzIgMTI5LjczNyAxNDAuNTY1IDEyOS41NzggMTQwLjM2MiAxMjkuNDgxQzE0MC4xNTkgMTI5LjM3OSAxMzkuOTEgMTI5LjMyOSAxMzkuNjEzIDEyOS4zMjlDMTM5LjMyMSAxMjkuMzI5IDEzOS4wNTUgMTI5LjM5IDEzOC44MTMgMTI5LjUxM0MxMzguNTc2IDEyOS42MzUgMTM4LjM3MSAxMjkuODA1IDEzOC4xOTggMTMwLjAyMUMxMzguMDI4IDEzMC4yMzYgMTM3Ljg5NSAxMzAuNDg0IDEzNy43OTggMTMwLjc2M0MxMzcuNzA1IDEzMS4wMzggMTM3LjY1OCAxMzEuMzMgMTM3LjY1OCAxMzEuNjM5Wk0xNDMuNjEyIDEzMS45NzZWMTMxLjgzQzE0My42MTIgMTMxLjMzNCAxNDMuNjg0IDEzMC44NzUgMTQzLjgyOCAxMzAuNDUyQzE0My45NzIgMTMwLjAyNSAxNDQuMTc5IDEyOS42NTQgMTQ0LjQ1IDEyOS4zNDFDMTQ0LjcyMSAxMjkuMDI0IDE0NS4wNDkgMTI4Ljc3OCAxNDUuNDM0IDEyOC42MDVDMTQ1LjgxOSAxMjguNDI3IDE0Ni4yNTEgMTI4LjMzOCAxNDYuNzI5IDEyOC4zMzhDMTQ3LjIxMSAxMjguMzM4IDE0Ny42NDUgMTI4LjQyNyAxNDguMDMgMTI4LjYwNUMxNDguNDIgMTI4Ljc3OCAxNDguNzUgMTI5LjAyNCAxNDkuMDIxIDEyOS4zNDFDMTQ5LjI5NiAxMjkuNjU0IDE0OS41MDUgMTMwLjAyNSAxNDkuNjQ5IDEzMC40NTJDMTQ5Ljc5MyAxMzAuODc1IDE0OS44NjUgMTMxLjMzNCAxNDkuODY1IDEzMS44M1YxMzEuOTc2QzE0OS44NjUgMTMyLjQ3MSAxNDkuNzkzIDEzMi45MyAxNDkuNjQ5IDEzMy4zNTNDMTQ5LjUwNSAxMzMuNzc2IDE0OS4yOTYgMTM0LjE0NiAxNDkuMDIxIDEzNC40NjRDMTQ4Ljc1IDEzNC43NzcgMTQ4LjQyMiAxMzUuMDIyIDE0OC4wMzcgMTM1LjJDMTQ3LjY1NiAxMzUuMzc0IDE0Ny4yMjQgMTM1LjQ2IDE0Ni43NDIgMTM1LjQ2QzE0Ni4yNTkgMTM1LjQ2IDE0NS44MjYgMTM1LjM3NCAxNDUuNDQgMTM1LjJDMTQ1LjA1NSAxMzUuMDIyIDE0NC43MjUgMTM0Ljc3NyAxNDQuNDUgMTM0LjQ2NEMxNDQuMTc5IDEzNC4xNDYgMTQzLjk3MiAxMzMuNzc2IDE0My44MjggMTMzLjM1M0MxNDMuNjg0IDEzMi45MyAxNDMuNjEyIDEzMi40NzEgMTQzLjYxMiAxMzEuOTc2Wk0xNDQuNzg3IDEzMS44M1YxMzEuOTc2QzE0NC43ODcgMTMyLjMxOCAxNDQuODI3IDEzMi42NDIgMTQ0LjkwNyAxMzIuOTQ3QzE0NC45ODggMTMzLjI0NyAxNDUuMTA4IDEzMy41MTQgMTQ1LjI2OSAxMzMuNzQ3QzE0NS40MzQgMTMzLjk3OSAxNDUuNjM5IDEzNC4xNjMgMTQ1Ljg4NSAxMzQuMjk5QzE0Ni4xMyAxMzQuNDMgMTQ2LjQxNiAxMzQuNDk2IDE0Ni43NDIgMTM0LjQ5NkMxNDcuMDYzIDEzNC40OTYgMTQ3LjM0NSAxMzQuNDMgMTQ3LjU4NiAxMzQuMjk5QzE0Ny44MzEgMTM0LjE2MyAxNDguMDM1IDEzMy45NzkgMTQ4LjE5NSAxMzMuNzQ3QzE0OC4zNTYgMTMzLjUxNCAxNDguNDc3IDEzMy4yNDcgMTQ4LjU1NyAxMzIuOTQ3QzE0OC42NDIgMTMyLjY0MiAxNDguNjg0IDEzMi4zMTggMTQ4LjY4NCAxMzEuOTc2VjEzMS44M0MxNDguNjg0IDEzMS40OTEgMTQ4LjY0MiAxMzEuMTcyIDE0OC41NTcgMTMwLjg3MUMxNDguNDc3IDEzMC41NjYgMTQ4LjM1NCAxMzAuMjk4IDE0OC4xODkgMTMwLjA2NUMxNDguMDI4IDEyOS44MjggMTQ3LjgyNSAxMjkuNjQyIDE0Ny41OCAxMjkuNTA2QzE0Ny4zMzggMTI5LjM3MSAxNDcuMDU1IDEyOS4zMDMgMTQ2LjcyOSAxMjkuMzAzQzE0Ni40MDcgMTI5LjMwMyAxNDYuMTI0IDEyOS4zNzEgMTQ1Ljg3OCAxMjkuNTA2QzE0NS42MzcgMTI5LjY0MiAxNDUuNDM0IDEyOS44MjggMTQ1LjI2OSAxMzAuMDY1QzE0NS4xMDggMTMwLjI5OCAxNDQuOTg4IDEzMC41NjYgMTQ0LjkwNyAxMzAuODcxQzE0NC44MjcgMTMxLjE3MiAxNDQuNzg3IDEzMS40OTEgMTQ0Ljc4NyAxMzEuODNaTTE1Mi41MTIgMTI5LjU0NFYxMzUuMzMzSDE1MS4zMzdWMTI4LjQ2NUgxNTIuNDhMMTUyLjUxMiAxMjkuNTQ0Wk0xNTQuNjU3IDEyOC40MjdMMTU0LjY1MSAxMjkuNTE5QzE1NC41NTQgMTI5LjQ5OCAxNTQuNDYgMTI5LjQ4NSAxNTQuMzcyIDEyOS40ODFDMTU0LjI4NyAxMjkuNDcyIDE1NC4xOSAxMjkuNDY4IDE1NC4wOCAxMjkuNDY4QzE1My44MDkgMTI5LjQ2OCAxNTMuNTcgMTI5LjUxMSAxNTMuMzYyIDEyOS41OTVDMTUzLjE1NSAxMjkuNjggMTUyLjk3OSAxMjkuNzk4IDE1Mi44MzUgMTI5Ljk1MUMxNTIuNjkyIDEzMC4xMDMgMTUyLjU3NyAxMzAuMjg1IDE1Mi40OTMgMTMwLjQ5N0MxNTIuNDEyIDEzMC43MDQgMTUyLjM1OSAxMzAuOTMyIDE1Mi4zMzQgMTMxLjE4MkwxNTIuMDA0IDEzMS4zNzNDMTUyLjAwNCAxMzAuOTU4IDE1Mi4wNDQgMTMwLjU2OSAxNTIuMTI1IDEzMC4yMDVDMTUyLjIwOSAxMjkuODQxIDE1Mi4zMzggMTI5LjUxOSAxNTIuNTEyIDEyOS4yNEMxNTIuNjg1IDEyOC45NTYgMTUyLjkwNSAxMjguNzM2IDE1My4xNzIgMTI4LjU4QzE1My40NDMgMTI4LjQxOSAxNTMuNzY0IDEyOC4zMzggMTU0LjEzNyAxMjguMzM4QzE1NC4yMjEgMTI4LjMzOCAxNTQuMzE5IDEyOC4zNDkgMTU0LjQyOSAxMjguMzdDMTU0LjUzOSAxMjguMzg3IDE1NC42MTUgMTI4LjQwNiAxNTQuNjU3IDEyOC40MjdaTTE1OC40NjYgMTM1LjQ2QzE1Ny45ODggMTM1LjQ2IDE1Ny41NTQgMTM1LjM4IDE1Ny4xNjUgMTM1LjIxOUMxNTYuNzc5IDEzNS4wNTQgMTU2LjQ0NyAxMzQuODI0IDE1Ni4xNjggMTM0LjUyN0MxNTUuODkzIDEzNC4yMzEgMTU1LjY4MSAxMzMuODggMTU1LjUzMyAxMzMuNDc0QzE1NS4zODUgMTMzLjA2NyAxNTUuMzExIDEzMi42MjMgMTU1LjMxMSAxMzIuMTQxVjEzMS44NzRDMTU1LjMxMSAxMzEuMzE1IDE1NS4zOTQgMTMwLjgxOCAxNTUuNTU5IDEzMC4zODJDMTU1LjcyNCAxMjkuOTQyIDE1NS45NDggMTI5LjU3IDE1Ni4yMzEgMTI5LjI2NUMxNTYuNTE1IDEyOC45NiAxNTYuODM3IDEyOC43MyAxNTcuMTk2IDEyOC41NzNDMTU3LjU1NiAxMjguNDE3IDE1Ny45MjggMTI4LjMzOCAxNTguMzEzIDEyOC4zMzhDMTU4LjgwNCAxMjguMzM4IDE1OS4yMjggMTI4LjQyMyAxNTkuNTgzIDEyOC41OTJDMTU5Ljk0MyAxMjguNzYyIDE2MC4yMzcgMTI4Ljk5OSAxNjAuNDY1IDEyOS4zMDNDMTYwLjY5NCAxMjkuNjA0IDE2MC44NjMgMTI5Ljk1OSAxNjAuOTczIDEzMC4zN0MxNjEuMDgzIDEzMC43NzYgMTYxLjEzOCAxMzEuMjIgMTYxLjEzOCAxMzEuNzAzVjEzMi4yMjlIMTU2LjAwOVYxMzEuMjcxSDE1OS45NjRWMTMxLjE4MkMxNTkuOTQ3IDEzMC44NzcgMTU5Ljg4MyAxMzAuNTgxIDE1OS43NzMgMTMwLjI5M0MxNTkuNjY4IDEzMC4wMDYgMTU5LjQ5OCAxMjkuNzY5IDE1OS4yNjYgMTI5LjU4M0MxNTkuMDMzIDEyOS4zOTYgMTU4LjcxNSAxMjkuMzAzIDE1OC4zMTMgMTI5LjMwM0MxNTguMDQ3IDEyOS4zMDMgMTU3LjgwMSAxMjkuMzYgMTU3LjU3NyAxMjkuNDc1QzE1Ny4zNTMgMTI5LjU4NSAxNTcuMTYgMTI5Ljc1IDE1NyAxMjkuOTdDMTU2LjgzOSAxMzAuMTkgMTU2LjcxNCAxMzAuNDU4IDE1Ni42MjUgMTMwLjc3NkMxNTYuNTM2IDEzMS4wOTMgMTU2LjQ5MiAxMzEuNDU5IDE1Ni40OTIgMTMxLjg3NFYxMzIuMTQxQzE1Ni40OTIgMTMyLjQ2NiAxNTYuNTM2IDEzMi43NzMgMTU2LjYyNSAxMzMuMDYxQzE1Ni43MTggMTMzLjM0NSAxNTYuODUxIDEzMy41OTQgMTU3LjAyNSAxMzMuODFDMTU3LjIwMyAxMzQuMDI2IDE1Ny40MTYgMTM0LjE5NSAxNTcuNjY2IDEzNC4zMThDMTU3LjkyIDEzNC40NDEgMTU4LjIwOCAxMzQuNTAyIDE1OC41MjkgMTM0LjUwMkMxNTguOTQ0IDEzNC41MDIgMTU5LjI5NSAxMzQuNDE3IDE1OS41ODMgMTM0LjI0OEMxNTkuODcxIDEzNC4wNzkgMTYwLjEyMyAxMzMuODUyIDE2MC4zMzggMTMzLjU2OUwxNjEuMDQ5IDEzNC4xMzRDMTYwLjkwMSAxMzQuMzU4IDE2MC43MTMgMTM0LjU3MiAxNjAuNDg0IDEzNC43NzVDMTYwLjI1NiAxMzQuOTc4IDE1OS45NzQgMTM1LjE0MyAxNTkuNjQgMTM1LjI3QzE1OS4zMSAxMzUuMzk3IDE1OC45MTkgMTM1LjQ2IDE1OC40NjYgMTM1LjQ2WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDxkZWZzPlxuXHRcdFx0PGNsaXBQYXRoIGlkPVwiY2xpcDBfNzZfMTI3M1wiPlxuXHRcdFx0XHQ8cmVjdCB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmaWxsPVwid2hpdGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjQ5IDM5KVwiLz5cblx0XHRcdDwvY2xpcFBhdGg+XG5cdFx0PC9kZWZzPlxuXHQ8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHByZXZpZXc7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBUb2dnbGVDb250cm9sLCBTZWxlY3RDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IGpldEVuZ2luZVZlcnNpb24gfSA9IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YTtcblxuZnVuY3Rpb24gQ3VzdG9tVGVtcGxhdGVDb250cm9scyggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBsaXN0aW5nVHlwZXMsXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICAgIGlzU2VsZWN0ZWQsXG5cdFx0ICAgICAgZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH0sXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRjb25zdCB7IGZpZWxkX29wdGlvbnNfZnJvbSA9ICcnIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdHJldHVybiAoXG5cdFx0XHRCb29sZWFuKCBqZXRFbmdpbmVWZXJzaW9uLmxlbmd0aCApICYmXG5cdFx0XHRbICd0ZXJtcycsICdwb3N0cycsICdnZW5lcmF0ZScgXS5pbmNsdWRlcyggZmllbGRfb3B0aW9uc19mcm9tIClcblx0XHQpXG5cdFx0JiYgPD5cblx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICd1c2VfY3VzdG9tX3RlbXBsYXRlJyApIH1cblx0XHRcdFx0bGFiZWw9eyBfXyggJ1VzZSBjdXN0b20gdGVtcGxhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmN1c3RvbV9pdGVtX3RlbXBsYXRlIH1cblx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnY3VzdG9tX2l0ZW1fdGVtcGxhdGUnICkgfVxuXHRcdFx0XHRvbkNoYW5nZT17IGN1c3RvbV9pdGVtX3RlbXBsYXRlID0+IHNldEF0dHJpYnV0ZXMoXG5cdFx0XHRcdFx0eyBjdXN0b21faXRlbV90ZW1wbGF0ZSB9ICkgfVxuXHRcdFx0Lz5cblx0XHRcdHsgYXR0cmlidXRlcy5jdXN0b21faXRlbV90ZW1wbGF0ZSAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0Q29udHJvbC1jdXN0b21faXRlbV90ZW1wbGF0ZV9pZCcgKSB9XG5cdFx0XHRcdGxhYmVsPXsgX18oICdDaG9vc2UgY3VzdG9tIHRlbXBsYXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY3VzdG9tX2l0ZW1fdGVtcGxhdGVfaWQgfVxuXHRcdFx0XHRvcHRpb25zPXsgbGlzdGluZ1R5cGVzIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBjdXN0b21faXRlbV90ZW1wbGF0ZV9pZCA9PiBzZXRBdHRyaWJ1dGVzKFxuXHRcdFx0XHRcdHsgY3VzdG9tX2l0ZW1fdGVtcGxhdGVfaWQgfSApIH1cblx0XHRcdC8+IH1cblx0XHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVRlbXBsYXRlQ29udHJvbHM7IiwiaW1wb3J0IHRvQnVsayBmcm9tICcuL3RvQnVsayc7XG5pbXBvcnQgZnJvbUJ1bGsgZnJvbSAnLi9mcm9tQnVsayc7XG5pbXBvcnQge1xuXHRIZWxwLFxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRUZXh0YXJlYUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdEZsZXgsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU2NvcGVkQXR0cmlidXRlc0NvbnRleHQsXG5cdFx0ICB1c2VPblVwZGF0ZU1vZGFsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuY29uc3QgU3R5bGVkRmxleCA9IHN0eWxlZCggRmxleCApYFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAwIDAgMTNweCAwO1xuXG5cdC5qZXQtZm9ybS1lZGl0LW1vZGFsICYge1xuXHRcdC5jb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGQgIHtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRib3JkZXItdG9wOiBub25lO1xuXHRcdH1cblx0fVxuYDtcblxuZnVuY3Rpb24gb3B0aW9uc1RvQnVsayggb3B0aW9ucyApIHtcblx0aWYgKCBvcHRpb25zPy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG9wdGlvbnNcblx0XHRcdC5tYXAoIG9wdGlvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhcnRzID0gW107XG5cblx0XHRcdFx0cGFydHMucHVzaCggb3B0aW9uLmxhYmVsIHx8ICcnICk7XG5cdFx0XHRcdHBhcnRzLnB1c2goIG9wdGlvbi52YWx1ZSB8fCAnJyApO1xuXG5cdFx0XHRcdGlmICggb3B0aW9uLmNhbGN1bGF0ZSApIHtcblx0XHRcdFx0XHRwYXJ0cy5wdXNoKCBvcHRpb24uY2FsY3VsYXRlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcGFydHMuam9pbignIDogJyk7XG5cdFx0XHR9IClcblx0XHRcdC5qb2luKCAnXFxuJyApO1xuXHR9XG5cblx0cmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiBCdWxrT3B0aW9ucyggeyBzZXRNb2RhbENvbnRlbnQgfSApIHtcblx0Y29uc3Qge1xuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0c2V0QXR0cmlidXRlcyxcblx0XHRzZXRSZWFsQXR0cmlidXRlcyxcblx0fSA9IHVzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0KCk7XG5cblx0Y29uc3QgWyBidWxrU2VsZWN0LCBzZXRCdWxrU2VsZWN0IF0gICAgICAgICA9IHVzZVN0YXRlKCAnamZiX2N1cnJlbnRfc2VsZWN0JyApO1xuXHRjb25zdCBbIGN1cnJlbnRPcHRpb25zLCBzZXRDdXJyZW50T3B0aW9ucyBdID0gdXNlU3RhdGUoIFtdICk7XG5cblx0Y29uc3Qgb3B0aW9uc0xpc3QgID0gWyB7IGxhYmVsOiAnU2VsZWN0Li4uJywgdmFsdWU6ICdqZmJfY3VycmVudF9zZWxlY3QnIH0gXS5jb25jYXQoIHdpbmRvdy5KZXRGQkJ1bGtPcHRpb25zLmxpc3QgKSB8fCBbXTtcblx0Y29uc3QgYnVsa1NvdXJjZSAgID0gd2luZG93LkpldEZCQnVsa09wdGlvbnMuc291cmNlcztcblxuXHRjb25zdCBbIGJ1bGssIHNldEJ1bGsgXSA9IHVzZVN0YXRlKFxuXHRcdCgpID0+IHRvQnVsayggYXR0cmlidXRlcy5maWVsZF9vcHRpb25zIClcblx0KTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgaWYgKCBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnM/Lmxlbmd0aCApIHtcblx0XHRcdHNldEN1cnJlbnRPcHRpb25zKCBvcHRpb25zVG9CdWxrKCBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMgKSApO1xuXHRcdFx0c2V0QnVsayggdG9CdWxrKCBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMgKSApO1xuICAgICAgICB9XG4gICAgfSwgW10gKTtcblxuXHRjb25zdCByZXBsYWNlT3B0aW9ucyA9ICggdmFsID0gYnVsayApID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRmaWVsZF9vcHRpb25zOiBbXG5cdFx0XHRcdC4uLmZyb21CdWxrKCB2YWwgKSxcblx0XHRcdF0sXG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0c2V0QnVsa1NlbGVjdCggdmFsdWUgKTtcblxuXHRcdGlmICggJ2pmYl9jdXJyZW50X3NlbGVjdCcgPT09IHZhbHVlICkge1xuXHRcdFx0c2V0QnVsayggY3VycmVudE9wdGlvbnMgKTtcblx0XHRcdHJlcGxhY2VPcHRpb25zKCBjdXJyZW50T3B0aW9ucyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBuZXdCdWxrID0gdG9CdWxrKCBidWxrU291cmNlW3ZhbHVlXSApO1xuXHRcdFx0c2V0QnVsayggbmV3QnVsayApO1xuXHRcdFx0cmVwbGFjZU9wdGlvbnMoIG5ld0J1bGsgKTtcblx0XHR9XG5cdH07XG5cblx0dXNlT25VcGRhdGVNb2RhbCggKCkgPT4ge1xuXHRcdFx0c2V0UmVhbEF0dHJpYnV0ZXMoIGF0dHJpYnV0ZXMgKTtcblx0XHRcdHNldE1vZGFsQ29udGVudCggZmFsc2UgKTtcblx0XHR9XG5cdCk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFN0eWxlZEZsZXg+XG5cdFx0XHQ8bGFiZWw+eyBfXyggJ09wdGlvbnMgcHJlc2V0OicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L2xhYmVsPlxuXHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0dmFsdWU9eyBidWxrU2VsZWN0IH1cblx0XHRcdFx0b25DaGFuZ2U9eyBoYW5kbGVTZWxlY3RDaGFuZ2UgfVxuXHRcdFx0XHRvcHRpb25zPXsgb3B0aW9uc0xpc3QgfVxuXHRcdFx0Lz5cblx0XHQ8L1N0eWxlZEZsZXg+XG5cdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWNvbnRyb2wtY2xlYXJcIlxuXHRcdFx0dmFsdWU9eyBidWxrIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCB2YWwgKSA9PiB7XG5cdFx0XHRcdHNldEJ1bGsodG9CdWxrKCB2YWwgKSk7XG5cdFx0XHRcdHJlcGxhY2VPcHRpb25zKCB2YWwgKTtcblx0XHRcdH19XG5cdFx0XHRyb3dzPXsgMTYgfVxuXHRcdC8+XG5cdFx0PEhlbHA+XG5cdFx0XHR7IF9fKFxuXHRcdFx0XHRgWW91IGNhbiBzcGVjaWZ5IGEgZGlmZmVyZW50IHZhbHVlIGFuZCB2YWx1ZSBcbmZvciB0aGUgY2FsY3VsYXRvciBmaWVsZCBieSBzZXBhcmF0aW5nIHRoZW0gd2l0aCBhIGNvbG9uIGNoYXJhY3RlcmAsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgfVxuXHRcdFx0PGJyLz5cblx0XHRcdDxici8+XG5cdFx0XHRCb29rICMxIDogYm9va18xIDogMTAwXG5cdFx0PC9IZWxwPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1bGtPcHRpb25zOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBGcm9tTWFudWFsRmllbGRzQ29udGVudCBmcm9tICcuL0Zyb21NYW51YWxGaWVsZHNDb250ZW50JztcbmltcG9ydCBCdWxrT3B0aW9ucyBmcm9tICcuL0J1bGtPcHRpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBBY3Rpb25Nb2RhbCxcblx0ICAgICAgU2NvcGVkQXR0cmlidXRlc1Byb3ZpZGVyLFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICBCdXR0b24sXG5cdCAgICAgIEZsZXgsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBzaG93QnVsa0ljb24gPSA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0PHBhdGhcblx0XHRkPVwiTTExIDdIMTdWOUgxMVY3Wk0xMSAxMUgxN1YxM0gxMVYxMVpNMTEgMTVIMTdWMTdIMTFWMTVaTTcgN0g5VjlIN1Y3Wk03IDExSDlWMTNIN1YxMVpNNyAxNUg5VjE3SDdWMTVaTTIwLjEgM0gzLjlDMy40IDMgMyAzLjQgMyAzLjlWMjAuMUMzIDIwLjUgMy40IDIxIDMuOSAyMUgyMC4xQzIwLjUgMjEgMjEgMjAuNSAyMSAyMC4xVjMuOUMyMSAzLjQgMjAuNSAzIDIwLjEgM1pNMTkgMTlINVY1SDE5VjE5WlwiXG5cdFx0ZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbjwvc3ZnPjtcblxuY29uc3QgaGlkZUJ1bGtJY29uID0gPHN2Z1xuXHR3aWR0aD1cIjI0XCJcblx0aGVpZ2h0PVwiMjRcIlxuXHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0ZmlsbD1cIm5vbmVcIlxuXHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0PlxuXHQ8cGF0aFxuXHRcdGQ9XCJNMyAxNy4yNVYyMUg2Ljc1TDE3LjgxIDkuOTRMMTQuMDYgNi4xOUwzIDE3LjI1Wk0yMC43MSA3LjA0QzIxLjEgNi42NSAyMS4xIDYuMDIgMjAuNzEgNS42M0wxOC4zNyAzLjI5QzE3Ljk4IDIuOSAxNy4zNSAyLjkgMTYuOTYgMy4yOUwxNS4xMyA1LjEyTDE4Ljg4IDguODdMMjAuNzEgNy4wNFpcIlxuXHRcdGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHQvPlxuPC9zdmc+O1xuXG5mdW5jdGlvbiBGcm9tTWFudWFsRmllbGRzKCkge1xuXG5cdGNvbnN0IFsgc2hvd01hbnVhbE1vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIG1vZGFsQ29udGVudCwgc2V0TW9kYWxDb250ZW50IF0gPSB1c2VTdGF0ZSggJycgKTtcblxuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRTaG93TW9kYWwoIHRvZ2dsZSA9PiAhdG9nZ2xlICk7XG5cdH07XG5cblx0cmV0dXJuIDw+XG5cdFx0PEJ1dHRvblxuXHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdG9uQ2xpY2s9eyB0b2dnbGVNb2RhbCB9XG5cdFx0XHRpY29uPVwiYWRtaW4tdG9vbHNcIlxuXHRcdD5cblx0XHRcdHsgX18oICdNYW5hZ2UgaXRlbXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0PC9CdXR0b24+XG5cdFx0eyBzaG93TWFudWFsTW9kYWwgJiYgPEFjdGlvbk1vZGFsXG5cdFx0XHR0aXRsZT17IDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG5cdFx0XHRcdHsgX18oICdFZGl0IE9wdGlvbnMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXtcblx0XHRcdFx0XHRcdCgpID0+IHNldE1vZGFsQ29udGVudCggcHJldiA9PiBwcmV2ID8gJycgOiAnYnVsaycgKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpY29uPXsgbW9kYWxDb250ZW50ID8gaGlkZUJ1bGtJY29uIDogc2hvd0J1bGtJY29uIH1cblx0XHRcdFx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBtb2RhbENvbnRlbnRcblx0XHRcdFx0XHQgID8gX18oICdTd2l0Y2ggdG8gbWFudWFsIGVkaXRvcicsICdqZXQtZm9ybS1idWlsZGVyJyApXG5cdFx0XHRcdFx0ICA6IF9fKCAnU3dpdGNoIHRvIGJ1bGsgZWRpdG9yJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvRmxleD4gfVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyB0b2dnbGVNb2RhbCB9XG5cdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxuXHRcdD5cblx0XHRcdDxTY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXI+XG5cdFx0XHRcdHsgJ2J1bGsnID09PSBtb2RhbENvbnRlbnRcblx0XHRcdFx0ICA/IDxCdWxrT3B0aW9ucyBzZXRNb2RhbENvbnRlbnQ9eyBzZXRNb2RhbENvbnRlbnQgfS8+XG5cdFx0XHRcdCAgOiA8RnJvbU1hbnVhbEZpZWxkc0NvbnRlbnQvPiB9XG5cdFx0XHQ8L1Njb3BlZEF0dHJpYnV0ZXNQcm92aWRlcj5cblx0XHQ8L0FjdGlvbk1vZGFsPiB9XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbU1hbnVhbEZpZWxkczsiLCJpbXBvcnQgRnJvbU1hbnVhbE9wdGlvbnNDb250ZXh0UHJvdmlkZXJcblx0ZnJvbSAnLi9Gcm9tTWFudWFsT3B0aW9uc0NvbnRleHRQcm92aWRlcic7XG5pbXBvcnQgRnJvbU1hbnVhbE9wdGlvbkl0ZW0gZnJvbSAnLi9Gcm9tTWFudWFsT3B0aW9uSXRlbSc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHQgICAgICBSZXBlYXRlcixcblx0ICAgICAgUmVwZWF0ZXJBZGROZXcsXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVNjb3BlZEF0dHJpYnV0ZXNDb250ZXh0LFxuXHQgICAgICB1c2VPblVwZGF0ZU1vZGFsLFxuICAgICAgfSA9IEpldEZCSG9va3M7XG5cbmZ1bmN0aW9uIEZyb21NYW51YWxGaWVsZHNDb250ZW50KCkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldFJlYWxBdHRyaWJ1dGVzLFxuXHQgICAgICB9ID0gdXNlU2NvcGVkQXR0cmlidXRlc0NvbnRleHQoKTtcblxuXHRjb25zdCB1cGRhdGVPcHRpb25zID0gb3B0aW9ucyA9PiB7XG5cdFx0Y29uc3QgZmllbGRfb3B0aW9ucyA9ICdmdW5jdGlvbicgPT09IHR5cGVvZiBvcHRpb25zXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgID8gb3B0aW9ucyggYXR0cmlidXRlcy5maWVsZF9vcHRpb25zIClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgOiBvcHRpb25zO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggcHJldiA9PiAoXG5cdFx0XHR7XG5cdFx0XHRcdC4uLnByZXYsIGZpZWxkX29wdGlvbnMsXG5cdFx0XHR9XG5cdFx0KSApO1xuXHR9O1xuXG5cdHVzZU9uVXBkYXRlTW9kYWwoICgpID0+IHNldFJlYWxBdHRyaWJ1dGVzKCBhdHRyaWJ1dGVzICkgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8RnJvbU1hbnVhbE9wdGlvbnNDb250ZXh0UHJvdmlkZXI+XG5cdFx0XHQ8UmVwZWF0ZXJcblx0XHRcdFx0aXRlbXM9eyBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMgPz8gW10gfVxuXHRcdFx0XHRvblNldFN0YXRlPXsgdXBkYXRlT3B0aW9ucyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxGcm9tTWFudWFsT3B0aW9uSXRlbS8+XG5cdFx0XHQ8L1JlcGVhdGVyPlxuXHRcdDwvRnJvbU1hbnVhbE9wdGlvbnNDb250ZXh0UHJvdmlkZXI+XG5cdFx0PFJlcGVhdGVyQWRkTmV3IG9uU2V0U3RhdGU9eyB1cGRhdGVPcHRpb25zIH0+XG5cdFx0XHR7IF9fKCAnQWRkIG5ldyBPcHRpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0PC9SZXBlYXRlckFkZE5ldz5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9tTWFudWFsRmllbGRzQ29udGVudDsiLCJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbGluYXJpYS9yZWFjdCc7XG5cbmNvbnN0IHtcblx0dXNlQ29udGV4dCxcbn0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7XG5cdF9fLFxufSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0UmVwZWF0ZXJJdGVtQ29udGV4dCxcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IE5vQm9yZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdC5qZXQtZm9ybS1lZGl0LW1vZGFsICYgLmNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZCB7XG5cdFx0Ym9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcblx0XHRwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuXHR9XG5gO1xuXG5mdW5jdGlvbiBGcm9tTWFudWFsT3B0aW9uSXRlbSgpIHtcblx0Y29uc3Qge1xuXHRcdGN1cnJlbnRJdGVtLFxuXHRcdGNoYW5nZUN1cnJlbnRJdGVtLFxuXHR9ID0gdXNlQ29udGV4dCggUmVwZWF0ZXJJdGVtQ29udGV4dCApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyBfXyggJ0xhYmVsJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5sYWJlbCB9XG5cdFx0XHRvbkNoYW5nZT17IGxhYmVsID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IGxhYmVsIH0gKSB9XG5cdFx0Lz5cblxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyBfXyggJ1ZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XG5cdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHtcblx0XHRcdFx0aWYgKCBjdXJyZW50SXRlbS5rZWVwX2NvbW1hcyAmJiAhU3RyaW5nKCB2YWx1ZSApLmluY2x1ZGVzKCcsJykgKSB7XG5cdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHtcblx0XHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdFx0a2VlcF9jb21tYXM6IGZhbHNlLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWUgfSApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblxuXHRcdHsgY3VycmVudEl0ZW0udmFsdWUgJiYgY3VycmVudEl0ZW0udmFsdWUuaW5jbHVkZXMoICcsJyApICYmIChcblx0XHRcdDxOb0JvcmRlcldyYXBwZXI+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NhdmUgYXMgc2luZ2xlIHZhbHVlIChpZ25vcmUgY29tbWFzKScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdFx0XHQnQnkgZGVmYXVsdCwgdmFsdWVzIGNvbnRhaW5pbmcgY29tbWFzIGFyZSBzcGxpdCBpbnRvIG11bHRpcGxlIG9wdGlvbnMuIEVuYWJsZSB0aGlzIHRvIHNhdmUgdGhlIHZhbHVlIGFzIGEgc2luZ2xlIHN0cmluZywgaW5jbHVkaW5nIGNvbW1hcy4nLFxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17ICEhIGN1cnJlbnRJdGVtLmtlZXBfY29tbWFzIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IGtlZXBfY29tbWFzID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IGtlZXBfY29tbWFzIH0gKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L05vQm9yZGVyV3JhcHBlcj5cblx0XHQpIH1cblxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uY2FsY3VsYXRlIH1cblx0XHRcdG9uQ2hhbmdlPXsgY2FsY3VsYXRlID0+IGNoYW5nZUN1cnJlbnRJdGVtKCB7IGNhbGN1bGF0ZSB9ICkgfVxuXHRcdC8+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbU1hbnVhbE9wdGlvbkl0ZW07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgICAgUmVwZWF0ZXJIZWFkQ29udGV4dCxcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IGl0ZW1IZWFkaW5nID0gKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICkgPT4ge1xuXHRjb25zdCBsZWZ0UGFydCAgPSBbIGAjJHsgaW5kZXggKyAxIH1gIF07XG5cdGNvbnN0IHJpZ2h0UGFydCA9IFtdO1xuXG5cdGlmICggY3VycmVudEl0ZW0ubGFiZWwgKSB7XG5cdFx0cmlnaHRQYXJ0LnB1c2goIGBMYWJlbCBbJHsgY3VycmVudEl0ZW0ubGFiZWwgfV1gICk7XG5cdH1cblx0aWYgKCBjdXJyZW50SXRlbS52YWx1ZSApIHtcblx0XHRyaWdodFBhcnQucHVzaCggYFZhbHVlIFskeyBjdXJyZW50SXRlbS52YWx1ZSB9XWAgKTtcblx0fVxuXHRpZiAoIGN1cnJlbnRJdGVtLmNhbGN1bGF0ZSApIHtcblx0XHRyaWdodFBhcnQucHVzaCggYENhbGN1bGF0ZSBbJHsgY3VycmVudEl0ZW0uY2FsY3VsYXRlIH1dYCApO1xuXHR9XG5cdGxlZnRQYXJ0LnB1c2goIHJpZ2h0UGFydC5qb2luKCAnIHwgJyApICk7XG5cblx0cmV0dXJuIGxlZnRQYXJ0LmpvaW4oICcgJyApO1xufTtcblxuZnVuY3Rpb24gRnJvbU1hbnVhbE9wdGlvbnNDb250ZXh0UHJvdmlkZXIoIHsgY2hpbGRyZW4gfSApIHtcblx0cmV0dXJuIDxSZXBlYXRlckhlYWRDb250ZXh0LlByb3ZpZGVyXG5cdFx0dmFsdWU9eyB7XG5cdFx0XHRpc1N1cHBvcnRlZDogKCkgPT4gdHJ1ZSxcblx0XHRcdHJlbmRlcjogKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICkgPT4gPHNwYW5cblx0XHRcdFx0Y2xhc3NOYW1lPVwicmVwZWF0ZXItaXRlbS10aXRsZVwiPnsgaXRlbUhlYWRpbmcoIHtcblx0XHRcdFx0Y3VycmVudEl0ZW0sIGluZGV4LFxuXHRcdFx0fSApIH1cblx0XHRcdDwvc3Bhbj4sXG5cdFx0fSB9XG5cdD5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9SZXBlYXRlckhlYWRDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbU1hbnVhbE9wdGlvbnNDb250ZXh0UHJvdmlkZXI7IiwiLyoqXG4gKiBAcGFyYW0gc291cmNlIHtTdHJpbmd9XG4gKiBAcmV0dXJucyB7T2JqZWN0W119XG4gKi9cbmZ1bmN0aW9uIGZyb21CdWxrKCBzb3VyY2UgKSB7XG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiBzb3VyY2UgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cdGxldCByb3dzID0gc291cmNlLnRyaW0oKS5zcGxpdCggJ1xcbicgKTtcblxuXHRyZXR1cm4gcm93cy5tYXAoIGZyb21CdWxrUm93ICkuZmlsdGVyKCBCb29sZWFuICk7XG59XG5cbmZ1bmN0aW9uIGZyb21CdWxrUm93KCBzb3VyY2UgKSB7XG5cdGlmICggIXNvdXJjZS50cmltKCkgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblx0Y29uc3QgcGFydHMgPSBzb3VyY2Uuc3BsaXQoICc6JyApO1xuXG5cdGlmICggIXBhcnRzLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRsZXQgWyBsYWJlbCwgdmFsdWUsIGNhbGN1bGF0ZSBdID0gcGFydHM7XG5cblx0bGFiZWwgPSBsYWJlbC50cmltKCk7XG5cblx0aWYgKCAxID09PSBwYXJ0cy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH07XG5cdH1cblxuXHR2YWx1ZSAgICAgPSAnZnVuY3Rpb24nID09PSB0eXBlb2YgdmFsdWU/LnRyaW1cblx0ICAgICAgICAgICAgPyB2YWx1ZS50cmltKClcblx0ICAgICAgICAgICAgOiBmYWxzZTtcblx0Y2FsY3VsYXRlID0gJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNhbGN1bGF0ZT8udHJpbVxuXHQgICAgICAgICAgICA/IGNhbGN1bGF0ZS50cmltKClcblx0ICAgICAgICAgICAgOiBmYWxzZTtcblxuXHRjb25zdCByb3cgPSB7fTtcblxuXHRpZiAoIGxhYmVsICkge1xuXHRcdHJvdy5sYWJlbCA9IGxhYmVsO1xuXHR9XG5cblx0aWYgKCB2YWx1ZSApIHtcblx0XHRyb3cudmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGlmICggY2FsY3VsYXRlICkge1xuXHRcdHJvdy5jYWxjdWxhdGUgPSBjYWxjdWxhdGU7XG5cdH1cblxuXHRyZXR1cm4gcm93O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmcm9tQnVsaztcblxuIiwiY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3QgSlNPTl9QUk9QRVJUSUVTID0gWyAnbGFiZWwnLCAndmFsdWUnLCAnY2FsY3VsYXRlJyBdO1xuXG5mdW5jdGlvbiB0b0J1bGsoIHNvdXJjZSApIHtcblx0aWYgKCBpc0VtcHR5KCBzb3VyY2UgKSB8fCAoIHR5cGVvZiAnc3RyaW5nJyA9PT0gc291cmNlICYmICFzb3VyY2UudHJpbSgpICkgKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cblx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHNvdXJjZSApIHtcblx0XHRyZXR1cm4gYXJyYXlUb0J1bGsoIHNvdXJjZSApO1xuXHR9XG5cblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIHNvdXJjZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAoICFbICdbJywgJ3snIF0uaW5jbHVkZXMoIHNvdXJjZVsgMCBdICkgKSB7XG5cdFx0cmV0dXJuIHNvdXJjZTtcblx0fVxuXG5cdGxldCBqc29uQnVsaztcblxuXHR0cnkge1xuXHRcdGpzb25CdWxrID0gSlNPTi5wYXJzZSggc291cmNlICk7XG5cdH1cblx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRyZXR1cm4gc291cmNlO1xuXHR9XG5cblx0cmV0dXJuIGFycmF5VG9CdWxrKCBqc29uQnVsayApO1xufVxuXG5mdW5jdGlvbiBhcnJheVRvQnVsayggc291cmNlICkge1xuXHRjb25zdCByb3dzID0gW107XG5cblx0aWYgKCAhQXJyYXkuaXNBcnJheSggc291cmNlICkgKSB7XG5cdFx0cmV0dXJuIG9iamVjdFRvQnVsayggc291cmNlICk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCB2YWxJdGVtIG9mIHNvdXJjZSApIHtcblx0XHRyb3dzLnB1c2goIG9iamVjdFRvQnVsayggdmFsSXRlbSApICk7XG5cdH1cblxuXHRyZXR1cm4gcm93cy5qb2luKCAnXFxuJyApO1xufVxuXG5mdW5jdGlvbiBvYmplY3RUb0J1bGsoIHNvdXJjZSApIHtcblx0aWYgKCAnb2JqZWN0JyAhPT0gdHlwZW9mIHNvdXJjZSApIHtcblx0XHRyZXR1cm4gWyAnbnVtYmVyJywgJ3N0cmluZycgXS5pbmNsdWRlcyhcblx0XHRcdHR5cGVvZiBzb3VyY2UsXG5cdFx0KSA/IHNvdXJjZSA6ICcnO1xuXHR9XG5cdGNvbnN0IHJvdyA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IHByb3BlcnR5IG9mIEpTT05fUFJPUEVSVElFUyApIHtcblx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2Ygc291cmNlWyBwcm9wZXJ0eSBdICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmICggIVsgJ251bWJlcicsICdzdHJpbmcnIF0uaW5jbHVkZXMoXG5cdFx0XHR0eXBlb2Ygc291cmNlWyBwcm9wZXJ0eSBdLFxuXHRcdCkgKSB7XG5cdFx0XHRyb3cucHVzaCggMCApO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cm93LnB1c2goIHNvdXJjZVsgcHJvcGVydHkgXSApO1xuXHR9XG5cblx0cmV0dXJuIHJvdy5qb2luKCAnIDogJyApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0J1bGs7IiwiaW1wb3J0IHsgZ2V0U2VsZWN0U291cmNlIH0gZnJvbSBcIi4vc291cmNlc1wiO1xuXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEZyb21Qb3N0VGVybXNGaWVsZHMoIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0ZWRpdFByb3BzOiB7IGF0dHJIZWxwIH1cblx0fSA9IHByb3BzO1xuXG5cdHJldHVybiA8PlxuXHRcdHsgZ2V0U2VsZWN0U291cmNlKCBwcm9wcyApIH1cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGtleT0ndmFsdWVfZnJvbV9rZXknXG5cdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUgZnJvbSBtZXRhIGZpZWxkJyApIH1cblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52YWx1ZV9mcm9tX2tleSB9XG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICd2YWx1ZV9mcm9tX21ldGEnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHZhbHVlX2Zyb21fa2V5OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0a2V5PSdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5J1xuXHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZWQgdmFsdWUgZnJvbSBtZXRhIGZpZWxkJyApIH1cblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5IH1cblx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2NhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXknICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXk6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdDwvPjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9tUG9zdFRlcm1zRmllbGRzOyIsImltcG9ydCB7IGxpc3RGcm9tIH0gZnJvbSAnLi9zb3VyY2VzJztcbmltcG9ydCBGcm9tTWFudWFsRmllbGRzIGZyb20gJy4vRnJvbU1hbnVhbC9Gcm9tTWFudWFsRmllbGRzJztcbmltcG9ydCBGcm9tUG9zdFRlcm1zRmllbGRzIGZyb20gJy4vRnJvbVBvc3RUZXJtc0ZpZWxkcyc7XG4vLyBVc2UgbmV3IEdlbmVyYXRvclNldHRpbmdzIGNvbXBvbmVudCB3aXRoIHNjaGVtYSBzdXBwb3J0XG5pbXBvcnQgeyBHZW5lcmF0b3JTZXR0aW5ncyB9IGZyb20gJy4uL2dlbmVyYXRvcnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIFRleHRDb250cm9sLFxuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgamV0RW5naW5lVmVyc2lvbiB9ID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhO1xuY29uc3QgeyBhcHBseUZpbHRlcnMgfSAgICAgPSB3cC5ob29rcztcblxuY29uc3QgY2FuUmVuZGVyR2xvc3NhcmllcyA9ICcnICE9PSBqZXRFbmdpbmVWZXJzaW9uO1xuXG5mdW5jdGlvbiBnZXRGaWVsZE9wdGlvbnNGb3JtKCBvcHRpb25zRnJvbSwgcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRzd2l0Y2ggKCBvcHRpb25zRnJvbSApIHtcblx0XHRjYXNlICdtYW51YWxfaW5wdXQnOlxuXHRcdFx0cmV0dXJuIDxGcm9tTWFudWFsRmllbGRzIGtleT1cImZyb21fbWFudWFsXCIvPjtcblx0XHRjYXNlICdwb3N0cyc6XG5cdFx0Y2FzZSAndGVybXMnOlxuXHRcdFx0cmV0dXJuIDxGcm9tUG9zdFRlcm1zRmllbGRzXG5cdFx0XHRcdGtleT1cImZvcm1fcG9zdHNfdGVybXNcIlxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+O1xuXHRcdGNhc2UgJ21ldGFfZmllbGQnOlxuXHRcdFx0cmV0dXJuIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRrZXk9XCJmaWVsZF9vcHRpb25zX2tleVwiXG5cdFx0XHRcdGxhYmVsPVwiTWV0YSBmaWVsZCB0byBnZXQgdmFsdWUgZnJvbVwiXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZF9vcHRpb25zX2tleSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkX29wdGlvbnNfa2V5OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz47XG5cdFx0Y2FzZSAnZ2VuZXJhdGUnOlxuXHRcdFx0cmV0dXJuIDxHZW5lcmF0b3JTZXR0aW5nc1xuXHRcdFx0XHRrZXk9XCJmb3JtX2dlbmVyYXRvcnNcIlxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+O1xuXHRcdGNhc2UgJ2dsb3NzYXJ5Jzpcblx0XHRcdHJldHVybiBjYW5SZW5kZXJHbG9zc2FyaWVzICYmIDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGtleT1cInNlbGVjdF9nbG9zc2FyeVwiXG5cdFx0XHRcdGxhYmVsPVwiU2VsZWN0IEdsb3NzYXJ5XCJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInRvcFwiXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nbG9zc2FyeV9pZCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgZ2xvc3NhcnlfaWQgPT4gc2V0QXR0cmlidXRlcyggeyBnbG9zc2FyeV9pZCB9ICkgfVxuXHRcdFx0XHRvcHRpb25zPXsgW1xuXHRcdFx0XHRcdHsgdmFsdWU6ICcnLCBsYWJlbDogJy0tJyB9LFxuXHRcdFx0XHRcdC4uLndpbmRvdy5KZXRGb3JtT3B0aW9uRmllbGREYXRhLmdsb3NzYXJpZXNfbGlzdCxcblx0XHRcdFx0XSB9XG5cdFx0XHQvPjtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGFwcGx5RmlsdGVycyggJ2pldC5mYi5zZWxlY3QucmFkaW8uY2hlY2suY29udHJvbHMnLCBudWxsLFxuXHRcdFx0XHRvcHRpb25zRnJvbSwgcHJvcHMgKTtcblxuXHR9XG59XG5cbmZ1bmN0aW9uIFNlbGVjdFJhZGlvQ2hlY2soIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgaXNTZWxlY3RlZCxcblx0XHQgICAgICBjaGlsZHJlbiA9IFtdLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgeyBmaWVsZF9vcHRpb25zX2Zyb20gfSA9IGF0dHJpYnV0ZXM7XG5cblx0cmV0dXJuIGlzU2VsZWN0ZWQgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnNpZGUtYmxvY2stb3B0aW9uc1wiPlxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9XCJmaWVsZF9vcHRpb25zX2Zyb21cIlxuXHRcdFx0bGFiZWw9XCJGaWxsIE9wdGlvbnMgRnJvbVwiXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwidG9wXCJcblx0XHRcdHZhbHVlPXsgZmllbGRfb3B0aW9uc19mcm9tIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF9vcHRpb25zX2Zyb206IG5ld1ZhbHVlIH0gKTtcblx0XHRcdH0gfVxuXHRcdFx0b3B0aW9ucz17IGxpc3RGcm9tIH1cblx0XHQvPlxuXHRcdHsgZ2V0RmllbGRPcHRpb25zRm9ybSggZmllbGRfb3B0aW9uc19mcm9tLCBwcm9wcyApIH1cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RSYWRpb0NoZWNrOyIsImltcG9ydCB7IGxpc3RGcm9tIH0gZnJvbSAnLi9zb3VyY2VzJztcblxuY29uc3Qge1xuXHQgICAgICBGaWVsZFdyYXBwZXIsXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIENoZWNrYm94Q29udHJvbCxcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcblx0ICAgICAgUmFkaW9Db250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IERFTElNSVRFUiA9ICcgLSAnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgZWRpdFByb3BzOiB7IGJsb2NrTmFtZSwgdW5pcUtleSB9LFxuXHRcdCAgICAgIHNjcmlwdERhdGEsXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGdldENoZWNrYm94ID0gKCBsYWJlbCwgaW5kZXggPSAxICkgPT4ge1xuXHRcdHJldHVybiA8Q2hlY2tib3hDb250cm9sXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCBjaGVja2JveGVzLXdyYXAnIH1cblx0XHRcdGtleT17IGBjaGVja19wbGFjZV9ob2xkZXJfYmxvY2tfJHsgbGFiZWwgKyBpbmRleCB9YCB9XG5cdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xuXHRcdFx0fSB9XG5cdFx0Lz47XG5cdH07XG5cblx0Y29uc3QgZ2V0U2VsZWN0ID0gKCB7IG9wdGlvbnMsIGluZGV4IH0gKSA9PiB7XG5cdFx0cmV0dXJuIDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9eyBgc2VsZWN0X3BsYWNlX2hvbGRlcl9ibG9ja18keyBhdHRyaWJ1dGVzLm5hbWUgKyBpbmRleCB9YCB9XG5cdFx0XHQvL2xhYmVsPXsgYXR0cmlidXRlcy5sYWJlbCB9XG5cdFx0XHRvcHRpb25zPXsgb3B0aW9ucyB9XG5cdFx0XHQvL2hlbHA9eyBhdHRyaWJ1dGVzLmRlc2MgfVxuXHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHR9IH1cblx0XHQvPjtcblx0fTtcblxuXHRjb25zdCBnZXRSYWRpbyA9ICggeyBvcHRpb25zLCBsYWJlbCwgaW5kZXggfSApID0+IHtcblx0XHRyZXR1cm4gPFJhZGlvQ29udHJvbFxuXHRcdFx0a2V5PXsgYHJhZGlvX3BsYWNlX2hvbGRlcl9ibG9ja18keyBsYWJlbCArIGluZGV4IH1gIH1cblx0XHRcdC8vbGFiZWw9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cblx0XHRcdG9wdGlvbnM9eyBvcHRpb25zIH1cblx0XHRcdC8vaGVscD17IGF0dHJpYnV0ZXMuZGVzYyB9XG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcblx0XHRcdH0gfVxuXHRcdC8+O1xuXHR9O1xuXG5cdGNvbnN0IGdldFByb3AgPSAoIG9mLCBwcm9wTmFtZSwgaWZFbXB0eSA9ICcnICkgPT4ge1xuXHRcdGlmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBvZiAmJiAndW5kZWZpbmVkJyAhPT1cblx0XHRcdHR5cGVvZiBvZlsgcHJvcE5hbWUgXSApIHtcblx0XHRcdHJldHVybiBvZlsgcHJvcE5hbWUgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaWZFbXB0eTtcblx0fTtcblxuXHRjb25zdCBnZXRMYWJlbFByb3AgPSBvZiA9PiB7XG5cdFx0cmV0dXJuIGdldFByb3AoIG9mLCAnbGFiZWwnICk7XG5cdH07XG5cblx0Y29uc3QgZ2V0RnVsbExhYmVsID0gKCkgPT4ge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0ICAgICAgZmllbGRfb3B0aW9uc19mcm9tLFxuXHRcdFx0ICAgICAgZmllbGRfb3B0aW9uc19wb3N0X3R5cGUsXG5cdFx0XHQgICAgICBmaWVsZF9vcHRpb25zX3RheCxcblx0XHRcdCAgICAgIGZpZWxkX29wdGlvbnNfa2V5LFxuXHRcdFx0ICAgICAgZ2VuZXJhdG9yX2Z1bmN0aW9uLFxuXHRcdFx0ICAgICAgZ2VuZXJhdG9yX2F1dG9fdXBkYXRlLFxuXHRcdFx0ICAgICAgZ2VuZXJhdG9yX2xpc3Rlbl9maWVsZCxcblx0XHQgICAgICB9ID0gYXR0cmlidXRlcztcblxuXHRcdGNvbnN0IG9wdGlvbkZpZWxkRGF0YSA9IHdpbmRvdy5KZXRGb3JtT3B0aW9uRmllbGREYXRhID8/IHNjcmlwdERhdGEgPz8ge307XG5cblx0XHRsZXQgZnVsbF9sYWJlbCA9IFtdO1xuXHRcdGxldCB2YWx1ZSAgICAgID0gW107XG5cdFx0c3dpdGNoICggZmllbGRfb3B0aW9uc19mcm9tICkge1xuXHRcdFx0Y2FzZSAncG9zdHMnOlxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfcG9zdF90eXBlICkge1xuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdldExhYmVsUHJvcCggKCBvcHRpb25GaWVsZERhdGEucG9zdF90eXBlc19saXN0ID8/IFtdICkuZmluZChcblx0XHRcdFx0XHRcdG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGZpZWxkX29wdGlvbnNfcG9zdF90eXBlLFxuXHRcdFx0XHRcdCkgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXJtcyc6XG5cdFx0XHRcdGlmICggZmllbGRfb3B0aW9uc190YXggKSB7XG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2V0TGFiZWxQcm9wKCAoIG9wdGlvbkZpZWxkRGF0YS50YXhvbm9taWVzX2xpc3QgPz8gW10gKS5maW5kKFxuXHRcdFx0XHRcdFx0b3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZmllbGRfb3B0aW9uc190YXgsXG5cdFx0XHRcdFx0KSApICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ21ldGFfZmllbGQnOlxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfa2V5ICkge1xuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGZpZWxkX29wdGlvbnNfa2V5ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2dlbmVyYXRlJzpcblx0XHRcdFx0aWYgKCBnZW5lcmF0b3JfZnVuY3Rpb24gKSB7XG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2V0TGFiZWxQcm9wKCAoIG9wdGlvbkZpZWxkRGF0YS5nZW5lcmF0b3JzX2xpc3QgPz8gW10gKS5maW5kKFxuXHRcdFx0XHRcdFx0b3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZ2VuZXJhdG9yX2Z1bmN0aW9uLFxuXHRcdFx0XHRcdCkgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZ2VuZXJhdG9yX2F1dG9fdXBkYXRlICYmIGdlbmVyYXRvcl9saXN0ZW5fZmllbGQgKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGlzdGVuRmllbGRzID0gQXJyYXkuaXNBcnJheSggZ2VuZXJhdG9yX2xpc3Rlbl9maWVsZCApXG5cdFx0XHRcdFx0XHQ/IGdlbmVyYXRvcl9saXN0ZW5fZmllbGRcblx0XHRcdFx0XHRcdDogWyBnZW5lcmF0b3JfbGlzdGVuX2ZpZWxkIF07XG5cdFx0XHRcdFx0aWYgKCBsaXN0ZW5GaWVsZHMubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0dmFsdWUucHVzaCggYOKGuyAkeyBsaXN0ZW5GaWVsZHMuam9pbiggJywgJyApIH1gICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXHRcdGZ1bGxfbGFiZWwucHVzaCggZ2V0TGFiZWxQcm9wKFxuXHRcdFx0bGlzdEZyb20uZmluZCggb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZmllbGRfb3B0aW9uc19mcm9tICkgKSApO1xuXG5cdFx0aWYgKCB2YWx1ZS5sZW5ndGggKSB7XG5cdFx0XHRmdWxsX2xhYmVsLnB1c2goIHZhbHVlLmpvaW4oIERFTElNSVRFUiApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZ1bGxfbGFiZWwuam9pbiggREVMSU1JVEVSICk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TWFudWFsRmllbGQgPSAoIGxhYmVsID0gJycgKSA9PiB7XG5cdFx0aWYgKCBibG9ja05hbWUuaW5jbHVkZXMoICdjaGVja2JveCcgKSApIHtcblx0XHRcdGlmICggbGFiZWwgKSB7XG5cdFx0XHRcdHJldHVybiBnZXRDaGVja2JveCggbGFiZWwgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubWFwKFxuXHRcdFx0XHQoIHsgbGFiZWw6IGNoZWNrTGFiZWwgfSwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGdldENoZWNrYm94KCBjaGVja0xhYmVsLCBpbmRleCApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGJsb2NrTmFtZS5pbmNsdWRlcyggJ3NlbGVjdCcgKSApIHtcblx0XHRcdGlmICggbGFiZWwgKSB7XG5cdFx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdG9wdGlvbnM6IFsgeyBsYWJlbCB9IF0sXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcblx0XHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdFx0b3B0aW9uczogYXR0cmlidXRlcy5maWVsZF9vcHRpb25zLFxuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRlbHNlIGlmICggYmxvY2tOYW1lLmluY2x1ZGVzKCAncmFkaW8nICkgKSB7XG5cdFx0XHRpZiAoIGxhYmVsICkge1xuXHRcdFx0XHRyZXR1cm4gZ2V0UmFkaW8oIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdG9wdGlvbnM6IFsgeyBsYWJlbCB9IF0sXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBnZXRSYWRpbygge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHRvcHRpb25zOiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiA8RmllbGRXcmFwcGVyXG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItZmllbGQtd3JhcHBlcicgfVxuXHRcdHsgLi4ucHJvcHMgfVxuXHQ+XG5cdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGRzLWdyb3VwIGpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXByZXZpZXcnIH0+XG5cdFx0XHR7IChcblx0XHRcdFx0J21hbnVhbF9pbnB1dCcgIT09IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc19mcm9tIHx8XG5cdFx0XHRcdCFhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubGVuZ3RoXG5cdFx0XHQpICYmXG5cdFx0XHRnZXRNYW51YWxGaWVsZCggZ2V0RnVsbExhYmVsKCkgKSB8fCBudWxsXG5cdFx0XHR9XG5cdFx0XHR7ICdtYW51YWxfaW5wdXQnID09PSBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfZnJvbSAmJlxuXHRcdFx0YXR0cmlidXRlcy5maWVsZF9vcHRpb25zLmxlbmd0aCAmJlxuXHRcdFx0Z2V0TWFudWFsRmllbGQoKSB8fCBudWxsXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdDwvRmllbGRXcmFwcGVyPjtcblxufVxuXG5cbiIsImNvbnN0IHsgX18gfSAgICAgICA9IHdwLmkxOG47XG5jb25zdCBsb2NhbGl6ZURhdGEgPSB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YTtcblxuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgamV0RW5naW5lVmVyc2lvbiB9ID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhO1xuXG5jb25zdCBsaXN0RnJvbSA9IFtcblx0e1xuXHRcdCd2YWx1ZSc6ICdtYW51YWxfaW5wdXQnLFxuXHRcdCdsYWJlbCc6IF9fKCAnTWFudWFsIElucHV0JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5cdHtcblx0XHQndmFsdWUnOiAncG9zdHMnLFxuXHRcdCdsYWJlbCc6IF9fKCAnUG9zdHMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0fSxcblx0e1xuXHRcdCd2YWx1ZSc6ICd0ZXJtcycsXG5cdFx0J2xhYmVsJzogX18oICdUZXJtcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR9LFxuXHR7XG5cdFx0J3ZhbHVlJzogJ21ldGFfZmllbGQnLFxuXHRcdCdsYWJlbCc6IF9fKCAnTWV0YSBGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR9LFxuXHR7XG5cdFx0J3ZhbHVlJzogJ2dlbmVyYXRlJyxcblx0XHQnbGFiZWwnOiBfXyggJ0dlbmVyYXRlIER5bmFtaWNhbGx5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5dO1xuXG5pZiAoICcnICE9PSBqZXRFbmdpbmVWZXJzaW9uICkge1xuXHRsaXN0RnJvbS5wdXNoKCB7XG5cdFx0J3ZhbHVlJzogJ2dsb3NzYXJ5Jyxcblx0XHQnbGFiZWwnOiBfXyggJ0dsb3NzYXJ5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0gKTtcbn1cblxuY29uc3Qgc291cmNlcyA9IHtcblx0dGVybXM6IHtcblx0XHRsYWJlbDogX18oICdUYXhvbm9teScgKSxcblx0XHRhdHRyOiAnZmllbGRfb3B0aW9uc190YXgnLFxuXHRcdG9wdGlvbnM6IGxvY2FsaXplRGF0YS50YXhvbm9taWVzX2xpc3QsXG5cdH0sXG5cdHBvc3RzOiB7XG5cdFx0bGFiZWw6IF9fKCAnUG9zdCBUeXBlJyApLFxuXHRcdGF0dHI6ICdmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZScsXG5cdFx0b3B0aW9uczogbG9jYWxpemVEYXRhLnBvc3RfdHlwZXNfbGlzdCxcblx0fSxcbn07XG5cbmNvbnN0IGdldFNlbGVjdFNvdXJjZSA9ICggcHJvcHMgKSA9PiB7XG5cdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgZmllbGRfb3B0aW9uc19mcm9tIH0gICAgICAgID0gYXR0cmlidXRlcztcblxuXHRpZiAoICFzb3VyY2VzWyBmaWVsZF9vcHRpb25zX2Zyb20gXSAmJiAhc291cmNlc1sgZmllbGRfb3B0aW9uc19mcm9tIF0gKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y29uc3Qgc291cmNlID0gc291cmNlc1sgZmllbGRfb3B0aW9uc19mcm9tIF07XG5cblx0cmV0dXJuIDxTZWxlY3RDb250cm9sXG5cdFx0bGFiZWw9eyBzb3VyY2UubGFiZWwgfVxuXHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxuXHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgc291cmNlLmF0dHIgXSB9XG5cdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IFsgc291cmNlLmF0dHIgXTogbmV3VmFsdWUgfSApO1xuXHRcdH0gfVxuXHRcdG9wdGlvbnM9eyBzb3VyY2Uub3B0aW9ucyB9XG5cdC8+O1xufTtcblxuZXhwb3J0IHsgZ2V0U2VsZWN0U291cmNlLCBsaXN0RnJvbSB9OyIsIi8qKlxuICogR2VuZXJhdG9yIFNldHRpbmdzIENvbXBvbmVudC5cbiAqXG4gKiBNYWluIGNvbXBvbmVudCBmb3IgcmVuZGVyaW5nIGdlbmVyYXRvciBjb25maWd1cmF0aW9uIFVJLlxuICogUmVwbGFjZXMgdGhlIG9sZCBGcm9tR2VuZXJhdG9yc0ZpZWxkcy5qcyB3aXRoIGFuIGV4dGVuc2libGUgU2xvdC9GaWxsIGFyY2hpdGVjdHVyZS5cbiAqXG4gKiBVc2VzIGdlbmVyYXRvcl9hcmdzIChvYmplY3QpIGF0dHJpYnV0ZSBmb3Igc3RvcmluZyBnZW5lcmF0b3Igc2V0dGluZ3MuXG4gKiBNYWludGFpbnMgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIGxlZ2FjeSBnZW5lcmF0b3JfZmllbGQgKHBpcGUtZGVsaW1pdGVkIHN0cmluZykuXG4gKlxuICogQHBhY2thZ2UgSmV0Rm9ybUJ1aWxkZXJcbiAqL1xuXG5jb25zdCB7IFNlbGVjdENvbnRyb2wsIFBhbmVsQm9keSwgTm90aWNlIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQge1xuXHRHZW5lcmF0b3JDb250cm9sc1Nsb3QsXG5cdEdlbmVyYXRvckFkZGl0aW9uYWxTbG90LFxuXHRCZWZvcmVHZW5lcmF0b3JTZWxlY3RvclNsb3QsXG5cdEFmdGVyR2VuZXJhdG9yQ29udHJvbHNTbG90LFxufSBmcm9tICcuL3Nsb3QtZmlsbCc7XG5cbmltcG9ydCB7IGdldEdlbmVyYXRvckNvbnRyb2xzIH0gZnJvbSAnLi9yZWdpc3RyeSc7XG5pbXBvcnQgeyBTY2hlbWFCYXNlZENvbnRyb2xzLCBOb1NjaGVtYU5vdGljZSB9IGZyb20gJy4vc2NoZW1hLXJlbmRlcmVyJztcbmltcG9ydCBMZWdhY3lDb250cm9scyBmcm9tICcuL2xlZ2FjeS1jb250cm9scyc7XG5pbXBvcnQgQXV0b1VwZGF0ZUNvbnRyb2xzIGZyb20gJy4vY29tcG9uZW50cy9BdXRvVXBkYXRlQ29udHJvbHMnO1xuXG4vKipcbiAqIExlZ2FjeSBnZW5lcmF0b3JzIHRoYXQgdXNlIHBpcGUtZGVsaW1pdGVkIGZvcm1hdCBmb3IgZ2VuZXJhdG9yX2ZpZWxkLlxuICogVXNlZCBmb3IgbWlncmF0aW5nIG9sZCBkYXRhIHRvIGdlbmVyYXRvcl9hcmdzLlxuICogRm9ybWF0OiBcImZpZWxkMXxmaWVsZDJ8ZmllbGQzfGZpZWxkNFwiXG4gKi9cbmNvbnN0IExFR0FDWV9QSVBFX0ZPUk1BVCA9IHtcblx0Z2V0X2Zyb21fcXVlcnk6ICAgICAgICAgICAgWyAncXVlcnlfaWQnLCAndmFsdWVfZmllbGQnLCAnbGFiZWxfZmllbGQnLCAnY2FsY19maWVsZCcgXSxcblx0Z2V0X2Zyb21fZmllbGQ6ICAgICAgICAgICAgWyAnZmllbGRfbmFtZScsICdzdWJfZmllbGQnIF0sXG5cdGdldF9mcm9tX2RiOiAgICAgICAgICAgICAgIFsgJ21ldGFfa2V5JyBdLFxuXHRudW1fcmFuZ2U6ICAgICAgICAgICAgICAgICBbICdtZXRhX2tleScgXSxcblx0Z2V0X2Zyb21fYm9va2luZ19zdGF0dXNlczogWyAnc3RhdHVzX2dyb3VwW10nIF0sXG59O1xuXG4vKipcbiAqIEdldCBnZW5lcmF0b3Igc2NoZW1hcyBmcm9tIGxvY2FsaXplZCBkYXRhLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gR2VuZXJhdG9yIHNjaGVtYXMga2V5ZWQgYnkgSUQuXG4gKi9cbmZ1bmN0aW9uIGdldEdlbmVyYXRvclNjaGVtYXMoKSB7XG5cdHJldHVybiB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YT8uZ2VuZXJhdG9yX3NjaGVtYXMgPz8ge307XG59XG5cbi8qKlxuICogR2V0IGdlbmVyYXRvcnMgbGlzdCBmb3Igc2VsZWN0IGNvbnRyb2wuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHsgdmFsdWUsIGxhYmVsIH0gb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZ2V0R2VuZXJhdG9yc0xpc3QoKSB7XG5cdHJldHVybiB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YT8uZ2VuZXJhdG9yc19saXN0ID8/IFtdO1xufVxuXG4vKipcbiAqIFBhcnNlIGxlZ2FjeSBwaXBlLWRlbGltaXRlZCBnZW5lcmF0b3JfZmllbGQgaW50byBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkICAgIEdlbmVyYXRvciBJRC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JGaWVsZCBQaXBlLWRlbGltaXRlZCBzdHJpbmcuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBQYXJzZWQgdmFsdWVzIGFzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VMZWdhY3lQaXBlRm9ybWF0KCBnZW5lcmF0b3JJZCwgZ2VuZXJhdG9yRmllbGQgKSB7XG5cdGNvbnN0IGZpZWxkS2V5cyA9IExFR0FDWV9QSVBFX0ZPUk1BVFsgZ2VuZXJhdG9ySWQgXTtcblx0aWYgKCAhIGZpZWxkS2V5cyB8fCAhIGdlbmVyYXRvckZpZWxkICkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0IHBhcnRzID0gZ2VuZXJhdG9yRmllbGQuc3BsaXQoICd8JyApO1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblxuXHRmaWVsZEtleXMuZm9yRWFjaCggKCBrZXksIGluZGV4ICkgPT4ge1xuXHRcdC8vIEtleXMgZW5kaW5nIHdpdGggW10gY29sbGVjdCBhbGwgcmVtYWluaW5nIHBpcGUgcGFydHMgYXMgYXJyYXlcblx0XHRpZiAoIGtleS5lbmRzV2l0aCggJ1tdJyApICkge1xuXHRcdFx0Y29uc3QgcmVhbEtleSA9IGtleS5zbGljZSggMCwgLTIgKTtcblx0XHRcdGNvbnN0IGNvbGxlY3RlZCA9IHBhcnRzLnNsaWNlKCBpbmRleCApLmZpbHRlciggKCB2ICkgPT4gdiAhPT0gJycgKTtcblx0XHRcdGlmICggY29sbGVjdGVkLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdHJlc3VsdFsgcmVhbEtleSBdID0gY29sbGVjdGVkO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIHBhcnRzWyBpbmRleCBdICE9PSB1bmRlZmluZWQgJiYgcGFydHNbIGluZGV4IF0gIT09ICcnICkge1xuXHRcdFx0cmVzdWx0WyBrZXkgXSA9IHBhcnRzWyBpbmRleCBdO1xuXHRcdH1cblx0fSApO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogU2NoZW1hLWJhc2VkIGNvbnRyb2xzIHdpdGggZ2VuZXJhdG9yX2FyZ3Mgc3RvcmFnZS5cbiAqXG4gKiBXcmFwcyBTY2hlbWFCYXNlZENvbnRyb2xzIHRvIHNhdmUvcmVhZCBmcm9tIGdlbmVyYXRvcl9hcmdzIG9iamVjdCBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMgICAgICAgICAgICAgICBDb21wb25lbnQgcHJvcHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gICBwcm9wcy5nZW5lcmF0b3JJZCAgIEdlbmVyYXRvciBJRC5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLnNjaGVtYSAgICAgICAgR2VuZXJhdG9yIHNjaGVtYS5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLmF0dHJpYnV0ZXMgICAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLnNldEF0dHJpYnV0ZXMgU2V0IGF0dHJpYnV0ZXMgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IENvbnRyb2xzIHdpdGggZ2VuZXJhdG9yX2FyZ3Mgc3RvcmFnZS5cbiAqL1xuZnVuY3Rpb24gR2VuZXJhdG9yQXJnc0NvbnRyb2xzKCB7IGdlbmVyYXRvcklkLCBzY2hlbWEsIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0Ly8gR2V0IGN1cnJlbnQgZ2VuZXJhdG9yX2FyZ3Mgb3IgZW1wdHkgb2JqZWN0XG5cdGNvbnN0IGdlbmVyYXRvckFyZ3MgPSBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9hcmdzIHx8IHt9O1xuXG5cdC8vIENoZWNrIGZvciBsZWdhY3kgZGF0YSBtaWdyYXRpb24gb24gbW91bnRcblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0Ly8gSWYgZ2VuZXJhdG9yX2FyZ3MgaXMgZW1wdHkgYnV0IGdlbmVyYXRvcl9maWVsZCBoYXMgZGF0YSwgbWlncmF0ZSBpdFxuXHRcdGlmIChcblx0XHRcdE9iamVjdC5rZXlzKCBnZW5lcmF0b3JBcmdzICkubGVuZ3RoID09PSAwICYmXG5cdFx0XHRhdHRyaWJ1dGVzLmdlbmVyYXRvcl9maWVsZCAmJlxuXHRcdFx0TEVHQUNZX1BJUEVfRk9STUFUWyBnZW5lcmF0b3JJZCBdXG5cdFx0KSB7XG5cdFx0XHRjb25zdCBtaWdyYXRlZEFyZ3MgPSBwYXJzZUxlZ2FjeVBpcGVGb3JtYXQoIGdlbmVyYXRvcklkLCBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9maWVsZCApO1xuXG5cdFx0XHQvLyBMZWdhY3kgYmxvY2tzIHN0b3JlZCB0aGVzZSBpbiBzZXBhcmF0ZSBibG9jayBhdHRyaWJ1dGVzXG5cdFx0XHRpZiAoICEgbWlncmF0ZWRBcmdzLmNhbGNfZmllbGQgJiYgYXR0cmlidXRlcy5jYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5ICkge1xuXHRcdFx0XHRtaWdyYXRlZEFyZ3MuY2FsY19maWVsZCA9IGF0dHJpYnV0ZXMuY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBPYmplY3Qua2V5cyggbWlncmF0ZWRBcmdzICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdGdlbmVyYXRvcl9hcmdzOiBtaWdyYXRlZEFyZ3MsXG5cdFx0XHRcdFx0Ly8gS2VlcCBnZW5lcmF0b3JfZmllbGQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBQSFBcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwgWyBnZW5lcmF0b3JJZCBdICk7IC8vIE9ubHkgcnVuIHdoZW4gZ2VuZXJhdG9yIGNoYW5nZXNcblxuXHQvLyBDcmVhdGUgd3JhcHBlZCBzZXRBdHRyaWJ1dGVzIHRoYXQgdXBkYXRlcyBnZW5lcmF0b3JfYXJnc1xuXHRjb25zdCBhcmdzU2V0QXR0cmlidXRlcyA9IHVzZUNhbGxiYWNrKFxuXHRcdCggbmV3QXR0cnMgKSA9PiB7XG5cdFx0XHRjb25zdCB1cGRhdGVzID0ge307XG5cdFx0XHRjb25zdCBuZXdBcmdzID0geyAuLi5nZW5lcmF0b3JBcmdzIH07XG5cdFx0XHRsZXQgaGFzQXJnVXBkYXRlcyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDaGVjayBmb3IgcHJlZml4ZWQgYXR0cmlidXRlcyAoZ2VuXzxpZD5fPGtleT4pIGFuZCBjb252ZXJ0IHRvIGdlbmVyYXRvcl9hcmdzXG5cdFx0XHRjb25zdCBwcmVmaXggPSBgZ2VuXyR7IGdlbmVyYXRvcklkIH1fYDtcblxuXHRcdFx0T2JqZWN0LmtleXMoIG5ld0F0dHJzICkuZm9yRWFjaCggKCBhdHRyS2V5ICkgPT4ge1xuXHRcdFx0XHRpZiAoIGF0dHJLZXkuc3RhcnRzV2l0aCggcHJlZml4ICkgKSB7XG5cdFx0XHRcdFx0Y29uc3QgZmllbGRLZXkgPSBhdHRyS2V5LnJlcGxhY2UoIHByZWZpeCwgJycgKTtcblx0XHRcdFx0XHRuZXdBcmdzWyBmaWVsZEtleSBdID0gbmV3QXR0cnNbIGF0dHJLZXkgXTtcblx0XHRcdFx0XHRoYXNBcmdVcGRhdGVzID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBQYXNzIHRocm91Z2ggbm9uLWdlbmVyYXRvciBhdHRyaWJ1dGVzXG5cdFx0XHRcdFx0dXBkYXRlc1sgYXR0cktleSBdID0gbmV3QXR0cnNbIGF0dHJLZXkgXTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHRpZiAoIGhhc0FyZ1VwZGF0ZXMgKSB7XG5cdFx0XHRcdHVwZGF0ZXMuZ2VuZXJhdG9yX2FyZ3MgPSBuZXdBcmdzO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB1cGRhdGVzICk7XG5cdFx0fSxcblx0XHRbIHNldEF0dHJpYnV0ZXMsIGdlbmVyYXRvckFyZ3MsIGdlbmVyYXRvcklkIF1cblx0KTtcblxuXHQvLyBDcmVhdGUgdmlydHVhbCBhdHRyaWJ1dGVzIHdpdGggdmFsdWVzIGZyb20gZ2VuZXJhdG9yX2FyZ3MgZm9yIFNjaGVtYUJhc2VkQ29udHJvbHNcblx0Y29uc3QgdmlydHVhbEF0dHJpYnV0ZXMgPSB1c2VNZW1vKCAoKSA9PiB7XG5cdFx0Y29uc3QgdmlydHVhbCA9IHsgLi4uYXR0cmlidXRlcyB9O1xuXHRcdGNvbnN0IHByZWZpeCA9IGBnZW5fJHsgZ2VuZXJhdG9ySWQgfV9gO1xuXG5cdFx0Ly8gTWFwIGdlbmVyYXRvcl9hcmdzIHZhbHVlcyB0byBwcmVmaXhlZCBhdHRyaWJ1dGVzXG5cdFx0T2JqZWN0LmtleXMoIGdlbmVyYXRvckFyZ3MgKS5mb3JFYWNoKCAoIGtleSApID0+IHtcblx0XHRcdHZpcnR1YWxbIHByZWZpeCArIGtleSBdID0gZ2VuZXJhdG9yQXJnc1sga2V5IF07XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHZpcnR1YWw7XG5cdH0sIFsgYXR0cmlidXRlcywgZ2VuZXJhdG9yQXJncywgZ2VuZXJhdG9ySWQgXSApO1xuXG5cdHJldHVybiAoXG5cdFx0PFNjaGVtYUJhc2VkQ29udHJvbHNcblx0XHRcdGdlbmVyYXRvcklkPXsgZ2VuZXJhdG9ySWQgfVxuXHRcdFx0c2NoZW1hPXsgc2NoZW1hIH1cblx0XHRcdGF0dHJpYnV0ZXM9eyB2aXJ0dWFsQXR0cmlidXRlcyB9XG5cdFx0XHRzZXRBdHRyaWJ1dGVzPXsgYXJnc1NldEF0dHJpYnV0ZXMgfVxuXHRcdC8+XG5cdCk7XG59XG5cbi8qKlxuICogTWFpbiBHZW5lcmF0b3IgU2V0dGluZ3MgQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzICAgICAgICAgICAgICAgQ29tcG9uZW50IHByb3BzLlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMuYXR0cmlidXRlcyAgICBCbG9jayBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMuc2V0QXR0cmlidXRlcyBGdW5jdGlvbiB0byB1cGRhdGUgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLmVkaXRQcm9wcyAgICAgQWRkaXRpb25hbCBlZGl0IHByb3BzIChhdHRySGVscCwgZXRjLikuXG4gKlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IEdlbmVyYXRvciBzZXR0aW5ncyBVSS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRvclNldHRpbmdzKCBwcm9wcyApIHtcblx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBlZGl0UHJvcHMgPSB7fSB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgZ2VuZXJhdG9yX2Z1bmN0aW9uOiBnZW5lcmF0b3JJZCB9ID0gYXR0cmlidXRlcztcblxuXHRjb25zdCBbIGVycm9ycywgc2V0RXJyb3JzIF0gPSB1c2VTdGF0ZSgge30gKTtcblxuXHRjb25zdCBzY2hlbWFzICAgICAgICA9IGdldEdlbmVyYXRvclNjaGVtYXMoKTtcblx0Y29uc3QgZ2VuZXJhdG9yc0xpc3QgPSBnZXRHZW5lcmF0b3JzTGlzdCgpO1xuXG5cdGNvbnN0IGdlbmVyYXRvckRhdGEgICAgID0gc2NoZW1hc1sgZ2VuZXJhdG9ySWQgXSA/PyB7fTtcblx0Y29uc3QgY3VycmVudFNjaGVtYSAgICAgPSBnZW5lcmF0b3JEYXRhLnNjaGVtYSA/PyB7fTtcblx0Y29uc3Qgc3VwcG9ydHNVcGRhdGUgICAgPSBnZW5lcmF0b3JEYXRhLnN1cHBvcnRzX3VwZGF0ZSA/PyBmYWxzZTtcblx0Y29uc3QgY29udGV4dEZpZWxkcyAgICAgPSBnZW5lcmF0b3JEYXRhLnVwZGF0ZV9jb250ZXh0ID8/IFtdO1xuXHRjb25zdCBpc0xlZ2FjeUdlbmVyYXRvciA9IGdlbmVyYXRvckRhdGEubGVnYWN5ID09PSB0cnVlO1xuXG5cdGNvbnN0IEN1c3RvbUNvbnRyb2xzID0gZ2V0R2VuZXJhdG9yQ29udHJvbHMoIGdlbmVyYXRvcklkICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0c2V0RXJyb3JzKCB7fSApO1xuXHR9LCBbIGdlbmVyYXRvcklkIF0gKTtcblxuXHRjb25zdCBmaWxsUHJvcHMgPSB7XG5cdFx0Li4ucHJvcHMsXG5cdFx0Z2VuZXJhdG9ySWQsXG5cdFx0c2NoZW1hOiBjdXJyZW50U2NoZW1hLFxuXHRcdGVycm9ycyxcblx0XHRzZXRFcnJvcnMsXG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZSBnZW5lcmF0b3IgY2hhbmdlIC0gY2xlYXIgb2xkIHNldHRpbmdzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmV3R2VuZXJhdG9ySWQgTmV3IGdlbmVyYXRvciBJRC5cblx0ICovXG5cdGNvbnN0IGhhbmRsZUdlbmVyYXRvckNoYW5nZSA9ICggbmV3R2VuZXJhdG9ySWQgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Z2VuZXJhdG9yX2Z1bmN0aW9uOiBuZXdHZW5lcmF0b3JJZCxcblx0XHRcdGdlbmVyYXRvcl9hcmdzOiB7fSwgLy8gQ2xlYXIgYXJncyB3aGVuIGNoYW5naW5nIGdlbmVyYXRvclxuXHRcdFx0Z2VuZXJhdG9yX2ZpZWxkOiAnJywgLy8gQ2xlYXIgbGVnYWN5IGZpZWxkIHRvb1xuXHRcdH0gKTtcblx0XHRzZXRFcnJvcnMoIHt9ICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8QmVmb3JlR2VuZXJhdG9yU2VsZWN0b3JTbG90IGZpbGxQcm9wcz17IGZpbGxQcm9wcyB9IC8+XG5cblx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdHZW5lcmF0b3IgRnVuY3Rpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdHZhbHVlPXsgZ2VuZXJhdG9ySWQgfHwgJycgfVxuXHRcdFx0XHRvbkNoYW5nZT17IGhhbmRsZUdlbmVyYXRvckNoYW5nZSB9XG5cdFx0XHRcdG9wdGlvbnM9eyBnZW5lcmF0b3JzTGlzdCB9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1nZW5lcmF0b3Itc2VsZWN0b3JcIlxuXHRcdFx0Lz5cblxuXHRcdFx0eyBnZW5lcmF0b3JJZCAmJiAoXG5cdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHR7IC8qIFByaW9yaXR5IDE6IEN1c3RvbSByZWdpc3RlcmVkIGNvbnRyb2xzICovIH1cblx0XHRcdFx0XHR7IEN1c3RvbUNvbnRyb2xzICYmIChcblx0XHRcdFx0XHRcdDxDdXN0b21Db250cm9sc1xuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXM9eyBzZXRBdHRyaWJ1dGVzIH1cblx0XHRcdFx0XHRcdFx0c2NoZW1hPXsgY3VycmVudFNjaGVtYSB9XG5cdFx0XHRcdFx0XHRcdGdlbmVyYXRvcklkPXsgZ2VuZXJhdG9ySWQgfVxuXHRcdFx0XHRcdFx0XHRlZGl0UHJvcHM9eyBlZGl0UHJvcHMgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHRcdHsgLyogUHJpb3JpdHkgMjogU2NoZW1hLWJhc2VkIGNvbnRyb2xzIHdpdGggZ2VuZXJhdG9yX2FyZ3Mgc3RvcmFnZSAqLyB9XG5cdFx0XHRcdFx0eyAhIEN1c3RvbUNvbnRyb2xzICYmICEgaXNMZWdhY3lHZW5lcmF0b3IgJiYgT2JqZWN0LmtleXMoIGN1cnJlbnRTY2hlbWEgKS5sZW5ndGggPiAwICYmIChcblx0XHRcdFx0XHRcdDxHZW5lcmF0b3JBcmdzQ29udHJvbHNcblx0XHRcdFx0XHRcdFx0Z2VuZXJhdG9ySWQ9eyBnZW5lcmF0b3JJZCB9XG5cdFx0XHRcdFx0XHRcdHNjaGVtYT17IGN1cnJlbnRTY2hlbWEgfVxuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXM9eyBzZXRBdHRyaWJ1dGVzIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0XHR7IC8qIFByaW9yaXR5IDM6IExlZ2FjeSBjb250cm9scyBmYWxsYmFjayAqLyB9XG5cdFx0XHRcdFx0eyAhIEN1c3RvbUNvbnRyb2xzICYmIGlzTGVnYWN5R2VuZXJhdG9yICYmIChcblx0XHRcdFx0XHRcdDxMZWdhY3lDb250cm9sc1xuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXM9eyBzZXRBdHRyaWJ1dGVzIH1cblx0XHRcdFx0XHRcdFx0ZWRpdFByb3BzPXsgZWRpdFByb3BzIH1cblx0XHRcdFx0XHRcdFx0Z2VuZXJhdG9ySWQ9eyBnZW5lcmF0b3JJZCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdFx0eyAvKiBObyBzY2hlbWEgbm90aWNlICovIH1cblx0XHRcdFx0XHR7ICEgQ3VzdG9tQ29udHJvbHMgJiYgISBpc0xlZ2FjeUdlbmVyYXRvciAmJiBPYmplY3Qua2V5cyggY3VycmVudFNjaGVtYSApLmxlbmd0aCA9PT0gMCAmJiAoXG5cdFx0XHRcdFx0XHQ8Tm9TY2hlbWFOb3RpY2Vcblx0XHRcdFx0XHRcdFx0Z2VuZXJhdG9ySWQ9eyBnZW5lcmF0b3JJZCB9XG5cdFx0XHRcdFx0XHRcdGdlbmVyYXRvck5hbWU9eyBnZW5lcmF0b3JEYXRhLm5hbWUgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHRcdDxHZW5lcmF0b3JDb250cm9sc1Nsb3QgZmlsbFByb3BzPXsgZmlsbFByb3BzIH0gLz5cblx0XHRcdFx0XHQ8R2VuZXJhdG9yQWRkaXRpb25hbFNsb3QgZmlsbFByb3BzPXsgZmlsbFByb3BzIH0gLz5cblxuXHRcdFx0XHRcdDxBdXRvVXBkYXRlQ29udHJvbHNcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM9eyBhdHRyaWJ1dGVzIH1cblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXM9eyBzZXRBdHRyaWJ1dGVzIH1cblx0XHRcdFx0XHRcdHN1cHBvcnRzVXBkYXRlPXsgc3VwcG9ydHNVcGRhdGUgfVxuXHRcdFx0XHRcdFx0Y29udGV4dEZpZWxkcz17IGNvbnRleHRGaWVsZHMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHQpIH1cblxuXHRcdFx0PEFmdGVyR2VuZXJhdG9yQ29udHJvbHNTbG90IGZpbGxQcm9wcz17IGZpbGxQcm9wcyB9IC8+XG5cblx0XHRcdHsgT2JqZWN0LmtleXMoIGVycm9ycyApLmxlbmd0aCA+IDAgJiYgKFxuXHRcdFx0XHQ8Tm90aWNlIHN0YXR1cz1cImVycm9yXCIgaXNEaXNtaXNzaWJsZT17IGZhbHNlIH0gY2xhc3NOYW1lPVwiamZiLWdlbmVyYXRvci1lcnJvcnNcIj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7IE9iamVjdC5lbnRyaWVzKCBlcnJvcnMgKS5tYXAoICggWyBmaWVsZCwgbWVzc2FnZSBdICkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8bGkga2V5PXsgZmllbGQgfT5cblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPnsgZmllbGQgfTo8L3N0cm9uZz4geyBtZXNzYWdlIH1cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdCkgKSB9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9Ob3RpY2U+XG5cdFx0XHQpIH1cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufVxuXG4vKipcbiAqIFdyYXBwZXIgY29tcG9uZW50IHRoYXQgaW5jbHVkZXMgUGFuZWxCb2R5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBDb21wb25lbnQgcHJvcHMgKHNhbWUgYXMgR2VuZXJhdG9yU2V0dGluZ3MpLlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBQYW5lbCB3aXRoIGdlbmVyYXRvciBzZXR0aW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRvclNldHRpbmdzUGFuZWwoIHByb3BzICkge1xuXHRjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuXHRjb25zdCB7IGdlbmVyYXRvcl9mdW5jdGlvbjogZ2VuZXJhdG9ySWQgfSA9IGF0dHJpYnV0ZXM7XG5cblx0cmV0dXJuIChcblx0XHQ8UGFuZWxCb2R5XG5cdFx0XHR0aXRsZT17IF9fKCAnR2VuZXJhdGUgT3B0aW9ucycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdGluaXRpYWxPcGVuPXsgISEgZ2VuZXJhdG9ySWQgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiamZiLWdlbmVyYXRvci1zZXR0aW5ncy1wYW5lbFwiXG5cdFx0PlxuXHRcdFx0PEdlbmVyYXRvclNldHRpbmdzIHsgLi4ucHJvcHMgfSAvPlxuXHRcdDwvUGFuZWxCb2R5PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0b3JTZXR0aW5ncztcbiIsIi8qKlxuICogQXV0by1VcGRhdGUgQ29udHJvbHMgQ29tcG9uZW50LlxuICpcbiAqIFJlbmRlcnMgY29udHJvbHMgZm9yIGVuYWJsaW5nIGNhc2NhZGluZy9hdXRvLXVwZGF0ZSBiZWhhdmlvciB3aGVuIGEgZ2VuZXJhdG9yXG4gKiBzdXBwb3J0cyBkeW5hbWljIHVwZGF0ZXMgYmFzZWQgb24gb3RoZXIgZmllbGQgdmFsdWVzLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuaW1wb3J0ICcuL2F1dG8tdXBkYXRlLWNvbnRyb2xzLnBjc3MnO1xuXG5jb25zdCB7IFRvZ2dsZUNvbnRyb2wsIFNlbGVjdENvbnRyb2wsIFRleHRDb250cm9sLCBOb3RpY2UgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBGcmFnbWVudCwgdXNlTWVtbyB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgc2VsZWN0IH0gPSB3cC5kYXRhO1xuLyoqXG4gKiBHZXQgZGF0YSBmaWVsZHMgZnJvbSBibG9jayBlZGl0b3IgKGV4Y2x1ZGVzIHN0cnVjdHVyYWwgYW5kIGJ1dHRvbiBibG9ja3MpLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiB7IG5hbWUsIGxhYmVsLCB0eXBlIH0gb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gZ2V0Rm9ybUZpZWxkcygpIHtcblx0Y29uc3QgYmxvY2tzID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICk/LmdldEJsb2NrcygpID8/IFtdO1xuXHRjb25zdCBmaWVsZHMgPSBbXTtcblxuXHRjb25zdCBleGNsdWRlZEJsb2NrcyA9IFtcblx0XHQnamV0LWZvcm1zL2NvbmRpdGlvbmFsLWJsb2NrJyxcblx0XHQnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcsXG5cdFx0J2pldC1mb3Jtcy9mb3JtLWJyZWFrLWZpZWxkJyxcblx0XHQnamV0LWZvcm1zL2Zvcm0tYnJlYWstc3RhcnQnLFxuXHRcdCdqZXQtZm9ybXMvZ3JvdXAtYnJlYWstZmllbGQnLFxuXHRcdCdqZXQtZm9ybXMvaGVhZGluZy1maWVsZCcsXG5cdFx0J2pldC1mb3Jtcy9wcm9ncmVzcy1iYXInLFxuXHRcdCdqZXQtZm9ybXMvY2FwdGNoYS1jb250YWluZXInLFxuXHRcdCdqZXQtZm9ybXMvZm9ybS1ibG9jaycsXG5cdF07XG5cblx0Y29uc3QgZXh0cmFjdEZpZWxkcyA9ICggYmxvY2tzTGlzdCApID0+IHtcblx0XHRibG9ja3NMaXN0LmZvckVhY2goICggYmxvY2sgKSA9PiB7XG5cdFx0XHRpZiAoIGJsb2NrLmF0dHJpYnV0ZXM/Lm5hbWUgJiYgISBleGNsdWRlZEJsb2Nrcy5pbmNsdWRlcyggYmxvY2submFtZSApICkge1xuXHRcdFx0XHRmaWVsZHMucHVzaCgge1xuXHRcdFx0XHRcdG5hbWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcblx0XHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdFx0dHlwZTogYmxvY2submFtZSxcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGJsb2NrLmlubmVyQmxvY2tzPy5sZW5ndGggKSB7XG5cdFx0XHRcdGV4dHJhY3RGaWVsZHMoIGJsb2NrLmlubmVyQmxvY2tzICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdGV4dHJhY3RGaWVsZHMoIGJsb2NrcyApO1xuXHRyZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIEdldCBhY3Rpb24gYnV0dG9ucyAoamV0LWZvcm1zL3N1Ym1pdC1maWVsZCkgZXhjbHVkaW5nIGFjdGlvbl90eXBlPVwic3VibWl0XCIuXG4gKlxuICogVGhlIHJlbmRlcmVkIEhUTUwgZXhwb3NlcyBhY3Rpb25fdHlwZSB2aWEgZGF0YS10eXBlIG9uIHRoZSB3cmFwcGVyIGRpdi5cbiAqIFdlIHN0b3JlIGFjdGlvbl90eXBlIGFzIHRoZSB2YWx1ZSBzbyB0aGUgZnJvbnRlbmQgY2FuIGZpbmQgdGhlIGJ1dHRvbiB2aWFcbiAqIFtkYXRhLXR5cGU9XCJuZXh0XCJdIHNlbGVjdG9yIG9uIHRoZSB3cmFwcGVyIGVsZW1lbnQuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHsgYWN0aW9uVHlwZSwgbGFiZWwgfSBvYmplY3RzLlxuICovXG5mdW5jdGlvbiBnZXRBY3Rpb25CdXR0b25zKCkge1xuXHRjb25zdCBibG9ja3MgID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICk/LmdldEJsb2NrcygpID8/IFtdO1xuXHRjb25zdCBidXR0b25zID0gW107XG5cblx0Y29uc3QgZXh0cmFjdEJ1dHRvbnMgPSAoIGJsb2Nrc0xpc3QgKSA9PiB7XG5cdFx0YmxvY2tzTGlzdC5mb3JFYWNoKCAoIGJsb2NrICkgPT4ge1xuXHRcdFx0aWYgKCBibG9jay5uYW1lID09PSAnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcgKSB7XG5cdFx0XHRcdGNvbnN0IGFjdGlvblR5cGUgPSBibG9jay5hdHRyaWJ1dGVzPy5hY3Rpb25fdHlwZSA/PyAnc3VibWl0JztcblxuXHRcdFx0XHRpZiAoIGFjdGlvblR5cGUgIT09ICdzdWJtaXQnICkge1xuXHRcdFx0XHRcdGJ1dHRvbnMucHVzaCgge1xuXHRcdFx0XHRcdFx0YWN0aW9uVHlwZSxcblx0XHRcdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzPy5sYWJlbCB8fCBhY3Rpb25UeXBlLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGJsb2NrLmlubmVyQmxvY2tzPy5sZW5ndGggKSB7XG5cdFx0XHRcdGV4dHJhY3RCdXR0b25zKCBibG9jay5pbm5lckJsb2NrcyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcblxuXHRleHRyYWN0QnV0dG9ucyggYmxvY2tzICk7XG5cdHJldHVybiBidXR0b25zO1xufVxuXG4vKipcbiAqIEF1dG8tVXBkYXRlIENvbnRyb2xzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzICAgICAgICAgICAgICAgQ29tcG9uZW50IHByb3BzLlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMuYXR0cmlidXRlcyAgICBCbG9jayBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMuc2V0QXR0cmlidXRlcyBGdW5jdGlvbiB0byB1cGRhdGUgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIHByb3BzLnN1cHBvcnRzVXBkYXRlIFdoZXRoZXIgZ2VuZXJhdG9yIHN1cHBvcnRzIGF1dG8tdXBkYXRlLlxuICogQHBhcmFtIHtBcnJheX0gICAgcHJvcHMuY29udGV4dEZpZWxkcyAgQ29udGV4dCBmaWVsZCBoaW50cyBmcm9tIGdlbmVyYXRvcidzIGdldF9hdXRvX3VwZGF0ZV9jb250ZXh0X2ZpZWxkcygpLlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fG51bGx9IENvbnRyb2xzIG9yIG51bGwgaWYgbm90IHN1cHBvcnRlZC5cbiAqL1xuZnVuY3Rpb24gQXV0b1VwZGF0ZUNvbnRyb2xzKCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIHN1cHBvcnRzVXBkYXRlLCBjb250ZXh0RmllbGRzID0gW10gfSApIHtcblx0aWYgKCAhIHN1cHBvcnRzVXBkYXRlICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3Qge1xuXHRcdGdlbmVyYXRvcl9hdXRvX3VwZGF0ZTogYXV0b1VwZGF0ZSA9IGZhbHNlLFxuXHRcdGdlbmVyYXRvcl9saXN0ZW5fZmllbGQ6IGxpc3RlbkZpZWxkID0gJycsXG5cdFx0Z2VuZXJhdG9yX3JlcXVpcmVfYWxsX2ZpbGxlZDogcmVxdWlyZUFsbEZpbGxlZCA9IGZhbHNlLFxuXHRcdGdlbmVyYXRvcl91cGRhdGVfb25fYnV0dG9uOiB1cGRhdGVPbkJ1dHRvbiA9ICcnLFxuXHRcdGdlbmVyYXRvcl9jYWNoZV90aW1lb3V0OiBjYWNoZVRpbWVvdXQgPSA2MCxcblx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0Ly8gTm9ybWFsaXplIGxpc3Rlbl9maWVsZCB0byBhcnJheSBmb3IgY29uc2lzdGVudCBoYW5kbGluZ1xuXHRjb25zdCBsaXN0ZW5GaWVsZEFycmF5ID0gQXJyYXkuaXNBcnJheSggbGlzdGVuRmllbGQgKVxuXHRcdD8gbGlzdGVuRmllbGRcblx0XHQ6ICggbGlzdGVuRmllbGQgPyBbIGxpc3RlbkZpZWxkIF0gOiBbXSApO1xuXG5cdC8vIElmIGFueSBjb250ZXh0IGhpbnQgZGVjbGFyZXMgc2luZ2xlOiB0cnVlLCByZXN0cmljdCBcIldhdGNoIFRoZXNlIEZpZWxkc1wiIHRvIHNpbmdsZSBzZWxlY3QuXG5cdGNvbnN0IHNpbmdsZUxpc3RlbkZpZWxkID0gY29udGV4dEZpZWxkcy5zb21lKCAoIGhpbnQgKSA9PiBoaW50LnNpbmdsZSApO1xuXG5cdGNvbnN0IGRhdGFGaWVsZHMgICAgPSB1c2VNZW1vKCAoKSA9PiBnZXRGb3JtRmllbGRzKCksIFtdICk7XG5cdGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSB1c2VNZW1vKCAoKSA9PiBnZXRBY3Rpb25CdXR0b25zKCksIFtdICk7XG5cblx0Y29uc3QgZmllbGRPcHRpb25zID0gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGNvbnN0IG9wdHMgPSBkYXRhRmllbGRzLm1hcCggKCBmaWVsZCApID0+ICgge1xuXHRcdFx0dmFsdWU6IGZpZWxkLm5hbWUsXG5cdFx0XHRsYWJlbDogYCR7IGZpZWxkLmxhYmVsIH0gKCR7IGZpZWxkLm5hbWUgfSlgLFxuXHRcdH0gKSApO1xuXG5cdFx0Ly8gRm9yIHNpbmdsZS1zZWxlY3QgbW9kZSBhZGQgYW4gZW1wdHkgcGxhY2Vob2xkZXIgb3B0aW9uLlxuXHRcdGlmICggc2luZ2xlTGlzdGVuRmllbGQgKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7IHZhbHVlOiAnJywgbGFiZWw6IF9fKCAn4oCUIFNlbGVjdCBmaWVsZCDigJQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9LFxuXHRcdFx0XHQuLi5vcHRzLFxuXHRcdFx0XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3B0cztcblx0fSwgWyBkYXRhRmllbGRzLCBzaW5nbGVMaXN0ZW5GaWVsZCBdICk7XG5cblx0Y29uc3QgYnV0dG9uT3B0aW9ucyA9IHVzZU1lbW8oICgpID0+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0eyB2YWx1ZTogJycsIGxhYmVsOiBfXyggJ+KAlCBTZWxlY3QgYnV0dG9uIOKAlCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH0sXG5cdFx0XHQuLi5hY3Rpb25CdXR0b25zLm1hcCggKCBidG4gKSA9PiAoIHtcblx0XHRcdFx0dmFsdWU6IGJ0bi5hY3Rpb25UeXBlLFxuXHRcdFx0XHRsYWJlbDogYCR7IGJ0bi5sYWJlbCB9ICgkeyBidG4uYWN0aW9uVHlwZSB9KWAsXG5cdFx0XHR9ICkgKSxcblx0XHRdO1xuXHR9LCBbIGFjdGlvbkJ1dHRvbnMgXSApO1xuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBBdXRvLVVwZGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0aGVscD17IF9fKFxuXHRcdFx0XHRcdCdXaGVuIGVuYWJsZWQsIHRoZSBsaXN0IG9mIG9wdGlvbnMgd2lsbCBhdXRvbWF0aWNhbGx5IHJlZnJlc2ggd2hlbmV2ZXIgYSBzZWxlY3RlZCBmaWVsZCBjaGFuZ2VzIGl0cyB2YWx1ZS4nLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHQpIH1cblx0XHRcdFx0Y2hlY2tlZD17IGF1dG9VcGRhdGUgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0Z2VuZXJhdG9yX2F1dG9fdXBkYXRlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdC4uLiggISB2YWx1ZSAmJiB7XG5cdFx0XHRcdFx0XHRcdGdlbmVyYXRvcl9saXN0ZW5fZmllbGQ6ICcnLFxuXHRcdFx0XHRcdFx0XHRnZW5lcmF0b3JfcmVxdWlyZV9hbGxfZmlsbGVkOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0Z2VuZXJhdG9yX3VwZGF0ZV9vbl9idXR0b246ICcnLFxuXHRcdFx0XHRcdFx0fSApLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSB9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1hdXRvLXVwZGF0ZS10b2dnbGVcIlxuXHRcdFx0Lz5cblxuXHRcdFx0eyBhdXRvVXBkYXRlICYmIGNvbnRleHRGaWVsZHMubGVuZ3RoID4gMCAmJiAoXG5cdFx0XHRcdDxOb3RpY2Vcblx0XHRcdFx0XHRzdGF0dXM9XCJpbmZvXCJcblx0XHRcdFx0XHRpc0Rpc21pc3NpYmxlPXsgZmFsc2UgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1hdXRvLXVwZGF0ZS1jb250ZXh0LWhpbnRzXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgY29udGV4dEZpZWxkcy5tYXAoICggaGludCwgaSApID0+IChcblx0XHRcdFx0XHRcdDxwIGtleT17IGkgfSBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscFwiPlxuXHRcdFx0XHRcdFx0XHR7IGhpbnQuZGVzY3JpcHRpb24gfVxuXHRcdFx0XHRcdFx0XHR7IGhpbnQuZXhhbXBsZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+eyBoaW50LmV4YW1wbGUgfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0KSApIH1cblx0XHRcdFx0PC9Ob3RpY2U+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyBhdXRvVXBkYXRlICYmIChcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnV2F0Y2ggVGhlc2UgRmllbGRzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdGhlbHA9eyBzaW5nbGVMaXN0ZW5GaWVsZFxuXHRcdFx0XHRcdFx0PyBfXyggJ0Nob29zZSB0aGUgZmllbGQgd2hvc2UgdmFsdWUgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGdlbmVyYXRvciBhcyBhIGZpbHRlci4nLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0XHRcdFx0OiBfXyggJ0Nob29zZSB3aGljaCBmaWVsZHMgdHJpZ2dlciBhIHJlZnJlc2ggd2hlbiB0aGVpciB2YWx1ZSBjaGFuZ2VzLiBIb2xkIEN0cmwgKFdpbmRvd3MpIG9yIENtZCAoTWFjKSB0byBzZWxlY3QgbXVsdGlwbGUuJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0eyAuLi4oICEgc2luZ2xlTGlzdGVuRmllbGQgJiYgeyBtdWx0aXBsZTogdHJ1ZSB9ICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgc2luZ2xlTGlzdGVuRmllbGQgPyAoIGxpc3RlbkZpZWxkQXJyYXlbIDAgXSA/PyAnJyApIDogbGlzdGVuRmllbGRBcnJheSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlcyApID0+IHtcblx0XHRcdFx0XHRcdGlmICggc2luZ2xlTGlzdGVuRmllbGQgKSB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZ2VuZXJhdG9yX2xpc3Rlbl9maWVsZDogdmFsdWVzIHx8ICcnIH0gKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoICEgdmFsdWVzIHx8IHZhbHVlcy5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZ2VuZXJhdG9yX2xpc3Rlbl9maWVsZDogJycgfSApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0Z2VuZXJhdG9yX2xpc3Rlbl9maWVsZDogdmFsdWVzLmxlbmd0aCA9PT0gMSA/IHZhbHVlc1sgMCBdIDogdmFsdWVzLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyBmaWVsZE9wdGlvbnMgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IHNpbmdsZUxpc3RlbkZpZWxkID8gJycgOiAnamZiLWF1dG8tdXBkYXRlLWZpZWxkLXNlbGVjdG9yJyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyBhdXRvVXBkYXRlICYmIGxpc3RlbkZpZWxkQXJyYXkubGVuZ3RoID4gMCAmJiAhIHVwZGF0ZU9uQnV0dG9uICYmIChcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17XG5cdFx0XHRcdFx0XHRsaXN0ZW5GaWVsZEFycmF5Lmxlbmd0aCA+IDFcblx0XHRcdFx0XHRcdFx0PyBfXyggJ1dhaXQgZm9yIEFsbCBGaWVsZHMnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0XHRcdFx0XHQ6IF9fKCAnU2tpcCBpZiBGaWVsZCBpcyBFbXB0eScsICdqZXQtZm9ybS1idWlsZGVyJyApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0bGlzdGVuRmllbGRBcnJheS5sZW5ndGggPiAxXG5cdFx0XHRcdFx0XHRcdD8gX18oICdXaGVuIGVuYWJsZWQsIHRoZSBvcHRpb25zIHJlZnJlc2ggb25seSBhZnRlciBldmVyeSB3YXRjaGVkIGZpZWxkIGhhcyBhIHZhbHVlLiBVc2VmdWwgd2hlbiBtdWx0aXBsZSBmaWVsZHMgYXJlIG5lZWRlZCB0b2dldGhlciB0byBmaWx0ZXIgcmVzdWx0cy4nLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0XHRcdFx0XHQ6IF9fKCAnV2hlbiBlbmFibGVkLCB0aGUgb3B0aW9ucyB3aWxsIG5vdCByZWZyZXNoIGlmIHRoZSB3YXRjaGVkIGZpZWxkIGlzIGVtcHR5LiBUaGUgbGlzdCBzdGF5cyBibGFuayB1bnRpbCB0aGUgdXNlciBwaWNrcyBhIHZhbHVlLicsICdqZXQtZm9ybS1idWlsZGVyJyApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyByZXF1aXJlQWxsRmlsbGVkIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRnZW5lcmF0b3JfcmVxdWlyZV9hbGxfZmlsbGVkOiB2YWx1ZSxcblx0XHRcdFx0XHRcdC4uLiggdmFsdWUgJiYgeyBnZW5lcmF0b3JfdXBkYXRlX29uX2J1dHRvbjogJycgfSApLFxuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyBhdXRvVXBkYXRlICYmICEgcmVxdWlyZUFsbEZpbGxlZCAmJiAoXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1JlZnJlc2ggb24gQnV0dG9uIENsaWNrJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdGhlbHA9eyBfXyhcblx0XHRcdFx0XHRcdCdJbnN0ZWFkIG9mIHJlZnJlc2hpbmcgYXV0b21hdGljYWxseSwgb3B0aW9ucyB1cGRhdGUgb25seSB3aGVuIGEgc2VsZWN0ZWQgSmV0Rm9ybUJ1aWxkZXIgYWN0aW9uIGJ1dHRvbiBpcyBjbGlja2VkLiBTdXBwb3J0ZWQgYWN0aW9uIHR5cGVzOiBVcGRhdGUgRmllbGQsIE5leHQgUGFnZSwgUHJldiBQYWdlLCBDaGFuZ2UgUmVuZGVyIFN0YXRlIChzdWJtaXQgaXMgbm90IHN1cHBvcnRlZCkuIFJlZ3VsYXIgSFRNTCBidXR0b25zIGFyZSBub3Qgc3VwcG9ydGVkIGhlcmUuIExlYXZlIGVtcHR5IHRvIHJlZnJlc2ggaW5zdGFudGx5IG9uIHdhdGNoZWQgZmllbGQgY2hhbmdlLicsXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHR2YWx1ZT17IHVwZGF0ZU9uQnV0dG9uIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRnZW5lcmF0b3JfdXBkYXRlX29uX2J1dHRvbjogdmFsdWUsXG5cdFx0XHRcdFx0XHQuLi4oIHZhbHVlICYmIHsgZ2VuZXJhdG9yX3JlcXVpcmVfYWxsX2ZpbGxlZDogZmFsc2UgfSApLFxuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IGJ1dHRvbk9wdGlvbnMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSB9XG5cblx0XHRcdHsgYXV0b1VwZGF0ZSAmJiAoXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdDYWNoZSBEdXJhdGlvbiAoc2Vjb25kcyknLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0aGVscD17IF9fKFxuXHRcdFx0XHRcdFx0J1JlcGVhdCByZXF1ZXN0cyB3aXRoIHRoZSBzYW1lIHZhbHVlcyB3aWxsIHJldXNlIHRoZSBjYWNoZWQgcmVzdWx0IGZvciB0aGlzIG1hbnkgc2Vjb25kcy4gU2V0IHRvIDAgdG8gYWx3YXlzIGZldGNoIGZyZXNoIGRhdGEuJyxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHRcdHZhbHVlPXsgY2FjaGVUaW1lb3V0IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGdlbmVyYXRvcl9jYWNoZV90aW1lb3V0OiBwYXJzZUludCggdmFsdWUgKSB8fCAwLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSB9XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0b1VwZGF0ZUNvbnRyb2xzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXG4gKiBHZW5lcmF0b3IgVUkgSW5mcmFzdHJ1Y3R1cmUuXG4gKlxuICogTWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIGdlbmVyYXRvciBzZXR0aW5ncyBzeXN0ZW0uXG4gKiBFeHBvcnRzIGFsbCBjb21wb25lbnRzLCB1dGlsaXRpZXMsIGFuZCB0aGUgU2xvdC9GaWxsIHN5c3RlbS5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbi8vIFNsb3QvRmlsbCBzeXN0ZW0gZm9yIGV4dGVuc2liaWxpdHlcbmV4cG9ydCB7XG5cdEdlbmVyYXRvckNvbnRyb2xzRmlsbCxcblx0R2VuZXJhdG9yQ29udHJvbHNTbG90LFxuXHRHZW5lcmF0b3JBZGRpdGlvbmFsRmlsbCxcblx0R2VuZXJhdG9yQWRkaXRpb25hbFNsb3QsXG5cdEF1dG9VcGRhdGVDb250cm9sc0ZpbGwsXG5cdEF1dG9VcGRhdGVDb250cm9sc1Nsb3QsXG5cdEJlZm9yZUdlbmVyYXRvclNlbGVjdG9yRmlsbCxcblx0QmVmb3JlR2VuZXJhdG9yU2VsZWN0b3JTbG90LFxuXHRBZnRlckdlbmVyYXRvckNvbnRyb2xzRmlsbCxcblx0QWZ0ZXJHZW5lcmF0b3JDb250cm9sc1Nsb3QsXG59IGZyb20gJy4vc2xvdC1maWxsJztcblxuLy8gUmVnaXN0cnkgZm9yIGN1c3RvbSBjb250cm9sc1xuZXhwb3J0IHtcblx0cmVnaXN0ZXJHZW5lcmF0b3JDb250cm9scyxcblx0dW5yZWdpc3RlckdlbmVyYXRvckNvbnRyb2xzLFxuXHRnZXRHZW5lcmF0b3JDb250cm9scyxcblx0aGFzQ3VzdG9tQ29udHJvbHMsXG5cdGdldFJlZ2lzdGVyZWRHZW5lcmF0b3JJZHMsXG5cdHJlZ2lzdGVyR2VuZXJhdG9yVmFsaWRhdG9yLFxuXHRnZXRHZW5lcmF0b3JWYWxpZGF0b3IsXG5cdHZhbGlkYXRlR2VuZXJhdG9yU2V0dGluZ3MsXG5cdHJlZ2lzdGVyR2VuZXJhdG9yTWV0YSxcblx0Z2V0R2VuZXJhdG9yTWV0YSxcblx0Z2V0QXR0cmlidXRlTmFtZSxcblx0cGFyc2VTZXR0aW5nc0Zyb21BdHRyaWJ1dGVzLFxuXHRjcmVhdGVHZW5lcmF0b3JTZXRBdHRyaWJ1dGVzLFxufSBmcm9tICcuL3JlZ2lzdHJ5JztcblxuLy8gU2NoZW1hLWJhc2VkIGNvbnRyb2wgcmVuZGVyZXJcbmV4cG9ydCB7XG5cdFNjaGVtYUJhc2VkQ29udHJvbHMsXG5cdE5vU2NoZW1hTm90aWNlLFxuXHR2YWxpZGF0ZUFnYWluc3RTY2hlbWEsXG59IGZyb20gJy4vc2NoZW1hLXJlbmRlcmVyJztcblxuLy8gTWFpbiBzZXR0aW5ncyBjb21wb25lbnRcbmV4cG9ydCB7XG5cdEdlbmVyYXRvclNldHRpbmdzLFxuXHRHZW5lcmF0b3JTZXR0aW5nc1BhbmVsLFxufSBmcm9tICcuL0dlbmVyYXRvclNldHRpbmdzJztcblxuLy8gTGVnYWN5IGNvbnRyb2xzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5leHBvcnQge1xuXHRMZWdhY3lDb250cm9scyxcblx0Z2V0TGVnYWN5RmllbGRWYWx1ZSxcblx0aGFzTGVnYWN5Rm9ybWF0LFxuXHRwYXJzZUxlZ2FjeUZvcm1hdCxcblx0bWlncmF0ZUxlZ2FjeUF0dHJpYnV0ZXMsXG59IGZyb20gJy4vbGVnYWN5LWNvbnRyb2xzJztcbiIsIi8qKlxuICogTGVnYWN5IENvbnRyb2xzIENvbXBvbmVudC5cbiAqXG4gKiBQcm92aWRlcyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGZvciBnZW5lcmF0b3JzIHRoYXQgZG9uJ3QgaGF2ZVxuICogbmV3IHNjaGVtYSBkZWZpbml0aW9ucy4gUmVuZGVycyB0aGUgb2xkLXN0eWxlIFwiRmllbGQgTmFtZVwiIGlucHV0XG4gKiBhbmQgYXBwbGllcyBleGlzdGluZyBmaWx0ZXIgaG9va3MuXG4gKlxuICogQHBhY2thZ2UgSmV0Rm9ybUJ1aWxkZXJcbiAqL1xuXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRCYXNlQ29udHJvbCxcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5jb25zdCB7IEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuXG4vLyBIYW5kbGUgTnVtYmVyQ29udHJvbCBhdmFpbGFiaWxpdHlcbmxldCBOdW1iZXJDb250cm9sID0gd3AuY29tcG9uZW50cy5OdW1iZXJDb250cm9sO1xuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XG59XG5cbi8qKlxuICogTnVtYmVyIFJhbmdlIE1hbnVhbCBDb250cm9scy5cbiAqXG4gKiBTcGVjaWFsIGhhbmRsaW5nIGZvciB0aGUgbnVtX3JhbmdlX21hbnVhbCBnZW5lcmF0b3Igd2hpY2ggaGFzXG4gKiBkZWRpY2F0ZWQgbnVtZXJpYyBpbnB1dHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMgICAgICAgICAgICAgICBDb21wb25lbnQgcHJvcHMuXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcy5hdHRyaWJ1dGVzICAgIEJsb2NrIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5zZXRBdHRyaWJ1dGVzIFNldCBhdHRyaWJ1dGVzIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBOdW1iZXIgcmFuZ2UgY29udHJvbHMuXG4gKi9cbmZ1bmN0aW9uIE51bVJhbmdlTWFudWFsQ29udHJvbHMoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxCYXNlQ29udHJvbCBsYWJlbD17IF9fKCAnU3RhcnQgb2YgcmFuZ2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxuXHRcdFx0XHRcdHN0ZXA9eyAwLjAxIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX251bWJlcnNfbWluIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9udW1iZXJzX21pbjogTnVtYmVyKCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cblx0XHRcdDxCYXNlQ29udHJvbCBsYWJlbD17IF9fKCAnRW5kIG9mIHJhbmdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfT5cblx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwidG9wXCJcblx0XHRcdFx0XHRzdGVwPXsgMC4wMSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9udW1iZXJzX21heCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBnZW5lcmF0b3JfbnVtYmVyc19tYXg6IE51bWJlciggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXG5cdFx0XHQ8QmFzZUNvbnRyb2wgbGFiZWw9eyBfXyggJ1N0ZXAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxuXHRcdFx0XHRcdHN0ZXA9eyAwLjAxIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX251bWJlcnNfc3RlcCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBnZW5lcmF0b3JfbnVtYmVyc19zdGVwOiBOdW1iZXIoIG5ld1ZhbHVlICkgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufVxuXG4vKipcbiAqIERlZmF1bHQgTGVnYWN5IENvbnRyb2xzLlxuICpcbiAqIFJlbmRlcnMgdGhlIHN0YW5kYXJkIFwiRmllbGQgTmFtZVwiIGlucHV0IHdpdGggYWRkaXRpb25hbFxuICogXCJWYWx1ZSBmcm9tIG1ldGEgZmllbGRcIiBhbmQgXCJDYWxjdWxhdGVkIHZhbHVlIGZyb20gbWV0YSBmaWVsZFwiIGlucHV0cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcyAgICAgICAgICAgICAgIENvbXBvbmVudCBwcm9wcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLmF0dHJpYnV0ZXMgICAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLnNldEF0dHJpYnV0ZXMgU2V0IGF0dHJpYnV0ZXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcy5lZGl0UHJvcHMgICAgIEFkZGl0aW9uYWwgZWRpdCBwcm9wcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIHByb3BzLmdlbmVyYXRvcklkICAgR2VuZXJhdG9yIElELlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBMZWdhY3kgY29udHJvbHMuXG4gKi9cbmZ1bmN0aW9uIERlZmF1bHRMZWdhY3lDb250cm9scyggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBlZGl0UHJvcHMsIGdlbmVyYXRvcklkIH0gKSB7XG5cdGNvbnN0IGF0dHJIZWxwID0gZWRpdFByb3BzPy5hdHRySGVscCA/PyAoICgpID0+ICcnICk7XG5cblx0Ly8gTWFpbiBmaWVsZCBjb250cm9sIC0gYXBwbHkgZmlsdGVyIGZvciBleHRlbnNpb25zXG5cdGNvbnN0IG1haW5Db250cm9sID0gYXBwbHlGaWx0ZXJzKFxuXHRcdCdqZXQuZmIuc2VsZWN0LnJhZGlvLmNoZWNrLmdlbmVyYXRvci5jb250cm9scycsXG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRrZXk9XCJnZW5lcmF0b3JfZmllbGRcIlxuXHRcdFx0bGFiZWw9eyBfXyggJ0ZpZWxkIE5hbWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX2ZpZWxkIHx8ICcnIH1cblx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2dlbmVyYXRvcl9maWVsZCcsIGF0dHJpYnV0ZXMgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZ2VuZXJhdG9yX2ZpZWxkOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHQvPixcblx0XHRnZW5lcmF0b3JJZCxcblx0XHR7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGVkaXRQcm9wcyB9XG5cdCk7XG5cblx0Ly8gQWRkaXRpb25hbCBjb250cm9scyAtIGFwcGx5IGZpbHRlciBmb3IgZXh0ZW5zaW9uc1xuXHRjb25zdCBhZGRpdGlvbmFsQ29udHJvbHMgPSBhcHBseUZpbHRlcnMoXG5cdFx0J2pldC5mYi5zZWxlY3QucmFkaW8uY2hlY2suZ2VuZXJhdG9yLmFkZGl0aW9uYWxDb250cm9scycsXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdGtleT1cInZhbHVlX2Zyb21fa2V5XCJcblx0XHRcdFx0bGFiZWw9eyBfXyggJ1ZhbHVlIGZyb20gbWV0YSBmaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAndmFsdWVfZnJvbV9tZXRhJyApIH1cblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZhbHVlX2Zyb21fa2V5IHx8ICcnIH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlX2Zyb21fa2V5ICkgPT4ge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgdmFsdWVfZnJvbV9rZXkgfSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0a2V5PVwiY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleVwiXG5cdFx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGVkIHZhbHVlIGZyb20gbWV0YSBmaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleScgKSB9XG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5IHx8ICcnIH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0PC9GcmFnbWVudD4sXG5cdFx0Z2VuZXJhdG9ySWQsXG5cdFx0eyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBlZGl0UHJvcHMgfVxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0eyBtYWluQ29udHJvbCB9XG5cdFx0XHR7IGFkZGl0aW9uYWxDb250cm9scyB9XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuLyoqXG4gKiBMZWdhY3kgQ29udHJvbHMgQ29tcG9uZW50LlxuICpcbiAqIE1haW4gY29tcG9uZW50IHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBsZWdhY3kgY29udHJvbHMgdG8gcmVuZGVyXG4gKiBiYXNlZCBvbiB0aGUgZ2VuZXJhdG9yIHR5cGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMgICAgICAgICAgICAgICBDb21wb25lbnQgcHJvcHMuXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcy5hdHRyaWJ1dGVzICAgIEJsb2NrIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5zZXRBdHRyaWJ1dGVzIFNldCBhdHRyaWJ1dGVzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMuZWRpdFByb3BzICAgICBBZGRpdGlvbmFsIGVkaXQgcHJvcHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gICBwcm9wcy5nZW5lcmF0b3JJZCAgIEdlbmVyYXRvciBJRC5cbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gQXBwcm9wcmlhdGUgbGVnYWN5IGNvbnRyb2xzIGZvciB0aGUgZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTGVnYWN5Q29udHJvbHMoIHByb3BzICkge1xuXHRjb25zdCB7IGdlbmVyYXRvcklkIH0gPSBwcm9wcztcblxuXHQvLyBTcGVjaWFsIGNhc2U6IG51bV9yYW5nZV9tYW51YWwgaGFzIGl0cyBvd24gZGVkaWNhdGVkIGNvbnRyb2xzXG5cdGlmICggZ2VuZXJhdG9ySWQgPT09ICdudW1fcmFuZ2VfbWFudWFsJyApIHtcblx0XHRyZXR1cm4gPE51bVJhbmdlTWFudWFsQ29udHJvbHMgeyAuLi5wcm9wcyB9IC8+O1xuXHR9XG5cblx0Ly8gRGVmYXVsdCBsZWdhY3kgY29udHJvbHMgZm9yIGFsbCBvdGhlciBnZW5lcmF0b3JzXG5cdHJldHVybiA8RGVmYXVsdExlZ2FjeUNvbnRyb2xzIHsgLi4ucHJvcHMgfSAvPjtcbn1cblxuLyoqXG4gKiBHZXQgbGVnYWN5IGZpZWxkIHZhbHVlIHdpdGggbWlncmF0aW9uIGNoZWNrLlxuICpcbiAqIENoZWNrcyBpZiBsZWdhY3kgZGF0YSBuZWVkcyB0byBiZSBtaWdyYXRlZCBhbmQgcmV0dXJuc1xuICogdGhlIGFwcHJvcHJpYXRlIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzICBCbG9jayBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkIEdlbmVyYXRvciBJRC5cbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEZpZWxkIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGVnYWN5RmllbGRWYWx1ZSggYXR0cmlidXRlcywgZ2VuZXJhdG9ySWQgKSB7XG5cdC8vIENoZWNrIGZvciBtaWdyYXRlZCBsZWdhY3kgZmllbGRcblx0aWYgKCBhdHRyaWJ1dGVzLl9sZWdhY3lfZ2VuZXJhdG9yX2ZpZWxkICkge1xuXHRcdHJldHVybiBhdHRyaWJ1dGVzLl9sZWdhY3lfZ2VuZXJhdG9yX2ZpZWxkO1xuXHR9XG5cblx0Ly8gUmV0dXJuIGN1cnJlbnQgZ2VuZXJhdG9yX2ZpZWxkIHZhbHVlXG5cdHJldHVybiBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9maWVsZCB8fCAnJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhdHRyaWJ1dGVzIGNvbnRhaW4gbGVnYWN5IGZvcm1hdCB0aGF0IGNhbiBiZSBtaWdyYXRlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtaWdyYXRpb24gaXMgcG9zc2libGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNMZWdhY3lGb3JtYXQoIGF0dHJpYnV0ZXMsIGdlbmVyYXRvcklkICkge1xuXHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX2ZpZWxkIHx8ICcnO1xuXG5cdC8vIEpldEVuZ2luZSBRdWVyeSB1c2VzIHBpcGUtZGVsaW1pdGVkIGZvcm1hdFxuXHRpZiAoIGdlbmVyYXRvcklkID09PSAnZ2V0X2Zyb21fcXVlcnknICYmIHZhbHVlLmluY2x1ZGVzKCAnfCcgKSApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBQYXJzZSBsZWdhY3kgZm9ybWF0IHRvIHN0cnVjdHVyZWQgc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgIEJsb2NrIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIElELlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gUGFyc2VkIHNldHRpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMZWdhY3lGb3JtYXQoIGF0dHJpYnV0ZXMsIGdlbmVyYXRvcklkICkge1xuXHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX2ZpZWxkIHx8ICcnO1xuXG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRzd2l0Y2ggKCBnZW5lcmF0b3JJZCApIHtcblx0XHRjYXNlICdnZXRfZnJvbV9xdWVyeSc6XG5cdFx0XHRjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCAnfCcgKTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHF1ZXJ5X2lkOiBwYXJ0c1sgMCBdIHx8ICcnLFxuXHRcdFx0XHR2YWx1ZV9maWVsZDogcGFydHNbIDEgXSB8fCAnSUQnLFxuXHRcdFx0XHRsYWJlbF9maWVsZDogcGFydHNbIDIgXSB8fCAncG9zdF90aXRsZScsXG5cdFx0XHRcdGNhbGNfZmllbGQ6IHBhcnRzWyAzIF0gfHwgJycsXG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiB7IGdlbmVyYXRvcl9maWVsZDogdmFsdWUgfTtcblx0fVxufVxuXG4vKipcbiAqIE1pZ3JhdGUgbGVnYWN5IGF0dHJpYnV0ZXMgdG8gbmV3IGZvcm1hdC5cbiAqXG4gKiBTaG91bGQgYmUgY2FsbGVkIGluIHVzZUVmZmVjdCB3aGVuIGJsb2NrIGxvYWRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIGF0dHJpYnV0ZXMgICAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldEF0dHJpYnV0ZXMgU2V0IGF0dHJpYnV0ZXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gICBnZW5lcmF0b3JJZCAgIEdlbmVyYXRvciBJRC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGVMZWdhY3lBdHRyaWJ1dGVzKCBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBnZW5lcmF0b3JJZCApIHtcblx0aWYgKCAhIGhhc0xlZ2FjeUZvcm1hdCggYXR0cmlidXRlcywgZ2VuZXJhdG9ySWQgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYXJzZWQgPSBwYXJzZUxlZ2FjeUZvcm1hdCggYXR0cmlidXRlcywgZ2VuZXJhdG9ySWQgKTtcblxuXHRpZiAoIE9iamVjdC5rZXlzKCBwYXJzZWQgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQnVpbGQgbmV3IGF0dHJpYnV0ZXMgd2l0aCBwcmVmaXhlZCBrZXlzXG5cdGNvbnN0IG5ld0F0dHJzID0ge307XG5cblx0T2JqZWN0LmVudHJpZXMoIHBhcnNlZCApLmZvckVhY2goICggWyBrZXksIHZhbHVlIF0gKSA9PiB7XG5cdFx0Ly8gU2tpcCBnZW5lcmF0b3JfZmllbGQgLSBpdCdzIHRoZSBvcmlnaW5hbCBrZXlcblx0XHRpZiAoIGtleSA9PT0gJ2dlbmVyYXRvcl9maWVsZCcgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bmV3QXR0cnNbIGBnZW5fJHsgZ2VuZXJhdG9ySWQgfV8keyBrZXkgfWAgXSA9IHZhbHVlO1xuXHR9ICk7XG5cblx0Ly8gU3RvcmUgb3JpZ2luYWwgdmFsdWUgZm9yIHJlZmVyZW5jZVxuXHRuZXdBdHRycy5fbGVnYWN5X2dlbmVyYXRvcl9maWVsZCA9IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX2ZpZWxkO1xuXG5cdC8vIENsZWFyIHRoZSBsZWdhY3kgZmllbGQgdG8gcHJldmVudCByZS1taWdyYXRpb25cblx0Ly8gQWN0dWFsbHksIHdlIGtlZXAgaXQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYnV0IG1hcmsgYXMgbWlncmF0ZWRcblx0Ly8gbmV3QXR0cnMuZ2VuZXJhdG9yX2ZpZWxkID0gJyc7XG5cblx0c2V0QXR0cmlidXRlcyggbmV3QXR0cnMgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVnYWN5Q29udHJvbHM7XG4iLCIvKipcbiAqIEdlbmVyYXRvciBDb250cm9scyBSZWdpc3RyeS5cbiAqXG4gKiBNYW5hZ2VzIHJlZ2lzdHJhdGlvbiBhbmQgcmV0cmlldmFsIG9mIGN1c3RvbSBjb250cm9sIGNvbXBvbmVudHNcbiAqIGZvciBkaWZmZXJlbnQgZ2VuZXJhdG9yIHR5cGVzLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuLyoqXG4gKiBJbnRlcm5hbCBzdG9yYWdlIGZvciByZWdpc3RlcmVkIGdlbmVyYXRvciBjb250cm9scy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIEZ1bmN0aW9uPn1cbiAqL1xuY29uc3QgZ2VuZXJhdG9yQ29udHJvbHMgPSB7fTtcblxuLyoqXG4gKiBJbnRlcm5hbCBzdG9yYWdlIGZvciByZWdpc3RlcmVkIGdlbmVyYXRvciB2YWxpZGF0b3JzLlxuICpcbiAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgRnVuY3Rpb24+fVxuICovXG5jb25zdCBnZW5lcmF0b3JWYWxpZGF0b3JzID0ge307XG5cbi8qKlxuICogSW50ZXJuYWwgc3RvcmFnZSBmb3IgZ2VuZXJhdG9yIG1ldGFkYXRhIChmcm9tIHRoaXJkIHBhcnRpZXMpLlxuICpcbiAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgT2JqZWN0Pn1cbiAqL1xuY29uc3QgZ2VuZXJhdG9yTWV0YSA9IHt9O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgY3VzdG9tIGNvbnRyb2wgY29tcG9uZW50IGZvciBhIGdlbmVyYXRvciB0eXBlLlxuICpcbiAqIFVzZSB0aGlzIHdoZW4gdGhlIHNjaGVtYS1iYXNlZCBhdXRvLWdlbmVyYXRlZCBjb250cm9scyBhcmUgbm90IHN1ZmZpY2llbnRcbiAqIGFuZCB5b3UgbmVlZCBjdXN0b20gVUkgbG9naWMgKGUuZy4sIGR5bmFtaWMgc2VsZWN0b3JzLCBBUEkgY2FsbHMsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSAgIGdlbmVyYXRvcklkIEdlbmVyYXRvciBJRCAoZS5nLiwgJ2pldF9lbmdpbmVfcXVlcnknLCAnbXlfY3VzdG9tJylcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudCAgIFJlYWN0IGNvbXBvbmVudCByZWNlaXZpbmc6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGF0dHJpYnV0ZXM6IEN1cnJlbnQgYmxvY2sgYXR0cmlidXRlc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBzZXRBdHRyaWJ1dGVzOiBGdW5jdGlvbiB0byB1cGRhdGUgYXR0cmlidXRlc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBzY2hlbWE6IEdlbmVyYXRvciBzY2hlbWEgZGVmaW5pdGlvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBnZW5lcmF0b3JJZDogQ3VycmVudCBnZW5lcmF0b3IgSURcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIHJlZ2lzdGVyR2VuZXJhdG9yQ29udHJvbHMoICdteV9nZW5lcmF0b3InLCAoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgc2NoZW1hIH0gKSA9PiB7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPFRleHRDb250cm9sXG4gKiAgICAgICBsYWJlbD1cIk15IEZpZWxkXCJcbiAqICAgICAgIHZhbHVlPXsgYXR0cmlidXRlcy5nZW5fbXlfZ2VuZXJhdG9yX2ZpZWxkIH1cbiAqICAgICAgIG9uQ2hhbmdlPXsgKCB2YWwgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGdlbl9teV9nZW5lcmF0b3JfZmllbGQ6IHZhbCB9ICkgfVxuICogICAgIC8+XG4gKiAgICk7XG4gKiB9ICk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyR2VuZXJhdG9yQ29udHJvbHMoIGdlbmVyYXRvcklkLCBDb21wb25lbnQgKSB7XG5cdGlmICggdHlwZW9mIENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0YEpldEZvcm1CdWlsZGVyOiBHZW5lcmF0b3IgY29udHJvbHMgZm9yIFwiJHsgZ2VuZXJhdG9ySWQgfVwiIG11c3QgYmUgYSBmdW5jdGlvbi9jb21wb25lbnQuYFxuXHRcdCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Z2VuZXJhdG9yQ29udHJvbHNbIGdlbmVyYXRvcklkIF0gPSBDb21wb25lbnQ7XG59XG5cbi8qKlxuICogVW5yZWdpc3RlciBjb250cm9scyBmb3IgYSBnZW5lcmF0b3IgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIElELlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdW5yZWdpc3RlcmVkLCBmYWxzZSBpZiBub3QgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyR2VuZXJhdG9yQ29udHJvbHMoIGdlbmVyYXRvcklkICkge1xuXHRpZiAoIGdlbmVyYXRvcklkIGluIGdlbmVyYXRvckNvbnRyb2xzICkge1xuXHRcdGRlbGV0ZSBnZW5lcmF0b3JDb250cm9sc1sgZ2VuZXJhdG9ySWQgXTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogR2V0IHJlZ2lzdGVyZWQgY29udHJvbCBjb21wb25lbnQgZm9yIGEgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb258bnVsbH0gQ29udHJvbCBjb21wb25lbnQgb3IgbnVsbCBpZiBub3QgcmVnaXN0ZXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdlbmVyYXRvckNvbnRyb2xzKCBnZW5lcmF0b3JJZCApIHtcblx0cmV0dXJuIGdlbmVyYXRvckNvbnRyb2xzWyBnZW5lcmF0b3JJZCBdIHx8IG51bGw7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBnZW5lcmF0b3IgaGFzIGN1c3RvbSBjb250cm9scyByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBjdXN0b20gY29udHJvbHMgYXJlIHJlZ2lzdGVyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDdXN0b21Db250cm9scyggZ2VuZXJhdG9ySWQgKSB7XG5cdHJldHVybiBnZW5lcmF0b3JJZCBpbiBnZW5lcmF0b3JDb250cm9scztcbn1cblxuLyoqXG4gKiBHZXQgYWxsIHJlZ2lzdGVyZWQgZ2VuZXJhdG9yIGNvbnRyb2wgSURzLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ1tdfSBBcnJheSBvZiBnZW5lcmF0b3IgSURzIHdpdGggY3VzdG9tIGNvbnRyb2xzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVnaXN0ZXJlZEdlbmVyYXRvcklkcygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKCBnZW5lcmF0b3JDb250cm9scyApO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgdmFsaWRhdG9yIGZ1bmN0aW9uIGZvciBhIGdlbmVyYXRvciB0eXBlLlxuICpcbiAqIFZhbGlkYXRvcnMgYXJlIGNhbGxlZCBiZWZvcmUgc2F2aW5nIHRvIGVuc3VyZSBzZXR0aW5ncyBhcmUgdmFsaWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICAgZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIElELlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsaWRhdG9yICAgRnVuY3Rpb24gcmVjZWl2aW5nIHNldHRpbmdzLCByZXR1cm5pbmcgeyB2YWxpZDogYm9vbGVhbiwgZXJyb3JzOiBPYmplY3QgfS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIHJlZ2lzdGVyR2VuZXJhdG9yVmFsaWRhdG9yKCAnbXlfZ2VuZXJhdG9yJywgKCBzZXR0aW5ncyApID0+IHtcbiAqICAgY29uc3QgZXJyb3JzID0ge307XG4gKiAgIGlmICggISBzZXR0aW5ncy5hcGlfdXJsICkge1xuICogICAgIGVycm9ycy5hcGlfdXJsID0gJ0FQSSBVUkwgaXMgcmVxdWlyZWQnO1xuICogICB9XG4gKiAgIHJldHVybiB7IHZhbGlkOiBPYmplY3Qua2V5cyggZXJyb3JzICkubGVuZ3RoID09PSAwLCBlcnJvcnMgfTtcbiAqIH0gKTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJHZW5lcmF0b3JWYWxpZGF0b3IoIGdlbmVyYXRvcklkLCB2YWxpZGF0b3IgKSB7XG5cdGlmICggdHlwZW9mIHZhbGlkYXRvciAhPT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0YEpldEZvcm1CdWlsZGVyOiBHZW5lcmF0b3IgdmFsaWRhdG9yIGZvciBcIiR7IGdlbmVyYXRvcklkIH1cIiBtdXN0IGJlIGEgZnVuY3Rpb24uYFxuXHRcdCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Z2VuZXJhdG9yVmFsaWRhdG9yc1sgZ2VuZXJhdG9ySWQgXSA9IHZhbGlkYXRvcjtcbn1cblxuLyoqXG4gKiBHZXQgdmFsaWRhdG9yIGZvciBhIGdlbmVyYXRvciB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb258bnVsbH0gVmFsaWRhdG9yIGZ1bmN0aW9uIG9yIG51bGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHZW5lcmF0b3JWYWxpZGF0b3IoIGdlbmVyYXRvcklkICkge1xuXHRyZXR1cm4gZ2VuZXJhdG9yVmFsaWRhdG9yc1sgZ2VuZXJhdG9ySWQgXSB8fCBudWxsO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIGdlbmVyYXRvciBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIElELlxuICogQHBhcmFtIHtPYmplY3R9IHNldHRpbmdzICAgIFNldHRpbmdzIHRvIHZhbGlkYXRlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVmFsaWRhdGlvbiByZXN1bHQgeyB2YWxpZDogYm9vbGVhbiwgZXJyb3JzOiBPYmplY3QgfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlR2VuZXJhdG9yU2V0dGluZ3MoIGdlbmVyYXRvcklkLCBzZXR0aW5ncyApIHtcblx0Y29uc3QgdmFsaWRhdG9yID0gZ2V0R2VuZXJhdG9yVmFsaWRhdG9yKCBnZW5lcmF0b3JJZCApO1xuXG5cdGlmICggISB2YWxpZGF0b3IgKSB7XG5cdFx0cmV0dXJuIHsgdmFsaWQ6IHRydWUsIGVycm9yczoge30gfTtcblx0fVxuXG5cdHJldHVybiB2YWxpZGF0b3IoIHNldHRpbmdzICk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgYWRkaXRpb25hbCBtZXRhZGF0YSBmb3IgYSBnZW5lcmF0b3IuXG4gKlxuICogQ2FuIGJlIHVzZWQgdG8gYWRkIGN1c3RvbSBkYXRhIHRoYXQgY29udHJvbHMgbWlnaHQgbmVlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIElELlxuICogQHBhcmFtIHtPYmplY3R9IG1ldGEgICAgICAgIE1ldGFkYXRhIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyR2VuZXJhdG9yTWV0YSggZ2VuZXJhdG9ySWQsIG1ldGEgKSB7XG5cdGdlbmVyYXRvck1ldGFbIGdlbmVyYXRvcklkIF0gPSB7XG5cdFx0Li4uKCBnZW5lcmF0b3JNZXRhWyBnZW5lcmF0b3JJZCBdIHx8IHt9ICksXG5cdFx0Li4ubWV0YSxcblx0fTtcbn1cblxuLyoqXG4gKiBHZXQgbWV0YWRhdGEgZm9yIGEgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBNZXRhZGF0YSBvYmplY3Qgb3IgZW1wdHkgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2VuZXJhdG9yTWV0YSggZ2VuZXJhdG9ySWQgKSB7XG5cdHJldHVybiBnZW5lcmF0b3JNZXRhWyBnZW5lcmF0b3JJZCBdIHx8IHt9O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgYXR0cmlidXRlIG5hbWUgd2l0aCBnZW5lcmF0b3IgcHJlZml4LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGRLZXkgICAgRmllbGQga2V5IGZyb20gc2NoZW1hLlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gUHJlZml4ZWQgYXR0cmlidXRlIG5hbWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVOYW1lKCBnZW5lcmF0b3JJZCwgZmllbGRLZXkgKSB7XG5cdHJldHVybiBgZ2VuXyR7IGdlbmVyYXRvcklkIH1fJHsgZmllbGRLZXkgfWA7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIHNldHRpbmdzIGZyb20gYXR0cmlidXRlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIElELlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgIEJsb2NrIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hICAgICAgR2VuZXJhdG9yIHNjaGVtYS5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFBhcnNlZCBzZXR0aW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2V0dGluZ3NGcm9tQXR0cmlidXRlcyggZ2VuZXJhdG9ySWQsIGF0dHJpYnV0ZXMsIHNjaGVtYSApIHtcblx0Y29uc3Qgc2V0dGluZ3MgPSB7fTtcblx0Y29uc3QgcHJlZml4ID0gYGdlbl8keyBnZW5lcmF0b3JJZCB9X2A7XG5cblx0T2JqZWN0LmtleXMoIHNjaGVtYSApLmZvckVhY2goICggZmllbGRLZXkgKSA9PiB7XG5cdFx0Y29uc3QgYXR0ck5hbWUgPSBwcmVmaXggKyBmaWVsZEtleTtcblx0XHRjb25zdCBmaWVsZERlZiA9IHNjaGVtYVsgZmllbGRLZXkgXTtcblxuXHRcdGlmICggYXR0ck5hbWUgaW4gYXR0cmlidXRlcyApIHtcblx0XHRcdHNldHRpbmdzWyBmaWVsZEtleSBdID0gYXR0cmlidXRlc1sgYXR0ck5hbWUgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0dGluZ3NbIGZpZWxkS2V5IF0gPSBmaWVsZERlZi5kZWZhdWx0ID8/ICcnO1xuXHRcdH1cblx0fSApO1xuXG5cdHJldHVybiBzZXR0aW5ncztcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHNldEF0dHJpYnV0ZXMgd3JhcHBlciBmb3IgYSBnZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICAgZ2VuZXJhdG9ySWQgICBHZW5lcmF0b3IgSUQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZXRBdHRyaWJ1dGVzIE9yaWdpbmFsIHNldEF0dHJpYnV0ZXMgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259IFdyYXBwZWQgc2V0QXR0cmlidXRlcyB0aGF0IGF1dG8tcHJlZml4ZXMga2V5cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdlbmVyYXRvclNldEF0dHJpYnV0ZXMoIGdlbmVyYXRvcklkLCBzZXRBdHRyaWJ1dGVzICkge1xuXHRyZXR1cm4gKCBzZXR0aW5ncyApID0+IHtcblx0XHRjb25zdCBwcmVmaXhlZFNldHRpbmdzID0ge307XG5cblx0XHRPYmplY3QuZW50cmllcyggc2V0dGluZ3MgKS5mb3JFYWNoKCAoIFsga2V5LCB2YWx1ZSBdICkgPT4ge1xuXHRcdFx0Ly8gSWYga2V5IGlzIGFscmVhZHkgcHJlZml4ZWQsIHVzZSBhcy1pc1xuXHRcdFx0aWYgKCBrZXkuc3RhcnRzV2l0aCggJ2dlbl8nICkgKSB7XG5cdFx0XHRcdHByZWZpeGVkU2V0dGluZ3NbIGtleSBdID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcmVmaXhlZFNldHRpbmdzWyBnZXRBdHRyaWJ1dGVOYW1lKCBnZW5lcmF0b3JJZCwga2V5ICkgXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHNldEF0dHJpYnV0ZXMoIHByZWZpeGVkU2V0dGluZ3MgKTtcblx0fTtcbn1cblxuLyoqXG4gKiBFeHBvcnQgcmVnaXN0cnkgdG8gZ2xvYmFsIHdpbmRvdyBvYmplY3QgZm9yIGV4dGVybmFsIGFjY2Vzcy5cbiAqXG4gKiBUaGlyZC1wYXJ0eSBkZXZlbG9wZXJzIGNhbiB1c2U6XG4gKiAtIHdpbmRvdy5KZXRGQkdlbmVyYXRvcnMucmVnaXN0ZXJDb250cm9scyggaWQsIENvbXBvbmVudCApXG4gKiAtIHdpbmRvdy5KZXRGQkdlbmVyYXRvcnMucmVnaXN0ZXJWYWxpZGF0b3IoIGlkLCB2YWxpZGF0b3IgKVxuICogLSB3aW5kb3cuSmV0RkJHZW5lcmF0b3JzLnJlZ2lzdGVyTWV0YSggaWQsIG1ldGEgKVxuICovXG5pZiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICkge1xuXHR3aW5kb3cuSmV0RkJHZW5lcmF0b3JzID0gd2luZG93LkpldEZCR2VuZXJhdG9ycyB8fCB7fTtcblxuXHRPYmplY3QuYXNzaWduKCB3aW5kb3cuSmV0RkJHZW5lcmF0b3JzLCB7XG5cdFx0cmVnaXN0ZXJDb250cm9sczogcmVnaXN0ZXJHZW5lcmF0b3JDb250cm9scyxcblx0XHR1bnJlZ2lzdGVyQ29udHJvbHM6IHVucmVnaXN0ZXJHZW5lcmF0b3JDb250cm9scyxcblx0XHRnZXRDb250cm9sczogZ2V0R2VuZXJhdG9yQ29udHJvbHMsXG5cdFx0aGFzQ3VzdG9tQ29udHJvbHMsXG5cdFx0Z2V0UmVnaXN0ZXJlZElkczogZ2V0UmVnaXN0ZXJlZEdlbmVyYXRvcklkcyxcblx0XHRyZWdpc3RlclZhbGlkYXRvcjogcmVnaXN0ZXJHZW5lcmF0b3JWYWxpZGF0b3IsXG5cdFx0Z2V0VmFsaWRhdG9yOiBnZXRHZW5lcmF0b3JWYWxpZGF0b3IsXG5cdFx0dmFsaWRhdGU6IHZhbGlkYXRlR2VuZXJhdG9yU2V0dGluZ3MsXG5cdFx0cmVnaXN0ZXJNZXRhOiByZWdpc3RlckdlbmVyYXRvck1ldGEsXG5cdFx0Z2V0TWV0YTogZ2V0R2VuZXJhdG9yTWV0YSxcblx0XHRnZXRBdHRyaWJ1dGVOYW1lLFxuXHRcdHBhcnNlU2V0dGluZ3M6IHBhcnNlU2V0dGluZ3NGcm9tQXR0cmlidXRlcyxcblx0XHRjcmVhdGVTZXRBdHRyaWJ1dGVzOiBjcmVhdGVHZW5lcmF0b3JTZXRBdHRyaWJ1dGVzLFxuXHR9ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cmVnaXN0ZXJHZW5lcmF0b3JDb250cm9scyxcblx0dW5yZWdpc3RlckdlbmVyYXRvckNvbnRyb2xzLFxuXHRnZXRHZW5lcmF0b3JDb250cm9scyxcblx0aGFzQ3VzdG9tQ29udHJvbHMsXG5cdGdldFJlZ2lzdGVyZWRHZW5lcmF0b3JJZHMsXG5cdHJlZ2lzdGVyR2VuZXJhdG9yVmFsaWRhdG9yLFxuXHRnZXRHZW5lcmF0b3JWYWxpZGF0b3IsXG5cdHZhbGlkYXRlR2VuZXJhdG9yU2V0dGluZ3MsXG5cdHJlZ2lzdGVyR2VuZXJhdG9yTWV0YSxcblx0Z2V0R2VuZXJhdG9yTWV0YSxcblx0Z2V0QXR0cmlidXRlTmFtZSxcblx0cGFyc2VTZXR0aW5nc0Zyb21BdHRyaWJ1dGVzLFxuXHRjcmVhdGVHZW5lcmF0b3JTZXRBdHRyaWJ1dGVzLFxufTtcbiIsIi8qKlxuICogU2NoZW1hLUJhc2VkIENvbnRyb2wgUmVuZGVyZXIuXG4gKlxuICogQXV0b21hdGljYWxseSBnZW5lcmF0ZXMgZm9ybSBjb250cm9scyBiYXNlZCBvbiBnZW5lcmF0b3Igc2NoZW1hIGRlZmluaXRpb25zLlxuICogVXNlZCBhcyB0aGUgZGVmYXVsdCByZW5kZXJlciB3aGVuIG5vIGN1c3RvbSBjb250cm9scyBhcmUgcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG5cdFRleHRhcmVhQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0QmFzZUNvbnRyb2wsXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcblxuLy8gSGFuZGxlIE51bWJlckNvbnRyb2wgYXZhaWxhYmlsaXR5IChleHBlcmltZW50YWwgaW4gc29tZSBXUCB2ZXJzaW9ucylcbmxldCBOdW1iZXJDb250cm9sID0gd3AuY29tcG9uZW50cy5OdW1iZXJDb250cm9sO1xuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XG59XG5cbi8qKlxuICogUmVuZGVycyBhIHNpbmdsZSBjb250cm9sIGJhc2VkIG9uIGZpZWxkIGRlZmluaXRpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMgICAgICAgICAgICAgQ29tcG9uZW50IHByb3BzLlxuICogQHBhcmFtIHtzdHJpbmd9ICAgcHJvcHMuZmllbGRLZXkgICAgRmllbGQga2V5IGZyb20gc2NoZW1hLlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMuZmllbGREZWYgICAgRmllbGQgZGVmaW5pdGlvbiBmcm9tIHNjaGVtYS5cbiAqIEBwYXJhbSB7Kn0gICAgICAgIHByb3BzLnZhbHVlICAgICAgIEN1cnJlbnQgZmllbGQgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vbkNoYW5nZSAgICBDaGFuZ2UgaGFuZGxlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIHByb3BzLmdlbmVyYXRvcklkIEdlbmVyYXRvciBJRCAoZm9yIHVuaXF1ZSBrZXlzKS5cbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudHxudWxsfSBDb250cm9sIGVsZW1lbnQgb3IgbnVsbC5cbiAqL1xuZnVuY3Rpb24gU2NoZW1hQ29udHJvbCggeyBmaWVsZEtleSwgZmllbGREZWYsIHZhbHVlLCBvbkNoYW5nZSwgZ2VuZXJhdG9ySWQgfSApIHtcblx0Y29uc3Qge1xuXHRcdHR5cGUgPSAnc3RyaW5nJyxcblx0XHRsYWJlbCA9IGZpZWxkS2V5LFxuXHRcdGhlbHAsXG5cdFx0cGxhY2Vob2xkZXIsXG5cdFx0Y29udHJvbCA9ICd0ZXh0Jyxcblx0XHRvcHRpb25zID0gW10sXG5cdFx0bWluLFxuXHRcdG1heCxcblx0XHRzdGVwID0gMSxcblx0XHRyb3dzID0gMyxcblx0XHRkaXNhYmxlZCA9IGZhbHNlLFxuXHRcdG11bHRpcGxlID0gZmFsc2UsXG5cdH0gPSBmaWVsZERlZjtcblxuXHRjb25zdCBjb250cm9sS2V5ID0gYCR7IGdlbmVyYXRvcklkIH0tJHsgZmllbGRLZXkgfWA7XG5cblx0c3dpdGNoICggY29udHJvbCApIHtcblx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgY29udHJvbEtleSB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1nZW5lcmF0b3ItY29udHJvbCBqZmItZ2VuZXJhdG9yLWNvbnRyb2wtLW51bWJlclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSA/PyAnJyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIE51bWJlckNvbnRyb2wgcmV0dXJucyBzdHJpbmcsIGNvbnZlcnQgdG8gbnVtYmVyIGlmIG5lZWRlZFxuXHRcdFx0XHRcdFx0XHRjb25zdCBudW1WYWx1ZSA9IG5ld1ZhbHVlID09PSAnJyA/ICcnIDogTnVtYmVyKCBuZXdWYWx1ZSApO1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSggbnVtVmFsdWUgKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0c3RlcD17IHN0ZXAgfVxuXHRcdFx0XHRcdFx0bWluPXsgbWluIH1cblx0XHRcdFx0XHRcdG1heD17IG1heCB9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IGRpc2FibGVkIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0KTtcblxuXHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHQvLyBOb3JtYWxpemUgb3B0aW9ucyB0byB7IHZhbHVlLCBsYWJlbCB9IGZvcm1hdFxuXHRcdFx0Y29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSBvcHRpb25zLm1hcCggKCBvcHQgKSA9PiB7XG5cdFx0XHRcdGlmICggdHlwZW9mIG9wdCA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgdmFsdWU6IG9wdCwgbGFiZWw6IG9wdCB9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcHQ7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgY29udHJvbEtleSB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxuXHRcdFx0XHRcdHZhbHVlPXsgbXVsdGlwbGUgPyAoIHZhbHVlID8/IFtdICkgOiAoIHZhbHVlID8/ICcnICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyBub3JtYWxpemVkT3B0aW9ucyB9XG5cdFx0XHRcdFx0bXVsdGlwbGU9eyBtdWx0aXBsZSB9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamZiLWdlbmVyYXRvci1jb250cm9sIGpmYi1nZW5lcmF0b3ItY29udHJvbC0tc2VsZWN0XCJcblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cblx0XHRjYXNlICd0b2dnbGUnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBjb250cm9sS2V5IH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17ICEhIHZhbHVlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG9uQ2hhbmdlIH1cblx0XHRcdFx0XHRkaXNhYmxlZD17IGRpc2FibGVkIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZmItZ2VuZXJhdG9yLWNvbnRyb2wgamZiLWdlbmVyYXRvci1jb250cm9sLS10b2dnbGVcIlxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblxuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBjb250cm9sS2V5IH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XG5cdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSA/PyAnJyB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkNoYW5nZSB9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBwbGFjZWhvbGRlciB9XG5cdFx0XHRcdFx0cm93cz17IHJvd3MgfVxuXHRcdFx0XHRcdGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1nZW5lcmF0b3ItY29udHJvbCBqZmItZ2VuZXJhdG9yLWNvbnRyb2wtLXRleHRhcmVhXCJcblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgY29udHJvbEtleSB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxuXHRcdFx0XHRcdHZhbHVlPXsgdmFsdWUgPz8gJycgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgcGxhY2Vob2xkZXIgfVxuXHRcdFx0XHRcdHR5cGU9eyB0eXBlID09PSAnbnVtYmVyJyA/ICdudW1iZXInIDogJ3RleHQnIH1cblx0XHRcdFx0XHRkaXNhYmxlZD17IGRpc2FibGVkIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZmItZ2VuZXJhdG9yLWNvbnRyb2wgamZiLWdlbmVyYXRvci1jb250cm9sLS10ZXh0XCJcblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZW5kZXJzIGFsbCBjb250cm9scyBmb3IgYSBnZW5lcmF0b3IgYmFzZWQgb24gaXRzIHNjaGVtYS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcyAgICAgICAgICAgICAgIENvbXBvbmVudCBwcm9wcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIHByb3BzLmdlbmVyYXRvcklkICAgR2VuZXJhdG9yIElELlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMuc2NoZW1hICAgICAgICBHZW5lcmF0b3Igc2NoZW1hIGRlZmluaXRpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcy5hdHRyaWJ1dGVzICAgIEJsb2NrIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5zZXRBdHRyaWJ1dGVzIEZ1bmN0aW9uIHRvIHVwZGF0ZSBhdHRyaWJ1dGVzLlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fG51bGx9IENvbnRyb2xzIG9yIG51bGwgaWYgbm8gc2NoZW1hLlxuICovXG5leHBvcnQgZnVuY3Rpb24gU2NoZW1hQmFzZWRDb250cm9scygge1xuXHRnZW5lcmF0b3JJZCxcblx0c2NoZW1hLFxuXHRhdHRyaWJ1dGVzLFxuXHRzZXRBdHRyaWJ1dGVzLFxufSApIHtcblx0aWYgKCAhIHNjaGVtYSB8fCBPYmplY3Qua2V5cyggc2NoZW1hICkubGVuZ3RoID09PSAwICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGF0dHJpYnV0ZSBrZXkgZm9yIGEgc2NoZW1hIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRLZXkgU2NoZW1hIGZpZWxkIGtleS5cblx0ICpcblx0ICogQHJldHVybiB7c3RyaW5nfSBCbG9jayBhdHRyaWJ1dGUga2V5LlxuXHQgKi9cblx0Y29uc3QgZ2V0QXR0cmlidXRlS2V5ID0gKCBmaWVsZEtleSApID0+IHtcblx0XHQvLyBGb3IgbGVnYWN5IGdlbmVyYXRvcnMgbGlrZSBudW1fcmFuZ2VfbWFudWFsLCB1c2UgZGlyZWN0IGF0dHJpYnV0ZSBuYW1lc1xuXHRcdGlmICggZmllbGRLZXkuc3RhcnRzV2l0aCggJ2dlbmVyYXRvcl8nICkgKSB7XG5cdFx0XHRyZXR1cm4gZmllbGRLZXk7XG5cdFx0fVxuXHRcdHJldHVybiBgZ2VuXyR7IGdlbmVyYXRvcklkIH1fJHsgZmllbGRLZXkgfWA7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgY3VycmVudCB2YWx1ZSBmb3IgYSBzY2hlbWEgZmllbGQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEtleSBTY2hlbWEgZmllbGQga2V5LlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZmllbGREZWYgRmllbGQgZGVmaW5pdGlvbi5cblx0ICpcblx0ICogQHJldHVybiB7Kn0gQ3VycmVudCB2YWx1ZS5cblx0ICovXG5cdGNvbnN0IGdldFZhbHVlID0gKCBmaWVsZEtleSwgZmllbGREZWYgKSA9PiB7XG5cdFx0Y29uc3QgYXR0cktleSA9IGdldEF0dHJpYnV0ZUtleSggZmllbGRLZXkgKTtcblxuXHRcdGlmICggYXR0cktleSBpbiBhdHRyaWJ1dGVzICkge1xuXHRcdFx0cmV0dXJuIGF0dHJpYnV0ZXNbIGF0dHJLZXkgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmllbGREZWYuZGVmYXVsdCA/PyAnJztcblx0fTtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBvbkNoYW5nZSBoYW5kbGVyIGZvciBhIHNjaGVtYSBmaWVsZC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkS2V5IFNjaGVtYSBmaWVsZCBrZXkuXG5cdCAqXG5cdCAqIEByZXR1cm4ge0Z1bmN0aW9ufSBDaGFuZ2UgaGFuZGxlci5cblx0ICovXG5cdGNvbnN0IGNyZWF0ZU9uQ2hhbmdlID0gKCBmaWVsZEtleSApID0+ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0Y29uc3QgYXR0cktleSA9IGdldEF0dHJpYnV0ZUtleSggZmllbGRLZXkgKTtcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IFsgYXR0cktleSBdOiBuZXdWYWx1ZSB9ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIGEgZmllbGQgc2hvdWxkIGJlIHZpc2libGUgYmFzZWQgb24gaXRzIGNvbmRpdGlvbi5cblx0ICpcblx0ICogQ29uZGl0aW9uIGZvcm1hdDogeyAnb3RoZXJfZmllbGRfa2V5JzogJ2V4cGVjdGVkX3ZhbHVlJyB9XG5cdCAqICAgLSBLZXkgd2l0aG91dCAnIScgc3VmZml4OiBzaG93IHdoZW4gdmFsdWUgbWF0Y2hlcyAoZXF1YWxzKVxuXHQgKiAgIC0gS2V5IHdpdGggJyEnIHN1ZmZpeDogICAgaGlkZSB3aGVuIHZhbHVlIG1hdGNoZXMgKG5vdCBlcXVhbHMpXG5cdCAqXG5cdCAqIE11bHRpcGxlIGVudHJpZXMgYXJlIEFORC1jb21iaW5lZDogYWxsIG11c3QgcGFzcy5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmRpdGlvbiBDb25kaXRpb24gZGVmaW5pdGlvbi5cblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBmaWVsZCBzaG91bGQgYmUgdmlzaWJsZS5cblx0ICovXG5cdGNvbnN0IGlzQ29uZGl0aW9uTWV0ID0gKCBjb25kaXRpb24gKSA9PiB7XG5cdFx0aWYgKCAhIGNvbmRpdGlvbiB8fCB0eXBlb2YgY29uZGl0aW9uICE9PSAnb2JqZWN0JyApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBPYmplY3QuZW50cmllcyggY29uZGl0aW9uICkuZXZlcnkoICggWyByYXdLZXksIGV4cGVjdGVkIF0gKSA9PiB7XG5cdFx0XHRjb25zdCBpc05lZ2F0ZWQgICAgPSByYXdLZXkuZW5kc1dpdGgoICchJyApO1xuXHRcdFx0Y29uc3QgY29uZGl0aW9uS2V5ID0gaXNOZWdhdGVkID8gcmF3S2V5LnNsaWNlKCAwLCAtMSApIDogcmF3S2V5O1xuXG5cdFx0XHQvLyBMb29rIHVwIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSByZWZlcmVuY2VkIGZpZWxkIGluIGF0dHJpYnV0ZXNcblx0XHRcdGNvbnN0IGNvbmRpdGlvbkZpZWxkRGVmID0gc2NoZW1hWyBjb25kaXRpb25LZXkgXTtcblx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSAgICAgID0gY29uZGl0aW9uRmllbGREZWZcblx0XHRcdFx0PyBnZXRWYWx1ZSggY29uZGl0aW9uS2V5LCBjb25kaXRpb25GaWVsZERlZiApXG5cdFx0XHRcdDogJyc7XG5cblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb2YgYWxsb3dlZCB2YWx1ZXNcblx0XHRcdGNvbnN0IG1hdGNoZXMgPSBBcnJheS5pc0FycmF5KCBleHBlY3RlZCApXG5cdFx0XHRcdD8gZXhwZWN0ZWQuaW5jbHVkZXMoIGN1cnJlbnRWYWx1ZSApXG5cdFx0XHRcdDogU3RyaW5nKCBjdXJyZW50VmFsdWUgKSA9PT0gU3RyaW5nKCBleHBlY3RlZCApO1xuXG5cdFx0XHRyZXR1cm4gaXNOZWdhdGVkID8gISBtYXRjaGVzIDogbWF0Y2hlcztcblx0XHR9ICk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHR7IE9iamVjdC5lbnRyaWVzKCBzY2hlbWEgKS5tYXAoICggWyBmaWVsZEtleSwgZmllbGREZWYgXSApID0+IHtcblx0XHRcdFx0aWYgKCBmaWVsZERlZi5jb25kaXRpb24gJiYgISBpc0NvbmRpdGlvbk1ldCggZmllbGREZWYuY29uZGl0aW9uICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gPFNjaGVtYUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBmaWVsZEtleSB9XG5cdFx0XHRcdFx0ZmllbGRLZXk9eyBmaWVsZEtleSB9XG5cdFx0XHRcdFx0ZmllbGREZWY9eyBmaWVsZERlZiB9XG5cdFx0XHRcdFx0dmFsdWU9eyBnZXRWYWx1ZSggZmllbGRLZXksIGZpZWxkRGVmICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgY3JlYXRlT25DaGFuZ2UoIGZpZWxkS2V5ICkgfVxuXHRcdFx0XHRcdGdlbmVyYXRvcklkPXsgZ2VuZXJhdG9ySWQgfVxuXHRcdFx0XHQvPjtcblx0XHRcdH0gKSB9XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIGEgbm90aWNlIHdoZW4gbm8gc2NoZW1hIGlzIGF2YWlsYWJsZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgICAgICAgICAgICAgICBDb21wb25lbnQgcHJvcHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZ2VuZXJhdG9ySWQgICBHZW5lcmF0b3IgSUQuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZ2VuZXJhdG9yTmFtZSBHZW5lcmF0b3IgZGlzcGxheSBuYW1lLlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBOb3RpY2UgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE5vU2NoZW1hTm90aWNlKCB7IGdlbmVyYXRvcklkLCBnZW5lcmF0b3JOYW1lIH0gKSB7XG5cdHJldHVybiAoXG5cdFx0PEJhc2VDb250cm9sIGNsYXNzTmFtZT1cImpmYi1nZW5lcmF0b3Itbm8tc2NoZW1hLW5vdGljZVwiPlxuXHRcdFx0PHA+XG5cdFx0XHRcdHsgX18oXG5cdFx0XHRcdFx0J1RoaXMgZ2VuZXJhdG9yIGRvZXMgbm90IGhhdmUgYSBjb25maWd1cmF0aW9uIHNjaGVtYS4nLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHQpIH1cblx0XHRcdDwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHQ8c21hbGw+XG5cdFx0XHRcdFx0eyBfXyggJ0dlbmVyYXRvciBJRDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9IHsgZ2VuZXJhdG9ySWQgfVxuXHRcdFx0XHQ8L3NtYWxsPlxuXHRcdFx0PC9wPlxuXHRcdDwvQmFzZUNvbnRyb2w+XG5cdCk7XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHZhbHVlcyBhZ2FpbnN0IHNjaGVtYSBkZWZpbml0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hICAgR2VuZXJhdG9yIHNjaGVtYS5cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgICBWYWx1ZXMgdG8gdmFsaWRhdGUuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBWYWxpZGF0aW9uIHJlc3VsdCB7IHZhbGlkOiBib29sZWFuLCBlcnJvcnM6IE9iamVjdCB9LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVBZ2FpbnN0U2NoZW1hKCBzY2hlbWEsIHZhbHVlcyApIHtcblx0Y29uc3QgZXJyb3JzID0ge307XG5cblx0T2JqZWN0LmVudHJpZXMoIHNjaGVtYSApLmZvckVhY2goICggWyBmaWVsZEtleSwgZmllbGREZWYgXSApID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IHZhbHVlc1sgZmllbGRLZXkgXTtcblxuXHRcdC8vIFJlcXVpcmVkIGNoZWNrXG5cdFx0aWYgKCBmaWVsZERlZi5yZXF1aXJlZCAmJiAoIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnICkgKSB7XG5cdFx0XHRlcnJvcnNbIGZpZWxkS2V5IF0gPSBfXyggJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU2tpcCBmdXJ0aGVyIHZhbGlkYXRpb24gaWYgZW1wdHkgYW5kIG5vdCByZXF1aXJlZFxuXHRcdGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVHlwZS1zcGVjaWZpYyB2YWxpZGF0aW9uXG5cdFx0c3dpdGNoICggZmllbGREZWYudHlwZSApIHtcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdGlmICggaXNOYU4oIE51bWJlciggdmFsdWUgKSApICkge1xuXHRcdFx0XHRcdGVycm9yc1sgZmllbGRLZXkgXSA9IF9fKCAnTXVzdCBiZSBhIHZhbGlkIG51bWJlci4nLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBudW1WYWx1ZSA9IE51bWJlciggdmFsdWUgKTtcblx0XHRcdFx0XHRpZiAoIGZpZWxkRGVmLm1pbiAhPT0gdW5kZWZpbmVkICYmIG51bVZhbHVlIDwgZmllbGREZWYubWluICkge1xuXHRcdFx0XHRcdFx0ZXJyb3JzWyBmaWVsZEtleSBdID0gYCR7IF9fKCAnTWluaW11bSB2YWx1ZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9ICR7IGZpZWxkRGVmLm1pbiB9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBmaWVsZERlZi5tYXggIT09IHVuZGVmaW5lZCAmJiBudW1WYWx1ZSA+IGZpZWxkRGVmLm1heCApIHtcblx0XHRcdFx0XHRcdGVycm9yc1sgZmllbGRLZXkgXSA9IGAkeyBfXyggJ01heGltdW0gdmFsdWU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfSAkeyBmaWVsZERlZi5tYXggfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdib29sZWFuJzpcblx0XHRcdFx0aWYgKCB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJyApIHtcblx0XHRcdFx0XHQvLyBUcnkgdG8gY29lcmNlXG5cdFx0XHRcdFx0aWYgKCB2YWx1ZSAhPT0gJ3RydWUnICYmIHZhbHVlICE9PSAnZmFsc2UnICYmIHZhbHVlICE9PSAwICYmIHZhbHVlICE9PSAxICkge1xuXHRcdFx0XHRcdFx0ZXJyb3JzWyBmaWVsZEtleSBdID0gX18oICdNdXN0IGJlIHRydWUgb3IgZmFsc2UuJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSApO1xuXG5cdHJldHVybiB7XG5cdFx0dmFsaWQ6IE9iamVjdC5rZXlzKCBlcnJvcnMgKS5sZW5ndGggPT09IDAsXG5cdFx0ZXJyb3JzLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdFNjaGVtYUJhc2VkQ29udHJvbHMsXG5cdFNjaGVtYUNvbnRyb2wsXG5cdE5vU2NoZW1hTm90aWNlLFxuXHR2YWxpZGF0ZUFnYWluc3RTY2hlbWEsXG59O1xuIiwiLyoqXG4gKiBTbG90L0ZpbGwgc3lzdGVtIGZvciBnZW5lcmF0b3IgY29udHJvbHMuXG4gKlxuICogUHJvdmlkZXMgZXh0ZW5zaWJpbGl0eSBwb2ludHMgZm9yIGdlbmVyYXRvci1zcGVjaWZpYyBVSSBjb250cm9sc1xuICogdXNpbmcgV29yZFByZXNzIEd1dGVuYmVyZydzIFNsb3QvRmlsbCBwYXR0ZXJuLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuY29uc3QgeyBjcmVhdGVTbG90RmlsbCB9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBNYWluIHNsb3QgZm9yIGdlbmVyYXRvci1zcGVjaWZpYyBjb250cm9scy5cbiAqXG4gKiBFYWNoIGdlbmVyYXRvciB0eXBlIGNhbiByZWdpc3RlciBhIEZpbGwgZm9yIHRoaXMgc2xvdCB0byBwcm92aWRlXG4gKiBpdHMgb3duIGN1c3RvbSBjb250cm9scy4gVGhlIEZpbGwgcmVjZWl2ZXMgcHJvcHMgdmlhIGZpbGxQcm9wczpcbiAqIC0gYXR0cmlidXRlczogQmxvY2sgYXR0cmlidXRlc1xuICogLSBzZXRBdHRyaWJ1dGVzOiBGdW5jdGlvbiB0byB1cGRhdGUgYXR0cmlidXRlc1xuICogLSBnZW5lcmF0b3JJZDogQ3VycmVudCBnZW5lcmF0b3IgSURcbiAqIC0gc2NoZW1hOiBHZW5lcmF0b3Igc2NoZW1hIGRlZmluaXRpb25cbiAqXG4gKiBVc2FnZSBpbiBhIEZpbGw6XG4gKiBgYGBqc1xuICogaW1wb3J0IHsgR2VuZXJhdG9yQ29udHJvbHNGaWxsIH0gZnJvbSAnLi9zbG90LWZpbGwnO1xuICpcbiAqIGNvbnN0IE15R2VuZXJhdG9yQ29udHJvbHMgPSAoKSA9PiAoXG4gKiAgIDxHZW5lcmF0b3JDb250cm9sc0ZpbGw+XG4gKiAgICAgeyAoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgZ2VuZXJhdG9ySWQsIHNjaGVtYSB9ICkgPT4gKFxuICogICAgICAgZ2VuZXJhdG9ySWQgPT09ICdteV9nZW5lcmF0b3InICYmIChcbiAqICAgICAgICAgPFRleHRDb250cm9sIC4uLiAvPlxuICogICAgICAgKVxuICogICAgICkgfVxuICogICA8L0dlbmVyYXRvckNvbnRyb2xzRmlsbD5cbiAqICk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IHtcblx0RmlsbDogR2VuZXJhdG9yQ29udHJvbHNGaWxsLFxuXHRTbG90OiBHZW5lcmF0b3JDb250cm9sc1Nsb3QsXG59ID0gY3JlYXRlU2xvdEZpbGwoICdKRkJHZW5lcmF0b3JDb250cm9scycgKTtcblxuLyoqXG4gKiBTbG90IGZvciBhZGRpdGlvbmFsL2NvbW1vbiBjb250cm9scyBhZnRlciBnZW5lcmF0b3Itc3BlY2lmaWMgb25lcy5cbiAqXG4gKiBUaGlzIHNsb3QgaXMgcmVuZGVyZWQgYWZ0ZXIgdGhlIG1haW4gZ2VuZXJhdG9yIGNvbnRyb2xzIGFuZCBjYW4gYmUgdXNlZFxuICogZm9yIGNvbnRyb2xzIHRoYXQgYXJlIGNvbW1vbiBhY3Jvc3MgbXVsdGlwbGUgZ2VuZXJhdG9ycywgbGlrZTpcbiAqIC0gVmFsdWUgZnJvbSBtZXRhIGZpZWxkXG4gKiAtIENhbGN1bGF0ZWQgdmFsdWUgZnJvbSBtZXRhIGZpZWxkXG4gKlxuICogVXNhZ2U6XG4gKiBgYGBqc1xuICogaW1wb3J0IHsgR2VuZXJhdG9yQWRkaXRpb25hbEZpbGwgfSBmcm9tICcuL3Nsb3QtZmlsbCc7XG4gKlxuICogY29uc3QgQWRkaXRpb25hbENvbnRyb2xzID0gKCkgPT4gKFxuICogICA8R2VuZXJhdG9yQWRkaXRpb25hbEZpbGw+XG4gKiAgICAgeyAoIHByb3BzICkgPT4gKFxuICogICAgICAgPFRleHRDb250cm9sIC4uLiAvPlxuICogICAgICkgfVxuICogICA8L0dlbmVyYXRvckFkZGl0aW9uYWxGaWxsPlxuICogKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3Qge1xuXHRGaWxsOiBHZW5lcmF0b3JBZGRpdGlvbmFsRmlsbCxcblx0U2xvdDogR2VuZXJhdG9yQWRkaXRpb25hbFNsb3QsXG59ID0gY3JlYXRlU2xvdEZpbGwoICdKRkJHZW5lcmF0b3JBZGRpdGlvbmFsJyApO1xuXG4vKipcbiAqIFNsb3QgZm9yIGF1dG8tdXBkYXRlIGNvbnRyb2xzLlxuICpcbiAqIFRoaXMgc2xvdCByZW5kZXJzIHRoZSBhdXRvLXVwZGF0ZSB0b2dnbGUgYW5kIGZpZWxkIHNlbGVjdG9yXG4gKiB3aGVuIGEgZ2VuZXJhdG9yIHN1cHBvcnRzIGNhc2NhZGluZyB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3Qge1xuXHRGaWxsOiBBdXRvVXBkYXRlQ29udHJvbHNGaWxsLFxuXHRTbG90OiBBdXRvVXBkYXRlQ29udHJvbHNTbG90LFxufSA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCQXV0b1VwZGF0ZUNvbnRyb2xzJyApO1xuXG4vKipcbiAqIFNsb3QgZm9yIGJlZm9yZSBnZW5lcmF0b3Igc2VsZWN0b3IuXG4gKlxuICogQ2FuIGJlIHVzZWQgdG8gYWRkIGNvbnRlbnQgYmVmb3JlIHRoZSBnZW5lcmF0b3IgdHlwZSBkcm9wZG93bixcbiAqIGxpa2Ugbm90aWNlcyBvciBpbmZvcm1hdGlvbmFsIHRleHQuXG4gKi9cbmV4cG9ydCBjb25zdCB7XG5cdEZpbGw6IEJlZm9yZUdlbmVyYXRvclNlbGVjdG9yRmlsbCxcblx0U2xvdDogQmVmb3JlR2VuZXJhdG9yU2VsZWN0b3JTbG90LFxufSA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCQmVmb3JlR2VuZXJhdG9yU2VsZWN0b3InICk7XG5cbi8qKlxuICogU2xvdCBmb3IgYWZ0ZXIgYWxsIGdlbmVyYXRvciBjb250cm9scy5cbiAqXG4gKiBSZW5kZXJlZCBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIGdlbmVyYXRvciBzZXR0aW5ncyBwYW5lbC5cbiAqIFVzZWZ1bCBmb3IgYWRkaW5nIGRlYnVnIGluZm8sIGhlbHAgbGlua3MsIGV0Yy5cbiAqL1xuZXhwb3J0IGNvbnN0IHtcblx0RmlsbDogQWZ0ZXJHZW5lcmF0b3JDb250cm9sc0ZpbGwsXG5cdFNsb3Q6IEFmdGVyR2VuZXJhdG9yQ29udHJvbHNTbG90LFxufSA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCQWZ0ZXJHZW5lcmF0b3JDb250cm9scycgKTtcblxuLyoqXG4gKiBFeHBvcnQgYWxsIHNsb3RzIGFuZCBmaWxscyBmb3IgZXh0ZXJuYWwgdXNlLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdEdlbmVyYXRvckNvbnRyb2xzRmlsbCxcblx0R2VuZXJhdG9yQ29udHJvbHNTbG90LFxuXHRHZW5lcmF0b3JBZGRpdGlvbmFsRmlsbCxcblx0R2VuZXJhdG9yQWRkaXRpb25hbFNsb3QsXG5cdEF1dG9VcGRhdGVDb250cm9sc0ZpbGwsXG5cdEF1dG9VcGRhdGVDb250cm9sc1Nsb3QsXG5cdEJlZm9yZUdlbmVyYXRvclNlbGVjdG9yRmlsbCxcblx0QmVmb3JlR2VuZXJhdG9yU2VsZWN0b3JTbG90LFxuXHRBZnRlckdlbmVyYXRvckNvbnRyb2xzRmlsbCxcblx0QWZ0ZXJHZW5lcmF0b3JDb250cm9sc1Nsb3QsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHNlbGVjdCBmcm9tICcuL2Jsb2Nrcy9zZWxlY3QnO1xuaW1wb3J0ICogYXMgY2hlY2tib3ggZnJvbSAnLi9ibG9ja3MvY2hlY2tib3gnO1xuaW1wb3J0ICogYXMgcmFkaW8gZnJvbSAnLi9ibG9ja3MvcmFkaW8nO1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEZpbHRlcixcbiAgICAgIH0gPSB3cC5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3NlbGVjdCcsXG5cdGZ1bmN0aW9uICggYmxvY2tzICkge1xuXHRcdGJsb2Nrcy5wdXNoKFxuXHRcdFx0c2VsZWN0LFxuXHRcdFx0Y2hlY2tib3gsXG5cdFx0XHRyYWRpb1xuXHRcdCk7XG5cblx0XHRyZXR1cm4gYmxvY2tzO1xuXHR9LFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=