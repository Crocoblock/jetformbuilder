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
/* harmony import */ var _tabs_user_journey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/user-journey */ "./admin/pages/jfb-settings/tabs/user-journey/index.js");
/* harmony import */ var _sidebar_SettingsSideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/SettingsSideBar */ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
const settingTabs = applyFilters('jet.fb.register.settings-page.tabs', [_tabs_options__WEBPACK_IMPORTED_MODULE_4__, _tabs_user_journey__WEBPACK_IMPORTED_MODULE_5__, _tabs_payments_gateways__WEBPACK_IMPORTED_MODULE_3__, _tabs_captcha__WEBPACK_IMPORTED_MODULE_0__, _tabs_mailchimp__WEBPACK_IMPORTED_MODULE_1__, _tabs_getresponse__WEBPACK_IMPORTED_MODULE_2__]);
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
    SettingsSideBar: _sidebar_SettingsSideBar__WEBPACK_IMPORTED_MODULE_6__["default"],
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: {}
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

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/tabs/user-journey/source.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'user-journey-tab',
  props: {
    incoming: {
      type: Object,
      default: () => ({})
    }
  },
  mixins: [SaveTabByAjax, i18n],
  data() {
    return {
      label: _source__WEBPACK_IMPORTED_MODULE_0__.label,
      help: _source__WEBPACK_IMPORTED_MODULE_0__.help,
      storage: JSON.parse(JSON.stringify(this.incoming)),
      isLoading: false,
      loading: {}
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
      if ('user-journey-tab' !== slug) {
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
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-settings/SettingsPage.vue","webpack://./../SettingsPage.vue"],"names":[],"mappings":"AAoKA;EACC,aAAA;EACA,eAAA;EACA,QAAA;EACA,eAAA;ACnKD;ADqKC;EACC,OAAA;ACnKF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.jfb-content {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tgap: 2em;\r\n\tmargin-top: 1em;\r\n\r\n\t&-main {\r\n\t\tflex: 1;\r\n\t}\r\n}\r\n",".jfb-content {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2em;\n  margin-top: 1em;\n}\n.jfb-content-main {\n  flex: 1;\n}"],"sourceRoot":""}]);
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

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.user-journey-select select.cx-vui-select {
	padding: 6px 24px 6px 12px;
}
`, "",{"version":3,"sources":["webpack://./../admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue"],"names":[],"mappings":";AA2HA;CACA,0BAAA;AACA","sourcesContent":["<template>\r\n\t<div>\r\n\t\t<cx-vui-switcher\r\n\t\t\tname=\"enable_user_journey\"\r\n\t\t\t:label=\"loading.enable_user_journey ? `${label.enable_user_journey} (loading...)` : label.enable_user_journey\"\r\n\t\t\t:description=\"help.enable_user_journey\"\r\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\r\n\t\t\t:value=\"storage.hasOwnProperty( 'enable_user_journey' ) ? storage.enable_user_journey : false\"\r\n\t\t\t:disabled=\"isLoading\"\r\n\t\t\t@input=\"changeVal( 'enable_user_journey', $event )\"\r\n\t\t></cx-vui-switcher>\r\n\r\n\t\t<template v-if=\"storage.enable_user_journey\">\r\n\t\t\t<cx-vui-select\r\n\t\t\t\tname=\"storage_type\"\r\n\t\t\t\tclass=\"user-journey-select\"\r\n\t\t\t\t:label=\"loading.storage_type ? `${label.storage_type} (loading...)` : label.storage_type\"\r\n\t\t\t\t:description=\"help.storage_type\"\r\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\r\n\t\t\t\t:options-list=\"[\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tvalue: 'local',\r\n\t\t\t\t\t\tlabel: 'Local Storage'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tvalue: 'session',\r\n\t\t\t\t\t\tlabel: 'Session Storage'\r\n\t\t\t\t\t}\r\n\t\t\t\t]\"\r\n\t\t\t\t:value=\"storage.hasOwnProperty( 'storage_type' ) ? storage.storage_type : 'local'\"\r\n\t\t\t\t:disabled=\"!storage.enable_user_journey || isLoading\"\r\n\t\t\t\t@input=\"changeVal( 'storage_type', $event )\"\r\n\t\t\t></cx-vui-select>\r\n\t\t\t<cx-vui-component-wrapper >\r\n\t\t\t\t<div class=\"cx-vui-component__label\">Please note!</div>\r\n\t\t\t\t<div><b>Session Storage:</b> The information is kept only while this tab or window is open. Reloading the page is fine, but as soon as you close the tab, the data disappears. Other tabs or windows of the site can’t see it. You can still get it back by pressing Ctrl + Shift + T (“Reopen Closed Tab”)</div>\r\n\t\t\t\t<div><b>Local Storage:</b> The information stays much longer—every tab or window of this site can use it, and it remains even after you close and reopen the browser, until you clear it yourself.</div>\r\n\t\t\t</cx-vui-component-wrapper>\r\n\r\n\t\t\t<cx-vui-select\r\n\t\t\t\tname=\"clear_after_submit\"\r\n\t\t\t\tclass=\"user-journey-select\"\r\n\t\t\t\t:label=\"loading.clear_after_submit ? `${label.clear_after_submit} (loading...)` : label.clear_after_submit\"\r\n\t\t\t\t:description=\"help.clear_after_submit\"\r\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\r\n\t\t\t\t:options-list=\"[\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tvalue: 'always',\r\n\t\t\t\t\t\tlabel: 'After any submit (success or failure)'\r\n\t\t\t\t\t},\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tvalue: 'success',\r\n\t\t\t\t\t\tlabel: 'After successful submit only'\r\n\t\t\t\t\t}\r\n\t\t\t\t]\"\r\n\t\t\t\t:value=\"storage.hasOwnProperty( 'clear_after_submit' ) ? storage.clear_after_submit : 'success'\"\r\n\t\t\t\t:disabled=\"!storage.enable_user_journey || isLoading\"\r\n\t\t\t\t@input=\"changeVal( 'clear_after_submit', $event )\"\r\n\t\t\t></cx-vui-select>\r\n\t\t</template>\r\n\t</div>\r\n</template>\r\n\r\n<script>\r\n\r\nimport {\r\n\thelp,\r\n\tlabel,\r\n} from './source';\r\n\r\nconst { SaveTabByAjax, i18n } = window.JetFBMixins;\r\n\r\nexport default {\r\n\tname: 'user-journey-tab',\r\n\tprops: {\r\n\t\tincoming: {\r\n\t\t\ttype: Object,\r\n\t\t\tdefault: () => ({}),\r\n\t\t},\r\n\t},\r\n\tmixins: [ SaveTabByAjax, i18n ],\r\n\tdata() {\r\n\t\treturn {\r\n\t\t\tlabel, help,\r\n\t\t\tstorage: JSON.parse( JSON.stringify( this.incoming ) ),\r\n\t\t\tisLoading: false,\r\n\t\t\tloading: {},\r\n\t\t};\r\n\t},\r\n\tcreated() {\r\n\t\tjfbEventBus.$on( 'request-state', this.onChangeState.bind( this ) );\r\n\t},\r\n\tmethods: {\r\n\t\tgetRequestOnSave() {\r\n\t\t\treturn {\r\n\t\t\t\tdata: { ...this.storage },\r\n\t\t\t};\r\n\t\t},\r\n\t\tonChangeState( { state, slug } ) {\r\n\t\t\tif ( 'user-journey-tab' !== slug ) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tif ( 'end' === state ) {\r\n\t\t\t\tthis.loading = {};\r\n\t\t\t}\r\n\r\n\t\t\tthis.$set( this, 'isLoading', state === 'begin' );\r\n\t\t},\r\n\t\tchangeVal( name, value ) {\r\n\t\t\tif ( this.isLoading ) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\tthis.$set( this.storage, name, value );\r\n\t\t\tthis.$set( this.loading, name, true );\r\n\r\n\t\t\tthis.saveByAjax( this, this.$options.name );\r\n\t\t},\r\n\t},\r\n};\r\n\r\n</script>\r\n<style>\r\n.user-journey-select select.cx-vui-select {\r\n\tpadding: 6px 24px 6px 12px;\r\n}\r\n</style>"],"sourceRoot":""}]);
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('cx-vui-switcher',{attrs:{"name":"enable_dev_mode","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.enable_dev_mode ? ((_vm.label.enable_dev_mode) + " (loading...)") : _vm.label.enable_dev_mode,"description":_vm.help.enable_dev_mode,"value":_vm.storage.hasOwnProperty( 'enable_dev_mode' ) ? _vm.storage.enable_dev_mode : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'enable_dev_mode', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"clear_on_uninstall","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.clear_on_uninstall ? ((_vm.label.clear_on_uninstall) + " (loading...)") : _vm.label.clear_on_uninstall,"description":_vm.help.clear_on_uninstall,"value":_vm.storage.hasOwnProperty( 'clear_on_uninstall' ) ? _vm.storage.clear_on_uninstall : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'clear_on_uninstall', $event )}}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"form_records_access_capability","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":_vm.loading.form_records_access_capability ? ((_vm.label.form_records_access_capability) + " (loading...)") : _vm.label.form_records_access_capability,"description":_vm.help.form_records_access_capability,"value":_vm.storage.hasOwnProperty( 'form_records_access_capability' ) ? _vm.storage.form_records_access_capability : 'manage_options',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'form_records_access_capability', $event )}}}),_vm._v(" "),_c('cx-vui-component-wrapper',{attrs:{"label":_vm.__( 'Form Accessibility', 'jet-form-builder' ),"wrapper-css":[ 'equalwidth' ]}}),_vm._v(" "),_c('div',{staticClass:"cx-vui-inner-panel"},[_c('cx-vui-switcher',{attrs:{"name":"disable_next_button","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.disable_next_button ? ((_vm.label.disable_next_button) + " (loading...)") : _vm.label.disable_next_button,"description":_vm.help.disable_next_button,"value":_vm.storage.hasOwnProperty( 'disable_next_button' ) ? _vm.storage.disable_next_button : true,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'disable_next_button', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"scroll_on_next","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.scroll_on_next ? ((_vm.label.scroll_on_next) + " (loading...)") : _vm.label.scroll_on_next,"description":_vm.help.scroll_on_next,"value":_vm.storage.hasOwnProperty( 'scroll_on_next' ) ? _vm.storage.scroll_on_next : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'scroll_on_next', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"auto_focus","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.auto_focus ? ((_vm.label.auto_focus) + " (loading...)") : _vm.label.auto_focus,"description":_vm.help.auto_focus,"value":_vm.storage.hasOwnProperty( 'auto_focus' ) ? _vm.storage.auto_focus : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'auto_focus', $event )}}})],1),_vm._v(" "),_c('cx-vui-component-wrapper',{attrs:{"label":_vm.__( 'Form Request Args', 'jet-form-builder' ),"wrapper-css":[ 'equalwidth' ]}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"gfb_request_args_key","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":'Request key',"description":'Unique form parameter (key)',"value":_vm.storage.hasOwnProperty( 'gfb_request_args_key' ) ? _vm.storage.gfb_request_args_key : '1111',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'gfb_request_args_key', $event )}}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"gfb_request_args_value","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":'Request value',"description":'Unique form parameter (value)',"value":_vm.storage.hasOwnProperty( 'gfb_request_args_value' ) ? _vm.storage.gfb_request_args_value : '2222',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'gfb_request_args_value', $event )}}})],1)}
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

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('cx-vui-switcher',{attrs:{"name":"enable_user_journey","label":_vm.loading.enable_user_journey ? ((_vm.label.enable_user_journey) + " (loading...)") : _vm.label.enable_user_journey,"description":_vm.help.enable_user_journey,"wrapper-css":[ 'equalwidth' ],"value":_vm.storage.hasOwnProperty( 'enable_user_journey' ) ? _vm.storage.enable_user_journey : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'enable_user_journey', $event )}}}),_vm._v(" "),(_vm.storage.enable_user_journey)?[_c('cx-vui-select',{staticClass:"user-journey-select",attrs:{"name":"storage_type","label":_vm.loading.storage_type ? ((_vm.label.storage_type) + " (loading...)") : _vm.label.storage_type,"description":_vm.help.storage_type,"wrapper-css":[ 'equalwidth' ],"options-list":[
				{
					value: 'local',
					label: 'Local Storage'
				},
				{
					value: 'session',
					label: 'Session Storage'
				}
			],"value":_vm.storage.hasOwnProperty( 'storage_type' ) ? _vm.storage.storage_type : 'local',"disabled":!_vm.storage.enable_user_journey || _vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'storage_type', $event )}}}),_vm._v(" "),_c('cx-vui-component-wrapper',[_c('div',{staticClass:"cx-vui-component__label"},[_vm._v("Please note!")]),_vm._v(" "),_c('div',[_c('b',[_vm._v("Session Storage:")]),_vm._v(" The information is kept only while this tab or window is open. Reloading the page is fine, but as soon as you close the tab, the data disappears. Other tabs or windows of the site can’t see it. You can still get it back by pressing Ctrl + Shift + T (“Reopen Closed Tab”)")]),_vm._v(" "),_c('div',[_c('b',[_vm._v("Local Storage:")]),_vm._v(" The information stays much longer—every tab or window of this site can use it, and it remains even after you close and reopen the browser, until you clear it yourself.")])]),_vm._v(" "),_c('cx-vui-select',{staticClass:"user-journey-select",attrs:{"name":"clear_after_submit","label":_vm.loading.clear_after_submit ? ((_vm.label.clear_after_submit) + " (loading...)") : _vm.label.clear_after_submit,"description":_vm.help.clear_after_submit,"wrapper-css":[ 'equalwidth' ],"options-list":[
				{
					value: 'always',
					label: 'After any submit (success or failure)'
				},
				{
					value: 'success',
					label: 'After successful submit only'
				}
			],"value":_vm.storage.hasOwnProperty( 'clear_after_submit' ) ? _vm.storage.clear_after_submit : 'success',"disabled":!_vm.storage.enable_user_journey || _vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'clear_after_submit', $event )}}})]:_vm._e()],2)}
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

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("02154607", content, false, {});
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
  form_records_access_capability: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Form Records Access Capability', 'jet-form-builder')
};
const help = {
  enable_dev_mode: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('With developer mode enabled, errors from the form will be saved.', 'jet-form-builder'),
  disable_next_button: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`If this option is active, the Next button in a multi-step form won't become clickable until all the required fields are completed.`, 'jet-form-builder'),
  clear_on_uninstall: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`If this option is active, when the plugin is deleted, all custom sql-tables, all options and files will also be deleted. In particular, those that were uploaded using Media Field.`, 'jet-form-builder'),
  scroll_on_next: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Automatic scrolling to the top of the form when switching between form pages.`, 'jet-form-builder'),
  auto_focus: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Indicates invalid field and prevents the user from going to the next page or submitting the form unless filled.`, 'jet-form-builder'),
  form_records_access_capability: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('By default any Form Records available only for users with `manage_options` capability. Here you can overwrite it with any capability you want. More about capabilities <a href="https://wordpress.org/support/article/roles-and-capabilities/" target="_blank">here</a>', 'jet-form-builder')
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

/***/ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue":
/*!***********************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserJourneyTab_vue_vue_type_template_id_0fb0c2fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserJourneyTab.vue?vue&type=template&id=0fb0c2fc */ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc");
/* harmony import */ var _UserJourneyTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserJourneyTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js");
/* harmony import */ var _UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css */ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserJourneyTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserJourneyTab_vue_vue_type_template_id_0fb0c2fc__WEBPACK_IMPORTED_MODULE_0__.render,
  _UserJourneyTab_vue_vue_type_template_id_0fb0c2fc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserJourneyTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc":
/*!*****************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_template_id_0fb0c2fc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_template_id_0fb0c2fc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_template_id_0fb0c2fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserJourneyTab.vue?vue&type=template&id=0fb0c2fc */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc");


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/user-journey/index.js":
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   displayButton: () => (/* binding */ displayButton),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _UserJourneyTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserJourneyTab.vue */ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue");

const {
  __
} = wp.i18n;
const title = __('User Journey', 'jet-form-builder');
const component = _UserJourneyTab_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
const displayButton = false;


/***/ }),

