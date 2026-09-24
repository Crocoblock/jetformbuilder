/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/block/edit.js"
/*!******************************!*\
  !*** ./editor/block/edit.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IntlPhoneEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_img_globe_2x_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/img/globe@2x.webp */ "../lib/img/globe@2x.webp");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview */ "./editor/block/preview.js");






const {
  ToolBarFields,
  BlockName,
  BlockLabel,
  BlockDescription,
  AdvancedFields,
  FieldWrapper,
  BlockAdvancedValue
} = JetFBComponents;
const {
  useUniqueNameOnDuplicate
} = JetFBHooks;
function IntlPhoneEdit(props) {
  const {
    attributes,
    setAttributes,
    isSelected,
    editProps: {
      uniqKey,
      attrHelp
    }
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  useUniqueNameOnDuplicate();
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolBarFields, {
    key: uniqKey('ToolBarFields'),
    ...props
  }), isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: uniqKey('InspectorControls')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockLabel, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockName, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockDescription, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Value', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAdvancedValue, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Field', 'jet-form-builder'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default Country', 'jet-form-builder'),
    value: attributes.default_country,
    onChange: newValue => setAttributes({
      default_country: newValue
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ISO country code (e.g., "US", "UA") or "auto" for IP detection.', 'jet-form-builder')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    id: uniqKey('preferredCountries'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preferred Countries', 'jet-form-builder'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Comma-separated country codes (e.g., "US, GB, UA").', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: attributes.preferred_countries,
    onChange: newValue => {
      setAttributes({
        preferred_countries: newValue
      });
    },
    placeholder: "US, GB, UA"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    id: uniqKey('onlyCountries'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Only Countries', 'jet-form-builder'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show only these countries (e.g., "US, CA, MX").', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: attributes.only_countries,
    onChange: newValue => {
      setAttributes({
        only_countries: newValue
      });
    },
    placeholder: "US, CA, MX"
  })), attributes.only_countries.length <= 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    id: uniqKey('excludeCountries'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exclude Countries', 'jet-form-builder'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exclude these countries (e.g., "US, BY")', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: attributes.exclude_countries,
    onChange: newValue => {
      setAttributes({
        exclude_countries: newValue
      });
    },
    placeholder: "US, BY"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Separate Dial Code', 'jet-form-builder'),
    checked: attributes.separate_dial_code,
    onChange: () => setAttributes({
      separate_dial_code: !attributes.separate_dial_code
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display the selected country's international dial code next to the input, so it looks like it's part of the typed number.", 'jet-form-builder')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save Format', 'jet-form-builder'),
    value: attributes.save_format,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('E.164', 'jet-form-builder'),
      value: 'e164'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('International', 'jet-form-builder'),
      value: 'international'
    }],
    onChange: newValue => setAttributes({
      save_format: newValue
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save format: E.164 (+12015553333) or International (+1 201-555-3333).', 'jet-form-builder')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Additional Settings', 'jet-form-builder'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use Global ipinfo.io Token', 'jet-form-builder'),
    checked: attributes.use_global,
    onChange: () => setAttributes({
      use_global: !attributes.use_global
    }),
    help: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use', 'jet-form-builder') + ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: window.JetFormEditorData?.global_settings_url + '#phone-field-tab',
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Global Settings', 'jet-form-builder')))
  }), !attributes.use_global && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ipinfo.io API Token', 'jet-form-builder'),
    value: attributes.ipinfo_token,
    onChange: newValue => setAttributes({
      ipinfo_token: newValue
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Optional: API token for IP-based country detection (50k free requests/month)', 'jet-form-builder')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Validation Messages', 'jet-form-builder'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Required Field Message', 'jet-form-builder'),
    value: attributes.validation_message_required,
    onChange: newValue => setAttributes({
      validation_message_required: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Required field is empty', 'jet-form-builder')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Invalid Phone Message', 'jet-form-builder'),
    value: attributes.validation_message_invalid,
    onChange: newValue => setAttributes({
      validation_message_invalid: newValue
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please enter a valid phone number', 'jet-form-builder')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AdvancedFields, {
    ...props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    key: uniqKey('viewBlock')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldWrapper, {
    key: uniqKey('FieldWrapper'),
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_preview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    separateDialCode: attributes.separate_dial_code,
    globeIcon: _lib_img_globe_2x_webp__WEBPACK_IMPORTED_MODULE_4__,
    placeholder: attributes.default
  })))];
}

/***/ },

/***/ "./editor/block/index.js"
/*!*******************************!*\
  !*** ./editor/block/index.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/block/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../block.json */ "../../block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./editor/block/style.scss");




