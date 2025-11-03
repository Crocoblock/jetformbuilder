/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../blocks-metadata/captcha-container/block.json":
/*!**********************************************************!*\
  !*** ../../blocks-metadata/captcha-container/block.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/captcha-container","category":"jet-form-builder-fields","keywords":["jetformbuilder","captcha","recaptcha","hcaptcha","spam","protection"],"textdomain":"jet-form-builder","supports":{"html":false,"multiple":false},"title":"Captcha Container","description":"","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path d=\\"M47.27 44.0925L39.005 52.3575L33.8575 47.1738L35.4525 45.5788L39.1138 49.24L45.7475 42.6063L47.27 44.0925Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M49.0141 56H55C57.2091 56 59 54.2091 59 52V6C59 3.79086 57.2091 2 55 2H9C6.79086 2 5 3.79086 5 6V52C5 54.2091 6.79086 56 9 56H32.1858C32.2112 56.0365 32.2368 56.073 32.2625 56.1094C34.4375 59.1906 37.1167 61.1542 40.5 62C43.8833 61.1542 46.7625 59.1906 48.9375 56.1094C48.9632 56.073 48.9887 56.0365 49.0141 56ZM55 4H9C7.89543 4 7 4.89543 7 6V52C7 53.1046 7.89543 54 9 54H30.9676C29.6559 51.5044 29 49 29 45.9775V38.0409C29 37.6251 29.2573 37.2527 29.6462 37.1056L40.1401 33.1361C40.3718 33.0485 40.6277 33.05 40.8583 33.1402L51.3644 37.2513C51.7477 37.4013 52 37.7709 52 38.1825V46C52 49 51.4652 51.5113 50.2083 54H55C56.1046 54 57 53.1046 57 52V6C57 4.89543 56.1046 4 55 4ZM47.3969 54.5506C45.6448 57.1002 43.2792 59.0817 40.5 60C37.7208 59.0817 35.5552 57.1002 33.8031 54.5506C32.051 52.001 31 49.1658 31 46V39L40.5 35L50.025 39V45.9775C50.025 49.1433 49.149 52.001 47.3969 54.5506Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"provider":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}}}');

/***/ }),

/***/ "./editor/captcha-container-block/edit.js":
/*!************************************************!*\
  !*** ./editor/captcha-container-block/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditCaptchaContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./editor/captcha-container-block/index.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview */ "./editor/captcha-container-block/preview.js");



const {
  CaptchaBlockEdit,
  SelectVariations,
  ToggleGroupVariations
} = JetFBComponents;
const {
  useMetaState
} = JetFBHooks;
const {
  __
} = wp.i18n;
const {
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  useSelect
} = wp.data;
const {
  useEffect,
  useState
} = wp.element;
let {
  __experimentalBlockVariationPicker,
  BlockVariationPicker,
  BlockControls
} = wp.blockEditor;
BlockVariationPicker = BlockVariationPicker || __experimentalBlockVariationPicker;
function Placeholder(props) {
  const {
    setAttributes,
    attributes
  } = props;
  const blockProps = useBlockProps();
  const {
    blockType,
    variations
  } = useSelect(select => {
    const {
      getBlockVariations,
      getBlockType
    } = select('core/blocks');
    return {
      blockType: getBlockType(_index__WEBPACK_IMPORTED_MODULE_1__.name),
      variations: getBlockVariations(_index__WEBPACK_IMPORTED_MODULE_1__.name, 'block')
    };
  }, []);
  if (attributes.isPreview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, _preview__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockVariationPicker, {
    label: blockType?.title,
    instructions: __('Select captcha provider', 'jet-form-builder'),
    variations: variations,
    onSelect: nextVariation => {
      setAttributes(nextVariation.attributes);
    }
  }));
}

