/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _columns_subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columns/subscriber */ "./admin/pages/jfb-paypal-entries/columns/subscriber/index.js");
/* harmony import */ var _columns_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns/status */ "./admin/pages/jfb-paypal-entries/columns/status/index.js");
/* harmony import */ var _SubscriptionActionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubscriptionActionPanel */ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue");
/* harmony import */ var _scss_admin_default_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../scss/admin/default.scss */ "../scss/admin/default.scss");
/* harmony import */ var _scss_admin_default_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_admin_default_scss__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




Vue.config.devtools = true;
var applyFilters = wp.hooks.applyFilters;
var _window$JetFBMixins = window.JetFBMixins,
    GetIncoming = _window$JetFBMixins.GetIncoming,
    i18n = _window$JetFBMixins.i18n;
var _window$JetFBComponen = window.JetFBComponents,
    EntriesTable = _window$JetFBComponen.EntriesTable,
    DetailsTableWithStore = _window$JetFBComponen.DetailsTableWithStore;
var columnsComponents = applyFilters('jet.fb.register.paypal.entries.columns', [_columns_subscriber__WEBPACK_IMPORTED_MODULE_0__, _columns_status__WEBPACK_IMPORTED_MODULE_1__]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'jfb-paypal-entries',
  components: {
    DetailsTableWithStore: DetailsTableWithStore,
    SubscriptionActionPanel: _SubscriptionActionPanel__WEBPACK_IMPORTED_MODULE_2__.default,
    EntriesTable: EntriesTable
  },
  data: function data() {
    return {
      list: [],
      scenario: '',
      settings: {},
      actions: {},
      columnsComponents: columnsComponents,
      isShowPopup: false
    };
  },
  mixins: [GetIncoming, i18n],
  created: function created() {
    var _this$getIncoming = this.getIncoming(),
        _this$getIncoming$lis = _this$getIncoming.list,
        list = _this$getIncoming$lis === void 0 ? [] : _this$getIncoming$lis,
        _this$getIncoming$col = _this$getIncoming.columns,
        columns = _this$getIncoming$col === void 0 ? {} : _this$getIncoming$col,
        _this$getIncoming$sce = _this$getIncoming.scenario,
        scenario = _this$getIncoming$sce === void 0 ? '' : _this$getIncoming$sce,
        _this$getIncoming$act = _this$getIncoming.actions,
        actions = _this$getIncoming$act === void 0 ? {} : _this$getIncoming$act;

    this.list = JSON.parse(JSON.stringify(list));
    this.actions = JSON.parse(JSON.stringify(actions));
    this.scenario = scenario;
    this.$store.commit('setColumns', JSON.parse(JSON.stringify(columns)));
  },
  computed: {
    columnsFromStore: function columnsFromStore() {
      return this.$store.getters.getColumns;
    }
  },
  methods: {
    openPopup: function openPopup(entryID) {
      this.$store.commit('setCurrent', this.list[entryID] || {});
      this.isShowPopup = true;
    },
    closePopup: function closePopup() {
      this.isShowPopup = false;
      this.$store.commit('clearCurrent');
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _window$JetFBMixins = window.JetFBMixins,
    GetIncoming = _window$JetFBMixins.GetIncoming,
    i18n = _window$JetFBMixins.i18n;
var CxVuiCollapseMini = window.JetFBComponents.CxVuiCollapseMini;
var _wp = wp,
    apiFetch = _wp.apiFetch;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SubscriptionActionPanel',
  components: {
    CxVuiCollapseMini: CxVuiCollapseMini
  },
  props: {
    label: String,
    reason: Object,
    type: String
  },
  mixins: [i18n],
  created: function created() {
    this.reasonString = this.reason.default;
  },
  data: function data() {
    return {
      reasonString: '',
      loading: false
    };
  },
  computed: {
    current: function current() {
      return this.$store.getters.getCurrent;
    }
  },
  methods: {
    runAction: function runAction() {
      var _this = this;

      var options = _objectSpread(_objectSpread({}, this.current.links.value[this.type]), {}, {
        data: {
          form_id: this.current._FORM_ID.value,
          reason: this.reasonString
        }
      });

      this.loading = true;
      apiFetch(options).then(function (res) {
        _this.$CXNotice.add({
          message: res.message,
          type: 'success',
          duration: 4000
        });

        _this.loading = false;
      }).catch(function (error) {
        _this.$CXNotice.add({
          message: error.message,
          type: 'error',
          duration: 4000
        });

        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'status--item',
  props: ['value', 'full-entry'],
  data: function data() {
    return {
      status: '',
      otherInfo: {}
    };
  },
  created: function created() {
    var info;

    try {
      info = JSON.parse(JSON.stringify(this.value));
    } catch (e) {
      return false;
    }

    this.status = info.status;
    delete info.status;
    this.otherInfo = info;
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubscriberMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriberMixin */ "./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberMixin.js");
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'subscriber--item',
  mixins: [_SubscriberMixin__WEBPACK_IMPORTED_MODULE_0__.default]
});

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/columns/status/index.js":
/*!****************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/columns/status/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "item": () => (/* binding */ item)
/* harmony export */ });
/* harmony import */ var _StatusInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusInfo */ "./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue");

var item = _StatusInfo__WEBPACK_IMPORTED_MODULE_0__.default;


/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberMixin.js":
/*!******************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberMixin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['value', 'full-entry'],
  data: function data() {
    return {
      info: {}
    };
  },
  created: function created() {
    this.info = JSON.parse(JSON.stringify(this.value));
  }
});

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/columns/subscriber/index.js":
/*!********************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/columns/subscriber/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "item": () => (/* binding */ item)
/* harmony export */ });
/* harmony import */ var _SubscriberInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriberInfo */ "./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue");

