/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor-package/components/PatternInserterButton.js":
/*!************************************************************!*\
  !*** ./editor-package/components/PatternInserterButton.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_usePattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/usePattern */ "./editor-package/hooks/usePattern.js");
/* harmony import */ var _hooks_useAnotherBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAnotherBlocks */ "./editor-package/hooks/useAnotherBlocks.js");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






function PatternInserterButton({
  patternName,
  withPatternIcon = false,
  onClick = false,
  onApply = () => {},
  ...props
}) {
  const {
    ref,
    showPopover,
    setShowPopover,
    popoverProps
  } = (0,jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.useTriggerPopover)();
  const blocks = (0,_hooks_useAnotherBlocks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    pattern,
    insert,
    append
  } = (0,_hooks_usePattern__WEBPACK_IMPORTED_MODULE_1__["default"])({
    name: patternName,
    onApply
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    ref: ref,
    icon: withPatternIcon && pattern.icon,
    iconSize: "48",
    onClick: () => {
      if ('function' === typeof onClick) {
        onClick();
        return;
      }
      if (blocks.length) {
        setShowPopover(prev => !prev);
      } else {
        insert();
      }
    },
    label: pattern.description || pattern.title,
    ...props
  }), showPopover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.PopoverStandard, {
    position: 'top-start',
    noArrow: false,
    isAlternate: true,
    ...popoverProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('I want to', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isLink: true,
    isDestructive: true,
    onClick: () => insert()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('replace', 'jet-form-builder')), ' / ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isLink: true,
    onClick: () => append()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('append', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('form settings and blocks', 'jet-form-builder'))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternInserterButton);

/***/ }),

/***/ "./editor-package/components/ProSinglePattern.js":
/*!*******************************************************!*\
  !*** ./editor-package/components/ProSinglePattern.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




function ProSinglePattern({
  pattern
}) {
  var _pattern$link;
  const {
    ref,
    showPopover,
    setShowPopover,
    popoverProps
  } = (0,jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.useTriggerPopover)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "is-pro"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    ref: ref,
    icon: pattern.icon,
    onClick: () => setShowPopover(prev => !prev),
    label: pattern.description || pattern.title,
    variant: "secondary",
    iconSize: 32,
    className: "block-editor-block-variation-picker__variation"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-editor-block-variation-picker__variation-label"
  }, pattern.title), showPopover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.PopoverStandard, {
    position: 'top-start',
    noArrow: false,
    isAlternate: true,
    ...popoverProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('This is paid addon. You can buy it here:', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: (_pattern$link = pattern.link) !== null && _pattern$link !== void 0 ? _pattern$link : 'https://jetformbuilder.com/pricing/'
  }, "jetformbuilder.com")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProSinglePattern);

/***/ }),

/***/ "./editor-package/components/SinglePattern.js":
/*!****************************************************!*\
  !*** ./editor-package/components/SinglePattern.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PatternInserterButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PatternInserterButton */ "./editor-package/components/PatternInserterButton.js");


function SinglePattern({
  pattern
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PatternInserterButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: pattern.name,
    variant: "secondary",
    patternName: pattern.name,
    withPatternIcon: true,
    iconSize: 32,
    className: "block-editor-block-variation-picker__variation"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-editor-block-variation-picker__variation-label"
  }, pattern.title));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePattern);

/***/ }),

/***/ "./editor-package/hooks/useAnotherBlocks.js":
/*!**************************************************!*\
  !*** ./editor-package/hooks/useAnotherBlocks.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useBlockEditContext
} = wp.blockEditor;
const {
  useSelect
} = wp.data;

/**
 * Get root-level blocks without current block
 *
 * @returns {Object[]}
 */
function useAnotherBlocks() {
  const context = useBlockEditContext();
  return useSelect(select => select('core/block-editor').getBlocks().filter(block => block.clientId !== context.clientId), [context.isSelected, context.clientId]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAnotherBlocks);

/***/ }),

/***/ "./editor-package/hooks/usePattern.js":
/*!********************************************!*\
  !*** ./editor-package/hooks/usePattern.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useAnotherBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAnotherBlocks */ "./editor-package/hooks/useAnotherBlocks.js");
/* harmony import */ var _patternsStore_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patternsStore/constants */ "./editor-package/patternsStore/constants.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






const {
  convertFlow
} = JetFBActions;
const {
  useActions
} = JetFBHooks;

/**
 * @param name {String}
 * @param onApply {Function|undefined}
 * @returns {{blocks: Object[], pattern: Object, insert: Function, append:
 *     Function}}
 */
function usePattern({
  name,
  onApply = () => {}
}) {
  const {
    clientId
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockEditContext)();
  const blocks = (0,_useAnotherBlocks__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/editor');
  const {
    createInfoNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(wp.notices.store);
  const [actions, setActions] = useActions();
  const {
    removeBlocks,
    replaceBlocks,
    insertBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/block-editor');
  const pattern = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_patternsStore_constants__WEBPACK_IMPORTED_MODULE_1__["default"].store).getType(name), []);
  const saveRecord = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_patternsStore_constants__WEBPACK_IMPORTED_MODULE_1__["default"].store).getSetting('saveRecord'), []);
  const displayNotice = () => {
    var _pattern$applyText;
    return createInfoNotice((_pattern$applyText = pattern?.applyText) !== null && _pattern$applyText !== void 0 ? _pattern$applyText : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('New blocks and actions have been added', 'jet-form-builder'), {
      type: 'snackbar'
    });
  };
  function insert(editedPattern = {}) {
    var _editedPattern$action;
    applyPattern(editedPattern);
    editedPattern = {
      ...pattern,
      ...editedPattern
    };
    removeBlocks(blocks.map(({
      clientId: id
    }) => id));

    // inserting actions
    const flow = convertFlow((_editedPattern$action = editedPattern?.actions) !== null && _editedPattern$action !== void 0 ? _editedPattern$action : []);
    if (saveRecord) {
      flow.add('save_record');
    }
    setActions(flow.list);
    displayNotice();
    onApply();
  }
  function append(editedPattern = {}) {
    var _editedPattern$action2;
    applyPattern(editedPattern);
    editedPattern = {
      ...pattern,
      ...editedPattern
    };

    // inserting actions
    const flow = convertFlow((_editedPattern$action2 = editedPattern?.actions) !== null && _editedPattern$action2 !== void 0 ? _editedPattern$action2 : []);
    if (saveRecord) {
      flow.add('save_record');
    }
    setActions([...actions, ...flow.list]);
    displayNotice();
    onApply();
  }
  function applyPattern(editedPattern = {}) {
    var _editedPattern$blocks, _editedPattern$blocks2;
    editedPattern = {
      ...pattern,
      ...editedPattern
    };

    // inserting blocks
    // clientId may be empty if we use this hook outside block-edit function
    clientId ? replaceBlocks([clientId], (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlocksFromInnerBlocksTemplate)((_editedPattern$blocks = editedPattern?.blocks) !== null && _editedPattern$blocks !== void 0 ? _editedPattern$blocks : []), 0) : insertBlocks((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlocksFromInnerBlocksTemplate)((_editedPattern$blocks2 = editedPattern?.blocks) !== null && _editedPattern$blocks2 !== void 0 ? _editedPattern$blocks2 : []));
    const {
      actions: patternActions,
      blocks: patternBlocks,
      name,
      icon,
      title,
      description,
      view,
      applyText,
      ...rawFormData
    } = editedPattern;
    if (!Object.keys(rawFormData).length) {
      return;
    }
    editPost(rawFormData);
  }
  return {
    pattern,
    insert,
    append,
    blocks
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePattern);

/***/ }),

/***/ "./editor-package/patterns/contact.js":
/*!********************************************!*\
  !*** ./editor-package/patterns/contact.js ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'contact',
  title: __('Contact form', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.8 10C16.3582 10 16 10.4477 16 11C16 11.5523 16.3582 12 16.8 12H31.2C31.6418 12 32 11.5523 32 11C32 10.4477 31.6418 10 31.2 10H16.8Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 19C12 17.3431 13.3431 16 15 16H33C34.6569 16 36 17.3431 36 19C36 20.6569 34.6569 22 33 22H15C13.3431 22 12 20.6569 12 19ZM15 18C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H33C33.5523 20 34 19.5523 34 19C34 18.4477 33.5523 18 33 18H15Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 24C13.3431 24 12 25.3431 12 27C12 28.6569 13.3431 30 15 30H33C34.6569 30 36 28.6569 36 27C36 25.3431 34.6569 24 33 24H15ZM14 27C14 26.4477 14.4477 26 15 26H33C33.5523 26 34 26.4477 34 27C34 27.5523 33.5523 28 33 28H15C14.4477 28 14 27.5523 14 27Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 35C18 33.3431 19.3431 32 21 32H27C28.6569 32 30 33.3431 30 35C30 36.6569 28.6569 38 27 38H21C19.3431 38 18 36.6569 18 35ZM21 34C20.4477 34 20 34.4477 20 35C20 35.5523 20.4477 36 21 36H27C27.5523 36 28 35.5523 28 35C28 34.4477 27.5523 34 27 34H21Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 8C8 5.79086 9.79086 4 12 4H36C38.2091 4 40 5.79086 40 8V40C40 42.2091 38.2091 44 36 44H12C9.79086 44 8 42.2091 8 40V8ZM12 6H36C37.1046 6 38 6.89543 38 8V40C38 41.1046 37.1046 42 36 42H12C10.8954 42 10 41.1046 10 40V8C10 6.89543 10.8954 6 12 6Z"
  })),
  actions: [{
    'type': 'send_email',
    'settings': {
      'mail_to': 'form',
      'from_field': 'email',
      'subject': '%subject%',
      'content': '%message%'
    }
  }],
  blocks: [['jet-forms/text-field', {
    'name': 'email',
    'label': 'Email',
    'field_type': 'email'
  }], ['jet-forms/text-field', {
    'name': 'subject',
    'label': 'Subject'
  }], ['jet-forms/wysiwyg-field', {
    'name': 'message',
    'label': 'Message'
  }], ['jet-forms/submit-field']],
  applyText: __('4 blocks and Send Email action have been added', 'jet-form-builder')
});

/***/ }),

/***/ "./editor-package/patterns/default.js":
/*!********************************************!*\
  !*** ./editor-package/patterns/default.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  __
} = wp.i18n;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'default',
  title: __('From scratch', 'jet-form-builder'),
  blocks: [['jet-forms/hidden-field', {
    'name': 'post_id',
    'field_value': 'post_id'
  }], ['jet-forms/text-field', {
    'name': 'text_field',
    'label': 'Text'
  }], ['jet-forms/submit-field']],
  actions: [],
  applyText: __('3 block has been added', 'jet-form-builder')
});

/***/ }),

/***/ "./editor-package/patterns/donation.js":
/*!*********************************************!*\
  !*** ./editor-package/patterns/donation.js ***!
  \*********************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'donation',
  title: __('Paypal donation', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 19.0075C12 18.4511 12.4477 18.0001 13 18.0001H27C27.5523 18.0001 28 18.4511 28 19.0075C28 19.5639 27.5523 20.0149 27 20.0149H13C12.4477 20.0149 12 19.5639 12 19.0075Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13 22.0297C12.4477 22.0297 12 22.4807 12 23.0371C12 23.5934 12.4477 24.0445 13 24.0445H21C21.5523 24.0445 22 23.5934 22 23.0371C22 22.4807 21.5523 22.0297 21 22.0297H13Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M38.4179 29.1868C39.3793 28.4563 40 27.3006 40 26V12C40 9.79086 38.2091 8 36 8H12C9.79086 8 8 9.79086 8 12V26C8 28.2091 9.79086 30 12 30H25.0524L24.2057 34.8272C24.0984 35.4393 24.5693 36 25.1907 36H27.683L27.1995 38.8318C27.0952 39.4425 27.5657 40.0001 28.1852 40.0001H31.7299C32.2172 40.0001 32.6335 39.6489 32.7156 39.1687L33.1342 36.7206C33.8865 36.6923 35.6504 36.5206 36.3404 36.1613L36.3467 36.158C37.0997 35.7624 37.7221 35.1918 38.1818 34.4654C38.6527 33.7235 38.9002 32.8945 38.9776 32.0383L38.9782 32.031C39.046 31.2507 38.96 30.4605 38.6605 29.7069C38.5903 29.5269 38.5093 29.3533 38.4179 29.1868ZM36 10H12C10.9003 10 10.0079 10.8875 10.0001 11.9854H37.9999C37.9921 10.8875 37.0997 10 36 10ZM38 14.0001H10V26C10 27.1046 10.8954 28 12 28H25.4032L26.3102 22.8287C26.3943 22.3497 26.8107 22.0006 27.297 22.0015L32.3783 22.0106L32.4074 22.0115C33.3187 22.0392 34.229 22.2741 35.0217 22.8279C35.7602 23.336 36.3027 24.0245 36.6306 24.8434C36.9553 25.6382 37.0506 26.4763 36.976 27.3126L36.9754 27.3196C36.9656 27.4252 36.9534 27.5302 36.9386 27.6347C36.975 27.6572 37.0113 27.6803 37.0473 27.7042C37.6189 27.3521 38 26.7206 38 26V14.0001ZM31.5153 30.2977C31.6096 30.2967 31.7023 30.2929 31.7934 30.2864C32.303 30.2501 32.7625 30.1282 33.1718 29.9207L33.185 29.9139L33.1958 29.9083C33.6942 29.6486 34.0939 29.287 34.3948 28.8236L34.399 28.8171L34.4054 28.8073C34.675 28.3888 34.8485 27.9035 34.9258 27.3514L34.9262 27.3487C34.9359 27.2791 34.9441 27.2084 34.9508 27.1367C34.9829 26.7767 34.9672 26.4385 34.9036 26.122L34.898 26.0948C34.861 25.9187 34.8091 25.7495 34.7423 25.587C34.6085 25.2504 34.4168 24.9627 34.1672 24.7238L34.1505 24.708C34.0589 24.622 33.9597 24.5424 33.8528 24.4693C33.4548 24.1894 32.9596 24.0388 32.3673 24.0175L32.3448 24.0168L28.1664 24.0099L26.5 34H28L28.6711 30.2978H31.4275C31.4475 30.298 31.4674 30.298 31.4872 30.2979L31.5153 30.2977ZM30.3948 32.4614L30.4224 32.3041C31.347 32.3071 33.2687 32.1271 34.1009 31.7052L34.1072 31.702C34.9281 31.2822 35.6047 30.6781 36.1051 29.9083C36.1524 29.8358 36.1976 29.7625 36.2409 29.6884L36.2496 29.6968L36.264 29.7108C36.4793 29.9225 36.6447 30.1775 36.7601 30.4758C36.8178 30.6198 36.8625 30.7698 36.8945 30.9258L36.8993 30.9499C36.9541 31.2304 36.9676 31.5301 36.9399 31.8492C36.9342 31.9127 36.9271 31.9753 36.9188 32.037L36.9184 32.0394C36.8517 32.5286 36.7021 32.9587 36.4695 33.3297L36.464 33.3383L36.4604 33.3441C36.2008 33.7548 35.856 34.0752 35.426 34.3054L35.4167 34.3103L35.4053 34.3163C35.1352 34.457 34.8398 34.5533 34.5189 34.6052C34.3844 34.6269 34.2454 34.6409 34.102 34.647C34.0605 34.6488 34.0186 34.6499 33.9763 34.6504L33.9522 34.6506C33.9351 34.6507 33.9179 34.6507 33.9007 34.6506L31.6059 34.647L31 37.9999H29.5L30.3948 32.4614Z"
  })),
  actions: [],
  blocks: [['jet-forms/number-field', {
    'name': 'amount',
    'label': 'Amount'
  }], ['jet-forms/submit-field']],
  meta: {
    _jf_gateways: '{"gateway":"paypal","paypal":{"use_global":true,"currency":"USD","scenario":{"id":"PAY_NOW"}},"price_field":"price"}'
  },
  applyText: __('2 blocks and PayPal Gateway have been added', 'jet-form-builder')
});

/***/ }),