// eslint-disable-next-line max-lines-per-function
function EditCaptchaContainer(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const [args, setArgs] = useMetaState('_jf_recaptcha');
  const [provider, setProvider] = useState(() => attributes.provider);
  useEffect(() => {
    if (attributes.isPreview) {
      return;
    }
    setProvider(prev => attributes.provider !== prev ? attributes.provider : prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes.provider]);
  useEffect(() => {
    if (attributes.isPreview) {
      return;
    }
    setProvider(prev => args.captcha !== prev ? args.captcha : prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args.captcha]);
  useEffect(() => {
    if (attributes.isPreview) {
      return;
    }
    setArgs(prev => {
      if (provider !== prev.captcha) {
        args.captcha = provider;
        return {
          ...prev,
          captcha: provider
        };
      }
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);
  useEffect(() => {
    if (attributes.isPreview) {
      return;
    }
    if (provider !== attributes.provider) {
      setAttributes({
        provider
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '0 20px 20px 20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectVariations, {
    value: attributes.provider
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupVariations, {
    value: attributes.provider
  })), !attributes.provider ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
    ...props
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CaptchaBlockEdit.Slot, {
    fillProps: props
  }));
}

/***/ }),

/***/ "./editor/captcha-container-block/index.js":
/*!*************************************************!*\
  !*** ./editor/captcha-container-block/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _blocks_captcha_container_block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/captcha-container-block/edit.js");
/* harmony import */ var _blocks_captcha_container_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/captcha-container/block.json */ "../../blocks-metadata/captcha-container/block.json");



const {
  name,
  icon
} = _blocks_captcha_container_block_json__WEBPACK_IMPORTED_MODULE_2__;
const {
  __
} = wp.i18n;

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
  description: __(`Insert the captcha for your form. Determine its location yourself using the block, as is added before the submit button by default.`, 'jet-form-builder'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  example: {
    attributes: {
      isPreview: true
    }
  }
};


/***/ }),

/***/ "./editor/captcha-container-block/preview.js":
/*!***************************************************!*\
  !*** ./editor/captcha-container-block/preview.js ***!
  \***************************************************/
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
  rx: "4",
  fill: "#E2E8F0"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "15",
  y: "26",
  width: "268",
  height: "92",
  rx: "5",
  fill: "#E2E8F0"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "19",
  y: "44",
  width: "56",
  height: "56",
  rx: "4",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65.1937 71.5167C65.1928 71.25 65.1867 70.9848 65.1747 70.7208V55.67L61.0138 59.8309C57.6083 55.6624 52.4277 53 46.625 53C40.5862 53 35.2214 55.8824 31.8301 60.3463L38.6503 67.2383C39.3187 66.0022 40.2682 64.9404 41.4131 64.1386C42.6038 63.2094 44.2909 62.4496 46.6247 62.4496C46.9067 62.4496 47.1243 62.4826 47.2842 62.5446C50.1758 62.7729 52.6822 64.3687 54.158 66.6848L49.3303 71.5126C55.4452 71.4886 62.3531 71.4745 65.1932 71.5157",
  fill: "#1C3AA9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M46.5167 53.0007C46.25 53.0016 45.9848 53.0078 45.7208 53.0197H30.67L34.8309 57.1807C30.6624 60.5861 28 65.7668 28 71.5695C28 77.6082 30.8825 82.973 35.3463 86.3644L42.2383 79.5441C41.0022 78.8757 39.9404 77.9262 39.1386 76.7813C38.2094 75.5906 37.4496 73.9035 37.4496 71.5697C37.4496 71.2878 37.4826 71.0702 37.5446 70.9103C37.7729 68.0187 39.3687 65.5122 41.6848 64.0364L46.5126 68.8641C46.4886 62.7492 46.4744 55.8413 46.5157 53.0013",
  fill: "#4285F4"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28 71.5693C28.0009 71.836 28.007 72.1013 28.019 72.3653V87.4161L32.1799 83.2552C35.5854 87.4236 40.766 90.0861 46.5688 90.0861C52.6075 90.0861 57.9723 87.2036 61.3636 82.7398L54.5434 75.8478C53.875 77.0839 52.9255 78.1456 51.7806 78.9475C50.5899 79.8767 48.9028 80.6364 46.569 80.6364C46.287 80.6364 46.0694 80.6035 45.9095 80.5414C43.018 80.3132 40.5115 78.7174 39.0357 76.4012L43.8634 71.5735C37.7485 71.5975 30.8406 71.6116 28.0005 71.5704",
  fill: "#ABABAB"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "87",
  y: "44",
  width: "56",
  height: "56",
  rx: "4",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.5",
  d: "M119.596 86.4341H124.515V91.353H119.596V86.4341Z",
  fill: "#0074BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M114.677 86.4341H119.596V91.353H114.677V86.4341ZM109.758 86.4341H114.677V91.353H109.758V86.4341Z",
  fill: "#0074BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.5",
  d: "M104.838 86.4341H109.757V91.353H104.838V86.4341Z",
  fill: "#0074BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M124.514 81.5151H129.433V86.4341H124.514V81.5151Z",
  fill: "#0082BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.8",
  d: "M119.594 81.5151H124.513V86.4341H119.594V81.5151Z",
  fill: "#0082BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M114.675 81.5151H119.594V86.4341H114.675V81.5151ZM109.756 81.5151H114.675V86.4341H109.756V81.5151Z",
  fill: "#0082BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.8",
  d: "M104.838 81.5151H109.757V86.4341H104.838V81.5151Z",
  fill: "#0082BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M99.918 81.5152H104.837V86.4341H99.918V81.5152Z",
  fill: "#0082BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.5",
  d: "M129.434 76.5952H134.353V81.5141H129.434V76.5952Z",
  fill: "#008FBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.8",
  d: "M124.516 76.5952H129.435V81.5141H124.516V76.5952Z",
  fill: "#008FBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M119.595 76.5952H124.514V81.5141H119.595V76.5952ZM114.676 76.5952H119.595V81.5141H114.676V76.5952ZM109.757 76.5952H114.676V81.5141H109.757V76.5952ZM104.838 76.5952H109.757V81.5141H104.838V76.5952Z",
  fill: "#008FBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.8",
  d: "M99.918 76.5952H104.837V81.5141H99.918V76.5952Z",
  fill: "#008FBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.5",
  d: "M95 76.5954H99.9189V81.5143H95V76.5954Z",
  fill: "#008FBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M129.434 71.6763H134.353V76.5952H129.434V71.6763Z",
  fill: "#009DBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M124.514 71.6763H129.433V76.5952H124.514V71.6763ZM119.594 71.6763H124.513V76.5952H119.594V71.6763ZM114.676 71.6763H119.594V76.5952H114.676V71.6763ZM109.757 71.6763H114.676V76.5952H109.757V71.6763ZM104.838 71.6763H109.757V76.5952H104.838V71.6763ZM99.918 71.6763H104.837V76.5952H99.918V71.6763Z",
  fill: "#009DBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M95 71.6765H99.9189V76.5954H95V71.6765Z",
  fill: "#009DBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M129.434 66.7573H134.353V71.6763H129.434V66.7573Z",
  fill: "#00ABBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M124.514 66.7573H129.433V71.6763H124.514V66.7573ZM119.594 66.7573H124.513V71.6763H119.594V66.7573ZM114.676 66.7573H119.594V71.6763H114.676V66.7573ZM109.757 66.7573H114.676V71.6763H109.757V66.7573ZM104.838 66.7573H109.757V71.6763H104.838V66.7573ZM99.918 66.7573H104.837V71.6763H99.918V66.7573Z",
  fill: "#00ABBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M95 66.7576H99.9189V71.6765H95V66.7576Z",
  fill: "#00ABBF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.5",
  d: "M129.434 61.8389H134.353V66.7578H129.434V61.8389Z",
  fill: "#00B9BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.8",
  d: "M124.516 61.8389H129.435V66.7578H124.516V61.8389Z",
  fill: "#00B9BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M119.595 61.8389H124.514V66.7578H119.595V61.8389ZM114.676 61.8389H119.595V66.7578H114.676V61.8389ZM109.757 61.8389H114.676V66.7578H109.757V61.8389ZM104.838 61.8389H109.757V66.7578H104.838V61.8389Z",
  fill: "#00B9BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.8",
  d: "M99.918 61.8389H104.837V66.7578H99.918V61.8389Z",
  fill: "#00B9BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.5",
  d: "M95 61.8386H99.9189V66.7576H95V61.8386Z",
  fill: "#00B9BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M124.516 56.9189H129.435V61.8379H124.516V56.9189Z",
  fill: "#00C6BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.8",
  d: "M119.596 56.9189H124.515V61.8379H119.596V56.9189Z",
  fill: "#00C6BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M114.677 56.9189H119.596V61.8378H114.677V56.9189ZM109.758 56.9189H114.677V61.8378H109.758V56.9189Z",
  fill: "#00C6BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.8",
  d: "M104.838 56.9189H109.757V61.8379H104.838V56.9189Z",
  fill: "#00C6BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M99.918 56.9189H104.837V61.8379H99.918V56.9189Z",
  fill: "#00C6BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.5",
  d: "M119.596 52H124.515V56.9189H119.596V52Z",
  fill: "#00D4BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.7",
  d: "M114.677 52H119.596V56.9189H114.677V52ZM109.758 52H114.677V56.9189H109.758V52Z",
  fill: "#00D4BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  opacity: "0.5",
  d: "M104.838 52H109.757V56.9189H104.838V52Z",
  fill: "#00D4BF"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M107.952 70.1248L109.323 67.0571C109.822 66.2706 109.756 65.307 109.209 64.7604C109.137 64.6876 109.056 64.623 108.969 64.5678C108.781 64.4528 108.571 64.3799 108.352 64.3544C108.134 64.3289 107.912 64.3514 107.703 64.4202C107.229 64.5678 106.823 64.8815 106.561 65.3038C106.561 65.3038 104.685 69.6818 103.986 71.6497C103.288 73.6176 103.567 77.2262 106.259 79.9243C109.115 82.7799 113.25 83.4326 115.887 81.4532C115.997 81.3978 116.101 81.3302 116.196 81.2517L124.322 74.4661C124.717 74.1397 125.301 73.4674 124.776 72.7005C124.265 71.9523 123.296 72.4615 122.9 72.7144L118.223 76.115C118.201 76.133 118.176 76.1465 118.149 76.1546C118.122 76.1626 118.093 76.1651 118.065 76.1618C118.037 76.1585 118.009 76.1496 117.985 76.1355C117.96 76.1214 117.939 76.1025 117.921 76.0799C117.802 75.9338 117.781 75.5471 117.968 75.3937L125.137 69.3097C125.756 68.7517 125.843 67.9407 125.341 67.3851C124.851 66.8409 124.074 66.8572 123.449 67.4201L116.995 72.4663C116.964 72.491 116.929 72.5092 116.892 72.5199C116.854 72.5305 116.815 72.5334 116.777 72.5284C116.738 72.5233 116.701 72.5105 116.667 72.4905C116.634 72.4706 116.605 72.4441 116.582 72.4125C116.454 72.2697 116.405 72.0258 116.549 71.883L123.859 64.7889C124.136 64.5306 124.299 64.173 124.313 63.7945C124.326 63.4161 124.189 63.0478 123.931 62.7705C123.803 62.6358 123.649 62.5286 123.479 62.4555C123.308 62.3824 123.124 62.345 122.938 62.3454C122.556 62.3412 122.187 62.4878 121.912 62.7533L114.442 69.7699C114.264 69.9485 113.914 69.7699 113.871 69.561C113.864 69.5236 113.865 69.4849 113.877 69.4484C113.888 69.412 113.908 69.3788 113.935 69.3521L119.653 62.8423C119.791 62.7134 119.902 62.558 119.979 62.3854C120.056 62.2128 120.097 62.0265 120.1 61.8375C120.104 61.6486 120.069 61.4609 119.999 61.2856C119.928 61.1103 119.823 60.951 119.69 60.8172C119.556 60.6833 119.397 60.5777 119.222 60.5065C119.047 60.4354 118.86 60.4002 118.671 60.403C118.482 60.4058 118.295 60.4466 118.122 60.523C117.949 60.5993 117.794 60.7097 117.664 60.8474L108.994 70.4332C108.683 70.744 108.225 70.7595 108.008 70.5792C107.941 70.5259 107.897 70.4484 107.887 70.3634C107.876 70.2783 107.9 70.1927 107.952 70.1248Z",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "155",
  y: "44",
  width: "56",
  height: "56",
  rx: "4",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M200.849 57.1507C196.911 53.2125 191.57 51 186 51C174.41 51 165 60.4098 165 72C165 83.5902 174.41 93 186 93C191.57 93 196.911 90.7875 200.849 86.8493L196.394 82.3945C193.638 85.1513 189.899 86.7 186 86.7C177.887 86.7 171.3 80.1131 171.3 72C171.3 63.8869 177.887 57.3 186 57.3C189.899 57.3 193.638 58.8487 196.394 61.6055L200.849 57.1507Z",
  fill: "#FFAB00"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M171.15 86.8494C175.089 90.7877 180.43 93.0002 186 93.0002C191.569 93.0002 196.911 90.7877 200.849 86.8494L196.394 82.3947C193.637 85.1514 189.898 86.7002 186 86.7002C182.101 86.7002 178.362 85.1514 175.605 82.3947L171.15 86.8494Z",
  fill: "#FFC400"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M179.699 75.1501C181.438 75.1501 182.849 73.7398 182.849 72.0001C182.849 70.2604 181.438 68.8501 179.699 68.8501C177.959 68.8501 176.549 70.2604 176.549 72.0001C176.549 73.7398 177.959 75.1501 179.699 75.1501Z",
  fill: "#FFAB00"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M192.3 75.1501C194.04 75.1501 195.45 73.7398 195.45 72.0001C195.45 70.2604 194.04 68.8501 192.3 68.8501C190.561 68.8501 189.15 70.2604 189.15 72.0001C189.15 73.7398 190.561 75.1501 192.3 75.1501Z",
  fill: "#FFAB00"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "223",
  y: "44",
  width: "56",
  height: "56",
  rx: "4",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M269.335 73.8259L263.803 70.6535L262.849 70.2408L240.217 70.3956V81.8857H269.335V73.8259Z",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M259.266 80.8279C259.537 79.8994 259.434 79.0483 258.983 78.4164C258.57 77.8361 257.874 77.5008 257.035 77.4621L241.161 77.2558C241.058 77.2558 240.967 77.2042 240.916 77.1268C240.864 77.0495 240.851 76.9463 240.877 76.8431C240.929 76.6884 241.083 76.5723 241.251 76.5594L257.267 76.3531C259.163 76.2628 261.226 74.7282 261.949 72.8454L262.864 70.4597C262.903 70.3566 262.916 70.2534 262.89 70.1502C261.858 65.482 257.693 62.0001 252.715 62.0001C248.124 62.0001 244.23 64.9661 242.837 69.0799C241.934 68.4093 240.787 68.0482 239.549 68.1643C237.344 68.3835 235.577 70.1502 235.358 72.3554C235.306 72.9228 235.345 73.4773 235.474 73.9932C231.876 74.0963 229 77.0366 229 80.6603C229 80.9827 229.026 81.3051 229.064 81.6274C229.09 81.7822 229.219 81.8983 229.374 81.8983H258.673C258.841 81.8983 258.996 81.7822 259.047 81.6146L259.266 80.8279Z",
  fill: "#F38020"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M264.321 70.6276C264.179 70.6276 264.024 70.6276 263.882 70.6405C263.779 70.6405 263.689 70.7178 263.65 70.821L263.031 72.9746C262.76 73.9031 262.863 74.7542 263.315 75.3861C263.727 75.9664 264.424 76.3017 265.262 76.3404L268.641 76.5467C268.744 76.5467 268.834 76.5983 268.886 76.6757C268.937 76.753 268.95 76.8691 268.924 76.9594C268.873 77.1141 268.718 77.2302 268.55 77.2431L265.03 77.4494C263.121 77.5397 261.071 79.0743 260.349 80.9571L260.091 81.6147C260.039 81.7437 260.13 81.8727 260.271 81.8727H272.368C272.509 81.8727 272.638 81.7824 272.677 81.6405C272.883 80.8926 272.999 80.1059 272.999 79.2935C272.999 74.5221 269.105 70.6276 264.321 70.6276Z",
  fill: "#FAAE40"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "./editor/captcha-plugin/index.js":
/*!****************************************!*\
  !*** ./editor/captcha-plugin/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./editor/captcha-plugin/render.js");


const {
  __
} = wp.i18n;
const {
  useEffect
} = wp.element;
const {
  useMetaState
} = JetFBHooks;
function RenderPlugin() {
  const [args, setArgs] = useMetaState('_jf_recaptcha');

  /* Backward compatibility */

  useEffect(() => {
    if (!args.enabled || args.hasOwnProperty('captcha')) {
      return;
    }
    setArgs(prev => {
      delete prev.enabled;
      return {
        captcha: 'google',
        google: {
          use_global: prev.use_global,
          key: prev.key,
          secret: prev.secret,
          threshold: prev.threshold
        }
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_render__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}
const settings = {
  render: RenderPlugin,
  icon: 'filter'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  base: {
    name: 'jf-captcha-panel',
    title: __('Captcha Settings', 'jet-form-builder')
  },
  settings
});

/***/ }),

/***/ "./editor/captcha-plugin/options.js":
/*!******************************************!*\
  !*** ./editor/captcha-plugin/options.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captchaItems: () => (/* binding */ captchaItems),
/* harmony export */   currentTab: () => (/* binding */ currentTab)
/* harmony export */ });
const {
  __
} = wp.i18n;
const {
  Tools,
  getCaptchaProviders
} = JetFBActions;
const {
  globalTab
} = JetFBActions;
const currentTab = globalTab({
  slug: 'captcha-tab'
});
const captchaItems = Tools.withPlaceholder(getCaptchaProviders(), __('Without protection', 'jet-form-builder'));


