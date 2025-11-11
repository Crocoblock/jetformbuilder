/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../node_modules/@linaria/core/dist/index.mjs":
/*!****************************************************************!*\
  !*** ../../../../../node_modules/@linaria/core/dist/index.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css_default),
/* harmony export */   cx: () => (/* binding */ cx_default)
/* harmony export */ });
// src/css.ts
var idx = 0;
var css = () => {
  if (false) {}
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

/***/ "./components/LegacyDefaultMetaControl.js":
/*!************************************************!*\
  !*** ./components/LegacyDefaultMetaControl.js ***!
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__);




class LegacyDefaultMetaControl extends wp.element.Component {
  constructor(props) {
    super(props);
    this.addNewOption = this.addNewOption.bind(this);
  }
  getDefaultMeta() {
    if (!this.props.defaultMeta) {
      return [];
    }
    return Array.from(this.props.defaultMeta);
  }
  addNewOption() {
    const items = this.getDefaultMeta();
    items.push({
      key: '',
      value: ''
    });
    this.props.onChange(items);
  }
  removeOption(index) {
    const items = this.getDefaultMeta();
    items.splice(index, 1);
    this.props.onChange(items);
  }
  onChangeValue({
    value,
    name,
    id
  }) {
    const items = Array.from(this.props.defaultMeta);
    items[id][name] = value;
    this.props.onChange(items);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getDefaultMeta().map((currentItem, index) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "jet-user-meta__row",
        key: 'jet-form-builder-repeater-item-' + index
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "repeater-item-column jet-margin-bottom-wrapper"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.StyledTextControl, {
        key: "meta_key",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Key', 'jet-form-builder'),
        value: currentItem.key,
        onChange: newValue => {
          this.onChangeValue({
            value: newValue,
            name: 'key',
            id: index
          });
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.StyledTextControl, {
        key: "meta_value",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Meta Value', 'jet-form-builder'),
        value: currentItem.value,
        onChange: newValue => {
          this.onChangeValue({
            value: newValue,
            name: 'value',
            id: index
          });
        }
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "repeater-item-column"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        icon: "dismiss",
        label: "Remove",
        onClick: () => this.removeOption(index)
      })));
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "button-add-option",
      isSecondary: true,
      onClick: this.addNewOption
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add New Option', 'jet-form-builder'))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LegacyDefaultMetaControl);

/***/ }),

/***/ "./components/PostPropertySelect.jsx":
/*!*******************************************!*\
  !*** ./components/PostPropertySelect.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__);





const {
  ActionFieldsMapContext,
  CurrentPropertyMapContext
} = JetFBComponents;
const FLAGS_SOURCE = 'single_checkbox_as_array';
function PostPropertySelect() {
  var _getMapField;
  const {
    FieldSelect,
    property
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(CurrentPropertyMapContext);
  const {
    source,
    setMapField,
    getMapField
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__.CurrentActionEditContext);
  const {
    name,
    index
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(ActionFieldsMapContext);
  const mapValue = (_getMapField = getMapField({
    name
  })) !== null && _getMapField !== void 0 ? _getMapField : '';
  const flagValue = !!getMapField({
    source: FLAGS_SOURCE,
    name
  });
  const setMapValue = value => setMapField({
    nameField: name,
    value
  });
  const setFlagValue = value => setMapField({
    source: FLAGS_SOURCE,
    nameField: name,
    value: !!value
  });
  switch (property) {
    case 'meta_input':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-base-control jet-margin-bottom-wrapper"
      }, FieldSelect, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.StyledTextControl, {
        key: name + index + '_text',
        value: mapValue,
        onChange: setMapValue
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        className: "jet-margin-top-xs",
        label: "Toggle (\u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044F)",
        checked: flagValue,
        onChange: setFlagValue
      }));
    case 'post_terms':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-base-control jet-margin-bottom-wrapper"
      }, FieldSelect, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.StyledSelectControl, {
        key: name + index + '_select',
        value: mapValue,
        onChange: setMapValue,
        options: source.taxonomies
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        className: "jet-margin-top-xs",
        label: "Toggle (\u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044F)",
        checked: flagValue,
        onChange: setFlagValue
      }));
    default:
      return FieldSelect;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPropertySelect);

/***/ }),