/***/ "./editor-package/patterns/feedback.js":
/*!*********************************************!*\
  !*** ./editor-package/patterns/feedback.js ***!
  \*********************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'name': 'feedback',
  'title': __('Feedback', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11 14.0444C10.4477 14.0444 10 14.4954 10 15.0517C10 15.6081 10.4477 16.0591 11 16.0591H31C31.5523 16.0591 32 15.6081 32 15.0517C32 14.4954 31.5523 14.0444 31 14.0444H11Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10 19.0813C10 18.5249 10.4477 18.0739 11 18.0739H31C31.5523 18.0739 32 18.5249 32 19.0813C32 19.6377 31.5523 20.0887 31 20.0887H11C10.4477 20.0887 10 19.6377 10 19.0813Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11 22.1035C10.4477 22.1035 10 22.5545 10 23.1109C10 23.6672 10.4477 24.1183 11 24.1183H26C26.5523 24.1183 27 23.6672 27 23.1109C27 22.5545 26.5523 22.1035 26 22.1035H11Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 12.0296C6 9.8041 7.79086 8 10 8H32C34.2091 8 36 9.8041 36 12.0296V23.1109H38C40.2091 23.1109 42 24.915 42 27.1404V33.1848C42 35.4103 40.2091 37.2144 38 37.2144H37.2857L34.8664 39.839C34.6686 40.0537 34.3314 40.0537 34.1336 39.839L31.7143 37.2144H26C23.7909 37.2144 22 35.4103 22 33.1848V30.1626H19.2143L15.8664 33.7947C15.6686 34.0093 15.3314 34.0093 15.1336 33.7947L11.7857 30.1626H10C7.79086 30.1626 6 28.3585 6 26.1331V12.0296ZM12.6579 28.1478L15.5 31.2312L18.3421 28.1478H32C33.1046 28.1478 34 27.2458 34 26.1331V12.0296C34 10.9168 33.1046 10.0148 32 10.0148H10C8.89543 10.0148 8 10.9168 8 12.0296V26.1331C8 27.2458 8.89543 28.1478 10 28.1478H12.6579ZM24 30.1626V33.1848C24 34.2975 24.8954 35.1996 26 35.1996H32.5864L34.5 37.2756L36.4136 35.1996H38C39.1046 35.1996 40 34.2975 40 33.1848V27.1404C40 26.0277 39.1046 25.1257 38 25.1257H36V26.1331C36 28.3585 34.2091 30.1626 32 30.1626H24Z"
  })),
  'actions': [{
    'type': 'send_email',
    'settings': {
      'mail_to': 'form',
      'from_field': 'email',
      'subject': 'User feedback',
      'content': 'Name: %name% - %rating%<br/>%how_improve%'
    }
  }],
  'blocks': [['jet-forms/text-field', {
    'name': 'name',
    'label': 'Name',
    'required': true
  }], ['jet-forms/text-field', {
    'name': 'email',
    'label': 'Email',
    'field_type': 'email',
    'required': true
  }], ['jet-forms/radio-field', {
    'name': 'rating',
    'label': 'Please rate our website',
    'required': true
  }], ['jet-forms/textarea-field', {
    'name': 'how_improve',
    'label': 'How would you suggest to improve it?'
  }], ['jet-forms/submit-field']],
  applyText: __('5 blocks and Send Email action have been added', 'jet-form-builder')
});

/***/ }),

/***/ "./editor-package/patterns/insert.post.js":
/*!************************************************!*\
  !*** ./editor-package/patterns/insert.post.js ***!
  \************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'insert_post',
  title: __('Insert Post', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 15.0074C12 14.451 12.4477 14 13 14H27C27.5523 14 28 14.451 28 15.0074C28 15.5638 27.5523 16.0148 27 16.0148H13C12.4477 16.0148 12 15.5638 12 15.0074Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13 18.0296C12.4477 18.0296 12 18.4806 12 19.037C12 19.5933 12.4477 20.0444 13 20.0444H27C27.5523 20.0444 28 19.5933 28 19.037C28 18.4806 27.5523 18.0296 27 18.0296H13Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13 22.0591C12.4477 22.0591 12 22.5102 12 23.0665C12 23.6229 12.4477 24.0739 13 24.0739H22C22.5523 24.0739 23 23.6229 23 23.0665C23 22.5102 22.5523 22.0591 22 22.0591H13Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 26.9926C12 26.4362 12.4477 25.9852 13 25.9852H19C19.5523 25.9852 20 26.4362 20 26.9926C20 27.549 19.5523 28 19 28H13C12.4477 28 12 27.549 12 26.9926Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M30 28C30 27.4477 30.4477 27 31 27C31.5523 27 32 27.4477 32 28V30H34C34.5523 30 35 30.4477 35 31C35 31.5523 34.5523 32 34 32H32V34C32 34.5523 31.5523 35 31 35C30.4477 35 30 34.5523 30 34V32H28C27.4477 32 27 31.5523 27 31C27 30.4477 27.4477 30 28 30H30V28Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32 12V22.0549C36.5 22.5524 40 26.3674 40 31C40 35.9706 35.9706 40 31 40C28.8567 40 26.8884 39.2508 25.3427 38H12C9.79086 38 8 36.2091 8 34V12C8 9.79086 9.79086 8 12 8H28C30.2091 8 32 9.79086 32 12ZM12 10H28C29.1046 10 30 10.8954 30 12V22.0549C25.5 22.5524 22 26.3674 22 31C22 32.8501 22.5583 34.5699 23.5155 36H12C10.8954 36 10 35.1046 10 34V12C10 10.8954 10.8954 10 12 10ZM38 31C38 34.866 34.866 38 31 38C27.134 38 24 34.866 24 31C24 27.134 27.134 24 31 24C34.866 24 38 27.134 38 31Z"
  })),
  actions: [{
    'type': 'insert_post',
    'settings': {
      'fields_map': {
        'title': 'post_title',
        'excerpt': 'post_excerpt',
        'content': 'post_content'
      },
      'post_type': 'post'
    }
  }],
  blocks: [['jet-forms/text-field', {
    'name': 'title',
    'label': 'Post Title'
  }], ['jet-forms/textarea-field', {
    'name': 'excerpt',
    'label': 'Post Excerpt'
  }], ['jet-forms/wysiwyg-field', {
    'name': 'content',
    'label': 'Post Content'
  }], ['jet-forms/submit-field']],
  applyText: __('4 blocks and Insert/Update Post action have been added', 'jet-form-builder')
});

/***/ }),

/***/ "./editor-package/patterns/newsletter.js":
/*!***********************************************!*\
  !*** ./editor-package/patterns/newsletter.js ***!
  \***********************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'newsletter',
  title: __('Newsletter Signup Form', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M29.7071 14.7071C30.0976 14.3166 30.0976 13.6834 29.7071 13.2929C29.3166 12.9024 28.6834 12.9024 28.2929 13.2929L23 18.5858L19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929C17.9024 15.6834 17.9024 16.3166 18.2929 16.7071L21.9393 20.3536C22.5251 20.9393 23.4749 20.9393 24.0607 20.3536L29.7071 14.7071Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.4701 21.7063L14 18.2511V11C14 9.34315 15.3431 8 17 8H31C32.6569 8 34 9.34315 34 11V18.2511L39.5299 21.7063C39.8223 21.889 40 22.2095 40 22.5544V37C40 38.6569 38.6569 40 37 40H11C9.34315 40 8 38.6569 8 37V22.5544C8 22.2095 8.17766 21.889 8.4701 21.7063ZM17 10H31C31.5523 10 32 10.4477 32 11V25.6793L29.2193 27.6258L25.4551 23.6332C24.6657 22.7958 23.3341 22.7958 22.5446 23.6332L18.7806 27.6257L16 25.6793V11C16 10.4477 16.4477 10 17 10ZM17.394 29.0965L10 23.9207V36.9393L17.394 29.0965ZM14 20.6094L11.2298 22.3402L14 24.2793V20.6094ZM34 24.2793V20.6094L36.7701 22.3402L34 24.2793ZM30.6059 29.0966L38 23.9207V36.9395L30.6059 29.0966ZM10.991 38H37.009L37 38H11L10.991 38ZM11.759 37.9891H36.2408L23.9999 25.0051L11.759 37.9891Z"
  })),
  actions: [{
    'type': 'mailchimp'
  }],
  blocks: [['core/columns', {}, [['core/column', {}, [['jet-forms/text-field', {
    'name': 'email',
    'field_type': 'email',
    'placeholder': 'Enter you email'
  }]]], ['core/column', {}, [['jet-forms/submit-field']]]]]],
  applyText: __('2 form fields and Mailchimp action have been added', 'jet-form-builder')
});

/***/ }),

/***/ "./editor-package/patterns/register.user.js":
/*!**************************************************!*\
  !*** ./editor-package/patterns/register.user.js ***!
  \**************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'register_user',
  title: __('Register User', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M32 28C31.4477 28 31 28.4477 31 29V31H29C28.4477 31 28 31.4477 28 32C28 32.5523 28.4477 33 29 33H31V35C31 35.5523 31.4477 36 32 36C32.5523 36 33 35.5523 33 35V33H35C35.5523 33 36 32.5523 36 32C36 31.4477 35.5523 31 35 31H33V29C33 28.4477 32.5523 28 32 28Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M25.3027 27.6227C24.9834 27.5003 24.8026 27.3845 24.7072 27.2891C24.2501 26.8318 24.0892 26.4008 24.0318 25.8957C27.1814 25.2836 29 21.9956 29 18.9926L29 18.8929C29.0001 17.4806 29.0001 16.4097 28.8614 15.577C28.7049 14.6375 28.3659 13.9425 27.7072 13.2837C26.8574 12.4335 25.4526 11.6321 24.8214 11.2916L24.0627 9.01449C23.8609 8.409 23.2786 7.96465 22.5863 8.00277C21.946 8.03803 20.5966 8.16364 19.1161 8.62065C17.645 9.07477 15.9523 9.88447 14.7317 11.3498C12.9813 13.451 12.9894 15.7657 12.9986 18.4079C12.9993 18.601 13 18.796 13 18.9926C13 21.9956 14.8186 25.2836 17.9682 25.8957C17.9108 26.4008 17.7499 26.8318 17.2928 27.2891C17.2043 27.3776 17.002 27.5046 16.5958 27.6447C16.2031 27.7802 15.7235 27.8946 15.158 28.0203C15.0625 28.0415 14.9645 28.063 14.8643 28.085C13.8394 28.31 12.5881 28.5846 11.5526 29.1025C10.512 29.6231 9.6057 30.2018 8.96901 30.998C8.30377 31.8298 8 32.8117 8 33.9984V36.4996C8 37.328 8.67157 37.9996 9.5 37.9996H26.7079C28.1182 39.2446 29.9709 40 32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C29.1974 24 26.7315 25.4411 25.3027 27.6227ZM22.2927 10.0294C21.6709 10.0858 20.719 10.219 19.706 10.5317C18.428 10.9262 17.1445 11.578 16.2683 12.6299C14.9968 14.1564 14.9979 15.7494 14.9998 18.6379L15 18.9926C15 21.5216 16.5799 23.7403 18.6143 23.9731C19.3063 24.0523 20.0196 24.6348 19.995 25.5226C19.9682 26.488 19.7931 27.6167 18.7072 28.7031C18.2957 29.1148 17.748 29.3629 17.248 29.5354C16.7344 29.7126 16.1515 29.8483 15.592 29.9726L15.3351 30.0295C14.254 30.2685 13.2475 30.491 12.4474 30.8912C11.488 31.3711 10.8943 31.7927 10.531 32.2471C10.1962 32.6657 10 33.1844 10 33.9984V35.9996H25.07C24.3895 34.823 24 33.457 24 32C24 31.0991 24.1489 30.233 24.4235 29.4249C24.0212 29.2562 23.6187 29.0292 23.2928 28.7031C22.2069 27.6167 22.0318 26.488 22.005 25.5226C21.9804 24.6348 22.6937 24.0523 23.3857 23.9731C25.4201 23.7403 27 21.5216 27 18.9926C27 17.4531 26.9966 16.554 26.8886 15.9056C26.7951 15.3445 26.6341 15.0391 26.2928 14.6976C25.5989 14.0034 24.2493 13.2497 23.7174 12.9694C23.3781 12.7907 23.1115 12.4865 22.9858 12.1095L22.2927 10.0294ZM32 38C35.3137 38 38 35.3137 38 32C38 28.6863 35.3137 26 32 26C28.6863 26 26 28.6863 26 32C26 35.3137 28.6863 38 32 38Z"
  })),
  actions: [{
    'type': 'verification',
    settings: {
      'mail_to': 'email'
    }
  }, {
    'type': 'register_user',
    'settings': {
      'fields_map': {
        'email': 'email',
        'login': 'login',
        'password': '_jfb_verification_token',
        'confirm_password': '_jfb_verification_token'
      },
      'log_in': true
    }
  }],
  blocks: [['jet-forms/text-field', {
    'name': 'email',
    'label': 'Email',
    'field_type': 'email'
  }], ['jet-forms/text-field', {
    'name': 'login',
    'label': 'Login'
  }], ['jet-forms/submit-field']],
  applyText: __('3 blocks and Register User with Verification action have been added', 'jet-form-builder')
});

/***/ }),

/***/ "./editor-package/patterns/reset.password.js":
/*!***************************************************!*\
  !*** ./editor-package/patterns/reset.password.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProSinglePattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProSinglePattern */ "./editor-package/components/ProSinglePattern.js");


const {
  __
} = wp.i18n;
const {
  resetPassPattern
} = JetFormEditorData.utmLinks;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'reset_password',
  title: __('Reset Password', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M39.8519 14.213C39.3098 16.3883 37.3431 18 35 18C32.2386 18 30 15.7614 30 13C30 10.2386 32.2386 8 35 8C36.6357 8 38.088 8.78545 39.0002 9.99976H38C37.4477 9.99976 37 10.4475 37 10.9998C37 11.552 37.4477 11.9998 38 11.9998H40.9777L41 12C41.5178 12 41.9436 11.6065 41.9948 11.1022C41.9983 11.0686 42 11.0343 42 10.9998V8C42 7.44772 41.5523 7 41 7C40.4477 7 40 7.44772 40 8V8.10102C38.7295 6.80447 36.9587 6 35 6C31.134 6 28 9.13401 28 13C28 16.866 31.134 20 35 20C38.2804 20 41.0337 17.7436 41.7926 14.6982L39.8519 14.213Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 33.874C21.7252 33.4299 23 31.8638 23 30C23 27.7909 21.2091 26 19 26C16.7909 26 15 27.7909 15 30C15 31.8638 16.2748 33.4299 18 33.874V37C18 37.5523 18.4477 38 19 38C19.5523 38 20 37.5523 20 37V33.874ZM21 30C21 31.1046 20.1046 32 19 32C17.8954 32 17 31.1046 17 30C17 28.8954 17.8954 28 19 28C20.1046 28 21 28.8954 21 30Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 22C30.2091 22 32 23.7909 32 26V38C32 40.2091 30.2091 42 28 42H10C7.79086 42 6 40.2091 6 38V26C6 23.7909 7.79086 22 10 22V19C10 14.0294 14.0294 10 19 10C23.9706 10 28 14.0294 28 19V22ZM26 19V22H24V19C24 16.2386 21.7614 14 19 14C16.2386 14 14 16.2386 14 19V22H12V19C12 15.134 15.134 12 19 12C22.866 12 26 15.134 26 19ZM22 19V22H16V19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19ZM30 26C30 24.8954 29.1046 24 28 24H10C8.89543 24 8 24.8954 8 26V38C8 39.1046 8.89543 40 10 40H28C29.1046 40 30 39.1046 30 38V26Z"
  })),
  blocks: [],
  actions: [],
  view: _components_ProSinglePattern__WEBPACK_IMPORTED_MODULE_1__["default"],
  link: resetPassPattern
});

/***/ }),

/***/ "./editor-package/patterns/user.login.js":
/*!***********************************************!*\
  !*** ./editor-package/patterns/user.login.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProSinglePattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProSinglePattern */ "./editor-package/components/ProSinglePattern.js");