/***/ }),

/***/ "./editor/captcha-plugin/render.js":
/*!*****************************************!*\
  !*** ./editor/captcha-plugin/render.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./editor/captcha-plugin/options.js");


const {
  __
} = wp.i18n;
const {
  useMetaState
} = JetFBHooks;
const {
  CaptchaOptions
} = JetFBComponents;
const {
  SelectControl
} = wp.components;
function PluginCaptcha() {
  const [args, setArgs] = useMetaState('_jf_recaptcha');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Captcha Provider', 'jet-form-builder'),
    value: args.captcha,
    options: _options__WEBPACK_IMPORTED_MODULE_1__.captchaItems,
    onChange: captcha => {
      setArgs(prevArgs => ({
        ...prevArgs,
        captcha
      }));
    }
  }), Boolean(args.captcha) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CaptchaOptions.Slot, {
    fillProps: {
      args,
      setArgs
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginCaptcha);

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
/* harmony import */ var _captcha_container_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./captcha-container-block */ "./editor/captcha-container-block/index.js");
/* harmony import */ var _captcha_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./captcha-plugin */ "./editor/captcha-plugin/index.js");


const {
  addFilter
} = wp.hooks;
addFilter('jet.fb.register.fields', 'jet-form-builder/captcha', function (blocks) {
  blocks.push(_captcha_container_block__WEBPACK_IMPORTED_MODULE_0__);
  return blocks;
});
addFilter('jet.fb.register.plugin.jf-validation-panel.after', 'jet-form-builder/captcha', function (plugins) {
  plugins.push(_captcha_plugin__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return plugins;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekpBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2VkaXRvci9jYXB0Y2hhLWNvbnRhaW5lci1ibG9jay9lZGl0LmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yL2NhcHRjaGEtY29udGFpbmVyLWJsb2NrL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yL2NhcHRjaGEtY29udGFpbmVyLWJsb2NrL3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9lZGl0b3IvY2FwdGNoYS1wbHVnaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9lZGl0b3IvY2FwdGNoYS1wbHVnaW4vb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2VkaXRvci9jYXB0Y2hhLXBsdWdpbi9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgcHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIENhcHRjaGFCbG9ja0VkaXQsXHJcblx0ICAgICAgU2VsZWN0VmFyaWF0aW9ucyxcclxuXHQgICAgICBUb2dnbGVHcm91cFZhcmlhdGlvbnMsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlTWV0YVN0YXRlLFxyXG4gICAgICB9ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXHJcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcclxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZVNlbGVjdCxcclxuICAgICAgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlRWZmZWN0LFxyXG5cdCAgICAgIHVzZVN0YXRlLFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmxldCB7XHJcblx0ICAgIF9fZXhwZXJpbWVudGFsQmxvY2tWYXJpYXRpb25QaWNrZXIsXHJcblx0ICAgIEJsb2NrVmFyaWF0aW9uUGlja2VyLFxyXG5cdCAgICBCbG9ja0NvbnRyb2xzLFxyXG4gICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuQmxvY2tWYXJpYXRpb25QaWNrZXIgPSAoXHJcblx0QmxvY2tWYXJpYXRpb25QaWNrZXIgfHwgX19leHBlcmltZW50YWxCbG9ja1ZhcmlhdGlvblBpY2tlclxyXG4pO1xyXG5cclxuZnVuY3Rpb24gUGxhY2Vob2xkZXIoIHByb3BzICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxyXG5cdCAgICAgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3QgeyBibG9ja1R5cGUsIHZhcmlhdGlvbnMgfSA9IHVzZVNlbGVjdChcclxuXHRcdCggc2VsZWN0ICkgPT4ge1xyXG5cdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0ICAgICAgZ2V0QmxvY2tWYXJpYXRpb25zLFxyXG5cdFx0XHRcdCAgICAgIGdldEJsb2NrVHlwZSxcclxuXHRcdFx0ICAgICAgfSA9IHNlbGVjdCggJ2NvcmUvYmxvY2tzJyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRibG9ja1R5cGU6IGdldEJsb2NrVHlwZSggbmFtZSApLFxyXG5cdFx0XHRcdHZhcmlhdGlvbnM6IGdldEJsb2NrVmFyaWF0aW9ucyggbmFtZSwgJ2Jsb2NrJyApLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdFtdLFxyXG5cdCk7XHJcblxyXG5cdGlmICggYXR0cmlidXRlcy5pc1ByZXZpZXcgKSB7XHJcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHR9IH0+XHJcblx0XHRcdHsgcHJldmlldyB9XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPGRpdiB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdDxCbG9ja1ZhcmlhdGlvblBpY2tlclxyXG5cdFx0XHRsYWJlbD17IGJsb2NrVHlwZT8udGl0bGUgfVxyXG5cdFx0XHRpbnN0cnVjdGlvbnM9eyBfXyggJ1NlbGVjdCBjYXB0Y2hhIHByb3ZpZGVyJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHR2YXJpYXRpb25zPXsgdmFyaWF0aW9ucyB9XHJcblx0XHRcdG9uU2VsZWN0PXsgKCBuZXh0VmFyaWF0aW9uICkgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIG5leHRWYXJpYXRpb24uYXR0cmlidXRlcyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0Q2FwdGNoYUNvbnRhaW5lciggcHJvcHMgKSB7XHJcblx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgWyBhcmdzLCBzZXRBcmdzIF0gICAgICAgICA9IHVzZU1ldGFTdGF0ZSggJ19qZl9yZWNhcHRjaGEnICk7XHJcblx0Y29uc3QgWyBwcm92aWRlciwgc2V0UHJvdmlkZXIgXSA9IHVzZVN0YXRlKCAoKSA9PiBhdHRyaWJ1dGVzLnByb3ZpZGVyICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCBhdHRyaWJ1dGVzLmlzUHJldmlldyApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0UHJvdmlkZXIoXHJcblx0XHRcdHByZXYgPT4gYXR0cmlidXRlcy5wcm92aWRlciAhPT0gcHJldiA/IGF0dHJpYnV0ZXMucHJvdmlkZXIgOiBwcmV2LFxyXG5cdFx0KTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbIGF0dHJpYnV0ZXMucHJvdmlkZXIgXSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggYXR0cmlidXRlcy5pc1ByZXZpZXcgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFByb3ZpZGVyKFxyXG5cdFx0XHRwcmV2ID0+IGFyZ3MuY2FwdGNoYSAhPT0gcHJldiA/IGFyZ3MuY2FwdGNoYSA6IHByZXYsXHJcblx0XHQpO1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFsgYXJncy5jYXB0Y2hhIF0gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIGF0dHJpYnV0ZXMuaXNQcmV2aWV3ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRBcmdzKCBwcmV2ID0+IHtcclxuXHRcdFx0aWYgKCBwcm92aWRlciAhPT0gcHJldi5jYXB0Y2hhICkge1xyXG5cdFx0XHRcdGFyZ3MuY2FwdGNoYSA9IHByb3ZpZGVyO1xyXG5cdFx0XHRcdHJldHVybiB7IC4uLnByZXYsIGNhcHRjaGE6IHByb3ZpZGVyIH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBwcmV2O1xyXG5cdFx0fSApO1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFsgcHJvdmlkZXIgXSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggYXR0cmlidXRlcy5pc1ByZXZpZXcgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmICggcHJvdmlkZXIgIT09IGF0dHJpYnV0ZXMucHJvdmlkZXIgKSB7XHJcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgcHJvdmlkZXIgfSApO1xyXG5cdFx0fVxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFsgcHJvdmlkZXIgXSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cclxuXHRcdFx0PGRpdiBzdHlsZT17IHsgcGFkZGluZzogJzAgMjBweCAyMHB4IDIwcHgnIH0gfT5cclxuXHRcdFx0XHQ8U2VsZWN0VmFyaWF0aW9uc1xyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnByb3ZpZGVyIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHQ8QmxvY2tDb250cm9scz5cclxuXHRcdFx0PFRvZ2dsZUdyb3VwVmFyaWF0aW9uc1xyXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5wcm92aWRlciB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0Jsb2NrQ29udHJvbHM+XHJcblx0XHR7ICFhdHRyaWJ1dGVzLnByb3ZpZGVyXHJcblx0XHQgID8gPFBsYWNlaG9sZGVyIHsgLi4ucHJvcHMgfSAvPlxyXG5cdFx0ICA6IDxDYXB0Y2hhQmxvY2tFZGl0LlNsb3QgZmlsbFByb3BzPXsgcHJvcHMgfS8+IH1cclxuXHQ8Lz47XHJcbn0iLCJpbXBvcnQgRWRpdENhcHRjaGFDb250YWluZXIgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gJ0BibG9ja3MvY2FwdGNoYS1jb250YWluZXIvYmxvY2suanNvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgbmFtZSxcclxuXHQgICAgICBpY29uLFxyXG4gICAgICB9ID0gbWV0YWRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZGVzY3JpcHRpb246IF9fKFxyXG5cdFx0YEluc2VydCB0aGUgY2FwdGNoYSBmb3IgeW91ciBmb3JtLiBEZXRlcm1pbmUgaXRzIGxvY2F0aW9uIHlvdXJzZWxmIHVzaW5nIHRoZSBibG9jaywgYXMgaXMgYWRkZWQgYmVmb3JlIHRoZSBzdWJtaXQgYnV0dG9uIGJ5IGRlZmF1bHQuYCxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdGVkaXQ6IEVkaXRDYXB0Y2hhQ29udGFpbmVyLFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzLFxyXG59O1xyXG4iLCJjb25zdCBwcmV2aWV3ID0gKFxyXG5cdDxzdmcgd2lkdGg9XCIyOThcIiBoZWlnaHQ9XCIxNDRcIiB2aWV3Qm94PVwiMCAwIDI5OCAxNDRcIiBmaWxsPVwibm9uZVwiXHJcblx0ICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHQ8cmVjdCB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHJ4PVwiNFwiIGZpbGw9XCIjRTJFOEYwXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjE1XCIgeT1cIjI2XCIgd2lkdGg9XCIyNjhcIiBoZWlnaHQ9XCI5MlwiIHJ4PVwiNVwiIGZpbGw9XCIjRTJFOEYwXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjE5XCIgeT1cIjQ0XCIgd2lkdGg9XCI1NlwiIGhlaWdodD1cIjU2XCIgcng9XCI0XCIgZmlsbD1cIndoaXRlXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk02NS4xOTM3IDcxLjUxNjdDNjUuMTkyOCA3MS4yNSA2NS4xODY3IDcwLjk4NDggNjUuMTc0NyA3MC43MjA4VjU1LjY3TDYxLjAxMzggNTkuODMwOUM1Ny42MDgzIDU1LjY2MjQgNTIuNDI3NyA1MyA0Ni42MjUgNTNDNDAuNTg2MiA1MyAzNS4yMjE0IDU1Ljg4MjQgMzEuODMwMSA2MC4zNDYzTDM4LjY1MDMgNjcuMjM4M0MzOS4zMTg3IDY2LjAwMjIgNDAuMjY4MiA2NC45NDA0IDQxLjQxMzEgNjQuMTM4NkM0Mi42MDM4IDYzLjIwOTQgNDQuMjkwOSA2Mi40NDk2IDQ2LjYyNDcgNjIuNDQ5NkM0Ni45MDY3IDYyLjQ0OTYgNDcuMTI0MyA2Mi40ODI2IDQ3LjI4NDIgNjIuNTQ0NkM1MC4xNzU4IDYyLjc3MjkgNTIuNjgyMiA2NC4zNjg3IDU0LjE1OCA2Ni42ODQ4TDQ5LjMzMDMgNzEuNTEyNkM1NS40NDUyIDcxLjQ4ODYgNjIuMzUzMSA3MS40NzQ1IDY1LjE5MzIgNzEuNTE1N1wiXHJcblx0XHRcdGZpbGw9XCIjMUMzQUE5XCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk00Ni41MTY3IDUzLjAwMDdDNDYuMjUgNTMuMDAxNiA0NS45ODQ4IDUzLjAwNzggNDUuNzIwOCA1My4wMTk3SDMwLjY3TDM0LjgzMDkgNTcuMTgwN0MzMC42NjI0IDYwLjU4NjEgMjggNjUuNzY2OCAyOCA3MS41Njk1QzI4IDc3LjYwODIgMzAuODgyNSA4Mi45NzMgMzUuMzQ2MyA4Ni4zNjQ0TDQyLjIzODMgNzkuNTQ0MUM0MS4wMDIyIDc4Ljg3NTcgMzkuOTQwNCA3Ny45MjYyIDM5LjEzODYgNzYuNzgxM0MzOC4yMDk0IDc1LjU5MDYgMzcuNDQ5NiA3My45MDM1IDM3LjQ0OTYgNzEuNTY5N0MzNy40NDk2IDcxLjI4NzggMzcuNDgyNiA3MS4wNzAyIDM3LjU0NDYgNzAuOTEwM0MzNy43NzI5IDY4LjAxODcgMzkuMzY4NyA2NS41MTIyIDQxLjY4NDggNjQuMDM2NEw0Ni41MTI2IDY4Ljg2NDFDNDYuNDg4NiA2Mi43NDkyIDQ2LjQ3NDQgNTUuODQxMyA0Ni41MTU3IDUzLjAwMTNcIlxyXG5cdFx0XHRmaWxsPVwiIzQyODVGNFwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMjggNzEuNTY5M0MyOC4wMDA5IDcxLjgzNiAyOC4wMDcgNzIuMTAxMyAyOC4wMTkgNzIuMzY1M1Y4Ny40MTYxTDMyLjE3OTkgODMuMjU1MkMzNS41ODU0IDg3LjQyMzYgNDAuNzY2IDkwLjA4NjEgNDYuNTY4OCA5MC4wODYxQzUyLjYwNzUgOTAuMDg2MSA1Ny45NzIzIDg3LjIwMzYgNjEuMzYzNiA4Mi43Mzk4TDU0LjU0MzQgNzUuODQ3OEM1My44NzUgNzcuMDgzOSA1Mi45MjU1IDc4LjE0NTYgNTEuNzgwNiA3OC45NDc1QzUwLjU4OTkgNzkuODc2NyA0OC45MDI4IDgwLjYzNjQgNDYuNTY5IDgwLjYzNjRDNDYuMjg3IDgwLjYzNjQgNDYuMDY5NCA4MC42MDM1IDQ1LjkwOTUgODAuNTQxNEM0My4wMTggODAuMzEzMiA0MC41MTE1IDc4LjcxNzQgMzkuMDM1NyA3Ni40MDEyTDQzLjg2MzQgNzEuNTczNUMzNy43NDg1IDcxLjU5NzUgMzAuODQwNiA3MS42MTE2IDI4LjAwMDUgNzEuNTcwNFwiXHJcblx0XHRcdGZpbGw9XCIjQUJBQkFCXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjg3XCIgeT1cIjQ0XCIgd2lkdGg9XCI1NlwiIGhlaWdodD1cIjU2XCIgcng9XCI0XCIgZmlsbD1cIndoaXRlXCIvPlxyXG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuNVwiIGQ9XCJNMTE5LjU5NiA4Ni40MzQxSDEyNC41MTVWOTEuMzUzSDExOS41OTZWODYuNDM0MVpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMDc0QkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC43XCJcclxuXHRcdCAgICAgIGQ9XCJNMTE0LjY3NyA4Ni40MzQxSDExOS41OTZWOTEuMzUzSDExNC42NzdWODYuNDM0MVpNMTA5Ljc1OCA4Ni40MzQxSDExNC42NzdWOTEuMzUzSDEwOS43NThWODYuNDM0MVpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMDc0QkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC41XCIgZD1cIk0xMDQuODM4IDg2LjQzNDFIMTA5Ljc1N1Y5MS4zNTNIMTA0LjgzOFY4Ni40MzQxWlwiXHJcblx0XHQgICAgICBmaWxsPVwiIzAwNzRCRlwiLz5cclxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjdcIlxyXG5cdFx0ICAgICAgZD1cIk0xMjQuNTE0IDgxLjUxNTFIMTI5LjQzM1Y4Ni40MzQxSDEyNC41MTRWODEuNTE1MVpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMDgyQkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC44XCJcclxuXHRcdCAgICAgIGQ9XCJNMTE5LjU5NCA4MS41MTUxSDEyNC41MTNWODYuNDM0MUgxMTkuNTk0VjgxLjUxNTFaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjMDA4MkJGXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMTQuNjc1IDgxLjUxNTFIMTE5LjU5NFY4Ni40MzQxSDExNC42NzVWODEuNTE1MVpNMTA5Ljc1NiA4MS41MTUxSDExNC42NzVWODYuNDM0MUgxMDkuNzU2VjgxLjUxNTFaXCJcclxuXHRcdFx0ZmlsbD1cIiMwMDgyQkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC44XCJcclxuXHRcdCAgICAgIGQ9XCJNMTA0LjgzOCA4MS41MTUxSDEwOS43NTdWODYuNDM0MUgxMDQuODM4VjgxLjUxNTFaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjMDA4MkJGXCIvPlxyXG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuN1wiIGQ9XCJNOTkuOTE4IDgxLjUxNTJIMTA0LjgzN1Y4Ni40MzQxSDk5LjkxOFY4MS41MTUyWlwiXHJcblx0XHQgICAgICBmaWxsPVwiIzAwODJCRlwiLz5cclxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjVcIlxyXG5cdFx0ICAgICAgZD1cIk0xMjkuNDM0IDc2LjU5NTJIMTM0LjM1M1Y4MS41MTQxSDEyOS40MzRWNzYuNTk1MlpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMDhGQkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC44XCJcclxuXHRcdCAgICAgIGQ9XCJNMTI0LjUxNiA3Ni41OTUySDEyOS40MzVWODEuNTE0MUgxMjQuNTE2Vjc2LjU5NTJaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjMDA4RkJGXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMTkuNTk1IDc2LjU5NTJIMTI0LjUxNFY4MS41MTQxSDExOS41OTVWNzYuNTk1MlpNMTE0LjY3NiA3Ni41OTUySDExOS41OTVWODEuNTE0MUgxMTQuNjc2Vjc2LjU5NTJaTTEwOS43NTcgNzYuNTk1MkgxMTQuNjc2VjgxLjUxNDFIMTA5Ljc1N1Y3Ni41OTUyWk0xMDQuODM4IDc2LjU5NTJIMTA5Ljc1N1Y4MS41MTQxSDEwNC44MzhWNzYuNTk1MlpcIlxyXG5cdFx0XHRmaWxsPVwiIzAwOEZCRlwiLz5cclxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjhcIiBkPVwiTTk5LjkxOCA3Ni41OTUySDEwNC44MzdWODEuNTE0MUg5OS45MThWNzYuNTk1MlpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMDhGQkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC41XCIgZD1cIk05NSA3Ni41OTU0SDk5LjkxODlWODEuNTE0M0g5NVY3Ni41OTU0WlwiXHJcblx0XHQgICAgICBmaWxsPVwiIzAwOEZCRlwiLz5cclxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjdcIlxyXG5cdFx0ICAgICAgZD1cIk0xMjkuNDM0IDcxLjY3NjNIMTM0LjM1M1Y3Ni41OTUySDEyOS40MzRWNzEuNjc2M1pcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMDlEQkZcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTEyNC41MTQgNzEuNjc2M0gxMjkuNDMzVjc2LjU5NTJIMTI0LjUxNFY3MS42NzYzWk0xMTkuNTk0IDcxLjY3NjNIMTI0LjUxM1Y3Ni41OTUySDExOS41OTRWNzEuNjc2M1pNMTE0LjY3NiA3MS42NzYzSDExOS41OTRWNzYuNTk1MkgxMTQuNjc2VjcxLjY3NjNaTTEwOS43NTcgNzEuNjc2M0gxMTQuNjc2Vjc2LjU5NTJIMTA5Ljc1N1Y3MS42NzYzWk0xMDQuODM4IDcxLjY3NjNIMTA5Ljc1N1Y3Ni41OTUySDEwNC44MzhWNzEuNjc2M1pNOTkuOTE4IDcxLjY3NjNIMTA0LjgzN1Y3Ni41OTUySDk5LjkxOFY3MS42NzYzWlwiXHJcblx0XHRcdGZpbGw9XCIjMDA5REJGXCIvPlxyXG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuN1wiIGQ9XCJNOTUgNzEuNjc2NUg5OS45MTg5Vjc2LjU5NTRIOTVWNzEuNjc2NVpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMDlEQkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC43XCJcclxuXHRcdCAgICAgIGQ9XCJNMTI5LjQzNCA2Ni43NTczSDEzNC4zNTNWNzEuNjc2M0gxMjkuNDM0VjY2Ljc1NzNaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjMDBBQkJGXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMjQuNTE0IDY2Ljc1NzNIMTI5LjQzM1Y3MS42NzYzSDEyNC41MTRWNjYuNzU3M1pNMTE5LjU5NCA2Ni43NTczSDEyNC41MTNWNzEuNjc2M0gxMTkuNTk0VjY2Ljc1NzNaTTExNC42NzYgNjYuNzU3M0gxMTkuNTk0VjcxLjY3NjNIMTE0LjY3NlY2Ni43NTczWk0xMDkuNzU3IDY2Ljc1NzNIMTE0LjY3NlY3MS42NzYzSDEwOS43NTdWNjYuNzU3M1pNMTA0LjgzOCA2Ni43NTczSDEwOS43NTdWNzEuNjc2M0gxMDQuODM4VjY2Ljc1NzNaTTk5LjkxOCA2Ni43NTczSDEwNC44MzdWNzEuNjc2M0g5OS45MThWNjYuNzU3M1pcIlxyXG5cdFx0XHRmaWxsPVwiIzAwQUJCRlwiLz5cclxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjdcIiBkPVwiTTk1IDY2Ljc1NzZIOTkuOTE4OVY3MS42NzY1SDk1VjY2Ljc1NzZaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjMDBBQkJGXCIvPlxyXG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuNVwiXHJcblx0XHQgICAgICBkPVwiTTEyOS40MzQgNjEuODM4OUgxMzQuMzUzVjY2Ljc1NzhIMTI5LjQzNFY2MS44Mzg5WlwiXHJcblx0XHQgICAgICBmaWxsPVwiIzAwQjlCRlwiLz5cclxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjhcIlxyXG5cdFx0ICAgICAgZD1cIk0xMjQuNTE2IDYxLjgzODlIMTI5LjQzNVY2Ni43NTc4SDEyNC41MTZWNjEuODM4OVpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMEI5QkZcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTExOS41OTUgNjEuODM4OUgxMjQuNTE0VjY2Ljc1NzhIMTE5LjU5NVY2MS44Mzg5Wk0xMTQuNjc2IDYxLjgzODlIMTE5LjU5NVY2Ni43NTc4SDExNC42NzZWNjEuODM4OVpNMTA5Ljc1NyA2MS44Mzg5SDExNC42NzZWNjYuNzU3OEgxMDkuNzU3VjYxLjgzODlaTTEwNC44MzggNjEuODM4OUgxMDkuNzU3VjY2Ljc1NzhIMTA0LjgzOFY2MS44Mzg5WlwiXHJcblx0XHRcdGZpbGw9XCIjMDBCOUJGXCIvPlxyXG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuOFwiIGQ9XCJNOTkuOTE4IDYxLjgzODlIMTA0LjgzN1Y2Ni43NTc4SDk5LjkxOFY2MS44Mzg5WlwiXHJcblx0XHQgICAgICBmaWxsPVwiIzAwQjlCRlwiLz5cclxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjVcIiBkPVwiTTk1IDYxLjgzODZIOTkuOTE4OVY2Ni43NTc2SDk1VjYxLjgzODZaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjMDBCOUJGXCIvPlxyXG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuN1wiXHJcblx0XHQgICAgICBkPVwiTTEyNC41MTYgNTYuOTE4OUgxMjkuNDM1VjYxLjgzNzlIMTI0LjUxNlY1Ni45MTg5WlwiXHJcblx0XHQgICAgICBmaWxsPVwiIzAwQzZCRlwiLz5cclxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjhcIlxyXG5cdFx0ICAgICAgZD1cIk0xMTkuNTk2IDU2LjkxODlIMTI0LjUxNVY2MS44Mzc5SDExOS41OTZWNTYuOTE4OVpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMEM2QkZcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTExNC42NzcgNTYuOTE4OUgxMTkuNTk2VjYxLjgzNzhIMTE0LjY3N1Y1Ni45MTg5Wk0xMDkuNzU4IDU2LjkxODlIMTE0LjY3N1Y2MS44Mzc4SDEwOS43NThWNTYuOTE4OVpcIlxyXG5cdFx0XHRmaWxsPVwiIzAwQzZCRlwiLz5cclxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjhcIlxyXG5cdFx0ICAgICAgZD1cIk0xMDQuODM4IDU2LjkxODlIMTA5Ljc1N1Y2MS44Mzc5SDEwNC44MzhWNTYuOTE4OVpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMEM2QkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC43XCIgZD1cIk05OS45MTggNTYuOTE4OUgxMDQuODM3VjYxLjgzNzlIOTkuOTE4VjU2LjkxODlaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjMDBDNkJGXCIvPlxyXG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuNVwiIGQ9XCJNMTE5LjU5NiA1MkgxMjQuNTE1VjU2LjkxODlIMTE5LjU5NlY1MlpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMEQ0QkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC43XCJcclxuXHRcdCAgICAgIGQ9XCJNMTE0LjY3NyA1MkgxMTkuNTk2VjU2LjkxODlIMTE0LjY3N1Y1MlpNMTA5Ljc1OCA1MkgxMTQuNjc3VjU2LjkxODlIMTA5Ljc1OFY1MlpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiMwMEQ0QkZcIi8+XHJcblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC41XCIgZD1cIk0xMDQuODM4IDUySDEwOS43NTdWNTYuOTE4OUgxMDQuODM4VjUyWlwiXHJcblx0XHQgICAgICBmaWxsPVwiIzAwRDRCRlwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTA3Ljk1MiA3MC4xMjQ4TDEwOS4zMjMgNjcuMDU3MUMxMDkuODIyIDY2LjI3MDYgMTA5Ljc1NiA2NS4zMDcgMTA5LjIwOSA2NC43NjA0QzEwOS4xMzcgNjQuNjg3NiAxMDkuMDU2IDY0LjYyMyAxMDguOTY5IDY0LjU2NzhDMTA4Ljc4MSA2NC40NTI4IDEwOC41NzEgNjQuMzc5OSAxMDguMzUyIDY0LjM1NDRDMTA4LjEzNCA2NC4zMjg5IDEwNy45MTIgNjQuMzUxNCAxMDcuNzAzIDY0LjQyMDJDMTA3LjIyOSA2NC41Njc4IDEwNi44MjMgNjQuODgxNSAxMDYuNTYxIDY1LjMwMzhDMTA2LjU2MSA2NS4zMDM4IDEwNC42ODUgNjkuNjgxOCAxMDMuOTg2IDcxLjY0OTdDMTAzLjI4OCA3My42MTc2IDEwMy41NjcgNzcuMjI2MiAxMDYuMjU5IDc5LjkyNDNDMTA5LjExNSA4Mi43Nzk5IDExMy4yNSA4My40MzI2IDExNS44ODcgODEuNDUzMkMxMTUuOTk3IDgxLjM5NzggMTE2LjEwMSA4MS4zMzAyIDExNi4xOTYgODEuMjUxN0wxMjQuMzIyIDc0LjQ2NjFDMTI0LjcxNyA3NC4xMzk3IDEyNS4zMDEgNzMuNDY3NCAxMjQuNzc2IDcyLjcwMDVDMTI0LjI2NSA3MS45NTIzIDEyMy4yOTYgNzIuNDYxNSAxMjIuOSA3Mi43MTQ0TDExOC4yMjMgNzYuMTE1QzExOC4yMDEgNzYuMTMzIDExOC4xNzYgNzYuMTQ2NSAxMTguMTQ5IDc2LjE1NDZDMTE4LjEyMiA3Ni4xNjI2IDExOC4wOTMgNzYuMTY1MSAxMTguMDY1IDc2LjE2MThDMTE4LjAzNyA3Ni4xNTg1IDExOC4wMDkgNzYuMTQ5NiAxMTcuOTg1IDc2LjEzNTVDMTE3Ljk2IDc2LjEyMTQgMTE3LjkzOSA3Ni4xMDI1IDExNy45MjEgNzYuMDc5OUMxMTcuODAyIDc1LjkzMzggMTE3Ljc4MSA3NS41NDcxIDExNy45NjggNzUuMzkzN0wxMjUuMTM3IDY5LjMwOTdDMTI1Ljc1NiA2OC43NTE3IDEyNS44NDMgNjcuOTQwNyAxMjUuMzQxIDY3LjM4NTFDMTI0Ljg1MSA2Ni44NDA5IDEyNC4wNzQgNjYuODU3MiAxMjMuNDQ5IDY3LjQyMDFMMTE2Ljk5NSA3Mi40NjYzQzExNi45NjQgNzIuNDkxIDExNi45MjkgNzIuNTA5MiAxMTYuODkyIDcyLjUxOTlDMTE2Ljg1NCA3Mi41MzA1IDExNi44MTUgNzIuNTMzNCAxMTYuNzc3IDcyLjUyODRDMTE2LjczOCA3Mi41MjMzIDExNi43MDEgNzIuNTEwNSAxMTYuNjY3IDcyLjQ5MDVDMTE2LjYzNCA3Mi40NzA2IDExNi42MDUgNzIuNDQ0MSAxMTYuNTgyIDcyLjQxMjVDMTE2LjQ1NCA3Mi4yNjk3IDExNi40MDUgNzIuMDI1OCAxMTYuNTQ5IDcxLjg4M0wxMjMuODU5IDY0Ljc4ODlDMTI0LjEzNiA2NC41MzA2IDEyNC4yOTkgNjQuMTczIDEyNC4zMTMgNjMuNzk0NUMxMjQuMzI2IDYzLjQxNjEgMTI0LjE4OSA2My4wNDc4IDEyMy45MzEgNjIuNzcwNUMxMjMuODAzIDYyLjYzNTggMTIzLjY0OSA2Mi41Mjg2IDEyMy40NzkgNjIuNDU1NUMxMjMuMzA4IDYyLjM4MjQgMTIzLjEyNCA2Mi4zNDUgMTIyLjkzOCA2Mi4zNDU0QzEyMi41NTYgNjIuMzQxMiAxMjIuMTg3IDYyLjQ4NzggMTIxLjkxMiA2Mi43NTMzTDExNC40NDIgNjkuNzY5OUMxMTQuMjY0IDY5Ljk0ODUgMTEzLjkxNCA2OS43Njk5IDExMy44NzEgNjkuNTYxQzExMy44NjQgNjkuNTIzNiAxMTMuODY1IDY5LjQ4NDkgMTEzLjg3NyA2OS40NDg0QzExMy44ODggNjkuNDEyIDExMy45MDggNjkuMzc4OCAxMTMuOTM1IDY5LjM1MjFMMTE5LjY1MyA2Mi44NDIzQzExOS43OTEgNjIuNzEzNCAxMTkuOTAyIDYyLjU1OCAxMTkuOTc5IDYyLjM4NTRDMTIwLjA1NiA2Mi4yMTI4IDEyMC4wOTcgNjIuMDI2NSAxMjAuMSA2MS44Mzc1QzEyMC4xMDQgNjEuNjQ4NiAxMjAuMDY5IDYxLjQ2MDkgMTE5Ljk5OSA2MS4yODU2QzExOS45MjggNjEuMTEwMyAxMTkuODIzIDYwLjk1MSAxMTkuNjkgNjAuODE3MkMxMTkuNTU2IDYwLjY4MzMgMTE5LjM5NyA2MC41Nzc3IDExOS4yMjIgNjAuNTA2NUMxMTkuMDQ3IDYwLjQzNTQgMTE4Ljg2IDYwLjQwMDIgMTE4LjY3MSA2MC40MDNDMTE4LjQ4MiA2MC40MDU4IDExOC4yOTUgNjAuNDQ2NiAxMTguMTIyIDYwLjUyM0MxMTcuOTQ5IDYwLjU5OTMgMTE3Ljc5NCA2MC43MDk3IDExNy42NjQgNjAuODQ3NEwxMDguOTk0IDcwLjQzMzJDMTA4LjY4MyA3MC43NDQgMTA4LjIyNSA3MC43NTk1IDEwOC4wMDggNzAuNTc5MkMxMDcuOTQxIDcwLjUyNTkgMTA3Ljg5NyA3MC40NDg0IDEwNy44ODcgNzAuMzYzNEMxMDcuODc2IDcwLjI3ODMgMTA3LjkgNzAuMTkyNyAxMDcuOTUyIDcwLjEyNDhaXCJcclxuXHRcdFx0ZmlsbD1cIndoaXRlXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjE1NVwiIHk9XCI0NFwiIHdpZHRoPVwiNTZcIiBoZWlnaHQ9XCI1NlwiIHJ4PVwiNFwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTIwMC44NDkgNTcuMTUwN0MxOTYuOTExIDUzLjIxMjUgMTkxLjU3IDUxIDE4NiA1MUMxNzQuNDEgNTEgMTY1IDYwLjQwOTggMTY1IDcyQzE2NSA4My41OTAyIDE3NC40MSA5MyAxODYgOTNDMTkxLjU3IDkzIDE5Ni45MTEgOTAuNzg3NSAyMDAuODQ5IDg2Ljg0OTNMMTk2LjM5NCA4Mi4zOTQ1QzE5My42MzggODUuMTUxMyAxODkuODk5IDg2LjcgMTg2IDg2LjdDMTc3Ljg4NyA4Ni43IDE3MS4zIDgwLjExMzEgMTcxLjMgNzJDMTcxLjMgNjMuODg2OSAxNzcuODg3IDU3LjMgMTg2IDU3LjNDMTg5Ljg5OSA1Ny4zIDE5My42MzggNTguODQ4NyAxOTYuMzk0IDYxLjYwNTVMMjAwLjg0OSA1Ny4xNTA3WlwiXHJcblx0XHQgICAgICBmaWxsPVwiI0ZGQUIwMFwiLz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTE3MS4xNSA4Ni44NDk0QzE3NS4wODkgOTAuNzg3NyAxODAuNDMgOTMuMDAwMiAxODYgOTMuMDAwMkMxOTEuNTY5IDkzLjAwMDIgMTk2LjkxMSA5MC43ODc3IDIwMC44NDkgODYuODQ5NEwxOTYuMzk0IDgyLjM5NDdDMTkzLjYzNyA4NS4xNTE0IDE4OS44OTggODYuNzAwMiAxODYgODYuNzAwMkMxODIuMTAxIDg2LjcwMDIgMTc4LjM2MiA4NS4xNTE0IDE3NS42MDUgODIuMzk0N0wxNzEuMTUgODYuODQ5NFpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiNGRkM0MDBcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTE3OS42OTkgNzUuMTUwMUMxODEuNDM4IDc1LjE1MDEgMTgyLjg0OSA3My43Mzk4IDE4Mi44NDkgNzIuMDAwMUMxODIuODQ5IDcwLjI2MDQgMTgxLjQzOCA2OC44NTAxIDE3OS42OTkgNjguODUwMUMxNzcuOTU5IDY4Ljg1MDEgMTc2LjU0OSA3MC4yNjA0IDE3Ni41NDkgNzIuMDAwMUMxNzYuNTQ5IDczLjczOTggMTc3Ljk1OSA3NS4xNTAxIDE3OS42OTkgNzUuMTUwMVpcIlxyXG5cdFx0XHRmaWxsPVwiI0ZGQUIwMFwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTkyLjMgNzUuMTUwMUMxOTQuMDQgNzUuMTUwMSAxOTUuNDUgNzMuNzM5OCAxOTUuNDUgNzIuMDAwMUMxOTUuNDUgNzAuMjYwNCAxOTQuMDQgNjguODUwMSAxOTIuMyA2OC44NTAxQzE5MC41NjEgNjguODUwMSAxODkuMTUgNzAuMjYwNCAxODkuMTUgNzIuMDAwMUMxODkuMTUgNzMuNzM5OCAxOTAuNTYxIDc1LjE1MDEgMTkyLjMgNzUuMTUwMVpcIlxyXG5cdFx0XHRmaWxsPVwiI0ZGQUIwMFwiLz5cclxuXHRcdDxyZWN0IHg9XCIyMjNcIiB5PVwiNDRcIiB3aWR0aD1cIjU2XCIgaGVpZ2h0PVwiNTZcIiByeD1cIjRcIiBmaWxsPVwid2hpdGVcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTI2OS4zMzUgNzMuODI1OUwyNjMuODAzIDcwLjY1MzVMMjYyLjg0OSA3MC4yNDA4TDI0MC4yMTcgNzAuMzk1NlY4MS44ODU3SDI2OS4zMzVWNzMuODI1OVpcIlxyXG5cdFx0XHRmaWxsPVwid2hpdGVcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTI1OS4yNjYgODAuODI3OUMyNTkuNTM3IDc5Ljg5OTQgMjU5LjQzNCA3OS4wNDgzIDI1OC45ODMgNzguNDE2NEMyNTguNTcgNzcuODM2MSAyNTcuODc0IDc3LjUwMDggMjU3LjAzNSA3Ny40NjIxTDI0MS4xNjEgNzcuMjU1OEMyNDEuMDU4IDc3LjI1NTggMjQwLjk2NyA3Ny4yMDQyIDI0MC45MTYgNzcuMTI2OEMyNDAuODY0IDc3LjA0OTUgMjQwLjg1MSA3Ni45NDYzIDI0MC44NzcgNzYuODQzMUMyNDAuOTI5IDc2LjY4ODQgMjQxLjA4MyA3Ni41NzIzIDI0MS4yNTEgNzYuNTU5NEwyNTcuMjY3IDc2LjM1MzFDMjU5LjE2MyA3Ni4yNjI4IDI2MS4yMjYgNzQuNzI4MiAyNjEuOTQ5IDcyLjg0NTRMMjYyLjg2NCA3MC40NTk3QzI2Mi45MDMgNzAuMzU2NiAyNjIuOTE2IDcwLjI1MzQgMjYyLjg5IDcwLjE1MDJDMjYxLjg1OCA2NS40ODIgMjU3LjY5MyA2Mi4wMDAxIDI1Mi43MTUgNjIuMDAwMUMyNDguMTI0IDYyLjAwMDEgMjQ0LjIzIDY0Ljk2NjEgMjQyLjgzNyA2OS4wNzk5QzI0MS45MzQgNjguNDA5MyAyNDAuNzg3IDY4LjA0ODIgMjM5LjU0OSA2OC4xNjQzQzIzNy4zNDQgNjguMzgzNSAyMzUuNTc3IDcwLjE1MDIgMjM1LjM1OCA3Mi4zNTU0QzIzNS4zMDYgNzIuOTIyOCAyMzUuMzQ1IDczLjQ3NzMgMjM1LjQ3NCA3My45OTMyQzIzMS44NzYgNzQuMDk2MyAyMjkgNzcuMDM2NiAyMjkgODAuNjYwM0MyMjkgODAuOTgyNyAyMjkuMDI2IDgxLjMwNTEgMjI5LjA2NCA4MS42Mjc0QzIyOS4wOSA4MS43ODIyIDIyOS4yMTkgODEuODk4MyAyMjkuMzc0IDgxLjg5ODNIMjU4LjY3M0MyNTguODQxIDgxLjg5ODMgMjU4Ljk5NiA4MS43ODIyIDI1OS4wNDcgODEuNjE0NkwyNTkuMjY2IDgwLjgyNzlaXCJcclxuXHRcdFx0ZmlsbD1cIiNGMzgwMjBcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTI2NC4zMjEgNzAuNjI3NkMyNjQuMTc5IDcwLjYyNzYgMjY0LjAyNCA3MC42Mjc2IDI2My44ODIgNzAuNjQwNUMyNjMuNzc5IDcwLjY0MDUgMjYzLjY4OSA3MC43MTc4IDI2My42NSA3MC44MjFMMjYzLjAzMSA3Mi45NzQ2QzI2Mi43NiA3My45MDMxIDI2Mi44NjMgNzQuNzU0MiAyNjMuMzE1IDc1LjM4NjFDMjYzLjcyNyA3NS45NjY0IDI2NC40MjQgNzYuMzAxNyAyNjUuMjYyIDc2LjM0MDRMMjY4LjY0MSA3Ni41NDY3QzI2OC43NDQgNzYuNTQ2NyAyNjguODM0IDc2LjU5ODMgMjY4Ljg4NiA3Ni42NzU3QzI2OC45MzcgNzYuNzUzIDI2OC45NSA3Ni44NjkxIDI2OC45MjQgNzYuOTU5NEMyNjguODczIDc3LjExNDEgMjY4LjcxOCA3Ny4yMzAyIDI2OC41NSA3Ny4yNDMxTDI2NS4wMyA3Ny40NDk0QzI2My4xMjEgNzcuNTM5NyAyNjEuMDcxIDc5LjA3NDMgMjYwLjM0OSA4MC45NTcxTDI2MC4wOTEgODEuNjE0N0MyNjAuMDM5IDgxLjc0MzcgMjYwLjEzIDgxLjg3MjcgMjYwLjI3MSA4MS44NzI3SDI3Mi4zNjhDMjcyLjUwOSA4MS44NzI3IDI3Mi42MzggODEuNzgyNCAyNzIuNjc3IDgxLjY0MDVDMjcyLjg4MyA4MC44OTI2IDI3Mi45OTkgODAuMTA1OSAyNzIuOTk5IDc5LjI5MzVDMjcyLjk5OSA3NC41MjIxIDI2OS4xMDUgNzAuNjI3NiAyNjQuMzIxIDcwLjYyNzZaXCJcclxuXHRcdFx0ZmlsbD1cIiNGQUFFNDBcIi8+XHJcblx0PC9zdmc+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmV2aWV3OyIsImltcG9ydCBQbHVnaW5DYXB0Y2hhIGZyb20gJy4vcmVuZGVyJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlRWZmZWN0LFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VNZXRhU3RhdGUsXHJcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuZnVuY3Rpb24gUmVuZGVyUGx1Z2luKCkge1xyXG5cdGNvbnN0IFsgYXJncywgc2V0QXJncyBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX3JlY2FwdGNoYScgKTtcclxuXHJcblx0LyogQmFja3dhcmQgY29tcGF0aWJpbGl0eSAqL1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggIWFyZ3MuZW5hYmxlZCB8fCBhcmdzLmhhc093blByb3BlcnR5KCAnY2FwdGNoYScgKSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0QXJncyggcHJldiA9PiB7XHJcblx0XHRcdGRlbGV0ZSBwcmV2LmVuYWJsZWQ7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNhcHRjaGE6ICdnb29nbGUnLFxyXG5cdFx0XHRcdGdvb2dsZToge1xyXG5cdFx0XHRcdFx0dXNlX2dsb2JhbDogcHJldi51c2VfZ2xvYmFsLFxyXG5cdFx0XHRcdFx0a2V5OiBwcmV2LmtleSxcclxuXHRcdFx0XHRcdHNlY3JldDogcHJldi5zZWNyZXQsXHJcblx0XHRcdFx0XHR0aHJlc2hvbGQ6IHByZXYudGhyZXNob2xkLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH07XHJcblx0XHR9ICk7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW10gKTtcclxuXHJcblx0cmV0dXJuIDxQbHVnaW5DYXB0Y2hhLz47XHJcbn1cclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHJlbmRlcjogUmVuZGVyUGx1Z2luLFxyXG5cdGljb246ICdmaWx0ZXInLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGJhc2U6IHtcclxuXHRcdG5hbWU6ICdqZi1jYXB0Y2hhLXBhbmVsJyxcclxuXHRcdHRpdGxlOiBfXyggJ0NhcHRjaGEgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHR9LFxyXG5cdHNldHRpbmdzLFxyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgVG9vbHMsXHJcblx0ICAgICAgZ2V0Q2FwdGNoYVByb3ZpZGVycyxcclxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHsgZ2xvYmFsVGFiIH0gPSBKZXRGQkFjdGlvbnM7XHJcbmNvbnN0IGN1cnJlbnRUYWIgICAgPSBnbG9iYWxUYWIoIHsgc2x1ZzogJ2NhcHRjaGEtdGFiJyB9ICk7XHJcbmNvbnN0IGNhcHRjaGFJdGVtcyAgPSBUb29scy53aXRoUGxhY2Vob2xkZXIoXHJcblx0Z2V0Q2FwdGNoYVByb3ZpZGVycygpLFxyXG5cdF9fKCAnV2l0aG91dCBwcm90ZWN0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbik7XHJcblxyXG5leHBvcnQgeyBjYXB0Y2hhSXRlbXMsIGN1cnJlbnRUYWIgfTsiLCJpbXBvcnQgeyBjYXB0Y2hhSXRlbXMgfSBmcm9tICcuL29wdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZU1ldGFTdGF0ZSxcclxuICAgICAgfSA9IEpldEZCSG9va3M7XHJcbmNvbnN0IHtcclxuXHQgICAgICBDYXB0Y2hhT3B0aW9ucyxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuY29uc3Qge1xyXG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXHJcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gUGx1Z2luQ2FwdGNoYSgpIHtcclxuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9yZWNhcHRjaGEnICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBfXyggJ0NhcHRjaGEgUHJvdmlkZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdHZhbHVlPXsgYXJncy5jYXB0Y2hhIH1cclxuXHRcdFx0b3B0aW9ucz17IGNhcHRjaGFJdGVtcyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgY2FwdGNoYSA9PiB7XHJcblx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+IChcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdGNhcHRjaGEsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7IEJvb2xlYW4oIGFyZ3MuY2FwdGNoYSApICYmIChcclxuXHRcdFx0PENhcHRjaGFPcHRpb25zLlNsb3QgZmlsbFByb3BzPXsgeyBhcmdzLCBzZXRBcmdzIH0gfS8+XHJcblx0XHQpIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsdWdpbkNhcHRjaGE7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGNhcHRjaGFCbG9jayBmcm9tICcuL2NhcHRjaGEtY29udGFpbmVyLWJsb2NrJztcclxuaW1wb3J0IGNhcHRjaGFQbHVnaW4gZnJvbSAnLi9jYXB0Y2hhLXBsdWdpbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG4gICAgICB9ID0gd3AuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZWdpc3Rlci5maWVsZHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhcHRjaGEnLFxyXG5cdGZ1bmN0aW9uICggYmxvY2tzICkge1xyXG5cdFx0YmxvY2tzLnB1c2goIGNhcHRjaGFCbG9jayApO1xyXG5cclxuXHRcdHJldHVybiBibG9ja3M7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlZ2lzdGVyLnBsdWdpbi5qZi12YWxpZGF0aW9uLXBhbmVsLmFmdGVyJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jYXB0Y2hhJyxcclxuXHRmdW5jdGlvbiAoIHBsdWdpbnMgKSB7XHJcblx0XHRwbHVnaW5zLnB1c2goIGNhcHRjaGFQbHVnaW4gKTtcclxuXHJcblx0XHRyZXR1cm4gcGx1Z2lucztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==