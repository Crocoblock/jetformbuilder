/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor-package/components/BuilderHelpSlotFill.js":
/*!**********************************************************!*\
  !*** ./editor-package/components/BuilderHelpSlotFill.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);

const BuilderHelpSlotFill = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.createSlotFill)('JFBBuilderHelp');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuilderHelpSlotFill);

/***/ }),

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



const {
  Button,
  Popover,
  Icon
} = wp.components;
const {
  __
} = wp.i18n;
const {
  useTriggerPopover
} = JetFBHooks;
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
  } = useTriggerPopover();
  const blocks = (0,_hooks_useAnotherBlocks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    pattern,
    insert,
    append
  } = (0,_hooks_usePattern__WEBPACK_IMPORTED_MODULE_1__["default"])({
    name: patternName,
    onApply
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
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
  }), showPopover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
    position: 'top-start',
    noArrow: false,
    isAlternate: true,
    ...popoverProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '0.5em',
      width: 'max-content'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __('I want to', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isLink: true,
    isDestructive: true,
    onClick: () => insert()
  }, __('replace', 'jet-form-builder')), ' / ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    isLink: true,
    onClick: () => append()
  }, __('append', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __('form settings and blocks', 'jet-form-builder')))));
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

const {
  useTriggerPopover
} = JetFBHooks;
const {
  Button,
  Popover,
  ExternalLink
} = wp.components;
const {
  __
} = wp.i18n;
function ProSinglePattern({
  pattern
}) {
  var _pattern$link;
  const {
    ref,
    showPopover,
    setShowPopover,
    popoverProps
  } = useTriggerPopover();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "is-pro"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    ref: ref,
    icon: pattern.icon,
    onClick: () => setShowPopover(prev => !prev),
    label: pattern.description || pattern.title,
    variant: "secondary",
    iconSize: 32,
    className: "block-editor-block-variation-picker__variation"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-editor-block-variation-picker__variation-label"
  }, pattern.title), showPopover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
    position: 'top-start',
    noArrow: false,
    isAlternate: true,
    ...popoverProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '0.5em',
      width: 'max-content'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __('This is paid addon. You can buy it here:', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ExternalLink, {
    href: (_pattern$link = pattern.link) !== null && _pattern$link !== void 0 ? _pattern$link : 'https://jetformbuilder.com/pricing/'
  }, "jetformbuilder.com"))));
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

/***/ "./editor-package/useFormStore/actions.js":
/*!************************************************!*\
  !*** ./editor-package/useFormStore/actions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./editor-package/useFormStore/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  registerBuilders(items) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].registerBuilders,
      items
    };
  },
  unRegisterBuilders(names) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["default"].unRegisterBuilders,
      names
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

/***/ "./editor-package/useFormStore/constants.js":
/*!**************************************************!*\
  !*** ./editor-package/useFormStore/constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: 'jet-forms/use-form',
  registerBuilders: 'REGISTER_BUIlDER',
  unRegisterBuilders: 'UNREGISTER_BUILDER',
  updateSettings: 'UPDATE_SETTING'
});

/***/ }),

/***/ "./editor-package/useFormStore/dispatchers.js":
/*!****************************************************!*\
  !*** ./editor-package/useFormStore/dispatchers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./editor-package/useFormStore/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./editor-package/useFormStore/selectors.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].registerBuilders](state, action) {
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
        state.builders.push({
          ...item
        });
      } else {
        state.builders[issetIndex] = {
          ...state.builders[issetIndex],
          ...item
        };
      }
    }
    return state;
  },
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].unRegisterBuilders](state, action) {
    const {
      names
    } = action;
    state.builders = state.builders.filter(({
      name
    }) => !names.includes(name));
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

/***/ "./editor-package/useFormStore/index.js":
/*!**********************************************!*\
  !*** ./editor-package/useFormStore/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./editor-package/useFormStore/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./editor-package/useFormStore/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./editor-package/useFormStore/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./editor-package/useFormStore/constants.js");




const {
  createReduxStore
} = wp.data;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReduxStore(_constants__WEBPACK_IMPORTED_MODULE_3__["default"].store, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./editor-package/useFormStore/reducer.js":
/*!************************************************!*\
  !*** ./editor-package/useFormStore/reducer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dispatchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatchers */ "./editor-package/useFormStore/dispatchers.js");

const DEFAULT_STATE = {
  builders: [],
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

/***/ "./editor-package/useFormStore/selectors.js":
/*!**************************************************!*\
  !*** ./editor-package/useFormStore/selectors.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectors = {
  getBuilderIndex(state, name) {
    return state.builders.findIndex(pattern => pattern.name === name);
  },
  getBuilders(state) {
    return state.builders.filter(({
      name
    }) => 'default' !== name);
  },
  getBuilder(state, slug) {
    const index = selectors.getBuilderIndex(state, slug);
    return state.builders[index];
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./editor-package/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patternsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patternsStore */ "./editor-package/patternsStore/index.js");
/* harmony import */ var _useFormStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFormStore */ "./editor-package/useFormStore/index.js");
/* harmony import */ var _patternsStore_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patternsStore/constants */ "./editor-package/patternsStore/constants.js");
/* harmony import */ var _patterns_insert_post_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/insert.post.js */ "./editor-package/patterns/insert.post.js");
/* harmony import */ var _patterns_default_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patterns/default.js */ "./editor-package/patterns/default.js");
/* harmony import */ var _patterns_feedback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns/feedback.js */ "./editor-package/patterns/feedback.js");
/* harmony import */ var _patterns_register_user_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patterns/register.user.js */ "./editor-package/patterns/register.user.js");
/* harmony import */ var _patterns_reset_password_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patterns/reset.password.js */ "./editor-package/patterns/reset.password.js");
/* harmony import */ var _patterns_user_login_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patterns/user.login.js */ "./editor-package/patterns/user.login.js");
/* harmony import */ var _patterns_donation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patterns/donation.js */ "./editor-package/patterns/donation.js");
/* harmony import */ var _patterns_contact_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patterns/contact.js */ "./editor-package/patterns/contact.js");
/* harmony import */ var _patterns_newsletter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns/newsletter.js */ "./editor-package/patterns/newsletter.js");
/* harmony import */ var _hooks_usePattern__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/usePattern */ "./editor-package/hooks/usePattern.js");
/* harmony import */ var _components_PatternInserterButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/PatternInserterButton */ "./editor-package/components/PatternInserterButton.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_BuilderHelpSlotFill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/BuilderHelpSlotFill */ "./editor-package/components/BuilderHelpSlotFill.js");
var _window$JetFBComponen, _window$JetFBHooks;
