const {
  __
} = wp.i18n;
const {
  userLoginPattern
} = JetFormEditorData.utmLinks;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'user_login',
  title: __('User Login', 'jet-form-builder'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M34 33C34 33.7532 33.5837 34.4091 32.9686 34.7502C32.9891 34.8301 33 34.9138 33 35V36C33 36.5523 32.5523 37 32 37C31.4477 37 31 36.5523 31 36V35C31 34.9138 31.0109 34.8301 31.0314 34.7502C30.4163 34.4091 30 33.7532 30 33C30 31.8954 30.8954 31 32 31C33.1046 31 34 31.8954 34 33ZM32 33.7692C32.4248 33.7692 32.7692 33.4248 32.7692 33C32.7692 32.5752 32.4248 32.2308 32 32.2308C31.5752 32.2308 31.2308 32.5752 31.2308 33C31.2308 33.4248 31.5752 33.7692 32 33.7692Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26.6739 28C26.193 27.8933 25.7793 27.7911 25.4313 27.6698C25.0307 27.53 24.8148 27.3967 24.7072 27.2891C24.2501 26.8318 24.0892 26.4008 24.0318 25.8957C27.1814 25.2836 29 21.9956 29 18.9926L29 18.8929C29.0001 17.4806 29.0001 16.4097 28.8614 15.577C28.7049 14.6375 28.3659 13.9425 27.7072 13.2837C26.8574 12.4335 25.4526 11.6321 24.8214 11.2916L24.0627 9.01449C23.8609 8.409 23.2786 7.96465 22.5863 8.00277C21.946 8.03803 20.5966 8.16364 19.1161 8.62065C17.645 9.07477 15.9523 9.88447 14.7317 11.3498C12.9813 13.451 12.9894 15.7657 12.9986 18.4079C12.9993 18.601 13 18.796 13 18.9926C13 21.9956 14.8186 25.2836 17.9682 25.8957C17.9108 26.4008 17.7499 26.8318 17.2928 27.2891C17.2043 27.3776 17.002 27.5046 16.5958 27.6447C16.2031 27.7802 15.7235 27.8946 15.158 28.0203C15.0625 28.0415 14.9645 28.063 14.8643 28.085C13.8394 28.31 12.5881 28.5846 11.5526 29.1025C10.512 29.6231 9.6057 30.2018 8.96901 30.998C8.30377 31.8298 8 32.8117 8 33.9984V36.4996C8 37.328 8.67157 37.9996 9.5 37.9996H24C24 39.1042 24.8954 40 26 40H38C39.1046 40 40 39.1046 40 38V30C40 28.8954 39.1046 28 38 28H36V27C36 24.7909 34.2091 23 32 23C29.7909 23 28 24.7909 28 27V28H26.6739ZM22.2927 10.0294C21.6709 10.0858 20.719 10.219 19.706 10.5317C18.428 10.9262 17.1445 11.578 16.2683 12.6299C14.9968 14.1564 14.9979 15.7494 14.9998 18.6379L15 18.9926C15 21.5216 16.5799 23.7403 18.6143 23.9731C19.3063 24.0523 20.0196 24.6348 19.995 25.5226C19.9682 26.488 19.7931 27.6167 18.7072 28.7031C18.2957 29.1148 17.748 29.3629 17.248 29.5354C16.7344 29.7126 16.1515 29.8483 15.592 29.9726L15.3351 30.0295C14.254 30.2685 13.2475 30.491 12.4474 30.8912C11.488 31.3711 10.8943 31.7927 10.531 32.2471C10.1962 32.6657 10 33.1844 10 33.9984V35.9996H24V30C24 29.75 24.0459 29.5108 24.1296 29.2902C23.829 29.1393 23.5391 28.9495 23.2928 28.7031C22.2069 27.6167 22.0318 26.488 22.005 25.5226C21.9804 24.6348 22.6937 24.0523 23.3857 23.9731C25.4201 23.7403 27 21.5216 27 18.9926C27 17.4531 26.9966 16.554 26.8886 15.9056C26.7951 15.3445 26.6341 15.0391 26.2928 14.6976C25.5989 14.0034 24.2493 13.2497 23.7174 12.9694C23.3781 12.7907 23.1115 12.4865 22.9858 12.1095L22.2927 10.0294ZM34 28V27C34 25.8954 33.1046 25 32 25C30.8954 25 30 25.8954 30 27V28H34ZM38 30V38H26V30H38Z"
  })),
  blocks: [],
  actions: [],
  view: _components_ProSinglePattern__WEBPACK_IMPORTED_MODULE_1__["default"],
  link: userLoginPattern
});

/***/ }),

/***/ "./editor-package/patternsStore/actions.js":
/*!*************************************************!*\
  !*** ./editor-package/patternsStore/actions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./editor-package/patternsStore/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  register(items) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].register,
      items
    };
  },
  unRegister(types) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].unRegister,
      types
    };
  },
  updateSettings(settings) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].updateSettings,
      settings
    };
  }
});

/***/ }),

/***/ "./editor-package/patternsStore/constants.js":
/*!***************************************************!*\
  !*** ./editor-package/patternsStore/constants.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: 'jet-forms/patterns',
  register: 'REGISTER',
  unRegister: 'UNREGISTER',
  updateSettings: 'UPDATE_SETTING'
});

/***/ }),

/***/ "./editor-package/patternsStore/dispatchers.js":
/*!*****************************************************!*\
  !*** ./editor-package/patternsStore/dispatchers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./editor-package/patternsStore/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./editor-package/patternsStore/selectors.js");
/* harmony import */ var _components_SinglePattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SinglePattern */ "./editor-package/components/SinglePattern.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].register](state, action) {
    if (!Array.isArray(action.items)) {
      action.items = [action.items];
    }
    for (let item of action.items) {
      if (!item.hasOwnProperty('name')) {
        continue;
      }
      const issetIndex = _selectors__WEBPACK_IMPORTED_MODULE_1__["default"].getTypeIndex(state, item.name);

      // is new pattern type
      if (-1 === issetIndex) {
        if (!item?.view) {
          item.view = _components_SinglePattern__WEBPACK_IMPORTED_MODULE_2__["default"];
        }
        state.types.push({
          ...item
        });
      } else {
        const editedPattern = {
          ...state.types[issetIndex],
          ...item
        };
        if (!editedPattern?.view) {
          editedPattern.view = _components_SinglePattern__WEBPACK_IMPORTED_MODULE_2__["default"];
        }
        state.types[issetIndex] = editedPattern;
      }
    }
    return state;
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].unRegister](state, action) {
    const {
      types
    } = action;
    state.types = state.types.filter(({
      name
    }) => !types.includes(name));
    return state;
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].updateSettings](state, action) {
    const {
      settings
    } = action;
    return {
      ...state,
      settings: {
        ...state.settings,
        ...settings
      }
    };
  }
});

/***/ }),

/***/ "./editor-package/patternsStore/index.js":
/*!***********************************************!*\
  !*** ./editor-package/patternsStore/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./editor-package/patternsStore/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./editor-package/patternsStore/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./editor-package/patternsStore/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./editor-package/patternsStore/constants.js");




const {
  createReduxStore
} = wp.data;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReduxStore(_constants__WEBPACK_IMPORTED_MODULE_3__["default"].store, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./editor-package/patternsStore/reducer.js":
/*!*************************************************!*\
  !*** ./editor-package/patternsStore/reducer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchers */ "./editor-package/patternsStore/dispatchers.js");

const DEFAULT_STATE = {
  types: [],
  settings: {
    saveRecord: true
  }
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = DEFAULT_STATE, action) {
  const callback = _dispatchers__WEBPACK_IMPORTED_MODULE_0__["default"][action?.type];
  if (callback) {
    return callback(state, action);
  }
  return state;
}

/***/ }),

/***/ "./editor-package/patternsStore/selectors.js":
/*!***************************************************!*\
  !*** ./editor-package/patternsStore/selectors.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectors = {
  getTypeIndex(state, name) {
    return state.types.findIndex(pattern => pattern.name === name);
  },
  getTypes(state) {
    return state.types.filter(({
      name
    }) => 'default' !== name);
  },
  getType(state, slug) {
    const index = selectors.getTypeIndex(state, slug);
    return state.types[index];
  },
  getSetting(state, name) {
    return state.settings[name];
  },
  getSettings(state) {
    return state.settings;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...selectors
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "jet-form-builder-components":
/*!*************************************!*\
  !*** external ["jfb","components"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["jfb"]["components"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/*!*********************************!*\
  !*** ./editor-package/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patternsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patternsStore */ "./editor-package/patternsStore/index.js");
/* harmony import */ var _patternsStore_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patternsStore/constants */ "./editor-package/patternsStore/constants.js");
/* harmony import */ var _patterns_insert_post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/insert.post.js */ "./editor-package/patterns/insert.post.js");
/* harmony import */ var _patterns_default_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/default.js */ "./editor-package/patterns/default.js");
/* harmony import */ var _patterns_feedback_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/feedback.js */ "./editor-package/patterns/feedback.js");
/* harmony import */ var _patterns_register_user_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns/register.user.js */ "./editor-package/patterns/register.user.js");
/* harmony import */ var _patterns_reset_password_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patterns/reset.password.js */ "./editor-package/patterns/reset.password.js");
/* harmony import */ var _patterns_user_login_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patterns/user.login.js */ "./editor-package/patterns/user.login.js");
/* harmony import */ var _patterns_donation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/donation.js */ "./editor-package/patterns/donation.js");
/* harmony import */ var _patterns_contact_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/contact.js */ "./editor-package/patterns/contact.js");
/* harmony import */ var _patterns_newsletter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/newsletter.js */ "./editor-package/patterns/newsletter.js");
/* harmony import */ var _hooks_usePattern__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/usePattern */ "./editor-package/hooks/usePattern.js");
/* harmony import */ var _components_PatternInserterButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/PatternInserterButton */ "./editor-package/components/PatternInserterButton.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__);
var _window$JetFBComponen, _window$JetFBHooks;














