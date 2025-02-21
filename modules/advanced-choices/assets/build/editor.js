/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/choice-control/edit.js":
/*!***************************************!*\
  !*** ./editor/choice-control/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditChoiceCheck)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _choice_useCheckedChoiceState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../choice/useCheckedChoiceState */ "./editor/choice/useCheckedChoiceState.js");
/* harmony import */ var _choice_ToggleCheckStateButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../choice/ToggleCheckStateButton */ "./editor/choice/ToggleCheckStateButton.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview */ "./editor/choice-control/preview.js");




const {
  __,
  sprintf
} = wp.i18n;
const {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  BlockControls
} = wp.blockEditor;
const {
  useInstanceId
} = wp.compose;
let {
  Button,
  PanelBody,
  RangeControl,
  __experimentalToggleGroupControl,
  ToggleGroupControl,
  __experimentalToggleGroupControlOption,
  ToggleGroupControlOption
} = wp.components;
ToggleGroupControl = ToggleGroupControl || __experimentalToggleGroupControl;
ToggleGroupControlOption = ToggleGroupControlOption || __experimentalToggleGroupControlOption;
const {
  BaseHelp,
  BaseLabel,
  StylePanel,
  StylePanelItem
} = JetFBComponents;
const {
  useStyle,
  useJetStyle
} = JetFBHooks;
function SimpleChooseMediaButton({
  open,
  hasValue = false
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isSecondary: true,
    isSmall: true,
    icon: "edit",
    onClick: open,
    className: hasValue ? 'jet-fb has-value' : '',
    label: hasValue ? __('Edit icon', 'jet-form-builder') : __('Choose icon', 'jet-form-builder')
  }, hasValue ? __('Edit', 'jet-form-builder') : __('Choose', 'jet-form-builder'));
}
function EditChoiceCheck(props) {
  const {
    context,
    setAttributes,
    attributes
  } = props;
  const {
    'jet-forms/choices-field--multiple': isMultiple,
    'jet-forms/choices-field--name': fieldName
  } = context;
  const jetStyle = useJetStyle();
  const blockProps = useBlockProps({
    className: sprintf('jet-form-builder-choice--item-control %s', jetStyle.className),
    style: jetStyle.style
  });
  const instanceId = useInstanceId(EditChoiceCheck, fieldName);
  const [isChecked, toggleChecked] = (0,_choice_useCheckedChoiceState__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const controlImageUrl = (() => {
    if ('image' !== attributes.control_type) {
      return false;
    }
    return isChecked ? attributes?.checked_image_control?.url : attributes?.default_image_control?.url;
  })();
  const [width, setWidth] = useStyle('--jfb-choice-control-width');
  const widthInt = parseInt(width);
  if (attributes.isPreview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, _preview__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, {
    group: 'block'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_choice_ToggleCheckStateButton__WEBPACK_IMPORTED_MODULE_2__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    ...blockProps
  }, !!controlImageUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: controlImageUrl,
    className: 'jet-form-builder-choice--item-control-img',
    alt: fieldName + ' ' + __('control', 'jet-form-builder')
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: instanceId,
    type: isMultiple ? 'checkbox' : 'radio',
    checked: isChecked,
    onChange: () => toggleChecked(),
    className: 'jet-form-builder-choice--item-control-input'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: 'label',
    value: attributes.label,
    onChange: label => setAttributes({
      label
    }),
    placeholder: __('Label for input...', 'jet-form-builder'),
    multiline: false
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '20px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupControl, {
    onChange: control_type => setAttributes({
      control_type
    }),
    value: attributes.control_type,
    label: __('Control type', 'jet-form-builder'),
    isBlock: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupControlOption, {
    label: isMultiple ? __('Checkbox input', 'jet-form-builder') : __('Radio input', 'jet-form-builder'),
    value: ''
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleGroupControlOption, {
    label: __('Image', 'jet-form-builder'),
    value: 'image'
  })))), 'image' === attributes.control_type && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Control Default', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseLabel, {
    label: __('Default icon', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    onSelect: media => {
      var _attributes$default_i;
      return setAttributes({
        default_image_control: {
          ...((_attributes$default_i = attributes.default_image_control) !== null && _attributes$default_i !== void 0 ? _attributes$default_i : {}),
          url: media.url,
          id: media.id
        }
      });
    },
    allowedTypes: ['image/*'],
    value: attributes.default_image_control?.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SimpleChooseMediaButton, {
      open: open,
      hasValue: !!attributes.default_image_control?.url
    })
  }), !!attributes.default_image_control?.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isDestructive: true,
    isSmall: true,
    icon: "no-alt",
    onClick: () => setAttributes({
      default_image_control: {}
    }),
    label: __('Remove default icon', 'jet-form-builder')
  })), !!attributes.default_image_control?.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.default_image_control?.url,
    style: {
      maxWidth: '150px',
      maxHeight: '150px',
      margin: '1em 0'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseHelp, null, __('Choose icon for default state of choice', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Control Checked', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseLabel, {
    label: __('Checked Icon', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    onSelect: media => {
      var _attributes$checked_i;
      return setAttributes({
        checked_image_control: {
          ...((_attributes$checked_i = attributes.checked_image_control) !== null && _attributes$checked_i !== void 0 ? _attributes$checked_i : {}),
          url: media.url,
          id: media.id
        }
      });
    },
    allowedTypes: ['image/*'],
    value: attributes.checked_image_control?.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SimpleChooseMediaButton, {
      open: open,
      hasValue: !!attributes.checked_image_control?.url
    })
  }), !!attributes.checked_image_control?.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isDestructive: true,
    isSmall: true,
    icon: "no-alt",
    onClick: () => setAttributes({
      checked_image_control: {}
    }),
    label: __('Remove checked icon', 'jet-form-builder')
  })), !!attributes.checked_image_control?.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.checked_image_control?.url,
    style: {
      maxWidth: '150px',
      maxHeight: '150px',
      margin: '1em 0'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseHelp, null, __('Choose icon for checked state of choice', 'jet-form-builder'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
    group: 'styles'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StylePanel, {
    label: __('Image control', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StylePanelItem, {
    label: __('Width', 'jet-form-builder'),
    cssVar: "--jfb-choice-control-width",
    defaultValue: "24px"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    help: __(`Specify the width of the image in pixels.`, 'jet-form-builder'),
    initialPosition: 24,
    label: __('Width', 'jet-form-builder'),
    value: widthInt,
    max: 200,
    min: 0,
    onChange: value => setWidth(value ? `${value}px` : 0)
  }))))));
}

/***/ }),

/***/ "./editor/choice-control/index.js":
/*!****************************************!*\
  !*** ./editor/choice-control/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _blocks_choice_control_block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/choice-control/edit.js");
/* harmony import */ var _blocks_choice_control_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/choice-control/block.json */ "../../blocks-metadata/choice-control/block.json");



const {
  name,
  icon
} = _blocks_choice_control_block_json__WEBPACK_IMPORTED_MODULE_2__;
const {
  __
} = wp.i18n;
const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  description: __(`Get the adjusting options for the Image and Choice Control block 
with "Images and Controls" layout of the Advanced Choices Field.`, 'jet-form-builder'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  example: {
    attributes: {
      isPreview: true
    }
  }
};


/***/ }),

/***/ "./editor/choice-control/preview.js":
/*!******************************************!*\
  !*** ./editor/choice-control/preview.js ***!
  \******************************************/
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
  x: "50",
  y: "26",
  width: "198",
  height: "92",
  rx: "8",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M124.234 74.4785H126.109C126.012 75.377 125.755 76.181 125.338 76.8906C124.921 77.6003 124.332 78.1634 123.57 78.5801C122.809 78.9902 121.858 79.1953 120.719 79.1953C119.885 79.1953 119.127 79.0391 118.443 78.7266C117.766 78.4141 117.184 77.9714 116.695 77.3984C116.207 76.819 115.829 76.1257 115.562 75.3184C115.302 74.5046 115.172 73.5996 115.172 72.6035V71.1875C115.172 70.1914 115.302 69.2897 115.562 68.4824C115.829 67.6686 116.21 66.972 116.705 66.3926C117.206 65.8132 117.809 65.3672 118.512 65.0547C119.215 64.7422 120.006 64.5859 120.885 64.5859C121.959 64.5859 122.867 64.7878 123.609 65.1914C124.352 65.5951 124.928 66.1549 125.338 66.8711C125.755 67.5807 126.012 68.4043 126.109 69.3418H124.234C124.143 68.6777 123.974 68.1081 123.727 67.6328C123.479 67.151 123.128 66.7799 122.672 66.5195C122.216 66.2591 121.62 66.1289 120.885 66.1289C120.253 66.1289 119.697 66.2493 119.215 66.4902C118.74 66.7311 118.339 67.0729 118.014 67.5156C117.695 67.9583 117.454 68.4889 117.291 69.1074C117.128 69.7259 117.047 70.4128 117.047 71.168V72.6035C117.047 73.3001 117.118 73.9544 117.262 74.5664C117.411 75.1784 117.636 75.7155 117.936 76.1777C118.235 76.64 118.616 77.0046 119.078 77.2715C119.54 77.5319 120.087 77.6621 120.719 77.6621C121.52 77.6621 122.158 77.5352 122.633 77.2812C123.108 77.0273 123.466 76.6628 123.707 76.1875C123.954 75.7122 124.13 75.1426 124.234 74.4785ZM130.211 64V79H128.404V64H130.211ZM129.781 73.3164L129.029 73.2871C129.036 72.5645 129.143 71.8971 129.352 71.2852C129.56 70.6667 129.853 70.1296 130.23 69.6738C130.608 69.2181 131.057 68.8665 131.578 68.6191C132.105 68.3652 132.688 68.2383 133.326 68.2383C133.847 68.2383 134.316 68.3099 134.732 68.4531C135.149 68.5898 135.504 68.8112 135.797 69.1172C136.096 69.4232 136.324 69.8203 136.48 70.3086C136.637 70.7904 136.715 71.3796 136.715 72.0762V79H134.898V72.0566C134.898 71.5033 134.817 71.0605 134.654 70.7285C134.492 70.39 134.254 70.1458 133.941 69.9961C133.629 69.8398 133.245 69.7617 132.789 69.7617C132.34 69.7617 131.93 69.8561 131.559 70.0449C131.194 70.2337 130.878 70.4941 130.611 70.8262C130.351 71.1582 130.146 71.5391 129.996 71.9688C129.853 72.3919 129.781 72.8411 129.781 73.3164ZM138.941 73.834V73.6094C138.941 72.8477 139.052 72.1413 139.273 71.4902C139.495 70.8327 139.814 70.263 140.23 69.7812C140.647 69.293 141.152 68.9154 141.744 68.6484C142.337 68.375 143.001 68.2383 143.736 68.2383C144.479 68.2383 145.146 68.375 145.738 68.6484C146.337 68.9154 146.845 69.293 147.262 69.7812C147.685 70.263 148.007 70.8327 148.229 71.4902C148.45 72.1413 148.561 72.8477 148.561 73.6094V73.834C148.561 74.5957 148.45 75.3021 148.229 75.9531C148.007 76.6042 147.685 77.1738 147.262 77.6621C146.845 78.1439 146.34 78.5215 145.748 78.7949C145.162 79.0618 144.498 79.1953 143.756 79.1953C143.014 79.1953 142.346 79.0618 141.754 78.7949C141.161 78.5215 140.654 78.1439 140.23 77.6621C139.814 77.1738 139.495 76.6042 139.273 75.9531C139.052 75.3021 138.941 74.5957 138.941 73.834ZM140.748 73.6094V73.834C140.748 74.3613 140.81 74.8594 140.934 75.3281C141.057 75.7904 141.243 76.2005 141.49 76.5586C141.744 76.9167 142.06 77.1999 142.438 77.4082C142.815 77.61 143.255 77.7109 143.756 77.7109C144.251 77.7109 144.684 77.61 145.055 77.4082C145.432 77.1999 145.745 76.9167 145.992 76.5586C146.24 76.2005 146.425 75.7904 146.549 75.3281C146.679 74.8594 146.744 74.3613 146.744 73.834V73.6094C146.744 73.0885 146.679 72.597 146.549 72.1348C146.425 71.666 146.236 71.2526 145.982 70.8945C145.735 70.5299 145.423 70.2435 145.045 70.0352C144.674 69.8268 144.238 69.7227 143.736 69.7227C143.242 69.7227 142.805 69.8268 142.428 70.0352C142.057 70.2435 141.744 70.5299 141.49 70.8945C141.243 71.2526 141.057 71.666 140.934 72.1348C140.81 72.597 140.748 73.0885 140.748 73.6094ZM152.789 68.4336V79H150.973V68.4336H152.789ZM150.836 65.6309C150.836 65.3379 150.924 65.0905 151.1 64.8887C151.282 64.6868 151.549 64.5859 151.9 64.5859C152.245 64.5859 152.509 64.6868 152.691 64.8887C152.88 65.0905 152.975 65.3379 152.975 65.6309C152.975 65.9108 152.88 66.1517 152.691 66.3535C152.509 66.5488 152.245 66.6465 151.9 66.6465C151.549 66.6465 151.282 66.5488 151.1 66.3535C150.924 66.1517 150.836 65.9108 150.836 65.6309ZM159.918 77.7109C160.348 77.7109 160.745 77.623 161.109 77.4473C161.474 77.2715 161.773 77.0306 162.008 76.7246C162.242 76.4121 162.376 76.0573 162.408 75.6602H164.127C164.094 76.2852 163.883 76.8678 163.492 77.4082C163.108 77.9421 162.604 78.375 161.979 78.707C161.354 79.0326 160.667 79.1953 159.918 79.1953C159.124 79.1953 158.43 79.0553 157.838 78.7754C157.252 78.4954 156.764 78.1113 156.373 77.623C155.989 77.1348 155.699 76.5749 155.504 75.9434C155.315 75.3053 155.221 74.6315 155.221 73.9219V73.5117C155.221 72.8021 155.315 72.1315 155.504 71.5C155.699 70.862 155.989 70.2988 156.373 69.8105C156.764 69.3223 157.252 68.9382 157.838 68.6582C158.43 68.3783 159.124 68.2383 159.918 68.2383C160.745 68.2383 161.467 68.4076 162.086 68.7461C162.704 69.0781 163.189 69.5339 163.541 70.1133C163.899 70.6862 164.094 71.3372 164.127 72.0664H162.408C162.376 71.6302 162.252 71.2363 162.037 70.8848C161.829 70.5332 161.542 70.2533 161.178 70.0449C160.82 69.8301 160.4 69.7227 159.918 69.7227C159.365 69.7227 158.899 69.8333 158.521 70.0547C158.15 70.2695 157.854 70.5625 157.633 70.9336C157.418 71.2982 157.262 71.7051 157.164 72.1543C157.073 72.597 157.027 73.0495 157.027 73.5117V73.9219C157.027 74.3841 157.073 74.8398 157.164 75.2891C157.255 75.7383 157.408 76.1452 157.623 76.5098C157.844 76.8743 158.141 77.1673 158.512 77.3887C158.889 77.6035 159.358 77.7109 159.918 77.7109ZM170.543 79.1953C169.807 79.1953 169.14 79.0716 168.541 78.8242C167.949 78.5703 167.438 78.2155 167.008 77.7598C166.585 77.304 166.259 76.7637 166.031 76.1387C165.803 75.5137 165.689 74.8301 165.689 74.0879V73.6777C165.689 72.8184 165.816 72.0534 166.07 71.3828C166.324 70.7057 166.669 70.1328 167.105 69.6641C167.542 69.1953 168.036 68.8405 168.59 68.5996C169.143 68.3587 169.716 68.2383 170.309 68.2383C171.064 68.2383 171.715 68.3685 172.262 68.6289C172.815 68.8893 173.268 69.2539 173.619 69.7227C173.971 70.1849 174.231 70.7318 174.4 71.3633C174.57 71.9883 174.654 72.6719 174.654 73.4141V74.2246H166.764V72.75H172.848V72.6133C172.822 72.1445 172.724 71.6888 172.555 71.2461C172.392 70.8034 172.132 70.4388 171.773 70.1523C171.415 69.8659 170.927 69.7227 170.309 69.7227C169.898 69.7227 169.521 69.8105 169.176 69.9863C168.831 70.1556 168.535 70.4095 168.287 70.748C168.04 71.0866 167.848 71.5 167.711 71.9883C167.574 72.4766 167.506 73.0397 167.506 73.6777V74.0879C167.506 74.5892 167.574 75.0612 167.711 75.5039C167.854 75.9401 168.059 76.3242 168.326 76.6562C168.6 76.9883 168.928 77.2487 169.312 77.4375C169.703 77.6263 170.146 77.7207 170.641 77.7207C171.279 77.7207 171.819 77.5905 172.262 77.3301C172.704 77.0697 173.092 76.7214 173.424 76.2852L174.518 77.1543C174.29 77.4993 174 77.8281 173.648 78.1406C173.297 78.4531 172.864 78.707 172.35 78.9023C171.842 79.0977 171.24 79.1953 170.543 79.1953ZM183.688 68.4336V79H181.871V68.4336H183.688ZM181.734 65.6309C181.734 65.3379 181.822 65.0905 181.998 64.8887C182.18 64.6868 182.447 64.5859 182.799 64.5859C183.144 64.5859 183.408 64.6868 183.59 64.8887C183.779 65.0905 183.873 65.3379 183.873 65.6309C183.873 65.9108 183.779 66.1517 183.59 66.3535C183.408 66.5488 183.144 66.6465 182.799 66.6465C182.447 66.6465 182.18 66.5488 181.998 66.3535C181.822 66.1517 181.734 65.9108 181.734 65.6309ZM191.012 68.4336V69.8203H185.299V68.4336H191.012ZM187.232 65.8652H189.039V76.3828C189.039 76.7409 189.094 77.0111 189.205 77.1934C189.316 77.3757 189.459 77.4961 189.635 77.5547C189.811 77.6133 189.999 77.6426 190.201 77.6426C190.351 77.6426 190.507 77.6296 190.67 77.6035C190.839 77.571 190.966 77.5449 191.051 77.5254L191.061 79C190.917 79.0456 190.729 79.0879 190.494 79.127C190.266 79.1725 189.99 79.1953 189.664 79.1953C189.221 79.1953 188.814 79.1074 188.443 78.9316C188.072 78.7559 187.776 78.4629 187.555 78.0527C187.34 77.6361 187.232 77.0762 187.232 76.373V65.8652ZM197.516 79.1953C196.78 79.1953 196.113 79.0716 195.514 78.8242C194.921 78.5703 194.41 78.2155 193.98 77.7598C193.557 77.304 193.232 76.7637 193.004 76.1387C192.776 75.5137 192.662 74.8301 192.662 74.0879V73.6777C192.662 72.8184 192.789 72.0534 193.043 71.3828C193.297 70.7057 193.642 70.1328 194.078 69.6641C194.514 69.1953 195.009 68.8405 195.562 68.5996C196.116 68.3587 196.689 68.2383 197.281 68.2383C198.036 68.2383 198.688 68.3685 199.234 68.6289C199.788 68.8893 200.24 69.2539 200.592 69.7227C200.943 70.1849 201.204 70.7318 201.373 71.3633C201.542 71.9883 201.627 72.6719 201.627 73.4141V74.2246H193.736V72.75H199.82V72.6133C199.794 72.1445 199.697 71.6888 199.527 71.2461C199.365 70.8034 199.104 70.4388 198.746 70.1523C198.388 69.8659 197.9 69.7227 197.281 69.7227C196.871 69.7227 196.493 69.8105 196.148 69.9863C195.803 70.1556 195.507 70.4095 195.26 70.748C195.012 71.0866 194.82 71.5 194.684 71.9883C194.547 72.4766 194.479 73.0397 194.479 73.6777V74.0879C194.479 74.5892 194.547 75.0612 194.684 75.5039C194.827 75.9401 195.032 76.3242 195.299 76.6562C195.572 76.9883 195.901 77.2487 196.285 77.4375C196.676 77.6263 197.118 77.7207 197.613 77.7207C198.251 77.7207 198.792 77.5905 199.234 77.3301C199.677 77.0697 200.064 76.7214 200.396 76.2852L201.49 77.1543C201.262 77.4993 200.973 77.8281 200.621 78.1406C200.27 78.4531 199.837 78.707 199.322 78.9023C198.814 79.0977 198.212 79.1953 197.516 79.1953ZM205.533 70.5332V79H203.717V68.4336H205.436L205.533 70.5332ZM205.162 73.3164L204.322 73.2871C204.329 72.5645 204.423 71.8971 204.605 71.2852C204.788 70.6667 205.058 70.1296 205.416 69.6738C205.774 69.2181 206.22 68.8665 206.754 68.6191C207.288 68.3652 207.906 68.2383 208.609 68.2383C209.104 68.2383 209.56 68.3099 209.977 68.4531C210.393 68.5898 210.755 68.8079 211.061 69.1074C211.367 69.4069 211.604 69.791 211.773 70.2598C211.943 70.7285 212.027 71.2949 212.027 71.959V79H210.221V72.0469C210.221 71.4935 210.126 71.0508 209.938 70.7188C209.755 70.3867 209.495 70.1458 209.156 69.9961C208.818 69.8398 208.421 69.7617 207.965 69.7617C207.431 69.7617 206.985 69.8561 206.627 70.0449C206.269 70.2337 205.982 70.4941 205.768 70.8262C205.553 71.1582 205.396 71.5391 205.299 71.9688C205.208 72.3919 205.162 72.8411 205.162 73.3164ZM212.008 72.3203L210.797 72.6914C210.803 72.112 210.898 71.5553 211.08 71.0215C211.269 70.4876 211.539 70.0124 211.891 69.5957C212.249 69.179 212.688 68.8503 213.209 68.6094C213.73 68.362 214.326 68.2383 214.996 68.2383C215.562 68.2383 216.064 68.3132 216.5 68.4629C216.943 68.6126 217.314 68.8438 217.613 69.1562C217.919 69.4622 218.15 69.8561 218.307 70.3379C218.463 70.8197 218.541 71.3926 218.541 72.0566V79H216.725V72.0371C216.725 71.4447 216.63 70.9857 216.441 70.6602C216.259 70.3281 215.999 70.097 215.66 69.9668C215.328 69.8301 214.931 69.7617 214.469 69.7617C214.072 69.7617 213.72 69.8301 213.414 69.9668C213.108 70.1035 212.851 70.2923 212.643 70.5332C212.434 70.7676 212.275 71.0378 212.164 71.3438C212.06 71.6497 212.008 71.9753 212.008 72.3203Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  clipPath: "url(#clip0_149_2283)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M103.667 64.0433L90.355 77.3666L85.4083 72.42L87.0533 70.775L90.355 74.0766L102.022 62.41L103.667 64.0433ZM101.088 69.9233C101.24 70.5883 101.333 71.2883 101.333 72C101.333 77.1566 97.1567 81.3333 92 81.3333C86.8433 81.3333 82.6667 77.1566 82.6667 72C82.6667 66.8433 86.8433 62.6666 92 62.6666C93.8433 62.6666 95.5467 63.2033 96.9933 64.125L98.6733 62.445C96.7833 61.115 94.485 60.3333 92 60.3333C85.56 60.3333 80.3333 65.56 80.3333 72C80.3333 78.44 85.56 83.6666 92 83.6666C98.44 83.6666 103.667 78.44 103.667 72C103.667 70.6116 103.41 69.2816 102.967 68.045L101.088 69.9233Z",
  fill: "#4272F9"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_149_2283"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "28",
  height: "28",
  fill: "white",
  transform: "translate(78 58)"
}))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "./editor/choice/ToggleCheckStateButton.js":
/*!*************************************************!*\
  !*** ./editor/choice/ToggleCheckStateButton.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCheckedChoiceState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCheckedChoiceState */ "./editor/choice/useCheckedChoiceState.js");


const {
  ToolbarButton
} = wp.components;
const {
  SVG,
  Path
} = wp.primitives;
const {
  __
} = wp.i18n;
function ToggleCheckStateButton() {
  const [isChecked, toggleChecked] = (0,_useCheckedChoiceState__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarButton, {
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
      d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
    })),
    title: isChecked ? __('Show unchecked state', 'jet-form-builder') : __('Show checked state', 'jet-form-builder'),
    onClick: () => toggleChecked(),
    isActive: isChecked
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleCheckStateButton);

/***/ }),

/***/ "./editor/choice/context.js":
/*!**********************************!*\
  !*** ./editor/choice/context.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const ChoiceItemContext = createContext({
  clientId: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChoiceItemContext);

/***/ }),

/***/ "./editor/choice/edit.js":
/*!*******************************!*\
  !*** ./editor/choice/edit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditAdvancedChoice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCheckedChoiceState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCheckedChoiceState */ "./editor/choice/useCheckedChoiceState.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./editor/choice/context.js");
/* harmony import */ var _ToggleCheckStateButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToggleCheckStateButton */ "./editor/choice/ToggleCheckStateButton.js");
/* harmony import */ var _useAllowedBlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useAllowedBlocks */ "./editor/choice/useAllowedBlocks.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview */ "./editor/choice/preview.js");






const {
  __
} = wp.i18n;
const {
  InspectorControls,
  useBlockProps,
  useInnerBlocksProps,
  BlockControls
} = wp.blockEditor;
const {
  PanelBody,
  TextControl
} = wp.components;
const {
  classnames
} = JetFBActions;
function EditAdvancedChoice(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const [isChecked] = (0,_useCheckedChoiceState__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const className = classnames({
    'jet-form-builder-choice--item': true,
    'is-checked': isChecked,
    'jfb-collapse-block-margin': true,
    'jfb-collapse-block-border': true
  });
  const allowedBlocks = (0,_useAllowedBlocks__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const blockProps = useBlockProps({
    className
  });
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    template: [['core/paragraph', {}]],
    allowedBlocks
  });
  if (attributes.isPreview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, _preview__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      clientId
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    ...innerBlocksProps
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, {
    group: 'block'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ToggleCheckStateButton__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('General', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Value', 'jet-form-builder'),
    value: attributes.value,
    onChange: val => setAttributes({
      value: val.trim()
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Value for Calculated Field', 'jet-form-builder'),
    help: __(`This value will be used for calculations
in the Calculated Field.`, 'jet-form-builder'),
    value: attributes.calc_value,
    onChange: val => setAttributes({
      calc_value: val.trim()
    })
  }))));
}

/***/ }),

/***/ "./editor/choice/index.js":
/*!********************************!*\
  !*** ./editor/choice/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _blocks_choice_block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/choice/edit.js");
/* harmony import */ var _blocks_choice_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/choice/block.json */ "../../blocks-metadata/choice/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./editor/choice/save.js");




const {
  name,
  icon
} = _blocks_choice_block_json__WEBPACK_IMPORTED_MODULE_2__;
const {
  __
} = wp.i18n;

// compatibility with WordPress <= 6.2
_blocks_choice_block_json__WEBPACK_IMPORTED_MODULE_2__.supports.__experimentalLayout = _blocks_choice_block_json__WEBPACK_IMPORTED_MODULE_2__.supports.layout;
const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  description: __(`Apply a variety of settings of the one particular choice block.`, 'jet-form-builder'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: {
    attributes: {
      isPreview: true
    }
  }
};


/***/ }),

/***/ "./editor/choice/preview.js":
/*!**********************************!*\
  !*** ./editor/choice/preview.js ***!
  \**********************************/
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
  x: "93",
  y: "12",
  width: "128",
  height: "122",
  rx: "8",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "109",
  y: "114",
  width: "96",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "109",
  y: "120",
  width: "79",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "109",
  y: "52",
  width: "96",
  height: "56",
  rx: "4",
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M169 92.0666V68.8666H145V92.0666H169ZM152.333 82.4L155.667 86.2795L160.333 80.4666L166.333 88.2H147.667L152.333 82.4Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M147.078 32.9531V33.6719C147.078 34.526 146.971 35.2917 146.758 35.9688C146.544 36.6458 146.237 37.2214 145.836 37.6953C145.435 38.1693 144.953 38.5312 144.391 38.7812C143.833 39.0312 143.208 39.1562 142.516 39.1562C141.844 39.1562 141.227 39.0312 140.664 38.7812C140.107 38.5312 139.622 38.1693 139.211 37.6953C138.805 37.2214 138.49 36.6458 138.266 35.9688C138.042 35.2917 137.93 34.526 137.93 33.6719V32.9531C137.93 32.099 138.039 31.3359 138.258 30.6641C138.482 29.987 138.797 29.4115 139.203 28.9375C139.609 28.4583 140.091 28.0938 140.648 27.8438C141.211 27.5938 141.828 27.4688 142.5 27.4688C143.193 27.4688 143.818 27.5938 144.375 27.8438C144.938 28.0938 145.419 28.4583 145.82 28.9375C146.227 29.4115 146.536 29.987 146.75 30.6641C146.969 31.3359 147.078 32.099 147.078 32.9531ZM145.586 33.6719V32.9375C145.586 32.2604 145.516 31.6615 145.375 31.1406C145.24 30.6198 145.039 30.1823 144.773 29.8281C144.508 29.474 144.182 29.2057 143.797 29.0234C143.417 28.8411 142.984 28.75 142.5 28.75C142.031 28.75 141.607 28.8411 141.227 29.0234C140.852 29.2057 140.529 29.474 140.258 29.8281C139.992 30.1823 139.786 30.6198 139.641 31.1406C139.495 31.6615 139.422 32.2604 139.422 32.9375V33.6719C139.422 34.3542 139.495 34.9583 139.641 35.4844C139.786 36.0052 139.995 36.4453 140.266 36.8047C140.542 37.1589 140.867 37.4271 141.242 37.6094C141.622 37.7917 142.047 37.8828 142.516 37.8828C143.005 37.8828 143.44 37.7917 143.82 37.6094C144.201 37.4271 144.521 37.1589 144.781 36.8047C145.047 36.4453 145.247 36.0052 145.383 35.4844C145.518 34.9583 145.586 34.3542 145.586 33.6719ZM150.562 32.1719V42.25H149.109V30.5469H150.438L150.562 32.1719ZM156.258 34.7031V34.8672C156.258 35.4818 156.185 36.0521 156.039 36.5781C155.893 37.099 155.68 37.5521 155.398 37.9375C155.122 38.3229 154.781 38.6224 154.375 38.8359C153.969 39.0495 153.503 39.1562 152.977 39.1562C152.44 39.1562 151.966 39.0677 151.555 38.8906C151.143 38.7135 150.794 38.4557 150.508 38.1172C150.221 37.7786 149.992 37.3724 149.82 36.8984C149.654 36.4245 149.539 35.8906 149.477 35.2969V34.4219C149.539 33.7969 149.656 33.237 149.828 32.7422C150 32.2474 150.227 31.8255 150.508 31.4766C150.794 31.1224 151.141 30.8542 151.547 30.6719C151.953 30.4844 152.422 30.3906 152.953 30.3906C153.484 30.3906 153.956 30.4948 154.367 30.7031C154.779 30.9062 155.125 31.1979 155.406 31.5781C155.688 31.9583 155.898 32.4141 156.039 32.9453C156.185 33.4714 156.258 34.0573 156.258 34.7031ZM154.805 34.8672V34.7031C154.805 34.2812 154.76 33.8854 154.672 33.5156C154.583 33.1406 154.445 32.8125 154.258 32.5312C154.076 32.2448 153.841 32.0208 153.555 31.8594C153.268 31.6927 152.927 31.6094 152.531 31.6094C152.167 31.6094 151.849 31.6719 151.578 31.7969C151.312 31.9219 151.086 32.0911 150.898 32.3047C150.711 32.513 150.557 32.7526 150.438 33.0234C150.323 33.2891 150.237 33.5651 150.18 33.8516V35.875C150.284 36.2396 150.43 36.5833 150.617 36.9062C150.805 37.224 151.055 37.4818 151.367 37.6797C151.68 37.8724 152.073 37.9688 152.547 37.9688C152.938 37.9688 153.273 37.888 153.555 37.7266C153.841 37.5599 154.076 37.3333 154.258 37.0469C154.445 36.7604 154.583 36.4323 154.672 36.0625C154.76 35.6875 154.805 35.2891 154.805 34.8672ZM161.641 30.5469V31.6562H157.07V30.5469H161.641ZM158.617 28.4922H160.062V36.9062C160.062 37.1927 160.107 37.4089 160.195 37.5547C160.284 37.7005 160.398 37.7969 160.539 37.8438C160.68 37.8906 160.831 37.9141 160.992 37.9141C161.112 37.9141 161.237 37.9036 161.367 37.8828C161.503 37.8568 161.604 37.8359 161.672 37.8203L161.68 39C161.565 39.0365 161.414 39.0703 161.227 39.1016C161.044 39.138 160.823 39.1562 160.562 39.1562C160.208 39.1562 159.883 39.0859 159.586 38.9453C159.289 38.8047 159.052 38.5703 158.875 38.2422C158.703 37.9089 158.617 37.4609 158.617 36.8984V28.4922ZM164.906 30.5469V39H163.453V30.5469H164.906ZM163.344 28.3047C163.344 28.0703 163.414 27.8724 163.555 27.7109C163.701 27.5495 163.914 27.4688 164.195 27.4688C164.471 27.4688 164.682 27.5495 164.828 27.7109C164.979 27.8724 165.055 28.0703 165.055 28.3047C165.055 28.5286 164.979 28.7214 164.828 28.8828C164.682 29.0391 164.471 29.1172 164.195 29.1172C163.914 29.1172 163.701 29.0391 163.555 28.8828C163.414 28.7214 163.344 28.5286 163.344 28.3047ZM166.844 34.8672V34.6875C166.844 34.0781 166.932 33.513 167.109 32.9922C167.286 32.4661 167.542 32.0104 167.875 31.625C168.208 31.2344 168.612 30.9323 169.086 30.7188C169.56 30.5 170.091 30.3906 170.68 30.3906C171.273 30.3906 171.807 30.5 172.281 30.7188C172.76 30.9323 173.167 31.2344 173.5 31.625C173.839 32.0104 174.096 32.4661 174.273 32.9922C174.451 33.513 174.539 34.0781 174.539 34.6875V34.8672C174.539 35.4766 174.451 36.0417 174.273 36.5625C174.096 37.0833 173.839 37.5391 173.5 37.9297C173.167 38.3151 172.763 38.6172 172.289 38.8359C171.82 39.0495 171.289 39.1562 170.695 39.1562C170.102 39.1562 169.568 39.0495 169.094 38.8359C168.62 38.6172 168.214 38.3151 167.875 37.9297C167.542 37.5391 167.286 37.0833 167.109 36.5625C166.932 36.0417 166.844 35.4766 166.844 34.8672ZM168.289 34.6875V34.8672C168.289 35.2891 168.339 35.6875 168.438 36.0625C168.536 36.4323 168.685 36.7604 168.883 37.0469C169.086 37.3333 169.339 37.5599 169.641 37.7266C169.943 37.888 170.294 37.9688 170.695 37.9688C171.091 37.9688 171.438 37.888 171.734 37.7266C172.036 37.5599 172.286 37.3333 172.484 37.0469C172.682 36.7604 172.831 36.4323 172.93 36.0625C173.034 35.6875 173.086 35.2891 173.086 34.8672V34.6875C173.086 34.2708 173.034 33.8776 172.93 33.5078C172.831 33.1328 172.68 32.8021 172.477 32.5156C172.279 32.224 172.029 31.9948 171.727 31.8281C171.43 31.6615 171.081 31.5781 170.68 31.5781C170.284 31.5781 169.935 31.6615 169.633 31.8281C169.336 31.9948 169.086 32.224 168.883 32.5156C168.685 32.8021 168.536 33.1328 168.438 33.5078C168.339 33.8776 168.289 34.2708 168.289 34.6875ZM177.797 32.3516V39H176.352V30.5469H177.719L177.797 32.3516ZM177.453 34.4531L176.852 34.4297C176.857 33.8516 176.943 33.3177 177.109 32.8281C177.276 32.3333 177.51 31.9036 177.812 31.5391C178.115 31.1745 178.474 30.8932 178.891 30.6953C179.312 30.4922 179.779 30.3906 180.289 30.3906C180.706 30.3906 181.081 30.4479 181.414 30.5625C181.747 30.6719 182.031 30.849 182.266 31.0938C182.505 31.3385 182.688 31.6562 182.812 32.0469C182.938 32.4323 183 32.9036 183 33.4609V39H181.547V33.4453C181.547 33.0026 181.482 32.6484 181.352 32.3828C181.221 32.112 181.031 31.9167 180.781 31.7969C180.531 31.6719 180.224 31.6094 179.859 31.6094C179.5 31.6094 179.172 31.6849 178.875 31.8359C178.583 31.987 178.331 32.1953 178.117 32.4609C177.909 32.7266 177.745 33.0312 177.625 33.375C177.51 33.7135 177.453 34.0729 177.453 34.4531ZM193.758 27.5625V39H192.312V29.3672L189.398 30.4297V29.125L193.531 27.5625H193.758Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  clipPath: "url(#clip0_147_2251)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M131 27.18L119.59 38.6L115.35 34.36L116.76 32.95L119.59 35.78L129.59 25.78L131 27.18ZM128.79 32.22C128.92 32.79 129 33.39 129 34C129 38.42 125.42 42 121 42C116.58 42 113 38.42 113 34C113 29.58 116.58 26 121 26C122.58 26 124.04 26.46 125.28 27.25L126.72 25.81C125.1 24.67 123.13 24 121 24C115.48 24 111 28.48 111 34C111 39.52 115.48 44 121 44C126.52 44 131 39.52 131 34C131 32.81 130.78 31.67 130.4 30.61L128.79 32.22Z",
  fill: "#4272F9"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_147_2251"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  fill: "white",
  transform: "translate(109 22)"
}))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "./editor/choice/save.js":
/*!*******************************!*\
  !*** ./editor/choice/save.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveAdvancedChoice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  useInnerBlocksProps
} = wp.blockEditor;
const {
  Fragment
} = wp.element;
function SaveAdvancedChoice() {
  const innerBlocksProps = useInnerBlocksProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, {
    ...innerBlocksProps
  });
}

/***/ }),

/***/ "./editor/choice/useAllowedBlocks.js":
/*!*******************************************!*\
  !*** ./editor/choice/useAllowedBlocks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useSelect
} = wp.data;
const SPECIFIC_INCLUDE = ['jet-forms/choice-control'];
function useAllowedBlocks() {
  return useSelect(select => {
    const allowedBlocks = [];
    const blockTypes = select('core/blocks').getBlockTypes();
    for (const blockType of blockTypes) {
      if (blockType.name && (SPECIFIC_INCLUDE.includes(blockType.name) || !blockType.name.includes('jet-forms/'))) {
        allowedBlocks.push(blockType.name);
      }
    }
    return allowedBlocks;
  }, []);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAllowedBlocks);

/***/ }),

/***/ "./editor/choice/useCheckedChoiceState.js":
/*!************************************************!*\
  !*** ./editor/choice/useCheckedChoiceState.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _choices_field_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../choices-field/context */ "./editor/choices-field/context.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./editor/choice/context.js");


const {
  useBlockEditContext
} = wp.blockEditor;
const {
  useContext
} = wp.element;

/**
 * Used for manipulating checked/unchecked state for choices.
 * Thanks to this, you can observe the appearance in both states of the block.
 *
 * This hook has no effect on block attributes.
 *
 * @returns {(*|(function(): void))[]}
 */
function useCheckedChoiceState() {
  const {
    clientId,
    name
  } = useBlockEditContext();
  const {
    current,
    updateCurrent
  } = useContext(_choices_field_context__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const {
    clientId: parentId
  } = useContext(_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  if ('jet-forms/choice' === name) {
    return [current.includes?.(clientId), () => {
      updateCurrent(clientId);
    }];
  }
  return [current.includes?.(parentId), () => {
    updateCurrent(parentId);
  }];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCheckedChoiceState);

/***/ }),

/***/ "./editor/choices-field/AddChoiceButton.js":
/*!*************************************************!*\
  !*** ./editor/choices-field/AddChoiceButton.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  ToolbarButton
} = wp.components;
const {
  SVG,
  Path
} = wp.primitives;
const {
  useBlockEditContext
} = wp.blockEditor;
const {
  __
} = wp.i18n;
const {
  useCallback
} = wp.element;
const {
  createBlock
} = wp.blocks;
const {
  useDispatch,
  select
} = wp.data;
function AddChoiceButton() {
  const {
    clientId
  } = useBlockEditContext();
  const {
    insertBlock
  } = useDispatch('core/block-editor');
  const addChoice = useCallback(() => {
    const countBlocks = select('core/block-editor').getBlockCount(clientId);
    const choice = createBlock('jet-forms/choice', {
      value: `value-of-${countBlocks}-choice`,
      calc_value: countBlocks
    });
    insertBlock(choice, countBlocks, clientId);
  }, [clientId]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarButton, {
    onClick: addChoice,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
      d: "M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5zM12 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6h-1.5v6a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h6V4z"
    })),
    label: __('Add new Choice', 'jet-form-builder')
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddChoiceButton);

/***/ }),

/***/ "./editor/choices-field/context.js":
/*!*****************************************!*\
  !*** ./editor/choices-field/context.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  createContext
} = wp.element;
const ChoicesFieldContext = createContext({
  current: false,
  updateCurrent: () => {}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChoicesFieldContext);

/***/ }),

/***/ "./editor/choices-field/edit.js":
/*!**************************************!*\
  !*** ./editor/choices-field/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditAdvancedChoicesField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeholder */ "./editor/choices-field/placeholder.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./editor/choices-field/context.js");
/* harmony import */ var _AddChoiceButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddChoiceButton */ "./editor/choices-field/AddChoiceButton.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview */ "./editor/choices-field/preview.js");





const {
  __
} = wp.i18n;
let {
  InspectorControls,
  useBlockProps,
  useInnerBlocksProps,
  useBlockEditContext
} = wp.blockEditor;
const {
  ToolBarFields,
  BlockLabel,
  BlockName,
  BlockDescription,
  BlockAdvancedValue,
  FieldWrapper,
  StylePanel,
  StyleColorItem,
  StyleColorItemsWrapper,
  StyleBorderItem,
  StyleBorderRadiusItem,
  SwitchPageOnChangeControls
} = JetFBComponents;
const {
  PanelBody,
  ToggleControl
} = wp.components;
const {
  useJetStyle,
  useUniqueNameOnDuplicate,
  useUniqKey
} = JetFBHooks;
const {
  useState
} = wp.element;
const ALLOWED_BLOCKS = ['jet-forms/choice'];
const DefaultPlaceHolder = () => {
  const {
    clientId
  } = useBlockEditContext();
  const id1 = clientId + 'sample-control-1';
  const id2 = clientId + 'sample-control-2';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "jet-form-builder-choice--item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'jet-form-builder-choice--item-control'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: id1,
    type: "checkbox",
    className: 'jet-form-builder-choice--item-control-input'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: id1
  }, __('Item #1', 'jet-form-builder')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "jet-form-builder-choice--item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'jet-form-builder-choice--item-control'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: id2,
    type: "checkbox",
    className: 'jet-form-builder-choice--item-control-input'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: id2
  }, __('Item #2', 'jet-form-builder')))));
};
function useCreateCurrentChoice({
  allow_multiple
}) {
  const [current, setCurrent] = useState(() => allow_multiple ? [] : '');
  const updateCurrent = value => {
    if (!allow_multiple) {
      setCurrent(current !== value ? value : '');
      return;
    }
    const tempCurrent = Array.isArray(current) ? current : [current];
    if (!tempCurrent.includes(value)) {
      setCurrent([...tempCurrent, value]);
      return;
    }
    setCurrent(tempCurrent.filter(item => item !== value));
  };
  return {
    current,
    updateCurrent
  };
}
const baseProps = {
  className: 'jet-form-builder-choice'
};
function EditAdvancedChoicesField(props) {
  const {
    isSelected,
    attributes,
    setAttributes
  } = props;
  useUniqueNameOnDuplicate();
  const uniqKey = useUniqKey();
  const blockProps = useBlockProps();
  const jetStyle = useJetStyle(baseProps);
  const innerBlocksProps = useInnerBlocksProps(jetStyle, {
    allowedBlocks: ALLOWED_BLOCKS,
    placeholder: isSelected ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_placeholder__WEBPACK_IMPORTED_MODULE_1__["default"], null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DefaultPlaceHolder, null)
  });
  const state = useCreateCurrentChoice(attributes);
  if (attributes.isPreview) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }
    }, _preview__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: state
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolBarFields, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddChoiceButton__WEBPACK_IMPORTED_MODULE_3__["default"], null)), !attributes.allow_multiple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SwitchPageOnChangeControls, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('General', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockLabel, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockName, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockDescription, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Value', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Allow multiple choices', 'jet-form-builder'),
    checked: attributes.allow_multiple,
    help: __(`Enable this option if you need to be able 
to select multiple options`, 'jet-form-builder'),
    onChange: allow_multiple => setAttributes({
      allow_multiple
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAdvancedValue, {
    help: attributes.allow_multiple && __(`You should list the choice 
values separated by commas that should be selected by default. But this 
is not the case when you use a dynamic value using a preset, macros, etc.`, 'jet-form-builder')
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StylePanel, {
    label: __('Default choice', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleColorItemsWrapper, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleColorItem, {
    cssVar: "--jfb-choice-text",
    label: __('Text Choice', 'jet-form-builder')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleColorItem, {
    cssVar: "--jfb-choice-bg",
    label: __('Background Choice', 'jet-form-builder')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleBorderItem, {
    cssVar: "--jfb-choice-border",
    label: __('Border', 'jet-form-builder'),
    enableAlpha: true,
    labelForControl: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleBorderRadiusItem, {
    cssVar: "--jfb-choice-border-radius",
    label: __('Radius', 'jet-form-builder')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StylePanel, {
    label: __('Hover choice', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleColorItemsWrapper, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleColorItem, {
    cssVar: "--jfb-choice-hover-text",
    label: __('Text Choice', 'jet-form-builder')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleColorItem, {
    cssVar: "--jfb-choice-hover-bg",
    label: __('Background Choice', 'jet-form-builder')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleBorderItem, {
    cssVar: "--jfb-choice-hover-border",
    label: __('Border', 'jet-form-builder'),
    enableAlpha: true,
    labelForControl: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleBorderRadiusItem, {
    cssVar: "--jfb-choice-hover-border-radius",
    label: __('Radius', 'jet-form-builder')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StylePanel, {
    label: __('Checked choice', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleColorItemsWrapper, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleColorItem, {
    cssVar: "--jfb-choice-checked-text",
    label: __('Text Choice', 'jet-form-builder')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleColorItem, {
    cssVar: "--jfb-choice-checked-bg",
    label: __('Background Choice', 'jet-form-builder')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleBorderItem, {
    cssVar: "--jfb-choice-checked-border",
    label: __('Border', 'jet-form-builder'),
    enableAlpha: true,
    labelForControl: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleBorderRadiusItem, {
    cssVar: "--jfb-choice-checked-border-radius",
    label: __('Radius', 'jet-form-builder')
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    key: uniqKey('viewBlock')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldWrapper, {
    ...props,
    key: uniqKey('viewBlockWrapper')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    ...innerBlocksProps
  }))));
}

/***/ }),

/***/ "./editor/choices-field/index.js":
/*!***************************************!*\
  !*** ./editor/choices-field/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _blocks_choices_field_block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/choices-field/edit.js");
/* harmony import */ var _blocks_choices_field_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/choices-field/block.json */ "../../blocks-metadata/choices-field/block.json");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variations */ "./editor/choices-field/variations.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./editor/choices-field/save.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transforms */ "./editor/choices-field/transforms.js");






const {
  name,
  icon
} = _blocks_choices_field_block_json__WEBPACK_IMPORTED_MODULE_2__;
const {
  __
} = wp.i18n;

// compatibility with WordPress <= 6.2
_blocks_choices_field_block_json__WEBPACK_IMPORTED_MODULE_2__.supports.__experimentalLayout = _blocks_choices_field_block_json__WEBPACK_IMPORTED_MODULE_2__.supports.layout;
const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  description: __(`Turn any block, text, images, or other objects into the object 
for selection with this block.`, 'jet-form-builder'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: {
    attributes: {
      isPreview: true
    }
  },
  variations: _variations__WEBPACK_IMPORTED_MODULE_3__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_5__["default"]
};


/***/ }),

/***/ "./editor/choices-field/placeholder.js":
/*!*********************************************!*\
  !*** ./editor/choices-field/placeholder.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./editor/choices-field/index.js");


const {
  __
} = wp.i18n;
const {
  useDispatch,
  useSelect
} = wp.data;
const {
  createBlocksFromInnerBlocksTemplate
} = wp.blocks;
let {
  __experimentalBlockVariationPicker,
  BlockVariationPicker,
  useBlockEditContext
} = wp.blockEditor;
BlockVariationPicker = BlockVariationPicker || __experimentalBlockVariationPicker;
const {
  useBlockAttributes
} = JetFBHooks;
function Placeholder() {
  const {
    clientId
  } = useBlockEditContext();
  const [, setAttributes] = useBlockAttributes();
  const {
    replaceInnerBlocks
  } = useDispatch('core/block-editor');
  const {
    variations,
    defaultVariation
  } = useSelect(select => {
    const {
      getBlockVariations,
      getDefaultBlockVariation
    } = select('core/blocks');
    return {
      defaultVariation: getDefaultBlockVariation(_index__WEBPACK_IMPORTED_MODULE_1__.name),
      variations: getBlockVariations(_index__WEBPACK_IMPORTED_MODULE_1__.name, 'block')
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockVariationPicker, {
    allowSkip: true,
    label: __('Select choices layout', 'jet-form-builder'),
    instructions: __('You can select one of predefined layout, or skip this step and build custom from scratch', 'jet-form-builder'),
    variations: variations,
    onSelect: (nextVariation = defaultVariation) => {
      if (nextVariation.attributes) {
        setAttributes(nextVariation.attributes);
      }
      if (nextVariation.innerBlocks) {
        replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks), true);
      }
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Placeholder);

/***/ }),

/***/ "./editor/choices-field/preview.js":
/*!*****************************************!*\
  !*** ./editor/choices-field/preview.js ***!
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
  rx: "4",
  fill: "#E2E8F0"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "12",
  y: "12",
  width: "86",
  height: "120",
  rx: "8",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "20",
  y: "44",
  width: "70",
  height: "60",
  rx: "4",
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M67 86V62H43V86H67ZM50.3333 76L53.6667 80.0133L58.3333 74L64.3333 82H45.6667L50.3333 76Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "20",
  y: "110",
  width: "70",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "20",
  y: "116",
  width: "58",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M47.5586 27.4648V28.0039C47.5586 28.6445 47.4785 29.2188 47.3184 29.7266C47.1582 30.2344 46.9277 30.666 46.627 31.0215C46.3262 31.377 45.9648 31.6484 45.543 31.8359C45.125 32.0234 44.6562 32.1172 44.1367 32.1172C43.6328 32.1172 43.1699 32.0234 42.748 31.8359C42.3301 31.6484 41.9668 31.377 41.6582 31.0215C41.3535 30.666 41.1172 30.2344 40.9492 29.7266C40.7812 29.2188 40.6973 28.6445 40.6973 28.0039V27.4648C40.6973 26.8242 40.7793 26.252 40.9434 25.748C41.1113 25.2402 41.3477 24.8086 41.6523 24.4531C41.957 24.0938 42.3184 23.8203 42.7363 23.6328C43.1582 23.4453 43.6211 23.3516 44.125 23.3516C44.6445 23.3516 45.1133 23.4453 45.5312 23.6328C45.9531 23.8203 46.3145 24.0938 46.6152 24.4531C46.9199 24.8086 47.1523 25.2402 47.3125 25.748C47.4766 26.252 47.5586 26.8242 47.5586 27.4648ZM46.4395 28.0039V27.4531C46.4395 26.9453 46.3867 26.4961 46.2812 26.1055C46.1797 25.7148 46.0293 25.3867 45.8301 25.1211C45.6309 24.8555 45.3867 24.6543 45.0977 24.5176C44.8125 24.3809 44.4883 24.3125 44.125 24.3125C43.7734 24.3125 43.4551 24.3809 43.1699 24.5176C42.8887 24.6543 42.6465 24.8555 42.4434 25.1211C42.2441 25.3867 42.0898 25.7148 41.9805 26.1055C41.8711 26.4961 41.8164 26.9453 41.8164 27.4531V28.0039C41.8164 28.5156 41.8711 28.9688 41.9805 29.3633C42.0898 29.7539 42.2461 30.084 42.4492 30.3535C42.6562 30.6191 42.9004 30.8203 43.1816 30.957C43.4668 31.0938 43.7852 31.1621 44.1367 31.1621C44.5039 31.1621 44.8301 31.0938 45.1152 30.957C45.4004 30.8203 45.6406 30.6191 45.8359 30.3535C46.0352 30.084 46.1855 29.7539 46.2871 29.3633C46.3887 28.9688 46.4395 28.5156 46.4395 28.0039ZM50.1719 26.8789V34.4375H49.082V25.6602H50.0781L50.1719 26.8789ZM54.4434 28.7773V28.9004C54.4434 29.3613 54.3887 29.7891 54.2793 30.1836C54.1699 30.5742 54.0098 30.9141 53.7988 31.2031C53.5918 31.4922 53.3359 31.7168 53.0312 31.877C52.7266 32.0371 52.377 32.1172 51.9824 32.1172C51.5801 32.1172 51.2246 32.0508 50.916 31.918C50.6074 31.7852 50.3457 31.5918 50.1309 31.3379C49.916 31.084 49.7441 30.7793 49.6152 30.4238C49.4902 30.0684 49.4043 29.668 49.3574 29.2227V28.5664C49.4043 28.0977 49.4922 27.6777 49.6211 27.3066C49.75 26.9355 49.9199 26.6191 50.1309 26.3574C50.3457 26.0918 50.6055 25.8906 50.9102 25.7539C51.2148 25.6133 51.5664 25.543 51.9648 25.543C52.3633 25.543 52.7168 25.6211 53.0254 25.7773C53.334 25.9297 53.5938 26.1484 53.8047 26.4336C54.0156 26.7188 54.1738 27.0605 54.2793 27.459C54.3887 27.8535 54.4434 28.293 54.4434 28.7773ZM53.3535 28.9004V28.7773C53.3535 28.4609 53.3203 28.1641 53.2539 27.8867C53.1875 27.6055 53.084 27.3594 52.9434 27.1484C52.8066 26.9336 52.6309 26.7656 52.416 26.6445C52.2012 26.5195 51.9453 26.457 51.6484 26.457C51.375 26.457 51.1367 26.5039 50.9336 26.5977C50.7344 26.6914 50.5645 26.8184 50.4238 26.9785C50.2832 27.1348 50.168 27.3145 50.0781 27.5176C49.9922 27.7168 49.9277 27.9238 49.8848 28.1387V29.6562C49.9629 29.9297 50.0723 30.1875 50.2129 30.4297C50.3535 30.668 50.541 30.8613 50.7754 31.0098C51.0098 31.1543 51.3047 31.2266 51.6602 31.2266C51.9531 31.2266 52.2051 31.166 52.416 31.0449C52.6309 30.9199 52.8066 30.75 52.9434 30.5352C53.084 30.3203 53.1875 30.0742 53.2539 29.7969C53.3203 29.5156 53.3535 29.2168 53.3535 28.9004ZM58.4805 25.6602V26.4922H55.0527V25.6602H58.4805ZM56.2129 24.1191H57.2969V30.4297C57.2969 30.6445 57.3301 30.8066 57.3965 30.916C57.4629 31.0254 57.5488 31.0977 57.6543 31.1328C57.7598 31.168 57.873 31.1855 57.9941 31.1855C58.084 31.1855 58.1777 31.1777 58.2754 31.1621C58.377 31.1426 58.4531 31.127 58.5039 31.1152L58.5098 32C58.4238 32.0273 58.3105 32.0527 58.1699 32.0762C58.0332 32.1035 57.8672 32.1172 57.6719 32.1172C57.4062 32.1172 57.1621 32.0645 56.9395 31.959C56.7168 31.8535 56.5391 31.6777 56.4062 31.4316C56.2773 31.1816 56.2129 30.8457 56.2129 30.4238V24.1191ZM60.9297 25.6602V32H59.8398V25.6602H60.9297ZM59.7578 23.9785C59.7578 23.8027 59.8105 23.6543 59.916 23.5332C60.0254 23.4121 60.1855 23.3516 60.3965 23.3516C60.6035 23.3516 60.7617 23.4121 60.8711 23.5332C60.9844 23.6543 61.041 23.8027 61.041 23.9785C61.041 24.1465 60.9844 24.291 60.8711 24.4121C60.7617 24.5293 60.6035 24.5879 60.3965 24.5879C60.1855 24.5879 60.0254 24.5293 59.916 24.4121C59.8105 24.291 59.7578 24.1465 59.7578 23.9785ZM62.3828 28.9004V28.7656C62.3828 28.3086 62.4492 27.8848 62.582 27.4941C62.7148 27.0996 62.9062 26.7578 63.1562 26.4688C63.4062 26.1758 63.709 25.9492 64.0645 25.7891C64.4199 25.625 64.8184 25.543 65.2598 25.543C65.7051 25.543 66.1055 25.625 66.4609 25.7891C66.8203 25.9492 67.125 26.1758 67.375 26.4688C67.6289 26.7578 67.8223 27.0996 67.9551 27.4941C68.0879 27.8848 68.1543 28.3086 68.1543 28.7656V28.9004C68.1543 29.3574 68.0879 29.7812 67.9551 30.1719C67.8223 30.5625 67.6289 30.9043 67.375 31.1973C67.125 31.4863 66.8223 31.7129 66.4668 31.877C66.1152 32.0371 65.7168 32.1172 65.2715 32.1172C64.8262 32.1172 64.4258 32.0371 64.0703 31.877C63.7148 31.7129 63.4102 31.4863 63.1562 31.1973C62.9062 30.9043 62.7148 30.5625 62.582 30.1719C62.4492 29.7812 62.3828 29.3574 62.3828 28.9004ZM63.4668 28.7656V28.9004C63.4668 29.2168 63.5039 29.5156 63.5781 29.7969C63.6523 30.0742 63.7637 30.3203 63.9121 30.5352C64.0645 30.75 64.2539 30.9199 64.4805 31.0449C64.707 31.166 64.9707 31.2266 65.2715 31.2266C65.5684 31.2266 65.8281 31.166 66.0508 31.0449C66.2773 30.9199 66.4648 30.75 66.6133 30.5352C66.7617 30.3203 66.873 30.0742 66.9473 29.7969C67.0254 29.5156 67.0645 29.2168 67.0645 28.9004V28.7656C67.0645 28.4531 67.0254 28.1582 66.9473 27.8809C66.873 27.5996 66.7598 27.3516 66.6074 27.1367C66.459 26.918 66.2715 26.7461 66.0449 26.6211C65.8223 26.4961 65.5605 26.4336 65.2598 26.4336C64.9629 26.4336 64.7012 26.4961 64.4746 26.6211C64.252 26.7461 64.0645 26.918 63.9121 27.1367C63.7637 27.3516 63.6523 27.5996 63.5781 27.8809C63.5039 28.1582 63.4668 28.4531 63.4668 28.7656ZM70.5977 27.0137V32H69.5137V25.6602H70.5391L70.5977 27.0137ZM70.3398 28.5898L69.8887 28.5723C69.8926 28.1387 69.957 27.7383 70.082 27.3711C70.207 27 70.3828 26.6777 70.6094 26.4043C70.8359 26.1309 71.1055 25.9199 71.418 25.7715C71.7344 25.6191 72.084 25.543 72.4668 25.543C72.7793 25.543 73.0605 25.5859 73.3105 25.6719C73.5605 25.7539 73.7734 25.8867 73.9492 26.0703C74.1289 26.2539 74.2656 26.4922 74.3594 26.7852C74.4531 27.0742 74.5 27.4277 74.5 27.8457V32H73.4102V27.834C73.4102 27.502 73.3613 27.2363 73.2637 27.0371C73.166 26.834 73.0234 26.6875 72.8359 26.5977C72.6484 26.5039 72.418 26.457 72.1445 26.457C71.875 26.457 71.6289 26.5137 71.4062 26.627C71.1875 26.7402 70.998 26.8965 70.8379 27.0957C70.6816 27.2949 70.5586 27.5234 70.4688 27.7812C70.3828 28.0352 70.3398 28.3047 70.3398 28.5898ZM82.5684 23.4219V32H81.4844V24.7754L79.2988 25.5723V24.5938L82.3984 23.4219H82.5684Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.6667 23.3333V32.6667H23.3333V23.3333H32.6667ZM32.6667 22H23.3333C22.6 22 22 22.6 22 23.3333V32.6667C22 33.4 22.6 34 23.3333 34H32.6667C33.4 34 34 33.4 34 32.6667V23.3333C34 22.6 33.4 22 32.6667 22Z",
  fill: "#64748B"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "107",
  y: "13",
  width: "84",
  height: "118",
  rx: "7",
  fill: "white",
  stroke: "#4272F9",
  strokeWidth: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "114",
  y: "44",
  width: "70",
  height: "60",
  rx: "4",
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M161 86V62H137V86H161ZM144.333 76L147.667 80.0133L152.333 74L158.333 82H139.667L144.333 76Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M141.559 27.4648V28.0039C141.559 28.6445 141.479 29.2188 141.318 29.7266C141.158 30.2344 140.928 30.666 140.627 31.0215C140.326 31.377 139.965 31.6484 139.543 31.8359C139.125 32.0234 138.656 32.1172 138.137 32.1172C137.633 32.1172 137.17 32.0234 136.748 31.8359C136.33 31.6484 135.967 31.377 135.658 31.0215C135.354 30.666 135.117 30.2344 134.949 29.7266C134.781 29.2188 134.697 28.6445 134.697 28.0039V27.4648C134.697 26.8242 134.779 26.252 134.943 25.748C135.111 25.2402 135.348 24.8086 135.652 24.4531C135.957 24.0938 136.318 23.8203 136.736 23.6328C137.158 23.4453 137.621 23.3516 138.125 23.3516C138.645 23.3516 139.113 23.4453 139.531 23.6328C139.953 23.8203 140.314 24.0938 140.615 24.4531C140.92 24.8086 141.152 25.2402 141.312 25.748C141.477 26.252 141.559 26.8242 141.559 27.4648ZM140.439 28.0039V27.4531C140.439 26.9453 140.387 26.4961 140.281 26.1055C140.18 25.7148 140.029 25.3867 139.83 25.1211C139.631 24.8555 139.387 24.6543 139.098 24.5176C138.812 24.3809 138.488 24.3125 138.125 24.3125C137.773 24.3125 137.455 24.3809 137.17 24.5176C136.889 24.6543 136.646 24.8555 136.443 25.1211C136.244 25.3867 136.09 25.7148 135.98 26.1055C135.871 26.4961 135.816 26.9453 135.816 27.4531V28.0039C135.816 28.5156 135.871 28.9688 135.98 29.3633C136.09 29.7539 136.246 30.084 136.449 30.3535C136.656 30.6191 136.9 30.8203 137.182 30.957C137.467 31.0938 137.785 31.1621 138.137 31.1621C138.504 31.1621 138.83 31.0938 139.115 30.957C139.4 30.8203 139.641 30.6191 139.836 30.3535C140.035 30.084 140.186 29.7539 140.287 29.3633C140.389 28.9688 140.439 28.5156 140.439 28.0039ZM144.172 26.8789V34.4375H143.082V25.6602H144.078L144.172 26.8789ZM148.443 28.7773V28.9004C148.443 29.3613 148.389 29.7891 148.279 30.1836C148.17 30.5742 148.01 30.9141 147.799 31.2031C147.592 31.4922 147.336 31.7168 147.031 31.877C146.727 32.0371 146.377 32.1172 145.982 32.1172C145.58 32.1172 145.225 32.0508 144.916 31.918C144.607 31.7852 144.346 31.5918 144.131 31.3379C143.916 31.084 143.744 30.7793 143.615 30.4238C143.49 30.0684 143.404 29.668 143.357 29.2227V28.5664C143.404 28.0977 143.492 27.6777 143.621 27.3066C143.75 26.9355 143.92 26.6191 144.131 26.3574C144.346 26.0918 144.605 25.8906 144.91 25.7539C145.215 25.6133 145.566 25.543 145.965 25.543C146.363 25.543 146.717 25.6211 147.025 25.7773C147.334 25.9297 147.594 26.1484 147.805 26.4336C148.016 26.7188 148.174 27.0605 148.279 27.459C148.389 27.8535 148.443 28.293 148.443 28.7773ZM147.354 28.9004V28.7773C147.354 28.4609 147.32 28.1641 147.254 27.8867C147.188 27.6055 147.084 27.3594 146.943 27.1484C146.807 26.9336 146.631 26.7656 146.416 26.6445C146.201 26.5195 145.945 26.457 145.648 26.457C145.375 26.457 145.137 26.5039 144.934 26.5977C144.734 26.6914 144.564 26.8184 144.424 26.9785C144.283 27.1348 144.168 27.3145 144.078 27.5176C143.992 27.7168 143.928 27.9238 143.885 28.1387V29.6562C143.963 29.9297 144.072 30.1875 144.213 30.4297C144.354 30.668 144.541 30.8613 144.775 31.0098C145.01 31.1543 145.305 31.2266 145.66 31.2266C145.953 31.2266 146.205 31.166 146.416 31.0449C146.631 30.9199 146.807 30.75 146.943 30.5352C147.084 30.3203 147.188 30.0742 147.254 29.7969C147.32 29.5156 147.354 29.2168 147.354 28.9004ZM152.48 25.6602V26.4922H149.053V25.6602H152.48ZM150.213 24.1191H151.297V30.4297C151.297 30.6445 151.33 30.8066 151.396 30.916C151.463 31.0254 151.549 31.0977 151.654 31.1328C151.76 31.168 151.873 31.1855 151.994 31.1855C152.084 31.1855 152.178 31.1777 152.275 31.1621C152.377 31.1426 152.453 31.127 152.504 31.1152L152.51 32C152.424 32.0273 152.311 32.0527 152.17 32.0762C152.033 32.1035 151.867 32.1172 151.672 32.1172C151.406 32.1172 151.162 32.0645 150.939 31.959C150.717 31.8535 150.539 31.6777 150.406 31.4316C150.277 31.1816 150.213 30.8457 150.213 30.4238V24.1191ZM154.93 25.6602V32H153.84V25.6602H154.93ZM153.758 23.9785C153.758 23.8027 153.811 23.6543 153.916 23.5332C154.025 23.4121 154.186 23.3516 154.396 23.3516C154.604 23.3516 154.762 23.4121 154.871 23.5332C154.984 23.6543 155.041 23.8027 155.041 23.9785C155.041 24.1465 154.984 24.291 154.871 24.4121C154.762 24.5293 154.604 24.5879 154.396 24.5879C154.186 24.5879 154.025 24.5293 153.916 24.4121C153.811 24.291 153.758 24.1465 153.758 23.9785ZM156.383 28.9004V28.7656C156.383 28.3086 156.449 27.8848 156.582 27.4941C156.715 27.0996 156.906 26.7578 157.156 26.4688C157.406 26.1758 157.709 25.9492 158.064 25.7891C158.42 25.625 158.818 25.543 159.26 25.543C159.705 25.543 160.105 25.625 160.461 25.7891C160.82 25.9492 161.125 26.1758 161.375 26.4688C161.629 26.7578 161.822 27.0996 161.955 27.4941C162.088 27.8848 162.154 28.3086 162.154 28.7656V28.9004C162.154 29.3574 162.088 29.7812 161.955 30.1719C161.822 30.5625 161.629 30.9043 161.375 31.1973C161.125 31.4863 160.822 31.7129 160.467 31.877C160.115 32.0371 159.717 32.1172 159.271 32.1172C158.826 32.1172 158.426 32.0371 158.07 31.877C157.715 31.7129 157.41 31.4863 157.156 31.1973C156.906 30.9043 156.715 30.5625 156.582 30.1719C156.449 29.7812 156.383 29.3574 156.383 28.9004ZM157.467 28.7656V28.9004C157.467 29.2168 157.504 29.5156 157.578 29.7969C157.652 30.0742 157.764 30.3203 157.912 30.5352C158.064 30.75 158.254 30.9199 158.48 31.0449C158.707 31.166 158.971 31.2266 159.271 31.2266C159.568 31.2266 159.828 31.166 160.051 31.0449C160.277 30.9199 160.465 30.75 160.613 30.5352C160.762 30.3203 160.873 30.0742 160.947 29.7969C161.025 29.5156 161.064 29.2168 161.064 28.9004V28.7656C161.064 28.4531 161.025 28.1582 160.947 27.8809C160.873 27.5996 160.76 27.3516 160.607 27.1367C160.459 26.918 160.271 26.7461 160.045 26.6211C159.822 26.4961 159.561 26.4336 159.26 26.4336C158.963 26.4336 158.701 26.4961 158.475 26.6211C158.252 26.7461 158.064 26.918 157.912 27.1367C157.764 27.3516 157.652 27.5996 157.578 27.8809C157.504 28.1582 157.467 28.4531 157.467 28.7656ZM164.598 27.0137V32H163.514V25.6602H164.539L164.598 27.0137ZM164.34 28.5898L163.889 28.5723C163.893 28.1387 163.957 27.7383 164.082 27.3711C164.207 27 164.383 26.6777 164.609 26.4043C164.836 26.1309 165.105 25.9199 165.418 25.7715C165.734 25.6191 166.084 25.543 166.467 25.543C166.779 25.543 167.061 25.5859 167.311 25.6719C167.561 25.7539 167.773 25.8867 167.949 26.0703C168.129 26.2539 168.266 26.4922 168.359 26.7852C168.453 27.0742 168.5 27.4277 168.5 27.8457V32H167.41V27.834C167.41 27.502 167.361 27.2363 167.264 27.0371C167.166 26.834 167.023 26.6875 166.836 26.5977C166.648 26.5039 166.418 26.457 166.145 26.457C165.875 26.457 165.629 26.5137 165.406 26.627C165.188 26.7402 164.998 26.8965 164.838 27.0957C164.682 27.2949 164.559 27.5234 164.469 27.7812C164.383 28.0352 164.34 28.3047 164.34 28.5898ZM178.596 31.1094V32H173.012V31.2207L175.807 28.1094C176.15 27.7266 176.416 27.4023 176.604 27.1367C176.795 26.8672 176.928 26.627 177.002 26.416C177.08 26.2012 177.119 25.9824 177.119 25.7598C177.119 25.4785 177.061 25.2246 176.943 24.998C176.83 24.7676 176.662 24.584 176.439 24.4473C176.217 24.3105 175.947 24.2422 175.631 24.2422C175.252 24.2422 174.936 24.3164 174.682 24.4648C174.432 24.6094 174.244 24.8125 174.119 25.0742C173.994 25.3359 173.932 25.6367 173.932 25.9766H172.848C172.848 25.4961 172.953 25.0566 173.164 24.6582C173.375 24.2598 173.688 23.9434 174.102 23.709C174.516 23.4707 175.025 23.3516 175.631 23.3516C176.17 23.3516 176.631 23.4473 177.014 23.6387C177.396 23.8262 177.689 24.0918 177.893 24.4355C178.1 24.7754 178.203 25.1738 178.203 25.6309C178.203 25.8809 178.16 26.1348 178.074 26.3926C177.992 26.6465 177.877 26.9004 177.729 27.1543C177.584 27.4082 177.414 27.6582 177.219 27.9043C177.027 28.1504 176.822 28.3926 176.604 28.6309L174.318 31.1094H178.596Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  clipPath: "url(#clip0_171_1873)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M128.667 23.4533L121.06 31.0667L118.233 28.24L119.173 27.3L121.06 29.1867L127.727 22.52L128.667 23.4533ZM127.193 26.8133C127.28 27.1933 127.333 27.5933 127.333 28C127.333 30.9467 124.947 33.3333 122 33.3333C119.053 33.3333 116.667 30.9467 116.667 28C116.667 25.0533 119.053 22.6667 122 22.6667C123.053 22.6667 124.027 22.9733 124.853 23.5L125.813 22.54C124.733 21.78 123.42 21.3333 122 21.3333C118.32 21.3333 115.333 24.32 115.333 28C115.333 31.68 118.32 34.6667 122 34.6667C125.68 34.6667 128.667 31.68 128.667 28C128.667 27.2067 128.52 26.4467 128.267 25.74L127.193 26.8133Z",
  fill: "#4272F9"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "114",
  y: "110",
  width: "70",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "114",
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
  rx: "8",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "208",
  y: "110",
  width: "70",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "208",
  y: "116",
  width: "58",
  height: "4",
  rx: "2",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "208",
  y: "44",
  width: "70",
  height: "60",
  rx: "4",
  fill: "#F1F5F9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M255 86V62H231V86H255ZM238.333 76L241.667 80.0133L246.333 74L252.333 82H233.667L238.333 76Z",
  fill: "#CBD5E1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M235.559 27.4648V28.0039C235.559 28.6445 235.479 29.2188 235.318 29.7266C235.158 30.2344 234.928 30.666 234.627 31.0215C234.326 31.377 233.965 31.6484 233.543 31.8359C233.125 32.0234 232.656 32.1172 232.137 32.1172C231.633 32.1172 231.17 32.0234 230.748 31.8359C230.33 31.6484 229.967 31.377 229.658 31.0215C229.354 30.666 229.117 30.2344 228.949 29.7266C228.781 29.2188 228.697 28.6445 228.697 28.0039V27.4648C228.697 26.8242 228.779 26.252 228.943 25.748C229.111 25.2402 229.348 24.8086 229.652 24.4531C229.957 24.0938 230.318 23.8203 230.736 23.6328C231.158 23.4453 231.621 23.3516 232.125 23.3516C232.645 23.3516 233.113 23.4453 233.531 23.6328C233.953 23.8203 234.314 24.0938 234.615 24.4531C234.92 24.8086 235.152 25.2402 235.312 25.748C235.477 26.252 235.559 26.8242 235.559 27.4648ZM234.439 28.0039V27.4531C234.439 26.9453 234.387 26.4961 234.281 26.1055C234.18 25.7148 234.029 25.3867 233.83 25.1211C233.631 24.8555 233.387 24.6543 233.098 24.5176C232.812 24.3809 232.488 24.3125 232.125 24.3125C231.773 24.3125 231.455 24.3809 231.17 24.5176C230.889 24.6543 230.646 24.8555 230.443 25.1211C230.244 25.3867 230.09 25.7148 229.98 26.1055C229.871 26.4961 229.816 26.9453 229.816 27.4531V28.0039C229.816 28.5156 229.871 28.9688 229.98 29.3633C230.09 29.7539 230.246 30.084 230.449 30.3535C230.656 30.6191 230.9 30.8203 231.182 30.957C231.467 31.0938 231.785 31.1621 232.137 31.1621C232.504 31.1621 232.83 31.0938 233.115 30.957C233.4 30.8203 233.641 30.6191 233.836 30.3535C234.035 30.084 234.186 29.7539 234.287 29.3633C234.389 28.9688 234.439 28.5156 234.439 28.0039ZM238.172 26.8789V34.4375H237.082V25.6602H238.078L238.172 26.8789ZM242.443 28.7773V28.9004C242.443 29.3613 242.389 29.7891 242.279 30.1836C242.17 30.5742 242.01 30.9141 241.799 31.2031C241.592 31.4922 241.336 31.7168 241.031 31.877C240.727 32.0371 240.377 32.1172 239.982 32.1172C239.58 32.1172 239.225 32.0508 238.916 31.918C238.607 31.7852 238.346 31.5918 238.131 31.3379C237.916 31.084 237.744 30.7793 237.615 30.4238C237.49 30.0684 237.404 29.668 237.357 29.2227V28.5664C237.404 28.0977 237.492 27.6777 237.621 27.3066C237.75 26.9355 237.92 26.6191 238.131 26.3574C238.346 26.0918 238.605 25.8906 238.91 25.7539C239.215 25.6133 239.566 25.543 239.965 25.543C240.363 25.543 240.717 25.6211 241.025 25.7773C241.334 25.9297 241.594 26.1484 241.805 26.4336C242.016 26.7188 242.174 27.0605 242.279 27.459C242.389 27.8535 242.443 28.293 242.443 28.7773ZM241.354 28.9004V28.7773C241.354 28.4609 241.32 28.1641 241.254 27.8867C241.188 27.6055 241.084 27.3594 240.943 27.1484C240.807 26.9336 240.631 26.7656 240.416 26.6445C240.201 26.5195 239.945 26.457 239.648 26.457C239.375 26.457 239.137 26.5039 238.934 26.5977C238.734 26.6914 238.564 26.8184 238.424 26.9785C238.283 27.1348 238.168 27.3145 238.078 27.5176C237.992 27.7168 237.928 27.9238 237.885 28.1387V29.6562C237.963 29.9297 238.072 30.1875 238.213 30.4297C238.354 30.668 238.541 30.8613 238.775 31.0098C239.01 31.1543 239.305 31.2266 239.66 31.2266C239.953 31.2266 240.205 31.166 240.416 31.0449C240.631 30.9199 240.807 30.75 240.943 30.5352C241.084 30.3203 241.188 30.0742 241.254 29.7969C241.32 29.5156 241.354 29.2168 241.354 28.9004ZM246.48 25.6602V26.4922H243.053V25.6602H246.48ZM244.213 24.1191H245.297V30.4297C245.297 30.6445 245.33 30.8066 245.396 30.916C245.463 31.0254 245.549 31.0977 245.654 31.1328C245.76 31.168 245.873 31.1855 245.994 31.1855C246.084 31.1855 246.178 31.1777 246.275 31.1621C246.377 31.1426 246.453 31.127 246.504 31.1152L246.51 32C246.424 32.0273 246.311 32.0527 246.17 32.0762C246.033 32.1035 245.867 32.1172 245.672 32.1172C245.406 32.1172 245.162 32.0645 244.939 31.959C244.717 31.8535 244.539 31.6777 244.406 31.4316C244.277 31.1816 244.213 30.8457 244.213 30.4238V24.1191ZM248.93 25.6602V32H247.84V25.6602H248.93ZM247.758 23.9785C247.758 23.8027 247.811 23.6543 247.916 23.5332C248.025 23.4121 248.186 23.3516 248.396 23.3516C248.604 23.3516 248.762 23.4121 248.871 23.5332C248.984 23.6543 249.041 23.8027 249.041 23.9785C249.041 24.1465 248.984 24.291 248.871 24.4121C248.762 24.5293 248.604 24.5879 248.396 24.5879C248.186 24.5879 248.025 24.5293 247.916 24.4121C247.811 24.291 247.758 24.1465 247.758 23.9785ZM250.383 28.9004V28.7656C250.383 28.3086 250.449 27.8848 250.582 27.4941C250.715 27.0996 250.906 26.7578 251.156 26.4688C251.406 26.1758 251.709 25.9492 252.064 25.7891C252.42 25.625 252.818 25.543 253.26 25.543C253.705 25.543 254.105 25.625 254.461 25.7891C254.82 25.9492 255.125 26.1758 255.375 26.4688C255.629 26.7578 255.822 27.0996 255.955 27.4941C256.088 27.8848 256.154 28.3086 256.154 28.7656V28.9004C256.154 29.3574 256.088 29.7812 255.955 30.1719C255.822 30.5625 255.629 30.9043 255.375 31.1973C255.125 31.4863 254.822 31.7129 254.467 31.877C254.115 32.0371 253.717 32.1172 253.271 32.1172C252.826 32.1172 252.426 32.0371 252.07 31.877C251.715 31.7129 251.41 31.4863 251.156 31.1973C250.906 30.9043 250.715 30.5625 250.582 30.1719C250.449 29.7812 250.383 29.3574 250.383 28.9004ZM251.467 28.7656V28.9004C251.467 29.2168 251.504 29.5156 251.578 29.7969C251.652 30.0742 251.764 30.3203 251.912 30.5352C252.064 30.75 252.254 30.9199 252.48 31.0449C252.707 31.166 252.971 31.2266 253.271 31.2266C253.568 31.2266 253.828 31.166 254.051 31.0449C254.277 30.9199 254.465 30.75 254.613 30.5352C254.762 30.3203 254.873 30.0742 254.947 29.7969C255.025 29.5156 255.064 29.2168 255.064 28.9004V28.7656C255.064 28.4531 255.025 28.1582 254.947 27.8809C254.873 27.5996 254.76 27.3516 254.607 27.1367C254.459 26.918 254.271 26.7461 254.045 26.6211C253.822 26.4961 253.561 26.4336 253.26 26.4336C252.963 26.4336 252.701 26.4961 252.475 26.6211C252.252 26.7461 252.064 26.918 251.912 27.1367C251.764 27.3516 251.652 27.5996 251.578 27.8809C251.504 28.1582 251.467 28.4531 251.467 28.7656ZM258.598 27.0137V32H257.514V25.6602H258.539L258.598 27.0137ZM258.34 28.5898L257.889 28.5723C257.893 28.1387 257.957 27.7383 258.082 27.3711C258.207 27 258.383 26.6777 258.609 26.4043C258.836 26.1309 259.105 25.9199 259.418 25.7715C259.734 25.6191 260.084 25.543 260.467 25.543C260.779 25.543 261.061 25.5859 261.311 25.6719C261.561 25.7539 261.773 25.8867 261.949 26.0703C262.129 26.2539 262.266 26.4922 262.359 26.7852C262.453 27.0742 262.5 27.4277 262.5 27.8457V32H261.41V27.834C261.41 27.502 261.361 27.2363 261.264 27.0371C261.166 26.834 261.023 26.6875 260.836 26.5977C260.648 26.5039 260.418 26.457 260.145 26.457C259.875 26.457 259.629 26.5137 259.406 26.627C259.188 26.7402 258.998 26.8965 258.838 27.0957C258.682 27.2949 258.559 27.5234 258.469 27.7812C258.383 28.0352 258.34 28.3047 258.34 28.5898ZM268.588 27.2012H269.361C269.74 27.2012 270.053 27.1387 270.299 27.0137C270.549 26.8848 270.734 26.7109 270.855 26.4922C270.98 26.2695 271.043 26.0195 271.043 25.7422C271.043 25.4141 270.988 25.1387 270.879 24.916C270.77 24.6934 270.605 24.5254 270.387 24.4121C270.168 24.2988 269.891 24.2422 269.555 24.2422C269.25 24.2422 268.98 24.3027 268.746 24.4238C268.516 24.541 268.334 24.709 268.201 24.9277C268.072 25.1465 268.008 25.4043 268.008 25.7012H266.924C266.924 25.2676 267.033 24.873 267.252 24.5176C267.471 24.1621 267.777 23.8789 268.172 23.668C268.57 23.457 269.031 23.3516 269.555 23.3516C270.07 23.3516 270.521 23.4434 270.908 23.627C271.295 23.8066 271.596 24.0762 271.811 24.4355C272.025 24.791 272.133 25.2344 272.133 25.7656C272.133 25.9805 272.082 26.2109 271.98 26.457C271.883 26.6992 271.729 26.9258 271.518 27.1367C271.311 27.3477 271.041 27.5215 270.709 27.6582C270.377 27.791 269.979 27.8574 269.514 27.8574H268.588V27.2012ZM268.588 28.0918V27.4414H269.514C270.057 27.4414 270.506 27.5059 270.861 27.6348C271.217 27.7637 271.496 27.9355 271.699 28.1504C271.906 28.3652 272.051 28.6016 272.133 28.8594C272.219 29.1133 272.262 29.3672 272.262 29.6211C272.262 30.0195 272.193 30.373 272.057 30.6816C271.924 30.9902 271.734 31.252 271.488 31.4668C271.246 31.6816 270.961 31.8438 270.633 31.9531C270.305 32.0625 269.947 32.1172 269.561 32.1172C269.189 32.1172 268.84 32.0645 268.512 31.959C268.188 31.8535 267.9 31.7012 267.65 31.502C267.4 31.2988 267.205 31.0508 267.064 30.7578C266.924 30.4609 266.854 30.123 266.854 29.7441H267.938C267.938 30.041 268.002 30.3008 268.131 30.5234C268.264 30.7461 268.451 30.9199 268.693 31.0449C268.939 31.166 269.229 31.2266 269.561 31.2266C269.893 31.2266 270.178 31.1699 270.416 31.0566C270.658 30.9395 270.844 30.7637 270.973 30.5293C271.105 30.2949 271.172 30 271.172 29.6445C271.172 29.2891 271.098 28.998 270.949 28.7715C270.801 28.541 270.59 28.3711 270.316 28.2617C270.047 28.1484 269.729 28.0918 269.361 28.0918H268.588Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M220.667 23.3333V32.6667H211.333V23.3333H220.667ZM220.667 22H211.333C210.6 22 210 22.6 210 23.3333V32.6667C210 33.4 210.6 34 211.333 34H220.667C221.4 34 222 33.4 222 32.6667V23.3333C222 22.6 221.4 22 220.667 22Z",
  fill: "#64748B"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "clip0_171_1873"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "16",
  height: "16",
  fill: "white",
  transform: "translate(114 20)"
}))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preview);

/***/ }),

/***/ "./editor/choices-field/save.js":
/*!**************************************!*\
  !*** ./editor/choices-field/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveAdvancedChoicesField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  useInnerBlocksProps
} = wp.blockEditor;
const {
  Fragment
} = wp.element;
function SaveAdvancedChoicesField() {
  const innerBlocksProps = useInnerBlocksProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, {
    ...innerBlocksProps
  });
}

/***/ }),

/***/ "./editor/choices-field/transforms.js":
/*!********************************************!*\
  !*** ./editor/choices-field/transforms.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./editor/choices-field/index.js");

const {
  createBlock
} = wp.blocks;
const isMatch = attributes => 'manual_input' === attributes.field_options_from && Array.isArray(attributes.field_options) && attributes.field_options.length > 0;
const transform = (attributes, allow_multiple) => {
  var _attributes$switch_on;
  const choices = attributes.field_options.map(option => {
    var _option$calculate, _option$label;
    return createBlock('jet-forms/choice', {
      value: option.value,
      calc_value: (_option$calculate = option.calculate) !== null && _option$calculate !== void 0 ? _option$calculate : ''
    }, [createBlock('jet-forms/choice-control', {
      label: (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : ''
    })]);
  });
  return createBlock(_index__WEBPACK_IMPORTED_MODULE_0__.name, {
    name: attributes.name,
    label: attributes.label,
    desc: attributes.desc,
    value: attributes.value,
    default: attributes.default,
    required: attributes.required,
    visibility: attributes.visibility,
    switch_on_change: (_attributes$switch_on = attributes.switch_on_change) !== null && _attributes$switch_on !== void 0 ? _attributes$switch_on : false,
    allow_multiple: !!allow_multiple
  }, choices);
};
const transforms = {
  from: [{
    type: 'block',
    blocks: ['jet-forms/checkbox-field'],
    isMatch,
    transform: attributes => transform(attributes, true),
    priority: -1
  }, {
    type: 'block',
    blocks: ['jet-forms/radio-field'],
    isMatch,
    transform: attributes => transform(attributes, false),
    priority: -1
  }, {
    type: 'block',
    blocks: ['jet-forms/select-field'],
    isMatch,
    transform: attributes => transform(attributes, attributes.multiple),
    priority: -1
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transforms);

/***/ }),

/***/ "./editor/choices-field/variations.js":
/*!********************************************!*\
  !*** ./editor/choices-field/variations.js ***!
  \********************************************/
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
  assetUrl
} = JetFBActions;
const imageBlock = alt => ['core/image', {
  alt,
  url: assetUrl('img/image-placeholder.jpg'),
  width: 100,
  height: 100
}];
const variations = [{
  name: 'simple-empty',
  title: __('Simple Empty', 'jet-form-builder'),
  innerBlocks: [['jet-forms/choice'], ['jet-forms/choice']],
  isDefault: true,
  scope: ['hidden']
}, {
  name: 'simple-buttons',
  title: __('Text', 'jet-form-builder'),
  description: __('Simple buttons list with labels', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M24.7125 10.7017C25.1 10.3082 25.0952 9.67505 24.7017 9.28752C24.3082 8.89998 23.675 8.90482 23.2875 9.29831L12.1609 20.5961L8.69122 17.2774C8.29212 16.8956 7.65911 16.9097 7.27736 17.3088C6.89561 17.7079 6.90967 18.3409 7.30878 18.7226L12.2028 23.4039L24.7125 10.7017Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4ZM4 2H28C29.1046 2 30 2.89543 30 4V28C30 29.1046 29.1046 30 28 30H4C2.89543 30 2 29.1046 2 28V4C2 2.89543 2.89543 2 4 2Z",
    fill: "#0F172A"
  })),
  innerBlocks: [['jet-forms/choice', {
    value: 'Book Name #1',
    calc_value: '100'
  }, [['core/paragraph', {
    content: 'Book Name #1'
  }]]], ['jet-forms/choice', {
    value: 'Book Name #2',
    calc_value: '200'
  }, [['core/paragraph', {
    content: 'Book Name #2'
  }]]], ['jet-forms/choice', {
    value: 'Book Name #3',
    calc_value: '200'
  }, [['core/paragraph', {
    content: 'Book Name #3'
  }]]]],
  scope: ['block']
}, {
  name: 'images',
  title: __('Images', 'jet-form-builder'),
  description: __('Image buttons', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.5 15C18.433 15 20 13.433 20 11.5C20 9.567 18.433 8 16.5 8C14.567 8 13 9.567 13 11.5C13 13.433 14.567 15 16.5 15ZM16.5 13C17.3284 13 18 12.3284 18 11.5C18 10.6716 17.3284 10 16.5 10C15.6716 10 15 10.6716 15 11.5C15 12.3284 15.6716 13 16.5 13Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.7917 17.2985C20.6037 17.1076 20.3469 17 20.0789 17C19.811 17 19.5542 17.1076 19.3662 17.2985L15.1579 21.5744L12.2917 18.6622C12.1037 18.4712 11.8469 18.3636 11.5789 18.3636C11.311 18.3636 11.0542 18.4712 10.8662 18.6622L7.28729 22.2985C6.89989 22.6922 6.90492 23.3253 7.29854 23.7127C7.69216 24.1001 8.32531 24.0951 8.71271 23.7015L11.5789 20.7892L14.4452 23.7015C14.6332 23.8924 14.8899 24 15.1579 24C15.4259 24 15.6826 23.8924 15.8706 23.7015L20.0789 19.4256L24.2873 23.7015C24.6747 24.0951 25.3078 24.1001 25.7015 23.7127C26.0951 23.3253 26.1001 22.6922 25.7127 22.2985L20.7917 17.2985Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4ZM4 2H28C29.1046 2 30 2.89543 30 4V28C30 29.1046 29.1046 30 28 30H4C2.89543 30 2 29.1046 2 28V4C2 2.89543 2.89543 2 4 2Z",
    fill: "#0F172A"
  })),
  innerBlocks: [['jet-forms/choice', {
    value: 'Book Name #1',
    calc_value: '100'
  }, [imageBlock('Book Name #1')]], ['jet-forms/choice', {
    value: 'Book Name #2',
    calc_value: '200'
  }, [imageBlock('Book Name #2')]], ['jet-forms/choice', {
    value: 'Book Name #3',
    calc_value: '200'
  }, [imageBlock('Book Name #3')]]],
  scope: ['block']
}, {
  name: 'buttons-with-images',
  title: __('Images with description', 'jet-form-builder'),
  description: __('Image buttons with labels in footer', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "32",
    height: "38",
    viewBox: "0 0 32 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C14.567 6 13 7.567 13 9.5C13 11.433 14.567 13 16.5 13ZM16.5 11C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.7917 15.2985C20.6037 15.1076 20.3469 15 20.0789 15C19.811 15 19.5542 15.1076 19.3662 15.2985L15.1579 19.5744L12.2917 16.6622C12.1037 16.4712 11.8469 16.3636 11.5789 16.3636C11.311 16.3636 11.0542 16.4712 10.8662 16.6622L7.28729 20.2985C6.89989 20.6922 6.90492 21.3253 7.29854 21.7127C7.69216 22.1001 8.32531 22.0951 8.71271 21.7015L11.5789 18.7892L14.4452 21.7015C14.6332 21.8924 14.8899 22 15.1579 22C15.4259 22 15.6826 21.8924 15.8706 21.7015L20.0789 17.4256L24.2873 21.7015C24.6747 22.0951 25.3078 22.1001 25.7015 21.7127C26.0951 21.3253 26.1001 20.6922 25.7127 20.2985L20.7917 15.2985Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V24C32 26.2091 30.2091 28 28 28H4C1.79086 28 0 26.2091 0 24V4ZM4 2H28C29.1046 2 30 2.89543 30 4V24C30 25.1046 29.1046 26 28 26H4C2.89543 26 2 25.1046 2 24V4C2 2.89543 2.89543 2 4 2Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1 32C0.447715 32 0 32.4477 0 33C0 33.5523 0.447715 34 1 34H31C31.5523 34 32 33.5523 32 33C32 32.4477 31.5523 32 31 32H1Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 37C0 36.4477 0.447715 36 1 36H27C27.5523 36 28 36.4477 28 37C28 37.5523 27.5523 38 27 38H1C0.447715 38 0 37.5523 0 37Z",
    fill: "#0F172A"
  })),
  innerBlocks: [['jet-forms/choice', {
    value: 'Book Name #1',
    calc_value: '100'
  }, [imageBlock('Book Name #1'), ['core/paragraph', {
    content: 'Book Name #1'
  }]]], ['jet-forms/choice', {
    value: 'Book Name #2',
    calc_value: '200'
  }, [imageBlock('Book Name #2'), ['core/paragraph', {
    content: 'Book Name #2'
  }]]], ['jet-forms/choice', {
    value: 'Book Name #3',
    calc_value: '200'
  }, [imageBlock('Book Name #3'), ['core/paragraph', {
    content: 'Book Name #3'
  }]]]],
  scope: ['block']
}, {
  name: 'images-with-controls',
  title: __('Images with controls', 'jet-form-builder'),
  description: __('Image buttons with controls in footer', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "32",
    height: "40",
    viewBox: "0 0 32 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0ZM2 5C2 6.65685 3.34315 8 5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 3C12 2.44772 12.4477 2 13 2H31C31.5523 2 32 2.44772 32 3C32 3.55228 31.5523 4 31 4H13C12.4477 4 12 3.55228 12 3Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.5 25C18.433 25 20 23.433 20 21.5C20 19.567 18.433 18 16.5 18C14.567 18 13 19.567 13 21.5C13 23.433 14.567 25 16.5 25ZM16.5 23C17.3284 23 18 22.3284 18 21.5C18 20.6716 17.3284 20 16.5 20C15.6716 20 15 20.6716 15 21.5C15 22.3284 15.6716 23 16.5 23Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.7917 27.2985C20.6037 27.1076 20.3469 27 20.0789 27C19.811 27 19.5542 27.1076 19.3662 27.2985L15.1579 31.5744L12.2917 28.6622C12.1037 28.4712 11.8469 28.3636 11.5789 28.3636C11.311 28.3636 11.0542 28.4712 10.8662 28.6622L7.28729 32.2985C6.89989 32.6922 6.90492 33.3253 7.29854 33.7127C7.69216 34.1001 8.32531 34.0951 8.71271 33.7015L11.5789 30.7892L14.4452 33.7015C14.6332 33.8924 14.8899 34 15.1579 34C15.4259 34 15.6826 33.8924 15.8706 33.7015L20.0789 29.4256L24.2873 33.7015C24.6747 34.0951 25.3078 34.1001 25.7015 33.7127C26.0951 33.3253 26.1001 32.6922 25.7127 32.2985L20.7917 27.2985Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 12C1.79086 12 0 13.7909 0 16V36C0 38.2091 1.79086 40 4 40H28C30.2091 40 32 38.2091 32 36V16C32 13.7909 30.2091 12 28 12H4ZM28 14H4C2.89543 14 2 14.8954 2 16V36C2 37.1046 2.89543 38 4 38H28C29.1046 38 30 37.1046 30 36V16C30 14.8954 29.1046 14 28 14Z",
    fill: "#0F172A"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8H31C31.5523 8 32 7.55228 32 7C32 6.44772 31.5523 6 31 6H13Z",
    fill: "#0F172A"
  })),
  innerBlocks: [['jet-forms/choice', {
    value: 'Book Name #1',
    calc_value: '100'
  }, [imageBlock('Book Name #1'), ['jet-forms/choice-control', {
    label: 'Book Name #1'
  }]]], ['jet-forms/choice', {
    value: 'Book Name #2',
    calc_value: '200'
  }, [imageBlock('Book Name #2'), ['jet-forms/choice-control', {
    label: 'Book Name #1'
  }]]], ['jet-forms/choice', {
    value: 'Book Name #3',
    calc_value: '200'
  }, [imageBlock('Book Name #3'), ['jet-forms/choice-control', {
    label: 'Book Name #1'
  }]]]],
  scope: ['block']
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variations);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "../../blocks-metadata/choice-control/block.json":
/*!*******************************************************!*\
  !*** ../../blocks-metadata/choice-control/block.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/choice-control","title":"Choice Control","ancestor":["jet-forms/choice"],"category":"jet-form-builder-fields","keywords":["jetformbuilder","field","check","choice","control"],"description":"","icon":"<svg width=\\"56\\" height=\\"56\\" viewBox=\\"0 0 56 56\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<mask id=\\"path-1-inside-1_203_1158\\" fill=\\"currentColor\\">\\n<path d=\\"M32.7014 10.2872C33.095 10.6746 33.1002 11.3077 32.7128 11.7014L15.294 29.4042L8.30878 22.7226C7.90967 22.3409 7.89561 21.7079 8.27736 21.3088C8.65911 20.9097 9.29212 20.8956 9.69122 21.2774L15.2514 26.5958L31.2872 10.2986C31.6746 9.90496 32.3077 9.89985 32.7014 10.2872Z\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M22 40H4C1.79086 40 0 38.2091 0 36V4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V22H41.1875C41.7398 22 42.1875 22.4477 42.1875 23V25.8861C42.1875 26.3518 42.5109 26.7505 42.9541 26.8934C43.2664 26.9941 43.5753 27.1116 43.8809 27.2461C44.1952 27.3718 44.5023 27.5082 44.8023 27.6554C45.2056 27.8532 45.6944 27.7899 46.0121 27.4723L48.0546 25.4298C48.4451 25.0392 49.0783 25.0392 49.4688 25.4298L52.5702 28.5312C52.9608 28.9217 52.9608 29.5549 52.5702 29.9454L50.5277 31.9879C50.2101 32.3056 50.1468 32.7944 50.3446 33.1977C50.4918 33.4977 50.6282 33.8048 50.7539 34.1191C50.8884 34.4247 51.0059 34.7336 51.1066 35.0459C51.2495 35.4891 51.6482 35.8125 52.1139 35.8125H55C55.5523 35.8125 56 36.2602 56 36.8125V41.1875C56 41.7398 55.5523 42.1875 55 42.1875H52.1139C51.6482 42.1875 51.2495 42.5109 51.1066 42.9541C51.0059 43.2664 50.8884 43.5753 50.7539 43.8809C50.6282 44.1952 50.4918 44.5023 50.3446 44.8023C50.1468 45.2056 50.2101 45.6944 50.5277 46.0121L52.5702 48.0546C52.9608 48.4451 52.9608 49.0783 52.5702 49.4688L49.4688 52.5702C49.0783 52.9608 48.4451 52.9608 48.0546 52.5702L46.0121 50.5277C45.6944 50.2101 45.2052 50.1458 44.8049 50.3495C44.5041 50.5026 44.196 50.6484 43.8809 50.7871C43.5759 50.9091 43.2675 51.0177 42.9558 51.1128C42.5104 51.2486 42.1875 51.6482 42.1875 52.1139V55C42.1875 55.5523 41.7398 56 41.1875 56H36.8125C36.2602 56 35.8125 55.5523 35.8125 55V52.1139C35.8125 51.6482 35.4896 51.2486 35.0442 51.1128C34.7325 51.0177 34.4241 50.9091 34.1191 50.7871C33.804 50.6484 33.4959 50.5026 33.1951 50.3495C32.7948 50.1458 32.3056 50.2101 31.9879 50.5277L29.9454 52.5702C29.5549 52.9608 28.9217 52.9608 28.5312 52.5702L25.4298 49.4688C25.0392 49.0783 25.0392 48.4451 25.4298 48.0546L27.4723 46.0121C27.7899 45.6944 27.8542 45.2052 27.6505 44.8049C27.4974 44.5041 27.3516 44.196 27.2129 43.8809C27.0909 43.5759 26.9823 43.2675 26.8872 42.9558C26.7514 42.5104 26.3518 42.1875 25.8861 42.1875H23C22.4477 42.1875 22 41.7398 22 41.1875V40ZM4 2H36C37.1046 2 38 2.89543 38 4V22H36.8125C36.2602 22 35.8125 22.4477 35.8125 23V25.8861C35.8125 26.3518 35.4891 26.7505 35.0459 26.8934C34.7336 26.9941 34.4247 27.1116 34.1191 27.2461C33.8048 27.3718 33.4977 27.5082 33.1977 27.6554C32.7944 27.8532 32.3056 27.7899 31.9879 27.4723L29.9454 25.4298C29.5549 25.0392 28.9217 25.0392 28.5312 25.4298L25.4298 28.5312C25.0392 28.9217 25.0392 29.5549 25.4298 29.9454L27.4723 31.9879C27.7899 32.3056 27.8542 32.7948 27.6505 33.1951C27.4974 33.4959 27.3516 33.804 27.2129 34.1191C27.0909 34.4241 26.9823 34.7325 26.8872 35.0442C26.7514 35.4896 26.3518 35.8125 25.8861 35.8125H23C22.4477 35.8125 22 36.2602 22 36.8125V38H4C2.89543 38 2 37.1046 2 36V4C2 2.89543 2.89543 2 4 2ZM35.248 42.752C36.2884 43.7923 37.5391 44.3125 39 44.3125C40.4609 44.3125 41.7116 43.7923 42.752 42.752C43.7923 41.7116 44.3125 40.4609 44.3125 39C44.3125 37.5391 43.7923 36.2884 42.752 35.248C41.7116 34.2077 40.4609 33.6875 39 33.6875C37.5391 33.6875 36.2884 34.2077 35.248 35.248C34.2077 36.2884 33.6875 37.5391 33.6875 39C33.6875 40.4609 34.2077 41.7116 35.248 42.752Z\\"/>\\n</mask>\\n<path d=\\"M32.7014 10.2872C33.095 10.6746 33.1002 11.3077 32.7128 11.7014L15.294 29.4042L8.30878 22.7226C7.90967 22.3409 7.89561 21.7079 8.27736 21.3088C8.65911 20.9097 9.29212 20.8956 9.69122 21.2774L15.2514 26.5958L31.2872 10.2986C31.6746 9.90496 32.3077 9.89985 32.7014 10.2872Z\\" stroke=\\"#0F172A\\" stroke-width=\\"4\\" mask=\\"url(#path-1-inside-1_203_1158)\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M22 40H4C1.79086 40 0 38.2091 0 36V4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V22H41.1875C41.7398 22 42.1875 22.4477 42.1875 23V25.8861C42.1875 26.3518 42.5109 26.7505 42.9541 26.8934C43.2664 26.9941 43.5753 27.1116 43.8809 27.2461C44.1952 27.3718 44.5023 27.5082 44.8023 27.6554C45.2056 27.8532 45.6944 27.7899 46.0121 27.4723L48.0546 25.4298C48.4451 25.0392 49.0783 25.0392 49.4688 25.4298L52.5702 28.5312C52.9608 28.9217 52.9608 29.5549 52.5702 29.9454L50.5277 31.9879C50.2101 32.3056 50.1468 32.7944 50.3446 33.1977C50.4918 33.4977 50.6282 33.8048 50.7539 34.1191C50.8884 34.4247 51.0059 34.7336 51.1066 35.0459C51.2495 35.4891 51.6482 35.8125 52.1139 35.8125H55C55.5523 35.8125 56 36.2602 56 36.8125V41.1875C56 41.7398 55.5523 42.1875 55 42.1875H52.1139C51.6482 42.1875 51.2495 42.5109 51.1066 42.9541C51.0059 43.2664 50.8884 43.5753 50.7539 43.8809C50.6282 44.1952 50.4918 44.5023 50.3446 44.8023C50.1468 45.2056 50.2101 45.6944 50.5277 46.0121L52.5702 48.0546C52.9608 48.4451 52.9608 49.0783 52.5702 49.4688L49.4688 52.5702C49.0783 52.9608 48.4451 52.9608 48.0546 52.5702L46.0121 50.5277C45.6944 50.2101 45.2052 50.1458 44.8049 50.3495C44.5041 50.5026 44.196 50.6484 43.8809 50.7871C43.5759 50.9091 43.2675 51.0177 42.9558 51.1128C42.5104 51.2486 42.1875 51.6482 42.1875 52.1139V55C42.1875 55.5523 41.7398 56 41.1875 56H36.8125C36.2602 56 35.8125 55.5523 35.8125 55V52.1139C35.8125 51.6482 35.4896 51.2486 35.0442 51.1128C34.7325 51.0177 34.4241 50.9091 34.1191 50.7871C33.804 50.6484 33.4959 50.5026 33.1951 50.3495C32.7948 50.1458 32.3056 50.2101 31.9879 50.5277L29.9454 52.5702C29.5549 52.9608 28.9217 52.9608 28.5312 52.5702L25.4298 49.4688C25.0392 49.0783 25.0392 48.4451 25.4298 48.0546L27.4723 46.0121C27.7899 45.6944 27.8542 45.2052 27.6505 44.8049C27.4974 44.5041 27.3516 44.196 27.2129 43.8809C27.0909 43.5759 26.9823 43.2675 26.8872 42.9558C26.7514 42.5104 26.3518 42.1875 25.8861 42.1875H23C22.4477 42.1875 22 41.7398 22 41.1875V40ZM4 2H36C37.1046 2 38 2.89543 38 4V22H36.8125C36.2602 22 35.8125 22.4477 35.8125 23V25.8861C35.8125 26.3518 35.4891 26.7505 35.0459 26.8934C34.7336 26.9941 34.4247 27.1116 34.1191 27.2461C33.8048 27.3718 33.4977 27.5082 33.1977 27.6554C32.7944 27.8532 32.3056 27.7899 31.9879 27.4723L29.9454 25.4298C29.5549 25.0392 28.9217 25.0392 28.5312 25.4298L25.4298 28.5312C25.0392 28.9217 25.0392 29.5549 25.4298 29.9454L27.4723 31.9879C27.7899 32.3056 27.8542 32.7948 27.6505 33.1951C27.4974 33.4959 27.3516 33.804 27.2129 34.1191C27.0909 34.4241 26.9823 34.7325 26.8872 35.0442C26.7514 35.4896 26.3518 35.8125 25.8861 35.8125H23C22.4477 35.8125 22 36.2602 22 36.8125V38H4C2.89543 38 2 37.1046 2 36V4C2 2.89543 2.89543 2 4 2ZM35.248 42.752C36.2884 43.7923 37.5391 44.3125 39 44.3125C40.4609 44.3125 41.7116 43.7923 42.752 42.752C43.7923 41.7116 44.3125 40.4609 44.3125 39C44.3125 37.5391 43.7923 36.2884 42.752 35.248C41.7116 34.2077 40.4609 33.6875 39 33.6875C37.5391 33.6875 36.2884 34.2077 35.248 35.248C34.2077 36.2884 33.6875 37.5391 33.6875 39C33.6875 40.4609 34.2077 41.7116 35.248 42.752Z\\" stroke=\\"#0F172A\\" stroke-width=\\"4\\" mask=\\"url(#path-1-inside-1_203_1158)\\"/>\\n</svg>","textdomain":"jet-form-builder","attributes":{"label":{"type":"string","default":""},"control_type":{"type":"string","default":""},"default_image_control":{"type":"object","default":{}},"checked_image_control":{"type":"object","default":""},"style":{"type":"object","default":{".jet-form-builder-choice--item-control-img":{"width":"24px"}}},"isPreview":{"type":"boolean","default":false}},"supports":{"html":false,"jetStyle":{"--jfb-choice-control-width":[".jet-form-builder-choice--item-control-img","width"]},"spacing":{"margin":true,"padding":true,"units":["px","em","rem","vh","vw"]},"color":{"text":true,"background":false}},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index","jet-forms/choices-field--multiple","jet-forms/choices-field--required","jet-forms/choices-field--name","jet-forms/choices-field--raw-name","jet-forms/choices-field--default","jet-forms/choice--value","jet-forms/choice--calc_value"]}');

/***/ }),

/***/ "../../blocks-metadata/choice/block.json":
/*!***********************************************!*\
  !*** ../../blocks-metadata/choice/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/choice","title":"Advanced Choice","parent":["jet-forms/choices-field"],"category":"jet-form-builder-fields","keywords":["jetformbuilder","field","choices","choice"],"description":"","icon":"<svg width=\\"46\\" height=\\"46\\" viewBox=\\"0 0 46 46\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path d=\\"M22 10C22 9.44771 22.4477 9 23 9H37C37.5523 9 38 9.44771 38 10C38 10.5523 37.5523 11 37 11H23C22.4477 11 22 10.5523 22 10Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M23 13C22.4477 13 22 13.4477 22 14C22 14.5523 22.4477 15 23 15H37C37.5523 15 38 14.5523 38 14C38 13.4477 37.5523 13 37 13H23Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M10 7C8.89543 7 8 7.89543 8 9V15C8 16.1046 8.89543 17 10 17H16C17.1046 17 18 16.1046 18 15V9C18 7.89543 17.1046 7 16 7H10ZM16 9H10V15H16V9Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M23.5 30C25.433 30 27 28.433 27 26.5C27 24.567 25.433 23 23.5 23C21.567 23 20 24.567 20 26.5C20 28.433 21.567 30 23.5 30ZM23.5 28C24.3284 28 25 27.3284 25 26.5C25 25.6716 24.3284 25 23.5 25C22.6716 25 22 25.6716 22 26.5C22 27.3284 22.6716 28 23.5 28Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M27.7917 32.2985C27.6037 32.1076 27.3469 32 27.0789 32C26.811 32 26.5542 32.1076 26.3662 32.2985L22.1579 36.5744L19.2917 33.6622C19.1037 33.4712 18.8469 33.3636 18.5789 33.3636C18.311 33.3636 18.0542 33.4712 17.8662 33.6622L14.2873 37.2985C13.8999 37.6922 13.9049 38.3253 14.2985 38.7127C14.6922 39.1001 15.3253 39.0951 15.7127 38.7015L18.5789 35.7892L21.4452 38.7015C21.6332 38.8924 21.8899 39 22.1579 39C22.4259 39 22.6826 38.8924 22.8706 38.7015L27.0789 34.4256L31.2873 38.7015C31.6747 39.0951 32.3078 39.1001 32.7015 38.7127C33.0951 38.3253 33.1001 37.6922 32.7127 37.2985L27.7917 32.2985Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M4 0C1.79086 0 0 1.79086 0 4V42C0 44.2091 1.79086 46 4 46H42C44.2091 46 46 44.2091 46 42V4C46 1.79086 44.2091 0 42 0H4ZM42 2H4C2.89543 2 2 2.89543 2 4V42C2 43.1046 2.89543 44 4 44H42C43.1046 44 44 43.1046 44 42V4C44 2.89543 43.1046 2 42 2Z\\" fill=\\"currentColor\\"/>\\n</svg>","textdomain":"jet-form-builder","attributes":{"value":{"type":"string","default":""},"calc_value":{"type":"string","default":""},"className":{"type":"string","default":""},"backgroundColor":{"type":"string","default":"#f0f4f9"},"isPreview":{"type":"boolean","default":false}},"supports":{"html":false,"layout":{"allowSwitching":false,"allowInheriting":false,"allowVerticalAlignment":false,"default":{"type":"flex","orientation":"vertical"}},"color":{},"spacing":{"blockGap":["horizontal","vertical"],"margin":true,"padding":true,"units":["px","em","rem","vh","vw"]}},"providesContext":{"jet-forms/choice--value":"value","jet-forms/choice--calc_value":"calc_value"},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index","jet-forms/choices-field--multiple","jet-forms/choices-field--required","jet-forms/choices-field--default","jet-forms/choices-field--name","jet-forms/choices-field--raw-name"]}');

/***/ }),

/***/ "../../blocks-metadata/choices-field/block.json":
/*!******************************************************!*\
  !*** ../../blocks-metadata/choices-field/block.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/choices-field","category":"jet-form-builder-fields","title":"Advanced Choices Field","description":"","icon":"<svg width=\\"52\\" height=\\"53\\" viewBox=\\"0 0 52 53\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M10 14C8.89543 14 8 14.8954 8 16V22C8 23.1046 8.89543 24 10 24H16C17.1046 24 18 23.1046 18 22V16C18 14.8954 17.1046 14 16 14H10ZM16 16H10V22H16V16Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M23 16C22.4477 16 22 16.4477 22 17C22 17.5523 22.4477 18 23 18H37C37.5523 18 38 17.5523 38 17C38 16.4477 37.5523 16 37 16H23Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M22 21C22 20.4477 22.4477 20 23 20H37C37.5523 20 38 20.4477 38 21C38 21.5523 37.5523 22 37 22H23C22.4477 22 22 21.5523 22 21Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M23.5 37C25.433 37 27 35.433 27 33.5C27 31.567 25.433 30 23.5 30C21.567 30 20 31.567 20 33.5C20 35.433 21.567 37 23.5 37ZM23.5 35C24.3284 35 25 34.3284 25 33.5C25 32.6716 24.3284 32 23.5 32C22.6716 32 22 32.6716 22 33.5C22 34.3284 22.6716 35 23.5 35Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M27.0789 39C27.3469 39 27.6037 39.1076 27.7917 39.2985L32.7127 44.2985C33.1001 44.6922 33.0951 45.3253 32.7015 45.7127C32.3078 46.1001 31.6747 46.0951 31.2873 45.7015L27.0789 41.4256L22.8706 45.7015C22.6826 45.8924 22.4259 46 22.1579 46C21.8899 46 21.6332 45.8924 21.4452 45.7015L18.5789 42.7892L15.7127 45.7015C15.3253 46.0951 14.6922 46.1001 14.2985 45.7127C13.9049 45.3253 13.8999 44.6922 14.2873 44.2985L17.8662 40.6622C18.0542 40.4712 18.311 40.3636 18.5789 40.3636C18.8469 40.3636 19.1037 40.4712 19.2917 40.6622L22.1579 43.5744L26.3662 39.2985C26.5542 39.1076 26.811 39 27.0789 39Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M12 0C9.79086 0 8 1.79086 8 4V7H4C1.79086 7 0 8.79086 0 11V49C0 51.2091 1.79086 53 4 53H42C44.2091 53 46 51.2091 46 49V44H48C50.2091 44 52 42.2091 52 40V4C52 1.79086 50.2091 0 48 0H12ZM42 9C43.1046 9 44 9.89543 44 11V49C44 50.1046 43.1046 51 42 51H4C2.89543 51 2 50.1046 2 49V11C2 9.89543 2.89543 9 4 9H42ZM10 4C10 2.89543 10.8954 2 12 2H48C49.1046 2 50 2.89543 50 4V40C50 41.1046 49.1046 42 48 42H46V11C46 8.79086 44.2091 7 42 7H10V4Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"isPreview":{"type":"boolean","default":false},"value":{"type":"object","default":{}},"allow_multiple":{"type":"boolean","default":false},"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"default":{"type":["string","array","number","boolean","object"],"default":"","jfb":{"rich-no-preset":true}},"required":{"type":"boolean","default":false},"visibility":{"type":"string","default":""}},"keywords":["jetformbuilder","field","choices"],"textdomain":"jet-form-builder","supports":{"html":false,"jetFBSwitchPageOnChange":true,"jetFBSanitizeValue":true,"jetStyle":{"--jfb-choice-text":[".jet-form-builder-choice--item","color","text"],"--jfb-choice-bg":[".jet-form-builder-choice--item","color","background"],"--jfb-choice-border":[".jet-form-builder-choice--item","border"],"--jfb-choice-border-radius":[".jet-form-builder-choice--item","border","radius"],"--jfb-choice-hover-text":[".jet-form-builder-choice--item:hover","color","text"],"--jfb-choice-hover-bg":[".jet-form-builder-choice--item:hover","color","background"],"--jfb-choice-hover-border":[".jet-form-builder-choice--item:hover","border"],"--jfb-choice-hover-border-radius":[".jet-form-builder-choice--item:hover","border","radius"],"--jfb-choice-checked-text":[".jet-form-builder-choice--item.is-checked","color","text"],"--jfb-choice-checked-bg":[".jet-form-builder-choice--item.is-checked","color","background"],"--jfb-choice-checked-border":[".jet-form-builder-choice--item.is-checked","border"],"--jfb-choice-checked-border-radius":[".jet-form-builder-choice--item.is-checked","border","radius"]},"jetCustomWrapperLayout":true,"layout":{"allowSwitching":false,"allowInheriting":false,"allowVerticalAlignment":false,"allowSizingOnChildren":true,"default":{"type":"flex"}},"spacing":{"blockGap":["horizontal","vertical"],"margin":true,"padding":true,"units":["px","em","rem","vh","vw"]}},"providesContext":{"jet-forms/choices-field--multiple":"allow_multiple","jet-forms/choices-field--required":"required","jet-forms/choices-field--name":"name","jet-forms/choices-field--default":"default"},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewScript":"jet-fb-advanced-choices","style":"jet-fb-advanced-choices"}');

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
/* harmony import */ var _choices_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choices-field */ "./editor/choices-field/index.js");
/* harmony import */ var _choice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choice */ "./editor/choice/index.js");
/* harmony import */ var _choice_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choice-control */ "./editor/choice-control/index.js");



const {
  addFilter
} = wp.hooks;
addFilter('jet.fb.register.fields', 'jet-form-builder/advanced-choices', function (blocks) {
  blocks.push(_choices_field__WEBPACK_IMPORTED_MODULE_0__, _choice__WEBPACK_IMPORTED_MODULE_1__, _choice_control__WEBPACK_IMPORTED_MODULE_2__);
  return blocks;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVdBO0FBQUE7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxVEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBSUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUtBO0FBQ0E7QUFHQTs7Ozs7Ozs7OztBQzVQQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQU1BO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2UtY29udHJvbC9lZGl0LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS1jb250cm9sL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS1jb250cm9sL3ByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlL1RvZ2dsZUNoZWNrU3RhdGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlL2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS9wcmV2aWV3LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS9zYXZlLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS91c2VBbGxvd2VkQmxvY2tzLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS91c2VDaGVja2VkQ2hvaWNlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlcy1maWVsZC9BZGRDaG9pY2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlcy1maWVsZC9jb250ZXh0LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZXMtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2VzLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZXMtZmllbGQvcGxhY2Vob2xkZXIuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlcy1maWVsZC9wcmV2aWV3LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZXMtZmllbGQvc2F2ZS5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2VzLWZpZWxkL3RyYW5zZm9ybXMuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlcy1maWVsZC92YXJpYXRpb25zLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VDaGVja2VkQ2hvaWNlU3RhdGUgZnJvbSAnLi4vY2hvaWNlL3VzZUNoZWNrZWRDaG9pY2VTdGF0ZSc7XG5pbXBvcnQgVG9nZ2xlQ2hlY2tTdGF0ZUJ1dHRvbiBmcm9tICcuLi9jaG9pY2UvVG9nZ2xlQ2hlY2tTdGF0ZUJ1dHRvbic7XG5pbXBvcnQgcHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuXHQgICAgICBzcHJpbnRmLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcblx0ICAgICAgUmljaFRleHQsXG5cdCAgICAgIEluc3BlY3RvckNvbnRyb2xzLFxuXHQgICAgICBNZWRpYVVwbG9hZCxcblx0ICAgICAgTWVkaWFVcGxvYWRDaGVjayxcblx0ICAgICAgQmxvY2tDb250cm9scyxcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHQgICAgICB1c2VJbnN0YW5jZUlkLFxuICAgICAgfSA9IHdwLmNvbXBvc2U7XG5cbmxldCB7XG5cdCAgICBCdXR0b24sXG5cdCAgICBQYW5lbEJvZHksXG5cdCAgICBSYW5nZUNvbnRyb2wsXG5cdCAgICBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbCxcblx0ICAgIFRvZ2dsZUdyb3VwQ29udHJvbCxcblx0ICAgIF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uLFxuXHQgICAgVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uLFxuICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5Ub2dnbGVHcm91cENvbnRyb2wgPSAoXG5cdFRvZ2dsZUdyb3VwQ29udHJvbCB8fCBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbFxuKTtcblxuVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uID0gKFxuXHRUb2dnbGVHcm91cENvbnRyb2xPcHRpb24gfHwgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cbik7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZUhlbHAsXG5cdCAgICAgIEJhc2VMYWJlbCxcblx0ICAgICAgU3R5bGVQYW5lbCxcblx0ICAgICAgU3R5bGVQYW5lbEl0ZW0sXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZVN0eWxlLFxuXHQgICAgICB1c2VKZXRTdHlsZSxcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xuXG5mdW5jdGlvbiBTaW1wbGVDaG9vc2VNZWRpYUJ1dHRvbiggeyBvcGVuLCBoYXNWYWx1ZSA9IGZhbHNlIH0gKSB7XG5cdHJldHVybiA8QnV0dG9uXG5cdFx0aXNTZWNvbmRhcnlcblx0XHRpc1NtYWxsXG5cdFx0aWNvbj1cImVkaXRcIlxuXHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRjbGFzc05hbWU9eyBoYXNWYWx1ZSA/ICdqZXQtZmIgaGFzLXZhbHVlJyA6ICcnIH1cblx0XHRsYWJlbD17IGhhc1ZhbHVlID8gX18oICdFZGl0IGljb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdCAgICAgICAgICAgICAgICAgOiBfXyggJ0Nob29zZSBpY29uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHQ+XG5cdFx0eyBoYXNWYWx1ZVxuXHRcdCAgPyBfXyggJ0VkaXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdCAgOiBfXyggJ0Nob29zZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0PC9CdXR0b24+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0Q2hvaWNlQ2hlY2soIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgY29udGV4dCxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHRcdCAgICAgIGF0dHJpYnV0ZXMsXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgJ2pldC1mb3Jtcy9jaG9pY2VzLWZpZWxkLS1tdWx0aXBsZSc6IGlzTXVsdGlwbGUsXG5cdFx0ICAgICAgJ2pldC1mb3Jtcy9jaG9pY2VzLWZpZWxkLS1uYW1lJzogZmllbGROYW1lLFxuXHQgICAgICB9ID0gY29udGV4dDtcblxuXHRjb25zdCBqZXRTdHlsZSA9IHVzZUpldFN0eWxlKCk7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoIHtcblx0XHRjbGFzc05hbWU6IHNwcmludGYoXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0tY29udHJvbCAlcycsXG5cdFx0XHRqZXRTdHlsZS5jbGFzc05hbWVcblx0XHQpLFxuXHRcdHN0eWxlOiBqZXRTdHlsZS5zdHlsZSxcblx0fSApO1xuXG5cdGNvbnN0IGluc3RhbmNlSWQgPSB1c2VJbnN0YW5jZUlkKCBFZGl0Q2hvaWNlQ2hlY2ssIGZpZWxkTmFtZSApO1xuXG5cdGNvbnN0IFsgaXNDaGVja2VkLCB0b2dnbGVDaGVja2VkIF0gPSB1c2VDaGVja2VkQ2hvaWNlU3RhdGUoKTtcblxuXHRjb25zdCBjb250cm9sSW1hZ2VVcmwgPSAoXG5cdFx0KCkgPT4ge1xuXHRcdFx0aWYgKCAnaW1hZ2UnICE9PSBhdHRyaWJ1dGVzLmNvbnRyb2xfdHlwZSApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaXNDaGVja2VkXG5cdFx0XHQgICAgICAgPyBhdHRyaWJ1dGVzPy5jaGVja2VkX2ltYWdlX2NvbnRyb2w/LnVybFxuXHRcdFx0ICAgICAgIDogYXR0cmlidXRlcz8uZGVmYXVsdF9pbWFnZV9jb250cm9sPy51cmw7XG5cdFx0fVxuXHQpKCk7XG5cblx0Y29uc3QgWyB3aWR0aCwgc2V0V2lkdGggXSA9IHVzZVN0eWxlKCAnLS1qZmItY2hvaWNlLWNvbnRyb2wtd2lkdGgnICk7XG5cdGNvbnN0IHdpZHRoSW50ICAgICAgICAgICAgPSBwYXJzZUludCggd2lkdGggKTtcblxuXHRpZiAoIGF0dHJpYnV0ZXMuaXNQcmV2aWV3ICkge1xuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXsge1xuXHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0XHR9IH0+XG5cdFx0XHR7IHByZXZpZXcgfVxuXHRcdDwvZGl2Pjtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdDxCbG9ja0NvbnRyb2xzIGdyb3VwPXsgJ2Jsb2NrJyB9PlxuXHRcdFx0PFRvZ2dsZUNoZWNrU3RhdGVCdXR0b24vPlxuXHRcdDwvQmxvY2tDb250cm9scz5cblx0XHQ8c3BhbiB7IC4uLmJsb2NrUHJvcHMgfT5cblx0XHRcdHsgISFjb250cm9sSW1hZ2VVcmxcblx0XHRcdCAgPyA8aW1nXG5cdFx0XHRcdCAgc3JjPXsgY29udHJvbEltYWdlVXJsIH1cblx0XHRcdFx0ICBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0tY29udHJvbC1pbWcnIH1cblx0XHRcdFx0ICBhbHQ9eyBmaWVsZE5hbWUgKyAnICcgKyBfXyggJ2NvbnRyb2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQgIC8+XG5cdFx0XHQgIDogPGlucHV0XG5cdFx0XHRcdCAgaWQ9eyBpbnN0YW5jZUlkIH1cblx0XHRcdFx0ICB0eXBlPXsgaXNNdWx0aXBsZSA/ICdjaGVja2JveCcgOiAncmFkaW8nIH1cblx0XHRcdFx0ICBjaGVja2VkPXsgaXNDaGVja2VkIH1cblx0XHRcdFx0ICBvbkNoYW5nZT17ICgpID0+IHRvZ2dsZUNoZWNrZWQoKSB9XG5cdFx0XHRcdCAgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtLWNvbnRyb2wtaW5wdXQnIH1cblx0XHRcdCAgLz4gfVxuXHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdHRhZ05hbWU9eyAnbGFiZWwnIH1cblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBsYWJlbCA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxhYmVsIH0gKSB9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdMYWJlbCBmb3IgaW5wdXQuLi4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdG11bHRpbGluZT17IGZhbHNlIH1cblx0XHRcdC8+XG5cdFx0PC9zcGFuPlxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxkaXYgc3R5bGU9eyB7IHBhZGRpbmc6ICcyMHB4JyB9IH0+XG5cdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xcblx0XHRcdFx0XHRvbkNoYW5nZT17IGNvbnRyb2xfdHlwZSA9PiBzZXRBdHRyaWJ1dGVzKFxuXHRcdFx0XHRcdFx0eyBjb250cm9sX3R5cGUgfSApIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY29udHJvbF90eXBlIH1cblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ29udHJvbCB0eXBlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdGlzQmxvY2s9eyB0cnVlIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cblx0XHRcdFx0XHRcdGxhYmVsPXsgaXNNdWx0aXBsZVxuXHRcdFx0XHRcdFx0ICAgICAgICA/IF9fKCAnQ2hlY2tib3ggaW5wdXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0XHRcdFx0ICAgICAgICA6IF9fKCAnUmFkaW8gaW5wdXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dmFsdWU9eyAnJyB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW1hZ2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17ICdpbWFnZScgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVG9nZ2xlR3JvdXBDb250cm9sPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHR7ICdpbWFnZScgPT09IGF0dHJpYnV0ZXMuY29udHJvbF90eXBlICYmIDw+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdHRpdGxlPXsgX18oICdDb250cm9sIERlZmF1bHQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHRcdFx0PEJhc2VMYWJlbCBsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHQnRGVmYXVsdCBpY29uJyxcblx0XHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdFx0KSB9PlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRfaW1hZ2VfY29udHJvbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi4oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXR0cmlidXRlcy5kZWZhdWx0X2ltYWdlX2NvbnRyb2wgPz9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IFsgJ2ltYWdlLyonIF0gfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZWZhdWx0X2ltYWdlX2NvbnRyb2w/LmlkIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9e1xuXHRcdFx0XHRcdFx0XHRcdFx0KCB7IG9wZW4gfSApID0+IDxTaW1wbGVDaG9vc2VNZWRpYUJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcGVuPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgISFhdHRyaWJ1dGVzLmRlZmF1bHRfaW1hZ2VfY29udHJvbD8udXJsIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7ICEhYXR0cmlidXRlcy5kZWZhdWx0X2ltYWdlX2NvbnRyb2w/LnVybCAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0XHRpY29uPVwibm8tYWx0XCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdF9pbWFnZV9jb250cm9sOiB7fSxcblx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0XHQnUmVtb3ZlIGRlZmF1bHQgaWNvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHRcdDwvQmFzZUxhYmVsPlxuXHRcdFx0XHRcdFx0eyAhIWF0dHJpYnV0ZXMuZGVmYXVsdF9pbWFnZV9jb250cm9sPy51cmwgJiYgPD5cblx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuZGVmYXVsdF9pbWFnZV9jb250cm9sPy51cmwgfVxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6ICcxNTBweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcxNTBweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46ICcxZW0gMCcsXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz4gfVxuXHRcdFx0XHRcdFx0PEJhc2VIZWxwPlxuXHRcdFx0XHRcdFx0XHR7IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdDaG9vc2UgaWNvbiBmb3IgZGVmYXVsdCBzdGF0ZSBvZiBjaG9pY2UnLFxuXHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHQ8L0Jhc2VIZWxwPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdHRpdGxlPXsgX18oICdDb250cm9sIENoZWNrZWQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJhc2VMYWJlbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdDaGVja2VkIEljb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgbWVkaWEgPT4gc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZF9pbWFnZV9jb250cm9sOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzLmNoZWNrZWRfaW1hZ2VfY29udHJvbCA/P1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogbWVkaWEudXJsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDogbWVkaWEuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgWyAnaW1hZ2UvKicgXSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNoZWNrZWRfaW1hZ2VfY29udHJvbD8uaWQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17XG5cdFx0XHRcdFx0XHRcdFx0XHQoIHsgb3BlbiB9ICkgPT4gPFNpbXBsZUNob29zZU1lZGlhQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wZW49eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eyAhIWF0dHJpYnV0ZXMuY2hlY2tlZF9pbWFnZV9jb250cm9sPy51cmwgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsgISFhdHRyaWJ1dGVzLmNoZWNrZWRfaW1hZ2VfY29udHJvbD8udXJsICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRcdGljb249XCJuby1hbHRcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkX2ltYWdlX2NvbnRyb2w6IHt9LFxuXHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdSZW1vdmUgY2hlY2tlZCBpY29uJyxcblx0XHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0PC9CYXNlTGFiZWw+XG5cdFx0XHRcdFx0XHR7ICEhYXR0cmlidXRlcy5jaGVja2VkX2ltYWdlX2NvbnRyb2w/LnVybCAmJiA8PlxuXHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXsgYXR0cmlidXRlcy5jaGVja2VkX2ltYWdlX2NvbnRyb2w/LnVybCB9XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtYXhXaWR0aDogJzE1MHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJzE1MHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogJzFlbSAwJyxcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvPiB9XG5cdFx0XHRcdFx0XHQ8QmFzZUhlbHA+XG5cdFx0XHRcdFx0XHRcdHsgX18oXG5cdFx0XHRcdFx0XHRcdFx0J0Nob29zZSBpY29uIGZvciBjaGVja2VkIHN0YXRlIG9mIGNob2ljZScsXG5cdFx0XHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdDwvQmFzZUhlbHA+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHMgZ3JvdXA9eyAnc3R5bGVzJyB9PlxuXHRcdFx0XHQ8U3R5bGVQYW5lbCBsYWJlbD17IF9fKCAnSW1hZ2UgY29udHJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdFx0PFN0eWxlUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnV2lkdGgnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRjc3NWYXI9XCItLWpmYi1jaG9pY2UtY29udHJvbC13aWR0aFwiXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9XCIyNHB4XCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHRgU3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGltYWdlIGluIHBpeGVscy5gLFxuXHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdGluaXRpYWxQb3NpdGlvbj17IDI0IH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1dpZHRoJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHdpZHRoSW50IH1cblx0XHRcdFx0XHRcdFx0bWF4PXsgMjAwIH1cblx0XHRcdFx0XHRcdFx0bWluPXsgMCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9PiBzZXRXaWR0aCggdmFsdWUgPyBgJHsgdmFsdWUgfXB4YCA6IDAgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvU3R5bGVQYW5lbEl0ZW0+XG5cdFx0XHRcdDwvU3R5bGVQYW5lbD5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0PC8+IH1cblx0PC8+O1xufSIsImltcG9ydCBFZGl0Q2hvaWNlQ2hlY2sgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBtZXRhZGF0YSBmcm9tICdAYmxvY2tzL2Nob2ljZS1jb250cm9sL2Jsb2NrLmpzb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIG5hbWUsXG5cdCAgICAgIGljb24sXG4gICAgICB9ID0gbWV0YWRhdGE7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGRlc2NyaXB0aW9uOiBfXyhcblx0XHRgR2V0IHRoZSBhZGp1c3Rpbmcgb3B0aW9ucyBmb3IgdGhlIEltYWdlIGFuZCBDaG9pY2UgQ29udHJvbCBibG9jayBcbndpdGggXCJJbWFnZXMgYW5kIENvbnRyb2xzXCIgbGF5b3V0IG9mIHRoZSBBZHZhbmNlZCBDaG9pY2VzIEZpZWxkLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRlZGl0OiBFZGl0Q2hvaWNlQ2hlY2ssXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRpc1ByZXZpZXc6IHRydWUsXG5cdFx0fSxcblx0fSxcbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5ncyxcbn07XG4iLCJjb25zdCBwcmV2aWV3ID0gKFxuXHQ8c3ZnIHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgdmlld0JveD1cIjAgMCAyOTggMTQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PHJlY3Qgd2lkdGg9XCIyOThcIiBoZWlnaHQ9XCIxNDRcIiByeD1cIjRcIiBmaWxsPVwiI0UyRThGMFwiLz5cblx0XHQ8cmVjdCB4PVwiNTBcIiB5PVwiMjZcIiB3aWR0aD1cIjE5OFwiIGhlaWdodD1cIjkyXCIgcng9XCI4XCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdDxwYXRoIGQ9XCJNMTI0LjIzNCA3NC40Nzg1SDEyNi4xMDlDMTI2LjAxMiA3NS4zNzcgMTI1Ljc1NSA3Ni4xODEgMTI1LjMzOCA3Ni44OTA2QzEyNC45MjEgNzcuNjAwMyAxMjQuMzMyIDc4LjE2MzQgMTIzLjU3IDc4LjU4MDFDMTIyLjgwOSA3OC45OTAyIDEyMS44NTggNzkuMTk1MyAxMjAuNzE5IDc5LjE5NTNDMTE5Ljg4NSA3OS4xOTUzIDExOS4xMjcgNzkuMDM5MSAxMTguNDQzIDc4LjcyNjZDMTE3Ljc2NiA3OC40MTQxIDExNy4xODQgNzcuOTcxNCAxMTYuNjk1IDc3LjM5ODRDMTE2LjIwNyA3Ni44MTkgMTE1LjgyOSA3Ni4xMjU3IDExNS41NjIgNzUuMzE4NEMxMTUuMzAyIDc0LjUwNDYgMTE1LjE3MiA3My41OTk2IDExNS4xNzIgNzIuNjAzNVY3MS4xODc1QzExNS4xNzIgNzAuMTkxNCAxMTUuMzAyIDY5LjI4OTcgMTE1LjU2MiA2OC40ODI0QzExNS44MjkgNjcuNjY4NiAxMTYuMjEgNjYuOTcyIDExNi43MDUgNjYuMzkyNkMxMTcuMjA2IDY1LjgxMzIgMTE3LjgwOSA2NS4zNjcyIDExOC41MTIgNjUuMDU0N0MxMTkuMjE1IDY0Ljc0MjIgMTIwLjAwNiA2NC41ODU5IDEyMC44ODUgNjQuNTg1OUMxMjEuOTU5IDY0LjU4NTkgMTIyLjg2NyA2NC43ODc4IDEyMy42MDkgNjUuMTkxNEMxMjQuMzUyIDY1LjU5NTEgMTI0LjkyOCA2Ni4xNTQ5IDEyNS4zMzggNjYuODcxMUMxMjUuNzU1IDY3LjU4MDcgMTI2LjAxMiA2OC40MDQzIDEyNi4xMDkgNjkuMzQxOEgxMjQuMjM0QzEyNC4xNDMgNjguNjc3NyAxMjMuOTc0IDY4LjEwODEgMTIzLjcyNyA2Ny42MzI4QzEyMy40NzkgNjcuMTUxIDEyMy4xMjggNjYuNzc5OSAxMjIuNjcyIDY2LjUxOTVDMTIyLjIxNiA2Ni4yNTkxIDEyMS42MiA2Ni4xMjg5IDEyMC44ODUgNjYuMTI4OUMxMjAuMjUzIDY2LjEyODkgMTE5LjY5NyA2Ni4yNDkzIDExOS4yMTUgNjYuNDkwMkMxMTguNzQgNjYuNzMxMSAxMTguMzM5IDY3LjA3MjkgMTE4LjAxNCA2Ny41MTU2QzExNy42OTUgNjcuOTU4MyAxMTcuNDU0IDY4LjQ4ODkgMTE3LjI5MSA2OS4xMDc0QzExNy4xMjggNjkuNzI1OSAxMTcuMDQ3IDcwLjQxMjggMTE3LjA0NyA3MS4xNjhWNzIuNjAzNUMxMTcuMDQ3IDczLjMwMDEgMTE3LjExOCA3My45NTQ0IDExNy4yNjIgNzQuNTY2NEMxMTcuNDExIDc1LjE3ODQgMTE3LjYzNiA3NS43MTU1IDExNy45MzYgNzYuMTc3N0MxMTguMjM1IDc2LjY0IDExOC42MTYgNzcuMDA0NiAxMTkuMDc4IDc3LjI3MTVDMTE5LjU0IDc3LjUzMTkgMTIwLjA4NyA3Ny42NjIxIDEyMC43MTkgNzcuNjYyMUMxMjEuNTIgNzcuNjYyMSAxMjIuMTU4IDc3LjUzNTIgMTIyLjYzMyA3Ny4yODEyQzEyMy4xMDggNzcuMDI3MyAxMjMuNDY2IDc2LjY2MjggMTIzLjcwNyA3Ni4xODc1QzEyMy45NTQgNzUuNzEyMiAxMjQuMTMgNzUuMTQyNiAxMjQuMjM0IDc0LjQ3ODVaTTEzMC4yMTEgNjRWNzlIMTI4LjQwNFY2NEgxMzAuMjExWk0xMjkuNzgxIDczLjMxNjRMMTI5LjAyOSA3My4yODcxQzEyOS4wMzYgNzIuNTY0NSAxMjkuMTQzIDcxLjg5NzEgMTI5LjM1MiA3MS4yODUyQzEyOS41NiA3MC42NjY3IDEyOS44NTMgNzAuMTI5NiAxMzAuMjMgNjkuNjczOEMxMzAuNjA4IDY5LjIxODEgMTMxLjA1NyA2OC44NjY1IDEzMS41NzggNjguNjE5MUMxMzIuMTA1IDY4LjM2NTIgMTMyLjY4OCA2OC4yMzgzIDEzMy4zMjYgNjguMjM4M0MxMzMuODQ3IDY4LjIzODMgMTM0LjMxNiA2OC4zMDk5IDEzNC43MzIgNjguNDUzMUMxMzUuMTQ5IDY4LjU4OTggMTM1LjUwNCA2OC44MTEyIDEzNS43OTcgNjkuMTE3MkMxMzYuMDk2IDY5LjQyMzIgMTM2LjMyNCA2OS44MjAzIDEzNi40OCA3MC4zMDg2QzEzNi42MzcgNzAuNzkwNCAxMzYuNzE1IDcxLjM3OTYgMTM2LjcxNSA3Mi4wNzYyVjc5SDEzNC44OThWNzIuMDU2NkMxMzQuODk4IDcxLjUwMzMgMTM0LjgxNyA3MS4wNjA1IDEzNC42NTQgNzAuNzI4NUMxMzQuNDkyIDcwLjM5IDEzNC4yNTQgNzAuMTQ1OCAxMzMuOTQxIDY5Ljk5NjFDMTMzLjYyOSA2OS44Mzk4IDEzMy4yNDUgNjkuNzYxNyAxMzIuNzg5IDY5Ljc2MTdDMTMyLjM0IDY5Ljc2MTcgMTMxLjkzIDY5Ljg1NjEgMTMxLjU1OSA3MC4wNDQ5QzEzMS4xOTQgNzAuMjMzNyAxMzAuODc4IDcwLjQ5NDEgMTMwLjYxMSA3MC44MjYyQzEzMC4zNTEgNzEuMTU4MiAxMzAuMTQ2IDcxLjUzOTEgMTI5Ljk5NiA3MS45Njg4QzEyOS44NTMgNzIuMzkxOSAxMjkuNzgxIDcyLjg0MTEgMTI5Ljc4MSA3My4zMTY0Wk0xMzguOTQxIDczLjgzNFY3My42MDk0QzEzOC45NDEgNzIuODQ3NyAxMzkuMDUyIDcyLjE0MTMgMTM5LjI3MyA3MS40OTAyQzEzOS40OTUgNzAuODMyNyAxMzkuODE0IDcwLjI2MyAxNDAuMjMgNjkuNzgxMkMxNDAuNjQ3IDY5LjI5MyAxNDEuMTUyIDY4LjkxNTQgMTQxLjc0NCA2OC42NDg0QzE0Mi4zMzcgNjguMzc1IDE0My4wMDEgNjguMjM4MyAxNDMuNzM2IDY4LjIzODNDMTQ0LjQ3OSA2OC4yMzgzIDE0NS4xNDYgNjguMzc1IDE0NS43MzggNjguNjQ4NEMxNDYuMzM3IDY4LjkxNTQgMTQ2Ljg0NSA2OS4yOTMgMTQ3LjI2MiA2OS43ODEyQzE0Ny42ODUgNzAuMjYzIDE0OC4wMDcgNzAuODMyNyAxNDguMjI5IDcxLjQ5MDJDMTQ4LjQ1IDcyLjE0MTMgMTQ4LjU2MSA3Mi44NDc3IDE0OC41NjEgNzMuNjA5NFY3My44MzRDMTQ4LjU2MSA3NC41OTU3IDE0OC40NSA3NS4zMDIxIDE0OC4yMjkgNzUuOTUzMUMxNDguMDA3IDc2LjYwNDIgMTQ3LjY4NSA3Ny4xNzM4IDE0Ny4yNjIgNzcuNjYyMUMxNDYuODQ1IDc4LjE0MzkgMTQ2LjM0IDc4LjUyMTUgMTQ1Ljc0OCA3OC43OTQ5QzE0NS4xNjIgNzkuMDYxOCAxNDQuNDk4IDc5LjE5NTMgMTQzLjc1NiA3OS4xOTUzQzE0My4wMTQgNzkuMTk1MyAxNDIuMzQ2IDc5LjA2MTggMTQxLjc1NCA3OC43OTQ5QzE0MS4xNjEgNzguNTIxNSAxNDAuNjU0IDc4LjE0MzkgMTQwLjIzIDc3LjY2MjFDMTM5LjgxNCA3Ny4xNzM4IDEzOS40OTUgNzYuNjA0MiAxMzkuMjczIDc1Ljk1MzFDMTM5LjA1MiA3NS4zMDIxIDEzOC45NDEgNzQuNTk1NyAxMzguOTQxIDczLjgzNFpNMTQwLjc0OCA3My42MDk0VjczLjgzNEMxNDAuNzQ4IDc0LjM2MTMgMTQwLjgxIDc0Ljg1OTQgMTQwLjkzNCA3NS4zMjgxQzE0MS4wNTcgNzUuNzkwNCAxNDEuMjQzIDc2LjIwMDUgMTQxLjQ5IDc2LjU1ODZDMTQxLjc0NCA3Ni45MTY3IDE0Mi4wNiA3Ny4xOTk5IDE0Mi40MzggNzcuNDA4MkMxNDIuODE1IDc3LjYxIDE0My4yNTUgNzcuNzEwOSAxNDMuNzU2IDc3LjcxMDlDMTQ0LjI1MSA3Ny43MTA5IDE0NC42ODQgNzcuNjEgMTQ1LjA1NSA3Ny40MDgyQzE0NS40MzIgNzcuMTk5OSAxNDUuNzQ1IDc2LjkxNjcgMTQ1Ljk5MiA3Ni41NTg2QzE0Ni4yNCA3Ni4yMDA1IDE0Ni40MjUgNzUuNzkwNCAxNDYuNTQ5IDc1LjMyODFDMTQ2LjY3OSA3NC44NTk0IDE0Ni43NDQgNzQuMzYxMyAxNDYuNzQ0IDczLjgzNFY3My42MDk0QzE0Ni43NDQgNzMuMDg4NSAxNDYuNjc5IDcyLjU5NyAxNDYuNTQ5IDcyLjEzNDhDMTQ2LjQyNSA3MS42NjYgMTQ2LjIzNiA3MS4yNTI2IDE0NS45ODIgNzAuODk0NUMxNDUuNzM1IDcwLjUyOTkgMTQ1LjQyMyA3MC4yNDM1IDE0NS4wNDUgNzAuMDM1MkMxNDQuNjc0IDY5LjgyNjggMTQ0LjIzOCA2OS43MjI3IDE0My43MzYgNjkuNzIyN0MxNDMuMjQyIDY5LjcyMjcgMTQyLjgwNSA2OS44MjY4IDE0Mi40MjggNzAuMDM1MkMxNDIuMDU3IDcwLjI0MzUgMTQxLjc0NCA3MC41Mjk5IDE0MS40OSA3MC44OTQ1QzE0MS4yNDMgNzEuMjUyNiAxNDEuMDU3IDcxLjY2NiAxNDAuOTM0IDcyLjEzNDhDMTQwLjgxIDcyLjU5NyAxNDAuNzQ4IDczLjA4ODUgMTQwLjc0OCA3My42MDk0Wk0xNTIuNzg5IDY4LjQzMzZWNzlIMTUwLjk3M1Y2OC40MzM2SDE1Mi43ODlaTTE1MC44MzYgNjUuNjMwOUMxNTAuODM2IDY1LjMzNzkgMTUwLjkyNCA2NS4wOTA1IDE1MS4xIDY0Ljg4ODdDMTUxLjI4MiA2NC42ODY4IDE1MS41NDkgNjQuNTg1OSAxNTEuOSA2NC41ODU5QzE1Mi4yNDUgNjQuNTg1OSAxNTIuNTA5IDY0LjY4NjggMTUyLjY5MSA2NC44ODg3QzE1Mi44OCA2NS4wOTA1IDE1Mi45NzUgNjUuMzM3OSAxNTIuOTc1IDY1LjYzMDlDMTUyLjk3NSA2NS45MTA4IDE1Mi44OCA2Ni4xNTE3IDE1Mi42OTEgNjYuMzUzNUMxNTIuNTA5IDY2LjU0ODggMTUyLjI0NSA2Ni42NDY1IDE1MS45IDY2LjY0NjVDMTUxLjU0OSA2Ni42NDY1IDE1MS4yODIgNjYuNTQ4OCAxNTEuMSA2Ni4zNTM1QzE1MC45MjQgNjYuMTUxNyAxNTAuODM2IDY1LjkxMDggMTUwLjgzNiA2NS42MzA5Wk0xNTkuOTE4IDc3LjcxMDlDMTYwLjM0OCA3Ny43MTA5IDE2MC43NDUgNzcuNjIzIDE2MS4xMDkgNzcuNDQ3M0MxNjEuNDc0IDc3LjI3MTUgMTYxLjc3MyA3Ny4wMzA2IDE2Mi4wMDggNzYuNzI0NkMxNjIuMjQyIDc2LjQxMjEgMTYyLjM3NiA3Ni4wNTczIDE2Mi40MDggNzUuNjYwMkgxNjQuMTI3QzE2NC4wOTQgNzYuMjg1MiAxNjMuODgzIDc2Ljg2NzggMTYzLjQ5MiA3Ny40MDgyQzE2My4xMDggNzcuOTQyMSAxNjIuNjA0IDc4LjM3NSAxNjEuOTc5IDc4LjcwN0MxNjEuMzU0IDc5LjAzMjYgMTYwLjY2NyA3OS4xOTUzIDE1OS45MTggNzkuMTk1M0MxNTkuMTI0IDc5LjE5NTMgMTU4LjQzIDc5LjA1NTMgMTU3LjgzOCA3OC43NzU0QzE1Ny4yNTIgNzguNDk1NCAxNTYuNzY0IDc4LjExMTMgMTU2LjM3MyA3Ny42MjNDMTU1Ljk4OSA3Ny4xMzQ4IDE1NS42OTkgNzYuNTc0OSAxNTUuNTA0IDc1Ljk0MzRDMTU1LjMxNSA3NS4zMDUzIDE1NS4yMjEgNzQuNjMxNSAxNTUuMjIxIDczLjkyMTlWNzMuNTExN0MxNTUuMjIxIDcyLjgwMjEgMTU1LjMxNSA3Mi4xMzE1IDE1NS41MDQgNzEuNUMxNTUuNjk5IDcwLjg2MiAxNTUuOTg5IDcwLjI5ODggMTU2LjM3MyA2OS44MTA1QzE1Ni43NjQgNjkuMzIyMyAxNTcuMjUyIDY4LjkzODIgMTU3LjgzOCA2OC42NTgyQzE1OC40MyA2OC4zNzgzIDE1OS4xMjQgNjguMjM4MyAxNTkuOTE4IDY4LjIzODNDMTYwLjc0NSA2OC4yMzgzIDE2MS40NjcgNjguNDA3NiAxNjIuMDg2IDY4Ljc0NjFDMTYyLjcwNCA2OS4wNzgxIDE2My4xODkgNjkuNTMzOSAxNjMuNTQxIDcwLjExMzNDMTYzLjg5OSA3MC42ODYyIDE2NC4wOTQgNzEuMzM3MiAxNjQuMTI3IDcyLjA2NjRIMTYyLjQwOEMxNjIuMzc2IDcxLjYzMDIgMTYyLjI1MiA3MS4yMzYzIDE2Mi4wMzcgNzAuODg0OEMxNjEuODI5IDcwLjUzMzIgMTYxLjU0MiA3MC4yNTMzIDE2MS4xNzggNzAuMDQ0OUMxNjAuODIgNjkuODMwMSAxNjAuNCA2OS43MjI3IDE1OS45MTggNjkuNzIyN0MxNTkuMzY1IDY5LjcyMjcgMTU4Ljg5OSA2OS44MzMzIDE1OC41MjEgNzAuMDU0N0MxNTguMTUgNzAuMjY5NSAxNTcuODU0IDcwLjU2MjUgMTU3LjYzMyA3MC45MzM2QzE1Ny40MTggNzEuMjk4MiAxNTcuMjYyIDcxLjcwNTEgMTU3LjE2NCA3Mi4xNTQzQzE1Ny4wNzMgNzIuNTk3IDE1Ny4wMjcgNzMuMDQ5NSAxNTcuMDI3IDczLjUxMTdWNzMuOTIxOUMxNTcuMDI3IDc0LjM4NDEgMTU3LjA3MyA3NC44Mzk4IDE1Ny4xNjQgNzUuMjg5MUMxNTcuMjU1IDc1LjczODMgMTU3LjQwOCA3Ni4xNDUyIDE1Ny42MjMgNzYuNTA5OEMxNTcuODQ0IDc2Ljg3NDMgMTU4LjE0MSA3Ny4xNjczIDE1OC41MTIgNzcuMzg4N0MxNTguODg5IDc3LjYwMzUgMTU5LjM1OCA3Ny43MTA5IDE1OS45MTggNzcuNzEwOVpNMTcwLjU0MyA3OS4xOTUzQzE2OS44MDcgNzkuMTk1MyAxNjkuMTQgNzkuMDcxNiAxNjguNTQxIDc4LjgyNDJDMTY3Ljk0OSA3OC41NzAzIDE2Ny40MzggNzguMjE1NSAxNjcuMDA4IDc3Ljc1OThDMTY2LjU4NSA3Ny4zMDQgMTY2LjI1OSA3Ni43NjM3IDE2Ni4wMzEgNzYuMTM4N0MxNjUuODAzIDc1LjUxMzcgMTY1LjY4OSA3NC44MzAxIDE2NS42ODkgNzQuMDg3OVY3My42Nzc3QzE2NS42ODkgNzIuODE4NCAxNjUuODE2IDcyLjA1MzQgMTY2LjA3IDcxLjM4MjhDMTY2LjMyNCA3MC43MDU3IDE2Ni42NjkgNzAuMTMyOCAxNjcuMTA1IDY5LjY2NDFDMTY3LjU0MiA2OS4xOTUzIDE2OC4wMzYgNjguODQwNSAxNjguNTkgNjguNTk5NkMxNjkuMTQzIDY4LjM1ODcgMTY5LjcxNiA2OC4yMzgzIDE3MC4zMDkgNjguMjM4M0MxNzEuMDY0IDY4LjIzODMgMTcxLjcxNSA2OC4zNjg1IDE3Mi4yNjIgNjguNjI4OUMxNzIuODE1IDY4Ljg4OTMgMTczLjI2OCA2OS4yNTM5IDE3My42MTkgNjkuNzIyN0MxNzMuOTcxIDcwLjE4NDkgMTc0LjIzMSA3MC43MzE4IDE3NC40IDcxLjM2MzNDMTc0LjU3IDcxLjk4ODMgMTc0LjY1NCA3Mi42NzE5IDE3NC42NTQgNzMuNDE0MVY3NC4yMjQ2SDE2Ni43NjRWNzIuNzVIMTcyLjg0OFY3Mi42MTMzQzE3Mi44MjIgNzIuMTQ0NSAxNzIuNzI0IDcxLjY4ODggMTcyLjU1NSA3MS4yNDYxQzE3Mi4zOTIgNzAuODAzNCAxNzIuMTMyIDcwLjQzODggMTcxLjc3MyA3MC4xNTIzQzE3MS40MTUgNjkuODY1OSAxNzAuOTI3IDY5LjcyMjcgMTcwLjMwOSA2OS43MjI3QzE2OS44OTggNjkuNzIyNyAxNjkuNTIxIDY5LjgxMDUgMTY5LjE3NiA2OS45ODYzQzE2OC44MzEgNzAuMTU1NiAxNjguNTM1IDcwLjQwOTUgMTY4LjI4NyA3MC43NDhDMTY4LjA0IDcxLjA4NjYgMTY3Ljg0OCA3MS41IDE2Ny43MTEgNzEuOTg4M0MxNjcuNTc0IDcyLjQ3NjYgMTY3LjUwNiA3My4wMzk3IDE2Ny41MDYgNzMuNjc3N1Y3NC4wODc5QzE2Ny41MDYgNzQuNTg5MiAxNjcuNTc0IDc1LjA2MTIgMTY3LjcxMSA3NS41MDM5QzE2Ny44NTQgNzUuOTQwMSAxNjguMDU5IDc2LjMyNDIgMTY4LjMyNiA3Ni42NTYyQzE2OC42IDc2Ljk4ODMgMTY4LjkyOCA3Ny4yNDg3IDE2OS4zMTIgNzcuNDM3NUMxNjkuNzAzIDc3LjYyNjMgMTcwLjE0NiA3Ny43MjA3IDE3MC42NDEgNzcuNzIwN0MxNzEuMjc5IDc3LjcyMDcgMTcxLjgxOSA3Ny41OTA1IDE3Mi4yNjIgNzcuMzMwMUMxNzIuNzA0IDc3LjA2OTcgMTczLjA5MiA3Ni43MjE0IDE3My40MjQgNzYuMjg1MkwxNzQuNTE4IDc3LjE1NDNDMTc0LjI5IDc3LjQ5OTMgMTc0IDc3LjgyODEgMTczLjY0OCA3OC4xNDA2QzE3My4yOTcgNzguNDUzMSAxNzIuODY0IDc4LjcwNyAxNzIuMzUgNzguOTAyM0MxNzEuODQyIDc5LjA5NzcgMTcxLjI0IDc5LjE5NTMgMTcwLjU0MyA3OS4xOTUzWk0xODMuNjg4IDY4LjQzMzZWNzlIMTgxLjg3MVY2OC40MzM2SDE4My42ODhaTTE4MS43MzQgNjUuNjMwOUMxODEuNzM0IDY1LjMzNzkgMTgxLjgyMiA2NS4wOTA1IDE4MS45OTggNjQuODg4N0MxODIuMTggNjQuNjg2OCAxODIuNDQ3IDY0LjU4NTkgMTgyLjc5OSA2NC41ODU5QzE4My4xNDQgNjQuNTg1OSAxODMuNDA4IDY0LjY4NjggMTgzLjU5IDY0Ljg4ODdDMTgzLjc3OSA2NS4wOTA1IDE4My44NzMgNjUuMzM3OSAxODMuODczIDY1LjYzMDlDMTgzLjg3MyA2NS45MTA4IDE4My43NzkgNjYuMTUxNyAxODMuNTkgNjYuMzUzNUMxODMuNDA4IDY2LjU0ODggMTgzLjE0NCA2Ni42NDY1IDE4Mi43OTkgNjYuNjQ2NUMxODIuNDQ3IDY2LjY0NjUgMTgyLjE4IDY2LjU0ODggMTgxLjk5OCA2Ni4zNTM1QzE4MS44MjIgNjYuMTUxNyAxODEuNzM0IDY1LjkxMDggMTgxLjczNCA2NS42MzA5Wk0xOTEuMDEyIDY4LjQzMzZWNjkuODIwM0gxODUuMjk5VjY4LjQzMzZIMTkxLjAxMlpNMTg3LjIzMiA2NS44NjUySDE4OS4wMzlWNzYuMzgyOEMxODkuMDM5IDc2Ljc0MDkgMTg5LjA5NCA3Ny4wMTExIDE4OS4yMDUgNzcuMTkzNEMxODkuMzE2IDc3LjM3NTcgMTg5LjQ1OSA3Ny40OTYxIDE4OS42MzUgNzcuNTU0N0MxODkuODExIDc3LjYxMzMgMTg5Ljk5OSA3Ny42NDI2IDE5MC4yMDEgNzcuNjQyNkMxOTAuMzUxIDc3LjY0MjYgMTkwLjUwNyA3Ny42Mjk2IDE5MC42NyA3Ny42MDM1QzE5MC44MzkgNzcuNTcxIDE5MC45NjYgNzcuNTQ0OSAxOTEuMDUxIDc3LjUyNTRMMTkxLjA2MSA3OUMxOTAuOTE3IDc5LjA0NTYgMTkwLjcyOSA3OS4wODc5IDE5MC40OTQgNzkuMTI3QzE5MC4yNjYgNzkuMTcyNSAxODkuOTkgNzkuMTk1MyAxODkuNjY0IDc5LjE5NTNDMTg5LjIyMSA3OS4xOTUzIDE4OC44MTQgNzkuMTA3NCAxODguNDQzIDc4LjkzMTZDMTg4LjA3MiA3OC43NTU5IDE4Ny43NzYgNzguNDYyOSAxODcuNTU1IDc4LjA1MjdDMTg3LjM0IDc3LjYzNjEgMTg3LjIzMiA3Ny4wNzYyIDE4Ny4yMzIgNzYuMzczVjY1Ljg2NTJaTTE5Ny41MTYgNzkuMTk1M0MxOTYuNzggNzkuMTk1MyAxOTYuMTEzIDc5LjA3MTYgMTk1LjUxNCA3OC44MjQyQzE5NC45MjEgNzguNTcwMyAxOTQuNDEgNzguMjE1NSAxOTMuOTggNzcuNzU5OEMxOTMuNTU3IDc3LjMwNCAxOTMuMjMyIDc2Ljc2MzcgMTkzLjAwNCA3Ni4xMzg3QzE5Mi43NzYgNzUuNTEzNyAxOTIuNjYyIDc0LjgzMDEgMTkyLjY2MiA3NC4wODc5VjczLjY3NzdDMTkyLjY2MiA3Mi44MTg0IDE5Mi43ODkgNzIuMDUzNCAxOTMuMDQzIDcxLjM4MjhDMTkzLjI5NyA3MC43MDU3IDE5My42NDIgNzAuMTMyOCAxOTQuMDc4IDY5LjY2NDFDMTk0LjUxNCA2OS4xOTUzIDE5NS4wMDkgNjguODQwNSAxOTUuNTYyIDY4LjU5OTZDMTk2LjExNiA2OC4zNTg3IDE5Ni42ODkgNjguMjM4MyAxOTcuMjgxIDY4LjIzODNDMTk4LjAzNiA2OC4yMzgzIDE5OC42ODggNjguMzY4NSAxOTkuMjM0IDY4LjYyODlDMTk5Ljc4OCA2OC44ODkzIDIwMC4yNCA2OS4yNTM5IDIwMC41OTIgNjkuNzIyN0MyMDAuOTQzIDcwLjE4NDkgMjAxLjIwNCA3MC43MzE4IDIwMS4zNzMgNzEuMzYzM0MyMDEuNTQyIDcxLjk4ODMgMjAxLjYyNyA3Mi42NzE5IDIwMS42MjcgNzMuNDE0MVY3NC4yMjQ2SDE5My43MzZWNzIuNzVIMTk5LjgyVjcyLjYxMzNDMTk5Ljc5NCA3Mi4xNDQ1IDE5OS42OTcgNzEuNjg4OCAxOTkuNTI3IDcxLjI0NjFDMTk5LjM2NSA3MC44MDM0IDE5OS4xMDQgNzAuNDM4OCAxOTguNzQ2IDcwLjE1MjNDMTk4LjM4OCA2OS44NjU5IDE5Ny45IDY5LjcyMjcgMTk3LjI4MSA2OS43MjI3QzE5Ni44NzEgNjkuNzIyNyAxOTYuNDkzIDY5LjgxMDUgMTk2LjE0OCA2OS45ODYzQzE5NS44MDMgNzAuMTU1NiAxOTUuNTA3IDcwLjQwOTUgMTk1LjI2IDcwLjc0OEMxOTUuMDEyIDcxLjA4NjYgMTk0LjgyIDcxLjUgMTk0LjY4NCA3MS45ODgzQzE5NC41NDcgNzIuNDc2NiAxOTQuNDc5IDczLjAzOTcgMTk0LjQ3OSA3My42Nzc3Vjc0LjA4NzlDMTk0LjQ3OSA3NC41ODkyIDE5NC41NDcgNzUuMDYxMiAxOTQuNjg0IDc1LjUwMzlDMTk0LjgyNyA3NS45NDAxIDE5NS4wMzIgNzYuMzI0MiAxOTUuMjk5IDc2LjY1NjJDMTk1LjU3MiA3Ni45ODgzIDE5NS45MDEgNzcuMjQ4NyAxOTYuMjg1IDc3LjQzNzVDMTk2LjY3NiA3Ny42MjYzIDE5Ny4xMTggNzcuNzIwNyAxOTcuNjEzIDc3LjcyMDdDMTk4LjI1MSA3Ny43MjA3IDE5OC43OTIgNzcuNTkwNSAxOTkuMjM0IDc3LjMzMDFDMTk5LjY3NyA3Ny4wNjk3IDIwMC4wNjQgNzYuNzIxNCAyMDAuMzk2IDc2LjI4NTJMMjAxLjQ5IDc3LjE1NDNDMjAxLjI2MiA3Ny40OTkzIDIwMC45NzMgNzcuODI4MSAyMDAuNjIxIDc4LjE0MDZDMjAwLjI3IDc4LjQ1MzEgMTk5LjgzNyA3OC43MDcgMTk5LjMyMiA3OC45MDIzQzE5OC44MTQgNzkuMDk3NyAxOTguMjEyIDc5LjE5NTMgMTk3LjUxNiA3OS4xOTUzWk0yMDUuNTMzIDcwLjUzMzJWNzlIMjAzLjcxN1Y2OC40MzM2SDIwNS40MzZMMjA1LjUzMyA3MC41MzMyWk0yMDUuMTYyIDczLjMxNjRMMjA0LjMyMiA3My4yODcxQzIwNC4zMjkgNzIuNTY0NSAyMDQuNDIzIDcxLjg5NzEgMjA0LjYwNSA3MS4yODUyQzIwNC43ODggNzAuNjY2NyAyMDUuMDU4IDcwLjEyOTYgMjA1LjQxNiA2OS42NzM4QzIwNS43NzQgNjkuMjE4MSAyMDYuMjIgNjguODY2NSAyMDYuNzU0IDY4LjYxOTFDMjA3LjI4OCA2OC4zNjUyIDIwNy45MDYgNjguMjM4MyAyMDguNjA5IDY4LjIzODNDMjA5LjEwNCA2OC4yMzgzIDIwOS41NiA2OC4zMDk5IDIwOS45NzcgNjguNDUzMUMyMTAuMzkzIDY4LjU4OTggMjEwLjc1NSA2OC44MDc5IDIxMS4wNjEgNjkuMTA3NEMyMTEuMzY3IDY5LjQwNjkgMjExLjYwNCA2OS43OTEgMjExLjc3MyA3MC4yNTk4QzIxMS45NDMgNzAuNzI4NSAyMTIuMDI3IDcxLjI5NDkgMjEyLjAyNyA3MS45NTlWNzlIMjEwLjIyMVY3Mi4wNDY5QzIxMC4yMjEgNzEuNDkzNSAyMTAuMTI2IDcxLjA1MDggMjA5LjkzOCA3MC43MTg4QzIwOS43NTUgNzAuMzg2NyAyMDkuNDk1IDcwLjE0NTggMjA5LjE1NiA2OS45OTYxQzIwOC44MTggNjkuODM5OCAyMDguNDIxIDY5Ljc2MTcgMjA3Ljk2NSA2OS43NjE3QzIwNy40MzEgNjkuNzYxNyAyMDYuOTg1IDY5Ljg1NjEgMjA2LjYyNyA3MC4wNDQ5QzIwNi4yNjkgNzAuMjMzNyAyMDUuOTgyIDcwLjQ5NDEgMjA1Ljc2OCA3MC44MjYyQzIwNS41NTMgNzEuMTU4MiAyMDUuMzk2IDcxLjUzOTEgMjA1LjI5OSA3MS45Njg4QzIwNS4yMDggNzIuMzkxOSAyMDUuMTYyIDcyLjg0MTEgMjA1LjE2MiA3My4zMTY0Wk0yMTIuMDA4IDcyLjMyMDNMMjEwLjc5NyA3Mi42OTE0QzIxMC44MDMgNzIuMTEyIDIxMC44OTggNzEuNTU1MyAyMTEuMDggNzEuMDIxNUMyMTEuMjY5IDcwLjQ4NzYgMjExLjUzOSA3MC4wMTI0IDIxMS44OTEgNjkuNTk1N0MyMTIuMjQ5IDY5LjE3OSAyMTIuNjg4IDY4Ljg1MDMgMjEzLjIwOSA2OC42MDk0QzIxMy43MyA2OC4zNjIgMjE0LjMyNiA2OC4yMzgzIDIxNC45OTYgNjguMjM4M0MyMTUuNTYyIDY4LjIzODMgMjE2LjA2NCA2OC4zMTMyIDIxNi41IDY4LjQ2MjlDMjE2Ljk0MyA2OC42MTI2IDIxNy4zMTQgNjguODQzOCAyMTcuNjEzIDY5LjE1NjJDMjE3LjkxOSA2OS40NjIyIDIxOC4xNSA2OS44NTYxIDIxOC4zMDcgNzAuMzM3OUMyMTguNDYzIDcwLjgxOTcgMjE4LjU0MSA3MS4zOTI2IDIxOC41NDEgNzIuMDU2NlY3OUgyMTYuNzI1VjcyLjAzNzFDMjE2LjcyNSA3MS40NDQ3IDIxNi42MyA3MC45ODU3IDIxNi40NDEgNzAuNjYwMkMyMTYuMjU5IDcwLjMyODEgMjE1Ljk5OSA3MC4wOTcgMjE1LjY2IDY5Ljk2NjhDMjE1LjMyOCA2OS44MzAxIDIxNC45MzEgNjkuNzYxNyAyMTQuNDY5IDY5Ljc2MTdDMjE0LjA3MiA2OS43NjE3IDIxMy43MiA2OS44MzAxIDIxMy40MTQgNjkuOTY2OEMyMTMuMTA4IDcwLjEwMzUgMjEyLjg1MSA3MC4yOTIzIDIxMi42NDMgNzAuNTMzMkMyMTIuNDM0IDcwLjc2NzYgMjEyLjI3NSA3MS4wMzc4IDIxMi4xNjQgNzEuMzQzOEMyMTIuMDYgNzEuNjQ5NyAyMTIuMDA4IDcxLjk3NTMgMjEyLjAwOCA3Mi4zMjAzWlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDxnIGNsaXBQYXRoPVwidXJsKCNjbGlwMF8xNDlfMjI4MylcIj5cblx0XHRcdDxwYXRoIGQ9XCJNMTAzLjY2NyA2NC4wNDMzTDkwLjM1NSA3Ny4zNjY2TDg1LjQwODMgNzIuNDJMODcuMDUzMyA3MC43NzVMOTAuMzU1IDc0LjA3NjZMMTAyLjAyMiA2Mi40MUwxMDMuNjY3IDY0LjA0MzNaTTEwMS4wODggNjkuOTIzM0MxMDEuMjQgNzAuNTg4MyAxMDEuMzMzIDcxLjI4ODMgMTAxLjMzMyA3MkMxMDEuMzMzIDc3LjE1NjYgOTcuMTU2NyA4MS4zMzMzIDkyIDgxLjMzMzNDODYuODQzMyA4MS4zMzMzIDgyLjY2NjcgNzcuMTU2NiA4Mi42NjY3IDcyQzgyLjY2NjcgNjYuODQzMyA4Ni44NDMzIDYyLjY2NjYgOTIgNjIuNjY2NkM5My44NDMzIDYyLjY2NjYgOTUuNTQ2NyA2My4yMDMzIDk2Ljk5MzMgNjQuMTI1TDk4LjY3MzMgNjIuNDQ1Qzk2Ljc4MzMgNjEuMTE1IDk0LjQ4NSA2MC4zMzMzIDkyIDYwLjMzMzNDODUuNTYgNjAuMzMzMyA4MC4zMzMzIDY1LjU2IDgwLjMzMzMgNzJDODAuMzMzMyA3OC40NCA4NS41NiA4My42NjY2IDkyIDgzLjY2NjZDOTguNDQgODMuNjY2NiAxMDMuNjY3IDc4LjQ0IDEwMy42NjcgNzJDMTAzLjY2NyA3MC42MTE2IDEwMy40MSA2OS4yODE2IDEwMi45NjcgNjguMDQ1TDEwMS4wODggNjkuOTIzM1pcIiBmaWxsPVwiIzQyNzJGOVwiLz5cblx0XHQ8L2c+XG5cdFx0PGRlZnM+XG5cdFx0XHQ8Y2xpcFBhdGggaWQ9XCJjbGlwMF8xNDlfMjI4M1wiPlxuXHRcdFx0XHQ8cmVjdCB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMjhcIiBmaWxsPVwid2hpdGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzggNTgpXCIvPlxuXHRcdFx0PC9jbGlwUGF0aD5cblx0XHQ8L2RlZnM+XG5cdDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldmlldzsiLCJpbXBvcnQgdXNlQ2hlY2tlZENob2ljZVN0YXRlIGZyb20gJy4vdXNlQ2hlY2tlZENob2ljZVN0YXRlJztcblxuY29uc3Qge1xuXHQgICAgICBUb29sYmFyQnV0dG9uLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0ICAgICAgU1ZHLFxuXHQgICAgICBQYXRoLFxuICAgICAgfSA9IHdwLnByaW1pdGl2ZXM7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gVG9nZ2xlQ2hlY2tTdGF0ZUJ1dHRvbigpIHtcblx0Y29uc3QgWyBpc0NoZWNrZWQsIHRvZ2dsZUNoZWNrZWQgXSA9IHVzZUNoZWNrZWRDaG9pY2VTdGF0ZSgpO1xuXG5cdHJldHVybiA8VG9vbGJhckJ1dHRvblxuXHRcdGljb249eyA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdCAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cblx0XHRcdDxQYXRoXG5cdFx0XHRcdGQ9XCJNMTYuNyA3LjFsLTYuMyA4LjUtMy4zLTIuNS0uOSAxLjIgNC41IDMuNEwxNy45IDh6XCIvPlxuXHRcdDwvU1ZHPiB9XG5cdFx0dGl0bGU9eyBpc0NoZWNrZWRcblx0XHQgICAgICAgID8gX18oICdTaG93IHVuY2hlY2tlZCBzdGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApXG5cdFx0ICAgICAgICA6IF9fKCAnU2hvdyBjaGVja2VkIHN0YXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHR9XG5cdFx0b25DbGljaz17ICgpID0+IHRvZ2dsZUNoZWNrZWQoKSB9XG5cdFx0aXNBY3RpdmU9eyBpc0NoZWNrZWQgfVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQ2hlY2tTdGF0ZUJ1dHRvbjsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENob2ljZUl0ZW1Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgge1xuXHRjbGllbnRJZDogZmFsc2UsXG59ICk7XG5cbmV4cG9ydCBkZWZhdWx0IENob2ljZUl0ZW1Db250ZXh0OyIsImltcG9ydCB1c2VDaGVja2VkQ2hvaWNlU3RhdGUgZnJvbSAnLi91c2VDaGVja2VkQ2hvaWNlU3RhdGUnO1xuaW1wb3J0IENob2ljZUl0ZW1Db250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgVG9nZ2xlQ2hlY2tTdGF0ZUJ1dHRvbiBmcm9tICcuL1RvZ2dsZUNoZWNrU3RhdGVCdXR0b24nO1xuaW1wb3J0IHVzZUFsbG93ZWRCbG9ja3MgZnJvbSAnLi91c2VBbGxvd2VkQmxvY2tzJztcbmltcG9ydCBwcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdCAgICAgIHVzZUJsb2NrUHJvcHMsXG5cdCAgICAgIHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdCAgICAgIEJsb2NrQ29udHJvbHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgUGFuZWxCb2R5LFxuXHQgICAgICBUZXh0Q29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IGNsYXNzbmFtZXMgfSA9IEpldEZCQWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEFkdmFuY2VkQ2hvaWNlKCBwcm9wcyApIHtcblx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBjbGllbnRJZCB9ID0gcHJvcHM7XG5cblx0Y29uc3QgWyBpc0NoZWNrZWQgXSA9IHVzZUNoZWNrZWRDaG9pY2VTdGF0ZSgpO1xuXG5cdGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoIHtcblx0XHQnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0nOiB0cnVlLFxuXHRcdCdpcy1jaGVja2VkJzogaXNDaGVja2VkLFxuXHRcdCdqZmItY29sbGFwc2UtYmxvY2stbWFyZ2luJzogdHJ1ZSxcblx0XHQnamZiLWNvbGxhcHNlLWJsb2NrLWJvcmRlcic6IHRydWUsXG5cdH0gKTtcblxuXHRjb25zdCBhbGxvd2VkQmxvY2tzID0gdXNlQWxsb3dlZEJsb2NrcygpO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgICAgICAgPSB1c2VCbG9ja1Byb3BzKCB7IGNsYXNzTmFtZSB9ICk7XG5cdGNvbnN0IGlubmVyQmxvY2tzUHJvcHMgPSB1c2VJbm5lckJsb2Nrc1Byb3BzKCBibG9ja1Byb3BzLCB7XG5cdFx0dGVtcGxhdGU6IFsgWyAnY29yZS9wYXJhZ3JhcGgnLCB7fSBdIF0sXG5cdFx0YWxsb3dlZEJsb2Nrcyxcblx0fSApO1xuXG5cdGlmICggYXR0cmlidXRlcy5pc1ByZXZpZXcgKSB7XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9eyB7XG5cdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdH0gfT5cblx0XHRcdHsgcHJldmlldyB9XG5cdFx0PC9kaXY+O1xuXHR9XG5cblx0cmV0dXJuIDxDaG9pY2VJdGVtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHsgY2xpZW50SWQgfSB9PlxuXHRcdDxsaSB7IC4uLmlubmVyQmxvY2tzUHJvcHMgfS8+XG5cdFx0PEJsb2NrQ29udHJvbHMgZ3JvdXA9eyAnYmxvY2snIH0+XG5cdFx0XHQ8VG9nZ2xlQ2hlY2tTdGF0ZUJ1dHRvbi8+XG5cdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0dlbmVyYWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZhbHVlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbCA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsLnRyaW0oKSxcblx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0J1ZhbHVlIGZvciBDYWxjdWxhdGVkIEZpZWxkJyxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdFx0XHRgVGhpcyB2YWx1ZSB3aWxsIGJlIHVzZWQgZm9yIGNhbGN1bGF0aW9uc1xuaW4gdGhlIENhbGN1bGF0ZWQgRmllbGQuYCxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FsY192YWx1ZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0Y2FsY192YWx1ZTogdmFsLnRyaW0oKSxcblx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0PC9DaG9pY2VJdGVtQ29udGV4dC5Qcm92aWRlcj47XG59IiwiaW1wb3J0IEVkaXRBZHZhbmNlZENob2ljZSBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJ0BibG9ja3MvY2hvaWNlL2Jsb2NrLmpzb24nO1xuaW1wb3J0IFNhdmVBZHZhbmNlZENob2ljZSBmcm9tICcuL3NhdmUnO1xuXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vLyBjb21wYXRpYmlsaXR5IHdpdGggV29yZFByZXNzIDw9IDYuMlxubWV0YWRhdGEuc3VwcG9ydHMuX19leHBlcmltZW50YWxMYXlvdXQgPSBtZXRhZGF0YS5zdXBwb3J0cy5sYXlvdXQ7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRkZXNjcmlwdGlvbjogX18oXG5cdFx0YEFwcGx5IGEgdmFyaWV0eSBvZiBzZXR0aW5ncyBvZiB0aGUgb25lIHBhcnRpY3VsYXIgY2hvaWNlIGJsb2NrLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRlZGl0OiBFZGl0QWR2YW5jZWRDaG9pY2UsXG5cdHNhdmU6IFNhdmVBZHZhbmNlZENob2ljZSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGlzUHJldmlldzogdHJ1ZSxcblx0XHR9LFxuXHR9LFxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzLFxufTtcbiIsImNvbnN0IHByZXZpZXcgPSAoXG5cdDxzdmcgd2lkdGg9XCIyOThcIiBoZWlnaHQ9XCIxNDRcIiB2aWV3Qm94PVwiMCAwIDI5OCAxNDRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8cmVjdCB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHJ4PVwiNFwiIGZpbGw9XCIjRTJFOEYwXCIvPlxuXHRcdDxyZWN0IHg9XCI5M1wiIHk9XCIxMlwiIHdpZHRoPVwiMTI4XCIgaGVpZ2h0PVwiMTIyXCIgcng9XCI4XCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdDxyZWN0IHg9XCIxMDlcIiB5PVwiMTE0XCIgd2lkdGg9XCI5NlwiIGhlaWdodD1cIjRcIiByeD1cIjJcIiBmaWxsPVwiI0NCRDVFMVwiLz5cblx0XHQ8cmVjdCB4PVwiMTA5XCIgeT1cIjEyMFwiIHdpZHRoPVwiNzlcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHJlY3QgeD1cIjEwOVwiIHk9XCI1MlwiIHdpZHRoPVwiOTZcIiBoZWlnaHQ9XCI1NlwiIHJ4PVwiNFwiIGZpbGw9XCIjRjFGNUY5XCIvPlxuXHRcdDxwYXRoIGQ9XCJNMTY5IDkyLjA2NjZWNjguODY2NkgxNDVWOTIuMDY2NkgxNjlaTTE1Mi4zMzMgODIuNEwxNTUuNjY3IDg2LjI3OTVMMTYwLjMzMyA4MC40NjY2TDE2Ni4zMzMgODguMkgxNDcuNjY3TDE1Mi4zMzMgODIuNFpcIiBmaWxsPVwiI0NCRDVFMVwiLz5cblx0XHQ8cGF0aCBkPVwiTTE0Ny4wNzggMzIuOTUzMVYzMy42NzE5QzE0Ny4wNzggMzQuNTI2IDE0Ni45NzEgMzUuMjkxNyAxNDYuNzU4IDM1Ljk2ODhDMTQ2LjU0NCAzNi42NDU4IDE0Ni4yMzcgMzcuMjIxNCAxNDUuODM2IDM3LjY5NTNDMTQ1LjQzNSAzOC4xNjkzIDE0NC45NTMgMzguNTMxMiAxNDQuMzkxIDM4Ljc4MTJDMTQzLjgzMyAzOS4wMzEyIDE0My4yMDggMzkuMTU2MiAxNDIuNTE2IDM5LjE1NjJDMTQxLjg0NCAzOS4xNTYyIDE0MS4yMjcgMzkuMDMxMiAxNDAuNjY0IDM4Ljc4MTJDMTQwLjEwNyAzOC41MzEyIDEzOS42MjIgMzguMTY5MyAxMzkuMjExIDM3LjY5NTNDMTM4LjgwNSAzNy4yMjE0IDEzOC40OSAzNi42NDU4IDEzOC4yNjYgMzUuOTY4OEMxMzguMDQyIDM1LjI5MTcgMTM3LjkzIDM0LjUyNiAxMzcuOTMgMzMuNjcxOVYzMi45NTMxQzEzNy45MyAzMi4wOTkgMTM4LjAzOSAzMS4zMzU5IDEzOC4yNTggMzAuNjY0MUMxMzguNDgyIDI5Ljk4NyAxMzguNzk3IDI5LjQxMTUgMTM5LjIwMyAyOC45Mzc1QzEzOS42MDkgMjguNDU4MyAxNDAuMDkxIDI4LjA5MzggMTQwLjY0OCAyNy44NDM4QzE0MS4yMTEgMjcuNTkzOCAxNDEuODI4IDI3LjQ2ODggMTQyLjUgMjcuNDY4OEMxNDMuMTkzIDI3LjQ2ODggMTQzLjgxOCAyNy41OTM4IDE0NC4zNzUgMjcuODQzOEMxNDQuOTM4IDI4LjA5MzggMTQ1LjQxOSAyOC40NTgzIDE0NS44MiAyOC45Mzc1QzE0Ni4yMjcgMjkuNDExNSAxNDYuNTM2IDI5Ljk4NyAxNDYuNzUgMzAuNjY0MUMxNDYuOTY5IDMxLjMzNTkgMTQ3LjA3OCAzMi4wOTkgMTQ3LjA3OCAzMi45NTMxWk0xNDUuNTg2IDMzLjY3MTlWMzIuOTM3NUMxNDUuNTg2IDMyLjI2MDQgMTQ1LjUxNiAzMS42NjE1IDE0NS4zNzUgMzEuMTQwNkMxNDUuMjQgMzAuNjE5OCAxNDUuMDM5IDMwLjE4MjMgMTQ0Ljc3MyAyOS44MjgxQzE0NC41MDggMjkuNDc0IDE0NC4xODIgMjkuMjA1NyAxNDMuNzk3IDI5LjAyMzRDMTQzLjQxNyAyOC44NDExIDE0Mi45ODQgMjguNzUgMTQyLjUgMjguNzVDMTQyLjAzMSAyOC43NSAxNDEuNjA3IDI4Ljg0MTEgMTQxLjIyNyAyOS4wMjM0QzE0MC44NTIgMjkuMjA1NyAxNDAuNTI5IDI5LjQ3NCAxNDAuMjU4IDI5LjgyODFDMTM5Ljk5MiAzMC4xODIzIDEzOS43ODYgMzAuNjE5OCAxMzkuNjQxIDMxLjE0MDZDMTM5LjQ5NSAzMS42NjE1IDEzOS40MjIgMzIuMjYwNCAxMzkuNDIyIDMyLjkzNzVWMzMuNjcxOUMxMzkuNDIyIDM0LjM1NDIgMTM5LjQ5NSAzNC45NTgzIDEzOS42NDEgMzUuNDg0NEMxMzkuNzg2IDM2LjAwNTIgMTM5Ljk5NSAzNi40NDUzIDE0MC4yNjYgMzYuODA0N0MxNDAuNTQyIDM3LjE1ODkgMTQwLjg2NyAzNy40MjcxIDE0MS4yNDIgMzcuNjA5NEMxNDEuNjIyIDM3Ljc5MTcgMTQyLjA0NyAzNy44ODI4IDE0Mi41MTYgMzcuODgyOEMxNDMuMDA1IDM3Ljg4MjggMTQzLjQ0IDM3Ljc5MTcgMTQzLjgyIDM3LjYwOTRDMTQ0LjIwMSAzNy40MjcxIDE0NC41MjEgMzcuMTU4OSAxNDQuNzgxIDM2LjgwNDdDMTQ1LjA0NyAzNi40NDUzIDE0NS4yNDcgMzYuMDA1MiAxNDUuMzgzIDM1LjQ4NDRDMTQ1LjUxOCAzNC45NTgzIDE0NS41ODYgMzQuMzU0MiAxNDUuNTg2IDMzLjY3MTlaTTE1MC41NjIgMzIuMTcxOVY0Mi4yNUgxNDkuMTA5VjMwLjU0NjlIMTUwLjQzOEwxNTAuNTYyIDMyLjE3MTlaTTE1Ni4yNTggMzQuNzAzMVYzNC44NjcyQzE1Ni4yNTggMzUuNDgxOCAxNTYuMTg1IDM2LjA1MjEgMTU2LjAzOSAzNi41NzgxQzE1NS44OTMgMzcuMDk5IDE1NS42OCAzNy41NTIxIDE1NS4zOTggMzcuOTM3NUMxNTUuMTIyIDM4LjMyMjkgMTU0Ljc4MSAzOC42MjI0IDE1NC4zNzUgMzguODM1OUMxNTMuOTY5IDM5LjA0OTUgMTUzLjUwMyAzOS4xNTYyIDE1Mi45NzcgMzkuMTU2MkMxNTIuNDQgMzkuMTU2MiAxNTEuOTY2IDM5LjA2NzcgMTUxLjU1NSAzOC44OTA2QzE1MS4xNDMgMzguNzEzNSAxNTAuNzk0IDM4LjQ1NTcgMTUwLjUwOCAzOC4xMTcyQzE1MC4yMjEgMzcuNzc4NiAxNDkuOTkyIDM3LjM3MjQgMTQ5LjgyIDM2Ljg5ODRDMTQ5LjY1NCAzNi40MjQ1IDE0OS41MzkgMzUuODkwNiAxNDkuNDc3IDM1LjI5NjlWMzQuNDIxOUMxNDkuNTM5IDMzLjc5NjkgMTQ5LjY1NiAzMy4yMzcgMTQ5LjgyOCAzMi43NDIyQzE1MCAzMi4yNDc0IDE1MC4yMjcgMzEuODI1NSAxNTAuNTA4IDMxLjQ3NjZDMTUwLjc5NCAzMS4xMjI0IDE1MS4xNDEgMzAuODU0MiAxNTEuNTQ3IDMwLjY3MTlDMTUxLjk1MyAzMC40ODQ0IDE1Mi40MjIgMzAuMzkwNiAxNTIuOTUzIDMwLjM5MDZDMTUzLjQ4NCAzMC4zOTA2IDE1My45NTYgMzAuNDk0OCAxNTQuMzY3IDMwLjcwMzFDMTU0Ljc3OSAzMC45MDYyIDE1NS4xMjUgMzEuMTk3OSAxNTUuNDA2IDMxLjU3ODFDMTU1LjY4OCAzMS45NTgzIDE1NS44OTggMzIuNDE0MSAxNTYuMDM5IDMyLjk0NTNDMTU2LjE4NSAzMy40NzE0IDE1Ni4yNTggMzQuMDU3MyAxNTYuMjU4IDM0LjcwMzFaTTE1NC44MDUgMzQuODY3MlYzNC43MDMxQzE1NC44MDUgMzQuMjgxMiAxNTQuNzYgMzMuODg1NCAxNTQuNjcyIDMzLjUxNTZDMTU0LjU4MyAzMy4xNDA2IDE1NC40NDUgMzIuODEyNSAxNTQuMjU4IDMyLjUzMTJDMTU0LjA3NiAzMi4yNDQ4IDE1My44NDEgMzIuMDIwOCAxNTMuNTU1IDMxLjg1OTRDMTUzLjI2OCAzMS42OTI3IDE1Mi45MjcgMzEuNjA5NCAxNTIuNTMxIDMxLjYwOTRDMTUyLjE2NyAzMS42MDk0IDE1MS44NDkgMzEuNjcxOSAxNTEuNTc4IDMxLjc5NjlDMTUxLjMxMiAzMS45MjE5IDE1MS4wODYgMzIuMDkxMSAxNTAuODk4IDMyLjMwNDdDMTUwLjcxMSAzMi41MTMgMTUwLjU1NyAzMi43NTI2IDE1MC40MzggMzMuMDIzNEMxNTAuMzIzIDMzLjI4OTEgMTUwLjIzNyAzMy41NjUxIDE1MC4xOCAzMy44NTE2VjM1Ljg3NUMxNTAuMjg0IDM2LjIzOTYgMTUwLjQzIDM2LjU4MzMgMTUwLjYxNyAzNi45MDYyQzE1MC44MDUgMzcuMjI0IDE1MS4wNTUgMzcuNDgxOCAxNTEuMzY3IDM3LjY3OTdDMTUxLjY4IDM3Ljg3MjQgMTUyLjA3MyAzNy45Njg4IDE1Mi41NDcgMzcuOTY4OEMxNTIuOTM4IDM3Ljk2ODggMTUzLjI3MyAzNy44ODggMTUzLjU1NSAzNy43MjY2QzE1My44NDEgMzcuNTU5OSAxNTQuMDc2IDM3LjMzMzMgMTU0LjI1OCAzNy4wNDY5QzE1NC40NDUgMzYuNzYwNCAxNTQuNTgzIDM2LjQzMjMgMTU0LjY3MiAzNi4wNjI1QzE1NC43NiAzNS42ODc1IDE1NC44MDUgMzUuMjg5MSAxNTQuODA1IDM0Ljg2NzJaTTE2MS42NDEgMzAuNTQ2OVYzMS42NTYySDE1Ny4wN1YzMC41NDY5SDE2MS42NDFaTTE1OC42MTcgMjguNDkyMkgxNjAuMDYyVjM2LjkwNjJDMTYwLjA2MiAzNy4xOTI3IDE2MC4xMDcgMzcuNDA4OSAxNjAuMTk1IDM3LjU1NDdDMTYwLjI4NCAzNy43MDA1IDE2MC4zOTggMzcuNzk2OSAxNjAuNTM5IDM3Ljg0MzhDMTYwLjY4IDM3Ljg5MDYgMTYwLjgzMSAzNy45MTQxIDE2MC45OTIgMzcuOTE0MUMxNjEuMTEyIDM3LjkxNDEgMTYxLjIzNyAzNy45MDM2IDE2MS4zNjcgMzcuODgyOEMxNjEuNTAzIDM3Ljg1NjggMTYxLjYwNCAzNy44MzU5IDE2MS42NzIgMzcuODIwM0wxNjEuNjggMzlDMTYxLjU2NSAzOS4wMzY1IDE2MS40MTQgMzkuMDcwMyAxNjEuMjI3IDM5LjEwMTZDMTYxLjA0NCAzOS4xMzggMTYwLjgyMyAzOS4xNTYyIDE2MC41NjIgMzkuMTU2MkMxNjAuMjA4IDM5LjE1NjIgMTU5Ljg4MyAzOS4wODU5IDE1OS41ODYgMzguOTQ1M0MxNTkuMjg5IDM4LjgwNDcgMTU5LjA1MiAzOC41NzAzIDE1OC44NzUgMzguMjQyMkMxNTguNzAzIDM3LjkwODkgMTU4LjYxNyAzNy40NjA5IDE1OC42MTcgMzYuODk4NFYyOC40OTIyWk0xNjQuOTA2IDMwLjU0NjlWMzlIMTYzLjQ1M1YzMC41NDY5SDE2NC45MDZaTTE2My4zNDQgMjguMzA0N0MxNjMuMzQ0IDI4LjA3MDMgMTYzLjQxNCAyNy44NzI0IDE2My41NTUgMjcuNzEwOUMxNjMuNzAxIDI3LjU0OTUgMTYzLjkxNCAyNy40Njg4IDE2NC4xOTUgMjcuNDY4OEMxNjQuNDcxIDI3LjQ2ODggMTY0LjY4MiAyNy41NDk1IDE2NC44MjggMjcuNzEwOUMxNjQuOTc5IDI3Ljg3MjQgMTY1LjA1NSAyOC4wNzAzIDE2NS4wNTUgMjguMzA0N0MxNjUuMDU1IDI4LjUyODYgMTY0Ljk3OSAyOC43MjE0IDE2NC44MjggMjguODgyOEMxNjQuNjgyIDI5LjAzOTEgMTY0LjQ3MSAyOS4xMTcyIDE2NC4xOTUgMjkuMTE3MkMxNjMuOTE0IDI5LjExNzIgMTYzLjcwMSAyOS4wMzkxIDE2My41NTUgMjguODgyOEMxNjMuNDE0IDI4LjcyMTQgMTYzLjM0NCAyOC41Mjg2IDE2My4zNDQgMjguMzA0N1pNMTY2Ljg0NCAzNC44NjcyVjM0LjY4NzVDMTY2Ljg0NCAzNC4wNzgxIDE2Ni45MzIgMzMuNTEzIDE2Ny4xMDkgMzIuOTkyMkMxNjcuMjg2IDMyLjQ2NjEgMTY3LjU0MiAzMi4wMTA0IDE2Ny44NzUgMzEuNjI1QzE2OC4yMDggMzEuMjM0NCAxNjguNjEyIDMwLjkzMjMgMTY5LjA4NiAzMC43MTg4QzE2OS41NiAzMC41IDE3MC4wOTEgMzAuMzkwNiAxNzAuNjggMzAuMzkwNkMxNzEuMjczIDMwLjM5MDYgMTcxLjgwNyAzMC41IDE3Mi4yODEgMzAuNzE4OEMxNzIuNzYgMzAuOTMyMyAxNzMuMTY3IDMxLjIzNDQgMTczLjUgMzEuNjI1QzE3My44MzkgMzIuMDEwNCAxNzQuMDk2IDMyLjQ2NjEgMTc0LjI3MyAzMi45OTIyQzE3NC40NTEgMzMuNTEzIDE3NC41MzkgMzQuMDc4MSAxNzQuNTM5IDM0LjY4NzVWMzQuODY3MkMxNzQuNTM5IDM1LjQ3NjYgMTc0LjQ1MSAzNi4wNDE3IDE3NC4yNzMgMzYuNTYyNUMxNzQuMDk2IDM3LjA4MzMgMTczLjgzOSAzNy41MzkxIDE3My41IDM3LjkyOTdDMTczLjE2NyAzOC4zMTUxIDE3Mi43NjMgMzguNjE3MiAxNzIuMjg5IDM4LjgzNTlDMTcxLjgyIDM5LjA0OTUgMTcxLjI4OSAzOS4xNTYyIDE3MC42OTUgMzkuMTU2MkMxNzAuMTAyIDM5LjE1NjIgMTY5LjU2OCAzOS4wNDk1IDE2OS4wOTQgMzguODM1OUMxNjguNjIgMzguNjE3MiAxNjguMjE0IDM4LjMxNTEgMTY3Ljg3NSAzNy45Mjk3QzE2Ny41NDIgMzcuNTM5MSAxNjcuMjg2IDM3LjA4MzMgMTY3LjEwOSAzNi41NjI1QzE2Ni45MzIgMzYuMDQxNyAxNjYuODQ0IDM1LjQ3NjYgMTY2Ljg0NCAzNC44NjcyWk0xNjguMjg5IDM0LjY4NzVWMzQuODY3MkMxNjguMjg5IDM1LjI4OTEgMTY4LjMzOSAzNS42ODc1IDE2OC40MzggMzYuMDYyNUMxNjguNTM2IDM2LjQzMjMgMTY4LjY4NSAzNi43NjA0IDE2OC44ODMgMzcuMDQ2OUMxNjkuMDg2IDM3LjMzMzMgMTY5LjMzOSAzNy41NTk5IDE2OS42NDEgMzcuNzI2NkMxNjkuOTQzIDM3Ljg4OCAxNzAuMjk0IDM3Ljk2ODggMTcwLjY5NSAzNy45Njg4QzE3MS4wOTEgMzcuOTY4OCAxNzEuNDM4IDM3Ljg4OCAxNzEuNzM0IDM3LjcyNjZDMTcyLjAzNiAzNy41NTk5IDE3Mi4yODYgMzcuMzMzMyAxNzIuNDg0IDM3LjA0NjlDMTcyLjY4MiAzNi43NjA0IDE3Mi44MzEgMzYuNDMyMyAxNzIuOTMgMzYuMDYyNUMxNzMuMDM0IDM1LjY4NzUgMTczLjA4NiAzNS4yODkxIDE3My4wODYgMzQuODY3MlYzNC42ODc1QzE3My4wODYgMzQuMjcwOCAxNzMuMDM0IDMzLjg3NzYgMTcyLjkzIDMzLjUwNzhDMTcyLjgzMSAzMy4xMzI4IDE3Mi42OCAzMi44MDIxIDE3Mi40NzcgMzIuNTE1NkMxNzIuMjc5IDMyLjIyNCAxNzIuMDI5IDMxLjk5NDggMTcxLjcyNyAzMS44MjgxQzE3MS40MyAzMS42NjE1IDE3MS4wODEgMzEuNTc4MSAxNzAuNjggMzEuNTc4MUMxNzAuMjg0IDMxLjU3ODEgMTY5LjkzNSAzMS42NjE1IDE2OS42MzMgMzEuODI4MUMxNjkuMzM2IDMxLjk5NDggMTY5LjA4NiAzMi4yMjQgMTY4Ljg4MyAzMi41MTU2QzE2OC42ODUgMzIuODAyMSAxNjguNTM2IDMzLjEzMjggMTY4LjQzOCAzMy41MDc4QzE2OC4zMzkgMzMuODc3NiAxNjguMjg5IDM0LjI3MDggMTY4LjI4OSAzNC42ODc1Wk0xNzcuNzk3IDMyLjM1MTZWMzlIMTc2LjM1MlYzMC41NDY5SDE3Ny43MTlMMTc3Ljc5NyAzMi4zNTE2Wk0xNzcuNDUzIDM0LjQ1MzFMMTc2Ljg1MiAzNC40Mjk3QzE3Ni44NTcgMzMuODUxNiAxNzYuOTQzIDMzLjMxNzcgMTc3LjEwOSAzMi44MjgxQzE3Ny4yNzYgMzIuMzMzMyAxNzcuNTEgMzEuOTAzNiAxNzcuODEyIDMxLjUzOTFDMTc4LjExNSAzMS4xNzQ1IDE3OC40NzQgMzAuODkzMiAxNzguODkxIDMwLjY5NTNDMTc5LjMxMiAzMC40OTIyIDE3OS43NzkgMzAuMzkwNiAxODAuMjg5IDMwLjM5MDZDMTgwLjcwNiAzMC4zOTA2IDE4MS4wODEgMzAuNDQ3OSAxODEuNDE0IDMwLjU2MjVDMTgxLjc0NyAzMC42NzE5IDE4Mi4wMzEgMzAuODQ5IDE4Mi4yNjYgMzEuMDkzOEMxODIuNTA1IDMxLjMzODUgMTgyLjY4OCAzMS42NTYyIDE4Mi44MTIgMzIuMDQ2OUMxODIuOTM4IDMyLjQzMjMgMTgzIDMyLjkwMzYgMTgzIDMzLjQ2MDlWMzlIMTgxLjU0N1YzMy40NDUzQzE4MS41NDcgMzMuMDAyNiAxODEuNDgyIDMyLjY0ODQgMTgxLjM1MiAzMi4zODI4QzE4MS4yMjEgMzIuMTEyIDE4MS4wMzEgMzEuOTE2NyAxODAuNzgxIDMxLjc5NjlDMTgwLjUzMSAzMS42NzE5IDE4MC4yMjQgMzEuNjA5NCAxNzkuODU5IDMxLjYwOTRDMTc5LjUgMzEuNjA5NCAxNzkuMTcyIDMxLjY4NDkgMTc4Ljg3NSAzMS44MzU5QzE3OC41ODMgMzEuOTg3IDE3OC4zMzEgMzIuMTk1MyAxNzguMTE3IDMyLjQ2MDlDMTc3LjkwOSAzMi43MjY2IDE3Ny43NDUgMzMuMDMxMiAxNzcuNjI1IDMzLjM3NUMxNzcuNTEgMzMuNzEzNSAxNzcuNDUzIDM0LjA3MjkgMTc3LjQ1MyAzNC40NTMxWk0xOTMuNzU4IDI3LjU2MjVWMzlIMTkyLjMxMlYyOS4zNjcyTDE4OS4zOTggMzAuNDI5N1YyOS4xMjVMMTkzLjUzMSAyNy41NjI1SDE5My43NThaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0PGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwXzE0N18yMjUxKVwiPlxuXHRcdFx0PHBhdGggZD1cIk0xMzEgMjcuMThMMTE5LjU5IDM4LjZMMTE1LjM1IDM0LjM2TDExNi43NiAzMi45NUwxMTkuNTkgMzUuNzhMMTI5LjU5IDI1Ljc4TDEzMSAyNy4xOFpNMTI4Ljc5IDMyLjIyQzEyOC45MiAzMi43OSAxMjkgMzMuMzkgMTI5IDM0QzEyOSAzOC40MiAxMjUuNDIgNDIgMTIxIDQyQzExNi41OCA0MiAxMTMgMzguNDIgMTEzIDM0QzExMyAyOS41OCAxMTYuNTggMjYgMTIxIDI2QzEyMi41OCAyNiAxMjQuMDQgMjYuNDYgMTI1LjI4IDI3LjI1TDEyNi43MiAyNS44MUMxMjUuMSAyNC42NyAxMjMuMTMgMjQgMTIxIDI0QzExNS40OCAyNCAxMTEgMjguNDggMTExIDM0QzExMSAzOS41MiAxMTUuNDggNDQgMTIxIDQ0QzEyNi41MiA0NCAxMzEgMzkuNTIgMTMxIDM0QzEzMSAzMi44MSAxMzAuNzggMzEuNjcgMTMwLjQgMzAuNjFMMTI4Ljc5IDMyLjIyWlwiIGZpbGw9XCIjNDI3MkY5XCIvPlxuXHRcdDwvZz5cblx0XHQ8ZGVmcz5cblx0XHRcdDxjbGlwUGF0aCBpZD1cImNsaXAwXzE0N18yMjUxXCI+XG5cdFx0XHRcdDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGZpbGw9XCJ3aGl0ZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDkgMjIpXCIvPlxuXHRcdFx0PC9jbGlwUGF0aD5cblx0XHQ8L2RlZnM+XG5cdDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldmlldzsiLCJjb25zdCB7XG5cdCAgICAgIHVzZUlubmVyQmxvY2tzUHJvcHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgRnJhZ21lbnQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZUFkdmFuY2VkQ2hvaWNlKCkge1xuXHRjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcy5zYXZlKCk7XG5cblx0cmV0dXJuIDxGcmFnbWVudCB7IC4uLmlubmVyQmxvY2tzUHJvcHMgfSAvPjtcbn0iLCJjb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCBTUEVDSUZJQ19JTkNMVURFID0gW1xuXHQnamV0LWZvcm1zL2Nob2ljZS1jb250cm9sJyxcbl07XG5cbmZ1bmN0aW9uIHVzZUFsbG93ZWRCbG9ja3MoKSB7XG5cdHJldHVybiB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHtcblx0XHRcdGNvbnN0IGFsbG93ZWRCbG9ja3MgPSBbXTtcblx0XHRcdGNvbnN0IGJsb2NrVHlwZXMgICAgPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKS5nZXRCbG9ja1R5cGVzKCk7XG5cblx0XHRcdGZvciAoIGNvbnN0IGJsb2NrVHlwZSBvZiBibG9ja1R5cGVzICkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0YmxvY2tUeXBlLm5hbWUgJiYgKFxuXHRcdFx0XHRcdFx0U1BFQ0lGSUNfSU5DTFVERS5pbmNsdWRlcyggYmxvY2tUeXBlLm5hbWUgKSB8fFxuXHRcdFx0XHRcdFx0IWJsb2NrVHlwZS5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcy5wdXNoKCBibG9ja1R5cGUubmFtZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhbGxvd2VkQmxvY2tzO1xuXHRcdH0sXG5cdFx0W10sXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFsbG93ZWRCbG9ja3M7IiwiaW1wb3J0IENob2ljZXNGaWVsZENvbnRleHQgZnJvbSAnLi4vY2hvaWNlcy1maWVsZC9jb250ZXh0JztcbmltcG9ydCBDaG9pY2VJdGVtQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG4vKipcbiAqIFVzZWQgZm9yIG1hbmlwdWxhdGluZyBjaGVja2VkL3VuY2hlY2tlZCBzdGF0ZSBmb3IgY2hvaWNlcy5cbiAqIFRoYW5rcyB0byB0aGlzLCB5b3UgY2FuIG9ic2VydmUgdGhlIGFwcGVhcmFuY2UgaW4gYm90aCBzdGF0ZXMgb2YgdGhlIGJsb2NrLlxuICpcbiAqIFRoaXMgaG9vayBoYXMgbm8gZWZmZWN0IG9uIGJsb2NrIGF0dHJpYnV0ZXMuXG4gKlxuICogQHJldHVybnMgeygqfChmdW5jdGlvbigpOiB2b2lkKSlbXX1cbiAqL1xuZnVuY3Rpb24gdXNlQ2hlY2tlZENob2ljZVN0YXRlKCkge1xuXHRjb25zdCB7IGNsaWVudElkLCBuYW1lIH0gICAgICAgICA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcblx0Y29uc3QgeyBjdXJyZW50LCB1cGRhdGVDdXJyZW50IH0gPSB1c2VDb250ZXh0KCBDaG9pY2VzRmllbGRDb250ZXh0ICk7XG5cblx0Y29uc3QgeyBjbGllbnRJZDogcGFyZW50SWQgfSA9IHVzZUNvbnRleHQoIENob2ljZUl0ZW1Db250ZXh0ICk7XG5cblx0aWYgKCAnamV0LWZvcm1zL2Nob2ljZScgPT09IG5hbWUgKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGN1cnJlbnQuaW5jbHVkZXM/LiggY2xpZW50SWQgKSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0dXBkYXRlQ3VycmVudCggY2xpZW50SWQgKTtcblx0XHRcdH0sXG5cdFx0XTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0Y3VycmVudC5pbmNsdWRlcz8uKCBwYXJlbnRJZCApLFxuXHRcdCgpID0+IHtcblx0XHRcdHVwZGF0ZUN1cnJlbnQoIHBhcmVudElkICk7XG5cdFx0fSxcblx0XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2hlY2tlZENob2ljZVN0YXRlOyIsImNvbnN0IHtcblx0ICAgICAgVG9vbGJhckJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIFNWRyxcblx0ICAgICAgUGF0aCxcbiAgICAgIH0gPSB3cC5wcmltaXRpdmVzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHQgICAgICB1c2VDYWxsYmFjayxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdCAgICAgIGNyZWF0ZUJsb2NrLFxuICAgICAgfSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHQgICAgICB1c2VEaXNwYXRjaCxcblx0ICAgICAgc2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIEFkZENob2ljZUJ1dHRvbigpIHtcblx0Y29uc3QgeyBjbGllbnRJZCB9ICAgID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXHRjb25zdCB7IGluc2VydEJsb2NrIH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXG5cdGNvbnN0IGFkZENob2ljZSA9IHVzZUNhbGxiYWNrKFxuXHRcdCgpID0+IHtcblx0XHRcdGNvbnN0IGNvdW50QmxvY2tzID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tDb3VudChcblx0XHRcdFx0Y2xpZW50SWQsXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCBjaG9pY2UgPSBjcmVhdGVCbG9jayhcblx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGB2YWx1ZS1vZi0ke2NvdW50QmxvY2tzfS1jaG9pY2VgLFxuXHRcdFx0XHRcdGNhbGNfdmFsdWU6IGNvdW50QmxvY2tzLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHRpbnNlcnRCbG9jayggY2hvaWNlLCBjb3VudEJsb2NrcywgY2xpZW50SWQgKTtcblx0XHR9LFxuXHRcdFsgY2xpZW50SWQgXSxcblx0KTtcblx0cmV0dXJuIChcblx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0b25DbGljaz17IGFkZENob2ljZSB9XG5cdFx0XHRpY29uPXsgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuXHRcdFx0XHQ8UGF0aFxuXHRcdFx0XHRcdGQ9XCJNMTguNSA1LjVWOEgyMFY1LjVoMi41VjRIMjBWMS41aC0xLjVWNEgxNnYxLjVoMi41ek0xMiA0SDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0ydi02aC0xLjV2NmEuNS41IDAgMDEtLjUuNUg2YS41LjUgMCAwMS0uNS0uNVY2YS41LjUgMCAwMS41LS41aDZWNHpcIi8+XG5cdFx0XHQ8L1NWRz4gfVxuXHRcdFx0bGFiZWw9eyBfXyggJ0FkZCBuZXcgQ2hvaWNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENob2ljZUJ1dHRvbjsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENob2ljZXNGaWVsZENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCB7XG5cdGN1cnJlbnQ6IGZhbHNlLFxuXHR1cGRhdGVDdXJyZW50OiAoKSA9PiB7fSxcbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hvaWNlc0ZpZWxkQ29udGV4dDsiLCJpbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnLi9wbGFjZWhvbGRlcic7XG5pbXBvcnQgQ2hvaWNlc0ZpZWxkQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IEFkZENob2ljZUJ1dHRvbiBmcm9tICcuL0FkZENob2ljZUJ1dHRvbic7XG5pbXBvcnQgcHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5sZXQge1xuXHQgICAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdCAgICB1c2VCbG9ja1Byb3BzLFxuXHQgICAgdXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0ICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIFRvb2xCYXJGaWVsZHMsXG5cdCAgICAgIEJsb2NrTGFiZWwsXG5cdCAgICAgIEJsb2NrTmFtZSxcblx0ICAgICAgQmxvY2tEZXNjcmlwdGlvbixcblx0ICAgICAgQmxvY2tBZHZhbmNlZFZhbHVlLFxuXHQgICAgICBGaWVsZFdyYXBwZXIsXG5cdCAgICAgIFN0eWxlUGFuZWwsXG5cdCAgICAgIFN0eWxlQ29sb3JJdGVtLFxuXHQgICAgICBTdHlsZUNvbG9ySXRlbXNXcmFwcGVyLFxuXHQgICAgICBTdHlsZUJvcmRlckl0ZW0sXG5cdCAgICAgIFN0eWxlQm9yZGVyUmFkaXVzSXRlbSxcblx0ICAgICAgU3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHMsXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIFBhbmVsQm9keSxcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUpldFN0eWxlLFxuXHQgICAgICB1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUsXG5cdCAgICAgIHVzZVVuaXFLZXksXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFsgJ2pldC1mb3Jtcy9jaG9pY2UnIF07XG5cbmNvbnN0IERlZmF1bHRQbGFjZUhvbGRlciA9ICgpID0+IHtcblx0Y29uc3QgeyBjbGllbnRJZCB9ID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXG5cdGNvbnN0IGlkMSA9IGNsaWVudElkICsgJ3NhbXBsZS1jb250cm9sLTEnO1xuXHRjb25zdCBpZDIgPSBjbGllbnRJZCArICdzYW1wbGUtY29udHJvbC0yJztcblxuXHRyZXR1cm4gPD5cblx0XHQ8bGkgY2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW1cIj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyLWNob2ljZS0taXRlbS1jb250cm9sJyB9PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRpZD17IGlkMSB9XG5cdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0tY29udHJvbC1pbnB1dCcgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj17IGlkMSB9PlxuXHRcdFx0XHRcdHsgX18oICdJdGVtICMxJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbGk+XG5cdFx0PGxpIGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtXCI+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0tY29udHJvbCcgfT5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0aWQ9eyBpZDIgfVxuXHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtLWNvbnRyb2wtaW5wdXQnIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9eyBpZDIgfT5cblx0XHRcdFx0XHR7IF9fKCAnSXRlbSAjMicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2xpPlxuXHQ8Lz47XG59O1xuXG5mdW5jdGlvbiB1c2VDcmVhdGVDdXJyZW50Q2hvaWNlKCB7IGFsbG93X211bHRpcGxlIH0gKSB7XG5cdGNvbnN0IFsgY3VycmVudCwgc2V0Q3VycmVudCBdID0gdXNlU3RhdGUoXG5cdFx0KCkgPT4gYWxsb3dfbXVsdGlwbGUgPyBbXSA6ICcnLFxuXHQpO1xuXG5cdGNvbnN0IHVwZGF0ZUN1cnJlbnQgPSB2YWx1ZSA9PiB7XG5cdFx0aWYgKCAhYWxsb3dfbXVsdGlwbGUgKSB7XG5cdFx0XHRzZXRDdXJyZW50KCBjdXJyZW50ICE9PSB2YWx1ZSA/IHZhbHVlIDogJycgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRlbXBDdXJyZW50ID0gQXJyYXkuaXNBcnJheSggY3VycmVudCApID8gY3VycmVudCA6IFsgY3VycmVudCBdO1xuXG5cdFx0aWYgKCAhdGVtcEN1cnJlbnQuaW5jbHVkZXMoIHZhbHVlICkgKSB7XG5cdFx0XHRzZXRDdXJyZW50KCBbIC4uLnRlbXBDdXJyZW50LCB2YWx1ZSBdICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZXRDdXJyZW50KCB0ZW1wQ3VycmVudC5maWx0ZXIoXG5cdFx0XHRpdGVtID0+IGl0ZW0gIT09IHZhbHVlLFxuXHRcdCkgKTtcblx0fTtcblxuXHRyZXR1cm4geyBjdXJyZW50LCB1cGRhdGVDdXJyZW50IH07XG59XG5cbmNvbnN0IGJhc2VQcm9wcyA9IHtcblx0Y2xhc3NOYW1lOiAnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEFkdmFuY2VkQ2hvaWNlc0ZpZWxkKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIGlzU2VsZWN0ZWQsXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0dXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlKCk7XG5cblx0Y29uc3QgdW5pcUtleSAgICA9IHVzZVVuaXFLZXkoKTtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblx0Y29uc3QgamV0U3R5bGUgICA9IHVzZUpldFN0eWxlKCBiYXNlUHJvcHMgKTtcblxuXHRjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcyggamV0U3R5bGUsIHtcblx0XHRhbGxvd2VkQmxvY2tzOiBBTExPV0VEX0JMT0NLUyxcblx0XHRwbGFjZWhvbGRlcjogaXNTZWxlY3RlZCA/IDxQbGFjZWhvbGRlci8+IDogPERlZmF1bHRQbGFjZUhvbGRlci8+LFxuXHR9ICk7XG5cblx0Y29uc3Qgc3RhdGUgPSB1c2VDcmVhdGVDdXJyZW50Q2hvaWNlKCBhdHRyaWJ1dGVzICk7XG5cblx0aWYgKCBhdHRyaWJ1dGVzLmlzUHJldmlldyApIHtcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17IHtcblx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0fSB9PlxuXHRcdFx0eyBwcmV2aWV3IH1cblx0XHQ8L2Rpdj47XG5cdH1cblxuXHRyZXR1cm4gPENob2ljZXNGaWVsZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyBzdGF0ZSB9PlxuXHRcdDxUb29sQmFyRmllbGRzPlxuXHRcdFx0PEFkZENob2ljZUJ1dHRvbi8+XG5cdFx0PC9Ub29sQmFyRmllbGRzPlxuXHRcdHsgKFxuXHRcdFx0IWF0dHJpYnV0ZXMuYWxsb3dfbXVsdGlwbGVcblx0XHQpICYmIDxTd2l0Y2hQYWdlT25DaGFuZ2VDb250cm9scy8+IH1cblx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdHZW5lcmFsJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfT5cblx0XHRcdFx0PEJsb2NrTGFiZWwvPlxuXHRcdFx0XHQ8QmxvY2tOYW1lLz5cblx0XHRcdFx0PEJsb2NrRGVzY3JpcHRpb24vPlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0FsbG93IG11bHRpcGxlIGNob2ljZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuYWxsb3dfbXVsdGlwbGUgfVxuXHRcdFx0XHRcdGhlbHA9eyBfXyhcblx0XHRcdFx0XHRcdGBFbmFibGUgdGhpcyBvcHRpb24gaWYgeW91IG5lZWQgdG8gYmUgYWJsZSBcbnRvIHNlbGVjdCBtdWx0aXBsZSBvcHRpb25zYCxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17XG5cdFx0XHRcdFx0XHRhbGxvd19tdWx0aXBsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGFsbG93X211bHRpcGxlIH0gKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJsb2NrQWR2YW5jZWRWYWx1ZVxuXHRcdFx0XHRcdGhlbHA9eyBhdHRyaWJ1dGVzLmFsbG93X211bHRpcGxlICYmIF9fKFxuXHRcdFx0XHRcdFx0YFlvdSBzaG91bGQgbGlzdCB0aGUgY2hvaWNlIFxudmFsdWVzIHNlcGFyYXRlZCBieSBjb21tYXMgdGhhdCBzaG91bGQgYmUgc2VsZWN0ZWQgYnkgZGVmYXVsdC4gQnV0IHRoaXMgXG5pcyBub3QgdGhlIGNhc2Ugd2hlbiB5b3UgdXNlIGEgZHluYW1pYyB2YWx1ZSB1c2luZyBhIHByZXNldCwgbWFjcm9zLCBldGMuYCxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0PEluc3BlY3RvckNvbnRyb2xzIGdyb3VwPVwic3R5bGVzXCI+XG5cdFx0XHQ8U3R5bGVQYW5lbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnRGVmYXVsdCBjaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxTdHlsZUNvbG9ySXRlbXNXcmFwcGVyPlxuXHRcdFx0XHRcdDxTdHlsZUNvbG9ySXRlbVxuXHRcdFx0XHRcdFx0Y3NzVmFyPVwiLS1qZmItY2hvaWNlLXRleHRcIlxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1RleHQgQ2hvaWNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFN0eWxlQ29sb3JJdGVtXG5cdFx0XHRcdFx0XHRjc3NWYXI9XCItLWpmYi1jaG9pY2UtYmdcIlxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0JhY2tncm91bmQgQ2hvaWNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvU3R5bGVDb2xvckl0ZW1zV3JhcHBlcj5cblx0XHRcdFx0PFN0eWxlQm9yZGVySXRlbVxuXHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1ib3JkZXJcIlxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdCb3JkZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0ZW5hYmxlQWxwaGFcblx0XHRcdFx0XHRsYWJlbEZvckNvbnRyb2xcblx0XHRcdFx0Lz5cblx0XHRcdFx0PFN0eWxlQm9yZGVyUmFkaXVzSXRlbVxuXHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1ib3JkZXItcmFkaXVzXCJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnUmFkaXVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TdHlsZVBhbmVsPlxuXHRcdFx0PFN0eWxlUGFuZWxcblx0XHRcdFx0bGFiZWw9eyBfXyggJ0hvdmVyIGNob2ljZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdD5cblx0XHRcdFx0PFN0eWxlQ29sb3JJdGVtc1dyYXBwZXI+XG5cdFx0XHRcdFx0PFN0eWxlQ29sb3JJdGVtXG5cdFx0XHRcdFx0XHRjc3NWYXI9XCItLWpmYi1jaG9pY2UtaG92ZXItdGV4dFwiXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVGV4dCBDaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U3R5bGVDb2xvckl0ZW1cblx0XHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1ob3Zlci1iZ1wiXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQmFja2dyb3VuZCBDaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TdHlsZUNvbG9ySXRlbXNXcmFwcGVyPlxuXHRcdFx0XHQ8U3R5bGVCb3JkZXJJdGVtXG5cdFx0XHRcdFx0Y3NzVmFyPVwiLS1qZmItY2hvaWNlLWhvdmVyLWJvcmRlclwiXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0JvcmRlcicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRlbmFibGVBbHBoYVxuXHRcdFx0XHRcdGxhYmVsRm9yQ29udHJvbFxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8U3R5bGVCb3JkZXJSYWRpdXNJdGVtXG5cdFx0XHRcdFx0Y3NzVmFyPVwiLS1qZmItY2hvaWNlLWhvdmVyLWJvcmRlci1yYWRpdXNcIlxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdSYWRpdXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1N0eWxlUGFuZWw+XG5cdFx0XHQ8U3R5bGVQYW5lbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnQ2hlY2tlZCBjaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxTdHlsZUNvbG9ySXRlbXNXcmFwcGVyPlxuXHRcdFx0XHRcdDxTdHlsZUNvbG9ySXRlbVxuXHRcdFx0XHRcdFx0Y3NzVmFyPVwiLS1qZmItY2hvaWNlLWNoZWNrZWQtdGV4dFwiXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVGV4dCBDaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U3R5bGVDb2xvckl0ZW1cblx0XHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1jaGVja2VkLWJnXCJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdCYWNrZ3JvdW5kIENob2ljZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1N0eWxlQ29sb3JJdGVtc1dyYXBwZXI+XG5cdFx0XHRcdDxTdHlsZUJvcmRlckl0ZW1cblx0XHRcdFx0XHRjc3NWYXI9XCItLWpmYi1jaG9pY2UtY2hlY2tlZC1ib3JkZXJcIlxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdCb3JkZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0ZW5hYmxlQWxwaGFcblx0XHRcdFx0XHRsYWJlbEZvckNvbnRyb2xcblx0XHRcdFx0Lz5cblx0XHRcdFx0PFN0eWxlQm9yZGVyUmFkaXVzSXRlbVxuXHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1jaGVja2VkLWJvcmRlci1yYWRpdXNcIlxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdSYWRpdXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1N0eWxlUGFuZWw+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2tXcmFwcGVyJyApIH0+XG5cdFx0XHRcdDx1bFxuXHRcdFx0XHRcdHsgLi4uaW5uZXJCbG9ja3NQcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cblx0XHQ8L2Rpdj5cblx0PC9DaG9pY2VzRmllbGRDb250ZXh0LlByb3ZpZGVyPjtcbn0iLCJpbXBvcnQgRWRpdEFkdmFuY2VkQ2hvaWNlc0ZpZWxkIGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnQGJsb2Nrcy9jaG9pY2VzLWZpZWxkL2Jsb2NrLmpzb24nO1xuaW1wb3J0IHZhcmlhdGlvbnMgZnJvbSAnLi92YXJpYXRpb25zJztcbmltcG9ydCBTYXZlQWR2YW5jZWRDaG9pY2VzRmllbGQgZnJvbSAnLi9zYXZlJztcbmltcG9ydCB0cmFuc2Zvcm1zIGZyb20gJy4vdHJhbnNmb3Jtcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgbmFtZSxcblx0ICAgICAgaWNvbixcbiAgICAgIH0gPSBtZXRhZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG4vLyBjb21wYXRpYmlsaXR5IHdpdGggV29yZFByZXNzIDw9IDYuMlxubWV0YWRhdGEuc3VwcG9ydHMuX19leHBlcmltZW50YWxMYXlvdXQgPSBtZXRhZGF0YS5zdXBwb3J0cy5sYXlvdXQ7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRkZXNjcmlwdGlvbjogX18oXG5cdFx0YFR1cm4gYW55IGJsb2NrLCB0ZXh0LCBpbWFnZXMsIG9yIG90aGVyIG9iamVjdHMgaW50byB0aGUgb2JqZWN0IFxuZm9yIHNlbGVjdGlvbiB3aXRoIHRoaXMgYmxvY2suYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdGVkaXQ6IEVkaXRBZHZhbmNlZENob2ljZXNGaWVsZCxcblx0c2F2ZTogU2F2ZUFkdmFuY2VkQ2hvaWNlc0ZpZWxkLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxuXHRcdH0sXG5cdH0sXG5cdHZhcmlhdGlvbnMsXG5cdHRyYW5zZm9ybXMsXG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3MsXG59O1xuIiwiaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlRGlzcGF0Y2gsXG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIGNyZWF0ZUJsb2Nrc0Zyb21Jbm5lckJsb2Nrc1RlbXBsYXRlLFxuICAgICAgfSA9IHdwLmJsb2NrcztcblxubGV0IHtcblx0ICAgIF9fZXhwZXJpbWVudGFsQmxvY2tWYXJpYXRpb25QaWNrZXIsXG5cdCAgICBCbG9ja1ZhcmlhdGlvblBpY2tlcixcblx0ICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5CbG9ja1ZhcmlhdGlvblBpY2tlciA9IChcblx0QmxvY2tWYXJpYXRpb25QaWNrZXIgfHwgX19leHBlcmltZW50YWxCbG9ja1ZhcmlhdGlvblBpY2tlclxuKTtcblxuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja0F0dHJpYnV0ZXMsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuZnVuY3Rpb24gUGxhY2Vob2xkZXIoKSB7XG5cdGNvbnN0IHsgY2xpZW50SWQgfSAgICAgICAgICAgPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cdGNvbnN0IFsgLCBzZXRBdHRyaWJ1dGVzIF0gICAgPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblx0Y29uc3QgeyByZXBsYWNlSW5uZXJCbG9ja3MgfSA9IHVzZURpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICk7XG5cblx0Y29uc3QgeyB2YXJpYXRpb25zLCBkZWZhdWx0VmFyaWF0aW9uIH0gPSB1c2VTZWxlY3QoXG5cdFx0KCBzZWxlY3QgKSA9PiB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdCAgICAgIGdldEJsb2NrVmFyaWF0aW9ucyxcblx0XHRcdFx0ICAgICAgZ2V0RGVmYXVsdEJsb2NrVmFyaWF0aW9uLFxuXHRcdFx0ICAgICAgfSA9IHNlbGVjdCggJ2NvcmUvYmxvY2tzJyApO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkZWZhdWx0VmFyaWF0aW9uOiBnZXREZWZhdWx0QmxvY2tWYXJpYXRpb24oIG5hbWUgKSxcblx0XHRcdFx0dmFyaWF0aW9uczogZ2V0QmxvY2tWYXJpYXRpb25zKCBuYW1lLCAnYmxvY2snICksXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0W10sXG5cdCk7XG5cblx0cmV0dXJuIDxCbG9ja1ZhcmlhdGlvblBpY2tlclxuXHRcdGFsbG93U2tpcFxuXHRcdGxhYmVsPXsgX18oICdTZWxlY3QgY2hvaWNlcyBsYXlvdXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0aW5zdHJ1Y3Rpb25zPXsgX18oXG5cdFx0XHQnWW91IGNhbiBzZWxlY3Qgb25lIG9mIHByZWRlZmluZWQgbGF5b3V0LCBvciBza2lwIHRoaXMgc3RlcCBhbmQgYnVpbGQgY3VzdG9tIGZyb20gc2NyYXRjaCcsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSB9XG5cdFx0dmFyaWF0aW9ucz17IHZhcmlhdGlvbnMgfVxuXHRcdG9uU2VsZWN0PXsgKCBuZXh0VmFyaWF0aW9uID0gZGVmYXVsdFZhcmlhdGlvbiApID0+IHtcblx0XHRcdGlmICggbmV4dFZhcmlhdGlvbi5hdHRyaWJ1dGVzICkge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCBuZXh0VmFyaWF0aW9uLmF0dHJpYnV0ZXMgKTtcblx0XHRcdH1cblx0XHRcdGlmICggbmV4dFZhcmlhdGlvbi5pbm5lckJsb2NrcyApIHtcblx0XHRcdFx0cmVwbGFjZUlubmVyQmxvY2tzKFxuXHRcdFx0XHRcdGNsaWVudElkLFxuXHRcdFx0XHRcdGNyZWF0ZUJsb2Nrc0Zyb21Jbm5lckJsb2Nrc1RlbXBsYXRlKFxuXHRcdFx0XHRcdFx0bmV4dFZhcmlhdGlvbi5pbm5lckJsb2Nrcyxcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHRydWUsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSB9XG5cdC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFjZWhvbGRlcjsiLCJjb25zdCBwcmV2aWV3ID0gKFxuXHQ8c3ZnIHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgdmlld0JveD1cIjAgMCAyOTggMTQ0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PHJlY3Qgd2lkdGg9XCIyOThcIiBoZWlnaHQ9XCIxNDRcIiByeD1cIjRcIiBmaWxsPVwiI0UyRThGMFwiLz5cblx0XHQ8cmVjdCB4PVwiMTJcIiB5PVwiMTJcIiB3aWR0aD1cIjg2XCIgaGVpZ2h0PVwiMTIwXCIgcng9XCI4XCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdDxyZWN0IHg9XCIyMFwiIHk9XCI0NFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI2MFwiIHJ4PVwiNFwiIGZpbGw9XCIjRjFGNUY5XCIvPlxuXHRcdDxwYXRoIGQ9XCJNNjcgODZWNjJINDNWODZINjdaTTUwLjMzMzMgNzZMNTMuNjY2NyA4MC4wMTMzTDU4LjMzMzMgNzRMNjQuMzMzMyA4Mkg0NS42NjY3TDUwLjMzMzMgNzZaXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHJlY3QgeD1cIjIwXCIgeT1cIjExMFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHJlY3QgeD1cIjIwXCIgeT1cIjExNlwiIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHBhdGggZD1cIk00Ny41NTg2IDI3LjQ2NDhWMjguMDAzOUM0Ny41NTg2IDI4LjY0NDUgNDcuNDc4NSAyOS4yMTg4IDQ3LjMxODQgMjkuNzI2NkM0Ny4xNTgyIDMwLjIzNDQgNDYuOTI3NyAzMC42NjYgNDYuNjI3IDMxLjAyMTVDNDYuMzI2MiAzMS4zNzcgNDUuOTY0OCAzMS42NDg0IDQ1LjU0MyAzMS44MzU5QzQ1LjEyNSAzMi4wMjM0IDQ0LjY1NjIgMzIuMTE3MiA0NC4xMzY3IDMyLjExNzJDNDMuNjMyOCAzMi4xMTcyIDQzLjE2OTkgMzIuMDIzNCA0Mi43NDggMzEuODM1OUM0Mi4zMzAxIDMxLjY0ODQgNDEuOTY2OCAzMS4zNzcgNDEuNjU4MiAzMS4wMjE1QzQxLjM1MzUgMzAuNjY2IDQxLjExNzIgMzAuMjM0NCA0MC45NDkyIDI5LjcyNjZDNDAuNzgxMiAyOS4yMTg4IDQwLjY5NzMgMjguNjQ0NSA0MC42OTczIDI4LjAwMzlWMjcuNDY0OEM0MC42OTczIDI2LjgyNDIgNDAuNzc5MyAyNi4yNTIgNDAuOTQzNCAyNS43NDhDNDEuMTExMyAyNS4yNDAyIDQxLjM0NzcgMjQuODA4NiA0MS42NTIzIDI0LjQ1MzFDNDEuOTU3IDI0LjA5MzggNDIuMzE4NCAyMy44MjAzIDQyLjczNjMgMjMuNjMyOEM0My4xNTgyIDIzLjQ0NTMgNDMuNjIxMSAyMy4zNTE2IDQ0LjEyNSAyMy4zNTE2QzQ0LjY0NDUgMjMuMzUxNiA0NS4xMTMzIDIzLjQ0NTMgNDUuNTMxMiAyMy42MzI4QzQ1Ljk1MzEgMjMuODIwMyA0Ni4zMTQ1IDI0LjA5MzggNDYuNjE1MiAyNC40NTMxQzQ2LjkxOTkgMjQuODA4NiA0Ny4xNTIzIDI1LjI0MDIgNDcuMzEyNSAyNS43NDhDNDcuNDc2NiAyNi4yNTIgNDcuNTU4NiAyNi44MjQyIDQ3LjU1ODYgMjcuNDY0OFpNNDYuNDM5NSAyOC4wMDM5VjI3LjQ1MzFDNDYuNDM5NSAyNi45NDUzIDQ2LjM4NjcgMjYuNDk2MSA0Ni4yODEyIDI2LjEwNTVDNDYuMTc5NyAyNS43MTQ4IDQ2LjAyOTMgMjUuMzg2NyA0NS44MzAxIDI1LjEyMTFDNDUuNjMwOSAyNC44NTU1IDQ1LjM4NjcgMjQuNjU0MyA0NS4wOTc3IDI0LjUxNzZDNDQuODEyNSAyNC4zODA5IDQ0LjQ4ODMgMjQuMzEyNSA0NC4xMjUgMjQuMzEyNUM0My43NzM0IDI0LjMxMjUgNDMuNDU1MSAyNC4zODA5IDQzLjE2OTkgMjQuNTE3NkM0Mi44ODg3IDI0LjY1NDMgNDIuNjQ2NSAyNC44NTU1IDQyLjQ0MzQgMjUuMTIxMUM0Mi4yNDQxIDI1LjM4NjcgNDIuMDg5OCAyNS43MTQ4IDQxLjk4MDUgMjYuMTA1NUM0MS44NzExIDI2LjQ5NjEgNDEuODE2NCAyNi45NDUzIDQxLjgxNjQgMjcuNDUzMVYyOC4wMDM5QzQxLjgxNjQgMjguNTE1NiA0MS44NzExIDI4Ljk2ODggNDEuOTgwNSAyOS4zNjMzQzQyLjA4OTggMjkuNzUzOSA0Mi4yNDYxIDMwLjA4NCA0Mi40NDkyIDMwLjM1MzVDNDIuNjU2MiAzMC42MTkxIDQyLjkwMDQgMzAuODIwMyA0My4xODE2IDMwLjk1N0M0My40NjY4IDMxLjA5MzggNDMuNzg1MiAzMS4xNjIxIDQ0LjEzNjcgMzEuMTYyMUM0NC41MDM5IDMxLjE2MjEgNDQuODMwMSAzMS4wOTM4IDQ1LjExNTIgMzAuOTU3QzQ1LjQwMDQgMzAuODIwMyA0NS42NDA2IDMwLjYxOTEgNDUuODM1OSAzMC4zNTM1QzQ2LjAzNTIgMzAuMDg0IDQ2LjE4NTUgMjkuNzUzOSA0Ni4yODcxIDI5LjM2MzNDNDYuMzg4NyAyOC45Njg4IDQ2LjQzOTUgMjguNTE1NiA0Ni40Mzk1IDI4LjAwMzlaTTUwLjE3MTkgMjYuODc4OVYzNC40Mzc1SDQ5LjA4MlYyNS42NjAySDUwLjA3ODFMNTAuMTcxOSAyNi44Nzg5Wk01NC40NDM0IDI4Ljc3NzNWMjguOTAwNEM1NC40NDM0IDI5LjM2MTMgNTQuMzg4NyAyOS43ODkxIDU0LjI3OTMgMzAuMTgzNkM1NC4xNjk5IDMwLjU3NDIgNTQuMDA5OCAzMC45MTQxIDUzLjc5ODggMzEuMjAzMUM1My41OTE4IDMxLjQ5MjIgNTMuMzM1OSAzMS43MTY4IDUzLjAzMTIgMzEuODc3QzUyLjcyNjYgMzIuMDM3MSA1Mi4zNzcgMzIuMTE3MiA1MS45ODI0IDMyLjExNzJDNTEuNTgwMSAzMi4xMTcyIDUxLjIyNDYgMzIuMDUwOCA1MC45MTYgMzEuOTE4QzUwLjYwNzQgMzEuNzg1MiA1MC4zNDU3IDMxLjU5MTggNTAuMTMwOSAzMS4zMzc5QzQ5LjkxNiAzMS4wODQgNDkuNzQ0MSAzMC43NzkzIDQ5LjYxNTIgMzAuNDIzOEM0OS40OTAyIDMwLjA2ODQgNDkuNDA0MyAyOS42NjggNDkuMzU3NCAyOS4yMjI3VjI4LjU2NjRDNDkuNDA0MyAyOC4wOTc3IDQ5LjQ5MjIgMjcuNjc3NyA0OS42MjExIDI3LjMwNjZDNDkuNzUgMjYuOTM1NSA0OS45MTk5IDI2LjYxOTEgNTAuMTMwOSAyNi4zNTc0QzUwLjM0NTcgMjYuMDkxOCA1MC42MDU1IDI1Ljg5MDYgNTAuOTEwMiAyNS43NTM5QzUxLjIxNDggMjUuNjEzMyA1MS41NjY0IDI1LjU0MyA1MS45NjQ4IDI1LjU0M0M1Mi4zNjMzIDI1LjU0MyA1Mi43MTY4IDI1LjYyMTEgNTMuMDI1NCAyNS43NzczQzUzLjMzNCAyNS45Mjk3IDUzLjU5MzggMjYuMTQ4NCA1My44MDQ3IDI2LjQzMzZDNTQuMDE1NiAyNi43MTg4IDU0LjE3MzggMjcuMDYwNSA1NC4yNzkzIDI3LjQ1OUM1NC4zODg3IDI3Ljg1MzUgNTQuNDQzNCAyOC4yOTMgNTQuNDQzNCAyOC43NzczWk01My4zNTM1IDI4LjkwMDRWMjguNzc3M0M1My4zNTM1IDI4LjQ2MDkgNTMuMzIwMyAyOC4xNjQxIDUzLjI1MzkgMjcuODg2N0M1My4xODc1IDI3LjYwNTUgNTMuMDg0IDI3LjM1OTQgNTIuOTQzNCAyNy4xNDg0QzUyLjgwNjYgMjYuOTMzNiA1Mi42MzA5IDI2Ljc2NTYgNTIuNDE2IDI2LjY0NDVDNTIuMjAxMiAyNi41MTk1IDUxLjk0NTMgMjYuNDU3IDUxLjY0ODQgMjYuNDU3QzUxLjM3NSAyNi40NTcgNTEuMTM2NyAyNi41MDM5IDUwLjkzMzYgMjYuNTk3N0M1MC43MzQ0IDI2LjY5MTQgNTAuNTY0NSAyNi44MTg0IDUwLjQyMzggMjYuOTc4NUM1MC4yODMyIDI3LjEzNDggNTAuMTY4IDI3LjMxNDUgNTAuMDc4MSAyNy41MTc2QzQ5Ljk5MjIgMjcuNzE2OCA0OS45Mjc3IDI3LjkyMzggNDkuODg0OCAyOC4xMzg3VjI5LjY1NjJDNDkuOTYyOSAyOS45Mjk3IDUwLjA3MjMgMzAuMTg3NSA1MC4yMTI5IDMwLjQyOTdDNTAuMzUzNSAzMC42NjggNTAuNTQxIDMwLjg2MTMgNTAuNzc1NCAzMS4wMDk4QzUxLjAwOTggMzEuMTU0MyA1MS4zMDQ3IDMxLjIyNjYgNTEuNjYwMiAzMS4yMjY2QzUxLjk1MzEgMzEuMjI2NiA1Mi4yMDUxIDMxLjE2NiA1Mi40MTYgMzEuMDQ0OUM1Mi42MzA5IDMwLjkxOTkgNTIuODA2NiAzMC43NSA1Mi45NDM0IDMwLjUzNTJDNTMuMDg0IDMwLjMyMDMgNTMuMTg3NSAzMC4wNzQyIDUzLjI1MzkgMjkuNzk2OUM1My4zMjAzIDI5LjUxNTYgNTMuMzUzNSAyOS4yMTY4IDUzLjM1MzUgMjguOTAwNFpNNTguNDgwNSAyNS42NjAyVjI2LjQ5MjJINTUuMDUyN1YyNS42NjAySDU4LjQ4MDVaTTU2LjIxMjkgMjQuMTE5MUg1Ny4yOTY5VjMwLjQyOTdDNTcuMjk2OSAzMC42NDQ1IDU3LjMzMDEgMzAuODA2NiA1Ny4zOTY1IDMwLjkxNkM1Ny40NjI5IDMxLjAyNTQgNTcuNTQ4OCAzMS4wOTc3IDU3LjY1NDMgMzEuMTMyOEM1Ny43NTk4IDMxLjE2OCA1Ny44NzMgMzEuMTg1NSA1Ny45OTQxIDMxLjE4NTVDNTguMDg0IDMxLjE4NTUgNTguMTc3NyAzMS4xNzc3IDU4LjI3NTQgMzEuMTYyMUM1OC4zNzcgMzEuMTQyNiA1OC40NTMxIDMxLjEyNyA1OC41MDM5IDMxLjExNTJMNTguNTA5OCAzMkM1OC40MjM4IDMyLjAyNzMgNTguMzEwNSAzMi4wNTI3IDU4LjE2OTkgMzIuMDc2MkM1OC4wMzMyIDMyLjEwMzUgNTcuODY3MiAzMi4xMTcyIDU3LjY3MTkgMzIuMTE3MkM1Ny40MDYyIDMyLjExNzIgNTcuMTYyMSAzMi4wNjQ1IDU2LjkzOTUgMzEuOTU5QzU2LjcxNjggMzEuODUzNSA1Ni41MzkxIDMxLjY3NzcgNTYuNDA2MiAzMS40MzE2QzU2LjI3NzMgMzEuMTgxNiA1Ni4yMTI5IDMwLjg0NTcgNTYuMjEyOSAzMC40MjM4VjI0LjExOTFaTTYwLjkyOTcgMjUuNjYwMlYzMkg1OS44Mzk4VjI1LjY2MDJINjAuOTI5N1pNNTkuNzU3OCAyMy45Nzg1QzU5Ljc1NzggMjMuODAyNyA1OS44MTA1IDIzLjY1NDMgNTkuOTE2IDIzLjUzMzJDNjAuMDI1NCAyMy40MTIxIDYwLjE4NTUgMjMuMzUxNiA2MC4zOTY1IDIzLjM1MTZDNjAuNjAzNSAyMy4zNTE2IDYwLjc2MTcgMjMuNDEyMSA2MC44NzExIDIzLjUzMzJDNjAuOTg0NCAyMy42NTQzIDYxLjA0MSAyMy44MDI3IDYxLjA0MSAyMy45Nzg1QzYxLjA0MSAyNC4xNDY1IDYwLjk4NDQgMjQuMjkxIDYwLjg3MTEgMjQuNDEyMUM2MC43NjE3IDI0LjUyOTMgNjAuNjAzNSAyNC41ODc5IDYwLjM5NjUgMjQuNTg3OUM2MC4xODU1IDI0LjU4NzkgNjAuMDI1NCAyNC41MjkzIDU5LjkxNiAyNC40MTIxQzU5LjgxMDUgMjQuMjkxIDU5Ljc1NzggMjQuMTQ2NSA1OS43NTc4IDIzLjk3ODVaTTYyLjM4MjggMjguOTAwNFYyOC43NjU2QzYyLjM4MjggMjguMzA4NiA2Mi40NDkyIDI3Ljg4NDggNjIuNTgyIDI3LjQ5NDFDNjIuNzE0OCAyNy4wOTk2IDYyLjkwNjIgMjYuNzU3OCA2My4xNTYyIDI2LjQ2ODhDNjMuNDA2MiAyNi4xNzU4IDYzLjcwOSAyNS45NDkyIDY0LjA2NDUgMjUuNzg5MUM2NC40MTk5IDI1LjYyNSA2NC44MTg0IDI1LjU0MyA2NS4yNTk4IDI1LjU0M0M2NS43MDUxIDI1LjU0MyA2Ni4xMDU1IDI1LjYyNSA2Ni40NjA5IDI1Ljc4OTFDNjYuODIwMyAyNS45NDkyIDY3LjEyNSAyNi4xNzU4IDY3LjM3NSAyNi40Njg4QzY3LjYyODkgMjYuNzU3OCA2Ny44MjIzIDI3LjA5OTYgNjcuOTU1MSAyNy40OTQxQzY4LjA4NzkgMjcuODg0OCA2OC4xNTQzIDI4LjMwODYgNjguMTU0MyAyOC43NjU2VjI4LjkwMDRDNjguMTU0MyAyOS4zNTc0IDY4LjA4NzkgMjkuNzgxMiA2Ny45NTUxIDMwLjE3MTlDNjcuODIyMyAzMC41NjI1IDY3LjYyODkgMzAuOTA0MyA2Ny4zNzUgMzEuMTk3M0M2Ny4xMjUgMzEuNDg2MyA2Ni44MjIzIDMxLjcxMjkgNjYuNDY2OCAzMS44NzdDNjYuMTE1MiAzMi4wMzcxIDY1LjcxNjggMzIuMTE3MiA2NS4yNzE1IDMyLjExNzJDNjQuODI2MiAzMi4xMTcyIDY0LjQyNTggMzIuMDM3MSA2NC4wNzAzIDMxLjg3N0M2My43MTQ4IDMxLjcxMjkgNjMuNDEwMiAzMS40ODYzIDYzLjE1NjIgMzEuMTk3M0M2Mi45MDYyIDMwLjkwNDMgNjIuNzE0OCAzMC41NjI1IDYyLjU4MiAzMC4xNzE5QzYyLjQ0OTIgMjkuNzgxMiA2Mi4zODI4IDI5LjM1NzQgNjIuMzgyOCAyOC45MDA0Wk02My40NjY4IDI4Ljc2NTZWMjguOTAwNEM2My40NjY4IDI5LjIxNjggNjMuNTAzOSAyOS41MTU2IDYzLjU3ODEgMjkuNzk2OUM2My42NTIzIDMwLjA3NDIgNjMuNzYzNyAzMC4zMjAzIDYzLjkxMjEgMzAuNTM1MkM2NC4wNjQ1IDMwLjc1IDY0LjI1MzkgMzAuOTE5OSA2NC40ODA1IDMxLjA0NDlDNjQuNzA3IDMxLjE2NiA2NC45NzA3IDMxLjIyNjYgNjUuMjcxNSAzMS4yMjY2QzY1LjU2ODQgMzEuMjI2NiA2NS44MjgxIDMxLjE2NiA2Ni4wNTA4IDMxLjA0NDlDNjYuMjc3MyAzMC45MTk5IDY2LjQ2NDggMzAuNzUgNjYuNjEzMyAzMC41MzUyQzY2Ljc2MTcgMzAuMzIwMyA2Ni44NzMgMzAuMDc0MiA2Ni45NDczIDI5Ljc5NjlDNjcuMDI1NCAyOS41MTU2IDY3LjA2NDUgMjkuMjE2OCA2Ny4wNjQ1IDI4LjkwMDRWMjguNzY1NkM2Ny4wNjQ1IDI4LjQ1MzEgNjcuMDI1NCAyOC4xNTgyIDY2Ljk0NzMgMjcuODgwOUM2Ni44NzMgMjcuNTk5NiA2Ni43NTk4IDI3LjM1MTYgNjYuNjA3NCAyNy4xMzY3QzY2LjQ1OSAyNi45MTggNjYuMjcxNSAyNi43NDYxIDY2LjA0NDkgMjYuNjIxMUM2NS44MjIzIDI2LjQ5NjEgNjUuNTYwNSAyNi40MzM2IDY1LjI1OTggMjYuNDMzNkM2NC45NjI5IDI2LjQzMzYgNjQuNzAxMiAyNi40OTYxIDY0LjQ3NDYgMjYuNjIxMUM2NC4yNTIgMjYuNzQ2MSA2NC4wNjQ1IDI2LjkxOCA2My45MTIxIDI3LjEzNjdDNjMuNzYzNyAyNy4zNTE2IDYzLjY1MjMgMjcuNTk5NiA2My41NzgxIDI3Ljg4MDlDNjMuNTAzOSAyOC4xNTgyIDYzLjQ2NjggMjguNDUzMSA2My40NjY4IDI4Ljc2NTZaTTcwLjU5NzcgMjcuMDEzN1YzMkg2OS41MTM3VjI1LjY2MDJINzAuNTM5MUw3MC41OTc3IDI3LjAxMzdaTTcwLjMzOTggMjguNTg5OEw2OS44ODg3IDI4LjU3MjNDNjkuODkyNiAyOC4xMzg3IDY5Ljk1NyAyNy43MzgzIDcwLjA4MiAyNy4zNzExQzcwLjIwNyAyNyA3MC4zODI4IDI2LjY3NzcgNzAuNjA5NCAyNi40MDQzQzcwLjgzNTkgMjYuMTMwOSA3MS4xMDU1IDI1LjkxOTkgNzEuNDE4IDI1Ljc3MTVDNzEuNzM0NCAyNS42MTkxIDcyLjA4NCAyNS41NDMgNzIuNDY2OCAyNS41NDNDNzIuNzc5MyAyNS41NDMgNzMuMDYwNSAyNS41ODU5IDczLjMxMDUgMjUuNjcxOUM3My41NjA1IDI1Ljc1MzkgNzMuNzczNCAyNS44ODY3IDczLjk0OTIgMjYuMDcwM0M3NC4xMjg5IDI2LjI1MzkgNzQuMjY1NiAyNi40OTIyIDc0LjM1OTQgMjYuNzg1MkM3NC40NTMxIDI3LjA3NDIgNzQuNSAyNy40Mjc3IDc0LjUgMjcuODQ1N1YzMkg3My40MTAyVjI3LjgzNEM3My40MTAyIDI3LjUwMiA3My4zNjEzIDI3LjIzNjMgNzMuMjYzNyAyNy4wMzcxQzczLjE2NiAyNi44MzQgNzMuMDIzNCAyNi42ODc1IDcyLjgzNTkgMjYuNTk3N0M3Mi42NDg0IDI2LjUwMzkgNzIuNDE4IDI2LjQ1NyA3Mi4xNDQ1IDI2LjQ1N0M3MS44NzUgMjYuNDU3IDcxLjYyODkgMjYuNTEzNyA3MS40MDYyIDI2LjYyN0M3MS4xODc1IDI2Ljc0MDIgNzAuOTk4IDI2Ljg5NjUgNzAuODM3OSAyNy4wOTU3QzcwLjY4MTYgMjcuMjk0OSA3MC41NTg2IDI3LjUyMzQgNzAuNDY4OCAyNy43ODEyQzcwLjM4MjggMjguMDM1MiA3MC4zMzk4IDI4LjMwNDcgNzAuMzM5OCAyOC41ODk4Wk04Mi41Njg0IDIzLjQyMTlWMzJIODEuNDg0NFYyNC43NzU0TDc5LjI5ODggMjUuNTcyM1YyNC41OTM4TDgyLjM5ODQgMjMuNDIxOUg4Mi41Njg0WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDxwYXRoIGQ9XCJNMzIuNjY2NyAyMy4zMzMzVjMyLjY2NjdIMjMuMzMzM1YyMy4zMzMzSDMyLjY2NjdaTTMyLjY2NjcgMjJIMjMuMzMzM0MyMi42IDIyIDIyIDIyLjYgMjIgMjMuMzMzM1YzMi42NjY3QzIyIDMzLjQgMjIuNiAzNCAyMy4zMzMzIDM0SDMyLjY2NjdDMzMuNCAzNCAzNCAzMy40IDM0IDMyLjY2NjdWMjMuMzMzM0MzNCAyMi42IDMzLjQgMjIgMzIuNjY2NyAyMlpcIiBmaWxsPVwiIzY0NzQ4QlwiLz5cblx0XHQ8cmVjdCB4PVwiMTA3XCIgeT1cIjEzXCIgd2lkdGg9XCI4NFwiIGhlaWdodD1cIjExOFwiIHJ4PVwiN1wiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiM0MjcyRjlcIiBzdHJva2VXaWR0aD1cIjJcIi8+XG5cdFx0PHJlY3QgeD1cIjExNFwiIHk9XCI0NFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI2MFwiIHJ4PVwiNFwiIGZpbGw9XCIjRjFGNUY5XCIvPlxuXHRcdDxwYXRoIGQ9XCJNMTYxIDg2VjYySDEzN1Y4NkgxNjFaTTE0NC4zMzMgNzZMMTQ3LjY2NyA4MC4wMTMzTDE1Mi4zMzMgNzRMMTU4LjMzMyA4MkgxMzkuNjY3TDE0NC4zMzMgNzZaXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHBhdGggZD1cIk0xNDEuNTU5IDI3LjQ2NDhWMjguMDAzOUMxNDEuNTU5IDI4LjY0NDUgMTQxLjQ3OSAyOS4yMTg4IDE0MS4zMTggMjkuNzI2NkMxNDEuMTU4IDMwLjIzNDQgMTQwLjkyOCAzMC42NjYgMTQwLjYyNyAzMS4wMjE1QzE0MC4zMjYgMzEuMzc3IDEzOS45NjUgMzEuNjQ4NCAxMzkuNTQzIDMxLjgzNTlDMTM5LjEyNSAzMi4wMjM0IDEzOC42NTYgMzIuMTE3MiAxMzguMTM3IDMyLjExNzJDMTM3LjYzMyAzMi4xMTcyIDEzNy4xNyAzMi4wMjM0IDEzNi43NDggMzEuODM1OUMxMzYuMzMgMzEuNjQ4NCAxMzUuOTY3IDMxLjM3NyAxMzUuNjU4IDMxLjAyMTVDMTM1LjM1NCAzMC42NjYgMTM1LjExNyAzMC4yMzQ0IDEzNC45NDkgMjkuNzI2NkMxMzQuNzgxIDI5LjIxODggMTM0LjY5NyAyOC42NDQ1IDEzNC42OTcgMjguMDAzOVYyNy40NjQ4QzEzNC42OTcgMjYuODI0MiAxMzQuNzc5IDI2LjI1MiAxMzQuOTQzIDI1Ljc0OEMxMzUuMTExIDI1LjI0MDIgMTM1LjM0OCAyNC44MDg2IDEzNS42NTIgMjQuNDUzMUMxMzUuOTU3IDI0LjA5MzggMTM2LjMxOCAyMy44MjAzIDEzNi43MzYgMjMuNjMyOEMxMzcuMTU4IDIzLjQ0NTMgMTM3LjYyMSAyMy4zNTE2IDEzOC4xMjUgMjMuMzUxNkMxMzguNjQ1IDIzLjM1MTYgMTM5LjExMyAyMy40NDUzIDEzOS41MzEgMjMuNjMyOEMxMzkuOTUzIDIzLjgyMDMgMTQwLjMxNCAyNC4wOTM4IDE0MC42MTUgMjQuNDUzMUMxNDAuOTIgMjQuODA4NiAxNDEuMTUyIDI1LjI0MDIgMTQxLjMxMiAyNS43NDhDMTQxLjQ3NyAyNi4yNTIgMTQxLjU1OSAyNi44MjQyIDE0MS41NTkgMjcuNDY0OFpNMTQwLjQzOSAyOC4wMDM5VjI3LjQ1MzFDMTQwLjQzOSAyNi45NDUzIDE0MC4zODcgMjYuNDk2MSAxNDAuMjgxIDI2LjEwNTVDMTQwLjE4IDI1LjcxNDggMTQwLjAyOSAyNS4zODY3IDEzOS44MyAyNS4xMjExQzEzOS42MzEgMjQuODU1NSAxMzkuMzg3IDI0LjY1NDMgMTM5LjA5OCAyNC41MTc2QzEzOC44MTIgMjQuMzgwOSAxMzguNDg4IDI0LjMxMjUgMTM4LjEyNSAyNC4zMTI1QzEzNy43NzMgMjQuMzEyNSAxMzcuNDU1IDI0LjM4MDkgMTM3LjE3IDI0LjUxNzZDMTM2Ljg4OSAyNC42NTQzIDEzNi42NDYgMjQuODU1NSAxMzYuNDQzIDI1LjEyMTFDMTM2LjI0NCAyNS4zODY3IDEzNi4wOSAyNS43MTQ4IDEzNS45OCAyNi4xMDU1QzEzNS44NzEgMjYuNDk2MSAxMzUuODE2IDI2Ljk0NTMgMTM1LjgxNiAyNy40NTMxVjI4LjAwMzlDMTM1LjgxNiAyOC41MTU2IDEzNS44NzEgMjguOTY4OCAxMzUuOTggMjkuMzYzM0MxMzYuMDkgMjkuNzUzOSAxMzYuMjQ2IDMwLjA4NCAxMzYuNDQ5IDMwLjM1MzVDMTM2LjY1NiAzMC42MTkxIDEzNi45IDMwLjgyMDMgMTM3LjE4MiAzMC45NTdDMTM3LjQ2NyAzMS4wOTM4IDEzNy43ODUgMzEuMTYyMSAxMzguMTM3IDMxLjE2MjFDMTM4LjUwNCAzMS4xNjIxIDEzOC44MyAzMS4wOTM4IDEzOS4xMTUgMzAuOTU3QzEzOS40IDMwLjgyMDMgMTM5LjY0MSAzMC42MTkxIDEzOS44MzYgMzAuMzUzNUMxNDAuMDM1IDMwLjA4NCAxNDAuMTg2IDI5Ljc1MzkgMTQwLjI4NyAyOS4zNjMzQzE0MC4zODkgMjguOTY4OCAxNDAuNDM5IDI4LjUxNTYgMTQwLjQzOSAyOC4wMDM5Wk0xNDQuMTcyIDI2Ljg3ODlWMzQuNDM3NUgxNDMuMDgyVjI1LjY2MDJIMTQ0LjA3OEwxNDQuMTcyIDI2Ljg3ODlaTTE0OC40NDMgMjguNzc3M1YyOC45MDA0QzE0OC40NDMgMjkuMzYxMyAxNDguMzg5IDI5Ljc4OTEgMTQ4LjI3OSAzMC4xODM2QzE0OC4xNyAzMC41NzQyIDE0OC4wMSAzMC45MTQxIDE0Ny43OTkgMzEuMjAzMUMxNDcuNTkyIDMxLjQ5MjIgMTQ3LjMzNiAzMS43MTY4IDE0Ny4wMzEgMzEuODc3QzE0Ni43MjcgMzIuMDM3MSAxNDYuMzc3IDMyLjExNzIgMTQ1Ljk4MiAzMi4xMTcyQzE0NS41OCAzMi4xMTcyIDE0NS4yMjUgMzIuMDUwOCAxNDQuOTE2IDMxLjkxOEMxNDQuNjA3IDMxLjc4NTIgMTQ0LjM0NiAzMS41OTE4IDE0NC4xMzEgMzEuMzM3OUMxNDMuOTE2IDMxLjA4NCAxNDMuNzQ0IDMwLjc3OTMgMTQzLjYxNSAzMC40MjM4QzE0My40OSAzMC4wNjg0IDE0My40MDQgMjkuNjY4IDE0My4zNTcgMjkuMjIyN1YyOC41NjY0QzE0My40MDQgMjguMDk3NyAxNDMuNDkyIDI3LjY3NzcgMTQzLjYyMSAyNy4zMDY2QzE0My43NSAyNi45MzU1IDE0My45MiAyNi42MTkxIDE0NC4xMzEgMjYuMzU3NEMxNDQuMzQ2IDI2LjA5MTggMTQ0LjYwNSAyNS44OTA2IDE0NC45MSAyNS43NTM5QzE0NS4yMTUgMjUuNjEzMyAxNDUuNTY2IDI1LjU0MyAxNDUuOTY1IDI1LjU0M0MxNDYuMzYzIDI1LjU0MyAxNDYuNzE3IDI1LjYyMTEgMTQ3LjAyNSAyNS43NzczQzE0Ny4zMzQgMjUuOTI5NyAxNDcuNTk0IDI2LjE0ODQgMTQ3LjgwNSAyNi40MzM2QzE0OC4wMTYgMjYuNzE4OCAxNDguMTc0IDI3LjA2MDUgMTQ4LjI3OSAyNy40NTlDMTQ4LjM4OSAyNy44NTM1IDE0OC40NDMgMjguMjkzIDE0OC40NDMgMjguNzc3M1pNMTQ3LjM1NCAyOC45MDA0VjI4Ljc3NzNDMTQ3LjM1NCAyOC40NjA5IDE0Ny4zMiAyOC4xNjQxIDE0Ny4yNTQgMjcuODg2N0MxNDcuMTg4IDI3LjYwNTUgMTQ3LjA4NCAyNy4zNTk0IDE0Ni45NDMgMjcuMTQ4NEMxNDYuODA3IDI2LjkzMzYgMTQ2LjYzMSAyNi43NjU2IDE0Ni40MTYgMjYuNjQ0NUMxNDYuMjAxIDI2LjUxOTUgMTQ1Ljk0NSAyNi40NTcgMTQ1LjY0OCAyNi40NTdDMTQ1LjM3NSAyNi40NTcgMTQ1LjEzNyAyNi41MDM5IDE0NC45MzQgMjYuNTk3N0MxNDQuNzM0IDI2LjY5MTQgMTQ0LjU2NCAyNi44MTg0IDE0NC40MjQgMjYuOTc4NUMxNDQuMjgzIDI3LjEzNDggMTQ0LjE2OCAyNy4zMTQ1IDE0NC4wNzggMjcuNTE3NkMxNDMuOTkyIDI3LjcxNjggMTQzLjkyOCAyNy45MjM4IDE0My44ODUgMjguMTM4N1YyOS42NTYyQzE0My45NjMgMjkuOTI5NyAxNDQuMDcyIDMwLjE4NzUgMTQ0LjIxMyAzMC40Mjk3QzE0NC4zNTQgMzAuNjY4IDE0NC41NDEgMzAuODYxMyAxNDQuNzc1IDMxLjAwOThDMTQ1LjAxIDMxLjE1NDMgMTQ1LjMwNSAzMS4yMjY2IDE0NS42NiAzMS4yMjY2QzE0NS45NTMgMzEuMjI2NiAxNDYuMjA1IDMxLjE2NiAxNDYuNDE2IDMxLjA0NDlDMTQ2LjYzMSAzMC45MTk5IDE0Ni44MDcgMzAuNzUgMTQ2Ljk0MyAzMC41MzUyQzE0Ny4wODQgMzAuMzIwMyAxNDcuMTg4IDMwLjA3NDIgMTQ3LjI1NCAyOS43OTY5QzE0Ny4zMiAyOS41MTU2IDE0Ny4zNTQgMjkuMjE2OCAxNDcuMzU0IDI4LjkwMDRaTTE1Mi40OCAyNS42NjAyVjI2LjQ5MjJIMTQ5LjA1M1YyNS42NjAySDE1Mi40OFpNMTUwLjIxMyAyNC4xMTkxSDE1MS4yOTdWMzAuNDI5N0MxNTEuMjk3IDMwLjY0NDUgMTUxLjMzIDMwLjgwNjYgMTUxLjM5NiAzMC45MTZDMTUxLjQ2MyAzMS4wMjU0IDE1MS41NDkgMzEuMDk3NyAxNTEuNjU0IDMxLjEzMjhDMTUxLjc2IDMxLjE2OCAxNTEuODczIDMxLjE4NTUgMTUxLjk5NCAzMS4xODU1QzE1Mi4wODQgMzEuMTg1NSAxNTIuMTc4IDMxLjE3NzcgMTUyLjI3NSAzMS4xNjIxQzE1Mi4zNzcgMzEuMTQyNiAxNTIuNDUzIDMxLjEyNyAxNTIuNTA0IDMxLjExNTJMMTUyLjUxIDMyQzE1Mi40MjQgMzIuMDI3MyAxNTIuMzExIDMyLjA1MjcgMTUyLjE3IDMyLjA3NjJDMTUyLjAzMyAzMi4xMDM1IDE1MS44NjcgMzIuMTE3MiAxNTEuNjcyIDMyLjExNzJDMTUxLjQwNiAzMi4xMTcyIDE1MS4xNjIgMzIuMDY0NSAxNTAuOTM5IDMxLjk1OUMxNTAuNzE3IDMxLjg1MzUgMTUwLjUzOSAzMS42Nzc3IDE1MC40MDYgMzEuNDMxNkMxNTAuMjc3IDMxLjE4MTYgMTUwLjIxMyAzMC44NDU3IDE1MC4yMTMgMzAuNDIzOFYyNC4xMTkxWk0xNTQuOTMgMjUuNjYwMlYzMkgxNTMuODRWMjUuNjYwMkgxNTQuOTNaTTE1My43NTggMjMuOTc4NUMxNTMuNzU4IDIzLjgwMjcgMTUzLjgxMSAyMy42NTQzIDE1My45MTYgMjMuNTMzMkMxNTQuMDI1IDIzLjQxMjEgMTU0LjE4NiAyMy4zNTE2IDE1NC4zOTYgMjMuMzUxNkMxNTQuNjA0IDIzLjM1MTYgMTU0Ljc2MiAyMy40MTIxIDE1NC44NzEgMjMuNTMzMkMxNTQuOTg0IDIzLjY1NDMgMTU1LjA0MSAyMy44MDI3IDE1NS4wNDEgMjMuOTc4NUMxNTUuMDQxIDI0LjE0NjUgMTU0Ljk4NCAyNC4yOTEgMTU0Ljg3MSAyNC40MTIxQzE1NC43NjIgMjQuNTI5MyAxNTQuNjA0IDI0LjU4NzkgMTU0LjM5NiAyNC41ODc5QzE1NC4xODYgMjQuNTg3OSAxNTQuMDI1IDI0LjUyOTMgMTUzLjkxNiAyNC40MTIxQzE1My44MTEgMjQuMjkxIDE1My43NTggMjQuMTQ2NSAxNTMuNzU4IDIzLjk3ODVaTTE1Ni4zODMgMjguOTAwNFYyOC43NjU2QzE1Ni4zODMgMjguMzA4NiAxNTYuNDQ5IDI3Ljg4NDggMTU2LjU4MiAyNy40OTQxQzE1Ni43MTUgMjcuMDk5NiAxNTYuOTA2IDI2Ljc1NzggMTU3LjE1NiAyNi40Njg4QzE1Ny40MDYgMjYuMTc1OCAxNTcuNzA5IDI1Ljk0OTIgMTU4LjA2NCAyNS43ODkxQzE1OC40MiAyNS42MjUgMTU4LjgxOCAyNS41NDMgMTU5LjI2IDI1LjU0M0MxNTkuNzA1IDI1LjU0MyAxNjAuMTA1IDI1LjYyNSAxNjAuNDYxIDI1Ljc4OTFDMTYwLjgyIDI1Ljk0OTIgMTYxLjEyNSAyNi4xNzU4IDE2MS4zNzUgMjYuNDY4OEMxNjEuNjI5IDI2Ljc1NzggMTYxLjgyMiAyNy4wOTk2IDE2MS45NTUgMjcuNDk0MUMxNjIuMDg4IDI3Ljg4NDggMTYyLjE1NCAyOC4zMDg2IDE2Mi4xNTQgMjguNzY1NlYyOC45MDA0QzE2Mi4xNTQgMjkuMzU3NCAxNjIuMDg4IDI5Ljc4MTIgMTYxLjk1NSAzMC4xNzE5QzE2MS44MjIgMzAuNTYyNSAxNjEuNjI5IDMwLjkwNDMgMTYxLjM3NSAzMS4xOTczQzE2MS4xMjUgMzEuNDg2MyAxNjAuODIyIDMxLjcxMjkgMTYwLjQ2NyAzMS44NzdDMTYwLjExNSAzMi4wMzcxIDE1OS43MTcgMzIuMTE3MiAxNTkuMjcxIDMyLjExNzJDMTU4LjgyNiAzMi4xMTcyIDE1OC40MjYgMzIuMDM3MSAxNTguMDcgMzEuODc3QzE1Ny43MTUgMzEuNzEyOSAxNTcuNDEgMzEuNDg2MyAxNTcuMTU2IDMxLjE5NzNDMTU2LjkwNiAzMC45MDQzIDE1Ni43MTUgMzAuNTYyNSAxNTYuNTgyIDMwLjE3MTlDMTU2LjQ0OSAyOS43ODEyIDE1Ni4zODMgMjkuMzU3NCAxNTYuMzgzIDI4LjkwMDRaTTE1Ny40NjcgMjguNzY1NlYyOC45MDA0QzE1Ny40NjcgMjkuMjE2OCAxNTcuNTA0IDI5LjUxNTYgMTU3LjU3OCAyOS43OTY5QzE1Ny42NTIgMzAuMDc0MiAxNTcuNzY0IDMwLjMyMDMgMTU3LjkxMiAzMC41MzUyQzE1OC4wNjQgMzAuNzUgMTU4LjI1NCAzMC45MTk5IDE1OC40OCAzMS4wNDQ5QzE1OC43MDcgMzEuMTY2IDE1OC45NzEgMzEuMjI2NiAxNTkuMjcxIDMxLjIyNjZDMTU5LjU2OCAzMS4yMjY2IDE1OS44MjggMzEuMTY2IDE2MC4wNTEgMzEuMDQ0OUMxNjAuMjc3IDMwLjkxOTkgMTYwLjQ2NSAzMC43NSAxNjAuNjEzIDMwLjUzNTJDMTYwLjc2MiAzMC4zMjAzIDE2MC44NzMgMzAuMDc0MiAxNjAuOTQ3IDI5Ljc5NjlDMTYxLjAyNSAyOS41MTU2IDE2MS4wNjQgMjkuMjE2OCAxNjEuMDY0IDI4LjkwMDRWMjguNzY1NkMxNjEuMDY0IDI4LjQ1MzEgMTYxLjAyNSAyOC4xNTgyIDE2MC45NDcgMjcuODgwOUMxNjAuODczIDI3LjU5OTYgMTYwLjc2IDI3LjM1MTYgMTYwLjYwNyAyNy4xMzY3QzE2MC40NTkgMjYuOTE4IDE2MC4yNzEgMjYuNzQ2MSAxNjAuMDQ1IDI2LjYyMTFDMTU5LjgyMiAyNi40OTYxIDE1OS41NjEgMjYuNDMzNiAxNTkuMjYgMjYuNDMzNkMxNTguOTYzIDI2LjQzMzYgMTU4LjcwMSAyNi40OTYxIDE1OC40NzUgMjYuNjIxMUMxNTguMjUyIDI2Ljc0NjEgMTU4LjA2NCAyNi45MTggMTU3LjkxMiAyNy4xMzY3QzE1Ny43NjQgMjcuMzUxNiAxNTcuNjUyIDI3LjU5OTYgMTU3LjU3OCAyNy44ODA5QzE1Ny41MDQgMjguMTU4MiAxNTcuNDY3IDI4LjQ1MzEgMTU3LjQ2NyAyOC43NjU2Wk0xNjQuNTk4IDI3LjAxMzdWMzJIMTYzLjUxNFYyNS42NjAySDE2NC41MzlMMTY0LjU5OCAyNy4wMTM3Wk0xNjQuMzQgMjguNTg5OEwxNjMuODg5IDI4LjU3MjNDMTYzLjg5MyAyOC4xMzg3IDE2My45NTcgMjcuNzM4MyAxNjQuMDgyIDI3LjM3MTFDMTY0LjIwNyAyNyAxNjQuMzgzIDI2LjY3NzcgMTY0LjYwOSAyNi40MDQzQzE2NC44MzYgMjYuMTMwOSAxNjUuMTA1IDI1LjkxOTkgMTY1LjQxOCAyNS43NzE1QzE2NS43MzQgMjUuNjE5MSAxNjYuMDg0IDI1LjU0MyAxNjYuNDY3IDI1LjU0M0MxNjYuNzc5IDI1LjU0MyAxNjcuMDYxIDI1LjU4NTkgMTY3LjMxMSAyNS42NzE5QzE2Ny41NjEgMjUuNzUzOSAxNjcuNzczIDI1Ljg4NjcgMTY3Ljk0OSAyNi4wNzAzQzE2OC4xMjkgMjYuMjUzOSAxNjguMjY2IDI2LjQ5MjIgMTY4LjM1OSAyNi43ODUyQzE2OC40NTMgMjcuMDc0MiAxNjguNSAyNy40Mjc3IDE2OC41IDI3Ljg0NTdWMzJIMTY3LjQxVjI3LjgzNEMxNjcuNDEgMjcuNTAyIDE2Ny4zNjEgMjcuMjM2MyAxNjcuMjY0IDI3LjAzNzFDMTY3LjE2NiAyNi44MzQgMTY3LjAyMyAyNi42ODc1IDE2Ni44MzYgMjYuNTk3N0MxNjYuNjQ4IDI2LjUwMzkgMTY2LjQxOCAyNi40NTcgMTY2LjE0NSAyNi40NTdDMTY1Ljg3NSAyNi40NTcgMTY1LjYyOSAyNi41MTM3IDE2NS40MDYgMjYuNjI3QzE2NS4xODggMjYuNzQwMiAxNjQuOTk4IDI2Ljg5NjUgMTY0LjgzOCAyNy4wOTU3QzE2NC42ODIgMjcuMjk0OSAxNjQuNTU5IDI3LjUyMzQgMTY0LjQ2OSAyNy43ODEyQzE2NC4zODMgMjguMDM1MiAxNjQuMzQgMjguMzA0NyAxNjQuMzQgMjguNTg5OFpNMTc4LjU5NiAzMS4xMDk0VjMySDE3My4wMTJWMzEuMjIwN0wxNzUuODA3IDI4LjEwOTRDMTc2LjE1IDI3LjcyNjYgMTc2LjQxNiAyNy40MDIzIDE3Ni42MDQgMjcuMTM2N0MxNzYuNzk1IDI2Ljg2NzIgMTc2LjkyOCAyNi42MjcgMTc3LjAwMiAyNi40MTZDMTc3LjA4IDI2LjIwMTIgMTc3LjExOSAyNS45ODI0IDE3Ny4xMTkgMjUuNzU5OEMxNzcuMTE5IDI1LjQ3ODUgMTc3LjA2MSAyNS4yMjQ2IDE3Ni45NDMgMjQuOTk4QzE3Ni44MyAyNC43Njc2IDE3Ni42NjIgMjQuNTg0IDE3Ni40MzkgMjQuNDQ3M0MxNzYuMjE3IDI0LjMxMDUgMTc1Ljk0NyAyNC4yNDIyIDE3NS42MzEgMjQuMjQyMkMxNzUuMjUyIDI0LjI0MjIgMTc0LjkzNiAyNC4zMTY0IDE3NC42ODIgMjQuNDY0OEMxNzQuNDMyIDI0LjYwOTQgMTc0LjI0NCAyNC44MTI1IDE3NC4xMTkgMjUuMDc0MkMxNzMuOTk0IDI1LjMzNTkgMTczLjkzMiAyNS42MzY3IDE3My45MzIgMjUuOTc2NkgxNzIuODQ4QzE3Mi44NDggMjUuNDk2MSAxNzIuOTUzIDI1LjA1NjYgMTczLjE2NCAyNC42NTgyQzE3My4zNzUgMjQuMjU5OCAxNzMuNjg4IDIzLjk0MzQgMTc0LjEwMiAyMy43MDlDMTc0LjUxNiAyMy40NzA3IDE3NS4wMjUgMjMuMzUxNiAxNzUuNjMxIDIzLjM1MTZDMTc2LjE3IDIzLjM1MTYgMTc2LjYzMSAyMy40NDczIDE3Ny4wMTQgMjMuNjM4N0MxNzcuMzk2IDIzLjgyNjIgMTc3LjY4OSAyNC4wOTE4IDE3Ny44OTMgMjQuNDM1NUMxNzguMSAyNC43NzU0IDE3OC4yMDMgMjUuMTczOCAxNzguMjAzIDI1LjYzMDlDMTc4LjIwMyAyNS44ODA5IDE3OC4xNiAyNi4xMzQ4IDE3OC4wNzQgMjYuMzkyNkMxNzcuOTkyIDI2LjY0NjUgMTc3Ljg3NyAyNi45MDA0IDE3Ny43MjkgMjcuMTU0M0MxNzcuNTg0IDI3LjQwODIgMTc3LjQxNCAyNy42NTgyIDE3Ny4yMTkgMjcuOTA0M0MxNzcuMDI3IDI4LjE1MDQgMTc2LjgyMiAyOC4zOTI2IDE3Ni42MDQgMjguNjMwOUwxNzQuMzE4IDMxLjEwOTRIMTc4LjU5NlpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDBfMTcxXzE4NzMpXCI+XG5cdFx0XHQ8cGF0aCBkPVwiTTEyOC42NjcgMjMuNDUzM0wxMjEuMDYgMzEuMDY2N0wxMTguMjMzIDI4LjI0TDExOS4xNzMgMjcuM0wxMjEuMDYgMjkuMTg2N0wxMjcuNzI3IDIyLjUyTDEyOC42NjcgMjMuNDUzM1pNMTI3LjE5MyAyNi44MTMzQzEyNy4yOCAyNy4xOTMzIDEyNy4zMzMgMjcuNTkzMyAxMjcuMzMzIDI4QzEyNy4zMzMgMzAuOTQ2NyAxMjQuOTQ3IDMzLjMzMzMgMTIyIDMzLjMzMzNDMTE5LjA1MyAzMy4zMzMzIDExNi42NjcgMzAuOTQ2NyAxMTYuNjY3IDI4QzExNi42NjcgMjUuMDUzMyAxMTkuMDUzIDIyLjY2NjcgMTIyIDIyLjY2NjdDMTIzLjA1MyAyMi42NjY3IDEyNC4wMjcgMjIuOTczMyAxMjQuODUzIDIzLjVMMTI1LjgxMyAyMi41NEMxMjQuNzMzIDIxLjc4IDEyMy40MiAyMS4zMzMzIDEyMiAyMS4zMzMzQzExOC4zMiAyMS4zMzMzIDExNS4zMzMgMjQuMzIgMTE1LjMzMyAyOEMxMTUuMzMzIDMxLjY4IDExOC4zMiAzNC42NjY3IDEyMiAzNC42NjY3QzEyNS42OCAzNC42NjY3IDEyOC42NjcgMzEuNjggMTI4LjY2NyAyOEMxMjguNjY3IDI3LjIwNjcgMTI4LjUyIDI2LjQ0NjcgMTI4LjI2NyAyNS43NEwxMjcuMTkzIDI2LjgxMzNaXCIgZmlsbD1cIiM0MjcyRjlcIi8+XG5cdFx0PC9nPlxuXHRcdDxyZWN0IHg9XCIxMTRcIiB5PVwiMTEwXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjRcIiByeD1cIjJcIiBmaWxsPVwiI0NCRDVFMVwiLz5cblx0XHQ8cmVjdCB4PVwiMTE0XCIgeT1cIjExNlwiIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHJlY3QgeD1cIjIwMFwiIHk9XCIxMlwiIHdpZHRoPVwiODZcIiBoZWlnaHQ9XCIxMjBcIiByeD1cIjhcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0PHJlY3QgeD1cIjIwOFwiIHk9XCIxMTBcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxuXHRcdDxyZWN0IHg9XCIyMDhcIiB5PVwiMTE2XCIgd2lkdGg9XCI1OFwiIGhlaWdodD1cIjRcIiByeD1cIjJcIiBmaWxsPVwiI0NCRDVFMVwiLz5cblx0XHQ8cmVjdCB4PVwiMjA4XCIgeT1cIjQ0XCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjYwXCIgcng9XCI0XCIgZmlsbD1cIiNGMUY1RjlcIi8+XG5cdFx0PHBhdGggZD1cIk0yNTUgODZWNjJIMjMxVjg2SDI1NVpNMjM4LjMzMyA3NkwyNDEuNjY3IDgwLjAxMzNMMjQ2LjMzMyA3NEwyNTIuMzMzIDgySDIzMy42NjdMMjM4LjMzMyA3NlpcIiBmaWxsPVwiI0NCRDVFMVwiLz5cblx0XHQ8cGF0aCBkPVwiTTIzNS41NTkgMjcuNDY0OFYyOC4wMDM5QzIzNS41NTkgMjguNjQ0NSAyMzUuNDc5IDI5LjIxODggMjM1LjMxOCAyOS43MjY2QzIzNS4xNTggMzAuMjM0NCAyMzQuOTI4IDMwLjY2NiAyMzQuNjI3IDMxLjAyMTVDMjM0LjMyNiAzMS4zNzcgMjMzLjk2NSAzMS42NDg0IDIzMy41NDMgMzEuODM1OUMyMzMuMTI1IDMyLjAyMzQgMjMyLjY1NiAzMi4xMTcyIDIzMi4xMzcgMzIuMTE3MkMyMzEuNjMzIDMyLjExNzIgMjMxLjE3IDMyLjAyMzQgMjMwLjc0OCAzMS44MzU5QzIzMC4zMyAzMS42NDg0IDIyOS45NjcgMzEuMzc3IDIyOS42NTggMzEuMDIxNUMyMjkuMzU0IDMwLjY2NiAyMjkuMTE3IDMwLjIzNDQgMjI4Ljk0OSAyOS43MjY2QzIyOC43ODEgMjkuMjE4OCAyMjguNjk3IDI4LjY0NDUgMjI4LjY5NyAyOC4wMDM5VjI3LjQ2NDhDMjI4LjY5NyAyNi44MjQyIDIyOC43NzkgMjYuMjUyIDIyOC45NDMgMjUuNzQ4QzIyOS4xMTEgMjUuMjQwMiAyMjkuMzQ4IDI0LjgwODYgMjI5LjY1MiAyNC40NTMxQzIyOS45NTcgMjQuMDkzOCAyMzAuMzE4IDIzLjgyMDMgMjMwLjczNiAyMy42MzI4QzIzMS4xNTggMjMuNDQ1MyAyMzEuNjIxIDIzLjM1MTYgMjMyLjEyNSAyMy4zNTE2QzIzMi42NDUgMjMuMzUxNiAyMzMuMTEzIDIzLjQ0NTMgMjMzLjUzMSAyMy42MzI4QzIzMy45NTMgMjMuODIwMyAyMzQuMzE0IDI0LjA5MzggMjM0LjYxNSAyNC40NTMxQzIzNC45MiAyNC44MDg2IDIzNS4xNTIgMjUuMjQwMiAyMzUuMzEyIDI1Ljc0OEMyMzUuNDc3IDI2LjI1MiAyMzUuNTU5IDI2LjgyNDIgMjM1LjU1OSAyNy40NjQ4Wk0yMzQuNDM5IDI4LjAwMzlWMjcuNDUzMUMyMzQuNDM5IDI2Ljk0NTMgMjM0LjM4NyAyNi40OTYxIDIzNC4yODEgMjYuMTA1NUMyMzQuMTggMjUuNzE0OCAyMzQuMDI5IDI1LjM4NjcgMjMzLjgzIDI1LjEyMTFDMjMzLjYzMSAyNC44NTU1IDIzMy4zODcgMjQuNjU0MyAyMzMuMDk4IDI0LjUxNzZDMjMyLjgxMiAyNC4zODA5IDIzMi40ODggMjQuMzEyNSAyMzIuMTI1IDI0LjMxMjVDMjMxLjc3MyAyNC4zMTI1IDIzMS40NTUgMjQuMzgwOSAyMzEuMTcgMjQuNTE3NkMyMzAuODg5IDI0LjY1NDMgMjMwLjY0NiAyNC44NTU1IDIzMC40NDMgMjUuMTIxMUMyMzAuMjQ0IDI1LjM4NjcgMjMwLjA5IDI1LjcxNDggMjI5Ljk4IDI2LjEwNTVDMjI5Ljg3MSAyNi40OTYxIDIyOS44MTYgMjYuOTQ1MyAyMjkuODE2IDI3LjQ1MzFWMjguMDAzOUMyMjkuODE2IDI4LjUxNTYgMjI5Ljg3MSAyOC45Njg4IDIyOS45OCAyOS4zNjMzQzIzMC4wOSAyOS43NTM5IDIzMC4yNDYgMzAuMDg0IDIzMC40NDkgMzAuMzUzNUMyMzAuNjU2IDMwLjYxOTEgMjMwLjkgMzAuODIwMyAyMzEuMTgyIDMwLjk1N0MyMzEuNDY3IDMxLjA5MzggMjMxLjc4NSAzMS4xNjIxIDIzMi4xMzcgMzEuMTYyMUMyMzIuNTA0IDMxLjE2MjEgMjMyLjgzIDMxLjA5MzggMjMzLjExNSAzMC45NTdDMjMzLjQgMzAuODIwMyAyMzMuNjQxIDMwLjYxOTEgMjMzLjgzNiAzMC4zNTM1QzIzNC4wMzUgMzAuMDg0IDIzNC4xODYgMjkuNzUzOSAyMzQuMjg3IDI5LjM2MzNDMjM0LjM4OSAyOC45Njg4IDIzNC40MzkgMjguNTE1NiAyMzQuNDM5IDI4LjAwMzlaTTIzOC4xNzIgMjYuODc4OVYzNC40Mzc1SDIzNy4wODJWMjUuNjYwMkgyMzguMDc4TDIzOC4xNzIgMjYuODc4OVpNMjQyLjQ0MyAyOC43NzczVjI4LjkwMDRDMjQyLjQ0MyAyOS4zNjEzIDI0Mi4zODkgMjkuNzg5MSAyNDIuMjc5IDMwLjE4MzZDMjQyLjE3IDMwLjU3NDIgMjQyLjAxIDMwLjkxNDEgMjQxLjc5OSAzMS4yMDMxQzI0MS41OTIgMzEuNDkyMiAyNDEuMzM2IDMxLjcxNjggMjQxLjAzMSAzMS44NzdDMjQwLjcyNyAzMi4wMzcxIDI0MC4zNzcgMzIuMTE3MiAyMzkuOTgyIDMyLjExNzJDMjM5LjU4IDMyLjExNzIgMjM5LjIyNSAzMi4wNTA4IDIzOC45MTYgMzEuOTE4QzIzOC42MDcgMzEuNzg1MiAyMzguMzQ2IDMxLjU5MTggMjM4LjEzMSAzMS4zMzc5QzIzNy45MTYgMzEuMDg0IDIzNy43NDQgMzAuNzc5MyAyMzcuNjE1IDMwLjQyMzhDMjM3LjQ5IDMwLjA2ODQgMjM3LjQwNCAyOS42NjggMjM3LjM1NyAyOS4yMjI3VjI4LjU2NjRDMjM3LjQwNCAyOC4wOTc3IDIzNy40OTIgMjcuNjc3NyAyMzcuNjIxIDI3LjMwNjZDMjM3Ljc1IDI2LjkzNTUgMjM3LjkyIDI2LjYxOTEgMjM4LjEzMSAyNi4zNTc0QzIzOC4zNDYgMjYuMDkxOCAyMzguNjA1IDI1Ljg5MDYgMjM4LjkxIDI1Ljc1MzlDMjM5LjIxNSAyNS42MTMzIDIzOS41NjYgMjUuNTQzIDIzOS45NjUgMjUuNTQzQzI0MC4zNjMgMjUuNTQzIDI0MC43MTcgMjUuNjIxMSAyNDEuMDI1IDI1Ljc3NzNDMjQxLjMzNCAyNS45Mjk3IDI0MS41OTQgMjYuMTQ4NCAyNDEuODA1IDI2LjQzMzZDMjQyLjAxNiAyNi43MTg4IDI0Mi4xNzQgMjcuMDYwNSAyNDIuMjc5IDI3LjQ1OUMyNDIuMzg5IDI3Ljg1MzUgMjQyLjQ0MyAyOC4yOTMgMjQyLjQ0MyAyOC43NzczWk0yNDEuMzU0IDI4LjkwMDRWMjguNzc3M0MyNDEuMzU0IDI4LjQ2MDkgMjQxLjMyIDI4LjE2NDEgMjQxLjI1NCAyNy44ODY3QzI0MS4xODggMjcuNjA1NSAyNDEuMDg0IDI3LjM1OTQgMjQwLjk0MyAyNy4xNDg0QzI0MC44MDcgMjYuOTMzNiAyNDAuNjMxIDI2Ljc2NTYgMjQwLjQxNiAyNi42NDQ1QzI0MC4yMDEgMjYuNTE5NSAyMzkuOTQ1IDI2LjQ1NyAyMzkuNjQ4IDI2LjQ1N0MyMzkuMzc1IDI2LjQ1NyAyMzkuMTM3IDI2LjUwMzkgMjM4LjkzNCAyNi41OTc3QzIzOC43MzQgMjYuNjkxNCAyMzguNTY0IDI2LjgxODQgMjM4LjQyNCAyNi45Nzg1QzIzOC4yODMgMjcuMTM0OCAyMzguMTY4IDI3LjMxNDUgMjM4LjA3OCAyNy41MTc2QzIzNy45OTIgMjcuNzE2OCAyMzcuOTI4IDI3LjkyMzggMjM3Ljg4NSAyOC4xMzg3VjI5LjY1NjJDMjM3Ljk2MyAyOS45Mjk3IDIzOC4wNzIgMzAuMTg3NSAyMzguMjEzIDMwLjQyOTdDMjM4LjM1NCAzMC42NjggMjM4LjU0MSAzMC44NjEzIDIzOC43NzUgMzEuMDA5OEMyMzkuMDEgMzEuMTU0MyAyMzkuMzA1IDMxLjIyNjYgMjM5LjY2IDMxLjIyNjZDMjM5Ljk1MyAzMS4yMjY2IDI0MC4yMDUgMzEuMTY2IDI0MC40MTYgMzEuMDQ0OUMyNDAuNjMxIDMwLjkxOTkgMjQwLjgwNyAzMC43NSAyNDAuOTQzIDMwLjUzNTJDMjQxLjA4NCAzMC4zMjAzIDI0MS4xODggMzAuMDc0MiAyNDEuMjU0IDI5Ljc5NjlDMjQxLjMyIDI5LjUxNTYgMjQxLjM1NCAyOS4yMTY4IDI0MS4zNTQgMjguOTAwNFpNMjQ2LjQ4IDI1LjY2MDJWMjYuNDkyMkgyNDMuMDUzVjI1LjY2MDJIMjQ2LjQ4Wk0yNDQuMjEzIDI0LjExOTFIMjQ1LjI5N1YzMC40Mjk3QzI0NS4yOTcgMzAuNjQ0NSAyNDUuMzMgMzAuODA2NiAyNDUuMzk2IDMwLjkxNkMyNDUuNDYzIDMxLjAyNTQgMjQ1LjU0OSAzMS4wOTc3IDI0NS42NTQgMzEuMTMyOEMyNDUuNzYgMzEuMTY4IDI0NS44NzMgMzEuMTg1NSAyNDUuOTk0IDMxLjE4NTVDMjQ2LjA4NCAzMS4xODU1IDI0Ni4xNzggMzEuMTc3NyAyNDYuMjc1IDMxLjE2MjFDMjQ2LjM3NyAzMS4xNDI2IDI0Ni40NTMgMzEuMTI3IDI0Ni41MDQgMzEuMTE1MkwyNDYuNTEgMzJDMjQ2LjQyNCAzMi4wMjczIDI0Ni4zMTEgMzIuMDUyNyAyNDYuMTcgMzIuMDc2MkMyNDYuMDMzIDMyLjEwMzUgMjQ1Ljg2NyAzMi4xMTcyIDI0NS42NzIgMzIuMTE3MkMyNDUuNDA2IDMyLjExNzIgMjQ1LjE2MiAzMi4wNjQ1IDI0NC45MzkgMzEuOTU5QzI0NC43MTcgMzEuODUzNSAyNDQuNTM5IDMxLjY3NzcgMjQ0LjQwNiAzMS40MzE2QzI0NC4yNzcgMzEuMTgxNiAyNDQuMjEzIDMwLjg0NTcgMjQ0LjIxMyAzMC40MjM4VjI0LjExOTFaTTI0OC45MyAyNS42NjAyVjMySDI0Ny44NFYyNS42NjAySDI0OC45M1pNMjQ3Ljc1OCAyMy45Nzg1QzI0Ny43NTggMjMuODAyNyAyNDcuODExIDIzLjY1NDMgMjQ3LjkxNiAyMy41MzMyQzI0OC4wMjUgMjMuNDEyMSAyNDguMTg2IDIzLjM1MTYgMjQ4LjM5NiAyMy4zNTE2QzI0OC42MDQgMjMuMzUxNiAyNDguNzYyIDIzLjQxMjEgMjQ4Ljg3MSAyMy41MzMyQzI0OC45ODQgMjMuNjU0MyAyNDkuMDQxIDIzLjgwMjcgMjQ5LjA0MSAyMy45Nzg1QzI0OS4wNDEgMjQuMTQ2NSAyNDguOTg0IDI0LjI5MSAyNDguODcxIDI0LjQxMjFDMjQ4Ljc2MiAyNC41MjkzIDI0OC42MDQgMjQuNTg3OSAyNDguMzk2IDI0LjU4NzlDMjQ4LjE4NiAyNC41ODc5IDI0OC4wMjUgMjQuNTI5MyAyNDcuOTE2IDI0LjQxMjFDMjQ3LjgxMSAyNC4yOTEgMjQ3Ljc1OCAyNC4xNDY1IDI0Ny43NTggMjMuOTc4NVpNMjUwLjM4MyAyOC45MDA0VjI4Ljc2NTZDMjUwLjM4MyAyOC4zMDg2IDI1MC40NDkgMjcuODg0OCAyNTAuNTgyIDI3LjQ5NDFDMjUwLjcxNSAyNy4wOTk2IDI1MC45MDYgMjYuNzU3OCAyNTEuMTU2IDI2LjQ2ODhDMjUxLjQwNiAyNi4xNzU4IDI1MS43MDkgMjUuOTQ5MiAyNTIuMDY0IDI1Ljc4OTFDMjUyLjQyIDI1LjYyNSAyNTIuODE4IDI1LjU0MyAyNTMuMjYgMjUuNTQzQzI1My43MDUgMjUuNTQzIDI1NC4xMDUgMjUuNjI1IDI1NC40NjEgMjUuNzg5MUMyNTQuODIgMjUuOTQ5MiAyNTUuMTI1IDI2LjE3NTggMjU1LjM3NSAyNi40Njg4QzI1NS42MjkgMjYuNzU3OCAyNTUuODIyIDI3LjA5OTYgMjU1Ljk1NSAyNy40OTQxQzI1Ni4wODggMjcuODg0OCAyNTYuMTU0IDI4LjMwODYgMjU2LjE1NCAyOC43NjU2VjI4LjkwMDRDMjU2LjE1NCAyOS4zNTc0IDI1Ni4wODggMjkuNzgxMiAyNTUuOTU1IDMwLjE3MTlDMjU1LjgyMiAzMC41NjI1IDI1NS42MjkgMzAuOTA0MyAyNTUuMzc1IDMxLjE5NzNDMjU1LjEyNSAzMS40ODYzIDI1NC44MjIgMzEuNzEyOSAyNTQuNDY3IDMxLjg3N0MyNTQuMTE1IDMyLjAzNzEgMjUzLjcxNyAzMi4xMTcyIDI1My4yNzEgMzIuMTE3MkMyNTIuODI2IDMyLjExNzIgMjUyLjQyNiAzMi4wMzcxIDI1Mi4wNyAzMS44NzdDMjUxLjcxNSAzMS43MTI5IDI1MS40MSAzMS40ODYzIDI1MS4xNTYgMzEuMTk3M0MyNTAuOTA2IDMwLjkwNDMgMjUwLjcxNSAzMC41NjI1IDI1MC41ODIgMzAuMTcxOUMyNTAuNDQ5IDI5Ljc4MTIgMjUwLjM4MyAyOS4zNTc0IDI1MC4zODMgMjguOTAwNFpNMjUxLjQ2NyAyOC43NjU2VjI4LjkwMDRDMjUxLjQ2NyAyOS4yMTY4IDI1MS41MDQgMjkuNTE1NiAyNTEuNTc4IDI5Ljc5NjlDMjUxLjY1MiAzMC4wNzQyIDI1MS43NjQgMzAuMzIwMyAyNTEuOTEyIDMwLjUzNTJDMjUyLjA2NCAzMC43NSAyNTIuMjU0IDMwLjkxOTkgMjUyLjQ4IDMxLjA0NDlDMjUyLjcwNyAzMS4xNjYgMjUyLjk3MSAzMS4yMjY2IDI1My4yNzEgMzEuMjI2NkMyNTMuNTY4IDMxLjIyNjYgMjUzLjgyOCAzMS4xNjYgMjU0LjA1MSAzMS4wNDQ5QzI1NC4yNzcgMzAuOTE5OSAyNTQuNDY1IDMwLjc1IDI1NC42MTMgMzAuNTM1MkMyNTQuNzYyIDMwLjMyMDMgMjU0Ljg3MyAzMC4wNzQyIDI1NC45NDcgMjkuNzk2OUMyNTUuMDI1IDI5LjUxNTYgMjU1LjA2NCAyOS4yMTY4IDI1NS4wNjQgMjguOTAwNFYyOC43NjU2QzI1NS4wNjQgMjguNDUzMSAyNTUuMDI1IDI4LjE1ODIgMjU0Ljk0NyAyNy44ODA5QzI1NC44NzMgMjcuNTk5NiAyNTQuNzYgMjcuMzUxNiAyNTQuNjA3IDI3LjEzNjdDMjU0LjQ1OSAyNi45MTggMjU0LjI3MSAyNi43NDYxIDI1NC4wNDUgMjYuNjIxMUMyNTMuODIyIDI2LjQ5NjEgMjUzLjU2MSAyNi40MzM2IDI1My4yNiAyNi40MzM2QzI1Mi45NjMgMjYuNDMzNiAyNTIuNzAxIDI2LjQ5NjEgMjUyLjQ3NSAyNi42MjExQzI1Mi4yNTIgMjYuNzQ2MSAyNTIuMDY0IDI2LjkxOCAyNTEuOTEyIDI3LjEzNjdDMjUxLjc2NCAyNy4zNTE2IDI1MS42NTIgMjcuNTk5NiAyNTEuNTc4IDI3Ljg4MDlDMjUxLjUwNCAyOC4xNTgyIDI1MS40NjcgMjguNDUzMSAyNTEuNDY3IDI4Ljc2NTZaTTI1OC41OTggMjcuMDEzN1YzMkgyNTcuNTE0VjI1LjY2MDJIMjU4LjUzOUwyNTguNTk4IDI3LjAxMzdaTTI1OC4zNCAyOC41ODk4TDI1Ny44ODkgMjguNTcyM0MyNTcuODkzIDI4LjEzODcgMjU3Ljk1NyAyNy43MzgzIDI1OC4wODIgMjcuMzcxMUMyNTguMjA3IDI3IDI1OC4zODMgMjYuNjc3NyAyNTguNjA5IDI2LjQwNDNDMjU4LjgzNiAyNi4xMzA5IDI1OS4xMDUgMjUuOTE5OSAyNTkuNDE4IDI1Ljc3MTVDMjU5LjczNCAyNS42MTkxIDI2MC4wODQgMjUuNTQzIDI2MC40NjcgMjUuNTQzQzI2MC43NzkgMjUuNTQzIDI2MS4wNjEgMjUuNTg1OSAyNjEuMzExIDI1LjY3MTlDMjYxLjU2MSAyNS43NTM5IDI2MS43NzMgMjUuODg2NyAyNjEuOTQ5IDI2LjA3MDNDMjYyLjEyOSAyNi4yNTM5IDI2Mi4yNjYgMjYuNDkyMiAyNjIuMzU5IDI2Ljc4NTJDMjYyLjQ1MyAyNy4wNzQyIDI2Mi41IDI3LjQyNzcgMjYyLjUgMjcuODQ1N1YzMkgyNjEuNDFWMjcuODM0QzI2MS40MSAyNy41MDIgMjYxLjM2MSAyNy4yMzYzIDI2MS4yNjQgMjcuMDM3MUMyNjEuMTY2IDI2LjgzNCAyNjEuMDIzIDI2LjY4NzUgMjYwLjgzNiAyNi41OTc3QzI2MC42NDggMjYuNTAzOSAyNjAuNDE4IDI2LjQ1NyAyNjAuMTQ1IDI2LjQ1N0MyNTkuODc1IDI2LjQ1NyAyNTkuNjI5IDI2LjUxMzcgMjU5LjQwNiAyNi42MjdDMjU5LjE4OCAyNi43NDAyIDI1OC45OTggMjYuODk2NSAyNTguODM4IDI3LjA5NTdDMjU4LjY4MiAyNy4yOTQ5IDI1OC41NTkgMjcuNTIzNCAyNTguNDY5IDI3Ljc4MTJDMjU4LjM4MyAyOC4wMzUyIDI1OC4zNCAyOC4zMDQ3IDI1OC4zNCAyOC41ODk4Wk0yNjguNTg4IDI3LjIwMTJIMjY5LjM2MUMyNjkuNzQgMjcuMjAxMiAyNzAuMDUzIDI3LjEzODcgMjcwLjI5OSAyNy4wMTM3QzI3MC41NDkgMjYuODg0OCAyNzAuNzM0IDI2LjcxMDkgMjcwLjg1NSAyNi40OTIyQzI3MC45OCAyNi4yNjk1IDI3MS4wNDMgMjYuMDE5NSAyNzEuMDQzIDI1Ljc0MjJDMjcxLjA0MyAyNS40MTQxIDI3MC45ODggMjUuMTM4NyAyNzAuODc5IDI0LjkxNkMyNzAuNzcgMjQuNjkzNCAyNzAuNjA1IDI0LjUyNTQgMjcwLjM4NyAyNC40MTIxQzI3MC4xNjggMjQuMjk4OCAyNjkuODkxIDI0LjI0MjIgMjY5LjU1NSAyNC4yNDIyQzI2OS4yNSAyNC4yNDIyIDI2OC45OCAyNC4zMDI3IDI2OC43NDYgMjQuNDIzOEMyNjguNTE2IDI0LjU0MSAyNjguMzM0IDI0LjcwOSAyNjguMjAxIDI0LjkyNzdDMjY4LjA3MiAyNS4xNDY1IDI2OC4wMDggMjUuNDA0MyAyNjguMDA4IDI1LjcwMTJIMjY2LjkyNEMyNjYuOTI0IDI1LjI2NzYgMjY3LjAzMyAyNC44NzMgMjY3LjI1MiAyNC41MTc2QzI2Ny40NzEgMjQuMTYyMSAyNjcuNzc3IDIzLjg3ODkgMjY4LjE3MiAyMy42NjhDMjY4LjU3IDIzLjQ1NyAyNjkuMDMxIDIzLjM1MTYgMjY5LjU1NSAyMy4zNTE2QzI3MC4wNyAyMy4zNTE2IDI3MC41MjEgMjMuNDQzNCAyNzAuOTA4IDIzLjYyN0MyNzEuMjk1IDIzLjgwNjYgMjcxLjU5NiAyNC4wNzYyIDI3MS44MTEgMjQuNDM1NUMyNzIuMDI1IDI0Ljc5MSAyNzIuMTMzIDI1LjIzNDQgMjcyLjEzMyAyNS43NjU2QzI3Mi4xMzMgMjUuOTgwNSAyNzIuMDgyIDI2LjIxMDkgMjcxLjk4IDI2LjQ1N0MyNzEuODgzIDI2LjY5OTIgMjcxLjcyOSAyNi45MjU4IDI3MS41MTggMjcuMTM2N0MyNzEuMzExIDI3LjM0NzcgMjcxLjA0MSAyNy41MjE1IDI3MC43MDkgMjcuNjU4MkMyNzAuMzc3IDI3Ljc5MSAyNjkuOTc5IDI3Ljg1NzQgMjY5LjUxNCAyNy44NTc0SDI2OC41ODhWMjcuMjAxMlpNMjY4LjU4OCAyOC4wOTE4VjI3LjQ0MTRIMjY5LjUxNEMyNzAuMDU3IDI3LjQ0MTQgMjcwLjUwNiAyNy41MDU5IDI3MC44NjEgMjcuNjM0OEMyNzEuMjE3IDI3Ljc2MzcgMjcxLjQ5NiAyNy45MzU1IDI3MS42OTkgMjguMTUwNEMyNzEuOTA2IDI4LjM2NTIgMjcyLjA1MSAyOC42MDE2IDI3Mi4xMzMgMjguODU5NEMyNzIuMjE5IDI5LjExMzMgMjcyLjI2MiAyOS4zNjcyIDI3Mi4yNjIgMjkuNjIxMUMyNzIuMjYyIDMwLjAxOTUgMjcyLjE5MyAzMC4zNzMgMjcyLjA1NyAzMC42ODE2QzI3MS45MjQgMzAuOTkwMiAyNzEuNzM0IDMxLjI1MiAyNzEuNDg4IDMxLjQ2NjhDMjcxLjI0NiAzMS42ODE2IDI3MC45NjEgMzEuODQzOCAyNzAuNjMzIDMxLjk1MzFDMjcwLjMwNSAzMi4wNjI1IDI2OS45NDcgMzIuMTE3MiAyNjkuNTYxIDMyLjExNzJDMjY5LjE4OSAzMi4xMTcyIDI2OC44NCAzMi4wNjQ1IDI2OC41MTIgMzEuOTU5QzI2OC4xODggMzEuODUzNSAyNjcuOSAzMS43MDEyIDI2Ny42NSAzMS41MDJDMjY3LjQgMzEuMjk4OCAyNjcuMjA1IDMxLjA1MDggMjY3LjA2NCAzMC43NTc4QzI2Ni45MjQgMzAuNDYwOSAyNjYuODU0IDMwLjEyMyAyNjYuODU0IDI5Ljc0NDFIMjY3LjkzOEMyNjcuOTM4IDMwLjA0MSAyNjguMDAyIDMwLjMwMDggMjY4LjEzMSAzMC41MjM0QzI2OC4yNjQgMzAuNzQ2MSAyNjguNDUxIDMwLjkxOTkgMjY4LjY5MyAzMS4wNDQ5QzI2OC45MzkgMzEuMTY2IDI2OS4yMjkgMzEuMjI2NiAyNjkuNTYxIDMxLjIyNjZDMjY5Ljg5MyAzMS4yMjY2IDI3MC4xNzggMzEuMTY5OSAyNzAuNDE2IDMxLjA1NjZDMjcwLjY1OCAzMC45Mzk1IDI3MC44NDQgMzAuNzYzNyAyNzAuOTczIDMwLjUyOTNDMjcxLjEwNSAzMC4yOTQ5IDI3MS4xNzIgMzAgMjcxLjE3MiAyOS42NDQ1QzI3MS4xNzIgMjkuMjg5MSAyNzEuMDk4IDI4Ljk5OCAyNzAuOTQ5IDI4Ljc3MTVDMjcwLjgwMSAyOC41NDEgMjcwLjU5IDI4LjM3MTEgMjcwLjMxNiAyOC4yNjE3QzI3MC4wNDcgMjguMTQ4NCAyNjkuNzI5IDI4LjA5MTggMjY5LjM2MSAyOC4wOTE4SDI2OC41ODhaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0PHBhdGggZD1cIk0yMjAuNjY3IDIzLjMzMzNWMzIuNjY2N0gyMTEuMzMzVjIzLjMzMzNIMjIwLjY2N1pNMjIwLjY2NyAyMkgyMTEuMzMzQzIxMC42IDIyIDIxMCAyMi42IDIxMCAyMy4zMzMzVjMyLjY2NjdDMjEwIDMzLjQgMjEwLjYgMzQgMjExLjMzMyAzNEgyMjAuNjY3QzIyMS40IDM0IDIyMiAzMy40IDIyMiAzMi42NjY3VjIzLjMzMzNDMjIyIDIyLjYgMjIxLjQgMjIgMjIwLjY2NyAyMlpcIiBmaWxsPVwiIzY0NzQ4QlwiLz5cblx0XHQ8ZGVmcz5cblx0XHRcdDxjbGlwUGF0aCBpZD1cImNsaXAwXzE3MV8xODczXCI+XG5cdFx0XHRcdDxyZWN0IHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJ3aGl0ZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMTQgMjApXCIvPlxuXHRcdFx0PC9jbGlwUGF0aD5cblx0XHQ8L2RlZnM+XG5cdDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldmlldzsiLCJjb25zdCB7XG5cdCAgICAgIHVzZUlubmVyQmxvY2tzUHJvcHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgRnJhZ21lbnQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZUFkdmFuY2VkQ2hvaWNlc0ZpZWxkKCkge1xuXHRjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcy5zYXZlKCk7XG5cblx0cmV0dXJuIDxGcmFnbWVudCB7IC4uLmlubmVyQmxvY2tzUHJvcHMgfSAvPjtcbn0iLCJpbXBvcnQgeyBuYW1lIH0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IHtcblx0ICAgICAgY3JlYXRlQmxvY2ssXG4gICAgICB9ID0gd3AuYmxvY2tzO1xuXG5jb25zdCBpc01hdGNoID0gYXR0cmlidXRlcyA9PiAoXG5cdCdtYW51YWxfaW5wdXQnID09PSBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfZnJvbSAmJlxuXHRBcnJheS5pc0FycmF5KCBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMgKSAmJlxuXHRhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubGVuZ3RoID4gMFxuKTtcblxuY29uc3QgdHJhbnNmb3JtID0gKCBhdHRyaWJ1dGVzLCBhbGxvd19tdWx0aXBsZSApID0+IHtcblx0Y29uc3QgY2hvaWNlcyA9IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucy5tYXAoXG5cdFx0b3B0aW9uID0+IGNyZWF0ZUJsb2NrKFxuXHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UnLFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogb3B0aW9uLnZhbHVlLFxuXHRcdFx0XHRjYWxjX3ZhbHVlOiBvcHRpb24uY2FsY3VsYXRlID8/ICcnLFxuXHRcdFx0fSxcblx0XHRcdFtcblx0XHRcdFx0Y3JlYXRlQmxvY2soXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UtY29udHJvbCcsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6IG9wdGlvbi5sYWJlbCA/PyAnJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHQpLFxuXHRcdFx0XSxcblx0XHQpLFxuXHQpO1xuXG5cdHJldHVybiBjcmVhdGVCbG9jayhcblx0XHRuYW1lLFxuXHRcdHtcblx0XHRcdG5hbWU6IGF0dHJpYnV0ZXMubmFtZSxcblx0XHRcdGxhYmVsOiBhdHRyaWJ1dGVzLmxhYmVsLFxuXHRcdFx0ZGVzYzogYXR0cmlidXRlcy5kZXNjLFxuXHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudmFsdWUsXG5cdFx0XHRkZWZhdWx0OiBhdHRyaWJ1dGVzLmRlZmF1bHQsXG5cdFx0XHRyZXF1aXJlZDogYXR0cmlidXRlcy5yZXF1aXJlZCxcblx0XHRcdHZpc2liaWxpdHk6IGF0dHJpYnV0ZXMudmlzaWJpbGl0eSxcblx0XHRcdHN3aXRjaF9vbl9jaGFuZ2U6IGF0dHJpYnV0ZXMuc3dpdGNoX29uX2NoYW5nZSA/PyBmYWxzZSxcblx0XHRcdGFsbG93X211bHRpcGxlOiAhIWFsbG93X211bHRpcGxlLFxuXHRcdH0sXG5cdFx0Y2hvaWNlcyxcblx0KTtcbn07XG5cbmNvbnN0IHRyYW5zZm9ybXMgPSB7XG5cdGZyb206IFtcblx0XHR7XG5cdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0YmxvY2tzOiBbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hlY2tib3gtZmllbGQnXG5cdFx0XHRdLFxuXHRcdFx0aXNNYXRjaCxcblx0XHRcdHRyYW5zZm9ybTogKCBhdHRyaWJ1dGVzICkgPT4gdHJhbnNmb3JtKCBhdHRyaWJ1dGVzLCB0cnVlICksXG5cdFx0XHRwcmlvcml0eTogLTEsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0eXBlOiAnYmxvY2snLFxuXHRcdFx0YmxvY2tzOiBbXG5cdFx0XHRcdCdqZXQtZm9ybXMvcmFkaW8tZmllbGQnXG5cdFx0XHRdLFxuXHRcdFx0aXNNYXRjaCxcblx0XHRcdHRyYW5zZm9ybTogKCBhdHRyaWJ1dGVzICkgPT4gdHJhbnNmb3JtKCBhdHRyaWJ1dGVzLCBmYWxzZSApLFxuXHRcdFx0cHJpb3JpdHk6IC0xLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2Jsb2NrJyxcblx0XHRcdGJsb2NrczogW1xuXHRcdFx0XHQnamV0LWZvcm1zL3NlbGVjdC1maWVsZCdcblx0XHRcdF0sXG5cdFx0XHRpc01hdGNoLFxuXHRcdFx0dHJhbnNmb3JtOiAoIGF0dHJpYnV0ZXMgKSA9PiB0cmFuc2Zvcm0oIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMubXVsdGlwbGUgKSxcblx0XHRcdHByaW9yaXR5OiAtMSxcblx0XHR9LFxuXHRdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtczsiLCJjb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgICAgYXNzZXRVcmwsXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCBpbWFnZUJsb2NrID0gKCBhbHQgKSA9PiBbXG5cdCdjb3JlL2ltYWdlJyxcblx0e1xuXHRcdGFsdCxcblx0XHR1cmw6IGFzc2V0VXJsKCAnaW1nL2ltYWdlLXBsYWNlaG9sZGVyLmpwZycgKSxcblx0XHR3aWR0aDogMTAwLFxuXHRcdGhlaWdodDogMTAwLFxuXHR9LFxuXTtcblxuY29uc3QgdmFyaWF0aW9ucyA9IFtcblx0e1xuXHRcdG5hbWU6ICdzaW1wbGUtZW1wdHknLFxuXHRcdHRpdGxlOiBfXyggJ1NpbXBsZSBFbXB0eScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHRbICdqZXQtZm9ybXMvY2hvaWNlJyBdLFxuXHRcdFx0WyAnamV0LWZvcm1zL2Nob2ljZScgXSxcblx0XHRdLFxuXHRcdGlzRGVmYXVsdDogdHJ1ZSxcblx0XHRzY29wZTogWyAnaGlkZGVuJyBdLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3NpbXBsZS1idXR0b25zJyxcblx0XHR0aXRsZTogX18oICdUZXh0JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0ZGVzY3JpcHRpb246IF9fKFxuXHRcdFx0J1NpbXBsZSBidXR0b25zIGxpc3Qgd2l0aCBsYWJlbHMnLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCksXG5cdFx0aWNvbjogPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHQ8cGF0aCBkPVwiTTI0LjcxMjUgMTAuNzAxN0MyNS4xIDEwLjMwODIgMjUuMDk1MiA5LjY3NTA1IDI0LjcwMTcgOS4yODc1MkMyNC4zMDgyIDguODk5OTggMjMuNjc1IDguOTA0ODIgMjMuMjg3NSA5LjI5ODMxTDEyLjE2MDkgMjAuNTk2MUw4LjY5MTIyIDE3LjI3NzRDOC4yOTIxMiAxNi44OTU2IDcuNjU5MTEgMTYuOTA5NyA3LjI3NzM2IDE3LjMwODhDNi44OTU2MSAxNy43MDc5IDYuOTA5NjcgMTguMzQwOSA3LjMwODc4IDE4LjcyMjZMMTIuMjAyOCAyMy40MDM5TDI0LjcxMjUgMTAuNzAxN1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCA0QzAgMS43OTA4NiAxLjc5MDg2IDAgNCAwSDI4QzMwLjIwOTEgMCAzMiAxLjc5MDg2IDMyIDRWMjhDMzIgMzAuMjA5MSAzMC4yMDkxIDMyIDI4IDMySDRDMS43OTA4NiAzMiAwIDMwLjIwOTEgMCAyOFY0Wk00IDJIMjhDMjkuMTA0NiAyIDMwIDIuODk1NDMgMzAgNFYyOEMzMCAyOS4xMDQ2IDI5LjEwNDYgMzAgMjggMzBINEMyLjg5NTQzIDMwIDIgMjkuMTA0NiAyIDI4VjRDMiAyLjg5NTQzIDIuODk1NDMgMiA0IDJaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0PC9zdmc+LFxuXHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHRbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnQm9vayBOYW1lICMxJyxcblx0XHRcdFx0XHRjYWxjX3ZhbHVlOiAnMTAwJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHR7IGNvbnRlbnQ6ICdCb29rIE5hbWUgIzEnIH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XSxcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnQm9vayBOYW1lICMyJyxcblx0XHRcdFx0XHRjYWxjX3ZhbHVlOiAnMjAwJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHR7IGNvbnRlbnQ6ICdCb29rIE5hbWUgIzInIH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XSxcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnQm9vayBOYW1lICMzJyxcblx0XHRcdFx0XHRjYWxjX3ZhbHVlOiAnMjAwJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHR7IGNvbnRlbnQ6ICdCb29rIE5hbWUgIzMnIH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XSxcblx0XHRcdF0sXG5cdFx0XSxcblx0XHRzY29wZTogWyAnYmxvY2snIF0sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnaW1hZ2VzJyxcblx0XHR0aXRsZTogX18oICdJbWFnZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRkZXNjcmlwdGlvbjogX18oXG5cdFx0XHQnSW1hZ2UgYnV0dG9ucycsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSxcblx0XHRpY29uOiA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTYuNSAxNUMxOC40MzMgMTUgMjAgMTMuNDMzIDIwIDExLjVDMjAgOS41NjcgMTguNDMzIDggMTYuNSA4QzE0LjU2NyA4IDEzIDkuNTY3IDEzIDExLjVDMTMgMTMuNDMzIDE0LjU2NyAxNSAxNi41IDE1Wk0xNi41IDEzQzE3LjMyODQgMTMgMTggMTIuMzI4NCAxOCAxMS41QzE4IDEwLjY3MTYgMTcuMzI4NCAxMCAxNi41IDEwQzE1LjY3MTYgMTAgMTUgMTAuNjcxNiAxNSAxMS41QzE1IDEyLjMyODQgMTUuNjcxNiAxMyAxNi41IDEzWlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdFx0PHBhdGggZD1cIk0yMC43OTE3IDE3LjI5ODVDMjAuNjAzNyAxNy4xMDc2IDIwLjM0NjkgMTcgMjAuMDc4OSAxN0MxOS44MTEgMTcgMTkuNTU0MiAxNy4xMDc2IDE5LjM2NjIgMTcuMjk4NUwxNS4xNTc5IDIxLjU3NDRMMTIuMjkxNyAxOC42NjIyQzEyLjEwMzcgMTguNDcxMiAxMS44NDY5IDE4LjM2MzYgMTEuNTc4OSAxOC4zNjM2QzExLjMxMSAxOC4zNjM2IDExLjA1NDIgMTguNDcxMiAxMC44NjYyIDE4LjY2MjJMNy4yODcyOSAyMi4yOTg1QzYuODk5ODkgMjIuNjkyMiA2LjkwNDkyIDIzLjMyNTMgNy4yOTg1NCAyMy43MTI3QzcuNjkyMTYgMjQuMTAwMSA4LjMyNTMxIDI0LjA5NTEgOC43MTI3MSAyMy43MDE1TDExLjU3ODkgMjAuNzg5MkwxNC40NDUyIDIzLjcwMTVDMTQuNjMzMiAyMy44OTI0IDE0Ljg4OTkgMjQgMTUuMTU3OSAyNEMxNS40MjU5IDI0IDE1LjY4MjYgMjMuODkyNCAxNS44NzA2IDIzLjcwMTVMMjAuMDc4OSAxOS40MjU2TDI0LjI4NzMgMjMuNzAxNUMyNC42NzQ3IDI0LjA5NTEgMjUuMzA3OCAyNC4xMDAxIDI1LjcwMTUgMjMuNzEyN0MyNi4wOTUxIDIzLjMyNTMgMjYuMTAwMSAyMi42OTIyIDI1LjcxMjcgMjIuMjk4NUwyMC43OTE3IDE3LjI5ODVaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgNEMwIDEuNzkwODYgMS43OTA4NiAwIDQgMEgyOEMzMC4yMDkxIDAgMzIgMS43OTA4NiAzMiA0VjI4QzMyIDMwLjIwOTEgMzAuMjA5MSAzMiAyOCAzMkg0QzEuNzkwODYgMzIgMCAzMC4yMDkxIDAgMjhWNFpNNCAySDI4QzI5LjEwNDYgMiAzMCAyLjg5NTQzIDMwIDRWMjhDMzAgMjkuMTA0NiAyOS4xMDQ2IDMwIDI4IDMwSDRDMi44OTU0MyAzMCAyIDI5LjEwNDYgMiAyOFY0QzIgMi44OTU0MyAyLjg5NTQzIDIgNCAyWlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDwvc3ZnPixcblx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0W1xuXHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2sgTmFtZSAjMScsXG5cdFx0XHRcdFx0Y2FsY192YWx1ZTogJzEwMCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRpbWFnZUJsb2NrKCAnQm9vayBOYW1lICMxJyApLFxuXHRcdFx0XHRdLFxuXHRcdFx0XSxcblx0XHRcdFtcblx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICdCb29rIE5hbWUgIzInLFxuXHRcdFx0XHRcdGNhbGNfdmFsdWU6ICcyMDAnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0aW1hZ2VCbG9jayggJ0Jvb2sgTmFtZSAjMicgKSxcblx0XHRcdFx0XSxcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnQm9vayBOYW1lICMzJyxcblx0XHRcdFx0XHRjYWxjX3ZhbHVlOiAnMjAwJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGltYWdlQmxvY2soICdCb29rIE5hbWUgIzMnICksXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdF0sXG5cdFx0c2NvcGU6IFsgJ2Jsb2NrJyBdLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2J1dHRvbnMtd2l0aC1pbWFnZXMnLFxuXHRcdHRpdGxlOiBfXyggJ0ltYWdlcyB3aXRoIGRlc2NyaXB0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0ZGVzY3JpcHRpb246IF9fKFxuXHRcdFx0J0ltYWdlIGJ1dHRvbnMgd2l0aCBsYWJlbHMgaW4gZm9vdGVyJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpLFxuXHRcdGljb246IDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjM4XCIgdmlld0JveD1cIjAgMCAzMiAzOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNi41IDEzQzE4LjQzMyAxMyAyMCAxMS40MzMgMjAgOS41QzIwIDcuNTY3IDE4LjQzMyA2IDE2LjUgNkMxNC41NjcgNiAxMyA3LjU2NyAxMyA5LjVDMTMgMTEuNDMzIDE0LjU2NyAxMyAxNi41IDEzWk0xNi41IDExQzE3LjMyODQgMTEgMTggMTAuMzI4NCAxOCA5LjVDMTggOC42NzE1NyAxNy4zMjg0IDggMTYuNSA4QzE1LjY3MTYgOCAxNSA4LjY3MTU3IDE1IDkuNUMxNSAxMC4zMjg0IDE1LjY3MTYgMTEgMTYuNSAxMVpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHRcdDxwYXRoIGQ9XCJNMjAuNzkxNyAxNS4yOTg1QzIwLjYwMzcgMTUuMTA3NiAyMC4zNDY5IDE1IDIwLjA3ODkgMTVDMTkuODExIDE1IDE5LjU1NDIgMTUuMTA3NiAxOS4zNjYyIDE1LjI5ODVMMTUuMTU3OSAxOS41NzQ0TDEyLjI5MTcgMTYuNjYyMkMxMi4xMDM3IDE2LjQ3MTIgMTEuODQ2OSAxNi4zNjM2IDExLjU3ODkgMTYuMzYzNkMxMS4zMTEgMTYuMzYzNiAxMS4wNTQyIDE2LjQ3MTIgMTAuODY2MiAxNi42NjIyTDcuMjg3MjkgMjAuMjk4NUM2Ljg5OTg5IDIwLjY5MjIgNi45MDQ5MiAyMS4zMjUzIDcuMjk4NTQgMjEuNzEyN0M3LjY5MjE2IDIyLjEwMDEgOC4zMjUzMSAyMi4wOTUxIDguNzEyNzEgMjEuNzAxNUwxMS41Nzg5IDE4Ljc4OTJMMTQuNDQ1MiAyMS43MDE1QzE0LjYzMzIgMjEuODkyNCAxNC44ODk5IDIyIDE1LjE1NzkgMjJDMTUuNDI1OSAyMiAxNS42ODI2IDIxLjg5MjQgMTUuODcwNiAyMS43MDE1TDIwLjA3ODkgMTcuNDI1NkwyNC4yODczIDIxLjcwMTVDMjQuNjc0NyAyMi4wOTUxIDI1LjMwNzggMjIuMTAwMSAyNS43MDE1IDIxLjcxMjdDMjYuMDk1MSAyMS4zMjUzIDI2LjEwMDEgMjAuNjkyMiAyNS43MTI3IDIwLjI5ODVMMjAuNzkxNyAxNS4yOTg1WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDRDMCAxLjc5MDg2IDEuNzkwODYgMCA0IDBIMjhDMzAuMjA5MSAwIDMyIDEuNzkwODYgMzIgNFYyNEMzMiAyNi4yMDkxIDMwLjIwOTEgMjggMjggMjhINEMxLjc5MDg2IDI4IDAgMjYuMjA5MSAwIDI0VjRaTTQgMkgyOEMyOS4xMDQ2IDIgMzAgMi44OTU0MyAzMCA0VjI0QzMwIDI1LjEwNDYgMjkuMTA0NiAyNiAyOCAyNkg0QzIuODk1NDMgMjYgMiAyNS4xMDQ2IDIgMjRWNEMyIDIuODk1NDMgMi44OTU0MyAyIDQgMlpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHRcdDxwYXRoIGQ9XCJNMSAzMkMwLjQ0NzcxNSAzMiAwIDMyLjQ0NzcgMCAzM0MwIDMzLjU1MjMgMC40NDc3MTUgMzQgMSAzNEgzMUMzMS41NTIzIDM0IDMyIDMzLjU1MjMgMzIgMzNDMzIgMzIuNDQ3NyAzMS41NTIzIDMyIDMxIDMySDFaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0XHQ8cGF0aCBkPVwiTTAgMzdDMCAzNi40NDc3IDAuNDQ3NzE1IDM2IDEgMzZIMjdDMjcuNTUyMyAzNiAyOCAzNi40NDc3IDI4IDM3QzI4IDM3LjU1MjMgMjcuNTUyMyAzOCAyNyAzOEgxQzAuNDQ3NzE1IDM4IDAgMzcuNTUyMyAwIDM3WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDwvc3ZnPixcblx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0W1xuXHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2sgTmFtZSAjMScsXG5cdFx0XHRcdFx0Y2FsY192YWx1ZTogJzEwMCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRpbWFnZUJsb2NrKCAnQm9vayBOYW1lICMxJyApLFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHR7IGNvbnRlbnQ6ICdCb29rIE5hbWUgIzEnIH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XSxcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnQm9vayBOYW1lICMyJyxcblx0XHRcdFx0XHRjYWxjX3ZhbHVlOiAnMjAwJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGltYWdlQmxvY2soICdCb29rIE5hbWUgIzInICksXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0J2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdFx0XHRcdHsgY29udGVudDogJ0Jvb2sgTmFtZSAjMicgfSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRdLFxuXHRcdFx0XSxcblx0XHRcdFtcblx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICdCb29rIE5hbWUgIzMnLFxuXHRcdFx0XHRcdGNhbGNfdmFsdWU6ICcyMDAnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0aW1hZ2VCbG9jayggJ0Jvb2sgTmFtZSAjMycgKSxcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0eyBjb250ZW50OiAnQm9vayBOYW1lICMzJyB9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdF0sXG5cdFx0c2NvcGU6IFsgJ2Jsb2NrJyBdLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2ltYWdlcy13aXRoLWNvbnRyb2xzJyxcblx0XHR0aXRsZTogX18oICdJbWFnZXMgd2l0aCBjb250cm9scycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyhcblx0XHRcdCdJbWFnZSBidXR0b25zIHdpdGggY29udHJvbHMgaW4gZm9vdGVyJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpLFxuXHRcdGljb246IDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIjAgMCAzMiA0MFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk01IDBDMi4yMzg1OCAwIDAgMi4yMzg1OCAwIDVDMCA3Ljc2MTQyIDIuMjM4NTggMTAgNSAxMEM3Ljc2MTQyIDEwIDEwIDcuNzYxNDIgMTAgNUMxMCAyLjIzODU4IDcuNzYxNDIgMCA1IDBaTTIgNUMyIDYuNjU2ODUgMy4zNDMxNSA4IDUgOEM2LjY1Njg1IDggOCA2LjY1Njg1IDggNUM4IDMuMzQzMTUgNi42NTY4NSAyIDUgMkMzLjM0MzE1IDIgMiAzLjM0MzE1IDIgNVpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHRcdDxwYXRoIGQ9XCJNMTIgM0MxMiAyLjQ0NzcyIDEyLjQ0NzcgMiAxMyAySDMxQzMxLjU1MjMgMiAzMiAyLjQ0NzcyIDMyIDNDMzIgMy41NTIyOCAzMS41NTIzIDQgMzEgNEgxM0MxMi40NDc3IDQgMTIgMy41NTIyOCAxMiAzWlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNi41IDI1QzE4LjQzMyAyNSAyMCAyMy40MzMgMjAgMjEuNUMyMCAxOS41NjcgMTguNDMzIDE4IDE2LjUgMThDMTQuNTY3IDE4IDEzIDE5LjU2NyAxMyAyMS41QzEzIDIzLjQzMyAxNC41NjcgMjUgMTYuNSAyNVpNMTYuNSAyM0MxNy4zMjg0IDIzIDE4IDIyLjMyODQgMTggMjEuNUMxOCAyMC42NzE2IDE3LjMyODQgMjAgMTYuNSAyMEMxNS42NzE2IDIwIDE1IDIwLjY3MTYgMTUgMjEuNUMxNSAyMi4zMjg0IDE1LjY3MTYgMjMgMTYuNSAyM1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHRcdDxwYXRoIGQ9XCJNMjAuNzkxNyAyNy4yOTg1QzIwLjYwMzcgMjcuMTA3NiAyMC4zNDY5IDI3IDIwLjA3ODkgMjdDMTkuODExIDI3IDE5LjU1NDIgMjcuMTA3NiAxOS4zNjYyIDI3LjI5ODVMMTUuMTU3OSAzMS41NzQ0TDEyLjI5MTcgMjguNjYyMkMxMi4xMDM3IDI4LjQ3MTIgMTEuODQ2OSAyOC4zNjM2IDExLjU3ODkgMjguMzYzNkMxMS4zMTEgMjguMzYzNiAxMS4wNTQyIDI4LjQ3MTIgMTAuODY2MiAyOC42NjIyTDcuMjg3MjkgMzIuMjk4NUM2Ljg5OTg5IDMyLjY5MjIgNi45MDQ5MiAzMy4zMjUzIDcuMjk4NTQgMzMuNzEyN0M3LjY5MjE2IDM0LjEwMDEgOC4zMjUzMSAzNC4wOTUxIDguNzEyNzEgMzMuNzAxNUwxMS41Nzg5IDMwLjc4OTJMMTQuNDQ1MiAzMy43MDE1QzE0LjYzMzIgMzMuODkyNCAxNC44ODk5IDM0IDE1LjE1NzkgMzRDMTUuNDI1OSAzNCAxNS42ODI2IDMzLjg5MjQgMTUuODcwNiAzMy43MDE1TDIwLjA3ODkgMjkuNDI1NkwyNC4yODczIDMzLjcwMTVDMjQuNjc0NyAzNC4wOTUxIDI1LjMwNzggMzQuMTAwMSAyNS43MDE1IDMzLjcxMjdDMjYuMDk1MSAzMy4zMjUzIDI2LjEwMDEgMzIuNjkyMiAyNS43MTI3IDMyLjI5ODVMMjAuNzkxNyAyNy4yOTg1WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk00IDEyQzEuNzkwODYgMTIgMCAxMy43OTA5IDAgMTZWMzZDMCAzOC4yMDkxIDEuNzkwODYgNDAgNCA0MEgyOEMzMC4yMDkxIDQwIDMyIDM4LjIwOTEgMzIgMzZWMTZDMzIgMTMuNzkwOSAzMC4yMDkxIDEyIDI4IDEySDRaTTI4IDE0SDRDMi44OTU0MyAxNCAyIDE0Ljg5NTQgMiAxNlYzNkMyIDM3LjEwNDYgMi44OTU0MyAzOCA0IDM4SDI4QzI5LjEwNDYgMzggMzAgMzcuMTA0NiAzMCAzNlYxNkMzMCAxNC44OTU0IDI5LjEwNDYgMTQgMjggMTRaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0XHQ8cGF0aCBkPVwiTTEzIDZDMTIuNDQ3NyA2IDEyIDYuNDQ3NzIgMTIgN0MxMiA3LjU1MjI4IDEyLjQ0NzcgOCAxMyA4SDMxQzMxLjU1MjMgOCAzMiA3LjU1MjI4IDMyIDdDMzIgNi40NDc3MiAzMS41NTIzIDYgMzEgNkgxM1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8L3N2Zz4sXG5cdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdFtcblx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICdCb29rIE5hbWUgIzEnLFxuXHRcdFx0XHRcdGNhbGNfdmFsdWU6ICcxMDAnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0aW1hZ2VCbG9jayggJ0Jvb2sgTmFtZSAjMScgKSxcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZS1jb250cm9sJyxcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdCb29rIE5hbWUgIzEnIH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XSxcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnQm9vayBOYW1lICMyJyxcblx0XHRcdFx0XHRjYWxjX3ZhbHVlOiAnMjAwJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGltYWdlQmxvY2soICdCb29rIE5hbWUgIzInICksXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UtY29udHJvbCcsXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiAnQm9vayBOYW1lICMxJyB9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2sgTmFtZSAjMycsXG5cdFx0XHRcdFx0Y2FsY192YWx1ZTogJzIwMCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRpbWFnZUJsb2NrKCAnQm9vayBOYW1lICMzJyApLFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlLWNvbnRyb2wnLFxuXHRcdFx0XHRcdFx0eyBsYWJlbDogJ0Jvb2sgTmFtZSAjMScgfSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRdLFxuXHRcdFx0XSxcblx0XHRdLFxuXHRcdHNjb3BlOiBbICdibG9jaycgXSxcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHZhcmlhdGlvbnM7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgY2hvaWNlc0ZpZWxkIGZyb20gJy4vY2hvaWNlcy1maWVsZCc7XG5pbXBvcnQgKiBhcyBjaG9pY2UgZnJvbSAnLi9jaG9pY2UnO1xuaW1wb3J0ICogYXMgY2hvaWNlQ29udHJvbCBmcm9tICcuL2Nob2ljZS1jb250cm9sJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRGaWx0ZXIsXG4gICAgICB9ID0gd3AuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZWdpc3Rlci5maWVsZHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9hZHZhbmNlZC1jaG9pY2VzJyxcblx0ZnVuY3Rpb24gKCBibG9ja3MgKSB7XG5cdFx0YmxvY2tzLnB1c2goXG5cdFx0XHRjaG9pY2VzRmllbGQsXG5cdFx0XHRjaG9pY2UsXG5cdFx0XHRjaG9pY2VDb250cm9sLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gYmxvY2tzO1xuXHR9LFxuKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=