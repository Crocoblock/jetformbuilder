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
const FLAGS_SOURCE = 'single_value_as_array';
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
        label: "Save single value as array",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFJQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FDMUxBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0Ly4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbGluYXJpYS9jb3JlL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2NvbXBvbmVudHMvTGVnYWN5RGVmYXVsdE1ldGFDb250cm9sLmpzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2NvbXBvbmVudHMvUG9zdFByb3BlcnR5U2VsZWN0LmpzeCIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvLi9pbnNlcnQucG9zdC9EeW5hbWljSW5zZXJ0ZWRQb3N0SUQuanMiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0Ly4vaW5zZXJ0LnBvc3QvU3RhdGljSW5zZXJ0ZWRQb3N0SUQuanMiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0Ly4vaW5zZXJ0LnBvc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0Ly4vaW5zZXJ0LnBvc3QvcmVuZGVyLmpzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3QvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJhY3Rpb25zXCJdIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJibG9ja3NUb0FjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWluc2VydC1wb3N0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItaW5zZXJ0LXBvc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1pbnNlcnQtcG9zdC8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jc3MudHNcbnZhciBpZHggPSAwO1xudmFyIGNzcyA9ICgpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIikge1xuICAgIHJldHVybiBgbW9ja2VkLWNzcy0ke2lkeCsrfWA7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdVc2luZyB0aGUgXCJjc3NcIiB0YWcgaW4gcnVudGltZSBpcyBub3Qgc3VwcG9ydGVkLiBNYWtlIHN1cmUgeW91IGhhdmUgc2V0IHVwIHRoZSBCYWJlbCBwbHVnaW4gY29ycmVjdGx5LidcbiAgKTtcbn07XG52YXIgY3NzX2RlZmF1bHQgPSBjc3M7XG5cbi8vIHNyYy9jeC50c1xudmFyIGN4ID0gZnVuY3Rpb24gY3gyKCkge1xuICBjb25zdCBwcmVzZW50Q2xhc3NOYW1lcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBhdG9taWNDbGFzc2VzID0ge307XG4gIGNvbnN0IG5vbkF0b21pY0NsYXNzZXMgPSBbXTtcbiAgcHJlc2VudENsYXNzTmFtZXMuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgY29uc3QgaW5kaXZpZHVhbENsYXNzTmFtZXMgPSBhcmcgPyBhcmcuc3BsaXQoXCIgXCIpIDogW107XG4gICAgaW5kaXZpZHVhbENsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoY2xhc3NOYW1lLnN0YXJ0c1dpdGgoXCJhdG1fXCIpKSB7XG4gICAgICAgIGNvbnN0IFssIGtleUhhc2hdID0gY2xhc3NOYW1lLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSA9IGNsYXNzTmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbkF0b21pY0NsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAoY29uc3Qga2V5SGFzaCBpbiBhdG9taWNDbGFzc2VzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhdG9taWNDbGFzc2VzLCBrZXlIYXNoKSkge1xuICAgICAgcmVzdWx0LnB1c2goYXRvbWljQ2xhc3Nlc1trZXlIYXNoXSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKC4uLm5vbkF0b21pY0NsYXNzZXMpO1xuICByZXR1cm4gcmVzdWx0LmpvaW4oXCIgXCIpO1xufTtcbnZhciBjeF9kZWZhdWx0ID0gY3g7XG5leHBvcnQge1xuICBjc3NfZGVmYXVsdCBhcyBjc3MsXG4gIGN4X2RlZmF1bHQgYXMgY3hcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIiwiaW1wb3J0IHsgQnV0dG9uLCBGbGV4SXRlbSB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHsgU3R5bGVkVGV4dENvbnRyb2wgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5cclxuY2xhc3MgTGVnYWN5RGVmYXVsdE1ldGFDb250cm9sIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmFkZE5ld09wdGlvbiA9IHRoaXMuYWRkTmV3T3B0aW9uLmJpbmQoIHRoaXMgKTtcclxuXHR9XHJcblxyXG5cdGdldERlZmF1bHRNZXRhKCkge1xyXG5cdFx0aWYgKCAhdGhpcy5wcm9wcy5kZWZhdWx0TWV0YSApIHtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKTtcclxuXHR9XHJcblxyXG5cdGFkZE5ld09wdGlvbigpIHtcclxuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5nZXREZWZhdWx0TWV0YSgpO1xyXG5cclxuXHRcdGl0ZW1zLnB1c2goIHtcclxuXHRcdFx0a2V5OiAnJyxcclxuXHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIGl0ZW1zICk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVPcHRpb24oIGluZGV4ICkge1xyXG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLmdldERlZmF1bHRNZXRhKCk7XHJcblx0XHRpdGVtcy5zcGxpY2UoIGluZGV4LCAxICk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlVmFsdWUoIHsgdmFsdWUsIG5hbWUsIGlkIH0gKSB7XHJcblxyXG5cdFx0Y29uc3QgaXRlbXMgICAgICAgICA9IEFycmF5LmZyb20oIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKTtcclxuXHRcdGl0ZW1zWyBpZCBdWyBuYW1lIF0gPSB2YWx1ZTtcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xyXG5cdH1cclxuXHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0cmV0dXJuIDw+XHJcblx0XHRcdHsgdGhpcy5nZXREZWZhdWx0TWV0YSgpLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXHJcblx0XHRcdFx0XHRrZXk9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlci1pdGVtLScgKyBpbmRleCB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZXBlYXRlci1pdGVtLWNvbHVtbiBqZXQtbWFyZ2luLWJvdHRvbS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdDxTdHlsZWRUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT1cIm1ldGFfa2V5XCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWV0YSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5rZXkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdrZXknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxTdHlsZWRUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT1cIm1ldGFfdmFsdWVcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZXRhIFZhbHVlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICd2YWx1ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkOiBpbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXBlYXRlci1pdGVtLWNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aWNvbj1cImRpc21pc3NcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiUmVtb3ZlXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gdGhpcy5yZW1vdmVPcHRpb24oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+O1xyXG5cdFx0XHR9ICkgfVxyXG5cdFx0XHQ8RmxleEl0ZW0+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uLWFkZC1vcHRpb25cIlxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmFkZE5ld09wdGlvbiB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBfXyggJ0FkZCBOZXcgT3B0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0ZsZXhJdGVtPlxyXG5cdFx0PC8+O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVnYWN5RGVmYXVsdE1ldGFDb250cm9sOyIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBUb2dnbGVDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0IH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuaW1wb3J0IHsgU3R5bGVkU2VsZWN0Q29udHJvbCwgU3R5bGVkVGV4dENvbnRyb2wgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3Qge1xyXG5cdEFjdGlvbkZpZWxkc01hcENvbnRleHQsXHJcblx0Q3VycmVudFByb3BlcnR5TWFwQ29udGV4dCxcclxufSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IEZMQUdTX1NPVVJDRSA9ICdzaW5nbGVfdmFsdWVfYXNfYXJyYXknOyBcclxuXHJcbmZ1bmN0aW9uIFBvc3RQcm9wZXJ0eVNlbGVjdCgpIHtcclxuXHRjb25zdCB7IEZpZWxkU2VsZWN0LCBwcm9wZXJ0eSB9ID0gdXNlQ29udGV4dCggQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCApO1xyXG5cdGNvbnN0IHsgc291cmNlLCBzZXRNYXBGaWVsZCwgZ2V0TWFwRmllbGQgfSA9IHVzZUNvbnRleHQoIEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCApO1xyXG5cdGNvbnN0IHsgbmFtZSwgaW5kZXggfSA9IHVzZUNvbnRleHQoIEFjdGlvbkZpZWxkc01hcENvbnRleHQgKTtcclxuXHJcblx0Y29uc3QgbWFwVmFsdWUgICA9IGdldE1hcEZpZWxkKHsgbmFtZSB9KSA/PyAnJztcclxuXHRjb25zdCBmbGFnVmFsdWUgID0gISFnZXRNYXBGaWVsZCh7IHNvdXJjZTogRkxBR1NfU09VUkNFLCBuYW1lIH0pO1xyXG5cclxuXHRjb25zdCBzZXRNYXBWYWx1ZSAgPSAodmFsdWUpID0+IHNldE1hcEZpZWxkKHsgbmFtZUZpZWxkOiBuYW1lLCB2YWx1ZSB9KTtcclxuXHRjb25zdCBzZXRGbGFnVmFsdWUgPSAodmFsdWUpID0+IHNldE1hcEZpZWxkKHsgc291cmNlOiBGTEFHU19TT1VSQ0UsIG5hbWVGaWVsZDogbmFtZSwgdmFsdWU6ICEhdmFsdWUgfSk7XHJcblxyXG5cdHN3aXRjaCAoIHByb3BlcnR5ICkge1xyXG5cdFx0Y2FzZSAnbWV0YV9pbnB1dCc6XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBqZXQtbWFyZ2luLWJvdHRvbS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHR7IEZpZWxkU2VsZWN0IH1cclxuXHRcdFx0XHRcdDxTdHlsZWRUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBuYW1lICsgaW5kZXggKyAnX3RleHQnIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBtYXBWYWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0TWFwVmFsdWUgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1tYXJnaW4tdG9wLXhzXCJcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTYXZlIHNpbmdsZSB2YWx1ZSBhcyBhcnJheVwiXHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBmbGFnVmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHNldEZsYWdWYWx1ZSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdGNhc2UgJ3Bvc3RfdGVybXMnOlxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgamV0LW1hcmdpbi1ib3R0b20td3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0eyBGaWVsZFNlbGVjdCB9XHJcblx0XHRcdFx0XHQ8U3R5bGVkU2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBuYW1lICsgaW5kZXggKyAnX3NlbGVjdCcgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IG1hcFZhbHVlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRNYXBWYWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UudGF4b25vbWllcyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBGaWVsZFNlbGVjdDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RQcm9wZXJ0eVNlbGVjdDtcclxuIiwiaW1wb3J0IHsgc3ByaW50ZiwgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgeyBCYXNlQ29tcHV0ZWRGaWVsZCB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XHJcblxyXG5jb25zdCBnZXRQb3N0VHlwZSA9IGFjdGlvbiA9PiB7XHJcblx0Y29uc3QgeyBpbnNlcnRfcG9zdDogaW5zZXJ0UG9zdCA9IHt9IH0gPSBhY3Rpb24/LnNldHRpbmdzO1xyXG5cclxuXHRyZXR1cm4gaW5zZXJ0UG9zdC5wb3N0X3R5cGU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBEeW5hbWljSW5zZXJ0ZWRQb3N0SUQoKSB7XHJcblx0QmFzZUNvbXB1dGVkRmllbGQuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFN1cHBvcnRlZEFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gWyAnaW5zZXJ0X3Bvc3QnIF07XHJcblx0fTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggYWN0aW9uICkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0QmFzZUNvbXB1dGVkRmllbGQucHJvdG90eXBlLmlzU3VwcG9ydGVkLmNhbGwoIHRoaXMsIGFjdGlvbiApICYmXHJcblx0XHRcdGdldFBvc3RUeXBlKCBhY3Rpb24gKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBsYXN0UGFydCA9IHRoaXMuaGFzSW5MaXN0ID8gYF8keyB0aGlzLmFjdGlvbi5pZCB9YCA6ICcnO1xyXG5cclxuXHRcdHJldHVybiBgaW5zZXJ0ZWRfJHsgZ2V0UG9zdFR5cGUoIHRoaXMuYWN0aW9uICkgfWAgKyBsYXN0UGFydDtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldEhlbHAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gc3ByaW50ZihcclxuXHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gYWN0aW9uIElEXHJcblx0XHRcdF9fKFxyXG5cdFx0XHRcdCdBIGNvbXB1dGVkIGZpZWxkIGZyb20gdGhlIDxiPkluc2VydC9VcGRhdGUgUG9zdCAoJXMpPC9iPiBhY3Rpb24uJyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdCksXHJcblx0XHRcdHRoaXMuYWN0aW9uLmlkLFxyXG5cdFx0KTtcclxuXHR9O1xyXG59XHJcblxyXG5EeW5hbWljSW5zZXJ0ZWRQb3N0SUQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUNvbXB1dGVkRmllbGQucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljSW5zZXJ0ZWRQb3N0SUQ7IiwiY29uc3Qge1xyXG5cdCAgICAgIEJhc2VDb21wdXRlZEZpZWxkLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIFN0YXRpY0luc2VydGVkUG9zdElEKCkge1xyXG5cdEJhc2VDb21wdXRlZEZpZWxkLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTdXBwb3J0ZWRBY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIFsgJ2luc2VydF9wb3N0JyBdO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnaW5zZXJ0ZWRfcG9zdF9pZCc7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRIZWxwID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIF9fKFxyXG5cdFx0XHQnQSBjb21wdXRlZCBmaWVsZCBmcm9tIHRoZSA8Yj5JbnNlcnQvVXBkYXRlIFBvc3Q8L2I+IGFjdGlvbi4nLFxyXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcblN0YXRpY0luc2VydGVkUG9zdElELnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VDb21wdXRlZEZpZWxkLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGljSW5zZXJ0ZWRQb3N0SUQ7IiwiaW1wb3J0IEluc2VydFBvc3RSZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xyXG5pbXBvcnQgU3RhdGljSW5zZXJ0ZWRQb3N0SUQgZnJvbSAnLi9TdGF0aWNJbnNlcnRlZFBvc3RJRCc7XHJcbmltcG9ydCBEeW5hbWljSW5zZXJ0ZWRQb3N0SUQgZnJvbSAnLi9EeW5hbWljSW5zZXJ0ZWRQb3N0SUQnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkQ29tcHV0ZWRGaWVsZCxcclxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmFkZENvbXB1dGVkRmllbGQoIFN0YXRpY0luc2VydGVkUG9zdElEICk7XHJcbmFkZENvbXB1dGVkRmllbGQoIER5bmFtaWNJbnNlcnRlZFBvc3RJRCApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHR5cGU6ICdpbnNlcnRfcG9zdCcsXHJcblx0bGFiZWw6IF9fKCAnSW5zZXJ0L1VwZGF0ZSBQb3N0JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0ZWRpdDogSW5zZXJ0UG9zdFJlbmRlcixcclxuXHRpY29uOiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcblx0XHQ8cmVjdCB4PVwiMFwiIGZpbGw9XCJub25lXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIvPlxyXG5cdFx0PGc+XHJcblx0XHRcdDxwYXRoXHJcblx0XHRcdFx0ZD1cIk0xNyA3VjRoLTJWMmgtM3YxSDN2MTVoMTFWOWgxVjdoMnptLTEtMnYxaC0ydjJoLTFWNmgtMlY1aDJWM2gxdjJoMnpcIi8+XHJcblx0XHQ8L2c+XHJcblx0PC9zdmc+LFxyXG5cdGRvY0hyZWY6ICdodHRwczovL2pldGZvcm1idWlsZGVyLmNvbS9mZWF0dXJlcy9pbnNlcnQtdXBkYXRlLXBvc3QvJyxcclxuXHRjYXRlZ29yeTogJ2NvbnRlbnQnLFxyXG5cdHZhbGlkYXRvcnM6IFtcclxuXHRcdCggeyBzZXR0aW5ncyB9ICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3M/LnBvc3RfdHlwZVxyXG5cdFx0XHQgICAgICAgPyBmYWxzZVxyXG5cdFx0XHQgICAgICAgOiB7IHR5cGU6ICdlbXB0eScsIHByb3BlcnR5OiAncG9zdF90eXBlJyB9O1xyXG5cdFx0fSxcclxuXHRdLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cclxuaW1wb3J0IFBvc3RQcm9wZXJ0eVNlbGVjdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RQcm9wZXJ0eVNlbGVjdCc7XHJcbmltcG9ydCB7IEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuaW1wb3J0IHsgYXBwbHlGaWx0ZXJzIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XHJcbmltcG9ydCB7XHJcblx0Q29udHJvbFdpdGhFcnJvclN0eWxlLCBJY29uVGV4dCxcclxuXHRSZXF1aXJlZExhYmVsLFxyXG5cdExhYmVsLFxyXG5cdFJvd0NvbnRyb2wsIFJvd0NvbnRyb2xFbmQsIFJvd0NvbnRyb2xFbmRTdHlsZSxcclxuXHRXaWRlTGluZSxcclxuXHRTdHlsZWRTZWxlY3RDb250cm9sLFxyXG5cdFN0eWxlZEZsZXhDb250cm9sLFxyXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGN4IH0gZnJvbSAnQGxpbmFyaWEvY29yZSc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yUHJvdmlkZXIgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG5cdHVzZUZpZWxkcyxcclxuXHR1c2VTYW5pdGl6ZUZpZWxkc01hcCxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWJsb2Nrcy10by1hY3Rpb25zJztcclxuaW1wb3J0IExlZ2FjeURlZmF1bHRNZXRhQ29udHJvbCBmcm9tICcuLi9jb21wb25lbnRzL0xlZ2FjeURlZmF1bHRNZXRhQ29udHJvbCc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgY29udmVydExpc3RUb0ZpZWxkc01hcCxcclxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcclxuY29uc3Qge1xyXG5cdCAgICAgIEFjdGlvbkZpZWxkc01hcCxcclxuXHQgICAgICBXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxyXG5cdCAgICAgIER5bmFtaWNQcm9wZXJ0eVNlbGVjdCxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IG1vZGlmaWVycyA9IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLmluc2VydC5wb3N0Lm1vZGlmaWVycycsXHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRpZDogJ2FsbCcsXHJcblx0XHRcdGlzU3VwcG9ydGVkOiAoKSA9PiB0cnVlLFxyXG5cdFx0fSxcclxuXHRdLFxyXG4pO1xyXG5cclxuY29uc3QgZ2V0QWN0aW9uTW9kaWZpZXJJZCA9IHNldHRpbmdzID0+IHtcclxuXHRmb3IgKCBjb25zdCBtb2RpZmllciBvZiBtb2RpZmllcnMgKSB7XHJcblx0XHRpZiAoICFtb2RpZmllci5pc1N1cHBvcnRlZCggc2V0dGluZ3MgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1vZGlmaWVyLmlkO1xyXG5cdH1cclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmZ1bmN0aW9uIEluc2VydFBvc3RSZW5kZXIoIHByb3BzICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHNldHRpbmdzLFxyXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nT2JqLFxyXG5cdFx0ICAgICAgc291cmNlLFxyXG5cdFx0ICAgICAgaGVscCxcclxuXHRcdCAgICAgIGxhYmVsLFxyXG5cdCAgICAgIH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAoIHVzZUZpZWxkcygpICk7XHJcblxyXG5cdGNvbnN0IFsgcHJvcGVydGllcywgc2V0UHJvcGVydGllcyBdID0gdXNlU3RhdGUoICgpID0+IHtcclxuXHRcdGNvbnN0IGlkID0gZ2V0QWN0aW9uTW9kaWZpZXJJZCggc2V0dGluZ3MgKTtcclxuXHJcblx0XHRyZXR1cm4gc291cmNlLnByb3BlcnRpZXNbIGlkIF0gPz8gW107XHJcblx0fSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQ2xlYXIgZGVwcmVjYXRlZCBkYXRhXHJcblx0XHQgKlxyXG5cdFx0ICogQHNpbmNlIDMuMFxyXG5cdFx0ICovXHJcblx0XHRpZiAoIHNldHRpbmdzLnJlcXVlc3RGaWVsZHM/Lmxlbmd0aCApIHtcclxuXHRcdFx0b25DaGFuZ2VTZXR0aW5nT2JqKCB7IHJlcXVlc3RGaWVsZHM6IG51bGwgfSApO1xyXG5cdFx0fVxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFtdICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0Y29uc3QgaWQgPSBnZXRBY3Rpb25Nb2RpZmllcklkKCBzZXR0aW5ncyApO1xyXG5cclxuXHRcdHNldFByb3BlcnRpZXMoIHNvdXJjZS5wcm9wZXJ0aWVzWyBpZCBdID8/IFtdICk7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgWyBzZXR0aW5ncy5wb3N0X3R5cGUgXSApO1xyXG5cclxuXHQvKipcclxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMzE1XHJcblx0ICovXHJcblx0dXNlU2FuaXRpemVGaWVsZHNNYXAoKTtcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG5cdFx0XHQ8Um93Q29udHJvbD5cclxuXHRcdFx0XHR7ICggeyBpZCB9ICkgPT4gPFZhbGlkYXRvclByb3ZpZGVyXHJcblx0XHRcdFx0XHRpc1N1cHBvcnRlZD17IGVycm9yID0+ICdwb3N0X3R5cGUnID09PSBlcnJvcj8ucHJvcGVydHkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgKCB7IGhhc0Vycm9yLCBzZXRTaG93RXJyb3IgfSApID0+IDw+XHJcblx0XHRcdFx0XHRcdDxSZXF1aXJlZExhYmVsIGh0bWxGb3I9eyBpZCB9PlxyXG5cdFx0XHRcdFx0XHRcdHsgX18oICdQb3N0IHR5cGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdDwvUmVxdWlyZWRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PFN0eWxlZEZsZXhDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgY3goXHJcblx0XHRcdFx0XHRcdFx0XHRSb3dDb250cm9sRW5kU3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRoYXNFcnJvciAmJiBDb250cm9sV2l0aEVycm9yU3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHsgaGFzRXJyb3IgJiYgPEljb25UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0eyBfXyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0J1BsZWFzZSBmaWxsIHRoaXMgcmVxdWlyZWQgZmllbGQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdFx0XHQ8L0ljb25UZXh0PiB9XHJcblx0XHRcdFx0XHRcdFx0PFN0eWxlZFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGlkPXsgaWQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5wb3N0X3R5cGUgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wb3N0VHlwZXMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0aGVscD17IGhlbHAoICdwb3N0X3R5cGUnICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHBvc3RfdHlwZTogdmFsIH0sXHJcblx0XHRcdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17ICgpID0+IHNldFNob3dFcnJvciggdHJ1ZSApIH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L1N0eWxlZEZsZXhDb250cm9sPlxyXG5cdFx0XHRcdFx0PC8+IH1cclxuXHRcdFx0XHQ8L1ZhbGlkYXRvclByb3ZpZGVyPiB9XHJcblx0XHRcdDwvUm93Q29udHJvbD5cclxuXHRcdFx0PFdpZGVMaW5lLz5cclxuXHRcdFx0PFJvd0NvbnRyb2w+XHJcblx0XHRcdFx0eyAoIHsgaWQgfSApID0+IDw+XHJcblx0XHRcdFx0XHQ8TGFiZWwgaHRtbEZvcj17IGlkIH0+XHJcblx0XHRcdFx0XHRcdHsgbGFiZWwoICdwb3N0X3N0YXR1cycgKSB9XHJcblx0XHRcdFx0XHQ8L0xhYmVsPlxyXG5cdFx0XHRcdFx0PFN0eWxlZFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0aWQ9eyBpZCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucG9zdF9zdGF0dXMgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnBvc3RTdGF0dXNlcyB9XHJcblx0XHRcdFx0XHRcdGhlbHA9eyBoZWxwKCAncG9zdF9zdGF0dXMnICkgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbCA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0XHRcdFx0eyBwb3N0X3N0YXR1czogdmFsIH0sXHJcblx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Lz4gfVxyXG5cdFx0XHQ8L1Jvd0NvbnRyb2w+XHJcblx0XHRcdDxXaWRlTGluZS8+XHJcblx0XHRcdDxBY3Rpb25GaWVsZHNNYXBcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0ZmllbGRzPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8V3JhcHBlclJlcXVpcmVkQ29udHJvbD5cclxuXHRcdFx0XHRcdDxEeW5hbWljUHJvcGVydHlTZWxlY3RcclxuXHRcdFx0XHRcdFx0ZHluYW1pYz17IFsgJ21ldGFfaW5wdXQnLCAncG9zdF90ZXJtcycgXSB9XHJcblx0XHRcdFx0XHRcdHByb3BlcnRpZXM9eyBwcm9wZXJ0aWVzIH1cclxuXHRcdFx0XHRcdFx0cGFyc2VWYWx1ZT17IHZhbHVlID0+IChcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZS5pbmNsdWRlcyggJ2pldF90YXhfXycgKVxyXG5cdFx0XHRcdFx0XHRcdD8gJ3Bvc3RfdGVybXMnXHJcblx0XHRcdFx0XHRcdFx0OiAnbWV0YV9pbnB1dCdcclxuXHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxQb3N0UHJvcGVydHlTZWxlY3QvPlxyXG5cdFx0XHRcdFx0PC9EeW5hbWljUHJvcGVydHlTZWxlY3Q+XHJcblx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPlxyXG5cdFx0XHQ8L0FjdGlvbkZpZWxkc01hcD5cclxuXHRcdFx0PFdpZGVMaW5lLz5cclxuXHRcdFx0PFJvd0NvbnRyb2w+XHJcblx0XHRcdFx0PExhYmVsPnsgbGFiZWwoICdkZWZhdWx0X21ldGEnICkgfTwvTGFiZWw+XHJcblx0XHRcdFx0PFJvd0NvbnRyb2xFbmQ+XHJcblx0XHRcdFx0XHQ8TGVnYWN5RGVmYXVsdE1ldGFDb250cm9sXHJcblx0XHRcdFx0XHRcdGRlZmF1bHRNZXRhPXsgc2V0dGluZ3MuZGVmYXVsdF9tZXRhIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0XHRcdHsgZGVmYXVsdF9tZXRhOiB2YWwgfSxcclxuXHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvUm93Q29udHJvbEVuZD5cclxuXHRcdFx0PC9Sb3dDb250cm9sPlxyXG5cdFx0PC9GbGV4PlxyXG5cdCk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnNlcnRQb3N0UmVuZGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJhY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYmxvY2tzVG9BY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWN0aW9uIGZyb20gJy4vaW5zZXJ0LnBvc3QnO1xyXG5pbXBvcnQgeyByZWdpc3RlckFjdGlvbiB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XHJcblxyXG5yZWdpc3RlckFjdGlvbiggYWN0aW9uICk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==