(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_13__.register)(_patternsStore__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_13__.dispatch)(_patternsStore_constants__WEBPACK_IMPORTED_MODULE_1__["default"].store).register([_patterns_default_js__WEBPACK_IMPORTED_MODULE_3__["default"], _patterns_contact_js__WEBPACK_IMPORTED_MODULE_9__["default"], _patterns_feedback_js__WEBPACK_IMPORTED_MODULE_4__["default"], _patterns_newsletter_js__WEBPACK_IMPORTED_MODULE_10__["default"], _patterns_insert_post_js__WEBPACK_IMPORTED_MODULE_2__["default"], _patterns_register_user_js__WEBPACK_IMPORTED_MODULE_5__["default"], _patterns_donation_js__WEBPACK_IMPORTED_MODULE_8__["default"], _patterns_reset_password_js__WEBPACK_IMPORTED_MODULE_6__["default"], _patterns_user_login_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
window.JetFBComponents = {
  ...((_window$JetFBComponen = window.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {}),
  PatternInserterButton: _components_PatternInserterButton__WEBPACK_IMPORTED_MODULE_12__["default"]
};
window.JetFBHooks = {
  ...((_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {}),
  usePattern: _hooks_usePattern__WEBPACK_IMPORTED_MODULE_11__["default"]
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnBhY2thZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQVlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBS0E7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3RCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBWUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvY29tcG9uZW50cy9QYXR0ZXJuSW5zZXJ0ZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9jb21wb25lbnRzL1Byb1NpbmdsZVBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9jb21wb25lbnRzL1NpbmdsZVBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9ob29rcy91c2VBbm90aGVyQmxvY2tzLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvaG9va3MvdXNlUGF0dGVybi5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJucy9kZWZhdWx0LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnMvZG9uYXRpb24uanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJucy9mZWVkYmFjay5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zL2luc2VydC5wb3N0LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnMvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zL3JlZ2lzdGVyLnVzZXIuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJucy9yZXNldC5wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zL3VzZXIubG9naW4uanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJuc1N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJuc1N0b3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zU3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJuc1N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnNTdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnNTdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja3NcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VQYXR0ZXJuIGZyb20gJy4uL2hvb2tzL3VzZVBhdHRlcm4nO1xuaW1wb3J0IHVzZUFub3RoZXJCbG9ja3MgZnJvbSAnLi4vaG9va3MvdXNlQW5vdGhlckJsb2Nrcyc7XG5pbXBvcnQge1xuXHR1c2VUcmlnZ2VyUG9wb3Zlcixcblx0UG9wb3ZlclN0YW5kYXJkLFxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuZnVuY3Rpb24gUGF0dGVybkluc2VydGVyQnV0dG9uKCB7XG5cdHBhdHRlcm5OYW1lLFxuXHR3aXRoUGF0dGVybkljb24gPSBmYWxzZSxcblx0b25DbGljayA9IGZhbHNlLFxuXHRvbkFwcGx5ID0gKCkgPT4ge30sXG5cdC4uLnByb3BzXG59ICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgcmVmLFxuXHRcdCAgICAgIHNob3dQb3BvdmVyLFxuXHRcdCAgICAgIHNldFNob3dQb3BvdmVyLFxuXHRcdCAgICAgIHBvcG92ZXJQcm9wcyxcblx0ICAgICAgfSA9IHVzZVRyaWdnZXJQb3BvdmVyKCk7XG5cblx0Y29uc3QgYmxvY2tzID0gdXNlQW5vdGhlckJsb2NrcygpO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBwYXR0ZXJuLFxuXHRcdCAgICAgIGluc2VydCxcblx0XHQgICAgICBhcHBlbmQsXG5cdCAgICAgIH0gPSB1c2VQYXR0ZXJuKCB7XG5cdFx0bmFtZTogcGF0dGVybk5hbWUsXG5cdFx0b25BcHBseSxcblx0fSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxCdXR0b25cblx0XHRcdHJlZj17IHJlZiB9XG5cdFx0XHRpY29uPXsgd2l0aFBhdHRlcm5JY29uICYmIHBhdHRlcm4uaWNvbiB9XG5cdFx0XHRpY29uU2l6ZT1cIjQ4XCJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uQ2xpY2sgKSB7XG5cdFx0XHRcdFx0b25DbGljaygpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGJsb2Nrcy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0c2V0U2hvd1BvcG92ZXIoIHByZXYgPT4gIXByZXYgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRpbnNlcnQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSB9XG5cdFx0XHRsYWJlbD17IHBhdHRlcm4uZGVzY3JpcHRpb24gfHwgcGF0dGVybi50aXRsZSB9XG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPlxuXHRcdHsgc2hvd1BvcG92ZXIgJiYgKFxuXHRcdFx0PFBvcG92ZXJTdGFuZGFyZFxuXHRcdFx0XHRwb3NpdGlvbj17ICd0b3Atc3RhcnQnIH1cblx0XHRcdFx0bm9BcnJvdz17IGZhbHNlIH1cblx0XHRcdFx0aXNBbHRlcm5hdGVcblx0XHRcdFx0eyAuLi5wb3BvdmVyUHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8c3Bhbj57IF9fKCAnSSB3YW50IHRvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvc3Bhbj5cblx0XHRcdFx0Jm5ic3A7XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGluc2VydCgpIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdyZXBsYWNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0eyAnIC8gJyB9XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gYXBwZW5kKCkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBfXyggJ2FwcGVuZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdCZuYnNwO1xuXHRcdFx0XHQ8c3Bhbj57IF9fKFxuXHRcdFx0XHRcdCdmb3JtIHNldHRpbmdzIGFuZCBibG9ja3MnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KSB9PC9zcGFuPlxuXHRcdFx0PC9Qb3BvdmVyU3RhbmRhcmQ+XG5cdFx0KSB9XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF0dGVybkluc2VydGVyQnV0dG9uOyIsImltcG9ydCB7XG5cdHVzZVRyaWdnZXJQb3BvdmVyLFxuXHRQb3BvdmVyU3RhbmRhcmQsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCdXR0b24sIEV4dGVybmFsTGluayB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmZ1bmN0aW9uIFByb1NpbmdsZVBhdHRlcm4oIHsgcGF0dGVybiB9ICkge1xuXHRjb25zdCB7XG5cdFx0ICAgICAgcmVmLFxuXHRcdCAgICAgIHNob3dQb3BvdmVyLFxuXHRcdCAgICAgIHNldFNob3dQb3BvdmVyLFxuXHRcdCAgICAgIHBvcG92ZXJQcm9wcyxcblx0ICAgICAgfSA9IHVzZVRyaWdnZXJQb3BvdmVyKCk7XG5cblx0cmV0dXJuIDxsaSBjbGFzc05hbWU9XCJpcy1wcm9cIj5cblx0XHQ8QnV0dG9uXG5cdFx0XHRyZWY9eyByZWYgfVxuXHRcdFx0aWNvbj17IHBhdHRlcm4uaWNvbiB9XG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0U2hvd1BvcG92ZXIoIHByZXYgPT4gIXByZXYgKSB9XG5cdFx0XHRsYWJlbD17IHBhdHRlcm4uZGVzY3JpcHRpb24gfHwgcGF0dGVybi50aXRsZSB9XG5cdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdGljb25TaXplPXsgMzIgfVxuXHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvblwiXG5cdFx0Lz5cblx0XHQ8c3BhblxuXHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvbi1sYWJlbFwiXG5cdFx0PlxuXHRcdFx0eyBwYXR0ZXJuLnRpdGxlIH1cblx0XHQ8L3NwYW4+XG5cdFx0eyBzaG93UG9wb3ZlciAmJiAoXG5cdFx0XHQ8UG9wb3ZlclN0YW5kYXJkXG5cdFx0XHRcdHBvc2l0aW9uPXsgJ3RvcC1zdGFydCcgfVxuXHRcdFx0XHRub0Fycm93PXsgZmFsc2UgfVxuXHRcdFx0XHRpc0FsdGVybmF0ZVxuXHRcdFx0XHR7IC4uLnBvcG92ZXJQcm9wcyB9XG5cdFx0XHQ+XG5cblx0XHRcdFx0XHQ8c3Bhbj57IF9fKFxuXHRcdFx0XHRcdFx0J1RoaXMgaXMgcGFpZCBhZGRvbi4gWW91IGNhbiBidXkgaXQgaGVyZTonLFxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdCkgfTwvc3Bhbj5cblx0XHRcdFx0Jm5ic3A7XG5cdFx0XHRcdDxFeHRlcm5hbExpbmtcblx0XHRcdFx0XHRocmVmPXsgcGF0dGVybi5saW5rID8/XG5cdFx0XHRcdFx0XHQnaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vcHJpY2luZy8nIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdGpldGZvcm1idWlsZGVyLmNvbVxuXHRcdFx0XHQ8L0V4dGVybmFsTGluaz5cblx0XHRcdDwvUG9wb3ZlclN0YW5kYXJkPlxuXHRcdCkgfVxuXHQ8L2xpPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvU2luZ2xlUGF0dGVybjsiLCJpbXBvcnQgUGF0dGVybkluc2VydGVyQnV0dG9uIGZyb20gJy4vUGF0dGVybkluc2VydGVyQnV0dG9uJztcblxuZnVuY3Rpb24gU2luZ2xlUGF0dGVybiggeyBwYXR0ZXJuIH0gKSB7XG5cdHJldHVybiA8bGk+XG5cdFx0PFBhdHRlcm5JbnNlcnRlckJ1dHRvblxuXHRcdFx0a2V5PXsgcGF0dGVybi5uYW1lIH1cblx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0cGF0dGVybk5hbWU9eyBwYXR0ZXJuLm5hbWUgfVxuXHRcdFx0d2l0aFBhdHRlcm5JY29uXG5cdFx0XHRpY29uU2l6ZT17IDMyIH1cblx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb25cIlxuXHRcdC8+XG5cdFx0PHNwYW5cblx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb24tbGFiZWxcIlxuXHRcdD5cblx0XHRcdHsgcGF0dGVybi50aXRsZSB9XG5cdFx0PC9zcGFuPlxuXHQ8L2xpPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUGF0dGVybjsiLCJjb25zdCB7XG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlU2VsZWN0LFxuICAgICAgfSA9IHdwLmRhdGE7XG5cbi8qKlxuICogR2V0IHJvb3QtbGV2ZWwgYmxvY2tzIHdpdGhvdXQgY3VycmVudCBibG9ja1xuICpcbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAqL1xuZnVuY3Rpb24gdXNlQW5vdGhlckJsb2NrcygpIHtcblx0Y29uc3QgY29udGV4dCA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcblxuXHRyZXR1cm4gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKS5maWx0ZXIoXG5cdFx0XHRibG9jayA9PiBibG9jay5jbGllbnRJZCAhPT0gY29udGV4dC5jbGllbnRJZCxcblx0XHQpLFxuXHRcdFsgY29udGV4dC5pc1NlbGVjdGVkLCBjb250ZXh0LmNsaWVudElkIF0sXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFub3RoZXJCbG9ja3M7IiwiaW1wb3J0IHVzZUFub3RoZXJCbG9ja3MgZnJvbSAnLi91c2VBbm90aGVyQmxvY2tzJztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vcGF0dGVybnNTdG9yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlQmxvY2tFZGl0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IGNyZWF0ZUJsb2Nrc0Zyb21Jbm5lckJsb2Nrc1RlbXBsYXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmNvbnN0IHtcblx0ICAgICAgY29udmVydEZsb3csXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZUFjdGlvbnMsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuLyoqXG4gKiBAcGFyYW0gbmFtZSB7U3RyaW5nfVxuICogQHBhcmFtIG9uQXBwbHkge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqIEByZXR1cm5zIHt7YmxvY2tzOiBPYmplY3RbXSwgcGF0dGVybjogT2JqZWN0LCBpbnNlcnQ6IEZ1bmN0aW9uLCBhcHBlbmQ6XG4gKiAgICAgRnVuY3Rpb259fVxuICovXG5mdW5jdGlvbiB1c2VQYXR0ZXJuKCB7IG5hbWUsIG9uQXBwbHkgPSAoKSA9PiB7fSB9ICkge1xuXHRjb25zdCB7IGNsaWVudElkIH0gICAgICAgICA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcblx0Y29uc3QgYmxvY2tzICAgICAgICAgICAgICAgPSB1c2VBbm90aGVyQmxvY2tzKCk7XG5cdGNvbnN0IHsgZWRpdFBvc3QgfSAgICAgICAgID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcblx0Y29uc3QgeyBjcmVhdGVJbmZvTm90aWNlIH0gPSB1c2VEaXNwYXRjaCggd3Aubm90aWNlcy5zdG9yZSApO1xuXG5cdGNvbnN0IFsgYWN0aW9ucywgc2V0QWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICByZW1vdmVCbG9ja3MsXG5cdFx0ICAgICAgcmVwbGFjZUJsb2Nrcyxcblx0XHQgICAgICBpbnNlcnRCbG9ja3MsXG5cdCAgICAgIH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xuXG5cdGNvbnN0IHBhdHRlcm4gICAgPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggY29uc3RhbnRzLnN0b3JlICkuZ2V0VHlwZSggbmFtZSApLFxuXHRcdFtdLFxuXHQpO1xuXHRjb25zdCBzYXZlUmVjb3JkID0gdXNlU2VsZWN0KFxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoIGNvbnN0YW50cy5zdG9yZSApLmdldFNldHRpbmcoICdzYXZlUmVjb3JkJyApLFxuXHRcdFtdLFxuXHQpO1xuXG5cdGNvbnN0IGRpc3BsYXlOb3RpY2UgPSAoKSA9PiBjcmVhdGVJbmZvTm90aWNlKFxuXHRcdHBhdHRlcm4/LmFwcGx5VGV4dCA/P1xuXHRcdF9fKFxuXHRcdFx0J05ldyBibG9ja3MgYW5kIGFjdGlvbnMgaGF2ZSBiZWVuIGFkZGVkJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpLFxuXHRcdHtcblx0XHRcdHR5cGU6ICdzbmFja2JhcicsXG5cdFx0fSxcblx0KTtcblxuXHRmdW5jdGlvbiBpbnNlcnQoIGVkaXRlZFBhdHRlcm4gPSB7fSApIHtcblx0XHRhcHBseVBhdHRlcm4oIGVkaXRlZFBhdHRlcm4gKTtcblxuXHRcdGVkaXRlZFBhdHRlcm4gPSB7XG5cdFx0XHQuLi5wYXR0ZXJuLFxuXHRcdFx0Li4uZWRpdGVkUGF0dGVybixcblx0XHR9O1xuXG5cdFx0cmVtb3ZlQmxvY2tzKFxuXHRcdFx0YmxvY2tzLm1hcCggKCB7IGNsaWVudElkOiBpZCB9ICkgPT4gaWQgKSxcblx0XHQpO1xuXG5cdFx0Ly8gaW5zZXJ0aW5nIGFjdGlvbnNcblx0XHRjb25zdCBmbG93ID0gY29udmVydEZsb3coIGVkaXRlZFBhdHRlcm4/LmFjdGlvbnMgPz8gW10gKTtcblxuXHRcdGlmICggc2F2ZVJlY29yZCApIHtcblx0XHRcdGZsb3cuYWRkKCAnc2F2ZV9yZWNvcmQnICk7XG5cdFx0fVxuXG5cdFx0c2V0QWN0aW9ucyggZmxvdy5saXN0ICk7XG5cdFx0ZGlzcGxheU5vdGljZSgpO1xuXHRcdG9uQXBwbHkoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGVuZCggZWRpdGVkUGF0dGVybiA9IHt9ICkge1xuXHRcdGFwcGx5UGF0dGVybiggZWRpdGVkUGF0dGVybiApO1xuXG5cdFx0ZWRpdGVkUGF0dGVybiA9IHtcblx0XHRcdC4uLnBhdHRlcm4sXG5cdFx0XHQuLi5lZGl0ZWRQYXR0ZXJuLFxuXHRcdH07XG5cblx0XHQvLyBpbnNlcnRpbmcgYWN0aW9uc1xuXHRcdGNvbnN0IGZsb3cgPSBjb252ZXJ0RmxvdyggZWRpdGVkUGF0dGVybj8uYWN0aW9ucyA/PyBbXSApO1xuXG5cdFx0aWYgKCBzYXZlUmVjb3JkICkge1xuXHRcdFx0Zmxvdy5hZGQoICdzYXZlX3JlY29yZCcgKTtcblx0XHR9XG5cblx0XHRzZXRBY3Rpb25zKCBbIC4uLmFjdGlvbnMsIC4uLmZsb3cubGlzdCBdICk7XG5cdFx0ZGlzcGxheU5vdGljZSgpO1xuXHRcdG9uQXBwbHkoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGx5UGF0dGVybiggZWRpdGVkUGF0dGVybiA9IHt9ICkge1xuXHRcdGVkaXRlZFBhdHRlcm4gPSB7XG5cdFx0XHQuLi5wYXR0ZXJuLFxuXHRcdFx0Li4uZWRpdGVkUGF0dGVybixcblx0XHR9O1xuXG5cdFx0Ly8gaW5zZXJ0aW5nIGJsb2Nrc1xuXHRcdC8vIGNsaWVudElkIG1heSBiZSBlbXB0eSBpZiB3ZSB1c2UgdGhpcyBob29rIG91dHNpZGUgYmxvY2stZWRpdCBmdW5jdGlvblxuXHRcdGNsaWVudElkID8gcmVwbGFjZUJsb2Nrcyhcblx0XHRcdFsgY2xpZW50SWQgXSxcblx0XHRcdGNyZWF0ZUJsb2Nrc0Zyb21Jbm5lckJsb2Nrc1RlbXBsYXRlKFxuXHRcdFx0XHRlZGl0ZWRQYXR0ZXJuPy5ibG9ja3MgPz8gW10sXG5cdFx0XHQpLFxuXHRcdFx0MCxcblx0XHQpIDogaW5zZXJ0QmxvY2tzKFxuXHRcdFx0Y3JlYXRlQmxvY2tzRnJvbUlubmVyQmxvY2tzVGVtcGxhdGUoXG5cdFx0XHRcdGVkaXRlZFBhdHRlcm4/LmJsb2NrcyA/PyBbXSxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdGNvbnN0IHtcblx0XHRcdCAgICAgIGFjdGlvbnM6IHBhdHRlcm5BY3Rpb25zLFxuXHRcdFx0ICAgICAgYmxvY2tzOiBwYXR0ZXJuQmxvY2tzLFxuXHRcdFx0ICAgICAgbmFtZSxcblx0XHRcdCAgICAgIGljb24sXG5cdFx0XHQgICAgICB0aXRsZSxcblx0XHRcdCAgICAgIGRlc2NyaXB0aW9uLFxuXHRcdFx0ICAgICAgdmlldyxcblx0XHRcdCAgICAgIGFwcGx5VGV4dCxcblx0XHRcdCAgICAgIC4uLnJhd0Zvcm1EYXRhXG5cdFx0ICAgICAgfSA9IGVkaXRlZFBhdHRlcm47XG5cblx0XHRpZiAoICFPYmplY3Qua2V5cyggcmF3Rm9ybURhdGEgKS5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZWRpdFBvc3QoIHJhd0Zvcm1EYXRhICk7XG5cdH1cblxuXHRyZXR1cm4geyBwYXR0ZXJuLCBpbnNlcnQsIGFwcGVuZCwgYmxvY2tzIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBhdHRlcm47IiwiY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdjb250YWN0Jyxcblx0dGl0bGU6IF9fKCAnQ29udGFjdCBmb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGljb246IDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHQgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0xNi44IDEwQzE2LjM1ODIgMTAgMTYgMTAuNDQ3NyAxNiAxMUMxNiAxMS41NTIzIDE2LjM1ODIgMTIgMTYuOCAxMkgzMS4yQzMxLjY0MTggMTIgMzIgMTEuNTUyMyAzMiAxMUMzMiAxMC40NDc3IDMxLjY0MTggMTAgMzEuMiAxMEgxNi44WlwiXG5cdFx0Lz5cblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdCAgICAgIGQ9XCJNMTIgMTlDMTIgMTcuMzQzMSAxMy4zNDMxIDE2IDE1IDE2SDMzQzM0LjY1NjkgMTYgMzYgMTcuMzQzMSAzNiAxOUMzNiAyMC42NTY5IDM0LjY1NjkgMjIgMzMgMjJIMTVDMTMuMzQzMSAyMiAxMiAyMC42NTY5IDEyIDE5Wk0xNSAxOEMxNC40NDc3IDE4IDE0IDE4LjQ0NzcgMTQgMTlDMTQgMTkuNTUyMyAxNC40NDc3IDIwIDE1IDIwSDMzQzMzLjU1MjMgMjAgMzQgMTkuNTUyMyAzNCAxOUMzNCAxOC40NDc3IDMzLjU1MjMgMTggMzMgMThIMTVaXCJcblx0XHQvPlxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0ICAgICAgZD1cIk0xNSAyNEMxMy4zNDMxIDI0IDEyIDI1LjM0MzEgMTIgMjdDMTIgMjguNjU2OSAxMy4zNDMxIDMwIDE1IDMwSDMzQzM0LjY1NjkgMzAgMzYgMjguNjU2OSAzNiAyN0MzNiAyNS4zNDMxIDM0LjY1NjkgMjQgMzMgMjRIMTVaTTE0IDI3QzE0IDI2LjQ0NzcgMTQuNDQ3NyAyNiAxNSAyNkgzM0MzMy41NTIzIDI2IDM0IDI2LjQ0NzcgMzQgMjdDMzQgMjcuNTUyMyAzMy41NTIzIDI4IDMzIDI4SDE1QzE0LjQ0NzcgMjggMTQgMjcuNTUyMyAxNCAyN1pcIlxuXHRcdC8+XG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcblx0XHQgICAgICBkPVwiTTE4IDM1QzE4IDMzLjM0MzEgMTkuMzQzMSAzMiAyMSAzMkgyN0MyOC42NTY5IDMyIDMwIDMzLjM0MzEgMzAgMzVDMzAgMzYuNjU2OSAyOC42NTY5IDM4IDI3IDM4SDIxQzE5LjM0MzEgMzggMTggMzYuNjU2OSAxOCAzNVpNMjEgMzRDMjAuNDQ3NyAzNCAyMCAzNC40NDc3IDIwIDM1QzIwIDM1LjU1MjMgMjAuNDQ3NyAzNiAyMSAzNkgyN0MyNy41NTIzIDM2IDI4IDM1LjU1MjMgMjggMzVDMjggMzQuNDQ3NyAyNy41NTIzIDM0IDI3IDM0SDIxWlwiXG5cdFx0Lz5cblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdCAgICAgIGQ9XCJNOCA4QzggNS43OTA4NiA5Ljc5MDg2IDQgMTIgNEgzNkMzOC4yMDkxIDQgNDAgNS43OTA4NiA0MCA4VjQwQzQwIDQyLjIwOTEgMzguMjA5MSA0NCAzNiA0NEgxMkM5Ljc5MDg2IDQ0IDggNDIuMjA5MSA4IDQwVjhaTTEyIDZIMzZDMzcuMTA0NiA2IDM4IDYuODk1NDMgMzggOFY0MEMzOCA0MS4xMDQ2IDM3LjEwNDYgNDIgMzYgNDJIMTJDMTAuODk1NCA0MiAxMCA0MS4xMDQ2IDEwIDQwVjhDMTAgNi44OTU0MyAxMC44OTU0IDYgMTIgNlpcIlxuXHRcdC8+XG5cdDwvc3ZnPixcblx0YWN0aW9uczogW1xuXHRcdHtcblx0XHRcdCd0eXBlJzogJ3NlbmRfZW1haWwnLFxuXHRcdFx0J3NldHRpbmdzJzoge1xuXHRcdFx0XHQnbWFpbF90byc6ICdmb3JtJyxcblx0XHRcdFx0J2Zyb21fZmllbGQnOiAnZW1haWwnLFxuXHRcdFx0XHQnc3ViamVjdCc6ICclc3ViamVjdCUnLFxuXHRcdFx0XHQnY29udGVudCc6ICclbWVzc2FnZSUnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRdLFxuXHRibG9ja3M6IFtcblx0XHRbXG5cdFx0XHQnamV0LWZvcm1zL3RleHQtZmllbGQnLFxuXHRcdFx0e1xuXHRcdFx0XHQnbmFtZSc6ICdlbWFpbCcsXG5cdFx0XHRcdCdsYWJlbCc6ICdFbWFpbCcsXG5cdFx0XHRcdCdmaWVsZF90eXBlJzogJ2VtYWlsJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQnamV0LWZvcm1zL3RleHQtZmllbGQnLFxuXHRcdFx0e1xuXHRcdFx0XHQnbmFtZSc6ICdzdWJqZWN0Jyxcblx0XHRcdFx0J2xhYmVsJzogJ1N1YmplY3QnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdCdqZXQtZm9ybXMvd3lzaXd5Zy1maWVsZCcsXG5cdFx0XHR7XG5cdFx0XHRcdCduYW1lJzogJ21lc3NhZ2UnLFxuXHRcdFx0XHQnbGFiZWwnOiAnTWVzc2FnZScsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0J2pldC1mb3Jtcy9zdWJtaXQtZmllbGQnLFxuXHRcdF0sXG5cdF0sXG5cdGFwcGx5VGV4dDogX18oXG5cdFx0JzQgYmxvY2tzIGFuZCBTZW5kIEVtYWlsIGFjdGlvbiBoYXZlIGJlZW4gYWRkZWQnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcbn07IiwiY29uc3Qge1xuXHQgICAgICBfXyxcbiAgICAgIH0gPSB3cC5pMThuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdkZWZhdWx0Jyxcblx0dGl0bGU6IF9fKCAnRnJvbSBzY3JhdGNoJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGJsb2NrczogW1xuXHRcdFtcblx0XHRcdCdqZXQtZm9ybXMvaGlkZGVuLWZpZWxkJyxcblx0XHRcdHtcblx0XHRcdFx0J25hbWUnOiAncG9zdF9pZCcsXG5cdFx0XHRcdCdmaWVsZF92YWx1ZSc6ICdwb3N0X2lkJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQnamV0LWZvcm1zL3RleHQtZmllbGQnLFxuXHRcdFx0e1xuXHRcdFx0XHQnbmFtZSc6ICd0ZXh0X2ZpZWxkJyxcblx0XHRcdFx0J2xhYmVsJzogJ1RleHQnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdCdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcblx0XHRdLFxuXHRdLFxuXHRhY3Rpb25zOiBbXSxcblx0YXBwbHlUZXh0OiBfXyggJzMgYmxvY2sgaGFzIGJlZW4gYWRkZWQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnZG9uYXRpb24nLFxuXHR0aXRsZTogX18oICdQYXlwYWwgZG9uYXRpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXG5cdCAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTEyIDE5LjAwNzVDMTIgMTguNDUxMSAxMi40NDc3IDE4LjAwMDEgMTMgMTguMDAwMUgyN0MyNy41NTIzIDE4LjAwMDEgMjggMTguNDUxMSAyOCAxOS4wMDc1QzI4IDE5LjU2MzkgMjcuNTUyMyAyMC4wMTQ5IDI3IDIwLjAxNDlIMTNDMTIuNDQ3NyAyMC4wMTQ5IDEyIDE5LjU2MzkgMTIgMTkuMDA3NVpcIlxuXHRcdC8+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNMTMgMjIuMDI5N0MxMi40NDc3IDIyLjAyOTcgMTIgMjIuNDgwNyAxMiAyMy4wMzcxQzEyIDIzLjU5MzQgMTIuNDQ3NyAyNC4wNDQ1IDEzIDI0LjA0NDVIMjFDMjEuNTUyMyAyNC4wNDQ1IDIyIDIzLjU5MzQgMjIgMjMuMDM3MUMyMiAyMi40ODA3IDIxLjU1MjMgMjIuMDI5NyAyMSAyMi4wMjk3SDEzWlwiXG5cdFx0Lz5cblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdCAgICAgIGQ9XCJNMzguNDE3OSAyOS4xODY4QzM5LjM3OTMgMjguNDU2MyA0MCAyNy4zMDA2IDQwIDI2VjEyQzQwIDkuNzkwODYgMzguMjA5MSA4IDM2IDhIMTJDOS43OTA4NiA4IDggOS43OTA4NiA4IDEyVjI2QzggMjguMjA5MSA5Ljc5MDg2IDMwIDEyIDMwSDI1LjA1MjRMMjQuMjA1NyAzNC44MjcyQzI0LjA5ODQgMzUuNDM5MyAyNC41NjkzIDM2IDI1LjE5MDcgMzZIMjcuNjgzTDI3LjE5OTUgMzguODMxOEMyNy4wOTUyIDM5LjQ0MjUgMjcuNTY1NyA0MC4wMDAxIDI4LjE4NTIgNDAuMDAwMUgzMS43Mjk5QzMyLjIxNzIgNDAuMDAwMSAzMi42MzM1IDM5LjY0ODkgMzIuNzE1NiAzOS4xNjg3TDMzLjEzNDIgMzYuNzIwNkMzMy44ODY1IDM2LjY5MjMgMzUuNjUwNCAzNi41MjA2IDM2LjM0MDQgMzYuMTYxM0wzNi4zNDY3IDM2LjE1OEMzNy4wOTk3IDM1Ljc2MjQgMzcuNzIyMSAzNS4xOTE4IDM4LjE4MTggMzQuNDY1NEMzOC42NTI3IDMzLjcyMzUgMzguOTAwMiAzMi44OTQ1IDM4Ljk3NzYgMzIuMDM4M0wzOC45NzgyIDMyLjAzMUMzOS4wNDYgMzEuMjUwNyAzOC45NiAzMC40NjA1IDM4LjY2MDUgMjkuNzA2OUMzOC41OTAzIDI5LjUyNjkgMzguNTA5MyAyOS4zNTMzIDM4LjQxNzkgMjkuMTg2OFpNMzYgMTBIMTJDMTAuOTAwMyAxMCAxMC4wMDc5IDEwLjg4NzUgMTAuMDAwMSAxMS45ODU0SDM3Ljk5OTlDMzcuOTkyMSAxMC44ODc1IDM3LjA5OTcgMTAgMzYgMTBaTTM4IDE0LjAwMDFIMTBWMjZDMTAgMjcuMTA0NiAxMC44OTU0IDI4IDEyIDI4SDI1LjQwMzJMMjYuMzEwMiAyMi44Mjg3QzI2LjM5NDMgMjIuMzQ5NyAyNi44MTA3IDIyLjAwMDYgMjcuMjk3IDIyLjAwMTVMMzIuMzc4MyAyMi4wMTA2TDMyLjQwNzQgMjIuMDExNUMzMy4zMTg3IDIyLjAzOTIgMzQuMjI5IDIyLjI3NDEgMzUuMDIxNyAyMi44Mjc5QzM1Ljc2MDIgMjMuMzM2IDM2LjMwMjcgMjQuMDI0NSAzNi42MzA2IDI0Ljg0MzRDMzYuOTU1MyAyNS42MzgyIDM3LjA1MDYgMjYuNDc2MyAzNi45NzYgMjcuMzEyNkwzNi45NzU0IDI3LjMxOTZDMzYuOTY1NiAyNy40MjUyIDM2Ljk1MzQgMjcuNTMwMiAzNi45Mzg2IDI3LjYzNDdDMzYuOTc1IDI3LjY1NzIgMzcuMDExMyAyNy42ODAzIDM3LjA0NzMgMjcuNzA0MkMzNy42MTg5IDI3LjM1MjEgMzggMjYuNzIwNiAzOCAyNlYxNC4wMDAxWk0zMS41MTUzIDMwLjI5NzdDMzEuNjA5NiAzMC4yOTY3IDMxLjcwMjMgMzAuMjkyOSAzMS43OTM0IDMwLjI4NjRDMzIuMzAzIDMwLjI1MDEgMzIuNzYyNSAzMC4xMjgyIDMzLjE3MTggMjkuOTIwN0wzMy4xODUgMjkuOTEzOUwzMy4xOTU4IDI5LjkwODNDMzMuNjk0MiAyOS42NDg2IDM0LjA5MzkgMjkuMjg3IDM0LjM5NDggMjguODIzNkwzNC4zOTkgMjguODE3MUwzNC40MDU0IDI4LjgwNzNDMzQuNjc1IDI4LjM4ODggMzQuODQ4NSAyNy45MDM1IDM0LjkyNTggMjcuMzUxNEwzNC45MjYyIDI3LjM0ODdDMzQuOTM1OSAyNy4yNzkxIDM0Ljk0NDEgMjcuMjA4NCAzNC45NTA4IDI3LjEzNjdDMzQuOTgyOSAyNi43NzY3IDM0Ljk2NzIgMjYuNDM4NSAzNC45MDM2IDI2LjEyMkwzNC44OTggMjYuMDk0OEMzNC44NjEgMjUuOTE4NyAzNC44MDkxIDI1Ljc0OTUgMzQuNzQyMyAyNS41ODdDMzQuNjA4NSAyNS4yNTA0IDM0LjQxNjggMjQuOTYyNyAzNC4xNjcyIDI0LjcyMzhMMzQuMTUwNSAyNC43MDhDMzQuMDU4OSAyNC42MjIgMzMuOTU5NyAyNC41NDI0IDMzLjg1MjggMjQuNDY5M0MzMy40NTQ4IDI0LjE4OTQgMzIuOTU5NiAyNC4wMzg4IDMyLjM2NzMgMjQuMDE3NUwzMi4zNDQ4IDI0LjAxNjhMMjguMTY2NCAyNC4wMDk5TDI2LjUgMzRIMjhMMjguNjcxMSAzMC4yOTc4SDMxLjQyNzVDMzEuNDQ3NSAzMC4yOTggMzEuNDY3NCAzMC4yOTggMzEuNDg3MiAzMC4yOTc5TDMxLjUxNTMgMzAuMjk3N1pNMzAuMzk0OCAzMi40NjE0TDMwLjQyMjQgMzIuMzA0MUMzMS4zNDcgMzIuMzA3MSAzMy4yNjg3IDMyLjEyNzEgMzQuMTAwOSAzMS43MDUyTDM0LjEwNzIgMzEuNzAyQzM0LjkyODEgMzEuMjgyMiAzNS42MDQ3IDMwLjY3ODEgMzYuMTA1MSAyOS45MDgzQzM2LjE1MjQgMjkuODM1OCAzNi4xOTc2IDI5Ljc2MjUgMzYuMjQwOSAyOS42ODg0TDM2LjI0OTYgMjkuNjk2OEwzNi4yNjQgMjkuNzEwOEMzNi40NzkzIDI5LjkyMjUgMzYuNjQ0NyAzMC4xNzc1IDM2Ljc2MDEgMzAuNDc1OEMzNi44MTc4IDMwLjYxOTggMzYuODYyNSAzMC43Njk4IDM2Ljg5NDUgMzAuOTI1OEwzNi44OTkzIDMwLjk0OTlDMzYuOTU0MSAzMS4yMzA0IDM2Ljk2NzYgMzEuNTMwMSAzNi45Mzk5IDMxLjg0OTJDMzYuOTM0MiAzMS45MTI3IDM2LjkyNzEgMzEuOTc1MyAzNi45MTg4IDMyLjAzN0wzNi45MTg0IDMyLjAzOTRDMzYuODUxNyAzMi41Mjg2IDM2LjcwMjEgMzIuOTU4NyAzNi40Njk1IDMzLjMyOTdMMzYuNDY0IDMzLjMzODNMMzYuNDYwNCAzMy4zNDQxQzM2LjIwMDggMzMuNzU0OCAzNS44NTYgMzQuMDc1MiAzNS40MjYgMzQuMzA1NEwzNS40MTY3IDM0LjMxMDNMMzUuNDA1MyAzNC4zMTYzQzM1LjEzNTIgMzQuNDU3IDM0LjgzOTggMzQuNTUzMyAzNC41MTg5IDM0LjYwNTJDMzQuMzg0NCAzNC42MjY5IDM0LjI0NTQgMzQuNjQwOSAzNC4xMDIgMzQuNjQ3QzM0LjA2MDUgMzQuNjQ4OCAzNC4wMTg2IDM0LjY0OTkgMzMuOTc2MyAzNC42NTA0TDMzLjk1MjIgMzQuNjUwNkMzMy45MzUxIDM0LjY1MDcgMzMuOTE3OSAzNC42NTA3IDMzLjkwMDcgMzQuNjUwNkwzMS42MDU5IDM0LjY0N0wzMSAzNy45OTk5SDI5LjVMMzAuMzk0OCAzMi40NjE0WlwiXG5cdFx0Lz5cblx0PC9zdmc+LFxuXHRhY3Rpb25zOiBbXSxcblx0YmxvY2tzOiBbXG5cdFx0W1xuXHRcdFx0J2pldC1mb3Jtcy9udW1iZXItZmllbGQnLFxuXHRcdFx0e1xuXHRcdFx0XHQnbmFtZSc6ICdhbW91bnQnLFxuXHRcdFx0XHQnbGFiZWwnOiAnQW1vdW50Jyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcsXG5cdFx0XSxcblx0XSxcblx0bWV0YToge1xuXHRcdF9qZl9nYXRld2F5czogJ3tcImdhdGV3YXlcIjpcInBheXBhbFwiLFwicGF5cGFsXCI6e1widXNlX2dsb2JhbFwiOnRydWUsXCJjdXJyZW5jeVwiOlwiVVNEXCIsXCJzY2VuYXJpb1wiOntcImlkXCI6XCJQQVlfTk9XXCJ9fSxcInByaWNlX2ZpZWxkXCI6XCJwcmljZVwifScsXG5cdH0sXG5cdGFwcGx5VGV4dDogX18oXG5cdFx0JzIgYmxvY2tzIGFuZCBQYXlQYWwgR2F0ZXdheSBoYXZlIGJlZW4gYWRkZWQnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQnbmFtZSc6ICdmZWVkYmFjaycsXG5cdCd0aXRsZSc6IF9fKCAnRmVlZGJhY2snLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXG5cdCAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTExIDE0LjA0NDRDMTAuNDQ3NyAxNC4wNDQ0IDEwIDE0LjQ5NTQgMTAgMTUuMDUxN0MxMCAxNS42MDgxIDEwLjQ0NzcgMTYuMDU5MSAxMSAxNi4wNTkxSDMxQzMxLjU1MjMgMTYuMDU5MSAzMiAxNS42MDgxIDMyIDE1LjA1MTdDMzIgMTQuNDk1NCAzMS41NTIzIDE0LjA0NDQgMzEgMTQuMDQ0NEgxMVpcIlxuXHRcdC8+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNMTAgMTkuMDgxM0MxMCAxOC41MjQ5IDEwLjQ0NzcgMTguMDczOSAxMSAxOC4wNzM5SDMxQzMxLjU1MjMgMTguMDczOSAzMiAxOC41MjQ5IDMyIDE5LjA4MTNDMzIgMTkuNjM3NyAzMS41NTIzIDIwLjA4ODcgMzEgMjAuMDg4N0gxMUMxMC40NDc3IDIwLjA4ODcgMTAgMTkuNjM3NyAxMCAxOS4wODEzWlwiXG5cdFx0Lz5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0xMSAyMi4xMDM1QzEwLjQ0NzcgMjIuMTAzNSAxMCAyMi41NTQ1IDEwIDIzLjExMDlDMTAgMjMuNjY3MiAxMC40NDc3IDI0LjExODMgMTEgMjQuMTE4M0gyNkMyNi41NTIzIDI0LjExODMgMjcgMjMuNjY3MiAyNyAyMy4xMTA5QzI3IDIyLjU1NDUgMjYuNTUyMyAyMi4xMDM1IDI2IDIyLjEwMzVIMTFaXCJcblx0XHQvPlxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0ICAgICAgZD1cIk02IDEyLjAyOTZDNiA5LjgwNDEgNy43OTA4NiA4IDEwIDhIMzJDMzQuMjA5MSA4IDM2IDkuODA0MSAzNiAxMi4wMjk2VjIzLjExMDlIMzhDNDAuMjA5MSAyMy4xMTA5IDQyIDI0LjkxNSA0MiAyNy4xNDA0VjMzLjE4NDhDNDIgMzUuNDEwMyA0MC4yMDkxIDM3LjIxNDQgMzggMzcuMjE0NEgzNy4yODU3TDM0Ljg2NjQgMzkuODM5QzM0LjY2ODYgNDAuMDUzNyAzNC4zMzE0IDQwLjA1MzcgMzQuMTMzNiAzOS44MzlMMzEuNzE0MyAzNy4yMTQ0SDI2QzIzLjc5MDkgMzcuMjE0NCAyMiAzNS40MTAzIDIyIDMzLjE4NDhWMzAuMTYyNkgxOS4yMTQzTDE1Ljg2NjQgMzMuNzk0N0MxNS42Njg2IDM0LjAwOTMgMTUuMzMxNCAzNC4wMDkzIDE1LjEzMzYgMzMuNzk0N0wxMS43ODU3IDMwLjE2MjZIMTBDNy43OTA4NiAzMC4xNjI2IDYgMjguMzU4NSA2IDI2LjEzMzFWMTIuMDI5NlpNMTIuNjU3OSAyOC4xNDc4TDE1LjUgMzEuMjMxMkwxOC4zNDIxIDI4LjE0NzhIMzJDMzMuMTA0NiAyOC4xNDc4IDM0IDI3LjI0NTggMzQgMjYuMTMzMVYxMi4wMjk2QzM0IDEwLjkxNjggMzMuMTA0NiAxMC4wMTQ4IDMyIDEwLjAxNDhIMTBDOC44OTU0MyAxMC4wMTQ4IDggMTAuOTE2OCA4IDEyLjAyOTZWMjYuMTMzMUM4IDI3LjI0NTggOC44OTU0MyAyOC4xNDc4IDEwIDI4LjE0NzhIMTIuNjU3OVpNMjQgMzAuMTYyNlYzMy4xODQ4QzI0IDM0LjI5NzUgMjQuODk1NCAzNS4xOTk2IDI2IDM1LjE5OTZIMzIuNTg2NEwzNC41IDM3LjI3NTZMMzYuNDEzNiAzNS4xOTk2SDM4QzM5LjEwNDYgMzUuMTk5NiA0MCAzNC4yOTc1IDQwIDMzLjE4NDhWMjcuMTQwNEM0MCAyNi4wMjc3IDM5LjEwNDYgMjUuMTI1NyAzOCAyNS4xMjU3SDM2VjI2LjEzMzFDMzYgMjguMzU4NSAzNC4yMDkxIDMwLjE2MjYgMzIgMzAuMTYyNkgyNFpcIlxuXHRcdC8+XG5cdDwvc3ZnPixcblx0J2FjdGlvbnMnOiBbXG5cdFx0e1xuXHRcdFx0J3R5cGUnOiAnc2VuZF9lbWFpbCcsXG5cdFx0XHQnc2V0dGluZ3MnOiB7XG5cdFx0XHRcdCdtYWlsX3RvJzogJ2Zvcm0nLFxuXHRcdFx0XHQnZnJvbV9maWVsZCc6ICdlbWFpbCcsXG5cdFx0XHRcdCdzdWJqZWN0JzogJ1VzZXIgZmVlZGJhY2snLFxuXHRcdFx0XHQnY29udGVudCc6ICdOYW1lOiAlbmFtZSUgLSAlcmF0aW5nJTxici8+JWhvd19pbXByb3ZlJScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdF0sXG5cdCdibG9ja3MnOiBbXG5cdFx0W1xuXHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcblx0XHRcdHtcblx0XHRcdFx0J25hbWUnOiAnbmFtZScsXG5cdFx0XHRcdCdsYWJlbCc6ICdOYW1lJyxcblx0XHRcdFx0J3JlcXVpcmVkJzogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQnamV0LWZvcm1zL3RleHQtZmllbGQnLFxuXHRcdFx0e1xuXHRcdFx0XHQnbmFtZSc6ICdlbWFpbCcsXG5cdFx0XHRcdCdsYWJlbCc6ICdFbWFpbCcsXG5cdFx0XHRcdCdmaWVsZF90eXBlJzogJ2VtYWlsJyxcblx0XHRcdFx0J3JlcXVpcmVkJzogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQnamV0LWZvcm1zL3JhZGlvLWZpZWxkJyxcblx0XHRcdHtcblx0XHRcdFx0J25hbWUnOiAncmF0aW5nJyxcblx0XHRcdFx0J2xhYmVsJzogJ1BsZWFzZSByYXRlIG91ciB3ZWJzaXRlJyxcblx0XHRcdFx0J3JlcXVpcmVkJzogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQnamV0LWZvcm1zL3RleHRhcmVhLWZpZWxkJyxcblx0XHRcdHtcblx0XHRcdFx0J25hbWUnOiAnaG93X2ltcHJvdmUnLFxuXHRcdFx0XHQnbGFiZWwnOiAnSG93IHdvdWxkIHlvdSBzdWdnZXN0IHRvIGltcHJvdmUgaXQ/Jyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcsXG5cdFx0XSxcblx0XSxcblx0YXBwbHlUZXh0OiBfXyhcblx0XHQnNSBibG9ja3MgYW5kIFNlbmQgRW1haWwgYWN0aW9uIGhhdmUgYmVlbiBhZGRlZCcsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdpbnNlcnRfcG9zdCcsXG5cdHRpdGxlOiBfXyggJ0luc2VydCBQb3N0JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGljb246IDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHQgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0xMiAxNS4wMDc0QzEyIDE0LjQ1MSAxMi40NDc3IDE0IDEzIDE0SDI3QzI3LjU1MjMgMTQgMjggMTQuNDUxIDI4IDE1LjAwNzRDMjggMTUuNTYzOCAyNy41NTIzIDE2LjAxNDggMjcgMTYuMDE0OEgxM0MxMi40NDc3IDE2LjAxNDggMTIgMTUuNTYzOCAxMiAxNS4wMDc0WlwiXG5cdFx0Lz5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0xMyAxOC4wMjk2QzEyLjQ0NzcgMTguMDI5NiAxMiAxOC40ODA2IDEyIDE5LjAzN0MxMiAxOS41OTMzIDEyLjQ0NzcgMjAuMDQ0NCAxMyAyMC4wNDQ0SDI3QzI3LjU1MjMgMjAuMDQ0NCAyOCAxOS41OTMzIDI4IDE5LjAzN0MyOCAxOC40ODA2IDI3LjU1MjMgMTguMDI5NiAyNyAxOC4wMjk2SDEzWlwiXG5cdFx0Lz5cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0xMyAyMi4wNTkxQzEyLjQ0NzcgMjIuMDU5MSAxMiAyMi41MTAyIDEyIDIzLjA2NjVDMTIgMjMuNjIyOSAxMi40NDc3IDI0LjA3MzkgMTMgMjQuMDczOUgyMkMyMi41NTIzIDI0LjA3MzkgMjMgMjMuNjIyOSAyMyAyMy4wNjY1QzIzIDIyLjUxMDIgMjIuNTUyMyAyMi4wNTkxIDIyIDIyLjA1OTFIMTNaXCJcblx0XHQvPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTEyIDI2Ljk5MjZDMTIgMjYuNDM2MiAxMi40NDc3IDI1Ljk4NTIgMTMgMjUuOTg1MkgxOUMxOS41NTIzIDI1Ljk4NTIgMjAgMjYuNDM2MiAyMCAyNi45OTI2QzIwIDI3LjU0OSAxOS41NTIzIDI4IDE5IDI4SDEzQzEyLjQ0NzcgMjggMTIgMjcuNTQ5IDEyIDI2Ljk5MjZaXCJcblx0XHQvPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTMwIDI4QzMwIDI3LjQ0NzcgMzAuNDQ3NyAyNyAzMSAyN0MzMS41NTIzIDI3IDMyIDI3LjQ0NzcgMzIgMjhWMzBIMzRDMzQuNTUyMyAzMCAzNSAzMC40NDc3IDM1IDMxQzM1IDMxLjU1MjMgMzQuNTUyMyAzMiAzNCAzMkgzMlYzNEMzMiAzNC41NTIzIDMxLjU1MjMgMzUgMzEgMzVDMzAuNDQ3NyAzNSAzMCAzNC41NTIzIDMwIDM0VjMySDI4QzI3LjQ0NzcgMzIgMjcgMzEuNTUyMyAyNyAzMUMyNyAzMC40NDc3IDI3LjQ0NzcgMzAgMjggMzBIMzBWMjhaXCJcblx0XHQvPlxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0ICAgICAgZD1cIk0zMiAxMlYyMi4wNTQ5QzM2LjUgMjIuNTUyNCA0MCAyNi4zNjc0IDQwIDMxQzQwIDM1Ljk3MDYgMzUuOTcwNiA0MCAzMSA0MEMyOC44NTY3IDQwIDI2Ljg4ODQgMzkuMjUwOCAyNS4zNDI3IDM4SDEyQzkuNzkwODYgMzggOCAzNi4yMDkxIDggMzRWMTJDOCA5Ljc5MDg2IDkuNzkwODYgOCAxMiA4SDI4QzMwLjIwOTEgOCAzMiA5Ljc5MDg2IDMyIDEyWk0xMiAxMEgyOEMyOS4xMDQ2IDEwIDMwIDEwLjg5NTQgMzAgMTJWMjIuMDU0OUMyNS41IDIyLjU1MjQgMjIgMjYuMzY3NCAyMiAzMUMyMiAzMi44NTAxIDIyLjU1ODMgMzQuNTY5OSAyMy41MTU1IDM2SDEyQzEwLjg5NTQgMzYgMTAgMzUuMTA0NiAxMCAzNFYxMkMxMCAxMC44OTU0IDEwLjg5NTQgMTAgMTIgMTBaTTM4IDMxQzM4IDM0Ljg2NiAzNC44NjYgMzggMzEgMzhDMjcuMTM0IDM4IDI0IDM0Ljg2NiAyNCAzMUMyNCAyNy4xMzQgMjcuMTM0IDI0IDMxIDI0QzM0Ljg2NiAyNCAzOCAyNy4xMzQgMzggMzFaXCJcblx0XHQvPlxuXHQ8L3N2Zz4sXG5cdGFjdGlvbnM6IFtcblx0XHR7XG5cdFx0XHQndHlwZSc6ICdpbnNlcnRfcG9zdCcsXG5cdFx0XHQnc2V0dGluZ3MnOiB7XG5cdFx0XHRcdCdmaWVsZHNfbWFwJzoge1xuXHRcdFx0XHRcdCd0aXRsZSc6ICdwb3N0X3RpdGxlJyxcblx0XHRcdFx0XHQnZXhjZXJwdCc6ICdwb3N0X2V4Y2VycHQnLFxuXHRcdFx0XHRcdCdjb250ZW50JzogJ3Bvc3RfY29udGVudCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdwb3N0X3R5cGUnOiAncG9zdCcsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdF0sXG5cdGJsb2NrczogW1xuXHRcdFtcblx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXG5cdFx0XHR7XG5cdFx0XHRcdCduYW1lJzogJ3RpdGxlJyxcblx0XHRcdFx0J2xhYmVsJzogJ1Bvc3QgVGl0bGUnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdCdqZXQtZm9ybXMvdGV4dGFyZWEtZmllbGQnLFxuXHRcdFx0e1xuXHRcdFx0XHQnbmFtZSc6ICdleGNlcnB0Jyxcblx0XHRcdFx0J2xhYmVsJzogJ1Bvc3QgRXhjZXJwdCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0J2pldC1mb3Jtcy93eXNpd3lnLWZpZWxkJyxcblx0XHRcdHtcblx0XHRcdFx0J25hbWUnOiAnY29udGVudCcsXG5cdFx0XHRcdCdsYWJlbCc6ICdQb3N0IENvbnRlbnQnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdCdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcblx0XHRdLFxuXHRdLFxuXHRhcHBseVRleHQ6IF9fKFxuXHRcdCc0IGJsb2NrcyBhbmQgSW5zZXJ0L1VwZGF0ZSBQb3N0IGFjdGlvbiBoYXZlIGJlZW4gYWRkZWQnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnbmV3c2xldHRlcicsXG5cdHRpdGxlOiBfXyggJ05ld3NsZXR0ZXIgU2lnbnVwIEZvcm0nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXG5cdCAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTI5LjcwNzEgMTQuNzA3MUMzMC4wOTc2IDE0LjMxNjYgMzAuMDk3NiAxMy42ODM0IDI5LjcwNzEgMTMuMjkyOUMyOS4zMTY2IDEyLjkwMjQgMjguNjgzNCAxMi45MDI0IDI4LjI5MjkgMTMuMjkyOUwyMyAxOC41ODU4TDE5LjcwNzEgMTUuMjkyOUMxOS4zMTY2IDE0LjkwMjQgMTguNjgzNCAxNC45MDI0IDE4LjI5MjkgMTUuMjkyOUMxNy45MDI0IDE1LjY4MzQgMTcuOTAyNCAxNi4zMTY2IDE4LjI5MjkgMTYuNzA3MUwyMS45MzkzIDIwLjM1MzZDMjIuNTI1MSAyMC45MzkzIDIzLjQ3NDkgMjAuOTM5MyAyNC4wNjA3IDIwLjM1MzZMMjkuNzA3MSAxNC43MDcxWlwiXG5cdFx0Lz5cblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdCAgICAgIGQ9XCJNOC40NzAxIDIxLjcwNjNMMTQgMTguMjUxMVYxMUMxNCA5LjM0MzE1IDE1LjM0MzEgOCAxNyA4SDMxQzMyLjY1NjkgOCAzNCA5LjM0MzE1IDM0IDExVjE4LjI1MTFMMzkuNTI5OSAyMS43MDYzQzM5LjgyMjMgMjEuODg5IDQwIDIyLjIwOTUgNDAgMjIuNTU0NFYzN0M0MCAzOC42NTY5IDM4LjY1NjkgNDAgMzcgNDBIMTFDOS4zNDMxNSA0MCA4IDM4LjY1NjkgOCAzN1YyMi41NTQ0QzggMjIuMjA5NSA4LjE3NzY2IDIxLjg4OSA4LjQ3MDEgMjEuNzA2M1pNMTcgMTBIMzFDMzEuNTUyMyAxMCAzMiAxMC40NDc3IDMyIDExVjI1LjY3OTNMMjkuMjE5MyAyNy42MjU4TDI1LjQ1NTEgMjMuNjMzMkMyNC42NjU3IDIyLjc5NTggMjMuMzM0MSAyMi43OTU4IDIyLjU0NDYgMjMuNjMzMkwxOC43ODA2IDI3LjYyNTdMMTYgMjUuNjc5M1YxMUMxNiAxMC40NDc3IDE2LjQ0NzcgMTAgMTcgMTBaTTE3LjM5NCAyOS4wOTY1TDEwIDIzLjkyMDdWMzYuOTM5M0wxNy4zOTQgMjkuMDk2NVpNMTQgMjAuNjA5NEwxMS4yMjk4IDIyLjM0MDJMMTQgMjQuMjc5M1YyMC42MDk0Wk0zNCAyNC4yNzkzVjIwLjYwOTRMMzYuNzcwMSAyMi4zNDAyTDM0IDI0LjI3OTNaTTMwLjYwNTkgMjkuMDk2NkwzOCAyMy45MjA3VjM2LjkzOTVMMzAuNjA1OSAyOS4wOTY2Wk0xMC45OTEgMzhIMzcuMDA5TDM3IDM4SDExTDEwLjk5MSAzOFpNMTEuNzU5IDM3Ljk4OTFIMzYuMjQwOEwyMy45OTk5IDI1LjAwNTFMMTEuNzU5IDM3Ljk4OTFaXCJcblx0XHQvPlxuXHQ8L3N2Zz4sXG5cdGFjdGlvbnM6IFtcblx0XHR7XG5cdFx0XHQndHlwZSc6ICdtYWlsY2hpbXAnLFxuXHRcdH0sXG5cdF0sXG5cdGJsb2NrczogW1xuXHRcdFtcblx0XHRcdCdjb3JlL2NvbHVtbnMnLFxuXHRcdFx0e30sXG5cdFx0XHRbXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQnY29yZS9jb2x1bW4nLFxuXHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdCduYW1lJzogJ2VtYWlsJyxcblx0XHRcdFx0XHRcdFx0XHQnZmllbGRfdHlwZSc6ICdlbWFpbCcsXG5cdFx0XHRcdFx0XHRcdFx0J3BsYWNlaG9sZGVyJzogJ0VudGVyIHlvdSBlbWFpbCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQnY29yZS9jb2x1bW4nLFxuXHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0J2pldC1mb3Jtcy9zdWJtaXQtZmllbGQnLFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRdLFxuXHRcdFx0XSxcblx0XHRdLFxuXHRdLFxuXHRhcHBseVRleHQ6IF9fKFxuXHRcdCcyIGZvcm0gZmllbGRzIGFuZCBNYWlsY2hpbXAgYWN0aW9uIGhhdmUgYmVlbiBhZGRlZCcsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdyZWdpc3Rlcl91c2VyJyxcblx0dGl0bGU6IF9fKCAnUmVnaXN0ZXIgVXNlcicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRpY29uOiA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcblx0ICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNMzIgMjhDMzEuNDQ3NyAyOCAzMSAyOC40NDc3IDMxIDI5VjMxSDI5QzI4LjQ0NzcgMzEgMjggMzEuNDQ3NyAyOCAzMkMyOCAzMi41NTIzIDI4LjQ0NzcgMzMgMjkgMzNIMzFWMzVDMzEgMzUuNTUyMyAzMS40NDc3IDM2IDMyIDM2QzMyLjU1MjMgMzYgMzMgMzUuNTUyMyAzMyAzNVYzM0gzNUMzNS41NTIzIDMzIDM2IDMyLjU1MjMgMzYgMzJDMzYgMzEuNDQ3NyAzNS41NTIzIDMxIDM1IDMxSDMzVjI5QzMzIDI4LjQ0NzcgMzIuNTUyMyAyOCAzMiAyOFpcIlxuXHRcdC8+XG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcblx0XHQgICAgICBkPVwiTTI1LjMwMjcgMjcuNjIyN0MyNC45ODM0IDI3LjUwMDMgMjQuODAyNiAyNy4zODQ1IDI0LjcwNzIgMjcuMjg5MUMyNC4yNTAxIDI2LjgzMTggMjQuMDg5MiAyNi40MDA4IDI0LjAzMTggMjUuODk1N0MyNy4xODE0IDI1LjI4MzYgMjkgMjEuOTk1NiAyOSAxOC45OTI2TDI5IDE4Ljg5MjlDMjkuMDAwMSAxNy40ODA2IDI5LjAwMDEgMTYuNDA5NyAyOC44NjE0IDE1LjU3N0MyOC43MDQ5IDE0LjYzNzUgMjguMzY1OSAxMy45NDI1IDI3LjcwNzIgMTMuMjgzN0MyNi44NTc0IDEyLjQzMzUgMjUuNDUyNiAxMS42MzIxIDI0LjgyMTQgMTEuMjkxNkwyNC4wNjI3IDkuMDE0NDlDMjMuODYwOSA4LjQwOSAyMy4yNzg2IDcuOTY0NjUgMjIuNTg2MyA4LjAwMjc3QzIxLjk0NiA4LjAzODAzIDIwLjU5NjYgOC4xNjM2NCAxOS4xMTYxIDguNjIwNjVDMTcuNjQ1IDkuMDc0NzcgMTUuOTUyMyA5Ljg4NDQ3IDE0LjczMTcgMTEuMzQ5OEMxMi45ODEzIDEzLjQ1MSAxMi45ODk0IDE1Ljc2NTcgMTIuOTk4NiAxOC40MDc5QzEyLjk5OTMgMTguNjAxIDEzIDE4Ljc5NiAxMyAxOC45OTI2QzEzIDIxLjk5NTYgMTQuODE4NiAyNS4yODM2IDE3Ljk2ODIgMjUuODk1N0MxNy45MTA4IDI2LjQwMDggMTcuNzQ5OSAyNi44MzE4IDE3LjI5MjggMjcuMjg5MUMxNy4yMDQzIDI3LjM3NzYgMTcuMDAyIDI3LjUwNDYgMTYuNTk1OCAyNy42NDQ3QzE2LjIwMzEgMjcuNzgwMiAxNS43MjM1IDI3Ljg5NDYgMTUuMTU4IDI4LjAyMDNDMTUuMDYyNSAyOC4wNDE1IDE0Ljk2NDUgMjguMDYzIDE0Ljg2NDMgMjguMDg1QzEzLjgzOTQgMjguMzEgMTIuNTg4MSAyOC41ODQ2IDExLjU1MjYgMjkuMTAyNUMxMC41MTIgMjkuNjIzMSA5LjYwNTcgMzAuMjAxOCA4Ljk2OTAxIDMwLjk5OEM4LjMwMzc3IDMxLjgyOTggOCAzMi44MTE3IDggMzMuOTk4NFYzNi40OTk2QzggMzcuMzI4IDguNjcxNTcgMzcuOTk5NiA5LjUgMzcuOTk5NkgyNi43MDc5QzI4LjExODIgMzkuMjQ0NiAyOS45NzA5IDQwIDMyIDQwQzM2LjQxODMgNDAgNDAgMzYuNDE4MyA0MCAzMkM0MCAyNy41ODE3IDM2LjQxODMgMjQgMzIgMjRDMjkuMTk3NCAyNCAyNi43MzE1IDI1LjQ0MTEgMjUuMzAyNyAyNy42MjI3Wk0yMi4yOTI3IDEwLjAyOTRDMjEuNjcwOSAxMC4wODU4IDIwLjcxOSAxMC4yMTkgMTkuNzA2IDEwLjUzMTdDMTguNDI4IDEwLjkyNjIgMTcuMTQ0NSAxMS41NzggMTYuMjY4MyAxMi42Mjk5QzE0Ljk5NjggMTQuMTU2NCAxNC45OTc5IDE1Ljc0OTQgMTQuOTk5OCAxOC42Mzc5TDE1IDE4Ljk5MjZDMTUgMjEuNTIxNiAxNi41Nzk5IDIzLjc0MDMgMTguNjE0MyAyMy45NzMxQzE5LjMwNjMgMjQuMDUyMyAyMC4wMTk2IDI0LjYzNDggMTkuOTk1IDI1LjUyMjZDMTkuOTY4MiAyNi40ODggMTkuNzkzMSAyNy42MTY3IDE4LjcwNzIgMjguNzAzMUMxOC4yOTU3IDI5LjExNDggMTcuNzQ4IDI5LjM2MjkgMTcuMjQ4IDI5LjUzNTRDMTYuNzM0NCAyOS43MTI2IDE2LjE1MTUgMjkuODQ4MyAxNS41OTIgMjkuOTcyNkwxNS4zMzUxIDMwLjAyOTVDMTQuMjU0IDMwLjI2ODUgMTMuMjQ3NSAzMC40OTEgMTIuNDQ3NCAzMC44OTEyQzExLjQ4OCAzMS4zNzExIDEwLjg5NDMgMzEuNzkyNyAxMC41MzEgMzIuMjQ3MUMxMC4xOTYyIDMyLjY2NTcgMTAgMzMuMTg0NCAxMCAzMy45OTg0VjM1Ljk5OTZIMjUuMDdDMjQuMzg5NSAzNC44MjMgMjQgMzMuNDU3IDI0IDMyQzI0IDMxLjA5OTEgMjQuMTQ4OSAzMC4yMzMgMjQuNDIzNSAyOS40MjQ5QzI0LjAyMTIgMjkuMjU2MiAyMy42MTg3IDI5LjAyOTIgMjMuMjkyOCAyOC43MDMxQzIyLjIwNjkgMjcuNjE2NyAyMi4wMzE4IDI2LjQ4OCAyMi4wMDUgMjUuNTIyNkMyMS45ODA0IDI0LjYzNDggMjIuNjkzNyAyNC4wNTIzIDIzLjM4NTcgMjMuOTczMUMyNS40MjAxIDIzLjc0MDMgMjcgMjEuNTIxNiAyNyAxOC45OTI2QzI3IDE3LjQ1MzEgMjYuOTk2NiAxNi41NTQgMjYuODg4NiAxNS45MDU2QzI2Ljc5NTEgMTUuMzQ0NSAyNi42MzQxIDE1LjAzOTEgMjYuMjkyOCAxNC42OTc2QzI1LjU5ODkgMTQuMDAzNCAyNC4yNDkzIDEzLjI0OTcgMjMuNzE3NCAxMi45Njk0QzIzLjM3ODEgMTIuNzkwNyAyMy4xMTE1IDEyLjQ4NjUgMjIuOTg1OCAxMi4xMDk1TDIyLjI5MjcgMTAuMDI5NFpNMzIgMzhDMzUuMzEzNyAzOCAzOCAzNS4zMTM3IDM4IDMyQzM4IDI4LjY4NjMgMzUuMzEzNyAyNiAzMiAyNkMyOC42ODYzIDI2IDI2IDI4LjY4NjMgMjYgMzJDMjYgMzUuMzEzNyAyOC42ODYzIDM4IDMyIDM4WlwiXG5cdFx0Lz5cblx0PC9zdmc+LFxuXHRhY3Rpb25zOiBbXG5cdFx0e1xuXHRcdFx0J3R5cGUnOiAndmVyaWZpY2F0aW9uJyxcblx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdCdtYWlsX3RvJzogJ2VtYWlsJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHQndHlwZSc6ICdyZWdpc3Rlcl91c2VyJyxcblx0XHRcdCdzZXR0aW5ncyc6IHtcblx0XHRcdFx0J2ZpZWxkc19tYXAnOiB7XG5cdFx0XHRcdFx0J2VtYWlsJzogJ2VtYWlsJyxcblx0XHRcdFx0XHQnbG9naW4nOiAnbG9naW4nLFxuXHRcdFx0XHRcdCdwYXNzd29yZCc6ICdfamZiX3ZlcmlmaWNhdGlvbl90b2tlbicsXG5cdFx0XHRcdFx0J2NvbmZpcm1fcGFzc3dvcmQnOiAnX2pmYl92ZXJpZmljYXRpb25fdG9rZW4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnbG9nX2luJzogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XSxcblx0YmxvY2tzOiBbXG5cdFx0W1xuXHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcblx0XHRcdHtcblx0XHRcdFx0J25hbWUnOiAnZW1haWwnLFxuXHRcdFx0XHQnbGFiZWwnOiAnRW1haWwnLFxuXHRcdFx0XHQnZmllbGRfdHlwZSc6ICdlbWFpbCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcblx0XHRcdHtcblx0XHRcdFx0J25hbWUnOiAnbG9naW4nLFxuXHRcdFx0XHQnbGFiZWwnOiAnTG9naW4nLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdCdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcblx0XHRdLFxuXHRdLFxuXHRhcHBseVRleHQ6IF9fKFxuXHRcdCczIGJsb2NrcyBhbmQgUmVnaXN0ZXIgVXNlciB3aXRoIFZlcmlmaWNhdGlvbiBhY3Rpb24gaGF2ZSBiZWVuIGFkZGVkJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG59OyIsImltcG9ydCBQcm9TaW5nbGVQYXR0ZXJuIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvU2luZ2xlUGF0dGVybic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgcmVzZXRQYXNzUGF0dGVybiB9ID0gSmV0Rm9ybUVkaXRvckRhdGEudXRtTGlua3M7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3Jlc2V0X3Bhc3N3b3JkJyxcblx0dGl0bGU6IF9fKCAnUmVzZXQgUGFzc3dvcmQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXG5cdCAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTM5Ljg1MTkgMTQuMjEzQzM5LjMwOTggMTYuMzg4MyAzNy4zNDMxIDE4IDM1IDE4QzMyLjIzODYgMTggMzAgMTUuNzYxNCAzMCAxM0MzMCAxMC4yMzg2IDMyLjIzODYgOCAzNSA4QzM2LjYzNTcgOCAzOC4wODggOC43ODU0NSAzOS4wMDAyIDkuOTk5NzZIMzhDMzcuNDQ3NyA5Ljk5OTc2IDM3IDEwLjQ0NzUgMzcgMTAuOTk5OEMzNyAxMS41NTIgMzcuNDQ3NyAxMS45OTk4IDM4IDExLjk5OThINDAuOTc3N0w0MSAxMkM0MS41MTc4IDEyIDQxLjk0MzYgMTEuNjA2NSA0MS45OTQ4IDExLjEwMjJDNDEuOTk4MyAxMS4wNjg2IDQyIDExLjAzNDMgNDIgMTAuOTk5OFY4QzQyIDcuNDQ3NzIgNDEuNTUyMyA3IDQxIDdDNDAuNDQ3NyA3IDQwIDcuNDQ3NzIgNDAgOFY4LjEwMTAyQzM4LjcyOTUgNi44MDQ0NyAzNi45NTg3IDYgMzUgNkMzMS4xMzQgNiAyOCA5LjEzNDAxIDI4IDEzQzI4IDE2Ljg2NiAzMS4xMzQgMjAgMzUgMjBDMzguMjgwNCAyMCA0MS4wMzM3IDE3Ljc0MzYgNDEuNzkyNiAxNC42OTgyTDM5Ljg1MTkgMTQuMjEzWlwiXG5cdFx0Lz5cblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdCAgICAgIGQ9XCJNMjAgMzMuODc0QzIxLjcyNTIgMzMuNDI5OSAyMyAzMS44NjM4IDIzIDMwQzIzIDI3Ljc5MDkgMjEuMjA5MSAyNiAxOSAyNkMxNi43OTA5IDI2IDE1IDI3Ljc5MDkgMTUgMzBDMTUgMzEuODYzOCAxNi4yNzQ4IDMzLjQyOTkgMTggMzMuODc0VjM3QzE4IDM3LjU1MjMgMTguNDQ3NyAzOCAxOSAzOEMxOS41NTIzIDM4IDIwIDM3LjU1MjMgMjAgMzdWMzMuODc0Wk0yMSAzMEMyMSAzMS4xMDQ2IDIwLjEwNDYgMzIgMTkgMzJDMTcuODk1NCAzMiAxNyAzMS4xMDQ2IDE3IDMwQzE3IDI4Ljg5NTQgMTcuODk1NCAyOCAxOSAyOEMyMC4xMDQ2IDI4IDIxIDI4Ljg5NTQgMjEgMzBaXCJcblx0XHQvPlxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0ICAgICAgZD1cIk0yOCAyMkMzMC4yMDkxIDIyIDMyIDIzLjc5MDkgMzIgMjZWMzhDMzIgNDAuMjA5MSAzMC4yMDkxIDQyIDI4IDQySDEwQzcuNzkwODYgNDIgNiA0MC4yMDkxIDYgMzhWMjZDNiAyMy43OTA5IDcuNzkwODYgMjIgMTAgMjJWMTlDMTAgMTQuMDI5NCAxNC4wMjk0IDEwIDE5IDEwQzIzLjk3MDYgMTAgMjggMTQuMDI5NCAyOCAxOVYyMlpNMjYgMTlWMjJIMjRWMTlDMjQgMTYuMjM4NiAyMS43NjE0IDE0IDE5IDE0QzE2LjIzODYgMTQgMTQgMTYuMjM4NiAxNCAxOVYyMkgxMlYxOUMxMiAxNS4xMzQgMTUuMTM0IDEyIDE5IDEyQzIyLjg2NiAxMiAyNiAxNS4xMzQgMjYgMTlaTTIyIDE5VjIySDE2VjE5QzE2IDE3LjM0MzEgMTcuMzQzMSAxNiAxOSAxNkMyMC42NTY5IDE2IDIyIDE3LjM0MzEgMjIgMTlaTTMwIDI2QzMwIDI0Ljg5NTQgMjkuMTA0NiAyNCAyOCAyNEgxMEM4Ljg5NTQzIDI0IDggMjQuODk1NCA4IDI2VjM4QzggMzkuMTA0NiA4Ljg5NTQzIDQwIDEwIDQwSDI4QzI5LjEwNDYgNDAgMzAgMzkuMTA0NiAzMCAzOFYyNlpcIlxuXHRcdC8+XG5cdDwvc3ZnPixcblx0YmxvY2tzOiBbXSxcblx0YWN0aW9uczogW10sXG5cdHZpZXc6IFByb1NpbmdsZVBhdHRlcm4sXG5cdGxpbms6IHJlc2V0UGFzc1BhdHRlcm4sXG59OyIsImltcG9ydCBQcm9TaW5nbGVQYXR0ZXJuIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvU2luZ2xlUGF0dGVybic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgdXNlckxvZ2luUGF0dGVybiB9ID0gSmV0Rm9ybUVkaXRvckRhdGEudXRtTGlua3M7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3VzZXJfbG9naW4nLFxuXHR0aXRsZTogX18oICdVc2VyIExvZ2luJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGljb246IDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuXHQgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdCAgICAgIGQ9XCJNMzQgMzNDMzQgMzMuNzUzMiAzMy41ODM3IDM0LjQwOTEgMzIuOTY4NiAzNC43NTAyQzMyLjk4OTEgMzQuODMwMSAzMyAzNC45MTM4IDMzIDM1VjM2QzMzIDM2LjU1MjMgMzIuNTUyMyAzNyAzMiAzN0MzMS40NDc3IDM3IDMxIDM2LjU1MjMgMzEgMzZWMzVDMzEgMzQuOTEzOCAzMS4wMTA5IDM0LjgzMDEgMzEuMDMxNCAzNC43NTAyQzMwLjQxNjMgMzQuNDA5MSAzMCAzMy43NTMyIDMwIDMzQzMwIDMxLjg5NTQgMzAuODk1NCAzMSAzMiAzMUMzMy4xMDQ2IDMxIDM0IDMxLjg5NTQgMzQgMzNaTTMyIDMzLjc2OTJDMzIuNDI0OCAzMy43NjkyIDMyLjc2OTIgMzMuNDI0OCAzMi43NjkyIDMzQzMyLjc2OTIgMzIuNTc1MiAzMi40MjQ4IDMyLjIzMDggMzIgMzIuMjMwOEMzMS41NzUyIDMyLjIzMDggMzEuMjMwOCAzMi41NzUyIDMxLjIzMDggMzNDMzEuMjMwOCAzMy40MjQ4IDMxLjU3NTIgMzMuNzY5MiAzMiAzMy43NjkyWlwiXG5cdFx0Lz5cblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdCAgICAgIGQ9XCJNMjYuNjczOSAyOEMyNi4xOTMgMjcuODkzMyAyNS43NzkzIDI3Ljc5MTEgMjUuNDMxMyAyNy42Njk4QzI1LjAzMDcgMjcuNTMgMjQuODE0OCAyNy4zOTY3IDI0LjcwNzIgMjcuMjg5MUMyNC4yNTAxIDI2LjgzMTggMjQuMDg5MiAyNi40MDA4IDI0LjAzMTggMjUuODk1N0MyNy4xODE0IDI1LjI4MzYgMjkgMjEuOTk1NiAyOSAxOC45OTI2TDI5IDE4Ljg5MjlDMjkuMDAwMSAxNy40ODA2IDI5LjAwMDEgMTYuNDA5NyAyOC44NjE0IDE1LjU3N0MyOC43MDQ5IDE0LjYzNzUgMjguMzY1OSAxMy45NDI1IDI3LjcwNzIgMTMuMjgzN0MyNi44NTc0IDEyLjQzMzUgMjUuNDUyNiAxMS42MzIxIDI0LjgyMTQgMTEuMjkxNkwyNC4wNjI3IDkuMDE0NDlDMjMuODYwOSA4LjQwOSAyMy4yNzg2IDcuOTY0NjUgMjIuNTg2MyA4LjAwMjc3QzIxLjk0NiA4LjAzODAzIDIwLjU5NjYgOC4xNjM2NCAxOS4xMTYxIDguNjIwNjVDMTcuNjQ1IDkuMDc0NzcgMTUuOTUyMyA5Ljg4NDQ3IDE0LjczMTcgMTEuMzQ5OEMxMi45ODEzIDEzLjQ1MSAxMi45ODk0IDE1Ljc2NTcgMTIuOTk4NiAxOC40MDc5QzEyLjk5OTMgMTguNjAxIDEzIDE4Ljc5NiAxMyAxOC45OTI2QzEzIDIxLjk5NTYgMTQuODE4NiAyNS4yODM2IDE3Ljk2ODIgMjUuODk1N0MxNy45MTA4IDI2LjQwMDggMTcuNzQ5OSAyNi44MzE4IDE3LjI5MjggMjcuMjg5MUMxNy4yMDQzIDI3LjM3NzYgMTcuMDAyIDI3LjUwNDYgMTYuNTk1OCAyNy42NDQ3QzE2LjIwMzEgMjcuNzgwMiAxNS43MjM1IDI3Ljg5NDYgMTUuMTU4IDI4LjAyMDNDMTUuMDYyNSAyOC4wNDE1IDE0Ljk2NDUgMjguMDYzIDE0Ljg2NDMgMjguMDg1QzEzLjgzOTQgMjguMzEgMTIuNTg4MSAyOC41ODQ2IDExLjU1MjYgMjkuMTAyNUMxMC41MTIgMjkuNjIzMSA5LjYwNTcgMzAuMjAxOCA4Ljk2OTAxIDMwLjk5OEM4LjMwMzc3IDMxLjgyOTggOCAzMi44MTE3IDggMzMuOTk4NFYzNi40OTk2QzggMzcuMzI4IDguNjcxNTcgMzcuOTk5NiA5LjUgMzcuOTk5NkgyNEMyNCAzOS4xMDQyIDI0Ljg5NTQgNDAgMjYgNDBIMzhDMzkuMTA0NiA0MCA0MCAzOS4xMDQ2IDQwIDM4VjMwQzQwIDI4Ljg5NTQgMzkuMTA0NiAyOCAzOCAyOEgzNlYyN0MzNiAyNC43OTA5IDM0LjIwOTEgMjMgMzIgMjNDMjkuNzkwOSAyMyAyOCAyNC43OTA5IDI4IDI3VjI4SDI2LjY3MzlaTTIyLjI5MjcgMTAuMDI5NEMyMS42NzA5IDEwLjA4NTggMjAuNzE5IDEwLjIxOSAxOS43MDYgMTAuNTMxN0MxOC40MjggMTAuOTI2MiAxNy4xNDQ1IDExLjU3OCAxNi4yNjgzIDEyLjYyOTlDMTQuOTk2OCAxNC4xNTY0IDE0Ljk5NzkgMTUuNzQ5NCAxNC45OTk4IDE4LjYzNzlMMTUgMTguOTkyNkMxNSAyMS41MjE2IDE2LjU3OTkgMjMuNzQwMyAxOC42MTQzIDIzLjk3MzFDMTkuMzA2MyAyNC4wNTIzIDIwLjAxOTYgMjQuNjM0OCAxOS45OTUgMjUuNTIyNkMxOS45NjgyIDI2LjQ4OCAxOS43OTMxIDI3LjYxNjcgMTguNzA3MiAyOC43MDMxQzE4LjI5NTcgMjkuMTE0OCAxNy43NDggMjkuMzYyOSAxNy4yNDggMjkuNTM1NEMxNi43MzQ0IDI5LjcxMjYgMTYuMTUxNSAyOS44NDgzIDE1LjU5MiAyOS45NzI2TDE1LjMzNTEgMzAuMDI5NUMxNC4yNTQgMzAuMjY4NSAxMy4yNDc1IDMwLjQ5MSAxMi40NDc0IDMwLjg5MTJDMTEuNDg4IDMxLjM3MTEgMTAuODk0MyAzMS43OTI3IDEwLjUzMSAzMi4yNDcxQzEwLjE5NjIgMzIuNjY1NyAxMCAzMy4xODQ0IDEwIDMzLjk5ODRWMzUuOTk5NkgyNFYzMEMyNCAyOS43NSAyNC4wNDU5IDI5LjUxMDggMjQuMTI5NiAyOS4yOTAyQzIzLjgyOSAyOS4xMzkzIDIzLjUzOTEgMjguOTQ5NSAyMy4yOTI4IDI4LjcwMzFDMjIuMjA2OSAyNy42MTY3IDIyLjAzMTggMjYuNDg4IDIyLjAwNSAyNS41MjI2QzIxLjk4MDQgMjQuNjM0OCAyMi42OTM3IDI0LjA1MjMgMjMuMzg1NyAyMy45NzMxQzI1LjQyMDEgMjMuNzQwMyAyNyAyMS41MjE2IDI3IDE4Ljk5MjZDMjcgMTcuNDUzMSAyNi45OTY2IDE2LjU1NCAyNi44ODg2IDE1LjkwNTZDMjYuNzk1MSAxNS4zNDQ1IDI2LjYzNDEgMTUuMDM5MSAyNi4yOTI4IDE0LjY5NzZDMjUuNTk4OSAxNC4wMDM0IDI0LjI0OTMgMTMuMjQ5NyAyMy43MTc0IDEyLjk2OTRDMjMuMzc4MSAxMi43OTA3IDIzLjExMTUgMTIuNDg2NSAyMi45ODU4IDEyLjEwOTVMMjIuMjkyNyAxMC4wMjk0Wk0zNCAyOFYyN0MzNCAyNS44OTU0IDMzLjEwNDYgMjUgMzIgMjVDMzAuODk1NCAyNSAzMCAyNS44OTU0IDMwIDI3VjI4SDM0Wk0zOCAzMFYzOEgyNlYzMEgzOFpcIlxuXHRcdC8+XG5cdDwvc3ZnPixcblx0YmxvY2tzOiBbXSxcblx0YWN0aW9uczogW10sXG5cdHZpZXc6IFByb1NpbmdsZVBhdHRlcm4sXG5cdGxpbms6IHVzZXJMb2dpblBhdHRlcm4sXG59OyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHJlZ2lzdGVyKCBpdGVtcyApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogY29uc3RhbnRzLnJlZ2lzdGVyLFxuXHRcdFx0aXRlbXMsXG5cdFx0fTtcblx0fSxcblx0dW5SZWdpc3RlciggdHlwZXMgKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IGNvbnN0YW50cy51blJlZ2lzdGVyLFxuXHRcdFx0dHlwZXMsXG5cdFx0fTtcblx0fSxcblx0dXBkYXRlU2V0dGluZ3MoIHNldHRpbmdzICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBjb25zdGFudHMudXBkYXRlU2V0dGluZ3MsXG5cdFx0XHRzZXR0aW5ncyxcblx0XHR9O1xuXHR9LFxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG5cdHN0b3JlOiAnamV0LWZvcm1zL3BhdHRlcm5zJyxcblx0cmVnaXN0ZXI6ICdSRUdJU1RFUicsXG5cdHVuUmVnaXN0ZXI6ICdVTlJFR0lTVEVSJyxcblx0dXBkYXRlU2V0dGluZ3M6ICdVUERBVEVfU0VUVElORycsXG59O1xuXG5cbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5pbXBvcnQgU2luZ2xlUGF0dGVybiBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZVBhdHRlcm4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdFsgY29uc3RhbnRzLnJlZ2lzdGVyIF0oIHN0YXRlLCBhY3Rpb24gKSB7XG5cdFx0aWYgKCAhQXJyYXkuaXNBcnJheSggYWN0aW9uLml0ZW1zICkgKSB7XG5cdFx0XHRhY3Rpb24uaXRlbXMgPSBbIGFjdGlvbi5pdGVtcyBdO1xuXHRcdH1cblxuXHRcdGZvciAoIGxldCBpdGVtIG9mIGFjdGlvbi5pdGVtcyApIHtcblxuXHRcdFx0aWYgKCAhaXRlbS5oYXNPd25Qcm9wZXJ0eSggJ25hbWUnICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpc3NldEluZGV4ID0gc2VsZWN0b3JzLmdldFR5cGVJbmRleCggc3RhdGUsIGl0ZW0ubmFtZSApO1xuXG5cdFx0XHQvLyBpcyBuZXcgcGF0dGVybiB0eXBlXG5cdFx0XHRpZiAoIC0xID09PSBpc3NldEluZGV4ICkge1xuXHRcdFx0XHRpZiAoICFpdGVtPy52aWV3ICkge1xuXHRcdFx0XHRcdGl0ZW0udmlldyA9IFNpbmdsZVBhdHRlcm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdGF0ZS50eXBlcy5wdXNoKCB7IC4uLml0ZW0gfSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRlZFBhdHRlcm4gPSB7XG5cdFx0XHRcdFx0Li4uc3RhdGUudHlwZXNbIGlzc2V0SW5kZXggXSxcblx0XHRcdFx0XHQuLi5pdGVtLFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGlmICggIWVkaXRlZFBhdHRlcm4/LnZpZXcgKSB7XG5cdFx0XHRcdFx0ZWRpdGVkUGF0dGVybi52aWV3ID0gU2luZ2xlUGF0dGVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN0YXRlLnR5cGVzWyBpc3NldEluZGV4IF0gPSBlZGl0ZWRQYXR0ZXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0WyBjb25zdGFudHMudW5SZWdpc3RlciBdKCBzdGF0ZSwgYWN0aW9uICkge1xuXHRcdGNvbnN0IHsgdHlwZXMgfSA9IGFjdGlvbjtcblxuXHRcdHN0YXRlLnR5cGVzID0gc3RhdGUudHlwZXMuZmlsdGVyKFxuXHRcdFx0KCB7IG5hbWUgfSApID0+ICF0eXBlcy5pbmNsdWRlcyggbmFtZSApLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdFsgY29uc3RhbnRzLnVwZGF0ZVNldHRpbmdzIF0oIHN0YXRlLCBhY3Rpb24gKSB7XG5cdFx0Y29uc3QgeyBzZXR0aW5ncyB9ID0gYWN0aW9uO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0Li4uc3RhdGUuc2V0dGluZ3MsXG5cdFx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0fSxcblx0XHR9O1xuXHR9LFxufTsiLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHsgY3JlYXRlUmVkdXhTdG9yZSB9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdXhTdG9yZSggY29uc3RhbnRzLnN0b3JlLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9ycyxcbn0gKTtcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcblxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcblx0dHlwZXM6IFtdLFxuXHRzZXR0aW5nczoge1xuXHRcdHNhdmVSZWNvcmQ6IHRydWUsXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xuXHRjb25zdCBjYWxsYmFjayA9IGRpc3BhdGNoZXJzWyBhY3Rpb24/LnR5cGUgXTtcblxuXHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBjYWxsYmFjayggc3RhdGUsIGFjdGlvbiApO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufSIsImNvbnN0IHNlbGVjdG9ycyA9IHtcblx0Z2V0VHlwZUluZGV4KCBzdGF0ZSwgbmFtZSApIHtcblx0XHRyZXR1cm4gc3RhdGUudHlwZXMuZmluZEluZGV4KCBwYXR0ZXJuID0+IHBhdHRlcm4ubmFtZSA9PT0gbmFtZSApO1xuXHR9LFxuXHRnZXRUeXBlcyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLnR5cGVzLmZpbHRlciggKCB7IG5hbWUgfSApID0+ICdkZWZhdWx0JyAhPT0gbmFtZSApO1xuXHR9LFxuXHRnZXRUeXBlKCBzdGF0ZSwgc2x1ZyApIHtcblx0XHRjb25zdCBpbmRleCA9IHNlbGVjdG9ycy5nZXRUeXBlSW5kZXgoIHN0YXRlLCBzbHVnICk7XG5cblx0XHRyZXR1cm4gc3RhdGUudHlwZXNbIGluZGV4IF07XG5cdH0sXG5cdGdldFNldHRpbmcoIHN0YXRlLCBuYW1lICkge1xuXHRcdHJldHVybiBzdGF0ZS5zZXR0aW5nc1sgbmFtZSBdO1xuXHR9LFxuXHRnZXRTZXR0aW5ncyggc3RhdGUgKSB7XG5cdFx0cmV0dXJuIHN0YXRlLnNldHRpbmdzO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHQuLi5zZWxlY3RvcnMsXG59OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGF0dGVybnNTdG9yZSBmcm9tICcuL3BhdHRlcm5zU3RvcmUnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL3BhdHRlcm5zU3RvcmUvY29uc3RhbnRzJztcbmltcG9ydCBpbnNlcnRQb3N0UGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL2luc2VydC5wb3N0LmpzJztcbmltcG9ydCBkZWZhdWx0UGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL2RlZmF1bHQuanMnO1xuaW1wb3J0IGZlZWRCYWNrUGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL2ZlZWRiYWNrLmpzJztcbmltcG9ydCByZWdpc3RlclVzZXJQYXR0ZXJuIGZyb20gJy4vcGF0dGVybnMvcmVnaXN0ZXIudXNlci5qcyc7XG5pbXBvcnQgcmVzZXRQYXNzd29yZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJucy9yZXNldC5wYXNzd29yZC5qcyc7XG5pbXBvcnQgdXNlckxvZ2luUGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL3VzZXIubG9naW4uanMnO1xuaW1wb3J0IGRvbmF0aW9uUGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL2RvbmF0aW9uLmpzJztcbmltcG9ydCBjb250YWN0UGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL2NvbnRhY3QuanMnO1xuaW1wb3J0IG5ld3NsZXR0ZXJQYXR0ZXJuIGZyb20gJy4vcGF0dGVybnMvbmV3c2xldHRlci5qcyc7XG5pbXBvcnQgdXNlUGF0dGVybiBmcm9tICcuL2hvb2tzL3VzZVBhdHRlcm4nO1xuaW1wb3J0IFBhdHRlcm5JbnNlcnRlckJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUGF0dGVybkluc2VydGVyQnV0dG9uJztcbmltcG9ydCB7IHJlZ2lzdGVyLCBkaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbnJlZ2lzdGVyKCBwYXR0ZXJuc1N0b3JlICk7XG5cbmRpc3BhdGNoKCBjb25zdGFudHMuc3RvcmUgKS5yZWdpc3RlciggW1xuXHRkZWZhdWx0UGF0dGVybixcblx0Y29udGFjdFBhdHRlcm4sXG5cdGZlZWRCYWNrUGF0dGVybixcblx0bmV3c2xldHRlclBhdHRlcm4sXG5cdGluc2VydFBvc3RQYXR0ZXJuLFxuXHRyZWdpc3RlclVzZXJQYXR0ZXJuLFxuXHRkb25hdGlvblBhdHRlcm4sXG5cdHJlc2V0UGFzc3dvcmRQYXR0ZXJuLFxuXHR1c2VyTG9naW5QYXR0ZXJuLFxuXSApO1xuXG53aW5kb3cuSmV0RkJDb21wb25lbnRzID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZCQ29tcG9uZW50cyA/PyB7fVxuXHQpLFxuXHRQYXR0ZXJuSW5zZXJ0ZXJCdXR0b24sXG59O1xuXG53aW5kb3cuSmV0RkJIb29rcyA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGQkhvb2tzID8/IHt9XG5cdCksXG5cdHVzZVBhdHRlcm4sXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==