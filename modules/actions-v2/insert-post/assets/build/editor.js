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
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__);




const {
  ActionFieldsMapContext,
  CurrentPropertyMapContext
} = JetFBComponents;
function PostPropertySelect() {
  // context with action props
  const {
    FieldSelect,
    property
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(CurrentPropertyMapContext);
  const {
    source,
    setMapField,
    getMapField
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__.CurrentActionEditContext);
  // context with current field in fields map
  const {
    name,
    index
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(ActionFieldsMapContext);
  switch (property) {
    case 'meta_input':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-base-control jet-margin-bottom-wrapper"
      }, FieldSelect, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.StyledTextControl, {
        key: name + index + '_text',
        value: getMapField({
          name
        }),
        onChange: value => setMapField({
          nameField: name,
          value
        })
      }));
    case 'post_terms':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-base-control jet-margin-bottom-wrapper"
      }, FieldSelect, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.StyledSelectControl, {
        key: name + index + '_select',
        value: getMapField({
          name
        }),
        onChange: value => setMapField({
          nameField: name,
          value
        }),
        options: source.taxonomies
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBSUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQzFMQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvY29yZS9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9jb21wb25lbnRzL0xlZ2FjeURlZmF1bHRNZXRhQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9jb21wb25lbnRzL1Bvc3RQcm9wZXJ0eVNlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0Ly4vaW5zZXJ0LnBvc3QvRHluYW1pY0luc2VydGVkUG9zdElELmpzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2luc2VydC5wb3N0L1N0YXRpY0luc2VydGVkUG9zdElELmpzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2luc2VydC5wb3N0L2luZGV4LmpzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2luc2VydC5wb3N0L3JlbmRlci5qcyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiYWN0aW9uc1wiXSIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiYmxvY2tzVG9BY3Rpb25zXCJdIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvY3NzLnRzXG52YXIgaWR4ID0gMDtcbnZhciBjc3MgPSAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCIpIHtcbiAgICByZXR1cm4gYG1vY2tlZC1jc3MtJHtpZHgrK31gO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnVXNpbmcgdGhlIFwiY3NzXCIgdGFnIGluIHJ1bnRpbWUgaXMgbm90IHN1cHBvcnRlZC4gTWFrZSBzdXJlIHlvdSBoYXZlIHNldCB1cCB0aGUgQmFiZWwgcGx1Z2luIGNvcnJlY3RseS4nXG4gICk7XG59O1xudmFyIGNzc19kZWZhdWx0ID0gY3NzO1xuXG4vLyBzcmMvY3gudHNcbnZhciBjeCA9IGZ1bmN0aW9uIGN4MigpIHtcbiAgY29uc3QgcHJlc2VudENsYXNzTmFtZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgYXRvbWljQ2xhc3NlcyA9IHt9O1xuICBjb25zdCBub25BdG9taWNDbGFzc2VzID0gW107XG4gIHByZXNlbnRDbGFzc05hbWVzLmZvckVhY2goKGFyZykgPT4ge1xuICAgIGNvbnN0IGluZGl2aWR1YWxDbGFzc05hbWVzID0gYXJnID8gYXJnLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgIGluZGl2aWR1YWxDbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgaWYgKGNsYXNzTmFtZS5zdGFydHNXaXRoKFwiYXRtX1wiKSkge1xuICAgICAgICBjb25zdCBbLCBrZXlIYXNoXSA9IGNsYXNzTmFtZS5zcGxpdChcIl9cIik7XG4gICAgICAgIGF0b21pY0NsYXNzZXNba2V5SGFzaF0gPSBjbGFzc05hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub25BdG9taWNDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGNvbnN0IGtleUhhc2ggaW4gYXRvbWljQ2xhc3Nlcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXRvbWljQ2xhc3Nlcywga2V5SGFzaCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGF0b21pY0NsYXNzZXNba2V5SGFzaF0pO1xuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaCguLi5ub25BdG9taWNDbGFzc2VzKTtcbiAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKTtcbn07XG52YXIgY3hfZGVmYXVsdCA9IGN4O1xuZXhwb3J0IHtcbiAgY3NzX2RlZmF1bHQgYXMgY3NzLFxuICBjeF9kZWZhdWx0IGFzIGN4XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsImltcG9ydCB7IEJ1dHRvbiwgRmxleEl0ZW0gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IFN0eWxlZFRleHRDb250cm9sIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcclxuXHJcbmNsYXNzIExlZ2FjeURlZmF1bHRNZXRhQ29udHJvbCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5hZGROZXdPcHRpb24gPSB0aGlzLmFkZE5ld09wdGlvbi5iaW5kKCB0aGlzICk7XHJcblx0fVxyXG5cclxuXHRnZXREZWZhdWx0TWV0YSgpIHtcclxuXHRcdGlmICggIXRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBBcnJheS5mcm9tKCB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICk7XHJcblx0fVxyXG5cclxuXHRhZGROZXdPcHRpb24oKSB7XHJcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKTtcclxuXHJcblx0XHRpdGVtcy5wdXNoKCB7XHJcblx0XHRcdGtleTogJycsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlT3B0aW9uKCBpbmRleCApIHtcclxuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5nZXREZWZhdWx0TWV0YSgpO1xyXG5cdFx0aXRlbXMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIGl0ZW1zICk7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZVZhbHVlKCB7IHZhbHVlLCBuYW1lLCBpZCB9ICkge1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zICAgICAgICAgPSBBcnJheS5mcm9tKCB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICk7XHJcblx0XHRpdGVtc1sgaWQgXVsgbmFtZSBdID0gdmFsdWU7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcclxuXHR9XHJcblxyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdHJldHVybiA8PlxyXG5cdFx0XHR7IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKS5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxyXG5cdFx0XHRcdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXItaXRlbS0nICsgaW5kZXggfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVwZWF0ZXItaXRlbS1jb2x1bW4gamV0LW1hcmdpbi1ib3R0b20td3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8U3R5bGVkVGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9XCJtZXRhX2tleVwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldGEgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ua2V5IH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IG5ld1ZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAna2V5JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8U3R5bGVkVGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9XCJtZXRhX3ZhbHVlXCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWV0YSBWYWx1ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IG5ld1ZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAndmFsdWUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVwZWF0ZXItaXRlbS1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGljb249XCJkaXNtaXNzXCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlJlbW92ZVwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHRoaXMucmVtb3ZlT3B0aW9uKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0fSApIH1cclxuXHRcdFx0PEZsZXhJdGVtPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbi1hZGQtb3B0aW9uXCJcclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5hZGROZXdPcHRpb24gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oICdBZGQgTmV3IE9wdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9GbGV4SXRlbT5cclxuXHRcdDwvPjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZ2FjeURlZmF1bHRNZXRhQ29udHJvbDsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuaW1wb3J0IHsgQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0IH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuaW1wb3J0IHsgU3R5bGVkU2VsZWN0Q29udHJvbCwgU3R5bGVkVGV4dENvbnRyb2wgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEFjdGlvbkZpZWxkc01hcENvbnRleHQsXHJcblx0ICAgICAgQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmZ1bmN0aW9uIFBvc3RQcm9wZXJ0eVNlbGVjdCgpIHtcclxuXHQvLyBjb250ZXh0IHdpdGggYWN0aW9uIHByb3BzXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgRmllbGRTZWxlY3QsXHJcblx0XHQgICAgICBwcm9wZXJ0eSxcclxuXHQgICAgICB9ID0gdXNlQ29udGV4dCggQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCApO1xyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHNvdXJjZSxcclxuXHRcdCAgICAgIHNldE1hcEZpZWxkLFxyXG5cdFx0ICAgICAgZ2V0TWFwRmllbGQsXHJcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCApO1xyXG5cdC8vIGNvbnRleHQgd2l0aCBjdXJyZW50IGZpZWxkIGluIGZpZWxkcyBtYXBcclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBuYW1lLFxyXG5cdFx0ICAgICAgaW5kZXgsXHJcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIEFjdGlvbkZpZWxkc01hcENvbnRleHQgKTtcclxuXHJcblx0c3dpdGNoICggcHJvcGVydHkgKSB7XHJcblx0XHRjYXNlICdtZXRhX2lucHV0JzpcclxuXHRcdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBqZXQtbWFyZ2luLWJvdHRvbS13cmFwcGVyXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgRmllbGRTZWxlY3QgfVxyXG5cdFx0XHRcdDxTdHlsZWRUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgbmFtZSArIGluZGV4ICsgJ190ZXh0JyB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGdldE1hcEZpZWxkKCB7IG5hbWUgfSApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gc2V0TWFwRmllbGQoXHJcblx0XHRcdFx0XHRcdHsgbmFtZUZpZWxkOiBuYW1lLCB2YWx1ZSB9LFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+O1xyXG5cdFx0Y2FzZSAncG9zdF90ZXJtcyc6XHJcblx0XHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgamV0LW1hcmdpbi1ib3R0b20td3JhcHBlclwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IEZpZWxkU2VsZWN0IH1cclxuXHRcdFx0XHQ8U3R5bGVkU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgbmFtZSArIGluZGV4ICsgJ19zZWxlY3QnIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZSB9ICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBzZXRNYXBGaWVsZChcclxuXHRcdFx0XHRcdFx0eyBuYW1lRmllbGQ6IG5hbWUsIHZhbHVlIH0sXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UudGF4b25vbWllcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIEZpZWxkU2VsZWN0O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFByb3BlcnR5U2VsZWN0OyIsImltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHsgQmFzZUNvbXB1dGVkRmllbGQgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xyXG5cclxuY29uc3QgZ2V0UG9zdFR5cGUgPSBhY3Rpb24gPT4ge1xyXG5cdGNvbnN0IHsgaW5zZXJ0X3Bvc3Q6IGluc2VydFBvc3QgPSB7fSB9ID0gYWN0aW9uPy5zZXR0aW5ncztcclxuXHJcblx0cmV0dXJuIGluc2VydFBvc3QucG9zdF90eXBlO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gRHluYW1pY0luc2VydGVkUG9zdElEKCkge1xyXG5cdEJhc2VDb21wdXRlZEZpZWxkLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTdXBwb3J0ZWRBY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIFsgJ2luc2VydF9wb3N0JyBdO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGFjdGlvbiApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdEJhc2VDb21wdXRlZEZpZWxkLnByb3RvdHlwZS5pc1N1cHBvcnRlZC5jYWxsKCB0aGlzLCBhY3Rpb24gKSAmJlxyXG5cdFx0XHRnZXRQb3N0VHlwZSggYWN0aW9uIClcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgbGFzdFBhcnQgPSB0aGlzLmhhc0luTGlzdCA/IGBfJHsgdGhpcy5hY3Rpb24uaWQgfWAgOiAnJztcclxuXHJcblx0XHRyZXR1cm4gYGluc2VydGVkXyR7IGdldFBvc3RUeXBlKCB0aGlzLmFjdGlvbiApIH1gICsgbGFzdFBhcnQ7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRIZWxwID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHNwcmludGYoXHJcblx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIGFjdGlvbiBJRFxyXG5cdFx0XHRfXyhcclxuXHRcdFx0XHQnQSBjb21wdXRlZCBmaWVsZCBmcm9tIHRoZSA8Yj5JbnNlcnQvVXBkYXRlIFBvc3QgKCVzKTwvYj4gYWN0aW9uLicsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0aGlzLmFjdGlvbi5pZCxcclxuXHRcdCk7XHJcblx0fTtcclxufVxyXG5cclxuRHluYW1pY0luc2VydGVkUG9zdElELnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VDb21wdXRlZEZpZWxkLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0luc2VydGVkUG9zdElEOyIsImNvbnN0IHtcclxuXHQgICAgICBCYXNlQ29tcHV0ZWRGaWVsZCxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5mdW5jdGlvbiBTdGF0aWNJbnNlcnRlZFBvc3RJRCgpIHtcclxuXHRCYXNlQ29tcHV0ZWRGaWVsZC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U3VwcG9ydGVkQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBbICdpbnNlcnRfcG9zdCcgXTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ2luc2VydGVkX3Bvc3RfaWQnO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0SGVscCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBfXyhcclxuXHRcdFx0J0EgY29tcHV0ZWQgZmllbGQgZnJvbSB0aGUgPGI+SW5zZXJ0L1VwZGF0ZSBQb3N0PC9iPiBhY3Rpb24uJyxcclxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0KTtcclxuXHR9O1xyXG59XHJcblxyXG5TdGF0aWNJbnNlcnRlZFBvc3RJRC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRpY0luc2VydGVkUG9zdElEOyIsImltcG9ydCBJbnNlcnRQb3N0UmVuZGVyIGZyb20gJy4vcmVuZGVyJztcclxuaW1wb3J0IFN0YXRpY0luc2VydGVkUG9zdElEIGZyb20gJy4vU3RhdGljSW5zZXJ0ZWRQb3N0SUQnO1xyXG5pbXBvcnQgRHluYW1pY0luc2VydGVkUG9zdElEIGZyb20gJy4vRHluYW1pY0luc2VydGVkUG9zdElEJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFkZENvbXB1dGVkRmllbGQsXHJcbiAgICAgIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5hZGRDb21wdXRlZEZpZWxkKCBTdGF0aWNJbnNlcnRlZFBvc3RJRCApO1xyXG5hZGRDb21wdXRlZEZpZWxkKCBEeW5hbWljSW5zZXJ0ZWRQb3N0SUQgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0eXBlOiAnaW5zZXJ0X3Bvc3QnLFxyXG5cdGxhYmVsOiBfXyggJ0luc2VydC9VcGRhdGUgUG9zdCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGVkaXQ6IEluc2VydFBvc3RSZW5kZXIsXHJcblx0aWNvbjogPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG5cdFx0PHJlY3QgeD1cIjBcIiBmaWxsPVwibm9uZVwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiLz5cclxuXHRcdDxnPlxyXG5cdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdGQ9XCJNMTcgN1Y0aC0yVjJoLTN2MUgzdjE1aDExVjloMVY3aDJ6bS0xLTJ2MWgtMnYyaC0xVjZoLTJWNWgyVjNoMXYyaDJ6XCIvPlxyXG5cdFx0PC9nPlxyXG5cdDwvc3ZnPixcclxuXHRkb2NIcmVmOiAnaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vZmVhdHVyZXMvaW5zZXJ0LXVwZGF0ZS1wb3N0LycsXHJcblx0Y2F0ZWdvcnk6ICdjb250ZW50JyxcclxuXHR2YWxpZGF0b3JzOiBbXHJcblx0XHQoIHsgc2V0dGluZ3MgfSApID0+IHtcclxuXHRcdFx0cmV0dXJuIHNldHRpbmdzPy5wb3N0X3R5cGVcclxuXHRcdFx0ICAgICAgID8gZmFsc2VcclxuXHRcdFx0ICAgICAgIDogeyB0eXBlOiAnZW1wdHknLCBwcm9wZXJ0eTogJ3Bvc3RfdHlwZScgfTtcclxuXHRcdH0sXHJcblx0XSxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXHJcbmltcG9ydCBQb3N0UHJvcGVydHlTZWxlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0UHJvcGVydHlTZWxlY3QnO1xyXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCB7IGFwcGx5RmlsdGVycyB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xyXG5pbXBvcnQge1xyXG5cdENvbnRyb2xXaXRoRXJyb3JTdHlsZSwgSWNvblRleHQsXHJcblx0UmVxdWlyZWRMYWJlbCxcclxuXHRMYWJlbCxcclxuXHRSb3dDb250cm9sLCBSb3dDb250cm9sRW5kLCBSb3dDb250cm9sRW5kU3R5bGUsXHJcblx0V2lkZUxpbmUsXHJcblx0U3R5bGVkU2VsZWN0Q29udHJvbCxcclxuXHRTdHlsZWRGbGV4Q29udHJvbCxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBjeCB9IGZyb20gJ0BsaW5hcmlhL2NvcmUnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IFZhbGlkYXRvclByb3ZpZGVyIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuXHR1c2VGaWVsZHMsXHJcblx0dXNlU2FuaXRpemVGaWVsZHNNYXAsXHJcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1ibG9ja3MtdG8tYWN0aW9ucyc7XHJcbmltcG9ydCBMZWdhY3lEZWZhdWx0TWV0YUNvbnRyb2wgZnJvbSAnLi4vY29tcG9uZW50cy9MZWdhY3lEZWZhdWx0TWV0YUNvbnRyb2wnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAsXHJcbiAgICAgIH0gPSBKZXRGQkFjdGlvbnM7XHJcbmNvbnN0IHtcclxuXHQgICAgICBBY3Rpb25GaWVsZHNNYXAsXHJcblx0ICAgICAgV3JhcHBlclJlcXVpcmVkQ29udHJvbCxcclxuXHQgICAgICBEeW5hbWljUHJvcGVydHlTZWxlY3QsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCBtb2RpZmllcnMgPSBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5pbnNlcnQucG9zdC5tb2RpZmllcnMnLFxyXG5cdFtcclxuXHRcdHtcclxuXHRcdFx0aWQ6ICdhbGwnLFxyXG5cdFx0XHRpc1N1cHBvcnRlZDogKCkgPT4gdHJ1ZSxcclxuXHRcdH0sXHJcblx0XSxcclxuKTtcclxuXHJcbmNvbnN0IGdldEFjdGlvbk1vZGlmaWVySWQgPSBzZXR0aW5ncyA9PiB7XHJcblx0Zm9yICggY29uc3QgbW9kaWZpZXIgb2YgbW9kaWZpZXJzICkge1xyXG5cdFx0aWYgKCAhbW9kaWZpZXIuaXNTdXBwb3J0ZWQoIHNldHRpbmdzICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtb2RpZmllci5pZDtcclxuXHR9XHJcbn07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5mdW5jdGlvbiBJbnNlcnRQb3N0UmVuZGVyKCBwcm9wcyApIHtcclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBzZXR0aW5ncyxcclxuXHRcdCAgICAgIG9uQ2hhbmdlU2V0dGluZ09iaixcclxuXHRcdCAgICAgIHNvdXJjZSxcclxuXHRcdCAgICAgIGhlbHAsXHJcblx0XHQgICAgICBsYWJlbCxcclxuXHQgICAgICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBjb252ZXJ0TGlzdFRvRmllbGRzTWFwKCB1c2VGaWVsZHMoKSApO1xyXG5cclxuXHRjb25zdCBbIHByb3BlcnRpZXMsIHNldFByb3BlcnRpZXMgXSA9IHVzZVN0YXRlKCAoKSA9PiB7XHJcblx0XHRjb25zdCBpZCA9IGdldEFjdGlvbk1vZGlmaWVySWQoIHNldHRpbmdzICk7XHJcblxyXG5cdFx0cmV0dXJuIHNvdXJjZS5wcm9wZXJ0aWVzWyBpZCBdID8/IFtdO1xyXG5cdH0gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHQvKipcclxuXHRcdCAqIENsZWFyIGRlcHJlY2F0ZWQgZGF0YVxyXG5cdFx0ICpcclxuXHRcdCAqIEBzaW5jZSAzLjBcclxuXHRcdCAqL1xyXG5cdFx0aWYgKCBzZXR0aW5ncy5yZXF1ZXN0RmllbGRzPy5sZW5ndGggKSB7XHJcblx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaiggeyByZXF1ZXN0RmllbGRzOiBudWxsIH0gKTtcclxuXHRcdH1cclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbXSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGNvbnN0IGlkID0gZ2V0QWN0aW9uTW9kaWZpZXJJZCggc2V0dGluZ3MgKTtcclxuXHJcblx0XHRzZXRQcm9wZXJ0aWVzKCBzb3VyY2UucHJvcGVydGllc1sgaWQgXSA/PyBbXSApO1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFsgc2V0dGluZ3MucG9zdF90eXBlIF0gKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTMxNVxyXG5cdCAqL1xyXG5cdHVzZVNhbml0aXplRmllbGRzTWFwKCk7XHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuXHRcdFx0PFJvd0NvbnRyb2w+XHJcblx0XHRcdFx0eyAoIHsgaWQgfSApID0+IDxWYWxpZGF0b3JQcm92aWRlclxyXG5cdFx0XHRcdFx0aXNTdXBwb3J0ZWQ9eyBlcnJvciA9PiAncG9zdF90eXBlJyA9PT0gZXJyb3I/LnByb3BlcnR5IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7ICggeyBoYXNFcnJvciwgc2V0U2hvd0Vycm9yIH0gKSA9PiA8PlxyXG5cdFx0XHRcdFx0XHQ8UmVxdWlyZWRMYWJlbCBodG1sRm9yPXsgaWQgfT5cclxuXHRcdFx0XHRcdFx0XHR7IF9fKCAnUG9zdCB0eXBlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHQ8L1JlcXVpcmVkTGFiZWw+XHJcblx0XHRcdFx0XHRcdDxTdHlsZWRGbGV4Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17IGN4KFxyXG5cdFx0XHRcdFx0XHRcdFx0Um93Q29udHJvbEVuZFN0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGFzRXJyb3IgJiYgQ29udHJvbFdpdGhFcnJvclN0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj1cImNvbHVtblwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7IGhhc0Vycm9yICYmIDxJY29uVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdQbGVhc2UgZmlsbCB0aGlzIHJlcXVpcmVkIGZpZWxkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHRcdFx0PC9JY29uVGV4dD4gfVxyXG5cdFx0XHRcdFx0XHRcdDxTdHlsZWRTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRpZD17IGlkIH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucG9zdF90eXBlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucG9zdFR5cGVzIH1cclxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9eyBoZWxwKCAncG9zdF90eXBlJyApIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyBwb3N0X3R5cGU6IHZhbCB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9eyAoKSA9PiBzZXRTaG93RXJyb3IoIHRydWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9TdHlsZWRGbGV4Q29udHJvbD5cclxuXHRcdFx0XHRcdDwvPiB9XHJcblx0XHRcdFx0PC9WYWxpZGF0b3JQcm92aWRlcj4gfVxyXG5cdFx0XHQ8L1Jvd0NvbnRyb2w+XHJcblx0XHRcdDxXaWRlTGluZS8+XHJcblx0XHRcdDxSb3dDb250cm9sPlxyXG5cdFx0XHRcdHsgKCB7IGlkIH0gKSA9PiA8PlxyXG5cdFx0XHRcdFx0PExhYmVsIGh0bWxGb3I9eyBpZCB9PlxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsKCAncG9zdF9zdGF0dXMnICkgfVxyXG5cdFx0XHRcdFx0PC9MYWJlbD5cclxuXHRcdFx0XHRcdDxTdHlsZWRTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGlkPXsgaWQgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnBvc3Rfc3RhdHVzIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wb3N0U3RhdHVzZXMgfVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgaGVscCggJ3Bvc3Rfc3RhdHVzJyApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0XHRcdHsgcG9zdF9zdGF0dXM6IHZhbCB9LFxyXG5cdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC8+IH1cclxuXHRcdFx0PC9Sb3dDb250cm9sPlxyXG5cdFx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0XHQ8QWN0aW9uRmllbGRzTWFwXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdGZpZWxkcz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFdyYXBwZXJSZXF1aXJlZENvbnRyb2w+XHJcblx0XHRcdFx0XHQ8RHluYW1pY1Byb3BlcnR5U2VsZWN0XHJcblx0XHRcdFx0XHRcdGR5bmFtaWM9eyBbICdtZXRhX2lucHV0JywgJ3Bvc3RfdGVybXMnIF0gfVxyXG5cdFx0XHRcdFx0XHRwcm9wZXJ0aWVzPXsgcHJvcGVydGllcyB9XHJcblx0XHRcdFx0XHRcdHBhcnNlVmFsdWU9eyB2YWx1ZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0dmFsdWUuaW5jbHVkZXMoICdqZXRfdGF4X18nIClcclxuXHRcdFx0XHRcdFx0XHQ/ICdwb3N0X3Rlcm1zJ1xyXG5cdFx0XHRcdFx0XHRcdDogJ21ldGFfaW5wdXQnXHJcblx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8UG9zdFByb3BlcnR5U2VsZWN0Lz5cclxuXHRcdFx0XHRcdDwvRHluYW1pY1Byb3BlcnR5U2VsZWN0PlxyXG5cdFx0XHRcdDwvV3JhcHBlclJlcXVpcmVkQ29udHJvbD5cclxuXHRcdFx0PC9BY3Rpb25GaWVsZHNNYXA+XHJcblx0XHRcdDxXaWRlTGluZS8+XHJcblx0XHRcdDxSb3dDb250cm9sPlxyXG5cdFx0XHRcdDxMYWJlbD57IGxhYmVsKCAnZGVmYXVsdF9tZXRhJyApIH08L0xhYmVsPlxyXG5cdFx0XHRcdDxSb3dDb250cm9sRW5kPlxyXG5cdFx0XHRcdFx0PExlZ2FjeURlZmF1bHRNZXRhQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0TWV0YT17IHNldHRpbmdzLmRlZmF1bHRfbWV0YSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcclxuXHRcdFx0XHRcdFx0XHR7IGRlZmF1bHRfbWV0YTogdmFsIH0sXHJcblx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L1Jvd0NvbnRyb2xFbmQ+XHJcblx0XHRcdDwvUm93Q29udHJvbD5cclxuXHRcdDwvRmxleD5cclxuXHQpO1xyXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zZXJ0UG9zdFJlbmRlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImJsb2Nrc1RvQWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGFjdGlvbiBmcm9tICcuL2luc2VydC5wb3N0JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJBY3Rpb24gfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xyXG5cclxucmVnaXN0ZXJBY3Rpb24oIGFjdGlvbiApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=