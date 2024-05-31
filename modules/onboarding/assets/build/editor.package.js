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


const defaultEmbed = {
  src: 'https://www.youtube.com/embed/LBO8E7W4AF0'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  [_constants__WEBPACK_IMPORTED_MODULE_0__["default"].registerBuilders](state, action) {
    if (!Array.isArray(action.items)) {
      action.items = [action.items];
    }
    for (let item of action.items) {
      if (!item.hasOwnProperty('name')) {
        continue;
      }
      const issetIndex = _selectors__WEBPACK_IMPORTED_MODULE_1__["default"].getBuilderIndex(state, item.name);

      // is new pattern type
      if (-1 === issetIndex) {
        var _item$embed;
        (_item$embed = item.embed) !== null && _item$embed !== void 0 ? _item$embed : item.embed = {
          ...defaultEmbed
        };
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
  settings: {}
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
  getCurrentBuilder(state) {
    return selectors.getBuilder(state, state.settings?.builder || 'blocks');
  },
  getBuilderIndex(state, name) {
    return state.builders.findIndex(pattern => pattern.name === name);
  },
  getBuilders(state) {
    return state.builders;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnBhY2thZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBYUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFRQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUtBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzdJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL2NvbXBvbmVudHMvQnVpbGRlckhlbHBTbG90RmlsbC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL2NvbXBvbmVudHMvUGF0dGVybkluc2VydGVyQnV0dG9uLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvY29tcG9uZW50cy9Qcm9TaW5nbGVQYXR0ZXJuLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvY29tcG9uZW50cy9TaW5nbGVQYXR0ZXJuLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvaG9va3MvdXNlQW5vdGhlckJsb2Nrcy5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL2hvb2tzL3VzZVBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJuc1N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJuc1N0b3JlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zU3RvcmUvZGlzcGF0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJuc1N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnNTdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnNTdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJucy9jb250YWN0LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnMvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zL2RvbmF0aW9uLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnMvZmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJucy9pbnNlcnQucG9zdC5qcyIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci1wYWNrYWdlL3BhdHRlcm5zL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJucy9yZWdpc3Rlci51c2VyLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvcGF0dGVybnMvcmVzZXQucGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS9wYXR0ZXJucy91c2VyLmxvZ2luLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvdXNlRm9ybVN0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS91c2VGb3JtU3RvcmUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvdXNlRm9ybVN0b3JlL2Rpc3BhdGNoZXJzLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvdXNlRm9ybVN0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvdXNlRm9ybVN0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3ItcGFja2FnZS91c2VGb3JtU3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2Nrc1wiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yLXBhY2thZ2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xvdEZpbGwgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQnVpbGRlckhlbHBTbG90RmlsbCA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCQnVpbGRlckhlbHAnICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZGVySGVscFNsb3RGaWxsOyIsImltcG9ydCB1c2VQYXR0ZXJuIGZyb20gJy4uL2hvb2tzL3VzZVBhdHRlcm4nO1xyXG5pbXBvcnQgdXNlQW5vdGhlckJsb2NrcyBmcm9tICcuLi9ob29rcy91c2VBbm90aGVyQmxvY2tzJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBCdXR0b24sXHJcblx0ICAgICAgUG9wb3ZlcixcclxuXHQgICAgICBJY29uLFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlVHJpZ2dlclBvcG92ZXIsXHJcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuZnVuY3Rpb24gUGF0dGVybkluc2VydGVyQnV0dG9uKCB7XHJcblx0cGF0dGVybk5hbWUsXHJcblx0d2l0aFBhdHRlcm5JY29uID0gZmFsc2UsXHJcblx0b25DbGljayA9IGZhbHNlLFxyXG5cdG9uQXBwbHkgPSAoKSA9PiB7fSxcclxuXHQuLi5wcm9wc1xyXG59ICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHJlZixcclxuXHRcdCAgICAgIHNob3dQb3BvdmVyLFxyXG5cdFx0ICAgICAgc2V0U2hvd1BvcG92ZXIsXHJcblx0XHQgICAgICBwb3BvdmVyUHJvcHMsXHJcblx0ICAgICAgfSA9IHVzZVRyaWdnZXJQb3BvdmVyKCk7XHJcblxyXG5cdGNvbnN0IGJsb2NrcyA9IHVzZUFub3RoZXJCbG9ja3MoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgcGF0dGVybixcclxuXHRcdCAgICAgIGluc2VydCxcclxuXHRcdCAgICAgIGFwcGVuZCxcclxuXHQgICAgICB9ID0gdXNlUGF0dGVybigge1xyXG5cdFx0bmFtZTogcGF0dGVybk5hbWUsXHJcblx0XHRvbkFwcGx5LFxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdHJlZj17IHJlZiB9XHJcblx0XHRcdGljb249eyB3aXRoUGF0dGVybkljb24gJiYgcGF0dGVybi5pY29uIH1cclxuXHRcdFx0aWNvblNpemU9XCI0OFwiXHJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb25DbGljayApIHtcclxuXHRcdFx0XHRcdG9uQ2xpY2soKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCBibG9ja3MubGVuZ3RoICkge1xyXG5cdFx0XHRcdFx0c2V0U2hvd1BvcG92ZXIoIHByZXYgPT4gIXByZXYgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRpbnNlcnQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gfVxyXG5cdFx0XHRsYWJlbD17IHBhdHRlcm4uZGVzY3JpcHRpb24gfHwgcGF0dGVybi50aXRsZSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHRcdHsgc2hvd1BvcG92ZXIgJiYgKFxyXG5cdFx0XHQ8UG9wb3ZlclxyXG5cdFx0XHRcdHBvc2l0aW9uPXsgJ3RvcC1zdGFydCcgfVxyXG5cdFx0XHRcdG5vQXJyb3c9eyBmYWxzZSB9XHJcblx0XHRcdFx0aXNBbHRlcm5hdGVcclxuXHRcdFx0XHR7IC4uLnBvcG92ZXJQcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogJzAuNWVtJyxcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICdtYXgtY29udGVudCcsXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8c3Bhbj57IF9fKCAnSSB3YW50IHRvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvc3Bhbj5cclxuXHRcdFx0XHRcdCZuYnNwO1xyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gaW5zZXJ0KCkgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IF9fKCAncmVwbGFjZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0eyAnIC8gJyB9XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGlzTGlua1xyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gYXBwZW5kKCkgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IF9fKCAnYXBwZW5kJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQmbmJzcDtcclxuXHRcdFx0XHRcdDxzcGFuPnsgX18oXHJcblx0XHRcdFx0XHRcdCdmb3JtIHNldHRpbmdzIGFuZCBibG9ja3MnLFxyXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHQpIH08L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvUG9wb3Zlcj5cclxuXHRcdCkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0dGVybkluc2VydGVyQnV0dG9uOyIsImNvbnN0IHtcclxuXHQgICAgICB1c2VUcmlnZ2VyUG9wb3ZlcixcclxuICAgICAgfSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQnV0dG9uLFxyXG5cdCAgICAgIFBvcG92ZXIsXHJcblx0ICAgICAgRXh0ZXJuYWxMaW5rLFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5mdW5jdGlvbiBQcm9TaW5nbGVQYXR0ZXJuKCB7IHBhdHRlcm4gfSApIHtcclxuXHRjb25zdCB7XHJcblx0XHQgICAgICByZWYsXHJcblx0XHQgICAgICBzaG93UG9wb3ZlcixcclxuXHRcdCAgICAgIHNldFNob3dQb3BvdmVyLFxyXG5cdFx0ICAgICAgcG9wb3ZlclByb3BzLFxyXG5cdCAgICAgIH0gPSB1c2VUcmlnZ2VyUG9wb3ZlcigpO1xyXG5cclxuXHRyZXR1cm4gPGxpIGNsYXNzTmFtZT1cImlzLXByb1wiPlxyXG5cdFx0PEJ1dHRvblxyXG5cdFx0XHRyZWY9eyByZWYgfVxyXG5cdFx0XHRpY29uPXsgcGF0dGVybi5pY29uIH1cclxuXHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dQb3BvdmVyKCBwcmV2ID0+ICFwcmV2ICkgfVxyXG5cdFx0XHRsYWJlbD17IHBhdHRlcm4uZGVzY3JpcHRpb24gfHwgcGF0dGVybi50aXRsZSB9XHJcblx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG5cdFx0XHRpY29uU2l6ZT17IDMyIH1cclxuXHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvblwiXHJcblx0XHQvPlxyXG5cdFx0PHNwYW5cclxuXHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvbi1sYWJlbFwiXHJcblx0XHQ+XHJcblx0XHRcdHsgcGF0dGVybi50aXRsZSB9XHJcblx0XHQ8L3NwYW4+XHJcblx0XHR7IHNob3dQb3BvdmVyICYmIChcclxuXHRcdFx0PFBvcG92ZXJcclxuXHRcdFx0XHRwb3NpdGlvbj17ICd0b3Atc3RhcnQnIH1cclxuXHRcdFx0XHRub0Fycm93PXsgZmFsc2UgfVxyXG5cdFx0XHRcdGlzQWx0ZXJuYXRlXHJcblx0XHRcdFx0eyAuLi5wb3BvdmVyUHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICcwLjVlbScsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnbWF4LWNvbnRlbnQnLFxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHNwYW4+eyBfXyhcclxuXHRcdFx0XHRcdFx0J1RoaXMgaXMgcGFpZCBhZGRvbi4gWW91IGNhbiBidXkgaXQgaGVyZTonLFxyXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHQpIH08L3NwYW4+XHJcblx0XHRcdFx0XHQmbmJzcDtcclxuXHRcdFx0XHRcdDxFeHRlcm5hbExpbmtcclxuXHRcdFx0XHRcdFx0aHJlZj17IHBhdHRlcm4ubGluayA/P1xyXG5cdFx0XHRcdFx0XHRcdCdodHRwczovL2pldGZvcm1idWlsZGVyLmNvbS9wcmljaW5nLycgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRqZXRmb3JtYnVpbGRlci5jb21cclxuXHRcdFx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L1BvcG92ZXI+XHJcblx0XHQpIH1cclxuXHQ8L2xpPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvU2luZ2xlUGF0dGVybjsiLCJpbXBvcnQgUGF0dGVybkluc2VydGVyQnV0dG9uIGZyb20gJy4vUGF0dGVybkluc2VydGVyQnV0dG9uJztcclxuXHJcbmZ1bmN0aW9uIFNpbmdsZVBhdHRlcm4oIHsgcGF0dGVybiB9ICkge1xyXG5cdHJldHVybiA8bGk+XHJcblx0XHQ8UGF0dGVybkluc2VydGVyQnV0dG9uXHJcblx0XHRcdGtleT17IHBhdHRlcm4ubmFtZSB9XHJcblx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG5cdFx0XHRwYXR0ZXJuTmFtZT17IHBhdHRlcm4ubmFtZSB9XHJcblx0XHRcdHdpdGhQYXR0ZXJuSWNvblxyXG5cdFx0XHRpY29uU2l6ZT17IDMyIH1cclxuXHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvblwiXHJcblx0XHQvPlxyXG5cdFx0PHNwYW5cclxuXHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvbi1sYWJlbFwiXHJcblx0XHQ+XHJcblx0XHRcdHsgcGF0dGVybi50aXRsZSB9XHJcblx0XHQ8L3NwYW4+XHJcblx0PC9saT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVBhdHRlcm47IiwiY29uc3Qge1xyXG5cdCAgICAgIHVzZUJsb2NrRWRpdENvbnRleHQsXHJcbiAgICAgIH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VTZWxlY3QsXHJcbiAgICAgIH0gPSB3cC5kYXRhO1xyXG5cclxuLyoqXHJcbiAqIEdldCByb290LWxldmVsIGJsb2NrcyB3aXRob3V0IGN1cnJlbnQgYmxvY2tcclxuICpcclxuICogQHJldHVybnMge09iamVjdFtdfVxyXG4gKi9cclxuZnVuY3Rpb24gdXNlQW5vdGhlckJsb2NrcygpIHtcclxuXHRjb25zdCBjb250ZXh0ID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xyXG5cclxuXHRyZXR1cm4gdXNlU2VsZWN0KFxyXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpLmZpbHRlcihcclxuXHRcdFx0YmxvY2sgPT4gYmxvY2suY2xpZW50SWQgIT09IGNvbnRleHQuY2xpZW50SWQsXHJcblx0XHQpLFxyXG5cdFx0WyBjb250ZXh0LmlzU2VsZWN0ZWQsIGNvbnRleHQuY2xpZW50SWQgXSxcclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VBbm90aGVyQmxvY2tzOyIsImltcG9ydCB1c2VBbm90aGVyQmxvY2tzIGZyb20gJy4vdXNlQW5vdGhlckJsb2Nrcyc7XHJcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vcGF0dGVybnNTdG9yZS9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB1c2VCbG9ja0VkaXRDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xyXG5pbXBvcnQgeyBjcmVhdGVCbG9ja3NGcm9tSW5uZXJCbG9ja3NUZW1wbGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBjb252ZXJ0RmxvdyxcclxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VBY3Rpb25zLFxyXG4gICAgICB9ID0gSmV0RkJIb29rcztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbmFtZSB7U3RyaW5nfVxyXG4gKiBAcGFyYW0gb25BcHBseSB7RnVuY3Rpb258dW5kZWZpbmVkfVxyXG4gKiBAcmV0dXJucyB7e2Jsb2NrczogT2JqZWN0W10sIHBhdHRlcm46IE9iamVjdCwgaW5zZXJ0OiBGdW5jdGlvbiwgYXBwZW5kOlxyXG4gKiAgICAgRnVuY3Rpb259fVxyXG4gKi9cclxuZnVuY3Rpb24gdXNlUGF0dGVybiggeyBuYW1lLCBvbkFwcGx5ID0gKCkgPT4ge30gfSApIHtcclxuXHRjb25zdCB7IGNsaWVudElkIH0gICAgICAgICA9IHVzZUJsb2NrRWRpdENvbnRleHQoKTtcclxuXHRjb25zdCBibG9ja3MgICAgICAgICAgICAgICA9IHVzZUFub3RoZXJCbG9ja3MoKTtcclxuXHRjb25zdCB7IGVkaXRQb3N0IH0gICAgICAgICA9IHVzZURpc3BhdGNoKCAnY29yZS9lZGl0b3InICk7XHJcblx0Y29uc3QgeyBjcmVhdGVJbmZvTm90aWNlIH0gPSB1c2VEaXNwYXRjaCggd3Aubm90aWNlcy5zdG9yZSApO1xyXG5cclxuXHRjb25zdCBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgcmVtb3ZlQmxvY2tzLFxyXG5cdFx0ICAgICAgcmVwbGFjZUJsb2NrcyxcclxuXHRcdCAgICAgIGluc2VydEJsb2NrcyxcclxuXHQgICAgICB9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKTtcclxuXHJcblx0Y29uc3QgcGF0dGVybiAgICA9IHVzZVNlbGVjdChcclxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoIGNvbnN0YW50cy5zdG9yZSApLmdldFR5cGUoIG5hbWUgKSxcclxuXHRcdFtdLFxyXG5cdCk7XHJcblx0Y29uc3Qgc2F2ZVJlY29yZCA9IHVzZVNlbGVjdChcclxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoIGNvbnN0YW50cy5zdG9yZSApLmdldFNldHRpbmcoICdzYXZlUmVjb3JkJyApLFxyXG5cdFx0W10sXHJcblx0KTtcclxuXHJcblx0Y29uc3QgZGlzcGxheU5vdGljZSA9ICgpID0+IGNyZWF0ZUluZm9Ob3RpY2UoXHJcblx0XHRwYXR0ZXJuPy5hcHBseVRleHQgPz9cclxuXHRcdF9fKFxyXG5cdFx0XHQnTmV3IGJsb2NrcyBhbmQgYWN0aW9ucyBoYXZlIGJlZW4gYWRkZWQnLFxyXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHQpLFxyXG5cdFx0e1xyXG5cdFx0XHR0eXBlOiAnc25hY2tiYXInLFxyXG5cdFx0fSxcclxuXHQpO1xyXG5cclxuXHRmdW5jdGlvbiBpbnNlcnQoIGVkaXRlZFBhdHRlcm4gPSB7fSApIHtcclxuXHRcdGFwcGx5UGF0dGVybiggZWRpdGVkUGF0dGVybiApO1xyXG5cclxuXHRcdGVkaXRlZFBhdHRlcm4gPSB7XHJcblx0XHRcdC4uLnBhdHRlcm4sXHJcblx0XHRcdC4uLmVkaXRlZFBhdHRlcm4sXHJcblx0XHR9O1xyXG5cclxuXHRcdHJlbW92ZUJsb2NrcyhcclxuXHRcdFx0YmxvY2tzLm1hcCggKCB7IGNsaWVudElkOiBpZCB9ICkgPT4gaWQgKSxcclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0aW5nIGFjdGlvbnNcclxuXHRcdGNvbnN0IGZsb3cgPSBjb252ZXJ0RmxvdyggZWRpdGVkUGF0dGVybj8uYWN0aW9ucyA/PyBbXSApO1xyXG5cclxuXHRcdGlmICggc2F2ZVJlY29yZCApIHtcclxuXHRcdFx0Zmxvdy5hZGQoICdzYXZlX3JlY29yZCcgKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRBY3Rpb25zKCBmbG93Lmxpc3QgKTtcclxuXHRcdGRpc3BsYXlOb3RpY2UoKTtcclxuXHRcdG9uQXBwbHkoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFwcGVuZCggZWRpdGVkUGF0dGVybiA9IHt9ICkge1xyXG5cdFx0YXBwbHlQYXR0ZXJuKCBlZGl0ZWRQYXR0ZXJuICk7XHJcblxyXG5cdFx0ZWRpdGVkUGF0dGVybiA9IHtcclxuXHRcdFx0Li4ucGF0dGVybixcclxuXHRcdFx0Li4uZWRpdGVkUGF0dGVybixcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gaW5zZXJ0aW5nIGFjdGlvbnNcclxuXHRcdGNvbnN0IGZsb3cgPSBjb252ZXJ0RmxvdyggZWRpdGVkUGF0dGVybj8uYWN0aW9ucyA/PyBbXSApO1xyXG5cclxuXHRcdGlmICggc2F2ZVJlY29yZCApIHtcclxuXHRcdFx0Zmxvdy5hZGQoICdzYXZlX3JlY29yZCcgKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRBY3Rpb25zKCBbIC4uLmFjdGlvbnMsIC4uLmZsb3cubGlzdCBdICk7XHJcblx0XHRkaXNwbGF5Tm90aWNlKCk7XHJcblx0XHRvbkFwcGx5KCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhcHBseVBhdHRlcm4oIGVkaXRlZFBhdHRlcm4gPSB7fSApIHtcclxuXHRcdGVkaXRlZFBhdHRlcm4gPSB7XHJcblx0XHRcdC4uLnBhdHRlcm4sXHJcblx0XHRcdC4uLmVkaXRlZFBhdHRlcm4sXHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIGluc2VydGluZyBibG9ja3NcclxuXHRcdC8vIGNsaWVudElkIG1heSBiZSBlbXB0eSBpZiB3ZSB1c2UgdGhpcyBob29rIG91dHNpZGUgYmxvY2stZWRpdCBmdW5jdGlvblxyXG5cdFx0Y2xpZW50SWQgPyByZXBsYWNlQmxvY2tzKFxyXG5cdFx0XHRbIGNsaWVudElkIF0sXHJcblx0XHRcdGNyZWF0ZUJsb2Nrc0Zyb21Jbm5lckJsb2Nrc1RlbXBsYXRlKFxyXG5cdFx0XHRcdGVkaXRlZFBhdHRlcm4/LmJsb2NrcyA/PyBbXSxcclxuXHRcdFx0KSxcclxuXHRcdFx0MCxcclxuXHRcdCkgOiBpbnNlcnRCbG9ja3MoXHJcblx0XHRcdGNyZWF0ZUJsb2Nrc0Zyb21Jbm5lckJsb2Nrc1RlbXBsYXRlKFxyXG5cdFx0XHRcdGVkaXRlZFBhdHRlcm4/LmJsb2NrcyA/PyBbXSxcclxuXHRcdFx0KSxcclxuXHRcdCk7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHQgICAgICBhY3Rpb25zOiBwYXR0ZXJuQWN0aW9ucyxcclxuXHRcdFx0ICAgICAgYmxvY2tzOiBwYXR0ZXJuQmxvY2tzLFxyXG5cdFx0XHQgICAgICBuYW1lLFxyXG5cdFx0XHQgICAgICBpY29uLFxyXG5cdFx0XHQgICAgICB0aXRsZSxcclxuXHRcdFx0ICAgICAgZGVzY3JpcHRpb24sXHJcblx0XHRcdCAgICAgIHZpZXcsXHJcblx0XHRcdCAgICAgIGFwcGx5VGV4dCxcclxuXHRcdFx0ICAgICAgLi4ucmF3Rm9ybURhdGFcclxuXHRcdCAgICAgIH0gPSBlZGl0ZWRQYXR0ZXJuO1xyXG5cclxuXHRcdGlmICggIU9iamVjdC5rZXlzKCByYXdGb3JtRGF0YSApLmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVkaXRQb3N0KCByYXdGb3JtRGF0YSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgcGF0dGVybiwgaW5zZXJ0LCBhcHBlbmQsIGJsb2NrcyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VQYXR0ZXJuOyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHJlZ2lzdGVyKCBpdGVtcyApIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHR5cGU6IGNvbnN0YW50cy5yZWdpc3RlcixcclxuXHRcdFx0aXRlbXMsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0dW5SZWdpc3RlciggdHlwZXMgKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0eXBlOiBjb25zdGFudHMudW5SZWdpc3RlcixcclxuXHRcdFx0dHlwZXMsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0dXBkYXRlU2V0dGluZ3MoIHNldHRpbmdzICkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZTogY29uc3RhbnRzLnVwZGF0ZVNldHRpbmdzLFxyXG5cdFx0XHRzZXR0aW5ncyxcclxuXHRcdH07XHJcblx0fSxcclxufTsiLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0c3RvcmU6ICdqZXQtZm9ybXMvcGF0dGVybnMnLFxyXG5cdHJlZ2lzdGVyOiAnUkVHSVNURVInLFxyXG5cdHVuUmVnaXN0ZXI6ICdVTlJFR0lTVEVSJyxcclxuXHR1cGRhdGVTZXR0aW5nczogJ1VQREFURV9TRVRUSU5HJyxcclxufTtcclxuXHJcblxyXG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XHJcbmltcG9ydCBTaW5nbGVQYXR0ZXJuIGZyb20gJy4uL2NvbXBvbmVudHMvU2luZ2xlUGF0dGVybic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0WyBjb25zdGFudHMucmVnaXN0ZXIgXSggc3RhdGUsIGFjdGlvbiApIHtcclxuXHRcdGlmICggIUFycmF5LmlzQXJyYXkoIGFjdGlvbi5pdGVtcyApICkge1xyXG5cdFx0XHRhY3Rpb24uaXRlbXMgPSBbIGFjdGlvbi5pdGVtcyBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGxldCBpdGVtIG9mIGFjdGlvbi5pdGVtcyApIHtcclxuXHJcblx0XHRcdGlmICggIWl0ZW0uaGFzT3duUHJvcGVydHkoICduYW1lJyApICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBpc3NldEluZGV4ID0gc2VsZWN0b3JzLmdldFR5cGVJbmRleCggc3RhdGUsIGl0ZW0ubmFtZSApO1xyXG5cclxuXHRcdFx0Ly8gaXMgbmV3IHBhdHRlcm4gdHlwZVxyXG5cdFx0XHRpZiAoIC0xID09PSBpc3NldEluZGV4ICkge1xyXG5cdFx0XHRcdGlmICggIWl0ZW0/LnZpZXcgKSB7XHJcblx0XHRcdFx0XHRpdGVtLnZpZXcgPSBTaW5nbGVQYXR0ZXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3RhdGUudHlwZXMucHVzaCggeyAuLi5pdGVtIH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBlZGl0ZWRQYXR0ZXJuID0ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUudHlwZXNbIGlzc2V0SW5kZXggXSxcclxuXHRcdFx0XHRcdC4uLml0ZW0sXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKCAhZWRpdGVkUGF0dGVybj8udmlldyApIHtcclxuXHRcdFx0XHRcdGVkaXRlZFBhdHRlcm4udmlldyA9IFNpbmdsZVBhdHRlcm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzdGF0ZS50eXBlc1sgaXNzZXRJbmRleCBdID0gZWRpdGVkUGF0dGVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzdGF0ZTtcclxuXHR9LFxyXG5cdFsgY29uc3RhbnRzLnVuUmVnaXN0ZXIgXSggc3RhdGUsIGFjdGlvbiApIHtcclxuXHRcdGNvbnN0IHsgdHlwZXMgfSA9IGFjdGlvbjtcclxuXHJcblx0XHRzdGF0ZS50eXBlcyA9IHN0YXRlLnR5cGVzLmZpbHRlcihcclxuXHRcdFx0KCB7IG5hbWUgfSApID0+ICF0eXBlcy5pbmNsdWRlcyggbmFtZSApLFxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fSxcclxuXHRbIGNvbnN0YW50cy51cGRhdGVTZXR0aW5ncyBdKCBzdGF0ZSwgYWN0aW9uICkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncyB9ID0gYWN0aW9uO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdC4uLnN0YXRlLnNldHRpbmdzLFxyXG5cdFx0XHRcdC4uLnNldHRpbmdzLFxyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG59OyIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IHsgY3JlYXRlUmVkdXhTdG9yZSB9ID0gd3AuZGF0YTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHV4U3RvcmUoIGNvbnN0YW50cy5zdG9yZSwge1xyXG5cdHJlZHVjZXIsXHJcblx0YWN0aW9ucyxcclxuXHRzZWxlY3RvcnMsXHJcbn0gKTtcclxuIiwiaW1wb3J0IGRpc3BhdGNoZXJzIGZyb20gJy4vZGlzcGF0Y2hlcnMnO1xyXG5cclxuY29uc3QgREVGQVVMVF9TVEFURSA9IHtcclxuXHR0eXBlczogW10sXHJcblx0c2V0dGluZ3M6IHtcclxuXHRcdHNhdmVSZWNvcmQ6IHRydWUsXHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XHJcblx0Y29uc3QgY2FsbGJhY2sgPSBkaXNwYXRjaGVyc1sgYWN0aW9uPy50eXBlIF07XHJcblxyXG5cdGlmICggY2FsbGJhY2sgKSB7XHJcblx0XHRyZXR1cm4gY2FsbGJhY2soIHN0YXRlLCBhY3Rpb24gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzdGF0ZTtcclxufSIsImNvbnN0IHNlbGVjdG9ycyA9IHtcclxuXHRnZXRUeXBlSW5kZXgoIHN0YXRlLCBuYW1lICkge1xyXG5cdFx0cmV0dXJuIHN0YXRlLnR5cGVzLmZpbmRJbmRleCggcGF0dGVybiA9PiBwYXR0ZXJuLm5hbWUgPT09IG5hbWUgKTtcclxuXHR9LFxyXG5cdGdldFR5cGVzKCBzdGF0ZSApIHtcclxuXHRcdHJldHVybiBzdGF0ZS50eXBlcy5maWx0ZXIoICggeyBuYW1lIH0gKSA9PiAnZGVmYXVsdCcgIT09IG5hbWUgKTtcclxuXHR9LFxyXG5cdGdldFR5cGUoIHN0YXRlLCBzbHVnICkge1xyXG5cdFx0Y29uc3QgaW5kZXggPSBzZWxlY3RvcnMuZ2V0VHlwZUluZGV4KCBzdGF0ZSwgc2x1ZyApO1xyXG5cclxuXHRcdHJldHVybiBzdGF0ZS50eXBlc1sgaW5kZXggXTtcclxuXHR9LFxyXG5cdGdldFNldHRpbmcoIHN0YXRlLCBuYW1lICkge1xyXG5cdFx0cmV0dXJuIHN0YXRlLnNldHRpbmdzWyBuYW1lIF07XHJcblx0fSxcclxuXHRnZXRTZXR0aW5ncyggc3RhdGUgKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuc2V0dGluZ3M7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHQuLi5zZWxlY3RvcnMsXHJcbn07IiwiY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnY29udGFjdCcsXHJcblx0dGl0bGU6IF9fKCAnQ29udGFjdCBmb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcblx0ICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTE2LjggMTBDMTYuMzU4MiAxMCAxNiAxMC40NDc3IDE2IDExQzE2IDExLjU1MjMgMTYuMzU4MiAxMiAxNi44IDEySDMxLjJDMzEuNjQxOCAxMiAzMiAxMS41NTIzIDMyIDExQzMyIDEwLjQ0NzcgMzEuNjQxOCAxMCAzMS4yIDEwSDE2LjhaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk0xMiAxOUMxMiAxNy4zNDMxIDEzLjM0MzEgMTYgMTUgMTZIMzNDMzQuNjU2OSAxNiAzNiAxNy4zNDMxIDM2IDE5QzM2IDIwLjY1NjkgMzQuNjU2OSAyMiAzMyAyMkgxNUMxMy4zNDMxIDIyIDEyIDIwLjY1NjkgMTIgMTlaTTE1IDE4QzE0LjQ0NzcgMTggMTQgMTguNDQ3NyAxNCAxOUMxNCAxOS41NTIzIDE0LjQ0NzcgMjAgMTUgMjBIMzNDMzMuNTUyMyAyMCAzNCAxOS41NTIzIDM0IDE5QzM0IDE4LjQ0NzcgMzMuNTUyMyAxOCAzMyAxOEgxNVpcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTE1IDI0QzEzLjM0MzEgMjQgMTIgMjUuMzQzMSAxMiAyN0MxMiAyOC42NTY5IDEzLjM0MzEgMzAgMTUgMzBIMzNDMzQuNjU2OSAzMCAzNiAyOC42NTY5IDM2IDI3QzM2IDI1LjM0MzEgMzQuNjU2OSAyNCAzMyAyNEgxNVpNMTQgMjdDMTQgMjYuNDQ3NyAxNC40NDc3IDI2IDE1IDI2SDMzQzMzLjU1MjMgMjYgMzQgMjYuNDQ3NyAzNCAyN0MzNCAyNy41NTIzIDMzLjU1MjMgMjggMzMgMjhIMTVDMTQuNDQ3NyAyOCAxNCAyNy41NTIzIDE0IDI3WlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNMTggMzVDMTggMzMuMzQzMSAxOS4zNDMxIDMyIDIxIDMySDI3QzI4LjY1NjkgMzIgMzAgMzMuMzQzMSAzMCAzNUMzMCAzNi42NTY5IDI4LjY1NjkgMzggMjcgMzhIMjFDMTkuMzQzMSAzOCAxOCAzNi42NTY5IDE4IDM1Wk0yMSAzNEMyMC40NDc3IDM0IDIwIDM0LjQ0NzcgMjAgMzVDMjAgMzUuNTUyMyAyMC40NDc3IDM2IDIxIDM2SDI3QzI3LjU1MjMgMzYgMjggMzUuNTUyMyAyOCAzNUMyOCAzNC40NDc3IDI3LjU1MjMgMzQgMjcgMzRIMjFaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk04IDhDOCA1Ljc5MDg2IDkuNzkwODYgNCAxMiA0SDM2QzM4LjIwOTEgNCA0MCA1Ljc5MDg2IDQwIDhWNDBDNDAgNDIuMjA5MSAzOC4yMDkxIDQ0IDM2IDQ0SDEyQzkuNzkwODYgNDQgOCA0Mi4yMDkxIDggNDBWOFpNMTIgNkgzNkMzNy4xMDQ2IDYgMzggNi44OTU0MyAzOCA4VjQwQzM4IDQxLjEwNDYgMzcuMTA0NiA0MiAzNiA0MkgxMkMxMC44OTU0IDQyIDEwIDQxLjEwNDYgMTAgNDBWOEMxMCA2Ljg5NTQzIDEwLjg5NTQgNiAxMiA2WlwiXHJcblx0XHQvPlxyXG5cdDwvc3ZnPixcclxuXHRhY3Rpb25zOiBbXHJcblx0XHR7XHJcblx0XHRcdCd0eXBlJzogJ3NlbmRfZW1haWwnLFxyXG5cdFx0XHQnc2V0dGluZ3MnOiB7XHJcblx0XHRcdFx0J21haWxfdG8nOiAnZm9ybScsXHJcblx0XHRcdFx0J2Zyb21fZmllbGQnOiAnZW1haWwnLFxyXG5cdFx0XHRcdCdzdWJqZWN0JzogJyVzdWJqZWN0JScsXHJcblx0XHRcdFx0J2NvbnRlbnQnOiAnJW1lc3NhZ2UlJyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRibG9ja3M6IFtcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ2VtYWlsJyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnRW1haWwnLFxyXG5cdFx0XHRcdCdmaWVsZF90eXBlJzogJ2VtYWlsJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnbmFtZSc6ICdzdWJqZWN0JyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnU3ViamVjdCcsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3d5c2l3eWctZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAnbWVzc2FnZScsXHJcblx0XHRcdFx0J2xhYmVsJzogJ01lc3NhZ2UnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy9zdWJtaXQtZmllbGQnLFxyXG5cdFx0XSxcclxuXHRdLFxyXG5cdGFwcGx5VGV4dDogX18oXHJcblx0XHQnNCBibG9ja3MgYW5kIFNlbmQgRW1haWwgYWN0aW9uIGhhdmUgYmVlbiBhZGRlZCcsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxufTsiLCJjb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdkZWZhdWx0JyxcclxuXHR0aXRsZTogX18oICdGcm9tIHNjcmF0Y2gnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRibG9ja3M6IFtcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy9oaWRkZW4tZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAncG9zdF9pZCcsXHJcblx0XHRcdFx0J2ZpZWxkX3ZhbHVlJzogJ3Bvc3RfaWQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ3RleHRfZmllbGQnLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdUZXh0JyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcclxuXHRcdF0sXHJcblx0XSxcclxuXHRhY3Rpb25zOiBbXSxcclxuXHRhcHBseVRleHQ6IF9fKCAnMyBibG9jayBoYXMgYmVlbiBhZGRlZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2RvbmF0aW9uJyxcclxuXHR0aXRsZTogX18oICdQYXlwYWwgZG9uYXRpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRpY29uOiA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuXHQgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTIgMTkuMDA3NUMxMiAxOC40NTExIDEyLjQ0NzcgMTguMDAwMSAxMyAxOC4wMDAxSDI3QzI3LjU1MjMgMTguMDAwMSAyOCAxOC40NTExIDI4IDE5LjAwNzVDMjggMTkuNTYzOSAyNy41NTIzIDIwLjAxNDkgMjcgMjAuMDE0OUgxM0MxMi40NDc3IDIwLjAxNDkgMTIgMTkuNTYzOSAxMiAxOS4wMDc1WlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMyAyMi4wMjk3QzEyLjQ0NzcgMjIuMDI5NyAxMiAyMi40ODA3IDEyIDIzLjAzNzFDMTIgMjMuNTkzNCAxMi40NDc3IDI0LjA0NDUgMTMgMjQuMDQ0NUgyMUMyMS41NTIzIDI0LjA0NDUgMjIgMjMuNTkzNCAyMiAyMy4wMzcxQzIyIDIyLjQ4MDcgMjEuNTUyMyAyMi4wMjk3IDIxIDIyLjAyOTdIMTNaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk0zOC40MTc5IDI5LjE4NjhDMzkuMzc5MyAyOC40NTYzIDQwIDI3LjMwMDYgNDAgMjZWMTJDNDAgOS43OTA4NiAzOC4yMDkxIDggMzYgOEgxMkM5Ljc5MDg2IDggOCA5Ljc5MDg2IDggMTJWMjZDOCAyOC4yMDkxIDkuNzkwODYgMzAgMTIgMzBIMjUuMDUyNEwyNC4yMDU3IDM0LjgyNzJDMjQuMDk4NCAzNS40MzkzIDI0LjU2OTMgMzYgMjUuMTkwNyAzNkgyNy42ODNMMjcuMTk5NSAzOC44MzE4QzI3LjA5NTIgMzkuNDQyNSAyNy41NjU3IDQwLjAwMDEgMjguMTg1MiA0MC4wMDAxSDMxLjcyOTlDMzIuMjE3MiA0MC4wMDAxIDMyLjYzMzUgMzkuNjQ4OSAzMi43MTU2IDM5LjE2ODdMMzMuMTM0MiAzNi43MjA2QzMzLjg4NjUgMzYuNjkyMyAzNS42NTA0IDM2LjUyMDYgMzYuMzQwNCAzNi4xNjEzTDM2LjM0NjcgMzYuMTU4QzM3LjA5OTcgMzUuNzYyNCAzNy43MjIxIDM1LjE5MTggMzguMTgxOCAzNC40NjU0QzM4LjY1MjcgMzMuNzIzNSAzOC45MDAyIDMyLjg5NDUgMzguOTc3NiAzMi4wMzgzTDM4Ljk3ODIgMzIuMDMxQzM5LjA0NiAzMS4yNTA3IDM4Ljk2IDMwLjQ2MDUgMzguNjYwNSAyOS43MDY5QzM4LjU5MDMgMjkuNTI2OSAzOC41MDkzIDI5LjM1MzMgMzguNDE3OSAyOS4xODY4Wk0zNiAxMEgxMkMxMC45MDAzIDEwIDEwLjAwNzkgMTAuODg3NSAxMC4wMDAxIDExLjk4NTRIMzcuOTk5OUMzNy45OTIxIDEwLjg4NzUgMzcuMDk5NyAxMCAzNiAxMFpNMzggMTQuMDAwMUgxMFYyNkMxMCAyNy4xMDQ2IDEwLjg5NTQgMjggMTIgMjhIMjUuNDAzMkwyNi4zMTAyIDIyLjgyODdDMjYuMzk0MyAyMi4zNDk3IDI2LjgxMDcgMjIuMDAwNiAyNy4yOTcgMjIuMDAxNUwzMi4zNzgzIDIyLjAxMDZMMzIuNDA3NCAyMi4wMTE1QzMzLjMxODcgMjIuMDM5MiAzNC4yMjkgMjIuMjc0MSAzNS4wMjE3IDIyLjgyNzlDMzUuNzYwMiAyMy4zMzYgMzYuMzAyNyAyNC4wMjQ1IDM2LjYzMDYgMjQuODQzNEMzNi45NTUzIDI1LjYzODIgMzcuMDUwNiAyNi40NzYzIDM2Ljk3NiAyNy4zMTI2TDM2Ljk3NTQgMjcuMzE5NkMzNi45NjU2IDI3LjQyNTIgMzYuOTUzNCAyNy41MzAyIDM2LjkzODYgMjcuNjM0N0MzNi45NzUgMjcuNjU3MiAzNy4wMTEzIDI3LjY4MDMgMzcuMDQ3MyAyNy43MDQyQzM3LjYxODkgMjcuMzUyMSAzOCAyNi43MjA2IDM4IDI2VjE0LjAwMDFaTTMxLjUxNTMgMzAuMjk3N0MzMS42MDk2IDMwLjI5NjcgMzEuNzAyMyAzMC4yOTI5IDMxLjc5MzQgMzAuMjg2NEMzMi4zMDMgMzAuMjUwMSAzMi43NjI1IDMwLjEyODIgMzMuMTcxOCAyOS45MjA3TDMzLjE4NSAyOS45MTM5TDMzLjE5NTggMjkuOTA4M0MzMy42OTQyIDI5LjY0ODYgMzQuMDkzOSAyOS4yODcgMzQuMzk0OCAyOC44MjM2TDM0LjM5OSAyOC44MTcxTDM0LjQwNTQgMjguODA3M0MzNC42NzUgMjguMzg4OCAzNC44NDg1IDI3LjkwMzUgMzQuOTI1OCAyNy4zNTE0TDM0LjkyNjIgMjcuMzQ4N0MzNC45MzU5IDI3LjI3OTEgMzQuOTQ0MSAyNy4yMDg0IDM0Ljk1MDggMjcuMTM2N0MzNC45ODI5IDI2Ljc3NjcgMzQuOTY3MiAyNi40Mzg1IDM0LjkwMzYgMjYuMTIyTDM0Ljg5OCAyNi4wOTQ4QzM0Ljg2MSAyNS45MTg3IDM0LjgwOTEgMjUuNzQ5NSAzNC43NDIzIDI1LjU4N0MzNC42MDg1IDI1LjI1MDQgMzQuNDE2OCAyNC45NjI3IDM0LjE2NzIgMjQuNzIzOEwzNC4xNTA1IDI0LjcwOEMzNC4wNTg5IDI0LjYyMiAzMy45NTk3IDI0LjU0MjQgMzMuODUyOCAyNC40NjkzQzMzLjQ1NDggMjQuMTg5NCAzMi45NTk2IDI0LjAzODggMzIuMzY3MyAyNC4wMTc1TDMyLjM0NDggMjQuMDE2OEwyOC4xNjY0IDI0LjAwOTlMMjYuNSAzNEgyOEwyOC42NzExIDMwLjI5NzhIMzEuNDI3NUMzMS40NDc1IDMwLjI5OCAzMS40Njc0IDMwLjI5OCAzMS40ODcyIDMwLjI5NzlMMzEuNTE1MyAzMC4yOTc3Wk0zMC4zOTQ4IDMyLjQ2MTRMMzAuNDIyNCAzMi4zMDQxQzMxLjM0NyAzMi4zMDcxIDMzLjI2ODcgMzIuMTI3MSAzNC4xMDA5IDMxLjcwNTJMMzQuMTA3MiAzMS43MDJDMzQuOTI4MSAzMS4yODIyIDM1LjYwNDcgMzAuNjc4MSAzNi4xMDUxIDI5LjkwODNDMzYuMTUyNCAyOS44MzU4IDM2LjE5NzYgMjkuNzYyNSAzNi4yNDA5IDI5LjY4ODRMMzYuMjQ5NiAyOS42OTY4TDM2LjI2NCAyOS43MTA4QzM2LjQ3OTMgMjkuOTIyNSAzNi42NDQ3IDMwLjE3NzUgMzYuNzYwMSAzMC40NzU4QzM2LjgxNzggMzAuNjE5OCAzNi44NjI1IDMwLjc2OTggMzYuODk0NSAzMC45MjU4TDM2Ljg5OTMgMzAuOTQ5OUMzNi45NTQxIDMxLjIzMDQgMzYuOTY3NiAzMS41MzAxIDM2LjkzOTkgMzEuODQ5MkMzNi45MzQyIDMxLjkxMjcgMzYuOTI3MSAzMS45NzUzIDM2LjkxODggMzIuMDM3TDM2LjkxODQgMzIuMDM5NEMzNi44NTE3IDMyLjUyODYgMzYuNzAyMSAzMi45NTg3IDM2LjQ2OTUgMzMuMzI5N0wzNi40NjQgMzMuMzM4M0wzNi40NjA0IDMzLjM0NDFDMzYuMjAwOCAzMy43NTQ4IDM1Ljg1NiAzNC4wNzUyIDM1LjQyNiAzNC4zMDU0TDM1LjQxNjcgMzQuMzEwM0wzNS40MDUzIDM0LjMxNjNDMzUuMTM1MiAzNC40NTcgMzQuODM5OCAzNC41NTMzIDM0LjUxODkgMzQuNjA1MkMzNC4zODQ0IDM0LjYyNjkgMzQuMjQ1NCAzNC42NDA5IDM0LjEwMiAzNC42NDdDMzQuMDYwNSAzNC42NDg4IDM0LjAxODYgMzQuNjQ5OSAzMy45NzYzIDM0LjY1MDRMMzMuOTUyMiAzNC42NTA2QzMzLjkzNTEgMzQuNjUwNyAzMy45MTc5IDM0LjY1MDcgMzMuOTAwNyAzNC42NTA2TDMxLjYwNTkgMzQuNjQ3TDMxIDM3Ljk5OTlIMjkuNUwzMC4zOTQ4IDMyLjQ2MTRaXCJcclxuXHRcdC8+XHJcblx0PC9zdmc+LFxyXG5cdGFjdGlvbnM6IFtdLFxyXG5cdGJsb2NrczogW1xyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL251bWJlci1maWVsZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnbmFtZSc6ICdhbW91bnQnLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdBbW91bnQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy9zdWJtaXQtZmllbGQnLFxyXG5cdFx0XSxcclxuXHRdLFxyXG5cdG1ldGE6IHtcclxuXHRcdF9qZl9nYXRld2F5czogJ3tcImdhdGV3YXlcIjpcInBheXBhbFwiLFwicGF5cGFsXCI6e1widXNlX2dsb2JhbFwiOnRydWUsXCJjdXJyZW5jeVwiOlwiVVNEXCIsXCJzY2VuYXJpb1wiOntcImlkXCI6XCJQQVlfTk9XXCJ9fSxcInByaWNlX2ZpZWxkXCI6XCJwcmljZVwifScsXHJcblx0fSxcclxuXHRhcHBseVRleHQ6IF9fKFxyXG5cdFx0JzIgYmxvY2tzIGFuZCBQYXlQYWwgR2F0ZXdheSBoYXZlIGJlZW4gYWRkZWQnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHQnbmFtZSc6ICdmZWVkYmFjaycsXHJcblx0J3RpdGxlJzogX18oICdGZWVkYmFjaycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGljb246IDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG5cdCAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMSAxNC4wNDQ0QzEwLjQ0NzcgMTQuMDQ0NCAxMCAxNC40OTU0IDEwIDE1LjA1MTdDMTAgMTUuNjA4MSAxMC40NDc3IDE2LjA1OTEgMTEgMTYuMDU5MUgzMUMzMS41NTIzIDE2LjA1OTEgMzIgMTUuNjA4MSAzMiAxNS4wNTE3QzMyIDE0LjQ5NTQgMzEuNTUyMyAxNC4wNDQ0IDMxIDE0LjA0NDRIMTFaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTEwIDE5LjA4MTNDMTAgMTguNTI0OSAxMC40NDc3IDE4LjA3MzkgMTEgMTguMDczOUgzMUMzMS41NTIzIDE4LjA3MzkgMzIgMTguNTI0OSAzMiAxOS4wODEzQzMyIDE5LjYzNzcgMzEuNTUyMyAyMC4wODg3IDMxIDIwLjA4ODdIMTFDMTAuNDQ3NyAyMC4wODg3IDEwIDE5LjYzNzcgMTAgMTkuMDgxM1pcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTEgMjIuMTAzNUMxMC40NDc3IDIyLjEwMzUgMTAgMjIuNTU0NSAxMCAyMy4xMTA5QzEwIDIzLjY2NzIgMTAuNDQ3NyAyNC4xMTgzIDExIDI0LjExODNIMjZDMjYuNTUyMyAyNC4xMTgzIDI3IDIzLjY2NzIgMjcgMjMuMTEwOUMyNyAyMi41NTQ1IDI2LjU1MjMgMjIuMTAzNSAyNiAyMi4xMDM1SDExWlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNNiAxMi4wMjk2QzYgOS44MDQxIDcuNzkwODYgOCAxMCA4SDMyQzM0LjIwOTEgOCAzNiA5LjgwNDEgMzYgMTIuMDI5NlYyMy4xMTA5SDM4QzQwLjIwOTEgMjMuMTEwOSA0MiAyNC45MTUgNDIgMjcuMTQwNFYzMy4xODQ4QzQyIDM1LjQxMDMgNDAuMjA5MSAzNy4yMTQ0IDM4IDM3LjIxNDRIMzcuMjg1N0wzNC44NjY0IDM5LjgzOUMzNC42Njg2IDQwLjA1MzcgMzQuMzMxNCA0MC4wNTM3IDM0LjEzMzYgMzkuODM5TDMxLjcxNDMgMzcuMjE0NEgyNkMyMy43OTA5IDM3LjIxNDQgMjIgMzUuNDEwMyAyMiAzMy4xODQ4VjMwLjE2MjZIMTkuMjE0M0wxNS44NjY0IDMzLjc5NDdDMTUuNjY4NiAzNC4wMDkzIDE1LjMzMTQgMzQuMDA5MyAxNS4xMzM2IDMzLjc5NDdMMTEuNzg1NyAzMC4xNjI2SDEwQzcuNzkwODYgMzAuMTYyNiA2IDI4LjM1ODUgNiAyNi4xMzMxVjEyLjAyOTZaTTEyLjY1NzkgMjguMTQ3OEwxNS41IDMxLjIzMTJMMTguMzQyMSAyOC4xNDc4SDMyQzMzLjEwNDYgMjguMTQ3OCAzNCAyNy4yNDU4IDM0IDI2LjEzMzFWMTIuMDI5NkMzNCAxMC45MTY4IDMzLjEwNDYgMTAuMDE0OCAzMiAxMC4wMTQ4SDEwQzguODk1NDMgMTAuMDE0OCA4IDEwLjkxNjggOCAxMi4wMjk2VjI2LjEzMzFDOCAyNy4yNDU4IDguODk1NDMgMjguMTQ3OCAxMCAyOC4xNDc4SDEyLjY1NzlaTTI0IDMwLjE2MjZWMzMuMTg0OEMyNCAzNC4yOTc1IDI0Ljg5NTQgMzUuMTk5NiAyNiAzNS4xOTk2SDMyLjU4NjRMMzQuNSAzNy4yNzU2TDM2LjQxMzYgMzUuMTk5NkgzOEMzOS4xMDQ2IDM1LjE5OTYgNDAgMzQuMjk3NSA0MCAzMy4xODQ4VjI3LjE0MDRDNDAgMjYuMDI3NyAzOS4xMDQ2IDI1LjEyNTcgMzggMjUuMTI1N0gzNlYyNi4xMzMxQzM2IDI4LjM1ODUgMzQuMjA5MSAzMC4xNjI2IDMyIDMwLjE2MjZIMjRaXCJcclxuXHRcdC8+XHJcblx0PC9zdmc+LFxyXG5cdCdhY3Rpb25zJzogW1xyXG5cdFx0e1xyXG5cdFx0XHQndHlwZSc6ICdzZW5kX2VtYWlsJyxcclxuXHRcdFx0J3NldHRpbmdzJzoge1xyXG5cdFx0XHRcdCdtYWlsX3RvJzogJ2Zvcm0nLFxyXG5cdFx0XHRcdCdmcm9tX2ZpZWxkJzogJ2VtYWlsJyxcclxuXHRcdFx0XHQnc3ViamVjdCc6ICdVc2VyIGZlZWRiYWNrJyxcclxuXHRcdFx0XHQnY29udGVudCc6ICdOYW1lOiAlbmFtZSUgLSAlcmF0aW5nJTxici8+JWhvd19pbXByb3ZlJScsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0J2Jsb2Nrcyc6IFtcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ25hbWUnLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdOYW1lJyxcclxuXHRcdFx0XHQncmVxdWlyZWQnOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ2VtYWlsJyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnRW1haWwnLFxyXG5cdFx0XHRcdCdmaWVsZF90eXBlJzogJ2VtYWlsJyxcclxuXHRcdFx0XHQncmVxdWlyZWQnOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy9yYWRpby1maWVsZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnbmFtZSc6ICdyYXRpbmcnLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdQbGVhc2UgcmF0ZSBvdXIgd2Vic2l0ZScsXHJcblx0XHRcdFx0J3JlcXVpcmVkJzogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvdGV4dGFyZWEtZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAnaG93X2ltcHJvdmUnLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdIb3cgd291bGQgeW91IHN1Z2dlc3QgdG8gaW1wcm92ZSBpdD8nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy9zdWJtaXQtZmllbGQnLFxyXG5cdFx0XSxcclxuXHRdLFxyXG5cdGFwcGx5VGV4dDogX18oXHJcblx0XHQnNSBibG9ja3MgYW5kIFNlbmQgRW1haWwgYWN0aW9uIGhhdmUgYmVlbiBhZGRlZCcsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdpbnNlcnRfcG9zdCcsXHJcblx0dGl0bGU6IF9fKCAnSW5zZXJ0IFBvc3QnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRpY29uOiA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuXHQgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTIgMTUuMDA3NEMxMiAxNC40NTEgMTIuNDQ3NyAxNCAxMyAxNEgyN0MyNy41NTIzIDE0IDI4IDE0LjQ1MSAyOCAxNS4wMDc0QzI4IDE1LjU2MzggMjcuNTUyMyAxNi4wMTQ4IDI3IDE2LjAxNDhIMTNDMTIuNDQ3NyAxNi4wMTQ4IDEyIDE1LjU2MzggMTIgMTUuMDA3NFpcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTMgMTguMDI5NkMxMi40NDc3IDE4LjAyOTYgMTIgMTguNDgwNiAxMiAxOS4wMzdDMTIgMTkuNTkzMyAxMi40NDc3IDIwLjA0NDQgMTMgMjAuMDQ0NEgyN0MyNy41NTIzIDIwLjA0NDQgMjggMTkuNTkzMyAyOCAxOS4wMzdDMjggMTguNDgwNiAyNy41NTIzIDE4LjAyOTYgMjcgMTguMDI5NkgxM1pcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTMgMjIuMDU5MUMxMi40NDc3IDIyLjA1OTEgMTIgMjIuNTEwMiAxMiAyMy4wNjY1QzEyIDIzLjYyMjkgMTIuNDQ3NyAyNC4wNzM5IDEzIDI0LjA3MzlIMjJDMjIuNTUyMyAyNC4wNzM5IDIzIDIzLjYyMjkgMjMgMjMuMDY2NUMyMyAyMi41MTAyIDIyLjU1MjMgMjIuMDU5MSAyMiAyMi4wNTkxSDEzWlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0xMiAyNi45OTI2QzEyIDI2LjQzNjIgMTIuNDQ3NyAyNS45ODUyIDEzIDI1Ljk4NTJIMTlDMTkuNTUyMyAyNS45ODUyIDIwIDI2LjQzNjIgMjAgMjYuOTkyNkMyMCAyNy41NDkgMTkuNTUyMyAyOCAxOSAyOEgxM0MxMi40NDc3IDI4IDEyIDI3LjU0OSAxMiAyNi45OTI2WlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0zMCAyOEMzMCAyNy40NDc3IDMwLjQ0NzcgMjcgMzEgMjdDMzEuNTUyMyAyNyAzMiAyNy40NDc3IDMyIDI4VjMwSDM0QzM0LjU1MjMgMzAgMzUgMzAuNDQ3NyAzNSAzMUMzNSAzMS41NTIzIDM0LjU1MjMgMzIgMzQgMzJIMzJWMzRDMzIgMzQuNTUyMyAzMS41NTIzIDM1IDMxIDM1QzMwLjQ0NzcgMzUgMzAgMzQuNTUyMyAzMCAzNFYzMkgyOEMyNy40NDc3IDMyIDI3IDMxLjU1MjMgMjcgMzFDMjcgMzAuNDQ3NyAyNy40NDc3IDMwIDI4IDMwSDMwVjI4WlwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdCAgICAgIGQ9XCJNMzIgMTJWMjIuMDU0OUMzNi41IDIyLjU1MjQgNDAgMjYuMzY3NCA0MCAzMUM0MCAzNS45NzA2IDM1Ljk3MDYgNDAgMzEgNDBDMjguODU2NyA0MCAyNi44ODg0IDM5LjI1MDggMjUuMzQyNyAzOEgxMkM5Ljc5MDg2IDM4IDggMzYuMjA5MSA4IDM0VjEyQzggOS43OTA4NiA5Ljc5MDg2IDggMTIgOEgyOEMzMC4yMDkxIDggMzIgOS43OTA4NiAzMiAxMlpNMTIgMTBIMjhDMjkuMTA0NiAxMCAzMCAxMC44OTU0IDMwIDEyVjIyLjA1NDlDMjUuNSAyMi41NTI0IDIyIDI2LjM2NzQgMjIgMzFDMjIgMzIuODUwMSAyMi41NTgzIDM0LjU2OTkgMjMuNTE1NSAzNkgxMkMxMC44OTU0IDM2IDEwIDM1LjEwNDYgMTAgMzRWMTJDMTAgMTAuODk1NCAxMC44OTU0IDEwIDEyIDEwWk0zOCAzMUMzOCAzNC44NjYgMzQuODY2IDM4IDMxIDM4QzI3LjEzNCAzOCAyNCAzNC44NjYgMjQgMzFDMjQgMjcuMTM0IDI3LjEzNCAyNCAzMSAyNEMzNC44NjYgMjQgMzggMjcuMTM0IDM4IDMxWlwiXHJcblx0XHQvPlxyXG5cdDwvc3ZnPixcclxuXHRhY3Rpb25zOiBbXHJcblx0XHR7XHJcblx0XHRcdCd0eXBlJzogJ2luc2VydF9wb3N0JyxcclxuXHRcdFx0J3NldHRpbmdzJzoge1xyXG5cdFx0XHRcdCdmaWVsZHNfbWFwJzoge1xyXG5cdFx0XHRcdFx0J3RpdGxlJzogJ3Bvc3RfdGl0bGUnLFxyXG5cdFx0XHRcdFx0J2V4Y2VycHQnOiAncG9zdF9leGNlcnB0JyxcclxuXHRcdFx0XHRcdCdjb250ZW50JzogJ3Bvc3RfY29udGVudCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQncG9zdF90eXBlJzogJ3Bvc3QnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGJsb2NrczogW1xyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3RleHQtZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAndGl0bGUnLFxyXG5cdFx0XHRcdCdsYWJlbCc6ICdQb3N0IFRpdGxlJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvdGV4dGFyZWEtZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAnZXhjZXJwdCcsXHJcblx0XHRcdFx0J2xhYmVsJzogJ1Bvc3QgRXhjZXJwdCcsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3d5c2l3eWctZmllbGQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0J25hbWUnOiAnY29udGVudCcsXHJcblx0XHRcdFx0J2xhYmVsJzogJ1Bvc3QgQ29udGVudCcsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0W1xyXG5cdFx0XHQnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcsXHJcblx0XHRdLFxyXG5cdF0sXHJcblx0YXBwbHlUZXh0OiBfXyhcclxuXHRcdCc0IGJsb2NrcyBhbmQgSW5zZXJ0L1VwZGF0ZSBQb3N0IGFjdGlvbiBoYXZlIGJlZW4gYWRkZWQnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnbmV3c2xldHRlcicsXHJcblx0dGl0bGU6IF9fKCAnTmV3c2xldHRlciBTaWdudXAgRm9ybScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGljb246IDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG5cdCAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZD1cIk0yOS43MDcxIDE0LjcwNzFDMzAuMDk3NiAxNC4zMTY2IDMwLjA5NzYgMTMuNjgzNCAyOS43MDcxIDEzLjI5MjlDMjkuMzE2NiAxMi45MDI0IDI4LjY4MzQgMTIuOTAyNCAyOC4yOTI5IDEzLjI5MjlMMjMgMTguNTg1OEwxOS43MDcxIDE1LjI5MjlDMTkuMzE2NiAxNC45MDI0IDE4LjY4MzQgMTQuOTAyNCAxOC4yOTI5IDE1LjI5MjlDMTcuOTAyNCAxNS42ODM0IDE3LjkwMjQgMTYuMzE2NiAxOC4yOTI5IDE2LjcwNzFMMjEuOTM5MyAyMC4zNTM2QzIyLjUyNTEgMjAuOTM5MyAyMy40NzQ5IDIwLjkzOTMgMjQuMDYwNyAyMC4zNTM2TDI5LjcwNzEgMTQuNzA3MVpcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTguNDcwMSAyMS43MDYzTDE0IDE4LjI1MTFWMTFDMTQgOS4zNDMxNSAxNS4zNDMxIDggMTcgOEgzMUMzMi42NTY5IDggMzQgOS4zNDMxNSAzNCAxMVYxOC4yNTExTDM5LjUyOTkgMjEuNzA2M0MzOS44MjIzIDIxLjg4OSA0MCAyMi4yMDk1IDQwIDIyLjU1NDRWMzdDNDAgMzguNjU2OSAzOC42NTY5IDQwIDM3IDQwSDExQzkuMzQzMTUgNDAgOCAzOC42NTY5IDggMzdWMjIuNTU0NEM4IDIyLjIwOTUgOC4xNzc2NiAyMS44ODkgOC40NzAxIDIxLjcwNjNaTTE3IDEwSDMxQzMxLjU1MjMgMTAgMzIgMTAuNDQ3NyAzMiAxMVYyNS42NzkzTDI5LjIxOTMgMjcuNjI1OEwyNS40NTUxIDIzLjYzMzJDMjQuNjY1NyAyMi43OTU4IDIzLjMzNDEgMjIuNzk1OCAyMi41NDQ2IDIzLjYzMzJMMTguNzgwNiAyNy42MjU3TDE2IDI1LjY3OTNWMTFDMTYgMTAuNDQ3NyAxNi40NDc3IDEwIDE3IDEwWk0xNy4zOTQgMjkuMDk2NUwxMCAyMy45MjA3VjM2LjkzOTNMMTcuMzk0IDI5LjA5NjVaTTE0IDIwLjYwOTRMMTEuMjI5OCAyMi4zNDAyTDE0IDI0LjI3OTNWMjAuNjA5NFpNMzQgMjQuMjc5M1YyMC42MDk0TDM2Ljc3MDEgMjIuMzQwMkwzNCAyNC4yNzkzWk0zMC42MDU5IDI5LjA5NjZMMzggMjMuOTIwN1YzNi45Mzk1TDMwLjYwNTkgMjkuMDk2NlpNMTAuOTkxIDM4SDM3LjAwOUwzNyAzOEgxMUwxMC45OTEgMzhaTTExLjc1OSAzNy45ODkxSDM2LjI0MDhMMjMuOTk5OSAyNS4wMDUxTDExLjc1OSAzNy45ODkxWlwiXHJcblx0XHQvPlxyXG5cdDwvc3ZnPixcclxuXHRhY3Rpb25zOiBbXHJcblx0XHR7XHJcblx0XHRcdCd0eXBlJzogJ21haWxjaGltcCcsXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0YmxvY2tzOiBbXHJcblx0XHRbXHJcblx0XHRcdCdjb3JlL2NvbHVtbnMnLFxyXG5cdFx0XHR7fSxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdCdjb3JlL2NvbHVtbicsXHJcblx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFtcclxuXHRcdFx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0J25hbWUnOiAnZW1haWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0J2ZpZWxkX3R5cGUnOiAnZW1haWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0J3BsYWNlaG9sZGVyJzogJ0VudGVyIHlvdSBlbWFpbCcsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQnY29yZS9jb2x1bW4nLFxyXG5cdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRbXHJcblx0XHRcdFx0XHRcdFtcclxuXHRcdFx0XHRcdFx0XHQnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcsXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdF0sXHJcblx0XHRdLFxyXG5cdF0sXHJcblx0YXBwbHlUZXh0OiBfXyhcclxuXHRcdCcyIGZvcm0gZmllbGRzIGFuZCBNYWlsY2hpbXAgYWN0aW9uIGhhdmUgYmVlbiBhZGRlZCcsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdyZWdpc3Rlcl91c2VyJyxcclxuXHR0aXRsZTogX18oICdSZWdpc3RlciBVc2VyJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcblx0ICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTMyIDI4QzMxLjQ0NzcgMjggMzEgMjguNDQ3NyAzMSAyOVYzMUgyOUMyOC40NDc3IDMxIDI4IDMxLjQ0NzcgMjggMzJDMjggMzIuNTUyMyAyOC40NDc3IDMzIDI5IDMzSDMxVjM1QzMxIDM1LjU1MjMgMzEuNDQ3NyAzNiAzMiAzNkMzMi41NTIzIDM2IDMzIDM1LjU1MjMgMzMgMzVWMzNIMzVDMzUuNTUyMyAzMyAzNiAzMi41NTIzIDM2IDMyQzM2IDMxLjQ0NzcgMzUuNTUyMyAzMSAzNSAzMUgzM1YyOUMzMyAyOC40NDc3IDMyLjU1MjMgMjggMzIgMjhaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk0yNS4zMDI3IDI3LjYyMjdDMjQuOTgzNCAyNy41MDAzIDI0LjgwMjYgMjcuMzg0NSAyNC43MDcyIDI3LjI4OTFDMjQuMjUwMSAyNi44MzE4IDI0LjA4OTIgMjYuNDAwOCAyNC4wMzE4IDI1Ljg5NTdDMjcuMTgxNCAyNS4yODM2IDI5IDIxLjk5NTYgMjkgMTguOTkyNkwyOSAxOC44OTI5QzI5LjAwMDEgMTcuNDgwNiAyOS4wMDAxIDE2LjQwOTcgMjguODYxNCAxNS41NzdDMjguNzA0OSAxNC42Mzc1IDI4LjM2NTkgMTMuOTQyNSAyNy43MDcyIDEzLjI4MzdDMjYuODU3NCAxMi40MzM1IDI1LjQ1MjYgMTEuNjMyMSAyNC44MjE0IDExLjI5MTZMMjQuMDYyNyA5LjAxNDQ5QzIzLjg2MDkgOC40MDkgMjMuMjc4NiA3Ljk2NDY1IDIyLjU4NjMgOC4wMDI3N0MyMS45NDYgOC4wMzgwMyAyMC41OTY2IDguMTYzNjQgMTkuMTE2MSA4LjYyMDY1QzE3LjY0NSA5LjA3NDc3IDE1Ljk1MjMgOS44ODQ0NyAxNC43MzE3IDExLjM0OThDMTIuOTgxMyAxMy40NTEgMTIuOTg5NCAxNS43NjU3IDEyLjk5ODYgMTguNDA3OUMxMi45OTkzIDE4LjYwMSAxMyAxOC43OTYgMTMgMTguOTkyNkMxMyAyMS45OTU2IDE0LjgxODYgMjUuMjgzNiAxNy45NjgyIDI1Ljg5NTdDMTcuOTEwOCAyNi40MDA4IDE3Ljc0OTkgMjYuODMxOCAxNy4yOTI4IDI3LjI4OTFDMTcuMjA0MyAyNy4zNzc2IDE3LjAwMiAyNy41MDQ2IDE2LjU5NTggMjcuNjQ0N0MxNi4yMDMxIDI3Ljc4MDIgMTUuNzIzNSAyNy44OTQ2IDE1LjE1OCAyOC4wMjAzQzE1LjA2MjUgMjguMDQxNSAxNC45NjQ1IDI4LjA2MyAxNC44NjQzIDI4LjA4NUMxMy44Mzk0IDI4LjMxIDEyLjU4ODEgMjguNTg0NiAxMS41NTI2IDI5LjEwMjVDMTAuNTEyIDI5LjYyMzEgOS42MDU3IDMwLjIwMTggOC45NjkwMSAzMC45OThDOC4zMDM3NyAzMS44Mjk4IDggMzIuODExNyA4IDMzLjk5ODRWMzYuNDk5NkM4IDM3LjMyOCA4LjY3MTU3IDM3Ljk5OTYgOS41IDM3Ljk5OTZIMjYuNzA3OUMyOC4xMTgyIDM5LjI0NDYgMjkuOTcwOSA0MCAzMiA0MEMzNi40MTgzIDQwIDQwIDM2LjQxODMgNDAgMzJDNDAgMjcuNTgxNyAzNi40MTgzIDI0IDMyIDI0QzI5LjE5NzQgMjQgMjYuNzMxNSAyNS40NDExIDI1LjMwMjcgMjcuNjIyN1pNMjIuMjkyNyAxMC4wMjk0QzIxLjY3MDkgMTAuMDg1OCAyMC43MTkgMTAuMjE5IDE5LjcwNiAxMC41MzE3QzE4LjQyOCAxMC45MjYyIDE3LjE0NDUgMTEuNTc4IDE2LjI2ODMgMTIuNjI5OUMxNC45OTY4IDE0LjE1NjQgMTQuOTk3OSAxNS43NDk0IDE0Ljk5OTggMTguNjM3OUwxNSAxOC45OTI2QzE1IDIxLjUyMTYgMTYuNTc5OSAyMy43NDAzIDE4LjYxNDMgMjMuOTczMUMxOS4zMDYzIDI0LjA1MjMgMjAuMDE5NiAyNC42MzQ4IDE5Ljk5NSAyNS41MjI2QzE5Ljk2ODIgMjYuNDg4IDE5Ljc5MzEgMjcuNjE2NyAxOC43MDcyIDI4LjcwMzFDMTguMjk1NyAyOS4xMTQ4IDE3Ljc0OCAyOS4zNjI5IDE3LjI0OCAyOS41MzU0QzE2LjczNDQgMjkuNzEyNiAxNi4xNTE1IDI5Ljg0ODMgMTUuNTkyIDI5Ljk3MjZMMTUuMzM1MSAzMC4wMjk1QzE0LjI1NCAzMC4yNjg1IDEzLjI0NzUgMzAuNDkxIDEyLjQ0NzQgMzAuODkxMkMxMS40ODggMzEuMzcxMSAxMC44OTQzIDMxLjc5MjcgMTAuNTMxIDMyLjI0NzFDMTAuMTk2MiAzMi42NjU3IDEwIDMzLjE4NDQgMTAgMzMuOTk4NFYzNS45OTk2SDI1LjA3QzI0LjM4OTUgMzQuODIzIDI0IDMzLjQ1NyAyNCAzMkMyNCAzMS4wOTkxIDI0LjE0ODkgMzAuMjMzIDI0LjQyMzUgMjkuNDI0OUMyNC4wMjEyIDI5LjI1NjIgMjMuNjE4NyAyOS4wMjkyIDIzLjI5MjggMjguNzAzMUMyMi4yMDY5IDI3LjYxNjcgMjIuMDMxOCAyNi40ODggMjIuMDA1IDI1LjUyMjZDMjEuOTgwNCAyNC42MzQ4IDIyLjY5MzcgMjQuMDUyMyAyMy4zODU3IDIzLjk3MzFDMjUuNDIwMSAyMy43NDAzIDI3IDIxLjUyMTYgMjcgMTguOTkyNkMyNyAxNy40NTMxIDI2Ljk5NjYgMTYuNTU0IDI2Ljg4ODYgMTUuOTA1NkMyNi43OTUxIDE1LjM0NDUgMjYuNjM0MSAxNS4wMzkxIDI2LjI5MjggMTQuNjk3NkMyNS41OTg5IDE0LjAwMzQgMjQuMjQ5MyAxMy4yNDk3IDIzLjcxNzQgMTIuOTY5NEMyMy4zNzgxIDEyLjc5MDcgMjMuMTExNSAxMi40ODY1IDIyLjk4NTggMTIuMTA5NUwyMi4yOTI3IDEwLjAyOTRaTTMyIDM4QzM1LjMxMzcgMzggMzggMzUuMzEzNyAzOCAzMkMzOCAyOC42ODYzIDM1LjMxMzcgMjYgMzIgMjZDMjguNjg2MyAyNiAyNiAyOC42ODYzIDI2IDMyQzI2IDM1LjMxMzcgMjguNjg2MyAzOCAzMiAzOFpcIlxyXG5cdFx0Lz5cclxuXHQ8L3N2Zz4sXHJcblx0YWN0aW9uczogW1xyXG5cdFx0e1xyXG5cdFx0XHQndHlwZSc6ICd2ZXJpZmljYXRpb24nLFxyXG5cdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdCdtYWlsX3RvJzogJ2VtYWlsJyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdCd0eXBlJzogJ3JlZ2lzdGVyX3VzZXInLFxyXG5cdFx0XHQnc2V0dGluZ3MnOiB7XHJcblx0XHRcdFx0J2ZpZWxkc19tYXAnOiB7XHJcblx0XHRcdFx0XHQnZW1haWwnOiAnZW1haWwnLFxyXG5cdFx0XHRcdFx0J2xvZ2luJzogJ2xvZ2luJyxcclxuXHRcdFx0XHRcdCdwYXNzd29yZCc6ICdfamZiX3ZlcmlmaWNhdGlvbl90b2tlbicsXHJcblx0XHRcdFx0XHQnY29uZmlybV9wYXNzd29yZCc6ICdfamZiX3ZlcmlmaWNhdGlvbl90b2tlbicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnbG9nX2luJzogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRibG9ja3M6IFtcclxuXHRcdFtcclxuXHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdCduYW1lJzogJ2VtYWlsJyxcclxuXHRcdFx0XHQnbGFiZWwnOiAnRW1haWwnLFxyXG5cdFx0XHRcdCdmaWVsZF90eXBlJzogJ2VtYWlsJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHQnbmFtZSc6ICdsb2dpbicsXHJcblx0XHRcdFx0J2xhYmVsJzogJ0xvZ2luJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRbXHJcblx0XHRcdCdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcclxuXHRcdF0sXHJcblx0XSxcclxuXHRhcHBseVRleHQ6IF9fKFxyXG5cdFx0JzMgYmxvY2tzIGFuZCBSZWdpc3RlciBVc2VyIHdpdGggVmVyaWZpY2F0aW9uIGFjdGlvbiBoYXZlIGJlZW4gYWRkZWQnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07IiwiaW1wb3J0IFByb1NpbmdsZVBhdHRlcm4gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9TaW5nbGVQYXR0ZXJuJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IHJlc2V0UGFzc1BhdHRlcm4gfSA9IEpldEZvcm1FZGl0b3JEYXRhLnV0bUxpbmtzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdyZXNldF9wYXNzd29yZCcsXHJcblx0dGl0bGU6IF9fKCAnUmVzZXQgUGFzc3dvcmQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRpY29uOiA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuXHQgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMzkuODUxOSAxNC4yMTNDMzkuMzA5OCAxNi4zODgzIDM3LjM0MzEgMTggMzUgMThDMzIuMjM4NiAxOCAzMCAxNS43NjE0IDMwIDEzQzMwIDEwLjIzODYgMzIuMjM4NiA4IDM1IDhDMzYuNjM1NyA4IDM4LjA4OCA4Ljc4NTQ1IDM5LjAwMDIgOS45OTk3NkgzOEMzNy40NDc3IDkuOTk5NzYgMzcgMTAuNDQ3NSAzNyAxMC45OTk4QzM3IDExLjU1MiAzNy40NDc3IDExLjk5OTggMzggMTEuOTk5OEg0MC45Nzc3TDQxIDEyQzQxLjUxNzggMTIgNDEuOTQzNiAxMS42MDY1IDQxLjk5NDggMTEuMTAyMkM0MS45OTgzIDExLjA2ODYgNDIgMTEuMDM0MyA0MiAxMC45OTk4VjhDNDIgNy40NDc3MiA0MS41NTIzIDcgNDEgN0M0MC40NDc3IDcgNDAgNy40NDc3MiA0MCA4VjguMTAxMDJDMzguNzI5NSA2LjgwNDQ3IDM2Ljk1ODcgNiAzNSA2QzMxLjEzNCA2IDI4IDkuMTM0MDEgMjggMTNDMjggMTYuODY2IDMxLjEzNCAyMCAzNSAyMEMzOC4yODA0IDIwIDQxLjAzMzcgMTcuNzQzNiA0MS43OTI2IDE0LjY5ODJMMzkuODUxOSAxNC4yMTNaXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0ICAgICAgZD1cIk0yMCAzMy44NzRDMjEuNzI1MiAzMy40Mjk5IDIzIDMxLjg2MzggMjMgMzBDMjMgMjcuNzkwOSAyMS4yMDkxIDI2IDE5IDI2QzE2Ljc5MDkgMjYgMTUgMjcuNzkwOSAxNSAzMEMxNSAzMS44NjM4IDE2LjI3NDggMzMuNDI5OSAxOCAzMy44NzRWMzdDMTggMzcuNTUyMyAxOC40NDc3IDM4IDE5IDM4QzE5LjU1MjMgMzggMjAgMzcuNTUyMyAyMCAzN1YzMy44NzRaTTIxIDMwQzIxIDMxLjEwNDYgMjAuMTA0NiAzMiAxOSAzMkMxNy44OTU0IDMyIDE3IDMxLjEwNDYgMTcgMzBDMTcgMjguODk1NCAxNy44OTU0IDI4IDE5IDI4QzIwLjEwNDYgMjggMjEgMjguODk1NCAyMSAzMFpcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTI4IDIyQzMwLjIwOTEgMjIgMzIgMjMuNzkwOSAzMiAyNlYzOEMzMiA0MC4yMDkxIDMwLjIwOTEgNDIgMjggNDJIMTBDNy43OTA4NiA0MiA2IDQwLjIwOTEgNiAzOFYyNkM2IDIzLjc5MDkgNy43OTA4NiAyMiAxMCAyMlYxOUMxMCAxNC4wMjk0IDE0LjAyOTQgMTAgMTkgMTBDMjMuOTcwNiAxMCAyOCAxNC4wMjk0IDI4IDE5VjIyWk0yNiAxOVYyMkgyNFYxOUMyNCAxNi4yMzg2IDIxLjc2MTQgMTQgMTkgMTRDMTYuMjM4NiAxNCAxNCAxNi4yMzg2IDE0IDE5VjIySDEyVjE5QzEyIDE1LjEzNCAxNS4xMzQgMTIgMTkgMTJDMjIuODY2IDEyIDI2IDE1LjEzNCAyNiAxOVpNMjIgMTlWMjJIMTZWMTlDMTYgMTcuMzQzMSAxNy4zNDMxIDE2IDE5IDE2QzIwLjY1NjkgMTYgMjIgMTcuMzQzMSAyMiAxOVpNMzAgMjZDMzAgMjQuODk1NCAyOS4xMDQ2IDI0IDI4IDI0SDEwQzguODk1NDMgMjQgOCAyNC44OTU0IDggMjZWMzhDOCAzOS4xMDQ2IDguODk1NDMgNDAgMTAgNDBIMjhDMjkuMTA0NiA0MCAzMCAzOS4xMDQ2IDMwIDM4VjI2WlwiXHJcblx0XHQvPlxyXG5cdDwvc3ZnPixcclxuXHRibG9ja3M6IFtdLFxyXG5cdGFjdGlvbnM6IFtdLFxyXG5cdHZpZXc6IFByb1NpbmdsZVBhdHRlcm4sXHJcblx0bGluazogcmVzZXRQYXNzUGF0dGVybixcclxufTsiLCJpbXBvcnQgUHJvU2luZ2xlUGF0dGVybiBmcm9tICcuLi9jb21wb25lbnRzL1Byb1NpbmdsZVBhdHRlcm4nO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgdXNlckxvZ2luUGF0dGVybiB9ID0gSmV0Rm9ybUVkaXRvckRhdGEudXRtTGlua3M7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ3VzZXJfbG9naW4nLFxyXG5cdHRpdGxlOiBfXyggJ1VzZXIgTG9naW4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRpY29uOiA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuXHQgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTM0IDMzQzM0IDMzLjc1MzIgMzMuNTgzNyAzNC40MDkxIDMyLjk2ODYgMzQuNzUwMkMzMi45ODkxIDM0LjgzMDEgMzMgMzQuOTEzOCAzMyAzNVYzNkMzMyAzNi41NTIzIDMyLjU1MjMgMzcgMzIgMzdDMzEuNDQ3NyAzNyAzMSAzNi41NTIzIDMxIDM2VjM1QzMxIDM0LjkxMzggMzEuMDEwOSAzNC44MzAxIDMxLjAzMTQgMzQuNzUwMkMzMC40MTYzIDM0LjQwOTEgMzAgMzMuNzUzMiAzMCAzM0MzMCAzMS44OTU0IDMwLjg5NTQgMzEgMzIgMzFDMzMuMTA0NiAzMSAzNCAzMS44OTU0IDM0IDMzWk0zMiAzMy43NjkyQzMyLjQyNDggMzMuNzY5MiAzMi43NjkyIDMzLjQyNDggMzIuNzY5MiAzM0MzMi43NjkyIDMyLjU3NTIgMzIuNDI0OCAzMi4yMzA4IDMyIDMyLjIzMDhDMzEuNTc1MiAzMi4yMzA4IDMxLjIzMDggMzIuNTc1MiAzMS4yMzA4IDMzQzMxLjIzMDggMzMuNDI0OCAzMS41NzUyIDMzLjc2OTIgMzIgMzMuNzY5MlpcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHQgICAgICBkPVwiTTI2LjY3MzkgMjhDMjYuMTkzIDI3Ljg5MzMgMjUuNzc5MyAyNy43OTExIDI1LjQzMTMgMjcuNjY5OEMyNS4wMzA3IDI3LjUzIDI0LjgxNDggMjcuMzk2NyAyNC43MDcyIDI3LjI4OTFDMjQuMjUwMSAyNi44MzE4IDI0LjA4OTIgMjYuNDAwOCAyNC4wMzE4IDI1Ljg5NTdDMjcuMTgxNCAyNS4yODM2IDI5IDIxLjk5NTYgMjkgMTguOTkyNkwyOSAxOC44OTI5QzI5LjAwMDEgMTcuNDgwNiAyOS4wMDAxIDE2LjQwOTcgMjguODYxNCAxNS41NzdDMjguNzA0OSAxNC42Mzc1IDI4LjM2NTkgMTMuOTQyNSAyNy43MDcyIDEzLjI4MzdDMjYuODU3NCAxMi40MzM1IDI1LjQ1MjYgMTEuNjMyMSAyNC44MjE0IDExLjI5MTZMMjQuMDYyNyA5LjAxNDQ5QzIzLjg2MDkgOC40MDkgMjMuMjc4NiA3Ljk2NDY1IDIyLjU4NjMgOC4wMDI3N0MyMS45NDYgOC4wMzgwMyAyMC41OTY2IDguMTYzNjQgMTkuMTE2MSA4LjYyMDY1QzE3LjY0NSA5LjA3NDc3IDE1Ljk1MjMgOS44ODQ0NyAxNC43MzE3IDExLjM0OThDMTIuOTgxMyAxMy40NTEgMTIuOTg5NCAxNS43NjU3IDEyLjk5ODYgMTguNDA3OUMxMi45OTkzIDE4LjYwMSAxMyAxOC43OTYgMTMgMTguOTkyNkMxMyAyMS45OTU2IDE0LjgxODYgMjUuMjgzNiAxNy45NjgyIDI1Ljg5NTdDMTcuOTEwOCAyNi40MDA4IDE3Ljc0OTkgMjYuODMxOCAxNy4yOTI4IDI3LjI4OTFDMTcuMjA0MyAyNy4zNzc2IDE3LjAwMiAyNy41MDQ2IDE2LjU5NTggMjcuNjQ0N0MxNi4yMDMxIDI3Ljc4MDIgMTUuNzIzNSAyNy44OTQ2IDE1LjE1OCAyOC4wMjAzQzE1LjA2MjUgMjguMDQxNSAxNC45NjQ1IDI4LjA2MyAxNC44NjQzIDI4LjA4NUMxMy44Mzk0IDI4LjMxIDEyLjU4ODEgMjguNTg0NiAxMS41NTI2IDI5LjEwMjVDMTAuNTEyIDI5LjYyMzEgOS42MDU3IDMwLjIwMTggOC45NjkwMSAzMC45OThDOC4zMDM3NyAzMS44Mjk4IDggMzIuODExNyA4IDMzLjk5ODRWMzYuNDk5NkM4IDM3LjMyOCA4LjY3MTU3IDM3Ljk5OTYgOS41IDM3Ljk5OTZIMjRDMjQgMzkuMTA0MiAyNC44OTU0IDQwIDI2IDQwSDM4QzM5LjEwNDYgNDAgNDAgMzkuMTA0NiA0MCAzOFYzMEM0MCAyOC44OTU0IDM5LjEwNDYgMjggMzggMjhIMzZWMjdDMzYgMjQuNzkwOSAzNC4yMDkxIDIzIDMyIDIzQzI5Ljc5MDkgMjMgMjggMjQuNzkwOSAyOCAyN1YyOEgyNi42NzM5Wk0yMi4yOTI3IDEwLjAyOTRDMjEuNjcwOSAxMC4wODU4IDIwLjcxOSAxMC4yMTkgMTkuNzA2IDEwLjUzMTdDMTguNDI4IDEwLjkyNjIgMTcuMTQ0NSAxMS41NzggMTYuMjY4MyAxMi42Mjk5QzE0Ljk5NjggMTQuMTU2NCAxNC45OTc5IDE1Ljc0OTQgMTQuOTk5OCAxOC42Mzc5TDE1IDE4Ljk5MjZDMTUgMjEuNTIxNiAxNi41Nzk5IDIzLjc0MDMgMTguNjE0MyAyMy45NzMxQzE5LjMwNjMgMjQuMDUyMyAyMC4wMTk2IDI0LjYzNDggMTkuOTk1IDI1LjUyMjZDMTkuOTY4MiAyNi40ODggMTkuNzkzMSAyNy42MTY3IDE4LjcwNzIgMjguNzAzMUMxOC4yOTU3IDI5LjExNDggMTcuNzQ4IDI5LjM2MjkgMTcuMjQ4IDI5LjUzNTRDMTYuNzM0NCAyOS43MTI2IDE2LjE1MTUgMjkuODQ4MyAxNS41OTIgMjkuOTcyNkwxNS4zMzUxIDMwLjAyOTVDMTQuMjU0IDMwLjI2ODUgMTMuMjQ3NSAzMC40OTEgMTIuNDQ3NCAzMC44OTEyQzExLjQ4OCAzMS4zNzExIDEwLjg5NDMgMzEuNzkyNyAxMC41MzEgMzIuMjQ3MUMxMC4xOTYyIDMyLjY2NTcgMTAgMzMuMTg0NCAxMCAzMy45OTg0VjM1Ljk5OTZIMjRWMzBDMjQgMjkuNzUgMjQuMDQ1OSAyOS41MTA4IDI0LjEyOTYgMjkuMjkwMkMyMy44MjkgMjkuMTM5MyAyMy41MzkxIDI4Ljk0OTUgMjMuMjkyOCAyOC43MDMxQzIyLjIwNjkgMjcuNjE2NyAyMi4wMzE4IDI2LjQ4OCAyMi4wMDUgMjUuNTIyNkMyMS45ODA0IDI0LjYzNDggMjIuNjkzNyAyNC4wNTIzIDIzLjM4NTcgMjMuOTczMUMyNS40MjAxIDIzLjc0MDMgMjcgMjEuNTIxNiAyNyAxOC45OTI2QzI3IDE3LjQ1MzEgMjYuOTk2NiAxNi41NTQgMjYuODg4NiAxNS45MDU2QzI2Ljc5NTEgMTUuMzQ0NSAyNi42MzQxIDE1LjAzOTEgMjYuMjkyOCAxNC42OTc2QzI1LjU5ODkgMTQuMDAzNCAyNC4yNDkzIDEzLjI0OTcgMjMuNzE3NCAxMi45Njk0QzIzLjM3ODEgMTIuNzkwNyAyMy4xMTE1IDEyLjQ4NjUgMjIuOTg1OCAxMi4xMDk1TDIyLjI5MjcgMTAuMDI5NFpNMzQgMjhWMjdDMzQgMjUuODk1NCAzMy4xMDQ2IDI1IDMyIDI1QzMwLjg5NTQgMjUgMzAgMjUuODk1NCAzMCAyN1YyOEgzNFpNMzggMzBWMzhIMjZWMzBIMzhaXCJcclxuXHRcdC8+XHJcblx0PC9zdmc+LFxyXG5cdGJsb2NrczogW10sXHJcblx0YWN0aW9uczogW10sXHJcblx0dmlldzogUHJvU2luZ2xlUGF0dGVybixcclxuXHRsaW5rOiB1c2VyTG9naW5QYXR0ZXJuLFxyXG59OyIsImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHJlZ2lzdGVyQnVpbGRlcnMoIGl0ZW1zICkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dHlwZTogY29uc3RhbnRzLnJlZ2lzdGVyQnVpbGRlcnMsXHJcblx0XHRcdGl0ZW1zLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHVuUmVnaXN0ZXJCdWlsZGVycyggbmFtZXMgKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0eXBlOiBjb25zdGFudHMudW5SZWdpc3RlckJ1aWxkZXJzLFxyXG5cdFx0XHRuYW1lcyxcclxuXHRcdH07XHJcblx0fSxcclxuXHR1cGRhdGVTZXR0aW5ncyggc2V0dGluZ3MgKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0eXBlOiBjb25zdGFudHMudXBkYXRlU2V0dGluZ3MsXHJcblx0XHRcdHNldHRpbmdzLFxyXG5cdFx0fTtcclxuXHR9LFxyXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHRzdG9yZTogJ2pldC1mb3Jtcy91c2UtZm9ybScsXHJcblx0cmVnaXN0ZXJCdWlsZGVyczogJ1JFR0lTVEVSX0JVSWxERVInLFxyXG5cdHVuUmVnaXN0ZXJCdWlsZGVyczogJ1VOUkVHSVNURVJfQlVJTERFUicsXHJcblx0dXBkYXRlU2V0dGluZ3M6ICdVUERBVEVfU0VUVElORycsXHJcbn07XHJcblxyXG5cclxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xyXG5cclxuY29uc3QgZGVmYXVsdEVtYmVkID0ge1xyXG5cdHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0xCTzhFN1c0QUYwJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRbIGNvbnN0YW50cy5yZWdpc3RlckJ1aWxkZXJzIF0oIHN0YXRlLCBhY3Rpb24gKSB7XHJcblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCBhY3Rpb24uaXRlbXMgKSApIHtcclxuXHRcdFx0YWN0aW9uLml0ZW1zID0gWyBhY3Rpb24uaXRlbXMgXTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCBsZXQgaXRlbSBvZiBhY3Rpb24uaXRlbXMgKSB7XHJcblxyXG5cdFx0XHRpZiAoICFpdGVtLmhhc093blByb3BlcnR5KCAnbmFtZScgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgaXNzZXRJbmRleCA9IHNlbGVjdG9ycy5nZXRCdWlsZGVySW5kZXgoIHN0YXRlLCBpdGVtLm5hbWUgKTtcclxuXHJcblx0XHRcdC8vIGlzIG5ldyBwYXR0ZXJuIHR5cGVcclxuXHRcdFx0aWYgKCAtMSA9PT0gaXNzZXRJbmRleCApIHtcclxuXHRcdFx0XHRpdGVtLmVtYmVkID8/PSB7IC4uLmRlZmF1bHRFbWJlZCB9O1xyXG5cclxuXHRcdFx0XHRzdGF0ZS5idWlsZGVycy5wdXNoKCB7IC4uLml0ZW0gfSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHN0YXRlLmJ1aWxkZXJzWyBpc3NldEluZGV4IF0gPSB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZS5idWlsZGVyc1sgaXNzZXRJbmRleCBdLFxyXG5cdFx0XHRcdFx0Li4uaXRlbSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH0sXHJcblx0WyBjb25zdGFudHMudW5SZWdpc3RlckJ1aWxkZXJzIF0oIHN0YXRlLCBhY3Rpb24gKSB7XHJcblx0XHRjb25zdCB7IG5hbWVzIH0gPSBhY3Rpb247XHJcblxyXG5cdFx0c3RhdGUuYnVpbGRlcnMgPSBzdGF0ZS5idWlsZGVycy5maWx0ZXIoXHJcblx0XHRcdCggeyBuYW1lIH0gKSA9PiAhbmFtZXMuaW5jbHVkZXMoIG5hbWUgKSxcclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH0sXHJcblx0WyBjb25zdGFudHMudXBkYXRlU2V0dGluZ3MgXSggc3RhdGUsIGFjdGlvbiApIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MgfSA9IGFjdGlvbjtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHQuLi5zdGF0ZS5zZXR0aW5ncyxcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSxcclxufTsiLCJpbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcclxuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCB7IGNyZWF0ZVJlZHV4U3RvcmUgfSA9IHdwLmRhdGE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1eFN0b3JlKCBjb25zdGFudHMuc3RvcmUsIHtcclxuXHRyZWR1Y2VyLFxyXG5cdGFjdGlvbnMsXHJcblx0c2VsZWN0b3JzLFxyXG59ICk7XHJcbiIsImltcG9ydCBkaXNwYXRjaGVycyBmcm9tICcuL2Rpc3BhdGNoZXJzJztcclxuXHJcbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XHJcblx0YnVpbGRlcnM6IFtdLFxyXG5cdHNldHRpbmdzOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICggc3RhdGUgPSBERUZBVUxUX1NUQVRFLCBhY3Rpb24gKSB7XHJcblx0Y29uc3QgY2FsbGJhY2sgPSBkaXNwYXRjaGVyc1sgYWN0aW9uPy50eXBlIF07XHJcblxyXG5cdGlmICggY2FsbGJhY2sgKSB7XHJcblx0XHRyZXR1cm4gY2FsbGJhY2soIHN0YXRlLCBhY3Rpb24gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzdGF0ZTtcclxufSIsImNvbnN0IHNlbGVjdG9ycyA9IHtcclxuXHRnZXRDdXJyZW50QnVpbGRlciggc3RhdGUgKSB7XHJcblx0XHRyZXR1cm4gc2VsZWN0b3JzLmdldEJ1aWxkZXIoXHJcblx0XHRcdHN0YXRlLFxyXG5cdFx0XHRzdGF0ZS5zZXR0aW5ncz8uYnVpbGRlciB8fCAnYmxvY2tzJyxcclxuXHRcdCk7XHJcblx0fSxcclxuXHRnZXRCdWlsZGVySW5kZXgoIHN0YXRlLCBuYW1lICkge1xyXG5cdFx0cmV0dXJuIHN0YXRlLmJ1aWxkZXJzLmZpbmRJbmRleCggcGF0dGVybiA9PiBwYXR0ZXJuLm5hbWUgPT09IG5hbWUgKTtcclxuXHR9LFxyXG5cdGdldEJ1aWxkZXJzKCBzdGF0ZSApIHtcclxuXHRcdHJldHVybiBzdGF0ZS5idWlsZGVycztcclxuXHR9LFxyXG5cdGdldEJ1aWxkZXIoIHN0YXRlLCBzbHVnICkge1xyXG5cdFx0Y29uc3QgaW5kZXggPSBzZWxlY3RvcnMuZ2V0QnVpbGRlckluZGV4KCBzdGF0ZSwgc2x1ZyApO1xyXG5cclxuXHRcdHJldHVybiBzdGF0ZS5idWlsZGVyc1sgaW5kZXggXTtcclxuXHR9LFxyXG5cdGdldFNldHRpbmcoIHN0YXRlLCBuYW1lICkge1xyXG5cdFx0cmV0dXJuIHN0YXRlLnNldHRpbmdzWyBuYW1lIF07XHJcblx0fSxcclxuXHRnZXRTZXR0aW5ncyggc3RhdGUgKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuc2V0dGluZ3M7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHQuLi5zZWxlY3RvcnMsXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhdHRlcm5zU3RvcmUgZnJvbSAnLi9wYXR0ZXJuc1N0b3JlJztcclxuaW1wb3J0IHVzZUZvcm1TdG9yZSBmcm9tICcuL3VzZUZvcm1TdG9yZSc7XHJcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9wYXR0ZXJuc1N0b3JlL2NvbnN0YW50cyc7XHJcbmltcG9ydCBpbnNlcnRQb3N0UGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL2luc2VydC5wb3N0LmpzJztcclxuaW1wb3J0IGRlZmF1bHRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybnMvZGVmYXVsdC5qcyc7XHJcbmltcG9ydCBmZWVkQmFja1BhdHRlcm4gZnJvbSAnLi9wYXR0ZXJucy9mZWVkYmFjay5qcyc7XHJcbmltcG9ydCByZWdpc3RlclVzZXJQYXR0ZXJuIGZyb20gJy4vcGF0dGVybnMvcmVnaXN0ZXIudXNlci5qcyc7XHJcbmltcG9ydCByZXNldFBhc3N3b3JkUGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL3Jlc2V0LnBhc3N3b3JkLmpzJztcclxuaW1wb3J0IHVzZXJMb2dpblBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJucy91c2VyLmxvZ2luLmpzJztcclxuaW1wb3J0IGRvbmF0aW9uUGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL2RvbmF0aW9uLmpzJztcclxuaW1wb3J0IGNvbnRhY3RQYXR0ZXJuIGZyb20gJy4vcGF0dGVybnMvY29udGFjdC5qcyc7XHJcbmltcG9ydCBuZXdzbGV0dGVyUGF0dGVybiBmcm9tICcuL3BhdHRlcm5zL25ld3NsZXR0ZXIuanMnO1xyXG5pbXBvcnQgdXNlUGF0dGVybiBmcm9tICcuL2hvb2tzL3VzZVBhdHRlcm4nO1xyXG5pbXBvcnQgUGF0dGVybkluc2VydGVyQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9QYXR0ZXJuSW5zZXJ0ZXJCdXR0b24nO1xyXG5pbXBvcnQgeyByZWdpc3RlciwgZGlzcGF0Y2ggfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xyXG5pbXBvcnQgQnVpbGRlckhlbHBTbG90RmlsbCBmcm9tICcuL2NvbXBvbmVudHMvQnVpbGRlckhlbHBTbG90RmlsbCc7XHJcblxyXG5yZWdpc3RlciggcGF0dGVybnNTdG9yZSApO1xyXG5yZWdpc3RlciggdXNlRm9ybVN0b3JlICk7XHJcblxyXG5kaXNwYXRjaCggY29uc3RhbnRzLnN0b3JlICkucmVnaXN0ZXIoIFtcclxuXHRkZWZhdWx0UGF0dGVybixcclxuXHRjb250YWN0UGF0dGVybixcclxuXHRmZWVkQmFja1BhdHRlcm4sXHJcblx0bmV3c2xldHRlclBhdHRlcm4sXHJcblx0aW5zZXJ0UG9zdFBhdHRlcm4sXHJcblx0cmVnaXN0ZXJVc2VyUGF0dGVybixcclxuXHRkb25hdGlvblBhdHRlcm4sXHJcblx0cmVzZXRQYXNzd29yZFBhdHRlcm4sXHJcblx0dXNlckxvZ2luUGF0dGVybixcclxuXSApO1xyXG5cclxud2luZG93LkpldEZCQ29tcG9uZW50cyA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0RkJDb21wb25lbnRzID8/IHt9XHJcblx0KSxcclxuXHRQYXR0ZXJuSW5zZXJ0ZXJCdXR0b24sXHJcblx0QnVpbGRlckhlbHBTbG90RmlsbCxcclxufTtcclxuXHJcbndpbmRvdy5KZXRGQkhvb2tzID0ge1xyXG5cdC4uLihcclxuXHRcdHdpbmRvdy5KZXRGQkhvb2tzID8/IHt9XHJcblx0KSxcclxuXHR1c2VQYXR0ZXJuLFxyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==