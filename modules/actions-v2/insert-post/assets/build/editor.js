/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/LegacyDefaultMetaControl.js"
/*!************************************************!*\
  !*** ./components/LegacyDefaultMetaControl.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./components/PostPropertySelect.jsx"
/*!*******************************************!*\
  !*** ./components/PostPropertySelect.jsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  var _getMapField;
  const {
    FieldSelect,
    property
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(CurrentPropertyMapContext);
  const {
    source,
    setMapField,
    getMapField
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__.CurrentActionEditContext);
  const {
    name,
    index
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(ActionFieldsMapContext);
  const mapValue = (_getMapField = getMapField({
    name
  })) !== null && _getMapField !== void 0 ? _getMapField : '';
  const setMapValue = value => setMapField({
    nameField: name,
    value
  });
  switch (property) {
    case 'meta_input':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-base-control jet-margin-bottom-wrapper"
      }, FieldSelect, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.StyledTextControl, {
        key: name + index + '_text',
        value: mapValue,
        onChange: setMapValue
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__.SingleValueAsArrayToggle, {
        fieldName: name,
        getMapField: getMapField,
        setMapField: setMapField
      }));
    case 'post_terms':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-base-control jet-margin-bottom-wrapper"
      }, FieldSelect, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.StyledSelectControl, {
        key: name + index + '_select',
        value: mapValue,
        onChange: setMapValue,
        options: source.taxonomies
      }));
    default:
      return FieldSelect;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPropertySelect);

/***/ },

/***/ "./insert.post/DynamicInsertedPostID.js"
/*!**********************************************!*\
  !*** ./insert.post/DynamicInsertedPostID.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./insert.post/StaticInsertedPostID.js"
/*!*********************************************!*\
  !*** ./insert.post/StaticInsertedPostID.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./insert.post/index.js"
/*!******************************!*\
  !*** ./insert.post/index.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./insert.post/render.js"
/*!*******************************!*\
  !*** ./insert.post/render.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @linaria/core */ "../../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_LegacyDefaultMetaControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/LegacyDefaultMetaControl */ "./components/LegacyDefaultMetaControl.js");

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
  const formFields = convertListToFieldsMap((0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_9__.useFields)());
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
  (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_9__.useSanitizeFieldsMap)();

  /* eslint-disable jsx-a11y/no-onchange */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_8__.ValidatorProvider, {
    isSupported: error => 'post_type' === error?.property
  }, ({
    hasError,
    setShowError
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RequiredLabel, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Post type', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.StyledFlexControl, {
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_6__.cx)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RowControlEndStyle, hasError && jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.ControlWithErrorStyle),
    direction: "column"
  }, hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Please fill this required field', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.StyledSelectControl, {
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
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PostPropertySelect__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RowControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.Label, null, label('default_meta')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_5__.RowControlEnd, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_LegacyDefaultMetaControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    defaultMeta: settings.default_meta,
    onChange: val => onChangeSettingObj({
      default_meta: val
    })
  }))));
  /* eslint-enable jsx-a11y/no-onchange */
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsertPostRender);

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "jet-form-builder-actions"
/*!**********************************!*\
  !*** external ["jfb","actions"] ***!
  \**********************************/
(module) {

module.exports = window["jfb"]["actions"];

/***/ },

/***/ "jet-form-builder-blocks-to-actions"
/*!******************************************!*\
  !*** external ["jfb","blocksToActions"] ***!
  \******************************************/
(module) {

module.exports = window["jfb"]["blocksToActions"];

/***/ },

/***/ "jet-form-builder-components"
/*!*************************************!*\
  !*** external ["jfb","components"] ***!
  \*************************************/
