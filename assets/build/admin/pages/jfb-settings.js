/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js"
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js"
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _tabs_phone_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/phone-field */ "./admin/pages/jfb-settings/tabs/phone-field/index.js");
/* harmony import */ var _tabs_ssr_callbacks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/ssr-callbacks */ "./admin/pages/jfb-settings/tabs/ssr-callbacks/index.js");
/* harmony import */ var _sidebar_SettingsSideBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/SettingsSideBar */ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
const settingTabs = applyFilters('jet.fb.register.settings-page.tabs', [_tabs_options__WEBPACK_IMPORTED_MODULE_4__, _tabs_user_journey__WEBPACK_IMPORTED_MODULE_5__, _tabs_payments_gateways__WEBPACK_IMPORTED_MODULE_3__, _tabs_captcha__WEBPACK_IMPORTED_MODULE_0__, _tabs_phone_field__WEBPACK_IMPORTED_MODULE_6__, _tabs_mailchimp__WEBPACK_IMPORTED_MODULE_1__, _tabs_getresponse__WEBPACK_IMPORTED_MODULE_2__, _tabs_ssr_callbacks__WEBPACK_IMPORTED_MODULE_7__]);
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
    SettingsSideBar: _sidebar_SettingsSideBar__WEBPACK_IMPORTED_MODULE_8__["default"],
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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js"
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js"
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js"
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js"
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      pendingSave: false,
      errors: {
        gfb_request_args_key: '',
        gfb_request_args_value: ''
      },
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
  computed: {
    availableRoles() {
      return this.storage.available_roles || [];
    },
    selectedSelfPromotableRoles() {
      return this.storage.self_promotable_roles || [];
    }
  },
  created() {
    jfbEventBus.$on('request-state', this.onChangeState.bind(this));
  },
  methods: {
    getSavableData() {
      const {
        enable_dev_mode,
        clear_on_uninstall,
        form_records_access_capability,
        manual_verification_capability,
        ssr_validation_method,
        self_promotable_roles,
        disable_next_button,
        scroll_on_next,
        auto_focus,
        gfb_request_args_key,
        gfb_request_args_value
      } = this.storage;
      return {
        enable_dev_mode,
        clear_on_uninstall,
        form_records_access_capability,
        manual_verification_capability,
        ssr_validation_method,
        self_promotable_roles: Array.isArray(self_promotable_roles) && !self_promotable_roles.length ? [''] : self_promotable_roles,
        disable_next_button,
        scroll_on_next,
        auto_focus,
        gfb_request_args_key,
        gfb_request_args_value
      };
    },
    getRequestOnSave() {
      return {
        data: this.getSavableData()
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
        this.$set(this, 'isLoading', false);
        if (this.pendingSave) {
          this.pendingSave = false;
          this.saveByAjax(this, this.$options.name);
        }
        return;
      }
      this.$set(this, 'isLoading', state === 'begin');
    },
    validateField(name, value) {
      if (name !== 'gfb_request_args_key' && name !== 'gfb_request_args_value') {
        return true;
      }
      const val = String(value !== null && value !== void 0 ? value : '');
      const onlyDigits = /^\d+$/.test(val);
      if (onlyDigits) {
        const msg = this.__('Must contain at least one letter (A–Z). Numbers only are not allowed.', 'jet-form-builder');
        this.$set(this.errors, name, msg);
        return false;
      }
      this.$set(this.errors, name, '');
      return true;
    },
    changeSelfPromotableRoles(value) {
      if (!Array.isArray(value)) {
        return;
      }
      this.changeVal('self_promotable_roles', value);
    },
    changeVal(name, value) {
      this.$set(this.storage, name, value);
      if (name === 'gfb_request_args_key' || name === 'gfb_request_args_value') {
        const ok = this.validateField(name, value);
        if (!ok) {
          return;
        }
      }
      this.$set(this.loading, name, true);
      if (this.isLoading) {
        this.pendingSave = true;
        return;
      }
      this.saveByAjax(this, this.$options.name);
    }
  }
});

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js"
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/tabs/phone-field/source.js");
//
//
//
//
//
//
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
  name: 'phone-field-tab',
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
      if ('phone-field-tab' !== slug) {
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

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=script&lang=js"
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./admin/pages/jfb-settings/tabs/ssr-callbacks/source.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
const MIGRATION_POLL_INTERVAL_MS = 8000;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ssr-callbacks-tab',
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
      // Tracks the last value confirmed by the server (initial load or a completed
      // save), independent of `storage.callbacks`, which changes on every keystroke.
      // Used only to gate the Save button — see `hasUnsavedCallbacksChange`.
      savedCallbacks: 'string' === typeof this.incoming.callbacks ? this.incoming.callbacks : '',
      blocked: Array.isArray(this.incoming.blocked) ? [...this.incoming.blocked] : [],
      // While the one-time legacy-migration scan is still restoring previously used
      // callback names (only possible on a large site, where it spans several
      // `admin_init` requests), this tab is read-only: `import_trusted_callbacks()`
      // only merges its results into the trusted list once the whole scan completes,
      // and it does an unlocked read-merge-write of the same option a manual save
      // here would race against (review finding, issues-tracker #20361 follow-up).
      // The server enforces this independently in `on_get_request()`; this flag only
      // drives the wait-state UI and is re-synced by `pollMigrationStatus()`.
      migrationInProgress: !!this.incoming.migrationInProgress,
      isLoading: false,
      loading: {},
      pendingSave: false,
      rejected: {},
      pollTimer: null
    };
  },
  computed: {
    hasRejected() {
      return Object.keys(this.rejected).length > 0;
    },
    // `rejected` is a plain object, so a trailing "; " baked into each rendered item
    // (rather than joined between items) left a stray "; " after the last — and only —
    // entry whenever exactly one name was rejected (review finding, issues-tracker
    // #20361 follow-up). Listing names separately lets the template only add the
    // separator between items, not after the final one.
    rejectedNames() {
      return Object.keys(this.rejected);
    },
    // Gates the Save button: saving only happens on an explicit click now (no
    // blur-triggered autosave), specifically so an accidental select-all-and-delete in
    // the textarea can't wipe the whole trusted allowlist without the admin
    // deliberately clicking Save on the emptied content (review finding, issues-tracker
    // #20361 follow-up).
    hasUnsavedCallbacksChange() {
      return this.storage.callbacks !== this.savedCallbacks;
    }
  },
  created() {
    jfbEventBus.$on('request-state', this.onChangeState.bind(this));
    if (this.migrationInProgress) {
      this.schedulePoll();
    }
  },
  beforeDestroy() {
    this.clearPoll();
  },
  methods: {
    getSavableData() {
      return {
        callbacks: this.storage.callbacks
      };
    },
    getRequestOnSave() {
      return {
        data: this.getSavableData()
      };
    },
    onSaveDoneSuccess(response) {
      this.rejected = response?.data?.rejected || {};
      if ('string' === typeof response?.data?.callbacks) {
        this.$set(this.storage, 'callbacks', response.data.callbacks);
        this.savedCallbacks = response.data.callbacks;
      }
    },
    onChangeState({
      state,
      slug
    }) {
      if ('ssr-callbacks-tab' !== slug) {
        return;
      }
      if ('end' === state) {
        this.loading = {};
        this.$set(this, 'isLoading', false);
        if (this.pendingSave) {
          this.pendingSave = false;
          this.saveByAjax(this, this.$options.name);
        }
        return;
      }
      this.$set(this, 'isLoading', state === 'begin');
    },
    onInput(value) {
      this.$set(this.storage, 'callbacks', value);
    },
    onSaveCallbacks() {
      if (!this.hasUnsavedCallbacksChange || this.migrationInProgress) {
        return;
      }
      this.$set(this.loading, 'callbacks', true);
      if (this.isLoading) {
        this.pendingSave = true;
        return;
      }
      this.saveByAjax(this, this.$options.name);
    },
    schedulePoll() {
      this.clearPoll();
      this.pollTimer = window.setTimeout(this.pollMigrationStatus, MIGRATION_POLL_INTERVAL_MS);
    },
    clearPoll() {
      if (this.pollTimer) {
        window.clearTimeout(this.pollTimer);
        this.pollTimer = null;
      }
    },
    // Reuses the same save endpoint as a read-only status check: omitting `callbacks`
    // from the request body means `Ssr_Callbacks_Handler::on_get_request()` never
    // attempts to write anything — it just reports whether the migration is still
    // running. Once it reports finished, the page is reloaded rather than patching
    // state in place: the migration can also have changed the "Forms Using Blocked
    // Functions" list (`Ssr_Blocked_Callback_Usages`), which this endpoint doesn't
    // return, so a full reload is the simplest way to guarantee everything on the page
    // — not just the callbacks textarea — reflects what the migration produced.
    pollMigrationStatus() {
      jQuery.ajax({
        url: window.ajaxurl,
        type: 'POST',
        dataType: 'json',
        data: {
          action: 'jet_fb_save_tab__ssr-callbacks-tab',
          _nonce: window?.JetFBPageConfigPackage?.nonce
        }
      }).done(response => {
        if (response?.data?.migrationInProgress) {
          this.schedulePoll();
          return;
        }
        window.location.reload();
      }).fail(() => {
        // Transient network hiccup — keep waiting rather than getting stuck.
        this.schedulePoll();
      });
    }
  }
});

/***/ },

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js"
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/addons-tabs.js"
/*!*************************************************!*\
  !*** ./admin/pages/jfb-settings/addons-tabs.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/index.js"
/*!*******************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/index.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/source.js"
/*!********************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/source.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/captcha/google/index.js"
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/index.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/google/source.js"
/*!***********************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/source.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/index.js"
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/index.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/source.js"
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/source.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/captcha/turnstile/index.js"
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/index.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/turnstile/source.js"
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/source.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/gateways/paypal/index.js"
/*!***********************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/index.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/gateways/paypal/source.js"
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/source.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/proAddons/addressAutocomplete.js"
/*!*******************************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/addressAutocomplete.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/proAddons/convertkit.js"
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/convertkit.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/proAddons/hubspot.js"
/*!*******************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/hubspot.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/proAddons/mailerlite.js"
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/mailerlite.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/proAddons/moosend.js"
/*!*******************************************************!*\
  !*** ./admin/pages/jfb-settings/proAddons/moosend.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/proGateways/stripe.js"
/*!********************************************************!*\
  !*** ./admin/pages/jfb-settings/proGateways/stripe.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/captcha/index.js"
/*!********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/index.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/getresponse/index.js"
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/index.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/getresponse/source.js"
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/source.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/index.js"
/*!**********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/index.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/source.js"
/*!***********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/source.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/options/index.js"
/*!********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/index.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/options/source.js"
/*!*********************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/source.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  form_records_access_capability: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Form Records Access Capability', 'jet-form-builder'),
  manual_verification_capability: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Manual Verification Capability', 'jet-form-builder'),
  ssr_validation_method: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Server side validation method', 'jet-form-builder'),
  self_promotable_roles: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Self-Promotable Roles', 'jet-form-builder')
};
const help = {
  enable_dev_mode: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('With developer mode enabled, errors from the form will be saved.', 'jet-form-builder'),
  disable_next_button: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`If this option is active, the Next button in a multi-step form won't become clickable until all the required fields are completed.`, 'jet-form-builder'),
  clear_on_uninstall: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`If this option is active, when the plugin is deleted, all custom sql-tables, all options and files will also be deleted. In particular, those that were uploaded using Media Field.`, 'jet-form-builder'),
  scroll_on_next: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Automatic scrolling to the top of the form when switching between form pages.`, 'jet-form-builder'),
  auto_focus: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Indicates invalid field and prevents the user from going to the next page or submitting the form unless filled.`, 'jet-form-builder'),
  form_records_access_capability: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('By default any Form Records available only for users with `manage_options` capability. Here you can overwrite it with any capability you want. More about capabilities <a href="https://wordpress.org/support/article/roles-and-capabilities/" target="_blank">here</a>', 'jet-form-builder'),
  manual_verification_capability: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('By default, only users with the `manage_options` capability can manually verify submissions in Form Records. Here you can overwrite it with any capability you want. More about capabilities <a href="https://wordpress.org/support/article/roles-and-capabilities/" target="_blank">here</a>', 'jet-form-builder'),
  ssr_validation_method: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select how the server-side validation request will be made – via WP REST API, admin-ajax.php, or through the URL of the current page.', 'jet-form-builder'),
  self_promotable_roles: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Users without the `promote_users` capability can keep their current role or switch only to roles from this list in Update User actions. Leave it empty to skip self-service role changes.', 'jet-form-builder')
};


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/index.js"
/*!******************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/index.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/source.js"
/*!*******************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/source.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/phone-field/index.js"
/*!************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/phone-field/index.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _PhoneFieldTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneFieldTab */ "./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue");

const {
  __
} = wp.i18n;
const title = __('Ipinfo API', 'jet-form-builder');
const component = _PhoneFieldTab__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/phone-field/source.js"
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/phone-field/source.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   help: () => (/* binding */ help),
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
const {
  sprintf,
  __
} = wp.i18n;
const help = {
  ipinfo_token: sprintf(
  // translators: %1$s - ipinfo.io website URL, %2$s - token dashboard URL
  __('Sign in at <a href="%1$s" target="_blank" rel="noopener noreferrer">ipinfo.io</a> and get your API token <a href="%2$s" target="_blank" rel="noopener noreferrer">here</a>.', 'jet-form-builder'), 'https://ipinfo.io', 'https://ipinfo.io/dashboard/token')
};
const label = {
  ipinfo_token: __('API Token', 'jet-form-builder')
};


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/ssr-callbacks/index.js"
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/ssr-callbacks/index.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   displayButton: () => (/* binding */ displayButton),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _SsrCallbacksTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SsrCallbacksTab.vue */ "./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue");

const {
  __
} = wp.i18n;
const title = __('Allowed Server-Side Callbacks', 'jet-form-builder');
const component = _SsrCallbacksTab_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
const displayButton = false;


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/ssr-callbacks/source.js"
/*!***************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/ssr-callbacks/source.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   help: () => (/* binding */ help),
/* harmony export */   label: () => (/* binding */ label)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const label = {
  callbacks: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Allowed Server-Side Callbacks', 'jet-form-builder'),
  blocked: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Forms Using Blocked Functions', 'jet-form-builder')
};
const help = {
  callbacks: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter custom PHP function names here (one per line) to allow them in your forms. Built-in functions are already allowed. Always click "Save" to apply changes.', 'jet-form-builder'),
  blocked: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('These forms use unsafe validation rules that are strictly blocked. To fix them, edit the form and change or remove the Server-Side callback function. The form will automatically disappear from this list once saved.', 'jet-form-builder'),
  migrationInProgress: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('JetFormBuilder is scanning your existing forms and automatically restoring the custom Server-Side callback functions they already relied on. This page will update on its own once that finishes — no need to reload.', 'jet-form-builder')
};


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/user-journey/index.js"
/*!*************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/index.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/user-journey/source.js"
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/source.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-settings/SettingsPage.vue","webpack://./../SettingsPage.vue"],"names":[],"mappings":"AAwKA;EACC,aAAA;EACA,eAAA;EACA,QAAA;EACA,eAAA;ACvKD;ADyKC;EACC,OAAA;ACvKF","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.jfb-content {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 2em;\n\tmargin-top: 1em;\n\n\t&-main {\n\t\tflex: 1;\n\t}\n}\n",".jfb-content {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2em;\n  margin-top: 1em;\n}\n.jfb-content-main {\n  flex: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
}`, "",{"version":3,"sources":["webpack://./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue","webpack://./../SettingsSideBar.vue"],"names":[],"mappings":"AA+EC;EACC,kBAAA;AC9EF;ADiFC;EACC,WAAA;AC/EF;ADiFE;AAHD;IAIE,UAAA;AC9ED;AACF;ADgFE;EACC,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,6BAAA;EACA,iBAAA;AC9EH;ADiFE;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;AC/EH;ADiFG;EACC,gBAAA;AC/EJ;ADkFG;EACC,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,qBAAA;AChFJ;ADkFI;EACC,cAAA;EACA,0BAAA;AChFL;ADmFI;EACC,kBAAA;ACjFL","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.jet-form-builder-page {\n\n\t&__banner.useful {\n\t\tpadding: 20px 30px;\n\t}\n\n\t&__panel.help {\n\t\twidth: 100%;\n\n\t\t@media (max-width: 1140px) {\n\t\t\twidth: calc(100% / 2);\n\t\t}\n\n\t\t.jet-form-builder-page__panel-content {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tmargin-top: 12px;\n\t\t\tborder-top: 1px solid #DCDCDD;\n\t\t\tpadding-top: 23px;\n\t\t}\n\n\t\t.help-center-link {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-start;\n\t\t\tmargin-bottom: 22px;\n\n\t\t\t&:last-child {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\n\t\t\ta {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: flex-start;\n\t\t\t\talign-items: center;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tline-height: 18px;\n\t\t\t\tcolor: #007CBA;\n\t\t\t\ttext-decoration: none;\n\n\t\t\t\t&:hover {\n\t\t\t\t\tcolor: #066EA2;\n\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t}\n\n\t\t\t\t.help-center-link-icon {\n\t\t\t\t\tmargin-right: 28px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\n",".jet-form-builder-page__banner.useful {\n  padding: 20px 30px;\n}\n.jet-form-builder-page__panel.help {\n  width: 100%;\n}\n@media (max-width: 1140px) {\n  .jet-form-builder-page__panel.help {\n    width: 50%;\n  }\n}\n.jet-form-builder-page__panel.help .jet-form-builder-page__panel-content {\n  display: flex;\n  flex-direction: column;\n  margin-top: 12px;\n  border-top: 1px solid #DCDCDD;\n  padding-top: 23px;\n}\n.jet-form-builder-page__panel.help .help-center-link {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 22px;\n}\n.jet-form-builder-page__panel.help .help-center-link:last-child {\n  margin-bottom: 0;\n}\n.jet-form-builder-page__panel.help .help-center-link a {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 14px;\n  line-height: 18px;\n  color: #007CBA;\n  text-decoration: none;\n}\n.jet-form-builder-page__panel.help .help-center-link a:hover {\n  color: #066EA2;\n  text-decoration: underline;\n}\n.jet-form-builder-page__panel.help .help-center-link a .help-center-link-icon {\n  margin-right: 28px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css"
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
`, "",{"version":3,"sources":["webpack://./../admin/pages/jfb-settings/IsPROIcon.vue"],"names":[],"mappings":";AAoBA;CACA,yBAAA;CACA,oBAAA;CACA,yBAAA;CACA,kBAAA;CACA,YAAA;CACA,eAAA;CACA,kBAAA;CACA,gBAAA;CACA,iBAAA;CACA,iBAAA;CACA,gBAAA;AACA","sourcesContent":["<template>\n\t<span>{{ __( 'Pro', 'jet-form-builder' ) }}</span>\n</template>\n\n<script>\nconst { i18n } = JetFBMixins;\n\nexport default {\n\tname: 'IsPROIcon',\n\tmixins: [ i18n ],\n\tprops: {\n\t\tisActive: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t},\n};\n</script>\n\n<style scoped>\nspan {\n\tbackground-color: #007CBA;\n\tpadding: 0.1em 0.3em;\n\ttext-transform: uppercase;\n\tborder-radius: 3px;\n\tcolor: white;\n\tfont-size: 12px;\n\tfont-style: normal;\n\tfont-weight: 700;\n\tline-height: 16px;\n\tletter-spacing: 0;\n\ttext-align: left;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
.jfb-has-error .cx-vui-input[data-v-9dc42de6],
.jfb-has-error input[data-v-9dc42de6] {
  border-color: #dc2626 !important;
  outline: none;
}
.jfb-field-error[data-v-9dc42de6] {
  margin: 6px 0 12px;
  color: #dc2626;
  font-size: 12px;
  line-height: 1.4;
  text-align:right;
}
`, "",{"version":3,"sources":["webpack://./../admin/pages/jfb-settings/tabs/options/OptionsTab.vue"],"names":[],"mappings":";AAiSA;;EAEA,gCAAA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AACA","sourcesContent":["<template>\n\t<div>\n\t\t<cx-vui-switcher\n\t\t\tname=\"enable_dev_mode\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:label=\"loading.enable_dev_mode ? `${label.enable_dev_mode} (loading...)` : label.enable_dev_mode\"\n\t\t\t:description=\"help.enable_dev_mode\"\n\t\t\t:value=\"storage.hasOwnProperty( 'enable_dev_mode' ) ? storage.enable_dev_mode : false\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'enable_dev_mode', $event )\"\n\t\t></cx-vui-switcher>\n\t\t<cx-vui-switcher\n\t\t\tname=\"clear_on_uninstall\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:label=\"loading.clear_on_uninstall ? `${label.clear_on_uninstall} (loading...)` : label.clear_on_uninstall\"\n\t\t\t:description=\"help.clear_on_uninstall\"\n\t\t\t:value=\"storage.hasOwnProperty( 'clear_on_uninstall' ) ? storage.clear_on_uninstall : false\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'clear_on_uninstall', $event )\"\n\t\t></cx-vui-switcher>\n\t\t<cx-vui-input\n\t\t\tname=\"form_records_access_capability\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:size=\"'fullwidth'\"\n\t\t\t:label=\"loading.form_records_access_capability ? `${label.form_records_access_capability} (loading...)` : label.form_records_access_capability\"\n\t\t\t:description=\"help.form_records_access_capability\"\n\t\t\t:value=\"storage.hasOwnProperty( 'form_records_access_capability' ) ? storage.form_records_access_capability : 'manage_options'\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'form_records_access_capability', $event )\"\n\t\t/>\n\t\t<cx-vui-input\n\t\t\tname=\"manual_verification_capability\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:size=\"'fullwidth'\"\n\t\t\t:label=\"loading.manual_verification_capability ? `${label.manual_verification_capability} (loading...)` : label.manual_verification_capability\"\n\t\t\t:description=\"help.manual_verification_capability\"\n\t\t\t:value=\"storage.hasOwnProperty( 'manual_verification_capability' ) ? storage.manual_verification_capability : 'manage_options'\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'manual_verification_capability', $event )\"\n\t\t/>\n\t\t<cx-vui-select\n\t\t\tname=\"ssr_validation_method\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:size=\"'fullwidth'\"\n\t\t\t:label=\"loading.ssr_validation_method ? `${label.ssr_validation_method} (loading...)` : label.ssr_validation_method\"\n\t\t\t:description=\"help.ssr_validation_method\"\n\t\t\t:value=\"storage.hasOwnProperty( 'ssr_validation_method' ) ? storage.ssr_validation_method : 'rest'\"\n\t\t\t:options-list=\"selectOptions\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'ssr_validation_method', $event )\"\n\t\t></cx-vui-select>\n\t\t<cx-vui-f-select\n\t\t\tname=\"self_promotable_roles\"\n\t\t\t:label=\"loading.self_promotable_roles ? `${label.self_promotable_roles} (loading...)` : label.self_promotable_roles\"\n\t\t\t:description=\"help.self_promotable_roles\"\n\t\t\t:value=\"selectedSelfPromotableRoles\"\n\t\t\t:options-list=\"availableRoles\"\n\t\t\t:multiple=\"true\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:size=\"'fullwidth'\"\n\t\t\t@on-change=\"changeSelfPromotableRoles( $event )\"\n\t\t></cx-vui-f-select>\n\t\t<cx-vui-component-wrapper\n\t\t\t:label=\"__( 'Form Accessibility', 'jet-form-builder' )\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t/>\n\t\t<div class=\"cx-vui-inner-panel\">\n\t\t\t<cx-vui-switcher\n\t\t\t\tname=\"disable_next_button\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t\t:label=\"loading.disable_next_button ? `${label.disable_next_button} (loading...)` : label.disable_next_button\"\n\t\t\t\t:description=\"help.disable_next_button\"\n\t\t\t\t:value=\"storage.hasOwnProperty( 'disable_next_button' ) ? storage.disable_next_button : true\"\n\t\t\t\t:disabled=\"isLoading\"\n\t\t\t\t@input=\"changeVal( 'disable_next_button', $event )\"\n\t\t\t></cx-vui-switcher>\n\t\t\t<cx-vui-switcher\n\t\t\t\tname=\"scroll_on_next\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t\t:label=\"loading.scroll_on_next ? `${label.scroll_on_next} (loading...)` : label.scroll_on_next\"\n\t\t\t\t:description=\"help.scroll_on_next\"\n\t\t\t\t:value=\"storage.hasOwnProperty( 'scroll_on_next' ) ? storage.scroll_on_next : false\"\n\t\t\t\t:disabled=\"isLoading\"\n\t\t\t\t@input=\"changeVal( 'scroll_on_next', $event )\"\n\t\t\t></cx-vui-switcher>\n\t\t\t<cx-vui-switcher\n\t\t\t\tname=\"auto_focus\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t\t:label=\"loading.auto_focus ? `${label.auto_focus} (loading...)` : label.auto_focus\"\n\t\t\t\t:description=\"help.auto_focus\"\n\t\t\t\t:value=\"storage.hasOwnProperty( 'auto_focus' ) ? storage.auto_focus : false\"\n\t\t\t\t:disabled=\"isLoading\"\n\t\t\t\t@input=\"changeVal( 'auto_focus', $event )\"\n\t\t\t></cx-vui-switcher>\n\t\t</div>\n\n    <cx-vui-component-wrapper\n        :label=\"__( 'Form Request Args', 'jet-form-builder' )\"\n        :wrapper-css=\"[ 'equalwidth' ]\"\n    />\n\n    <cx-vui-input\n        name=\"gfb_request_args_key\"\n        :wrapper-css=\"[ 'equalwidth', errors.gfb_request_args_key ? 'jfb-has-error' : '' ]\"\n    :size=\"'fullwidth'\"\n    :label=\"'Request key'\"\n    :description=\"'Unique form parameter (key)'\"\n    :value=\"storage.hasOwnProperty( 'gfb_request_args_key' ) ? storage.gfb_request_args_key : '1111'\"\n    :disabled=\"isLoading\"\n    @input=\"changeVal( 'gfb_request_args_key', $event )\"\n    />\n    <div v-if=\"errors.gfb_request_args_key\" class=\"jfb-field-error\">\n      {{ errors.gfb_request_args_key }}\n    </div>\n\n    <cx-vui-input\n        name=\"gfb_request_args_value\"\n        :wrapper-css=\"[ 'equalwidth', errors.gfb_request_args_value ? 'jfb-has-error' : '' ]\"\n    :size=\"'fullwidth'\"\n    :label=\"'Request value'\"\n    :description=\"'Unique form parameter (value)'\"\n    :value=\"storage.hasOwnProperty( 'gfb_request_args_value' ) ? storage.gfb_request_args_value : '2222'\"\n    :disabled=\"isLoading\"\n    @input=\"changeVal( 'gfb_request_args_value', $event )\"\n    />\n    <div v-if=\"errors.gfb_request_args_value\" class=\"jfb-field-error\">\n      {{ errors.gfb_request_args_value }}\n    </div>\n\t</div>\n</template>\n\n<script>\n\nimport {\n\thelp,\n\tlabel,\n} from './source';\n\n\nconst { SaveTabByAjax, i18n } = window.JetFBMixins;\n\nexport default {\n\tname: 'options-tab',\n\tprops: {\n\t\tincoming: {\n\t\t\ttype: Object,\n\t\t\tdefault: {},\n\t\t},\n\t},\n\tmixins: [ SaveTabByAjax, i18n ],\n\tdata() {\n\t\treturn {\n\t\t\tlabel, help,\n\t\t\tstorage: JSON.parse( JSON.stringify( this.incoming ) ),\n\t\t\tisLoading: false,\n\t\t\tloading: {},\n\t\t\tpendingSave: false,\n\t\t\terrors: {\n\t\t\t\tgfb_request_args_key: '',\n\t\t\t\tgfb_request_args_value: '',\n\t\t\t},\n\t\t\tselectOptions: [\n\t\t\t\t{ value: 'rest', label: ( 'Rest API' ) },\n\t\t\t\t{ value: 'admin_ajax', label: ( 'Admin Ajax' ) },\n\t\t\t\t{ value: 'self', label: ( 'Self' ) },\n\t\t\t],\n\t\t};\n\t},\n\tcomputed: {\n\t\tavailableRoles() {\n\t\t\treturn this.storage.available_roles || [];\n\t\t},\n\t\tselectedSelfPromotableRoles() {\n\t\t\treturn this.storage.self_promotable_roles || [];\n\t\t},\n\t},\n\tcreated() {\n\t\tjfbEventBus.$on( 'request-state', this.onChangeState.bind( this ) );\n\t},\n\tmethods: {\n\t\tgetSavableData() {\n\t\t\tconst {\n\t\t\t\tenable_dev_mode,\n\t\t\t\tclear_on_uninstall,\n\t\t\t\tform_records_access_capability,\n\t\t\t\tmanual_verification_capability,\n\t\t\t\tssr_validation_method,\n\t\t\t\tself_promotable_roles,\n\t\t\t\tdisable_next_button,\n\t\t\t\tscroll_on_next,\n\t\t\t\tauto_focus,\n\t\t\t\tgfb_request_args_key,\n\t\t\t\tgfb_request_args_value,\n\t\t\t} = this.storage;\n\n\t\t\treturn {\n\t\t\t\tenable_dev_mode,\n\t\t\t\tclear_on_uninstall,\n\t\t\t\tform_records_access_capability,\n\t\t\t\tmanual_verification_capability,\n\t\t\t\tssr_validation_method,\n\t\t\t\tself_promotable_roles: Array.isArray( self_promotable_roles ) && ! self_promotable_roles.length\n\t\t\t\t\t? [ '' ]\n\t\t\t\t\t: self_promotable_roles,\n\t\t\t\tdisable_next_button,\n\t\t\t\tscroll_on_next,\n\t\t\t\tauto_focus,\n\t\t\t\tgfb_request_args_key,\n\t\t\t\tgfb_request_args_value,\n\t\t\t};\n\t\t},\n\t\tgetRequestOnSave() {\n\t\t\treturn {\n\t\t\t\tdata: this.getSavableData(),\n\t\t\t};\n\t\t},\n\t\tonChangeState( { state, slug } ) {\n\t\t\tif ( 'options-tab' !== slug ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif ( 'end' === state ) {\n\t\t\t\tthis.loading = {};\n\t\t\t\tthis.$set( this, 'isLoading', false );\n\n\t\t\t\tif ( this.pendingSave ) {\n\t\t\t\t\tthis.pendingSave = false;\n\t\t\t\t\tthis.saveByAjax( this, this.$options.name );\n\t\t\t\t}\n\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.$set( this, 'isLoading', state === 'begin' );\n\t\t},\n\t\tvalidateField( name, value ) {\n\t\t\tif ( name !== 'gfb_request_args_key' && name !== 'gfb_request_args_value' ) {\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tconst val = String( value ?? '' );\n\t\t\tconst onlyDigits = /^\\d+$/.test( val );\n\n\t\t\tif ( onlyDigits ) {\n\t\t\t\tconst msg = this.__(\n\t\t\t\t\t'Must contain at least one letter (A–Z). Numbers only are not allowed.',\n\t\t\t\t\t'jet-form-builder'\n\t\t\t\t);\n\t\t\t\tthis.$set( this.errors, name, msg );\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tthis.$set( this.errors, name, '' );\n\t\t\treturn true;\n\t\t},\n\t\tchangeSelfPromotableRoles( value ) {\n\t\t\tif ( ! Array.isArray( value ) ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.changeVal( 'self_promotable_roles', value );\n\t\t},\n\t\tchangeVal( name, value ) {\n\t\t\tthis.$set( this.storage, name, value );\n\n\t\t\tif ( name === 'gfb_request_args_key' || name === 'gfb_request_args_value' ) {\n\t\t\t\tconst ok = this.validateField( name, value );\n\t\t\t\tif ( ! ok ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.$set( this.loading, name, true );\n\n\t\t\tif ( this.isLoading ) {\n\t\t\t\tthis.pendingSave = true;\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.saveByAjax( this, this.$options.name );\n\t\t},\n\t},\n};\n\n</script>\n\n\n<style scoped>\n.jfb-has-error .cx-vui-input,\n.jfb-has-error input {\n  border-color: #dc2626 !important;\n  outline: none;\n}\n\n.jfb-field-error {\n  margin: 6px 0 12px;\n  color: #dc2626;\n  font-size: 12px;\n  line-height: 1.4;\n  text-align:right;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
.jfb-ssr-callbacks-textarea[data-v-17ab2388] {
	width: 100%;
	font-family: monospace;
	margin-bottom: 8px;
}
.jfb-ssr-callbacks-rejected[data-v-17ab2388] {
	color: #dc2626;
	font-size: 14px;
	padding: 0 20px;
	margin: -10px 0 20px;
}
.jfb-ssr-callbacks-rejected__list[data-v-17ab2388] {
	margin: 4px 0 0;
	padding: 0;
	list-style: none;
}
.jfb-ssr-callbacks-rejected__list li[data-v-17ab2388] {
	margin-bottom: 2px;
	padding-left: 14px;
	position: relative;
}
.jfb-ssr-callbacks-rejected__list li[data-v-17ab2388]::before {
	content: '–';
	position: absolute;
	left: 0;
}
.jfb-ssr-blocked__list[data-v-17ab2388] {
	margin: 0;
	padding: 0;
	list-style: none;
}
.jfb-ssr-blocked__list li[data-v-17ab2388] {
	margin-bottom: 6px;
}
.jfb-ssr-blocked__form[data-v-17ab2388] {
	font-weight: 600;
}
.jfb-ssr-blocked__meta[data-v-17ab2388] {
	color: #646970;
	margin: 0 6px;
}
.jfb-ssr-blocked__meta code[data-v-17ab2388] {
	color: #dc2626;
}
.jfb-ssr-migration-wait[data-v-17ab2388] {
	display: flex;
	align-items: flex-start;
	gap: 12px;
	padding: 16px 20px;
	background: #f0f6fc;
	border: 1px solid #c3dcf1;
	border-radius: 4px;
}
.jfb-ssr-migration-wait__spinner[data-v-17ab2388] {
	flex: 0 0 auto;
	width: 18px;
	height: 18px;
	margin-top: 2px;
	border: 2px solid #c3dcf1;
	border-top-color: #2271b1;
	border-radius: 50%;
	animation: jfb-ssr-migration-wait-spin-data-v-17ab2388 0.8s linear infinite;
}
@keyframes jfb-ssr-migration-wait-spin-data-v-17ab2388 {
to {
		transform: rotate( 360deg );
}
}
`, "",{"version":3,"sources":["webpack://./../admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue"],"names":[],"mappings":";AA2OA;CACA,WAAA;CACA,sBAAA;CACA,kBAAA;AACA;AAEA;CACA,cAAA;CACA,eAAA;CACA,eAAA;CACA,oBAAA;AACA;AAEA;CACA,eAAA;CACA,UAAA;CACA,gBAAA;AACA;AAEA;CACA,kBAAA;CACA,kBAAA;CACA,kBAAA;AACA;AAEA;CACA,YAAA;CACA,kBAAA;CACA,OAAA;AACA;AAEA;CACA,SAAA;CACA,UAAA;CACA,gBAAA;AACA;AAEA;CACA,kBAAA;AACA;AAEA;CACA,gBAAA;AACA;AAEA;CACA,cAAA;CACA,aAAA;AACA;AAEA;CACA,cAAA;AACA;AAEA;CACA,aAAA;CACA,uBAAA;CACA,SAAA;CACA,kBAAA;CACA,mBAAA;CACA,yBAAA;CACA,kBAAA;AACA;AAEA;CACA,cAAA;CACA,WAAA;CACA,YAAA;CACA,eAAA;CACA,yBAAA;CACA,yBAAA;CACA,kBAAA;CACA,2EAAA;AACA;AAEA;AACA;EACA,2BAAA;AACA;AACA","sourcesContent":["<template>\n\t<div>\n\t\t<div v-if=\"migrationInProgress\" class=\"jfb-ssr-migration-wait\">\n\t\t\t<span class=\"jfb-ssr-migration-wait__spinner\" aria-hidden=\"true\"></span>\n\t\t\t<div>\n\t\t\t\t<strong>{{ __( 'Migration in progress…', 'jet-form-builder' ) }}</strong>\n\t\t\t\t<p>{{ help.migrationInProgress }}</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<template v-else>\n\t\t\t<cx-vui-component-wrapper\n\t\t\t\t:label=\"loading.callbacks ? `${label.callbacks} (loading...)` : label.callbacks\"\n\t\t\t\t:description=\"help.callbacks\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t>\n\t\t\t\t<textarea\n\t\t\t\t\tclass=\"jfb-ssr-callbacks-textarea\"\n\t\t\t\t\trows=\"10\"\n\t\t\t\t\t:disabled=\"isLoading\"\n\t\t\t\t\t:value=\"storage.callbacks\"\n\t\t\t\t\t@input=\"onInput( $event.target.value )\"\n\t\t\t\t></textarea>\n\t\t\t\t<cx-vui-button\n\t\t\t\t\tbutton-style=\"accent\"\n\t\t\t\t\t:disabled=\"isLoading || !hasUnsavedCallbacksChange\"\n\t\t\t\t\t@click=\"onSaveCallbacks\"\n\t\t\t\t>\n\t\t\t\t\t<span slot=\"label\">{{ __( 'Save', 'jet-form-builder' ) }}</span>\n\t\t\t\t</cx-vui-button>\n\t\t\t</cx-vui-component-wrapper>\n\t\t\t<div v-if=\"hasRejected\" class=\"jfb-ssr-callbacks-rejected\">\n\t\t\t\t<strong>{{ __( 'Not saved:', 'jet-form-builder' ) }}</strong>\n\t\t\t\t<ul class=\"jfb-ssr-callbacks-rejected__list\">\n\t\t\t\t\t<li\n\t\t\t\t\t\tv-for=\"name in rejectedNames\"\n\t\t\t\t\t\t:key=\"name\"\n\t\t\t\t\t>{{ name }} — {{ rejected[ name ] }}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<cx-vui-component-wrapper\n\t\t\t\tv-if=\"blocked.length\"\n\t\t\t\t:label=\"`${label.blocked} (${blocked.length})`\"\n\t\t\t\t:description=\"help.blocked\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t>\n\t\t\t\t<ul class=\"jfb-ssr-blocked__list\">\n\t\t\t\t\t<li v-for=\"( usage, index ) in blocked\" :key=\"index\">\n\t\t\t\t\t\t<span class=\"jfb-ssr-blocked__form\">{{ usage.form_title || `#${usage.form_id}` }}</span>\n\t\t\t\t\t\t<span class=\"jfb-ssr-blocked__meta\">\n\t\t\t\t\t\t\t({{ __( 'field', 'jet-form-builder' ) }} \"{{ usage.field }}\" → <code>{{ usage.name }}</code>)\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<a :href=\"usage.edit_url\" target=\"_blank\" rel=\"noopener noreferrer\">\n\t\t\t\t\t\t\t{{ __( 'Edit form →', 'jet-form-builder' ) }}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</cx-vui-component-wrapper>\n\t\t</template>\n\t</div>\n</template>\n\n<script>\n\nimport {\n\thelp,\n\tlabel,\n} from './source';\n\nconst { SaveTabByAjax, i18n } = window.JetFBMixins;\n\nconst MIGRATION_POLL_INTERVAL_MS = 8000;\n\nexport default {\n\tname: 'ssr-callbacks-tab',\n\tprops: {\n\t\tincoming: {\n\t\t\ttype: Object,\n\t\t\tdefault: {},\n\t\t},\n\t},\n\tmixins: [ SaveTabByAjax, i18n ],\n\tdata() {\n\t\treturn {\n\t\t\tlabel, help,\n\t\t\tstorage: JSON.parse( JSON.stringify( this.incoming ) ),\n\t\t\t// Tracks the last value confirmed by the server (initial load or a completed\n\t\t\t// save), independent of `storage.callbacks`, which changes on every keystroke.\n\t\t\t// Used only to gate the Save button — see `hasUnsavedCallbacksChange`.\n\t\t\tsavedCallbacks: 'string' === typeof this.incoming.callbacks ? this.incoming.callbacks : '',\n\t\t\tblocked: Array.isArray( this.incoming.blocked ) ? [ ...this.incoming.blocked ] : [],\n\t\t\t// While the one-time legacy-migration scan is still restoring previously used\n\t\t\t// callback names (only possible on a large site, where it spans several\n\t\t\t// `admin_init` requests), this tab is read-only: `import_trusted_callbacks()`\n\t\t\t// only merges its results into the trusted list once the whole scan completes,\n\t\t\t// and it does an unlocked read-merge-write of the same option a manual save\n\t\t\t// here would race against (review finding, issues-tracker #20361 follow-up).\n\t\t\t// The server enforces this independently in `on_get_request()`; this flag only\n\t\t\t// drives the wait-state UI and is re-synced by `pollMigrationStatus()`.\n\t\t\tmigrationInProgress: !! this.incoming.migrationInProgress,\n\t\t\tisLoading: false,\n\t\t\tloading: {},\n\t\t\tpendingSave: false,\n\t\t\trejected: {},\n\t\t\tpollTimer: null,\n\t\t};\n\t},\n\tcomputed: {\n\t\thasRejected() {\n\t\t\treturn Object.keys( this.rejected ).length > 0;\n\t\t},\n\t\t// `rejected` is a plain object, so a trailing \"; \" baked into each rendered item\n\t\t// (rather than joined between items) left a stray \"; \" after the last — and only —\n\t\t// entry whenever exactly one name was rejected (review finding, issues-tracker\n\t\t// #20361 follow-up). Listing names separately lets the template only add the\n\t\t// separator between items, not after the final one.\n\t\trejectedNames() {\n\t\t\treturn Object.keys( this.rejected );\n\t\t},\n\t\t// Gates the Save button: saving only happens on an explicit click now (no\n\t\t// blur-triggered autosave), specifically so an accidental select-all-and-delete in\n\t\t// the textarea can't wipe the whole trusted allowlist without the admin\n\t\t// deliberately clicking Save on the emptied content (review finding, issues-tracker\n\t\t// #20361 follow-up).\n\t\thasUnsavedCallbacksChange() {\n\t\t\treturn this.storage.callbacks !== this.savedCallbacks;\n\t\t},\n\t},\n\tcreated() {\n\t\tjfbEventBus.$on( 'request-state', this.onChangeState.bind( this ) );\n\n\t\tif ( this.migrationInProgress ) {\n\t\t\tthis.schedulePoll();\n\t\t}\n\t},\n\tbeforeDestroy() {\n\t\tthis.clearPoll();\n\t},\n\tmethods: {\n\t\tgetSavableData() {\n\t\t\treturn { callbacks: this.storage.callbacks };\n\t\t},\n\t\tgetRequestOnSave() {\n\t\t\treturn {\n\t\t\t\tdata: this.getSavableData(),\n\t\t\t};\n\t\t},\n\t\tonSaveDoneSuccess( response ) {\n\t\t\tthis.rejected = response?.data?.rejected || {};\n\n\t\t\tif ( 'string' === typeof response?.data?.callbacks ) {\n\t\t\t\tthis.$set( this.storage, 'callbacks', response.data.callbacks );\n\t\t\t\tthis.savedCallbacks = response.data.callbacks;\n\t\t\t}\n\t\t},\n\t\tonChangeState( { state, slug } ) {\n\t\t\tif ( 'ssr-callbacks-tab' !== slug ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif ( 'end' === state ) {\n\t\t\t\tthis.loading = {};\n\t\t\t\tthis.$set( this, 'isLoading', false );\n\n\t\t\t\tif ( this.pendingSave ) {\n\t\t\t\t\tthis.pendingSave = false;\n\t\t\t\t\tthis.saveByAjax( this, this.$options.name );\n\t\t\t\t}\n\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.$set( this, 'isLoading', state === 'begin' );\n\t\t},\n\t\tonInput( value ) {\n\t\t\tthis.$set( this.storage, 'callbacks', value );\n\t\t},\n\t\tonSaveCallbacks() {\n\t\t\tif ( ! this.hasUnsavedCallbacksChange || this.migrationInProgress ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.$set( this.loading, 'callbacks', true );\n\n\t\t\tif ( this.isLoading ) {\n\t\t\t\tthis.pendingSave = true;\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.saveByAjax( this, this.$options.name );\n\t\t},\n\t\tschedulePoll() {\n\t\t\tthis.clearPoll();\n\t\t\tthis.pollTimer = window.setTimeout( this.pollMigrationStatus, MIGRATION_POLL_INTERVAL_MS );\n\t\t},\n\t\tclearPoll() {\n\t\t\tif ( this.pollTimer ) {\n\t\t\t\twindow.clearTimeout( this.pollTimer );\n\t\t\t\tthis.pollTimer = null;\n\t\t\t}\n\t\t},\n\t\t// Reuses the same save endpoint as a read-only status check: omitting `callbacks`\n\t\t// from the request body means `Ssr_Callbacks_Handler::on_get_request()` never\n\t\t// attempts to write anything — it just reports whether the migration is still\n\t\t// running. Once it reports finished, the page is reloaded rather than patching\n\t\t// state in place: the migration can also have changed the \"Forms Using Blocked\n\t\t// Functions\" list (`Ssr_Blocked_Callback_Usages`), which this endpoint doesn't\n\t\t// return, so a full reload is the simplest way to guarantee everything on the page\n\t\t// — not just the callbacks textarea — reflects what the migration produced.\n\t\tpollMigrationStatus() {\n\t\t\tjQuery.ajax( {\n\t\t\t\turl: window.ajaxurl,\n\t\t\t\ttype: 'POST',\n\t\t\t\tdataType: 'json',\n\t\t\t\tdata: {\n\t\t\t\t\taction: 'jet_fb_save_tab__ssr-callbacks-tab',\n\t\t\t\t\t_nonce: window?.JetFBPageConfigPackage?.nonce,\n\t\t\t\t},\n\t\t\t} ).done( ( response ) => {\n\t\t\t\tif ( response?.data?.migrationInProgress ) {\n\t\t\t\t\tthis.schedulePoll();\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\twindow.location.reload();\n\t\t\t} ).fail( () => {\n\t\t\t\t// Transient network hiccup — keep waiting rather than getting stuck.\n\t\t\t\tthis.schedulePoll();\n\t\t\t} );\n\t\t},\n\t},\n};\n\n</script>\n\n<style scoped>\n.jfb-ssr-callbacks-textarea {\n\twidth: 100%;\n\tfont-family: monospace;\n\tmargin-bottom: 8px;\n}\n\n.jfb-ssr-callbacks-rejected {\n\tcolor: #dc2626;\n\tfont-size: 14px;\n\tpadding: 0 20px;\n\tmargin: -10px 0 20px;\n}\n\n.jfb-ssr-callbacks-rejected__list {\n\tmargin: 4px 0 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.jfb-ssr-callbacks-rejected__list li {\n\tmargin-bottom: 2px;\n\tpadding-left: 14px;\n\tposition: relative;\n}\n\n.jfb-ssr-callbacks-rejected__list li::before {\n\tcontent: '–';\n\tposition: absolute;\n\tleft: 0;\n}\n\n.jfb-ssr-blocked__list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.jfb-ssr-blocked__list li {\n\tmargin-bottom: 6px;\n}\n\n.jfb-ssr-blocked__form {\n\tfont-weight: 600;\n}\n\n.jfb-ssr-blocked__meta {\n\tcolor: #646970;\n\tmargin: 0 6px;\n}\n\n.jfb-ssr-blocked__meta code {\n\tcolor: #dc2626;\n}\n\n.jfb-ssr-migration-wait {\n\tdisplay: flex;\n\talign-items: flex-start;\n\tgap: 12px;\n\tpadding: 16px 20px;\n\tbackground: #f0f6fc;\n\tborder: 1px solid #c3dcf1;\n\tborder-radius: 4px;\n}\n\n.jfb-ssr-migration-wait__spinner {\n\tflex: 0 0 auto;\n\twidth: 18px;\n\theight: 18px;\n\tmargin-top: 2px;\n\tborder: 2px solid #c3dcf1;\n\tborder-top-color: #2271b1;\n\tborder-radius: 50%;\n\tanimation: jfb-ssr-migration-wait-spin 0.8s linear infinite;\n}\n\n@keyframes jfb-ssr-migration-wait-spin {\n\tto {\n\t\ttransform: rotate( 360deg );\n\t}\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
`, "",{"version":3,"sources":["webpack://./../admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue"],"names":[],"mappings":";AA2HA;CACA,0BAAA;AACA","sourcesContent":["<template>\n\t<div>\n\t\t<cx-vui-switcher\n\t\t\tname=\"enable_user_journey\"\n\t\t\t:label=\"loading.enable_user_journey ? `${label.enable_user_journey} (loading...)` : label.enable_user_journey\"\n\t\t\t:description=\"help.enable_user_journey\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:value=\"storage.hasOwnProperty( 'enable_user_journey' ) ? storage.enable_user_journey : false\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'enable_user_journey', $event )\"\n\t\t></cx-vui-switcher>\n\n\t\t<template v-if=\"storage.enable_user_journey\">\n\t\t\t<cx-vui-select\n\t\t\t\tname=\"storage_type\"\n\t\t\t\tclass=\"user-journey-select\"\n\t\t\t\t:label=\"loading.storage_type ? `${label.storage_type} (loading...)` : label.storage_type\"\n\t\t\t\t:description=\"help.storage_type\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t\t:options-list=\"[\n\t\t\t\t\t{\n\t\t\t\t\t\tvalue: 'local',\n\t\t\t\t\t\tlabel: 'Local Storage'\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tvalue: 'session',\n\t\t\t\t\t\tlabel: 'Session Storage'\n\t\t\t\t\t}\n\t\t\t\t]\"\n\t\t\t\t:value=\"storage.hasOwnProperty( 'storage_type' ) ? storage.storage_type : 'local'\"\n\t\t\t\t:disabled=\"!storage.enable_user_journey || isLoading\"\n\t\t\t\t@input=\"changeVal( 'storage_type', $event )\"\n\t\t\t></cx-vui-select>\n\t\t\t<cx-vui-component-wrapper >\n\t\t\t\t<div class=\"cx-vui-component__label\">Please note!</div>\n\t\t\t\t<div><b>Session Storage:</b> The information is kept only while this tab or window is open. Reloading the page is fine, but as soon as you close the tab, the data disappears. Other tabs or windows of the site can’t see it. You can still get it back by pressing Ctrl + Shift + T (“Reopen Closed Tab”)</div>\n\t\t\t\t<div><b>Local Storage:</b> The information stays much longer—every tab or window of this site can use it, and it remains even after you close and reopen the browser, until you clear it yourself.</div>\n\t\t\t</cx-vui-component-wrapper>\n\n\t\t\t<cx-vui-select\n\t\t\t\tname=\"clear_after_submit\"\n\t\t\t\tclass=\"user-journey-select\"\n\t\t\t\t:label=\"loading.clear_after_submit ? `${label.clear_after_submit} (loading...)` : label.clear_after_submit\"\n\t\t\t\t:description=\"help.clear_after_submit\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t\t:options-list=\"[\n\t\t\t\t\t{\n\t\t\t\t\t\tvalue: 'always',\n\t\t\t\t\t\tlabel: 'After any submit (success or failure)'\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tvalue: 'success',\n\t\t\t\t\t\tlabel: 'After successful submit only'\n\t\t\t\t\t}\n\t\t\t\t]\"\n\t\t\t\t:value=\"storage.hasOwnProperty( 'clear_after_submit' ) ? storage.clear_after_submit : 'success'\"\n\t\t\t\t:disabled=\"!storage.enable_user_journey || isLoading\"\n\t\t\t\t@input=\"changeVal( 'clear_after_submit', $event )\"\n\t\t\t></cx-vui-select>\n\t\t</template>\n\t</div>\n</template>\n\n<script>\n\nimport {\n\thelp,\n\tlabel,\n} from './source';\n\nconst { SaveTabByAjax, i18n } = window.JetFBMixins;\n\nexport default {\n\tname: 'user-journey-tab',\n\tprops: {\n\t\tincoming: {\n\t\t\ttype: Object,\n\t\t\tdefault: () => ({}),\n\t\t},\n\t},\n\tmixins: [ SaveTabByAjax, i18n ],\n\tdata() {\n\t\treturn {\n\t\t\tlabel, help,\n\t\t\tstorage: JSON.parse( JSON.stringify( this.incoming ) ),\n\t\t\tisLoading: false,\n\t\t\tloading: {},\n\t\t};\n\t},\n\tcreated() {\n\t\tjfbEventBus.$on( 'request-state', this.onChangeState.bind( this ) );\n\t},\n\tmethods: {\n\t\tgetRequestOnSave() {\n\t\t\treturn {\n\t\t\t\tdata: { ...this.storage },\n\t\t\t};\n\t\t},\n\t\tonChangeState( { state, slug } ) {\n\t\t\tif ( 'user-journey-tab' !== slug ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif ( 'end' === state ) {\n\t\t\t\tthis.loading = {};\n\t\t\t}\n\n\t\t\tthis.$set( this, 'isLoading', state === 'begin' );\n\t\t},\n\t\tchangeVal( name, value ) {\n\t\t\tif ( this.isLoading ) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tthis.$set( this.storage, name, value );\n\t\t\tthis.$set( this.loading, name, true );\n\n\t\t\tthis.saveByAjax( this, this.$options.name );\n\t\t},\n\t},\n};\n\n</script>\n<style>\n.user-journey-select select.cx-vui-select {\n\tpadding: 6px 24px 6px 12px;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "../../node_modules/css-loader/dist/runtime/api.js"
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
(module) {

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

/***/ },

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
(module) {

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

/***/ },

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue"
/*!************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/IsPROIcon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/SettingsPage.vue"
/*!***************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/SettingsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue"
/*!******************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue"
/*!*****************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue"
/*!****************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue"
/*!******************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/captcha/turnstile/turnstile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue"
/*!****************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue"
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/sidebar/SettingsSideBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue"
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue"
/*!**********************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue"
/*!******************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue"
/*!**************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionsTab_vue_vue_type_template_id_9dc42de6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionsTab.vue?vue&type=template&id=9dc42de6&scoped=true */ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6&scoped=true");
/* harmony import */ var _OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionsTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js");
/* harmony import */ var _OptionsTab_vue_vue_type_style_index_0_id_9dc42de6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css */ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionsTab_vue_vue_type_template_id_9dc42de6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _OptionsTab_vue_vue_type_template_id_9dc42de6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9dc42de6",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/options/OptionsTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue"
/*!******************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue"
/*!*********************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhoneFieldTab_vue_vue_type_template_id_eb933480__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneFieldTab.vue?vue&type=template&id=eb933480 */ "./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=template&id=eb933480");
/* harmony import */ var _PhoneFieldTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneFieldTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PhoneFieldTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhoneFieldTab_vue_vue_type_template_id_eb933480__WEBPACK_IMPORTED_MODULE_0__.render,
  _PhoneFieldTab_vue_vue_type_template_id_eb933480__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue"
/*!*************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SsrCallbacksTab_vue_vue_type_template_id_17ab2388_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SsrCallbacksTab.vue?vue&type=template&id=17ab2388&scoped=true */ "./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=template&id=17ab2388&scoped=true");
/* harmony import */ var _SsrCallbacksTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SsrCallbacksTab.vue?vue&type=script&lang=js */ "./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=script&lang=js");
/* harmony import */ var _SsrCallbacksTab_vue_vue_type_style_index_0_id_17ab2388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css */ "./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SsrCallbacksTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SsrCallbacksTab_vue_vue_type_template_id_17ab2388_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SsrCallbacksTab_vue_vue_type_template_id_17ab2388_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "17ab2388",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue"
/*!***********************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js"
/*!************************************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js"
/*!***************************************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js"
/*!******************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./friendlyCaptcha.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js"
/*!*****************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reCAPTCHAv3.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js"
/*!****************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hCaptcha.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js"
/*!******************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./turnstile.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js"
/*!****************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js"
/*!**************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js"
/*!**************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaptchaTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js"
/*!**********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetResponseTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js"
/*!******************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailChimpTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js"
/*!**************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionsTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js"
/*!******************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsGateways.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=script&lang=js"
/*!*********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneFieldTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneFieldTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneFieldTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=script&lang=js"
/*!*************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SsrCallbacksTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js"
/*!***********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserJourneyTab.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/@wyw-in-js/webpack-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_wyw_in_js_webpack_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true"
/*!******************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_template_id_14baa230_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true");


/***/ },

/***/ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e"
/*!*********************************************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_template_id_4b43500e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=template&id=4b43500e */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e");


/***/ },

/***/ "./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e"
/*!************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_friendlyCaptcha_vue_vue_type_template_id_054f030e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./friendlyCaptcha.vue?vue&type=template&id=054f030e */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e");


/***/ },

/***/ "./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f"
/*!***********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reCAPTCHAv3_vue_vue_type_template_id_638ceb7f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reCAPTCHAv3.vue?vue&type=template&id=638ceb7f */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f");


/***/ },

/***/ "./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4"
/*!**********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4 ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hCaptcha_vue_vue_type_template_id_34567fa4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./hCaptcha.vue?vue&type=template&id=34567fa4 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4");


/***/ },

/***/ "./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38"
/*!************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38 ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_turnstile_vue_vue_type_template_id_5a9ffa38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./turnstile.vue?vue&type=template&id=5a9ffa38 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38");


/***/ },

/***/ "./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c"
/*!**********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaypalTab_vue_vue_type_template_id_8eff804c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaypalTab.vue?vue&type=template&id=8eff804c */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c");


/***/ },

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c"
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_template_id_4254b64c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=template&id=4254b64c */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c");


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55"
/*!********************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55 ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CaptchaTab_vue_vue_type_template_id_62b36e55__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CaptchaTab.vue?vue&type=template&id=62b36e55 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55");


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb"
/*!****************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GetResponseTab_vue_vue_type_template_id_054dbebb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GetResponseTab.vue?vue&type=template&id=054dbebb */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb");


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9"
/*!************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9 ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MailChimpTab_vue_vue_type_template_id_783c3dc9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailChimpTab.vue?vue&type=template&id=783c3dc9 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9");


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6&scoped=true"
/*!********************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6&scoped=true ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_template_id_9dc42de6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_template_id_9dc42de6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_template_id_9dc42de6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionsTab.vue?vue&type=template&id=9dc42de6&scoped=true */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6&scoped=true");


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1"
/*!************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1 ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsGateways_vue_vue_type_template_id_676966a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentsGateways.vue?vue&type=template&id=676966a1 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1");


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=template&id=eb933480"
/*!***************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=template&id=eb933480 ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneFieldTab_vue_vue_type_template_id_eb933480__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneFieldTab_vue_vue_type_template_id_eb933480__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneFieldTab_vue_vue_type_template_id_eb933480__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneFieldTab.vue?vue&type=template&id=eb933480 */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=template&id=eb933480");


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=template&id=17ab2388&scoped=true"
/*!*******************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=template&id=17ab2388&scoped=true ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_template_id_17ab2388_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_template_id_17ab2388_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_template_id_17ab2388_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SsrCallbacksTab.vue?vue&type=template&id=17ab2388&scoped=true */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=template&id=17ab2388&scoped=true");


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc"
/*!*****************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_template_id_0fb0c2fc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_template_id_0fb0c2fc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_template_id_0fb0c2fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserJourneyTab.vue?vue&type=template&id=0fb0c2fc */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc");


/***/ },

/***/ "./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss"
/*!************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsPage_vue_vue_type_style_index_0_id_4b43500e_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss"
/*!***********************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsSideBar_vue_vue_type_style_index_0_id_4254b64c_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css"
/*!********************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IsPROIcon_vue_vue_type_style_index_0_id_14baa230_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css"
/*!**********************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_style_index_0_id_9dc42de6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_style_index_0_id_9dc42de6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_style_index_0_id_9dc42de6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_style_index_0_id_9dc42de6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsTab_vue_vue_type_style_index_0_id_9dc42de6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css"
/*!*********************************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_style_index_0_id_17ab2388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_style_index_0_id_17ab2388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_style_index_0_id_17ab2388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_style_index_0_id_17ab2388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SsrCallbacksTab_vue_vue_type_style_index_0_id_17ab2388_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css"
/*!*******************************************************************************************************************!*\
  !*** ./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css ***!
  \*******************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserJourneyTab_vue_vue_type_style_index_0_id_0fb0c2fc_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true"
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=template&id=14baa230&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._v(_vm._s(_vm.__( 'Pro', 'jet-form-builder' )))])}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e"
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=template&id=4b43500e ***!
  \********************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e"
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/friendlyCaptcha/friendlyCaptcha.vue?vue&type=template&id=054f030e ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f"
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/google/reCAPTCHAv3.vue?vue&type=template&id=638ceb7f ***!
  \**********************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-input',{attrs:{"label":_vm.label.key,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.key),callback:function ($$v) {_vm.$set(_vm.storage, "key", $$v)},expression:"storage.key"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"label":_vm.label.secret,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.secret),callback:function ($$v) {_vm.$set(_vm.storage, "secret", $$v)},expression:"storage.secret"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"type":"number","min":0,"max":1,"step":0.1,"label":_vm.label.threshold,"description":_vm.help.threshold,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.threshold),callback:function ($$v) {_vm.$set(_vm.storage, "threshold", $$v)},expression:"storage.threshold"}}),_vm._v(" "),_c('p',{staticClass:"fb-description"},[_vm._v(_vm._s(_vm.help.apiPref)+" "),_c('a',{attrs:{"href":_vm.help.apiLink,"target":"_blank"}},[_vm._v(_vm._s(_vm.help.apiLinkLabel))])])],1)}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4"
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/hCaptcha/hCaptcha.vue?vue&type=template&id=34567fa4 ***!
  \*********************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38"
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/captcha/turnstile/turnstile.vue?vue&type=template&id=5a9ffa38 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c"
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/gateways/paypal/PaypalTab.vue?vue&type=template&id=8eff804c ***!
  \*********************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-input',{attrs:{"label":_vm.label.client_id,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.client_id),callback:function ($$v) {_vm.$set(_vm.storage, "client_id", $$v)},expression:"storage.client_id"}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"label":_vm.label.secret,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},model:{value:(_vm.storage.secret),callback:function ($$v) {_vm.$set(_vm.storage, "secret", $$v)},expression:"storage.secret"}})],1)}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c"
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=template&id=4254b64c ***!
  \*******************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SideBarBoxes',{scopedSlots:_vm._u([{key:"icon-help",fn:function(){return [_c('svg',{attrs:{"width":"14","height":"21","viewBox":"0 0 14 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M5.25 21H8.75V17.5H5.25V21ZM7 0C3.1325 0 0 3.1325 0 7H3.5C3.5 5.075 5.075 3.5 7 3.5C8.925 3.5 10.5 5.075 10.5 7C10.5 10.5 5.25 10.0625 5.25 15.75H8.75C8.75 11.8125 14 11.375 14 7C14 3.1325 10.8675 0 7 0Z","fill":"#7B7E81"}})])]},proxy:true},{key:"content-help",fn:function(box){return [_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_knowledge,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"14","height":"16","viewBox":"0 0 14 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M13.458 11.2552L13.458 1.4115C13.458 1.03064 13.1357 0.708374 12.7549 0.708374L3.14551 0.708374C1.59277 0.708374 0.333008 1.96814 0.333008 3.52087L0.333008 12.8959C0.333008 14.4486 1.59277 15.7084 3.14551 15.7084L12.7549 15.7084C13.1357 15.7084 13.458 15.4154 13.458 15.0052L13.458 14.5365C13.458 14.3314 13.3408 14.1263 13.1943 14.0092C13.0479 13.5404 13.0479 12.2513 13.1943 11.8119C13.3408 11.6947 13.458 11.4896 13.458 11.2552ZM4.08301 4.63416C4.08301 4.54626 4.1416 4.45837 4.25879 4.45837L10.4697 4.45837C10.5576 4.45837 10.6455 4.54626 10.6455 4.63416L10.6455 5.22009C10.6455 5.33728 10.5576 5.39587 10.4697 5.39587L4.25879 5.39587C4.1416 5.39587 4.08301 5.33728 4.08301 5.22009L4.08301 4.63416ZM4.08301 6.50916C4.08301 6.42127 4.1416 6.33337 4.25879 6.33337L10.4697 6.33337C10.5576 6.33337 10.6455 6.42127 10.6455 6.50916L10.6455 7.09509C10.6455 7.21228 10.5576 7.27087 10.4697 7.27087L4.25879 7.27087C4.1416 7.27087 4.08301 7.21228 4.08301 7.09509L4.08301 6.50916ZM11.4951 13.8334L3.14551 13.8334C2.61816 13.8334 2.20801 13.4232 2.20801 12.8959C2.20801 12.3978 2.61816 11.9584 3.14551 11.9584L11.4951 11.9584C11.4365 12.4857 11.4365 13.3353 11.4951 13.8334Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_knowledge))])])]),_vm._v(" "),_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_community,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.5913 8.04564C15.5913 3.87728 12.214 0.5 8.04564 0.5C3.87728 0.5 0.5 3.87728 0.5 8.04564C0.5 11.8185 3.23834 14.9523 6.85903 15.5L6.85903 10.2363L4.94219 10.2363L4.94219 8.04564L6.85903 8.04564L6.85903 6.40264C6.85903 4.51623 7.98479 3.45132 9.68864 3.45132C10.5406 3.45132 11.3925 3.60345 11.3925 3.60345L11.3925 5.45943L10.4493 5.45943C9.50609 5.45943 9.20183 6.03753 9.20183 6.64604L9.20183 8.04564L11.3012 8.04564L10.9665 10.2363L9.20183 10.2363L9.20183 15.5C12.8225 14.9523 15.5913 11.8185 15.5913 8.04564Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_community))])])]),_vm._v(" "),_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_support,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"15","height":"18","viewBox":"0 0 15 18","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M7.58333 0.666687C3.675 0.666687 0.5 3.84169 0.5 7.75002C0.5 11.6584 3.675 14.8334 7.58333 14.8334H8V17.3334C12.05 15.3834 14.6667 11.5 14.6667 7.75002C14.6667 3.84169 11.4917 0.666687 7.58333 0.666687ZM8.41667 12.75H6.75V11.0834H8.41667V12.75ZM8.41667 9.83335H6.75C6.75 7.12502 9.25 7.33335 9.25 5.66669C9.25 4.75002 8.5 4.00002 7.58333 4.00002C6.66667 4.00002 5.91667 4.75002 5.91667 5.66669H4.25C4.25 3.82502 5.74167 2.33335 7.58333 2.33335C9.425 2.33335 10.9167 3.82502 10.9167 5.66669C10.9167 7.75002 8.41667 7.95835 8.41667 9.83335Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_support))])])]),_vm._v(" "),_c('div',{staticClass:"help-center-link"},[_c('a',{attrs:{"href":box.link_git,"target":"_blank"}},[_c('div',{staticClass:"help-center-link-icon"},[_c('svg',{attrs:{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.976 0C5.86071 0.000265156 3.83214 0.840676 2.33641 2.33641C0.840676 3.83214 0.000265156 5.86071 0 7.976C0 11.498 2.3 14.483 5.431 15.56C5.823 15.609 5.969 15.364 5.969 15.168V13.798C3.768 14.288 3.279 12.722 3.279 12.722C2.936 11.792 2.398 11.547 2.398 11.547C1.664 11.058 2.446 11.058 2.446 11.058C3.229 11.107 3.67 11.89 3.67 11.89C4.404 13.113 5.529 12.77 5.97 12.575C6.018 12.037 6.263 11.695 6.459 11.499C4.697 11.303 2.838 10.618 2.838 7.535C2.838 6.655 3.131 5.969 3.67 5.382C3.62 5.235 3.327 4.404 3.768 3.327C3.768 3.327 4.453 3.131 5.969 4.159C6.605 3.963 7.291 3.914 7.976 3.914C8.661 3.914 9.346 4.012 9.982 4.159C11.499 3.132 12.184 3.327 12.184 3.327C12.624 4.404 12.33 5.235 12.281 5.431C12.8199 6.01808 13.1171 6.7871 13.113 7.584C13.113 10.667 11.253 11.303 9.493 11.499C9.786 11.743 10.031 12.232 10.031 12.966V15.168C10.031 15.364 10.177 15.608 10.569 15.56C12.155 15.0248 13.5327 14.0046 14.5073 12.6436C15.4818 11.2827 16.004 9.64989 16 7.976C15.951 3.572 12.38 0 7.976 0Z","fill":"#007CBA"}})])]),_vm._v(" "),_c('div',{staticClass:"help-center-link-label"},[_vm._v(_vm._s(box.label_git))])])])]}}])})}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55"
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/captcha/CaptchaTab.vue?vue&type=template&id=62b36e55 ***!
  \*******************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.captcha),function(tab,index){return _c('CxVuiCollapseMini',{key:tab.component.name,attrs:{"with-panel":"","icon":tab.icon,"label":_vm.getTabTitle( tab ),"disabled":tab.disabled,"initial-active":_vm.isActive( tab.component.name )},on:{"change":function($event){return _vm.onChangeActive( $event, tab.component.name )}}},[_c('keep-alive',[_c(tab.component,{ref:"captcha",refInFor:true,tag:"component",attrs:{"incoming":_vm.getIncomingCaptcha( tab.component.name )}})],1),_vm._v(" "),_c('cx-vui-button',{attrs:{"button-style":"accent","loading":_vm.loadingGateways[ tab.component.name ]},on:{"click":function($event){return _vm.onSaveGateway( index, tab.component.name )}}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("Save")])])],1)}),1)}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb"
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/getresponse/GetResponseTab.vue?vue&type=template&id=054dbebb ***!
  \***************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cx-vui-input',{attrs:{"label":_vm.label.api_key,"wrapper-css":[ 'equalwidth' ],"description":((_vm.help.apiPref) + " <a href=\"" + (_vm.help.apiLink) + "\" target=\"_blank\">" + (_vm.help.apiLinkLabel) + "</a>"),"size":'fullwidth'},model:{value:(_vm.api_key),callback:function ($$v) {_vm.api_key=$$v},expression:"api_key"}})}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9"
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/mailchimp/MailChimpTab.vue?vue&type=template&id=783c3dc9 ***!
  \***********************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cx-vui-input',{attrs:{"label":_vm.label.api_key,"wrapper-css":[ 'equalwidth' ],"description":((_vm.help.apiPref) + " <a href=\"" + (_vm.help.apiLink) + "\" target=\"_blank\">" + (_vm.help.apiLinkLabel) + "</a>"),"size":'fullwidth'},model:{value:(_vm.api_key),callback:function ($$v) {_vm.api_key=$$v},expression:"api_key"}})}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6&scoped=true"
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=template&id=9dc42de6&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('cx-vui-switcher',{attrs:{"name":"enable_dev_mode","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.enable_dev_mode ? ((_vm.label.enable_dev_mode) + " (loading...)") : _vm.label.enable_dev_mode,"description":_vm.help.enable_dev_mode,"value":_vm.storage.hasOwnProperty( 'enable_dev_mode' ) ? _vm.storage.enable_dev_mode : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'enable_dev_mode', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"clear_on_uninstall","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.clear_on_uninstall ? ((_vm.label.clear_on_uninstall) + " (loading...)") : _vm.label.clear_on_uninstall,"description":_vm.help.clear_on_uninstall,"value":_vm.storage.hasOwnProperty( 'clear_on_uninstall' ) ? _vm.storage.clear_on_uninstall : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'clear_on_uninstall', $event )}}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"form_records_access_capability","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":_vm.loading.form_records_access_capability ? ((_vm.label.form_records_access_capability) + " (loading...)") : _vm.label.form_records_access_capability,"description":_vm.help.form_records_access_capability,"value":_vm.storage.hasOwnProperty( 'form_records_access_capability' ) ? _vm.storage.form_records_access_capability : 'manage_options',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'form_records_access_capability', $event )}}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"manual_verification_capability","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":_vm.loading.manual_verification_capability ? ((_vm.label.manual_verification_capability) + " (loading...)") : _vm.label.manual_verification_capability,"description":_vm.help.manual_verification_capability,"value":_vm.storage.hasOwnProperty( 'manual_verification_capability' ) ? _vm.storage.manual_verification_capability : 'manage_options',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'manual_verification_capability', $event )}}}),_vm._v(" "),_c('cx-vui-select',{attrs:{"name":"ssr_validation_method","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":_vm.loading.ssr_validation_method ? ((_vm.label.ssr_validation_method) + " (loading...)") : _vm.label.ssr_validation_method,"description":_vm.help.ssr_validation_method,"value":_vm.storage.hasOwnProperty( 'ssr_validation_method' ) ? _vm.storage.ssr_validation_method : 'rest',"options-list":_vm.selectOptions,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'ssr_validation_method', $event )}}}),_vm._v(" "),_c('cx-vui-f-select',{attrs:{"name":"self_promotable_roles","label":_vm.loading.self_promotable_roles ? ((_vm.label.self_promotable_roles) + " (loading...)") : _vm.label.self_promotable_roles,"description":_vm.help.self_promotable_roles,"value":_vm.selectedSelfPromotableRoles,"options-list":_vm.availableRoles,"multiple":true,"disabled":_vm.isLoading,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},on:{"on-change":function($event){return _vm.changeSelfPromotableRoles( $event )}}}),_vm._v(" "),_c('cx-vui-component-wrapper',{attrs:{"label":_vm.__( 'Form Accessibility', 'jet-form-builder' ),"wrapper-css":[ 'equalwidth' ]}}),_vm._v(" "),_c('div',{staticClass:"cx-vui-inner-panel"},[_c('cx-vui-switcher',{attrs:{"name":"disable_next_button","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.disable_next_button ? ((_vm.label.disable_next_button) + " (loading...)") : _vm.label.disable_next_button,"description":_vm.help.disable_next_button,"value":_vm.storage.hasOwnProperty( 'disable_next_button' ) ? _vm.storage.disable_next_button : true,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'disable_next_button', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"scroll_on_next","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.scroll_on_next ? ((_vm.label.scroll_on_next) + " (loading...)") : _vm.label.scroll_on_next,"description":_vm.help.scroll_on_next,"value":_vm.storage.hasOwnProperty( 'scroll_on_next' ) ? _vm.storage.scroll_on_next : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'scroll_on_next', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"auto_focus","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.auto_focus ? ((_vm.label.auto_focus) + " (loading...)") : _vm.label.auto_focus,"description":_vm.help.auto_focus,"value":_vm.storage.hasOwnProperty( 'auto_focus' ) ? _vm.storage.auto_focus : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'auto_focus', $event )}}})],1),_vm._v(" "),_c('cx-vui-component-wrapper',{attrs:{"label":_vm.__( 'Form Request Args', 'jet-form-builder' ),"wrapper-css":[ 'equalwidth' ]}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"gfb_request_args_key","wrapper-css":[ 'equalwidth', _vm.errors.gfb_request_args_key ? 'jfb-has-error' : '' ],"size":'fullwidth',"label":'Request key',"description":'Unique form parameter (key)',"value":_vm.storage.hasOwnProperty( 'gfb_request_args_key' ) ? _vm.storage.gfb_request_args_key : '1111',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'gfb_request_args_key', $event )}}}),_vm._v(" "),(_vm.errors.gfb_request_args_key)?_c('div',{staticClass:"jfb-field-error"},[_vm._v("\n      "+_vm._s(_vm.errors.gfb_request_args_key)+"\n    ")]):_vm._e(),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"gfb_request_args_value","wrapper-css":[ 'equalwidth', _vm.errors.gfb_request_args_value ? 'jfb-has-error' : '' ],"size":'fullwidth',"label":'Request value',"description":'Unique form parameter (value)',"value":_vm.storage.hasOwnProperty( 'gfb_request_args_value' ) ? _vm.storage.gfb_request_args_value : '2222',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'gfb_request_args_value', $event )}}}),_vm._v(" "),(_vm.errors.gfb_request_args_value)?_c('div',{staticClass:"jfb-field-error"},[_vm._v("\n      "+_vm._s(_vm.errors.gfb_request_args_value)+"\n    ")]):_vm._e()],1)}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1"
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/payments-gateways/PaymentsGateways.vue?vue&type=template&id=676966a1 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('cx-vui-switcher',{attrs:{"name":"use_gateways","wrapper-css":[ 'equalwidth' ],"label":_vm.label.use_gateways,"description":_vm.help.use_gateways,"value":_vm.storage.use_gateways},on:{"input":function($event){return _vm.changeVal( 'use_gateways', $event )}}}),_vm._v(" "),(_vm.storage.use_gateways)?_c('cx-vui-switcher',{attrs:{"name":"enable_test_mode","wrapper-css":[ 'equalwidth' ],"description":_vm.help.enable_test_mode,"label":_vm.label.enable_test_mode,"value":_vm.storage.enable_test_mode},on:{"input":function($event){return _vm.changeVal( 'enable_test_mode', $event )}}}):_vm._e(),_vm._v(" "),(_vm.storage.use_gateways)?[_c('div',{staticClass:"cx-vui-inner-panel"},_vm._l((_vm.gateways),function(tab,index){return _c('CxVuiCollapseMini',{key:tab.component.name,attrs:{"with-panel":"","icon":tab.icon,"label":tab.title,"disabled":tab.disabled,"initial-active":_vm.isActive( tab.component.name )},on:{"change":function($event){return _vm.onChangeActive( $event, tab.component.name )}}},[_c('keep-alive',[_c(tab.component,{ref:"gateways",refInFor:true,tag:"component",attrs:{"incoming":_vm.getIncoming( tab.component.name )}})],1),_vm._v(" "),_c('cx-vui-button',{attrs:{"button-style":"accent","loading":_vm.loadingGateways[ tab.component.name ]},on:{"click":function($event){return _vm.onSaveGateway( index, tab.component.name )}}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v("Save")])])],1)}),1)]:_vm._e()],2)}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=template&id=eb933480"
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/phone-field/PhoneFieldTab.vue?vue&type=template&id=eb933480 ***!
  \**************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('cx-vui-input',{attrs:{"name":"ipinfo_token","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":_vm.loading.ipinfo_token ? ((_vm.label.ipinfo_token) + " (loading...)") : _vm.label.ipinfo_token,"description":_vm.help.ipinfo_token,"value":_vm.storage.hasOwnProperty( 'ipinfo_token' ) ? _vm.storage.ipinfo_token : '',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'ipinfo_token', $event )}}})],1)}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=template&id=17ab2388&scoped=true"
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=template&id=17ab2388&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.migrationInProgress)?_c('div',{staticClass:"jfb-ssr-migration-wait"},[_c('span',{staticClass:"jfb-ssr-migration-wait__spinner",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('div',[_c('strong',[_vm._v(_vm._s(_vm.__( 'Migration in progress…', 'jet-form-builder' )))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.help.migrationInProgress))])])]):[_c('cx-vui-component-wrapper',{attrs:{"label":_vm.loading.callbacks ? ((_vm.label.callbacks) + " (loading...)") : _vm.label.callbacks,"description":_vm.help.callbacks,"wrapper-css":[ 'equalwidth' ]}},[_c('textarea',{staticClass:"jfb-ssr-callbacks-textarea",attrs:{"rows":"10","disabled":_vm.isLoading},domProps:{"value":_vm.storage.callbacks},on:{"input":function($event){return _vm.onInput( $event.target.value )}}}),_vm._v(" "),_c('cx-vui-button',{attrs:{"button-style":"accent","disabled":_vm.isLoading || !_vm.hasUnsavedCallbacksChange},on:{"click":_vm.onSaveCallbacks}},[_c('span',{attrs:{"slot":"label"},slot:"label"},[_vm._v(_vm._s(_vm.__( 'Save', 'jet-form-builder' )))])])],1),_vm._v(" "),(_vm.hasRejected)?_c('div',{staticClass:"jfb-ssr-callbacks-rejected"},[_c('strong',[_vm._v(_vm._s(_vm.__( 'Not saved:', 'jet-form-builder' )))]),_vm._v(" "),_c('ul',{staticClass:"jfb-ssr-callbacks-rejected__list"},_vm._l((_vm.rejectedNames),function(name){return _c('li',{key:name},[_vm._v(_vm._s(name)+" — "+_vm._s(_vm.rejected[ name ]))])}),0)]):_vm._e(),_vm._v(" "),(_vm.blocked.length)?_c('cx-vui-component-wrapper',{attrs:{"label":((_vm.label.blocked) + " (" + (_vm.blocked.length) + ")"),"description":_vm.help.blocked,"wrapper-css":[ 'equalwidth' ]}},[_c('ul',{staticClass:"jfb-ssr-blocked__list"},_vm._l((_vm.blocked),function(usage,index){return _c('li',{key:index},[_c('span',{staticClass:"jfb-ssr-blocked__form"},[_vm._v(_vm._s(usage.form_title || ("#" + (usage.form_id))))]),_vm._v(" "),_c('span',{staticClass:"jfb-ssr-blocked__meta"},[_vm._v("\n\t\t\t\t\t\t("+_vm._s(_vm.__( 'field', 'jet-form-builder' ))+" \""+_vm._s(usage.field)+"\" → "),_c('code',[_vm._v(_vm._s(usage.name))]),_vm._v(")\n\t\t\t\t\t")]),_vm._v(" "),_c('a',{attrs:{"href":usage.edit_url,"target":"_blank","rel":"noopener noreferrer"}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.__( 'Edit form →', 'jet-form-builder' ))+"\n\t\t\t\t\t")])])}),0)]):_vm._e()]],2)}
var staticRenderFns = []
render._withStripped = true


/***/ },

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc"
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=template&id=0fb0c2fc ***!
  \****************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
/*!************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/SettingsPage.vue?vue&type=style&index=0&id=4b43500e&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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
if(false) // removed by dead control flow
{}

/***/ },

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss"
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/sidebar/SettingsSideBar.vue?vue&type=style&index=0&id=4254b64c&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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
if(false) // removed by dead control flow
{}

/***/ },

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/IsPROIcon.vue?vue&type=style&index=0&id=14baa230&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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
if(false) // removed by dead control flow
{}

/***/ },

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css"
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/options/OptionsTab.vue?vue&type=style&index=0&id=9dc42de6&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("70151215", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/ssr-callbacks/SsrCallbacksTab.vue?vue&type=style&index=0&id=17ab2388&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("0cd7501f", content, false, {});
// Hot Module Replacement
if(false) // removed by dead control flow
{}

/***/ },

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css"
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./admin/pages/jfb-settings/tabs/user-journey/UserJourneyTab.vue?vue&type=style&index=0&id=0fb0c2fc&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

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
if(false) // removed by dead control flow
{}

/***/ },

/***/ "../../node_modules/vue-style-loader/lib/addStylesClient.js"
/*!******************************************************************!*\
  !*** ../../node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "../../node_modules/vue-style-loader/lib/listToStyles.js"
/*!***************************************************************!*\
  !*** ../../node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

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
/******/ 			id: moduleId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyRkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2T0E7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBUUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXVCQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Bob25lLWZpZWxkL1Bob25lRmllbGRUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9zc3ItY2FsbGJhY2tzL1NzckNhbGxiYWNrc1RhYi52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2FkZG9ucy10YWJzLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9BZGRvbnMvYWRkcmVzc0F1dG9jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL2NvbnZlcnRraXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0FkZG9ucy9odWJzcG90LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9BZGRvbnMvbWFpbGVybGl0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL21vb3NlbmQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0dhdGV3YXlzL3N0cmlwZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9waG9uZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9waG9uZS1maWVsZC9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvc3NyLWNhbGxiYWNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9zc3ItY2FsbGJhY2tzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvdXNlci1qb3VybmV5L3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8xYTQyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWU/Mzc0MSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvSXNQUk9JY29uLnZ1ZT8wZTkxIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWU/OTRkNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9zc3ItY2FsbGJhY2tzL1NzckNhbGxiYWNrc1RhYi52dWU/OGU5MSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlP2Q1M2QiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9mcmllbmRseUNhcHRjaGEudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvaENhcHRjaGEvaENhcHRjaGEudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS90dXJuc3RpbGUudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGhvbmUtZmllbGQvUGhvbmVGaWVsZFRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvc3NyLWNhbGxiYWNrcy9Tc3JDYWxsYmFja3NUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/MmNmNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8xYWQzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9mcmllbmRseUNhcHRjaGEudnVlPzg5OTIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZ29vZ2xlL3JlQ0FQVENIQXYzLnZ1ZT8wOWMyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZT9mMWEzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS90dXJuc3RpbGUudnVlPzdhYWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlPzI1M2IiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZT8yOTY0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWU/ZGY2MCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWU/ZDQ3YyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZT81MmNkIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWU/YWFhMCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZT9kOWYwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Bob25lLWZpZWxkL1Bob25lRmllbGRUYWIudnVlP2IzNWMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvc3NyLWNhbGxiYWNrcy9Tc3JDYWxsYmFja3NUYWIudnVlP2Q2OTIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvdXNlci1qb3VybmV5L1VzZXJKb3VybmV5VGFiLnZ1ZT9jMDczIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlP2RkZTQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWU/MTBhYSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZT9lMGE5Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWU/MGZiNSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9oQ2FwdGNoYS52dWU/YzBkZCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvdHVybnN0aWxlLnZ1ZT80MGQ1Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZT81NmJiIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWU/YzA3YyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL0NhcHRjaGFUYWIudnVlPzc4MzUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlP2RkMGMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWU/YTM5MiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlPzA1NjUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWU/YzBlNyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9waG9uZS1maWVsZC9QaG9uZUZpZWxkVGFiLnZ1ZT83ZTFjIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Nzci1jYWxsYmFja3MvU3NyQ2FsbGJhY2tzVGFiLnZ1ZT83OTk5Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWU/ZGFjNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8wZWNhIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWU/ZGM0YyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvSXNQUk9JY29uLnZ1ZT9lYTE0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWU/NjhmMyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9zc3ItY2FsbGJhY2tzL1NzckNhbGxiYWNrc1RhYi52dWU/M2FiMSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlPzUwYjkiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/ZGJlNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT9kNzIwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9mcmllbmRseUNhcHRjaGEudnVlPzg2NzciLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZ29vZ2xlL3JlQ0FQVENIQXYzLnZ1ZT8yODI4Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZT9jYjE0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS90dXJuc3RpbGUudnVlPzFmOWMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlP2EyMDIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZT83OTNmIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWU/MDUzNyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWU/YWExYyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZT9jMDNiIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWU/MWYxNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZT83MDY0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Bob25lLWZpZWxkL1Bob25lRmllbGRUYWIudnVlP2QxNjAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvc3NyLWNhbGxiYWNrcy9Tc3JDYWxsYmFja3NUYWIudnVlP2I2MTQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvdXNlci1qb3VybmV5L1VzZXJKb3VybmV5VGFiLnZ1ZT8yYWFmIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlPzY4MjUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZT9jMmEwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlPzI1M2UiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZT9iMDU3Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Nzci1jYWxsYmFja3MvU3NyQ2FsbGJhY2tzVGFiLnZ1ZT9lNzRmIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWU/NmMyMCIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8c3Bhbj57eyBfXyggJ1BybycsICdqZXQtZm9ybS1idWlsZGVyJyApIH19PC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IHsgaTE4biB9ID0gSmV0RkJNaXhpbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0lzUFJPSWNvbicsXG5cdG1peGluczogWyBpMThuIF0sXG5cdHByb3BzOiB7XG5cdFx0aXNBY3RpdmU6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHR9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuc3BhbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XG5cdHBhZGRpbmc6IDAuMWVtIDAuM2VtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRsZXR0ZXItc3BhY2luZzogMDtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuXHQ8Rm9ybUJ1aWxkZXJQYWdlXG5cdFx0OnRpdGxlPVwiX18oICdKZXRGb3JtQnVpbGRlciBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJqZmItY29udGVudFwiPlxuXHRcdFx0PEFsZXJ0c0xpc3QvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1jb250ZW50LW1haW5cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1wYW5lbFwiPlxuXHRcdFx0XHRcdDxDeFZ1aVRhYnNcblx0XHRcdFx0XHRcdDppbi1wYW5lbD1cImZhbHNlXCJcblx0XHRcdFx0XHRcdDp2YWx1ZT1cImFjdGl2ZVRhYlNsdWdcIlxuXHRcdFx0XHRcdFx0bGF5b3V0PVwidmVydGljYWxcIlxuXHRcdFx0XHRcdFx0QGlucHV0PVwib25DaGFuZ2VBY3RpdmVUYWJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxDeFZ1aVRhYnNQYW5lbFxuXHRcdFx0XHRcdFx0XHR2LWZvcj1cIiggeyBkaXNwbGF5QnV0dG9uID0gdHJ1ZSwgLi4udGFiIH0sIGluZGV4ICkgaW4gdGFic1wiXG5cdFx0XHRcdFx0XHRcdDpuYW1lPVwidGFiLmNvbXBvbmVudC5uYW1lXCJcblx0XHRcdFx0XHRcdFx0OmxhYmVsPVwidGFiLnRpdGxlXCJcblx0XHRcdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXG5cdFx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cInRhYi5kaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdDppY29uPVwidGFiLmljb25cIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8dGVtcGxhdGUgI2RlZmF1bHQgdi1pZj1cInRhYi5jb21wb25lbnQucmVuZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGtlZXAtYWxpdmU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29tcG9uZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHYtYmluZDppcz1cInRhYi5jb21wb25lbnRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6aW5jb21pbmc9XCJnZXRJbmNvbWluZyggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6aW5uZXItc2x1Z3M9XCJhY3RpdmVUYWJJbm5lclNsdWdzIHx8IFtdXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPVwidGFiQ29tcG9uZW50c1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwva2VlcC1hbGl2ZT5cblx0XHRcdFx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0di1pZj1cImRpc3BsYXlCdXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0XHRcdFx0XHRcdDpsb2FkaW5nPVwibG9hZGluZ1RhYlsgdGFiLmNvbXBvbmVudC5uYW1lIF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwib25TYXZlVGFiKCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlNhdmU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvQ3hWdWlUYWJzUGFuZWw+XG5cdFx0XHRcdFx0PC9DeFZ1aVRhYnM+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8U2V0dGluZ3NTaWRlQmFyLz5cblx0XHQ8L2Rpdj5cblx0PC9Gb3JtQnVpbGRlclBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgY2FwdGNoYSBmcm9tICcuL3RhYnMvY2FwdGNoYSc7XG5pbXBvcnQgKiBhcyBtYWlsY2hpbXAgZnJvbSAnLi90YWJzL21haWxjaGltcCc7XG5pbXBvcnQgKiBhcyBnZXRSZXNwb25zZSBmcm9tICcuL3RhYnMvZ2V0cmVzcG9uc2UnO1xuaW1wb3J0ICogYXMgcGF5bWVudEdhdGV3YXlzIGZyb20gJy4vdGFicy9wYXltZW50cy1nYXRld2F5cyc7XG5pbXBvcnQgKiBhcyBvcHRpb25zIGZyb20gJy4vdGFicy9vcHRpb25zJztcbmltcG9ydCAqIGFzIHVzZXJKb3VybmV5IGZyb20gJy4vdGFicy91c2VyLWpvdXJuZXknO1xuaW1wb3J0ICogYXMgcGhvbmVGaWVsZCBmcm9tICcuL3RhYnMvcGhvbmUtZmllbGQnO1xuaW1wb3J0ICogYXMgc3NyQ2FsbGJhY2tzIGZyb20gJy4vdGFicy9zc3ItY2FsbGJhY2tzJztcbmltcG9ydCBTZXR0aW5nc1NpZGVCYXIgZnJvbSAnLi9zaWRlYmFyL1NldHRpbmdzU2lkZUJhcic7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzLCBkb0FjdGlvbiB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IHtcblx0U2F2ZVRhYkJ5QWpheCxcblx0R2V0SW5jb21pbmcsXG5cdGkxOG4sXG59ID0gd2luZG93LkpldEZCTWl4aW5zO1xuXG5jb25zdCB7XG5cdEN4VnVpVGFic1BhbmVsLFxuXHRDeFZ1aVRhYnMsXG5cdEFsZXJ0c0xpc3QsXG5cdEZvcm1CdWlsZGVyUGFnZSxcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbndpbmRvdy5qZmJFdmVudEJ1cyA9IHdpbmRvdy5qZmJFdmVudEJ1cyB8fCBuZXcgVnVlKCB7fSApO1xuXG5jb25zdCBzZXR0aW5nVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5zZXR0aW5ncy1wYWdlLnRhYnMnLCBbXG5cdG9wdGlvbnMsXG5cdHVzZXJKb3VybmV5LFxuXHRwYXltZW50R2F0ZXdheXMsXG5cdGNhcHRjaGEsXG5cdHBob25lRmllbGQsXG5cdG1haWxjaGltcCxcblx0Z2V0UmVzcG9uc2UsXG5cdHNzckNhbGxiYWNrcyxcbl0gKTtcblxuY29uc3QgY2hhbmdlSGFzaCA9IGhhc2ggPT4ge1xuXHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIGhhc2g7XG59O1xuXG5jb25zdCBnZXRBY3RpdmVUYWIgPSAoKSA9PiB7XG5cdGNvbnN0IGZpcnN0ID0gc2V0dGluZ1RhYnNbIDAgXS5jb21wb25lbnQubmFtZTtcblxuXHRpZiAoICEgd2luZG93LmxvY2F0aW9uLmhhc2ggKSB7XG5cdFx0Y2hhbmdlSGFzaCggZmlyc3QgKTtcblxuXHRcdHJldHVybiBbIGZpcnN0IF07XG5cdH1cblx0bGV0IFsgaGFzaCwgLi4ub3RoZXJzIF0gPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCAnIycsICcnICkuc3BsaXQoICdfXycgKTtcblx0bGV0IHRhYiA9IHNldHRpbmdUYWJzLmZpbmQoIHRhYiA9PiB0YWI/LmNvbXBvbmVudD8ubmFtZSA9PT0gaGFzaCApO1xuXG5cdGlmICggISB0YWIgKSB7XG5cdFx0Y2hhbmdlSGFzaCggZmlyc3QgKTtcblxuXHRcdHJldHVybiBbIGZpcnN0IF07XG5cdH1cblx0Y2hhbmdlSGFzaCggWyB0YWIuY29tcG9uZW50Lm5hbWUsIC4uLm90aGVycyBdLmpvaW4oICdfXycgKSApO1xuXG5cdHJldHVybiBbIHRhYi5jb21wb25lbnQubmFtZSwgb3RoZXJzIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdqZmItc2V0dGluZ3MnLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0QWxlcnRzTGlzdCxcblx0XHRDeFZ1aVRhYnNQYW5lbCxcblx0XHRDeFZ1aVRhYnMsXG5cdFx0U2V0dGluZ3NTaWRlQmFyLFxuXHRcdEZvcm1CdWlsZGVyUGFnZSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRjb25zdCBbIHRhYlNsdWcsIG90aGVycyBdID0gZ2V0QWN0aXZlVGFiKCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGl2ZVRhYlNsdWc6IHRhYlNsdWcsXG5cdFx0XHRhY3RpdmVUYWJJbm5lclNsdWdzOiBvdGhlcnMsXG5cdFx0XHR0YWJzOiBzZXR0aW5nVGFicyxcblx0XHRcdGxvYWRpbmdUYWI6IHt9LFxuXHRcdFx0aXNBY3RpdmVQcm86IGZhbHNlLFxuXHRcdH07XG5cdH0sXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZywgaTE4biBdLFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuaXNBY3RpdmVQcm8gPSB0aGlzLmdldEluY29taW5nKCAnaXNfYWN0aXZlJyApO1xuXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHByb3BzID0+IHtcblx0XHRcdGNvbnN0IHsgc3RhdGUsIHNsdWcgfSA9IHByb3BzO1xuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmdUYWIsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSApO1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ2FsZXJ0LWNsaWNrLXRoYW5rcycsICggeyBzZWxmIH0gKSA9PiB7XG5cdFx0XHRzZWxmLmNsb3NlQWxlcnQoKTtcblx0XHR9ICk7XG5cdFx0amZiRXZlbnRCdXMuJG9uKCAnYWxlcnQtY2xpY2stY2hlY2snLCAoIHsgc2VsZiB9ICkgPT4ge1xuXHRcdFx0c2VsZi5jbG9zZUFsZXJ0KCk7XG5cdFx0fSApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0b25DaGFuZ2VBY3RpdmVUYWIoIGFjdGl2ZVRhYiApIHtcblx0XHRcdGNvbnN0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKCBkb2N1bWVudC5VUkwgKTtcblx0XHRcdGN1cnJlbnRVcmwuaGFzaCA9ICcjJyArIGFjdGl2ZVRhYjtcblxuXHRcdFx0ZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGN1cnJlbnRVcmwuaHJlZjtcblxuXHRcdFx0amZiRXZlbnRCdXMuJGVtaXQoICdjaGFuZ2UtdGFiJywgeyBzbHVnOiBhY3RpdmVUYWIgfSApO1xuXHRcdH0sXG5cdFx0b25TYXZlVGFiKCBpbmRleFRhYiwgdGFiU2x1ZyApIHtcblx0XHRcdGNvbnN0IGN1cnJlbnRUYWIgPSB0aGlzLiRyZWZzLnRhYkNvbXBvbmVudHNbIGluZGV4VGFiIF07XG5cblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggY3VycmVudFRhYiwgdGFiU2x1ZyApO1xuXHRcdH0sXG5cdH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmpmYi1jb250ZW50IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDJlbTtcblx0bWFyZ2luLXRvcDogMWVtO1xuXG5cdCYtbWFpbiB7XG5cdFx0ZmxleDogMTtcblx0fVxufVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG5cdDxzZWN0aW9uPlxuXHRcdDxTaW1wbGVXcmFwcGVyQ29tcG9uZW50IGVsZW1lbnQtaWQ9XCJmcmllbmRseV9rZXlcIj5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgbGFiZWwua2V5IH19PC90ZW1wbGF0ZT5cblx0XHRcdDx0ZW1wbGF0ZSAjZGVzY3JpcHRpb24+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHR7eyBfXyhcblx0XHRcdFx0XHQnSXQgY2FuIGJlIGZvdW5kIG9uIHRoZSBwYWdlIGxpc3RpbmcgeW91ciBBcHBsaWNhdGlvbnMuIE9yIGZvbGxvdyB0aGlzJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgKyAnICcgfX1cblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RvY3MuZnJpZW5kbHljYXB0Y2hhLmNvbS8jL2luc3RhbGxhdGlvbj9pZD1fMS1nZW5lcmF0aW5nLWEtc2l0ZWtleVwiPlxuXHRcdFx0XHRcdFx0e3sgX18oICdndWlkZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XG5cdFx0XHRcdFx0PC9FeHRlcm5hbExpbms+XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHQ8dGVtcGxhdGUgI2RlZmF1bHQ+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGlkPVwiZnJpZW5kbHlfa2V5XCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdDwvU2ltcGxlV3JhcHBlckNvbXBvbmVudD5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHRlbGVtZW50LWlkPVwiZnJpZW5kbHlfc2VjcmV0XCJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJfXyhcblx0XHRcdFx0J0l0IGNhbiBiZSBmb3VuZCBvbiB0aGUgcGFnZSBsaXN0aW5nIHlvdXIgQVBJIGtleXMuJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGxhYmVsLFxufSBmcm9tICcuL3NvdXJjZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgU2ltcGxlV3JhcHBlckNvbXBvbmVudCxcblx0ICAgICAgRXh0ZXJuYWxMaW5rLFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICBpMThuLFxuICAgICAgfSA9IEpldEZCTWl4aW5zO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdmcmllbmRseScsXG5cdGNvbXBvbmVudHM6IHtcblx0XHRTaW1wbGVXcmFwcGVyQ29tcG9uZW50LFxuXHRcdEV4dGVybmFsTGluayxcblx0fSxcblx0bWl4aW5zOiBbIGkxOG4gXSxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLFxuXHRcdFx0c3RvcmFnZToge30sXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufTtcblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5rZXlcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdDxjeC12dWktaW5wdXRcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHQ6bWluPVwiMFwiXG5cdFx0XHQ6bWF4PVwiMVwiXG5cdFx0XHQ6c3RlcD1cIjAuMVwiXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC50aHJlc2hvbGRcIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC50aHJlc2hvbGRcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnRocmVzaG9sZFwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj57eyBoZWxwLmFwaVByZWYgfX0gPGEgOmhyZWY9XCJoZWxwLmFwaUxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBoZWxwLmFwaUxpbmtMYWJlbCB9fTwvYT5cblx0XHQ8L3A+XG5cdDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsLFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnZ29vZ2xlJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0c3RvcmFnZToge30sXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxzZWN0aW9uPlxuXHRcdDxTaW1wbGVXcmFwcGVyQ29tcG9uZW50IGVsZW1lbnQtaWQ9XCJoY2FwdGNoYV9rZXlcIj5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgbGFiZWwua2V5IH19PC90ZW1wbGF0ZT5cblx0XHRcdDx0ZW1wbGF0ZSAjZGVzY3JpcHRpb24+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHR7eyBfXyhcblx0XHRcdFx0XHQnWW91IGNhbiBmaW5kIGl0IG9uIHRoaXMgcGFnZSBpbiB0aGUgZmlyc3QgY29sdW1uIG9mIFNpdGVrZXkuJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgKyAnICcgfX1cblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5oY2FwdGNoYS5jb20vc2l0ZXNcIj5cblx0XHRcdFx0XHRcdHt7IF9fKCAnR28gdG8gdGhlIGRhc2hib2FyZCBvZiBzaXRlcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XG5cdFx0XHRcdFx0PC9FeHRlcm5hbExpbms+XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHQ8dGVtcGxhdGUgI2RlZmF1bHQ+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGlkPVwiaGNhcHRjaGFfa2V5XCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdDwvU2ltcGxlV3JhcHBlckNvbXBvbmVudD5cblx0XHQ8U2ltcGxlV3JhcHBlckNvbXBvbmVudCBlbGVtZW50LWlkPVwiaGNhcHRjaGFfc2VjcmV0XCI+XG5cdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPnt7IGxhYmVsLnNlY3JldCB9fTwvdGVtcGxhdGU+XG5cdFx0XHQ8dGVtcGxhdGUgI2Rlc2NyaXB0aW9uPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0e3sgX18oXG5cdFx0XHRcdFx0YFlvdSBjYW4gZmluZCBpdCBvbiB0aGUgc2V0dGluZ3MgcGFnZSxcbnRoaXMgd2lsbCBiZSB0aGUgZmlyc3QgZmllbGQuYCxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgKyAnICcgfX1cblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5oY2FwdGNoYS5jb20vc2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdHt7IF9fKCAnR28gdG8gdGhlIFNldHRpbmdzIHBhZ2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fVxuXHRcdFx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0PHRlbXBsYXRlICNkZWZhdWx0PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRpZD1cImhjYXB0Y2hhX3NlY3JldFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGNsYXNzPVwiY3gtdnVpLWlucHV0IHNpemUtZnVsbHdpZHRoXCJcblx0XHRcdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC90ZW1wbGF0ZT5cblx0XHQ8L1NpbXBsZVdyYXBwZXJDb21wb25lbnQ+XG5cdDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGxhYmVsLFxufSBmcm9tICcuL3NvdXJjZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgU2ltcGxlV3JhcHBlckNvbXBvbmVudCxcblx0ICAgICAgRXh0ZXJuYWxMaW5rLFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICBpMThuLFxuICAgICAgfSA9IEpldEZCTWl4aW5zO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdoY2FwdGNoYScsXG5cdGNvbXBvbmVudHM6IHtcblx0XHRTaW1wbGVXcmFwcGVyQ29tcG9uZW50LFxuXHRcdEV4dGVybmFsTGluayxcblx0fSxcblx0bWl4aW5zOiBbIGkxOG4gXSxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLFxuXHRcdFx0c3RvcmFnZToge30sXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufTtcblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHRlbGVtZW50LWlkPVwidHVybnN0aWxlX2tleVwiXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5rZXlcIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiX18oXG5cdFx0XHRcdCdSZWFkIHRoZSBoaW50IHRvIHRoZSBTZWNyZXQgS2V5IGZpZWxkJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uua2V5XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0ZWxlbWVudC1pZD1cInR1cm5zdGlsZV9zZWNyZXRcIlxuXHRcdFx0OmxhYmVsPVwibGFiZWwuc2VjcmV0XCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cIl9fKFxuXHRcdFx0XHQnWW91IGNhbiBmaW5kIGJvdGgga2V5cyBvbiB5b3VyIFR1cm5zdGlsZSBTaXRlIHNldHRpbmdzIHBhZ2UnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cblx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHR7eyBfXyggJ0RpZG5cXCd0IGZpbmQgaXQ/IEhlcmUgaXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyB9fVxuXHRcdFx0PEV4dGVybmFsTGlua1xuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmNsb3VkZmxhcmUuY29tL3R1cm5zdGlsZS9nZXQtc3RhcnRlZC8jZ2V0LWEtc2l0ZWtleS1hbmQtc2VjcmV0LWtleVwiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IF9fKCAnYSBtb3JlIGRldGFpbGVkIGRlc2NyaXB0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX1cblx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxuXHRcdDwvcD5cblx0PC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHtcblx0bGFiZWwsXG59IGZyb20gJy4vc291cmNlJztcblxuY29uc3Qge1xuXHQgICAgICBpMThuLFxuICAgICAgfSA9IEpldEZCTWl4aW5zO1xuXG5jb25zdCB7XG5cdCAgICAgIEV4dGVybmFsTGluayxcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3R1cm5zdGlsZScsXG5cdG1peGluczogW1xuXHRcdGkxOG4sXG5cdF0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRFeHRlcm5hbExpbmssXG5cdH0sXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IFsgT2JqZWN0LCBBcnJheSBdLFxuXHRcdFx0ZGVmYXVsdCgpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCxcblx0XHRcdHN0b3JhZ2U6IHt9LFxuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0aWYgKCAhT2JqZWN0LmtleXMoIHRoaXMuaW5jb21pbmcgKT8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcbn07XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PHNlY3Rpb24+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0OmxhYmVsPVwibGFiZWwuY2xpZW50X2lkXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5jbGllbnRfaWRcIlxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5zZWNyZXRcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnNlY3JldFwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHQ8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbCxcbn0gZnJvbSBcIi4vc291cmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3BheXBhbCcsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQoKSB7XG5cdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRzdG9yYWdlOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxTaWRlQmFyQm94ZXM+XG5cdFx0PHRlbXBsYXRlICNpY29uLWhlbHA+XG5cdFx0XHQ8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIyMVwiIHZpZXdCb3g9XCIwIDAgMTQgMjFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRkPVwiTTUuMjUgMjFIOC43NVYxNy41SDUuMjVWMjFaTTcgMEMzLjEzMjUgMCAwIDMuMTMyNSAwIDdIMy41QzMuNSA1LjA3NSA1LjA3NSAzLjUgNyAzLjVDOC45MjUgMy41IDEwLjUgNS4wNzUgMTAuNSA3QzEwLjUgMTAuNSA1LjI1IDEwLjA2MjUgNS4yNSAxNS43NUg4Ljc1QzguNzUgMTEuODEyNSAxNCAxMS4zNzUgMTQgN0MxNCAzLjEzMjUgMTAuODY3NSAwIDcgMFpcIlxuXHRcdFx0XHRcdGZpbGw9XCIjN0I3RTgxXCI+PC9wYXRoPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC90ZW1wbGF0ZT5cblx0XHQ8dGVtcGxhdGUgI2NvbnRlbnQtaGVscD1cImJveFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmtcIj5cblx0XHRcdFx0PGEgOmhyZWY9XCJib3gubGlua19rbm93bGVkZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1pY29uXCI+XG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTQgMTZcIiBmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0ZD1cIk0xMy40NTggMTEuMjU1MkwxMy40NTggMS40MTE1QzEzLjQ1OCAxLjAzMDY0IDEzLjEzNTcgMC43MDgzNzQgMTIuNzU0OSAwLjcwODM3NEwzLjE0NTUxIDAuNzA4Mzc0QzEuNTkyNzcgMC43MDgzNzQgMC4zMzMwMDggMS45NjgxNCAwLjMzMzAwOCAzLjUyMDg3TDAuMzMzMDA4IDEyLjg5NTlDMC4zMzMwMDggMTQuNDQ4NiAxLjU5Mjc3IDE1LjcwODQgMy4xNDU1MSAxNS43MDg0TDEyLjc1NDkgMTUuNzA4NEMxMy4xMzU3IDE1LjcwODQgMTMuNDU4IDE1LjQxNTQgMTMuNDU4IDE1LjAwNTJMMTMuNDU4IDE0LjUzNjVDMTMuNDU4IDE0LjMzMTQgMTMuMzQwOCAxNC4xMjYzIDEzLjE5NDMgMTQuMDA5MkMxMy4wNDc5IDEzLjU0MDQgMTMuMDQ3OSAxMi4yNTEzIDEzLjE5NDMgMTEuODExOUMxMy4zNDA4IDExLjY5NDcgMTMuNDU4IDExLjQ4OTYgMTMuNDU4IDExLjI1NTJaTTQuMDgzMDEgNC42MzQxNkM0LjA4MzAxIDQuNTQ2MjYgNC4xNDE2IDQuNDU4MzcgNC4yNTg3OSA0LjQ1ODM3TDEwLjQ2OTcgNC40NTgzN0MxMC41NTc2IDQuNDU4MzcgMTAuNjQ1NSA0LjU0NjI2IDEwLjY0NTUgNC42MzQxNkwxMC42NDU1IDUuMjIwMDlDMTAuNjQ1NSA1LjMzNzI4IDEwLjU1NzYgNS4zOTU4NyAxMC40Njk3IDUuMzk1ODdMNC4yNTg3OSA1LjM5NTg3QzQuMTQxNiA1LjM5NTg3IDQuMDgzMDEgNS4zMzcyOCA0LjA4MzAxIDUuMjIwMDlMNC4wODMwMSA0LjYzNDE2Wk00LjA4MzAxIDYuNTA5MTZDNC4wODMwMSA2LjQyMTI3IDQuMTQxNiA2LjMzMzM3IDQuMjU4NzkgNi4zMzMzN0wxMC40Njk3IDYuMzMzMzdDMTAuNTU3NiA2LjMzMzM3IDEwLjY0NTUgNi40MjEyNyAxMC42NDU1IDYuNTA5MTZMMTAuNjQ1NSA3LjA5NTA5QzEwLjY0NTUgNy4yMTIyOCAxMC41NTc2IDcuMjcwODcgMTAuNDY5NyA3LjI3MDg3TDQuMjU4NzkgNy4yNzA4N0M0LjE0MTYgNy4yNzA4NyA0LjA4MzAxIDcuMjEyMjggNC4wODMwMSA3LjA5NTA5TDQuMDgzMDEgNi41MDkxNlpNMTEuNDk1MSAxMy44MzM0TDMuMTQ1NTEgMTMuODMzNEMyLjYxODE2IDEzLjgzMzQgMi4yMDgwMSAxMy40MjMyIDIuMjA4MDEgMTIuODk1OUMyLjIwODAxIDEyLjM5NzggMi42MTgxNiAxMS45NTg0IDMuMTQ1NTEgMTEuOTU4NEwxMS40OTUxIDExLjk1ODRDMTEuNDM2NSAxMi40ODU3IDExLjQzNjUgMTMuMzM1MyAxMS40OTUxIDEzLjgzMzRaXCJcblx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCI+e3sgYm94LmxhYmVsX2tub3dsZWRnZSB9fTwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rXCI+XG5cdFx0XHRcdDxhIDpocmVmPVwiYm94LmxpbmtfY29tbXVuaXR5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstaWNvblwiPlxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHQgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTUuNTkxMyA4LjA0NTY0QzE1LjU5MTMgMy44NzcyOCAxMi4yMTQgMC41IDguMDQ1NjQgMC41QzMuODc3MjggMC41IDAuNSAzLjg3NzI4IDAuNSA4LjA0NTY0QzAuNSAxMS44MTg1IDMuMjM4MzQgMTQuOTUyMyA2Ljg1OTAzIDE1LjVMNi44NTkwMyAxMC4yMzYzTDQuOTQyMTkgMTAuMjM2M0w0Ljk0MjE5IDguMDQ1NjRMNi44NTkwMyA4LjA0NTY0TDYuODU5MDMgNi40MDI2NEM2Ljg1OTAzIDQuNTE2MjMgNy45ODQ3OSAzLjQ1MTMyIDkuNjg4NjQgMy40NTEzMkMxMC41NDA2IDMuNDUxMzIgMTEuMzkyNSAzLjYwMzQ1IDExLjM5MjUgMy42MDM0NUwxMS4zOTI1IDUuNDU5NDNMMTAuNDQ5MyA1LjQ1OTQzQzkuNTA2MDkgNS40NTk0MyA5LjIwMTgzIDYuMDM3NTMgOS4yMDE4MyA2LjY0NjA0TDkuMjAxODMgOC4wNDU2NEwxMS4zMDEyIDguMDQ1NjRMMTAuOTY2NSAxMC4yMzYzTDkuMjAxODMgMTAuMjM2M0w5LjIwMTgzIDE1LjVDMTIuODIyNSAxNC45NTIzIDE1LjU5MTMgMTEuODE4NSAxNS41OTEzIDguMDQ1NjRaXCJcblx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCI+e3sgYm94LmxhYmVsX2NvbW11bml0eSB9fTwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rXCI+XG5cdFx0XHRcdDxhIDpocmVmPVwiYm94Lmxpbmtfc3VwcG9ydFwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWljb25cIj5cblx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxNSAxOFwiIGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTcuNTgzMzMgMC42NjY2ODdDMy42NzUgMC42NjY2ODcgMC41IDMuODQxNjkgMC41IDcuNzUwMDJDMC41IDExLjY1ODQgMy42NzUgMTQuODMzNCA3LjU4MzMzIDE0LjgzMzRIOFYxNy4zMzM0QzEyLjA1IDE1LjM4MzQgMTQuNjY2NyAxMS41IDE0LjY2NjcgNy43NTAwMkMxNC42NjY3IDMuODQxNjkgMTEuNDkxNyAwLjY2NjY4NyA3LjU4MzMzIDAuNjY2Njg3Wk04LjQxNjY3IDEyLjc1SDYuNzVWMTEuMDgzNEg4LjQxNjY3VjEyLjc1Wk04LjQxNjY3IDkuODMzMzVINi43NUM2Ljc1IDcuMTI1MDIgOS4yNSA3LjMzMzM1IDkuMjUgNS42NjY2OUM5LjI1IDQuNzUwMDIgOC41IDQuMDAwMDIgNy41ODMzMyA0LjAwMDAyQzYuNjY2NjcgNC4wMDAwMiA1LjkxNjY3IDQuNzUwMDIgNS45MTY2NyA1LjY2NjY5SDQuMjVDNC4yNSAzLjgyNTAyIDUuNzQxNjcgMi4zMzMzNSA3LjU4MzMzIDIuMzMzMzVDOS40MjUgMi4zMzMzNSAxMC45MTY3IDMuODI1MDIgMTAuOTE2NyA1LjY2NjY5QzEwLjkxNjcgNy43NTAwMiA4LjQxNjY3IDcuOTU4MzUgOC40MTY2NyA5LjgzMzM1WlwiXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiMwMDdDQkFcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1sYWJlbFwiPnt7IGJveC5sYWJlbF9zdXBwb3J0IH19PC9kaXY+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmtcIj5cblx0XHRcdFx0PGEgOmhyZWY9XCJib3gubGlua19naXRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1pY29uXCI+XG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCJcblx0XHRcdFx0XHRcdFx0XHQgIGQ9XCJNNy45NzYgMEM1Ljg2MDcxIDAuMDAwMjY1MTU2IDMuODMyMTQgMC44NDA2NzYgMi4zMzY0MSAyLjMzNjQxQzAuODQwNjc2IDMuODMyMTQgMC4wMDAyNjUxNTYgNS44NjA3MSAwIDcuOTc2QzAgMTEuNDk4IDIuMyAxNC40ODMgNS40MzEgMTUuNTZDNS44MjMgMTUuNjA5IDUuOTY5IDE1LjM2NCA1Ljk2OSAxNS4xNjhWMTMuNzk4QzMuNzY4IDE0LjI4OCAzLjI3OSAxMi43MjIgMy4yNzkgMTIuNzIyQzIuOTM2IDExLjc5MiAyLjM5OCAxMS41NDcgMi4zOTggMTEuNTQ3QzEuNjY0IDExLjA1OCAyLjQ0NiAxMS4wNTggMi40NDYgMTEuMDU4QzMuMjI5IDExLjEwNyAzLjY3IDExLjg5IDMuNjcgMTEuODlDNC40MDQgMTMuMTEzIDUuNTI5IDEyLjc3IDUuOTcgMTIuNTc1QzYuMDE4IDEyLjAzNyA2LjI2MyAxMS42OTUgNi40NTkgMTEuNDk5QzQuNjk3IDExLjMwMyAyLjgzOCAxMC42MTggMi44MzggNy41MzVDMi44MzggNi42NTUgMy4xMzEgNS45NjkgMy42NyA1LjM4MkMzLjYyIDUuMjM1IDMuMzI3IDQuNDA0IDMuNzY4IDMuMzI3QzMuNzY4IDMuMzI3IDQuNDUzIDMuMTMxIDUuOTY5IDQuMTU5QzYuNjA1IDMuOTYzIDcuMjkxIDMuOTE0IDcuOTc2IDMuOTE0QzguNjYxIDMuOTE0IDkuMzQ2IDQuMDEyIDkuOTgyIDQuMTU5QzExLjQ5OSAzLjEzMiAxMi4xODQgMy4zMjcgMTIuMTg0IDMuMzI3QzEyLjYyNCA0LjQwNCAxMi4zMyA1LjIzNSAxMi4yODEgNS40MzFDMTIuODE5OSA2LjAxODA4IDEzLjExNzEgNi43ODcxIDEzLjExMyA3LjU4NEMxMy4xMTMgMTAuNjY3IDExLjI1MyAxMS4zMDMgOS40OTMgMTEuNDk5QzkuNzg2IDExLjc0MyAxMC4wMzEgMTIuMjMyIDEwLjAzMSAxMi45NjZWMTUuMTY4QzEwLjAzMSAxNS4zNjQgMTAuMTc3IDE1LjYwOCAxMC41NjkgMTUuNTZDMTIuMTU1IDE1LjAyNDggMTMuNTMyNyAxNC4wMDQ2IDE0LjUwNzMgMTIuNjQzNkMxNS40ODE4IDExLjI4MjcgMTYuMDA0IDkuNjQ5ODkgMTYgNy45NzZDMTUuOTUxIDMuNTcyIDEyLjM4IDAgNy45NzYgMFpcIlxuXHRcdFx0XHRcdFx0XHRcdCAgZmlsbD1cIiMwMDdDQkFcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1sYWJlbFwiPnt7IGJveC5sYWJlbF9naXQgfX08L2Rpdj5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC90ZW1wbGF0ZT5cblx0PC9TaWRlQmFyQm94ZXM+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuY29uc3QgeyBTaWRlQmFyQm94ZXMgfSA9IEpldEZCQ29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnU2V0dGluZ3NTaWRlQmFyJyxcblx0Y29tcG9uZW50czogeyBTaWRlQmFyQm94ZXMgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2Uge1xuXG5cdCZfX2Jhbm5lci51c2VmdWwge1xuXHRcdHBhZGRpbmc6IDIwcHggMzBweDtcblx0fVxuXG5cdCZfX3BhbmVsLmhlbHAge1xuXHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAvIDIpO1xuXHRcdH1cblxuXHRcdC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLWNvbnRlbnQge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNEQ0RDREQ7XG5cdFx0XHRwYWRkaW5nLXRvcDogMjNweDtcblx0XHR9XG5cblx0XHQuaGVscC1jZW50ZXItbGluayB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjJweDtcblxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdH1cblxuXHRcdFx0YSB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdFx0Y29sb3I6ICMwMDdDQkE7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRjb2xvcjogIzA2NkVBMjtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5oZWxwLWNlbnRlci1saW5rLWljb24ge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMjhweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8Q3hWdWlDb2xsYXBzZU1pbmlcblx0XHRcdHdpdGgtcGFuZWxcblx0XHRcdHYtZm9yPVwiKCB0YWIsIGluZGV4ICkgaW4gY2FwdGNoYVwiXG5cdFx0XHQ6aWNvbj1cInRhYi5pY29uXCJcblx0XHRcdDpsYWJlbD1cImdldFRhYlRpdGxlKCB0YWIgKVwiXG5cdFx0XHQ6a2V5PVwidGFiLmNvbXBvbmVudC5uYW1lXCJcblx0XHRcdDpkaXNhYmxlZD1cInRhYi5kaXNhYmxlZFwiXG5cdFx0XHQ6aW5pdGlhbC1hY3RpdmU9XCJpc0FjdGl2ZSggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0QGNoYW5nZT1cIm9uQ2hhbmdlQWN0aXZlKCAkZXZlbnQsIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHQ+XG5cdFx0XHQ8a2VlcC1hbGl2ZT5cblx0XHRcdFx0PGNvbXBvbmVudFxuXHRcdFx0XHRcdHYtYmluZDppcz1cInRhYi5jb21wb25lbnRcIlxuXHRcdFx0XHRcdHJlZj1cImNhcHRjaGFcIlxuXHRcdFx0XHRcdDppbmNvbWluZz1cImdldEluY29taW5nQ2FwdGNoYSggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9rZWVwLWFsaXZlPlxuXHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0OmxvYWRpbmc9XCJsb2FkaW5nR2F0ZXdheXNbIHRhYi5jb21wb25lbnQubmFtZSBdXCJcblx0XHRcdFx0QGNsaWNrPVwib25TYXZlR2F0ZXdheSggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHRcdD5cblx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+U2F2ZTwvc3Bhbj5cblx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHQ8L0N4VnVpQ29sbGFwc2VNaW5pPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCByZUNBUFRDSEF2MyBmcm9tICcuLi8uLi9jYXB0Y2hhL2dvb2dsZSc7XG5pbXBvcnQgaENhcHRjaGEgZnJvbSAnLi4vLi4vY2FwdGNoYS9oQ2FwdGNoYSc7XG5pbXBvcnQgZnJpZW5kbHlDYXB0Y2hhIGZyb20gJy4uLy4uL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhJztcbmltcG9ydCB0dXJuc3RpbGUgZnJvbSAnLi4vLi4vY2FwdGNoYS90dXJuc3RpbGUnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcgfSA9IHdpbmRvdy5KZXRGQk1peGlucztcbmNvbnN0IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSAgICAgICAgICA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHM7XG5cbndpbmRvdy5qZmJFdmVudEJ1cyA9IHdpbmRvdy5qZmJFdmVudEJ1cyB8fCBuZXcgVnVlKCB7fSApO1xuXG5jb25zdCBjYXB0Y2hhVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5jYXB0Y2hhJywgW1xuXHRyZUNBUFRDSEF2Myxcblx0aENhcHRjaGEsXG5cdGZyaWVuZGx5Q2FwdGNoYSxcblx0dHVybnN0aWxlLFxuXSApO1xuXG5sZXQgcmVxdWVzdEZ1bmMgPSAoKSA9PiB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdjYXB0Y2hhLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdFx0aW5uZXJTbHVnczogQXJyYXksXG5cdH0sXG5cdGNvbXBvbmVudHM6IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSxcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXggXSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2FwdGNoYTogY2FwdGNoYVRhYnMsXG5cdFx0XHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXG5cdFx0XHRzZXR0aW5nczogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoXG5cdFx0XHRcdHdpbmRvdy5KZXRGQlBhZ2VDb25maWdbICdjYXB0Y2hhLXRhYi1jb25maWcnIF0sXG5cdFx0XHQpICksXG5cdFx0XHRhY3RpdmVHYXRld2F5c1RhYnM6IFtdLFxuXHRcdFx0bG9hZGluZ0dhdGV3YXlzOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nR2F0ZXdheXMsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSApO1xuXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAnY2hhbmdlLXRhYicsIChcblx0XHRcdGZ1bmN0aW9uICggeyBzbHVnIH0gKSB7XG5cdFx0XHRcdGlmICggc2x1ZyAhPT0gdGhpcy4kb3B0aW9ucy5uYW1lICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgWyB0aGlzLiRvcHRpb25zLm5hbWUsIC4uLnRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzIF0uam9pbiggJ19fJyApO1xuXHRcdFx0fVxuXHRcdCkuYmluZCggdGhpcyApICk7XG5cblx0XHR0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyA9IHRoaXMuaW5uZXJTbHVncztcblxuXHRcdHJlcXVlc3RGdW5jID0gXy5kZWJvdW5jZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcblx0XHR9LCAxMDAwICk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRJbmNvbWluZ0NhcHRjaGEoIHNsdWcgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbmNvbWluZz8uWyBzbHVnIF0gPz8ge307XG5cdFx0fSxcblx0XHRnZXRUYWJUaXRsZSggdGFiICkge1xuXHRcdFx0Y29uc3QgeyB0aXRsZSB9ID0gdGFiO1xuXG5cdFx0XHRpZiAoIHRpdGxlPy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiB0aXRsZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgeyBuYW1lIH0gPSB0YWIuY29tcG9uZW50O1xuXHRcdFx0Y29uc3QgaXRlbSAgICAgPSB0aGlzLnNldHRpbmdzLmZpbmQoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgPT09IG5hbWUgKTtcblxuXHRcdFx0cmV0dXJuIGl0ZW0/LmxhYmVsIHx8ICdVbmRlZmluZWQgY2FwdGNoYSB0aXRsZSc7XG5cdFx0fSxcblx0XHRvbkNoYW5nZUFjdGl2ZSggaXNBY3RpdmUsIHRhYk5hbWUgKSB7XG5cdFx0XHRsZXQgWyBoYXNoLCAuLi5vdGhlcnMgXSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoICcjJywgJycgKS5zcGxpdCggJ19fJyApO1xuXG5cdFx0XHRpZiAoICFpc0FjdGl2ZSApIHtcblx0XHRcdFx0b3RoZXJzID0gb3RoZXJzLmZpbHRlciggZ2F0ZXdheVRhYiA9PiAoXG5cdFx0XHRcdFx0dGFiTmFtZSAhPT0gZ2F0ZXdheVRhYiB8fCBpc0FjdGl2ZVxuXHRcdFx0XHQpICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0b3RoZXJzLnB1c2goIHRhYk5hbWUgKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2hhbmdlR2F0ZXdheXNUYWJzKCBvdGhlcnMgKTtcblxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBbIHRoaXMuJG9wdGlvbnMubmFtZSwgLi4ub3RoZXJzIF0uam9pbiggJ19fJyApO1xuXHRcdH0sXG5cdFx0Y2hhbmdlR2F0ZXdheXNUYWJzKCB0YWJzICkge1xuXHRcdFx0dGhpcy5hY3RpdmVHYXRld2F5c1RhYnMgPSB0YWJzO1xuXHRcdH0sXG5cdFx0aXNBY3RpdmUoIHRhYk5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gQm9vbGVhbiggdGhpcy5hY3RpdmVHYXRld2F5c1RhYnM/LmluY2x1ZGVzKCB0YWJOYW1lICkgKTtcblx0XHR9LFxuXHRcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcblxuXHRcdFx0cmVxdWVzdEZ1bmMoKTtcblx0XHR9LFxuXHRcdG9uU2F2ZUdhdGV3YXkoIGluZGV4VGFiLCB0YWJTbHVnICkge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuJHJlZnMuY2FwdGNoYVsgaW5kZXhUYWIgXTtcblxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50LCB0YWJTbHVnICk7XG5cdFx0fSxcblx0XHRnZXRBamF4T2JqZWN0KCBjdXJyZW50VGFiLCB0YWJTbHVnICkge1xuXHRcdFx0Y29uc3QgYWpheFJlcXVlc3QgPSB7XG5cdFx0XHRcdHVybDogd2luZG93LmFqYXh1cmwsXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBjdXJyZW50VGFiLmdldFJlcXVlc3RPblNhdmUoKTtcblxuXHRcdFx0YWpheFJlcXVlc3QuZGF0YSA9IHtcblx0XHRcdFx0YWN0aW9uOiBgamV0X2ZiX3NhdmVfdGFiX18keyB0aGlzLiRvcHRpb25zLm5hbWUgfWAsXG5cdFx0XHRcdC4uLihcblx0XHRcdFx0XHR0YWJTbHVnID09PSB0aGlzLiRvcHRpb25zLm5hbWUgPyBjdXJyZW50LmRhdGEgOiB7XG5cdFx0XHRcdFx0XHRbIHRhYlNsdWcgXTogY3VycmVudC5kYXRhLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KSxcblx0XHRcdH07XG5cblx0XHRcdGlmICggd2luZG93Py5KZXRGQlBhZ2VDb25maWdQYWNrYWdlPy5ub25jZSApIHtcblx0XHRcdFx0YWpheFJlcXVlc3QuZGF0YS5fbm9uY2UgPSB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnUGFja2FnZS5ub25jZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGFqYXhSZXF1ZXN0O1xuXHRcdH0sXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8Y3gtdnVpLWlucHV0XG5cdFx0OmxhYmVsPVwibGFiZWwuYXBpX2tleVwiXG5cdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0OmRlc2NyaXB0aW9uPSdgJHsgaGVscC5hcGlQcmVmIH0gPGEgaHJlZj1cIiR7IGhlbHAuYXBpTGluayB9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHsgaGVscC5hcGlMaW5rTGFiZWwgfTwvYT5gJ1xuXHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdHYtbW9kZWw9XCJhcGlfa2V5XCJcblx0Lz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsXG59IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdnZXQtcmVzcG9uc2UtdGFiJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDoge30sXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRhcGlfa2V5OiAnJyxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuYXBpX2tleSA9IHRoaXMuaW5jb21pbmcuYXBpX2tleSB8fCAnJ1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhcGlfa2V5OiB0aGlzLmFwaV9rZXksXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGN4LXZ1aS1pbnB1dFxuXHRcdDpsYWJlbD1cImxhYmVsLmFwaV9rZXlcIlxuXHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdDpkZXNjcmlwdGlvbj0nYCR7IGhlbHAuYXBpUHJlZiB9IDxhIGhyZWY9XCIkeyBoZWxwLmFwaUxpbmsgfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7IGhlbHAuYXBpTGlua0xhYmVsIH08L2E+YCdcblx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHR2LW1vZGVsPVwiYXBpX2tleVwiXG5cdC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnbWFpbGNoaW1wLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0YXBpX2tleTogJycsXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLmFwaV9rZXkgPSB0aGlzLmluY29taW5nLmFwaV9rZXkgfHwgJydcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YXBpX2tleTogdGhpcy5hcGlfa2V5LFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxuXHRcdFx0bmFtZT1cImVuYWJsZV9kZXZfbW9kZVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpsYWJlbD1cImxvYWRpbmcuZW5hYmxlX2Rldl9tb2RlID8gYCR7bGFiZWwuZW5hYmxlX2Rldl9tb2RlfSAobG9hZGluZy4uLilgIDogbGFiZWwuZW5hYmxlX2Rldl9tb2RlXCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuZW5hYmxlX2Rldl9tb2RlXCJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdlbmFibGVfZGV2X21vZGUnICkgPyBzdG9yYWdlLmVuYWJsZV9kZXZfbW9kZSA6IGZhbHNlXCJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdlbmFibGVfZGV2X21vZGUnLCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdDxjeC12dWktc3dpdGNoZXJcblx0XHRcdG5hbWU9XCJjbGVhcl9vbl91bmluc3RhbGxcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmNsZWFyX29uX3VuaW5zdGFsbCA/IGAke2xhYmVsLmNsZWFyX29uX3VuaW5zdGFsbH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmNsZWFyX29uX3VuaW5zdGFsbFwiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmNsZWFyX29uX3VuaW5zdGFsbFwiXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnY2xlYXJfb25fdW5pbnN0YWxsJyApID8gc3RvcmFnZS5jbGVhcl9vbl91bmluc3RhbGwgOiBmYWxzZVwiXG5cdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxuXHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnY2xlYXJfb25fdW5pbnN0YWxsJywgJGV2ZW50IClcIlxuXHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHRuYW1lPVwiZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSA/IGAke2xhYmVsLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eVwiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eVwiXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5JyApID8gc3RvcmFnZS5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHkgOiAnbWFuYWdlX29wdGlvbnMnXCJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHknLCAkZXZlbnQgKVwiXG5cdFx0Lz5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHRuYW1lPVwibWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLm1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eSA/IGAke2xhYmVsLm1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLm1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eVwiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLm1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eVwiXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnbWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5JyApID8gc3RvcmFnZS5tYW51YWxfdmVyaWZpY2F0aW9uX2NhcGFiaWxpdHkgOiAnbWFuYWdlX29wdGlvbnMnXCJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdtYW51YWxfdmVyaWZpY2F0aW9uX2NhcGFiaWxpdHknLCAkZXZlbnQgKVwiXG5cdFx0Lz5cblx0XHQ8Y3gtdnVpLXNlbGVjdFxuXHRcdFx0bmFtZT1cInNzcl92YWxpZGF0aW9uX21ldGhvZFwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0OmxhYmVsPVwibG9hZGluZy5zc3JfdmFsaWRhdGlvbl9tZXRob2QgPyBgJHtsYWJlbC5zc3JfdmFsaWRhdGlvbl9tZXRob2R9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5zc3JfdmFsaWRhdGlvbl9tZXRob2RcIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5zc3JfdmFsaWRhdGlvbl9tZXRob2RcIlxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3Nzcl92YWxpZGF0aW9uX21ldGhvZCcgKSA/IHN0b3JhZ2Uuc3NyX3ZhbGlkYXRpb25fbWV0aG9kIDogJ3Jlc3QnXCJcblx0XHRcdDpvcHRpb25zLWxpc3Q9XCJzZWxlY3RPcHRpb25zXCJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdzc3JfdmFsaWRhdGlvbl9tZXRob2QnLCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLXNlbGVjdD5cblx0XHQ8Y3gtdnVpLWYtc2VsZWN0XG5cdFx0XHRuYW1lPVwic2VsZl9wcm9tb3RhYmxlX3JvbGVzXCJcblx0XHRcdDpsYWJlbD1cImxvYWRpbmcuc2VsZl9wcm9tb3RhYmxlX3JvbGVzID8gYCR7bGFiZWwuc2VsZl9wcm9tb3RhYmxlX3JvbGVzfSAobG9hZGluZy4uLilgIDogbGFiZWwuc2VsZl9wcm9tb3RhYmxlX3JvbGVzXCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuc2VsZl9wcm9tb3RhYmxlX3JvbGVzXCJcblx0XHRcdDp2YWx1ZT1cInNlbGVjdGVkU2VsZlByb21vdGFibGVSb2xlc1wiXG5cdFx0XHQ6b3B0aW9ucy1saXN0PVwiYXZhaWxhYmxlUm9sZXNcIlxuXHRcdFx0Om11bHRpcGxlPVwidHJ1ZVwiXG5cdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdEBvbi1jaGFuZ2U9XCJjaGFuZ2VTZWxmUHJvbW90YWJsZVJvbGVzKCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLWYtc2VsZWN0PlxuXHRcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXJcblx0XHRcdDpsYWJlbD1cIl9fKCAnRm9ybSBBY2Nlc3NpYmlsaXR5JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0Lz5cblx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWlubmVyLXBhbmVsXCI+XG5cdFx0XHQ8Y3gtdnVpLXN3aXRjaGVyXG5cdFx0XHRcdG5hbWU9XCJkaXNhYmxlX25leHRfYnV0dG9uXCJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHRcdDpsYWJlbD1cImxvYWRpbmcuZGlzYWJsZV9uZXh0X2J1dHRvbiA/IGAke2xhYmVsLmRpc2FibGVfbmV4dF9idXR0b259IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5kaXNhYmxlX25leHRfYnV0dG9uXCJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5kaXNhYmxlX25leHRfYnV0dG9uXCJcblx0XHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2Rpc2FibGVfbmV4dF9idXR0b24nICkgPyBzdG9yYWdlLmRpc2FibGVfbmV4dF9idXR0b24gOiB0cnVlXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcblx0XHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnZGlzYWJsZV9uZXh0X2J1dHRvbicsICRldmVudCApXCJcblx0XHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cblx0XHRcdDxjeC12dWktc3dpdGNoZXJcblx0XHRcdFx0bmFtZT1cInNjcm9sbF9vbl9uZXh0XCJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHRcdDpsYWJlbD1cImxvYWRpbmcuc2Nyb2xsX29uX25leHQgPyBgJHtsYWJlbC5zY3JvbGxfb25fbmV4dH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLnNjcm9sbF9vbl9uZXh0XCJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5zY3JvbGxfb25fbmV4dFwiXG5cdFx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdzY3JvbGxfb25fbmV4dCcgKSA/IHN0b3JhZ2Uuc2Nyb2xsX29uX25leHQgOiBmYWxzZVwiXG5cdFx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ3Njcm9sbF9vbl9uZXh0JywgJGV2ZW50IClcIlxuXHRcdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdFx0PGN4LXZ1aS1zd2l0Y2hlclxuXHRcdFx0XHRuYW1lPVwiYXV0b19mb2N1c1wiXG5cdFx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmF1dG9fZm9jdXMgPyBgJHtsYWJlbC5hdXRvX2ZvY3VzfSAobG9hZGluZy4uLilgIDogbGFiZWwuYXV0b19mb2N1c1wiXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuYXV0b19mb2N1c1wiXG5cdFx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdhdXRvX2ZvY3VzJyApID8gc3RvcmFnZS5hdXRvX2ZvY3VzIDogZmFsc2VcIlxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxuXHRcdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdhdXRvX2ZvY3VzJywgJGV2ZW50IClcIlxuXHRcdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdDwvZGl2PlxuXG4gICAgPGN4LXZ1aS1jb21wb25lbnQtd3JhcHBlclxuICAgICAgICA6bGFiZWw9XCJfXyggJ0Zvcm0gUmVxdWVzdCBBcmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcIlxuICAgICAgICA6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcbiAgICAvPlxuXG4gICAgPGN4LXZ1aS1pbnB1dFxuICAgICAgICBuYW1lPVwiZ2ZiX3JlcXVlc3RfYXJnc19rZXlcIlxuICAgICAgICA6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJywgZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5ID8gJ2pmYi1oYXMtZXJyb3InIDogJycgXVwiXG4gICAgOnNpemU9XCInZnVsbHdpZHRoJ1wiXG4gICAgOmxhYmVsPVwiJ1JlcXVlc3Qga2V5J1wiXG4gICAgOmRlc2NyaXB0aW9uPVwiJ1VuaXF1ZSBmb3JtIHBhcmFtZXRlciAoa2V5KSdcIlxuICAgIDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdnZmJfcmVxdWVzdF9hcmdzX2tleScgKSA/IHN0b3JhZ2UuZ2ZiX3JlcXVlc3RfYXJnc19rZXkgOiAnMTExMSdcIlxuICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG4gICAgQGlucHV0PVwiY2hhbmdlVmFsKCAnZ2ZiX3JlcXVlc3RfYXJnc19rZXknLCAkZXZlbnQgKVwiXG4gICAgLz5cbiAgICA8ZGl2IHYtaWY9XCJlcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc19rZXlcIiBjbGFzcz1cImpmYi1maWVsZC1lcnJvclwiPlxuICAgICAge3sgZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5IH19XG4gICAgPC9kaXY+XG5cbiAgICA8Y3gtdnVpLWlucHV0XG4gICAgICAgIG5hbWU9XCJnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlXCJcbiAgICAgICAgOndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcsIGVycm9ycy5nZmJfcmVxdWVzdF9hcmdzX3ZhbHVlID8gJ2pmYi1oYXMtZXJyb3InIDogJycgXVwiXG4gICAgOnNpemU9XCInZnVsbHdpZHRoJ1wiXG4gICAgOmxhYmVsPVwiJ1JlcXVlc3QgdmFsdWUnXCJcbiAgICA6ZGVzY3JpcHRpb249XCInVW5pcXVlIGZvcm0gcGFyYW1ldGVyICh2YWx1ZSknXCJcbiAgICA6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScgKSA/IHN0b3JhZ2UuZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZSA6ICcyMjIyJ1wiXG4gICAgOmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcbiAgICBAaW5wdXQ9XCJjaGFuZ2VWYWwoICdnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlJywgJGV2ZW50IClcIlxuICAgIC8+XG4gICAgPGRpdiB2LWlmPVwiZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWVcIiBjbGFzcz1cImpmYi1maWVsZC1lcnJvclwiPlxuICAgICAge3sgZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUgfX1cbiAgICA8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbCxcbn0gZnJvbSAnLi9zb3VyY2UnO1xuXG5cbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdvcHRpb25zLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBpMThuIF0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0c3RvcmFnZTogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApLFxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdGxvYWRpbmc6IHt9LFxuXHRcdFx0cGVuZGluZ1NhdmU6IGZhbHNlLFxuXHRcdFx0ZXJyb3JzOiB7XG5cdFx0XHRcdGdmYl9yZXF1ZXN0X2FyZ3Nfa2V5OiAnJyxcblx0XHRcdFx0Z2ZiX3JlcXVlc3RfYXJnc192YWx1ZTogJycsXG5cdFx0XHR9LFxuXHRcdFx0c2VsZWN0T3B0aW9uczogW1xuXHRcdFx0XHR7IHZhbHVlOiAncmVzdCcsIGxhYmVsOiAoICdSZXN0IEFQSScgKSB9LFxuXHRcdFx0XHR7IHZhbHVlOiAnYWRtaW5fYWpheCcsIGxhYmVsOiAoICdBZG1pbiBBamF4JyApIH0sXG5cdFx0XHRcdHsgdmFsdWU6ICdzZWxmJywgbGFiZWw6ICggJ1NlbGYnICkgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRhdmFpbGFibGVSb2xlcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnN0b3JhZ2UuYXZhaWxhYmxlX3JvbGVzIHx8IFtdO1xuXHRcdH0sXG5cdFx0c2VsZWN0ZWRTZWxmUHJvbW90YWJsZVJvbGVzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RvcmFnZS5zZWxmX3Byb21vdGFibGVfcm9sZXMgfHwgW107XG5cdFx0fSxcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgdGhpcy5vbkNoYW5nZVN0YXRlLmJpbmQoIHRoaXMgKSApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0U2F2YWJsZURhdGEoKSB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdGVuYWJsZV9kZXZfbW9kZSxcblx0XHRcdFx0Y2xlYXJfb25fdW5pbnN0YWxsLFxuXHRcdFx0XHRmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHksXG5cdFx0XHRcdG1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eSxcblx0XHRcdFx0c3NyX3ZhbGlkYXRpb25fbWV0aG9kLFxuXHRcdFx0XHRzZWxmX3Byb21vdGFibGVfcm9sZXMsXG5cdFx0XHRcdGRpc2FibGVfbmV4dF9idXR0b24sXG5cdFx0XHRcdHNjcm9sbF9vbl9uZXh0LFxuXHRcdFx0XHRhdXRvX2ZvY3VzLFxuXHRcdFx0XHRnZmJfcmVxdWVzdF9hcmdzX2tleSxcblx0XHRcdFx0Z2ZiX3JlcXVlc3RfYXJnc192YWx1ZSxcblx0XHRcdH0gPSB0aGlzLnN0b3JhZ2U7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGVuYWJsZV9kZXZfbW9kZSxcblx0XHRcdFx0Y2xlYXJfb25fdW5pbnN0YWxsLFxuXHRcdFx0XHRmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHksXG5cdFx0XHRcdG1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eSxcblx0XHRcdFx0c3NyX3ZhbGlkYXRpb25fbWV0aG9kLFxuXHRcdFx0XHRzZWxmX3Byb21vdGFibGVfcm9sZXM6IEFycmF5LmlzQXJyYXkoIHNlbGZfcHJvbW90YWJsZV9yb2xlcyApICYmICEgc2VsZl9wcm9tb3RhYmxlX3JvbGVzLmxlbmd0aFxuXHRcdFx0XHRcdD8gWyAnJyBdXG5cdFx0XHRcdFx0OiBzZWxmX3Byb21vdGFibGVfcm9sZXMsXG5cdFx0XHRcdGRpc2FibGVfbmV4dF9idXR0b24sXG5cdFx0XHRcdHNjcm9sbF9vbl9uZXh0LFxuXHRcdFx0XHRhdXRvX2ZvY3VzLFxuXHRcdFx0XHRnZmJfcmVxdWVzdF9hcmdzX2tleSxcblx0XHRcdFx0Z2ZiX3JlcXVlc3RfYXJnc192YWx1ZSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogdGhpcy5nZXRTYXZhYmxlRGF0YSgpLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG9uQ2hhbmdlU3RhdGUoIHsgc3RhdGUsIHNsdWcgfSApIHtcblx0XHRcdGlmICggJ29wdGlvbnMtdGFiJyAhPT0gc2x1ZyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nID0ge307XG5cdFx0XHRcdHRoaXMuJHNldCggdGhpcywgJ2lzTG9hZGluZycsIGZhbHNlICk7XG5cblx0XHRcdFx0aWYgKCB0aGlzLnBlbmRpbmdTYXZlICkge1xuXHRcdFx0XHRcdHRoaXMucGVuZGluZ1NhdmUgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xuXHRcdH0sXG5cdFx0dmFsaWRhdGVGaWVsZCggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIG5hbWUgIT09ICdnZmJfcmVxdWVzdF9hcmdzX2tleScgJiYgbmFtZSAhPT0gJ2dmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUnICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdmFsID0gU3RyaW5nKCB2YWx1ZSA/PyAnJyApO1xuXHRcdFx0Y29uc3Qgb25seURpZ2l0cyA9IC9eXFxkKyQvLnRlc3QoIHZhbCApO1xuXG5cdFx0XHRpZiAoIG9ubHlEaWdpdHMgKSB7XG5cdFx0XHRcdGNvbnN0IG1zZyA9IHRoaXMuX18oXG5cdFx0XHRcdFx0J011c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgbGV0dGVyIChB4oCTWikuIE51bWJlcnMgb25seSBhcmUgbm90IGFsbG93ZWQuJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy4kc2V0KCB0aGlzLmVycm9ycywgbmFtZSwgbXNnICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmVycm9ycywgbmFtZSwgJycgKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0Y2hhbmdlU2VsZlByb21vdGFibGVSb2xlcyggdmFsdWUgKSB7XG5cdFx0XHRpZiAoICEgQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNoYW5nZVZhbCggJ3NlbGZfcHJvbW90YWJsZV9yb2xlcycsIHZhbHVlICk7XG5cdFx0fSxcblx0XHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsIG5hbWUsIHZhbHVlICk7XG5cblx0XHRcdGlmICggbmFtZSA9PT0gJ2dmYl9yZXF1ZXN0X2FyZ3Nfa2V5JyB8fCBuYW1lID09PSAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScgKSB7XG5cdFx0XHRcdGNvbnN0IG9rID0gdGhpcy52YWxpZGF0ZUZpZWxkKCBuYW1lLCB2YWx1ZSApO1xuXHRcdFx0XHRpZiAoICEgb2sgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nLCBuYW1lLCB0cnVlICk7XG5cblx0XHRcdGlmICggdGhpcy5pc0xvYWRpbmcgKSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZ1NhdmUgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XG5cdFx0fSxcblx0fSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBzY29wZWQ+XG4uamZiLWhhcy1lcnJvciAuY3gtdnVpLWlucHV0LFxuLmpmYi1oYXMtZXJyb3IgaW5wdXQge1xuICBib3JkZXItY29sb3I6ICNkYzI2MjYgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmpmYi1maWVsZC1lcnJvciB7XG4gIG1hcmdpbjogNnB4IDAgMTJweDtcbiAgY29sb3I6ICNkYzI2MjY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjpyaWdodDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG5cdDxzZWN0aW9uPlxuXHRcdDxjeC12dWktc3dpdGNoZXJcblx0XHRcdG5hbWU9XCJ1c2VfZ2F0ZXdheXNcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC51c2VfZ2F0ZXdheXNcIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC51c2VfZ2F0ZXdheXNcIlxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS51c2VfZ2F0ZXdheXNcIlxuXHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAndXNlX2dhdGV3YXlzJywgJGV2ZW50IClcIlxuXHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cblx0XHQ8Y3gtdnVpLXN3aXRjaGVyXG5cdFx0XHR2LWlmPVwic3RvcmFnZS51c2VfZ2F0ZXdheXNcIlxuXHRcdFx0bmFtZT1cImVuYWJsZV90ZXN0X21vZGVcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmVuYWJsZV90ZXN0X21vZGVcIlxuXHRcdFx0OmxhYmVsPVwibGFiZWwuZW5hYmxlX3Rlc3RfbW9kZVwiXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmVuYWJsZV90ZXN0X21vZGVcIlxuXHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnZW5hYmxlX3Rlc3RfbW9kZScsICRldmVudCApXCJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1pbm5lci1wYW5lbFwiPlxuXHRcdFx0XHQ8Q3hWdWlDb2xsYXBzZU1pbmlcblx0XHRcdFx0XHR3aXRoLXBhbmVsXG5cdFx0XHRcdFx0di1mb3I9XCIoIHRhYiwgaW5kZXggKSBpbiBnYXRld2F5c1wiXG5cdFx0XHRcdFx0Omljb249XCJ0YWIuaWNvblwiXG5cdFx0XHRcdFx0OmxhYmVsPVwidGFiLnRpdGxlXCJcblx0XHRcdFx0XHQ6a2V5PVwidGFiLmNvbXBvbmVudC5uYW1lXCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJ0YWIuZGlzYWJsZWRcIlxuXHRcdFx0XHRcdDppbml0aWFsLWFjdGl2ZT1cImlzQWN0aXZlKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXG5cdFx0XHRcdFx0QGNoYW5nZT1cIm9uQ2hhbmdlQWN0aXZlKCAkZXZlbnQsIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxrZWVwLWFsaXZlPlxuXHRcdFx0XHRcdFx0PGNvbXBvbmVudFxuXHRcdFx0XHRcdFx0XHR2LWJpbmQ6aXM9XCJ0YWIuY29tcG9uZW50XCJcblx0XHRcdFx0XHRcdFx0cmVmPVwiZ2F0ZXdheXNcIlxuXHRcdFx0XHRcdFx0XHQ6aW5jb21pbmc9XCJnZXRJbmNvbWluZyggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2tlZXAtYWxpdmU+XG5cdFx0XHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXG5cdFx0XHRcdFx0XHQ6bG9hZGluZz1cImxvYWRpbmdHYXRld2F5c1sgdGFiLmNvbXBvbmVudC5uYW1lIF1cIlxuXHRcdFx0XHRcdFx0QGNsaWNrPVwib25TYXZlR2F0ZXdheSggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdFx0PC9DeFZ1aUNvbGxhcHNlTWluaT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvdGVtcGxhdGU+XG5cdDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbCxcbn0gZnJvbSBcIi4vc291cmNlXCI7XG5pbXBvcnQgKiBhcyBwYXlwYWwgZnJvbSAnLi4vLi4vZ2F0ZXdheXMvcGF5cGFsJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5jb25zdCB7IFNhdmVUYWJCeUFqYXgsIEdldEluY29taW5nIH0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XG5jb25zdCB7IEN4VnVpQ29sbGFwc2VNaW5pIH0gPSB3aW5kb3cuSmV0RkJDb21wb25lbnRzO1xuXG53aW5kb3cuamZiRXZlbnRCdXMgPSB3aW5kb3cuamZiRXZlbnRCdXMgfHwgbmV3IFZ1ZSgge30gKTtcblxuY29uc3QgZ2F0ZXdheXNUYWJzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmdhdGV3YXlzJywgW1xuXHRwYXlwYWwsXG5dICk7XG5cbmxldCByZXF1ZXN0RnVuYyA9ICgpID0+IHtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3BheW1lbnRzLWdhdGV3YXlzJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdCgpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGlubmVyU2x1Z3M6IEFycmF5LFxuXHR9LFxuXHRjb21wb25lbnRzOiB7IEN4VnVpQ29sbGFwc2VNaW5pIH0sXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZyBdLFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcblx0XHRcdGdhdGV3YXlzOiBnYXRld2F5c1RhYnMsXG5cdFx0XHRsb2FkaW5nR2F0ZXdheXM6IHt9LFxuXHRcdFx0YWN0aXZlR2F0ZXdheXNUYWJzOiBbXSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nR2F0ZXdheXMsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSApO1xuXG5cblx0XHRqZmJFdmVudEJ1cy4kb24oICdjaGFuZ2UtdGFiJywgKCBmdW5jdGlvbiggeyBzbHVnIH0gKSB7XG5cdFx0XHRpZiAoIHNsdWcgIT09IHRoaXMuJG9wdGlvbnMubmFtZSApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIFsgdGhpcy4kb3B0aW9ucy5uYW1lLCAuLi50aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyBdLmpvaW4oICdfXycgKTtcblx0XHR9ICkuYmluZCggdGhpcyApICk7XG5cblx0XHR0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyA9IHRoaXMuaW5uZXJTbHVncztcblxuXHRcdHJlcXVlc3RGdW5jID0gXy5kZWJvdW5jZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKVxuXHRcdH0sIDEwMDAgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdG9uQ2hhbmdlQWN0aXZlKCBpc0FjdGl2ZSwgdGFiTmFtZSApIHtcblx0XHRcdGxldCBbIGhhc2gsIC4uLm90aGVycyBdID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSggJyMnLCAnJyApLnNwbGl0KCAnX18nICk7XG5cblx0XHRcdGlmICggISBpc0FjdGl2ZSApIHtcblx0XHRcdFx0b3RoZXJzID0gb3RoZXJzLmZpbHRlciggZ2F0ZXdheVRhYiA9PiAoIHRhYk5hbWUgIT09IGdhdGV3YXlUYWIgfHwgaXNBY3RpdmUgKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3RoZXJzLnB1c2goIHRhYk5hbWUgKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2hhbmdlR2F0ZXdheXNUYWJzKCBvdGhlcnMgKTtcblxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBbIHRoaXMuJG9wdGlvbnMubmFtZSwgLi4ub3RoZXJzIF0uam9pbiggJ19fJyApO1xuXHRcdH0sXG5cdFx0Y2hhbmdlR2F0ZXdheXNUYWJzKCB0YWJzICkge1xuXHRcdFx0dGhpcy5hY3RpdmVHYXRld2F5c1RhYnMgPSB0YWJzO1xuXHRcdH0sXG5cdFx0aXNBY3RpdmUoIHRhYk5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gQm9vbGVhbiggdGhpcy5hY3RpdmVHYXRld2F5c1RhYnMubGVuZ3RoICYmIHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzLmluY2x1ZGVzKCB0YWJOYW1lICkgKTtcblx0XHR9LFxuXHRcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcblxuXHRcdFx0cmVxdWVzdEZ1bmMoKTtcblx0XHR9LFxuXHRcdG9uU2F2ZUdhdGV3YXkoIGluZGV4VGFiLCB0YWJTbHVnICkge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuJHJlZnMuZ2F0ZXdheXNbIGluZGV4VGFiIF07XG5cblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggY3VycmVudCwgdGFiU2x1ZyApO1xuXHRcdH0sXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG59XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHRuYW1lPVwiaXBpbmZvX3Rva2VuXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmlwaW5mb190b2tlbiA/IGAke2xhYmVsLmlwaW5mb190b2tlbn0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmlwaW5mb190b2tlblwiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmlwaW5mb190b2tlblwiXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnaXBpbmZvX3Rva2VuJyApID8gc3RvcmFnZS5pcGluZm9fdG9rZW4gOiAnJ1wiXG5cdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxuXHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnaXBpbmZvX3Rva2VuJywgJGV2ZW50IClcIlxuXHRcdC8+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHtcblx0aGVscCxcblx0bGFiZWwsXG59IGZyb20gJy4vc291cmNlJztcblxuXG5jb25zdCB7IFNhdmVUYWJCeUFqYXgsIGkxOG4gfSA9IHdpbmRvdy5KZXRGQk1peGlucztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAncGhvbmUtZmllbGQtdGFiJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDoge30sXG5cdFx0fSxcblx0fSxcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXgsIGkxOG4gXSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0bG9hZGluZzoge30sXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgdGhpcy5vbkNoYW5nZVN0YXRlLmJpbmQoIHRoaXMgKSApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0b25DaGFuZ2VTdGF0ZSggeyBzdGF0ZSwgc2x1ZyB9ICkge1xuXHRcdFx0aWYgKCAncGhvbmUtZmllbGQtdGFiJyAhPT0gc2x1ZyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nID0ge307XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHNldCggdGhpcywgJ2lzTG9hZGluZycsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSxcblx0XHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0aWYgKCB0aGlzLmlzTG9hZGluZyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nLCBuYW1lLCB0cnVlICk7XG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApO1xuXHRcdH0sXG5cdH0sXG59O1xuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8ZGl2IHYtaWY9XCJtaWdyYXRpb25JblByb2dyZXNzXCIgY2xhc3M9XCJqZmItc3NyLW1pZ3JhdGlvbi13YWl0XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImpmYi1zc3ItbWlncmF0aW9uLXdhaXRfX3NwaW5uZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3Ryb25nPnt7IF9fKCAnTWlncmF0aW9uIGluIHByb2dyZXNz4oCmJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3N0cm9uZz5cblx0XHRcdFx0PHA+e3sgaGVscC5taWdyYXRpb25JblByb2dyZXNzIH19PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PHRlbXBsYXRlIHYtZWxzZT5cblx0XHRcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXJcblx0XHRcdFx0OmxhYmVsPVwibG9hZGluZy5jYWxsYmFja3MgPyBgJHtsYWJlbC5jYWxsYmFja3N9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5jYWxsYmFja3NcIlxuXHRcdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmNhbGxiYWNrc1wiXG5cdFx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0PlxuXHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRjbGFzcz1cImpmYi1zc3ItY2FsbGJhY2tzLXRleHRhcmVhXCJcblx0XHRcdFx0XHRyb3dzPVwiMTBcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRcdFx0OnZhbHVlPVwic3RvcmFnZS5jYWxsYmFja3NcIlxuXHRcdFx0XHRcdEBpbnB1dD1cIm9uSW5wdXQoICRldmVudC50YXJnZXQudmFsdWUgKVwiXG5cdFx0XHRcdD48L3RleHRhcmVhPlxuXHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdGJ1dHRvbi1zdHlsZT1cImFjY2VudFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nIHx8ICFoYXNVbnNhdmVkQ2FsbGJhY2tzQ2hhbmdlXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJvblNhdmVDYWxsYmFja3NcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+e3sgX18oICdTYXZlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3NwYW4+XG5cdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdDwvY3gtdnVpLWNvbXBvbmVudC13cmFwcGVyPlxuXHRcdFx0PGRpdiB2LWlmPVwiaGFzUmVqZWN0ZWRcIiBjbGFzcz1cImpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkXCI+XG5cdFx0XHRcdDxzdHJvbmc+e3sgX18oICdOb3Qgc2F2ZWQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3N0cm9uZz5cblx0XHRcdFx0PHVsIGNsYXNzPVwiamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRfX2xpc3RcIj5cblx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdHYtZm9yPVwibmFtZSBpbiByZWplY3RlZE5hbWVzXCJcblx0XHRcdFx0XHRcdDprZXk9XCJuYW1lXCJcblx0XHRcdFx0XHQ+e3sgbmFtZSB9fSDigJQge3sgcmVqZWN0ZWRbIG5hbWUgXSB9fTwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXJcblx0XHRcdFx0di1pZj1cImJsb2NrZWQubGVuZ3RoXCJcblx0XHRcdFx0OmxhYmVsPVwiYCR7bGFiZWwuYmxvY2tlZH0gKCR7YmxvY2tlZC5sZW5ndGh9KWBcIlxuXHRcdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmJsb2NrZWRcIlxuXHRcdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdD5cblx0XHRcdFx0PHVsIGNsYXNzPVwiamZiLXNzci1ibG9ja2VkX19saXN0XCI+XG5cdFx0XHRcdFx0PGxpIHYtZm9yPVwiKCB1c2FnZSwgaW5kZXggKSBpbiBibG9ja2VkXCIgOmtleT1cImluZGV4XCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImpmYi1zc3ItYmxvY2tlZF9fZm9ybVwiPnt7IHVzYWdlLmZvcm1fdGl0bGUgfHwgYCMke3VzYWdlLmZvcm1faWR9YCB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiamZiLXNzci1ibG9ja2VkX19tZXRhXCI+XG5cdFx0XHRcdFx0XHRcdCh7eyBfXyggJ2ZpZWxkJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX0gXCJ7eyB1c2FnZS5maWVsZCB9fVwiIOKGkiA8Y29kZT57eyB1c2FnZS5uYW1lIH19PC9jb2RlPilcblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxhIDpocmVmPVwidXNhZ2UuZWRpdF91cmxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdHt7IF9fKCAnRWRpdCBmb3JtIOKGkicsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvY3gtdnVpLWNvbXBvbmVudC13cmFwcGVyPlxuXHRcdDwvdGVtcGxhdGU+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHtcblx0aGVscCxcblx0bGFiZWwsXG59IGZyb20gJy4vc291cmNlJztcblxuY29uc3QgeyBTYXZlVGFiQnlBamF4LCBpMThuIH0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XG5cbmNvbnN0IE1JR1JBVElPTl9QT0xMX0lOVEVSVkFMX01TID0gODAwMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnc3NyLWNhbGxiYWNrcy10YWInLFxuXHRwcm9wczoge1xuXHRcdGluY29taW5nOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiB7fSxcblx0XHR9LFxuXHR9LFxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgaTE4biBdLFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcblx0XHRcdC8vIFRyYWNrcyB0aGUgbGFzdCB2YWx1ZSBjb25maXJtZWQgYnkgdGhlIHNlcnZlciAoaW5pdGlhbCBsb2FkIG9yIGEgY29tcGxldGVkXG5cdFx0XHQvLyBzYXZlKSwgaW5kZXBlbmRlbnQgb2YgYHN0b3JhZ2UuY2FsbGJhY2tzYCwgd2hpY2ggY2hhbmdlcyBvbiBldmVyeSBrZXlzdHJva2UuXG5cdFx0XHQvLyBVc2VkIG9ubHkgdG8gZ2F0ZSB0aGUgU2F2ZSBidXR0b24g4oCUIHNlZSBgaGFzVW5zYXZlZENhbGxiYWNrc0NoYW5nZWAuXG5cdFx0XHRzYXZlZENhbGxiYWNrczogJ3N0cmluZycgPT09IHR5cGVvZiB0aGlzLmluY29taW5nLmNhbGxiYWNrcyA/IHRoaXMuaW5jb21pbmcuY2FsbGJhY2tzIDogJycsXG5cdFx0XHRibG9ja2VkOiBBcnJheS5pc0FycmF5KCB0aGlzLmluY29taW5nLmJsb2NrZWQgKSA/IFsgLi4udGhpcy5pbmNvbWluZy5ibG9ja2VkIF0gOiBbXSxcblx0XHRcdC8vIFdoaWxlIHRoZSBvbmUtdGltZSBsZWdhY3ktbWlncmF0aW9uIHNjYW4gaXMgc3RpbGwgcmVzdG9yaW5nIHByZXZpb3VzbHkgdXNlZFxuXHRcdFx0Ly8gY2FsbGJhY2sgbmFtZXMgKG9ubHkgcG9zc2libGUgb24gYSBsYXJnZSBzaXRlLCB3aGVyZSBpdCBzcGFucyBzZXZlcmFsXG5cdFx0XHQvLyBgYWRtaW5faW5pdGAgcmVxdWVzdHMpLCB0aGlzIHRhYiBpcyByZWFkLW9ubHk6IGBpbXBvcnRfdHJ1c3RlZF9jYWxsYmFja3MoKWBcblx0XHRcdC8vIG9ubHkgbWVyZ2VzIGl0cyByZXN1bHRzIGludG8gdGhlIHRydXN0ZWQgbGlzdCBvbmNlIHRoZSB3aG9sZSBzY2FuIGNvbXBsZXRlcyxcblx0XHRcdC8vIGFuZCBpdCBkb2VzIGFuIHVubG9ja2VkIHJlYWQtbWVyZ2Utd3JpdGUgb2YgdGhlIHNhbWUgb3B0aW9uIGEgbWFudWFsIHNhdmVcblx0XHRcdC8vIGhlcmUgd291bGQgcmFjZSBhZ2FpbnN0IChyZXZpZXcgZmluZGluZywgaXNzdWVzLXRyYWNrZXIgIzIwMzYxIGZvbGxvdy11cCkuXG5cdFx0XHQvLyBUaGUgc2VydmVyIGVuZm9yY2VzIHRoaXMgaW5kZXBlbmRlbnRseSBpbiBgb25fZ2V0X3JlcXVlc3QoKWA7IHRoaXMgZmxhZyBvbmx5XG5cdFx0XHQvLyBkcml2ZXMgdGhlIHdhaXQtc3RhdGUgVUkgYW5kIGlzIHJlLXN5bmNlZCBieSBgcG9sbE1pZ3JhdGlvblN0YXR1cygpYC5cblx0XHRcdG1pZ3JhdGlvbkluUHJvZ3Jlc3M6ICEhIHRoaXMuaW5jb21pbmcubWlncmF0aW9uSW5Qcm9ncmVzcyxcblx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRsb2FkaW5nOiB7fSxcblx0XHRcdHBlbmRpbmdTYXZlOiBmYWxzZSxcblx0XHRcdHJlamVjdGVkOiB7fSxcblx0XHRcdHBvbGxUaW1lcjogbnVsbCxcblx0XHR9O1xuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGhhc1JlamVjdGVkKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKCB0aGlzLnJlamVjdGVkICkubGVuZ3RoID4gMDtcblx0XHR9LFxuXHRcdC8vIGByZWplY3RlZGAgaXMgYSBwbGFpbiBvYmplY3QsIHNvIGEgdHJhaWxpbmcgXCI7IFwiIGJha2VkIGludG8gZWFjaCByZW5kZXJlZCBpdGVtXG5cdFx0Ly8gKHJhdGhlciB0aGFuIGpvaW5lZCBiZXR3ZWVuIGl0ZW1zKSBsZWZ0IGEgc3RyYXkgXCI7IFwiIGFmdGVyIHRoZSBsYXN0IOKAlCBhbmQgb25seSDigJRcblx0XHQvLyBlbnRyeSB3aGVuZXZlciBleGFjdGx5IG9uZSBuYW1lIHdhcyByZWplY3RlZCAocmV2aWV3IGZpbmRpbmcsIGlzc3Vlcy10cmFja2VyXG5cdFx0Ly8gIzIwMzYxIGZvbGxvdy11cCkuIExpc3RpbmcgbmFtZXMgc2VwYXJhdGVseSBsZXRzIHRoZSB0ZW1wbGF0ZSBvbmx5IGFkZCB0aGVcblx0XHQvLyBzZXBhcmF0b3IgYmV0d2VlbiBpdGVtcywgbm90IGFmdGVyIHRoZSBmaW5hbCBvbmUuXG5cdFx0cmVqZWN0ZWROYW1lcygpIHtcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyggdGhpcy5yZWplY3RlZCApO1xuXHRcdH0sXG5cdFx0Ly8gR2F0ZXMgdGhlIFNhdmUgYnV0dG9uOiBzYXZpbmcgb25seSBoYXBwZW5zIG9uIGFuIGV4cGxpY2l0IGNsaWNrIG5vdyAobm9cblx0XHQvLyBibHVyLXRyaWdnZXJlZCBhdXRvc2F2ZSksIHNwZWNpZmljYWxseSBzbyBhbiBhY2NpZGVudGFsIHNlbGVjdC1hbGwtYW5kLWRlbGV0ZSBpblxuXHRcdC8vIHRoZSB0ZXh0YXJlYSBjYW4ndCB3aXBlIHRoZSB3aG9sZSB0cnVzdGVkIGFsbG93bGlzdCB3aXRob3V0IHRoZSBhZG1pblxuXHRcdC8vIGRlbGliZXJhdGVseSBjbGlja2luZyBTYXZlIG9uIHRoZSBlbXB0aWVkIGNvbnRlbnQgKHJldmlldyBmaW5kaW5nLCBpc3N1ZXMtdHJhY2tlclxuXHRcdC8vICMyMDM2MSBmb2xsb3ctdXApLlxuXHRcdGhhc1Vuc2F2ZWRDYWxsYmFja3NDaGFuZ2UoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdG9yYWdlLmNhbGxiYWNrcyAhPT0gdGhpcy5zYXZlZENhbGxiYWNrcztcblx0XHR9LFxuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCB0aGlzLm9uQ2hhbmdlU3RhdGUuYmluZCggdGhpcyApICk7XG5cblx0XHRpZiAoIHRoaXMubWlncmF0aW9uSW5Qcm9ncmVzcyApIHtcblx0XHRcdHRoaXMuc2NoZWR1bGVQb2xsKCk7XG5cdFx0fVxuXHR9LFxuXHRiZWZvcmVEZXN0cm95KCkge1xuXHRcdHRoaXMuY2xlYXJQb2xsKCk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRTYXZhYmxlRGF0YSgpIHtcblx0XHRcdHJldHVybiB7IGNhbGxiYWNrczogdGhpcy5zdG9yYWdlLmNhbGxiYWNrcyB9O1xuXHRcdH0sXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHRoaXMuZ2V0U2F2YWJsZURhdGEoKSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRvblNhdmVEb25lU3VjY2VzcyggcmVzcG9uc2UgKSB7XG5cdFx0XHR0aGlzLnJlamVjdGVkID0gcmVzcG9uc2U/LmRhdGE/LnJlamVjdGVkIHx8IHt9O1xuXG5cdFx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgcmVzcG9uc2U/LmRhdGE/LmNhbGxiYWNrcyApIHtcblx0XHRcdFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsICdjYWxsYmFja3MnLCByZXNwb25zZS5kYXRhLmNhbGxiYWNrcyApO1xuXHRcdFx0XHR0aGlzLnNhdmVkQ2FsbGJhY2tzID0gcmVzcG9uc2UuZGF0YS5jYWxsYmFja3M7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkNoYW5nZVN0YXRlKCB7IHN0YXRlLCBzbHVnIH0gKSB7XG5cdFx0XHRpZiAoICdzc3ItY2FsbGJhY2tzLXRhYicgIT09IHNsdWcgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnZW5kJyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IHt9O1xuXHRcdFx0XHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBmYWxzZSApO1xuXG5cdFx0XHRcdGlmICggdGhpcy5wZW5kaW5nU2F2ZSApIHtcblx0XHRcdFx0XHR0aGlzLnBlbmRpbmdTYXZlID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLCAnaXNMb2FkaW5nJywgc3RhdGUgPT09ICdiZWdpbicgKTtcblx0XHR9LFxuXHRcdG9uSW5wdXQoIHZhbHVlICkge1xuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsICdjYWxsYmFja3MnLCB2YWx1ZSApO1xuXHRcdH0sXG5cdFx0b25TYXZlQ2FsbGJhY2tzKCkge1xuXHRcdFx0aWYgKCAhIHRoaXMuaGFzVW5zYXZlZENhbGxiYWNrc0NoYW5nZSB8fCB0aGlzLm1pZ3JhdGlvbkluUHJvZ3Jlc3MgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsICdjYWxsYmFja3MnLCB0cnVlICk7XG5cblx0XHRcdGlmICggdGhpcy5pc0xvYWRpbmcgKSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZ1NhdmUgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XG5cdFx0fSxcblx0XHRzY2hlZHVsZVBvbGwoKSB7XG5cdFx0XHR0aGlzLmNsZWFyUG9sbCgpO1xuXHRcdFx0dGhpcy5wb2xsVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCggdGhpcy5wb2xsTWlncmF0aW9uU3RhdHVzLCBNSUdSQVRJT05fUE9MTF9JTlRFUlZBTF9NUyApO1xuXHRcdH0sXG5cdFx0Y2xlYXJQb2xsKCkge1xuXHRcdFx0aWYgKCB0aGlzLnBvbGxUaW1lciApIHtcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGhpcy5wb2xsVGltZXIgKTtcblx0XHRcdFx0dGhpcy5wb2xsVGltZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8gUmV1c2VzIHRoZSBzYW1lIHNhdmUgZW5kcG9pbnQgYXMgYSByZWFkLW9ubHkgc3RhdHVzIGNoZWNrOiBvbWl0dGluZyBgY2FsbGJhY2tzYFxuXHRcdC8vIGZyb20gdGhlIHJlcXVlc3QgYm9keSBtZWFucyBgU3NyX0NhbGxiYWNrc19IYW5kbGVyOjpvbl9nZXRfcmVxdWVzdCgpYCBuZXZlclxuXHRcdC8vIGF0dGVtcHRzIHRvIHdyaXRlIGFueXRoaW5nIOKAlCBpdCBqdXN0IHJlcG9ydHMgd2hldGhlciB0aGUgbWlncmF0aW9uIGlzIHN0aWxsXG5cdFx0Ly8gcnVubmluZy4gT25jZSBpdCByZXBvcnRzIGZpbmlzaGVkLCB0aGUgcGFnZSBpcyByZWxvYWRlZCByYXRoZXIgdGhhbiBwYXRjaGluZ1xuXHRcdC8vIHN0YXRlIGluIHBsYWNlOiB0aGUgbWlncmF0aW9uIGNhbiBhbHNvIGhhdmUgY2hhbmdlZCB0aGUgXCJGb3JtcyBVc2luZyBCbG9ja2VkXG5cdFx0Ly8gRnVuY3Rpb25zXCIgbGlzdCAoYFNzcl9CbG9ja2VkX0NhbGxiYWNrX1VzYWdlc2ApLCB3aGljaCB0aGlzIGVuZHBvaW50IGRvZXNuJ3Rcblx0XHQvLyByZXR1cm4sIHNvIGEgZnVsbCByZWxvYWQgaXMgdGhlIHNpbXBsZXN0IHdheSB0byBndWFyYW50ZWUgZXZlcnl0aGluZyBvbiB0aGUgcGFnZVxuXHRcdC8vIOKAlCBub3QganVzdCB0aGUgY2FsbGJhY2tzIHRleHRhcmVhIOKAlCByZWZsZWN0cyB3aGF0IHRoZSBtaWdyYXRpb24gcHJvZHVjZWQuXG5cdFx0cG9sbE1pZ3JhdGlvblN0YXR1cygpIHtcblx0XHRcdGpRdWVyeS5hamF4KCB7XG5cdFx0XHRcdHVybDogd2luZG93LmFqYXh1cmwsXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGFjdGlvbjogJ2pldF9mYl9zYXZlX3RhYl9fc3NyLWNhbGxiYWNrcy10YWInLFxuXHRcdFx0XHRcdF9ub25jZTogd2luZG93Py5KZXRGQlBhZ2VDb25maWdQYWNrYWdlPy5ub25jZSxcblx0XHRcdFx0fSxcblx0XHRcdH0gKS5kb25lKCAoIHJlc3BvbnNlICkgPT4ge1xuXHRcdFx0XHRpZiAoIHJlc3BvbnNlPy5kYXRhPy5taWdyYXRpb25JblByb2dyZXNzICkge1xuXHRcdFx0XHRcdHRoaXMuc2NoZWR1bGVQb2xsKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0fSApLmZhaWwoICgpID0+IHtcblx0XHRcdFx0Ly8gVHJhbnNpZW50IG5ldHdvcmsgaGljY3VwIOKAlCBrZWVwIHdhaXRpbmcgcmF0aGVyIHRoYW4gZ2V0dGluZyBzdHVjay5cblx0XHRcdFx0dGhpcy5zY2hlZHVsZVBvbGwoKTtcblx0XHRcdH0gKTtcblx0XHR9LFxuXHR9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uamZiLXNzci1jYWxsYmFja3MtdGV4dGFyZWEge1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblx0bWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWQge1xuXHRjb2xvcjogI2RjMjYyNjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRwYWRkaW5nOiAwIDIwcHg7XG5cdG1hcmdpbjogLTEwcHggMCAyMHB4O1xufVxuXG4uamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRfX2xpc3Qge1xuXHRtYXJnaW46IDRweCAwIDA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZF9fbGlzdCBsaSB7XG5cdG1hcmdpbi1ib3R0b206IDJweDtcblx0cGFkZGluZy1sZWZ0OiAxNHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZF9fbGlzdCBsaTo6YmVmb3JlIHtcblx0Y29udGVudDogJ+KAkyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcbn1cblxuLmpmYi1zc3ItYmxvY2tlZF9fbGlzdCB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmpmYi1zc3ItYmxvY2tlZF9fbGlzdCBsaSB7XG5cdG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmpmYi1zc3ItYmxvY2tlZF9fZm9ybSB7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5qZmItc3NyLWJsb2NrZWRfX21ldGEge1xuXHRjb2xvcjogIzY0Njk3MDtcblx0bWFyZ2luOiAwIDZweDtcbn1cblxuLmpmYi1zc3ItYmxvY2tlZF9fbWV0YSBjb2RlIHtcblx0Y29sb3I6ICNkYzI2MjY7XG59XG5cbi5qZmItc3NyLW1pZ3JhdGlvbi13YWl0IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdGdhcDogMTJweDtcblx0cGFkZGluZzogMTZweCAyMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZjBmNmZjO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjYzNkY2YxO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5qZmItc3NyLW1pZ3JhdGlvbi13YWl0X19zcGlubmVyIHtcblx0ZmxleDogMCAwIGF1dG87XG5cdHdpZHRoOiAxOHB4O1xuXHRoZWlnaHQ6IDE4cHg7XG5cdG1hcmdpbi10b3A6IDJweDtcblx0Ym9yZGVyOiAycHggc29saWQgI2MzZGNmMTtcblx0Ym9yZGVyLXRvcC1jb2xvcjogIzIyNzFiMTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRhbmltYXRpb246IGpmYi1zc3ItbWlncmF0aW9uLXdhaXQtc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBqZmItc3NyLW1pZ3JhdGlvbi13YWl0LXNwaW4ge1xuXHR0byB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoIDM2MGRlZyApO1xuXHR9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxjeC12dWktc3dpdGNoZXJcblx0XHRcdG5hbWU9XCJlbmFibGVfdXNlcl9qb3VybmV5XCJcblx0XHRcdDpsYWJlbD1cImxvYWRpbmcuZW5hYmxlX3VzZXJfam91cm5leSA/IGAke2xhYmVsLmVuYWJsZV91c2VyX2pvdXJuZXl9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5lbmFibGVfdXNlcl9qb3VybmV5XCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuZW5hYmxlX3VzZXJfam91cm5leVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdlbmFibGVfdXNlcl9qb3VybmV5JyApID8gc3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5IDogZmFsc2VcIlxuXHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcblx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2VuYWJsZV91c2VyX2pvdXJuZXknLCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXlcIj5cblx0XHRcdDxjeC12dWktc2VsZWN0XG5cdFx0XHRcdG5hbWU9XCJzdG9yYWdlX3R5cGVcIlxuXHRcdFx0XHRjbGFzcz1cInVzZXItam91cm5leS1zZWxlY3RcIlxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLnN0b3JhZ2VfdHlwZSA/IGAke2xhYmVsLnN0b3JhZ2VfdHlwZX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLnN0b3JhZ2VfdHlwZVwiXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuc3RvcmFnZV90eXBlXCJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHRcdDpvcHRpb25zLWxpc3Q9XCJbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dmFsdWU6ICdsb2NhbCcsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ0xvY2FsIFN0b3JhZ2UnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YWx1ZTogJ3Nlc3Npb24nLFxuXHRcdFx0XHRcdFx0bGFiZWw6ICdTZXNzaW9uIFN0b3JhZ2UnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXCJcblx0XHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3N0b3JhZ2VfdHlwZScgKSA/IHN0b3JhZ2Uuc3RvcmFnZV90eXBlIDogJ2xvY2FsJ1wiXG5cdFx0XHRcdDpkaXNhYmxlZD1cIiFzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgfHwgaXNMb2FkaW5nXCJcblx0XHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnc3RvcmFnZV90eXBlJywgJGV2ZW50IClcIlxuXHRcdFx0PjwvY3gtdnVpLXNlbGVjdD5cblx0XHRcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXIgPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWNvbXBvbmVudF9fbGFiZWxcIj5QbGVhc2Ugbm90ZSE8L2Rpdj5cblx0XHRcdFx0PGRpdj48Yj5TZXNzaW9uIFN0b3JhZ2U6PC9iPiBUaGUgaW5mb3JtYXRpb24gaXMga2VwdCBvbmx5IHdoaWxlIHRoaXMgdGFiIG9yIHdpbmRvdyBpcyBvcGVuLiBSZWxvYWRpbmcgdGhlIHBhZ2UgaXMgZmluZSwgYnV0IGFzIHNvb24gYXMgeW91IGNsb3NlIHRoZSB0YWIsIHRoZSBkYXRhIGRpc2FwcGVhcnMuIE90aGVyIHRhYnMgb3Igd2luZG93cyBvZiB0aGUgc2l0ZSBjYW7igJl0IHNlZSBpdC4gWW91IGNhbiBzdGlsbCBnZXQgaXQgYmFjayBieSBwcmVzc2luZyBDdHJs4oCvK+KAr1NoaWZ04oCvK+KAr1QgKOKAnFJlb3BlbuKAr0Nsb3NlZOKAr1RhYuKAnSk8L2Rpdj5cblx0XHRcdFx0PGRpdj48Yj5Mb2NhbCBTdG9yYWdlOjwvYj4gVGhlIGluZm9ybWF0aW9uIHN0YXlzIG11Y2ggbG9uZ2Vy4oCUZXZlcnkgdGFiIG9yIHdpbmRvdyBvZiB0aGlzIHNpdGUgY2FuIHVzZSBpdCwgYW5kIGl0IHJlbWFpbnMgZXZlbiBhZnRlciB5b3UgY2xvc2UgYW5kIHJlb3BlbiB0aGUgYnJvd3NlciwgdW50aWwgeW91IGNsZWFyIGl0IHlvdXJzZWxmLjwvZGl2PlxuXHRcdFx0PC9jeC12dWktY29tcG9uZW50LXdyYXBwZXI+XG5cblx0XHRcdDxjeC12dWktc2VsZWN0XG5cdFx0XHRcdG5hbWU9XCJjbGVhcl9hZnRlcl9zdWJtaXRcIlxuXHRcdFx0XHRjbGFzcz1cInVzZXItam91cm5leS1zZWxlY3RcIlxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmNsZWFyX2FmdGVyX3N1Ym1pdCA/IGAke2xhYmVsLmNsZWFyX2FmdGVyX3N1Ym1pdH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmNsZWFyX2FmdGVyX3N1Ym1pdFwiXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuY2xlYXJfYWZ0ZXJfc3VibWl0XCJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHRcdDpvcHRpb25zLWxpc3Q9XCJbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dmFsdWU6ICdhbHdheXMnLFxuXHRcdFx0XHRcdFx0bGFiZWw6ICdBZnRlciBhbnkgc3VibWl0IChzdWNjZXNzIG9yIGZhaWx1cmUpJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dmFsdWU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdGxhYmVsOiAnQWZ0ZXIgc3VjY2Vzc2Z1bCBzdWJtaXQgb25seSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cIlxuXHRcdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnY2xlYXJfYWZ0ZXJfc3VibWl0JyApID8gc3RvcmFnZS5jbGVhcl9hZnRlcl9zdWJtaXQgOiAnc3VjY2VzcydcIlxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCIhc3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5IHx8IGlzTG9hZGluZ1wiXG5cdFx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ2NsZWFyX2FmdGVyX3N1Ym1pdCcsICRldmVudCApXCJcblx0XHRcdD48L2N4LXZ1aS1zZWxlY3Q+XG5cdFx0PC90ZW1wbGF0ZT5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbCxcbn0gZnJvbSAnLi9zb3VyY2UnO1xuXG5jb25zdCB7IFNhdmVUYWJCeUFqYXgsIGkxOG4gfSA9IHdpbmRvdy5KZXRGQk1peGlucztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAndXNlci1qb3VybmV5LXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6ICgpID0+ICh7fSksXG5cdFx0fSxcblx0fSxcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXgsIGkxOG4gXSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0bG9hZGluZzoge30sXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgdGhpcy5vbkNoYW5nZVN0YXRlLmJpbmQoIHRoaXMgKSApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0b25DaGFuZ2VTdGF0ZSggeyBzdGF0ZSwgc2x1ZyB9ICkge1xuXHRcdFx0aWYgKCAndXNlci1qb3VybmV5LXRhYicgIT09IHNsdWcgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnZW5kJyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xuXHRcdH0sXG5cdFx0Y2hhbmdlVmFsKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdGlmICggdGhpcy5pc0xvYWRpbmcgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCBuYW1lLCB2YWx1ZSApO1xuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsIG5hbWUsIHRydWUgKTtcblxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcblx0XHR9LFxuXHR9LFxufTtcblxuPC9zY3JpcHQ+XG48c3R5bGU+XG4udXNlci1qb3VybmV5LXNlbGVjdCBzZWxlY3QuY3gtdnVpLXNlbGVjdCB7XG5cdHBhZGRpbmc6IDZweCAyNHB4IDZweCAxMnB4O1xufVxuPC9zdHlsZT4iLCJpbXBvcnQgaHVic3BvdCBmcm9tICcuL3Byb0FkZG9ucy9odWJzcG90JztcbmltcG9ydCBhZGRyZXNzQXV0b2NvbXBsZXRlIGZyb20gJy4vcHJvQWRkb25zL2FkZHJlc3NBdXRvY29tcGxldGUnO1xuaW1wb3J0IGNvbnZlcnRraXQgZnJvbSAnLi9wcm9BZGRvbnMvY29udmVydGtpdCc7XG5pbXBvcnQgbWFpbGVybGl0ZSBmcm9tICcuL3Byb0FkZG9ucy9tYWlsZXJsaXRlJztcbmltcG9ydCBtb29zZW5kIGZyb20gJy4vcHJvQWRkb25zL21vb3NlbmQnO1xuaW1wb3J0IHN0cmlwZSBmcm9tICcuL3Byb0dhdGV3YXlzL3N0cmlwZSc7XG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSB3cC5ob29rcztcblxuY29uc3QgYWRkb25zID0gW1xuXHRhZGRyZXNzQXV0b2NvbXBsZXRlLFxuXHRodWJzcG90LFxuXHRjb252ZXJ0a2l0LFxuXHRtYWlsZXJsaXRlLFxuXHRtb29zZW5kLFxuXTtcblxuY29uc3QgZ2F0ZXdheXMgPSBbXG5cdHN0cmlwZVxuXTtcblxuY29uc3QgZ2V0TW9kdWxlc05hbWVzID0gbW9kdWxlcyA9PiBtb2R1bGVzLm1hcCggaXRlbSA9PiAoXG5cdGl0ZW0uY29tcG9uZW50Lm5hbWVcbikgKTtcblxuXG5jb25zdCBydW4gPSAoKSA9PiB7XG5cdGFkZEZpbHRlciggJ2pldC5mYi5yZWdpc3Rlci5zZXR0aW5ncy1wYWdlLnRhYnMnLCAnamV0LWZvcm0tYnVpbGRlcicsIG1vZHVsZXMgPT4ge1xuXHRcdGNvbnN0IG5hbWVzID0gZ2V0TW9kdWxlc05hbWVzKCBtb2R1bGVzICk7XG5cblx0XHRmb3IgKCBjb25zdCBhZGRvbiBvZiBhZGRvbnMgKSB7XG5cdFx0XHRpZiAoIG5hbWVzLmluY2x1ZGVzKCBhZGRvbi5jb21wb25lbnQubmFtZSApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdG1vZHVsZXMucHVzaCggYWRkb24gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbW9kdWxlcztcblx0fSwgMTAwMCApO1xuXG5cdGFkZEZpbHRlciggJ2pldC5mYi5yZWdpc3Rlci5nYXRld2F5cycsICdqZXQtZm9ybS1idWlsZGVyJywgbW9kdWxlcyA9PiB7XG5cdFx0Y29uc3QgbmFtZXMgPSBnZXRNb2R1bGVzTmFtZXMoIG1vZHVsZXMgKTtcblxuXHRcdGZvciAoIGNvbnN0IGdhdGV3YXkgb2YgZ2F0ZXdheXMgKSB7XG5cdFx0XHRpZiAoIG5hbWVzLmluY2x1ZGVzKCBnYXRld2F5LmNvbXBvbmVudC5uYW1lICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bW9kdWxlcy5wdXNoKCBnYXRld2F5ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1vZHVsZXM7XG5cdH0sIDEwMDAgKTtcbn07XG5cbmlmICggISB3aW5kb3c/LkpldEZCUGFnZUNvbmZpZz8uaXNfYWN0aXZlICkge1xuXHRydW4oKTtcbn1cblxuIiwiaW1wb3J0IFRhYiBmcm9tICcuL2ZyaWVuZGx5Q2FwdGNoYS52dWUnO1xuXG5jb25zdCBjb21wb25lbnQgPSBUYWI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29tcG9uZW50LFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRrZXk6IF9fKCAnU2l0ZSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmV4cG9ydCB7IGxhYmVsIH07IiwiaW1wb3J0IFRhYiBmcm9tICcuL3JlQ0FQVENIQXYzLnZ1ZSc7XG5cbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnQsXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgbGFiZWwgPSB7XG5cdGtleTogX18oICdTaXRlIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRzZWNyZXQ6IF9fKCAnU2VjcmV0IEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR0aHJlc2hvbGQ6IF9fKCAnU2NvcmUgVGhyZXNob2xkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHR0aHJlc2hvbGQ6IF9fKFxuXHRcdGBJdCBzaG91bGQgYmUgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGRlZmF1bHQgMC41ICgxLjAgaXMgdmVyeSBsaWtlbHkgYSBnb29kIGludGVyYWN0aW9uLCAwLjAgaXMgdmVyeSBsaWtlbHkgYSBib3QpLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdCksXG5cdGFwaVByZWY6IF9fKCAnUmVnaXN0ZXIgcmVDQVBUQ0hBIHYzIGtleXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0YXBpTGluazogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FkbWluL2NyZWF0ZSdcbn07XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IFRhYiBmcm9tICcuL2hDYXB0Y2hhLnZ1ZSc7XG5cbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnQsXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgbGFiZWwgPSB7XG5cdGtleTogX18oICdTaXRlIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRzZWNyZXQ6IF9fKCAnU2VjcmV0IEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxufTtcblxuXG5leHBvcnQgeyBsYWJlbCB9OyIsImltcG9ydCBUYWIgZnJvbSAnLi90dXJuc3RpbGUudnVlJztcblxuY29uc3QgY29tcG9uZW50ID0gVGFiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXBvbmVudCxcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5cbmV4cG9ydCB7IGxhYmVsIH07IiwiaW1wb3J0IFRhYiBmcm9tICcuL1BheXBhbFRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSA9IF9fKCAnUGF5UGFsIEdhdGV3YXkgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBUYWI7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnQsXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgbGFiZWwgPSB7XG5cdGNsaWVudF9pZDogX18oICdDbGllbnQgSUQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKVxufTtcblxuY29uc3QgaGVscCA9IHt9O1xuXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0aXRsZTogX18oICdBZGRyZXNzIEF1dG9jb21wbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRjb21wb25lbnQ6IHtcblx0XHRuYW1lOiAnamZiLWFkZHJlc3MtdGFiJyxcblx0fSxcblx0ZGlzYWJsZWQ6IHRydWUsXG5cdGljb246IElzUFJPSWNvbixcbn07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHRpdGxlOiBfXyggJ0NvbnZlcnRLaXQgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGNvbXBvbmVudDoge1xuXHRcdG5hbWU6ICdjb252ZXJ0LWtpdC10YWInLFxuXHR9LFxuXHRkaXNhYmxlZDogdHJ1ZSxcblx0aWNvbjogSXNQUk9JY29uLFxufTsiLCJpbXBvcnQgSXNQUk9JY29uIGZyb20gJy4uL0lzUFJPSWNvbic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0dGl0bGU6IF9fKCAnSHViU3BvdCBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0Y29tcG9uZW50OiB7XG5cdFx0bmFtZTogJ2h1YnNwb3QnLFxuXHR9LFxuXHRkaXNhYmxlZDogdHJ1ZSxcblx0aWNvbjogSXNQUk9JY29uLFxufTsiLCJpbXBvcnQgSXNQUk9JY29uIGZyb20gJy4uL0lzUFJPSWNvbic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0dGl0bGU6IF9fKCAnTWFpbGVyTGl0ZSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0Y29tcG9uZW50OiB7XG5cdFx0bmFtZTogJ21haWxlci1saXRlLXRhYicsXG5cdH0sXG5cdGRpc2FibGVkOiB0cnVlLFxuXHRpY29uOiBJc1BST0ljb24sXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0aXRsZTogX18oICdNb29zZW5kIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRjb21wb25lbnQ6IHtcblx0XHRuYW1lOiAnbW9vc2VuZCcsXG5cdH0sXG5cdGRpc2FibGVkOiB0cnVlLFxuXHRpY29uOiBJc1BST0ljb24sXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0aXRsZTogX18oICdTdHJpcGUgR2F0ZXdheSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0Y29tcG9uZW50OiB7XG5cdFx0bmFtZTogJ3N0cmlwZSdcblx0fSxcblx0ZGlzYWJsZWQ6IHRydWUsXG5cdGljb246IElzUFJPSWNvbixcbn0iLCJpbXBvcnQgQ2FwdGNoYVRhYiBmcm9tICcuL0NhcHRjaGFUYWIudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgICAgICAgICA9IF9fKCAnQ2FwdGNoYSBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ICAgICA9IENhcHRjaGFUYWI7XG5jb25zdCBkaXNwbGF5QnV0dG9uID0gZmFsc2U7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnQsXG5cdGRpc3BsYXlCdXR0b24sXG59OyIsImltcG9ydCBHZXRSZXNwb25zZVRhYiBmcm9tICcuL0dldFJlc3BvbnNlVGFiLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlID0gX18oICdHZXRSZXNwb25zZSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbmNvbnN0IGNvbXBvbmVudCA9IEdldFJlc3BvbnNlVGFiO1xuXG5leHBvcnQge1xuXHR0aXRsZSxcblx0Y29tcG9uZW50XG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgbGFiZWwgPSB7XG5cdGFwaV9rZXk6IF9fKCAnQVBJIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxufTtcblxuY29uc3QgaGVscCA9IHtcblx0YXBpUHJlZjogX18oICdIb3cgdG8gb2J0YWluIHlvdXIgR2V0UmVzcG9uc2UgQVBJIEtleT8gTW9yZSBpbmZvJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGFwaUxpbmtMYWJlbDogX18oICdoZXJlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGFwaUxpbms6ICdodHRwczovL2FwcC5nZXRyZXNwb25zZS5jb20vYXBpJ1xufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgTWFpbENoaW1wVGFiIGZyb20gJy4vTWFpbENoaW1wVGFiLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlID0gX18oICdNYWlsQ2hpbXAgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgPSBNYWlsQ2hpbXBUYWI7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnRcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0YXBpX2tleTogX18oICdBUEkgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBNYWlsQ2hpbXAgQVBJIEtleT8gTW9yZSBpbmZvJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGFwaUxpbmtMYWJlbDogX18oICdoZXJlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGFwaUxpbms6ICdodHRwczovL21haWxjaGltcC5jb20vaGVscC9hYm91dC1hcGkta2V5cy8nXG59O1xuXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBPcHRpb25zVGFiIGZyb20gJy4vT3B0aW9uc1RhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSAgICAgICAgID0gX18oICdPcHRpb25zJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgICAgID0gT3B0aW9uc1RhYjtcbmNvbnN0IGRpc3BsYXlCdXR0b24gPSBmYWxzZTtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudCxcblx0ZGlzcGxheUJ1dHRvbixcbn07IiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0ZW5hYmxlX2Rldl9tb2RlOiBfXyggJ0VuYWJsZSBEZXYtTW9kZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRkaXNhYmxlX25leHRfYnV0dG9uOiBfXyggJ0Rpc2FibGUgXCJOZXh0XCIgYnV0dG9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGNsZWFyX29uX3VuaW5zdGFsbDogX18oXG5cdFx0J0NsZWFyIHBsdWdpbiBkYXRhIGFmdGVyIHRoZSB1bmluc3RhbGwnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0c2Nyb2xsX29uX25leHQ6IF9fKFxuXHRcdCdTY3JvbGwgdG8gdGhlIHRvcCBvbiBwYWdlIGNoYW5nZScsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRhdXRvX2ZvY3VzOiBfXyhcblx0XHQnQXV0b21hdGljIGZvY3VzJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdGZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eTogX18oXG5cdFx0J0Zvcm0gUmVjb3JkcyBBY2Nlc3MgQ2FwYWJpbGl0eScsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRtYW51YWxfdmVyaWZpY2F0aW9uX2NhcGFiaWxpdHk6IF9fKFxuXHRcdCdNYW51YWwgVmVyaWZpY2F0aW9uIENhcGFiaWxpdHknLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0c3NyX3ZhbGlkYXRpb25fbWV0aG9kOiBfXyhcblx0XHQnU2VydmVyIHNpZGUgdmFsaWRhdGlvbiBtZXRob2QnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0c2VsZl9wcm9tb3RhYmxlX3JvbGVzOiBfXyhcblx0XHQnU2VsZi1Qcm9tb3RhYmxlIFJvbGVzJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRlbmFibGVfZGV2X21vZGU6IF9fKFxuXHRcdCdXaXRoIGRldmVsb3BlciBtb2RlIGVuYWJsZWQsIGVycm9ycyBmcm9tIHRoZSBmb3JtIHdpbGwgYmUgc2F2ZWQuJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdGRpc2FibGVfbmV4dF9idXR0b246IF9fKFxuXHRcdGBJZiB0aGlzIG9wdGlvbiBpcyBhY3RpdmUsIHRoZSBOZXh0IGJ1dHRvbiBpbiBhIG11bHRpLXN0ZXAgZm9ybSB3b24ndCBiZWNvbWUgY2xpY2thYmxlIHVudGlsIGFsbCB0aGUgcmVxdWlyZWQgZmllbGRzIGFyZSBjb21wbGV0ZWQuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdGNsZWFyX29uX3VuaW5zdGFsbDogX18oXG5cdFx0YElmIHRoaXMgb3B0aW9uIGlzIGFjdGl2ZSwgd2hlbiB0aGUgcGx1Z2luIGlzIGRlbGV0ZWQsIGFsbCBjdXN0b20gc3FsLXRhYmxlcywgYWxsIG9wdGlvbnMgYW5kIGZpbGVzIHdpbGwgYWxzbyBiZSBkZWxldGVkLiBJbiBwYXJ0aWN1bGFyLCB0aG9zZSB0aGF0IHdlcmUgdXBsb2FkZWQgdXNpbmcgTWVkaWEgRmllbGQuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdHNjcm9sbF9vbl9uZXh0OiBfXyhcblx0XHRgQXV0b21hdGljIHNjcm9sbGluZyB0byB0aGUgdG9wIG9mIHRoZSBmb3JtIHdoZW4gc3dpdGNoaW5nIGJldHdlZW4gZm9ybSBwYWdlcy5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0YXV0b19mb2N1czogX18oXG5cdFx0YEluZGljYXRlcyBpbnZhbGlkIGZpZWxkIGFuZCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGdvaW5nIHRvIHRoZSBuZXh0IHBhZ2Ugb3Igc3VibWl0dGluZyB0aGUgZm9ybSB1bmxlc3MgZmlsbGVkLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHk6IF9fKFxuXHRcdCdCeSBkZWZhdWx0IGFueSBGb3JtIFJlY29yZHMgYXZhaWxhYmxlIG9ubHkgZm9yIHVzZXJzIHdpdGggYG1hbmFnZV9vcHRpb25zYCBjYXBhYmlsaXR5LiBIZXJlIHlvdSBjYW4gb3ZlcndyaXRlIGl0IHdpdGggYW55IGNhcGFiaWxpdHkgeW91IHdhbnQuIE1vcmUgYWJvdXQgY2FwYWJpbGl0aWVzIDxhIGhyZWY9XCJodHRwczovL3dvcmRwcmVzcy5vcmcvc3VwcG9ydC9hcnRpY2xlL3JvbGVzLWFuZC1jYXBhYmlsaXRpZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aGVyZTwvYT4nLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0bWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5OiBfXyhcblx0XHQnQnkgZGVmYXVsdCwgb25seSB1c2VycyB3aXRoIHRoZSBgbWFuYWdlX29wdGlvbnNgIGNhcGFiaWxpdHkgY2FuIG1hbnVhbGx5IHZlcmlmeSBzdWJtaXNzaW9ucyBpbiBGb3JtIFJlY29yZHMuIEhlcmUgeW91IGNhbiBvdmVyd3JpdGUgaXQgd2l0aCBhbnkgY2FwYWJpbGl0eSB5b3Ugd2FudC4gTW9yZSBhYm91dCBjYXBhYmlsaXRpZXMgPGEgaHJlZj1cImh0dHBzOi8vd29yZHByZXNzLm9yZy9zdXBwb3J0L2FydGljbGUvcm9sZXMtYW5kLWNhcGFiaWxpdGllcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5oZXJlPC9hPicsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRzc3JfdmFsaWRhdGlvbl9tZXRob2Q6IF9fKFxuXHRcdCdTZWxlY3QgaG93IHRoZSBzZXJ2ZXItc2lkZSB2YWxpZGF0aW9uIHJlcXVlc3Qgd2lsbCBiZSBtYWRlIOKAkyB2aWEgV1AgUkVTVCBBUEksIGFkbWluLWFqYXgucGhwLCBvciB0aHJvdWdoIHRoZSBVUkwgb2YgdGhlIGN1cnJlbnQgcGFnZS4nLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0c2VsZl9wcm9tb3RhYmxlX3JvbGVzOiBfXyhcblx0XHQnVXNlcnMgd2l0aG91dCB0aGUgYHByb21vdGVfdXNlcnNgIGNhcGFiaWxpdHkgY2FuIGtlZXAgdGhlaXIgY3VycmVudCByb2xlIG9yIHN3aXRjaCBvbmx5IHRvIHJvbGVzIGZyb20gdGhpcyBsaXN0IGluIFVwZGF0ZSBVc2VyIGFjdGlvbnMuIExlYXZlIGl0IGVtcHR5IHRvIHNraXAgc2VsZi1zZXJ2aWNlIHJvbGUgY2hhbmdlcy4nLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcbn07XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07XG4iLCJpbXBvcnQgVGFiIGZyb20gJy4vUGF5bWVudHNHYXRld2F5cy52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSA9IF9fKCAnUGF5bWVudHMgR2F0ZXdheXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcbmNvbnN0IGRpc3BsYXlCdXR0b24gPSBmYWxzZTtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudCxcblx0ZGlzcGxheUJ1dHRvblxufSIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3QgbGFiZWwgPSB7XG5cdHVzZV9nYXRld2F5czogX18oICdFbmFibGUgR2F0ZXdheXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0ZW5hYmxlX3Rlc3RfbW9kZTogX18oICdFbmFibGUgVGVzdCBNb2RlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRlbmFibGVfdGVzdF9tb2RlOiBfXyhcblx0XHRgVGhpcyBvcHRpb24gdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSA8Y29kZT5qZXQtZm9ybS1idWlsZGVyL2dhdGV3YXlzL3BheXBhbC9zYW5kYm94LW1vZGU8L2NvZGU+IGZpbHRlci4gQXMgb2YgcmlnaHQgbm93LCB3b3JrcyBvbmx5IGZvciBQYXlQYWwgcGF5bWVudCBzeXN0ZW1gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0dXNlX2dhdGV3YXlzOiBfXyhcblx0XHRgQWN0aXZhdGUgcGF5bWVudCBnYXRld2F5cyBmb3IgdGhlIGZvcm1zLiBUaGlzIG9wdGlvbiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvYWxsb3ctZ2F0ZXdheXM8L2NvZGU+IGZpbHRlcmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxufTtcblxuZXhwb3J0IHtcblx0bGFiZWwsXG5cdGhlbHAsXG59OyIsImltcG9ydCBQaG9uZUZpZWxkVGFiIGZyb20gJy4vUGhvbmVGaWVsZFRhYic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmV4cG9ydCBjb25zdCB0aXRsZSAgICAgPSBfXyggJ0lwaW5mbyBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbmV4cG9ydCBjb25zdCBjb21wb25lbnQgPSBQaG9uZUZpZWxkVGFiO1xuIiwiY29uc3QgeyBzcHJpbnRmLCBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgaGVscCA9IHtcblx0aXBpbmZvX3Rva2VuOiBzcHJpbnRmKFxuXHRcdC8vIHRyYW5zbGF0b3JzOiAlMSRzIC0gaXBpbmZvLmlvIHdlYnNpdGUgVVJMLCAlMiRzIC0gdG9rZW4gZGFzaGJvYXJkIFVSTFxuXHRcdF9fKFxuXHRcdFx0J1NpZ24gaW4gYXQgPGEgaHJlZj1cIiUxJHNcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+aXBpbmZvLmlvPC9hPiBhbmQgZ2V0IHlvdXIgQVBJIHRva2VuIDxhIGhyZWY9XCIlMiRzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPmhlcmU8L2E+LicsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHQpLFxuXHRcdCdodHRwczovL2lwaW5mby5pbycsXG5cdFx0J2h0dHBzOi8vaXBpbmZvLmlvL2Rhc2hib2FyZC90b2tlbidcblx0KSxcbn07XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRpcGluZm9fdG9rZW46IF9fKCAnQVBJIFRva2VuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5leHBvcnQgeyBoZWxwLCBsYWJlbCB9O1xuIiwiaW1wb3J0IFNzckNhbGxiYWNrc1RhYiBmcm9tICcuL1NzckNhbGxiYWNrc1RhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSAgICAgICAgID0gX18oICdBbGxvd2VkIFNlcnZlci1TaWRlIENhbGxiYWNrcycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ICAgICA9IFNzckNhbGxiYWNrc1RhYjtcbmNvbnN0IGRpc3BsYXlCdXR0b24gPSBmYWxzZTtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudCxcblx0ZGlzcGxheUJ1dHRvbixcbn07XG4iLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRjYWxsYmFja3M6IF9fKCAnQWxsb3dlZCBTZXJ2ZXItU2lkZSBDYWxsYmFja3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0YmxvY2tlZDogX18oICdGb3JtcyBVc2luZyBCbG9ja2VkIEZ1bmN0aW9ucycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxufTtcblxuY29uc3QgaGVscCA9IHtcblx0Y2FsbGJhY2tzOiBfXyhcblx0XHQnRW50ZXIgY3VzdG9tIFBIUCBmdW5jdGlvbiBuYW1lcyBoZXJlIChvbmUgcGVyIGxpbmUpIHRvIGFsbG93IHRoZW0gaW4geW91ciBmb3Jtcy4gQnVpbHQtaW4gZnVuY3Rpb25zIGFyZSBhbHJlYWR5IGFsbG93ZWQuIEFsd2F5cyBjbGljayBcIlNhdmVcIiB0byBhcHBseSBjaGFuZ2VzLicsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRibG9ja2VkOiBfXyhcblx0XHQnVGhlc2UgZm9ybXMgdXNlIHVuc2FmZSB2YWxpZGF0aW9uIHJ1bGVzIHRoYXQgYXJlIHN0cmljdGx5IGJsb2NrZWQuIFRvIGZpeCB0aGVtLCBlZGl0IHRoZSBmb3JtIGFuZCBjaGFuZ2Ugb3IgcmVtb3ZlIHRoZSBTZXJ2ZXItU2lkZSBjYWxsYmFjayBmdW5jdGlvbi4gVGhlIGZvcm0gd2lsbCBhdXRvbWF0aWNhbGx5IGRpc2FwcGVhciBmcm9tIHRoaXMgbGlzdCBvbmNlIHNhdmVkLicsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRtaWdyYXRpb25JblByb2dyZXNzOiBfXyhcblx0XHQnSmV0Rm9ybUJ1aWxkZXIgaXMgc2Nhbm5pbmcgeW91ciBleGlzdGluZyBmb3JtcyBhbmQgYXV0b21hdGljYWxseSByZXN0b3JpbmcgdGhlIGN1c3RvbSBTZXJ2ZXItU2lkZSBjYWxsYmFjayBmdW5jdGlvbnMgdGhleSBhbHJlYWR5IHJlbGllZCBvbi4gVGhpcyBwYWdlIHdpbGwgdXBkYXRlIG9uIGl0cyBvd24gb25jZSB0aGF0IGZpbmlzaGVzIOKAlCBubyBuZWVkIHRvIHJlbG9hZC4nLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcbn07XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07XG4iLCJpbXBvcnQgVXNlckpvdXJuZXlUYWIgZnJvbSAnLi9Vc2VySm91cm5leVRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSAgICAgICAgID0gX18oICdVc2VyIEpvdXJuZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbmNvbnN0IGNvbXBvbmVudCAgICAgPSBVc2VySm91cm5leVRhYjtcbmNvbnN0IGRpc3BsYXlCdXR0b24gPSBmYWxzZTtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudCxcblx0ZGlzcGxheUJ1dHRvbixcbn07IiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0ZW5hYmxlX3VzZXJfam91cm5leTogX18oICdFbmFibGUgVXNlciBKb3VybmV5IFRyYWNraW5nJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdHN0b3JhZ2VfdHlwZTogX18oICdTdG9yYWdlIFR5cGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0Y2xlYXJfYWZ0ZXJfc3VibWl0OiBfXyggJ0NsZWFyIEpvdXJuZXkgQWZ0ZXIgU3VibWl0JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRlbmFibGVfdXNlcl9qb3VybmV5OiBfXyhcblx0XHQnVHJhY2sgdGhlIHVzZXLigJlzIGpvdXJuZXkgYWNyb3NzIHRoZSB3ZWJzaXRlIGFuZCBzYXZlIGl0IGluIHRoZSBicm93c2VyLicsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdCksXG5cdHN0b3JhZ2VfdHlwZTogX18oXG5cdFx0J0Nob29zZSB3aGVyZSB0byBzdG9yZSB0aGUgdXNlciBqb3VybmV5IGRhdGEnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHQpLFxuXHRjbGVhcl9hZnRlcl9zdWJtaXQ6IF9fKFxuXHRcdCdXaGVuIHRvIGNsZWFyIHRoZSBqb3VybmV5IGRhdGEgYWZ0ZXIgZm9ybSBzdWJtaXNzaW9uJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0KSxcbn07XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5qZmItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5qZmItY29udGVudC1tYWluIHtcbiAgZmxleDogMTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9TZXR0aW5nc1BhZ2UudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXdLQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUN2S0Q7QUR5S0M7RUFDQyxPQUFBO0FDdktGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi5qZmItY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiAyZW07XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcblxcdCYtbWFpbiB7XFxuXFx0XFx0ZmxleDogMTtcXG5cXHR9XFxufVxcblwiLFwiLmpmYi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJlbTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLmpmYi1jb250ZW50LW1haW4ge1xcbiAgZmxleDogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuamV0LWZvcm0tYnVpbGRlci1wYWdlX19iYW5uZXIudXNlZnVsIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbn1cbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRENEQ0REO1xuICBwYWRkaW5nLXRvcDogMjNweDtcbn1cbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzAwN0NCQTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhOmhvdmVyIHtcbiAgY29sb3I6ICMwNjZFQTI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhIC5oZWxwLWNlbnRlci1saW5rLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlXCIsXCJ3ZWJwYWNrOi8vLi8uLi9TZXR0aW5nc1NpZGVCYXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQStFQztFQUNDLGtCQUFBO0FDOUVGO0FEaUZDO0VBQ0MsV0FBQTtBQy9FRjtBRGlGRTtBQUhEO0lBSUUsVUFBQTtBQzlFRDtBQUNGO0FEZ0ZFO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDOUVIO0FEaUZFO0VBQ0MsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUMvRUg7QURpRkc7RUFDQyxnQkFBQTtBQy9FSjtBRGtGRztFQUNDLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDaEZKO0FEa0ZJO0VBQ0MsY0FBQTtFQUNBLDBCQUFBO0FDaEZMO0FEbUZJO0VBQ0Msa0JBQUE7QUNqRkxcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZSB7XFxuXFxuXFx0Jl9fYmFubmVyLnVzZWZ1bCB7XFxuXFx0XFx0cGFkZGluZzogMjBweCAzMHB4O1xcblxcdH1cXG5cXG5cXHQmX19wYW5lbC5oZWxwIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuXFx0XFx0XFx0d2lkdGg6IGNhbGMoMTAwJSAvIDIpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC1jb250ZW50IHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogMTJweDtcXG5cXHRcXHRcXHRib3JkZXItdG9wOiAxcHggc29saWQgI0RDRENERDtcXG5cXHRcXHRcXHRwYWRkaW5nLXRvcDogMjNweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0LmhlbHAtY2VudGVyLWxpbmsge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDIycHg7XFxuXFxuXFx0XFx0XFx0JjpsYXN0LWNoaWxkIHtcXG5cXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAwO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRhIHtcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogMThweDtcXG5cXHRcXHRcXHRcXHRjb2xvcjogIzAwN0NCQTtcXG5cXHRcXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxuXFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6ICMwNjZFQTI7XFxuXFx0XFx0XFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0XFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdFxcdC5oZWxwLWNlbnRlci1saW5rLWljb24ge1xcblxcdFxcdFxcdFxcdFxcdG1hcmdpbi1yaWdodDogMjhweDtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcblwiLFwiLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fYmFubmVyLnVzZWZ1bCB7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEQ0RDREQ7XFxuICBwYWRkaW5nLXRvcDogMjNweDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluazpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbmsgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6ICMwMDdDQkE7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbmsgYTpob3ZlciB7XFxuICBjb2xvcjogIzA2NkVBMjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGEgLmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5zcGFuW2RhdGEtdi0xNGJhYTIzMF0ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xuXHRwYWRkaW5nOiAwLjFlbSAwLjNlbTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRsaW5lLWhlaWdodDogMTZweDtcblx0bGV0dGVyLXNwYWNpbmc6IDA7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFvQkE7Q0FDQSx5QkFBQTtDQUNBLG9CQUFBO0NBQ0EseUJBQUE7Q0FDQSxrQkFBQTtDQUNBLFlBQUE7Q0FDQSxlQUFBO0NBQ0Esa0JBQUE7Q0FDQSxnQkFBQTtDQUNBLGlCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxnQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXHQ8c3Bhbj57eyBfXyggJ1BybycsICdqZXQtZm9ybS1idWlsZGVyJyApIH19PC9zcGFuPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5jb25zdCB7IGkxOG4gfSA9IEpldEZCTWl4aW5zO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG5cXHRuYW1lOiAnSXNQUk9JY29uJyxcXG5cXHRtaXhpbnM6IFsgaTE4biBdLFxcblxcdHByb3BzOiB7XFxuXFx0XFx0aXNBY3RpdmU6IHtcXG5cXHRcXHRcXHR0eXBlOiBCb29sZWFuLFxcblxcdFxcdFxcdGRlZmF1bHQ6IGZhbHNlLFxcblxcdFxcdH0sXFxuXFx0fSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuc3BhbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0NCQTtcXG5cXHRwYWRkaW5nOiAwLjFlbSAwLjNlbTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGxpbmUtaGVpZ2h0OiAxNnB4O1xcblxcdGxldHRlci1zcGFjaW5nOiAwO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbi5qZmItaGFzLWVycm9yIC5jeC12dWktaW5wdXRbZGF0YS12LTlkYzQyZGU2XSxcbi5qZmItaGFzLWVycm9yIGlucHV0W2RhdGEtdi05ZGM0MmRlNl0ge1xuICBib3JkZXItY29sb3I6ICNkYzI2MjYgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5qZmItZmllbGQtZXJyb3JbZGF0YS12LTlkYzQyZGU2XSB7XG4gIG1hcmdpbjogNnB4IDAgMTJweDtcbiAgY29sb3I6ICNkYzI2MjY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjpyaWdodDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaVNBOztFQUVBLGdDQUFBO0VBQ0EsYUFBQTtBQUNBO0FBRUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXHQ8ZGl2PlxcblxcdFxcdDxjeC12dWktc3dpdGNoZXJcXG5cXHRcXHRcXHRuYW1lPVxcXCJlbmFibGVfZGV2X21vZGVcXFwiXFxuXFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdDpsYWJlbD1cXFwibG9hZGluZy5lbmFibGVfZGV2X21vZGUgPyBgJHtsYWJlbC5lbmFibGVfZGV2X21vZGV9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5lbmFibGVfZGV2X21vZGVcXFwiXFxuXFx0XFx0XFx0OmRlc2NyaXB0aW9uPVxcXCJoZWxwLmVuYWJsZV9kZXZfbW9kZVxcXCJcXG5cXHRcXHRcXHQ6dmFsdWU9XFxcInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdlbmFibGVfZGV2X21vZGUnICkgPyBzdG9yYWdlLmVuYWJsZV9kZXZfbW9kZSA6IGZhbHNlXFxcIlxcblxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nXFxcIlxcblxcdFxcdFxcdEBpbnB1dD1cXFwiY2hhbmdlVmFsKCAnZW5hYmxlX2Rldl9tb2RlJywgJGV2ZW50IClcXFwiXFxuXFx0XFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxcblxcdFxcdDxjeC12dWktc3dpdGNoZXJcXG5cXHRcXHRcXHRuYW1lPVxcXCJjbGVhcl9vbl91bmluc3RhbGxcXFwiXFxuXFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdDpsYWJlbD1cXFwibG9hZGluZy5jbGVhcl9vbl91bmluc3RhbGwgPyBgJHtsYWJlbC5jbGVhcl9vbl91bmluc3RhbGx9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5jbGVhcl9vbl91bmluc3RhbGxcXFwiXFxuXFx0XFx0XFx0OmRlc2NyaXB0aW9uPVxcXCJoZWxwLmNsZWFyX29uX3VuaW5zdGFsbFxcXCJcXG5cXHRcXHRcXHQ6dmFsdWU9XFxcInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdjbGVhcl9vbl91bmluc3RhbGwnICkgPyBzdG9yYWdlLmNsZWFyX29uX3VuaW5zdGFsbCA6IGZhbHNlXFxcIlxcblxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nXFxcIlxcblxcdFxcdFxcdEBpbnB1dD1cXFwiY2hhbmdlVmFsKCAnY2xlYXJfb25fdW5pbnN0YWxsJywgJGV2ZW50IClcXFwiXFxuXFx0XFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxcblxcdFxcdDxjeC12dWktaW5wdXRcXG5cXHRcXHRcXHRuYW1lPVxcXCJmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHlcXFwiXFxuXFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdDpzaXplPVxcXCInZnVsbHdpZHRoJ1xcXCJcXG5cXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5ID8gYCR7bGFiZWwuZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5fSAobG9hZGluZy4uLilgIDogbGFiZWwuZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5XFxcIlxcblxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHlcXFwiXFxuXFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5JyApID8gc3RvcmFnZS5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHkgOiAnbWFuYWdlX29wdGlvbnMnXFxcIlxcblxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nXFxcIlxcblxcdFxcdFxcdEBpbnB1dD1cXFwiY2hhbmdlVmFsKCAnZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5JywgJGV2ZW50IClcXFwiXFxuXFx0XFx0Lz5cXG5cXHRcXHQ8Y3gtdnVpLWlucHV0XFxuXFx0XFx0XFx0bmFtZT1cXFwibWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5XFxcIlxcblxcdFxcdFxcdDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG5cXHRcXHRcXHQ6c2l6ZT1cXFwiJ2Z1bGx3aWR0aCdcXFwiXFxuXFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLm1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eSA/IGAke2xhYmVsLm1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLm1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eVxcXCJcXG5cXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAubWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5XFxcIlxcblxcdFxcdFxcdDp2YWx1ZT1cXFwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ21hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eScgKSA/IHN0b3JhZ2UubWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5IDogJ21hbmFnZV9vcHRpb25zJ1xcXCJcXG5cXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcImlzTG9hZGluZ1xcXCJcXG5cXHRcXHRcXHRAaW5wdXQ9XFxcImNoYW5nZVZhbCggJ21hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eScsICRldmVudCApXFxcIlxcblxcdFxcdC8+XFxuXFx0XFx0PGN4LXZ1aS1zZWxlY3RcXG5cXHRcXHRcXHRuYW1lPVxcXCJzc3JfdmFsaWRhdGlvbl9tZXRob2RcXFwiXFxuXFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdDpzaXplPVxcXCInZnVsbHdpZHRoJ1xcXCJcXG5cXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuc3NyX3ZhbGlkYXRpb25fbWV0aG9kID8gYCR7bGFiZWwuc3NyX3ZhbGlkYXRpb25fbWV0aG9kfSAobG9hZGluZy4uLilgIDogbGFiZWwuc3NyX3ZhbGlkYXRpb25fbWV0aG9kXFxcIlxcblxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5zc3JfdmFsaWRhdGlvbl9tZXRob2RcXFwiXFxuXFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnc3NyX3ZhbGlkYXRpb25fbWV0aG9kJyApID8gc3RvcmFnZS5zc3JfdmFsaWRhdGlvbl9tZXRob2QgOiAncmVzdCdcXFwiXFxuXFx0XFx0XFx0Om9wdGlvbnMtbGlzdD1cXFwic2VsZWN0T3B0aW9uc1xcXCJcXG5cXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcImlzTG9hZGluZ1xcXCJcXG5cXHRcXHRcXHRAaW5wdXQ9XFxcImNoYW5nZVZhbCggJ3Nzcl92YWxpZGF0aW9uX21ldGhvZCcsICRldmVudCApXFxcIlxcblxcdFxcdD48L2N4LXZ1aS1zZWxlY3Q+XFxuXFx0XFx0PGN4LXZ1aS1mLXNlbGVjdFxcblxcdFxcdFxcdG5hbWU9XFxcInNlbGZfcHJvbW90YWJsZV9yb2xlc1xcXCJcXG5cXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuc2VsZl9wcm9tb3RhYmxlX3JvbGVzID8gYCR7bGFiZWwuc2VsZl9wcm9tb3RhYmxlX3JvbGVzfSAobG9hZGluZy4uLilgIDogbGFiZWwuc2VsZl9wcm9tb3RhYmxlX3JvbGVzXFxcIlxcblxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5zZWxmX3Byb21vdGFibGVfcm9sZXNcXFwiXFxuXFx0XFx0XFx0OnZhbHVlPVxcXCJzZWxlY3RlZFNlbGZQcm9tb3RhYmxlUm9sZXNcXFwiXFxuXFx0XFx0XFx0Om9wdGlvbnMtbGlzdD1cXFwiYXZhaWxhYmxlUm9sZXNcXFwiXFxuXFx0XFx0XFx0Om11bHRpcGxlPVxcXCJ0cnVlXFxcIlxcblxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nXFxcIlxcblxcdFxcdFxcdDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG5cXHRcXHRcXHQ6c2l6ZT1cXFwiJ2Z1bGx3aWR0aCdcXFwiXFxuXFx0XFx0XFx0QG9uLWNoYW5nZT1cXFwiY2hhbmdlU2VsZlByb21vdGFibGVSb2xlcyggJGV2ZW50IClcXFwiXFxuXFx0XFx0PjwvY3gtdnVpLWYtc2VsZWN0PlxcblxcdFxcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXJcXG5cXHRcXHRcXHQ6bGFiZWw9XFxcIl9fKCAnRm9ybSBBY2Nlc3NpYmlsaXR5JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcXFwiXFxuXFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdC8+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY3gtdnVpLWlubmVyLXBhbmVsXFxcIj5cXG5cXHRcXHRcXHQ8Y3gtdnVpLXN3aXRjaGVyXFxuXFx0XFx0XFx0XFx0bmFtZT1cXFwiZGlzYWJsZV9uZXh0X2J1dHRvblxcXCJcXG5cXHRcXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxuXFx0XFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLmRpc2FibGVfbmV4dF9idXR0b24gPyBgJHtsYWJlbC5kaXNhYmxlX25leHRfYnV0dG9ufSAobG9hZGluZy4uLilgIDogbGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvblxcXCJcXG5cXHRcXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuZGlzYWJsZV9uZXh0X2J1dHRvblxcXCJcXG5cXHRcXHRcXHRcXHQ6dmFsdWU9XFxcInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdkaXNhYmxlX25leHRfYnV0dG9uJyApID8gc3RvcmFnZS5kaXNhYmxlX25leHRfYnV0dG9uIDogdHJ1ZVxcXCJcXG5cXHRcXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcImlzTG9hZGluZ1xcXCJcXG5cXHRcXHRcXHRcXHRAaW5wdXQ9XFxcImNoYW5nZVZhbCggJ2Rpc2FibGVfbmV4dF9idXR0b24nLCAkZXZlbnQgKVxcXCJcXG5cXHRcXHRcXHQ+PC9jeC12dWktc3dpdGNoZXI+XFxuXFx0XFx0XFx0PGN4LXZ1aS1zd2l0Y2hlclxcblxcdFxcdFxcdFxcdG5hbWU9XFxcInNjcm9sbF9vbl9uZXh0XFxcIlxcblxcdFxcdFxcdFxcdDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG5cXHRcXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuc2Nyb2xsX29uX25leHQgPyBgJHtsYWJlbC5zY3JvbGxfb25fbmV4dH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLnNjcm9sbF9vbl9uZXh0XFxcIlxcblxcdFxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5zY3JvbGxfb25fbmV4dFxcXCJcXG5cXHRcXHRcXHRcXHQ6dmFsdWU9XFxcInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdzY3JvbGxfb25fbmV4dCcgKSA/IHN0b3JhZ2Uuc2Nyb2xsX29uX25leHQgOiBmYWxzZVxcXCJcXG5cXHRcXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcImlzTG9hZGluZ1xcXCJcXG5cXHRcXHRcXHRcXHRAaW5wdXQ9XFxcImNoYW5nZVZhbCggJ3Njcm9sbF9vbl9uZXh0JywgJGV2ZW50IClcXFwiXFxuXFx0XFx0XFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxcblxcdFxcdFxcdDxjeC12dWktc3dpdGNoZXJcXG5cXHRcXHRcXHRcXHRuYW1lPVxcXCJhdXRvX2ZvY3VzXFxcIlxcblxcdFxcdFxcdFxcdDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG5cXHRcXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuYXV0b19mb2N1cyA/IGAke2xhYmVsLmF1dG9fZm9jdXN9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5hdXRvX2ZvY3VzXFxcIlxcblxcdFxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5hdXRvX2ZvY3VzXFxcIlxcblxcdFxcdFxcdFxcdDp2YWx1ZT1cXFwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2F1dG9fZm9jdXMnICkgPyBzdG9yYWdlLmF1dG9fZm9jdXMgOiBmYWxzZVxcXCJcXG5cXHRcXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcImlzTG9hZGluZ1xcXCJcXG5cXHRcXHRcXHRcXHRAaW5wdXQ9XFxcImNoYW5nZVZhbCggJ2F1dG9fZm9jdXMnLCAkZXZlbnQgKVxcXCJcXG5cXHRcXHRcXHQ+PC9jeC12dWktc3dpdGNoZXI+XFxuXFx0XFx0PC9kaXY+XFxuXFxuICAgIDxjeC12dWktY29tcG9uZW50LXdyYXBwZXJcXG4gICAgICAgIDpsYWJlbD1cXFwiX18oICdGb3JtIFJlcXVlc3QgQXJncycsICdqZXQtZm9ybS1idWlsZGVyJyApXFxcIlxcbiAgICAgICAgOndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcbiAgICAvPlxcblxcbiAgICA8Y3gtdnVpLWlucHV0XFxuICAgICAgICBuYW1lPVxcXCJnZmJfcmVxdWVzdF9hcmdzX2tleVxcXCJcXG4gICAgICAgIDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcsIGVycm9ycy5nZmJfcmVxdWVzdF9hcmdzX2tleSA/ICdqZmItaGFzLWVycm9yJyA6ICcnIF1cXFwiXFxuICAgIDpzaXplPVxcXCInZnVsbHdpZHRoJ1xcXCJcXG4gICAgOmxhYmVsPVxcXCInUmVxdWVzdCBrZXknXFxcIlxcbiAgICA6ZGVzY3JpcHRpb249XFxcIidVbmlxdWUgZm9ybSBwYXJhbWV0ZXIgKGtleSknXFxcIlxcbiAgICA6dmFsdWU9XFxcInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdnZmJfcmVxdWVzdF9hcmdzX2tleScgKSA/IHN0b3JhZ2UuZ2ZiX3JlcXVlc3RfYXJnc19rZXkgOiAnMTExMSdcXFwiXFxuICAgIDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nXFxcIlxcbiAgICBAaW5wdXQ9XFxcImNoYW5nZVZhbCggJ2dmYl9yZXF1ZXN0X2FyZ3Nfa2V5JywgJGV2ZW50IClcXFwiXFxuICAgIC8+XFxuICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5XFxcIiBjbGFzcz1cXFwiamZiLWZpZWxkLWVycm9yXFxcIj5cXG4gICAgICB7eyBlcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc19rZXkgfX1cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxjeC12dWktaW5wdXRcXG4gICAgICAgIG5hbWU9XFxcImdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWVcXFwiXFxuICAgICAgICA6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnLCBlcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZSA/ICdqZmItaGFzLWVycm9yJyA6ICcnIF1cXFwiXFxuICAgIDpzaXplPVxcXCInZnVsbHdpZHRoJ1xcXCJcXG4gICAgOmxhYmVsPVxcXCInUmVxdWVzdCB2YWx1ZSdcXFwiXFxuICAgIDpkZXNjcmlwdGlvbj1cXFwiJ1VuaXF1ZSBmb3JtIHBhcmFtZXRlciAodmFsdWUpJ1xcXCJcXG4gICAgOnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScgKSA/IHN0b3JhZ2UuZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZSA6ICcyMjIyJ1xcXCJcXG4gICAgOmRpc2FibGVkPVxcXCJpc0xvYWRpbmdcXFwiXFxuICAgIEBpbnB1dD1cXFwiY2hhbmdlVmFsKCAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScsICRldmVudCApXFxcIlxcbiAgICAvPlxcbiAgICA8ZGl2IHYtaWY9XFxcImVycm9ycy5nZmJfcmVxdWVzdF9hcmdzX3ZhbHVlXFxcIiBjbGFzcz1cXFwiamZiLWZpZWxkLWVycm9yXFxcIj5cXG4gICAgICB7eyBlcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZSB9fVxcbiAgICA8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHtcXG5cXHRoZWxwLFxcblxcdGxhYmVsLFxcbn0gZnJvbSAnLi9zb3VyY2UnO1xcblxcblxcbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG5cXHRuYW1lOiAnb3B0aW9ucy10YWInLFxcblxcdHByb3BzOiB7XFxuXFx0XFx0aW5jb21pbmc6IHtcXG5cXHRcXHRcXHR0eXBlOiBPYmplY3QsXFxuXFx0XFx0XFx0ZGVmYXVsdDoge30sXFxuXFx0XFx0fSxcXG5cXHR9LFxcblxcdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBpMThuIF0sXFxuXFx0ZGF0YSgpIHtcXG5cXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdGxhYmVsLCBoZWxwLFxcblxcdFxcdFxcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcXG5cXHRcXHRcXHRpc0xvYWRpbmc6IGZhbHNlLFxcblxcdFxcdFxcdGxvYWRpbmc6IHt9LFxcblxcdFxcdFxcdHBlbmRpbmdTYXZlOiBmYWxzZSxcXG5cXHRcXHRcXHRlcnJvcnM6IHtcXG5cXHRcXHRcXHRcXHRnZmJfcmVxdWVzdF9hcmdzX2tleTogJycsXFxuXFx0XFx0XFx0XFx0Z2ZiX3JlcXVlc3RfYXJnc192YWx1ZTogJycsXFxuXFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRzZWxlY3RPcHRpb25zOiBbXFxuXFx0XFx0XFx0XFx0eyB2YWx1ZTogJ3Jlc3QnLCBsYWJlbDogKCAnUmVzdCBBUEknICkgfSxcXG5cXHRcXHRcXHRcXHR7IHZhbHVlOiAnYWRtaW5fYWpheCcsIGxhYmVsOiAoICdBZG1pbiBBamF4JyApIH0sXFxuXFx0XFx0XFx0XFx0eyB2YWx1ZTogJ3NlbGYnLCBsYWJlbDogKCAnU2VsZicgKSB9LFxcblxcdFxcdFxcdF0sXFxuXFx0XFx0fTtcXG5cXHR9LFxcblxcdGNvbXB1dGVkOiB7XFxuXFx0XFx0YXZhaWxhYmxlUm9sZXMoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHRoaXMuc3RvcmFnZS5hdmFpbGFibGVfcm9sZXMgfHwgW107XFxuXFx0XFx0fSxcXG5cXHRcXHRzZWxlY3RlZFNlbGZQcm9tb3RhYmxlUm9sZXMoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHRoaXMuc3RvcmFnZS5zZWxmX3Byb21vdGFibGVfcm9sZXMgfHwgW107XFxuXFx0XFx0fSxcXG5cXHR9LFxcblxcdGNyZWF0ZWQoKSB7XFxuXFx0XFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHRoaXMub25DaGFuZ2VTdGF0ZS5iaW5kKCB0aGlzICkgKTtcXG5cXHR9LFxcblxcdG1ldGhvZHM6IHtcXG5cXHRcXHRnZXRTYXZhYmxlRGF0YSgpIHtcXG5cXHRcXHRcXHRjb25zdCB7XFxuXFx0XFx0XFx0XFx0ZW5hYmxlX2Rldl9tb2RlLFxcblxcdFxcdFxcdFxcdGNsZWFyX29uX3VuaW5zdGFsbCxcXG5cXHRcXHRcXHRcXHRmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHksXFxuXFx0XFx0XFx0XFx0bWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5LFxcblxcdFxcdFxcdFxcdHNzcl92YWxpZGF0aW9uX21ldGhvZCxcXG5cXHRcXHRcXHRcXHRzZWxmX3Byb21vdGFibGVfcm9sZXMsXFxuXFx0XFx0XFx0XFx0ZGlzYWJsZV9uZXh0X2J1dHRvbixcXG5cXHRcXHRcXHRcXHRzY3JvbGxfb25fbmV4dCxcXG5cXHRcXHRcXHRcXHRhdXRvX2ZvY3VzLFxcblxcdFxcdFxcdFxcdGdmYl9yZXF1ZXN0X2FyZ3Nfa2V5LFxcblxcdFxcdFxcdFxcdGdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUsXFxuXFx0XFx0XFx0fSA9IHRoaXMuc3RvcmFnZTtcXG5cXG5cXHRcXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdFxcdGVuYWJsZV9kZXZfbW9kZSxcXG5cXHRcXHRcXHRcXHRjbGVhcl9vbl91bmluc3RhbGwsXFxuXFx0XFx0XFx0XFx0Zm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5LFxcblxcdFxcdFxcdFxcdG1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eSxcXG5cXHRcXHRcXHRcXHRzc3JfdmFsaWRhdGlvbl9tZXRob2QsXFxuXFx0XFx0XFx0XFx0c2VsZl9wcm9tb3RhYmxlX3JvbGVzOiBBcnJheS5pc0FycmF5KCBzZWxmX3Byb21vdGFibGVfcm9sZXMgKSAmJiAhIHNlbGZfcHJvbW90YWJsZV9yb2xlcy5sZW5ndGhcXG5cXHRcXHRcXHRcXHRcXHQ/IFsgJycgXVxcblxcdFxcdFxcdFxcdFxcdDogc2VsZl9wcm9tb3RhYmxlX3JvbGVzLFxcblxcdFxcdFxcdFxcdGRpc2FibGVfbmV4dF9idXR0b24sXFxuXFx0XFx0XFx0XFx0c2Nyb2xsX29uX25leHQsXFxuXFx0XFx0XFx0XFx0YXV0b19mb2N1cyxcXG5cXHRcXHRcXHRcXHRnZmJfcmVxdWVzdF9hcmdzX2tleSxcXG5cXHRcXHRcXHRcXHRnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlLFxcblxcdFxcdFxcdH07XFxuXFx0XFx0fSxcXG5cXHRcXHRnZXRSZXF1ZXN0T25TYXZlKCkge1xcblxcdFxcdFxcdHJldHVybiB7XFxuXFx0XFx0XFx0XFx0ZGF0YTogdGhpcy5nZXRTYXZhYmxlRGF0YSgpLFxcblxcdFxcdFxcdH07XFxuXFx0XFx0fSxcXG5cXHRcXHRvbkNoYW5nZVN0YXRlKCB7IHN0YXRlLCBzbHVnIH0gKSB7XFxuXFx0XFx0XFx0aWYgKCAnb3B0aW9ucy10YWInICE9PSBzbHVnICkge1xcblxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0aWYgKCAnZW5kJyA9PT0gc3RhdGUgKSB7XFxuXFx0XFx0XFx0XFx0dGhpcy5sb2FkaW5nID0ge307XFxuXFx0XFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLCAnaXNMb2FkaW5nJywgZmFsc2UgKTtcXG5cXG5cXHRcXHRcXHRcXHRpZiAoIHRoaXMucGVuZGluZ1NhdmUgKSB7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5wZW5kaW5nU2F2ZSA9IGZhbHNlO1xcblxcdFxcdFxcdFxcdFxcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XFxuXFx0XFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLCAnaXNMb2FkaW5nJywgc3RhdGUgPT09ICdiZWdpbicgKTtcXG5cXHRcXHR9LFxcblxcdFxcdHZhbGlkYXRlRmllbGQoIG5hbWUsIHZhbHVlICkge1xcblxcdFxcdFxcdGlmICggbmFtZSAhPT0gJ2dmYl9yZXF1ZXN0X2FyZ3Nfa2V5JyAmJiBuYW1lICE9PSAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScgKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuIHRydWU7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdGNvbnN0IHZhbCA9IFN0cmluZyggdmFsdWUgPz8gJycgKTtcXG5cXHRcXHRcXHRjb25zdCBvbmx5RGlnaXRzID0gL15cXFxcZCskLy50ZXN0KCB2YWwgKTtcXG5cXG5cXHRcXHRcXHRpZiAoIG9ubHlEaWdpdHMgKSB7XFxuXFx0XFx0XFx0XFx0Y29uc3QgbXNnID0gdGhpcy5fXyhcXG5cXHRcXHRcXHRcXHRcXHQnTXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBsZXR0ZXIgKEHigJNaKS4gTnVtYmVycyBvbmx5IGFyZSBub3QgYWxsb3dlZC4nLFxcblxcdFxcdFxcdFxcdFxcdCdqZXQtZm9ybS1idWlsZGVyJ1xcblxcdFxcdFxcdFxcdCk7XFxuXFx0XFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLmVycm9ycywgbmFtZSwgbXNnICk7XFxuXFx0XFx0XFx0XFx0cmV0dXJuIGZhbHNlO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMuZXJyb3JzLCBuYW1lLCAnJyApO1xcblxcdFxcdFxcdHJldHVybiB0cnVlO1xcblxcdFxcdH0sXFxuXFx0XFx0Y2hhbmdlU2VsZlByb21vdGFibGVSb2xlcyggdmFsdWUgKSB7XFxuXFx0XFx0XFx0aWYgKCAhIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHR0aGlzLmNoYW5nZVZhbCggJ3NlbGZfcHJvbW90YWJsZV9yb2xlcycsIHZhbHVlICk7XFxuXFx0XFx0fSxcXG5cXHRcXHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xcblxcdFxcdFxcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCBuYW1lLCB2YWx1ZSApO1xcblxcblxcdFxcdFxcdGlmICggbmFtZSA9PT0gJ2dmYl9yZXF1ZXN0X2FyZ3Nfa2V5JyB8fCBuYW1lID09PSAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScgKSB7XFxuXFx0XFx0XFx0XFx0Y29uc3Qgb2sgPSB0aGlzLnZhbGlkYXRlRmllbGQoIG5hbWUsIHZhbHVlICk7XFxuXFx0XFx0XFx0XFx0aWYgKCAhIG9rICkge1xcblxcdFxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nLCBuYW1lLCB0cnVlICk7XFxuXFxuXFx0XFx0XFx0aWYgKCB0aGlzLmlzTG9hZGluZyApIHtcXG5cXHRcXHRcXHRcXHR0aGlzLnBlbmRpbmdTYXZlID0gdHJ1ZTtcXG5cXHRcXHRcXHRcXHRyZXR1cm47XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XFxuXFx0XFx0fSxcXG5cXHR9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4uamZiLWhhcy1lcnJvciAuY3gtdnVpLWlucHV0LFxcbi5qZmItaGFzLWVycm9yIGlucHV0IHtcXG4gIGJvcmRlci1jb2xvcjogI2RjMjYyNiAhaW1wb3J0YW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmpmYi1maWVsZC1lcnJvciB7XFxuICBtYXJnaW46IDZweCAwIDEycHg7XFxuICBjb2xvcjogI2RjMjYyNjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICB0ZXh0LWFsaWduOnJpZ2h0O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4uamZiLXNzci1jYWxsYmFja3MtdGV4dGFyZWFbZGF0YS12LTE3YWIyMzg4XSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xuXHRtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRbZGF0YS12LTE3YWIyMzg4XSB7XG5cdGNvbG9yOiAjZGMyNjI2O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHBhZGRpbmc6IDAgMjBweDtcblx0bWFyZ2luOiAtMTBweCAwIDIwcHg7XG59XG4uamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRfX2xpc3RbZGF0YS12LTE3YWIyMzg4XSB7XG5cdG1hcmdpbjogNHB4IDAgMDtcblx0cGFkZGluZzogMDtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZF9fbGlzdCBsaVtkYXRhLXYtMTdhYjIzODhdIHtcblx0bWFyZ2luLWJvdHRvbTogMnB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE0cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZF9fbGlzdCBsaVtkYXRhLXYtMTdhYjIzODhdOjpiZWZvcmUge1xuXHRjb250ZW50OiAn4oCTJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xufVxuLmpmYi1zc3ItYmxvY2tlZF9fbGlzdFtkYXRhLXYtMTdhYjIzODhdIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuLmpmYi1zc3ItYmxvY2tlZF9fbGlzdCBsaVtkYXRhLXYtMTdhYjIzODhdIHtcblx0bWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmpmYi1zc3ItYmxvY2tlZF9fZm9ybVtkYXRhLXYtMTdhYjIzODhdIHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5qZmItc3NyLWJsb2NrZWRfX21ldGFbZGF0YS12LTE3YWIyMzg4XSB7XG5cdGNvbG9yOiAjNjQ2OTcwO1xuXHRtYXJnaW46IDAgNnB4O1xufVxuLmpmYi1zc3ItYmxvY2tlZF9fbWV0YSBjb2RlW2RhdGEtdi0xN2FiMjM4OF0ge1xuXHRjb2xvcjogI2RjMjYyNjtcbn1cbi5qZmItc3NyLW1pZ3JhdGlvbi13YWl0W2RhdGEtdi0xN2FiMjM4OF0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0Z2FwOiAxMnB4O1xuXHRwYWRkaW5nOiAxNnB4IDIwcHg7XG5cdGJhY2tncm91bmQ6ICNmMGY2ZmM7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjM2RjZjE7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5qZmItc3NyLW1pZ3JhdGlvbi13YWl0X19zcGlubmVyW2RhdGEtdi0xN2FiMjM4OF0ge1xuXHRmbGV4OiAwIDAgYXV0bztcblx0d2lkdGg6IDE4cHg7XG5cdGhlaWdodDogMThweDtcblx0bWFyZ2luLXRvcDogMnB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjYzNkY2YxO1xuXHRib3JkZXItdG9wLWNvbG9yOiAjMjI3MWIxO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGFuaW1hdGlvbjogamZiLXNzci1taWdyYXRpb24td2FpdC1zcGluLWRhdGEtdi0xN2FiMjM4OCAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgamZiLXNzci1taWdyYXRpb24td2FpdC1zcGluLWRhdGEtdi0xN2FiMjM4OCB7XG50byB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoIDM2MGRlZyApO1xufVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9zc3ItY2FsbGJhY2tzL1NzckNhbGxiYWNrc1RhYi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJPQTtDQUNBLFdBQUE7Q0FDQSxzQkFBQTtDQUNBLGtCQUFBO0FBQ0E7QUFFQTtDQUNBLGNBQUE7Q0FDQSxlQUFBO0NBQ0EsZUFBQTtDQUNBLG9CQUFBO0FBQ0E7QUFFQTtDQUNBLGVBQUE7Q0FDQSxVQUFBO0NBQ0EsZ0JBQUE7QUFDQTtBQUVBO0NBQ0Esa0JBQUE7Q0FDQSxrQkFBQTtDQUNBLGtCQUFBO0FBQ0E7QUFFQTtDQUNBLFlBQUE7Q0FDQSxrQkFBQTtDQUNBLE9BQUE7QUFDQTtBQUVBO0NBQ0EsU0FBQTtDQUNBLFVBQUE7Q0FDQSxnQkFBQTtBQUNBO0FBRUE7Q0FDQSxrQkFBQTtBQUNBO0FBRUE7Q0FDQSxnQkFBQTtBQUNBO0FBRUE7Q0FDQSxjQUFBO0NBQ0EsYUFBQTtBQUNBO0FBRUE7Q0FDQSxjQUFBO0FBQ0E7QUFFQTtDQUNBLGFBQUE7Q0FDQSx1QkFBQTtDQUNBLFNBQUE7Q0FDQSxrQkFBQTtDQUNBLG1CQUFBO0NBQ0EseUJBQUE7Q0FDQSxrQkFBQTtBQUNBO0FBRUE7Q0FDQSxjQUFBO0NBQ0EsV0FBQTtDQUNBLFlBQUE7Q0FDQSxlQUFBO0NBQ0EseUJBQUE7Q0FDQSx5QkFBQTtDQUNBLGtCQUFBO0NBQ0EsMkVBQUE7QUFDQTtBQUVBO0FBQ0E7RUFDQSwyQkFBQTtBQUNBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcdDxkaXY+XFxuXFx0XFx0PGRpdiB2LWlmPVxcXCJtaWdyYXRpb25JblByb2dyZXNzXFxcIiBjbGFzcz1cXFwiamZiLXNzci1taWdyYXRpb24td2FpdFxcXCI+XFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImpmYi1zc3ItbWlncmF0aW9uLXdhaXRfX3NwaW5uZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxuXFx0XFx0XFx0PGRpdj5cXG5cXHRcXHRcXHRcXHQ8c3Ryb25nPnt7IF9fKCAnTWlncmF0aW9uIGluIHByb2dyZXNz4oCmJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3N0cm9uZz5cXG5cXHRcXHRcXHRcXHQ8cD57eyBoZWxwLm1pZ3JhdGlvbkluUHJvZ3Jlc3MgfX08L3A+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0PC9kaXY+XFxuXFx0XFx0PHRlbXBsYXRlIHYtZWxzZT5cXG5cXHRcXHRcXHQ8Y3gtdnVpLWNvbXBvbmVudC13cmFwcGVyXFxuXFx0XFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLmNhbGxiYWNrcyA/IGAke2xhYmVsLmNhbGxiYWNrc30gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmNhbGxiYWNrc1xcXCJcXG5cXHRcXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuY2FsbGJhY2tzXFxcIlxcblxcdFxcdFxcdFxcdDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG5cXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0PHRleHRhcmVhXFxuXFx0XFx0XFx0XFx0XFx0Y2xhc3M9XFxcImpmYi1zc3ItY2FsbGJhY2tzLXRleHRhcmVhXFxcIlxcblxcdFxcdFxcdFxcdFxcdHJvd3M9XFxcIjEwXFxcIlxcblxcdFxcdFxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nXFxcIlxcblxcdFxcdFxcdFxcdFxcdDp2YWx1ZT1cXFwic3RvcmFnZS5jYWxsYmFja3NcXFwiXFxuXFx0XFx0XFx0XFx0XFx0QGlucHV0PVxcXCJvbklucHV0KCAkZXZlbnQudGFyZ2V0LnZhbHVlIClcXFwiXFxuXFx0XFx0XFx0XFx0PjwvdGV4dGFyZWE+XFxuXFx0XFx0XFx0XFx0PGN4LXZ1aS1idXR0b25cXG5cXHRcXHRcXHRcXHRcXHRidXR0b24tc3R5bGU9XFxcImFjY2VudFxcXCJcXG5cXHRcXHRcXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcImlzTG9hZGluZyB8fCAhaGFzVW5zYXZlZENhbGxiYWNrc0NoYW5nZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRAY2xpY2s9XFxcIm9uU2F2ZUNhbGxiYWNrc1xcXCJcXG5cXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gc2xvdD1cXFwibGFiZWxcXFwiPnt7IF9fKCAnU2F2ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH19PC9zcGFuPlxcblxcdFxcdFxcdFxcdDwvY3gtdnVpLWJ1dHRvbj5cXG5cXHRcXHRcXHQ8L2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcj5cXG5cXHRcXHRcXHQ8ZGl2IHYtaWY9XFxcImhhc1JlamVjdGVkXFxcIiBjbGFzcz1cXFwiamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRcXFwiPlxcblxcdFxcdFxcdFxcdDxzdHJvbmc+e3sgX18oICdOb3Qgc2F2ZWQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3N0cm9uZz5cXG5cXHRcXHRcXHRcXHQ8dWwgY2xhc3M9XFxcImpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkX19saXN0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8bGlcXG5cXHRcXHRcXHRcXHRcXHRcXHR2LWZvcj1cXFwibmFtZSBpbiByZWplY3RlZE5hbWVzXFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdDprZXk9XFxcIm5hbWVcXFwiXFxuXFx0XFx0XFx0XFx0XFx0Pnt7IG5hbWUgfX0g4oCUIHt7IHJlamVjdGVkWyBuYW1lIF0gfX08L2xpPlxcblxcdFxcdFxcdFxcdDwvdWw+XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0PGN4LXZ1aS1jb21wb25lbnQtd3JhcHBlclxcblxcdFxcdFxcdFxcdHYtaWY9XFxcImJsb2NrZWQubGVuZ3RoXFxcIlxcblxcdFxcdFxcdFxcdDpsYWJlbD1cXFwiYCR7bGFiZWwuYmxvY2tlZH0gKCR7YmxvY2tlZC5sZW5ndGh9KWBcXFwiXFxuXFx0XFx0XFx0XFx0OmRlc2NyaXB0aW9uPVxcXCJoZWxwLmJsb2NrZWRcXFwiXFxuXFx0XFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHQ8dWwgY2xhc3M9XFxcImpmYi1zc3ItYmxvY2tlZF9fbGlzdFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PGxpIHYtZm9yPVxcXCIoIHVzYWdlLCBpbmRleCApIGluIGJsb2NrZWRcXFwiIDprZXk9XFxcImluZGV4XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiamZiLXNzci1ibG9ja2VkX19mb3JtXFxcIj57eyB1c2FnZS5mb3JtX3RpdGxlIHx8IGAjJHt1c2FnZS5mb3JtX2lkfWAgfX08L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImpmYi1zc3ItYmxvY2tlZF9fbWV0YVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0KHt7IF9fKCAnZmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fSBcXFwie3sgdXNhZ2UuZmllbGQgfX1cXFwiIOKGkiA8Y29kZT57eyB1c2FnZS5uYW1lIH19PC9jb2RlPilcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGEgOmhyZWY9XFxcInVzYWdlLmVkaXRfdXJsXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lciBub3JlZmVycmVyXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR7eyBfXyggJ0VkaXQgZm9ybSDihpInLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fVxcblxcdFxcdFxcdFxcdFxcdFxcdDwvYT5cXG5cXHRcXHRcXHRcXHRcXHQ8L2xpPlxcblxcdFxcdFxcdFxcdDwvdWw+XFxuXFx0XFx0XFx0PC9jeC12dWktY29tcG9uZW50LXdyYXBwZXI+XFxuXFx0XFx0PC90ZW1wbGF0ZT5cXG5cXHQ8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHtcXG5cXHRoZWxwLFxcblxcdGxhYmVsLFxcbn0gZnJvbSAnLi9zb3VyY2UnO1xcblxcbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xcblxcbmNvbnN0IE1JR1JBVElPTl9QT0xMX0lOVEVSVkFMX01TID0gODAwMDtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuXFx0bmFtZTogJ3Nzci1jYWxsYmFja3MtdGFiJyxcXG5cXHRwcm9wczoge1xcblxcdFxcdGluY29taW5nOiB7XFxuXFx0XFx0XFx0dHlwZTogT2JqZWN0LFxcblxcdFxcdFxcdGRlZmF1bHQ6IHt9LFxcblxcdFxcdH0sXFxuXFx0fSxcXG5cXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgaTE4biBdLFxcblxcdGRhdGEoKSB7XFxuXFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRsYWJlbCwgaGVscCxcXG5cXHRcXHRcXHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXFxuXFx0XFx0XFx0Ly8gVHJhY2tzIHRoZSBsYXN0IHZhbHVlIGNvbmZpcm1lZCBieSB0aGUgc2VydmVyIChpbml0aWFsIGxvYWQgb3IgYSBjb21wbGV0ZWRcXG5cXHRcXHRcXHQvLyBzYXZlKSwgaW5kZXBlbmRlbnQgb2YgYHN0b3JhZ2UuY2FsbGJhY2tzYCwgd2hpY2ggY2hhbmdlcyBvbiBldmVyeSBrZXlzdHJva2UuXFxuXFx0XFx0XFx0Ly8gVXNlZCBvbmx5IHRvIGdhdGUgdGhlIFNhdmUgYnV0dG9uIOKAlCBzZWUgYGhhc1Vuc2F2ZWRDYWxsYmFja3NDaGFuZ2VgLlxcblxcdFxcdFxcdHNhdmVkQ2FsbGJhY2tzOiAnc3RyaW5nJyA9PT0gdHlwZW9mIHRoaXMuaW5jb21pbmcuY2FsbGJhY2tzID8gdGhpcy5pbmNvbWluZy5jYWxsYmFja3MgOiAnJyxcXG5cXHRcXHRcXHRibG9ja2VkOiBBcnJheS5pc0FycmF5KCB0aGlzLmluY29taW5nLmJsb2NrZWQgKSA/IFsgLi4udGhpcy5pbmNvbWluZy5ibG9ja2VkIF0gOiBbXSxcXG5cXHRcXHRcXHQvLyBXaGlsZSB0aGUgb25lLXRpbWUgbGVnYWN5LW1pZ3JhdGlvbiBzY2FuIGlzIHN0aWxsIHJlc3RvcmluZyBwcmV2aW91c2x5IHVzZWRcXG5cXHRcXHRcXHQvLyBjYWxsYmFjayBuYW1lcyAob25seSBwb3NzaWJsZSBvbiBhIGxhcmdlIHNpdGUsIHdoZXJlIGl0IHNwYW5zIHNldmVyYWxcXG5cXHRcXHRcXHQvLyBgYWRtaW5faW5pdGAgcmVxdWVzdHMpLCB0aGlzIHRhYiBpcyByZWFkLW9ubHk6IGBpbXBvcnRfdHJ1c3RlZF9jYWxsYmFja3MoKWBcXG5cXHRcXHRcXHQvLyBvbmx5IG1lcmdlcyBpdHMgcmVzdWx0cyBpbnRvIHRoZSB0cnVzdGVkIGxpc3Qgb25jZSB0aGUgd2hvbGUgc2NhbiBjb21wbGV0ZXMsXFxuXFx0XFx0XFx0Ly8gYW5kIGl0IGRvZXMgYW4gdW5sb2NrZWQgcmVhZC1tZXJnZS13cml0ZSBvZiB0aGUgc2FtZSBvcHRpb24gYSBtYW51YWwgc2F2ZVxcblxcdFxcdFxcdC8vIGhlcmUgd291bGQgcmFjZSBhZ2FpbnN0IChyZXZpZXcgZmluZGluZywgaXNzdWVzLXRyYWNrZXIgIzIwMzYxIGZvbGxvdy11cCkuXFxuXFx0XFx0XFx0Ly8gVGhlIHNlcnZlciBlbmZvcmNlcyB0aGlzIGluZGVwZW5kZW50bHkgaW4gYG9uX2dldF9yZXF1ZXN0KClgOyB0aGlzIGZsYWcgb25seVxcblxcdFxcdFxcdC8vIGRyaXZlcyB0aGUgd2FpdC1zdGF0ZSBVSSBhbmQgaXMgcmUtc3luY2VkIGJ5IGBwb2xsTWlncmF0aW9uU3RhdHVzKClgLlxcblxcdFxcdFxcdG1pZ3JhdGlvbkluUHJvZ3Jlc3M6ICEhIHRoaXMuaW5jb21pbmcubWlncmF0aW9uSW5Qcm9ncmVzcyxcXG5cXHRcXHRcXHRpc0xvYWRpbmc6IGZhbHNlLFxcblxcdFxcdFxcdGxvYWRpbmc6IHt9LFxcblxcdFxcdFxcdHBlbmRpbmdTYXZlOiBmYWxzZSxcXG5cXHRcXHRcXHRyZWplY3RlZDoge30sXFxuXFx0XFx0XFx0cG9sbFRpbWVyOiBudWxsLFxcblxcdFxcdH07XFxuXFx0fSxcXG5cXHRjb21wdXRlZDoge1xcblxcdFxcdGhhc1JlamVjdGVkKCkge1xcblxcdFxcdFxcdHJldHVybiBPYmplY3Qua2V5cyggdGhpcy5yZWplY3RlZCApLmxlbmd0aCA+IDA7XFxuXFx0XFx0fSxcXG5cXHRcXHQvLyBgcmVqZWN0ZWRgIGlzIGEgcGxhaW4gb2JqZWN0LCBzbyBhIHRyYWlsaW5nIFxcXCI7IFxcXCIgYmFrZWQgaW50byBlYWNoIHJlbmRlcmVkIGl0ZW1cXG5cXHRcXHQvLyAocmF0aGVyIHRoYW4gam9pbmVkIGJldHdlZW4gaXRlbXMpIGxlZnQgYSBzdHJheSBcXFwiOyBcXFwiIGFmdGVyIHRoZSBsYXN0IOKAlCBhbmQgb25seSDigJRcXG5cXHRcXHQvLyBlbnRyeSB3aGVuZXZlciBleGFjdGx5IG9uZSBuYW1lIHdhcyByZWplY3RlZCAocmV2aWV3IGZpbmRpbmcsIGlzc3Vlcy10cmFja2VyXFxuXFx0XFx0Ly8gIzIwMzYxIGZvbGxvdy11cCkuIExpc3RpbmcgbmFtZXMgc2VwYXJhdGVseSBsZXRzIHRoZSB0ZW1wbGF0ZSBvbmx5IGFkZCB0aGVcXG5cXHRcXHQvLyBzZXBhcmF0b3IgYmV0d2VlbiBpdGVtcywgbm90IGFmdGVyIHRoZSBmaW5hbCBvbmUuXFxuXFx0XFx0cmVqZWN0ZWROYW1lcygpIHtcXG5cXHRcXHRcXHRyZXR1cm4gT2JqZWN0LmtleXMoIHRoaXMucmVqZWN0ZWQgKTtcXG5cXHRcXHR9LFxcblxcdFxcdC8vIEdhdGVzIHRoZSBTYXZlIGJ1dHRvbjogc2F2aW5nIG9ubHkgaGFwcGVucyBvbiBhbiBleHBsaWNpdCBjbGljayBub3cgKG5vXFxuXFx0XFx0Ly8gYmx1ci10cmlnZ2VyZWQgYXV0b3NhdmUpLCBzcGVjaWZpY2FsbHkgc28gYW4gYWNjaWRlbnRhbCBzZWxlY3QtYWxsLWFuZC1kZWxldGUgaW5cXG5cXHRcXHQvLyB0aGUgdGV4dGFyZWEgY2FuJ3Qgd2lwZSB0aGUgd2hvbGUgdHJ1c3RlZCBhbGxvd2xpc3Qgd2l0aG91dCB0aGUgYWRtaW5cXG5cXHRcXHQvLyBkZWxpYmVyYXRlbHkgY2xpY2tpbmcgU2F2ZSBvbiB0aGUgZW1wdGllZCBjb250ZW50IChyZXZpZXcgZmluZGluZywgaXNzdWVzLXRyYWNrZXJcXG5cXHRcXHQvLyAjMjAzNjEgZm9sbG93LXVwKS5cXG5cXHRcXHRoYXNVbnNhdmVkQ2FsbGJhY2tzQ2hhbmdlKCkge1xcblxcdFxcdFxcdHJldHVybiB0aGlzLnN0b3JhZ2UuY2FsbGJhY2tzICE9PSB0aGlzLnNhdmVkQ2FsbGJhY2tzO1xcblxcdFxcdH0sXFxuXFx0fSxcXG5cXHRjcmVhdGVkKCkge1xcblxcdFxcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCB0aGlzLm9uQ2hhbmdlU3RhdGUuYmluZCggdGhpcyApICk7XFxuXFxuXFx0XFx0aWYgKCB0aGlzLm1pZ3JhdGlvbkluUHJvZ3Jlc3MgKSB7XFxuXFx0XFx0XFx0dGhpcy5zY2hlZHVsZVBvbGwoKTtcXG5cXHRcXHR9XFxuXFx0fSxcXG5cXHRiZWZvcmVEZXN0cm95KCkge1xcblxcdFxcdHRoaXMuY2xlYXJQb2xsKCk7XFxuXFx0fSxcXG5cXHRtZXRob2RzOiB7XFxuXFx0XFx0Z2V0U2F2YWJsZURhdGEoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHsgY2FsbGJhY2tzOiB0aGlzLnN0b3JhZ2UuY2FsbGJhY2tzIH07XFxuXFx0XFx0fSxcXG5cXHRcXHRnZXRSZXF1ZXN0T25TYXZlKCkge1xcblxcdFxcdFxcdHJldHVybiB7XFxuXFx0XFx0XFx0XFx0ZGF0YTogdGhpcy5nZXRTYXZhYmxlRGF0YSgpLFxcblxcdFxcdFxcdH07XFxuXFx0XFx0fSxcXG5cXHRcXHRvblNhdmVEb25lU3VjY2VzcyggcmVzcG9uc2UgKSB7XFxuXFx0XFx0XFx0dGhpcy5yZWplY3RlZCA9IHJlc3BvbnNlPy5kYXRhPy5yZWplY3RlZCB8fCB7fTtcXG5cXG5cXHRcXHRcXHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgcmVzcG9uc2U/LmRhdGE/LmNhbGxiYWNrcyApIHtcXG5cXHRcXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgJ2NhbGxiYWNrcycsIHJlc3BvbnNlLmRhdGEuY2FsbGJhY2tzICk7XFxuXFx0XFx0XFx0XFx0dGhpcy5zYXZlZENhbGxiYWNrcyA9IHJlc3BvbnNlLmRhdGEuY2FsbGJhY2tzO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdG9uQ2hhbmdlU3RhdGUoIHsgc3RhdGUsIHNsdWcgfSApIHtcXG5cXHRcXHRcXHRpZiAoICdzc3ItY2FsbGJhY2tzLXRhYicgIT09IHNsdWcgKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcXG5cXHRcXHRcXHRcXHR0aGlzLmxvYWRpbmcgPSB7fTtcXG5cXHRcXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBmYWxzZSApO1xcblxcblxcdFxcdFxcdFxcdGlmICggdGhpcy5wZW5kaW5nU2F2ZSApIHtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLnBlbmRpbmdTYXZlID0gZmFsc2U7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcXG5cXHRcXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0XFx0cmV0dXJuO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xcblxcdFxcdH0sXFxuXFx0XFx0b25JbnB1dCggdmFsdWUgKSB7XFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsICdjYWxsYmFja3MnLCB2YWx1ZSApO1xcblxcdFxcdH0sXFxuXFx0XFx0b25TYXZlQ2FsbGJhY2tzKCkge1xcblxcdFxcdFxcdGlmICggISB0aGlzLmhhc1Vuc2F2ZWRDYWxsYmFja3NDaGFuZ2UgfHwgdGhpcy5taWdyYXRpb25JblByb2dyZXNzICkge1xcblxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsICdjYWxsYmFja3MnLCB0cnVlICk7XFxuXFxuXFx0XFx0XFx0aWYgKCB0aGlzLmlzTG9hZGluZyApIHtcXG5cXHRcXHRcXHRcXHR0aGlzLnBlbmRpbmdTYXZlID0gdHJ1ZTtcXG5cXHRcXHRcXHRcXHRyZXR1cm47XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XFxuXFx0XFx0fSxcXG5cXHRcXHRzY2hlZHVsZVBvbGwoKSB7XFxuXFx0XFx0XFx0dGhpcy5jbGVhclBvbGwoKTtcXG5cXHRcXHRcXHR0aGlzLnBvbGxUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCB0aGlzLnBvbGxNaWdyYXRpb25TdGF0dXMsIE1JR1JBVElPTl9QT0xMX0lOVEVSVkFMX01TICk7XFxuXFx0XFx0fSxcXG5cXHRcXHRjbGVhclBvbGwoKSB7XFxuXFx0XFx0XFx0aWYgKCB0aGlzLnBvbGxUaW1lciApIHtcXG5cXHRcXHRcXHRcXHR3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aGlzLnBvbGxUaW1lciApO1xcblxcdFxcdFxcdFxcdHRoaXMucG9sbFRpbWVyID0gbnVsbDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHRcXHQvLyBSZXVzZXMgdGhlIHNhbWUgc2F2ZSBlbmRwb2ludCBhcyBhIHJlYWQtb25seSBzdGF0dXMgY2hlY2s6IG9taXR0aW5nIGBjYWxsYmFja3NgXFxuXFx0XFx0Ly8gZnJvbSB0aGUgcmVxdWVzdCBib2R5IG1lYW5zIGBTc3JfQ2FsbGJhY2tzX0hhbmRsZXI6Om9uX2dldF9yZXF1ZXN0KClgIG5ldmVyXFxuXFx0XFx0Ly8gYXR0ZW1wdHMgdG8gd3JpdGUgYW55dGhpbmcg4oCUIGl0IGp1c3QgcmVwb3J0cyB3aGV0aGVyIHRoZSBtaWdyYXRpb24gaXMgc3RpbGxcXG5cXHRcXHQvLyBydW5uaW5nLiBPbmNlIGl0IHJlcG9ydHMgZmluaXNoZWQsIHRoZSBwYWdlIGlzIHJlbG9hZGVkIHJhdGhlciB0aGFuIHBhdGNoaW5nXFxuXFx0XFx0Ly8gc3RhdGUgaW4gcGxhY2U6IHRoZSBtaWdyYXRpb24gY2FuIGFsc28gaGF2ZSBjaGFuZ2VkIHRoZSBcXFwiRm9ybXMgVXNpbmcgQmxvY2tlZFxcblxcdFxcdC8vIEZ1bmN0aW9uc1xcXCIgbGlzdCAoYFNzcl9CbG9ja2VkX0NhbGxiYWNrX1VzYWdlc2ApLCB3aGljaCB0aGlzIGVuZHBvaW50IGRvZXNuJ3RcXG5cXHRcXHQvLyByZXR1cm4sIHNvIGEgZnVsbCByZWxvYWQgaXMgdGhlIHNpbXBsZXN0IHdheSB0byBndWFyYW50ZWUgZXZlcnl0aGluZyBvbiB0aGUgcGFnZVxcblxcdFxcdC8vIOKAlCBub3QganVzdCB0aGUgY2FsbGJhY2tzIHRleHRhcmVhIOKAlCByZWZsZWN0cyB3aGF0IHRoZSBtaWdyYXRpb24gcHJvZHVjZWQuXFxuXFx0XFx0cG9sbE1pZ3JhdGlvblN0YXR1cygpIHtcXG5cXHRcXHRcXHRqUXVlcnkuYWpheCgge1xcblxcdFxcdFxcdFxcdHVybDogd2luZG93LmFqYXh1cmwsXFxuXFx0XFx0XFx0XFx0dHlwZTogJ1BPU1QnLFxcblxcdFxcdFxcdFxcdGRhdGFUeXBlOiAnanNvbicsXFxuXFx0XFx0XFx0XFx0ZGF0YToge1xcblxcdFxcdFxcdFxcdFxcdGFjdGlvbjogJ2pldF9mYl9zYXZlX3RhYl9fc3NyLWNhbGxiYWNrcy10YWInLFxcblxcdFxcdFxcdFxcdFxcdF9ub25jZTogd2luZG93Py5KZXRGQlBhZ2VDb25maWdQYWNrYWdlPy5ub25jZSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH0gKS5kb25lKCAoIHJlc3BvbnNlICkgPT4ge1xcblxcdFxcdFxcdFxcdGlmICggcmVzcG9uc2U/LmRhdGE/Lm1pZ3JhdGlvbkluUHJvZ3Jlc3MgKSB7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5zY2hlZHVsZVBvbGwoKTtcXG5cXHRcXHRcXHRcXHRcXHRyZXR1cm47XFxuXFx0XFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdFxcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcXG5cXHRcXHRcXHR9ICkuZmFpbCggKCkgPT4ge1xcblxcdFxcdFxcdFxcdC8vIFRyYW5zaWVudCBuZXR3b3JrIGhpY2N1cCDigJQga2VlcCB3YWl0aW5nIHJhdGhlciB0aGFuIGdldHRpbmcgc3R1Y2suXFxuXFx0XFx0XFx0XFx0dGhpcy5zY2hlZHVsZVBvbGwoKTtcXG5cXHRcXHRcXHR9ICk7XFxuXFx0XFx0fSxcXG5cXHR9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4uamZiLXNzci1jYWxsYmFja3MtdGV4dGFyZWEge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFx0bWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWQge1xcblxcdGNvbG9yOiAjZGMyNjI2O1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRwYWRkaW5nOiAwIDIwcHg7XFxuXFx0bWFyZ2luOiAtMTBweCAwIDIwcHg7XFxufVxcblxcbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZF9fbGlzdCB7XFxuXFx0bWFyZ2luOiA0cHggMCAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkX19saXN0IGxpIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAycHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAxNHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkX19saXN0IGxpOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6ICfigJMnO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcbn1cXG5cXG4uamZiLXNzci1ibG9ja2VkX19saXN0IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uamZiLXNzci1ibG9ja2VkX19saXN0IGxpIHtcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi5qZmItc3NyLWJsb2NrZWRfX2Zvcm0ge1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5qZmItc3NyLWJsb2NrZWRfX21ldGEge1xcblxcdGNvbG9yOiAjNjQ2OTcwO1xcblxcdG1hcmdpbjogMCA2cHg7XFxufVxcblxcbi5qZmItc3NyLWJsb2NrZWRfX21ldGEgY29kZSB7XFxuXFx0Y29sb3I6ICNkYzI2MjY7XFxufVxcblxcbi5qZmItc3NyLW1pZ3JhdGlvbi13YWl0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdGdhcDogMTJweDtcXG5cXHRwYWRkaW5nOiAxNnB4IDIwcHg7XFxuXFx0YmFja2dyb3VuZDogI2YwZjZmYztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjYzNkY2YxO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmpmYi1zc3ItbWlncmF0aW9uLXdhaXRfX3NwaW5uZXIge1xcblxcdGZsZXg6IDAgMCBhdXRvO1xcblxcdHdpZHRoOiAxOHB4O1xcblxcdGhlaWdodDogMThweDtcXG5cXHRtYXJnaW4tdG9wOiAycHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2MzZGNmMTtcXG5cXHRib3JkZXItdG9wLWNvbG9yOiAjMjI3MWIxO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRhbmltYXRpb246IGpmYi1zc3ItbWlncmF0aW9uLXdhaXQtc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBqZmItc3NyLW1pZ3JhdGlvbi13YWl0LXNwaW4ge1xcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSggMzYwZGVnICk7XFxuXFx0fVxcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4udXNlci1qb3VybmV5LXNlbGVjdCBzZWxlY3QuY3gtdnVpLXNlbGVjdCB7XG5cdHBhZGRpbmc6IDZweCAyNHB4IDZweCAxMnB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEySEE7Q0FDQSwwQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXHQ8ZGl2PlxcblxcdFxcdDxjeC12dWktc3dpdGNoZXJcXG5cXHRcXHRcXHRuYW1lPVxcXCJlbmFibGVfdXNlcl9qb3VybmV5XFxcIlxcblxcdFxcdFxcdDpsYWJlbD1cXFwibG9hZGluZy5lbmFibGVfdXNlcl9qb3VybmV5ID8gYCR7bGFiZWwuZW5hYmxlX3VzZXJfam91cm5leX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmVuYWJsZV91c2VyX2pvdXJuZXlcXFwiXFxuXFx0XFx0XFx0OmRlc2NyaXB0aW9uPVxcXCJoZWxwLmVuYWJsZV91c2VyX2pvdXJuZXlcXFwiXFxuXFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdDp2YWx1ZT1cXFwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2VuYWJsZV91c2VyX2pvdXJuZXknICkgPyBzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgOiBmYWxzZVxcXCJcXG5cXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcImlzTG9hZGluZ1xcXCJcXG5cXHRcXHRcXHRAaW5wdXQ9XFxcImNoYW5nZVZhbCggJ2VuYWJsZV91c2VyX2pvdXJuZXknLCAkZXZlbnQgKVxcXCJcXG5cXHRcXHQ+PC9jeC12dWktc3dpdGNoZXI+XFxuXFxuXFx0XFx0PHRlbXBsYXRlIHYtaWY9XFxcInN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leVxcXCI+XFxuXFx0XFx0XFx0PGN4LXZ1aS1zZWxlY3RcXG5cXHRcXHRcXHRcXHRuYW1lPVxcXCJzdG9yYWdlX3R5cGVcXFwiXFxuXFx0XFx0XFx0XFx0Y2xhc3M9XFxcInVzZXItam91cm5leS1zZWxlY3RcXFwiXFxuXFx0XFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLnN0b3JhZ2VfdHlwZSA/IGAke2xhYmVsLnN0b3JhZ2VfdHlwZX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLnN0b3JhZ2VfdHlwZVxcXCJcXG5cXHRcXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuc3RvcmFnZV90eXBlXFxcIlxcblxcdFxcdFxcdFxcdDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG5cXHRcXHRcXHRcXHQ6b3B0aW9ucy1saXN0PVxcXCJbXFxuXFx0XFx0XFx0XFx0XFx0e1xcblxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlOiAnbG9jYWwnLFxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsOiAnTG9jYWwgU3RvcmFnZSdcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdFxcdHtcXG5cXHRcXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ3Nlc3Npb24nLFxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsOiAnU2Vzc2lvbiBTdG9yYWdlJ1xcblxcdFxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHRcXHRdXFxcIlxcblxcdFxcdFxcdFxcdDp2YWx1ZT1cXFwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3N0b3JhZ2VfdHlwZScgKSA/IHN0b3JhZ2Uuc3RvcmFnZV90eXBlIDogJ2xvY2FsJ1xcXCJcXG5cXHRcXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcIiFzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgfHwgaXNMb2FkaW5nXFxcIlxcblxcdFxcdFxcdFxcdEBpbnB1dD1cXFwiY2hhbmdlVmFsKCAnc3RvcmFnZV90eXBlJywgJGV2ZW50IClcXFwiXFxuXFx0XFx0XFx0PjwvY3gtdnVpLXNlbGVjdD5cXG5cXHRcXHRcXHQ8Y3gtdnVpLWNvbXBvbmVudC13cmFwcGVyID5cXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjeC12dWktY29tcG9uZW50X19sYWJlbFxcXCI+UGxlYXNlIG5vdGUhPC9kaXY+XFxuXFx0XFx0XFx0XFx0PGRpdj48Yj5TZXNzaW9uIFN0b3JhZ2U6PC9iPiBUaGUgaW5mb3JtYXRpb24gaXMga2VwdCBvbmx5IHdoaWxlIHRoaXMgdGFiIG9yIHdpbmRvdyBpcyBvcGVuLiBSZWxvYWRpbmcgdGhlIHBhZ2UgaXMgZmluZSwgYnV0IGFzIHNvb24gYXMgeW91IGNsb3NlIHRoZSB0YWIsIHRoZSBkYXRhIGRpc2FwcGVhcnMuIE90aGVyIHRhYnMgb3Igd2luZG93cyBvZiB0aGUgc2l0ZSBjYW7igJl0IHNlZSBpdC4gWW91IGNhbiBzdGlsbCBnZXQgaXQgYmFjayBieSBwcmVzc2luZyBDdHJs4oCvK+KAr1NoaWZ04oCvK+KAr1QgKOKAnFJlb3BlbuKAr0Nsb3NlZOKAr1RhYuKAnSk8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8ZGl2PjxiPkxvY2FsIFN0b3JhZ2U6PC9iPiBUaGUgaW5mb3JtYXRpb24gc3RheXMgbXVjaCBsb25nZXLigJRldmVyeSB0YWIgb3Igd2luZG93IG9mIHRoaXMgc2l0ZSBjYW4gdXNlIGl0LCBhbmQgaXQgcmVtYWlucyBldmVuIGFmdGVyIHlvdSBjbG9zZSBhbmQgcmVvcGVuIHRoZSBicm93c2VyLCB1bnRpbCB5b3UgY2xlYXIgaXQgeW91cnNlbGYuPC9kaXY+XFxuXFx0XFx0XFx0PC9jeC12dWktY29tcG9uZW50LXdyYXBwZXI+XFxuXFxuXFx0XFx0XFx0PGN4LXZ1aS1zZWxlY3RcXG5cXHRcXHRcXHRcXHRuYW1lPVxcXCJjbGVhcl9hZnRlcl9zdWJtaXRcXFwiXFxuXFx0XFx0XFx0XFx0Y2xhc3M9XFxcInVzZXItam91cm5leS1zZWxlY3RcXFwiXFxuXFx0XFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLmNsZWFyX2FmdGVyX3N1Ym1pdCA/IGAke2xhYmVsLmNsZWFyX2FmdGVyX3N1Ym1pdH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmNsZWFyX2FmdGVyX3N1Ym1pdFxcXCJcXG5cXHRcXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuY2xlYXJfYWZ0ZXJfc3VibWl0XFxcIlxcblxcdFxcdFxcdFxcdDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG5cXHRcXHRcXHRcXHQ6b3B0aW9ucy1saXN0PVxcXCJbXFxuXFx0XFx0XFx0XFx0XFx0e1xcblxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlOiAnYWx3YXlzJyxcXG5cXHRcXHRcXHRcXHRcXHRcXHRsYWJlbDogJ0FmdGVyIGFueSBzdWJtaXQgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSknXFxuXFx0XFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRcXHR7XFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU6ICdzdWNjZXNzJyxcXG5cXHRcXHRcXHRcXHRcXHRcXHRsYWJlbDogJ0FmdGVyIHN1Y2Nlc3NmdWwgc3VibWl0IG9ubHknXFxuXFx0XFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdF1cXFwiXFxuXFx0XFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnY2xlYXJfYWZ0ZXJfc3VibWl0JyApID8gc3RvcmFnZS5jbGVhcl9hZnRlcl9zdWJtaXQgOiAnc3VjY2VzcydcXFwiXFxuXFx0XFx0XFx0XFx0OmRpc2FibGVkPVxcXCIhc3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5IHx8IGlzTG9hZGluZ1xcXCJcXG5cXHRcXHRcXHRcXHRAaW5wdXQ9XFxcImNoYW5nZVZhbCggJ2NsZWFyX2FmdGVyX3N1Ym1pdCcsICRldmVudCApXFxcIlxcblxcdFxcdFxcdD48L2N4LXZ1aS1zZWxlY3Q+XFxuXFx0XFx0PC90ZW1wbGF0ZT5cXG5cXHQ8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHtcXG5cXHRoZWxwLFxcblxcdGxhYmVsLFxcbn0gZnJvbSAnLi9zb3VyY2UnO1xcblxcbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG5cXHRuYW1lOiAndXNlci1qb3VybmV5LXRhYicsXFxuXFx0cHJvcHM6IHtcXG5cXHRcXHRpbmNvbWluZzoge1xcblxcdFxcdFxcdHR5cGU6IE9iamVjdCxcXG5cXHRcXHRcXHRkZWZhdWx0OiAoKSA9PiAoe30pLFxcblxcdFxcdH0sXFxuXFx0fSxcXG5cXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgaTE4biBdLFxcblxcdGRhdGEoKSB7XFxuXFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRsYWJlbCwgaGVscCxcXG5cXHRcXHRcXHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXFxuXFx0XFx0XFx0aXNMb2FkaW5nOiBmYWxzZSxcXG5cXHRcXHRcXHRsb2FkaW5nOiB7fSxcXG5cXHRcXHR9O1xcblxcdH0sXFxuXFx0Y3JlYXRlZCgpIHtcXG5cXHRcXHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgdGhpcy5vbkNoYW5nZVN0YXRlLmJpbmQoIHRoaXMgKSApO1xcblxcdH0sXFxuXFx0bWV0aG9kczoge1xcblxcdFxcdGdldFJlcXVlc3RPblNhdmUoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRcXHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxcblxcdFxcdFxcdH07XFxuXFx0XFx0fSxcXG5cXHRcXHRvbkNoYW5nZVN0YXRlKCB7IHN0YXRlLCBzbHVnIH0gKSB7XFxuXFx0XFx0XFx0aWYgKCAndXNlci1qb3VybmV5LXRhYicgIT09IHNsdWcgKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcXG5cXHRcXHRcXHRcXHR0aGlzLmxvYWRpbmcgPSB7fTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLCAnaXNMb2FkaW5nJywgc3RhdGUgPT09ICdiZWdpbicgKTtcXG5cXHRcXHR9LFxcblxcdFxcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XFxuXFx0XFx0XFx0aWYgKCB0aGlzLmlzTG9hZGluZyApIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm47XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCBuYW1lLCB2YWx1ZSApO1xcblxcdFxcdFxcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nLCBuYW1lLCB0cnVlICk7XFxuXFxuXFx0XFx0XFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcXG5cXHRcXHR9LFxcblxcdH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuLnVzZXItam91cm5leS1zZWxlY3Qgc2VsZWN0LmN4LXZ1aS1zZWxlY3Qge1xcblxcdHBhZGRpbmc6IDZweCAyNHB4IDZweCAxMnB4O1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE0YmFhMjMwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTRiYWEyMzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTRiYWEyMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTRiYWEyMzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNGJhYTIzMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGI0MzUwMGVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGI0MzUwMGUmbGFuZz1zY3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRiNDM1MDBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRiNDM1MDBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRiNDM1MDBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiNDM1MDBlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGI0MzUwMGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mcmllbmRseUNhcHRjaGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1NGYwMzBlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmllbmRseUNhcHRjaGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA1NGYwMzBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA1NGYwMzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA1NGYwMzBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mcmllbmRseUNhcHRjaGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1NGYwMzBlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDU0ZjAzMGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9mcmllbmRseUNhcHRjaGEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4Y2ViN2ZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYzOGNlYjdmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYzOGNlYjdmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYzOGNlYjdmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4Y2ViN2ZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MzhjZWI3ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZ29vZ2xlL3JlQ0FQVENIQXYzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaENhcHRjaGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0NTY3ZmE0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaENhcHRjaGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveXVya28vcHJvamVjdHMvY3JvY28ubG9jL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNDU2N2ZhNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNDU2N2ZhNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNDU2N2ZhNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaENhcHRjaGEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM0NTY3ZmE0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzQ1NjdmYTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdHVybnN0aWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTlmZmEzOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdHVybnN0aWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveXVya28vcHJvamVjdHMvY3JvY28ubG9jL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1YTlmZmEzOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YTlmZmEzOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YTlmZmEzOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdHVybnN0aWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTlmZmEzOFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVhOWZmYTM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvdHVybnN0aWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZWZmODA0Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveXVya28vcHJvamVjdHMvY3JvY28ubG9jL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4ZWZmODA0YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4ZWZmODA0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4ZWZmODA0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZWZmODA0Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzhlZmY4MDRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL1BheXBhbFRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI1NGI2NGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI1NGI2NGMmbGFuZz1zY3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQyNTRiNjRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQyNTRiNjRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQyNTRiNjRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyNTRiNjRjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDI1NGI2NGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyYjM2ZTU1XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjJiMzZlNTUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjJiMzZlNTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjJiMzZlNTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyYjM2ZTU1XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjJiMzZlNTUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRkYmViYlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9HZXRSZXNwb25zZVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDU0ZGJlYmInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDU0ZGJlYmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDU0ZGJlYmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRkYmViYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA1NGRiZWJiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgzYzNkYzlcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzgzYzNkYzknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzgzYzNkYzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzgzYzNkYzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgzYzNkYzlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ODNjM2RjOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlkYzQyZGU2JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlkYzQyZGU2JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjlkYzQyZGU2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOWRjNDJkZTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOWRjNDJkZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOWRjNDJkZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlkYzQyZGU2JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWRjNDJkZTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3Njk2NmExXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc2OTY2YTEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc2OTY2YTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc2OTY2YTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3Njk2NmExXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc2OTY2YTEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL1BheW1lbnRzR2F0ZXdheXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QaG9uZUZpZWxkVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYjkzMzQ4MFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Bob25lRmllbGRUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Bob25lRmllbGRUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ViOTMzNDgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ViOTMzNDgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ViOTMzNDgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QaG9uZUZpZWxkVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYjkzMzQ4MFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ViOTMzNDgwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9waG9uZS1maWVsZC9QaG9uZUZpZWxkVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xN2FiMjM4OCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NzckNhbGxiYWNrc1RhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NzckNhbGxiYWNrc1RhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xN2FiMjM4OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxN2FiMjM4OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE3YWIyMzg4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE3YWIyMzg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE3YWIyMzg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Tc3JDYWxsYmFja3NUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3YWIyMzg4JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTdhYjIzODgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Nzci1jYWxsYmFja3MvU3NyQ2FsbGJhY2tzVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmYjBjMmZjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJKb3VybmV5VGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1VzZXJKb3VybmV5VGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmYjBjMmZjJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBmYjBjMmZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBmYjBjMmZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBmYjBjMmZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZiMGMyZmNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZmIwYzJmYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvdXNlci1qb3VybmV5L1VzZXJKb3VybmV5VGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVDQVBUQ0hBdjMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHVybnN0aWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGhvbmVGaWVsZFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaG9uZUZpZWxkVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tc3JDYWxsYmFja3NUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjQzNTAwZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDU0ZjAzMGVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM4Y2ViN2ZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oQ2FwdGNoYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzQ1NjdmYTRcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOWZmYTM4XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZWZmODA0Y1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI1NGI2NGNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmIzNmU1NVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRkYmViYlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgzYzNkYzlcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZGM0MmRlNiZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheW1lbnRzR2F0ZXdheXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3Njk2NmExXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGhvbmVGaWVsZFRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWI5MzM0ODBcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tc3JDYWxsYmFja3NUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3YWIyMzg4JnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmYjBjMmZjXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjU0YjY0YyZsYW5nPXNjc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZGM0MmRlNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3YWIyMzg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZmIwYzJmYyZsYW5nPWNzc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKF92bS5fXyggJ1BybycsICdqZXQtZm9ybS1idWlsZGVyJyApKSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnRm9ybUJ1aWxkZXJQYWdlJyx7YXR0cnM6e1widGl0bGVcIjpfdm0uX18oICdKZXRGb3JtQnVpbGRlciBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApfX0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1jb250ZW50XCJ9LFtfYygnQWxlcnRzTGlzdCcpLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWNvbnRlbnQtbWFpblwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY3gtdnVpLXBhbmVsXCJ9LFtfYygnQ3hWdWlUYWJzJyx7YXR0cnM6e1wiaW4tcGFuZWxcIjpmYWxzZSxcInZhbHVlXCI6X3ZtLmFjdGl2ZVRhYlNsdWcsXCJsYXlvdXRcIjpcInZlcnRpY2FsXCJ9LG9uOntcImlucHV0XCI6X3ZtLm9uQ2hhbmdlQWN0aXZlVGFifX0sX3ZtLl9sKChfdm0udGFicyksZnVuY3Rpb24ocmVmLGluZGV4KXtcbnZhciBkaXNwbGF5QnV0dG9uID0gcmVmLmRpc3BsYXlCdXR0b247IGlmICggZGlzcGxheUJ1dHRvbiA9PT0gdm9pZCAwICkgZGlzcGxheUJ1dHRvbiA9IHRydWU7XG52YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKCByZWYsIFtcImRpc3BsYXlCdXR0b25cIl0gKTtcbnZhciB0YWIgPSByZXN0O1xucmV0dXJuIF9jKCdDeFZ1aVRhYnNQYW5lbCcse2tleTp0YWIuY29tcG9uZW50Lm5hbWUsYXR0cnM6e1wibmFtZVwiOnRhYi5jb21wb25lbnQubmFtZSxcImxhYmVsXCI6dGFiLnRpdGxlLFwiZGlzYWJsZWRcIjp0YWIuZGlzYWJsZWQsXCJpY29uXCI6dGFiLmljb259LHNjb3BlZFNsb3RzOl92bS5fdShbKHRhYi5jb21wb25lbnQucmVuZGVyKT97a2V5OlwiZGVmYXVsdFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygna2VlcC1hbGl2ZScsW19jKHRhYi5jb21wb25lbnQse3JlZjpcInRhYkNvbXBvbmVudHNcIixyZWZJbkZvcjp0cnVlLHRhZzpcImNvbXBvbmVudFwiLGF0dHJzOntcImluY29taW5nXCI6X3ZtLmdldEluY29taW5nKCB0YWIuY29tcG9uZW50Lm5hbWUgKSxcImlubmVyLXNsdWdzXCI6X3ZtLmFjdGl2ZVRhYklubmVyU2x1Z3MgfHwgW119fSldLDEpLF92bS5fdihcIiBcIiksKGRpc3BsYXlCdXR0b24pP19jKCdjeC12dWktYnV0dG9uJyx7YXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJhY2NlbnRcIixcImxvYWRpbmdcIjpfdm0ubG9hZGluZ1RhYlsgdGFiLmNvbXBvbmVudC5uYW1lIF19LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLm9uU2F2ZVRhYiggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApfX0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwibGFiZWxcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ3NwYW4nLFtfdm0uX3YoXCJTYXZlXCIpXSldfSxwcm94eTp0cnVlfV0sbnVsbCx0cnVlKX0pOl92bS5fZSgpXX0scHJveHk6dHJ1ZX06bnVsbF0sbnVsbCx0cnVlKX0pfSksMSldLDEpXSksX3ZtLl92KFwiIFwiKSxfYygnU2V0dGluZ3NTaWRlQmFyJyldLDEpXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ1NpbXBsZVdyYXBwZXJDb21wb25lbnQnLHthdHRyczp7XCJlbGVtZW50LWlkXCI6XCJmcmllbmRseV9rZXlcIn0sc2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwibGFiZWxcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX3ZtLl92KF92bS5fcyhfdm0ubGFiZWwua2V5KSldfSxwcm94eTp0cnVlfSx7a2V5OlwiZGVzY3JpcHRpb25cIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ3AnLHtzdGF0aWNDbGFzczpcImZiLWRlc2NyaXB0aW9uXCJ9LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKFxuXHRcdFx0XHQnSXQgY2FuIGJlIGZvdW5kIG9uIHRoZSBwYWdlIGxpc3RpbmcgeW91ciBBcHBsaWNhdGlvbnMuIE9yIGZvbGxvdyB0aGlzJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0XHQpICsgJyAnKStcIlxcblxcdFxcdFxcdFxcdFwiKSxfYygnRXh0ZXJuYWxMaW5rJyx7YXR0cnM6e1wiaHJlZlwiOlwiaHR0cHM6Ly9kb2NzLmZyaWVuZGx5Y2FwdGNoYS5jb20vIy9pbnN0YWxsYXRpb24/aWQ9XzEtZ2VuZXJhdGluZy1hLXNpdGVrZXlcIn19LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKCAnZ3VpZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSkrXCJcXG5cXHRcXHRcXHRcXHRcIildKV0sMSldfSxwcm94eTp0cnVlfSx7a2V5OlwiZGVmYXVsdFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygnaW5wdXQnLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTooX3ZtLnN0b3JhZ2Uua2V5KSxleHByZXNzaW9uOlwic3RvcmFnZS5rZXlcIn1dLHN0YXRpY0NsYXNzOlwiY3gtdnVpLWlucHV0IHNpemUtZnVsbHdpZHRoXCIsYXR0cnM6e1wiaWRcIjpcImZyaWVuZGx5X2tleVwiLFwidHlwZVwiOlwidGV4dFwifSxkb21Qcm9wczp7XCJ2YWx1ZVwiOihfdm0uc3RvcmFnZS5rZXkpfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7aWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpeyByZXR1cm47IH1fdm0uJHNldChfdm0uc3RvcmFnZSwgXCJrZXlcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSl9fX0pXX0scHJveHk6dHJ1ZX1dKX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcImZyaWVuZGx5X3NlY3JldFwiLFwibGFiZWxcIjpfdm0ubGFiZWwuc2VjcmV0LFwiZGVzY3JpcHRpb25cIjpfdm0uX18oXG5cdFx0XHQnSXQgY2FuIGJlIGZvdW5kIG9uIHRoZSBwYWdlIGxpc3RpbmcgeW91ciBBUEkga2V5cy4nLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0KSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9fSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5rZXksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2Uua2V5KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwia2V5XCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLmtleVwifX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLnNlY3JldCxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1widHlwZVwiOlwibnVtYmVyXCIsXCJtaW5cIjowLFwibWF4XCI6MSxcInN0ZXBcIjowLjEsXCJsYWJlbFwiOl92bS5sYWJlbC50aHJlc2hvbGQsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLnRocmVzaG9sZCxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS50aHJlc2hvbGQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJ0aHJlc2hvbGRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2UudGhyZXNob2xkXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpUHJlZikrXCIgXCIpLF9jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOl92bS5oZWxwLmFwaUxpbmssXCJ0YXJnZXRcIjpcIl9ibGFua1wifX0sW192bS5fdihfdm0uX3MoX3ZtLmhlbHAuYXBpTGlua0xhYmVsKSldKV0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLFtfYygnU2ltcGxlV3JhcHBlckNvbXBvbmVudCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcImhjYXB0Y2hhX2tleVwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJsYWJlbFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfdm0uX3YoX3ZtLl9zKF92bS5sYWJlbC5rZXkpKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZXNjcmlwdGlvblwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oXG5cdFx0XHRcdFx0J1lvdSBjYW4gZmluZCBpdCBvbiB0aGlzIHBhZ2UgaW4gdGhlIGZpcnN0IGNvbHVtbiBvZiBTaXRla2V5LicsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0XHRcdCkgKyAnICcpK1wiXFxuXFx0XFx0XFx0XFx0XFx0XCIpLF9jKCdFeHRlcm5hbExpbmsnLHthdHRyczp7XCJocmVmXCI6XCJodHRwczovL2Rhc2hib2FyZC5oY2FwdGNoYS5jb20vc2l0ZXNcIn19LFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIitfdm0uX3MoX3ZtLl9fKCAnR28gdG8gdGhlIGRhc2hib2FyZCBvZiBzaXRlcycsICdqZXQtZm9ybS1idWlsZGVyJyApKStcIlxcblxcdFxcdFxcdFxcdFxcdFwiKV0pXSwxKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdpbnB1dCcse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOihfdm0uc3RvcmFnZS5rZXkpLGV4cHJlc3Npb246XCJzdG9yYWdlLmtleVwifV0sc3RhdGljQ2xhc3M6XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIixhdHRyczp7XCJpZFwiOlwiaGNhcHRjaGFfa2V5XCIsXCJ0eXBlXCI6XCJ0ZXh0XCJ9LGRvbVByb3BzOntcInZhbHVlXCI6KF92bS5zdG9yYWdlLmtleSl9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZyl7IHJldHVybjsgfV92bS4kc2V0KF92bS5zdG9yYWdlLCBcImtleVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKX19fSldfSxwcm94eTp0cnVlfV0pfSksX3ZtLl92KFwiIFwiKSxfYygnU2ltcGxlV3JhcHBlckNvbXBvbmVudCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcImhjYXB0Y2hhX3NlY3JldFwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJsYWJlbFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfdm0uX3YoX3ZtLl9zKF92bS5sYWJlbC5zZWNyZXQpKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZXNjcmlwdGlvblwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oXG5cdFx0XHRcdFx0XCJZb3UgY2FuIGZpbmQgaXQgb24gdGhlIHNldHRpbmdzIHBhZ2UsXFxudGhpcyB3aWxsIGJlIHRoZSBmaXJzdCBmaWVsZC5cIixcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdFx0KSArICcgJykrXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiksX2MoJ0V4dGVybmFsTGluaycse2F0dHJzOntcImhyZWZcIjpcImh0dHBzOi8vZGFzaGJvYXJkLmhjYXB0Y2hhLmNvbS9zZXR0aW5nc1wifX0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oICdHbyB0byB0aGUgU2V0dGluZ3MgcGFnZScsICdqZXQtZm9ybS1idWlsZGVyJyApKStcIlxcblxcdFxcdFxcdFxcdFxcdFwiKV0pXSwxKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdpbnB1dCcse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGV4cHJlc3Npb246XCJzdG9yYWdlLnNlY3JldFwifV0sc3RhdGljQ2xhc3M6XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIixhdHRyczp7XCJpZFwiOlwiaGNhcHRjaGFfc2VjcmV0XCIsXCJ0eXBlXCI6XCJ0ZXh0XCJ9LGRvbVByb3BzOntcInZhbHVlXCI6KF92bS5zdG9yYWdlLnNlY3JldCl9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZyl7IHJldHVybjsgfV92bS4kc2V0KF92bS5zdG9yYWdlLCBcInNlY3JldFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKX19fSldfSxwcm94eTp0cnVlfV0pfSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJlbGVtZW50LWlkXCI6XCJ0dXJuc3RpbGVfa2V5XCIsXCJsYWJlbFwiOl92bS5sYWJlbC5rZXksXCJkZXNjcmlwdGlvblwiOl92bS5fXyhcblx0XHRcdCdSZWFkIHRoZSBoaW50IHRvIHRoZSBTZWNyZXQgS2V5IGZpZWxkJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdCksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2Uua2V5KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwia2V5XCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLmtleVwifX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcInR1cm5zdGlsZV9zZWNyZXRcIixcImxhYmVsXCI6X3ZtLmxhYmVsLnNlY3JldCxcImRlc2NyaXB0aW9uXCI6X3ZtLl9fKFxuXHRcdFx0J1lvdSBjYW4gZmluZCBib3RoIGtleXMgb24geW91ciBUdXJuc3RpbGUgU2l0ZSBzZXR0aW5ncyBwYWdlJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdCksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2Uuc2VjcmV0KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwic2VjcmV0XCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLnNlY3JldFwifX0pLF92bS5fdihcIiBcIiksX2MoJ3AnLHtzdGF0aWNDbGFzczpcImZiLWRlc2NyaXB0aW9uXCJ9LFtfdm0uX3YoXCJcXG5cXHRcXHRcIitfdm0uX3MoX3ZtLl9fKCAnRGlkblxcJ3QgZmluZCBpdD8gSGVyZSBpcycsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnKStcIlxcblxcdFxcdFwiKSxfYygnRXh0ZXJuYWxMaW5rJyx7YXR0cnM6e1wiaHJlZlwiOlwiaHR0cHM6Ly9kZXZlbG9wZXJzLmNsb3VkZmxhcmUuY29tL3R1cm5zdGlsZS9nZXQtc3RhcnRlZC8jZ2V0LWEtc2l0ZWtleS1hbmQtc2VjcmV0LWtleVwifX0sW192bS5fdihcIlxcblxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oICdhIG1vcmUgZGV0YWlsZWQgZGVzY3JpcHRpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSkrXCJcXG5cXHRcXHRcIildKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5jbGllbnRfaWQsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLnN0b3JhZ2UuY2xpZW50X2lkKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwiY2xpZW50X2lkXCIsICQkdil9LGV4cHJlc3Npb246XCJzdG9yYWdlLmNsaWVudF9pZFwifX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLnNlY3JldCxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9fSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnU2lkZUJhckJveGVzJyx7c2NvcGVkU2xvdHM6X3ZtLl91KFt7a2V5OlwiaWNvbi1oZWxwXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTRcIixcImhlaWdodFwiOlwiMjFcIixcInZpZXdCb3hcIjpcIjAgMCAxNCAyMVwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNNS4yNSAyMUg4Ljc1VjE3LjVINS4yNVYyMVpNNyAwQzMuMTMyNSAwIDAgMy4xMzI1IDAgN0gzLjVDMy41IDUuMDc1IDUuMDc1IDMuNSA3IDMuNUM4LjkyNSAzLjUgMTAuNSA1LjA3NSAxMC41IDdDMTAuNSAxMC41IDUuMjUgMTAuMDYyNSA1LjI1IDE1Ljc1SDguNzVDOC43NSAxMS44MTI1IDE0IDExLjM3NSAxNCA3QzE0IDMuMTMyNSAxMC44Njc1IDAgNyAwWlwiLFwiZmlsbFwiOlwiIzdCN0U4MVwifX0pXSldfSxwcm94eTp0cnVlfSx7a2V5OlwiY29udGVudC1oZWxwXCIsZm46ZnVuY3Rpb24oYm94KXtyZXR1cm4gW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmtcIn0sW19jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOmJveC5saW5rX2tub3dsZWRnZSxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1pY29uXCJ9LFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjE0XCIsXCJoZWlnaHRcIjpcIjE2XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTQgMTZcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZFwiOlwiTTEzLjQ1OCAxMS4yNTUyTDEzLjQ1OCAxLjQxMTVDMTMuNDU4IDEuMDMwNjQgMTMuMTM1NyAwLjcwODM3NCAxMi43NTQ5IDAuNzA4Mzc0TDMuMTQ1NTEgMC43MDgzNzRDMS41OTI3NyAwLjcwODM3NCAwLjMzMzAwOCAxLjk2ODE0IDAuMzMzMDA4IDMuNTIwODdMMC4zMzMwMDggMTIuODk1OUMwLjMzMzAwOCAxNC40NDg2IDEuNTkyNzcgMTUuNzA4NCAzLjE0NTUxIDE1LjcwODRMMTIuNzU0OSAxNS43MDg0QzEzLjEzNTcgMTUuNzA4NCAxMy40NTggMTUuNDE1NCAxMy40NTggMTUuMDA1MkwxMy40NTggMTQuNTM2NUMxMy40NTggMTQuMzMxNCAxMy4zNDA4IDE0LjEyNjMgMTMuMTk0MyAxNC4wMDkyQzEzLjA0NzkgMTMuNTQwNCAxMy4wNDc5IDEyLjI1MTMgMTMuMTk0MyAxMS44MTE5QzEzLjM0MDggMTEuNjk0NyAxMy40NTggMTEuNDg5NiAxMy40NTggMTEuMjU1MlpNNC4wODMwMSA0LjYzNDE2QzQuMDgzMDEgNC41NDYyNiA0LjE0MTYgNC40NTgzNyA0LjI1ODc5IDQuNDU4MzdMMTAuNDY5NyA0LjQ1ODM3QzEwLjU1NzYgNC40NTgzNyAxMC42NDU1IDQuNTQ2MjYgMTAuNjQ1NSA0LjYzNDE2TDEwLjY0NTUgNS4yMjAwOUMxMC42NDU1IDUuMzM3MjggMTAuNTU3NiA1LjM5NTg3IDEwLjQ2OTcgNS4zOTU4N0w0LjI1ODc5IDUuMzk1ODdDNC4xNDE2IDUuMzk1ODcgNC4wODMwMSA1LjMzNzI4IDQuMDgzMDEgNS4yMjAwOUw0LjA4MzAxIDQuNjM0MTZaTTQuMDgzMDEgNi41MDkxNkM0LjA4MzAxIDYuNDIxMjcgNC4xNDE2IDYuMzMzMzcgNC4yNTg3OSA2LjMzMzM3TDEwLjQ2OTcgNi4zMzMzN0MxMC41NTc2IDYuMzMzMzcgMTAuNjQ1NSA2LjQyMTI3IDEwLjY0NTUgNi41MDkxNkwxMC42NDU1IDcuMDk1MDlDMTAuNjQ1NSA3LjIxMjI4IDEwLjU1NzYgNy4yNzA4NyAxMC40Njk3IDcuMjcwODdMNC4yNTg3OSA3LjI3MDg3QzQuMTQxNiA3LjI3MDg3IDQuMDgzMDEgNy4yMTIyOCA0LjA4MzAxIDcuMDk1MDlMNC4wODMwMSA2LjUwOTE2Wk0xMS40OTUxIDEzLjgzMzRMMy4xNDU1MSAxMy44MzM0QzIuNjE4MTYgMTMuODMzNCAyLjIwODAxIDEzLjQyMzIgMi4yMDgwMSAxMi44OTU5QzIuMjA4MDEgMTIuMzk3OCAyLjYxODE2IDExLjk1ODQgMy4xNDU1MSAxMS45NTg0TDExLjQ5NTEgMTEuOTU4NEMxMS40MzY1IDEyLjQ4NTcgMTEuNDM2NSAxMy4zMzUzIDExLjQ5NTEgMTMuODMzNFpcIixcImZpbGxcIjpcIiMwMDdDQkFcIn19KV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCJ9LFtfdm0uX3YoX3ZtLl9zKGJveC5sYWJlbF9rbm93bGVkZ2UpKV0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmtcIn0sW19jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOmJveC5saW5rX2NvbW11bml0eSxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1pY29uXCJ9LFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjE2XCIsXCJoZWlnaHRcIjpcIjE2XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZFwiOlwiTTE1LjU5MTMgOC4wNDU2NEMxNS41OTEzIDMuODc3MjggMTIuMjE0IDAuNSA4LjA0NTY0IDAuNUMzLjg3NzI4IDAuNSAwLjUgMy44NzcyOCAwLjUgOC4wNDU2NEMwLjUgMTEuODE4NSAzLjIzODM0IDE0Ljk1MjMgNi44NTkwMyAxNS41TDYuODU5MDMgMTAuMjM2M0w0Ljk0MjE5IDEwLjIzNjNMNC45NDIxOSA4LjA0NTY0TDYuODU5MDMgOC4wNDU2NEw2Ljg1OTAzIDYuNDAyNjRDNi44NTkwMyA0LjUxNjIzIDcuOTg0NzkgMy40NTEzMiA5LjY4ODY0IDMuNDUxMzJDMTAuNTQwNiAzLjQ1MTMyIDExLjM5MjUgMy42MDM0NSAxMS4zOTI1IDMuNjAzNDVMMTEuMzkyNSA1LjQ1OTQzTDEwLjQ0OTMgNS40NTk0M0M5LjUwNjA5IDUuNDU5NDMgOS4yMDE4MyA2LjAzNzUzIDkuMjAxODMgNi42NDYwNEw5LjIwMTgzIDguMDQ1NjRMMTEuMzAxMiA4LjA0NTY0TDEwLjk2NjUgMTAuMjM2M0w5LjIwMTgzIDEwLjIzNjNMOS4yMDE4MyAxNS41QzEyLjgyMjUgMTQuOTUyMyAxNS41OTEzIDExLjgxODUgMTUuNTkxMyA4LjA0NTY0WlwiLFwiZmlsbFwiOlwiIzAwN0NCQVwifX0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIn0sW192bS5fdihfdm0uX3MoYm94LmxhYmVsX2NvbW11bml0eSkpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGlua1wifSxbX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6Ym94Lmxpbmtfc3VwcG9ydCxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1pY29uXCJ9LFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjE1XCIsXCJoZWlnaHRcIjpcIjE4XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTUgMThcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZFwiOlwiTTcuNTgzMzMgMC42NjY2ODdDMy42NzUgMC42NjY2ODcgMC41IDMuODQxNjkgMC41IDcuNzUwMDJDMC41IDExLjY1ODQgMy42NzUgMTQuODMzNCA3LjU4MzMzIDE0LjgzMzRIOFYxNy4zMzM0QzEyLjA1IDE1LjM4MzQgMTQuNjY2NyAxMS41IDE0LjY2NjcgNy43NTAwMkMxNC42NjY3IDMuODQxNjkgMTEuNDkxNyAwLjY2NjY4NyA3LjU4MzMzIDAuNjY2Njg3Wk04LjQxNjY3IDEyLjc1SDYuNzVWMTEuMDgzNEg4LjQxNjY3VjEyLjc1Wk04LjQxNjY3IDkuODMzMzVINi43NUM2Ljc1IDcuMTI1MDIgOS4yNSA3LjMzMzM1IDkuMjUgNS42NjY2OUM5LjI1IDQuNzUwMDIgOC41IDQuMDAwMDIgNy41ODMzMyA0LjAwMDAyQzYuNjY2NjcgNC4wMDAwMiA1LjkxNjY3IDQuNzUwMDIgNS45MTY2NyA1LjY2NjY5SDQuMjVDNC4yNSAzLjgyNTAyIDUuNzQxNjcgMi4zMzMzNSA3LjU4MzMzIDIuMzMzMzVDOS40MjUgMi4zMzMzNSAxMC45MTY3IDMuODI1MDIgMTAuOTE2NyA1LjY2NjY5QzEwLjkxNjcgNy43NTAwMiA4LjQxNjY3IDcuOTU4MzUgOC40MTY2NyA5LjgzMzM1WlwiLFwiZmlsbFwiOlwiIzAwN0NCQVwifX0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIn0sW192bS5fdihfdm0uX3MoYm94LmxhYmVsX3N1cHBvcnQpKV0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmtcIn0sW19jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOmJveC5saW5rX2dpdCxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1pY29uXCJ9LFtfYygnc3ZnJyx7YXR0cnM6e1wid2lkdGhcIjpcIjE2XCIsXCJoZWlnaHRcIjpcIjE2XCIsXCJ2aWV3Qm94XCI6XCIwIDAgMTYgMTZcIixcImZpbGxcIjpcIm5vbmVcIixcInhtbG5zXCI6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZmlsbC1ydWxlXCI6XCJldmVub2RkXCIsXCJjbGlwLXJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03Ljk3NiAwQzUuODYwNzEgMC4wMDAyNjUxNTYgMy44MzIxNCAwLjg0MDY3NiAyLjMzNjQxIDIuMzM2NDFDMC44NDA2NzYgMy44MzIxNCAwLjAwMDI2NTE1NiA1Ljg2MDcxIDAgNy45NzZDMCAxMS40OTggMi4zIDE0LjQ4MyA1LjQzMSAxNS41NkM1LjgyMyAxNS42MDkgNS45NjkgMTUuMzY0IDUuOTY5IDE1LjE2OFYxMy43OThDMy43NjggMTQuMjg4IDMuMjc5IDEyLjcyMiAzLjI3OSAxMi43MjJDMi45MzYgMTEuNzkyIDIuMzk4IDExLjU0NyAyLjM5OCAxMS41NDdDMS42NjQgMTEuMDU4IDIuNDQ2IDExLjA1OCAyLjQ0NiAxMS4wNThDMy4yMjkgMTEuMTA3IDMuNjcgMTEuODkgMy42NyAxMS44OUM0LjQwNCAxMy4xMTMgNS41MjkgMTIuNzcgNS45NyAxMi41NzVDNi4wMTggMTIuMDM3IDYuMjYzIDExLjY5NSA2LjQ1OSAxMS40OTlDNC42OTcgMTEuMzAzIDIuODM4IDEwLjYxOCAyLjgzOCA3LjUzNUMyLjgzOCA2LjY1NSAzLjEzMSA1Ljk2OSAzLjY3IDUuMzgyQzMuNjIgNS4yMzUgMy4zMjcgNC40MDQgMy43NjggMy4zMjdDMy43NjggMy4zMjcgNC40NTMgMy4xMzEgNS45NjkgNC4xNTlDNi42MDUgMy45NjMgNy4yOTEgMy45MTQgNy45NzYgMy45MTRDOC42NjEgMy45MTQgOS4zNDYgNC4wMTIgOS45ODIgNC4xNTlDMTEuNDk5IDMuMTMyIDEyLjE4NCAzLjMyNyAxMi4xODQgMy4zMjdDMTIuNjI0IDQuNDA0IDEyLjMzIDUuMjM1IDEyLjI4MSA1LjQzMUMxMi44MTk5IDYuMDE4MDggMTMuMTE3MSA2Ljc4NzEgMTMuMTEzIDcuNTg0QzEzLjExMyAxMC42NjcgMTEuMjUzIDExLjMwMyA5LjQ5MyAxMS40OTlDOS43ODYgMTEuNzQzIDEwLjAzMSAxMi4yMzIgMTAuMDMxIDEyLjk2NlYxNS4xNjhDMTAuMDMxIDE1LjM2NCAxMC4xNzcgMTUuNjA4IDEwLjU2OSAxNS41NkMxMi4xNTUgMTUuMDI0OCAxMy41MzI3IDE0LjAwNDYgMTQuNTA3MyAxMi42NDM2QzE1LjQ4MTggMTEuMjgyNyAxNi4wMDQgOS42NDk4OSAxNiA3Ljk3NkMxNS45NTEgMy41NzIgMTIuMzggMCA3Ljk3NiAwWlwiLFwiZmlsbFwiOlwiIzAwN0NCQVwifX0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIn0sW192bS5fdihfdm0uX3MoYm94LmxhYmVsX2dpdCkpXSldKV0pXX19XSl9KX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2RpdicsX3ZtLl9sKChfdm0uY2FwdGNoYSksZnVuY3Rpb24odGFiLGluZGV4KXtyZXR1cm4gX2MoJ0N4VnVpQ29sbGFwc2VNaW5pJyx7a2V5OnRhYi5jb21wb25lbnQubmFtZSxhdHRyczp7XCJ3aXRoLXBhbmVsXCI6XCJcIixcImljb25cIjp0YWIuaWNvbixcImxhYmVsXCI6X3ZtLmdldFRhYlRpdGxlKCB0YWIgKSxcImRpc2FibGVkXCI6dGFiLmRpc2FibGVkLFwiaW5pdGlhbC1hY3RpdmVcIjpfdm0uaXNBY3RpdmUoIHRhYi5jb21wb25lbnQubmFtZSApfSxvbjp7XCJjaGFuZ2VcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25DaGFuZ2VBY3RpdmUoICRldmVudCwgdGFiLmNvbXBvbmVudC5uYW1lICl9fX0sW19jKCdrZWVwLWFsaXZlJyxbX2ModGFiLmNvbXBvbmVudCx7cmVmOlwiY2FwdGNoYVwiLHJlZkluRm9yOnRydWUsdGFnOlwiY29tcG9uZW50XCIsYXR0cnM6e1wiaW5jb21pbmdcIjpfdm0uZ2V0SW5jb21pbmdDYXB0Y2hhKCB0YWIuY29tcG9uZW50Lm5hbWUgKX19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWJ1dHRvbicse2F0dHJzOntcImJ1dHRvbi1zdHlsZVwiOlwiYWNjZW50XCIsXCJsb2FkaW5nXCI6X3ZtLmxvYWRpbmdHYXRld2F5c1sgdGFiLmNvbXBvbmVudC5uYW1lIF19LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLm9uU2F2ZUdhdGV3YXkoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKX19fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJzbG90XCI6XCJsYWJlbFwifSxzbG90OlwibGFiZWxcIn0sW192bS5fdihcIlNhdmVcIildKV0pXSwxKX0pLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwuYXBpX2tleSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImRlc2NyaXB0aW9uXCI6KChfdm0uaGVscC5hcGlQcmVmKSArIFwiIDxhIGhyZWY9XFxcIlwiICsgKF92bS5oZWxwLmFwaUxpbmspICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5cIiArIChfdm0uaGVscC5hcGlMaW5rTGFiZWwpICsgXCI8L2E+XCIpLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5hcGlfa2V5KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmFwaV9rZXk9JCR2fSxleHByZXNzaW9uOlwiYXBpX2tleVwifX0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwuYXBpX2tleSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImRlc2NyaXB0aW9uXCI6KChfdm0uaGVscC5hcGlQcmVmKSArIFwiIDxhIGhyZWY9XFxcIlwiICsgKF92bS5oZWxwLmFwaUxpbmspICsgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5cIiArIChfdm0uaGVscC5hcGlMaW5rTGFiZWwpICsgXCI8L2E+XCIpLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5hcGlfa2V5KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLmFwaV9rZXk9JCR2fSxleHByZXNzaW9uOlwiYXBpX2tleVwifX0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2JyxbX2MoJ2N4LXZ1aS1zd2l0Y2hlcicse2F0dHJzOntcIm5hbWVcIjpcImVuYWJsZV9kZXZfbW9kZVwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5lbmFibGVfZGV2X21vZGUgPyAoKF92bS5sYWJlbC5lbmFibGVfZGV2X21vZGUpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmVuYWJsZV9kZXZfbW9kZSxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuZW5hYmxlX2Rldl9tb2RlLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2VuYWJsZV9kZXZfbW9kZScgKSA/IF92bS5zdG9yYWdlLmVuYWJsZV9kZXZfbW9kZSA6IGZhbHNlLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdlbmFibGVfZGV2X21vZGUnLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiY2xlYXJfb25fdW5pbnN0YWxsXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJsYWJlbFwiOl92bS5sb2FkaW5nLmNsZWFyX29uX3VuaW5zdGFsbCA/ICgoX3ZtLmxhYmVsLmNsZWFyX29uX3VuaW5zdGFsbCkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuY2xlYXJfb25fdW5pbnN0YWxsLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5jbGVhcl9vbl91bmluc3RhbGwsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnY2xlYXJfb25fdW5pbnN0YWxsJyApID8gX3ZtLnN0b3JhZ2UuY2xlYXJfb25fdW5pbnN0YWxsIDogZmFsc2UsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2NsZWFyX29uX3VuaW5zdGFsbCcsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJuYW1lXCI6XCJmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHlcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJyxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5ID8gKChfdm0ubGFiZWwuZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5KSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHksXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHknICkgPyBfdm0uc3RvcmFnZS5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHkgOiAnbWFuYWdlX29wdGlvbnMnLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHknLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibmFtZVwiOlwibWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5XCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCcsXCJsYWJlbFwiOl92bS5sb2FkaW5nLm1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eSA/ICgoX3ZtLmxhYmVsLm1hbnVhbF92ZXJpZmljYXRpb25fY2FwYWJpbGl0eSkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwubWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5LFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5tYW51YWxfdmVyaWZpY2F0aW9uX2NhcGFiaWxpdHksXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnbWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5JyApID8gX3ZtLnN0b3JhZ2UubWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5IDogJ21hbmFnZV9vcHRpb25zJyxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnbWFudWFsX3ZlcmlmaWNhdGlvbl9jYXBhYmlsaXR5JywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1zZWxlY3QnLHthdHRyczp7XCJuYW1lXCI6XCJzc3JfdmFsaWRhdGlvbl9tZXRob2RcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJyxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuc3NyX3ZhbGlkYXRpb25fbWV0aG9kID8gKChfdm0ubGFiZWwuc3NyX3ZhbGlkYXRpb25fbWV0aG9kKSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5zc3JfdmFsaWRhdGlvbl9tZXRob2QsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLnNzcl92YWxpZGF0aW9uX21ldGhvZCxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdzc3JfdmFsaWRhdGlvbl9tZXRob2QnICkgPyBfdm0uc3RvcmFnZS5zc3JfdmFsaWRhdGlvbl9tZXRob2QgOiAncmVzdCcsXCJvcHRpb25zLWxpc3RcIjpfdm0uc2VsZWN0T3B0aW9ucyxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnc3NyX3ZhbGlkYXRpb25fbWV0aG9kJywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1mLXNlbGVjdCcse2F0dHJzOntcIm5hbWVcIjpcInNlbGZfcHJvbW90YWJsZV9yb2xlc1wiLFwibGFiZWxcIjpfdm0ubG9hZGluZy5zZWxmX3Byb21vdGFibGVfcm9sZXMgPyAoKF92bS5sYWJlbC5zZWxmX3Byb21vdGFibGVfcm9sZXMpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLnNlbGZfcHJvbW90YWJsZV9yb2xlcyxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuc2VsZl9wcm9tb3RhYmxlX3JvbGVzLFwidmFsdWVcIjpfdm0uc2VsZWN0ZWRTZWxmUHJvbW90YWJsZVJvbGVzLFwib3B0aW9ucy1saXN0XCI6X3ZtLmF2YWlsYWJsZVJvbGVzLFwibXVsdGlwbGVcIjp0cnVlLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxvbjp7XCJvbi1jaGFuZ2VcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlU2VsZlByb21vdGFibGVSb2xlcyggJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcicse2F0dHJzOntcImxhYmVsXCI6X3ZtLl9fKCAnRm9ybSBBY2Nlc3NpYmlsaXR5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF19fSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjeC12dWktaW5uZXItcGFuZWxcIn0sW19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJkaXNhYmxlX25leHRfYnV0dG9uXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJsYWJlbFwiOl92bS5sb2FkaW5nLmRpc2FibGVfbmV4dF9idXR0b24gPyAoKF92bS5sYWJlbC5kaXNhYmxlX25leHRfYnV0dG9uKSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5kaXNhYmxlX25leHRfYnV0dG9uLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5kaXNhYmxlX25leHRfYnV0dG9uLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2Rpc2FibGVfbmV4dF9idXR0b24nICkgPyBfdm0uc3RvcmFnZS5kaXNhYmxlX25leHRfYnV0dG9uIDogdHJ1ZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnZGlzYWJsZV9uZXh0X2J1dHRvbicsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJzY3JvbGxfb25fbmV4dFwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5zY3JvbGxfb25fbmV4dCA/ICgoX3ZtLmxhYmVsLnNjcm9sbF9vbl9uZXh0KSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5zY3JvbGxfb25fbmV4dCxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuc2Nyb2xsX29uX25leHQsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnc2Nyb2xsX29uX25leHQnICkgPyBfdm0uc3RvcmFnZS5zY3JvbGxfb25fbmV4dCA6IGZhbHNlLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdzY3JvbGxfb25fbmV4dCcsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJhdXRvX2ZvY3VzXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJsYWJlbFwiOl92bS5sb2FkaW5nLmF1dG9fZm9jdXMgPyAoKF92bS5sYWJlbC5hdXRvX2ZvY3VzKSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5hdXRvX2ZvY3VzLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5hdXRvX2ZvY3VzLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2F1dG9fZm9jdXMnICkgPyBfdm0uc3RvcmFnZS5hdXRvX2ZvY3VzIDogZmFsc2UsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2F1dG9fZm9jdXMnLCAkZXZlbnQgKX19fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcicse2F0dHJzOntcImxhYmVsXCI6X3ZtLl9fKCAnRm9ybSBSZXF1ZXN0IEFyZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJuYW1lXCI6XCJnZmJfcmVxdWVzdF9hcmdzX2tleVwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJywgX3ZtLmVycm9ycy5nZmJfcmVxdWVzdF9hcmdzX2tleSA/ICdqZmItaGFzLWVycm9yJyA6ICcnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCcsXCJsYWJlbFwiOidSZXF1ZXN0IGtleScsXCJkZXNjcmlwdGlvblwiOidVbmlxdWUgZm9ybSBwYXJhbWV0ZXIgKGtleSknLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2dmYl9yZXF1ZXN0X2FyZ3Nfa2V5JyApID8gX3ZtLnN0b3JhZ2UuZ2ZiX3JlcXVlc3RfYXJnc19rZXkgOiAnMTExMScsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2dmYl9yZXF1ZXN0X2FyZ3Nfa2V5JywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksKF92bS5lcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc19rZXkpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1maWVsZC1lcnJvclwifSxbX3ZtLl92KFwiXFxuICAgICAgXCIrX3ZtLl9zKF92bS5lcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc19rZXkpK1wiXFxuICAgIFwiKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcIm5hbWVcIjpcImdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWVcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcsIF92bS5lcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZSA/ICdqZmItaGFzLWVycm9yJyA6ICcnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCcsXCJsYWJlbFwiOidSZXF1ZXN0IHZhbHVlJyxcImRlc2NyaXB0aW9uXCI6J1VuaXF1ZSBmb3JtIHBhcmFtZXRlciAodmFsdWUpJyxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlJyApID8gX3ZtLnN0b3JhZ2UuZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZSA6ICcyMjIyJyxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLChfdm0uZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1maWVsZC1lcnJvclwifSxbX3ZtLl92KFwiXFxuICAgICAgXCIrX3ZtLl9zKF92bS5lcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZSkrXCJcXG4gICAgXCIpXSk6X3ZtLl9lKCldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJ1c2VfZ2F0ZXdheXNcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxhYmVsLnVzZV9nYXRld2F5cyxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAudXNlX2dhdGV3YXlzLFwidmFsdWVcIjpfdm0uc3RvcmFnZS51c2VfZ2F0ZXdheXN9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ3VzZV9nYXRld2F5cycsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLChfdm0uc3RvcmFnZS51c2VfZ2F0ZXdheXMpP19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJlbmFibGVfdGVzdF9tb2RlXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmVuYWJsZV90ZXN0X21vZGUsXCJsYWJlbFwiOl92bS5sYWJlbC5lbmFibGVfdGVzdF9tb2RlLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5lbmFibGVfdGVzdF9tb2RlfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdlbmFibGVfdGVzdF9tb2RlJywgJGV2ZW50ICl9fX0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5zdG9yYWdlLnVzZV9nYXRld2F5cyk/W19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImN4LXZ1aS1pbm5lci1wYW5lbFwifSxfdm0uX2woKF92bS5nYXRld2F5cyksZnVuY3Rpb24odGFiLGluZGV4KXtyZXR1cm4gX2MoJ0N4VnVpQ29sbGFwc2VNaW5pJyx7a2V5OnRhYi5jb21wb25lbnQubmFtZSxhdHRyczp7XCJ3aXRoLXBhbmVsXCI6XCJcIixcImljb25cIjp0YWIuaWNvbixcImxhYmVsXCI6dGFiLnRpdGxlLFwiZGlzYWJsZWRcIjp0YWIuZGlzYWJsZWQsXCJpbml0aWFsLWFjdGl2ZVwiOl92bS5pc0FjdGl2ZSggdGFiLmNvbXBvbmVudC5uYW1lICl9LG9uOntcImNoYW5nZVwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vbkNoYW5nZUFjdGl2ZSggJGV2ZW50LCB0YWIuY29tcG9uZW50Lm5hbWUgKX19fSxbX2MoJ2tlZXAtYWxpdmUnLFtfYyh0YWIuY29tcG9uZW50LHtyZWY6XCJnYXRld2F5c1wiLHJlZkluRm9yOnRydWUsdGFnOlwiY29tcG9uZW50XCIsYXR0cnM6e1wiaW5jb21pbmdcIjpfdm0uZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktYnV0dG9uJyx7YXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJhY2NlbnRcIixcImxvYWRpbmdcIjpfdm0ubG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXX0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25TYXZlR2F0ZXdheSggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApfX19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX3ZtLl92KFwiU2F2ZVwiKV0pXSldLDEpfSksMSldOl92bS5fZSgpXSwyKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2RpdicsW19jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJuYW1lXCI6XCJpcGluZm9fdG9rZW5cIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJyxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuaXBpbmZvX3Rva2VuID8gKChfdm0ubGFiZWwuaXBpbmZvX3Rva2VuKSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5pcGluZm9fdG9rZW4sXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmlwaW5mb190b2tlbixcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdpcGluZm9fdG9rZW4nICkgPyBfdm0uc3RvcmFnZS5pcGluZm9fdG9rZW4gOiAnJyxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnaXBpbmZvX3Rva2VuJywgJGV2ZW50ICl9fX0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2RpdicsWyhfdm0ubWlncmF0aW9uSW5Qcm9ncmVzcyk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLXNzci1taWdyYXRpb24td2FpdFwifSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImpmYi1zc3ItbWlncmF0aW9uLXdhaXRfX3NwaW5uZXJcIixhdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifX0pLF92bS5fdihcIiBcIiksX2MoJ2RpdicsW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5fXyggJ01pZ3JhdGlvbiBpbiBwcm9ncmVzc+KApicsICdqZXQtZm9ybS1idWlsZGVyJyApKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdwJyxbX3ZtLl92KF92bS5fcyhfdm0uaGVscC5taWdyYXRpb25JblByb2dyZXNzKSldKV0pXSk6W19jKCdjeC12dWktY29tcG9uZW50LXdyYXBwZXInLHthdHRyczp7XCJsYWJlbFwiOl92bS5sb2FkaW5nLmNhbGxiYWNrcyA/ICgoX3ZtLmxhYmVsLmNhbGxiYWNrcykgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuY2FsbGJhY2tzLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5jYWxsYmFja3MsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF19fSxbX2MoJ3RleHRhcmVhJyx7c3RhdGljQ2xhc3M6XCJqZmItc3NyLWNhbGxiYWNrcy10ZXh0YXJlYVwiLGF0dHJzOntcInJvd3NcIjpcIjEwXCIsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LGRvbVByb3BzOntcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuY2FsbGJhY2tzfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vbklucHV0KCAkZXZlbnQudGFyZ2V0LnZhbHVlICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImFjY2VudFwiLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nIHx8ICFfdm0uaGFzVW5zYXZlZENhbGxiYWNrc0NoYW5nZX0sb246e1wiY2xpY2tcIjpfdm0ub25TYXZlQ2FsbGJhY2tzfX0sW19jKCdzcGFuJyx7YXR0cnM6e1wic2xvdFwiOlwibGFiZWxcIn0sc2xvdDpcImxhYmVsXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5fXyggJ1NhdmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSkpXSldKV0sMSksX3ZtLl92KFwiIFwiKSwoX3ZtLmhhc1JlamVjdGVkKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZFwifSxbX2MoJ3N0cm9uZycsW192bS5fdihfdm0uX3MoX3ZtLl9fKCAnTm90IHNhdmVkOicsICdqZXQtZm9ybS1idWlsZGVyJyApKSldKSxfdm0uX3YoXCIgXCIpLF9jKCd1bCcse3N0YXRpY0NsYXNzOlwiamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRfX2xpc3RcIn0sX3ZtLl9sKChfdm0ucmVqZWN0ZWROYW1lcyksZnVuY3Rpb24obmFtZSl7cmV0dXJuIF9jKCdsaScse2tleTpuYW1lfSxbX3ZtLl92KF92bS5fcyhuYW1lKStcIiDigJQgXCIrX3ZtLl9zKF92bS5yZWplY3RlZFsgbmFtZSBdKSldKX0pLDApXSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoX3ZtLmJsb2NrZWQubGVuZ3RoKT9fYygnY3gtdnVpLWNvbXBvbmVudC13cmFwcGVyJyx7YXR0cnM6e1wibGFiZWxcIjooKF92bS5sYWJlbC5ibG9ja2VkKSArIFwiIChcIiArIChfdm0uYmxvY2tlZC5sZW5ndGgpICsgXCIpXCIpLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5ibG9ja2VkLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdfX0sW19jKCd1bCcse3N0YXRpY0NsYXNzOlwiamZiLXNzci1ibG9ja2VkX19saXN0XCJ9LF92bS5fbCgoX3ZtLmJsb2NrZWQpLGZ1bmN0aW9uKHVzYWdlLGluZGV4KXtyZXR1cm4gX2MoJ2xpJyx7a2V5OmluZGV4fSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImpmYi1zc3ItYmxvY2tlZF9fZm9ybVwifSxbX3ZtLl92KF92bS5fcyh1c2FnZS5mb3JtX3RpdGxlIHx8IChcIiNcIiArICh1c2FnZS5mb3JtX2lkKSkpKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcImpmYi1zc3ItYmxvY2tlZF9fbWV0YVwifSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0KFwiK192bS5fcyhfdm0uX18oICdmaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApKStcIiBcXFwiXCIrX3ZtLl9zKHVzYWdlLmZpZWxkKStcIlxcXCIg4oaSIFwiKSxfYygnY29kZScsW192bS5fdihfdm0uX3ModXNhZ2UubmFtZSkpXSksX3ZtLl92KFwiKVxcblxcdFxcdFxcdFxcdFxcdFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6dXNhZ2UuZWRpdF91cmwsXCJ0YXJnZXRcIjpcIl9ibGFua1wiLFwicmVsXCI6XCJub29wZW5lciBub3JlZmVycmVyXCJ9fSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyggJ0VkaXQgZm9ybSDihpInLCAnamV0LWZvcm0tYnVpbGRlcicgKSkrXCJcXG5cXHRcXHRcXHRcXHRcXHRcIildKV0pfSksMCldKTpfdm0uX2UoKV1dLDIpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2JyxbX2MoJ2N4LXZ1aS1zd2l0Y2hlcicse2F0dHJzOntcIm5hbWVcIjpcImVuYWJsZV91c2VyX2pvdXJuZXlcIixcImxhYmVsXCI6X3ZtLmxvYWRpbmcuZW5hYmxlX3VzZXJfam91cm5leSA/ICgoX3ZtLmxhYmVsLmVuYWJsZV91c2VyX2pvdXJuZXkpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmVuYWJsZV91c2VyX2pvdXJuZXksXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmVuYWJsZV91c2VyX2pvdXJuZXksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnZW5hYmxlX3VzZXJfam91cm5leScgKSA/IF92bS5zdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgOiBmYWxzZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnZW5hYmxlX3VzZXJfam91cm5leScsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLChfdm0uc3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5KT9bX2MoJ2N4LXZ1aS1zZWxlY3QnLHtzdGF0aWNDbGFzczpcInVzZXItam91cm5leS1zZWxlY3RcIixhdHRyczp7XCJuYW1lXCI6XCJzdG9yYWdlX3R5cGVcIixcImxhYmVsXCI6X3ZtLmxvYWRpbmcuc3RvcmFnZV90eXBlID8gKChfdm0ubGFiZWwuc3RvcmFnZV90eXBlKSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5zdG9yYWdlX3R5cGUsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLnN0b3JhZ2VfdHlwZSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcIm9wdGlvbnMtbGlzdFwiOltcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnbG9jYWwnLFxuXHRcdFx0XHRcdGxhYmVsOiAnTG9jYWwgU3RvcmFnZSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnc2Vzc2lvbicsXG5cdFx0XHRcdFx0bGFiZWw6ICdTZXNzaW9uIFN0b3JhZ2UnXG5cdFx0XHRcdH1cblx0XHRcdF0sXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnc3RvcmFnZV90eXBlJyApID8gX3ZtLnN0b3JhZ2Uuc3RvcmFnZV90eXBlIDogJ2xvY2FsJyxcImRpc2FibGVkXCI6IV92bS5zdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgfHwgX3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnc3RvcmFnZV90eXBlJywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcicsW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImN4LXZ1aS1jb21wb25lbnRfX2xhYmVsXCJ9LFtfdm0uX3YoXCJQbGVhc2Ugbm90ZSFcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLFtfYygnYicsW192bS5fdihcIlNlc3Npb24gU3RvcmFnZTpcIildKSxfdm0uX3YoXCIgVGhlIGluZm9ybWF0aW9uIGlzIGtlcHQgb25seSB3aGlsZSB0aGlzIHRhYiBvciB3aW5kb3cgaXMgb3Blbi4gUmVsb2FkaW5nIHRoZSBwYWdlIGlzIGZpbmUsIGJ1dCBhcyBzb29uIGFzIHlvdSBjbG9zZSB0aGUgdGFiLCB0aGUgZGF0YSBkaXNhcHBlYXJzLiBPdGhlciB0YWJzIG9yIHdpbmRvd3Mgb2YgdGhlIHNpdGUgY2Fu4oCZdCBzZWUgaXQuIFlvdSBjYW4gc3RpbGwgZ2V0IGl0IGJhY2sgYnkgcHJlc3NpbmcgQ3RybOKAryvigK9TaGlmdOKAryvigK9UICjigJxSZW9wZW7igK9DbG9zZWTigK9UYWLigJ0pXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2JyxbX2MoJ2InLFtfdm0uX3YoXCJMb2NhbCBTdG9yYWdlOlwiKV0pLF92bS5fdihcIiBUaGUgaW5mb3JtYXRpb24gc3RheXMgbXVjaCBsb25nZXLigJRldmVyeSB0YWIgb3Igd2luZG93IG9mIHRoaXMgc2l0ZSBjYW4gdXNlIGl0LCBhbmQgaXQgcmVtYWlucyBldmVuIGFmdGVyIHlvdSBjbG9zZSBhbmQgcmVvcGVuIHRoZSBicm93c2VyLCB1bnRpbCB5b3UgY2xlYXIgaXQgeW91cnNlbGYuXCIpXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktc2VsZWN0Jyx7c3RhdGljQ2xhc3M6XCJ1c2VyLWpvdXJuZXktc2VsZWN0XCIsYXR0cnM6e1wibmFtZVwiOlwiY2xlYXJfYWZ0ZXJfc3VibWl0XCIsXCJsYWJlbFwiOl92bS5sb2FkaW5nLmNsZWFyX2FmdGVyX3N1Ym1pdCA/ICgoX3ZtLmxhYmVsLmNsZWFyX2FmdGVyX3N1Ym1pdCkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuY2xlYXJfYWZ0ZXJfc3VibWl0LFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5jbGVhcl9hZnRlcl9zdWJtaXQsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJvcHRpb25zLWxpc3RcIjpbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ2Fsd2F5cycsXG5cdFx0XHRcdFx0bGFiZWw6ICdBZnRlciBhbnkgc3VibWl0IChzdWNjZXNzIG9yIGZhaWx1cmUpJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRsYWJlbDogJ0FmdGVyIHN1Y2Nlc3NmdWwgc3VibWl0IG9ubHknXG5cdFx0XHRcdH1cblx0XHRcdF0sXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnY2xlYXJfYWZ0ZXJfc3VibWl0JyApID8gX3ZtLnN0b3JhZ2UuY2xlYXJfYWZ0ZXJfc3VibWl0IDogJ3N1Y2Nlc3MnLFwiZGlzYWJsZWRcIjohX3ZtLnN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leSB8fCBfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdjbGVhcl9hZnRlcl9zdWJtaXQnLCAkZXZlbnQgKX19fSldOl92bS5fZSgpXSwyKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGI0MzUwMGUmbGFuZz1zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjdmZTA4NWY3XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjU0YjY0YyZsYW5nPXNjc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNTgwMTRhMTFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI1NGI2NGMmbGFuZz1zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI1NGI2NGMmbGFuZz1zY3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjcxMGVjZDhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWRjNDJkZTYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzAxNTEyMTVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWRjNDJkZTYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZGM0MmRlNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3YWIyMzg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjBjZDc1MDFmXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tc3JDYWxsYmFja3NUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTdhYjIzODgmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3YWIyMzg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZmIwYzJmYyZsYW5nPWNzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwMjE1NDYwN1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZiMGMyZmMmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZiMGMyZmMmbGFuZz1jc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hZGRvbnMtdGFicyc7XG5pbXBvcnQgU2V0dGluZ3NQYWdlIGZyb20gJy4vU2V0dGluZ3NQYWdlJztcblxuY29uc3QgeyByZW5kZXJDdXJyZW50UGFnZSB9ID0gd2luZG93LkpldEZCQWN0aW9ucztcbmNvbnN0IHsgTm90aWNlc1BsdWdpbiB9ID0gSmV0RkJTdG9yZTtcblxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSgge1xuXHRwbHVnaW5zOiBbIE5vdGljZXNQbHVnaW4gXVxufSApXG5cbnJlbmRlckN1cnJlbnRQYWdlKCBTZXR0aW5nc1BhZ2UsIHsgc3RvcmUgfSApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