/***/ "./admin/pages/jfb-settings/tabs/user-journey/source.js":
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/source.js ***!
  \**************************************************************/
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
  enable_user_journey: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable User Journey Tracking', 'jet-form-builder'),
  storage_type: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Storage Type', 'jet-form-builder'),
  clear_after_submit: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Clear Journey After Submit', 'jet-form-builder')
};
const help = {
  enable_user_journey: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Track the user’s journey across the website and save it in the browser.', 'jet-form-builder'),
  storage_type: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose where to store the user journey data', 'jet-form-builder'),
  clear_after_submit: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('When to clear the journey data after form submission', 'jet-form-builder')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21EQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBUUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7Ozs7Ozs7Ozs7OztBQ3JCQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWU/MWE0MiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlPzM3NDEiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/MGU5MSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlP2Q1M2QiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlP2RiZTQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWU/ZDcyMCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZT84Njc3Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWU/MjgyOCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9oQ2FwdGNoYS52dWU/Y2IxNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvdHVybnN0aWxlLnZ1ZT8xZjljIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZT9hMjAyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWU/NzkzZiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL0NhcHRjaGFUYWIudnVlPzA1MzciLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlP2FhMWMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWU/YzAzYiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlP2Q0YmIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWU/NzA2NCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlPzJhYWYiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWU/NjgyNSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlP2MyYTAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/MjUzZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlPzZjMjAiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/MmNmNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8xYWQzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9hZGRvbnMtdGFicy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZT84OTkyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvcmVDQVBUQ0hBdjMudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWU/MDljMiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9oQ2FwdGNoYS52dWU/ZjFhMyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWU/N2FhZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlPzI1M2IiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL2FkZHJlc3NBdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0FkZG9ucy9jb252ZXJ0a2l0LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9BZGRvbnMvaHVic3BvdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL21haWxlcmxpdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0FkZG9ucy9tb29zZW5kLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9HYXRld2F5cy9zdHJpcGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlPzI5NjQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL0NhcHRjaGFUYWIudnVlP2RmNjAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlP2Q0N2MiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2Uvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlPzUyY2QiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlP2FhYTAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZT9kOWYwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWU/YzA3MyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvdXNlci1qb3VybmV5L3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxzcGFuPnt7IF9fKCAnUHJvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3NwYW4+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5jb25zdCB7IGkxOG4gfSA9IEpldEZCTWl4aW5zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdJc1BST0ljb24nLFxyXG5cdG1peGluczogWyBpMThuIF0sXHJcblx0cHJvcHM6IHtcclxuXHRcdGlzQWN0aXZlOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbnNwYW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XHJcblx0cGFkZGluZzogMC4xZW0gMC4zZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsaW5lLWhlaWdodDogMTZweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cdDxGb3JtQnVpbGRlclBhZ2VcclxuXHRcdDp0aXRsZT1cIl9fKCAnSmV0Rm9ybUJ1aWxkZXIgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKVwiXHJcblx0PlxyXG5cdFx0PGRpdiBjbGFzcz1cImpmYi1jb250ZW50XCI+XHJcblx0XHRcdDxBbGVydHNMaXN0Lz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1jb250ZW50LW1haW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLXBhbmVsXCI+XHJcblx0XHRcdFx0XHQ8Q3hWdWlUYWJzXHJcblx0XHRcdFx0XHRcdDppbi1wYW5lbD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OnZhbHVlPVwiYWN0aXZlVGFiU2x1Z1wiXHJcblx0XHRcdFx0XHRcdGxheW91dD1cInZlcnRpY2FsXCJcclxuXHRcdFx0XHRcdFx0QGlucHV0PVwib25DaGFuZ2VBY3RpdmVUYWJcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8Q3hWdWlUYWJzUGFuZWxcclxuXHRcdFx0XHRcdFx0XHR2LWZvcj1cIiggeyBkaXNwbGF5QnV0dG9uID0gdHJ1ZSwgLi4udGFiIH0sIGluZGV4ICkgaW4gdGFic1wiXHJcblx0XHRcdFx0XHRcdFx0Om5hbWU9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxyXG5cdFx0XHRcdFx0XHRcdDpsYWJlbD1cInRhYi50aXRsZVwiXHJcblx0XHRcdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXHJcblx0XHRcdFx0XHRcdFx0OmRpc2FibGVkPVwidGFiLmRpc2FibGVkXCJcclxuXHRcdFx0XHRcdFx0XHQ6aWNvbj1cInRhYi5pY29uXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSAjZGVmYXVsdCB2LWlmPVwidGFiLmNvbXBvbmVudC5yZW5kZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxrZWVwLWFsaXZlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29tcG9uZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1iaW5kOmlzPVwidGFiLmNvbXBvbmVudFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OmluY29taW5nPVwiZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6aW5uZXItc2x1Z3M9XCJhY3RpdmVUYWJJbm5lclNsdWdzIHx8IFtdXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9XCJ0YWJDb21wb25lbnRzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwva2VlcC1hbGl2ZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxjeC12dWktYnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdHYtaWY9XCJkaXNwbGF5QnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OmxvYWRpbmc9XCJsb2FkaW5nVGFiWyB0YWIuY29tcG9uZW50Lm5hbWUgXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cIm9uU2F2ZVRhYiggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApXCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRlbXBsYXRlICNsYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDwvQ3hWdWlUYWJzUGFuZWw+XHJcblx0XHRcdFx0XHQ8L0N4VnVpVGFicz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxTZXR0aW5nc1NpZGVCYXIvPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9Gb3JtQnVpbGRlclBhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgKiBhcyBjYXB0Y2hhIGZyb20gJy4vdGFicy9jYXB0Y2hhJztcclxuaW1wb3J0ICogYXMgbWFpbGNoaW1wIGZyb20gJy4vdGFicy9tYWlsY2hpbXAnO1xyXG5pbXBvcnQgKiBhcyBnZXRSZXNwb25zZSBmcm9tICcuL3RhYnMvZ2V0cmVzcG9uc2UnO1xyXG5pbXBvcnQgKiBhcyBwYXltZW50R2F0ZXdheXMgZnJvbSAnLi90YWJzL3BheW1lbnRzLWdhdGV3YXlzJztcclxuaW1wb3J0ICogYXMgb3B0aW9ucyBmcm9tICcuL3RhYnMvb3B0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHVzZXJKb3VybmV5IGZyb20gJy4vdGFicy91c2VyLWpvdXJuZXknO1xyXG5pbXBvcnQgU2V0dGluZ3NTaWRlQmFyIGZyb20gJy4vc2lkZWJhci9TZXR0aW5nc1NpZGVCYXInO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMsIGRvQWN0aW9uIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IHtcclxuXHRTYXZlVGFiQnlBamF4LFxyXG5cdEdldEluY29taW5nLFxyXG5cdGkxOG4sXHJcbn0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XHJcblxyXG5jb25zdCB7XHJcblx0Q3hWdWlUYWJzUGFuZWwsXHJcblx0Q3hWdWlUYWJzLFxyXG5cdEFsZXJ0c0xpc3QsXHJcblx0Rm9ybUJ1aWxkZXJQYWdlLFxyXG59ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxud2luZG93LmpmYkV2ZW50QnVzID0gd2luZG93LmpmYkV2ZW50QnVzIHx8IG5ldyBWdWUoIHt9ICk7XHJcblxyXG5jb25zdCBzZXR0aW5nVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5zZXR0aW5ncy1wYWdlLnRhYnMnLCBbXHJcblx0b3B0aW9ucyxcclxuXHR1c2VySm91cm5leSxcclxuXHRwYXltZW50R2F0ZXdheXMsXHJcblx0Y2FwdGNoYSxcclxuXHRtYWlsY2hpbXAsXHJcblx0Z2V0UmVzcG9uc2UsXHJcbl0gKTtcclxuXHJcbmNvbnN0IGNoYW5nZUhhc2ggPSBoYXNoID0+IHtcclxuXHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIGhhc2g7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBY3RpdmVUYWIgPSAoKSA9PiB7XHJcblx0Y29uc3QgZmlyc3QgPSBzZXR0aW5nVGFic1sgMCBdLmNvbXBvbmVudC5uYW1lO1xyXG5cclxuXHRpZiAoICEgd2luZG93LmxvY2F0aW9uLmhhc2ggKSB7XHJcblx0XHRjaGFuZ2VIYXNoKCBmaXJzdCApO1xyXG5cclxuXHRcdHJldHVybiBbIGZpcnN0IF07XHJcblx0fVxyXG5cdGxldCBbIGhhc2gsIC4uLm90aGVycyBdID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSggJyMnLCAnJyApLnNwbGl0KCAnX18nICk7XHJcblx0bGV0IHRhYiA9IHNldHRpbmdUYWJzLmZpbmQoIHRhYiA9PiB0YWI/LmNvbXBvbmVudD8ubmFtZSA9PT0gaGFzaCApO1xyXG5cclxuXHRpZiAoICEgdGFiICkge1xyXG5cdFx0Y2hhbmdlSGFzaCggZmlyc3QgKTtcclxuXHJcblx0XHRyZXR1cm4gWyBmaXJzdCBdO1xyXG5cdH1cclxuXHRjaGFuZ2VIYXNoKCBbIHRhYi5jb21wb25lbnQubmFtZSwgLi4ub3RoZXJzIF0uam9pbiggJ19fJyApICk7XHJcblxyXG5cdHJldHVybiBbIHRhYi5jb21wb25lbnQubmFtZSwgb3RoZXJzIF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2pmYi1zZXR0aW5ncycsXHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0QWxlcnRzTGlzdCxcclxuXHRcdEN4VnVpVGFic1BhbmVsLFxyXG5cdFx0Q3hWdWlUYWJzLFxyXG5cdFx0U2V0dGluZ3NTaWRlQmFyLFxyXG5cdFx0Rm9ybUJ1aWxkZXJQYWdlLFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdGNvbnN0IFsgdGFiU2x1Zywgb3RoZXJzIF0gPSBnZXRBY3RpdmVUYWIoKTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFjdGl2ZVRhYlNsdWc6IHRhYlNsdWcsXHJcblx0XHRcdGFjdGl2ZVRhYklubmVyU2x1Z3M6IG90aGVycyxcclxuXHRcdFx0dGFiczogc2V0dGluZ1RhYnMsXHJcblx0XHRcdGxvYWRpbmdUYWI6IHt9LFxyXG5cdFx0XHRpc0FjdGl2ZVBybzogZmFsc2UsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXgsIEdldEluY29taW5nLCBpMThuIF0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdHRoaXMuaXNBY3RpdmVQcm8gPSB0aGlzLmdldEluY29taW5nKCAnaXNfYWN0aXZlJyApO1xyXG5cclxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XHJcblx0XHRcdGNvbnN0IHsgc3RhdGUsIHNsdWcgfSA9IHByb3BzO1xyXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMubG9hZGluZ1RhYiwgc2x1Zywgc3RhdGUgPT09ICdiZWdpbicgKTtcclxuXHRcdH0gKTtcclxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ2FsZXJ0LWNsaWNrLXRoYW5rcycsICggeyBzZWxmIH0gKSA9PiB7XHJcblx0XHRcdHNlbGYuY2xvc2VBbGVydCgpO1xyXG5cdFx0fSApO1xyXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAnYWxlcnQtY2xpY2stY2hlY2snLCAoIHsgc2VsZiB9ICkgPT4ge1xyXG5cdFx0XHRzZWxmLmNsb3NlQWxlcnQoKTtcclxuXHRcdH0gKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdG9uQ2hhbmdlQWN0aXZlVGFiKCBhY3RpdmVUYWIgKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKCBkb2N1bWVudC5VUkwgKTtcclxuXHRcdFx0Y3VycmVudFVybC5oYXNoID0gJyMnICsgYWN0aXZlVGFiO1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGN1cnJlbnRVcmwuaHJlZjtcclxuXHJcblx0XHRcdGpmYkV2ZW50QnVzLiRlbWl0KCAnY2hhbmdlLXRhYicsIHsgc2x1ZzogYWN0aXZlVGFiIH0gKTtcclxuXHRcdH0sXHJcblx0XHRvblNhdmVUYWIoIGluZGV4VGFiLCB0YWJTbHVnICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50VGFiID0gdGhpcy4kcmVmcy50YWJDb21wb25lbnRzWyBpbmRleFRhYiBdO1xyXG5cclxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50VGFiLCB0YWJTbHVnICk7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbi5qZmItY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0Z2FwOiAyZW07XHJcblx0bWFyZ2luLXRvcDogMWVtO1xyXG5cclxuXHQmLW1haW4ge1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8U2ltcGxlV3JhcHBlckNvbXBvbmVudCBlbGVtZW50LWlkPVwiZnJpZW5kbHlfa2V5XCI+XHJcblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgbGFiZWwua2V5IH19PC90ZW1wbGF0ZT5cclxuXHRcdFx0PHRlbXBsYXRlICNkZXNjcmlwdGlvbj5cclxuXHRcdFx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0XHR7eyBfXyhcclxuXHRcdFx0XHRcdCdJdCBjYW4gYmUgZm91bmQgb24gdGhlIHBhZ2UgbGlzdGluZyB5b3VyIEFwcGxpY2F0aW9ucy4gT3IgZm9sbG93IHRoaXMnLFxyXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdCkgKyAnICcgfX1cclxuXHRcdFx0XHRcdDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZG9jcy5mcmllbmRseWNhcHRjaGEuY29tLyMvaW5zdGFsbGF0aW9uP2lkPV8xLWdlbmVyYXRpbmctYS1zaXRla2V5XCI+XHJcblx0XHRcdFx0XHRcdHt7IF9fKCAnZ3VpZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fVxyXG5cdFx0XHRcdFx0PC9FeHRlcm5hbExpbms+XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2RlZmF1bHQ+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRpZD1cImZyaWVuZGx5X2tleVwiXHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRjbGFzcz1cImN4LXZ1aS1pbnB1dCBzaXplLWZ1bGx3aWR0aFwiXHJcblx0XHRcdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5rZXlcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8L1NpbXBsZVdyYXBwZXJDb21wb25lbnQ+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdGVsZW1lbnQtaWQ9XCJmcmllbmRseV9zZWNyZXRcIlxyXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5zZWNyZXRcIlxyXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJfXyhcclxuXHRcdFx0XHQnSXQgY2FuIGJlIGZvdW5kIG9uIHRoZSBwYWdlIGxpc3RpbmcgeW91ciBBUEkga2V5cy4nLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KVwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcclxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHQ8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRsYWJlbCxcclxufSBmcm9tICcuL3NvdXJjZSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgU2ltcGxlV3JhcHBlckNvbXBvbmVudCxcclxuXHQgICAgICBFeHRlcm5hbExpbmssXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgaTE4bixcclxuICAgICAgfSA9IEpldEZCTWl4aW5zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdmcmllbmRseScsXHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0U2ltcGxlV3JhcHBlckNvbXBvbmVudCxcclxuXHRcdEV4dGVybmFsTGluayxcclxuXHR9LFxyXG5cdG1peGluczogWyBpMThuIF0sXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IFsgT2JqZWN0LCBBcnJheSBdLFxyXG5cdFx0XHRkZWZhdWx0KCkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsXHJcblx0XHRcdHN0b3JhZ2U6IHt9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8c2VjdGlvbj5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwua2V5XCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5rZXlcIlxyXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5zZWNyZXRcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnNlY3JldFwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHQ6bWluPVwiMFwiXHJcblx0XHRcdDptYXg9XCIxXCJcclxuXHRcdFx0OnN0ZXA9XCIwLjFcIlxyXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC50aHJlc2hvbGRcIlxyXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLnRocmVzaG9sZFwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2UudGhyZXNob2xkXCJcclxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj57eyBoZWxwLmFwaVByZWYgfX0gPGEgOmhyZWY9XCJoZWxwLmFwaUxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBoZWxwLmFwaUxpbmtMYWJlbCB9fTwvYT5cclxuXHRcdDwvcD5cclxuXHQ8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRoZWxwLFxyXG5cdGxhYmVsLFxyXG59IGZyb20gXCIuL3NvdXJjZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdnb29nbGUnLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBbIE9iamVjdCwgQXJyYXkgXSxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge307XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLCBoZWxwLFxyXG5cdFx0XHRzdG9yYWdlOiB7fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0aWYgKCAhT2JqZWN0LmtleXMoIHRoaXMuaW5jb21pbmcgKT8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdH0sXHJcbn1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8c2VjdGlvbj5cclxuXHRcdDxTaW1wbGVXcmFwcGVyQ29tcG9uZW50IGVsZW1lbnQtaWQ9XCJoY2FwdGNoYV9rZXlcIj5cclxuXHRcdFx0PHRlbXBsYXRlICNsYWJlbD57eyBsYWJlbC5rZXkgfX08L3RlbXBsYXRlPlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2Rlc2NyaXB0aW9uPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHRcdHt7IF9fKFxyXG5cdFx0XHRcdFx0J1lvdSBjYW4gZmluZCBpdCBvbiB0aGlzIHBhZ2UgaW4gdGhlIGZpcnN0IGNvbHVtbiBvZiBTaXRla2V5LicsXHJcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0KSArICcgJyB9fVxyXG5cdFx0XHRcdFx0PEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kYXNoYm9hcmQuaGNhcHRjaGEuY29tL3NpdGVzXCI+XHJcblx0XHRcdFx0XHRcdHt7IF9fKCAnR28gdG8gdGhlIGRhc2hib2FyZCBvZiBzaXRlcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XHJcblx0XHRcdFx0XHQ8L0V4dGVybmFsTGluaz5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdDx0ZW1wbGF0ZSAjZGVmYXVsdD5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGlkPVwiaGNhcHRjaGFfa2V5XCJcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdGNsYXNzPVwiY3gtdnVpLWlucHV0IHNpemUtZnVsbHdpZHRoXCJcclxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdDwvU2ltcGxlV3JhcHBlckNvbXBvbmVudD5cclxuXHRcdDxTaW1wbGVXcmFwcGVyQ29tcG9uZW50IGVsZW1lbnQtaWQ9XCJoY2FwdGNoYV9zZWNyZXRcIj5cclxuXHRcdFx0PHRlbXBsYXRlICNsYWJlbD57eyBsYWJlbC5zZWNyZXQgfX08L3RlbXBsYXRlPlxyXG5cdFx0XHQ8dGVtcGxhdGUgI2Rlc2NyaXB0aW9uPlxyXG5cdFx0XHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj5cclxuXHRcdFx0XHRcdHt7IF9fKFxyXG5cdFx0XHRcdFx0YFlvdSBjYW4gZmluZCBpdCBvbiB0aGUgc2V0dGluZ3MgcGFnZSxcclxudGhpcyB3aWxsIGJlIHRoZSBmaXJzdCBmaWVsZC5gLFxyXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdCkgKyAnICcgfX1cclxuXHRcdFx0XHRcdDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGFzaGJvYXJkLmhjYXB0Y2hhLmNvbS9zZXR0aW5nc1wiPlxyXG5cdFx0XHRcdFx0XHR7eyBfXyggJ0dvIHRvIHRoZSBTZXR0aW5ncyBwYWdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX1cclxuXHRcdFx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0PHRlbXBsYXRlICNkZWZhdWx0PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0aWQ9XCJoY2FwdGNoYV9zZWNyZXRcIlxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIlxyXG5cdFx0XHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0PC9TaW1wbGVXcmFwcGVyQ29tcG9uZW50PlxyXG5cdDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGxhYmVsLFxyXG59IGZyb20gJy4vc291cmNlJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBTaW1wbGVXcmFwcGVyQ29tcG9uZW50LFxyXG5cdCAgICAgIEV4dGVybmFsTGluayxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBpMThuLFxyXG4gICAgICB9ID0gSmV0RkJNaXhpbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2hjYXB0Y2hhJyxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHRTaW1wbGVXcmFwcGVyQ29tcG9uZW50LFxyXG5cdFx0RXh0ZXJuYWxMaW5rLFxyXG5cdH0sXHJcblx0bWl4aW5zOiBbIGkxOG4gXSxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCxcclxuXHRcdFx0c3RvcmFnZToge30sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdGlmICggIU9iamVjdC5rZXlzKCB0aGlzLmluY29taW5nICk/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zdG9yYWdlID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxzZWN0aW9uPlxyXG5cdFx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0XHRlbGVtZW50LWlkPVwidHVybnN0aWxlX2tleVwiXHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLmtleVwiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cIl9fKFxyXG5cdFx0XHRcdCdSZWFkIHRoZSBoaW50IHRvIHRoZSBTZWNyZXQgS2V5IGZpZWxkJyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdClcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdGVsZW1lbnQtaWQ9XCJ0dXJuc3RpbGVfc2VjcmV0XCJcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuc2VjcmV0XCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiX18oXHJcblx0XHRcdFx0J1lvdSBjYW4gZmluZCBib3RoIGtleXMgb24geW91ciBUdXJuc3RpbGUgU2l0ZSBzZXR0aW5ncyBwYWdlJyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdClcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnNlY3JldFwiXHJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XHJcblx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+XHJcblx0XHRcdHt7IF9fKCAnRGlkblxcJ3QgZmluZCBpdD8gSGVyZSBpcycsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnIH19XHJcblx0XHRcdDxFeHRlcm5hbExpbmtcclxuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmNsb3VkZmxhcmUuY29tL3R1cm5zdGlsZS9nZXQtc3RhcnRlZC8jZ2V0LWEtc2l0ZWtleS1hbmQtc2VjcmV0LWtleVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHR7eyBfXyggJ2EgbW9yZSBkZXRhaWxlZCBkZXNjcmlwdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XHJcblx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxyXG5cdFx0PC9wPlxyXG5cdDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGxhYmVsLFxyXG59IGZyb20gJy4vc291cmNlJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBpMThuLFxyXG4gICAgICB9ID0gSmV0RkJNaXhpbnM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgRXh0ZXJuYWxMaW5rLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICd0dXJuc3RpbGUnLFxyXG5cdG1peGluczogW1xyXG5cdFx0aTE4bixcclxuXHRdLFxyXG5cdGNvbXBvbmVudHM6IHtcclxuXHRcdEV4dGVybmFsTGluayxcclxuXHR9LFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBbIE9iamVjdCwgQXJyYXkgXSxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge307XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLFxyXG5cdFx0XHRzdG9yYWdlOiB7fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0aWYgKCAhT2JqZWN0LmtleXMoIHRoaXMuaW5jb21pbmcgKT8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8Y3gtdnVpLWlucHV0XHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLmNsaWVudF9pZFwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2UuY2xpZW50X2lkXCJcclxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cclxuXHRcdDxjeC12dWktaW5wdXRcclxuXHRcdFx0OmxhYmVsPVwibGFiZWwuc2VjcmV0XCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxyXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxyXG5cdDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGhlbHAsXHJcblx0bGFiZWwsXHJcbn0gZnJvbSBcIi4vc291cmNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ3BheXBhbCcsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdCgpIHtcclxuXHRcdFx0XHRyZXR1cm4ge307XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLCBoZWxwLFxyXG5cdFx0XHRzdG9yYWdlOiB7fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHR9LFxyXG59XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PFNpZGVCYXJCb3hlcz5cclxuXHRcdDx0ZW1wbGF0ZSAjaWNvbi1oZWxwPlxyXG5cdFx0XHQ8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIyMVwiIHZpZXdCb3g9XCIwIDAgMTQgMjFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuXHRcdFx0XHQ8cGF0aFxyXG5cdFx0XHRcdFx0ZD1cIk01LjI1IDIxSDguNzVWMTcuNUg1LjI1VjIxWk03IDBDMy4xMzI1IDAgMCAzLjEzMjUgMCA3SDMuNUMzLjUgNS4wNzUgNS4wNzUgMy41IDcgMy41QzguOTI1IDMuNSAxMC41IDUuMDc1IDEwLjUgN0MxMC41IDEwLjUgNS4yNSAxMC4wNjI1IDUuMjUgMTUuNzVIOC43NUM4Ljc1IDExLjgxMjUgMTQgMTEuMzc1IDE0IDdDMTQgMy4xMzI1IDEwLjg2NzUgMCA3IDBaXCJcclxuXHRcdFx0XHRcdGZpbGw9XCIjN0I3RTgxXCI+PC9wYXRoPlxyXG5cdFx0XHQ8L3N2Zz5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0XHQ8dGVtcGxhdGUgI2NvbnRlbnQtaGVscD1cImJveFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGlua1wiPlxyXG5cdFx0XHRcdDxhIDpocmVmPVwiYm94Lmxpbmtfa25vd2xlZGdlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1pY29uXCI+XHJcblx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNCAxNlwiIGZpbGw9XCJub25lXCJcclxuXHRcdFx0XHRcdFx0XHQgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxwYXRoXHJcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTEzLjQ1OCAxMS4yNTUyTDEzLjQ1OCAxLjQxMTVDMTMuNDU4IDEuMDMwNjQgMTMuMTM1NyAwLjcwODM3NCAxMi43NTQ5IDAuNzA4Mzc0TDMuMTQ1NTEgMC43MDgzNzRDMS41OTI3NyAwLjcwODM3NCAwLjMzMzAwOCAxLjk2ODE0IDAuMzMzMDA4IDMuNTIwODdMMC4zMzMwMDggMTIuODk1OUMwLjMzMzAwOCAxNC40NDg2IDEuNTkyNzcgMTUuNzA4NCAzLjE0NTUxIDE1LjcwODRMMTIuNzU0OSAxNS43MDg0QzEzLjEzNTcgMTUuNzA4NCAxMy40NTggMTUuNDE1NCAxMy40NTggMTUuMDA1MkwxMy40NTggMTQuNTM2NUMxMy40NTggMTQuMzMxNCAxMy4zNDA4IDE0LjEyNjMgMTMuMTk0MyAxNC4wMDkyQzEzLjA0NzkgMTMuNTQwNCAxMy4wNDc5IDEyLjI1MTMgMTMuMTk0MyAxMS44MTE5QzEzLjM0MDggMTEuNjk0NyAxMy40NTggMTEuNDg5NiAxMy40NTggMTEuMjU1MlpNNC4wODMwMSA0LjYzNDE2QzQuMDgzMDEgNC41NDYyNiA0LjE0MTYgNC40NTgzNyA0LjI1ODc5IDQuNDU4MzdMMTAuNDY5NyA0LjQ1ODM3QzEwLjU1NzYgNC40NTgzNyAxMC42NDU1IDQuNTQ2MjYgMTAuNjQ1NSA0LjYzNDE2TDEwLjY0NTUgNS4yMjAwOUMxMC42NDU1IDUuMzM3MjggMTAuNTU3NiA1LjM5NTg3IDEwLjQ2OTcgNS4zOTU4N0w0LjI1ODc5IDUuMzk1ODdDNC4xNDE2IDUuMzk1ODcgNC4wODMwMSA1LjMzNzI4IDQuMDgzMDEgNS4yMjAwOUw0LjA4MzAxIDQuNjM0MTZaTTQuMDgzMDEgNi41MDkxNkM0LjA4MzAxIDYuNDIxMjcgNC4xNDE2IDYuMzMzMzcgNC4yNTg3OSA2LjMzMzM3TDEwLjQ2OTcgNi4zMzMzN0MxMC41NTc2IDYuMzMzMzcgMTAuNjQ1NSA2LjQyMTI3IDEwLjY0NTUgNi41MDkxNkwxMC42NDU1IDcuMDk1MDlDMTAuNjQ1NSA3LjIxMjI4IDEwLjU1NzYgNy4yNzA4NyAxMC40Njk3IDcuMjcwODdMNC4yNTg3OSA3LjI3MDg3QzQuMTQxNiA3LjI3MDg3IDQuMDgzMDEgNy4yMTIyOCA0LjA4MzAxIDcuMDk1MDlMNC4wODMwMSA2LjUwOTE2Wk0xMS40OTUxIDEzLjgzMzRMMy4xNDU1MSAxMy44MzM0QzIuNjE4MTYgMTMuODMzNCAyLjIwODAxIDEzLjQyMzIgMi4yMDgwMSAxMi44OTU5QzIuMjA4MDEgMTIuMzk3OCAyLjYxODE2IDExLjk1ODQgMy4xNDU1MSAxMS45NTg0TDExLjQ5NTEgMTEuOTU4NEMxMS40MzY1IDEyLjQ4NTcgMTEuNDM2NSAxMy4zMzUzIDExLjQ5NTEgMTMuODMzNFpcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiMwMDdDQkFcIj48L3BhdGg+XHJcblx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1sYWJlbFwiPnt7IGJveC5sYWJlbF9rbm93bGVkZ2UgfX08L2Rpdj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGlua1wiPlxyXG5cdFx0XHRcdDxhIDpocmVmPVwiYm94LmxpbmtfY29tbXVuaXR5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1pY29uXCI+XHJcblx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCJcclxuXHRcdFx0XHRcdFx0XHQgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxwYXRoXHJcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTE1LjU5MTMgOC4wNDU2NEMxNS41OTEzIDMuODc3MjggMTIuMjE0IDAuNSA4LjA0NTY0IDAuNUMzLjg3NzI4IDAuNSAwLjUgMy44NzcyOCAwLjUgOC4wNDU2NEMwLjUgMTEuODE4NSAzLjIzODM0IDE0Ljk1MjMgNi44NTkwMyAxNS41TDYuODU5MDMgMTAuMjM2M0w0Ljk0MjE5IDEwLjIzNjNMNC45NDIxOSA4LjA0NTY0TDYuODU5MDMgOC4wNDU2NEw2Ljg1OTAzIDYuNDAyNjRDNi44NTkwMyA0LjUxNjIzIDcuOTg0NzkgMy40NTEzMiA5LjY4ODY0IDMuNDUxMzJDMTAuNTQwNiAzLjQ1MTMyIDExLjM5MjUgMy42MDM0NSAxMS4zOTI1IDMuNjAzNDVMMTEuMzkyNSA1LjQ1OTQzTDEwLjQ0OTMgNS40NTk0M0M5LjUwNjA5IDUuNDU5NDMgOS4yMDE4MyA2LjAzNzUzIDkuMjAxODMgNi42NDYwNEw5LjIwMTgzIDguMDQ1NjRMMTEuMzAxMiA4LjA0NTY0TDEwLjk2NjUgMTAuMjM2M0w5LjIwMTgzIDEwLjIzNjNMOS4yMDE4MyAxNS41QzEyLjgyMjUgMTQuOTUyMyAxNS41OTEzIDExLjgxODUgMTUuNTkxMyA4LjA0NTY0WlwiXHJcblx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cclxuXHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCI+e3sgYm94LmxhYmVsX2NvbW11bml0eSB9fTwvZGl2PlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rXCI+XHJcblx0XHRcdFx0PGEgOmhyZWY9XCJib3gubGlua19zdXBwb3J0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1pY29uXCI+XHJcblx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxNSAxOFwiIGZpbGw9XCJub25lXCJcclxuXHRcdFx0XHRcdFx0XHQgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxwYXRoXHJcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTcuNTgzMzMgMC42NjY2ODdDMy42NzUgMC42NjY2ODcgMC41IDMuODQxNjkgMC41IDcuNzUwMDJDMC41IDExLjY1ODQgMy42NzUgMTQuODMzNCA3LjU4MzMzIDE0LjgzMzRIOFYxNy4zMzM0QzEyLjA1IDE1LjM4MzQgMTQuNjY2NyAxMS41IDE0LjY2NjcgNy43NTAwMkMxNC42NjY3IDMuODQxNjkgMTEuNDkxNyAwLjY2NjY4NyA3LjU4MzMzIDAuNjY2Njg3Wk04LjQxNjY3IDEyLjc1SDYuNzVWMTEuMDgzNEg4LjQxNjY3VjEyLjc1Wk04LjQxNjY3IDkuODMzMzVINi43NUM2Ljc1IDcuMTI1MDIgOS4yNSA3LjMzMzM1IDkuMjUgNS42NjY2OUM5LjI1IDQuNzUwMDIgOC41IDQuMDAwMDIgNy41ODMzMyA0LjAwMDAyQzYuNjY2NjcgNC4wMDAwMiA1LjkxNjY3IDQuNzUwMDIgNS45MTY2NyA1LjY2NjY5SDQuMjVDNC4yNSAzLjgyNTAyIDUuNzQxNjcgMi4zMzMzNSA3LjU4MzMzIDIuMzMzMzVDOS40MjUgMi4zMzMzNSAxMC45MTY3IDMuODI1MDIgMTAuOTE2NyA1LjY2NjY5QzEwLjkxNjcgNy43NTAwMiA4LjQxNjY3IDcuOTU4MzUgOC40MTY2NyA5LjgzMzM1WlwiXHJcblx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cclxuXHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCI+e3sgYm94LmxhYmVsX3N1cHBvcnQgfX08L2Rpdj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGlua1wiPlxyXG5cdFx0XHRcdDxhIDpocmVmPVwiYm94LmxpbmtfZ2l0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1pY29uXCI+XHJcblx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCJcclxuXHRcdFx0XHRcdFx0XHQgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuXHRcdFx0XHRcdFx0XHRcdCAgZD1cIk03Ljk3NiAwQzUuODYwNzEgMC4wMDAyNjUxNTYgMy44MzIxNCAwLjg0MDY3NiAyLjMzNjQxIDIuMzM2NDFDMC44NDA2NzYgMy44MzIxNCAwLjAwMDI2NTE1NiA1Ljg2MDcxIDAgNy45NzZDMCAxMS40OTggMi4zIDE0LjQ4MyA1LjQzMSAxNS41NkM1LjgyMyAxNS42MDkgNS45NjkgMTUuMzY0IDUuOTY5IDE1LjE2OFYxMy43OThDMy43NjggMTQuMjg4IDMuMjc5IDEyLjcyMiAzLjI3OSAxMi43MjJDMi45MzYgMTEuNzkyIDIuMzk4IDExLjU0NyAyLjM5OCAxMS41NDdDMS42NjQgMTEuMDU4IDIuNDQ2IDExLjA1OCAyLjQ0NiAxMS4wNThDMy4yMjkgMTEuMTA3IDMuNjcgMTEuODkgMy42NyAxMS44OUM0LjQwNCAxMy4xMTMgNS41MjkgMTIuNzcgNS45NyAxMi41NzVDNi4wMTggMTIuMDM3IDYuMjYzIDExLjY5NSA2LjQ1OSAxMS40OTlDNC42OTcgMTEuMzAzIDIuODM4IDEwLjYxOCAyLjgzOCA3LjUzNUMyLjgzOCA2LjY1NSAzLjEzMSA1Ljk2OSAzLjY3IDUuMzgyQzMuNjIgNS4yMzUgMy4zMjcgNC40MDQgMy43NjggMy4zMjdDMy43NjggMy4zMjcgNC40NTMgMy4xMzEgNS45NjkgNC4xNTlDNi42MDUgMy45NjMgNy4yOTEgMy45MTQgNy45NzYgMy45MTRDOC42NjEgMy45MTQgOS4zNDYgNC4wMTIgOS45ODIgNC4xNTlDMTEuNDk5IDMuMTMyIDEyLjE4NCAzLjMyNyAxMi4xODQgMy4zMjdDMTIuNjI0IDQuNDA0IDEyLjMzIDUuMjM1IDEyLjI4MSA1LjQzMUMxMi44MTk5IDYuMDE4MDggMTMuMTE3MSA2Ljc4NzEgMTMuMTEzIDcuNTg0QzEzLjExMyAxMC42NjcgMTEuMjUzIDExLjMwMyA5LjQ5MyAxMS40OTlDOS43ODYgMTEuNzQzIDEwLjAzMSAxMi4yMzIgMTAuMDMxIDEyLjk2NlYxNS4xNjhDMTAuMDMxIDE1LjM2NCAxMC4xNzcgMTUuNjA4IDEwLjU2OSAxNS41NkMxMi4xNTUgMTUuMDI0OCAxMy41MzI3IDE0LjAwNDYgMTQuNTA3MyAxMi42NDM2QzE1LjQ4MTggMTEuMjgyNyAxNi4wMDQgOS42NDk4OSAxNiA3Ljk3NkMxNS45NTEgMy41NzIgMTIuMzggMCA3Ljk3NiAwWlwiXHJcblx0XHRcdFx0XHRcdFx0XHQgIGZpbGw9XCIjMDA3Q0JBXCI+PC9wYXRoPlxyXG5cdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIj57eyBib3gubGFiZWxfZ2l0IH19PC9kaXY+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0PC9TaWRlQmFyQm94ZXM+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5jb25zdCB7IFNpZGVCYXJCb3hlcyB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdTZXR0aW5nc1NpZGVCYXInLFxyXG5cdGNvbXBvbmVudHM6IHsgU2lkZUJhckJveGVzIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblxyXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlIHtcclxuXHJcblx0Jl9fYmFubmVyLnVzZWZ1bCB7XHJcblx0XHRwYWRkaW5nOiAyMHB4IDMwcHg7XHJcblx0fVxyXG5cclxuXHQmX19wYW5lbC5oZWxwIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcclxuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAvIDIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLWNvbnRlbnQge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xyXG5cdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI0RDRENERDtcclxuXHRcdFx0cGFkZGluZy10b3A6IDIzcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LmhlbHAtY2VudGVyLWxpbmsge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIycHg7XHJcblxyXG5cdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGEge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjMDA3Q0JBO1xyXG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcblx0XHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0XHRjb2xvcjogIzA2NkVBMjtcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0PEN4VnVpQ29sbGFwc2VNaW5pXHJcblx0XHRcdHdpdGgtcGFuZWxcclxuXHRcdFx0di1mb3I9XCIoIHRhYiwgaW5kZXggKSBpbiBjYXB0Y2hhXCJcclxuXHRcdFx0Omljb249XCJ0YWIuaWNvblwiXHJcblx0XHRcdDpsYWJlbD1cImdldFRhYlRpdGxlKCB0YWIgKVwiXHJcblx0XHRcdDprZXk9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxyXG5cdFx0XHQ6ZGlzYWJsZWQ9XCJ0YWIuZGlzYWJsZWRcIlxyXG5cdFx0XHQ6aW5pdGlhbC1hY3RpdmU9XCJpc0FjdGl2ZSggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHRAY2hhbmdlPVwib25DaGFuZ2VBY3RpdmUoICRldmVudCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8a2VlcC1hbGl2ZT5cclxuXHRcdFx0XHQ8Y29tcG9uZW50XHJcblx0XHRcdFx0XHR2LWJpbmQ6aXM9XCJ0YWIuY29tcG9uZW50XCJcclxuXHRcdFx0XHRcdHJlZj1cImNhcHRjaGFcIlxyXG5cdFx0XHRcdFx0OmluY29taW5nPVwiZ2V0SW5jb21pbmdDYXB0Y2hhKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9rZWVwLWFsaXZlPlxyXG5cdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXHJcblx0XHRcdFx0OmxvYWRpbmc9XCJsb2FkaW5nR2F0ZXdheXNbIHRhYi5jb21wb25lbnQubmFtZSBdXCJcclxuXHRcdFx0XHRAY2xpY2s9XCJvblNhdmVHYXRld2F5KCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+U2F2ZTwvc3Bhbj5cclxuXHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0PC9DeFZ1aUNvbGxhcHNlTWluaT5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgcmVDQVBUQ0hBdjMgZnJvbSAnLi4vLi4vY2FwdGNoYS9nb29nbGUnO1xyXG5pbXBvcnQgaENhcHRjaGEgZnJvbSAnLi4vLi4vY2FwdGNoYS9oQ2FwdGNoYSc7XHJcbmltcG9ydCBmcmllbmRseUNhcHRjaGEgZnJvbSAnLi4vLi4vY2FwdGNoYS9mcmllbmRseUNhcHRjaGEnO1xyXG5pbXBvcnQgdHVybnN0aWxlIGZyb20gJy4uLy4uL2NhcHRjaGEvdHVybnN0aWxlJztcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcgfSA9IHdpbmRvdy5KZXRGQk1peGlucztcclxuY29uc3QgeyBDeFZ1aUNvbGxhcHNlTWluaSB9ICAgICAgICAgID0gd2luZG93LkpldEZCQ29tcG9uZW50cztcclxuXHJcbndpbmRvdy5qZmJFdmVudEJ1cyA9IHdpbmRvdy5qZmJFdmVudEJ1cyB8fCBuZXcgVnVlKCB7fSApO1xyXG5cclxuY29uc3QgY2FwdGNoYVRhYnMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuY2FwdGNoYScsIFtcclxuXHRyZUNBUFRDSEF2MyxcclxuXHRoQ2FwdGNoYSxcclxuXHRmcmllbmRseUNhcHRjaGEsXHJcblx0dHVybnN0aWxlLFxyXG5dICk7XHJcblxyXG5sZXQgcmVxdWVzdEZ1bmMgPSAoKSA9PiB7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2NhcHRjaGEtdGFiJyxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0OiB7fSxcclxuXHRcdH0sXHJcblx0XHRpbm5lclNsdWdzOiBBcnJheSxcclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSxcclxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCBdLFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjYXB0Y2hhOiBjYXB0Y2hhVGFicyxcclxuXHRcdFx0c3RvcmFnZTogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApLFxyXG5cdFx0XHRzZXR0aW5nczogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoXHJcblx0XHRcdFx0d2luZG93LkpldEZCUGFnZUNvbmZpZ1sgJ2NhcHRjaGEtdGFiLWNvbmZpZycgXSxcclxuXHRcdFx0KSApLFxyXG5cdFx0XHRhY3RpdmVHYXRld2F5c1RhYnM6IFtdLFxyXG5cdFx0XHRsb2FkaW5nR2F0ZXdheXM6IHt9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgcHJvcHMgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmdHYXRld2F5cywgc2x1Zywgc3RhdGUgPT09ICdiZWdpbicgKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdjaGFuZ2UtdGFiJywgKFxyXG5cdFx0XHRmdW5jdGlvbiAoIHsgc2x1ZyB9ICkge1xyXG5cdFx0XHRcdGlmICggc2x1ZyAhPT0gdGhpcy4kb3B0aW9ucy5uYW1lICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyBbIHRoaXMuJG9wdGlvbnMubmFtZSwgLi4udGhpcy5hY3RpdmVHYXRld2F5c1RhYnMgXS5qb2luKCAnX18nICk7XHJcblx0XHRcdH1cclxuXHRcdCkuYmluZCggdGhpcyApICk7XHJcblxyXG5cdFx0dGhpcy5hY3RpdmVHYXRld2F5c1RhYnMgPSB0aGlzLmlubmVyU2x1Z3M7XHJcblxyXG5cdFx0cmVxdWVzdEZ1bmMgPSBfLmRlYm91bmNlKCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XHJcblx0XHR9LCAxMDAwICk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRJbmNvbWluZ0NhcHRjaGEoIHNsdWcgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmluY29taW5nPy5bIHNsdWcgXSA/PyB7fTtcclxuXHRcdH0sXHJcblx0XHRnZXRUYWJUaXRsZSggdGFiICkge1xyXG5cdFx0XHRjb25zdCB7IHRpdGxlIH0gPSB0YWI7XHJcblxyXG5cdFx0XHRpZiAoIHRpdGxlPy5sZW5ndGggKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRpdGxlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCB7IG5hbWUgfSA9IHRhYi5jb21wb25lbnQ7XHJcblx0XHRcdGNvbnN0IGl0ZW0gICAgID0gdGhpcy5zZXR0aW5ncy5maW5kKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSBuYW1lICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gaXRlbT8ubGFiZWwgfHwgJ1VuZGVmaW5lZCBjYXB0Y2hhIHRpdGxlJztcclxuXHRcdH0sXHJcblx0XHRvbkNoYW5nZUFjdGl2ZSggaXNBY3RpdmUsIHRhYk5hbWUgKSB7XHJcblx0XHRcdGxldCBbIGhhc2gsIC4uLm90aGVycyBdID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSggJyMnLCAnJyApLnNwbGl0KCAnX18nICk7XHJcblxyXG5cdFx0XHRpZiAoICFpc0FjdGl2ZSApIHtcclxuXHRcdFx0XHRvdGhlcnMgPSBvdGhlcnMuZmlsdGVyKCBnYXRld2F5VGFiID0+IChcclxuXHRcdFx0XHRcdHRhYk5hbWUgIT09IGdhdGV3YXlUYWIgfHwgaXNBY3RpdmVcclxuXHRcdFx0XHQpICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0b3RoZXJzLnB1c2goIHRhYk5hbWUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNoYW5nZUdhdGV3YXlzVGFicyggb3RoZXJzICk7XHJcblxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IFsgdGhpcy4kb3B0aW9ucy5uYW1lLCAuLi5vdGhlcnMgXS5qb2luKCAnX18nICk7XHJcblx0XHR9LFxyXG5cdFx0Y2hhbmdlR2F0ZXdheXNUYWJzKCB0YWJzICkge1xyXG5cdFx0XHR0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyA9IHRhYnM7XHJcblx0XHR9LFxyXG5cdFx0aXNBY3RpdmUoIHRhYk5hbWUgKSB7XHJcblx0XHRcdHJldHVybiBCb29sZWFuKCB0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicz8uaW5jbHVkZXMoIHRhYk5hbWUgKSApO1xyXG5cdFx0fSxcclxuXHRcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XHJcblx0XHRcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCBuYW1lLCB2YWx1ZSApO1xyXG5cclxuXHRcdFx0cmVxdWVzdEZ1bmMoKTtcclxuXHRcdH0sXHJcblx0XHRvblNhdmVHYXRld2F5KCBpbmRleFRhYiwgdGFiU2x1ZyApIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuJHJlZnMuY2FwdGNoYVsgaW5kZXhUYWIgXTtcclxuXHJcblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggY3VycmVudCwgdGFiU2x1ZyApO1xyXG5cdFx0fSxcclxuXHRcdGdldEFqYXhPYmplY3QoIGN1cnJlbnRUYWIsIHRhYlNsdWcgKSB7XHJcblx0XHRcdGNvbnN0IGFqYXhSZXF1ZXN0ID0ge1xyXG5cdFx0XHRcdHVybDogd2luZG93LmFqYXh1cmwsXHJcblx0XHRcdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gY3VycmVudFRhYi5nZXRSZXF1ZXN0T25TYXZlKCk7XHJcblxyXG5cdFx0XHRhamF4UmVxdWVzdC5kYXRhID0ge1xyXG5cdFx0XHRcdGFjdGlvbjogYGpldF9mYl9zYXZlX3RhYl9fJHsgdGhpcy4kb3B0aW9ucy5uYW1lIH1gLFxyXG5cdFx0XHRcdC4uLihcclxuXHRcdFx0XHRcdHRhYlNsdWcgPT09IHRoaXMuJG9wdGlvbnMubmFtZSA/IGN1cnJlbnQuZGF0YSA6IHtcclxuXHRcdFx0XHRcdFx0WyB0YWJTbHVnIF06IGN1cnJlbnQuZGF0YSxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKCB3aW5kb3c/LkpldEZCUGFnZUNvbmZpZ1BhY2thZ2U/Lm5vbmNlICkge1xyXG5cdFx0XHRcdGFqYXhSZXF1ZXN0LmRhdGEuX25vbmNlID0gd2luZG93LkpldEZCUGFnZUNvbmZpZ1BhY2thZ2Uubm9uY2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBhamF4UmVxdWVzdDtcclxuXHRcdH0sXHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuXHQ8Y3gtdnVpLWlucHV0XHJcblx0XHQ6bGFiZWw9XCJsYWJlbC5hcGlfa2V5XCJcclxuXHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0OmRlc2NyaXB0aW9uPSdgJHsgaGVscC5hcGlQcmVmIH0gPGEgaHJlZj1cIiR7IGhlbHAuYXBpTGluayB9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHsgaGVscC5hcGlMaW5rTGFiZWwgfTwvYT5gJ1xyXG5cdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXHJcblx0XHR2LW1vZGVsPVwiYXBpX2tleVwiXHJcblx0Lz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQge1xyXG5cdGhlbHAsXHJcblx0bGFiZWxcclxufSBmcm9tIFwiLi9zb3VyY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnZ2V0LXJlc3BvbnNlLXRhYicsXHJcblx0cHJvcHM6IHtcclxuXHRcdGluY29taW5nOiB7XHJcblx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0ZGVmYXVsdDoge30sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLCBoZWxwLFxyXG5cdFx0XHRhcGlfa2V5OiAnJyxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5hcGlfa2V5ID0gdGhpcy5pbmNvbWluZy5hcGlfa2V5IHx8ICcnXHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdGFwaV9rZXk6IHRoaXMuYXBpX2tleSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcblx0PGN4LXZ1aS1pbnB1dFxyXG5cdFx0OmxhYmVsPVwibGFiZWwuYXBpX2tleVwiXHJcblx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdDpkZXNjcmlwdGlvbj0nYCR7IGhlbHAuYXBpUHJlZiB9IDxhIGhyZWY9XCIkeyBoZWxwLmFwaUxpbmsgfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7IGhlbHAuYXBpTGlua0xhYmVsIH08L2E+YCdcclxuXHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxyXG5cdFx0di1tb2RlbD1cImFwaV9rZXlcIlxyXG5cdC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRoZWxwLFxyXG5cdGxhYmVsXHJcbn0gZnJvbSBcIi4vc291cmNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ21haWxjaGltcC10YWInLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQ6IHt9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbCwgaGVscCxcclxuXHRcdFx0YXBpX2tleTogJycsXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZCgpIHtcclxuXHRcdHRoaXMuYXBpX2tleSA9IHRoaXMuaW5jb21pbmcuYXBpX2tleSB8fCAnJ1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRhcGlfa2V5OiB0aGlzLmFwaV9rZXksXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdG5hbWU9XCJlbmFibGVfZGV2X21vZGVcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OmxhYmVsPVwibG9hZGluZy5lbmFibGVfZGV2X21vZGUgPyBgJHtsYWJlbC5lbmFibGVfZGV2X21vZGV9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5lbmFibGVfZGV2X21vZGVcIlxyXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmVuYWJsZV9kZXZfbW9kZVwiXHJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdlbmFibGVfZGV2X21vZGUnICkgPyBzdG9yYWdlLmVuYWJsZV9kZXZfbW9kZSA6IGZhbHNlXCJcclxuXHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcclxuXHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnZW5hYmxlX2Rldl9tb2RlJywgJGV2ZW50IClcIlxyXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxyXG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxyXG5cdFx0XHRuYW1lPVwiY2xlYXJfb25fdW5pbnN0YWxsXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpsYWJlbD1cImxvYWRpbmcuY2xlYXJfb25fdW5pbnN0YWxsID8gYCR7bGFiZWwuY2xlYXJfb25fdW5pbnN0YWxsfSAobG9hZGluZy4uLilgIDogbGFiZWwuY2xlYXJfb25fdW5pbnN0YWxsXCJcclxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5jbGVhcl9vbl91bmluc3RhbGxcIlxyXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnY2xlYXJfb25fdW5pbnN0YWxsJyApID8gc3RvcmFnZS5jbGVhcl9vbl91bmluc3RhbGwgOiBmYWxzZVwiXHJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXHJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2NsZWFyX29uX3VuaW5zdGFsbCcsICRldmVudCApXCJcclxuXHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cclxuICAgIDxjeC12dWktaW5wdXRcclxuICAgICAgICBuYW1lPVwiZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5XCJcclxuICAgICAgICA6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuICAgICAgICA6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuICAgICAgICA6bGFiZWw9XCJsb2FkaW5nLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSA/IGAke2xhYmVsLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eVwiXHJcbiAgICAgICAgOmRlc2NyaXB0aW9uPVwiaGVscC5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHlcIlxyXG4gICAgICAgIDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHknICkgPyBzdG9yYWdlLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSA6ICdtYW5hZ2Vfb3B0aW9ucydcIlxyXG4gICAgICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXHJcbiAgICAgICAgQGlucHV0PVwiY2hhbmdlVmFsKCAnZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5JywgJGV2ZW50IClcIlxyXG4gICAgLz5cclxuXHRcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXJcclxuXHRcdFx0OmxhYmVsPVwiX18oICdGb3JtIEFjY2Vzc2liaWxpdHknLCAnamV0LWZvcm0tYnVpbGRlcicgKVwiXHJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0Lz5cclxuXHRcdDxkaXYgY2xhc3M9XCJjeC12dWktaW5uZXItcGFuZWxcIj5cclxuXHRcdFx0PGN4LXZ1aS1zd2l0Y2hlclxyXG5cdFx0XHRcdG5hbWU9XCJkaXNhYmxlX25leHRfYnV0dG9uXCJcclxuXHRcdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmRpc2FibGVfbmV4dF9idXR0b24gPyBgJHtsYWJlbC5kaXNhYmxlX25leHRfYnV0dG9ufSAobG9hZGluZy4uLilgIDogbGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvblwiXHJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5kaXNhYmxlX25leHRfYnV0dG9uXCJcclxuXHRcdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZGlzYWJsZV9uZXh0X2J1dHRvbicgKSA/IHN0b3JhZ2UuZGlzYWJsZV9uZXh0X2J1dHRvbiA6IHRydWVcIlxyXG5cdFx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXHJcblx0XHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnZGlzYWJsZV9uZXh0X2J1dHRvbicsICRldmVudCApXCJcclxuXHRcdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxyXG5cdFx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdFx0bmFtZT1cInNjcm9sbF9vbl9uZXh0XCJcclxuXHRcdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLnNjcm9sbF9vbl9uZXh0ID8gYCR7bGFiZWwuc2Nyb2xsX29uX25leHR9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5zY3JvbGxfb25fbmV4dFwiXHJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5zY3JvbGxfb25fbmV4dFwiXHJcblx0XHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3Njcm9sbF9vbl9uZXh0JyApID8gc3RvcmFnZS5zY3JvbGxfb25fbmV4dCA6IGZhbHNlXCJcclxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxyXG5cdFx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ3Njcm9sbF9vbl9uZXh0JywgJGV2ZW50IClcIlxyXG5cdFx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHRcdDxjeC12dWktc3dpdGNoZXJcclxuXHRcdFx0XHRuYW1lPVwiYXV0b19mb2N1c1wiXHJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdFx0OmxhYmVsPVwibG9hZGluZy5hdXRvX2ZvY3VzID8gYCR7bGFiZWwuYXV0b19mb2N1c30gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmF1dG9fZm9jdXNcIlxyXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuYXV0b19mb2N1c1wiXHJcblx0XHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2F1dG9fZm9jdXMnICkgPyBzdG9yYWdlLmF1dG9fZm9jdXMgOiBmYWxzZVwiXHJcblx0XHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcclxuXHRcdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdhdXRvX2ZvY3VzJywgJGV2ZW50IClcIlxyXG5cdFx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHJcbiAgICA8Y3gtdnVpLWNvbXBvbmVudC13cmFwcGVyXHJcbiAgICAgICAgOmxhYmVsPVwiX18oICdGb3JtIFJlcXVlc3QgQXJncycsICdqZXQtZm9ybS1idWlsZGVyJyApXCJcclxuICAgICAgICA6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuICAgIC8+XHJcbiAgICA8Y3gtdnVpLWlucHV0XHJcbiAgICAgICAgbmFtZT1cImdmYl9yZXF1ZXN0X2FyZ3Nfa2V5XCJcclxuICAgICAgICA6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuICAgICAgICA6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuICAgICAgICA6bGFiZWw9XCInUmVxdWVzdCBrZXknXCJcclxuICAgICAgICA6ZGVzY3JpcHRpb249XCInVW5pcXVlIGZvcm0gcGFyYW1ldGVyIChrZXkpJ1wiXHJcbiAgICAgICAgOnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2dmYl9yZXF1ZXN0X2FyZ3Nfa2V5JyApID8gc3RvcmFnZS5nZmJfcmVxdWVzdF9hcmdzX2tleSA6ICcxMTExJ1wiXHJcbiAgICAgICAgOmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcclxuICAgICAgICBAaW5wdXQ9XCJjaGFuZ2VWYWwoICdnZmJfcmVxdWVzdF9hcmdzX2tleScsICRldmVudCApXCJcclxuICAgIC8+XHJcblxyXG4gICAgPGN4LXZ1aS1pbnB1dFxyXG4gICAgICAgIG5hbWU9XCJnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlXCJcclxuICAgICAgICA6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuICAgICAgICA6c2l6ZT1cIidmdWxsd2lkdGgnXCJcclxuICAgICAgICA6bGFiZWw9XCInUmVxdWVzdCB2YWx1ZSdcIlxyXG4gICAgICAgIDpkZXNjcmlwdGlvbj1cIidVbmlxdWUgZm9ybSBwYXJhbWV0ZXIgKHZhbHVlKSdcIlxyXG4gICAgICAgIDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlJyApID8gc3RvcmFnZS5nZmJfcmVxdWVzdF9hcmdzX3ZhbHVlIDogJzIyMjInXCJcclxuICAgICAgICA6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxyXG4gICAgICAgIEBpbnB1dD1cImNoYW5nZVZhbCggJ2dmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUnLCAkZXZlbnQgKVwiXHJcbiAgICAvPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7XHJcblx0aGVscCxcclxuXHRsYWJlbCxcclxufSBmcm9tICcuL3NvdXJjZSc7XHJcblxyXG5jb25zdCB7IFNhdmVUYWJCeUFqYXgsIGkxOG4gfSA9IHdpbmRvdy5KZXRGQk1peGlucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnb3B0aW9ucy10YWInLFxyXG5cdHByb3BzOiB7XHJcblx0XHRpbmNvbWluZzoge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQ6IHt9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBpMThuIF0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLCBoZWxwLFxyXG5cdFx0XHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXHJcblx0XHRcdGlzTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdGxvYWRpbmc6IHt9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgdGhpcy5vbkNoYW5nZVN0YXRlLmJpbmQoIHRoaXMgKSApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlU3RhdGUoIHsgc3RhdGUsIHNsdWcgfSApIHtcclxuXHRcdFx0aWYgKCAnb3B0aW9ucy10YWInICE9PSBzbHVnICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCAnZW5kJyA9PT0gc3RhdGUgKSB7XHJcblx0XHRcdFx0dGhpcy5sb2FkaW5nID0ge307XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJHNldCggdGhpcywgJ2lzTG9hZGluZycsIHN0YXRlID09PSAnYmVnaW4nICk7XHJcblx0XHR9LFxyXG5cdFx0Y2hhbmdlVmFsKCBuYW1lLCB2YWx1ZSApIHtcclxuXHRcdFx0aWYgKCB0aGlzLmlzTG9hZGluZyApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsIG5hbWUsIHZhbHVlICk7XHJcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nLCBuYW1lLCB0cnVlICk7XHJcblxyXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApO1xyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxzZWN0aW9uPlxyXG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxyXG5cdFx0XHRuYW1lPVwidXNlX2dhdGV3YXlzXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnVzZV9nYXRld2F5c1wiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAudXNlX2dhdGV3YXlzXCJcclxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS51c2VfZ2F0ZXdheXNcIlxyXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICd1c2VfZ2F0ZXdheXMnLCAkZXZlbnQgKVwiXHJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdHYtaWY9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiXHJcblx0XHRcdG5hbWU9XCJlbmFibGVfdGVzdF9tb2RlXCJcclxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuZW5hYmxlX3Rlc3RfbW9kZVwiXHJcblx0XHRcdDpsYWJlbD1cImxhYmVsLmVuYWJsZV90ZXN0X21vZGVcIlxyXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmVuYWJsZV90ZXN0X21vZGVcIlxyXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdlbmFibGVfdGVzdF9tb2RlJywgJGV2ZW50IClcIlxyXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxyXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWlubmVyLXBhbmVsXCI+XHJcblx0XHRcdFx0PEN4VnVpQ29sbGFwc2VNaW5pXHJcblx0XHRcdFx0XHR3aXRoLXBhbmVsXHJcblx0XHRcdFx0XHR2LWZvcj1cIiggdGFiLCBpbmRleCApIGluIGdhdGV3YXlzXCJcclxuXHRcdFx0XHRcdDppY29uPVwidGFiLmljb25cIlxyXG5cdFx0XHRcdFx0OmxhYmVsPVwidGFiLnRpdGxlXCJcclxuXHRcdFx0XHRcdDprZXk9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxyXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwidGFiLmRpc2FibGVkXCJcclxuXHRcdFx0XHRcdDppbml0aWFsLWFjdGl2ZT1cImlzQWN0aXZlKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdFx0XHRAY2hhbmdlPVwib25DaGFuZ2VBY3RpdmUoICRldmVudCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxrZWVwLWFsaXZlPlxyXG5cdFx0XHRcdFx0XHQ8Y29tcG9uZW50XHJcblx0XHRcdFx0XHRcdFx0di1iaW5kOmlzPVwidGFiLmNvbXBvbmVudFwiXHJcblx0XHRcdFx0XHRcdFx0cmVmPVwiZ2F0ZXdheXNcIlxyXG5cdFx0XHRcdFx0XHRcdDppbmNvbWluZz1cImdldEluY29taW5nKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2tlZXAtYWxpdmU+XHJcblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxyXG5cdFx0XHRcdFx0XHRidXR0b24tc3R5bGU9XCJhY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImxvYWRpbmdHYXRld2F5c1sgdGFiLmNvbXBvbmVudC5uYW1lIF1cIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJvblNhdmVHYXRld2F5KCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5TYXZlPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxyXG5cdFx0XHRcdDwvQ3hWdWlDb2xsYXBzZU1pbmk+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC90ZW1wbGF0ZT5cclxuXHQ8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG5cdGhlbHAsXHJcblx0bGFiZWwsXHJcbn0gZnJvbSBcIi4vc291cmNlXCI7XHJcbmltcG9ydCAqIGFzIHBheXBhbCBmcm9tICcuLi8uLi9nYXRld2F5cy9wYXlwYWwnO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuY29uc3QgeyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZyB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xyXG5jb25zdCB7IEN4VnVpQ29sbGFwc2VNaW5pIH0gPSB3aW5kb3cuSmV0RkJDb21wb25lbnRzO1xyXG5cclxud2luZG93LmpmYkV2ZW50QnVzID0gd2luZG93LmpmYkV2ZW50QnVzIHx8IG5ldyBWdWUoIHt9ICk7XHJcblxyXG5jb25zdCBnYXRld2F5c1RhYnMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZ2F0ZXdheXMnLCBbXHJcblx0cGF5cGFsLFxyXG5dICk7XHJcblxyXG5sZXQgcmVxdWVzdEZ1bmMgPSAoKSA9PiB7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ3BheW1lbnRzLWdhdGV3YXlzJyxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0KCkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRpbm5lclNsdWdzOiBBcnJheSxcclxuXHR9LFxyXG5cdGNvbXBvbmVudHM6IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSxcclxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcgXSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWwsIGhlbHAsXHJcblx0XHRcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcclxuXHRcdFx0Z2F0ZXdheXM6IGdhdGV3YXlzVGFicyxcclxuXHRcdFx0bG9hZGluZ0dhdGV3YXlzOiB7fSxcclxuXHRcdFx0YWN0aXZlR2F0ZXdheXNUYWJzOiBbXSxcclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHByb3BzID0+IHtcclxuXHRcdFx0Y29uc3QgeyBzdGF0ZSwgc2x1ZyB9ID0gcHJvcHM7XHJcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nR2F0ZXdheXMsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XHJcblx0XHR9ICk7XHJcblxyXG5cclxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ2NoYW5nZS10YWInLCAoIGZ1bmN0aW9uKCB7IHNsdWcgfSApIHtcclxuXHRcdFx0aWYgKCBzbHVnICE9PSB0aGlzLiRvcHRpb25zLm5hbWUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIFsgdGhpcy4kb3B0aW9ucy5uYW1lLCAuLi50aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyBdLmpvaW4oICdfXycgKTtcclxuXHRcdH0gKS5iaW5kKCB0aGlzICkgKTtcclxuXHJcblx0XHR0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyA9IHRoaXMuaW5uZXJTbHVncztcclxuXHJcblx0XHRyZXF1ZXN0RnVuYyA9IF8uZGVib3VuY2UoICgpID0+IHtcclxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKVxyXG5cdFx0fSwgMTAwMCApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0b25DaGFuZ2VBY3RpdmUoIGlzQWN0aXZlLCB0YWJOYW1lICkge1xyXG5cdFx0XHRsZXQgWyBoYXNoLCAuLi5vdGhlcnMgXSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoICcjJywgJycgKS5zcGxpdCggJ19fJyApO1xyXG5cclxuXHRcdFx0aWYgKCAhIGlzQWN0aXZlICkge1xyXG5cdFx0XHRcdG90aGVycyA9IG90aGVycy5maWx0ZXIoIGdhdGV3YXlUYWIgPT4gKCB0YWJOYW1lICE9PSBnYXRld2F5VGFiIHx8IGlzQWN0aXZlICkgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdGhlcnMucHVzaCggdGFiTmFtZSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY2hhbmdlR2F0ZXdheXNUYWJzKCBvdGhlcnMgKTtcclxuXHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gWyB0aGlzLiRvcHRpb25zLm5hbWUsIC4uLm90aGVycyBdLmpvaW4oICdfXycgKTtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2VHYXRld2F5c1RhYnMoIHRhYnMgKSB7XHJcblx0XHRcdHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzID0gdGFicztcclxuXHRcdH0sXHJcblx0XHRpc0FjdGl2ZSggdGFiTmFtZSApIHtcclxuXHRcdFx0cmV0dXJuIEJvb2xlYW4oIHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzLmxlbmd0aCAmJiB0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicy5pbmNsdWRlcyggdGFiTmFtZSApICk7XHJcblx0XHR9LFxyXG5cdFx0Y2hhbmdlVmFsKCBuYW1lLCB2YWx1ZSApIHtcclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsIG5hbWUsIHZhbHVlICk7XHJcblxyXG5cdFx0XHRyZXF1ZXN0RnVuYygpO1xyXG5cdFx0fSxcclxuXHRcdG9uU2F2ZUdhdGV3YXkoIGluZGV4VGFiLCB0YWJTbHVnICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy4kcmVmcy5nYXRld2F5c1sgaW5kZXhUYWIgXTtcclxuXHJcblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggY3VycmVudCwgdGFiU2x1ZyApO1xyXG5cdFx0fSxcclxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0fSxcclxufVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXHJcblx0XHRcdG5hbWU9XCJlbmFibGVfdXNlcl9qb3VybmV5XCJcclxuXHRcdFx0OmxhYmVsPVwibG9hZGluZy5lbmFibGVfdXNlcl9qb3VybmV5ID8gYCR7bGFiZWwuZW5hYmxlX3VzZXJfam91cm5leX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmVuYWJsZV91c2VyX2pvdXJuZXlcIlxyXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmVuYWJsZV91c2VyX2pvdXJuZXlcIlxyXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcclxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2VuYWJsZV91c2VyX2pvdXJuZXknICkgPyBzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgOiBmYWxzZVwiXHJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXHJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2VuYWJsZV91c2VyX2pvdXJuZXknLCAkZXZlbnQgKVwiXHJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XHJcblxyXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXlcIj5cclxuXHRcdFx0PGN4LXZ1aS1zZWxlY3RcclxuXHRcdFx0XHRuYW1lPVwic3RvcmFnZV90eXBlXCJcclxuXHRcdFx0XHRjbGFzcz1cInVzZXItam91cm5leS1zZWxlY3RcIlxyXG5cdFx0XHRcdDpsYWJlbD1cImxvYWRpbmcuc3RvcmFnZV90eXBlID8gYCR7bGFiZWwuc3RvcmFnZV90eXBlfSAobG9hZGluZy4uLilgIDogbGFiZWwuc3RvcmFnZV90eXBlXCJcclxuXHRcdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLnN0b3JhZ2VfdHlwZVwiXHJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXHJcblx0XHRcdFx0Om9wdGlvbnMtbGlzdD1cIltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFsdWU6ICdsb2NhbCcsXHJcblx0XHRcdFx0XHRcdGxhYmVsOiAnTG9jYWwgU3RvcmFnZSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiAnc2Vzc2lvbicsXHJcblx0XHRcdFx0XHRcdGxhYmVsOiAnU2Vzc2lvbiBTdG9yYWdlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cIlxyXG5cdFx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdzdG9yYWdlX3R5cGUnICkgPyBzdG9yYWdlLnN0b3JhZ2VfdHlwZSA6ICdsb2NhbCdcIlxyXG5cdFx0XHRcdDpkaXNhYmxlZD1cIiFzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgfHwgaXNMb2FkaW5nXCJcclxuXHRcdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdzdG9yYWdlX3R5cGUnLCAkZXZlbnQgKVwiXHJcblx0XHRcdD48L2N4LXZ1aS1zZWxlY3Q+XHJcblx0XHRcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXIgPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktY29tcG9uZW50X19sYWJlbFwiPlBsZWFzZSBub3RlITwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+PGI+U2Vzc2lvbiBTdG9yYWdlOjwvYj4gVGhlIGluZm9ybWF0aW9uIGlzIGtlcHQgb25seSB3aGlsZSB0aGlzIHRhYiBvciB3aW5kb3cgaXMgb3Blbi4gUmVsb2FkaW5nIHRoZSBwYWdlIGlzIGZpbmUsIGJ1dCBhcyBzb29uIGFzIHlvdSBjbG9zZSB0aGUgdGFiLCB0aGUgZGF0YSBkaXNhcHBlYXJzLiBPdGhlciB0YWJzIG9yIHdpbmRvd3Mgb2YgdGhlIHNpdGUgY2Fu4oCZdCBzZWUgaXQuIFlvdSBjYW4gc3RpbGwgZ2V0IGl0IGJhY2sgYnkgcHJlc3NpbmcgQ3RybOKAryvigK9TaGlmdOKAryvigK9UICjigJxSZW9wZW7igK9DbG9zZWTigK9UYWLigJ0pPC9kaXY+XHJcblx0XHRcdFx0PGRpdj48Yj5Mb2NhbCBTdG9yYWdlOjwvYj4gVGhlIGluZm9ybWF0aW9uIHN0YXlzIG11Y2ggbG9uZ2Vy4oCUZXZlcnkgdGFiIG9yIHdpbmRvdyBvZiB0aGlzIHNpdGUgY2FuIHVzZSBpdCwgYW5kIGl0IHJlbWFpbnMgZXZlbiBhZnRlciB5b3UgY2xvc2UgYW5kIHJlb3BlbiB0aGUgYnJvd3NlciwgdW50aWwgeW91IGNsZWFyIGl0IHlvdXJzZWxmLjwvZGl2PlxyXG5cdFx0XHQ8L2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcj5cclxuXHJcblx0XHRcdDxjeC12dWktc2VsZWN0XHJcblx0XHRcdFx0bmFtZT1cImNsZWFyX2FmdGVyX3N1Ym1pdFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJ1c2VyLWpvdXJuZXktc2VsZWN0XCJcclxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmNsZWFyX2FmdGVyX3N1Ym1pdCA/IGAke2xhYmVsLmNsZWFyX2FmdGVyX3N1Ym1pdH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmNsZWFyX2FmdGVyX3N1Ym1pdFwiXHJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5jbGVhcl9hZnRlcl9zdWJtaXRcIlxyXG5cdFx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxyXG5cdFx0XHRcdDpvcHRpb25zLWxpc3Q9XCJbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiAnYWx3YXlzJyxcclxuXHRcdFx0XHRcdFx0bGFiZWw6ICdBZnRlciBhbnkgc3VibWl0IChzdWNjZXNzIG9yIGZhaWx1cmUpJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFsdWU6ICdzdWNjZXNzJyxcclxuXHRcdFx0XHRcdFx0bGFiZWw6ICdBZnRlciBzdWNjZXNzZnVsIHN1Ym1pdCBvbmx5J1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cIlxyXG5cdFx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdjbGVhcl9hZnRlcl9zdWJtaXQnICkgPyBzdG9yYWdlLmNsZWFyX2FmdGVyX3N1Ym1pdCA6ICdzdWNjZXNzJ1wiXHJcblx0XHRcdFx0OmRpc2FibGVkPVwiIXN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leSB8fCBpc0xvYWRpbmdcIlxyXG5cdFx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2NsZWFyX2FmdGVyX3N1Ym1pdCcsICRldmVudCApXCJcclxuXHRcdFx0PjwvY3gtdnVpLXNlbGVjdD5cclxuXHRcdDwvdGVtcGxhdGU+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IHtcclxuXHRoZWxwLFxyXG5cdGxhYmVsLFxyXG59IGZyb20gJy4vc291cmNlJztcclxuXHJcbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICd1c2VyLWpvdXJuZXktdGFiJyxcclxuXHRwcm9wczoge1xyXG5cdFx0aW5jb21pbmc6IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRkZWZhdWx0OiAoKSA9PiAoe30pLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBpMThuIF0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsLCBoZWxwLFxyXG5cdFx0XHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXHJcblx0XHRcdGlzTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdGxvYWRpbmc6IHt9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgdGhpcy5vbkNoYW5nZVN0YXRlLmJpbmQoIHRoaXMgKSApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG9uQ2hhbmdlU3RhdGUoIHsgc3RhdGUsIHNsdWcgfSApIHtcclxuXHRcdFx0aWYgKCAndXNlci1qb3VybmV5LXRhYicgIT09IHNsdWcgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSB7fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLCAnaXNMb2FkaW5nJywgc3RhdGUgPT09ICdiZWdpbicgKTtcclxuXHRcdH0sXHJcblx0XHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xyXG5cdFx0XHRpZiAoIHRoaXMuaXNMb2FkaW5nICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcclxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsIG5hbWUsIHRydWUgKTtcclxuXHJcblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcblxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4udXNlci1qb3VybmV5LXNlbGVjdCBzZWxlY3QuY3gtdnVpLXNlbGVjdCB7XHJcblx0cGFkZGluZzogNnB4IDI0cHggNnB4IDEycHg7XHJcbn1cclxuPC9zdHlsZT4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmpmYi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDJlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLmpmYi1jb250ZW50LW1haW4ge1xuICBmbGV4OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWVcIixcIndlYnBhY2s6Ly8uLy4uL1NldHRpbmdzUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBb0tBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ25LRDtBRHFLQztFQUNDLE9BQUE7QUNuS0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxyXFxuLmpmYi1jb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRnYXA6IDJlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxyXFxuXFxyXFxuXFx0Ji1tYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIuamZiLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMmVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uamZiLWNvbnRlbnQtbWFpbiB7XFxuICBmbGV4OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX2Jhbm5lci51c2VmdWwge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIHtcbiAgICB3aWR0aDogNTAlO1xufVxufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEQ0RDREQ7XG4gIHBhZGRpbmctdG9wOiAyM3B4O1xufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbms6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMDA3Q0JBO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGE6aG92ZXIge1xuICBjb2xvcjogIzA2NkVBMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGEgLmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMjhweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWVcIixcIndlYnBhY2s6Ly8uLy4uL1NldHRpbmdzU2lkZUJhci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBK0VDO0VBQ0Msa0JBQUE7QUM5RUY7QURpRkM7RUFDQyxXQUFBO0FDL0VGO0FEaUZFO0FBSEQ7SUFJRSxVQUFBO0FDOUVEO0FBQ0Y7QURnRkU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUM5RUg7QURpRkU7RUFDQyxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQy9FSDtBRGlGRztFQUNDLGdCQUFBO0FDL0VKO0FEa0ZHO0VBQ0MsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNoRko7QURrRkk7RUFDQyxjQUFBO0VBQ0EsMEJBQUE7QUNoRkw7QURtRkk7RUFDQyxrQkFBQTtBQ2pGTFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG5cXHJcXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlIHtcXHJcXG5cXHJcXG5cXHQmX19iYW5uZXIudXNlZnVsIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3BhbmVsLmhlbHAge1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogY2FsYygxMDAlIC8gMik7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLWNvbnRlbnQge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcclxcblxcdFxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRENEQ0REO1xcclxcblxcdFxcdFxcdHBhZGRpbmctdG9wOiAyM3B4O1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuaGVscC1jZW50ZXItbGluayB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMjJweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmxhc3QtY2hpbGQge1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGEge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxNHB4O1xcclxcblxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdFxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogIzA2NkVBMjtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyOHB4O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsXCIuamV0LWZvcm0tYnVpbGRlci1wYWdlX19iYW5uZXIudXNlZnVsIHtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RDRENERDtcXG4gIHBhZGRpbmctdG9wOiAyM3B4O1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzAwN0NCQTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDY2RUEyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbmsgYSAuaGVscC1jZW50ZXItbGluay1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMjhweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbnNwYW5bZGF0YS12LTE0YmFhMjMwXSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcclxuXHRwYWRkaW5nOiAwLjFlbSAwLjNlbTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAwO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9CQTtDQUNBLHlCQUFBO0NBQ0Esb0JBQUE7Q0FDQSx5QkFBQTtDQUNBLGtCQUFBO0NBQ0EsWUFBQTtDQUNBLGVBQUE7Q0FDQSxrQkFBQTtDQUNBLGdCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxpQkFBQTtDQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcblxcdDxzcGFuPnt7IF9fKCAnUHJvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3NwYW4+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmNvbnN0IHsgaTE4biB9ID0gSmV0RkJNaXhpbnM7XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdG5hbWU6ICdJc1BST0ljb24nLFxcclxcblxcdG1peGluczogWyBpMThuIF0sXFxyXFxuXFx0cHJvcHM6IHtcXHJcXG5cXHRcXHRpc0FjdGl2ZToge1xcclxcblxcdFxcdFxcdHR5cGU6IEJvb2xlYW4sXFxyXFxuXFx0XFx0XFx0ZGVmYXVsdDogZmFsc2UsXFxyXFxuXFx0XFx0fSxcXHJcXG5cXHR9LFxcclxcbn07XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG5zcGFuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcclxcblxcdHBhZGRpbmc6IDAuMWVtIDAuM2VtO1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuLnVzZXItam91cm5leS1zZWxlY3Qgc2VsZWN0LmN4LXZ1aS1zZWxlY3Qge1xyXG5cdHBhZGRpbmc6IDZweCAyNHB4IDZweCAxMnB4O1xufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJIQTtDQUNBLDBCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcblxcdDxkaXY+XFxyXFxuXFx0XFx0PGN4LXZ1aS1zd2l0Y2hlclxcclxcblxcdFxcdFxcdG5hbWU9XFxcImVuYWJsZV91c2VyX2pvdXJuZXlcXFwiXFxyXFxuXFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLmVuYWJsZV91c2VyX2pvdXJuZXkgPyBgJHtsYWJlbC5lbmFibGVfdXNlcl9qb3VybmV5fSAobG9hZGluZy4uLilgIDogbGFiZWwuZW5hYmxlX3VzZXJfam91cm5leVxcXCJcXHJcXG5cXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuZW5hYmxlX3VzZXJfam91cm5leVxcXCJcXHJcXG5cXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxyXFxuXFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZW5hYmxlX3VzZXJfam91cm5leScgKSA/IHN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leSA6IGZhbHNlXFxcIlxcclxcblxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nXFxcIlxcclxcblxcdFxcdFxcdEBpbnB1dD1cXFwiY2hhbmdlVmFsKCAnZW5hYmxlX3VzZXJfam91cm5leScsICRldmVudCApXFxcIlxcclxcblxcdFxcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cXHJcXG5cXHJcXG5cXHRcXHQ8dGVtcGxhdGUgdi1pZj1cXFwic3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5XFxcIj5cXHJcXG5cXHRcXHRcXHQ8Y3gtdnVpLXNlbGVjdFxcclxcblxcdFxcdFxcdFxcdG5hbWU9XFxcInN0b3JhZ2VfdHlwZVxcXCJcXHJcXG5cXHRcXHRcXHRcXHRjbGFzcz1cXFwidXNlci1qb3VybmV5LXNlbGVjdFxcXCJcXHJcXG5cXHRcXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuc3RvcmFnZV90eXBlID8gYCR7bGFiZWwuc3RvcmFnZV90eXBlfSAobG9hZGluZy4uLilgIDogbGFiZWwuc3RvcmFnZV90eXBlXFxcIlxcclxcblxcdFxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5zdG9yYWdlX3R5cGVcXFwiXFxyXFxuXFx0XFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcclxcblxcdFxcdFxcdFxcdDpvcHRpb25zLWxpc3Q9XFxcIltcXHJcXG5cXHRcXHRcXHRcXHRcXHR7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU6ICdsb2NhbCcsXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw6ICdMb2NhbCBTdG9yYWdlJ1xcclxcblxcdFxcdFxcdFxcdFxcdH0sXFxyXFxuXFx0XFx0XFx0XFx0XFx0e1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlOiAnc2Vzc2lvbicsXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw6ICdTZXNzaW9uIFN0b3JhZ2UnXFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdF1cXFwiXFxyXFxuXFx0XFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnc3RvcmFnZV90eXBlJyApID8gc3RvcmFnZS5zdG9yYWdlX3R5cGUgOiAnbG9jYWwnXFxcIlxcclxcblxcdFxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiIXN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leSB8fCBpc0xvYWRpbmdcXFwiXFxyXFxuXFx0XFx0XFx0XFx0QGlucHV0PVxcXCJjaGFuZ2VWYWwoICdzdG9yYWdlX3R5cGUnLCAkZXZlbnQgKVxcXCJcXHJcXG5cXHRcXHRcXHQ+PC9jeC12dWktc2VsZWN0PlxcclxcblxcdFxcdFxcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXIgPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImN4LXZ1aS1jb21wb25lbnRfX2xhYmVsXFxcIj5QbGVhc2Ugbm90ZSE8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2PjxiPlNlc3Npb24gU3RvcmFnZTo8L2I+IFRoZSBpbmZvcm1hdGlvbiBpcyBrZXB0IG9ubHkgd2hpbGUgdGhpcyB0YWIgb3Igd2luZG93IGlzIG9wZW4uIFJlbG9hZGluZyB0aGUgcGFnZSBpcyBmaW5lLCBidXQgYXMgc29vbiBhcyB5b3UgY2xvc2UgdGhlIHRhYiwgdGhlIGRhdGEgZGlzYXBwZWFycy4gT3RoZXIgdGFicyBvciB3aW5kb3dzIG9mIHRoZSBzaXRlIGNhbuKAmXQgc2VlIGl0LiBZb3UgY2FuIHN0aWxsIGdldCBpdCBiYWNrIGJ5IHByZXNzaW5nIEN0cmzigK8r4oCvU2hpZnTigK8r4oCvVCAo4oCcUmVvcGVu4oCvQ2xvc2Vk4oCvVGFi4oCdKTwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXY+PGI+TG9jYWwgU3RvcmFnZTo8L2I+IFRoZSBpbmZvcm1hdGlvbiBzdGF5cyBtdWNoIGxvbmdlcuKAlGV2ZXJ5IHRhYiBvciB3aW5kb3cgb2YgdGhpcyBzaXRlIGNhbiB1c2UgaXQsIGFuZCBpdCByZW1haW5zIGV2ZW4gYWZ0ZXIgeW91IGNsb3NlIGFuZCByZW9wZW4gdGhlIGJyb3dzZXIsIHVudGlsIHlvdSBjbGVhciBpdCB5b3Vyc2VsZi48L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcj5cXHJcXG5cXHJcXG5cXHRcXHRcXHQ8Y3gtdnVpLXNlbGVjdFxcclxcblxcdFxcdFxcdFxcdG5hbWU9XFxcImNsZWFyX2FmdGVyX3N1Ym1pdFxcXCJcXHJcXG5cXHRcXHRcXHRcXHRjbGFzcz1cXFwidXNlci1qb3VybmV5LXNlbGVjdFxcXCJcXHJcXG5cXHRcXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuY2xlYXJfYWZ0ZXJfc3VibWl0ID8gYCR7bGFiZWwuY2xlYXJfYWZ0ZXJfc3VibWl0fSAobG9hZGluZy4uLilgIDogbGFiZWwuY2xlYXJfYWZ0ZXJfc3VibWl0XFxcIlxcclxcblxcdFxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5jbGVhcl9hZnRlcl9zdWJtaXRcXFwiXFxyXFxuXFx0XFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcclxcblxcdFxcdFxcdFxcdDpvcHRpb25zLWxpc3Q9XFxcIltcXHJcXG5cXHRcXHRcXHRcXHRcXHR7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU6ICdhbHdheXMnLFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsOiAnQWZ0ZXIgYW55IHN1Ym1pdCAoc3VjY2VzcyBvciBmYWlsdXJlKSdcXHJcXG5cXHRcXHRcXHRcXHRcXHR9LFxcclxcblxcdFxcdFxcdFxcdFxcdHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ3N1Y2Nlc3MnLFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsOiAnQWZ0ZXIgc3VjY2Vzc2Z1bCBzdWJtaXQgb25seSdcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XVxcXCJcXHJcXG5cXHRcXHRcXHRcXHQ6dmFsdWU9XFxcInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdjbGVhcl9hZnRlcl9zdWJtaXQnICkgPyBzdG9yYWdlLmNsZWFyX2FmdGVyX3N1Ym1pdCA6ICdzdWNjZXNzJ1xcXCJcXHJcXG5cXHRcXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcIiFzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgfHwgaXNMb2FkaW5nXFxcIlxcclxcblxcdFxcdFxcdFxcdEBpbnB1dD1cXFwiY2hhbmdlVmFsKCAnY2xlYXJfYWZ0ZXJfc3VibWl0JywgJGV2ZW50IClcXFwiXFxyXFxuXFx0XFx0XFx0PjwvY3gtdnVpLXNlbGVjdD5cXHJcXG5cXHRcXHQ8L3RlbXBsYXRlPlxcclxcblxcdDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG5cXHJcXG5pbXBvcnQge1xcclxcblxcdGhlbHAsXFxyXFxuXFx0bGFiZWwsXFxyXFxufSBmcm9tICcuL3NvdXJjZSc7XFxyXFxuXFxyXFxuY29uc3QgeyBTYXZlVGFiQnlBamF4LCBpMThuIH0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XFxyXFxuXFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcblxcdG5hbWU6ICd1c2VyLWpvdXJuZXktdGFiJyxcXHJcXG5cXHRwcm9wczoge1xcclxcblxcdFxcdGluY29taW5nOiB7XFxyXFxuXFx0XFx0XFx0dHlwZTogT2JqZWN0LFxcclxcblxcdFxcdFxcdGRlZmF1bHQ6ICgpID0+ICh7fSksXFxyXFxuXFx0XFx0fSxcXHJcXG5cXHR9LFxcclxcblxcdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBpMThuIF0sXFxyXFxuXFx0ZGF0YSgpIHtcXHJcXG5cXHRcXHRyZXR1cm4ge1xcclxcblxcdFxcdFxcdGxhYmVsLCBoZWxwLFxcclxcblxcdFxcdFxcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcXHJcXG5cXHRcXHRcXHRpc0xvYWRpbmc6IGZhbHNlLFxcclxcblxcdFxcdFxcdGxvYWRpbmc6IHt9LFxcclxcblxcdFxcdH07XFxyXFxuXFx0fSxcXHJcXG5cXHRjcmVhdGVkKCkge1xcclxcblxcdFxcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCB0aGlzLm9uQ2hhbmdlU3RhdGUuYmluZCggdGhpcyApICk7XFxyXFxuXFx0fSxcXHJcXG5cXHRtZXRob2RzOiB7XFxyXFxuXFx0XFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcXHJcXG5cXHRcXHRcXHRyZXR1cm4ge1xcclxcblxcdFxcdFxcdFxcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXFxyXFxuXFx0XFx0XFx0fTtcXHJcXG5cXHRcXHR9LFxcclxcblxcdFxcdG9uQ2hhbmdlU3RhdGUoIHsgc3RhdGUsIHNsdWcgfSApIHtcXHJcXG5cXHRcXHRcXHRpZiAoICd1c2VyLWpvdXJuZXktdGFiJyAhPT0gc2x1ZyApIHtcXHJcXG5cXHRcXHRcXHRcXHRyZXR1cm47XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGlmICggJ2VuZCcgPT09IHN0YXRlICkge1xcclxcblxcdFxcdFxcdFxcdHRoaXMubG9hZGluZyA9IHt9O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xcclxcblxcdFxcdH0sXFxyXFxuXFx0XFx0Y2hhbmdlVmFsKCBuYW1lLCB2YWx1ZSApIHtcXHJcXG5cXHRcXHRcXHRpZiAoIHRoaXMuaXNMb2FkaW5nICkge1xcclxcblxcdFxcdFxcdFxcdHJldHVybjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsIG5hbWUsIHZhbHVlICk7XFxyXFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsIG5hbWUsIHRydWUgKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApO1xcclxcblxcdFxcdH0sXFxyXFxuXFx0fSxcXHJcXG59O1xcclxcblxcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZT5cXHJcXG4udXNlci1qb3VybmV5LXNlbGVjdCBzZWxlY3QuY3gtdnVpLXNlbGVjdCB7XFxyXFxuXFx0cGFkZGluZzogNnB4IDI0cHggNnB4IDEycHg7XFxyXFxufVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc3BhbicsW192bS5fdihfdm0uX3MoX3ZtLl9fKCAnUHJvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJmdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdGb3JtQnVpbGRlclBhZ2UnLHthdHRyczp7XCJ0aXRsZVwiOl92bS5fXyggJ0pldEZvcm1CdWlsZGVyIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICl9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWNvbnRlbnRcIn0sW19jKCdBbGVydHNMaXN0JyksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItY29udGVudC1tYWluXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjeC12dWktcGFuZWxcIn0sW19jKCdDeFZ1aVRhYnMnLHthdHRyczp7XCJpbi1wYW5lbFwiOmZhbHNlLFwidmFsdWVcIjpfdm0uYWN0aXZlVGFiU2x1ZyxcImxheW91dFwiOlwidmVydGljYWxcIn0sb246e1wiaW5wdXRcIjpfdm0ub25DaGFuZ2VBY3RpdmVUYWJ9fSxfdm0uX2woKF92bS50YWJzKSxmdW5jdGlvbihyZWYsaW5kZXgpe1xudmFyIGRpc3BsYXlCdXR0b24gPSByZWYuZGlzcGxheUJ1dHRvbjsgaWYgKCBkaXNwbGF5QnV0dG9uID09PSB2b2lkIDAgKSBkaXNwbGF5QnV0dG9uID0gdHJ1ZTtcbnZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoIHJlZiwgW1wiZGlzcGxheUJ1dHRvblwiXSApO1xudmFyIHRhYiA9IHJlc3Q7XG5yZXR1cm4gX2MoJ0N4VnVpVGFic1BhbmVsJyx7a2V5OnRhYi5jb21wb25lbnQubmFtZSxhdHRyczp7XCJuYW1lXCI6dGFiLmNvbXBvbmVudC5uYW1lLFwibGFiZWxcIjp0YWIudGl0bGUsXCJkaXNhYmxlZFwiOnRhYi5kaXNhYmxlZCxcImljb25cIjp0YWIuaWNvbn0sc2NvcGVkU2xvdHM6X3ZtLl91KFsodGFiLmNvbXBvbmVudC5yZW5kZXIpP3trZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdrZWVwLWFsaXZlJyxbX2ModGFiLmNvbXBvbmVudCx7cmVmOlwidGFiQ29tcG9uZW50c1wiLHJlZkluRm9yOnRydWUsdGFnOlwiY29tcG9uZW50XCIsYXR0cnM6e1wiaW5jb21pbmdcIjpfdm0uZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApLFwiaW5uZXItc2x1Z3NcIjpfdm0uYWN0aXZlVGFiSW5uZXJTbHVncyB8fCBbXX19KV0sMSksX3ZtLl92KFwiIFwiKSwoZGlzcGxheUJ1dHRvbik/X2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImFjY2VudFwiLFwibG9hZGluZ1wiOl92bS5sb2FkaW5nVGFiWyB0YWIuY29tcG9uZW50Lm5hbWUgXX0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25TYXZlVGFiKCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lICl9fSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJsYWJlbFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygnc3BhbicsW192bS5fdihcIlNhdmVcIildKV19LHByb3h5OnRydWV9XSxudWxsLHRydWUpfSk6X3ZtLl9lKCldfSxwcm94eTp0cnVlfTpudWxsXSxudWxsLHRydWUpfSl9KSwxKV0sMSldKSxfdm0uX3YoXCIgXCIpLF9jKCdTZXR0aW5nc1NpZGVCYXInKV0sMSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLFtfYygnU2ltcGxlV3JhcHBlckNvbXBvbmVudCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcImZyaWVuZGx5X2tleVwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJsYWJlbFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfdm0uX3YoX3ZtLl9zKF92bS5sYWJlbC5rZXkpKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZXNjcmlwdGlvblwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oXG5cdFx0XHRcdCdJdCBjYW4gYmUgZm91bmQgb24gdGhlIHBhZ2UgbGlzdGluZyB5b3VyIEFwcGxpY2F0aW9ucy4gT3IgZm9sbG93IHRoaXMnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdCkgKyAnICcpK1wiXFxuXFx0XFx0XFx0XFx0XCIpLF9jKCdFeHRlcm5hbExpbmsnLHthdHRyczp7XCJocmVmXCI6XCJodHRwczovL2RvY3MuZnJpZW5kbHljYXB0Y2hhLmNvbS8jL2luc3RhbGxhdGlvbj9pZD1fMS1nZW5lcmF0aW5nLWEtc2l0ZWtleVwifX0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oICdndWlkZScsICdqZXQtZm9ybS1idWlsZGVyJyApKStcIlxcblxcdFxcdFxcdFxcdFwiKV0pXSwxKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdpbnB1dCcse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOihfdm0uc3RvcmFnZS5rZXkpLGV4cHJlc3Npb246XCJzdG9yYWdlLmtleVwifV0sc3RhdGljQ2xhc3M6XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIixhdHRyczp7XCJpZFwiOlwiZnJpZW5kbHlfa2V5XCIsXCJ0eXBlXCI6XCJ0ZXh0XCJ9LGRvbVByb3BzOntcInZhbHVlXCI6KF92bS5zdG9yYWdlLmtleSl9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZyl7IHJldHVybjsgfV92bS4kc2V0KF92bS5zdG9yYWdlLCBcImtleVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKX19fSldfSxwcm94eTp0cnVlfV0pfSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwiZnJpZW5kbHlfc2VjcmV0XCIsXCJsYWJlbFwiOl92bS5sYWJlbC5zZWNyZXQsXCJkZXNjcmlwdGlvblwiOl92bS5fXyhcblx0XHRcdCdJdCBjYW4gYmUgZm91bmQgb24gdGhlIHBhZ2UgbGlzdGluZyB5b3VyIEFQSSBrZXlzLicsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHQpLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLnNlY3JldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcInNlY3JldFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5zZWNyZXRcIn19KV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLmtleSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5rZXkpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJrZXlcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uua2V5XCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwuc2VjcmV0LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLnNlY3JldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcInNlY3JldFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5zZWNyZXRcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJ0eXBlXCI6XCJudW1iZXJcIixcIm1pblwiOjAsXCJtYXhcIjoxLFwic3RlcFwiOjAuMSxcImxhYmVsXCI6X3ZtLmxhYmVsLnRocmVzaG9sZCxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAudGhyZXNob2xkLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLnRocmVzaG9sZCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcInRocmVzaG9sZFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS50aHJlc2hvbGRcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJmYi1kZXNjcmlwdGlvblwifSxbX3ZtLl92KF92bS5fcyhfdm0uaGVscC5hcGlQcmVmKStcIiBcIiksX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6X3ZtLmhlbHAuYXBpTGluayxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX3ZtLl92KF92bS5fcyhfdm0uaGVscC5hcGlMaW5rTGFiZWwpKV0pXSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdTaW1wbGVXcmFwcGVyQ29tcG9uZW50Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwiaGNhcHRjaGFfa2V5XCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImxhYmVsXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW192bS5fdihfdm0uX3MoX3ZtLmxhYmVsLmtleSkpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlc2NyaXB0aW9uXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJmYi1kZXNjcmlwdGlvblwifSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyhcblx0XHRcdFx0XHQnWW91IGNhbiBmaW5kIGl0IG9uIHRoaXMgcGFnZSBpbiB0aGUgZmlyc3QgY29sdW1uIG9mIFNpdGVrZXkuJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdFx0KSArICcgJykrXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiksX2MoJ0V4dGVybmFsTGluaycse2F0dHJzOntcImhyZWZcIjpcImh0dHBzOi8vZGFzaGJvYXJkLmhjYXB0Y2hhLmNvbS9zaXRlc1wifX0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oICdHbyB0byB0aGUgZGFzaGJvYXJkIG9mIHNpdGVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpK1wiXFxuXFx0XFx0XFx0XFx0XFx0XCIpXSldLDEpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlZmF1bHRcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ2lucHV0Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6KF92bS5zdG9yYWdlLmtleSksZXhwcmVzc2lvbjpcInN0b3JhZ2Uua2V5XCJ9XSxzdGF0aWNDbGFzczpcImN4LXZ1aS1pbnB1dCBzaXplLWZ1bGx3aWR0aFwiLGF0dHJzOntcImlkXCI6XCJoY2FwdGNoYV9rZXlcIixcInR5cGVcIjpcInRleHRcIn0sZG9tUHJvcHM6e1widmFsdWVcIjooX3ZtLnN0b3JhZ2Uua2V5KX0sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe2lmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXsgcmV0dXJuOyB9X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwia2V5XCIsICRldmVudC50YXJnZXQudmFsdWUpfX19KV19LHByb3h5OnRydWV9XSl9KSxfdm0uX3YoXCIgXCIpLF9jKCdTaW1wbGVXcmFwcGVyQ29tcG9uZW50Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwiaGNhcHRjaGFfc2VjcmV0XCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImxhYmVsXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW192bS5fdihfdm0uX3MoX3ZtLmxhYmVsLnNlY3JldCkpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlc2NyaXB0aW9uXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJmYi1kZXNjcmlwdGlvblwifSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyhcblx0XHRcdFx0XHRcIllvdSBjYW4gZmluZCBpdCBvbiB0aGUgc2V0dGluZ3MgcGFnZSxcXG50aGlzIHdpbGwgYmUgdGhlIGZpcnN0IGZpZWxkLlwiLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHQpICsgJyAnKStcIlxcblxcdFxcdFxcdFxcdFxcdFwiKSxfYygnRXh0ZXJuYWxMaW5rJyx7YXR0cnM6e1wiaHJlZlwiOlwiaHR0cHM6Ly9kYXNoYm9hcmQuaGNhcHRjaGEuY29tL3NldHRpbmdzXCJ9fSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyggJ0dvIHRvIHRoZSBTZXR0aW5ncyBwYWdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpK1wiXFxuXFx0XFx0XFx0XFx0XFx0XCIpXSldLDEpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlZmF1bHRcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ2lucHV0Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6KF92bS5zdG9yYWdlLnNlY3JldCksZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9XSxzdGF0aWNDbGFzczpcImN4LXZ1aS1pbnB1dCBzaXplLWZ1bGx3aWR0aFwiLGF0dHJzOntcImlkXCI6XCJoY2FwdGNoYV9zZWNyZXRcIixcInR5cGVcIjpcInRleHRcIn0sZG9tUHJvcHM6e1widmFsdWVcIjooX3ZtLnN0b3JhZ2Uuc2VjcmV0KX0sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe2lmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXsgcmV0dXJuOyB9X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwic2VjcmV0XCIsICRldmVudC50YXJnZXQudmFsdWUpfX19KV19LHByb3h5OnRydWV9XSl9KV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcInR1cm5zdGlsZV9rZXlcIixcImxhYmVsXCI6X3ZtLmxhYmVsLmtleSxcImRlc2NyaXB0aW9uXCI6X3ZtLl9fKFxuXHRcdFx0J1JlYWQgdGhlIGhpbnQgdG8gdGhlIFNlY3JldCBLZXkgZmllbGQnLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0KSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5rZXkpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJrZXlcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uua2V5XCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwidHVybnN0aWxlX3NlY3JldFwiLFwibGFiZWxcIjpfdm0ubGFiZWwuc2VjcmV0LFwiZGVzY3JpcHRpb25cIjpfdm0uX18oXG5cdFx0XHQnWW91IGNhbiBmaW5kIGJvdGgga2V5cyBvbiB5b3VyIFR1cm5zdGlsZSBTaXRlIHNldHRpbmdzIHBhZ2UnLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0KSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9fSksX3ZtLl92KFwiIFwiKSxfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihcIlxcblxcdFxcdFwiK192bS5fcyhfdm0uX18oICdEaWRuXFwndCBmaW5kIGl0PyBIZXJlIGlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcpK1wiXFxuXFx0XFx0XCIpLF9jKCdFeHRlcm5hbExpbmsnLHthdHRyczp7XCJocmVmXCI6XCJodHRwczovL2RldmVsb3BlcnMuY2xvdWRmbGFyZS5jb20vdHVybnN0aWxlL2dldC1zdGFydGVkLyNnZXQtYS1zaXRla2V5LWFuZC1zZWNyZXQta2V5XCJ9fSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyggJ2EgbW9yZSBkZXRhaWxlZCBkZXNjcmlwdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApKStcIlxcblxcdFxcdFwiKV0pXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLmNsaWVudF9pZCxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5jbGllbnRfaWQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJjbGllbnRfaWRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2UuY2xpZW50X2lkXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwuc2VjcmV0LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLnNlY3JldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcInNlY3JldFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5zZWNyZXRcIn19KV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdTaWRlQmFyQm94ZXMnLHtzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJpY29uLWhlbHBcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ3N2Zycse2F0dHJzOntcIndpZHRoXCI6XCIxNFwiLFwiaGVpZ2h0XCI6XCIyMVwiLFwidmlld0JveFwiOlwiMCAwIDE0IDIxXCIsXCJmaWxsXCI6XCJub25lXCIsXCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtfYygncGF0aCcse2F0dHJzOntcImRcIjpcIk01LjI1IDIxSDguNzVWMTcuNUg1LjI1VjIxWk03IDBDMy4xMzI1IDAgMCAzLjEzMjUgMCA3SDMuNUMzLjUgNS4wNzUgNS4wNzUgMy41IDcgMy41QzguOTI1IDMuNSAxMC41IDUuMDc1IDEwLjUgN0MxMC41IDEwLjUgNS4yNSAxMC4wNjI1IDUuMjUgMTUuNzVIOC43NUM4Ljc1IDExLjgxMjUgMTQgMTEuMzc1IDE0IDdDMTQgMy4xMzI1IDEwLjg2NzUgMCA3IDBaXCIsXCJmaWxsXCI6XCIjN0I3RTgxXCJ9fSldKV19LHByb3h5OnRydWV9LHtrZXk6XCJjb250ZW50LWhlbHBcIixmbjpmdW5jdGlvbihib3gpe3JldHVybiBbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGlua1wifSxbX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6Ym94Lmxpbmtfa25vd2xlZGdlLFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWljb25cIn0sW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTRcIixcImhlaWdodFwiOlwiMTZcIixcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNMTMuNDU4IDExLjI1NTJMMTMuNDU4IDEuNDExNUMxMy40NTggMS4wMzA2NCAxMy4xMzU3IDAuNzA4Mzc0IDEyLjc1NDkgMC43MDgzNzRMMy4xNDU1MSAwLjcwODM3NEMxLjU5Mjc3IDAuNzA4Mzc0IDAuMzMzMDA4IDEuOTY4MTQgMC4zMzMwMDggMy41MjA4N0wwLjMzMzAwOCAxMi44OTU5QzAuMzMzMDA4IDE0LjQ0ODYgMS41OTI3NyAxNS43MDg0IDMuMTQ1NTEgMTUuNzA4NEwxMi43NTQ5IDE1LjcwODRDMTMuMTM1NyAxNS43MDg0IDEzLjQ1OCAxNS40MTU0IDEzLjQ1OCAxNS4wMDUyTDEzLjQ1OCAxNC41MzY1QzEzLjQ1OCAxNC4zMzE0IDEzLjM0MDggMTQuMTI2MyAxMy4xOTQzIDE0LjAwOTJDMTMuMDQ3OSAxMy41NDA0IDEzLjA0NzkgMTIuMjUxMyAxMy4xOTQzIDExLjgxMTlDMTMuMzQwOCAxMS42OTQ3IDEzLjQ1OCAxMS40ODk2IDEzLjQ1OCAxMS4yNTUyWk00LjA4MzAxIDQuNjM0MTZDNC4wODMwMSA0LjU0NjI2IDQuMTQxNiA0LjQ1ODM3IDQuMjU4NzkgNC40NTgzN0wxMC40Njk3IDQuNDU4MzdDMTAuNTU3NiA0LjQ1ODM3IDEwLjY0NTUgNC41NDYyNiAxMC42NDU1IDQuNjM0MTZMMTAuNjQ1NSA1LjIyMDA5QzEwLjY0NTUgNS4zMzcyOCAxMC41NTc2IDUuMzk1ODcgMTAuNDY5NyA1LjM5NTg3TDQuMjU4NzkgNS4zOTU4N0M0LjE0MTYgNS4zOTU4NyA0LjA4MzAxIDUuMzM3MjggNC4wODMwMSA1LjIyMDA5TDQuMDgzMDEgNC42MzQxNlpNNC4wODMwMSA2LjUwOTE2QzQuMDgzMDEgNi40MjEyNyA0LjE0MTYgNi4zMzMzNyA0LjI1ODc5IDYuMzMzMzdMMTAuNDY5NyA2LjMzMzM3QzEwLjU1NzYgNi4zMzMzNyAxMC42NDU1IDYuNDIxMjcgMTAuNjQ1NSA2LjUwOTE2TDEwLjY0NTUgNy4wOTUwOUMxMC42NDU1IDcuMjEyMjggMTAuNTU3NiA3LjI3MDg3IDEwLjQ2OTcgNy4yNzA4N0w0LjI1ODc5IDcuMjcwODdDNC4xNDE2IDcuMjcwODcgNC4wODMwMSA3LjIxMjI4IDQuMDgzMDEgNy4wOTUwOUw0LjA4MzAxIDYuNTA5MTZaTTExLjQ5NTEgMTMuODMzNEwzLjE0NTUxIDEzLjgzMzRDMi42MTgxNiAxMy44MzM0IDIuMjA4MDEgMTMuNDIzMiAyLjIwODAxIDEyLjg5NTlDMi4yMDgwMSAxMi4zOTc4IDIuNjE4MTYgMTEuOTU4NCAzLjE0NTUxIDExLjk1ODRMMTEuNDk1MSAxMS45NTg0QzExLjQzNjUgMTIuNDg1NyAxMS40MzY1IDEzLjMzNTMgMTEuNDk1MSAxMy44MzM0WlwiLFwiZmlsbFwiOlwiIzAwN0NCQVwifX0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIn0sW192bS5fdihfdm0uX3MoYm94LmxhYmVsX2tub3dsZWRnZSkpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGlua1wifSxbX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6Ym94LmxpbmtfY29tbXVuaXR5LFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWljb25cIn0sW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTZcIixcImhlaWdodFwiOlwiMTZcIixcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNMTUuNTkxMyA4LjA0NTY0QzE1LjU5MTMgMy44NzcyOCAxMi4yMTQgMC41IDguMDQ1NjQgMC41QzMuODc3MjggMC41IDAuNSAzLjg3NzI4IDAuNSA4LjA0NTY0QzAuNSAxMS44MTg1IDMuMjM4MzQgMTQuOTUyMyA2Ljg1OTAzIDE1LjVMNi44NTkwMyAxMC4yMzYzTDQuOTQyMTkgMTAuMjM2M0w0Ljk0MjE5IDguMDQ1NjRMNi44NTkwMyA4LjA0NTY0TDYuODU5MDMgNi40MDI2NEM2Ljg1OTAzIDQuNTE2MjMgNy45ODQ3OSAzLjQ1MTMyIDkuNjg4NjQgMy40NTEzMkMxMC41NDA2IDMuNDUxMzIgMTEuMzkyNSAzLjYwMzQ1IDExLjM5MjUgMy42MDM0NUwxMS4zOTI1IDUuNDU5NDNMMTAuNDQ5MyA1LjQ1OTQzQzkuNTA2MDkgNS40NTk0MyA5LjIwMTgzIDYuMDM3NTMgOS4yMDE4MyA2LjY0NjA0TDkuMjAxODMgOC4wNDU2NEwxMS4zMDEyIDguMDQ1NjRMMTAuOTY2NSAxMC4yMzYzTDkuMjAxODMgMTAuMjM2M0w5LjIwMTgzIDE1LjVDMTIuODIyNSAxNC45NTIzIDE1LjU5MTMgMTEuODE4NSAxNS41OTEzIDguMDQ1NjRaXCIsXCJmaWxsXCI6XCIjMDA3Q0JBXCJ9fSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1sYWJlbFwifSxbX3ZtLl92KF92bS5fcyhib3gubGFiZWxfY29tbXVuaXR5KSldKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rXCJ9LFtfYygnYScse2F0dHJzOntcImhyZWZcIjpib3gubGlua19zdXBwb3J0LFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWljb25cIn0sW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTVcIixcImhlaWdodFwiOlwiMThcIixcInZpZXdCb3hcIjpcIjAgMCAxNSAxOFwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNNy41ODMzMyAwLjY2NjY4N0MzLjY3NSAwLjY2NjY4NyAwLjUgMy44NDE2OSAwLjUgNy43NTAwMkMwLjUgMTEuNjU4NCAzLjY3NSAxNC44MzM0IDcuNTgzMzMgMTQuODMzNEg4VjE3LjMzMzRDMTIuMDUgMTUuMzgzNCAxNC42NjY3IDExLjUgMTQuNjY2NyA3Ljc1MDAyQzE0LjY2NjcgMy44NDE2OSAxMS40OTE3IDAuNjY2Njg3IDcuNTgzMzMgMC42NjY2ODdaTTguNDE2NjcgMTIuNzVINi43NVYxMS4wODM0SDguNDE2NjdWMTIuNzVaTTguNDE2NjcgOS44MzMzNUg2Ljc1QzYuNzUgNy4xMjUwMiA5LjI1IDcuMzMzMzUgOS4yNSA1LjY2NjY5QzkuMjUgNC43NTAwMiA4LjUgNC4wMDAwMiA3LjU4MzMzIDQuMDAwMDJDNi42NjY2NyA0LjAwMDAyIDUuOTE2NjcgNC43NTAwMiA1LjkxNjY3IDUuNjY2NjlINC4yNUM0LjI1IDMuODI1MDIgNS43NDE2NyAyLjMzMzM1IDcuNTgzMzMgMi4zMzMzNUM5LjQyNSAyLjMzMzM1IDEwLjkxNjcgMy44MjUwMiAxMC45MTY3IDUuNjY2NjlDMTAuOTE2NyA3Ljc1MDAyIDguNDE2NjcgNy45NTgzNSA4LjQxNjY3IDkuODMzMzVaXCIsXCJmaWxsXCI6XCIjMDA3Q0JBXCJ9fSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1sYWJlbFwifSxbX3ZtLl92KF92bS5fcyhib3gubGFiZWxfc3VwcG9ydCkpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGlua1wifSxbX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6Ym94LmxpbmtfZ2l0LFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWljb25cIn0sW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTZcIixcImhlaWdodFwiOlwiMTZcIixcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJmaWxsLXJ1bGVcIjpcImV2ZW5vZGRcIixcImNsaXAtcnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcuOTc2IDBDNS44NjA3MSAwLjAwMDI2NTE1NiAzLjgzMjE0IDAuODQwNjc2IDIuMzM2NDEgMi4zMzY0MUMwLjg0MDY3NiAzLjgzMjE0IDAuMDAwMjY1MTU2IDUuODYwNzEgMCA3Ljk3NkMwIDExLjQ5OCAyLjMgMTQuNDgzIDUuNDMxIDE1LjU2QzUuODIzIDE1LjYwOSA1Ljk2OSAxNS4zNjQgNS45NjkgMTUuMTY4VjEzLjc5OEMzLjc2OCAxNC4yODggMy4yNzkgMTIuNzIyIDMuMjc5IDEyLjcyMkMyLjkzNiAxMS43OTIgMi4zOTggMTEuNTQ3IDIuMzk4IDExLjU0N0MxLjY2NCAxMS4wNTggMi40NDYgMTEuMDU4IDIuNDQ2IDExLjA1OEMzLjIyOSAxMS4xMDcgMy42NyAxMS44OSAzLjY3IDExLjg5QzQuNDA0IDEzLjExMyA1LjUyOSAxMi43NyA1Ljk3IDEyLjU3NUM2LjAxOCAxMi4wMzcgNi4yNjMgMTEuNjk1IDYuNDU5IDExLjQ5OUM0LjY5NyAxMS4zMDMgMi44MzggMTAuNjE4IDIuODM4IDcuNTM1QzIuODM4IDYuNjU1IDMuMTMxIDUuOTY5IDMuNjcgNS4zODJDMy42MiA1LjIzNSAzLjMyNyA0LjQwNCAzLjc2OCAzLjMyN0MzLjc2OCAzLjMyNyA0LjQ1MyAzLjEzMSA1Ljk2OSA0LjE1OUM2LjYwNSAzLjk2MyA3LjI5MSAzLjkxNCA3Ljk3NiAzLjkxNEM4LjY2MSAzLjkxNCA5LjM0NiA0LjAxMiA5Ljk4MiA0LjE1OUMxMS40OTkgMy4xMzIgMTIuMTg0IDMuMzI3IDEyLjE4NCAzLjMyN0MxMi42MjQgNC40MDQgMTIuMzMgNS4yMzUgMTIuMjgxIDUuNDMxQzEyLjgxOTkgNi4wMTgwOCAxMy4xMTcxIDYuNzg3MSAxMy4xMTMgNy41ODRDMTMuMTEzIDEwLjY2NyAxMS4yNTMgMTEuMzAzIDkuNDkzIDExLjQ5OUM5Ljc4NiAxMS43NDMgMTAuMDMxIDEyLjIzMiAxMC4wMzEgMTIuOTY2VjE1LjE2OEMxMC4wMzEgMTUuMzY0IDEwLjE3NyAxNS42MDggMTAuNTY5IDE1LjU2QzEyLjE1NSAxNS4wMjQ4IDEzLjUzMjcgMTQuMDA0NiAxNC41MDczIDEyLjY0MzZDMTUuNDgxOCAxMS4yODI3IDE2LjAwNCA5LjY0OTg5IDE2IDcuOTc2QzE1Ljk1MSAzLjU3MiAxMi4zOCAwIDcuOTc2IDBaXCIsXCJmaWxsXCI6XCIjMDA3Q0JBXCJ9fSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1sYWJlbFwifSxbX3ZtLl92KF92bS5fcyhib3gubGFiZWxfZ2l0KSldKV0pXSldfX1dKX0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyxfdm0uX2woKF92bS5jYXB0Y2hhKSxmdW5jdGlvbih0YWIsaW5kZXgpe3JldHVybiBfYygnQ3hWdWlDb2xsYXBzZU1pbmknLHtrZXk6dGFiLmNvbXBvbmVudC5uYW1lLGF0dHJzOntcIndpdGgtcGFuZWxcIjpcIlwiLFwiaWNvblwiOnRhYi5pY29uLFwibGFiZWxcIjpfdm0uZ2V0VGFiVGl0bGUoIHRhYiApLFwiZGlzYWJsZWRcIjp0YWIuZGlzYWJsZWQsXCJpbml0aWFsLWFjdGl2ZVwiOl92bS5pc0FjdGl2ZSggdGFiLmNvbXBvbmVudC5uYW1lICl9LG9uOntcImNoYW5nZVwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vbkNoYW5nZUFjdGl2ZSggJGV2ZW50LCB0YWIuY29tcG9uZW50Lm5hbWUgKX19fSxbX2MoJ2tlZXAtYWxpdmUnLFtfYyh0YWIuY29tcG9uZW50LHtyZWY6XCJjYXB0Y2hhXCIscmVmSW5Gb3I6dHJ1ZSx0YWc6XCJjb21wb25lbnRcIixhdHRyczp7XCJpbmNvbWluZ1wiOl92bS5nZXRJbmNvbWluZ0NhcHRjaGEoIHRhYi5jb21wb25lbnQubmFtZSApfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktYnV0dG9uJyx7YXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJhY2NlbnRcIixcImxvYWRpbmdcIjpfdm0ubG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXX0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25TYXZlR2F0ZXdheSggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApfX19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX3ZtLl92KFwiU2F2ZVwiKV0pXSldLDEpfSksMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5hcGlfa2V5LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwiZGVzY3JpcHRpb25cIjooKF92bS5oZWxwLmFwaVByZWYpICsgXCIgPGEgaHJlZj1cXFwiXCIgKyAoX3ZtLmhlbHAuYXBpTGluaykgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlwiICsgKF92bS5oZWxwLmFwaUxpbmtMYWJlbCkgKyBcIjwvYT5cIiksXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLmFwaV9rZXkpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uYXBpX2tleT0kJHZ9LGV4cHJlc3Npb246XCJhcGlfa2V5XCJ9fSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5hcGlfa2V5LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwiZGVzY3JpcHRpb25cIjooKF92bS5oZWxwLmFwaVByZWYpICsgXCIgPGEgaHJlZj1cXFwiXCIgKyAoX3ZtLmhlbHAuYXBpTGluaykgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlwiICsgKF92bS5oZWxwLmFwaUxpbmtMYWJlbCkgKyBcIjwvYT5cIiksXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLmFwaV9rZXkpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uYXBpX2tleT0kJHZ9LGV4cHJlc3Npb246XCJhcGlfa2V5XCJ9fSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLFtfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiZW5hYmxlX2Rldl9tb2RlXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJsYWJlbFwiOl92bS5sb2FkaW5nLmVuYWJsZV9kZXZfbW9kZSA/ICgoX3ZtLmxhYmVsLmVuYWJsZV9kZXZfbW9kZSkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuZW5hYmxlX2Rldl9tb2RlLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5lbmFibGVfZGV2X21vZGUsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnZW5hYmxlX2Rldl9tb2RlJyApID8gX3ZtLnN0b3JhZ2UuZW5hYmxlX2Rldl9tb2RlIDogZmFsc2UsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2VuYWJsZV9kZXZfbW9kZScsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJjbGVhcl9vbl91bmluc3RhbGxcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuY2xlYXJfb25fdW5pbnN0YWxsID8gKChfdm0ubGFiZWwuY2xlYXJfb25fdW5pbnN0YWxsKSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5jbGVhcl9vbl91bmluc3RhbGwsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmNsZWFyX29uX3VuaW5zdGFsbCxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdjbGVhcl9vbl91bmluc3RhbGwnICkgPyBfdm0uc3RvcmFnZS5jbGVhcl9vbl91bmluc3RhbGwgOiBmYWxzZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnY2xlYXJfb25fdW5pbnN0YWxsJywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcIm5hbWVcIjpcImZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eVwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnLFwibGFiZWxcIjpfdm0ubG9hZGluZy5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHkgPyAoKF92bS5sYWJlbC5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHkpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5LFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2Zvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eScgKSA/IF92bS5zdG9yYWdlLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSA6ICdtYW5hZ2Vfb3B0aW9ucycsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2Zvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eScsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktY29tcG9uZW50LXdyYXBwZXInLHthdHRyczp7XCJsYWJlbFwiOl92bS5fXyggJ0Zvcm0gQWNjZXNzaWJpbGl0eScsICdqZXQtZm9ybS1idWlsZGVyJyApLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdfX0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY3gtdnVpLWlubmVyLXBhbmVsXCJ9LFtfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiZGlzYWJsZV9uZXh0X2J1dHRvblwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5kaXNhYmxlX25leHRfYnV0dG9uID8gKChfdm0ubGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvbikgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvbixcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuZGlzYWJsZV9uZXh0X2J1dHRvbixcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdkaXNhYmxlX25leHRfYnV0dG9uJyApID8gX3ZtLnN0b3JhZ2UuZGlzYWJsZV9uZXh0X2J1dHRvbiA6IHRydWUsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2Rpc2FibGVfbmV4dF9idXR0b24nLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwic2Nyb2xsX29uX25leHRcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuc2Nyb2xsX29uX25leHQgPyAoKF92bS5sYWJlbC5zY3JvbGxfb25fbmV4dCkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuc2Nyb2xsX29uX25leHQsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLnNjcm9sbF9vbl9uZXh0LFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3Njcm9sbF9vbl9uZXh0JyApID8gX3ZtLnN0b3JhZ2Uuc2Nyb2xsX29uX25leHQgOiBmYWxzZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnc2Nyb2xsX29uX25leHQnLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiYXV0b19mb2N1c1wiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5hdXRvX2ZvY3VzID8gKChfdm0ubGFiZWwuYXV0b19mb2N1cykgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuYXV0b19mb2N1cyxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuYXV0b19mb2N1cyxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdhdXRvX2ZvY3VzJyApID8gX3ZtLnN0b3JhZ2UuYXV0b19mb2N1cyA6IGZhbHNlLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdhdXRvX2ZvY3VzJywgJGV2ZW50ICl9fX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktY29tcG9uZW50LXdyYXBwZXInLHthdHRyczp7XCJsYWJlbFwiOl92bS5fXyggJ0Zvcm0gUmVxdWVzdCBBcmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibmFtZVwiOlwiZ2ZiX3JlcXVlc3RfYXJnc19rZXlcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJyxcImxhYmVsXCI6J1JlcXVlc3Qga2V5JyxcImRlc2NyaXB0aW9uXCI6J1VuaXF1ZSBmb3JtIHBhcmFtZXRlciAoa2V5KScsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnZ2ZiX3JlcXVlc3RfYXJnc19rZXknICkgPyBfdm0uc3RvcmFnZS5nZmJfcmVxdWVzdF9hcmdzX2tleSA6ICcxMTExJyxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnZ2ZiX3JlcXVlc3RfYXJnc19rZXknLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibmFtZVwiOlwiZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZVwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnLFwibGFiZWxcIjonUmVxdWVzdCB2YWx1ZScsXCJkZXNjcmlwdGlvblwiOidVbmlxdWUgZm9ybSBwYXJhbWV0ZXIgKHZhbHVlKScsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScgKSA/IF92bS5zdG9yYWdlLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUgOiAnMjIyMicsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2dmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUnLCAkZXZlbnQgKX19fSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJ1c2VfZ2F0ZXdheXNcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxhYmVsLnVzZV9nYXRld2F5cyxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAudXNlX2dhdGV3YXlzLFwidmFsdWVcIjpfdm0uc3RvcmFnZS51c2VfZ2F0ZXdheXN9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ3VzZV9nYXRld2F5cycsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLChfdm0uc3RvcmFnZS51c2VfZ2F0ZXdheXMpP19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJlbmFibGVfdGVzdF9tb2RlXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmVuYWJsZV90ZXN0X21vZGUsXCJsYWJlbFwiOl92bS5sYWJlbC5lbmFibGVfdGVzdF9tb2RlLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5lbmFibGVfdGVzdF9tb2RlfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdlbmFibGVfdGVzdF9tb2RlJywgJGV2ZW50ICl9fX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5zdG9yYWdlLnVzZV9nYXRld2F5cyk/W19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImN4LXZ1aS1pbm5lci1wYW5lbFwifSxfdm0uX2woKF92bS5nYXRld2F5cyksZnVuY3Rpb24odGFiLGluZGV4KXtyZXR1cm4gX2MoJ0N4VnVpQ29sbGFwc2VNaW5pJyx7a2V5OnRhYi5jb21wb25lbnQubmFtZSxhdHRyczp7XCJ3aXRoLXBhbmVsXCI6XCJcIixcImljb25cIjp0YWIuaWNvbixcImxhYmVsXCI6dGFiLnRpdGxlLFwiZGlzYWJsZWRcIjp0YWIuZGlzYWJsZWQsXCJpbml0aWFsLWFjdGl2ZVwiOl92bS5pc0FjdGl2ZSggdGFiLmNvbXBvbmVudC5uYW1lICl9LG9uOntcImNoYW5nZVwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vbkNoYW5nZUFjdGl2ZSggJGV2ZW50LCB0YWIuY29tcG9uZW50Lm5hbWUgKX19fSxbX2MoJ2tlZXAtYWxpdmUnLFtfYyh0YWIuY29tcG9uZW50LHtyZWY6XCJnYXRld2F5c1wiLHJlZkluRm9yOnRydWUsdGFnOlwiY29tcG9uZW50XCIsYXR0cnM6e1wiaW5jb21pbmdcIjpfdm0uZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktYnV0dG9uJyx7YXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJhY2NlbnRcIixcImxvYWRpbmdcIjpfdm0ubG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXX0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25TYXZlR2F0ZXdheSggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApfX19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX3ZtLl92KFwiU2F2ZVwiKV0pXSldLDEpfSksMSldOl92bS5fZSgpXSwyKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2RpdicsW19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJlbmFibGVfdXNlcl9qb3VybmV5XCIsXCJsYWJlbFwiOl92bS5sb2FkaW5nLmVuYWJsZV91c2VyX2pvdXJuZXkgPyAoKF92bS5sYWJlbC5lbmFibGVfdXNlcl9qb3VybmV5KSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5lbmFibGVfdXNlcl9qb3VybmV5LFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5lbmFibGVfdXNlcl9qb3VybmV5LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2VuYWJsZV91c2VyX2pvdXJuZXknICkgPyBfdm0uc3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5IDogZmFsc2UsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2VuYWJsZV91c2VyX2pvdXJuZXknLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSwoX3ZtLnN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leSk/W19jKCdjeC12dWktc2VsZWN0Jyx7c3RhdGljQ2xhc3M6XCJ1c2VyLWpvdXJuZXktc2VsZWN0XCIsYXR0cnM6e1wibmFtZVwiOlwic3RvcmFnZV90eXBlXCIsXCJsYWJlbFwiOl92bS5sb2FkaW5nLnN0b3JhZ2VfdHlwZSA/ICgoX3ZtLmxhYmVsLnN0b3JhZ2VfdHlwZSkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuc3RvcmFnZV90eXBlLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5zdG9yYWdlX3R5cGUsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJvcHRpb25zLWxpc3RcIjpbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ2xvY2FsJyxcblx0XHRcdFx0XHRsYWJlbDogJ0xvY2FsIFN0b3JhZ2UnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ3Nlc3Npb24nLFxuXHRcdFx0XHRcdGxhYmVsOiAnU2Vzc2lvbiBTdG9yYWdlJ1xuXHRcdFx0XHR9XG5cdFx0XHRdLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3N0b3JhZ2VfdHlwZScgKSA/IF92bS5zdG9yYWdlLnN0b3JhZ2VfdHlwZSA6ICdsb2NhbCcsXCJkaXNhYmxlZFwiOiFfdm0uc3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5IHx8IF92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ3N0b3JhZ2VfdHlwZScsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktY29tcG9uZW50LXdyYXBwZXInLFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjeC12dWktY29tcG9uZW50X19sYWJlbFwifSxbX3ZtLl92KFwiUGxlYXNlIG5vdGUhXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2JyxbX2MoJ2InLFtfdm0uX3YoXCJTZXNzaW9uIFN0b3JhZ2U6XCIpXSksX3ZtLl92KFwiIFRoZSBpbmZvcm1hdGlvbiBpcyBrZXB0IG9ubHkgd2hpbGUgdGhpcyB0YWIgb3Igd2luZG93IGlzIG9wZW4uIFJlbG9hZGluZyB0aGUgcGFnZSBpcyBmaW5lLCBidXQgYXMgc29vbiBhcyB5b3UgY2xvc2UgdGhlIHRhYiwgdGhlIGRhdGEgZGlzYXBwZWFycy4gT3RoZXIgdGFicyBvciB3aW5kb3dzIG9mIHRoZSBzaXRlIGNhbuKAmXQgc2VlIGl0LiBZb3UgY2FuIHN0aWxsIGdldCBpdCBiYWNrIGJ5IHByZXNzaW5nIEN0cmzigK8r4oCvU2hpZnTigK8r4oCvVCAo4oCcUmVvcGVu4oCvQ2xvc2Vk4oCvVGFi4oCdKVwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2RpdicsW19jKCdiJyxbX3ZtLl92KFwiTG9jYWwgU3RvcmFnZTpcIildKSxfdm0uX3YoXCIgVGhlIGluZm9ybWF0aW9uIHN0YXlzIG11Y2ggbG9uZ2Vy4oCUZXZlcnkgdGFiIG9yIHdpbmRvdyBvZiB0aGlzIHNpdGUgY2FuIHVzZSBpdCwgYW5kIGl0IHJlbWFpbnMgZXZlbiBhZnRlciB5b3UgY2xvc2UgYW5kIHJlb3BlbiB0aGUgYnJvd3NlciwgdW50aWwgeW91IGNsZWFyIGl0IHlvdXJzZWxmLlwiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXNlbGVjdCcse3N0YXRpY0NsYXNzOlwidXNlci1qb3VybmV5LXNlbGVjdFwiLGF0dHJzOntcIm5hbWVcIjpcImNsZWFyX2FmdGVyX3N1Ym1pdFwiLFwibGFiZWxcIjpfdm0ubG9hZGluZy5jbGVhcl9hZnRlcl9zdWJtaXQgPyAoKF92bS5sYWJlbC5jbGVhcl9hZnRlcl9zdWJtaXQpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmNsZWFyX2FmdGVyX3N1Ym1pdCxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuY2xlYXJfYWZ0ZXJfc3VibWl0LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwib3B0aW9ucy1saXN0XCI6W1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICdhbHdheXMnLFxuXHRcdFx0XHRcdGxhYmVsOiAnQWZ0ZXIgYW55IHN1Ym1pdCAoc3VjY2VzcyBvciBmYWlsdXJlKSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0bGFiZWw6ICdBZnRlciBzdWNjZXNzZnVsIHN1Ym1pdCBvbmx5J1xuXHRcdFx0XHR9XG5cdFx0XHRdLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2NsZWFyX2FmdGVyX3N1Ym1pdCcgKSA/IF92bS5zdG9yYWdlLmNsZWFyX2FmdGVyX3N1Ym1pdCA6ICdzdWNjZXNzJyxcImRpc2FibGVkXCI6IV92bS5zdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgfHwgX3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnY2xlYXJfYWZ0ZXJfc3VibWl0JywgJGV2ZW50ICl9fX0pXTpfdm0uX2UoKV0sMil9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9XG4gICAgdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbicgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnMgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3ZmUwODVmN1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjQzNTAwZSZsYW5nPXNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjQzNTAwZSZsYW5nPXNjc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI1NGI2NGMmbGFuZz1zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU4MDE0YTExXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyNTRiNjRjJmxhbmc9c2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyNTRiNjRjJmxhbmc9c2Nzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImI3MTBlY2Q4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZmIwYzJmYyZsYW5nPWNzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwMjE1NDYwN1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZiMGMyZmMmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZiMGMyZmMmbGFuZz1jc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNGJhYTIzMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE0YmFhMjMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE0YmFhMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE0YmFhMjMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTRiYWEyMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiNDM1MDBlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YjQzNTAwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YjQzNTAwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YjQzNTAwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjQzNTAwZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRiNDM1MDBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBodWJzcG90IGZyb20gJy4vcHJvQWRkb25zL2h1YnNwb3QnO1xyXG5pbXBvcnQgYWRkcmVzc0F1dG9jb21wbGV0ZSBmcm9tICcuL3Byb0FkZG9ucy9hZGRyZXNzQXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IGNvbnZlcnRraXQgZnJvbSAnLi9wcm9BZGRvbnMvY29udmVydGtpdCc7XHJcbmltcG9ydCBtYWlsZXJsaXRlIGZyb20gJy4vcHJvQWRkb25zL21haWxlcmxpdGUnO1xyXG5pbXBvcnQgbW9vc2VuZCBmcm9tICcuL3Byb0FkZG9ucy9tb29zZW5kJztcclxuaW1wb3J0IHN0cmlwZSBmcm9tICcuL3Byb0dhdGV3YXlzL3N0cmlwZSc7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gd3AuaG9va3M7XHJcblxyXG5jb25zdCBhZGRvbnMgPSBbXHJcblx0YWRkcmVzc0F1dG9jb21wbGV0ZSxcclxuXHRodWJzcG90LFxyXG5cdGNvbnZlcnRraXQsXHJcblx0bWFpbGVybGl0ZSxcclxuXHRtb29zZW5kLFxyXG5dO1xyXG5cclxuY29uc3QgZ2F0ZXdheXMgPSBbXHJcblx0c3RyaXBlXHJcbl07XHJcblxyXG5jb25zdCBnZXRNb2R1bGVzTmFtZXMgPSBtb2R1bGVzID0+IG1vZHVsZXMubWFwKCBpdGVtID0+IChcclxuXHRpdGVtLmNvbXBvbmVudC5uYW1lXHJcbikgKTtcclxuXHJcblxyXG5jb25zdCBydW4gPSAoKSA9PiB7XHJcblx0YWRkRmlsdGVyKCAnamV0LmZiLnJlZ2lzdGVyLnNldHRpbmdzLXBhZ2UudGFicycsICdqZXQtZm9ybS1idWlsZGVyJywgbW9kdWxlcyA9PiB7XHJcblx0XHRjb25zdCBuYW1lcyA9IGdldE1vZHVsZXNOYW1lcyggbW9kdWxlcyApO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGFkZG9uIG9mIGFkZG9ucyApIHtcclxuXHRcdFx0aWYgKCBuYW1lcy5pbmNsdWRlcyggYWRkb24uY29tcG9uZW50Lm5hbWUgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRtb2R1bGVzLnB1c2goIGFkZG9uICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1vZHVsZXM7XHJcblx0fSwgMTAwMCApO1xyXG5cclxuXHRhZGRGaWx0ZXIoICdqZXQuZmIucmVnaXN0ZXIuZ2F0ZXdheXMnLCAnamV0LWZvcm0tYnVpbGRlcicsIG1vZHVsZXMgPT4ge1xyXG5cdFx0Y29uc3QgbmFtZXMgPSBnZXRNb2R1bGVzTmFtZXMoIG1vZHVsZXMgKTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBnYXRld2F5IG9mIGdhdGV3YXlzICkge1xyXG5cdFx0XHRpZiAoIG5hbWVzLmluY2x1ZGVzKCBnYXRld2F5LmNvbXBvbmVudC5uYW1lICkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0bW9kdWxlcy5wdXNoKCBnYXRld2F5ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1vZHVsZXM7XHJcblx0fSwgMTAwMCApO1xyXG59O1xyXG5cclxuaWYgKCAhIHdpbmRvdz8uSmV0RkJQYWdlQ29uZmlnPy5pc19hY3RpdmUgKSB7XHJcblx0cnVuKCk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRmMDMwZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNTRmMDMwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNTRmMDMwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNTRmMDMwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRmMDMwZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA1NGYwMzBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBUYWIgZnJvbSAnLi9mcmllbmRseUNhcHRjaGEudnVlJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRjb21wb25lbnQsXHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsIH07IiwiaW1wb3J0IFRhYiBmcm9tICcuL3JlQ0FQVENIQXYzLnZ1ZSc7XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSBUYWI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50LFxyXG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4Y2ViN2ZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYzOGNlYjdmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYzOGNlYjdmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYzOGNlYjdmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4Y2ViN2ZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MzhjZWI3ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZ29vZ2xlL3JlQ0FQVENIQXYzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHR0aHJlc2hvbGQ6IF9fKCAnU2NvcmUgVGhyZXNob2xkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdHRocmVzaG9sZDogX18oXHJcblx0XHRgSXQgc2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBkZWZhdWx0IDAuNSAoMS4wIGlzIHZlcnkgbGlrZWx5IGEgZ29vZCBpbnRlcmFjdGlvbiwgMC4wIGlzIHZlcnkgbGlrZWx5IGEgYm90KS5gLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInXHJcblx0KSxcclxuXHRhcGlQcmVmOiBfXyggJ1JlZ2lzdGVyIHJlQ0FQVENIQSB2MyBrZXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRhcGlMaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYWRtaW4vY3JlYXRlJ1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDU2N2ZhNFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9oQ2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzQ1NjdmYTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzQ1NjdmYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzQ1NjdmYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDU2N2ZhNFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM0NTY3ZmE0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9oQ2FwdGNoYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IFRhYiBmcm9tICcuL2hDYXB0Y2hhLnZ1ZSc7XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSBUYWI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50LFxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdGtleTogX18oICdTaXRlIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgbGFiZWwgfTsiLCJpbXBvcnQgVGFiIGZyb20gJy4vdHVybnN0aWxlLnZ1ZSc7XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSBUYWI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50LFxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGxhYmVsID0ge1xyXG5cdGtleTogX18oICdTaXRlIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgbGFiZWwgfTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE5ZmZhMzhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWE5ZmZhMzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWE5ZmZhMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWE5ZmZhMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE5ZmZhMzhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YTlmZmEzOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGVmZjgwNGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOGVmZjgwNGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOGVmZjgwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOGVmZjgwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGVmZjgwNGNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4ZWZmODA0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IFRhYiBmcm9tICcuL1BheXBhbFRhYi52dWUnO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHRpdGxlID0gX18oICdQYXlQYWwgR2F0ZXdheSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcclxuY29uc3QgY29tcG9uZW50ID0gVGFiO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0Y2xpZW50X2lkOiBfXyggJ0NsaWVudCBJRCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxufTtcclxuXHJcbmNvbnN0IGhlbHAgPSB7fTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0aXRsZTogX18oICdBZGRyZXNzIEF1dG9jb21wbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNvbXBvbmVudDoge1xyXG5cdFx0bmFtZTogJ2pmYi1hZGRyZXNzLXRhYicsXHJcblx0fSxcclxuXHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRpY29uOiBJc1BST0ljb24sXHJcbn07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0aXRsZTogX18oICdDb252ZXJ0S2l0IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNvbXBvbmVudDoge1xyXG5cdFx0bmFtZTogJ2NvbnZlcnQta2l0LXRhYicsXHJcblx0fSxcclxuXHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRpY29uOiBJc1BST0ljb24sXHJcbn07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0aXRsZTogX18oICdIdWJTcG90IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNvbXBvbmVudDoge1xyXG5cdFx0bmFtZTogJ2h1YnNwb3QnLFxyXG5cdH0sXHJcblx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0aWNvbjogSXNQUk9JY29uLFxyXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dGl0bGU6IF9fKCAnTWFpbGVyTGl0ZSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjb21wb25lbnQ6IHtcclxuXHRcdG5hbWU6ICdtYWlsZXItbGl0ZS10YWInLFxyXG5cdH0sXHJcblx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0aWNvbjogSXNQUk9JY29uLFxyXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dGl0bGU6IF9fKCAnTW9vc2VuZCBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRjb21wb25lbnQ6IHtcclxuXHRcdG5hbWU6ICdtb29zZW5kJyxcclxuXHR9LFxyXG5cdGRpc2FibGVkOiB0cnVlLFxyXG5cdGljb246IElzUFJPSWNvbixcclxufTsiLCJpbXBvcnQgSXNQUk9JY29uIGZyb20gJy4uL0lzUFJPSWNvbic7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHRpdGxlOiBfXyggJ1N0cmlwZSBHYXRld2F5IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNvbXBvbmVudDoge1xyXG5cdFx0bmFtZTogJ3N0cmlwZSdcclxuXHR9LFxyXG5cdGRpc2FibGVkOiB0cnVlLFxyXG5cdGljb246IElzUFJPSWNvbixcclxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjU0YjY0Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjU0YjY0YyZsYW5nPXNjc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDI1NGI2NGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDI1NGI2NGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDI1NGI2NGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI1NGI2NGNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MjU0YjY0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJiMzZlNTVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MmIzNmU1NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MmIzNmU1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MmIzNmU1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJiMzZlNTVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MmIzNmU1NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IENhcHRjaGFUYWIgZnJvbSAnLi9DYXB0Y2hhVGFiLnZ1ZSc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgdGl0bGUgICAgICAgICA9IF9fKCAnQ2FwdGNoYSBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xyXG5jb25zdCBjb21wb25lbnQgICAgID0gQ2FwdGNoYVRhYjtcclxuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcblx0ZGlzcGxheUJ1dHRvbixcclxufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRkYmViYlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDU0ZGJlYmInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDU0ZGJlYmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDU0ZGJlYmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRkYmViYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA1NGRiZWJiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IEdldFJlc3BvbnNlVGFiIGZyb20gJy4vR2V0UmVzcG9uc2VUYWIudnVlJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB0aXRsZSA9IF9fKCAnR2V0UmVzcG9uc2UgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCA9IEdldFJlc3BvbnNlVGFiO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnRcclxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBsYWJlbCA9IHtcclxuXHRhcGlfa2V5OiBfXyggJ0FQSSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTtcclxuXHJcbmNvbnN0IGhlbHAgPSB7XHJcblx0YXBpUHJlZjogX18oICdIb3cgdG8gb2J0YWluIHlvdXIgR2V0UmVzcG9uc2UgQVBJIEtleT8gTW9yZSBpbmZvJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRhcGlMaW5rOiAnaHR0cHM6Ly9hcHAuZ2V0cmVzcG9uc2UuY29tL2FwaSdcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4M2MzZGM5XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkU6XFxcXE9wZW5TZXJ2ZXJcXFxcZG9tYWluc1xcXFxjcm9jby55dXJrby5mbXRcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldGZvcm1idWlsZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc4M2MzZGM5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc4M2MzZGM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc4M2MzZGM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4M2MzZGM5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzgzYzNkYzknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IE1haWxDaGltcFRhYiBmcm9tICcuL01haWxDaGltcFRhYi52dWUnO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHRpdGxlID0gX18oICdNYWlsQ2hpbXAgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCA9IE1haWxDaGltcFRhYjtcclxuXHJcbmV4cG9ydCB7XHJcblx0dGl0bGUsXHJcblx0Y29tcG9uZW50XHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0YXBpX2tleTogX18oICdBUEkgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGFwaVByZWY6IF9fKCAnSG93IHRvIG9idGFpbiB5b3VyIE1haWxDaGltcCBBUEkgS2V5PyBNb3JlIGluZm8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGFwaUxpbms6ICdodHRwczovL21haWxjaGltcC5jb20vaGVscC9hYm91dC1hcGkta2V5cy8nXHJcbn07XHJcblxyXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWRjNDJkZTZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5ZGM0MmRlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5ZGM0MmRlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5ZGM0MmRlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWRjNDJkZTZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZGM0MmRlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IE9wdGlvbnNUYWIgZnJvbSAnLi9PcHRpb25zVGFiLnZ1ZSc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgdGl0bGUgICAgICAgICA9IF9fKCAnT3B0aW9ucycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xyXG5jb25zdCBjb21wb25lbnQgICAgID0gT3B0aW9uc1RhYjtcclxuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcblx0ZGlzcGxheUJ1dHRvbixcclxufTsiLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5jb25zdCBsYWJlbCA9IHtcclxuXHRlbmFibGVfZGV2X21vZGU6IF9fKCAnRW5hYmxlIERldi1Nb2RlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0ZGlzYWJsZV9uZXh0X2J1dHRvbjogX18oICdEaXNhYmxlIFwiTmV4dFwiIGJ1dHRvbicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGNsZWFyX29uX3VuaW5zdGFsbDogX18oXHJcblx0XHQnQ2xlYXIgcGx1Z2luIGRhdGEgYWZ0ZXIgdGhlIHVuaW5zdGFsbCcsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRzY3JvbGxfb25fbmV4dDogX18oXHJcblx0XHQnU2Nyb2xsIHRvIHRoZSB0b3Agb24gcGFnZSBjaGFuZ2UnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcblx0YXV0b19mb2N1czogX18oXHJcblx0XHQnQXV0b21hdGljIGZvY3VzJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdGZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eTogX18oXHJcblx0XHQnRm9ybSBSZWNvcmRzIEFjY2VzcyBDYXBhYmlsaXR5JyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG59O1xyXG5cclxuY29uc3QgaGVscCA9IHtcclxuXHRlbmFibGVfZGV2X21vZGU6IF9fKFxyXG5cdFx0J1dpdGggZGV2ZWxvcGVyIG1vZGUgZW5hYmxlZCwgZXJyb3JzIGZyb20gdGhlIGZvcm0gd2lsbCBiZSBzYXZlZC4nLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcblx0ZGlzYWJsZV9uZXh0X2J1dHRvbjogX18oXHJcblx0XHRgSWYgdGhpcyBvcHRpb24gaXMgYWN0aXZlLCB0aGUgTmV4dCBidXR0b24gaW4gYSBtdWx0aS1zdGVwIGZvcm0gd29uJ3QgYmVjb21lIGNsaWNrYWJsZSB1bnRpbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkcyBhcmUgY29tcGxldGVkLmAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRjbGVhcl9vbl91bmluc3RhbGw6IF9fKFxyXG5cdFx0YElmIHRoaXMgb3B0aW9uIGlzIGFjdGl2ZSwgd2hlbiB0aGUgcGx1Z2luIGlzIGRlbGV0ZWQsIGFsbCBjdXN0b20gc3FsLXRhYmxlcywgYWxsIG9wdGlvbnMgYW5kIGZpbGVzIHdpbGwgYWxzbyBiZSBkZWxldGVkLiBJbiBwYXJ0aWN1bGFyLCB0aG9zZSB0aGF0IHdlcmUgdXBsb2FkZWQgdXNpbmcgTWVkaWEgRmllbGQuYCxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHQpLFxyXG5cdHNjcm9sbF9vbl9uZXh0OiBfXyhcclxuXHRcdGBBdXRvbWF0aWMgc2Nyb2xsaW5nIHRvIHRoZSB0b3Agb2YgdGhlIGZvcm0gd2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBmb3JtIHBhZ2VzLmAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRhdXRvX2ZvY3VzOiBfXyhcclxuXHRcdGBJbmRpY2F0ZXMgaW52YWxpZCBmaWVsZCBhbmQgcHJldmVudHMgdGhlIHVzZXIgZnJvbSBnb2luZyB0byB0aGUgbmV4dCBwYWdlIG9yIHN1Ym1pdHRpbmcgdGhlIGZvcm0gdW5sZXNzIGZpbGxlZC5gLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcblx0Zm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5OiBfXyhcclxuXHRcdCdCeSBkZWZhdWx0IGFueSBGb3JtIFJlY29yZHMgYXZhaWxhYmxlIG9ubHkgZm9yIHVzZXJzIHdpdGggYG1hbmFnZV9vcHRpb25zYCBjYXBhYmlsaXR5LiBIZXJlIHlvdSBjYW4gb3ZlcndyaXRlIGl0IHdpdGggYW55IGNhcGFiaWxpdHkgeW91IHdhbnQuIE1vcmUgYWJvdXQgY2FwYWJpbGl0aWVzIDxhIGhyZWY9XCJodHRwczovL3dvcmRwcmVzcy5vcmcvc3VwcG9ydC9hcnRpY2xlL3JvbGVzLWFuZC1jYXBhYmlsaXRpZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aGVyZTwvYT4nLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07XHJcblxyXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc2OTY2YTFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcY3JvY28ueXVya28uZm10XFxcXHdwLWNvbnRlbnRcXFxccGx1Z2luc1xcXFxqZXRmb3JtYnVpbGRlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzY5NjZhMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzY5NjZhMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzY5NjZhMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc2OTY2YTFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzY5NjZhMScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBUYWIgZnJvbSAnLi9QYXltZW50c0dhdGV3YXlzLnZ1ZSc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgdGl0bGUgPSBfXyggJ1BheW1lbnRzIEdhdGV3YXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcclxuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcblx0ZGlzcGxheUJ1dHRvblxyXG59IiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5cclxuY29uc3QgbGFiZWwgPSB7XHJcblx0dXNlX2dhdGV3YXlzOiBfXyggJ0VuYWJsZSBHYXRld2F5cycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGVuYWJsZV90ZXN0X21vZGU6IF9fKCAnRW5hYmxlIFRlc3QgTW9kZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG59O1xyXG5cclxuY29uc3QgaGVscCA9IHtcclxuXHRlbmFibGVfdGVzdF9tb2RlOiBfXyhcclxuXHRcdGBUaGlzIG9wdGlvbiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvZ2F0ZXdheXMvcGF5cGFsL3NhbmRib3gtbW9kZTwvY29kZT4gZmlsdGVyLiBBcyBvZiByaWdodCBub3csIHdvcmtzIG9ubHkgZm9yIFBheVBhbCBwYXltZW50IHN5c3RlbWAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHR1c2VfZ2F0ZXdheXM6IF9fKFxyXG5cdFx0YEFjdGl2YXRlIHBheW1lbnQgZ2F0ZXdheXMgZm9yIHRoZSBmb3Jtcy4gVGhpcyBvcHRpb24gdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSA8Y29kZT5qZXQtZm9ybS1idWlsZGVyL2FsbG93LWdhdGV3YXlzPC9jb2RlPiBmaWx0ZXJgLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdGxhYmVsLFxyXG5cdGhlbHAsXHJcbn07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZiMGMyZmNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZiMGMyZmMmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRTpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGNyb2NvLnl1cmtvLmZtdFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0Zm9ybWJ1aWxkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGZiMGMyZmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGZiMGMyZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGZiMGMyZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJKb3VybmV5VGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZmIwYzJmY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBmYjBjMmZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBVc2VySm91cm5leVRhYiBmcm9tICcuL1VzZXJKb3VybmV5VGFiLnZ1ZSc7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgdGl0bGUgICAgICAgICA9IF9fKCAnVXNlciBKb3VybmV5JywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XHJcbmNvbnN0IGNvbXBvbmVudCAgICAgPSBVc2VySm91cm5leVRhYjtcclxuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IHtcclxuXHR0aXRsZSxcclxuXHRjb21wb25lbnQsXHJcblx0ZGlzcGxheUJ1dHRvbixcclxufTsiLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5jb25zdCBsYWJlbCA9IHtcclxuXHRlbmFibGVfdXNlcl9qb3VybmV5OiBfXyggJ0VuYWJsZSBVc2VyIEpvdXJuZXkgVHJhY2tpbmcnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRzdG9yYWdlX3R5cGU6IF9fKCAnU3RvcmFnZSBUeXBlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0Y2xlYXJfYWZ0ZXJfc3VibWl0OiBfXyggJ0NsZWFyIEpvdXJuZXkgQWZ0ZXIgU3VibWl0JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGVuYWJsZV91c2VyX2pvdXJuZXk6IF9fKFxyXG5cdFx0J1RyYWNrIHRoZSB1c2Vy4oCZcyBqb3VybmV5IGFjcm9zcyB0aGUgd2Vic2l0ZSBhbmQgc2F2ZSBpdCBpbiB0aGUgYnJvd3Nlci4nLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInXHJcblx0KSxcclxuXHRzdG9yYWdlX3R5cGU6IF9fKFxyXG5cdFx0J0Nob29zZSB3aGVyZSB0byBzdG9yZSB0aGUgdXNlciBqb3VybmV5IGRhdGEnLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInXHJcblx0KSxcclxuXHRjbGVhcl9hZnRlcl9zdWJtaXQ6IF9fKFxyXG5cdFx0J1doZW4gdG8gY2xlYXIgdGhlIGpvdXJuZXkgZGF0YSBhZnRlciBmb3JtIHN1Ym1pc3Npb24nLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInXHJcblx0KSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hZGRvbnMtdGFicyc7XHJcbmltcG9ydCBTZXR0aW5nc1BhZ2UgZnJvbSAnLi9TZXR0aW5nc1BhZ2UnO1xyXG5cclxuY29uc3QgeyByZW5kZXJDdXJyZW50UGFnZSB9ID0gd2luZG93LkpldEZCQWN0aW9ucztcclxuY29uc3QgeyBOb3RpY2VzUGx1Z2luIH0gPSBKZXRGQlN0b3JlO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSgge1xyXG5cdHBsdWdpbnM6IFsgTm90aWNlc1BsdWdpbiBdXHJcbn0gKVxyXG5cclxucmVuZGVyQ3VycmVudFBhZ2UoIFNldHRpbmdzUGFnZSwgeyBzdG9yZSB9ICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9