(module) {

module.exports = window["jfb"]["components"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

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

/***/ "../../../../../node_modules/@linaria/core/dist/index.mjs"
/*!****************************************************************!*\
  !*** ../../../../../node_modules/@linaria/core/dist/index.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css_default),
/* harmony export */   cx: () => (/* binding */ cx_default)
/* harmony export */ });
// src/css.ts
var idx = 0;
var css = () => {
  if (false) // removed by dead control flow
{}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFJQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FDMUxBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0Ly4vY29tcG9uZW50cy9MZWdhY3lEZWZhdWx0TWV0YUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0Ly4vY29tcG9uZW50cy9Qb3N0UHJvcGVydHlTZWxlY3QuanN4Iiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2luc2VydC5wb3N0L0R5bmFtaWNJbnNlcnRlZFBvc3RJRC5qcyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9pbnNlcnQucG9zdC9TdGF0aWNJbnNlcnRlZFBvc3RJRC5qcyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9pbnNlcnQucG9zdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9pbnNlcnQucG9zdC9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImFjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImJsb2Nrc1RvQWN0aW9uc1wiXSIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BsaW5hcmlhL2NvcmUvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRmxleEl0ZW0gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgU3R5bGVkVGV4dENvbnRyb2wgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuXG5jbGFzcyBMZWdhY3lEZWZhdWx0TWV0YUNvbnRyb2wgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy5hZGROZXdPcHRpb24gPSB0aGlzLmFkZE5ld09wdGlvbi5iaW5kKCB0aGlzICk7XG5cdH1cblxuXHRnZXREZWZhdWx0TWV0YSgpIHtcblx0XHRpZiAoICF0aGlzLnByb3BzLmRlZmF1bHRNZXRhICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gQXJyYXkuZnJvbSggdGhpcy5wcm9wcy5kZWZhdWx0TWV0YSApO1xuXHR9XG5cblx0YWRkTmV3T3B0aW9uKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5nZXREZWZhdWx0TWV0YSgpO1xuXG5cdFx0aXRlbXMucHVzaCgge1xuXHRcdFx0a2V5OiAnJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9ICk7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xuXHR9XG5cblx0cmVtb3ZlT3B0aW9uKCBpbmRleCApIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKTtcblx0XHRpdGVtcy5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xuXHR9XG5cblx0b25DaGFuZ2VWYWx1ZSggeyB2YWx1ZSwgbmFtZSwgaWQgfSApIHtcblxuXHRcdGNvbnN0IGl0ZW1zICAgICAgICAgPSBBcnJheS5mcm9tKCB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICk7XG5cdFx0aXRlbXNbIGlkIF1bIG5hbWUgXSA9IHZhbHVlO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiA8PlxuXHRcdFx0eyB0aGlzLmdldERlZmF1bHRNZXRhKCkubWFwKCAoIGN1cnJlbnRJdGVtLCBpbmRleCApID0+IHtcblx0XHRcdFx0cmV0dXJuIDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxuXHRcdFx0XHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyLWl0ZW0tJyArIGluZGV4IH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJlcGVhdGVyLWl0ZW0tY29sdW1uIGpldC1tYXJnaW4tYm90dG9tLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdDxTdHlsZWRUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRrZXk9XCJtZXRhX2tleVwiXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZXRhIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5rZXkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAna2V5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGlkOiBpbmRleCxcblx0XHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxTdHlsZWRUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRrZXk9XCJtZXRhX3ZhbHVlXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldGEgVmFsdWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAndmFsdWUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVwZWF0ZXItaXRlbS1jb2x1bW5cIj5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aWNvbj1cImRpc21pc3NcIlxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlJlbW92ZVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB0aGlzLnJlbW92ZU9wdGlvbiggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj47XG5cdFx0XHR9ICkgfVxuXHRcdFx0PEZsZXhJdGVtPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uLWFkZC1vcHRpb25cIlxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0b25DbGljaz17IHRoaXMuYWRkTmV3T3B0aW9uIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdBZGQgTmV3IE9wdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L0ZsZXhJdGVtPlxuXHRcdDwvPjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWdhY3lEZWZhdWx0TWV0YUNvbnRyb2w7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRDdXJyZW50QWN0aW9uRWRpdENvbnRleHQsXG5cdFNpbmdsZVZhbHVlQXNBcnJheVRvZ2dsZSxcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCB7IFN0eWxlZFNlbGVjdENvbnRyb2wsIFN0eWxlZFRleHRDb250cm9sIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcblxuY29uc3Qge1xuXHRBY3Rpb25GaWVsZHNNYXBDb250ZXh0LFxuXHRDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0LFxufSA9IEpldEZCQ29tcG9uZW50cztcblxuZnVuY3Rpb24gUG9zdFByb3BlcnR5U2VsZWN0KCkge1xuXHRjb25zdCB7IEZpZWxkU2VsZWN0LCBwcm9wZXJ0eSB9ID0gdXNlQ29udGV4dChDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0KTtcblx0Y29uc3QgeyBzb3VyY2UsIHNldE1hcEZpZWxkLCBnZXRNYXBGaWVsZCB9ID0gdXNlQ29udGV4dChDdXJyZW50QWN0aW9uRWRpdENvbnRleHQpO1xuXHRjb25zdCB7IG5hbWUsIGluZGV4IH0gPSB1c2VDb250ZXh0KEFjdGlvbkZpZWxkc01hcENvbnRleHQpO1xuXG5cdGNvbnN0IG1hcFZhbHVlID0gZ2V0TWFwRmllbGQoeyBuYW1lIH0pID8/ICcnO1xuXG5cdGNvbnN0IHNldE1hcFZhbHVlID0gdmFsdWUgPT4gc2V0TWFwRmllbGQoe1xuXHRcdG5hbWVGaWVsZDogbmFtZSxcblx0XHR2YWx1ZSxcblx0fSk7XG5cblx0c3dpdGNoIChwcm9wZXJ0eSkge1xuXHRcdGNhc2UgJ21ldGFfaW5wdXQnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBqZXQtbWFyZ2luLWJvdHRvbS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0e0ZpZWxkU2VsZWN0fVxuXG5cdFx0XHRcdFx0PFN0eWxlZFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9e25hbWUgKyBpbmRleCArICdfdGV4dCd9XG5cdFx0XHRcdFx0XHR2YWx1ZT17bWFwVmFsdWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17c2V0TWFwVmFsdWV9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxTaW5nbGVWYWx1ZUFzQXJyYXlUb2dnbGVcblx0XHRcdFx0XHRcdGZpZWxkTmFtZT17bmFtZX1cblx0XHRcdFx0XHRcdGdldE1hcEZpZWxkPXtnZXRNYXBGaWVsZH1cblx0XHRcdFx0XHRcdHNldE1hcEZpZWxkPXtzZXRNYXBGaWVsZH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj4gXG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAncG9zdF90ZXJtcyc6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIGpldC1tYXJnaW4tYm90dG9tLXdyYXBwZXJcIj5cblx0XHRcdFx0XHR7RmllbGRTZWxlY3R9XG5cdFx0XHRcdFx0PFN0eWxlZFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17bmFtZSArIGluZGV4ICsgJ19zZWxlY3QnfVxuXHRcdFx0XHRcdFx0dmFsdWU9e21hcFZhbHVlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldE1hcFZhbHVlfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17c291cmNlLnRheG9ub21pZXN9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBGaWVsZFNlbGVjdDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0UHJvcGVydHlTZWxlY3Q7IiwiaW1wb3J0IHsgc3ByaW50ZiwgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgQmFzZUNvbXB1dGVkRmllbGQgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuXG5jb25zdCBnZXRQb3N0VHlwZSA9IGFjdGlvbiA9PiB7XG5cdGNvbnN0IHsgaW5zZXJ0X3Bvc3Q6IGluc2VydFBvc3QgPSB7fSB9ID0gYWN0aW9uPy5zZXR0aW5ncztcblxuXHRyZXR1cm4gaW5zZXJ0UG9zdC5wb3N0X3R5cGU7XG59O1xuXG5mdW5jdGlvbiBEeW5hbWljSW5zZXJ0ZWRQb3N0SUQoKSB7XG5cdEJhc2VDb21wdXRlZEZpZWxkLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFN1cHBvcnRlZEFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIFsgJ2luc2VydF9wb3N0JyBdO1xuXHR9O1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGFjdGlvbiApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0QmFzZUNvbXB1dGVkRmllbGQucHJvdG90eXBlLmlzU3VwcG9ydGVkLmNhbGwoIHRoaXMsIGFjdGlvbiApICYmXG5cdFx0XHRnZXRQb3N0VHlwZSggYWN0aW9uIClcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBsYXN0UGFydCA9IHRoaXMuaGFzSW5MaXN0ID8gYF8keyB0aGlzLmFjdGlvbi5pZCB9YCA6ICcnO1xuXG5cdFx0cmV0dXJuIGBpbnNlcnRlZF8keyBnZXRQb3N0VHlwZSggdGhpcy5hY3Rpb24gKSB9YCArIGxhc3RQYXJ0O1xuXHR9O1xuXG5cdHRoaXMuZ2V0SGVscCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3ByaW50Zihcblx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIGFjdGlvbiBJRFxuXHRcdFx0X18oXG5cdFx0XHRcdCdBIGNvbXB1dGVkIGZpZWxkIGZyb20gdGhlIDxiPkluc2VydC9VcGRhdGUgUG9zdCAoJXMpPC9iPiBhY3Rpb24uJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0XHRcdHRoaXMuYWN0aW9uLmlkLFxuXHRcdCk7XG5cdH07XG59XG5cbkR5bmFtaWNJbnNlcnRlZFBvc3RJRC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0luc2VydGVkUG9zdElEOyIsImNvbnN0IHtcblx0ICAgICAgQmFzZUNvbXB1dGVkRmllbGQsXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIFN0YXRpY0luc2VydGVkUG9zdElEKCkge1xuXHRCYXNlQ29tcHV0ZWRGaWVsZC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTdXBwb3J0ZWRBY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBbICdpbnNlcnRfcG9zdCcgXTtcblx0fTtcblxuXHR0aGlzLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdpbnNlcnRlZF9wb3N0X2lkJztcblx0fTtcblxuXHR0aGlzLmdldEhlbHAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIF9fKFxuXHRcdFx0J0EgY29tcHV0ZWQgZmllbGQgZnJvbSB0aGUgPGI+SW5zZXJ0L1VwZGF0ZSBQb3N0PC9iPiBhY3Rpb24uJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHQpO1xuXHR9O1xufVxuXG5TdGF0aWNJbnNlcnRlZFBvc3RJRC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljSW5zZXJ0ZWRQb3N0SUQ7IiwiaW1wb3J0IEluc2VydFBvc3RSZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuaW1wb3J0IFN0YXRpY0luc2VydGVkUG9zdElEIGZyb20gJy4vU3RhdGljSW5zZXJ0ZWRQb3N0SUQnO1xuaW1wb3J0IER5bmFtaWNJbnNlcnRlZFBvc3RJRCBmcm9tICcuL0R5bmFtaWNJbnNlcnRlZFBvc3RJRCc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkQ29tcHV0ZWRGaWVsZCxcbiAgICAgIH0gPSBKZXRGQkFjdGlvbnM7XG5cbmFkZENvbXB1dGVkRmllbGQoIFN0YXRpY0luc2VydGVkUG9zdElEICk7XG5hZGRDb21wdXRlZEZpZWxkKCBEeW5hbWljSW5zZXJ0ZWRQb3N0SUQgKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0eXBlOiAnaW5zZXJ0X3Bvc3QnLFxuXHRsYWJlbDogX18oICdJbnNlcnQvVXBkYXRlIFBvc3QnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0ZWRpdDogSW5zZXJ0UG9zdFJlbmRlcixcblx0aWNvbjogPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuXHRcdDxyZWN0IHg9XCIwXCIgZmlsbD1cIm5vbmVcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIi8+XG5cdFx0PGc+XG5cdFx0XHQ8cGF0aFxuXHRcdFx0XHRkPVwiTTE3IDdWNGgtMlYyaC0zdjFIM3YxNWgxMVY5aDFWN2gyem0tMS0ydjFoLTJ2MmgtMVY2aC0yVjVoMlYzaDF2MmgyelwiLz5cblx0XHQ8L2c+XG5cdDwvc3ZnPixcblx0ZG9jSHJlZjogJ2h0dHBzOi8vamV0Zm9ybWJ1aWxkZXIuY29tL2ZlYXR1cmVzL2luc2VydC11cGRhdGUtcG9zdC8nLFxuXHRjYXRlZ29yeTogJ2NvbnRlbnQnLFxuXHR2YWxpZGF0b3JzOiBbXG5cdFx0KCB7IHNldHRpbmdzIH0gKSA9PiB7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3M/LnBvc3RfdHlwZVxuXHRcdFx0ICAgICAgID8gZmFsc2Vcblx0XHRcdCAgICAgICA6IHsgdHlwZTogJ2VtcHR5JywgcHJvcGVydHk6ICdwb3N0X3R5cGUnIH07XG5cdFx0fSxcblx0XSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBQb3N0UHJvcGVydHlTZWxlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0UHJvcGVydHlTZWxlY3QnO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IGFwcGx5RmlsdGVycyB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuaW1wb3J0IHtcblx0Q29udHJvbFdpdGhFcnJvclN0eWxlLCBJY29uVGV4dCxcblx0UmVxdWlyZWRMYWJlbCxcblx0TGFiZWwsXG5cdFJvd0NvbnRyb2wsIFJvd0NvbnRyb2xFbmQsIFJvd0NvbnRyb2xFbmRTdHlsZSxcblx0V2lkZUxpbmUsXG5cdFN0eWxlZFNlbGVjdENvbnRyb2wsXG5cdFN0eWxlZEZsZXhDb250cm9sLFxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgY3ggfSBmcm9tICdAbGluYXJpYS9jb3JlJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IFZhbGlkYXRvclByb3ZpZGVyIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCB7XG5cdHVzZUZpZWxkcyxcblx0dXNlU2FuaXRpemVGaWVsZHNNYXAsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYmxvY2tzLXRvLWFjdGlvbnMnO1xuaW1wb3J0IExlZ2FjeURlZmF1bHRNZXRhQ29udHJvbCBmcm9tICcuLi9jb21wb25lbnRzL0xlZ2FjeURlZmF1bHRNZXRhQ29udHJvbCc7XG5cbmNvbnN0IHtcblx0ICAgICAgY29udmVydExpc3RUb0ZpZWxkc01hcCxcbiAgICAgIH0gPSBKZXRGQkFjdGlvbnM7XG5jb25zdCB7XG5cdCAgICAgIEFjdGlvbkZpZWxkc01hcCxcblx0ICAgICAgV3JhcHBlclJlcXVpcmVkQ29udHJvbCxcblx0ICAgICAgRHluYW1pY1Byb3BlcnR5U2VsZWN0LFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgbW9kaWZpZXJzID0gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmluc2VydC5wb3N0Lm1vZGlmaWVycycsXG5cdFtcblx0XHR7XG5cdFx0XHRpZDogJ2FsbCcsXG5cdFx0XHRpc1N1cHBvcnRlZDogKCkgPT4gdHJ1ZSxcblx0XHR9LFxuXHRdLFxuKTtcblxuY29uc3QgZ2V0QWN0aW9uTW9kaWZpZXJJZCA9IHNldHRpbmdzID0+IHtcblx0Zm9yICggY29uc3QgbW9kaWZpZXIgb2YgbW9kaWZpZXJzICkge1xuXHRcdGlmICggIW1vZGlmaWVyLmlzU3VwcG9ydGVkKCBzZXR0aW5ncyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1vZGlmaWVyLmlkO1xuXHR9XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gSW5zZXJ0UG9zdFJlbmRlciggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHQgICAgICBzZXR0aW5ncyxcblx0XHQgICAgICBvbkNoYW5nZVNldHRpbmdPYmosXG5cdFx0ICAgICAgc291cmNlLFxuXHRcdCAgICAgIGhlbHAsXG5cdFx0ICAgICAgbGFiZWwsXG5cdCAgICAgIH0gPSBwcm9wcztcblxuXHRjb25zdCBmb3JtRmllbGRzID0gY29udmVydExpc3RUb0ZpZWxkc01hcCggdXNlRmllbGRzKCkgKTtcblxuXHRjb25zdCBbIHByb3BlcnRpZXMsIHNldFByb3BlcnRpZXMgXSA9IHVzZVN0YXRlKCAoKSA9PiB7XG5cdFx0Y29uc3QgaWQgPSBnZXRBY3Rpb25Nb2RpZmllcklkKCBzZXR0aW5ncyApO1xuXG5cdFx0cmV0dXJuIHNvdXJjZS5wcm9wZXJ0aWVzWyBpZCBdID8/IFtdO1xuXHR9ICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0LyoqXG5cdFx0ICogQ2xlYXIgZGVwcmVjYXRlZCBkYXRhXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMy4wXG5cdFx0ICovXG5cdFx0aWYgKCBzZXR0aW5ncy5yZXF1ZXN0RmllbGRzPy5sZW5ndGggKSB7XG5cdFx0XHRvbkNoYW5nZVNldHRpbmdPYmooIHsgcmVxdWVzdEZpZWxkczogbnVsbCB9ICk7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgW10gKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRjb25zdCBpZCA9IGdldEFjdGlvbk1vZGlmaWVySWQoIHNldHRpbmdzICk7XG5cblx0XHRzZXRQcm9wZXJ0aWVzKCBzb3VyY2UucHJvcGVydGllc1sgaWQgXSA/PyBbXSApO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgWyBzZXR0aW5ncy5wb3N0X3R5cGUgXSApO1xuXG5cdC8qKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMzE1XG5cdCAqL1xuXHR1c2VTYW5pdGl6ZUZpZWxkc01hcCgpO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cblx0cmV0dXJuIChcblx0XHQ8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cblx0XHRcdDxSb3dDb250cm9sPlxuXHRcdFx0XHR7ICggeyBpZCB9ICkgPT4gPFZhbGlkYXRvclByb3ZpZGVyXG5cdFx0XHRcdFx0aXNTdXBwb3J0ZWQ9eyBlcnJvciA9PiAncG9zdF90eXBlJyA9PT0gZXJyb3I/LnByb3BlcnR5IH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgKCB7IGhhc0Vycm9yLCBzZXRTaG93RXJyb3IgfSApID0+IDw+XG5cdFx0XHRcdFx0XHQ8UmVxdWlyZWRMYWJlbCBodG1sRm9yPXsgaWQgfT5cblx0XHRcdFx0XHRcdFx0eyBfXyggJ1Bvc3QgdHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0XHRcdDwvUmVxdWlyZWRMYWJlbD5cblx0XHRcdFx0XHRcdDxTdHlsZWRGbGV4Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyBjeChcblx0XHRcdFx0XHRcdFx0XHRSb3dDb250cm9sRW5kU3R5bGUsXG5cdFx0XHRcdFx0XHRcdFx0aGFzRXJyb3IgJiYgQ29udHJvbFdpdGhFcnJvclN0eWxlLFxuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPVwiY29sdW1uXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0eyBoYXNFcnJvciAmJiA8SWNvblRleHQ+XG5cdFx0XHRcdFx0XHRcdFx0eyBfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdQbGVhc2UgZmlsbCB0aGlzIHJlcXVpcmVkIGZpZWxkJyxcblx0XHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0PC9JY29uVGV4dD4gfVxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkU2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGlkPXsgaWQgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucG9zdF90eXBlIH1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnBvc3RUeXBlcyB9XG5cdFx0XHRcdFx0XHRcdFx0aGVscD17IGhlbHAoICdwb3N0X3R5cGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcblx0XHRcdFx0XHRcdFx0XHRcdHsgcG9zdF90eXBlOiB2YWwgfSxcblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9eyAoKSA9PiBzZXRTaG93RXJyb3IoIHRydWUgKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1N0eWxlZEZsZXhDb250cm9sPlxuXHRcdFx0XHRcdDwvPiB9XG5cdFx0XHRcdDwvVmFsaWRhdG9yUHJvdmlkZXI+IH1cblx0XHRcdDwvUm93Q29udHJvbD5cblx0XHRcdDxXaWRlTGluZS8+XG5cdFx0XHQ8Um93Q29udHJvbD5cblx0XHRcdFx0eyAoIHsgaWQgfSApID0+IDw+XG5cdFx0XHRcdFx0PExhYmVsIGh0bWxGb3I9eyBpZCB9PlxuXHRcdFx0XHRcdFx0eyBsYWJlbCggJ3Bvc3Rfc3RhdHVzJyApIH1cblx0XHRcdFx0XHQ8L0xhYmVsPlxuXHRcdFx0XHRcdDxTdHlsZWRTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRpZD17IGlkIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucG9zdF9zdGF0dXMgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wb3N0U3RhdHVzZXMgfVxuXHRcdFx0XHRcdFx0aGVscD17IGhlbHAoICdwb3N0X3N0YXR1cycgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbCA9PiBvbkNoYW5nZVNldHRpbmdPYmooXG5cdFx0XHRcdFx0XHRcdHsgcG9zdF9zdGF0dXM6IHZhbCB9LFxuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC8+IH1cblx0XHRcdDwvUm93Q29udHJvbD5cblx0XHRcdDxXaWRlTGluZS8+XG5cdFx0XHQ8QWN0aW9uRmllbGRzTWFwXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cblx0XHRcdFx0ZmllbGRzPXsgZm9ybUZpZWxkcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxXcmFwcGVyUmVxdWlyZWRDb250cm9sPlxuXHRcdFx0XHRcdDxEeW5hbWljUHJvcGVydHlTZWxlY3Rcblx0XHRcdFx0XHRcdGR5bmFtaWM9eyBbICdtZXRhX2lucHV0JywgJ3Bvc3RfdGVybXMnIF0gfVxuXHRcdFx0XHRcdFx0cHJvcGVydGllcz17IHByb3BlcnRpZXMgfVxuXHRcdFx0XHRcdFx0cGFyc2VWYWx1ZT17IHZhbHVlID0+IChcblx0XHRcdFx0XHRcdFx0dmFsdWUuaW5jbHVkZXMoICdqZXRfdGF4X18nIClcblx0XHRcdFx0XHRcdFx0PyAncG9zdF90ZXJtcydcblx0XHRcdFx0XHRcdFx0OiAnbWV0YV9pbnB1dCdcblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxQb3N0UHJvcGVydHlTZWxlY3QvPlxuXHRcdFx0XHRcdDwvRHluYW1pY1Byb3BlcnR5U2VsZWN0PlxuXHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+XG5cdFx0XHQ8L0FjdGlvbkZpZWxkc01hcD5cblx0XHRcdDxXaWRlTGluZS8+XG5cdFx0XHQ8Um93Q29udHJvbD5cblx0XHRcdFx0PExhYmVsPnsgbGFiZWwoICdkZWZhdWx0X21ldGEnICkgfTwvTGFiZWw+XG5cdFx0XHRcdDxSb3dDb250cm9sRW5kPlxuXHRcdFx0XHRcdDxMZWdhY3lEZWZhdWx0TWV0YUNvbnRyb2xcblx0XHRcdFx0XHRcdGRlZmF1bHRNZXRhPXsgc2V0dGluZ3MuZGVmYXVsdF9tZXRhIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcblx0XHRcdFx0XHRcdFx0eyBkZWZhdWx0X21ldGE6IHZhbCB9LFxuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Sb3dDb250cm9sRW5kPlxuXHRcdFx0PC9Sb3dDb250cm9sPlxuXHRcdDwvRmxleD5cblx0KTtcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNlcnRQb3N0UmVuZGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImFjdGlvbnNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJibG9ja3NUb0FjdGlvbnNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBzcmMvY3NzLnRzXG52YXIgaWR4ID0gMDtcbnZhciBjc3MgPSAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCIpIHtcbiAgICByZXR1cm4gYG1vY2tlZC1jc3MtJHtpZHgrK31gO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnVXNpbmcgdGhlIFwiY3NzXCIgdGFnIGluIHJ1bnRpbWUgaXMgbm90IHN1cHBvcnRlZC4gTWFrZSBzdXJlIHlvdSBoYXZlIHNldCB1cCB0aGUgQmFiZWwgcGx1Z2luIGNvcnJlY3RseS4nXG4gICk7XG59O1xudmFyIGNzc19kZWZhdWx0ID0gY3NzO1xuXG4vLyBzcmMvY3gudHNcbnZhciBjeCA9IGZ1bmN0aW9uIGN4MigpIHtcbiAgY29uc3QgcHJlc2VudENsYXNzTmFtZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgYXRvbWljQ2xhc3NlcyA9IHt9O1xuICBjb25zdCBub25BdG9taWNDbGFzc2VzID0gW107XG4gIHByZXNlbnRDbGFzc05hbWVzLmZvckVhY2goKGFyZykgPT4ge1xuICAgIGNvbnN0IGluZGl2aWR1YWxDbGFzc05hbWVzID0gYXJnID8gYXJnLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgIGluZGl2aWR1YWxDbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgaWYgKGNsYXNzTmFtZS5zdGFydHNXaXRoKFwiYXRtX1wiKSkge1xuICAgICAgICBjb25zdCBbLCBrZXlIYXNoXSA9IGNsYXNzTmFtZS5zcGxpdChcIl9cIik7XG4gICAgICAgIGF0b21pY0NsYXNzZXNba2V5SGFzaF0gPSBjbGFzc05hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub25BdG9taWNDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGNvbnN0IGtleUhhc2ggaW4gYXRvbWljQ2xhc3Nlcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXRvbWljQ2xhc3Nlcywga2V5SGFzaCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGF0b21pY0NsYXNzZXNba2V5SGFzaF0pO1xuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaCguLi5ub25BdG9taWNDbGFzc2VzKTtcbiAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKTtcbn07XG52YXIgY3hfZGVmYXVsdCA9IGN4O1xuZXhwb3J0IHtcbiAgY3NzX2RlZmF1bHQgYXMgY3NzLFxuICBjeF9kZWZhdWx0IGFzIGN4XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhY3Rpb24gZnJvbSAnLi9pbnNlcnQucG9zdCc7XG5pbXBvcnQgeyByZWdpc3RlckFjdGlvbiB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XG5cbnJlZ2lzdGVyQWN0aW9uKCBhY3Rpb24gKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==