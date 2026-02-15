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

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/checkbox-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","checkbox"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false,"jetFBSanitizeValue":true},"title":"Checkbox Field","description":"","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M6 15C6 12.7909 7.79086 11 10 11H20C22.2091 11 24 12.7909 24 15V25C24 27.2091 22.2091 29 20 29H10C7.79086 29 6 27.2091 6 25V15ZM10 13H20C21.1046 13 22 13.8954 22 15V25C22 26.1046 21.1046 27 20 27H10C8.89543 27 8 26.1046 8 25V15C8 13.8954 8.89543 13 10 13Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 18C28 17.4477 28.4477 17 29 17H57C57.5523 17 58 17.4477 58 18C58 18.5523 57.5523 19 57 19H29C28.4477 19 28 18.5523 28 18Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 22C28 21.4477 28.4477 21 29 21H48C48.5523 21 49 21.4477 49 22C49 22.5523 48.5523 23 48 23H29C28.4477 23 28 22.5523 28 22Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M19.6402 40.2318C20.0645 40.5854 20.1218 41.2159 19.7682 41.6402L14.7682 47.6402C14.5884 47.856 14.326 47.9863 14.0453 47.999C13.7646 48.0117 13.4916 47.9058 13.2929 47.7071L10.2929 44.7071C9.90237 44.3166 9.90237 43.6834 10.2929 43.2929C10.6834 42.9024 11.3166 42.9024 11.7071 43.2929L13.9328 45.5186L18.2318 40.3598C18.5853 39.9356 19.2159 39.8782 19.6402 40.2318Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M6 39C6 36.7909 7.79086 35 10 35H20C22.2091 35 24 36.7909 24 39V49C24 51.2091 22.2091 53 20 53H10C7.79086 53 6 51.2091 6 49V39ZM10 37H20C21.1046 37 22 37.8954 22 39V49C22 50.1046 21.1046 51 20 51H10C8.89543 51 8 50.1046 8 49V39C8 37.8954 8.89543 37 10 37Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M29 41C28.4477 41 28 41.4477 28 42C28 42.5523 28.4477 43 29 43H57C57.5523 43 58 42.5523 58 42C58 41.4477 57.5523 41 57 41H29Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 46C28 45.4477 28.4477 45 29 45H48C48.5523 45 49 45.4477 49 46C49 46.5523 48.5523 47 48 47H29C28.4477 47 28 46.5523 28 46Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 9C0 6.79086 1.79086 5 4 5H60C62.2091 5 64 6.79086 64 9V55C64 57.2091 62.2091 59 60 59H4C1.79086 59 0 57.2091 0 55V9ZM4 7H60C61.1046 7 62 7.89543 62 9V55C62 56.1046 61.1046 57 60 57H4C2.89543 57 2 56.1046 2 55V9C2 7.89543 2.89543 7 4 7Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"value":{"type":"object","default":{}},"validation":{"type":"object","default":{}},"custom_option":{"type":"object","default":{"allow":false,"label":"+ Add New"}},"custom_item_template":{"type":"boolean","default":false},"custom_item_template_id":{"type":"string","default":""},"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"generator_args":{"type":"object","default":{}},"generator_auto_update":{"type":"boolean","default":false},"generator_listen_field":{"type":["string","array"],"default":""},"generator_listen_all":{"type":"boolean","default":false},"generator_update_on_button":{"type":"string","default":""},"generator_cache_timeout":{"type":"number","default":60},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"default":{"type":"string","default":"","jfb":{"rich-no-preset":true}},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":"","jfb":{"rich":true}},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewStyle":"jet-fb-option-field-checkbox","style":"jet-fb-option-field-checkbox"}');

/***/ }),

/***/ "../../shared/blocks/radio/block.json":
/*!********************************************!*\
  !*** ../../shared/blocks/radio/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/radio-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","radio"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false,"jetFBSwitchPageOnChange":true,"jetFBSanitizeValue":true},"title":"Radio Field","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M6 43C6 38.0294 10.0294 34 15 34C19.9706 34 24 38.0294 24 43C24 47.9706 19.9706 52 15 52C10.0294 52 6 47.9706 6 43ZM15 50C11.134 50 8 46.866 8 43C8 39.134 11.134 36 15 36C18.866 36 22 39.134 22 43C22 46.866 18.866 50 15 50Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 41C28 40.4477 28.4477 40 29 40H57C57.5523 40 58 40.4477 58 41C58 41.5523 57.5523 42 57 42H29C28.4477 42 28 41.5523 28 41Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M29 44C28.4477 44 28 44.4477 28 45C28 45.5523 28.4477 46 29 46H48C48.5523 46 49 45.5523 49 45C49 44.4477 48.5523 44 48 44H29Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M28 19C28 18.4477 28.4477 18 29 18H57C57.5523 18 58 18.4477 58 19C58 19.5523 57.5523 20 57 20H29C28.4477 20 28 19.5523 28 19Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M29 22C28.4477 22 28 22.4477 28 23C28 23.5523 28.4477 24 29 24H48C48.5523 24 49 23.5523 49 23C49 22.4477 48.5523 22 48 22H29Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M19 21C19 23.2091 17.2091 25 15 25C12.7909 25 11 23.2091 11 21C11 18.7909 12.7909 17 15 17C17.2091 17 19 18.7909 19 21ZM17 21C17 22.1046 16.1046 23 15 23C13.8954 23 13 22.1046 13 21C13 19.8954 13.8954 19 15 19C16.1046 19 17 19.8954 17 21Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M15 12C10.0294 12 6 16.0294 6 21C6 25.9706 10.0294 30 15 30C19.9706 30 24 25.9706 24 21C24 16.0294 19.9706 12 15 12ZM8 21C8 24.866 11.134 28 15 28C18.866 28 22 24.866 22 21C22 17.134 18.866 14 15 14C11.134 14 8 17.134 8 21Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 9C0 6.79086 1.79086 5 4 5H60C62.2091 5 64 6.79086 64 9V55C64 57.2091 62.2091 59 60 59H4C1.79086 59 0 57.2091 0 55V9ZM4 7H60C61.1046 7 62 7.89543 62 9V55C62 56.1046 61.1046 57 60 57H4C2.89543 57 2 56.1046 2 55V9C2 7.89543 2.89543 7 4 7Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"value":{"type":"object","default":{}},"validation":{"type":"object","default":{}},"custom_option":{"type":"boolean","default":false},"custom_item_template":{"type":"boolean","default":false},"custom_item_template_id":{"type":"string","default":""},"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"generator_args":{"type":"object","default":{}},"generator_auto_update":{"type":"boolean","default":false},"generator_listen_field":{"type":["string","array"],"default":""},"generator_listen_all":{"type":"boolean","default":false},"generator_update_on_button":{"type":"string","default":""},"generator_cache_timeout":{"type":"number","default":60},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"default":{"type":"string","default":"","jfb":{"rich-no-preset":true}},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":"","jfb":{"rich":true}},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewStyle":"jet-fb-option-field-radio","style":"jet-fb-option-field-radio"}');

/***/ }),

/***/ "../../shared/blocks/select/block.json":
/*!*********************************************!*\
  !*** ../../shared/blocks/select/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/select-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","select"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false,"jetFBSwitchPageOnChange":true,"jetFBSanitizeValue":true},"title":"Select Field","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path d=\\"M52.7071 15.707L50 18.4141L47.2929 15.707C46.9024 15.3164 46.9024 14.6833 47.2929 14.2927C47.6834 13.9022 48.3166 13.9022 48.7071 14.2927L50 15.5856L51.2929 14.2927C51.6834 13.9022 52.3166 13.9022 52.7071 14.2927C53.0976 14.6833 53.0976 15.3164 52.7071 15.707Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M45 7C42.7909 7 41 8.79086 41 11V21C41 23.2091 42.7909 25 45 25H55C57.2091 25 59 23.2091 59 21V11C59 8.79086 57.2091 7 55 7H45ZM55 9H45C43.8954 9 43 9.89543 43 11V21C43 22.1046 43.8954 23 45 23H55C56.1046 23 57 22.1046 57 21V11C57 9.89543 56.1046 9 55 9Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 6C0 3.79086 1.79086 2 4 2H60C62.2091 2 64 3.79086 64 6V26C64 28.2091 62.2091 30 60 30H4C1.79086 30 0 28.2091 0 26V6ZM4 4H60C61.1046 4 62 4.89543 62 6V26C62 27.1046 61.1046 28 60 28H4C2.89543 28 2 27.1046 2 26V6C2 4.89543 2.89543 4 4 4Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M52.7071 47.707L50 50.4141L47.2929 47.707C46.9024 47.3164 46.9024 46.6833 47.2929 46.2927C47.6834 45.9022 48.3166 45.9022 48.7071 46.2927L50 47.5856L51.2929 46.2927C51.6834 45.9022 52.3166 45.9022 52.7071 46.2927C53.0976 46.6833 53.0976 47.3164 52.7071 47.707Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M45 39C42.7909 39 41 40.7909 41 43V53C41 55.2091 42.7909 57 45 57H55C57.2091 57 59 55.2091 59 53V43C59 40.7909 57.2091 39 55 39H45ZM57 43C57 41.8954 56.1046 41 55 41H45C43.8954 41 43 41.8954 43 43V53C43 54.1046 43.8954 55 45 55H55C56.1046 55 57 54.1046 57 53V43Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 38C0 35.7909 1.79086 34 4 34H60C62.2091 34 64 35.7909 64 38V58C64 60.2091 62.2091 62 60 62H4C1.79086 62 0 60.2091 0 58V38ZM4 36H60C61.1046 36 62 36.8954 62 38V58C62 59.1046 61.1046 60 60 60H4C2.89543 60 2 59.1046 2 58V38C2 36.8954 2.89543 36 4 36Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"value":{"type":"object","default":{}},"validation":{"type":"object","default":{}},"multiple":{"type":"boolean","default":false},"multiple_size":{"type":"number","default":4},"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"is_disabled_placeholder":{"type":"boolean","default":false},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"generator_args":{"type":"object","default":{}},"generator_auto_update":{"type":"boolean","default":false},"generator_listen_field":{"type":["string","array"],"default":""},"generator_listen_all":{"type":"boolean","default":false},"generator_update_on_button":{"type":"string","default":""},"generator_cache_timeout":{"type":"number","default":60},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"default":{"type":"string","default":"","jfb":{"rich-no-preset":true}},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":"","jfb":{"rich":true}},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewScript":"jet-fb-option-field-select","style":"jet-fb-option-field-select"}');

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
    const {
      field_options_from,
      field_options_post_type,
      field_options_tax,
      field_options_key,
      generator_function,
      generator_field
    } = attributes;
    let full_label = [];
    let value = [];
    switch (field_options_from) {
      case 'posts':
        if (field_options_post_type) {
          value.push(getLabelProp(scriptData.post_types_list.find(option => option.value === field_options_post_type)));
        }
        break;
      case 'terms':
        if (field_options_tax) {
          value.push(getLabelProp(scriptData.taxonomies_list.find(option => option.value === field_options_tax)));
        }
        break;
      case 'meta_field':
        if (field_options_key) {
          value.push(field_options_key);
        }
        break;
      case 'generate':
        if (generator_function) {
          value.push(getLabelProp(scriptData.generators_list.find(option => option.value === generator_function)));
        }
        if (generator_field) {
          value.push(generator_field);
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
  }, ('manual_input' !== attributes.field_options_from || !attributes.field_options.length) && getManualField(getFullLabel(scriptData, attributes)) || null, 'manual_input' === attributes.field_options_from && attributes.field_options.length && getManualField() || null));
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
  var _schemas$generatorId, _generatorData$schema, _generatorData$suppor;
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
    supportsUpdate: supportsUpdate
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
  TextControl
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
 * Get form fields from block editor.
 * Extracts field name and label from all field blocks in the current form.
 *
 * @return {Array} Array of { name, label } objects.
 */
function getFormFields() {
  var _select$getBlocks;
  const blocks = (_select$getBlocks = select('core/block-editor')?.getBlocks()) !== null && _select$getBlocks !== void 0 ? _select$getBlocks : [];
  const fields = [];
  const extractFields = blocksList => {
    blocksList.forEach(block => {
      // Check if block has a 'name' attribute (it's a field)
      if (block.attributes?.name) {
        fields.push({
          name: block.attributes.name,
          label: block.attributes.label || block.attributes.name,
          type: block.name
        });
      }

      // Recursively check inner blocks
      if (block.innerBlocks?.length) {
        extractFields(block.innerBlocks);
      }
    });
  };
  extractFields(blocks);
  return fields;
}

/**
 * Auto-Update Controls.
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 * @param {boolean}  props.supportsUpdate Whether generator supports auto-update.
 *
 * @return {JSX.Element|null} Controls or null if not supported.
 */
function AutoUpdateControls({
  attributes,
  setAttributes,
  supportsUpdate
}) {
  if (!supportsUpdate) {
    return null;
  }
  const {
    generator_auto_update: autoUpdate = false,
    generator_listen_field: listenField = '',
    generator_cache_timeout: cacheTimeout = 60
  } = attributes;

  // Normalize listen_field to array for consistent handling
  const listenFieldArray = Array.isArray(listenField) ? listenField : listenField ? [listenField] : [];

  // Get available form fields for listening
  // useMemo to avoid recalculating on every render
  const fieldOptions = useMemo(() => {
    const formFields = getFormFields();
    return formFields.map(field => ({
      value: field.name,
      label: `${field.label} (${field.name})`
    }));
  }, []); // Empty deps - will be calculated once on mount

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Enable Auto-Update', 'jet-form-builder'),
    help: __('Update options dynamically when another field value changes.', 'jet-form-builder'),
    checked: autoUpdate,
    onChange: value => {
      setAttributes({
        generator_auto_update: value,
        // Clear listen field if disabling
        ...(!value && {
          generator_listen_field: ''
        })
      });
    },
    className: "jfb-auto-update-toggle"
  }), autoUpdate && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Listen to Fields', 'jet-form-builder'),
    help: __('Select one or more fields to watch for changes.', 'jet-form-builder'),
    multiple: true,
    value: listenFieldArray,
    onChange: values => {
      // Handle empty selection
      if (!values || values.length === 0) {
        setAttributes({
          generator_listen_field: ''
        });
        return;
      }

      // Store as string if single, array if multiple (backwards compat)
      setAttributes({
        generator_listen_field: values.length === 1 ? values[0] : values
      });
    },
    options: fieldOptions,
    className: "jfb-auto-update-field-selector"
  }), autoUpdate && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Cache Timeout (seconds)', 'jet-form-builder'),
    help: __('How long to cache results. Set to 0 to disable caching.', 'jet-form-builder'),
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, Object.entries(schema).map(([fieldKey, fieldDef]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SchemaControl, {
    key: fieldKey,
    fieldKey: fieldKey,
    fieldDef: fieldDef,
    value: getValue(fieldKey, fieldDef),
    onChange: createOnChange(fieldKey),
    generatorId: generatorId
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFLQTtBQUFBO0FBSUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFRQTtBQUVBOzs7Ozs7Ozs7Ozs7QUN2SUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7OztBQzNFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcExBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQWFBO0FBQ0E7O0FBZ0JBO0FBQ0E7O0FBTUE7QUFDQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBY0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNsSEE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBTUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9lbW90aW9uLWlzLXByb3AtdmFsaWQuZXNtLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuZXNtLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BsaW5hcmlhL2NvcmUvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvcmVhY3QvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9ibG9ja3MvY2hlY2tib3gvZWRpdC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2Jsb2Nrcy9jaGVja2JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2Jsb2Nrcy9jaGVja2JveC9pbmRleC5wY3NzP2M0MTciLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9ibG9ja3MvY2hlY2tib3gvcHJldmlldy5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2Jsb2Nrcy9yYWRpby9lZGl0LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvYmxvY2tzL3JhZGlvL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvYmxvY2tzL3JhZGlvL2luZGV4LnBjc3M/MGU1ZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2Jsb2Nrcy9yYWRpby9wcmV2aWV3LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvYmxvY2tzL3NlbGVjdC9lZGl0LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvYmxvY2tzL3NlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2Jsb2Nrcy9zZWxlY3QvcHJldmlldy5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvQ3VzdG9tVGVtcGxhdGVDb250cm9scy5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvRnJvbU1hbnVhbC9CdWxrT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvRnJvbU1hbnVhbC9CdWxrT3B0aW9ucy5qcz81YWVkIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvY29tcG9uZW50cy9Gcm9tTWFudWFsL0Zyb21NYW51YWxGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9jb21wb25lbnRzL0Zyb21NYW51YWwvRnJvbU1hbnVhbEZpZWxkc0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9jb21wb25lbnRzL0Zyb21NYW51YWwvRnJvbU1hbnVhbE9wdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9jb21wb25lbnRzL0Zyb21NYW51YWwvRnJvbU1hbnVhbE9wdGlvbkl0ZW0uanM/YWEyMiIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvRnJvbU1hbnVhbC9Gcm9tTWFudWFsT3B0aW9uc0NvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvRnJvbU1hbnVhbC9mcm9tQnVsay5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvRnJvbU1hbnVhbC90b0J1bGsuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9jb21wb25lbnRzL0Zyb21Qb3N0VGVybXNGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9jb21wb25lbnRzL1NlbGVjdFJhZGlvQ2hlY2suanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9jb21wb25lbnRzL1NlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2NvbXBvbmVudHMvc291cmNlcy5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2dlbmVyYXRvcnMvR2VuZXJhdG9yU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2VkaXRvci9nZW5lcmF0b3JzL2NvbXBvbmVudHMvQXV0b1VwZGF0ZUNvbnRyb2xzLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvZ2VuZXJhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2dlbmVyYXRvcnMvbGVnYWN5LWNvbnRyb2xzLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvZ2VuZXJhdG9ycy9yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL2dlbmVyYXRvcnMvc2NoZW1hLXJlbmRlcmVyLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9lZGl0b3IvZ2VuZXJhdG9ycy9zbG90LWZpbGwuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZWRpdG9yL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFiYnJ8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZGlzYWJsZVJlbW90ZVBsYXliYWNrfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGVudGVyS2V5SGludHxmZXRjaHByaW9yaXR5fGZldGNoUHJpb3JpdHl8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0cmFuc2xhdGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmNyZW1lbnRhbHxmYWxsYmFja3xpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258b3B0aW9ufHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGlzUHJvcFZhbGlkID0gLyogI19fUFVSRV9fICovbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgeyBpc1Byb3BWYWxpZCBhcyBkZWZhdWx0IH07XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCB7IG1lbW9pemUgYXMgZGVmYXVsdCB9O1xuIiwiLy8gc3JjL2Nzcy50c1xudmFyIGlkeCA9IDA7XG52YXIgY3NzID0gKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgcmV0dXJuIGBtb2NrZWQtY3NzLSR7aWR4Kyt9YDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1VzaW5nIHRoZSBcImNzc1wiIHRhZyBpbiBydW50aW1lIGlzIG5vdCBzdXBwb3J0ZWQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBzZXQgdXAgdGhlIEJhYmVsIHBsdWdpbiBjb3JyZWN0bHkuJ1xuICApO1xufTtcbnZhciBjc3NfZGVmYXVsdCA9IGNzcztcblxuLy8gc3JjL2N4LnRzXG52YXIgY3ggPSBmdW5jdGlvbiBjeDIoKSB7XG4gIGNvbnN0IHByZXNlbnRDbGFzc05hbWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IGF0b21pY0NsYXNzZXMgPSB7fTtcbiAgY29uc3Qgbm9uQXRvbWljQ2xhc3NlcyA9IFtdO1xuICBwcmVzZW50Q2xhc3NOYW1lcy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICBjb25zdCBpbmRpdmlkdWFsQ2xhc3NOYW1lcyA9IGFyZyA/IGFyZy5zcGxpdChcIiBcIikgOiBbXTtcbiAgICBpbmRpdmlkdWFsQ2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aChcImF0bV9cIikpIHtcbiAgICAgICAgY29uc3QgWywga2V5SGFzaF0gPSBjbGFzc05hbWUuc3BsaXQoXCJfXCIpO1xuICAgICAgICBhdG9taWNDbGFzc2VzW2tleUhhc2hdID0gY2xhc3NOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uQXRvbWljQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChjb25zdCBrZXlIYXNoIGluIGF0b21pY0NsYXNzZXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF0b21pY0NsYXNzZXMsIGtleUhhc2gpKSB7XG4gICAgICByZXN1bHQucHVzaChhdG9taWNDbGFzc2VzW2tleUhhc2hdKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goLi4ubm9uQXRvbWljQ2xhc3Nlcyk7XG4gIHJldHVybiByZXN1bHQuam9pbihcIiBcIik7XG59O1xudmFyIGN4X2RlZmF1bHQgPSBjeDtcbmV4cG9ydCB7XG4gIGNzc19kZWZhdWx0IGFzIGNzcyxcbiAgY3hfZGVmYXVsdCBhcyBjeFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBzcmMvc3R5bGVkLnRzXG5pbXBvcnQgdmFsaWRBdHRyIGZyb20gXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjeCB9IGZyb20gXCJAbGluYXJpYS9jb3JlXCI7XG52YXIgaXNDYXBpdGFsID0gKGNoKSA9PiBjaC50b1VwcGVyQ2FzZSgpID09PSBjaDtcbnZhciBmaWx0ZXJLZXkgPSAoa2V5cykgPT4gKGtleSkgPT4ga2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xudmFyIG9taXQgPSAob2JqLCBrZXlzKSA9PiB7XG4gIGNvbnN0IHJlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZpbHRlcihmaWx0ZXJLZXkoa2V5cykpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHJlc1trZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufTtcbmZ1bmN0aW9uIGZpbHRlclByb3BzKGFzSXMsIHByb3BzLCBvbWl0S2V5cykge1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gb21pdChwcm9wcywgb21pdEtleXMpO1xuICBpZiAoIWFzSXMpIHtcbiAgICBjb25zdCBpbnRlcm9wVmFsaWRBdHRyID0gdHlwZW9mIHZhbGlkQXR0ciA9PT0gXCJmdW5jdGlvblwiID8geyBkZWZhdWx0OiB2YWxpZEF0dHIgfSA6IHZhbGlkQXR0cjtcbiAgICBPYmplY3Qua2V5cyhmaWx0ZXJlZFByb3BzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICghaW50ZXJvcFZhbGlkQXR0ci5kZWZhdWx0KGtleSkpIHtcbiAgICAgICAgZGVsZXRlIGZpbHRlcmVkUHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZmlsdGVyZWRQcm9wcztcbn1cbnZhciB3YXJuSWZJbnZhbGlkID0gKHZhbHVlLCBjb21wb25lbnROYW1lKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUsbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHJpbmdpZmllZCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYEFuIGludGVycG9sYXRpb24gZXZhbHVhdGVkIHRvICcke3N0cmluZ2lmaWVkfScgaW4gdGhlIGNvbXBvbmVudCAnJHtjb21wb25lbnROYW1lfScsIHdoaWNoIGlzIHByb2JhYmx5IGEgbWlzdGFrZS4gWW91IHNob3VsZCBleHBsaWNpdGx5IGNhc3Qgb3IgdHJhbnNmb3JtIHRoZSB2YWx1ZSB0byBhIHN0cmluZy5gXG4gICAgKTtcbiAgfVxufTtcbnZhciBpZHggPSAwO1xuZnVuY3Rpb24gc3R5bGVkKHRhZykge1xuICBsZXQgbW9ja2VkQ2xhc3MgPSBcIlwiO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgbW9ja2VkQ2xhc3MgKz0gYG1vY2tlZC1zdHlsZWQtJHtpZHgrK31gO1xuICAgIGlmICh0YWcgJiYgdGFnLl9fd3l3X21ldGEgJiYgdGFnLl9fd3l3X21ldGEuY2xhc3NOYW1lKSB7XG4gICAgICBtb2NrZWRDbGFzcyArPSBgICR7dGFnLl9fd3l3X21ldGEuY2xhc3NOYW1lfWA7XG4gICAgfVxuICB9XG4gIHJldHVybiAob3B0aW9ucykgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwidGVzdFwiKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1VzaW5nIHRoZSBcInN0eWxlZFwiIHRhZyBpbiBydW50aW1lIGlzIG5vdCBzdXBwb3J0ZWQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBzZXQgdXAgdGhlIEJhYmVsIHBsdWdpbiBjb3JyZWN0bHkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2FsbHN0YWNrL2xpbmFyaWEjc2V0dXAnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlciA9IChwcm9wcywgcmVmKSA9PiB7XG4gICAgICBjb25zdCB7IGFzOiBjb21wb25lbnQgPSB0YWcsIGNsYXNzOiBjbGFzc05hbWUgPSBtb2NrZWRDbGFzcyB9ID0gcHJvcHM7XG4gICAgICBjb25zdCBzaG91bGRLZWVwUHJvcHMgPSBvcHRpb25zLnByb3BzQXNJcyA9PT0gdm9pZCAwID8gISh0eXBlb2YgY29tcG9uZW50ID09PSBcInN0cmluZ1wiICYmIGNvbXBvbmVudC5pbmRleE9mKFwiLVwiKSA9PT0gLTEgJiYgIWlzQ2FwaXRhbChjb21wb25lbnRbMF0pKSA6IG9wdGlvbnMucHJvcHNBc0lzO1xuICAgICAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IGZpbHRlclByb3BzKHNob3VsZEtlZXBQcm9wcywgcHJvcHMsIFtcbiAgICAgICAgXCJhc1wiLFxuICAgICAgICBcImNsYXNzXCJcbiAgICAgIF0pO1xuICAgICAgZmlsdGVyZWRQcm9wcy5yZWYgPSByZWY7XG4gICAgICBmaWx0ZXJlZFByb3BzLmNsYXNzTmFtZSA9IG9wdGlvbnMuYXRvbWljID8gY3gob3B0aW9ucy5jbGFzcywgZmlsdGVyZWRQcm9wcy5jbGFzc05hbWUgfHwgY2xhc3NOYW1lKSA6IGN4KGZpbHRlcmVkUHJvcHMuY2xhc3NOYW1lIHx8IGNsYXNzTmFtZSwgb3B0aW9ucy5jbGFzcyk7XG4gICAgICBjb25zdCB7IHZhcnMgfSA9IG9wdGlvbnM7XG4gICAgICBpZiAodmFycykge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdmFycykge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdmFyc1tuYW1lXTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YXJpYWJsZVswXTtcbiAgICAgICAgICBjb25zdCB1bml0ID0gdmFyaWFibGVbMV0gfHwgXCJcIjtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiByZXN1bHQgPT09IFwiZnVuY3Rpb25cIiA/IHJlc3VsdChwcm9wcykgOiByZXN1bHQ7XG4gICAgICAgICAgd2FybklmSW52YWxpZCh2YWx1ZSwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgICBzdHlsZVtgLS0ke25hbWV9YF0gPSBgJHt2YWx1ZX0ke3VuaXR9YDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvd25TdHlsZSA9IGZpbHRlcmVkUHJvcHMuc3R5bGUgfHwge307XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvd25TdHlsZSk7XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc3R5bGVba2V5XSA9IG93blN0eWxlW2tleV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlsdGVyZWRQcm9wcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgfVxuICAgICAgaWYgKHRhZy5fX3d5d19tZXRhICYmIHRhZyAhPT0gY29tcG9uZW50KSB7XG4gICAgICAgIGZpbHRlcmVkUHJvcHMuYXMgPSBjb21wb25lbnQ7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHRhZywgZmlsdGVyZWRQcm9wcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIGZpbHRlcmVkUHJvcHMpO1xuICAgIH07XG4gICAgY29uc3QgUmVzdWx0ID0gZm9yd2FyZFJlZiA/IGZvcndhcmRSZWYocmVuZGVyKSA6IChcbiAgICAgIC8vIFJlYWN0LmZvcndhcmRSZWYgd29uJ3QgYXZhaWxhYmxlIG9uIG9sZGVyIFJlYWN0IHZlcnNpb25zIGFuZCBpbiBQcmVhY3RcbiAgICAgIC8vIEZhbGxiYWNrIHRvIGEgaW5uZXJSZWYgcHJvcCBpbiB0aGF0IGNhc2VcbiAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCByZXN0ID0gb21pdChwcm9wcywgW1wiaW5uZXJSZWZcIl0pO1xuICAgICAgICByZXR1cm4gcmVuZGVyKHJlc3QsIHByb3BzLmlubmVyUmVmKTtcbiAgICAgIH1cbiAgICApO1xuICAgIFJlc3VsdC5kaXNwbGF5TmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICBSZXN1bHQuX193eXdfbWV0YSA9IHtcbiAgICAgIGNsYXNzTmFtZTogb3B0aW9ucy5jbGFzcyB8fCBtb2NrZWRDbGFzcyxcbiAgICAgIGV4dGVuZHM6IHRhZ1xuICAgIH07XG4gICAgcmV0dXJuIFJlc3VsdDtcbiAgfTtcbn1cbnZhciBzdHlsZWRfZGVmYXVsdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBQcm94eShzdHlsZWQsIHtcbiAgZ2V0KG8sIHByb3ApIHtcbiAgICByZXR1cm4gbyhwcm9wKTtcbiAgfVxufSkgOiBzdHlsZWQ7XG5leHBvcnQge1xuICBzdHlsZWRfZGVmYXVsdCBhcyBzdHlsZWRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiaW1wb3J0IHByZXZpZXcgZnJvbSAnLi9wcmV2aWV3JztcbmltcG9ydCB7IFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyJztcbmltcG9ydCBTZWxlY3RSYWRpb0NoZWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0UmFkaW9DaGVjayc7XG5pbXBvcnQgQ3VzdG9tVGVtcGxhdGVDb250cm9scyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1c3RvbVRlbXBsYXRlQ29udHJvbHMnO1xuXG5jb25zdCB7XG5cdCAgICAgIEFkdmFuY2VkRmllbGRzLFxuXHQgICAgICBUb29sQmFyRmllbGRzLFxuXHQgICAgICBGaWVsZENvbnRyb2wsXG5cdCAgICAgIEJsb2NrTmFtZSxcblx0ICAgICAgQmxvY2tMYWJlbCxcblx0ICAgICAgQmxvY2tEZXNjcmlwdGlvbixcblx0ICAgICAgQmxvY2tBZHZhbmNlZFZhbHVlLFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICB1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUsXG4gICAgICB9ID0gSmV0RkJIb29rcztcbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdCAgICAgIHVzZUJsb2NrUHJvcHMsXG5cdCAgICAgIEJsb2NrU2V0dGluZ3NNZW51Q29udHJvbHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgU1ZHLFxuXHQgICAgICBQYXRoLFxuICAgICAgfSA9IHdwLnByaW1pdGl2ZXM7XG5cbmNvbnN0IHtcblx0ICAgICAgUGFuZWxCb2R5LFxuXHQgICAgICBUZXh0Q29udHJvbCxcblx0ICAgICAgVG9vbGJhckJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBsb2NhbGl6ZWQgPSB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hFZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXHR1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUoKTtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgaXNTZWxlY3RlZCxcblx0XHQgICAgICBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LFxuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdGlmICggYXR0cmlidXRlcy5pc1ByZXZpZXcgKSB7XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9eyB7XG5cdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdH0gfT5cblx0XHRcdHsgcHJldmlldyB9XG5cdFx0PC9kaXY+O1xuXHR9XG5cblx0cmV0dXJuIDw+XG5cdFx0eyBpc1NlbGVjdGVkICYmIDxCbG9ja1NldHRpbmdzTWVudUNvbnRyb2xzLz4gfVxuXHRcdDxUb29sQmFyRmllbGRzPlxuXHRcdFx0PFRvb2xiYXJCdXR0b25cblx0XHRcdFx0aWNvbj17IGF0dHJpYnV0ZXMuY3VzdG9tX29wdGlvbi5hbGxvd1xuXHRcdFx0XHRcdD8gPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cblx0XHRcdFx0XHQ8cmVjdCB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiByeD1cIjJcIiBmaWxsPVwiIzEwMTUxN1wiLz5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTMwIDE2Ljc5NkwxOC4wNDQgMjguODgxM0wxNCAzMEwxNS4xNTYgMjYuMDg2N0wyNy4xMTA3IDE0TDMwIDE2Ljc5NlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTIgOEg2VjIxSDE3LjMzOThMMTUuMzM5OCAyM0g2TDUuNzk1OSAyMi45ODkzQzQuODU0MzUgMjIuODkzOCA0LjEwNjIgMjIuMTQ1NyA0LjAxMDc0IDIxLjIwNDFMNCAyMVY4QzQgNi44OTU0MyA0Ljg5NTQzIDYgNiA2SDEyVjhaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTIxIDE3LjMzOThMMTkgMTkuMzM5OFYxNUgyMVYxNy4zMzk4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0xOSAzSDIxVjZIMjRWOEgyMVYxMUgxOVY4SDE2VjZIMTlWM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDogPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTMwIDE2Ljc5NkwxOC4wNDQgMjguODgxM0wxNCAzMEwxNS4xNTYgMjYuMDg2N0wyNy4xMTA3IDE0TDMwIDE2Ljc5NlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTIgOEg2VjIxSDE3LjMzOThMMTUuMzM5OCAyM0g2TDUuNzk1OSAyMi45ODkzQzQuODU0MzUgMjIuODkzOCA0LjEwNjIgMjIuMTQ1NyA0LjAxMDc0IDIxLjIwNDFMNCAyMVY4QzQgNi44OTU0MyA0Ljg5NTQzIDYgNiA2SDEyVjhaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTIxIDE3LjMzOThMMTkgMTkuMzM5OFYxNUgyMVYxNy4zMzk4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0xOSAzSDIxVjZIMjRWOEgyMVYxMUgxOVY4SDE2VjZIMTlWM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlPXsgYXR0cmlidXRlcy5jdXN0b21fb3B0aW9uLmFsbG93XG5cdFx0XHRcdFx0XHQ/IF9fKFxuXHRcdFx0XHRcdFx0J0Rpc2FibGUgY3VzdG9tIG9wdGlvbnMnLFxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdDogX18oXG5cdFx0XHRcdFx0XHQnRW5hYmxlIGN1c3RvbSBvcHRpb25zJyxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpXG5cdFx0XHRcdH1cblx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRjdXN0b21fb3B0aW9uOiB7XG5cdFx0XHRcdFx0XHQuLi5hdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24sXG5cdFx0XHRcdFx0XHRhbGxvdzogIWF0dHJpYnV0ZXMuY3VzdG9tX29wdGlvbi5hbGxvdyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRpc0FjdGl2ZT17IGF0dHJpYnV0ZXMuY3VzdG9tX29wdGlvbi5hbGxvdyB9XG5cdFx0XHQvPlxuXHRcdDwvVG9vbEJhckZpZWxkcz5cblx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnR2VuZXJhbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdDxCbG9ja0xhYmVsLz5cblx0XHRcdFx0PEJsb2NrTmFtZS8+XG5cdFx0XHRcdDxCbG9ja0Rlc2NyaXB0aW9uLz5cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnVmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHQ8QmxvY2tBZHZhbmNlZFZhbHVlLz5cblx0XHRcdFx0eyBhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24uYWxsb3cgJiYgPD5cblx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0J1dHRvbiBsYWJlbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbGFiZWwgPT4gc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRjdXN0b21fb3B0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0Li4uYXR0cmlidXRlcy5jdXN0b21fb3B0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ0ZvciBjdXN0b20gb3B0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24ubGFiZWwgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvPiB9XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDxBZHZhbmNlZEZpZWxkcy8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlcicgKSB9XG5cdFx0XHRcdHNjcmlwdERhdGE9eyBsb2NhbGl6ZWQgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVjayB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdDxDdXN0b21UZW1wbGF0ZUNvbnRyb2xzXG5cdFx0XHRcdFx0bGlzdGluZ1R5cGVzPXsgbG9jYWxpemVkLmxpc3RpbmdzX2xpc3QgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmllbGRDb250cm9sXG5cdFx0XHRcdFx0dHlwZT1cImN1c3RvbV9zZXR0aW5nc1wiXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvU2VsZWN0UmFkaW9DaGVjaz5cblx0XHQ8L2Rpdj5cblx0PC8+O1xufSIsImltcG9ydCBDaGVja2JveEVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBtZXRhZGF0YSBmcm9tICdAc2hhcmVkL2Jsb2Nrcy9jaGVja2JveC9ibG9jay5qc29uJztcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBjcmVhdGVCbG9jayB9ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRkZXNjcmlwdGlvbjogX18oXG5cdFx0YE1ha2UgYSBsaXN0IG9mIG9wdGlvbnMgZm9yIHRoZSB1c2VycyB0byBjaG9vc2Ugc2V2ZXJhbCB2YXJpYW50cyBcbndpdGggYSBtdWx0aS1vcHRpb25hbCBmaWVsZC4gQWxsb3cgdG8gcGljayBhcyBtYW55IHZhcmlhbnRzIGFzIHRoZSB2aXNpdG9yIG5lZWRzLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRlZGl0OiBDaGVja2JveEVkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnLCAnYXR0ckhlbHAnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRpc1ByZXZpZXc6IHRydWUsXG5cdFx0fSxcblx0fSxcblx0dHJhbnNmb3Jtczoge1xuXHRcdHRvOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdibG9jaycsXG5cdFx0XHRcdGJsb2NrczogWyAnamV0LWZvcm1zL3RleHQtZmllbGQnIF0sXG5cdFx0XHRcdHRyYW5zZm9ybTogKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jayggJ2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcblx0XHRcdFx0XHRcdHsgLi4uYXR0cmlidXRlcyB9ICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaW9yaXR5OiAwLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdGZyb206IFtcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogJ2Jsb2NrJyxcblx0XHRcdFx0YmxvY2tzOiBbXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy9yYWRpby1maWVsZCcsXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy9zZWxlY3QtZmllbGQnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdHRyYW5zZm9ybTogKCBhdHRyaWJ1dGVzICkgPT4ge1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuY3VzdG9tX29wdGlvbiA9ICEhYXR0cmlidXRlcy5jdXN0b21fb3B0aW9uPy5hbGxvdztcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soIG5hbWUsIHsgLi4uYXR0cmlidXRlcyB9ICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaW9yaXR5OiAwLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzLFxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBwcmV2aWV3ID0gKFxuXHQ8c3ZnIHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgdmlld0JveD1cIjAgMCAyOTggMTQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PHJlY3Qgd2lkdGg9XCIyOThcIiBoZWlnaHQ9XCIxNDRcIiBmaWxsPVwiI0YxRjVGOVwiLz5cblx0XHQ8cGF0aCBkPVwiTTIyLjE2NDEgNTAuODM1SDIzLjQ3NjZDMjMuNDA4MiA1MS40NjM5IDIzLjIyODIgNTIuMDI2NyAyMi45MzY1IDUyLjUyMzRDMjIuNjQ0OSA1My4wMjAyIDIyLjIzMjQgNTMuNDE0NCAyMS42OTkyIDUzLjcwNjFDMjEuMTY2IDUzLjk5MzIgMjAuNTAwNyA1NC4xMzY3IDE5LjcwMzEgNTQuMTM2N0MxOS4xMTk4IDU0LjEzNjcgMTguNTg4OSA1NC4wMjczIDE4LjExMDQgNTMuODA4NkMxNy42MzY0IDUzLjU4OTggMTcuMjI4NSA1My4yNzk5IDE2Ljg4NjcgNTIuODc4OUMxNi41NDQ5IDUyLjQ3MzMgMTYuMjgwNiA1MS45ODggMTYuMDkzOCA1MS40MjI5QzE1LjkxMTUgNTAuODUzMiAxNS44MjAzIDUwLjIxOTcgMTUuODIwMyA0OS41MjI1VjQ4LjUzMTJDMTUuODIwMyA0Ny44MzQgMTUuOTExNSA0Ny4yMDI4IDE2LjA5MzggNDYuNjM3N0MxNi4yODA2IDQ2LjA2OCAxNi41NDcyIDQ1LjU4MDQgMTYuODkzNiA0NS4xNzQ4QzE3LjI0NDUgNDQuNzY5MiAxNy42NjYgNDQuNDU3IDE4LjE1ODIgNDQuMjM4M0MxOC42NTA0IDQ0LjAxOTUgMTkuMjA0MSA0My45MTAyIDE5LjgxOTMgNDMuOTEwMkMyMC41NzEzIDQzLjkxMDIgMjEuMjA3IDQ0LjA1MTQgMjEuNzI2NiA0NC4zMzRDMjIuMjQ2MSA0NC42MTY1IDIyLjY0OTQgNDUuMDA4NSAyMi45MzY1IDQ1LjUwOThDMjMuMjI4MiA0Ni4wMDY1IDIzLjQwODIgNDYuNTgzIDIzLjQ3NjYgNDcuMjM5M0gyMi4xNjQxQzIyLjEwMDMgNDYuNzc0NCAyMS45ODE4IDQ2LjM3NTcgMjEuODA4NiA0Ni4wNDNDMjEuNjM1NCA0NS43MDU3IDIxLjM4OTMgNDUuNDQ2IDIxLjA3MDMgNDUuMjYzN0MyMC43NTEzIDQ1LjA4MTQgMjAuMzM0MyA0NC45OTAyIDE5LjgxOTMgNDQuOTkwMkMxOS4zNzczIDQ0Ljk5MDIgMTguOTg3NiA0NS4wNzQ1IDE4LjY1MDQgNDUuMjQzMkMxOC4zMTc3IDQ1LjQxMTggMTguMDM3NCA0NS42NTEgMTcuODA5NiA0NS45NjA5QzE3LjU4NjMgNDYuMjcwOCAxNy40MTc2IDQ2LjY0MjMgMTcuMzAzNyA0Ny4wNzUyQzE3LjE4OTggNDcuNTA4MSAxNy4xMzI4IDQ3Ljk4ODkgMTcuMTMyOCA0OC41MTc2VjQ5LjUyMjVDMTcuMTMyOCA1MC4wMTAxIDE3LjE4MjkgNTAuNDY4MSAxNy4yODMyIDUwLjg5NjVDMTcuMzg4IDUxLjMyNDkgMTcuNTQ1MiA1MS43MDA4IDE3Ljc1NDkgNTIuMDI0NEMxNy45NjQ1IDUyLjM0OCAxOC4yMzExIDUyLjYwMzIgMTguNTU0NyA1Mi43OUMxOC44NzgzIDUyLjk3MjMgMTkuMjYxMSA1My4wNjM1IDE5LjcwMzEgNTMuMDYzNUMyMC4yNjM3IDUzLjA2MzUgMjAuNzEwMyA1Mi45NzQ2IDIxLjA0MyA1Mi43OTY5QzIxLjM3NTcgNTIuNjE5MSAyMS42MjYzIDUyLjM2MzkgMjEuNzk0OSA1Mi4wMzEyQzIxLjk2ODEgNTEuNjk4NiAyMi4wOTExIDUxLjI5OTggMjIuMTY0MSA1MC44MzVaTTI2LjM0NzcgNDMuNVY1NEgyNS4wODNWNDMuNUgyNi4zNDc3Wk0yNi4wNDY5IDUwLjAyMTVMMjUuNTIwNSA1MC4wMDFDMjUuNTI1MSA0OS40OTUxIDI1LjYwMDMgNDkuMDI4IDI1Ljc0NjEgNDguNTk5NkMyNS44OTE5IDQ4LjE2NjcgMjYuMDk3IDQ3Ljc5MDcgMjYuMzYxMyA0Ny40NzE3QzI2LjYyNTcgNDcuMTUyNyAyNi45NDAxIDQ2LjkwNjYgMjcuMzA0NyA0Ni43MzM0QzI3LjY3MzggNDYuNTU1NyAyOC4wODE3IDQ2LjQ2NjggMjguNTI4MyA0Ni40NjY4QzI4Ljg5MjkgNDYuNDY2OCAyOS4yMjEgNDYuNTE2OSAyOS41MTI3IDQ2LjYxNzJDMjkuODA0NCA0Ni43MTI5IDMwLjA1MjcgNDYuODY3OCAzMC4yNTc4IDQ3LjA4MkMzMC40Njc0IDQ3LjI5NjIgMzAuNjI3IDQ3LjU3NDIgMzAuNzM2MyA0Ny45MTZDMzAuODQ1NyA0OC4yNTMzIDMwLjkwMDQgNDguNjY1NyAzMC45MDA0IDQ5LjE1MzNWNTRIMjkuNjI4OVY0OS4xMzk2QzI5LjYyODkgNDguNzUyMyAyOS41NzE5IDQ4LjQ0MjQgMjkuNDU4IDQ4LjIxQzI5LjM0NDEgNDcuOTczIDI5LjE3NzcgNDcuODAyMSAyOC45NTkgNDcuNjk3M0MyOC43NDAyIDQ3LjU4NzkgMjguNDcxNCA0Ny41MzMyIDI4LjE1MjMgNDcuNTMzMkMyNy44Mzc5IDQ3LjUzMzIgMjcuNTUwOCA0Ny41OTkzIDI3LjI5MSA0Ny43MzE0QzI3LjAzNTggNDcuODYzNiAyNi44MTQ4IDQ4LjA0NTkgMjYuNjI3OSA0OC4yNzgzQzI2LjQ0NTYgNDguNTEwNyAyNi4zMDIxIDQ4Ljc3NzMgMjYuMTk3MyA0OS4wNzgxQzI2LjA5NyA0OS4zNzQzIDI2LjA0NjkgNDkuNjg4OCAyNi4wNDY5IDUwLjAyMTVaTTMyLjQ1OSA1MC4zODM4VjUwLjIyNjZDMzIuNDU5IDQ5LjY5MzQgMzIuNTM2NSA0OS4xOTg5IDMyLjY5MTQgNDguNzQzMkMzMi44NDY0IDQ4LjI4MjkgMzMuMDY5NyA0Ny44ODQxIDMzLjM2MTMgNDcuNTQ2OUMzMy42NTMgNDcuMjA1MSAzNC4wMDYyIDQ2Ljk0MDggMzQuNDIwOSA0Ni43NTM5QzM0LjgzNTYgNDYuNTYyNSAzNS4zMDA1IDQ2LjQ2NjggMzUuODE1NCA0Ni40NjY4QzM2LjMzNSA0Ni40NjY4IDM2LjgwMjEgNDYuNTYyNSAzNy4yMTY4IDQ2Ljc1MzlDMzcuNjM2MSA0Ni45NDA4IDM3Ljk5MTUgNDcuMjA1MSAzOC4yODMyIDQ3LjU0NjlDMzguNTc5NCA0Ny44ODQxIDM4LjgwNSA0OC4yODI5IDM4Ljk2IDQ4Ljc0MzJDMzkuMTE0OSA0OS4xOTg5IDM5LjE5MjQgNDkuNjkzNCAzOS4xOTI0IDUwLjIyNjZWNTAuMzgzOEMzOS4xOTI0IDUwLjkxNyAzOS4xMTQ5IDUxLjQxMTUgMzguOTYgNTEuODY3MkMzOC44MDUgNTIuMzIyOSAzOC41Nzk0IDUyLjcyMTcgMzguMjgzMiA1My4wNjM1QzM3Ljk5MTUgNTMuNDAwNyAzNy42MzgzIDUzLjY2NSAzNy4yMjM2IDUzLjg1NjRDMzYuODEzNSA1NC4wNDMzIDM2LjM0ODYgNTQuMTM2NyAzNS44MjkxIDU0LjEzNjdDMzUuMzA5NiA1NC4xMzY3IDM0Ljg0MjQgNTQuMDQzMyAzNC40Mjc3IDUzLjg1NjRDMzQuMDEzIDUzLjY2NSAzMy42NTc2IDUzLjQwMDcgMzMuMzYxMyA1My4wNjM1QzMzLjA2OTcgNTIuNzIxNyAzMi44NDY0IDUyLjMyMjkgMzIuNjkxNCA1MS44NjcyQzMyLjUzNjUgNTEuNDExNSAzMi40NTkgNTAuOTE3IDMyLjQ1OSA1MC4zODM4Wk0zMy43MjM2IDUwLjIyNjZWNTAuMzgzOEMzMy43MjM2IDUwLjc1MjkgMzMuNzY2OSA1MS4xMDE2IDMzLjg1MzUgNTEuNDI5N0MzMy45NDAxIDUxLjc1MzMgMzQuMDcgNTIuMDQwNCAzNC4yNDMyIDUyLjI5MUMzNC40MjA5IDUyLjU0MTcgMzQuNjQxOSA1Mi43Mzk5IDM0LjkwNjIgNTIuODg1N0MzNS4xNzA2IDUzLjAyNyAzNS40NzgyIDUzLjA5NzcgMzUuODI5MSA1My4wOTc3QzM2LjE3NTUgNTMuMDk3NyAzNi40Nzg1IDUzLjAyNyAzNi43MzgzIDUyLjg4NTdDMzcuMDAyNiA1Mi43Mzk5IDM3LjIyMTQgNTIuNTQxNyAzNy4zOTQ1IDUyLjI5MUMzNy41Njc3IDUyLjA0MDQgMzcuNjk3NiA1MS43NTMzIDM3Ljc4NDIgNTEuNDI5N0MzNy44NzUzIDUxLjEwMTYgMzcuOTIwOSA1MC43NTI5IDM3LjkyMDkgNTAuMzgzOFY1MC4yMjY2QzM3LjkyMDkgNDkuODYyIDM3Ljg3NTMgNDkuNTE3OSAzNy43ODQyIDQ5LjE5NDNDMzcuNjk3NiA0OC44NjYyIDM3LjU2NTQgNDguNTc2OCAzNy4zODc3IDQ4LjMyNjJDMzcuMjE0NSA0OC4wNzEgMzYuOTk1OCA0Ny44NzA0IDM2LjczMTQgNDcuNzI0NkMzNi40NzE3IDQ3LjU3ODggMzYuMTY2MyA0Ny41MDU5IDM1LjgxNTQgNDcuNTA1OUMzNS40NjkxIDQ3LjUwNTkgMzUuMTYzNyA0Ny41Nzg4IDM0Ljg5OTQgNDcuNzI0NkMzNC42Mzk2IDQ3Ljg3MDQgMzQuNDIwOSA0OC4wNzEgMzQuMjQzMiA0OC4zMjYyQzM0LjA3IDQ4LjU3NjggMzMuOTQwMSA0OC44NjYyIDMzLjg1MzUgNDkuMTk0M0MzMy43NjY5IDQ5LjUxNzkgMzMuNzIzNiA0OS44NjIgMzMuNzIzNiA1MC4yMjY2Wk00MC40NDM0IDUwLjM4MzhWNTAuMjI2NkM0MC40NDM0IDQ5LjY5MzQgNDAuNTIwOCA0OS4xOTg5IDQwLjY3NTggNDguNzQzMkM0MC44MzA3IDQ4LjI4MjkgNDEuMDU0IDQ3Ljg4NDEgNDEuMzQ1NyA0Ny41NDY5QzQxLjYzNzQgNDcuMjA1MSA0MS45OTA2IDQ2Ljk0MDggNDIuNDA1MyA0Ni43NTM5QzQyLjgyIDQ2LjU2MjUgNDMuMjg0OCA0Ni40NjY4IDQzLjc5OTggNDYuNDY2OEM0NC4zMTkzIDQ2LjQ2NjggNDQuNzg2NSA0Ni41NjI1IDQ1LjIwMTIgNDYuNzUzOUM0NS42MjA0IDQ2Ljk0MDggNDUuOTc1OSA0Ny4yMDUxIDQ2LjI2NzYgNDcuNTQ2OUM0Ni41NjM4IDQ3Ljg4NDEgNDYuNzg5NCA0OC4yODI5IDQ2Ljk0NDMgNDguNzQzMkM0Ny4wOTkzIDQ5LjE5ODkgNDcuMTc2OCA0OS42OTM0IDQ3LjE3NjggNTAuMjI2NlY1MC4zODM4QzQ3LjE3NjggNTAuOTE3IDQ3LjA5OTMgNTEuNDExNSA0Ni45NDQzIDUxLjg2NzJDNDYuNzg5NCA1Mi4zMjI5IDQ2LjU2MzggNTIuNzIxNyA0Ni4yNjc2IDUzLjA2MzVDNDUuOTc1OSA1My40MDA3IDQ1LjYyMjcgNTMuNjY1IDQ1LjIwOCA1My44NTY0QzQ0Ljc5NzkgNTQuMDQzMyA0NC4zMzMgNTQuMTM2NyA0My44MTM1IDU0LjEzNjdDNDMuMjkzOSA1NC4xMzY3IDQyLjgyNjggNTQuMDQzMyA0Mi40MTIxIDUzLjg1NjRDNDEuOTk3NCA1My42NjUgNDEuNjQxOSA1My40MDA3IDQxLjM0NTcgNTMuMDYzNUM0MS4wNTQgNTIuNzIxNyA0MC44MzA3IDUyLjMyMjkgNDAuNjc1OCA1MS44NjcyQzQwLjUyMDggNTEuNDExNSA0MC40NDM0IDUwLjkxNyA0MC40NDM0IDUwLjM4MzhaTTQxLjcwOCA1MC4yMjY2VjUwLjM4MzhDNDEuNzA4IDUwLjc1MjkgNDEuNzUxMyA1MS4xMDE2IDQxLjgzNzkgNTEuNDI5N0M0MS45MjQ1IDUxLjc1MzMgNDIuMDU0NCA1Mi4wNDA0IDQyLjIyNzUgNTIuMjkxQzQyLjQwNTMgNTIuNTQxNyA0Mi42MjYzIDUyLjczOTkgNDIuODkwNiA1Mi44ODU3QzQzLjE1NDkgNTMuMDI3IDQzLjQ2MjYgNTMuMDk3NyA0My44MTM1IDUzLjA5NzdDNDQuMTU5OCA1My4wOTc3IDQ0LjQ2MjkgNTMuMDI3IDQ0LjcyMjcgNTIuODg1N0M0NC45ODcgNTIuNzM5OSA0NS4yMDU3IDUyLjU0MTcgNDUuMzc4OSA1Mi4yOTFDNDUuNTUyMSA1Mi4wNDA0IDQ1LjY4MiA1MS43NTMzIDQ1Ljc2ODYgNTEuNDI5N0M0NS44NTk3IDUxLjEwMTYgNDUuOTA1MyA1MC43NTI5IDQ1LjkwNTMgNTAuMzgzOFY1MC4yMjY2QzQ1LjkwNTMgNDkuODYyIDQ1Ljg1OTcgNDkuNTE3OSA0NS43Njg2IDQ5LjE5NDNDNDUuNjgyIDQ4Ljg2NjIgNDUuNTQ5OCA0OC41NzY4IDQ1LjM3MjEgNDguMzI2MkM0NS4xOTg5IDQ4LjA3MSA0NC45ODAxIDQ3Ljg3MDQgNDQuNzE1OCA0Ny43MjQ2QzQ0LjQ1NjEgNDcuNTc4OCA0NC4xNTA3IDQ3LjUwNTkgNDMuNzk5OCA0Ny41MDU5QzQzLjQ1MzUgNDcuNTA1OSA0My4xNDgxIDQ3LjU3ODggNDIuODgzOCA0Ny43MjQ2QzQyLjYyNCA0Ny44NzA0IDQyLjQwNTMgNDguMDcxIDQyLjIyNzUgNDguMzI2MkM0Mi4wNTQ0IDQ4LjU3NjggNDEuOTI0NSA0OC44NjYyIDQxLjgzNzkgNDkuMTk0M0M0MS43NTEzIDQ5LjUxNzkgNDEuNzA4IDQ5Ljg2MiA0MS43MDggNTAuMjI2NlpNNTMuMDY5MyA1Mi4wMzgxQzUzLjA2OTMgNTEuODU1OCA1My4wMjgzIDUxLjY4NzIgNTIuOTQ2MyA1MS41MzIyQzUyLjg2ODggNTEuMzcyNyA1Mi43MDcgNTEuMjI5MiA1Mi40NjA5IDUxLjEwMTZDNTIuMjE5NCA1MC45Njk0IDUxLjg1NDggNTAuODU1NSA1MS4zNjcyIDUwLjc1OThDNTAuOTU3IDUwLjY3MzIgNTAuNTg1NiA1MC41NzA2IDUwLjI1MjkgNTAuNDUyMUM0OS45MjQ4IDUwLjMzMzcgNDkuNjQ0NSA1MC4xOTAxIDQ5LjQxMjEgNTAuMDIxNUM0OS4xODQyIDQ5Ljg1MjkgNDkuMDA4OCA0OS42NTQ2IDQ4Ljg4NTcgNDkuNDI2OEM0OC43NjI3IDQ5LjE5ODkgNDguNzAxMiA0OC45MzIzIDQ4LjcwMTIgNDguNjI3QzQ4LjcwMTIgNDguMzM1MyA0OC43NjUgNDguMDU5NiA0OC44OTI2IDQ3Ljc5OThDNDkuMDI0NyA0Ny41NCA0OS4yMDkzIDQ3LjMwOTkgNDkuNDQ2MyA0Ny4xMDk0QzQ5LjY4NzggNDYuOTA4OSA0OS45NzcyIDQ2Ljc1MTYgNTAuMzE0NSA0Ni42Mzc3QzUwLjY1MTcgNDYuNTIzOCA1MS4wMjc3IDQ2LjQ2NjggNTEuNDQyNCA0Ni40NjY4QzUyLjAzNDggNDYuNDY2OCA1Mi41NDA3IDQ2LjU3MTYgNTIuOTYgNDYuNzgxMkM1My4zNzkyIDQ2Ljk5MDkgNTMuNzAwNSA0Ny4yNzEyIDUzLjkyMzggNDcuNjIyMUM1NC4xNDcxIDQ3Ljk2ODQgNTQuMjU4OCA0OC4zNTM1IDU0LjI1ODggNDguNzc3M0g1Mi45OTQxQzUyLjk5NDEgNDguNTcyMyA1Mi45MzI2IDQ4LjM3NCA1Mi44MDk2IDQ4LjE4MjZDNTIuNjkxMSA0Ny45ODY3IDUyLjUxNTYgNDcuODI0OSA1Mi4yODMyIDQ3LjY5NzNDNTIuMDU1MyA0Ny41Njk3IDUxLjc3NTEgNDcuNTA1OSA1MS40NDI0IDQ3LjUwNTlDNTEuMDkxNSA0Ny41MDU5IDUwLjgwNjYgNDcuNTYwNSA1MC41ODc5IDQ3LjY2OTlDNTAuMzczNyA0Ny43NzQ3IDUwLjIxNjUgNDcuOTA5MiA1MC4xMTYyIDQ4LjA3MzJDNTAuMDIwNSA0OC4yMzczIDQ5Ljk3MjcgNDguNDEwNSA0OS45NzI3IDQ4LjU5MjhDNDkuOTcyNyA0OC43Mjk1IDQ5Ljk5NTQgNDguODUyNSA1MC4wNDEgNDguOTYxOUM1MC4wOTExIDQ5LjA2NjcgNTAuMTc3NyA0OS4xNjQ3IDUwLjMwMDggNDkuMjU1OUM1MC40MjM4IDQ5LjM0MjQgNTAuNTk3IDQ5LjQyNDUgNTAuODIwMyA0OS41MDJDNTEuMDQzNiA0OS41Nzk0IDUxLjMyODUgNDkuNjU2OSA1MS42NzQ4IDQ5LjczNDRDNTIuMjgwOSA0OS44NzExIDUyLjc3OTkgNTAuMDM1MiA1My4xNzE5IDUwLjIyNjZDNTMuNTYzOCA1MC40MTggNTMuODU1NSA1MC42NTI3IDU0LjA0NjkgNTAuOTMwN0M1NC4yMzgzIDUxLjIwODcgNTQuMzM0IDUxLjU0NTkgNTQuMzM0IDUxLjk0MjRDNTQuMzM0IDUyLjI2NiA1NC4yNjU2IDUyLjU2MjIgNTQuMTI4OSA1Mi44MzExQzUzLjk5NjcgNTMuMDk5OSA1My44MDMxIDUzLjMzMjQgNTMuNTQ3OSA1My41MjgzQzUzLjI5NzIgNTMuNzE5NyA1Mi45OTY0IDUzLjg3MDEgNTIuNjQ1NSA1My45Nzk1QzUyLjI5OTIgNTQuMDg0MyA1MS45MDk1IDU0LjEzNjcgNTEuNDc2NiA1NC4xMzY3QzUwLjgyNDkgNTQuMTM2NyA1MC4yNzM0IDU0LjAyMDUgNDkuODIyMyA1My43ODgxQzQ5LjM3MTEgNTMuNTU1NyA0OS4wMjkzIDUzLjI1NDkgNDguNzk2OSA1Mi44ODU3QzQ4LjU2NDUgNTIuNTE2NiA0OC40NDgyIDUyLjEyNyA0OC40NDgyIDUxLjcxNjhINDkuNzE5N0M0OS43MzggNTIuMDYzMiA0OS44MzgyIDUyLjMzODkgNTAuMDIwNSA1Mi41NDM5QzUwLjIwMjggNTIuNzQ0NSA1MC40MjYxIDUyLjg4OCA1MC42OTA0IDUyLjk3NDZDNTAuOTU0OCA1My4wNTY2IDUxLjIxNjggNTMuMDk3NyA1MS40NzY2IDUzLjA5NzdDNTEuODIyOSA1My4wOTc3IDUyLjExMjMgNTMuMDUyMSA1Mi4zNDQ3IDUyLjk2MDlDNTIuNTgxNyA1Mi44Njk4IDUyLjc2MTcgNTIuNzQ0NSA1Mi44ODQ4IDUyLjU4NUM1My4wMDc4IDUyLjQyNTUgNTMuMDY5MyA1Mi4yNDMyIDUzLjA2OTMgNTIuMDM4MVpNNTkuMDY0NSA1NC4xMzY3QzU4LjU0OTUgNTQuMTM2NyA1OC4wODI0IDU0LjA1MDEgNTcuNjYzMSA1My44NzdDNTcuMjQ4NCA1My42OTkyIDU2Ljg5MDYgNTMuNDUwOCA1Ni41ODk4IDUzLjEzMThDNTYuMjkzNiA1Mi44MTI4IDU2LjA2NTggNTIuNDM0NiA1NS45MDYyIDUxLjk5NzFDNTUuNzQ2NyA1MS41NTk2IDU1LjY2NyA1MS4wODExIDU1LjY2NyA1MC41NjE1VjUwLjI3NDRDNTUuNjY3IDQ5LjY3MjkgNTUuNzU1OSA0OS4xMzc0IDU1LjkzMzYgNDguNjY4QzU2LjExMTMgNDguMTk0IDU2LjM1MjkgNDcuNzkzIDU2LjY1ODIgNDcuNDY0OEM1Ni45NjM1IDQ3LjEzNjcgNTcuMzA5OSA0Ni44ODgzIDU3LjY5NzMgNDYuNzE5N0M1OC4wODQ2IDQ2LjU1MTEgNTguNDg1NyA0Ni40NjY4IDU4LjkwMDQgNDYuNDY2OEM1OS40MjkgNDYuNDY2OCA1OS44ODQ4IDQ2LjU1NzkgNjAuMjY3NiA0Ni43NDAyQzYwLjY1NDkgNDYuOTIyNSA2MC45NzE3IDQ3LjE3NzcgNjEuMjE3OCA0Ny41MDU5QzYxLjQ2MzkgNDcuODI5NCA2MS42NDYyIDQ4LjIxMjIgNjEuNzY0NiA0OC42NTQzQzYxLjg4MzEgNDkuMDkxOCA2MS45NDI0IDQ5LjU3MDMgNjEuOTQyNCA1MC4wODk4VjUwLjY1NzJINTYuNDE4OVY0OS42MjVINjAuNjc3N1Y0OS41MjkzQzYwLjY1OTUgNDkuMjAxMiA2MC41OTExIDQ4Ljg4MjIgNjAuNDcyNyA0OC41NzIzQzYwLjM1ODcgNDguMjYyNCA2MC4xNzY0IDQ4LjAwNzIgNTkuOTI1OCA0Ny44MDY2QzU5LjY3NTEgNDcuNjA2MSA1OS4zMzMzIDQ3LjUwNTkgNTguOTAwNCA0Ny41MDU5QzU4LjYxMzMgNDcuNTA1OSA1OC4zNDkgNDcuNTY3NCA1OC4xMDc0IDQ3LjY5MDRDNTcuODY1OSA0Ny44MDg5IDU3LjY1ODUgNDcuOTg2NyA1Ny40ODU0IDQ4LjIyMzZDNTcuMzEyMiA0OC40NjA2IDU3LjE3NzcgNDguNzUgNTcuMDgyIDQ5LjA5MThDNTYuOTg2MyA0OS40MzM2IDU2LjkzODUgNDkuODI3OCA1Ni45Mzg1IDUwLjI3NDRWNTAuNTYxNUM1Ni45Mzg1IDUwLjkxMjQgNTYuOTg2MyA1MS4yNDI4IDU3LjA4MiA1MS41NTI3QzU3LjE4MjMgNTEuODU4MSA1Ny4zMjU4IDUyLjEyNyA1Ny41MTI3IDUyLjM1OTRDNTcuNzA0MSA1Mi41OTE4IDU3LjkzNDIgNTIuNzc0MSA1OC4yMDMxIDUyLjkwNjJDNTguNDc2NiA1My4wMzg0IDU4Ljc4NjUgNTMuMTA0NSA1OS4xMzI4IDUzLjEwNDVDNTkuNTc5NCA1My4xMDQ1IDU5Ljk1NzcgNTMuMDEzMyA2MC4yNjc2IDUyLjgzMTFDNjAuNTc3NSA1Mi42NDg4IDYwLjg0ODYgNTIuNDA0OSA2MS4wODExIDUyLjA5OTZMNjEuODQ2NyA1Mi43MDhDNjEuNjg3MiA1Mi45NDk1IDYxLjQ4NDQgNTMuMTc5NyA2MS4yMzgzIDUzLjM5ODRDNjAuOTkyMiA1My42MTcyIDYwLjY4OTEgNTMuNzk0OSA2MC4zMjkxIDUzLjkzMTZDNTkuOTczNiA1NC4wNjg0IDU5LjU1MjEgNTQuMTM2NyA1OS4wNjQ1IDU0LjEzNjdaTTcyLjM4NzcgNTEuNDg0NEM3Mi4zODc3IDUxLjI1MiA3Mi4zNTEyIDUxLjA0NjkgNzIuMjc4MyA1MC44NjkxQzcyLjIxIDUwLjY4NjggNzIuMDg2OSA1MC41MjI4IDcxLjkwOTIgNTAuMzc3QzcxLjczNiA1MC4yMzExIDcxLjQ5NDUgNTAuMDkyMSA3MS4xODQ2IDQ5Ljk2QzcwLjg3OTIgNDkuODI3OCA3MC40OTE5IDQ5LjY5MzQgNzAuMDIyNSA0OS41NTY2QzY5LjUzMDMgNDkuNDEwOCA2OS4wODU5IDQ5LjI0OSA2OC42ODk1IDQ5LjA3MTNDNjguMjkzIDQ4Ljg4OSA2Ny45NTM1IDQ4LjY4MTYgNjcuNjcwOSA0OC40NDkyQzY3LjM4ODMgNDguMjE2OCA2Ny4xNzE5IDQ3Ljk1MDIgNjcuMDIxNSA0Ny42NDk0QzY2Ljg3MTEgNDcuMzQ4NiA2Ni43OTU5IDQ3LjAwNDYgNjYuNzk1OSA0Ni42MTcyQzY2Ljc5NTkgNDYuMjI5OCA2Ni44NzU3IDQ1Ljg3MjEgNjcuMDM1MiA0NS41NDM5QzY3LjE5NDcgNDUuMjE1OCA2Ny40MjI1IDQ0LjkzMSA2Ny43MTg4IDQ0LjY4OTVDNjguMDE5NSA0NC40NDM0IDY4LjM3NzMgNDQuMjUyIDY4Ljc5MiA0NC4xMTUyQzY5LjIwNjcgNDMuOTc4NSA2OS42NjkzIDQzLjkxMDIgNzAuMTc5NyA0My45MTAyQzcwLjkyNzEgNDMuOTEwMiA3MS41NjA1IDQ0LjA1MzcgNzIuMDgwMSA0NC4zNDA4QzcyLjYwNDIgNDQuNjIzNCA3My4wMDI5IDQ0Ljk5NDggNzMuMjc2NCA0NS40NTUxQzczLjU0OTggNDUuOTEwOCA3My42ODY1IDQ2LjM5ODQgNzMuNjg2NSA0Ni45MThINzIuMzc0QzcyLjM3NCA0Ni41NDQzIDcyLjI5NDMgNDYuMjEzOSA3Mi4xMzQ4IDQ1LjkyNjhDNzEuOTc1MyA0NS42MzUxIDcxLjczMzcgNDUuNDA3MiA3MS40MTAyIDQ1LjI0MzJDNzEuMDg2NiA0NS4wNzQ1IDcwLjY3NjQgNDQuOTkwMiA3MC4xNzk3IDQ0Ljk5MDJDNjkuNzEwMyA0NC45OTAyIDY5LjMyMjkgNDUuMDYwOSA2OS4wMTc2IDQ1LjIwMjFDNjguNzEyMiA0NS4zNDM0IDY4LjQ4NDQgNDUuNTM0OCA2OC4zMzQgNDUuNzc2NEM2OC4xODgyIDQ2LjAxNzkgNjguMTE1MiA0Ni4yOTM2IDY4LjExNTIgNDYuNjAzNUM2OC4xMTUyIDQ2LjgxMzIgNjguMTU4NSA0Ny4wMDQ2IDY4LjI0NTEgNDcuMTc3N0M2OC4zMzYzIDQ3LjM0NjQgNjguNDc1MyA0Ny41MDM2IDY4LjY2MjEgNDcuNjQ5NEM2OC44NTM1IDQ3Ljc5NTIgNjkuMDk1MSA0Ny45Mjk3IDY5LjM4NjcgNDguMDUyN0M2OS42ODI5IDQ4LjE3NTggNzAuMDM2MSA0OC4yOTQzIDcwLjQ0NjMgNDguNDA4MkM3MS4wMTE0IDQ4LjU2NzcgNzEuNDk5IDQ4Ljc0NTQgNzEuOTA5MiA0OC45NDE0QzcyLjMxOTMgNDkuMTM3NCA3Mi42NTY2IDQ5LjM1ODQgNzIuOTIwOSA0OS42MDQ1QzczLjE4OTggNDkuODQ2IDczLjM4OCA1MC4xMjE3IDczLjUxNTYgNTAuNDMxNkM3My42NDc4IDUwLjczNyA3My43MTM5IDUxLjA4MzMgNzMuNzEzOSA1MS40NzA3QzczLjcxMzkgNTEuODc2MyA3My42MzE4IDUyLjI0MzIgNzMuNDY3OCA1Mi41NzEzQzczLjMwMzcgNTIuODk5NCA3My4wNjkgNTMuMTc5NyA3Mi43NjM3IDUzLjQxMjFDNzIuNDU4MyA1My42NDQ1IDcyLjA5MTUgNTMuODI0NSA3MS42NjMxIDUzLjk1MjFDNzEuMjM5MyA1NC4wNzUyIDcwLjc2NTMgNTQuMTM2NyA3MC4yNDEyIDU0LjEzNjdDNjkuNzgwOSA1NC4xMzY3IDY5LjMyNzUgNTQuMDcyOSA2OC44ODA5IDUzLjk0NTNDNjguNDM4OCA1My44MTc3IDY4LjAzNTUgNTMuNjI2MyA2Ny42NzA5IDUzLjM3MTFDNjcuMzEwOSA1My4xMTU5IDY3LjAyMTUgNTIuODAxNCA2Ni44MDI3IDUyLjQyNzdDNjYuNTg4NSA1Mi4wNDk1IDY2LjQ4MTQgNTEuNjEyIDY2LjQ4MTQgNTEuMTE1Mkg2Ny43OTM5QzY3Ljc5MzkgNTEuNDU3IDY3Ljg2IDUxLjc1MSA2Ny45OTIyIDUxLjk5NzFDNjguMTI0MyA1Mi4yMzg2IDY4LjMwNDQgNTIuNDM5MSA2OC41MzIyIDUyLjU5ODZDNjguNzY0NiA1Mi43NTgxIDY5LjAyNjcgNTIuODc2NiA2OS4zMTg0IDUyLjk1NDFDNjkuNjE0NiA1My4wMjcgNjkuOTIyMiA1My4wNjM1IDcwLjI0MTIgNTMuMDYzNUM3MC43MDE1IDUzLjA2MzUgNzEuMDkxMSA1Mi45OTk3IDcxLjQxMDIgNTIuODcyMUM3MS43MjkyIDUyLjc0NDUgNzEuOTcwNyA1Mi41NjIyIDcyLjEzNDggNTIuMzI1MkM3Mi4zMDM0IDUyLjA4ODIgNzIuMzg3NyA1MS44MDc5IDcyLjM4NzcgNTEuNDg0NFpNNzguMjczNCA1NC4xMzY3Qzc3Ljc1ODUgNTQuMTM2NyA3Ny4yOTEzIDU0LjA1MDEgNzYuODcyMSA1My44NzdDNzYuNDU3NCA1My42OTkyIDc2LjA5OTYgNTMuNDUwOCA3NS43OTg4IDUzLjEzMThDNzUuNTAyNiA1Mi44MTI4IDc1LjI3NDcgNTIuNDM0NiA3NS4xMTUyIDUxLjk5NzFDNzQuOTU1NyA1MS41NTk2IDc0Ljg3NiA1MS4wODExIDc0Ljg3NiA1MC41NjE1VjUwLjI3NDRDNzQuODc2IDQ5LjY3MjkgNzQuOTY0OCA0OS4xMzc0IDc1LjE0MjYgNDguNjY4Qzc1LjMyMDMgNDguMTk0IDc1LjU2MTggNDcuNzkzIDc1Ljg2NzIgNDcuNDY0OEM3Ni4xNzI1IDQ3LjEzNjcgNzYuNTE4OSA0Ni44ODgzIDc2LjkwNjIgNDYuNzE5N0M3Ny4yOTM2IDQ2LjU1MTEgNzcuNjk0NyA0Ni40NjY4IDc4LjEwOTQgNDYuNDY2OEM3OC42MzggNDYuNDY2OCA3OS4wOTM4IDQ2LjU1NzkgNzkuNDc2NiA0Ni43NDAyQzc5Ljg2MzkgNDYuOTIyNSA4MC4xODA3IDQ3LjE3NzcgODAuNDI2OCA0Ny41MDU5QzgwLjY3MjkgNDcuODI5NCA4MC44NTUxIDQ4LjIxMjIgODAuOTczNiA0OC42NTQzQzgxLjA5MjEgNDkuMDkxOCA4MS4xNTE0IDQ5LjU3MDMgODEuMTUxNCA1MC4wODk4VjUwLjY1NzJINzUuNjI3OVY0OS42MjVINzkuODg2N1Y0OS41MjkzQzc5Ljg2ODUgNDkuMjAxMiA3OS44MDAxIDQ4Ljg4MjIgNzkuNjgxNiA0OC41NzIzQzc5LjU2NzcgNDguMjYyNCA3OS4zODU0IDQ4LjAwNzIgNzkuMTM0OCA0Ny44MDY2Qzc4Ljg4NDEgNDcuNjA2MSA3OC41NDIzIDQ3LjUwNTkgNzguMTA5NCA0Ny41MDU5Qzc3LjgyMjMgNDcuNTA1OSA3Ny41NTc5IDQ3LjU2NzQgNzcuMzE2NCA0Ny42OTA0Qzc3LjA3NDkgNDcuODA4OSA3Ni44Njc1IDQ3Ljk4NjcgNzYuNjk0MyA0OC4yMjM2Qzc2LjUyMTIgNDguNDYwNiA3Ni4zODY3IDQ4Ljc1IDc2LjI5MSA0OS4wOTE4Qzc2LjE5NTMgNDkuNDMzNiA3Ni4xNDc1IDQ5LjgyNzggNzYuMTQ3NSA1MC4yNzQ0VjUwLjU2MTVDNzYuMTQ3NSA1MC45MTI0IDc2LjE5NTMgNTEuMjQyOCA3Ni4yOTEgNTEuNTUyN0M3Ni4zOTEzIDUxLjg1ODEgNzYuNTM0OCA1Mi4xMjcgNzYuNzIxNyA1Mi4zNTk0Qzc2LjkxMzEgNTIuNTkxOCA3Ny4xNDMyIDUyLjc3NDEgNzcuNDEyMSA1Mi45MDYyQzc3LjY4NTUgNTMuMDM4NCA3Ny45OTU0IDUzLjEwNDUgNzguMzQxOCA1My4xMDQ1Qzc4Ljc4ODQgNTMuMTA0NSA3OS4xNjY3IDUzLjAxMzMgNzkuNDc2NiA1Mi44MzExQzc5Ljc4NjUgNTIuNjQ4OCA4MC4wNTc2IDUyLjQwNDkgODAuMjkgNTIuMDk5Nkw4MS4wNTU3IDUyLjcwOEM4MC44OTYyIDUyLjk0OTUgODAuNjkzNCA1My4xNzk3IDgwLjQ0NzMgNTMuMzk4NEM4MC4yMDEyIDUzLjYxNzIgNzkuODk4MSA1My43OTQ5IDc5LjUzODEgNTMuOTMxNkM3OS4xODI2IDU0LjA2ODQgNzguNzYxMSA1NC4xMzY3IDc4LjI3MzQgNTQuMTM2N1pNODMuODkyNiA0Ny43NjU2VjU0SDgyLjYyNzlWNDYuNjAzNUg4My44NTg0TDgzLjg5MjYgNDcuNzY1NlpNODYuMjAzMSA0Ni41NjI1TDg2LjE5NjMgNDcuNzM4M0M4Ni4wOTE1IDQ3LjcxNTUgODUuOTkxMiA0Ny43MDE4IDg1Ljg5NTUgNDcuNjk3M0M4NS44MDQ0IDQ3LjY4ODIgODUuNjk5NSA0Ny42ODM2IDg1LjU4MTEgNDcuNjgzNkM4NS4yODk0IDQ3LjY4MzYgODUuMDMxOSA0Ny43MjkyIDg0LjgwODYgNDcuODIwM0M4NC41ODUzIDQ3LjkxMTUgODQuMzk2MiA0OC4wMzkxIDg0LjI0MTIgNDguMjAzMUM4NC4wODYzIDQ4LjM2NzIgODMuOTYzMiA0OC41NjMyIDgzLjg3MjEgNDguNzkxQzgzLjc4NTUgNDkuMDE0MyA4My43Mjg1IDQ5LjI2MDQgODMuNzAxMiA0OS41MjkzTDgzLjM0NTcgNDkuNzM0NEM4My4zNDU3IDQ5LjI4NzggODMuMzg5IDQ4Ljg2ODUgODMuNDc1NiA0OC40NzY2QzgzLjU2NjcgNDguMDg0NiA4My43MDU3IDQ3LjczODMgODMuODkyNiA0Ny40Mzc1Qzg0LjA3OTQgNDcuMTMyMiA4NC4zMTY0IDQ2Ljg5NTIgODQuNjAzNSA0Ni43MjY2Qzg0Ljg5NTIgNDYuNTUzNCA4NS4yNDE1IDQ2LjQ2NjggODUuNjQyNiA0Ni40NjY4Qzg1LjczMzcgNDYuNDY2OCA4NS44Mzg1IDQ2LjQ3ODIgODUuOTU3IDQ2LjUwMUM4Ni4wNzU1IDQ2LjUxOTIgODYuMTU3NiA0Ni41Mzk3IDg2LjIwMzEgNDYuNTYyNVpNODkuNzQ0MSA1Mi44NTg0TDkxLjc2NzYgNDYuNjAzNUg5My4wNTk2TDkwLjQwMDQgNTRIODkuNTUyN0w4OS43NDQxIDUyLjg1ODRaTTg4LjA1NTcgNDYuNjAzNUw5MC4xNDA2IDUyLjg5MjZMOTAuMjg0MiA1NEg4OS40MzY1TDg2Ljc1NjggNDYuNjAzNUg4OC4wNTU3Wk05NS42NTA0IDQ2LjYwMzVWNTRIOTQuMzc4OVY0Ni42MDM1SDk1LjY1MDRaTTk0LjI4MzIgNDQuNjQxNkM5NC4yODMyIDQ0LjQzNjUgOTQuMzQ0NyA0NC4yNjMzIDk0LjQ2NzggNDQuMTIyMUM5NC41OTU0IDQzLjk4MDggOTQuNzgyMiA0My45MTAyIDk1LjAyODMgNDMuOTEwMkM5NS4yNjk5IDQzLjkxMDIgOTUuNDU0NCA0My45ODA4IDk1LjU4MiA0NC4xMjIxQzk1LjcxNDIgNDQuMjYzMyA5NS43ODAzIDQ0LjQzNjUgOTUuNzgwMyA0NC42NDE2Qzk1Ljc4MDMgNDQuODM3NiA5NS43MTQyIDQ1LjAwNjIgOTUuNTgyIDQ1LjE0NzVDOTUuNDU0NCA0NS4yODQyIDk1LjI2OTkgNDUuMzUyNSA5NS4wMjgzIDQ1LjM1MjVDOTQuNzgyMiA0NS4zNTI1IDk0LjU5NTQgNDUuMjg0MiA5NC40Njc4IDQ1LjE0NzVDOTQuMzQ0NyA0NS4wMDYyIDk0LjI4MzIgNDQuODM3NiA5NC4yODMyIDQ0LjY0MTZaTTEwMC42NDEgNTMuMDk3N0MxMDAuOTQxIDUzLjA5NzcgMTAxLjIxOSA1My4wMzYxIDEwMS40NzUgNTIuOTEzMUMxMDEuNzMgNTIuNzkgMTAxLjkzOSA1Mi42MjE0IDEwMi4xMDQgNTIuNDA3MkMxMDIuMjY4IDUyLjE4ODUgMTAyLjM2MSA1MS45NDAxIDEwMi4zODQgNTEuNjYyMUgxMDMuNTg3QzEwMy41NjQgNTIuMDk5NiAxMDMuNDE2IDUyLjUwNzUgMTAzLjE0MyA1Mi44ODU3QzEwMi44NzQgNTMuMjU5NCAxMDIuNTIxIDUzLjU2MjUgMTAyLjA4MyA1My43OTQ5QzEwMS42NDYgNTQuMDIyOCAxMDEuMTY1IDU0LjEzNjcgMTAwLjY0MSA1NC4xMzY3QzEwMC4wODUgNTQuMTM2NyA5OS41OTkzIDU0LjAzODcgOTkuMTg0NiA1My44NDI4Qzk4Ljc3NDQgNTMuNjQ2OCA5OC40MzI2IDUzLjM3NzkgOTguMTU5MiA1My4wMzYxQzk3Ljg5MDMgNTIuNjk0MyA5Ny42ODc1IDUyLjMwMjQgOTcuNTUwOCA1MS44NjA0Qzk3LjQxODYgNTEuNDEzNyA5Ny4zNTI1IDUwLjk0MjEgOTcuMzUyNSA1MC40NDUzVjUwLjE1ODJDOTcuMzUyNSA0OS42NjE1IDk3LjQxODYgNDkuMTkyMSA5Ny41NTA4IDQ4Ljc1Qzk3LjY4NzUgNDguMzAzNCA5Ny44OTAzIDQ3LjkwOTIgOTguMTU5MiA0Ny41Njc0Qzk4LjQzMjYgNDcuMjI1NiA5OC43NzQ0IDQ2Ljk1NjcgOTkuMTg0NiA0Ni43NjA3Qzk5LjU5OTMgNDYuNTY0OCAxMDAuMDg1IDQ2LjQ2NjggMTAwLjY0MSA0Ni40NjY4QzEwMS4yMTkgNDYuNDY2OCAxMDEuNzI1IDQ2LjU4NTMgMTAyLjE1OCA0Ni44MjIzQzEwMi41OTEgNDcuMDU0NyAxMDIuOTMxIDQ3LjM3MzcgMTAzLjE3NyA0Ny43NzkzQzEwMy40MjcgNDguMTgwMyAxMDMuNTY0IDQ4LjYzNjEgMTAzLjU4NyA0OS4xNDY1SDEwMi4zODRDMTAyLjM2MSA0OC44NDExIDEwMi4yNzQgNDguNTY1NCAxMDIuMTI0IDQ4LjMxOTNDMTAxLjk3OCA0OC4wNzMyIDEwMS43NzggNDcuODc3MyAxMDEuNTIyIDQ3LjczMTRDMTAxLjI3MiA0Ny41ODExIDEwMC45NzggNDcuNTA1OSAxMDAuNjQxIDQ3LjUwNTlDMTAwLjI1MyA0Ny41MDU5IDk5LjkyNzQgNDcuNTgzMyA5OS42NjMxIDQ3LjczODNDOTkuNDAzMyA0Ny44ODg3IDk5LjE5NiA0OC4wOTM4IDk5LjA0MSA0OC4zNTM1Qzk4Ljg5MDYgNDguNjA4NyA5OC43ODEyIDQ4Ljg5MzYgOTguNzEyOSA0OS4yMDhDOTguNjQ5MSA0OS41MTc5IDk4LjYxNzIgNDkuODM0NiA5OC42MTcyIDUwLjE1ODJWNTAuNDQ1M0M5OC42MTcyIDUwLjc2ODkgOTguNjQ5MSA1MS4wODc5IDk4LjcxMjkgNTEuNDAyM0M5OC43NzY3IDUxLjcxNjggOTguODgzOCA1Mi4wMDE2IDk5LjAzNDIgNTIuMjU2OEM5OS4xODkxIDUyLjUxMiA5OS4zOTY1IDUyLjcxNzEgOTkuNjU2MiA1Mi44NzIxQzk5LjkyMDYgNTMuMDIyNSAxMDAuMjQ5IDUzLjA5NzcgMTAwLjY0MSA1My4wOTc3Wk0xMDguMDc4IDU0LjEzNjdDMTA3LjU2MyA1NC4xMzY3IDEwNy4wOTYgNTQuMDUwMSAxMDYuNjc3IDUzLjg3N0MxMDYuMjYyIDUzLjY5OTIgMTA1LjkwNCA1My40NTA4IDEwNS42MDQgNTMuMTMxOEMxMDUuMzA3IDUyLjgxMjggMTA1LjA3OSA1Mi40MzQ2IDEwNC45MiA1MS45OTcxQzEwNC43NiA1MS41NTk2IDEwNC42ODEgNTEuMDgxMSAxMDQuNjgxIDUwLjU2MTVWNTAuMjc0NEMxMDQuNjgxIDQ5LjY3MjkgMTA0Ljc3IDQ5LjEzNzQgMTA0Ljk0NyA0OC42NjhDMTA1LjEyNSA0OC4xOTQgMTA1LjM2NyA0Ny43OTMgMTA1LjY3MiA0Ny40NjQ4QzEwNS45NzcgNDcuMTM2NyAxMDYuMzI0IDQ2Ljg4ODMgMTA2LjcxMSA0Ni43MTk3QzEwNy4wOTggNDYuNTUxMSAxMDcuNDk5IDQ2LjQ2NjggMTA3LjkxNCA0Ni40NjY4QzEwOC40NDMgNDYuNDY2OCAxMDguODk4IDQ2LjU1NzkgMTA5LjI4MSA0Ni43NDAyQzEwOS42NjkgNDYuOTIyNSAxMDkuOTg1IDQ3LjE3NzcgMTEwLjIzMSA0Ny41MDU5QzExMC40NzggNDcuODI5NCAxMTAuNjYgNDguMjEyMiAxMTAuNzc4IDQ4LjY1NDNDMTEwLjg5NyA0OS4wOTE4IDExMC45NTYgNDkuNTcwMyAxMTAuOTU2IDUwLjA4OThWNTAuNjU3MkgxMDUuNDMzVjQ5LjYyNUgxMDkuNjkxVjQ5LjUyOTNDMTA5LjY3MyA0OS4yMDEyIDEwOS42MDUgNDguODgyMiAxMDkuNDg2IDQ4LjU3MjNDMTA5LjM3MiA0OC4yNjI0IDEwOS4xOSA0OC4wMDcyIDEwOC45MzkgNDcuODA2NkMxMDguNjg5IDQ3LjYwNjEgMTA4LjM0NyA0Ny41MDU5IDEwNy45MTQgNDcuNTA1OUMxMDcuNjI3IDQ3LjUwNTkgMTA3LjM2MyA0Ny41Njc0IDEwNy4xMjEgNDcuNjkwNEMxMDYuODggNDcuODA4OSAxMDYuNjcyIDQ3Ljk4NjcgMTA2LjQ5OSA0OC4yMjM2QzEwNi4zMjYgNDguNDYwNiAxMDYuMTkxIDQ4Ljc1IDEwNi4wOTYgNDkuMDkxOEMxMDYgNDkuNDMzNiAxMDUuOTUyIDQ5LjgyNzggMTA1Ljk1MiA1MC4yNzQ0VjUwLjU2MTVDMTA1Ljk1MiA1MC45MTI0IDEwNiA1MS4yNDI4IDEwNi4wOTYgNTEuNTUyN0MxMDYuMTk2IDUxLjg1ODEgMTA2LjM0IDUyLjEyNyAxMDYuNTI2IDUyLjM1OTRDMTA2LjcxOCA1Mi41OTE4IDEwNi45NDggNTIuNzc0MSAxMDcuMjE3IDUyLjkwNjJDMTA3LjQ5IDUzLjAzODQgMTA3LjggNTMuMTA0NSAxMDguMTQ2IDUzLjEwNDVDMTA4LjU5MyA1My4xMDQ1IDEwOC45NzEgNTMuMDEzMyAxMDkuMjgxIDUyLjgzMTFDMTA5LjU5MSA1Mi42NDg4IDEwOS44NjIgNTIuNDA0OSAxMTAuMDk1IDUyLjA5OTZMMTEwLjg2IDUyLjcwOEMxMTAuNzAxIDUyLjk0OTUgMTEwLjQ5OCA1My4xNzk3IDExMC4yNTIgNTMuMzk4NEMxMTAuMDA2IDUzLjYxNzIgMTA5LjcwMyA1My43OTQ5IDEwOS4zNDMgNTMuOTMxNkMxMDguOTg3IDU0LjA2ODQgMTA4LjU2NiA1NC4xMzY3IDEwOC4wNzggNTQuMTM2N1pcIiBmaWxsPVwiIzY0NzQ4QlwiLz5cblx0XHQ8cGF0aCBkPVwiTTI5LjI1IDY1Ljc1Vjc2LjI1SDE4Ljc1VjY1Ljc1SDI5LjI1Wk0yOS4yNSA2NC4yNUgxOC43NUMxNy45MjUgNjQuMjUgMTcuMjUgNjQuOTI1IDE3LjI1IDY1Ljc1Vjc2LjI1QzE3LjI1IDc3LjA3NSAxNy45MjUgNzcuNzUgMTguNzUgNzcuNzVIMjkuMjVDMzAuMDc1IDc3Ljc1IDMwLjc1IDc3LjA3NSAzMC43NSA3Ni4yNVY2NS43NUMzMC43NSA2NC45MjUgMzAuMDc1IDY0LjI1IDI5LjI1IDY0LjI1WlwiIGZpbGw9XCIjNjQ3NDhCXCIvPlxuXHRcdDxwYXRoIGQ9XCJNMzkuNTAzOSA3Mi43MDdMNDEuMzM4NCA2Ni4yNTc4SDQyLjIyNzFMNDEuNzEyOSA2OC43NjUxTDM5LjczODggNzUuNUgzOC44NTY0TDM5LjUwMzkgNzIuNzA3Wk0zNy42MDYgNjYuMjU3OEwzOS4wNjU5IDcyLjU4MDFMMzkuNTAzOSA3NS41SDM4LjYyNzlMMzYuMzg3MiA2Ni4yNTc4SDM3LjYwNlpNNDQuNjAxMSA3Mi41NzM3TDQ2LjAyOTMgNjYuMjU3OEg0Ny4yNTQ0TDQ1LjAyIDc1LjVINDQuMTQ0TDQ0LjYwMTEgNzIuNTczN1pNNDIuMzYwNCA2Ni4yNTc4TDQ0LjE0NCA3Mi43MDdMNDQuNzkxNSA3NS41SDQzLjkwOTJMNDIuMDA0OSA2OC43NjUxTDQxLjQ4NDQgNjYuMjU3OEg0Mi4zNjA0Wk01MS4wODIgNzUuNjI3QzUwLjYwMzggNzUuNjI3IDUwLjE3MDEgNzUuNTQ2NSA0OS43ODA4IDc1LjM4NTdDNDkuMzk1NyA3NS4yMjA3IDQ5LjA2MzUgNzQuOTkwMSA0OC43ODQyIDc0LjY5MzhDNDguNTA5MSA3NC4zOTc2IDQ4LjI5NzUgNzQuMDQ2NCA0OC4xNDk0IDczLjY0MDFDNDguMDAxMyA3My4yMzM5IDQ3LjkyNzIgNzIuNzg5NiA0Ny45MjcyIDcyLjMwNzFWNzIuMDQwNUM0Ny45MjcyIDcxLjQ4MTkgNDguMDA5OCA3MC45ODQ3IDQ4LjE3NDggNzAuNTQ4OEM0OC4zMzk4IDcwLjEwODcgNDguNTY0MSA2OS43MzYzIDQ4Ljg0NzcgNjkuNDMxNkM0OS4xMzEyIDY5LjEyNyA0OS40NTI4IDY4Ljg5NjMgNDkuODEyNSA2OC43Mzk3QzUwLjE3MjIgNjguNTgzMiA1MC41NDQ2IDY4LjUwNDkgNTAuOTI5NyA2OC41MDQ5QzUxLjQyMDYgNjguNTA0OSA1MS44NDM4IDY4LjU4OTUgNTIuMTk5MiA2OC43NTg4QzUyLjU1ODkgNjguOTI4MSA1Mi44NTMgNjkuMTY1IDUzLjA4MTUgNjkuNDY5N0M1My4zMTAxIDY5Ljc3MDIgNTMuNDc5MyA3MC4xMjU3IDUzLjU4OTQgNzAuNTM2MUM1My42OTk0IDcwLjk0MjQgNTMuNzU0NCA3MS4zODY3IDUzLjc1NDQgNzEuODY5MVY3Mi4zOTZINDguNjI1NVY3MS40Mzc1SDUyLjU4MDFWNzEuMzQ4NkM1Mi41NjMyIDcxLjA0MzkgNTIuNDk5NyA3MC43NDc3IDUyLjM4OTYgNzAuNDZDNTIuMjgzOSA3MC4xNzIyIDUyLjExNDYgNjkuOTM1MiA1MS44ODE4IDY5Ljc0OUM1MS42NDkxIDY5LjU2MjggNTEuMzMxNyA2OS40Njk3IDUwLjkyOTcgNjkuNDY5N0M1MC42NjMxIDY5LjQ2OTcgNTAuNDE3NiA2OS41MjY5IDUwLjE5MzQgNjkuNjQxMUM0OS45NjkxIDY5Ljc1MTEgNDkuNzc2NSA2OS45MTYyIDQ5LjYxNTcgNzAuMTM2MkM0OS40NTQ5IDcwLjM1NjMgNDkuMzMwMSA3MC42MjUgNDkuMjQxMiA3MC45NDI0QzQ5LjE1MjMgNzEuMjU5OCA0OS4xMDc5IDcxLjYyNTggNDkuMTA3OSA3Mi4wNDA1VjcyLjMwNzFDNDkuMTA3OSA3Mi42MzMgNDkuMTUyMyA3Mi45Mzk4IDQ5LjI0MTIgNzMuMjI3NUM0OS4zMzQzIDczLjUxMTEgNDkuNDY3NiA3My43NjA3IDQ5LjY0MTEgNzMuOTc2NkM0OS44MTg4IDc0LjE5MjQgNTAuMDMyNiA3NC4zNjE3IDUwLjI4MjIgNzQuNDg0NEM1MC41MzYxIDc0LjYwNzEgNTAuODIzOSA3NC42Njg1IDUxLjE0NTUgNzQuNjY4NUM1MS41NjAyIDc0LjY2ODUgNTEuOTExNSA3NC41ODM4IDUyLjE5OTIgNzQuNDE0NkM1Mi40ODcgNzQuMjQ1MyA1Mi43Mzg4IDc0LjAxODkgNTIuOTU0NiA3My43MzU0TDUzLjY2NTUgNzQuMzAwM0M1My41MTc0IDc0LjUyNDYgNTMuMzI5MSA3NC43MzgzIDUzLjEwMDYgNzQuOTQxNEM1Mi44NzIxIDc1LjE0NDUgNTIuNTkwNyA3NS4zMDk2IDUyLjI1NjMgNzUuNDM2NUM1MS45MjYzIDc1LjU2MzUgNTEuNTM0OCA3NS42MjcgNTEuMDgyIDc1LjYyN1pNNTYuNDAxNCA2NS43NVY3NS41SDU1LjIyMDdWNjUuNzVINTYuNDAxNFpNNTkuNTYyNSA2NS43NVY3NS41SDU4LjM4MThWNjUuNzVINTkuNTYyNVpNNjIuNjIyMSA3MC4wOTgxVjc1LjVINjEuNDQ3OFY2OC42MzE4SDYyLjU1ODZMNjIuNjIyMSA3MC4wOTgxWk02Mi4zNDI4IDcxLjgwNTdMNjEuODU0IDcxLjc4NjZDNjEuODU4MiA3MS4zMTY5IDYxLjkyODEgNzAuODgzMSA2Mi4wNjM1IDcwLjQ4NTRDNjIuMTk4OSA3MC4wODMzIDYyLjM4OTMgNjkuNzM0MiA2Mi42MzQ4IDY5LjQzOEM2Mi44ODAyIDY5LjE0MTggNjMuMTcyMiA2OC45MTMyIDYzLjUxMDcgNjguNzUyNEM2My44NTM1IDY4LjU4NzQgNjQuMjMyMyA2OC41MDQ5IDY0LjY0NyA2OC41MDQ5QzY0Ljk4NTUgNjguNTA0OSA2NS4yOTAyIDY4LjU1MTQgNjUuNTYxIDY4LjY0NDVDNjUuODMxOSA2OC43MzM0IDY2LjA2MjUgNjguODc3MyA2Ni4yNTI5IDY5LjA3NjJDNjYuNDQ3NiA2OS4yNzUxIDY2LjU5NTcgNjkuNTMzMiA2Ni42OTczIDY5Ljg1MDZDNjYuNzk4OCA3MC4xNjM3IDY2Ljg0OTYgNzAuNTQ2NyA2Ni44NDk2IDcwLjk5OTVWNzUuNUg2NS42Njg5VjcwLjk4NjhDNjUuNjY4OSA3MC42MjcxIDY1LjYxNiA3MC4zMzk0IDY1LjUxMDMgNzAuMTIzNUM2NS40MDQ1IDY5LjkwMzUgNjUuMjUgNjkuNzQ0OCA2NS4wNDY5IDY5LjY0NzVDNjQuODQzOCA2OS41NDU5IDY0LjU5NDEgNjkuNDk1MSA2NC4yOTc5IDY5LjQ5NTFDNjQuMDA1OSA2OS40OTUxIDYzLjczOTMgNjkuNTU2NSA2My40OTggNjkuNjc5MkM2My4yNjExIDY5LjgwMTkgNjMuMDU1OCA2OS45NzEyIDYyLjg4MjMgNzAuMTg3QzYyLjcxMzEgNzAuNDAyOCA2Mi41Nzk4IDcwLjY1MDQgNjIuNDgyNCA3MC45Mjk3QzYyLjM4OTMgNzEuMjA0OCA2Mi4zNDI4IDcxLjQ5NjcgNjIuMzQyOCA3MS44MDU3Wk03MS40ODM0IDc1LjYyN0M3MS4wMDUyIDc1LjYyNyA3MC41NzE1IDc1LjU0NjUgNzAuMTgyMSA3NS4zODU3QzY5Ljc5NyA3NS4yMjA3IDY5LjQ2NDggNzQuOTkwMSA2OS4xODU1IDc0LjY5MzhDNjguOTEwNSA3NC4zOTc2IDY4LjY5ODkgNzQuMDQ2NCA2OC41NTA4IDczLjY0MDFDNjguNDAyNyA3My4yMzM5IDY4LjMyODYgNzIuNzg5NiA2OC4zMjg2IDcyLjMwNzFWNzIuMDQwNUM2OC4zMjg2IDcxLjQ4MTkgNjguNDExMSA3MC45ODQ3IDY4LjU3NjIgNzAuNTQ4OEM2OC43NDEyIDcwLjEwODcgNjguOTY1NSA2OS43MzYzIDY5LjI0OSA2OS40MzE2QzY5LjUzMjYgNjkuMTI3IDY5Ljg1NDIgNjguODk2MyA3MC4yMTM5IDY4LjczOTdDNzAuNTczNiA2OC41ODMyIDcwLjk0NiA2OC41MDQ5IDcxLjMzMTEgNjguNTA0OUM3MS44MjE5IDY4LjUwNDkgNzIuMjQ1MSA2OC41ODk1IDcyLjYwMDYgNjguNzU4OEM3Mi45NjAzIDY4LjkyODEgNzMuMjU0NCA2OS4xNjUgNzMuNDgyOSA2OS40Njk3QzczLjcxMTQgNjkuNzcwMiA3My44ODA3IDcwLjEyNTcgNzMuOTkwNyA3MC41MzYxQzc0LjEwMDcgNzAuOTQyNCA3NC4xNTU4IDcxLjM4NjcgNzQuMTU1OCA3MS44NjkxVjcyLjM5Nkg2OS4wMjY5VjcxLjQzNzVINzIuOTgxNFY3MS4zNDg2QzcyLjk2NDUgNzEuMDQzOSA3Mi45MDEgNzAuNzQ3NyA3Mi43OTEgNzAuNDZDNzIuNjg1MiA3MC4xNzIyIDcyLjUxNiA2OS45MzUyIDcyLjI4MzIgNjkuNzQ5QzcyLjA1MDUgNjkuNTYyOCA3MS43MzMxIDY5LjQ2OTcgNzEuMzMxMSA2OS40Njk3QzcxLjA2NDUgNjkuNDY5NyA3MC44MTkgNjkuNTI2OSA3MC41OTQ3IDY5LjY0MTFDNzAuMzcwNCA2OS43NTExIDcwLjE3NzkgNjkuOTE2MiA3MC4wMTcxIDcwLjEzNjJDNjkuODU2MyA3MC4zNTYzIDY5LjczMTQgNzAuNjI1IDY5LjY0MjYgNzAuOTQyNEM2OS41NTM3IDcxLjI1OTggNjkuNTA5MyA3MS42MjU4IDY5LjUwOTMgNzIuMDQwNVY3Mi4zMDcxQzY5LjUwOTMgNzIuNjMzIDY5LjU1MzcgNzIuOTM5OCA2OS42NDI2IDczLjIyNzVDNjkuNzM1NyA3My41MTExIDY5Ljg2OSA3My43NjA3IDcwLjA0MjUgNzMuOTc2NkM3MC4yMjAyIDc0LjE5MjQgNzAuNDMzOSA3NC4zNjE3IDcwLjY4MzYgNzQuNDg0NEM3MC45Mzc1IDc0LjYwNzEgNzEuMjI1MyA3NC42Njg1IDcxLjU0NjkgNzQuNjY4NUM3MS45NjE2IDc0LjY2ODUgNzIuMzEyOCA3NC41ODM4IDcyLjYwMDYgNzQuNDE0NkM3Mi44ODgzIDc0LjI0NTMgNzMuMTQwMSA3NC4wMTg5IDczLjM1NiA3My43MzU0TDc0LjA2NjkgNzQuMzAwM0M3My45MTg4IDc0LjUyNDYgNzMuNzMwNSA3NC43MzgzIDczLjUwMiA3NC45NDE0QzczLjI3MzQgNzUuMTQ0NSA3Mi45OTIgNzUuMzA5NiA3Mi42NTc3IDc1LjQzNjVDNzIuMzI3NiA3NS41NjM1IDcxLjkzNjIgNzUuNjI3IDcxLjQ4MzQgNzUuNjI3Wk03OS41MjU5IDczLjY3ODJDNzkuNTI1OSA3My41MDkgNzkuNDg3OCA3My4zNTI0IDc5LjQxMTYgNzMuMjA4NUM3OS4zMzk3IDczLjA2MDQgNzkuMTg5NSA3Mi45MjcxIDc4Ljk2MDkgNzIuODA4NkM3OC43MzY3IDcyLjY4NTkgNzguMzk4MSA3Mi41ODAxIDc3Ljk0NTMgNzIuNDkxMkM3Ny41NjQ1IDcyLjQxMDggNzcuMjE5NiA3Mi4zMTU2IDc2LjkxMDYgNzIuMjA1NkM3Ni42MDYgNzIuMDk1NSA3Ni4zNDU3IDcxLjk2MjIgNzYuMTI5OSA3MS44MDU3Qzc1LjkxODMgNzEuNjQ5MSA3NS43NTU0IDcxLjQ2NSA3NS42NDExIDcxLjI1MzRDNzUuNTI2OSA3MS4wNDE4IDc1LjQ2OTcgNzAuNzk0MyA3NS40Njk3IDcwLjUxMDdDNzUuNDY5NyA3MC4yMzk5IDc1LjUyOSA2OS45ODM5IDc1LjY0NzUgNjkuNzQyN0M3NS43NzAyIDY5LjUwMTUgNzUuOTQxNiA2OS4yODc4IDc2LjE2MTYgNjkuMTAxNkM3Ni4zODU5IDY4LjkxNTQgNzYuNjU0NiA2OC43Njk0IDc2Ljk2NzggNjguNjYzNkM3Ny4yODA5IDY4LjU1NzggNzcuNjMgNjguNTA0OSA3OC4wMTUxIDY4LjUwNDlDNzguNTY1MyA2OC41MDQ5IDc5LjAzNSA2OC42MDIyIDc5LjQyNDMgNjguNzk2OUM3OS44MTM2IDY4Ljk5MTUgODAuMTEyIDY5LjI1MTggODAuMzE5MyA2OS41Nzc2QzgwLjUyNjcgNjkuODk5MyA4MC42MzA0IDcwLjI1NjggODAuNjMwNCA3MC42NTA0SDc5LjQ1NjFDNzkuNDU2MSA3MC40NiA3OS4zOTg5IDcwLjI3NTkgNzkuMjg0NyA3MC4wOTgxQzc5LjE3NDYgNjkuOTE2MiA3OS4wMTE3IDY5Ljc2NiA3OC43OTU5IDY5LjY0NzVDNzguNTg0MyA2OS41MjkgNzguMzI0MSA2OS40Njk3IDc4LjAxNTEgNjkuNDY5N0M3Ny42ODkzIDY5LjQ2OTcgNzcuNDI0OCA2OS41MjA1IDc3LjIyMTcgNjkuNjIyMUM3Ny4wMjI4IDY5LjcxOTQgNzYuODc2OCA2OS44NDQyIDc2Ljc4MzcgNjkuOTk2NkM3Ni42OTQ4IDcwLjE0ODkgNzYuNjUwNCA3MC4zMDk3IDc2LjY1MDQgNzAuNDc5Qzc2LjY1MDQgNzAuNjA2IDc2LjY3MTUgNzAuNzIwMiA3Ni43MTM5IDcwLjgyMThDNzYuNzYwNCA3MC45MTkxIDc2Ljg0MDggNzEuMDEwMSA3Ni45NTUxIDcxLjA5NDdDNzcuMDY5MyA3MS4xNzUxIDc3LjIzMDEgNzEuMjUxMyA3Ny40Mzc1IDcxLjMyMzJDNzcuNjQ0OSA3MS4zOTUyIDc3LjkwOTMgNzEuNDY3MSA3OC4yMzEgNzEuNTM5MUM3OC43OTM4IDcxLjY2NiA3OS4yNTcyIDcxLjgxODQgNzkuNjIxMSA3MS45OTYxQzc5Ljk4NSA3Mi4xNzM4IDgwLjI1NTkgNzIuMzkxOCA4MC40MzM2IDcyLjY0OTlDODAuNjExMyA3Mi45MDggODAuNzAwMiA3My4yMjEyIDgwLjcwMDIgNzMuNTg5NEM4MC43MDAyIDczLjg4OTggODAuNjM2NyA3NC4xNjQ5IDgwLjUwOTggNzQuNDE0NkM4MC4zODcgNzQuNjY0MiA4MC4yMDcyIDc0Ljg4IDc5Ljk3MDIgNzUuMDYyQzc5LjczNzUgNzUuMjM5NyA3OS40NTgyIDc1LjM3OTQgNzkuMTMyMyA3NS40ODFDNzguODEwNyA3NS41NzgzIDc4LjQ0ODkgNzUuNjI3IDc4LjA0NjkgNzUuNjI3Qzc3LjQ0MTcgNzUuNjI3IDc2LjkyOTcgNzUuNTE5IDc2LjUxMDcgNzUuMzAzMkM3Ni4wOTE4IDc1LjA4NzQgNzUuNzc0NCA3NC44MDgxIDc1LjU1ODYgNzQuNDY1M0M3NS4zNDI4IDc0LjEyMjYgNzUuMjM0OSA3My43NjA3IDc1LjIzNDkgNzMuMzc5OUg3Ni40MTU1Qzc2LjQzMjUgNzMuNzAxNSA3Ni41MjU2IDczLjk1NzUgNzYuNjk0OCA3NC4xNDc5Qzc2Ljg2NDEgNzQuMzM0MSA3Ny4wNzE1IDc0LjQ2NzQgNzcuMzE2OSA3NC41NDc5Qzc3LjU2MjMgNzQuNjI0IDc3LjgwNTcgNzQuNjYyMSA3OC4wNDY5IDc0LjY2MjFDNzguMzY4NSA3NC42NjIxIDc4LjYzNzIgNzQuNjE5OCA3OC44NTMgNzQuNTM1MkM3OS4wNzMxIDc0LjQ1MDUgNzkuMjQwMiA3NC4zMzQxIDc5LjM1NDUgNzQuMTg2Qzc5LjQ2ODggNzQuMDM3OSA3OS41MjU5IDczLjg2ODcgNzkuNTI1OSA3My42NzgyWk04Ni4yNDE3IDczLjY3ODJDODYuMjQxNyA3My41MDkgODYuMjAzNiA3My4zNTI0IDg2LjEyNzQgNzMuMjA4NUM4Ni4wNTU1IDczLjA2MDQgODUuOTA1MyA3Mi45MjcxIDg1LjY3NjggNzIuODA4NkM4NS40NTI1IDcyLjY4NTkgODUuMTEzOSA3Mi41ODAxIDg0LjY2MTEgNzIuNDkxMkM4NC4yODAzIDcyLjQxMDggODMuOTM1NCA3Mi4zMTU2IDgzLjYyNjUgNzIuMjA1NkM4My4zMjE4IDcyLjA5NTUgODMuMDYxNSA3MS45NjIyIDgyLjg0NTcgNzEuODA1N0M4Mi42MzQxIDcxLjY0OTEgODIuNDcxMiA3MS40NjUgODIuMzU2OSA3MS4yNTM0QzgyLjI0MjcgNzEuMDQxOCA4Mi4xODU1IDcwLjc5NDMgODIuMTg1NSA3MC41MTA3QzgyLjE4NTUgNzAuMjM5OSA4Mi4yNDQ4IDY5Ljk4MzkgODIuMzYzMyA2OS43NDI3QzgyLjQ4NiA2OS41MDE1IDgyLjY1NzQgNjkuMjg3OCA4Mi44Nzc0IDY5LjEwMTZDODMuMTAxNyA2OC45MTU0IDgzLjM3MDQgNjguNzY5NCA4My42ODM2IDY4LjY2MzZDODMuOTk2NyA2OC41NTc4IDg0LjM0NTkgNjguNTA0OSA4NC43MzEgNjguNTA0OUM4NS4yODExIDY4LjUwNDkgODUuNzUwOCA2OC42MDIyIDg2LjE0MDEgNjguNzk2OUM4Ni41Mjk1IDY4Ljk5MTUgODYuODI3OCA2OS4yNTE4IDg3LjAzNTIgNjkuNTc3NkM4Ny4yNDI1IDY5Ljg5OTMgODcuMzQ2MiA3MC4yNTY4IDg3LjM0NjIgNzAuNjUwNEg4Ni4xNzE5Qzg2LjE3MTkgNzAuNDYgODYuMTE0NyA3MC4yNzU5IDg2LjAwMDUgNzAuMDk4MUM4NS44OTA1IDY5LjkxNjIgODUuNzI3NSA2OS43NjYgODUuNTExNyA2OS42NDc1Qzg1LjMwMDEgNjkuNTI5IDg1LjAzOTkgNjkuNDY5NyA4NC43MzEgNjkuNDY5N0M4NC40MDUxIDY5LjQ2OTcgODQuMTQwNiA2OS41MjA1IDgzLjkzNzUgNjkuNjIyMUM4My43Mzg2IDY5LjcxOTQgODMuNTkyNiA2OS44NDQyIDgzLjQ5OTUgNjkuOTk2NkM4My40MTA2IDcwLjE0ODkgODMuMzY2MiA3MC4zMDk3IDgzLjM2NjIgNzAuNDc5QzgzLjM2NjIgNzAuNjA2IDgzLjM4NzQgNzAuNzIwMiA4My40Mjk3IDcwLjgyMThDODMuNDc2MiA3MC45MTkxIDgzLjU1NjYgNzEuMDEwMSA4My42NzA5IDcxLjA5NDdDODMuNzg1MiA3MS4xNzUxIDgzLjk0NiA3MS4yNTEzIDg0LjE1MzMgNzEuMzIzMkM4NC4zNjA3IDcxLjM5NTIgODQuNjI1MiA3MS40NjcxIDg0Ljk0NjggNzEuNTM5MUM4NS41MDk2IDcxLjY2NiA4NS45NzMgNzEuODE4NCA4Ni4zMzY5IDcxLjk5NjFDODYuNzAwOCA3Mi4xNzM4IDg2Ljk3MTcgNzIuMzkxOCA4Ny4xNDk0IDcyLjY0OTlDODcuMzI3MSA3Mi45MDggODcuNDE2IDczLjIyMTIgODcuNDE2IDczLjU4OTRDODcuNDE2IDczLjg4OTggODcuMzUyNSA3NC4xNjQ5IDg3LjIyNTYgNzQuNDE0NkM4Ny4xMDI5IDc0LjY2NDIgODYuOTIzIDc0Ljg4IDg2LjY4NiA3NS4wNjJDODYuNDUzMyA3NS4yMzk3IDg2LjE3NCA3NS4zNzk0IDg1Ljg0ODEgNzUuNDgxQzg1LjUyNjUgNzUuNTc4MyA4NS4xNjQ3IDc1LjYyNyA4NC43NjI3IDc1LjYyN0M4NC4xNTc2IDc1LjYyNyA4My42NDU1IDc1LjUxOSA4My4yMjY2IDc1LjMwMzJDODIuODA3NiA3NS4wODc0IDgyLjQ5MDIgNzQuODA4MSA4Mi4yNzQ0IDc0LjQ2NTNDODIuMDU4NiA3NC4xMjI2IDgxLjk1MDcgNzMuNzYwNyA4MS45NTA3IDczLjM3OTlIODMuMTMxM0M4My4xNDgzIDczLjcwMTUgODMuMjQxNCA3My45NTc1IDgzLjQxMDYgNzQuMTQ3OUM4My41Nzk5IDc0LjMzNDEgODMuNzg3MyA3NC40Njc0IDg0LjAzMjcgNzQuNTQ3OUM4NC4yNzgyIDc0LjYyNCA4NC41MjE1IDc0LjY2MjEgODQuNzYyNyA3NC42NjIxQzg1LjA4NDMgNzQuNjYyMSA4NS4zNTMgNzQuNjE5OCA4NS41Njg4IDc0LjUzNTJDODUuNzg4OSA3NC40NTA1IDg1Ljk1NjEgNzQuMzM0MSA4Ni4wNzAzIDc0LjE4NkM4Ni4xODQ2IDc0LjAzNzkgODYuMjQxNyA3My44Njg3IDg2LjI0MTcgNzMuNjc4MlpNOTMuMzUxMSA2OS45OTY2Vjc1LjVIOTIuMTcwNFY2OC42MzE4SDkzLjI4NzZMOTMuMzUxMSA2OS45OTY2Wk05My4xMDk5IDcxLjgwNTdMOTIuNTY0IDcxLjc4NjZDOTIuNTY4MiA3MS4zMTY5IDkyLjYyOTYgNzAuODgzMSA5Mi43NDggNzAuNDg1NEM5Mi44NjY1IDcwLjA4MzMgOTMuMDQyMiA2OS43MzQyIDkzLjI3NDkgNjkuNDM4QzkzLjUwNzYgNjkuMTQxOCA5My43OTc1IDY4LjkxMzIgOTQuMTQ0NSA2OC43NTI0Qzk0LjQ5MTUgNjguNTg3NCA5NC44OTM2IDY4LjUwNDkgOTUuMzUwNiA2OC41MDQ5Qzk1LjY3MjIgNjguNTA0OSA5NS45Njg0IDY4LjU1MTQgOTYuMjM5MyA2OC42NDQ1Qzk2LjUxMDEgNjguNzMzNCA5Ni43NDUgNjguODc1MiA5Ni45NDM4IDY5LjA2OThDOTcuMTQyNyA2OS4yNjQ1IDk3LjI5NzIgNjkuNTE0MiA5Ny40MDcyIDY5LjgxODhDOTcuNTE3MyA3MC4xMjM1IDk3LjU3MjMgNzAuNDkxNyA5Ny41NzIzIDcwLjkyMzNWNzUuNUg5Ni4zOTc5VjcwLjk4MDVDOTYuMzk3OSA3MC42MjA4IDk2LjMzNjYgNzAuMzMzIDk2LjIxMzkgNzAuMTE3MkM5Ni4wOTU0IDY5LjkwMTQgOTUuOTI2MSA2OS43NDQ4IDk1LjcwNjEgNjkuNjQ3NUM5NS40ODYgNjkuNTQ1OSA5NS4yMjc5IDY5LjQ5NTEgOTQuOTMxNiA2OS40OTUxQzk0LjU4NDYgNjkuNDk1MSA5NC4yOTQ4IDY5LjU1NjUgOTQuMDYyIDY5LjY3OTJDOTMuODI5MyA2OS44MDE5IDkzLjY0MzEgNjkuOTcxMiA5My41MDM0IDcwLjE4N0M5My4zNjM4IDcwLjQwMjggOTMuMjYyMiA3MC42NTA0IDkzLjE5ODcgNzAuOTI5N0M5My4xMzk1IDcxLjIwNDggOTMuMTA5OSA3MS40OTY3IDkzLjEwOTkgNzEuODA1N1pNOTcuNTU5NiA3MS4xNTgyTDk2Ljc3MjUgNzEuMzk5NEM5Ni43NzY3IDcxLjAyMjggOTYuODM4MSA3MC42NjEgOTYuOTU2NSA3MC4zMTRDOTcuMDc5MyA2OS45NjcgOTcuMjU0OSA2OS42NTggOTcuNDgzNCA2OS4zODcyQzk3LjcxNjEgNjkuMTE2NCA5OC4wMDE4IDY4LjkwMjcgOTguMzQwMyA2OC43NDYxQzk4LjY3ODkgNjguNTg1MyA5OS4wNjYxIDY4LjUwNDkgOTkuNTAyIDY4LjUwNDlDOTkuODcwMSA2OC41MDQ5IDEwMC4xOTYgNjguNTUzNSAxMDAuNDc5IDY4LjY1MDlDMTAwLjc2NyA2OC43NDgyIDEwMS4wMDggNjguODk4NCAxMDEuMjAzIDY5LjEwMTZDMTAxLjQwMiA2OS4zMDA1IDEwMS41NTIgNjkuNTU2NSAxMDEuNjU0IDY5Ljg2OTZDMTAxLjc1NSA3MC4xODI4IDEwMS44MDYgNzAuNTU1MiAxMDEuODA2IDcwLjk4NjhWNzUuNUgxMDAuNjI1VjcwLjk3NDFDMTAwLjYyNSA3MC41ODkgMTAwLjU2NCA3MC4yOTA3IDEwMC40NDEgNzAuMDc5MUMxMDAuMzIzIDY5Ljg2MzMgMTAwLjE1NCA2OS43MTMxIDk5LjkzMzYgNjkuNjI4NEM5OS43MTc4IDY5LjUzOTYgOTkuNDU5NiA2OS40OTUxIDk5LjE1OTIgNjkuNDk1MUM5OC45MDEgNjkuNDk1MSA5OC42NzI1IDY5LjUzOTYgOTguNDczNiA2OS42Mjg0Qzk4LjI3NDcgNjkuNzE3MyA5OC4xMDc2IDY5Ljg0IDk3Ljk3MjIgNjkuOTk2NkM5Ny44MzY4IDcwLjE0ODkgOTcuNzMzMSA3MC4zMjQ1IDk3LjY2MTEgNzAuNTIzNEM5Ny41OTM0IDcwLjcyMjMgOTcuNTU5NiA3MC45MzM5IDk3LjU1OTYgNzEuMTU4MlpNMTA3LjYzMyA3NC4zMjU3VjcwLjc5QzEwNy42MzMgNzAuNTE5MiAxMDcuNTc4IDcwLjI4NDMgMTA3LjQ2OCA3MC4wODU0QzEwNy4zNjIgNjkuODgyMyAxMDcuMjAyIDY5LjcyNTcgMTA2Ljk4NiA2OS42MTU3QzEwNi43NyA2OS41MDU3IDEwNi41MDMgNjkuNDUwNyAxMDYuMTg2IDY5LjQ1MDdDMTA1Ljg5IDY5LjQ1MDcgMTA1LjYzIDY5LjUwMTUgMTA1LjQwNSA2OS42MDNDMTA1LjE4NSA2OS43MDQ2IDEwNS4wMTIgNjkuODM3OSAxMDQuODg1IDcwLjAwMjlDMTA0Ljc2MiA3MC4xNjggMTA0LjcwMSA3MC4zNDU3IDEwNC43MDEgNzAuNTM2MUgxMDMuNTI2QzEwMy41MjYgNzAuMjkwNyAxMDMuNTkgNzAuMDQ3NCAxMDMuNzE3IDY5LjgwNjJDMTAzLjg0NCA2OS41NjQ5IDEwNC4wMjYgNjkuMzQ3IDEwNC4yNjMgNjkuMTUyM0MxMDQuNTA0IDY4Ljk1MzUgMTA0Ljc5MiA2OC43OTY5IDEwNS4xMjYgNjguNjgyNkMxMDUuNDY1IDY4LjU2NDEgMTA1Ljg0MSA2OC41MDQ5IDEwNi4yNTYgNjguNTA0OUMxMDYuNzU1IDY4LjUwNDkgMTA3LjE5NSA2OC41ODk1IDEwNy41NzYgNjguNzU4OEMxMDcuOTYxIDY4LjkyODEgMTA4LjI2MiA2OS4xODQxIDEwOC40NzggNjkuNTI2OUMxMDguNjk4IDY5Ljg2NTQgMTA4LjgwOCA3MC4yOTA3IDEwOC44MDggNzAuODAyN1Y3NC4wMDJDMTA4LjgwOCA3NC4yMzA1IDEwOC44MjcgNzQuNDczOCAxMDguODY1IDc0LjczMTlDMTA4LjkwNyA3NC45OTAxIDEwOC45NjggNzUuMjEyMiAxMDkuMDQ5IDc1LjM5ODRWNzUuNUgxMDcuODI0QzEwNy43NjQgNzUuMzY0NiAxMDcuNzE4IDc1LjE4NDcgMTA3LjY4NCA3NC45NjA0QzEwNy42NSA3NC43MzE5IDEwNy42MzMgNzQuNTIwMyAxMDcuNjMzIDc0LjMyNTdaTTEwNy44MzYgNzEuMzM1OUwxMDcuODQ5IDcyLjE2MTFIMTA2LjY2MkMxMDYuMzI4IDcyLjE2MTEgMTA2LjAyOSA3Mi4xODg2IDEwNS43NjcgNzIuMjQzN0MxMDUuNTA1IDcyLjI5NDQgMTA1LjI4NSA3Mi4zNzI3IDEwNS4xMDcgNzIuNDc4NUMxMDQuOTI5IDcyLjU4NDMgMTA0Ljc5NCA3Mi43MTc2IDEwNC43MDEgNzIuODc4NEMxMDQuNjA4IDczLjAzNSAxMDQuNTYxIDczLjIxOTEgMTA0LjU2MSA3My40MzA3QzEwNC41NjEgNzMuNjQ2NSAxMDQuNjEgNzMuODQzMyAxMDQuNzA3IDc0LjAyMUMxMDQuODA0IDc0LjE5ODcgMTA0Ljk1IDc0LjM0MDUgMTA1LjE0NSA3NC40NDYzQzEwNS4zNDQgNzQuNTQ3OSAxMDUuNTg3IDc0LjU5ODYgMTA1Ljg3NSA3NC41OTg2QzEwNi4yMzUgNzQuNTk4NiAxMDYuNTUyIDc0LjUyMjUgMTA2LjgyNyA3NC4zNzAxQzEwNy4xMDIgNzQuMjE3OCAxMDcuMzIgNzQuMDMxNiAxMDcuNDgxIDczLjgxMTVDMTA3LjY0NiA3My41OTE1IDEwNy43MzUgNzMuMzc3OCAxMDcuNzQ4IDczLjE3MDRMMTA4LjI0OSA3My43MzU0QzEwOC4yMTkgNzMuOTEzMSAxMDguMTM5IDc0LjEwOTkgMTA4LjAwOCA3NC4zMjU3QzEwNy44NzcgNzQuNTQxNSAxMDcuNzAxIDc0Ljc0ODkgMTA3LjQ4MSA3NC45NDc4QzEwNy4yNjUgNzUuMTQyNCAxMDcuMDA3IDc1LjMwNTMgMTA2LjcwNyA3NS40MzY1QzEwNi40MSA3NS41NjM1IDEwNi4wNzYgNzUuNjI3IDEwNS43MDQgNzUuNjI3QzEwNS4yMzggNzUuNjI3IDEwNC44MyA3NS41MzYgMTA0LjQ3OSA3NS4zNTRDMTA0LjEzMiA3NS4xNzIgMTAzLjg2MSA3NC45Mjg3IDEwMy42NjYgNzQuNjI0QzEwMy40NzYgNzQuMzE1MSAxMDMuMzggNzMuOTcwMiAxMDMuMzggNzMuNTg5NEMxMDMuMzggNzMuMjIxMiAxMDMuNDUyIDcyLjg5NzUgMTAzLjU5NiA3Mi42MTgyQzEwMy43NCA3Mi4zMzQ2IDEwMy45NDcgNzIuMDk5OCAxMDQuMjE4IDcxLjkxMzZDMTA0LjQ4OSA3MS43MjMxIDEwNC44MTUgNzEuNTc5MyAxMDUuMTk2IDcxLjQ4MTlDMTA1LjU3NyA3MS4zODQ2IDEwNi4wMDIgNzEuMzM1OSAxMDYuNDcyIDcxLjMzNTlIMTA3LjgzNlpNMTE0LjY1NCA3My42NzgyQzExNC42NTQgNzMuNTA5IDExNC42MTYgNzMuMzUyNCAxMTQuNTQgNzMuMjA4NUMxMTQuNDY4IDczLjA2MDQgMTE0LjMxNyA3Mi45MjcxIDExNC4wODkgNzIuODA4NkMxMTMuODY1IDcyLjY4NTkgMTEzLjUyNiA3Mi41ODAxIDExMy4wNzMgNzIuNDkxMkMxMTIuNjkyIDcyLjQxMDggMTEyLjM0NyA3Mi4zMTU2IDExMi4wMzkgNzIuMjA1NkMxMTEuNzM0IDcyLjA5NTUgMTExLjQ3NCA3MS45NjIyIDExMS4yNTggNzEuODA1N0MxMTEuMDQ2IDcxLjY0OTEgMTEwLjg4MyA3MS40NjUgMTEwLjc2OSA3MS4yNTM0QzExMC42NTUgNzEuMDQxOCAxMTAuNTk4IDcwLjc5NDMgMTEwLjU5OCA3MC41MTA3QzExMC41OTggNzAuMjM5OSAxMTAuNjU3IDY5Ljk4MzkgMTEwLjc3NSA2OS43NDI3QzExMC44OTggNjkuNTAxNSAxMTEuMDY5IDY5LjI4NzggMTExLjI5IDY5LjEwMTZDMTExLjUxNCA2OC45MTU0IDExMS43ODMgNjguNzY5NCAxMTIuMDk2IDY4LjY2MzZDMTEyLjQwOSA2OC41NTc4IDExMi43NTggNjguNTA0OSAxMTMuMTQzIDY4LjUwNDlDMTEzLjY5MyA2OC41MDQ5IDExNC4xNjMgNjguNjAyMiAxMTQuNTUyIDY4Ljc5NjlDMTE0Ljk0MiA2OC45OTE1IDExNS4yNCA2OS4yNTE4IDExNS40NDcgNjkuNTc3NkMxMTUuNjU1IDY5Ljg5OTMgMTE1Ljc1OCA3MC4yNTY4IDExNS43NTggNzAuNjUwNEgxMTQuNTg0QzExNC41ODQgNzAuNDYgMTE0LjUyNyA3MC4yNzU5IDExNC40MTMgNzAuMDk4MUMxMTQuMzAzIDY5LjkxNjIgMTE0LjE0IDY5Ljc2NiAxMTMuOTI0IDY5LjY0NzVDMTEzLjcxMiA2OS41MjkgMTEzLjQ1MiA2OS40Njk3IDExMy4xNDMgNjkuNDY5N0MxMTIuODE3IDY5LjQ2OTcgMTEyLjU1MyA2OS41MjA1IDExMi4zNSA2OS42MjIxQzExMi4xNTEgNjkuNzE5NCAxMTIuMDA1IDY5Ljg0NDIgMTExLjkxMiA2OS45OTY2QzExMS44MjMgNzAuMTQ4OSAxMTEuNzc4IDcwLjMwOTcgMTExLjc3OCA3MC40NzlDMTExLjc3OCA3MC42MDYgMTExLjc5OSA3MC43MjAyIDExMS44NDIgNzAuODIxOEMxMTEuODg4IDcwLjkxOTEgMTExLjk2OSA3MS4wMTAxIDExMi4wODMgNzEuMDk0N0MxMTIuMTk3IDcxLjE3NTEgMTEyLjM1OCA3MS4yNTEzIDExMi41NjUgNzEuMzIzMkMxMTIuNzczIDcxLjM5NTIgMTEzLjAzNyA3MS40NjcxIDExMy4zNTkgNzEuNTM5MUMxMTMuOTIyIDcxLjY2NiAxMTQuMzg1IDcxLjgxODQgMTE0Ljc0OSA3MS45OTYxQzExNS4xMTMgNzIuMTczOCAxMTUuMzg0IDcyLjM5MTggMTE1LjU2MiA3Mi42NDk5QzExNS43MzkgNzIuOTA4IDExNS44MjggNzMuMjIxMiAxMTUuODI4IDczLjU4OTRDMTE1LjgyOCA3My44ODk4IDExNS43NjUgNzQuMTY0OSAxMTUuNjM4IDc0LjQxNDZDMTE1LjUxNSA3NC42NjQyIDExNS4zMzUgNzQuODggMTE1LjA5OCA3NS4wNjJDMTE0Ljg2NSA3NS4yMzk3IDExNC41ODYgNzUuMzc5NCAxMTQuMjYgNzUuNDgxQzExMy45MzkgNzUuNTc4MyAxMTMuNTc3IDc1LjYyNyAxMTMuMTc1IDc1LjYyN0MxMTIuNTcgNzUuNjI3IDExMi4wNTggNzUuNTE5IDExMS42MzkgNzUuMzAzMkMxMTEuMjIgNzUuMDg3NCAxMTAuOTAyIDc0LjgwODEgMTEwLjY4NyA3NC40NjUzQzExMC40NzEgNzQuMTIyNiAxMTAuMzYzIDczLjc2MDcgMTEwLjM2MyA3My4zNzk5SDExMS41NDNDMTExLjU2IDczLjcwMTUgMTExLjY1MyA3My45NTc1IDExMS44MjMgNzQuMTQ3OUMxMTEuOTkyIDc0LjMzNDEgMTEyLjE5OSA3NC40Njc0IDExMi40NDUgNzQuNTQ3OUMxMTIuNjkgNzQuNjI0IDExMi45MzQgNzQuNjYyMSAxMTMuMTc1IDc0LjY2MjFDMTEzLjQ5NiA3NC42NjIxIDExMy43NjUgNzQuNjE5OCAxMTMuOTgxIDc0LjUzNTJDMTE0LjIwMSA3NC40NTA1IDExNC4zNjggNzQuMzM0MSAxMTQuNDgyIDc0LjE4NkMxMTQuNTk3IDc0LjAzNzkgMTE0LjY1NCA3My44Njg3IDExNC42NTQgNzMuNjc4MlpNMTIxLjM3IDczLjY3ODJDMTIxLjM3IDczLjUwOSAxMjEuMzMyIDczLjM1MjQgMTIxLjI1NSA3My4yMDg1QzEyMS4xODMgNzMuMDYwNCAxMjEuMDMzIDcyLjkyNzEgMTIwLjgwNSA3Mi44MDg2QzEyMC41OCA3Mi42ODU5IDEyMC4yNDIgNzIuNTgwMSAxMTkuNzg5IDcyLjQ5MTJDMTE5LjQwOCA3Mi40MTA4IDExOS4wNjMgNzIuMzE1NiAxMTguNzU0IDcyLjIwNTZDMTE4LjQ1IDcyLjA5NTUgMTE4LjE4OSA3MS45NjIyIDExNy45NzQgNzEuODA1N0MxMTcuNzYyIDcxLjY0OTEgMTE3LjU5OSA3MS40NjUgMTE3LjQ4NSA3MS4yNTM0QzExNy4zNzEgNzEuMDQxOCAxMTcuMzEzIDcwLjc5NDMgMTE3LjMxMyA3MC41MTA3QzExNy4zMTMgNzAuMjM5OSAxMTcuMzczIDY5Ljk4MzkgMTE3LjQ5MSA2OS43NDI3QzExNy42MTQgNjkuNTAxNSAxMTcuNzg1IDY5LjI4NzggMTE4LjAwNSA2OS4xMDE2QzExOC4yMyA2OC45MTU0IDExOC40OTggNjguNzY5NCAxMTguODEyIDY4LjY2MzZDMTE5LjEyNSA2OC41NTc4IDExOS40NzQgNjguNTA0OSAxMTkuODU5IDY4LjUwNDlDMTIwLjQwOSA2OC41MDQ5IDEyMC44NzkgNjguNjAyMiAxMjEuMjY4IDY4Ljc5NjlDMTIxLjY1NyA2OC45OTE1IDEyMS45NTYgNjkuMjUxOCAxMjIuMTYzIDY5LjU3NzZDMTIyLjM3IDY5Ljg5OTMgMTIyLjQ3NCA3MC4yNTY4IDEyMi40NzQgNzAuNjUwNEgxMjEuM0MxMjEuMyA3MC40NiAxMjEuMjQzIDcwLjI3NTkgMTIxLjEyOCA3MC4wOTgxQzEyMS4wMTggNjkuOTE2MiAxMjAuODU1IDY5Ljc2NiAxMjAuNjQgNjkuNjQ3NUMxMjAuNDI4IDY5LjUyOSAxMjAuMTY4IDY5LjQ2OTcgMTE5Ljg1OSA2OS40Njk3QzExOS41MzMgNjkuNDY5NyAxMTkuMjY5IDY5LjUyMDUgMTE5LjA2NSA2OS42MjIxQzExOC44NjcgNjkuNzE5NCAxMTguNzIxIDY5Ljg0NDIgMTE4LjYyNyA2OS45OTY2QzExOC41MzkgNzAuMTQ4OSAxMTguNDk0IDcwLjMwOTcgMTE4LjQ5NCA3MC40NzlDMTE4LjQ5NCA3MC42MDYgMTE4LjUxNSA3MC43MjAyIDExOC41NTggNzAuODIxOEMxMTguNjA0IDcwLjkxOTEgMTE4LjY4NSA3MS4wMTAxIDExOC43OTkgNzEuMDk0N0MxMTguOTEzIDcxLjE3NTEgMTE5LjA3NCA3MS4yNTEzIDExOS4yODEgNzEuMzIzMkMxMTkuNDg5IDcxLjM5NTIgMTE5Ljc1MyA3MS40NjcxIDEyMC4wNzUgNzEuNTM5MUMxMjAuNjM4IDcxLjY2NiAxMjEuMTAxIDcxLjgxODQgMTIxLjQ2NSA3MS45OTYxQzEyMS44MjkgNzIuMTczOCAxMjIuMSA3Mi4zOTE4IDEyMi4yNzcgNzIuNjQ5OUMxMjIuNDU1IDcyLjkwOCAxMjIuNTQ0IDczLjIyMTIgMTIyLjU0NCA3My41ODk0QzEyMi41NDQgNzMuODg5OCAxMjIuNDggNzQuMTY0OSAxMjIuMzU0IDc0LjQxNDZDMTIyLjIzMSA3NC42NjQyIDEyMi4wNTEgNzQuODggMTIxLjgxNCA3NS4wNjJDMTIxLjU4MSA3NS4yMzk3IDEyMS4zMDIgNzUuMzc5NCAxMjAuOTc2IDc1LjQ4MUMxMjAuNjU0IDc1LjU3ODMgMTIwLjI5MyA3NS42MjcgMTE5Ljg5MSA3NS42MjdDMTE5LjI4NSA3NS42MjcgMTE4Ljc3MyA3NS41MTkgMTE4LjM1NCA3NS4zMDMyQzExNy45MzYgNzUuMDg3NCAxMTcuNjE4IDc0LjgwODEgMTE3LjQwMiA3NC40NjUzQzExNy4xODcgNzQuMTIyNiAxMTcuMDc5IDczLjc2MDcgMTE3LjA3OSA3My4zNzk5SDExOC4yNTlDMTE4LjI3NiA3My43MDE1IDExOC4zNjkgNzMuOTU3NSAxMTguNTM5IDc0LjE0NzlDMTE4LjcwOCA3NC4zMzQxIDExOC45MTUgNzQuNDY3NCAxMTkuMTYxIDc0LjU0NzlDMTE5LjQwNiA3NC42MjQgMTE5LjY0OSA3NC42NjIxIDExOS44OTEgNzQuNjYyMUMxMjAuMjEyIDc0LjY2MjEgMTIwLjQ4MSA3NC42MTk4IDEyMC42OTcgNzQuNTM1MkMxMjAuOTE3IDc0LjQ1MDUgMTIxLjA4NCA3NC4zMzQxIDEyMS4xOTggNzQuMTg2QzEyMS4zMTIgNzQuMDM3OSAxMjEuMzcgNzMuODY4NyAxMjEuMzcgNzMuNjc4MlpNMTI4LjEzNiA3NC4zMjU3VjcwLjc5QzEyOC4xMzYgNzAuNTE5MiAxMjguMDgxIDcwLjI4NDMgMTI3Ljk3MSA3MC4wODU0QzEyNy44NjUgNjkuODgyMyAxMjcuNzA1IDY5LjcyNTcgMTI3LjQ4OSA2OS42MTU3QzEyNy4yNzMgNjkuNTA1NyAxMjcuMDA2IDY5LjQ1MDcgMTI2LjY4OSA2OS40NTA3QzEyNi4zOTMgNjkuNDUwNyAxMjYuMTMyIDY5LjUwMTUgMTI1LjkwOCA2OS42MDNDMTI1LjY4OCA2OS43MDQ2IDEyNS41MTUgNjkuODM3OSAxMjUuMzg4IDcwLjAwMjlDMTI1LjI2NSA3MC4xNjggMTI1LjIwNCA3MC4zNDU3IDEyNS4yMDQgNzAuNTM2MUgxMjQuMDI5QzEyNC4wMjkgNzAuMjkwNyAxMjQuMDkzIDcwLjA0NzQgMTI0LjIyIDY5LjgwNjJDMTI0LjM0NyA2OS41NjQ5IDEyNC41MjkgNjkuMzQ3IDEyNC43NjYgNjkuMTUyM0MxMjUuMDA3IDY4Ljk1MzUgMTI1LjI5NSA2OC43OTY5IDEyNS42MjkgNjguNjgyNkMxMjUuOTY3IDY4LjU2NDEgMTI2LjM0NCA2OC41MDQ5IDEyNi43NTkgNjguNTA0OUMxMjcuMjU4IDY4LjUwNDkgMTI3LjY5OCA2OC41ODk1IDEyOC4wNzkgNjguNzU4OEMxMjguNDY0IDY4LjkyODEgMTI4Ljc2NSA2OS4xODQxIDEyOC45OCA2OS41MjY5QzEyOS4yMDEgNjkuODY1NCAxMjkuMzExIDcwLjI5MDcgMTI5LjMxMSA3MC44MDI3Vjc0LjAwMkMxMjkuMzExIDc0LjIzMDUgMTI5LjMzIDc0LjQ3MzggMTI5LjM2OCA3NC43MzE5QzEyOS40MSA3NC45OTAxIDEyOS40NzEgNzUuMjEyMiAxMjkuNTUyIDc1LjM5ODRWNzUuNUgxMjguMzI3QzEyOC4yNjcgNzUuMzY0NiAxMjguMjIxIDc1LjE4NDcgMTI4LjE4NyA3NC45NjA0QzEyOC4xNTMgNzQuNzMxOSAxMjguMTM2IDc0LjUyMDMgMTI4LjEzNiA3NC4zMjU3Wk0xMjguMzM5IDcxLjMzNTlMMTI4LjM1MiA3Mi4xNjExSDEyNy4xNjVDMTI2LjgzMSA3Mi4xNjExIDEyNi41MzIgNzIuMTg4NiAxMjYuMjcgNzIuMjQzN0MxMjYuMDA4IDcyLjI5NDQgMTI1Ljc4OCA3Mi4zNzI3IDEyNS42MSA3Mi40Nzg1QzEyNS40MzIgNzIuNTg0MyAxMjUuMjk3IDcyLjcxNzYgMTI1LjIwNCA3Mi44Nzg0QzEyNS4xMTEgNzMuMDM1IDEyNS4wNjQgNzMuMjE5MSAxMjUuMDY0IDczLjQzMDdDMTI1LjA2NCA3My42NDY1IDEyNS4xMTMgNzMuODQzMyAxMjUuMjEgNzQuMDIxQzEyNS4zMDcgNzQuMTk4NyAxMjUuNDUzIDc0LjM0MDUgMTI1LjY0OCA3NC40NDYzQzEyNS44NDcgNzQuNTQ3OSAxMjYuMDkgNzQuNTk4NiAxMjYuMzc4IDc0LjU5ODZDMTI2LjczOCA3NC41OTg2IDEyNy4wNTUgNzQuNTIyNSAxMjcuMzMgNzQuMzcwMUMxMjcuNjA1IDc0LjIxNzggMTI3LjgyMyA3NC4wMzE2IDEyNy45ODQgNzMuODExNUMxMjguMTQ5IDczLjU5MTUgMTI4LjIzOCA3My4zNzc4IDEyOC4yNSA3My4xNzA0TDEyOC43NTIgNzMuNzM1NEMxMjguNzIyIDczLjkxMzEgMTI4LjY0MiA3NC4xMDk5IDEyOC41MTEgNzQuMzI1N0MxMjguMzggNzQuNTQxNSAxMjguMjA0IDc0Ljc0ODkgMTI3Ljk4NCA3NC45NDc4QzEyNy43NjggNzUuMTQyNCAxMjcuNTEgNzUuMzA1MyAxMjcuMjA5IDc1LjQzNjVDMTI2LjkxMyA3NS41NjM1IDEyNi41NzkgNzUuNjI3IDEyNi4yMDcgNzUuNjI3QzEyNS43NDEgNzUuNjI3IDEyNS4zMzMgNzUuNTM2IDEyNC45ODEgNzUuMzU0QzEyNC42MzQgNzUuMTcyIDEyNC4zNjQgNzQuOTI4NyAxMjQuMTY5IDc0LjYyNEMxMjMuOTc5IDc0LjMxNTEgMTIzLjg4MyA3My45NzAyIDEyMy44ODMgNzMuNTg5NEMxMjMuODgzIDczLjIyMTIgMTIzLjk1NSA3Mi44OTc1IDEyNC4wOTkgNzIuNjE4MkMxMjQuMjQzIDcyLjMzNDYgMTI0LjQ1IDcyLjA5OTggMTI0LjcyMSA3MS45MTM2QzEyNC45OTIgNzEuNzIzMSAxMjUuMzE4IDcxLjU3OTMgMTI1LjY5OSA3MS40ODE5QzEyNi4wOCA3MS4zODQ2IDEyNi41MDUgNzEuMzM1OSAxMjYuOTc1IDcxLjMzNTlIMTI4LjMzOVpNMTM1LjYwNyA2OC42MzE4SDEzNi42NzRWNzUuMzU0QzEzNi42NzQgNzUuOTU5MSAxMzYuNTUxIDc2LjQ3NTQgMTM2LjMwNiA3Ni45MDI4QzEzNi4wNiA3Ny4zMzAyIDEzNS43MTcgNzcuNjU0IDEzNS4yNzcgNzcuODc0QzEzNC44NDEgNzguMDk4MyAxMzQuMzM4IDc4LjIxMDQgMTMzLjc2NyA3OC4yMTA0QzEzMy41MyA3OC4yMTA0IDEzMy4yNSA3OC4xNzI0IDEzMi45MjkgNzguMDk2MkMxMzIuNjExIDc4LjAyNDMgMTMyLjI5OCA3Ny44OTk0IDEzMS45ODkgNzcuNzIxN0MxMzEuNjg1IDc3LjU0ODIgMTMxLjQyOSA3Ny4zMTMzIDEzMS4yMjEgNzcuMDE3MUwxMzEuODM3IDc2LjMxODhDMTMyLjEyNSA3Ni42NjU5IDEzMi40MjUgNzYuOTA3MSAxMzIuNzM4IDc3LjA0MjVDMTMzLjA1NiA3Ny4xNzc5IDEzMy4zNjkgNzcuMjQ1NiAxMzMuNjc4IDc3LjI0NTZDMTM0LjA1IDc3LjI0NTYgMTM0LjM3MiA3Ny4xNzU4IDEzNC42NDMgNzcuMDM2MUMxMzQuOTEzIDc2Ljg5NjUgMTM1LjEyMyA3Ni42ODkxIDEzNS4yNzEgNzYuNDE0MUMxMzUuNDIzIDc2LjE0MzIgMTM1LjUgNzUuODA4OSAxMzUuNSA3NS40MTExVjcwLjE0MjZMMTM1LjYwNyA2OC42MzE4Wk0xMzAuODc4IDcyLjE0MjFWNzIuMDA4OEMxMzAuODc4IDcxLjQ4NCAxMzAuOTQgNzEuMDA4IDEzMS4wNjIgNzAuNTgwNkMxMzEuMTg5IDcwLjE0ODkgMTMxLjM2OSA2OS43Nzg2IDEzMS42MDIgNjkuNDY5N0MxMzEuODM5IDY5LjE2MDggMTMyLjEyNSA2OC45MjM4IDEzMi40NTkgNjguNzU4OEMxMzIuNzkzIDY4LjU4OTUgMTMzLjE3IDY4LjUwNDkgMTMzLjU4OSA2OC41MDQ5QzEzNC4wMjEgNjguNTA0OSAxMzQuMzk3IDY4LjU4MTEgMTM0LjcxOSA2OC43MzM0QzEzNS4wNDUgNjguODgxNSAxMzUuMzIgNjkuMDk5NCAxMzUuNTQ0IDY5LjM4NzJDMTM1Ljc3MiA2OS42NzA3IDEzNS45NTIgNzAuMDEzNSAxMzYuMDgzIDcwLjQxNTVDMTM2LjIxNSA3MC44MTc1IDEzNi4zMDYgNzEuMjcyNSAxMzYuMzU2IDcxLjc4MDNWNzIuMzY0M0MxMzYuMzEgNzIuODY3OCAxMzYuMjE5IDczLjMyMDYgMTM2LjA4MyA3My43MjI3QzEzNS45NTIgNzQuMTI0NyAxMzUuNzcyIDc0LjQ2NzQgMTM1LjU0NCA3NC43NTFDMTM1LjMyIDc1LjAzNDUgMTM1LjA0NSA3NS4yNTI0IDEzNC43MTkgNzUuNDA0OEMxMzQuMzkzIDc1LjU1MjkgMTM0LjAxMiA3NS42MjcgMTMzLjU3NiA3NS42MjdDMTMzLjE2NiA3NS42MjcgMTMyLjc5MyA3NS41NDAyIDEzMi40NTkgNzUuMzY2N0MxMzIuMTI5IDc1LjE5MzIgMTMxLjg0NSA3NC45NDk5IDEzMS42MDggNzQuNjM2N0MxMzEuMzcxIDc0LjMyMzYgMTMxLjE4OSA3My45NTU0IDEzMS4wNjIgNzMuNTMyMkMxMzAuOTQgNzMuMTA0OCAxMzAuODc4IDcyLjY0MTQgMTMwLjg3OCA3Mi4xNDIxWk0xMzIuMDUzIDcyLjAwODhWNzIuMTQyMUMxMzIuMDUzIDcyLjQ4NDkgMTMyLjA4NyA3Mi44MDY1IDEzMi4xNTQgNzMuMTA2OUMxMzIuMjI2IDczLjQwNzQgMTMyLjMzNCA3My42NzE5IDEzMi40NzggNzMuOTAwNEMxMzIuNjI2IDc0LjEyODkgMTMyLjgxNCA3NC4zMDg4IDEzMy4wNDMgNzQuNDM5OUMxMzMuMjcxIDc0LjU2NjkgMTMzLjU0NCA3NC42MzA0IDEzMy44NjIgNzQuNjMwNEMxMzQuMjUxIDc0LjYzMDQgMTM0LjU3MyA3NC41NDc5IDEzNC44MjcgNzQuMzgyOEMxMzUuMDgxIDc0LjIxNzggMTM1LjI4MiA3My45OTk4IDEzNS40MyA3My43MjlDMTM1LjU4MiA3My40NTgyIDEzNS43MDEgNzMuMTY0MSAxMzUuNzg1IDcyLjg0NjdWNzEuMzE2OUMxMzUuNzM5IDcxLjA4NDEgMTM1LjY2NyA3MC44NTk5IDEzNS41NjkgNzAuNjQ0QzEzNS40NzYgNzAuNDI0IDEzNS4zNTQgNzAuMjI5MyAxMzUuMjAxIDcwLjA2MDFDMTM1LjA1MyA2OS44ODY2IDEzNC44NjkgNjkuNzQ5IDEzNC42NDkgNjkuNjQ3NUMxMzQuNDI5IDY5LjU0NTkgMTM0LjE3MSA2OS40OTUxIDEzMy44NzUgNjkuNDk1MUMxMzMuNTUzIDY5LjQ5NTEgMTMzLjI3NiA2OS41NjI4IDEzMy4wNDMgNjkuNjk4MkMxMzIuODE0IDY5LjgyOTQgMTMyLjYyNiA3MC4wMTE0IDEzMi40NzggNzAuMjQ0MUMxMzIuMzM0IDcwLjQ3MjcgMTMyLjIyNiA3MC43MzkzIDEzMi4xNTQgNzEuMDQzOUMxMzIuMDg3IDcxLjM0NDQgMTMyLjA1MyA3MS42NjYgMTMyLjA1MyA3Mi4wMDg4Wk0xNDEuMzA4IDc1LjYyN0MxNDAuODI5IDc1LjYyNyAxNDAuMzk2IDc1LjU0NjUgMTQwLjAwNiA3NS4zODU3QzEzOS42MjEgNzUuMjIwNyAxMzkuMjg5IDc0Ljk5MDEgMTM5LjAxIDc0LjY5MzhDMTM4LjczNSA3NC4zOTc2IDEzOC41MjMgNzQuMDQ2NCAxMzguMzc1IDczLjY0MDFDMTM4LjIyNyA3My4yMzM5IDEzOC4xNTMgNzIuNzg5NiAxMzguMTUzIDcyLjMwNzFWNzIuMDQwNUMxMzguMTUzIDcxLjQ4MTkgMTM4LjIzNSA3MC45ODQ3IDEzOC40IDcwLjU0ODhDMTM4LjU2NSA3MC4xMDg3IDEzOC43OSA2OS43MzYzIDEzOS4wNzMgNjkuNDMxNkMxMzkuMzU3IDY5LjEyNyAxMzkuNjc4IDY4Ljg5NjMgMTQwLjAzOCA2OC43Mzk3QzE0MC4zOTggNjguNTgzMiAxNDAuNzcgNjguNTA0OSAxNDEuMTU1IDY4LjUwNDlDMTQxLjY0NiA2OC41MDQ5IDE0Mi4wNjkgNjguNTg5NSAxNDIuNDI1IDY4Ljc1ODhDMTQyLjc4NSA2OC45MjgxIDE0My4wNzkgNjkuMTY1IDE0My4zMDcgNjkuNDY5N0MxNDMuNTM2IDY5Ljc3MDIgMTQzLjcwNSA3MC4xMjU3IDE0My44MTUgNzAuNTM2MUMxNDMuOTI1IDcwLjk0MjQgMTQzLjk4IDcxLjM4NjcgMTQzLjk4IDcxLjg2OTFWNzIuMzk2SDEzOC44NTFWNzEuNDM3NUgxNDIuODA2VjcxLjM0ODZDMTQyLjc4OSA3MS4wNDM5IDE0Mi43MjUgNzAuNzQ3NyAxNDIuNjE1IDcwLjQ2QzE0Mi41MDkgNzAuMTcyMiAxNDIuMzQgNjkuOTM1MiAxNDIuMTA3IDY5Ljc0OUMxNDEuODc1IDY5LjU2MjggMTQxLjU1NyA2OS40Njk3IDE0MS4xNTUgNjkuNDY5N0MxNDAuODg5IDY5LjQ2OTcgMTQwLjY0MyA2OS41MjY5IDE0MC40MTkgNjkuNjQxMUMxNDAuMTk1IDY5Ljc1MTEgMTQwLjAwMiA2OS45MTYyIDEzOS44NDEgNzAuMTM2MkMxMzkuNjgxIDcwLjM1NjMgMTM5LjU1NiA3MC42MjUgMTM5LjQ2NyA3MC45NDI0QzEzOS4zNzggNzEuMjU5OCAxMzkuMzMzIDcxLjYyNTggMTM5LjMzMyA3Mi4wNDA1VjcyLjMwNzFDMTM5LjMzMyA3Mi42MzMgMTM5LjM3OCA3Mi45Mzk4IDEzOS40NjcgNzMuMjI3NUMxMzkuNTYgNzMuNTExMSAxMzkuNjkzIDczLjc2MDcgMTM5Ljg2NyA3My45NzY2QzE0MC4wNDQgNzQuMTkyNCAxNDAuMjU4IDc0LjM2MTcgMTQwLjUwOCA3NC40ODQ0QzE0MC43NjIgNzQuNjA3MSAxNDEuMDQ5IDc0LjY2ODUgMTQxLjM3MSA3NC42Njg1QzE0MS43ODYgNzQuNjY4NSAxNDIuMTM3IDc0LjU4MzggMTQyLjQyNSA3NC40MTQ2QzE0Mi43MTMgNzQuMjQ1MyAxNDIuOTY0IDc0LjAxODkgMTQzLjE4IDczLjczNTRMMTQzLjg5MSA3NC4zMDAzQzE0My43NDMgNzQuNTI0NiAxNDMuNTU1IDc0LjczODMgMTQzLjMyNiA3NC45NDE0QzE0My4wOTggNzUuMTQ0NSAxNDIuODE2IDc1LjMwOTYgMTQyLjQ4MiA3NS40MzY1QzE0Mi4xNTIgNzUuNTYzNSAxNDEuNzYgNzUuNjI3IDE0MS4zMDggNzUuNjI3WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDxwYXRoIGQ9XCJNMjIuODU2MyA5Ni45ODEzTDI4LjI3NSA5MS41NDM4TDI3LjQ2ODggOTAuNzM3NUwyMi44NTYzIDk1LjM2ODdMMjAuNjI1IDkzLjEzNzVMMTkuODE4OCA5My45NDM4TDIyLjg1NjMgOTYuOTgxM1pNMTguMzc1IDEwMC43NUMxOC4wNzUgMTAwLjc1IDE3LjgxMjUgMTAwLjYzNyAxNy41ODc1IDEwMC40MTJDMTcuMzYyNSAxMDAuMTg3IDE3LjI1IDk5LjkyNSAxNy4yNSA5OS42MjVWODguMzc1QzE3LjI1IDg4LjA3NSAxNy4zNjI1IDg3LjgxMjUgMTcuNTg3NSA4Ny41ODc1QzE3LjgxMjUgODcuMzYyNSAxOC4wNzUgODcuMjUgMTguMzc1IDg3LjI1SDI5LjYyNUMyOS45MjUgODcuMjUgMzAuMTg3NSA4Ny4zNjI1IDMwLjQxMjUgODcuNTg3NUMzMC42Mzc1IDg3LjgxMjUgMzAuNzUgODguMDc1IDMwLjc1IDg4LjM3NVY5OS42MjVDMzAuNzUgOTkuOTI1IDMwLjYzNzUgMTAwLjE4NyAzMC40MTI1IDEwMC40MTJDMzAuMTg3NSAxMDAuNjM3IDI5LjkyNSAxMDAuNzUgMjkuNjI1IDEwMC43NUgxOC4zNzVaXCIgZmlsbD1cIiM0MjcyRjlcIi8+XG5cdFx0PHBhdGggZD1cIk00NC4xODg1IDkzLjU4NjlWOTQuMTcwOUM0NC4xODg1IDk0Ljg2NDkgNDQuMTAxNyA5NS40ODcgNDMuOTI4MiA5Ni4wMzcxQzQzLjc1NDcgOTYuNTg3MiA0My41MDUgOTcuMDU0OSA0My4xNzkyIDk3LjQzOTlDNDIuODUzNCA5Ny44MjUgNDIuNDYxOSA5OC4xMTkxIDQyLjAwNDkgOTguMzIyM0M0MS41NTIxIDk4LjUyNTQgNDEuMDQ0MyA5OC42MjcgNDAuNDgxNCA5OC42MjdDMzkuOTM1NSA5OC42MjcgMzkuNDM0MSA5OC41MjU0IDM4Ljk3NzEgOTguMzIyM0MzOC41MjQzIDk4LjExOTEgMzguMTMwNyA5Ny44MjUgMzcuNzk2NCA5Ny40Mzk5QzM3LjQ2NjMgOTcuMDU0OSAzNy4yMTAzIDk2LjU4NzIgMzcuMDI4MyA5Ni4wMzcxQzM2Ljg0NjQgOTUuNDg3IDM2Ljc1NTQgOTQuODY0OSAzNi43NTU0IDk0LjE3MDlWOTMuNTg2OUMzNi43NTU0IDkyLjg5MjkgMzYuODQ0MiA5Mi4yNzI5IDM3LjAyMiA5MS43MjcxQzM3LjIwMzkgOTEuMTc2OSAzNy40NiA5MC43MDkzIDM3Ljc5IDkwLjMyNDJDMzguMTIwMSA4OS45MzQ5IDM4LjUxMTYgODkuNjM4NyAzOC45NjQ0IDg5LjQzNTVDMzkuNDIxNCA4OS4yMzI0IDM5LjkyMjkgODkuMTMwOSA0MC40Njg4IDg5LjEzMDlDNDEuMDMxNiA4OS4xMzA5IDQxLjUzOTQgODkuMjMyNCA0MS45OTIyIDg5LjQzNTVDNDIuNDQ5MiA4OS42Mzg3IDQyLjg0MDcgODkuOTM0OSA0My4xNjY1IDkwLjMyNDJDNDMuNDk2NiA5MC43MDkzIDQzLjc0ODQgOTEuMTc2OSA0My45MjE5IDkxLjcyNzFDNDQuMDk5NiA5Mi4yNzI5IDQ0LjE4ODUgOTIuODkyOSA0NC4xODg1IDkzLjU4NjlaTTQyLjk3NjEgOTQuMTcwOVY5My41NzQyQzQyLjk3NjEgOTMuMDI0MSA0Mi45MTg5IDkyLjUzNzQgNDIuODA0NyA5Mi4xMTQzQzQyLjY5NDcgOTEuNjkxMSA0Mi41MzE3IDkxLjMzNTYgNDIuMzE1OSA5MS4wNDc5QzQyLjEwMDEgOTAuNzYwMSA0MS44MzU2IDkwLjU0MjIgNDEuNTIyNSA5MC4zOTRDNDEuMjEzNSA5MC4yNDU5IDQwLjg2MjMgOTAuMTcxOSA0MC40Njg4IDkwLjE3MTlDNDAuMDg3OSA5MC4xNzE5IDM5Ljc0MyA5MC4yNDU5IDM5LjQzNDEgOTAuMzk0QzM5LjEyOTQgOTAuNTQyMiAzOC44NjcgOTAuNzYwMSAzOC42NDcgOTEuMDQ3OUMzOC40MzEyIDkxLjMzNTYgMzguMjY0IDkxLjY5MTEgMzguMTQ1NSA5Mi4xMTQzQzM4LjAyNyA5Mi41Mzc0IDM3Ljk2NzggOTMuMDI0MSAzNy45Njc4IDkzLjU3NDJWOTQuMTcwOUMzNy45Njc4IDk0LjcyNTMgMzguMDI3IDk1LjIxNjEgMzguMTQ1NSA5NS42NDM2QzM4LjI2NCA5Ni4wNjY3IDM4LjQzMzMgOTYuNDI0MyAzOC42NTMzIDk2LjcxNjNDMzguODc3NiA5Ny4wMDQxIDM5LjE0MjEgOTcuMjIyIDM5LjQ0NjggOTcuMzcwMUMzOS43NTU3IDk3LjUxODIgNDAuMTAwNiA5Ny41OTIzIDQwLjQ4MTQgOTcuNTkyM0M0MC44NzkyIDk3LjU5MjMgNDEuMjMyNiA5Ny41MTgyIDQxLjU0MTUgOTcuMzcwMUM0MS44NTA0IDk3LjIyMiA0Mi4xMTA3IDk3LjAwNDEgNDIuMzIyMyA5Ni43MTYzQzQyLjUzODEgOTYuNDI0MyA0Mi43MDEgOTYuMDY2NyA0Mi44MTEgOTUuNjQzNkM0Mi45MjExIDk1LjIxNjEgNDIuOTc2MSA5NC43MjUzIDQyLjk3NjEgOTQuMTcwOVpNNDcuMTIxMSA5MS42MzE4Vjk4LjVINDUuOTQwNFY5MS42MzE4SDQ3LjEyMTFaTTQ1Ljg1MTYgODkuODEwMUM0NS44NTE2IDg5LjYxOTYgNDUuOTA4NyA4OS40NTg4IDQ2LjAyMjkgODkuMzI3NkM0Ni4xNDE0IDg5LjE5NjUgNDYuMzE0OSA4OS4xMzA5IDQ2LjU0MzUgODkuMTMwOUM0Ni43Njc3IDg5LjEzMDkgNDYuOTM5MSA4OS4xOTY1IDQ3LjA1NzYgODkuMzI3NkM0Ny4xODAzIDg5LjQ1ODggNDcuMjQxNyA4OS42MTk2IDQ3LjI0MTcgODkuODEwMUM0Ny4yNDE3IDg5Ljk5MiA0Ny4xODAzIDkwLjE0ODYgNDcuMDU3NiA5MC4yNzk4QzQ2LjkzOTEgOTAuNDA2NyA0Ni43Njc3IDkwLjQ3MDIgNDYuNTQzNSA5MC40NzAyQzQ2LjMxNDkgOTAuNDcwMiA0Ni4xNDE0IDkwLjQwNjcgNDYuMDIyOSA5MC4yNzk4QzQ1LjkwODcgOTAuMTQ4NiA0NS44NTE2IDg5Ljk5MiA0NS44NTE2IDg5LjgxMDFaTTUwLjI4MjIgODguNzVWOTguNUg0OS4xMDE2Vjg4Ljc1SDUwLjI4MjJaTTU3LjEzMTMgOTcuMjgxMkw1OC44OTYgOTEuNjMxOEg1OS42NzA0TDU5LjUxODEgOTIuNzU1NEw1Ny43MjE3IDk4LjVINTYuOTY2M0w1Ny4xMzEzIDk3LjI4MTJaTTU1Ljk0NDMgOTEuNjMxOEw1Ny40NDg3IDk3LjM0NDdMNTcuNTU2NiA5OC41SDU2Ljc2MzJMNTQuNzcgOTEuNjMxOEg1NS45NDQzWk02MS4zNTg5IDk3LjMwMDNMNjIuNzkzNSA5MS42MzE4SDYzLjk2MTRMNjEuOTY4MyA5OC41SDYxLjE4MTJMNjEuMzU4OSA5Ny4zMDAzWk01OS44NDE4IDkxLjYzMThMNjEuNTY4NCA5Ny4xODZMNjEuNzY1MSA5OC41SDYxLjAxNjFMNTkuMTY4OSA5Mi43NDI3TDU5LjAxNjYgOTEuNjMxOEg1OS44NDE4Wk02Ni4zNDE4IDkyLjcxMDlWOTguNUg2NS4xNjc1VjkxLjYzMThINjYuMzEwMUw2Ni4zNDE4IDkyLjcxMDlaTTY4LjQ4NzMgOTEuNTkzOEw2OC40ODEgOTIuNjg1NUM2OC4zODM2IDkyLjY2NDQgNjguMjkwNSA5Mi42NTE3IDY4LjIwMTcgOTIuNjQ3NUM2OC4xMTcgOTIuNjM5IDY4LjAxOTcgOTIuNjM0OCA2Ny45MDk3IDkyLjYzNDhDNjcuNjM4OCA5Mi42MzQ4IDY3LjM5OTcgOTIuNjc3MSA2Ny4xOTI0IDkyLjc2MTdDNjYuOTg1IDkyLjg0NjQgNjYuODA5NCA5Mi45NjQ4IDY2LjY2NTUgOTMuMTE3MkM2Ni41MjE2IDkzLjI2OTUgNjYuNDA3NCA5My40NTE1IDY2LjMyMjggOTMuNjYzMUM2Ni4yNDI0IDkzLjg3MDQgNjYuMTg5NSA5NC4wOTkgNjYuMTY0MSA5NC4zNDg2TDY1LjgzNCA5NC41MzkxQzY1LjgzNCA5NC4xMjQzIDY1Ljg3NDIgOTMuNzM1IDY1Ljk1NDYgOTMuMzcxMUM2Ni4wMzkyIDkzLjAwNzIgNjYuMTY4MyA5Mi42ODU1IDY2LjM0MTggOTIuNDA2MkM2Ni41MTUzIDkyLjEyMjcgNjYuNzM1NCA5MS45MDI3IDY3LjAwMiA5MS43NDYxQzY3LjI3MjggOTEuNTg1MyA2Ny41OTQ0IDkxLjUwNDkgNjcuOTY2OCA5MS41MDQ5QzY4LjA1MTQgOTEuNTA0OSA2OC4xNDg4IDkxLjUxNTUgNjguMjU4OCA5MS41MzY2QzY4LjM2ODggOTEuNTUzNSA2OC40NDUgOTEuNTcyNiA2OC40ODczIDkxLjU5MzhaTTczLjM2ODcgOTcuMzI1N1Y5My43OUM3My4zNjg3IDkzLjUxOTIgNzMuMzEzNiA5My4yODQzIDczLjIwMzYgOTMuMDg1NEM3My4wOTc4IDkyLjg4MjMgNzIuOTM3IDkyLjcyNTcgNzIuNzIxMiA5Mi42MTU3QzcyLjUwNTQgOTIuNTA1NyA3Mi4yMzg4IDkyLjQ1MDcgNzEuOTIxNCA5Mi40NTA3QzcxLjYyNTIgOTIuNDUwNyA3MS4zNjQ5IDkyLjUwMTUgNzEuMTQwNiA5Mi42MDNDNzAuOTIwNiA5Mi43MDQ2IDcwLjc0NzEgOTIuODM3OSA3MC42MjAxIDkzLjAwMjlDNzAuNDk3NCA5My4xNjggNzAuNDM2IDkzLjM0NTcgNzAuNDM2IDkzLjUzNjFINjkuMjYxN0M2OS4yNjE3IDkzLjI5MDcgNjkuMzI1MiA5My4wNDc0IDY5LjQ1MjEgOTIuODA2MkM2OS41NzkxIDkyLjU2NDkgNjkuNzYxMSA5Mi4zNDcgNjkuOTk4IDkyLjE1MjNDNzAuMjM5MyA5MS45NTM1IDcwLjUyNyA5MS43OTY5IDcwLjg2MTMgOTEuNjgyNkM3MS4xOTk5IDkxLjU2NDEgNzEuNTc2NSA5MS41MDQ5IDcxLjk5MTIgOTEuNTA0OUM3Mi40OTA2IDkxLjUwNDkgNzIuOTMwNyA5MS41ODk1IDczLjMxMTUgOTEuNzU4OEM3My42OTY2IDkxLjkyODEgNzMuOTk3MSA5Mi4xODQxIDc0LjIxMjkgOTIuNTI2OUM3NC40MzI5IDkyLjg2NTQgNzQuNTQzIDkzLjI5MDcgNzQuNTQzIDkzLjgwMjdWOTcuMDAyQzc0LjU0MyA5Ny4yMzA1IDc0LjU2MiA5Ny40NzM4IDc0LjYwMDEgOTcuNzMxOUM3NC42NDI0IDk3Ljk5MDEgNzQuNzAzOCA5OC4yMTIyIDc0Ljc4NDIgOTguMzk4NFY5OC41SDczLjU1OTFDNzMuNDk5OCA5OC4zNjQ2IDczLjQ1MzMgOTguMTg0NyA3My40MTk0IDk3Ljk2MDRDNzMuMzg1NiA5Ny43MzE5IDczLjM2ODcgOTcuNTIwMyA3My4zNjg3IDk3LjMyNTdaTTczLjU3MTggOTQuMzM1OUw3My41ODQ1IDk1LjE2MTFINzIuMzk3NUM3Mi4wNjMyIDk1LjE2MTEgNzEuNzY0OCA5NS4xODg2IDcxLjUwMjQgOTUuMjQzN0M3MS4yNDAxIDk1LjI5NDQgNzEuMDIgOTUuMzcyNyA3MC44NDIzIDk1LjQ3ODVDNzAuNjY0NiA5NS41ODQzIDcwLjUyOTEgOTUuNzE3NiA3MC40MzYgOTUuODc4NEM3MC4zNDI5IDk2LjAzNSA3MC4yOTY0IDk2LjIxOTEgNzAuMjk2NCA5Ni40MzA3QzcwLjI5NjQgOTYuNjQ2NSA3MC4zNDUxIDk2Ljg0MzMgNzAuNDQyNCA5Ny4wMjFDNzAuNTM5NyA5Ny4xOTg3IDcwLjY4NTcgOTcuMzQwNSA3MC44ODA0IDk3LjQ0NjNDNzEuMDc5MyA5Ny41NDc5IDcxLjMyMjYgOTcuNTk4NiA3MS42MTA0IDk3LjU5ODZDNzEuOTcwMSA5Ny41OTg2IDcyLjI4NzQgOTcuNTIyNSA3Mi41NjI1IDk3LjM3MDFDNzIuODM3NiA5Ny4yMTc4IDczLjA1NTUgOTcuMDMxNiA3My4yMTYzIDk2LjgxMTVDNzMuMzgxMyA5Ni41OTE1IDczLjQ3MDIgOTYuMzc3OCA3My40ODI5IDk2LjE3MDRMNzMuOTg0NCA5Ni43MzU0QzczLjk1NDggOTYuOTEzMSA3My44NzQzIDk3LjEwOTkgNzMuNzQzMiA5Ny4zMjU3QzczLjYxMiA5Ny41NDE1IDczLjQzNjQgOTcuNzQ4OSA3My4yMTYzIDk3Ljk0NzhDNzMuMDAwNSA5OC4xNDI0IDcyLjc0MjQgOTguMzA1MyA3Mi40NDE5IDk4LjQzNjVDNzIuMTQ1NyA5OC41NjM1IDcxLjgxMTQgOTguNjI3IDcxLjQzOSA5OC42MjdDNzAuOTczNSA5OC42MjcgNzAuNTY1MSA5OC41MzYgNzAuMjEzOSA5OC4zNTRDNjkuODY2OSA5OC4xNzIgNjkuNTk2IDk3LjkyODcgNjkuNDAxNCA5Ny42MjRDNjkuMjEwOSA5Ny4zMTUxIDY5LjExNTcgOTYuOTcwMiA2OS4xMTU3IDk2LjU4OTRDNjkuMTE1NyA5Ni4yMjEyIDY5LjE4NzcgOTUuODk3NSA2OS4zMzE1IDk1LjYxODJDNjkuNDc1NCA5NS4zMzQ2IDY5LjY4MjggOTUuMDk5OCA2OS45NTM2IDk0LjkxMzZDNzAuMjI0NCA5NC43MjMxIDcwLjU1MDMgOTQuNTc5MyA3MC45MzEyIDk0LjQ4MTlDNzEuMzEyIDk0LjM4NDYgNzEuNzM3MyA5NC4zMzU5IDcyLjIwNyA5NC4zMzU5SDczLjU3MThaTTc3LjU2NDUgOTIuOTUyMVYxMDEuMTQxSDc2LjM4MzhWOTEuNjMxOEg3Ny40NjI5TDc3LjU2NDUgOTIuOTUyMVpNODIuMTkxOSA5NS4wMDg4Vjk1LjE0MjFDODIuMTkxOSA5NS42NDE0IDgyLjEzMjYgOTYuMTA0OCA4Mi4wMTQyIDk2LjUzMjJDODEuODk1NyA5Ni45NTU0IDgxLjcyMjIgOTcuMzIzNiA4MS40OTM3IDk3LjYzNjdDODEuMjY5NCA5Ny45NDk5IDgwLjk5MjIgOTguMTkzMiA4MC42NjIxIDk4LjM2NjdDODAuMzMyIDk4LjU0MDIgNzkuOTUzMyA5OC42MjcgNzkuNTI1OSA5OC42MjdDNzkuMDkgOTguNjI3IDc4LjcwNDkgOTguNTU1IDc4LjM3MDYgOTguNDExMUM3OC4wMzYzIDk4LjI2NzMgNzcuNzUyOCA5OC4wNTc4IDc3LjUyIDk3Ljc4MjdDNzcuMjg3MyA5Ny41MDc2IDc3LjEwMTEgOTcuMTc3NiA3Ni45NjE0IDk2Ljc5MjVDNzYuODI2IDk2LjQwNzQgNzYuNzMyOSA5NS45NzM2IDc2LjY4MjEgOTUuNDkxMlY5NC43ODAzQzc2LjczMjkgOTQuMjcyNSA3Ni44MjgxIDkzLjgxNzUgNzYuOTY3OCA5My40MTU1Qzc3LjEwNzQgOTMuMDEzNSA3Ny4yOTE1IDkyLjY3MDcgNzcuNTIgOTIuMzg3MkM3Ny43NTI4IDkyLjA5OTQgNzguMDM0MiA5MS44ODE1IDc4LjM2NDMgOTEuNzMzNEM3OC42OTQzIDkxLjU4MTEgNzkuMDc1MiA5MS41MDQ5IDc5LjUwNjggOTEuNTA0OUM3OS45Mzg1IDkxLjUwNDkgODAuMzIxNSA5MS41ODk1IDgwLjY1NTggOTEuNzU4OEM4MC45OTAxIDkxLjkyMzggODEuMjcxNSA5Mi4xNjA4IDgxLjUgOTIuNDY5N0M4MS43Mjg1IDkyLjc3ODYgODEuODk5OSA5My4xNDg5IDgyLjAxNDIgOTMuNTgwNkM4Mi4xMzI2IDk0LjAwOCA4Mi4xOTE5IDk0LjQ4NCA4Mi4xOTE5IDk1LjAwODhaTTgxLjAxMTIgOTUuMTQyMVY5NS4wMDg4QzgxLjAxMTIgOTQuNjY2IDgwLjk3NTMgOTQuMzQ0NCA4MC45MDMzIDk0LjA0MzlDODAuODMxNCA5My43MzkzIDgwLjcxOTIgOTMuNDcyNyA4MC41NjY5IDkzLjI0NDFDODAuNDE4OCA5My4wMTE0IDgwLjIyODQgOTIuODI5NCA3OS45OTU2IDkyLjY5ODJDNzkuNzYyOSA5Mi41NjI4IDc5LjQ4NTcgOTIuNDk1MSA3OS4xNjQxIDkyLjQ5NTFDNzguODY3OCA5Mi40OTUxIDc4LjYwOTcgOTIuNTQ1OSA3OC4zODk2IDkyLjY0NzVDNzguMTczOCA5Mi43NDkgNzcuOTg5NyA5Mi44ODY2IDc3LjgzNzQgOTMuMDYwMUM3Ny42ODUxIDkzLjIyOTMgNzcuNTYwMiA5My40MjQgNzcuNDYyOSA5My42NDRDNzcuMzY5OCA5My44NTk5IDc3LjMgOTQuMDg0MSA3Ny4yNTM0IDk0LjMxNjlWOTUuOTYwOUM3Ny4zMzgxIDk2LjI1NzIgNzcuNDU2NSA5Ni41MzY1IDc3LjYwODkgOTYuNzk4OEM3Ny43NjEyIDk3LjA1NyA3Ny45NjQ0IDk3LjI2NjQgNzguMjE4MyA5Ny40MjcyQzc4LjQ3MjIgOTcuNTgzOCA3OC43OTE3IDk3LjY2MjEgNzkuMTc2OCA5Ny42NjIxQzc5LjQ5NDEgOTcuNjYyMSA3OS43NjcxIDk3LjU5NjUgNzkuOTk1NiA5Ny40NjUzQzgwLjIyODQgOTcuMzI5OSA4MC40MTg4IDk3LjE0NTggODAuNTY2OSA5Ni45MTMxQzgwLjcxOTIgOTYuNjgwMyA4MC44MzE0IDk2LjQxMzcgODAuOTAzMyA5Ni4xMTMzQzgwLjk3NTMgOTUuODA4NiA4MS4wMTEyIDk1LjQ4NDkgODEuMDExMiA5NS4xNDIxWlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHQ8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHByZXZpZXc7IiwiaW1wb3J0IHByZXZpZXcgZnJvbSAnLi9wcmV2aWV3JztcbmltcG9ydCB7IFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyJztcbmltcG9ydCBTZWxlY3RSYWRpb0NoZWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VsZWN0UmFkaW9DaGVjayc7XG5pbXBvcnQgQ3VzdG9tVGVtcGxhdGVDb250cm9scyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0N1c3RvbVRlbXBsYXRlQ29udHJvbHMnO1xuXG5jb25zdCB7XG5cdCAgICAgIFRvb2xCYXJGaWVsZHMsXG5cdCAgICAgIEJsb2NrTGFiZWwsXG5cdCAgICAgIEJsb2NrRGVzY3JpcHRpb24sXG5cdCAgICAgIEJsb2NrQWR2YW5jZWRWYWx1ZSxcblx0ICAgICAgQmxvY2tOYW1lLFxuXHQgICAgICBBZHZhbmNlZEZpZWxkcyxcblx0ICAgICAgRmllbGRDb250cm9sLFxuXHQgICAgICBTd2l0Y2hQYWdlT25DaGFuZ2VDb250cm9scyxcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdCAgICAgIHVzZUJsb2NrUHJvcHMsXG5cdCAgICAgIEJsb2NrU2V0dGluZ3NNZW51Q29udHJvbHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgUGFuZWxCb2R5LFxuXHQgICAgICBUb29sYmFyQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlLFxuICAgICAgfSA9IEpldEZCSG9va3M7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhZGlvRWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIGlzU2VsZWN0ZWQsXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXHR1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUoKTtcblxuXHRpZiAoIGF0dHJpYnV0ZXMuaXNQcmV2aWV3ICkge1xuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXsge1xuXHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHR9IH0+XG5cdFx0XHR7IHByZXZpZXcgfVxuXHRcdDwvZGl2Pjtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdHsgaXNTZWxlY3RlZCAmJiA8QmxvY2tTZXR0aW5nc01lbnVDb250cm9scy8+IH1cblx0XHQ8VG9vbEJhckZpZWxkcz5cblx0XHRcdDxUb29sYmFyQnV0dG9uXG5cdFx0XHRcdGljb249eyBhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb25cblx0XHRcdFx0XHQ/IDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG5cdFx0XHRcdFx0PHJlY3Qgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgcng9XCIyXCIgZmlsbD1cIiMxMDE1MTdcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0zMCAxNi43OTZMMTguMDQ0IDI4Ljg4MTNMMTQgMzBMMTUuMTU2IDI2LjA4NjdMMjcuMTEwNyAxNEwzMCAxNi43OTZaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTEyIDhINlYyMUgxNy4zMzk4TDE1LjMzOTggMjNINkw1Ljc5NTkgMjIuOTg5M0M0Ljg1NDM1IDIyLjg5MzggNC4xMDYyIDIyLjE0NTcgNC4wMTA3NCAyMS4yMDQxTDQgMjFWOEM0IDYuODk1NDMgNC44OTU0MyA2IDYgNkgxMlY4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0yMSAxNy4zMzk4TDE5IDE5LjMzOThWMTVIMjFWMTcuMzM5OFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTkgM0gyMVY2SDI0VjhIMjFWMTFIMTlWOEgxNlY2SDE5VjNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ6IDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0zMCAxNi43OTZMMTguMDQ0IDI4Ljg4MTNMMTQgMzBMMTUuMTU2IDI2LjA4NjdMMjcuMTEwNyAxNEwzMCAxNi43OTZaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTEyIDhINlYyMUgxNy4zMzk4TDE1LjMzOTggMjNINkw1Ljc5NTkgMjIuOTg5M0M0Ljg1NDM1IDIyLjg5MzggNC4xMDYyIDIyLjE0NTcgNC4wMTA3NCAyMS4yMDQxTDQgMjFWOEM0IDYuODk1NDMgNC44OTU0MyA2IDYgNkgxMlY4WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0yMSAxNy4zMzk4TDE5IDE5LjMzOThWMTVIMjFWMTcuMzM5OFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTkgM0gyMVY2SDI0VjhIMjFWMTFIMTlWOEgxNlY2SDE5VjNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZT17IGF0dHJpYnV0ZXMuY3VzdG9tX29wdGlvblxuXHRcdFx0XHRcdFx0PyBfXyhcblx0XHRcdFx0XHRcdCdEaXNhYmxlIGN1c3RvbSBvcHRpb25zJyxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6IF9fKFxuXHRcdFx0XHRcdFx0J0VuYWJsZSBjdXN0b20gb3B0aW9ucycsXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0Y3VzdG9tX29wdGlvbjogIWF0dHJpYnV0ZXMuY3VzdG9tX29wdGlvbixcblx0XHRcdFx0fSApIH1cblx0XHRcdFx0aXNBY3RpdmU9eyBhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24gfVxuXHRcdFx0Lz5cblx0XHQ8L1Rvb2xCYXJGaWVsZHM+XG5cdFx0PFN3aXRjaFBhZ2VPbkNoYW5nZUNvbnRyb2xzLz5cblx0XHR7IGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0dlbmVyYWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHQ8QmxvY2tMYWJlbC8+XG5cdFx0XHRcdDxCbG9ja05hbWUvPlxuXHRcdFx0XHQ8QmxvY2tEZXNjcmlwdGlvbi8+XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1ZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfT5cblx0XHRcdFx0PEJsb2NrQWR2YW5jZWRWYWx1ZS8+XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4gfVxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyJyApIH1cblx0XHRcdFx0c2NyaXB0RGF0YT17IHdpbmRvdy5KZXRGb3JtT3B0aW9uRmllbGREYXRhIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2sgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHQ8Q3VzdG9tVGVtcGxhdGVDb250cm9sc1xuXHRcdFx0XHRcdGxpc3RpbmdUeXBlcz17IHdpbmRvdy5KZXRGb3JtT3B0aW9uRmllbGREYXRhLmxpc3RpbmdzX2xpc3QgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmllbGRDb250cm9sXG5cdFx0XHRcdFx0dHlwZT1cImN1c3RvbV9zZXR0aW5nc1wiXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvU2VsZWN0UmFkaW9DaGVjaz5cblx0XHQ8L2Rpdj5cblx0PC8+O1xufSIsImltcG9ydCBSYWRpb0VkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBtZXRhZGF0YSBmcm9tICdAc2hhcmVkL2Jsb2Nrcy9yYWRpby9ibG9jay5qc29uJztcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBjcmVhdGVCbG9jayB9ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGRlc2NyaXB0aW9uOiBfXyhcblx0XHRgQ3JlYXRlIGEgbGlzdCBvZiBhdmFpbGFibGUgb3B0aW9ucyBmcm9tIHdoaWNoIHRoZSB1c2VyIGNhbiBcbmNob29zZSBvbmx5IGEgc2luZ2xlIHZhcmlhbnQuIEJ1aWxkIHRoZSBsaXN0cyBvZiB2YXJpb3VzIGxlbmd0aHMuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdGVkaXQ6IFJhZGlvRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGlzUHJldmlldzogdHJ1ZSxcblx0XHR9LFxuXHR9LFxuXHR0cmFuc2Zvcm1zOiB7XG5cdFx0dG86IFtcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogJ2Jsb2NrJyxcblx0XHRcdFx0YmxvY2tzOiBbICdqZXQtZm9ybXMvdGV4dC1maWVsZCcgXSxcblx0XHRcdFx0dHJhbnNmb3JtOiAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCAnamV0LWZvcm1zL3RleHQtZmllbGQnLFxuXHRcdFx0XHRcdFx0eyAuLi5hdHRyaWJ1dGVzIH0gKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpb3JpdHk6IDAsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0ZnJvbTogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0XHRibG9ja3M6IFtcblx0XHRcdFx0XHQnamV0LWZvcm1zL3NlbGVjdC1maWVsZCcsXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcblx0XHRcdFx0XSxcblx0XHRcdFx0dHJhbnNmb3JtOiAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCBuYW1lLCB7IC4uLmF0dHJpYnV0ZXMgfSApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcmlvcml0eTogMCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdibG9jaycsXG5cdFx0XHRcdGJsb2NrczogW1xuXHRcdFx0XHRcdCdqZXQtZm9ybXMvY2hlY2tib3gtZmllbGQnLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICggYXR0cmlidXRlcyApID0+IHtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24gPSB7XG5cdFx0XHRcdFx0XHRhbGxvdzogISFhdHRyaWJ1dGVzLmN1c3RvbV9vcHRpb24sXG5cdFx0XHRcdFx0XHRsYWJlbDogJysgQWRkIE5ldycsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soIG5hbWUsIHsgLi4uYXR0cmlidXRlcyB9ICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaW9yaXR5OiAwLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzLFxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBwcmV2aWV3ID0gKFxuXHQ8c3ZnIHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgdmlld0JveD1cIjAgMCAyOTggMTQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PHJlY3Qgd2lkdGg9XCIyOThcIiBoZWlnaHQ9XCIxNDRcIiBmaWxsPVwiI0YxRjVGOVwiLz5cblx0XHQ8cGF0aCBkPVwiTTE5LjgyNjIgNTEuMDk2N0gxNy4xNjdWNTAuMDIzNEgxOS44MjYyQzIwLjM0MTEgNTAuMDIzNCAyMC43NTgxIDQ5Ljk0MTQgMjEuMDc3MSA0OS43NzczQzIxLjM5NjIgNDkuNjEzMyAyMS42Mjg2IDQ5LjM4NTQgMjEuNzc0NCA0OS4wOTM4QzIxLjkyNDggNDguODAyMSAyMiA0OC40Njk0IDIyIDQ4LjA5NTdDMjIgNDcuNzUzOSAyMS45MjQ4IDQ3LjQzMjYgMjEuNzc0NCA0Ny4xMzE4QzIxLjYyODYgNDYuODMxMSAyMS4zOTYyIDQ2LjU4OTUgMjEuMDc3MSA0Ni40MDcyQzIwLjc1ODEgNDYuMjIwNCAyMC4zNDExIDQ2LjEyNyAxOS44MjYyIDQ2LjEyN0gxNy40NzQ2VjU1SDE2LjE1NTNWNDUuMDQ2OUgxOS44MjYyQzIwLjU3ODEgNDUuMDQ2OSAyMS4yMTM5IDQ1LjE3NjggMjEuNzMzNCA0NS40MzY1QzIyLjI1MjkgNDUuNjk2MyAyMi42NDcxIDQ2LjA1NjMgMjIuOTE2IDQ2LjUxNjZDMjMuMTg0OSA0Ni45NzIzIDIzLjMxOTMgNDcuNDk0MSAyMy4zMTkzIDQ4LjA4MkMyMy4zMTkzIDQ4LjcyMDEgMjMuMTg0OSA0OS4yNjQ2IDIyLjkxNiA0OS43MTU4QzIyLjY0NzEgNTAuMTY3IDIyLjI1MjkgNTAuNTExMSAyMS43MzM0IDUwLjc0OEMyMS4yMTM5IDUwLjk4MDUgMjAuNTc4MSA1MS4wOTY3IDE5LjgyNjIgNTEuMDk2N1pNMjYuMDYwNSA0OC43NjU2VjU1SDI0Ljc5NTlWNDcuNjAzNUgyNi4wMjY0TDI2LjA2MDUgNDguNzY1NlpNMjguMzcxMSA0Ny41NjI1TDI4LjM2NDMgNDguNzM4M0MyOC4yNTk0IDQ4LjcxNTUgMjguMTU5MiA0OC43MDE4IDI4LjA2MzUgNDguNjk3M0MyNy45NzIzIDQ4LjY4ODIgMjcuODY3NSA0OC42ODM2IDI3Ljc0OSA0OC42ODM2QzI3LjQ1NzQgNDguNjgzNiAyNy4xOTk5IDQ4LjcyOTIgMjYuOTc2NiA0OC44MjAzQzI2Ljc1MzMgNDguOTExNSAyNi41NjQxIDQ5LjAzOTEgMjYuNDA5MiA0OS4yMDMxQzI2LjI1NDIgNDkuMzY3MiAyNi4xMzEyIDQ5LjU2MzIgMjYuMDQgNDkuNzkxQzI1Ljk1MzUgNTAuMDE0MyAyNS44OTY1IDUwLjI2MDQgMjUuODY5MSA1MC41MjkzTDI1LjUxMzcgNTAuNzM0NEMyNS41MTM3IDUwLjI4NzggMjUuNTU3IDQ5Ljg2ODUgMjUuNjQzNiA0OS40NzY2QzI1LjczNDcgNDkuMDg0NiAyNS44NzM3IDQ4LjczODMgMjYuMDYwNSA0OC40Mzc1QzI2LjI0NzQgNDguMTMyMiAyNi40ODQ0IDQ3Ljg5NTIgMjYuNzcxNSA0Ny43MjY2QzI3LjA2MzIgNDcuNTUzNCAyNy40MDk1IDQ3LjQ2NjggMjcuODEwNSA0Ny40NjY4QzI3LjkwMTcgNDcuNDY2OCAyOC4wMDY1IDQ3LjQ3ODIgMjguMTI1IDQ3LjUwMUMyOC4yNDM1IDQ3LjUxOTIgMjguMzI1NSA0Ny41Mzk3IDI4LjM3MTEgNDcuNTYyNVpNMzIuNDcyNyA1NS4xMzY3QzMxLjk1NzcgNTUuMTM2NyAzMS40OTA2IDU1LjA1MDEgMzEuMDcxMyA1NC44NzdDMzAuNjU2NiA1NC42OTkyIDMwLjI5ODggNTQuNDUwOCAyOS45OTggNTQuMTMxOEMyOS43MDE4IDUzLjgxMjggMjkuNDc0IDUzLjQzNDYgMjkuMzE0NSA1Mi45OTcxQzI5LjE1NDkgNTIuNTU5NiAyOS4wNzUyIDUyLjA4MTEgMjkuMDc1MiA1MS41NjE1VjUxLjI3NDRDMjkuMDc1MiA1MC42NzI5IDI5LjE2NDEgNTAuMTM3NCAyOS4zNDE4IDQ5LjY2OEMyOS41MTk1IDQ5LjE5NCAyOS43NjExIDQ4Ljc5MyAzMC4wNjY0IDQ4LjQ2NDhDMzAuMzcxNyA0OC4xMzY3IDMwLjcxODEgNDcuODg4MyAzMS4xMDU1IDQ3LjcxOTdDMzEuNDkyOCA0Ny41NTExIDMxLjg5MzkgNDcuNDY2OCAzMi4zMDg2IDQ3LjQ2NjhDMzIuODM3MiA0Ny40NjY4IDMzLjI5MyA0Ny41NTc5IDMzLjY3NTggNDcuNzQwMkMzNC4wNjMyIDQ3LjkyMjUgMzQuMzc5OSA0OC4xNzc3IDM0LjYyNiA0OC41MDU5QzM0Ljg3MjEgNDguODI5NCAzNS4wNTQ0IDQ5LjIxMjIgMzUuMTcyOSA0OS42NTQzQzM1LjI5MTMgNTAuMDkxOCAzNS4zNTA2IDUwLjU3MDMgMzUuMzUwNiA1MS4wODk4VjUxLjY1NzJIMjkuODI3MVY1MC42MjVIMzQuMDg1OVY1MC41MjkzQzM0LjA2NzcgNTAuMjAxMiAzMy45OTkzIDQ5Ljg4MjIgMzMuODgwOSA0OS41NzIzQzMzLjc2NjkgNDkuMjYyNCAzMy41ODQ2IDQ5LjAwNzIgMzMuMzM0IDQ4LjgwNjZDMzMuMDgzMyA0OC42MDYxIDMyLjc0MTUgNDguNTA1OSAzMi4zMDg2IDQ4LjUwNTlDMzIuMDIxNSA0OC41MDU5IDMxLjc1NzIgNDguNTY3NCAzMS41MTU2IDQ4LjY5MDRDMzEuMjc0MSA0OC44MDg5IDMxLjA2NjcgNDguOTg2NyAzMC44OTM2IDQ5LjIyMzZDMzAuNzIwNCA0OS40NjA2IDMwLjU4NTkgNDkuNzUgMzAuNDkwMiA1MC4wOTE4QzMwLjM5NDUgNTAuNDMzNiAzMC4zNDY3IDUwLjgyNzggMzAuMzQ2NyA1MS4yNzQ0VjUxLjU2MTVDMzAuMzQ2NyA1MS45MTI0IDMwLjM5NDUgNTIuMjQyOCAzMC40OTAyIDUyLjU1MjdDMzAuNTkwNSA1Mi44NTgxIDMwLjczNCA1My4xMjcgMzAuOTIwOSA1My4zNTk0QzMxLjExMjMgNTMuNTkxOCAzMS4zNDI0IDUzLjc3NDEgMzEuNjExMyA1My45MDYyQzMxLjg4NDggNTQuMDM4NCAzMi4xOTQ3IDU0LjEwNDUgMzIuNTQxIDU0LjEwNDVDMzIuOTg3NiA1NC4xMDQ1IDMzLjM2NTkgNTQuMDEzMyAzMy42NzU4IDUzLjgzMTFDMzMuOTg1NyA1My42NDg4IDM0LjI1NjggNTMuNDA0OSAzNC40ODkzIDUzLjA5OTZMMzUuMjU0OSA1My43MDhDMzUuMDk1NCA1My45NDk1IDM0Ljg5MjYgNTQuMTc5NyAzNC42NDY1IDU0LjM5ODRDMzQuNDAwNCA1NC42MTcyIDM0LjA5NzMgNTQuNzk0OSAzMy43MzczIDU0LjkzMTZDMzMuMzgxOCA1NS4wNjg0IDMyLjk2MDMgNTUuMTM2NyAzMi40NzI3IDU1LjEzNjdaTTM4LjcxMzkgNTVIMzcuNDQ5MlY0Ni44MjQyQzM3LjQ0OTIgNDYuMjkxIDM3LjU0NDkgNDUuODQyMSAzNy43MzYzIDQ1LjQ3NzVDMzcuOTMyMyA0NS4xMDg0IDM4LjIxMjYgNDQuODMwNCAzOC41NzcxIDQ0LjY0MzZDMzguOTQxNyA0NC40NTIxIDM5LjM3NDcgNDQuMzU2NCAzOS44NzYgNDQuMzU2NEM0MC4wMjE4IDQ0LjM1NjQgNDAuMTY3NiA0NC4zNjU2IDQwLjMxMzUgNDQuMzgzOEM0MC40NjM5IDQ0LjQwMiA0MC42MDk3IDQ0LjQyOTQgNDAuNzUxIDQ0LjQ2NThMNDAuNjgyNiA0NS40OThDNDAuNTg2OSA0NS40NzUzIDQwLjQ3NzUgNDUuNDU5MyA0MC4zNTQ1IDQ1LjQ1MDJDNDAuMjM2IDQ1LjQ0MTEgNDAuMTE3NSA0NS40MzY1IDM5Ljk5OSA0NS40MzY1QzM5LjczMDEgNDUuNDM2NSAzOS40OTc3IDQ1LjQ5MTIgMzkuMzAxOCA0NS42MDA2QzM5LjExMDQgNDUuNzA1NCAzOC45NjQ1IDQ1Ljg2MDQgMzguODY0MyA0Ni4wNjU0QzM4Ljc2NCA0Ni4yNzA1IDM4LjcxMzkgNDYuNTIzNCAzOC43MTM5IDQ2LjgyNDJWNTVaTTQwLjI4NjEgNDcuNjAzNVY0OC41NzQySDM2LjI4MDNWNDcuNjAzNUg0MC4yODYxWk00My41ODExIDU1SDQyLjMxNjRWNDYuODI0MkM0Mi4zMTY0IDQ2LjI5MSA0Mi40MTIxIDQ1Ljg0MjEgNDIuNjAzNSA0NS40Nzc1QzQyLjc5OTUgNDUuMTA4NCA0My4wNzk4IDQ0LjgzMDQgNDMuNDQ0MyA0NC42NDM2QzQzLjgwODkgNDQuNDUyMSA0NC4yNDE5IDQ0LjM1NjQgNDQuNzQzMiA0NC4zNTY0QzQ0Ljg4OSA0NC4zNTY0IDQ1LjAzNDggNDQuMzY1NiA0NS4xODA3IDQ0LjM4MzhDNDUuMzMxMSA0NC40MDIgNDUuNDc2OSA0NC40Mjk0IDQ1LjYxODIgNDQuNDY1OEw0NS41NDk4IDQ1LjQ5OEM0NS40NTQxIDQ1LjQ3NTMgNDUuMzQ0NyA0NS40NTkzIDQ1LjIyMTcgNDUuNDUwMkM0NS4xMDMyIDQ1LjQ0MTEgNDQuOTg0NyA0NS40MzY1IDQ0Ljg2NjIgNDUuNDM2NUM0NC41OTczIDQ1LjQzNjUgNDQuMzY0OSA0NS40OTEyIDQ0LjE2ODkgNDUuNjAwNkM0My45Nzc1IDQ1LjcwNTQgNDMuODMxNyA0NS44NjA0IDQzLjczMTQgNDYuMDY1NEM0My42MzEyIDQ2LjI3MDUgNDMuNTgxMSA0Ni41MjM0IDQzLjU4MTEgNDYuODI0MlY1NVpNNDUuMTUzMyA0Ny42MDM1VjQ4LjU3NDJINDEuMTQ3NVY0Ny42MDM1SDQ1LjE1MzNaTTQ5LjQ2NjggNTUuMTM2N0M0OC45NTE4IDU1LjEzNjcgNDguNDg0NyA1NS4wNTAxIDQ4LjA2NTQgNTQuODc3QzQ3LjY1MDcgNTQuNjk5MiA0Ny4yOTMgNTQuNDUwOCA0Ni45OTIyIDU0LjEzMThDNDYuNjk2IDUzLjgxMjggNDYuNDY4MSA1My40MzQ2IDQ2LjMwODYgNTIuOTk3MUM0Ni4xNDkxIDUyLjU1OTYgNDYuMDY5MyA1Mi4wODExIDQ2LjA2OTMgNTEuNTYxNVY1MS4yNzQ0QzQ2LjA2OTMgNTAuNjcyOSA0Ni4xNTgyIDUwLjEzNzQgNDYuMzM1OSA0OS42NjhDNDYuNTEzNyA0OS4xOTQgNDYuNzU1MiA0OC43OTMgNDcuMDYwNSA0OC40NjQ4QzQ3LjM2NTkgNDguMTM2NyA0Ny43MTIyIDQ3Ljg4ODMgNDguMDk5NiA0Ny43MTk3QzQ4LjQ4NyA0Ny41NTExIDQ4Ljg4OCA0Ny40NjY4IDQ5LjMwMjcgNDcuNDY2OEM0OS44MzE0IDQ3LjQ2NjggNTAuMjg3MSA0Ny41NTc5IDUwLjY2OTkgNDcuNzQwMkM1MS4wNTczIDQ3LjkyMjUgNTEuMzc0IDQ4LjE3NzcgNTEuNjIwMSA0OC41MDU5QzUxLjg2NjIgNDguODI5NCA1Mi4wNDg1IDQ5LjIxMjIgNTIuMTY3IDQ5LjY1NDNDNTIuMjg1NSA1MC4wOTE4IDUyLjM0NDcgNTAuNTcwMyA1Mi4zNDQ3IDUxLjA4OThWNTEuNjU3Mkg0Ni44MjEzVjUwLjYyNUg1MS4wODAxVjUwLjUyOTNDNTEuMDYxOCA1MC4yMDEyIDUwLjk5MzUgNDkuODgyMiA1MC44NzUgNDkuNTcyM0M1MC43NjExIDQ5LjI2MjQgNTAuNTc4OCA0OS4wMDcyIDUwLjMyODEgNDguODA2NkM1MC4wNzc1IDQ4LjYwNjEgNDkuNzM1NyA0OC41MDU5IDQ5LjMwMjcgNDguNTA1OUM0OS4wMTU2IDQ4LjUwNTkgNDguNzUxMyA0OC41Njc0IDQ4LjUwOTggNDguNjkwNEM0OC4yNjgyIDQ4LjgwODkgNDguMDYwOSA0OC45ODY3IDQ3Ljg4NzcgNDkuMjIzNkM0Ny43MTQ1IDQ5LjQ2MDYgNDcuNTgwMSA0OS43NSA0Ny40ODQ0IDUwLjA5MThDNDcuMzg4NyA1MC40MzM2IDQ3LjM0MDggNTAuODI3OCA0Ny4zNDA4IDUxLjI3NDRWNTEuNTYxNUM0Ny4zNDA4IDUxLjkxMjQgNDcuMzg4NyA1Mi4yNDI4IDQ3LjQ4NDQgNTIuNTUyN0M0Ny41ODQ2IDUyLjg1ODEgNDcuNzI4MiA1My4xMjcgNDcuOTE1IDUzLjM1OTRDNDguMTA2NCA1My41OTE4IDQ4LjMzNjYgNTMuNzc0MSA0OC42MDU1IDUzLjkwNjJDNDguODc4OSA1NC4wMzg0IDQ5LjE4ODggNTQuMTA0NSA0OS41MzUyIDU0LjEwNDVDNDkuOTgxOCA1NC4xMDQ1IDUwLjM2IDU0LjAxMzMgNTAuNjY5OSA1My44MzExQzUwLjk3OTggNTMuNjQ4OCA1MS4yNTEgNTMuNDA0OSA1MS40ODM0IDUzLjA5OTZMNTIuMjQ5IDUzLjcwOEM1Mi4wODk1IDUzLjk0OTUgNTEuODg2NyA1NC4xNzk3IDUxLjY0MDYgNTQuMzk4NEM1MS4zOTQ1IDU0LjYxNzIgNTEuMDkxNSA1NC43OTQ5IDUwLjczMTQgNTQuOTMxNkM1MC4zNzYgNTUuMDY4NCA0OS45NTQ0IDU1LjEzNjcgNDkuNDY2OCA1NS4xMzY3Wk01NS4wODU5IDQ4Ljc2NTZWNTVINTMuODIxM1Y0Ny42MDM1SDU1LjA1MThMNTUuMDg1OSA0OC43NjU2Wk01Ny4zOTY1IDQ3LjU2MjVMNTcuMzg5NiA0OC43MzgzQzU3LjI4NDggNDguNzE1NSA1Ny4xODQ2IDQ4LjcwMTggNTcuMDg4OSA0OC42OTczQzU2Ljk5NzcgNDguNjg4MiA1Ni44OTI5IDQ4LjY4MzYgNTYuNzc0NCA0OC42ODM2QzU2LjQ4MjcgNDguNjgzNiA1Ni4yMjUzIDQ4LjcyOTIgNTYuMDAyIDQ4LjgyMDNDNTUuNzc4NiA0OC45MTE1IDU1LjU4OTUgNDkuMDM5MSA1NS40MzQ2IDQ5LjIwMzFDNTUuMjc5NiA0OS4zNjcyIDU1LjE1NjYgNDkuNTYzMiA1NS4wNjU0IDQ5Ljc5MUM1NC45Nzg4IDUwLjAxNDMgNTQuOTIxOSA1MC4yNjA0IDU0Ljg5NDUgNTAuNTI5M0w1NC41MzkxIDUwLjczNDRDNTQuNTM5MSA1MC4yODc4IDU0LjU4MjQgNDkuODY4NSA1NC42Njg5IDQ5LjQ3NjZDNTQuNzYwMSA0OS4wODQ2IDU0Ljg5OTEgNDguNzM4MyA1NS4wODU5IDQ4LjQzNzVDNTUuMjcyOCA0OC4xMzIyIDU1LjUwOTggNDcuODk1MiA1NS43OTY5IDQ3LjcyNjZDNTYuMDg4NSA0Ny41NTM0IDU2LjQzNDkgNDcuNDY2OCA1Ni44MzU5IDQ3LjQ2NjhDNTYuOTI3MSA0Ny40NjY4IDU3LjAzMTkgNDcuNDc4MiA1Ny4xNTA0IDQ3LjUwMUM1Ny4yNjg5IDQ3LjUxOTIgNTcuMzUwOSA0Ny41Mzk3IDU3LjM5NjUgNDcuNTYyNVpNNjEuNDk4IDU1LjEzNjdDNjAuOTgzMSA1NS4xMzY3IDYwLjUxNiA1NS4wNTAxIDYwLjA5NjcgNTQuODc3QzU5LjY4MiA1NC42OTkyIDU5LjMyNDIgNTQuNDUwOCA1OS4wMjM0IDU0LjEzMThDNTguNzI3MiA1My44MTI4IDU4LjQ5OTMgNTMuNDM0NiA1OC4zMzk4IDUyLjk5NzFDNTguMTgwMyA1Mi41NTk2IDU4LjEwMDYgNTIuMDgxMSA1OC4xMDA2IDUxLjU2MTVWNTEuMjc0NEM1OC4xMDA2IDUwLjY3MjkgNTguMTg5NSA1MC4xMzc0IDU4LjM2NzIgNDkuNjY4QzU4LjU0NDkgNDkuMTk0IDU4Ljc4NjUgNDguNzkzIDU5LjA5MTggNDguNDY0OEM1OS4zOTcxIDQ4LjEzNjcgNTkuNzQzNSA0Ny44ODgzIDYwLjEzMDkgNDcuNzE5N0M2MC41MTgyIDQ3LjU1MTEgNjAuOTE5MyA0Ny40NjY4IDYxLjMzNCA0Ny40NjY4QzYxLjg2MjYgNDcuNDY2OCA2Mi4zMTg0IDQ3LjU1NzkgNjIuNzAxMiA0Ny43NDAyQzYzLjA4ODUgNDcuOTIyNSA2My40MDUzIDQ4LjE3NzcgNjMuNjUxNCA0OC41MDU5QzYzLjg5NzUgNDguODI5NCA2NC4wNzk4IDQ5LjIxMjIgNjQuMTk4MiA0OS42NTQzQzY0LjMxNjcgNTAuMDkxOCA2NC4zNzYgNTAuNTcwMyA2NC4zNzYgNTEuMDg5OFY1MS42NTcySDU4Ljg1MjVWNTAuNjI1SDYzLjExMTNWNTAuNTI5M0M2My4wOTMxIDUwLjIwMTIgNjMuMDI0NyA0OS44ODIyIDYyLjkwNjIgNDkuNTcyM0M2Mi43OTIzIDQ5LjI2MjQgNjIuNjEgNDkuMDA3MiA2Mi4zNTk0IDQ4LjgwNjZDNjIuMTA4NyA0OC42MDYxIDYxLjc2NjkgNDguNTA1OSA2MS4zMzQgNDguNTA1OUM2MS4wNDY5IDQ4LjUwNTkgNjAuNzgyNiA0OC41Njc0IDYwLjU0MSA0OC42OTA0QzYwLjI5OTUgNDguODA4OSA2MC4wOTIxIDQ4Ljk4NjcgNTkuOTE4OSA0OS4yMjM2QzU5Ljc0NTggNDkuNDYwNiA1OS42MTEzIDQ5Ljc1IDU5LjUxNTYgNTAuMDkxOEM1OS40MTk5IDUwLjQzMzYgNTkuMzcyMSA1MC44Mjc4IDU5LjM3MjEgNTEuMjc0NFY1MS41NjE1QzU5LjM3MjEgNTEuOTEyNCA1OS40MTk5IDUyLjI0MjggNTkuNTE1NiA1Mi41NTI3QzU5LjYxNTkgNTIuODU4MSA1OS43NTk0IDUzLjEyNyA1OS45NDYzIDUzLjM1OTRDNjAuMTM3NyA1My41OTE4IDYwLjM2NzggNTMuNzc0MSA2MC42MzY3IDUzLjkwNjJDNjAuOTEwMiA1NC4wMzg0IDYxLjIyMDEgNTQuMTA0NSA2MS41NjY0IDU0LjEwNDVDNjIuMDEzIDU0LjEwNDUgNjIuMzkxMyA1NC4wMTMzIDYyLjcwMTIgNTMuODMxMUM2My4wMTExIDUzLjY0ODggNjMuMjgyMiA1My40MDQ5IDYzLjUxNDYgNTMuMDk5Nkw2NC4yODAzIDUzLjcwOEM2NC4xMjA4IDUzLjk0OTUgNjMuOTE4IDU0LjE3OTcgNjMuNjcxOSA1NC4zOTg0QzYzLjQyNTggNTQuNjE3MiA2My4xMjI3IDU0Ljc5NDkgNjIuNzYyNyA1NC45MzE2QzYyLjQwNzIgNTUuMDY4NCA2MS45ODU3IDU1LjEzNjcgNjEuNDk4IDU1LjEzNjdaTTcwLjUxNDYgNTMuNTY0NVY0NC41SDcxLjc4NjFWNTVINzAuNjI0TDcwLjUxNDYgNTMuNTY0NVpNNjUuNTM4MSA1MS4zODM4VjUxLjI0MDJDNjUuNTM4MSA1MC42NzUxIDY1LjYwNjQgNTAuMTYyNCA2NS43NDMyIDQ5LjcwMjFDNjUuODg0NCA0OS4yMzczIDY2LjA4MjcgNDguODM4NSA2Ni4zMzc5IDQ4LjUwNTlDNjYuNTk3NyA0OC4xNzMyIDY2LjkwNTMgNDcuOTE4IDY3LjI2MDcgNDcuNzQwMkM2Ny42MjA4IDQ3LjU1NzkgNjguMDIxOCA0Ny40NjY4IDY4LjQ2MzkgNDcuNDY2OEM2OC45Mjg3IDQ3LjQ2NjggNjkuMzM0MyA0Ny41NDg4IDY5LjY4MDcgNDcuNzEyOUM3MC4wMzE2IDQ3Ljg3MjQgNzAuMzI3OCA0OC4xMDcxIDcwLjU2OTMgNDguNDE3QzcwLjgxNTQgNDguNzIyMyA3MS4wMDkxIDQ5LjA5MTUgNzEuMTUwNCA0OS41MjQ0QzcxLjI5MTcgNDkuOTU3NCA3MS4zODk2IDUwLjQ0NzMgNzEuNDQ0MyA1MC45OTQxVjUxLjYyM0M3MS4zOTQyIDUyLjE2NTQgNzEuMjk2MiA1Mi42NTMgNzEuMTUwNCA1My4wODU5QzcxLjAwOTEgNTMuNTE4OSA3MC44MTU0IDUzLjg4OCA3MC41NjkzIDU0LjE5MzRDNzAuMzI3OCA1NC40OTg3IDcwLjAzMTYgNTQuNzMzNCA2OS42ODA3IDU0Ljg5NzVDNjkuMzI5OCA1NS4wNTcgNjguOTE5NiA1NS4xMzY3IDY4LjQ1MDIgNTUuMTM2N0M2OC4wMTczIDU1LjEzNjcgNjcuNjIwOCA1NS4wNDMzIDY3LjI2MDcgNTQuODU2NEM2Ni45MDUzIDU0LjY2OTYgNjYuNTk3NyA1NC40MDc2IDY2LjMzNzkgNTQuMDcwM0M2Ni4wODI3IDUzLjczMzEgNjUuODg0NCA1My4zMzY2IDY1Ljc0MzIgNTIuODgwOUM2NS42MDY0IDUyLjQyMDYgNjUuNTM4MSA1MS45MjE1IDY1LjUzODEgNTEuMzgzOFpNNjYuODA5NiA1MS4yNDAyVjUxLjM4MzhDNjYuODA5NiA1MS43NTI5IDY2Ljg0NiA1Mi4wOTkzIDY2LjkxODkgNTIuNDIyOUM2Ni45OTY0IDUyLjc0NjQgNjcuMTE0OSA1My4wMzEyIDY3LjI3NDQgNTMuMjc3M0M2Ny40MzM5IDUzLjUyMzQgNjcuNjM2NyA1My43MTcxIDY3Ljg4MjggNTMuODU4NEM2OC4xMjg5IDUzLjk5NTEgNjguNDIyOSA1NC4wNjM1IDY4Ljc2NDYgNTQuMDYzNUM2OS4xODM5IDU0LjA2MzUgNjkuNTI4IDUzLjk3NDYgNjkuNzk2OSA1My43OTY5QzcwLjA3MDMgNTMuNjE5MSA3MC4yODkxIDUzLjM4NDQgNzAuNDUzMSA1My4wOTI4QzcwLjYxNzIgNTIuODAxMSA3MC43NDQ4IDUyLjQ4NDQgNzAuODM1OSA1Mi4xNDI2VjUwLjQ5NTFDNzAuNzgxMiA1MC4yNDQ1IDcwLjcwMTUgNTAuMDAyOSA3MC41OTY3IDQ5Ljc3MDVDNzAuNDk2NCA0OS41MzM1IDcwLjM2NDMgNDkuMzIzOSA3MC4yMDAyIDQ5LjE0MTZDNzAuMDQwNyA0OC45NTQ4IDY5Ljg0MjQgNDguODA2NiA2OS42MDU1IDQ4LjY5NzNDNjkuMzczIDQ4LjU4NzkgNjkuMDk3MyA0OC41MzMyIDY4Ljc3ODMgNDguNTMzMkM2OC40MzIgNDguNTMzMiA2OC4xMzM1IDQ4LjYwNjEgNjcuODgyOCA0OC43NTJDNjcuNjM2NyA0OC44OTMyIDY3LjQzMzkgNDkuMDg5MiA2Ny4yNzQ0IDQ5LjMzOThDNjcuMTE0OSA0OS41ODU5IDY2Ljk5NjQgNDkuODczIDY2LjkxODkgNTAuMjAxMkM2Ni44NDYgNTAuNTI0NyA2Ni44MDk2IDUwLjg3MTEgNjYuODA5NiA1MS4yNDAyWk03OC40ODU0IDQ5LjA3MzJWNTVINzcuMjEzOVY0Ny42MDM1SDc4LjQxN0w3OC40ODU0IDQ5LjA3MzJaTTc4LjIyNTYgNTEuMDIxNUw3Ny42Mzc3IDUxLjAwMUM3Ny42NDIzIDUwLjQ5NTEgNzcuNzA4MyA1MC4wMjggNzcuODM1OSA0OS41OTk2Qzc3Ljk2MzUgNDkuMTY2NyA3OC4xNTI3IDQ4Ljc5MDcgNzguNDAzMyA0OC40NzE3Qzc4LjY1NCA0OC4xNTI3IDc4Ljk2NjEgNDcuOTA2NiA3OS4zMzk4IDQ3LjczMzRDNzkuNzEzNSA0Ny41NTU3IDgwLjE0NjUgNDcuNDY2OCA4MC42Mzg3IDQ3LjQ2NjhDODAuOTg1IDQ3LjQ2NjggODEuMzA0IDQ3LjUxNjkgODEuNTk1NyA0Ny42MTcyQzgxLjg4NzQgNDcuNzEyOSA4Mi4xNDAzIDQ3Ljg2NTYgODIuMzU0NSA0OC4wNzUyQzgyLjU2ODcgNDguMjg0OCA4Mi43MzUgNDguNTUzNyA4Mi44NTM1IDQ4Ljg4MThDODIuOTcyIDQ5LjIxIDgzLjAzMTIgNDkuNjA2NCA4My4wMzEyIDUwLjA3MTNWNTVIODEuNzY2NlY1MC4xMzI4QzgxLjc2NjYgNDkuNzQ1NCA4MS43MDA1IDQ5LjQzNTUgODEuNTY4NCA0OS4yMDMxQzgxLjQ0MDggNDguOTcwNyA4MS4yNTg1IDQ4LjgwMjEgODEuMDIxNSA0OC42OTczQzgwLjc4NDUgNDguNTg3OSA4MC41MDY1IDQ4LjUzMzIgODAuMTg3NSA0OC41MzMyQzc5LjgxMzggNDguNTMzMiA3OS41MDE2IDQ4LjU5OTMgNzkuMjUxIDQ4LjczMTRDNzkuMDAwMyA0OC44NjM2IDc4Ljc5OTggNDkuMDQ1OSA3OC42NDk0IDQ5LjI3ODNDNzguNDk5IDQ5LjUxMDcgNzguMzg5NiA0OS43NzczIDc4LjMyMTMgNTAuMDc4MUM3OC4yNTc1IDUwLjM3NDMgNzguMjI1NiA1MC42ODg4IDc4LjIyNTYgNTEuMDIxNVpNODMuMDE3NiA1MC4zMjQyTDgyLjE2OTkgNTAuNTg0QzgyLjE3NDUgNTAuMTc4NCA4Mi4yNDA2IDQ5Ljc4ODcgODIuMzY4MiA0OS40MTVDODIuNTAwMyA0OS4wNDEzIDgyLjY4OTUgNDguNzA4NyA4Mi45MzU1IDQ4LjQxN0M4My4xODYyIDQ4LjEyNTMgODMuNDkzOCA0Ny44OTUyIDgzLjg1ODQgNDcuNzI2NkM4NC4yMjMgNDcuNTUzNCA4NC42NCA0Ny40NjY4IDg1LjEwOTQgNDcuNDY2OEM4NS41MDU5IDQ3LjQ2NjggODUuODU2OCA0Ny41MTkyIDg2LjE2MjEgNDcuNjI0Qzg2LjQ3MiA0Ny43Mjg4IDg2LjczMTggNDcuODkwNiA4Ni45NDE0IDQ4LjEwOTRDODcuMTU1NiA0OC4zMjM2IDg3LjMxNzQgNDguNTk5MyA4Ny40MjY4IDQ4LjkzNjVDODcuNTM2MSA0OS4yNzM4IDg3LjU5MDggNDkuNjc0OCA4Ny41OTA4IDUwLjEzOTZWNTVIODYuMzE5M1Y1MC4xMjZDODYuMzE5MyA0OS43MTEzIDg2LjI1MzMgNDkuMzkgODYuMTIxMSA0OS4xNjIxQzg1Ljk5MzUgNDguOTI5NyA4NS44MTEyIDQ4Ljc2NzkgODUuNTc0MiA0OC42NzY4Qzg1LjM0MTggNDguNTgxMSA4NS4wNjM4IDQ4LjUzMzIgODQuNzQwMiA0OC41MzMyQzg0LjQ2MjIgNDguNTMzMiA4NC4yMTYxIDQ4LjU4MTEgODQuMDAyIDQ4LjY3NjhDODMuNzg3OCA0OC43NzI1IDgzLjYwNzcgNDguOTA0NiA4My40NjE5IDQ5LjA3MzJDODMuMzE2MSA0OS4yMzczIDgzLjIwNDQgNDkuNDI2NCA4My4xMjcgNDkuNjQwNkM4My4wNTQgNDkuODU0OCA4My4wMTc2IDUwLjA4MjcgODMuMDE3NiA1MC4zMjQyWk05Mi41NzQyIDU1LjEzNjdDOTIuMDU5MiA1NS4xMzY3IDkxLjU5MjEgNTUuMDUwMSA5MS4xNzI5IDU0Ljg3N0M5MC43NTgxIDU0LjY5OTIgOTAuNDAwNCA1NC40NTA4IDkwLjA5OTYgNTQuMTMxOEM4OS44MDM0IDUzLjgxMjggODkuNTc1NSA1My40MzQ2IDg5LjQxNiA1Mi45OTcxQzg5LjI1NjUgNTIuNTU5NiA4OS4xNzY4IDUyLjA4MTEgODkuMTc2OCA1MS41NjE1VjUxLjI3NDRDODkuMTc2OCA1MC42NzI5IDg5LjI2NTYgNTAuMTM3NCA4OS40NDM0IDQ5LjY2OEM4OS42MjExIDQ5LjE5NCA4OS44NjI2IDQ4Ljc5MyA5MC4xNjggNDguNDY0OEM5MC40NzMzIDQ4LjEzNjcgOTAuODE5NyA0Ny44ODgzIDkxLjIwNyA0Ny43MTk3QzkxLjU5NDQgNDcuNTUxMSA5MS45OTU0IDQ3LjQ2NjggOTIuNDEwMiA0Ny40NjY4QzkyLjkzODggNDcuNDY2OCA5My4zOTQ1IDQ3LjU1NzkgOTMuNzc3MyA0Ny43NDAyQzk0LjE2NDcgNDcuOTIyNSA5NC40ODE0IDQ4LjE3NzcgOTQuNzI3NSA0OC41MDU5Qzk0Ljk3MzYgNDguODI5NCA5NS4xNTU5IDQ5LjIxMjIgOTUuMjc0NCA0OS42NTQzQzk1LjM5MjkgNTAuMDkxOCA5NS40NTIxIDUwLjU3MDMgOTUuNDUyMSA1MS4wODk4VjUxLjY1NzJIODkuOTI4N1Y1MC42MjVIOTQuMTg3NVY1MC41MjkzQzk0LjE2OTMgNTAuMjAxMiA5NC4xMDA5IDQ5Ljg4MjIgOTMuOTgyNCA0OS41NzIzQzkzLjg2ODUgNDkuMjYyNCA5My42ODYyIDQ5LjAwNzIgOTMuNDM1NSA0OC44MDY2QzkzLjE4NDkgNDguNjA2MSA5Mi44NDMxIDQ4LjUwNTkgOTIuNDEwMiA0OC41MDU5QzkyLjEyMyA0OC41MDU5IDkxLjg1ODcgNDguNTY3NCA5MS42MTcyIDQ4LjY5MDRDOTEuMzc1NyA0OC44MDg5IDkxLjE2ODMgNDguOTg2NyA5MC45OTUxIDQ5LjIyMzZDOTAuODIxOSA0OS40NjA2IDkwLjY4NzUgNDkuNzUgOTAuNTkxOCA1MC4wOTE4QzkwLjQ5NjEgNTAuNDMzNiA5MC40NDgyIDUwLjgyNzggOTAuNDQ4MiA1MS4yNzQ0VjUxLjU2MTVDOTAuNDQ4MiA1MS45MTI0IDkwLjQ5NjEgNTIuMjQyOCA5MC41OTE4IDUyLjU1MjdDOTAuNjkyMSA1Mi44NTgxIDkwLjgzNTYgNTMuMTI3IDkxLjAyMjUgNTMuMzU5NEM5MS4yMTM5IDUzLjU5MTggOTEuNDQ0IDUzLjc3NDEgOTEuNzEyOSA1My45MDYyQzkxLjk4NjMgNTQuMDM4NCA5Mi4yOTYyIDU0LjEwNDUgOTIuNjQyNiA1NC4xMDQ1QzkzLjA4OTIgNTQuMTA0NSA5My40Njc0IDU0LjAxMzMgOTMuNzc3MyA1My44MzExQzk0LjA4NzIgNTMuNjQ4OCA5NC4zNTg0IDUzLjQwNDkgOTQuNTkwOCA1My4wOTk2TDk1LjM1NjQgNTMuNzA4Qzk1LjE5NjkgNTMuOTQ5NSA5NC45OTQxIDU0LjE3OTcgOTQuNzQ4IDU0LjM5ODRDOTQuNTAyIDU0LjYxNzIgOTQuMTk4OSA1NC43OTQ5IDkzLjgzODkgNTQuOTMxNkM5My40ODM0IDU1LjA2ODQgOTMuMDYxOCA1NS4xMzY3IDkyLjU3NDIgNTUuMTM2N1pNMTAwLjAyNSA0Ny42MDM1VjQ4LjU3NDJIOTYuMDI2NFY0Ny42MDM1SDEwMC4wMjVaTTk3LjM3OTkgNDUuODA1N0g5OC42NDQ1VjUzLjE2OEM5OC42NDQ1IDUzLjQxODYgOTguNjgzMyA1My42MDc3IDk4Ljc2MDcgNTMuNzM1NEM5OC44MzgyIDUzLjg2MyA5OC45Mzg1IDUzLjk0NzMgOTkuMDYxNSA1My45ODgzQzk5LjE4NDYgNTQuMDI5MyA5OS4zMTY3IDU0LjA0OTggOTkuNDU4IDU0LjA0OThDOTkuNTYyOCA1NC4wNDk4IDk5LjY3MjIgNTQuMDQwNyA5OS43ODYxIDU0LjAyMjVDOTkuOTA0NiA1My45OTk3IDk5Ljk5MzUgNTMuOTgxNCAxMDAuMDUzIDUzLjk2NzhMMTAwLjA2IDU1Qzk5Ljk1OTMgNTUuMDMxOSA5OS44MjcxIDU1LjA2MTUgOTkuNjYzMSA1NS4wODg5Qzk5LjUwMzYgNTUuMTIwOCA5OS4zMDk5IDU1LjEzNjcgOTkuMDgyIDU1LjEzNjdDOTguNzcyMSA1NS4xMzY3IDk4LjQ4NzMgNTUuMDc1MiA5OC4yMjc1IDU0Ljk1MjFDOTcuOTY3OCA1NC44MjkxIDk3Ljc2MDQgNTQuNjI0IDk3LjYwNTUgNTQuMzM2OUM5Ny40NTUxIDU0LjA0NTIgOTcuMzc5OSA1My42NTMzIDk3LjM3OTkgNTMuMTYxMVY0NS44MDU3Wk0xMDIuNzczIDQ0LjVWNTVIMTAxLjUwOVY0NC41SDEwMi43NzNaTTEwMi40NzMgNTEuMDIxNUwxMDEuOTQ2IDUxLjAwMUMxMDEuOTUxIDUwLjQ5NTEgMTAyLjAyNiA1MC4wMjggMTAyLjE3MiA0OS41OTk2QzEwMi4zMTggNDkuMTY2NyAxMDIuNTIzIDQ4Ljc5MDcgMTAyLjc4NyA0OC40NzE3QzEwMy4wNTEgNDguMTUyNyAxMDMuMzY2IDQ3LjkwNjYgMTAzLjczIDQ3LjczMzRDMTA0LjEgNDcuNTU1NyAxMDQuNTA3IDQ3LjQ2NjggMTA0Ljk1NCA0Ny40NjY4QzEwNS4zMTkgNDcuNDY2OCAxMDUuNjQ3IDQ3LjUxNjkgMTA1LjkzOCA0Ny42MTcyQzEwNi4yMyA0Ny43MTI5IDEwNi40NzkgNDcuODY3OCAxMDYuNjg0IDQ4LjA4MkMxMDYuODkzIDQ4LjI5NjIgMTA3LjA1MyA0OC41NzQyIDEwNy4xNjIgNDguOTE2QzEwNy4yNzEgNDkuMjUzMyAxMDcuMzI2IDQ5LjY2NTcgMTA3LjMyNiA1MC4xNTMzVjU1SDEwNi4wNTVWNTAuMTM5NkMxMDYuMDU1IDQ5Ljc1MjMgMTA1Ljk5OCA0OS40NDI0IDEwNS44ODQgNDkuMjFDMTA1Ljc3IDQ4Ljk3MyAxMDUuNjA0IDQ4LjgwMjEgMTA1LjM4NSA0OC42OTczQzEwNS4xNjYgNDguNTg3OSAxMDQuODk3IDQ4LjUzMzIgMTA0LjU3OCA0OC41MzMyQzEwNC4yNjQgNDguNTMzMiAxMDMuOTc3IDQ4LjU5OTMgMTAzLjcxNyA0OC43MzE0QzEwMy40NjIgNDguODYzNiAxMDMuMjQxIDQ5LjA0NTkgMTAzLjA1NCA0OS4yNzgzQzEwMi44NzEgNDkuNTEwNyAxMDIuNzI4IDQ5Ljc3NzMgMTAyLjYyMyA1MC4wNzgxQzEwMi41MjMgNTAuMzc0MyAxMDIuNDczIDUwLjY4ODggMTAyLjQ3MyA1MS4wMjE1Wk0xMDguODg1IDUxLjM4MzhWNTEuMjI2NkMxMDguODg1IDUwLjY5MzQgMTA4Ljk2MiA1MC4xOTg5IDEwOS4xMTcgNDkuNzQzMkMxMDkuMjcyIDQ5LjI4MjkgMTA5LjQ5NSA0OC44ODQxIDEwOS43ODcgNDguNTQ2OUMxMTAuMDc5IDQ4LjIwNTEgMTEwLjQzMiA0Ny45NDA4IDExMC44NDcgNDcuNzUzOUMxMTEuMjYxIDQ3LjU2MjUgMTExLjcyNiA0Ny40NjY4IDExMi4yNDEgNDcuNDY2OEMxMTIuNzYxIDQ3LjQ2NjggMTEzLjIyOCA0Ny41NjI1IDExMy42NDMgNDcuNzUzOUMxMTQuMDYyIDQ3Ljk0MDggMTE0LjQxNyA0OC4yMDUxIDExNC43MDkgNDguNTQ2OUMxMTUuMDA1IDQ4Ljg4NDEgMTE1LjIzMSA0OS4yODI5IDExNS4zODYgNDkuNzQzMkMxMTUuNTQxIDUwLjE5ODkgMTE1LjYxOCA1MC42OTM0IDExNS42MTggNTEuMjI2NlY1MS4zODM4QzExNS42MTggNTEuOTE3IDExNS41NDEgNTIuNDExNSAxMTUuMzg2IDUyLjg2NzJDMTE1LjIzMSA1My4zMjI5IDExNS4wMDUgNTMuNzIxNyAxMTQuNzA5IDU0LjA2MzVDMTE0LjQxNyA1NC40MDA3IDExNC4wNjQgNTQuNjY1IDExMy42NDkgNTQuODU2NEMxMTMuMjM5IDU1LjA0MzMgMTEyLjc3NCA1NS4xMzY3IDExMi4yNTUgNTUuMTM2N0MxMTEuNzM1IDU1LjEzNjcgMTExLjI2OCA1NS4wNDMzIDExMC44NTQgNTQuODU2NEMxMTAuNDM5IDU0LjY2NSAxMTAuMDgzIDU0LjQwMDcgMTA5Ljc4NyA1NC4wNjM1QzEwOS40OTUgNTMuNzIxNyAxMDkuMjcyIDUzLjMyMjkgMTA5LjExNyA1Mi44NjcyQzEwOC45NjIgNTIuNDExNSAxMDguODg1IDUxLjkxNyAxMDguODg1IDUxLjM4MzhaTTExMC4xNDkgNTEuMjI2NlY1MS4zODM4QzExMC4xNDkgNTEuNzUyOSAxMTAuMTkzIDUyLjEwMTYgMTEwLjI3OSA1Mi40Mjk3QzExMC4zNjYgNTIuNzUzMyAxMTAuNDk2IDUzLjA0MDQgMTEwLjY2OSA1My4yOTFDMTEwLjg0NyA1My41NDE3IDExMS4wNjggNTMuNzM5OSAxMTEuMzMyIDUzLjg4NTdDMTExLjU5NiA1NC4wMjcgMTExLjkwNCA1NC4wOTc3IDExMi4yNTUgNTQuMDk3N0MxMTIuNjAxIDU0LjA5NzcgMTEyLjkwNCA1NC4wMjcgMTEzLjE2NCA1My44ODU3QzExMy40MjggNTMuNzM5OSAxMTMuNjQ3IDUzLjU0MTcgMTEzLjgyIDUzLjI5MUMxMTMuOTkzIDUzLjA0MDQgMTE0LjEyMyA1Mi43NTMzIDExNC4yMSA1Mi40Mjk3QzExNC4zMDEgNTIuMTAxNiAxMTQuMzQ3IDUxLjc1MjkgMTE0LjM0NyA1MS4zODM4VjUxLjIyNjZDMTE0LjM0NyA1MC44NjIgMTE0LjMwMSA1MC41MTc5IDExNC4yMSA1MC4xOTQzQzExNC4xMjMgNDkuODY2MiAxMTMuOTkxIDQ5LjU3NjggMTEzLjgxMyA0OS4zMjYyQzExMy42NCA0OS4wNzEgMTEzLjQyMiA0OC44NzA0IDExMy4xNTcgNDguNzI0NkMxMTIuODk3IDQ4LjU3ODggMTEyLjU5MiA0OC41MDU5IDExMi4yNDEgNDguNTA1OUMxMTEuODk1IDQ4LjUwNTkgMTExLjU5IDQ4LjU3ODggMTExLjMyNSA0OC43MjQ2QzExMS4wNjUgNDguODcwNCAxMTAuODQ3IDQ5LjA3MSAxMTAuNjY5IDQ5LjMyNjJDMTEwLjQ5NiA0OS41NzY4IDExMC4zNjYgNDkuODY2MiAxMTAuMjc5IDUwLjE5NDNDMTEwLjE5MyA1MC41MTc5IDExMC4xNDkgNTAuODYyIDExMC4xNDkgNTEuMjI2NlpNMTIxLjg2NiA1My41NjQ1VjQ0LjVIMTIzLjEzOFY1NUgxMjEuOTc2TDEyMS44NjYgNTMuNTY0NVpNMTE2Ljg5IDUxLjM4MzhWNTEuMjQwMkMxMTYuODkgNTAuNjc1MSAxMTYuOTU4IDUwLjE2MjQgMTE3LjA5NSA0OS43MDIxQzExNy4yMzYgNDkuMjM3MyAxMTcuNDM0IDQ4LjgzODUgMTE3LjY4OSA0OC41MDU5QzExNy45NDkgNDguMTczMiAxMTguMjU3IDQ3LjkxOCAxMTguNjEyIDQ3Ljc0MDJDMTE4Ljk3MiA0Ny41NTc5IDExOS4zNzMgNDcuNDY2OCAxMTkuODE1IDQ3LjQ2NjhDMTIwLjI4IDQ3LjQ2NjggMTIwLjY4NiA0Ny41NDg4IDEyMS4wMzIgNDcuNzEyOUMxMjEuMzgzIDQ3Ljg3MjQgMTIxLjY3OSA0OC4xMDcxIDEyMS45MjEgNDguNDE3QzEyMi4xNjcgNDguNzIyMyAxMjIuMzYxIDQ5LjA5MTUgMTIyLjUwMiA0OS41MjQ0QzEyMi42NDMgNDkuOTU3NCAxMjIuNzQxIDUwLjQ0NzMgMTIyLjc5NiA1MC45OTQxVjUxLjYyM0MxMjIuNzQ2IDUyLjE2NTQgMTIyLjY0OCA1Mi42NTMgMTIyLjUwMiA1My4wODU5QzEyMi4zNjEgNTMuNTE4OSAxMjIuMTY3IDUzLjg4OCAxMjEuOTIxIDU0LjE5MzRDMTIxLjY3OSA1NC40OTg3IDEyMS4zODMgNTQuNzMzNCAxMjEuMDMyIDU0Ljg5NzVDMTIwLjY4MSA1NS4wNTcgMTIwLjI3MSA1NS4xMzY3IDExOS44MDIgNTUuMTM2N0MxMTkuMzY5IDU1LjEzNjcgMTE4Ljk3MiA1NS4wNDMzIDExOC42MTIgNTQuODU2NEMxMTguMjU3IDU0LjY2OTYgMTE3Ljk0OSA1NC40MDc2IDExNy42ODkgNTQuMDcwM0MxMTcuNDM0IDUzLjczMzEgMTE3LjIzNiA1My4zMzY2IDExNy4wOTUgNTIuODgwOUMxMTYuOTU4IDUyLjQyMDYgMTE2Ljg5IDUxLjkyMTUgMTE2Ljg5IDUxLjM4MzhaTTExOC4xNjEgNTEuMjQwMlY1MS4zODM4QzExOC4xNjEgNTEuNzUyOSAxMTguMTk4IDUyLjA5OTMgMTE4LjI3MSA1Mi40MjI5QzExOC4zNDggNTIuNzQ2NCAxMTguNDY2IDUzLjAzMTIgMTE4LjYyNiA1My4yNzczQzExOC43ODUgNTMuNTIzNCAxMTguOTg4IDUzLjcxNzEgMTE5LjIzNCA1My44NTg0QzExOS40OCA1My45OTUxIDExOS43NzQgNTQuMDYzNSAxMjAuMTE2IDU0LjA2MzVDMTIwLjUzNSA1NC4wNjM1IDEyMC44OCA1My45NzQ2IDEyMS4xNDggNTMuNzk2OUMxMjEuNDIyIDUzLjYxOTEgMTIxLjY0MSA1My4zODQ0IDEyMS44MDUgNTMuMDkyOEMxMjEuOTY5IDUyLjgwMTEgMTIyLjA5NiA1Mi40ODQ0IDEyMi4xODggNTIuMTQyNlY1MC40OTUxQzEyMi4xMzMgNTAuMjQ0NSAxMjIuMDUzIDUwLjAwMjkgMTIxLjk0OCA0OS43NzA1QzEyMS44NDggNDkuNTMzNSAxMjEuNzE2IDQ5LjMyMzkgMTIxLjU1MiA0OS4xNDE2QzEyMS4zOTIgNDguOTU0OCAxMjEuMTk0IDQ4LjgwNjYgMTIwLjk1NyA0OC42OTczQzEyMC43MjUgNDguNTg3OSAxMjAuNDQ5IDQ4LjUzMzIgMTIwLjEzIDQ4LjUzMzJDMTE5Ljc4NCA0OC41MzMyIDExOS40ODUgNDguNjA2MSAxMTkuMjM0IDQ4Ljc1MkMxMTguOTg4IDQ4Ljg5MzIgMTE4Ljc4NSA0OS4wODkyIDExOC42MjYgNDkuMzM5OEMxMTguNDY2IDQ5LjU4NTkgMTE4LjM0OCA0OS44NzMgMTE4LjI3MSA1MC4yMDEyQzExOC4xOTggNTAuNTI0NyAxMTguMTYxIDUwLjg3MTEgMTE4LjE2MSA1MS4yNDAyWk0xMjguMjQ0IDUxLjM4MzhWNTEuMjI2NkMxMjguMjQ0IDUwLjY5MzQgMTI4LjMyMiA1MC4xOTg5IDEyOC40NzcgNDkuNzQzMkMxMjguNjMyIDQ5LjI4MjkgMTI4Ljg1NSA0OC44ODQxIDEyOS4xNDYgNDguNTQ2OUMxMjkuNDM4IDQ4LjIwNTEgMTI5Ljc5MSA0Ny45NDA4IDEzMC4yMDYgNDcuNzUzOUMxMzAuNjIxIDQ3LjU2MjUgMTMxLjA4NiA0Ny40NjY4IDEzMS42MDEgNDcuNDY2OEMxMzIuMTIgNDcuNDY2OCAxMzIuNTg3IDQ3LjU2MjUgMTMzLjAwMiA0Ny43NTM5QzEzMy40MjEgNDcuOTQwOCAxMzMuNzc3IDQ4LjIwNTEgMTM0LjA2OCA0OC41NDY5QzEzNC4zNjUgNDguODg0MSAxMzQuNTkgNDkuMjgyOSAxMzQuNzQ1IDQ5Ljc0MzJDMTM0LjkgNTAuMTk4OSAxMzQuOTc4IDUwLjY5MzQgMTM0Ljk3OCA1MS4yMjY2VjUxLjM4MzhDMTM0Ljk3OCA1MS45MTcgMTM0LjkgNTIuNDExNSAxMzQuNzQ1IDUyLjg2NzJDMTM0LjU5IDUzLjMyMjkgMTM0LjM2NSA1My43MjE3IDEzNC4wNjggNTQuMDYzNUMxMzMuNzc3IDU0LjQwMDcgMTMzLjQyNCA1NC42NjUgMTMzLjAwOSA1NC44NTY0QzEzMi41OTkgNTUuMDQzMyAxMzIuMTM0IDU1LjEzNjcgMTMxLjYxNCA1NS4xMzY3QzEzMS4wOTUgNTUuMTM2NyAxMzAuNjI4IDU1LjA0MzMgMTMwLjIxMyA1NC44NTY0QzEyOS43OTggNTQuNjY1IDEyOS40NDMgNTQuNDAwNyAxMjkuMTQ2IDU0LjA2MzVDMTI4Ljg1NSA1My43MjE3IDEyOC42MzIgNTMuMzIyOSAxMjguNDc3IDUyLjg2NzJDMTI4LjMyMiA1Mi40MTE1IDEyOC4yNDQgNTEuOTE3IDEyOC4yNDQgNTEuMzgzOFpNMTI5LjUwOSA1MS4yMjY2VjUxLjM4MzhDMTI5LjUwOSA1MS43NTI5IDEyOS41NTIgNTIuMTAxNiAxMjkuNjM5IDUyLjQyOTdDMTI5LjcyNSA1Mi43NTMzIDEyOS44NTUgNTMuMDQwNCAxMzAuMDI4IDUzLjI5MUMxMzAuMjA2IDUzLjU0MTcgMTMwLjQyNyA1My43Mzk5IDEzMC42OTEgNTMuODg1N0MxMzAuOTU2IDU0LjAyNyAxMzEuMjYzIDU0LjA5NzcgMTMxLjYxNCA1NC4wOTc3QzEzMS45NjEgNTQuMDk3NyAxMzIuMjY0IDU0LjAyNyAxMzIuNTIzIDUzLjg4NTdDMTMyLjc4OCA1My43Mzk5IDEzMy4wMDcgNTMuNTQxNyAxMzMuMTggNTMuMjkxQzEzMy4zNTMgNTMuMDQwNCAxMzMuNDgzIDUyLjc1MzMgMTMzLjU2OSA1Mi40Mjk3QzEzMy42NiA1Mi4xMDE2IDEzMy43MDYgNTEuNzUyOSAxMzMuNzA2IDUxLjM4MzhWNTEuMjI2NkMxMzMuNzA2IDUwLjg2MiAxMzMuNjYgNTAuNTE3OSAxMzMuNTY5IDUwLjE5NDNDMTMzLjQ4MyA0OS44NjYyIDEzMy4zNTEgNDkuNTc2OCAxMzMuMTczIDQ5LjMyNjJDMTMzIDQ5LjA3MSAxMzIuNzgxIDQ4Ljg3MDQgMTMyLjUxNyA0OC43MjQ2QzEzMi4yNTcgNDguNTc4OCAxMzEuOTUxIDQ4LjUwNTkgMTMxLjYwMSA0OC41MDU5QzEzMS4yNTQgNDguNTA1OSAxMzAuOTQ5IDQ4LjU3ODggMTMwLjY4NSA0OC43MjQ2QzEzMC40MjUgNDguODcwNCAxMzAuMjA2IDQ5LjA3MSAxMzAuMDI4IDQ5LjMyNjJDMTI5Ljg1NSA0OS41NzY4IDEyOS43MjUgNDkuODY2MiAxMjkuNjM5IDUwLjE5NDNDMTI5LjU1MiA1MC41MTc5IDEyOS41MDkgNTAuODYyIDEyOS41MDkgNTEuMjI2NlpNMTM4LjQ1IDU1SDEzNy4xODZWNDYuODI0MkMxMzcuMTg2IDQ2LjI5MSAxMzcuMjgxIDQ1Ljg0MjEgMTM3LjQ3MyA0NS40Nzc1QzEzNy42NjkgNDUuMTA4NCAxMzcuOTQ5IDQ0LjgzMDQgMTM4LjMxMyA0NC42NDM2QzEzOC42NzggNDQuNDUyMSAxMzkuMTExIDQ0LjM1NjQgMTM5LjYxMiA0NC4zNTY0QzEzOS43NTggNDQuMzU2NCAxMzkuOTA0IDQ0LjM2NTYgMTQwLjA1IDQ0LjM4MzhDMTQwLjIgNDQuNDAyIDE0MC4zNDYgNDQuNDI5NCAxNDAuNDg3IDQ0LjQ2NThMMTQwLjQxOSA0NS40OThDMTQwLjMyMyA0NS40NzUzIDE0MC4yMTQgNDUuNDU5MyAxNDAuMDkxIDQ1LjQ1MDJDMTM5Ljk3MiA0NS40NDExIDEzOS44NTQgNDUuNDM2NSAxMzkuNzM1IDQ1LjQzNjVDMTM5LjQ2NiA0NS40MzY1IDEzOS4yMzQgNDUuNDkxMiAxMzkuMDM4IDQ1LjYwMDZDMTM4Ljg0NyA0NS43MDU0IDEzOC43MDEgNDUuODYwNCAxMzguNjAxIDQ2LjA2NTRDMTM4LjUgNDYuMjcwNSAxMzguNDUgNDYuNTIzNCAxMzguNDUgNDYuODI0MlY1NVpNMTQwLjAyMiA0Ny42MDM1VjQ4LjU3NDJIMTM2LjAxN1Y0Ny42MDM1SDE0MC4wMjJaTTE0Ny44NjMgNTQuMDk3N0MxNDguMTY0IDU0LjA5NzcgMTQ4LjQ0MiA1NC4wMzYxIDE0OC42OTcgNTMuOTEzMUMxNDguOTUyIDUzLjc5IDE0OS4xNjIgNTMuNjIxNCAxNDkuMzI2IDUzLjQwNzJDMTQ5LjQ5IDUzLjE4ODUgMTQ5LjU4NCA1Mi45NDAxIDE0OS42MDYgNTIuNjYyMUgxNTAuODFDMTUwLjc4NyA1My4wOTk2IDE1MC42MzkgNTMuNTA3NSAxNTAuMzY1IDUzLjg4NTdDMTUwLjA5NiA1NC4yNTk0IDE0OS43NDMgNTQuNTYyNSAxNDkuMzA2IDU0Ljc5NDlDMTQ4Ljg2OCA1NS4wMjI4IDE0OC4zODcgNTUuMTM2NyAxNDcuODYzIDU1LjEzNjdDMTQ3LjMwNyA1NS4xMzY3IDE0Ni44MjIgNTUuMDM4NyAxNDYuNDA3IDU0Ljg0MjhDMTQ1Ljk5NyA1NC42NDY4IDE0NS42NTUgNTQuMzc3OSAxNDUuMzgyIDU0LjAzNjFDMTQ1LjExMyA1My42OTQzIDE0NC45MSA1My4zMDI0IDE0NC43NzMgNTIuODYwNEMxNDQuNjQxIDUyLjQxMzcgMTQ0LjU3NSA1MS45NDIxIDE0NC41NzUgNTEuNDQ1M1Y1MS4xNTgyQzE0NC41NzUgNTAuNjYxNSAxNDQuNjQxIDUwLjE5MjEgMTQ0Ljc3MyA0OS43NUMxNDQuOTEgNDkuMzAzNCAxNDUuMTEzIDQ4LjkwOTIgMTQ1LjM4MiA0OC41Njc0QzE0NS42NTUgNDguMjI1NiAxNDUuOTk3IDQ3Ljk1NjcgMTQ2LjQwNyA0Ny43NjA3QzE0Ni44MjIgNDcuNTY0OCAxNDcuMzA3IDQ3LjQ2NjggMTQ3Ljg2MyA0Ny40NjY4QzE0OC40NDIgNDcuNDY2OCAxNDguOTQ4IDQ3LjU4NTMgMTQ5LjM4MSA0Ny44MjIzQzE0OS44MTQgNDguMDU0NyAxNTAuMTUzIDQ4LjM3MzcgMTUwLjM5OSA0OC43NzkzQzE1MC42NSA0OS4xODAzIDE1MC43ODcgNDkuNjM2MSAxNTAuODEgNTAuMTQ2NUgxNDkuNjA2QzE0OS41ODQgNDkuODQxMSAxNDkuNDk3IDQ5LjU2NTQgMTQ5LjM0NyA0OS4zMTkzQzE0OS4yMDEgNDkuMDczMiAxNDkgNDguODc3MyAxNDguNzQ1IDQ4LjczMTRDMTQ4LjQ5NCA0OC41ODExIDE0OC4yMDEgNDguNTA1OSAxNDcuODYzIDQ4LjUwNTlDMTQ3LjQ3NiA0OC41MDU5IDE0Ny4xNSA0OC41ODMzIDE0Ni44ODYgNDguNzM4M0MxNDYuNjI2IDQ4Ljg4ODcgMTQ2LjQxOSA0OS4wOTM4IDE0Ni4yNjQgNDkuMzUzNUMxNDYuMTEzIDQ5LjYwODcgMTQ2LjAwNCA0OS44OTM2IDE0NS45MzYgNTAuMjA4QzE0NS44NzIgNTAuNTE3OSAxNDUuODQgNTAuODM0NiAxNDUuODQgNTEuMTU4MlY1MS40NDUzQzE0NS44NCA1MS43Njg5IDE0NS44NzIgNTIuMDg3OSAxNDUuOTM2IDUyLjQwMjNDMTQ1Ljk5OSA1Mi43MTY4IDE0Ni4xMDYgNTMuMDAxNiAxNDYuMjU3IDUzLjI1NjhDMTQ2LjQxMiA1My41MTIgMTQ2LjYxOSA1My43MTcxIDE0Ni44NzkgNTMuODcyMUMxNDcuMTQzIDU0LjAyMjUgMTQ3LjQ3MSA1NC4wOTc3IDE0Ny44NjMgNTQuMDk3N1pNMTUxLjg5NiA1MS4zODM4VjUxLjIyNjZDMTUxLjg5NiA1MC42OTM0IDE1MS45NzQgNTAuMTk4OSAxNTIuMTI5IDQ5Ljc0MzJDMTUyLjI4NCA0OS4yODI5IDE1Mi41MDcgNDguODg0MSAxNTIuNzk5IDQ4LjU0NjlDMTUzLjA5IDQ4LjIwNTEgMTUzLjQ0NCA0Ny45NDA4IDE1My44NTggNDcuNzUzOUMxNTQuMjczIDQ3LjU2MjUgMTU0LjczOCA0Ny40NjY4IDE1NS4yNTMgNDcuNDY2OEMxNTUuNzcyIDQ3LjQ2NjggMTU2LjI0IDQ3LjU2MjUgMTU2LjY1NCA0Ny43NTM5QzE1Ny4wNzQgNDcuOTQwOCAxNTcuNDI5IDQ4LjIwNTEgMTU3LjcyMSA0OC41NDY5QzE1OC4wMTcgNDguODg0MSAxNTguMjQzIDQ5LjI4MjkgMTU4LjM5NyA0OS43NDMyQzE1OC41NTIgNTAuMTk4OSAxNTguNjMgNTAuNjkzNCAxNTguNjMgNTEuMjI2NlY1MS4zODM4QzE1OC42MyA1MS45MTcgMTU4LjU1MiA1Mi40MTE1IDE1OC4zOTcgNTIuODY3MkMxNTguMjQzIDUzLjMyMjkgMTU4LjAxNyA1My43MjE3IDE1Ny43MjEgNTQuMDYzNUMxNTcuNDI5IDU0LjQwMDcgMTU3LjA3NiA1NC42NjUgMTU2LjY2MSA1NC44NTY0QzE1Ni4yNTEgNTUuMDQzMyAxNTUuNzg2IDU1LjEzNjcgMTU1LjI2NyA1NS4xMzY3QzE1NC43NDcgNTUuMTM2NyAxNTQuMjggNTUuMDQzMyAxNTMuODY1IDU0Ljg1NjRDMTUzLjQ1MSA1NC42NjUgMTUzLjA5NSA1NC40MDA3IDE1Mi43OTkgNTQuMDYzNUMxNTIuNTA3IDUzLjcyMTcgMTUyLjI4NCA1My4zMjI5IDE1Mi4xMjkgNTIuODY3MkMxNTEuOTc0IDUyLjQxMTUgMTUxLjg5NiA1MS45MTcgMTUxLjg5NiA1MS4zODM4Wk0xNTMuMTYxIDUxLjIyNjZWNTEuMzgzOEMxNTMuMTYxIDUxLjc1MjkgMTUzLjIwNCA1Mi4xMDE2IDE1My4yOTEgNTIuNDI5N0MxNTMuMzc4IDUyLjc1MzMgMTUzLjUwNyA1My4wNDA0IDE1My42ODEgNTMuMjkxQzE1My44NTggNTMuNTQxNyAxNTQuMDc5IDUzLjczOTkgMTU0LjM0NCA1My44ODU3QzE1NC42MDggNTQuMDI3IDE1NC45MTYgNTQuMDk3NyAxNTUuMjY3IDU0LjA5NzdDMTU1LjYxMyA1NC4wOTc3IDE1NS45MTYgNTQuMDI3IDE1Ni4xNzYgNTMuODg1N0MxNTYuNDQgNTMuNzM5OSAxNTYuNjU5IDUzLjU0MTcgMTU2LjgzMiA1My4yOTFDMTU3LjAwNSA1My4wNDA0IDE1Ny4xMzUgNTIuNzUzMyAxNTcuMjIyIDUyLjQyOTdDMTU3LjMxMyA1Mi4xMDE2IDE1Ny4zNTggNTEuNzUyOSAxNTcuMzU4IDUxLjM4MzhWNTEuMjI2NkMxNTcuMzU4IDUwLjg2MiAxNTcuMzEzIDUwLjUxNzkgMTU3LjIyMiA1MC4xOTQzQzE1Ny4xMzUgNDkuODY2MiAxNTcuMDAzIDQ5LjU3NjggMTU2LjgyNSA0OS4zMjYyQzE1Ni42NTIgNDkuMDcxIDE1Ni40MzMgNDguODcwNCAxNTYuMTY5IDQ4LjcyNDZDMTU1LjkwOSA0OC41Nzg4IDE1NS42MDQgNDguNTA1OSAxNTUuMjUzIDQ4LjUwNTlDMTU0LjkwNyA0OC41MDU5IDE1NC42MDEgNDguNTc4OCAxNTQuMzM3IDQ4LjcyNDZDMTU0LjA3NyA0OC44NzA0IDE1My44NTggNDkuMDcxIDE1My42ODEgNDkuMzI2MkMxNTMuNTA3IDQ5LjU3NjggMTUzLjM3OCA0OS44NjYyIDE1My4yOTEgNTAuMTk0M0MxNTMuMjA0IDUwLjUxNzkgMTUzLjE2MSA1MC44NjIgMTUzLjE2MSA1MS4yMjY2Wk0xNjEuNDc0IDQ5LjA3MzJWNTVIMTYwLjIwMlY0Ny42MDM1SDE2MS40MDVMMTYxLjQ3NCA0OS4wNzMyWk0xNjEuMjE0IDUxLjAyMTVMMTYwLjYyNiA1MS4wMDFDMTYwLjYzMSA1MC40OTUxIDE2MC42OTcgNTAuMDI4IDE2MC44MjQgNDkuNTk5NkMxNjAuOTUyIDQ5LjE2NjcgMTYxLjE0MSA0OC43OTA3IDE2MS4zOTIgNDguNDcxN0MxNjEuNjQyIDQ4LjE1MjcgMTYxLjk1NCA0Ny45MDY2IDE2Mi4zMjggNDcuNzMzNEMxNjIuNzAyIDQ3LjU1NTcgMTYzLjEzNSA0Ny40NjY4IDE2My42MjcgNDcuNDY2OEMxNjMuOTczIDQ3LjQ2NjggMTY0LjI5MiA0Ny41MTY5IDE2NC41ODQgNDcuNjE3MkMxNjQuODc2IDQ3LjcxMjkgMTY1LjEyOSA0Ny44NjU2IDE2NS4zNDMgNDguMDc1MkMxNjUuNTU3IDQ4LjI4NDggMTY1LjcyMyA0OC41NTM3IDE2NS44NDIgNDguODgxOEMxNjUuOTYgNDkuMjEgMTY2LjAyIDQ5LjYwNjQgMTY2LjAyIDUwLjA3MTNWNTVIMTY0Ljc1NVY1MC4xMzI4QzE2NC43NTUgNDkuNzQ1NCAxNjQuNjg5IDQ5LjQzNTUgMTY0LjU1NyA0OS4yMDMxQzE2NC40MjkgNDguOTcwNyAxNjQuMjQ3IDQ4LjgwMjEgMTY0LjAxIDQ4LjY5NzNDMTYzLjc3MyA0OC41ODc5IDE2My40OTUgNDguNTMzMiAxNjMuMTc2IDQ4LjUzMzJDMTYyLjgwMiA0OC41MzMyIDE2Mi40OSA0OC41OTkzIDE2Mi4yMzkgNDguNzMxNEMxNjEuOTg5IDQ4Ljg2MzYgMTYxLjc4OCA0OS4wNDU5IDE2MS42MzggNDkuMjc4M0MxNjEuNDg3IDQ5LjUxMDcgMTYxLjM3OCA0OS43NzczIDE2MS4zMSA1MC4wNzgxQzE2MS4yNDYgNTAuMzc0MyAxNjEuMjE0IDUwLjY4ODggMTYxLjIxNCA1MS4wMjE1Wk0xNjYuMDA2IDUwLjMyNDJMMTY1LjE1OCA1MC41ODRDMTY1LjE2MyA1MC4xNzg0IDE2NS4yMjkgNDkuNzg4NyAxNjUuMzU2IDQ5LjQxNUMxNjUuNDg5IDQ5LjA0MTMgMTY1LjY3OCA0OC43MDg3IDE2NS45MjQgNDguNDE3QzE2Ni4xNzQgNDguMTI1MyAxNjYuNDgyIDQ3Ljg5NTIgMTY2Ljg0NyA0Ny43MjY2QzE2Ny4yMTEgNDcuNTUzNCAxNjcuNjI4IDQ3LjQ2NjggMTY4LjA5OCA0Ny40NjY4QzE2OC40OTQgNDcuNDY2OCAxNjguODQ1IDQ3LjUxOTIgMTY5LjE1IDQ3LjYyNEMxNjkuNDYgNDcuNzI4OCAxNjkuNzIgNDcuODkwNiAxNjkuOTMgNDguMTA5NEMxNzAuMTQ0IDQ4LjMyMzYgMTcwLjMwNiA0OC41OTkzIDE3MC40MTUgNDguOTM2NUMxNzAuNTI0IDQ5LjI3MzggMTcwLjU3OSA0OS42NzQ4IDE3MC41NzkgNTAuMTM5NlY1NUgxNjkuMzA4VjUwLjEyNkMxNjkuMzA4IDQ5LjcxMTMgMTY5LjI0MiA0OS4zOSAxNjkuMTA5IDQ5LjE2MjFDMTY4Ljk4MiA0OC45Mjk3IDE2OC43OTkgNDguNzY3OSAxNjguNTYyIDQ4LjY3NjhDMTY4LjMzIDQ4LjU4MTEgMTY4LjA1MiA0OC41MzMyIDE2Ny43MjkgNDguNTMzMkMxNjcuNDUxIDQ4LjUzMzIgMTY3LjIwNCA0OC41ODExIDE2Ni45OSA0OC42NzY4QzE2Ni43NzYgNDguNzcyNSAxNjYuNTk2IDQ4LjkwNDYgMTY2LjQ1IDQ5LjA3MzJDMTY2LjMwNCA0OS4yMzczIDE2Ni4xOTMgNDkuNDI2NCAxNjYuMTE1IDQ5LjY0MDZDMTY2LjA0MiA0OS44NTQ4IDE2Ni4wMDYgNTAuMDgyNyAxNjYuMDA2IDUwLjMyNDJaTTE3My43NTEgNDkuMDczMlY1NUgxNzIuNDc5VjQ3LjYwMzVIMTczLjY4M0wxNzMuNzUxIDQ5LjA3MzJaTTE3My40OTEgNTEuMDIxNUwxNzIuOTAzIDUxLjAwMUMxNzIuOTA4IDUwLjQ5NTEgMTcyLjk3NCA1MC4wMjggMTczLjEwMiA0OS41OTk2QzE3My4yMjkgNDkuMTY2NyAxNzMuNDE4IDQ4Ljc5MDcgMTczLjY2OSA0OC40NzE3QzE3My45MiA0OC4xNTI3IDE3NC4yMzIgNDcuOTA2NiAxNzQuNjA1IDQ3LjczMzRDMTc0Ljk3OSA0Ny41NTU3IDE3NS40MTIgNDcuNDY2OCAxNzUuOTA0IDQ3LjQ2NjhDMTc2LjI1MSA0Ny40NjY4IDE3Ni41NyA0Ny41MTY5IDE3Ni44NjEgNDcuNjE3MkMxNzcuMTUzIDQ3LjcxMjkgMTc3LjQwNiA0Ny44NjU2IDE3Ny42MiA0OC4wNzUyQzE3Ny44MzQgNDguMjg0OCAxNzguMDAxIDQ4LjU1MzcgMTc4LjExOSA0OC44ODE4QzE3OC4yMzggNDkuMjEgMTc4LjI5NyA0OS42MDY0IDE3OC4yOTcgNTAuMDcxM1Y1NUgxNzcuMDMyVjUwLjEzMjhDMTc3LjAzMiA0OS43NDU0IDE3Ni45NjYgNDkuNDM1NSAxNzYuODM0IDQ5LjIwMzFDMTc2LjcwNiA0OC45NzA3IDE3Ni41MjQgNDguODAyMSAxNzYuMjg3IDQ4LjY5NzNDMTc2LjA1IDQ4LjU4NzkgMTc1Ljc3MiA0OC41MzMyIDE3NS40NTMgNDguNTMzMkMxNzUuMDc5IDQ4LjUzMzIgMTc0Ljc2NyA0OC41OTkzIDE3NC41MTcgNDguNzMxNEMxNzQuMjY2IDQ4Ljg2MzYgMTc0LjA2NSA0OS4wNDU5IDE3My45MTUgNDkuMjc4M0MxNzMuNzY1IDQ5LjUxMDcgMTczLjY1NSA0OS43NzczIDE3My41ODcgNTAuMDc4MUMxNzMuNTIzIDUwLjM3NDMgMTczLjQ5MSA1MC42ODg4IDE3My40OTEgNTEuMDIxNVpNMTc4LjI4MyA1MC4zMjQyTDE3Ny40MzYgNTAuNTg0QzE3Ny40NCA1MC4xNzg0IDE3Ny41MDYgNDkuNzg4NyAxNzcuNjM0IDQ5LjQxNUMxNzcuNzY2IDQ5LjA0MTMgMTc3Ljk1NSA0OC43MDg3IDE3OC4yMDEgNDguNDE3QzE3OC40NTIgNDguMTI1MyAxNzguNzU5IDQ3Ljg5NTIgMTc5LjEyNCA0Ny43MjY2QzE3OS40ODkgNDcuNTUzNCAxNzkuOTA2IDQ3LjQ2NjggMTgwLjM3NSA0Ny40NjY4QzE4MC43NzEgNDcuNDY2OCAxODEuMTIyIDQ3LjUxOTIgMTgxLjQyOCA0Ny42MjRDMTgxLjczOCA0Ny43Mjg4IDE4MS45OTcgNDcuODkwNiAxODIuMjA3IDQ4LjEwOTRDMTgyLjQyMSA0OC4zMjM2IDE4Mi41ODMgNDguNTk5MyAxODIuNjkyIDQ4LjkzNjVDMTgyLjgwMiA0OS4yNzM4IDE4Mi44NTYgNDkuNjc0OCAxODIuODU2IDUwLjEzOTZWNTVIMTgxLjU4NVY1MC4xMjZDMTgxLjU4NSA0OS43MTEzIDE4MS41MTkgNDkuMzkgMTgxLjM4NyA0OS4xNjIxQzE4MS4yNTkgNDguOTI5NyAxODEuMDc3IDQ4Ljc2NzkgMTgwLjg0IDQ4LjY3NjhDMTgwLjYwNyA0OC41ODExIDE4MC4zMjkgNDguNTMzMiAxODAuMDA2IDQ4LjUzMzJDMTc5LjcyOCA0OC41MzMyIDE3OS40ODIgNDguNTgxMSAxNzkuMjY4IDQ4LjY3NjhDMTc5LjA1MyA0OC43NzI1IDE3OC44NzMgNDguOTA0NiAxNzguNzI4IDQ5LjA3MzJDMTc4LjU4MiA0OS4yMzczIDE3OC40NyA0OS40MjY0IDE3OC4zOTMgNDkuNjQwNkMxNzguMzIgNDkuODU0OCAxNzguMjgzIDUwLjA4MjcgMTc4LjI4MyA1MC4zMjQyWk0xODkuMjk2IDUzLjI5MVY0Ny42MDM1SDE5MC41NjdWNTVIMTg5LjM1N0wxODkuMjk2IDUzLjI5MVpNMTg5LjUzNSA1MS43MzI0TDE5MC4wNjIgNTEuNzE4OEMxOTAuMDYyIDUyLjIxMDkgMTkwLjAwOSA1Mi42NjY3IDE4OS45MDQgNTMuMDg1OUMxODkuODA0IDUzLjUwMDcgMTg5LjY0IDUzLjg2MDcgMTg5LjQxMiA1NC4xNjZDMTg5LjE4NCA1NC40NzE0IDE4OC44ODYgNTQuNzEwNiAxODguNTE3IDU0Ljg4MzhDMTg4LjE0NyA1NS4wNTI0IDE4Ny42OTkgNTUuMTM2NyAxODcuMTcgNTUuMTM2N0MxODYuODEgNTUuMTM2NyAxODYuNDc5IDU1LjA4NDMgMTg2LjE3OSA1NC45Nzk1QzE4NS44ODIgNTQuODc0NyAxODUuNjI3IDU0LjcxMjkgMTg1LjQxMyA1NC40OTQxQzE4NS4xOTkgNTQuMjc1NCAxODUuMDMzIDUzLjk5MDYgMTg0LjkxNCA1My42Mzk2QzE4NC44IDUzLjI4ODcgMTg0Ljc0MyA1Mi44NjcyIDE4NC43NDMgNTIuMzc1VjQ3LjYwMzVIMTg2LjAwOFY1Mi4zODg3QzE4Ni4wMDggNTIuNzIxNCAxODYuMDQ0IDUyLjk5NzEgMTg2LjExNyA1My4yMTU4QzE4Ni4xOTUgNTMuNDMgMTg2LjI5NyA1My42MDA5IDE4Ni40MjUgNTMuNzI4NUMxODYuNTU3IDUzLjg1MTYgMTg2LjcwMyA1My45MzgyIDE4Ni44NjIgNTMuOTg4M0MxODcuMDI2IDU0LjAzODQgMTg3LjE5NSA1NC4wNjM1IDE4Ny4zNjggNTQuMDYzNUMxODcuOTA2IDU0LjA2MzUgMTg4LjMzMiA1My45NjA5IDE4OC42NDYgNTMuNzU1OUMxODguOTYxIDUzLjU0NjIgMTg5LjE4NyA1My4yNjYgMTg5LjMyMyA1Mi45MTVDMTg5LjQ2NSA1Mi41NTk2IDE4OS41MzUgNTIuMTY1NCAxODkuNTM1IDUxLjczMjRaTTE5My43NiA0OS4xODI2VjU1SDE5Mi40OTVWNDcuNjAzNUgxOTMuNjkxTDE5My43NiA0OS4xODI2Wk0xOTMuNDU5IDUxLjAyMTVMMTkyLjkzMyA1MS4wMDFDMTkyLjkzNyA1MC40OTUxIDE5My4wMTIgNTAuMDI4IDE5My4xNTggNDkuNTk5NkMxOTMuMzA0IDQ5LjE2NjcgMTkzLjUwOSA0OC43OTA3IDE5My43NzMgNDguNDcxN0MxOTQuMDM4IDQ4LjE1MjcgMTk0LjM1MiA0Ny45MDY2IDE5NC43MTcgNDcuNzMzNEMxOTUuMDg2IDQ3LjU1NTcgMTk1LjQ5NCA0Ny40NjY4IDE5NS45NCA0Ny40NjY4QzE5Ni4zMDUgNDcuNDY2OCAxOTYuNjMzIDQ3LjUxNjkgMTk2LjkyNSA0Ny42MTcyQzE5Ny4yMTYgNDcuNzEyOSAxOTcuNDY1IDQ3Ljg2NzggMTk3LjY3IDQ4LjA4MkMxOTcuODggNDguMjk2MiAxOTguMDM5IDQ4LjU3NDIgMTk4LjE0OCA0OC45MTZDMTk4LjI1OCA0OS4yNTMzIDE5OC4zMTIgNDkuNjY1NyAxOTguMzEyIDUwLjE1MzNWNTVIMTk3LjA0MVY1MC4xMzk2QzE5Ny4wNDEgNDkuNzUyMyAxOTYuOTg0IDQ5LjQ0MjQgMTk2Ljg3IDQ5LjIxQzE5Ni43NTYgNDguOTczIDE5Ni41OSA0OC44MDIxIDE5Ni4zNzEgNDguNjk3M0MxOTYuMTUyIDQ4LjU4NzkgMTk1Ljg4MyA0OC41MzMyIDE5NS41NjQgNDguNTMzMkMxOTUuMjUgNDguNTMzMiAxOTQuOTYzIDQ4LjU5OTMgMTk0LjcwMyA0OC43MzE0QzE5NC40NDggNDguODYzNiAxOTQuMjI3IDQ5LjA0NTkgMTk0LjA0IDQ5LjI3ODNDMTkzLjg1OCA0OS41MTA3IDE5My43MTQgNDkuNzc3MyAxOTMuNjA5IDUwLjA3ODFDMTkzLjUwOSA1MC4zNzQzIDE5My40NTkgNTAuNjg4OCAxOTMuNDU5IDUxLjAyMTVaTTIwMS42MDcgNDcuNjAzNVY1NUgyMDAuMzM2VjQ3LjYwMzVIMjAxLjYwN1pNMjAwLjI0IDQ1LjY0MTZDMjAwLjI0IDQ1LjQzNjUgMjAwLjMwMiA0NS4yNjMzIDIwMC40MjUgNDUuMTIyMUMyMDAuNTUyIDQ0Ljk4MDggMjAwLjczOSA0NC45MTAyIDIwMC45ODUgNDQuOTEwMkMyMDEuMjI3IDQ0LjkxMDIgMjAxLjQxMSA0NC45ODA4IDIwMS41MzkgNDUuMTIyMUMyMDEuNjcxIDQ1LjI2MzMgMjAxLjczNyA0NS40MzY1IDIwMS43MzcgNDUuNjQxNkMyMDEuNzM3IDQ1LjgzNzYgMjAxLjY3MSA0Ni4wMDYyIDIwMS41MzkgNDYuMTQ3NUMyMDEuNDExIDQ2LjI4NDIgMjAxLjIyNyA0Ni4zNTI1IDIwMC45ODUgNDYuMzUyNUMyMDAuNzM5IDQ2LjM1MjUgMjAwLjU1MiA0Ni4yODQyIDIwMC40MjUgNDYuMTQ3NUMyMDAuMzAyIDQ2LjAwNjIgMjAwLjI0IDQ1LjgzNzYgMjAwLjI0IDQ1LjY0MTZaTTIwNi41OTggNTQuMDk3N0MyMDYuODk4IDU0LjA5NzcgMjA3LjE3NiA1NC4wMzYxIDIwNy40MzIgNTMuOTEzMUMyMDcuNjg3IDUzLjc5IDIwNy44OTYgNTMuNjIxNCAyMDguMDYxIDUzLjQwNzJDMjA4LjIyNSA1My4xODg1IDIwOC4zMTggNTIuOTQwMSAyMDguMzQxIDUyLjY2MjFIMjA5LjU0NEMyMDkuNTIxIDUzLjA5OTYgMjA5LjM3MyA1My41MDc1IDIwOS4xIDUzLjg4NTdDMjA4LjgzMSA1NC4yNTk0IDIwOC40NzggNTQuNTYyNSAyMDguMDQgNTQuNzk0OUMyMDcuNjAzIDU1LjAyMjggMjA3LjEyMiA1NS4xMzY3IDIwNi41OTggNTUuMTM2N0MyMDYuMDQyIDU1LjEzNjcgMjA1LjU1NiA1NS4wMzg3IDIwNS4xNDIgNTQuODQyOEMyMDQuNzMxIDU0LjY0NjggMjA0LjM5IDU0LjM3NzkgMjA0LjExNiA1NC4wMzYxQzIwMy44NDcgNTMuNjk0MyAyMDMuNjQ1IDUzLjMwMjQgMjAzLjUwOCA1Mi44NjA0QzIwMy4zNzYgNTIuNDEzNyAyMDMuMzEgNTEuOTQyMSAyMDMuMzEgNTEuNDQ1M1Y1MS4xNTgyQzIwMy4zMSA1MC42NjE1IDIwMy4zNzYgNTAuMTkyMSAyMDMuNTA4IDQ5Ljc1QzIwMy42NDUgNDkuMzAzNCAyMDMuODQ3IDQ4LjkwOTIgMjA0LjExNiA0OC41Njc0QzIwNC4zOSA0OC4yMjU2IDIwNC43MzEgNDcuOTU2NyAyMDUuMTQyIDQ3Ljc2MDdDMjA1LjU1NiA0Ny41NjQ4IDIwNi4wNDIgNDcuNDY2OCAyMDYuNTk4IDQ3LjQ2NjhDMjA3LjE3NiA0Ny40NjY4IDIwNy42ODIgNDcuNTg1MyAyMDguMTE1IDQ3LjgyMjNDMjA4LjU0OCA0OC4wNTQ3IDIwOC44ODggNDguMzczNyAyMDkuMTM0IDQ4Ljc3OTNDMjA5LjM4NCA0OS4xODAzIDIwOS41MjEgNDkuNjM2MSAyMDkuNTQ0IDUwLjE0NjVIMjA4LjM0MUMyMDguMzE4IDQ5Ljg0MTEgMjA4LjIzMSA0OS41NjU0IDIwOC4wODEgNDkuMzE5M0MyMDcuOTM1IDQ5LjA3MzIgMjA3LjczNSA0OC44NzczIDIwNy40NzkgNDguNzMxNEMyMDcuMjI5IDQ4LjU4MTEgMjA2LjkzNSA0OC41MDU5IDIwNi41OTggNDguNTA1OUMyMDYuMjEgNDguNTA1OSAyMDUuODg0IDQ4LjU4MzMgMjA1LjYyIDQ4LjczODNDMjA1LjM2IDQ4Ljg4ODcgMjA1LjE1MyA0OS4wOTM4IDIwNC45OTggNDkuMzUzNUMyMDQuODQ4IDQ5LjYwODcgMjA0LjczOCA0OS44OTM2IDIwNC42NyA1MC4yMDhDMjA0LjYwNiA1MC41MTc5IDIwNC41NzQgNTAuODM0NiAyMDQuNTc0IDUxLjE1ODJWNTEuNDQ1M0MyMDQuNTc0IDUxLjc2ODkgMjA0LjYwNiA1Mi4wODc5IDIwNC42NyA1Mi40MDIzQzIwNC43MzQgNTIuNzE2OCAyMDQuODQxIDUzLjAwMTYgMjA0Ljk5MSA1My4yNTY4QzIwNS4xNDYgNTMuNTEyIDIwNS4zNTQgNTMuNzE3MSAyMDUuNjEzIDUzLjg3MjFDMjA1Ljg3OCA1NC4wMjI1IDIwNi4yMDYgNTQuMDk3NyAyMDYuNTk4IDU0LjA5NzdaTTIxNS4zMjcgNTMuNzM1NFY0OS45Mjc3QzIxNS4zMjcgNDkuNjM2MSAyMTUuMjY4IDQ5LjM4MzEgMjE1LjE0OSA0OS4xNjg5QzIxNS4wMzUgNDguOTUwMiAyMTQuODYyIDQ4Ljc4MTYgMjE0LjYzIDQ4LjY2MzFDMjE0LjM5NyA0OC41NDQ2IDIxNC4xMSA0OC40ODU0IDIxMy43NjkgNDguNDg1NEMyMTMuNDUgNDguNDg1NCAyMTMuMTY5IDQ4LjU0IDIxMi45MjggNDguNjQ5NEMyMTIuNjkxIDQ4Ljc1ODggMjEyLjUwNCA0OC45MDIzIDIxMi4zNjcgNDkuMDgwMUMyMTIuMjM1IDQ5LjI1NzggMjEyLjE2OSA0OS40NDkyIDIxMi4xNjkgNDkuNjU0M0gyMTAuOTA0QzIxMC45MDQgNDkuMzkgMjEwLjk3MyA0OS4xMjc5IDIxMS4xMDkgNDguODY4MkMyMTEuMjQ2IDQ4LjYwODQgMjExLjQ0MiA0OC4zNzM3IDIxMS42OTcgNDguMTY0MUMyMTEuOTU3IDQ3Ljk0OTkgMjEyLjI2NyA0Ny43ODEyIDIxMi42MjcgNDcuNjU4MkMyMTIuOTkyIDQ3LjUzMDYgMjEzLjM5NyA0Ny40NjY4IDIxMy44NDQgNDcuNDY2OEMyMTQuMzgyIDQ3LjQ2NjggMjE0Ljg1NSA0Ny41NTc5IDIxNS4yNjYgNDcuNzQwMkMyMTUuNjggNDcuOTIyNSAyMTYuMDA0IDQ4LjE5ODIgMjE2LjIzNiA0OC41Njc0QzIxNi40NzMgNDguOTMyIDIxNi41OTIgNDkuMzkgMjE2LjU5MiA0OS45NDE0VjUzLjM4NjdDMjE2LjU5MiA1My42MzI4IDIxNi42MTIgNTMuODk0OSAyMTYuNjUzIDU0LjE3MjlDMjE2LjY5OSA1NC40NTA4IDIxNi43NjUgNTQuNjkwMSAyMTYuODUyIDU0Ljg5MDZWNTVIMjE1LjUzMkMyMTUuNDY4IDU0Ljg1NDIgMjE1LjQxOCA1NC42NjA1IDIxNS4zODIgNTQuNDE4OUMyMTUuMzQ1IDU0LjE3MjkgMjE1LjMyNyA1My45NDUgMjE1LjMyNyA1My43MzU0Wk0yMTUuNTQ2IDUwLjUxNTZMMjE1LjU2IDUxLjQwNDNIMjE0LjI4MUMyMTMuOTIxIDUxLjQwNDMgMjEzLjYgNTEuNDMzOSAyMTMuMzE3IDUxLjQ5MzJDMjEzLjAzNSA1MS41NDc5IDIxMi43OTggNTEuNjMyMiAyMTIuNjA2IDUxLjc0NjFDMjEyLjQxNSA1MS44NiAyMTIuMjY5IDUyLjAwMzYgMjEyLjE2OSA1Mi4xNzY4QzIxMi4wNjkgNTIuMzQ1NCAyMTIuMDE5IDUyLjU0MzYgMjEyLjAxOSA1Mi43NzE1QzIxMi4wMTkgNTMuMDAzOSAyMTIuMDcxIDUzLjIxNTggMjEyLjE3NiA1My40MDcyQzIxMi4yODEgNTMuNTk4NiAyMTIuNDM4IDUzLjc1MTMgMjEyLjY0NyA1My44NjUyQzIxMi44NjIgNTMuOTc0NiAyMTMuMTI0IDU0LjAyOTMgMjEzLjQzNCA1NC4wMjkzQzIxMy44MjEgNTQuMDI5MyAyMTQuMTYzIDUzLjk0NzMgMjE0LjQ1OSA1My43ODMyQzIxNC43NTUgNTMuNjE5MSAyMTQuOTkgNTMuNDE4NiAyMTUuMTYzIDUzLjE4MTZDMjE1LjM0MSA1Mi45NDQ3IDIxNS40MzcgNTIuNzE0NSAyMTUuNDUgNTIuNDkxMkwyMTUuOTkgNTMuMDk5NkMyMTUuOTU4IDUzLjI5MSAyMTUuODcyIDUzLjUwMjkgMjE1LjczIDUzLjczNTRDMjE1LjU4OSA1My45Njc4IDIxNS40IDU0LjE5MTEgMjE1LjE2MyA1NC40MDUzQzIxNC45MzEgNTQuNjE0OSAyMTQuNjUzIDU0Ljc5MDQgMjE0LjMyOSA1NC45MzE2QzIxNC4wMSA1NS4wNjg0IDIxMy42NSA1NS4xMzY3IDIxMy4yNDkgNTUuMTM2N0MyMTIuNzQ4IDU1LjEzNjcgMjEyLjMwOCA1NS4wMzg3IDIxMS45MyA1NC44NDI4QzIxMS41NTYgNTQuNjQ2OCAyMTEuMjY0IDU0LjM4NDggMjExLjA1NSA1NC4wNTY2QzIxMC44NSA1My43MjQgMjEwLjc0NyA1My4zNTI1IDIxMC43NDcgNTIuOTQyNEMyMTAuNzQ3IDUyLjU0NTkgMjEwLjgyNSA1Mi4xOTczIDIxMC45NzkgNTEuODk2NUMyMTEuMTM0IDUxLjU5MTEgMjExLjM1OCA1MS4zMzgyIDIxMS42NDkgNTEuMTM3N0MyMTEuOTQxIDUwLjkzMjYgMjEyLjI5MiA1MC43Nzc3IDIxMi43MDIgNTAuNjcyOUMyMTMuMTEyIDUwLjU2OCAyMTMuNTcgNTAuNTE1NiAyMTQuMDc2IDUwLjUxNTZIMjE1LjU0NlpNMjIxLjY3OCA0Ny42MDM1VjQ4LjU3NDJIMjE3LjY3OVY0Ny42MDM1SDIyMS42NzhaTTIxOS4wMzIgNDUuODA1N0gyMjAuMjk3VjUzLjE2OEMyMjAuMjk3IDUzLjQxODYgMjIwLjMzNiA1My42MDc3IDIyMC40MTMgNTMuNzM1NEMyMjAuNDkxIDUzLjg2MyAyMjAuNTkxIDUzLjk0NzMgMjIwLjcxNCA1My45ODgzQzIyMC44MzcgNTQuMDI5MyAyMjAuOTY5IDU0LjA0OTggMjIxLjExIDU0LjA0OThDMjIxLjIxNSA1NC4wNDk4IDIyMS4zMjUgNTQuMDQwNyAyMjEuNDM4IDU0LjAyMjVDMjIxLjU1NyA1My45OTk3IDIyMS42NDYgNTMuOTgxNCAyMjEuNzA1IDUzLjk2NzhMMjIxLjcxMiA1NUMyMjEuNjEyIDU1LjAzMTkgMjIxLjQ3OSA1NS4wNjE1IDIyMS4zMTUgNTUuMDg4OUMyMjEuMTU2IDU1LjEyMDggMjIwLjk2MiA1NS4xMzY3IDIyMC43MzQgNTUuMTM2N0MyMjAuNDI0IDU1LjEzNjcgMjIwLjE0IDU1LjA3NTIgMjE5Ljg4IDU0Ljk1MjFDMjE5LjYyIDU0LjgyOTEgMjE5LjQxMyA1NC42MjQgMjE5LjI1OCA1NC4zMzY5QzIxOS4xMDcgNTQuMDQ1MiAyMTkuMDMyIDUzLjY1MzMgMjE5LjAzMiA1My4xNjExVjQ1LjgwNTdaTTIyNC41MzUgNDcuNjAzNVY1NUgyMjMuMjY0VjQ3LjYwMzVIMjI0LjUzNVpNMjIzLjE2OCA0NS42NDE2QzIyMy4xNjggNDUuNDM2NSAyMjMuMjI5IDQ1LjI2MzMgMjIzLjM1MyA0NS4xMjIxQzIyMy40OCA0NC45ODA4IDIyMy42NjcgNDQuOTEwMiAyMjMuOTEzIDQ0LjkxMDJDMjI0LjE1NSA0NC45MTAyIDIyNC4zMzkgNDQuOTgwOCAyMjQuNDY3IDQ1LjEyMjFDMjI0LjU5OSA0NS4yNjMzIDIyNC42NjUgNDUuNDM2NSAyMjQuNjY1IDQ1LjY0MTZDMjI0LjY2NSA0NS44Mzc2IDIyNC41OTkgNDYuMDA2MiAyMjQuNDY3IDQ2LjE0NzVDMjI0LjMzOSA0Ni4yODQyIDIyNC4xNTUgNDYuMzUyNSAyMjMuOTEzIDQ2LjM1MjVDMjIzLjY2NyA0Ni4zNTI1IDIyMy40OCA0Ni4yODQyIDIyMy4zNTMgNDYuMTQ3NUMyMjMuMjI5IDQ2LjAwNjIgMjIzLjE2OCA0NS44Mzc2IDIyMy4xNjggNDUuNjQxNlpNMjI2LjIzIDUxLjM4MzhWNTEuMjI2NkMyMjYuMjMgNTAuNjkzNCAyMjYuMzA4IDUwLjE5ODkgMjI2LjQ2MyA0OS43NDMyQzIyNi42MTggNDkuMjgyOSAyMjYuODQxIDQ4Ljg4NDEgMjI3LjEzMyA0OC41NDY5QzIyNy40MjQgNDguMjA1MSAyMjcuNzc4IDQ3Ljk0MDggMjI4LjE5MiA0Ny43NTM5QzIyOC42MDcgNDcuNTYyNSAyMjkuMDcyIDQ3LjQ2NjggMjI5LjU4NyA0Ny40NjY4QzIzMC4xMDYgNDcuNDY2OCAyMzAuNTc0IDQ3LjU2MjUgMjMwLjk4OCA0Ny43NTM5QzIzMS40MDggNDcuOTQwOCAyMzEuNzYzIDQ4LjIwNTEgMjMyLjA1NSA0OC41NDY5QzIzMi4zNTEgNDguODg0MSAyMzIuNTc2IDQ5LjI4MjkgMjMyLjczMSA0OS43NDMyQzIzMi44ODYgNTAuMTk4OSAyMzIuOTY0IDUwLjY5MzQgMjMyLjk2NCA1MS4yMjY2VjUxLjM4MzhDMjMyLjk2NCA1MS45MTcgMjMyLjg4NiA1Mi40MTE1IDIzMi43MzEgNTIuODY3MkMyMzIuNTc2IDUzLjMyMjkgMjMyLjM1MSA1My43MjE3IDIzMi4wNTUgNTQuMDYzNUMyMzEuNzYzIDU0LjQwMDcgMjMxLjQxIDU0LjY2NSAyMzAuOTk1IDU0Ljg1NjRDMjMwLjU4NSA1NS4wNDMzIDIzMC4xMiA1NS4xMzY3IDIyOS42MDEgNTUuMTM2N0MyMjkuMDgxIDU1LjEzNjcgMjI4LjYxNCA1NS4wNDMzIDIyOC4xOTkgNTQuODU2NEMyMjcuNzg1IDU0LjY2NSAyMjcuNDI5IDU0LjQwMDcgMjI3LjEzMyA1NC4wNjM1QzIyNi44NDEgNTMuNzIxNyAyMjYuNjE4IDUzLjMyMjkgMjI2LjQ2MyA1Mi44NjcyQzIyNi4zMDggNTIuNDExNSAyMjYuMjMgNTEuOTE3IDIyNi4yMyA1MS4zODM4Wk0yMjcuNDk1IDUxLjIyNjZWNTEuMzgzOEMyMjcuNDk1IDUxLjc1MjkgMjI3LjUzOCA1Mi4xMDE2IDIyNy42MjUgNTIuNDI5N0MyMjcuNzEyIDUyLjc1MzMgMjI3Ljg0MSA1My4wNDA0IDIyOC4wMTUgNTMuMjkxQzIyOC4xOTIgNTMuNTQxNyAyMjguNDEzIDUzLjczOTkgMjI4LjY3OCA1My44ODU3QzIyOC45NDIgNTQuMDI3IDIyOS4yNSA1NC4wOTc3IDIyOS42MDEgNTQuMDk3N0MyMjkuOTQ3IDU0LjA5NzcgMjMwLjI1IDU0LjAyNyAyMzAuNTEgNTMuODg1N0MyMzAuNzc0IDUzLjczOTkgMjMwLjk5MyA1My41NDE3IDIzMS4xNjYgNTMuMjkxQzIzMS4zMzkgNTMuMDQwNCAyMzEuNDY5IDUyLjc1MzMgMjMxLjU1NiA1Mi40Mjk3QzIzMS42NDcgNTIuMTAxNiAyMzEuNjkyIDUxLjc1MjkgMjMxLjY5MiA1MS4zODM4VjUxLjIyNjZDMjMxLjY5MiA1MC44NjIgMjMxLjY0NyA1MC41MTc5IDIzMS41NTYgNTAuMTk0M0MyMzEuNDY5IDQ5Ljg2NjIgMjMxLjMzNyA0OS41NzY4IDIzMS4xNTkgNDkuMzI2MkMyMzAuOTg2IDQ5LjA3MSAyMzAuNzY3IDQ4Ljg3MDQgMjMwLjUwMyA0OC43MjQ2QzIzMC4yNDMgNDguNTc4OCAyMjkuOTM4IDQ4LjUwNTkgMjI5LjU4NyA0OC41MDU5QzIyOS4yNDEgNDguNTA1OSAyMjguOTM1IDQ4LjU3ODggMjI4LjY3MSA0OC43MjQ2QzIyOC40MTEgNDguODcwNCAyMjguMTkyIDQ5LjA3MSAyMjguMDE1IDQ5LjMyNjJDMjI3Ljg0MSA0OS41NzY4IDIyNy43MTIgNDkuODY2MiAyMjcuNjI1IDUwLjE5NDNDMjI3LjUzOCA1MC41MTc5IDIyNy40OTUgNTAuODYyIDIyNy40OTUgNTEuMjI2NlpNMjM1LjgxNCA0OS4xODI2VjU1SDIzNC41NVY0Ny42MDM1SDIzNS43NDZMMjM1LjgxNCA0OS4xODI2Wk0yMzUuNTE0IDUxLjAyMTVMMjM0Ljk4NyA1MS4wMDFDMjM0Ljk5MiA1MC40OTUxIDIzNS4wNjcgNTAuMDI4IDIzNS4yMTMgNDkuNTk5NkMyMzUuMzU5IDQ5LjE2NjcgMjM1LjU2NCA0OC43OTA3IDIzNS44MjggNDguNDcxN0MyMzYuMDkyIDQ4LjE1MjcgMjM2LjQwNyA0Ny45MDY2IDIzNi43NzEgNDcuNzMzNEMyMzcuMTQxIDQ3LjU1NTcgMjM3LjU0OSA0Ny40NjY4IDIzNy45OTUgNDcuNDY2OEMyMzguMzYgNDcuNDY2OCAyMzguNjg4IDQ3LjUxNjkgMjM4Ljk3OSA0Ny42MTcyQzIzOS4yNzEgNDcuNzEyOSAyMzkuNTIgNDcuODY3OCAyMzkuNzI1IDQ4LjA4MkMyMzkuOTM0IDQ4LjI5NjIgMjQwLjA5NCA0OC41NzQyIDI0MC4yMDMgNDguOTE2QzI0MC4zMTIgNDkuMjUzMyAyNDAuMzY3IDQ5LjY2NTcgMjQwLjM2NyA1MC4xNTMzVjU1SDIzOS4wOTZWNTAuMTM5NkMyMzkuMDk2IDQ5Ljc1MjMgMjM5LjAzOSA0OS40NDI0IDIzOC45MjUgNDkuMjFDMjM4LjgxMSA0OC45NzMgMjM4LjY0NSA0OC44MDIxIDIzOC40MjYgNDguNjk3M0MyMzguMjA3IDQ4LjU4NzkgMjM3LjkzOCA0OC41MzMyIDIzNy42MTkgNDguNTMzMkMyMzcuMzA1IDQ4LjUzMzIgMjM3LjAxOCA0OC41OTkzIDIzNi43NTggNDguNzMxNEMyMzYuNTAzIDQ4Ljg2MzYgMjM2LjI4MiA0OS4wNDU5IDIzNi4wOTUgNDkuMjc4M0MyMzUuOTEyIDQ5LjUxMDcgMjM1Ljc2OSA0OS43NzczIDIzNS42NjQgNTAuMDc4MUMyMzUuNTY0IDUwLjM3NDMgMjM1LjUxNCA1MC42ODg4IDIzNS41MTQgNTEuMDIxNVpcIiBmaWxsPVwiIzY0NzQ4QlwiLz5cblx0XHQ8cGF0aCBkPVwiTTI0IDY0QzE5Ljg2IDY0IDE2LjUgNjcuMzYgMTYuNSA3MS41QzE2LjUgNzUuNjQgMTkuODYgNzkgMjQgNzlDMjguMTQgNzkgMzEuNSA3NS42NCAzMS41IDcxLjVDMzEuNSA2Ny4zNiAyOC4xNCA2NCAyNCA2NFpNMjQgNzcuNUMyMC42ODUgNzcuNSAxOCA3NC44MTUgMTggNzEuNUMxOCA2OC4xODUgMjAuNjg1IDY1LjUgMjQgNjUuNUMyNy4zMTUgNjUuNSAzMCA2OC4xODUgMzAgNzEuNUMzMCA3NC44MTUgMjcuMzE1IDc3LjUgMjQgNzcuNVpcIiBmaWxsPVwiIzY0NzQ4QlwiLz5cblx0XHQ8cGF0aCBkPVwiTTQyLjk0NDMgNzUuMDAzNFY3NkgzOC4wNTAzVjc1LjAwMzRINDIuOTQ0M1pNMzguMjk3OSA2Ni43NTc4Vjc2SDM3LjA3MjhWNjYuNzU3OEgzOC4yOTc5Wk00Mi4yOTY5IDcwLjczMTRWNzEuNzI4SDM4LjA1MDNWNzAuNzMxNEg0Mi4yOTY5Wk00Mi44ODA5IDY2Ljc1NzhWNjcuNzYwN0gzOC4wNTAzVjY2Ljc1NzhINDIuODgwOVpNNDYuNzI3NSA3MS41ODg0VjcyLjU1MzJINDMuNjI5OVY3MS41ODg0SDQ2LjcyNzVaTTQ5LjA0NDQgNzAuNDk2NlY3Nkg0Ny44NjM4VjY5LjEzMThINDguOTgxTDQ5LjA0NDQgNzAuNDk2NlpNNDguODAzMiA3Mi4zMDU3TDQ4LjI1NzMgNzIuMjg2NkM0OC4yNjE2IDcxLjgxNjkgNDguMzIyOSA3MS4zODMxIDQ4LjQ0MTQgNzAuOTg1NEM0OC41NTk5IDcwLjU4MzMgNDguNzM1NSA3MC4yMzQyIDQ4Ljk2ODMgNjkuOTM4QzQ5LjIwMSA2OS42NDE4IDQ5LjQ5MDkgNjkuNDEzMiA0OS44Mzc5IDY5LjI1MjRDNTAuMTg0OSA2OS4wODc0IDUwLjU4NjkgNjkuMDA0OSA1MS4wNDM5IDY5LjAwNDlDNTEuMzY1NiA2OS4wMDQ5IDUxLjY2MTggNjkuMDUxNCA1MS45MzI2IDY5LjE0NDVDNTIuMjAzNSA2OS4yMzM0IDUyLjQzODMgNjkuMzc1MiA1Mi42MzcyIDY5LjU2OThDNTIuODM2MSA2OS43NjQ1IDUyLjk5MDYgNzAuMDE0MiA1My4xMDA2IDcwLjMxODhDNTMuMjEwNiA3MC42MjM1IDUzLjI2NTYgNzAuOTkxNyA1My4yNjU2IDcxLjQyMzNWNzZINTIuMDkxM1Y3MS40ODA1QzUyLjA5MTMgNzEuMTIwOCA1Mi4wMjk5IDcwLjgzMyA1MS45MDcyIDcwLjYxNzJDNTEuNzg4NyA3MC40MDE0IDUxLjYxOTUgNzAuMjQ0OCA1MS4zOTk0IDcwLjE0NzVDNTEuMTc5NCA3MC4wNDU5IDUwLjkyMTIgNjkuOTk1MSA1MC42MjUgNjkuOTk1MUM1MC4yNzggNjkuOTk1MSA0OS45ODgxIDcwLjA1NjUgNDkuNzU1NCA3MC4xNzkyQzQ5LjUyMjYgNzAuMzAxOSA0OS4zMzY0IDcwLjQ3MTIgNDkuMTk2OCA3MC42ODdDNDkuMDU3MSA3MC45MDI4IDQ4Ljk1NTYgNzEuMTUwNCA0OC44OTIxIDcxLjQyOTdDNDguODMyOCA3MS43MDQ4IDQ4LjgwMzIgNzEuOTk2NyA0OC44MDMyIDcyLjMwNTdaTTUzLjI1MjkgNzEuNjU4Mkw1Mi40NjU4IDcxLjg5OTRDNTIuNDcwMSA3MS41MjI4IDUyLjUzMTQgNzEuMTYxIDUyLjY0OTkgNzAuODE0QzUyLjc3MjYgNzAuNDY3IDUyLjk0ODIgNzAuMTU4IDUzLjE3NjggNjkuODg3MkM1My40MDk1IDY5LjYxNjQgNTMuNjk1MSA2OS40MDI3IDU0LjAzMzcgNjkuMjQ2MUM1NC4zNzIyIDY5LjA4NTMgNTQuNzU5NCA2OS4wMDQ5IDU1LjE5NTMgNjkuMDA0OUM1NS41NjM1IDY5LjAwNDkgNTUuODg5MyA2OS4wNTM1IDU2LjE3MjkgNjkuMTUwOUM1Ni40NjA2IDY5LjI0ODIgNTYuNzAxOCA2OS4zOTg0IDU2Ljg5NjUgNjkuNjAxNkM1Ny4wOTU0IDY5LjgwMDUgNTcuMjQ1NiA3MC4wNTY1IDU3LjM0NzIgNzAuMzY5NkM1Ny40NDg3IDcwLjY4MjggNTcuNDk5NSA3MS4wNTUyIDU3LjQ5OTUgNzEuNDg2OFY3Nkg1Ni4zMTg4VjcxLjQ3NDFDNTYuMzE4OCA3MS4wODkgNTYuMjU3NSA3MC43OTA3IDU2LjEzNDggNzAuNTc5MUM1Ni4wMTYzIDcwLjM2MzMgNTUuODQ3IDcwLjIxMzEgNTUuNjI3IDcwLjEyODRDNTUuNDExMSA3MC4wMzk2IDU1LjE1MyA2OS45OTUxIDU0Ljg1MjUgNjkuOTk1MUM1NC41OTQ0IDY5Ljk5NTEgNTQuMzY1OSA3MC4wMzk2IDU0LjE2NyA3MC4xMjg0QzUzLjk2ODEgNzAuMjE3MyA1My44MDA5IDcwLjM0IDUzLjY2NTUgNzAuNDk2NkM1My41MzAxIDcwLjY0ODkgNTMuNDI2NCA3MC44MjQ1IDUzLjM1NDUgNzEuMDIzNEM1My4yODY4IDcxLjIyMjMgNTMuMjUyOSA3MS40MzM5IDUzLjI1MjkgNzEuNjU4MlpNNjMuMzI2NyA3NC44MjU3VjcxLjI5QzYzLjMyNjcgNzEuMDE5MiA2My4yNzE2IDcwLjc4NDMgNjMuMTYxNiA3MC41ODU0QzYzLjA1NTggNzAuMzgyMyA2Mi44OTUgNzAuMjI1NyA2Mi42NzkyIDcwLjExNTdDNjIuNDYzNCA3MC4wMDU3IDYyLjE5NjggNjkuOTUwNyA2MS44Nzk0IDY5Ljk1MDdDNjEuNTgzMiA2OS45NTA3IDYxLjMyMjkgNzAuMDAxNSA2MS4wOTg2IDcwLjEwM0M2MC44Nzg2IDcwLjIwNDYgNjAuNzA1MSA3MC4zMzc5IDYwLjU3ODEgNzAuNTAyOUM2MC40NTU0IDcwLjY2OCA2MC4zOTQgNzAuODQ1NyA2MC4zOTQgNzEuMDM2MUg1OS4yMTk3QzU5LjIxOTcgNzAuNzkwNyA1OS4yODMyIDcwLjU0NzQgNTkuNDEwMiA3MC4zMDYyQzU5LjUzNzEgNzAuMDY0OSA1OS43MTkxIDY5Ljg0NyA1OS45NTYxIDY5LjY1MjNDNjAuMTk3MyA2OS40NTM1IDYwLjQ4NSA2OS4yOTY5IDYwLjgxOTMgNjkuMTgyNkM2MS4xNTc5IDY5LjA2NDEgNjEuNTM0NSA2OS4wMDQ5IDYxLjk0OTIgNjkuMDA0OUM2Mi40NDg2IDY5LjAwNDkgNjIuODg4NyA2OS4wODk1IDYzLjI2OTUgNjkuMjU4OEM2My42NTQ2IDY5LjQyODEgNjMuOTU1MSA2OS42ODQxIDY0LjE3MDkgNzAuMDI2OUM2NC4zOTEgNzAuMzY1NCA2NC41MDEgNzAuNzkwNyA2NC41MDEgNzEuMzAyN1Y3NC41MDJDNjQuNTAxIDc0LjczMDUgNjQuNTIgNzQuOTczOCA2NC41NTgxIDc1LjIzMTlDNjQuNjAwNCA3NS40OTAxIDY0LjY2MTggNzUuNzEyMiA2NC43NDIyIDc1Ljg5ODRWNzZINjMuNTE3MUM2My40NTc4IDc1Ljg2NDYgNjMuNDExMyA3NS42ODQ3IDYzLjM3NzQgNzUuNDYwNEM2My4zNDM2IDc1LjIzMTkgNjMuMzI2NyA3NS4wMjAzIDYzLjMyNjcgNzQuODI1N1pNNjMuNTI5OCA3MS44MzU5TDYzLjU0MjUgNzIuNjYxMUg2Mi4zNTU1QzYyLjAyMTIgNzIuNjYxMSA2MS43MjI4IDcyLjY4ODYgNjEuNDYwNCA3Mi43NDM3QzYxLjE5ODEgNzIuNzk0NCA2MC45NzggNzIuODcyNyA2MC44MDAzIDcyLjk3ODVDNjAuNjIyNiA3My4wODQzIDYwLjQ4NzEgNzMuMjE3NiA2MC4zOTQgNzMuMzc4NEM2MC4zMDA5IDczLjUzNSA2MC4yNTQ0IDczLjcxOTEgNjAuMjU0NCA3My45MzA3QzYwLjI1NDQgNzQuMTQ2NSA2MC4zMDMxIDc0LjM0MzMgNjAuNDAwNCA3NC41MjFDNjAuNDk3NyA3NC42OTg3IDYwLjY0MzcgNzQuODQwNSA2MC44Mzg0IDc0Ljk0NjNDNjEuMDM3MyA3NS4wNDc5IDYxLjI4MDYgNzUuMDk4NiA2MS41Njg0IDc1LjA5ODZDNjEuOTI4MSA3NS4wOTg2IDYyLjI0NTQgNzUuMDIyNSA2Mi41MjA1IDc0Ljg3MDFDNjIuNzk1NiA3NC43MTc4IDYzLjAxMzUgNzQuNTMxNiA2My4xNzQzIDc0LjMxMTVDNjMuMzM5NCA3NC4wOTE1IDYzLjQyODIgNzMuODc3OCA2My40NDA5IDczLjY3MDRMNjMuOTQyNCA3NC4yMzU0QzYzLjkxMjggNzQuNDEzMSA2My44MzI0IDc0LjYwOTkgNjMuNzAxMiA3NC44MjU3QzYzLjU3IDc1LjA0MTUgNjMuMzk0NCA3NS4yNDg5IDYzLjE3NDMgNzUuNDQ3OEM2Mi45NTg1IDc1LjY0MjQgNjIuNzAwNCA3NS44MDUzIDYyLjM5OTkgNzUuOTM2NUM2Mi4xMDM3IDc2LjA2MzUgNjEuNzY5NCA3Ni4xMjcgNjEuMzk3IDc2LjEyN0M2MC45MzE1IDc2LjEyNyA2MC41MjMxIDc2LjAzNiA2MC4xNzE5IDc1Ljg1NEM1OS44MjQ5IDc1LjY3MiA1OS41NTQgNzUuNDI4NyA1OS4zNTk0IDc1LjEyNEM1OS4xNjg5IDc0LjgxNTEgNTkuMDczNyA3NC40NzAyIDU5LjA3MzcgNzQuMDg5NEM1OS4wNzM3IDczLjcyMTIgNTkuMTQ1NyA3My4zOTc1IDU5LjI4OTYgNzMuMTE4MkM1OS40MzM0IDcyLjgzNDYgNTkuNjQwOCA3Mi41OTk4IDU5LjkxMTYgNzIuNDEzNkM2MC4xODI1IDcyLjIyMzEgNjAuNTA4MyA3Mi4wNzkzIDYwLjg4OTIgNzEuOTgxOUM2MS4yNyA3MS44ODQ2IDYxLjY5NTMgNzEuODM1OSA2Mi4xNjUgNzEuODM1OUg2My41Mjk4Wk02Ny42MjQgNjkuMTMxOFY3Nkg2Ni40NDM0VjY5LjEzMThINjcuNjI0Wk02Ni4zNTQ1IDY3LjMxMDFDNjYuMzU0NSA2Ny4xMTk2IDY2LjQxMTYgNjYuOTU4OCA2Ni41MjU5IDY2LjgyNzZDNjYuNjQ0NCA2Ni42OTY1IDY2LjgxNzkgNjYuNjMwOSA2Ny4wNDY0IDY2LjYzMDlDNjcuMjcwNyA2Ni42MzA5IDY3LjQ0MjEgNjYuNjk2NSA2Ny41NjA1IDY2LjgyNzZDNjcuNjgzMyA2Ni45NTg4IDY3Ljc0NDYgNjcuMTE5NiA2Ny43NDQ2IDY3LjMxMDFDNjcuNzQ0NiA2Ny40OTIgNjcuNjgzMyA2Ny42NDg2IDY3LjU2MDUgNjcuNzc5OEM2Ny40NDIxIDY3LjkwNjcgNjcuMjcwNyA2Ny45NzAyIDY3LjA0NjQgNjcuOTcwMkM2Ni44MTc5IDY3Ljk3MDIgNjYuNjQ0NCA2Ny45MDY3IDY2LjUyNTkgNjcuNzc5OEM2Ni40MTE2IDY3LjY0ODYgNjYuMzU0NSA2Ny40OTIgNjYuMzU0NSA2Ny4zMTAxWk03MC43ODUyIDY2LjI1Vjc2SDY5LjYwNDVWNjYuMjVINzAuNzg1MlpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8cGF0aCBkPVwiTTI0IDg5Ljc1QzIxLjkzIDg5Ljc1IDIwLjI1IDkxLjQzIDIwLjI1IDkzLjVDMjAuMjUgOTUuNTcgMjEuOTMgOTcuMjUgMjQgOTcuMjVDMjYuMDcgOTcuMjUgMjcuNzUgOTUuNTcgMjcuNzUgOTMuNUMyNy43NSA5MS40MyAyNi4wNyA4OS43NSAyNCA4OS43NVpNMjQgODZDMTkuODYgODYgMTYuNSA4OS4zNiAxNi41IDkzLjVDMTYuNSA5Ny42NCAxOS44NiAxMDEgMjQgMTAxQzI4LjE0IDEwMSAzMS41IDk3LjY0IDMxLjUgOTMuNUMzMS41IDg5LjM2IDI4LjE0IDg2IDI0IDg2Wk0yNCA5OS41QzIwLjY4NSA5OS41IDE4IDk2LjgxNSAxOCA5My41QzE4IDkwLjE4NSAyMC42ODUgODcuNSAyNCA4Ny41QzI3LjMxNSA4Ny41IDMwIDkwLjE4NSAzMCA5My41QzMwIDk2LjgxNSAyNy4zMTUgOTkuNSAyNCA5OS41WlwiIGZpbGw9XCIjNDI3MkY5XCIvPlxuXHRcdDxwYXRoIGQ9XCJNNDAuNDgxNCA5NC4zNzU1SDM4LjAxMjJWOTMuMzc4OUg0MC40ODE0QzQwLjk1OTYgOTMuMzc4OSA0MS4zNDY4IDkzLjMwMjcgNDEuNjQzMSA5My4xNTA0QzQxLjkzOTMgOTIuOTk4IDQyLjE1NTEgOTIuNzg2NSA0Mi4yOTA1IDkyLjUxNTZDNDIuNDMwMiA5Mi4yNDQ4IDQyLjUgOTEuOTM1OSA0Mi41IDkxLjU4ODlDNDIuNSA5MS4yNzE1IDQyLjQzMDIgOTAuOTczMSA0Mi4yOTA1IDkwLjY5MzhDNDIuMTU1MSA5MC40MTQ2IDQxLjkzOTMgOTAuMTkwMyA0MS42NDMxIDkwLjAyMUM0MS4zNDY4IDg5Ljg0NzUgNDAuOTU5NiA4OS43NjA3IDQwLjQ4MTQgODkuNzYwN0gzOC4yOTc5Vjk4SDM3LjA3MjhWODguNzU3OEg0MC40ODE0QzQxLjE3OTcgODguNzU3OCA0MS43NyA4OC44Nzg0IDQyLjI1MjQgODkuMTE5NkM0Mi43MzQ5IDg5LjM2MDggNDMuMTAwOSA4OS42OTUxIDQzLjM1MDYgOTAuMTIyNkM0My42MDAzIDkwLjU0NTcgNDMuNzI1MSA5MS4wMzAzIDQzLjcyNTEgOTEuNTc2MkM0My43MjUxIDkyLjE2ODYgNDMuNjAwMyA5Mi42NzQzIDQzLjM1MDYgOTMuMDkzM0M0My4xMDA5IDkzLjUxMjIgNDIuNzM0OSA5My44MzE3IDQyLjI1MjQgOTQuMDUxOEM0MS43NyA5NC4yNjc2IDQxLjE3OTcgOTQuMzc1NSA0MC40ODE0IDk0LjM3NTVaTTQ2LjI3MDUgODguMjVWOThINDUuMDk2MlY4OC4yNUg0Ni4yNzA1Wk00NS45OTEyIDk0LjMwNTdMNDUuNTAyNCA5NC4yODY2QzQ1LjUwNjcgOTMuODE2OSA0NS41NzY1IDkzLjM4MzEgNDUuNzExOSA5Mi45ODU0QzQ1Ljg0NzMgOTIuNTgzMyA0Ni4wMzc4IDkyLjIzNDIgNDYuMjgzMiA5MS45MzhDNDYuNTI4NiA5MS42NDE4IDQ2LjgyMDYgOTEuNDEzMiA0Ny4xNTkyIDkxLjI1MjRDNDcuNTAyIDkxLjA4NzQgNDcuODgwNyA5MS4wMDQ5IDQ4LjI5NTQgOTEuMDA0OUM0OC42MzQgOTEuMDA0OSA0OC45Mzg2IDkxLjA1MTQgNDkuMjA5NSA5MS4xNDQ1QzQ5LjQ4MDMgOTEuMjMzNCA0OS43MTA5IDkxLjM3NzMgNDkuOTAxNCA5MS41NzYyQzUwLjA5NiA5MS43NzUxIDUwLjI0NDEgOTIuMDMzMiA1MC4zNDU3IDkyLjM1MDZDNTAuNDQ3MyA5Mi42NjM3IDUwLjQ5OCA5My4wNDY3IDUwLjQ5OCA5My40OTk1Vjk4SDQ5LjMxNzRWOTMuNDg2OEM0OS4zMTc0IDkzLjEyNzEgNDkuMjY0NSA5Mi44Mzk0IDQ5LjE1ODcgOTIuNjIzNUM0OS4wNTI5IDkyLjQwMzUgNDguODk4NCA5Mi4yNDQ4IDQ4LjY5NTMgOTIuMTQ3NUM0OC40OTIyIDkyLjA0NTkgNDguMjQyNSA5MS45OTUxIDQ3Ljk0NjMgOTEuOTk1MUM0Ny42NTQzIDkxLjk5NTEgNDcuMzg3NyA5Mi4wNTY1IDQ3LjE0NjUgOTIuMTc5MkM0Ni45MDk1IDkyLjMwMTkgNDYuNzA0MyA5Mi40NzEyIDQ2LjUzMDggOTIuNjg3QzQ2LjM2MTUgOTIuOTAyOCA0Ni4yMjgyIDkzLjE1MDQgNDYuMTMwOSA5My40Mjk3QzQ2LjAzNzggOTMuNzA0OCA0NS45OTEyIDkzLjk5NjcgNDUuOTkxMiA5NC4zMDU3Wk01MS45NDUzIDk0LjY0MjFWOTQuNDk2MUM1MS45NDUzIDk0LjAwMSA1Mi4wMTczIDkzLjU0MTggNTIuMTYxMSA5My4xMTg3QzUyLjMwNSA5Mi42OTEyIDUyLjUxMjQgOTIuMzIxIDUyLjc4MzIgOTIuMDA3OEM1My4wNTQgOTEuNjkwNCA1My4zODIgOTEuNDQ1IDUzLjc2NzEgOTEuMjcxNUM1NC4xNTIyIDkxLjA5MzggNTQuNTgzOCA5MS4wMDQ5IDU1LjA2MiA5MS4wMDQ5QzU1LjU0NDQgOTEuMDA0OSA1NS45NzgyIDkxLjA5MzggNTYuMzYzMyA5MS4yNzE1QzU2Ljc1MjYgOTEuNDQ1IDU3LjA4MjcgOTEuNjkwNCA1Ny4zNTM1IDkyLjAwNzhDNTcuNjI4NiA5Mi4zMjEgNTcuODM4MSA5Mi42OTEyIDU3Ljk4MTkgOTMuMTE4N0M1OC4xMjU4IDkzLjU0MTggNTguMTk3OCA5NC4wMDEgNTguMTk3OCA5NC40OTYxVjk0LjY0MjFDNTguMTk3OCA5NS4xMzcyIDU4LjEyNTggOTUuNTk2NCA1Ny45ODE5IDk2LjAxOTVDNTcuODM4MSA5Ni40NDI3IDU3LjYyODYgOTYuODEzIDU3LjM1MzUgOTcuMTMwNEM1Ny4wODI3IDk3LjQ0MzUgNTYuNzU0NyA5Ny42ODkgNTYuMzY5NiA5Ny44NjY3QzU1Ljk4ODggOTguMDQwMiA1NS41NTcxIDk4LjEyNyA1NS4wNzQ3IDk4LjEyN0M1NC41OTIzIDk4LjEyNyA1NC4xNTg1IDk4LjA0MDIgNTMuNzczNCA5Ny44NjY3QzUzLjM4ODMgOTcuNjg5IDUzLjA1ODMgOTcuNDQzNSA1Mi43ODMyIDk3LjEzMDRDNTIuNTEyNCA5Ni44MTMgNTIuMzA1IDk2LjQ0MjcgNTIuMTYxMSA5Ni4wMTk1QzUyLjAxNzMgOTUuNTk2NCA1MS45NDUzIDk1LjEzNzIgNTEuOTQ1MyA5NC42NDIxWk01My4xMTk2IDk0LjQ5NjFWOTQuNjQyMUM1My4xMTk2IDk0Ljk4NDkgNTMuMTU5OCA5NS4zMDg2IDUzLjI0MDIgOTUuNjEzM0M1My4zMjA2IDk1LjkxMzcgNTMuNDQxMiA5Ni4xODAzIDUzLjYwMjEgOTYuNDEzMUM1My43NjcxIDk2LjY0NTggNTMuOTcyMyA5Ni44Mjk5IDU0LjIxNzggOTYuOTY1M0M1NC40NjMyIDk3LjA5NjUgNTQuNzQ4OSA5Ny4xNjIxIDU1LjA3NDcgOTcuMTYyMUM1NS4zOTYzIDk3LjE2MjEgNTUuNjc3NyA5Ny4wOTY1IDU1LjkxODkgOTYuOTY1M0M1Ni4xNjQ0IDk2LjgyOTkgNTYuMzY3NSA5Ni42NDU4IDU2LjUyODMgOTYuNDEzMUM1Ni42ODkxIDk2LjE4MDMgNTYuODA5NyA5NS45MTM3IDU2Ljg5MDEgOTUuNjEzM0M1Ni45NzQ4IDk1LjMwODYgNTcuMDE3MSA5NC45ODQ5IDU3LjAxNzEgOTQuNjQyMVY5NC40OTYxQzU3LjAxNzEgOTQuMTU3NiA1Ni45NzQ4IDkzLjgzODEgNTYuODkwMSA5My41Mzc2QzU2LjgwOTcgOTMuMjMyOSA1Ni42ODcgOTIuOTY0MiA1Ni41MjIgOTIuNzMxNEM1Ni4zNjEyIDkyLjQ5NDUgNTYuMTU4IDkyLjMwODMgNTUuOTEyNiA5Mi4xNzI5QzU1LjY3MTQgOTIuMDM3NCA1NS4zODc5IDkxLjk2OTcgNTUuMDYyIDkxLjk2OTdDNTQuNzQwNCA5MS45Njk3IDU0LjQ1NjkgOTIuMDM3NCA1NC4yMTE0IDkyLjE3MjlDNTMuOTcwMiA5Mi4zMDgzIDUzLjc2NzEgOTIuNDk0NSA1My42MDIxIDkyLjczMTRDNTMuNDQxMiA5Mi45NjQyIDUzLjMyMDYgOTMuMjMyOSA1My4yNDAyIDkzLjUzNzZDNTMuMTU5OCA5My44MzgxIDUzLjExOTYgOTQuMTU3NiA1My4xMTk2IDk0LjQ5NjFaTTYwLjg0NDcgOTIuNTk4MVY5OEg1OS42NzA0VjkxLjEzMThINjAuNzgxMkw2MC44NDQ3IDkyLjU5ODFaTTYwLjU2NTQgOTQuMzA1N0w2MC4wNzY3IDk0LjI4NjZDNjAuMDgwOSA5My44MTY5IDYwLjE1MDcgOTMuMzgzMSA2MC4yODYxIDkyLjk4NTRDNjAuNDIxNSA5Mi41ODMzIDYwLjYxMiA5Mi4yMzQyIDYwLjg1NzQgOTEuOTM4QzYxLjEwMjkgOTEuNjQxOCA2MS4zOTQ5IDkxLjQxMzIgNjEuNzMzNCA5MS4yNTI0QzYyLjA3NjIgOTEuMDg3NCA2Mi40NTQ5IDkxLjAwNDkgNjIuODY5NiA5MS4wMDQ5QzYzLjIwODIgOTEuMDA0OSA2My41MTI5IDkxLjA1MTQgNjMuNzgzNyA5MS4xNDQ1QzY0LjA1NDUgOTEuMjMzNCA2NC4yODUyIDkxLjM3NzMgNjQuNDc1NiA5MS41NzYyQzY0LjY3MDIgOTEuNzc1MSA2NC44MTg0IDkyLjAzMzIgNjQuOTE5OSA5Mi4zNTA2QzY1LjAyMTUgOTIuNjYzNyA2NS4wNzIzIDkzLjA0NjcgNjUuMDcyMyA5My40OTk1Vjk4SDYzLjg5MTZWOTMuNDg2OEM2My44OTE2IDkzLjEyNzEgNjMuODM4NyA5Mi44Mzk0IDYzLjczMjkgOTIuNjIzNUM2My42MjcxIDkyLjQwMzUgNjMuNDcyNyA5Mi4yNDQ4IDYzLjI2OTUgOTIuMTQ3NUM2My4wNjY0IDkyLjA0NTkgNjIuODE2NyA5MS45OTUxIDYyLjUyMDUgOTEuOTk1MUM2Mi4yMjg1IDkxLjk5NTEgNjEuOTYxOSA5Mi4wNTY1IDYxLjcyMDcgOTIuMTc5MkM2MS40ODM3IDkyLjMwMTkgNjEuMjc4NSA5Mi40NzEyIDYxLjEwNSA5Mi42ODdDNjAuOTM1NyA5Mi45MDI4IDYwLjgwMjQgOTMuMTUwNCA2MC43MDUxIDkzLjQyOTdDNjAuNjEyIDkzLjcwNDggNjAuNTY1NCA5My45OTY3IDYwLjU2NTQgOTQuMzA1N1pNNjkuNzA2MSA5OC4xMjdDNjkuMjI3OSA5OC4xMjcgNjguNzk0MSA5OC4wNDY1IDY4LjQwNDggOTcuODg1N0M2OC4wMTk3IDk3LjcyMDcgNjcuNjg3NSA5Ny40OTAxIDY3LjQwODIgOTcuMTkzOEM2Ny4xMzMxIDk2Ljg5NzYgNjYuOTIxNSA5Ni41NDY0IDY2Ljc3MzQgOTYuMTQwMUM2Ni42MjUzIDk1LjczMzkgNjYuNTUxMyA5NS4yODk2IDY2LjU1MTMgOTQuODA3MVY5NC41NDA1QzY2LjU1MTMgOTMuOTgxOSA2Ni42MzM4IDkzLjQ4NDcgNjYuNzk4OCA5My4wNDg4QzY2Ljk2MzkgOTIuNjA4NyA2Ny4xODgyIDkyLjIzNjMgNjcuNDcxNyA5MS45MzE2QzY3Ljc1NTIgOTEuNjI3IDY4LjA3NjggOTEuMzk2MyA2OC40MzY1IDkxLjIzOTdDNjguNzk2MiA5MS4wODMyIDY5LjE2ODYgOTEuMDA0OSA2OS41NTM3IDkxLjAwNDlDNzAuMDQ0NiA5MS4wMDQ5IDcwLjQ2NzggOTEuMDg5NSA3MC44MjMyIDkxLjI1ODhDNzEuMTgyOSA5MS40MjgxIDcxLjQ3NzEgOTEuNjY1IDcxLjcwNTYgOTEuOTY5N0M3MS45MzQxIDkyLjI3MDIgNzIuMTAzNCA5Mi42MjU3IDcyLjIxMzQgOTMuMDM2MUM3Mi4zMjM0IDkzLjQ0MjQgNzIuMzc4NCA5My44ODY3IDcyLjM3ODQgOTQuMzY5MVY5NC44OTZINjcuMjQ5NVY5My45Mzc1SDcxLjIwNDFWOTMuODQ4NkM3MS4xODcyIDkzLjU0MzkgNzEuMTIzNyA5My4yNDc3IDcxLjAxMzcgOTIuOTZDNzAuOTA3OSA5Mi42NzIyIDcwLjczODYgOTIuNDM1MiA3MC41MDU5IDkyLjI0OUM3MC4yNzMxIDkyLjA2MjggNjkuOTU1NyA5MS45Njk3IDY5LjU1MzcgOTEuOTY5N0M2OS4yODcxIDkxLjk2OTcgNjkuMDQxNyA5Mi4wMjY5IDY4LjgxNzQgOTIuMTQxMUM2OC41OTMxIDkyLjI1MTEgNjguNDAwNiA5Mi40MTYyIDY4LjIzOTcgOTIuNjM2MkM2OC4wNzg5IDkyLjg1NjMgNjcuOTU0MSA5My4xMjUgNjcuODY1MiA5My40NDI0QzY3Ljc3NjQgOTMuNzU5OCA2Ny43MzE5IDk0LjEyNTggNjcuNzMxOSA5NC41NDA1Vjk0LjgwNzFDNjcuNzMxOSA5NS4xMzMgNjcuNzc2NCA5NS40Mzk4IDY3Ljg2NTIgOTUuNzI3NUM2Ny45NTgzIDk2LjAxMTEgNjguMDkxNiA5Ni4yNjA3IDY4LjI2NTEgOTYuNDc2NkM2OC40NDI5IDk2LjY5MjQgNjguNjU2NiA5Ni44NjE3IDY4LjkwNjIgOTYuOTg0NEM2OS4xNjAyIDk3LjEwNzEgNjkuNDQ3OSA5Ny4xNjg1IDY5Ljc2OTUgOTcuMTY4NUM3MC4xODQyIDk3LjE2ODUgNzAuNTM1NSA5Ny4wODM4IDcwLjgyMzIgOTYuOTE0NkM3MS4xMTEgOTYuNzQ1MyA3MS4zNjI4IDk2LjUxODkgNzEuNTc4NiA5Ni4yMzU0TDcyLjI4OTYgOTYuODAwM0M3Mi4xNDE0IDk3LjAyNDYgNzEuOTUzMSA5Ny4yMzgzIDcxLjcyNDYgOTcuNDQxNEM3MS40OTYxIDk3LjY0NDUgNzEuMjE0NyA5Ny44MDk2IDcwLjg4MDQgOTcuOTM2NUM3MC41NTAzIDk4LjA2MzUgNzAuMTU4OSA5OC4xMjcgNjkuNzA2MSA5OC4xMjdaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldmlldzsiLCJpbXBvcnQgcHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuaW1wb3J0IHsgU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXInO1xuaW1wb3J0IFNlbGVjdFJhZGlvQ2hlY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWxlY3RSYWRpb0NoZWNrJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHQgICAgICBUb29sQmFyRmllbGRzLFxuXHQgICAgICBCbG9ja0xhYmVsLFxuXHQgICAgICBCbG9ja0Rlc2NyaXB0aW9uLFxuXHQgICAgICBCbG9ja0FkdmFuY2VkVmFsdWUsXG5cdCAgICAgIEJsb2NrTmFtZSxcblx0ICAgICAgQmxvY2tQbGFjZWhvbGRlcixcblx0ICAgICAgQmxvY2tBZGRQcmV2QnV0dG9uLFxuXHQgICAgICBCbG9ja1ByZXZCdXR0b25MYWJlbCxcblx0ICAgICAgQmxvY2tWaXNpYmlsaXR5LFxuXHQgICAgICBCbG9ja0NsYXNzTmFtZSxcblx0ICAgICAgRmllbGRDb250cm9sLFxuXHQgICAgICBTd2l0Y2hQYWdlT25DaGFuZ2VDb250cm9scyxcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlLFxuICAgICAgfSA9IEpldEZCSG9va3M7XG5cbmNvbnN0IHtcblx0ICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdCAgICAgIHVzZUJsb2NrUHJvcHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcblx0ICAgICAgUGFuZWxCb2R5LFxuXHQgICAgICBSYW5nZUNvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudFtdfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdEVkaXQoIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgaXNTZWxlY3RlZCxcblx0XHQgICAgICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfSxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0dXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlKCk7XG5cblx0aWYgKCBhdHRyaWJ1dGVzLmlzUHJldmlldyApIHtcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17IHtcblx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0fSB9PlxuXHRcdFx0eyBwcmV2aWV3IH1cblx0XHQ8L2Rpdj47XG5cdH1cblxuXHRyZXR1cm4gPD5cblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz5cblx0XHR7ICFhdHRyaWJ1dGVzLm11bHRpcGxlICYmIDxTd2l0Y2hQYWdlT25DaGFuZ2VDb250cm9scy8+IH1cblx0XHR7IGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0dlbmVyYWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHQ8QmxvY2tMYWJlbC8+XG5cdFx0XHRcdDxCbG9ja05hbWUvPlxuXHRcdFx0XHQ8QmxvY2tEZXNjcmlwdGlvbi8+XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1ZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfT5cblx0XHRcdFx0PEJsb2NrQWR2YW5jZWRWYWx1ZS8+XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0dGl0bGU9eyBfXyggJ0FkdmFuY2VkJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8QmxvY2tQbGFjZWhvbGRlci8+XG5cdFx0XHRcdHsgKFxuXHRcdFx0XHRcdCEhYXR0cmlidXRlcy5wbGFjZWhvbGRlci5sZW5ndGhcblx0XHRcdFx0KSAmJiA8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdpc19kaXNhYmxlZF9wbGFjZWhvbGRlcicgKSB9XG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0Rpc2FibGUgcGxhY2Vob2xkZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuaXNfZGlzYWJsZWRfcGxhY2Vob2xkZXIgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgaXNfZGlzYWJsZWRfcGxhY2Vob2xkZXIgPT4gc2V0QXR0cmlidXRlcyhcblx0XHRcdFx0XHRcdHsgaXNfZGlzYWJsZWRfcGxhY2Vob2xkZXIgfSApIH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0XHQ8QmxvY2tBZGRQcmV2QnV0dG9uLz5cblx0XHRcdFx0PEJsb2NrUHJldkJ1dHRvbkxhYmVsLz5cblx0XHRcdFx0PEJsb2NrVmlzaWJpbGl0eS8+XG5cdFx0XHRcdDxCbG9ja0NsYXNzTmFtZS8+XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPiB9XG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyXG5cdFx0XHRcdHNjcmlwdERhdGE9eyB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrIHsgLi4ucHJvcHMgfT5cblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9XCJtdWx0aXBsZVwiXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0lzIG11bHRpcGxlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLm11bHRpcGxlIH1cblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdtdWx0aXBsZScgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBtdWx0aXBsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG11bHRpcGxlIH0gKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgYXR0cmlidXRlcy5tdWx0aXBsZSAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Jvd3MgY291bnQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm11bHRpcGxlX3NpemUgPz8gNCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBtdWx0aXBsZV9zaXplID0+IHNldEF0dHJpYnV0ZXMoXG5cdFx0XHRcdFx0XHR7IG11bHRpcGxlX3NpemUgfSApIH1cblx0XHRcdFx0XHRhbGxvd1Jlc2V0XG5cdFx0XHRcdFx0cmVzZXRGYWxsYmFja1ZhbHVlPXsgNCB9XG5cdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0bWF4PXsgMjUgfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHRcdDxGaWVsZENvbnRyb2xcblx0XHRcdFx0XHR0eXBlPVwiY3VzdG9tX3NldHRpbmdzXCJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnY3VzdG9tU2V0dGluZ3NGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TZWxlY3RSYWRpb0NoZWNrPlxuXHRcdDwvZGl2PlxuXHQ8Lz47XG59IiwiaW1wb3J0IFNlbGVjdEVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAc2hhcmVkL2Jsb2Nrcy9zZWxlY3QvYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IGNyZWF0ZUJsb2NrIH0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRkZXNjcmlwdGlvbjogX18oXG5cdFx0YENyZWF0ZXMgYSBkcm9wLWRvd24gbGlzdCwgd2hlcmUgdGhlIHVzZXIgY2FuIGNob29zZSBvbmUgb3B0aW9uLiBcbkFkZCBhcyBtYW55IG9wdGlvbnMgaW4gdGhlIGxpc3QgYXMgbmVlZGVkIGFzIHRoZSBudW1iZXIgb2YgdGhlbSBpcyBub3QgbGltaXRlZC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHQpLFxuXHRlZGl0OiBTZWxlY3RFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnLCAnYmxvY2tOYW1lJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxuXHRcdH0sXG5cdH0sXG5cdHRyYW5zZm9ybXM6IHtcblx0XHR0bzogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0XHRibG9ja3M6IFsgJ2pldC1mb3Jtcy90ZXh0LWZpZWxkJyBdLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICggYXR0cmlidXRlcyApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soICdqZXQtZm9ybXMvdGV4dC1maWVsZCcsIHsgLi4uYXR0cmlidXRlcyB9ICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaW9yaXR5OiAwLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdGZyb206IFtcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogJ2Jsb2NrJyxcblx0XHRcdFx0YmxvY2tzOiBbXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy9jaGVja2JveC1maWVsZCcsXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy9yYWRpby1maWVsZCcsXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcblx0XHRcdFx0XSxcblx0XHRcdFx0dHJhbnNmb3JtOiAoIGF0dHJpYnV0ZXMgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCBuYW1lLCB7IC4uLmF0dHJpYnV0ZXMgfSApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcmlvcml0eTogMCxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTsiLCJjb25zdCBwcmV2aWV3ID0gKFxuXHQ8c3ZnIHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgdmlld0JveD1cIjAgMCAyOTggMTQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PHJlY3Qgd2lkdGg9XCIyOThcIiBoZWlnaHQ9XCIxNDRcIiBmaWxsPVwiI0YxRjVGOVwiLz5cblx0XHQ8cGF0aCBkPVwiTTIyLjE2NDEgMjQuODM1SDIzLjQ3NjZDMjMuNDA4MiAyNS40NjM5IDIzLjIyODIgMjYuMDI2NyAyMi45MzY1IDI2LjUyMzRDMjIuNjQ0OSAyNy4wMjAyIDIyLjIzMjQgMjcuNDE0NCAyMS42OTkyIDI3LjcwNjFDMjEuMTY2IDI3Ljk5MzIgMjAuNTAwNyAyOC4xMzY3IDE5LjcwMzEgMjguMTM2N0MxOS4xMTk4IDI4LjEzNjcgMTguNTg4OSAyOC4wMjczIDE4LjExMDQgMjcuODA4NkMxNy42MzY0IDI3LjU4OTggMTcuMjI4NSAyNy4yNzk5IDE2Ljg4NjcgMjYuODc4OUMxNi41NDQ5IDI2LjQ3MzMgMTYuMjgwNiAyNS45ODggMTYuMDkzOCAyNS40MjI5QzE1LjkxMTUgMjQuODUzMiAxNS44MjAzIDI0LjIxOTcgMTUuODIwMyAyMy41MjI1VjIyLjUzMTJDMTUuODIwMyAyMS44MzQgMTUuOTExNSAyMS4yMDI4IDE2LjA5MzggMjAuNjM3N0MxNi4yODA2IDIwLjA2OCAxNi41NDcyIDE5LjU4MDQgMTYuODkzNiAxOS4xNzQ4QzE3LjI0NDUgMTguNzY5MiAxNy42NjYgMTguNDU3IDE4LjE1ODIgMTguMjM4M0MxOC42NTA0IDE4LjAxOTUgMTkuMjA0MSAxNy45MTAyIDE5LjgxOTMgMTcuOTEwMkMyMC41NzEzIDE3LjkxMDIgMjEuMjA3IDE4LjA1MTQgMjEuNzI2NiAxOC4zMzRDMjIuMjQ2MSAxOC42MTY1IDIyLjY0OTQgMTkuMDA4NSAyMi45MzY1IDE5LjUwOThDMjMuMjI4MiAyMC4wMDY1IDIzLjQwODIgMjAuNTgzIDIzLjQ3NjYgMjEuMjM5M0gyMi4xNjQxQzIyLjEwMDMgMjAuNzc0NCAyMS45ODE4IDIwLjM3NTcgMjEuODA4NiAyMC4wNDNDMjEuNjM1NCAxOS43MDU3IDIxLjM4OTMgMTkuNDQ2IDIxLjA3MDMgMTkuMjYzN0MyMC43NTEzIDE5LjA4MTQgMjAuMzM0MyAxOC45OTAyIDE5LjgxOTMgMTguOTkwMkMxOS4zNzczIDE4Ljk5MDIgMTguOTg3NiAxOS4wNzQ1IDE4LjY1MDQgMTkuMjQzMkMxOC4zMTc3IDE5LjQxMTggMTguMDM3NCAxOS42NTEgMTcuODA5NiAxOS45NjA5QzE3LjU4NjMgMjAuMjcwOCAxNy40MTc2IDIwLjY0MjMgMTcuMzAzNyAyMS4wNzUyQzE3LjE4OTggMjEuNTA4MSAxNy4xMzI4IDIxLjk4ODkgMTcuMTMyOCAyMi41MTc2VjIzLjUyMjVDMTcuMTMyOCAyNC4wMTAxIDE3LjE4MjkgMjQuNDY4MSAxNy4yODMyIDI0Ljg5NjVDMTcuMzg4IDI1LjMyNDkgMTcuNTQ1MiAyNS43MDA4IDE3Ljc1NDkgMjYuMDI0NEMxNy45NjQ1IDI2LjM0OCAxOC4yMzExIDI2LjYwMzIgMTguNTU0NyAyNi43OUMxOC44NzgzIDI2Ljk3MjMgMTkuMjYxMSAyNy4wNjM1IDE5LjcwMzEgMjcuMDYzNUMyMC4yNjM3IDI3LjA2MzUgMjAuNzEwMyAyNi45NzQ2IDIxLjA0MyAyNi43OTY5QzIxLjM3NTcgMjYuNjE5MSAyMS42MjYzIDI2LjM2MzkgMjEuNzk0OSAyNi4wMzEyQzIxLjk2ODEgMjUuNjk4NiAyMi4wOTExIDI1LjI5OTggMjIuMTY0MSAyNC44MzVaTTI2LjM0NzcgMTcuNVYyOEgyNS4wODNWMTcuNUgyNi4zNDc3Wk0yNi4wNDY5IDI0LjAyMTVMMjUuNTIwNSAyNC4wMDFDMjUuNTI1MSAyMy40OTUxIDI1LjYwMDMgMjMuMDI4IDI1Ljc0NjEgMjIuNTk5NkMyNS44OTE5IDIyLjE2NjcgMjYuMDk3IDIxLjc5MDcgMjYuMzYxMyAyMS40NzE3QzI2LjYyNTcgMjEuMTUyNyAyNi45NDAxIDIwLjkwNjYgMjcuMzA0NyAyMC43MzM0QzI3LjY3MzggMjAuNTU1NyAyOC4wODE3IDIwLjQ2NjggMjguNTI4MyAyMC40NjY4QzI4Ljg5MjkgMjAuNDY2OCAyOS4yMjEgMjAuNTE2OSAyOS41MTI3IDIwLjYxNzJDMjkuODA0NCAyMC43MTI5IDMwLjA1MjcgMjAuODY3OCAzMC4yNTc4IDIxLjA4MkMzMC40Njc0IDIxLjI5NjIgMzAuNjI3IDIxLjU3NDIgMzAuNzM2MyAyMS45MTZDMzAuODQ1NyAyMi4yNTMzIDMwLjkwMDQgMjIuNjY1NyAzMC45MDA0IDIzLjE1MzNWMjhIMjkuNjI4OVYyMy4xMzk2QzI5LjYyODkgMjIuNzUyMyAyOS41NzE5IDIyLjQ0MjQgMjkuNDU4IDIyLjIxQzI5LjM0NDEgMjEuOTczIDI5LjE3NzcgMjEuODAyMSAyOC45NTkgMjEuNjk3M0MyOC43NDAyIDIxLjU4NzkgMjguNDcxNCAyMS41MzMyIDI4LjE1MjMgMjEuNTMzMkMyNy44Mzc5IDIxLjUzMzIgMjcuNTUwOCAyMS41OTkzIDI3LjI5MSAyMS43MzE0QzI3LjAzNTggMjEuODYzNiAyNi44MTQ4IDIyLjA0NTkgMjYuNjI3OSAyMi4yNzgzQzI2LjQ0NTYgMjIuNTEwNyAyNi4zMDIxIDIyLjc3NzMgMjYuMTk3MyAyMy4wNzgxQzI2LjA5NyAyMy4zNzQzIDI2LjA0NjkgMjMuNjg4OCAyNi4wNDY5IDI0LjAyMTVaTTMyLjQ1OSAyNC4zODM4VjI0LjIyNjZDMzIuNDU5IDIzLjY5MzQgMzIuNTM2NSAyMy4xOTg5IDMyLjY5MTQgMjIuNzQzMkMzMi44NDY0IDIyLjI4MjkgMzMuMDY5NyAyMS44ODQxIDMzLjM2MTMgMjEuNTQ2OUMzMy42NTMgMjEuMjA1MSAzNC4wMDYyIDIwLjk0MDggMzQuNDIwOSAyMC43NTM5QzM0LjgzNTYgMjAuNTYyNSAzNS4zMDA1IDIwLjQ2NjggMzUuODE1NCAyMC40NjY4QzM2LjMzNSAyMC40NjY4IDM2LjgwMjEgMjAuNTYyNSAzNy4yMTY4IDIwLjc1MzlDMzcuNjM2MSAyMC45NDA4IDM3Ljk5MTUgMjEuMjA1MSAzOC4yODMyIDIxLjU0NjlDMzguNTc5NCAyMS44ODQxIDM4LjgwNSAyMi4yODI5IDM4Ljk2IDIyLjc0MzJDMzkuMTE0OSAyMy4xOTg5IDM5LjE5MjQgMjMuNjkzNCAzOS4xOTI0IDI0LjIyNjZWMjQuMzgzOEMzOS4xOTI0IDI0LjkxNyAzOS4xMTQ5IDI1LjQxMTUgMzguOTYgMjUuODY3MkMzOC44MDUgMjYuMzIyOSAzOC41Nzk0IDI2LjcyMTcgMzguMjgzMiAyNy4wNjM1QzM3Ljk5MTUgMjcuNDAwNyAzNy42MzgzIDI3LjY2NSAzNy4yMjM2IDI3Ljg1NjRDMzYuODEzNSAyOC4wNDMzIDM2LjM0ODYgMjguMTM2NyAzNS44MjkxIDI4LjEzNjdDMzUuMzA5NiAyOC4xMzY3IDM0Ljg0MjQgMjguMDQzMyAzNC40Mjc3IDI3Ljg1NjRDMzQuMDEzIDI3LjY2NSAzMy42NTc2IDI3LjQwMDcgMzMuMzYxMyAyNy4wNjM1QzMzLjA2OTcgMjYuNzIxNyAzMi44NDY0IDI2LjMyMjkgMzIuNjkxNCAyNS44NjcyQzMyLjUzNjUgMjUuNDExNSAzMi40NTkgMjQuOTE3IDMyLjQ1OSAyNC4zODM4Wk0zMy43MjM2IDI0LjIyNjZWMjQuMzgzOEMzMy43MjM2IDI0Ljc1MjkgMzMuNzY2OSAyNS4xMDE2IDMzLjg1MzUgMjUuNDI5N0MzMy45NDAxIDI1Ljc1MzMgMzQuMDcgMjYuMDQwNCAzNC4yNDMyIDI2LjI5MUMzNC40MjA5IDI2LjU0MTcgMzQuNjQxOSAyNi43Mzk5IDM0LjkwNjIgMjYuODg1N0MzNS4xNzA2IDI3LjAyNyAzNS40NzgyIDI3LjA5NzcgMzUuODI5MSAyNy4wOTc3QzM2LjE3NTUgMjcuMDk3NyAzNi40Nzg1IDI3LjAyNyAzNi43MzgzIDI2Ljg4NTdDMzcuMDAyNiAyNi43Mzk5IDM3LjIyMTQgMjYuNTQxNyAzNy4zOTQ1IDI2LjI5MUMzNy41Njc3IDI2LjA0MDQgMzcuNjk3NiAyNS43NTMzIDM3Ljc4NDIgMjUuNDI5N0MzNy44NzUzIDI1LjEwMTYgMzcuOTIwOSAyNC43NTI5IDM3LjkyMDkgMjQuMzgzOFYyNC4yMjY2QzM3LjkyMDkgMjMuODYyIDM3Ljg3NTMgMjMuNTE3OSAzNy43ODQyIDIzLjE5NDNDMzcuNjk3NiAyMi44NjYyIDM3LjU2NTQgMjIuNTc2OCAzNy4zODc3IDIyLjMyNjJDMzcuMjE0NSAyMi4wNzEgMzYuOTk1OCAyMS44NzA0IDM2LjczMTQgMjEuNzI0NkMzNi40NzE3IDIxLjU3ODggMzYuMTY2MyAyMS41MDU5IDM1LjgxNTQgMjEuNTA1OUMzNS40NjkxIDIxLjUwNTkgMzUuMTYzNyAyMS41Nzg4IDM0Ljg5OTQgMjEuNzI0NkMzNC42Mzk2IDIxLjg3MDQgMzQuNDIwOSAyMi4wNzEgMzQuMjQzMiAyMi4zMjYyQzM0LjA3IDIyLjU3NjggMzMuOTQwMSAyMi44NjYyIDMzLjg1MzUgMjMuMTk0M0MzMy43NjY5IDIzLjUxNzkgMzMuNzIzNiAyMy44NjIgMzMuNzIzNiAyNC4yMjY2Wk00MC40NDM0IDI0LjM4MzhWMjQuMjI2NkM0MC40NDM0IDIzLjY5MzQgNDAuNTIwOCAyMy4xOTg5IDQwLjY3NTggMjIuNzQzMkM0MC44MzA3IDIyLjI4MjkgNDEuMDU0IDIxLjg4NDEgNDEuMzQ1NyAyMS41NDY5QzQxLjYzNzQgMjEuMjA1MSA0MS45OTA2IDIwLjk0MDggNDIuNDA1MyAyMC43NTM5QzQyLjgyIDIwLjU2MjUgNDMuMjg0OCAyMC40NjY4IDQzLjc5OTggMjAuNDY2OEM0NC4zMTkzIDIwLjQ2NjggNDQuNzg2NSAyMC41NjI1IDQ1LjIwMTIgMjAuNzUzOUM0NS42MjA0IDIwLjk0MDggNDUuOTc1OSAyMS4yMDUxIDQ2LjI2NzYgMjEuNTQ2OUM0Ni41NjM4IDIxLjg4NDEgNDYuNzg5NCAyMi4yODI5IDQ2Ljk0NDMgMjIuNzQzMkM0Ny4wOTkzIDIzLjE5ODkgNDcuMTc2OCAyMy42OTM0IDQ3LjE3NjggMjQuMjI2NlYyNC4zODM4QzQ3LjE3NjggMjQuOTE3IDQ3LjA5OTMgMjUuNDExNSA0Ni45NDQzIDI1Ljg2NzJDNDYuNzg5NCAyNi4zMjI5IDQ2LjU2MzggMjYuNzIxNyA0Ni4yNjc2IDI3LjA2MzVDNDUuOTc1OSAyNy40MDA3IDQ1LjYyMjcgMjcuNjY1IDQ1LjIwOCAyNy44NTY0QzQ0Ljc5NzkgMjguMDQzMyA0NC4zMzMgMjguMTM2NyA0My44MTM1IDI4LjEzNjdDNDMuMjkzOSAyOC4xMzY3IDQyLjgyNjggMjguMDQzMyA0Mi40MTIxIDI3Ljg1NjRDNDEuOTk3NCAyNy42NjUgNDEuNjQxOSAyNy40MDA3IDQxLjM0NTcgMjcuMDYzNUM0MS4wNTQgMjYuNzIxNyA0MC44MzA3IDI2LjMyMjkgNDAuNjc1OCAyNS44NjcyQzQwLjUyMDggMjUuNDExNSA0MC40NDM0IDI0LjkxNyA0MC40NDM0IDI0LjM4MzhaTTQxLjcwOCAyNC4yMjY2VjI0LjM4MzhDNDEuNzA4IDI0Ljc1MjkgNDEuNzUxMyAyNS4xMDE2IDQxLjgzNzkgMjUuNDI5N0M0MS45MjQ1IDI1Ljc1MzMgNDIuMDU0NCAyNi4wNDA0IDQyLjIyNzUgMjYuMjkxQzQyLjQwNTMgMjYuNTQxNyA0Mi42MjYzIDI2LjczOTkgNDIuODkwNiAyNi44ODU3QzQzLjE1NDkgMjcuMDI3IDQzLjQ2MjYgMjcuMDk3NyA0My44MTM1IDI3LjA5NzdDNDQuMTU5OCAyNy4wOTc3IDQ0LjQ2MjkgMjcuMDI3IDQ0LjcyMjcgMjYuODg1N0M0NC45ODcgMjYuNzM5OSA0NS4yMDU3IDI2LjU0MTcgNDUuMzc4OSAyNi4yOTFDNDUuNTUyMSAyNi4wNDA0IDQ1LjY4MiAyNS43NTMzIDQ1Ljc2ODYgMjUuNDI5N0M0NS44NTk3IDI1LjEwMTYgNDUuOTA1MyAyNC43NTI5IDQ1LjkwNTMgMjQuMzgzOFYyNC4yMjY2QzQ1LjkwNTMgMjMuODYyIDQ1Ljg1OTcgMjMuNTE3OSA0NS43Njg2IDIzLjE5NDNDNDUuNjgyIDIyLjg2NjIgNDUuNTQ5OCAyMi41NzY4IDQ1LjM3MjEgMjIuMzI2MkM0NS4xOTg5IDIyLjA3MSA0NC45ODAxIDIxLjg3MDQgNDQuNzE1OCAyMS43MjQ2QzQ0LjQ1NjEgMjEuNTc4OCA0NC4xNTA3IDIxLjUwNTkgNDMuNzk5OCAyMS41MDU5QzQzLjQ1MzUgMjEuNTA1OSA0My4xNDgxIDIxLjU3ODggNDIuODgzOCAyMS43MjQ2QzQyLjYyNCAyMS44NzA0IDQyLjQwNTMgMjIuMDcxIDQyLjIyNzUgMjIuMzI2MkM0Mi4wNTQ0IDIyLjU3NjggNDEuOTI0NSAyMi44NjYyIDQxLjgzNzkgMjMuMTk0M0M0MS43NTEzIDIzLjUxNzkgNDEuNzA4IDIzLjg2MiA0MS43MDggMjQuMjI2NlpNNTMuMDY5MyAyNi4wMzgxQzUzLjA2OTMgMjUuODU1OCA1My4wMjgzIDI1LjY4NzIgNTIuOTQ2MyAyNS41MzIyQzUyLjg2ODggMjUuMzcyNyA1Mi43MDcgMjUuMjI5MiA1Mi40NjA5IDI1LjEwMTZDNTIuMjE5NCAyNC45Njk0IDUxLjg1NDggMjQuODU1NSA1MS4zNjcyIDI0Ljc1OThDNTAuOTU3IDI0LjY3MzIgNTAuNTg1NiAyNC41NzA2IDUwLjI1MjkgMjQuNDUyMUM0OS45MjQ4IDI0LjMzMzcgNDkuNjQ0NSAyNC4xOTAxIDQ5LjQxMjEgMjQuMDIxNUM0OS4xODQyIDIzLjg1MjkgNDkuMDA4OCAyMy42NTQ2IDQ4Ljg4NTcgMjMuNDI2OEM0OC43NjI3IDIzLjE5ODkgNDguNzAxMiAyMi45MzIzIDQ4LjcwMTIgMjIuNjI3QzQ4LjcwMTIgMjIuMzM1MyA0OC43NjUgMjIuMDU5NiA0OC44OTI2IDIxLjc5OThDNDkuMDI0NyAyMS41NCA0OS4yMDkzIDIxLjMwOTkgNDkuNDQ2MyAyMS4xMDk0QzQ5LjY4NzggMjAuOTA4OSA0OS45NzcyIDIwLjc1MTYgNTAuMzE0NSAyMC42Mzc3QzUwLjY1MTcgMjAuNTIzOCA1MS4wMjc3IDIwLjQ2NjggNTEuNDQyNCAyMC40NjY4QzUyLjAzNDggMjAuNDY2OCA1Mi41NDA3IDIwLjU3MTYgNTIuOTYgMjAuNzgxMkM1My4zNzkyIDIwLjk5MDkgNTMuNzAwNSAyMS4yNzEyIDUzLjkyMzggMjEuNjIyMUM1NC4xNDcxIDIxLjk2ODQgNTQuMjU4OCAyMi4zNTM1IDU0LjI1ODggMjIuNzc3M0g1Mi45OTQxQzUyLjk5NDEgMjIuNTcyMyA1Mi45MzI2IDIyLjM3NCA1Mi44MDk2IDIyLjE4MjZDNTIuNjkxMSAyMS45ODY3IDUyLjUxNTYgMjEuODI0OSA1Mi4yODMyIDIxLjY5NzNDNTIuMDU1MyAyMS41Njk3IDUxLjc3NTEgMjEuNTA1OSA1MS40NDI0IDIxLjUwNTlDNTEuMDkxNSAyMS41MDU5IDUwLjgwNjYgMjEuNTYwNSA1MC41ODc5IDIxLjY2OTlDNTAuMzczNyAyMS43NzQ3IDUwLjIxNjUgMjEuOTA5MiA1MC4xMTYyIDIyLjA3MzJDNTAuMDIwNSAyMi4yMzczIDQ5Ljk3MjcgMjIuNDEwNSA0OS45NzI3IDIyLjU5MjhDNDkuOTcyNyAyMi43Mjk1IDQ5Ljk5NTQgMjIuODUyNSA1MC4wNDEgMjIuOTYxOUM1MC4wOTExIDIzLjA2NjcgNTAuMTc3NyAyMy4xNjQ3IDUwLjMwMDggMjMuMjU1OUM1MC40MjM4IDIzLjM0MjQgNTAuNTk3IDIzLjQyNDUgNTAuODIwMyAyMy41MDJDNTEuMDQzNiAyMy41Nzk0IDUxLjMyODUgMjMuNjU2OSA1MS42NzQ4IDIzLjczNDRDNTIuMjgwOSAyMy44NzExIDUyLjc3OTkgMjQuMDM1MiA1My4xNzE5IDI0LjIyNjZDNTMuNTYzOCAyNC40MTggNTMuODU1NSAyNC42NTI3IDU0LjA0NjkgMjQuOTMwN0M1NC4yMzgzIDI1LjIwODcgNTQuMzM0IDI1LjU0NTkgNTQuMzM0IDI1Ljk0MjRDNTQuMzM0IDI2LjI2NiA1NC4yNjU2IDI2LjU2MjIgNTQuMTI4OSAyNi44MzExQzUzLjk5NjcgMjcuMDk5OSA1My44MDMxIDI3LjMzMjQgNTMuNTQ3OSAyNy41MjgzQzUzLjI5NzIgMjcuNzE5NyA1Mi45OTY0IDI3Ljg3MDEgNTIuNjQ1NSAyNy45Nzk1QzUyLjI5OTIgMjguMDg0MyA1MS45MDk1IDI4LjEzNjcgNTEuNDc2NiAyOC4xMzY3QzUwLjgyNDkgMjguMTM2NyA1MC4yNzM0IDI4LjAyMDUgNDkuODIyMyAyNy43ODgxQzQ5LjM3MTEgMjcuNTU1NyA0OS4wMjkzIDI3LjI1NDkgNDguNzk2OSAyNi44ODU3QzQ4LjU2NDUgMjYuNTE2NiA0OC40NDgyIDI2LjEyNyA0OC40NDgyIDI1LjcxNjhINDkuNzE5N0M0OS43MzggMjYuMDYzMiA0OS44MzgyIDI2LjMzODkgNTAuMDIwNSAyNi41NDM5QzUwLjIwMjggMjYuNzQ0NSA1MC40MjYxIDI2Ljg4OCA1MC42OTA0IDI2Ljk3NDZDNTAuOTU0OCAyNy4wNTY2IDUxLjIxNjggMjcuMDk3NyA1MS40NzY2IDI3LjA5NzdDNTEuODIyOSAyNy4wOTc3IDUyLjExMjMgMjcuMDUyMSA1Mi4zNDQ3IDI2Ljk2MDlDNTIuNTgxNyAyNi44Njk4IDUyLjc2MTcgMjYuNzQ0NSA1Mi44ODQ4IDI2LjU4NUM1My4wMDc4IDI2LjQyNTUgNTMuMDY5MyAyNi4yNDMyIDUzLjA2OTMgMjYuMDM4MVpNNTkuMDY0NSAyOC4xMzY3QzU4LjU0OTUgMjguMTM2NyA1OC4wODI0IDI4LjA1MDEgNTcuNjYzMSAyNy44NzdDNTcuMjQ4NCAyNy42OTkyIDU2Ljg5MDYgMjcuNDUwOCA1Ni41ODk4IDI3LjEzMThDNTYuMjkzNiAyNi44MTI4IDU2LjA2NTggMjYuNDM0NiA1NS45MDYyIDI1Ljk5NzFDNTUuNzQ2NyAyNS41NTk2IDU1LjY2NyAyNS4wODExIDU1LjY2NyAyNC41NjE1VjI0LjI3NDRDNTUuNjY3IDIzLjY3MjkgNTUuNzU1OSAyMy4xMzc0IDU1LjkzMzYgMjIuNjY4QzU2LjExMTMgMjIuMTk0IDU2LjM1MjkgMjEuNzkzIDU2LjY1ODIgMjEuNDY0OEM1Ni45NjM1IDIxLjEzNjcgNTcuMzA5OSAyMC44ODgzIDU3LjY5NzMgMjAuNzE5N0M1OC4wODQ2IDIwLjU1MTEgNTguNDg1NyAyMC40NjY4IDU4LjkwMDQgMjAuNDY2OEM1OS40MjkgMjAuNDY2OCA1OS44ODQ4IDIwLjU1NzkgNjAuMjY3NiAyMC43NDAyQzYwLjY1NDkgMjAuOTIyNSA2MC45NzE3IDIxLjE3NzcgNjEuMjE3OCAyMS41MDU5QzYxLjQ2MzkgMjEuODI5NCA2MS42NDYyIDIyLjIxMjIgNjEuNzY0NiAyMi42NTQzQzYxLjg4MzEgMjMuMDkxOCA2MS45NDI0IDIzLjU3MDMgNjEuOTQyNCAyNC4wODk4VjI0LjY1NzJINTYuNDE4OVYyMy42MjVINjAuNjc3N1YyMy41MjkzQzYwLjY1OTUgMjMuMjAxMiA2MC41OTExIDIyLjg4MjIgNjAuNDcyNyAyMi41NzIzQzYwLjM1ODcgMjIuMjYyNCA2MC4xNzY0IDIyLjAwNzIgNTkuOTI1OCAyMS44MDY2QzU5LjY3NTEgMjEuNjA2MSA1OS4zMzMzIDIxLjUwNTkgNTguOTAwNCAyMS41MDU5QzU4LjYxMzMgMjEuNTA1OSA1OC4zNDkgMjEuNTY3NCA1OC4xMDc0IDIxLjY5MDRDNTcuODY1OSAyMS44MDg5IDU3LjY1ODUgMjEuOTg2NyA1Ny40ODU0IDIyLjIyMzZDNTcuMzEyMiAyMi40NjA2IDU3LjE3NzcgMjIuNzUgNTcuMDgyIDIzLjA5MThDNTYuOTg2MyAyMy40MzM2IDU2LjkzODUgMjMuODI3OCA1Ni45Mzg1IDI0LjI3NDRWMjQuNTYxNUM1Ni45Mzg1IDI0LjkxMjQgNTYuOTg2MyAyNS4yNDI4IDU3LjA4MiAyNS41NTI3QzU3LjE4MjMgMjUuODU4MSA1Ny4zMjU4IDI2LjEyNyA1Ny41MTI3IDI2LjM1OTRDNTcuNzA0MSAyNi41OTE4IDU3LjkzNDIgMjYuNzc0MSA1OC4yMDMxIDI2LjkwNjJDNTguNDc2NiAyNy4wMzg0IDU4Ljc4NjUgMjcuMTA0NSA1OS4xMzI4IDI3LjEwNDVDNTkuNTc5NCAyNy4xMDQ1IDU5Ljk1NzcgMjcuMDEzMyA2MC4yNjc2IDI2LjgzMTFDNjAuNTc3NSAyNi42NDg4IDYwLjg0ODYgMjYuNDA0OSA2MS4wODExIDI2LjA5OTZMNjEuODQ2NyAyNi43MDhDNjEuNjg3MiAyNi45NDk1IDYxLjQ4NDQgMjcuMTc5NyA2MS4yMzgzIDI3LjM5ODRDNjAuOTkyMiAyNy42MTcyIDYwLjY4OTEgMjcuNzk0OSA2MC4zMjkxIDI3LjkzMTZDNTkuOTczNiAyOC4wNjg0IDU5LjU1MjEgMjguMTM2NyA1OS4wNjQ1IDI4LjEzNjdaTTY4Ljk2OTcgMjcuMjM0NEw3MS4wMjczIDIwLjYwMzVINzIuMzgwOUw2OS40MTQxIDI5LjE0MTZDNjkuMzQ1NyAyOS4zMjM5IDY5LjI1NDYgMjkuNTE5OSA2OS4xNDA2IDI5LjcyOTVDNjkuMDMxMiAyOS45NDM3IDY4Ljg5IDMwLjE0NjUgNjguNzE2OCAzMC4zMzc5QzY4LjU0MzYgMzAuNTI5MyA2OC4zMzQgMzAuNjg0MiA2OC4wODc5IDMwLjgwMjdDNjcuODQ2NCAzMC45MjU4IDY3LjU1NyAzMC45ODczIDY3LjIxOTcgMzAuOTg3M0M2Ny4xMTk1IDMwLjk4NzMgNjYuOTkxOSAzMC45NzM2IDY2LjgzNjkgMzAuOTQ2M0M2Ni42ODIgMzAuOTE4OSA2Ni41NzI2IDMwLjg5NjIgNjYuNTA4OCAzMC44Nzc5TDY2LjUwMiAyOS44NTI1QzY2LjUzODQgMjkuODU3MSA2Ni41OTU0IDI5Ljg2MTcgNjYuNjcyOSAyOS44NjYyQzY2Ljc1NDkgMjkuODc1MyA2Ni44MTE4IDI5Ljg3OTkgNjYuODQzOCAyOS44Nzk5QzY3LjEzMDkgMjkuODc5OSA2Ny4zNzQ3IDI5Ljg0MTEgNjcuNTc1MiAyOS43NjM3QzY3Ljc3NTcgMjkuNjkwOCA2Ny45NDQzIDI5LjU2NTQgNjguMDgxMSAyOS4zODc3QzY4LjIyMjMgMjkuMjE0NSA2OC4zNDMxIDI4Ljk3NTMgNjguNDQzNCAyOC42Njk5TDY4Ljk2OTcgMjcuMjM0NFpNNjcuNDU5IDIwLjYwMzVMNjkuMzc5OSAyNi4zNDU3TDY5LjcwOCAyNy42Nzg3TDY4Ljc5ODggMjguMTQzNkw2Ni4wNzgxIDIwLjYwMzVINjcuNDU5Wk03My4wNzgxIDI0LjM4MzhWMjQuMjI2NkM3My4wNzgxIDIzLjY5MzQgNzMuMTU1NiAyMy4xOTg5IDczLjMxMDUgMjIuNzQzMkM3My40NjU1IDIyLjI4MjkgNzMuNjg4OCAyMS44ODQxIDczLjk4MDUgMjEuNTQ2OUM3NC4yNzIxIDIxLjIwNTEgNzQuNjI1MyAyMC45NDA4IDc1LjA0IDIwLjc1MzlDNzUuNDU0OCAyMC41NjI1IDc1LjkxOTYgMjAuNDY2OCA3Ni40MzQ2IDIwLjQ2NjhDNzYuOTU0MSAyMC40NjY4IDc3LjQyMTIgMjAuNTYyNSA3Ny44MzU5IDIwLjc1MzlDNzguMjU1MiAyMC45NDA4IDc4LjYxMDcgMjEuMjA1MSA3OC45MDIzIDIxLjU0NjlDNzkuMTk4NiAyMS44ODQxIDc5LjQyNDIgMjIuMjgyOSA3OS41NzkxIDIyLjc0MzJDNzkuNzM0IDIzLjE5ODkgNzkuODExNSAyMy42OTM0IDc5LjgxMTUgMjQuMjI2NlYyNC4zODM4Qzc5LjgxMTUgMjQuOTE3IDc5LjczNCAyNS40MTE1IDc5LjU3OTEgMjUuODY3MkM3OS40MjQyIDI2LjMyMjkgNzkuMTk4NiAyNi43MjE3IDc4LjkwMjMgMjcuMDYzNUM3OC42MTA3IDI3LjQwMDcgNzguMjU3NSAyNy42NjUgNzcuODQyOCAyNy44NTY0Qzc3LjQzMjYgMjguMDQzMyA3Ni45Njc4IDI4LjEzNjcgNzYuNDQ4MiAyOC4xMzY3Qzc1LjkyODcgMjguMTM2NyA3NS40NjE2IDI4LjA0MzMgNzUuMDQ2OSAyNy44NTY0Qzc0LjYzMjIgMjcuNjY1IDc0LjI3NjcgMjcuNDAwNyA3My45ODA1IDI3LjA2MzVDNzMuNjg4OCAyNi43MjE3IDczLjQ2NTUgMjYuMzIyOSA3My4zMTA1IDI1Ljg2NzJDNzMuMTU1NiAyNS40MTE1IDczLjA3ODEgMjQuOTE3IDczLjA3ODEgMjQuMzgzOFpNNzQuMzQyOCAyNC4yMjY2VjI0LjM4MzhDNzQuMzQyOCAyNC43NTI5IDc0LjM4NjEgMjUuMTAxNiA3NC40NzI3IDI1LjQyOTdDNzQuNTU5MiAyNS43NTMzIDc0LjY4OTEgMjYuMDQwNCA3NC44NjIzIDI2LjI5MUM3NS4wNCAyNi41NDE3IDc1LjI2MTEgMjYuNzM5OSA3NS41MjU0IDI2Ljg4NTdDNzUuNzg5NyAyNy4wMjcgNzYuMDk3MyAyNy4wOTc3IDc2LjQ0ODIgMjcuMDk3N0M3Ni43OTQ2IDI3LjA5NzcgNzcuMDk3NyAyNy4wMjcgNzcuMzU3NCAyNi44ODU3Qzc3LjYyMTcgMjYuNzM5OSA3Ny44NDA1IDI2LjU0MTcgNzguMDEzNyAyNi4yOTFDNzguMTg2OCAyNi4wNDA0IDc4LjMxNjcgMjUuNzUzMyA3OC40MDMzIDI1LjQyOTdDNzguNDk0NSAyNS4xMDE2IDc4LjU0IDI0Ljc1MjkgNzguNTQgMjQuMzgzOFYyNC4yMjY2Qzc4LjU0IDIzLjg2MiA3OC40OTQ1IDIzLjUxNzkgNzguNDAzMyAyMy4xOTQzQzc4LjMxNjcgMjIuODY2MiA3OC4xODQ2IDIyLjU3NjggNzguMDA2OCAyMi4zMjYyQzc3LjgzMzcgMjIuMDcxIDc3LjYxNDkgMjEuODcwNCA3Ny4zNTA2IDIxLjcyNDZDNzcuMDkwOCAyMS41Nzg4IDc2Ljc4NTUgMjEuNTA1OSA3Ni40MzQ2IDIxLjUwNTlDNzYuMDg4MiAyMS41MDU5IDc1Ljc4MjkgMjEuNTc4OCA3NS41MTg2IDIxLjcyNDZDNzUuMjU4OCAyMS44NzA0IDc1LjA0IDIyLjA3MSA3NC44NjIzIDIyLjMyNjJDNzQuNjg5MSAyMi41NzY4IDc0LjU1OTIgMjIuODY2MiA3NC40NzI3IDIzLjE5NDNDNzQuMzg2MSAyMy41MTc5IDc0LjM0MjggMjMuODYyIDc0LjM0MjggMjQuMjI2NlpNODUuOTIyOSAyNi4yOTFWMjAuNjAzNUg4Ny4xOTQzVjI4SDg1Ljk4NDRMODUuOTIyOSAyNi4yOTFaTTg2LjE2MjEgMjQuNzMyNEw4Ni42ODg1IDI0LjcxODhDODYuNjg4NSAyNS4yMTA5IDg2LjYzNjEgMjUuNjY2NyA4Ni41MzEyIDI2LjA4NTlDODYuNDMxIDI2LjUwMDcgODYuMjY2OSAyNi44NjA3IDg2LjAzOTEgMjcuMTY2Qzg1LjgxMTIgMjcuNDcxNCA4NS41MTI3IDI3LjcxMDYgODUuMTQzNiAyNy44ODM4Qzg0Ljc3NDQgMjguMDUyNCA4NC4zMjU1IDI4LjEzNjcgODMuNzk2OSAyOC4xMzY3QzgzLjQzNjggMjguMTM2NyA4My4xMDY0IDI4LjA4NDMgODIuODA1NyAyNy45Nzk1QzgyLjUwOTQgMjcuODc0NyA4Mi4yNTQyIDI3LjcxMjkgODIuMDQgMjcuNDk0MUM4MS44MjU4IDI3LjI3NTQgODEuNjU5NSAyNi45OTA2IDgxLjU0MSAyNi42Mzk2QzgxLjQyNzEgMjYuMjg4NyA4MS4zNzAxIDI1Ljg2NzIgODEuMzcwMSAyNS4zNzVWMjAuNjAzNUg4Mi42MzQ4VjI1LjM4ODdDODIuNjM0OCAyNS43MjE0IDgyLjY3MTIgMjUuOTk3MSA4Mi43NDQxIDI2LjIxNThDODIuODIxNiAyNi40MyA4Mi45MjQyIDI2LjYwMDkgODMuMDUxOCAyNi43Mjg1QzgzLjE4MzkgMjYuODUxNiA4My4zMjk4IDI2LjkzODIgODMuNDg5MyAyNi45ODgzQzgzLjY1MzMgMjcuMDM4NCA4My44MjE5IDI3LjA2MzUgODMuOTk1MSAyNy4wNjM1Qzg0LjUzMjkgMjcuMDYzNSA4NC45NTkgMjYuOTYwOSA4NS4yNzM0IDI2Ljc1NTlDODUuNTg3OSAyNi41NDYyIDg1LjgxMzUgMjYuMjY2IDg1Ljk1MDIgMjUuOTE1Qzg2LjA5MTUgMjUuNTU5NiA4Ni4xNjIxIDI1LjE2NTQgODYuMTYyMSAyNC43MzI0Wk05MC4zODY3IDIxLjc2NTZWMjhIODkuMTIyMVYyMC42MDM1SDkwLjM1MjVMOTAuMzg2NyAyMS43NjU2Wk05Mi42OTczIDIwLjU2MjVMOTIuNjkwNCAyMS43MzgzQzkyLjU4NTYgMjEuNzE1NSA5Mi40ODU0IDIxLjcwMTggOTIuMzg5NiAyMS42OTczQzkyLjI5ODUgMjEuNjg4MiA5Mi4xOTM3IDIxLjY4MzYgOTIuMDc1MiAyMS42ODM2QzkxLjc4MzUgMjEuNjgzNiA5MS41MjYgMjEuNzI5MiA5MS4zMDI3IDIxLjgyMDNDOTEuMDc5NCAyMS45MTE1IDkwLjg5MDMgMjIuMDM5MSA5MC43MzU0IDIyLjIwMzFDOTAuNTgwNCAyMi4zNjcyIDkwLjQ1NzQgMjIuNTYzMiA5MC4zNjYyIDIyLjc5MUM5MC4yNzk2IDIzLjAxNDMgOTAuMjIyNyAyMy4yNjA0IDkwLjE5NTMgMjMuNTI5M0w4OS44Mzk4IDIzLjczNDRDODkuODM5OCAyMy4yODc4IDg5Ljg4MzEgMjIuODY4NSA4OS45Njk3IDIyLjQ3NjZDOTAuMDYwOSAyMi4wODQ2IDkwLjE5OTkgMjEuNzM4MyA5MC4zODY3IDIxLjQzNzVDOTAuNTczNiAyMS4xMzIyIDkwLjgxMDUgMjAuODk1MiA5MS4wOTc3IDIwLjcyNjZDOTEuMzg5MyAyMC41NTM0IDkxLjczNTcgMjAuNDY2OCA5Mi4xMzY3IDIwLjQ2NjhDOTIuMjI3OSAyMC40NjY4IDkyLjMzMjcgMjAuNDc4MiA5Mi40NTEyIDIwLjUwMUM5Mi41Njk3IDIwLjUxOTIgOTIuNjUxNyAyMC41Mzk3IDkyLjY5NzMgMjAuNTYyNVpNMTAxLjY0NiAyNi4wMzgxQzEwMS42NDYgMjUuODU1OCAxMDEuNjA0IDI1LjY4NzIgMTAxLjUyMiAyNS41MzIyQzEwMS40NDUgMjUuMzcyNyAxMDEuMjgzIDI1LjIyOTIgMTAxLjAzNyAyNS4xMDE2QzEwMC43OTYgMjQuOTY5NCAxMDAuNDMxIDI0Ljg1NTUgOTkuOTQzNCAyNC43NTk4Qzk5LjUzMzIgMjQuNjczMiA5OS4xNjE4IDI0LjU3MDYgOTguODI5MSAyNC40NTIxQzk4LjUwMSAyNC4zMzM3IDk4LjIyMDcgMjQuMTkwMSA5Ny45ODgzIDI0LjAyMTVDOTcuNzYwNCAyMy44NTI5IDk3LjU4NSAyMy42NTQ2IDk3LjQ2MTkgMjMuNDI2OEM5Ny4zMzg5IDIzLjE5ODkgOTcuMjc3MyAyMi45MzIzIDk3LjI3NzMgMjIuNjI3Qzk3LjI3NzMgMjIuMzM1MyA5Ny4zNDExIDIyLjA1OTYgOTcuNDY4OCAyMS43OTk4Qzk3LjYwMDkgMjEuNTQgOTcuNzg1NSAyMS4zMDk5IDk4LjAyMjUgMjEuMTA5NEM5OC4yNjQgMjAuOTA4OSA5OC41NTM0IDIwLjc1MTYgOTguODkwNiAyMC42Mzc3Qzk5LjIyNzkgMjAuNTIzOCA5OS42MDM4IDIwLjQ2NjggMTAwLjAxOSAyMC40NjY4QzEwMC42MTEgMjAuNDY2OCAxMDEuMTE3IDIwLjU3MTYgMTAxLjUzNiAyMC43ODEyQzEwMS45NTUgMjAuOTkwOSAxMDIuMjc3IDIxLjI3MTIgMTAyLjUgMjEuNjIyMUMxMDIuNzIzIDIxLjk2ODQgMTAyLjgzNSAyMi4zNTM1IDEwMi44MzUgMjIuNzc3M0gxMDEuNTdDMTAxLjU3IDIyLjU3MjMgMTAxLjUwOSAyMi4zNzQgMTAxLjM4NiAyMi4xODI2QzEwMS4yNjcgMjEuOTg2NyAxMDEuMDkyIDIxLjgyNDkgMTAwLjg1OSAyMS42OTczQzEwMC42MzIgMjEuNTY5NyAxMDAuMzUxIDIxLjUwNTkgMTAwLjAxOSAyMS41MDU5Qzk5LjY2NzYgMjEuNTA1OSA5OS4zODI4IDIxLjU2MDUgOTkuMTY0MSAyMS42Njk5Qzk4Ljk0OTkgMjEuNzc0NyA5OC43OTI2IDIxLjkwOTIgOTguNjkyNCAyMi4wNzMyQzk4LjU5NjcgMjIuMjM3MyA5OC41NDg4IDIyLjQxMDUgOTguNTQ4OCAyMi41OTI4Qzk4LjU0ODggMjIuNzI5NSA5OC41NzE2IDIyLjg1MjUgOTguNjE3MiAyMi45NjE5Qzk4LjY2NzMgMjMuMDY2NyA5OC43NTM5IDIzLjE2NDcgOTguODc3IDIzLjI1NTlDOTkgMjMuMzQyNCA5OS4xNzMyIDIzLjQyNDUgOTkuMzk2NSAyMy41MDJDOTkuNjE5OCAyMy41Nzk0IDk5LjkwNDYgMjMuNjU2OSAxMDAuMjUxIDIzLjczNDRDMTAwLjg1NyAyMy44NzExIDEwMS4zNTYgMjQuMDM1MiAxMDEuNzQ4IDI0LjIyNjZDMTAyLjE0IDI0LjQxOCAxMDIuNDMyIDI0LjY1MjcgMTAyLjYyMyAyNC45MzA3QzEwMi44MTQgMjUuMjA4NyAxMDIuOTEgMjUuNTQ1OSAxMDIuOTEgMjUuOTQyNEMxMDIuOTEgMjYuMjY2IDEwMi44NDIgMjYuNTYyMiAxMDIuNzA1IDI2LjgzMTFDMTAyLjU3MyAyNy4wOTk5IDEwMi4zNzkgMjcuMzMyNCAxMDIuMTI0IDI3LjUyODNDMTAxLjg3MyAyNy43MTk3IDEwMS41NzMgMjcuODcwMSAxMDEuMjIyIDI3Ljk3OTVDMTAwLjg3NSAyOC4wODQzIDEwMC40ODYgMjguMTM2NyAxMDAuMDUzIDI4LjEzNjdDOTkuNDAxIDI4LjEzNjcgOTguODQ5NiAyOC4wMjA1IDk4LjM5ODQgMjcuNzg4MUM5Ny45NDczIDI3LjU1NTcgOTcuNjA1NSAyNy4yNTQ5IDk3LjM3MyAyNi44ODU3Qzk3LjE0MDYgMjYuNTE2NiA5Ny4wMjQ0IDI2LjEyNyA5Ny4wMjQ0IDI1LjcxNjhIOTguMjk1OUM5OC4zMTQxIDI2LjA2MzIgOTguNDE0NCAyNi4zMzg5IDk4LjU5NjcgMjYuNTQzOUM5OC43NzkgMjYuNzQ0NSA5OS4wMDIzIDI2Ljg4OCA5OS4yNjY2IDI2Ljk3NDZDOTkuNTMwOSAyNy4wNTY2IDk5Ljc5MyAyNy4wOTc3IDEwMC4wNTMgMjcuMDk3N0MxMDAuMzk5IDI3LjA5NzcgMTAwLjY4OCAyNy4wNTIxIDEwMC45MjEgMjYuOTYwOUMxMDEuMTU4IDI2Ljg2OTggMTAxLjMzOCAyNi43NDQ1IDEwMS40NjEgMjYuNTg1QzEwMS41ODQgMjYuNDI1NSAxMDEuNjQ2IDI2LjI0MzIgMTAxLjY0NiAyNi4wMzgxWk0xMDcuNjY4IDIwLjYwMzVWMjEuNTc0MkgxMDMuNjY5VjIwLjYwMzVIMTA3LjY2OFpNMTA1LjAyMiAxOC44MDU3SDEwNi4yODdWMjYuMTY4QzEwNi4yODcgMjYuNDE4NiAxMDYuMzI2IDI2LjYwNzcgMTA2LjQwMyAyNi43MzU0QzEwNi40ODEgMjYuODYzIDEwNi41ODEgMjYuOTQ3MyAxMDYuNzA0IDI2Ljk4ODNDMTA2LjgyNyAyNy4wMjkzIDEwNi45NTkgMjcuMDQ5OCAxMDcuMTAxIDI3LjA0OThDMTA3LjIwNSAyNy4wNDk4IDEwNy4zMTUgMjcuMDQwNyAxMDcuNDI5IDI3LjAyMjVDMTA3LjU0NyAyNi45OTk3IDEwNy42MzYgMjYuOTgxNCAxMDcuNjk1IDI2Ljk2NzhMMTA3LjcwMiAyOEMxMDcuNjAyIDI4LjAzMTkgMTA3LjQ3IDI4LjA2MTUgMTA3LjMwNiAyOC4wODg5QzEwNy4xNDYgMjguMTIwOCAxMDYuOTUyIDI4LjEzNjcgMTA2LjcyNSAyOC4xMzY3QzEwNi40MTUgMjguMTM2NyAxMDYuMTMgMjguMDc1MiAxMDUuODcgMjcuOTUyMUMxMDUuNjEgMjcuODI5MSAxMDUuNDAzIDI3LjYyNCAxMDUuMjQ4IDI3LjMzNjlDMTA1LjA5OCAyNy4wNDUyIDEwNS4wMjIgMjYuNjUzMyAxMDUuMDIyIDI2LjE2MTFWMTguODA1N1pNMTEzLjUxMyAyNi43MzU0VjIyLjkyNzdDMTEzLjUxMyAyMi42MzYxIDExMy40NTMgMjIuMzgzMSAxMTMuMzM1IDIyLjE2ODlDMTEzLjIyMSAyMS45NTAyIDExMy4wNDggMjEuNzgxNiAxMTIuODE1IDIxLjY2MzFDMTEyLjU4MyAyMS41NDQ2IDExMi4yOTYgMjEuNDg1NCAxMTEuOTU0IDIxLjQ4NTRDMTExLjYzNSAyMS40ODU0IDExMS4zNTUgMjEuNTQgMTExLjExMyAyMS42NDk0QzExMC44NzYgMjEuNzU4OCAxMTAuNjg5IDIxLjkwMjMgMTEwLjU1MyAyMi4wODAxQzExMC40MjEgMjIuMjU3OCAxMTAuMzU0IDIyLjQ0OTIgMTEwLjM1NCAyMi42NTQzSDEwOS4wOUMxMDkuMDkgMjIuMzkgMTA5LjE1OCAyMi4xMjc5IDEwOS4yOTUgMjEuODY4MkMxMDkuNDMyIDIxLjYwODQgMTA5LjYyOCAyMS4zNzM3IDEwOS44ODMgMjEuMTY0MUMxMTAuMTQzIDIwLjk0OTkgMTEwLjQ1MiAyMC43ODEyIDExMC44MTIgMjAuNjU4MkMxMTEuMTc3IDIwLjUzMDYgMTExLjU4MyAyMC40NjY4IDExMi4wMjkgMjAuNDY2OEMxMTIuNTY3IDIwLjQ2NjggMTEzLjA0MSAyMC41NTc5IDExMy40NTEgMjAuNzQwMkMxMTMuODY2IDIwLjkyMjUgMTE0LjE4OSAyMS4xOTgyIDExNC40MjIgMjEuNTY3NEMxMTQuNjU5IDIxLjkzMiAxMTQuNzc3IDIyLjM5IDExNC43NzcgMjIuOTQxNFYyNi4zODY3QzExNC43NzcgMjYuNjMyOCAxMTQuNzk4IDI2Ljg5NDkgMTE0LjgzOSAyNy4xNzI5QzExNC44ODQgMjcuNDUwOCAxMTQuOTUxIDI3LjY5MDEgMTE1LjAzNyAyNy44OTA2VjI4SDExMy43MThDMTEzLjY1NCAyNy44NTQyIDExMy42MDQgMjcuNjYwNSAxMTMuNTY3IDI3LjQxODlDMTEzLjUzMSAyNy4xNzI5IDExMy41MTMgMjYuOTQ1IDExMy41MTMgMjYuNzM1NFpNMTEzLjczMSAyMy41MTU2TDExMy43NDUgMjQuNDA0M0gxMTIuNDY3QzExMi4xMDcgMjQuNDA0MyAxMTEuNzg1IDI0LjQzMzkgMTExLjUwMyAyNC40OTMyQzExMS4yMiAyNC41NDc5IDExMC45ODMgMjQuNjMyMiAxMTAuNzkyIDI0Ljc0NjFDMTEwLjYwMSAyNC44NiAxMTAuNDU1IDI1LjAwMzYgMTEwLjM1NCAyNS4xNzY4QzExMC4yNTQgMjUuMzQ1NCAxMTAuMjA0IDI1LjU0MzYgMTEwLjIwNCAyNS43NzE1QzExMC4yMDQgMjYuMDAzOSAxMTAuMjU3IDI2LjIxNTggMTEwLjM2MSAyNi40MDcyQzExMC40NjYgMjYuNTk4NiAxMTAuNjIzIDI2Ljc1MTMgMTEwLjgzMyAyNi44NjUyQzExMS4wNDcgMjYuOTc0NiAxMTEuMzA5IDI3LjAyOTMgMTExLjYxOSAyNy4wMjkzQzExMi4wMDcgMjcuMDI5MyAxMTIuMzQ4IDI2Ljk0NzMgMTEyLjY0NSAyNi43ODMyQzExMi45NDEgMjYuNjE5MSAxMTMuMTc1IDI2LjQxODYgMTEzLjM0OSAyNi4xODE2QzExMy41MjYgMjUuOTQ0NyAxMTMuNjIyIDI1LjcxNDUgMTEzLjYzNiAyNS40OTEyTDExNC4xNzYgMjYuMDk5NkMxMTQuMTQ0IDI2LjI5MSAxMTQuMDU3IDI2LjUwMjkgMTEzLjkxNiAyNi43MzU0QzExMy43NzUgMjYuOTY3OCAxMTMuNTg2IDI3LjE5MTEgMTEzLjM0OSAyNy40MDUzQzExMy4xMTYgMjcuNjE0OSAxMTIuODM4IDI3Ljc5MDQgMTEyLjUxNSAyNy45MzE2QzExMi4xOTYgMjguMDY4NCAxMTEuODM2IDI4LjEzNjcgMTExLjQzNSAyOC4xMzY3QzExMC45MzMgMjguMTM2NyAxMTAuNDkzIDI4LjAzODcgMTEwLjExNSAyNy44NDI4QzEwOS43NDIgMjcuNjQ2OCAxMDkuNDUgMjcuMzg0OCAxMDkuMjQgMjcuMDU2NkMxMDkuMDM1IDI2LjcyNCAxMDguOTMzIDI2LjM1MjUgMTA4LjkzMyAyNS45NDI0QzEwOC45MzMgMjUuNTQ1OSAxMDkuMDEgMjUuMTk3MyAxMDkuMTY1IDI0Ljg5NjVDMTA5LjMyIDI0LjU5MTEgMTA5LjU0MyAyNC4zMzgyIDEwOS44MzUgMjQuMTM3N0MxMTAuMTI3IDIzLjkzMjYgMTEwLjQ3OCAyMy43Nzc3IDExMC44ODggMjMuNjcyOUMxMTEuMjk4IDIzLjU2OCAxMTEuNzU2IDIzLjUxNTYgMTEyLjI2MiAyMy41MTU2SDExMy43MzFaTTExOC43MzUgMjcuMjM0NEwxMjAuNzkzIDIwLjYwMzVIMTIyLjE0NkwxMTkuMTggMjkuMTQxNkMxMTkuMTExIDI5LjMyMzkgMTE5LjAyIDI5LjUxOTkgMTE4LjkwNiAyOS43Mjk1QzExOC43OTcgMjkuOTQzNyAxMTguNjU2IDMwLjE0NjUgMTE4LjQ4MiAzMC4zMzc5QzExOC4zMDkgMzAuNTI5MyAxMTguMSAzMC42ODQyIDExNy44NTQgMzAuODAyN0MxMTcuNjEyIDMwLjkyNTggMTE3LjMyMyAzMC45ODczIDExNi45ODUgMzAuOTg3M0MxMTYuODg1IDMwLjk4NzMgMTE2Ljc1NyAzMC45NzM2IDExNi42MDMgMzAuOTQ2M0MxMTYuNDQ4IDMwLjkxODkgMTE2LjMzOCAzMC44OTYyIDExNi4yNzQgMzAuODc3OUwxMTYuMjY4IDI5Ljg1MjVDMTE2LjMwNCAyOS44NTcxIDExNi4zNjEgMjkuODYxNyAxMTYuNDM4IDI5Ljg2NjJDMTE2LjUyMSAyOS44NzUzIDExNi41NzcgMjkuODc5OSAxMTYuNjA5IDI5Ljg3OTlDMTE2Ljg5NiAyOS44Nzk5IDExNy4xNCAyOS44NDExIDExNy4zNDEgMjkuNzYzN0MxMTcuNTQxIDI5LjY5MDggMTE3LjcxIDI5LjU2NTQgMTE3Ljg0NyAyOS4zODc3QzExNy45ODggMjkuMjE0NSAxMTguMTA5IDI4Ljk3NTMgMTE4LjIwOSAyOC42Njk5TDExOC43MzUgMjcuMjM0NFpNMTE3LjIyNSAyMC42MDM1TDExOS4xNDYgMjYuMzQ1N0wxMTkuNDc0IDI3LjY3ODdMMTE4LjU2NCAyOC4xNDM2TDExNS44NDQgMjAuNjAzNUgxMTcuMjI1WlwiIGZpbGw9XCIjNjQ3NDhCXCIvPlxuXHRcdDxyZWN0IHg9XCIxNlwiIHk9XCIzN1wiIHdpZHRoPVwiMjY2XCIgaGVpZ2h0PVwiMjhcIiByeD1cIjNcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0PHBhdGggZD1cIk0yOS40OTQxIDQ3LjA3NjdMMjYuNDM0NiA1NS41SDI1LjE4NDFMMjguNzA3IDQ2LjI1NzhIMjkuNTEzMkwyOS40OTQxIDQ3LjA3NjdaTTMyLjA1ODYgNTUuNUwyOC45OTI3IDQ3LjA3NjdMMjguOTczNiA0Ni4yNTc4SDI5Ljc3OThMMzMuMzE1NCA1NS41SDMyLjA1ODZaTTMxLjg5OTkgNTIuMDc4NlY1My4wODE1SDI2LjcwNzVWNTIuMDc4NkgzMS44OTk5Wk0zNy4xMzY3IDQ4LjYzMThWNDkuNTMzMkgzMy40MjMzVjQ4LjYzMThIMzcuMTM2N1pNMzQuNjgwMiA0Ni45NjI0SDM1Ljg1NDVWNTMuNzk4OEMzNS44NTQ1IDU0LjAzMTYgMzUuODkwNSA1NC4yMDcyIDM1Ljk2MjQgNTQuMzI1N0MzNi4wMzQzIDU0LjQ0NDIgMzYuMTI3NCA1NC41MjI1IDM2LjI0MTcgNTQuNTYwNUMzNi4zNTYgNTQuNTk4NiAzNi40Nzg3IDU0LjYxNzcgMzYuNjA5OSA1NC42MTc3QzM2LjcwNzIgNTQuNjE3NyAzNi44MDg4IDU0LjYwOTIgMzYuOTE0NiA1NC41OTIzQzM3LjAyNDYgNTQuNTcxMSAzNy4xMDcxIDU0LjU1NDIgMzcuMTYyMSA1NC41NDE1TDM3LjE2ODUgNTUuNUMzNy4wNzU0IDU1LjUyOTYgMzYuOTUyNiA1NS41NTcxIDM2LjgwMDMgNTUuNTgyNUMzNi42NTIyIDU1LjYxMjEgMzYuNDcyMyA1NS42MjcgMzYuMjYwNyA1NS42MjdDMzUuOTczIDU1LjYyNyAzNS43MDg1IDU1LjU2OTggMzUuNDY3MyA1NS40NTU2QzM1LjIyNjEgNTUuMzQxMyAzNS4wMzM1IDU1LjE1MDkgMzQuODg5NiA1NC44ODQzQzM0Ljc1IDU0LjYxMzQgMzQuNjgwMiA1NC4yNDk1IDM0LjY4MDIgNTMuNzkyNVY0Ni45NjI0Wk00NC42MTQzIDQ4LjYzMThWNDkuNTMzMkg0MC45MDA5VjQ4LjYzMThINDQuNjE0M1pNNDIuMTU3NyA0Ni45NjI0SDQzLjMzMlY1My43OTg4QzQzLjMzMiA1NC4wMzE2IDQzLjM2OCA1NC4yMDcyIDQzLjQzOTkgNTQuMzI1N0M0My41MTE5IDU0LjQ0NDIgNDMuNjA1IDU0LjUyMjUgNDMuNzE5MiA1NC41NjA1QzQzLjgzMzUgNTQuNTk4NiA0My45NTYyIDU0LjYxNzcgNDQuMDg3NCA1NC42MTc3QzQ0LjE4NDcgNTQuNjE3NyA0NC4yODYzIDU0LjYwOTIgNDQuMzkyMSA1NC41OTIzQzQ0LjUwMjEgNTQuNTcxMSA0NC41ODQ2IDU0LjU1NDIgNDQuNjM5NiA1NC41NDE1TDQ0LjY0NiA1NS41QzQ0LjU1MjkgNTUuNTI5NiA0NC40MzAyIDU1LjU1NzEgNDQuMjc3OCA1NS41ODI1QzQ0LjEyOTcgNTUuNjEyMSA0My45NDk5IDU1LjYyNyA0My43MzgzIDU1LjYyN0M0My40NTA1IDU1LjYyNyA0My4xODYgNTUuNTY5OCA0Mi45NDQ4IDU1LjQ1NTZDNDIuNzAzNiA1NS4zNDEzIDQyLjUxMTEgNTUuMTUwOSA0Mi4zNjcyIDU0Ljg4NDNDNDIuMjI3NSA1NC42MTM0IDQyLjE1NzcgNTQuMjQ5NSA0Mi4xNTc3IDUzLjc5MjVWNDYuOTYyNFpNNDcuMTY2IDQ1Ljc1VjU1LjVINDUuOTkxN1Y0NS43NUg0Ny4xNjZaTTQ2Ljg4NjcgNTEuODA1N0w0Ni4zOTc5IDUxLjc4NjZDNDYuNDAyMiA1MS4zMTY5IDQ2LjQ3MiA1MC44ODMxIDQ2LjYwNzQgNTAuNDg1NEM0Ni43NDI4IDUwLjA4MzMgNDYuOTMzMyA0OS43MzQyIDQ3LjE3ODcgNDkuNDM4QzQ3LjQyNDIgNDkuMTQxOCA0Ny43MTYxIDQ4LjkxMzIgNDguMDU0NyA0OC43NTI0QzQ4LjM5NzUgNDguNTg3NCA0OC43NzYyIDQ4LjUwNDkgNDkuMTkwOSA0OC41MDQ5QzQ5LjUyOTUgNDguNTA0OSA0OS44MzQxIDQ4LjU1MTQgNTAuMTA1IDQ4LjY0NDVDNTAuMzc1OCA0OC43MzM0IDUwLjYwNjQgNDguODc3MyA1MC43OTY5IDQ5LjA3NjJDNTAuOTkxNSA0OS4yNzUxIDUxLjEzOTYgNDkuNTMzMiA1MS4yNDEyIDQ5Ljg1MDZDNTEuMzQyOCA1MC4xNjM3IDUxLjM5MzYgNTAuNTQ2NyA1MS4zOTM2IDUwLjk5OTVWNTUuNUg1MC4yMTI5VjUwLjk4NjhDNTAuMjEyOSA1MC42MjcxIDUwLjE2IDUwLjMzOTQgNTAuMDU0MiA1MC4xMjM1QzQ5Ljk0ODQgNDkuOTAzNSA0OS43OTM5IDQ5Ljc0NDggNDkuNTkwOCA0OS42NDc1QzQ5LjM4NzcgNDkuNTQ1OSA0OS4xMzggNDkuNDk1MSA0OC44NDE4IDQ5LjQ5NTFDNDguNTQ5OCA0OS40OTUxIDQ4LjI4MzIgNDkuNTU2NSA0OC4wNDIgNDkuNjc5MkM0Ny44MDUgNDkuODAxOSA0Ny41OTk4IDQ5Ljk3MTIgNDcuNDI2MyA1MC4xODdDNDcuMjU3IDUwLjQwMjggNDcuMTIzNyA1MC42NTA0IDQ3LjAyNjQgNTAuOTI5N0M0Ni45MzMzIDUxLjIwNDggNDYuODg2NyA1MS40OTY3IDQ2Ljg4NjcgNTEuODA1N1pNNTYuMDAyIDU1LjYyN0M1NS41MjM4IDU1LjYyNyA1NS4wOSA1NS41NDY1IDU0LjcwMDcgNTUuMzg1N0M1NC4zMTU2IDU1LjIyMDcgNTMuOTgzNCA1NC45OTAxIDUzLjcwNDEgNTQuNjkzOEM1My40MjkgNTQuMzk3NiA1My4yMTc0IDU0LjA0NjQgNTMuMDY5MyA1My42NDAxQzUyLjkyMTIgNTMuMjMzOSA1Mi44NDcyIDUyLjc4OTYgNTIuODQ3MiA1Mi4zMDcxVjUyLjA0MDVDNTIuODQ3MiA1MS40ODE5IDUyLjkyOTcgNTAuOTg0NyA1My4wOTQ3IDUwLjU0ODhDNTMuMjU5OCA1MC4xMDg3IDUzLjQ4NCA0OS43MzYzIDUzLjc2NzYgNDkuNDMxNkM1NC4wNTExIDQ5LjEyNyA1NC4zNzI3IDQ4Ljg5NjMgNTQuNzMyNCA0OC43Mzk3QzU1LjA5MjEgNDguNTgzMiA1NS40NjQ1IDQ4LjUwNDkgNTUuODQ5NiA0OC41MDQ5QzU2LjM0MDUgNDguNTA0OSA1Ni43NjM3IDQ4LjU4OTUgNTcuMTE5MSA0OC43NTg4QzU3LjQ3ODggNDguOTI4MSA1Ny43NzI5IDQ5LjE2NSA1OC4wMDE1IDQ5LjQ2OTdDNTguMjMgNDkuNzcwMiA1OC4zOTkzIDUwLjEyNTcgNTguNTA5MyA1MC41MzYxQzU4LjYxOTMgNTAuOTQyNCA1OC42NzQzIDUxLjM4NjcgNTguNjc0MyA1MS44NjkxVjUyLjM5Nkg1My41NDU0VjUxLjQzNzVINTcuNVY1MS4zNDg2QzU3LjQ4MzEgNTEuMDQzOSA1Ny40MTk2IDUwLjc0NzcgNTcuMzA5NiA1MC40NkM1Ny4yMDM4IDUwLjE3MjIgNTcuMDM0NSA0OS45MzUyIDU2LjgwMTggNDkuNzQ5QzU2LjU2OSA0OS41NjI4IDU2LjI1MTYgNDkuNDY5NyA1NS44NDk2IDQ5LjQ2OTdDNTUuNTgzIDQ5LjQ2OTcgNTUuMzM3NiA0OS41MjY5IDU1LjExMzMgNDkuNjQxMUM1NC44ODkgNDkuNzUxMSA1NC42OTY1IDQ5LjkxNjIgNTQuNTM1NiA1MC4xMzYyQzU0LjM3NDggNTAuMzU2MyA1NC4yNSA1MC42MjUgNTQuMTYxMSA1MC45NDI0QzU0LjA3MjMgNTEuMjU5OCA1NC4wMjc4IDUxLjYyNTggNTQuMDI3OCA1Mi4wNDA1VjUyLjMwNzFDNTQuMDI3OCA1Mi42MzMgNTQuMDcyMyA1Mi45Mzk4IDU0LjE2MTEgNTMuMjI3NUM1NC4yNTQyIDUzLjUxMTEgNTQuMzg3NSA1My43NjA3IDU0LjU2MSA1My45NzY2QzU0LjczODggNTQuMTkyNCA1NC45NTI1IDU0LjM2MTcgNTUuMjAyMSA1NC40ODQ0QzU1LjQ1NjEgNTQuNjA3MSA1NS43NDM4IDU0LjY2ODUgNTYuMDY1NCA1NC42Njg1QzU2LjQ4MDEgNTQuNjY4NSA1Ni44MzE0IDU0LjU4MzggNTcuMTE5MSA1NC40MTQ2QzU3LjQwNjkgNTQuMjQ1MyA1Ny42NTg3IDU0LjAxODkgNTcuODc0NSA1My43MzU0TDU4LjU4NTQgNTQuMzAwM0M1OC40MzczIDU0LjUyNDYgNTguMjQ5IDU0LjczODMgNTguMDIwNSA1NC45NDE0QzU3Ljc5MiA1NS4xNDQ1IDU3LjUxMDYgNTUuMzA5NiA1Ny4xNzYzIDU1LjQzNjVDNTYuODQ2MiA1NS41NjM1IDU2LjQ1NDggNTUuNjI3IDU2LjAwMiA1NS42MjdaTTYzLjI2MzcgNDUuNzVINjQuNDQ0M1Y1NC4xNjdMNjQuMzQyOCA1NS41SDYzLjI2MzdWNDUuNzVaTTY5LjA4NDUgNTIuMDA4OFY1Mi4xNDIxQzY5LjA4NDUgNTIuNjQxNCA2OS4wMjUyIDUzLjEwNDggNjguOTA2NyA1My41MzIyQzY4Ljc4ODIgNTMuOTU1NCA2OC42MTQ3IDU0LjMyMzYgNjguMzg2MiA1NC42MzY3QzY4LjE1NzcgNTQuOTQ5OSA2Ny44Nzg0IDU1LjE5MzIgNjcuNTQ4MyA1NS4zNjY3QzY3LjIxODMgNTUuNTQwMiA2Ni44Mzk1IDU1LjYyNyA2Ni40MTIxIDU1LjYyN0M2NS45NzYyIDU1LjYyNyA2NS41OTMzIDU1LjU1MjkgNjUuMjYzMiA1NS40MDQ4QzY0LjkzNzMgNTUuMjUyNCA2NC42NjIzIDU1LjAzNDUgNjQuNDM4IDU0Ljc1MUM2NC4yMTM3IDU0LjQ2NzQgNjQuMDMzOSA1NC4xMjQ3IDYzLjg5ODQgNTMuNzIyN0M2My43NjczIDUzLjMyMDYgNjMuNjc2MyA1Mi44Njc4IDYzLjYyNTUgNTIuMzY0M1Y1MS43ODAzQzYzLjY3NjMgNTEuMjcyNSA2My43NjczIDUwLjgxNzUgNjMuODk4NCA1MC40MTU1QzY0LjAzMzkgNTAuMDEzNSA2NC4yMTM3IDQ5LjY3MDcgNjQuNDM4IDQ5LjM4NzJDNjQuNjYyMyA0OS4wOTk0IDY0LjkzNzMgNDguODgxNSA2NS4yNjMyIDQ4LjczMzRDNjUuNTg5IDQ4LjU4MTEgNjUuOTY3OCA0OC41MDQ5IDY2LjM5OTQgNDguNTA0OUM2Ni44MzExIDQ4LjUwNDkgNjcuMjE0IDQ4LjU4OTUgNjcuNTQ4MyA0OC43NTg4QzY3Ljg4MjYgNDguOTIzOCA2OC4xNjE5IDQ5LjE2MDggNjguMzg2MiA0OS40Njk3QzY4LjYxNDcgNDkuNzc4NiA2OC43ODgyIDUwLjE0ODkgNjguOTA2NyA1MC41ODA2QzY5LjAyNTIgNTEuMDA4IDY5LjA4NDUgNTEuNDg0IDY5LjA4NDUgNTIuMDA4OFpNNjcuOTAzOCA1Mi4xNDIxVjUyLjAwODhDNjcuOTAzOCA1MS42NjYgNjcuODcyMSA1MS4zNDQ0IDY3LjgwODYgNTEuMDQzOUM2Ny43NDUxIDUwLjczOTMgNjcuNjQzNiA1MC40NzI3IDY3LjUwMzkgNTAuMjQ0MUM2Ny4zNjQzIDUwLjAxMTQgNjcuMTgwMiA0OS44Mjk0IDY2Ljk1MTcgNDkuNjk4MkM2Ni43MjMxIDQ5LjU2MjggNjYuNDQxNyA0OS40OTUxIDY2LjEwNzQgNDkuNDk1MUM2NS44MTEyIDQ5LjQ5NTEgNjUuNTUzMSA0OS41NDU5IDY1LjMzMyA0OS42NDc1QzY1LjExNzIgNDkuNzQ5IDY0LjkzMzEgNDkuODg2NiA2NC43ODA4IDUwLjA2MDFDNjQuNjI4NCA1MC4yMjkzIDY0LjUwMzYgNTAuNDI0IDY0LjQwNjIgNTAuNjQ0QzY0LjMxMzIgNTAuODU5OSA2NC4yNDMzIDUxLjA4NDEgNjQuMTk2OCA1MS4zMTY5VjUyLjg0NjdDNjQuMjY0NSA1My4xNDI5IDY0LjM3NDUgNTMuNDI4NSA2NC41MjY5IDUzLjcwMzZDNjQuNjgzNCA1My45NzQ0IDY0Ljg5MDggNTQuMTk2NiA2NS4xNDg5IDU0LjM3MDFDNjUuNDExMyA1NC41NDM2IDY1LjczNSA1NC42MzA0IDY2LjEyMDEgNTQuNjMwNEM2Ni40Mzc1IDU0LjYzMDQgNjYuNzA4MyA1NC41NjY5IDY2LjkzMjYgNTQuNDM5OUM2Ny4xNjExIDU0LjMwODggNjcuMzQ1MiA1NC4xMjg5IDY3LjQ4NDkgNTMuOTAwNEM2Ny42Mjg3IDUzLjY3MTkgNjcuNzM0NSA1My40MDc0IDY3LjgwMjIgNTMuMTA2OUM2Ny44NyA1Mi44MDY1IDY3LjkwMzggNTIuNDg0OSA2Ny45MDM4IDUyLjE0MjFaTTczLjQxOTkgNTUuNjI3QzcyLjk0MTcgNTUuNjI3IDcyLjUwOCA1NS41NDY1IDcyLjExODcgNTUuMzg1N0M3MS43MzM2IDU1LjIyMDcgNzEuNDAxNCA1NC45OTAxIDcxLjEyMjEgNTQuNjkzOEM3MC44NDcgNTQuMzk3NiA3MC42MzU0IDU0LjA0NjQgNzAuNDg3MyA1My42NDAxQzcwLjMzOTIgNTMuMjMzOSA3MC4yNjUxIDUyLjc4OTYgNzAuMjY1MSA1Mi4zMDcxVjUyLjA0MDVDNzAuMjY1MSA1MS40ODE5IDcwLjM0NzcgNTAuOTg0NyA3MC41MTI3IDUwLjU0ODhDNzAuNjc3NyA1MC4xMDg3IDcwLjkwMiA0OS43MzYzIDcxLjE4NTUgNDkuNDMxNkM3MS40NjkxIDQ5LjEyNyA3MS43OTA3IDQ4Ljg5NjMgNzIuMTUwNCA0OC43Mzk3QzcyLjUxMDEgNDguNTgzMiA3Mi44ODI1IDQ4LjUwNDkgNzMuMjY3NiA0OC41MDQ5QzczLjc1ODUgNDguNTA0OSA3NC4xODE2IDQ4LjU4OTUgNzQuNTM3MSA0OC43NTg4Qzc0Ljg5NjggNDguOTI4MSA3NS4xOTA5IDQ5LjE2NSA3NS40MTk0IDQ5LjQ2OTdDNzUuNjQ3OSA0OS43NzAyIDc1LjgxNzIgNTAuMTI1NyA3NS45MjcyIDUwLjUzNjFDNzYuMDM3MyA1MC45NDI0IDc2LjA5MjMgNTEuMzg2NyA3Ni4wOTIzIDUxLjg2OTFWNTIuMzk2SDcwLjk2MzRWNTEuNDM3NUg3NC45MThWNTEuMzQ4NkM3NC45MDEgNTEuMDQzOSA3NC44Mzc2IDUwLjc0NzcgNzQuNzI3NSA1MC40NkM3NC42MjE3IDUwLjE3MjIgNzQuNDUyNSA0OS45MzUyIDc0LjIxOTcgNDkuNzQ5QzczLjk4NyA0OS41NjI4IDczLjY2OTYgNDkuNDY5NyA3My4yNjc2IDQ5LjQ2OTdDNzMuMDAxIDQ5LjQ2OTcgNzIuNzU1NSA0OS41MjY5IDcyLjUzMTIgNDkuNjQxMUM3Mi4zMDcgNDkuNzUxMSA3Mi4xMTQ0IDQ5LjkxNjIgNzEuOTUzNiA1MC4xMzYyQzcxLjc5MjggNTAuMzU2MyA3MS42NjggNTAuNjI1IDcxLjU3OTEgNTAuOTQyNEM3MS40OTAyIDUxLjI1OTggNzEuNDQ1OCA1MS42MjU4IDcxLjQ0NTggNTIuMDQwNVY1Mi4zMDcxQzcxLjQ0NTggNTIuNjMzIDcxLjQ5MDIgNTIuOTM5OCA3MS41NzkxIDUzLjIyNzVDNzEuNjcyMiA1My41MTExIDcxLjgwNTUgNTMuNzYwNyA3MS45NzkgNTMuOTc2NkM3Mi4xNTY3IDU0LjE5MjQgNzIuMzcwNCA1NC4zNjE3IDcyLjYyMDEgNTQuNDg0NEM3Mi44NzQgNTQuNjA3MSA3My4xNjE4IDU0LjY2ODUgNzMuNDgzNCA1NC42Njg1QzczLjg5ODEgNTQuNjY4NSA3NC4yNDkzIDU0LjU4MzggNzQuNTM3MSA1NC40MTQ2Qzc0LjgyNDkgNTQuMjQ1MyA3NS4wNzY3IDU0LjAxODkgNzUuMjkyNSA1My43MzU0TDc2LjAwMzQgNTQuMzAwM0M3NS44NTUzIDU0LjUyNDYgNzUuNjY3IDU0LjczODMgNzUuNDM4NSA1NC45NDE0Qzc1LjIxIDU1LjE0NDUgNzQuOTI4NSA1NS4zMDk2IDc0LjU5NDIgNTUuNDM2NUM3NC4yNjQyIDU1LjU2MzUgNzMuODcyNyA1NS42MjcgNzMuNDE5OSA1NS42MjdaTTgxLjUxMzIgNTQuMzI1N1Y1MC43OUM4MS41MTMyIDUwLjUxOTIgODEuNDU4MiA1MC4yODQzIDgxLjM0ODEgNTAuMDg1NEM4MS4yNDI0IDQ5Ljg4MjMgODEuMDgxNSA0OS43MjU3IDgwLjg2NTcgNDkuNjE1N0M4MC42NDk5IDQ5LjUwNTcgODAuMzgzMyA0OS40NTA3IDgwLjA2NTkgNDkuNDUwN0M3OS43Njk3IDQ5LjQ1MDcgNzkuNTA5NCA0OS41MDE1IDc5LjI4NTIgNDkuNjAzQzc5LjA2NTEgNDkuNzA0NiA3OC44OTE2IDQ5LjgzNzkgNzguNzY0NiA1MC4wMDI5Qzc4LjY0MTkgNTAuMTY4IDc4LjU4MDYgNTAuMzQ1NyA3OC41ODA2IDUwLjUzNjFINzcuNDA2MkM3Ny40MDYyIDUwLjI5MDcgNzcuNDY5NyA1MC4wNDc0IDc3LjU5NjcgNDkuODA2MkM3Ny43MjM2IDQ5LjU2NDkgNzcuOTA1NiA0OS4zNDcgNzguMTQyNiA0OS4xNTIzQzc4LjM4MzggNDguOTUzNSA3OC42NzE1IDQ4Ljc5NjkgNzkuMDA1OSA0OC42ODI2Qzc5LjM0NDQgNDguNTY0MSA3OS43MjEgNDguNTA0OSA4MC4xMzU3IDQ4LjUwNDlDODAuNjM1MSA0OC41MDQ5IDgxLjA3NTIgNDguNTg5NSA4MS40NTYxIDQ4Ljc1ODhDODEuODQxMSA0OC45MjgxIDgyLjE0MTYgNDkuMTg0MSA4Mi4zNTc0IDQ5LjUyNjlDODIuNTc3NSA0OS44NjU0IDgyLjY4NzUgNTAuMjkwNyA4Mi42ODc1IDUwLjgwMjdWNTQuMDAyQzgyLjY4NzUgNTQuMjMwNSA4Mi43MDY1IDU0LjQ3MzggODIuNzQ0NiA1NC43MzE5QzgyLjc4NjkgNTQuOTkwMSA4Mi44NDgzIDU1LjIxMjIgODIuOTI4NyA1NS4zOTg0VjU1LjVIODEuNzAzNkM4MS42NDQ0IDU1LjM2NDYgODEuNTk3OCA1NS4xODQ3IDgxLjU2NCA1NC45NjA0QzgxLjUzMDEgNTQuNzMxOSA4MS41MTMyIDU0LjUyMDMgODEuNTEzMiA1NC4zMjU3Wk04MS43MTYzIDUxLjMzNTlMODEuNzI5IDUyLjE2MTFIODAuNTQyQzgwLjIwNzcgNTIuMTYxMSA3OS45MDkzIDUyLjE4ODYgNzkuNjQ3IDUyLjI0MzdDNzkuMzg0NiA1Mi4yOTQ0IDc5LjE2NDYgNTIuMzcyNyA3OC45ODY4IDUyLjQ3ODVDNzguODA5MSA1Mi41ODQzIDc4LjY3MzcgNTIuNzE3NiA3OC41ODA2IDUyLjg3ODRDNzguNDg3NSA1My4wMzUgNzguNDQwOSA1My4yMTkxIDc4LjQ0MDkgNTMuNDMwN0M3OC40NDA5IDUzLjY0NjUgNzguNDg5NiA1My44NDMzIDc4LjU4NjkgNTQuMDIxQzc4LjY4NDIgNTQuMTk4NyA3OC44MzAyIDU0LjM0MDUgNzkuMDI0OSA1NC40NDYzQzc5LjIyMzggNTQuNTQ3OSA3OS40NjcxIDU0LjU5ODYgNzkuNzU0OSA1NC41OTg2QzgwLjExNDYgNTQuNTk4NiA4MC40MzIgNTQuNTIyNSA4MC43MDcgNTQuMzcwMUM4MC45ODIxIDU0LjIxNzggODEuMiA1NC4wMzE2IDgxLjM2MDggNTMuODExNUM4MS41MjU5IDUzLjU5MTUgODEuNjE0NyA1My4zNzc4IDgxLjYyNzQgNTMuMTcwNEw4Mi4xMjg5IDUzLjczNTRDODIuMDk5MyA1My45MTMxIDgyLjAxODkgNTQuMTA5OSA4MS44ODc3IDU0LjMyNTdDODEuNzU2NSA1NC41NDE1IDgxLjU4MDkgNTQuNzQ4OSA4MS4zNjA4IDU0Ljk0NzhDODEuMTQ1IDU1LjE0MjQgODAuODg2OSA1NS4zMDUzIDgwLjU4NjQgNTUuNDM2NUM4MC4yOTAyIDU1LjU2MzUgNzkuOTU1OSA1NS42MjcgNzkuNTgzNSA1NS42MjdDNzkuMTE4IDU1LjYyNyA3OC43MDk2IDU1LjUzNiA3OC4zNTg0IDU1LjM1NEM3OC4wMTE0IDU1LjE3MiA3Ny43NDA2IDU0LjkyODcgNzcuNTQ1OSA1NC42MjRDNzcuMzU1NSA1NC4zMTUxIDc3LjI2MDMgNTMuOTcwMiA3Ny4yNjAzIDUzLjU4OTRDNzcuMjYwMyA1My4yMjEyIDc3LjMzMjIgNTIuODk3NSA3Ny40NzYxIDUyLjYxODJDNzcuNjIgNTIuMzM0NiA3Ny44MjczIDUyLjA5OTggNzguMDk4MSA1MS45MTM2Qzc4LjM2OSA1MS43MjMxIDc4LjY5NDggNTEuNTc5MyA3OS4wNzU3IDUxLjQ4MTlDNzkuNDU2NSA1MS4zODQ2IDc5Ljg4MTggNTEuMzM1OSA4MC4zNTE2IDUxLjMzNTlIODEuNzE2M1pNODcuMjgzMiA1NC42NjIxQzg3LjU2MjUgNTQuNjYyMSA4Ny44MjA2IDU0LjYwNSA4OC4wNTc2IDU0LjQ5MDdDODguMjk0NiA1NC4zNzY1IDg4LjQ4OTMgNTQuMjE5OSA4OC42NDE2IDU0LjAyMUM4OC43OTM5IDUzLjgxNzkgODguODgwNyA1My41ODcyIDg4LjkwMTkgNTMuMzI5MUg5MC4wMTlDODkuOTk3OSA1My43MzU0IDg5Ljg2MDQgNTQuMTE0MSA4OS42MDY0IDU0LjQ2NTNDODkuMzU2OCA1NC44MTIzIDg5LjAyODggNTUuMDkzOCA4OC42MjI2IDU1LjMwOTZDODguMjE2MyA1NS41MjEyIDg3Ljc2OTkgNTUuNjI3IDg3LjI4MzIgNTUuNjI3Qzg2Ljc2NjkgNTUuNjI3IDg2LjMxNjIgNTUuNTM2IDg1LjkzMTIgNTUuMzU0Qzg1LjU1MDMgNTUuMTcyIDg1LjIzMjkgNTQuOTIyNCA4NC45NzkgNTQuNjA1Qzg0LjcyOTMgNTQuMjg3NiA4NC41NDEgNTMuOTIzNyA4NC40MTQxIDUzLjUxMzJDODQuMjkxMyA1My4wOTg1IDg0LjIzIDUyLjY2MDUgODQuMjMgNTIuMTk5MlY1MS45MzI2Qzg0LjIzIDUxLjQ3MTQgODQuMjkxMyA1MS4wMzU1IDg0LjQxNDEgNTAuNjI1Qzg0LjU0MSA1MC4yMTAzIDg0LjcyOTMgNDkuODQ0MiA4NC45NzkgNDkuNTI2OUM4NS4yMzI5IDQ5LjIwOTUgODUuNTUwMyA0OC45NTk4IDg1LjkzMTIgNDguNzc3OEM4Ni4zMTYyIDQ4LjU5NTkgODYuNzY2OSA0OC41MDQ5IDg3LjI4MzIgNDguNTA0OUM4Ny44MjA2IDQ4LjUwNDkgODguMjkwNCA0OC42MTQ5IDg4LjY5MjQgNDguODM1Qzg5LjA5NDQgNDkuMDUwOCA4OS40MDk3IDQ5LjM0NyA4OS42MzgyIDQ5LjcyMzZDODkuODcwOSA1MC4wOTYgODkuOTk3OSA1MC41MTkyIDkwLjAxOSA1MC45OTMySDg4LjkwMTlDODguODgwNyA1MC43MDk2IDg4LjgwMDMgNTAuNDUzNiA4OC42NjA2IDUwLjIyNTFDODguNTI1MiA0OS45OTY2IDg4LjMzOSA0OS44MTQ2IDg4LjEwMjEgNDkuNjc5MkM4Ny44NjkzIDQ5LjUzOTYgODcuNTk2NCA0OS40Njk3IDg3LjI4MzIgNDkuNDY5N0M4Ni45MjM1IDQ5LjQ2OTcgODYuNjIwOSA0OS41NDE3IDg2LjM3NTUgNDkuNjg1NUM4Ni4xMzQzIDQ5LjgyNTIgODUuOTQxNyA1MC4wMTU2IDg1Ljc5NzkgNTAuMjU2OEM4NS42NTgyIDUwLjQ5MzggODUuNTU2NiA1MC43NTgzIDg1LjQ5MzIgNTEuMDUwM0M4NS40MzM5IDUxLjMzODEgODUuNDA0MyA1MS42MzIyIDg1LjQwNDMgNTEuOTMyNlY1Mi4xOTkyQzg1LjQwNDMgNTIuNDk5NyA4NS40MzM5IDUyLjc5NTkgODUuNDkzMiA1My4wODc5Qzg1LjU1MjQgNTMuMzc5OSA4NS42NTE5IDUzLjY0NDQgODUuNzkxNSA1My44ODEzQzg1LjkzNTQgNTQuMTE4MyA4Ni4xMjc5IDU0LjMwODggODYuMzY5MSA1NC40NTI2Qzg2LjYxNDYgNTQuNTkyMyA4Ni45MTkzIDU0LjY2MjEgODcuMjgzMiA1NC42NjIxWk05Mi41MTM3IDQ1Ljc1VjU1LjVIOTEuMzM5NFY0NS43NUg5Mi41MTM3Wk05Mi4yMzQ0IDUxLjgwNTdMOTEuNzQ1NiA1MS43ODY2QzkxLjc0OTggNTEuMzE2OSA5MS44MTk3IDUwLjg4MzEgOTEuOTU1MSA1MC40ODU0QzkyLjA5MDUgNTAuMDgzMyA5Mi4yODA5IDQ5LjczNDIgOTIuNTI2NCA0OS40MzhDOTIuNzcxOCA0OS4xNDE4IDkzLjA2MzggNDguOTEzMiA5My40MDIzIDQ4Ljc1MjRDOTMuNzQ1MSA0OC41ODc0IDk0LjEyMzkgNDguNTA0OSA5NC41Mzg2IDQ4LjUwNDlDOTQuODc3MSA0OC41MDQ5IDk1LjE4MTggNDguNTUxNCA5NS40NTI2IDQ4LjY0NDVDOTUuNzIzNSA0OC43MzM0IDk1Ljk1NDEgNDguODc3MyA5Ni4xNDQ1IDQ5LjA3NjJDOTYuMzM5MiA0OS4yNzUxIDk2LjQ4NzMgNDkuNTMzMiA5Ni41ODg5IDQ5Ljg1MDZDOTYuNjkwNCA1MC4xNjM3IDk2Ljc0MTIgNTAuNTQ2NyA5Ni43NDEyIDUwLjk5OTVWNTUuNUg5NS41NjA1VjUwLjk4NjhDOTUuNTYwNSA1MC42MjcxIDk1LjUwNzYgNTAuMzM5NCA5NS40MDE5IDUwLjEyMzVDOTUuMjk2MSA0OS45MDM1IDk1LjE0MTYgNDkuNzQ0OCA5NC45Mzg1IDQ5LjY0NzVDOTQuNzM1NCA0OS41NDU5IDk0LjQ4NTcgNDkuNDk1MSA5NC4xODk1IDQ5LjQ5NTFDOTMuODk3NSA0OS40OTUxIDkzLjYzMDkgNDkuNTU2NSA5My4zODk2IDQ5LjY3OTJDOTMuMTUyNyA0OS44MDE5IDkyLjk0NzQgNDkuOTcxMiA5Mi43NzM5IDUwLjE4N0M5Mi42MDQ3IDUwLjQwMjggOTIuNDcxNCA1MC42NTA0IDkyLjM3NCA1MC45Mjk3QzkyLjI4MDkgNTEuMjA0OCA5Mi4yMzQ0IDUxLjQ5NjcgOTIuMjM0NCA1MS44MDU3WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDxnIGNsaXBQYXRoPVwidXJsKCNjbGlwMF83Nl8xMjczKVwiPlxuXHRcdFx0PHBhdGggZD1cIk0yNTYgNDlMMjYxIDU0TDI2NiA0OUgyNTZaXCIgZmlsbD1cIiM2NDc0OEJcIi8+XG5cdFx0PC9nPlxuXHRcdDxyZWN0IHg9XCIxNlwiIHk9XCIzN1wiIHdpZHRoPVwiMjY2XCIgaGVpZ2h0PVwiMjhcIiByeD1cIjNcIiBzdHJva2U9XCIjNDI3MkY5XCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuXHRcdDxwYXRoIGQ9XCJNMTUgNjlDMTUgNjYuNzkwOSAxNi43OTA5IDY1IDE5IDY1SDI3OUMyODEuMjA5IDY1IDI4MyA2Ni43OTA5IDI4MyA2OVY5MS4zMzMzSDE1VjY5WlwiIGZpbGw9XCIjNDI3MkY5XCIvPlxuXHRcdDxwYXRoIGQ9XCJNMjkuNDk0MSA3NC4yNDM0TDI2LjQzNDYgODIuNjY2N0gyNS4xODQxTDI4LjcwNyA3My40MjQ2SDI5LjUxMzJMMjkuNDk0MSA3NC4yNDM0Wk0zMi4wNTg2IDgyLjY2NjdMMjguOTkyNyA3NC4yNDM0TDI4Ljk3MzYgNzMuNDI0NkgyOS43Nzk4TDMzLjMxNTQgODIuNjY2N0gzMi4wNTg2Wk0zMS44OTk5IDc5LjI0NTRWODAuMjQ4M0gyNi43MDc1Vjc5LjI0NTRIMzEuODk5OVpNMzcuMTM2NyA3NS43OTg2Vjc2LjdIMzMuNDIzM1Y3NS43OTg2SDM3LjEzNjdaTTM0LjY4MDIgNzQuMTI5MkgzNS44NTQ1VjgwLjk2NTZDMzUuODU0NSA4MS4xOTgzIDM1Ljg5MDUgODEuMzczOSAzNS45NjI0IDgxLjQ5MjRDMzYuMDM0MyA4MS42MTA5IDM2LjEyNzQgODEuNjg5MiAzNi4yNDE3IDgxLjcyNzNDMzYuMzU2IDgxLjc2NTQgMzYuNDc4NyA4MS43ODQ0IDM2LjYwOTkgODEuNzg0NEMzNi43MDcyIDgxLjc4NDQgMzYuODA4OCA4MS43NzYgMzYuOTE0NiA4MS43NTlDMzcuMDI0NiA4MS43Mzc5IDM3LjEwNzEgODEuNzIwOSAzNy4xNjIxIDgxLjcwODNMMzcuMTY4NSA4Mi42NjY3QzM3LjA3NTQgODIuNjk2NCAzNi45NTI2IDgyLjcyMzkgMzYuODAwMyA4Mi43NDkzQzM2LjY1MjIgODIuNzc4OSAzNi40NzIzIDgyLjc5MzcgMzYuMjYwNyA4Mi43OTM3QzM1Ljk3MyA4Mi43OTM3IDM1LjcwODUgODIuNzM2NiAzNS40NjczIDgyLjYyMjNDMzUuMjI2MSA4Mi41MDgxIDM1LjAzMzUgODIuMzE3NiAzNC44ODk2IDgyLjA1MUMzNC43NSA4MS43ODAyIDM0LjY4MDIgODEuNDE2MyAzNC42ODAyIDgwLjk1OTJWNzQuMTI5MlpNNDQuNjE0MyA3NS43OTg2Vjc2LjdINDAuOTAwOVY3NS43OTg2SDQ0LjYxNDNaTTQyLjE1NzcgNzQuMTI5Mkg0My4zMzJWODAuOTY1NkM0My4zMzIgODEuMTk4MyA0My4zNjggODEuMzczOSA0My40Mzk5IDgxLjQ5MjRDNDMuNTExOSA4MS42MTA5IDQzLjYwNSA4MS42ODkyIDQzLjcxOTIgODEuNzI3M0M0My44MzM1IDgxLjc2NTQgNDMuOTU2MiA4MS43ODQ0IDQ0LjA4NzQgODEuNzg0NEM0NC4xODQ3IDgxLjc4NDQgNDQuMjg2MyA4MS43NzYgNDQuMzkyMSA4MS43NTlDNDQuNTAyMSA4MS43Mzc5IDQ0LjU4NDYgODEuNzIwOSA0NC42Mzk2IDgxLjcwODNMNDQuNjQ2IDgyLjY2NjdDNDQuNTUyOSA4Mi42OTY0IDQ0LjQzMDIgODIuNzIzOSA0NC4yNzc4IDgyLjc0OTNDNDQuMTI5NyA4Mi43Nzg5IDQzLjk0OTkgODIuNzkzNyA0My43MzgzIDgyLjc5MzdDNDMuNDUwNSA4Mi43OTM3IDQzLjE4NiA4Mi43MzY2IDQyLjk0NDggODIuNjIyM0M0Mi43MDM2IDgyLjUwODEgNDIuNTExMSA4Mi4zMTc2IDQyLjM2NzIgODIuMDUxQzQyLjIyNzUgODEuNzgwMiA0Mi4xNTc3IDgxLjQxNjMgNDIuMTU3NyA4MC45NTkyVjc0LjEyOTJaTTQ3LjE2NiA3Mi45MTY3VjgyLjY2NjdINDUuOTkxN1Y3Mi45MTY3SDQ3LjE2NlpNNDYuODg2NyA3OC45NzI0TDQ2LjM5NzkgNzguOTUzNEM0Ni40MDIyIDc4LjQ4MzYgNDYuNDcyIDc4LjA0OTkgNDYuNjA3NCA3Ny42NTIxQzQ2Ljc0MjggNzcuMjUwMSA0Ni45MzMzIDc2LjkwMSA0Ny4xNzg3IDc2LjYwNDdDNDcuNDI0MiA3Ni4zMDg1IDQ3LjcxNjEgNzYuMDggNDguMDU0NyA3NS45MTkyQzQ4LjM5NzUgNzUuNzU0MiA0OC43NzYyIDc1LjY3MTYgNDkuMTkwOSA3NS42NzE2QzQ5LjUyOTUgNzUuNjcxNiA0OS44MzQxIDc1LjcxODIgNTAuMTA1IDc1LjgxMTNDNTAuMzc1OCA3NS45MDAxIDUwLjYwNjQgNzYuMDQ0IDUwLjc5NjkgNzYuMjQyOUM1MC45OTE1IDc2LjQ0MTggNTEuMTM5NiA3Ni43IDUxLjI0MTIgNzcuMDE3M0M1MS4zNDI4IDc3LjMzMDUgNTEuMzkzNiA3Ny43MTM1IDUxLjM5MzYgNzguMTY2M1Y4Mi42NjY3SDUwLjIxMjlWNzguMTUzNkM1MC4yMTI5IDc3Ljc5MzkgNTAuMTYgNzcuNTA2MSA1MC4wNTQyIDc3LjI5MDNDNDkuOTQ4NCA3Ny4wNzAyIDQ5Ljc5MzkgNzYuOTExNSA0OS41OTA4IDc2LjgxNDJDNDkuMzg3NyA3Ni43MTI2IDQ5LjEzOCA3Ni42NjE5IDQ4Ljg0MTggNzYuNjYxOUM0OC41NDk4IDc2LjY2MTkgNDguMjgzMiA3Ni43MjMyIDQ4LjA0MiA3Ni44NDU5QzQ3LjgwNSA3Ni45Njg3IDQ3LjU5OTggNzcuMTM3OSA0Ny40MjYzIDc3LjM1MzhDNDcuMjU3IDc3LjU2OTYgNDcuMTIzNyA3Ny44MTcxIDQ3LjAyNjQgNzguMDk2NEM0Ni45MzMzIDc4LjM3MTUgNDYuODg2NyA3OC42NjM1IDQ2Ljg4NjcgNzguOTcyNFpNNTYuMDAyIDgyLjc5MzdDNTUuNTIzOCA4Mi43OTM3IDU1LjA5IDgyLjcxMzMgNTQuNzAwNyA4Mi41NTI1QzU0LjMxNTYgODIuMzg3NSA1My45ODM0IDgyLjE1NjggNTMuNzA0MSA4MS44NjA2QzUzLjQyOSA4MS41NjQ0IDUzLjIxNzQgODEuMjEzMSA1My4wNjkzIDgwLjgwNjlDNTIuOTIxMiA4MC40MDA2IDUyLjg0NzIgNzkuOTU2MyA1Mi44NDcyIDc5LjQ3MzlWNzkuMjA3M0M1Mi44NDcyIDc4LjY0ODcgNTIuOTI5NyA3OC4xNTE0IDUzLjA5NDcgNzcuNzE1NkM1My4yNTk4IDc3LjI3NTUgNTMuNDg0IDc2LjkwMzEgNTMuNzY3NiA3Ni41OTg0QzU0LjA1MTEgNzYuMjkzNyA1NC4zNzI3IDc2LjA2MzEgNTQuNzMyNCA3NS45MDY1QzU1LjA5MjEgNzUuNzQ5OSA1NS40NjQ1IDc1LjY3MTYgNTUuODQ5NiA3NS42NzE2QzU2LjM0MDUgNzUuNjcxNiA1Ni43NjM3IDc1Ljc1NjMgNTcuMTE5MSA3NS45MjU1QzU3LjQ3ODggNzYuMDk0OCA1Ny43NzI5IDc2LjMzMTggNTguMDAxNSA3Ni42MzY1QzU4LjIzIDc2LjkzNjkgNTguMzk5MyA3Ny4yOTI0IDU4LjUwOTMgNzcuNzAyOUM1OC42MTkzIDc4LjEwOTEgNTguNjc0MyA3OC41NTM1IDU4LjY3NDMgNzkuMDM1OVY3OS41NjI3SDUzLjU0NTRWNzguNjA0Mkg1Ny41Vjc4LjUxNTRDNTcuNDgzMSA3OC4yMTA3IDU3LjQxOTYgNzcuOTE0NSA1Ny4zMDk2IDc3LjYyNjdDNTcuMjAzOCA3Ny4zMzg5IDU3LjAzNDUgNzcuMTAyIDU2LjgwMTggNzYuOTE1OEM1Ni41NjkgNzYuNzI5NiA1Ni4yNTE2IDc2LjYzNjUgNTUuODQ5NiA3Ni42MzY1QzU1LjU4MyA3Ni42MzY1IDU1LjMzNzYgNzYuNjkzNiA1NS4xMTMzIDc2LjgwNzlDNTQuODg5IDc2LjkxNzkgNTQuNjk2NSA3Ny4wODI5IDU0LjUzNTYgNzcuMzAzQzU0LjM3NDggNzcuNTIzIDU0LjI1IDc3Ljc5MTcgNTQuMTYxMSA3OC4xMDkxQzU0LjA3MjMgNzguNDI2NSA1NC4wMjc4IDc4Ljc5MjYgNTQuMDI3OCA3OS4yMDczVjc5LjQ3MzlDNTQuMDI3OCA3OS43OTk3IDU0LjA3MjMgODAuMTA2NSA1NC4xNjExIDgwLjM5NDNDNTQuMjU0MiA4MC42Nzc4IDU0LjM4NzUgODAuOTI3NSA1NC41NjEgODEuMTQzM0M1NC43Mzg4IDgxLjM1OTEgNTQuOTUyNSA4MS41Mjg0IDU1LjIwMjEgODEuNjUxMUM1NS40NTYxIDgxLjc3MzggNTUuNzQzOCA4MS44MzUyIDU2LjA2NTQgODEuODM1MkM1Ni40ODAxIDgxLjgzNTIgNTYuODMxNCA4MS43NTA2IDU3LjExOTEgODEuNTgxM0M1Ny40MDY5IDgxLjQxMiA1Ny42NTg3IDgxLjE4NTYgNTcuODc0NSA4MC45MDIxTDU4LjU4NTQgODEuNDY3QzU4LjQzNzMgODEuNjkxMyA1OC4yNDkgODEuOTA1IDU4LjAyMDUgODIuMTA4MkM1Ny43OTIgODIuMzExMyA1Ny41MTA2IDgyLjQ3NjMgNTcuMTc2MyA4Mi42MDMzQzU2Ljg0NjIgODIuNzMwMiA1Ni40NTQ4IDgyLjc5MzcgNTYuMDAyIDgyLjc5MzdaTTYzLjI2MzcgNzIuOTE2N0g2NC40NDQzVjgxLjMzMzdMNjQuMzQyOCA4Mi42NjY3SDYzLjI2MzdWNzIuOTE2N1pNNjkuMDg0NSA3OS4xNzU1Vjc5LjMwODhDNjkuMDg0NSA3OS44MDgyIDY5LjAyNTIgODAuMjcxNiA2OC45MDY3IDgwLjY5OUM2OC43ODgyIDgxLjEyMjIgNjguNjE0NyA4MS40OTAzIDY4LjM4NjIgODEuODAzNUM2OC4xNTc3IDgyLjExNjYgNjcuODc4NCA4Mi4zNTk5IDY3LjU0ODMgODIuNTMzNEM2Ny4yMTgzIDgyLjcwNjkgNjYuODM5NSA4Mi43OTM3IDY2LjQxMjEgODIuNzkzN0M2NS45NzYyIDgyLjc5MzcgNjUuNTkzMyA4Mi43MTk2IDY1LjI2MzIgODIuNTcxNUM2NC45MzczIDgyLjQxOTIgNjQuNjYyMyA4Mi4yMDEzIDY0LjQzOCA4MS45MTc3QzY0LjIxMzcgODEuNjM0MiA2NC4wMzM5IDgxLjI5MTQgNjMuODk4NCA4MC44ODk0QzYzLjc2NzMgODAuNDg3NCA2My42NzYzIDgwLjAzNDYgNjMuNjI1NSA3OS41MzFWNzguOTQ3QzYzLjY3NjMgNzguNDM5MiA2My43NjczIDc3Ljk4NDMgNjMuODk4NCA3Ny41ODIzQzY0LjAzMzkgNzcuMTgwMyA2NC4yMTM3IDc2LjgzNzUgNjQuNDM4IDc2LjU1NEM2NC42NjIzIDc2LjI2NjIgNjQuOTM3MyA3Ni4wNDgzIDY1LjI2MzIgNzUuOTAwMUM2NS41ODkgNzUuNzQ3OCA2NS45Njc4IDc1LjY3MTYgNjYuMzk5NCA3NS42NzE2QzY2LjgzMTEgNzUuNjcxNiA2Ny4yMTQgNzUuNzU2MyA2Ny41NDgzIDc1LjkyNTVDNjcuODgyNiA3Ni4wOTA2IDY4LjE2MTkgNzYuMzI3NiA2OC4zODYyIDc2LjYzNjVDNjguNjE0NyA3Ni45NDU0IDY4Ljc4ODIgNzcuMzE1NyA2OC45MDY3IDc3Ljc0NzNDNjkuMDI1MiA3OC4xNzQ3IDY5LjA4NDUgNzguNjUwOCA2OS4wODQ1IDc5LjE3NTVaTTY3LjkwMzggNzkuMzA4OFY3OS4xNzU1QzY3LjkwMzggNzguODMyOCA2Ny44NzIxIDc4LjUxMTEgNjcuODA4NiA3OC4yMTA3QzY3Ljc0NTEgNzcuOTA2IDY3LjY0MzYgNzcuNjM5NCA2Ny41MDM5IDc3LjQxMDlDNjcuMzY0MyA3Ny4xNzgxIDY3LjE4MDIgNzYuOTk2MiA2Ni45NTE3IDc2Ljg2NUM2Ni43MjMxIDc2LjcyOTYgNjYuNDQxNyA3Ni42NjE5IDY2LjEwNzQgNzYuNjYxOUM2NS44MTEyIDc2LjY2MTkgNjUuNTUzMSA3Ni43MTI2IDY1LjMzMyA3Ni44MTQyQzY1LjExNzIgNzYuOTE1OCA2NC45MzMxIDc3LjA1MzMgNjQuNzgwOCA3Ny4yMjY4QzY0LjYyODQgNzcuMzk2MSA2NC41MDM2IDc3LjU5MDcgNjQuNDA2MiA3Ny44MTA4QzY0LjMxMzIgNzguMDI2NiA2NC4yNDMzIDc4LjI1MDkgNjQuMTk2OCA3OC40ODM2VjgwLjAxMzRDNjQuMjY0NSA4MC4zMDk3IDY0LjM3NDUgODAuNTk1MyA2NC41MjY5IDgwLjg3MDRDNjQuNjgzNCA4MS4xNDEyIDY0Ljg5MDggODEuMzYzNCA2NS4xNDg5IDgxLjUzNjlDNjUuNDExMyA4MS43MTA0IDY1LjczNSA4MS43OTcxIDY2LjEyMDEgODEuNzk3MUM2Ni40Mzc1IDgxLjc5NzEgNjYuNzA4MyA4MS43MzM2IDY2LjkzMjYgODEuNjA2N0M2Ny4xNjExIDgxLjQ3NTUgNjcuMzQ1MiA4MS4yOTU3IDY3LjQ4NDkgODEuMDY3MUM2Ny42Mjg3IDgwLjgzODYgNjcuNzM0NSA4MC41NzQxIDY3LjgwMjIgODAuMjczN0M2Ny44NyA3OS45NzMyIDY3LjkwMzggNzkuNjUxNiA2Ny45MDM4IDc5LjMwODhaTTczLjQxOTkgODIuNzkzN0M3Mi45NDE3IDgyLjc5MzcgNzIuNTA4IDgyLjcxMzMgNzIuMTE4NyA4Mi41NTI1QzcxLjczMzYgODIuMzg3NSA3MS40MDE0IDgyLjE1NjggNzEuMTIyMSA4MS44NjA2QzcwLjg0NyA4MS41NjQ0IDcwLjYzNTQgODEuMjEzMSA3MC40ODczIDgwLjgwNjlDNzAuMzM5MiA4MC40MDA2IDcwLjI2NTEgNzkuOTU2MyA3MC4yNjUxIDc5LjQ3MzlWNzkuMjA3M0M3MC4yNjUxIDc4LjY0ODcgNzAuMzQ3NyA3OC4xNTE0IDcwLjUxMjcgNzcuNzE1NkM3MC42Nzc3IDc3LjI3NTUgNzAuOTAyIDc2LjkwMzEgNzEuMTg1NSA3Ni41OTg0QzcxLjQ2OTEgNzYuMjkzNyA3MS43OTA3IDc2LjA2MzEgNzIuMTUwNCA3NS45MDY1QzcyLjUxMDEgNzUuNzQ5OSA3Mi44ODI1IDc1LjY3MTYgNzMuMjY3NiA3NS42NzE2QzczLjc1ODUgNzUuNjcxNiA3NC4xODE2IDc1Ljc1NjMgNzQuNTM3MSA3NS45MjU1Qzc0Ljg5NjggNzYuMDk0OCA3NS4xOTA5IDc2LjMzMTggNzUuNDE5NCA3Ni42MzY1Qzc1LjY0NzkgNzYuOTM2OSA3NS44MTcyIDc3LjI5MjQgNzUuOTI3MiA3Ny43MDI5Qzc2LjAzNzMgNzguMTA5MSA3Ni4wOTIzIDc4LjU1MzUgNzYuMDkyMyA3OS4wMzU5Vjc5LjU2MjdINzAuOTYzNFY3OC42MDQySDc0LjkxOFY3OC41MTU0Qzc0LjkwMSA3OC4yMTA3IDc0LjgzNzYgNzcuOTE0NSA3NC43Mjc1IDc3LjYyNjdDNzQuNjIxNyA3Ny4zMzg5IDc0LjQ1MjUgNzcuMTAyIDc0LjIxOTcgNzYuOTE1OEM3My45ODcgNzYuNzI5NiA3My42Njk2IDc2LjYzNjUgNzMuMjY3NiA3Ni42MzY1QzczLjAwMSA3Ni42MzY1IDcyLjc1NTUgNzYuNjkzNiA3Mi41MzEyIDc2LjgwNzlDNzIuMzA3IDc2LjkxNzkgNzIuMTE0NCA3Ny4wODI5IDcxLjk1MzYgNzcuMzAzQzcxLjc5MjggNzcuNTIzIDcxLjY2OCA3Ny43OTE3IDcxLjU3OTEgNzguMTA5MUM3MS40OTAyIDc4LjQyNjUgNzEuNDQ1OCA3OC43OTI2IDcxLjQ0NTggNzkuMjA3M1Y3OS40NzM5QzcxLjQ0NTggNzkuNzk5NyA3MS40OTAyIDgwLjEwNjUgNzEuNTc5MSA4MC4zOTQzQzcxLjY3MjIgODAuNjc3OCA3MS44MDU1IDgwLjkyNzUgNzEuOTc5IDgxLjE0MzNDNzIuMTU2NyA4MS4zNTkxIDcyLjM3MDQgODEuNTI4NCA3Mi42MjAxIDgxLjY1MTFDNzIuODc0IDgxLjc3MzggNzMuMTYxOCA4MS44MzUyIDczLjQ4MzQgODEuODM1MkM3My44OTgxIDgxLjgzNTIgNzQuMjQ5MyA4MS43NTA2IDc0LjUzNzEgODEuNTgxM0M3NC44MjQ5IDgxLjQxMiA3NS4wNzY3IDgxLjE4NTYgNzUuMjkyNSA4MC45MDIxTDc2LjAwMzQgODEuNDY3Qzc1Ljg1NTMgODEuNjkxMyA3NS42NjcgODEuOTA1IDc1LjQzODUgODIuMTA4MkM3NS4yMSA4Mi4zMTEzIDc0LjkyODUgODIuNDc2MyA3NC41OTQyIDgyLjYwMzNDNzQuMjY0MiA4Mi43MzAyIDczLjg3MjcgODIuNzkzNyA3My40MTk5IDgyLjc5MzdaTTgxLjUxMzIgODEuNDkyNFY3Ny45NTY4QzgxLjUxMzIgNzcuNjg2IDgxLjQ1ODIgNzcuNDUxMSA4MS4zNDgxIDc3LjI1MjJDODEuMjQyNCA3Ny4wNDkxIDgxLjA4MTUgNzYuODkyNSA4MC44NjU3IDc2Ljc4MjVDODAuNjQ5OSA3Ni42NzI0IDgwLjM4MzMgNzYuNjE3NCA4MC4wNjU5IDc2LjYxNzRDNzkuNzY5NyA3Ni42MTc0IDc5LjUwOTQgNzYuNjY4MiA3OS4yODUyIDc2Ljc2OThDNzkuMDY1MSA3Ni44NzEzIDc4Ljg5MTYgNzcuMDA0NiA3OC43NjQ2IDc3LjE2OTdDNzguNjQxOSA3Ny4zMzQ3IDc4LjU4MDYgNzcuNTEyNSA3OC41ODA2IDc3LjcwMjlINzcuNDA2MkM3Ny40MDYyIDc3LjQ1NzQgNzcuNDY5NyA3Ny4yMTQxIDc3LjU5NjcgNzYuOTcyOUM3Ny43MjM2IDc2LjczMTcgNzcuOTA1NiA3Ni41MTM4IDc4LjE0MjYgNzYuMzE5MUM3OC4zODM4IDc2LjEyMDIgNzguNjcxNSA3NS45NjM2IDc5LjAwNTkgNzUuODQ5NEM3OS4zNDQ0IDc1LjczMDkgNzkuNzIxIDc1LjY3MTYgODAuMTM1NyA3NS42NzE2QzgwLjYzNTEgNzUuNjcxNiA4MS4wNzUyIDc1Ljc1NjMgODEuNDU2MSA3NS45MjU1QzgxLjg0MTEgNzYuMDk0OCA4Mi4xNDE2IDc2LjM1MDggODIuMzU3NCA3Ni42OTM2QzgyLjU3NzUgNzcuMDMyMSA4Mi42ODc1IDc3LjQ1NzQgODIuNjg3NSA3Ny45Njk1VjgxLjE2ODdDODIuNjg3NSA4MS4zOTcyIDgyLjcwNjUgODEuNjQwNSA4Mi43NDQ2IDgxLjg5ODdDODIuNzg2OSA4Mi4xNTY4IDgyLjg0ODMgODIuMzc5IDgyLjkyODcgODIuNTY1MlY4Mi42NjY3SDgxLjcwMzZDODEuNjQ0NCA4Mi41MzEzIDgxLjU5NzggODIuMzUxNSA4MS41NjQgODIuMTI3MkM4MS41MzAxIDgxLjg5ODcgODEuNTEzMiA4MS42ODcxIDgxLjUxMzIgODEuNDkyNFpNODEuNzE2MyA3OC41MDI3TDgxLjcyOSA3OS4zMjc5SDgwLjU0MkM4MC4yMDc3IDc5LjMyNzkgNzkuOTA5MyA3OS4zNTU0IDc5LjY0NyA3OS40MTA0Qzc5LjM4NDYgNzkuNDYxMiA3OS4xNjQ2IDc5LjUzOTUgNzguOTg2OCA3OS42NDUzQzc4LjgwOTEgNzkuNzUxMSA3OC42NzM3IDc5Ljg4NDQgNzguNTgwNiA4MC4wNDUyQzc4LjQ4NzUgODAuMjAxNyA3OC40NDA5IDgwLjM4NTggNzguNDQwOSA4MC41OTc0Qzc4LjQ0MDkgODAuODEzMiA3OC40ODk2IDgxLjAxIDc4LjU4NjkgODEuMTg3N0M3OC42ODQyIDgxLjM2NTUgNzguODMwMiA4MS41MDcyIDc5LjAyNDkgODEuNjEzQzc5LjIyMzggODEuNzE0NiA3OS40NjcxIDgxLjc2NTQgNzkuNzU0OSA4MS43NjU0QzgwLjExNDYgODEuNzY1NCA4MC40MzIgODEuNjg5MiA4MC43MDcgODEuNTM2OUM4MC45ODIxIDgxLjM4NDUgODEuMiA4MS4xOTgzIDgxLjM2MDggODAuOTc4M0M4MS41MjU5IDgwLjc1ODIgODEuNjE0NyA4MC41NDQ1IDgxLjYyNzQgODAuMzM3Mkw4Mi4xMjg5IDgwLjkwMjFDODIuMDk5MyA4MS4wNzk4IDgyLjAxODkgODEuMjc2NiA4MS44ODc3IDgxLjQ5MjRDODEuNzU2NSA4MS43MDgzIDgxLjU4MDkgODEuOTE1NiA4MS4zNjA4IDgyLjExNDVDODEuMTQ1IDgyLjMwOTIgODAuODg2OSA4Mi40NzIxIDgwLjU4NjQgODIuNjAzM0M4MC4yOTAyIDgyLjczMDIgNzkuOTU1OSA4Mi43OTM3IDc5LjU4MzUgODIuNzkzN0M3OS4xMTggODIuNzkzNyA3OC43MDk2IDgyLjcwMjcgNzguMzU4NCA4Mi41MjA4Qzc4LjAxMTQgODIuMzM4OCA3Ny43NDA2IDgyLjA5NTUgNzcuNTQ1OSA4MS43OTA4Qzc3LjM1NTUgODEuNDgxOSA3Ny4yNjAzIDgxLjEzNyA3Ny4yNjAzIDgwLjc1NjFDNzcuMjYwMyA4MC4zODc5IDc3LjMzMjIgODAuMDY0MiA3Ny40NzYxIDc5Ljc4NDlDNzcuNjIgNzkuNTAxNCA3Ny44MjczIDc5LjI2NjUgNzguMDk4MSA3OS4wODAzQzc4LjM2OSA3OC44ODk5IDc4LjY5NDggNzguNzQ2IDc5LjA3NTcgNzguNjQ4N0M3OS40NTY1IDc4LjU1MTQgNzkuODgxOCA3OC41MDI3IDgwLjM1MTYgNzguNTAyN0g4MS43MTYzWk04Ny4yODMyIDgxLjgyODlDODcuNTYyNSA4MS44Mjg5IDg3LjgyMDYgODEuNzcxNyA4OC4wNTc2IDgxLjY1NzVDODguMjk0NiA4MS41NDMyIDg4LjQ4OTMgODEuMzg2NiA4OC42NDE2IDgxLjE4NzdDODguNzkzOSA4MC45ODQ2IDg4Ljg4MDcgODAuNzU0IDg4LjkwMTkgODAuNDk1OEg5MC4wMTlDODkuOTk3OSA4MC45MDIxIDg5Ljg2MDQgODEuMjgwOCA4OS42MDY0IDgxLjYzMjFDODkuMzU2OCA4MS45NzkxIDg5LjAyODggODIuMjYwNSA4OC42MjI2IDgyLjQ3NjNDODguMjE2MyA4Mi42ODc5IDg3Ljc2OTkgODIuNzkzNyA4Ny4yODMyIDgyLjc5MzdDODYuNzY2OSA4Mi43OTM3IDg2LjMxNjIgODIuNzAyNyA4NS45MzEyIDgyLjUyMDhDODUuNTUwMyA4Mi4zMzg4IDg1LjIzMjkgODIuMDg5MSA4NC45NzkgODEuNzcxN0M4NC43MjkzIDgxLjQ1NDMgODQuNTQxIDgxLjA5MDQgODQuNDE0MSA4MC42Nzk5Qzg0LjI5MTMgODAuMjY1MiA4NC4yMyA3OS44MjcyIDg0LjIzIDc5LjM2NlY3OS4wOTk0Qzg0LjIzIDc4LjYzODEgODQuMjkxMyA3OC4yMDIyIDg0LjQxNDEgNzcuNzkxN0M4NC41NDEgNzcuMzc3IDg0LjcyOTMgNzcuMDExIDg0Ljk3OSA3Ni42OTM2Qzg1LjIzMjkgNzYuMzc2MiA4NS41NTAzIDc2LjEyNjUgODUuOTMxMiA3NS45NDQ2Qzg2LjMxNjIgNzUuNzYyNiA4Ni43NjY5IDc1LjY3MTYgODcuMjgzMiA3NS42NzE2Qzg3LjgyMDYgNzUuNjcxNiA4OC4yOTA0IDc1Ljc4MTcgODguNjkyNCA3Ni4wMDE3Qzg5LjA5NDQgNzYuMjE3NSA4OS40MDk3IDc2LjUxMzggODkuNjM4MiA3Ni44OTA0Qzg5Ljg3MDkgNzcuMjYyOCA4OS45OTc5IDc3LjY4NiA5MC4wMTkgNzguMTU5OUg4OC45MDE5Qzg4Ljg4MDcgNzcuODc2NCA4OC44MDAzIDc3LjYyMDQgODguNjYwNiA3Ny4zOTE4Qzg4LjUyNTIgNzcuMTYzMyA4OC4zMzkgNzYuOTgxNCA4OC4xMDIxIDc2Ljg0NTlDODcuODY5MyA3Ni43MDYzIDg3LjU5NjQgNzYuNjM2NSA4Ny4yODMyIDc2LjYzNjVDODYuOTIzNSA3Ni42MzY1IDg2LjYyMDkgNzYuNzA4NCA4Ni4zNzU1IDc2Ljg1MjNDODYuMTM0MyA3Ni45OTE5IDg1Ljk0MTcgNzcuMTgyNCA4NS43OTc5IDc3LjQyMzZDODUuNjU4MiA3Ny42NjA2IDg1LjU1NjYgNzcuOTI1IDg1LjQ5MzIgNzguMjE3Qzg1LjQzMzkgNzguNTA0OCA4NS40MDQzIDc4Ljc5ODkgODUuNDA0MyA3OS4wOTk0Vjc5LjM2NkM4NS40MDQzIDc5LjY2NjQgODUuNDMzOSA3OS45NjI2IDg1LjQ5MzIgODAuMjU0NkM4NS41NTI0IDgwLjU0NjYgODUuNjUxOSA4MC44MTExIDg1Ljc5MTUgODEuMDQ4MUM4NS45MzU0IDgxLjI4NTEgODYuMTI3OSA4MS40NzU1IDg2LjM2OTEgODEuNjE5NEM4Ni42MTQ2IDgxLjc1OSA4Ni45MTkzIDgxLjgyODkgODcuMjgzMiA4MS44Mjg5Wk05Mi41MTM3IDcyLjkxNjdWODIuNjY2N0g5MS4zMzk0VjcyLjkxNjdIOTIuNTEzN1pNOTIuMjM0NCA3OC45NzI0TDkxLjc0NTYgNzguOTUzNEM5MS43NDk4IDc4LjQ4MzYgOTEuODE5NyA3OC4wNDk5IDkxLjk1NTEgNzcuNjUyMUM5Mi4wOTA1IDc3LjI1MDEgOTIuMjgwOSA3Ni45MDEgOTIuNTI2NCA3Ni42MDQ3QzkyLjc3MTggNzYuMzA4NSA5My4wNjM4IDc2LjA4IDkzLjQwMjMgNzUuOTE5MkM5My43NDUxIDc1Ljc1NDIgOTQuMTIzOSA3NS42NzE2IDk0LjUzODYgNzUuNjcxNkM5NC44NzcxIDc1LjY3MTYgOTUuMTgxOCA3NS43MTgyIDk1LjQ1MjYgNzUuODExM0M5NS43MjM1IDc1LjkwMDEgOTUuOTU0MSA3Ni4wNDQgOTYuMTQ0NSA3Ni4yNDI5Qzk2LjMzOTIgNzYuNDQxOCA5Ni40ODczIDc2LjcgOTYuNTg4OSA3Ny4wMTczQzk2LjY5MDQgNzcuMzMwNSA5Ni43NDEyIDc3LjcxMzUgOTYuNzQxMiA3OC4xNjYzVjgyLjY2NjdIOTUuNTYwNVY3OC4xNTM2Qzk1LjU2MDUgNzcuNzkzOSA5NS41MDc2IDc3LjUwNjEgOTUuNDAxOSA3Ny4yOTAzQzk1LjI5NjEgNzcuMDcwMiA5NS4xNDE2IDc2LjkxMTUgOTQuOTM4NSA3Ni44MTQyQzk0LjczNTQgNzYuNzEyNiA5NC40ODU3IDc2LjY2MTkgOTQuMTg5NSA3Ni42NjE5QzkzLjg5NzUgNzYuNjYxOSA5My42MzA5IDc2LjcyMzIgOTMuMzg5NiA3Ni44NDU5QzkzLjE1MjcgNzYuOTY4NyA5Mi45NDc0IDc3LjEzNzkgOTIuNzczOSA3Ny4zNTM4QzkyLjYwNDcgNzcuNTY5NiA5Mi40NzE0IDc3LjgxNzEgOTIuMzc0IDc4LjA5NjRDOTIuMjgwOSA3OC4zNzE1IDkyLjIzNDQgNzguNjYzNSA5Mi4yMzQ0IDc4Ljk3MjRaXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdDxyZWN0IHdpZHRoPVwiMjY4XCIgaGVpZ2h0PVwiMjYuMzMzM1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNSA5MS4zMzMzKVwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHQ8cGF0aCBkPVwiTTI3LjI1MzQgMTA0LjYwMUwyNi4zMTQgMTA0LjM2TDI2Ljc3NzMgOTkuNzU3OEgzMS41MTlWMTAwLjg0M0gyNy43NzM5TDI3LjQ5NDYgMTAzLjM1N0MyNy42NjM5IDEwMy4yNiAyNy44Nzc2IDEwMy4xNjkgMjguMTM1NyAxMDMuMDg0QzI4LjM5ODEgMTAyLjk5OSAyOC42OTg2IDEwMi45NTcgMjkuMDM3MSAxMDIuOTU3QzI5LjQ2NDUgMTAyLjk1NyAyOS44NDc1IDEwMy4wMzEgMzAuMTg2IDEwMy4xNzlDMzAuNTI0NiAxMDMuMzIzIDMwLjgxMjMgMTAzLjUzIDMxLjA0OTMgMTAzLjgwMUMzMS4yOTA1IDEwNC4wNzIgMzEuNDc0NiAxMDQuMzk4IDMxLjYwMTYgMTA0Ljc3OUMzMS43Mjg1IDEwNS4xNiAzMS43OTIgMTA1LjU4NSAzMS43OTIgMTA2LjA1NUMzMS43OTIgMTA2LjQ5OSAzMS43MzA2IDEwNi45MDcgMzEuNjA3OSAxMDcuMjhDMzEuNDg5NCAxMDcuNjUyIDMxLjMwOTYgMTA3Ljk3OCAzMS4wNjg0IDEwOC4yNTdDMzAuODI3MSAxMDguNTMyIDMwLjUyMjUgMTA4Ljc0NiAzMC4xNTQzIDEwOC44OThDMjkuNzkwNCAxMDkuMDUxIDI5LjM2MDggMTA5LjEyNyAyOC44NjU3IDEwOS4xMjdDMjguNDkzMyAxMDkuMTI3IDI4LjE0IDEwOS4wNzYgMjcuODA1NyAxMDguOTc1QzI3LjQ3NTYgMTA4Ljg2OSAyNy4xNzk0IDEwOC43MSAyNi45MTcgMTA4LjQ5OUMyNi42NTg5IDEwOC4yODMgMjYuNDQ3MyAxMDguMDE2IDI2LjI4MjIgMTA3LjY5OUMyNi4xMjE0IDEwNy4zNzcgMjYuMDE5OSAxMDcgMjUuOTc3NSAxMDYuNTY5SDI3LjA5NDdDMjcuMTQ1NSAxMDYuOTE2IDI3LjI0NzEgMTA3LjIwOCAyNy4zOTk0IDEwNy40NDVDMjcuNTUxOCAxMDcuNjgyIDI3Ljc1MDcgMTA3Ljg2MiAyNy45OTYxIDEwNy45ODRDMjguMjQ1OCAxMDguMTAzIDI4LjUzNTYgMTA4LjE2MiAyOC44NjU3IDEwOC4xNjJDMjkuMTQ1IDEwOC4xNjIgMjkuMzkyNiAxMDguMTEzIDI5LjYwODQgMTA4LjAxNkMyOS44MjQyIDEwNy45MTkgMzAuMDA2MiAxMDcuNzc5IDMwLjE1NDMgMTA3LjU5N0MzMC4zMDI0IDEwNy40MTUgMzAuNDE0NiAxMDcuMTk1IDMwLjQ5MDcgMTA2LjkzN0MzMC41NzExIDEwNi42NzkgMzAuNjExMyAxMDYuMzg5IDMwLjYxMTMgMTA2LjA2N0MzMC42MTEzIDEwNS43NzUgMzAuNTcxMSAxMDUuNTA1IDMwLjQ5MDcgMTA1LjI1NUMzMC40MTAzIDEwNS4wMDUgMzAuMjg5NyAxMDQuNzg3IDMwLjEyODkgMTA0LjYwMUMyOS45NzIzIDEwNC40MTUgMjkuNzc5OCAxMDQuMjcxIDI5LjU1MTMgMTA0LjE2OUMyOS4zMjI4IDEwNC4wNjQgMjkuMDYwNCAxMDQuMDExIDI4Ljc2NDIgMTA0LjAxMUMyOC4zNzA2IDEwNC4wMTEgMjguMDcyMyAxMDQuMDY0IDI3Ljg2OTEgMTA0LjE2OUMyNy42NzAyIDEwNC4yNzUgMjcuNDY1IDEwNC40MTkgMjcuMjUzNCAxMDQuNjAxWk0zNy42MDAxIDEwMy40OTdWMTA5SDM2LjQxOTRWMTAyLjEzMkgzNy41MzY2TDM3LjYwMDEgMTAzLjQ5N1pNMzcuMzU4OSAxMDUuMzA2TDM2LjgxMyAxMDUuMjg3QzM2LjgxNzIgMTA0LjgxNyAzNi44Nzg2IDEwNC4zODMgMzYuOTk3MSAxMDMuOTg1QzM3LjExNTYgMTAzLjU4MyAzNy4yOTEyIDEwMy4yMzQgMzcuNTIzOSAxMDIuOTM4QzM3Ljc1NjcgMTAyLjY0MiAzOC4wNDY1IDEwMi40MTMgMzguMzkzNiAxMDIuMjUyQzM4Ljc0MDYgMTAyLjA4NyAzOS4xNDI2IDEwMi4wMDUgMzkuNTk5NiAxMDIuMDA1QzM5LjkyMTIgMTAyLjAwNSA0MC4yMTc0IDEwMi4wNTEgNDAuNDg4MyAxMDIuMTQ1QzQwLjc1OTEgMTAyLjIzMyA0MC45OTQgMTAyLjM3NSA0MS4xOTI5IDEwMi41N0M0MS4zOTE4IDEwMi43NjQgNDEuNTQ2MiAxMDMuMDE0IDQxLjY1NjIgMTAzLjMxOUM0MS43NjYzIDEwMy42MjQgNDEuODIxMyAxMDMuOTkyIDQxLjgyMTMgMTA0LjQyM1YxMDlINDAuNjQ3VjEwNC40OEM0MC42NDcgMTA0LjEyMSA0MC41ODU2IDEwMy44MzMgNDAuNDYyOSAxMDMuNjE3QzQwLjM0NDQgMTAzLjQwMSA0MC4xNzUxIDEwMy4yNDUgMzkuOTU1MSAxMDMuMTQ3QzM5LjczNSAxMDMuMDQ2IDM5LjQ3NjkgMTAyLjk5NSAzOS4xODA3IDEwMi45OTVDMzguODMzNyAxMDIuOTk1IDM4LjU0MzggMTAzLjA1NiAzOC4zMTEgMTAzLjE3OUMzOC4wNzgzIDEwMy4zMDIgMzcuODkyMSAxMDMuNDcxIDM3Ljc1MjQgMTAzLjY4N0MzNy42MTI4IDEwMy45MDMgMzcuNTExMiAxMDQuMTUgMzcuNDQ3OCAxMDQuNDNDMzcuMzg4NSAxMDQuNzA1IDM3LjM1ODkgMTA0Ljk5NyAzNy4zNTg5IDEwNS4zMDZaTTQxLjgwODYgMTA0LjY1OEw0MS4wMjE1IDEwNC44OTlDNDEuMDI1NyAxMDQuNTIzIDQxLjA4NzEgMTA0LjE2MSA0MS4yMDU2IDEwMy44MTRDNDEuMzI4MyAxMDMuNDY3IDQxLjUwMzkgMTAzLjE1OCA0MS43MzI0IDEwMi44ODdDNDEuOTY1MiAxMDIuNjE2IDQyLjI1MDggMTAyLjQwMyA0Mi41ODk0IDEwMi4yNDZDNDIuOTI3OSAxMDIuMDg1IDQzLjMxNTEgMTAyLjAwNSA0My43NTEgMTAyLjAwNUM0NC4xMTkxIDEwMi4wMDUgNDQuNDQ1IDEwMi4wNTQgNDQuNzI4NSAxMDIuMTUxQzQ1LjAxNjMgMTAyLjI0OCA0NS4yNTc1IDEwMi4zOTggNDUuNDUyMSAxMDIuNjAyQzQ1LjY1MSAxMDIuOCA0NS44MDEzIDEwMy4wNTYgNDUuOTAyOCAxMDMuMzdDNDYuMDA0NCAxMDMuNjgzIDQ2LjA1NTIgMTA0LjA1NSA0Ni4wNTUyIDEwNC40ODdWMTA5SDQ0Ljg3NDVWMTA0LjQ3NEM0NC44NzQ1IDEwNC4wODkgNDQuODEzMiAxMDMuNzkxIDQ0LjY5MDQgMTAzLjU3OUM0NC41NzE5IDEwMy4zNjMgNDQuNDAyNyAxMDMuMjEzIDQ0LjE4MjYgMTAzLjEyOEM0My45NjY4IDEwMy4wNCA0My43MDg3IDEwMi45OTUgNDMuNDA4MiAxMDIuOTk1QzQzLjE1MDEgMTAyLjk5NSA0Mi45MjE1IDEwMy4wNCA0Mi43MjI3IDEwMy4xMjhDNDIuNTIzOCAxMDMuMjE3IDQyLjM1NjYgMTAzLjM0IDQyLjIyMTIgMTAzLjQ5N0M0Mi4wODU4IDEwMy42NDkgNDEuOTgyMSAxMDMuODI1IDQxLjkxMDIgMTA0LjAyM0M0MS44NDI0IDEwNC4yMjIgNDEuODA4NiAxMDQuNDM0IDQxLjgwODYgMTA0LjY1OFpNNDkuMTA4NCAxMDIuMTMyVjEwOUg0Ny45Mjc3VjEwMi4xMzJINDkuMTA4NFpNNDcuODM4OSAxMDAuMzFDNDcuODM4OSAxMDAuMTIgNDcuODk2IDk5Ljk1ODggNDguMDEwMyA5OS44Mjc2QzQ4LjEyODcgOTkuNjk2NSA0OC4zMDIyIDk5LjYzMDkgNDguNTMwOCA5OS42MzA5QzQ4Ljc1NSA5OS42MzA5IDQ4LjkyNjQgOTkuNjk2NSA0OS4wNDQ5IDk5LjgyNzZDNDkuMTY3NiA5OS45NTg4IDQ5LjIyOSAxMDAuMTIgNDkuMjI5IDEwMC4zMUM0OS4yMjkgMTAwLjQ5MiA0OS4xNjc2IDEwMC42NDkgNDkuMDQ0OSAxMDAuNzhDNDguOTI2NCAxMDAuOTA3IDQ4Ljc1NSAxMDAuOTcgNDguNTMwOCAxMDAuOTdDNDguMzAyMiAxMDAuOTcgNDguMTI4NyAxMDAuOTA3IDQ4LjAxMDMgMTAwLjc4QzQ3Ljg5NiAxMDAuNjQ5IDQ3LjgzODkgMTAwLjQ5MiA0Ny44Mzg5IDEwMC4zMVpNNTIuMTY4IDEwMy41OThWMTA5SDUwLjk5MzdWMTAyLjEzMkg1Mi4xMDQ1TDUyLjE2OCAxMDMuNTk4Wk01MS44ODg3IDEwNS4zMDZMNTEuMzk5OSAxMDUuMjg3QzUxLjQwNDEgMTA0LjgxNyA1MS40NzQgMTA0LjM4MyA1MS42MDk0IDEwMy45ODVDNTEuNzQ0OCAxMDMuNTgzIDUxLjkzNTIgMTAzLjIzNCA1Mi4xODA3IDEwMi45MzhDNTIuNDI2MSAxMDIuNjQyIDUyLjcxODEgMTAyLjQxMyA1My4wNTY2IDEwMi4yNTJDNTMuMzk5NCAxMDIuMDg3IDUzLjc3ODIgMTAyLjAwNSA1NC4xOTI5IDEwMi4wMDVDNTQuNTMxNCAxMDIuMDA1IDU0LjgzNjEgMTAyLjA1MSA1NS4xMDY5IDEwMi4xNDVDNTUuMzc3OCAxMDIuMjMzIDU1LjYwODQgMTAyLjM3NyA1NS43OTg4IDEwMi41NzZDNTUuOTkzNSAxMDIuNzc1IDU2LjE0MTYgMTAzLjAzMyA1Ni4yNDMyIDEwMy4zNTFDNTYuMzQ0NyAxMDMuNjY0IDU2LjM5NTUgMTA0LjA0NyA1Ni4zOTU1IDEwNC41VjEwOUg1NS4yMTQ4VjEwNC40ODdDNTUuMjE0OCAxMDQuMTI3IDU1LjE2MTkgMTAzLjgzOSA1NS4wNTYyIDEwMy42MjRDNTQuOTUwNCAxMDMuNDAzIDU0Ljc5NTkgMTAzLjI0NSA1NC41OTI4IDEwMy4xNDdDNTQuMzg5NiAxMDMuMDQ2IDU0LjE0IDEwMi45OTUgNTMuODQzOCAxMDIuOTk1QzUzLjU1MTggMTAyLjk5NSA1My4yODUyIDEwMy4wNTYgNTMuMDQzOSAxMDMuMTc5QzUyLjgwNyAxMDMuMzAyIDUyLjYwMTcgMTAzLjQ3MSA1Mi40MjgyIDEwMy42ODdDNTIuMjU5IDEwMy45MDMgNTIuMTI1NyAxMDQuMTUgNTIuMDI4MyAxMDQuNDNDNTEuOTM1MiAxMDQuNzA1IDUxLjg4ODcgMTA0Ljk5NyA1MS44ODg3IDEwNS4zMDZaTTYyLjM4MTMgMTA3LjQxM1YxMDIuMTMySDYzLjU2MlYxMDlINjIuNDM4NUw2Mi4zODEzIDEwNy40MTNaTTYyLjYwMzUgMTA1Ljk2Nkw2My4wOTIzIDEwNS45NTNDNjMuMDkyMyAxMDYuNDEgNjMuMDQzNiAxMDYuODMzIDYyLjk0NjMgMTA3LjIyM0M2Mi44NTMyIDEwNy42MDggNjIuNzAwOCAxMDcuOTQyIDYyLjQ4OTMgMTA4LjIyNkM2Mi4yNzc3IDEwOC41MDkgNjIuMDAwNSAxMDguNzMxIDYxLjY1NzcgMTA4Ljg5MkM2MS4zMTQ5IDEwOS4wNDkgNjAuODk4MSAxMDkuMTI3IDYwLjQwNzIgMTA5LjEyN0M2MC4wNzI5IDEwOS4xMjcgNTkuNzY2MSAxMDkuMDc4IDU5LjQ4NjggMTA4Ljk4MUM1OS4yMTE4IDEwOC44ODQgNTguOTc0OCAxMDguNzMzIDU4Ljc3NTkgMTA4LjUzQzU4LjU3NyAxMDguMzI3IDU4LjQyMjUgMTA4LjA2MyA1OC4zMTI1IDEwNy43MzdDNTguMjA2NyAxMDcuNDExIDU4LjE1MzggMTA3LjAyIDU4LjE1MzggMTA2LjU2MlYxMDIuMTMySDU5LjMyODFWMTA2LjU3NUM1OS4zMjgxIDEwNi44ODQgNTkuMzYyIDEwNy4xNCA1OS40Mjk3IDEwNy4zNDNDNTkuNTAxNiAxMDcuNTQyIDU5LjU5NjggMTA3LjcwMSA1OS43MTUzIDEwNy44MTlDNTkuODM4MSAxMDcuOTM0IDU5Ljk3MzUgMTA4LjAxNCA2MC4xMjE2IDEwOC4wNjFDNjAuMjczOSAxMDguMTA3IDYwLjQzMDUgMTA4LjEzIDYwLjU5MTMgMTA4LjEzQzYxLjA5MDcgMTA4LjEzIDYxLjQ4NjMgMTA4LjAzNSA2MS43NzgzIDEwNy44NDVDNjIuMDcwMyAxMDcuNjUgNjIuMjc5OCAxMDcuMzkgNjIuNDA2NyAxMDcuMDY0QzYyLjUzNzkgMTA2LjczNCA2Mi42MDM1IDEwNi4zNjggNjIuNjAzNSAxMDUuOTY2Wk02OC4yMjc1IDEwMi4xMzJWMTAzLjAzM0g2NC41MTQyVjEwMi4xMzJINjguMjI3NVpNNjUuNzcxIDEwMC40NjJINjYuOTQ1M1YxMDcuMjk5QzY2Ljk0NTMgMTA3LjUzMiA2Ni45ODEzIDEwNy43MDcgNjcuMDUzMiAxMDcuODI2QzY3LjEyNTIgMTA3Ljk0NCA2Ny4yMTgzIDEwOC4wMjIgNjcuMzMyNSAxMDguMDYxQzY3LjQ0NjggMTA4LjA5OSA2Ny41Njk1IDEwOC4xMTggNjcuNzAwNyAxMDguMTE4QzY3Ljc5OCAxMDguMTE4IDY3Ljg5OTYgMTA4LjEwOSA2OC4wMDU0IDEwOC4wOTJDNjguMTE1NCAxMDguMDcxIDY4LjE5NzkgMTA4LjA1NCA2OC4yNTI5IDEwOC4wNDJMNjguMjU5MyAxMDlDNjguMTY2MiAxMDkuMDMgNjguMDQzNSAxMDkuMDU3IDY3Ljg5MTEgMTA5LjA4M0M2Ny43NDMgMTA5LjExMiA2Ny41NjMyIDEwOS4xMjcgNjcuMzUxNiAxMDkuMTI3QzY3LjA2MzggMTA5LjEyNyA2Ni43OTkzIDEwOS4wNyA2Ni41NTgxIDEwOC45NTZDNjYuMzE2OSAxMDguODQxIDY2LjEyNDMgMTA4LjY1MSA2NS45ODA1IDEwOC4zODRDNjUuODQwOCAxMDguMTEzIDY1Ljc3MSAxMDcuNzUgNjUuNzcxIDEwNy4yOTJWMTAwLjQ2MlpNNzIuNDU1MSAxMDkuMTI3QzcxLjk3NjkgMTA5LjEyNyA3MS41NDMxIDEwOS4wNDcgNzEuMTUzOCAxMDguODg2QzcwLjc2ODcgMTA4LjcyMSA3MC40MzY1IDEwOC40OSA3MC4xNTcyIDEwOC4xOTRDNjkuODgyMiAxMDcuODk4IDY5LjY3MDYgMTA3LjU0NiA2OS41MjI1IDEwNy4xNEM2OS4zNzQzIDEwNi43MzQgNjkuMzAwMyAxMDYuMjkgNjkuMzAwMyAxMDUuODA3VjEwNS41NDFDNjkuMzAwMyAxMDQuOTgyIDY5LjM4MjggMTA0LjQ4NSA2OS41NDc5IDEwNC4wNDlDNjkuNzEyOSAxMDMuNjA5IDY5LjkzNzIgMTAzLjIzNiA3MC4yMjA3IDEwMi45MzJDNzAuNTA0MiAxMDIuNjI3IDcwLjgyNTggMTAyLjM5NiA3MS4xODU1IDEwMi4yNEM3MS41NDUyIDEwMi4wODMgNzEuOTE3NiAxMDIuMDA1IDcyLjMwMjcgMTAyLjAwNUM3Mi43OTM2IDEwMi4wMDUgNzMuMjE2OCAxMDIuMDkgNzMuNTcyMyAxMDIuMjU5QzczLjkzMiAxMDIuNDI4IDc0LjIyNjEgMTAyLjY2NSA3NC40NTQ2IDEwMi45N0M3NC42ODMxIDEwMy4yNyA3NC44NTI0IDEwMy42MjYgNzQuOTYyNCAxMDQuMDM2Qzc1LjA3MjQgMTA0LjQ0MiA3NS4xMjc0IDEwNC44ODcgNzUuMTI3NCAxMDUuMzY5VjEwNS44OTZINjkuOTk4NVYxMDQuOTM4SDczLjk1MzFWMTA0Ljg0OUM3My45MzYyIDEwNC41NDQgNzMuODcyNyAxMDQuMjQ4IDczLjc2MjcgMTAzLjk2QzczLjY1NjkgMTAzLjY3MiA3My40ODc2IDEwMy40MzUgNzMuMjU0OSAxMDMuMjQ5QzczLjAyMjEgMTAzLjA2MyA3Mi43MDQ4IDEwMi45NyA3Mi4zMDI3IDEwMi45N0M3Mi4wMzYxIDEwMi45NyA3MS43OTA3IDEwMy4wMjcgNzEuNTY2NCAxMDMuMTQxQzcxLjM0MjEgMTAzLjI1MSA3MS4xNDk2IDEwMy40MTYgNzAuOTg4OCAxMDMuNjM2QzcwLjgyOCAxMDMuODU2IDcwLjcwMzEgMTA0LjEyNSA3MC42MTQzIDEwNC40NDJDNzAuNTI1NCAxMDQuNzYgNzAuNDgxIDEwNS4xMjYgNzAuNDgxIDEwNS41NDFWMTA1LjgwN0M3MC40ODEgMTA2LjEzMyA3MC41MjU0IDEwNi40NCA3MC42MTQzIDEwNi43MjhDNzAuNzA3NCAxMDcuMDExIDcwLjg0MDcgMTA3LjI2MSA3MS4wMTQyIDEwNy40NzdDNzEuMTkxOSAxMDcuNjkyIDcxLjQwNTYgMTA3Ljg2MiA3MS42NTUzIDEwNy45ODRDNzEuOTA5MiAxMDguMTA3IDcyLjE5NjkgMTA4LjE2OCA3Mi41MTg2IDEwOC4xNjhDNzIuOTMzMyAxMDguMTY4IDczLjI4NDUgMTA4LjA4NCA3My41NzIzIDEwNy45MTVDNzMuODYgMTA3Ljc0NSA3NC4xMTE4IDEwNy41MTkgNzQuMzI3NiAxMDcuMjM1TDc1LjAzODYgMTA3LjhDNzQuODkwNSAxMDguMDI1IDc0LjcwMjEgMTA4LjIzOCA3NC40NzM2IDEwOC40NDFDNzQuMjQ1MSAxMDguNjQ1IDczLjk2MzcgMTA4LjgxIDczLjYyOTQgMTA4LjkzN0M3My4yOTkzIDEwOS4wNjMgNzIuOTA3OSAxMDkuMTI3IDcyLjQ1NTEgMTA5LjEyN1pNODAuNDk3NiAxMDcuMTc4QzgwLjQ5NzYgMTA3LjAwOSA4MC40NTk1IDEwNi44NTIgODAuMzgzMyAxMDYuNzA4QzgwLjMxMTQgMTA2LjU2IDgwLjE2MTEgMTA2LjQyNyA3OS45MzI2IDEwNi4zMDlDNzkuNzA4MyAxMDYuMTg2IDc5LjM2OTggMTA2LjA4IDc4LjkxNyAxMDUuOTkxQzc4LjUzNjEgMTA1LjkxMSA3OC4xOTEyIDEwNS44MTYgNzcuODgyMyAxMDUuNzA2Qzc3LjU3NzYgMTA1LjU5NiA3Ny4zMTc0IDEwNS40NjIgNzcuMTAxNiAxMDUuMzA2Qzc2Ljg5IDEwNS4xNDkgNzYuNzI3MSAxMDQuOTY1IDc2LjYxMjggMTA0Ljc1M0M3Ni40OTg1IDEwNC41NDIgNzYuNDQxNCAxMDQuMjk0IDc2LjQ0MTQgMTA0LjAxMUM3Ni40NDE0IDEwMy43NCA3Ni41MDA3IDEwMy40ODQgNzYuNjE5MSAxMDMuMjQzQzc2Ljc0MTkgMTAzLjAwMSA3Ni45MTMyIDEwMi43ODggNzcuMTMzMyAxMDIuNjAyQzc3LjM1NzYgMTAyLjQxNSA3Ny42MjYzIDEwMi4yNjkgNzcuOTM5NSAxMDIuMTY0Qzc4LjI1MjYgMTAyLjA1OCA3OC42MDE3IDEwMi4wMDUgNzguOTg2OCAxMDIuMDA1Qzc5LjUzNjkgMTAyLjAwNSA4MC4wMDY3IDEwMi4xMDIgODAuMzk2IDEwMi4yOTdDODAuNzg1MyAxMDIuNDkyIDgxLjA4MzcgMTAyLjc1MiA4MS4yOTEgMTAzLjA3OEM4MS40OTg0IDEwMy4zOTkgODEuNjAyMSAxMDMuNzU3IDgxLjYwMjEgMTA0LjE1SDgwLjQyNzdDODAuNDI3NyAxMDMuOTYgODAuMzcwNiAxMDMuNzc2IDgwLjI1NjMgMTAzLjU5OEM4MC4xNDYzIDEwMy40MTYgNzkuOTgzNCAxMDMuMjY2IDc5Ljc2NzYgMTAzLjE0N0M3OS41NTYgMTAzLjAyOSA3OS4yOTU3IDEwMi45NyA3OC45ODY4IDEwMi45N0M3OC42NjEgMTAyLjk3IDc4LjM5NjUgMTAzLjAyMSA3OC4xOTM0IDEwMy4xMjJDNzcuOTk0NSAxMDMuMjE5IDc3Ljg0ODUgMTAzLjM0NCA3Ny43NTU0IDEwMy40OTdDNzcuNjY2NSAxMDMuNjQ5IDc3LjYyMjEgMTAzLjgxIDc3LjYyMjEgMTAzLjk3OUM3Ny42MjIxIDEwNC4xMDYgNzcuNjQzMiAxMDQuMjIgNzcuNjg1NSAxMDQuMzIyQzc3LjczMjEgMTA0LjQxOSA3Ny44MTI1IDEwNC41MSA3Ny45MjY4IDEwNC41OTVDNzguMDQxIDEwNC42NzUgNzguMjAxOCAxMDQuNzUxIDc4LjQwOTIgMTA0LjgyM0M3OC42MTY1IDEwNC44OTUgNzguODgxIDEwNC45NjcgNzkuMjAyNiAxMDUuMDM5Qzc5Ljc2NTUgMTA1LjE2NiA4MC4yMjg4IDEwNS4zMTggODAuNTkyOCAxMDUuNDk2QzgwLjk1NjcgMTA1LjY3NCA4MS4yMjc1IDEwNS44OTIgODEuNDA1MyAxMDYuMTVDODEuNTgzIDEwNi40MDggODEuNjcxOSAxMDYuNzIxIDgxLjY3MTkgMTA3LjA4OUM4MS42NzE5IDEwNy4zOSA4MS42MDg0IDEwNy42NjUgODEuNDgxNCAxMDcuOTE1QzgxLjM1ODcgMTA4LjE2NCA4MS4xNzg5IDEwOC4zOCA4MC45NDE5IDEwOC41NjJDODAuNzA5MSAxMDguNzQgODAuNDI5OSAxMDguODc5IDgwLjEwNCAxMDguOTgxQzc5Ljc4MjQgMTA5LjA3OCA3OS40MjA2IDEwOS4xMjcgNzkuMDE4NiAxMDkuMTI3Qzc4LjQxMzQgMTA5LjEyNyA3Ny45MDE0IDEwOS4wMTkgNzcuNDgyNCAxMDguODAzQzc3LjA2MzUgMTA4LjU4NyA3Ni43NDYxIDEwOC4zMDggNzYuNTMwMyAxMDcuOTY1Qzc2LjMxNDUgMTA3LjYyMyA3Ni4yMDY1IDEwNy4yNjEgNzYuMjA2NSAxMDYuODhINzcuMzg3MkM3Ny40MDQxIDEwNy4yMDEgNzcuNDk3MiAxMDcuNDU4IDc3LjY2NjUgMTA3LjY0OEM3Ny44MzU4IDEwNy44MzQgNzguMDQzMSAxMDcuOTY3IDc4LjI4ODYgMTA4LjA0OEM3OC41MzQgMTA4LjEyNCA3OC43NzczIDEwOC4xNjIgNzkuMDE4NiAxMDguMTYyQzc5LjM0MDIgMTA4LjE2MiA3OS42MDg5IDEwOC4xMiA3OS44MjQ3IDEwOC4wMzVDODAuMDQ0OCAxMDcuOTUxIDgwLjIxMTkgMTA3LjgzNCA4MC4zMjYyIDEwNy42ODZDODAuNDQwNCAxMDcuNTM4IDgwLjQ5NzYgMTA3LjM2OSA4MC40OTc2IDEwNy4xNzhaTTg5LjMxNDUgMTAyLjEzMlYxMDMuMDMzSDg1LjYwMTFWMTAyLjEzMkg4OS4zMTQ1Wk04Ni44NTc5IDEwMC40NjJIODguMDMyMlYxMDcuMjk5Qzg4LjAzMjIgMTA3LjUzMiA4OC4wNjgyIDEwNy43MDcgODguMTQwMSAxMDcuODI2Qzg4LjIxMjEgMTA3Ljk0NCA4OC4zMDUyIDEwOC4wMjIgODguNDE5NCAxMDguMDYxQzg4LjUzMzcgMTA4LjA5OSA4OC42NTY0IDEwOC4xMTggODguNzg3NiAxMDguMTE4Qzg4Ljg4NDkgMTA4LjExOCA4OC45ODY1IDEwOC4xMDkgODkuMDkyMyAxMDguMDkyQzg5LjIwMjMgMTA4LjA3MSA4OS4yODQ4IDEwOC4wNTQgODkuMzM5OCAxMDguMDQyTDg5LjM0NjIgMTA5Qzg5LjI1MzEgMTA5LjAzIDg5LjEzMDQgMTA5LjA1NyA4OC45NzggMTA5LjA4M0M4OC44Mjk5IDEwOS4xMTIgODguNjUwMSAxMDkuMTI3IDg4LjQzODUgMTA5LjEyN0M4OC4xNTA3IDEwOS4xMjcgODcuODg2MiAxMDkuMDcgODcuNjQ1IDEwOC45NTZDODcuNDAzOCAxMDguODQxIDg3LjIxMTMgMTA4LjY1MSA4Ny4wNjc0IDEwOC4zODRDODYuOTI3NyAxMDguMTEzIDg2Ljg1NzkgMTA3Ljc1IDg2Ljg1NzkgMTA3LjI5MlYxMDAuNDYyWk05MC4yNTM5IDEwNS42NDJWMTA1LjQ5NkM5MC4yNTM5IDEwNS4wMDEgOTAuMzI1OCAxMDQuNTQyIDkwLjQ2OTcgMTA0LjExOUM5MC42MTM2IDEwMy42OTEgOTAuODIxIDEwMy4zMjEgOTEuMDkxOCAxMDMuMDA4QzkxLjM2MjYgMTAyLjY5IDkxLjY5MDYgMTAyLjQ0NSA5Mi4wNzU3IDEwMi4yNzFDOTIuNDYwOCAxMDIuMDk0IDkyLjg5MjQgMTAyLjAwNSA5My4zNzA2IDEwMi4wMDVDOTMuODUzIDEwMi4wMDUgOTQuMjg2OCAxMDIuMDk0IDk0LjY3MTkgMTAyLjI3MUM5NS4wNjEyIDEwMi40NDUgOTUuMzkxMyAxMDIuNjkgOTUuNjYyMSAxMDMuMDA4Qzk1LjkzNzIgMTAzLjMyMSA5Ni4xNDY2IDEwMy42OTEgOTYuMjkwNSAxMDQuMTE5Qzk2LjQzNDQgMTA0LjU0MiA5Ni41MDYzIDEwNS4wMDEgOTYuNTA2MyAxMDUuNDk2VjEwNS42NDJDOTYuNTA2MyAxMDYuMTM3IDk2LjQzNDQgMTA2LjU5NiA5Ni4yOTA1IDEwNy4wMkM5Ni4xNDY2IDEwNy40NDMgOTUuOTM3MiAxMDcuODEzIDk1LjY2MjEgMTA4LjEzQzk1LjM5MTMgMTA4LjQ0NCA5NS4wNjMzIDEwOC42ODkgOTQuNjc4MiAxMDguODY3Qzk0LjI5NzQgMTA5LjA0IDkzLjg2NTcgMTA5LjEyNyA5My4zODMzIDEwOS4xMjdDOTIuOTAwOSAxMDkuMTI3IDkyLjQ2NzEgMTA5LjA0IDkyLjA4MiAxMDguODY3QzkxLjY5NjkgMTA4LjY4OSA5MS4zNjY5IDEwOC40NDQgOTEuMDkxOCAxMDguMTNDOTAuODIxIDEwNy44MTMgOTAuNjEzNiAxMDcuNDQzIDkwLjQ2OTcgMTA3LjAyQzkwLjMyNTggMTA2LjU5NiA5MC4yNTM5IDEwNi4xMzcgOTAuMjUzOSAxMDUuNjQyWk05MS40MjgyIDEwNS40OTZWMTA1LjY0MkM5MS40MjgyIDEwNS45ODUgOTEuNDY4NCAxMDYuMzA5IDkxLjU0ODggMTA2LjYxM0M5MS42MjkyIDEwNi45MTQgOTEuNzQ5OCAxMDcuMTggOTEuOTEwNiAxMDcuNDEzQzkyLjA3NTcgMTA3LjY0NiA5Mi4yODA5IDEwNy44MyA5Mi41MjY0IDEwNy45NjVDOTIuNzcxOCAxMDguMDk3IDkzLjA1NzUgMTA4LjE2MiA5My4zODMzIDEwOC4xNjJDOTMuNzA0OSAxMDguMTYyIDkzLjk4NjMgMTA4LjA5NyA5NC4yMjc1IDEwNy45NjVDOTQuNDczIDEwNy44MyA5NC42NzYxIDEwNy42NDYgOTQuODM2OSAxMDcuNDEzQzk0Ljk5NzcgMTA3LjE4IDk1LjExODMgMTA2LjkxNCA5NS4xOTg3IDEwNi42MTNDOTUuMjgzNCAxMDYuMzA5IDk1LjMyNTcgMTA1Ljk4NSA5NS4zMjU3IDEwNS42NDJWMTA1LjQ5NkM5NS4zMjU3IDEwNS4xNTggOTUuMjgzNCAxMDQuODM4IDk1LjE5ODcgMTA0LjUzOEM5NS4xMTgzIDEwNC4yMzMgOTQuOTk1NiAxMDMuOTY0IDk0LjgzMDYgMTAzLjczMUM5NC42Njk4IDEwMy40OTQgOTQuNDY2NiAxMDMuMzA4IDk0LjIyMTIgMTAzLjE3M0M5My45OCAxMDMuMDM3IDkzLjY5NjUgMTAyLjk3IDkzLjM3MDYgMTAyLjk3QzkzLjA0OSAxMDIuOTcgOTIuNzY1NSAxMDMuMDM3IDkyLjUyIDEwMy4xNzNDOTIuMjc4OCAxMDMuMzA4IDkyLjA3NTcgMTAzLjQ5NCA5MS45MTA2IDEwMy43MzFDOTEuNzQ5OCAxMDMuOTY0IDkxLjYyOTIgMTA0LjIzMyA5MS41NDg4IDEwNC41MzhDOTEuNDY4NCAxMDQuODM4IDkxLjQyODIgMTA1LjE1OCA5MS40MjgyIDEwNS40OTZaTTEwNC4wNzkgMTAyLjEzMlYxMDMuMDMzSDEwMC4zNjZWMTAyLjEzMkgxMDQuMDc5Wk0xMDEuNjIzIDEwMC40NjJIMTAyLjc5N1YxMDcuMjk5QzEwMi43OTcgMTA3LjUzMiAxMDIuODMzIDEwNy43MDcgMTAyLjkwNSAxMDcuODI2QzEwMi45NzcgMTA3Ljk0NCAxMDMuMDcgMTA4LjAyMiAxMDMuMTg0IDEwOC4wNjFDMTAzLjI5OCAxMDguMDk5IDEwMy40MjEgMTA4LjExOCAxMDMuNTUyIDEwOC4xMThDMTAzLjY1IDEwOC4xMTggMTAzLjc1MSAxMDguMTA5IDEwMy44NTcgMTA4LjA5MkMxMDMuOTY3IDEwOC4wNzEgMTA0LjA0OSAxMDguMDU0IDEwNC4xMDQgMTA4LjA0MkwxMDQuMTExIDEwOUMxMDQuMDE4IDEwOS4wMyAxMDMuODk1IDEwOS4wNTcgMTAzLjc0MyAxMDkuMDgzQzEwMy41OTUgMTA5LjExMiAxMDMuNDE1IDEwOS4xMjcgMTAzLjIwMyAxMDkuMTI3QzEwMi45MTUgMTA5LjEyNyAxMDIuNjUxIDEwOS4wNyAxMDIuNDEgMTA4Ljk1NkMxMDIuMTY4IDEwOC44NDEgMTAxLjk3NiAxMDguNjUxIDEwMS44MzIgMTA4LjM4NEMxMDEuNjkyIDEwOC4xMTMgMTAxLjYyMyAxMDcuNzUgMTAxLjYyMyAxMDcuMjkyVjEwMC40NjJaTTEwNi42MzEgOTkuMjVWMTA5SDEwNS40NTdWOTkuMjVIMTA2LjYzMVpNMTA2LjM1MiAxMDUuMzA2TDEwNS44NjMgMTA1LjI4N0MxMDUuODY3IDEwNC44MTcgMTA1LjkzNyAxMDQuMzgzIDEwNi4wNzIgMTAzLjk4NUMxMDYuMjA4IDEwMy41ODMgMTA2LjM5OCAxMDMuMjM0IDEwNi42NDQgMTAyLjkzOEMxMDYuODg5IDEwMi42NDIgMTA3LjE4MSAxMDIuNDEzIDEwNy41MiAxMDIuMjUyQzEwNy44NjIgMTAyLjA4NyAxMDguMjQxIDEwMi4wMDUgMTA4LjY1NiAxMDIuMDA1QzEwOC45OTQgMTAyLjAwNSAxMDkuMjk5IDEwMi4wNTEgMTA5LjU3IDEwMi4xNDVDMTA5Ljg0MSAxMDIuMjMzIDExMC4wNzEgMTAyLjM3NyAxMTAuMjYyIDEwMi41NzZDMTEwLjQ1NiAxMDIuNzc1IDExMC42MDQgMTAzLjAzMyAxMTAuNzA2IDEwMy4zNTFDMTEwLjgwOCAxMDMuNjY0IDExMC44NTggMTA0LjA0NyAxMTAuODU4IDEwNC41VjEwOUgxMDkuNjc4VjEwNC40ODdDMTA5LjY3OCAxMDQuMTI3IDEwOS42MjUgMTAzLjgzOSAxMDkuNTE5IDEwMy42MjRDMTA5LjQxMyAxMDMuNDAzIDEwOS4yNTkgMTAzLjI0NSAxMDkuMDU2IDEwMy4xNDdDMTA4Ljg1MyAxMDMuMDQ2IDEwOC42MDMgMTAyLjk5NSAxMDguMzA3IDEwMi45OTVDMTA4LjAxNSAxMDIuOTk1IDEwNy43NDggMTAzLjA1NiAxMDcuNTA3IDEwMy4xNzlDMTA3LjI3IDEwMy4zMDIgMTA3LjA2NSAxMDMuNDcxIDEwNi44OTEgMTAzLjY4N0MxMDYuNzIyIDEwMy45MDMgMTA2LjU4OSAxMDQuMTUgMTA2LjQ5MSAxMDQuNDNDMTA2LjM5OCAxMDQuNzA1IDEwNi4zNTIgMTA0Ljk5NyAxMDYuMzUyIDEwNS4zMDZaTTExNS40NjcgMTA5LjEyN0MxMTQuOTg5IDEwOS4xMjcgMTE0LjU1NSAxMDkuMDQ3IDExNC4xNjYgMTA4Ljg4NkMxMTMuNzggMTA4LjcyMSAxMTMuNDQ4IDEwOC40OSAxMTMuMTY5IDEwOC4xOTRDMTEyLjg5NCAxMDcuODk4IDExMi42ODIgMTA3LjU0NiAxMTIuNTM0IDEwNy4xNEMxMTIuMzg2IDEwNi43MzQgMTEyLjMxMiAxMDYuMjkgMTEyLjMxMiAxMDUuODA3VjEwNS41NDFDMTEyLjMxMiAxMDQuOTgyIDExMi4zOTUgMTA0LjQ4NSAxMTIuNTYgMTA0LjA0OUMxMTIuNzI1IDEwMy42MDkgMTEyLjk0OSAxMDMuMjM2IDExMy4yMzIgMTAyLjkzMkMxMTMuNTE2IDEwMi42MjcgMTEzLjgzOCAxMDIuMzk2IDExNC4xOTcgMTAyLjI0QzExNC41NTcgMTAyLjA4MyAxMTQuOTI5IDEwMi4wMDUgMTE1LjMxNCAxMDIuMDA1QzExNS44MDUgMTAyLjAwNSAxMTYuMjI5IDEwMi4wOSAxMTYuNTg0IDEwMi4yNTlDMTE2Ljk0NCAxMDIuNDI4IDExNy4yMzggMTAyLjY2NSAxMTcuNDY2IDEwMi45N0MxMTcuNjk1IDEwMy4yNyAxMTcuODY0IDEwMy42MjYgMTE3Ljk3NCAxMDQuMDM2QzExOC4wODQgMTA0LjQ0MiAxMTguMTM5IDEwNC44ODcgMTE4LjEzOSAxMDUuMzY5VjEwNS44OTZIMTEzLjAxVjEwNC45MzhIMTE2Ljk2NVYxMDQuODQ5QzExNi45NDggMTA0LjU0NCAxMTYuODg0IDEwNC4yNDggMTE2Ljc3NCAxMDMuOTZDMTE2LjY2OSAxMDMuNjcyIDExNi40OTkgMTAzLjQzNSAxMTYuMjY3IDEwMy4yNDlDMTE2LjAzNCAxMDMuMDYzIDExNS43MTYgMTAyLjk3IDExNS4zMTQgMTAyLjk3QzExNS4wNDggMTAyLjk3IDExNC44MDIgMTAzLjAyNyAxMTQuNTc4IDEwMy4xNDFDMTE0LjM1NCAxMDMuMjUxIDExNC4xNjEgMTAzLjQxNiAxMTQgMTAzLjYzNkMxMTMuODQgMTAzLjg1NiAxMTMuNzE1IDEwNC4xMjUgMTEzLjYyNiAxMDQuNDQyQzExMy41MzcgMTA0Ljc2IDExMy40OTMgMTA1LjEyNiAxMTMuNDkzIDEwNS41NDFWMTA1LjgwN0MxMTMuNDkzIDEwNi4xMzMgMTEzLjUzNyAxMDYuNDQgMTEzLjYyNiAxMDYuNzI4QzExMy43MTkgMTA3LjAxMSAxMTMuODUyIDEwNy4yNjEgMTE0LjAyNiAxMDcuNDc3QzExNC4yMDQgMTA3LjY5MiAxMTQuNDE3IDEwNy44NjIgMTE0LjY2NyAxMDcuOTg0QzExNC45MjEgMTA4LjEwNyAxMTUuMjA5IDEwOC4xNjggMTE1LjUzIDEwOC4xNjhDMTE1Ljk0NSAxMDguMTY4IDExNi4yOTYgMTA4LjA4NCAxMTYuNTg0IDEwNy45MTVDMTE2Ljg3MiAxMDcuNzQ1IDExNy4xMjQgMTA3LjUxOSAxMTcuMzM5IDEwNy4yMzVMMTE4LjA1IDEwNy44QzExNy45MDIgMTA4LjAyNSAxMTcuNzE0IDEwOC4yMzggMTE3LjQ4NSAxMDguNDQxQzExNy4yNTcgMTA4LjY0NSAxMTYuOTc1IDEwOC44MSAxMTYuNjQxIDEwOC45MzdDMTE2LjMxMSAxMDkuMDYzIDExNS45MiAxMDkuMTI3IDExNS40NjcgMTA5LjEyN1pNMTI2LjczNCAxMDcuMTc4QzEyNi43MzQgMTA3LjAwOSAxMjYuNjk2IDEwNi44NTIgMTI2LjYyIDEwNi43MDhDMTI2LjU0OCAxMDYuNTYgMTI2LjM5NyAxMDYuNDI3IDEyNi4xNjkgMTA2LjMwOUMxMjUuOTQ1IDEwNi4xODYgMTI1LjYwNiAxMDYuMDggMTI1LjE1MyAxMDUuOTkxQzEyNC43NzIgMTA1LjkxMSAxMjQuNDI4IDEwNS44MTYgMTI0LjExOSAxMDUuNzA2QzEyMy44MTQgMTA1LjU5NiAxMjMuNTU0IDEwNS40NjIgMTIzLjMzOCAxMDUuMzA2QzEyMy4xMjYgMTA1LjE0OSAxMjIuOTYzIDEwNC45NjUgMTIyLjg0OSAxMDQuNzUzQzEyMi43MzUgMTA0LjU0MiAxMjIuNjc4IDEwNC4yOTQgMTIyLjY3OCAxMDQuMDExQzEyMi42NzggMTAzLjc0IDEyMi43MzcgMTAzLjQ4NCAxMjIuODU1IDEwMy4yNDNDMTIyLjk3OCAxMDMuMDAxIDEyMy4xNSAxMDIuNzg4IDEyMy4zNyAxMDIuNjAyQzEyMy41OTQgMTAyLjQxNSAxMjMuODYzIDEwMi4yNjkgMTI0LjE3NiAxMDIuMTY0QzEyNC40ODkgMTAyLjA1OCAxMjQuODM4IDEwMi4wMDUgMTI1LjIyMyAxMDIuMDA1QzEyNS43NzMgMTAyLjAwNSAxMjYuMjQzIDEwMi4xMDIgMTI2LjYzMiAxMDIuMjk3QzEyNy4wMjIgMTAyLjQ5MiAxMjcuMzIgMTAyLjc1MiAxMjcuNTI3IDEwMy4wNzhDMTI3LjczNSAxMDMuMzk5IDEyNy44MzggMTAzLjc1NyAxMjcuODM4IDEwNC4xNUgxMjYuNjY0QzEyNi42NjQgMTAzLjk2IDEyNi42MDcgMTAzLjc3NiAxMjYuNDkzIDEwMy41OThDMTI2LjM4MyAxMDMuNDE2IDEyNi4yMiAxMDMuMjY2IDEyNi4wMDQgMTAzLjE0N0MxMjUuNzkyIDEwMy4wMjkgMTI1LjUzMiAxMDIuOTcgMTI1LjIyMyAxMDIuOTdDMTI0Ljg5NyAxMDIuOTcgMTI0LjYzMyAxMDMuMDIxIDEyNC40MyAxMDMuMTIyQzEyNC4yMzEgMTAzLjIxOSAxMjQuMDg1IDEwMy4zNDQgMTIzLjk5MiAxMDMuNDk3QzEyMy45MDMgMTAzLjY0OSAxMjMuODU4IDEwMy44MSAxMjMuODU4IDEwMy45NzlDMTIzLjg1OCAxMDQuMTA2IDEyMy44OCAxMDQuMjIgMTIzLjkyMiAxMDQuMzIyQzEyMy45NjggMTA0LjQxOSAxMjQuMDQ5IDEwNC41MSAxMjQuMTYzIDEwNC41OTVDMTI0LjI3NyAxMDQuNjc1IDEyNC40MzggMTA0Ljc1MSAxMjQuNjQ2IDEwNC44MjNDMTI0Ljg1MyAxMDQuODk1IDEyNS4xMTcgMTA0Ljk2NyAxMjUuNDM5IDEwNS4wMzlDMTI2LjAwMiAxMDUuMTY2IDEyNi40NjUgMTA1LjMxOCAxMjYuODI5IDEwNS40OTZDMTI3LjE5MyAxMDUuNjc0IDEyNy40NjQgMTA1Ljg5MiAxMjcuNjQyIDEwNi4xNUMxMjcuODE5IDEwNi40MDggMTI3LjkwOCAxMDYuNzIxIDEyNy45MDggMTA3LjA4OUMxMjcuOTA4IDEwNy4zOSAxMjcuODQ1IDEwNy42NjUgMTI3LjcxOCAxMDcuOTE1QzEyNy41OTUgMTA4LjE2NCAxMjcuNDE1IDEwOC4zOCAxMjcuMTc4IDEwOC41NjJDMTI2Ljk0NSAxMDguNzQgMTI2LjY2NiAxMDguODc5IDEyNi4zNCAxMDguOTgxQzEyNi4wMTkgMTA5LjA3OCAxMjUuNjU3IDEwOS4xMjcgMTI1LjI1NSAxMDkuMTI3QzEyNC42NSAxMDkuMTI3IDEyNC4xMzggMTA5LjAxOSAxMjMuNzE5IDEwOC44MDNDMTIzLjMgMTA4LjU4NyAxMjIuOTgyIDEwOC4zMDggMTIyLjc2NyAxMDcuOTY1QzEyMi41NTEgMTA3LjYyMyAxMjIuNDQzIDEwNy4yNjEgMTIyLjQ0MyAxMDYuODhIMTIzLjYyNEMxMjMuNjQgMTA3LjIwMSAxMjMuNzM0IDEwNy40NTggMTIzLjkwMyAxMDcuNjQ4QzEyNC4wNzIgMTA3LjgzNCAxMjQuMjc5IDEwNy45NjcgMTI0LjUyNSAxMDguMDQ4QzEyNC43NyAxMDguMTI0IDEyNS4wMTQgMTA4LjE2MiAxMjUuMjU1IDEwOC4xNjJDMTI1LjU3NiAxMDguMTYyIDEyNS44NDUgMTA4LjEyIDEyNi4wNjEgMTA4LjAzNUMxMjYuMjgxIDEwNy45NTEgMTI2LjQ0OCAxMDcuODM0IDEyNi41NjIgMTA3LjY4NkMxMjYuNjc3IDEwNy41MzggMTI2LjczNCAxMDcuMzY5IDEyNi43MzQgMTA3LjE3OFpNMTMwLjYyNSA5OS4yNVYxMDlIMTI5LjQ1MVY5OS4yNUgxMzAuNjI1Wk0xMzAuMzQ2IDEwNS4zMDZMMTI5Ljg1NyAxMDUuMjg3QzEyOS44NjEgMTA0LjgxNyAxMjkuOTMxIDEwNC4zODMgMTMwLjA2NiAxMDMuOTg1QzEzMC4yMDIgMTAzLjU4MyAxMzAuMzkyIDEwMy4yMzQgMTMwLjYzOCAxMDIuOTM4QzEzMC44ODMgMTAyLjY0MiAxMzEuMTc1IDEwMi40MTMgMTMxLjUxNCAxMDIuMjUyQzEzMS44NTYgMTAyLjA4NyAxMzIuMjM1IDEwMi4wMDUgMTMyLjY1IDEwMi4wMDVDMTMyLjk4OCAxMDIuMDA1IDEzMy4yOTMgMTAyLjA1MSAxMzMuNTY0IDEwMi4xNDVDMTMzLjgzNSAxMDIuMjMzIDEzNC4wNjUgMTAyLjM3NyAxMzQuMjU2IDEwMi41NzZDMTM0LjQ1MSAxMDIuNzc1IDEzNC41OTkgMTAzLjAzMyAxMzQuNyAxMDMuMzUxQzEzNC44MDIgMTAzLjY2NCAxMzQuODUzIDEwNC4wNDcgMTM0Ljg1MyAxMDQuNVYxMDlIMTMzLjY3MlYxMDQuNDg3QzEzMy42NzIgMTA0LjEyNyAxMzMuNjE5IDEwMy44MzkgMTMzLjUxMyAxMDMuNjI0QzEzMy40MDcgMTAzLjQwMyAxMzMuMjUzIDEwMy4yNDUgMTMzLjA1IDEwMy4xNDdDMTMyLjg0NyAxMDMuMDQ2IDEzMi41OTcgMTAyLjk5NSAxMzIuMzAxIDEwMi45OTVDMTMyLjAwOSAxMDIuOTk1IDEzMS43NDIgMTAzLjA1NiAxMzEuNTAxIDEwMy4xNzlDMTMxLjI2NCAxMDMuMzAyIDEzMS4wNTkgMTAzLjQ3MSAxMzAuODg1IDEwMy42ODdDMTMwLjcxNiAxMDMuOTAzIDEzMC41ODMgMTA0LjE1IDEzMC40ODUgMTA0LjQzQzEzMC4zOTIgMTA0LjcwNSAxMzAuMzQ2IDEwNC45OTcgMTMwLjM0NiAxMDUuMzA2Wk0xMzYuMyAxMDUuNjQyVjEwNS40OTZDMTM2LjMgMTA1LjAwMSAxMzYuMzcyIDEwNC41NDIgMTM2LjUxNiAxMDQuMTE5QzEzNi42NiAxMDMuNjkxIDEzNi44NjcgMTAzLjMyMSAxMzcuMTM4IDEwMy4wMDhDMTM3LjQwOSAxMDIuNjkgMTM3LjczNiAxMDIuNDQ1IDEzOC4xMjIgMTAyLjI3MUMxMzguNTA3IDEwMi4wOTQgMTM4LjkzOCAxMDIuMDA1IDEzOS40MTcgMTAyLjAwNUMxMzkuODk5IDEwMi4wMDUgMTQwLjMzMyAxMDIuMDk0IDE0MC43MTggMTAyLjI3MUMxNDEuMTA3IDEwMi40NDUgMTQxLjQzNyAxMDIuNjkgMTQxLjcwOCAxMDMuMDA4QzE0MS45ODMgMTAzLjMyMSAxNDIuMTkzIDEwMy42OTEgMTQyLjMzNiAxMDQuMTE5QzE0Mi40OCAxMDQuNTQyIDE0Mi41NTIgMTA1LjAwMSAxNDIuNTUyIDEwNS40OTZWMTA1LjY0MkMxNDIuNTUyIDEwNi4xMzcgMTQyLjQ4IDEwNi41OTYgMTQyLjMzNiAxMDcuMDJDMTQyLjE5MyAxMDcuNDQzIDE0MS45ODMgMTA3LjgxMyAxNDEuNzA4IDEwOC4xM0MxNDEuNDM3IDEwOC40NDQgMTQxLjEwOSAxMDguNjg5IDE0MC43MjQgMTA4Ljg2N0MxNDAuMzQzIDEwOS4wNCAxMzkuOTEyIDEwOS4xMjcgMTM5LjQyOSAxMDkuMTI3QzEzOC45NDcgMTA5LjEyNyAxMzguNTEzIDEwOS4wNCAxMzguMTI4IDEwOC44NjdDMTM3Ljc0MyAxMDguNjg5IDEzNy40MTMgMTA4LjQ0NCAxMzcuMTM4IDEwOC4xM0MxMzYuODY3IDEwNy44MTMgMTM2LjY2IDEwNy40NDMgMTM2LjUxNiAxMDcuMDJDMTM2LjM3MiAxMDYuNTk2IDEzNi4zIDEwNi4xMzcgMTM2LjMgMTA1LjY0MlpNMTM3LjQ3NCAxMDUuNDk2VjEwNS42NDJDMTM3LjQ3NCAxMDUuOTg1IDEzNy41MTQgMTA2LjMwOSAxMzcuNTk1IDEwNi42MTNDMTM3LjY3NSAxMDYuOTE0IDEzNy43OTYgMTA3LjE4IDEzNy45NTcgMTA3LjQxM0MxMzguMTIyIDEwNy42NDYgMTM4LjMyNyAxMDcuODMgMTM4LjU3MiAxMDcuOTY1QzEzOC44MTggMTA4LjA5NyAxMzkuMTAzIDEwOC4xNjIgMTM5LjQyOSAxMDguMTYyQzEzOS43NTEgMTA4LjE2MiAxNDAuMDMyIDEwOC4wOTcgMTQwLjI3MyAxMDcuOTY1QzE0MC41MTkgMTA3LjgzIDE0MC43MjIgMTA3LjY0NiAxNDAuODgzIDEwNy40MTNDMTQxLjA0NCAxMDcuMTggMTQxLjE2NCAxMDYuOTE0IDE0MS4yNDUgMTA2LjYxM0MxNDEuMzI5IDEwNi4zMDkgMTQxLjM3MiAxMDUuOTg1IDE0MS4zNzIgMTA1LjY0MlYxMDUuNDk2QzE0MS4zNzIgMTA1LjE1OCAxNDEuMzI5IDEwNC44MzggMTQxLjI0NSAxMDQuNTM4QzE0MS4xNjQgMTA0LjIzMyAxNDEuMDQyIDEwMy45NjQgMTQwLjg3NiAxMDMuNzMxQzE0MC43MTYgMTAzLjQ5NCAxNDAuNTEzIDEwMy4zMDggMTQwLjI2NyAxMDMuMTczQzE0MC4wMjYgMTAzLjAzNyAxMzkuNzQyIDEwMi45NyAxMzkuNDE3IDEwMi45N0MxMzkuMDk1IDEwMi45NyAxMzguODExIDEwMy4wMzcgMTM4LjU2NiAxMDMuMTczQzEzOC4zMjUgMTAzLjMwOCAxMzguMTIyIDEwMy40OTQgMTM3Ljk1NyAxMDMuNzMxQzEzNy43OTYgMTAzLjk2NCAxMzcuNjc1IDEwNC4yMzMgMTM3LjU5NSAxMDQuNTM4QzEzNy41MTQgMTA0LjgzOCAxMzcuNDc0IDEwNS4xNTggMTM3LjQ3NCAxMDUuNDk2Wk0xNDUuMTk5IDEwMy4yMTFWMTA5SDE0NC4wMjVWMTAyLjEzMkgxNDUuMTY3TDE0NS4xOTkgMTAzLjIxMVpNMTQ3LjM0NSAxMDIuMDk0TDE0Ny4zMzggMTAzLjE4NkMxNDcuMjQxIDEwMy4xNjQgMTQ3LjE0OCAxMDMuMTUyIDE0Ny4wNTkgMTAzLjE0N0MxNDYuOTc0IDEwMy4xMzkgMTQ2Ljg3NyAxMDMuMTM1IDE0Ni43NjcgMTAzLjEzNUMxNDYuNDk2IDEwMy4xMzUgMTQ2LjI1NyAxMDMuMTc3IDE0Ni4wNSAxMDMuMjYyQzE0NS44NDIgMTAzLjM0NiAxNDUuNjY3IDEwMy40NjUgMTQ1LjUyMyAxMDMuNjE3QzE0NS4zNzkgMTAzLjc3IDE0NS4yNjUgMTAzLjk1MSAxNDUuMTggMTA0LjE2M0MxNDUuMSAxMDQuMzcgMTQ1LjA0NyAxMDQuNTk5IDE0NS4wMjEgMTA0Ljg0OUwxNDQuNjkxIDEwNS4wMzlDMTQ0LjY5MSAxMDQuNjI0IDE0NC43MzIgMTA0LjIzNSAxNDQuODEyIDEwMy44NzFDMTQ0Ljg5NyAxMDMuNTA3IDE0NS4wMjYgMTAzLjE4NiAxNDUuMTk5IDEwMi45MDZDMTQ1LjM3MyAxMDIuNjIzIDE0NS41OTMgMTAyLjQwMyAxNDUuODU5IDEwMi4yNDZDMTQ2LjEzIDEwMi4wODUgMTQ2LjQ1MiAxMDIuMDA1IDE0Ni44MjQgMTAyLjAwNUMxNDYuOTA5IDEwMi4wMDUgMTQ3LjAwNiAxMDIuMDE1IDE0Ny4xMTYgMTAyLjAzN0MxNDcuMjI2IDEwMi4wNTQgMTQ3LjMwMiAxMDIuMDczIDE0Ny4zNDUgMTAyLjA5NFpNMTUxLjE1MyAxMDkuMTI3QzE1MC42NzUgMTA5LjEyNyAxNTAuMjQxIDEwOS4wNDcgMTQ5Ljg1MiAxMDguODg2QzE0OS40NjcgMTA4LjcyMSAxNDkuMTM1IDEwOC40OSAxNDguODU1IDEwOC4xOTRDMTQ4LjU4IDEwNy44OTggMTQ4LjM2OSAxMDcuNTQ2IDE0OC4yMjEgMTA3LjE0QzE0OC4wNzMgMTA2LjczNCAxNDcuOTk5IDEwNi4yOSAxNDcuOTk5IDEwNS44MDdWMTA1LjU0MUMxNDcuOTk5IDEwNC45ODIgMTQ4LjA4MSAxMDQuNDg1IDE0OC4yNDYgMTA0LjA0OUMxNDguNDExIDEwMy42MDkgMTQ4LjYzNSAxMDMuMjM2IDE0OC45MTkgMTAyLjkzMkMxNDkuMjAyIDEwMi42MjcgMTQ5LjUyNCAxMDIuMzk2IDE0OS44ODQgMTAyLjI0QzE1MC4yNDMgMTAyLjA4MyAxNTAuNjE2IDEwMi4wMDUgMTUxLjAwMSAxMDIuMDA1QzE1MS40OTIgMTAyLjAwNSAxNTEuOTE1IDEwMi4wOSAxNTIuMjcxIDEwMi4yNTlDMTUyLjYzIDEwMi40MjggMTUyLjkyNCAxMDIuNjY1IDE1My4xNTMgMTAyLjk3QzE1My4zODEgMTAzLjI3IDE1My41NTEgMTAzLjYyNiAxNTMuNjYxIDEwNC4wMzZDMTUzLjc3MSAxMDQuNDQyIDE1My44MjYgMTA0Ljg4NyAxNTMuODI2IDEwNS4zNjlWMTA1Ljg5NkgxNDguNjk3VjEwNC45MzhIMTUyLjY1MVYxMDQuODQ5QzE1Mi42MzQgMTA0LjU0NCAxNTIuNTcxIDEwNC4yNDggMTUyLjQ2MSAxMDMuOTZDMTUyLjM1NSAxMDMuNjcyIDE1Mi4xODYgMTAzLjQzNSAxNTEuOTUzIDEwMy4yNDlDMTUxLjcyIDEwMy4wNjMgMTUxLjQwMyAxMDIuOTcgMTUxLjAwMSAxMDIuOTdDMTUwLjczNCAxMDIuOTcgMTUwLjQ4OSAxMDMuMDI3IDE1MC4yNjUgMTAzLjE0MUMxNTAuMDQgMTAzLjI1MSAxNDkuODQ4IDEwMy40MTYgMTQ5LjY4NyAxMDMuNjM2QzE0OS41MjYgMTAzLjg1NiAxNDkuNDAxIDEwNC4xMjUgMTQ5LjMxMiAxMDQuNDQyQzE0OS4yMjQgMTA0Ljc2IDE0OS4xNzkgMTA1LjEyNiAxNDkuMTc5IDEwNS41NDFWMTA1LjgwN0MxNDkuMTc5IDEwNi4xMzMgMTQ5LjIyNCAxMDYuNDQgMTQ5LjMxMiAxMDYuNzI4QzE0OS40MDYgMTA3LjAxMSAxNDkuNTM5IDEwNy4yNjEgMTQ5LjcxMiAxMDcuNDc3QzE0OS44OSAxMDcuNjkyIDE1MC4xMDQgMTA3Ljg2MiAxNTAuMzU0IDEwNy45ODRDMTUwLjYwNyAxMDguMTA3IDE1MC44OTUgMTA4LjE2OCAxNTEuMjE3IDEwOC4xNjhDMTUxLjYzMiAxMDguMTY4IDE1MS45ODMgMTA4LjA4NCAxNTIuMjcxIDEwNy45MTVDMTUyLjU1OCAxMDcuNzQ1IDE1Mi44MSAxMDcuNTE5IDE1My4wMjYgMTA3LjIzNUwxNTMuNzM3IDEwNy44QzE1My41ODkgMTA4LjAyNSAxNTMuNCAxMDguMjM4IDE1My4xNzIgMTA4LjQ0MUMxNTIuOTQzIDEwOC42NDUgMTUyLjY2MiAxMDguODEgMTUyLjMyOCAxMDguOTM3QzE1MS45OTggMTA5LjA2MyAxNTEuNjA2IDEwOS4xMjcgMTUxLjE1MyAxMDkuMTI3WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDxyZWN0IHdpZHRoPVwiMjY4XCIgaGVpZ2h0PVwiMjYuMzMzM1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNSAxMTcuNjY3KVwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHQ8cGF0aCBkPVwiTTI5LjYyNzQgMTI2LjA0MVYxMzUuMzMzSDI4LjQ1MzFWMTI3LjUwN0wyNi4wODU0IDEyOC4zN1YxMjcuMzFMMjkuNDQzNCAxMjYuMDQxSDI5LjYyNzRaTTM4Ljg4MjMgMTI5Ljk3NlYxMzEuMzg1QzM4Ljg4MjMgMTMyLjE0MyAzOC44MTQ2IDEzMi43ODIgMzguNjc5MiAxMzMuMzAyQzM4LjU0MzggMTMzLjgyMyAzOC4zNDkxIDEzNC4yNDIgMzguMDk1MiAxMzQuNTU5QzM3Ljg0MTMgMTM0Ljg3NiAzNy41MzQ1IDEzNS4xMDcgMzcuMTc0OCAxMzUuMjUxQzM2LjgxOTMgMTM1LjM5MSAzNi40MTczIDEzNS40NiAzNS45Njg4IDEzNS40NkMzNS42MTMzIDEzNS40NiAzNS4yODUzIDEzNS40MTYgMzQuOTg0OSAxMzUuMzI3QzM0LjY4NDQgMTM1LjIzOCAzNC40MTM2IDEzNS4wOTcgMzQuMTcyNCAxMzQuOTAyQzMzLjkzNTQgMTM0LjcwMyAzMy43MzIzIDEzNC40NDUgMzMuNTYzIDEzNC4xMjdDMzMuMzkzNyAxMzMuODEgMzMuMjY0NiAxMzMuNDI1IDMzLjE3NTggMTMyLjk3MkMzMy4wODY5IDEzMi41MTkgMzMuMDQyNSAxMzEuOTkgMzMuMDQyNSAxMzEuMzg1VjEyOS45NzZDMzMuMDQyNSAxMjkuMjE5IDMzLjExMDIgMTI4LjU4NCAzMy4yNDU2IDEyOC4wNzJDMzMuMzg1MyAxMjcuNTYgMzMuNTgyIDEyNy4xNDkgMzMuODM1OSAxMjYuODRDMzQuMDg5OCAxMjYuNTI3IDM0LjM5NDUgMTI2LjMwMyAzNC43NSAxMjYuMTY3QzM1LjEwOTcgMTI2LjAzMiAzNS41MTE3IDEyNS45NjQgMzUuOTU2MSAxMjUuOTY0QzM2LjMxNTggMTI1Ljk2NCAzNi42NDU4IDEyNi4wMDkgMzYuOTQ2MyAxMjYuMDk4QzM3LjI1MSAxMjYuMTgyIDM3LjUyMTggMTI2LjMyIDM3Ljc1ODggMTI2LjUxQzM3Ljk5NTggMTI2LjY5NiAzOC4xOTY4IDEyNi45NDYgMzguMzYxOCAxMjcuMjU5QzM4LjUzMTEgMTI3LjU2OCAzOC42NjAyIDEyNy45NDcgMzguNzQ5IDEyOC4zOTZDMzguODM3OSAxMjguODQ0IDM4Ljg4MjMgMTI5LjM3MSAzOC44ODIzIDEyOS45NzZaTTM3LjcwMTcgMTMxLjU3NlYxMjkuNzc5QzM3LjcwMTcgMTI5LjM2NSAzNy42NzYzIDEyOS4wMDEgMzcuNjI1NSAxMjguNjg4QzM3LjU3ODkgMTI4LjM3IDM3LjUwOTEgMTI4LjA5OSAzNy40MTYgMTI3Ljg3NUMzNy4zMjI5IDEyNy42NTEgMzcuMjA0NCAxMjcuNDY5IDM3LjA2MDUgMTI3LjMyOUMzNi45MjA5IDEyNy4xODkgMzYuNzU4IDEyNy4wODggMzYuNTcxOCAxMjcuMDI0QzM2LjM4OTggMTI2Ljk1NyAzNi4xODQ2IDEyNi45MjMgMzUuOTU2MSAxMjYuOTIzQzM1LjY3NjggMTI2LjkyMyAzNS40MjkyIDEyNi45NzYgMzUuMjEzNCAxMjcuMDgyQzM0Ljk5NzYgMTI3LjE4MyAzNC44MTU2IDEyNy4zNDYgMzQuNjY3NSAxMjcuNTdDMzQuNTIzNiAxMjcuNzk1IDM0LjQxMzYgMTI4LjA4OSAzNC4zMzc0IDEyOC40NTNDMzQuMjYxMiAxMjguODE3IDM0LjIyMzEgMTI5LjI1OSAzNC4yMjMxIDEyOS43NzlWMTMxLjU3NkMzNC4yMjMxIDEzMS45OSAzNC4yNDY0IDEzMi4zNTYgMzQuMjkzIDEzMi42NzRDMzQuMzQzOCAxMzIuOTkxIDM0LjQxNzggMTMzLjI2NiAzNC41MTUxIDEzMy40OTlDMzQuNjEyNSAxMzMuNzI4IDM0LjczMSAxMzMuOTE2IDM0Ljg3MDYgMTM0LjA2NEMzNS4wMTAzIDEzNC4yMTIgMzUuMTcxMSAxMzQuMzIyIDM1LjM1MyAxMzQuMzk0QzM1LjUzOTIgMTM0LjQ2MiAzNS43NDQ1IDEzNC40OTYgMzUuOTY4OCAxMzQuNDk2QzM2LjI1NjUgMTM0LjQ5NiAzNi41MDgzIDEzNC40NDEgMzYuNzI0MSAxMzQuMzMxQzM2LjkzOTkgMTM0LjIyMSAzNy4xMTk4IDEzNC4wNDkgMzcuMjYzNyAxMzMuODE2QzM3LjQxMTggMTMzLjU3OSAzNy41MjE4IDEzMy4yNzcgMzcuNTkzOCAxMzIuOTA5QzM3LjY2NTcgMTMyLjUzNiAzNy43MDE3IDEzMi4wOTIgMzcuNzAxNyAxMzEuNTc2Wk00NC45MTI2IDEyOS44M1YxMzUuMzMzSDQzLjczMTlWMTI4LjQ2NUg0NC44NDkxTDQ0LjkxMjYgMTI5LjgzWk00NC42NzE0IDEzMS42MzlMNDQuMTI1NSAxMzEuNjJDNDQuMTI5NyAxMzEuMTUgNDQuMTkxMSAxMzAuNzE3IDQ0LjMwOTYgMTMwLjMxOUM0NC40MjgxIDEyOS45MTcgNDQuNjAzNyAxMjkuNTY4IDQ0LjgzNjQgMTI5LjI3MUM0NS4wNjkyIDEyOC45NzUgNDUuMzU5IDEyOC43NDcgNDUuNzA2MSAxMjguNTg2QzQ2LjA1MzEgMTI4LjQyMSA0Ni40NTUxIDEyOC4zMzggNDYuOTEyMSAxMjguMzM4QzQ3LjIzMzcgMTI4LjMzOCA0Ny41Mjk5IDEyOC4zODUgNDcuODAwOCAxMjguNDc4QzQ4LjA3MTYgMTI4LjU2NyA0OC4zMDY1IDEyOC43MDkgNDguNTA1NCAxMjguOTAzQzQ4LjcwNDMgMTI5LjA5OCA0OC44NTg3IDEyOS4zNDggNDguOTY4OCAxMjkuNjUyQzQ5LjA3ODggMTI5Ljk1NyA0OS4xMzM4IDEzMC4zMjUgNDkuMTMzOCAxMzAuNzU3VjEzNS4zMzNINDcuOTU5NVYxMzAuODE0QzQ3Ljk1OTUgMTMwLjQ1NCA0Ny44OTgxIDEzMC4xNjcgNDcuNzc1NCAxMjkuOTUxQzQ3LjY1NjkgMTI5LjczNSA0Ny40ODc2IDEyOS41NzggNDcuMjY3NiAxMjkuNDgxQzQ3LjA0NzUgMTI5LjM3OSA0Ni43ODk0IDEyOS4zMjkgNDYuNDkzMiAxMjkuMzI5QzQ2LjE0NjIgMTI5LjMyOSA0NS44NTYzIDEyOS4zOSA0NS42MjM1IDEyOS41MTNDNDUuMzkwOCAxMjkuNjM1IDQ1LjIwNDYgMTI5LjgwNSA0NS4wNjQ5IDEzMC4wMjFDNDQuOTI1MyAxMzAuMjM2IDQ0LjgyMzcgMTMwLjQ4NCA0NC43NjAzIDEzMC43NjNDNDQuNzAxIDEzMS4wMzggNDQuNjcxNCAxMzEuMzMgNDQuNjcxNCAxMzEuNjM5Wk00OS4xMjExIDEzMC45OTJMNDguMzM0IDEzMS4yMzNDNDguMzM4MiAxMzAuODU2IDQ4LjM5OTYgMTMwLjQ5NCA0OC41MTgxIDEzMC4xNDdDNDguNjQwOCAxMjkuOCA0OC44MTY0IDEyOS40OTIgNDkuMDQ0OSAxMjkuMjIxQzQ5LjI3NzcgMTI4Ljk1IDQ5LjU2MzMgMTI4LjczNiA0OS45MDE5IDEyOC41OEM1MC4yNDA0IDEyOC40MTkgNTAuNjI3NiAxMjguMzM4IDUxLjA2MzUgMTI4LjMzOEM1MS40MzE2IDEyOC4zMzggNTEuNzU3NSAxMjguMzg3IDUyLjA0MSAxMjguNDg0QzUyLjMyODggMTI4LjU4MiA1Mi41NyAxMjguNzMyIDUyLjc2NDYgMTI4LjkzNUM1Mi45NjM1IDEyOS4xMzQgNTMuMTEzOCAxMjkuMzkgNTMuMjE1MyAxMjkuNzAzQzUzLjMxNjkgMTMwLjAxNiA1My4zNjc3IDEzMC4zODkgNTMuMzY3NyAxMzAuODJWMTM1LjMzM0g1Mi4xODdWMTMwLjgwOEM1Mi4xODcgMTMwLjQyMyA1Mi4xMjU3IDEzMC4xMjQgNTIuMDAyOSAxMjkuOTEzQzUxLjg4NDQgMTI5LjY5NyA1MS43MTUyIDEyOS41NDcgNTEuNDk1MSAxMjkuNDYyQzUxLjI3OTMgMTI5LjM3MyA1MS4wMjEyIDEyOS4zMjkgNTAuNzIwNyAxMjkuMzI5QzUwLjQ2MjYgMTI5LjMyOSA1MC4yMzQgMTI5LjM3MyA1MC4wMzUyIDEyOS40NjJDNDkuODM2MyAxMjkuNTUxIDQ5LjY2OTEgMTI5LjY3NCA0OS41MzM3IDEyOS44M0M0OS4zOTgzIDEyOS45ODIgNDkuMjk0NiAxMzAuMTU4IDQ5LjIyMjcgMTMwLjM1N0M0OS4xNTQ5IDEzMC41NTYgNDkuMTIxMSAxMzAuNzY3IDQ5LjEyMTEgMTMwLjk5MlpNNTYuNDIwOSAxMjguNDY1VjEzNS4zMzNINTUuMjQwMlYxMjguNDY1SDU2LjQyMDlaTTU1LjE1MTQgMTI2LjY0NEM1NS4xNTE0IDEyNi40NTMgNTUuMjA4NSAxMjYuMjkyIDU1LjMyMjggMTI2LjE2MUM1NS40NDEyIDEyNi4wMyA1NS42MTQ3IDEyNS45NjQgNTUuODQzMyAxMjUuOTY0QzU2LjA2NzUgMTI1Ljk2NCA1Ni4yMzg5IDEyNi4wMyA1Ni4zNTc0IDEyNi4xNjFDNTYuNDgwMSAxMjYuMjkyIDU2LjU0MTUgMTI2LjQ1MyA1Ni41NDE1IDEyNi42NDRDNTYuNTQxNSAxMjYuODI2IDU2LjQ4MDEgMTI2Ljk4MiA1Ni4zNTc0IDEyNy4xMTNDNTYuMjM4OSAxMjcuMjQgNTYuMDY3NSAxMjcuMzA0IDU1Ljg0MzMgMTI3LjMwNEM1NS42MTQ3IDEyNy4zMDQgNTUuNDQxMiAxMjcuMjQgNTUuMzIyOCAxMjcuMTEzQzU1LjIwODUgMTI2Ljk4MiA1NS4xNTE0IDEyNi44MjYgNTUuMTUxNCAxMjYuNjQ0Wk01OS40ODA1IDEyOS45MzJWMTM1LjMzM0g1OC4zMDYyVjEyOC40NjVINTkuNDE3TDU5LjQ4MDUgMTI5LjkzMlpNNTkuMjAxMiAxMzEuNjM5TDU4LjcxMjQgMTMxLjYyQzU4LjcxNjYgMTMxLjE1IDU4Ljc4NjUgMTMwLjcxNyA1OC45MjE5IDEzMC4zMTlDNTkuMDU3MyAxMjkuOTE3IDU5LjI0NzcgMTI5LjU2OCA1OS40OTMyIDEyOS4yNzFDNTkuNzM4NiAxMjguOTc1IDYwLjAzMDYgMTI4Ljc0NyA2MC4zNjkxIDEyOC41ODZDNjAuNzExOSAxMjguNDIxIDYxLjA5MDcgMTI4LjMzOCA2MS41MDU0IDEyOC4zMzhDNjEuODQzOSAxMjguMzM4IDYyLjE0ODYgMTI4LjM4NSA2Mi40MTk0IDEyOC40NzhDNjIuNjkwMyAxMjguNTY3IDYyLjkyMDkgMTI4LjcxMSA2My4xMTEzIDEyOC45MUM2My4zMDYgMTI5LjEwOSA2My40NTQxIDEyOS4zNjcgNjMuNTU1NyAxMjkuNjg0QzYzLjY1NzIgMTI5Ljk5NyA2My43MDggMTMwLjM4IDYzLjcwOCAxMzAuODMzVjEzNS4zMzNINjIuNTI3M1YxMzAuODJDNjIuNTI3MyAxMzAuNDYxIDYyLjQ3NDQgMTMwLjE3MyA2Mi4zNjg3IDEyOS45NTdDNjIuMjYyOSAxMjkuNzM3IDYyLjEwODQgMTI5LjU3OCA2MS45MDUzIDEyOS40ODFDNjEuNzAyMSAxMjkuMzc5IDYxLjQ1MjUgMTI5LjMyOSA2MS4xNTYyIDEyOS4zMjlDNjAuODY0MyAxMjkuMzI5IDYwLjU5NzcgMTI5LjM5IDYwLjM1NjQgMTI5LjUxM0M2MC4xMTk1IDEyOS42MzUgNTkuOTE0MiAxMjkuODA1IDU5Ljc0MDcgMTMwLjAyMUM1OS41NzE1IDEzMC4yMzYgNTkuNDM4MiAxMzAuNDg0IDU5LjM0MDggMTMwLjc2M0M1OS4yNDc3IDEzMS4wMzggNTkuMjAxMiAxMzEuMzMgNTkuMjAxMiAxMzEuNjM5Wk02OS42OTM4IDEzMy43NDdWMTI4LjQ2NUg3MC44NzQ1VjEzNS4zMzNINjkuNzUxTDY5LjY5MzggMTMzLjc0N1pNNjkuOTE2IDEzMi4yOTlMNzAuNDA0OCAxMzIuMjg3QzcwLjQwNDggMTMyLjc0NCA3MC4zNTYxIDEzMy4xNjcgNzAuMjU4OCAxMzMuNTU2QzcwLjE2NTcgMTMzLjk0MSA3MC4wMTMzIDEzNC4yNzYgNjkuODAxOCAxMzQuNTU5QzY5LjU5MDIgMTM0Ljg0MyA2OS4zMTMgMTM1LjA2NSA2OC45NzAyIDEzNS4yMjZDNjguNjI3NCAxMzUuMzgyIDY4LjIxMDYgMTM1LjQ2IDY3LjcxOTcgMTM1LjQ2QzY3LjM4NTQgMTM1LjQ2IDY3LjA3ODYgMTM1LjQxMiA2Ni43OTkzIDEzNS4zMTRDNjYuNTI0MyAxMzUuMjE3IDY2LjI4NzMgMTM1LjA2NyA2Ni4wODg0IDEzNC44NjRDNjUuODg5NSAxMzQuNjYxIDY1LjczNSAxMzQuMzk2IDY1LjYyNSAxMzQuMDdDNjUuNTE5MiAxMzMuNzQ0IDY1LjQ2NjMgMTMzLjM1MyA2NS40NjYzIDEzMi44OTZWMTI4LjQ2NUg2Ni42NDA2VjEzMi45MDlDNjYuNjQwNiAxMzMuMjE4IDY2LjY3NDUgMTMzLjQ3NCA2Ni43NDIyIDEzMy42NzdDNjYuODE0MSAxMzMuODc2IDY2LjkwOTMgMTM0LjAzNCA2Ny4wMjc4IDEzNC4xNTNDNjcuMTUwNiAxMzQuMjY3IDY3LjI4NiAxMzQuMzQ3IDY3LjQzNDEgMTM0LjM5NEM2Ny41ODY0IDEzNC40NDEgNjcuNzQzIDEzNC40NjQgNjcuOTAzOCAxMzQuNDY0QzY4LjQwMzIgMTM0LjQ2NCA2OC43OTg4IDEzNC4zNjkgNjkuMDkwOCAxMzQuMTc4QzY5LjM4MjggMTMzLjk4NCA2OS41OTIzIDEzMy43MjMgNjkuNzE5MiAxMzMuMzk3QzY5Ljg1MDQgMTMzLjA2NyA2OS45MTYgMTMyLjcwMSA2OS45MTYgMTMyLjI5OVpNNzUuNTQgMTI4LjQ2NVYxMjkuMzY3SDcxLjgyNjdWMTI4LjQ2NUg3NS41NFpNNzMuMDgzNSAxMjYuNzk2SDc0LjI1NzhWMTMzLjYzMkM3NC4yNTc4IDEzMy44NjUgNzQuMjkzOCAxMzQuMDQxIDc0LjM2NTcgMTM0LjE1OUM3NC40Mzc3IDEzNC4yNzggNzQuNTMwOCAxMzQuMzU2IDc0LjY0NSAxMzQuMzk0Qzc0Ljc1OTMgMTM0LjQzMiA3NC44ODIgMTM0LjQ1MSA3NS4wMTMyIDEzNC40NTFDNzUuMTEwNSAxMzQuNDUxIDc1LjIxMjEgMTM0LjQ0MyA3NS4zMTc5IDEzNC40MjZDNzUuNDI3OSAxMzQuNDA1IDc1LjUxMDQgMTM0LjM4OCA3NS41NjU0IDEzNC4zNzVMNzUuNTcxOCAxMzUuMzMzQzc1LjQ3ODcgMTM1LjM2MyA3NS4zNTYgMTM1LjM5MSA3NS4yMDM2IDEzNS40MTZDNzUuMDU1NSAxMzUuNDQ2IDc0Ljg3NTcgMTM1LjQ2IDc0LjY2NDEgMTM1LjQ2Qzc0LjM3NjMgMTM1LjQ2IDc0LjExMTggMTM1LjQwMyA3My44NzA2IDEzNS4yODlDNzMuNjI5NCAxMzUuMTc1IDczLjQzNjggMTM0Ljk4NCA3My4yOTMgMTM0LjcxOEM3My4xNTMzIDEzNC40NDcgNzMuMDgzNSAxMzQuMDgzIDczLjA4MzUgMTMzLjYyNlYxMjYuNzk2Wk03OS43Njc2IDEzNS40NkM3OS4yODk0IDEzNS40NiA3OC44NTU2IDEzNS4zOCA3OC40NjYzIDEzNS4yMTlDNzguMDgxMiAxMzUuMDU0IDc3Ljc0OSAxMzQuODI0IDc3LjQ2OTcgMTM0LjUyN0M3Ny4xOTQ3IDEzNC4yMzEgNzYuOTgzMSAxMzMuODggNzYuODM1IDEzMy40NzRDNzYuNjg2OCAxMzMuMDY3IDc2LjYxMjggMTMyLjYyMyA3Ni42MTI4IDEzMi4xNDFWMTMxLjg3NEM3Ni42MTI4IDEzMS4zMTUgNzYuNjk1MyAxMzAuODE4IDc2Ljg2MDQgMTMwLjM4MkM3Ny4wMjU0IDEyOS45NDIgNzcuMjQ5NyAxMjkuNTcgNzcuNTMzMiAxMjkuMjY1Qzc3LjgxNjcgMTI4Ljk2IDc4LjEzODMgMTI4LjczIDc4LjQ5OCAxMjguNTczQzc4Ljg1NzcgMTI4LjQxNyA3OS4yMzAxIDEyOC4zMzggNzkuNjE1MiAxMjguMzM4QzgwLjEwNjEgMTI4LjMzOCA4MC41MjkzIDEyOC40MjMgODAuODg0OCAxMjguNTkyQzgxLjI0NDUgMTI4Ljc2MiA4MS41Mzg2IDEyOC45OTkgODEuNzY3MSAxMjkuMzAzQzgxLjk5NTYgMTI5LjYwNCA4Mi4xNjQ5IDEyOS45NTkgODIuMjc0OSAxMzAuMzdDODIuMzg0OSAxMzAuNzc2IDgyLjQzOTkgMTMxLjIyIDgyLjQzOTkgMTMxLjcwM1YxMzIuMjI5SDc3LjMxMVYxMzEuMjcxSDgxLjI2NTZWMTMxLjE4MkM4MS4yNDg3IDEzMC44NzcgODEuMTg1MiAxMzAuNTgxIDgxLjA3NTIgMTMwLjI5M0M4MC45Njk0IDEzMC4wMDYgODAuODAwMSAxMjkuNzY5IDgwLjU2NzQgMTI5LjU4M0M4MC4zMzQ2IDEyOS4zOTYgODAuMDE3MyAxMjkuMzAzIDc5LjYxNTIgMTI5LjMwM0M3OS4zNDg2IDEyOS4zMDMgNzkuMTAzMiAxMjkuMzYgNzguODc4OSAxMjkuNDc1Qzc4LjY1NDYgMTI5LjU4NSA3OC40NjIxIDEyOS43NSA3OC4zMDEzIDEyOS45N0M3OC4xNDA1IDEzMC4xOSA3OC4wMTU2IDEzMC40NTggNzcuOTI2OCAxMzAuNzc2Qzc3LjgzNzkgMTMxLjA5MyA3Ny43OTM1IDEzMS40NTkgNzcuNzkzNSAxMzEuODc0VjEzMi4xNDFDNzcuNzkzNSAxMzIuNDY2IDc3LjgzNzkgMTMyLjc3MyA3Ny45MjY4IDEzMy4wNjFDNzguMDE5OSAxMzMuMzQ1IDc4LjE1MzIgMTMzLjU5NCA3OC4zMjY3IDEzMy44MUM3OC41MDQ0IDEzNC4wMjYgNzguNzE4MSAxMzQuMTk1IDc4Ljk2NzggMTM0LjMxOEM3OS4yMjE3IDEzNC40NDEgNzkuNTA5NCAxMzQuNTAyIDc5LjgzMTEgMTM0LjUwMkM4MC4yNDU4IDEzNC41MDIgODAuNTk3IDEzNC40MTcgODAuODg0OCAxMzQuMjQ4QzgxLjE3MjUgMTM0LjA3OSA4MS40MjQzIDEzMy44NTIgODEuNjQwMSAxMzMuNTY5TDgyLjM1MTEgMTM0LjEzNEM4Mi4yMDMgMTM0LjM1OCA4Mi4wMTQ2IDEzNC41NzIgODEuNzg2MSAxMzQuNzc1QzgxLjU1NzYgMTM0Ljk3OCA4MS4yNzYyIDEzNS4xNDMgODAuOTQxOSAxMzUuMjdDODAuNjExOCAxMzUuMzk3IDgwLjIyMDQgMTM1LjQ2IDc5Ljc2NzYgMTM1LjQ2Wk04Ny44MTAxIDEzMy41MTJDODcuODEwMSAxMzMuMzQyIDg3Ljc3MiAxMzMuMTg2IDg3LjY5NTggMTMzLjA0MkM4Ny42MjM5IDEzMi44OTQgODcuNDczNiAxMzIuNzYxIDg3LjI0NTEgMTMyLjY0MkM4Ny4wMjA4IDEzMi41MTkgODYuNjgyMyAxMzIuNDE0IDg2LjIyOTUgMTMyLjMyNUM4NS44NDg2IDEzMi4yNDQgODUuNTAzNyAxMzIuMTQ5IDg1LjE5NDggMTMyLjAzOUM4NC44OTAxIDEzMS45MjkgODQuNjI5OSAxMzEuNzk2IDg0LjQxNDEgMTMxLjYzOUM4NC4yMDI1IDEzMS40ODMgODQuMDM5NiAxMzEuMjk5IDgzLjkyNTMgMTMxLjA4N0M4My44MTEgMTMwLjg3NSA4My43NTM5IDEzMC42MjggODMuNzUzOSAxMzAuMzQ0QzgzLjc1MzkgMTMwLjA3MyA4My44MTMyIDEyOS44MTcgODMuOTMxNiAxMjkuNTc2Qzg0LjA1NDQgMTI5LjMzNSA4NC4yMjU3IDEyOS4xMjEgODQuNDQ1OCAxMjguOTM1Qzg0LjY3MDEgMTI4Ljc0OSA4NC45Mzg4IDEyOC42MDMgODUuMjUyIDEyOC40OTdDODUuNTY1MSAxMjguMzkxIDg1LjkxNDIgMTI4LjMzOCA4Ni4yOTkzIDEyOC4zMzhDODYuODQ5NCAxMjguMzM4IDg3LjMxOTIgMTI4LjQzNiA4Ny43MDg1IDEyOC42M0M4OC4wOTc4IDEyOC44MjUgODguMzk2MiAxMjkuMDg1IDg4LjYwMzUgMTI5LjQxMUM4OC44MTA5IDEyOS43MzMgODguOTE0NiAxMzAuMDkgODguOTE0NiAxMzAuNDg0SDg3Ljc0MDJDODcuNzQwMiAxMzAuMjkzIDg3LjY4MzEgMTMwLjEwOSA4Ny41Njg4IDEyOS45MzJDODcuNDU4OCAxMjkuNzUgODcuMjk1OSAxMjkuNTk5IDg3LjA4MDEgMTI5LjQ4MUM4Ni44Njg1IDEyOS4zNjIgODYuNjA4MiAxMjkuMzAzIDg2LjI5OTMgMTI5LjMwM0M4NS45NzM1IDEyOS4zMDMgODUuNzA5IDEyOS4zNTQgODUuNTA1OSAxMjkuNDU2Qzg1LjMwNyAxMjkuNTUzIDg1LjE2MSAxMjkuNjc4IDg1LjA2NzkgMTI5LjgzQzg0Ljk3OSAxMjkuOTgyIDg0LjkzNDYgMTMwLjE0MyA4NC45MzQ2IDEzMC4zMTJDODQuOTM0NiAxMzAuNDM5IDg0Ljk1NTcgMTMwLjU1NCA4NC45OTggMTMwLjY1NUM4NS4wNDQ2IDEzMC43NTMgODUuMTI1IDEzMC44NDQgODUuMjM5MyAxMzAuOTI4Qzg1LjM1MzUgMTMxLjAwOSA4NS41MTQzIDEzMS4wODUgODUuNzIxNyAxMzEuMTU3Qzg1LjkyOSAxMzEuMjI5IDg2LjE5MzUgMTMxLjMwMSA4Ni41MTUxIDEzMS4zNzNDODcuMDc4IDEzMS41IDg3LjU0MTMgMTMxLjY1MiA4Ny45MDUzIDEzMS44M0M4OC4yNjkyIDEzMi4wMDcgODguNTQgMTMyLjIyNSA4OC43MTc4IDEzMi40ODNDODguODk1NSAxMzIuNzQyIDg4Ljk4NDQgMTMzLjA1NSA4OC45ODQ0IDEzMy40MjNDODguOTg0NCAxMzMuNzIzIDg4LjkyMDkgMTMzLjk5OCA4OC43OTM5IDEzNC4yNDhDODguNjcxMiAxMzQuNDk4IDg4LjQ5MTQgMTM0LjcxNCA4OC4yNTQ0IDEzNC44OTZDODguMDIxNiAxMzUuMDczIDg3Ljc0MjQgMTM1LjIxMyA4Ny40MTY1IDEzNS4zMTRDODcuMDk0OSAxMzUuNDEyIDg2LjczMzEgMTM1LjQ2IDg2LjMzMTEgMTM1LjQ2Qzg1LjcyNTkgMTM1LjQ2IDg1LjIxMzkgMTM1LjM1MyA4NC43OTQ5IDEzNS4xMzdDODQuMzc2IDEzNC45MjEgODQuMDU4NiAxMzQuNjQyIDgzLjg0MjggMTM0LjI5OUM4My42MjcgMTMzLjk1NiA4My41MTkgMTMzLjU5NCA4My41MTkgMTMzLjIxM0g4NC42OTk3Qzg0LjcxNjYgMTMzLjUzNSA4NC44MDk3IDEzMy43OTEgODQuOTc5IDEzMy45ODFDODUuMTQ4MyAxMzQuMTY4IDg1LjM1NTYgMTM0LjMwMSA4NS42MDExIDEzNC4zODFDODUuODQ2NSAxMzQuNDU4IDg2LjA4OTggMTM0LjQ5NiA4Ni4zMzExIDEzNC40OTZDODYuNjUyNyAxMzQuNDk2IDg2LjkyMTQgMTM0LjQ1MyA4Ny4xMzcyIDEzNC4zNjlDODcuMzU3MyAxMzQuMjg0IDg3LjUyNDQgMTM0LjE2OCA4Ny42Mzg3IDEzNC4wMkM4Ny43NTI5IDEzMy44NzEgODcuODEwMSAxMzMuNzAyIDg3LjgxMDEgMTMzLjUxMlpNOTYuNjI3IDEyOC40NjVWMTI5LjM2N0g5Mi45MTM2VjEyOC40NjVIOTYuNjI3Wk05NC4xNzA0IDEyNi43OTZIOTUuMzQ0N1YxMzMuNjMyQzk1LjM0NDcgMTMzLjg2NSA5NS4zODA3IDEzNC4wNDEgOTUuNDUyNiAxMzQuMTU5Qzk1LjUyNDYgMTM0LjI3OCA5NS42MTc3IDEzNC4zNTYgOTUuNzMxOSAxMzQuMzk0Qzk1Ljg0NjIgMTM0LjQzMiA5NS45Njg5IDEzNC40NTEgOTYuMTAwMSAxMzQuNDUxQzk2LjE5NzQgMTM0LjQ1MSA5Ni4yOTkgMTM0LjQ0MyA5Ni40MDQ4IDEzNC40MjZDOTYuNTE0OCAxMzQuNDA1IDk2LjU5NzMgMTM0LjM4OCA5Ni42NTIzIDEzNC4zNzVMOTYuNjU4NyAxMzUuMzMzQzk2LjU2NTYgMTM1LjM2MyA5Ni40NDI5IDEzNS4zOTEgOTYuMjkwNSAxMzUuNDE2Qzk2LjE0MjQgMTM1LjQ0NiA5NS45NjI2IDEzNS40NiA5NS43NTEgMTM1LjQ2Qzk1LjQ2MzIgMTM1LjQ2IDk1LjE5ODcgMTM1LjQwMyA5NC45NTc1IDEzNS4yODlDOTQuNzE2MyAxMzUuMTc1IDk0LjUyMzggMTM0Ljk4NCA5NC4zNzk5IDEzNC43MThDOTQuMjQwMiAxMzQuNDQ3IDk0LjE3MDQgMTM0LjA4MyA5NC4xNzA0IDEzMy42MjZWMTI2Ljc5NlpNOTcuNTY2NCAxMzEuOTc2VjEzMS44M0M5Ny41NjY0IDEzMS4zMzQgOTcuNjM4MyAxMzAuODc1IDk3Ljc4MjIgMTMwLjQ1MkM5Ny45MjYxIDEzMC4wMjUgOTguMTMzNSAxMjkuNjU0IDk4LjQwNDMgMTI5LjM0MUM5OC42NzUxIDEyOS4wMjQgOTkuMDAzMSAxMjguNzc4IDk5LjM4ODIgMTI4LjYwNUM5OS43NzMzIDEyOC40MjcgMTAwLjIwNSAxMjguMzM4IDEwMC42ODMgMTI4LjMzOEMxMDEuMTY2IDEyOC4zMzggMTAxLjU5OSAxMjguNDI3IDEwMS45ODQgMTI4LjYwNUMxMDIuMzc0IDEyOC43NzggMTAyLjcwNCAxMjkuMDI0IDEwMi45NzUgMTI5LjM0MUMxMDMuMjUgMTI5LjY1NCAxMDMuNDU5IDEzMC4wMjUgMTAzLjYwMyAxMzAuNDUyQzEwMy43NDcgMTMwLjg3NSAxMDMuODE5IDEzMS4zMzQgMTAzLjgxOSAxMzEuODNWMTMxLjk3NkMxMDMuODE5IDEzMi40NzEgMTAzLjc0NyAxMzIuOTMgMTAzLjYwMyAxMzMuMzUzQzEwMy40NTkgMTMzLjc3NiAxMDMuMjUgMTM0LjE0NiAxMDIuOTc1IDEzNC40NjRDMTAyLjcwNCAxMzQuNzc3IDEwMi4zNzYgMTM1LjAyMiAxMDEuOTkxIDEzNS4yQzEwMS42MSAxMzUuMzc0IDEwMS4xNzggMTM1LjQ2IDEwMC42OTYgMTM1LjQ2QzEwMC4yMTMgMTM1LjQ2IDk5Ljc3OTYgMTM1LjM3NCA5OS4zOTQ1IDEzNS4yQzk5LjAwOTQgMTM1LjAyMiA5OC42Nzk0IDEzNC43NzcgOTguNDA0MyAxMzQuNDY0Qzk4LjEzMzUgMTM0LjE0NiA5Ny45MjYxIDEzMy43NzYgOTcuNzgyMiAxMzMuMzUzQzk3LjYzODMgMTMyLjkzIDk3LjU2NjQgMTMyLjQ3MSA5Ny41NjY0IDEzMS45NzZaTTk4Ljc0MDcgMTMxLjgzVjEzMS45NzZDOTguNzQwNyAxMzIuMzE4IDk4Ljc4MDkgMTMyLjY0MiA5OC44NjEzIDEzMi45NDdDOTguOTQxNyAxMzMuMjQ3IDk5LjA2MjMgMTMzLjUxNCA5OS4yMjMxIDEzMy43NDdDOTkuMzg4MiAxMzMuOTc5IDk5LjU5MzQgMTM0LjE2MyA5OS44Mzg5IDEzNC4yOTlDMTAwLjA4NCAxMzQuNDMgMTAwLjM3IDEzNC40OTYgMTAwLjY5NiAxMzQuNDk2QzEwMS4wMTcgMTM0LjQ5NiAxMDEuMjk5IDEzNC40MyAxMDEuNTQgMTM0LjI5OUMxMDEuNzg1IDEzNC4xNjMgMTAxLjk4OSAxMzMuOTc5IDEwMi4xNDkgMTMzLjc0N0MxMDIuMzEgMTMzLjUxNCAxMDIuNDMxIDEzMy4yNDcgMTAyLjUxMSAxMzIuOTQ3QzEwMi41OTYgMTMyLjY0MiAxMDIuNjM4IDEzMi4zMTggMTAyLjYzOCAxMzEuOTc2VjEzMS44M0MxMDIuNjM4IDEzMS40OTEgMTAyLjU5NiAxMzEuMTcyIDEwMi41MTEgMTMwLjg3MUMxMDIuNDMxIDEzMC41NjYgMTAyLjMwOCAxMzAuMjk4IDEwMi4xNDMgMTMwLjA2NUMxMDEuOTgyIDEyOS44MjggMTAxLjc3OSAxMjkuNjQyIDEwMS41MzQgMTI5LjUwNkMxMDEuMjkyIDEyOS4zNzEgMTAxLjAwOSAxMjkuMzAzIDEwMC42ODMgMTI5LjMwM0MxMDAuMzYxIDEyOS4zMDMgMTAwLjA3OCAxMjkuMzcxIDk5LjgzMjUgMTI5LjUwNkM5OS41OTEzIDEyOS42NDIgOTkuMzg4MiAxMjkuODI4IDk5LjIyMzEgMTMwLjA2NUM5OS4wNjIzIDEzMC4yOTggOTguOTQxNyAxMzAuNTY2IDk4Ljg2MTMgMTMwLjg3MUM5OC43ODA5IDEzMS4xNzIgOTguNzQwNyAxMzEuNDkxIDk4Ljc0MDcgMTMxLjgzWk0xMTEuMzkyIDEyOC40NjVWMTI5LjM2N0gxMDcuNjc4VjEyOC40NjVIMTExLjM5MlpNMTA4LjkzNSAxMjYuNzk2SDExMC4xMDlWMTMzLjYzMkMxMTAuMTA5IDEzMy44NjUgMTEwLjE0NSAxMzQuMDQxIDExMC4yMTcgMTM0LjE1OUMxMTAuMjg5IDEzNC4yNzggMTEwLjM4MiAxMzQuMzU2IDExMC40OTcgMTM0LjM5NEMxMTAuNjExIDEzNC40MzIgMTEwLjczNCAxMzQuNDUxIDExMC44NjUgMTM0LjQ1MUMxMTAuOTYyIDEzNC40NTEgMTExLjA2NCAxMzQuNDQzIDExMS4xNjkgMTM0LjQyNkMxMTEuMjc5IDEzNC40MDUgMTExLjM2MiAxMzQuMzg4IDExMS40MTcgMTM0LjM3NUwxMTEuNDIzIDEzNS4zMzNDMTExLjMzIDEzNS4zNjMgMTExLjIwOCAxMzUuMzkxIDExMS4wNTUgMTM1LjQxNkMxMTAuOTA3IDEzNS40NDYgMTEwLjcyNyAxMzUuNDYgMTEwLjUxNiAxMzUuNDZDMTEwLjIyOCAxMzUuNDYgMTA5Ljk2MyAxMzUuNDAzIDEwOS43MjIgMTM1LjI4OUMxMDkuNDgxIDEzNS4xNzUgMTA5LjI4OCAxMzQuOTg0IDEwOS4xNDUgMTM0LjcxOEMxMDkuMDA1IDEzNC40NDcgMTA4LjkzNSAxMzQuMDgzIDEwOC45MzUgMTMzLjYyNlYxMjYuNzk2Wk0xMTMuOTQzIDEyNS41ODNWMTM1LjMzM0gxMTIuNzY5VjEyNS41ODNIMTEzLjk0M1pNMTEzLjY2NCAxMzEuNjM5TDExMy4xNzUgMTMxLjYyQzExMy4xOCAxMzEuMTUgMTEzLjI0OSAxMzAuNzE3IDExMy4zODUgMTMwLjMxOUMxMTMuNTIgMTI5LjkxNyAxMTMuNzExIDEyOS41NjggMTEzLjk1NiAxMjkuMjcxQzExNC4yMDEgMTI4Ljk3NSAxMTQuNDkzIDEyOC43NDcgMTE0LjgzMiAxMjguNTg2QzExNS4xNzUgMTI4LjQyMSAxMTUuNTU0IDEyOC4zMzggMTE1Ljk2OCAxMjguMzM4QzExNi4zMDcgMTI4LjMzOCAxMTYuNjExIDEyOC4zODUgMTE2Ljg4MiAxMjguNDc4QzExNy4xNTMgMTI4LjU2NyAxMTcuMzg0IDEyOC43MTEgMTE3LjU3NCAxMjguOTFDMTE3Ljc2OSAxMjkuMTA5IDExNy45MTcgMTI5LjM2NyAxMTguMDE5IDEyOS42ODRDMTE4LjEyIDEyOS45OTcgMTE4LjE3MSAxMzAuMzggMTE4LjE3MSAxMzAuODMzVjEzNS4zMzNIMTE2Ljk5VjEzMC44MkMxMTYuOTkgMTMwLjQ2MSAxMTYuOTM3IDEzMC4xNzMgMTE2LjgzMiAxMjkuOTU3QzExNi43MjYgMTI5LjczNyAxMTYuNTcxIDEyOS41NzggMTE2LjM2OCAxMjkuNDgxQzExNi4xNjUgMTI5LjM3OSAxMTUuOTE1IDEyOS4zMjkgMTE1LjYxOSAxMjkuMzI5QzExNS4zMjcgMTI5LjMyOSAxMTUuMDYxIDEyOS4zOSAxMTQuODE5IDEyOS41MTNDMTE0LjU4MiAxMjkuNjM1IDExNC4zNzcgMTI5LjgwNSAxMTQuMjA0IDEzMC4wMjFDMTE0LjAzNCAxMzAuMjM2IDExMy45MDEgMTMwLjQ4NCAxMTMuODA0IDEzMC43NjNDMTEzLjcxMSAxMzEuMDM4IDExMy42NjQgMTMxLjMzIDExMy42NjQgMTMxLjYzOVpNMTIyLjc3OSAxMzUuNDZDMTIyLjMwMSAxMzUuNDYgMTIxLjg2NyAxMzUuMzggMTIxLjQ3OCAxMzUuMjE5QzEyMS4wOTMgMTM1LjA1NCAxMjAuNzYxIDEzNC44MjQgMTIwLjQ4MSAxMzQuNTI3QzEyMC4yMDYgMTM0LjIzMSAxMTkuOTk1IDEzMy44OCAxMTkuODQ3IDEzMy40NzRDMTE5LjY5OSAxMzMuMDY3IDExOS42MjUgMTMyLjYyMyAxMTkuNjI1IDEzMi4xNDFWMTMxLjg3NEMxMTkuNjI1IDEzMS4zMTUgMTE5LjcwNyAxMzAuODE4IDExOS44NzIgMTMwLjM4MkMxMjAuMDM3IDEyOS45NDIgMTIwLjI2MSAxMjkuNTcgMTIwLjU0NSAxMjkuMjY1QzEyMC44MjggMTI4Ljk2IDEyMS4xNSAxMjguNzMgMTIxLjUxIDEyOC41NzNDMTIxLjg2OSAxMjguNDE3IDEyMi4yNDIgMTI4LjMzOCAxMjIuNjI3IDEyOC4zMzhDMTIzLjExOCAxMjguMzM4IDEyMy41NDEgMTI4LjQyMyAxMjMuODk2IDEyOC41OTJDMTI0LjI1NiAxMjguNzYyIDEyNC41NSAxMjguOTk5IDEyNC43NzkgMTI5LjMwM0MxMjUuMDA3IDEyOS42MDQgMTI1LjE3NyAxMjkuOTU5IDEyNS4yODcgMTMwLjM3QzEyNS4zOTcgMTMwLjc3NiAxMjUuNDUyIDEzMS4yMiAxMjUuNDUyIDEzMS43MDNWMTMyLjIyOUgxMjAuMzIzVjEzMS4yNzFIMTI0LjI3N1YxMzEuMTgyQzEyNC4yNiAxMzAuODc3IDEyNC4xOTcgMTMwLjU4MSAxMjQuMDg3IDEzMC4yOTNDMTIzLjk4MSAxMzAuMDA2IDEyMy44MTIgMTI5Ljc2OSAxMjMuNTc5IDEyOS41ODNDMTIzLjM0NiAxMjkuMzk2IDEyMy4wMjkgMTI5LjMwMyAxMjIuNjI3IDEyOS4zMDNDMTIyLjM2IDEyOS4zMDMgMTIyLjExNSAxMjkuMzYgMTIxLjg5MSAxMjkuNDc1QzEyMS42NjYgMTI5LjU4NSAxMjEuNDc0IDEyOS43NSAxMjEuMzEzIDEyOS45N0MxMjEuMTUyIDEzMC4xOSAxMjEuMDI3IDEzMC40NTggMTIwLjkzOCAxMzAuNzc2QzEyMC44NSAxMzEuMDkzIDEyMC44MDUgMTMxLjQ1OSAxMjAuODA1IDEzMS44NzRWMTMyLjE0MUMxMjAuODA1IDEzMi40NjYgMTIwLjg1IDEzMi43NzMgMTIwLjkzOCAxMzMuMDYxQzEyMS4wMzIgMTMzLjM0NSAxMjEuMTY1IDEzMy41OTQgMTIxLjMzOCAxMzMuODFDMTIxLjUxNiAxMzQuMDI2IDEyMS43MyAxMzQuMTk1IDEyMS45NzkgMTM0LjMxOEMxMjIuMjMzIDEzNC40NDEgMTIyLjUyMSAxMzQuNTAyIDEyMi44NDMgMTM0LjUwMkMxMjMuMjU3IDEzNC41MDIgMTIzLjYwOSAxMzQuNDE3IDEyMy44OTYgMTM0LjI0OEMxMjQuMTg0IDEzNC4wNzkgMTI0LjQzNiAxMzMuODUyIDEyNC42NTIgMTMzLjU2OUwxMjUuMzYzIDEzNC4xMzRDMTI1LjIxNSAxMzQuMzU4IDEyNS4wMjYgMTM0LjU3MiAxMjQuNzk4IDEzNC43NzVDMTI0LjU2OSAxMzQuOTc4IDEyNC4yODggMTM1LjE0MyAxMjMuOTU0IDEzNS4yN0MxMjMuNjI0IDEzNS4zOTcgMTIzLjIzMiAxMzUuNDYgMTIyLjc3OSAxMzUuNDZaTTEzNC4wNDYgMTMzLjUxMkMxMzQuMDQ2IDEzMy4zNDIgMTM0LjAwOCAxMzMuMTg2IDEzMy45MzIgMTMzLjA0MkMxMzMuODYgMTMyLjg5NCAxMzMuNzEgMTMyLjc2MSAxMzMuNDgxIDEzMi42NDJDMTMzLjI1NyAxMzIuNTE5IDEzMi45MTkgMTMyLjQxNCAxMzIuNDY2IDEzMi4zMjVDMTMyLjA4NSAxMzIuMjQ0IDEzMS43NCAxMzIuMTQ5IDEzMS40MzEgMTMyLjAzOUMxMzEuMTI2IDEzMS45MjkgMTMwLjg2NiAxMzEuNzk2IDEzMC42NSAxMzEuNjM5QzEzMC40MzkgMTMxLjQ4MyAxMzAuMjc2IDEzMS4yOTkgMTMwLjE2MiAxMzEuMDg3QzEzMC4wNDcgMTMwLjg3NSAxMjkuOTkgMTMwLjYyOCAxMjkuOTkgMTMwLjM0NEMxMjkuOTkgMTMwLjA3MyAxMzAuMDQ5IDEyOS44MTcgMTMwLjE2OCAxMjkuNTc2QzEzMC4yOTEgMTI5LjMzNSAxMzAuNDYyIDEyOS4xMjEgMTMwLjY4MiAxMjguOTM1QzEzMC45MDYgMTI4Ljc0OSAxMzEuMTc1IDEyOC42MDMgMTMxLjQ4OCAxMjguNDk3QzEzMS44MDEgMTI4LjM5MSAxMzIuMTUxIDEyOC4zMzggMTMyLjUzNiAxMjguMzM4QzEzMy4wODYgMTI4LjMzOCAxMzMuNTU2IDEyOC40MzYgMTMzLjk0NSAxMjguNjNDMTM0LjMzNCAxMjguODI1IDEzNC42MzIgMTI5LjA4NSAxMzQuODQgMTI5LjQxMUMxMzUuMDQ3IDEyOS43MzMgMTM1LjE1MSAxMzAuMDkgMTM1LjE1MSAxMzAuNDg0SDEzMy45NzdDMTMzLjk3NyAxMzAuMjkzIDEzMy45MTkgMTMwLjEwOSAxMzMuODA1IDEyOS45MzJDMTMzLjY5NSAxMjkuNzUgMTMzLjUzMiAxMjkuNTk5IDEzMy4zMTYgMTI5LjQ4MUMxMzMuMTA1IDEyOS4zNjIgMTMyLjg0NSAxMjkuMzAzIDEzMi41MzYgMTI5LjMwM0MxMzIuMjEgMTI5LjMwMyAxMzEuOTQ1IDEyOS4zNTQgMTMxLjc0MiAxMjkuNDU2QzEzMS41NDMgMTI5LjU1MyAxMzEuMzk3IDEyOS42NzggMTMxLjMwNCAxMjkuODNDMTMxLjIxNSAxMjkuOTgyIDEzMS4xNzEgMTMwLjE0MyAxMzEuMTcxIDEzMC4zMTJDMTMxLjE3MSAxMzAuNDM5IDEzMS4xOTIgMTMwLjU1NCAxMzEuMjM0IDEzMC42NTVDMTMxLjI4MSAxMzAuNzUzIDEzMS4zNjEgMTMwLjg0NCAxMzEuNDc2IDEzMC45MjhDMTMxLjU5IDEzMS4wMDkgMTMxLjc1MSAxMzEuMDg1IDEzMS45NTggMTMxLjE1N0MxMzIuMTY1IDEzMS4yMjkgMTMyLjQzIDEzMS4zMDEgMTMyLjc1MSAxMzEuMzczQzEzMy4zMTQgMTMxLjUgMTMzLjc3OCAxMzEuNjUyIDEzNC4xNDIgMTMxLjgzQzEzNC41MDYgMTMyLjAwNyAxMzQuNzc2IDEzMi4yMjUgMTM0Ljk1NCAxMzIuNDgzQzEzNS4xMzIgMTMyLjc0MiAxMzUuMjIxIDEzMy4wNTUgMTM1LjIyMSAxMzMuNDIzQzEzNS4yMjEgMTMzLjcyMyAxMzUuMTU3IDEzMy45OTggMTM1LjAzIDEzNC4yNDhDMTM0LjkwOCAxMzQuNDk4IDEzNC43MjggMTM0LjcxNCAxMzQuNDkxIDEzNC44OTZDMTM0LjI1OCAxMzUuMDczIDEzMy45NzkgMTM1LjIxMyAxMzMuNjUzIDEzNS4zMTRDMTMzLjMzMSAxMzUuNDEyIDEzMi45NjkgMTM1LjQ2IDEzMi41NjcgMTM1LjQ2QzEzMS45NjIgMTM1LjQ2IDEzMS40NSAxMzUuMzUzIDEzMS4wMzEgMTM1LjEzN0MxMzAuNjEyIDEzNC45MjEgMTMwLjI5NSAxMzQuNjQyIDEzMC4wNzkgMTM0LjI5OUMxMjkuODYzIDEzMy45NTYgMTI5Ljc1NSAxMzMuNTk0IDEyOS43NTUgMTMzLjIxM0gxMzAuOTM2QzEzMC45NTMgMTMzLjUzNSAxMzEuMDQ2IDEzMy43OTEgMTMxLjIxNSAxMzMuOTgxQzEzMS4zODUgMTM0LjE2OCAxMzEuNTkyIDEzNC4zMDEgMTMxLjgzNyAxMzQuMzgxQzEzMi4wODMgMTM0LjQ1OCAxMzIuMzI2IDEzNC40OTYgMTMyLjU2NyAxMzQuNDk2QzEzMi44ODkgMTM0LjQ5NiAxMzMuMTU4IDEzNC40NTMgMTMzLjM3NCAxMzQuMzY5QzEzMy41OTQgMTM0LjI4NCAxMzMuNzYxIDEzNC4xNjggMTMzLjg3NSAxMzQuMDJDMTMzLjk4OSAxMzMuODcxIDEzNC4wNDYgMTMzLjcwMiAxMzQuMDQ2IDEzMy41MTJaTTEzNy45MzggMTI1LjU4M1YxMzUuMzMzSDEzNi43NjNWMTI1LjU4M0gxMzcuOTM4Wk0xMzcuNjU4IDEzMS42MzlMMTM3LjE2OSAxMzEuNjJDMTM3LjE3NCAxMzEuMTUgMTM3LjI0MyAxMzAuNzE3IDEzNy4zNzkgMTMwLjMxOUMxMzcuNTE0IDEyOS45MTcgMTM3LjcwNSAxMjkuNTY4IDEzNy45NSAxMjkuMjcxQzEzOC4xOTYgMTI4Ljk3NSAxMzguNDg4IDEyOC43NDcgMTM4LjgyNiAxMjguNTg2QzEzOS4xNjkgMTI4LjQyMSAxMzkuNTQ4IDEyOC4zMzggMTM5Ljk2MiAxMjguMzM4QzE0MC4zMDEgMTI4LjMzOCAxNDAuNjA2IDEyOC4zODUgMTQwLjg3NiAxMjguNDc4QzE0MS4xNDcgMTI4LjU2NyAxNDEuMzc4IDEyOC43MTEgMTQxLjU2OCAxMjguOTFDMTQxLjc2MyAxMjkuMTA5IDE0MS45MTEgMTI5LjM2NyAxNDIuMDEzIDEyOS42ODRDMTQyLjExNCAxMjkuOTk3IDE0Mi4xNjUgMTMwLjM4IDE0Mi4xNjUgMTMwLjgzM1YxMzUuMzMzSDE0MC45ODRWMTMwLjgyQzE0MC45ODQgMTMwLjQ2MSAxNDAuOTMxIDEzMC4xNzMgMTQwLjgyNiAxMjkuOTU3QzE0MC43MiAxMjkuNzM3IDE0MC41NjUgMTI5LjU3OCAxNDAuMzYyIDEyOS40ODFDMTQwLjE1OSAxMjkuMzc5IDEzOS45MSAxMjkuMzI5IDEzOS42MTMgMTI5LjMyOUMxMzkuMzIxIDEyOS4zMjkgMTM5LjA1NSAxMjkuMzkgMTM4LjgxMyAxMjkuNTEzQzEzOC41NzYgMTI5LjYzNSAxMzguMzcxIDEyOS44MDUgMTM4LjE5OCAxMzAuMDIxQzEzOC4wMjggMTMwLjIzNiAxMzcuODk1IDEzMC40ODQgMTM3Ljc5OCAxMzAuNzYzQzEzNy43MDUgMTMxLjAzOCAxMzcuNjU4IDEzMS4zMyAxMzcuNjU4IDEzMS42MzlaTTE0My42MTIgMTMxLjk3NlYxMzEuODNDMTQzLjYxMiAxMzEuMzM0IDE0My42ODQgMTMwLjg3NSAxNDMuODI4IDEzMC40NTJDMTQzLjk3MiAxMzAuMDI1IDE0NC4xNzkgMTI5LjY1NCAxNDQuNDUgMTI5LjM0MUMxNDQuNzIxIDEyOS4wMjQgMTQ1LjA0OSAxMjguNzc4IDE0NS40MzQgMTI4LjYwNUMxNDUuODE5IDEyOC40MjcgMTQ2LjI1MSAxMjguMzM4IDE0Ni43MjkgMTI4LjMzOEMxNDcuMjExIDEyOC4zMzggMTQ3LjY0NSAxMjguNDI3IDE0OC4wMyAxMjguNjA1QzE0OC40MiAxMjguNzc4IDE0OC43NSAxMjkuMDI0IDE0OS4wMjEgMTI5LjM0MUMxNDkuMjk2IDEyOS42NTQgMTQ5LjUwNSAxMzAuMDI1IDE0OS42NDkgMTMwLjQ1MkMxNDkuNzkzIDEzMC44NzUgMTQ5Ljg2NSAxMzEuMzM0IDE0OS44NjUgMTMxLjgzVjEzMS45NzZDMTQ5Ljg2NSAxMzIuNDcxIDE0OS43OTMgMTMyLjkzIDE0OS42NDkgMTMzLjM1M0MxNDkuNTA1IDEzMy43NzYgMTQ5LjI5NiAxMzQuMTQ2IDE0OS4wMjEgMTM0LjQ2NEMxNDguNzUgMTM0Ljc3NyAxNDguNDIyIDEzNS4wMjIgMTQ4LjAzNyAxMzUuMkMxNDcuNjU2IDEzNS4zNzQgMTQ3LjIyNCAxMzUuNDYgMTQ2Ljc0MiAxMzUuNDZDMTQ2LjI1OSAxMzUuNDYgMTQ1LjgyNiAxMzUuMzc0IDE0NS40NCAxMzUuMkMxNDUuMDU1IDEzNS4wMjIgMTQ0LjcyNSAxMzQuNzc3IDE0NC40NSAxMzQuNDY0QzE0NC4xNzkgMTM0LjE0NiAxNDMuOTcyIDEzMy43NzYgMTQzLjgyOCAxMzMuMzUzQzE0My42ODQgMTMyLjkzIDE0My42MTIgMTMyLjQ3MSAxNDMuNjEyIDEzMS45NzZaTTE0NC43ODcgMTMxLjgzVjEzMS45NzZDMTQ0Ljc4NyAxMzIuMzE4IDE0NC44MjcgMTMyLjY0MiAxNDQuOTA3IDEzMi45NDdDMTQ0Ljk4OCAxMzMuMjQ3IDE0NS4xMDggMTMzLjUxNCAxNDUuMjY5IDEzMy43NDdDMTQ1LjQzNCAxMzMuOTc5IDE0NS42MzkgMTM0LjE2MyAxNDUuODg1IDEzNC4yOTlDMTQ2LjEzIDEzNC40MyAxNDYuNDE2IDEzNC40OTYgMTQ2Ljc0MiAxMzQuNDk2QzE0Ny4wNjMgMTM0LjQ5NiAxNDcuMzQ1IDEzNC40MyAxNDcuNTg2IDEzNC4yOTlDMTQ3LjgzMSAxMzQuMTYzIDE0OC4wMzUgMTMzLjk3OSAxNDguMTk1IDEzMy43NDdDMTQ4LjM1NiAxMzMuNTE0IDE0OC40NzcgMTMzLjI0NyAxNDguNTU3IDEzMi45NDdDMTQ4LjY0MiAxMzIuNjQyIDE0OC42ODQgMTMyLjMxOCAxNDguNjg0IDEzMS45NzZWMTMxLjgzQzE0OC42ODQgMTMxLjQ5MSAxNDguNjQyIDEzMS4xNzIgMTQ4LjU1NyAxMzAuODcxQzE0OC40NzcgMTMwLjU2NiAxNDguMzU0IDEzMC4yOTggMTQ4LjE4OSAxMzAuMDY1QzE0OC4wMjggMTI5LjgyOCAxNDcuODI1IDEyOS42NDIgMTQ3LjU4IDEyOS41MDZDMTQ3LjMzOCAxMjkuMzcxIDE0Ny4wNTUgMTI5LjMwMyAxNDYuNzI5IDEyOS4zMDNDMTQ2LjQwNyAxMjkuMzAzIDE0Ni4xMjQgMTI5LjM3MSAxNDUuODc4IDEyOS41MDZDMTQ1LjYzNyAxMjkuNjQyIDE0NS40MzQgMTI5LjgyOCAxNDUuMjY5IDEzMC4wNjVDMTQ1LjEwOCAxMzAuMjk4IDE0NC45ODggMTMwLjU2NiAxNDQuOTA3IDEzMC44NzFDMTQ0LjgyNyAxMzEuMTcyIDE0NC43ODcgMTMxLjQ5MSAxNDQuNzg3IDEzMS44M1pNMTUyLjUxMiAxMjkuNTQ0VjEzNS4zMzNIMTUxLjMzN1YxMjguNDY1SDE1Mi40OEwxNTIuNTEyIDEyOS41NDRaTTE1NC42NTcgMTI4LjQyN0wxNTQuNjUxIDEyOS41MTlDMTU0LjU1NCAxMjkuNDk4IDE1NC40NiAxMjkuNDg1IDE1NC4zNzIgMTI5LjQ4MUMxNTQuMjg3IDEyOS40NzIgMTU0LjE5IDEyOS40NjggMTU0LjA4IDEyOS40NjhDMTUzLjgwOSAxMjkuNDY4IDE1My41NyAxMjkuNTExIDE1My4zNjIgMTI5LjU5NUMxNTMuMTU1IDEyOS42OCAxNTIuOTc5IDEyOS43OTggMTUyLjgzNSAxMjkuOTUxQzE1Mi42OTIgMTMwLjEwMyAxNTIuNTc3IDEzMC4yODUgMTUyLjQ5MyAxMzAuNDk3QzE1Mi40MTIgMTMwLjcwNCAxNTIuMzU5IDEzMC45MzIgMTUyLjMzNCAxMzEuMTgyTDE1Mi4wMDQgMTMxLjM3M0MxNTIuMDA0IDEzMC45NTggMTUyLjA0NCAxMzAuNTY5IDE1Mi4xMjUgMTMwLjIwNUMxNTIuMjA5IDEyOS44NDEgMTUyLjMzOCAxMjkuNTE5IDE1Mi41MTIgMTI5LjI0QzE1Mi42ODUgMTI4Ljk1NiAxNTIuOTA1IDEyOC43MzYgMTUzLjE3MiAxMjguNThDMTUzLjQ0MyAxMjguNDE5IDE1My43NjQgMTI4LjMzOCAxNTQuMTM3IDEyOC4zMzhDMTU0LjIyMSAxMjguMzM4IDE1NC4zMTkgMTI4LjM0OSAxNTQuNDI5IDEyOC4zN0MxNTQuNTM5IDEyOC4zODcgMTU0LjYxNSAxMjguNDA2IDE1NC42NTcgMTI4LjQyN1pNMTU4LjQ2NiAxMzUuNDZDMTU3Ljk4OCAxMzUuNDYgMTU3LjU1NCAxMzUuMzggMTU3LjE2NSAxMzUuMjE5QzE1Ni43NzkgMTM1LjA1NCAxNTYuNDQ3IDEzNC44MjQgMTU2LjE2OCAxMzQuNTI3QzE1NS44OTMgMTM0LjIzMSAxNTUuNjgxIDEzMy44OCAxNTUuNTMzIDEzMy40NzRDMTU1LjM4NSAxMzMuMDY3IDE1NS4zMTEgMTMyLjYyMyAxNTUuMzExIDEzMi4xNDFWMTMxLjg3NEMxNTUuMzExIDEzMS4zMTUgMTU1LjM5NCAxMzAuODE4IDE1NS41NTkgMTMwLjM4MkMxNTUuNzI0IDEyOS45NDIgMTU1Ljk0OCAxMjkuNTcgMTU2LjIzMSAxMjkuMjY1QzE1Ni41MTUgMTI4Ljk2IDE1Ni44MzcgMTI4LjczIDE1Ny4xOTYgMTI4LjU3M0MxNTcuNTU2IDEyOC40MTcgMTU3LjkyOCAxMjguMzM4IDE1OC4zMTMgMTI4LjMzOEMxNTguODA0IDEyOC4zMzggMTU5LjIyOCAxMjguNDIzIDE1OS41ODMgMTI4LjU5MkMxNTkuOTQzIDEyOC43NjIgMTYwLjIzNyAxMjguOTk5IDE2MC40NjUgMTI5LjMwM0MxNjAuNjk0IDEyOS42MDQgMTYwLjg2MyAxMjkuOTU5IDE2MC45NzMgMTMwLjM3QzE2MS4wODMgMTMwLjc3NiAxNjEuMTM4IDEzMS4yMiAxNjEuMTM4IDEzMS43MDNWMTMyLjIyOUgxNTYuMDA5VjEzMS4yNzFIMTU5Ljk2NFYxMzEuMTgyQzE1OS45NDcgMTMwLjg3NyAxNTkuODgzIDEzMC41ODEgMTU5Ljc3MyAxMzAuMjkzQzE1OS42NjggMTMwLjAwNiAxNTkuNDk4IDEyOS43NjkgMTU5LjI2NiAxMjkuNTgzQzE1OS4wMzMgMTI5LjM5NiAxNTguNzE1IDEyOS4zMDMgMTU4LjMxMyAxMjkuMzAzQzE1OC4wNDcgMTI5LjMwMyAxNTcuODAxIDEyOS4zNiAxNTcuNTc3IDEyOS40NzVDMTU3LjM1MyAxMjkuNTg1IDE1Ny4xNiAxMjkuNzUgMTU3IDEyOS45N0MxNTYuODM5IDEzMC4xOSAxNTYuNzE0IDEzMC40NTggMTU2LjYyNSAxMzAuNzc2QzE1Ni41MzYgMTMxLjA5MyAxNTYuNDkyIDEzMS40NTkgMTU2LjQ5MiAxMzEuODc0VjEzMi4xNDFDMTU2LjQ5MiAxMzIuNDY2IDE1Ni41MzYgMTMyLjc3MyAxNTYuNjI1IDEzMy4wNjFDMTU2LjcxOCAxMzMuMzQ1IDE1Ni44NTEgMTMzLjU5NCAxNTcuMDI1IDEzMy44MUMxNTcuMjAzIDEzNC4wMjYgMTU3LjQxNiAxMzQuMTk1IDE1Ny42NjYgMTM0LjMxOEMxNTcuOTIgMTM0LjQ0MSAxNTguMjA4IDEzNC41MDIgMTU4LjUyOSAxMzQuNTAyQzE1OC45NDQgMTM0LjUwMiAxNTkuMjk1IDEzNC40MTcgMTU5LjU4MyAxMzQuMjQ4QzE1OS44NzEgMTM0LjA3OSAxNjAuMTIzIDEzMy44NTIgMTYwLjMzOCAxMzMuNTY5TDE2MS4wNDkgMTM0LjEzNEMxNjAuOTAxIDEzNC4zNTggMTYwLjcxMyAxMzQuNTcyIDE2MC40ODQgMTM0Ljc3NUMxNjAuMjU2IDEzNC45NzggMTU5Ljk3NCAxMzUuMTQzIDE1OS42NCAxMzUuMjdDMTU5LjMxIDEzNS4zOTcgMTU4LjkxOSAxMzUuNDYgMTU4LjQ2NiAxMzUuNDZaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0PGRlZnM+XG5cdFx0XHQ8Y2xpcFBhdGggaWQ9XCJjbGlwMF83Nl8xMjczXCI+XG5cdFx0XHRcdDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGZpbGw9XCJ3aGl0ZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNDkgMzkpXCIvPlxuXHRcdFx0PC9jbGlwUGF0aD5cblx0XHQ8L2RlZnM+XG5cdDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldmlldzsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IFRvZ2dsZUNvbnRyb2wsIFNlbGVjdENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgamV0RW5naW5lVmVyc2lvbiB9ID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhO1xuXG5mdW5jdGlvbiBDdXN0b21UZW1wbGF0ZUNvbnRyb2xzKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIGxpc3RpbmdUeXBlcyxcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgaXNTZWxlY3RlZCxcblx0XHQgICAgICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfSxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IHsgZmllbGRfb3B0aW9uc19mcm9tID0gJycgfSA9IGF0dHJpYnV0ZXM7XG5cblx0cmV0dXJuIChcblx0XHRcdEJvb2xlYW4oIGpldEVuZ2luZVZlcnNpb24ubGVuZ3RoICkgJiZcblx0XHRcdFsgJ3Rlcm1zJywgJ3Bvc3RzJywgJ2dlbmVyYXRlJyBdLmluY2x1ZGVzKCBmaWVsZF9vcHRpb25zX2Zyb20gKVxuXHRcdClcblx0XHQmJiA8PlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3VzZV9jdXN0b21fdGVtcGxhdGUnICkgfVxuXHRcdFx0XHRsYWJlbD17IF9fKCAnVXNlIGN1c3RvbSB0ZW1wbGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuY3VzdG9tX2l0ZW1fdGVtcGxhdGUgfVxuXHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdjdXN0b21faXRlbV90ZW1wbGF0ZScgKSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgY3VzdG9tX2l0ZW1fdGVtcGxhdGUgPT4gc2V0QXR0cmlidXRlcyhcblx0XHRcdFx0XHR7IGN1c3RvbV9pdGVtX3RlbXBsYXRlIH0gKSB9XG5cdFx0XHQvPlxuXHRcdFx0eyBhdHRyaWJ1dGVzLmN1c3RvbV9pdGVtX3RlbXBsYXRlICYmIDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdTZWxlY3RDb250cm9sLWN1c3RvbV9pdGVtX3RlbXBsYXRlX2lkJyApIH1cblx0XHRcdFx0bGFiZWw9eyBfXyggJ0Nob29zZSBjdXN0b20gdGVtcGxhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jdXN0b21faXRlbV90ZW1wbGF0ZV9pZCB9XG5cdFx0XHRcdG9wdGlvbnM9eyBsaXN0aW5nVHlwZXMgfVxuXHRcdFx0XHRvbkNoYW5nZT17IGN1c3RvbV9pdGVtX3RlbXBsYXRlX2lkID0+IHNldEF0dHJpYnV0ZXMoXG5cdFx0XHRcdFx0eyBjdXN0b21faXRlbV90ZW1wbGF0ZV9pZCB9ICkgfVxuXHRcdFx0Lz4gfVxuXHRcdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tVGVtcGxhdGVDb250cm9sczsiLCJpbXBvcnQgdG9CdWxrIGZyb20gJy4vdG9CdWxrJztcbmltcG9ydCBmcm9tQnVsayBmcm9tICcuL2Zyb21CdWxrJztcbmltcG9ydCB7XG5cdEhlbHAsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdFRleHRhcmVhQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0RmxleCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTY29wZWRBdHRyaWJ1dGVzQ29udGV4dCxcblx0XHQgIHVzZU9uVXBkYXRlTW9kYWxcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xuXG5jb25zdCBTdHlsZWRGbGV4ID0gc3R5bGVkKCBGbGV4IClgXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDAgMCAxM3B4IDA7XG5cblx0LmpldC1mb3JtLWVkaXQtbW9kYWwgJiB7XG5cdFx0LmNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZCAge1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdGJvcmRlci10b3A6IG5vbmU7XG5cdFx0fVxuXHR9XG5gO1xuXG5mdW5jdGlvbiBvcHRpb25zVG9CdWxrKCBvcHRpb25zICkge1xuXHRpZiAoIG9wdGlvbnM/Lmxlbmd0aCApIHtcblx0XHRyZXR1cm4gb3B0aW9uc1xuXHRcdFx0Lm1hcCggb3B0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgcGFydHMgPSBbXTtcblxuXHRcdFx0XHRwYXJ0cy5wdXNoKCBvcHRpb24ubGFiZWwgfHwgJycgKTtcblx0XHRcdFx0cGFydHMucHVzaCggb3B0aW9uLnZhbHVlIHx8ICcnICk7XG5cblx0XHRcdFx0aWYgKCBvcHRpb24uY2FsY3VsYXRlICkge1xuXHRcdFx0XHRcdHBhcnRzLnB1c2goIG9wdGlvbi5jYWxjdWxhdGUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBwYXJ0cy5qb2luKCcgOiAnKTtcblx0XHRcdH0gKVxuXHRcdFx0LmpvaW4oICdcXG4nICk7XG5cdH1cblxuXHRyZXR1cm4gW107XG59XG5cbmZ1bmN0aW9uIEJ1bGtPcHRpb25zKCB7IHNldE1vZGFsQ29udGVudCB9ICkge1xuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdHNldFJlYWxBdHRyaWJ1dGVzLFxuXHR9ID0gdXNlU2NvcGVkQXR0cmlidXRlc0NvbnRleHQoKTtcblxuXHRjb25zdCBbIGJ1bGtTZWxlY3QsIHNldEJ1bGtTZWxlY3QgXSAgICAgICAgID0gdXNlU3RhdGUoICdqZmJfY3VycmVudF9zZWxlY3QnICk7XG5cdGNvbnN0IFsgY3VycmVudE9wdGlvbnMsIHNldEN1cnJlbnRPcHRpb25zIF0gPSB1c2VTdGF0ZSggW10gKTtcblxuXHRjb25zdCBvcHRpb25zTGlzdCAgPSBbIHsgbGFiZWw6ICdTZWxlY3QuLi4nLCB2YWx1ZTogJ2pmYl9jdXJyZW50X3NlbGVjdCcgfSBdLmNvbmNhdCggd2luZG93LkpldEZCQnVsa09wdGlvbnMubGlzdCApIHx8IFtdO1xuXHRjb25zdCBidWxrU291cmNlICAgPSB3aW5kb3cuSmV0RkJCdWxrT3B0aW9ucy5zb3VyY2VzO1xuXG5cdGNvbnN0IFsgYnVsaywgc2V0QnVsayBdID0gdXNlU3RhdGUoXG5cdFx0KCkgPT4gdG9CdWxrKCBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMgKVxuXHQpO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBpZiAoIGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucz8ubGVuZ3RoICkge1xuXHRcdFx0c2V0Q3VycmVudE9wdGlvbnMoIG9wdGlvbnNUb0J1bGsoIGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucyApICk7XG5cdFx0XHRzZXRCdWxrKCB0b0J1bGsoIGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucyApICk7XG4gICAgICAgIH1cbiAgICB9LCBbXSApO1xuXG5cdGNvbnN0IHJlcGxhY2VPcHRpb25zID0gKCB2YWwgPSBidWxrICkgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdGZpZWxkX29wdGlvbnM6IFtcblx0XHRcdFx0Li4uZnJvbUJ1bGsoIHZhbCApLFxuXHRcdFx0XSxcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRzZXRCdWxrU2VsZWN0KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCAnamZiX2N1cnJlbnRfc2VsZWN0JyA9PT0gdmFsdWUgKSB7XG5cdFx0XHRzZXRCdWxrKCBjdXJyZW50T3B0aW9ucyApO1xuXHRcdFx0cmVwbGFjZU9wdGlvbnMoIGN1cnJlbnRPcHRpb25zICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5ld0J1bGsgPSB0b0J1bGsoIGJ1bGtTb3VyY2VbdmFsdWVdICk7XG5cdFx0XHRzZXRCdWxrKCBuZXdCdWxrICk7XG5cdFx0XHRyZXBsYWNlT3B0aW9ucyggbmV3QnVsayApO1xuXHRcdH1cblx0fTtcblxuXHR1c2VPblVwZGF0ZU1vZGFsKCAoKSA9PiB7XG5cdFx0XHRzZXRSZWFsQXR0cmlidXRlcyggYXR0cmlidXRlcyApO1xuXHRcdFx0c2V0TW9kYWxDb250ZW50KCBmYWxzZSApO1xuXHRcdH1cblx0KTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8U3R5bGVkRmxleD5cblx0XHRcdDxsYWJlbD57IF9fKCAnT3B0aW9ucyBwcmVzZXQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvbGFiZWw+XG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHR2YWx1ZT17IGJ1bGtTZWxlY3QgfVxuXHRcdFx0XHRvbkNoYW5nZT17IGhhbmRsZVNlbGVjdENoYW5nZSB9XG5cdFx0XHRcdG9wdGlvbnM9eyBvcHRpb25zTGlzdCB9XG5cdFx0XHQvPlxuXHRcdDwvU3R5bGVkRmxleD5cblx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtY29udHJvbC1jbGVhclwiXG5cdFx0XHR2YWx1ZT17IGJ1bGsgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIHZhbCApID0+IHtcblx0XHRcdFx0c2V0QnVsayh0b0J1bGsoIHZhbCApKTtcblx0XHRcdFx0cmVwbGFjZU9wdGlvbnMoIHZhbCApO1xuXHRcdFx0fX1cblx0XHRcdHJvd3M9eyAxNiB9XG5cdFx0Lz5cblx0XHQ8SGVscD5cblx0XHRcdHsgX18oXG5cdFx0XHRcdGBZb3UgY2FuIHNwZWNpZnkgYSBkaWZmZXJlbnQgdmFsdWUgYW5kIHZhbHVlIFxuZm9yIHRoZSBjYWxjdWxhdG9yIGZpZWxkIGJ5IHNlcGFyYXRpbmcgdGhlbSB3aXRoIGEgY29sb24gY2hhcmFjdGVyYCxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSB9XG5cdFx0XHQ8YnIvPlxuXHRcdFx0PGJyLz5cblx0XHRcdEJvb2sgIzEgOiBib29rXzEgOiAxMDBcblx0XHQ8L0hlbHA+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVsa09wdGlvbnM7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IEZyb21NYW51YWxGaWVsZHNDb250ZW50IGZyb20gJy4vRnJvbU1hbnVhbEZpZWxkc0NvbnRlbnQnO1xuaW1wb3J0IEJ1bGtPcHRpb25zIGZyb20gJy4vQnVsa09wdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIEFjdGlvbk1vZGFsLFxuXHQgICAgICBTY29wZWRBdHRyaWJ1dGVzUHJvdmlkZXIsXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIEJ1dHRvbixcblx0ICAgICAgRmxleCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5jb25zdCB7XG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHNob3dCdWxrSWNvbiA9IDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHQ8cGF0aFxuXHRcdGQ9XCJNMTEgN0gxN1Y5SDExVjdaTTExIDExSDE3VjEzSDExVjExWk0xMSAxNUgxN1YxN0gxMVYxNVpNNyA3SDlWOUg3VjdaTTcgMTFIOVYxM0g3VjExWk03IDE1SDlWMTdIN1YxNVpNMjAuMSAzSDMuOUMzLjQgMyAzIDMuNCAzIDMuOVYyMC4xQzMgMjAuNSAzLjQgMjEgMy45IDIxSDIwLjFDMjAuNSAyMSAyMSAyMC41IDIxIDIwLjFWMy45QzIxIDMuNCAyMC41IDMgMjAuMSAzWk0xOSAxOUg1VjVIMTlWMTlaXCJcblx0XHRmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuPC9zdmc+O1xuXG5jb25zdCBoaWRlQnVsa0ljb24gPSA8c3ZnXG5cdHdpZHRoPVwiMjRcIlxuXHRoZWlnaHQ9XCIyNFwiXG5cdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRmaWxsPVwibm9uZVwiXG5cdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHQ+XG5cdDxwYXRoXG5cdFx0ZD1cIk0zIDE3LjI1VjIxSDYuNzVMMTcuODEgOS45NEwxNC4wNiA2LjE5TDMgMTcuMjVaTTIwLjcxIDcuMDRDMjEuMSA2LjY1IDIxLjEgNi4wMiAyMC43MSA1LjYzTDE4LjM3IDMuMjlDMTcuOTggMi45IDE3LjM1IDIuOSAxNi45NiAzLjI5TDE1LjEzIDUuMTJMMTguODggOC44N0wyMC43MSA3LjA0WlwiXG5cdFx0ZmlsbD1cImN1cnJlbnRDb2xvclwiXG5cdC8+XG48L3N2Zz47XG5cbmZ1bmN0aW9uIEZyb21NYW51YWxGaWVsZHMoKSB7XG5cblx0Y29uc3QgWyBzaG93TWFudWFsTW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cdGNvbnN0IFsgbW9kYWxDb250ZW50LCBzZXRNb2RhbENvbnRlbnQgXSA9IHVzZVN0YXRlKCAnJyApO1xuXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuXHRcdHNldFNob3dNb2RhbCggdG9nZ2xlID0+ICF0b2dnbGUgKTtcblx0fTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8QnV0dG9uXG5cdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0b25DbGljaz17IHRvZ2dsZU1vZGFsIH1cblx0XHRcdGljb249XCJhZG1pbi10b29sc1wiXG5cdFx0PlxuXHRcdFx0eyBfXyggJ01hbmFnZSBpdGVtcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ8L0J1dHRvbj5cblx0XHR7IHNob3dNYW51YWxNb2RhbCAmJiA8QWN0aW9uTW9kYWxcblx0XHRcdHRpdGxlPXsgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cblx0XHRcdFx0eyBfXyggJ0VkaXQgT3B0aW9ucycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdG9uQ2xpY2s9e1xuXHRcdFx0XHRcdFx0KCkgPT4gc2V0TW9kYWxDb250ZW50KCBwcmV2ID0+IHByZXYgPyAnJyA6ICdidWxrJyApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGljb249eyBtb2RhbENvbnRlbnQgPyBoaWRlQnVsa0ljb24gOiBzaG93QnVsa0ljb24gfVxuXHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IG1vZGFsQ29udGVudFxuXHRcdFx0XHRcdCAgPyBfXyggJ1N3aXRjaCB0byBtYW51YWwgZWRpdG9yJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdFx0XHQgIDogX18oICdTd2l0Y2ggdG8gYnVsayBlZGl0b3InLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9GbGV4PiB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IHRvZ2dsZU1vZGFsIH1cblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XG5cdFx0PlxuXHRcdFx0PFNjb3BlZEF0dHJpYnV0ZXNQcm92aWRlcj5cblx0XHRcdFx0eyAnYnVsaycgPT09IG1vZGFsQ29udGVudFxuXHRcdFx0XHQgID8gPEJ1bGtPcHRpb25zIHNldE1vZGFsQ29udGVudD17IHNldE1vZGFsQ29udGVudCB9Lz5cblx0XHRcdFx0ICA6IDxGcm9tTWFudWFsRmllbGRzQ29udGVudC8+IH1cblx0XHRcdDwvU2NvcGVkQXR0cmlidXRlc1Byb3ZpZGVyPlxuXHRcdDwvQWN0aW9uTW9kYWw+IH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9tTWFudWFsRmllbGRzOyIsImltcG9ydCBGcm9tTWFudWFsT3B0aW9uc0NvbnRleHRQcm92aWRlclxuXHRmcm9tICcuL0Zyb21NYW51YWxPcHRpb25zQ29udGV4dFByb3ZpZGVyJztcbmltcG9ydCBGcm9tTWFudWFsT3B0aW9uSXRlbSBmcm9tICcuL0Zyb21NYW51YWxPcHRpb25JdGVtJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdCAgICAgIFJlcGVhdGVyLFxuXHQgICAgICBSZXBlYXRlckFkZE5ldyxcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU2NvcGVkQXR0cmlidXRlc0NvbnRleHQsXG5cdCAgICAgIHVzZU9uVXBkYXRlTW9kYWwsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuZnVuY3Rpb24gRnJvbU1hbnVhbEZpZWxkc0NvbnRlbnQoKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0UmVhbEF0dHJpYnV0ZXMsXG5cdCAgICAgIH0gPSB1c2VTY29wZWRBdHRyaWJ1dGVzQ29udGV4dCgpO1xuXG5cdGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSBvcHRpb25zID0+IHtcblx0XHRjb25zdCBmaWVsZF9vcHRpb25zID0gJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9wdGlvbnNcblx0XHQgICAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zKCBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMgKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICA6IG9wdGlvbnM7XG5cblx0XHRzZXRBdHRyaWJ1dGVzKCBwcmV2ID0+IChcblx0XHRcdHtcblx0XHRcdFx0Li4ucHJldiwgZmllbGRfb3B0aW9ucyxcblx0XHRcdH1cblx0XHQpICk7XG5cdH07XG5cblx0dXNlT25VcGRhdGVNb2RhbCggKCkgPT4gc2V0UmVhbEF0dHJpYnV0ZXMoIGF0dHJpYnV0ZXMgKSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxGcm9tTWFudWFsT3B0aW9uc0NvbnRleHRQcm92aWRlcj5cblx0XHRcdDxSZXBlYXRlclxuXHRcdFx0XHRpdGVtcz17IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucyA/PyBbXSB9XG5cdFx0XHRcdG9uU2V0U3RhdGU9eyB1cGRhdGVPcHRpb25zIH1cblx0XHRcdD5cblx0XHRcdFx0PEZyb21NYW51YWxPcHRpb25JdGVtLz5cblx0XHRcdDwvUmVwZWF0ZXI+XG5cdFx0PC9Gcm9tTWFudWFsT3B0aW9uc0NvbnRleHRQcm92aWRlcj5cblx0XHQ8UmVwZWF0ZXJBZGROZXcgb25TZXRTdGF0ZT17IHVwZGF0ZU9wdGlvbnMgfT5cblx0XHRcdHsgX18oICdBZGQgbmV3IE9wdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ8L1JlcGVhdGVyQWRkTmV3PlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb21NYW51YWxGaWVsZHNDb250ZW50OyIsImltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BsaW5hcmlhL3JlYWN0JztcblxuY29uc3Qge1xuXHR1c2VDb250ZXh0LFxufSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRUb2dnbGVDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0X18sXG59ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRSZXBlYXRlckl0ZW1Db250ZXh0LFxufSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgTm9Cb3JkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0LmpldC1mb3JtLWVkaXQtbW9kYWwgJiAuY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkIHtcblx0XHRib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG5cdH1cbmA7XG5cbmZ1bmN0aW9uIEZyb21NYW51YWxPcHRpb25JdGVtKCkge1xuXHRjb25zdCB7XG5cdFx0Y3VycmVudEl0ZW0sXG5cdFx0Y2hhbmdlQ3VycmVudEl0ZW0sXG5cdH0gPSB1c2VDb250ZXh0KCBSZXBlYXRlckl0ZW1Db250ZXh0ICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnTGFiZWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmxhYmVsIH1cblx0XHRcdG9uQ2hhbmdlPXsgbGFiZWwgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgbGFiZWwgfSApIH1cblx0XHQvPlxuXG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cblx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4ge1xuXHRcdFx0XHRpZiAoIGN1cnJlbnRJdGVtLmtlZXBfY29tbWFzICYmICFTdHJpbmcoIHZhbHVlICkuaW5jbHVkZXMoJywnKSApIHtcblx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSgge1xuXHRcdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0XHRrZWVwX2NvbW1hczogZmFsc2UsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXG5cdFx0eyBjdXJyZW50SXRlbS52YWx1ZSAmJiBjdXJyZW50SXRlbS52YWx1ZS5pbmNsdWRlcyggJywnICkgJiYgKFxuXHRcdFx0PE5vQm9yZGVyV3JhcHBlcj5cblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2F2ZSBhcyBzaW5nbGUgdmFsdWUgKGlnbm9yZSBjb21tYXMpJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdGhlbHA9eyBfXyhcblx0XHRcdFx0XHRcdCdCeSBkZWZhdWx0LCB2YWx1ZXMgY29udGFpbmluZyBjb21tYXMgYXJlIHNwbGl0IGludG8gbXVsdGlwbGUgb3B0aW9ucy4gRW5hYmxlIHRoaXMgdG8gc2F2ZSB0aGUgdmFsdWUgYXMgYSBzaW5nbGUgc3RyaW5nLCBpbmNsdWRpbmcgY29tbWFzLicsXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgISEgY3VycmVudEl0ZW0ua2VlcF9jb21tYXMgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsga2VlcF9jb21tYXMgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsga2VlcF9jb21tYXMgfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvTm9Cb3JkZXJXcmFwcGVyPlxuXHRcdCkgfVxuXG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5jYWxjdWxhdGUgfVxuXHRcdFx0b25DaGFuZ2U9eyBjYWxjdWxhdGUgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIHsgY2FsY3VsYXRlIH0gKSB9XG5cdFx0Lz5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9tTWFudWFsT3B0aW9uSXRlbTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHQgICAgICBSZXBlYXRlckhlYWRDb250ZXh0LFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgaXRlbUhlYWRpbmcgPSAoIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKSA9PiB7XG5cdGNvbnN0IGxlZnRQYXJ0ICA9IFsgYCMkeyBpbmRleCArIDEgfWAgXTtcblx0Y29uc3QgcmlnaHRQYXJ0ID0gW107XG5cblx0aWYgKCBjdXJyZW50SXRlbS5sYWJlbCApIHtcblx0XHRyaWdodFBhcnQucHVzaCggYExhYmVsIFskeyBjdXJyZW50SXRlbS5sYWJlbCB9XWAgKTtcblx0fVxuXHRpZiAoIGN1cnJlbnRJdGVtLnZhbHVlICkge1xuXHRcdHJpZ2h0UGFydC5wdXNoKCBgVmFsdWUgWyR7IGN1cnJlbnRJdGVtLnZhbHVlIH1dYCApO1xuXHR9XG5cdGlmICggY3VycmVudEl0ZW0uY2FsY3VsYXRlICkge1xuXHRcdHJpZ2h0UGFydC5wdXNoKCBgQ2FsY3VsYXRlIFskeyBjdXJyZW50SXRlbS5jYWxjdWxhdGUgfV1gICk7XG5cdH1cblx0bGVmdFBhcnQucHVzaCggcmlnaHRQYXJ0LmpvaW4oICcgfCAnICkgKTtcblxuXHRyZXR1cm4gbGVmdFBhcnQuam9pbiggJyAnICk7XG59O1xuXG5mdW5jdGlvbiBGcm9tTWFudWFsT3B0aW9uc0NvbnRleHRQcm92aWRlciggeyBjaGlsZHJlbiB9ICkge1xuXHRyZXR1cm4gPFJlcGVhdGVySGVhZENvbnRleHQuUHJvdmlkZXJcblx0XHR2YWx1ZT17IHtcblx0XHRcdGlzU3VwcG9ydGVkOiAoKSA9PiB0cnVlLFxuXHRcdFx0cmVuZGVyOiAoIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKSA9PiA8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXBlYXRlci1pdGVtLXRpdGxlXCI+eyBpdGVtSGVhZGluZygge1xuXHRcdFx0XHRjdXJyZW50SXRlbSwgaW5kZXgsXG5cdFx0XHR9ICkgfVxuXHRcdFx0PC9zcGFuPixcblx0XHR9IH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L1JlcGVhdGVySGVhZENvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9tTWFudWFsT3B0aW9uc0NvbnRleHRQcm92aWRlcjsiLCIvKipcbiAqIEBwYXJhbSBzb3VyY2Uge1N0cmluZ31cbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAqL1xuZnVuY3Rpb24gZnJvbUJ1bGsoIHNvdXJjZSApIHtcblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIHNvdXJjZSApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblx0bGV0IHJvd3MgPSBzb3VyY2UudHJpbSgpLnNwbGl0KCAnXFxuJyApO1xuXG5cdHJldHVybiByb3dzLm1hcCggZnJvbUJ1bGtSb3cgKS5maWx0ZXIoIEJvb2xlYW4gKTtcbn1cblxuZnVuY3Rpb24gZnJvbUJ1bGtSb3coIHNvdXJjZSApIHtcblx0aWYgKCAhc291cmNlLnRyaW0oKSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXHRjb25zdCBwYXJ0cyA9IHNvdXJjZS5zcGxpdCggJzonICk7XG5cblx0aWYgKCAhcGFydHMubGVuZ3RoICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGxldCBbIGxhYmVsLCB2YWx1ZSwgY2FsY3VsYXRlIF0gPSBwYXJ0cztcblxuXHRsYWJlbCA9IGxhYmVsLnRyaW0oKTtcblxuXHRpZiAoIDEgPT09IHBhcnRzLmxlbmd0aCApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fTtcblx0fVxuXG5cdHZhbHVlICAgICA9ICdmdW5jdGlvbicgPT09IHR5cGVvZiB2YWx1ZT8udHJpbVxuXHQgICAgICAgICAgICA/IHZhbHVlLnRyaW0oKVxuXHQgICAgICAgICAgICA6IGZhbHNlO1xuXHRjYWxjdWxhdGUgPSAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2FsY3VsYXRlPy50cmltXG5cdCAgICAgICAgICAgID8gY2FsY3VsYXRlLnRyaW0oKVxuXHQgICAgICAgICAgICA6IGZhbHNlO1xuXG5cdGNvbnN0IHJvdyA9IHt9O1xuXG5cdGlmICggbGFiZWwgKSB7XG5cdFx0cm93LmxhYmVsID0gbGFiZWw7XG5cdH1cblxuXHRpZiAoIHZhbHVlICkge1xuXHRcdHJvdy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0aWYgKCBjYWxjdWxhdGUgKSB7XG5cdFx0cm93LmNhbGN1bGF0ZSA9IGNhbGN1bGF0ZTtcblx0fVxuXG5cdHJldHVybiByb3c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZyb21CdWxrO1xuXG4iLCJjb25zdCB7XG5cdCAgICAgIGlzRW1wdHksXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCBKU09OX1BST1BFUlRJRVMgPSBbICdsYWJlbCcsICd2YWx1ZScsICdjYWxjdWxhdGUnIF07XG5cbmZ1bmN0aW9uIHRvQnVsayggc291cmNlICkge1xuXHRpZiAoIGlzRW1wdHkoIHNvdXJjZSApIHx8ICggdHlwZW9mICdzdHJpbmcnID09PSBzb3VyY2UgJiYgIXNvdXJjZS50cmltKCkgKSApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuXHRpZiAoICdvYmplY3QnID09PSB0eXBlb2Ygc291cmNlICkge1xuXHRcdHJldHVybiBhcnJheVRvQnVsayggc291cmNlICk7XG5cdH1cblxuXHRpZiAoICdzdHJpbmcnICE9PSB0eXBlb2Ygc291cmNlICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmICggIVsgJ1snLCAneycgXS5pbmNsdWRlcyggc291cmNlWyAwIF0gKSApIHtcblx0XHRyZXR1cm4gc291cmNlO1xuXHR9XG5cblx0bGV0IGpzb25CdWxrO1xuXG5cdHRyeSB7XG5cdFx0anNvbkJ1bGsgPSBKU09OLnBhcnNlKCBzb3VyY2UgKTtcblx0fVxuXHRjYXRjaCAoIGVycm9yICkge1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblxuXHRyZXR1cm4gYXJyYXlUb0J1bGsoIGpzb25CdWxrICk7XG59XG5cbmZ1bmN0aW9uIGFycmF5VG9CdWxrKCBzb3VyY2UgKSB7XG5cdGNvbnN0IHJvd3MgPSBbXTtcblxuXHRpZiAoICFBcnJheS5pc0FycmF5KCBzb3VyY2UgKSApIHtcblx0XHRyZXR1cm4gb2JqZWN0VG9CdWxrKCBzb3VyY2UgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHZhbEl0ZW0gb2Ygc291cmNlICkge1xuXHRcdHJvd3MucHVzaCggb2JqZWN0VG9CdWxrKCB2YWxJdGVtICkgKTtcblx0fVxuXG5cdHJldHVybiByb3dzLmpvaW4oICdcXG4nICk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdFRvQnVsayggc291cmNlICkge1xuXHRpZiAoICdvYmplY3QnICE9PSB0eXBlb2Ygc291cmNlICkge1xuXHRcdHJldHVybiBbICdudW1iZXInLCAnc3RyaW5nJyBdLmluY2x1ZGVzKFxuXHRcdFx0dHlwZW9mIHNvdXJjZSxcblx0XHQpID8gc291cmNlIDogJyc7XG5cdH1cblx0Y29uc3Qgcm93ID0gW107XG5cblx0Zm9yICggY29uc3QgcHJvcGVydHkgb2YgSlNPTl9QUk9QRVJUSUVTICkge1xuXHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBzb3VyY2VbIHByb3BlcnR5IF0gKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKCAhWyAnbnVtYmVyJywgJ3N0cmluZycgXS5pbmNsdWRlcyhcblx0XHRcdHR5cGVvZiBzb3VyY2VbIHByb3BlcnR5IF0sXG5cdFx0KSApIHtcblx0XHRcdHJvdy5wdXNoKCAwICk7XG5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyb3cucHVzaCggc291cmNlWyBwcm9wZXJ0eSBdICk7XG5cdH1cblxuXHRyZXR1cm4gcm93LmpvaW4oICcgOiAnICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvQnVsazsiLCJpbXBvcnQgeyBnZXRTZWxlY3RTb3VyY2UgfSBmcm9tIFwiLi9zb3VyY2VzXCI7XG5cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gRnJvbVBvc3RUZXJtc0ZpZWxkcyggcHJvcHMgKSB7XG5cblx0Y29uc3Qge1xuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0c2V0QXR0cmlidXRlcyxcblx0XHRlZGl0UHJvcHM6IHsgYXR0ckhlbHAgfVxuXHR9ID0gcHJvcHM7XG5cblx0cmV0dXJuIDw+XG5cdFx0eyBnZXRTZWxlY3RTb3VyY2UoIHByb3BzICkgfVxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0a2V5PSd2YWx1ZV9mcm9tX2tleSdcblx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZSBmcm9tIG1ldGEgZmllbGQnICkgfVxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZhbHVlX2Zyb21fa2V5IH1cblx0XHRcdGhlbHA9eyBhdHRySGVscCggJ3ZhbHVlX2Zyb21fbWV0YScgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgdmFsdWVfZnJvbV9rZXk6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRrZXk9J2NhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXknXG5cdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlZCB2YWx1ZSBmcm9tIG1ldGEgZmllbGQnICkgfVxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXkgfVxuXHRcdFx0aGVscD17IGF0dHJIZWxwKCAnY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleScgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleTogbmV3VmFsdWUgfSApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0PC8+O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb21Qb3N0VGVybXNGaWVsZHM7IiwiaW1wb3J0IHsgbGlzdEZyb20gfSBmcm9tICcuL3NvdXJjZXMnO1xuaW1wb3J0IEZyb21NYW51YWxGaWVsZHMgZnJvbSAnLi9Gcm9tTWFudWFsL0Zyb21NYW51YWxGaWVsZHMnO1xuaW1wb3J0IEZyb21Qb3N0VGVybXNGaWVsZHMgZnJvbSAnLi9Gcm9tUG9zdFRlcm1zRmllbGRzJztcbi8vIFVzZSBuZXcgR2VuZXJhdG9yU2V0dGluZ3MgY29tcG9uZW50IHdpdGggc2NoZW1hIHN1cHBvcnRcbmltcG9ydCB7IEdlbmVyYXRvclNldHRpbmdzIH0gZnJvbSAnLi4vZ2VuZXJhdG9ycyc7XG5cbmNvbnN0IHtcblx0ICAgICAgVGV4dENvbnRyb2wsXG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBqZXRFbmdpbmVWZXJzaW9uIH0gPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGE7XG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ICAgICA9IHdwLmhvb2tzO1xuXG5jb25zdCBjYW5SZW5kZXJHbG9zc2FyaWVzID0gJycgIT09IGpldEVuZ2luZVZlcnNpb247XG5cbmZ1bmN0aW9uIGdldEZpZWxkT3B0aW9uc0Zvcm0oIG9wdGlvbnNGcm9tLCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdHN3aXRjaCAoIG9wdGlvbnNGcm9tICkge1xuXHRcdGNhc2UgJ21hbnVhbF9pbnB1dCc6XG5cdFx0XHRyZXR1cm4gPEZyb21NYW51YWxGaWVsZHMga2V5PVwiZnJvbV9tYW51YWxcIi8+O1xuXHRcdGNhc2UgJ3Bvc3RzJzpcblx0XHRjYXNlICd0ZXJtcyc6XG5cdFx0XHRyZXR1cm4gPEZyb21Qb3N0VGVybXNGaWVsZHNcblx0XHRcdFx0a2V5PVwiZm9ybV9wb3N0c190ZXJtc1wiXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz47XG5cdFx0Y2FzZSAnbWV0YV9maWVsZCc6XG5cdFx0XHRyZXR1cm4gPFRleHRDb250cm9sXG5cdFx0XHRcdGtleT1cImZpZWxkX29wdGlvbnNfa2V5XCJcblx0XHRcdFx0bGFiZWw9XCJNZXRhIGZpZWxkIHRvIGdldCB2YWx1ZSBmcm9tXCJcblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfa2V5IH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRfb3B0aW9uc19rZXk6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPjtcblx0XHRjYXNlICdnZW5lcmF0ZSc6XG5cdFx0XHRyZXR1cm4gPEdlbmVyYXRvclNldHRpbmdzXG5cdFx0XHRcdGtleT1cImZvcm1fZ2VuZXJhdG9yc1wiXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz47XG5cdFx0Y2FzZSAnZ2xvc3NhcnknOlxuXHRcdFx0cmV0dXJuIGNhblJlbmRlckdsb3NzYXJpZXMgJiYgPFNlbGVjdENvbnRyb2xcblx0XHRcdFx0a2V5PVwic2VsZWN0X2dsb3NzYXJ5XCJcblx0XHRcdFx0bGFiZWw9XCJTZWxlY3QgR2xvc3NhcnlcIlxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwidG9wXCJcblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmdsb3NzYXJ5X2lkIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBnbG9zc2FyeV9pZCA9PiBzZXRBdHRyaWJ1dGVzKCB7IGdsb3NzYXJ5X2lkIH0gKSB9XG5cdFx0XHRcdG9wdGlvbnM9eyBbXG5cdFx0XHRcdFx0eyB2YWx1ZTogJycsIGxhYmVsOiAnLS0nIH0sXG5cdFx0XHRcdFx0Li4ud2luZG93LkpldEZvcm1PcHRpb25GaWVsZERhdGEuZ2xvc3Nhcmllc19saXN0LFxuXHRcdFx0XHRdIH1cblx0XHRcdC8+O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnNlbGVjdC5yYWRpby5jaGVjay5jb250cm9scycsIG51bGwsXG5cdFx0XHRcdG9wdGlvbnNGcm9tLCBwcm9wcyApO1xuXG5cdH1cbn1cblxuZnVuY3Rpb24gU2VsZWN0UmFkaW9DaGVjayggcHJvcHMgKSB7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0XHQgICAgICBpc1NlbGVjdGVkLFxuXHRcdCAgICAgIGNoaWxkcmVuID0gW10sXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRjb25zdCB7IGZpZWxkX29wdGlvbnNfZnJvbSB9ID0gYXR0cmlidXRlcztcblxuXHRyZXR1cm4gaXNTZWxlY3RlZCAmJiA8ZGl2IGNsYXNzTmFtZT1cImluc2lkZS1ibG9jay1vcHRpb25zXCI+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGtleT1cImZpZWxkX29wdGlvbnNfZnJvbVwiXG5cdFx0XHRsYWJlbD1cIkZpbGwgT3B0aW9ucyBGcm9tXCJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxuXHRcdFx0dmFsdWU9eyBmaWVsZF9vcHRpb25zX2Zyb20gfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkX29wdGlvbnNfZnJvbTogbmV3VmFsdWUgfSApO1xuXHRcdFx0fSB9XG5cdFx0XHRvcHRpb25zPXsgbGlzdEZyb20gfVxuXHRcdC8+XG5cdFx0eyBnZXRGaWVsZE9wdGlvbnNGb3JtKCBmaWVsZF9vcHRpb25zX2Zyb20sIHByb3BzICkgfVxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFJhZGlvQ2hlY2s7IiwiaW1wb3J0IHsgbGlzdEZyb20gfSBmcm9tICcuL3NvdXJjZXMnO1xuXG5jb25zdCB7XG5cdCAgICAgIEZpZWxkV3JhcHBlcixcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgQ2hlY2tib3hDb250cm9sLFxuXHQgICAgICBTZWxlY3RDb250cm9sLFxuXHQgICAgICBSYWRpb0NvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgREVMSU1JVEVSID0gJyAtICc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXIoIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBlZGl0UHJvcHM6IHsgYmxvY2tOYW1lLCB1bmlxS2V5IH0sXG5cdFx0ICAgICAgc2NyaXB0RGF0YSxcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgZ2V0Q2hlY2tib3ggPSAoIGxhYmVsLCBpbmRleCA9IDEgKSA9PiB7XG5cdFx0cmV0dXJuIDxDaGVja2JveENvbnRyb2xcblx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwIGNoZWNrYm94ZXMtd3JhcCcgfVxuXHRcdFx0a2V5PXsgYGNoZWNrX3BsYWNlX2hvbGRlcl9ibG9ja18keyBsYWJlbCArIGluZGV4IH1gIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHR9IH1cblx0XHQvPjtcblx0fTtcblxuXHRjb25zdCBnZXRTZWxlY3QgPSAoIHsgb3B0aW9ucywgaW5kZXggfSApID0+IHtcblx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcblx0XHRcdGtleT17IGBzZWxlY3RfcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGF0dHJpYnV0ZXMubmFtZSArIGluZGV4IH1gIH1cblx0XHRcdC8vbGFiZWw9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cblx0XHRcdG9wdGlvbnM9eyBvcHRpb25zIH1cblx0XHRcdC8vaGVscD17IGF0dHJpYnV0ZXMuZGVzYyB9XG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcblx0XHRcdH0gfVxuXHRcdC8+O1xuXHR9O1xuXG5cdGNvbnN0IGdldFJhZGlvID0gKCB7IG9wdGlvbnMsIGxhYmVsLCBpbmRleCB9ICkgPT4ge1xuXHRcdHJldHVybiA8UmFkaW9Db250cm9sXG5cdFx0XHRrZXk9eyBgcmFkaW9fcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGxhYmVsICsgaW5kZXggfWAgfVxuXHRcdFx0Ly9sYWJlbD17IGF0dHJpYnV0ZXMubGFiZWwgfVxuXHRcdFx0b3B0aW9ucz17IG9wdGlvbnMgfVxuXHRcdFx0Ly9oZWxwPXsgYXR0cmlidXRlcy5kZXNjIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xuXHRcdFx0fSB9XG5cdFx0Lz47XG5cdH07XG5cblx0Y29uc3QgZ2V0UHJvcCA9ICggb2YsIHByb3BOYW1lLCBpZkVtcHR5ID0gJycgKSA9PiB7XG5cdFx0aWYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG9mICYmICd1bmRlZmluZWQnICE9PVxuXHRcdFx0dHlwZW9mIG9mWyBwcm9wTmFtZSBdICkge1xuXHRcdFx0cmV0dXJuIG9mWyBwcm9wTmFtZSBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBpZkVtcHR5O1xuXHR9O1xuXG5cdGNvbnN0IGdldExhYmVsUHJvcCA9IG9mID0+IHtcblx0XHRyZXR1cm4gZ2V0UHJvcCggb2YsICdsYWJlbCcgKTtcblx0fTtcblxuXHRjb25zdCBnZXRGdWxsTGFiZWwgPSAoKSA9PiB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHQgICAgICBmaWVsZF9vcHRpb25zX2Zyb20sXG5cdFx0XHQgICAgICBmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZSxcblx0XHRcdCAgICAgIGZpZWxkX29wdGlvbnNfdGF4LFxuXHRcdFx0ICAgICAgZmllbGRfb3B0aW9uc19rZXksXG5cdFx0XHQgICAgICBnZW5lcmF0b3JfZnVuY3Rpb24sXG5cdFx0XHQgICAgICBnZW5lcmF0b3JfZmllbGQsXG5cdFx0ICAgICAgfSA9IGF0dHJpYnV0ZXM7XG5cblx0XHRsZXQgZnVsbF9sYWJlbCA9IFtdO1xuXHRcdGxldCB2YWx1ZSAgICAgID0gW107XG5cdFx0c3dpdGNoICggZmllbGRfb3B0aW9uc19mcm9tICkge1xuXHRcdFx0Y2FzZSAncG9zdHMnOlxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfcG9zdF90eXBlICkge1xuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdldExhYmVsUHJvcCggc2NyaXB0RGF0YS5wb3N0X3R5cGVzX2xpc3QuZmluZChcblx0XHRcdFx0XHRcdG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGZpZWxkX29wdGlvbnNfcG9zdF90eXBlLFxuXHRcdFx0XHRcdCkgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXJtcyc6XG5cdFx0XHRcdGlmICggZmllbGRfb3B0aW9uc190YXggKSB7XG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2V0TGFiZWxQcm9wKCBzY3JpcHREYXRhLnRheG9ub21pZXNfbGlzdC5maW5kKFxuXHRcdFx0XHRcdFx0b3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZmllbGRfb3B0aW9uc190YXgsXG5cdFx0XHRcdFx0KSApICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ21ldGFfZmllbGQnOlxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfa2V5ICkge1xuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGZpZWxkX29wdGlvbnNfa2V5ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2dlbmVyYXRlJzpcblx0XHRcdFx0aWYgKCBnZW5lcmF0b3JfZnVuY3Rpb24gKSB7XG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2V0TGFiZWxQcm9wKCBzY3JpcHREYXRhLmdlbmVyYXRvcnNfbGlzdC5maW5kKFxuXHRcdFx0XHRcdFx0b3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZ2VuZXJhdG9yX2Z1bmN0aW9uLFxuXHRcdFx0XHRcdCkgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZ2VuZXJhdG9yX2ZpZWxkICkge1xuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdlbmVyYXRvcl9maWVsZCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXHRcdGZ1bGxfbGFiZWwucHVzaCggZ2V0TGFiZWxQcm9wKFxuXHRcdFx0bGlzdEZyb20uZmluZCggb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZmllbGRfb3B0aW9uc19mcm9tICkgKSApO1xuXG5cdFx0aWYgKCB2YWx1ZS5sZW5ndGggKSB7XG5cdFx0XHRmdWxsX2xhYmVsLnB1c2goIHZhbHVlLmpvaW4oIERFTElNSVRFUiApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZ1bGxfbGFiZWwuam9pbiggREVMSU1JVEVSICk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TWFudWFsRmllbGQgPSAoIGxhYmVsID0gJycgKSA9PiB7XG5cdFx0aWYgKCBibG9ja05hbWUuaW5jbHVkZXMoICdjaGVja2JveCcgKSApIHtcblx0XHRcdGlmICggbGFiZWwgKSB7XG5cdFx0XHRcdHJldHVybiBnZXRDaGVja2JveCggbGFiZWwgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubWFwKFxuXHRcdFx0XHQoIHsgbGFiZWw6IGNoZWNrTGFiZWwgfSwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGdldENoZWNrYm94KCBjaGVja0xhYmVsLCBpbmRleCApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGJsb2NrTmFtZS5pbmNsdWRlcyggJ3NlbGVjdCcgKSApIHtcblx0XHRcdGlmICggbGFiZWwgKSB7XG5cdFx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdG9wdGlvbnM6IFsgeyBsYWJlbCB9IF0sXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcblx0XHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdFx0b3B0aW9uczogYXR0cmlidXRlcy5maWVsZF9vcHRpb25zLFxuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRlbHNlIGlmICggYmxvY2tOYW1lLmluY2x1ZGVzKCAncmFkaW8nICkgKSB7XG5cdFx0XHRpZiAoIGxhYmVsICkge1xuXHRcdFx0XHRyZXR1cm4gZ2V0UmFkaW8oIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdG9wdGlvbnM6IFsgeyBsYWJlbCB9IF0sXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBnZXRSYWRpbygge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHRvcHRpb25zOiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiA8RmllbGRXcmFwcGVyXG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItZmllbGQtd3JhcHBlcicgfVxuXHRcdHsgLi4ucHJvcHMgfVxuXHQ+XG5cdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGRzLWdyb3VwIGpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXByZXZpZXcnIH0+XG5cdFx0XHR7IChcblx0XHRcdFx0J21hbnVhbF9pbnB1dCcgIT09IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc19mcm9tIHx8XG5cdFx0XHRcdCFhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubGVuZ3RoXG5cdFx0XHQpICYmXG5cdFx0XHRnZXRNYW51YWxGaWVsZCggZ2V0RnVsbExhYmVsKCBzY3JpcHREYXRhLCBhdHRyaWJ1dGVzICkgKSB8fCBudWxsXG5cdFx0XHR9XG5cdFx0XHR7ICdtYW51YWxfaW5wdXQnID09PSBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfZnJvbSAmJlxuXHRcdFx0YXR0cmlidXRlcy5maWVsZF9vcHRpb25zLmxlbmd0aCAmJlxuXHRcdFx0Z2V0TWFudWFsRmllbGQoKSB8fCBudWxsXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdDwvRmllbGRXcmFwcGVyPjtcblxufVxuXG5cbiIsImNvbnN0IHsgX18gfSAgICAgICA9IHdwLmkxOG47XG5jb25zdCBsb2NhbGl6ZURhdGEgPSB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YTtcblxuY29uc3Qge1xuXHQgICAgICBTZWxlY3RDb250cm9sLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgamV0RW5naW5lVmVyc2lvbiB9ID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhO1xuXG5jb25zdCBsaXN0RnJvbSA9IFtcblx0e1xuXHRcdCd2YWx1ZSc6ICdtYW51YWxfaW5wdXQnLFxuXHRcdCdsYWJlbCc6IF9fKCAnTWFudWFsIElucHV0JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5cdHtcblx0XHQndmFsdWUnOiAncG9zdHMnLFxuXHRcdCdsYWJlbCc6IF9fKCAnUG9zdHMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0fSxcblx0e1xuXHRcdCd2YWx1ZSc6ICd0ZXJtcycsXG5cdFx0J2xhYmVsJzogX18oICdUZXJtcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR9LFxuXHR7XG5cdFx0J3ZhbHVlJzogJ21ldGFfZmllbGQnLFxuXHRcdCdsYWJlbCc6IF9fKCAnTWV0YSBGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR9LFxuXHR7XG5cdFx0J3ZhbHVlJzogJ2dlbmVyYXRlJyxcblx0XHQnbGFiZWwnOiBfXyggJ0dlbmVyYXRlIER5bmFtaWNhbGx5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5dO1xuXG5pZiAoICcnICE9PSBqZXRFbmdpbmVWZXJzaW9uICkge1xuXHRsaXN0RnJvbS5wdXNoKCB7XG5cdFx0J3ZhbHVlJzogJ2dsb3NzYXJ5Jyxcblx0XHQnbGFiZWwnOiBfXyggJ0dsb3NzYXJ5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0gKTtcbn1cblxuY29uc3Qgc291cmNlcyA9IHtcblx0dGVybXM6IHtcblx0XHRsYWJlbDogX18oICdUYXhvbm9teScgKSxcblx0XHRhdHRyOiAnZmllbGRfb3B0aW9uc190YXgnLFxuXHRcdG9wdGlvbnM6IGxvY2FsaXplRGF0YS50YXhvbm9taWVzX2xpc3QsXG5cdH0sXG5cdHBvc3RzOiB7XG5cdFx0bGFiZWw6IF9fKCAnUG9zdCBUeXBlJyApLFxuXHRcdGF0dHI6ICdmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZScsXG5cdFx0b3B0aW9uczogbG9jYWxpemVEYXRhLnBvc3RfdHlwZXNfbGlzdCxcblx0fSxcbn07XG5cbmNvbnN0IGdldFNlbGVjdFNvdXJjZSA9ICggcHJvcHMgKSA9PiB7XG5cdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgZmllbGRfb3B0aW9uc19mcm9tIH0gICAgICAgID0gYXR0cmlidXRlcztcblxuXHRpZiAoICFzb3VyY2VzWyBmaWVsZF9vcHRpb25zX2Zyb20gXSAmJiAhc291cmNlc1sgZmllbGRfb3B0aW9uc19mcm9tIF0gKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y29uc3Qgc291cmNlID0gc291cmNlc1sgZmllbGRfb3B0aW9uc19mcm9tIF07XG5cblx0cmV0dXJuIDxTZWxlY3RDb250cm9sXG5cdFx0bGFiZWw9eyBzb3VyY2UubGFiZWwgfVxuXHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxuXHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgc291cmNlLmF0dHIgXSB9XG5cdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IFsgc291cmNlLmF0dHIgXTogbmV3VmFsdWUgfSApO1xuXHRcdH0gfVxuXHRcdG9wdGlvbnM9eyBzb3VyY2Uub3B0aW9ucyB9XG5cdC8+O1xufTtcblxuZXhwb3J0IHsgZ2V0U2VsZWN0U291cmNlLCBsaXN0RnJvbSB9OyIsIi8qKlxuICogR2VuZXJhdG9yIFNldHRpbmdzIENvbXBvbmVudC5cbiAqXG4gKiBNYWluIGNvbXBvbmVudCBmb3IgcmVuZGVyaW5nIGdlbmVyYXRvciBjb25maWd1cmF0aW9uIFVJLlxuICogUmVwbGFjZXMgdGhlIG9sZCBGcm9tR2VuZXJhdG9yc0ZpZWxkcy5qcyB3aXRoIGFuIGV4dGVuc2libGUgU2xvdC9GaWxsIGFyY2hpdGVjdHVyZS5cbiAqXG4gKiBVc2VzIGdlbmVyYXRvcl9hcmdzIChvYmplY3QpIGF0dHJpYnV0ZSBmb3Igc3RvcmluZyBnZW5lcmF0b3Igc2V0dGluZ3MuXG4gKiBNYWludGFpbnMgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIGxlZ2FjeSBnZW5lcmF0b3JfZmllbGQgKHBpcGUtZGVsaW1pdGVkIHN0cmluZykuXG4gKlxuICogQHBhY2thZ2UgSmV0Rm9ybUJ1aWxkZXJcbiAqL1xuXG5jb25zdCB7IFNlbGVjdENvbnRyb2wsIFBhbmVsQm9keSwgTm90aWNlIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQge1xuXHRHZW5lcmF0b3JDb250cm9sc1Nsb3QsXG5cdEdlbmVyYXRvckFkZGl0aW9uYWxTbG90LFxuXHRCZWZvcmVHZW5lcmF0b3JTZWxlY3RvclNsb3QsXG5cdEFmdGVyR2VuZXJhdG9yQ29udHJvbHNTbG90LFxufSBmcm9tICcuL3Nsb3QtZmlsbCc7XG5cbmltcG9ydCB7IGdldEdlbmVyYXRvckNvbnRyb2xzIH0gZnJvbSAnLi9yZWdpc3RyeSc7XG5pbXBvcnQgeyBTY2hlbWFCYXNlZENvbnRyb2xzLCBOb1NjaGVtYU5vdGljZSB9IGZyb20gJy4vc2NoZW1hLXJlbmRlcmVyJztcbmltcG9ydCBMZWdhY3lDb250cm9scyBmcm9tICcuL2xlZ2FjeS1jb250cm9scyc7XG5pbXBvcnQgQXV0b1VwZGF0ZUNvbnRyb2xzIGZyb20gJy4vY29tcG9uZW50cy9BdXRvVXBkYXRlQ29udHJvbHMnO1xuXG4vKipcbiAqIExlZ2FjeSBnZW5lcmF0b3JzIHRoYXQgdXNlIHBpcGUtZGVsaW1pdGVkIGZvcm1hdCBmb3IgZ2VuZXJhdG9yX2ZpZWxkLlxuICogVXNlZCBmb3IgbWlncmF0aW5nIG9sZCBkYXRhIHRvIGdlbmVyYXRvcl9hcmdzLlxuICogRm9ybWF0OiBcImZpZWxkMXxmaWVsZDJ8ZmllbGQzfGZpZWxkNFwiXG4gKi9cbmNvbnN0IExFR0FDWV9QSVBFX0ZPUk1BVCA9IHtcblx0Z2V0X2Zyb21fcXVlcnk6ICAgICAgICAgICAgWyAncXVlcnlfaWQnLCAndmFsdWVfZmllbGQnLCAnbGFiZWxfZmllbGQnLCAnY2FsY19maWVsZCcgXSxcblx0Z2V0X2Zyb21fZmllbGQ6ICAgICAgICAgICAgWyAnZmllbGRfbmFtZScsICdzdWJfZmllbGQnIF0sXG5cdGdldF9mcm9tX2RiOiAgICAgICAgICAgICAgIFsgJ21ldGFfa2V5JyBdLFxuXHRudW1fcmFuZ2U6ICAgICAgICAgICAgICAgICBbICdtZXRhX2tleScgXSxcblx0Z2V0X2Zyb21fYm9va2luZ19zdGF0dXNlczogWyAnc3RhdHVzX2dyb3VwW10nIF0sXG59O1xuXG4vKipcbiAqIEdldCBnZW5lcmF0b3Igc2NoZW1hcyBmcm9tIGxvY2FsaXplZCBkYXRhLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gR2VuZXJhdG9yIHNjaGVtYXMga2V5ZWQgYnkgSUQuXG4gKi9cbmZ1bmN0aW9uIGdldEdlbmVyYXRvclNjaGVtYXMoKSB7XG5cdHJldHVybiB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YT8uZ2VuZXJhdG9yX3NjaGVtYXMgPz8ge307XG59XG5cbi8qKlxuICogR2V0IGdlbmVyYXRvcnMgbGlzdCBmb3Igc2VsZWN0IGNvbnRyb2wuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHsgdmFsdWUsIGxhYmVsIH0gb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZ2V0R2VuZXJhdG9yc0xpc3QoKSB7XG5cdHJldHVybiB3aW5kb3cuSmV0Rm9ybU9wdGlvbkZpZWxkRGF0YT8uZ2VuZXJhdG9yc19saXN0ID8/IFtdO1xufVxuXG4vKipcbiAqIFBhcnNlIGxlZ2FjeSBwaXBlLWRlbGltaXRlZCBnZW5lcmF0b3JfZmllbGQgaW50byBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkICAgIEdlbmVyYXRvciBJRC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JGaWVsZCBQaXBlLWRlbGltaXRlZCBzdHJpbmcuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBQYXJzZWQgdmFsdWVzIGFzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VMZWdhY3lQaXBlRm9ybWF0KCBnZW5lcmF0b3JJZCwgZ2VuZXJhdG9yRmllbGQgKSB7XG5cdGNvbnN0IGZpZWxkS2V5cyA9IExFR0FDWV9QSVBFX0ZPUk1BVFsgZ2VuZXJhdG9ySWQgXTtcblx0aWYgKCAhIGZpZWxkS2V5cyB8fCAhIGdlbmVyYXRvckZpZWxkICkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0IHBhcnRzID0gZ2VuZXJhdG9yRmllbGQuc3BsaXQoICd8JyApO1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblxuXHRmaWVsZEtleXMuZm9yRWFjaCggKCBrZXksIGluZGV4ICkgPT4ge1xuXHRcdC8vIEtleXMgZW5kaW5nIHdpdGggW10gY29sbGVjdCBhbGwgcmVtYWluaW5nIHBpcGUgcGFydHMgYXMgYXJyYXlcblx0XHRpZiAoIGtleS5lbmRzV2l0aCggJ1tdJyApICkge1xuXHRcdFx0Y29uc3QgcmVhbEtleSA9IGtleS5zbGljZSggMCwgLTIgKTtcblx0XHRcdGNvbnN0IGNvbGxlY3RlZCA9IHBhcnRzLnNsaWNlKCBpbmRleCApLmZpbHRlciggKCB2ICkgPT4gdiAhPT0gJycgKTtcblx0XHRcdGlmICggY29sbGVjdGVkLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdHJlc3VsdFsgcmVhbEtleSBdID0gY29sbGVjdGVkO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIHBhcnRzWyBpbmRleCBdICE9PSB1bmRlZmluZWQgJiYgcGFydHNbIGluZGV4IF0gIT09ICcnICkge1xuXHRcdFx0cmVzdWx0WyBrZXkgXSA9IHBhcnRzWyBpbmRleCBdO1xuXHRcdH1cblx0fSApO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogU2NoZW1hLWJhc2VkIGNvbnRyb2xzIHdpdGggZ2VuZXJhdG9yX2FyZ3Mgc3RvcmFnZS5cbiAqXG4gKiBXcmFwcyBTY2hlbWFCYXNlZENvbnRyb2xzIHRvIHNhdmUvcmVhZCBmcm9tIGdlbmVyYXRvcl9hcmdzIG9iamVjdCBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMgICAgICAgICAgICAgICBDb21wb25lbnQgcHJvcHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gICBwcm9wcy5nZW5lcmF0b3JJZCAgIEdlbmVyYXRvciBJRC5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLnNjaGVtYSAgICAgICAgR2VuZXJhdG9yIHNjaGVtYS5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLmF0dHJpYnV0ZXMgICAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLnNldEF0dHJpYnV0ZXMgU2V0IGF0dHJpYnV0ZXMgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IENvbnRyb2xzIHdpdGggZ2VuZXJhdG9yX2FyZ3Mgc3RvcmFnZS5cbiAqL1xuZnVuY3Rpb24gR2VuZXJhdG9yQXJnc0NvbnRyb2xzKCB7IGdlbmVyYXRvcklkLCBzY2hlbWEsIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSApIHtcblx0Ly8gR2V0IGN1cnJlbnQgZ2VuZXJhdG9yX2FyZ3Mgb3IgZW1wdHkgb2JqZWN0XG5cdGNvbnN0IGdlbmVyYXRvckFyZ3MgPSBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9hcmdzIHx8IHt9O1xuXG5cdC8vIENoZWNrIGZvciBsZWdhY3kgZGF0YSBtaWdyYXRpb24gb24gbW91bnRcblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0Ly8gSWYgZ2VuZXJhdG9yX2FyZ3MgaXMgZW1wdHkgYnV0IGdlbmVyYXRvcl9maWVsZCBoYXMgZGF0YSwgbWlncmF0ZSBpdFxuXHRcdGlmIChcblx0XHRcdE9iamVjdC5rZXlzKCBnZW5lcmF0b3JBcmdzICkubGVuZ3RoID09PSAwICYmXG5cdFx0XHRhdHRyaWJ1dGVzLmdlbmVyYXRvcl9maWVsZCAmJlxuXHRcdFx0TEVHQUNZX1BJUEVfRk9STUFUWyBnZW5lcmF0b3JJZCBdXG5cdFx0KSB7XG5cdFx0XHRjb25zdCBtaWdyYXRlZEFyZ3MgPSBwYXJzZUxlZ2FjeVBpcGVGb3JtYXQoIGdlbmVyYXRvcklkLCBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9maWVsZCApO1xuXG5cdFx0XHQvLyBMZWdhY3kgYmxvY2tzIHN0b3JlZCB0aGVzZSBpbiBzZXBhcmF0ZSBibG9jayBhdHRyaWJ1dGVzXG5cdFx0XHRpZiAoICEgbWlncmF0ZWRBcmdzLmNhbGNfZmllbGQgJiYgYXR0cmlidXRlcy5jYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5ICkge1xuXHRcdFx0XHRtaWdyYXRlZEFyZ3MuY2FsY19maWVsZCA9IGF0dHJpYnV0ZXMuY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBPYmplY3Qua2V5cyggbWlncmF0ZWRBcmdzICkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdGdlbmVyYXRvcl9hcmdzOiBtaWdyYXRlZEFyZ3MsXG5cdFx0XHRcdFx0Ly8gS2VlcCBnZW5lcmF0b3JfZmllbGQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBQSFBcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwgWyBnZW5lcmF0b3JJZCBdICk7IC8vIE9ubHkgcnVuIHdoZW4gZ2VuZXJhdG9yIGNoYW5nZXNcblxuXHQvLyBDcmVhdGUgd3JhcHBlZCBzZXRBdHRyaWJ1dGVzIHRoYXQgdXBkYXRlcyBnZW5lcmF0b3JfYXJnc1xuXHRjb25zdCBhcmdzU2V0QXR0cmlidXRlcyA9IHVzZUNhbGxiYWNrKFxuXHRcdCggbmV3QXR0cnMgKSA9PiB7XG5cdFx0XHRjb25zdCB1cGRhdGVzID0ge307XG5cdFx0XHRjb25zdCBuZXdBcmdzID0geyAuLi5nZW5lcmF0b3JBcmdzIH07XG5cdFx0XHRsZXQgaGFzQXJnVXBkYXRlcyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDaGVjayBmb3IgcHJlZml4ZWQgYXR0cmlidXRlcyAoZ2VuXzxpZD5fPGtleT4pIGFuZCBjb252ZXJ0IHRvIGdlbmVyYXRvcl9hcmdzXG5cdFx0XHRjb25zdCBwcmVmaXggPSBgZ2VuXyR7IGdlbmVyYXRvcklkIH1fYDtcblxuXHRcdFx0T2JqZWN0LmtleXMoIG5ld0F0dHJzICkuZm9yRWFjaCggKCBhdHRyS2V5ICkgPT4ge1xuXHRcdFx0XHRpZiAoIGF0dHJLZXkuc3RhcnRzV2l0aCggcHJlZml4ICkgKSB7XG5cdFx0XHRcdFx0Y29uc3QgZmllbGRLZXkgPSBhdHRyS2V5LnJlcGxhY2UoIHByZWZpeCwgJycgKTtcblx0XHRcdFx0XHRuZXdBcmdzWyBmaWVsZEtleSBdID0gbmV3QXR0cnNbIGF0dHJLZXkgXTtcblx0XHRcdFx0XHRoYXNBcmdVcGRhdGVzID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBQYXNzIHRocm91Z2ggbm9uLWdlbmVyYXRvciBhdHRyaWJ1dGVzXG5cdFx0XHRcdFx0dXBkYXRlc1sgYXR0cktleSBdID0gbmV3QXR0cnNbIGF0dHJLZXkgXTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHRpZiAoIGhhc0FyZ1VwZGF0ZXMgKSB7XG5cdFx0XHRcdHVwZGF0ZXMuZ2VuZXJhdG9yX2FyZ3MgPSBuZXdBcmdzO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB1cGRhdGVzICk7XG5cdFx0fSxcblx0XHRbIHNldEF0dHJpYnV0ZXMsIGdlbmVyYXRvckFyZ3MsIGdlbmVyYXRvcklkIF1cblx0KTtcblxuXHQvLyBDcmVhdGUgdmlydHVhbCBhdHRyaWJ1dGVzIHdpdGggdmFsdWVzIGZyb20gZ2VuZXJhdG9yX2FyZ3MgZm9yIFNjaGVtYUJhc2VkQ29udHJvbHNcblx0Y29uc3QgdmlydHVhbEF0dHJpYnV0ZXMgPSB1c2VNZW1vKCAoKSA9PiB7XG5cdFx0Y29uc3QgdmlydHVhbCA9IHsgLi4uYXR0cmlidXRlcyB9O1xuXHRcdGNvbnN0IHByZWZpeCA9IGBnZW5fJHsgZ2VuZXJhdG9ySWQgfV9gO1xuXG5cdFx0Ly8gTWFwIGdlbmVyYXRvcl9hcmdzIHZhbHVlcyB0byBwcmVmaXhlZCBhdHRyaWJ1dGVzXG5cdFx0T2JqZWN0LmtleXMoIGdlbmVyYXRvckFyZ3MgKS5mb3JFYWNoKCAoIGtleSApID0+IHtcblx0XHRcdHZpcnR1YWxbIHByZWZpeCArIGtleSBdID0gZ2VuZXJhdG9yQXJnc1sga2V5IF07XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHZpcnR1YWw7XG5cdH0sIFsgYXR0cmlidXRlcywgZ2VuZXJhdG9yQXJncywgZ2VuZXJhdG9ySWQgXSApO1xuXG5cdHJldHVybiAoXG5cdFx0PFNjaGVtYUJhc2VkQ29udHJvbHNcblx0XHRcdGdlbmVyYXRvcklkPXsgZ2VuZXJhdG9ySWQgfVxuXHRcdFx0c2NoZW1hPXsgc2NoZW1hIH1cblx0XHRcdGF0dHJpYnV0ZXM9eyB2aXJ0dWFsQXR0cmlidXRlcyB9XG5cdFx0XHRzZXRBdHRyaWJ1dGVzPXsgYXJnc1NldEF0dHJpYnV0ZXMgfVxuXHRcdC8+XG5cdCk7XG59XG5cbi8qKlxuICogTWFpbiBHZW5lcmF0b3IgU2V0dGluZ3MgQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzICAgICAgICAgICAgICAgQ29tcG9uZW50IHByb3BzLlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMuYXR0cmlidXRlcyAgICBCbG9jayBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMuc2V0QXR0cmlidXRlcyBGdW5jdGlvbiB0byB1cGRhdGUgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLmVkaXRQcm9wcyAgICAgQWRkaXRpb25hbCBlZGl0IHByb3BzIChhdHRySGVscCwgZXRjLikuXG4gKlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IEdlbmVyYXRvciBzZXR0aW5ncyBVSS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRvclNldHRpbmdzKCBwcm9wcyApIHtcblx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBlZGl0UHJvcHMgPSB7fSB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgZ2VuZXJhdG9yX2Z1bmN0aW9uOiBnZW5lcmF0b3JJZCB9ID0gYXR0cmlidXRlcztcblxuXHRjb25zdCBbIGVycm9ycywgc2V0RXJyb3JzIF0gPSB1c2VTdGF0ZSgge30gKTtcblxuXHRjb25zdCBzY2hlbWFzID0gZ2V0R2VuZXJhdG9yU2NoZW1hcygpO1xuXHRjb25zdCBnZW5lcmF0b3JzTGlzdCA9IGdldEdlbmVyYXRvcnNMaXN0KCk7XG5cblx0Y29uc3QgZ2VuZXJhdG9yRGF0YSA9IHNjaGVtYXNbIGdlbmVyYXRvcklkIF0gPz8ge307XG5cdGNvbnN0IGN1cnJlbnRTY2hlbWEgPSBnZW5lcmF0b3JEYXRhLnNjaGVtYSA/PyB7fTtcblx0Y29uc3Qgc3VwcG9ydHNVcGRhdGUgPSBnZW5lcmF0b3JEYXRhLnN1cHBvcnRzX3VwZGF0ZSA/PyBmYWxzZTtcblx0Y29uc3QgaXNMZWdhY3lHZW5lcmF0b3IgPSBnZW5lcmF0b3JEYXRhLmxlZ2FjeSA9PT0gdHJ1ZTtcblxuXHRjb25zdCBDdXN0b21Db250cm9scyA9IGdldEdlbmVyYXRvckNvbnRyb2xzKCBnZW5lcmF0b3JJZCApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNldEVycm9ycygge30gKTtcblx0fSwgWyBnZW5lcmF0b3JJZCBdICk7XG5cblx0Y29uc3QgZmlsbFByb3BzID0ge1xuXHRcdC4uLnByb3BzLFxuXHRcdGdlbmVyYXRvcklkLFxuXHRcdHNjaGVtYTogY3VycmVudFNjaGVtYSxcblx0XHRlcnJvcnMsXG5cdFx0c2V0RXJyb3JzLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGUgZ2VuZXJhdG9yIGNoYW5nZSAtIGNsZWFyIG9sZCBzZXR0aW5ncy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5ld0dlbmVyYXRvcklkIE5ldyBnZW5lcmF0b3IgSUQuXG5cdCAqL1xuXHRjb25zdCBoYW5kbGVHZW5lcmF0b3JDaGFuZ2UgPSAoIG5ld0dlbmVyYXRvcklkICkgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdGdlbmVyYXRvcl9mdW5jdGlvbjogbmV3R2VuZXJhdG9ySWQsXG5cdFx0XHRnZW5lcmF0b3JfYXJnczoge30sIC8vIENsZWFyIGFyZ3Mgd2hlbiBjaGFuZ2luZyBnZW5lcmF0b3Jcblx0XHRcdGdlbmVyYXRvcl9maWVsZDogJycsIC8vIENsZWFyIGxlZ2FjeSBmaWVsZCB0b29cblx0XHR9ICk7XG5cdFx0c2V0RXJyb3JzKCB7fSApO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEJlZm9yZUdlbmVyYXRvclNlbGVjdG9yU2xvdCBmaWxsUHJvcHM9eyBmaWxsUHJvcHMgfSAvPlxuXG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnR2VuZXJhdG9yIEZ1bmN0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHR2YWx1ZT17IGdlbmVyYXRvcklkIHx8ICcnIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBoYW5kbGVHZW5lcmF0b3JDaGFuZ2UgfVxuXHRcdFx0XHRvcHRpb25zPXsgZ2VuZXJhdG9yc0xpc3QgfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJqZmItZ2VuZXJhdG9yLXNlbGVjdG9yXCJcblx0XHRcdC8+XG5cblx0XHRcdHsgZ2VuZXJhdG9ySWQgJiYgKFxuXHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0eyAvKiBQcmlvcml0eSAxOiBDdXN0b20gcmVnaXN0ZXJlZCBjb250cm9scyAqLyB9XG5cdFx0XHRcdFx0eyBDdXN0b21Db250cm9scyAmJiAoXG5cdFx0XHRcdFx0XHQ8Q3VzdG9tQ29udHJvbHNcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlcz17IGF0dHJpYnV0ZXMgfVxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzPXsgc2V0QXR0cmlidXRlcyB9XG5cdFx0XHRcdFx0XHRcdHNjaGVtYT17IGN1cnJlbnRTY2hlbWEgfVxuXHRcdFx0XHRcdFx0XHRnZW5lcmF0b3JJZD17IGdlbmVyYXRvcklkIH1cblx0XHRcdFx0XHRcdFx0ZWRpdFByb3BzPXsgZWRpdFByb3BzIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0XHR7IC8qIFByaW9yaXR5IDI6IFNjaGVtYS1iYXNlZCBjb250cm9scyB3aXRoIGdlbmVyYXRvcl9hcmdzIHN0b3JhZ2UgKi8gfVxuXHRcdFx0XHRcdHsgISBDdXN0b21Db250cm9scyAmJiAhIGlzTGVnYWN5R2VuZXJhdG9yICYmIE9iamVjdC5rZXlzKCBjdXJyZW50U2NoZW1hICkubGVuZ3RoID4gMCAmJiAoXG5cdFx0XHRcdFx0XHQ8R2VuZXJhdG9yQXJnc0NvbnRyb2xzXG5cdFx0XHRcdFx0XHRcdGdlbmVyYXRvcklkPXsgZ2VuZXJhdG9ySWQgfVxuXHRcdFx0XHRcdFx0XHRzY2hlbWE9eyBjdXJyZW50U2NoZW1hIH1cblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlcz17IGF0dHJpYnV0ZXMgfVxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzPXsgc2V0QXR0cmlidXRlcyB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdFx0eyAvKiBQcmlvcml0eSAzOiBMZWdhY3kgY29udHJvbHMgZmFsbGJhY2sgKi8gfVxuXHRcdFx0XHRcdHsgISBDdXN0b21Db250cm9scyAmJiBpc0xlZ2FjeUdlbmVyYXRvciAmJiAoXG5cdFx0XHRcdFx0XHQ8TGVnYWN5Q29udHJvbHNcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlcz17IGF0dHJpYnV0ZXMgfVxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzPXsgc2V0QXR0cmlidXRlcyB9XG5cdFx0XHRcdFx0XHRcdGVkaXRQcm9wcz17IGVkaXRQcm9wcyB9XG5cdFx0XHRcdFx0XHRcdGdlbmVyYXRvcklkPXsgZ2VuZXJhdG9ySWQgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIH1cblxuXHRcdFx0XHRcdHsgLyogTm8gc2NoZW1hIG5vdGljZSAqLyB9XG5cdFx0XHRcdFx0eyAhIEN1c3RvbUNvbnRyb2xzICYmICEgaXNMZWdhY3lHZW5lcmF0b3IgJiYgT2JqZWN0LmtleXMoIGN1cnJlbnRTY2hlbWEgKS5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHRcdFx0PE5vU2NoZW1hTm90aWNlXG5cdFx0XHRcdFx0XHRcdGdlbmVyYXRvcklkPXsgZ2VuZXJhdG9ySWQgfVxuXHRcdFx0XHRcdFx0XHRnZW5lcmF0b3JOYW1lPXsgZ2VuZXJhdG9yRGF0YS5uYW1lIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSB9XG5cblx0XHRcdFx0XHQ8R2VuZXJhdG9yQ29udHJvbHNTbG90IGZpbGxQcm9wcz17IGZpbGxQcm9wcyB9IC8+XG5cdFx0XHRcdFx0PEdlbmVyYXRvckFkZGl0aW9uYWxTbG90IGZpbGxQcm9wcz17IGZpbGxQcm9wcyB9IC8+XG5cblx0XHRcdFx0XHQ8QXV0b1VwZGF0ZUNvbnRyb2xzXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzPXsgc2V0QXR0cmlidXRlcyB9XG5cdFx0XHRcdFx0XHRzdXBwb3J0c1VwZGF0ZT17IHN1cHBvcnRzVXBkYXRlIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0KSB9XG5cblx0XHRcdDxBZnRlckdlbmVyYXRvckNvbnRyb2xzU2xvdCBmaWxsUHJvcHM9eyBmaWxsUHJvcHMgfSAvPlxuXG5cdFx0XHR7IE9iamVjdC5rZXlzKCBlcnJvcnMgKS5sZW5ndGggPiAwICYmIChcblx0XHRcdFx0PE5vdGljZSBzdGF0dXM9XCJlcnJvclwiIGlzRGlzbWlzc2libGU9eyBmYWxzZSB9IGNsYXNzTmFtZT1cImpmYi1nZW5lcmF0b3ItZXJyb3JzXCI+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0eyBPYmplY3QuZW50cmllcyggZXJyb3JzICkubWFwKCAoIFsgZmllbGQsIG1lc3NhZ2UgXSApID0+IChcblx0XHRcdFx0XHRcdFx0PGxpIGtleT17IGZpZWxkIH0+XG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz57IGZpZWxkIH06PC9zdHJvbmc+IHsgbWVzc2FnZSB9XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQpICkgfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvTm90aWNlPlxuXHRcdFx0KSB9XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuLyoqXG4gKiBXcmFwcGVyIGNvbXBvbmVudCB0aGF0IGluY2x1ZGVzIFBhbmVsQm9keS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgQ29tcG9uZW50IHByb3BzIChzYW1lIGFzIEdlbmVyYXRvclNldHRpbmdzKS5cbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gUGFuZWwgd2l0aCBnZW5lcmF0b3Igc2V0dGluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBHZW5lcmF0b3JTZXR0aW5nc1BhbmVsKCBwcm9wcyApIHtcblx0Y29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBwcm9wcztcblx0Y29uc3QgeyBnZW5lcmF0b3JfZnVuY3Rpb246IGdlbmVyYXRvcklkIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhbmVsQm9keVxuXHRcdFx0dGl0bGU9eyBfXyggJ0dlbmVyYXRlIE9wdGlvbnMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRpbml0aWFsT3Blbj17ICEhIGdlbmVyYXRvcklkIH1cblx0XHRcdGNsYXNzTmFtZT1cImpmYi1nZW5lcmF0b3Itc2V0dGluZ3MtcGFuZWxcIlxuXHRcdD5cblx0XHRcdDxHZW5lcmF0b3JTZXR0aW5ncyB7IC4uLnByb3BzIH0gLz5cblx0XHQ8L1BhbmVsQm9keT5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdG9yU2V0dGluZ3M7XG4iLCIvKipcbiAqIEF1dG8tVXBkYXRlIENvbnRyb2xzIENvbXBvbmVudC5cbiAqXG4gKiBSZW5kZXJzIGNvbnRyb2xzIGZvciBlbmFibGluZyBjYXNjYWRpbmcvYXV0by11cGRhdGUgYmVoYXZpb3Igd2hlbiBhIGdlbmVyYXRvclxuICogc3VwcG9ydHMgZHluYW1pYyB1cGRhdGVzIGJhc2VkIG9uIG90aGVyIGZpZWxkIHZhbHVlcy5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCwgU2VsZWN0Q29udHJvbCwgVGV4dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBGcmFnbWVudCwgdXNlTWVtbyB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgc2VsZWN0IH0gPSB3cC5kYXRhO1xuXG4vKipcbiAqIEdldCBmb3JtIGZpZWxkcyBmcm9tIGJsb2NrIGVkaXRvci5cbiAqIEV4dHJhY3RzIGZpZWxkIG5hbWUgYW5kIGxhYmVsIGZyb20gYWxsIGZpZWxkIGJsb2NrcyBpbiB0aGUgY3VycmVudCBmb3JtLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiB7IG5hbWUsIGxhYmVsIH0gb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gZ2V0Rm9ybUZpZWxkcygpIHtcblx0Y29uc3QgYmxvY2tzID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICk/LmdldEJsb2NrcygpID8/IFtdO1xuXHRjb25zdCBmaWVsZHMgPSBbXTtcblxuXHRjb25zdCBleHRyYWN0RmllbGRzID0gKCBibG9ja3NMaXN0ICkgPT4ge1xuXHRcdGJsb2Nrc0xpc3QuZm9yRWFjaCggKCBibG9jayApID0+IHtcblx0XHRcdC8vIENoZWNrIGlmIGJsb2NrIGhhcyBhICduYW1lJyBhdHRyaWJ1dGUgKGl0J3MgYSBmaWVsZClcblx0XHRcdGlmICggYmxvY2suYXR0cmlidXRlcz8ubmFtZSApIHtcblx0XHRcdFx0ZmllbGRzLnB1c2goIHtcblx0XHRcdFx0XHRuYW1lOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdFx0bGFiZWw6IGJsb2NrLmF0dHJpYnV0ZXMubGFiZWwgfHwgYmxvY2suYXR0cmlidXRlcy5uYW1lLFxuXHRcdFx0XHRcdHR5cGU6IGJsb2NrLm5hbWUsXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVjdXJzaXZlbHkgY2hlY2sgaW5uZXIgYmxvY2tzXG5cdFx0XHRpZiAoIGJsb2NrLmlubmVyQmxvY2tzPy5sZW5ndGggKSB7XG5cdFx0XHRcdGV4dHJhY3RGaWVsZHMoIGJsb2NrLmlubmVyQmxvY2tzICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdGV4dHJhY3RGaWVsZHMoIGJsb2NrcyApO1xuXHRyZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIEF1dG8tVXBkYXRlIENvbnRyb2xzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzICAgICAgICAgICAgICAgQ29tcG9uZW50IHByb3BzLlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMuYXR0cmlidXRlcyAgICBCbG9jayBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMuc2V0QXR0cmlidXRlcyBGdW5jdGlvbiB0byB1cGRhdGUgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gIHByb3BzLnN1cHBvcnRzVXBkYXRlIFdoZXRoZXIgZ2VuZXJhdG9yIHN1cHBvcnRzIGF1dG8tdXBkYXRlLlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fG51bGx9IENvbnRyb2xzIG9yIG51bGwgaWYgbm90IHN1cHBvcnRlZC5cbiAqL1xuZnVuY3Rpb24gQXV0b1VwZGF0ZUNvbnRyb2xzKCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIHN1cHBvcnRzVXBkYXRlIH0gKSB7XG5cdGlmICggISBzdXBwb3J0c1VwZGF0ZSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtcblx0XHRnZW5lcmF0b3JfYXV0b191cGRhdGU6IGF1dG9VcGRhdGUgPSBmYWxzZSxcblx0XHRnZW5lcmF0b3JfbGlzdGVuX2ZpZWxkOiBsaXN0ZW5GaWVsZCA9ICcnLFxuXHRcdGdlbmVyYXRvcl9jYWNoZV90aW1lb3V0OiBjYWNoZVRpbWVvdXQgPSA2MCxcblx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0Ly8gTm9ybWFsaXplIGxpc3Rlbl9maWVsZCB0byBhcnJheSBmb3IgY29uc2lzdGVudCBoYW5kbGluZ1xuXHRjb25zdCBsaXN0ZW5GaWVsZEFycmF5ID0gQXJyYXkuaXNBcnJheSggbGlzdGVuRmllbGQgKVxuXHRcdD8gbGlzdGVuRmllbGRcblx0XHQ6ICggbGlzdGVuRmllbGQgPyBbIGxpc3RlbkZpZWxkIF0gOiBbXSApO1xuXG5cdC8vIEdldCBhdmFpbGFibGUgZm9ybSBmaWVsZHMgZm9yIGxpc3RlbmluZ1xuXHQvLyB1c2VNZW1vIHRvIGF2b2lkIHJlY2FsY3VsYXRpbmcgb24gZXZlcnkgcmVuZGVyXG5cdGNvbnN0IGZpZWxkT3B0aW9ucyA9IHVzZU1lbW8oICgpID0+IHtcblx0XHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkcygpO1xuXG5cdFx0cmV0dXJuIGZvcm1GaWVsZHMubWFwKCAoIGZpZWxkICkgPT4gKCB7XG5cdFx0XHR2YWx1ZTogZmllbGQubmFtZSxcblx0XHRcdGxhYmVsOiBgJHsgZmllbGQubGFiZWwgfSAoJHsgZmllbGQubmFtZSB9KWAsXG5cdFx0fSApICk7XG5cdH0sIFtdICk7IC8vIEVtcHR5IGRlcHMgLSB3aWxsIGJlIGNhbGN1bGF0ZWQgb25jZSBvbiBtb3VudFxuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBBdXRvLVVwZGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0aGVscD17IF9fKFxuXHRcdFx0XHRcdCdVcGRhdGUgb3B0aW9ucyBkeW5hbWljYWxseSB3aGVuIGFub3RoZXIgZmllbGQgdmFsdWUgY2hhbmdlcy4nLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHQpIH1cblx0XHRcdFx0Y2hlY2tlZD17IGF1dG9VcGRhdGUgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0Z2VuZXJhdG9yX2F1dG9fdXBkYXRlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdC8vIENsZWFyIGxpc3RlbiBmaWVsZCBpZiBkaXNhYmxpbmdcblx0XHRcdFx0XHRcdC4uLiggISB2YWx1ZSAmJiB7IGdlbmVyYXRvcl9saXN0ZW5fZmllbGQ6ICcnIH0gKSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJqZmItYXV0by11cGRhdGUtdG9nZ2xlXCJcblx0XHRcdC8+XG5cblx0XHRcdHsgYXV0b1VwZGF0ZSAmJiAoXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0xpc3RlbiB0byBGaWVsZHMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0aGVscD17IF9fKFxuXHRcdFx0XHRcdFx0J1NlbGVjdCBvbmUgb3IgbW9yZSBmaWVsZHMgdG8gd2F0Y2ggZm9yIGNoYW5nZXMuJyxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdFx0dmFsdWU9eyBsaXN0ZW5GaWVsZEFycmF5IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWVzICkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGVtcHR5IHNlbGVjdGlvblxuXHRcdFx0XHRcdFx0aWYgKCAhIHZhbHVlcyB8fCB2YWx1ZXMubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9saXN0ZW5fZmllbGQ6ICcnIH0gKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBTdG9yZSBhcyBzdHJpbmcgaWYgc2luZ2xlLCBhcnJheSBpZiBtdWx0aXBsZSAoYmFja3dhcmRzIGNvbXBhdClcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0Z2VuZXJhdG9yX2xpc3Rlbl9maWVsZDogdmFsdWVzLmxlbmd0aCA9PT0gMSA/IHZhbHVlc1sgMCBdIDogdmFsdWVzLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyBmaWVsZE9wdGlvbnMgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1hdXRvLXVwZGF0ZS1maWVsZC1zZWxlY3RvclwiXG5cdFx0XHRcdC8+XG5cdFx0XHQpIH1cblxuXHRcdHsgYXV0b1VwZGF0ZSAmJiAoXG5cdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhY2hlIFRpbWVvdXQgKHNlY29uZHMpJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdFx0J0hvdyBsb25nIHRvIGNhY2hlIHJlc3VsdHMuIFNldCB0byAwIHRvIGRpc2FibGUgY2FjaGluZy4nLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHQpIH1cblx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHR2YWx1ZT17IGNhY2hlVGltZW91dCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRnZW5lcmF0b3JfY2FjaGVfdGltZW91dDogcGFyc2VJbnQoIHZhbHVlICkgfHwgMCxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHQpIH1cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRvVXBkYXRlQ29udHJvbHM7XG4iLCIvKipcbiAqIEdlbmVyYXRvciBVSSBJbmZyYXN0cnVjdHVyZS5cbiAqXG4gKiBNYWluIGVudHJ5IHBvaW50IGZvciB0aGUgZ2VuZXJhdG9yIHNldHRpbmdzIHN5c3RlbS5cbiAqIEV4cG9ydHMgYWxsIGNvbXBvbmVudHMsIHV0aWxpdGllcywgYW5kIHRoZSBTbG90L0ZpbGwgc3lzdGVtLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuLy8gU2xvdC9GaWxsIHN5c3RlbSBmb3IgZXh0ZW5zaWJpbGl0eVxuZXhwb3J0IHtcblx0R2VuZXJhdG9yQ29udHJvbHNGaWxsLFxuXHRHZW5lcmF0b3JDb250cm9sc1Nsb3QsXG5cdEdlbmVyYXRvckFkZGl0aW9uYWxGaWxsLFxuXHRHZW5lcmF0b3JBZGRpdGlvbmFsU2xvdCxcblx0QXV0b1VwZGF0ZUNvbnRyb2xzRmlsbCxcblx0QXV0b1VwZGF0ZUNvbnRyb2xzU2xvdCxcblx0QmVmb3JlR2VuZXJhdG9yU2VsZWN0b3JGaWxsLFxuXHRCZWZvcmVHZW5lcmF0b3JTZWxlY3RvclNsb3QsXG5cdEFmdGVyR2VuZXJhdG9yQ29udHJvbHNGaWxsLFxuXHRBZnRlckdlbmVyYXRvckNvbnRyb2xzU2xvdCxcbn0gZnJvbSAnLi9zbG90LWZpbGwnO1xuXG4vLyBSZWdpc3RyeSBmb3IgY3VzdG9tIGNvbnRyb2xzXG5leHBvcnQge1xuXHRyZWdpc3RlckdlbmVyYXRvckNvbnRyb2xzLFxuXHR1bnJlZ2lzdGVyR2VuZXJhdG9yQ29udHJvbHMsXG5cdGdldEdlbmVyYXRvckNvbnRyb2xzLFxuXHRoYXNDdXN0b21Db250cm9scyxcblx0Z2V0UmVnaXN0ZXJlZEdlbmVyYXRvcklkcyxcblx0cmVnaXN0ZXJHZW5lcmF0b3JWYWxpZGF0b3IsXG5cdGdldEdlbmVyYXRvclZhbGlkYXRvcixcblx0dmFsaWRhdGVHZW5lcmF0b3JTZXR0aW5ncyxcblx0cmVnaXN0ZXJHZW5lcmF0b3JNZXRhLFxuXHRnZXRHZW5lcmF0b3JNZXRhLFxuXHRnZXRBdHRyaWJ1dGVOYW1lLFxuXHRwYXJzZVNldHRpbmdzRnJvbUF0dHJpYnV0ZXMsXG5cdGNyZWF0ZUdlbmVyYXRvclNldEF0dHJpYnV0ZXMsXG59IGZyb20gJy4vcmVnaXN0cnknO1xuXG4vLyBTY2hlbWEtYmFzZWQgY29udHJvbCByZW5kZXJlclxuZXhwb3J0IHtcblx0U2NoZW1hQmFzZWRDb250cm9scyxcblx0Tm9TY2hlbWFOb3RpY2UsXG5cdHZhbGlkYXRlQWdhaW5zdFNjaGVtYSxcbn0gZnJvbSAnLi9zY2hlbWEtcmVuZGVyZXInO1xuXG4vLyBNYWluIHNldHRpbmdzIGNvbXBvbmVudFxuZXhwb3J0IHtcblx0R2VuZXJhdG9yU2V0dGluZ3MsXG5cdEdlbmVyYXRvclNldHRpbmdzUGFuZWwsXG59IGZyb20gJy4vR2VuZXJhdG9yU2V0dGluZ3MnO1xuXG4vLyBMZWdhY3kgY29udHJvbHMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbmV4cG9ydCB7XG5cdExlZ2FjeUNvbnRyb2xzLFxuXHRnZXRMZWdhY3lGaWVsZFZhbHVlLFxuXHRoYXNMZWdhY3lGb3JtYXQsXG5cdHBhcnNlTGVnYWN5Rm9ybWF0LFxuXHRtaWdyYXRlTGVnYWN5QXR0cmlidXRlcyxcbn0gZnJvbSAnLi9sZWdhY3ktY29udHJvbHMnO1xuIiwiLyoqXG4gKiBMZWdhY3kgQ29udHJvbHMgQ29tcG9uZW50LlxuICpcbiAqIFByb3ZpZGVzIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgZm9yIGdlbmVyYXRvcnMgdGhhdCBkb24ndCBoYXZlXG4gKiBuZXcgc2NoZW1hIGRlZmluaXRpb25zLiBSZW5kZXJzIHRoZSBvbGQtc3R5bGUgXCJGaWVsZCBOYW1lXCIgaW5wdXRcbiAqIGFuZCBhcHBsaWVzIGV4aXN0aW5nIGZpbHRlciBob29rcy5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG5cdEJhc2VDb250cm9sLFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcbmNvbnN0IHsgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbi8vIEhhbmRsZSBOdW1iZXJDb250cm9sIGF2YWlsYWJpbGl0eVxubGV0IE51bWJlckNvbnRyb2wgPSB3cC5jb21wb25lbnRzLk51bWJlckNvbnRyb2w7XG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcbn1cblxuLyoqXG4gKiBOdW1iZXIgUmFuZ2UgTWFudWFsIENvbnRyb2xzLlxuICpcbiAqIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRoZSBudW1fcmFuZ2VfbWFudWFsIGdlbmVyYXRvciB3aGljaCBoYXNcbiAqIGRlZGljYXRlZCBudW1lcmljIGlucHV0cy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcyAgICAgICAgICAgICAgIENvbXBvbmVudCBwcm9wcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLmF0dHJpYnV0ZXMgICAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLnNldEF0dHJpYnV0ZXMgU2V0IGF0dHJpYnV0ZXMgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IE51bWJlciByYW5nZSBjb250cm9scy5cbiAqL1xuZnVuY3Rpb24gTnVtUmFuZ2VNYW51YWxDb250cm9scyggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEJhc2VDb250cm9sIGxhYmVsPXsgX18oICdTdGFydCBvZiByYW5nZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInRvcFwiXG5cdFx0XHRcdFx0c3RlcD17IDAuMDEgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nZW5lcmF0b3JfbnVtYmVyc19taW4gfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZ2VuZXJhdG9yX251bWJlcnNfbWluOiBOdW1iZXIoIG5ld1ZhbHVlICkgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdFx0PEJhc2VDb250cm9sIGxhYmVsPXsgX18oICdFbmQgb2YgcmFuZ2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxuXHRcdFx0XHRcdHN0ZXA9eyAwLjAxIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX251bWJlcnNfbWF4IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9udW1iZXJzX21heDogTnVtYmVyKCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cblx0XHRcdDxCYXNlQ29udHJvbCBsYWJlbD17IF9fKCAnU3RlcCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInRvcFwiXG5cdFx0XHRcdFx0c3RlcD17IDAuMDEgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nZW5lcmF0b3JfbnVtYmVyc19zdGVwIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9udW1iZXJzX3N0ZXA6IE51bWJlciggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59XG5cbi8qKlxuICogRGVmYXVsdCBMZWdhY3kgQ29udHJvbHMuXG4gKlxuICogUmVuZGVycyB0aGUgc3RhbmRhcmQgXCJGaWVsZCBOYW1lXCIgaW5wdXQgd2l0aCBhZGRpdGlvbmFsXG4gKiBcIlZhbHVlIGZyb20gbWV0YSBmaWVsZFwiIGFuZCBcIkNhbGN1bGF0ZWQgdmFsdWUgZnJvbSBtZXRhIGZpZWxkXCIgaW5wdXRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzICAgICAgICAgICAgICAgQ29tcG9uZW50IHByb3BzLlxuICogQHBhcmFtIHtPYmplY3R9ICAgcHJvcHMuYXR0cmlidXRlcyAgICBCbG9jayBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMuc2V0QXR0cmlidXRlcyBTZXQgYXR0cmlidXRlcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLmVkaXRQcm9wcyAgICAgQWRkaXRpb25hbCBlZGl0IHByb3BzLlxuICogQHBhcmFtIHtzdHJpbmd9ICAgcHJvcHMuZ2VuZXJhdG9ySWQgICBHZW5lcmF0b3IgSUQuXG4gKlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IExlZ2FjeSBjb250cm9scy5cbiAqL1xuZnVuY3Rpb24gRGVmYXVsdExlZ2FjeUNvbnRyb2xzKCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGVkaXRQcm9wcywgZ2VuZXJhdG9ySWQgfSApIHtcblx0Y29uc3QgYXR0ckhlbHAgPSBlZGl0UHJvcHM/LmF0dHJIZWxwID8/ICggKCkgPT4gJycgKTtcblxuXHQvLyBNYWluIGZpZWxkIGNvbnRyb2wgLSBhcHBseSBmaWx0ZXIgZm9yIGV4dGVuc2lvbnNcblx0Y29uc3QgbWFpbkNvbnRyb2wgPSBhcHBseUZpbHRlcnMoXG5cdFx0J2pldC5mYi5zZWxlY3QucmFkaW8uY2hlY2suZ2VuZXJhdG9yLmNvbnRyb2xzJyxcblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGtleT1cImdlbmVyYXRvcl9maWVsZFwiXG5cdFx0XHRsYWJlbD17IF9fKCAnRmllbGQgTmFtZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nZW5lcmF0b3JfZmllbGQgfHwgJycgfVxuXHRcdFx0aGVscD17IGF0dHJIZWxwKCAnZ2VuZXJhdG9yX2ZpZWxkJywgYXR0cmlidXRlcyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBnZW5lcmF0b3JfZmllbGQ6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdH0gfVxuXHRcdC8+LFxuXHRcdGdlbmVyYXRvcklkLFxuXHRcdHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgZWRpdFByb3BzIH1cblx0KTtcblxuXHQvLyBBZGRpdGlvbmFsIGNvbnRyb2xzIC0gYXBwbHkgZmlsdGVyIGZvciBleHRlbnNpb25zXG5cdGNvbnN0IGFkZGl0aW9uYWxDb250cm9scyA9IGFwcGx5RmlsdGVycyhcblx0XHQnamV0LmZiLnNlbGVjdC5yYWRpby5jaGVjay5nZW5lcmF0b3IuYWRkaXRpb25hbENvbnRyb2xzJyxcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0a2V5PVwidmFsdWVfZnJvbV9rZXlcIlxuXHRcdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUgZnJvbSBtZXRhIGZpZWxkJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICd2YWx1ZV9mcm9tX21ldGEnICkgfVxuXHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmFsdWVfZnJvbV9rZXkgfHwgJycgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWVfZnJvbV9rZXkgKSA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyB2YWx1ZV9mcm9tX2tleSB9ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRrZXk9XCJjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5XCJcblx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZWQgdmFsdWUgZnJvbSBtZXRhIGZpZWxkJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5JyApIH1cblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXkgfHwgJycgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHQ8L0ZyYWdtZW50Pixcblx0XHRnZW5lcmF0b3JJZCxcblx0XHR7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGVkaXRQcm9wcyB9XG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHR7IG1haW5Db250cm9sIH1cblx0XHRcdHsgYWRkaXRpb25hbENvbnRyb2xzIH1cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufVxuXG4vKipcbiAqIExlZ2FjeSBDb250cm9scyBDb21wb25lbnQuXG4gKlxuICogTWFpbiBjb21wb25lbnQgdGhhdCBkZXRlcm1pbmVzIHdoaWNoIGxlZ2FjeSBjb250cm9scyB0byByZW5kZXJcbiAqIGJhc2VkIG9uIHRoZSBnZW5lcmF0b3IgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcyAgICAgICAgICAgICAgIENvbXBvbmVudCBwcm9wcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLmF0dHJpYnV0ZXMgICAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLnNldEF0dHJpYnV0ZXMgU2V0IGF0dHJpYnV0ZXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcy5lZGl0UHJvcHMgICAgIEFkZGl0aW9uYWwgZWRpdCBwcm9wcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIHByb3BzLmdlbmVyYXRvcklkICAgR2VuZXJhdG9yIElELlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBBcHByb3ByaWF0ZSBsZWdhY3kgY29udHJvbHMgZm9yIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMZWdhY3lDb250cm9scyggcHJvcHMgKSB7XG5cdGNvbnN0IHsgZ2VuZXJhdG9ySWQgfSA9IHByb3BzO1xuXG5cdC8vIFNwZWNpYWwgY2FzZTogbnVtX3JhbmdlX21hbnVhbCBoYXMgaXRzIG93biBkZWRpY2F0ZWQgY29udHJvbHNcblx0aWYgKCBnZW5lcmF0b3JJZCA9PT0gJ251bV9yYW5nZV9tYW51YWwnICkge1xuXHRcdHJldHVybiA8TnVtUmFuZ2VNYW51YWxDb250cm9scyB7IC4uLnByb3BzIH0gLz47XG5cdH1cblxuXHQvLyBEZWZhdWx0IGxlZ2FjeSBjb250cm9scyBmb3IgYWxsIG90aGVyIGdlbmVyYXRvcnNcblx0cmV0dXJuIDxEZWZhdWx0TGVnYWN5Q29udHJvbHMgeyAuLi5wcm9wcyB9IC8+O1xufVxuXG4vKipcbiAqIEdldCBsZWdhY3kgZmllbGQgdmFsdWUgd2l0aCBtaWdyYXRpb24gY2hlY2suXG4gKlxuICogQ2hlY2tzIGlmIGxlZ2FjeSBkYXRhIG5lZWRzIHRvIGJlIG1pZ3JhdGVkIGFuZCByZXR1cm5zXG4gKiB0aGUgYXBwcm9wcmlhdGUgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgIEJsb2NrIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIElELlxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gRmllbGQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMZWdhY3lGaWVsZFZhbHVlKCBhdHRyaWJ1dGVzLCBnZW5lcmF0b3JJZCApIHtcblx0Ly8gQ2hlY2sgZm9yIG1pZ3JhdGVkIGxlZ2FjeSBmaWVsZFxuXHRpZiAoIGF0dHJpYnV0ZXMuX2xlZ2FjeV9nZW5lcmF0b3JfZmllbGQgKSB7XG5cdFx0cmV0dXJuIGF0dHJpYnV0ZXMuX2xlZ2FjeV9nZW5lcmF0b3JfZmllbGQ7XG5cdH1cblxuXHQvLyBSZXR1cm4gY3VycmVudCBnZW5lcmF0b3JfZmllbGQgdmFsdWVcblx0cmV0dXJuIGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX2ZpZWxkIHx8ICcnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGF0dHJpYnV0ZXMgY29udGFpbiBsZWdhY3kgZm9ybWF0IHRoYXQgY2FuIGJlIG1pZ3JhdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzICBCbG9jayBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkIEdlbmVyYXRvciBJRC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1pZ3JhdGlvbiBpcyBwb3NzaWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xlZ2FjeUZvcm1hdCggYXR0cmlidXRlcywgZ2VuZXJhdG9ySWQgKSB7XG5cdGNvbnN0IHZhbHVlID0gYXR0cmlidXRlcy5nZW5lcmF0b3JfZmllbGQgfHwgJyc7XG5cblx0Ly8gSmV0RW5naW5lIFF1ZXJ5IHVzZXMgcGlwZS1kZWxpbWl0ZWQgZm9ybWF0XG5cdGlmICggZ2VuZXJhdG9ySWQgPT09ICdnZXRfZnJvbV9xdWVyeScgJiYgdmFsdWUuaW5jbHVkZXMoICd8JyApICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFBhcnNlIGxlZ2FjeSBmb3JtYXQgdG8gc3RydWN0dXJlZCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBQYXJzZWQgc2V0dGluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxlZ2FjeUZvcm1hdCggYXR0cmlidXRlcywgZ2VuZXJhdG9ySWQgKSB7XG5cdGNvbnN0IHZhbHVlID0gYXR0cmlidXRlcy5nZW5lcmF0b3JfZmllbGQgfHwgJyc7XG5cblx0aWYgKCAhIHZhbHVlICkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdHN3aXRjaCAoIGdlbmVyYXRvcklkICkge1xuXHRcdGNhc2UgJ2dldF9mcm9tX3F1ZXJ5Jzpcblx0XHRcdGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoICd8JyApO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cXVlcnlfaWQ6IHBhcnRzWyAwIF0gfHwgJycsXG5cdFx0XHRcdHZhbHVlX2ZpZWxkOiBwYXJ0c1sgMSBdIHx8ICdJRCcsXG5cdFx0XHRcdGxhYmVsX2ZpZWxkOiBwYXJ0c1sgMiBdIHx8ICdwb3N0X3RpdGxlJyxcblx0XHRcdFx0Y2FsY19maWVsZDogcGFydHNbIDMgXSB8fCAnJyxcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHsgZ2VuZXJhdG9yX2ZpZWxkOiB2YWx1ZSB9O1xuXHR9XG59XG5cbi8qKlxuICogTWlncmF0ZSBsZWdhY3kgYXR0cmlidXRlcyB0byBuZXcgZm9ybWF0LlxuICpcbiAqIFNob3VsZCBiZSBjYWxsZWQgaW4gdXNlRWZmZWN0IHdoZW4gYmxvY2sgbG9hZHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9ICAgYXR0cmlidXRlcyAgICBCbG9jayBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2V0QXR0cmlidXRlcyBTZXQgYXR0cmlidXRlcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSAgIGdlbmVyYXRvcklkICAgR2VuZXJhdG9yIElELlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZUxlZ2FjeUF0dHJpYnV0ZXMoIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGdlbmVyYXRvcklkICkge1xuXHRpZiAoICEgaGFzTGVnYWN5Rm9ybWF0KCBhdHRyaWJ1dGVzLCBnZW5lcmF0b3JJZCApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhcnNlZCA9IHBhcnNlTGVnYWN5Rm9ybWF0KCBhdHRyaWJ1dGVzLCBnZW5lcmF0b3JJZCApO1xuXG5cdGlmICggT2JqZWN0LmtleXMoIHBhcnNlZCApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBCdWlsZCBuZXcgYXR0cmlidXRlcyB3aXRoIHByZWZpeGVkIGtleXNcblx0Y29uc3QgbmV3QXR0cnMgPSB7fTtcblxuXHRPYmplY3QuZW50cmllcyggcGFyc2VkICkuZm9yRWFjaCggKCBbIGtleSwgdmFsdWUgXSApID0+IHtcblx0XHQvLyBTa2lwIGdlbmVyYXRvcl9maWVsZCAtIGl0J3MgdGhlIG9yaWdpbmFsIGtleVxuXHRcdGlmICgga2V5ID09PSAnZ2VuZXJhdG9yX2ZpZWxkJyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRuZXdBdHRyc1sgYGdlbl8keyBnZW5lcmF0b3JJZCB9XyR7IGtleSB9YCBdID0gdmFsdWU7XG5cdH0gKTtcblxuXHQvLyBTdG9yZSBvcmlnaW5hbCB2YWx1ZSBmb3IgcmVmZXJlbmNlXG5cdG5ld0F0dHJzLl9sZWdhY3lfZ2VuZXJhdG9yX2ZpZWxkID0gYXR0cmlidXRlcy5nZW5lcmF0b3JfZmllbGQ7XG5cblx0Ly8gQ2xlYXIgdGhlIGxlZ2FjeSBmaWVsZCB0byBwcmV2ZW50IHJlLW1pZ3JhdGlvblxuXHQvLyBBY3R1YWxseSwgd2Uga2VlcCBpdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBidXQgbWFyayBhcyBtaWdyYXRlZFxuXHQvLyBuZXdBdHRycy5nZW5lcmF0b3JfZmllbGQgPSAnJztcblxuXHRzZXRBdHRyaWJ1dGVzKCBuZXdBdHRycyApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMZWdhY3lDb250cm9scztcbiIsIi8qKlxuICogR2VuZXJhdG9yIENvbnRyb2xzIFJlZ2lzdHJ5LlxuICpcbiAqIE1hbmFnZXMgcmVnaXN0cmF0aW9uIGFuZCByZXRyaWV2YWwgb2YgY3VzdG9tIGNvbnRyb2wgY29tcG9uZW50c1xuICogZm9yIGRpZmZlcmVudCBnZW5lcmF0b3IgdHlwZXMuXG4gKlxuICogQHBhY2thZ2UgSmV0Rm9ybUJ1aWxkZXJcbiAqL1xuXG4vKipcbiAqIEludGVybmFsIHN0b3JhZ2UgZm9yIHJlZ2lzdGVyZWQgZ2VuZXJhdG9yIGNvbnRyb2xzLlxuICpcbiAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgRnVuY3Rpb24+fVxuICovXG5jb25zdCBnZW5lcmF0b3JDb250cm9scyA9IHt9O1xuXG4vKipcbiAqIEludGVybmFsIHN0b3JhZ2UgZm9yIHJlZ2lzdGVyZWQgZ2VuZXJhdG9yIHZhbGlkYXRvcnMuXG4gKlxuICogQHR5cGUge09iamVjdC48c3RyaW5nLCBGdW5jdGlvbj59XG4gKi9cbmNvbnN0IGdlbmVyYXRvclZhbGlkYXRvcnMgPSB7fTtcblxuLyoqXG4gKiBJbnRlcm5hbCBzdG9yYWdlIGZvciBnZW5lcmF0b3IgbWV0YWRhdGEgKGZyb20gdGhpcmQgcGFydGllcykuXG4gKlxuICogQHR5cGUge09iamVjdC48c3RyaW5nLCBPYmplY3Q+fVxuICovXG5jb25zdCBnZW5lcmF0b3JNZXRhID0ge307XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBjdXN0b20gY29udHJvbCBjb21wb25lbnQgZm9yIGEgZ2VuZXJhdG9yIHR5cGUuXG4gKlxuICogVXNlIHRoaXMgd2hlbiB0aGUgc2NoZW1hLWJhc2VkIGF1dG8tZ2VuZXJhdGVkIGNvbnRyb2xzIGFyZSBub3Qgc3VmZmljaWVudFxuICogYW5kIHlvdSBuZWVkIGN1c3RvbSBVSSBsb2dpYyAoZS5nLiwgZHluYW1pYyBzZWxlY3RvcnMsIEFQSSBjYWxscywgZXRjLikuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICAgZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIElEIChlLmcuLCAnamV0X2VuZ2luZV9xdWVyeScsICdteV9jdXN0b20nKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ29tcG9uZW50ICAgUmVhY3QgY29tcG9uZW50IHJlY2VpdmluZzpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYXR0cmlidXRlczogQ3VycmVudCBibG9jayBhdHRyaWJ1dGVzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHNldEF0dHJpYnV0ZXM6IEZ1bmN0aW9uIHRvIHVwZGF0ZSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHNjaGVtYTogR2VuZXJhdG9yIHNjaGVtYSBkZWZpbml0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGdlbmVyYXRvcklkOiBDdXJyZW50IGdlbmVyYXRvciBJRFxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogcmVnaXN0ZXJHZW5lcmF0b3JDb250cm9scyggJ215X2dlbmVyYXRvcicsICggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBzY2hlbWEgfSApID0+IHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8VGV4dENvbnRyb2xcbiAqICAgICAgIGxhYmVsPVwiTXkgRmllbGRcIlxuICogICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmdlbl9teV9nZW5lcmF0b3JfZmllbGQgfVxuICogICAgICAgb25DaGFuZ2U9eyAoIHZhbCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZ2VuX215X2dlbmVyYXRvcl9maWVsZDogdmFsIH0gKSB9XG4gKiAgICAgLz5cbiAqICAgKTtcbiAqIH0gKTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJHZW5lcmF0b3JDb250cm9scyggZ2VuZXJhdG9ySWQsIENvbXBvbmVudCApIHtcblx0aWYgKCB0eXBlb2YgQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nICkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRgSmV0Rm9ybUJ1aWxkZXI6IEdlbmVyYXRvciBjb250cm9scyBmb3IgXCIkeyBnZW5lcmF0b3JJZCB9XCIgbXVzdCBiZSBhIGZ1bmN0aW9uL2NvbXBvbmVudC5gXG5cdFx0KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRnZW5lcmF0b3JDb250cm9sc1sgZ2VuZXJhdG9ySWQgXSA9IENvbXBvbmVudDtcbn1cblxuLyoqXG4gKiBVbnJlZ2lzdGVyIGNvbnRyb2xzIGZvciBhIGdlbmVyYXRvciB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB1bnJlZ2lzdGVyZWQsIGZhbHNlIGlmIG5vdCBmb3VuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJHZW5lcmF0b3JDb250cm9scyggZ2VuZXJhdG9ySWQgKSB7XG5cdGlmICggZ2VuZXJhdG9ySWQgaW4gZ2VuZXJhdG9yQ29udHJvbHMgKSB7XG5cdFx0ZGVsZXRlIGdlbmVyYXRvckNvbnRyb2xzWyBnZW5lcmF0b3JJZCBdO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBHZXQgcmVnaXN0ZXJlZCBjb250cm9sIGNvbXBvbmVudCBmb3IgYSBnZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkIEdlbmVyYXRvciBJRC5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfSBDb250cm9sIGNvbXBvbmVudCBvciBudWxsIGlmIG5vdCByZWdpc3RlcmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2VuZXJhdG9yQ29udHJvbHMoIGdlbmVyYXRvcklkICkge1xuXHRyZXR1cm4gZ2VuZXJhdG9yQ29udHJvbHNbIGdlbmVyYXRvcklkIF0gfHwgbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdlbmVyYXRvciBoYXMgY3VzdG9tIGNvbnRyb2xzIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkIEdlbmVyYXRvciBJRC5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGN1c3RvbSBjb250cm9scyBhcmUgcmVnaXN0ZXJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0N1c3RvbUNvbnRyb2xzKCBnZW5lcmF0b3JJZCApIHtcblx0cmV0dXJuIGdlbmVyYXRvcklkIGluIGdlbmVyYXRvckNvbnRyb2xzO1xufVxuXG4vKipcbiAqIEdldCBhbGwgcmVnaXN0ZXJlZCBnZW5lcmF0b3IgY29udHJvbCBJRHMuXG4gKlxuICogQHJldHVybiB7c3RyaW5nW119IEFycmF5IG9mIGdlbmVyYXRvciBJRHMgd2l0aCBjdXN0b20gY29udHJvbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWdpc3RlcmVkR2VuZXJhdG9ySWRzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMoIGdlbmVyYXRvckNvbnRyb2xzICk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgYSB2YWxpZGF0b3IgZnVuY3Rpb24gZm9yIGEgZ2VuZXJhdG9yIHR5cGUuXG4gKlxuICogVmFsaWRhdG9ycyBhcmUgY2FsbGVkIGJlZm9yZSBzYXZpbmcgdG8gZW5zdXJlIHNldHRpbmdzIGFyZSB2YWxpZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gICBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWxpZGF0b3IgICBGdW5jdGlvbiByZWNlaXZpbmcgc2V0dGluZ3MsIHJldHVybmluZyB7IHZhbGlkOiBib29sZWFuLCBlcnJvcnM6IE9iamVjdCB9LlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogcmVnaXN0ZXJHZW5lcmF0b3JWYWxpZGF0b3IoICdteV9nZW5lcmF0b3InLCAoIHNldHRpbmdzICkgPT4ge1xuICogICBjb25zdCBlcnJvcnMgPSB7fTtcbiAqICAgaWYgKCAhIHNldHRpbmdzLmFwaV91cmwgKSB7XG4gKiAgICAgZXJyb3JzLmFwaV91cmwgPSAnQVBJIFVSTCBpcyByZXF1aXJlZCc7XG4gKiAgIH1cbiAqICAgcmV0dXJuIHsgdmFsaWQ6IE9iamVjdC5rZXlzKCBlcnJvcnMgKS5sZW5ndGggPT09IDAsIGVycm9ycyB9O1xuICogfSApO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckdlbmVyYXRvclZhbGlkYXRvciggZ2VuZXJhdG9ySWQsIHZhbGlkYXRvciApIHtcblx0aWYgKCB0eXBlb2YgdmFsaWRhdG9yICE9PSAnZnVuY3Rpb24nICkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRgSmV0Rm9ybUJ1aWxkZXI6IEdlbmVyYXRvciB2YWxpZGF0b3IgZm9yIFwiJHsgZ2VuZXJhdG9ySWQgfVwiIG11c3QgYmUgYSBmdW5jdGlvbi5gXG5cdFx0KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRnZW5lcmF0b3JWYWxpZGF0b3JzWyBnZW5lcmF0b3JJZCBdID0gdmFsaWRhdG9yO1xufVxuXG4vKipcbiAqIEdldCB2YWxpZGF0b3IgZm9yIGEgZ2VuZXJhdG9yIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkIEdlbmVyYXRvciBJRC5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfSBWYWxpZGF0b3IgZnVuY3Rpb24gb3IgbnVsbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdlbmVyYXRvclZhbGlkYXRvciggZ2VuZXJhdG9ySWQgKSB7XG5cdHJldHVybiBnZW5lcmF0b3JWYWxpZGF0b3JzWyBnZW5lcmF0b3JJZCBdIHx8IG51bGw7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgZ2VuZXJhdG9yIHNldHRpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3MgICAgU2V0dGluZ3MgdG8gdmFsaWRhdGUuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBWYWxpZGF0aW9uIHJlc3VsdCB7IHZhbGlkOiBib29sZWFuLCBlcnJvcnM6IE9iamVjdCB9LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVHZW5lcmF0b3JTZXR0aW5ncyggZ2VuZXJhdG9ySWQsIHNldHRpbmdzICkge1xuXHRjb25zdCB2YWxpZGF0b3IgPSBnZXRHZW5lcmF0b3JWYWxpZGF0b3IoIGdlbmVyYXRvcklkICk7XG5cblx0aWYgKCAhIHZhbGlkYXRvciApIHtcblx0XHRyZXR1cm4geyB2YWxpZDogdHJ1ZSwgZXJyb3JzOiB7fSB9O1xuXHR9XG5cblx0cmV0dXJuIHZhbGlkYXRvciggc2V0dGluZ3MgKTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBhZGRpdGlvbmFsIG1ldGFkYXRhIGZvciBhIGdlbmVyYXRvci5cbiAqXG4gKiBDYW4gYmUgdXNlZCB0byBhZGQgY3VzdG9tIGRhdGEgdGhhdCBjb250cm9scyBtaWdodCBuZWVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKiBAcGFyYW0ge09iamVjdH0gbWV0YSAgICAgICAgTWV0YWRhdGEgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJHZW5lcmF0b3JNZXRhKCBnZW5lcmF0b3JJZCwgbWV0YSApIHtcblx0Z2VuZXJhdG9yTWV0YVsgZ2VuZXJhdG9ySWQgXSA9IHtcblx0XHQuLi4oIGdlbmVyYXRvck1ldGFbIGdlbmVyYXRvcklkIF0gfHwge30gKSxcblx0XHQuLi5tZXRhLFxuXHR9O1xufVxuXG4vKipcbiAqIEdldCBtZXRhZGF0YSBmb3IgYSBnZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkIEdlbmVyYXRvciBJRC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IE1ldGFkYXRhIG9iamVjdCBvciBlbXB0eSBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHZW5lcmF0b3JNZXRhKCBnZW5lcmF0b3JJZCApIHtcblx0cmV0dXJuIGdlbmVyYXRvck1ldGFbIGdlbmVyYXRvcklkIF0gfHwge307XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBhdHRyaWJ1dGUgbmFtZSB3aXRoIGdlbmVyYXRvciBwcmVmaXguXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbmVyYXRvcklkIEdlbmVyYXRvciBJRC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEtleSAgICBGaWVsZCBrZXkgZnJvbSBzY2hlbWEuXG4gKlxuICogQHJldHVybiB7c3RyaW5nfSBQcmVmaXhlZCBhdHRyaWJ1dGUgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZU5hbWUoIGdlbmVyYXRvcklkLCBmaWVsZEtleSApIHtcblx0cmV0dXJuIGBnZW5fJHsgZ2VuZXJhdG9ySWQgfV8keyBmaWVsZEtleSB9YDtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2Ugc2V0dGluZ3MgZnJvbSBhdHRyaWJ1dGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBnZW5lcmF0b3JJZCBHZW5lcmF0b3IgSUQuXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWEgICAgICBHZW5lcmF0b3Igc2NoZW1hLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gUGFyc2VkIHNldHRpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTZXR0aW5nc0Zyb21BdHRyaWJ1dGVzKCBnZW5lcmF0b3JJZCwgYXR0cmlidXRlcywgc2NoZW1hICkge1xuXHRjb25zdCBzZXR0aW5ncyA9IHt9O1xuXHRjb25zdCBwcmVmaXggPSBgZ2VuXyR7IGdlbmVyYXRvcklkIH1fYDtcblxuXHRPYmplY3Qua2V5cyggc2NoZW1hICkuZm9yRWFjaCggKCBmaWVsZEtleSApID0+IHtcblx0XHRjb25zdCBhdHRyTmFtZSA9IHByZWZpeCArIGZpZWxkS2V5O1xuXHRcdGNvbnN0IGZpZWxkRGVmID0gc2NoZW1hWyBmaWVsZEtleSBdO1xuXG5cdFx0aWYgKCBhdHRyTmFtZSBpbiBhdHRyaWJ1dGVzICkge1xuXHRcdFx0c2V0dGluZ3NbIGZpZWxkS2V5IF0gPSBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXR0aW5nc1sgZmllbGRLZXkgXSA9IGZpZWxkRGVmLmRlZmF1bHQgPz8gJyc7XG5cdFx0fVxuXHR9ICk7XG5cblx0cmV0dXJuIHNldHRpbmdzO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgc2V0QXR0cmlidXRlcyB3cmFwcGVyIGZvciBhIGdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gICBnZW5lcmF0b3JJZCAgIEdlbmVyYXRvciBJRC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldEF0dHJpYnV0ZXMgT3JpZ2luYWwgc2V0QXR0cmlidXRlcyBmdW5jdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gV3JhcHBlZCBzZXRBdHRyaWJ1dGVzIHRoYXQgYXV0by1wcmVmaXhlcyBrZXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2VuZXJhdG9yU2V0QXR0cmlidXRlcyggZ2VuZXJhdG9ySWQsIHNldEF0dHJpYnV0ZXMgKSB7XG5cdHJldHVybiAoIHNldHRpbmdzICkgPT4ge1xuXHRcdGNvbnN0IHByZWZpeGVkU2V0dGluZ3MgPSB7fTtcblxuXHRcdE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncyApLmZvckVhY2goICggWyBrZXksIHZhbHVlIF0gKSA9PiB7XG5cdFx0XHQvLyBJZiBrZXkgaXMgYWxyZWFkeSBwcmVmaXhlZCwgdXNlIGFzLWlzXG5cdFx0XHRpZiAoIGtleS5zdGFydHNXaXRoKCAnZ2VuXycgKSApIHtcblx0XHRcdFx0cHJlZml4ZWRTZXR0aW5nc1sga2V5IF0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZWZpeGVkU2V0dGluZ3NbIGdldEF0dHJpYnV0ZU5hbWUoIGdlbmVyYXRvcklkLCBrZXkgKSBdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggcHJlZml4ZWRTZXR0aW5ncyApO1xuXHR9O1xufVxuXG4vKipcbiAqIEV4cG9ydCByZWdpc3RyeSB0byBnbG9iYWwgd2luZG93IG9iamVjdCBmb3IgZXh0ZXJuYWwgYWNjZXNzLlxuICpcbiAqIFRoaXJkLXBhcnR5IGRldmVsb3BlcnMgY2FuIHVzZTpcbiAqIC0gd2luZG93LkpldEZCR2VuZXJhdG9ycy5yZWdpc3RlckNvbnRyb2xzKCBpZCwgQ29tcG9uZW50IClcbiAqIC0gd2luZG93LkpldEZCR2VuZXJhdG9ycy5yZWdpc3RlclZhbGlkYXRvciggaWQsIHZhbGlkYXRvciApXG4gKiAtIHdpbmRvdy5KZXRGQkdlbmVyYXRvcnMucmVnaXN0ZXJNZXRhKCBpZCwgbWV0YSApXG4gKi9cbmlmICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdHdpbmRvdy5KZXRGQkdlbmVyYXRvcnMgPSB3aW5kb3cuSmV0RkJHZW5lcmF0b3JzIHx8IHt9O1xuXG5cdE9iamVjdC5hc3NpZ24oIHdpbmRvdy5KZXRGQkdlbmVyYXRvcnMsIHtcblx0XHRyZWdpc3RlckNvbnRyb2xzOiByZWdpc3RlckdlbmVyYXRvckNvbnRyb2xzLFxuXHRcdHVucmVnaXN0ZXJDb250cm9sczogdW5yZWdpc3RlckdlbmVyYXRvckNvbnRyb2xzLFxuXHRcdGdldENvbnRyb2xzOiBnZXRHZW5lcmF0b3JDb250cm9scyxcblx0XHRoYXNDdXN0b21Db250cm9scyxcblx0XHRnZXRSZWdpc3RlcmVkSWRzOiBnZXRSZWdpc3RlcmVkR2VuZXJhdG9ySWRzLFxuXHRcdHJlZ2lzdGVyVmFsaWRhdG9yOiByZWdpc3RlckdlbmVyYXRvclZhbGlkYXRvcixcblx0XHRnZXRWYWxpZGF0b3I6IGdldEdlbmVyYXRvclZhbGlkYXRvcixcblx0XHR2YWxpZGF0ZTogdmFsaWRhdGVHZW5lcmF0b3JTZXR0aW5ncyxcblx0XHRyZWdpc3Rlck1ldGE6IHJlZ2lzdGVyR2VuZXJhdG9yTWV0YSxcblx0XHRnZXRNZXRhOiBnZXRHZW5lcmF0b3JNZXRhLFxuXHRcdGdldEF0dHJpYnV0ZU5hbWUsXG5cdFx0cGFyc2VTZXR0aW5nczogcGFyc2VTZXR0aW5nc0Zyb21BdHRyaWJ1dGVzLFxuXHRcdGNyZWF0ZVNldEF0dHJpYnV0ZXM6IGNyZWF0ZUdlbmVyYXRvclNldEF0dHJpYnV0ZXMsXG5cdH0gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRyZWdpc3RlckdlbmVyYXRvckNvbnRyb2xzLFxuXHR1bnJlZ2lzdGVyR2VuZXJhdG9yQ29udHJvbHMsXG5cdGdldEdlbmVyYXRvckNvbnRyb2xzLFxuXHRoYXNDdXN0b21Db250cm9scyxcblx0Z2V0UmVnaXN0ZXJlZEdlbmVyYXRvcklkcyxcblx0cmVnaXN0ZXJHZW5lcmF0b3JWYWxpZGF0b3IsXG5cdGdldEdlbmVyYXRvclZhbGlkYXRvcixcblx0dmFsaWRhdGVHZW5lcmF0b3JTZXR0aW5ncyxcblx0cmVnaXN0ZXJHZW5lcmF0b3JNZXRhLFxuXHRnZXRHZW5lcmF0b3JNZXRhLFxuXHRnZXRBdHRyaWJ1dGVOYW1lLFxuXHRwYXJzZVNldHRpbmdzRnJvbUF0dHJpYnV0ZXMsXG5cdGNyZWF0ZUdlbmVyYXRvclNldEF0dHJpYnV0ZXMsXG59O1xuIiwiLyoqXG4gKiBTY2hlbWEtQmFzZWQgQ29udHJvbCBSZW5kZXJlci5cbiAqXG4gKiBBdXRvbWF0aWNhbGx5IGdlbmVyYXRlcyBmb3JtIGNvbnRyb2xzIGJhc2VkIG9uIGdlbmVyYXRvciBzY2hlbWEgZGVmaW5pdGlvbnMuXG4gKiBVc2VkIGFzIHRoZSBkZWZhdWx0IHJlbmRlcmVyIHdoZW4gbm8gY3VzdG9tIGNvbnRyb2xzIGFyZSByZWdpc3RlcmVkLlxuICpcbiAqIEBwYWNrYWdlIEpldEZvcm1CdWlsZGVyXG4gKi9cblxuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0VGV4dGFyZWFDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRCYXNlQ29udHJvbCxcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuXG4vLyBIYW5kbGUgTnVtYmVyQ29udHJvbCBhdmFpbGFiaWxpdHkgKGV4cGVyaW1lbnRhbCBpbiBzb21lIFdQIHZlcnNpb25zKVxubGV0IE51bWJlckNvbnRyb2wgPSB3cC5jb21wb25lbnRzLk51bWJlckNvbnRyb2w7XG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIGEgc2luZ2xlIGNvbnRyb2wgYmFzZWQgb24gZmllbGQgZGVmaW5pdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcyAgICAgICAgICAgICBDb21wb25lbnQgcHJvcHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gICBwcm9wcy5maWVsZEtleSAgICBGaWVsZCBrZXkgZnJvbSBzY2hlbWEuXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcy5maWVsZERlZiAgICBGaWVsZCBkZWZpbml0aW9uIGZyb20gc2NoZW1hLlxuICogQHBhcmFtIHsqfSAgICAgICAgcHJvcHMudmFsdWUgICAgICAgQ3VycmVudCBmaWVsZCB2YWx1ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uQ2hhbmdlICAgIENoYW5nZSBoYW5kbGVyLlxuICogQHBhcmFtIHtzdHJpbmd9ICAgcHJvcHMuZ2VuZXJhdG9ySWQgR2VuZXJhdG9yIElEIChmb3IgdW5pcXVlIGtleXMpLlxuICpcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fG51bGx9IENvbnRyb2wgZWxlbWVudCBvciBudWxsLlxuICovXG5mdW5jdGlvbiBTY2hlbWFDb250cm9sKCB7IGZpZWxkS2V5LCBmaWVsZERlZiwgdmFsdWUsIG9uQ2hhbmdlLCBnZW5lcmF0b3JJZCB9ICkge1xuXHRjb25zdCB7XG5cdFx0dHlwZSA9ICdzdHJpbmcnLFxuXHRcdGxhYmVsID0gZmllbGRLZXksXG5cdFx0aGVscCxcblx0XHRwbGFjZWhvbGRlcixcblx0XHRjb250cm9sID0gJ3RleHQnLFxuXHRcdG9wdGlvbnMgPSBbXSxcblx0XHRtaW4sXG5cdFx0bWF4LFxuXHRcdHN0ZXAgPSAxLFxuXHRcdHJvd3MgPSAzLFxuXHRcdGRpc2FibGVkID0gZmFsc2UsXG5cdFx0bXVsdGlwbGUgPSBmYWxzZSxcblx0fSA9IGZpZWxkRGVmO1xuXG5cdGNvbnN0IGNvbnRyb2xLZXkgPSBgJHsgZ2VuZXJhdG9ySWQgfS0keyBmaWVsZEtleSB9YDtcblxuXHRzd2l0Y2ggKCBjb250cm9sICkge1xuXHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBjb250cm9sS2V5IH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamZiLWdlbmVyYXRvci1jb250cm9sIGpmYi1nZW5lcmF0b3ItY29udHJvbC0tbnVtYmVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlID8/ICcnIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0Ly8gTnVtYmVyQ29udHJvbCByZXR1cm5zIHN0cmluZywgY29udmVydCB0byBudW1iZXIgaWYgbmVlZGVkXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG51bVZhbHVlID0gbmV3VmFsdWUgPT09ICcnID8gJycgOiBOdW1iZXIoIG5ld1ZhbHVlICk7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlKCBudW1WYWx1ZSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRzdGVwPXsgc3RlcCB9XG5cdFx0XHRcdFx0XHRtaW49eyBtaW4gfVxuXHRcdFx0XHRcdFx0bWF4PXsgbWF4IH1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdC8vIE5vcm1hbGl6ZSBvcHRpb25zIHRvIHsgdmFsdWUsIGxhYmVsIH0gZm9ybWF0XG5cdFx0XHRjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IG9wdGlvbnMubWFwKCAoIG9wdCApID0+IHtcblx0XHRcdFx0aWYgKCB0eXBlb2Ygb3B0ID09PSAnc3RyaW5nJyApIHtcblx0XHRcdFx0XHRyZXR1cm4geyB2YWx1ZTogb3B0LCBsYWJlbDogb3B0IH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9wdDtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBjb250cm9sS2V5IH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XG5cdFx0XHRcdFx0dmFsdWU9eyBtdWx0aXBsZSA/ICggdmFsdWUgPz8gW10gKSA6ICggdmFsdWUgPz8gJycgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkNoYW5nZSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IG5vcm1hbGl6ZWRPcHRpb25zIH1cblx0XHRcdFx0XHRtdWx0aXBsZT17IG11bHRpcGxlIH1cblx0XHRcdFx0XHRkaXNhYmxlZD17IGRpc2FibGVkIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZmItZ2VuZXJhdG9yLWNvbnRyb2wgamZiLWdlbmVyYXRvci1jb250cm9sLS1zZWxlY3RcIlxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblxuXHRcdGNhc2UgJ3RvZ2dsZSc6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IGNvbnRyb2xLZXkgfVxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgISEgdmFsdWUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25DaGFuZ2UgfVxuXHRcdFx0XHRcdGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1nZW5lcmF0b3ItY29udHJvbCBqZmItZ2VuZXJhdG9yLWNvbnRyb2wtLXRvZ2dsZVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IGNvbnRyb2xLZXkgfVxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIH1cblx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlID8/ICcnIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG9uQ2hhbmdlIH1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIH1cblx0XHRcdFx0XHRyb3dzPXsgcm93cyB9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamZiLWdlbmVyYXRvci1jb250cm9sIGpmYi1nZW5lcmF0b3ItY29udHJvbC0tdGV4dGFyZWFcIlxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblxuXHRcdGNhc2UgJ3RleHQnOlxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBjb250cm9sS2V5IH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XG5cdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSA/PyAnJyB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkNoYW5nZSB9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBwbGFjZWhvbGRlciB9XG5cdFx0XHRcdFx0dHlwZT17IHR5cGUgPT09ICdudW1iZXInID8gJ251bWJlcicgOiAndGV4dCcgfVxuXHRcdFx0XHRcdGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1nZW5lcmF0b3ItY29udHJvbCBqZmItZ2VuZXJhdG9yLWNvbnRyb2wtLXRleHRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblx0fVxufVxuXG4vKipcbiAqIFJlbmRlcnMgYWxsIGNvbnRyb2xzIGZvciBhIGdlbmVyYXRvciBiYXNlZCBvbiBpdHMgc2NoZW1hLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzICAgICAgICAgICAgICAgQ29tcG9uZW50IHByb3BzLlxuICogQHBhcmFtIHtzdHJpbmd9ICAgcHJvcHMuZ2VuZXJhdG9ySWQgICBHZW5lcmF0b3IgSUQuXG4gKiBAcGFyYW0ge09iamVjdH0gICBwcm9wcy5zY2hlbWEgICAgICAgIEdlbmVyYXRvciBzY2hlbWEgZGVmaW5pdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSAgIHByb3BzLmF0dHJpYnV0ZXMgICAgQmxvY2sgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLnNldEF0dHJpYnV0ZXMgRnVuY3Rpb24gdG8gdXBkYXRlIGF0dHJpYnV0ZXMuXG4gKlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR8bnVsbH0gQ29udHJvbHMgb3IgbnVsbCBpZiBubyBzY2hlbWEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTY2hlbWFCYXNlZENvbnRyb2xzKCB7XG5cdGdlbmVyYXRvcklkLFxuXHRzY2hlbWEsXG5cdGF0dHJpYnV0ZXMsXG5cdHNldEF0dHJpYnV0ZXMsXG59ICkge1xuXHRpZiAoICEgc2NoZW1hIHx8IE9iamVjdC5rZXlzKCBzY2hlbWEgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyB0aGUgYXR0cmlidXRlIGtleSBmb3IgYSBzY2hlbWEgZmllbGQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEtleSBTY2hlbWEgZmllbGQga2V5LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IEJsb2NrIGF0dHJpYnV0ZSBrZXkuXG5cdCAqL1xuXHRjb25zdCBnZXRBdHRyaWJ1dGVLZXkgPSAoIGZpZWxkS2V5ICkgPT4ge1xuXHRcdC8vIEZvciBsZWdhY3kgZ2VuZXJhdG9ycyBsaWtlIG51bV9yYW5nZV9tYW51YWwsIHVzZSBkaXJlY3QgYXR0cmlidXRlIG5hbWVzXG5cdFx0aWYgKCBmaWVsZEtleS5zdGFydHNXaXRoKCAnZ2VuZXJhdG9yXycgKSApIHtcblx0XHRcdHJldHVybiBmaWVsZEtleTtcblx0XHR9XG5cdFx0cmV0dXJuIGBnZW5fJHsgZ2VuZXJhdG9ySWQgfV8keyBmaWVsZEtleSB9YDtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyBjdXJyZW50IHZhbHVlIGZvciBhIHNjaGVtYSBmaWVsZC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkS2V5IFNjaGVtYSBmaWVsZCBrZXkuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZERlZiBGaWVsZCBkZWZpbml0aW9uLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHsqfSBDdXJyZW50IHZhbHVlLlxuXHQgKi9cblx0Y29uc3QgZ2V0VmFsdWUgPSAoIGZpZWxkS2V5LCBmaWVsZERlZiApID0+IHtcblx0XHRjb25zdCBhdHRyS2V5ID0gZ2V0QXR0cmlidXRlS2V5KCBmaWVsZEtleSApO1xuXG5cdFx0aWYgKCBhdHRyS2V5IGluIGF0dHJpYnV0ZXMgKSB7XG5cdFx0XHRyZXR1cm4gYXR0cmlidXRlc1sgYXR0cktleSBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWVsZERlZi5kZWZhdWx0ID8/ICcnO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIG9uQ2hhbmdlIGhhbmRsZXIgZm9yIGEgc2NoZW1hIGZpZWxkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRLZXkgU2NoZW1hIGZpZWxkIGtleS5cblx0ICpcblx0ICogQHJldHVybiB7RnVuY3Rpb259IENoYW5nZSBoYW5kbGVyLlxuXHQgKi9cblx0Y29uc3QgY3JlYXRlT25DaGFuZ2UgPSAoIGZpZWxkS2V5ICkgPT4gKCBuZXdWYWx1ZSApID0+IHtcblx0XHRjb25zdCBhdHRyS2V5ID0gZ2V0QXR0cmlidXRlS2V5KCBmaWVsZEtleSApO1xuXHRcdHNldEF0dHJpYnV0ZXMoIHsgWyBhdHRyS2V5IF06IG5ld1ZhbHVlIH0gKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdHsgT2JqZWN0LmVudHJpZXMoIHNjaGVtYSApLm1hcCggKCBbIGZpZWxkS2V5LCBmaWVsZERlZiBdICkgPT4gKFxuXHRcdFx0XHQ8U2NoZW1hQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IGZpZWxkS2V5IH1cblx0XHRcdFx0XHRmaWVsZEtleT17IGZpZWxkS2V5IH1cblx0XHRcdFx0XHRmaWVsZERlZj17IGZpZWxkRGVmIH1cblx0XHRcdFx0XHR2YWx1ZT17IGdldFZhbHVlKCBmaWVsZEtleSwgZmllbGREZWYgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBjcmVhdGVPbkNoYW5nZSggZmllbGRLZXkgKSB9XG5cdFx0XHRcdFx0Z2VuZXJhdG9ySWQ9eyBnZW5lcmF0b3JJZCB9XG5cdFx0XHRcdC8+XG5cdFx0XHQpICkgfVxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59XG5cbi8qKlxuICogUmVuZGVycyBhIG5vdGljZSB3aGVuIG5vIHNjaGVtYSBpcyBhdmFpbGFibGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzICAgICAgICAgICAgICAgQ29tcG9uZW50IHByb3BzLlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmdlbmVyYXRvcklkICAgR2VuZXJhdG9yIElELlxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmdlbmVyYXRvck5hbWUgR2VuZXJhdG9yIGRpc3BsYXkgbmFtZS5cbiAqXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gTm90aWNlIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBOb1NjaGVtYU5vdGljZSggeyBnZW5lcmF0b3JJZCwgZ2VuZXJhdG9yTmFtZSB9ICkge1xuXHRyZXR1cm4gKFxuXHRcdDxCYXNlQ29udHJvbCBjbGFzc05hbWU9XCJqZmItZ2VuZXJhdG9yLW5vLXNjaGVtYS1ub3RpY2VcIj5cblx0XHRcdDxwPlxuXHRcdFx0XHR7IF9fKFxuXHRcdFx0XHRcdCdUaGlzIGdlbmVyYXRvciBkb2VzIG5vdCBoYXZlIGEgY29uZmlndXJhdGlvbiBzY2hlbWEuJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdFx0KSB9XG5cdFx0XHQ8L3A+XG5cdFx0XHQ8cD5cblx0XHRcdFx0PHNtYWxsPlxuXHRcdFx0XHRcdHsgX18oICdHZW5lcmF0b3IgSUQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfSB7IGdlbmVyYXRvcklkIH1cblx0XHRcdFx0PC9zbWFsbD5cblx0XHRcdDwvcD5cblx0XHQ8L0Jhc2VDb250cm9sPlxuXHQpO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlcyB2YWx1ZXMgYWdhaW5zdCBzY2hlbWEgZGVmaW5pdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNjaGVtYSAgIEdlbmVyYXRvciBzY2hlbWEuXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzICAgVmFsdWVzIHRvIHZhbGlkYXRlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVmFsaWRhdGlvbiByZXN1bHQgeyB2YWxpZDogYm9vbGVhbiwgZXJyb3JzOiBPYmplY3QgfS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWdhaW5zdFNjaGVtYSggc2NoZW1hLCB2YWx1ZXMgKSB7XG5cdGNvbnN0IGVycm9ycyA9IHt9O1xuXG5cdE9iamVjdC5lbnRyaWVzKCBzY2hlbWEgKS5mb3JFYWNoKCAoIFsgZmllbGRLZXksIGZpZWxkRGVmIF0gKSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSB2YWx1ZXNbIGZpZWxkS2V5IF07XG5cblx0XHQvLyBSZXF1aXJlZCBjaGVja1xuXHRcdGlmICggZmllbGREZWYucmVxdWlyZWQgJiYgKCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyApICkge1xuXHRcdFx0ZXJyb3JzWyBmaWVsZEtleSBdID0gX18oICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLicsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNraXAgZnVydGhlciB2YWxpZGF0aW9uIGlmIGVtcHR5IGFuZCBub3QgcmVxdWlyZWRcblx0XHRpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFR5cGUtc3BlY2lmaWMgdmFsaWRhdGlvblxuXHRcdHN3aXRjaCAoIGZpZWxkRGVmLnR5cGUgKSB7XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRpZiAoIGlzTmFOKCBOdW1iZXIoIHZhbHVlICkgKSApIHtcblx0XHRcdFx0XHRlcnJvcnNbIGZpZWxkS2V5IF0gPSBfXyggJ011c3QgYmUgYSB2YWxpZCBudW1iZXIuJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgbnVtVmFsdWUgPSBOdW1iZXIoIHZhbHVlICk7XG5cdFx0XHRcdFx0aWYgKCBmaWVsZERlZi5taW4gIT09IHVuZGVmaW5lZCAmJiBudW1WYWx1ZSA8IGZpZWxkRGVmLm1pbiApIHtcblx0XHRcdFx0XHRcdGVycm9yc1sgZmllbGRLZXkgXSA9IGAkeyBfXyggJ01pbmltdW0gdmFsdWU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfSAkeyBmaWVsZERlZi5taW4gfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggZmllbGREZWYubWF4ICE9PSB1bmRlZmluZWQgJiYgbnVtVmFsdWUgPiBmaWVsZERlZi5tYXggKSB7XG5cdFx0XHRcdFx0XHRlcnJvcnNbIGZpZWxkS2V5IF0gPSBgJHsgX18oICdNYXhpbXVtIHZhbHVlOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH0gJHsgZmllbGREZWYubWF4IH1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYm9vbGVhbic6XG5cdFx0XHRcdGlmICggdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicgKSB7XG5cdFx0XHRcdFx0Ly8gVHJ5IHRvIGNvZXJjZVxuXHRcdFx0XHRcdGlmICggdmFsdWUgIT09ICd0cnVlJyAmJiB2YWx1ZSAhPT0gJ2ZhbHNlJyAmJiB2YWx1ZSAhPT0gMCAmJiB2YWx1ZSAhPT0gMSApIHtcblx0XHRcdFx0XHRcdGVycm9yc1sgZmllbGRLZXkgXSA9IF9fKCAnTXVzdCBiZSB0cnVlIG9yIGZhbHNlLicsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0gKTtcblxuXHRyZXR1cm4ge1xuXHRcdHZhbGlkOiBPYmplY3Qua2V5cyggZXJyb3JzICkubGVuZ3RoID09PSAwLFxuXHRcdGVycm9ycyxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRTY2hlbWFCYXNlZENvbnRyb2xzLFxuXHRTY2hlbWFDb250cm9sLFxuXHROb1NjaGVtYU5vdGljZSxcblx0dmFsaWRhdGVBZ2FpbnN0U2NoZW1hLFxufTtcbiIsIi8qKlxuICogU2xvdC9GaWxsIHN5c3RlbSBmb3IgZ2VuZXJhdG9yIGNvbnRyb2xzLlxuICpcbiAqIFByb3ZpZGVzIGV4dGVuc2liaWxpdHkgcG9pbnRzIGZvciBnZW5lcmF0b3Itc3BlY2lmaWMgVUkgY29udHJvbHNcbiAqIHVzaW5nIFdvcmRQcmVzcyBHdXRlbmJlcmcncyBTbG90L0ZpbGwgcGF0dGVybi5cbiAqXG4gKiBAcGFja2FnZSBKZXRGb3JtQnVpbGRlclxuICovXG5cbmNvbnN0IHsgY3JlYXRlU2xvdEZpbGwgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogTWFpbiBzbG90IGZvciBnZW5lcmF0b3Itc3BlY2lmaWMgY29udHJvbHMuXG4gKlxuICogRWFjaCBnZW5lcmF0b3IgdHlwZSBjYW4gcmVnaXN0ZXIgYSBGaWxsIGZvciB0aGlzIHNsb3QgdG8gcHJvdmlkZVxuICogaXRzIG93biBjdXN0b20gY29udHJvbHMuIFRoZSBGaWxsIHJlY2VpdmVzIHByb3BzIHZpYSBmaWxsUHJvcHM6XG4gKiAtIGF0dHJpYnV0ZXM6IEJsb2NrIGF0dHJpYnV0ZXNcbiAqIC0gc2V0QXR0cmlidXRlczogRnVuY3Rpb24gdG8gdXBkYXRlIGF0dHJpYnV0ZXNcbiAqIC0gZ2VuZXJhdG9ySWQ6IEN1cnJlbnQgZ2VuZXJhdG9yIElEXG4gKiAtIHNjaGVtYTogR2VuZXJhdG9yIHNjaGVtYSBkZWZpbml0aW9uXG4gKlxuICogVXNhZ2UgaW4gYSBGaWxsOlxuICogYGBganNcbiAqIGltcG9ydCB7IEdlbmVyYXRvckNvbnRyb2xzRmlsbCB9IGZyb20gJy4vc2xvdC1maWxsJztcbiAqXG4gKiBjb25zdCBNeUdlbmVyYXRvckNvbnRyb2xzID0gKCkgPT4gKFxuICogICA8R2VuZXJhdG9yQ29udHJvbHNGaWxsPlxuICogICAgIHsgKCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMsIGdlbmVyYXRvcklkLCBzY2hlbWEgfSApID0+IChcbiAqICAgICAgIGdlbmVyYXRvcklkID09PSAnbXlfZ2VuZXJhdG9yJyAmJiAoXG4gKiAgICAgICAgIDxUZXh0Q29udHJvbCAuLi4gLz5cbiAqICAgICAgIClcbiAqICAgICApIH1cbiAqICAgPC9HZW5lcmF0b3JDb250cm9sc0ZpbGw+XG4gKiApO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCB7XG5cdEZpbGw6IEdlbmVyYXRvckNvbnRyb2xzRmlsbCxcblx0U2xvdDogR2VuZXJhdG9yQ29udHJvbHNTbG90LFxufSA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCR2VuZXJhdG9yQ29udHJvbHMnICk7XG5cbi8qKlxuICogU2xvdCBmb3IgYWRkaXRpb25hbC9jb21tb24gY29udHJvbHMgYWZ0ZXIgZ2VuZXJhdG9yLXNwZWNpZmljIG9uZXMuXG4gKlxuICogVGhpcyBzbG90IGlzIHJlbmRlcmVkIGFmdGVyIHRoZSBtYWluIGdlbmVyYXRvciBjb250cm9scyBhbmQgY2FuIGJlIHVzZWRcbiAqIGZvciBjb250cm9scyB0aGF0IGFyZSBjb21tb24gYWNyb3NzIG11bHRpcGxlIGdlbmVyYXRvcnMsIGxpa2U6XG4gKiAtIFZhbHVlIGZyb20gbWV0YSBmaWVsZFxuICogLSBDYWxjdWxhdGVkIHZhbHVlIGZyb20gbWV0YSBmaWVsZFxuICpcbiAqIFVzYWdlOlxuICogYGBganNcbiAqIGltcG9ydCB7IEdlbmVyYXRvckFkZGl0aW9uYWxGaWxsIH0gZnJvbSAnLi9zbG90LWZpbGwnO1xuICpcbiAqIGNvbnN0IEFkZGl0aW9uYWxDb250cm9scyA9ICgpID0+IChcbiAqICAgPEdlbmVyYXRvckFkZGl0aW9uYWxGaWxsPlxuICogICAgIHsgKCBwcm9wcyApID0+IChcbiAqICAgICAgIDxUZXh0Q29udHJvbCAuLi4gLz5cbiAqICAgICApIH1cbiAqICAgPC9HZW5lcmF0b3JBZGRpdGlvbmFsRmlsbD5cbiAqICk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IHtcblx0RmlsbDogR2VuZXJhdG9yQWRkaXRpb25hbEZpbGwsXG5cdFNsb3Q6IEdlbmVyYXRvckFkZGl0aW9uYWxTbG90LFxufSA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCR2VuZXJhdG9yQWRkaXRpb25hbCcgKTtcblxuLyoqXG4gKiBTbG90IGZvciBhdXRvLXVwZGF0ZSBjb250cm9scy5cbiAqXG4gKiBUaGlzIHNsb3QgcmVuZGVycyB0aGUgYXV0by11cGRhdGUgdG9nZ2xlIGFuZCBmaWVsZCBzZWxlY3RvclxuICogd2hlbiBhIGdlbmVyYXRvciBzdXBwb3J0cyBjYXNjYWRpbmcgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHtcblx0RmlsbDogQXV0b1VwZGF0ZUNvbnRyb2xzRmlsbCxcblx0U2xvdDogQXV0b1VwZGF0ZUNvbnRyb2xzU2xvdCxcbn0gPSBjcmVhdGVTbG90RmlsbCggJ0pGQkF1dG9VcGRhdGVDb250cm9scycgKTtcblxuLyoqXG4gKiBTbG90IGZvciBiZWZvcmUgZ2VuZXJhdG9yIHNlbGVjdG9yLlxuICpcbiAqIENhbiBiZSB1c2VkIHRvIGFkZCBjb250ZW50IGJlZm9yZSB0aGUgZ2VuZXJhdG9yIHR5cGUgZHJvcGRvd24sXG4gKiBsaWtlIG5vdGljZXMgb3IgaW5mb3JtYXRpb25hbCB0ZXh0LlxuICovXG5leHBvcnQgY29uc3Qge1xuXHRGaWxsOiBCZWZvcmVHZW5lcmF0b3JTZWxlY3RvckZpbGwsXG5cdFNsb3Q6IEJlZm9yZUdlbmVyYXRvclNlbGVjdG9yU2xvdCxcbn0gPSBjcmVhdGVTbG90RmlsbCggJ0pGQkJlZm9yZUdlbmVyYXRvclNlbGVjdG9yJyApO1xuXG4vKipcbiAqIFNsb3QgZm9yIGFmdGVyIGFsbCBnZW5lcmF0b3IgY29udHJvbHMuXG4gKlxuICogUmVuZGVyZWQgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBnZW5lcmF0b3Igc2V0dGluZ3MgcGFuZWwuXG4gKiBVc2VmdWwgZm9yIGFkZGluZyBkZWJ1ZyBpbmZvLCBoZWxwIGxpbmtzLCBldGMuXG4gKi9cbmV4cG9ydCBjb25zdCB7XG5cdEZpbGw6IEFmdGVyR2VuZXJhdG9yQ29udHJvbHNGaWxsLFxuXHRTbG90OiBBZnRlckdlbmVyYXRvckNvbnRyb2xzU2xvdCxcbn0gPSBjcmVhdGVTbG90RmlsbCggJ0pGQkFmdGVyR2VuZXJhdG9yQ29udHJvbHMnICk7XG5cbi8qKlxuICogRXhwb3J0IGFsbCBzbG90cyBhbmQgZmlsbHMgZm9yIGV4dGVybmFsIHVzZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXHRHZW5lcmF0b3JDb250cm9sc0ZpbGwsXG5cdEdlbmVyYXRvckNvbnRyb2xzU2xvdCxcblx0R2VuZXJhdG9yQWRkaXRpb25hbEZpbGwsXG5cdEdlbmVyYXRvckFkZGl0aW9uYWxTbG90LFxuXHRBdXRvVXBkYXRlQ29udHJvbHNGaWxsLFxuXHRBdXRvVXBkYXRlQ29udHJvbHNTbG90LFxuXHRCZWZvcmVHZW5lcmF0b3JTZWxlY3RvckZpbGwsXG5cdEJlZm9yZUdlbmVyYXRvclNlbGVjdG9yU2xvdCxcblx0QWZ0ZXJHZW5lcmF0b3JDb250cm9sc0ZpbGwsXG5cdEFmdGVyR2VuZXJhdG9yQ29udHJvbHNTbG90LFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBzZWxlY3QgZnJvbSAnLi9ibG9ja3Mvc2VsZWN0JztcbmltcG9ydCAqIGFzIGNoZWNrYm94IGZyb20gJy4vYmxvY2tzL2NoZWNrYm94JztcbmltcG9ydCAqIGFzIHJhZGlvIGZyb20gJy4vYmxvY2tzL3JhZGlvJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRGaWx0ZXIsXG4gICAgICB9ID0gd3AuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZWdpc3Rlci5maWVsZHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9zZWxlY3QnLFxuXHRmdW5jdGlvbiAoIGJsb2NrcyApIHtcblx0XHRibG9ja3MucHVzaChcblx0XHRcdHNlbGVjdCxcblx0XHRcdGNoZWNrYm94LFxuXHRcdFx0cmFkaW9cblx0XHQpO1xuXG5cdFx0cmV0dXJuIGJsb2Nrcztcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9