/***/ "./insert.post/DynamicInsertedPostID.js":
/*!**********************************************!*\
  !*** ./insert.post/DynamicInsertedPostID.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__);


const getPostType = action => {
  const {
    insert_post: insertPost = {}
  } = action?.settings;
  return insertPost.post_type;
};
function DynamicInsertedPostID() {
  jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__.BaseComputedField.call(this);
  this.getSupportedActions = function () {
    return ['insert_post'];
  };
  this.isSupported = function (action) {
    return jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__.BaseComputedField.prototype.isSupported.call(this, action) && getPostType(action);
  };
  this.getName = function () {
    const lastPart = this.hasInList ? `_${this.action.id}` : '';
    return `inserted_${getPostType(this.action)}` + lastPart;
  };
  this.getHelp = function () {
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)(
    // translators: %s - action ID
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A computed field from the <b>Insert/Update Post (%s)</b> action.', 'jet-form-builder'), this.action.id);
  };
}
DynamicInsertedPostID.prototype = Object.create(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__.BaseComputedField.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicInsertedPostID);

/***/ }),

/***/ "./insert.post/StaticInsertedPostID.js":
/*!*********************************************!*\
  !*** ./insert.post/StaticInsertedPostID.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  BaseComputedField
} = JetFBComponents;
const {
  __
} = wp.i18n;
function StaticInsertedPostID() {
  BaseComputedField.call(this);
  this.getSupportedActions = function () {
    return ['insert_post'];
  };
  this.getName = function () {
    return 'inserted_post_id';
  };
  this.getHelp = function () {
    return __('A computed field from the <b>Insert/Update Post</b> action.', 'jet-form-builder');
  };
}
StaticInsertedPostID.prototype = Object.create(BaseComputedField.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaticInsertedPostID);

/***/ }),

/***/ "./insert.post/index.js":
/*!******************************!*\
  !*** ./insert.post/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./insert.post/render.js");
/* harmony import */ var _StaticInsertedPostID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StaticInsertedPostID */ "./insert.post/StaticInsertedPostID.js");
/* harmony import */ var _DynamicInsertedPostID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DynamicInsertedPostID */ "./insert.post/DynamicInsertedPostID.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





const {
  addComputedField
} = JetFBActions;
addComputedField(_StaticInsertedPostID__WEBPACK_IMPORTED_MODULE_2__["default"]);
addComputedField(_DynamicInsertedPostID__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  type: 'insert_post',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Insert/Update Post', 'jet-form-builder'),
  edit: _render__WEBPACK_IMPORTED_MODULE_1__["default"],
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "0",
    fill: "none",
    width: "20",
    height: "20"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 7V4h-2V2h-3v1H3v15h11V9h1V7h2zm-1-2v1h-2v2h-1V6h-2V5h2V3h1v2h2z"
  }))),
  docHref: 'https://jetformbuilder.com/features/insert-update-post/',
  category: 'content',
  validators: [({
    settings
  }) => {
    return settings?.post_type ? false : {
      type: 'empty',
      property: 'post_type'
    };
  }]
});

/***/ }),

/***/ "./insert.post/render.js":
/*!*******************************!*\
  !*** ./insert.post/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostPropertySelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostPropertySelect */ "./components/PostPropertySelect.jsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @linaria/core */ "../../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_LegacyDefaultMetaControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/LegacyDefaultMetaControl */ "./components/LegacyDefaultMetaControl.js");

/* eslint-disable import/no-extraneous-dependencies */










const {
  convertListToFieldsMap
} = JetFBActions;
const {
  ActionFieldsMap,
  WrapperRequiredControl,
  DynamicPropertySelect
} = JetFBComponents;
const modifiers = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters)('jet.fb.insert.post.modifiers', [{
  id: 'all',
  isSupported: () => true
}]);
const getActionModifierId = settings => {
  for (const modifier of modifiers) {
    if (!modifier.isSupported(settings)) {
      continue;
    }
    return modifier.id;
  }
};