const {
  name,
  icon = ''
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;


const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  description: 'Add an international phone number input field with country flags, dial codes, and validation.',
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  jfbResolveBlock() {
    const base = {
      clientId: this.clientId,
      name: this.name
    };
    if (!this.attributes.name) {
      return base;
    }
    return {
      ...base,
      fields: [{
        value: this.attributes.name,
        name: this.attributes.name,
        label: this.attributes.label || this.attributes.name
      }]
    };
  },
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      isPreview: true
    }
  }
};

/***/ },

/***/ "./editor/block/preview.js"
/*!*********************************!*\
  !*** ./editor/block/preview.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhoneFieldVisualPreview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function PhoneFieldVisualPreview({
  separateDialCode = true,
  separateDialCodeClass = 'separate-dial-code',
  dialCode = '+1',
  placeholder = '201-231-2312',
  value = '',
  globeIcon
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `jet-form-builder__field-wrap phone-field-wrap phone-field-preview ${separateDialCode ? separateDialCodeClass : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "iti iti--allow-dropdown iti--show-flags iti--inline-dropdown"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "iti__country-container",
    "aria-hidden": "true"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "iti__selected-country"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "iti__selected-country-primary"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "iti__flag iti__globe",
    style: {
      backgroundImage: globeIcon ? `url(${globeIcon})` : 'none'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "iti__arrow"
  })), separateDialCode && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "iti__selected-dial-code"
  }, dialCode))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "tel",
    className: "jet-form-builder__field phone-field-intl iti__tel-input",
    disabled: true,
    readOnly: true,
    value: value,
    placeholder: placeholder.length > 0 ? placeholder : '201-231-2312',
    onChange: () => {},
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Phone number', 'jet-form-builder')
  }))));
}

/***/ },

