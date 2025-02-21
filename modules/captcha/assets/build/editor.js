/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ }),

/***/ "../../blocks-metadata/captcha-container/block.json":
/*!**********************************************************!*\
  !*** ../../blocks-metadata/captcha-container/block.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/captcha-container","category":"jet-form-builder-fields","keywords":["jetformbuilder","captcha","recaptcha","hcaptcha","spam","protection"],"textdomain":"jet-form-builder","supports":{"html":false,"multiple":false},"title":"Captcha Container","description":"","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path d=\\"M47.27 44.0925L39.005 52.3575L33.8575 47.1738L35.4525 45.5788L39.1138 49.24L45.7475 42.6063L47.27 44.0925Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M49.0141 56H55C57.2091 56 59 54.2091 59 52V6C59 3.79086 57.2091 2 55 2H9C6.79086 2 5 3.79086 5 6V52C5 54.2091 6.79086 56 9 56H32.1858C32.2112 56.0365 32.2368 56.073 32.2625 56.1094C34.4375 59.1906 37.1167 61.1542 40.5 62C43.8833 61.1542 46.7625 59.1906 48.9375 56.1094C48.9632 56.073 48.9887 56.0365 49.0141 56ZM55 4H9C7.89543 4 7 4.89543 7 6V52C7 53.1046 7.89543 54 9 54H30.9676C29.6559 51.5044 29 49 29 45.9775V38.0409C29 37.6251 29.2573 37.2527 29.6462 37.1056L40.1401 33.1361C40.3718 33.0485 40.6277 33.05 40.8583 33.1402L51.3644 37.2513C51.7477 37.4013 52 37.7709 52 38.1825V46C52 49 51.4652 51.5113 50.2083 54H55C56.1046 54 57 53.1046 57 52V6C57 4.89543 56.1046 4 55 4ZM47.3969 54.5506C45.6448 57.1002 43.2792 59.0817 40.5 60C37.7208 59.0817 35.5552 57.1002 33.8031 54.5506C32.051 52.001 31 49.1658 31 46V39L40.5 35L50.025 39V45.9775C50.025 49.1433 49.149 52.001 47.3969 54.5506Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"provider":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}}}');

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaklBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9lZGl0b3IvY2FwdGNoYS1jb250YWluZXItYmxvY2svZWRpdC5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2VkaXRvci9jYXB0Y2hhLWNvbnRhaW5lci1ibG9jay9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2VkaXRvci9jYXB0Y2hhLWNvbnRhaW5lci1ibG9jay9wcmV2aWV3LmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yL2NhcHRjaGEtcGx1Z2luL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yL2NhcHRjaGEtcGx1Z2luL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9lZGl0b3IvY2FwdGNoYS1wbHVnaW4vcmVuZGVyLmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2VkaXRvci9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5hbWUgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBwcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQ2FwdGNoYUJsb2NrRWRpdCxcblx0ICAgICAgU2VsZWN0VmFyaWF0aW9ucyxcblx0ICAgICAgVG9nZ2xlR3JvdXBWYXJpYXRpb25zLFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICB1c2VNZXRhU3RhdGUsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHQgICAgICBJbnNwZWN0b3JDb250cm9scyxcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICB1c2VFZmZlY3QsXG5cdCAgICAgIHVzZVN0YXRlLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmxldCB7XG5cdCAgICBfX2V4cGVyaW1lbnRhbEJsb2NrVmFyaWF0aW9uUGlja2VyLFxuXHQgICAgQmxvY2tWYXJpYXRpb25QaWNrZXIsXG5cdCAgICBCbG9ja0NvbnRyb2xzLFxuICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuQmxvY2tWYXJpYXRpb25QaWNrZXIgPSAoXG5cdEJsb2NrVmFyaWF0aW9uUGlja2VyIHx8IF9fZXhwZXJpbWVudGFsQmxvY2tWYXJpYXRpb25QaWNrZXJcbik7XG5cbmZ1bmN0aW9uIFBsYWNlaG9sZGVyKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIHNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0ICAgICAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3QgeyBibG9ja1R5cGUsIHZhcmlhdGlvbnMgfSA9IHVzZVNlbGVjdChcblx0XHQoIHNlbGVjdCApID0+IHtcblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0ICAgICAgZ2V0QmxvY2tWYXJpYXRpb25zLFxuXHRcdFx0XHQgICAgICBnZXRCbG9ja1R5cGUsXG5cdFx0XHQgICAgICB9ID0gc2VsZWN0KCAnY29yZS9ibG9ja3MnICk7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGJsb2NrVHlwZTogZ2V0QmxvY2tUeXBlKCBuYW1lICksXG5cdFx0XHRcdHZhcmlhdGlvbnM6IGdldEJsb2NrVmFyaWF0aW9ucyggbmFtZSwgJ2Jsb2NrJyApLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdFtdLFxuXHQpO1xuXG5cdGlmICggYXR0cmlidXRlcy5pc1ByZXZpZXcgKSB7XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9eyB7XG5cdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdH0gfT5cblx0XHRcdHsgcHJldmlldyB9XG5cdFx0PC9kaXY+O1xuXHR9XG5cblx0cmV0dXJuIDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0+XG5cdFx0PEJsb2NrVmFyaWF0aW9uUGlja2VyXG5cdFx0XHRsYWJlbD17IGJsb2NrVHlwZT8udGl0bGUgfVxuXHRcdFx0aW5zdHJ1Y3Rpb25zPXsgX18oICdTZWxlY3QgY2FwdGNoYSBwcm92aWRlcicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdHZhcmlhdGlvbnM9eyB2YXJpYXRpb25zIH1cblx0XHRcdG9uU2VsZWN0PXsgKCBuZXh0VmFyaWF0aW9uICkgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCBuZXh0VmFyaWF0aW9uLmF0dHJpYnV0ZXMgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdDwvZGl2Pjtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRDYXB0Y2hhQ29udGFpbmVyKCBwcm9wcyApIHtcblx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcblxuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSAgICAgICAgID0gdXNlTWV0YVN0YXRlKCAnX2pmX3JlY2FwdGNoYScgKTtcblx0Y29uc3QgWyBwcm92aWRlciwgc2V0UHJvdmlkZXIgXSA9IHVzZVN0YXRlKCAoKSA9PiBhdHRyaWJ1dGVzLnByb3ZpZGVyICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCBhdHRyaWJ1dGVzLmlzUHJldmlldyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0UHJvdmlkZXIoXG5cdFx0XHRwcmV2ID0+IGF0dHJpYnV0ZXMucHJvdmlkZXIgIT09IHByZXYgPyBhdHRyaWJ1dGVzLnByb3ZpZGVyIDogcHJldixcblx0XHQpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgWyBhdHRyaWJ1dGVzLnByb3ZpZGVyIF0gKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRpZiAoIGF0dHJpYnV0ZXMuaXNQcmV2aWV3ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzZXRQcm92aWRlcihcblx0XHRcdHByZXYgPT4gYXJncy5jYXB0Y2hhICE9PSBwcmV2ID8gYXJncy5jYXB0Y2hhIDogcHJldixcblx0XHQpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgWyBhcmdzLmNhcHRjaGEgXSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggYXR0cmlidXRlcy5pc1ByZXZpZXcgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNldEFyZ3MoIHByZXYgPT4ge1xuXHRcdFx0aWYgKCBwcm92aWRlciAhPT0gcHJldi5jYXB0Y2hhICkge1xuXHRcdFx0XHRhcmdzLmNhcHRjaGEgPSBwcm92aWRlcjtcblx0XHRcdFx0cmV0dXJuIHsgLi4ucHJldiwgY2FwdGNoYTogcHJvdmlkZXIgfTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByZXY7XG5cdFx0fSApO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgWyBwcm92aWRlciBdICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCBhdHRyaWJ1dGVzLmlzUHJldmlldyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCBwcm92aWRlciAhPT0gYXR0cmlidXRlcy5wcm92aWRlciApIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgcHJvdmlkZXIgfSApO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdH0sIFsgcHJvdmlkZXIgXSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxkaXYgc3R5bGU9eyB7IHBhZGRpbmc6ICcwIDIwcHggMjBweCAyMHB4JyB9IH0+XG5cdFx0XHRcdDxTZWxlY3RWYXJpYXRpb25zXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnByb3ZpZGVyIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHQ8VG9nZ2xlR3JvdXBWYXJpYXRpb25zXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5wcm92aWRlciB9XG5cdFx0XHQvPlxuXHRcdDwvQmxvY2tDb250cm9scz5cblx0XHR7ICFhdHRyaWJ1dGVzLnByb3ZpZGVyXG5cdFx0ICA/IDxQbGFjZWhvbGRlciB7IC4uLnByb3BzIH0gLz5cblx0XHQgIDogPENhcHRjaGFCbG9ja0VkaXQuU2xvdCBmaWxsUHJvcHM9eyBwcm9wcyB9Lz4gfVxuXHQ8Lz47XG59IiwiaW1wb3J0IEVkaXRDYXB0Y2hhQ29udGFpbmVyIGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnQGJsb2Nrcy9jYXB0Y2hhLWNvbnRhaW5lci9ibG9jay5qc29uJztcblxuY29uc3Qge1xuXHQgICAgICBuYW1lLFxuXHQgICAgICBpY29uLFxuICAgICAgfSA9IG1ldGFkYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGRlc2NyaXB0aW9uOiBfXyhcblx0XHRgSW5zZXJ0IHRoZSBjYXB0Y2hhIGZvciB5b3VyIGZvcm0uIERldGVybWluZSBpdHMgbG9jYXRpb24geW91cnNlbGYgdXNpbmcgdGhlIGJsb2NrLCBhcyBpcyBhZGRlZCBiZWZvcmUgdGhlIHN1Ym1pdCBidXR0b24gYnkgZGVmYXVsdC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0ZWRpdDogRWRpdENhcHRjaGFDb250YWluZXIsXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRpc1ByZXZpZXc6IHRydWUsXG5cdFx0fSxcblx0fSxcbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5ncyxcbn07XG4iLCJjb25zdCBwcmV2aWV3ID0gKFxuXHQ8c3ZnIHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgdmlld0JveD1cIjAgMCAyOTggMTQ0XCIgZmlsbD1cIm5vbmVcIlxuXHQgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8cmVjdCB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHJ4PVwiNFwiIGZpbGw9XCIjRTJFOEYwXCIvPlxuXHRcdDxyZWN0IHg9XCIxNVwiIHk9XCIyNlwiIHdpZHRoPVwiMjY4XCIgaGVpZ2h0PVwiOTJcIiByeD1cIjVcIiBmaWxsPVwiI0UyRThGMFwiLz5cblx0XHQ8cmVjdCB4PVwiMTlcIiB5PVwiNDRcIiB3aWR0aD1cIjU2XCIgaGVpZ2h0PVwiNTZcIiByeD1cIjRcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNNjUuMTkzNyA3MS41MTY3QzY1LjE5MjggNzEuMjUgNjUuMTg2NyA3MC45ODQ4IDY1LjE3NDcgNzAuNzIwOFY1NS42N0w2MS4wMTM4IDU5LjgzMDlDNTcuNjA4MyA1NS42NjI0IDUyLjQyNzcgNTMgNDYuNjI1IDUzQzQwLjU4NjIgNTMgMzUuMjIxNCA1NS44ODI0IDMxLjgzMDEgNjAuMzQ2M0wzOC42NTAzIDY3LjIzODNDMzkuMzE4NyA2Ni4wMDIyIDQwLjI2ODIgNjQuOTQwNCA0MS40MTMxIDY0LjEzODZDNDIuNjAzOCA2My4yMDk0IDQ0LjI5MDkgNjIuNDQ5NiA0Ni42MjQ3IDYyLjQ0OTZDNDYuOTA2NyA2Mi40NDk2IDQ3LjEyNDMgNjIuNDgyNiA0Ny4yODQyIDYyLjU0NDZDNTAuMTc1OCA2Mi43NzI5IDUyLjY4MjIgNjQuMzY4NyA1NC4xNTggNjYuNjg0OEw0OS4zMzAzIDcxLjUxMjZDNTUuNDQ1MiA3MS40ODg2IDYyLjM1MzEgNzEuNDc0NSA2NS4xOTMyIDcxLjUxNTdcIlxuXHRcdFx0ZmlsbD1cIiMxQzNBQTlcIi8+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNNDYuNTE2NyA1My4wMDA3QzQ2LjI1IDUzLjAwMTYgNDUuOTg0OCA1My4wMDc4IDQ1LjcyMDggNTMuMDE5N0gzMC42N0wzNC44MzA5IDU3LjE4MDdDMzAuNjYyNCA2MC41ODYxIDI4IDY1Ljc2NjggMjggNzEuNTY5NUMyOCA3Ny42MDgyIDMwLjg4MjUgODIuOTczIDM1LjM0NjMgODYuMzY0NEw0Mi4yMzgzIDc5LjU0NDFDNDEuMDAyMiA3OC44NzU3IDM5Ljk0MDQgNzcuOTI2MiAzOS4xMzg2IDc2Ljc4MTNDMzguMjA5NCA3NS41OTA2IDM3LjQ0OTYgNzMuOTAzNSAzNy40NDk2IDcxLjU2OTdDMzcuNDQ5NiA3MS4yODc4IDM3LjQ4MjYgNzEuMDcwMiAzNy41NDQ2IDcwLjkxMDNDMzcuNzcyOSA2OC4wMTg3IDM5LjM2ODcgNjUuNTEyMiA0MS42ODQ4IDY0LjAzNjRMNDYuNTEyNiA2OC44NjQxQzQ2LjQ4ODYgNjIuNzQ5MiA0Ni40NzQ0IDU1Ljg0MTMgNDYuNTE1NyA1My4wMDEzXCJcblx0XHRcdGZpbGw9XCIjNDI4NUY0XCIvPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTI4IDcxLjU2OTNDMjguMDAwOSA3MS44MzYgMjguMDA3IDcyLjEwMTMgMjguMDE5IDcyLjM2NTNWODcuNDE2MUwzMi4xNzk5IDgzLjI1NTJDMzUuNTg1NCA4Ny40MjM2IDQwLjc2NiA5MC4wODYxIDQ2LjU2ODggOTAuMDg2MUM1Mi42MDc1IDkwLjA4NjEgNTcuOTcyMyA4Ny4yMDM2IDYxLjM2MzYgODIuNzM5OEw1NC41NDM0IDc1Ljg0NzhDNTMuODc1IDc3LjA4MzkgNTIuOTI1NSA3OC4xNDU2IDUxLjc4MDYgNzguOTQ3NUM1MC41ODk5IDc5Ljg3NjcgNDguOTAyOCA4MC42MzY0IDQ2LjU2OSA4MC42MzY0QzQ2LjI4NyA4MC42MzY0IDQ2LjA2OTQgODAuNjAzNSA0NS45MDk1IDgwLjU0MTRDNDMuMDE4IDgwLjMxMzIgNDAuNTExNSA3OC43MTc0IDM5LjAzNTcgNzYuNDAxMkw0My44NjM0IDcxLjU3MzVDMzcuNzQ4NSA3MS41OTc1IDMwLjg0MDYgNzEuNjExNiAyOC4wMDA1IDcxLjU3MDRcIlxuXHRcdFx0ZmlsbD1cIiNBQkFCQUJcIi8+XG5cdFx0PHJlY3QgeD1cIjg3XCIgeT1cIjQ0XCIgd2lkdGg9XCI1NlwiIGhlaWdodD1cIjU2XCIgcng9XCI0XCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjVcIiBkPVwiTTExOS41OTYgODYuNDM0MUgxMjQuNTE1VjkxLjM1M0gxMTkuNTk2Vjg2LjQzNDFaXCJcblx0XHQgICAgICBmaWxsPVwiIzAwNzRCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC43XCJcblx0XHQgICAgICBkPVwiTTExNC42NzcgODYuNDM0MUgxMTkuNTk2VjkxLjM1M0gxMTQuNjc3Vjg2LjQzNDFaTTEwOS43NTggODYuNDM0MUgxMTQuNjc3VjkxLjM1M0gxMDkuNzU4Vjg2LjQzNDFaXCJcblx0XHQgICAgICBmaWxsPVwiIzAwNzRCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC41XCIgZD1cIk0xMDQuODM4IDg2LjQzNDFIMTA5Ljc1N1Y5MS4zNTNIMTA0LjgzOFY4Ni40MzQxWlwiXG5cdFx0ICAgICAgZmlsbD1cIiMwMDc0QkZcIi8+XG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuN1wiXG5cdFx0ICAgICAgZD1cIk0xMjQuNTE0IDgxLjUxNTFIMTI5LjQzM1Y4Ni40MzQxSDEyNC41MTRWODEuNTE1MVpcIlxuXHRcdCAgICAgIGZpbGw9XCIjMDA4MkJGXCIvPlxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjhcIlxuXHRcdCAgICAgIGQ9XCJNMTE5LjU5NCA4MS41MTUxSDEyNC41MTNWODYuNDM0MUgxMTkuNTk0VjgxLjUxNTFaXCJcblx0XHQgICAgICBmaWxsPVwiIzAwODJCRlwiLz5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0xMTQuNjc1IDgxLjUxNTFIMTE5LjU5NFY4Ni40MzQxSDExNC42NzVWODEuNTE1MVpNMTA5Ljc1NiA4MS41MTUxSDExNC42NzVWODYuNDM0MUgxMDkuNzU2VjgxLjUxNTFaXCJcblx0XHRcdGZpbGw9XCIjMDA4MkJGXCIvPlxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjhcIlxuXHRcdCAgICAgIGQ9XCJNMTA0LjgzOCA4MS41MTUxSDEwOS43NTdWODYuNDM0MUgxMDQuODM4VjgxLjUxNTFaXCJcblx0XHQgICAgICBmaWxsPVwiIzAwODJCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC43XCIgZD1cIk05OS45MTggODEuNTE1MkgxMDQuODM3Vjg2LjQzNDFIOTkuOTE4VjgxLjUxNTJaXCJcblx0XHQgICAgICBmaWxsPVwiIzAwODJCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC41XCJcblx0XHQgICAgICBkPVwiTTEyOS40MzQgNzYuNTk1MkgxMzQuMzUzVjgxLjUxNDFIMTI5LjQzNFY3Ni41OTUyWlwiXG5cdFx0ICAgICAgZmlsbD1cIiMwMDhGQkZcIi8+XG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuOFwiXG5cdFx0ICAgICAgZD1cIk0xMjQuNTE2IDc2LjU5NTJIMTI5LjQzNVY4MS41MTQxSDEyNC41MTZWNzYuNTk1MlpcIlxuXHRcdCAgICAgIGZpbGw9XCIjMDA4RkJGXCIvPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTExOS41OTUgNzYuNTk1MkgxMjQuNTE0VjgxLjUxNDFIMTE5LjU5NVY3Ni41OTUyWk0xMTQuNjc2IDc2LjU5NTJIMTE5LjU5NVY4MS41MTQxSDExNC42NzZWNzYuNTk1MlpNMTA5Ljc1NyA3Ni41OTUySDExNC42NzZWODEuNTE0MUgxMDkuNzU3Vjc2LjU5NTJaTTEwNC44MzggNzYuNTk1MkgxMDkuNzU3VjgxLjUxNDFIMTA0LjgzOFY3Ni41OTUyWlwiXG5cdFx0XHRmaWxsPVwiIzAwOEZCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC44XCIgZD1cIk05OS45MTggNzYuNTk1MkgxMDQuODM3VjgxLjUxNDFIOTkuOTE4Vjc2LjU5NTJaXCJcblx0XHQgICAgICBmaWxsPVwiIzAwOEZCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC41XCIgZD1cIk05NSA3Ni41OTU0SDk5LjkxODlWODEuNTE0M0g5NVY3Ni41OTU0WlwiXG5cdFx0ICAgICAgZmlsbD1cIiMwMDhGQkZcIi8+XG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuN1wiXG5cdFx0ICAgICAgZD1cIk0xMjkuNDM0IDcxLjY3NjNIMTM0LjM1M1Y3Ni41OTUySDEyOS40MzRWNzEuNjc2M1pcIlxuXHRcdCAgICAgIGZpbGw9XCIjMDA5REJGXCIvPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTEyNC41MTQgNzEuNjc2M0gxMjkuNDMzVjc2LjU5NTJIMTI0LjUxNFY3MS42NzYzWk0xMTkuNTk0IDcxLjY3NjNIMTI0LjUxM1Y3Ni41OTUySDExOS41OTRWNzEuNjc2M1pNMTE0LjY3NiA3MS42NzYzSDExOS41OTRWNzYuNTk1MkgxMTQuNjc2VjcxLjY3NjNaTTEwOS43NTcgNzEuNjc2M0gxMTQuNjc2Vjc2LjU5NTJIMTA5Ljc1N1Y3MS42NzYzWk0xMDQuODM4IDcxLjY3NjNIMTA5Ljc1N1Y3Ni41OTUySDEwNC44MzhWNzEuNjc2M1pNOTkuOTE4IDcxLjY3NjNIMTA0LjgzN1Y3Ni41OTUySDk5LjkxOFY3MS42NzYzWlwiXG5cdFx0XHRmaWxsPVwiIzAwOURCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC43XCIgZD1cIk05NSA3MS42NzY1SDk5LjkxODlWNzYuNTk1NEg5NVY3MS42NzY1WlwiXG5cdFx0ICAgICAgZmlsbD1cIiMwMDlEQkZcIi8+XG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuN1wiXG5cdFx0ICAgICAgZD1cIk0xMjkuNDM0IDY2Ljc1NzNIMTM0LjM1M1Y3MS42NzYzSDEyOS40MzRWNjYuNzU3M1pcIlxuXHRcdCAgICAgIGZpbGw9XCIjMDBBQkJGXCIvPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTEyNC41MTQgNjYuNzU3M0gxMjkuNDMzVjcxLjY3NjNIMTI0LjUxNFY2Ni43NTczWk0xMTkuNTk0IDY2Ljc1NzNIMTI0LjUxM1Y3MS42NzYzSDExOS41OTRWNjYuNzU3M1pNMTE0LjY3NiA2Ni43NTczSDExOS41OTRWNzEuNjc2M0gxMTQuNjc2VjY2Ljc1NzNaTTEwOS43NTcgNjYuNzU3M0gxMTQuNjc2VjcxLjY3NjNIMTA5Ljc1N1Y2Ni43NTczWk0xMDQuODM4IDY2Ljc1NzNIMTA5Ljc1N1Y3MS42NzYzSDEwNC44MzhWNjYuNzU3M1pNOTkuOTE4IDY2Ljc1NzNIMTA0LjgzN1Y3MS42NzYzSDk5LjkxOFY2Ni43NTczWlwiXG5cdFx0XHRmaWxsPVwiIzAwQUJCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC43XCIgZD1cIk05NSA2Ni43NTc2SDk5LjkxODlWNzEuNjc2NUg5NVY2Ni43NTc2WlwiXG5cdFx0ICAgICAgZmlsbD1cIiMwMEFCQkZcIi8+XG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuNVwiXG5cdFx0ICAgICAgZD1cIk0xMjkuNDM0IDYxLjgzODlIMTM0LjM1M1Y2Ni43NTc4SDEyOS40MzRWNjEuODM4OVpcIlxuXHRcdCAgICAgIGZpbGw9XCIjMDBCOUJGXCIvPlxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjhcIlxuXHRcdCAgICAgIGQ9XCJNMTI0LjUxNiA2MS44Mzg5SDEyOS40MzVWNjYuNzU3OEgxMjQuNTE2VjYxLjgzODlaXCJcblx0XHQgICAgICBmaWxsPVwiIzAwQjlCRlwiLz5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0xMTkuNTk1IDYxLjgzODlIMTI0LjUxNFY2Ni43NTc4SDExOS41OTVWNjEuODM4OVpNMTE0LjY3NiA2MS44Mzg5SDExOS41OTVWNjYuNzU3OEgxMTQuNjc2VjYxLjgzODlaTTEwOS43NTcgNjEuODM4OUgxMTQuNjc2VjY2Ljc1NzhIMTA5Ljc1N1Y2MS44Mzg5Wk0xMDQuODM4IDYxLjgzODlIMTA5Ljc1N1Y2Ni43NTc4SDEwNC44MzhWNjEuODM4OVpcIlxuXHRcdFx0ZmlsbD1cIiMwMEI5QkZcIi8+XG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuOFwiIGQ9XCJNOTkuOTE4IDYxLjgzODlIMTA0LjgzN1Y2Ni43NTc4SDk5LjkxOFY2MS44Mzg5WlwiXG5cdFx0ICAgICAgZmlsbD1cIiMwMEI5QkZcIi8+XG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuNVwiIGQ9XCJNOTUgNjEuODM4Nkg5OS45MTg5VjY2Ljc1NzZIOTVWNjEuODM4NlpcIlxuXHRcdCAgICAgIGZpbGw9XCIjMDBCOUJGXCIvPlxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjdcIlxuXHRcdCAgICAgIGQ9XCJNMTI0LjUxNiA1Ni45MTg5SDEyOS40MzVWNjEuODM3OUgxMjQuNTE2VjU2LjkxODlaXCJcblx0XHQgICAgICBmaWxsPVwiIzAwQzZCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC44XCJcblx0XHQgICAgICBkPVwiTTExOS41OTYgNTYuOTE4OUgxMjQuNTE1VjYxLjgzNzlIMTE5LjU5NlY1Ni45MTg5WlwiXG5cdFx0ICAgICAgZmlsbD1cIiMwMEM2QkZcIi8+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNMTE0LjY3NyA1Ni45MTg5SDExOS41OTZWNjEuODM3OEgxMTQuNjc3VjU2LjkxODlaTTEwOS43NTggNTYuOTE4OUgxMTQuNjc3VjYxLjgzNzhIMTA5Ljc1OFY1Ni45MTg5WlwiXG5cdFx0XHRmaWxsPVwiIzAwQzZCRlwiLz5cblx0XHQ8cGF0aCBvcGFjaXR5PVwiMC44XCJcblx0XHQgICAgICBkPVwiTTEwNC44MzggNTYuOTE4OUgxMDkuNzU3VjYxLjgzNzlIMTA0LjgzOFY1Ni45MTg5WlwiXG5cdFx0ICAgICAgZmlsbD1cIiMwMEM2QkZcIi8+XG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuN1wiIGQ9XCJNOTkuOTE4IDU2LjkxODlIMTA0LjgzN1Y2MS44Mzc5SDk5LjkxOFY1Ni45MTg5WlwiXG5cdFx0ICAgICAgZmlsbD1cIiMwMEM2QkZcIi8+XG5cdFx0PHBhdGggb3BhY2l0eT1cIjAuNVwiIGQ9XCJNMTE5LjU5NiA1MkgxMjQuNTE1VjU2LjkxODlIMTE5LjU5NlY1MlpcIlxuXHRcdCAgICAgIGZpbGw9XCIjMDBENEJGXCIvPlxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjdcIlxuXHRcdCAgICAgIGQ9XCJNMTE0LjY3NyA1MkgxMTkuNTk2VjU2LjkxODlIMTE0LjY3N1Y1MlpNMTA5Ljc1OCA1MkgxMTQuNjc3VjU2LjkxODlIMTA5Ljc1OFY1MlpcIlxuXHRcdCAgICAgIGZpbGw9XCIjMDBENEJGXCIvPlxuXHRcdDxwYXRoIG9wYWNpdHk9XCIwLjVcIiBkPVwiTTEwNC44MzggNTJIMTA5Ljc1N1Y1Ni45MTg5SDEwNC44MzhWNTJaXCJcblx0XHQgICAgICBmaWxsPVwiIzAwRDRCRlwiLz5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0xMDcuOTUyIDcwLjEyNDhMMTA5LjMyMyA2Ny4wNTcxQzEwOS44MjIgNjYuMjcwNiAxMDkuNzU2IDY1LjMwNyAxMDkuMjA5IDY0Ljc2MDRDMTA5LjEzNyA2NC42ODc2IDEwOS4wNTYgNjQuNjIzIDEwOC45NjkgNjQuNTY3OEMxMDguNzgxIDY0LjQ1MjggMTA4LjU3MSA2NC4zNzk5IDEwOC4zNTIgNjQuMzU0NEMxMDguMTM0IDY0LjMyODkgMTA3LjkxMiA2NC4zNTE0IDEwNy43MDMgNjQuNDIwMkMxMDcuMjI5IDY0LjU2NzggMTA2LjgyMyA2NC44ODE1IDEwNi41NjEgNjUuMzAzOEMxMDYuNTYxIDY1LjMwMzggMTA0LjY4NSA2OS42ODE4IDEwMy45ODYgNzEuNjQ5N0MxMDMuMjg4IDczLjYxNzYgMTAzLjU2NyA3Ny4yMjYyIDEwNi4yNTkgNzkuOTI0M0MxMDkuMTE1IDgyLjc3OTkgMTEzLjI1IDgzLjQzMjYgMTE1Ljg4NyA4MS40NTMyQzExNS45OTcgODEuMzk3OCAxMTYuMTAxIDgxLjMzMDIgMTE2LjE5NiA4MS4yNTE3TDEyNC4zMjIgNzQuNDY2MUMxMjQuNzE3IDc0LjEzOTcgMTI1LjMwMSA3My40Njc0IDEyNC43NzYgNzIuNzAwNUMxMjQuMjY1IDcxLjk1MjMgMTIzLjI5NiA3Mi40NjE1IDEyMi45IDcyLjcxNDRMMTE4LjIyMyA3Ni4xMTVDMTE4LjIwMSA3Ni4xMzMgMTE4LjE3NiA3Ni4xNDY1IDExOC4xNDkgNzYuMTU0NkMxMTguMTIyIDc2LjE2MjYgMTE4LjA5MyA3Ni4xNjUxIDExOC4wNjUgNzYuMTYxOEMxMTguMDM3IDc2LjE1ODUgMTE4LjAwOSA3Ni4xNDk2IDExNy45ODUgNzYuMTM1NUMxMTcuOTYgNzYuMTIxNCAxMTcuOTM5IDc2LjEwMjUgMTE3LjkyMSA3Ni4wNzk5QzExNy44MDIgNzUuOTMzOCAxMTcuNzgxIDc1LjU0NzEgMTE3Ljk2OCA3NS4zOTM3TDEyNS4xMzcgNjkuMzA5N0MxMjUuNzU2IDY4Ljc1MTcgMTI1Ljg0MyA2Ny45NDA3IDEyNS4zNDEgNjcuMzg1MUMxMjQuODUxIDY2Ljg0MDkgMTI0LjA3NCA2Ni44NTcyIDEyMy40NDkgNjcuNDIwMUwxMTYuOTk1IDcyLjQ2NjNDMTE2Ljk2NCA3Mi40OTEgMTE2LjkyOSA3Mi41MDkyIDExNi44OTIgNzIuNTE5OUMxMTYuODU0IDcyLjUzMDUgMTE2LjgxNSA3Mi41MzM0IDExNi43NzcgNzIuNTI4NEMxMTYuNzM4IDcyLjUyMzMgMTE2LjcwMSA3Mi41MTA1IDExNi42NjcgNzIuNDkwNUMxMTYuNjM0IDcyLjQ3MDYgMTE2LjYwNSA3Mi40NDQxIDExNi41ODIgNzIuNDEyNUMxMTYuNDU0IDcyLjI2OTcgMTE2LjQwNSA3Mi4wMjU4IDExNi41NDkgNzEuODgzTDEyMy44NTkgNjQuNzg4OUMxMjQuMTM2IDY0LjUzMDYgMTI0LjI5OSA2NC4xNzMgMTI0LjMxMyA2My43OTQ1QzEyNC4zMjYgNjMuNDE2MSAxMjQuMTg5IDYzLjA0NzggMTIzLjkzMSA2Mi43NzA1QzEyMy44MDMgNjIuNjM1OCAxMjMuNjQ5IDYyLjUyODYgMTIzLjQ3OSA2Mi40NTU1QzEyMy4zMDggNjIuMzgyNCAxMjMuMTI0IDYyLjM0NSAxMjIuOTM4IDYyLjM0NTRDMTIyLjU1NiA2Mi4zNDEyIDEyMi4xODcgNjIuNDg3OCAxMjEuOTEyIDYyLjc1MzNMMTE0LjQ0MiA2OS43Njk5QzExNC4yNjQgNjkuOTQ4NSAxMTMuOTE0IDY5Ljc2OTkgMTEzLjg3MSA2OS41NjFDMTEzLjg2NCA2OS41MjM2IDExMy44NjUgNjkuNDg0OSAxMTMuODc3IDY5LjQ0ODRDMTEzLjg4OCA2OS40MTIgMTEzLjkwOCA2OS4zNzg4IDExMy45MzUgNjkuMzUyMUwxMTkuNjUzIDYyLjg0MjNDMTE5Ljc5MSA2Mi43MTM0IDExOS45MDIgNjIuNTU4IDExOS45NzkgNjIuMzg1NEMxMjAuMDU2IDYyLjIxMjggMTIwLjA5NyA2Mi4wMjY1IDEyMC4xIDYxLjgzNzVDMTIwLjEwNCA2MS42NDg2IDEyMC4wNjkgNjEuNDYwOSAxMTkuOTk5IDYxLjI4NTZDMTE5LjkyOCA2MS4xMTAzIDExOS44MjMgNjAuOTUxIDExOS42OSA2MC44MTcyQzExOS41NTYgNjAuNjgzMyAxMTkuMzk3IDYwLjU3NzcgMTE5LjIyMiA2MC41MDY1QzExOS4wNDcgNjAuNDM1NCAxMTguODYgNjAuNDAwMiAxMTguNjcxIDYwLjQwM0MxMTguNDgyIDYwLjQwNTggMTE4LjI5NSA2MC40NDY2IDExOC4xMjIgNjAuNTIzQzExNy45NDkgNjAuNTk5MyAxMTcuNzk0IDYwLjcwOTcgMTE3LjY2NCA2MC44NDc0TDEwOC45OTQgNzAuNDMzMkMxMDguNjgzIDcwLjc0NCAxMDguMjI1IDcwLjc1OTUgMTA4LjAwOCA3MC41NzkyQzEwNy45NDEgNzAuNTI1OSAxMDcuODk3IDcwLjQ0ODQgMTA3Ljg4NyA3MC4zNjM0QzEwNy44NzYgNzAuMjc4MyAxMDcuOSA3MC4xOTI3IDEwNy45NTIgNzAuMTI0OFpcIlxuXHRcdFx0ZmlsbD1cIndoaXRlXCIvPlxuXHRcdDxyZWN0IHg9XCIxNTVcIiB5PVwiNDRcIiB3aWR0aD1cIjU2XCIgaGVpZ2h0PVwiNTZcIiByeD1cIjRcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcblx0XHQgICAgICBkPVwiTTIwMC44NDkgNTcuMTUwN0MxOTYuOTExIDUzLjIxMjUgMTkxLjU3IDUxIDE4NiA1MUMxNzQuNDEgNTEgMTY1IDYwLjQwOTggMTY1IDcyQzE2NSA4My41OTAyIDE3NC40MSA5MyAxODYgOTNDMTkxLjU3IDkzIDE5Ni45MTEgOTAuNzg3NSAyMDAuODQ5IDg2Ljg0OTNMMTk2LjM5NCA4Mi4zOTQ1QzE5My42MzggODUuMTUxMyAxODkuODk5IDg2LjcgMTg2IDg2LjdDMTc3Ljg4NyA4Ni43IDE3MS4zIDgwLjExMzEgMTcxLjMgNzJDMTcxLjMgNjMuODg2OSAxNzcuODg3IDU3LjMgMTg2IDU3LjNDMTg5Ljg5OSA1Ny4zIDE5My42MzggNTguODQ4NyAxOTYuMzk0IDYxLjYwNTVMMjAwLjg0OSA1Ny4xNTA3WlwiXG5cdFx0ICAgICAgZmlsbD1cIiNGRkFCMDBcIi8+XG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcblx0XHQgICAgICBkPVwiTTE3MS4xNSA4Ni44NDk0QzE3NS4wODkgOTAuNzg3NyAxODAuNDMgOTMuMDAwMiAxODYgOTMuMDAwMkMxOTEuNTY5IDkzLjAwMDIgMTk2LjkxMSA5MC43ODc3IDIwMC44NDkgODYuODQ5NEwxOTYuMzk0IDgyLjM5NDdDMTkzLjYzNyA4NS4xNTE0IDE4OS44OTggODYuNzAwMiAxODYgODYuNzAwMkMxODIuMTAxIDg2LjcwMDIgMTc4LjM2MiA4NS4xNTE0IDE3NS42MDUgODIuMzk0N0wxNzEuMTUgODYuODQ5NFpcIlxuXHRcdCAgICAgIGZpbGw9XCIjRkZDNDAwXCIvPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTE3OS42OTkgNzUuMTUwMUMxODEuNDM4IDc1LjE1MDEgMTgyLjg0OSA3My43Mzk4IDE4Mi44NDkgNzIuMDAwMUMxODIuODQ5IDcwLjI2MDQgMTgxLjQzOCA2OC44NTAxIDE3OS42OTkgNjguODUwMUMxNzcuOTU5IDY4Ljg1MDEgMTc2LjU0OSA3MC4yNjA0IDE3Ni41NDkgNzIuMDAwMUMxNzYuNTQ5IDczLjczOTggMTc3Ljk1OSA3NS4xNTAxIDE3OS42OTkgNzUuMTUwMVpcIlxuXHRcdFx0ZmlsbD1cIiNGRkFCMDBcIi8+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNMTkyLjMgNzUuMTUwMUMxOTQuMDQgNzUuMTUwMSAxOTUuNDUgNzMuNzM5OCAxOTUuNDUgNzIuMDAwMUMxOTUuNDUgNzAuMjYwNCAxOTQuMDQgNjguODUwMSAxOTIuMyA2OC44NTAxQzE5MC41NjEgNjguODUwMSAxODkuMTUgNzAuMjYwNCAxODkuMTUgNzIuMDAwMUMxODkuMTUgNzMuNzM5OCAxOTAuNTYxIDc1LjE1MDEgMTkyLjMgNzUuMTUwMVpcIlxuXHRcdFx0ZmlsbD1cIiNGRkFCMDBcIi8+XG5cdFx0PHJlY3QgeD1cIjIyM1wiIHk9XCI0NFwiIHdpZHRoPVwiNTZcIiBoZWlnaHQ9XCI1NlwiIHJ4PVwiNFwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0yNjkuMzM1IDczLjgyNTlMMjYzLjgwMyA3MC42NTM1TDI2Mi44NDkgNzAuMjQwOEwyNDAuMjE3IDcwLjM5NTZWODEuODg1N0gyNjkuMzM1VjczLjgyNTlaXCJcblx0XHRcdGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0yNTkuMjY2IDgwLjgyNzlDMjU5LjUzNyA3OS44OTk0IDI1OS40MzQgNzkuMDQ4MyAyNTguOTgzIDc4LjQxNjRDMjU4LjU3IDc3LjgzNjEgMjU3Ljg3NCA3Ny41MDA4IDI1Ny4wMzUgNzcuNDYyMUwyNDEuMTYxIDc3LjI1NThDMjQxLjA1OCA3Ny4yNTU4IDI0MC45NjcgNzcuMjA0MiAyNDAuOTE2IDc3LjEyNjhDMjQwLjg2NCA3Ny4wNDk1IDI0MC44NTEgNzYuOTQ2MyAyNDAuODc3IDc2Ljg0MzFDMjQwLjkyOSA3Ni42ODg0IDI0MS4wODMgNzYuNTcyMyAyNDEuMjUxIDc2LjU1OTRMMjU3LjI2NyA3Ni4zNTMxQzI1OS4xNjMgNzYuMjYyOCAyNjEuMjI2IDc0LjcyODIgMjYxLjk0OSA3Mi44NDU0TDI2Mi44NjQgNzAuNDU5N0MyNjIuOTAzIDcwLjM1NjYgMjYyLjkxNiA3MC4yNTM0IDI2Mi44OSA3MC4xNTAyQzI2MS44NTggNjUuNDgyIDI1Ny42OTMgNjIuMDAwMSAyNTIuNzE1IDYyLjAwMDFDMjQ4LjEyNCA2Mi4wMDAxIDI0NC4yMyA2NC45NjYxIDI0Mi44MzcgNjkuMDc5OUMyNDEuOTM0IDY4LjQwOTMgMjQwLjc4NyA2OC4wNDgyIDIzOS41NDkgNjguMTY0M0MyMzcuMzQ0IDY4LjM4MzUgMjM1LjU3NyA3MC4xNTAyIDIzNS4zNTggNzIuMzU1NEMyMzUuMzA2IDcyLjkyMjggMjM1LjM0NSA3My40NzczIDIzNS40NzQgNzMuOTkzMkMyMzEuODc2IDc0LjA5NjMgMjI5IDc3LjAzNjYgMjI5IDgwLjY2MDNDMjI5IDgwLjk4MjcgMjI5LjAyNiA4MS4zMDUxIDIyOS4wNjQgODEuNjI3NEMyMjkuMDkgODEuNzgyMiAyMjkuMjE5IDgxLjg5ODMgMjI5LjM3NCA4MS44OTgzSDI1OC42NzNDMjU4Ljg0MSA4MS44OTgzIDI1OC45OTYgODEuNzgyMiAyNTkuMDQ3IDgxLjYxNDZMMjU5LjI2NiA4MC44Mjc5WlwiXG5cdFx0XHRmaWxsPVwiI0YzODAyMFwiLz5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0yNjQuMzIxIDcwLjYyNzZDMjY0LjE3OSA3MC42Mjc2IDI2NC4wMjQgNzAuNjI3NiAyNjMuODgyIDcwLjY0MDVDMjYzLjc3OSA3MC42NDA1IDI2My42ODkgNzAuNzE3OCAyNjMuNjUgNzAuODIxTDI2My4wMzEgNzIuOTc0NkMyNjIuNzYgNzMuOTAzMSAyNjIuODYzIDc0Ljc1NDIgMjYzLjMxNSA3NS4zODYxQzI2My43MjcgNzUuOTY2NCAyNjQuNDI0IDc2LjMwMTcgMjY1LjI2MiA3Ni4zNDA0TDI2OC42NDEgNzYuNTQ2N0MyNjguNzQ0IDc2LjU0NjcgMjY4LjgzNCA3Ni41OTgzIDI2OC44ODYgNzYuNjc1N0MyNjguOTM3IDc2Ljc1MyAyNjguOTUgNzYuODY5MSAyNjguOTI0IDc2Ljk1OTRDMjY4Ljg3MyA3Ny4xMTQxIDI2OC43MTggNzcuMjMwMiAyNjguNTUgNzcuMjQzMUwyNjUuMDMgNzcuNDQ5NEMyNjMuMTIxIDc3LjUzOTcgMjYxLjA3MSA3OS4wNzQzIDI2MC4zNDkgODAuOTU3MUwyNjAuMDkxIDgxLjYxNDdDMjYwLjAzOSA4MS43NDM3IDI2MC4xMyA4MS44NzI3IDI2MC4yNzEgODEuODcyN0gyNzIuMzY4QzI3Mi41MDkgODEuODcyNyAyNzIuNjM4IDgxLjc4MjQgMjcyLjY3NyA4MS42NDA1QzI3Mi44ODMgODAuODkyNiAyNzIuOTk5IDgwLjEwNTkgMjcyLjk5OSA3OS4yOTM1QzI3Mi45OTkgNzQuNTIyMSAyNjkuMTA1IDcwLjYyNzYgMjY0LjMyMSA3MC42Mjc2WlwiXG5cdFx0XHRmaWxsPVwiI0ZBQUU0MFwiLz5cblx0PC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBwcmV2aWV3OyIsImltcG9ydCBQbHVnaW5DYXB0Y2hhIGZyb20gJy4vcmVuZGVyJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHQgICAgICB1c2VFZmZlY3QsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHQgICAgICB1c2VNZXRhU3RhdGUsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuZnVuY3Rpb24gUmVuZGVyUGx1Z2luKCkge1xuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9yZWNhcHRjaGEnICk7XG5cblx0LyogQmFja3dhcmQgY29tcGF0aWJpbGl0eSAqL1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggIWFyZ3MuZW5hYmxlZCB8fCBhcmdzLmhhc093blByb3BlcnR5KCAnY2FwdGNoYScgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0QXJncyggcHJldiA9PiB7XG5cdFx0XHRkZWxldGUgcHJldi5lbmFibGVkO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjYXB0Y2hhOiAnZ29vZ2xlJyxcblx0XHRcdFx0Z29vZ2xlOiB7XG5cdFx0XHRcdFx0dXNlX2dsb2JhbDogcHJldi51c2VfZ2xvYmFsLFxuXHRcdFx0XHRcdGtleTogcHJldi5rZXksXG5cdFx0XHRcdFx0c2VjcmV0OiBwcmV2LnNlY3JldCxcblx0XHRcdFx0XHR0aHJlc2hvbGQ6IHByZXYudGhyZXNob2xkLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9ICk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHR9LCBbXSApO1xuXG5cdHJldHVybiA8UGx1Z2luQ2FwdGNoYS8+O1xufVxuXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0cmVuZGVyOiBSZW5kZXJQbHVnaW4sXG5cdGljb246ICdmaWx0ZXInLFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRiYXNlOiB7XG5cdFx0bmFtZTogJ2pmLWNhcHRjaGEtcGFuZWwnLFxuXHRcdHRpdGxlOiBfXyggJ0NhcHRjaGEgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0fSxcblx0c2V0dGluZ3MsXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgICAgVG9vbHMsXG5cdCAgICAgIGdldENhcHRjaGFQcm92aWRlcnMsXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCB7IGdsb2JhbFRhYiB9ID0gSmV0RkJBY3Rpb25zO1xuY29uc3QgY3VycmVudFRhYiAgICA9IGdsb2JhbFRhYiggeyBzbHVnOiAnY2FwdGNoYS10YWInIH0gKTtcbmNvbnN0IGNhcHRjaGFJdGVtcyAgPSBUb29scy53aXRoUGxhY2Vob2xkZXIoXG5cdGdldENhcHRjaGFQcm92aWRlcnMoKSxcblx0X18oICdXaXRob3V0IHByb3RlY3Rpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbik7XG5cbmV4cG9ydCB7IGNhcHRjaGFJdGVtcywgY3VycmVudFRhYiB9OyIsImltcG9ydCB7IGNhcHRjaGFJdGVtcyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcbmNvbnN0IHtcblx0ICAgICAgdXNlTWV0YVN0YXRlLFxuICAgICAgfSA9IEpldEZCSG9va3M7XG5jb25zdCB7XG5cdCAgICAgIENhcHRjaGFPcHRpb25zLFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcbmNvbnN0IHtcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBQbHVnaW5DYXB0Y2hhKCkge1xuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9yZWNhcHRjaGEnICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGxhYmVsPXsgX18oICdDYXB0Y2hhIFByb3ZpZGVyJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0dmFsdWU9eyBhcmdzLmNhcHRjaGEgfVxuXHRcdFx0b3B0aW9ucz17IGNhcHRjaGFJdGVtcyB9XG5cdFx0XHRvbkNoYW5nZT17IGNhcHRjaGEgPT4ge1xuXHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0XHRcdFx0Y2FwdGNoYSxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCkgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0eyBCb29sZWFuKCBhcmdzLmNhcHRjaGEgKSAmJiAoXG5cdFx0XHQ8Q2FwdGNoYU9wdGlvbnMuU2xvdCBmaWxsUHJvcHM9eyB7IGFyZ3MsIHNldEFyZ3MgfSB9Lz5cblx0XHQpIH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5DYXB0Y2hhO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgY2FwdGNoYUJsb2NrIGZyb20gJy4vY2FwdGNoYS1jb250YWluZXItYmxvY2snO1xuaW1wb3J0IGNhcHRjaGFQbHVnaW4gZnJvbSAnLi9jYXB0Y2hhLXBsdWdpbic7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IHdwLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2FwdGNoYScsXG5cdGZ1bmN0aW9uICggYmxvY2tzICkge1xuXHRcdGJsb2Nrcy5wdXNoKCBjYXB0Y2hhQmxvY2sgKTtcblxuXHRcdHJldHVybiBibG9ja3M7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVnaXN0ZXIucGx1Z2luLmpmLXZhbGlkYXRpb24tcGFuZWwuYWZ0ZXInLFxuXHQnamV0LWZvcm0tYnVpbGRlci9jYXB0Y2hhJyxcblx0ZnVuY3Rpb24gKCBwbHVnaW5zICkge1xuXHRcdHBsdWdpbnMucHVzaCggY2FwdGNoYVBsdWdpbiApO1xuXG5cdFx0cmV0dXJuIHBsdWdpbnM7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==