// eslint-disable-next-line max-lines-per-function
function InsertPostRender(props) {
  const {
    settings,
    onChangeSettingObj,
    source,
    help,
    label
  } = props;
  const formFields = convertListToFieldsMap((0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_8__.useFields)());
  const [properties, setProperties] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(() => {
    var _source$properties$id;
    const id = getActionModifierId(settings);
    return (_source$properties$id = source.properties[id]) !== null && _source$properties$id !== void 0 ? _source$properties$id : [];
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    /**
     * Clear deprecated data
     *
     * @since 3.0
     */
    if (settings.requestFields?.length) {
      onChangeSettingObj({
        requestFields: null
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var _source$properties$id2;
    const id = getActionModifierId(settings);
    setProperties((_source$properties$id2 = source.properties[id]) !== null && _source$properties$id2 !== void 0 ? _source$properties$id2 : []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.post_type]);

  /**
   * @see https://github.com/Crocoblock/issues-tracker/issues/1315
   */
  (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_8__.useSanitizeFieldsMap)();

  /* eslint-disable jsx-a11y/no-onchange */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_7__.ValidatorProvider, {
    isSupported: error => 'post_type' === error?.property
  }, ({
    hasError,
    setShowError
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RequiredLabel, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Post type', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.StyledFlexControl, {
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_10__.cx)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RowControlEndStyle, hasError && jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.ControlWithErrorStyle),
    direction: "column"
  }, hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Please fill this required field', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.StyledSelectControl, {
    id: id,
    value: settings.post_type,
    options: source.postTypes,
    help: help('post_type'),
    onChange: val => onChangeSettingObj({
      post_type: val
    }),
    onBlur: () => setShowError(true)
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.Label, {
    htmlFor: id
  }, label('post_status')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.StyledSelectControl, {
    id: id,
    value: settings.post_status,
    options: source.postStatuses,
    help: help('post_status'),
    onChange: val => onChangeSettingObj({
      post_status: val
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionFieldsMap, {
    label: label('fields_map'),
    fields: formFields
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrapperRequiredControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicPropertySelect, {
    dynamic: ['meta_input', 'post_terms'],
    properties: properties,
    parseValue: value => value.includes('jet_tax__') ? 'post_terms' : 'meta_input'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PostPropertySelect__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RowControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.Label, null, label('default_meta')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RowControlEnd, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_LegacyDefaultMetaControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    defaultMeta: settings.default_meta,
    onChange: val => onChangeSettingObj({
      default_meta: val
    })
  }))));
  /* eslint-enable jsx-a11y/no-onchange */
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsertPostRender);

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

/***/ "jet-form-builder-actions":
/*!**********************************!*\
  !*** external ["jfb","actions"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["jfb"]["actions"];

/***/ }),

/***/ "jet-form-builder-blocks-to-actions":
/*!******************************************!*\
  !*** external ["jfb","blocksToActions"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["jfb"]["blocksToActions"];

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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _insert_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert.post */ "./insert.post/index.js");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__);


