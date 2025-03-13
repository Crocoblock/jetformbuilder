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
    'is-checked': isChecked
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
    instructions: __('You can select one of predefined layout, or build custom', 'jet-form-builder'),
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVdBO0FBQUE7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxVEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBS0E7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FDNVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFNQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlLWNvbnRyb2wvZWRpdC5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2UtY29udHJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2UtY29udHJvbC9wcmV2aWV3LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS9Ub2dnbGVDaGVja1N0YXRlQnV0dG9uLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS9jb250ZXh0LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS9lZGl0LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2UvcHJldmlldy5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2Uvc2F2ZS5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2UvdXNlQWxsb3dlZEJsb2Nrcy5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2UvdXNlQ2hlY2tlZENob2ljZVN0YXRlLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZXMtZmllbGQvQWRkQ2hvaWNlQnV0dG9uLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZXMtZmllbGQvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2VzLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlcy1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2VzLWZpZWxkL3BsYWNlaG9sZGVyLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZXMtZmllbGQvcHJldmlldy5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci9jaG9pY2VzLWZpZWxkL3NhdmUuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvY2hvaWNlcy1maWVsZC90cmFuc2Zvcm1zLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL2Nob2ljZXMtZmllbGQvdmFyaWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlQ2hlY2tlZENob2ljZVN0YXRlIGZyb20gJy4uL2Nob2ljZS91c2VDaGVja2VkQ2hvaWNlU3RhdGUnO1xuaW1wb3J0IFRvZ2dsZUNoZWNrU3RhdGVCdXR0b24gZnJvbSAnLi4vY2hvaWNlL1RvZ2dsZUNoZWNrU3RhdGVCdXR0b24nO1xuaW1wb3J0IHByZXZpZXcgZnJvbSAnLi9wcmV2aWV3JztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcblx0ICAgICAgc3ByaW50ZixcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrUHJvcHMsXG5cdCAgICAgIFJpY2hUZXh0LFxuXHQgICAgICBJbnNwZWN0b3JDb250cm9scyxcblx0ICAgICAgTWVkaWFVcGxvYWQsXG5cdCAgICAgIE1lZGlhVXBsb2FkQ2hlY2ssXG5cdCAgICAgIEJsb2NrQ29udHJvbHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlSW5zdGFuY2VJZCxcbiAgICAgIH0gPSB3cC5jb21wb3NlO1xuXG5sZXQge1xuXHQgICAgQnV0dG9uLFxuXHQgICAgUGFuZWxCb2R5LFxuXHQgICAgUmFuZ2VDb250cm9sLFxuXHQgICAgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2wsXG5cdCAgICBUb2dnbGVHcm91cENvbnRyb2wsXG5cdCAgICBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbixcblx0ICAgIFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbixcbiAgICB9ID0gd3AuY29tcG9uZW50cztcblxuVG9nZ2xlR3JvdXBDb250cm9sID0gKFxuXHRUb2dnbGVHcm91cENvbnRyb2wgfHwgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2xcbik7XG5cblRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbiA9IChcblx0VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uIHx8IF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uXG4pO1xuXG5jb25zdCB7XG5cdCAgICAgIEJhc2VIZWxwLFxuXHQgICAgICBCYXNlTGFiZWwsXG5cdCAgICAgIFN0eWxlUGFuZWwsXG5cdCAgICAgIFN0eWxlUGFuZWxJdGVtLFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdHlsZSxcblx0ICAgICAgdXNlSmV0U3R5bGUsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuZnVuY3Rpb24gU2ltcGxlQ2hvb3NlTWVkaWFCdXR0b24oIHsgb3BlbiwgaGFzVmFsdWUgPSBmYWxzZSB9ICkge1xuXHRyZXR1cm4gPEJ1dHRvblxuXHRcdGlzU2Vjb25kYXJ5XG5cdFx0aXNTbWFsbFxuXHRcdGljb249XCJlZGl0XCJcblx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0Y2xhc3NOYW1lPXsgaGFzVmFsdWUgPyAnamV0LWZiIGhhcy12YWx1ZScgOiAnJyB9XG5cdFx0bGFiZWw9eyBoYXNWYWx1ZSA/IF9fKCAnRWRpdCBpY29uJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHQgICAgICAgICAgICAgICAgIDogX18oICdDaG9vc2UgaWNvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0PlxuXHRcdHsgaGFzVmFsdWVcblx0XHQgID8gX18oICdFZGl0JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHQgIDogX18oICdDaG9vc2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdDwvQnV0dG9uPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdENob2ljZUNoZWNrKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIGNvbnRleHQsXG5cdFx0ICAgICAgc2V0QXR0cmlidXRlcyxcblx0XHQgICAgICBhdHRyaWJ1dGVzLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgICdqZXQtZm9ybXMvY2hvaWNlcy1maWVsZC0tbXVsdGlwbGUnOiBpc011bHRpcGxlLFxuXHRcdCAgICAgICdqZXQtZm9ybXMvY2hvaWNlcy1maWVsZC0tbmFtZSc6IGZpZWxkTmFtZSxcblx0ICAgICAgfSA9IGNvbnRleHQ7XG5cblx0Y29uc3QgamV0U3R5bGUgPSB1c2VKZXRTdHlsZSgpO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCB7XG5cdFx0Y2xhc3NOYW1lOiBzcHJpbnRmKFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtLWNvbnRyb2wgJXMnLFxuXHRcdFx0amV0U3R5bGUuY2xhc3NOYW1lXG5cdFx0KSxcblx0XHRzdHlsZTogamV0U3R5bGUuc3R5bGUsXG5cdH0gKTtcblxuXHRjb25zdCBpbnN0YW5jZUlkID0gdXNlSW5zdGFuY2VJZCggRWRpdENob2ljZUNoZWNrLCBmaWVsZE5hbWUgKTtcblxuXHRjb25zdCBbIGlzQ2hlY2tlZCwgdG9nZ2xlQ2hlY2tlZCBdID0gdXNlQ2hlY2tlZENob2ljZVN0YXRlKCk7XG5cblx0Y29uc3QgY29udHJvbEltYWdlVXJsID0gKFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICggJ2ltYWdlJyAhPT0gYXR0cmlidXRlcy5jb250cm9sX3R5cGUgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGlzQ2hlY2tlZFxuXHRcdFx0ICAgICAgID8gYXR0cmlidXRlcz8uY2hlY2tlZF9pbWFnZV9jb250cm9sPy51cmxcblx0XHRcdCAgICAgICA6IGF0dHJpYnV0ZXM/LmRlZmF1bHRfaW1hZ2VfY29udHJvbD8udXJsO1xuXHRcdH1cblx0KSgpO1xuXG5cdGNvbnN0IFsgd2lkdGgsIHNldFdpZHRoIF0gPSB1c2VTdHlsZSggJy0tamZiLWNob2ljZS1jb250cm9sLXdpZHRoJyApO1xuXHRjb25zdCB3aWR0aEludCAgICAgICAgICAgID0gcGFyc2VJbnQoIHdpZHRoICk7XG5cblx0aWYgKCBhdHRyaWJ1dGVzLmlzUHJldmlldyApIHtcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17IHtcblx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0fSB9PlxuXHRcdFx0eyBwcmV2aWV3IH1cblx0XHQ8L2Rpdj47XG5cdH1cblxuXHRyZXR1cm4gPD5cblx0XHQ8QmxvY2tDb250cm9scyBncm91cD17ICdibG9jaycgfT5cblx0XHRcdDxUb2dnbGVDaGVja1N0YXRlQnV0dG9uLz5cblx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0PHNwYW4geyAuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHR7ICEhY29udHJvbEltYWdlVXJsXG5cdFx0XHQgID8gPGltZ1xuXHRcdFx0XHQgIHNyYz17IGNvbnRyb2xJbWFnZVVybCB9XG5cdFx0XHRcdCAgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtLWNvbnRyb2wtaW1nJyB9XG5cdFx0XHRcdCAgYWx0PXsgZmllbGROYW1lICsgJyAnICsgX18oICdjb250cm9sJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0ICAvPlxuXHRcdFx0ICA6IDxpbnB1dFxuXHRcdFx0XHQgIGlkPXsgaW5zdGFuY2VJZCB9XG5cdFx0XHRcdCAgdHlwZT17IGlzTXVsdGlwbGUgPyAnY2hlY2tib3gnIDogJ3JhZGlvJyB9XG5cdFx0XHRcdCAgY2hlY2tlZD17IGlzQ2hlY2tlZCB9XG5cdFx0XHRcdCAgb25DaGFuZ2U9eyAoKSA9PiB0b2dnbGVDaGVja2VkKCkgfVxuXHRcdFx0XHQgIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyLWNob2ljZS0taXRlbS1jb250cm9sLWlucHV0JyB9XG5cdFx0XHQgIC8+IH1cblx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHR0YWdOYW1lPXsgJ2xhYmVsJyB9XG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5sYWJlbCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbGFiZWwgPT4gc2V0QXR0cmlidXRlcyggeyBsYWJlbCB9ICkgfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnTGFiZWwgZm9yIGlucHV0Li4uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRtdWx0aWxpbmU9eyBmYWxzZSB9XG5cdFx0XHQvPlxuXHRcdDwvc3Bhbj5cblx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8ZGl2IHN0eWxlPXsgeyBwYWRkaW5nOiAnMjBweCcgfSB9PlxuXHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBjb250cm9sX3R5cGUgPT4gc2V0QXR0cmlidXRlcyhcblx0XHRcdFx0XHRcdHsgY29udHJvbF90eXBlIH0gKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNvbnRyb2xfdHlwZSB9XG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NvbnRyb2wgdHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRpc0Jsb2NrPXsgdHJ1ZSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uXG5cdFx0XHRcdFx0XHRsYWJlbD17IGlzTXVsdGlwbGVcblx0XHRcdFx0XHRcdCAgICAgICAgPyBfXyggJ0NoZWNrYm94IGlucHV0JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdFx0XHRcdCAgICAgICAgOiBfXyggJ1JhZGlvIGlucHV0JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgJycgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvblxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ltYWdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyAnaW1hZ2UnIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1RvZ2dsZUdyb3VwQ29udHJvbD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0eyAnaW1hZ2UnID09PSBhdHRyaWJ1dGVzLmNvbnRyb2xfdHlwZSAmJiA8PlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0XHR0aXRsZT17IF9fKCAnQ29udHJvbCBEZWZhdWx0JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfT5cblx0XHRcdFx0XHRcdDxCYXNlTGFiZWwgbGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0J0RlZmF1bHQgaWNvbicsXG5cdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHRcdCkgfT5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBtZWRpYSA9PiBzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0X2ltYWdlX2NvbnRyb2w6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXMuZGVmYXVsdF9pbWFnZV9jb250cm9sID8/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e31cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkOiBtZWRpYS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBbICdpbWFnZS8qJyBdIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZGVmYXVsdF9pbWFnZV9jb250cm9sPy5pZCB9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXtcblx0XHRcdFx0XHRcdFx0XHRcdCggeyBvcGVuIH0gKSA9PiA8U2ltcGxlQ2hvb3NlTWVkaWFCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0b3Blbj17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17ICEhYXR0cmlidXRlcy5kZWZhdWx0X2ltYWdlX2NvbnRyb2w/LnVybCB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0eyAhIWF0dHJpYnV0ZXMuZGVmYXVsdF9pbWFnZV9jb250cm9sPy51cmwgJiYgPEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0aWNvbj1cIm5vLWFsdFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRfaW1hZ2VfY29udHJvbDoge30sXG5cdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0J1JlbW92ZSBkZWZhdWx0IGljb24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHQ8L0Jhc2VMYWJlbD5cblx0XHRcdFx0XHRcdHsgISFhdHRyaWJ1dGVzLmRlZmF1bHRfaW1hZ2VfY29udHJvbD8udXJsICYmIDw+XG5cdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRzcmM9eyBhdHRyaWJ1dGVzLmRlZmF1bHRfaW1hZ2VfY29udHJvbD8udXJsIH1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRcdFx0XHRcdG1heFdpZHRoOiAnMTUwcHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiAnMTUwcHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAnMWVtIDAnLFxuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC8+IH1cblx0XHRcdFx0XHRcdDxCYXNlSGVscD5cblx0XHRcdFx0XHRcdFx0eyBfXyhcblx0XHRcdFx0XHRcdFx0XHQnQ2hvb3NlIGljb24gZm9yIGRlZmF1bHQgc3RhdGUgb2YgY2hvaWNlJyxcblx0XHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0PC9CYXNlSGVscD5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0XHR0aXRsZT17IF9fKCAnQ29udHJvbCBDaGVja2VkJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCYXNlTGFiZWxcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHQnQ2hlY2tlZCBJY29uJyxcblx0XHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG1lZGlhID0+IHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWRfaW1hZ2VfY29udHJvbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi4oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXR0cmlidXRlcy5jaGVja2VkX2ltYWdlX2NvbnRyb2wgPz9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IG1lZGlhLnVybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IFsgJ2ltYWdlLyonIF0gfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jaGVja2VkX2ltYWdlX2NvbnRyb2w/LmlkIH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9e1xuXHRcdFx0XHRcdFx0XHRcdFx0KCB7IG9wZW4gfSApID0+IDxTaW1wbGVDaG9vc2VNZWRpYUJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcGVuPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsgISFhdHRyaWJ1dGVzLmNoZWNrZWRfaW1hZ2VfY29udHJvbD8udXJsIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7ICEhYXR0cmlidXRlcy5jaGVja2VkX2ltYWdlX2NvbnRyb2w/LnVybCAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0XHRpY29uPVwibm8tYWx0XCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZF9pbWFnZV9jb250cm9sOiB7fSxcblx0XHRcdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0XHQnUmVtb3ZlIGNoZWNrZWQgaWNvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHRcdDwvQmFzZUxhYmVsPlxuXHRcdFx0XHRcdFx0eyAhIWF0dHJpYnV0ZXMuY2hlY2tlZF9pbWFnZV9jb250cm9sPy51cmwgJiYgPD5cblx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdHNyYz17IGF0dHJpYnV0ZXMuY2hlY2tlZF9pbWFnZV9jb250cm9sPy51cmwgfVxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWF4V2lkdGg6ICcxNTBweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcxNTBweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW46ICcxZW0gMCcsXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz4gfVxuXHRcdFx0XHRcdFx0PEJhc2VIZWxwPlxuXHRcdFx0XHRcdFx0XHR7IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdDaG9vc2UgaWNvbiBmb3IgY2hlY2tlZCBzdGF0ZSBvZiBjaG9pY2UnLFxuXHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHQ8L0Jhc2VIZWxwPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGdyb3VwPXsgJ3N0eWxlcycgfT5cblx0XHRcdFx0PFN0eWxlUGFuZWwgbGFiZWw9eyBfXyggJ0ltYWdlIGNvbnRyb2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHRcdDxTdHlsZVBhbmVsSXRlbVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1dpZHRoJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0Y3NzVmFyPVwiLS1qZmItY2hvaWNlLWNvbnRyb2wtd2lkdGhcIlxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPVwiMjRweFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0YFNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBpbWFnZSBpbiBwaXhlbHMuYCxcblx0XHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRpbml0aWFsUG9zaXRpb249eyAyNCB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdXaWR0aCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB3aWR0aEludCB9XG5cdFx0XHRcdFx0XHRcdG1heD17IDIwMCB9XG5cdFx0XHRcdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgPT4gc2V0V2lkdGgoIHZhbHVlID8gYCR7IHZhbHVlIH1weGAgOiAwIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1N0eWxlUGFuZWxJdGVtPlxuXHRcdFx0XHQ8L1N0eWxlUGFuZWw+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdDwvPiB9XG5cdDwvPjtcbn0iLCJpbXBvcnQgRWRpdENob2ljZUNoZWNrIGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnQGJsb2Nrcy9jaG9pY2UtY29udHJvbC9ibG9jay5qc29uJztcblxuY29uc3Qge1xuXHQgICAgICBuYW1lLFxuXHQgICAgICBpY29uLFxuICAgICAgfSA9IG1ldGFkYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRkZXNjcmlwdGlvbjogX18oXG5cdFx0YEdldCB0aGUgYWRqdXN0aW5nIG9wdGlvbnMgZm9yIHRoZSBJbWFnZSBhbmQgQ2hvaWNlIENvbnRyb2wgYmxvY2sgXG53aXRoIFwiSW1hZ2VzIGFuZCBDb250cm9sc1wiIGxheW91dCBvZiB0aGUgQWR2YW5jZWQgQ2hvaWNlcyBGaWVsZC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0ZWRpdDogRWRpdENob2ljZUNoZWNrLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3MsXG59O1xuIiwiY29uc3QgcHJldmlldyA9IChcblx0PHN2ZyB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHZpZXdCb3g9XCIwIDAgMjk4IDE0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxyZWN0IHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgcng9XCI0XCIgZmlsbD1cIiNFMkU4RjBcIi8+XG5cdFx0PHJlY3QgeD1cIjUwXCIgeT1cIjI2XCIgd2lkdGg9XCIxOThcIiBoZWlnaHQ9XCI5MlwiIHJ4PVwiOFwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHQ8cGF0aCBkPVwiTTEyNC4yMzQgNzQuNDc4NUgxMjYuMTA5QzEyNi4wMTIgNzUuMzc3IDEyNS43NTUgNzYuMTgxIDEyNS4zMzggNzYuODkwNkMxMjQuOTIxIDc3LjYwMDMgMTI0LjMzMiA3OC4xNjM0IDEyMy41NyA3OC41ODAxQzEyMi44MDkgNzguOTkwMiAxMjEuODU4IDc5LjE5NTMgMTIwLjcxOSA3OS4xOTUzQzExOS44ODUgNzkuMTk1MyAxMTkuMTI3IDc5LjAzOTEgMTE4LjQ0MyA3OC43MjY2QzExNy43NjYgNzguNDE0MSAxMTcuMTg0IDc3Ljk3MTQgMTE2LjY5NSA3Ny4zOTg0QzExNi4yMDcgNzYuODE5IDExNS44MjkgNzYuMTI1NyAxMTUuNTYyIDc1LjMxODRDMTE1LjMwMiA3NC41MDQ2IDExNS4xNzIgNzMuNTk5NiAxMTUuMTcyIDcyLjYwMzVWNzEuMTg3NUMxMTUuMTcyIDcwLjE5MTQgMTE1LjMwMiA2OS4yODk3IDExNS41NjIgNjguNDgyNEMxMTUuODI5IDY3LjY2ODYgMTE2LjIxIDY2Ljk3MiAxMTYuNzA1IDY2LjM5MjZDMTE3LjIwNiA2NS44MTMyIDExNy44MDkgNjUuMzY3MiAxMTguNTEyIDY1LjA1NDdDMTE5LjIxNSA2NC43NDIyIDEyMC4wMDYgNjQuNTg1OSAxMjAuODg1IDY0LjU4NTlDMTIxLjk1OSA2NC41ODU5IDEyMi44NjcgNjQuNzg3OCAxMjMuNjA5IDY1LjE5MTRDMTI0LjM1MiA2NS41OTUxIDEyNC45MjggNjYuMTU0OSAxMjUuMzM4IDY2Ljg3MTFDMTI1Ljc1NSA2Ny41ODA3IDEyNi4wMTIgNjguNDA0MyAxMjYuMTA5IDY5LjM0MThIMTI0LjIzNEMxMjQuMTQzIDY4LjY3NzcgMTIzLjk3NCA2OC4xMDgxIDEyMy43MjcgNjcuNjMyOEMxMjMuNDc5IDY3LjE1MSAxMjMuMTI4IDY2Ljc3OTkgMTIyLjY3MiA2Ni41MTk1QzEyMi4yMTYgNjYuMjU5MSAxMjEuNjIgNjYuMTI4OSAxMjAuODg1IDY2LjEyODlDMTIwLjI1MyA2Ni4xMjg5IDExOS42OTcgNjYuMjQ5MyAxMTkuMjE1IDY2LjQ5MDJDMTE4Ljc0IDY2LjczMTEgMTE4LjMzOSA2Ny4wNzI5IDExOC4wMTQgNjcuNTE1NkMxMTcuNjk1IDY3Ljk1ODMgMTE3LjQ1NCA2OC40ODg5IDExNy4yOTEgNjkuMTA3NEMxMTcuMTI4IDY5LjcyNTkgMTE3LjA0NyA3MC40MTI4IDExNy4wNDcgNzEuMTY4VjcyLjYwMzVDMTE3LjA0NyA3My4zMDAxIDExNy4xMTggNzMuOTU0NCAxMTcuMjYyIDc0LjU2NjRDMTE3LjQxMSA3NS4xNzg0IDExNy42MzYgNzUuNzE1NSAxMTcuOTM2IDc2LjE3NzdDMTE4LjIzNSA3Ni42NCAxMTguNjE2IDc3LjAwNDYgMTE5LjA3OCA3Ny4yNzE1QzExOS41NCA3Ny41MzE5IDEyMC4wODcgNzcuNjYyMSAxMjAuNzE5IDc3LjY2MjFDMTIxLjUyIDc3LjY2MjEgMTIyLjE1OCA3Ny41MzUyIDEyMi42MzMgNzcuMjgxMkMxMjMuMTA4IDc3LjAyNzMgMTIzLjQ2NiA3Ni42NjI4IDEyMy43MDcgNzYuMTg3NUMxMjMuOTU0IDc1LjcxMjIgMTI0LjEzIDc1LjE0MjYgMTI0LjIzNCA3NC40Nzg1Wk0xMzAuMjExIDY0Vjc5SDEyOC40MDRWNjRIMTMwLjIxMVpNMTI5Ljc4MSA3My4zMTY0TDEyOS4wMjkgNzMuMjg3MUMxMjkuMDM2IDcyLjU2NDUgMTI5LjE0MyA3MS44OTcxIDEyOS4zNTIgNzEuMjg1MkMxMjkuNTYgNzAuNjY2NyAxMjkuODUzIDcwLjEyOTYgMTMwLjIzIDY5LjY3MzhDMTMwLjYwOCA2OS4yMTgxIDEzMS4wNTcgNjguODY2NSAxMzEuNTc4IDY4LjYxOTFDMTMyLjEwNSA2OC4zNjUyIDEzMi42ODggNjguMjM4MyAxMzMuMzI2IDY4LjIzODNDMTMzLjg0NyA2OC4yMzgzIDEzNC4zMTYgNjguMzA5OSAxMzQuNzMyIDY4LjQ1MzFDMTM1LjE0OSA2OC41ODk4IDEzNS41MDQgNjguODExMiAxMzUuNzk3IDY5LjExNzJDMTM2LjA5NiA2OS40MjMyIDEzNi4zMjQgNjkuODIwMyAxMzYuNDggNzAuMzA4NkMxMzYuNjM3IDcwLjc5MDQgMTM2LjcxNSA3MS4zNzk2IDEzNi43MTUgNzIuMDc2MlY3OUgxMzQuODk4VjcyLjA1NjZDMTM0Ljg5OCA3MS41MDMzIDEzNC44MTcgNzEuMDYwNSAxMzQuNjU0IDcwLjcyODVDMTM0LjQ5MiA3MC4zOSAxMzQuMjU0IDcwLjE0NTggMTMzLjk0MSA2OS45OTYxQzEzMy42MjkgNjkuODM5OCAxMzMuMjQ1IDY5Ljc2MTcgMTMyLjc4OSA2OS43NjE3QzEzMi4zNCA2OS43NjE3IDEzMS45MyA2OS44NTYxIDEzMS41NTkgNzAuMDQ0OUMxMzEuMTk0IDcwLjIzMzcgMTMwLjg3OCA3MC40OTQxIDEzMC42MTEgNzAuODI2MkMxMzAuMzUxIDcxLjE1ODIgMTMwLjE0NiA3MS41MzkxIDEyOS45OTYgNzEuOTY4OEMxMjkuODUzIDcyLjM5MTkgMTI5Ljc4MSA3Mi44NDExIDEyOS43ODEgNzMuMzE2NFpNMTM4Ljk0MSA3My44MzRWNzMuNjA5NEMxMzguOTQxIDcyLjg0NzcgMTM5LjA1MiA3Mi4xNDEzIDEzOS4yNzMgNzEuNDkwMkMxMzkuNDk1IDcwLjgzMjcgMTM5LjgxNCA3MC4yNjMgMTQwLjIzIDY5Ljc4MTJDMTQwLjY0NyA2OS4yOTMgMTQxLjE1MiA2OC45MTU0IDE0MS43NDQgNjguNjQ4NEMxNDIuMzM3IDY4LjM3NSAxNDMuMDAxIDY4LjIzODMgMTQzLjczNiA2OC4yMzgzQzE0NC40NzkgNjguMjM4MyAxNDUuMTQ2IDY4LjM3NSAxNDUuNzM4IDY4LjY0ODRDMTQ2LjMzNyA2OC45MTU0IDE0Ni44NDUgNjkuMjkzIDE0Ny4yNjIgNjkuNzgxMkMxNDcuNjg1IDcwLjI2MyAxNDguMDA3IDcwLjgzMjcgMTQ4LjIyOSA3MS40OTAyQzE0OC40NSA3Mi4xNDEzIDE0OC41NjEgNzIuODQ3NyAxNDguNTYxIDczLjYwOTRWNzMuODM0QzE0OC41NjEgNzQuNTk1NyAxNDguNDUgNzUuMzAyMSAxNDguMjI5IDc1Ljk1MzFDMTQ4LjAwNyA3Ni42MDQyIDE0Ny42ODUgNzcuMTczOCAxNDcuMjYyIDc3LjY2MjFDMTQ2Ljg0NSA3OC4xNDM5IDE0Ni4zNCA3OC41MjE1IDE0NS43NDggNzguNzk0OUMxNDUuMTYyIDc5LjA2MTggMTQ0LjQ5OCA3OS4xOTUzIDE0My43NTYgNzkuMTk1M0MxNDMuMDE0IDc5LjE5NTMgMTQyLjM0NiA3OS4wNjE4IDE0MS43NTQgNzguNzk0OUMxNDEuMTYxIDc4LjUyMTUgMTQwLjY1NCA3OC4xNDM5IDE0MC4yMyA3Ny42NjIxQzEzOS44MTQgNzcuMTczOCAxMzkuNDk1IDc2LjYwNDIgMTM5LjI3MyA3NS45NTMxQzEzOS4wNTIgNzUuMzAyMSAxMzguOTQxIDc0LjU5NTcgMTM4Ljk0MSA3My44MzRaTTE0MC43NDggNzMuNjA5NFY3My44MzRDMTQwLjc0OCA3NC4zNjEzIDE0MC44MSA3NC44NTk0IDE0MC45MzQgNzUuMzI4MUMxNDEuMDU3IDc1Ljc5MDQgMTQxLjI0MyA3Ni4yMDA1IDE0MS40OSA3Ni41NTg2QzE0MS43NDQgNzYuOTE2NyAxNDIuMDYgNzcuMTk5OSAxNDIuNDM4IDc3LjQwODJDMTQyLjgxNSA3Ny42MSAxNDMuMjU1IDc3LjcxMDkgMTQzLjc1NiA3Ny43MTA5QzE0NC4yNTEgNzcuNzEwOSAxNDQuNjg0IDc3LjYxIDE0NS4wNTUgNzcuNDA4MkMxNDUuNDMyIDc3LjE5OTkgMTQ1Ljc0NSA3Ni45MTY3IDE0NS45OTIgNzYuNTU4NkMxNDYuMjQgNzYuMjAwNSAxNDYuNDI1IDc1Ljc5MDQgMTQ2LjU0OSA3NS4zMjgxQzE0Ni42NzkgNzQuODU5NCAxNDYuNzQ0IDc0LjM2MTMgMTQ2Ljc0NCA3My44MzRWNzMuNjA5NEMxNDYuNzQ0IDczLjA4ODUgMTQ2LjY3OSA3Mi41OTcgMTQ2LjU0OSA3Mi4xMzQ4QzE0Ni40MjUgNzEuNjY2IDE0Ni4yMzYgNzEuMjUyNiAxNDUuOTgyIDcwLjg5NDVDMTQ1LjczNSA3MC41Mjk5IDE0NS40MjMgNzAuMjQzNSAxNDUuMDQ1IDcwLjAzNTJDMTQ0LjY3NCA2OS44MjY4IDE0NC4yMzggNjkuNzIyNyAxNDMuNzM2IDY5LjcyMjdDMTQzLjI0MiA2OS43MjI3IDE0Mi44MDUgNjkuODI2OCAxNDIuNDI4IDcwLjAzNTJDMTQyLjA1NyA3MC4yNDM1IDE0MS43NDQgNzAuNTI5OSAxNDEuNDkgNzAuODk0NUMxNDEuMjQzIDcxLjI1MjYgMTQxLjA1NyA3MS42NjYgMTQwLjkzNCA3Mi4xMzQ4QzE0MC44MSA3Mi41OTcgMTQwLjc0OCA3My4wODg1IDE0MC43NDggNzMuNjA5NFpNMTUyLjc4OSA2OC40MzM2Vjc5SDE1MC45NzNWNjguNDMzNkgxNTIuNzg5Wk0xNTAuODM2IDY1LjYzMDlDMTUwLjgzNiA2NS4zMzc5IDE1MC45MjQgNjUuMDkwNSAxNTEuMSA2NC44ODg3QzE1MS4yODIgNjQuNjg2OCAxNTEuNTQ5IDY0LjU4NTkgMTUxLjkgNjQuNTg1OUMxNTIuMjQ1IDY0LjU4NTkgMTUyLjUwOSA2NC42ODY4IDE1Mi42OTEgNjQuODg4N0MxNTIuODggNjUuMDkwNSAxNTIuOTc1IDY1LjMzNzkgMTUyLjk3NSA2NS42MzA5QzE1Mi45NzUgNjUuOTEwOCAxNTIuODggNjYuMTUxNyAxNTIuNjkxIDY2LjM1MzVDMTUyLjUwOSA2Ni41NDg4IDE1Mi4yNDUgNjYuNjQ2NSAxNTEuOSA2Ni42NDY1QzE1MS41NDkgNjYuNjQ2NSAxNTEuMjgyIDY2LjU0ODggMTUxLjEgNjYuMzUzNUMxNTAuOTI0IDY2LjE1MTcgMTUwLjgzNiA2NS45MTA4IDE1MC44MzYgNjUuNjMwOVpNMTU5LjkxOCA3Ny43MTA5QzE2MC4zNDggNzcuNzEwOSAxNjAuNzQ1IDc3LjYyMyAxNjEuMTA5IDc3LjQ0NzNDMTYxLjQ3NCA3Ny4yNzE1IDE2MS43NzMgNzcuMDMwNiAxNjIuMDA4IDc2LjcyNDZDMTYyLjI0MiA3Ni40MTIxIDE2Mi4zNzYgNzYuMDU3MyAxNjIuNDA4IDc1LjY2MDJIMTY0LjEyN0MxNjQuMDk0IDc2LjI4NTIgMTYzLjg4MyA3Ni44Njc4IDE2My40OTIgNzcuNDA4MkMxNjMuMTA4IDc3Ljk0MjEgMTYyLjYwNCA3OC4zNzUgMTYxLjk3OSA3OC43MDdDMTYxLjM1NCA3OS4wMzI2IDE2MC42NjcgNzkuMTk1MyAxNTkuOTE4IDc5LjE5NTNDMTU5LjEyNCA3OS4xOTUzIDE1OC40MyA3OS4wNTUzIDE1Ny44MzggNzguNzc1NEMxNTcuMjUyIDc4LjQ5NTQgMTU2Ljc2NCA3OC4xMTEzIDE1Ni4zNzMgNzcuNjIzQzE1NS45ODkgNzcuMTM0OCAxNTUuNjk5IDc2LjU3NDkgMTU1LjUwNCA3NS45NDM0QzE1NS4zMTUgNzUuMzA1MyAxNTUuMjIxIDc0LjYzMTUgMTU1LjIyMSA3My45MjE5VjczLjUxMTdDMTU1LjIyMSA3Mi44MDIxIDE1NS4zMTUgNzIuMTMxNSAxNTUuNTA0IDcxLjVDMTU1LjY5OSA3MC44NjIgMTU1Ljk4OSA3MC4yOTg4IDE1Ni4zNzMgNjkuODEwNUMxNTYuNzY0IDY5LjMyMjMgMTU3LjI1MiA2OC45MzgyIDE1Ny44MzggNjguNjU4MkMxNTguNDMgNjguMzc4MyAxNTkuMTI0IDY4LjIzODMgMTU5LjkxOCA2OC4yMzgzQzE2MC43NDUgNjguMjM4MyAxNjEuNDY3IDY4LjQwNzYgMTYyLjA4NiA2OC43NDYxQzE2Mi43MDQgNjkuMDc4MSAxNjMuMTg5IDY5LjUzMzkgMTYzLjU0MSA3MC4xMTMzQzE2My44OTkgNzAuNjg2MiAxNjQuMDk0IDcxLjMzNzIgMTY0LjEyNyA3Mi4wNjY0SDE2Mi40MDhDMTYyLjM3NiA3MS42MzAyIDE2Mi4yNTIgNzEuMjM2MyAxNjIuMDM3IDcwLjg4NDhDMTYxLjgyOSA3MC41MzMyIDE2MS41NDIgNzAuMjUzMyAxNjEuMTc4IDcwLjA0NDlDMTYwLjgyIDY5LjgzMDEgMTYwLjQgNjkuNzIyNyAxNTkuOTE4IDY5LjcyMjdDMTU5LjM2NSA2OS43MjI3IDE1OC44OTkgNjkuODMzMyAxNTguNTIxIDcwLjA1NDdDMTU4LjE1IDcwLjI2OTUgMTU3Ljg1NCA3MC41NjI1IDE1Ny42MzMgNzAuOTMzNkMxNTcuNDE4IDcxLjI5ODIgMTU3LjI2MiA3MS43MDUxIDE1Ny4xNjQgNzIuMTU0M0MxNTcuMDczIDcyLjU5NyAxNTcuMDI3IDczLjA0OTUgMTU3LjAyNyA3My41MTE3VjczLjkyMTlDMTU3LjAyNyA3NC4zODQxIDE1Ny4wNzMgNzQuODM5OCAxNTcuMTY0IDc1LjI4OTFDMTU3LjI1NSA3NS43MzgzIDE1Ny40MDggNzYuMTQ1MiAxNTcuNjIzIDc2LjUwOThDMTU3Ljg0NCA3Ni44NzQzIDE1OC4xNDEgNzcuMTY3MyAxNTguNTEyIDc3LjM4ODdDMTU4Ljg4OSA3Ny42MDM1IDE1OS4zNTggNzcuNzEwOSAxNTkuOTE4IDc3LjcxMDlaTTE3MC41NDMgNzkuMTk1M0MxNjkuODA3IDc5LjE5NTMgMTY5LjE0IDc5LjA3MTYgMTY4LjU0MSA3OC44MjQyQzE2Ny45NDkgNzguNTcwMyAxNjcuNDM4IDc4LjIxNTUgMTY3LjAwOCA3Ny43NTk4QzE2Ni41ODUgNzcuMzA0IDE2Ni4yNTkgNzYuNzYzNyAxNjYuMDMxIDc2LjEzODdDMTY1LjgwMyA3NS41MTM3IDE2NS42ODkgNzQuODMwMSAxNjUuNjg5IDc0LjA4NzlWNzMuNjc3N0MxNjUuNjg5IDcyLjgxODQgMTY1LjgxNiA3Mi4wNTM0IDE2Ni4wNyA3MS4zODI4QzE2Ni4zMjQgNzAuNzA1NyAxNjYuNjY5IDcwLjEzMjggMTY3LjEwNSA2OS42NjQxQzE2Ny41NDIgNjkuMTk1MyAxNjguMDM2IDY4Ljg0MDUgMTY4LjU5IDY4LjU5OTZDMTY5LjE0MyA2OC4zNTg3IDE2OS43MTYgNjguMjM4MyAxNzAuMzA5IDY4LjIzODNDMTcxLjA2NCA2OC4yMzgzIDE3MS43MTUgNjguMzY4NSAxNzIuMjYyIDY4LjYyODlDMTcyLjgxNSA2OC44ODkzIDE3My4yNjggNjkuMjUzOSAxNzMuNjE5IDY5LjcyMjdDMTczLjk3MSA3MC4xODQ5IDE3NC4yMzEgNzAuNzMxOCAxNzQuNCA3MS4zNjMzQzE3NC41NyA3MS45ODgzIDE3NC42NTQgNzIuNjcxOSAxNzQuNjU0IDczLjQxNDFWNzQuMjI0NkgxNjYuNzY0VjcyLjc1SDE3Mi44NDhWNzIuNjEzM0MxNzIuODIyIDcyLjE0NDUgMTcyLjcyNCA3MS42ODg4IDE3Mi41NTUgNzEuMjQ2MUMxNzIuMzkyIDcwLjgwMzQgMTcyLjEzMiA3MC40Mzg4IDE3MS43NzMgNzAuMTUyM0MxNzEuNDE1IDY5Ljg2NTkgMTcwLjkyNyA2OS43MjI3IDE3MC4zMDkgNjkuNzIyN0MxNjkuODk4IDY5LjcyMjcgMTY5LjUyMSA2OS44MTA1IDE2OS4xNzYgNjkuOTg2M0MxNjguODMxIDcwLjE1NTYgMTY4LjUzNSA3MC40MDk1IDE2OC4yODcgNzAuNzQ4QzE2OC4wNCA3MS4wODY2IDE2Ny44NDggNzEuNSAxNjcuNzExIDcxLjk4ODNDMTY3LjU3NCA3Mi40NzY2IDE2Ny41MDYgNzMuMDM5NyAxNjcuNTA2IDczLjY3NzdWNzQuMDg3OUMxNjcuNTA2IDc0LjU4OTIgMTY3LjU3NCA3NS4wNjEyIDE2Ny43MTEgNzUuNTAzOUMxNjcuODU0IDc1Ljk0MDEgMTY4LjA1OSA3Ni4zMjQyIDE2OC4zMjYgNzYuNjU2MkMxNjguNiA3Ni45ODgzIDE2OC45MjggNzcuMjQ4NyAxNjkuMzEyIDc3LjQzNzVDMTY5LjcwMyA3Ny42MjYzIDE3MC4xNDYgNzcuNzIwNyAxNzAuNjQxIDc3LjcyMDdDMTcxLjI3OSA3Ny43MjA3IDE3MS44MTkgNzcuNTkwNSAxNzIuMjYyIDc3LjMzMDFDMTcyLjcwNCA3Ny4wNjk3IDE3My4wOTIgNzYuNzIxNCAxNzMuNDI0IDc2LjI4NTJMMTc0LjUxOCA3Ny4xNTQzQzE3NC4yOSA3Ny40OTkzIDE3NCA3Ny44MjgxIDE3My42NDggNzguMTQwNkMxNzMuMjk3IDc4LjQ1MzEgMTcyLjg2NCA3OC43MDcgMTcyLjM1IDc4LjkwMjNDMTcxLjg0MiA3OS4wOTc3IDE3MS4yNCA3OS4xOTUzIDE3MC41NDMgNzkuMTk1M1pNMTgzLjY4OCA2OC40MzM2Vjc5SDE4MS44NzFWNjguNDMzNkgxODMuNjg4Wk0xODEuNzM0IDY1LjYzMDlDMTgxLjczNCA2NS4zMzc5IDE4MS44MjIgNjUuMDkwNSAxODEuOTk4IDY0Ljg4ODdDMTgyLjE4IDY0LjY4NjggMTgyLjQ0NyA2NC41ODU5IDE4Mi43OTkgNjQuNTg1OUMxODMuMTQ0IDY0LjU4NTkgMTgzLjQwOCA2NC42ODY4IDE4My41OSA2NC44ODg3QzE4My43NzkgNjUuMDkwNSAxODMuODczIDY1LjMzNzkgMTgzLjg3MyA2NS42MzA5QzE4My44NzMgNjUuOTEwOCAxODMuNzc5IDY2LjE1MTcgMTgzLjU5IDY2LjM1MzVDMTgzLjQwOCA2Ni41NDg4IDE4My4xNDQgNjYuNjQ2NSAxODIuNzk5IDY2LjY0NjVDMTgyLjQ0NyA2Ni42NDY1IDE4Mi4xOCA2Ni41NDg4IDE4MS45OTggNjYuMzUzNUMxODEuODIyIDY2LjE1MTcgMTgxLjczNCA2NS45MTA4IDE4MS43MzQgNjUuNjMwOVpNMTkxLjAxMiA2OC40MzM2VjY5LjgyMDNIMTg1LjI5OVY2OC40MzM2SDE5MS4wMTJaTTE4Ny4yMzIgNjUuODY1MkgxODkuMDM5Vjc2LjM4MjhDMTg5LjAzOSA3Ni43NDA5IDE4OS4wOTQgNzcuMDExMSAxODkuMjA1IDc3LjE5MzRDMTg5LjMxNiA3Ny4zNzU3IDE4OS40NTkgNzcuNDk2MSAxODkuNjM1IDc3LjU1NDdDMTg5LjgxMSA3Ny42MTMzIDE4OS45OTkgNzcuNjQyNiAxOTAuMjAxIDc3LjY0MjZDMTkwLjM1MSA3Ny42NDI2IDE5MC41MDcgNzcuNjI5NiAxOTAuNjcgNzcuNjAzNUMxOTAuODM5IDc3LjU3MSAxOTAuOTY2IDc3LjU0NDkgMTkxLjA1MSA3Ny41MjU0TDE5MS4wNjEgNzlDMTkwLjkxNyA3OS4wNDU2IDE5MC43MjkgNzkuMDg3OSAxOTAuNDk0IDc5LjEyN0MxOTAuMjY2IDc5LjE3MjUgMTg5Ljk5IDc5LjE5NTMgMTg5LjY2NCA3OS4xOTUzQzE4OS4yMjEgNzkuMTk1MyAxODguODE0IDc5LjEwNzQgMTg4LjQ0MyA3OC45MzE2QzE4OC4wNzIgNzguNzU1OSAxODcuNzc2IDc4LjQ2MjkgMTg3LjU1NSA3OC4wNTI3QzE4Ny4zNCA3Ny42MzYxIDE4Ny4yMzIgNzcuMDc2MiAxODcuMjMyIDc2LjM3M1Y2NS44NjUyWk0xOTcuNTE2IDc5LjE5NTNDMTk2Ljc4IDc5LjE5NTMgMTk2LjExMyA3OS4wNzE2IDE5NS41MTQgNzguODI0MkMxOTQuOTIxIDc4LjU3MDMgMTk0LjQxIDc4LjIxNTUgMTkzLjk4IDc3Ljc1OThDMTkzLjU1NyA3Ny4zMDQgMTkzLjIzMiA3Ni43NjM3IDE5My4wMDQgNzYuMTM4N0MxOTIuNzc2IDc1LjUxMzcgMTkyLjY2MiA3NC44MzAxIDE5Mi42NjIgNzQuMDg3OVY3My42Nzc3QzE5Mi42NjIgNzIuODE4NCAxOTIuNzg5IDcyLjA1MzQgMTkzLjA0MyA3MS4zODI4QzE5My4yOTcgNzAuNzA1NyAxOTMuNjQyIDcwLjEzMjggMTk0LjA3OCA2OS42NjQxQzE5NC41MTQgNjkuMTk1MyAxOTUuMDA5IDY4Ljg0MDUgMTk1LjU2MiA2OC41OTk2QzE5Ni4xMTYgNjguMzU4NyAxOTYuNjg5IDY4LjIzODMgMTk3LjI4MSA2OC4yMzgzQzE5OC4wMzYgNjguMjM4MyAxOTguNjg4IDY4LjM2ODUgMTk5LjIzNCA2OC42Mjg5QzE5OS43ODggNjguODg5MyAyMDAuMjQgNjkuMjUzOSAyMDAuNTkyIDY5LjcyMjdDMjAwLjk0MyA3MC4xODQ5IDIwMS4yMDQgNzAuNzMxOCAyMDEuMzczIDcxLjM2MzNDMjAxLjU0MiA3MS45ODgzIDIwMS42MjcgNzIuNjcxOSAyMDEuNjI3IDczLjQxNDFWNzQuMjI0NkgxOTMuNzM2VjcyLjc1SDE5OS44MlY3Mi42MTMzQzE5OS43OTQgNzIuMTQ0NSAxOTkuNjk3IDcxLjY4ODggMTk5LjUyNyA3MS4yNDYxQzE5OS4zNjUgNzAuODAzNCAxOTkuMTA0IDcwLjQzODggMTk4Ljc0NiA3MC4xNTIzQzE5OC4zODggNjkuODY1OSAxOTcuOSA2OS43MjI3IDE5Ny4yODEgNjkuNzIyN0MxOTYuODcxIDY5LjcyMjcgMTk2LjQ5MyA2OS44MTA1IDE5Ni4xNDggNjkuOTg2M0MxOTUuODAzIDcwLjE1NTYgMTk1LjUwNyA3MC40MDk1IDE5NS4yNiA3MC43NDhDMTk1LjAxMiA3MS4wODY2IDE5NC44MiA3MS41IDE5NC42ODQgNzEuOTg4M0MxOTQuNTQ3IDcyLjQ3NjYgMTk0LjQ3OSA3My4wMzk3IDE5NC40NzkgNzMuNjc3N1Y3NC4wODc5QzE5NC40NzkgNzQuNTg5MiAxOTQuNTQ3IDc1LjA2MTIgMTk0LjY4NCA3NS41MDM5QzE5NC44MjcgNzUuOTQwMSAxOTUuMDMyIDc2LjMyNDIgMTk1LjI5OSA3Ni42NTYyQzE5NS41NzIgNzYuOTg4MyAxOTUuOTAxIDc3LjI0ODcgMTk2LjI4NSA3Ny40Mzc1QzE5Ni42NzYgNzcuNjI2MyAxOTcuMTE4IDc3LjcyMDcgMTk3LjYxMyA3Ny43MjA3QzE5OC4yNTEgNzcuNzIwNyAxOTguNzkyIDc3LjU5MDUgMTk5LjIzNCA3Ny4zMzAxQzE5OS42NzcgNzcuMDY5NyAyMDAuMDY0IDc2LjcyMTQgMjAwLjM5NiA3Ni4yODUyTDIwMS40OSA3Ny4xNTQzQzIwMS4yNjIgNzcuNDk5MyAyMDAuOTczIDc3LjgyODEgMjAwLjYyMSA3OC4xNDA2QzIwMC4yNyA3OC40NTMxIDE5OS44MzcgNzguNzA3IDE5OS4zMjIgNzguOTAyM0MxOTguODE0IDc5LjA5NzcgMTk4LjIxMiA3OS4xOTUzIDE5Ny41MTYgNzkuMTk1M1pNMjA1LjUzMyA3MC41MzMyVjc5SDIwMy43MTdWNjguNDMzNkgyMDUuNDM2TDIwNS41MzMgNzAuNTMzMlpNMjA1LjE2MiA3My4zMTY0TDIwNC4zMjIgNzMuMjg3MUMyMDQuMzI5IDcyLjU2NDUgMjA0LjQyMyA3MS44OTcxIDIwNC42MDUgNzEuMjg1MkMyMDQuNzg4IDcwLjY2NjcgMjA1LjA1OCA3MC4xMjk2IDIwNS40MTYgNjkuNjczOEMyMDUuNzc0IDY5LjIxODEgMjA2LjIyIDY4Ljg2NjUgMjA2Ljc1NCA2OC42MTkxQzIwNy4yODggNjguMzY1MiAyMDcuOTA2IDY4LjIzODMgMjA4LjYwOSA2OC4yMzgzQzIwOS4xMDQgNjguMjM4MyAyMDkuNTYgNjguMzA5OSAyMDkuOTc3IDY4LjQ1MzFDMjEwLjM5MyA2OC41ODk4IDIxMC43NTUgNjguODA3OSAyMTEuMDYxIDY5LjEwNzRDMjExLjM2NyA2OS40MDY5IDIxMS42MDQgNjkuNzkxIDIxMS43NzMgNzAuMjU5OEMyMTEuOTQzIDcwLjcyODUgMjEyLjAyNyA3MS4yOTQ5IDIxMi4wMjcgNzEuOTU5Vjc5SDIxMC4yMjFWNzIuMDQ2OUMyMTAuMjIxIDcxLjQ5MzUgMjEwLjEyNiA3MS4wNTA4IDIwOS45MzggNzAuNzE4OEMyMDkuNzU1IDcwLjM4NjcgMjA5LjQ5NSA3MC4xNDU4IDIwOS4xNTYgNjkuOTk2MUMyMDguODE4IDY5LjgzOTggMjA4LjQyMSA2OS43NjE3IDIwNy45NjUgNjkuNzYxN0MyMDcuNDMxIDY5Ljc2MTcgMjA2Ljk4NSA2OS44NTYxIDIwNi42MjcgNzAuMDQ0OUMyMDYuMjY5IDcwLjIzMzcgMjA1Ljk4MiA3MC40OTQxIDIwNS43NjggNzAuODI2MkMyMDUuNTUzIDcxLjE1ODIgMjA1LjM5NiA3MS41MzkxIDIwNS4yOTkgNzEuOTY4OEMyMDUuMjA4IDcyLjM5MTkgMjA1LjE2MiA3Mi44NDExIDIwNS4xNjIgNzMuMzE2NFpNMjEyLjAwOCA3Mi4zMjAzTDIxMC43OTcgNzIuNjkxNEMyMTAuODAzIDcyLjExMiAyMTAuODk4IDcxLjU1NTMgMjExLjA4IDcxLjAyMTVDMjExLjI2OSA3MC40ODc2IDIxMS41MzkgNzAuMDEyNCAyMTEuODkxIDY5LjU5NTdDMjEyLjI0OSA2OS4xNzkgMjEyLjY4OCA2OC44NTAzIDIxMy4yMDkgNjguNjA5NEMyMTMuNzMgNjguMzYyIDIxNC4zMjYgNjguMjM4MyAyMTQuOTk2IDY4LjIzODNDMjE1LjU2MiA2OC4yMzgzIDIxNi4wNjQgNjguMzEzMiAyMTYuNSA2OC40NjI5QzIxNi45NDMgNjguNjEyNiAyMTcuMzE0IDY4Ljg0MzggMjE3LjYxMyA2OS4xNTYyQzIxNy45MTkgNjkuNDYyMiAyMTguMTUgNjkuODU2MSAyMTguMzA3IDcwLjMzNzlDMjE4LjQ2MyA3MC44MTk3IDIxOC41NDEgNzEuMzkyNiAyMTguNTQxIDcyLjA1NjZWNzlIMjE2LjcyNVY3Mi4wMzcxQzIxNi43MjUgNzEuNDQ0NyAyMTYuNjMgNzAuOTg1NyAyMTYuNDQxIDcwLjY2MDJDMjE2LjI1OSA3MC4zMjgxIDIxNS45OTkgNzAuMDk3IDIxNS42NiA2OS45NjY4QzIxNS4zMjggNjkuODMwMSAyMTQuOTMxIDY5Ljc2MTcgMjE0LjQ2OSA2OS43NjE3QzIxNC4wNzIgNjkuNzYxNyAyMTMuNzIgNjkuODMwMSAyMTMuNDE0IDY5Ljk2NjhDMjEzLjEwOCA3MC4xMDM1IDIxMi44NTEgNzAuMjkyMyAyMTIuNjQzIDcwLjUzMzJDMjEyLjQzNCA3MC43Njc2IDIxMi4yNzUgNzEuMDM3OCAyMTIuMTY0IDcxLjM0MzhDMjEyLjA2IDcxLjY0OTcgMjEyLjAwOCA3MS45NzUzIDIxMi4wMDggNzIuMzIwM1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDBfMTQ5XzIyODMpXCI+XG5cdFx0XHQ8cGF0aCBkPVwiTTEwMy42NjcgNjQuMDQzM0w5MC4zNTUgNzcuMzY2Nkw4NS40MDgzIDcyLjQyTDg3LjA1MzMgNzAuNzc1TDkwLjM1NSA3NC4wNzY2TDEwMi4wMjIgNjIuNDFMMTAzLjY2NyA2NC4wNDMzWk0xMDEuMDg4IDY5LjkyMzNDMTAxLjI0IDcwLjU4ODMgMTAxLjMzMyA3MS4yODgzIDEwMS4zMzMgNzJDMTAxLjMzMyA3Ny4xNTY2IDk3LjE1NjcgODEuMzMzMyA5MiA4MS4zMzMzQzg2Ljg0MzMgODEuMzMzMyA4Mi42NjY3IDc3LjE1NjYgODIuNjY2NyA3MkM4Mi42NjY3IDY2Ljg0MzMgODYuODQzMyA2Mi42NjY2IDkyIDYyLjY2NjZDOTMuODQzMyA2Mi42NjY2IDk1LjU0NjcgNjMuMjAzMyA5Ni45OTMzIDY0LjEyNUw5OC42NzMzIDYyLjQ0NUM5Ni43ODMzIDYxLjExNSA5NC40ODUgNjAuMzMzMyA5MiA2MC4zMzMzQzg1LjU2IDYwLjMzMzMgODAuMzMzMyA2NS41NiA4MC4zMzMzIDcyQzgwLjMzMzMgNzguNDQgODUuNTYgODMuNjY2NiA5MiA4My42NjY2Qzk4LjQ0IDgzLjY2NjYgMTAzLjY2NyA3OC40NCAxMDMuNjY3IDcyQzEwMy42NjcgNzAuNjExNiAxMDMuNDEgNjkuMjgxNiAxMDIuOTY3IDY4LjA0NUwxMDEuMDg4IDY5LjkyMzNaXCIgZmlsbD1cIiM0MjcyRjlcIi8+XG5cdFx0PC9nPlxuXHRcdDxkZWZzPlxuXHRcdFx0PGNsaXBQYXRoIGlkPVwiY2xpcDBfMTQ5XzIyODNcIj5cblx0XHRcdFx0PHJlY3Qgd2lkdGg9XCIyOFwiIGhlaWdodD1cIjI4XCIgZmlsbD1cIndoaXRlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDc4IDU4KVwiLz5cblx0XHRcdDwvY2xpcFBhdGg+XG5cdFx0PC9kZWZzPlxuXHQ8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHByZXZpZXc7IiwiaW1wb3J0IHVzZUNoZWNrZWRDaG9pY2VTdGF0ZSBmcm9tICcuL3VzZUNoZWNrZWRDaG9pY2VTdGF0ZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgVG9vbGJhckJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIFNWRyxcblx0ICAgICAgUGF0aCxcbiAgICAgIH0gPSB3cC5wcmltaXRpdmVzO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFRvZ2dsZUNoZWNrU3RhdGVCdXR0b24oKSB7XG5cdGNvbnN0IFsgaXNDaGVja2VkLCB0b2dnbGVDaGVja2VkIF0gPSB1c2VDaGVja2VkQ2hvaWNlU3RhdGUoKTtcblxuXHRyZXR1cm4gPFRvb2xiYXJCdXR0b25cblx0XHRpY29uPXsgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHQgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG5cdFx0XHQ8UGF0aFxuXHRcdFx0XHRkPVwiTTE2LjcgNy4xbC02LjMgOC41LTMuMy0yLjUtLjkgMS4yIDQuNSAzLjRMMTcuOSA4elwiLz5cblx0XHQ8L1NWRz4gfVxuXHRcdHRpdGxlPXsgaXNDaGVja2VkXG5cdFx0ICAgICAgICA/IF9fKCAnU2hvdyB1bmNoZWNrZWQgc3RhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdCAgICAgICAgOiBfXyggJ1Nob3cgY2hlY2tlZCBzdGF0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApXG5cdFx0fVxuXHRcdG9uQ2xpY2s9eyAoKSA9PiB0b2dnbGVDaGVja2VkKCkgfVxuXHRcdGlzQWN0aXZlPXsgaXNDaGVja2VkIH1cblx0Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUNoZWNrU3RhdGVCdXR0b247IiwiY29uc3QgeyBjcmVhdGVDb250ZXh0IH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDaG9pY2VJdGVtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoIHtcblx0Y2xpZW50SWQ6IGZhbHNlLFxufSApO1xuXG5leHBvcnQgZGVmYXVsdCBDaG9pY2VJdGVtQ29udGV4dDsiLCJpbXBvcnQgdXNlQ2hlY2tlZENob2ljZVN0YXRlIGZyb20gJy4vdXNlQ2hlY2tlZENob2ljZVN0YXRlJztcbmltcG9ydCBDaG9pY2VJdGVtQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IFRvZ2dsZUNoZWNrU3RhdGVCdXR0b24gZnJvbSAnLi9Ub2dnbGVDaGVja1N0YXRlQnV0dG9uJztcbmltcG9ydCB1c2VBbGxvd2VkQmxvY2tzIGZyb20gJy4vdXNlQWxsb3dlZEJsb2Nrcyc7XG5pbXBvcnQgcHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdCAgICAgIEluc3BlY3RvckNvbnRyb2xzLFxuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxuXHQgICAgICB1c2VJbm5lckJsb2Nrc1Byb3BzLFxuXHQgICAgICBCbG9ja0NvbnRyb2xzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIFBhbmVsQm9keSxcblx0ICAgICAgVGV4dENvbnRyb2wsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBjbGFzc25hbWVzIH0gPSBKZXRGQkFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRBZHZhbmNlZENob2ljZSggcHJvcHMgKSB7XG5cdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgY2xpZW50SWQgfSA9IHByb3BzO1xuXG5cdGNvbnN0IFsgaXNDaGVja2VkIF0gPSB1c2VDaGVja2VkQ2hvaWNlU3RhdGUoKTtcblxuXHRjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKCB7XG5cdFx0J2pldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtJzogdHJ1ZSxcblx0XHQnaXMtY2hlY2tlZCc6IGlzQ2hlY2tlZCxcblx0fSApO1xuXG5cdGNvbnN0IGFsbG93ZWRCbG9ja3MgPSB1c2VBbGxvd2VkQmxvY2tzKCk7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyAgICAgICA9IHVzZUJsb2NrUHJvcHMoIHsgY2xhc3NOYW1lIH0gKTtcblx0Y29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMoIGJsb2NrUHJvcHMsIHtcblx0XHR0ZW1wbGF0ZTogWyBbICdjb3JlL3BhcmFncmFwaCcsIHt9IF0gXSxcblx0XHRhbGxvd2VkQmxvY2tzLFxuXHR9ICk7XG5cblx0aWYgKCBhdHRyaWJ1dGVzLmlzUHJldmlldyApIHtcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17IHtcblx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0fSB9PlxuXHRcdFx0eyBwcmV2aWV3IH1cblx0XHQ8L2Rpdj47XG5cdH1cblxuXHRyZXR1cm4gPENob2ljZUl0ZW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXsgeyBjbGllbnRJZCB9IH0+XG5cdFx0PGxpIHsgLi4uaW5uZXJCbG9ja3NQcm9wcyB9Lz5cblx0XHQ8QmxvY2tDb250cm9scyBncm91cD17ICdibG9jaycgfT5cblx0XHRcdDxUb2dnbGVDaGVja1N0YXRlQnV0dG9uLz5cblx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnR2VuZXJhbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmFsdWUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWwudHJpbSgpLFxuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHQnVmFsdWUgZm9yIENhbGN1bGF0ZWQgRmllbGQnLFxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdGhlbHA9eyBfXyhcblx0XHRcdFx0XHRcdGBUaGlzIHZhbHVlIHdpbGwgYmUgdXNlZCBmb3IgY2FsY3VsYXRpb25zIFxuaW4gdGhlIENhbGN1bGF0ZWQgRmllbGQuYCxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FsY192YWx1ZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRcdFx0Y2FsY192YWx1ZTogdmFsLnRyaW0oKSxcblx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0PC9DaG9pY2VJdGVtQ29udGV4dC5Qcm92aWRlcj47XG59IiwiaW1wb3J0IEVkaXRBZHZhbmNlZENob2ljZSBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJ0BibG9ja3MvY2hvaWNlL2Jsb2NrLmpzb24nO1xuaW1wb3J0IFNhdmVBZHZhbmNlZENob2ljZSBmcm9tICcuL3NhdmUnO1xuXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vLyBjb21wYXRpYmlsaXR5IHdpdGggV29yZFByZXNzIDw9IDYuMlxubWV0YWRhdGEuc3VwcG9ydHMuX19leHBlcmltZW50YWxMYXlvdXQgPSBtZXRhZGF0YS5zdXBwb3J0cy5sYXlvdXQ7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRkZXNjcmlwdGlvbjogX18oXG5cdFx0YEFwcGx5IGEgdmFyaWV0eSBvZiBzZXR0aW5ncyBvZiB0aGUgb25lIHBhcnRpY3VsYXIgY2hvaWNlIGJsb2NrLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRlZGl0OiBFZGl0QWR2YW5jZWRDaG9pY2UsXG5cdHNhdmU6IFNhdmVBZHZhbmNlZENob2ljZSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGlzUHJldmlldzogdHJ1ZSxcblx0XHR9LFxuXHR9LFxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzLFxufTtcbiIsImNvbnN0IHByZXZpZXcgPSAoXG5cdDxzdmcgd2lkdGg9XCIyOThcIiBoZWlnaHQ9XCIxNDRcIiB2aWV3Qm94PVwiMCAwIDI5OCAxNDRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8cmVjdCB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHJ4PVwiNFwiIGZpbGw9XCIjRTJFOEYwXCIvPlxuXHRcdDxyZWN0IHg9XCI5M1wiIHk9XCIxMlwiIHdpZHRoPVwiMTI4XCIgaGVpZ2h0PVwiMTIyXCIgcng9XCI4XCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdDxyZWN0IHg9XCIxMDlcIiB5PVwiMTE0XCIgd2lkdGg9XCI5NlwiIGhlaWdodD1cIjRcIiByeD1cIjJcIiBmaWxsPVwiI0NCRDVFMVwiLz5cblx0XHQ8cmVjdCB4PVwiMTA5XCIgeT1cIjEyMFwiIHdpZHRoPVwiNzlcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHJlY3QgeD1cIjEwOVwiIHk9XCI1MlwiIHdpZHRoPVwiOTZcIiBoZWlnaHQ9XCI1NlwiIHJ4PVwiNFwiIGZpbGw9XCIjRjFGNUY5XCIvPlxuXHRcdDxwYXRoIGQ9XCJNMTY5IDkyLjA2NjZWNjguODY2NkgxNDVWOTIuMDY2NkgxNjlaTTE1Mi4zMzMgODIuNEwxNTUuNjY3IDg2LjI3OTVMMTYwLjMzMyA4MC40NjY2TDE2Ni4zMzMgODguMkgxNDcuNjY3TDE1Mi4zMzMgODIuNFpcIiBmaWxsPVwiI0NCRDVFMVwiLz5cblx0XHQ8cGF0aCBkPVwiTTE0Ny4wNzggMzIuOTUzMVYzMy42NzE5QzE0Ny4wNzggMzQuNTI2IDE0Ni45NzEgMzUuMjkxNyAxNDYuNzU4IDM1Ljk2ODhDMTQ2LjU0NCAzNi42NDU4IDE0Ni4yMzcgMzcuMjIxNCAxNDUuODM2IDM3LjY5NTNDMTQ1LjQzNSAzOC4xNjkzIDE0NC45NTMgMzguNTMxMiAxNDQuMzkxIDM4Ljc4MTJDMTQzLjgzMyAzOS4wMzEyIDE0My4yMDggMzkuMTU2MiAxNDIuNTE2IDM5LjE1NjJDMTQxLjg0NCAzOS4xNTYyIDE0MS4yMjcgMzkuMDMxMiAxNDAuNjY0IDM4Ljc4MTJDMTQwLjEwNyAzOC41MzEyIDEzOS42MjIgMzguMTY5MyAxMzkuMjExIDM3LjY5NTNDMTM4LjgwNSAzNy4yMjE0IDEzOC40OSAzNi42NDU4IDEzOC4yNjYgMzUuOTY4OEMxMzguMDQyIDM1LjI5MTcgMTM3LjkzIDM0LjUyNiAxMzcuOTMgMzMuNjcxOVYzMi45NTMxQzEzNy45MyAzMi4wOTkgMTM4LjAzOSAzMS4zMzU5IDEzOC4yNTggMzAuNjY0MUMxMzguNDgyIDI5Ljk4NyAxMzguNzk3IDI5LjQxMTUgMTM5LjIwMyAyOC45Mzc1QzEzOS42MDkgMjguNDU4MyAxNDAuMDkxIDI4LjA5MzggMTQwLjY0OCAyNy44NDM4QzE0MS4yMTEgMjcuNTkzOCAxNDEuODI4IDI3LjQ2ODggMTQyLjUgMjcuNDY4OEMxNDMuMTkzIDI3LjQ2ODggMTQzLjgxOCAyNy41OTM4IDE0NC4zNzUgMjcuODQzOEMxNDQuOTM4IDI4LjA5MzggMTQ1LjQxOSAyOC40NTgzIDE0NS44MiAyOC45Mzc1QzE0Ni4yMjcgMjkuNDExNSAxNDYuNTM2IDI5Ljk4NyAxNDYuNzUgMzAuNjY0MUMxNDYuOTY5IDMxLjMzNTkgMTQ3LjA3OCAzMi4wOTkgMTQ3LjA3OCAzMi45NTMxWk0xNDUuNTg2IDMzLjY3MTlWMzIuOTM3NUMxNDUuNTg2IDMyLjI2MDQgMTQ1LjUxNiAzMS42NjE1IDE0NS4zNzUgMzEuMTQwNkMxNDUuMjQgMzAuNjE5OCAxNDUuMDM5IDMwLjE4MjMgMTQ0Ljc3MyAyOS44MjgxQzE0NC41MDggMjkuNDc0IDE0NC4xODIgMjkuMjA1NyAxNDMuNzk3IDI5LjAyMzRDMTQzLjQxNyAyOC44NDExIDE0Mi45ODQgMjguNzUgMTQyLjUgMjguNzVDMTQyLjAzMSAyOC43NSAxNDEuNjA3IDI4Ljg0MTEgMTQxLjIyNyAyOS4wMjM0QzE0MC44NTIgMjkuMjA1NyAxNDAuNTI5IDI5LjQ3NCAxNDAuMjU4IDI5LjgyODFDMTM5Ljk5MiAzMC4xODIzIDEzOS43ODYgMzAuNjE5OCAxMzkuNjQxIDMxLjE0MDZDMTM5LjQ5NSAzMS42NjE1IDEzOS40MjIgMzIuMjYwNCAxMzkuNDIyIDMyLjkzNzVWMzMuNjcxOUMxMzkuNDIyIDM0LjM1NDIgMTM5LjQ5NSAzNC45NTgzIDEzOS42NDEgMzUuNDg0NEMxMzkuNzg2IDM2LjAwNTIgMTM5Ljk5NSAzNi40NDUzIDE0MC4yNjYgMzYuODA0N0MxNDAuNTQyIDM3LjE1ODkgMTQwLjg2NyAzNy40MjcxIDE0MS4yNDIgMzcuNjA5NEMxNDEuNjIyIDM3Ljc5MTcgMTQyLjA0NyAzNy44ODI4IDE0Mi41MTYgMzcuODgyOEMxNDMuMDA1IDM3Ljg4MjggMTQzLjQ0IDM3Ljc5MTcgMTQzLjgyIDM3LjYwOTRDMTQ0LjIwMSAzNy40MjcxIDE0NC41MjEgMzcuMTU4OSAxNDQuNzgxIDM2LjgwNDdDMTQ1LjA0NyAzNi40NDUzIDE0NS4yNDcgMzYuMDA1MiAxNDUuMzgzIDM1LjQ4NDRDMTQ1LjUxOCAzNC45NTgzIDE0NS41ODYgMzQuMzU0MiAxNDUuNTg2IDMzLjY3MTlaTTE1MC41NjIgMzIuMTcxOVY0Mi4yNUgxNDkuMTA5VjMwLjU0NjlIMTUwLjQzOEwxNTAuNTYyIDMyLjE3MTlaTTE1Ni4yNTggMzQuNzAzMVYzNC44NjcyQzE1Ni4yNTggMzUuNDgxOCAxNTYuMTg1IDM2LjA1MjEgMTU2LjAzOSAzNi41NzgxQzE1NS44OTMgMzcuMDk5IDE1NS42OCAzNy41NTIxIDE1NS4zOTggMzcuOTM3NUMxNTUuMTIyIDM4LjMyMjkgMTU0Ljc4MSAzOC42MjI0IDE1NC4zNzUgMzguODM1OUMxNTMuOTY5IDM5LjA0OTUgMTUzLjUwMyAzOS4xNTYyIDE1Mi45NzcgMzkuMTU2MkMxNTIuNDQgMzkuMTU2MiAxNTEuOTY2IDM5LjA2NzcgMTUxLjU1NSAzOC44OTA2QzE1MS4xNDMgMzguNzEzNSAxNTAuNzk0IDM4LjQ1NTcgMTUwLjUwOCAzOC4xMTcyQzE1MC4yMjEgMzcuNzc4NiAxNDkuOTkyIDM3LjM3MjQgMTQ5LjgyIDM2Ljg5ODRDMTQ5LjY1NCAzNi40MjQ1IDE0OS41MzkgMzUuODkwNiAxNDkuNDc3IDM1LjI5NjlWMzQuNDIxOUMxNDkuNTM5IDMzLjc5NjkgMTQ5LjY1NiAzMy4yMzcgMTQ5LjgyOCAzMi43NDIyQzE1MCAzMi4yNDc0IDE1MC4yMjcgMzEuODI1NSAxNTAuNTA4IDMxLjQ3NjZDMTUwLjc5NCAzMS4xMjI0IDE1MS4xNDEgMzAuODU0MiAxNTEuNTQ3IDMwLjY3MTlDMTUxLjk1MyAzMC40ODQ0IDE1Mi40MjIgMzAuMzkwNiAxNTIuOTUzIDMwLjM5MDZDMTUzLjQ4NCAzMC4zOTA2IDE1My45NTYgMzAuNDk0OCAxNTQuMzY3IDMwLjcwMzFDMTU0Ljc3OSAzMC45MDYyIDE1NS4xMjUgMzEuMTk3OSAxNTUuNDA2IDMxLjU3ODFDMTU1LjY4OCAzMS45NTgzIDE1NS44OTggMzIuNDE0MSAxNTYuMDM5IDMyLjk0NTNDMTU2LjE4NSAzMy40NzE0IDE1Ni4yNTggMzQuMDU3MyAxNTYuMjU4IDM0LjcwMzFaTTE1NC44MDUgMzQuODY3MlYzNC43MDMxQzE1NC44MDUgMzQuMjgxMiAxNTQuNzYgMzMuODg1NCAxNTQuNjcyIDMzLjUxNTZDMTU0LjU4MyAzMy4xNDA2IDE1NC40NDUgMzIuODEyNSAxNTQuMjU4IDMyLjUzMTJDMTU0LjA3NiAzMi4yNDQ4IDE1My44NDEgMzIuMDIwOCAxNTMuNTU1IDMxLjg1OTRDMTUzLjI2OCAzMS42OTI3IDE1Mi45MjcgMzEuNjA5NCAxNTIuNTMxIDMxLjYwOTRDMTUyLjE2NyAzMS42MDk0IDE1MS44NDkgMzEuNjcxOSAxNTEuNTc4IDMxLjc5NjlDMTUxLjMxMiAzMS45MjE5IDE1MS4wODYgMzIuMDkxMSAxNTAuODk4IDMyLjMwNDdDMTUwLjcxMSAzMi41MTMgMTUwLjU1NyAzMi43NTI2IDE1MC40MzggMzMuMDIzNEMxNTAuMzIzIDMzLjI4OTEgMTUwLjIzNyAzMy41NjUxIDE1MC4xOCAzMy44NTE2VjM1Ljg3NUMxNTAuMjg0IDM2LjIzOTYgMTUwLjQzIDM2LjU4MzMgMTUwLjYxNyAzNi45MDYyQzE1MC44MDUgMzcuMjI0IDE1MS4wNTUgMzcuNDgxOCAxNTEuMzY3IDM3LjY3OTdDMTUxLjY4IDM3Ljg3MjQgMTUyLjA3MyAzNy45Njg4IDE1Mi41NDcgMzcuOTY4OEMxNTIuOTM4IDM3Ljk2ODggMTUzLjI3MyAzNy44ODggMTUzLjU1NSAzNy43MjY2QzE1My44NDEgMzcuNTU5OSAxNTQuMDc2IDM3LjMzMzMgMTU0LjI1OCAzNy4wNDY5QzE1NC40NDUgMzYuNzYwNCAxNTQuNTgzIDM2LjQzMjMgMTU0LjY3MiAzNi4wNjI1QzE1NC43NiAzNS42ODc1IDE1NC44MDUgMzUuMjg5MSAxNTQuODA1IDM0Ljg2NzJaTTE2MS42NDEgMzAuNTQ2OVYzMS42NTYySDE1Ny4wN1YzMC41NDY5SDE2MS42NDFaTTE1OC42MTcgMjguNDkyMkgxNjAuMDYyVjM2LjkwNjJDMTYwLjA2MiAzNy4xOTI3IDE2MC4xMDcgMzcuNDA4OSAxNjAuMTk1IDM3LjU1NDdDMTYwLjI4NCAzNy43MDA1IDE2MC4zOTggMzcuNzk2OSAxNjAuNTM5IDM3Ljg0MzhDMTYwLjY4IDM3Ljg5MDYgMTYwLjgzMSAzNy45MTQxIDE2MC45OTIgMzcuOTE0MUMxNjEuMTEyIDM3LjkxNDEgMTYxLjIzNyAzNy45MDM2IDE2MS4zNjcgMzcuODgyOEMxNjEuNTAzIDM3Ljg1NjggMTYxLjYwNCAzNy44MzU5IDE2MS42NzIgMzcuODIwM0wxNjEuNjggMzlDMTYxLjU2NSAzOS4wMzY1IDE2MS40MTQgMzkuMDcwMyAxNjEuMjI3IDM5LjEwMTZDMTYxLjA0NCAzOS4xMzggMTYwLjgyMyAzOS4xNTYyIDE2MC41NjIgMzkuMTU2MkMxNjAuMjA4IDM5LjE1NjIgMTU5Ljg4MyAzOS4wODU5IDE1OS41ODYgMzguOTQ1M0MxNTkuMjg5IDM4LjgwNDcgMTU5LjA1MiAzOC41NzAzIDE1OC44NzUgMzguMjQyMkMxNTguNzAzIDM3LjkwODkgMTU4LjYxNyAzNy40NjA5IDE1OC42MTcgMzYuODk4NFYyOC40OTIyWk0xNjQuOTA2IDMwLjU0NjlWMzlIMTYzLjQ1M1YzMC41NDY5SDE2NC45MDZaTTE2My4zNDQgMjguMzA0N0MxNjMuMzQ0IDI4LjA3MDMgMTYzLjQxNCAyNy44NzI0IDE2My41NTUgMjcuNzEwOUMxNjMuNzAxIDI3LjU0OTUgMTYzLjkxNCAyNy40Njg4IDE2NC4xOTUgMjcuNDY4OEMxNjQuNDcxIDI3LjQ2ODggMTY0LjY4MiAyNy41NDk1IDE2NC44MjggMjcuNzEwOUMxNjQuOTc5IDI3Ljg3MjQgMTY1LjA1NSAyOC4wNzAzIDE2NS4wNTUgMjguMzA0N0MxNjUuMDU1IDI4LjUyODYgMTY0Ljk3OSAyOC43MjE0IDE2NC44MjggMjguODgyOEMxNjQuNjgyIDI5LjAzOTEgMTY0LjQ3MSAyOS4xMTcyIDE2NC4xOTUgMjkuMTE3MkMxNjMuOTE0IDI5LjExNzIgMTYzLjcwMSAyOS4wMzkxIDE2My41NTUgMjguODgyOEMxNjMuNDE0IDI4LjcyMTQgMTYzLjM0NCAyOC41Mjg2IDE2My4zNDQgMjguMzA0N1pNMTY2Ljg0NCAzNC44NjcyVjM0LjY4NzVDMTY2Ljg0NCAzNC4wNzgxIDE2Ni45MzIgMzMuNTEzIDE2Ny4xMDkgMzIuOTkyMkMxNjcuMjg2IDMyLjQ2NjEgMTY3LjU0MiAzMi4wMTA0IDE2Ny44NzUgMzEuNjI1QzE2OC4yMDggMzEuMjM0NCAxNjguNjEyIDMwLjkzMjMgMTY5LjA4NiAzMC43MTg4QzE2OS41NiAzMC41IDE3MC4wOTEgMzAuMzkwNiAxNzAuNjggMzAuMzkwNkMxNzEuMjczIDMwLjM5MDYgMTcxLjgwNyAzMC41IDE3Mi4yODEgMzAuNzE4OEMxNzIuNzYgMzAuOTMyMyAxNzMuMTY3IDMxLjIzNDQgMTczLjUgMzEuNjI1QzE3My44MzkgMzIuMDEwNCAxNzQuMDk2IDMyLjQ2NjEgMTc0LjI3MyAzMi45OTIyQzE3NC40NTEgMzMuNTEzIDE3NC41MzkgMzQuMDc4MSAxNzQuNTM5IDM0LjY4NzVWMzQuODY3MkMxNzQuNTM5IDM1LjQ3NjYgMTc0LjQ1MSAzNi4wNDE3IDE3NC4yNzMgMzYuNTYyNUMxNzQuMDk2IDM3LjA4MzMgMTczLjgzOSAzNy41MzkxIDE3My41IDM3LjkyOTdDMTczLjE2NyAzOC4zMTUxIDE3Mi43NjMgMzguNjE3MiAxNzIuMjg5IDM4LjgzNTlDMTcxLjgyIDM5LjA0OTUgMTcxLjI4OSAzOS4xNTYyIDE3MC42OTUgMzkuMTU2MkMxNzAuMTAyIDM5LjE1NjIgMTY5LjU2OCAzOS4wNDk1IDE2OS4wOTQgMzguODM1OUMxNjguNjIgMzguNjE3MiAxNjguMjE0IDM4LjMxNTEgMTY3Ljg3NSAzNy45Mjk3QzE2Ny41NDIgMzcuNTM5MSAxNjcuMjg2IDM3LjA4MzMgMTY3LjEwOSAzNi41NjI1QzE2Ni45MzIgMzYuMDQxNyAxNjYuODQ0IDM1LjQ3NjYgMTY2Ljg0NCAzNC44NjcyWk0xNjguMjg5IDM0LjY4NzVWMzQuODY3MkMxNjguMjg5IDM1LjI4OTEgMTY4LjMzOSAzNS42ODc1IDE2OC40MzggMzYuMDYyNUMxNjguNTM2IDM2LjQzMjMgMTY4LjY4NSAzNi43NjA0IDE2OC44ODMgMzcuMDQ2OUMxNjkuMDg2IDM3LjMzMzMgMTY5LjMzOSAzNy41NTk5IDE2OS42NDEgMzcuNzI2NkMxNjkuOTQzIDM3Ljg4OCAxNzAuMjk0IDM3Ljk2ODggMTcwLjY5NSAzNy45Njg4QzE3MS4wOTEgMzcuOTY4OCAxNzEuNDM4IDM3Ljg4OCAxNzEuNzM0IDM3LjcyNjZDMTcyLjAzNiAzNy41NTk5IDE3Mi4yODYgMzcuMzMzMyAxNzIuNDg0IDM3LjA0NjlDMTcyLjY4MiAzNi43NjA0IDE3Mi44MzEgMzYuNDMyMyAxNzIuOTMgMzYuMDYyNUMxNzMuMDM0IDM1LjY4NzUgMTczLjA4NiAzNS4yODkxIDE3My4wODYgMzQuODY3MlYzNC42ODc1QzE3My4wODYgMzQuMjcwOCAxNzMuMDM0IDMzLjg3NzYgMTcyLjkzIDMzLjUwNzhDMTcyLjgzMSAzMy4xMzI4IDE3Mi42OCAzMi44MDIxIDE3Mi40NzcgMzIuNTE1NkMxNzIuMjc5IDMyLjIyNCAxNzIuMDI5IDMxLjk5NDggMTcxLjcyNyAzMS44MjgxQzE3MS40MyAzMS42NjE1IDE3MS4wODEgMzEuNTc4MSAxNzAuNjggMzEuNTc4MUMxNzAuMjg0IDMxLjU3ODEgMTY5LjkzNSAzMS42NjE1IDE2OS42MzMgMzEuODI4MUMxNjkuMzM2IDMxLjk5NDggMTY5LjA4NiAzMi4yMjQgMTY4Ljg4MyAzMi41MTU2QzE2OC42ODUgMzIuODAyMSAxNjguNTM2IDMzLjEzMjggMTY4LjQzOCAzMy41MDc4QzE2OC4zMzkgMzMuODc3NiAxNjguMjg5IDM0LjI3MDggMTY4LjI4OSAzNC42ODc1Wk0xNzcuNzk3IDMyLjM1MTZWMzlIMTc2LjM1MlYzMC41NDY5SDE3Ny43MTlMMTc3Ljc5NyAzMi4zNTE2Wk0xNzcuNDUzIDM0LjQ1MzFMMTc2Ljg1MiAzNC40Mjk3QzE3Ni44NTcgMzMuODUxNiAxNzYuOTQzIDMzLjMxNzcgMTc3LjEwOSAzMi44MjgxQzE3Ny4yNzYgMzIuMzMzMyAxNzcuNTEgMzEuOTAzNiAxNzcuODEyIDMxLjUzOTFDMTc4LjExNSAzMS4xNzQ1IDE3OC40NzQgMzAuODkzMiAxNzguODkxIDMwLjY5NTNDMTc5LjMxMiAzMC40OTIyIDE3OS43NzkgMzAuMzkwNiAxODAuMjg5IDMwLjM5MDZDMTgwLjcwNiAzMC4zOTA2IDE4MS4wODEgMzAuNDQ3OSAxODEuNDE0IDMwLjU2MjVDMTgxLjc0NyAzMC42NzE5IDE4Mi4wMzEgMzAuODQ5IDE4Mi4yNjYgMzEuMDkzOEMxODIuNTA1IDMxLjMzODUgMTgyLjY4OCAzMS42NTYyIDE4Mi44MTIgMzIuMDQ2OUMxODIuOTM4IDMyLjQzMjMgMTgzIDMyLjkwMzYgMTgzIDMzLjQ2MDlWMzlIMTgxLjU0N1YzMy40NDUzQzE4MS41NDcgMzMuMDAyNiAxODEuNDgyIDMyLjY0ODQgMTgxLjM1MiAzMi4zODI4QzE4MS4yMjEgMzIuMTEyIDE4MS4wMzEgMzEuOTE2NyAxODAuNzgxIDMxLjc5NjlDMTgwLjUzMSAzMS42NzE5IDE4MC4yMjQgMzEuNjA5NCAxNzkuODU5IDMxLjYwOTRDMTc5LjUgMzEuNjA5NCAxNzkuMTcyIDMxLjY4NDkgMTc4Ljg3NSAzMS44MzU5QzE3OC41ODMgMzEuOTg3IDE3OC4zMzEgMzIuMTk1MyAxNzguMTE3IDMyLjQ2MDlDMTc3LjkwOSAzMi43MjY2IDE3Ny43NDUgMzMuMDMxMiAxNzcuNjI1IDMzLjM3NUMxNzcuNTEgMzMuNzEzNSAxNzcuNDUzIDM0LjA3MjkgMTc3LjQ1MyAzNC40NTMxWk0xOTMuNzU4IDI3LjU2MjVWMzlIMTkyLjMxMlYyOS4zNjcyTDE4OS4zOTggMzAuNDI5N1YyOS4xMjVMMTkzLjUzMSAyNy41NjI1SDE5My43NThaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0PGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwXzE0N18yMjUxKVwiPlxuXHRcdFx0PHBhdGggZD1cIk0xMzEgMjcuMThMMTE5LjU5IDM4LjZMMTE1LjM1IDM0LjM2TDExNi43NiAzMi45NUwxMTkuNTkgMzUuNzhMMTI5LjU5IDI1Ljc4TDEzMSAyNy4xOFpNMTI4Ljc5IDMyLjIyQzEyOC45MiAzMi43OSAxMjkgMzMuMzkgMTI5IDM0QzEyOSAzOC40MiAxMjUuNDIgNDIgMTIxIDQyQzExNi41OCA0MiAxMTMgMzguNDIgMTEzIDM0QzExMyAyOS41OCAxMTYuNTggMjYgMTIxIDI2QzEyMi41OCAyNiAxMjQuMDQgMjYuNDYgMTI1LjI4IDI3LjI1TDEyNi43MiAyNS44MUMxMjUuMSAyNC42NyAxMjMuMTMgMjQgMTIxIDI0QzExNS40OCAyNCAxMTEgMjguNDggMTExIDM0QzExMSAzOS41MiAxMTUuNDggNDQgMTIxIDQ0QzEyNi41MiA0NCAxMzEgMzkuNTIgMTMxIDM0QzEzMSAzMi44MSAxMzAuNzggMzEuNjcgMTMwLjQgMzAuNjFMMTI4Ljc5IDMyLjIyWlwiIGZpbGw9XCIjNDI3MkY5XCIvPlxuXHRcdDwvZz5cblx0XHQ8ZGVmcz5cblx0XHRcdDxjbGlwUGF0aCBpZD1cImNsaXAwXzE0N18yMjUxXCI+XG5cdFx0XHRcdDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGZpbGw9XCJ3aGl0ZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDkgMjIpXCIvPlxuXHRcdFx0PC9jbGlwUGF0aD5cblx0XHQ8L2RlZnM+XG5cdDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJldmlldzsiLCJjb25zdCB7XG5cdCAgICAgIHVzZUlubmVyQmxvY2tzUHJvcHMsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgRnJhZ21lbnQsXG4gICAgICB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZUFkdmFuY2VkQ2hvaWNlKCkge1xuXHRjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcy5zYXZlKCk7XG5cblx0cmV0dXJuIDxGcmFnbWVudCB7IC4uLmlubmVyQmxvY2tzUHJvcHMgfSAvPjtcbn0iLCJjb25zdCB7XG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCBTUEVDSUZJQ19JTkNMVURFID0gW1xuXHQnamV0LWZvcm1zL2Nob2ljZS1jb250cm9sJyxcbl07XG5cbmZ1bmN0aW9uIHVzZUFsbG93ZWRCbG9ja3MoKSB7XG5cdHJldHVybiB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHtcblx0XHRcdGNvbnN0IGFsbG93ZWRCbG9ja3MgPSBbXTtcblx0XHRcdGNvbnN0IGJsb2NrVHlwZXMgICAgPSBzZWxlY3QoICdjb3JlL2Jsb2NrcycgKS5nZXRCbG9ja1R5cGVzKCk7XG5cblx0XHRcdGZvciAoIGNvbnN0IGJsb2NrVHlwZSBvZiBibG9ja1R5cGVzICkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0YmxvY2tUeXBlLm5hbWUgJiYgKFxuXHRcdFx0XHRcdFx0U1BFQ0lGSUNfSU5DTFVERS5pbmNsdWRlcyggYmxvY2tUeXBlLm5hbWUgKSB8fFxuXHRcdFx0XHRcdFx0IWJsb2NrVHlwZS5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0YWxsb3dlZEJsb2Nrcy5wdXNoKCBibG9ja1R5cGUubmFtZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhbGxvd2VkQmxvY2tzO1xuXHRcdH0sXG5cdFx0W10sXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFsbG93ZWRCbG9ja3M7IiwiaW1wb3J0IENob2ljZXNGaWVsZENvbnRleHQgZnJvbSAnLi4vY2hvaWNlcy1maWVsZC9jb250ZXh0JztcbmltcG9ydCBDaG9pY2VJdGVtQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlQ29udGV4dCxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG4vKipcbiAqIFVzZWQgZm9yIG1hbmlwdWxhdGluZyBjaGVja2VkL3VuY2hlY2tlZCBzdGF0ZSBmb3IgY2hvaWNlcy5cbiAqIFRoYW5rcyB0byB0aGlzLCB5b3UgY2FuIG9ic2VydmUgdGhlIGFwcGVhcmFuY2UgaW4gYm90aCBzdGF0ZXMgb2YgdGhlIGJsb2NrLlxuICpcbiAqIFRoaXMgaG9vayBoYXMgbm8gZWZmZWN0IG9uIGJsb2NrIGF0dHJpYnV0ZXMuXG4gKlxuICogQHJldHVybnMgeygqfChmdW5jdGlvbigpOiB2b2lkKSlbXX1cbiAqL1xuZnVuY3Rpb24gdXNlQ2hlY2tlZENob2ljZVN0YXRlKCkge1xuXHRjb25zdCB7IGNsaWVudElkLCBuYW1lIH0gICAgICAgICA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcblx0Y29uc3QgeyBjdXJyZW50LCB1cGRhdGVDdXJyZW50IH0gPSB1c2VDb250ZXh0KCBDaG9pY2VzRmllbGRDb250ZXh0ICk7XG5cblx0Y29uc3QgeyBjbGllbnRJZDogcGFyZW50SWQgfSA9IHVzZUNvbnRleHQoIENob2ljZUl0ZW1Db250ZXh0ICk7XG5cblx0aWYgKCAnamV0LWZvcm1zL2Nob2ljZScgPT09IG5hbWUgKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdGN1cnJlbnQuaW5jbHVkZXM/LiggY2xpZW50SWQgKSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0dXBkYXRlQ3VycmVudCggY2xpZW50SWQgKTtcblx0XHRcdH0sXG5cdFx0XTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0Y3VycmVudC5pbmNsdWRlcz8uKCBwYXJlbnRJZCApLFxuXHRcdCgpID0+IHtcblx0XHRcdHVwZGF0ZUN1cnJlbnQoIHBhcmVudElkICk7XG5cdFx0fSxcblx0XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2hlY2tlZENob2ljZVN0YXRlOyIsImNvbnN0IHtcblx0ICAgICAgVG9vbGJhckJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIFNWRyxcblx0ICAgICAgUGF0aCxcbiAgICAgIH0gPSB3cC5wcmltaXRpdmVzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG4gICAgICB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHQgICAgICB1c2VDYWxsYmFjayxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdCAgICAgIGNyZWF0ZUJsb2NrLFxuICAgICAgfSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHQgICAgICB1c2VEaXNwYXRjaCxcblx0ICAgICAgc2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIEFkZENob2ljZUJ1dHRvbigpIHtcblx0Y29uc3QgeyBjbGllbnRJZCB9ICAgID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXHRjb25zdCB7IGluc2VydEJsb2NrIH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXG5cdGNvbnN0IGFkZENob2ljZSA9IHVzZUNhbGxiYWNrKFxuXHRcdCgpID0+IHtcblx0XHRcdGNvbnN0IGNvdW50QmxvY2tzID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tDb3VudChcblx0XHRcdFx0Y2xpZW50SWQsXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCBjaG9pY2UgPSBjcmVhdGVCbG9jayhcblx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGB2YWx1ZS1vZi0ke2NvdW50QmxvY2tzfS1jaG9pY2VgLFxuXHRcdFx0XHRcdGNhbGNfdmFsdWU6IGNvdW50QmxvY2tzLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHRpbnNlcnRCbG9jayggY2hvaWNlLCBjb3VudEJsb2NrcywgY2xpZW50SWQgKTtcblx0XHR9LFxuXHRcdFsgY2xpZW50SWQgXSxcblx0KTtcblx0cmV0dXJuIChcblx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0b25DbGljaz17IGFkZENob2ljZSB9XG5cdFx0XHRpY29uPXsgPFNWRyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuXHRcdFx0XHQ8UGF0aFxuXHRcdFx0XHRcdGQ9XCJNMTguNSA1LjVWOEgyMFY1LjVoMi41VjRIMjBWMS41aC0xLjVWNEgxNnYxLjVoMi41ek0xMiA0SDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0ydi02aC0xLjV2NmEuNS41IDAgMDEtLjUuNUg2YS41LjUgMCAwMS0uNS0uNVY2YS41LjUgMCAwMS41LS41aDZWNHpcIi8+XG5cdFx0XHQ8L1NWRz4gfVxuXHRcdFx0bGFiZWw9eyBfXyggJ0FkZCBuZXcgQ2hvaWNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENob2ljZUJ1dHRvbjsiLCJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENob2ljZXNGaWVsZENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCB7XG5cdGN1cnJlbnQ6IGZhbHNlLFxuXHR1cGRhdGVDdXJyZW50OiAoKSA9PiB7fSxcbn0gKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hvaWNlc0ZpZWxkQ29udGV4dDsiLCJpbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnLi9wbGFjZWhvbGRlcic7XG5pbXBvcnQgQ2hvaWNlc0ZpZWxkQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IEFkZENob2ljZUJ1dHRvbiBmcm9tICcuL0FkZENob2ljZUJ1dHRvbic7XG5pbXBvcnQgcHJldmlldyBmcm9tICcuL3ByZXZpZXcnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5sZXQge1xuXHQgICAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdCAgICB1c2VCbG9ja1Byb3BzLFxuXHQgICAgdXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0ICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIFRvb2xCYXJGaWVsZHMsXG5cdCAgICAgIEJsb2NrTGFiZWwsXG5cdCAgICAgIEJsb2NrTmFtZSxcblx0ICAgICAgQmxvY2tEZXNjcmlwdGlvbixcblx0ICAgICAgQmxvY2tBZHZhbmNlZFZhbHVlLFxuXHQgICAgICBGaWVsZFdyYXBwZXIsXG5cdCAgICAgIFN0eWxlUGFuZWwsXG5cdCAgICAgIFN0eWxlQ29sb3JJdGVtLFxuXHQgICAgICBTdHlsZUNvbG9ySXRlbXNXcmFwcGVyLFxuXHQgICAgICBTdHlsZUJvcmRlckl0ZW0sXG5cdCAgICAgIFN0eWxlQm9yZGVyUmFkaXVzSXRlbSxcblx0ICAgICAgU3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHMsXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIFBhbmVsQm9keSxcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUpldFN0eWxlLFxuXHQgICAgICB1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUsXG5cdCAgICAgIHVzZVVuaXFLZXksXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuY29uc3Qge1xuXHQgICAgICB1c2VTdGF0ZSxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFsgJ2pldC1mb3Jtcy9jaG9pY2UnIF07XG5cbmNvbnN0IERlZmF1bHRQbGFjZUhvbGRlciA9ICgpID0+IHtcblx0Y29uc3QgeyBjbGllbnRJZCB9ID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xuXG5cdGNvbnN0IGlkMSA9IGNsaWVudElkICsgJ3NhbXBsZS1jb250cm9sLTEnO1xuXHRjb25zdCBpZDIgPSBjbGllbnRJZCArICdzYW1wbGUtY29udHJvbC0yJztcblxuXHRyZXR1cm4gPD5cblx0XHQ8bGkgY2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW1cIj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyLWNob2ljZS0taXRlbS1jb250cm9sJyB9PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRpZD17IGlkMSB9XG5cdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0tY29udHJvbC1pbnB1dCcgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj17IGlkMSB9PlxuXHRcdFx0XHRcdHsgX18oICdJdGVtICMxJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvbGk+XG5cdFx0PGxpIGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtXCI+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0tY29udHJvbCcgfT5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0aWQ9eyBpZDIgfVxuXHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtLWNvbnRyb2wtaW5wdXQnIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9eyBpZDIgfT5cblx0XHRcdFx0XHR7IF9fKCAnSXRlbSAjMicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2xpPlxuXHQ8Lz47XG59O1xuXG5mdW5jdGlvbiB1c2VDcmVhdGVDdXJyZW50Q2hvaWNlKCB7IGFsbG93X211bHRpcGxlIH0gKSB7XG5cdGNvbnN0IFsgY3VycmVudCwgc2V0Q3VycmVudCBdID0gdXNlU3RhdGUoXG5cdFx0KCkgPT4gYWxsb3dfbXVsdGlwbGUgPyBbXSA6ICcnLFxuXHQpO1xuXG5cdGNvbnN0IHVwZGF0ZUN1cnJlbnQgPSB2YWx1ZSA9PiB7XG5cdFx0aWYgKCAhYWxsb3dfbXVsdGlwbGUgKSB7XG5cdFx0XHRzZXRDdXJyZW50KCBjdXJyZW50ICE9PSB2YWx1ZSA/IHZhbHVlIDogJycgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRlbXBDdXJyZW50ID0gQXJyYXkuaXNBcnJheSggY3VycmVudCApID8gY3VycmVudCA6IFsgY3VycmVudCBdO1xuXG5cdFx0aWYgKCAhdGVtcEN1cnJlbnQuaW5jbHVkZXMoIHZhbHVlICkgKSB7XG5cdFx0XHRzZXRDdXJyZW50KCBbIC4uLnRlbXBDdXJyZW50LCB2YWx1ZSBdICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZXRDdXJyZW50KCB0ZW1wQ3VycmVudC5maWx0ZXIoXG5cdFx0XHRpdGVtID0+IGl0ZW0gIT09IHZhbHVlLFxuXHRcdCkgKTtcblx0fTtcblxuXHRyZXR1cm4geyBjdXJyZW50LCB1cGRhdGVDdXJyZW50IH07XG59XG5cbmNvbnN0IGJhc2VQcm9wcyA9IHtcblx0Y2xhc3NOYW1lOiAnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEFkdmFuY2VkQ2hvaWNlc0ZpZWxkKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdCAgICAgIGlzU2VsZWN0ZWQsXG5cdFx0ICAgICAgYXR0cmlidXRlcyxcblx0XHQgICAgICBzZXRBdHRyaWJ1dGVzLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0dXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlKCk7XG5cblx0Y29uc3QgdW5pcUtleSAgICA9IHVzZVVuaXFLZXkoKTtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblx0Y29uc3QgamV0U3R5bGUgICA9IHVzZUpldFN0eWxlKCBiYXNlUHJvcHMgKTtcblxuXHRjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcyggamV0U3R5bGUsIHtcblx0XHRhbGxvd2VkQmxvY2tzOiBBTExPV0VEX0JMT0NLUyxcblx0XHRwbGFjZWhvbGRlcjogaXNTZWxlY3RlZCA/IDxQbGFjZWhvbGRlci8+IDogPERlZmF1bHRQbGFjZUhvbGRlci8+LFxuXHR9ICk7XG5cblx0Y29uc3Qgc3RhdGUgPSB1c2VDcmVhdGVDdXJyZW50Q2hvaWNlKCBhdHRyaWJ1dGVzICk7XG5cblx0aWYgKCBhdHRyaWJ1dGVzLmlzUHJldmlldyApIHtcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17IHtcblx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0fSB9PlxuXHRcdFx0eyBwcmV2aWV3IH1cblx0XHQ8L2Rpdj47XG5cdH1cblxuXHRyZXR1cm4gPENob2ljZXNGaWVsZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9eyBzdGF0ZSB9PlxuXHRcdDxUb29sQmFyRmllbGRzPlxuXHRcdFx0PEFkZENob2ljZUJ1dHRvbi8+XG5cdFx0PC9Ub29sQmFyRmllbGRzPlxuXHRcdHsgKFxuXHRcdFx0IWF0dHJpYnV0ZXMuYWxsb3dfbXVsdGlwbGVcblx0XHQpICYmIDxTd2l0Y2hQYWdlT25DaGFuZ2VDb250cm9scy8+IH1cblx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdHZW5lcmFsJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfT5cblx0XHRcdFx0PEJsb2NrTGFiZWwvPlxuXHRcdFx0XHQ8QmxvY2tOYW1lLz5cblx0XHRcdFx0PEJsb2NrRGVzY3JpcHRpb24vPlxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0FsbG93IG11bHRpcGxlIGNob2ljZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuYWxsb3dfbXVsdGlwbGUgfVxuXHRcdFx0XHRcdGhlbHA9eyBfXyhcblx0XHRcdFx0XHRcdGBFbmFibGUgdGhpcyBvcHRpb24gaWYgeW91IG5lZWQgdG8gYmUgYWJsZSBcbnRvIHNlbGVjdCBtdWx0aXBsZSBvcHRpb25zYCxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17XG5cdFx0XHRcdFx0XHRhbGxvd19tdWx0aXBsZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGFsbG93X211bHRpcGxlIH0gKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJsb2NrQWR2YW5jZWRWYWx1ZVxuXHRcdFx0XHRcdGhlbHA9eyBhdHRyaWJ1dGVzLmFsbG93X211bHRpcGxlICYmIF9fKFxuXHRcdFx0XHRcdFx0YFlvdSBzaG91bGQgbGlzdCB0aGUgY2hvaWNlIFxudmFsdWVzIHNlcGFyYXRlZCBieSBjb21tYXMgdGhhdCBzaG91bGQgYmUgc2VsZWN0ZWQgYnkgZGVmYXVsdC4gQnV0IHRoaXMgXG5pcyBub3QgdGhlIGNhc2Ugd2hlbiB5b3UgdXNlIGEgZHluYW1pYyB2YWx1ZSB1c2luZyBhIHByZXNldCwgbWFjcm9zLCBldGMuYCxcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0PEluc3BlY3RvckNvbnRyb2xzIGdyb3VwPVwic3R5bGVzXCI+XG5cdFx0XHQ8U3R5bGVQYW5lbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnRGVmYXVsdCBjaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxTdHlsZUNvbG9ySXRlbXNXcmFwcGVyPlxuXHRcdFx0XHRcdDxTdHlsZUNvbG9ySXRlbVxuXHRcdFx0XHRcdFx0Y3NzVmFyPVwiLS1qZmItY2hvaWNlLXRleHRcIlxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1RleHQgQ2hvaWNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFN0eWxlQ29sb3JJdGVtXG5cdFx0XHRcdFx0XHRjc3NWYXI9XCItLWpmYi1jaG9pY2UtYmdcIlxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0JhY2tncm91bmQgQ2hvaWNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvU3R5bGVDb2xvckl0ZW1zV3JhcHBlcj5cblx0XHRcdFx0PFN0eWxlQm9yZGVySXRlbVxuXHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1ib3JkZXJcIlxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdCb3JkZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0ZW5hYmxlQWxwaGFcblx0XHRcdFx0XHRsYWJlbEZvckNvbnRyb2xcblx0XHRcdFx0Lz5cblx0XHRcdFx0PFN0eWxlQm9yZGVyUmFkaXVzSXRlbVxuXHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1ib3JkZXItcmFkaXVzXCJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnUmFkaXVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TdHlsZVBhbmVsPlxuXHRcdFx0PFN0eWxlUGFuZWxcblx0XHRcdFx0bGFiZWw9eyBfXyggJ0hvdmVyIGNob2ljZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdD5cblx0XHRcdFx0PFN0eWxlQ29sb3JJdGVtc1dyYXBwZXI+XG5cdFx0XHRcdFx0PFN0eWxlQ29sb3JJdGVtXG5cdFx0XHRcdFx0XHRjc3NWYXI9XCItLWpmYi1jaG9pY2UtaG92ZXItdGV4dFwiXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVGV4dCBDaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U3R5bGVDb2xvckl0ZW1cblx0XHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1ob3Zlci1iZ1wiXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQmFja2dyb3VuZCBDaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TdHlsZUNvbG9ySXRlbXNXcmFwcGVyPlxuXHRcdFx0XHQ8U3R5bGVCb3JkZXJJdGVtXG5cdFx0XHRcdFx0Y3NzVmFyPVwiLS1qZmItY2hvaWNlLWhvdmVyLWJvcmRlclwiXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0JvcmRlcicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRlbmFibGVBbHBoYVxuXHRcdFx0XHRcdGxhYmVsRm9yQ29udHJvbFxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8U3R5bGVCb3JkZXJSYWRpdXNJdGVtXG5cdFx0XHRcdFx0Y3NzVmFyPVwiLS1qZmItY2hvaWNlLWhvdmVyLWJvcmRlci1yYWRpdXNcIlxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdSYWRpdXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1N0eWxlUGFuZWw+XG5cdFx0XHQ8U3R5bGVQYW5lbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnQ2hlY2tlZCBjaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxTdHlsZUNvbG9ySXRlbXNXcmFwcGVyPlxuXHRcdFx0XHRcdDxTdHlsZUNvbG9ySXRlbVxuXHRcdFx0XHRcdFx0Y3NzVmFyPVwiLS1qZmItY2hvaWNlLWNoZWNrZWQtdGV4dFwiXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVGV4dCBDaG9pY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U3R5bGVDb2xvckl0ZW1cblx0XHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1jaGVja2VkLWJnXCJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdCYWNrZ3JvdW5kIENob2ljZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1N0eWxlQ29sb3JJdGVtc1dyYXBwZXI+XG5cdFx0XHRcdDxTdHlsZUJvcmRlckl0ZW1cblx0XHRcdFx0XHRjc3NWYXI9XCItLWpmYi1jaG9pY2UtY2hlY2tlZC1ib3JkZXJcIlxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdCb3JkZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0ZW5hYmxlQWxwaGFcblx0XHRcdFx0XHRsYWJlbEZvckNvbnRyb2xcblx0XHRcdFx0Lz5cblx0XHRcdFx0PFN0eWxlQm9yZGVyUmFkaXVzSXRlbVxuXHRcdFx0XHRcdGNzc1Zhcj1cIi0tamZiLWNob2ljZS1jaGVja2VkLWJvcmRlci1yYWRpdXNcIlxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdSYWRpdXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1N0eWxlUGFuZWw+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2tXcmFwcGVyJyApIH0+XG5cdFx0XHRcdDx1bFxuXHRcdFx0XHRcdHsgLi4uaW5uZXJCbG9ja3NQcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cblx0XHQ8L2Rpdj5cblx0PC9DaG9pY2VzRmllbGRDb250ZXh0LlByb3ZpZGVyPjtcbn0iLCJpbXBvcnQgRWRpdEFkdmFuY2VkQ2hvaWNlc0ZpZWxkIGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnQGJsb2Nrcy9jaG9pY2VzLWZpZWxkL2Jsb2NrLmpzb24nO1xuaW1wb3J0IHZhcmlhdGlvbnMgZnJvbSAnLi92YXJpYXRpb25zJztcbmltcG9ydCBTYXZlQWR2YW5jZWRDaG9pY2VzRmllbGQgZnJvbSAnLi9zYXZlJztcbmltcG9ydCB0cmFuc2Zvcm1zIGZyb20gJy4vdHJhbnNmb3Jtcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgbmFtZSxcblx0ICAgICAgaWNvbixcbiAgICAgIH0gPSBtZXRhZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG4vLyBjb21wYXRpYmlsaXR5IHdpdGggV29yZFByZXNzIDw9IDYuMlxubWV0YWRhdGEuc3VwcG9ydHMuX19leHBlcmltZW50YWxMYXlvdXQgPSBtZXRhZGF0YS5zdXBwb3J0cy5sYXlvdXQ7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRkZXNjcmlwdGlvbjogX18oXG5cdFx0YFR1cm4gYW55IGJsb2NrLCB0ZXh0LCBpbWFnZXMsIG9yIG90aGVyIG9iamVjdHMgaW50byB0aGUgb2JqZWN0IFxuZm9yIHNlbGVjdGlvbiB3aXRoIHRoaXMgYmxvY2suYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdGVkaXQ6IEVkaXRBZHZhbmNlZENob2ljZXNGaWVsZCxcblx0c2F2ZTogU2F2ZUFkdmFuY2VkQ2hvaWNlc0ZpZWxkLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxuXHRcdH0sXG5cdH0sXG5cdHZhcmlhdGlvbnMsXG5cdHRyYW5zZm9ybXMsXG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3MsXG59O1xuIiwiaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlRGlzcGF0Y2gsXG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIGNyZWF0ZUJsb2Nrc0Zyb21Jbm5lckJsb2Nrc1RlbXBsYXRlLFxuICAgICAgfSA9IHdwLmJsb2NrcztcblxubGV0IHtcblx0ICAgIF9fZXhwZXJpbWVudGFsQmxvY2tWYXJpYXRpb25QaWNrZXIsXG5cdCAgICBCbG9ja1ZhcmlhdGlvblBpY2tlcixcblx0ICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5CbG9ja1ZhcmlhdGlvblBpY2tlciA9IChcblx0QmxvY2tWYXJpYXRpb25QaWNrZXIgfHwgX19leHBlcmltZW50YWxCbG9ja1ZhcmlhdGlvblBpY2tlclxuKTtcblxuY29uc3Qge1xuXHQgICAgICB1c2VCbG9ja0F0dHJpYnV0ZXMsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuZnVuY3Rpb24gUGxhY2Vob2xkZXIoKSB7XG5cdGNvbnN0IHsgY2xpZW50SWQgfSAgICAgICAgICAgPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cdGNvbnN0IFsgLCBzZXRBdHRyaWJ1dGVzIF0gICAgPSB1c2VCbG9ja0F0dHJpYnV0ZXMoKTtcblx0Y29uc3QgeyByZXBsYWNlSW5uZXJCbG9ja3MgfSA9IHVzZURpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICk7XG5cblx0Y29uc3QgeyB2YXJpYXRpb25zLCBkZWZhdWx0VmFyaWF0aW9uIH0gPSB1c2VTZWxlY3QoXG5cdFx0KCBzZWxlY3QgKSA9PiB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdCAgICAgIGdldEJsb2NrVmFyaWF0aW9ucyxcblx0XHRcdFx0ICAgICAgZ2V0RGVmYXVsdEJsb2NrVmFyaWF0aW9uLFxuXHRcdFx0ICAgICAgfSA9IHNlbGVjdCggJ2NvcmUvYmxvY2tzJyApO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkZWZhdWx0VmFyaWF0aW9uOiBnZXREZWZhdWx0QmxvY2tWYXJpYXRpb24oIG5hbWUgKSxcblx0XHRcdFx0dmFyaWF0aW9uczogZ2V0QmxvY2tWYXJpYXRpb25zKCBuYW1lLCAnYmxvY2snICksXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0W10sXG5cdCk7XG5cblx0cmV0dXJuIDxCbG9ja1ZhcmlhdGlvblBpY2tlclxuXHRcdGFsbG93U2tpcFxuXHRcdGxhYmVsPXsgX18oICdTZWxlY3QgY2hvaWNlcyBsYXlvdXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0aW5zdHJ1Y3Rpb25zPXsgX18oXG5cdFx0XHQnWW91IGNhbiBzZWxlY3Qgb25lIG9mIHByZWRlZmluZWQgbGF5b3V0LCBvciBidWlsZCBjdXN0b20nLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCkgfVxuXHRcdHZhcmlhdGlvbnM9eyB2YXJpYXRpb25zIH1cblx0XHRvblNlbGVjdD17ICggbmV4dFZhcmlhdGlvbiA9IGRlZmF1bHRWYXJpYXRpb24gKSA9PiB7XG5cdFx0XHRpZiAoIG5leHRWYXJpYXRpb24uYXR0cmlidXRlcyApIHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggbmV4dFZhcmlhdGlvbi5hdHRyaWJ1dGVzICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIG5leHRWYXJpYXRpb24uaW5uZXJCbG9ja3MgKSB7XG5cdFx0XHRcdHJlcGxhY2VJbm5lckJsb2Nrcyhcblx0XHRcdFx0XHRjbGllbnRJZCxcblx0XHRcdFx0XHRjcmVhdGVCbG9ja3NGcm9tSW5uZXJCbG9ja3NUZW1wbGF0ZShcblx0XHRcdFx0XHRcdG5leHRWYXJpYXRpb24uaW5uZXJCbG9ja3MsXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR0cnVlLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gfVxuXHQvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhY2Vob2xkZXI7IiwiY29uc3QgcHJldmlldyA9IChcblx0PHN2ZyB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHZpZXdCb3g9XCIwIDAgMjk4IDE0NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxyZWN0IHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgcng9XCI0XCIgZmlsbD1cIiNFMkU4RjBcIi8+XG5cdFx0PHJlY3QgeD1cIjEyXCIgeT1cIjEyXCIgd2lkdGg9XCI4NlwiIGhlaWdodD1cIjEyMFwiIHJ4PVwiOFwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHQ8cmVjdCB4PVwiMjBcIiB5PVwiNDRcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiNjBcIiByeD1cIjRcIiBmaWxsPVwiI0YxRjVGOVwiLz5cblx0XHQ8cGF0aCBkPVwiTTY3IDg2VjYySDQzVjg2SDY3Wk01MC4zMzMzIDc2TDUzLjY2NjcgODAuMDEzM0w1OC4zMzMzIDc0TDY0LjMzMzMgODJINDUuNjY2N0w1MC4zMzMzIDc2WlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxuXHRcdDxyZWN0IHg9XCIyMFwiIHk9XCIxMTBcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxuXHRcdDxyZWN0IHg9XCIyMFwiIHk9XCIxMTZcIiB3aWR0aD1cIjU4XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxuXHRcdDxwYXRoIGQ9XCJNNDcuNTU4NiAyNy40NjQ4VjI4LjAwMzlDNDcuNTU4NiAyOC42NDQ1IDQ3LjQ3ODUgMjkuMjE4OCA0Ny4zMTg0IDI5LjcyNjZDNDcuMTU4MiAzMC4yMzQ0IDQ2LjkyNzcgMzAuNjY2IDQ2LjYyNyAzMS4wMjE1QzQ2LjMyNjIgMzEuMzc3IDQ1Ljk2NDggMzEuNjQ4NCA0NS41NDMgMzEuODM1OUM0NS4xMjUgMzIuMDIzNCA0NC42NTYyIDMyLjExNzIgNDQuMTM2NyAzMi4xMTcyQzQzLjYzMjggMzIuMTE3MiA0My4xNjk5IDMyLjAyMzQgNDIuNzQ4IDMxLjgzNTlDNDIuMzMwMSAzMS42NDg0IDQxLjk2NjggMzEuMzc3IDQxLjY1ODIgMzEuMDIxNUM0MS4zNTM1IDMwLjY2NiA0MS4xMTcyIDMwLjIzNDQgNDAuOTQ5MiAyOS43MjY2QzQwLjc4MTIgMjkuMjE4OCA0MC42OTczIDI4LjY0NDUgNDAuNjk3MyAyOC4wMDM5VjI3LjQ2NDhDNDAuNjk3MyAyNi44MjQyIDQwLjc3OTMgMjYuMjUyIDQwLjk0MzQgMjUuNzQ4QzQxLjExMTMgMjUuMjQwMiA0MS4zNDc3IDI0LjgwODYgNDEuNjUyMyAyNC40NTMxQzQxLjk1NyAyNC4wOTM4IDQyLjMxODQgMjMuODIwMyA0Mi43MzYzIDIzLjYzMjhDNDMuMTU4MiAyMy40NDUzIDQzLjYyMTEgMjMuMzUxNiA0NC4xMjUgMjMuMzUxNkM0NC42NDQ1IDIzLjM1MTYgNDUuMTEzMyAyMy40NDUzIDQ1LjUzMTIgMjMuNjMyOEM0NS45NTMxIDIzLjgyMDMgNDYuMzE0NSAyNC4wOTM4IDQ2LjYxNTIgMjQuNDUzMUM0Ni45MTk5IDI0LjgwODYgNDcuMTUyMyAyNS4yNDAyIDQ3LjMxMjUgMjUuNzQ4QzQ3LjQ3NjYgMjYuMjUyIDQ3LjU1ODYgMjYuODI0MiA0Ny41NTg2IDI3LjQ2NDhaTTQ2LjQzOTUgMjguMDAzOVYyNy40NTMxQzQ2LjQzOTUgMjYuOTQ1MyA0Ni4zODY3IDI2LjQ5NjEgNDYuMjgxMiAyNi4xMDU1QzQ2LjE3OTcgMjUuNzE0OCA0Ni4wMjkzIDI1LjM4NjcgNDUuODMwMSAyNS4xMjExQzQ1LjYzMDkgMjQuODU1NSA0NS4zODY3IDI0LjY1NDMgNDUuMDk3NyAyNC41MTc2QzQ0LjgxMjUgMjQuMzgwOSA0NC40ODgzIDI0LjMxMjUgNDQuMTI1IDI0LjMxMjVDNDMuNzczNCAyNC4zMTI1IDQzLjQ1NTEgMjQuMzgwOSA0My4xNjk5IDI0LjUxNzZDNDIuODg4NyAyNC42NTQzIDQyLjY0NjUgMjQuODU1NSA0Mi40NDM0IDI1LjEyMTFDNDIuMjQ0MSAyNS4zODY3IDQyLjA4OTggMjUuNzE0OCA0MS45ODA1IDI2LjEwNTVDNDEuODcxMSAyNi40OTYxIDQxLjgxNjQgMjYuOTQ1MyA0MS44MTY0IDI3LjQ1MzFWMjguMDAzOUM0MS44MTY0IDI4LjUxNTYgNDEuODcxMSAyOC45Njg4IDQxLjk4MDUgMjkuMzYzM0M0Mi4wODk4IDI5Ljc1MzkgNDIuMjQ2MSAzMC4wODQgNDIuNDQ5MiAzMC4zNTM1QzQyLjY1NjIgMzAuNjE5MSA0Mi45MDA0IDMwLjgyMDMgNDMuMTgxNiAzMC45NTdDNDMuNDY2OCAzMS4wOTM4IDQzLjc4NTIgMzEuMTYyMSA0NC4xMzY3IDMxLjE2MjFDNDQuNTAzOSAzMS4xNjIxIDQ0LjgzMDEgMzEuMDkzOCA0NS4xMTUyIDMwLjk1N0M0NS40MDA0IDMwLjgyMDMgNDUuNjQwNiAzMC42MTkxIDQ1LjgzNTkgMzAuMzUzNUM0Ni4wMzUyIDMwLjA4NCA0Ni4xODU1IDI5Ljc1MzkgNDYuMjg3MSAyOS4zNjMzQzQ2LjM4ODcgMjguOTY4OCA0Ni40Mzk1IDI4LjUxNTYgNDYuNDM5NSAyOC4wMDM5Wk01MC4xNzE5IDI2Ljg3ODlWMzQuNDM3NUg0OS4wODJWMjUuNjYwMkg1MC4wNzgxTDUwLjE3MTkgMjYuODc4OVpNNTQuNDQzNCAyOC43NzczVjI4LjkwMDRDNTQuNDQzNCAyOS4zNjEzIDU0LjM4ODcgMjkuNzg5MSA1NC4yNzkzIDMwLjE4MzZDNTQuMTY5OSAzMC41NzQyIDU0LjAwOTggMzAuOTE0MSA1My43OTg4IDMxLjIwMzFDNTMuNTkxOCAzMS40OTIyIDUzLjMzNTkgMzEuNzE2OCA1My4wMzEyIDMxLjg3N0M1Mi43MjY2IDMyLjAzNzEgNTIuMzc3IDMyLjExNzIgNTEuOTgyNCAzMi4xMTcyQzUxLjU4MDEgMzIuMTE3MiA1MS4yMjQ2IDMyLjA1MDggNTAuOTE2IDMxLjkxOEM1MC42MDc0IDMxLjc4NTIgNTAuMzQ1NyAzMS41OTE4IDUwLjEzMDkgMzEuMzM3OUM0OS45MTYgMzEuMDg0IDQ5Ljc0NDEgMzAuNzc5MyA0OS42MTUyIDMwLjQyMzhDNDkuNDkwMiAzMC4wNjg0IDQ5LjQwNDMgMjkuNjY4IDQ5LjM1NzQgMjkuMjIyN1YyOC41NjY0QzQ5LjQwNDMgMjguMDk3NyA0OS40OTIyIDI3LjY3NzcgNDkuNjIxMSAyNy4zMDY2QzQ5Ljc1IDI2LjkzNTUgNDkuOTE5OSAyNi42MTkxIDUwLjEzMDkgMjYuMzU3NEM1MC4zNDU3IDI2LjA5MTggNTAuNjA1NSAyNS44OTA2IDUwLjkxMDIgMjUuNzUzOUM1MS4yMTQ4IDI1LjYxMzMgNTEuNTY2NCAyNS41NDMgNTEuOTY0OCAyNS41NDNDNTIuMzYzMyAyNS41NDMgNTIuNzE2OCAyNS42MjExIDUzLjAyNTQgMjUuNzc3M0M1My4zMzQgMjUuOTI5NyA1My41OTM4IDI2LjE0ODQgNTMuODA0NyAyNi40MzM2QzU0LjAxNTYgMjYuNzE4OCA1NC4xNzM4IDI3LjA2MDUgNTQuMjc5MyAyNy40NTlDNTQuMzg4NyAyNy44NTM1IDU0LjQ0MzQgMjguMjkzIDU0LjQ0MzQgMjguNzc3M1pNNTMuMzUzNSAyOC45MDA0VjI4Ljc3NzNDNTMuMzUzNSAyOC40NjA5IDUzLjMyMDMgMjguMTY0MSA1My4yNTM5IDI3Ljg4NjdDNTMuMTg3NSAyNy42MDU1IDUzLjA4NCAyNy4zNTk0IDUyLjk0MzQgMjcuMTQ4NEM1Mi44MDY2IDI2LjkzMzYgNTIuNjMwOSAyNi43NjU2IDUyLjQxNiAyNi42NDQ1QzUyLjIwMTIgMjYuNTE5NSA1MS45NDUzIDI2LjQ1NyA1MS42NDg0IDI2LjQ1N0M1MS4zNzUgMjYuNDU3IDUxLjEzNjcgMjYuNTAzOSA1MC45MzM2IDI2LjU5NzdDNTAuNzM0NCAyNi42OTE0IDUwLjU2NDUgMjYuODE4NCA1MC40MjM4IDI2Ljk3ODVDNTAuMjgzMiAyNy4xMzQ4IDUwLjE2OCAyNy4zMTQ1IDUwLjA3ODEgMjcuNTE3NkM0OS45OTIyIDI3LjcxNjggNDkuOTI3NyAyNy45MjM4IDQ5Ljg4NDggMjguMTM4N1YyOS42NTYyQzQ5Ljk2MjkgMjkuOTI5NyA1MC4wNzIzIDMwLjE4NzUgNTAuMjEyOSAzMC40Mjk3QzUwLjM1MzUgMzAuNjY4IDUwLjU0MSAzMC44NjEzIDUwLjc3NTQgMzEuMDA5OEM1MS4wMDk4IDMxLjE1NDMgNTEuMzA0NyAzMS4yMjY2IDUxLjY2MDIgMzEuMjI2NkM1MS45NTMxIDMxLjIyNjYgNTIuMjA1MSAzMS4xNjYgNTIuNDE2IDMxLjA0NDlDNTIuNjMwOSAzMC45MTk5IDUyLjgwNjYgMzAuNzUgNTIuOTQzNCAzMC41MzUyQzUzLjA4NCAzMC4zMjAzIDUzLjE4NzUgMzAuMDc0MiA1My4yNTM5IDI5Ljc5NjlDNTMuMzIwMyAyOS41MTU2IDUzLjM1MzUgMjkuMjE2OCA1My4zNTM1IDI4LjkwMDRaTTU4LjQ4MDUgMjUuNjYwMlYyNi40OTIySDU1LjA1MjdWMjUuNjYwMkg1OC40ODA1Wk01Ni4yMTI5IDI0LjExOTFINTcuMjk2OVYzMC40Mjk3QzU3LjI5NjkgMzAuNjQ0NSA1Ny4zMzAxIDMwLjgwNjYgNTcuMzk2NSAzMC45MTZDNTcuNDYyOSAzMS4wMjU0IDU3LjU0ODggMzEuMDk3NyA1Ny42NTQzIDMxLjEzMjhDNTcuNzU5OCAzMS4xNjggNTcuODczIDMxLjE4NTUgNTcuOTk0MSAzMS4xODU1QzU4LjA4NCAzMS4xODU1IDU4LjE3NzcgMzEuMTc3NyA1OC4yNzU0IDMxLjE2MjFDNTguMzc3IDMxLjE0MjYgNTguNDUzMSAzMS4xMjcgNTguNTAzOSAzMS4xMTUyTDU4LjUwOTggMzJDNTguNDIzOCAzMi4wMjczIDU4LjMxMDUgMzIuMDUyNyA1OC4xNjk5IDMyLjA3NjJDNTguMDMzMiAzMi4xMDM1IDU3Ljg2NzIgMzIuMTE3MiA1Ny42NzE5IDMyLjExNzJDNTcuNDA2MiAzMi4xMTcyIDU3LjE2MjEgMzIuMDY0NSA1Ni45Mzk1IDMxLjk1OUM1Ni43MTY4IDMxLjg1MzUgNTYuNTM5MSAzMS42Nzc3IDU2LjQwNjIgMzEuNDMxNkM1Ni4yNzczIDMxLjE4MTYgNTYuMjEyOSAzMC44NDU3IDU2LjIxMjkgMzAuNDIzOFYyNC4xMTkxWk02MC45Mjk3IDI1LjY2MDJWMzJINTkuODM5OFYyNS42NjAySDYwLjkyOTdaTTU5Ljc1NzggMjMuOTc4NUM1OS43NTc4IDIzLjgwMjcgNTkuODEwNSAyMy42NTQzIDU5LjkxNiAyMy41MzMyQzYwLjAyNTQgMjMuNDEyMSA2MC4xODU1IDIzLjM1MTYgNjAuMzk2NSAyMy4zNTE2QzYwLjYwMzUgMjMuMzUxNiA2MC43NjE3IDIzLjQxMjEgNjAuODcxMSAyMy41MzMyQzYwLjk4NDQgMjMuNjU0MyA2MS4wNDEgMjMuODAyNyA2MS4wNDEgMjMuOTc4NUM2MS4wNDEgMjQuMTQ2NSA2MC45ODQ0IDI0LjI5MSA2MC44NzExIDI0LjQxMjFDNjAuNzYxNyAyNC41MjkzIDYwLjYwMzUgMjQuNTg3OSA2MC4zOTY1IDI0LjU4NzlDNjAuMTg1NSAyNC41ODc5IDYwLjAyNTQgMjQuNTI5MyA1OS45MTYgMjQuNDEyMUM1OS44MTA1IDI0LjI5MSA1OS43NTc4IDI0LjE0NjUgNTkuNzU3OCAyMy45Nzg1Wk02Mi4zODI4IDI4LjkwMDRWMjguNzY1NkM2Mi4zODI4IDI4LjMwODYgNjIuNDQ5MiAyNy44ODQ4IDYyLjU4MiAyNy40OTQxQzYyLjcxNDggMjcuMDk5NiA2Mi45MDYyIDI2Ljc1NzggNjMuMTU2MiAyNi40Njg4QzYzLjQwNjIgMjYuMTc1OCA2My43MDkgMjUuOTQ5MiA2NC4wNjQ1IDI1Ljc4OTFDNjQuNDE5OSAyNS42MjUgNjQuODE4NCAyNS41NDMgNjUuMjU5OCAyNS41NDNDNjUuNzA1MSAyNS41NDMgNjYuMTA1NSAyNS42MjUgNjYuNDYwOSAyNS43ODkxQzY2LjgyMDMgMjUuOTQ5MiA2Ny4xMjUgMjYuMTc1OCA2Ny4zNzUgMjYuNDY4OEM2Ny42Mjg5IDI2Ljc1NzggNjcuODIyMyAyNy4wOTk2IDY3Ljk1NTEgMjcuNDk0MUM2OC4wODc5IDI3Ljg4NDggNjguMTU0MyAyOC4zMDg2IDY4LjE1NDMgMjguNzY1NlYyOC45MDA0QzY4LjE1NDMgMjkuMzU3NCA2OC4wODc5IDI5Ljc4MTIgNjcuOTU1MSAzMC4xNzE5QzY3LjgyMjMgMzAuNTYyNSA2Ny42Mjg5IDMwLjkwNDMgNjcuMzc1IDMxLjE5NzNDNjcuMTI1IDMxLjQ4NjMgNjYuODIyMyAzMS43MTI5IDY2LjQ2NjggMzEuODc3QzY2LjExNTIgMzIuMDM3MSA2NS43MTY4IDMyLjExNzIgNjUuMjcxNSAzMi4xMTcyQzY0LjgyNjIgMzIuMTE3MiA2NC40MjU4IDMyLjAzNzEgNjQuMDcwMyAzMS44NzdDNjMuNzE0OCAzMS43MTI5IDYzLjQxMDIgMzEuNDg2MyA2My4xNTYyIDMxLjE5NzNDNjIuOTA2MiAzMC45MDQzIDYyLjcxNDggMzAuNTYyNSA2Mi41ODIgMzAuMTcxOUM2Mi40NDkyIDI5Ljc4MTIgNjIuMzgyOCAyOS4zNTc0IDYyLjM4MjggMjguOTAwNFpNNjMuNDY2OCAyOC43NjU2VjI4LjkwMDRDNjMuNDY2OCAyOS4yMTY4IDYzLjUwMzkgMjkuNTE1NiA2My41NzgxIDI5Ljc5NjlDNjMuNjUyMyAzMC4wNzQyIDYzLjc2MzcgMzAuMzIwMyA2My45MTIxIDMwLjUzNTJDNjQuMDY0NSAzMC43NSA2NC4yNTM5IDMwLjkxOTkgNjQuNDgwNSAzMS4wNDQ5QzY0LjcwNyAzMS4xNjYgNjQuOTcwNyAzMS4yMjY2IDY1LjI3MTUgMzEuMjI2NkM2NS41Njg0IDMxLjIyNjYgNjUuODI4MSAzMS4xNjYgNjYuMDUwOCAzMS4wNDQ5QzY2LjI3NzMgMzAuOTE5OSA2Ni40NjQ4IDMwLjc1IDY2LjYxMzMgMzAuNTM1MkM2Ni43NjE3IDMwLjMyMDMgNjYuODczIDMwLjA3NDIgNjYuOTQ3MyAyOS43OTY5QzY3LjAyNTQgMjkuNTE1NiA2Ny4wNjQ1IDI5LjIxNjggNjcuMDY0NSAyOC45MDA0VjI4Ljc2NTZDNjcuMDY0NSAyOC40NTMxIDY3LjAyNTQgMjguMTU4MiA2Ni45NDczIDI3Ljg4MDlDNjYuODczIDI3LjU5OTYgNjYuNzU5OCAyNy4zNTE2IDY2LjYwNzQgMjcuMTM2N0M2Ni40NTkgMjYuOTE4IDY2LjI3MTUgMjYuNzQ2MSA2Ni4wNDQ5IDI2LjYyMTFDNjUuODIyMyAyNi40OTYxIDY1LjU2MDUgMjYuNDMzNiA2NS4yNTk4IDI2LjQzMzZDNjQuOTYyOSAyNi40MzM2IDY0LjcwMTIgMjYuNDk2MSA2NC40NzQ2IDI2LjYyMTFDNjQuMjUyIDI2Ljc0NjEgNjQuMDY0NSAyNi45MTggNjMuOTEyMSAyNy4xMzY3QzYzLjc2MzcgMjcuMzUxNiA2My42NTIzIDI3LjU5OTYgNjMuNTc4MSAyNy44ODA5QzYzLjUwMzkgMjguMTU4MiA2My40NjY4IDI4LjQ1MzEgNjMuNDY2OCAyOC43NjU2Wk03MC41OTc3IDI3LjAxMzdWMzJINjkuNTEzN1YyNS42NjAySDcwLjUzOTFMNzAuNTk3NyAyNy4wMTM3Wk03MC4zMzk4IDI4LjU4OThMNjkuODg4NyAyOC41NzIzQzY5Ljg5MjYgMjguMTM4NyA2OS45NTcgMjcuNzM4MyA3MC4wODIgMjcuMzcxMUM3MC4yMDcgMjcgNzAuMzgyOCAyNi42Nzc3IDcwLjYwOTQgMjYuNDA0M0M3MC44MzU5IDI2LjEzMDkgNzEuMTA1NSAyNS45MTk5IDcxLjQxOCAyNS43NzE1QzcxLjczNDQgMjUuNjE5MSA3Mi4wODQgMjUuNTQzIDcyLjQ2NjggMjUuNTQzQzcyLjc3OTMgMjUuNTQzIDczLjA2MDUgMjUuNTg1OSA3My4zMTA1IDI1LjY3MTlDNzMuNTYwNSAyNS43NTM5IDczLjc3MzQgMjUuODg2NyA3My45NDkyIDI2LjA3MDNDNzQuMTI4OSAyNi4yNTM5IDc0LjI2NTYgMjYuNDkyMiA3NC4zNTk0IDI2Ljc4NTJDNzQuNDUzMSAyNy4wNzQyIDc0LjUgMjcuNDI3NyA3NC41IDI3Ljg0NTdWMzJINzMuNDEwMlYyNy44MzRDNzMuNDEwMiAyNy41MDIgNzMuMzYxMyAyNy4yMzYzIDczLjI2MzcgMjcuMDM3MUM3My4xNjYgMjYuODM0IDczLjAyMzQgMjYuNjg3NSA3Mi44MzU5IDI2LjU5NzdDNzIuNjQ4NCAyNi41MDM5IDcyLjQxOCAyNi40NTcgNzIuMTQ0NSAyNi40NTdDNzEuODc1IDI2LjQ1NyA3MS42Mjg5IDI2LjUxMzcgNzEuNDA2MiAyNi42MjdDNzEuMTg3NSAyNi43NDAyIDcwLjk5OCAyNi44OTY1IDcwLjgzNzkgMjcuMDk1N0M3MC42ODE2IDI3LjI5NDkgNzAuNTU4NiAyNy41MjM0IDcwLjQ2ODggMjcuNzgxMkM3MC4zODI4IDI4LjAzNTIgNzAuMzM5OCAyOC4zMDQ3IDcwLjMzOTggMjguNTg5OFpNODIuNTY4NCAyMy40MjE5VjMySDgxLjQ4NDRWMjQuNzc1NEw3OS4yOTg4IDI1LjU3MjNWMjQuNTkzOEw4Mi4zOTg0IDIzLjQyMTlIODIuNTY4NFpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8cGF0aCBkPVwiTTMyLjY2NjcgMjMuMzMzM1YzMi42NjY3SDIzLjMzMzNWMjMuMzMzM0gzMi42NjY3Wk0zMi42NjY3IDIySDIzLjMzMzNDMjIuNiAyMiAyMiAyMi42IDIyIDIzLjMzMzNWMzIuNjY2N0MyMiAzMy40IDIyLjYgMzQgMjMuMzMzMyAzNEgzMi42NjY3QzMzLjQgMzQgMzQgMzMuNCAzNCAzMi42NjY3VjIzLjMzMzNDMzQgMjIuNiAzMy40IDIyIDMyLjY2NjcgMjJaXCIgZmlsbD1cIiM2NDc0OEJcIi8+XG5cdFx0PHJlY3QgeD1cIjEwN1wiIHk9XCIxM1wiIHdpZHRoPVwiODRcIiBoZWlnaHQ9XCIxMThcIiByeD1cIjdcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjNDI3MkY5XCIgc3Ryb2tlV2lkdGg9XCIyXCIvPlxuXHRcdDxyZWN0IHg9XCIxMTRcIiB5PVwiNDRcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiNjBcIiByeD1cIjRcIiBmaWxsPVwiI0YxRjVGOVwiLz5cblx0XHQ8cGF0aCBkPVwiTTE2MSA4NlY2MkgxMzdWODZIMTYxWk0xNDQuMzMzIDc2TDE0Ny42NjcgODAuMDEzM0wxNTIuMzMzIDc0TDE1OC4zMzMgODJIMTM5LjY2N0wxNDQuMzMzIDc2WlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxuXHRcdDxwYXRoIGQ9XCJNMTQxLjU1OSAyNy40NjQ4VjI4LjAwMzlDMTQxLjU1OSAyOC42NDQ1IDE0MS40NzkgMjkuMjE4OCAxNDEuMzE4IDI5LjcyNjZDMTQxLjE1OCAzMC4yMzQ0IDE0MC45MjggMzAuNjY2IDE0MC42MjcgMzEuMDIxNUMxNDAuMzI2IDMxLjM3NyAxMzkuOTY1IDMxLjY0ODQgMTM5LjU0MyAzMS44MzU5QzEzOS4xMjUgMzIuMDIzNCAxMzguNjU2IDMyLjExNzIgMTM4LjEzNyAzMi4xMTcyQzEzNy42MzMgMzIuMTE3MiAxMzcuMTcgMzIuMDIzNCAxMzYuNzQ4IDMxLjgzNTlDMTM2LjMzIDMxLjY0ODQgMTM1Ljk2NyAzMS4zNzcgMTM1LjY1OCAzMS4wMjE1QzEzNS4zNTQgMzAuNjY2IDEzNS4xMTcgMzAuMjM0NCAxMzQuOTQ5IDI5LjcyNjZDMTM0Ljc4MSAyOS4yMTg4IDEzNC42OTcgMjguNjQ0NSAxMzQuNjk3IDI4LjAwMzlWMjcuNDY0OEMxMzQuNjk3IDI2LjgyNDIgMTM0Ljc3OSAyNi4yNTIgMTM0Ljk0MyAyNS43NDhDMTM1LjExMSAyNS4yNDAyIDEzNS4zNDggMjQuODA4NiAxMzUuNjUyIDI0LjQ1MzFDMTM1Ljk1NyAyNC4wOTM4IDEzNi4zMTggMjMuODIwMyAxMzYuNzM2IDIzLjYzMjhDMTM3LjE1OCAyMy40NDUzIDEzNy42MjEgMjMuMzUxNiAxMzguMTI1IDIzLjM1MTZDMTM4LjY0NSAyMy4zNTE2IDEzOS4xMTMgMjMuNDQ1MyAxMzkuNTMxIDIzLjYzMjhDMTM5Ljk1MyAyMy44MjAzIDE0MC4zMTQgMjQuMDkzOCAxNDAuNjE1IDI0LjQ1MzFDMTQwLjkyIDI0LjgwODYgMTQxLjE1MiAyNS4yNDAyIDE0MS4zMTIgMjUuNzQ4QzE0MS40NzcgMjYuMjUyIDE0MS41NTkgMjYuODI0MiAxNDEuNTU5IDI3LjQ2NDhaTTE0MC40MzkgMjguMDAzOVYyNy40NTMxQzE0MC40MzkgMjYuOTQ1MyAxNDAuMzg3IDI2LjQ5NjEgMTQwLjI4MSAyNi4xMDU1QzE0MC4xOCAyNS43MTQ4IDE0MC4wMjkgMjUuMzg2NyAxMzkuODMgMjUuMTIxMUMxMzkuNjMxIDI0Ljg1NTUgMTM5LjM4NyAyNC42NTQzIDEzOS4wOTggMjQuNTE3NkMxMzguODEyIDI0LjM4MDkgMTM4LjQ4OCAyNC4zMTI1IDEzOC4xMjUgMjQuMzEyNUMxMzcuNzczIDI0LjMxMjUgMTM3LjQ1NSAyNC4zODA5IDEzNy4xNyAyNC41MTc2QzEzNi44ODkgMjQuNjU0MyAxMzYuNjQ2IDI0Ljg1NTUgMTM2LjQ0MyAyNS4xMjExQzEzNi4yNDQgMjUuMzg2NyAxMzYuMDkgMjUuNzE0OCAxMzUuOTggMjYuMTA1NUMxMzUuODcxIDI2LjQ5NjEgMTM1LjgxNiAyNi45NDUzIDEzNS44MTYgMjcuNDUzMVYyOC4wMDM5QzEzNS44MTYgMjguNTE1NiAxMzUuODcxIDI4Ljk2ODggMTM1Ljk4IDI5LjM2MzNDMTM2LjA5IDI5Ljc1MzkgMTM2LjI0NiAzMC4wODQgMTM2LjQ0OSAzMC4zNTM1QzEzNi42NTYgMzAuNjE5MSAxMzYuOSAzMC44MjAzIDEzNy4xODIgMzAuOTU3QzEzNy40NjcgMzEuMDkzOCAxMzcuNzg1IDMxLjE2MjEgMTM4LjEzNyAzMS4xNjIxQzEzOC41MDQgMzEuMTYyMSAxMzguODMgMzEuMDkzOCAxMzkuMTE1IDMwLjk1N0MxMzkuNCAzMC44MjAzIDEzOS42NDEgMzAuNjE5MSAxMzkuODM2IDMwLjM1MzVDMTQwLjAzNSAzMC4wODQgMTQwLjE4NiAyOS43NTM5IDE0MC4yODcgMjkuMzYzM0MxNDAuMzg5IDI4Ljk2ODggMTQwLjQzOSAyOC41MTU2IDE0MC40MzkgMjguMDAzOVpNMTQ0LjE3MiAyNi44Nzg5VjM0LjQzNzVIMTQzLjA4MlYyNS42NjAySDE0NC4wNzhMMTQ0LjE3MiAyNi44Nzg5Wk0xNDguNDQzIDI4Ljc3NzNWMjguOTAwNEMxNDguNDQzIDI5LjM2MTMgMTQ4LjM4OSAyOS43ODkxIDE0OC4yNzkgMzAuMTgzNkMxNDguMTcgMzAuNTc0MiAxNDguMDEgMzAuOTE0MSAxNDcuNzk5IDMxLjIwMzFDMTQ3LjU5MiAzMS40OTIyIDE0Ny4zMzYgMzEuNzE2OCAxNDcuMDMxIDMxLjg3N0MxNDYuNzI3IDMyLjAzNzEgMTQ2LjM3NyAzMi4xMTcyIDE0NS45ODIgMzIuMTE3MkMxNDUuNTggMzIuMTE3MiAxNDUuMjI1IDMyLjA1MDggMTQ0LjkxNiAzMS45MThDMTQ0LjYwNyAzMS43ODUyIDE0NC4zNDYgMzEuNTkxOCAxNDQuMTMxIDMxLjMzNzlDMTQzLjkxNiAzMS4wODQgMTQzLjc0NCAzMC43NzkzIDE0My42MTUgMzAuNDIzOEMxNDMuNDkgMzAuMDY4NCAxNDMuNDA0IDI5LjY2OCAxNDMuMzU3IDI5LjIyMjdWMjguNTY2NEMxNDMuNDA0IDI4LjA5NzcgMTQzLjQ5MiAyNy42Nzc3IDE0My42MjEgMjcuMzA2NkMxNDMuNzUgMjYuOTM1NSAxNDMuOTIgMjYuNjE5MSAxNDQuMTMxIDI2LjM1NzRDMTQ0LjM0NiAyNi4wOTE4IDE0NC42MDUgMjUuODkwNiAxNDQuOTEgMjUuNzUzOUMxNDUuMjE1IDI1LjYxMzMgMTQ1LjU2NiAyNS41NDMgMTQ1Ljk2NSAyNS41NDNDMTQ2LjM2MyAyNS41NDMgMTQ2LjcxNyAyNS42MjExIDE0Ny4wMjUgMjUuNzc3M0MxNDcuMzM0IDI1LjkyOTcgMTQ3LjU5NCAyNi4xNDg0IDE0Ny44MDUgMjYuNDMzNkMxNDguMDE2IDI2LjcxODggMTQ4LjE3NCAyNy4wNjA1IDE0OC4yNzkgMjcuNDU5QzE0OC4zODkgMjcuODUzNSAxNDguNDQzIDI4LjI5MyAxNDguNDQzIDI4Ljc3NzNaTTE0Ny4zNTQgMjguOTAwNFYyOC43NzczQzE0Ny4zNTQgMjguNDYwOSAxNDcuMzIgMjguMTY0MSAxNDcuMjU0IDI3Ljg4NjdDMTQ3LjE4OCAyNy42MDU1IDE0Ny4wODQgMjcuMzU5NCAxNDYuOTQzIDI3LjE0ODRDMTQ2LjgwNyAyNi45MzM2IDE0Ni42MzEgMjYuNzY1NiAxNDYuNDE2IDI2LjY0NDVDMTQ2LjIwMSAyNi41MTk1IDE0NS45NDUgMjYuNDU3IDE0NS42NDggMjYuNDU3QzE0NS4zNzUgMjYuNDU3IDE0NS4xMzcgMjYuNTAzOSAxNDQuOTM0IDI2LjU5NzdDMTQ0LjczNCAyNi42OTE0IDE0NC41NjQgMjYuODE4NCAxNDQuNDI0IDI2Ljk3ODVDMTQ0LjI4MyAyNy4xMzQ4IDE0NC4xNjggMjcuMzE0NSAxNDQuMDc4IDI3LjUxNzZDMTQzLjk5MiAyNy43MTY4IDE0My45MjggMjcuOTIzOCAxNDMuODg1IDI4LjEzODdWMjkuNjU2MkMxNDMuOTYzIDI5LjkyOTcgMTQ0LjA3MiAzMC4xODc1IDE0NC4yMTMgMzAuNDI5N0MxNDQuMzU0IDMwLjY2OCAxNDQuNTQxIDMwLjg2MTMgMTQ0Ljc3NSAzMS4wMDk4QzE0NS4wMSAzMS4xNTQzIDE0NS4zMDUgMzEuMjI2NiAxNDUuNjYgMzEuMjI2NkMxNDUuOTUzIDMxLjIyNjYgMTQ2LjIwNSAzMS4xNjYgMTQ2LjQxNiAzMS4wNDQ5QzE0Ni42MzEgMzAuOTE5OSAxNDYuODA3IDMwLjc1IDE0Ni45NDMgMzAuNTM1MkMxNDcuMDg0IDMwLjMyMDMgMTQ3LjE4OCAzMC4wNzQyIDE0Ny4yNTQgMjkuNzk2OUMxNDcuMzIgMjkuNTE1NiAxNDcuMzU0IDI5LjIxNjggMTQ3LjM1NCAyOC45MDA0Wk0xNTIuNDggMjUuNjYwMlYyNi40OTIySDE0OS4wNTNWMjUuNjYwMkgxNTIuNDhaTTE1MC4yMTMgMjQuMTE5MUgxNTEuMjk3VjMwLjQyOTdDMTUxLjI5NyAzMC42NDQ1IDE1MS4zMyAzMC44MDY2IDE1MS4zOTYgMzAuOTE2QzE1MS40NjMgMzEuMDI1NCAxNTEuNTQ5IDMxLjA5NzcgMTUxLjY1NCAzMS4xMzI4QzE1MS43NiAzMS4xNjggMTUxLjg3MyAzMS4xODU1IDE1MS45OTQgMzEuMTg1NUMxNTIuMDg0IDMxLjE4NTUgMTUyLjE3OCAzMS4xNzc3IDE1Mi4yNzUgMzEuMTYyMUMxNTIuMzc3IDMxLjE0MjYgMTUyLjQ1MyAzMS4xMjcgMTUyLjUwNCAzMS4xMTUyTDE1Mi41MSAzMkMxNTIuNDI0IDMyLjAyNzMgMTUyLjMxMSAzMi4wNTI3IDE1Mi4xNyAzMi4wNzYyQzE1Mi4wMzMgMzIuMTAzNSAxNTEuODY3IDMyLjExNzIgMTUxLjY3MiAzMi4xMTcyQzE1MS40MDYgMzIuMTE3MiAxNTEuMTYyIDMyLjA2NDUgMTUwLjkzOSAzMS45NTlDMTUwLjcxNyAzMS44NTM1IDE1MC41MzkgMzEuNjc3NyAxNTAuNDA2IDMxLjQzMTZDMTUwLjI3NyAzMS4xODE2IDE1MC4yMTMgMzAuODQ1NyAxNTAuMjEzIDMwLjQyMzhWMjQuMTE5MVpNMTU0LjkzIDI1LjY2MDJWMzJIMTUzLjg0VjI1LjY2MDJIMTU0LjkzWk0xNTMuNzU4IDIzLjk3ODVDMTUzLjc1OCAyMy44MDI3IDE1My44MTEgMjMuNjU0MyAxNTMuOTE2IDIzLjUzMzJDMTU0LjAyNSAyMy40MTIxIDE1NC4xODYgMjMuMzUxNiAxNTQuMzk2IDIzLjM1MTZDMTU0LjYwNCAyMy4zNTE2IDE1NC43NjIgMjMuNDEyMSAxNTQuODcxIDIzLjUzMzJDMTU0Ljk4NCAyMy42NTQzIDE1NS4wNDEgMjMuODAyNyAxNTUuMDQxIDIzLjk3ODVDMTU1LjA0MSAyNC4xNDY1IDE1NC45ODQgMjQuMjkxIDE1NC44NzEgMjQuNDEyMUMxNTQuNzYyIDI0LjUyOTMgMTU0LjYwNCAyNC41ODc5IDE1NC4zOTYgMjQuNTg3OUMxNTQuMTg2IDI0LjU4NzkgMTU0LjAyNSAyNC41MjkzIDE1My45MTYgMjQuNDEyMUMxNTMuODExIDI0LjI5MSAxNTMuNzU4IDI0LjE0NjUgMTUzLjc1OCAyMy45Nzg1Wk0xNTYuMzgzIDI4LjkwMDRWMjguNzY1NkMxNTYuMzgzIDI4LjMwODYgMTU2LjQ0OSAyNy44ODQ4IDE1Ni41ODIgMjcuNDk0MUMxNTYuNzE1IDI3LjA5OTYgMTU2LjkwNiAyNi43NTc4IDE1Ny4xNTYgMjYuNDY4OEMxNTcuNDA2IDI2LjE3NTggMTU3LjcwOSAyNS45NDkyIDE1OC4wNjQgMjUuNzg5MUMxNTguNDIgMjUuNjI1IDE1OC44MTggMjUuNTQzIDE1OS4yNiAyNS41NDNDMTU5LjcwNSAyNS41NDMgMTYwLjEwNSAyNS42MjUgMTYwLjQ2MSAyNS43ODkxQzE2MC44MiAyNS45NDkyIDE2MS4xMjUgMjYuMTc1OCAxNjEuMzc1IDI2LjQ2ODhDMTYxLjYyOSAyNi43NTc4IDE2MS44MjIgMjcuMDk5NiAxNjEuOTU1IDI3LjQ5NDFDMTYyLjA4OCAyNy44ODQ4IDE2Mi4xNTQgMjguMzA4NiAxNjIuMTU0IDI4Ljc2NTZWMjguOTAwNEMxNjIuMTU0IDI5LjM1NzQgMTYyLjA4OCAyOS43ODEyIDE2MS45NTUgMzAuMTcxOUMxNjEuODIyIDMwLjU2MjUgMTYxLjYyOSAzMC45MDQzIDE2MS4zNzUgMzEuMTk3M0MxNjEuMTI1IDMxLjQ4NjMgMTYwLjgyMiAzMS43MTI5IDE2MC40NjcgMzEuODc3QzE2MC4xMTUgMzIuMDM3MSAxNTkuNzE3IDMyLjExNzIgMTU5LjI3MSAzMi4xMTcyQzE1OC44MjYgMzIuMTE3MiAxNTguNDI2IDMyLjAzNzEgMTU4LjA3IDMxLjg3N0MxNTcuNzE1IDMxLjcxMjkgMTU3LjQxIDMxLjQ4NjMgMTU3LjE1NiAzMS4xOTczQzE1Ni45MDYgMzAuOTA0MyAxNTYuNzE1IDMwLjU2MjUgMTU2LjU4MiAzMC4xNzE5QzE1Ni40NDkgMjkuNzgxMiAxNTYuMzgzIDI5LjM1NzQgMTU2LjM4MyAyOC45MDA0Wk0xNTcuNDY3IDI4Ljc2NTZWMjguOTAwNEMxNTcuNDY3IDI5LjIxNjggMTU3LjUwNCAyOS41MTU2IDE1Ny41NzggMjkuNzk2OUMxNTcuNjUyIDMwLjA3NDIgMTU3Ljc2NCAzMC4zMjAzIDE1Ny45MTIgMzAuNTM1MkMxNTguMDY0IDMwLjc1IDE1OC4yNTQgMzAuOTE5OSAxNTguNDggMzEuMDQ0OUMxNTguNzA3IDMxLjE2NiAxNTguOTcxIDMxLjIyNjYgMTU5LjI3MSAzMS4yMjY2QzE1OS41NjggMzEuMjI2NiAxNTkuODI4IDMxLjE2NiAxNjAuMDUxIDMxLjA0NDlDMTYwLjI3NyAzMC45MTk5IDE2MC40NjUgMzAuNzUgMTYwLjYxMyAzMC41MzUyQzE2MC43NjIgMzAuMzIwMyAxNjAuODczIDMwLjA3NDIgMTYwLjk0NyAyOS43OTY5QzE2MS4wMjUgMjkuNTE1NiAxNjEuMDY0IDI5LjIxNjggMTYxLjA2NCAyOC45MDA0VjI4Ljc2NTZDMTYxLjA2NCAyOC40NTMxIDE2MS4wMjUgMjguMTU4MiAxNjAuOTQ3IDI3Ljg4MDlDMTYwLjg3MyAyNy41OTk2IDE2MC43NiAyNy4zNTE2IDE2MC42MDcgMjcuMTM2N0MxNjAuNDU5IDI2LjkxOCAxNjAuMjcxIDI2Ljc0NjEgMTYwLjA0NSAyNi42MjExQzE1OS44MjIgMjYuNDk2MSAxNTkuNTYxIDI2LjQzMzYgMTU5LjI2IDI2LjQzMzZDMTU4Ljk2MyAyNi40MzM2IDE1OC43MDEgMjYuNDk2MSAxNTguNDc1IDI2LjYyMTFDMTU4LjI1MiAyNi43NDYxIDE1OC4wNjQgMjYuOTE4IDE1Ny45MTIgMjcuMTM2N0MxNTcuNzY0IDI3LjM1MTYgMTU3LjY1MiAyNy41OTk2IDE1Ny41NzggMjcuODgwOUMxNTcuNTA0IDI4LjE1ODIgMTU3LjQ2NyAyOC40NTMxIDE1Ny40NjcgMjguNzY1NlpNMTY0LjU5OCAyNy4wMTM3VjMySDE2My41MTRWMjUuNjYwMkgxNjQuNTM5TDE2NC41OTggMjcuMDEzN1pNMTY0LjM0IDI4LjU4OThMMTYzLjg4OSAyOC41NzIzQzE2My44OTMgMjguMTM4NyAxNjMuOTU3IDI3LjczODMgMTY0LjA4MiAyNy4zNzExQzE2NC4yMDcgMjcgMTY0LjM4MyAyNi42Nzc3IDE2NC42MDkgMjYuNDA0M0MxNjQuODM2IDI2LjEzMDkgMTY1LjEwNSAyNS45MTk5IDE2NS40MTggMjUuNzcxNUMxNjUuNzM0IDI1LjYxOTEgMTY2LjA4NCAyNS41NDMgMTY2LjQ2NyAyNS41NDNDMTY2Ljc3OSAyNS41NDMgMTY3LjA2MSAyNS41ODU5IDE2Ny4zMTEgMjUuNjcxOUMxNjcuNTYxIDI1Ljc1MzkgMTY3Ljc3MyAyNS44ODY3IDE2Ny45NDkgMjYuMDcwM0MxNjguMTI5IDI2LjI1MzkgMTY4LjI2NiAyNi40OTIyIDE2OC4zNTkgMjYuNzg1MkMxNjguNDUzIDI3LjA3NDIgMTY4LjUgMjcuNDI3NyAxNjguNSAyNy44NDU3VjMySDE2Ny40MVYyNy44MzRDMTY3LjQxIDI3LjUwMiAxNjcuMzYxIDI3LjIzNjMgMTY3LjI2NCAyNy4wMzcxQzE2Ny4xNjYgMjYuODM0IDE2Ny4wMjMgMjYuNjg3NSAxNjYuODM2IDI2LjU5NzdDMTY2LjY0OCAyNi41MDM5IDE2Ni40MTggMjYuNDU3IDE2Ni4xNDUgMjYuNDU3QzE2NS44NzUgMjYuNDU3IDE2NS42MjkgMjYuNTEzNyAxNjUuNDA2IDI2LjYyN0MxNjUuMTg4IDI2Ljc0MDIgMTY0Ljk5OCAyNi44OTY1IDE2NC44MzggMjcuMDk1N0MxNjQuNjgyIDI3LjI5NDkgMTY0LjU1OSAyNy41MjM0IDE2NC40NjkgMjcuNzgxMkMxNjQuMzgzIDI4LjAzNTIgMTY0LjM0IDI4LjMwNDcgMTY0LjM0IDI4LjU4OThaTTE3OC41OTYgMzEuMTA5NFYzMkgxNzMuMDEyVjMxLjIyMDdMMTc1LjgwNyAyOC4xMDk0QzE3Ni4xNSAyNy43MjY2IDE3Ni40MTYgMjcuNDAyMyAxNzYuNjA0IDI3LjEzNjdDMTc2Ljc5NSAyNi44NjcyIDE3Ni45MjggMjYuNjI3IDE3Ny4wMDIgMjYuNDE2QzE3Ny4wOCAyNi4yMDEyIDE3Ny4xMTkgMjUuOTgyNCAxNzcuMTE5IDI1Ljc1OThDMTc3LjExOSAyNS40Nzg1IDE3Ny4wNjEgMjUuMjI0NiAxNzYuOTQzIDI0Ljk5OEMxNzYuODMgMjQuNzY3NiAxNzYuNjYyIDI0LjU4NCAxNzYuNDM5IDI0LjQ0NzNDMTc2LjIxNyAyNC4zMTA1IDE3NS45NDcgMjQuMjQyMiAxNzUuNjMxIDI0LjI0MjJDMTc1LjI1MiAyNC4yNDIyIDE3NC45MzYgMjQuMzE2NCAxNzQuNjgyIDI0LjQ2NDhDMTc0LjQzMiAyNC42MDk0IDE3NC4yNDQgMjQuODEyNSAxNzQuMTE5IDI1LjA3NDJDMTczLjk5NCAyNS4zMzU5IDE3My45MzIgMjUuNjM2NyAxNzMuOTMyIDI1Ljk3NjZIMTcyLjg0OEMxNzIuODQ4IDI1LjQ5NjEgMTcyLjk1MyAyNS4wNTY2IDE3My4xNjQgMjQuNjU4MkMxNzMuMzc1IDI0LjI1OTggMTczLjY4OCAyMy45NDM0IDE3NC4xMDIgMjMuNzA5QzE3NC41MTYgMjMuNDcwNyAxNzUuMDI1IDIzLjM1MTYgMTc1LjYzMSAyMy4zNTE2QzE3Ni4xNyAyMy4zNTE2IDE3Ni42MzEgMjMuNDQ3MyAxNzcuMDE0IDIzLjYzODdDMTc3LjM5NiAyMy44MjYyIDE3Ny42ODkgMjQuMDkxOCAxNzcuODkzIDI0LjQzNTVDMTc4LjEgMjQuNzc1NCAxNzguMjAzIDI1LjE3MzggMTc4LjIwMyAyNS42MzA5QzE3OC4yMDMgMjUuODgwOSAxNzguMTYgMjYuMTM0OCAxNzguMDc0IDI2LjM5MjZDMTc3Ljk5MiAyNi42NDY1IDE3Ny44NzcgMjYuOTAwNCAxNzcuNzI5IDI3LjE1NDNDMTc3LjU4NCAyNy40MDgyIDE3Ny40MTQgMjcuNjU4MiAxNzcuMjE5IDI3LjkwNDNDMTc3LjAyNyAyOC4xNTA0IDE3Ni44MjIgMjguMzkyNiAxNzYuNjA0IDI4LjYzMDlMMTc0LjMxOCAzMS4xMDk0SDE3OC41OTZaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0PGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwXzE3MV8xODczKVwiPlxuXHRcdFx0PHBhdGggZD1cIk0xMjguNjY3IDIzLjQ1MzNMMTIxLjA2IDMxLjA2NjdMMTE4LjIzMyAyOC4yNEwxMTkuMTczIDI3LjNMMTIxLjA2IDI5LjE4NjdMMTI3LjcyNyAyMi41MkwxMjguNjY3IDIzLjQ1MzNaTTEyNy4xOTMgMjYuODEzM0MxMjcuMjggMjcuMTkzMyAxMjcuMzMzIDI3LjU5MzMgMTI3LjMzMyAyOEMxMjcuMzMzIDMwLjk0NjcgMTI0Ljk0NyAzMy4zMzMzIDEyMiAzMy4zMzMzQzExOS4wNTMgMzMuMzMzMyAxMTYuNjY3IDMwLjk0NjcgMTE2LjY2NyAyOEMxMTYuNjY3IDI1LjA1MzMgMTE5LjA1MyAyMi42NjY3IDEyMiAyMi42NjY3QzEyMy4wNTMgMjIuNjY2NyAxMjQuMDI3IDIyLjk3MzMgMTI0Ljg1MyAyMy41TDEyNS44MTMgMjIuNTRDMTI0LjczMyAyMS43OCAxMjMuNDIgMjEuMzMzMyAxMjIgMjEuMzMzM0MxMTguMzIgMjEuMzMzMyAxMTUuMzMzIDI0LjMyIDExNS4zMzMgMjhDMTE1LjMzMyAzMS42OCAxMTguMzIgMzQuNjY2NyAxMjIgMzQuNjY2N0MxMjUuNjggMzQuNjY2NyAxMjguNjY3IDMxLjY4IDEyOC42NjcgMjhDMTI4LjY2NyAyNy4yMDY3IDEyOC41MiAyNi40NDY3IDEyOC4yNjcgMjUuNzRMMTI3LjE5MyAyNi44MTMzWlwiIGZpbGw9XCIjNDI3MkY5XCIvPlxuXHRcdDwvZz5cblx0XHQ8cmVjdCB4PVwiMTE0XCIgeT1cIjExMFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHJlY3QgeD1cIjExNFwiIHk9XCIxMTZcIiB3aWR0aD1cIjU4XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxuXHRcdDxyZWN0IHg9XCIyMDBcIiB5PVwiMTJcIiB3aWR0aD1cIjg2XCIgaGVpZ2h0PVwiMTIwXCIgcng9XCI4XCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdDxyZWN0IHg9XCIyMDhcIiB5PVwiMTEwXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjRcIiByeD1cIjJcIiBmaWxsPVwiI0NCRDVFMVwiLz5cblx0XHQ8cmVjdCB4PVwiMjA4XCIgeT1cIjExNlwiIHdpZHRoPVwiNThcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHJlY3QgeD1cIjIwOFwiIHk9XCI0NFwiIHdpZHRoPVwiNzBcIiBoZWlnaHQ9XCI2MFwiIHJ4PVwiNFwiIGZpbGw9XCIjRjFGNUY5XCIvPlxuXHRcdDxwYXRoIGQ9XCJNMjU1IDg2VjYySDIzMVY4NkgyNTVaTTIzOC4zMzMgNzZMMjQxLjY2NyA4MC4wMTMzTDI0Ni4zMzMgNzRMMjUyLjMzMyA4MkgyMzMuNjY3TDIzOC4zMzMgNzZaXCIgZmlsbD1cIiNDQkQ1RTFcIi8+XG5cdFx0PHBhdGggZD1cIk0yMzUuNTU5IDI3LjQ2NDhWMjguMDAzOUMyMzUuNTU5IDI4LjY0NDUgMjM1LjQ3OSAyOS4yMTg4IDIzNS4zMTggMjkuNzI2NkMyMzUuMTU4IDMwLjIzNDQgMjM0LjkyOCAzMC42NjYgMjM0LjYyNyAzMS4wMjE1QzIzNC4zMjYgMzEuMzc3IDIzMy45NjUgMzEuNjQ4NCAyMzMuNTQzIDMxLjgzNTlDMjMzLjEyNSAzMi4wMjM0IDIzMi42NTYgMzIuMTE3MiAyMzIuMTM3IDMyLjExNzJDMjMxLjYzMyAzMi4xMTcyIDIzMS4xNyAzMi4wMjM0IDIzMC43NDggMzEuODM1OUMyMzAuMzMgMzEuNjQ4NCAyMjkuOTY3IDMxLjM3NyAyMjkuNjU4IDMxLjAyMTVDMjI5LjM1NCAzMC42NjYgMjI5LjExNyAzMC4yMzQ0IDIyOC45NDkgMjkuNzI2NkMyMjguNzgxIDI5LjIxODggMjI4LjY5NyAyOC42NDQ1IDIyOC42OTcgMjguMDAzOVYyNy40NjQ4QzIyOC42OTcgMjYuODI0MiAyMjguNzc5IDI2LjI1MiAyMjguOTQzIDI1Ljc0OEMyMjkuMTExIDI1LjI0MDIgMjI5LjM0OCAyNC44MDg2IDIyOS42NTIgMjQuNDUzMUMyMjkuOTU3IDI0LjA5MzggMjMwLjMxOCAyMy44MjAzIDIzMC43MzYgMjMuNjMyOEMyMzEuMTU4IDIzLjQ0NTMgMjMxLjYyMSAyMy4zNTE2IDIzMi4xMjUgMjMuMzUxNkMyMzIuNjQ1IDIzLjM1MTYgMjMzLjExMyAyMy40NDUzIDIzMy41MzEgMjMuNjMyOEMyMzMuOTUzIDIzLjgyMDMgMjM0LjMxNCAyNC4wOTM4IDIzNC42MTUgMjQuNDUzMUMyMzQuOTIgMjQuODA4NiAyMzUuMTUyIDI1LjI0MDIgMjM1LjMxMiAyNS43NDhDMjM1LjQ3NyAyNi4yNTIgMjM1LjU1OSAyNi44MjQyIDIzNS41NTkgMjcuNDY0OFpNMjM0LjQzOSAyOC4wMDM5VjI3LjQ1MzFDMjM0LjQzOSAyNi45NDUzIDIzNC4zODcgMjYuNDk2MSAyMzQuMjgxIDI2LjEwNTVDMjM0LjE4IDI1LjcxNDggMjM0LjAyOSAyNS4zODY3IDIzMy44MyAyNS4xMjExQzIzMy42MzEgMjQuODU1NSAyMzMuMzg3IDI0LjY1NDMgMjMzLjA5OCAyNC41MTc2QzIzMi44MTIgMjQuMzgwOSAyMzIuNDg4IDI0LjMxMjUgMjMyLjEyNSAyNC4zMTI1QzIzMS43NzMgMjQuMzEyNSAyMzEuNDU1IDI0LjM4MDkgMjMxLjE3IDI0LjUxNzZDMjMwLjg4OSAyNC42NTQzIDIzMC42NDYgMjQuODU1NSAyMzAuNDQzIDI1LjEyMTFDMjMwLjI0NCAyNS4zODY3IDIzMC4wOSAyNS43MTQ4IDIyOS45OCAyNi4xMDU1QzIyOS44NzEgMjYuNDk2MSAyMjkuODE2IDI2Ljk0NTMgMjI5LjgxNiAyNy40NTMxVjI4LjAwMzlDMjI5LjgxNiAyOC41MTU2IDIyOS44NzEgMjguOTY4OCAyMjkuOTggMjkuMzYzM0MyMzAuMDkgMjkuNzUzOSAyMzAuMjQ2IDMwLjA4NCAyMzAuNDQ5IDMwLjM1MzVDMjMwLjY1NiAzMC42MTkxIDIzMC45IDMwLjgyMDMgMjMxLjE4MiAzMC45NTdDMjMxLjQ2NyAzMS4wOTM4IDIzMS43ODUgMzEuMTYyMSAyMzIuMTM3IDMxLjE2MjFDMjMyLjUwNCAzMS4xNjIxIDIzMi44MyAzMS4wOTM4IDIzMy4xMTUgMzAuOTU3QzIzMy40IDMwLjgyMDMgMjMzLjY0MSAzMC42MTkxIDIzMy44MzYgMzAuMzUzNUMyMzQuMDM1IDMwLjA4NCAyMzQuMTg2IDI5Ljc1MzkgMjM0LjI4NyAyOS4zNjMzQzIzNC4zODkgMjguOTY4OCAyMzQuNDM5IDI4LjUxNTYgMjM0LjQzOSAyOC4wMDM5Wk0yMzguMTcyIDI2Ljg3ODlWMzQuNDM3NUgyMzcuMDgyVjI1LjY2MDJIMjM4LjA3OEwyMzguMTcyIDI2Ljg3ODlaTTI0Mi40NDMgMjguNzc3M1YyOC45MDA0QzI0Mi40NDMgMjkuMzYxMyAyNDIuMzg5IDI5Ljc4OTEgMjQyLjI3OSAzMC4xODM2QzI0Mi4xNyAzMC41NzQyIDI0Mi4wMSAzMC45MTQxIDI0MS43OTkgMzEuMjAzMUMyNDEuNTkyIDMxLjQ5MjIgMjQxLjMzNiAzMS43MTY4IDI0MS4wMzEgMzEuODc3QzI0MC43MjcgMzIuMDM3MSAyNDAuMzc3IDMyLjExNzIgMjM5Ljk4MiAzMi4xMTcyQzIzOS41OCAzMi4xMTcyIDIzOS4yMjUgMzIuMDUwOCAyMzguOTE2IDMxLjkxOEMyMzguNjA3IDMxLjc4NTIgMjM4LjM0NiAzMS41OTE4IDIzOC4xMzEgMzEuMzM3OUMyMzcuOTE2IDMxLjA4NCAyMzcuNzQ0IDMwLjc3OTMgMjM3LjYxNSAzMC40MjM4QzIzNy40OSAzMC4wNjg0IDIzNy40MDQgMjkuNjY4IDIzNy4zNTcgMjkuMjIyN1YyOC41NjY0QzIzNy40MDQgMjguMDk3NyAyMzcuNDkyIDI3LjY3NzcgMjM3LjYyMSAyNy4zMDY2QzIzNy43NSAyNi45MzU1IDIzNy45MiAyNi42MTkxIDIzOC4xMzEgMjYuMzU3NEMyMzguMzQ2IDI2LjA5MTggMjM4LjYwNSAyNS44OTA2IDIzOC45MSAyNS43NTM5QzIzOS4yMTUgMjUuNjEzMyAyMzkuNTY2IDI1LjU0MyAyMzkuOTY1IDI1LjU0M0MyNDAuMzYzIDI1LjU0MyAyNDAuNzE3IDI1LjYyMTEgMjQxLjAyNSAyNS43NzczQzI0MS4zMzQgMjUuOTI5NyAyNDEuNTk0IDI2LjE0ODQgMjQxLjgwNSAyNi40MzM2QzI0Mi4wMTYgMjYuNzE4OCAyNDIuMTc0IDI3LjA2MDUgMjQyLjI3OSAyNy40NTlDMjQyLjM4OSAyNy44NTM1IDI0Mi40NDMgMjguMjkzIDI0Mi40NDMgMjguNzc3M1pNMjQxLjM1NCAyOC45MDA0VjI4Ljc3NzNDMjQxLjM1NCAyOC40NjA5IDI0MS4zMiAyOC4xNjQxIDI0MS4yNTQgMjcuODg2N0MyNDEuMTg4IDI3LjYwNTUgMjQxLjA4NCAyNy4zNTk0IDI0MC45NDMgMjcuMTQ4NEMyNDAuODA3IDI2LjkzMzYgMjQwLjYzMSAyNi43NjU2IDI0MC40MTYgMjYuNjQ0NUMyNDAuMjAxIDI2LjUxOTUgMjM5Ljk0NSAyNi40NTcgMjM5LjY0OCAyNi40NTdDMjM5LjM3NSAyNi40NTcgMjM5LjEzNyAyNi41MDM5IDIzOC45MzQgMjYuNTk3N0MyMzguNzM0IDI2LjY5MTQgMjM4LjU2NCAyNi44MTg0IDIzOC40MjQgMjYuOTc4NUMyMzguMjgzIDI3LjEzNDggMjM4LjE2OCAyNy4zMTQ1IDIzOC4wNzggMjcuNTE3NkMyMzcuOTkyIDI3LjcxNjggMjM3LjkyOCAyNy45MjM4IDIzNy44ODUgMjguMTM4N1YyOS42NTYyQzIzNy45NjMgMjkuOTI5NyAyMzguMDcyIDMwLjE4NzUgMjM4LjIxMyAzMC40Mjk3QzIzOC4zNTQgMzAuNjY4IDIzOC41NDEgMzAuODYxMyAyMzguNzc1IDMxLjAwOThDMjM5LjAxIDMxLjE1NDMgMjM5LjMwNSAzMS4yMjY2IDIzOS42NiAzMS4yMjY2QzIzOS45NTMgMzEuMjI2NiAyNDAuMjA1IDMxLjE2NiAyNDAuNDE2IDMxLjA0NDlDMjQwLjYzMSAzMC45MTk5IDI0MC44MDcgMzAuNzUgMjQwLjk0MyAzMC41MzUyQzI0MS4wODQgMzAuMzIwMyAyNDEuMTg4IDMwLjA3NDIgMjQxLjI1NCAyOS43OTY5QzI0MS4zMiAyOS41MTU2IDI0MS4zNTQgMjkuMjE2OCAyNDEuMzU0IDI4LjkwMDRaTTI0Ni40OCAyNS42NjAyVjI2LjQ5MjJIMjQzLjA1M1YyNS42NjAySDI0Ni40OFpNMjQ0LjIxMyAyNC4xMTkxSDI0NS4yOTdWMzAuNDI5N0MyNDUuMjk3IDMwLjY0NDUgMjQ1LjMzIDMwLjgwNjYgMjQ1LjM5NiAzMC45MTZDMjQ1LjQ2MyAzMS4wMjU0IDI0NS41NDkgMzEuMDk3NyAyNDUuNjU0IDMxLjEzMjhDMjQ1Ljc2IDMxLjE2OCAyNDUuODczIDMxLjE4NTUgMjQ1Ljk5NCAzMS4xODU1QzI0Ni4wODQgMzEuMTg1NSAyNDYuMTc4IDMxLjE3NzcgMjQ2LjI3NSAzMS4xNjIxQzI0Ni4zNzcgMzEuMTQyNiAyNDYuNDUzIDMxLjEyNyAyNDYuNTA0IDMxLjExNTJMMjQ2LjUxIDMyQzI0Ni40MjQgMzIuMDI3MyAyNDYuMzExIDMyLjA1MjcgMjQ2LjE3IDMyLjA3NjJDMjQ2LjAzMyAzMi4xMDM1IDI0NS44NjcgMzIuMTE3MiAyNDUuNjcyIDMyLjExNzJDMjQ1LjQwNiAzMi4xMTcyIDI0NS4xNjIgMzIuMDY0NSAyNDQuOTM5IDMxLjk1OUMyNDQuNzE3IDMxLjg1MzUgMjQ0LjUzOSAzMS42Nzc3IDI0NC40MDYgMzEuNDMxNkMyNDQuMjc3IDMxLjE4MTYgMjQ0LjIxMyAzMC44NDU3IDI0NC4yMTMgMzAuNDIzOFYyNC4xMTkxWk0yNDguOTMgMjUuNjYwMlYzMkgyNDcuODRWMjUuNjYwMkgyNDguOTNaTTI0Ny43NTggMjMuOTc4NUMyNDcuNzU4IDIzLjgwMjcgMjQ3LjgxMSAyMy42NTQzIDI0Ny45MTYgMjMuNTMzMkMyNDguMDI1IDIzLjQxMjEgMjQ4LjE4NiAyMy4zNTE2IDI0OC4zOTYgMjMuMzUxNkMyNDguNjA0IDIzLjM1MTYgMjQ4Ljc2MiAyMy40MTIxIDI0OC44NzEgMjMuNTMzMkMyNDguOTg0IDIzLjY1NDMgMjQ5LjA0MSAyMy44MDI3IDI0OS4wNDEgMjMuOTc4NUMyNDkuMDQxIDI0LjE0NjUgMjQ4Ljk4NCAyNC4yOTEgMjQ4Ljg3MSAyNC40MTIxQzI0OC43NjIgMjQuNTI5MyAyNDguNjA0IDI0LjU4NzkgMjQ4LjM5NiAyNC41ODc5QzI0OC4xODYgMjQuNTg3OSAyNDguMDI1IDI0LjUyOTMgMjQ3LjkxNiAyNC40MTIxQzI0Ny44MTEgMjQuMjkxIDI0Ny43NTggMjQuMTQ2NSAyNDcuNzU4IDIzLjk3ODVaTTI1MC4zODMgMjguOTAwNFYyOC43NjU2QzI1MC4zODMgMjguMzA4NiAyNTAuNDQ5IDI3Ljg4NDggMjUwLjU4MiAyNy40OTQxQzI1MC43MTUgMjcuMDk5NiAyNTAuOTA2IDI2Ljc1NzggMjUxLjE1NiAyNi40Njg4QzI1MS40MDYgMjYuMTc1OCAyNTEuNzA5IDI1Ljk0OTIgMjUyLjA2NCAyNS43ODkxQzI1Mi40MiAyNS42MjUgMjUyLjgxOCAyNS41NDMgMjUzLjI2IDI1LjU0M0MyNTMuNzA1IDI1LjU0MyAyNTQuMTA1IDI1LjYyNSAyNTQuNDYxIDI1Ljc4OTFDMjU0LjgyIDI1Ljk0OTIgMjU1LjEyNSAyNi4xNzU4IDI1NS4zNzUgMjYuNDY4OEMyNTUuNjI5IDI2Ljc1NzggMjU1LjgyMiAyNy4wOTk2IDI1NS45NTUgMjcuNDk0MUMyNTYuMDg4IDI3Ljg4NDggMjU2LjE1NCAyOC4zMDg2IDI1Ni4xNTQgMjguNzY1NlYyOC45MDA0QzI1Ni4xNTQgMjkuMzU3NCAyNTYuMDg4IDI5Ljc4MTIgMjU1Ljk1NSAzMC4xNzE5QzI1NS44MjIgMzAuNTYyNSAyNTUuNjI5IDMwLjkwNDMgMjU1LjM3NSAzMS4xOTczQzI1NS4xMjUgMzEuNDg2MyAyNTQuODIyIDMxLjcxMjkgMjU0LjQ2NyAzMS44NzdDMjU0LjExNSAzMi4wMzcxIDI1My43MTcgMzIuMTE3MiAyNTMuMjcxIDMyLjExNzJDMjUyLjgyNiAzMi4xMTcyIDI1Mi40MjYgMzIuMDM3MSAyNTIuMDcgMzEuODc3QzI1MS43MTUgMzEuNzEyOSAyNTEuNDEgMzEuNDg2MyAyNTEuMTU2IDMxLjE5NzNDMjUwLjkwNiAzMC45MDQzIDI1MC43MTUgMzAuNTYyNSAyNTAuNTgyIDMwLjE3MTlDMjUwLjQ0OSAyOS43ODEyIDI1MC4zODMgMjkuMzU3NCAyNTAuMzgzIDI4LjkwMDRaTTI1MS40NjcgMjguNzY1NlYyOC45MDA0QzI1MS40NjcgMjkuMjE2OCAyNTEuNTA0IDI5LjUxNTYgMjUxLjU3OCAyOS43OTY5QzI1MS42NTIgMzAuMDc0MiAyNTEuNzY0IDMwLjMyMDMgMjUxLjkxMiAzMC41MzUyQzI1Mi4wNjQgMzAuNzUgMjUyLjI1NCAzMC45MTk5IDI1Mi40OCAzMS4wNDQ5QzI1Mi43MDcgMzEuMTY2IDI1Mi45NzEgMzEuMjI2NiAyNTMuMjcxIDMxLjIyNjZDMjUzLjU2OCAzMS4yMjY2IDI1My44MjggMzEuMTY2IDI1NC4wNTEgMzEuMDQ0OUMyNTQuMjc3IDMwLjkxOTkgMjU0LjQ2NSAzMC43NSAyNTQuNjEzIDMwLjUzNTJDMjU0Ljc2MiAzMC4zMjAzIDI1NC44NzMgMzAuMDc0MiAyNTQuOTQ3IDI5Ljc5NjlDMjU1LjAyNSAyOS41MTU2IDI1NS4wNjQgMjkuMjE2OCAyNTUuMDY0IDI4LjkwMDRWMjguNzY1NkMyNTUuMDY0IDI4LjQ1MzEgMjU1LjAyNSAyOC4xNTgyIDI1NC45NDcgMjcuODgwOUMyNTQuODczIDI3LjU5OTYgMjU0Ljc2IDI3LjM1MTYgMjU0LjYwNyAyNy4xMzY3QzI1NC40NTkgMjYuOTE4IDI1NC4yNzEgMjYuNzQ2MSAyNTQuMDQ1IDI2LjYyMTFDMjUzLjgyMiAyNi40OTYxIDI1My41NjEgMjYuNDMzNiAyNTMuMjYgMjYuNDMzNkMyNTIuOTYzIDI2LjQzMzYgMjUyLjcwMSAyNi40OTYxIDI1Mi40NzUgMjYuNjIxMUMyNTIuMjUyIDI2Ljc0NjEgMjUyLjA2NCAyNi45MTggMjUxLjkxMiAyNy4xMzY3QzI1MS43NjQgMjcuMzUxNiAyNTEuNjUyIDI3LjU5OTYgMjUxLjU3OCAyNy44ODA5QzI1MS41MDQgMjguMTU4MiAyNTEuNDY3IDI4LjQ1MzEgMjUxLjQ2NyAyOC43NjU2Wk0yNTguNTk4IDI3LjAxMzdWMzJIMjU3LjUxNFYyNS42NjAySDI1OC41MzlMMjU4LjU5OCAyNy4wMTM3Wk0yNTguMzQgMjguNTg5OEwyNTcuODg5IDI4LjU3MjNDMjU3Ljg5MyAyOC4xMzg3IDI1Ny45NTcgMjcuNzM4MyAyNTguMDgyIDI3LjM3MTFDMjU4LjIwNyAyNyAyNTguMzgzIDI2LjY3NzcgMjU4LjYwOSAyNi40MDQzQzI1OC44MzYgMjYuMTMwOSAyNTkuMTA1IDI1LjkxOTkgMjU5LjQxOCAyNS43NzE1QzI1OS43MzQgMjUuNjE5MSAyNjAuMDg0IDI1LjU0MyAyNjAuNDY3IDI1LjU0M0MyNjAuNzc5IDI1LjU0MyAyNjEuMDYxIDI1LjU4NTkgMjYxLjMxMSAyNS42NzE5QzI2MS41NjEgMjUuNzUzOSAyNjEuNzczIDI1Ljg4NjcgMjYxLjk0OSAyNi4wNzAzQzI2Mi4xMjkgMjYuMjUzOSAyNjIuMjY2IDI2LjQ5MjIgMjYyLjM1OSAyNi43ODUyQzI2Mi40NTMgMjcuMDc0MiAyNjIuNSAyNy40Mjc3IDI2Mi41IDI3Ljg0NTdWMzJIMjYxLjQxVjI3LjgzNEMyNjEuNDEgMjcuNTAyIDI2MS4zNjEgMjcuMjM2MyAyNjEuMjY0IDI3LjAzNzFDMjYxLjE2NiAyNi44MzQgMjYxLjAyMyAyNi42ODc1IDI2MC44MzYgMjYuNTk3N0MyNjAuNjQ4IDI2LjUwMzkgMjYwLjQxOCAyNi40NTcgMjYwLjE0NSAyNi40NTdDMjU5Ljg3NSAyNi40NTcgMjU5LjYyOSAyNi41MTM3IDI1OS40MDYgMjYuNjI3QzI1OS4xODggMjYuNzQwMiAyNTguOTk4IDI2Ljg5NjUgMjU4LjgzOCAyNy4wOTU3QzI1OC42ODIgMjcuMjk0OSAyNTguNTU5IDI3LjUyMzQgMjU4LjQ2OSAyNy43ODEyQzI1OC4zODMgMjguMDM1MiAyNTguMzQgMjguMzA0NyAyNTguMzQgMjguNTg5OFpNMjY4LjU4OCAyNy4yMDEySDI2OS4zNjFDMjY5Ljc0IDI3LjIwMTIgMjcwLjA1MyAyNy4xMzg3IDI3MC4yOTkgMjcuMDEzN0MyNzAuNTQ5IDI2Ljg4NDggMjcwLjczNCAyNi43MTA5IDI3MC44NTUgMjYuNDkyMkMyNzAuOTggMjYuMjY5NSAyNzEuMDQzIDI2LjAxOTUgMjcxLjA0MyAyNS43NDIyQzI3MS4wNDMgMjUuNDE0MSAyNzAuOTg4IDI1LjEzODcgMjcwLjg3OSAyNC45MTZDMjcwLjc3IDI0LjY5MzQgMjcwLjYwNSAyNC41MjU0IDI3MC4zODcgMjQuNDEyMUMyNzAuMTY4IDI0LjI5ODggMjY5Ljg5MSAyNC4yNDIyIDI2OS41NTUgMjQuMjQyMkMyNjkuMjUgMjQuMjQyMiAyNjguOTggMjQuMzAyNyAyNjguNzQ2IDI0LjQyMzhDMjY4LjUxNiAyNC41NDEgMjY4LjMzNCAyNC43MDkgMjY4LjIwMSAyNC45Mjc3QzI2OC4wNzIgMjUuMTQ2NSAyNjguMDA4IDI1LjQwNDMgMjY4LjAwOCAyNS43MDEySDI2Ni45MjRDMjY2LjkyNCAyNS4yNjc2IDI2Ny4wMzMgMjQuODczIDI2Ny4yNTIgMjQuNTE3NkMyNjcuNDcxIDI0LjE2MjEgMjY3Ljc3NyAyMy44Nzg5IDI2OC4xNzIgMjMuNjY4QzI2OC41NyAyMy40NTcgMjY5LjAzMSAyMy4zNTE2IDI2OS41NTUgMjMuMzUxNkMyNzAuMDcgMjMuMzUxNiAyNzAuNTIxIDIzLjQ0MzQgMjcwLjkwOCAyMy42MjdDMjcxLjI5NSAyMy44MDY2IDI3MS41OTYgMjQuMDc2MiAyNzEuODExIDI0LjQzNTVDMjcyLjAyNSAyNC43OTEgMjcyLjEzMyAyNS4yMzQ0IDI3Mi4xMzMgMjUuNzY1NkMyNzIuMTMzIDI1Ljk4MDUgMjcyLjA4MiAyNi4yMTA5IDI3MS45OCAyNi40NTdDMjcxLjg4MyAyNi42OTkyIDI3MS43MjkgMjYuOTI1OCAyNzEuNTE4IDI3LjEzNjdDMjcxLjMxMSAyNy4zNDc3IDI3MS4wNDEgMjcuNTIxNSAyNzAuNzA5IDI3LjY1ODJDMjcwLjM3NyAyNy43OTEgMjY5Ljk3OSAyNy44NTc0IDI2OS41MTQgMjcuODU3NEgyNjguNTg4VjI3LjIwMTJaTTI2OC41ODggMjguMDkxOFYyNy40NDE0SDI2OS41MTRDMjcwLjA1NyAyNy40NDE0IDI3MC41MDYgMjcuNTA1OSAyNzAuODYxIDI3LjYzNDhDMjcxLjIxNyAyNy43NjM3IDI3MS40OTYgMjcuOTM1NSAyNzEuNjk5IDI4LjE1MDRDMjcxLjkwNiAyOC4zNjUyIDI3Mi4wNTEgMjguNjAxNiAyNzIuMTMzIDI4Ljg1OTRDMjcyLjIxOSAyOS4xMTMzIDI3Mi4yNjIgMjkuMzY3MiAyNzIuMjYyIDI5LjYyMTFDMjcyLjI2MiAzMC4wMTk1IDI3Mi4xOTMgMzAuMzczIDI3Mi4wNTcgMzAuNjgxNkMyNzEuOTI0IDMwLjk5MDIgMjcxLjczNCAzMS4yNTIgMjcxLjQ4OCAzMS40NjY4QzI3MS4yNDYgMzEuNjgxNiAyNzAuOTYxIDMxLjg0MzggMjcwLjYzMyAzMS45NTMxQzI3MC4zMDUgMzIuMDYyNSAyNjkuOTQ3IDMyLjExNzIgMjY5LjU2MSAzMi4xMTcyQzI2OS4xODkgMzIuMTE3MiAyNjguODQgMzIuMDY0NSAyNjguNTEyIDMxLjk1OUMyNjguMTg4IDMxLjg1MzUgMjY3LjkgMzEuNzAxMiAyNjcuNjUgMzEuNTAyQzI2Ny40IDMxLjI5ODggMjY3LjIwNSAzMS4wNTA4IDI2Ny4wNjQgMzAuNzU3OEMyNjYuOTI0IDMwLjQ2MDkgMjY2Ljg1NCAzMC4xMjMgMjY2Ljg1NCAyOS43NDQxSDI2Ny45MzhDMjY3LjkzOCAzMC4wNDEgMjY4LjAwMiAzMC4zMDA4IDI2OC4xMzEgMzAuNTIzNEMyNjguMjY0IDMwLjc0NjEgMjY4LjQ1MSAzMC45MTk5IDI2OC42OTMgMzEuMDQ0OUMyNjguOTM5IDMxLjE2NiAyNjkuMjI5IDMxLjIyNjYgMjY5LjU2MSAzMS4yMjY2QzI2OS44OTMgMzEuMjI2NiAyNzAuMTc4IDMxLjE2OTkgMjcwLjQxNiAzMS4wNTY2QzI3MC42NTggMzAuOTM5NSAyNzAuODQ0IDMwLjc2MzcgMjcwLjk3MyAzMC41MjkzQzI3MS4xMDUgMzAuMjk0OSAyNzEuMTcyIDMwIDI3MS4xNzIgMjkuNjQ0NUMyNzEuMTcyIDI5LjI4OTEgMjcxLjA5OCAyOC45OTggMjcwLjk0OSAyOC43NzE1QzI3MC44MDEgMjguNTQxIDI3MC41OSAyOC4zNzExIDI3MC4zMTYgMjguMjYxN0MyNzAuMDQ3IDI4LjE0ODQgMjY5LjcyOSAyOC4wOTE4IDI2OS4zNjEgMjguMDkxOEgyNjguNTg4WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDxwYXRoIGQ9XCJNMjIwLjY2NyAyMy4zMzMzVjMyLjY2NjdIMjExLjMzM1YyMy4zMzMzSDIyMC42NjdaTTIyMC42NjcgMjJIMjExLjMzM0MyMTAuNiAyMiAyMTAgMjIuNiAyMTAgMjMuMzMzM1YzMi42NjY3QzIxMCAzMy40IDIxMC42IDM0IDIxMS4zMzMgMzRIMjIwLjY2N0MyMjEuNCAzNCAyMjIgMzMuNCAyMjIgMzIuNjY2N1YyMy4zMzMzQzIyMiAyMi42IDIyMS40IDIyIDIyMC42NjcgMjJaXCIgZmlsbD1cIiM2NDc0OEJcIi8+XG5cdFx0PGRlZnM+XG5cdFx0XHQ8Y2xpcFBhdGggaWQ9XCJjbGlwMF8xNzFfMTg3M1wiPlxuXHRcdFx0XHQ8cmVjdCB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwid2hpdGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTE0IDIwKVwiLz5cblx0XHRcdDwvY2xpcFBhdGg+XG5cdFx0PC9kZWZzPlxuXHQ8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHByZXZpZXc7IiwiY29uc3Qge1xuXHQgICAgICB1c2VJbm5lckJsb2Nrc1Byb3BzLFxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIEZyYWdtZW50LFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmVBZHZhbmNlZENob2ljZXNGaWVsZCgpIHtcblx0Y29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMuc2F2ZSgpO1xuXG5cdHJldHVybiA8RnJhZ21lbnQgeyAuLi5pbm5lckJsb2Nrc1Byb3BzIH0gLz47XG59IiwiaW1wb3J0IHsgbmFtZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCB7XG5cdCAgICAgIGNyZWF0ZUJsb2NrLFxuICAgICAgfSA9IHdwLmJsb2NrcztcblxuY29uc3QgaXNNYXRjaCA9IGF0dHJpYnV0ZXMgPT4gKFxuXHQnbWFudWFsX2lucHV0JyA9PT0gYXR0cmlidXRlcy5maWVsZF9vcHRpb25zX2Zyb20gJiZcblx0QXJyYXkuaXNBcnJheSggYXR0cmlidXRlcy5maWVsZF9vcHRpb25zICkgJiZcblx0YXR0cmlidXRlcy5maWVsZF9vcHRpb25zLmxlbmd0aCA+IDBcbik7XG5cbmNvbnN0IHRyYW5zZm9ybSA9ICggYXR0cmlidXRlcywgYWxsb3dfbXVsdGlwbGUgKSA9PiB7XG5cdGNvbnN0IGNob2ljZXMgPSBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubWFwKFxuXHRcdG9wdGlvbiA9PiBjcmVhdGVCbG9jayhcblx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IG9wdGlvbi52YWx1ZSxcblx0XHRcdFx0Y2FsY192YWx1ZTogb3B0aW9uLmNhbGN1bGF0ZSA/PyAnJyxcblx0XHRcdH0sXG5cdFx0XHRbXG5cdFx0XHRcdGNyZWF0ZUJsb2NrKFxuXHRcdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlLWNvbnRyb2wnLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiBvcHRpb24ubGFiZWwgPz8gJycsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0KSxcblx0XHRcdF0sXG5cdFx0KSxcblx0KTtcblxuXHRyZXR1cm4gY3JlYXRlQmxvY2soXG5cdFx0bmFtZSxcblx0XHR7XG5cdFx0XHRuYW1lOiBhdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRsYWJlbDogYXR0cmlidXRlcy5sYWJlbCxcblx0XHRcdGRlc2M6IGF0dHJpYnV0ZXMuZGVzYyxcblx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnZhbHVlLFxuXHRcdFx0ZGVmYXVsdDogYXR0cmlidXRlcy5kZWZhdWx0LFxuXHRcdFx0cmVxdWlyZWQ6IGF0dHJpYnV0ZXMucmVxdWlyZWQsXG5cdFx0XHR2aXNpYmlsaXR5OiBhdHRyaWJ1dGVzLnZpc2liaWxpdHksXG5cdFx0XHRzd2l0Y2hfb25fY2hhbmdlOiBhdHRyaWJ1dGVzLnN3aXRjaF9vbl9jaGFuZ2UgPz8gZmFsc2UsXG5cdFx0XHRhbGxvd19tdWx0aXBsZTogISFhbGxvd19tdWx0aXBsZSxcblx0XHR9LFxuXHRcdGNob2ljZXMsXG5cdCk7XG59O1xuXG5jb25zdCB0cmFuc2Zvcm1zID0ge1xuXHRmcm9tOiBbXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2Jsb2NrJyxcblx0XHRcdGJsb2NrczogW1xuXHRcdFx0XHQnamV0LWZvcm1zL2NoZWNrYm94LWZpZWxkJ1xuXHRcdFx0XSxcblx0XHRcdGlzTWF0Y2gsXG5cdFx0XHR0cmFuc2Zvcm06ICggYXR0cmlidXRlcyApID0+IHRyYW5zZm9ybSggYXR0cmlidXRlcywgdHJ1ZSApLFxuXHRcdFx0cHJpb3JpdHk6IC0xLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dHlwZTogJ2Jsb2NrJyxcblx0XHRcdGJsb2NrczogW1xuXHRcdFx0XHQnamV0LWZvcm1zL3JhZGlvLWZpZWxkJ1xuXHRcdFx0XSxcblx0XHRcdGlzTWF0Y2gsXG5cdFx0XHR0cmFuc2Zvcm06ICggYXR0cmlidXRlcyApID0+IHRyYW5zZm9ybSggYXR0cmlidXRlcywgZmFsc2UgKSxcblx0XHRcdHByaW9yaXR5OiAtMSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHR5cGU6ICdibG9jaycsXG5cdFx0XHRibG9ja3M6IFtcblx0XHRcdFx0J2pldC1mb3Jtcy9zZWxlY3QtZmllbGQnXG5cdFx0XHRdLFxuXHRcdFx0aXNNYXRjaCxcblx0XHRcdHRyYW5zZm9ybTogKCBhdHRyaWJ1dGVzICkgPT4gdHJhbnNmb3JtKCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzLm11bHRpcGxlICksXG5cdFx0XHRwcmlvcml0eTogLTEsXG5cdFx0fSxcblx0XSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybXM7IiwiY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdCAgICAgIGFzc2V0VXJsLFxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3QgaW1hZ2VCbG9jayA9ICggYWx0ICkgPT4gW1xuXHQnY29yZS9pbWFnZScsXG5cdHtcblx0XHRhbHQsXG5cdFx0dXJsOiBhc3NldFVybCggJ2ltZy9pbWFnZS1wbGFjZWhvbGRlci5qcGcnICksXG5cdFx0d2lkdGg6IDEwMCxcblx0XHRoZWlnaHQ6IDEwMCxcblx0fSxcbl07XG5cbmNvbnN0IHZhcmlhdGlvbnMgPSBbXG5cdHtcblx0XHRuYW1lOiAnc2ltcGxlLWVtcHR5Jyxcblx0XHR0aXRsZTogX18oICdTaW1wbGUgRW1wdHknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0WyAnamV0LWZvcm1zL2Nob2ljZScgXSxcblx0XHRcdFsgJ2pldC1mb3Jtcy9jaG9pY2UnIF0sXG5cdFx0XSxcblx0XHRpc0RlZmF1bHQ6IHRydWUsXG5cdFx0c2NvcGU6IFsgJ2hpZGRlbicgXSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdzaW1wbGUtYnV0dG9ucycsXG5cdFx0dGl0bGU6IF9fKCAnVGV4dCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyhcblx0XHRcdCdTaW1wbGUgYnV0dG9ucyBsaXN0IHdpdGggbGFiZWxzJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpLFxuXHRcdGljb246IDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0PHBhdGggZD1cIk0yNC43MTI1IDEwLjcwMTdDMjUuMSAxMC4zMDgyIDI1LjA5NTIgOS42NzUwNSAyNC43MDE3IDkuMjg3NTJDMjQuMzA4MiA4Ljg5OTk4IDIzLjY3NSA4LjkwNDgyIDIzLjI4NzUgOS4yOTgzMUwxMi4xNjA5IDIwLjU5NjFMOC42OTEyMiAxNy4yNzc0QzguMjkyMTIgMTYuODk1NiA3LjY1OTExIDE2LjkwOTcgNy4yNzczNiAxNy4zMDg4QzYuODk1NjEgMTcuNzA3OSA2LjkwOTY3IDE4LjM0MDkgNy4zMDg3OCAxOC43MjI2TDEyLjIwMjggMjMuNDAzOUwyNC43MTI1IDEwLjcwMTdaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgNEMwIDEuNzkwODYgMS43OTA4NiAwIDQgMEgyOEMzMC4yMDkxIDAgMzIgMS43OTA4NiAzMiA0VjI4QzMyIDMwLjIwOTEgMzAuMjA5MSAzMiAyOCAzMkg0QzEuNzkwODYgMzIgMCAzMC4yMDkxIDAgMjhWNFpNNCAySDI4QzI5LjEwNDYgMiAzMCAyLjg5NTQzIDMwIDRWMjhDMzAgMjkuMTA0NiAyOS4xMDQ2IDMwIDI4IDMwSDRDMi44OTU0MyAzMCAyIDI5LjEwNDYgMiAyOFY0QzIgMi44OTU0MyAyLjg5NTQzIDIgNCAyWlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdDwvc3ZnPixcblx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0W1xuXHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2sgTmFtZSAjMScsXG5cdFx0XHRcdFx0Y2FsY192YWx1ZTogJzEwMCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0eyBjb250ZW50OiAnQm9vayBOYW1lICMxJyB9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2sgTmFtZSAjMicsXG5cdFx0XHRcdFx0Y2FsY192YWx1ZTogJzIwMCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0eyBjb250ZW50OiAnQm9vayBOYW1lICMyJyB9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2sgTmFtZSAjMycsXG5cdFx0XHRcdFx0Y2FsY192YWx1ZTogJzIwMCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0eyBjb250ZW50OiAnQm9vayBOYW1lICMzJyB9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdF0sXG5cdFx0c2NvcGU6IFsgJ2Jsb2NrJyBdLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2ltYWdlcycsXG5cdFx0dGl0bGU6IF9fKCAnSW1hZ2VzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0ZGVzY3JpcHRpb246IF9fKFxuXHRcdFx0J0ltYWdlIGJ1dHRvbnMnLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCksXG5cdFx0aWNvbjogPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE2LjUgMTVDMTguNDMzIDE1IDIwIDEzLjQzMyAyMCAxMS41QzIwIDkuNTY3IDE4LjQzMyA4IDE2LjUgOEMxNC41NjcgOCAxMyA5LjU2NyAxMyAxMS41QzEzIDEzLjQzMyAxNC41NjcgMTUgMTYuNSAxNVpNMTYuNSAxM0MxNy4zMjg0IDEzIDE4IDEyLjMyODQgMTggMTEuNUMxOCAxMC42NzE2IDE3LjMyODQgMTAgMTYuNSAxMEMxNS42NzE2IDEwIDE1IDEwLjY3MTYgMTUgMTEuNUMxNSAxMi4zMjg0IDE1LjY3MTYgMTMgMTYuNSAxM1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHRcdDxwYXRoIGQ9XCJNMjAuNzkxNyAxNy4yOTg1QzIwLjYwMzcgMTcuMTA3NiAyMC4zNDY5IDE3IDIwLjA3ODkgMTdDMTkuODExIDE3IDE5LjU1NDIgMTcuMTA3NiAxOS4zNjYyIDE3LjI5ODVMMTUuMTU3OSAyMS41NzQ0TDEyLjI5MTcgMTguNjYyMkMxMi4xMDM3IDE4LjQ3MTIgMTEuODQ2OSAxOC4zNjM2IDExLjU3ODkgMTguMzYzNkMxMS4zMTEgMTguMzYzNiAxMS4wNTQyIDE4LjQ3MTIgMTAuODY2MiAxOC42NjIyTDcuMjg3MjkgMjIuMjk4NUM2Ljg5OTg5IDIyLjY5MjIgNi45MDQ5MiAyMy4zMjUzIDcuMjk4NTQgMjMuNzEyN0M3LjY5MjE2IDI0LjEwMDEgOC4zMjUzMSAyNC4wOTUxIDguNzEyNzEgMjMuNzAxNUwxMS41Nzg5IDIwLjc4OTJMMTQuNDQ1MiAyMy43MDE1QzE0LjYzMzIgMjMuODkyNCAxNC44ODk5IDI0IDE1LjE1NzkgMjRDMTUuNDI1OSAyNCAxNS42ODI2IDIzLjg5MjQgMTUuODcwNiAyMy43MDE1TDIwLjA3ODkgMTkuNDI1NkwyNC4yODczIDIzLjcwMTVDMjQuNjc0NyAyNC4wOTUxIDI1LjMwNzggMjQuMTAwMSAyNS43MDE1IDIzLjcxMjdDMjYuMDk1MSAyMy4zMjUzIDI2LjEwMDEgMjIuNjkyMiAyNS43MTI3IDIyLjI5ODVMMjAuNzkxNyAxNy4yOTg1WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDRDMCAxLjc5MDg2IDEuNzkwODYgMCA0IDBIMjhDMzAuMjA5MSAwIDMyIDEuNzkwODYgMzIgNFYyOEMzMiAzMC4yMDkxIDMwLjIwOTEgMzIgMjggMzJINEMxLjc5MDg2IDMyIDAgMzAuMjA5MSAwIDI4VjRaTTQgMkgyOEMyOS4xMDQ2IDIgMzAgMi44OTU0MyAzMCA0VjI4QzMwIDI5LjEwNDYgMjkuMTA0NiAzMCAyOCAzMEg0QzIuODk1NDMgMzAgMiAyOS4xMDQ2IDIgMjhWNEMyIDIuODk1NDMgMi44OTU0MyAyIDQgMlpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8L3N2Zz4sXG5cdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdFtcblx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICdCb29rIE5hbWUgIzEnLFxuXHRcdFx0XHRcdGNhbGNfdmFsdWU6ICcxMDAnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0aW1hZ2VCbG9jayggJ0Jvb2sgTmFtZSAjMScgKSxcblx0XHRcdFx0XSxcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnQm9vayBOYW1lICMyJyxcblx0XHRcdFx0XHRjYWxjX3ZhbHVlOiAnMjAwJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGltYWdlQmxvY2soICdCb29rIE5hbWUgIzInICksXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2sgTmFtZSAjMycsXG5cdFx0XHRcdFx0Y2FsY192YWx1ZTogJzIwMCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRpbWFnZUJsb2NrKCAnQm9vayBOYW1lICMzJyApLFxuXHRcdFx0XHRdLFxuXHRcdFx0XSxcblx0XHRdLFxuXHRcdHNjb3BlOiBbICdibG9jaycgXSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdidXR0b25zLXdpdGgtaW1hZ2VzJyxcblx0XHR0aXRsZTogX18oICdJbWFnZXMgd2l0aCBkZXNjcmlwdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXyhcblx0XHRcdCdJbWFnZSBidXR0b25zIHdpdGggbGFiZWxzIGluIGZvb3RlcicsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSxcblx0XHRpY29uOiA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzOFwiIHZpZXdCb3g9XCIwIDAgMzIgMzhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTYuNSAxM0MxOC40MzMgMTMgMjAgMTEuNDMzIDIwIDkuNUMyMCA3LjU2NyAxOC40MzMgNiAxNi41IDZDMTQuNTY3IDYgMTMgNy41NjcgMTMgOS41QzEzIDExLjQzMyAxNC41NjcgMTMgMTYuNSAxM1pNMTYuNSAxMUMxNy4zMjg0IDExIDE4IDEwLjMyODQgMTggOS41QzE4IDguNjcxNTcgMTcuMzI4NCA4IDE2LjUgOEMxNS42NzE2IDggMTUgOC42NzE1NyAxNSA5LjVDMTUgMTAuMzI4NCAxNS42NzE2IDExIDE2LjUgMTFaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0XHQ8cGF0aCBkPVwiTTIwLjc5MTcgMTUuMjk4NUMyMC42MDM3IDE1LjEwNzYgMjAuMzQ2OSAxNSAyMC4wNzg5IDE1QzE5LjgxMSAxNSAxOS41NTQyIDE1LjEwNzYgMTkuMzY2MiAxNS4yOTg1TDE1LjE1NzkgMTkuNTc0NEwxMi4yOTE3IDE2LjY2MjJDMTIuMTAzNyAxNi40NzEyIDExLjg0NjkgMTYuMzYzNiAxMS41Nzg5IDE2LjM2MzZDMTEuMzExIDE2LjM2MzYgMTEuMDU0MiAxNi40NzEyIDEwLjg2NjIgMTYuNjYyMkw3LjI4NzI5IDIwLjI5ODVDNi44OTk4OSAyMC42OTIyIDYuOTA0OTIgMjEuMzI1MyA3LjI5ODU0IDIxLjcxMjdDNy42OTIxNiAyMi4xMDAxIDguMzI1MzEgMjIuMDk1MSA4LjcxMjcxIDIxLjcwMTVMMTEuNTc4OSAxOC43ODkyTDE0LjQ0NTIgMjEuNzAxNUMxNC42MzMyIDIxLjg5MjQgMTQuODg5OSAyMiAxNS4xNTc5IDIyQzE1LjQyNTkgMjIgMTUuNjgyNiAyMS44OTI0IDE1Ljg3MDYgMjEuNzAxNUwyMC4wNzg5IDE3LjQyNTZMMjQuMjg3MyAyMS43MDE1QzI0LjY3NDcgMjIuMDk1MSAyNS4zMDc4IDIyLjEwMDEgMjUuNzAxNSAyMS43MTI3QzI2LjA5NTEgMjEuMzI1MyAyNi4xMDAxIDIwLjY5MjIgMjUuNzEyNyAyMC4yOTg1TDIwLjc5MTcgMTUuMjk4NVpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCA0QzAgMS43OTA4NiAxLjc5MDg2IDAgNCAwSDI4QzMwLjIwOTEgMCAzMiAxLjc5MDg2IDMyIDRWMjRDMzIgMjYuMjA5MSAzMC4yMDkxIDI4IDI4IDI4SDRDMS43OTA4NiAyOCAwIDI2LjIwOTEgMCAyNFY0Wk00IDJIMjhDMjkuMTA0NiAyIDMwIDIuODk1NDMgMzAgNFYyNEMzMCAyNS4xMDQ2IDI5LjEwNDYgMjYgMjggMjZINEMyLjg5NTQzIDI2IDIgMjUuMTA0NiAyIDI0VjRDMiAyLjg5NTQzIDIuODk1NDMgMiA0IDJaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0XHQ8cGF0aCBkPVwiTTEgMzJDMC40NDc3MTUgMzIgMCAzMi40NDc3IDAgMzNDMCAzMy41NTIzIDAuNDQ3NzE1IDM0IDEgMzRIMzFDMzEuNTUyMyAzNCAzMiAzMy41NTIzIDMyIDMzQzMyIDMyLjQ0NzcgMzEuNTUyMyAzMiAzMSAzMkgxWlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdFx0PHBhdGggZD1cIk0wIDM3QzAgMzYuNDQ3NyAwLjQ0NzcxNSAzNiAxIDM2SDI3QzI3LjU1MjMgMzYgMjggMzYuNDQ3NyAyOCAzN0MyOCAzNy41NTIzIDI3LjU1MjMgMzggMjcgMzhIMUMwLjQ0NzcxNSAzOCAwIDM3LjU1MjMgMCAzN1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHQ8L3N2Zz4sXG5cdFx0aW5uZXJCbG9ja3M6IFtcblx0XHRcdFtcblx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICdCb29rIE5hbWUgIzEnLFxuXHRcdFx0XHRcdGNhbGNfdmFsdWU6ICcxMDAnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0aW1hZ2VCbG9jayggJ0Jvb2sgTmFtZSAjMScgKSxcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQnY29yZS9wYXJhZ3JhcGgnLFxuXHRcdFx0XHRcdFx0eyBjb250ZW50OiAnQm9vayBOYW1lICMxJyB9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2sgTmFtZSAjMicsXG5cdFx0XHRcdFx0Y2FsY192YWx1ZTogJzIwMCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRpbWFnZUJsb2NrKCAnQm9vayBOYW1lICMyJyApLFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCdjb3JlL3BhcmFncmFwaCcsXG5cdFx0XHRcdFx0XHR7IGNvbnRlbnQ6ICdCb29rIE5hbWUgIzInIH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XSxcblx0XHRcdF0sXG5cdFx0XHRbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnQm9vayBOYW1lICMzJyxcblx0XHRcdFx0XHRjYWxjX3ZhbHVlOiAnMjAwJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGltYWdlQmxvY2soICdCb29rIE5hbWUgIzMnICksXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0J2NvcmUvcGFyYWdyYXBoJyxcblx0XHRcdFx0XHRcdHsgY29udGVudDogJ0Jvb2sgTmFtZSAjMycgfSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRdLFxuXHRcdFx0XSxcblx0XHRdLFxuXHRcdHNjb3BlOiBbICdibG9jaycgXSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdpbWFnZXMtd2l0aC1jb250cm9scycsXG5cdFx0dGl0bGU6IF9fKCAnSW1hZ2VzIHdpdGggY29udHJvbHMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRkZXNjcmlwdGlvbjogX18oXG5cdFx0XHQnSW1hZ2UgYnV0dG9ucyB3aXRoIGNvbnRyb2xzIGluIGZvb3RlcicsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KSxcblx0XHRpY29uOiA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMzIgNDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNSAwQzIuMjM4NTggMCAwIDIuMjM4NTggMCA1QzAgNy43NjE0MiAyLjIzODU4IDEwIDUgMTBDNy43NjE0MiAxMCAxMCA3Ljc2MTQyIDEwIDVDMTAgMi4yMzg1OCA3Ljc2MTQyIDAgNSAwWk0yIDVDMiA2LjY1Njg1IDMuMzQzMTUgOCA1IDhDNi42NTY4NSA4IDggNi42NTY4NSA4IDVDOCAzLjM0MzE1IDYuNjU2ODUgMiA1IDJDMy4zNDMxNSAyIDIgMy4zNDMxNSAyIDVaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0XHQ8cGF0aCBkPVwiTTEyIDNDMTIgMi40NDc3MiAxMi40NDc3IDIgMTMgMkgzMUMzMS41NTIzIDIgMzIgMi40NDc3MiAzMiAzQzMyIDMuNTUyMjggMzEuNTUyMyA0IDMxIDRIMTNDMTIuNDQ3NyA0IDEyIDMuNTUyMjggMTIgM1pcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTYuNSAyNUMxOC40MzMgMjUgMjAgMjMuNDMzIDIwIDIxLjVDMjAgMTkuNTY3IDE4LjQzMyAxOCAxNi41IDE4QzE0LjU2NyAxOCAxMyAxOS41NjcgMTMgMjEuNUMxMyAyMy40MzMgMTQuNTY3IDI1IDE2LjUgMjVaTTE2LjUgMjNDMTcuMzI4NCAyMyAxOCAyMi4zMjg0IDE4IDIxLjVDMTggMjAuNjcxNiAxNy4zMjg0IDIwIDE2LjUgMjBDMTUuNjcxNiAyMCAxNSAyMC42NzE2IDE1IDIxLjVDMTUgMjIuMzI4NCAxNS42NzE2IDIzIDE2LjUgMjNaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0XHQ8cGF0aCBkPVwiTTIwLjc5MTcgMjcuMjk4NUMyMC42MDM3IDI3LjEwNzYgMjAuMzQ2OSAyNyAyMC4wNzg5IDI3QzE5LjgxMSAyNyAxOS41NTQyIDI3LjEwNzYgMTkuMzY2MiAyNy4yOTg1TDE1LjE1NzkgMzEuNTc0NEwxMi4yOTE3IDI4LjY2MjJDMTIuMTAzNyAyOC40NzEyIDExLjg0NjkgMjguMzYzNiAxMS41Nzg5IDI4LjM2MzZDMTEuMzExIDI4LjM2MzYgMTEuMDU0MiAyOC40NzEyIDEwLjg2NjIgMjguNjYyMkw3LjI4NzI5IDMyLjI5ODVDNi44OTk4OSAzMi42OTIyIDYuOTA0OTIgMzMuMzI1MyA3LjI5ODU0IDMzLjcxMjdDNy42OTIxNiAzNC4xMDAxIDguMzI1MzEgMzQuMDk1MSA4LjcxMjcxIDMzLjcwMTVMMTEuNTc4OSAzMC43ODkyTDE0LjQ0NTIgMzMuNzAxNUMxNC42MzMyIDMzLjg5MjQgMTQuODg5OSAzNCAxNS4xNTc5IDM0QzE1LjQyNTkgMzQgMTUuNjgyNiAzMy44OTI0IDE1Ljg3MDYgMzMuNzAxNUwyMC4wNzg5IDI5LjQyNTZMMjQuMjg3MyAzMy43MDE1QzI0LjY3NDcgMzQuMDk1MSAyNS4zMDc4IDM0LjEwMDEgMjUuNzAxNSAzMy43MTI3QzI2LjA5NTEgMzMuMzI1MyAyNi4xMDAxIDMyLjY5MjIgMjUuNzEyNyAzMi4yOTg1TDIwLjc5MTcgMjcuMjk4NVpcIiBmaWxsPVwiIzBGMTcyQVwiLz5cblx0XHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNCAxMkMxLjc5MDg2IDEyIDAgMTMuNzkwOSAwIDE2VjM2QzAgMzguMjA5MSAxLjc5MDg2IDQwIDQgNDBIMjhDMzAuMjA5MSA0MCAzMiAzOC4yMDkxIDMyIDM2VjE2QzMyIDEzLjc5MDkgMzAuMjA5MSAxMiAyOCAxMkg0Wk0yOCAxNEg0QzIuODk1NDMgMTQgMiAxNC44OTU0IDIgMTZWMzZDMiAzNy4xMDQ2IDIuODk1NDMgMzggNCAzOEgyOEMyOS4xMDQ2IDM4IDMwIDM3LjEwNDYgMzAgMzZWMTZDMzAgMTQuODk1NCAyOS4xMDQ2IDE0IDI4IDE0WlwiIGZpbGw9XCIjMEYxNzJBXCIvPlxuXHRcdFx0PHBhdGggZD1cIk0xMyA2QzEyLjQ0NzcgNiAxMiA2LjQ0NzcyIDEyIDdDMTIgNy41NTIyOCAxMi40NDc3IDggMTMgOEgzMUMzMS41NTIzIDggMzIgNy41NTIyOCAzMiA3QzMyIDYuNDQ3NzIgMzEuNTUyMyA2IDMxIDZIMTNaXCIgZmlsbD1cIiMwRjE3MkFcIi8+XG5cdFx0PC9zdmc+LFxuXHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHRbXG5cdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnQm9vayBOYW1lICMxJyxcblx0XHRcdFx0XHRjYWxjX3ZhbHVlOiAnMTAwJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGltYWdlQmxvY2soICdCb29rIE5hbWUgIzEnICksXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UtY29udHJvbCcsXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiAnQm9vayBOYW1lICMxJyB9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdF0sXG5cdFx0XHRdLFxuXHRcdFx0W1xuXHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2sgTmFtZSAjMicsXG5cdFx0XHRcdFx0Y2FsY192YWx1ZTogJzIwMCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRpbWFnZUJsb2NrKCAnQm9vayBOYW1lICMyJyApLFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCdqZXQtZm9ybXMvY2hvaWNlLWNvbnRyb2wnLFxuXHRcdFx0XHRcdFx0eyBsYWJlbDogJ0Jvb2sgTmFtZSAjMScgfSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRdLFxuXHRcdFx0XSxcblx0XHRcdFtcblx0XHRcdFx0J2pldC1mb3Jtcy9jaG9pY2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICdCb29rIE5hbWUgIzMnLFxuXHRcdFx0XHRcdGNhbGNfdmFsdWU6ICcyMDAnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0aW1hZ2VCbG9jayggJ0Jvb2sgTmFtZSAjMycgKSxcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQnamV0LWZvcm1zL2Nob2ljZS1jb250cm9sJyxcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdCb29rIE5hbWUgIzEnIH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XSxcblx0XHRcdF0sXG5cdFx0XSxcblx0XHRzY29wZTogWyAnYmxvY2snIF0sXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB2YXJpYXRpb25zOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGNob2ljZXNGaWVsZCBmcm9tICcuL2Nob2ljZXMtZmllbGQnO1xuaW1wb3J0ICogYXMgY2hvaWNlIGZyb20gJy4vY2hvaWNlJztcbmltcG9ydCAqIGFzIGNob2ljZUNvbnRyb2wgZnJvbSAnLi9jaG9pY2UtY29udHJvbCc7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IHdwLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvYWR2YW5jZWQtY2hvaWNlcycsXG5cdGZ1bmN0aW9uICggYmxvY2tzICkge1xuXHRcdGJsb2Nrcy5wdXNoKFxuXHRcdFx0Y2hvaWNlc0ZpZWxkLFxuXHRcdFx0Y2hvaWNlLFxuXHRcdFx0Y2hvaWNlQ29udHJvbCxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIGJsb2Nrcztcblx0fSxcbik7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9