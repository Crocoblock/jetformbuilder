/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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

const {
  i18n
} = JetFBMixins;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'IsPROIcon',
  mixins: [i18n],
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabs_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/captcha */ "./admin/pages/jfb-settings/tabs/captcha/index.js");
/* harmony import */ var _tabs_mailchimp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/mailchimp */ "./admin/pages/jfb-settings/tabs/mailchimp/index.js");
/* harmony import */ var _tabs_getresponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/getresponse */ "./admin/pages/jfb-settings/tabs/getresponse/index.js");
/* harmony import */ var _tabs_payments_gateways__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/payments-gateways */ "./admin/pages/jfb-settings/tabs/payments-gateways/index.js");
/* harmony import */ var _tabs_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/options */ "./admin/pages/jfb-settings/tabs/options/index.js");
/* harmony import */ var _sidebar_SettingsSideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/SettingsSideBar */ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue");
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







const {
  applyFilters,
  doAction
} = wp.hooks;
const {
  SaveTabByAjax,
  GetIncoming,
  i18n
} = window.JetFBMixins;
const {
  CxVuiTabsPanel,
  CxVuiTabs,
  AlertsList,
  FormBuilderPage
} = JetFBComponents;
window.jfbEventBus = window.jfbEventBus || new Vue({});
const settingTabs = applyFilters('jet.fb.register.settings-page.tabs', [_tabs_options__WEBPACK_IMPORTED_MODULE_4__, _tabs_payments_gateways__WEBPACK_IMPORTED_MODULE_3__, _tabs_captcha__WEBPACK_IMPORTED_MODULE_0__, _tabs_mailchimp__WEBPACK_IMPORTED_MODULE_1__, _tabs_getresponse__WEBPACK_IMPORTED_MODULE_2__]);
const changeHash = hash => {
  window.location.hash = '#' + hash;
};
const getActiveTab = () => {
  const first = settingTabs[0].component.name;
  if (!window.location.hash) {
    changeHash(first);
    return [first];
  }
  let [hash, ...others] = window.location.hash.replace('#', '').split('__');
  let tab = settingTabs.find(tab => tab?.component?.name === hash);
  if (!tab) {
    changeHash(first);
    return [first];
  }
  changeHash([tab.component.name, ...others].join('__'));
  return [tab.component.name, others];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'jfb-settings',
  components: {
    AlertsList,
    CxVuiTabsPanel,
    CxVuiTabs,
    SettingsSideBar: _sidebar_SettingsSideBar__WEBPACK_IMPORTED_MODULE_5__["default"],
    FormBuilderPage
  },
  data() {
    const [tabSlug, others] = getActiveTab();
    return {
      activeTabSlug: tabSlug,
      activeTabInnerSlugs: others,
      tabs: settingTabs,
      loadingTab: {},
      isActivePro: false
    };
  },
  mixins: [SaveTabByAjax, GetIncoming, i18n],
  created() {
    this.isActivePro = this.getIncoming('is_active');
    jfbEventBus.$on('request-state', props => {
      const {
        state,
        slug
      } = props;
      this.$set(this.loadingTab, slug, state === 'begin');
    });
    jfbEventBus.$on('alert-click-thanks', ({
      self
    }) => {
      self.closeAlert();
    });
    jfbEventBus.$on('alert-click-check', ({
      self
    }) => {
      self.closeAlert();
    });
  },
  methods: {
    onChangeActiveTab(activeTab) {
      const currentUrl = new URL(document.URL);
      currentUrl.hash = '#' + activeTab;
      document.location.href = currentUrl.href;
      jfbEventBus.$emit('change-tab', {
        slug: activeTab
      });
    },
    onSaveTab(indexTab, tabSlug) {
      const currentTab = this.$refs.tabComponents[indexTab];
      this.saveByAjax(currentTab, tabSlug);
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/source.js");
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


const {
  SimpleWrapperComponent,
  ExternalLink
} = JetFBComponents;
const {
  i18n
} = JetFBMixins;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'friendly',
  components: {
    SimpleWrapperComponent,
    ExternalLink
  },
  mixins: [i18n],
  props: {
    incoming: {
      type: [Object, Array],
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      storage: {}
    };
  },
  created() {
    if (!Object.keys(this.incoming)?.length) {
      return;
    }
    this.storage = JSON.parse(JSON.stringify(this.incoming));
  },
  methods: {
    getRequestOnSave() {
      return {
        data: {
          ...this.storage
        }
      };
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/captcha/google/source.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'google',
  props: {
    incoming: {
      type: [Object, Array],
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      storage: {}
    };
  },
  created() {
    if (!Object.keys(this.incoming)?.length) {
      return;
    }
    this.storage = JSON.parse(JSON.stringify(this.incoming));
  },
  methods: {
    getRequestOnSave() {
      return {
        data: {
          ...this.storage
        }
      };
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/captcha/hCaptcha/source.js");
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


const {
  SimpleWrapperComponent,
  ExternalLink
} = JetFBComponents;
const {
  i18n
} = JetFBMixins;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hcaptcha',
  components: {
    SimpleWrapperComponent,
    ExternalLink
  },
  mixins: [i18n],
  props: {
    incoming: {
      type: [Object, Array],
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      storage: {}
    };
  },
  created() {
    if (!Object.keys(this.incoming)?.length) {
      return;
    }
    this.storage = JSON.parse(JSON.stringify(this.incoming));
  },
  methods: {
    getRequestOnSave() {
      return {
        data: {
          ...this.storage
        }
      };
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/captcha/turnstile/source.js");
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


const {
  i18n
} = JetFBMixins;
const {
  ExternalLink
} = JetFBComponents;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'turnstile',
  mixins: [i18n],
  components: {
    ExternalLink
  },
  props: {
    incoming: {
      type: [Object, Array],
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      storage: {}
    };
  },
  created() {
    if (!Object.keys(this.incoming)?.length) {
      return;
    }
    this.storage = JSON.parse(JSON.stringify(this.incoming));
  },
  methods: {
    getRequestOnSave() {
      return {
        data: {
          ...this.storage
        }
      };
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/gateways/paypal/source.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'paypal',
  props: {
    incoming: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      storage: {}
    };
  },
  created() {
    this.storage = JSON.parse(JSON.stringify(this.incoming));
  },
  methods: {
    getRequestOnSave() {
      return {
        data: {
          ...this.storage
        }
      };
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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

const {
  SideBarBoxes
} = JetFBComponents;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SettingsSideBar',
  components: {
    SideBarBoxes
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _captcha_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../captcha/google */ "./admin/pages/jfb-settings/captcha/google/index.js");
/* harmony import */ var _captcha_hCaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../captcha/hCaptcha */ "./admin/pages/jfb-settings/captcha/hCaptcha/index.js");
/* harmony import */ var _captcha_friendlyCaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../captcha/friendlyCaptcha */ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/index.js");
/* harmony import */ var _captcha_turnstile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../captcha/turnstile */ "./admin/pages/jfb-settings/captcha/turnstile/index.js");
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





const {
  applyFilters
} = wp.hooks;
const {
  SaveTabByAjax,
  GetIncoming
} = window.JetFBMixins;
const {
  CxVuiCollapseMini
} = window.JetFBComponents;
window.jfbEventBus = window.jfbEventBus || new Vue({});
const captchaTabs = applyFilters('jet.fb.register.captcha', [_captcha_google__WEBPACK_IMPORTED_MODULE_0__["default"], _captcha_hCaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], _captcha_friendlyCaptcha__WEBPACK_IMPORTED_MODULE_2__["default"], _captcha_turnstile__WEBPACK_IMPORTED_MODULE_3__["default"]]);
let requestFunc = () => {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'captcha-tab',
  props: {
    incoming: {
      type: Object,
      default: {}
    },
    innerSlugs: Array
  },
  components: {
    CxVuiCollapseMini
  },
  mixins: [SaveTabByAjax],
  data() {
    return {
      captcha: captchaTabs,
      storage: JSON.parse(JSON.stringify(this.incoming)),
      settings: JSON.parse(JSON.stringify(window.JetFBPageConfig['captcha-tab-config'])),
      activeGatewaysTabs: [],
      loadingGateways: {}
    };
  },
  created() {
    jfbEventBus.$on('request-state', props => {
      const {
        state,
        slug
      } = props;
      this.$set(this.loadingGateways, slug, state === 'begin');
    });
    jfbEventBus.$on('change-tab', function ({
      slug
    }) {
      if (slug !== this.$options.name) {
        return false;
      }
      window.location.hash = '#' + [this.$options.name, ...this.activeGatewaysTabs].join('__');
    }.bind(this));
    this.activeGatewaysTabs = this.innerSlugs;
    requestFunc = _.debounce(() => {
      this.saveByAjax(this, this.$options.name);
    }, 1000);
  },
  methods: {
    getIncomingCaptcha(slug) {
      var _this$incoming$slug;
      return (_this$incoming$slug = this.incoming?.[slug]) !== null && _this$incoming$slug !== void 0 ? _this$incoming$slug : {};
    },
    getTabTitle(tab) {
      const {
        title
      } = tab;
      if (title?.length) {
        return title;
      }
      const {
        name
      } = tab.component;
      const item = this.settings.find(({
        value
      }) => value === name);
      return item?.label || 'Undefined captcha title';
    },
    onChangeActive(isActive, tabName) {
      let [hash, ...others] = window.location.hash.replace('#', '').split('__');
      if (!isActive) {
        others = others.filter(gatewayTab => tabName !== gatewayTab || isActive);
      } else {
        others.push(tabName);
      }
      this.changeGatewaysTabs(others);
      window.location.hash = [this.$options.name, ...others].join('__');
    },
    changeGatewaysTabs(tabs) {
      this.activeGatewaysTabs = tabs;
    },
    isActive(tabName) {
      return Boolean(this.activeGatewaysTabs?.includes(tabName));
    },
    changeVal(name, value) {
      this.$set(this.storage, name, value);
      requestFunc();
    },
    onSaveGateway(indexTab, tabSlug) {
      const current = this.$refs.captcha[indexTab];
      this.saveByAjax(current, tabSlug);
    },
    getAjaxObject(currentTab, tabSlug) {
      const ajaxRequest = {
        url: window.ajaxurl,
        type: 'POST',
        dataType: 'json'
      };
      const current = currentTab.getRequestOnSave();
      ajaxRequest.data = {
        action: `jet_fb_save_tab__${this.$options.name}`,
        ...(tabSlug === this.$options.name ? current.data : {
          [tabSlug]: current.data
        })
      };
      if (window?.JetFBPageConfigPackage?.nonce) {
        ajaxRequest.data._nonce = window.JetFBPageConfigPackage.nonce;
      }
      return ajaxRequest;
    },
    getRequestOnSave() {
      return {
        data: {
          ...this.storage
        }
      };
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/tabs/getresponse/source.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'get-response-tab',
  props: {
    incoming: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      api_key: ''
    };
  },
  created() {
    this.api_key = this.incoming.api_key || '';
  },
  methods: {
    getRequestOnSave() {
      return {
        data: {
          api_key: this.api_key
        }
      };
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/tabs/mailchimp/source.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'mailchimp-tab',
  props: {
    incoming: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      api_key: ''
    };
  },
  created() {
    this.api_key = this.incoming.api_key || '';
  },
  methods: {
    getRequestOnSave() {
      return {
        data: {
          api_key: this.api_key
        }
      };
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/tabs/options/source.js");
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


const {
  SaveTabByAjax,
  i18n
} = window.JetFBMixins;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'options-tab',
  props: {
    incoming: {
      type: Object,
      default: {}
    }
  },
  mixins: [SaveTabByAjax, i18n],
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      storage: JSON.parse(JSON.stringify(this.incoming)),
      isLoading: false,
      loading: {},
      selectOptions: [{
        value: 'rest',
        label: 'Rest API'
      }, {
        value: 'admin_ajax',
        label: 'Admin Ajax'
      }, {
        value: 'self',
        label: 'Self'
      }]
    };
  },
  created() {
    jfbEventBus.$on('request-state', this.onChangeState.bind(this));
  },
  methods: {
    getRequestOnSave() {
      return {
        data: {
          ...this.storage
        }
      };
    },
    onChangeState({
      state,
      slug
    }) {
      if ('options-tab' !== slug) {
        return;
      }
      if ('end' === state) {
        this.loading = {};
      }
      this.$set(this, 'isLoading', state === 'begin');
    },
    changeVal(name, value) {
      if (this.isLoading) {
        return;
      }
      this.$set(this.storage, name, value);
      this.$set(this.loading, name, true);
      this.saveByAjax(this, this.$options.name);
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/tabs/payments-gateways/source.js");
/* harmony import */ var _gateways_paypal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gateways/paypal */ "./admin/pages/jfb-settings/gateways/paypal/index.js");
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



const {
  applyFilters
} = wp.hooks;
const {
  SaveTabByAjax,
  GetIncoming
} = window.JetFBMixins;
const {
  CxVuiCollapseMini
} = window.JetFBComponents;
window.jfbEventBus = window.jfbEventBus || new Vue({});
const gatewaysTabs = applyFilters('jet.fb.register.gateways', [_gateways_paypal__WEBPACK_IMPORTED_MODULE_1__]);
let requestFunc = () => {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'payments-gateways',
  props: {
    incoming: {
      type: Object,
      default() {
        return {};
      }
    },
    innerSlugs: Array
  },
  components: {
    CxVuiCollapseMini
  },
  mixins: [SaveTabByAjax, GetIncoming],
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      storage: JSON.parse(JSON.stringify(this.incoming)),
      gateways: gatewaysTabs,
      loadingGateways: {},
      activeGatewaysTabs: []
    };
  },
  created() {
    jfbEventBus.$on('request-state', props => {
      const {
        state,
        slug
      } = props;
      this.$set(this.loadingGateways, slug, state === 'begin');
    });
    jfbEventBus.$on('change-tab', function ({
      slug
    }) {
      if (slug !== this.$options.name) {
        return false;
      }
      window.location.hash = '#' + [this.$options.name, ...this.activeGatewaysTabs].join('__');
    }.bind(this));
    this.activeGatewaysTabs = this.innerSlugs;
    requestFunc = _.debounce(() => {
      this.saveByAjax(this, this.$options.name);
    }, 1000);
  },
  methods: {
    onChangeActive(isActive, tabName) {
      let [hash, ...others] = window.location.hash.replace('#', '').split('__');
      if (!isActive) {
        others = others.filter(gatewayTab => tabName !== gatewayTab || isActive);
      } else {
        others.push(tabName);
      }
      this.changeGatewaysTabs(others);
      window.location.hash = [this.$options.name, ...others].join('__');
    },
    changeGatewaysTabs(tabs) {
      this.activeGatewaysTabs = tabs;
    },
    isActive(tabName) {
      return Boolean(this.activeGatewaysTabs.length && this.activeGatewaysTabs.includes(tabName));
    },
    changeVal(name, value) {
      this.$set(this.storage, name, value);
      requestFunc();
    },
    onSaveGateway(indexTab, tabSlug) {
      const current = this.$refs.gateways[indexTab];
      this.saveByAjax(current, tabSlug);
    },
    getRequestOnSave() {
      return {
        data: {
          ...this.storage
        }
      };
    }
  }
});

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.jfb-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  margin-top: 1em;
}
.jfb-content-main {
  flex: 1;
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-settings/SettingsPage.vue","webpack://./../SettingsPage.vue"],"names":[],"mappings":"AAkKA;EACC,aAAA;EACA,eAAA;EACA,QAAA;EACA,eAAA;ACjKD;ADmKC;EACC,OAAA;ACjKF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.jfb-content {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tgap: 2em;\r\n\tmargin-top: 1em;\r\n\r\n\t&-main {\r\n\t\tflex: 1;\r\n\t}\r\n}\r\n",".jfb-content {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2em;\n  margin-top: 1em;\n}\n.jfb-content-main {\n  flex: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.jet-form-builder-page__banner.useful {
  padding: 20px 30px;
}
.jet-form-builder-page__panel.help {
  width: 100%;
}
@media (max-width: 1140px) {
.jet-form-builder-page__panel.help {
    width: 50%;
}
}
.jet-form-builder-page__panel.help .jet-form-builder-page__panel-content {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  border-top: 1px solid #DCDCDD;
  padding-top: 23px;
}
.jet-form-builder-page__panel.help .help-center-link {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 22px;
}
.jet-form-builder-page__panel.help .help-center-link:last-child {
  margin-bottom: 0;
}
.jet-form-builder-page__panel.help .help-center-link a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  color: #007CBA;
  text-decoration: none;
}
.jet-form-builder-page__panel.help .help-center-link a:hover {
  color: #066EA2;
  text-decoration: underline;
}
.jet-form-builder-page__panel.help .help-center-link a .help-center-link-icon {
  margin-right: 28px;
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue","webpack://./../SettingsSideBar.vue"],"names":[],"mappings":"AA+EC;EACC,kBAAA;AC9EF;ADiFC;EACC,WAAA;AC/EF;ADiFE;AAHD;IAIE,UAAA;AC9ED;AACF;ADgFE;EACC,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,6BAAA;EACA,iBAAA;AC9EH;ADiFE;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;AC/EH;ADiFG;EACC,gBAAA;AC/EJ;ADkFG;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,qBAAA;AChFJ;ADkFI;EACC,cAAA;EACA,0BAAA;AChFL;ADmFI;EACC,kBAAA;ACjFL","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n.jet-form-builder-page {\r\n\r\n\t&__banner.useful {\r\n\t\tpadding: 20px 30px;\r\n\t}\r\n\r\n\t&__panel.help {\r\n\t\twidth: 100%;\r\n\r\n\t\t@media (max-width: 1140px) {\r\n\t\t\twidth: calc(100% / 2);\r\n\t\t}\r\n\r\n\t\t.jet-form-builder-page__panel-content {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tmargin-top: 12px;\r\n\t\t\tborder-top: 1px solid #DCDCDD;\r\n\t\t\tpadding-top: 23px;\r\n\t\t}\r\n\r\n\t\t.help-center-link {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\tmargin-bottom: 22px;\r\n\r\n\t\t\t&:last-child {\r\n\t\t\t\tmargin-bottom: 0;\r\n\t\t\t}\r\n\r\n\t\t\ta {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: flex-start;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t\tline-height: 18px;\r\n\t\t\t\tcolor: #007CBA;\r\n\t\t\t\ttext-decoration: none;\r\n\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\tcolor: #066EA2;\r\n\t\t\t\t\ttext-decoration: underline;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.help-center-link-icon {\r\n\t\t\t\t\tmargin-right: 28px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",".jet-form-builder-page__banner.useful {\n  padding: 20px 30px;\n}\n.jet-form-builder-page__panel.help {\n  width: 100%;\n}\n@media (max-width: 1140px) {\n  .jet-form-builder-page__panel.help {\n    width: 50%;\n  }\n}\n.jet-form-builder-page__panel.help .jet-form-builder-page__panel-content {\n  display: flex;\n  flex-direction: column;\n  margin-top: 12px;\n  border-top: 1px solid #DCDCDD;\n  padding-top: 23px;\n}\n.jet-form-builder-page__panel.help .help-center-link {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 22px;\n}\n.jet-form-builder-page__panel.help .help-center-link:last-child {\n  margin-bottom: 0;\n}\n.jet-form-builder-page__panel.help .help-center-link a {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 14px;\n  line-height: 18px;\n  color: #007CBA;\n  text-decoration: none;\n}\n.jet-form-builder-page__panel.help .help-center-link a:hover {\n  color: #066EA2;\n  text-decoration: underline;\n}\n.jet-form-builder-page__panel.help .help-center-link a .help-center-link-icon {\n  margin-right: 28px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
span[data-v-14baa230] {
	background-color: #007CBA;
	padding: 0.1em 0.3em;
	text-transform: uppercase;
	border-radius: 3px;
	color: white;
	font-size: 12px;
	font-style: normal;
	font-weight: 700;
	line-height: 16px;
	letter-spacing: 0;
	text-align: left;
}
`, "",{"version":3,"sources":["webpack://./../admin/pages/jfb-settings/IsPROIcon.vue"],"names":[],"mappings":";AAoBA;CACA,yBAAA;CACA,oBAAA;CACA,yBAAA;CACA,kBAAA;CACA,YAAA;CACA,eAAA;CACA,kBAAA;CACA,gBAAA;CACA,iBAAA;CACA,iBAAA;CACA,gBAAA;AACA","sourcesContent":["<template>\r\n\t<span>{{ __( 'Pro', 'jet-form-builder' ) }}</span>\r\n</template>\r\n\r\n<script>\r\nconst { i18n } = JetFBMixins;\r\n\r\nexport default {\r\n\tname: 'IsPROIcon',\r\n\tmixins: [ i18n ],\r\n\tprops: {\r\n\t\tisActive: {\r\n\t\t\ttype: Boolean,\r\n\t\t\tdefault: false,\r\n\t\t},\r\n\t},\r\n};\r\n</script>\r\n\r\n<style scoped>\r\nspan {\r\n\tbackground-color: #007CBA;\r\n\tpadding: 0.1em 0.3em;\r\n\ttext-transform: uppercase;\r\n\tborder-radius: 3px;\r\n\tcolor: white;\r\n\tfont-size: 12px;\r\n\tfont-style: normal;\r\n\tfont-weight: 700;\r\n\tline-height: 16px;\r\n\tletter-spacing: 0;\r\n\ttext-align: left;\r\n}\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._v(_vm._s(_vm.__( 'Pro', 'jet-form-builder' )))])}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('FormBuilderPage',{attrs:{"title":_vm.__( 'JetFormBuilder Settings', 'jet-form-builder' )}},[_c('div',{staticClass:"jfb-content"},[_c('AlertsList'),_vm._v(" "),_c('div',{staticClass:"jfb-content-main"},[_c('div',{staticClass:"cx-vui-panel"},[_c('CxVuiTabs',{attrs:{"in-panel":false,"value":_vm.activeTabSlug,"layout":"vertical"},on:{"input":_vm.onChangeActiveTab}},_vm._l((_vm.tabs),function(ref,index){
var displayButton = ref.displayButton; if ( displayButton === void 0 ) displayButton = true;
var rest = objectWithoutProperties( ref, ["displayButton"] );
var tab = rest;
return _c('CxVuiTabsPanel',{key:tab.component.name,attrs:{"name":tab.component.name,"label":tab.title,"disabled":tab.disabled,"icon":tab.icon},scopedSlots:_vm._u([(tab.component.render)?{key:"default",fn:function(){return [_c('keep-alive',[_c(tab.component,{ref:"tabComponents",refInFor:true,tag:"component",attrs:{"incoming":_vm.getIncoming( tab.component.name ),"inner-slugs":_vm.activeTabInnerSlugs || []}})],1),_vm._v(" "),(displayButton)?_c('cx-vui-button',{attrs:{"button-style":"accent","loading":_vm.loadingTab[ tab.component.name ]},on:{"click":function($event){return _vm.onSaveTab( index, tab.component.name )}},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('span',[_vm._v("Save")])]},proxy:true}],null,true)}):_vm._e()]},proxy:true}:null],null,true)})}),1)],1)]),_vm._v(" "),_c('SettingsSideBar')],1)])}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('SimpleWrapperComponent',{attrs:{"element-id":"friendly_key"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._v(_vm._s(_vm.label.key))]},proxy:true},{key:"description",fn:function(){return [_c('p',{staticClass:"fb-description"},[_vm._v("\n\t\t\t\t"+_vm._s(_vm.__(
				'It can be found on the page listing your Applications. Or follow this',
				'jet-form-builder'
			) + ' ')+"\n\t\t\t\t"),_c('ExternalLink',{attrs:{"href":"https://docs.friendlycaptcha.com/#/installation?id=_1-generating-a-sitekey"}},[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.__( 'guide', 'jet-form-builder' ))+"\n\t\t\t\t")])],1)]},proxy:true},{key:"default",fn:function(){return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.storage.key),expression:"storage.key"}],staticClass:"cx-vui-input size-fullwidth",attrs:{"id":"friendly_key","type":"text"},domProps:{"value":(_vm.storage.key)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.storage, "key", $event.target.value)}}})]},proxy:true}])}),_vm._v(" "),_c('cx-vui-input',{attrs:{"element-id":"friendly_secret","label":_vm.label.secret,"description":_vm.__(
			'It can be found on the page listing your API keys.',
			'jet-form-builder'
		),"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.secret),callback:function ($$v) {_vm.$set(_vm.storage, "secret", $$v)},expression:"storage.secret"}})],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-input',{attrs:{"label":_vm.label.key,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.key),callback:function ($$v) {_vm.$set(_vm.storage, "key", $$v)},expression:"storage.key"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"label":_vm.label.secret,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.secret),callback:function ($$v) {_vm.$set(_vm.storage, "secret", $$v)},expression:"storage.secret"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"type":"number","min":0,"max":1,"step":0.1,"label":_vm.label.threshold,"description":_vm.help.threshold,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.threshold),callback:function ($$v) {_vm.$set(_vm.storage, "threshold", $$v)},expression:"storage.threshold"}}),_vm._v(" "),_c('p',{staticClass:"fb-description"},[_vm._v(_vm._s(_vm.help.apiPref)+" "),_c('a',{attrs:{"href":_vm.help.apiLink,"target":"_blank"}},[_vm._v(_vm._s(_vm.help.apiLinkLabel))])])],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4 ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('SimpleWrapperComponent',{attrs:{"element-id":"hcaptcha_key"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._v(_vm._s(_vm.label.key))]},proxy:true},{key:"description",fn:function(){return [_c('p',{staticClass:"fb-description"},[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.__(
					'You can find it on this page in the first column of Sitekey.',
					'jet-form-builder'
				) + ' ')+"\n\t\t\t\t\t"),_c('ExternalLink',{attrs:{"href":"https://dashboard.hcaptcha.com/sites"}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.__( 'Go to the dashboard of sites', 'jet-form-builder' ))+"\n\t\t\t\t\t")])],1)]},proxy:true},{key:"default",fn:function(){return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.storage.key),expression:"storage.key"}],staticClass:"cx-vui-input size-fullwidth",attrs:{"id":"hcaptcha_key","type":"text"},domProps:{"value":(_vm.storage.key)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.storage, "key", $event.target.value)}}})]},proxy:true}])}),_vm._v(" "),_c('SimpleWrapperComponent',{attrs:{"element-id":"hcaptcha_secret"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._v(_vm._s(_vm.label.secret))]},proxy:true},{key:"description",fn:function(){return [_c('p',{staticClass:"fb-description"},[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.__(
					"You can find it on the settings page,\nthis will be the first field.",
					'jet-form-builder'
				) + ' ')+"\n\t\t\t\t\t"),_c('ExternalLink',{attrs:{"href":"https://dashboard.hcaptcha.com/settings"}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.__( 'Go to the Settings page', 'jet-form-builder' ))+"\n\t\t\t\t\t")])],1)]},proxy:true},{key:"default",fn:function(){return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.storage.secret),expression:"storage.secret"}],staticClass:"cx-vui-input size-fullwidth",attrs:{"id":"hcaptcha_secret","type":"text"},domProps:{"value":(_vm.storage.secret)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.storage, "secret", $event.target.value)}}})]},proxy:true}])})],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-input',{attrs:{"element-id":"turnstile_key","label":_vm.label.key,"description":_vm.__(
			'Read the hint to the Secret Key field',
			'jet-form-builder'
		),"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.key),callback:function ($$v) {_vm.$set(_vm.storage, "key", $$v)},expression:"storage.key"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"element-id":"turnstile_secret","label":_vm.label.secret,"description":_vm.__(
			'You can find both keys on your Turnstile Site settings page',
			'jet-form-builder'
		),"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.secret),callback:function ($$v) {_vm.$set(_vm.storage, "secret", $$v)},expression:"storage.secret"}}),_vm._v(" "),_c('p',{staticClass:"fb-description"},[_vm._v("\n\t\t"+_vm._s(_vm.__( 'Didn\'t find it? Here is', 'jet-form-builder' ) + ' ')+"\n\t\t"),_c('ExternalLink',{attrs:{"href":"https://developers.cloudflare.com/turnstile/get-started/#get-a-sitekey-and-secret-key"}},[_vm._v("\n\t\t\t"+_vm._s(_vm.__( 'a more detailed description', 'jet-form-builder' ))+"\n\t\t")])],1)],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-input',{attrs:{"label":_vm.label.client_id,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.client_id),callback:function ($$v) {_vm.$set(_vm.storage, "client_id", $$v)},expression:"storage.client_id"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"label":_vm.label.secret,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.secret),callback:function ($$v) {_vm.$set(_vm.storage, "secret", $$v)},expression:"storage.secret"}})],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SideBarBoxes',{scopedSlots:_vm._u([{key:"icon-help",fn:function(){return [_c('svg',{attrs:{"width":"14","height":"21","viewBox":"0 0 14 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M5.25 21H8.75V17.5H5.25V21ZM7 0C3.1325 0 0 3.1325 0 7H3.5C3.5 5.075 5.075 3.5 7 3.5C8.925 3.5 10.5 5.075 10.5 7C10.5 10.5 5.25 10.0625 5.25 15.75H8.75C8.75 11.8125 14 11.375 14 7C14 3.1325 10.8675 0 7 0Z","fill":"#7B7E81"}})])]},proxy:true},{key:"content-help",fn:function(box){return [_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_knowledge,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"14","height":"16","viewBox":"0 0 14 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M13.458 11.2552L13.458 1.4115C13.458 1.03064 13.1357 0.708374 12.7549 0.708374L3.14551 0.708374C1.59277 0.708374 0.333008 1.96814 0.333008 3.52087L0.333008 12.8959C0.333008 14.4486 1.59277 15.7084 3.14551 15.7084L12.7549 15.7084C13.1357 15.7084 13.458 15.4154 13.458 15.0052L13.458 14.5365C13.458 14.3314 13.3408 14.1263 13.1943 14.0092C13.0479 13.5404 13.0479 12.2513 13.1943 11.8119C13.3408 11.6947 13.458 11.4896 13.458 11.2552ZM4.08301 4.63416C4.08301 4.54626 4.1416 4.45837 4.25879 4.45837L10.4697 4.45837C10.5576 4.45837 10.6455 4.54626 10.6455 4.63416L10.6455 5.22009C10.6455 5.33728 10.5576 5.39587 10.4697 5.39587L4.25879 5.39587C4.1416 5.39587 4.08301 5.33728 4.08301 5.22009L4.08301 4.63416ZM4.08301 6.50916C4.08301 6.42127 4.1416 6.33337 4.25879 6.33337L10.4697 6.33337C10.5576 6.33337 10.6455 6.42127 10.6455 6.50916L10.6455 7.09509C10.6455 7.21228 10.5576 7.27087 10.4697 7.27087L4.25879 7.27087C4.1416 7.27087 4.08301 7.21228 4.08301 7.09509L4.08301 6.50916ZM11.4951 13.8334L3.14551 13.8334C2.61816 13.8334 2.20801 13.4232 2.20801 12.8959C2.20801 12.3978 2.61816 11.9584 3.14551 11.9584L11.4951 11.9584C11.4365 12.4857 11.4365 13.3353 11.4951 13.8334Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_knowledge))])])]),_vm._v(" "),_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_community,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.5913 8.04564C15.5913 3.87728 12.214 0.5 8.04564 0.5C3.87728 0.5 0.5 3.87728 0.5 8.04564C0.5 11.8185 3.23834 14.9523 6.85903 15.5L6.85903 10.2363L4.94219 10.2363L4.94219 8.04564L6.85903 8.04564L6.85903 6.40264C6.85903 4.51623 7.98479 3.45132 9.68864 3.45132C10.5406 3.45132 11.3925 3.60345 11.3925 3.60345L11.3925 5.45943L10.4493 5.45943C9.50609 5.45943 9.20183 6.03753 9.20183 6.64604L9.20183 8.04564L11.3012 8.04564L10.9665 10.2363L9.20183 10.2363L9.20183 15.5C12.8225 14.9523 15.5913 11.8185 15.5913 8.04564Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_community))])])]),_vm._v(" "),_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_support,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"15","height":"18","viewBox":"0 0 15 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M7.58333 0.666687C3.675 0.666687 0.5 3.84169 0.5 7.75002C0.5 11.6584 3.675 14.8334 7.58333 14.8334H8V17.3334C12.05 15.3834 14.6667 11.5 14.6667 7.75002C14.6667 3.84169 11.4917 0.666687 7.58333 0.666687ZM8.41667 12.75H6.75V11.0834H8.41667V12.75ZM8.41667 9.83335H6.75C6.75 7.12502 9.25 7.33335 9.25 5.66669C9.25 4.75002 8.5 4.00002 7.58333 4.00002C6.66667 4.00002 5.91667 4.75002 5.91667 5.66669H4.25C4.25 3.82502 5.74167 2.33335 7.58333 2.33335C9.425 2.33335 10.9167 3.82502 10.9167 5.66669C10.9167 7.75002 8.41667 7.95835 8.41667 9.83335Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_support))])])]),_vm._v(" "),_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_git,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.976 0C5.86071 0.000265156 3.83214 0.840676 2.33641 2.33641C0.840676 3.83214 0.000265156 5.86071 0 7.976C0 11.498 2.3 14.483 5.431 15.56C5.823 15.609 5.969 15.364 5.969 15.168V13.798C3.768 14.288 3.279 12.722 3.279 12.722C2.936 11.792 2.398 11.547 2.398 11.547C1.664 11.058 2.446 11.058 2.446 11.058C3.229 11.107 3.67 11.89 3.67 11.89C4.404 13.113 5.529 12.77 5.97 12.575C6.018 12.037 6.263 11.695 6.459 11.499C4.697 11.303 2.838 10.618 2.838 7.535C2.838 6.655 3.131 5.969 3.67 5.382C3.62 5.235 3.327 4.404 3.768 3.327C3.768 3.327 4.453 3.131 5.969 4.159C6.605 3.963 7.291 3.914 7.976 3.914C8.661 3.914 9.346 4.012 9.982 4.159C11.499 3.132 12.184 3.327 12.184 3.327C12.624 4.404 12.33 5.235 12.281 5.431C12.8199 6.01808 13.1171 6.7871 13.113 7.584C13.113 10.667 11.253 11.303 9.493 11.499C9.786 11.743 10.031 12.232 10.031 12.966V15.168C10.031 15.364 10.177 15.608 10.569 15.56C12.155 15.0248 13.5327 14.0046 14.5073 12.6436C15.4818 11.2827 16.004 9.64989 16 7.976C15.951 3.572 12.38 0 7.976 0Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_git))])])])]}}])})}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.captcha),function(tab,index){return _c('CxVuiCollapseMini',{key:tab.component.name,attrs:{"with-panel":"","icon":tab.icon,"label":_vm.getTabTitle( tab ),"disabled":tab.disabled,"initial-active":_vm.isActive( tab.component.name )},on:{"change":function($event){return _vm.onChangeActive( $event, tab.component.name )}}},[_c('keep-alive',[_c(tab.component,{ref:"captcha",refInFor:true,tag:"component",attrs:{"incoming":_vm.getIncomingCaptcha( tab.component.name )}})],1),_vm._v(" "),_c('cx-vui-button',{attrs:{"button-style":"accent","loading":_vm.loadingGateways[ tab.component.name ]},on:{"click":function($event){return _vm.onSaveGateway( index, tab.component.name )}}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("Save")])])],1)}),1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cx-vui-input',{attrs:{"label":_vm.label.api_key,"wrapper-css":[ 'equalwidth' ],"description":((_vm.help.apiPref) + " <a href=\"" + (_vm.help.apiLink) + "\" target=\"_blank\">" + (_vm.help.apiLinkLabel) + "</a>"),"size":'fullwidth'},model:{value:(_vm.api_key),callback:function ($$v) {_vm.api_key=$$v},expression:"api_key"}})}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cx-vui-input',{attrs:{"label":_vm.label.api_key,"wrapper-css":[ 'equalwidth' ],"description":((_vm.help.apiPref) + " <a href=\"" + (_vm.help.apiLink) + "\" target=\"_blank\">" + (_vm.help.apiLinkLabel) + "</a>"),"size":'fullwidth'},model:{value:(_vm.api_key),callback:function ($$v) {_vm.api_key=$$v},expression:"api_key"}})}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('cx-vui-switcher',{attrs:{"name":"enable_dev_mode","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.enable_dev_mode ? ((_vm.label.enable_dev_mode) + " (loading...)") : _vm.label.enable_dev_mode,"description":_vm.help.enable_dev_mode,"value":_vm.storage.hasOwnProperty( 'enable_dev_mode' ) ? _vm.storage.enable_dev_mode : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'enable_dev_mode', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"clear_on_uninstall","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.clear_on_uninstall ? ((_vm.label.clear_on_uninstall) + " (loading...)") : _vm.label.clear_on_uninstall,"description":_vm.help.clear_on_uninstall,"value":_vm.storage.hasOwnProperty( 'clear_on_uninstall' ) ? _vm.storage.clear_on_uninstall : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'clear_on_uninstall', $event )}}}),_vm._v(" "),_c('cx-vui-select',{attrs:{"name":"ssr_validation_method","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":_vm.loading.ssr_validation_method ? ((_vm.label.ssr_validation_method) + " (loading...)") : _vm.label.ssr_validation_method,"description":_vm.help.ssr_validation_method,"value":_vm.storage.hasOwnProperty( 'ssr_validation_method' ) ? _vm.storage.ssr_validation_method : 'rest',"options-list":_vm.selectOptions,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'ssr_validation_method', $event )}}}),_vm._v(" "),_c('cx-vui-component-wrapper',{attrs:{"label":_vm.__( 'Form Accessibility', 'jet-form-builder' ),"wrapper-css":[ 'equalwidth' ]}}),_vm._v(" "),_c('div',{staticClass:"cx-vui-inner-panel"},[_c('cx-vui-switcher',{attrs:{"name":"disable_next_button","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.disable_next_button ? ((_vm.label.disable_next_button) + " (loading...)") : _vm.label.disable_next_button,"description":_vm.help.disable_next_button,"value":_vm.storage.hasOwnProperty( 'disable_next_button' ) ? _vm.storage.disable_next_button : true,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'disable_next_button', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"scroll_on_next","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.scroll_on_next ? ((_vm.label.scroll_on_next) + " (loading...)") : _vm.label.scroll_on_next,"description":_vm.help.scroll_on_next,"value":_vm.storage.hasOwnProperty( 'scroll_on_next' ) ? _vm.storage.scroll_on_next : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'scroll_on_next', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"auto_focus","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.auto_focus ? ((_vm.label.auto_focus) + " (loading...)") : _vm.label.auto_focus,"description":_vm.help.auto_focus,"value":_vm.storage.hasOwnProperty( 'auto_focus' ) ? _vm.storage.auto_focus : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'auto_focus', $event )}}})],1)],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-switcher',{attrs:{"name":"use_gateways","wrapper-css":[ 'equalwidth' ],"label":_vm.label.use_gateways,"description":_vm.help.use_gateways,"value":_vm.storage.use_gateways},on:{"input":function($event){return _vm.changeVal( 'use_gateways', $event )}}}),_vm._v(" "),(_vm.storage.use_gateways)?_c('cx-vui-switcher',{attrs:{"name":"enable_test_mode","wrapper-css":[ 'equalwidth' ],"description":_vm.help.enable_test_mode,"label":_vm.label.enable_test_mode,"value":_vm.storage.enable_test_mode},on:{"input":function($event){return _vm.changeVal( 'enable_test_mode', $event )}}}):_vm._e(),_vm._v(" "),(_vm.storage.use_gateways)?[_c('div',{staticClass:"cx-vui-inner-panel"},_vm._l((_vm.gateways),function(tab,index){return _c('CxVuiCollapseMini',{key:tab.component.name,attrs:{"with-panel":"","icon":tab.icon,"label":tab.title,"disabled":tab.disabled,"initial-active":_vm.isActive( tab.component.name )},on:{"change":function($event){return _vm.onChangeActive( $event, tab.component.name )}}},[_c('keep-alive',[_c(tab.component,{ref:"gateways",refInFor:true,tag:"component",attrs:{"incoming":_vm.getIncoming( tab.component.name )}})],1),_vm._v(" "),_c('cx-vui-button',{attrs:{"button-style":"accent","loading":_vm.loadingGateways[ tab.component.name ]},on:{"click":function($event){return _vm.onSaveGateway( index, tab.component.name )}}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("Save")])])],1)}),1)]:_vm._e()],2)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \************************************************************************/
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

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("7fe085f7", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("58014a11", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("b710ecd8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../../node_modules/vue-style-loader/lib/addStylesClient.js":
/*!******************************************************************!*\
  !*** ../../node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "../../node_modules/vue-style-loader/lib/listToStyles.js");
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

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
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
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
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

/***/ "../../node_modules/vue-style-loader/lib/listToStyles.js":
/*!***************************************************************!*\
  !*** ../../node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***************************************************************/
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


/***/ }),

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue":
/*!************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true */ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true");
/* harmony import */ var _IsPROIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IsPROIcon.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css */ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IsPROIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14baa230",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/IsPROIcon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true":
/*!******************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true");


/***/ }),

/***/ "./admin/pages/jfb-settings/SettingsPage.vue":
/*!***************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsPage.vue?vue&type=template&id=4b43500e */ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e");
/* harmony import */ var _SettingsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsPage.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js");
/* harmony import */ var _SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss */ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SettingsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__.render,
  _SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/SettingsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss":
/*!************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e":
/*!*********************************************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=template&id=4b43500e */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e");


/***/ }),

/***/ "./admin/pages/jfb-settings/addons-tabs.js":
/*!*************************************************!*\
  !*** ./admin/pages/jfb-settings/addons-tabs.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _proAddons_hubspot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proAddons/hubspot */ "./admin/pages/jfb-settings/proAddons/hubspot.js");
/* harmony import */ var _proAddons_addressAutocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proAddons/addressAutocomplete */ "./admin/pages/jfb-settings/proAddons/addressAutocomplete.js");
/* harmony import */ var _proAddons_convertkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proAddons/convertkit */ "./admin/pages/jfb-settings/proAddons/convertkit.js");
/* harmony import */ var _proAddons_mailerlite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proAddons/mailerlite */ "./admin/pages/jfb-settings/proAddons/mailerlite.js");
/* harmony import */ var _proAddons_moosend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proAddons/moosend */ "./admin/pages/jfb-settings/proAddons/moosend.js");
/* harmony import */ var _proGateways_stripe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proGateways/stripe */ "./admin/pages/jfb-settings/proGateways/stripe.js");






const {
  addFilter
} = wp.hooks;
const addons = [_proAddons_addressAutocomplete__WEBPACK_IMPORTED_MODULE_1__["default"], _proAddons_hubspot__WEBPACK_IMPORTED_MODULE_0__["default"], _proAddons_convertkit__WEBPACK_IMPORTED_MODULE_2__["default"], _proAddons_mailerlite__WEBPACK_IMPORTED_MODULE_3__["default"], _proAddons_moosend__WEBPACK_IMPORTED_MODULE_4__["default"]];
const gateways = [_proGateways_stripe__WEBPACK_IMPORTED_MODULE_5__["default"]];
const getModulesNames = modules => modules.map(item => item.component.name);
const run = () => {
  addFilter('jet.fb.register.settings-page.tabs', 'jet-form-builder', modules => {
    const names = getModulesNames(modules);
    for (const addon of addons) {
      if (names.includes(addon.component.name)) {
        continue;
      }
      modules.push(addon);
    }
    return modules;
  }, 1000);
  addFilter('jet.fb.register.gateways', 'jet-form-builder', modules => {
    const names = getModulesNames(modules);
    for (const gateway of gateways) {
      if (names.includes(gateway.component.name)) {
        continue;
      }
      modules.push(gateway);
    }
    return modules;
  }, 1000);
};
if (!window?.JetFBPageConfig?.is_active) {
  run();
}

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue":
/*!******************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friendlyCaptcha.vue?vue&type=template&id=054f030e */ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e");
/* harmony import */ var _friendlyCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friendlyCaptcha.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _friendlyCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__.render,
  _friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./friendlyCaptcha.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e":
/*!************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./friendlyCaptcha.vue?vue&type=template&id=054f030e */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e");


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/index.js":
/*!*******************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _friendlyCaptcha_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friendlyCaptcha.vue */ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue");

const component = _friendlyCaptcha_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component
});

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/source.js":
/*!********************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/source.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
const {
  __
} = wp.i18n;
const label = {
  key: __('Site Key', 'jet-form-builder'),
  secret: __('Secret Key', 'jet-form-builder')
};


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/index.js":
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reCAPTCHAv3_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reCAPTCHAv3.vue */ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue");

const component = _reCAPTCHAv3_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component
});

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue":
/*!*****************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reCAPTCHAv3.vue?vue&type=template&id=638ceb7f */ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f");
/* harmony import */ var _reCAPTCHAv3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reCAPTCHAv3.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reCAPTCHAv3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__.render,
  _reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reCAPTCHAv3.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f":
/*!***********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reCAPTCHAv3.vue?vue&type=template&id=638ceb7f */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f");


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/google/source.js":
/*!***********************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/source.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   help: () => (/* binding */ help),
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
const {
  __
} = wp.i18n;
const label = {
  key: __('Site Key', 'jet-form-builder'),
  secret: __('Secret Key', 'jet-form-builder'),
  threshold: __('Score Threshold', 'jet-form-builder')
};
const help = {
  threshold: __(`It should be a value between 0 and 1, default 0.5 (1.0 is very likely a good interaction, 0.0 is very likely a bot).`, 'jet-form-builder'),
  apiPref: __('Register reCAPTCHA v3 keys', 'jet-form-builder'),
  apiLinkLabel: __('here', 'jet-form-builder'),
  apiLink: 'https://www.google.com/recaptcha/admin/create'
};


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue":
/*!****************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hCaptcha.vue?vue&type=template&id=34567fa4 */ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4");
/* harmony import */ var _hCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hCaptcha.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__.render,
  _hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hCaptcha.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4":
/*!**********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hCaptcha.vue?vue&type=template&id=34567fa4 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4");


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/index.js":
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hCaptcha_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hCaptcha.vue */ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue");

const component = _hCaptcha_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component
});

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/source.js":
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/source.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
const {
  __
} = wp.i18n;
const label = {
  key: __('Site Key', 'jet-form-builder'),
  secret: __('Secret Key', 'jet-form-builder')
};


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/index.js":
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turnstile_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turnstile.vue */ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue");

const component = _turnstile_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component
});

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/source.js":
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/source.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
const {
  __
} = wp.i18n;
const label = {
  key: __('Site Key', 'jet-form-builder'),
  secret: __('Secret Key', 'jet-form-builder')
};


/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue":
/*!******************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./turnstile.vue?vue&type=template&id=5a9ffa38 */ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38");
/* harmony import */ var _turnstile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turnstile.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _turnstile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__.render,
  _turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/turnstile/turnstile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./turnstile.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38":
/*!************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./turnstile.vue?vue&type=template&id=5a9ffa38 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38");


/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue":
/*!****************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaypalTab.vue?vue&type=template&id=8eff804c */ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c");
/* harmony import */ var _PaypalTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaypalTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaypalTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__.render,
  _PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c":
/*!**********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalTab.vue?vue&type=template&id=8eff804c */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c");


/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/index.js":
/*!***********************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _PaypalTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaypalTab.vue */ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue");

const {
  __
} = wp.i18n;
const title = __('PayPal Gateway API', 'jet-form-builder');
const component = _PaypalTab_vue__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./admin/pages/jfb-settings/gateways/paypal/source.js":
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/source.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   help: () => (/* binding */ help),
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
const {
  __
} = wp.i18n;
const label = {
  client_id: __('Client ID', 'jet-form-builder'),
  secret: __('Secret Key', 'jet-form-builder')
};
const help = {};


/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/addressAutocomplete.js":
/*!*******************************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/addressAutocomplete.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IsPROIcon */ "./admin/pages/jfb-settings/IsPROIcon.vue");

const {
  __
} = wp.i18n;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: __('Address Autocomplete', 'jet-form-builder'),
  component: {
    name: 'jfb-address-tab'
  },
  disabled: true,
  icon: _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/convertkit.js":
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/convertkit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IsPROIcon */ "./admin/pages/jfb-settings/IsPROIcon.vue");

const {
  __
} = wp.i18n;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: __('ConvertKit API', 'jet-form-builder'),
  component: {
    name: 'convert-kit-tab'
  },
  disabled: true,
  icon: _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/hubspot.js":
/*!*******************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/hubspot.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IsPROIcon */ "./admin/pages/jfb-settings/IsPROIcon.vue");

const {
  __
} = wp.i18n;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: __('HubSpot API', 'jet-form-builder'),
  component: {
    name: 'hubspot'
  },
  disabled: true,
  icon: _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/mailerlite.js":
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/mailerlite.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IsPROIcon */ "./admin/pages/jfb-settings/IsPROIcon.vue");

const {
  __
} = wp.i18n;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: __('MailerLite API', 'jet-form-builder'),
  component: {
    name: 'mailer-lite-tab'
  },
  disabled: true,
  icon: _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./admin/pages/jfb-settings/proAddons/moosend.js":
/*!*******************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/moosend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IsPROIcon */ "./admin/pages/jfb-settings/IsPROIcon.vue");

const {
  __
} = wp.i18n;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: __('Moosend API', 'jet-form-builder'),
  component: {
    name: 'moosend'
  },
  disabled: true,
  icon: _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./admin/pages/jfb-settings/proGateways/stripe.js":
/*!********************************************************!*\
  !*** ./admin/pages/jfb-settings/proGateways/stripe.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IsPROIcon */ "./admin/pages/jfb-settings/IsPROIcon.vue");

const {
  __
} = wp.i18n;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: __('Stripe Gateway API', 'jet-form-builder'),
  component: {
    name: 'stripe'
  },
  disabled: true,
  icon: _IsPROIcon__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue":
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsSideBar.vue?vue&type=template&id=4254b64c */ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c");
/* harmony import */ var _SettingsSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsSideBar.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js");
/* harmony import */ var _SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss */ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SettingsSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__.render,
  _SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/sidebar/SettingsSideBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss":
/*!***********************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c":
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=template&id=4254b64c */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue":
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptchaTab.vue?vue&type=template&id=62b36e55 */ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55");
/* harmony import */ var _CaptchaTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaptchaTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CaptchaTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__.render,
  _CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaptchaTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55":
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaptchaTab.vue?vue&type=template&id=62b36e55 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/captcha/index.js":
/*!********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   displayButton: () => (/* binding */ displayButton),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _CaptchaTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptchaTab.vue */ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue");

const {
  __
} = wp.i18n;
const title = __('Captcha Settings', 'jet-form-builder');
const component = _CaptchaTab_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
const displayButton = false;


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue":
/*!**********************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetResponseTab.vue?vue&type=template&id=054dbebb */ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb");
/* harmony import */ var _GetResponseTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetResponseTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GetResponseTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__.render,
  _GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetResponseTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb":
/*!****************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetResponseTab.vue?vue&type=template&id=054dbebb */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/index.js":
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _GetResponseTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetResponseTab.vue */ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue");

const {
  __
} = wp.i18n;
const title = __('GetResponse API', 'jet-form-builder');
const component = _GetResponseTab_vue__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/getresponse/source.js":
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/source.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   help: () => (/* binding */ help),
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
const {
  __
} = wp.i18n;
const label = {
  api_key: __('API Key', 'jet-form-builder')
};
const help = {
  apiPref: __('How to obtain your GetResponse API Key? More info', 'jet-form-builder'),
  apiLinkLabel: __('here', 'jet-form-builder'),
  apiLink: 'https://app.getresponse.com/api'
};


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue":
/*!******************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailChimpTab.vue?vue&type=template&id=783c3dc9 */ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9");
/* harmony import */ var _MailChimpTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailChimpTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MailChimpTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__.render,
  _MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailChimpTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9":
/*!************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailChimpTab.vue?vue&type=template&id=783c3dc9 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/index.js":
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _MailChimpTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailChimpTab.vue */ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue");

const {
  __
} = wp.i18n;
const title = __('MailChimp API', 'jet-form-builder');
const component = _MailChimpTab_vue__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/source.js":
/*!***********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/source.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   help: () => (/* binding */ help),
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
const {
  __
} = wp.i18n;
const label = {
  api_key: __('API Key', 'jet-form-builder')
};
const help = {
  apiPref: __('How to obtain your MailChimp API Key? More info', 'jet-form-builder'),
  apiLinkLabel: __('here', 'jet-form-builder'),
  apiLink: 'https://mailchimp.com/help/about-api-keys/'
};


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue":
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionsTab.vue?vue&type=template&id=9dc42de6 */ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6");
/* harmony import */ var _OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionsTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__.render,
  _OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/options/OptionsTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionsTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6":
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_template_id_9dc42de6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionsTab.vue?vue&type=template&id=9dc42de6 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/index.js":
/*!********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   displayButton: () => (/* binding */ displayButton),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _OptionsTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionsTab.vue */ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue");

const {
  __
} = wp.i18n;
const title = __('Options', 'jet-form-builder');
const component = _OptionsTab_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
const displayButton = false;


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/options/source.js":
/*!*********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/source.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   help: () => (/* binding */ help),
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const label = {
  enable_dev_mode: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Dev-Mode', 'jet-form-builder'),
  disable_next_button: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disable "Next" button', 'jet-form-builder'),
  clear_on_uninstall: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Clear plugin data after the uninstall', 'jet-form-builder'),
  scroll_on_next: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scroll to the top on page change', 'jet-form-builder'),
  auto_focus: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Automatic focus', 'jet-form-builder'),
  ssr_validation_method: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Server side validation method', 'jet-form-builder')
};
const help = {
  enable_dev_mode: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('With developer mode enabled, errors from the form will be saved.', 'jet-form-builder'),
  disable_next_button: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`If this option is active, the Next button in a multi-step form won't become clickable until all the required fields are completed.`, 'jet-form-builder'),
  clear_on_uninstall: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`If this option is active, when the plugin is deleted, all custom sql-tables, all options and files will also be deleted. In particular, those that were uploaded using Media Field.`, 'jet-form-builder'),
  scroll_on_next: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Automatic scrolling to the top of the form when switching between form pages.`, 'jet-form-builder'),
  auto_focus: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Indicates invalid field and prevents the user from going to the next page or submitting the form unless filled.`, 'jet-form-builder'),
  ssr_validation_method: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select how the server-side validation request will be made – via WP REST API, admin-ajax.php, or through the URL of the current page.', 'jet-form-builder')
};


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue":
/*!******************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentsGateways.vue?vue&type=template&id=676966a1 */ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1");
/* harmony import */ var _PaymentsGateways_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentsGateways.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentsGateways_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__.render,
  _PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsGateways.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1":
/*!************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1 ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsGateways.vue?vue&type=template&id=676966a1 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/index.js":
/*!******************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   displayButton: () => (/* binding */ displayButton),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _PaymentsGateways_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentsGateways.vue */ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue");

const {
  __
} = wp.i18n;
const title = __('Payments Gateways', 'jet-form-builder');
const component = _PaymentsGateways_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
const displayButton = false;


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/source.js":
/*!*******************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/source.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   help: () => (/* binding */ help),
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const label = {
  use_gateways: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Gateways', 'jet-form-builder'),
  enable_test_mode: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Test Mode', 'jet-form-builder')
};
const help = {
  enable_test_mode: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`This option takes precedence over the <code>jet-form-builder/gateways/paypal/sandbox-mode</code> filter. As of right now, works only for PayPal payment system`, 'jet-form-builder'),
  use_gateways: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Activate payment gateways for the forms. This option takes precedence over the <code>jet-form-builder/allow-gateways</code> filter`, 'jet-form-builder')
};


/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./admin/pages/jfb-settings/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addons_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addons-tabs */ "./admin/pages/jfb-settings/addons-tabs.js");
/* harmony import */ var _SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsPage */ "./admin/pages/jfb-settings/SettingsPage.vue");


const {
  renderCurrentPage
} = window.JetFBActions;
const {
  NoticesPlugin
} = JetFBStore;
const store = new Vuex.Store({
  plugins: [NoticesPlugin]
});
renderCurrentPage(_SettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
  store
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMEJBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQVFBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBSUE7Ozs7Ozs7Ozs7OztBQ2hCQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWU/MWE0MiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlPzM3NDEiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/MGU5MSIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/ZGJlNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT9kNzIwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9mcmllbmRseUNhcHRjaGEudnVlPzg2NzciLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZ29vZ2xlL3JlQ0FQVENIQXYzLnZ1ZT8yODI4Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZT9jYjE0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS90dXJuc3RpbGUudnVlPzFmOWMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlP2EyMDIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZT83OTNmIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWU/MDUzNyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWU/YWExYyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZT9jMDNiIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWU/ZDRiYiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZT83MDY0Iiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlPzY4MjUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZT9jMmEwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlPzI1M2UiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/MmNmNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8xYWQzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9hZGRvbnMtdGFicy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZT84OTkyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvcmVDQVBUQ0hBdjMudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWU/MDljMiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9oQ2FwdGNoYS52dWU/ZjFhMyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWU/N2FhZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlPzI1M2IiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL2FkZHJlc3NBdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0FkZG9ucy9jb252ZXJ0a2l0LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9BZGRvbnMvaHVic3BvdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL21haWxlcmxpdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0FkZG9ucy9tb29zZW5kLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9HYXRld2F5cy9zdHJpcGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlPzI5NjQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL0NhcHRjaGFUYWIudnVlP2RmNjAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlP2Q0N2MiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2Uvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlPzUyY2QiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlP2FhYTAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZT9kOWYwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxzcGFuPnt7IF9fKCAnUHJvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3NwYW4+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5jb25zdCB7IGkxOG4gfSA9IEpldEZCTWl4aW5zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdJc1BST0ljb24nLFxyXG5cdG1peGluczogWyBpMThuIF0sXHJcblx0cHJvcHM6IHtcclxuXHRcdGlzQWN0aXZlOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbnNwYW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XHJcblx0cGFkZGluZzogMC4xZW0gMC4zZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsaW5lLWhlaWdodDogMTZweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cdDxGb3JtQnVpbGRlclBhZ2VcclxuXHRcdDp0aXRsZT1cIl9fKCAnSmV0Rm9ybUJ1aWxkZXIgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKVwiXHJcblx0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImpmYi1jb250ZW50XCI+XHJcblx0XHRcdDxBbGVydHNMaXN0Lz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1jb250ZW50LW1haW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLXBhbmVsXCI+XHJcblx0XHRcdFx0XHQ8Q3hWdWlUYWJzXHJcblx0XHRcdFx0XHRcdDppbi1wYW5lbD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OnZhbHVlPVwiYWN0aXZlVGFiU2x1Z1wiXHJcblx0XHRcdFx0XHRcdGxheW91dD1cInZlcnRpY2FsXCJcclxuXHRcdFx0XHRcdFx0QGlucHV0PVwib25DaGFuZ2VBY3RpdmVUYWJcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8Q3hWdWlUYWJzUGFuZWxcclxuXHRcdFx0XHRcdFx0XHR2LWZvcj1cIiggeyBkaXNwbGF5QnV0dG9uID0gdHJ1ZSwgLi4udGFiIH0sIGluZGV4ICkgaW4gdGFic1wiXHJcblx0XHRcdFx0XHRcdFx0Om5hbWU9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxyXG5cdFx0XHRcdFx0XHRcdDpsYWJlbD1cInRhYi50aXRsZVwiXHJcblx0XHRcdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0OmRpc2FibGVkPVwidGFiLmRpc2FibGVkXCJcclxuXHRcdFx0XHRcdFx0XHQ6aWNvbj1cInRhYi5pY29uXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSAjZGVmYXVsdCB2LWlmPVwidGFiLmNvbXBvbmVudC5yZW5kZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxrZWVwLWFsaXZlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29tcG9uZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1iaW5kOmlzPVwidGFiLmNvbXBvbmVudFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OmluY29taW5nPVwiZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6aW5uZXItc2x1Z3M9XCJhY3RpdmVUYWJJbm5lclNsdWdzIHx8IFtdXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9XCJ0YWJDb21wb25lbnRzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwva2VlcC1hbGl2ZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdHYtaWY9XCJkaXNwbGF5QnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJsb2FkaW5nVGFiWyB0YWIuY29tcG9uZW50Lm5hbWUgXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cIm9uU2F2ZVRhYiggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRlbXBsYXRlICNsYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDwvQ3hWdWlUYWJzUGFuZWw+XHJcblx0XHRcdFx0XHQ8L0N4VnVpVGFicz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTZXR0aW5nc1NpZGVCYXIvPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9Gb3JtQnVpbGRlclBhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgKiBhcyBjYXB0Y2hhIGZyb20gJy4vdGFicy9jYXB0Y2hhJztcclxuaW1wb3J0ICogYXMgbWFpbGNoaW1wIGZyb20gJy4vdGFicy9tYWlsY2hpbXAnO1xyXG5pbXBvcnQgKiBhcyBnZXRSZXNwb25zZSBmcm9tICcuL3RhYnMvZ2V0cmVzcG9uc2UnO1xyXG5pbXBvcnQgKiBhcyBwYXltZW50R2F0ZXdheXMgZnJvbSAnLi90YWJzL3BheW1lbnRzLWdhdGV3YXlzJztcclxuaW1wb3J0ICogYXMgb3B0aW9ucyBmcm9tICcuL3RhYnMvb3B0aW9ucyc7XHJcbmltcG9ydCBTZXR0aW5nc1NpZGVCYXIgZnJvbSAnLi9zaWRlYmFyL1NldHRpbmdzU2lkZUJhcic7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycywgZG9BY3Rpb24gfSA9IHdwLmhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdFNhdmVUYWJCeUFqYXgsXHJcblx0R2V0SW5jb21pbmcsXHJcblx0aTE4bixcclxufSA9IHdpbmRvdy5KZXRGQk1peGlucztcclxuXHJcbmNvbnN0IHtcclxuXHRDeFZ1aVRhYnNQYW5lbCxcclxuXHRDeFZ1aVRhYnMsXHJcblx0QWxlcnRzTGlzdCxcclxuXHRGb3JtQnVpbGRlclBhZ2UsXHJcbn0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG53aW5kb3cuamZiRXZlbnRCdXMgPSB3aW5kb3cuamZiRXZlbnRCdXMgfHwgbmV3IFZ1ZSgge30gKTtcclxuXHJcbmNvbnN0IHNldHRpbmdUYWJzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLnNldHRpbmdzLXBhZ2UudGFicycsIFtcclxuXHRvcHRpb25zLFxyXG5cdHBheW1lbnRHYXRld2F5cyxcclxuXHRjYXB0Y2hhLFxyXG5cdG1haWxjaGltcCxcclxuXHRnZXRSZXNwb25zZSxcclxuXSApO1xyXG5cclxuY29uc3QgY2hhbmdlSGFzaCA9IGhhc2ggPT4ge1xyXG5cdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgaGFzaDtcclxufTtcclxuXHJcbmNvbnN0IGdldEFjdGl2ZVRhYiA9ICgpID0+IHtcclxuXHRjb25zdCBmaXJzdCA9IHNldHRpbmdUYWJzWyAwIF0uY29tcG9uZW50Lm5hbWU7XHJcblxyXG5cdGlmICggISB3aW5kb3cubG9jYXRpb24uaGFzaCApIHtcclxuXHRcdGNoYW5nZUhhc2goIGZpcnN0ICk7XHJcblxyXG5cdFx0cmV0dXJuIFsgZmlyc3QgXTtcclxuXHR9XHJcblx0bGV0IFsgaGFzaCwgLi4ub3RoZXJzIF0gPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCAnIycsICcnICkuc3BsaXQoICdfXycgKTtcclxuXHRsZXQgdGFiID0gc2V0dGluZ1RhYnMuZmluZCggdGFiID0+IHRhYj8uY29tcG9uZW50Py5uYW1lID09PSBoYXNoICk7XHJcblxyXG5cdGlmICggISB0YWIgKSB7XHJcblx0XHRjaGFuZ2VIYXNoKCBmaXJzdCApO1xyXG5cclxuXHRcdHJldHVybiBbIGZpcnN0IF07XHJcblx0fVxyXG5cdGNoYW5nZUhhc2goIFsgdGFiLmNvbXBvbmVudC5uYW1lLCAuLi5vdGhlcnMgXS5qb2luKCAnX18nICkgKTtcclxuXHJcblx0cmV0dXJuIFsgdGFiLmNvbXBvbmVudC5uYW1lLCBvdGhlcnMgXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnamZiLXNldHRpbmdzJyxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRBbGVydHNMaXN0LFxyXG5cdFx0Q3hWdWlUYWJzUGFuZWwsXHJcblx0XHRDeFZ1aVRhYnMsXHJcblx0XHRTZXR0aW5nc1NpZGVCYXIsXHJcblx0XHRGb3JtQnVpbGRlclBhZ2UsXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0Y29uc3QgWyB0YWJTbHVnLCBvdGhlcnMgXSA9IGdldEFjdGl2ZVRhYigpO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YWN0aXZlVGFiU2x1ZzogdGFiU2x1ZyxcclxuXHRcdFx0YWN0aXZlVGFiSW5uZXJTbHVnczogb3RoZXJzLFxyXG5cdFx0XHR0YWJzOiBzZXR0aW5nVGFicyxcclxuXHRcdFx0bG9hZGluZ1RhYjoge30sXHJcblx0XHRcdGlzQWN0aXZlUHJvOiBmYWxzZSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcsIGkxOG4gXSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5pc0FjdGl2ZVBybyA9IHRoaXMuZ2V0SW5jb21pbmcoICdpc19hY3RpdmUnICk7XHJcblxyXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHByb3BzID0+IHtcclxuXHRcdFx0Y29uc3QgeyBzdGF0ZSwgc2x1ZyB9ID0gcHJvcHM7XHJcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nVGFiLCBzbHVnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xyXG5cdFx0fSApO1xyXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAnYWxlcnQtY2xpY2stdGhhbmtzJywgKCB7IHNlbGYgfSApID0+IHtcclxuXHRcdFx0c2VsZi5jbG9zZUFsZXJ0KCk7XHJcblx0XHR9ICk7XHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdhbGVydC1jbGljay1jaGVjaycsICggeyBzZWxmIH0gKSA9PiB7XHJcblx0XHRcdHNlbGYuY2xvc2VBbGVydCgpO1xyXG5cdFx0fSApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0b25DaGFuZ2VBY3RpdmVUYWIoIGFjdGl2ZVRhYiApIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudFVybCA9IG5ldyBVUkwoIGRvY3VtZW50LlVSTCApO1xyXG5cdFx0XHRjdXJyZW50VXJsLmhhc2ggPSAnIycgKyBhY3RpdmVUYWI7XHJcblxyXG5cdFx0XHRkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gY3VycmVudFVybC5ocmVmO1xyXG5cclxuXHRcdFx0amZiRXZlbnRCdXMuJGVtaXQoICdjaGFuZ2UtdGFiJywgeyBzbHVnOiBhY3RpdmVUYWIgfSApO1xyXG5cdFx0fSxcclxuXHRcdG9uU2F2ZVRhYiggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRUYWIgPSB0aGlzLiRyZWZzLnRhYkNvbXBvbmVudHNbIGluZGV4VGFiIF07XHJcblxyXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIGN1cnJlbnRUYWIsIHRhYlNsdWcgKTtcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLmpmYi1jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDJlbTtcclxuXHRtYXJnaW4tdG9wOiAxZW07XHJcblxyXG5cdCYtbWFpbiB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuXHQ8c2VjdGlvbj5cclxuXHRcdDxTaW1wbGVXcmFwcGVyQ29tcG9uZW50IGVsZW1lbnQtaWQ9XCJmcmllbmRseV9rZXlcIj5cclxuXHRcdFx0PHRlbXBsYXRlICNsYWJlbD57eyBsYWJlbC5rZXkgfX08L3RlbXBsYXRlPlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2Rlc2NyaXB0aW9uPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHRcdHt7IF9fKFxyXG5cdFx0XHRcdFx0J0l0IGNhbiBiZSBmb3VuZCBvbiB0aGUgcGFnZSBsaXN0aW5nIHlvdXIgQXBwbGljYXRpb25zLiBPciBmb2xsb3cgdGhpcycsXHJcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0KSArICcgJyB9fVxyXG5cdFx0XHRcdFx0PEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kb2NzLmZyaWVuZGx5Y2FwdGNoYS5jb20vIy9pbnN0YWxsYXRpb24/aWQ9XzEtZ2VuZXJhdGluZy1hLXNpdGVrZXlcIj5cclxuXHRcdFx0XHRcdFx0e3sgX18oICdndWlkZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XHJcblx0XHRcdFx0XHQ8L0V4dGVybmFsTGluaz5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSAjZGVmYXVsdD5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGlkPVwiZnJpZW5kbHlfa2V5XCJcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdGNsYXNzPVwiY3gtdnVpLWlucHV0IHNpemUtZnVsbHdpZHRoXCJcclxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdDwvU2ltcGxlV3JhcHBlckNvbXBvbmVudD5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0ZWxlbWVudC1pZD1cImZyaWVuZGx5X3NlY3JldFwiXHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cIl9fKFxyXG5cdFx0XHRcdCdJdCBjYW4gYmUgZm91bmQgb24gdGhlIHBhZ2UgbGlzdGluZyB5b3VyIEFQSSBrZXlzLicsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxyXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGxhYmVsLFxyXG59IGZyb20gJy4vc291cmNlJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBTaW1wbGVXcmFwcGVyQ29tcG9uZW50LFxyXG5cdCAgICAgIEV4dGVybmFsTGluayxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBpMThuLFxyXG4gICAgICB9ID0gSmV0RkJNaXhpbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2ZyaWVuZGx5JyxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRTaW1wbGVXcmFwcGVyQ29tcG9uZW50LFxyXG5cdFx0RXh0ZXJuYWxMaW5rLFxyXG5cdH0sXHJcblx0bWl4aW5zOiBbIGkxOG4gXSxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCxcclxuXHRcdFx0c3RvcmFnZToge30sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGlmICggIU9iamVjdC5rZXlzKCB0aGlzLmluY29taW5nICk/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zdG9yYWdlID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxzZWN0aW9uPlxyXG5cdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5rZXlcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcclxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdDptaW49XCIwXCJcclxuXHRcdFx0Om1heD1cIjFcIlxyXG5cdFx0XHQ6c3RlcD1cIjAuMVwiXHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnRocmVzaG9sZFwiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAudGhyZXNob2xkXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS50aHJlc2hvbGRcIlxyXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdFx0PHAgY2xhc3M9XCJmYi1kZXNjcmlwdGlvblwiPnt7IGhlbHAuYXBpUHJlZiB9fSA8YSA6aHJlZj1cImhlbHAuYXBpTGlua1wiIHRhcmdldD1cIl9ibGFua1wiPnt7IGhlbHAuYXBpTGlua0xhYmVsIH19PC9hPlxyXG5cdFx0PC9wPlxyXG5cdDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGhlbHAsXHJcblx0bGFiZWwsXHJcbn0gZnJvbSBcIi4vc291cmNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2dvb2dsZScsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IFsgT2JqZWN0LCBBcnJheSBdLFxyXG5cdFx0XHRkZWZhdWx0KCkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsIGhlbHAsXHJcblx0XHRcdHN0b3JhZ2U6IHt9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0fSxcclxufVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxzZWN0aW9uPlxyXG5cdFx0PFNpbXBsZVdyYXBwZXJDb21wb25lbnQgZWxlbWVudC1pZD1cImhjYXB0Y2hhX2tleVwiPlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPnt7IGxhYmVsLmtleSB9fTwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSAjZGVzY3JpcHRpb24+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJmYi1kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdFx0e3sgX18oXHJcblx0XHRcdFx0XHQnWW91IGNhbiBmaW5kIGl0IG9uIHRoaXMgcGFnZSBpbiB0aGUgZmlyc3QgY29sdW1uIG9mIFNpdGVrZXkuJyxcclxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHQpICsgJyAnIH19XHJcblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5oY2FwdGNoYS5jb20vc2l0ZXNcIj5cclxuXHRcdFx0XHRcdFx0e3sgX18oICdHbyB0byB0aGUgZGFzaGJvYXJkIG9mIHNpdGVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX1cclxuXHRcdFx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0PHRlbXBsYXRlICNkZWZhdWx0PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0aWQ9XCJoY2FwdGNoYV9rZXlcIlxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIlxyXG5cdFx0XHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uua2V5XCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PC9TaW1wbGVXcmFwcGVyQ29tcG9uZW50PlxyXG5cdFx0PFNpbXBsZVdyYXBwZXJDb21wb25lbnQgZWxlbWVudC1pZD1cImhjYXB0Y2hhX3NlY3JldFwiPlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPnt7IGxhYmVsLnNlY3JldCB9fTwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSAjZGVzY3JpcHRpb24+XHJcblx0XHRcdFx0PHAgY2xhc3M9XCJmYi1kZXNjcmlwdGlvblwiPlxyXG5cdFx0XHRcdFx0e3sgX18oXHJcblx0XHRcdFx0XHRgWW91IGNhbiBmaW5kIGl0IG9uIHRoZSBzZXR0aW5ncyBwYWdlLFxyXG50aGlzIHdpbGwgYmUgdGhlIGZpcnN0IGZpZWxkLmAsXHJcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0KSArICcgJyB9fVxyXG5cdFx0XHRcdFx0PEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kYXNoYm9hcmQuaGNhcHRjaGEuY29tL3NldHRpbmdzXCI+XHJcblx0XHRcdFx0XHRcdHt7IF9fKCAnR28gdG8gdGhlIFNldHRpbmdzIHBhZ2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fVxyXG5cdFx0XHRcdFx0PC9FeHRlcm5hbExpbms+XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2RlZmF1bHQ+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRpZD1cImhjYXB0Y2hhX3NlY3JldFwiXHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRjbGFzcz1cImN4LXZ1aS1pbnB1dCBzaXplLWZ1bGx3aWR0aFwiXHJcblx0XHRcdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8L1NpbXBsZVdyYXBwZXJDb21wb25lbnQ+XHJcblx0PC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7XHJcblx0bGFiZWwsXHJcbn0gZnJvbSAnLi9zb3VyY2UnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFNpbXBsZVdyYXBwZXJDb21wb25lbnQsXHJcblx0ICAgICAgRXh0ZXJuYWxMaW5rLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGkxOG4sXHJcbiAgICAgIH0gPSBKZXRGQk1peGlucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnaGNhcHRjaGEnLFxyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdFNpbXBsZVdyYXBwZXJDb21wb25lbnQsXHJcblx0XHRFeHRlcm5hbExpbmssXHJcblx0fSxcclxuXHRtaXhpbnM6IFsgaTE4biBdLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBbIE9iamVjdCwgQXJyYXkgXSxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge307XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLFxyXG5cdFx0XHRzdG9yYWdlOiB7fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0aWYgKCAhT2JqZWN0LmtleXMoIHRoaXMuaW5jb21pbmcgKT8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdGVsZW1lbnQtaWQ9XCJ0dXJuc3RpbGVfa2V5XCJcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwua2V5XCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiX18oXHJcblx0XHRcdFx0J1JlYWQgdGhlIGhpbnQgdG8gdGhlIFNlY3JldCBLZXkgZmllbGQnLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KVwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uua2V5XCJcclxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0ZWxlbWVudC1pZD1cInR1cm5zdGlsZV9zZWNyZXRcIlxyXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5zZWNyZXRcIlxyXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJfXyhcclxuXHRcdFx0XHQnWW91IGNhbiBmaW5kIGJvdGgga2V5cyBvbiB5b3VyIFR1cm5zdGlsZSBTaXRlIHNldHRpbmdzIHBhZ2UnLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KVwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcclxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0e3sgX18oICdEaWRuXFwndCBmaW5kIGl0PyBIZXJlIGlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfX1cclxuXHRcdFx0PEV4dGVybmFsTGlua1xyXG5cdFx0XHRcdGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuY2xvdWRmbGFyZS5jb20vdHVybnN0aWxlL2dldC1zdGFydGVkLyNnZXQtYS1zaXRla2V5LWFuZC1zZWNyZXQta2V5XCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdHt7IF9fKCAnYSBtb3JlIGRldGFpbGVkIGRlc2NyaXB0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX1cclxuXHRcdFx0PC9FeHRlcm5hbExpbms+XHJcblx0XHQ8L3A+XHJcblx0PC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7XHJcblx0bGFiZWwsXHJcbn0gZnJvbSAnLi9zb3VyY2UnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGkxOG4sXHJcbiAgICAgIH0gPSBKZXRGQk1peGlucztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBFeHRlcm5hbExpbmssXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ3R1cm5zdGlsZScsXHJcblx0bWl4aW5zOiBbXHJcblx0XHRpMThuLFxyXG5cdF0sXHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0RXh0ZXJuYWxMaW5rLFxyXG5cdH0sXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IFsgT2JqZWN0LCBBcnJheSBdLFxyXG5cdFx0XHRkZWZhdWx0KCkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsXHJcblx0XHRcdHN0b3JhZ2U6IHt9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8c2VjdGlvbj5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuY2xpZW50X2lkXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5jbGllbnRfaWRcIlxyXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5zZWNyZXRcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnNlY3JldFwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0PC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7XHJcblx0aGVscCxcclxuXHRsYWJlbCxcclxufSBmcm9tIFwiLi9zb3VyY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAncGF5cGFsJyxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0KCkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsIGhlbHAsXHJcblx0XHRcdHN0b3JhZ2U6IHt9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdH0sXHJcbn1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8U2lkZUJhckJveGVzPlxyXG5cdFx0PHRlbXBsYXRlICNpY29uLWhlbHA+XHJcblx0XHRcdDxzdmcgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjIxXCIgdmlld0JveD1cIjAgMCAxNCAyMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdDxwYXRoXHJcblx0XHRcdFx0XHRkPVwiTTUuMjUgMjFIOC43NVYxNy41SDUuMjVWMjFaTTcgMEMzLjEzMjUgMCAwIDMuMTMyNSAwIDdIMy41QzMuNSA1LjA3NSA1LjA3NSAzLjUgNyAzLjVDOC45MjUgMy41IDEwLjUgNS4wNzUgMTAuNSA3QzEwLjUgMTAuNSA1LjI1IDEwLjA2MjUgNS4yNSAxNS43NUg4Ljc1QzguNzUgMTEuODEyNSAxNCAxMS4zNzUgMTQgN0MxNCAzLjEzMjUgMTAuODY3NSAwIDcgMFpcIlxyXG5cdFx0XHRcdFx0ZmlsbD1cIiM3QjdFODFcIj48L3BhdGg+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHRcdDx0ZW1wbGF0ZSAjY29udGVudC1oZWxwPVwiYm94XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rXCI+XHJcblx0XHRcdFx0PGEgOmhyZWY9XCJib3gubGlua19rbm93bGVkZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWljb25cIj5cclxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE0IDE2XCIgZmlsbD1cIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHRcdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTMuNDU4IDExLjI1NTJMMTMuNDU4IDEuNDExNUMxMy40NTggMS4wMzA2NCAxMy4xMzU3IDAuNzA4Mzc0IDEyLjc1NDkgMC43MDgzNzRMMy4xNDU1MSAwLjcwODM3NEMxLjU5Mjc3IDAuNzA4Mzc0IDAuMzMzMDA4IDEuOTY4MTQgMC4zMzMwMDggMy41MjA4N0wwLjMzMzAwOCAxMi44OTU5QzAuMzMzMDA4IDE0LjQ0ODYgMS41OTI3NyAxNS43MDg0IDMuMTQ1NTEgMTUuNzA4NEwxMi43NTQ5IDE1LjcwODRDMTMuMTM1NyAxNS43MDg0IDEzLjQ1OCAxNS40MTU0IDEzLjQ1OCAxNS4wMDUyTDEzLjQ1OCAxNC41MzY1QzEzLjQ1OCAxNC4zMzE0IDEzLjM0MDggMTQuMTI2MyAxMy4xOTQzIDE0LjAwOTJDMTMuMDQ3OSAxMy41NDA0IDEzLjA0NzkgMTIuMjUxMyAxMy4xOTQzIDExLjgxMTlDMTMuMzQwOCAxMS42OTQ3IDEzLjQ1OCAxMS40ODk2IDEzLjQ1OCAxMS4yNTUyWk00LjA4MzAxIDQuNjM0MTZDNC4wODMwMSA0LjU0NjI2IDQuMTQxNiA0LjQ1ODM3IDQuMjU4NzkgNC40NTgzN0wxMC40Njk3IDQuNDU4MzdDMTAuNTU3NiA0LjQ1ODM3IDEwLjY0NTUgNC41NDYyNiAxMC42NDU1IDQuNjM0MTZMMTAuNjQ1NSA1LjIyMDA5QzEwLjY0NTUgNS4zMzcyOCAxMC41NTc2IDUuMzk1ODcgMTAuNDY5NyA1LjM5NTg3TDQuMjU4NzkgNS4zOTU4N0M0LjE0MTYgNS4zOTU4NyA0LjA4MzAxIDUuMzM3MjggNC4wODMwMSA1LjIyMDA5TDQuMDgzMDEgNC42MzQxNlpNNC4wODMwMSA2LjUwOTE2QzQuMDgzMDEgNi40MjEyNyA0LjE0MTYgNi4zMzMzNyA0LjI1ODc5IDYuMzMzMzdMMTAuNDY5NyA2LjMzMzM3QzEwLjU1NzYgNi4zMzMzNyAxMC42NDU1IDYuNDIxMjcgMTAuNjQ1NSA2LjUwOTE2TDEwLjY0NTUgNy4wOTUwOUMxMC42NDU1IDcuMjEyMjggMTAuNTU3NiA3LjI3MDg3IDEwLjQ2OTcgNy4yNzA4N0w0LjI1ODc5IDcuMjcwODdDNC4xNDE2IDcuMjcwODcgNC4wODMwMSA3LjIxMjI4IDQuMDgzMDEgNy4wOTUwOUw0LjA4MzAxIDYuNTA5MTZaTTExLjQ5NTEgMTMuODMzNEwzLjE0NTUxIDEzLjgzMzRDMi42MTgxNiAxMy44MzM0IDIuMjA4MDEgMTMuNDIzMiAyLjIwODAxIDEyLjg5NTlDMi4yMDgwMSAxMi4zOTc4IDIuNjE4MTYgMTEuOTU4NCAzLjE0NTUxIDExLjk1ODRMMTEuNDk1MSAxMS45NTg0QzExLjQzNjUgMTIuNDg1NyAxMS40MzY1IDEzLjMzNTMgMTEuNDk1MSAxMy44MzM0WlwiXHJcblx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cclxuXHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCI+e3sgYm94LmxhYmVsX2tub3dsZWRnZSB9fTwvZGl2PlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rXCI+XHJcblx0XHRcdFx0PGEgOmhyZWY9XCJib3gubGlua19jb21tdW5pdHlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWljb25cIj5cclxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHRcdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTUuNTkxMyA4LjA0NTY0QzE1LjU5MTMgMy44NzcyOCAxMi4yMTQgMC41IDguMDQ1NjQgMC41QzMuODc3MjggMC41IDAuNSAzLjg3NzI4IDAuNSA4LjA0NTY0QzAuNSAxMS44MTg1IDMuMjM4MzQgMTQuOTUyMyA2Ljg1OTAzIDE1LjVMNi44NTkwMyAxMC4yMzYzTDQuOTQyMTkgMTAuMjM2M0w0Ljk0MjE5IDguMDQ1NjRMNi44NTkwMyA4LjA0NTY0TDYuODU5MDMgNi40MDI2NEM2Ljg1OTAzIDQuNTE2MjMgNy45ODQ3OSAzLjQ1MTMyIDkuNjg4NjQgMy40NTEzMkMxMC41NDA2IDMuNDUxMzIgMTEuMzkyNSAzLjYwMzQ1IDExLjM5MjUgMy42MDM0NUwxMS4zOTI1IDUuNDU5NDNMMTAuNDQ5MyA1LjQ1OTQzQzkuNTA2MDkgNS40NTk0MyA5LjIwMTgzIDYuMDM3NTMgOS4yMDE4MyA2LjY0NjA0TDkuMjAxODMgOC4wNDU2NEwxMS4zMDEyIDguMDQ1NjRMMTAuOTY2NSAxMC4yMzYzTDkuMjAxODMgMTAuMjM2M0w5LjIwMTgzIDE1LjVDMTIuODIyNSAxNC45NTIzIDE1LjU5MTMgMTEuODE4NSAxNS41OTEzIDguMDQ1NjRaXCJcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGw9XCIjMDA3Q0JBXCI+PC9wYXRoPlxyXG5cdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIj57eyBib3gubGFiZWxfY29tbXVuaXR5IH19PC9kaXY+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmtcIj5cclxuXHRcdFx0XHQ8YSA6aHJlZj1cImJveC5saW5rX3N1cHBvcnRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWljb25cIj5cclxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE1IDE4XCIgZmlsbD1cIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHRcdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdFx0XHRcdGQ9XCJNNy41ODMzMyAwLjY2NjY4N0MzLjY3NSAwLjY2NjY4NyAwLjUgMy44NDE2OSAwLjUgNy43NTAwMkMwLjUgMTEuNjU4NCAzLjY3NSAxNC44MzM0IDcuNTgzMzMgMTQuODMzNEg4VjE3LjMzMzRDMTIuMDUgMTUuMzgzNCAxNC42NjY3IDExLjUgMTQuNjY2NyA3Ljc1MDAyQzE0LjY2NjcgMy44NDE2OSAxMS40OTE3IDAuNjY2Njg3IDcuNTgzMzMgMC42NjY2ODdaTTguNDE2NjcgMTIuNzVINi43NVYxMS4wODM0SDguNDE2NjdWMTIuNzVaTTguNDE2NjcgOS44MzMzNUg2Ljc1QzYuNzUgNy4xMjUwMiA5LjI1IDcuMzMzMzUgOS4yNSA1LjY2NjY5QzkuMjUgNC43NTAwMiA4LjUgNC4wMDAwMiA3LjU4MzMzIDQuMDAwMDJDNi42NjY2NyA0LjAwMDAyIDUuOTE2NjcgNC43NTAwMiA1LjkxNjY3IDUuNjY2NjlINC4yNUM0LjI1IDMuODI1MDIgNS43NDE2NyAyLjMzMzM1IDcuNTgzMzMgMi4zMzMzNUM5LjQyNSAyLjMzMzM1IDEwLjkxNjcgMy44MjUwMiAxMC45MTY3IDUuNjY2NjlDMTAuOTE2NyA3Ljc1MDAyIDguNDE2NjcgNy45NTgzNSA4LjQxNjY3IDkuODMzMzVaXCJcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGw9XCIjMDA3Q0JBXCI+PC9wYXRoPlxyXG5cdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIj57eyBib3gubGFiZWxfc3VwcG9ydCB9fTwvZGl2PlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rXCI+XHJcblx0XHRcdFx0PGEgOmhyZWY9XCJib3gubGlua19naXRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWljb25cIj5cclxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHRcdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ICBkPVwiTTcuOTc2IDBDNS44NjA3MSAwLjAwMDI2NTE1NiAzLjgzMjE0IDAuODQwNjc2IDIuMzM2NDEgMi4zMzY0MUMwLjg0MDY3NiAzLjgzMjE0IDAuMDAwMjY1MTU2IDUuODYwNzEgMCA3Ljk3NkMwIDExLjQ5OCAyLjMgMTQuNDgzIDUuNDMxIDE1LjU2QzUuODIzIDE1LjYwOSA1Ljk2OSAxNS4zNjQgNS45NjkgMTUuMTY4VjEzLjc5OEMzLjc2OCAxNC4yODggMy4yNzkgMTIuNzIyIDMuMjc5IDEyLjcyMkMyLjkzNiAxMS43OTIgMi4zOTggMTEuNTQ3IDIuMzk4IDExLjU0N0MxLjY2NCAxMS4wNTggMi40NDYgMTEuMDU4IDIuNDQ2IDExLjA1OEMzLjIyOSAxMS4xMDcgMy42NyAxMS44OSAzLjY3IDExLjg5QzQuNDA0IDEzLjExMyA1LjUyOSAxMi43NyA1Ljk3IDEyLjU3NUM2LjAxOCAxMi4wMzcgNi4yNjMgMTEuNjk1IDYuNDU5IDExLjQ5OUM0LjY5NyAxMS4zMDMgMi44MzggMTAuNjE4IDIuODM4IDcuNTM1QzIuODM4IDYuNjU1IDMuMTMxIDUuOTY5IDMuNjcgNS4zODJDMy42MiA1LjIzNSAzLjMyNyA0LjQwNCAzLjc2OCAzLjMyN0MzLjc2OCAzLjMyNyA0LjQ1MyAzLjEzMSA1Ljk2OSA0LjE1OUM2LjYwNSAzLjk2MyA3LjI5MSAzLjkxNCA3Ljk3NiAzLjkxNEM4LjY2MSAzLjkxNCA5LjM0NiA0LjAxMiA5Ljk4MiA0LjE1OUMxMS40OTkgMy4xMzIgMTIuMTg0IDMuMzI3IDEyLjE4NCAzLjMyN0MxMi42MjQgNC40MDQgMTIuMzMgNS4yMzUgMTIuMjgxIDUuNDMxQzEyLjgxOTkgNi4wMTgwOCAxMy4xMTcxIDYuNzg3MSAxMy4xMTMgNy41ODRDMTMuMTEzIDEwLjY2NyAxMS4yNTMgMTEuMzAzIDkuNDkzIDExLjQ5OUM5Ljc4NiAxMS43NDMgMTAuMDMxIDEyLjIzMiAxMC4wMzEgMTIuOTY2VjE1LjE2OEMxMC4wMzEgMTUuMzY0IDEwLjE3NyAxNS42MDggMTAuNTY5IDE1LjU2QzEyLjE1NSAxNS4wMjQ4IDEzLjUzMjcgMTQuMDA0NiAxNC41MDczIDEyLjY0MzZDMTUuNDgxOCAxMS4yODI3IDE2LjAwNCA5LjY0OTg5IDE2IDcuOTc2QzE1Ljk1MSAzLjU3MiAxMi4zOCAwIDcuOTc2IDBaXCJcclxuXHRcdFx0XHRcdFx0XHRcdCAgZmlsbD1cIiMwMDdDQkFcIj48L3BhdGg+XHJcblx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1sYWJlbFwiPnt7IGJveC5sYWJlbF9naXQgfX08L2Rpdj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHQ8L1NpZGVCYXJCb3hlcz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmNvbnN0IHsgU2lkZUJhckJveGVzIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ1NldHRpbmdzU2lkZUJhcicsXHJcblx0Y29tcG9uZW50czogeyBTaWRlQmFyQm94ZXMgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHJcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2Uge1xyXG5cclxuXHQmX19iYW5uZXIudXNlZnVsIHtcclxuXHRcdHBhZGRpbmc6IDIwcHggMzBweDtcclxuXHR9XHJcblxyXG5cdCZfX3BhbmVsLmhlbHAge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xyXG5cdFx0XHR3aWR0aDogY2FsYygxMDAlIC8gMik7XHJcblx0XHR9XHJcblxyXG5cdFx0LmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwtY29udGVudCB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdG1hcmdpbi10b3A6IDEycHg7XHJcblx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRENEQ0REO1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogMjNweDtcclxuXHRcdH1cclxuXHJcblx0XHQuaGVscC1jZW50ZXItbGluayB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjJweDtcclxuXHJcblx0XHRcdCY6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YSB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHRcdFx0Y29sb3I6ICMwMDdDQkE7XHJcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuXHRcdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDY2RUEyO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuaGVscC1jZW50ZXItbGluay1pY29uIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMjhweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8Q3hWdWlDb2xsYXBzZU1pbmlcclxuXHRcdFx0d2l0aC1wYW5lbFxyXG5cdFx0XHR2LWZvcj1cIiggdGFiLCBpbmRleCApIGluIGNhcHRjaGFcIlxyXG5cdFx0XHQ6aWNvbj1cInRhYi5pY29uXCJcclxuXHRcdFx0OmxhYmVsPVwiZ2V0VGFiVGl0bGUoIHRhYiApXCJcclxuXHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXHJcblx0XHRcdDpkaXNhYmxlZD1cInRhYi5kaXNhYmxlZFwiXHJcblx0XHRcdDppbml0aWFsLWFjdGl2ZT1cImlzQWN0aXZlKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdEBjaGFuZ2U9XCJvbkNoYW5nZUFjdGl2ZSggJGV2ZW50LCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHQ+XHJcblx0XHRcdDxrZWVwLWFsaXZlPlxyXG5cdFx0XHRcdDxjb21wb25lbnRcclxuXHRcdFx0XHRcdHYtYmluZDppcz1cInRhYi5jb21wb25lbnRcIlxyXG5cdFx0XHRcdFx0cmVmPVwiY2FwdGNoYVwiXHJcblx0XHRcdFx0XHQ6aW5jb21pbmc9XCJnZXRJbmNvbWluZ0NhcHRjaGEoIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2tlZXAtYWxpdmU+XHJcblx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcclxuXHRcdFx0XHQ6bG9hZGluZz1cImxvYWRpbmdHYXRld2F5c1sgdGFiLmNvbXBvbmVudC5uYW1lIF1cIlxyXG5cdFx0XHRcdEBjbGljaz1cIm9uU2F2ZUdhdGV3YXkoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5TYXZlPC9zcGFuPlxyXG5cdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHQ8L0N4VnVpQ29sbGFwc2VNaW5pPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCByZUNBUFRDSEF2MyBmcm9tICcuLi8uLi9jYXB0Y2hhL2dvb2dsZSc7XHJcbmltcG9ydCBoQ2FwdGNoYSBmcm9tICcuLi8uLi9jYXB0Y2hhL2hDYXB0Y2hhJztcclxuaW1wb3J0IGZyaWVuZGx5Q2FwdGNoYSBmcm9tICcuLi8uLi9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYSc7XHJcbmltcG9ydCB0dXJuc3RpbGUgZnJvbSAnLi4vLi4vY2FwdGNoYS90dXJuc3RpbGUnO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuY29uc3QgeyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZyB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xyXG5jb25zdCB7IEN4VnVpQ29sbGFwc2VNaW5pIH0gICAgICAgICAgPSB3aW5kb3cuSmV0RkJDb21wb25lbnRzO1xyXG5cclxud2luZG93LmpmYkV2ZW50QnVzID0gd2luZG93LmpmYkV2ZW50QnVzIHx8IG5ldyBWdWUoIHt9ICk7XHJcblxyXG5jb25zdCBjYXB0Y2hhVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5jYXB0Y2hhJywgW1xyXG5cdHJlQ0FQVENIQXYzLFxyXG5cdGhDYXB0Y2hhLFxyXG5cdGZyaWVuZGx5Q2FwdGNoYSxcclxuXHR0dXJuc3RpbGUsXHJcbl0gKTtcclxuXHJcbmxldCByZXF1ZXN0RnVuYyA9ICgpID0+IHtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnY2FwdGNoYS10YWInLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQ6IHt9LFxyXG5cdFx0fSxcclxuXHRcdGlubmVyU2x1Z3M6IEFycmF5LFxyXG5cdH0sXHJcblx0Y29tcG9uZW50czogeyBDeFZ1aUNvbGxhcHNlTWluaSB9LFxyXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4IF0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNhcHRjaGE6IGNhcHRjaGFUYWJzLFxyXG5cdFx0XHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXHJcblx0XHRcdHNldHRpbmdzOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeShcclxuXHRcdFx0XHR3aW5kb3cuSmV0RkJQYWdlQ29uZmlnWyAnY2FwdGNoYS10YWItY29uZmlnJyBdLFxyXG5cdFx0XHQpICksXHJcblx0XHRcdGFjdGl2ZUdhdGV3YXlzVGFiczogW10sXHJcblx0XHRcdGxvYWRpbmdHYXRld2F5czoge30sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XHJcblx0XHRcdGNvbnN0IHsgc3RhdGUsIHNsdWcgfSA9IHByb3BzO1xyXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMubG9hZGluZ0dhdGV3YXlzLCBzbHVnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ2NoYW5nZS10YWInLCAoXHJcblx0XHRcdGZ1bmN0aW9uICggeyBzbHVnIH0gKSB7XHJcblx0XHRcdFx0aWYgKCBzbHVnICE9PSB0aGlzLiRvcHRpb25zLm5hbWUgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIFsgdGhpcy4kb3B0aW9ucy5uYW1lLCAuLi50aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyBdLmpvaW4oICdfXycgKTtcclxuXHRcdFx0fVxyXG5cdFx0KS5iaW5kKCB0aGlzICkgKTtcclxuXHJcblx0XHR0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyA9IHRoaXMuaW5uZXJTbHVncztcclxuXHJcblx0XHRyZXF1ZXN0RnVuYyA9IF8uZGVib3VuY2UoICgpID0+IHtcclxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcclxuXHRcdH0sIDEwMDAgKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldEluY29taW5nQ2FwdGNoYSggc2x1ZyApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5jb21pbmc/Llsgc2x1ZyBdID8/IHt9O1xyXG5cdFx0fSxcclxuXHRcdGdldFRhYlRpdGxlKCB0YWIgKSB7XHJcblx0XHRcdGNvbnN0IHsgdGl0bGUgfSA9IHRhYjtcclxuXHJcblx0XHRcdGlmICggdGl0bGU/Lmxlbmd0aCApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGl0bGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHsgbmFtZSB9ID0gdGFiLmNvbXBvbmVudDtcclxuXHRcdFx0Y29uc3QgaXRlbSAgICAgPSB0aGlzLnNldHRpbmdzLmZpbmQoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgPT09IG5hbWUgKTtcclxuXHJcblx0XHRcdHJldHVybiBpdGVtPy5sYWJlbCB8fCAnVW5kZWZpbmVkIGNhcHRjaGEgdGl0bGUnO1xyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlQWN0aXZlKCBpc0FjdGl2ZSwgdGFiTmFtZSApIHtcclxuXHRcdFx0bGV0IFsgaGFzaCwgLi4ub3RoZXJzIF0gPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCAnIycsICcnICkuc3BsaXQoICdfXycgKTtcclxuXHJcblx0XHRcdGlmICggIWlzQWN0aXZlICkge1xyXG5cdFx0XHRcdG90aGVycyA9IG90aGVycy5maWx0ZXIoIGdhdGV3YXlUYWIgPT4gKFxyXG5cdFx0XHRcdFx0dGFiTmFtZSAhPT0gZ2F0ZXdheVRhYiB8fCBpc0FjdGl2ZVxyXG5cdFx0XHRcdCkgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRvdGhlcnMucHVzaCggdGFiTmFtZSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY2hhbmdlR2F0ZXdheXNUYWJzKCBvdGhlcnMgKTtcclxuXHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gWyB0aGlzLiRvcHRpb25zLm5hbWUsIC4uLm90aGVycyBdLmpvaW4oICdfXycgKTtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2VHYXRld2F5c1RhYnMoIHRhYnMgKSB7XHJcblx0XHRcdHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzID0gdGFicztcclxuXHRcdH0sXHJcblx0XHRpc0FjdGl2ZSggdGFiTmFtZSApIHtcclxuXHRcdFx0cmV0dXJuIEJvb2xlYW4oIHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzPy5pbmNsdWRlcyggdGFiTmFtZSApICk7XHJcblx0XHR9LFxyXG5cdFx0Y2hhbmdlVmFsKCBuYW1lLCB2YWx1ZSApIHtcclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsIG5hbWUsIHZhbHVlICk7XHJcblxyXG5cdFx0XHRyZXF1ZXN0RnVuYygpO1xyXG5cdFx0fSxcclxuXHRcdG9uU2F2ZUdhdGV3YXkoIGluZGV4VGFiLCB0YWJTbHVnICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy4kcmVmcy5jYXB0Y2hhWyBpbmRleFRhYiBdO1xyXG5cclxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50LCB0YWJTbHVnICk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0QWpheE9iamVjdCggY3VycmVudFRhYiwgdGFiU2x1ZyApIHtcclxuXHRcdFx0Y29uc3QgYWpheFJlcXVlc3QgPSB7XHJcblx0XHRcdFx0dXJsOiB3aW5kb3cuYWpheHVybCxcclxuXHRcdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBjdXJyZW50VGFiLmdldFJlcXVlc3RPblNhdmUoKTtcclxuXHJcblx0XHRcdGFqYXhSZXF1ZXN0LmRhdGEgPSB7XHJcblx0XHRcdFx0YWN0aW9uOiBgamV0X2ZiX3NhdmVfdGFiX18keyB0aGlzLiRvcHRpb25zLm5hbWUgfWAsXHJcblx0XHRcdFx0Li4uKFxyXG5cdFx0XHRcdFx0dGFiU2x1ZyA9PT0gdGhpcy4kb3B0aW9ucy5uYW1lID8gY3VycmVudC5kYXRhIDoge1xyXG5cdFx0XHRcdFx0XHRbIHRhYlNsdWcgXTogY3VycmVudC5kYXRhLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCksXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoIHdpbmRvdz8uSmV0RkJQYWdlQ29uZmlnUGFja2FnZT8ubm9uY2UgKSB7XHJcblx0XHRcdFx0YWpheFJlcXVlc3QuZGF0YS5fbm9uY2UgPSB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnUGFja2FnZS5ub25jZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGFqYXhSZXF1ZXN0O1xyXG5cdFx0fSxcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxjeC12dWktaW5wdXRcclxuXHRcdDpsYWJlbD1cImxhYmVsLmFwaV9rZXlcIlxyXG5cdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHQ6ZGVzY3JpcHRpb249J2AkeyBoZWxwLmFwaVByZWYgfSA8YSBocmVmPVwiJHsgaGVscC5hcGlMaW5rIH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4keyBoZWxwLmFwaUxpbmtMYWJlbCB9PC9hPmAnXHJcblx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdHYtbW9kZWw9XCJhcGlfa2V5XCJcclxuXHQvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7XHJcblx0aGVscCxcclxuXHRsYWJlbFxyXG59IGZyb20gXCIuL3NvdXJjZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdnZXQtcmVzcG9uc2UtdGFiJyxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0OiB7fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsIGhlbHAsXHJcblx0XHRcdGFwaV9rZXk6ICcnLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHR0aGlzLmFwaV9rZXkgPSB0aGlzLmluY29taW5nLmFwaV9rZXkgfHwgJydcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0YXBpX2tleTogdGhpcy5hcGlfa2V5LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8Y3gtdnVpLWlucHV0XHJcblx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfa2V5XCJcclxuXHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0OmRlc2NyaXB0aW9uPSdgJHsgaGVscC5hcGlQcmVmIH0gPGEgaHJlZj1cIiR7IGhlbHAuYXBpTGluayB9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHsgaGVscC5hcGlMaW5rTGFiZWwgfTwvYT5gJ1xyXG5cdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHR2LW1vZGVsPVwiYXBpX2tleVwiXHJcblx0Lz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGhlbHAsXHJcblx0bGFiZWxcclxufSBmcm9tIFwiLi9zb3VyY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnbWFpbGNoaW1wLXRhYicsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdDoge30sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLCBoZWxwLFxyXG5cdFx0XHRhcGlfa2V5OiAnJyxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5hcGlfa2V5ID0gdGhpcy5pbmNvbWluZy5hcGlfa2V5IHx8ICcnXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFwaV9rZXk6IHRoaXMuYXBpX2tleSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDxjeC12dWktc3dpdGNoZXJcclxuXHRcdFx0bmFtZT1cImVuYWJsZV9kZXZfbW9kZVwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmVuYWJsZV9kZXZfbW9kZSA/IGAke2xhYmVsLmVuYWJsZV9kZXZfbW9kZX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmVuYWJsZV9kZXZfbW9kZVwiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuZW5hYmxlX2Rldl9tb2RlXCJcclxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2VuYWJsZV9kZXZfbW9kZScgKSA/IHN0b3JhZ2UuZW5hYmxlX2Rldl9tb2RlIDogZmFsc2VcIlxyXG5cdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxyXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdlbmFibGVfZGV2X21vZGUnLCAkZXZlbnQgKVwiXHJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdG5hbWU9XCJjbGVhcl9vbl91bmluc3RhbGxcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OmxhYmVsPVwibG9hZGluZy5jbGVhcl9vbl91bmluc3RhbGwgPyBgJHtsYWJlbC5jbGVhcl9vbl91bmluc3RhbGx9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5jbGVhcl9vbl91bmluc3RhbGxcIlxyXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmNsZWFyX29uX3VuaW5zdGFsbFwiXHJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdjbGVhcl9vbl91bmluc3RhbGwnICkgPyBzdG9yYWdlLmNsZWFyX29uX3VuaW5zdGFsbCA6IGZhbHNlXCJcclxuXHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcclxuXHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnY2xlYXJfb25fdW5pbnN0YWxsJywgJGV2ZW50IClcIlxyXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxyXG4gICAgPGN4LXZ1aS1zZWxlY3RcclxuICAgICAgICBuYW1lPVwic3NyX3ZhbGlkYXRpb25fbWV0aG9kXCJcclxuICAgICAgICA6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuICAgICAgICA6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuICAgICAgICA6bGFiZWw9XCJsb2FkaW5nLnNzcl92YWxpZGF0aW9uX21ldGhvZCA/IGAke2xhYmVsLnNzcl92YWxpZGF0aW9uX21ldGhvZH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLnNzcl92YWxpZGF0aW9uX21ldGhvZFwiXHJcbiAgICAgICAgOmRlc2NyaXB0aW9uPVwiaGVscC5zc3JfdmFsaWRhdGlvbl9tZXRob2RcIlxyXG4gICAgICAgIDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdzc3JfdmFsaWRhdGlvbl9tZXRob2QnICkgPyBzdG9yYWdlLnNzcl92YWxpZGF0aW9uX21ldGhvZCA6ICdyZXN0J1wiXHJcbiAgICAgICAgOm9wdGlvbnMtbGlzdD1cInNlbGVjdE9wdGlvbnNcIlxyXG4gICAgICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXHJcbiAgICAgICAgQGlucHV0PVwiY2hhbmdlVmFsKCAnc3NyX3ZhbGlkYXRpb25fbWV0aG9kJywgJGV2ZW50IClcIlxyXG4gICAgPjwvY3gtdnVpLXNlbGVjdD5cclxuXHRcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXJcclxuXHRcdFx0OmxhYmVsPVwiX18oICdGb3JtIEFjY2Vzc2liaWxpdHknLCAnamV0LWZvcm0tYnVpbGRlcicgKVwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0Lz5cclxuXHRcdDxkaXYgY2xhc3M9XCJjeC12dWktaW5uZXItcGFuZWxcIj5cclxuXHRcdFx0PGN4LXZ1aS1zd2l0Y2hlclxyXG5cdFx0XHRcdG5hbWU9XCJkaXNhYmxlX25leHRfYnV0dG9uXCJcclxuXHRcdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmRpc2FibGVfbmV4dF9idXR0b24gPyBgJHtsYWJlbC5kaXNhYmxlX25leHRfYnV0dG9ufSAobG9hZGluZy4uLilgIDogbGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvblwiXHJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5kaXNhYmxlX25leHRfYnV0dG9uXCJcclxuXHRcdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZGlzYWJsZV9uZXh0X2J1dHRvbicgKSA/IHN0b3JhZ2UuZGlzYWJsZV9uZXh0X2J1dHRvbiA6IHRydWVcIlxyXG5cdFx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXHJcblx0XHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnZGlzYWJsZV9uZXh0X2J1dHRvbicsICRldmVudCApXCJcclxuXHRcdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxyXG5cdFx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdFx0bmFtZT1cInNjcm9sbF9vbl9uZXh0XCJcclxuXHRcdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLnNjcm9sbF9vbl9uZXh0ID8gYCR7bGFiZWwuc2Nyb2xsX29uX25leHR9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5zY3JvbGxfb25fbmV4dFwiXHJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5zY3JvbGxfb25fbmV4dFwiXHJcblx0XHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3Njcm9sbF9vbl9uZXh0JyApID8gc3RvcmFnZS5zY3JvbGxfb25fbmV4dCA6IGZhbHNlXCJcclxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxyXG5cdFx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ3Njcm9sbF9vbl9uZXh0JywgJGV2ZW50IClcIlxyXG5cdFx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHRcdDxjeC12dWktc3dpdGNoZXJcclxuXHRcdFx0XHRuYW1lPVwiYXV0b19mb2N1c1wiXHJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdFx0OmxhYmVsPVwibG9hZGluZy5hdXRvX2ZvY3VzID8gYCR7bGFiZWwuYXV0b19mb2N1c30gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmF1dG9fZm9jdXNcIlxyXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuYXV0b19mb2N1c1wiXHJcblx0XHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2F1dG9fZm9jdXMnICkgPyBzdG9yYWdlLmF1dG9fZm9jdXMgOiBmYWxzZVwiXHJcblx0XHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcclxuXHRcdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdhdXRvX2ZvY3VzJywgJGV2ZW50IClcIlxyXG5cdFx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGhlbHAsXHJcblx0bGFiZWwsXHJcbn0gZnJvbSAnLi9zb3VyY2UnO1xyXG5cclxuXHJcbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdvcHRpb25zLXRhYicsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdDoge30sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXgsIGkxOG4gXSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsIGhlbHAsXHJcblx0XHRcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcclxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgbG9hZGluZzoge30sXHJcbiAgICAgIHNlbGVjdE9wdGlvbnM6IFtcclxuICAgICAgICB7IHZhbHVlOiAncmVzdCcsIGxhYmVsOiAoICdSZXN0IEFQSScgKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6ICdhZG1pbl9hamF4JywgbGFiZWw6ICggJ0FkbWluIEFqYXgnICkgfSxcclxuICAgICAgICB7IHZhbHVlOiAnc2VsZicsIGxhYmVsOiAoICdTZWxmJyApIH0sXHJcbiAgICAgIF0sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCB0aGlzLm9uQ2hhbmdlU3RhdGUuYmluZCggdGhpcyApICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0b25DaGFuZ2VTdGF0ZSggeyBzdGF0ZSwgc2x1ZyB9ICkge1xyXG5cdFx0XHRpZiAoICdvcHRpb25zLXRhYicgIT09IHNsdWcgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSB7fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLCAnaXNMb2FkaW5nJywgc3RhdGUgPT09ICdiZWdpbicgKTtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xyXG5cdFx0XHRpZiAoIHRoaXMuaXNMb2FkaW5nICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsIG5hbWUsIHRydWUgKTtcclxuXHJcblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdG5hbWU9XCJ1c2VfZ2F0ZXdheXNcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwudXNlX2dhdGV3YXlzXCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC51c2VfZ2F0ZXdheXNcIlxyXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiXHJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ3VzZV9nYXRld2F5cycsICRldmVudCApXCJcclxuXHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cclxuXHRcdDxjeC12dWktc3dpdGNoZXJcclxuXHRcdFx0di1pZj1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCJcclxuXHRcdFx0bmFtZT1cImVuYWJsZV90ZXN0X21vZGVcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5lbmFibGVfdGVzdF9tb2RlXCJcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuZW5hYmxlX3Rlc3RfbW9kZVwiXHJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuZW5hYmxlX3Rlc3RfbW9kZVwiXHJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2VuYWJsZV90ZXN0X21vZGUnLCAkZXZlbnQgKVwiXHJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHQ8dGVtcGxhdGUgdi1pZj1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktaW5uZXItcGFuZWxcIj5cclxuXHRcdFx0XHQ8Q3hWdWlDb2xsYXBzZU1pbmlcclxuXHRcdFx0XHRcdHdpdGgtcGFuZWxcclxuXHRcdFx0XHRcdHYtZm9yPVwiKCB0YWIsIGluZGV4ICkgaW4gZ2F0ZXdheXNcIlxyXG5cdFx0XHRcdFx0Omljb249XCJ0YWIuaWNvblwiXHJcblx0XHRcdFx0XHQ6bGFiZWw9XCJ0YWIudGl0bGVcIlxyXG5cdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXHJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJ0YWIuZGlzYWJsZWRcIlxyXG5cdFx0XHRcdFx0OmluaXRpYWwtYWN0aXZlPVwiaXNBY3RpdmUoIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0XHRcdEBjaGFuZ2U9XCJvbkNoYW5nZUFjdGl2ZSggJGV2ZW50LCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGtlZXAtYWxpdmU+XHJcblx0XHRcdFx0XHRcdDxjb21wb25lbnRcclxuXHRcdFx0XHRcdFx0XHR2LWJpbmQ6aXM9XCJ0YWIuY29tcG9uZW50XCJcclxuXHRcdFx0XHRcdFx0XHRyZWY9XCJnYXRld2F5c1wiXHJcblx0XHRcdFx0XHRcdFx0OmluY29taW5nPVwiZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwva2VlcC1hbGl2ZT5cclxuXHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXHJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwibG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXVwiXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cIm9uU2F2ZUdhdGV3YXkoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlNhdmU8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2N4LXZ1aS1idXR0b24+XHJcblx0XHRcdFx0PC9DeFZ1aUNvbGxhcHNlTWluaT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3RlbXBsYXRlPlxyXG5cdDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcblx0aGVscCxcclxuXHRsYWJlbCxcclxufSBmcm9tIFwiLi9zb3VyY2VcIjtcclxuaW1wb3J0ICogYXMgcGF5cGFsIGZyb20gJy4uLy4uL2dhdGV3YXlzL3BheXBhbCc7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCB7IFNhdmVUYWJCeUFqYXgsIEdldEluY29taW5nIH0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XHJcbmNvbnN0IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHM7XHJcblxyXG53aW5kb3cuamZiRXZlbnRCdXMgPSB3aW5kb3cuamZiRXZlbnRCdXMgfHwgbmV3IFZ1ZSgge30gKTtcclxuXHJcbmNvbnN0IGdhdGV3YXlzVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5nYXRld2F5cycsIFtcclxuXHRwYXlwYWwsXHJcbl0gKTtcclxuXHJcbmxldCByZXF1ZXN0RnVuYyA9ICgpID0+IHtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAncGF5bWVudHMtZ2F0ZXdheXMnLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGlubmVyU2x1Z3M6IEFycmF5LFxyXG5cdH0sXHJcblx0Y29tcG9uZW50czogeyBDeFZ1aUNvbGxhcHNlTWluaSB9LFxyXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZyBdLFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCwgaGVscCxcclxuXHRcdFx0c3RvcmFnZTogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApLFxyXG5cdFx0XHRnYXRld2F5czogZ2F0ZXdheXNUYWJzLFxyXG5cdFx0XHRsb2FkaW5nR2F0ZXdheXM6IHt9LFxyXG5cdFx0XHRhY3RpdmVHYXRld2F5c1RhYnM6IFtdLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgcHJvcHMgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmdHYXRld2F5cywgc2x1Zywgc3RhdGUgPT09ICdiZWdpbicgKTtcclxuXHRcdH0gKTtcclxuXHJcblxyXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAnY2hhbmdlLXRhYicsICggZnVuY3Rpb24oIHsgc2x1ZyB9ICkge1xyXG5cdFx0XHRpZiAoIHNsdWcgIT09IHRoaXMuJG9wdGlvbnMubmFtZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgWyB0aGlzLiRvcHRpb25zLm5hbWUsIC4uLnRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzIF0uam9pbiggJ19fJyApO1xyXG5cdFx0fSApLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuXHRcdHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzID0gdGhpcy5pbm5lclNsdWdzO1xyXG5cclxuXHRcdHJlcXVlc3RGdW5jID0gXy5kZWJvdW5jZSggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApXHJcblx0XHR9LCAxMDAwICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRvbkNoYW5nZUFjdGl2ZSggaXNBY3RpdmUsIHRhYk5hbWUgKSB7XHJcblx0XHRcdGxldCBbIGhhc2gsIC4uLm90aGVycyBdID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSggJyMnLCAnJyApLnNwbGl0KCAnX18nICk7XHJcblxyXG5cdFx0XHRpZiAoICEgaXNBY3RpdmUgKSB7XHJcblx0XHRcdFx0b3RoZXJzID0gb3RoZXJzLmZpbHRlciggZ2F0ZXdheVRhYiA9PiAoIHRhYk5hbWUgIT09IGdhdGV3YXlUYWIgfHwgaXNBY3RpdmUgKSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG90aGVycy5wdXNoKCB0YWJOYW1lICk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jaGFuZ2VHYXRld2F5c1RhYnMoIG90aGVycyApO1xyXG5cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBbIHRoaXMuJG9wdGlvbnMubmFtZSwgLi4ub3RoZXJzIF0uam9pbiggJ19fJyApO1xyXG5cdFx0fSxcclxuXHRcdGNoYW5nZUdhdGV3YXlzVGFicyggdGFicyApIHtcclxuXHRcdFx0dGhpcy5hY3RpdmVHYXRld2F5c1RhYnMgPSB0YWJzO1xyXG5cdFx0fSxcclxuXHRcdGlzQWN0aXZlKCB0YWJOYW1lICkge1xyXG5cdFx0XHRyZXR1cm4gQm9vbGVhbiggdGhpcy5hY3RpdmVHYXRld2F5c1RhYnMubGVuZ3RoICYmIHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzLmluY2x1ZGVzKCB0YWJOYW1lICkgKTtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xyXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcclxuXHJcblx0XHRcdHJlcXVlc3RGdW5jKCk7XHJcblx0XHR9LFxyXG5cdFx0b25TYXZlR2F0ZXdheSggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLiRyZWZzLmdhdGV3YXlzWyBpbmRleFRhYiBdO1xyXG5cclxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50LCB0YWJTbHVnICk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59XHJcblxyXG48L3NjcmlwdD4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmpmYi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDJlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLmpmYi1jb250ZW50LW1haW4ge1xuICBmbGV4OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWVcIixcIndlYnBhY2s6Ly8uLy4uL1NldHRpbmdzUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0tBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ2pLRDtBRG1LQztFQUNDLE9BQUE7QUNqS0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxyXFxuLmpmYi1jb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRnYXA6IDJlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxyXFxuXFxyXFxuXFx0Ji1tYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIuamZiLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMmVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uamZiLWNvbnRlbnQtbWFpbiB7XFxuICBmbGV4OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX2Jhbm5lci51c2VmdWwge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIHtcbiAgICB3aWR0aDogNTAlO1xufVxufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEQ0RDREQ7XG4gIHBhZGRpbmctdG9wOiAyM3B4O1xufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbms6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMDA3Q0JBO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGE6aG92ZXIge1xuICBjb2xvcjogIzA2NkVBMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGEgLmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMjhweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWVcIixcIndlYnBhY2s6Ly8uLy4uL1NldHRpbmdzU2lkZUJhci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBK0VDO0VBQ0Msa0JBQUE7QUM5RUY7QURpRkM7RUFDQyxXQUFBO0FDL0VGO0FEaUZFO0FBSEQ7SUFJRSxVQUFBO0FDOUVEO0FBQ0Y7QURnRkU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUM5RUg7QURpRkU7RUFDQyxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQy9FSDtBRGlGRztFQUNDLGdCQUFBO0FDL0VKO0FEa0ZHO0VBQ0MsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNoRko7QURrRkk7RUFDQyxjQUFBO0VBQ0EsMEJBQUE7QUNoRkw7QURtRkk7RUFDQyxrQkFBQTtBQ2pGTFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG5cXHJcXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlIHtcXHJcXG5cXHJcXG5cXHQmX19iYW5uZXIudXNlZnVsIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3BhbmVsLmhlbHAge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogY2FsYygxMDAlIC8gMik7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLWNvbnRlbnQge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcclxcblxcdFxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcdFxcdFxcdHBhZGRpbmctdG9wOiAyM3B4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuaGVscC1jZW50ZXItbGluayB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMjJweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmxhc3QtY2hpbGQge1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGEge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxNHB4O1xcclxcblxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdFxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogIzA2NkVBMjtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyOHB4O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIuamV0LWZvcm0tYnVpbGRlci1wYWdlX19iYW5uZXIudXNlZnVsIHtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RDRENERDtcXG4gIHBhZGRpbmctdG9wOiAyM3B4O1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzAwN0NCQTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDY2RUEyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbmsgYSAuaGVscC1jZW50ZXItbGluay1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMjhweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbnNwYW5bZGF0YS12LTE0YmFhMjMwXSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcclxuXHRwYWRkaW5nOiAwLjFlbSAwLjNlbTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9CQTtDQUNBLHlCQUFBO0NBQ0Esb0JBQUE7Q0FDQSx5QkFBQTtDQUNBLGtCQUFBO0NBQ0EsWUFBQTtDQUNBLGVBQUE7Q0FDQSxrQkFBQTtDQUNBLGdCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxpQkFBQTtDQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcblxcdDxzcGFuPnt7IF9fKCAnUHJvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3NwYW4+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmNvbnN0IHsgaTE4biB9ID0gSmV0RkJNaXhpbnM7XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdG5hbWU6ICdJc1BST0ljb24nLFxcclxcblxcdG1peGluczogWyBpMThuIF0sXFxyXFxuXFx0cHJvcHM6IHtcXHJcXG5cXHRcXHRpc0FjdGl2ZToge1xcclxcblxcdFxcdFxcdHR5cGU6IEJvb2xlYW4sXFxyXFxuXFx0XFx0XFx0ZGVmYXVsdDogZmFsc2UsXFxyXFxuXFx0XFx0fSxcXHJcXG5cXHR9LFxcclxcbn07XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG5zcGFuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdHBhZGRpbmc6IDAuMWVtIDAuM2VtO1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzcGFuJyxbX3ZtLl92KF92bS5fcyhfdm0uX18oICdQcm8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSkpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ0Zvcm1CdWlsZGVyUGFnZScse2F0dHJzOntcInRpdGxlXCI6X3ZtLl9fKCAnSmV0Rm9ybUJ1aWxkZXIgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKX19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItY29udGVudFwifSxbX2MoJ0FsZXJ0c0xpc3QnKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1jb250ZW50LW1haW5cIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImN4LXZ1aS1wYW5lbFwifSxbX2MoJ0N4VnVpVGFicycse2F0dHJzOntcImluLXBhbmVsXCI6ZmFsc2UsXCJ2YWx1ZVwiOl92bS5hY3RpdmVUYWJTbHVnLFwibGF5b3V0XCI6XCJ2ZXJ0aWNhbFwifSxvbjp7XCJpbnB1dFwiOl92bS5vbkNoYW5nZUFjdGl2ZVRhYn19LF92bS5fbCgoX3ZtLnRhYnMpLGZ1bmN0aW9uKHJlZixpbmRleCl7XG52YXIgZGlzcGxheUJ1dHRvbiA9IHJlZi5kaXNwbGF5QnV0dG9uOyBpZiAoIGRpc3BsYXlCdXR0b24gPT09IHZvaWQgMCApIGRpc3BsYXlCdXR0b24gPSB0cnVlO1xudmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyggcmVmLCBbXCJkaXNwbGF5QnV0dG9uXCJdICk7XG52YXIgdGFiID0gcmVzdDtcbnJldHVybiBfYygnQ3hWdWlUYWJzUGFuZWwnLHtrZXk6dGFiLmNvbXBvbmVudC5uYW1lLGF0dHJzOntcIm5hbWVcIjp0YWIuY29tcG9uZW50Lm5hbWUsXCJsYWJlbFwiOnRhYi50aXRsZSxcImRpc2FibGVkXCI6dGFiLmRpc2FibGVkLFwiaWNvblwiOnRhYi5pY29ufSxzY29wZWRTbG90czpfdm0uX3UoWyh0YWIuY29tcG9uZW50LnJlbmRlcik/e2tleTpcImRlZmF1bHRcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ2tlZXAtYWxpdmUnLFtfYyh0YWIuY29tcG9uZW50LHtyZWY6XCJ0YWJDb21wb25lbnRzXCIscmVmSW5Gb3I6dHJ1ZSx0YWc6XCJjb21wb25lbnRcIixhdHRyczp7XCJpbmNvbWluZ1wiOl92bS5nZXRJbmNvbWluZyggdGFiLmNvbXBvbmVudC5uYW1lICksXCJpbm5lci1zbHVnc1wiOl92bS5hY3RpdmVUYWJJbm5lclNsdWdzIHx8IFtdfX0pXSwxKSxfdm0uX3YoXCIgXCIpLChkaXNwbGF5QnV0dG9uKT9fYygnY3gtdnVpLWJ1dHRvbicse2F0dHJzOntcImJ1dHRvbi1zdHlsZVwiOlwiYWNjZW50XCIsXCJsb2FkaW5nXCI6X3ZtLmxvYWRpbmdUYWJbIHRhYi5jb21wb25lbnQubmFtZSBdfSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vblNhdmVUYWIoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKX19LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImxhYmVsXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdzcGFuJyxbX3ZtLl92KFwiU2F2ZVwiKV0pXX0scHJveHk6dHJ1ZX1dLG51bGwsdHJ1ZSl9KTpfdm0uX2UoKV19LHByb3h5OnRydWV9Om51bGxdLG51bGwsdHJ1ZSl9KX0pLDEpXSwxKV0pLF92bS5fdihcIiBcIiksX2MoJ1NldHRpbmdzU2lkZUJhcicpXSwxKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdTaW1wbGVXcmFwcGVyQ29tcG9uZW50Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwiZnJpZW5kbHlfa2V5XCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImxhYmVsXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW192bS5fdihfdm0uX3MoX3ZtLmxhYmVsLmtleSkpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlc2NyaXB0aW9uXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJmYi1kZXNjcmlwdGlvblwifSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyhcblx0XHRcdFx0J0l0IGNhbiBiZSBmb3VuZCBvbiB0aGUgcGFnZSBsaXN0aW5nIHlvdXIgQXBwbGljYXRpb25zLiBPciBmb2xsb3cgdGhpcycsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0KSArICcgJykrXCJcXG5cXHRcXHRcXHRcXHRcIiksX2MoJ0V4dGVybmFsTGluaycse2F0dHJzOntcImhyZWZcIjpcImh0dHBzOi8vZG9jcy5mcmllbmRseWNhcHRjaGEuY29tLyMvaW5zdGFsbGF0aW9uP2lkPV8xLWdlbmVyYXRpbmctYS1zaXRla2V5XCJ9fSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyggJ2d1aWRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpK1wiXFxuXFx0XFx0XFx0XFx0XCIpXSldLDEpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlZmF1bHRcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ2lucHV0Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6KF92bS5zdG9yYWdlLmtleSksZXhwcmVzc2lvbjpcInN0b3JhZ2Uua2V5XCJ9XSxzdGF0aWNDbGFzczpcImN4LXZ1aS1pbnB1dCBzaXplLWZ1bGx3aWR0aFwiLGF0dHJzOntcImlkXCI6XCJmcmllbmRseV9rZXlcIixcInR5cGVcIjpcInRleHRcIn0sZG9tUHJvcHM6e1widmFsdWVcIjooX3ZtLnN0b3JhZ2Uua2V5KX0sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe2lmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXsgcmV0dXJuOyB9X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwia2V5XCIsICRldmVudC50YXJnZXQudmFsdWUpfX19KV19LHByb3h5OnRydWV9XSl9KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJlbGVtZW50LWlkXCI6XCJmcmllbmRseV9zZWNyZXRcIixcImxhYmVsXCI6X3ZtLmxhYmVsLnNlY3JldCxcImRlc2NyaXB0aW9uXCI6X3ZtLl9fKFxuXHRcdFx0J0l0IGNhbiBiZSBmb3VuZCBvbiB0aGUgcGFnZSBsaXN0aW5nIHlvdXIgQVBJIGtleXMuJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdCksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2Uuc2VjcmV0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwic2VjcmV0XCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLnNlY3JldFwifX0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLFtfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwua2V5LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLmtleSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcImtleVwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5rZXlcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5zZWNyZXQsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2Uuc2VjcmV0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwic2VjcmV0XCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLnNlY3JldFwifX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcInR5cGVcIjpcIm51bWJlclwiLFwibWluXCI6MCxcIm1heFwiOjEsXCJzdGVwXCI6MC4xLFwibGFiZWxcIjpfdm0ubGFiZWwudGhyZXNob2xkLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC50aHJlc2hvbGQsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2UudGhyZXNob2xkKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwidGhyZXNob2xkXCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLnRocmVzaG9sZFwifX0pLF92bS5fdihcIiBcIiksX2MoJ3AnLHtzdGF0aWNDbGFzczpcImZiLWRlc2NyaXB0aW9uXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5oZWxwLmFwaVByZWYpK1wiIFwiKSxfYygnYScse2F0dHJzOntcImhyZWZcIjpfdm0uaGVscC5hcGlMaW5rLFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfdm0uX3YoX3ZtLl9zKF92bS5oZWxwLmFwaUxpbmtMYWJlbCkpXSldKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ1NpbXBsZVdyYXBwZXJDb21wb25lbnQnLHthdHRyczp7XCJlbGVtZW50LWlkXCI6XCJoY2FwdGNoYV9rZXlcIn0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwibGFiZWxcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX3ZtLl92KF92bS5fcyhfdm0ubGFiZWwua2V5KSldfSxwcm94eTp0cnVlfSx7a2V5OlwiZGVzY3JpcHRpb25cIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ3AnLHtzdGF0aWNDbGFzczpcImZiLWRlc2NyaXB0aW9uXCJ9LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKFxuXHRcdFx0XHRcdCdZb3UgY2FuIGZpbmQgaXQgb24gdGhpcyBwYWdlIGluIHRoZSBmaXJzdCBjb2x1bW4gb2YgU2l0ZWtleS4nLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHQpICsgJyAnKStcIlxcblxcdFxcdFxcdFxcdFxcdFwiKSxfYygnRXh0ZXJuYWxMaW5rJyx7YXR0cnM6e1wiaHJlZlwiOlwiaHR0cHM6Ly9kYXNoYm9hcmQuaGNhcHRjaGEuY29tL3NpdGVzXCJ9fSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyggJ0dvIHRvIHRoZSBkYXNoYm9hcmQgb2Ygc2l0ZXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSkrXCJcXG5cXHRcXHRcXHRcXHRcXHRcIildKV0sMSldfSxwcm94eTp0cnVlfSx7a2V5OlwiZGVmYXVsdFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygnaW5wdXQnLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTooX3ZtLnN0b3JhZ2Uua2V5KSxleHByZXNzaW9uOlwic3RvcmFnZS5rZXlcIn1dLHN0YXRpY0NsYXNzOlwiY3gtdnVpLWlucHV0IHNpemUtZnVsbHdpZHRoXCIsYXR0cnM6e1wiaWRcIjpcImhjYXB0Y2hhX2tleVwiLFwidHlwZVwiOlwidGV4dFwifSxkb21Qcm9wczp7XCJ2YWx1ZVwiOihfdm0uc3RvcmFnZS5rZXkpfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7aWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpeyByZXR1cm47IH1fdm0uJHNldChfdm0uc3RvcmFnZSwgXCJrZXlcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSl9fX0pXX0scHJveHk6dHJ1ZX1dKX0pLF92bS5fdihcIiBcIiksX2MoJ1NpbXBsZVdyYXBwZXJDb21wb25lbnQnLHthdHRyczp7XCJlbGVtZW50LWlkXCI6XCJoY2FwdGNoYV9zZWNyZXRcIn0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwibGFiZWxcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX3ZtLl92KF92bS5fcyhfdm0ubGFiZWwuc2VjcmV0KSldfSxwcm94eTp0cnVlfSx7a2V5OlwiZGVzY3JpcHRpb25cIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ3AnLHtzdGF0aWNDbGFzczpcImZiLWRlc2NyaXB0aW9uXCJ9LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKFxuXHRcdFx0XHRcdFwiWW91IGNhbiBmaW5kIGl0IG9uIHRoZSBzZXR0aW5ncyBwYWdlLFxcbnRoaXMgd2lsbCBiZSB0aGUgZmlyc3QgZmllbGQuXCIsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0XHRcdCkgKyAnICcpK1wiXFxuXFx0XFx0XFx0XFx0XFx0XCIpLF9jKCdFeHRlcm5hbExpbmsnLHthdHRyczp7XCJocmVmXCI6XCJodHRwczovL2Rhc2hib2FyZC5oY2FwdGNoYS5jb20vc2V0dGluZ3NcIn19LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKCAnR28gdG8gdGhlIFNldHRpbmdzIHBhZ2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSkrXCJcXG5cXHRcXHRcXHRcXHRcXHRcIildKV0sMSldfSxwcm94eTp0cnVlfSx7a2V5OlwiZGVmYXVsdFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygnaW5wdXQnLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTooX3ZtLnN0b3JhZ2Uuc2VjcmV0KSxleHByZXNzaW9uOlwic3RvcmFnZS5zZWNyZXRcIn1dLHN0YXRpY0NsYXNzOlwiY3gtdnVpLWlucHV0IHNpemUtZnVsbHdpZHRoXCIsYXR0cnM6e1wiaWRcIjpcImhjYXB0Y2hhX3NlY3JldFwiLFwidHlwZVwiOlwidGV4dFwifSxkb21Qcm9wczp7XCJ2YWx1ZVwiOihfdm0uc3RvcmFnZS5zZWNyZXQpfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7aWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpeyByZXR1cm47IH1fdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSl9fX0pXX0scHJveHk6dHJ1ZX1dKX0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLFtfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwidHVybnN0aWxlX2tleVwiLFwibGFiZWxcIjpfdm0ubGFiZWwua2V5LFwiZGVzY3JpcHRpb25cIjpfdm0uX18oXG5cdFx0XHQnUmVhZCB0aGUgaGludCB0byB0aGUgU2VjcmV0IEtleSBmaWVsZCcsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHQpLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLmtleSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcImtleVwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5rZXlcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJlbGVtZW50LWlkXCI6XCJ0dXJuc3RpbGVfc2VjcmV0XCIsXCJsYWJlbFwiOl92bS5sYWJlbC5zZWNyZXQsXCJkZXNjcmlwdGlvblwiOl92bS5fXyhcblx0XHRcdCdZb3UgY2FuIGZpbmQgYm90aCBrZXlzIG9uIHlvdXIgVHVybnN0aWxlIFNpdGUgc2V0dGluZ3MgcGFnZScsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHQpLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLnNlY3JldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcInNlY3JldFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5zZWNyZXRcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJmYi1kZXNjcmlwdGlvblwifSxbX3ZtLl92KFwiXFxuXFx0XFx0XCIrX3ZtLl9zKF92bS5fXyggJ0RpZG5cXCd0IGZpbmQgaXQ/IEhlcmUgaXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJykrXCJcXG5cXHRcXHRcIiksX2MoJ0V4dGVybmFsTGluaycse2F0dHJzOntcImhyZWZcIjpcImh0dHBzOi8vZGV2ZWxvcGVycy5jbG91ZGZsYXJlLmNvbS90dXJuc3RpbGUvZ2V0LXN0YXJ0ZWQvI2dldC1hLXNpdGVrZXktYW5kLXNlY3JldC1rZXlcIn19LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKCAnYSBtb3JlIGRldGFpbGVkIGRlc2NyaXB0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpK1wiXFxuXFx0XFx0XCIpXSldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLFtfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwuY2xpZW50X2lkLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLmNsaWVudF9pZCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcImNsaWVudF9pZFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5jbGllbnRfaWRcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5zZWNyZXQsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2Uuc2VjcmV0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwic2VjcmV0XCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLnNlY3JldFwifX0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ1NpZGVCYXJCb3hlcycse3Njb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImljb24taGVscFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjE0XCIsXCJoZWlnaHRcIjpcIjIxXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTQgMjFcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZFwiOlwiTTUuMjUgMjFIOC43NVYxNy41SDUuMjVWMjFaTTcgMEMzLjEzMjUgMCAwIDMuMTMyNSAwIDdIMy41QzMuNSA1LjA3NSA1LjA3NSAzLjUgNyAzLjVDOC45MjUgMy41IDEwLjUgNS4wNzUgMTAuNSA3QzEwLjUgMTAuNSA1LjI1IDEwLjA2MjUgNS4yNSAxNS43NUg4Ljc1QzguNzUgMTEuODEyNSAxNCAxMS4zNzUgMTQgN0MxNCAzLjEzMjUgMTAuODY3NSAwIDcgMFpcIixcImZpbGxcIjpcIiM3QjdFODFcIn19KV0pXX0scHJveHk6dHJ1ZX0se2tleTpcImNvbnRlbnQtaGVscFwiLGZuOmZ1bmN0aW9uKGJveCl7cmV0dXJuIFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rXCJ9LFtfYygnYScse2F0dHJzOntcImhyZWZcIjpib3gubGlua19rbm93bGVkZ2UsXCJ0YXJnZXRcIjpcIl9ibGFua1wifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstaWNvblwifSxbX2MoJ3N2Zycse2F0dHJzOntcIndpZHRoXCI6XCIxNFwiLFwiaGVpZ2h0XCI6XCIxNlwiLFwidmlld0JveFwiOlwiMCAwIDE0IDE2XCIsXCJmaWxsXCI6XCJub25lXCIsXCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtfYygncGF0aCcse2F0dHJzOntcImRcIjpcIk0xMy40NTggMTEuMjU1MkwxMy40NTggMS40MTE1QzEzLjQ1OCAxLjAzMDY0IDEzLjEzNTcgMC43MDgzNzQgMTIuNzU0OSAwLjcwODM3NEwzLjE0NTUxIDAuNzA4Mzc0QzEuNTkyNzcgMC43MDgzNzQgMC4zMzMwMDggMS45NjgxNCAwLjMzMzAwOCAzLjUyMDg3TDAuMzMzMDA4IDEyLjg5NTlDMC4zMzMwMDggMTQuNDQ4NiAxLjU5Mjc3IDE1LjcwODQgMy4xNDU1MSAxNS43MDg0TDEyLjc1NDkgMTUuNzA4NEMxMy4xMzU3IDE1LjcwODQgMTMuNDU4IDE1LjQxNTQgMTMuNDU4IDE1LjAwNTJMMTMuNDU4IDE0LjUzNjVDMTMuNDU4IDE0LjMzMTQgMTMuMzQwOCAxNC4xMjYzIDEzLjE5NDMgMTQuMDA5MkMxMy4wNDc5IDEzLjU0MDQgMTMuMDQ3OSAxMi4yNTEzIDEzLjE5NDMgMTEuODExOUMxMy4zNDA4IDExLjY5NDcgMTMuNDU4IDExLjQ4OTYgMTMuNDU4IDExLjI1NTJaTTQuMDgzMDEgNC42MzQxNkM0LjA4MzAxIDQuNTQ2MjYgNC4xNDE2IDQuNDU4MzcgNC4yNTg3OSA0LjQ1ODM3TDEwLjQ2OTcgNC40NTgzN0MxMC41NTc2IDQuNDU4MzcgMTAuNjQ1NSA0LjU0NjI2IDEwLjY0NTUgNC42MzQxNkwxMC42NDU1IDUuMjIwMDlDMTAuNjQ1NSA1LjMzNzI4IDEwLjU1NzYgNS4zOTU4NyAxMC40Njk3IDUuMzk1ODdMNC4yNTg3OSA1LjM5NTg3QzQuMTQxNiA1LjM5NTg3IDQuMDgzMDEgNS4zMzcyOCA0LjA4MzAxIDUuMjIwMDlMNC4wODMwMSA0LjYzNDE2Wk00LjA4MzAxIDYuNTA5MTZDNC4wODMwMSA2LjQyMTI3IDQuMTQxNiA2LjMzMzM3IDQuMjU4NzkgNi4zMzMzN0wxMC40Njk3IDYuMzMzMzdDMTAuNTU3NiA2LjMzMzM3IDEwLjY0NTUgNi40MjEyNyAxMC42NDU1IDYuNTA5MTZMMTAuNjQ1NSA3LjA5NTA5QzEwLjY0NTUgNy4yMTIyOCAxMC41NTc2IDcuMjcwODcgMTAuNDY5NyA3LjI3MDg3TDQuMjU4NzkgNy4yNzA4N0M0LjE0MTYgNy4yNzA4NyA0LjA4MzAxIDcuMjEyMjggNC4wODMwMSA3LjA5NTA5TDQuMDgzMDEgNi41MDkxNlpNMTEuNDk1MSAxMy44MzM0TDMuMTQ1NTEgMTMuODMzNEMyLjYxODE2IDEzLjgzMzQgMi4yMDgwMSAxMy40MjMyIDIuMjA4MDEgMTIuODk1OUMyLjIwODAxIDEyLjM5NzggMi42MTgxNiAxMS45NTg0IDMuMTQ1NTEgMTEuOTU4NEwxMS40OTUxIDExLjk1ODRDMTEuNDM2NSAxMi40ODU3IDExLjQzNjUgMTMuMzM1MyAxMS40OTUxIDEzLjgzMzRaXCIsXCJmaWxsXCI6XCIjMDA3Q0JBXCJ9fSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1sYWJlbFwifSxbX3ZtLl92KF92bS5fcyhib3gubGFiZWxfa25vd2xlZGdlKSldKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rXCJ9LFtfYygnYScse2F0dHJzOntcImhyZWZcIjpib3gubGlua19jb21tdW5pdHksXCJ0YXJnZXRcIjpcIl9ibGFua1wifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstaWNvblwifSxbX2MoJ3N2Zycse2F0dHJzOntcIndpZHRoXCI6XCIxNlwiLFwiaGVpZ2h0XCI6XCIxNlwiLFwidmlld0JveFwiOlwiMCAwIDE2IDE2XCIsXCJmaWxsXCI6XCJub25lXCIsXCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtfYygncGF0aCcse2F0dHJzOntcImRcIjpcIk0xNS41OTEzIDguMDQ1NjRDMTUuNTkxMyAzLjg3NzI4IDEyLjIxNCAwLjUgOC4wNDU2NCAwLjVDMy44NzcyOCAwLjUgMC41IDMuODc3MjggMC41IDguMDQ1NjRDMC41IDExLjgxODUgMy4yMzgzNCAxNC45NTIzIDYuODU5MDMgMTUuNUw2Ljg1OTAzIDEwLjIzNjNMNC45NDIxOSAxMC4yMzYzTDQuOTQyMTkgOC4wNDU2NEw2Ljg1OTAzIDguMDQ1NjRMNi44NTkwMyA2LjQwMjY0QzYuODU5MDMgNC41MTYyMyA3Ljk4NDc5IDMuNDUxMzIgOS42ODg2NCAzLjQ1MTMyQzEwLjU0MDYgMy40NTEzMiAxMS4zOTI1IDMuNjAzNDUgMTEuMzkyNSAzLjYwMzQ1TDExLjM5MjUgNS40NTk0M0wxMC40NDkzIDUuNDU5NDNDOS41MDYwOSA1LjQ1OTQzIDkuMjAxODMgNi4wMzc1MyA5LjIwMTgzIDYuNjQ2MDRMOS4yMDE4MyA4LjA0NTY0TDExLjMwMTIgOC4wNDU2NEwxMC45NjY1IDEwLjIzNjNMOS4yMDE4MyAxMC4yMzYzTDkuMjAxODMgMTUuNUMxMi44MjI1IDE0Ljk1MjMgMTUuNTkxMyAxMS44MTg1IDE1LjU5MTMgOC4wNDU2NFpcIixcImZpbGxcIjpcIiMwMDdDQkFcIn19KV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCJ9LFtfdm0uX3YoX3ZtLl9zKGJveC5sYWJlbF9jb21tdW5pdHkpKV0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmtcIn0sW19jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOmJveC5saW5rX3N1cHBvcnQsXCJ0YXJnZXRcIjpcIl9ibGFua1wifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstaWNvblwifSxbX2MoJ3N2Zycse2F0dHJzOntcIndpZHRoXCI6XCIxNVwiLFwiaGVpZ2h0XCI6XCIxOFwiLFwidmlld0JveFwiOlwiMCAwIDE1IDE4XCIsXCJmaWxsXCI6XCJub25lXCIsXCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtfYygncGF0aCcse2F0dHJzOntcImRcIjpcIk03LjU4MzMzIDAuNjY2Njg3QzMuNjc1IDAuNjY2Njg3IDAuNSAzLjg0MTY5IDAuNSA3Ljc1MDAyQzAuNSAxMS42NTg0IDMuNjc1IDE0LjgzMzQgNy41ODMzMyAxNC44MzM0SDhWMTcuMzMzNEMxMi4wNSAxNS4zODM0IDE0LjY2NjcgMTEuNSAxNC42NjY3IDcuNzUwMDJDMTQuNjY2NyAzLjg0MTY5IDExLjQ5MTcgMC42NjY2ODcgNy41ODMzMyAwLjY2NjY4N1pNOC40MTY2NyAxMi43NUg2Ljc1VjExLjA4MzRIOC40MTY2N1YxMi43NVpNOC40MTY2NyA5LjgzMzM1SDYuNzVDNi43NSA3LjEyNTAyIDkuMjUgNy4zMzMzNSA5LjI1IDUuNjY2NjlDOS4yNSA0Ljc1MDAyIDguNSA0LjAwMDAyIDcuNTgzMzMgNC4wMDAwMkM2LjY2NjY3IDQuMDAwMDIgNS45MTY2NyA0Ljc1MDAyIDUuOTE2NjcgNS42NjY2OUg0LjI1QzQuMjUgMy44MjUwMiA1Ljc0MTY3IDIuMzMzMzUgNy41ODMzMyAyLjMzMzM1QzkuNDI1IDIuMzMzMzUgMTAuOTE2NyAzLjgyNTAyIDEwLjkxNjcgNS42NjY2OUMxMC45MTY3IDcuNzUwMDIgOC40MTY2NyA3Ljk1ODM1IDguNDE2NjcgOS44MzMzNVpcIixcImZpbGxcIjpcIiMwMDdDQkFcIn19KV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCJ9LFtfdm0uX3YoX3ZtLl9zKGJveC5sYWJlbF9zdXBwb3J0KSldKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rXCJ9LFtfYygnYScse2F0dHJzOntcImhyZWZcIjpib3gubGlua19naXQsXCJ0YXJnZXRcIjpcIl9ibGFua1wifX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstaWNvblwifSxbX2MoJ3N2Zycse2F0dHJzOntcIndpZHRoXCI6XCIxNlwiLFwiaGVpZ2h0XCI6XCIxNlwiLFwidmlld0JveFwiOlwiMCAwIDE2IDE2XCIsXCJmaWxsXCI6XCJub25lXCIsXCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtfYygncGF0aCcse2F0dHJzOntcImZpbGwtcnVsZVwiOlwiZXZlbm9kZFwiLFwiY2xpcC1ydWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNy45NzYgMEM1Ljg2MDcxIDAuMDAwMjY1MTU2IDMuODMyMTQgMC44NDA2NzYgMi4zMzY0MSAyLjMzNjQxQzAuODQwNjc2IDMuODMyMTQgMC4wMDAyNjUxNTYgNS44NjA3MSAwIDcuOTc2QzAgMTEuNDk4IDIuMyAxNC40ODMgNS40MzEgMTUuNTZDNS44MjMgMTUuNjA5IDUuOTY5IDE1LjM2NCA1Ljk2OSAxNS4xNjhWMTMuNzk4QzMuNzY4IDE0LjI4OCAzLjI3OSAxMi43MjIgMy4yNzkgMTIuNzIyQzIuOTM2IDExLjc5MiAyLjM5OCAxMS41NDcgMi4zOTggMTEuNTQ3QzEuNjY0IDExLjA1OCAyLjQ0NiAxMS4wNTggMi40NDYgMTEuMDU4QzMuMjI5IDExLjEwNyAzLjY3IDExLjg5IDMuNjcgMTEuODlDNC40MDQgMTMuMTEzIDUuNTI5IDEyLjc3IDUuOTcgMTIuNTc1QzYuMDE4IDEyLjAzNyA2LjI2MyAxMS42OTUgNi40NTkgMTEuNDk5QzQuNjk3IDExLjMwMyAyLjgzOCAxMC42MTggMi44MzggNy41MzVDMi44MzggNi42NTUgMy4xMzEgNS45NjkgMy42NyA1LjM4MkMzLjYyIDUuMjM1IDMuMzI3IDQuNDA0IDMuNzY4IDMuMzI3QzMuNzY4IDMuMzI3IDQuNDUzIDMuMTMxIDUuOTY5IDQuMTU5QzYuNjA1IDMuOTYzIDcuMjkxIDMuOTE0IDcuOTc2IDMuOTE0QzguNjYxIDMuOTE0IDkuMzQ2IDQuMDEyIDkuOTgyIDQuMTU5QzExLjQ5OSAzLjEzMiAxMi4xODQgMy4zMjcgMTIuMTg0IDMuMzI3QzEyLjYyNCA0LjQwNCAxMi4zMyA1LjIzNSAxMi4yODEgNS40MzFDMTIuODE5OSA2LjAxODA4IDEzLjExNzEgNi43ODcxIDEzLjExMyA3LjU4NEMxMy4xMTMgMTAuNjY3IDExLjI1MyAxMS4zMDMgOS40OTMgMTEuNDk5QzkuNzg2IDExLjc0MyAxMC4wMzEgMTIuMjMyIDEwLjAzMSAxMi45NjZWMTUuMTY4QzEwLjAzMSAxNS4zNjQgMTAuMTc3IDE1LjYwOCAxMC41NjkgMTUuNTZDMTIuMTU1IDE1LjAyNDggMTMuNTMyNyAxNC4wMDQ2IDE0LjUwNzMgMTIuNjQzNkMxNS40ODE4IDExLjI4MjcgMTYuMDA0IDkuNjQ5ODkgMTYgNy45NzZDMTUuOTUxIDMuNTcyIDEyLjM4IDAgNy45NzYgMFpcIixcImZpbGxcIjpcIiMwMDdDQkFcIn19KV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCJ9LFtfdm0uX3YoX3ZtLl9zKGJveC5sYWJlbF9naXQpKV0pXSldKV19fV0pfSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLF92bS5fbCgoX3ZtLmNhcHRjaGEpLGZ1bmN0aW9uKHRhYixpbmRleCl7cmV0dXJuIF9jKCdDeFZ1aUNvbGxhcHNlTWluaScse2tleTp0YWIuY29tcG9uZW50Lm5hbWUsYXR0cnM6e1wid2l0aC1wYW5lbFwiOlwiXCIsXCJpY29uXCI6dGFiLmljb24sXCJsYWJlbFwiOl92bS5nZXRUYWJUaXRsZSggdGFiICksXCJkaXNhYmxlZFwiOnRhYi5kaXNhYmxlZCxcImluaXRpYWwtYWN0aXZlXCI6X3ZtLmlzQWN0aXZlKCB0YWIuY29tcG9uZW50Lm5hbWUgKX0sb246e1wiY2hhbmdlXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLm9uQ2hhbmdlQWN0aXZlKCAkZXZlbnQsIHRhYi5jb21wb25lbnQubmFtZSApfX19LFtfYygna2VlcC1hbGl2ZScsW19jKHRhYi5jb21wb25lbnQse3JlZjpcImNhcHRjaGFcIixyZWZJbkZvcjp0cnVlLHRhZzpcImNvbXBvbmVudFwiLGF0dHJzOntcImluY29taW5nXCI6X3ZtLmdldEluY29taW5nQ2FwdGNoYSggdGFiLmNvbXBvbmVudC5uYW1lICl9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImFjY2VudFwiLFwibG9hZGluZ1wiOl92bS5sb2FkaW5nR2F0ZXdheXNbIHRhYi5jb21wb25lbnQubmFtZSBdfSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vblNhdmVHYXRld2F5KCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lICl9fX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFtfdm0uX3YoXCJTYXZlXCIpXSldKV0sMSl9KSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLmFwaV9rZXksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJkZXNjcmlwdGlvblwiOigoX3ZtLmhlbHAuYXBpUHJlZikgKyBcIiA8YSBocmVmPVxcXCJcIiArIChfdm0uaGVscC5hcGlMaW5rKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+XCIgKyAoX3ZtLmhlbHAuYXBpTGlua0xhYmVsKSArIFwiPC9hPlwiKSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uYXBpX2tleSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5hcGlfa2V5PSQkdn0sZXhwcmVzc2lvbjpcImFwaV9rZXlcIn19KX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLmFwaV9rZXksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJkZXNjcmlwdGlvblwiOigoX3ZtLmhlbHAuYXBpUHJlZikgKyBcIiA8YSBocmVmPVxcXCJcIiArIChfdm0uaGVscC5hcGlMaW5rKSArIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+XCIgKyAoX3ZtLmhlbHAuYXBpTGlua0xhYmVsKSArIFwiPC9hPlwiKSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uYXBpX2tleSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5hcGlfa2V5PSQkdn0sZXhwcmVzc2lvbjpcImFwaV9rZXlcIn19KX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2RpdicsW19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJlbmFibGVfZGV2X21vZGVcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuZW5hYmxlX2Rldl9tb2RlID8gKChfdm0ubGFiZWwuZW5hYmxlX2Rldl9tb2RlKSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5lbmFibGVfZGV2X21vZGUsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmVuYWJsZV9kZXZfbW9kZSxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdlbmFibGVfZGV2X21vZGUnICkgPyBfdm0uc3RvcmFnZS5lbmFibGVfZGV2X21vZGUgOiBmYWxzZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnZW5hYmxlX2Rldl9tb2RlJywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1zd2l0Y2hlcicse2F0dHJzOntcIm5hbWVcIjpcImNsZWFyX29uX3VuaW5zdGFsbFwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5jbGVhcl9vbl91bmluc3RhbGwgPyAoKF92bS5sYWJlbC5jbGVhcl9vbl91bmluc3RhbGwpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmNsZWFyX29uX3VuaW5zdGFsbCxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuY2xlYXJfb25fdW5pbnN0YWxsLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2NsZWFyX29uX3VuaW5zdGFsbCcgKSA/IF92bS5zdG9yYWdlLmNsZWFyX29uX3VuaW5zdGFsbCA6IGZhbHNlLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdjbGVhcl9vbl91bmluc3RhbGwnLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXNlbGVjdCcse2F0dHJzOntcIm5hbWVcIjpcInNzcl92YWxpZGF0aW9uX21ldGhvZFwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnLFwibGFiZWxcIjpfdm0ubG9hZGluZy5zc3JfdmFsaWRhdGlvbl9tZXRob2QgPyAoKF92bS5sYWJlbC5zc3JfdmFsaWRhdGlvbl9tZXRob2QpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLnNzcl92YWxpZGF0aW9uX21ldGhvZCxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuc3NyX3ZhbGlkYXRpb25fbWV0aG9kLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3Nzcl92YWxpZGF0aW9uX21ldGhvZCcgKSA/IF92bS5zdG9yYWdlLnNzcl92YWxpZGF0aW9uX21ldGhvZCA6ICdyZXN0JyxcIm9wdGlvbnMtbGlzdFwiOl92bS5zZWxlY3RPcHRpb25zLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdzc3JfdmFsaWRhdGlvbl9tZXRob2QnLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWNvbXBvbmVudC13cmFwcGVyJyx7YXR0cnM6e1wibGFiZWxcIjpfdm0uX18oICdGb3JtIEFjY2Vzc2liaWxpdHknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXX19KSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImN4LXZ1aS1pbm5lci1wYW5lbFwifSxbX2MoJ2N4LXZ1aS1zd2l0Y2hlcicse2F0dHJzOntcIm5hbWVcIjpcImRpc2FibGVfbmV4dF9idXR0b25cIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuZGlzYWJsZV9uZXh0X2J1dHRvbiA/ICgoX3ZtLmxhYmVsLmRpc2FibGVfbmV4dF9idXR0b24pICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmRpc2FibGVfbmV4dF9idXR0b24sXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmRpc2FibGVfbmV4dF9idXR0b24sXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnZGlzYWJsZV9uZXh0X2J1dHRvbicgKSA/IF92bS5zdG9yYWdlLmRpc2FibGVfbmV4dF9idXR0b24gOiB0cnVlLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdkaXNhYmxlX25leHRfYnV0dG9uJywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1zd2l0Y2hlcicse2F0dHJzOntcIm5hbWVcIjpcInNjcm9sbF9vbl9uZXh0XCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJsYWJlbFwiOl92bS5sb2FkaW5nLnNjcm9sbF9vbl9uZXh0ID8gKChfdm0ubGFiZWwuc2Nyb2xsX29uX25leHQpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLnNjcm9sbF9vbl9uZXh0LFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5zY3JvbGxfb25fbmV4dCxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdzY3JvbGxfb25fbmV4dCcgKSA/IF92bS5zdG9yYWdlLnNjcm9sbF9vbl9uZXh0IDogZmFsc2UsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ3Njcm9sbF9vbl9uZXh0JywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1zd2l0Y2hlcicse2F0dHJzOntcIm5hbWVcIjpcImF1dG9fZm9jdXNcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuYXV0b19mb2N1cyA/ICgoX3ZtLmxhYmVsLmF1dG9fZm9jdXMpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmF1dG9fZm9jdXMsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmF1dG9fZm9jdXMsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnYXV0b19mb2N1cycgKSA/IF92bS5zdG9yYWdlLmF1dG9fZm9jdXMgOiBmYWxzZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnYXV0b19mb2N1cycsICRldmVudCApfX19KV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJ1c2VfZ2F0ZXdheXNcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxhYmVsLnVzZV9nYXRld2F5cyxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAudXNlX2dhdGV3YXlzLFwidmFsdWVcIjpfdm0uc3RvcmFnZS51c2VfZ2F0ZXdheXN9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ3VzZV9nYXRld2F5cycsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLChfdm0uc3RvcmFnZS51c2VfZ2F0ZXdheXMpP19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJlbmFibGVfdGVzdF9tb2RlXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmVuYWJsZV90ZXN0X21vZGUsXCJsYWJlbFwiOl92bS5sYWJlbC5lbmFibGVfdGVzdF9tb2RlLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5lbmFibGVfdGVzdF9tb2RlfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdlbmFibGVfdGVzdF9tb2RlJywgJGV2ZW50ICl9fX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5zdG9yYWdlLnVzZV9nYXRld2F5cyk/W19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImN4LXZ1aS1pbm5lci1wYW5lbFwifSxfdm0uX2woKF92bS5nYXRld2F5cyksZnVuY3Rpb24odGFiLGluZGV4KXtyZXR1cm4gX2MoJ0N4VnVpQ29sbGFwc2VNaW5pJyx7a2V5OnRhYi5jb21wb25lbnQubmFtZSxhdHRyczp7XCJ3aXRoLXBhbmVsXCI6XCJcIixcImljb25cIjp0YWIuaWNvbixcImxhYmVsXCI6dGFiLnRpdGxlLFwiZGlzYWJsZWRcIjp0YWIuZGlzYWJsZWQsXCJpbml0aWFsLWFjdGl2ZVwiOl92bS5pc0FjdGl2ZSggdGFiLmNvbXBvbmVudC5uYW1lICl9LG9uOntcImNoYW5nZVwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vbkNoYW5nZUFjdGl2ZSggJGV2ZW50LCB0YWIuY29tcG9uZW50Lm5hbWUgKX19fSxbX2MoJ2tlZXAtYWxpdmUnLFtfYyh0YWIuY29tcG9uZW50LHtyZWY6XCJnYXRld2F5c1wiLHJlZkluRm9yOnRydWUsdGFnOlwiY29tcG9uZW50XCIsYXR0cnM6e1wiaW5jb21pbmdcIjpfdm0uZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktYnV0dG9uJyx7YXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJhY2NlbnRcIixcImxvYWRpbmdcIjpfdm0ubG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXX0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25TYXZlR2F0ZXdheSggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApfX19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX3ZtLl92KFwiU2F2ZVwiKV0pXSldLDEpfSksMSldOl92bS5fZSgpXSwyKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGI0MzUwMGUmbGFuZz1zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjdmZTA4NWY3XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjU0YjY0YyZsYW5nPXNjc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNTgwMTRhMTFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI1NGI2NGMmbGFuZz1zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI1NGI2NGMmbGFuZz1zY3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjcxMGVjZDhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNGJhYTIzMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE0YmFhMjMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE0YmFhMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE0YmFhMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTRiYWEyMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiNDM1MDBlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YjQzNTAwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YjQzNTAwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YjQzNTAwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjQzNTAwZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRiNDM1MDBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBodWJzcG90IGZyb20gJy4vcHJvQWRkb25zL2h1YnNwb3QnO1xyXG5pbXBvcnQgYWRkcmVzc0F1dG9jb21wbGV0ZSBmcm9tICcuL3Byb0FkZG9ucy9hZGRyZXNzQXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IGNvbnZlcnRraXQgZnJvbSAnLi9wcm9BZGRvbnMvY29udmVydGtpdCc7XHJcbmltcG9ydCBtYWlsZXJsaXRlIGZyb20gJy4vcHJvQWRkb25zL21haWxlcmxpdGUnO1xyXG5pbXBvcnQgbW9vc2VuZCBmcm9tICcuL3Byb0FkZG9ucy9tb29zZW5kJztcclxuaW1wb3J0IHN0cmlwZSBmcm9tICcuL3Byb0dhdGV3YXlzL3N0cmlwZSc7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCBhZGRvbnMgPSBbXHJcblx0YWRkcmVzc0F1dG9jb21wbGV0ZSxcclxuXHRodWJzcG90LFxyXG5cdGNvbnZlcnRraXQsXHJcblx0bWFpbGVybGl0ZSxcclxuXHRtb29zZW5kLFxyXG5dO1xyXG5cclxuY29uc3QgZ2F0ZXdheXMgPSBbXHJcblx0c3RyaXBlXHJcbl07XHJcblxyXG5jb25zdCBnZXRNb2R1bGVzTmFtZXMgPSBtb2R1bGVzID0+IG1vZHVsZXMubWFwKCBpdGVtID0+IChcclxuXHRpdGVtLmNvbXBvbmVudC5uYW1lXHJcbikgKTtcclxuXHJcblxyXG5jb25zdCBydW4gPSAoKSA9PiB7XHJcblx0YWRkRmlsdGVyKCAnamV0LmZiLnJlZ2lzdGVyLnNldHRpbmdzLXBhZ2UudGFicycsICdqZXQtZm9ybS1idWlsZGVyJywgbW9kdWxlcyA9PiB7XHJcblx0XHRjb25zdCBuYW1lcyA9IGdldE1vZHVsZXNOYW1lcyggbW9kdWxlcyApO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGFkZG9uIG9mIGFkZG9ucyApIHtcclxuXHRcdFx0aWYgKCBuYW1lcy5pbmNsdWRlcyggYWRkb24uY29tcG9uZW50Lm5hbWUgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRtb2R1bGVzLnB1c2goIGFkZG9uICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1vZHVsZXM7XHJcblx0fSwgMTAwMCApO1xyXG5cclxuXHRhZGRGaWx0ZXIoICdqZXQuZmIucmVnaXN0ZXIuZ2F0ZXdheXMnLCAnamV0LWZvcm0tYnVpbGRlcicsIG1vZHVsZXMgPT4ge1xyXG5cdFx0Y29uc3QgbmFtZXMgPSBnZXRNb2R1bGVzTmFtZXMoIG1vZHVsZXMgKTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBnYXRld2F5IG9mIGdhdGV3YXlzICkge1xyXG5cdFx0XHRpZiAoIG5hbWVzLmluY2x1ZGVzKCBnYXRld2F5LmNvbXBvbmVudC5uYW1lICkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0bW9kdWxlcy5wdXNoKCBnYXRld2F5ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1vZHVsZXM7XHJcblx0fSwgMTAwMCApO1xyXG59O1xyXG5cclxuaWYgKCAhIHdpbmRvdz8uSmV0RkJQYWdlQ29uZmlnPy5pc19hY3RpdmUgKSB7XHJcblx0cnVuKCk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRmMDMwZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNTRmMDMwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNTRmMDMwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNTRmMDMwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRmMDMwZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA1NGYwMzBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBUYWIgZnJvbSAnLi9mcmllbmRseUNhcHRjaGEudnVlJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRjb21wb25lbnQsXHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsIH07IiwiaW1wb3J0IFRhYiBmcm9tICcuL3JlQ0FQVENIQXYzLnZ1ZSc7XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSBUYWI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50LFxyXG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4Y2ViN2ZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYzOGNlYjdmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYzOGNlYjdmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYzOGNlYjdmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4Y2ViN2ZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MzhjZWI3ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZ29vZ2xlL3JlQ0FQVENIQXYzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHR0aHJlc2hvbGQ6IF9fKCAnU2NvcmUgVGhyZXNob2xkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdHRocmVzaG9sZDogX18oXHJcblx0XHRgSXQgc2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBkZWZhdWx0IDAuNSAoMS4wIGlzIHZlcnkgbGlrZWx5IGEgZ29vZCBpbnRlcmFjdGlvbiwgMC4wIGlzIHZlcnkgbGlrZWx5IGEgYm90KS5gLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInXHJcblx0KSxcclxuXHRhcGlQcmVmOiBfXyggJ1JlZ2lzdGVyIHJlQ0FQVENIQSB2MyBrZXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRhcGlMaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYWRtaW4vY3JlYXRlJ1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDU2N2ZhNFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9oQ2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzQ1NjdmYTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzQ1NjdmYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzQ1NjdmYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDU2N2ZhNFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM0NTY3ZmE0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9oQ2FwdGNoYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IFRhYiBmcm9tICcuL2hDYXB0Y2hhLnZ1ZSc7XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSBUYWI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50LFxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdGtleTogX18oICdTaXRlIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgbGFiZWwgfTsiLCJpbXBvcnQgVGFiIGZyb20gJy4vdHVybnN0aWxlLnZ1ZSc7XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSBUYWI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50LFxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdGtleTogX18oICdTaXRlIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgbGFiZWwgfTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE5ZmZhMzhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWE5ZmZhMzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWE5ZmZhMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWE5ZmZhMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE5ZmZhMzhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YTlmZmEzOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGVmZjgwNGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOGVmZjgwNGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOGVmZjgwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOGVmZjgwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGVmZjgwNGNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4ZWZmODA0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IFRhYiBmcm9tICcuL1BheXBhbFRhYi52dWUnO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHRpdGxlID0gX18oICdQYXlQYWwgR2F0ZXdheSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcclxuY29uc3QgY29tcG9uZW50ID0gVGFiO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0Y2xpZW50X2lkOiBfXyggJ0NsaWVudCBJRCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxufTtcclxuXHJcbmNvbnN0IGhlbHAgPSB7fTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0aXRsZTogX18oICdBZGRyZXNzIEF1dG9jb21wbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNvbXBvbmVudDoge1xyXG5cdFx0bmFtZTogJ2pmYi1hZGRyZXNzLXRhYicsXHJcblx0fSxcclxuXHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRpY29uOiBJc1BST0ljb24sXHJcbn07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0aXRsZTogX18oICdDb252ZXJ0S2l0IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNvbXBvbmVudDoge1xyXG5cdFx0bmFtZTogJ2NvbnZlcnQta2l0LXRhYicsXHJcblx0fSxcclxuXHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRpY29uOiBJc1BST0ljb24sXHJcbn07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0aXRsZTogX18oICdIdWJTcG90IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNvbXBvbmVudDoge1xyXG5cdFx0bmFtZTogJ2h1YnNwb3QnLFxyXG5cdH0sXHJcblx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0aWNvbjogSXNQUk9JY29uLFxyXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dGl0bGU6IF9fKCAnTWFpbGVyTGl0ZSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjb21wb25lbnQ6IHtcclxuXHRcdG5hbWU6ICdtYWlsZXItbGl0ZS10YWInLFxyXG5cdH0sXHJcblx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0aWNvbjogSXNQUk9JY29uLFxyXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dGl0bGU6IF9fKCAnTW9vc2VuZCBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjb21wb25lbnQ6IHtcclxuXHRcdG5hbWU6ICdtb29zZW5kJyxcclxuXHR9LFxyXG5cdGRpc2FibGVkOiB0cnVlLFxyXG5cdGljb246IElzUFJPSWNvbixcclxufTsiLCJpbXBvcnQgSXNQUk9JY29uIGZyb20gJy4uL0lzUFJPSWNvbic7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHRpdGxlOiBfXyggJ1N0cmlwZSBHYXRld2F5IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNvbXBvbmVudDoge1xyXG5cdFx0bmFtZTogJ3N0cmlwZSdcclxuXHR9LFxyXG5cdGRpc2FibGVkOiB0cnVlLFxyXG5cdGljb246IElzUFJPSWNvbixcclxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjU0YjY0Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjU0YjY0YyZsYW5nPXNjc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDI1NGI2NGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDI1NGI2NGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDI1NGI2NGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI1NGI2NGNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MjU0YjY0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJiMzZlNTVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MmIzNmU1NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MmIzNmU1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MmIzNmU1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJiMzZlNTVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MmIzNmU1NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IENhcHRjaGFUYWIgZnJvbSAnLi9DYXB0Y2hhVGFiLnZ1ZSc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgdGl0bGUgICAgICAgICA9IF9fKCAnQ2FwdGNoYSBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xyXG5jb25zdCBjb21wb25lbnQgICAgID0gQ2FwdGNoYVRhYjtcclxuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcblx0ZGlzcGxheUJ1dHRvbixcclxufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRkYmViYlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDU0ZGJlYmInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDU0ZGJlYmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDU0ZGJlYmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRkYmViYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA1NGRiZWJiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IEdldFJlc3BvbnNlVGFiIGZyb20gJy4vR2V0UmVzcG9uc2VUYWIudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSA9IF9fKCAnR2V0UmVzcG9uc2UgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCA9IEdldFJlc3BvbnNlVGFiO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnRcclxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBsYWJlbCA9IHtcclxuXHRhcGlfa2V5OiBfXyggJ0FQSSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTtcclxuXHJcbmNvbnN0IGhlbHAgPSB7XHJcblx0YXBpUHJlZjogX18oICdIb3cgdG8gb2J0YWluIHlvdXIgR2V0UmVzcG9uc2UgQVBJIEtleT8gTW9yZSBpbmZvJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRhcGlMaW5rOiAnaHR0cHM6Ly9hcHAuZ2V0cmVzcG9uc2UuY29tL2FwaSdcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4M2MzZGM5XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc4M2MzZGM5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc4M2MzZGM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc4M2MzZGM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4M2MzZGM5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzgzYzNkYzknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IE1haWxDaGltcFRhYiBmcm9tICcuL01haWxDaGltcFRhYi52dWUnO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHRpdGxlID0gX18oICdNYWlsQ2hpbXAgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCA9IE1haWxDaGltcFRhYjtcclxuXHJcbmV4cG9ydCB7XHJcblx0dGl0bGUsXHJcblx0Y29tcG9uZW50XHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0YXBpX2tleTogX18oICdBUEkgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGFwaVByZWY6IF9fKCAnSG93IHRvIG9idGFpbiB5b3VyIE1haWxDaGltcCBBUEkgS2V5PyBNb3JlIGluZm8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGFwaUxpbms6ICdodHRwczovL21haWxjaGltcC5jb20vaGVscC9hYm91dC1hcGkta2V5cy8nXHJcbn07XHJcblxyXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWRjNDJkZTZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5ZGM0MmRlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5ZGM0MmRlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5ZGM0MmRlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWRjNDJkZTZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZGM0MmRlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IE9wdGlvbnNUYWIgZnJvbSAnLi9PcHRpb25zVGFiLnZ1ZSc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgdGl0bGUgICAgICAgICA9IF9fKCAnT3B0aW9ucycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xyXG5jb25zdCBjb21wb25lbnQgICAgID0gT3B0aW9uc1RhYjtcclxuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcblx0ZGlzcGxheUJ1dHRvbixcclxufTsiLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5jb25zdCBsYWJlbCA9IHtcclxuXHRlbmFibGVfZGV2X21vZGU6IF9fKCAnRW5hYmxlIERldi1Nb2RlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0ZGlzYWJsZV9uZXh0X2J1dHRvbjogX18oICdEaXNhYmxlIFwiTmV4dFwiIGJ1dHRvbicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNsZWFyX29uX3VuaW5zdGFsbDogX18oXHJcblx0XHQnQ2xlYXIgcGx1Z2luIGRhdGEgYWZ0ZXIgdGhlIHVuaW5zdGFsbCcsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRzY3JvbGxfb25fbmV4dDogX18oXHJcblx0XHQnU2Nyb2xsIHRvIHRoZSB0b3Agb24gcGFnZSBjaGFuZ2UnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcblx0YXV0b19mb2N1czogX18oXHJcblx0XHQnQXV0b21hdGljIGZvY3VzJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdHNzcl92YWxpZGF0aW9uX21ldGhvZDogX18oXHJcblx0XHQnU2VydmVyIHNpZGUgdmFsaWRhdGlvbiBtZXRob2QnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGVuYWJsZV9kZXZfbW9kZTogX18oXHJcblx0XHQnV2l0aCBkZXZlbG9wZXIgbW9kZSBlbmFibGVkLCBlcnJvcnMgZnJvbSB0aGUgZm9ybSB3aWxsIGJlIHNhdmVkLicsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRkaXNhYmxlX25leHRfYnV0dG9uOiBfXyhcclxuXHRcdGBJZiB0aGlzIG9wdGlvbiBpcyBhY3RpdmUsIHRoZSBOZXh0IGJ1dHRvbiBpbiBhIG11bHRpLXN0ZXAgZm9ybSB3b24ndCBiZWNvbWUgY2xpY2thYmxlIHVudGlsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzIGFyZSBjb21wbGV0ZWQuYCxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdGNsZWFyX29uX3VuaW5zdGFsbDogX18oXHJcblx0XHRgSWYgdGhpcyBvcHRpb24gaXMgYWN0aXZlLCB3aGVuIHRoZSBwbHVnaW4gaXMgZGVsZXRlZCwgYWxsIGN1c3RvbSBzcWwtdGFibGVzLCBhbGwgb3B0aW9ucyBhbmQgZmlsZXMgd2lsbCBhbHNvIGJlIGRlbGV0ZWQuIEluIHBhcnRpY3VsYXIsIHRob3NlIHRoYXQgd2VyZSB1cGxvYWRlZCB1c2luZyBNZWRpYSBGaWVsZC5gLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcblx0c2Nyb2xsX29uX25leHQ6IF9fKFxyXG5cdFx0YEF1dG9tYXRpYyBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgZm9ybSB3aGVuIHN3aXRjaGluZyBiZXR3ZWVuIGZvcm0gcGFnZXMuYCxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdGF1dG9fZm9jdXM6IF9fKFxyXG5cdFx0YEluZGljYXRlcyBpbnZhbGlkIGZpZWxkIGFuZCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGdvaW5nIHRvIHRoZSBuZXh0IHBhZ2Ugb3Igc3VibWl0dGluZyB0aGUgZm9ybSB1bmxlc3MgZmlsbGVkLmAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRzc3JfdmFsaWRhdGlvbl9tZXRob2Q6IF9fKFxyXG5cdFx0J1NlbGVjdCBob3cgdGhlIHNlcnZlci1zaWRlIHZhbGlkYXRpb24gcmVxdWVzdCB3aWxsIGJlIG1hZGUg4oCTIHZpYSBXUCBSRVNUIEFQSSwgYWRtaW4tYWpheC5waHAsIG9yIHRocm91Z2ggdGhlIFVSTCBvZiB0aGUgY3VycmVudCBwYWdlLicsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzY5NjZhMVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3Njk2NmExJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3Njk2NmExJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3Njk2NmExJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzY5NjZhMVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3Njk2NmExJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IFRhYiBmcm9tICcuL1BheW1lbnRzR2F0ZXdheXMudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSA9IF9fKCAnUGF5bWVudHMgR2F0ZXdheXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcclxuY29uc3QgY29tcG9uZW50ID0gVGFiO1xyXG5jb25zdCBkaXNwbGF5QnV0dG9uID0gZmFsc2U7XHJcblxyXG5leHBvcnQge1xyXG5cdHRpdGxlLFxyXG5cdGNvbXBvbmVudCxcclxuXHRkaXNwbGF5QnV0dG9uXHJcbn0iLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5jb25zdCBsYWJlbCA9IHtcclxuXHR1c2VfZ2F0ZXdheXM6IF9fKCAnRW5hYmxlIEdhdGV3YXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0ZW5hYmxlX3Rlc3RfbW9kZTogX18oICdFbmFibGUgVGVzdCBNb2RlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGVuYWJsZV90ZXN0X21vZGU6IF9fKFxyXG5cdFx0YFRoaXMgb3B0aW9uIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgPGNvZGU+amV0LWZvcm0tYnVpbGRlci9nYXRld2F5cy9wYXlwYWwvc2FuZGJveC1tb2RlPC9jb2RlPiBmaWx0ZXIuIEFzIG9mIHJpZ2h0IG5vdywgd29ya3Mgb25seSBmb3IgUGF5UGFsIHBheW1lbnQgc3lzdGVtYCxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdHVzZV9nYXRld2F5czogX18oXHJcblx0XHRgQWN0aXZhdGUgcGF5bWVudCBnYXRld2F5cyBmb3IgdGhlIGZvcm1zLiBUaGlzIG9wdGlvbiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvYWxsb3ctZ2F0ZXdheXM8L2NvZGU+IGZpbHRlcmAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bGFiZWwsXHJcblx0aGVscCxcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2FkZG9ucy10YWJzJztcclxuaW1wb3J0IFNldHRpbmdzUGFnZSBmcm9tICcuL1NldHRpbmdzUGFnZSc7XHJcblxyXG5jb25zdCB7IHJlbmRlckN1cnJlbnRQYWdlIH0gPSB3aW5kb3cuSmV0RkJBY3Rpb25zO1xyXG5jb25zdCB7IE5vdGljZXNQbHVnaW4gfSA9IEpldEZCU3RvcmU7XHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKCB7XHJcblx0cGx1Z2luczogWyBOb3RpY2VzUGx1Z2luIF1cclxufSApXHJcblxyXG5yZW5kZXJDdXJyZW50UGFnZSggU2V0dGluZ3NQYWdlLCB7IHN0b3JlIH0gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=