/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/next.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);







function UseFormButton() {
  const {
    closeGeneralSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/edit-post');
  const [builder, setBuilder] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const [pageType, setPageType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginSidebar, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    name: "sidebar",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use the form', 'jet-form-builder')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use the form', 'jet-form-builder'),
    onRequestClose: closeGeneralSidebar
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('1. How you want to use the form?', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please select the method how you planning to use the form - as element of page builder, as block or a plain shortcode', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    justify: "flex-start",
    wrap: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('2. Where you want to use the form?', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Where you want to place the form', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    justify: "flex-start",
    wrap: true
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UseFormButton);

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




(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('jet.fb.register.fields', 'jet-form-builder/welcome-block', function (blocks) {
  blocks.push(_welcomeBlock__WEBPACK_IMPORTED_MODULE_0__);
  return blocks;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQWNBO0FBQUE7QUFBQTtBQXNEQTtBQUFBO0FBQUE7QUEyQkE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBO0FBR0E7QUFBQTtBQVVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pKQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvbmV4dC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci9wcmV2aWV3QnV0dG9uL1ByZXZpZXdCdXR0b24uanN4Iiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3ByZXZpZXdCdXR0b24vYXBwZW5kQnV0dG9uLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3ByZXZpZXdCdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3IvdXNlRm9ybUJ1dHRvbi9Vc2VGb3JtQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci91c2VGb3JtQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3dlbGNvbWVCbG9jay9lZGl0LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3dlbGNvbWVCbG9jay9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci93ZWxjb21lQmxvY2svcHJldmlldy5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci91c2VGb3JtQnV0dG9uL2luZGV4LnBjc3MiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci91c2VGb3JtQnV0dG9uL2luZGV4LnBjc3M/N2E2YyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRvbVJlYWR5XCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWRpdFBvc3RcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicGx1Z2luc1wiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInByaW1pdGl2ZXNcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3IvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFBhdGgsIFNWRyB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBleHRlcm5hbCA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIk0xOS41IDQuNWgtN1Y2aDQuNDRsLTUuOTcgNS45NyAxLjA2IDEuMDZMMTggNy4wNnY0LjQ0aDEuNXYtN1ptLTEzIDFhMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDEwYTIgMiAwIDAgMCAyLTJ2LTNIMTd2M2EuNS41IDAgMCAxLS41LjVoLTEwYS41LjUgMCAwIDEtLjUtLjV2LTEwYS41LjUgMCAwIDEgLjUtLjVoM1Y1LjVoLTNaXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGV4dGVybmFsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXh0ZXJuYWwuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBuZXh0ID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTYuNiA2TDUuNCA3bDQuNSA1LTQuNSA1IDEuMSAxIDUuNS02LTUuNC02em02IDBsLTEuMSAxIDQuNSA1LTQuNSA1IDEuMSAxIDUuNS02LTUuNS02elwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBuZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV4dC5qcy5tYXAiLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBleHRlcm5hbCB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xyXG5cclxuZnVuY3Rpb24gUHJldmlld0J1dHRvbigpIHtcclxuXHRjb25zdCBbIHByZXZpZXdQYWdlLCBzZXRQcmV2aWV3UGFnZSBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdGNvbnN0IGlzU2F2aW5nRm9ybSA9IHVzZVNlbGVjdCggc2VsZWN0ID0+IHtcclxuXHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5pc1NhdmluZ1Bvc3QoKTtcclxuXHR9LCBbXSApO1xyXG5cclxuXHRjb25zdCB3YXNTYXZpbmcgPSB1c2VSZWYoIGZhbHNlICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCAhcHJldmlld1BhZ2UgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmICggIXdhc1NhdmluZy5jdXJyZW50ICYmIGlzU2F2aW5nRm9ybSApIHtcclxuXHRcdFx0d2FzU2F2aW5nLmN1cnJlbnQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggd2FzU2F2aW5nLmN1cnJlbnQgJiYgIWlzU2F2aW5nRm9ybSApIHtcclxuXHRcdFx0Ly8gVGhlIHBvc3QgaGFzIGZpbmlzaGVkIHNhdmluZ1xyXG5cdFx0XHRwcmV2aWV3UGFnZS5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0d2FzU2F2aW5nLmN1cnJlbnQgPSBmYWxzZTsgLy8gUmVzZXQgdGhlIGZsYWdcclxuXHRcdH1cclxuXHR9LCBbIGlzU2F2aW5nRm9ybSBdICk7XHJcblxyXG5cdGNvbnN0IG9wZW5QcmV2aWV3UGFnZSA9ICgpID0+IHtcclxuXHRcdGlmICggcHJldmlld1BhZ2UgJiYgIXByZXZpZXdQYWdlPy5jbG9zZWQgKSB7XHJcblx0XHRcdHByZXZpZXdQYWdlLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0UHJldmlld1BhZ2UoIHdpbmRvdy5vcGVuKCBKRkJPbmJvYXJkaW5nQ29uZmlnLnByZXZpZXdVUkwgKSApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8QnV0dG9uXHJcblx0XHR2YXJpYW50PVwidGVydGlhcnlcIlxyXG5cdFx0aWNvbj17IGV4dGVybmFsIH1cclxuXHRcdG9uQ2xpY2s9eyBvcGVuUHJldmlld1BhZ2UgfVxyXG5cdC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3QnV0dG9uOyIsImltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgUHJldmlld0J1dHRvbiBmcm9tICcuL1ByZXZpZXdCdXR0b24nO1xyXG5cclxuY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoICdqZmItcHJldmlldy13cmFwcGVyJyApO1xyXG5cclxuLy8gUmVuZGVyIG91ciBidXR0b24uXHJcbmNyZWF0ZVJvb3QoIGJ1dHRvbkRpdiApLnJlbmRlciggPFByZXZpZXdCdXR0b24vPiApO1xyXG5cclxuY29uc3QgYXBwZW5kQnV0dG9uID0gZnVuY3Rpb24gKCB1bnN1YnNjcmliZUNhbGxiYWNrICkge1xyXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHQnLmVkaXQtcG9zdC1oZWFkZXJfX3NldHRpbmdzJyxcclxuXHQpO1xyXG5cclxuXHRpZiAoICFoZWFkZXIgKSB7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHVuc3Vic2NyaWJlQ2FsbGJhY2soKTtcclxuXHRoZWFkZXIuaW5zZXJ0QmVmb3JlKFxyXG5cdFx0YnV0dG9uRGl2LFxyXG5cdFx0aGVhZGVyLnF1ZXJ5U2VsZWN0b3IoICcuZWRpdG9yLXBvc3QtcHVibGlzaC1idXR0b24nICksXHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcGVuZEJ1dHRvbjsiLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xyXG5pbXBvcnQgZG9tUmVhZHkgZnJvbSAnQHdvcmRwcmVzcy9kb20tcmVhZHknO1xyXG5pbXBvcnQgYXBwZW5kQnV0dG9uIGZyb20gJy4vYXBwZW5kQnV0dG9uJztcclxuXHJcbmRvbVJlYWR5KCAoKSA9PiB7XHJcblx0Y29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoICgpID0+IGFwcGVuZEJ1dHRvbiggdW5zdWJzY3JpYmUgKSApO1xyXG59ICk7IiwiaW1wb3J0IHsgUGx1Z2luU2lkZWJhciB9IGZyb20gJ0B3b3JkcHJlc3MvZWRpdC1wb3N0JztcclxuaW1wb3J0IHsgbmV4dCwgY29weVNtYWxsLCBwbHVzLCBlZGl0IH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHsgTW9kYWwsIEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuXHJcbmZ1bmN0aW9uIFVzZUZvcm1CdXR0b24oKSB7XHJcblx0Y29uc3QgeyBjbG9zZUdlbmVyYWxTaWRlYmFyIH0gICA9IHVzZURpc3BhdGNoKCAnY29yZS9lZGl0LXBvc3QnICk7XHJcblx0Y29uc3QgWyBidWlsZGVyLCBzZXRCdWlsZGVyIF0gICA9IHVzZVN0YXRlKCAnJyApO1xyXG5cdGNvbnN0IFsgcGFnZVR5cGUsIHNldFBhZ2VUeXBlIF0gPSB1c2VTdGF0ZSggJycgKTtcclxuXHJcblx0cmV0dXJuIDxQbHVnaW5TaWRlYmFyXHJcblx0XHRpY29uPXsgbmV4dCB9XHJcblx0XHRuYW1lPVwic2lkZWJhclwiXHJcblx0XHR0aXRsZT17IF9fKCAnVXNlIHRoZSBmb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdD5cclxuXHRcdDxNb2RhbFxyXG5cdFx0XHR0aXRsZT17IF9fKCAnVXNlIHRoZSBmb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IGNsb3NlR2VuZXJhbFNpZGViYXIgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8aDM+XHJcblx0XHRcdFx0eyBfXyhcclxuXHRcdFx0XHRcdCcxLiBIb3cgeW91IHdhbnQgdG8gdXNlIHRoZSBmb3JtPycsXHJcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdDwvaDM+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHQnUGxlYXNlIHNlbGVjdCB0aGUgbWV0aG9kIGhvdyB5b3UgcGxhbm5pbmcgdG8gdXNlIHRoZSBmb3JtIC0gYXMgZWxlbWVudCBvZiBwYWdlIGJ1aWxkZXIsIGFzIGJsb2NrIG9yIGEgcGxhaW4gc2hvcnRjb2RlJyxcclxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0PC9wPlxyXG5cdFx0XHQ8RmxleCBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIHdyYXA+XHJcblx0XHRcdFx0ey8qPEJ1dHRvbkNob2ljZVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiBzZXRCdWlsZGVyKCAnZWxlbWVudG9yJyApIH1cclxuXHRcdFx0XHRcdGljb249eyBjb3B5U21hbGwgfVxyXG5cdFx0XHRcdFx0aXNBY3RpdmU9eyAnZWxlbWVudG9yJyA9PT0gYnVpbGRlciB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBfXyhcclxuXHRcdFx0XHRcdFx0J0VsZW1lbnRvciBXaWRnZXQnLFxyXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHQ8L0J1dHRvbkNob2ljZT5cclxuXHRcdFx0XHQ8QnV0dG9uQ2hvaWNlXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHNldEJ1aWxkZXIoICdicmlja3MnICkgfVxyXG5cdFx0XHRcdFx0aWNvbj17IGNvcHlTbWFsbCB9XHJcblx0XHRcdFx0XHRpc0FjdGl2ZT17ICdicmlja3MnID09PSBidWlsZGVyIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IF9fKFxyXG5cdFx0XHRcdFx0XHQnQnJpY2tzIEVsZW1lbnQnLFxyXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHQ8L0J1dHRvbkNob2ljZT5cclxuXHRcdFx0XHQ8QnV0dG9uQ2hvaWNlXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHNldEJ1aWxkZXIoICdibG9ja3MnICkgfVxyXG5cdFx0XHRcdFx0aWNvbj17IGNvcHlTbWFsbCB9XHJcblx0XHRcdFx0XHRpc0FjdGl2ZT17ICdibG9ja3MnID09PSBidWlsZGVyIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IF9fKFxyXG5cdFx0XHRcdFx0XHQnQmxvY2sgZm9yIEJsb2NrIEVkaXRvcicsXHJcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uQ2hvaWNlPlxyXG5cdFx0XHRcdDxCdXR0b25DaG9pY2VcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4gc2V0QnVpbGRlciggJ3Nob3J0Y29kZScgKSB9XHJcblx0XHRcdFx0XHRpY29uPXsgY29weVNtYWxsIH1cclxuXHRcdFx0XHRcdGlzQWN0aXZlPXsgJ3Nob3J0Y29kZScgPT09IGJ1aWxkZXIgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHRcdCdTaG9ydGNvZGUgdG8gdXNlIGFueXdoZXJlJyxcclxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0PC9CdXR0b25DaG9pY2U+Ki99XHJcblx0XHRcdDwvRmxleD5cclxuXHRcdFx0PGgzPlxyXG5cdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHQnMi4gV2hlcmUgeW91IHdhbnQgdG8gdXNlIHRoZSBmb3JtPycsXHJcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdDwvaDM+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHQnV2hlcmUgeW91IHdhbnQgdG8gcGxhY2UgdGhlIGZvcm0nLFxyXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdCkgfVxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxGbGV4IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCIgd3JhcD5cclxuXHRcdFx0XHR7Lyo8QnV0dG9uQ2hvaWNlXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHNldFBhZ2VUeXBlKCAnc2VsZWN0JyApIH1cclxuXHRcdFx0XHRcdGljb249eyBlZGl0IH1cclxuXHRcdFx0XHRcdGlzQWN0aXZlPXsgJ3NlbGVjdCcgPT09IHBhZ2VUeXBlIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IF9fKFxyXG5cdFx0XHRcdFx0XHQnU2VsZWN0IHBhZ2UgdG8gYWRkIHRoZSBmb3JtJyxcclxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0PC9CdXR0b25DaG9pY2U+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHR7IF9fKCAnb3InLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDxCdXR0b25DaG9pY2VcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4gc2V0UGFnZVR5cGUoICduZXcnICkgfVxyXG5cdFx0XHRcdFx0aWNvbj17IHBsdXMgfVxyXG5cdFx0XHRcdFx0aXNBY3RpdmU9eyAnbmV3JyA9PT0gcGFnZVR5cGUgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHRcdCdDcmVhdGUgbmV3IHBhZ2UnLFxyXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHQ8L0J1dHRvbkNob2ljZT4qL31cclxuXHRcdFx0PC9GbGV4PlxyXG5cdFx0PC9Nb2RhbD5cclxuXHQ8L1BsdWdpblNpZGViYXI+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VGb3JtQnV0dG9uOyIsImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQHdvcmRwcmVzcy9wbHVnaW5zJztcclxuaW1wb3J0IFVzZUZvcm1CdXR0b24gZnJvbSAnLi9Vc2VGb3JtQnV0dG9uJztcclxuaW1wb3J0ICcuL2luZGV4LnBjc3MnXHJcblxyXG5yZWdpc3RlclBsdWdpbihcclxuXHQnamZiLXVzZS1mb3JtJyxcclxuXHR7IHJlbmRlcjogVXNlRm9ybUJ1dHRvbiB9LFxyXG4pOyIsImltcG9ydCBwcmV2aWV3IGZyb20gJy4vcHJldmlldyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGNsb25lRWxlbWVudCxcclxuXHQgICAgICBDaGlsZHJlbixcclxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUGxhY2Vob2xkZXIsXHJcblx0ICAgICAgRmxleCxcclxuXHQgICAgICBFeHRlcm5hbExpbmssXHJcblx0ICAgICAgVG9vbHRpcCxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcclxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZVNlbGVjdCxcclxuXHQgICAgICB1c2VEaXNwYXRjaCxcclxuICAgICAgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUGF0dGVybkluc2VydGVyQnV0dG9uLFxyXG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCBIZWxwSWNvbiA9IDxzdmdcclxuXHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcblx0d2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuXHRmb2N1c2FibGU9XCJmYWxzZVwiXHJcblx0c3R5bGU9eyB7XHJcblx0XHRjb2xvcjogJ3JnYigxMTcsIDExNywgMTE3KScsXHJcblx0fSB9XHJcbj5cclxuXHQ8cGF0aFxyXG5cdFx0ZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcblx0XHRkPVwiTTEyIDQuNzVhNy4yNSA3LjI1IDAgMTAwIDE0LjUgNy4yNSA3LjI1IDAgMDAwLTE0LjV6TTMuMjUgMTJhOC43NSA4Ljc1IDAgMTExNy41IDAgOC43NSA4Ljc1IDAgMDEtMTcuNSAwek0xMiA4Ljc1YTEuNSAxLjUgMCAwMS4xNjcgMi45OWMtLjQ2NS4wNTItLjkxNy40NC0uOTE3IDEuMDFWMTRoMS41di0uODQ1QTMgMyAwIDEwOSAxMC4yNWgxLjVhMS41IDEuNSAwIDAxMS41LTEuNXpNMTEuMjUgMTV2MS41aDEuNVYxNWgtMS41elwiLz5cclxuPC9zdmc+O1xyXG5cclxuZnVuY3Rpb24gV2VsY29tZUJsb2NrRWRpdCggeyBhdHRyaWJ1dGVzIH0gKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3QgZWxlbWVudHMgPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL3BhdHRlcm5zJyApLmdldFR5cGVzKCkubWFwKFxyXG5cdFx0XHQoIHsgdmlldzogVmlldywgLi4ucGF0dGVybiB9ICkgPT4gPFZpZXcgcGF0dGVybj17IHBhdHRlcm4gfS8+LFxyXG5cdFx0KSxcclxuXHRcdFtdLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHNhdmVSZWNvcmQgPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL3BhdHRlcm5zJyApLmdldFNldHRpbmcoICdzYXZlUmVjb3JkJyApLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHsgdXBkYXRlU2V0dGluZ3MgfSA9IHVzZURpc3BhdGNoKCAnamV0LWZvcm1zL3BhdHRlcm5zJyApO1xyXG5cclxuXHRpZiAoIGF0dHJpYnV0ZXMuaXNQcmV2aWV3ICkge1xyXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9eyB7XHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0fSB9PlxyXG5cdFx0XHR7IHByZXZpZXcgfVxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0gPlxyXG5cdFx0PFBsYWNlaG9sZGVyXHJcblx0XHRcdGljb249eyAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0bGFiZWw9eyBfXyggJ1NlbGVjdCBmb3JtIHBhdHRlcm4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdGluc3RydWN0aW9ucz17IF9fKFxyXG5cdFx0XHRcdCdZb3UgY2FuIHNlbGVjdCBvbmUgb2YgcHJlZGVmaW5lZCBsYXlvdXQsIG9yIGJ1aWxkIGN1c3RvbScsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpIH1cclxuXHRcdD5cclxuXHRcdFx0PHVsXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvbnMgamV0LWZiXCJcclxuXHRcdFx0XHRyb2xlPVwibGlzdFwiXHJcblx0XHRcdFx0YXJpYS1sYWJlbD17IF9fKCAnRm9ybSBwYXR0ZXJucycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgQ2hpbGRyZW4ubWFwKFxyXG5cdFx0XHRcdFx0ZWxlbWVudHMsXHJcblx0XHRcdFx0XHRjbG9uZUVsZW1lbnQsXHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdDwvdWw+XHJcblx0XHRcdDxGbGV4XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3NraXBcIlxyXG5cdFx0XHRcdGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxGbGV4XHJcblx0XHRcdFx0XHRqdXN0aWZ5PVwiZmxleC1zdGFydFwiXHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICdhdXRvJyxcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxQYXR0ZXJuSW5zZXJ0ZXJCdXR0b25cclxuXHRcdFx0XHRcdFx0cGF0dGVybk5hbWU9eyAnZGVmYXVsdCcgfVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0XHRcdFx0c3R5bGU9eyB7IG1hcmdpbjogJ3Vuc2V0JyB9IH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ1N0YXJ0IGZyb20gc2NyYXRjaCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdDwvUGF0dGVybkluc2VydGVyQnV0dG9uPlxyXG5cdFx0XHRcdFx0PEV4dGVybmFsTGlua1xyXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vZmVhdHVyZXMvY3JlYXRpbmctYS1mb3JtL1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHRcdFx0J0xlYXJuIG1vcmUgYWJvdXQgY3JlYXRpbmcgZm9ybXMnLFxyXG5cdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHQ8L0V4dGVybmFsTGluaz5cclxuXHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBzYXZlUmVjb3JkIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2F2ZVJlY29yZCA9PiB1cGRhdGVTZXR0aW5ncygge1xyXG5cdFx0XHRcdFx0XHRzYXZlUmVjb3JkLFxyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdGZsZXhMYWJlbFByb3BzPXsge1xyXG5cdFx0XHRcdFx0XHRhbGlnbjogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8RmxleD5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ1NhdmUgZm9ybSByZWNvcmRzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHQ8VG9vbHRpcFxyXG5cdFx0XHRcdFx0XHRcdHRleHQ9eyBfXyhcclxuXHRcdFx0XHRcdFx0XHRcdGBBZGRzIFwiU2F2ZSBGb3JtIFJlY29yZFwiIGFjdGlvbiB0byBzdG9yZSBcclxuYWxsIGZvcm0gc3VibWlzc2lvbnMgaW50byBkYXRhYmFzZWAsXHJcblx0XHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHRcdFx0ZGVsYXk9eyAyMDAgfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0eyBIZWxwSWNvbiB9XHJcblx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHQ8L1RvZ2dsZUNvbnRyb2w+XHJcblx0XHRcdDwvRmxleD5cclxuXHRcdDwvUGxhY2Vob2xkZXI+XHJcblx0PC9kaXY+O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZUJsb2NrRWRpdDsiLCJpbXBvcnQgV2VsY29tZUJsb2NrRWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBuYW1lLFxyXG5cdCAgICAgIGljb24sXHJcbiAgICAgIH0gPSBtZXRhZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5tZXRhZGF0YS5hdHRyaWJ1dGVzLmlzUHJldmlldyA9IHtcclxuXHQndHlwZSc6ICdib29sZWFuJyxcclxuXHQnZGVmYXVsdCc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRkZXNjcmlwdGlvbjogX18oXHJcblx0XHRgVXNlIHRoZSBXZWxjb21lIGJsb2NrIHRvIHF1aWNrbHkgZmV0Y2ggYWxsIHByZS1tYWRlIEZvcm0gUGF0dGVybnMsIHN0YXJ0IGJ1aWxkaW5nIGZyb20gc2NyYXRjaCwgZ2VuZXJhdGUgdmlhIEFJLCBzYXZlIGZvcm0gcmVjb3JkcywgZXRjLmAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRleGFtcGxlOiB7XHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdGlzUHJldmlldzogdHJ1ZSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRlZGl0OiBXZWxjb21lQmxvY2tFZGl0LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzLFxyXG59OyIsImNvbnN0IHByZXZpZXcgPSAoXHJcblx0PHN2ZyB3aWR0aD1cIjI5OFwiIGhlaWdodD1cIjE0NFwiIHZpZXdCb3g9XCIwIDAgMjk4IDE0NFwiIGZpbGw9XCJub25lXCJcclxuXHQgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdDxyZWN0IHdpZHRoPVwiMjk4XCIgaGVpZ2h0PVwiMTQ0XCIgZmlsbD1cIiNFMkU4RjBcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMTJcIiB5PVwiMTJcIiB3aWR0aD1cIjg2XCIgaGVpZ2h0PVwiMTIwXCIgcng9XCI0XCIgZmlsbD1cIndoaXRlXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjI1XCIgeT1cIjI1XCIgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCIgcng9XCI0XCIgZmlsbD1cIiNGMUY1RjlcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTQ3LjggNDFDNDcuMzU4MiA0MSA0NyA0MS40NDc3IDQ3IDQyQzQ3IDQyLjU1MjMgNDcuMzU4MiA0MyA0Ny44IDQzSDYyLjJDNjIuNjQxOCA0MyA2MyA0Mi41NTIzIDYzIDQyQzYzIDQxLjQ0NzcgNjIuNjQxOCA0MSA2Mi4yIDQxSDQ3LjhaXCJcclxuXHRcdFx0ZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTQzIDUwQzQzIDQ4LjM0MzEgNDQuMzQzMSA0NyA0NiA0N0g2NEM2NS42NTY5IDQ3IDY3IDQ4LjM0MzEgNjcgNTBDNjcgNTEuNjU2OSA2NS42NTY5IDUzIDY0IDUzSDQ2QzQ0LjM0MzEgNTMgNDMgNTEuNjU2OSA0MyA1MFpNNDYgNDlDNDUuNDQ3NyA0OSA0NSA0OS40NDc3IDQ1IDUwQzQ1IDUwLjU1MjMgNDUuNDQ3NyA1MSA0NiA1MUg2NEM2NC41NTIzIDUxIDY1IDUwLjU1MjMgNjUgNTBDNjUgNDkuNDQ3NyA2NC41NTIzIDQ5IDY0IDQ5SDQ2WlwiXHJcblx0XHQgICAgICBmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNNDYgNTVDNDQuMzQzMSA1NSA0MyA1Ni4zNDMxIDQzIDU4QzQzIDU5LjY1NjkgNDQuMzQzMSA2MSA0NiA2MUg2NEM2NS42NTY5IDYxIDY3IDU5LjY1NjkgNjcgNThDNjcgNTYuMzQzMSA2NS42NTY5IDU1IDY0IDU1SDQ2Wk00NSA1OEM0NSA1Ny40NDc3IDQ1LjQ0NzcgNTcgNDYgNTdINjRDNjQuNTUyMyA1NyA2NSA1Ny40NDc3IDY1IDU4QzY1IDU4LjU1MjMgNjQuNTUyMyA1OSA2NCA1OUg0NkM0NS40NDc3IDU5IDQ1IDU4LjU1MjMgNDUgNThaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk00OSA2NkM0OSA2NC4zNDMxIDUwLjM0MzEgNjMgNTIgNjNINThDNTkuNjU2OSA2MyA2MSA2NC4zNDMxIDYxIDY2QzYxIDY3LjY1NjkgNTkuNjU2OSA2OSA1OCA2OUg1MkM1MC4zNDMxIDY5IDQ5IDY3LjY1NjkgNDkgNjZaTTUyIDY1QzUxLjQ0NzcgNjUgNTEgNjUuNDQ3NyA1MSA2NkM1MSA2Ni41NTIzIDUxLjQ0NzcgNjcgNTIgNjdINThDNTguNTUyMyA2NyA1OSA2Ni41NTIzIDU5IDY2QzU5IDY1LjQ0NzcgNTguNTUyMyA2NSA1OCA2NUg1MlpcIlxyXG5cdFx0ICAgICAgZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTM5IDM5QzM5IDM2Ljc5MDkgNDAuNzkwOSAzNSA0MyAzNUg2N0M2OS4yMDkxIDM1IDcxIDM2Ljc5MDkgNzEgMzlWNzFDNzEgNzMuMjA5MSA2OS4yMDkxIDc1IDY3IDc1SDQzQzQwLjc5MDkgNzUgMzkgNzMuMjA5MSAzOSA3MVYzOVpNNDMgMzdINjdDNjguMTA0NiAzNyA2OSAzNy44OTU0IDY5IDM5VjcxQzY5IDcyLjEwNDYgNjguMTA0NiA3MyA2NyA3M0g0M0M0MS44OTU0IDczIDQxIDcyLjEwNDYgNDEgNzFWMzlDNDEgMzcuODk1NCA0MS44OTU0IDM3IDQzIDM3WlwiXHJcblx0XHQgICAgICBmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMjUuMjA3IDk5LjI4NzFIMjYuMzMyQzI2LjI3MzQgOTkuODI2MiAyNi4xMTkxIDEwMC4zMDkgMjUuODY5MSAxMDAuNzM0QzI1LjYxOTEgMTAxLjE2IDI1LjI2NTYgMTAxLjQ5OCAyNC44MDg2IDEwMS43NDhDMjQuMzUxNiAxMDEuOTk0IDIzLjc4MTIgMTAyLjExNyAyMy4wOTc3IDEwMi4xMTdDMjIuNTk3NyAxMDIuMTE3IDIyLjE0MjYgMTAyLjAyMyAyMS43MzI0IDEwMS44MzZDMjEuMzI2MiAxMDEuNjQ4IDIwLjk3NjYgMTAxLjM4MyAyMC42ODM2IDEwMS4wMzlDMjAuMzkwNiAxMDAuNjkxIDIwLjE2NDEgMTAwLjI3NSAyMC4wMDM5IDk5Ljc5MUMxOS44NDc3IDk5LjMwMjcgMTkuNzY5NSA5OC43NTk4IDE5Ljc2OTUgOTguMTYyMVY5Ny4zMTI1QzE5Ljc2OTUgOTYuNzE0OCAxOS44NDc3IDk2LjE3MzggMjAuMDAzOSA5NS42ODk1QzIwLjE2NDEgOTUuMjAxMiAyMC4zOTI2IDk0Ljc4MzIgMjAuNjg5NSA5NC40MzU1QzIwLjk5MDIgOTQuMDg3OSAyMS4zNTE2IDkzLjgyMDMgMjEuNzczNCA5My42MzI4QzIyLjE5NTMgOTMuNDQ1MyAyMi42Njk5IDkzLjM1MTYgMjMuMTk3MyA5My4zNTE2QzIzLjg0MTggOTMuMzUxNiAyNC4zODY3IDkzLjQ3MjcgMjQuODMyIDkzLjcxNDhDMjUuMjc3MyA5My45NTcgMjUuNjIzIDk0LjI5MyAyNS44NjkxIDk0LjcyMjdDMjYuMTE5MSA5NS4xNDg0IDI2LjI3MzQgOTUuNjQyNiAyNi4zMzIgOTYuMjA1MUgyNS4yMDdDMjUuMTUyMyA5NS44MDY2IDI1LjA1MDggOTUuNDY0OCAyNC45MDIzIDk1LjE3OTdDMjQuNzUzOSA5NC44OTA2IDI0LjU0MyA5NC42NjggMjQuMjY5NSA5NC41MTE3QzIzLjk5NjEgOTQuMzU1NSAyMy42Mzg3IDk0LjI3NzMgMjMuMTk3MyA5NC4yNzczQzIyLjgxODQgOTQuMjc3MyAyMi40ODQ0IDk0LjM0OTYgMjIuMTk1MyA5NC40OTQxQzIxLjkxMDIgOTQuNjM4NyAyMS42Njk5IDk0Ljg0MzggMjEuNDc0NiA5NS4xMDk0QzIxLjI4MzIgOTUuMzc1IDIxLjEzODcgOTUuNjkzNCAyMS4wNDEgOTYuMDY0NUMyMC45NDM0IDk2LjQzNTUgMjAuODk0NSA5Ni44NDc3IDIwLjg5NDUgOTcuMzAwOFY5OC4xNjIxQzIwLjg5NDUgOTguNTgwMSAyMC45Mzc1IDk4Ljk3MjcgMjEuMDIzNCA5OS4zMzk4QzIxLjExMzMgOTkuNzA3IDIxLjI0OCAxMDAuMDI5IDIxLjQyNzcgMTAwLjMwN0MyMS42MDc0IDEwMC41ODQgMjEuODM1OSAxMDAuODAzIDIyLjExMzMgMTAwLjk2M0MyMi4zOTA2IDEwMS4xMTkgMjIuNzE4OCAxMDEuMTk3IDIzLjA5NzcgMTAxLjE5N0MyMy41NzgxIDEwMS4xOTcgMjMuOTYwOSAxMDEuMTIxIDI0LjI0NjEgMTAwLjk2OUMyNC41MzEyIDEwMC44MTYgMjQuNzQ2MSAxMDAuNTk4IDI0Ljg5MDYgMTAwLjMxMkMyNS4wMzkxIDEwMC4wMjcgMjUuMTQ0NSA5OS42ODU1IDI1LjIwNyA5OS4yODcxWk0yNy40MjE5IDk4LjkwMDRWOTguNzY1NkMyNy40MjE5IDk4LjMwODYgMjcuNDg4MyA5Ny44ODQ4IDI3LjYyMTEgOTcuNDk0MUMyNy43NTM5IDk3LjA5OTYgMjcuOTQ1MyA5Ni43NTc4IDI4LjE5NTMgOTYuNDY4OEMyOC40NDUzIDk2LjE3NTggMjguNzQ4IDk1Ljk0OTIgMjkuMTAzNSA5NS43ODkxQzI5LjQ1OSA5NS42MjUgMjkuODU3NCA5NS41NDMgMzAuMjk4OCA5NS41NDNDMzAuNzQ0MSA5NS41NDMgMzEuMTQ0NSA5NS42MjUgMzEuNSA5NS43ODkxQzMxLjg1OTQgOTUuOTQ5MiAzMi4xNjQxIDk2LjE3NTggMzIuNDE0MSA5Ni40Njg4QzMyLjY2OCA5Ni43NTc4IDMyLjg2MTMgOTcuMDk5NiAzMi45OTQxIDk3LjQ5NDFDMzMuMTI3IDk3Ljg4NDggMzMuMTkzNCA5OC4zMDg2IDMzLjE5MzQgOTguNzY1NlY5OC45MDA0QzMzLjE5MzQgOTkuMzU3NCAzMy4xMjcgOTkuNzgxMiAzMi45OTQxIDEwMC4xNzJDMzIuODYxMyAxMDAuNTYyIDMyLjY2OCAxMDAuOTA0IDMyLjQxNDEgMTAxLjE5N0MzMi4xNjQxIDEwMS40ODYgMzEuODYxMyAxMDEuNzEzIDMxLjUwNTkgMTAxLjg3N0MzMS4xNTQzIDEwMi4wMzcgMzAuNzU1OSAxMDIuMTE3IDMwLjMxMDUgMTAyLjExN0MyOS44NjUyIDEwMi4xMTcgMjkuNDY0OCAxMDIuMDM3IDI5LjEwOTQgMTAxLjg3N0MyOC43NTM5IDEwMS43MTMgMjguNDQ5MiAxMDEuNDg2IDI4LjE5NTMgMTAxLjE5N0MyNy45NDUzIDEwMC45MDQgMjcuNzUzOSAxMDAuNTYyIDI3LjYyMTEgMTAwLjE3MkMyNy40ODgzIDk5Ljc4MTIgMjcuNDIxOSA5OS4zNTc0IDI3LjQyMTkgOTguOTAwNFpNMjguNTA1OSA5OC43NjU2Vjk4LjkwMDRDMjguNTA1OSA5OS4yMTY4IDI4LjU0MyA5OS41MTU2IDI4LjYxNzIgOTkuNzk2OUMyOC42OTE0IDEwMC4wNzQgMjguODAyNyAxMDAuMzIgMjguOTUxMiAxMDAuNTM1QzI5LjEwMzUgMTAwLjc1IDI5LjI5MyAxMDAuOTIgMjkuNTE5NSAxMDEuMDQ1QzI5Ljc0NjEgMTAxLjE2NiAzMC4wMDk4IDEwMS4yMjcgMzAuMzEwNSAxMDEuMjI3QzMwLjYwNzQgMTAxLjIyNyAzMC44NjcyIDEwMS4xNjYgMzEuMDg5OCAxMDEuMDQ1QzMxLjMxNjQgMTAwLjkyIDMxLjUwMzkgMTAwLjc1IDMxLjY1MjMgMTAwLjUzNUMzMS44MDA4IDEwMC4zMiAzMS45MTIxIDEwMC4wNzQgMzEuOTg2MyA5OS43OTY5QzMyLjA2NDUgOTkuNTE1NiAzMi4xMDM1IDk5LjIxNjggMzIuMTAzNSA5OC45MDA0Vjk4Ljc2NTZDMzIuMTAzNSA5OC40NTMxIDMyLjA2NDUgOTguMTU4MiAzMS45ODYzIDk3Ljg4MDlDMzEuOTEyMSA5Ny41OTk2IDMxLjc5ODggOTcuMzUxNiAzMS42NDY1IDk3LjEzNjdDMzEuNDk4IDk2LjkxOCAzMS4zMTA1IDk2Ljc0NjEgMzEuMDg0IDk2LjYyMTFDMzAuODYxMyA5Ni40OTYxIDMwLjU5OTYgOTYuNDMzNiAzMC4yOTg4IDk2LjQzMzZDMzAuMDAyIDk2LjQzMzYgMjkuNzQwMiA5Ni40OTYxIDI5LjUxMzcgOTYuNjIxMUMyOS4yOTEgOTYuNzQ2MSAyOS4xMDM1IDk2LjkxOCAyOC45NTEyIDk3LjEzNjdDMjguODAyNyA5Ny4zNTE2IDI4LjY5MTQgOTcuNTk5NiAyOC42MTcyIDk3Ljg4MDlDMjguNTQzIDk4LjE1ODIgMjguNTA1OSA5OC40NTMxIDI4LjUwNTkgOTguNzY1NlpNMzUuNjM2NyA5Ny4wMTM3VjEwMkgzNC41NTI3Vjk1LjY2MDJIMzUuNTc4MUwzNS42MzY3IDk3LjAxMzdaTTM1LjM3ODkgOTguNTg5OEwzNC45Mjc3IDk4LjU3MjNDMzQuOTMxNiA5OC4xMzg3IDM0Ljk5NjEgOTcuNzM4MyAzNS4xMjExIDk3LjM3MTFDMzUuMjQ2MSA5NyAzNS40MjE5IDk2LjY3NzcgMzUuNjQ4NCA5Ni40MDQzQzM1Ljg3NSA5Ni4xMzA5IDM2LjE0NDUgOTUuOTE5OSAzNi40NTcgOTUuNzcxNUMzNi43NzM0IDk1LjYxOTEgMzcuMTIzIDk1LjU0MyAzNy41MDU5IDk1LjU0M0MzNy44MTg0IDk1LjU0MyAzOC4wOTk2IDk1LjU4NTkgMzguMzQ5NiA5NS42NzE5QzM4LjU5OTYgOTUuNzUzOSAzOC44MTI1IDk1Ljg4NjcgMzguOTg4MyA5Ni4wNzAzQzM5LjE2OCA5Ni4yNTM5IDM5LjMwNDcgOTYuNDkyMiAzOS4zOTg0IDk2Ljc4NTJDMzkuNDkyMiA5Ny4wNzQyIDM5LjUzOTEgOTcuNDI3NyAzOS41MzkxIDk3Ljg0NTdWMTAySDM4LjQ0OTJWOTcuODM0QzM4LjQ0OTIgOTcuNTAyIDM4LjQwMDQgOTcuMjM2MyAzOC4zMDI3IDk3LjAzNzFDMzguMjA1MSA5Ni44MzQgMzguMDYyNSA5Ni42ODc1IDM3Ljg3NSA5Ni41OTc3QzM3LjY4NzUgOTYuNTAzOSAzNy40NTcgOTYuNDU3IDM3LjE4MzYgOTYuNDU3QzM2LjkxNDEgOTYuNDU3IDM2LjY2OCA5Ni41MTM3IDM2LjQ0NTMgOTYuNjI3QzM2LjIyNjYgOTYuNzQwMiAzNi4wMzcxIDk2Ljg5NjUgMzUuODc3IDk3LjA5NTdDMzUuNzIwNyA5Ny4yOTQ5IDM1LjU5NzcgOTcuNTIzNCAzNS41MDc4IDk3Ljc4MTJDMzUuNDIxOSA5OC4wMzUyIDM1LjM3ODkgOTguMzA0NyAzNS4zNzg5IDk4LjU4OThaTTQzLjgzOTggOTUuNjYwMlY5Ni40OTIySDQwLjQxMjFWOTUuNjYwMkg0My44Mzk4Wk00MS41NzIzIDk0LjExOTFINDIuNjU2MlYxMDAuNDNDNDIuNjU2MiAxMDAuNjQ1IDQyLjY4OTUgMTAwLjgwNyA0Mi43NTU5IDEwMC45MTZDNDIuODIyMyAxMDEuMDI1IDQyLjkwODIgMTAxLjA5OCA0My4wMTM3IDEwMS4xMzNDNDMuMTE5MSAxMDEuMTY4IDQzLjIzMjQgMTAxLjE4NiA0My4zNTM1IDEwMS4xODZDNDMuNDQzNCAxMDEuMTg2IDQzLjUzNzEgMTAxLjE3OCA0My42MzQ4IDEwMS4xNjJDNDMuNzM2MyAxMDEuMTQzIDQzLjgxMjUgMTAxLjEyNyA0My44NjMzIDEwMS4xMTVMNDMuODY5MSAxMDJDNDMuNzgzMiAxMDIuMDI3IDQzLjY2OTkgMTAyLjA1MyA0My41MjkzIDEwMi4wNzZDNDMuMzkyNiAxMDIuMTA0IDQzLjIyNjYgMTAyLjExNyA0My4wMzEyIDEwMi4xMTdDNDIuNzY1NiAxMDIuMTE3IDQyLjUyMTUgMTAyLjA2NCA0Mi4yOTg4IDEwMS45NTlDNDIuMDc2MiAxMDEuODU0IDQxLjg5ODQgMTAxLjY3OCA0MS43NjU2IDEwMS40MzJDNDEuNjM2NyAxMDEuMTgyIDQxLjU3MjMgMTAwLjg0NiA0MS41NzIzIDEwMC40MjRWOTQuMTE5MVpNNDguODQ5NiAxMDAuOTE2Vjk3LjY1MjNDNDguODQ5NiA5Ny40MDIzIDQ4Ljc5ODggOTcuMTg1NSA0OC42OTczIDk3LjAwMkM0OC41OTk2IDk2LjgxNDUgNDguNDUxMiA5Ni42Njk5IDQ4LjI1MiA5Ni41Njg0QzQ4LjA1MjcgOTYuNDY2OCA0Ny44MDY2IDk2LjQxNiA0Ny41MTM3IDk2LjQxNkM0Ny4yNDAyIDk2LjQxNiA0NyA5Ni40NjI5IDQ2Ljc5MyA5Ni41NTY2QzQ2LjU4OTggOTYuNjUwNCA0Ni40Mjk3IDk2Ljc3MzQgNDYuMzEyNSA5Ni45MjU4QzQ2LjE5OTIgOTcuMDc4MSA0Ni4xNDI2IDk3LjI0MjIgNDYuMTQyNiA5Ny40MThINDUuMDU4NkM0NS4wNTg2IDk3LjE5MTQgNDUuMTE3MiA5Ni45NjY4IDQ1LjIzNDQgOTYuNzQ0MUM0NS4zNTE2IDk2LjUyMTUgNDUuNTE5NSA5Ni4zMjAzIDQ1LjczODMgOTYuMTQwNkM0NS45NjA5IDk1Ljk1NyA0Ni4yMjY2IDk1LjgxMjUgNDYuNTM1MiA5NS43MDdDNDYuODQ3NyA5NS41OTc3IDQ3LjE5NTMgOTUuNTQzIDQ3LjU3ODEgOTUuNTQzQzQ4LjAzOTEgOTUuNTQzIDQ4LjQ0NTMgOTUuNjIxMSA0OC43OTY5IDk1Ljc3NzNDNDkuMTUyMyA5NS45MzM2IDQ5LjQyOTcgOTYuMTY5OSA0OS42Mjg5IDk2LjQ4NjNDNDkuODMyIDk2Ljc5ODggNDkuOTMzNiA5Ny4xOTE0IDQ5LjkzMzYgOTcuNjY0MVYxMDAuNjE3QzQ5LjkzMzYgMTAwLjgyOCA0OS45NTEyIDEwMS4wNTMgNDkuOTg2MyAxMDEuMjkxQzUwLjAyNTQgMTAxLjUyOSA1MC4wODIgMTAxLjczNCA1MC4xNTYyIDEwMS45MDZWMTAySDQ5LjAyNTRDNDguOTcwNyAxMDEuODc1IDQ4LjkyNzcgMTAxLjcwOSA0OC44OTY1IDEwMS41MDJDNDguODY1MiAxMDEuMjkxIDQ4Ljg0OTYgMTAxLjA5NiA0OC44NDk2IDEwMC45MTZaTTQ5LjAzNzEgOTguMTU2Mkw0OS4wNDg4IDk4LjkxOEg0Ny45NTMxQzQ3LjY0NDUgOTguOTE4IDQ3LjM2OTEgOTguOTQzNCA0Ny4xMjcgOTguOTk0MUM0Ni44ODQ4IDk5LjA0MSA0Ni42ODE2IDk5LjExMzMgNDYuNTE3NiA5OS4yMTA5QzQ2LjM1MzUgOTkuMzA4NiA0Ni4yMjg1IDk5LjQzMTYgNDYuMTQyNiA5OS41ODAxQzQ2LjA1NjYgOTkuNzI0NiA0Ni4wMTM3IDk5Ljg5NDUgNDYuMDEzNyAxMDAuMDlDNDYuMDEzNyAxMDAuMjg5IDQ2LjA1ODYgMTAwLjQ3MSA0Ni4xNDg0IDEwMC42MzVDNDYuMjM4MyAxMDAuNzk5IDQ2LjM3MyAxMDAuOTMgNDYuNTUyNyAxMDEuMDI3QzQ2LjczNjMgMTAxLjEyMSA0Ni45NjA5IDEwMS4xNjggNDcuMjI2NiAxMDEuMTY4QzQ3LjU1ODYgMTAxLjE2OCA0Ny44NTE2IDEwMS4wOTggNDguMTA1NSAxMDAuOTU3QzQ4LjM1OTQgMTAwLjgxNiA0OC41NjA1IDEwMC42NDUgNDguNzA5IDEwMC40NDFDNDguODYxMyAxMDAuMjM4IDQ4Ljk0MzQgMTAwLjA0MSA0OC45NTUxIDk5Ljg0OTZMNDkuNDE4IDEwMC4zNzFDNDkuMzkwNiAxMDAuNTM1IDQ5LjMxNjQgMTAwLjcxNyA0OS4xOTUzIDEwMC45MTZDNDkuMDc0MiAxMDEuMTE1IDQ4LjkxMjEgMTAxLjMwNyA0OC43MDkgMTAxLjQ5QzQ4LjUwOTggMTAxLjY3IDQ4LjI3MTUgMTAxLjgyIDQ3Ljk5NDEgMTAxLjk0MUM0Ny43MjA3IDEwMi4wNTkgNDcuNDEyMSAxMDIuMTE3IDQ3LjA2ODQgMTAyLjExN0M0Ni42Mzg3IDEwMi4xMTcgNDYuMjYxNyAxMDIuMDMzIDQ1LjkzNzUgMTAxLjg2NUM0NS42MTcyIDEwMS42OTcgNDUuMzY3MiAxMDEuNDczIDQ1LjE4NzUgMTAxLjE5MUM0NS4wMTE3IDEwMC45MDYgNDQuOTIzOCAxMDAuNTg4IDQ0LjkyMzggMTAwLjIzNkM0NC45MjM4IDk5Ljg5NjUgNDQuOTkwMiA5OS41OTc3IDQ1LjEyMyA5OS4zMzk4QzQ1LjI1NTkgOTkuMDc4MSA0NS40NDczIDk4Ljg2MTMgNDUuNjk3MyA5OC42ODk1QzQ1Ljk0NzMgOTguNTEzNyA0Ni4yNDggOTguMzgwOSA0Ni41OTk2IDk4LjI5MUM0Ni45NTEyIDk4LjIwMTIgNDcuMzQzOCA5OC4xNTYyIDQ3Ljc3NzMgOTguMTU2Mkg0OS4wMzcxWk01NC4xNzU4IDEwMS4yMjdDNTQuNDMzNiAxMDEuMjI3IDU0LjY3MTkgMTAxLjE3NCA1NC44OTA2IDEwMS4wNjhDNTUuMTA5NCAxMDAuOTYzIDU1LjI4OTEgMTAwLjgxOCA1NS40Mjk3IDEwMC42MzVDNTUuNTcwMyAxMDAuNDQ3IDU1LjY1MDQgMTAwLjIzNCA1NS42Njk5IDk5Ljk5NjFINTYuNzAxMkM1Ni42ODE2IDEwMC4zNzEgNTYuNTU0NyAxMDAuNzIxIDU2LjMyMDMgMTAxLjA0NUM1Ni4wODk4IDEwMS4zNjUgNTUuNzg3MSAxMDEuNjI1IDU1LjQxMjEgMTAxLjgyNEM1NS4wMzcxIDEwMi4wMiA1NC42MjUgMTAyLjExNyA1NC4xNzU4IDEwMi4xMTdDNTMuNjk5MiAxMDIuMTE3IDUzLjI4MzIgMTAyLjAzMyA1Mi45Mjc3IDEwMS44NjVDNTIuNTc2MiAxMDEuNjk3IDUyLjI4MzIgMTAxLjQ2NyA1Mi4wNDg4IDEwMS4xNzRDNTEuODE4NCAxMDAuODgxIDUxLjY0NDUgMTAwLjU0NSA1MS41MjczIDEwMC4xNjZDNTEuNDE0MSA5OS43ODMyIDUxLjM1NzQgOTkuMzc4OSA1MS4zNTc0IDk4Ljk1MzFWOTguNzA3QzUxLjM1NzQgOTguMjgxMiA1MS40MTQxIDk3Ljg3ODkgNTEuNTI3MyA5Ny41QzUxLjY0NDUgOTcuMTE3MiA1MS44MTg0IDk2Ljc3OTMgNTIuMDQ4OCA5Ni40ODYzQzUyLjI4MzIgOTYuMTkzNCA1Mi41NzYyIDk1Ljk2MjkgNTIuOTI3NyA5NS43OTQ5QzUzLjI4MzIgOTUuNjI3IDUzLjY5OTIgOTUuNTQzIDU0LjE3NTggOTUuNTQzQzU0LjY3MTkgOTUuNTQzIDU1LjEwNTUgOTUuNjQ0NSA1NS40NzY2IDk1Ljg0NzdDNTUuODQ3NyA5Ni4wNDY5IDU2LjEzODcgOTYuMzIwMyA1Ni4zNDk2IDk2LjY2OEM1Ni41NjQ1IDk3LjAxMTcgNTYuNjgxNiA5Ny40MDIzIDU2LjcwMTIgOTcuODM5OEg1NS42Njk5QzU1LjY1MDQgOTcuNTc4MSA1NS41NzYyIDk3LjM0MTggNTUuNDQ3MyA5Ny4xMzA5QzU1LjMyMjMgOTYuOTE5OSA1NS4xNTA0IDk2Ljc1MiA1NC45MzE2IDk2LjYyN0M1NC43MTY4IDk2LjQ5OCA1NC40NjQ4IDk2LjQzMzYgNTQuMTc1OCA5Ni40MzM2QzUzLjg0MzggOTYuNDMzNiA1My41NjQ1IDk2LjUgNTMuMzM3OSA5Ni42MzI4QzUzLjExNTIgOTYuNzYxNyA1Mi45Mzc1IDk2LjkzNzUgNTIuODA0NyA5Ny4xNjAyQzUyLjY3NTggOTcuMzc4OSA1Mi41ODIgOTcuNjIzIDUyLjUyMzQgOTcuODkyNkM1Mi40Njg4IDk4LjE1ODIgNTIuNDQxNCA5OC40Mjk3IDUyLjQ0MTQgOTguNzA3Vjk4Ljk1MzFDNTIuNDQxNCA5OS4yMzA1IDUyLjQ2ODggOTkuNTAzOSA1Mi41MjM0IDk5Ljc3MzRDNTIuNTc4MSAxMDAuMDQzIDUyLjY2OTkgMTAwLjI4NyA1Mi43OTg4IDEwMC41MDZDNTIuOTMxNiAxMDAuNzI1IDUzLjEwOTQgMTAwLjkgNTMuMzMyIDEwMS4wMzNDNTMuNTU4NiAxMDEuMTYyIDUzLjgzOTggMTAxLjIyNyA1NC4xNzU4IDEwMS4yMjdaTTYwLjU3NDIgOTUuNjYwMlY5Ni40OTIySDU3LjE0NjVWOTUuNjYwMkg2MC41NzQyWk01OC4zMDY2IDk0LjExOTFINTkuMzkwNlYxMDAuNDNDNTkuMzkwNiAxMDAuNjQ1IDU5LjQyMzggMTAwLjgwNyA1OS40OTAyIDEwMC45MTZDNTkuNTU2NiAxMDEuMDI1IDU5LjY0MjYgMTAxLjA5OCA1OS43NDggMTAxLjEzM0M1OS44NTM1IDEwMS4xNjggNTkuOTY2OCAxMDEuMTg2IDYwLjA4NzkgMTAxLjE4NkM2MC4xNzc3IDEwMS4xODYgNjAuMjcxNSAxMDEuMTc4IDYwLjM2OTEgMTAxLjE2MkM2MC40NzA3IDEwMS4xNDMgNjAuNTQ2OSAxMDEuMTI3IDYwLjU5NzcgMTAxLjExNUw2MC42MDM1IDEwMkM2MC41MTc2IDEwMi4wMjcgNjAuNDA0MyAxMDIuMDUzIDYwLjI2MzcgMTAyLjA3NkM2MC4xMjcgMTAyLjEwNCA1OS45NjA5IDEwMi4xMTcgNTkuNzY1NiAxMDIuMTE3QzU5LjUgMTAyLjExNyA1OS4yNTU5IDEwMi4wNjQgNTkuMDMzMiAxMDEuOTU5QzU4LjgxMDUgMTAxLjg1NCA1OC42MzI4IDEwMS42NzggNTguNSAxMDEuNDMyQzU4LjM3MTEgMTAxLjE4MiA1OC4zMDY2IDEwMC44NDYgNTguMzA2NiAxMDAuNDI0Vjk0LjExOTFaTTY2LjExNzIgOTMuNDY4OFYxMDJINjQuOTg2M1Y5My40Njg4SDY2LjExNzJaTTY5LjY5MTQgOTcuMzA2NlY5OC4yMzI0SDY1Ljg3MTFWOTcuMzA2Nkg2OS42OTE0Wk03MC4yNzE1IDkzLjQ2ODhWOTQuMzk0NUg2NS44NzExVjkzLjQ2ODhINzAuMjcxNVpNNzEuMDM5MSA5OC45MDA0Vjk4Ljc2NTZDNzEuMDM5MSA5OC4zMDg2IDcxLjEwNTUgOTcuODg0OCA3MS4yMzgzIDk3LjQ5NDFDNzEuMzcxMSA5Ny4wOTk2IDcxLjU2MjUgOTYuNzU3OCA3MS44MTI1IDk2LjQ2ODhDNzIuMDYyNSA5Ni4xNzU4IDcyLjM2NTIgOTUuOTQ5MiA3Mi43MjA3IDk1Ljc4OTFDNzMuMDc2MiA5NS42MjUgNzMuNDc0NiA5NS41NDMgNzMuOTE2IDk1LjU0M0M3NC4zNjEzIDk1LjU0MyA3NC43NjE3IDk1LjYyNSA3NS4xMTcyIDk1Ljc4OTFDNzUuNDc2NiA5NS45NDkyIDc1Ljc4MTIgOTYuMTc1OCA3Ni4wMzEyIDk2LjQ2ODhDNzYuMjg1MiA5Ni43NTc4IDc2LjQ3ODUgOTcuMDk5NiA3Ni42MTEzIDk3LjQ5NDFDNzYuNzQ0MSA5Ny44ODQ4IDc2LjgxMDUgOTguMzA4NiA3Ni44MTA1IDk4Ljc2NTZWOTguOTAwNEM3Ni44MTA1IDk5LjM1NzQgNzYuNzQ0MSA5OS43ODEyIDc2LjYxMTMgMTAwLjE3MkM3Ni40Nzg1IDEwMC41NjIgNzYuMjg1MiAxMDAuOTA0IDc2LjAzMTIgMTAxLjE5N0M3NS43ODEyIDEwMS40ODYgNzUuNDc4NSAxMDEuNzEzIDc1LjEyMyAxMDEuODc3Qzc0Ljc3MTUgMTAyLjAzNyA3NC4zNzMgMTAyLjExNyA3My45Mjc3IDEwMi4xMTdDNzMuNDgyNCAxMDIuMTE3IDczLjA4MiAxMDIuMDM3IDcyLjcyNjYgMTAxLjg3N0M3Mi4zNzExIDEwMS43MTMgNzIuMDY2NCAxMDEuNDg2IDcxLjgxMjUgMTAxLjE5N0M3MS41NjI1IDEwMC45MDQgNzEuMzcxMSAxMDAuNTYyIDcxLjIzODMgMTAwLjE3MkM3MS4xMDU1IDk5Ljc4MTIgNzEuMDM5MSA5OS4zNTc0IDcxLjAzOTEgOTguOTAwNFpNNzIuMTIzIDk4Ljc2NTZWOTguOTAwNEM3Mi4xMjMgOTkuMjE2OCA3Mi4xNjAyIDk5LjUxNTYgNzIuMjM0NCA5OS43OTY5QzcyLjMwODYgMTAwLjA3NCA3Mi40MTk5IDEwMC4zMiA3Mi41Njg0IDEwMC41MzVDNzIuNzIwNyAxMDAuNzUgNzIuOTEwMiAxMDAuOTIgNzMuMTM2NyAxMDEuMDQ1QzczLjM2MzMgMTAxLjE2NiA3My42MjcgMTAxLjIyNyA3My45Mjc3IDEwMS4yMjdDNzQuMjI0NiAxMDEuMjI3IDc0LjQ4NDQgMTAxLjE2NiA3NC43MDcgMTAxLjA0NUM3NC45MzM2IDEwMC45MiA3NS4xMjExIDEwMC43NSA3NS4yNjk1IDEwMC41MzVDNzUuNDE4IDEwMC4zMiA3NS41MjkzIDEwMC4wNzQgNzUuNjAzNSA5OS43OTY5Qzc1LjY4MTYgOTkuNTE1NiA3NS43MjA3IDk5LjIxNjggNzUuNzIwNyA5OC45MDA0Vjk4Ljc2NTZDNzUuNzIwNyA5OC40NTMxIDc1LjY4MTYgOTguMTU4MiA3NS42MDM1IDk3Ljg4MDlDNzUuNTI5MyA5Ny41OTk2IDc1LjQxNiA5Ny4zNTE2IDc1LjI2MzcgOTcuMTM2N0M3NS4xMTUyIDk2LjkxOCA3NC45Mjc3IDk2Ljc0NjEgNzQuNzAxMiA5Ni42MjExQzc0LjQ3ODUgOTYuNDk2MSA3NC4yMTY4IDk2LjQzMzYgNzMuOTE2IDk2LjQzMzZDNzMuNjE5MSA5Ni40MzM2IDczLjM1NzQgOTYuNDk2MSA3My4xMzA5IDk2LjYyMTFDNzIuOTA4MiA5Ni43NDYxIDcyLjcyMDcgOTYuOTE4IDcyLjU2ODQgOTcuMTM2N0M3Mi40MTk5IDk3LjM1MTYgNzIuMzA4NiA5Ny41OTk2IDcyLjIzNDQgOTcuODgwOUM3Mi4xNjAyIDk4LjE1ODIgNzIuMTIzIDk4LjQ1MzEgNzIuMTIzIDk4Ljc2NTZaTTc5LjI1MzkgOTYuNjU2MlYxMDJINzguMTY5OVY5NS42NjAySDc5LjIyNDZMNzkuMjUzOSA5Ni42NTYyWk04MS4yMzQ0IDk1LjYyNUw4MS4yMjg1IDk2LjYzMjhDODEuMTM4NyA5Ni42MTMzIDgxLjA1MjcgOTYuNjAxNiA4MC45NzA3IDk2LjU5NzdDODAuODkyNiA5Ni41ODk4IDgwLjgwMjcgOTYuNTg1OSA4MC43MDEyIDk2LjU4NTlDODAuNDUxMiA5Ni41ODU5IDgwLjIzMDUgOTYuNjI1IDgwLjAzOTEgOTYuNzAzMUM3OS44NDc3IDk2Ljc4MTIgNzkuNjg1NSA5Ni44OTA2IDc5LjU1MjcgOTcuMDMxMkM3OS40MTk5IDk3LjE3MTkgNzkuMzE0NSA5Ny4zMzk4IDc5LjIzNjMgOTcuNTM1MkM3OS4xNjIxIDk3LjcyNjYgNzkuMTEzMyA5Ny45Mzc1IDc5LjA4OTggOTguMTY4TDc4Ljc4NTIgOTguMzQzOEM3OC43ODUyIDk3Ljk2MDkgNzguODIyMyA5Ny42MDE2IDc4Ljg5NjUgOTcuMjY1NkM3OC45NzQ2IDk2LjkyOTcgNzkuMDkzOCA5Ni42MzI4IDc5LjI1MzkgOTYuMzc1Qzc5LjQxNDEgOTYuMTEzMyA3OS42MTcyIDk1LjkxMDIgNzkuODYzMyA5NS43NjU2QzgwLjExMzMgOTUuNjE3MiA4MC40MTAyIDk1LjU0MyA4MC43NTM5IDk1LjU0M0M4MC44MzIgOTUuNTQzIDgwLjkyMTkgOTUuNTUyNyA4MS4wMjM0IDk1LjU3MjNDODEuMTI1IDk1LjU4NzkgODEuMTk1MyA5NS42MDU1IDgxLjIzNDQgOTUuNjI1Wk04My4zMTQ1IDk2LjkxOTlWMTAySDgyLjIyNDZWOTUuNjYwMkg4My4yNTU5TDgzLjMxNDUgOTYuOTE5OVpNODMuMDkxOCA5OC41ODk4TDgyLjU4NzkgOTguNTcyM0M4Mi41OTE4IDk4LjEzODcgODIuNjQ4NCA5Ny43MzgzIDgyLjc1NzggOTcuMzcxMUM4Mi44NjcyIDk3IDgzLjAyOTMgOTYuNjc3NyA4My4yNDQxIDk2LjQwNDNDODMuNDU5IDk2LjEzMDkgODMuNzI2NiA5NS45MTk5IDg0LjA0NjkgOTUuNzcxNUM4NC4zNjcyIDk1LjYxOTEgODQuNzM4MyA5NS41NDMgODUuMTYwMiA5NS41NDNDODUuNDU3IDk1LjU0MyA4NS43MzA1IDk1LjU4NTkgODUuOTgwNSA5NS42NzE5Qzg2LjIzMDUgOTUuNzUzOSA4Ni40NDczIDk1Ljg4NDggODYuNjMwOSA5Ni4wNjQ1Qzg2LjgxNDUgOTYuMjQ0MSA4Ni45NTcgOTYuNDc0NiA4Ny4wNTg2IDk2Ljc1NTlDODcuMTYwMiA5Ny4wMzcxIDg3LjIxMDkgOTcuMzc3IDg3LjIxMDkgOTcuNzc1NFYxMDJIODYuMTI3Vjk3LjgyODFDODYuMTI3IDk3LjQ5NjEgODYuMDcwMyA5Ny4yMzA1IDg1Ljk1NyA5Ny4wMzEyQzg1Ljg0NzcgOTYuODMyIDg1LjY5MTQgOTYuNjg3NSA4NS40ODgzIDk2LjU5NzdDODUuMjg1MiA5Ni41MDM5IDg1LjA0NjkgOTYuNDU3IDg0Ljc3MzQgOTYuNDU3Qzg0LjQ1MzEgOTYuNDU3IDg0LjE4NTUgOTYuNTEzNyA4My45NzA3IDk2LjYyN0M4My43NTU5IDk2Ljc0MDIgODMuNTg0IDk2Ljg5NjUgODMuNDU1MSA5Ny4wOTU3QzgzLjMyNjIgOTcuMjk0OSA4My4yMzI0IDk3LjUyMzQgODMuMTczOCA5Ny43ODEyQzgzLjExOTEgOTguMDM1MiA4My4wOTE4IDk4LjMwNDcgODMuMDkxOCA5OC41ODk4Wk04Ny4xOTkyIDk3Ljk5MjJMODYuNDcyNyA5OC4yMTQ4Qzg2LjQ3NjYgOTcuODY3MiA4Ni41MzMyIDk3LjUzMzIgODYuNjQyNiA5Ny4yMTI5Qzg2Ljc1NTkgOTYuODkyNiA4Ni45MTggOTYuNjA3NCA4Ny4xMjg5IDk2LjM1NzRDODcuMzQzOCA5Ni4xMDc0IDg3LjYwNzQgOTUuOTEwMiA4Ny45MTk5IDk1Ljc2NTZDODguMjMyNCA5NS42MTcyIDg4LjU4OTggOTUuNTQzIDg4Ljk5MjIgOTUuNTQzQzg5LjMzMiA5NS41NDMgODkuNjMyOCA5NS41ODc5IDg5Ljg5NDUgOTUuNjc3N0M5MC4xNjAyIDk1Ljc2NzYgOTAuMzgyOCA5NS45MDYyIDkwLjU2MjUgOTYuMDkzOEM5MC43NDYxIDk2LjI3NzMgOTAuODg0OCA5Ni41MTM3IDkwLjk3ODUgOTYuODAyN0M5MS4wNzIzIDk3LjA5MTggOTEuMTE5MSA5Ny40MzU1IDkxLjExOTEgOTcuODM0VjEwMkg5MC4wMjkzVjk3LjgyMjNDOTAuMDI5MyA5Ny40NjY4IDg5Ljk3MjcgOTcuMTkxNCA4OS44NTk0IDk2Ljk5NjFDODkuNzUgOTYuNzk2OSA4OS41OTM4IDk2LjY1ODIgODkuMzkwNiA5Ni41ODAxQzg5LjE5MTQgOTYuNDk4IDg4Ljk1MzEgOTYuNDU3IDg4LjY3NTggOTYuNDU3Qzg4LjQzNzUgOTYuNDU3IDg4LjIyNjYgOTYuNDk4IDg4LjA0MyA5Ni41ODAxQzg3Ljg1OTQgOTYuNjYyMSA4Ny43MDUxIDk2Ljc3NTQgODcuNTgwMSA5Ni45MTk5Qzg3LjQ1NTEgOTcuMDYwNSA4Ny4zNTk0IDk3LjIyMjcgODcuMjkzIDk3LjQwNjJDODcuMjMwNSA5Ny41ODk4IDg3LjE5OTIgOTcuNzg1MiA4Ny4xOTkyIDk3Ljk5MjJaXCJcclxuXHRcdFx0ZmlsbD1cIiMwRjE3MkFcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMTlcIiB5PVwiMTEwXCIgd2lkdGg9XCI3MFwiIGhlaWdodD1cIjRcIiByeD1cIjJcIiBmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxyZWN0IHg9XCIyNVwiIHk9XCIxMTZcIiB3aWR0aD1cIjU4XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjEwN1wiIHk9XCIxM1wiIHdpZHRoPVwiODRcIiBoZWlnaHQ9XCIxMThcIiByeD1cIjNcIiBmaWxsPVwid2hpdGVcIlxyXG5cdFx0ICAgICAgc3Ryb2tlPVwiIzQyNzJGOVwiIHN0cm9rZVdpZHRoPVwiMlwiLz5cclxuXHRcdDxyZWN0IHg9XCIxMTlcIiB5PVwiMjVcIiB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiNjBcIiByeD1cIjRcIiBmaWxsPVwiI0YxRjVGOVwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTM2IDQ2LjA0NDRDMTM1LjQ0OCA0Ni4wNDQ0IDEzNSA0Ni40OTU0IDEzNSA0Ny4wNTE3QzEzNSA0Ny42MDgxIDEzNS40NDggNDguMDU5MSAxMzYgNDguMDU5MUgxNTZDMTU2LjU1MiA0OC4wNTkxIDE1NyA0Ny42MDgxIDE1NyA0Ny4wNTE3QzE1NyA0Ni40OTU0IDE1Ni41NTIgNDYuMDQ0NCAxNTYgNDYuMDQ0NEgxMzZaXCJcclxuXHRcdFx0ZmlsbD1cIiNDQkQ1RTFcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTEzNSA1MS4wODEzQzEzNSA1MC41MjQ5IDEzNS40NDggNTAuMDczOSAxMzYgNTAuMDczOUgxNTZDMTU2LjU1MiA1MC4wNzM5IDE1NyA1MC41MjQ5IDE1NyA1MS4wODEzQzE1NyA1MS42Mzc3IDE1Ni41NTIgNTIuMDg4NyAxNTYgNTIuMDg4N0gxMzZDMTM1LjQ0OCA1Mi4wODg3IDEzNSA1MS42Mzc3IDEzNSA1MS4wODEzWlwiXHJcblx0XHRcdGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMzYgNTQuMTAzNUMxMzUuNDQ4IDU0LjEwMzUgMTM1IDU0LjU1NDUgMTM1IDU1LjExMDlDMTM1IDU1LjY2NzIgMTM1LjQ0OCA1Ni4xMTgzIDEzNiA1Ni4xMTgzSDE1MUMxNTEuNTUyIDU2LjExODMgMTUyIDU1LjY2NzIgMTUyIDU1LjExMDlDMTUyIDU0LjU1NDUgMTUxLjU1MiA1NC4xMDM1IDE1MSA1NC4xMDM1SDEzNlpcIlxyXG5cdFx0XHRmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTEzMSA0NC4wMjk2QzEzMSA0MS44MDQxIDEzMi43OTEgNDAgMTM1IDQwSDE1N0MxNTkuMjA5IDQwIDE2MSA0MS44MDQxIDE2MSA0NC4wMjk2VjU1LjExMDlIMTYzQzE2NS4yMDkgNTUuMTEwOSAxNjcgNTYuOTE1IDE2NyA1OS4xNDA0VjY1LjE4NDhDMTY3IDY3LjQxMDMgMTY1LjIwOSA2OS4yMTQ0IDE2MyA2OS4yMTQ0SDE2Mi4yODZMMTU5Ljg2NiA3MS44MzlDMTU5LjY2OSA3Mi4wNTM3IDE1OS4zMzEgNzIuMDUzNyAxNTkuMTM0IDcxLjgzOUwxNTYuNzE0IDY5LjIxNDRIMTUxQzE0OC43OTEgNjkuMjE0NCAxNDcgNjcuNDEwMyAxNDcgNjUuMTg0OFY2Mi4xNjI2SDE0NC4yMTRMMTQwLjg2NiA2NS43OTQ3QzE0MC42NjkgNjYuMDA5MyAxNDAuMzMxIDY2LjAwOTMgMTQwLjEzNCA2NS43OTQ3TDEzNi43ODYgNjIuMTYyNkgxMzVDMTMyLjc5MSA2Mi4xNjI2IDEzMSA2MC4zNTg1IDEzMSA1OC4xMzMxVjQ0LjAyOTZaTTEzNy42NTggNjAuMTQ3OEwxNDAuNSA2My4yMzEyTDE0My4zNDIgNjAuMTQ3OEgxNTdDMTU4LjEwNSA2MC4xNDc4IDE1OSA1OS4yNDU4IDE1OSA1OC4xMzMxVjQ0LjAyOTZDMTU5IDQyLjkxNjggMTU4LjEwNSA0Mi4wMTQ4IDE1NyA0Mi4wMTQ4SDEzNUMxMzMuODk1IDQyLjAxNDggMTMzIDQyLjkxNjggMTMzIDQ0LjAyOTZWNTguMTMzMUMxMzMgNTkuMjQ1OCAxMzMuODk1IDYwLjE0NzggMTM1IDYwLjE0NzhIMTM3LjY1OFpNMTQ5IDYyLjE2MjZWNjUuMTg0OEMxNDkgNjYuMjk3NSAxNDkuODk1IDY3LjE5OTYgMTUxIDY3LjE5OTZIMTU3LjU4NkwxNTkuNSA2OS4yNzU2TDE2MS40MTQgNjcuMTk5NkgxNjNDMTY0LjEwNSA2Ny4xOTk2IDE2NSA2Ni4yOTc1IDE2NSA2NS4xODQ4VjU5LjE0MDRDMTY1IDU4LjAyNzcgMTY0LjEwNSA1Ny4xMjU3IDE2MyA1Ny4xMjU3SDE2MVY1OC4xMzMxQzE2MSA2MC4zNTg1IDE1OS4yMDkgNjIuMTYyNiAxNTcgNjIuMTYyNkgxNDlaXCJcclxuXHRcdCAgICAgIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMjUuNDM2IDkzLjQ2ODhWMTAySDEyNC4zMDVWOTMuNDY4OEgxMjUuNDM2Wk0xMjkuMDEgOTcuMzA2NlY5OC4yMzI0SDEyNS4xODlWOTcuMzA2NkgxMjkuMDFaTTEyOS41OSA5My40Njg4Vjk0LjM5NDVIMTI1LjE4OVY5My40Njg4SDEyOS41OVpNMTMzLjI3NSAxMDIuMTE3QzEzMi44MzQgMTAyLjExNyAxMzIuNDM0IDEwMi4wNDMgMTMyLjA3NCAxMDEuODk1QzEzMS43MTkgMTAxLjc0MiAxMzEuNDEyIDEwMS41MjkgMTMxLjE1NCAxMDEuMjU2QzEzMC45IDEwMC45ODIgMTMwLjcwNSAxMDAuNjU4IDEzMC41NjggMTAwLjI4M0MxMzAuNDMyIDk5LjkwODIgMTMwLjM2MyA5OS40OTggMTMwLjM2MyA5OS4wNTI3Vjk4LjgwNjZDMTMwLjM2MyA5OC4yOTEgMTMwLjQzOSA5Ny44MzIgMTMwLjU5MiA5Ny40Mjk3QzEzMC43NDQgOTcuMDIzNCAxMzAuOTUxIDk2LjY3OTcgMTMxLjIxMyA5Ni4zOTg0QzEzMS40NzUgOTYuMTE3MiAxMzEuNzcxIDk1LjkwNDMgMTMyLjEwNCA5NS43NTk4QzEzMi40MzYgOTUuNjE1MiAxMzIuNzc5IDk1LjU0MyAxMzMuMTM1IDk1LjU0M0MxMzMuNTg4IDk1LjU0MyAxMzMuOTc5IDk1LjYyMTEgMTM0LjMwNyA5NS43NzczQzEzNC42MzkgOTUuOTMzNiAxMzQuOTEgOTYuMTUyMyAxMzUuMTIxIDk2LjQzMzZDMTM1LjMzMiA5Ni43MTA5IDEzNS40ODggOTcuMDM5MSAxMzUuNTkgOTcuNDE4QzEzNS42OTEgOTcuNzkzIDEzNS43NDIgOTguMjAzMSAxMzUuNzQyIDk4LjY0ODRWOTkuMTM0OEgxMzEuMDA4Vjk4LjI1SDEzNC42NThWOTguMTY4QzEzNC42NDMgOTcuODg2NyAxMzQuNTg0IDk3LjYxMzMgMTM0LjQ4MiA5Ny4zNDc3QzEzNC4zODUgOTcuMDgyIDEzNC4yMjkgOTYuODYzMyAxMzQuMDE0IDk2LjY5MTRDMTMzLjc5OSA5Ni41MTk1IDEzMy41MDYgOTYuNDMzNiAxMzMuMTM1IDk2LjQzMzZDMTMyLjg4OSA5Ni40MzM2IDEzMi42NjIgOTYuNDg2MyAxMzIuNDU1IDk2LjU5MThDMTMyLjI0OCA5Ni42OTM0IDEzMi4wNyA5Ni44NDU3IDEzMS45MjIgOTcuMDQ4OEMxMzEuNzczIDk3LjI1MiAxMzEuNjU4IDk3LjUgMTMxLjU3NiA5Ny43OTNDMTMxLjQ5NCA5OC4wODU5IDEzMS40NTMgOTguNDIzOCAxMzEuNDUzIDk4LjgwNjZWOTkuMDUyN0MxMzEuNDUzIDk5LjM1MzUgMTMxLjQ5NCA5OS42MzY3IDEzMS41NzYgOTkuOTAyM0MxMzEuNjYyIDEwMC4xNjQgMTMxLjc4NSAxMDAuMzk1IDEzMS45NDUgMTAwLjU5NEMxMzIuMTA5IDEwMC43OTMgMTMyLjMwNyAxMDAuOTQ5IDEzMi41MzcgMTAxLjA2MkMxMzIuNzcxIDEwMS4xNzYgMTMzLjAzNyAxMDEuMjMyIDEzMy4zMzQgMTAxLjIzMkMxMzMuNzE3IDEwMS4yMzIgMTM0LjA0MSAxMDEuMTU0IDEzNC4zMDcgMTAwLjk5OEMxMzQuNTcyIDEwMC44NDIgMTM0LjgwNSAxMDAuNjMzIDEzNS4wMDQgMTAwLjM3MUwxMzUuNjYgMTAwLjg5M0MxMzUuNTIzIDEwMS4xIDEzNS4zNSAxMDEuMjk3IDEzNS4xMzkgMTAxLjQ4NEMxMzQuOTI4IDEwMS42NzIgMTM0LjY2OCAxMDEuODI0IDEzNC4zNTkgMTAxLjk0MUMxMzQuMDU1IDEwMi4wNTkgMTMzLjY5MyAxMDIuMTE3IDEzMy4yNzUgMTAyLjExN1pNMTM5LjYzOSAxMDIuMTE3QzEzOS4xOTcgMTAyLjExNyAxMzguNzk3IDEwMi4wNDMgMTM4LjQzOCAxMDEuODk1QzEzOC4wODIgMTAxLjc0MiAxMzcuNzc1IDEwMS41MjkgMTM3LjUxOCAxMDEuMjU2QzEzNy4yNjQgMTAwLjk4MiAxMzcuMDY4IDEwMC42NTggMTM2LjkzMiAxMDAuMjgzQzEzNi43OTUgOTkuOTA4MiAxMzYuNzI3IDk5LjQ5OCAxMzYuNzI3IDk5LjA1MjdWOTguODA2NkMxMzYuNzI3IDk4LjI5MSAxMzYuODAzIDk3LjgzMiAxMzYuOTU1IDk3LjQyOTdDMTM3LjEwNyA5Ny4wMjM0IDEzNy4zMTQgOTYuNjc5NyAxMzcuNTc2IDk2LjM5ODRDMTM3LjgzOCA5Ni4xMTcyIDEzOC4xMzUgOTUuOTA0MyAxMzguNDY3IDk1Ljc1OThDMTM4Ljc5OSA5NS42MTUyIDEzOS4xNDMgOTUuNTQzIDEzOS40OTggOTUuNTQzQzEzOS45NTEgOTUuNTQzIDE0MC4zNDIgOTUuNjIxMSAxNDAuNjcgOTUuNzc3M0MxNDEuMDAyIDk1LjkzMzYgMTQxLjI3MyA5Ni4xNTIzIDE0MS40ODQgOTYuNDMzNkMxNDEuNjk1IDk2LjcxMDkgMTQxLjg1MiA5Ny4wMzkxIDE0MS45NTMgOTcuNDE4QzE0Mi4wNTUgOTcuNzkzIDE0Mi4xMDUgOTguMjAzMSAxNDIuMTA1IDk4LjY0ODRWOTkuMTM0OEgxMzcuMzcxVjk4LjI1SDE0MS4wMjFWOTguMTY4QzE0MS4wMDYgOTcuODg2NyAxNDAuOTQ3IDk3LjYxMzMgMTQwLjg0NiA5Ny4zNDc3QzE0MC43NDggOTcuMDgyIDE0MC41OTIgOTYuODYzMyAxNDAuMzc3IDk2LjY5MTRDMTQwLjE2MiA5Ni41MTk1IDEzOS44NjkgOTYuNDMzNiAxMzkuNDk4IDk2LjQzMzZDMTM5LjI1MiA5Ni40MzM2IDEzOS4wMjUgOTYuNDg2MyAxMzguODE4IDk2LjU5MThDMTM4LjYxMSA5Ni42OTM0IDEzOC40MzQgOTYuODQ1NyAxMzguMjg1IDk3LjA0ODhDMTM4LjEzNyA5Ny4yNTIgMTM4LjAyMSA5Ny41IDEzNy45MzkgOTcuNzkzQzEzNy44NTcgOTguMDg1OSAxMzcuODE2IDk4LjQyMzggMTM3LjgxNiA5OC44MDY2Vjk5LjA1MjdDMTM3LjgxNiA5OS4zNTM1IDEzNy44NTcgOTkuNjM2NyAxMzcuOTM5IDk5LjkwMjNDMTM4LjAyNSAxMDAuMTY0IDEzOC4xNDggMTAwLjM5NSAxMzguMzA5IDEwMC41OTRDMTM4LjQ3MyAxMDAuNzkzIDEzOC42NyAxMDAuOTQ5IDEzOC45IDEwMS4wNjJDMTM5LjEzNSAxMDEuMTc2IDEzOS40IDEwMS4yMzIgMTM5LjY5NyAxMDEuMjMyQzE0MC4wOCAxMDEuMjMyIDE0MC40MDQgMTAxLjE1NCAxNDAuNjcgMTAwLjk5OEMxNDAuOTM2IDEwMC44NDIgMTQxLjE2OCAxMDAuNjMzIDE0MS4zNjcgMTAwLjM3MUwxNDIuMDIzIDEwMC44OTNDMTQxLjg4NyAxMDEuMSAxNDEuNzEzIDEwMS4yOTcgMTQxLjUwMiAxMDEuNDg0QzE0MS4yOTEgMTAxLjY3MiAxNDEuMDMxIDEwMS44MjQgMTQwLjcyMyAxMDEuOTQxQzE0MC40MTggMTAyLjA1OSAxNDAuMDU3IDEwMi4xMTcgMTM5LjYzOSAxMDIuMTE3Wk0xNDcuMzY3IDEwMC43N1Y5M0gxNDguNDU3VjEwMkgxNDcuNDYxTDE0Ny4zNjcgMTAwLjc3Wk0xNDMuMTAyIDk4LjkwMDRWOTguNzc3M0MxNDMuMTAyIDk4LjI5MyAxNDMuMTYgOTcuODUzNSAxNDMuMjc3IDk3LjQ1OUMxNDMuMzk4IDk3LjA2MDUgMTQzLjU2OCA5Ni43MTg4IDE0My43ODcgOTYuNDMzNkMxNDQuMDEgOTYuMTQ4NCAxNDQuMjczIDk1LjkyOTcgMTQ0LjU3OCA5NS43NzczQzE0NC44ODcgOTUuNjIxMSAxNDUuMjMgOTUuNTQzIDE0NS42MDkgOTUuNTQzQzE0Ni4wMDggOTUuNTQzIDE0Ni4zNTUgOTUuNjEzMyAxNDYuNjUyIDk1Ljc1MzlDMTQ2Ljk1MyA5NS44OTA2IDE0Ny4yMDcgOTYuMDkxOCAxNDcuNDE0IDk2LjM1NzRDMTQ3LjYyNSA5Ni42MTkxIDE0Ny43OTEgOTYuOTM1NSAxNDcuOTEyIDk3LjMwNjZDMTQ4LjAzMyA5Ny42Nzc3IDE0OC4xMTcgOTguMDk3NyAxNDguMTY0IDk4LjU2NjRWOTkuMTA1NUMxNDguMTIxIDk5LjU3MDMgMTQ4LjAzNyA5OS45ODgzIDE0Ny45MTIgMTAwLjM1OUMxNDcuNzkxIDEwMC43MyAxNDcuNjI1IDEwMS4wNDcgMTQ3LjQxNCAxMDEuMzA5QzE0Ny4yMDcgMTAxLjU3IDE0Ni45NTMgMTAxLjc3MSAxNDYuNjUyIDEwMS45MTJDMTQ2LjM1MiAxMDIuMDQ5IDE0NiAxMDIuMTE3IDE0NS41OTggMTAyLjExN0MxNDUuMjI3IDEwMi4xMTcgMTQ0Ljg4NyAxMDIuMDM3IDE0NC41NzggMTAxLjg3N0MxNDQuMjczIDEwMS43MTcgMTQ0LjAxIDEwMS40OTIgMTQzLjc4NyAxMDEuMjAzQzE0My41NjggMTAwLjkxNCAxNDMuMzk4IDEwMC41NzQgMTQzLjI3NyAxMDAuMTg0QzE0My4xNiA5OS43ODkxIDE0My4xMDIgOTkuMzYxMyAxNDMuMTAyIDk4LjkwMDRaTTE0NC4xOTEgOTguNzc3M1Y5OC45MDA0QzE0NC4xOTEgOTkuMjE2OCAxNDQuMjIzIDk5LjUxMzcgMTQ0LjI4NSA5OS43OTFDMTQ0LjM1MiAxMDAuMDY4IDE0NC40NTMgMTAwLjMxMiAxNDQuNTkgMTAwLjUyM0MxNDQuNzI3IDEwMC43MzQgMTQ0LjkgMTAwLjkgMTQ1LjExMSAxMDEuMDIxQzE0NS4zMjIgMTAxLjEzOSAxNDUuNTc0IDEwMS4xOTcgMTQ1Ljg2NyAxMDEuMTk3QzE0Ni4yMjcgMTAxLjE5NyAxNDYuNTIxIDEwMS4xMjEgMTQ2Ljc1MiAxMDAuOTY5QzE0Ni45ODYgMTAwLjgxNiAxNDcuMTc0IDEwMC42MTUgMTQ3LjMxNCAxMDAuMzY1QzE0Ny40NTUgMTAwLjExNSAxNDcuNTY0IDk5Ljg0MzggMTQ3LjY0MyA5OS41NTA4Vjk4LjEzODdDMTQ3LjU5NiA5Ny45MjM4IDE0Ny41MjcgOTcuNzE2OCAxNDcuNDM4IDk3LjUxNzZDMTQ3LjM1MiA5Ny4zMTQ1IDE0Ny4yMzggOTcuMTM0OCAxNDcuMDk4IDk2Ljk3ODVDMTQ2Ljk2MSA5Ni44MTg0IDE0Ni43OTEgOTYuNjkxNCAxNDYuNTg4IDk2LjU5NzdDMTQ2LjM4OSA5Ni41MDM5IDE0Ni4xNTIgOTYuNDU3IDE0NS44NzkgOTYuNDU3QzE0NS41ODIgOTYuNDU3IDE0NS4zMjYgOTYuNTE5NSAxNDUuMTExIDk2LjY0NDVDMTQ0LjkgOTYuNzY1NiAxNDQuNzI3IDk2LjkzMzYgMTQ0LjU5IDk3LjE0ODRDMTQ0LjQ1MyA5Ny4zNTk0IDE0NC4zNTIgOTcuNjA1NSAxNDQuMjg1IDk3Ljg4NjdDMTQ0LjIyMyA5OC4xNjQxIDE0NC4xOTEgOTguNDYwOSAxNDQuMTkxIDk4Ljc3NzNaTTE1My4zNSA5OC4wMDk4SDE1MS4xODhMMTUxLjE3NiA5Ny4xMDE2SDE1My4xMzlDMTUzLjQ2MyA5Ny4xMDE2IDE1My43NDYgOTcuMDQ2OSAxNTMuOTg4IDk2LjkzNzVDMTU0LjIzIDk2LjgyODEgMTU0LjQxOCA5Ni42NzE5IDE1NC41NTEgOTYuNDY4OEMxNTQuNjg4IDk2LjI2MTcgMTU0Ljc1NiA5Ni4wMTU2IDE1NC43NTYgOTUuNzMwNUMxNTQuNzU2IDk1LjQxOCAxNTQuNjk1IDk1LjE2NDEgMTU0LjU3NCA5NC45Njg4QzE1NC40NTcgOTQuNzY5NSAxNTQuMjc1IDk0LjYyNSAxNTQuMDI5IDk0LjUzNTJDMTUzLjc4NyA5NC40NDE0IDE1My40NzkgOTQuMzk0NSAxNTMuMTA0IDk0LjM5NDVIMTUxLjQzOVYxMDJIMTUwLjMwOVY5My40Njg4SDE1My4xMDRDMTUzLjU0MSA5My40Njg4IDE1My45MzIgOTMuNTEzNyAxNTQuMjc1IDkzLjYwMzVDMTU0LjYxOSA5My42ODk1IDE1NC45MSA5My44MjYyIDE1NS4xNDggOTQuMDEzN0MxNTUuMzkxIDk0LjE5NzMgMTU1LjU3NCA5NC40MzE2IDE1NS42OTkgOTQuNzE2OEMxNTUuODI0IDk1LjAwMiAxNTUuODg3IDk1LjM0MzggMTU1Ljg4NyA5NS43NDIyQzE1NS44ODcgOTYuMDkzOCAxNTUuNzk3IDk2LjQxMjEgMTU1LjYxNyA5Ni42OTczQzE1NS40MzggOTYuOTc4NSAxNTUuMTg4IDk3LjIwOSAxNTQuODY3IDk3LjM4ODdDMTU0LjU1MSA5Ny41Njg0IDE1NC4xOCA5Ny42ODM2IDE1My43NTQgOTcuNzM0NEwxNTMuMzUgOTguMDA5OFpNMTUzLjI5NyAxMDJIMTUwLjc0MkwxNTEuMzgxIDEwMS4wOEgxNTMuMjk3QzE1My42NTYgMTAxLjA4IDE1My45NjEgMTAxLjAxOCAxNTQuMjExIDEwMC44OTNDMTU0LjQ2NSAxMDAuNzY4IDE1NC42NTggMTAwLjU5MiAxNTQuNzkxIDEwMC4zNjVDMTU0LjkyNCAxMDAuMTM1IDE1NC45OSA5OS44NjMzIDE1NC45OSA5OS41NTA4QzE1NC45OSA5OS4yMzQ0IDE1NC45MzQgOTguOTYwOSAxNTQuODIgOTguNzMwNUMxNTQuNzA3IDk4LjUgMTU0LjUyOSA5OC4zMjIzIDE1NC4yODcgOTguMTk3M0MxNTQuMDQ1IDk4LjA3MjMgMTUzLjczMiA5OC4wMDk4IDE1My4zNSA5OC4wMDk4SDE1MS43MzhMMTUxLjc1IDk3LjEwMTZIMTUzLjk1M0wxNTQuMTkzIDk3LjQyOTdDMTU0LjYwNCA5Ny40NjQ4IDE1NC45NTEgOTcuNTgyIDE1NS4yMzYgOTcuNzgxMkMxNTUuNTIxIDk3Ljk3NjYgMTU1LjczOCA5OC4yMjY2IDE1NS44ODcgOTguNTMxMkMxNTYuMDM5IDk4LjgzNTkgMTU2LjExNSA5OS4xNzE5IDE1Ni4xMTUgOTkuNTM5MUMxNTYuMTE1IDEwMC4wNyAxNTUuOTk4IDEwMC41MiAxNTUuNzY0IDEwMC44ODdDMTU1LjUzMyAxMDEuMjUgMTU1LjIwNyAxMDEuNTI3IDE1NC43ODUgMTAxLjcxOUMxNTQuMzYzIDEwMS45MDYgMTUzLjg2NyAxMDIgMTUzLjI5NyAxMDJaTTE2MS4zNTkgMTAwLjkxNlY5Ny42NTIzQzE2MS4zNTkgOTcuNDAyMyAxNjEuMzA5IDk3LjE4NTUgMTYxLjIwNyA5Ny4wMDJDMTYxLjEwOSA5Ni44MTQ1IDE2MC45NjEgOTYuNjY5OSAxNjAuNzYyIDk2LjU2ODRDMTYwLjU2MiA5Ni40NjY4IDE2MC4zMTYgOTYuNDE2IDE2MC4wMjMgOTYuNDE2QzE1OS43NSA5Ni40MTYgMTU5LjUxIDk2LjQ2MjkgMTU5LjMwMyA5Ni41NTY2QzE1OS4xIDk2LjY1MDQgMTU4LjkzOSA5Ni43NzM0IDE1OC44MjIgOTYuOTI1OEMxNTguNzA5IDk3LjA3ODEgMTU4LjY1MiA5Ny4yNDIyIDE1OC42NTIgOTcuNDE4SDE1Ny41NjhDMTU3LjU2OCA5Ny4xOTE0IDE1Ny42MjcgOTYuOTY2OCAxNTcuNzQ0IDk2Ljc0NDFDMTU3Ljg2MSA5Ni41MjE1IDE1OC4wMjkgOTYuMzIwMyAxNTguMjQ4IDk2LjE0MDZDMTU4LjQ3MSA5NS45NTcgMTU4LjczNiA5NS44MTI1IDE1OS4wNDUgOTUuNzA3QzE1OS4zNTcgOTUuNTk3NyAxNTkuNzA1IDk1LjU0MyAxNjAuMDg4IDk1LjU0M0MxNjAuNTQ5IDk1LjU0MyAxNjAuOTU1IDk1LjYyMTEgMTYxLjMwNyA5NS43NzczQzE2MS42NjIgOTUuOTMzNiAxNjEuOTM5IDk2LjE2OTkgMTYyLjEzOSA5Ni40ODYzQzE2Mi4zNDIgOTYuNzk4OCAxNjIuNDQzIDk3LjE5MTQgMTYyLjQ0MyA5Ny42NjQxVjEwMC42MTdDMTYyLjQ0MyAxMDAuODI4IDE2Mi40NjEgMTAxLjA1MyAxNjIuNDk2IDEwMS4yOTFDMTYyLjUzNSAxMDEuNTI5IDE2Mi41OTIgMTAxLjczNCAxNjIuNjY2IDEwMS45MDZWMTAySDE2MS41MzVDMTYxLjQ4IDEwMS44NzUgMTYxLjQzOCAxMDEuNzA5IDE2MS40MDYgMTAxLjUwMkMxNjEuMzc1IDEwMS4yOTEgMTYxLjM1OSAxMDEuMDk2IDE2MS4zNTkgMTAwLjkxNlpNMTYxLjU0NyA5OC4xNTYyTDE2MS41NTkgOTguOTE4SDE2MC40NjNDMTYwLjE1NCA5OC45MTggMTU5Ljg3OSA5OC45NDM0IDE1OS42MzcgOTguOTk0MUMxNTkuMzk1IDk5LjA0MSAxNTkuMTkxIDk5LjExMzMgMTU5LjAyNyA5OS4yMTA5QzE1OC44NjMgOTkuMzA4NiAxNTguNzM4IDk5LjQzMTYgMTU4LjY1MiA5OS41ODAxQzE1OC41NjYgOTkuNzI0NiAxNTguNTIzIDk5Ljg5NDUgMTU4LjUyMyAxMDAuMDlDMTU4LjUyMyAxMDAuMjg5IDE1OC41NjggMTAwLjQ3MSAxNTguNjU4IDEwMC42MzVDMTU4Ljc0OCAxMDAuNzk5IDE1OC44ODMgMTAwLjkzIDE1OS4wNjIgMTAxLjAyN0MxNTkuMjQ2IDEwMS4xMjEgMTU5LjQ3MSAxMDEuMTY4IDE1OS43MzYgMTAxLjE2OEMxNjAuMDY4IDEwMS4xNjggMTYwLjM2MSAxMDEuMDk4IDE2MC42MTUgMTAwLjk1N0MxNjAuODY5IDEwMC44MTYgMTYxLjA3IDEwMC42NDUgMTYxLjIxOSAxMDAuNDQxQzE2MS4zNzEgMTAwLjIzOCAxNjEuNDUzIDEwMC4wNDEgMTYxLjQ2NSA5OS44NDk2TDE2MS45MjggMTAwLjM3MUMxNjEuOSAxMDAuNTM1IDE2MS44MjYgMTAwLjcxNyAxNjEuNzA1IDEwMC45MTZDMTYxLjU4NCAxMDEuMTE1IDE2MS40MjIgMTAxLjMwNyAxNjEuMjE5IDEwMS40OUMxNjEuMDIgMTAxLjY3IDE2MC43ODEgMTAxLjgyIDE2MC41MDQgMTAxLjk0MUMxNjAuMjMgMTAyLjA1OSAxNTkuOTIyIDEwMi4xMTcgMTU5LjU3OCAxMDIuMTE3QzE1OS4xNDggMTAyLjExNyAxNTguNzcxIDEwMi4wMzMgMTU4LjQ0NyAxMDEuODY1QzE1OC4xMjcgMTAxLjY5NyAxNTcuODc3IDEwMS40NzMgMTU3LjY5NyAxMDEuMTkxQzE1Ny41MjEgMTAwLjkwNiAxNTcuNDM0IDEwMC41ODggMTU3LjQzNCAxMDAuMjM2QzE1Ny40MzQgOTkuODk2NSAxNTcuNSA5OS41OTc3IDE1Ny42MzMgOTkuMzM5OEMxNTcuNzY2IDk5LjA3ODEgMTU3Ljk1NyA5OC44NjEzIDE1OC4yMDcgOTguNjg5NUMxNTguNDU3IDk4LjUxMzcgMTU4Ljc1OCA5OC4zODA5IDE1OS4xMDkgOTguMjkxQzE1OS40NjEgOTguMjAxMiAxNTkuODU0IDk4LjE1NjIgMTYwLjI4NyA5OC4xNTYySDE2MS41NDdaTTE2Ni42ODYgMTAxLjIyN0MxNjYuOTQzIDEwMS4yMjcgMTY3LjE4MiAxMDEuMTc0IDE2Ny40IDEwMS4wNjhDMTY3LjYxOSAxMDAuOTYzIDE2Ny43OTkgMTAwLjgxOCAxNjcuOTM5IDEwMC42MzVDMTY4LjA4IDEwMC40NDcgMTY4LjE2IDEwMC4yMzQgMTY4LjE4IDk5Ljk5NjFIMTY5LjIxMUMxNjkuMTkxIDEwMC4zNzEgMTY5LjA2NCAxMDAuNzIxIDE2OC44MyAxMDEuMDQ1QzE2OC42IDEwMS4zNjUgMTY4LjI5NyAxMDEuNjI1IDE2Ny45MjIgMTAxLjgyNEMxNjcuNTQ3IDEwMi4wMiAxNjcuMTM1IDEwMi4xMTcgMTY2LjY4NiAxMDIuMTE3QzE2Ni4yMDkgMTAyLjExNyAxNjUuNzkzIDEwMi4wMzMgMTY1LjQzOCAxMDEuODY1QzE2NS4wODYgMTAxLjY5NyAxNjQuNzkzIDEwMS40NjcgMTY0LjU1OSAxMDEuMTc0QzE2NC4zMjggMTAwLjg4MSAxNjQuMTU0IDEwMC41NDUgMTY0LjAzNyAxMDAuMTY2QzE2My45MjQgOTkuNzgzMiAxNjMuODY3IDk5LjM3ODkgMTYzLjg2NyA5OC45NTMxVjk4LjcwN0MxNjMuODY3IDk4LjI4MTIgMTYzLjkyNCA5Ny44Nzg5IDE2NC4wMzcgOTcuNUMxNjQuMTU0IDk3LjExNzIgMTY0LjMyOCA5Ni43NzkzIDE2NC41NTkgOTYuNDg2M0MxNjQuNzkzIDk2LjE5MzQgMTY1LjA4NiA5NS45NjI5IDE2NS40MzggOTUuNzk0OUMxNjUuNzkzIDk1LjYyNyAxNjYuMjA5IDk1LjU0MyAxNjYuNjg2IDk1LjU0M0MxNjcuMTgyIDk1LjU0MyAxNjcuNjE1IDk1LjY0NDUgMTY3Ljk4NiA5NS44NDc3QzE2OC4zNTcgOTYuMDQ2OSAxNjguNjQ4IDk2LjMyMDMgMTY4Ljg1OSA5Ni42NjhDMTY5LjA3NCA5Ny4wMTE3IDE2OS4xOTEgOTcuNDAyMyAxNjkuMjExIDk3LjgzOThIMTY4LjE4QzE2OC4xNiA5Ny41NzgxIDE2OC4wODYgOTcuMzQxOCAxNjcuOTU3IDk3LjEzMDlDMTY3LjgzMiA5Ni45MTk5IDE2Ny42NiA5Ni43NTIgMTY3LjQ0MSA5Ni42MjdDMTY3LjIyNyA5Ni40OTggMTY2Ljk3NSA5Ni40MzM2IDE2Ni42ODYgOTYuNDMzNkMxNjYuMzU0IDk2LjQzMzYgMTY2LjA3NCA5Ni41IDE2NS44NDggOTYuNjMyOEMxNjUuNjI1IDk2Ljc2MTcgMTY1LjQ0NyA5Ni45Mzc1IDE2NS4zMTQgOTcuMTYwMkMxNjUuMTg2IDk3LjM3ODkgMTY1LjA5MiA5Ny42MjMgMTY1LjAzMyA5Ny44OTI2QzE2NC45NzkgOTguMTU4MiAxNjQuOTUxIDk4LjQyOTcgMTY0Ljk1MSA5OC43MDdWOTguOTUzMUMxNjQuOTUxIDk5LjIzMDUgMTY0Ljk3OSA5OS41MDM5IDE2NS4wMzMgOTkuNzczNEMxNjUuMDg4IDEwMC4wNDMgMTY1LjE4IDEwMC4yODcgMTY1LjMwOSAxMDAuNTA2QzE2NS40NDEgMTAwLjcyNSAxNjUuNjE5IDEwMC45IDE2NS44NDIgMTAxLjAzM0MxNjYuMDY4IDEwMS4xNjIgMTY2LjM1IDEwMS4yMjcgMTY2LjY4NiAxMDEuMjI3Wk0xNzEuNTIgOTNWMTAySDE3MC40M1Y5M0gxNzEuNTJaTTE3NS4zOTMgOTUuNjYwMkwxNzIuNjI3IDk4LjYxOTFMMTcxLjA4IDEwMC4yMjVMMTcwLjk5MiA5OS4wNzAzTDE3Mi4xIDk3Ljc0NjFMMTc0LjA2OCA5NS42NjAySDE3NS4zOTNaTTE3NC40MDIgMTAyTDE3Mi4xNDEgOTguOTc2NkwxNzIuNzAzIDk4LjAwOThMMTc1LjY4IDEwMkgxNzQuNDAyWlwiXHJcblx0XHRcdGZpbGw9XCIjMEYxNzJBXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjExM1wiIHk9XCIxMTBcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjExOVwiIHk9XCIxMTZcIiB3aWR0aD1cIjU4XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjIwMFwiIHk9XCIxMlwiIHdpZHRoPVwiODZcIiBoZWlnaHQ9XCIxMjBcIiByeD1cIjRcIiBmaWxsPVwid2hpdGVcIi8+XHJcblx0XHQ8cmVjdCB4PVwiMjEzXCIgeT1cIjI1XCIgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCIgcng9XCI0XCIgZmlsbD1cIiNGMUY1RjlcIi8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTIzMSA0Ni4wMDc0QzIzMSA0NS40NTEgMjMxLjQ0OCA0NSAyMzIgNDVIMjQ2QzI0Ni41NTIgNDUgMjQ3IDQ1LjQ1MSAyNDcgNDYuMDA3NEMyNDcgNDYuNTYzOCAyNDYuNTUyIDQ3LjAxNDggMjQ2IDQ3LjAxNDhIMjMyQzIzMS40NDggNDcuMDE0OCAyMzEgNDYuNTYzOCAyMzEgNDYuMDA3NFpcIlxyXG5cdFx0XHRmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMjMyIDQ5LjAyOTZDMjMxLjQ0OCA0OS4wMjk2IDIzMSA0OS40ODA2IDIzMSA1MC4wMzdDMjMxIDUwLjU5MzMgMjMxLjQ0OCA1MS4wNDQ0IDIzMiA1MS4wNDQ0SDI0NkMyNDYuNTUyIDUxLjA0NDQgMjQ3IDUwLjU5MzMgMjQ3IDUwLjAzN0MyNDcgNDkuNDgwNiAyNDYuNTUyIDQ5LjAyOTYgMjQ2IDQ5LjAyOTZIMjMyWlwiXHJcblx0XHRcdGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0yMzIgNTMuMDU5MUMyMzEuNDQ4IDUzLjA1OTEgMjMxIDUzLjUxMDIgMjMxIDU0LjA2NjVDMjMxIDU0LjYyMjkgMjMxLjQ0OCA1NS4wNzM5IDIzMiA1NS4wNzM5SDI0MUMyNDEuNTUyIDU1LjA3MzkgMjQyIDU0LjYyMjkgMjQyIDU0LjA2NjVDMjQyIDUzLjUxMDIgMjQxLjU1MiA1My4wNTkxIDI0MSA1My4wNTkxSDIzMlpcIlxyXG5cdFx0XHRmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMjMxIDU3Ljk5MjZDMjMxIDU3LjQzNjIgMjMxLjQ0OCA1Ni45ODUyIDIzMiA1Ni45ODUySDIzOEMyMzguNTUyIDU2Ljk4NTIgMjM5IDU3LjQzNjIgMjM5IDU3Ljk5MjZDMjM5IDU4LjU0OSAyMzguNTUyIDU5IDIzOCA1OUgyMzJDMjMxLjQ0OCA1OSAyMzEgNTguNTQ5IDIzMSA1Ny45OTI2WlwiXHJcblx0XHRcdGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0yNDkgNTlDMjQ5IDU4LjQ0NzcgMjQ5LjQ0OCA1OCAyNTAgNThDMjUwLjU1MiA1OCAyNTEgNTguNDQ3NyAyNTEgNTlWNjFIMjUzQzI1My41NTIgNjEgMjU0IDYxLjQ0NzcgMjU0IDYyQzI1NCA2Mi41NTIzIDI1My41NTIgNjMgMjUzIDYzSDI1MVY2NUMyNTEgNjUuNTUyMyAyNTAuNTUyIDY2IDI1MCA2NkMyNDkuNDQ4IDY2IDI0OSA2NS41NTIzIDI0OSA2NVY2M0gyNDdDMjQ2LjQ0OCA2MyAyNDYgNjIuNTUyMyAyNDYgNjJDMjQ2IDYxLjQ0NzcgMjQ2LjQ0OCA2MSAyNDcgNjFIMjQ5VjU5WlwiXHJcblx0XHRcdGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk0yNTEgNDNWNTMuMDU0OUMyNTUuNSA1My41NTI0IDI1OSA1Ny4zNjc0IDI1OSA2MkMyNTkgNjYuOTcwNiAyNTQuOTcxIDcxIDI1MCA3MUMyNDcuODU3IDcxIDI0NS44ODggNzAuMjUwOCAyNDQuMzQzIDY5SDIzMUMyMjguNzkxIDY5IDIyNyA2Ny4yMDkxIDIyNyA2NVY0M0MyMjcgNDAuNzkwOSAyMjguNzkxIDM5IDIzMSAzOUgyNDdDMjQ5LjIwOSAzOSAyNTEgNDAuNzkwOSAyNTEgNDNaTTIzMSA0MUgyNDdDMjQ4LjEwNSA0MSAyNDkgNDEuODk1NCAyNDkgNDNWNTMuMDU0OUMyNDQuNSA1My41NTI0IDI0MSA1Ny4zNjc0IDI0MSA2MkMyNDEgNjMuODUwMSAyNDEuNTU4IDY1LjU2OTkgMjQyLjUxNiA2N0gyMzFDMjI5Ljg5NSA2NyAyMjkgNjYuMTA0NiAyMjkgNjVWNDNDMjI5IDQxLjg5NTQgMjI5Ljg5NSA0MSAyMzEgNDFaTTI1NyA2MkMyNTcgNjUuODY2IDI1My44NjYgNjkgMjUwIDY5QzI0Ni4xMzQgNjkgMjQzIDY1Ljg2NiAyNDMgNjJDMjQzIDU4LjEzNCAyNDYuMTM0IDU1IDI1MCA1NUMyNTMuODY2IDU1IDI1NyA1OC4xMzQgMjU3IDYyWlwiXHJcblx0XHQgICAgICBmaWxsPVwiI0NCRDVFMVwiLz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMjE2LjYxMSA5My40Njg4VjEwMkgyMTUuNDhWOTMuNDY4OEgyMTYuNjExWk0yMTkuNTg4IDk3LjAxMzdWMTAySDIxOC41MDRWOTUuNjYwMkgyMTkuNTI5TDIxOS41ODggOTcuMDEzN1pNMjE5LjMzIDk4LjU4OThMMjE4Ljg3OSA5OC41NzIzQzIxOC44ODMgOTguMTM4NyAyMTguOTQ3IDk3LjczODMgMjE5LjA3MiA5Ny4zNzExQzIxOS4xOTcgOTcgMjE5LjM3MyA5Ni42Nzc3IDIxOS42IDk2LjQwNDNDMjE5LjgyNiA5Ni4xMzA5IDIyMC4wOTYgOTUuOTE5OSAyMjAuNDA4IDk1Ljc3MTVDMjIwLjcyNSA5NS42MTkxIDIyMS4wNzQgOTUuNTQzIDIyMS40NTcgOTUuNTQzQzIyMS43NyA5NS41NDMgMjIyLjA1MSA5NS41ODU5IDIyMi4zMDEgOTUuNjcxOUMyMjIuNTUxIDk1Ljc1MzkgMjIyLjc2NCA5NS44ODY3IDIyMi45MzkgOTYuMDcwM0MyMjMuMTE5IDk2LjI1MzkgMjIzLjI1NiA5Ni40OTIyIDIyMy4zNSA5Ni43ODUyQzIyMy40NDMgOTcuMDc0MiAyMjMuNDkgOTcuNDI3NyAyMjMuNDkgOTcuODQ1N1YxMDJIMjIyLjRWOTcuODM0QzIyMi40IDk3LjUwMiAyMjIuMzUyIDk3LjIzNjMgMjIyLjI1NCA5Ny4wMzcxQzIyMi4xNTYgOTYuODM0IDIyMi4wMTQgOTYuNjg3NSAyMjEuODI2IDk2LjU5NzdDMjIxLjYzOSA5Ni41MDM5IDIyMS40MDggOTYuNDU3IDIyMS4xMzUgOTYuNDU3QzIyMC44NjUgOTYuNDU3IDIyMC42MTkgOTYuNTEzNyAyMjAuMzk2IDk2LjYyN0MyMjAuMTc4IDk2Ljc0MDIgMjE5Ljk4OCA5Ni44OTY1IDIxOS44MjggOTcuMDk1N0MyMTkuNjcyIDk3LjI5NDkgMjE5LjU0OSA5Ny41MjM0IDIxOS40NTkgOTcuNzgxMkMyMTkuMzczIDk4LjAzNTIgMjE5LjMzIDk4LjMwNDcgMjE5LjMzIDk4LjU4OThaTTIyOC44MjggMTAwLjMxOEMyMjguODI4IDEwMC4xNjIgMjI4Ljc5MyAxMDAuMDE4IDIyOC43MjMgOTkuODg0OEMyMjguNjU2IDk5Ljc0OCAyMjguNTE4IDk5LjYyNSAyMjguMzA3IDk5LjUxNTZDMjI4LjEgOTkuNDAyMyAyMjcuNzg3IDk5LjMwNDcgMjI3LjM2OSA5OS4yMjI3QzIyNy4wMTggOTkuMTQ4NCAyMjYuNjk5IDk5LjA2MDUgMjI2LjQxNCA5OC45NTlDMjI2LjEzMyA5OC44NTc0IDIyNS44OTMgOTguNzM0NCAyMjUuNjkzIDk4LjU4OThDMjI1LjQ5OCA5OC40NDUzIDIyNS4zNDggOTguMjc1NCAyMjUuMjQyIDk4LjA4MDFDMjI1LjEzNyA5Ny44ODQ4IDIyNS4wODQgOTcuNjU2MiAyMjUuMDg0IDk3LjM5NDVDMjI1LjA4NCA5Ny4xNDQ1IDIyNS4xMzkgOTYuOTA4MiAyMjUuMjQ4IDk2LjY4NTVDMjI1LjM2MSA5Ni40NjI5IDIyNS41MiA5Ni4yNjU2IDIyNS43MjMgOTYuMDkzOEMyMjUuOTMgOTUuOTIxOSAyMjYuMTc4IDk1Ljc4NzEgMjI2LjQ2NyA5NS42ODk1QzIyNi43NTYgOTUuNTkxOCAyMjcuMDc4IDk1LjU0MyAyMjcuNDM0IDk1LjU0M0MyMjcuOTQxIDk1LjU0MyAyMjguMzc1IDk1LjYzMjggMjI4LjczNCA5NS44MTI1QzIyOS4wOTQgOTUuOTkyMiAyMjkuMzY5IDk2LjIzMjQgMjI5LjU2MSA5Ni41MzMyQzIyOS43NTIgOTYuODMwMSAyMjkuODQ4IDk3LjE2MDIgMjI5Ljg0OCA5Ny41MjM0SDIyOC43NjRDMjI4Ljc2NCA5Ny4zNDc3IDIyOC43MTEgOTcuMTc3NyAyMjguNjA1IDk3LjAxMzdDMjI4LjUwNCA5Ni44NDU3IDIyOC4zNTQgOTYuNzA3IDIyOC4xNTQgOTYuNTk3N0MyMjcuOTU5IDk2LjQ4ODMgMjI3LjcxOSA5Ni40MzM2IDIyNy40MzQgOTYuNDMzNkMyMjcuMTMzIDk2LjQzMzYgMjI2Ljg4OSA5Ni40ODA1IDIyNi43MDEgOTYuNTc0MkMyMjYuNTE4IDk2LjY2NDEgMjI2LjM4MyA5Ni43NzkzIDIyNi4yOTcgOTYuOTE5OUMyMjYuMjE1IDk3LjA2MDUgMjI2LjE3NCA5Ny4yMDkgMjI2LjE3NCA5Ny4zNjUyQzIyNi4xNzQgOTcuNDgyNCAyMjYuMTkzIDk3LjU4NzkgMjI2LjIzMiA5Ny42ODE2QzIyNi4yNzUgOTcuNzcxNSAyMjYuMzUgOTcuODU1NSAyMjYuNDU1IDk3LjkzMzZDMjI2LjU2MSA5OC4wMDc4IDIyNi43MDkgOTguMDc4MSAyMjYuOSA5OC4xNDQ1QzIyNy4wOTIgOTguMjEwOSAyMjcuMzM2IDk4LjI3NzMgMjI3LjYzMyA5OC4zNDM4QzIyOC4xNTIgOTguNDYwOSAyMjguNTggOTguNjAxNiAyMjguOTE2IDk4Ljc2NTZDMjI5LjI1MiA5OC45Mjk3IDIyOS41MDIgOTkuMTMwOSAyMjkuNjY2IDk5LjM2OTFDMjI5LjgzIDk5LjYwNzQgMjI5LjkxMiA5OS44OTY1IDIyOS45MTIgMTAwLjIzNkMyMjkuOTEyIDEwMC41MTQgMjI5Ljg1NCAxMDAuNzY4IDIyOS43MzYgMTAwLjk5OEMyMjkuNjIzIDEwMS4yMjkgMjI5LjQ1NyAxMDEuNDI4IDIyOS4yMzggMTAxLjU5NkMyMjkuMDIzIDEwMS43NiAyMjguNzY2IDEwMS44ODkgMjI4LjQ2NSAxMDEuOTgyQzIyOC4xNjggMTAyLjA3MiAyMjcuODM0IDEwMi4xMTcgMjI3LjQ2MyAxMDIuMTE3QzIyNi45MDQgMTAyLjExNyAyMjYuNDMyIDEwMi4wMTggMjI2LjA0NSAxMDEuODE4QzIyNS42NTggMTAxLjYxOSAyMjUuMzY1IDEwMS4zNjEgMjI1LjE2NiAxMDEuMDQ1QzIyNC45NjcgMTAwLjcyOSAyMjQuODY3IDEwMC4zOTUgMjI0Ljg2NyAxMDAuMDQzSDIyNS45NTdDMjI1Ljk3MyAxMDAuMzQgMjI2LjA1OSAxMDAuNTc2IDIyNi4yMTUgMTAwLjc1MkMyMjYuMzcxIDEwMC45MjQgMjI2LjU2MiAxMDEuMDQ3IDIyNi43ODkgMTAxLjEyMUMyMjcuMDE2IDEwMS4xOTEgMjI3LjI0IDEwMS4yMjcgMjI3LjQ2MyAxMDEuMjI3QzIyNy43NiAxMDEuMjI3IDIyOC4wMDggMTAxLjE4OCAyMjguMjA3IDEwMS4xMDlDMjI4LjQxIDEwMS4wMzEgMjI4LjU2NCAxMDAuOTI0IDIyOC42NyAxMDAuNzg3QzIyOC43NzUgMTAwLjY1IDIyOC44MjggMTAwLjQ5NCAyMjguODI4IDEwMC4zMThaTTIzMy45NjcgMTAyLjExN0MyMzMuNTI1IDEwMi4xMTcgMjMzLjEyNSAxMDIuMDQzIDIzMi43NjYgMTAxLjg5NUMyMzIuNDEgMTAxLjc0MiAyMzIuMTA0IDEwMS41MjkgMjMxLjg0NiAxMDEuMjU2QzIzMS41OTIgMTAwLjk4MiAyMzEuMzk2IDEwMC42NTggMjMxLjI2IDEwMC4yODNDMjMxLjEyMyA5OS45MDgyIDIzMS4wNTUgOTkuNDk4IDIzMS4wNTUgOTkuMDUyN1Y5OC44MDY2QzIzMS4wNTUgOTguMjkxIDIzMS4xMzEgOTcuODMyIDIzMS4yODMgOTcuNDI5N0MyMzEuNDM2IDk3LjAyMzQgMjMxLjY0MyA5Ni42Nzk3IDIzMS45MDQgOTYuMzk4NEMyMzIuMTY2IDk2LjExNzIgMjMyLjQ2MyA5NS45MDQzIDIzMi43OTUgOTUuNzU5OEMyMzMuMTI3IDk1LjYxNTIgMjMzLjQ3MSA5NS41NDMgMjMzLjgyNiA5NS41NDNDMjM0LjI3OSA5NS41NDMgMjM0LjY3IDk1LjYyMTEgMjM0Ljk5OCA5NS43NzczQzIzNS4zMyA5NS45MzM2IDIzNS42MDIgOTYuMTUyMyAyMzUuODEyIDk2LjQzMzZDMjM2LjAyMyA5Ni43MTA5IDIzNi4xOCA5Ny4wMzkxIDIzNi4yODEgOTcuNDE4QzIzNi4zODMgOTcuNzkzIDIzNi40MzQgOTguMjAzMSAyMzYuNDM0IDk4LjY0ODRWOTkuMTM0OEgyMzEuNjk5Vjk4LjI1SDIzNS4zNVY5OC4xNjhDMjM1LjMzNCA5Ny44ODY3IDIzNS4yNzUgOTcuNjEzMyAyMzUuMTc0IDk3LjM0NzdDMjM1LjA3NiA5Ny4wODIgMjM0LjkyIDk2Ljg2MzMgMjM0LjcwNSA5Ni42OTE0QzIzNC40OSA5Ni41MTk1IDIzNC4xOTcgOTYuNDMzNiAyMzMuODI2IDk2LjQzMzZDMjMzLjU4IDk2LjQzMzYgMjMzLjM1NCA5Ni40ODYzIDIzMy4xNDYgOTYuNTkxOEMyMzIuOTM5IDk2LjY5MzQgMjMyLjc2MiA5Ni44NDU3IDIzMi42MTMgOTcuMDQ4OEMyMzIuNDY1IDk3LjI1MiAyMzIuMzUgOTcuNSAyMzIuMjY4IDk3Ljc5M0MyMzIuMTg2IDk4LjA4NTkgMjMyLjE0NSA5OC40MjM4IDIzMi4xNDUgOTguODA2NlY5OS4wNTI3QzIzMi4xNDUgOTkuMzUzNSAyMzIuMTg2IDk5LjYzNjcgMjMyLjI2OCA5OS45MDIzQzIzMi4zNTQgMTAwLjE2NCAyMzIuNDc3IDEwMC4zOTUgMjMyLjYzNyAxMDAuNTk0QzIzMi44MDEgMTAwLjc5MyAyMzIuOTk4IDEwMC45NDkgMjMzLjIyOSAxMDEuMDYyQzIzMy40NjMgMTAxLjE3NiAyMzMuNzI5IDEwMS4yMzIgMjM0LjAyNSAxMDEuMjMyQzIzNC40MDggMTAxLjIzMiAyMzQuNzMyIDEwMS4xNTQgMjM0Ljk5OCAxMDAuOTk4QzIzNS4yNjQgMTAwLjg0MiAyMzUuNDk2IDEwMC42MzMgMjM1LjY5NSAxMDAuMzcxTDIzNi4zNTIgMTAwLjg5M0MyMzYuMjE1IDEwMS4xIDIzNi4wNDEgMTAxLjI5NyAyMzUuODMgMTAxLjQ4NEMyMzUuNjE5IDEwMS42NzIgMjM1LjM1OSAxMDEuODI0IDIzNS4wNTEgMTAxLjk0MUMyMzQuNzQ2IDEwMi4wNTkgMjM0LjM4NSAxMDIuMTE3IDIzMy45NjcgMTAyLjExN1pNMjM4Ljc4MyA5Ni42NTYyVjEwMkgyMzcuNjk5Vjk1LjY2MDJIMjM4Ljc1NEwyMzguNzgzIDk2LjY1NjJaTTI0MC43NjQgOTUuNjI1TDI0MC43NTggOTYuNjMyOEMyNDAuNjY4IDk2LjYxMzMgMjQwLjU4MiA5Ni42MDE2IDI0MC41IDk2LjU5NzdDMjQwLjQyMiA5Ni41ODk4IDI0MC4zMzIgOTYuNTg1OSAyNDAuMjMgOTYuNTg1OUMyMzkuOTggOTYuNTg1OSAyMzkuNzYgOTYuNjI1IDIzOS41NjggOTYuNzAzMUMyMzkuMzc3IDk2Ljc4MTIgMjM5LjIxNSA5Ni44OTA2IDIzOS4wODIgOTcuMDMxMkMyMzguOTQ5IDk3LjE3MTkgMjM4Ljg0NCA5Ny4zMzk4IDIzOC43NjYgOTcuNTM1MkMyMzguNjkxIDk3LjcyNjYgMjM4LjY0MyA5Ny45Mzc1IDIzOC42MTkgOTguMTY4TDIzOC4zMTQgOTguMzQzOEMyMzguMzE0IDk3Ljk2MDkgMjM4LjM1MiA5Ny42MDE2IDIzOC40MjYgOTcuMjY1NkMyMzguNTA0IDk2LjkyOTcgMjM4LjYyMyA5Ni42MzI4IDIzOC43ODMgOTYuMzc1QzIzOC45NDMgOTYuMTEzMyAyMzkuMTQ2IDk1LjkxMDIgMjM5LjM5MyA5NS43NjU2QzIzOS42NDMgOTUuNjE3MiAyMzkuOTM5IDk1LjU0MyAyNDAuMjgzIDk1LjU0M0MyNDAuMzYxIDk1LjU0MyAyNDAuNDUxIDk1LjU1MjcgMjQwLjU1MyA5NS41NzIzQzI0MC42NTQgOTUuNTg3OSAyNDAuNzI1IDk1LjYwNTUgMjQwLjc2NCA5NS42MjVaTTI0NC43MTMgOTUuNjYwMlY5Ni40OTIySDI0MS4yODVWOTUuNjYwMkgyNDQuNzEzWk0yNDIuNDQ1IDk0LjExOTFIMjQzLjUyOVYxMDAuNDNDMjQzLjUyOSAxMDAuNjQ1IDI0My41NjIgMTAwLjgwNyAyNDMuNjI5IDEwMC45MTZDMjQzLjY5NSAxMDEuMDI1IDI0My43ODEgMTAxLjA5OCAyNDMuODg3IDEwMS4xMzNDMjQzLjk5MiAxMDEuMTY4IDI0NC4xMDUgMTAxLjE4NiAyNDQuMjI3IDEwMS4xODZDMjQ0LjMxNiAxMDEuMTg2IDI0NC40MSAxMDEuMTc4IDI0NC41MDggMTAxLjE2MkMyNDQuNjA5IDEwMS4xNDMgMjQ0LjY4NiAxMDEuMTI3IDI0NC43MzYgMTAxLjExNUwyNDQuNzQyIDEwMkMyNDQuNjU2IDEwMi4wMjcgMjQ0LjU0MyAxMDIuMDUzIDI0NC40MDIgMTAyLjA3NkMyNDQuMjY2IDEwMi4xMDQgMjQ0LjEgMTAyLjExNyAyNDMuOTA0IDEwMi4xMTdDMjQzLjYzOSAxMDIuMTE3IDI0My4zOTUgMTAyLjA2NCAyNDMuMTcyIDEwMS45NTlDMjQyLjk0OSAxMDEuODU0IDI0Mi43NzEgMTAxLjY3OCAyNDIuNjM5IDEwMS40MzJDMjQyLjUxIDEwMS4xODIgMjQyLjQ0NSAxMDAuODQ2IDI0Mi40NDUgMTAwLjQyNFY5NC4xMTkxWk0yNTIuMjcxIDk4LjY1NDNIMjQ5Ljk5MlY5Ny43MzQ0SDI1Mi4yNzFDMjUyLjcxMyA5Ny43MzQ0IDI1My4wNyA5Ny42NjQxIDI1My4zNDQgOTcuNTIzNEMyNTMuNjE3IDk3LjM4MjggMjUzLjgxNiA5Ny4xODc1IDI1My45NDEgOTYuOTM3NUMyNTQuMDcgOTYuNjg3NSAyNTQuMTM1IDk2LjQwMjMgMjU0LjEzNSA5Ni4wODJDMjU0LjEzNSA5NS43ODkxIDI1NC4wNyA5NS41MTM3IDI1My45NDEgOTUuMjU1OUMyNTMuODE2IDk0Ljk5OCAyNTMuNjE3IDk0Ljc5MSAyNTMuMzQ0IDk0LjYzNDhDMjUzLjA3IDk0LjQ3NDYgMjUyLjcxMyA5NC4zOTQ1IDI1Mi4yNzEgOTQuMzk0NUgyNTAuMjU2VjEwMkgyNDkuMTI1VjkzLjQ2ODhIMjUyLjI3MUMyNTIuOTE2IDkzLjQ2ODggMjUzLjQ2MSA5My41ODAxIDI1My45MDYgOTMuODAyN0MyNTQuMzUyIDk0LjAyNTQgMjU0LjY4OSA5NC4zMzQgMjU0LjkyIDk0LjcyODVDMjU1LjE1IDk1LjExOTEgMjU1LjI2NiA5NS41NjY0IDI1NS4yNjYgOTYuMDcwM0MyNTUuMjY2IDk2LjYxNzIgMjU1LjE1IDk3LjA4NCAyNTQuOTIgOTcuNDcwN0MyNTQuNjg5IDk3Ljg1NzQgMjU0LjM1MiA5OC4xNTIzIDI1My45MDYgOTguMzU1NUMyNTMuNDYxIDk4LjU1NDcgMjUyLjkxNiA5OC42NTQzIDI1Mi4yNzEgOTguNjU0M1pNMjU2LjE2MiA5OC45MDA0Vjk4Ljc2NTZDMjU2LjE2MiA5OC4zMDg2IDI1Ni4yMjkgOTcuODg0OCAyNTYuMzYxIDk3LjQ5NDFDMjU2LjQ5NCA5Ny4wOTk2IDI1Ni42ODYgOTYuNzU3OCAyNTYuOTM2IDk2LjQ2ODhDMjU3LjE4NiA5Ni4xNzU4IDI1Ny40ODggOTUuOTQ5MiAyNTcuODQ0IDk1Ljc4OTFDMjU4LjE5OSA5NS42MjUgMjU4LjU5OCA5NS41NDMgMjU5LjAzOSA5NS41NDNDMjU5LjQ4NCA5NS41NDMgMjU5Ljg4NSA5NS42MjUgMjYwLjI0IDk1Ljc4OTFDMjYwLjYgOTUuOTQ5MiAyNjAuOTA0IDk2LjE3NTggMjYxLjE1NCA5Ni40Njg4QzI2MS40MDggOTYuNzU3OCAyNjEuNjAyIDk3LjA5OTYgMjYxLjczNCA5Ny40OTQxQzI2MS44NjcgOTcuODg0OCAyNjEuOTM0IDk4LjMwODYgMjYxLjkzNCA5OC43NjU2Vjk4LjkwMDRDMjYxLjkzNCA5OS4zNTc0IDI2MS44NjcgOTkuNzgxMiAyNjEuNzM0IDEwMC4xNzJDMjYxLjYwMiAxMDAuNTYyIDI2MS40MDggMTAwLjkwNCAyNjEuMTU0IDEwMS4xOTdDMjYwLjkwNCAxMDEuNDg2IDI2MC42MDIgMTAxLjcxMyAyNjAuMjQ2IDEwMS44NzdDMjU5Ljg5NSAxMDIuMDM3IDI1OS40OTYgMTAyLjExNyAyNTkuMDUxIDEwMi4xMTdDMjU4LjYwNSAxMDIuMTE3IDI1OC4yMDUgMTAyLjAzNyAyNTcuODUgMTAxLjg3N0MyNTcuNDk0IDEwMS43MTMgMjU3LjE4OSAxMDEuNDg2IDI1Ni45MzYgMTAxLjE5N0MyNTYuNjg2IDEwMC45MDQgMjU2LjQ5NCAxMDAuNTYyIDI1Ni4zNjEgMTAwLjE3MkMyNTYuMjI5IDk5Ljc4MTIgMjU2LjE2MiA5OS4zNTc0IDI1Ni4xNjIgOTguOTAwNFpNMjU3LjI0NiA5OC43NjU2Vjk4LjkwMDRDMjU3LjI0NiA5OS4yMTY4IDI1Ny4yODMgOTkuNTE1NiAyNTcuMzU3IDk5Ljc5NjlDMjU3LjQzMiAxMDAuMDc0IDI1Ny41NDMgMTAwLjMyIDI1Ny42OTEgMTAwLjUzNUMyNTcuODQ0IDEwMC43NSAyNTguMDMzIDEwMC45MiAyNTguMjYgMTAxLjA0NUMyNTguNDg2IDEwMS4xNjYgMjU4Ljc1IDEwMS4yMjcgMjU5LjA1MSAxMDEuMjI3QzI1OS4zNDggMTAxLjIyNyAyNTkuNjA3IDEwMS4xNjYgMjU5LjgzIDEwMS4wNDVDMjYwLjA1NyAxMDAuOTIgMjYwLjI0NCAxMDAuNzUgMjYwLjM5MyAxMDAuNTM1QzI2MC41NDEgMTAwLjMyIDI2MC42NTIgMTAwLjA3NCAyNjAuNzI3IDk5Ljc5NjlDMjYwLjgwNSA5OS41MTU2IDI2MC44NDQgOTkuMjE2OCAyNjAuODQ0IDk4LjkwMDRWOTguNzY1NkMyNjAuODQ0IDk4LjQ1MzEgMjYwLjgwNSA5OC4xNTgyIDI2MC43MjcgOTcuODgwOUMyNjAuNjUyIDk3LjU5OTYgMjYwLjUzOSA5Ny4zNTE2IDI2MC4zODcgOTcuMTM2N0MyNjAuMjM4IDk2LjkxOCAyNjAuMDUxIDk2Ljc0NjEgMjU5LjgyNCA5Ni42MjExQzI1OS42MDIgOTYuNDk2MSAyNTkuMzQgOTYuNDMzNiAyNTkuMDM5IDk2LjQzMzZDMjU4Ljc0MiA5Ni40MzM2IDI1OC40OCA5Ni40OTYxIDI1OC4yNTQgOTYuNjIxMUMyNTguMDMxIDk2Ljc0NjEgMjU3Ljg0NCA5Ni45MTggMjU3LjY5MSA5Ny4xMzY3QzI1Ny41NDMgOTcuMzUxNiAyNTcuNDMyIDk3LjU5OTYgMjU3LjM1NyA5Ny44ODA5QzI1Ny4yODMgOTguMTU4MiAyNTcuMjQ2IDk4LjQ1MzEgMjU3LjI0NiA5OC43NjU2Wk0yNjYuOTg0IDEwMC4zMThDMjY2Ljk4NCAxMDAuMTYyIDI2Ni45NDkgMTAwLjAxOCAyNjYuODc5IDk5Ljg4NDhDMjY2LjgxMiA5OS43NDggMjY2LjY3NCA5OS42MjUgMjY2LjQ2MyA5OS41MTU2QzI2Ni4yNTYgOTkuNDAyMyAyNjUuOTQzIDk5LjMwNDcgMjY1LjUyNSA5OS4yMjI3QzI2NS4xNzQgOTkuMTQ4NCAyNjQuODU1IDk5LjA2MDUgMjY0LjU3IDk4Ljk1OUMyNjQuMjg5IDk4Ljg1NzQgMjY0LjA0OSA5OC43MzQ0IDI2My44NSA5OC41ODk4QzI2My42NTQgOTguNDQ1MyAyNjMuNTA0IDk4LjI3NTQgMjYzLjM5OCA5OC4wODAxQzI2My4yOTMgOTcuODg0OCAyNjMuMjQgOTcuNjU2MiAyNjMuMjQgOTcuMzk0NUMyNjMuMjQgOTcuMTQ0NSAyNjMuMjk1IDk2LjkwODIgMjYzLjQwNCA5Ni42ODU1QzI2My41MTggOTYuNDYyOSAyNjMuNjc2IDk2LjI2NTYgMjYzLjg3OSA5Ni4wOTM4QzI2NC4wODYgOTUuOTIxOSAyNjQuMzM0IDk1Ljc4NzEgMjY0LjYyMyA5NS42ODk1QzI2NC45MTIgOTUuNTkxOCAyNjUuMjM0IDk1LjU0MyAyNjUuNTkgOTUuNTQzQzI2Ni4wOTggOTUuNTQzIDI2Ni41MzEgOTUuNjMyOCAyNjYuODkxIDk1LjgxMjVDMjY3LjI1IDk1Ljk5MjIgMjY3LjUyNSA5Ni4yMzI0IDI2Ny43MTcgOTYuNTMzMkMyNjcuOTA4IDk2LjgzMDEgMjY4LjAwNCA5Ny4xNjAyIDI2OC4wMDQgOTcuNTIzNEgyNjYuOTJDMjY2LjkyIDk3LjM0NzcgMjY2Ljg2NyA5Ny4xNzc3IDI2Ni43NjIgOTcuMDEzN0MyNjYuNjYgOTYuODQ1NyAyNjYuNTEgOTYuNzA3IDI2Ni4zMTEgOTYuNTk3N0MyNjYuMTE1IDk2LjQ4ODMgMjY1Ljg3NSA5Ni40MzM2IDI2NS41OSA5Ni40MzM2QzI2NS4yODkgOTYuNDMzNiAyNjUuMDQ1IDk2LjQ4MDUgMjY0Ljg1NyA5Ni41NzQyQzI2NC42NzQgOTYuNjY0MSAyNjQuNTM5IDk2Ljc3OTMgMjY0LjQ1MyA5Ni45MTk5QzI2NC4zNzEgOTcuMDYwNSAyNjQuMzMgOTcuMjA5IDI2NC4zMyA5Ny4zNjUyQzI2NC4zMyA5Ny40ODI0IDI2NC4zNSA5Ny41ODc5IDI2NC4zODkgOTcuNjgxNkMyNjQuNDMyIDk3Ljc3MTUgMjY0LjUwNiA5Ny44NTU1IDI2NC42MTEgOTcuOTMzNkMyNjQuNzE3IDk4LjAwNzggMjY0Ljg2NSA5OC4wNzgxIDI2NS4wNTcgOTguMTQ0NUMyNjUuMjQ4IDk4LjIxMDkgMjY1LjQ5MiA5OC4yNzczIDI2NS43ODkgOTguMzQzOEMyNjYuMzA5IDk4LjQ2MDkgMjY2LjczNiA5OC42MDE2IDI2Ny4wNzIgOTguNzY1NkMyNjcuNDA4IDk4LjkyOTcgMjY3LjY1OCA5OS4xMzA5IDI2Ny44MjIgOTkuMzY5MUMyNjcuOTg2IDk5LjYwNzQgMjY4LjA2OCA5OS44OTY1IDI2OC4wNjggMTAwLjIzNkMyNjguMDY4IDEwMC41MTQgMjY4LjAxIDEwMC43NjggMjY3Ljg5MyAxMDAuOTk4QzI2Ny43NzkgMTAxLjIyOSAyNjcuNjEzIDEwMS40MjggMjY3LjM5NSAxMDEuNTk2QzI2Ny4xOCAxMDEuNzYgMjY2LjkyMiAxMDEuODg5IDI2Ni42MjEgMTAxLjk4MkMyNjYuMzI0IDEwMi4wNzIgMjY1Ljk5IDEwMi4xMTcgMjY1LjYxOSAxMDIuMTE3QzI2NS4wNjEgMTAyLjExNyAyNjQuNTg4IDEwMi4wMTggMjY0LjIwMSAxMDEuODE4QzI2My44MTQgMTAxLjYxOSAyNjMuNTIxIDEwMS4zNjEgMjYzLjMyMiAxMDEuMDQ1QzI2My4xMjMgMTAwLjcyOSAyNjMuMDIzIDEwMC4zOTUgMjYzLjAyMyAxMDAuMDQzSDI2NC4xMTNDMjY0LjEyOSAxMDAuMzQgMjY0LjIxNSAxMDAuNTc2IDI2NC4zNzEgMTAwLjc1MkMyNjQuNTI3IDEwMC45MjQgMjY0LjcxOSAxMDEuMDQ3IDI2NC45NDUgMTAxLjEyMUMyNjUuMTcyIDEwMS4xOTEgMjY1LjM5NiAxMDEuMjI3IDI2NS42MTkgMTAxLjIyN0MyNjUuOTE2IDEwMS4yMjcgMjY2LjE2NCAxMDEuMTg4IDI2Ni4zNjMgMTAxLjEwOUMyNjYuNTY2IDEwMS4wMzEgMjY2LjcyMSAxMDAuOTI0IDI2Ni44MjYgMTAwLjc4N0MyNjYuOTMyIDEwMC42NSAyNjYuOTg0IDEwMC40OTQgMjY2Ljk4NCAxMDAuMzE4Wk0yNzIuMTQ2IDk1LjY2MDJWOTYuNDkyMkgyNjguNzE5Vjk1LjY2MDJIMjcyLjE0NlpNMjY5Ljg3OSA5NC4xMTkxSDI3MC45NjNWMTAwLjQzQzI3MC45NjMgMTAwLjY0NSAyNzAuOTk2IDEwMC44MDcgMjcxLjA2MiAxMDAuOTE2QzI3MS4xMjkgMTAxLjAyNSAyNzEuMjE1IDEwMS4wOTggMjcxLjMyIDEwMS4xMzNDMjcxLjQyNiAxMDEuMTY4IDI3MS41MzkgMTAxLjE4NiAyNzEuNjYgMTAxLjE4NkMyNzEuNzUgMTAxLjE4NiAyNzEuODQ0IDEwMS4xNzggMjcxLjk0MSAxMDEuMTYyQzI3Mi4wNDMgMTAxLjE0MyAyNzIuMTE5IDEwMS4xMjcgMjcyLjE3IDEwMS4xMTVMMjcyLjE3NiAxMDJDMjcyLjA5IDEwMi4wMjcgMjcxLjk3NyAxMDIuMDUzIDI3MS44MzYgMTAyLjA3NkMyNzEuNjk5IDEwMi4xMDQgMjcxLjUzMyAxMDIuMTE3IDI3MS4zMzggMTAyLjExN0MyNzEuMDcyIDEwMi4xMTcgMjcwLjgyOCAxMDIuMDY0IDI3MC42MDUgMTAxLjk1OUMyNzAuMzgzIDEwMS44NTQgMjcwLjIwNSAxMDEuNjc4IDI3MC4wNzIgMTAxLjQzMkMyNjkuOTQzIDEwMS4xODIgMjY5Ljg3OSAxMDAuODQ2IDI2OS44NzkgMTAwLjQyNFY5NC4xMTkxWlwiXHJcblx0XHRcdGZpbGw9XCIjMEYxNzJBXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjIwN1wiIHk9XCIxMTBcIiB3aWR0aD1cIjcwXCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdFx0PHJlY3QgeD1cIjIxM1wiIHk9XCIxMTZcIiB3aWR0aD1cIjU4XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiIGZpbGw9XCIjQ0JENUUxXCIvPlxyXG5cdDwvc3ZnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJldmlldzsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGl2W2lkPVwiamZiLXVzZS1mb3JtOnNpZGViYXJcIl17ZGlzcGxheTpub25lfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZWRpdG9yL3VzZUZvcm1CdXR0b24vaW5kZXgucGNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwrQkFDSSxZQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdltpZD1cXFwiamZiLXVzZS1mb3JtOnNpZGViYXJcXFwiXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5wY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgucGNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZG9tUmVhZHlcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVkaXRQb3N0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicGx1Z2luc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicHJpbWl0aXZlc1wiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyB3ZWxjb21lIGZyb20gJy4vd2VsY29tZUJsb2NrJztcclxuaW1wb3J0ICcuL3ByZXZpZXdCdXR0b24nO1xyXG5pbXBvcnQgJy4vdXNlRm9ybUJ1dHRvbic7XHJcbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci93ZWxjb21lLWJsb2NrJyxcclxuXHRmdW5jdGlvbiAoIGJsb2NrcyApIHtcclxuXHRcdGJsb2Nrcy5wdXNoKCB3ZWxjb21lICk7XHJcblxyXG5cdFx0cmV0dXJuIGJsb2NrcztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==