(0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__.registerAction)(_insert_post__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBSUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQzFMQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvY29yZS9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9jb21wb25lbnRzL0xlZ2FjeURlZmF1bHRNZXRhQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9jb21wb25lbnRzL1Bvc3RQcm9wZXJ0eVNlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0Ly4vaW5zZXJ0LnBvc3QvRHluYW1pY0luc2VydGVkUG9zdElELmpzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2luc2VydC5wb3N0L1N0YXRpY0luc2VydGVkUG9zdElELmpzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2luc2VydC5wb3N0L2luZGV4LmpzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2luc2VydC5wb3N0L3JlbmRlci5qcyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiYWN0aW9uc1wiXSIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiYmxvY2tzVG9BY3Rpb25zXCJdIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvY3NzLnRzXG52YXIgaWR4ID0gMDtcbnZhciBjc3MgPSAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCIpIHtcbiAgICByZXR1cm4gYG1vY2tlZC1jc3MtJHtpZHgrK31gO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnVXNpbmcgdGhlIFwiY3NzXCIgdGFnIGluIHJ1bnRpbWUgaXMgbm90IHN1cHBvcnRlZC4gTWFrZSBzdXJlIHlvdSBoYXZlIHNldCB1cCB0aGUgQmFiZWwgcGx1Z2luIGNvcnJlY3RseS4nXG4gICk7XG59O1xudmFyIGNzc19kZWZhdWx0ID0gY3NzO1xuXG4vLyBzcmMvY3gudHNcbnZhciBjeCA9IGZ1bmN0aW9uIGN4MigpIHtcbiAgY29uc3QgcHJlc2VudENsYXNzTmFtZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgYXRvbWljQ2xhc3NlcyA9IHt9O1xuICBjb25zdCBub25BdG9taWNDbGFzc2VzID0gW107XG4gIHByZXNlbnRDbGFzc05hbWVzLmZvckVhY2goKGFyZykgPT4ge1xuICAgIGNvbnN0IGluZGl2aWR1YWxDbGFzc05hbWVzID0gYXJnID8gYXJnLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgIGluZGl2aWR1YWxDbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgaWYgKGNsYXNzTmFtZS5zdGFydHNXaXRoKFwiYXRtX1wiKSkge1xuICAgICAgICBjb25zdCBbLCBrZXlIYXNoXSA9IGNsYXNzTmFtZS5zcGxpdChcIl9cIik7XG4gICAgICAgIGF0b21pY0NsYXNzZXNba2V5SGFzaF0gPSBjbGFzc05hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub25BdG9taWNDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGNvbnN0IGtleUhhc2ggaW4gYXRvbWljQ2xhc3Nlcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXRvbWljQ2xhc3Nlcywga2V5SGFzaCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGF0b21pY0NsYXNzZXNba2V5SGFzaF0pO1xuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaCguLi5ub25BdG9taWNDbGFzc2VzKTtcbiAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKTtcbn07XG52YXIgY3hfZGVmYXVsdCA9IGN4O1xuZXhwb3J0IHtcbiAgY3NzX2RlZmF1bHQgYXMgY3NzLFxuICBjeF9kZWZhdWx0IGFzIGN4XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsImltcG9ydCB7IEJ1dHRvbiwgRmxleEl0ZW0gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IFN0eWxlZFRleHRDb250cm9sIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcclxuXHJcbmNsYXNzIExlZ2FjeURlZmF1bHRNZXRhQ29udHJvbCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5hZGROZXdPcHRpb24gPSB0aGlzLmFkZE5ld09wdGlvbi5iaW5kKCB0aGlzICk7XHJcblx0fVxyXG5cclxuXHRnZXREZWZhdWx0TWV0YSgpIHtcclxuXHRcdGlmICggIXRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBBcnJheS5mcm9tKCB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICk7XHJcblx0fVxyXG5cclxuXHRhZGROZXdPcHRpb24oKSB7XHJcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKTtcclxuXHJcblx0XHRpdGVtcy5wdXNoKCB7XHJcblx0XHRcdGtleTogJycsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlT3B0aW9uKCBpbmRleCApIHtcclxuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5nZXREZWZhdWx0TWV0YSgpO1xyXG5cdFx0aXRlbXMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIGl0ZW1zICk7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZVZhbHVlKCB7IHZhbHVlLCBuYW1lLCBpZCB9ICkge1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zICAgICAgICAgPSBBcnJheS5mcm9tKCB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICk7XHJcblx0XHRpdGVtc1sgaWQgXVsgbmFtZSBdID0gdmFsdWU7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcclxuXHR9XHJcblxyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdHJldHVybiA8PlxyXG5cdFx0XHR7IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKS5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxyXG5cdFx0XHRcdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXItaXRlbS0nICsgaW5kZXggfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVwZWF0ZXItaXRlbS1jb2x1bW4gamV0LW1hcmdpbi1ib3R0b20td3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8U3R5bGVkVGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9XCJtZXRhX2tleVwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldGEgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ua2V5IH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IG5ld1ZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAna2V5JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8U3R5bGVkVGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9XCJtZXRhX3ZhbHVlXCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWV0YSBWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IG5ld1ZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAndmFsdWUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVwZWF0ZXItaXRlbS1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGljb249XCJkaXNtaXNzXCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlJlbW92ZVwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHRoaXMucmVtb3ZlT3B0aW9uKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0fSApIH1cclxuXHRcdFx0PEZsZXhJdGVtPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbi1hZGQtb3B0aW9uXCJcclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5hZGROZXdPcHRpb24gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oICdBZGQgTmV3IE9wdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9GbGV4SXRlbT5cclxuXHRcdDwvPjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZ2FjeURlZmF1bHRNZXRhQ29udHJvbDsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuaW1wb3J0IHsgVG9nZ2xlQ29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XHJcbmltcG9ydCB7IFN0eWxlZFNlbGVjdENvbnRyb2wsIFN0eWxlZFRleHRDb250cm9sIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHtcclxuXHRBY3Rpb25GaWVsZHNNYXBDb250ZXh0LFxyXG5cdEN1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQsXHJcbn0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCBGTEFHU19TT1VSQ0UgPSAnc2luZ2xlX2NoZWNrYm94X2FzX2FycmF5JztcclxuXHJcbmZ1bmN0aW9uIFBvc3RQcm9wZXJ0eVNlbGVjdCgpIHtcclxuXHRjb25zdCB7IEZpZWxkU2VsZWN0LCBwcm9wZXJ0eSB9ID0gdXNlQ29udGV4dCggQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCApO1xyXG5cdGNvbnN0IHsgc291cmNlLCBzZXRNYXBGaWVsZCwgZ2V0TWFwRmllbGQgfSA9IHVzZUNvbnRleHQoIEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCApO1xyXG5cdGNvbnN0IHsgbmFtZSwgaW5kZXggfSA9IHVzZUNvbnRleHQoIEFjdGlvbkZpZWxkc01hcENvbnRleHQgKTtcclxuXHJcblx0Y29uc3QgbWFwVmFsdWUgICA9IGdldE1hcEZpZWxkKHsgbmFtZSB9KSA/PyAnJztcclxuXHRjb25zdCBmbGFnVmFsdWUgID0gISFnZXRNYXBGaWVsZCh7IHNvdXJjZTogRkxBR1NfU09VUkNFLCBuYW1lIH0pO1xyXG5cclxuXHRjb25zdCBzZXRNYXBWYWx1ZSAgPSAodmFsdWUpID0+IHNldE1hcEZpZWxkKHsgbmFtZUZpZWxkOiBuYW1lLCB2YWx1ZSB9KTtcclxuXHRjb25zdCBzZXRGbGFnVmFsdWUgPSAodmFsdWUpID0+IHNldE1hcEZpZWxkKHsgc291cmNlOiBGTEFHU19TT1VSQ0UsIG5hbWVGaWVsZDogbmFtZSwgdmFsdWU6ICEhdmFsdWUgfSk7XHJcblxyXG5cdHN3aXRjaCAoIHByb3BlcnR5ICkge1xyXG5cdFx0Y2FzZSAnbWV0YV9pbnB1dCc6XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBqZXQtbWFyZ2luLWJvdHRvbS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHR7IEZpZWxkU2VsZWN0IH1cclxuXHRcdFx0XHRcdDxTdHlsZWRUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBuYW1lICsgaW5kZXggKyAnX3RleHQnIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBtYXBWYWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0TWFwVmFsdWUgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1tYXJnaW4tdG9wLXhzXCJcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJUb2dnbGUgKNC00LvRjyDRjdGC0L7Qs9C+INC/0L7Qu9GPKVwiXHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBmbGFnVmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHNldEZsYWdWYWx1ZSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdGNhc2UgJ3Bvc3RfdGVybXMnOlxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgamV0LW1hcmdpbi1ib3R0b20td3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0eyBGaWVsZFNlbGVjdCB9XHJcblx0XHRcdFx0XHQ8U3R5bGVkU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBuYW1lICsgaW5kZXggKyAnX3NlbGVjdCcgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IG1hcFZhbHVlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRNYXBWYWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UudGF4b25vbWllcyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LW1hcmdpbi10b3AteHNcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlRvZ2dsZSAo0LTQu9GPINGN0YLQvtCz0L4g0L/QvtC70Y8pXCJcclxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGZsYWdWYWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0RmxhZ1ZhbHVlIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIEZpZWxkU2VsZWN0O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFByb3BlcnR5U2VsZWN0O1xyXG4iLCJpbXBvcnQgeyBzcHJpbnRmLCBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IEJhc2VDb21wdXRlZEZpZWxkIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuXHJcbmNvbnN0IGdldFBvc3RUeXBlID0gYWN0aW9uID0+IHtcclxuXHRjb25zdCB7IGluc2VydF9wb3N0OiBpbnNlcnRQb3N0ID0ge30gfSA9IGFjdGlvbj8uc2V0dGluZ3M7XHJcblxyXG5cdHJldHVybiBpbnNlcnRQb3N0LnBvc3RfdHlwZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNJbnNlcnRlZFBvc3RJRCgpIHtcclxuXHRCYXNlQ29tcHV0ZWRGaWVsZC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U3VwcG9ydGVkQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBbICdpbnNlcnRfcG9zdCcgXTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBhY3Rpb24gKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRCYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUuaXNTdXBwb3J0ZWQuY2FsbCggdGhpcywgYWN0aW9uICkgJiZcclxuXHRcdFx0Z2V0UG9zdFR5cGUoIGFjdGlvbiApXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGxhc3RQYXJ0ID0gdGhpcy5oYXNJbkxpc3QgPyBgXyR7IHRoaXMuYWN0aW9uLmlkIH1gIDogJyc7XHJcblxyXG5cdFx0cmV0dXJuIGBpbnNlcnRlZF8keyBnZXRQb3N0VHlwZSggdGhpcy5hY3Rpb24gKSB9YCArIGxhc3RQYXJ0O1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0SGVscCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBzcHJpbnRmKFxyXG5cdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBhY3Rpb24gSURcclxuXHRcdFx0X18oXHJcblx0XHRcdFx0J0EgY29tcHV0ZWQgZmllbGQgZnJvbSB0aGUgPGI+SW5zZXJ0L1VwZGF0ZSBQb3N0ICglcyk8L2I+IGFjdGlvbi4nLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KSxcclxuXHRcdFx0dGhpcy5hY3Rpb24uaWQsXHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcbkR5bmFtaWNJbnNlcnRlZFBvc3RJRC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNJbnNlcnRlZFBvc3RJRDsiLCJjb25zdCB7XHJcblx0ICAgICAgQmFzZUNvbXB1dGVkRmllbGQsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuZnVuY3Rpb24gU3RhdGljSW5zZXJ0ZWRQb3N0SUQoKSB7XHJcblx0QmFzZUNvbXB1dGVkRmllbGQuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFN1cHBvcnRlZEFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gWyAnaW5zZXJ0X3Bvc3QnIF07XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdpbnNlcnRlZF9wb3N0X2lkJztcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldEhlbHAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gX18oXHJcblx0XHRcdCdBIGNvbXB1dGVkIGZpZWxkIGZyb20gdGhlIDxiPkluc2VydC9VcGRhdGUgUG9zdDwvYj4gYWN0aW9uLicsXHJcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdCk7XHJcblx0fTtcclxufVxyXG5cclxuU3RhdGljSW5zZXJ0ZWRQb3N0SUQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUNvbXB1dGVkRmllbGQucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNJbnNlcnRlZFBvc3RJRDsiLCJpbXBvcnQgSW5zZXJ0UG9zdFJlbmRlciBmcm9tICcuL3JlbmRlcic7XHJcbmltcG9ydCBTdGF0aWNJbnNlcnRlZFBvc3RJRCBmcm9tICcuL1N0YXRpY0luc2VydGVkUG9zdElEJztcclxuaW1wb3J0IER5bmFtaWNJbnNlcnRlZFBvc3RJRCBmcm9tICcuL0R5bmFtaWNJbnNlcnRlZFBvc3RJRCc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhZGRDb21wdXRlZEZpZWxkLFxyXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuYWRkQ29tcHV0ZWRGaWVsZCggU3RhdGljSW5zZXJ0ZWRQb3N0SUQgKTtcclxuYWRkQ29tcHV0ZWRGaWVsZCggRHluYW1pY0luc2VydGVkUG9zdElEICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dHlwZTogJ2luc2VydF9wb3N0JyxcclxuXHRsYWJlbDogX18oICdJbnNlcnQvVXBkYXRlIFBvc3QnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRlZGl0OiBJbnNlcnRQb3N0UmVuZGVyLFxyXG5cdGljb246IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuXHRcdDxyZWN0IHg9XCIwXCIgZmlsbD1cIm5vbmVcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIi8+XHJcblx0XHQ8Zz5cclxuXHRcdFx0PHBhdGhcclxuXHRcdFx0XHRkPVwiTTE3IDdWNGgtMlYyaC0zdjFIM3YxNWgxMVY5aDFWN2gyem0tMS0ydjFoLTJ2MmgtMVY2aC0yVjVoMlYzaDF2MmgyelwiLz5cclxuXHRcdDwvZz5cclxuXHQ8L3N2Zz4sXHJcblx0ZG9jSHJlZjogJ2h0dHBzOi8vamV0Zm9ybWJ1aWxkZXIuY29tL2ZlYXR1cmVzL2luc2VydC11cGRhdGUtcG9zdC8nLFxyXG5cdGNhdGVnb3J5OiAnY29udGVudCcsXHJcblx0dmFsaWRhdG9yczogW1xyXG5cdFx0KCB7IHNldHRpbmdzIH0gKSA9PiB7XHJcblx0XHRcdHJldHVybiBzZXR0aW5ncz8ucG9zdF90eXBlXHJcblx0XHRcdCAgICAgICA/IGZhbHNlXHJcblx0XHRcdCAgICAgICA6IHsgdHlwZTogJ2VtcHR5JywgcHJvcGVydHk6ICdwb3N0X3R5cGUnIH07XHJcblx0XHR9LFxyXG5cdF0sXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xyXG5pbXBvcnQgUG9zdFByb3BlcnR5U2VsZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdFByb3BlcnR5U2VsZWN0JztcclxuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBhcHBseUZpbHRlcnMgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcclxuaW1wb3J0IHtcclxuXHRDb250cm9sV2l0aEVycm9yU3R5bGUsIEljb25UZXh0LFxyXG5cdFJlcXVpcmVkTGFiZWwsXHJcblx0TGFiZWwsXHJcblx0Um93Q29udHJvbCwgUm93Q29udHJvbEVuZCwgUm93Q29udHJvbEVuZFN0eWxlLFxyXG5cdFdpZGVMaW5lLFxyXG5cdFN0eWxlZFNlbGVjdENvbnRyb2wsXHJcblx0U3R5bGVkRmxleENvbnRyb2wsXHJcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgY3ggfSBmcm9tICdAbGluYXJpYS9jb3JlJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JQcm92aWRlciB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcblx0dXNlRmllbGRzLFxyXG5cdHVzZVNhbml0aXplRmllbGRzTWFwLFxyXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYmxvY2tzLXRvLWFjdGlvbnMnO1xyXG5pbXBvcnQgTGVnYWN5RGVmYXVsdE1ldGFDb250cm9sIGZyb20gJy4uL2NvbXBvbmVudHMvTGVnYWN5RGVmYXVsdE1ldGFDb250cm9sJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBjb252ZXJ0TGlzdFRvRmllbGRzTWFwLFxyXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xyXG5jb25zdCB7XHJcblx0ICAgICAgQWN0aW9uRmllbGRzTWFwLFxyXG5cdCAgICAgIFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXHJcblx0ICAgICAgRHluYW1pY1Byb3BlcnR5U2VsZWN0LFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgbW9kaWZpZXJzID0gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIuaW5zZXJ0LnBvc3QubW9kaWZpZXJzJyxcclxuXHRbXHJcblx0XHR7XHJcblx0XHRcdGlkOiAnYWxsJyxcclxuXHRcdFx0aXNTdXBwb3J0ZWQ6ICgpID0+IHRydWUsXHJcblx0XHR9LFxyXG5cdF0sXHJcbik7XHJcblxyXG5jb25zdCBnZXRBY3Rpb25Nb2RpZmllcklkID0gc2V0dGluZ3MgPT4ge1xyXG5cdGZvciAoIGNvbnN0IG1vZGlmaWVyIG9mIG1vZGlmaWVycyApIHtcclxuXHRcdGlmICggIW1vZGlmaWVyLmlzU3VwcG9ydGVkKCBzZXR0aW5ncyApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbW9kaWZpZXIuaWQ7XHJcblx0fVxyXG59O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cclxuZnVuY3Rpb24gSW5zZXJ0UG9zdFJlbmRlciggcHJvcHMgKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgc2V0dGluZ3MsXHJcblx0XHQgICAgICBvbkNoYW5nZVNldHRpbmdPYmosXHJcblx0XHQgICAgICBzb3VyY2UsXHJcblx0XHQgICAgICBoZWxwLFxyXG5cdFx0ICAgICAgbGFiZWwsXHJcblx0ICAgICAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBmb3JtRmllbGRzID0gY29udmVydExpc3RUb0ZpZWxkc01hcCggdXNlRmllbGRzKCkgKTtcclxuXHJcblx0Y29uc3QgWyBwcm9wZXJ0aWVzLCBzZXRQcm9wZXJ0aWVzIF0gPSB1c2VTdGF0ZSggKCkgPT4ge1xyXG5cdFx0Y29uc3QgaWQgPSBnZXRBY3Rpb25Nb2RpZmllcklkKCBzZXR0aW5ncyApO1xyXG5cclxuXHRcdHJldHVybiBzb3VyY2UucHJvcGVydGllc1sgaWQgXSA/PyBbXTtcclxuXHR9ICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBDbGVhciBkZXByZWNhdGVkIGRhdGFcclxuXHRcdCAqXHJcblx0XHQgKiBAc2luY2UgMy4wXHJcblx0XHQgKi9cclxuXHRcdGlmICggc2V0dGluZ3MucmVxdWVzdEZpZWxkcz8ubGVuZ3RoICkge1xyXG5cdFx0XHRvbkNoYW5nZVNldHRpbmdPYmooIHsgcmVxdWVzdEZpZWxkczogbnVsbCB9ICk7XHJcblx0XHR9XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW10gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRjb25zdCBpZCA9IGdldEFjdGlvbk1vZGlmaWVySWQoIHNldHRpbmdzICk7XHJcblxyXG5cdFx0c2V0UHJvcGVydGllcyggc291cmNlLnByb3BlcnRpZXNbIGlkIF0gPz8gW10gKTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbIHNldHRpbmdzLnBvc3RfdHlwZSBdICk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEzMTVcclxuXHQgKi9cclxuXHR1c2VTYW5pdGl6ZUZpZWxkc01hcCgpO1xyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcblx0XHRcdDxSb3dDb250cm9sPlxyXG5cdFx0XHRcdHsgKCB7IGlkIH0gKSA9PiA8VmFsaWRhdG9yUHJvdmlkZXJcclxuXHRcdFx0XHRcdGlzU3VwcG9ydGVkPXsgZXJyb3IgPT4gJ3Bvc3RfdHlwZScgPT09IGVycm9yPy5wcm9wZXJ0eSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyAoIHsgaGFzRXJyb3IsIHNldFNob3dFcnJvciB9ICkgPT4gPD5cclxuXHRcdFx0XHRcdFx0PFJlcXVpcmVkTGFiZWwgaHRtbEZvcj17IGlkIH0+XHJcblx0XHRcdFx0XHRcdFx0eyBfXyggJ1Bvc3QgdHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0PC9SZXF1aXJlZExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8U3R5bGVkRmxleENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyBjeChcclxuXHRcdFx0XHRcdFx0XHRcdFJvd0NvbnRyb2xFbmRTdHlsZSxcclxuXHRcdFx0XHRcdFx0XHRcdGhhc0Vycm9yICYmIENvbnRyb2xXaXRoRXJyb3JTdHlsZSxcclxuXHRcdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0eyBoYXNFcnJvciAmJiA8SWNvblRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7IF9fKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnUGxlYXNlIGZpbGwgdGhpcyByZXF1aXJlZCBmaWVsZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0XHRcdDwvSWNvblRleHQ+IH1cclxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9eyBpZCB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnBvc3RfdHlwZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnBvc3RUeXBlcyB9XHJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgaGVscCggJ3Bvc3RfdHlwZScgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbCA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgcG9zdF90eXBlOiB2YWwgfSxcclxuXHRcdFx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXsgKCkgPT4gc2V0U2hvd0Vycm9yKCB0cnVlICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvU3R5bGVkRmxleENvbnRyb2w+XHJcblx0XHRcdFx0XHQ8Lz4gfVxyXG5cdFx0XHRcdDwvVmFsaWRhdG9yUHJvdmlkZXI+IH1cclxuXHRcdFx0PC9Sb3dDb250cm9sPlxyXG5cdFx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0XHQ8Um93Q29udHJvbD5cclxuXHRcdFx0XHR7ICggeyBpZCB9ICkgPT4gPD5cclxuXHRcdFx0XHRcdDxMYWJlbCBodG1sRm9yPXsgaWQgfT5cclxuXHRcdFx0XHRcdFx0eyBsYWJlbCggJ3Bvc3Rfc3RhdHVzJyApIH1cclxuXHRcdFx0XHRcdDwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8U3R5bGVkU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRpZD17IGlkIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5wb3N0X3N0YXR1cyB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucG9zdFN0YXR1c2VzIH1cclxuXHRcdFx0XHRcdFx0aGVscD17IGhlbHAoICdwb3N0X3N0YXR1cycgKSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcclxuXHRcdFx0XHRcdFx0XHR7IHBvc3Rfc3RhdHVzOiB2YWwgfSxcclxuXHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvPiB9XHJcblx0XHRcdDwvUm93Q29udHJvbD5cclxuXHRcdFx0PFdpZGVMaW5lLz5cclxuXHRcdFx0PEFjdGlvbkZpZWxkc01hcFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cclxuXHRcdFx0XHRmaWVsZHM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxXcmFwcGVyUmVxdWlyZWRDb250cm9sPlxyXG5cdFx0XHRcdFx0PER5bmFtaWNQcm9wZXJ0eVNlbGVjdFxyXG5cdFx0XHRcdFx0XHRkeW5hbWljPXsgWyAnbWV0YV9pbnB1dCcsICdwb3N0X3Rlcm1zJyBdIH1cclxuXHRcdFx0XHRcdFx0cHJvcGVydGllcz17IHByb3BlcnRpZXMgfVxyXG5cdFx0XHRcdFx0XHRwYXJzZVZhbHVlPXsgdmFsdWUgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlLmluY2x1ZGVzKCAnamV0X3RheF9fJyApXHJcblx0XHRcdFx0XHRcdFx0PyAncG9zdF90ZXJtcydcclxuXHRcdFx0XHRcdFx0XHQ6ICdtZXRhX2lucHV0J1xyXG5cdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFBvc3RQcm9wZXJ0eVNlbGVjdC8+XHJcblx0XHRcdFx0XHQ8L0R5bmFtaWNQcm9wZXJ0eVNlbGVjdD5cclxuXHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+XHJcblx0XHRcdDwvQWN0aW9uRmllbGRzTWFwPlxyXG5cdFx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0XHQ8Um93Q29udHJvbD5cclxuXHRcdFx0XHQ8TGFiZWw+eyBsYWJlbCggJ2RlZmF1bHRfbWV0YScgKSB9PC9MYWJlbD5cclxuXHRcdFx0XHQ8Um93Q29udHJvbEVuZD5cclxuXHRcdFx0XHRcdDxMZWdhY3lEZWZhdWx0TWV0YUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdE1ldGE9eyBzZXR0aW5ncy5kZWZhdWx0X21ldGEgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbCA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0XHRcdFx0eyBkZWZhdWx0X21ldGE6IHZhbCB9LFxyXG5cdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Sb3dDb250cm9sRW5kPlxyXG5cdFx0XHQ8L1Jvd0NvbnRyb2w+XHJcblx0XHQ8L0ZsZXg+XHJcblx0KTtcclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc2VydFBvc3RSZW5kZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImFjdGlvbnNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJibG9ja3NUb0FjdGlvbnNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhY3Rpb24gZnJvbSAnLi9pbnNlcnQucG9zdCc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyQWN0aW9uIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuXHJcbnJlZ2lzdGVyQWN0aW9uKCBhY3Rpb24gKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9