(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_14__.register)(_patternsStore__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_14__.register)(_useFormStore__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_14__.dispatch)(_patternsStore_constants__WEBPACK_IMPORTED_MODULE_2__["default"].store).register([_patterns_default_js__WEBPACK_IMPORTED_MODULE_4__["default"], _patterns_contact_js__WEBPACK_IMPORTED_MODULE_10__["default"], _patterns_feedback_js__WEBPACK_IMPORTED_MODULE_5__["default"], _patterns_newsletter_js__WEBPACK_IMPORTED_MODULE_11__["default"], _patterns_insert_post_js__WEBPACK_IMPORTED_MODULE_3__["default"], _patterns_register_user_js__WEBPACK_IMPORTED_MODULE_6__["default"], _patterns_donation_js__WEBPACK_IMPORTED_MODULE_9__["default"], _patterns_reset_password_js__WEBPACK_IMPORTED_MODULE_7__["default"], _patterns_user_login_js__WEBPACK_IMPORTED_MODULE_8__["default"]]);
window.JetFBComponents = {
  ...((_window$JetFBComponen = window.JetFBComponents) !== null && _window$JetFBComponen !== void 0 ? _window$JetFBComponen : {}),
  PatternInserterButton: _components_PatternInserterButton__WEBPACK_IMPORTED_MODULE_13__["default"],
  BuilderHelpSlotFill: _components_BuilderHelpSlotFill__WEBPACK_IMPORTED_MODULE_15__["default"]
};
window.JetFBHooks = {
  ...((_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {}),
  usePattern: _hooks_usePattern__WEBPACK_IMPORTED_MODULE_12__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnBhY2thZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBYUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFRQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUtBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzdJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0QkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9jb21wb25lbnRzL0J1aWxkZXJIZWxwU2xvdEZpbGwuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9jb21wb25lbnRzL1BhdHRlcm5JbnNlcnRlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL2NvbXBvbmVudHMvUHJvU2luZ2xlUGF0dGVybi5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL2NvbXBvbmVudHMvU2luZ2xlUGF0dGVybi5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL2hvb2tzL3VzZUFub3RoZXJCbG9ja3MuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9ob29rcy91c2VQYXR0ZXJuLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnNTdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnNTdG9yZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJuc1N0b3JlL2Rpc3BhdGNoZXJzLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnNTdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zU3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zU3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJucy9kb25hdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnMvaW5zZXJ0LnBvc3QuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJucy9uZXdzbGV0dGVyLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnMvcmVnaXN0ZXIudXNlci5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zL3Jlc2V0LnBhc3N3b3JkLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnMvdXNlci5sb2dpbi5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3VzZUZvcm1TdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvdXNlRm9ybVN0b3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3VzZUZvcm1TdG9yZS9kaXNwYXRjaGVycy5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3VzZUZvcm1TdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3VzZUZvcm1TdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvdXNlRm9ybVN0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja3NcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsb3RGaWxsIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEJ1aWxkZXJIZWxwU2xvdEZpbGwgPSBjcmVhdGVTbG90RmlsbCggJ0pGQkJ1aWxkZXJIZWxwJyApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVpbGRlckhlbHBTbG90RmlsbDsiLCJpbXBvcnQgdXNlUGF0dGVybiBmcm9tICcuLi9ob29rcy91c2VQYXR0ZXJuJztcclxuaW1wb3J0IHVzZUFub3RoZXJCbG9ja3MgZnJvbSAnLi4vaG9va3MvdXNlQW5vdGhlckJsb2Nrcyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQnV0dG9uLFxyXG5cdCAgICAgIFBvcG92ZXIsXHJcblx0ICAgICAgSWNvbixcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZVRyaWdnZXJQb3BvdmVyLFxyXG4gICAgICB9ID0gSmV0RkJIb29rcztcclxuXHJcbmZ1bmN0aW9uIFBhdHRlcm5JbnNlcnRlckJ1dHRvbigge1xyXG5cdHBhdHRlcm5OYW1lLFxyXG5cdHdpdGhQYXR0ZXJuSWNvbiA9IGZhbHNlLFxyXG5cdG9uQ2xpY2sgPSBmYWxzZSxcclxuXHRvbkFwcGx5ID0gKCkgPT4ge30sXHJcblx0Li4ucHJvcHNcclxufSApIHtcclxuXHRjb25zdCB7XHJcblx0XHQgICAgICByZWYsXHJcblx0XHQgICAgICBzaG93UG9wb3ZlcixcclxuXHRcdCAgICAgIHNldFNob3dQb3BvdmVyLFxyXG5cdFx0ICAgICAgcG9wb3ZlclByb3BzLFxyXG5cdCAgICAgIH0gPSB1c2VUcmlnZ2VyUG9wb3ZlcigpO1xyXG5cclxuXHRjb25zdCBibG9ja3MgPSB1c2VBbm90aGVyQmxvY2tzKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHBhdHRlcm4sXHJcblx0XHQgICAgICBpbnNlcnQsXHJcblx0XHQgICAgICBhcHBlbmQsXHJcblx0ICAgICAgfSA9IHVzZVBhdHRlcm4oIHtcclxuXHRcdG5hbWU6IHBhdHRlcm5OYW1lLFxyXG5cdFx0b25BcHBseSxcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PEJ1dHRvblxyXG5cdFx0XHRyZWY9eyByZWYgfVxyXG5cdFx0XHRpY29uPXsgd2l0aFBhdHRlcm5JY29uICYmIHBhdHRlcm4uaWNvbiB9XHJcblx0XHRcdGljb25TaXplPVwiNDhcIlxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9uQ2xpY2sgKSB7XHJcblx0XHRcdFx0XHRvbkNsaWNrKCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICggYmxvY2tzLmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdHNldFNob3dQb3BvdmVyKCBwcmV2ID0+ICFwcmV2ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aW5zZXJ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IH1cclxuXHRcdFx0bGFiZWw9eyBwYXR0ZXJuLmRlc2NyaXB0aW9uIHx8IHBhdHRlcm4udGl0bGUgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+XHJcblx0XHR7IHNob3dQb3BvdmVyICYmIChcclxuXHRcdFx0PFBvcG92ZXJcclxuXHRcdFx0XHRwb3NpdGlvbj17ICd0b3Atc3RhcnQnIH1cclxuXHRcdFx0XHRub0Fycm93PXsgZmFsc2UgfVxyXG5cdFx0XHRcdGlzQWx0ZXJuYXRlXHJcblx0XHRcdFx0eyAuLi5wb3BvdmVyUHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICcwLjVlbScsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnbWF4LWNvbnRlbnQnLFxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHNwYW4+eyBfXyggJ0kgd2FudCB0bycsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L3NwYW4+XHJcblx0XHRcdFx0XHQmbmJzcDtcclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNMaW5rXHJcblx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGluc2VydCgpIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ3JlcGxhY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdHsgJyAvICcgfVxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGFwcGVuZCgpIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ2FwcGVuZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0Jm5ic3A7XHJcblx0XHRcdFx0XHQ8c3Bhbj57IF9fKFxyXG5cdFx0XHRcdFx0XHQnZm9ybSBzZXR0aW5ncyBhbmQgYmxvY2tzJyxcclxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdFx0KSB9PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1BvcG92ZXI+XHJcblx0XHQpIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdHRlcm5JbnNlcnRlckJ1dHRvbjsiLCJjb25zdCB7XHJcblx0ICAgICAgdXNlVHJpZ2dlclBvcG92ZXIsXHJcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEJ1dHRvbixcclxuXHQgICAgICBQb3BvdmVyLFxyXG5cdCAgICAgIEV4dGVybmFsTGluayxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuZnVuY3Rpb24gUHJvU2luZ2xlUGF0dGVybiggeyBwYXR0ZXJuIH0gKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgcmVmLFxyXG5cdFx0ICAgICAgc2hvd1BvcG92ZXIsXHJcblx0XHQgICAgICBzZXRTaG93UG9wb3ZlcixcclxuXHRcdCAgICAgIHBvcG92ZXJQcm9wcyxcclxuXHQgICAgICB9ID0gdXNlVHJpZ2dlclBvcG92ZXIoKTtcclxuXHJcblx0cmV0dXJuIDxsaSBjbGFzc05hbWU9XCJpcy1wcm9cIj5cclxuXHRcdDxCdXR0b25cclxuXHRcdFx0cmVmPXsgcmVmIH1cclxuXHRcdFx0aWNvbj17IHBhdHRlcm4uaWNvbiB9XHJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93UG9wb3ZlciggcHJldiA9PiAhcHJldiApIH1cclxuXHRcdFx0bGFiZWw9eyBwYXR0ZXJuLmRlc2NyaXB0aW9uIHx8IHBhdHRlcm4udGl0bGUgfVxyXG5cdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0aWNvblNpemU9eyAzMiB9XHJcblx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb25cIlxyXG5cdFx0Lz5cclxuXHRcdDxzcGFuXHJcblx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb24tbGFiZWxcIlxyXG5cdFx0PlxyXG5cdFx0XHR7IHBhdHRlcm4udGl0bGUgfVxyXG5cdFx0PC9zcGFuPlxyXG5cdFx0eyBzaG93UG9wb3ZlciAmJiAoXHJcblx0XHRcdDxQb3BvdmVyXHJcblx0XHRcdFx0cG9zaXRpb249eyAndG9wLXN0YXJ0JyB9XHJcblx0XHRcdFx0bm9BcnJvdz17IGZhbHNlIH1cclxuXHRcdFx0XHRpc0FsdGVybmF0ZVxyXG5cdFx0XHRcdHsgLi4ucG9wb3ZlclByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC41ZW0nLFxyXG5cdFx0XHRcdFx0XHR3aWR0aDogJ21heC1jb250ZW50JyxcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxzcGFuPnsgX18oXHJcblx0XHRcdFx0XHRcdCdUaGlzIGlzIHBhaWQgYWRkb24uIFlvdSBjYW4gYnV5IGl0IGhlcmU6JyxcclxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdFx0KSB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0Jm5ic3A7XHJcblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rXHJcblx0XHRcdFx0XHRcdGhyZWY9eyBwYXR0ZXJuLmxpbmsgPz9cclxuXHRcdFx0XHRcdFx0XHQnaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vcHJpY2luZy8nIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0amV0Zm9ybWJ1aWxkZXIuY29tXHJcblx0XHRcdFx0XHQ8L0V4dGVybmFsTGluaz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Qb3BvdmVyPlxyXG5cdFx0KSB9XHJcblx0PC9saT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb1NpbmdsZVBhdHRlcm47IiwiaW1wb3J0IFBhdHRlcm5JbnNlcnRlckJ1dHRvbiBmcm9tICcuL1BhdHRlcm5JbnNlcnRlckJ1dHRvbic7XHJcblxyXG5mdW5jdGlvbiBTaW5nbGVQYXR0ZXJuKCB7IHBhdHRlcm4gfSApIHtcclxuXHRyZXR1cm4gPGxpPlxyXG5cdFx0PFBhdHRlcm5JbnNlcnRlckJ1dHRvblxyXG5cdFx0XHRrZXk9eyBwYXR0ZXJuLm5hbWUgfVxyXG5cdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0cGF0dGVybk5hbWU9eyBwYXR0ZXJuLm5hbWUgfVxyXG5cdFx0XHR3aXRoUGF0dGVybkljb25cclxuXHRcdFx0aWNvblNpemU9eyAzMiB9XHJcblx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb25cIlxyXG5cdFx0Lz5cclxuXHRcdDxzcGFuXHJcblx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb24tbGFiZWxcIlxyXG5cdFx0PlxyXG5cdFx0XHR7IHBhdHRlcm4udGl0bGUgfVxyXG5cdFx0PC9zcGFuPlxyXG5cdDwvbGk+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQYXR0ZXJuOyIsImNvbnN0IHtcclxuXHQgICAgICB1c2VCbG9ja0VkaXRDb250ZXh0LFxyXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlU2VsZWN0LFxyXG4gICAgICB9ID0gd3AuZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgcm9vdC1sZXZlbCBibG9ja3Mgd2l0aG91dCBjdXJyZW50IGJsb2NrXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cclxuICovXHJcbmZ1bmN0aW9uIHVzZUFub3RoZXJCbG9ja3MoKSB7XHJcblx0Y29uc3QgY29udGV4dCA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcclxuXHJcblx0cmV0dXJuIHVzZVNlbGVjdChcclxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKS5maWx0ZXIoXHJcblx0XHRcdGJsb2NrID0+IGJsb2NrLmNsaWVudElkICE9PSBjb250ZXh0LmNsaWVudElkLFxyXG5cdFx0KSxcclxuXHRcdFsgY29udGV4dC5pc1NlbGVjdGVkLCBjb250ZXh0LmNsaWVudElkIF0sXHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQW5vdGhlckJsb2NrczsiLCJpbXBvcnQgdXNlQW5vdGhlckJsb2NrcyBmcm9tICcuL3VzZUFub3RoZXJCbG9ja3MnO1xyXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL3BhdHRlcm5zU3RvcmUvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlQmxvY2tFZGl0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcclxuaW1wb3J0IHsgY3JlYXRlQmxvY2tzRnJvbUlubmVyQmxvY2tzVGVtcGxhdGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgY29udmVydEZsb3csXHJcbiAgICAgIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlQWN0aW9ucyxcclxuICAgICAgfSA9IEpldEZCSG9va3M7XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5hbWUge1N0cmluZ31cclxuICogQHBhcmFtIG9uQXBwbHkge0Z1bmN0aW9ufHVuZGVmaW5lZH1cclxuICogQHJldHVybnMge3tibG9ja3M6IE9iamVjdFtdLCBwYXR0ZXJuOiBPYmplY3QsIGluc2VydDogRnVuY3Rpb24sIGFwcGVuZDpcclxuICogICAgIEZ1bmN0aW9ufX1cclxuICovXHJcbmZ1bmN0aW9uIHVzZVBhdHRlcm4oIHsgbmFtZSwgb25BcHBseSA9ICgpID0+IHt9IH0gKSB7XHJcblx0Y29uc3QgeyBjbGllbnRJZCB9ICAgICAgICAgPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XHJcblx0Y29uc3QgYmxvY2tzICAgICAgICAgICAgICAgPSB1c2VBbm90aGVyQmxvY2tzKCk7XHJcblx0Y29uc3QgeyBlZGl0UG9zdCB9ICAgICAgICAgPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cdGNvbnN0IHsgY3JlYXRlSW5mb05vdGljZSB9ID0gdXNlRGlzcGF0Y2goIHdwLm5vdGljZXMuc3RvcmUgKTtcclxuXHJcblx0Y29uc3QgWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF0gPSB1c2VBY3Rpb25zKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHJlbW92ZUJsb2NrcyxcclxuXHRcdCAgICAgIHJlcGxhY2VCbG9ja3MsXHJcblx0XHQgICAgICBpbnNlcnRCbG9ja3MsXHJcblx0ICAgICAgfSA9IHVzZURpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICk7XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gICAgPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCBjb25zdGFudHMuc3RvcmUgKS5nZXRUeXBlKCBuYW1lICksXHJcblx0XHRbXSxcclxuXHQpO1xyXG5cdGNvbnN0IHNhdmVSZWNvcmQgPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCBjb25zdGFudHMuc3RvcmUgKS5nZXRTZXR0aW5nKCAnc2F2ZVJlY29yZCcgKSxcclxuXHRcdFtdLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlOb3RpY2UgPSAoKSA9PiBjcmVhdGVJbmZvTm90aWNlKFxyXG5cdFx0cGF0dGVybj8uYXBwbHlUZXh0ID8/XHJcblx0XHRfXyhcclxuXHRcdFx0J05ldyBibG9ja3MgYW5kIGFjdGlvbnMgaGF2ZSBiZWVuIGFkZGVkJyxcclxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0KSxcclxuXHRcdHtcclxuXHRcdFx0dHlwZTogJ3NuYWNrYmFyJyxcclxuXHRcdH0sXHJcblx0KTtcclxuXHJcblx0ZnVuY3Rpb24gaW5zZXJ0KCBlZGl0ZWRQYXR0ZXJuID0ge30gKSB7XHJcblx0XHRhcHBseVBhdHRlcm4oIGVkaXRlZFBhdHRlcm4gKTtcclxuXHJcblx0XHRlZGl0ZWRQYXR0ZXJuID0ge1xyXG5cdFx0XHQuLi5wYXR0ZXJuLFxyXG5cdFx0XHQuLi5lZGl0ZWRQYXR0ZXJuLFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZW1vdmVCbG9ja3MoXHJcblx0XHRcdGJsb2Nrcy5tYXAoICggeyBjbGllbnRJZDogaWQgfSApID0+IGlkICksXHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIGluc2VydGluZyBhY3Rpb25zXHJcblx0XHRjb25zdCBmbG93ID0gY29udmVydEZsb3coIGVkaXRlZFBhdHRlcm4/LmFjdGlvbnMgPz8gW10gKTtcclxuXHJcblx0XHRpZiAoIHNhdmVSZWNvcmQgKSB7XHJcblx0XHRcdGZsb3cuYWRkKCAnc2F2ZV9yZWNvcmQnICk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0QWN0aW9ucyggZmxvdy5saXN0ICk7XHJcblx0XHRkaXNwbGF5Tm90aWNlKCk7XHJcblx0XHRvbkFwcGx5KCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhcHBlbmQoIGVkaXRlZFBhdHRlcm4gPSB7fSApIHtcclxuXHRcdGFwcGx5UGF0dGVybiggZWRpdGVkUGF0dGVybiApO1xyXG5cclxuXHRcdGVkaXRlZFBhdHRlcm4gPSB7XHJcblx0XHRcdC4uLnBhdHRlcm4sXHJcblx0XHRcdC4uLmVkaXRlZFBhdHRlcm4sXHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGluc2VydGluZyBhY3Rpb25zXHJcblx0XHRjb25zdCBmbG93ID0gY29udmVydEZsb3coIGVkaXRlZFBhdHRlcm4/LmFjdGlvbnMgPz8gW10gKTtcclxuXHJcblx0XHRpZiAoIHNhdmVSZWNvcmQgKSB7XHJcblx0XHRcdGZsb3cuYWRkKCAnc2F2ZV9yZWNvcmQnICk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0QWN0aW9ucyggWyAuLi5hY3Rpb25zLCAuLi5mbG93Lmxpc3QgXSApO1xyXG5cdFx0ZGlzcGxheU5vdGljZSgpO1xyXG5cdFx0b25BcHBseSgpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYXBwbHlQYXR0ZXJuKCBlZGl0ZWRQYXR0ZXJuID0ge30gKSB7XHJcblx0XHRlZGl0ZWRQYXR0ZXJuID0ge1xyXG5cdFx0XHQuLi5wYXR0ZXJuLFxyXG5cdFx0XHQuLi5lZGl0ZWRQYXR0ZXJuLFxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBpbnNlcnRpbmcgYmxvY2tzXHJcblx0XHQvLyBjbGllbnRJZCBtYXkgYmUgZW1wdHkgaWYgd2UgdXNlIHRoaXMgaG9vayBvdXRzaWRlIGJsb2NrLWVkaXQgZnVuY3Rpb25cclxuXHRcdGNsaWVudElkID8gcmVwbGFjZUJsb2NrcyhcclxuXHRcdFx0WyBjbGllbnRJZCBdLFxyXG5cdFx0XHRjcmVhdGVCbG9ja3NGcm9tSW5uZXJCbG9ja3NUZW1wbGF0ZShcclxuXHRcdFx0XHRlZGl0ZWRQYXR0ZXJuPy5ibG9ja3MgPz8gW10sXHJcblx0XHRcdCksXHJcblx0XHRcdDAsXHJcblx0XHQpIDogaW5zZXJ0QmxvY2tzKFxyXG5cdFx0XHRjcmVhdGVCbG9ja3NGcm9tSW5uZXJCbG9ja3NUZW1wbGF0ZShcclxuXHRcdFx0XHRlZGl0ZWRQYXR0ZXJuPy5ibG9ja3MgPz8gW10sXHJcblx0XHRcdCksXHJcblx0XHQpO1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ICAgICAgYWN0aW9uczogcGF0dGVybkFjdGlvbnMsXHJcblx0XHRcdCAgICAgIGJsb2NrczogcGF0dGVybkJsb2NrcyxcclxuXHRcdFx0ICAgICAgbmFtZSxcclxuXHRcdFx0ICAgICAgaWNvbixcclxuXHRcdFx0ICAgICAgdGl0bGUsXHJcblx0XHRcdCAgICAgIGRlc2NyaXB0aW9uLFxyXG5cdFx0XHQgICAgICB2aWV3LFxyXG5cdFx0XHQgICAgICBhcHBseVRleHQsXHJcblx0XHRcdCAgICAgIC4uLnJhd0Zvcm1EYXRhXHJcblx0XHQgICAgICB9ID0gZWRpdGVkUGF0dGVybjtcclxuXHJcblx0XHRpZiAoICFPYmplY3Qua2V5cyggcmF3Rm9ybURhdGEgKS5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRlZGl0UG9zdCggcmF3Rm9ybURhdGEgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7IHBhdHRlcm4sIGluc2VydCwgYXBwZW5kLCBibG9ja3MgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUGF0dGVybjsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRyZWdpc3RlciggaXRlbXMgKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0eXBlOiBjb25zdGFudHMucmVnaXN0ZXIsXHJcblx0XHRcdGl0ZW1zLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHVuUmVnaXN0ZXIoIHR5cGVzICkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZTogY29uc3RhbnRzLnVuUmVnaXN0ZXIsXHJcblx0XHRcdHR5cGVzLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHVwZGF0ZVNldHRpbmdzKCBzZXR0aW5ncyApIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6IGNvbnN0YW50cy51cGRhdGVTZXR0aW5ncyxcclxuXHRcdFx0c2V0dGluZ3MsXHJcblx0XHR9O1xyXG5cdH0sXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdHN0b3JlOiAnamV0LWZvcm1zL3BhdHRlcm5zJyxcclxuXHRyZWdpc3RlcjogJ1JFR0lTVEVSJyxcclxuXHR1blJlZ2lzdGVyOiAnVU5SRUdJU1RFUicsXHJcblx0dXBkYXRlU2V0dGluZ3M6ICdVUERBVEVfU0VUVElORycsXHJcbn07XHJcblxyXG5cclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgU2luZ2xlUGF0dGVybiBmcm9tICcuLi9jb21wb25lbnRzL1NpbmdsZVBhdHRlcm4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdFsgY29uc3RhbnRzLnJlZ2lzdGVyIF0oIHN0YXRlLCBhY3Rpb24gKSB7XHJcblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCBhY3Rpb24uaXRlbXMgKSApIHtcclxuXHRcdFx0YWN0aW9uLml0ZW1zID0gWyBhY3Rpb24uaXRlbXMgXTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCBsZXQgaXRlbSBvZiBhY3Rpb24uaXRlbXMgKSB7XHJcblxyXG5cdFx0XHRpZiAoICFpdGVtLmhhc093blByb3BlcnR5KCAnbmFtZScgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgaXNzZXRJbmRleCA9IHNlbGVjdG9ycy5nZXRUeXBlSW5kZXgoIHN0YXRlLCBpdGVtLm5hbWUgKTtcclxuXHJcblx0XHRcdC8vIGlzIG5ldyBwYXR0ZXJuIHR5cGVcclxuXHRcdFx0aWYgKCAtMSA9PT0gaXNzZXRJbmRleCApIHtcclxuXHRcdFx0XHRpZiAoICFpdGVtPy52aWV3ICkge1xyXG5cdFx0XHRcdFx0aXRlbS52aWV3ID0gU2luZ2xlUGF0dGVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHN0YXRlLnR5cGVzLnB1c2goIHsgLi4uaXRlbSB9ICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgZWRpdGVkUGF0dGVybiA9IHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLnR5cGVzWyBpc3NldEluZGV4IF0sXHJcblx0XHRcdFx0XHQuLi5pdGVtLFxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmICggIWVkaXRlZFBhdHRlcm4/LnZpZXcgKSB7XHJcblx0XHRcdFx0XHRlZGl0ZWRQYXR0ZXJuLnZpZXcgPSBTaW5nbGVQYXR0ZXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3RhdGUudHlwZXNbIGlzc2V0SW5kZXggXSA9IGVkaXRlZFBhdHRlcm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fSxcclxuXHRbIGNvbnN0YW50cy51blJlZ2lzdGVyIF0oIHN0YXRlLCBhY3Rpb24gKSB7XHJcblx0XHRjb25zdCB7IHR5cGVzIH0gPSBhY3Rpb247XHJcblxyXG5cdFx0c3RhdGUudHlwZXMgPSBzdGF0ZS50eXBlcy5maWx0ZXIoXHJcblx0XHRcdCggeyBuYW1lIH0gKSA9PiAhdHlwZXMuaW5jbHVkZXMoIG5hbWUgKSxcclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH0sXHJcblx0WyBjb25zdGFudHMudXBkYXRlU2V0dGluZ3MgXSggc3RhdGUsIGFjdGlvbiApIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MgfSA9IGFjdGlvbjtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHQuLi5zdGF0ZS5zZXR0aW5ncyxcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSxcclxufTsiLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCB7IGNyZWF0ZVJlZHV4U3RvcmUgfSA9IHdwLmRhdGE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCBjb25zdGFudHMuc3RvcmUsIHtcclxuXHRyZWR1Y2VyLFxyXG5cdGFjdGlvbnMsXHJcblx0c2VsZWN0b3JzLFxyXG59ICk7XHJcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcclxuXHJcbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XHJcblx0dHlwZXM6IFtdLFxyXG5cdHNldHRpbmdzOiB7XHJcblx0XHRzYXZlUmVjb3JkOiB0cnVlLFxyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gZGlzcGF0Y2hlcnNbIGFjdGlvbj8udHlwZSBdO1xyXG5cclxuXHRpZiAoIGNhbGxiYWNrICkge1xyXG5cdFx0cmV0dXJuIGNhbGxiYWNrKCBzdGF0ZSwgYWN0aW9uICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RhdGU7XHJcbn0iLCJjb25zdCBzZWxlY3RvcnMgPSB7XHJcblx0Z2V0VHlwZUluZGV4KCBzdGF0ZSwgbmFtZSApIHtcclxuXHRcdHJldHVybiBzdGF0ZS50eXBlcy5maW5kSW5kZXgoIHBhdHRlcm4gPT4gcGF0dGVybi5uYW1lID09PSBuYW1lICk7XHJcblx0fSxcclxuXHRnZXRUeXBlcyggc3RhdGUgKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUudHlwZXMuZmlsdGVyKCAoIHsgbmFtZSB9ICkgPT4gJ2RlZmF1bHQnICE9PSBuYW1lICk7XHJcblx0fSxcclxuXHRnZXRUeXBlKCBzdGF0ZSwgc2x1ZyApIHtcclxuXHRcdGNvbnN0IGluZGV4ID0gc2VsZWN0b3JzLmdldFR5cGVJbmRleCggc3RhdGUsIHNsdWcgKTtcclxuXHJcblx0XHRyZXR1cm4gc3RhdGUudHlwZXNbIGluZGV4IF07XHJcblx0fSxcclxuXHRnZXRTZXR0aW5nKCBzdGF0ZSwgbmFtZSApIHtcclxuXHRcdHJldHVybiBzdGF0ZS5zZXR0aW5nc1sgbmFtZSBdO1xyXG5cdH0sXHJcblx0Z2V0U2V0dGluZ3MoIHN0YXRlICkge1xyXG5cdFx0cmV0dXJuIHN0YXRlLnNldHRpbmdzO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Li4uc2VsZWN0b3JzLFxyXG59OyIsImNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2NvbnRhY3QnLFxyXG5cdHRpdGxlOiBfXyggJ0NvbnRhY3QgZm9ybScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGljb246IDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG5cdCAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xNi44IDEwQzE2LjM1ODIgMTAgMTYgMTAuNDQ3NyAxNiAxMUMxNiAxMS41NTIzIDE2LjM1ODIgMTIgMTYuOCAxMkgzMS4yQzMxLjY0MTggMTIgMzIgMTEuNTUyMyAzMiAxMUMzMiAxMC40NDc3IDMxLjY0MTggMTAgMzEuMiAxMEgxNi44WlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNMTIgMTlDMTIgMTcuMzQzMSAxMy4zNDMxIDE2IDE1IDE2SDMzQzM0LjY1NjkgMTYgMzYgMTcuMzQzMSAzNiAxOUMzNiAyMC42NTY5IDM0LjY1NjkgMjIgMzMgMjJIMTVDMTMuMzQzMSAyMiAxMiAyMC42NTY5IDEyIDE5Wk0xNSAxOEMxNC40NDc3IDE4IDE0IDE4LjQ0NzcgMTQgMTlDMTQgMTkuNTUyMyAxNC40NDc3IDIwIDE1IDIwSDMzQzMzLjU1MjMgMjAgMzQgMTkuNTUyMyAzNCAxOUMzNCAxOC40NDc3IDMzLjU1MjMgMTggMzMgMThIMTVaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk0xNSAyNEMxMy4zNDMxIDI0IDEyIDI1LjM0MzEgMTIgMjdDMTIgMjguNjU2OSAxMy4zNDMxIDMwIDE1IDMwSDMzQzM0LjY1NjkgMzAgMzYgMjguNjU2OSAzNiAyN0MzNiAyNS4zNDMxIDM0LjY1NjkgMjQgMzMgMjRIMTVaTTE0IDI3QzE0IDI2LjQ0NzcgMTQuNDQ3NyAyNiAxNSAyNkgzM0MzMy41NTIzIDI2IDM0IDI2LjQ0NzcgMzQgMjdDMzQgMjcuNTUyMyAzMy41NTIzIDI4IDMzIDI4SDE1QzE0LjQ0NzcgMjggMTQgMjcuNTUyMyAxNCAyN1pcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTE4IDM1QzE4IDMzLjM0MzEgMTkuMzQzMSAzMiAyMSAzMkgyN0MyOC42NTY5IDMyIDMwIDMzLjM0MzEgMzAgMzVDMzAgMzYuNjU2OSAyOC42NTY5IDM4IDI3IDM4SDIxQzE5LjM0MzEgMzggMTggMzYuNjU2OSAxOCAzNVpNMjEgMzRDMjAuNDQ3NyAzNCAyMCAzNC40NDc3IDIwIDM1QzIwIDM1LjU1MjMgMjAuNDQ3NyAzNiAyMSAzNkgyN0MyNy41NTIzIDM2IDI4IDM1LjU1MjMgMjggMzVDMjggMzQuNDQ3NyAyNy41NTIzIDM0IDI3IDM0SDIxWlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNOCA4QzggNS43OTA4NiA5Ljc5MDg2IDQgMTIgNEgzNkMzOC4yMDkxIDQgNDAgNS43OTA4NiA0MCA4VjQwQzQwIDQyLjIwOTEgMzguMjA5MSA0NCAzNiA0NEgxMkM5Ljc5MDg2IDQ0IDggNDIuMjA5MSA4IDQwVjhaTTEyIDZIMzZDMzcuMTA0NiA2IDM4IDYuODk1NDMgMzggOFY0MEMzOCA0MS4xMDQ2IDM3LjEwNDYgNDIgMzYgNDJIMTJDMTAuODk1NCA0MiAxMCA0MS4xMDQ2IDEwIDQwVjhDMTAgNi44OTU0MyAxMC44OTU0IDYgMTIgNlpcIlxyXG5cdFx0Lz5cclxuXHQ8L3N2Zz4sXHJcblx0YWN0aW9uczogW1xyXG5cdFx0e1xyXG5cdFx0XHQndHlwZSc6ICdzZW5kX2VtYWlsJyxcclxuXHRcdFx0J3NldHRpbmdzJzoge1xyXG5cdFx0XHRcdCdtYWlsX3RvJzogJ2Zvcm0nLFxyXG5cdFx0XHRcdCdmcm9tX2ZpZWxkJzogJ2VtYWlsJyxcclxuXHRcdFx0XHQnc3ViamVjdCc6ICclc3ViamVjdCUnLFxyXG5cdFx0XHRcdCdjb250ZW50JzogJyVtZXNzYWdlJScsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0YmxvY2tzOiBbXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnbmFtZSc6ICdlbWFpbCcsXHJcblx0XHRcdFx0J2xhYmVsJzogJ0VtYWlsJyxcclxuXHRcdFx0XHQnZmllbGRfdHlwZSc6ICdlbWFpbCcsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3RleHQtZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAnc3ViamVjdCcsXHJcblx0XHRcdFx0J2xhYmVsJzogJ1N1YmplY3QnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy93eXNpd3lnLWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ21lc3NhZ2UnLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdNZXNzYWdlJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcclxuXHRcdF0sXHJcblx0XSxcclxuXHRhcHBseVRleHQ6IF9fKFxyXG5cdFx0JzQgYmxvY2tzIGFuZCBTZW5kIEVtYWlsIGFjdGlvbiBoYXZlIGJlZW4gYWRkZWQnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07IiwiY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnZGVmYXVsdCcsXHJcblx0dGl0bGU6IF9fKCAnRnJvbSBzY3JhdGNoJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0YmxvY2tzOiBbXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvaGlkZGVuLWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ3Bvc3RfaWQnLFxyXG5cdFx0XHRcdCdmaWVsZF92YWx1ZSc6ICdwb3N0X2lkJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnbmFtZSc6ICd0ZXh0X2ZpZWxkJyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnVGV4dCcsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcsXHJcblx0XHRdLFxyXG5cdF0sXHJcblx0YWN0aW9uczogW10sXHJcblx0YXBwbHlUZXh0OiBfXyggJzMgYmxvY2sgaGFzIGJlZW4gYWRkZWQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdkb25hdGlvbicsXHJcblx0dGl0bGU6IF9fKCAnUGF5cGFsIGRvbmF0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcblx0ICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTEyIDE5LjAwNzVDMTIgMTguNDUxMSAxMi40NDc3IDE4LjAwMDEgMTMgMTguMDAwMUgyN0MyNy41NTIzIDE4LjAwMDEgMjggMTguNDUxMSAyOCAxOS4wMDc1QzI4IDE5LjU2MzkgMjcuNTUyMyAyMC4wMTQ5IDI3IDIwLjAxNDlIMTNDMTIuNDQ3NyAyMC4wMTQ5IDEyIDE5LjU2MzkgMTIgMTkuMDA3NVpcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTMgMjIuMDI5N0MxMi40NDc3IDIyLjAyOTcgMTIgMjIuNDgwNyAxMiAyMy4wMzcxQzEyIDIzLjU5MzQgMTIuNDQ3NyAyNC4wNDQ1IDEzIDI0LjA0NDVIMjFDMjEuNTUyMyAyNC4wNDQ1IDIyIDIzLjU5MzQgMjIgMjMuMDM3MUMyMiAyMi40ODA3IDIxLjU1MjMgMjIuMDI5NyAyMSAyMi4wMjk3SDEzWlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNMzguNDE3OSAyOS4xODY4QzM5LjM3OTMgMjguNDU2MyA0MCAyNy4zMDA2IDQwIDI2VjEyQzQwIDkuNzkwODYgMzguMjA5MSA4IDM2IDhIMTJDOS43OTA4NiA4IDggOS43OTA4NiA4IDEyVjI2QzggMjguMjA5MSA5Ljc5MDg2IDMwIDEyIDMwSDI1LjA1MjRMMjQuMjA1NyAzNC44MjcyQzI0LjA5ODQgMzUuNDM5MyAyNC41NjkzIDM2IDI1LjE5MDcgMzZIMjcuNjgzTDI3LjE5OTUgMzguODMxOEMyNy4wOTUyIDM5LjQ0MjUgMjcuNTY1NyA0MC4wMDAxIDI4LjE4NTIgNDAuMDAwMUgzMS43Mjk5QzMyLjIxNzIgNDAuMDAwMSAzMi42MzM1IDM5LjY0ODkgMzIuNzE1NiAzOS4xNjg3TDMzLjEzNDIgMzYuNzIwNkMzMy44ODY1IDM2LjY5MjMgMzUuNjUwNCAzNi41MjA2IDM2LjM0MDQgMzYuMTYxM0wzNi4zNDY3IDM2LjE1OEMzNy4wOTk3IDM1Ljc2MjQgMzcuNzIyMSAzNS4xOTE4IDM4LjE4MTggMzQuNDY1NEMzOC42NTI3IDMzLjcyMzUgMzguOTAwMiAzMi44OTQ1IDM4Ljk3NzYgMzIuMDM4M0wzOC45NzgyIDMyLjAzMUMzOS4wNDYgMzEuMjUwNyAzOC45NiAzMC40NjA1IDM4LjY2MDUgMjkuNzA2OUMzOC41OTAzIDI5LjUyNjkgMzguNTA5MyAyOS4zNTMzIDM4LjQxNzkgMjkuMTg2OFpNMzYgMTBIMTJDMTAuOTAwMyAxMCAxMC4wMDc5IDEwLjg4NzUgMTAuMDAwMSAxMS45ODU0SDM3Ljk5OTlDMzcuOTkyMSAxMC44ODc1IDM3LjA5OTcgMTAgMzYgMTBaTTM4IDE0LjAwMDFIMTBWMjZDMTAgMjcuMTA0NiAxMC44OTU0IDI4IDEyIDI4SDI1LjQwMzJMMjYuMzEwMiAyMi44Mjg3QzI2LjM5NDMgMjIuMzQ5NyAyNi44MTA3IDIyLjAwMDYgMjcuMjk3IDIyLjAwMTVMMzIuMzc4MyAyMi4wMTA2TDMyLjQwNzQgMjIuMDExNUMzMy4zMTg3IDIyLjAzOTIgMzQuMjI5IDIyLjI3NDEgMzUuMDIxNyAyMi44Mjc5QzM1Ljc2MDIgMjMuMzM2IDM2LjMwMjcgMjQuMDI0NSAzNi42MzA2IDI0Ljg0MzRDMzYuOTU1MyAyNS42MzgyIDM3LjA1MDYgMjYuNDc2MyAzNi45NzYgMjcuMzEyNkwzNi45NzU0IDI3LjMxOTZDMzYuOTY1NiAyNy40MjUyIDM2Ljk1MzQgMjcuNTMwMiAzNi45Mzg2IDI3LjYzNDdDMzYuOTc1IDI3LjY1NzIgMzcuMDExMyAyNy42ODAzIDM3LjA0NzMgMjcuNzA0MkMzNy42MTg5IDI3LjM1MjEgMzggMjYuNzIwNiAzOCAyNlYxNC4wMDAxWk0zMS41MTUzIDMwLjI5NzdDMzEuNjA5NiAzMC4yOTY3IDMxLjcwMjMgMzAuMjkyOSAzMS43OTM0IDMwLjI4NjRDMzIuMzAzIDMwLjI1MDEgMzIuNzYyNSAzMC4xMjgyIDMzLjE3MTggMjkuOTIwN0wzMy4xODUgMjkuOTEzOUwzMy4xOTU4IDI5LjkwODNDMzMuNjk0MiAyOS42NDg2IDM0LjA5MzkgMjkuMjg3IDM0LjM5NDggMjguODIzNkwzNC4zOTkgMjguODE3MUwzNC40MDU0IDI4LjgwNzNDMzQuNjc1IDI4LjM4ODggMzQuODQ4NSAyNy45MDM1IDM0LjkyNTggMjcuMzUxNEwzNC45MjYyIDI3LjM0ODdDMzQuOTM1OSAyNy4yNzkxIDM0Ljk0NDEgMjcuMjA4NCAzNC45NTA4IDI3LjEzNjdDMzQuOTgyOSAyNi43NzY3IDM0Ljk2NzIgMjYuNDM4NSAzNC45MDM2IDI2LjEyMkwzNC44OTggMjYuMDk0OEMzNC44NjEgMjUuOTE4NyAzNC44MDkxIDI1Ljc0OTUgMzQuNzQyMyAyNS41ODdDMzQuNjA4NSAyNS4yNTA0IDM0LjQxNjggMjQuOTYyNyAzNC4xNjcyIDI0LjcyMzhMMzQuMTUwNSAyNC43MDhDMzQuMDU4OSAyNC42MjIgMzMuOTU5NyAyNC41NDI0IDMzLjg1MjggMjQuNDY5M0MzMy40NTQ4IDI0LjE4OTQgMzIuOTU5NiAyNC4wMzg4IDMyLjM2NzMgMjQuMDE3NUwzMi4zNDQ4IDI0LjAxNjhMMjguMTY2NCAyNC4wMDk5TDI2LjUgMzRIMjhMMjguNjcxMSAzMC4yOTc4SDMxLjQyNzVDMzEuNDQ3NSAzMC4yOTggMzEuNDY3NCAzMC4yOTggMzEuNDg3MiAzMC4yOTc5TDMxLjUxNTMgMzAuMjk3N1pNMzAuMzk0OCAzMi40NjE0TDMwLjQyMjQgMzIuMzA0MUMzMS4zNDcgMzIuMzA3MSAzMy4yNjg3IDMyLjEyNzEgMzQuMTAwOSAzMS43MDUyTDM0LjEwNzIgMzEuNzAyQzM0LjkyODEgMzEuMjgyMiAzNS42MDQ3IDMwLjY3ODEgMzYuMTA1MSAyOS45MDgzQzM2LjE1MjQgMjkuODM1OCAzNi4xOTc2IDI5Ljc2MjUgMzYuMjQwOSAyOS42ODg0TDM2LjI0OTYgMjkuNjk2OEwzNi4yNjQgMjkuNzEwOEMzNi40NzkzIDI5LjkyMjUgMzYuNjQ0NyAzMC4xNzc1IDM2Ljc2MDEgMzAuNDc1OEMzNi44MTc4IDMwLjYxOTggMzYuODYyNSAzMC43Njk4IDM2Ljg5NDUgMzAuOTI1OEwzNi44OTkzIDMwLjk0OTlDMzYuOTU0MSAzMS4yMzA0IDM2Ljk2NzYgMzEuNTMwMSAzNi45Mzk5IDMxLjg0OTJDMzYuOTM0MiAzMS45MTI3IDM2LjkyNzEgMzEuOTc1MyAzNi45MTg4IDMyLjAzN0wzNi45MTg0IDMyLjAzOTRDMzYuODUxNyAzMi41Mjg2IDM2LjcwMjEgMzIuOTU4NyAzNi40Njk1IDMzLjMyOTdMMzYuNDY0IDMzLjMzODNMMzYuNDYwNCAzMy4zNDQxQzM2LjIwMDggMzMuNzU0OCAzNS44NTYgMzQuMDc1MiAzNS40MjYgMzQuMzA1NEwzNS40MTY3IDM0LjMxMDNMMzUuNDA1MyAzNC4zMTYzQzM1LjEzNTIgMzQuNDU3IDM0LjgzOTggMzQuNTUzMyAzNC41MTg5IDM0LjYwNTJDMzQuMzg0NCAzNC42MjY5IDM0LjI0NTQgMzQuNjQwOSAzNC4xMDIgMzQuNjQ3QzM0LjA2MDUgMzQuNjQ4OCAzNC4wMTg2IDM0LjY0OTkgMzMuOTc2MyAzNC42NTA0TDMzLjk1MjIgMzQuNjUwNkMzMy45MzUxIDM0LjY1MDcgMzMuOTE3OSAzNC42NTA3IDMzLjkwMDcgMzQuNjUwNkwzMS42MDU5IDM0LjY0N0wzMSAzNy45OTk5SDI5LjVMMzAuMzk0OCAzMi40NjE0WlwiXHJcblx0XHQvPlxyXG5cdDwvc3ZnPixcclxuXHRhY3Rpb25zOiBbXSxcclxuXHRibG9ja3M6IFtcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy9udW1iZXItZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAnYW1vdW50JyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnQW1vdW50JyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcclxuXHRcdF0sXHJcblx0XSxcclxuXHRtZXRhOiB7XHJcblx0XHRfamZfZ2F0ZXdheXM6ICd7XCJnYXRld2F5XCI6XCJwYXlwYWxcIixcInBheXBhbFwiOntcInVzZV9nbG9iYWxcIjp0cnVlLFwiY3VycmVuY3lcIjpcIlVTRFwiLFwic2NlbmFyaW9cIjp7XCJpZFwiOlwiUEFZX05PV1wifX0sXCJwcmljZV9maWVsZFwiOlwicHJpY2VcIn0nLFxyXG5cdH0sXHJcblx0YXBwbHlUZXh0OiBfXyhcclxuXHRcdCcyIGJsb2NrcyBhbmQgUGF5UGFsIEdhdGV3YXkgaGF2ZSBiZWVuIGFkZGVkJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0J25hbWUnOiAnZmVlZGJhY2snLFxyXG5cdCd0aXRsZSc6IF9fKCAnRmVlZGJhY2snLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRpY29uOiA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuXHQgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTEgMTQuMDQ0NEMxMC40NDc3IDE0LjA0NDQgMTAgMTQuNDk1NCAxMCAxNS4wNTE3QzEwIDE1LjYwODEgMTAuNDQ3NyAxNi4wNTkxIDExIDE2LjA1OTFIMzFDMzEuNTUyMyAxNi4wNTkxIDMyIDE1LjYwODEgMzIgMTUuMDUxN0MzMiAxNC40OTU0IDMxLjU1MjMgMTQuMDQ0NCAzMSAxNC4wNDQ0SDExWlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMCAxOS4wODEzQzEwIDE4LjUyNDkgMTAuNDQ3NyAxOC4wNzM5IDExIDE4LjA3MzlIMzFDMzEuNTUyMyAxOC4wNzM5IDMyIDE4LjUyNDkgMzIgMTkuMDgxM0MzMiAxOS42Mzc3IDMxLjU1MjMgMjAuMDg4NyAzMSAyMC4wODg3SDExQzEwLjQ0NzcgMjAuMDg4NyAxMCAxOS42Mzc3IDEwIDE5LjA4MTNaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTExIDIyLjEwMzVDMTAuNDQ3NyAyMi4xMDM1IDEwIDIyLjU1NDUgMTAgMjMuMTEwOUMxMCAyMy42NjcyIDEwLjQ0NzcgMjQuMTE4MyAxMSAyNC4xMTgzSDI2QzI2LjU1MjMgMjQuMTE4MyAyNyAyMy42NjcyIDI3IDIzLjExMDlDMjcgMjIuNTU0NSAyNi41NTIzIDIyLjEwMzUgMjYgMjIuMTAzNUgxMVpcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTYgMTIuMDI5NkM2IDkuODA0MSA3Ljc5MDg2IDggMTAgOEgzMkMzNC4yMDkxIDggMzYgOS44MDQxIDM2IDEyLjAyOTZWMjMuMTEwOUgzOEM0MC4yMDkxIDIzLjExMDkgNDIgMjQuOTE1IDQyIDI3LjE0MDRWMzMuMTg0OEM0MiAzNS40MTAzIDQwLjIwOTEgMzcuMjE0NCAzOCAzNy4yMTQ0SDM3LjI4NTdMMzQuODY2NCAzOS44MzlDMzQuNjY4NiA0MC4wNTM3IDM0LjMzMTQgNDAuMDUzNyAzNC4xMzM2IDM5LjgzOUwzMS43MTQzIDM3LjIxNDRIMjZDMjMuNzkwOSAzNy4yMTQ0IDIyIDM1LjQxMDMgMjIgMzMuMTg0OFYzMC4xNjI2SDE5LjIxNDNMMTUuODY2NCAzMy43OTQ3QzE1LjY2ODYgMzQuMDA5MyAxNS4zMzE0IDM0LjAwOTMgMTUuMTMzNiAzMy43OTQ3TDExLjc4NTcgMzAuMTYyNkgxMEM3Ljc5MDg2IDMwLjE2MjYgNiAyOC4zNTg1IDYgMjYuMTMzMVYxMi4wMjk2Wk0xMi42NTc5IDI4LjE0NzhMMTUuNSAzMS4yMzEyTDE4LjM0MjEgMjguMTQ3OEgzMkMzMy4xMDQ2IDI4LjE0NzggMzQgMjcuMjQ1OCAzNCAyNi4xMzMxVjEyLjAyOTZDMzQgMTAuOTE2OCAzMy4xMDQ2IDEwLjAxNDggMzIgMTAuMDE0OEgxMEM4Ljg5NTQzIDEwLjAxNDggOCAxMC45MTY4IDggMTIuMDI5NlYyNi4xMzMxQzggMjcuMjQ1OCA4Ljg5NTQzIDI4LjE0NzggMTAgMjguMTQ3OEgxMi42NTc5Wk0yNCAzMC4xNjI2VjMzLjE4NDhDMjQgMzQuMjk3NSAyNC44OTU0IDM1LjE5OTYgMjYgMzUuMTk5NkgzMi41ODY0TDM0LjUgMzcuMjc1NkwzNi40MTM2IDM1LjE5OTZIMzhDMzkuMTA0NiAzNS4xOTk2IDQwIDM0LjI5NzUgNDAgMzMuMTg0OFYyNy4xNDA0QzQwIDI2LjAyNzcgMzkuMTA0NiAyNS4xMjU3IDM4IDI1LjEyNTdIMzZWMjYuMTMzMUMzNiAyOC4zNTg1IDM0LjIwOTEgMzAuMTYyNiAzMiAzMC4xNjI2SDI0WlwiXHJcblx0XHQvPlxyXG5cdDwvc3ZnPixcclxuXHQnYWN0aW9ucyc6IFtcclxuXHRcdHtcclxuXHRcdFx0J3R5cGUnOiAnc2VuZF9lbWFpbCcsXHJcblx0XHRcdCdzZXR0aW5ncyc6IHtcclxuXHRcdFx0XHQnbWFpbF90byc6ICdmb3JtJyxcclxuXHRcdFx0XHQnZnJvbV9maWVsZCc6ICdlbWFpbCcsXHJcblx0XHRcdFx0J3N1YmplY3QnOiAnVXNlciBmZWVkYmFjaycsXHJcblx0XHRcdFx0J2NvbnRlbnQnOiAnTmFtZTogJW5hbWUlIC0gJXJhdGluZyU8YnIvPiVob3dfaW1wcm92ZSUnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdCdibG9ja3MnOiBbXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnbmFtZSc6ICduYW1lJyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnTmFtZScsXHJcblx0XHRcdFx0J3JlcXVpcmVkJzogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnbmFtZSc6ICdlbWFpbCcsXHJcblx0XHRcdFx0J2xhYmVsJzogJ0VtYWlsJyxcclxuXHRcdFx0XHQnZmllbGRfdHlwZSc6ICdlbWFpbCcsXHJcblx0XHRcdFx0J3JlcXVpcmVkJzogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvcmFkaW8tZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAncmF0aW5nJyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnUGxlYXNlIHJhdGUgb3VyIHdlYnNpdGUnLFxyXG5cdFx0XHRcdCdyZXF1aXJlZCc6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3RleHRhcmVhLWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ2hvd19pbXByb3ZlJyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnSG93IHdvdWxkIHlvdSBzdWdnZXN0IHRvIGltcHJvdmUgaXQ/JyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcclxuXHRcdF0sXHJcblx0XSxcclxuXHRhcHBseVRleHQ6IF9fKFxyXG5cdFx0JzUgYmxvY2tzIGFuZCBTZW5kIEVtYWlsIGFjdGlvbiBoYXZlIGJlZW4gYWRkZWQnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnaW5zZXJ0X3Bvc3QnLFxyXG5cdHRpdGxlOiBfXyggJ0luc2VydCBQb3N0JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcblx0ICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTEyIDE1LjAwNzRDMTIgMTQuNDUxIDEyLjQ0NzcgMTQgMTMgMTRIMjdDMjcuNTUyMyAxNCAyOCAxNC40NTEgMjggMTUuMDA3NEMyOCAxNS41NjM4IDI3LjU1MjMgMTYuMDE0OCAyNyAxNi4wMTQ4SDEzQzEyLjQ0NzcgMTYuMDE0OCAxMiAxNS41NjM4IDEyIDE1LjAwNzRaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTEzIDE4LjAyOTZDMTIuNDQ3NyAxOC4wMjk2IDEyIDE4LjQ4MDYgMTIgMTkuMDM3QzEyIDE5LjU5MzMgMTIuNDQ3NyAyMC4wNDQ0IDEzIDIwLjA0NDRIMjdDMjcuNTUyMyAyMC4wNDQ0IDI4IDE5LjU5MzMgMjggMTkuMDM3QzI4IDE4LjQ4MDYgMjcuNTUyMyAxOC4wMjk2IDI3IDE4LjAyOTZIMTNaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTEzIDIyLjA1OTFDMTIuNDQ3NyAyMi4wNTkxIDEyIDIyLjUxMDIgMTIgMjMuMDY2NUMxMiAyMy42MjI5IDEyLjQ0NzcgMjQuMDczOSAxMyAyNC4wNzM5SDIyQzIyLjU1MjMgMjQuMDczOSAyMyAyMy42MjI5IDIzIDIzLjA2NjVDMjMgMjIuNTEwMiAyMi41NTIzIDIyLjA1OTEgMjIgMjIuMDU5MUgxM1pcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTIgMjYuOTkyNkMxMiAyNi40MzYyIDEyLjQ0NzcgMjUuOTg1MiAxMyAyNS45ODUySDE5QzE5LjU1MjMgMjUuOTg1MiAyMCAyNi40MzYyIDIwIDI2Ljk5MjZDMjAgMjcuNTQ5IDE5LjU1MjMgMjggMTkgMjhIMTNDMTIuNDQ3NyAyOCAxMiAyNy41NDkgMTIgMjYuOTkyNlpcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMzAgMjhDMzAgMjcuNDQ3NyAzMC40NDc3IDI3IDMxIDI3QzMxLjU1MjMgMjcgMzIgMjcuNDQ3NyAzMiAyOFYzMEgzNEMzNC41NTIzIDMwIDM1IDMwLjQ0NzcgMzUgMzFDMzUgMzEuNTUyMyAzNC41NTIzIDMyIDM0IDMySDMyVjM0QzMyIDM0LjU1MjMgMzEuNTUyMyAzNSAzMSAzNUMzMC40NDc3IDM1IDMwIDM0LjU1MjMgMzAgMzRWMzJIMjhDMjcuNDQ3NyAzMiAyNyAzMS41NTIzIDI3IDMxQzI3IDMwLjQ0NzcgMjcuNDQ3NyAzMCAyOCAzMEgzMFYyOFpcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTMyIDEyVjIyLjA1NDlDMzYuNSAyMi41NTI0IDQwIDI2LjM2NzQgNDAgMzFDNDAgMzUuOTcwNiAzNS45NzA2IDQwIDMxIDQwQzI4Ljg1NjcgNDAgMjYuODg4NCAzOS4yNTA4IDI1LjM0MjcgMzhIMTJDOS43OTA4NiAzOCA4IDM2LjIwOTEgOCAzNFYxMkM4IDkuNzkwODYgOS43OTA4NiA4IDEyIDhIMjhDMzAuMjA5MSA4IDMyIDkuNzkwODYgMzIgMTJaTTEyIDEwSDI4QzI5LjEwNDYgMTAgMzAgMTAuODk1NCAzMCAxMlYyMi4wNTQ5QzI1LjUgMjIuNTUyNCAyMiAyNi4zNjc0IDIyIDMxQzIyIDMyLjg1MDEgMjIuNTU4MyAzNC41Njk5IDIzLjUxNTUgMzZIMTJDMTAuODk1NCAzNiAxMCAzNS4xMDQ2IDEwIDM0VjEyQzEwIDEwLjg5NTQgMTAuODk1NCAxMCAxMiAxMFpNMzggMzFDMzggMzQuODY2IDM0Ljg2NiAzOCAzMSAzOEMyNy4xMzQgMzggMjQgMzQuODY2IDI0IDMxQzI0IDI3LjEzNCAyNy4xMzQgMjQgMzEgMjRDMzQuODY2IDI0IDM4IDI3LjEzNCAzOCAzMVpcIlxyXG5cdFx0Lz5cclxuXHQ8L3N2Zz4sXHJcblx0YWN0aW9uczogW1xyXG5cdFx0e1xyXG5cdFx0XHQndHlwZSc6ICdpbnNlcnRfcG9zdCcsXHJcblx0XHRcdCdzZXR0aW5ncyc6IHtcclxuXHRcdFx0XHQnZmllbGRzX21hcCc6IHtcclxuXHRcdFx0XHRcdCd0aXRsZSc6ICdwb3N0X3RpdGxlJyxcclxuXHRcdFx0XHRcdCdleGNlcnB0JzogJ3Bvc3RfZXhjZXJwdCcsXHJcblx0XHRcdFx0XHQnY29udGVudCc6ICdwb3N0X2NvbnRlbnQnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J3Bvc3RfdHlwZSc6ICdwb3N0JyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRibG9ja3M6IFtcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ3RpdGxlJyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnUG9zdCBUaXRsZScsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3RleHRhcmVhLWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ2V4Y2VycHQnLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdQb3N0IEV4Y2VycHQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy93eXNpd3lnLWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ2NvbnRlbnQnLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdQb3N0IENvbnRlbnQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy9zdWJtaXQtZmllbGQnLFxyXG5cdFx0XSxcclxuXHRdLFxyXG5cdGFwcGx5VGV4dDogX18oXHJcblx0XHQnNCBibG9ja3MgYW5kIEluc2VydC9VcGRhdGUgUG9zdCBhY3Rpb24gaGF2ZSBiZWVuIGFkZGVkJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ25ld3NsZXR0ZXInLFxyXG5cdHRpdGxlOiBfXyggJ05ld3NsZXR0ZXIgU2lnbnVwIEZvcm0nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRpY29uOiA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuXHQgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMjkuNzA3MSAxNC43MDcxQzMwLjA5NzYgMTQuMzE2NiAzMC4wOTc2IDEzLjY4MzQgMjkuNzA3MSAxMy4yOTI5QzI5LjMxNjYgMTIuOTAyNCAyOC42ODM0IDEyLjkwMjQgMjguMjkyOSAxMy4yOTI5TDIzIDE4LjU4NThMMTkuNzA3MSAxNS4yOTI5QzE5LjMxNjYgMTQuOTAyNCAxOC42ODM0IDE0LjkwMjQgMTguMjkyOSAxNS4yOTI5QzE3LjkwMjQgMTUuNjgzNCAxNy45MDI0IDE2LjMxNjYgMTguMjkyOSAxNi43MDcxTDIxLjkzOTMgMjAuMzUzNkMyMi41MjUxIDIwLjkzOTMgMjMuNDc0OSAyMC45MzkzIDI0LjA2MDcgMjAuMzUzNkwyOS43MDcxIDE0LjcwNzFaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk04LjQ3MDEgMjEuNzA2M0wxNCAxOC4yNTExVjExQzE0IDkuMzQzMTUgMTUuMzQzMSA4IDE3IDhIMzFDMzIuNjU2OSA4IDM0IDkuMzQzMTUgMzQgMTFWMTguMjUxMUwzOS41Mjk5IDIxLjcwNjNDMzkuODIyMyAyMS44ODkgNDAgMjIuMjA5NSA0MCAyMi41NTQ0VjM3QzQwIDM4LjY1NjkgMzguNjU2OSA0MCAzNyA0MEgxMUM5LjM0MzE1IDQwIDggMzguNjU2OSA4IDM3VjIyLjU1NDRDOCAyMi4yMDk1IDguMTc3NjYgMjEuODg5IDguNDcwMSAyMS43MDYzWk0xNyAxMEgzMUMzMS41NTIzIDEwIDMyIDEwLjQ0NzcgMzIgMTFWMjUuNjc5M0wyOS4yMTkzIDI3LjYyNThMMjUuNDU1MSAyMy42MzMyQzI0LjY2NTcgMjIuNzk1OCAyMy4zMzQxIDIyLjc5NTggMjIuNTQ0NiAyMy42MzMyTDE4Ljc4MDYgMjcuNjI1N0wxNiAyNS42NzkzVjExQzE2IDEwLjQ0NzcgMTYuNDQ3NyAxMCAxNyAxMFpNMTcuMzk0IDI5LjA5NjVMMTAgMjMuOTIwN1YzNi45MzkzTDE3LjM5NCAyOS4wOTY1Wk0xNCAyMC42MDk0TDExLjIyOTggMjIuMzQwMkwxNCAyNC4yNzkzVjIwLjYwOTRaTTM0IDI0LjI3OTNWMjAuNjA5NEwzNi43NzAxIDIyLjM0MDJMMzQgMjQuMjc5M1pNMzAuNjA1OSAyOS4wOTY2TDM4IDIzLjkyMDdWMzYuOTM5NUwzMC42MDU5IDI5LjA5NjZaTTEwLjk5MSAzOEgzNy4wMDlMMzcgMzhIMTFMMTAuOTkxIDM4Wk0xMS43NTkgMzcuOTg5MUgzNi4yNDA4TDIzLjk5OTkgMjUuMDA1MUwxMS43NTkgMzcuOTg5MVpcIlxyXG5cdFx0Lz5cclxuXHQ8L3N2Zz4sXHJcblx0YWN0aW9uczogW1xyXG5cdFx0e1xyXG5cdFx0XHQndHlwZSc6ICdtYWlsY2hpbXAnLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGJsb2NrczogW1xyXG5cdFx0W1xyXG5cdFx0XHQnY29yZS9jb2x1bW5zJyxcclxuXHRcdFx0e30sXHJcblx0XHRcdFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQnY29yZS9jb2x1bW4nLFxyXG5cdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRbXHJcblx0XHRcdFx0XHRcdFtcclxuXHRcdFx0XHRcdFx0XHQnamV0LWZvcm1zL3RleHQtZmllbGQnLFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdCduYW1lJzogJ2VtYWlsJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdmaWVsZF90eXBlJzogJ2VtYWlsJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdwbGFjZWhvbGRlcic6ICdFbnRlciB5b3UgZW1haWwnLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0J2NvcmUvY29sdW1uJyxcclxuXHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0XHRbXHJcblx0XHRcdFx0XHRcdFx0J2pldC1mb3Jtcy9zdWJtaXQtZmllbGQnLFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRdLFxyXG5cdFx0XSxcclxuXHRdLFxyXG5cdGFwcGx5VGV4dDogX18oXHJcblx0XHQnMiBmb3JtIGZpZWxkcyBhbmQgTWFpbGNoaW1wIGFjdGlvbiBoYXZlIGJlZW4gYWRkZWQnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAncmVnaXN0ZXJfdXNlcicsXHJcblx0dGl0bGU6IF9fKCAnUmVnaXN0ZXIgVXNlcicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGljb246IDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG5cdCAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0zMiAyOEMzMS40NDc3IDI4IDMxIDI4LjQ0NzcgMzEgMjlWMzFIMjlDMjguNDQ3NyAzMSAyOCAzMS40NDc3IDI4IDMyQzI4IDMyLjU1MjMgMjguNDQ3NyAzMyAyOSAzM0gzMVYzNUMzMSAzNS41NTIzIDMxLjQ0NzcgMzYgMzIgMzZDMzIuNTUyMyAzNiAzMyAzNS41NTIzIDMzIDM1VjMzSDM1QzM1LjU1MjMgMzMgMzYgMzIuNTUyMyAzNiAzMkMzNiAzMS40NDc3IDM1LjU1MjMgMzEgMzUgMzFIMzNWMjlDMzMgMjguNDQ3NyAzMi41NTIzIDI4IDMyIDI4WlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNMjUuMzAyNyAyNy42MjI3QzI0Ljk4MzQgMjcuNTAwMyAyNC44MDI2IDI3LjM4NDUgMjQuNzA3MiAyNy4yODkxQzI0LjI1MDEgMjYuODMxOCAyNC4wODkyIDI2LjQwMDggMjQuMDMxOCAyNS44OTU3QzI3LjE4MTQgMjUuMjgzNiAyOSAyMS45OTU2IDI5IDE4Ljk5MjZMMjkgMTguODkyOUMyOS4wMDAxIDE3LjQ4MDYgMjkuMDAwMSAxNi40MDk3IDI4Ljg2MTQgMTUuNTc3QzI4LjcwNDkgMTQuNjM3NSAyOC4zNjU5IDEzLjk0MjUgMjcuNzA3MiAxMy4yODM3QzI2Ljg1NzQgMTIuNDMzNSAyNS40NTI2IDExLjYzMjEgMjQuODIxNCAxMS4yOTE2TDI0LjA2MjcgOS4wMTQ0OUMyMy44NjA5IDguNDA5IDIzLjI3ODYgNy45NjQ2NSAyMi41ODYzIDguMDAyNzdDMjEuOTQ2IDguMDM4MDMgMjAuNTk2NiA4LjE2MzY0IDE5LjExNjEgOC42MjA2NUMxNy42NDUgOS4wNzQ3NyAxNS45NTIzIDkuODg0NDcgMTQuNzMxNyAxMS4zNDk4QzEyLjk4MTMgMTMuNDUxIDEyLjk4OTQgMTUuNzY1NyAxMi45OTg2IDE4LjQwNzlDMTIuOTk5MyAxOC42MDEgMTMgMTguNzk2IDEzIDE4Ljk5MjZDMTMgMjEuOTk1NiAxNC44MTg2IDI1LjI4MzYgMTcuOTY4MiAyNS44OTU3QzE3LjkxMDggMjYuNDAwOCAxNy43NDk5IDI2LjgzMTggMTcuMjkyOCAyNy4yODkxQzE3LjIwNDMgMjcuMzc3NiAxNy4wMDIgMjcuNTA0NiAxNi41OTU4IDI3LjY0NDdDMTYuMjAzMSAyNy43ODAyIDE1LjcyMzUgMjcuODk0NiAxNS4xNTggMjguMDIwM0MxNS4wNjI1IDI4LjA0MTUgMTQuOTY0NSAyOC4wNjMgMTQuODY0MyAyOC4wODVDMTMuODM5NCAyOC4zMSAxMi41ODgxIDI4LjU4NDYgMTEuNTUyNiAyOS4xMDI1QzEwLjUxMiAyOS42MjMxIDkuNjA1NyAzMC4yMDE4IDguOTY5MDEgMzAuOTk4QzguMzAzNzcgMzEuODI5OCA4IDMyLjgxMTcgOCAzMy45OTg0VjM2LjQ5OTZDOCAzNy4zMjggOC42NzE1NyAzNy45OTk2IDkuNSAzNy45OTk2SDI2LjcwNzlDMjguMTE4MiAzOS4yNDQ2IDI5Ljk3MDkgNDAgMzIgNDBDMzYuNDE4MyA0MCA0MCAzNi40MTgzIDQwIDMyQzQwIDI3LjU4MTcgMzYuNDE4MyAyNCAzMiAyNEMyOS4xOTc0IDI0IDI2LjczMTUgMjUuNDQxMSAyNS4zMDI3IDI3LjYyMjdaTTIyLjI5MjcgMTAuMDI5NEMyMS42NzA5IDEwLjA4NTggMjAuNzE5IDEwLjIxOSAxOS43MDYgMTAuNTMxN0MxOC40MjggMTAuOTI2MiAxNy4xNDQ1IDExLjU3OCAxNi4yNjgzIDEyLjYyOTlDMTQuOTk2OCAxNC4xNTY0IDE0Ljk5NzkgMTUuNzQ5NCAxNC45OTk4IDE4LjYzNzlMMTUgMTguOTkyNkMxNSAyMS41MjE2IDE2LjU3OTkgMjMuNzQwMyAxOC42MTQzIDIzLjk3MzFDMTkuMzA2MyAyNC4wNTIzIDIwLjAxOTYgMjQuNjM0OCAxOS45OTUgMjUuNTIyNkMxOS45NjgyIDI2LjQ4OCAxOS43OTMxIDI3LjYxNjcgMTguNzA3MiAyOC43MDMxQzE4LjI5NTcgMjkuMTE0OCAxNy43NDggMjkuMzYyOSAxNy4yNDggMjkuNTM1NEMxNi43MzQ0IDI5LjcxMjYgMTYuMTUxNSAyOS44NDgzIDE1LjU5MiAyOS45NzI2TDE1LjMzNTEgMzAuMDI5NUMxNC4yNTQgMzAuMjY4NSAxMy4yNDc1IDMwLjQ5MSAxMi40NDc0IDMwLjg5MTJDMTEuNDg4IDMxLjM3MTEgMTAuODk0MyAzMS43OTI3IDEwLjUzMSAzMi4yNDcxQzEwLjE5NjIgMzIuNjY1NyAxMCAzMy4xODQ0IDEwIDMzLjk5ODRWMzUuOTk5NkgyNS4wN0MyNC4zODk1IDM0LjgyMyAyNCAzMy40NTcgMjQgMzJDMjQgMzEuMDk5MSAyNC4xNDg5IDMwLjIzMyAyNC40MjM1IDI5LjQyNDlDMjQuMDIxMiAyOS4yNTYyIDIzLjYxODcgMjkuMDI5MiAyMy4yOTI4IDI4LjcwMzFDMjIuMjA2OSAyNy42MTY3IDIyLjAzMTggMjYuNDg4IDIyLjAwNSAyNS41MjI2QzIxLjk4MDQgMjQuNjM0OCAyMi42OTM3IDI0LjA1MjMgMjMuMzg1NyAyMy45NzMxQzI1LjQyMDEgMjMuNzQwMyAyNyAyMS41MjE2IDI3IDE4Ljk5MjZDMjcgMTcuNDUzMSAyNi45OTY2IDE2LjU1NCAyNi44ODg2IDE1LjkwNTZDMjYuNzk1MSAxNS4zNDQ1IDI2LjYzNDEgMTUuMDM5MSAyNi4yOTI4IDE0LjY5NzZDMjUuNTk4OSAxNC4wMDM0IDI0LjI0OTMgMTMuMjQ5NyAyMy43MTc0IDEyLjk2OTRDMjMuMzc4MSAxMi43OTA3IDIzLjExMTUgMTIuNDg2NSAyMi45ODU4IDEyLjEwOTVMMjIuMjkyNyAxMC4wMjk0Wk0zMiAzOEMzNS4zMTM3IDM4IDM4IDM1LjMxMzcgMzggMzJDMzggMjguNjg2MyAzNS4zMTM3IDI2IDMyIDI2QzI4LjY4NjMgMjYgMjYgMjguNjg2MyAyNiAzMkMyNiAzNS4zMTM3IDI4LjY4NjMgMzggMzIgMzhaXCJcclxuXHRcdC8+XHJcblx0PC9zdmc+LFxyXG5cdGFjdGlvbnM6IFtcclxuXHRcdHtcclxuXHRcdFx0J3R5cGUnOiAndmVyaWZpY2F0aW9uJyxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHQnbWFpbF90byc6ICdlbWFpbCcsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHQndHlwZSc6ICdyZWdpc3Rlcl91c2VyJyxcclxuXHRcdFx0J3NldHRpbmdzJzoge1xyXG5cdFx0XHRcdCdmaWVsZHNfbWFwJzoge1xyXG5cdFx0XHRcdFx0J2VtYWlsJzogJ2VtYWlsJyxcclxuXHRcdFx0XHRcdCdsb2dpbic6ICdsb2dpbicsXHJcblx0XHRcdFx0XHQncGFzc3dvcmQnOiAnX2pmYl92ZXJpZmljYXRpb25fdG9rZW4nLFxyXG5cdFx0XHRcdFx0J2NvbmZpcm1fcGFzc3dvcmQnOiAnX2pmYl92ZXJpZmljYXRpb25fdG9rZW4nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2xvZ19pbic6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0YmxvY2tzOiBbXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnbmFtZSc6ICdlbWFpbCcsXHJcblx0XHRcdFx0J2xhYmVsJzogJ0VtYWlsJyxcclxuXHRcdFx0XHQnZmllbGRfdHlwZSc6ICdlbWFpbCcsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3RleHQtZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAnbG9naW4nLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdMb2dpbicsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcsXHJcblx0XHRdLFxyXG5cdF0sXHJcblx0YXBwbHlUZXh0OiBfXyhcclxuXHRcdCczIGJsb2NrcyBhbmQgUmVnaXN0ZXIgVXNlciB3aXRoIFZlcmlmaWNhdGlvbiBhY3Rpb24gaGF2ZSBiZWVuIGFkZGVkJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG59OyIsImltcG9ydCBQcm9TaW5nbGVQYXR0ZXJuIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvU2luZ2xlUGF0dGVybic7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyByZXNldFBhc3NQYXR0ZXJuIH0gPSBKZXRGb3JtRWRpdG9yRGF0YS51dG1MaW5rcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAncmVzZXRfcGFzc3dvcmQnLFxyXG5cdHRpdGxlOiBfXyggJ1Jlc2V0IFBhc3N3b3JkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcblx0ICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTM5Ljg1MTkgMTQuMjEzQzM5LjMwOTggMTYuMzg4MyAzNy4zNDMxIDE4IDM1IDE4QzMyLjIzODYgMTggMzAgMTUuNzYxNCAzMCAxM0MzMCAxMC4yMzg2IDMyLjIzODYgOCAzNSA4QzM2LjYzNTcgOCAzOC4wODggOC43ODU0NSAzOS4wMDAyIDkuOTk5NzZIMzhDMzcuNDQ3NyA5Ljk5OTc2IDM3IDEwLjQ0NzUgMzcgMTAuOTk5OEMzNyAxMS41NTIgMzcuNDQ3NyAxMS45OTk4IDM4IDExLjk5OThINDAuOTc3N0w0MSAxMkM0MS41MTc4IDEyIDQxLjk0MzYgMTEuNjA2NSA0MS45OTQ4IDExLjEwMjJDNDEuOTk4MyAxMS4wNjg2IDQyIDExLjAzNDMgNDIgMTAuOTk5OFY4QzQyIDcuNDQ3NzIgNDEuNTUyMyA3IDQxIDdDNDAuNDQ3NyA3IDQwIDcuNDQ3NzIgNDAgOFY4LjEwMTAyQzM4LjcyOTUgNi44MDQ0NyAzNi45NTg3IDYgMzUgNkMzMS4xMzQgNiAyOCA5LjEzNDAxIDI4IDEzQzI4IDE2Ljg2NiAzMS4xMzQgMjAgMzUgMjBDMzguMjgwNCAyMCA0MS4wMzM3IDE3Ljc0MzYgNDEuNzkyNiAxNC42OTgyTDM5Ljg1MTkgMTQuMjEzWlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNMjAgMzMuODc0QzIxLjcyNTIgMzMuNDI5OSAyMyAzMS44NjM4IDIzIDMwQzIzIDI3Ljc5MDkgMjEuMjA5MSAyNiAxOSAyNkMxNi43OTA5IDI2IDE1IDI3Ljc5MDkgMTUgMzBDMTUgMzEuODYzOCAxNi4yNzQ4IDMzLjQyOTkgMTggMzMuODc0VjM3QzE4IDM3LjU1MjMgMTguNDQ3NyAzOCAxOSAzOEMxOS41NTIzIDM4IDIwIDM3LjU1MjMgMjAgMzdWMzMuODc0Wk0yMSAzMEMyMSAzMS4xMDQ2IDIwLjEwNDYgMzIgMTkgMzJDMTcuODk1NCAzMiAxNyAzMS4xMDQ2IDE3IDMwQzE3IDI4Ljg5NTQgMTcuODk1NCAyOCAxOSAyOEMyMC4xMDQ2IDI4IDIxIDI4Ljg5NTQgMjEgMzBaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk0yOCAyMkMzMC4yMDkxIDIyIDMyIDIzLjc5MDkgMzIgMjZWMzhDMzIgNDAuMjA5MSAzMC4yMDkxIDQyIDI4IDQySDEwQzcuNzkwODYgNDIgNiA0MC4yMDkxIDYgMzhWMjZDNiAyMy43OTA5IDcuNzkwODYgMjIgMTAgMjJWMTlDMTAgMTQuMDI5NCAxNC4wMjk0IDEwIDE5IDEwQzIzLjk3MDYgMTAgMjggMTQuMDI5NCAyOCAxOVYyMlpNMjYgMTlWMjJIMjRWMTlDMjQgMTYuMjM4NiAyMS43NjE0IDE0IDE5IDE0QzE2LjIzODYgMTQgMTQgMTYuMjM4NiAxNCAxOVYyMkgxMlYxOUMxMiAxNS4xMzQgMTUuMTM0IDEyIDE5IDEyQzIyLjg2NiAxMiAyNiAxNS4xMzQgMjYgMTlaTTIyIDE5VjIySDE2VjE5QzE2IDE3LjM0MzEgMTcuMzQzMSAxNiAxOSAxNkMyMC42NTY5IDE2IDIyIDE3LjM0MzEgMjIgMTlaTTMwIDI2QzMwIDI0Ljg5NTQgMjkuMTA0NiAyNCAyOCAyNEgxMEM4Ljg5NTQzIDI0IDggMjQuODk1NCA4IDI2VjM4QzggMzkuMTA0NiA4Ljg5NTQzIDQwIDEwIDQwSDI4QzI5LjEwNDYgNDAgMzAgMzkuMTA0NiAzMCAzOFYyNlpcIlxyXG5cdFx0Lz5cclxuXHQ8L3N2Zz4sXHJcblx0YmxvY2tzOiBbXSxcclxuXHRhY3Rpb25zOiBbXSxcclxuXHR2aWV3OiBQcm9TaW5nbGVQYXR0ZXJuLFxyXG5cdGxpbms6IHJlc2V0UGFzc1BhdHRlcm4sXHJcbn07IiwiaW1wb3J0IFByb1NpbmdsZVBhdHRlcm4gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9TaW5nbGVQYXR0ZXJuJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IHVzZXJMb2dpblBhdHRlcm4gfSA9IEpldEZvcm1FZGl0b3JEYXRhLnV0bUxpbmtzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICd1c2VyX2xvZ2luJyxcclxuXHR0aXRsZTogX18oICdVc2VyIExvZ2luJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcblx0ICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk0zNCAzM0MzNCAzMy43NTMyIDMzLjU4MzcgMzQuNDA5MSAzMi45Njg2IDM0Ljc1MDJDMzIuOTg5MSAzNC44MzAxIDMzIDM0LjkxMzggMzMgMzVWMzZDMzMgMzYuNTUyMyAzMi41NTIzIDM3IDMyIDM3QzMxLjQ0NzcgMzcgMzEgMzYuNTUyMyAzMSAzNlYzNUMzMSAzNC45MTM4IDMxLjAxMDkgMzQuODMwMSAzMS4wMzE0IDM0Ljc1MDJDMzAuNDE2MyAzNC40MDkxIDMwIDMzLjc1MzIgMzAgMzNDMzAgMzEuODk1NCAzMC44OTU0IDMxIDMyIDMxQzMzLjEwNDYgMzEgMzQgMzEuODk1NCAzNCAzM1pNMzIgMzMuNzY5MkMzMi40MjQ4IDMzLjc2OTIgMzIuNzY5MiAzMy40MjQ4IDMyLjc2OTIgMzNDMzIuNzY5MiAzMi41NzUyIDMyLjQyNDggMzIuMjMwOCAzMiAzMi4yMzA4QzMxLjU3NTIgMzIuMjMwOCAzMS4yMzA4IDMyLjU3NTIgMzEuMjMwOCAzM0MzMS4yMzA4IDMzLjQyNDggMzEuNTc1MiAzMy43NjkyIDMyIDMzLjc2OTJaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk0yNi42NzM5IDI4QzI2LjE5MyAyNy44OTMzIDI1Ljc3OTMgMjcuNzkxMSAyNS40MzEzIDI3LjY2OThDMjUuMDMwNyAyNy41MyAyNC44MTQ4IDI3LjM5NjcgMjQuNzA3MiAyNy4yODkxQzI0LjI1MDEgMjYuODMxOCAyNC4wODkyIDI2LjQwMDggMjQuMDMxOCAyNS44OTU3QzI3LjE4MTQgMjUuMjgzNiAyOSAyMS45OTU2IDI5IDE4Ljk5MjZMMjkgMTguODkyOUMyOS4wMDAxIDE3LjQ4MDYgMjkuMDAwMSAxNi40MDk3IDI4Ljg2MTQgMTUuNTc3QzI4LjcwNDkgMTQuNjM3NSAyOC4zNjU5IDEzLjk0MjUgMjcuNzA3MiAxMy4yODM3QzI2Ljg1NzQgMTIuNDMzNSAyNS40NTI2IDExLjYzMjEgMjQuODIxNCAxMS4yOTE2TDI0LjA2MjcgOS4wMTQ0OUMyMy44NjA5IDguNDA5IDIzLjI3ODYgNy45NjQ2NSAyMi41ODYzIDguMDAyNzdDMjEuOTQ2IDguMDM4MDMgMjAuNTk2NiA4LjE2MzY0IDE5LjExNjEgOC42MjA2NUMxNy42NDUgOS4wNzQ3NyAxNS45NTIzIDkuODg0NDcgMTQuNzMxNyAxMS4zNDk4QzEyLjk4MTMgMTMuNDUxIDEyLjk4OTQgMTUuNzY1NyAxMi45OTg2IDE4LjQwNzlDMTIuOTk5MyAxOC42MDEgMTMgMTguNzk2IDEzIDE4Ljk5MjZDMTMgMjEuOTk1NiAxNC44MTg2IDI1LjI4MzYgMTcuOTY4MiAyNS44OTU3QzE3LjkxMDggMjYuNDAwOCAxNy43NDk5IDI2LjgzMTggMTcuMjkyOCAyNy4yODkxQzE3LjIwNDMgMjcuMzc3NiAxNy4wMDIgMjcuNTA0NiAxNi41OTU4IDI3LjY0NDdDMTYuMjAzMSAyNy43ODAyIDE1LjcyMzUgMjcuODk0NiAxNS4xNTggMjguMDIwM0MxNS4wNjI1IDI4LjA0MTUgMTQuOTY0NSAyOC4wNjMgMTQuODY0MyAyOC4wODVDMTMuODM5NCAyOC4zMSAxMi41ODgxIDI4LjU4NDYgMTEuNTUyNiAyOS4xMDI1QzEwLjUxMiAyOS42MjMxIDkuNjA1NyAzMC4yMDE4IDguOTY5MDEgMzAuOTk4QzguMzAzNzcgMzEuODI5OCA4IDMyLjgxMTcgOCAzMy45OTg0VjM2LjQ5OTZDOCAzNy4zMjggOC42NzE1NyAzNy45OTk2IDkuNSAzNy45OTk2SDI0QzI0IDM5LjEwNDIgMjQuODk1NCA0MCAyNiA0MEgzOEMzOS4xMDQ2IDQwIDQwIDM5LjEwNDYgNDAgMzhWMzBDNDAgMjguODk1NCAzOS4xMDQ2IDI4IDM4IDI4SDM2VjI3QzM2IDI0Ljc5MDkgMzQuMjA5MSAyMyAzMiAyM0MyOS43OTA5IDIzIDI4IDI0Ljc5MDkgMjggMjdWMjhIMjYuNjczOVpNMjIuMjkyNyAxMC4wMjk0QzIxLjY3MDkgMTAuMDg1OCAyMC43MTkgMTAuMjE5IDE5LjcwNiAxMC41MzE3QzE4LjQyOCAxMC45MjYyIDE3LjE0NDUgMTEuNTc4IDE2LjI2ODMgMTIuNjI5OUMxNC45OTY4IDE0LjE1NjQgMTQuOTk3OSAxNS43NDk0IDE0Ljk5OTggMTguNjM3OUwxNSAxOC45OTI2QzE1IDIxLjUyMTYgMTYuNTc5OSAyMy43NDAzIDE4LjYxNDMgMjMuOTczMUMxOS4zMDYzIDI0LjA1MjMgMjAuMDE5NiAyNC42MzQ4IDE5Ljk5NSAyNS41MjI2QzE5Ljk2ODIgMjYuNDg4IDE5Ljc5MzEgMjcuNjE2NyAxOC43MDcyIDI4LjcwMzFDMTguMjk1NyAyOS4xMTQ4IDE3Ljc0OCAyOS4zNjI5IDE3LjI0OCAyOS41MzU0QzE2LjczNDQgMjkuNzEyNiAxNi4xNTE1IDI5Ljg0ODMgMTUuNTkyIDI5Ljk3MjZMMTUuMzM1MSAzMC4wMjk1QzE0LjI1NCAzMC4yNjg1IDEzLjI0NzUgMzAuNDkxIDEyLjQ0NzQgMzAuODkxMkMxMS40ODggMzEuMzcxMSAxMC44OTQzIDMxLjc5MjcgMTAuNTMxIDMyLjI0NzFDMTAuMTk2MiAzMi42NjU3IDEwIDMzLjE4NDQgMTAgMzMuOTk4NFYzNS45OTk2SDI0VjMwQzI0IDI5Ljc1IDI0LjA0NTkgMjkuNTEwOCAyNC4xMjk2IDI5LjI5MDJDMjMuODI5IDI5LjEzOTMgMjMuNTM5MSAyOC45NDk1IDIzLjI5MjggMjguNzAzMUMyMi4yMDY5IDI3LjYxNjcgMjIuMDMxOCAyNi40ODggMjIuMDA1IDI1LjUyMjZDMjEuOTgwNCAyNC42MzQ4IDIyLjY5MzcgMjQuMDUyMyAyMy4zODU3IDIzLjk3MzFDMjUuNDIwMSAyMy43NDAzIDI3IDIxLjUyMTYgMjcgMTguOTkyNkMyNyAxNy40NTMxIDI2Ljk5NjYgMTYuNTU0IDI2Ljg4ODYgMTUuOTA1NkMyNi43OTUxIDE1LjM0NDUgMjYuNjM0MSAxNS4wMzkxIDI2LjI5MjggMTQuNjk3NkMyNS41OTg5IDE0LjAwMzQgMjQuMjQ5MyAxMy4yNDk3IDIzLjcxNzQgMTIuOTY5NEMyMy4zNzgxIDEyLjc5MDcgMjMuMTExNSAxMi40ODY1IDIyLjk4NTggMTIuMTA5NUwyMi4yOTI3IDEwLjAyOTRaTTM0IDI4VjI3QzM0IDI1Ljg5NTQgMzMuMTA0NiAyNSAzMiAyNUMzMC44OTU0IDI1IDMwIDI1Ljg5NTQgMzAgMjdWMjhIMzRaTTM4IDMwVjM4SDI2VjMwSDM4WlwiXHJcblx0XHQvPlxyXG5cdDwvc3ZnPixcclxuXHRibG9ja3M6IFtdLFxyXG5cdGFjdGlvbnM6IFtdLFxyXG5cdHZpZXc6IFByb1NpbmdsZVBhdHRlcm4sXHJcblx0bGluazogdXNlckxvZ2luUGF0dGVybixcclxufTsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRyZWdpc3RlckJ1aWxkZXJzKCBpdGVtcyApIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5yZWdpc3RlckJ1aWxkZXJzLFxyXG5cdFx0XHRpdGVtcyxcclxuXHRcdH07XHJcblx0fSxcclxuXHR1blJlZ2lzdGVyQnVpbGRlcnMoIG5hbWVzICkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZTogY29uc3RhbnRzLnVuUmVnaXN0ZXJCdWlsZGVycyxcclxuXHRcdFx0bmFtZXMsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0dXBkYXRlU2V0dGluZ3MoIHNldHRpbmdzICkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZTogY29uc3RhbnRzLnVwZGF0ZVNldHRpbmdzLFxyXG5cdFx0XHRzZXR0aW5ncyxcclxuXHRcdH07XHJcblx0fSxcclxufTsiLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0c3RvcmU6ICdqZXQtZm9ybXMvdXNlLWZvcm0nLFxyXG5cdHJlZ2lzdGVyQnVpbGRlcnM6ICdSRUdJU1RFUl9CVUlsREVSJyxcclxuXHR1blJlZ2lzdGVyQnVpbGRlcnM6ICdVTlJFR0lTVEVSX0JVSUxERVInLFxyXG5cdHVwZGF0ZVNldHRpbmdzOiAnVVBEQVRFX1NFVFRJTkcnLFxyXG59O1xyXG5cclxuXHJcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRbIGNvbnN0YW50cy5yZWdpc3RlckJ1aWxkZXJzIF0oIHN0YXRlLCBhY3Rpb24gKSB7XHJcblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCBhY3Rpb24uaXRlbXMgKSApIHtcclxuXHRcdFx0YWN0aW9uLml0ZW1zID0gWyBhY3Rpb24uaXRlbXMgXTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCBsZXQgaXRlbSBvZiBhY3Rpb24uaXRlbXMgKSB7XHJcblxyXG5cdFx0XHRpZiAoICFpdGVtLmhhc093blByb3BlcnR5KCAnbmFtZScgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgaXNzZXRJbmRleCA9IHNlbGVjdG9ycy5nZXRUeXBlSW5kZXgoIHN0YXRlLCBpdGVtLm5hbWUgKTtcclxuXHJcblx0XHRcdC8vIGlzIG5ldyBwYXR0ZXJuIHR5cGVcclxuXHRcdFx0aWYgKCAtMSA9PT0gaXNzZXRJbmRleCApIHtcclxuXHRcdFx0XHRzdGF0ZS5idWlsZGVycy5wdXNoKCB7IC4uLml0ZW0gfSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHN0YXRlLmJ1aWxkZXJzWyBpc3NldEluZGV4IF0gPSB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZS5idWlsZGVyc1sgaXNzZXRJbmRleCBdLFxyXG5cdFx0XHRcdFx0Li4uaXRlbSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH0sXHJcblx0WyBjb25zdGFudHMudW5SZWdpc3RlckJ1aWxkZXJzIF0oIHN0YXRlLCBhY3Rpb24gKSB7XHJcblx0XHRjb25zdCB7IG5hbWVzIH0gPSBhY3Rpb247XHJcblxyXG5cdFx0c3RhdGUuYnVpbGRlcnMgPSBzdGF0ZS5idWlsZGVycy5maWx0ZXIoXHJcblx0XHRcdCggeyBuYW1lIH0gKSA9PiAhbmFtZXMuaW5jbHVkZXMoIG5hbWUgKSxcclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH0sXHJcblx0WyBjb25zdGFudHMudXBkYXRlU2V0dGluZ3MgXSggc3RhdGUsIGFjdGlvbiApIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MgfSA9IGFjdGlvbjtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHQuLi5zdGF0ZS5zZXR0aW5ncyxcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSxcclxufTsiLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCB7IGNyZWF0ZVJlZHV4U3RvcmUgfSA9IHdwLmRhdGE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCBjb25zdGFudHMuc3RvcmUsIHtcclxuXHRyZWR1Y2VyLFxyXG5cdGFjdGlvbnMsXHJcblx0c2VsZWN0b3JzLFxyXG59ICk7XHJcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcclxuXHJcbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XHJcblx0YnVpbGRlcnM6IFtdLFxyXG5cdHNldHRpbmdzOiB7XHJcblx0XHRzYXZlUmVjb3JkOiB0cnVlLFxyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoIHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uICkge1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gZGlzcGF0Y2hlcnNbIGFjdGlvbj8udHlwZSBdO1xyXG5cclxuXHRpZiAoIGNhbGxiYWNrICkge1xyXG5cdFx0cmV0dXJuIGNhbGxiYWNrKCBzdGF0ZSwgYWN0aW9uICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RhdGU7XHJcbn0iLCJjb25zdCBzZWxlY3RvcnMgPSB7XHJcblx0Z2V0QnVpbGRlckluZGV4KCBzdGF0ZSwgbmFtZSApIHtcclxuXHRcdHJldHVybiBzdGF0ZS5idWlsZGVycy5maW5kSW5kZXgoIHBhdHRlcm4gPT4gcGF0dGVybi5uYW1lID09PSBuYW1lICk7XHJcblx0fSxcclxuXHRnZXRCdWlsZGVycyggc3RhdGUgKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuYnVpbGRlcnMuZmlsdGVyKCAoIHsgbmFtZSB9ICkgPT4gJ2RlZmF1bHQnICE9PSBuYW1lICk7XHJcblx0fSxcclxuXHRnZXRCdWlsZGVyKCBzdGF0ZSwgc2x1ZyApIHtcclxuXHRcdGNvbnN0IGluZGV4ID0gc2VsZWN0b3JzLmdldEJ1aWxkZXJJbmRleCggc3RhdGUsIHNsdWcgKTtcclxuXHJcblx0XHRyZXR1cm4gc3RhdGUuYnVpbGRlcnNbIGluZGV4IF07XHJcblx0fSxcclxuXHRnZXRTZXR0aW5nKCBzdGF0ZSwgbmFtZSApIHtcclxuXHRcdHJldHVybiBzdGF0ZS5zZXR0aW5nc1sgbmFtZSBdO1xyXG5cdH0sXHJcblx0Z2V0U2V0dGluZ3MoIHN0YXRlICkge1xyXG5cdFx0cmV0dXJuIHN0YXRlLnNldHRpbmdzO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Li4uc2VsZWN0b3JzLFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYXR0ZXJuc1N0b3JlIGZyb20gJy4vcGF0dGVybnNTdG9yZSc7XHJcbmltcG9ydCB1c2VGb3JtU3RvcmUgZnJvbSAnLi91c2VGb3JtU3RvcmUnO1xyXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vcGF0dGVybnNTdG9yZS9jb25zdGFudHMnO1xyXG5pbXBvcnQgaW5zZXJ0UG9zdFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJucy9pbnNlcnQucG9zdC5qcyc7XHJcbmltcG9ydCBkZWZhdWx0UGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL2RlZmF1bHQuanMnO1xyXG5pbXBvcnQgZmVlZEJhY2tQYXR0ZXJuIGZyb20gJy4vcGF0dGVybnMvZmVlZGJhY2suanMnO1xyXG5pbXBvcnQgcmVnaXN0ZXJVc2VyUGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL3JlZ2lzdGVyLnVzZXIuanMnO1xyXG5pbXBvcnQgcmVzZXRQYXNzd29yZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJucy9yZXNldC5wYXNzd29yZC5qcyc7XHJcbmltcG9ydCB1c2VyTG9naW5QYXR0ZXJuIGZyb20gJy4vcGF0dGVybnMvdXNlci5sb2dpbi5qcyc7XHJcbmltcG9ydCBkb25hdGlvblBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJucy9kb25hdGlvbi5qcyc7XHJcbmltcG9ydCBjb250YWN0UGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL2NvbnRhY3QuanMnO1xyXG5pbXBvcnQgbmV3c2xldHRlclBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJucy9uZXdzbGV0dGVyLmpzJztcclxuaW1wb3J0IHVzZVBhdHRlcm4gZnJvbSAnLi9ob29rcy91c2VQYXR0ZXJuJztcclxuaW1wb3J0IFBhdHRlcm5JbnNlcnRlckJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUGF0dGVybkluc2VydGVyQnV0dG9uJztcclxuaW1wb3J0IHsgcmVnaXN0ZXIsIGRpc3BhdGNoIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcclxuaW1wb3J0IEJ1aWxkZXJIZWxwU2xvdEZpbGwgZnJvbSAnLi9jb21wb25lbnRzL0J1aWxkZXJIZWxwU2xvdEZpbGwnO1xyXG5cclxucmVnaXN0ZXIoIHBhdHRlcm5zU3RvcmUgKTtcclxucmVnaXN0ZXIoIHVzZUZvcm1TdG9yZSApO1xyXG5cclxuZGlzcGF0Y2goIGNvbnN0YW50cy5zdG9yZSApLnJlZ2lzdGVyKCBbXHJcblx0ZGVmYXVsdFBhdHRlcm4sXHJcblx0Y29udGFjdFBhdHRlcm4sXHJcblx0ZmVlZEJhY2tQYXR0ZXJuLFxyXG5cdG5ld3NsZXR0ZXJQYXR0ZXJuLFxyXG5cdGluc2VydFBvc3RQYXR0ZXJuLFxyXG5cdHJlZ2lzdGVyVXNlclBhdHRlcm4sXHJcblx0ZG9uYXRpb25QYXR0ZXJuLFxyXG5cdHJlc2V0UGFzc3dvcmRQYXR0ZXJuLFxyXG5cdHVzZXJMb2dpblBhdHRlcm4sXHJcbl0gKTtcclxuXHJcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgPSB7XHJcblx0Li4uKFxyXG5cdFx0d2luZG93LkpldEZCQ29tcG9uZW50cyA/PyB7fVxyXG5cdCksXHJcblx0UGF0dGVybkluc2VydGVyQnV0dG9uLFxyXG5cdEJ1aWxkZXJIZWxwU2xvdEZpbGwsXHJcbn07XHJcblxyXG53aW5kb3cuSmV0RkJIb29rcyA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0RkJIb29rcyA/PyB7fVxyXG5cdCksXHJcblx0dXNlUGF0dGVybixcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=