var item = _SubscriberInfo__WEBPACK_IMPORTED_MODULE_0__.default;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../scss/admin/default.scss":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../scss/admin/default.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jet-form-builder-page p.fb-description {\n  font-size: 13px;\n  color: #7b7e81;\n  margin: 0 0 1.5rem 0;\n}\n.jet-form-builder-page .cx-vui-collapse-mini__wrap {\n  padding: 0 0 20px;\n}\n.jet-form-builder-page .cx-vui-collapse-mini__item {\n  border-bottom: 1px solid #ECECEC;\n}\n.jet-form-builder-page .cx-vui-collapse-mini__item:first-child {\n  border-top: 1px solid #ECECEC;\n}\n.jet-form-builder-page .cx-vui-collapse-mini__item:last-child {\n  margin-bottom: unset;\n}\n.jet-form-builder-page .cx-vui-collapse-mini__item--active svg {\n  transform: rotate(90deg);\n}\n.jet-form-builder-page .cx-vui-collapse-mini__header {\n  padding: 1.2rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.jet-form-builder-page .cx-vui-collapse-mini__header-label {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 23px;\n  color: #007CBA;\n  margin: 0 25px 0 0;\n  display: flex;\n  align-items: center;\n}\n.jet-form-builder-page .cx-vui-collapse-mini__header-desc {\n  font-size: 15px;\n  line-height: 23px;\n  color: #7B7E81;\n}\n.jet-form-builder-page .cx-vui-collapse-mini__header-label svg {\n  margin: -1px 8px 0 0;\n  transition: 0.3s;\n}\n.jet-form-builder-page .cx-vui-collapse-mini__content {\n  padding: 0 1.5rem 1.5rem;\n}", "",{"version":3,"sources":["webpack://./../scss/admin/default.scss"],"names":[],"mappings":"AACC;EACC,eAAA;EACA,cAAA;EACA,oBAAA;AAAF;AAIE;EACC,iBAAA;AAFH;AAKE;EAaC,gCAAA;AAfH;AAGG;EACC,6BAAA;AADJ;AAIG;EACC,oBAAA;AAFJ;AAKG;EACC,wBAAA;AAHJ;AASE;EACC,eAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AAPH;AASG;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AAPJ;AAUG;EACC,eAAA;EACA,iBAAA;EACA,cAAA;AARJ;AAWG;EACC,oBAAA;EACA,gBAAA;AATJ;AAaE;EACC,wBAAA;AAXH","sourcesContent":[".jet-form-builder-page {\r\n\tp.fb-description {\r\n\t\tfont-size: 13px;\r\n\t\tcolor: #7b7e81;\r\n\t\tmargin: 0 0 1.5rem 0;\r\n\t}\r\n\r\n\t.cx-vui-collapse-mini {\r\n\t\t&__wrap {\r\n\t\t\tpadding: 0 0 20px;\r\n\t\t}\r\n\r\n\t\t&__item {\r\n\t\t\t&:first-child {\r\n\t\t\t\tborder-top: 1px solid #ECECEC;\r\n\t\t\t}\r\n\r\n\t\t\t&:last-child {\r\n\t\t\t\tmargin-bottom: unset;\r\n\t\t\t}\r\n\r\n\t\t\t&--active svg {\r\n\t\t\t\ttransform: rotate(90deg);\r\n\t\t\t}\r\n\r\n\t\t\tborder-bottom: 1px solid #ECECEC;\r\n\t\t}\r\n\r\n\t\t&__header {\r\n\t\t\tpadding: 1.2rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tcursor: pointer;\r\n\r\n\t\t\t&-label {\r\n\t\t\t\tfont-weight: 500;\r\n\t\t\t\tfont-size: 15px;\r\n\t\t\t\tline-height: 23px;\r\n\t\t\t\tcolor: #007CBA;\r\n\t\t\t\tmargin: 0 25px 0 0;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\r\n\t\t\t&-desc {\r\n\t\t\t\tfont-size: 15px;\r\n\t\t\t\tline-height: 23px;\r\n\t\t\t\tcolor: #7B7E81;\r\n\t\t\t}\r\n\r\n\t\t\t&-label svg {\r\n\t\t\t\tmargin: -1px 8px 0 0;\r\n\t\t\t\ttransition: 0.3s;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__content {\r\n\t\t\tpadding: 0 1.5rem 1.5rem;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cx-vui-button--style-link-error {\n  background: #ffffff;\n  box-shadow: 0 4px 4px rgba(201, 44, 44, 0.5);\n}\n.cx-vui-component--fullwidth-label .cx-vui-component__meta {\n  justify-content: center;\n  flex: 1;\n}\n.cx-vue-list-table .list-table-item__cell {\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cx-vue-list-table .cell--choose {\n  width: 4%;\n}\n.cx-vue-list-table .cell--id {\n  width: 6%;\n}\n.cx-vue-list-table .cell--record_id {\n  width: 13%;\n}\n.cx-vue-list-table .cell--status {\n  width: 11%;\n}\n.cx-vue-list-table .cell--subscriber {\n  width: 24%;\n}\n.cx-vue-list-table .cell--plan_info {\n  width: 27%;\n}\n.cx-vue-list-table .cell--create_time {\n  width: 15%;\n}", "",{"version":3,"sources":["webpack://./admin/pages/jfb-paypal-entries/PaypalEntries.vue","webpack://./../PaypalEntries.vue"],"names":[],"mappings":"AAuGA;EACC,mBAAA;EACA,4CAAA;ACtGD;AD0GC;EACC,uBAAA;EACA,OAAA;ACvGF;AD6GC;EACC,mBAAA;EACA,gBAAA;AC1GF;AD6GC;EACC,SAAA;AC3GF;AD8GC;EACC,SAAA;AC5GF;AD+GC;EACC,UAAA;AC7GF;ADgHC;EACC,UAAA;AC9GF;ADiHC;EACC,UAAA;AC/GF;ADkHC;EACC,UAAA;AChHF;ADmHC;EACC,UAAA;ACjHF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.cx-vui-button--style-link-error {\r\n\tbackground: #ffffff;\r\n\tbox-shadow: 0 4px 4px rgb(201 44 44 / 50%);\r\n}\r\n\r\n.cx-vui-component--fullwidth-label {\r\n\t.cx-vui-component__meta {\r\n\t\tjustify-content: center;\r\n\t\tflex: 1;\r\n\t}\r\n}\r\n\r\n.cx-vue-list-table {\r\n\r\n\t.list-table-item__cell {\r\n\t\twhite-space: nowrap;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t.cell--choose {\r\n\t\twidth: 4%;\r\n\t}\r\n\r\n\t.cell--id {\r\n\t\twidth: 6%;\r\n\t}\r\n\r\n\t.cell--record_id {\r\n\t\twidth: 13%;\r\n\t}\r\n\r\n\t.cell--status {\r\n\t\twidth: 11%;\r\n\t}\r\n\r\n\t.cell--subscriber {\r\n\t\twidth: 24%;\r\n\t}\r\n\r\n\t.cell--plan_info {\r\n\t\twidth: 27%;\r\n\t}\r\n\r\n\t.cell--create_time {\r\n\t\twidth: 15%;\r\n\t}\r\n}\r\n",".cx-vui-button--style-link-error {\n  background: #ffffff;\n  box-shadow: 0 4px 4px rgba(201, 44, 44, 0.5);\n}\n\n.cx-vui-component--fullwidth-label .cx-vui-component__meta {\n  justify-content: center;\n  flex: 1;\n}\n\n.cx-vue-list-table .list-table-item__cell {\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cx-vue-list-table .cell--choose {\n  width: 4%;\n}\n.cx-vue-list-table .cell--id {\n  width: 6%;\n}\n.cx-vue-list-table .cell--record_id {\n  width: 13%;\n}\n.cx-vue-list-table .cell--status {\n  width: 11%;\n}\n.cx-vue-list-table .cell--subscriber {\n  width: 24%;\n}\n.cx-vue-list-table .cell--plan_info {\n  width: 27%;\n}\n.cx-vue-list-table .cell--create_time {\n  width: 15%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".fade-enter-active[data-v-37f13d98], .fade-leave-active[data-v-37f13d98] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-37f13d98], .fade-leave-to[data-v-37f13d98] {\n  opacity: 0;\n}", "",{"version":3,"sources":["webpack://./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue","webpack://./../SubscriptionActionPanel.vue"],"names":[],"mappings":"AA0GA;EACC,wBAAA;ACzGD;AD4GA;EAEC,UAAA;AC1GD","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.fade-enter-active, .fade-leave-active {\r\n\ttransition: opacity .5s;\r\n}\r\n\r\n.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */\r\n{\r\n\topacity: 0;\r\n}\r\n",".fade-enter-active, .fade-leave-active {\n  transition: opacity 0.5s;\n}\n\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.cx-vui-collapse-mini__header {\r\n\tjustify-content: space-between;\n}\r\n", "",{"version":3,"sources":["webpack://./../admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue"],"names":[],"mappings":";AAmGA;CACA,8BAAA;AACA","sourcesContent":["<template>\r\n\t<CxVuiCollapseMini\r\n\t\twith-panel\r\n\t\t:label=\"label\"\r\n\t>\r\n\t\t<template #description>\r\n\t\t\t<cx-vui-button\r\n\t\t\t\tbutton-style=\"accent\"\r\n\t\t\t\tsize=\"mini\"\r\n\t\t\t\t@click=\"runAction\"\r\n\t\t\t\t:loading=\"loading\"\r\n\t\t\t>\r\n\t\t\t\t<template #label>{{ __( 'Run', 'jet-form-builder' ) }}</template>\r\n\t\t\t</cx-vui-button>\r\n\t\t</template>\r\n\t\t<template #custom=\"{ state }\">\r\n\t\t\t<transition name=\"fade\">\r\n\t\t\t\t<div\r\n\t\t\t\t\tv-show=\"state.isActive\"\r\n\t\t\t\t\tclass=\"cx-vui-collapse-mini__content\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<cx-vui-input\r\n\t\t\t\t\t\t:label=\"reason.label\"\r\n\t\t\t\t\t\t:description=\"reason.desc\"\r\n\t\t\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\r\n\t\t\t\t\t\tsize=\"fullwidth\"\r\n\t\t\t\t\t\tv-model=\"reasonString\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t</div>\r\n\t\t\t</transition>\r\n\t\t</template>\r\n\t</CxVuiCollapseMini>\r\n</template>\r\n\r\n<script>\r\nconst { GetIncoming, i18n } = window.JetFBMixins;\r\n\r\nconst { CxVuiCollapseMini } = window.JetFBComponents;\r\n\r\nconst { apiFetch } = wp;\r\n\r\nexport default {\r\n\tname: 'SubscriptionActionPanel',\r\n\tcomponents: { CxVuiCollapseMini },\r\n\tprops: {\r\n\t\tlabel: String,\r\n\t\treason: Object,\r\n\t\ttype: String,\r\n\t},\r\n\tmixins: [ i18n ],\r\n\tcreated() {\r\n\t\tthis.reasonString = this.reason.default;\r\n\t},\r\n\tdata() {\r\n\t\treturn {\r\n\t\t\treasonString: '',\r\n\t\t\tloading: false,\r\n\t\t};\r\n\t},\r\n\tcomputed: {\r\n\t\tcurrent() {\r\n\t\t\treturn this.$store.getters.getCurrent;\r\n\t\t}\r\n\t},\r\n\tmethods: {\r\n\t\trunAction() {\r\n\t\t\tconst options = {\r\n\t\t\t\t...this.current.links.value[ this.type ],\r\n\t\t\t\tdata: {\r\n\t\t\t\t\tform_id: this.current._FORM_ID.value,\r\n\t\t\t\t\treason: this.reasonString,\r\n\t\t\t\t},\r\n\t\t\t};\r\n\r\n\t\t\tthis.loading = true;\r\n\r\n\t\t\tapiFetch( options ).then( res => {\r\n\t\t\t\tthis.$CXNotice.add( {\r\n\t\t\t\t\tmessage: res.message,\r\n\t\t\t\t\ttype: 'success',\r\n\t\t\t\t\tduration: 4000,\r\n\t\t\t\t} );\r\n\r\n\t\t\t\tthis.loading = false;\r\n\t\t\t} ).catch( error => {\r\n\t\t\t\tthis.$CXNotice.add( {\r\n\t\t\t\t\tmessage: error.message,\r\n\t\t\t\t\ttype: 'error',\r\n\t\t\t\t\tduration: 4000,\r\n\t\t\t\t} );\r\n\r\n\t\t\t\tthis.loading = false;\r\n\t\t\t} );\r\n\t\t},\r\n\t},\r\n};\r\n</script>\r\n\r\n<style>\r\n.cx-vui-collapse-mini__header {\r\n\tjustify-content: space-between;\r\n}\r\n</style>\r\n\r\n<style scoped lang=\"scss\">\r\n\r\n.fade-enter-active, .fade-leave-active {\r\n\ttransition: opacity .5s;\r\n}\r\n\r\n.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */\r\n{\r\n\topacity: 0;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/PaypalEntries.vue":
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/PaypalEntries.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaypalEntries_vue_vue_type_template_id_3e43b738___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaypalEntries.vue?vue&type=template&id=3e43b738& */ "./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=template&id=3e43b738&");
/* harmony import */ var _PaypalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaypalEntries.vue?vue&type=script&lang=js& */ "./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=script&lang=js&");
/* harmony import */ var _PaypalEntries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaypalEntries.vue?vue&type=style&index=0&lang=scss& */ "./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _PaypalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PaypalEntries_vue_vue_type_template_id_3e43b738___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaypalEntries_vue_vue_type_template_id_3e43b738___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-paypal-entries/PaypalEntries.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue":
/*!********************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubscriptionActionPanel_vue_vue_type_template_id_37f13d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriptionActionPanel.vue?vue&type=template&id=37f13d98&scoped=true& */ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=template&id=37f13d98&scoped=true&");
/* harmony import */ var _SubscriptionActionPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriptionActionPanel.vue?vue&type=script&lang=js& */ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=script&lang=js&");
/* harmony import */ var _SubscriptionActionPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css& */ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _SubscriptionActionPanel_vue_vue_type_style_index_1_id_37f13d98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss& */ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__.default)(
  _SubscriptionActionPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubscriptionActionPanel_vue_vue_type_template_id_37f13d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubscriptionActionPanel_vue_vue_type_template_id_37f13d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "37f13d98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue":
/*!**********************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StatusInfo_vue_vue_type_template_id_39752d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusInfo.vue?vue&type=template&id=39752d5c&scoped=true& */ "./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=template&id=39752d5c&scoped=true&");
/* harmony import */ var _StatusInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusInfo.vue?vue&type=script&lang=js& */ "./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _StatusInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _StatusInfo_vue_vue_type_template_id_39752d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _StatusInfo_vue_vue_type_template_id_39752d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "39752d5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue":
/*!******************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubscriberInfo_vue_vue_type_template_id_0f4e4012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriberInfo.vue?vue&type=template&id=0f4e4012& */ "./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=template&id=0f4e4012&");
/* harmony import */ var _SubscriberInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriberInfo.vue?vue&type=script&lang=js& */ "./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SubscriberInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubscriberInfo_vue_vue_type_template_id_0f4e4012___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubscriberInfo_vue_vue_type_template_id_0f4e4012___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalEntries.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriptionActionPanel.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StatusInfo.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriberInfo.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=template&id=3e43b738&":
/*!*****************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=template&id=3e43b738& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_template_id_3e43b738___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_template_id_3e43b738___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_template_id_3e43b738___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalEntries.vue?vue&type=template&id=3e43b738& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=template&id=3e43b738&");


/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=template&id=37f13d98&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=template&id=37f13d98&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_template_id_37f13d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_template_id_37f13d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_template_id_37f13d98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriptionActionPanel.vue?vue&type=template&id=37f13d98&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=template&id=37f13d98&scoped=true&");


/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=template&id=39752d5c&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=template&id=39752d5c&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_template_id_39752d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_template_id_39752d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_template_id_39752d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StatusInfo.vue?vue&type=template&id=39752d5c&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=template&id=39752d5c&scoped=true&");


/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=template&id=0f4e4012&":
/*!*************************************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=template&id=0f4e4012& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_template_id_0f4e4012___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_template_id_0f4e4012___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriberInfo_vue_vue_type_template_id_0f4e4012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriberInfo.vue?vue&type=template&id=0f4e4012& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=template&id=0f4e4012&");


/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalEntries.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalEntries_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss&":
/*!******************************************************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_1_id_37f13d98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss& */ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_1_id_37f13d98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_1_id_37f13d98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_1_id_37f13d98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_1_id_37f13d98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css& */ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionActionPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=template&id=3e43b738&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=template&id=3e43b738& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class:
        ((_obj = {
          wrap: true,
          "jet-form-builder-page": true,
          "jet-form-builder-page--paypal-entries": true
        }),
        (_obj["jfb-paypal-scenario--" + _vm.scenario] = true),
        _obj)
    },
    [
      _c("h1", { staticClass: "cs-vui-title" }, [
        _vm._v(
          _vm._s(_vm.__("JetFormBuilder Paypal Entries", "jet-form-builder"))
        )
      ]),
      _vm._v(" "),
      _c("EntriesTable", {
        attrs: {
          "entries-list": _vm.list,
          columns: _vm.columnsFromStore,
          "columns-components": _vm.columnsComponents
        },
        on: { "dblclick-row": _vm.openPopup }
      }),
      _vm._v(" "),
      _c("cx-vui-popup", {
        attrs: { "body-width": "60vw", footer: false },
        on: { "on-cancel": _vm.closePopup },
        scopedSlots: _vm._u([
          {
            key: "content",
            fn: function() {
              return [
                _c("h3", [
                  _vm._v(
                    _vm._s(
                      _vm.__("Subscription Information", "jet-form-builder")
                    )
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "cx-vui-inner-panel" },
                  [_c("DetailsTableWithStore")],
                  1
                ),
                _vm._v(" "),
                _c("h3", [
                  _vm._v(
                    _vm._s(_vm.__("Subscription Actions", "jet-form-builder"))
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "cx-vui-inner-panel" },
                  _vm._l(_vm.actions, function(actionOptions, actionSlug) {
                    return _c(
                      "SubscriptionActionPanel",
                      _vm._b(
                        { key: actionSlug, attrs: { type: actionSlug } },
                        "SubscriptionActionPanel",
                        actionOptions,
                        false
                      )
                    )
                  }),
                  1
                )
              ]
            },
            proxy: true
          }
        ]),
        model: {
          value: _vm.isShowPopup,
          callback: function($$v) {
            _vm.isShowPopup = $$v
          },
          expression: "isShowPopup"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=template&id=37f13d98&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=template&id=37f13d98&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("CxVuiCollapseMini", {
    attrs: { "with-panel": "", label: _vm.label },
    scopedSlots: _vm._u([
      {
        key: "description",
        fn: function() {
          return [
            _c("cx-vui-button", {
              attrs: {
                "button-style": "accent",
                size: "mini",
                loading: _vm.loading
              },
              on: { click: _vm.runAction },
              scopedSlots: _vm._u([
                {
                  key: "label",
                  fn: function() {
                    return [_vm._v(_vm._s(_vm.__("Run", "jet-form-builder")))]
                  },
                  proxy: true
                }
              ])
            })
          ]
        },
        proxy: true
      },
      {
        key: "custom",
        fn: function(ref) {
          var state = ref.state
          return [
            _c("transition", { attrs: { name: "fade" } }, [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: state.isActive,
                      expression: "state.isActive"
                    }
                  ],
                  staticClass: "cx-vui-collapse-mini__content"
                },
                [
                  _c("cx-vui-input", {
                    attrs: {
                      label: _vm.reason.label,
                      description: _vm.reason.desc,
                      "wrapper-css": ["equalwidth"],
                      size: "fullwidth"
                    },
                    model: {
                      value: _vm.reasonString,
                      callback: function($$v) {
                        _vm.reasonString = $$v
                      },
                      expression: "reasonString"
                    }
                  })
                ],
                1
              )
            ])
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=template&id=39752d5c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/status/StatusInfo.vue?vue&type=template&id=39752d5c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [_vm._v(_vm._s(_vm.status))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=template&id=0f4e4012&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/columns/subscriber/SubscriberInfo.vue?vue&type=template&id=0f4e4012& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [_vm._v(_vm._s(_vm.info.email_address))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*********************************************************************!*\
  !*** ../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../scss/admin/default.scss":
/*!**********************************!*\
  !*** ../scss/admin/default.scss ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./default.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../scss/admin/default.scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3468b97e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalEntries.vue?vue&type=style&index=0&lang=scss& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/PaypalEntries.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("edb03026", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=1&id=37f13d98&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9891cf84", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-paypal-entries/SubscriptionActionPanel.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("35a984a7", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../node_modules/vue-style-loader/lib/addStylesClient.js":
/*!***************************************************************!*\
  !*** ../node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "../node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "../node_modules/vue-style-loader/lib/listToStyles.js":
/*!************************************************************!*\
  !*** ../node_modules/vue-style-loader/lib/listToStyles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************!*\
  !*** ./admin/pages/jfb-paypal-entries/index.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaypalEntries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaypalEntries */ "./admin/pages/jfb-paypal-entries/PaypalEntries.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


Vue.use(Vuex);
var options = {
  store: new Vuex.Store({
    state: {
      checked: [],
      idList: [],
      currentPopupData: {},
      columns: {},
      rowsList: []
    },
    getters: {
      isChecked: function isChecked(state) {
        return function (id) {
          return state.checked.includes(id);
        };
      },
      getCurrent: function getCurrent(state) {
        return state.currentPopupData;
      },
      getColumns: function getColumns(state) {
        return state.columns;
      }
    },
    mutations: {
      setColumns: function setColumns(state, columns) {
        state.columns = columns;
      },
      setCurrent: function setCurrent(state, current) {
        state.currentPopupData = current;
      },
      clearCurrent: function clearCurrent(state) {
        state.currentPopupData = {};
      },
      addToStore: function addToStore(state, _ref) {
        var id = _ref.id;
        state.idList.push(id);
      },
      addChecked: function addChecked(state, _ref2) {
        var id = _ref2.id;
        state.checked.push(id);
      },
      removeAll: function removeAll(state) {
        state.checked = [];
      },
      activeAll: function activeAll(state) {
        state.checked = _toConsumableArray(state.idList);
      },
      removeChecked: function removeChecked(state, _ref3) {
        var id = _ref3.id;
        state.checked = state.checked.filter(function (checked) {
          return checked !== id;
        });
      }
    },
    actions: {
      changeChecked: function changeChecked(_ref4, _ref5) {
        var commit = _ref4.commit;
        var id = _ref5.id,
            active = _ref5.active;

        if (active) {
          commit('addChecked', {
            id: id
          });
        } else {
          commit('removeChecked', {
            id: id
          });
        }
      }
    }
  })
};
var renderCurrentPage = window.JetFBActions.renderCurrentPage;
renderCurrentPage(_PaypalEntries__WEBPACK_IMPORTED_MODULE_0__.default, options);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9QYXlwYWxFbnRyaWVzLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL1N1YnNjcmlwdGlvbkFjdGlvblBhbmVsLnZ1ZSIsIndlYnBhY2s6Ly8vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL2NvbHVtbnMvc3RhdHVzL1N0YXR1c0luZm8udnVlIiwid2VicGFjazovLy9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLWVudHJpZXMvY29sdW1ucy9zdWJzY3JpYmVyL1N1YnNjcmliZXJJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLWVudHJpZXMvY29sdW1ucy9zdGF0dXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL2NvbHVtbnMvc3Vic2NyaWJlci9TdWJzY3JpYmVyTWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL2NvbHVtbnMvc3Vic2NyaWJlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2Nzcy9hZG1pbi9kZWZhdWx0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL1BheXBhbEVudHJpZXMudnVlP2I4MTUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL1N1YnNjcmlwdGlvbkFjdGlvblBhbmVsLnZ1ZT85ZGQxIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWU/NmY5ZCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL1BheXBhbEVudHJpZXMudnVlIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL2NvbHVtbnMvc3RhdHVzL1N0YXR1c0luZm8udnVlIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9jb2x1bW5zL3N1YnNjcmliZXIvU3Vic2NyaWJlckluZm8udnVlIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9QYXlwYWxFbnRyaWVzLnZ1ZT8xM2EyIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWU/ZGNlZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLWVudHJpZXMvY29sdW1ucy9zdGF0dXMvU3RhdHVzSW5mby52dWU/ZmU5NCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLWVudHJpZXMvY29sdW1ucy9zdWJzY3JpYmVyL1N1YnNjcmliZXJJbmZvLnZ1ZT8xNzRhIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9QYXlwYWxFbnRyaWVzLnZ1ZT85ZWY4Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWU/YWNhYyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLWVudHJpZXMvY29sdW1ucy9zdGF0dXMvU3RhdHVzSW5mby52dWU/OWIzZiIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLWVudHJpZXMvY29sdW1ucy9zdWJzY3JpYmVyL1N1YnNjcmliZXJJbmZvLnZ1ZT9kYTY2Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uLi9zY3NzL2FkbWluL2RlZmF1bHQuc2Nzcz8yMDkxIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9QYXlwYWxFbnRyaWVzLnZ1ZT8xM2UzIiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWU/Mzc3ZCIsIndlYnBhY2s6Ly8vLi9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLWVudHJpZXMvU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwudnVlPzgzMWEiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiA6Y2xhc3M9XCJ7XHJcblx0XHQnd3JhcCc6IHRydWUsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlci1wYWdlJzogdHJ1ZSxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyLXBhZ2UtLXBheXBhbC1lbnRyaWVzJzogdHJ1ZSxcclxuXHRcdFsnamZiLXBheXBhbC1zY2VuYXJpby0tJyArIHNjZW5hcmlvXTogdHJ1ZVxyXG5cdH1cIj5cclxuXHRcdDxoMSBjbGFzcz1cImNzLXZ1aS10aXRsZVwiPnt7IF9fKCAnSmV0Rm9ybUJ1aWxkZXIgUGF5cGFsIEVudHJpZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvaDE+XHJcblx0XHQ8RW50cmllc1RhYmxlXHJcblx0XHRcdDplbnRyaWVzLWxpc3Q9XCJsaXN0XCJcclxuXHRcdFx0OmNvbHVtbnM9XCJjb2x1bW5zRnJvbVN0b3JlXCJcclxuXHRcdFx0OmNvbHVtbnMtY29tcG9uZW50cz1cImNvbHVtbnNDb21wb25lbnRzXCJcclxuXHRcdFx0QGRibGNsaWNrLXJvdz1cIm9wZW5Qb3B1cFwiXHJcblx0XHQvPlxyXG5cdFx0PGN4LXZ1aS1wb3B1cFxyXG5cdFx0XHR2LW1vZGVsPVwiaXNTaG93UG9wdXBcIlxyXG5cdFx0XHRib2R5LXdpZHRoPVwiNjB2d1wiXHJcblx0XHRcdDpmb290ZXI9XCJmYWxzZVwiXHJcblx0XHRcdEBvbi1jYW5jZWw9XCJjbG9zZVBvcHVwXCJcclxuXHRcdD5cclxuXHRcdFx0PHRlbXBsYXRlICNjb250ZW50PlxyXG5cdFx0XHRcdDxoMz57eyBfXyggJ1N1YnNjcmlwdGlvbiBJbmZvcm1hdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH19PC9oMz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWlubmVyLXBhbmVsXCI+XHJcblx0XHRcdFx0XHQ8RGV0YWlsc1RhYmxlV2l0aFN0b3JlIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgzPnt7IF9fKCAnU3Vic2NyaXB0aW9uIEFjdGlvbnMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvaDM+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1pbm5lci1wYW5lbFwiPlxyXG5cdFx0XHRcdFx0PFN1YnNjcmlwdGlvbkFjdGlvblBhbmVsXHJcblx0XHRcdFx0XHRcdHYtZm9yPVwiKCBhY3Rpb25PcHRpb25zLCBhY3Rpb25TbHVnICkgaW4gYWN0aW9uc1wiXHJcblx0XHRcdFx0XHRcdDprZXk9XCJhY3Rpb25TbHVnXCJcclxuXHRcdFx0XHRcdFx0OnR5cGU9XCJhY3Rpb25TbHVnXCJcclxuXHRcdFx0XHRcdFx0di1iaW5kPVwiYWN0aW9uT3B0aW9uc1wiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PC9jeC12dWktcG9wdXA+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgKiBhcyBzdWJzY3JpYmVyIGZyb20gJy4vY29sdW1ucy9zdWJzY3JpYmVyJztcclxuaW1wb3J0ICogYXMgc3RhdHVzIGZyb20gJy4vY29sdW1ucy9zdGF0dXMnO1xyXG5pbXBvcnQgU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwgZnJvbSAnLi9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbCc7XHJcblxyXG5pbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvYWRtaW4vZGVmYXVsdC5zY3NzJztcclxuXHJcblZ1ZS5jb25maWcuZGV2dG9vbHMgPSB0cnVlO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuY29uc3QgeyBHZXRJbmNvbWluZywgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xyXG5jb25zdCB7IEVudHJpZXNUYWJsZSwgRGV0YWlsc1RhYmxlV2l0aFN0b3JlIH0gPSB3aW5kb3cuSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3QgY29sdW1uc0NvbXBvbmVudHMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIucGF5cGFsLmVudHJpZXMuY29sdW1ucycsIFtcclxuXHRzdWJzY3JpYmVyLFxyXG5cdHN0YXR1cyxcclxuXSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdqZmItcGF5cGFsLWVudHJpZXMnLFxyXG5cdGNvbXBvbmVudHM6IHsgRGV0YWlsc1RhYmxlV2l0aFN0b3JlLCBTdWJzY3JpcHRpb25BY3Rpb25QYW5lbCwgRW50cmllc1RhYmxlIH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxpc3Q6IFtdLFxyXG5cdFx0XHRzY2VuYXJpbzogJycsXHJcblx0XHRcdHNldHRpbmdzOiB7fSxcclxuXHRcdFx0YWN0aW9uczoge30sXHJcblx0XHRcdGNvbHVtbnNDb21wb25lbnRzLFxyXG5cdFx0XHRpc1Nob3dQb3B1cDogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bWl4aW5zOiBbIEdldEluY29taW5nLCBpMThuIF0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGNvbnN0IHsgbGlzdCA9IFtdLCBjb2x1bW5zID0ge30sIHNjZW5hcmlvID0gJycsIGFjdGlvbnMgPSB7fSB9ID0gdGhpcy5nZXRJbmNvbWluZygpO1xyXG5cclxuXHRcdHRoaXMubGlzdCA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBsaXN0ICkgKTtcclxuXHRcdHRoaXMuYWN0aW9ucyA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBhY3Rpb25zICkgKTtcclxuXHRcdHRoaXMuc2NlbmFyaW8gPSBzY2VuYXJpbztcclxuXHJcblx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdzZXRDb2x1bW5zJywgSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGNvbHVtbnMgKSApICk7XHJcblx0fSxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Y29sdW1uc0Zyb21TdG9yZSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q29sdW1ucztcclxuXHRcdH0sXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRvcGVuUG9wdXAoIGVudHJ5SUQgKSB7XHJcblx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCggJ3NldEN1cnJlbnQnLCB0aGlzLmxpc3RbIGVudHJ5SUQgXSB8fCB7fSApO1xyXG5cclxuXHRcdFx0dGhpcy5pc1Nob3dQb3B1cCA9IHRydWU7XHJcblx0XHR9LFxyXG5cdFx0Y2xvc2VQb3B1cCgpIHtcclxuXHRcdFx0dGhpcy5pc1Nob3dQb3B1cCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLiRzdG9yZS5jb21taXQoICdjbGVhckN1cnJlbnQnICk7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cclxuLmN4LXZ1aS1idXR0b24tLXN0eWxlLWxpbmstZXJyb3Ige1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0Ym94LXNoYWRvdzogMCA0cHggNHB4IHJnYigyMDEgNDQgNDQgLyA1MCUpO1xyXG59XHJcblxyXG4uY3gtdnVpLWNvbXBvbmVudC0tZnVsbHdpZHRoLWxhYmVsIHtcclxuXHQuY3gtdnVpLWNvbXBvbmVudF9fbWV0YSB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG59XHJcblxyXG4uY3gtdnVlLWxpc3QtdGFibGUge1xyXG5cclxuXHQubGlzdC10YWJsZS1pdGVtX19jZWxsIHtcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHJcblx0LmNlbGwtLWNob29zZSB7XHJcblx0XHR3aWR0aDogNCU7XHJcblx0fVxyXG5cclxuXHQuY2VsbC0taWQge1xyXG5cdFx0d2lkdGg6IDYlO1xyXG5cdH1cclxuXHJcblx0LmNlbGwtLXJlY29yZF9pZCB7XHJcblx0XHR3aWR0aDogMTMlO1xyXG5cdH1cclxuXHJcblx0LmNlbGwtLXN0YXR1cyB7XHJcblx0XHR3aWR0aDogMTElO1xyXG5cdH1cclxuXHJcblx0LmNlbGwtLXN1YnNjcmliZXIge1xyXG5cdFx0d2lkdGg6IDI0JTtcclxuXHR9XHJcblxyXG5cdC5jZWxsLS1wbGFuX2luZm8ge1xyXG5cdFx0d2lkdGg6IDI3JTtcclxuXHR9XHJcblxyXG5cdC5jZWxsLS1jcmVhdGVfdGltZSB7XHJcblx0XHR3aWR0aDogMTUlO1xyXG5cdH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuXHQ8Q3hWdWlDb2xsYXBzZU1pbmlcclxuXHRcdHdpdGgtcGFuZWxcclxuXHRcdDpsYWJlbD1cImxhYmVsXCJcclxuXHQ+XHJcblx0XHQ8dGVtcGxhdGUgI2Rlc2NyaXB0aW9uPlxyXG5cdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXHJcblx0XHRcdFx0c2l6ZT1cIm1pbmlcIlxyXG5cdFx0XHRcdEBjbGljaz1cInJ1bkFjdGlvblwiXHJcblx0XHRcdFx0OmxvYWRpbmc9XCJsb2FkaW5nXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgX18oICdSdW4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvdGVtcGxhdGU+XHJcblx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8dGVtcGxhdGUgI2N1c3RvbT1cInsgc3RhdGUgfVwiPlxyXG5cdFx0XHQ8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdHYtc2hvdz1cInN0YXRlLmlzQWN0aXZlXCJcclxuXHRcdFx0XHRcdGNsYXNzPVwiY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2NvbnRlbnRcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0XHRcdFx0OmxhYmVsPVwicmVhc29uLmxhYmVsXCJcclxuXHRcdFx0XHRcdFx0OmRlc2NyaXB0aW9uPVwicmVhc29uLmRlc2NcIlxyXG5cdFx0XHRcdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImZ1bGx3aWR0aFwiXHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJyZWFzb25TdHJpbmdcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC90cmFuc2l0aW9uPlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHQ8L0N4VnVpQ29sbGFwc2VNaW5pPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuY29uc3QgeyBHZXRJbmNvbWluZywgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xyXG5cclxuY29uc3QgeyBDeFZ1aUNvbGxhcHNlTWluaSB9ID0gd2luZG93LkpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgYXBpRmV0Y2ggfSA9IHdwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdTdWJzY3JpcHRpb25BY3Rpb25QYW5lbCcsXHJcblx0Y29tcG9uZW50czogeyBDeFZ1aUNvbGxhcHNlTWluaSB9LFxyXG5cdHByb3BzOiB7XHJcblx0XHRsYWJlbDogU3RyaW5nLFxyXG5cdFx0cmVhc29uOiBPYmplY3QsXHJcblx0XHR0eXBlOiBTdHJpbmcsXHJcblx0fSxcclxuXHRtaXhpbnM6IFsgaTE4biBdLFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLnJlYXNvblN0cmluZyA9IHRoaXMucmVhc29uLmRlZmF1bHQ7XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVhc29uU3RyaW5nOiAnJyxcclxuXHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGN1cnJlbnQoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldEN1cnJlbnQ7XHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRydW5BY3Rpb24oKSB7XHJcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0XHRcdFx0Li4udGhpcy5jdXJyZW50LmxpbmtzLnZhbHVlWyB0aGlzLnR5cGUgXSxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRmb3JtX2lkOiB0aGlzLmN1cnJlbnQuX0ZPUk1fSUQudmFsdWUsXHJcblx0XHRcdFx0XHRyZWFzb246IHRoaXMucmVhc29uU3RyaW5nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuXHRcdFx0YXBpRmV0Y2goIG9wdGlvbnMgKS50aGVuKCByZXMgPT4ge1xyXG5cdFx0XHRcdHRoaXMuJENYTm90aWNlLmFkZCgge1xyXG5cdFx0XHRcdFx0bWVzc2FnZTogcmVzLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHR0eXBlOiAnc3VjY2VzcycsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogNDAwMCxcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9ICkuY2F0Y2goIGVycm9yID0+IHtcclxuXHRcdFx0XHR0aGlzLiRDWE5vdGljZS5hZGQoIHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDQwMDAsXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLmN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXIge1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG48L3N0eWxlPlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5cclxuLmZhZGUtZW50ZXItYWN0aXZlLCAuZmFkZS1sZWF2ZS1hY3RpdmUge1xyXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xyXG59XHJcblxyXG4uZmFkZS1lbnRlciwgLmZhZGUtbGVhdmUtdG8gLyogLmZhZGUtbGVhdmUtYWN0aXZlINC00L4g0LLQtdGA0YHQuNC4IDIuMS44ICovXHJcbntcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cdDxzcGFuPnt7IHN0YXR1cyB9fTwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnc3RhdHVzLS1pdGVtJyxcclxuXHRwcm9wczogWyAndmFsdWUnLCAnZnVsbC1lbnRyeScgXSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c3RhdHVzOiAnJyxcclxuXHRcdFx0b3RoZXJJbmZvOiB7fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0bGV0IGluZm87XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aW5mbyA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLnZhbHVlICkgKTtcclxuXHRcdH0gY2F0Y2ggKCBlICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zdGF0dXMgPSBpbmZvLnN0YXR1cztcclxuXHRcdGRlbGV0ZSBpbmZvLnN0YXR1cztcclxuXHJcblx0XHR0aGlzLm90aGVySW5mbyA9IGluZm87XHJcblx0fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PHNwYW4+e3sgaW5mby5lbWFpbF9hZGRyZXNzIH19PC9zcGFuPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFN1YnNjcmliZXJNaXhpbiBmcm9tICcuL1N1YnNjcmliZXJNaXhpbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ3N1YnNjcmliZXItLWl0ZW0nLFxyXG5cdG1peGluczogWyBTdWJzY3JpYmVyTWl4aW4gXVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiaW1wb3J0IFN0YXR1c0luZm8gZnJvbSAnLi9TdGF0dXNJbmZvJztcclxuXHJcbmNvbnN0IGl0ZW0gPSBTdGF0dXNJbmZvO1xyXG5cclxuZXhwb3J0IHsgaXRlbSB9OyIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHRwcm9wczogWyAndmFsdWUnLCAnZnVsbC1lbnRyeScgXSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aW5mbzoge31cclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5pbmZvID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMudmFsdWUgKSApO1xyXG5cdH1cclxufSIsImltcG9ydCBTdWJzY3JpYmVySW5mbyBmcm9tICcuL1N1YnNjcmliZXJJbmZvJztcclxuXHJcbmNvbnN0IGl0ZW0gPSBTdWJzY3JpYmVySW5mbztcclxuXHJcbmV4cG9ydCB7IGl0ZW0gfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qZXQtZm9ybS1idWlsZGVyLXBhZ2UgcC5mYi1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogIzdiN2U4MTtcXG4gIG1hcmdpbjogMCAwIDEuNXJlbSAwO1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlIC5jeC12dWktY29sbGFwc2UtbWluaV9fd3JhcCB7XFxuICBwYWRkaW5nOiAwIDAgMjBweDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZSAuY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2l0ZW0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQ0VDRUM7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2UgLmN4LXZ1aS1jb2xsYXBzZS1taW5pX19pdGVtOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUNFQ0VDO1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlIC5jeC12dWktY29sbGFwc2UtbWluaV9faXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IHVuc2V0O1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlIC5jeC12dWktY29sbGFwc2UtbWluaV9faXRlbS0tYWN0aXZlIHN2ZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2UgLmN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXIge1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2UgLmN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItbGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbiAgY29sb3I6ICMwMDdDQkE7XFxuICBtYXJnaW46IDAgMjVweCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZSAuY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2hlYWRlci1kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbiAgY29sb3I6ICM3QjdFODE7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2UgLmN4LXZ1aS1jb2xsYXBzZS1taW5pX19oZWFkZXItbGFiZWwgc3ZnIHtcXG4gIG1hcmdpbjogLTFweCA4cHggMCAwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZSAuY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2NvbnRlbnQge1xcbiAgcGFkZGluZzogMCAxLjVyZW0gMS41cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9zY3NzL2FkbWluL2RlZmF1bHQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQztFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFBRjtBQUlFO0VBQ0MsaUJBQUE7QUFGSDtBQUtFO0VBYUMsZ0NBQUE7QUFmSDtBQUdHO0VBQ0MsNkJBQUE7QUFESjtBQUlHO0VBQ0Msb0JBQUE7QUFGSjtBQUtHO0VBQ0Msd0JBQUE7QUFISjtBQVNFO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFQSDtBQVNHO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVVHO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVJKO0FBV0c7RUFDQyxvQkFBQTtFQUNBLGdCQUFBO0FBVEo7QUFhRTtFQUNDLHdCQUFBO0FBWEhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmpldC1mb3JtLWJ1aWxkZXItcGFnZSB7XFxyXFxuXFx0cC5mYi1kZXNjcmlwdGlvbiB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxM3B4O1xcclxcblxcdFxcdGNvbG9yOiAjN2I3ZTgxO1xcclxcblxcdFxcdG1hcmdpbjogMCAwIDEuNXJlbSAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY3gtdnVpLWNvbGxhcHNlLW1pbmkge1xcclxcblxcdFxcdCZfX3dyYXAge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDAgMCAyMHB4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHQmOmZpcnN0LWNoaWxkIHtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItdG9wOiAxcHggc29saWQgI0VDRUNFQztcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0JjpsYXN0LWNoaWxkIHtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiB1bnNldDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0Ji0tYWN0aXZlIHN2ZyB7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VDRUNFQztcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9faGVhZGVyIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxLjJyZW07XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmLWxhYmVsIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogMjNweDtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogIzAwN0NCQTtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDAgMjVweCAwIDA7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQmLWRlc2Mge1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogMjNweDtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogIzdCN0U4MTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0Ji1sYWJlbCBzdmcge1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbjogLTFweCA4cHggMCAwO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19jb250ZW50IHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwIDEuNXJlbSAxLjVyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmN4LXZ1aS1idXR0b24tLXN0eWxlLWxpbmstZXJyb3Ige1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDIwMSwgNDQsIDQ0LCAwLjUpO1xcbn1cXG4uY3gtdnVpLWNvbXBvbmVudC0tZnVsbHdpZHRoLWxhYmVsIC5jeC12dWktY29tcG9uZW50X19tZXRhIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuLmN4LXZ1ZS1saXN0LXRhYmxlIC5saXN0LXRhYmxlLWl0ZW1fX2NlbGwge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tY2hvb3NlIHtcXG4gIHdpZHRoOiA0JTtcXG59XFxuLmN4LXZ1ZS1saXN0LXRhYmxlIC5jZWxsLS1pZCB7XFxuICB3aWR0aDogNiU7XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tcmVjb3JkX2lkIHtcXG4gIHdpZHRoOiAxMyU7XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tc3RhdHVzIHtcXG4gIHdpZHRoOiAxMSU7XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tc3Vic2NyaWJlciB7XFxuICB3aWR0aDogMjQlO1xcbn1cXG4uY3gtdnVlLWxpc3QtdGFibGUgLmNlbGwtLXBsYW5faW5mbyB7XFxuICB3aWR0aDogMjclO1xcbn1cXG4uY3gtdnVlLWxpc3QtdGFibGUgLmNlbGwtLWNyZWF0ZV90aW1lIHtcXG4gIHdpZHRoOiAxNSU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9QYXlwYWxFbnRyaWVzLnZ1ZVwiLFwid2VicGFjazovLy4vLi4vUGF5cGFsRW50cmllcy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBdUdBO0VBQ0MsbUJBQUE7RUFDQSw0Q0FBQTtBQ3RHRDtBRDBHQztFQUNDLHVCQUFBO0VBQ0EsT0FBQTtBQ3ZHRjtBRDZHQztFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUMxR0Y7QUQ2R0M7RUFDQyxTQUFBO0FDM0dGO0FEOEdDO0VBQ0MsU0FBQTtBQzVHRjtBRCtHQztFQUNDLFVBQUE7QUM3R0Y7QURnSEM7RUFDQyxVQUFBO0FDOUdGO0FEaUhDO0VBQ0MsVUFBQTtBQy9HRjtBRGtIQztFQUNDLFVBQUE7QUNoSEY7QURtSEM7RUFDQyxVQUFBO0FDakhGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcblxcclxcbi5jeC12dWktYnV0dG9uLS1zdHlsZS1saW5rLWVycm9yIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcblxcdGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2IoMjAxIDQ0IDQ0IC8gNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmN4LXZ1aS1jb21wb25lbnQtLWZ1bGx3aWR0aC1sYWJlbCB7XFxyXFxuXFx0LmN4LXZ1aS1jb21wb25lbnRfX21ldGEge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdGZsZXg6IDE7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uY3gtdnVlLWxpc3QtdGFibGUge1xcclxcblxcclxcblxcdC5saXN0LXRhYmxlLWl0ZW1fX2NlbGwge1xcclxcblxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmNlbGwtLWNob29zZSB7XFxyXFxuXFx0XFx0d2lkdGg6IDQlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuY2VsbC0taWQge1xcclxcblxcdFxcdHdpZHRoOiA2JTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmNlbGwtLXJlY29yZF9pZCB7XFxyXFxuXFx0XFx0d2lkdGg6IDEzJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmNlbGwtLXN0YXR1cyB7XFxyXFxuXFx0XFx0d2lkdGg6IDExJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmNlbGwtLXN1YnNjcmliZXIge1xcclxcblxcdFxcdHdpZHRoOiAyNCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jZWxsLS1wbGFuX2luZm8ge1xcclxcblxcdFxcdHdpZHRoOiAyNyU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5jZWxsLS1jcmVhdGVfdGltZSB7XFxyXFxuXFx0XFx0d2lkdGg6IDE1JTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLmN4LXZ1aS1idXR0b24tLXN0eWxlLWxpbmstZXJyb3Ige1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDIwMSwgNDQsIDQ0LCAwLjUpO1xcbn1cXG5cXG4uY3gtdnVpLWNvbXBvbmVudC0tZnVsbHdpZHRoLWxhYmVsIC5jeC12dWktY29tcG9uZW50X19tZXRhIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmN4LXZ1ZS1saXN0LXRhYmxlIC5saXN0LXRhYmxlLWl0ZW1fX2NlbGwge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tY2hvb3NlIHtcXG4gIHdpZHRoOiA0JTtcXG59XFxuLmN4LXZ1ZS1saXN0LXRhYmxlIC5jZWxsLS1pZCB7XFxuICB3aWR0aDogNiU7XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tcmVjb3JkX2lkIHtcXG4gIHdpZHRoOiAxMyU7XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tc3RhdHVzIHtcXG4gIHdpZHRoOiAxMSU7XFxufVxcbi5jeC12dWUtbGlzdC10YWJsZSAuY2VsbC0tc3Vic2NyaWJlciB7XFxuICB3aWR0aDogMjQlO1xcbn1cXG4uY3gtdnVlLWxpc3QtdGFibGUgLmNlbGwtLXBsYW5faW5mbyB7XFxuICB3aWR0aDogMjclO1xcbn1cXG4uY3gtdnVlLWxpc3QtdGFibGUgLmNlbGwtLWNyZWF0ZV90aW1lIHtcXG4gIHdpZHRoOiAxNSU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mYWRlLWVudGVyLWFjdGl2ZVtkYXRhLXYtMzdmMTNkOThdLCAuZmFkZS1sZWF2ZS1hY3RpdmVbZGF0YS12LTM3ZjEzZDk4XSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcbi5mYWRlLWVudGVyW2RhdGEtdi0zN2YxM2Q5OF0sIC5mYWRlLWxlYXZlLXRvW2RhdGEtdi0zN2YxM2Q5OF0ge1xcbiAgb3BhY2l0eTogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL1N1YnNjcmlwdGlvbkFjdGlvblBhbmVsLnZ1ZVwiLFwid2VicGFjazovLy4vLi4vU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTBHQTtFQUNDLHdCQUFBO0FDekdEO0FENEdBO0VBRUMsVUFBQTtBQzFHRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG5cXHJcXG4uZmFkZS1lbnRlci1hY3RpdmUsIC5mYWRlLWxlYXZlLWFjdGl2ZSB7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XFxyXFxufVxcclxcblxcclxcbi5mYWRlLWVudGVyLCAuZmFkZS1sZWF2ZS10byAvKiAuZmFkZS1sZWF2ZS1hY3RpdmUg0LTQviDQstC10YDRgdC40LggMi4xLjggKi9cXHJcXG57XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXCIsXCIuZmFkZS1lbnRlci1hY3RpdmUsIC5mYWRlLWxlYXZlLWFjdGl2ZSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcblxcbi5mYWRlLWVudGVyLCAuZmFkZS1sZWF2ZS10byB7XFxuICBvcGFjaXR5OiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY3gtdnVpLWNvbGxhcHNlLW1pbmlfX2hlYWRlciB7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9hZG1pbi9wYWdlcy9qZmItcGF5cGFsLWVudHJpZXMvU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtR0E7Q0FDQSw4QkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG5cXHQ8Q3hWdWlDb2xsYXBzZU1pbmlcXHJcXG5cXHRcXHR3aXRoLXBhbmVsXFxyXFxuXFx0XFx0OmxhYmVsPVxcXCJsYWJlbFxcXCJcXHJcXG5cXHQ+XFxyXFxuXFx0XFx0PHRlbXBsYXRlICNkZXNjcmlwdGlvbj5cXHJcXG5cXHRcXHRcXHQ8Y3gtdnVpLWJ1dHRvblxcclxcblxcdFxcdFxcdFxcdGJ1dHRvbi1zdHlsZT1cXFwiYWNjZW50XFxcIlxcclxcblxcdFxcdFxcdFxcdHNpemU9XFxcIm1pbmlcXFwiXFxyXFxuXFx0XFx0XFx0XFx0QGNsaWNrPVxcXCJydW5BY3Rpb25cXFwiXFxyXFxuXFx0XFx0XFx0XFx0OmxvYWRpbmc9XFxcImxvYWRpbmdcXFwiXFxyXFxuXFx0XFx0XFx0PlxcclxcblxcdFxcdFxcdFxcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgX18oICdSdW4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvdGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0PC9jeC12dWktYnV0dG9uPlxcclxcblxcdFxcdDwvdGVtcGxhdGU+XFxyXFxuXFx0XFx0PHRlbXBsYXRlICNjdXN0b209XFxcInsgc3RhdGUgfVxcXCI+XFxyXFxuXFx0XFx0XFx0PHRyYW5zaXRpb24gbmFtZT1cXFwiZmFkZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdlxcclxcblxcdFxcdFxcdFxcdFxcdHYtc2hvdz1cXFwic3RhdGUuaXNBY3RpdmVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0Y2xhc3M9XFxcImN4LXZ1aS1jb2xsYXBzZS1taW5pX19jb250ZW50XFxcIlxcclxcblxcdFxcdFxcdFxcdD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8Y3gtdnVpLWlucHV0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0OmxhYmVsPVxcXCJyZWFzb24ubGFiZWxcXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0OmRlc2NyaXB0aW9uPVxcXCJyZWFzb24uZGVzY1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0c2l6ZT1cXFwiZnVsbHdpZHRoXFxcIlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHYtbW9kZWw9XFxcInJlYXNvblN0cmluZ1xcXCJcXHJcXG5cXHRcXHRcXHRcXHRcXHQvPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvdHJhbnNpdGlvbj5cXHJcXG5cXHRcXHQ8L3RlbXBsYXRlPlxcclxcblxcdDwvQ3hWdWlDb2xsYXBzZU1pbmk+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmNvbnN0IHsgR2V0SW5jb21pbmcsIGkxOG4gfSA9IHdpbmRvdy5KZXRGQk1peGlucztcXHJcXG5cXHJcXG5jb25zdCB7IEN4VnVpQ29sbGFwc2VNaW5pIH0gPSB3aW5kb3cuSmV0RkJDb21wb25lbnRzO1xcclxcblxcclxcbmNvbnN0IHsgYXBpRmV0Y2ggfSA9IHdwO1xcclxcblxcclxcbmV4cG9ydCBkZWZhdWx0IHtcXHJcXG5cXHRuYW1lOiAnU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwnLFxcclxcblxcdGNvbXBvbmVudHM6IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSxcXHJcXG5cXHRwcm9wczoge1xcclxcblxcdFxcdGxhYmVsOiBTdHJpbmcsXFxyXFxuXFx0XFx0cmVhc29uOiBPYmplY3QsXFxyXFxuXFx0XFx0dHlwZTogU3RyaW5nLFxcclxcblxcdH0sXFxyXFxuXFx0bWl4aW5zOiBbIGkxOG4gXSxcXHJcXG5cXHRjcmVhdGVkKCkge1xcclxcblxcdFxcdHRoaXMucmVhc29uU3RyaW5nID0gdGhpcy5yZWFzb24uZGVmYXVsdDtcXHJcXG5cXHR9LFxcclxcblxcdGRhdGEoKSB7XFxyXFxuXFx0XFx0cmV0dXJuIHtcXHJcXG5cXHRcXHRcXHRyZWFzb25TdHJpbmc6ICcnLFxcclxcblxcdFxcdFxcdGxvYWRpbmc6IGZhbHNlLFxcclxcblxcdFxcdH07XFxyXFxuXFx0fSxcXHJcXG5cXHRjb21wdXRlZDoge1xcclxcblxcdFxcdGN1cnJlbnQoKSB7XFxyXFxuXFx0XFx0XFx0cmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q3VycmVudDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fSxcXHJcXG5cXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0cnVuQWN0aW9uKCkge1xcclxcblxcdFxcdFxcdGNvbnN0IG9wdGlvbnMgPSB7XFxyXFxuXFx0XFx0XFx0XFx0Li4udGhpcy5jdXJyZW50LmxpbmtzLnZhbHVlWyB0aGlzLnR5cGUgXSxcXHJcXG5cXHRcXHRcXHRcXHRkYXRhOiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9ybV9pZDogdGhpcy5jdXJyZW50Ll9GT1JNX0lELnZhbHVlLFxcclxcblxcdFxcdFxcdFxcdFxcdHJlYXNvbjogdGhpcy5yZWFzb25TdHJpbmcsXFxyXFxuXFx0XFx0XFx0XFx0fSxcXHJcXG5cXHRcXHRcXHR9O1xcclxcblxcclxcblxcdFxcdFxcdHRoaXMubG9hZGluZyA9IHRydWU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0YXBpRmV0Y2goIG9wdGlvbnMgKS50aGVuKCByZXMgPT4ge1xcclxcblxcdFxcdFxcdFxcdHRoaXMuJENYTm90aWNlLmFkZCgge1xcclxcblxcdFxcdFxcdFxcdFxcdG1lc3NhZ2U6IHJlcy5tZXNzYWdlLFxcclxcblxcdFxcdFxcdFxcdFxcdHR5cGU6ICdzdWNjZXNzJyxcXHJcXG5cXHRcXHRcXHRcXHRcXHRkdXJhdGlvbjogNDAwMCxcXHJcXG5cXHRcXHRcXHRcXHR9ICk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XFxyXFxuXFx0XFx0XFx0fSApLmNhdGNoKCBlcnJvciA9PiB7XFxyXFxuXFx0XFx0XFx0XFx0dGhpcy4kQ1hOb3RpY2UuYWRkKCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZSxcXHJcXG5cXHRcXHRcXHRcXHRcXHR0eXBlOiAnZXJyb3InLFxcclxcblxcdFxcdFxcdFxcdFxcdGR1cmF0aW9uOiA0MDAwLFxcclxcblxcdFxcdFxcdFxcdH0gKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXHJcXG5cXHRcXHRcXHR9ICk7XFxyXFxuXFx0XFx0fSxcXHJcXG5cXHR9LFxcclxcbn07XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbi5jeC12dWktY29sbGFwc2UtbWluaV9faGVhZGVyIHtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZCBsYW5nPVxcXCJzY3NzXFxcIj5cXHJcXG5cXHJcXG4uZmFkZS1lbnRlci1hY3RpdmUsIC5mYWRlLWxlYXZlLWFjdGl2ZSB7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XFxyXFxufVxcclxcblxcclxcbi5mYWRlLWVudGVyLCAuZmFkZS1sZWF2ZS10byAvKiAuZmFkZS1sZWF2ZS1hY3RpdmUg0LTQviDQstC10YDRgdC40LggMi4xLjggKi9cXHJcXG57XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG59XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BheXBhbEVudHJpZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNDNiNzM4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BheXBhbEVudHJpZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYXlwYWxFbnRyaWVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9QYXlwYWxFbnRyaWVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuaG9tZS5jb21cXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXGFzc2V0c1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZTQzYjczOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZTQzYjczOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZTQzYjczOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGF5cGFsRW50cmllcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2U0M2I3MzgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2U0M2I3MzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9QYXlwYWxFbnRyaWVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3ZjEzZDk4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1YnNjcmlwdGlvbkFjdGlvblBhbmVsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1N1YnNjcmlwdGlvbkFjdGlvblBhbmVsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL1N1YnNjcmlwdGlvbkFjdGlvblBhbmVsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTM3ZjEzZDk4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzdmMTNkOThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5ob21lLmNvbVxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcYXNzZXRzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM3ZjEzZDk4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3ZjEzZDk4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3ZjEzZDk4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzdmMTNkOTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzdmMTNkOTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1wYXlwYWwtZW50cmllcy9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N0YXR1c0luZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5NzUyZDVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N0YXR1c0luZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdGF0dXNJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzk3NTJkNWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5ob21lLmNvbVxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcYXNzZXRzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM5NzUyZDVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM5NzUyZDVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM5NzUyZDVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdGF0dXNJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOTc1MmQ1YyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczOTc1MmQ1YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL2NvbHVtbnMvc3RhdHVzL1N0YXR1c0luZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJzY3JpYmVySW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGY0ZTQwMTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3Vic2NyaWJlckluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJzY3JpYmVySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxkZXZlbG9wLmhvbWUuY29tXFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxhc3NldHNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGY0ZTQwMTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGY0ZTQwMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGY0ZTQwMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1YnNjcmliZXJJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZjRlNDAxMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZjRlNDAxMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXBheXBhbC1lbnRyaWVzL2NvbHVtbnMvc3Vic2NyaWJlci9TdWJzY3JpYmVySW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsRW50cmllcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxFbnRyaWVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3RhdHVzSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdGF0dXNJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJzY3JpYmVySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJzY3JpYmVySW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfb2JqXG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgICgoX29iaiA9IHtcbiAgICAgICAgICB3cmFwOiB0cnVlLFxuICAgICAgICAgIFwiamV0LWZvcm0tYnVpbGRlci1wYWdlXCI6IHRydWUsXG4gICAgICAgICAgXCJqZXQtZm9ybS1idWlsZGVyLXBhZ2UtLXBheXBhbC1lbnRyaWVzXCI6IHRydWVcbiAgICAgICAgfSksXG4gICAgICAgIChfb2JqW1wiamZiLXBheXBhbC1zY2VuYXJpby0tXCIgKyBfdm0uc2NlbmFyaW9dID0gdHJ1ZSksXG4gICAgICAgIF9vYmopXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3MtdnVpLXRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkpldEZvcm1CdWlsZGVyIFBheXBhbCBFbnRyaWVzXCIsIFwiamV0LWZvcm0tYnVpbGRlclwiKSlcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJFbnRyaWVzVGFibGVcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiZW50cmllcy1saXN0XCI6IF92bS5saXN0LFxuICAgICAgICAgIGNvbHVtbnM6IF92bS5jb2x1bW5zRnJvbVN0b3JlLFxuICAgICAgICAgIFwiY29sdW1ucy1jb21wb25lbnRzXCI6IF92bS5jb2x1bW5zQ29tcG9uZW50c1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBcImRibGNsaWNrLXJvd1wiOiBfdm0ub3BlblBvcHVwIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY3gtdnVpLXBvcHVwXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgXCJib2R5LXdpZHRoXCI6IFwiNjB2d1wiLCBmb290ZXI6IGZhbHNlIH0sXG4gICAgICAgIG9uOiB7IFwib24tY2FuY2VsXCI6IF92bS5jbG9zZVBvcHVwIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJjb250ZW50XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX18oXCJTdWJzY3JpcHRpb24gSW5mb3JtYXRpb25cIiwgXCJqZXQtZm9ybS1idWlsZGVyXCIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3gtdnVpLWlubmVyLXBhbmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcIkRldGFpbHNUYWJsZVdpdGhTdG9yZVwiKV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKFwiU3Vic2NyaXB0aW9uIEFjdGlvbnNcIiwgXCJqZXQtZm9ybS1idWlsZGVyXCIpKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjeC12dWktaW5uZXItcGFuZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hY3Rpb25zLCBmdW5jdGlvbihhY3Rpb25PcHRpb25zLCBhY3Rpb25TbHVnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcIlN1YnNjcmlwdGlvbkFjdGlvblBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGFjdGlvblNsdWcsIGF0dHJzOiB7IHR5cGU6IGFjdGlvblNsdWcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJzY3JpcHRpb25BY3Rpb25QYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXSksXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5pc1Nob3dQb3B1cCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICBfdm0uaXNTaG93UG9wdXAgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiaXNTaG93UG9wdXBcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIkN4VnVpQ29sbGFwc2VNaW5pXCIsIHtcbiAgICBhdHRyczogeyBcIndpdGgtcGFuZWxcIjogXCJcIiwgbGFiZWw6IF92bS5sYWJlbCB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcImN4LXZ1aS1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIFwiYnV0dG9uLXN0eWxlXCI6IFwiYWNjZW50XCIsXG4gICAgICAgICAgICAgICAgc2l6ZTogXCJtaW5pXCIsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5ydW5BY3Rpb24gfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbX3ZtLl92KF92bS5fcyhfdm0uX18oXCJSdW5cIiwgXCJqZXQtZm9ybS1idWlsZGVyXCIpKSldXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJjdXN0b21cIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgIHZhciBzdGF0ZSA9IHJlZi5zdGF0ZVxuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdGF0ZS5pc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0YXRlLmlzQWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN4LXZ1aS1jb2xsYXBzZS1taW5pX19jb250ZW50XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiY3gtdnVpLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLnJlYXNvbi5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogX3ZtLnJlYXNvbi5kZXNjLFxuICAgICAgICAgICAgICAgICAgICAgIFwid3JhcHBlci1jc3NcIjogW1wiZXF1YWx3aWR0aFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcImZ1bGx3aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWFzb25TdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlYXNvblN0cmluZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWFzb25TdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0pXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnN0YXR1cykpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaW5mby5lbWFpbF9hZGRyZXNzKSldKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVmYXVsdC5zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM0NjhiOTdlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZWZhdWx0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVmYXVsdC5zY3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsRW50cmllcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImVkYjAzMDI2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsRW50cmllcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxFbnRyaWVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zN2YxM2Q5OCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjk4OTFjZjg0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MzdmMTNkOTgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MzdmMTNkOTgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM1YTk4NGE3XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJzY3JpcHRpb25BY3Rpb25QYW5lbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Vic2NyaXB0aW9uQWN0aW9uUGFuZWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBheXBhbEVudHJpZXMgZnJvbSAnLi9QYXlwYWxFbnRyaWVzJztcclxuXHJcblZ1ZS51c2UoIFZ1ZXggKTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcblx0c3RvcmU6IG5ldyBWdWV4LlN0b3JlKCB7XHJcblx0XHRzdGF0ZToge1xyXG5cdFx0XHRjaGVja2VkOiBbXSxcclxuXHRcdFx0aWRMaXN0OiBbXSxcclxuXHRcdFx0Y3VycmVudFBvcHVwRGF0YToge30sXHJcblx0XHRcdGNvbHVtbnM6IHt9LFxyXG5cdFx0XHRyb3dzTGlzdDogW10sXHJcblx0XHR9LFxyXG5cdFx0Z2V0dGVyczoge1xyXG5cdFx0XHRpc0NoZWNrZWQ6IHN0YXRlID0+IGlkID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gc3RhdGUuY2hlY2tlZC5pbmNsdWRlcyggaWQgKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Q3VycmVudDogc3RhdGUgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBzdGF0ZS5jdXJyZW50UG9wdXBEYXRhO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDb2x1bW5zOiBzdGF0ZSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlLmNvbHVtbnM7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtdXRhdGlvbnM6IHtcclxuXHRcdFx0c2V0Q29sdW1ucyggc3RhdGUsIGNvbHVtbnMgKSB7XHJcblx0XHRcdFx0c3RhdGUuY29sdW1ucyA9IGNvbHVtbnM7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldEN1cnJlbnQoIHN0YXRlLCBjdXJyZW50ICkge1xyXG5cdFx0XHRcdHN0YXRlLmN1cnJlbnRQb3B1cERhdGEgPSBjdXJyZW50O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGVhckN1cnJlbnQoIHN0YXRlICkge1xyXG5cdFx0XHRcdHN0YXRlLmN1cnJlbnRQb3B1cERhdGEgPSB7fTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkVG9TdG9yZSggc3RhdGUsIHsgaWQgfSApIHtcclxuXHRcdFx0XHRzdGF0ZS5pZExpc3QucHVzaCggaWQgKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkQ2hlY2tlZCggc3RhdGUsIHsgaWQgfSApIHtcclxuXHRcdFx0XHRzdGF0ZS5jaGVja2VkLnB1c2goIGlkICk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlbW92ZUFsbCggc3RhdGUgKSB7XHJcblx0XHRcdFx0c3RhdGUuY2hlY2tlZCA9IFtdO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhY3RpdmVBbGwoIHN0YXRlICkge1xyXG5cdFx0XHRcdHN0YXRlLmNoZWNrZWQgPSBbIC4uLnN0YXRlLmlkTGlzdCBdO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZW1vdmVDaGVja2VkKCBzdGF0ZSwgeyBpZCB9ICkge1xyXG5cdFx0XHRcdHN0YXRlLmNoZWNrZWQgPSBzdGF0ZS5jaGVja2VkLmZpbHRlciggY2hlY2tlZCA9PiAoXHJcblx0XHRcdFx0XHRjaGVja2VkICE9PSBpZFxyXG5cdFx0XHRcdCkgKTtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRhY3Rpb25zOiB7XHJcblx0XHRcdGNoYW5nZUNoZWNrZWQoIHsgY29tbWl0IH0sIHsgaWQsIGFjdGl2ZSB9ICkge1xyXG5cdFx0XHRcdGlmICggYWN0aXZlICkge1xyXG5cdFx0XHRcdFx0Y29tbWl0KCAnYWRkQ2hlY2tlZCcsIHsgaWQgfSApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb21taXQoICdyZW1vdmVDaGVja2VkJywgeyBpZCB9ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9ICksXHJcbn07XHJcblxyXG5jb25zdCB7IHJlbmRlckN1cnJlbnRQYWdlIH0gPSB3aW5kb3cuSmV0RkJBY3Rpb25zO1xyXG5cclxucmVuZGVyQ3VycmVudFBhZ2UoIFBheXBhbEVudHJpZXMsIG9wdGlvbnMgKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUE1QkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQTdCQTtBQXZCQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBdEJBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFFQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBRUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUMvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUExQkE7QUE0QkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQS9DQTtBQURBO0FBNERBO0FBRUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==