/***/ "./editor/block/style.scss"
/*!*********************************!*\
  !*** ./editor/block/style.scss ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../lib/img/globe@2x.webp"
/*!********************************!*\
  !*** ../lib/img/globe@2x.webp ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/globe@2x.webp";

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

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

/***/ "../../block.json"
/*!************************!*\
  !*** ../../block.json ***!
  \************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://raw.githubusercontent.com/WordPress/gutenberg/trunk/schemas/json/block.json","apiVersion":3,"name":"jet-forms/phone-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","phone","international","telephone"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false,"jetFBSanitizeValue":true},"title":"Phone Field","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M58 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H28C28 50.2843 34.7157 57 43 57C51.2843 57 58 50.2843 58 42ZM60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H28.1322C29.11 32.6613 35.3938 27 43 27C50.6062 27 56.89 32.6613 57.8678 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM43 55C50.1797 55 56 49.1797 56 42C56 34.8203 50.1797 29 43 29C35.8203 29 30 34.8203 30 42C30 49.1797 35.8203 55 43 55Z\\" fill=\\"currentColor\\"/><path d=\\"M50.2504 37.4994C50.251 36.6437 49.9406 35.8165 49.3773 35.1723C48.8569 34.5771 48.1523 34.1779 47.3793 34.0307L45.5453 38.1293L47.392 40.3256L47.4594 40.4164C47.626 40.6679 47.7247 40.9582 47.7455 41.2592C47.7663 41.5601 47.7089 41.8612 47.5785 42.1332L47.5756 42.14C46.7005 43.9314 44.8951 45.7135 43.1039 46.5775L43.098 46.5805C42.8244 46.7104 42.5212 46.7663 42.2191 46.7436C41.9172 46.7207 41.6263 46.62 41.3754 46.4506C41.3448 46.4299 41.3156 46.4071 41.2875 46.3832L39.1254 44.5443L35.0307 46.3793C35.1779 47.1523 35.5771 47.8569 36.1723 48.3773C36.8165 48.9406 37.6437 49.251 38.4994 49.2504C41.6156 49.2503 44.6055 48.0124 46.809 45.809C49.0124 43.6055 50.2503 40.6156 50.2504 37.4994ZM52.2455 37.8412C52.1581 41.3643 50.7211 44.725 48.223 47.223C45.7249 49.7211 42.3643 51.1581 38.8412 51.2455L38.5004 51.2504C37.16 51.2513 35.8649 50.7646 34.8559 49.8822C33.8468 48.9998 33.1918 47.7812 33.0141 46.4525C33.0134 46.4477 33.0137 46.4427 33.0131 46.4379C32.9685 46.0625 33.0465 45.6831 33.2357 45.3559L33.3109 45.2357C33.4947 44.9701 33.7491 44.7599 34.0463 44.6293L38.4682 42.6488L38.4818 42.642C38.6823 42.5558 38.8968 42.5087 39.1137 42.5014L39.3314 42.5072L39.5463 42.5404C39.6877 42.5713 39.8249 42.6193 39.9545 42.684L40.142 42.7934L40.2367 42.8637L42.3891 44.6957C43.6819 44.0212 45.0171 42.701 45.6967 41.4174L43.8578 39.2299C43.8322 39.1994 43.8083 39.1675 43.7865 39.1342C43.6285 38.8928 43.5324 38.6159 43.5072 38.3285C43.4821 38.0412 43.5284 37.7519 43.642 37.4867L43.6478 37.4721L45.6293 33.0473C45.7789 32.7065 46.0334 32.4222 46.3559 32.2357L46.4809 32.1693C46.7778 32.0283 47.1095 31.9741 47.4379 32.0131C47.4427 32.0137 47.4477 32.0134 47.4525 32.0141C48.7812 32.1919 49.9998 32.8468 50.8822 33.8559C51.7646 34.8649 52.2513 36.16 52.2504 37.5004L52.2455 37.8412Z\\" fill=\\"currentColor\\"/></svg>","attributes":{"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"default":{"type":"string","default":"","jfb":{"rich-no-preset":true}},"value":{"type":"object","default":{"groups":[]}},"required":{"type":"boolean","default":false},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""},"default_country":{"type":"string","default":"auto"},"preferred_countries":{"type":"string","default":""},"only_countries":{"type":"string","default":""},"exclude_countries":{"type":"string","default":""},"separate_dial_code":{"type":"boolean","default":false},"save_format":{"type":"string","default":"e164","enum":["e164","national","international"]},"ipinfo_token":{"type":"string","default":""},"use_global":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false},"validation_message_required":{"type":"string","default":"Required field is empty"},"validation_message_invalid":{"type":"string","default":"Please enter a valid phone number"}},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewScript":"jet-fb-blocks-v2-phone-field","viewStyle":"jet-fb-blocks-v2-phone-field"}');

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./editor/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./editor/block/index.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);


(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('jet.fb.register.fields', 'jet-form-builder/phone-field', function (blocks) {
  blocks.push(_block__WEBPACK_IMPORTED_MODULE_0__);
  return blocks;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQU1BO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNNQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BOzs7Ozs7Ozs7OztBQzdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkLy4vZWRpdG9yL2Jsb2NrL2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkLy4vZWRpdG9yL2Jsb2NrL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1waG9uZS1maWVsZC8uL2VkaXRvci9ibG9jay9wcmV2aWV3LmpzIiwid2VicGFjazovL2pmYi1waG9uZS1maWVsZC8uL2VkaXRvci9ibG9jay9zdHlsZS5zY3NzP2VkOTIiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1waG9uZS1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItcGhvbmUtZmllbGQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamZiLXBob25lLWZpZWxkLy4vZWRpdG9yL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7XG5cdFRleHRDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRQYW5lbEJvZHksXG5cdFNlbGVjdENvbnRyb2wsXG5cdEJhc2VDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgZ2xvYmVJY29uIGZyb20gJy4uLy4uLy4uL2xpYi9pbWcvZ2xvYmVAMngud2VicCc7XG5pbXBvcnQgUGhvbmVGaWVsZFZpc3VhbFByZXZpZXcgZnJvbSAnLi9wcmV2aWV3JztcblxuY29uc3Qge1xuXHRUb29sQmFyRmllbGRzLFxuXHRCbG9ja05hbWUsXG5cdEJsb2NrTGFiZWwsXG5cdEJsb2NrRGVzY3JpcHRpb24sXG5cdEFkdmFuY2VkRmllbGRzLFxuXHRGaWVsZFdyYXBwZXIsXG5cdEJsb2NrQWR2YW5jZWRWYWx1ZSxcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0dXNlVW5pcXVlTmFtZU9uRHVwbGljYXRlLFxufSA9IEpldEZCSG9va3M7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGxQaG9uZUVkaXQoIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGlzU2VsZWN0ZWQsXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH0sXG5cdH0gPSBwcm9wcztcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXHR1c2VVbmlxdWVOYW1lT25EdXBsaWNhdGUoKTtcblxuXHRyZXR1cm4gW1xuXHRcdDxUb29sQmFyRmllbGRzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPixcblx0XHRpc1NlbGVjdGVkICYmIChcblx0XHRcdDxJbnNwZWN0b3JDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnR2VuZXJhbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH0+XG5cdFx0XHRcdFx0PEJsb2NrTGFiZWwgLz5cblx0XHRcdFx0XHQ8QmxvY2tOYW1lIC8+XG5cdFx0XHRcdFx0PEJsb2NrRGVzY3JpcHRpb24gLz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnVmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PlxuXHRcdFx0XHRcdDxCbG9ja0FkdmFuY2VkVmFsdWUgLz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXsgX18oICdGaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRpbml0aWFsT3Blbj17IGZhbHNlIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RlZmF1bHQgQ291bnRyeScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZWZhdWx0X2NvdW50cnkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBkZWZhdWx0X2NvdW50cnk6IG5ld1ZhbHVlIH0gKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgX18oICdJU08gY291bnRyeSBjb2RlIChlLmcuLCBcIlVTXCIsIFwiVUFcIikgb3IgXCJhdXRvXCIgZm9yIElQIGRldGVjdGlvbi4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9eyB1bmlxS2V5KCAncHJlZmVycmVkQ291bnRyaWVzJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdQcmVmZXJyZWQgQ291bnRyaWVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0aGVscD17IF9fKCAnQ29tbWEtc2VwYXJhdGVkIGNvdW50cnkgY29kZXMgKGUuZy4sIFwiVVMsIEdCLCBVQVwiKS4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5wcmVmZXJyZWRfY291bnRyaWVzIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgcHJlZmVycmVkX2NvdW50cmllczogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVUywgR0IsIFVBXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9eyB1bmlxS2V5KCAnb25seUNvdW50cmllcycgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnT25seSBDb3VudHJpZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgX18oICdTaG93IG9ubHkgdGhlc2UgY291bnRyaWVzIChlLmcuLCBcIlVTLCBDQSwgTVhcIikuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMub25seV9jb3VudHJpZXMgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBvbmx5X2NvdW50cmllczogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVUywgQ0EsIE1YXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdFx0XHRcdHsgYXR0cmlidXRlcy5vbmx5X2NvdW50cmllcy5sZW5ndGggPD0gMCAmJiAoXG5cdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0aWQ9eyB1bmlxS2V5KCAnZXhjbHVkZUNvdW50cmllcycgKSB9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFeGNsdWRlIENvdW50cmllcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnRXhjbHVkZSB0aGVzZSBjb3VudHJpZXMgKGUuZy4sIFwiVVMsIEJZXCIpJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZXhjbHVkZV9jb3VudHJpZXMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZXhjbHVkZV9jb3VudHJpZXM6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVTLCBCWVwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdCkgfVxuXG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTZXBhcmF0ZSBEaWFsIENvZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zZXBhcmF0ZV9kaWFsX2NvZGUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNlcGFyYXRlX2RpYWxfY29kZTogISBhdHRyaWJ1dGVzLnNlcGFyYXRlX2RpYWxfY29kZSB9ICkgfVxuXHRcdFx0XHRcdFx0aGVscD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFwiRGlzcGxheSB0aGUgc2VsZWN0ZWQgY291bnRyeSdzIGludGVybmF0aW9uYWwgZGlhbCBjb2RlIG5leHQgdG8gdGhlIGlucHV0LCBzbyBpdCBsb29rcyBsaWtlIGl0J3MgcGFydCBvZiB0aGUgdHlwZWQgbnVtYmVyLlwiLFxuXHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2F2ZSBGb3JtYXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc2F2ZV9mb3JtYXQgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IFtcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oICdFLjE2NCcsICdqZXQtZm9ybS1idWlsZGVyJyApLCB2YWx1ZTogJ2UxNjQnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCAnSW50ZXJuYXRpb25hbCcsICdqZXQtZm9ybS1idWlsZGVyJyApLCB2YWx1ZTogJ2ludGVybmF0aW9uYWwnIH0sXG5cdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2F2ZV9mb3JtYXQ6IG5ld1ZhbHVlIH0gKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdFx0XHRcdCdTYXZlIGZvcm1hdDogRS4xNjQgKCsxMjAxNTU1MzMzMykgb3IgSW50ZXJuYXRpb25hbCAoKzEgMjAxLTU1NS0zMzMzKS4nLFxuXHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXsgX18oICdBZGRpdGlvbmFsIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdGluaXRpYWxPcGVuPXsgZmFsc2UgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdVc2UgR2xvYmFsIGlwaW5mby5pbyBUb2tlbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnVzZV9nbG9iYWwgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHVzZV9nbG9iYWw6ICEgYXR0cmlidXRlcy51c2VfZ2xvYmFsIH0gKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnVXNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPXsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhPy5nbG9iYWxfc2V0dGluZ3NfdXJsICsgJyNwaG9uZS1maWVsZC10YWInIH1cblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnR2xvYmFsIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdHsgISBhdHRyaWJ1dGVzLnVzZV9nbG9iYWwgJiYgKFxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdpcGluZm8uaW8gQVBJIFRva2VuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuaXBpbmZvX3Rva2VuIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gc2V0QXR0cmlidXRlcyggeyBpcGluZm9fdG9rZW46IG5ld1ZhbHVlIH0gKSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ09wdGlvbmFsOiBBUEkgdG9rZW4gZm9yIElQLWJhc2VkIGNvdW50cnkgZGV0ZWN0aW9uICg1MGsgZnJlZSByZXF1ZXN0cy9tb250aCknLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0dGl0bGU9eyBfXyggJ1ZhbGlkYXRpb24gTWVzc2FnZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0aW5pdGlhbE9wZW49eyBmYWxzZSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdSZXF1aXJlZCBGaWVsZCBNZXNzYWdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZhbGlkYXRpb25fbWVzc2FnZV9yZXF1aXJlZCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHZhbGlkYXRpb25fbWVzc2FnZV9yZXF1aXJlZDogbmV3VmFsdWUgfSApIH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdSZXF1aXJlZCBmaWVsZCBpcyBlbXB0eScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW52YWxpZCBQaG9uZSBNZXNzYWdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZhbGlkYXRpb25fbWVzc2FnZV9pbnZhbGlkIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgdmFsaWRhdGlvbl9tZXNzYWdlX2ludmFsaWQ6IG5ld1ZhbHVlIH0gKSB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcGhvbmUgbnVtYmVyJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkcyB7IC4uLnByb3BzIH0gLz5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0KSxcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8UGhvbmVGaWVsZFZpc3VhbFByZXZpZXdcblx0XHRcdFx0XHRzZXBhcmF0ZURpYWxDb2RlPXsgYXR0cmlidXRlcy5zZXBhcmF0ZV9kaWFsX2NvZGUgfVxuXHRcdFx0XHRcdGdsb2JlSWNvbj17Z2xvYmVJY29ufVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5kZWZhdWx0IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRXcmFwcGVyPlxuXHRcdDwvZGl2Pixcblx0XTtcbn1cbiIsImltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi4vLi4vLi4vLi4vYmxvY2suanNvbic7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuZXhwb3J0IHsgbmFtZSB9O1xuZXhwb3J0IHsgbWV0YWRhdGEgfTtcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRkZXNjcmlwdGlvbjogJ0FkZCBhbiBpbnRlcm5hdGlvbmFsIHBob25lIG51bWJlciBpbnB1dCBmaWVsZCB3aXRoIGNvdW50cnkgZmxhZ3MsIGRpYWwgY29kZXMsIGFuZCB2YWxpZGF0aW9uLicsXG5cdGVkaXQ6IEVkaXQsXG5cdGpmYlJlc29sdmVCbG9jaygpIHtcblx0XHRjb25zdCBiYXNlID0ge1xuXHRcdFx0Y2xpZW50SWQ6IHRoaXMuY2xpZW50SWQsXG5cdFx0XHRuYW1lOiB0aGlzLm5hbWUsXG5cdFx0fTtcblxuXHRcdGlmICggISB0aGlzLmF0dHJpYnV0ZXMubmFtZSApIHtcblx0XHRcdHJldHVybiBiYXNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5iYXNlLFxuXHRcdFx0ZmllbGRzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogdGhpcy5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdFx0bmFtZTogdGhpcy5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdFx0bGFiZWw6IHRoaXMuYXR0cmlidXRlcy5sYWJlbCB8fCB0aGlzLmF0dHJpYnV0ZXMubmFtZSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fSxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxuXHRcdH0sXG5cdH0sXG59O1xuIiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG9uZUZpZWxkVmlzdWFsUHJldmlldyh7XG5cdHNlcGFyYXRlRGlhbENvZGUgPSB0cnVlLFxuXHRzZXBhcmF0ZURpYWxDb2RlQ2xhc3MgPSAnc2VwYXJhdGUtZGlhbC1jb2RlJyxcblx0ZGlhbENvZGUgPSAnKzEnLFxuXHRwbGFjZWhvbGRlciA9ICcyMDEtMjMxLTIzMTInLFxuXHR2YWx1ZSA9ICcnLFxuXHRnbG9iZUljb24sXG59KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCBwaG9uZS1maWVsZC13cmFwIHBob25lLWZpZWxkLXByZXZpZXcgJHtzZXBhcmF0ZURpYWxDb2RlID8gc2VwYXJhdGVEaWFsQ29kZUNsYXNzOiAnJ31gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2l0aSBpdGktLWFsbG93LWRyb3Bkb3duIGl0aS0tc2hvdy1mbGFncyBpdGktLWlubGluZS1kcm9wZG93bic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2l0aV9fY291bnRyeS1jb250YWluZXInIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2l0aV9fc2VsZWN0ZWQtY291bnRyeSc+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRpX19zZWxlY3RlZC1jb3VudHJ5LXByaW1hcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpdGlfX2ZsYWcgaXRpX19nbG9iZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGdsb2JlSWNvbiA/IGB1cmwoJHtnbG9iZUljb259KWAgOiAnbm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0aV9fYXJyb3dcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHsgc2VwYXJhdGVEaWFsQ29kZSAmJlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRpX19zZWxlY3RlZC1kaWFsLWNvZGVcIj57ZGlhbENvZGV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGVsXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWZvcm0tYnVpbGRlcl9fZmllbGQgcGhvbmUtZmllbGQtaW50bCBpdGlfX3RlbC1pbnB1dCdcblx0XHRcdFx0XHRcdGRpc2FibGVkXG5cdFx0XHRcdFx0XHRyZWFkT25seVxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyLmxlbmd0aCA+IDAgPyBwbGFjZWhvbGRlciA6ICcyMDEtMjMxLTIzMTInfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHt9fVxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD17X18oICdQaG9uZSBudW1iZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCJpbXBvcnQgKiBhcyBpbnRsUGhvbmVGaWVsZCBmcm9tICcuL2Jsb2NrJztcbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcGhvbmUtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGJsb2NrcyApIHtcblx0XHRibG9ja3MucHVzaCggaW50bFBob25lRmllbGQgKTtcblx0XHRyZXR1cm4gYmxvY2tzO1xuXHR9LFxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==