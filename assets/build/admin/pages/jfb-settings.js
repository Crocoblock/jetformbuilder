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
`, "",{"version":3,"sources":["webpack://./../admin/pages/jfb-settings/tabs/options/OptionsTab.vue"],"names":[],"mappings":";AAqRA;;EAEA,gCAAA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AACA","sourcesContent":["<template>\n\t<div>\n\t\t<cx-vui-switcher\n\t\t\tname=\"enable_dev_mode\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:label=\"loading.enable_dev_mode ? `${label.enable_dev_mode} (loading...)` : label.enable_dev_mode\"\n\t\t\t:description=\"help.enable_dev_mode\"\n\t\t\t:value=\"storage.hasOwnProperty( 'enable_dev_mode' ) ? storage.enable_dev_mode : false\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'enable_dev_mode', $event )\"\n\t\t></cx-vui-switcher>\n\t\t<cx-vui-switcher\n\t\t\tname=\"clear_on_uninstall\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:label=\"loading.clear_on_uninstall ? `${label.clear_on_uninstall} (loading...)` : label.clear_on_uninstall\"\n\t\t\t:description=\"help.clear_on_uninstall\"\n\t\t\t:value=\"storage.hasOwnProperty( 'clear_on_uninstall' ) ? storage.clear_on_uninstall : false\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'clear_on_uninstall', $event )\"\n\t\t></cx-vui-switcher>\n\t\t<cx-vui-input\n\t\t\tname=\"form_records_access_capability\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:size=\"'fullwidth'\"\n\t\t\t:label=\"loading.form_records_access_capability ? `${label.form_records_access_capability} (loading...)` : label.form_records_access_capability\"\n\t\t\t:description=\"help.form_records_access_capability\"\n\t\t\t:value=\"storage.hasOwnProperty( 'form_records_access_capability' ) ? storage.form_records_access_capability : 'manage_options'\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'form_records_access_capability', $event )\"\n\t\t/>\n\t\t<cx-vui-select\n\t\t\tname=\"ssr_validation_method\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:size=\"'fullwidth'\"\n\t\t\t:label=\"loading.ssr_validation_method ? `${label.ssr_validation_method} (loading...)` : label.ssr_validation_method\"\n\t\t\t:description=\"help.ssr_validation_method\"\n\t\t\t:value=\"storage.hasOwnProperty( 'ssr_validation_method' ) ? storage.ssr_validation_method : 'rest'\"\n\t\t\t:options-list=\"selectOptions\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t@input=\"changeVal( 'ssr_validation_method', $event )\"\n\t\t></cx-vui-select>\n\t\t<cx-vui-f-select\n\t\t\tname=\"self_promotable_roles\"\n\t\t\t:label=\"loading.self_promotable_roles ? `${label.self_promotable_roles} (loading...)` : label.self_promotable_roles\"\n\t\t\t:description=\"help.self_promotable_roles\"\n\t\t\t:value=\"selectedSelfPromotableRoles\"\n\t\t\t:options-list=\"availableRoles\"\n\t\t\t:multiple=\"true\"\n\t\t\t:disabled=\"isLoading\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t:size=\"'fullwidth'\"\n\t\t\t@on-change=\"changeSelfPromotableRoles( $event )\"\n\t\t></cx-vui-f-select>\n\t\t<cx-vui-component-wrapper\n\t\t\t:label=\"__( 'Form Accessibility', 'jet-form-builder' )\"\n\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t/>\n\t\t<div class=\"cx-vui-inner-panel\">\n\t\t\t<cx-vui-switcher\n\t\t\t\tname=\"disable_next_button\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t\t:label=\"loading.disable_next_button ? `${label.disable_next_button} (loading...)` : label.disable_next_button\"\n\t\t\t\t:description=\"help.disable_next_button\"\n\t\t\t\t:value=\"storage.hasOwnProperty( 'disable_next_button' ) ? storage.disable_next_button : true\"\n\t\t\t\t:disabled=\"isLoading\"\n\t\t\t\t@input=\"changeVal( 'disable_next_button', $event )\"\n\t\t\t></cx-vui-switcher>\n\t\t\t<cx-vui-switcher\n\t\t\t\tname=\"scroll_on_next\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t\t:label=\"loading.scroll_on_next ? `${label.scroll_on_next} (loading...)` : label.scroll_on_next\"\n\t\t\t\t:description=\"help.scroll_on_next\"\n\t\t\t\t:value=\"storage.hasOwnProperty( 'scroll_on_next' ) ? storage.scroll_on_next : false\"\n\t\t\t\t:disabled=\"isLoading\"\n\t\t\t\t@input=\"changeVal( 'scroll_on_next', $event )\"\n\t\t\t></cx-vui-switcher>\n\t\t\t<cx-vui-switcher\n\t\t\t\tname=\"auto_focus\"\n\t\t\t\t:wrapper-css=\"[ 'equalwidth' ]\"\n\t\t\t\t:label=\"loading.auto_focus ? `${label.auto_focus} (loading...)` : label.auto_focus\"\n\t\t\t\t:description=\"help.auto_focus\"\n\t\t\t\t:value=\"storage.hasOwnProperty( 'auto_focus' ) ? storage.auto_focus : false\"\n\t\t\t\t:disabled=\"isLoading\"\n\t\t\t\t@input=\"changeVal( 'auto_focus', $event )\"\n\t\t\t></cx-vui-switcher>\n\t\t</div>\n\n    <cx-vui-component-wrapper\n        :label=\"__( 'Form Request Args', 'jet-form-builder' )\"\n        :wrapper-css=\"[ 'equalwidth' ]\"\n    />\n\n    <cx-vui-input\n        name=\"gfb_request_args_key\"\n        :wrapper-css=\"[ 'equalwidth', errors.gfb_request_args_key ? 'jfb-has-error' : '' ]\"\n    :size=\"'fullwidth'\"\n    :label=\"'Request key'\"\n    :description=\"'Unique form parameter (key)'\"\n    :value=\"storage.hasOwnProperty( 'gfb_request_args_key' ) ? storage.gfb_request_args_key : '1111'\"\n    :disabled=\"isLoading\"\n    @input=\"changeVal( 'gfb_request_args_key', $event )\"\n    />\n    <div v-if=\"errors.gfb_request_args_key\" class=\"jfb-field-error\">\n      {{ errors.gfb_request_args_key }}\n    </div>\n\n    <cx-vui-input\n        name=\"gfb_request_args_value\"\n        :wrapper-css=\"[ 'equalwidth', errors.gfb_request_args_value ? 'jfb-has-error' : '' ]\"\n    :size=\"'fullwidth'\"\n    :label=\"'Request value'\"\n    :description=\"'Unique form parameter (value)'\"\n    :value=\"storage.hasOwnProperty( 'gfb_request_args_value' ) ? storage.gfb_request_args_value : '2222'\"\n    :disabled=\"isLoading\"\n    @input=\"changeVal( 'gfb_request_args_value', $event )\"\n    />\n    <div v-if=\"errors.gfb_request_args_value\" class=\"jfb-field-error\">\n      {{ errors.gfb_request_args_value }}\n    </div>\n\t</div>\n</template>\n\n<script>\n\nimport {\n\thelp,\n\tlabel,\n} from './source';\n\n\nconst { SaveTabByAjax, i18n } = window.JetFBMixins;\n\nexport default {\n\tname: 'options-tab',\n\tprops: {\n\t\tincoming: {\n\t\t\ttype: Object,\n\t\t\tdefault: {},\n\t\t},\n\t},\n\tmixins: [ SaveTabByAjax, i18n ],\n\tdata() {\n\t\treturn {\n\t\t\tlabel, help,\n\t\t\tstorage: JSON.parse( JSON.stringify( this.incoming ) ),\n\t\t\tisLoading: false,\n\t\t\tloading: {},\n\t\t\tpendingSave: false,\n\t\t\terrors: {\n\t\t\t\tgfb_request_args_key: '',\n\t\t\t\tgfb_request_args_value: '',\n\t\t\t},\n\t\t\tselectOptions: [\n\t\t\t\t{ value: 'rest', label: ( 'Rest API' ) },\n\t\t\t\t{ value: 'admin_ajax', label: ( 'Admin Ajax' ) },\n\t\t\t\t{ value: 'self', label: ( 'Self' ) },\n\t\t\t],\n\t\t};\n\t},\n\tcomputed: {\n\t\tavailableRoles() {\n\t\t\treturn this.storage.available_roles || [];\n\t\t},\n\t\tselectedSelfPromotableRoles() {\n\t\t\treturn this.storage.self_promotable_roles || [];\n\t\t},\n\t},\n\tcreated() {\n\t\tjfbEventBus.$on( 'request-state', this.onChangeState.bind( this ) );\n\t},\n\tmethods: {\n\t\tgetSavableData() {\n\t\t\tconst {\n\t\t\t\tenable_dev_mode,\n\t\t\t\tclear_on_uninstall,\n\t\t\t\tform_records_access_capability,\n\t\t\t\tssr_validation_method,\n\t\t\t\tself_promotable_roles,\n\t\t\t\tdisable_next_button,\n\t\t\t\tscroll_on_next,\n\t\t\t\tauto_focus,\n\t\t\t\tgfb_request_args_key,\n\t\t\t\tgfb_request_args_value,\n\t\t\t} = this.storage;\n\n\t\t\treturn {\n\t\t\t\tenable_dev_mode,\n\t\t\t\tclear_on_uninstall,\n\t\t\t\tform_records_access_capability,\n\t\t\t\tssr_validation_method,\n\t\t\t\tself_promotable_roles: Array.isArray( self_promotable_roles ) && ! self_promotable_roles.length\n\t\t\t\t\t? [ '' ]\n\t\t\t\t\t: self_promotable_roles,\n\t\t\t\tdisable_next_button,\n\t\t\t\tscroll_on_next,\n\t\t\t\tauto_focus,\n\t\t\t\tgfb_request_args_key,\n\t\t\t\tgfb_request_args_value,\n\t\t\t};\n\t\t},\n\t\tgetRequestOnSave() {\n\t\t\treturn {\n\t\t\t\tdata: this.getSavableData(),\n\t\t\t};\n\t\t},\n\t\tonChangeState( { state, slug } ) {\n\t\t\tif ( 'options-tab' !== slug ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif ( 'end' === state ) {\n\t\t\t\tthis.loading = {};\n\t\t\t\tthis.$set( this, 'isLoading', false );\n\n\t\t\t\tif ( this.pendingSave ) {\n\t\t\t\t\tthis.pendingSave = false;\n\t\t\t\t\tthis.saveByAjax( this, this.$options.name );\n\t\t\t\t}\n\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.$set( this, 'isLoading', state === 'begin' );\n\t\t},\n\t\tvalidateField( name, value ) {\n\t\t\tif ( name !== 'gfb_request_args_key' && name !== 'gfb_request_args_value' ) {\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tconst val = String( value ?? '' );\n\t\t\tconst onlyDigits = /^\\d+$/.test( val );\n\n\t\t\tif ( onlyDigits ) {\n\t\t\t\tconst msg = this.__(\n\t\t\t\t\t'Must contain at least one letter (A–Z). Numbers only are not allowed.',\n\t\t\t\t\t'jet-form-builder'\n\t\t\t\t);\n\t\t\t\tthis.$set( this.errors, name, msg );\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tthis.$set( this.errors, name, '' );\n\t\t\treturn true;\n\t\t},\n\t\tchangeSelfPromotableRoles( value ) {\n\t\t\tif ( ! Array.isArray( value ) ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.changeVal( 'self_promotable_roles', value );\n\t\t},\n\t\tchangeVal( name, value ) {\n\t\t\tthis.$set( this.storage, name, value );\n\n\t\t\tif ( name === 'gfb_request_args_key' || name === 'gfb_request_args_value' ) {\n\t\t\t\tconst ok = this.validateField( name, value );\n\t\t\t\tif ( ! ok ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.$set( this.loading, name, true );\n\n\t\t\tif ( this.isLoading ) {\n\t\t\t\tthis.pendingSave = true;\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.saveByAjax( this, this.$options.name );\n\t\t},\n\t},\n};\n\n</script>\n\n\n<style scoped>\n.jfb-has-error .cx-vui-input,\n.jfb-has-error input {\n  border-color: #dc2626 !important;\n  outline: none;\n}\n\n.jfb-field-error {\n  margin: 6px 0 12px;\n  color: #dc2626;\n  font-size: 12px;\n  line-height: 1.4;\n  text-align:right;\n}\n</style>\n"],"sourceRoot":""}]);
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('cx-vui-switcher',{attrs:{"name":"enable_dev_mode","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.enable_dev_mode ? ((_vm.label.enable_dev_mode) + " (loading...)") : _vm.label.enable_dev_mode,"description":_vm.help.enable_dev_mode,"value":_vm.storage.hasOwnProperty( 'enable_dev_mode' ) ? _vm.storage.enable_dev_mode : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'enable_dev_mode', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"clear_on_uninstall","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.clear_on_uninstall ? ((_vm.label.clear_on_uninstall) + " (loading...)") : _vm.label.clear_on_uninstall,"description":_vm.help.clear_on_uninstall,"value":_vm.storage.hasOwnProperty( 'clear_on_uninstall' ) ? _vm.storage.clear_on_uninstall : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'clear_on_uninstall', $event )}}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"form_records_access_capability","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":_vm.loading.form_records_access_capability ? ((_vm.label.form_records_access_capability) + " (loading...)") : _vm.label.form_records_access_capability,"description":_vm.help.form_records_access_capability,"value":_vm.storage.hasOwnProperty( 'form_records_access_capability' ) ? _vm.storage.form_records_access_capability : 'manage_options',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'form_records_access_capability', $event )}}}),_vm._v(" "),_c('cx-vui-select',{attrs:{"name":"ssr_validation_method","wrapper-css":[ 'equalwidth' ],"size":'fullwidth',"label":_vm.loading.ssr_validation_method ? ((_vm.label.ssr_validation_method) + " (loading...)") : _vm.label.ssr_validation_method,"description":_vm.help.ssr_validation_method,"value":_vm.storage.hasOwnProperty( 'ssr_validation_method' ) ? _vm.storage.ssr_validation_method : 'rest',"options-list":_vm.selectOptions,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'ssr_validation_method', $event )}}}),_vm._v(" "),_c('cx-vui-f-select',{attrs:{"name":"self_promotable_roles","label":_vm.loading.self_promotable_roles ? ((_vm.label.self_promotable_roles) + " (loading...)") : _vm.label.self_promotable_roles,"description":_vm.help.self_promotable_roles,"value":_vm.selectedSelfPromotableRoles,"options-list":_vm.availableRoles,"multiple":true,"disabled":_vm.isLoading,"wrapper-css":[ 'equalwidth' ],"size":'fullwidth'},on:{"on-change":function($event){return _vm.changeSelfPromotableRoles( $event )}}}),_vm._v(" "),_c('cx-vui-component-wrapper',{attrs:{"label":_vm.__( 'Form Accessibility', 'jet-form-builder' ),"wrapper-css":[ 'equalwidth' ]}}),_vm._v(" "),_c('div',{staticClass:"cx-vui-inner-panel"},[_c('cx-vui-switcher',{attrs:{"name":"disable_next_button","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.disable_next_button ? ((_vm.label.disable_next_button) + " (loading...)") : _vm.label.disable_next_button,"description":_vm.help.disable_next_button,"value":_vm.storage.hasOwnProperty( 'disable_next_button' ) ? _vm.storage.disable_next_button : true,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'disable_next_button', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"scroll_on_next","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.scroll_on_next ? ((_vm.label.scroll_on_next) + " (loading...)") : _vm.label.scroll_on_next,"description":_vm.help.scroll_on_next,"value":_vm.storage.hasOwnProperty( 'scroll_on_next' ) ? _vm.storage.scroll_on_next : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'scroll_on_next', $event )}}}),_vm._v(" "),_c('cx-vui-switcher',{attrs:{"name":"auto_focus","wrapper-css":[ 'equalwidth' ],"label":_vm.loading.auto_focus ? ((_vm.label.auto_focus) + " (loading...)") : _vm.label.auto_focus,"description":_vm.help.auto_focus,"value":_vm.storage.hasOwnProperty( 'auto_focus' ) ? _vm.storage.auto_focus : false,"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'auto_focus', $event )}}})],1),_vm._v(" "),_c('cx-vui-component-wrapper',{attrs:{"label":_vm.__( 'Form Request Args', 'jet-form-builder' ),"wrapper-css":[ 'equalwidth' ]}}),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"gfb_request_args_key","wrapper-css":[ 'equalwidth', _vm.errors.gfb_request_args_key ? 'jfb-has-error' : '' ],"size":'fullwidth',"label":'Request key',"description":'Unique form parameter (key)',"value":_vm.storage.hasOwnProperty( 'gfb_request_args_key' ) ? _vm.storage.gfb_request_args_key : '1111',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'gfb_request_args_key', $event )}}}),_vm._v(" "),(_vm.errors.gfb_request_args_key)?_c('div',{staticClass:"jfb-field-error"},[_vm._v("\n      "+_vm._s(_vm.errors.gfb_request_args_key)+"\n    ")]):_vm._e(),_vm._v(" "),_c('cx-vui-input',{attrs:{"name":"gfb_request_args_value","wrapper-css":[ 'equalwidth', _vm.errors.gfb_request_args_value ? 'jfb-has-error' : '' ],"size":'fullwidth',"label":'Request value',"description":'Unique form parameter (value)',"value":_vm.storage.hasOwnProperty( 'gfb_request_args_value' ) ? _vm.storage.gfb_request_args_value : '2222',"disabled":_vm.isLoading},on:{"input":function($event){return _vm.changeVal( 'gfb_request_args_value', $event )}}}),_vm._v(" "),(_vm.errors.gfb_request_args_value)?_c('div',{staticClass:"jfb-field-error"},[_vm._v("\n      "+_vm._s(_vm.errors.gfb_request_args_value)+"\n    ")]):_vm._e()],1)}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lGQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM05BO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcktBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQVFBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXVCQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3R1cm5zdGlsZS52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Bob25lLWZpZWxkL1Bob25lRmllbGRUYWIudnVlIiwid2VicGFjazovL2pmYi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9zc3ItY2FsbGJhY2tzL1NzckNhbGxiYWNrc1RhYi52dWUiLCJ3ZWJwYWNrOi8vamZiL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2FkZG9ucy10YWJzLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvdHVybnN0aWxlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvZ2F0ZXdheXMvcGF5cGFsL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9BZGRvbnMvYWRkcmVzc0F1dG9jb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL2NvbnZlcnRraXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0FkZG9ucy9odWJzcG90LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9wcm9BZGRvbnMvbWFpbGVybGl0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvcHJvQWRkb25zL21vb3NlbmQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3Byb0dhdGV3YXlzL3N0cmlwZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvc291cmNlLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL2luZGV4LmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3BheW1lbnRzLWdhdGV3YXlzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9waG9uZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9waG9uZS1maWVsZC9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvc3NyLWNhbGxiYWNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9zc3ItY2FsbGJhY2tzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvdXNlci1qb3VybmV5L3NvdXJjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8xYTQyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWU/Mzc0MSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvSXNQUk9JY29uLnZ1ZT8wZTkxIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWU/OTRkNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9zc3ItY2FsbGJhY2tzL1NzckNhbGxiYWNrc1RhYi52dWU/OGU5MSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlP2Q1M2QiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamZiLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9mcmllbmRseUNhcHRjaGEudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvaENhcHRjaGEvaENhcHRjaGEudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS90dXJuc3RpbGUudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3Mvc2lkZWJhci9TZXR0aW5nc1NpZGVCYXIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL21haWxjaGltcC9NYWlsQ2hpbXBUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGhvbmUtZmllbGQvUGhvbmVGaWVsZFRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvc3NyLWNhbGxiYWNrcy9Tc3JDYWxsYmFja3NUYWIudnVlIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/MmNmNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8xYWQzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9mcmllbmRseUNhcHRjaGEudnVlPzg5OTIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZ29vZ2xlL3JlQ0FQVENIQXYzLnZ1ZT8wOWMyIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZT9mMWEzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS90dXJuc3RpbGUudnVlPzdhYWUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlPzI1M2IiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZT8yOTY0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWU/ZGY2MCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWU/ZDQ3YyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZT81MmNkIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWU/YWFhMCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZT9kOWYwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Bob25lLWZpZWxkL1Bob25lRmllbGRUYWIudnVlP2IzNWMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvc3NyLWNhbGxiYWNrcy9Tc3JDYWxsYmFja3NUYWIudnVlP2Q2OTIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvdXNlci1qb3VybmV5L1VzZXJKb3VybmV5VGFiLnZ1ZT9jMDczIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlP2RkZTQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWU/MTBhYSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9mcmllbmRseUNhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhLnZ1ZT9lMGE5Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2dvb2dsZS9yZUNBUFRDSEF2My52dWU/MGZiNSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9oQ2FwdGNoYS9oQ2FwdGNoYS52dWU/YzBkZCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS90dXJuc3RpbGUvdHVybnN0aWxlLnZ1ZT80MGQ1Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZT81NmJiIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWU/YzA3YyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9jYXB0Y2hhL0NhcHRjaGFUYWIudnVlPzc4MzUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvZ2V0cmVzcG9uc2UvR2V0UmVzcG9uc2VUYWIudnVlP2RkMGMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvbWFpbGNoaW1wL01haWxDaGltcFRhYi52dWU/YTM5MiIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlPzA1NjUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWU/YzBlNyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9waG9uZS1maWVsZC9QaG9uZUZpZWxkVGFiLnZ1ZT83ZTFjIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Nzci1jYWxsYmFja3MvU3NyQ2FsbGJhY2tzVGFiLnZ1ZT83OTk5Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWU/ZGFjNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT8wZWNhIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWU/ZGM0YyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvSXNQUk9JY29uLnZ1ZT9lYTE0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWU/NjhmMyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9zc3ItY2FsbGJhY2tzL1NzckNhbGxiYWNrc1RhYi52dWU/M2FiMSIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlPzUwYjkiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWU/ZGJlNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvU2V0dGluZ3NQYWdlLnZ1ZT9kNzIwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS9mcmllbmRseUNhcHRjaGEudnVlPzg2NzciLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZ29vZ2xlL3JlQ0FQVENIQXYzLnZ1ZT8yODI4Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL2hDYXB0Y2hhL2hDYXB0Y2hhLnZ1ZT9jYjE0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS90dXJuc3RpbGUudnVlPzFmOWMiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2dhdGV3YXlzL3BheXBhbC9QYXlwYWxUYWIudnVlP2EyMDIiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZT83OTNmIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2NhcHRjaGEvQ2FwdGNoYVRhYi52dWU/MDUzNyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9nZXRyZXNwb25zZS9HZXRSZXNwb25zZVRhYi52dWU/YWExYyIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZT9jMDNiIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL29wdGlvbnMvT3B0aW9uc1RhYi52dWU/MWYxNCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9wYXltZW50cy1nYXRld2F5cy9QYXltZW50c0dhdGV3YXlzLnZ1ZT83MDY0Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Bob25lLWZpZWxkL1Bob25lRmllbGRUYWIudnVlP2QxNjAiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvc3NyLWNhbGxiYWNrcy9Tc3JDYWxsYmFja3NUYWIudnVlP2I2MTQiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvdXNlci1qb3VybmV5L1VzZXJKb3VybmV5VGFiLnZ1ZT8yYWFmIiwid2VicGFjazovL2pmYi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9TZXR0aW5nc1BhZ2UudnVlPzY4MjUiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZT9jMmEwIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9Jc1BST0ljb24udnVlPzI1M2UiLCJ3ZWJwYWNrOi8vamZiLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZT9iMDU3Iiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Nzci1jYWxsYmFja3MvU3NyQ2FsbGJhY2tzVGFiLnZ1ZT9lNzRmIiwid2VicGFjazovL2pmYi8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWU/NmMyMCIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8c3Bhbj57eyBfXyggJ1BybycsICdqZXQtZm9ybS1idWlsZGVyJyApIH19PC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IHsgaTE4biB9ID0gSmV0RkJNaXhpbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ0lzUFJPSWNvbicsXG5cdG1peGluczogWyBpMThuIF0sXG5cdHByb3BzOiB7XG5cdFx0aXNBY3RpdmU6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHR9LFxuXHR9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuc3BhbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XG5cdHBhZGRpbmc6IDAuMWVtIDAuM2VtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRsZXR0ZXItc3BhY2luZzogMDtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuXHQ8Rm9ybUJ1aWxkZXJQYWdlXG5cdFx0OnRpdGxlPVwiX18oICdKZXRGb3JtQnVpbGRlciBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJqZmItY29udGVudFwiPlxuXHRcdFx0PEFsZXJ0c0xpc3QvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImpmYi1jb250ZW50LW1haW5cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImN4LXZ1aS1wYW5lbFwiPlxuXHRcdFx0XHRcdDxDeFZ1aVRhYnNcblx0XHRcdFx0XHRcdDppbi1wYW5lbD1cImZhbHNlXCJcblx0XHRcdFx0XHRcdDp2YWx1ZT1cImFjdGl2ZVRhYlNsdWdcIlxuXHRcdFx0XHRcdFx0bGF5b3V0PVwidmVydGljYWxcIlxuXHRcdFx0XHRcdFx0QGlucHV0PVwib25DaGFuZ2VBY3RpdmVUYWJcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxDeFZ1aVRhYnNQYW5lbFxuXHRcdFx0XHRcdFx0XHR2LWZvcj1cIiggeyBkaXNwbGF5QnV0dG9uID0gdHJ1ZSwgLi4udGFiIH0sIGluZGV4ICkgaW4gdGFic1wiXG5cdFx0XHRcdFx0XHRcdDpuYW1lPVwidGFiLmNvbXBvbmVudC5uYW1lXCJcblx0XHRcdFx0XHRcdFx0OmxhYmVsPVwidGFiLnRpdGxlXCJcblx0XHRcdFx0XHRcdFx0OmtleT1cInRhYi5jb21wb25lbnQubmFtZVwiXG5cdFx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cInRhYi5kaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdDppY29uPVwidGFiLmljb25cIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8dGVtcGxhdGUgI2RlZmF1bHQgdi1pZj1cInRhYi5jb21wb25lbnQucmVuZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGtlZXAtYWxpdmU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29tcG9uZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHYtYmluZDppcz1cInRhYi5jb21wb25lbnRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6aW5jb21pbmc9XCJnZXRJbmNvbWluZyggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6aW5uZXItc2x1Z3M9XCJhY3RpdmVUYWJJbm5lclNsdWdzIHx8IFtdXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPVwidGFiQ29tcG9uZW50c1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwva2VlcC1hbGl2ZT5cblx0XHRcdFx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0di1pZj1cImRpc3BsYXlCdXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0XHRcdFx0XHRcdDpsb2FkaW5nPVwibG9hZGluZ1RhYlsgdGFiLmNvbXBvbmVudC5uYW1lIF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwib25TYXZlVGFiKCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlNhdmU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvQ3hWdWlUYWJzUGFuZWw+XG5cdFx0XHRcdFx0PC9DeFZ1aVRhYnM+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8U2V0dGluZ3NTaWRlQmFyLz5cblx0XHQ8L2Rpdj5cblx0PC9Gb3JtQnVpbGRlclBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgY2FwdGNoYSBmcm9tICcuL3RhYnMvY2FwdGNoYSc7XG5pbXBvcnQgKiBhcyBtYWlsY2hpbXAgZnJvbSAnLi90YWJzL21haWxjaGltcCc7XG5pbXBvcnQgKiBhcyBnZXRSZXNwb25zZSBmcm9tICcuL3RhYnMvZ2V0cmVzcG9uc2UnO1xuaW1wb3J0ICogYXMgcGF5bWVudEdhdGV3YXlzIGZyb20gJy4vdGFicy9wYXltZW50cy1nYXRld2F5cyc7XG5pbXBvcnQgKiBhcyBvcHRpb25zIGZyb20gJy4vdGFicy9vcHRpb25zJztcbmltcG9ydCAqIGFzIHVzZXJKb3VybmV5IGZyb20gJy4vdGFicy91c2VyLWpvdXJuZXknO1xuaW1wb3J0ICogYXMgcGhvbmVGaWVsZCBmcm9tICcuL3RhYnMvcGhvbmUtZmllbGQnO1xuaW1wb3J0ICogYXMgc3NyQ2FsbGJhY2tzIGZyb20gJy4vdGFicy9zc3ItY2FsbGJhY2tzJztcbmltcG9ydCBTZXR0aW5nc1NpZGVCYXIgZnJvbSAnLi9zaWRlYmFyL1NldHRpbmdzU2lkZUJhcic7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzLCBkb0FjdGlvbiB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IHtcblx0U2F2ZVRhYkJ5QWpheCxcblx0R2V0SW5jb21pbmcsXG5cdGkxOG4sXG59ID0gd2luZG93LkpldEZCTWl4aW5zO1xuXG5jb25zdCB7XG5cdEN4VnVpVGFic1BhbmVsLFxuXHRDeFZ1aVRhYnMsXG5cdEFsZXJ0c0xpc3QsXG5cdEZvcm1CdWlsZGVyUGFnZSxcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbndpbmRvdy5qZmJFdmVudEJ1cyA9IHdpbmRvdy5qZmJFdmVudEJ1cyB8fCBuZXcgVnVlKCB7fSApO1xuXG5jb25zdCBzZXR0aW5nVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5zZXR0aW5ncy1wYWdlLnRhYnMnLCBbXG5cdG9wdGlvbnMsXG5cdHVzZXJKb3VybmV5LFxuXHRwYXltZW50R2F0ZXdheXMsXG5cdGNhcHRjaGEsXG5cdHBob25lRmllbGQsXG5cdG1haWxjaGltcCxcblx0Z2V0UmVzcG9uc2UsXG5cdHNzckNhbGxiYWNrcyxcbl0gKTtcblxuY29uc3QgY2hhbmdlSGFzaCA9IGhhc2ggPT4ge1xuXHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIGhhc2g7XG59O1xuXG5jb25zdCBnZXRBY3RpdmVUYWIgPSAoKSA9PiB7XG5cdGNvbnN0IGZpcnN0ID0gc2V0dGluZ1RhYnNbIDAgXS5jb21wb25lbnQubmFtZTtcblxuXHRpZiAoICEgd2luZG93LmxvY2F0aW9uLmhhc2ggKSB7XG5cdFx0Y2hhbmdlSGFzaCggZmlyc3QgKTtcblxuXHRcdHJldHVybiBbIGZpcnN0IF07XG5cdH1cblx0bGV0IFsgaGFzaCwgLi4ub3RoZXJzIF0gPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCAnIycsICcnICkuc3BsaXQoICdfXycgKTtcblx0bGV0IHRhYiA9IHNldHRpbmdUYWJzLmZpbmQoIHRhYiA9PiB0YWI/LmNvbXBvbmVudD8ubmFtZSA9PT0gaGFzaCApO1xuXG5cdGlmICggISB0YWIgKSB7XG5cdFx0Y2hhbmdlSGFzaCggZmlyc3QgKTtcblxuXHRcdHJldHVybiBbIGZpcnN0IF07XG5cdH1cblx0Y2hhbmdlSGFzaCggWyB0YWIuY29tcG9uZW50Lm5hbWUsIC4uLm90aGVycyBdLmpvaW4oICdfXycgKSApO1xuXG5cdHJldHVybiBbIHRhYi5jb21wb25lbnQubmFtZSwgb3RoZXJzIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdqZmItc2V0dGluZ3MnLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0QWxlcnRzTGlzdCxcblx0XHRDeFZ1aVRhYnNQYW5lbCxcblx0XHRDeFZ1aVRhYnMsXG5cdFx0U2V0dGluZ3NTaWRlQmFyLFxuXHRcdEZvcm1CdWlsZGVyUGFnZSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRjb25zdCBbIHRhYlNsdWcsIG90aGVycyBdID0gZ2V0QWN0aXZlVGFiKCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGl2ZVRhYlNsdWc6IHRhYlNsdWcsXG5cdFx0XHRhY3RpdmVUYWJJbm5lclNsdWdzOiBvdGhlcnMsXG5cdFx0XHR0YWJzOiBzZXR0aW5nVGFicyxcblx0XHRcdGxvYWRpbmdUYWI6IHt9LFxuXHRcdFx0aXNBY3RpdmVQcm86IGZhbHNlLFxuXHRcdH07XG5cdH0sXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBHZXRJbmNvbWluZywgaTE4biBdLFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuaXNBY3RpdmVQcm8gPSB0aGlzLmdldEluY29taW5nKCAnaXNfYWN0aXZlJyApO1xuXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHByb3BzID0+IHtcblx0XHRcdGNvbnN0IHsgc3RhdGUsIHNsdWcgfSA9IHByb3BzO1xuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmdUYWIsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSApO1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ2FsZXJ0LWNsaWNrLXRoYW5rcycsICggeyBzZWxmIH0gKSA9PiB7XG5cdFx0XHRzZWxmLmNsb3NlQWxlcnQoKTtcblx0XHR9ICk7XG5cdFx0amZiRXZlbnRCdXMuJG9uKCAnYWxlcnQtY2xpY2stY2hlY2snLCAoIHsgc2VsZiB9ICkgPT4ge1xuXHRcdFx0c2VsZi5jbG9zZUFsZXJ0KCk7XG5cdFx0fSApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0b25DaGFuZ2VBY3RpdmVUYWIoIGFjdGl2ZVRhYiApIHtcblx0XHRcdGNvbnN0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKCBkb2N1bWVudC5VUkwgKTtcblx0XHRcdGN1cnJlbnRVcmwuaGFzaCA9ICcjJyArIGFjdGl2ZVRhYjtcblxuXHRcdFx0ZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGN1cnJlbnRVcmwuaHJlZjtcblxuXHRcdFx0amZiRXZlbnRCdXMuJGVtaXQoICdjaGFuZ2UtdGFiJywgeyBzbHVnOiBhY3RpdmVUYWIgfSApO1xuXHRcdH0sXG5cdFx0b25TYXZlVGFiKCBpbmRleFRhYiwgdGFiU2x1ZyApIHtcblx0XHRcdGNvbnN0IGN1cnJlbnRUYWIgPSB0aGlzLiRyZWZzLnRhYkNvbXBvbmVudHNbIGluZGV4VGFiIF07XG5cblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggY3VycmVudFRhYiwgdGFiU2x1ZyApO1xuXHRcdH0sXG5cdH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmpmYi1jb250ZW50IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDJlbTtcblx0bWFyZ2luLXRvcDogMWVtO1xuXG5cdCYtbWFpbiB7XG5cdFx0ZmxleDogMTtcblx0fVxufVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG5cdDxzZWN0aW9uPlxuXHRcdDxTaW1wbGVXcmFwcGVyQ29tcG9uZW50IGVsZW1lbnQtaWQ9XCJmcmllbmRseV9rZXlcIj5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgbGFiZWwua2V5IH19PC90ZW1wbGF0ZT5cblx0XHRcdDx0ZW1wbGF0ZSAjZGVzY3JpcHRpb24+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHR7eyBfXyhcblx0XHRcdFx0XHQnSXQgY2FuIGJlIGZvdW5kIG9uIHRoZSBwYWdlIGxpc3RpbmcgeW91ciBBcHBsaWNhdGlvbnMuIE9yIGZvbGxvdyB0aGlzJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgKyAnICcgfX1cblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RvY3MuZnJpZW5kbHljYXB0Y2hhLmNvbS8jL2luc3RhbGxhdGlvbj9pZD1fMS1nZW5lcmF0aW5nLWEtc2l0ZWtleVwiPlxuXHRcdFx0XHRcdFx0e3sgX18oICdndWlkZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XG5cdFx0XHRcdFx0PC9FeHRlcm5hbExpbms+XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHQ8dGVtcGxhdGUgI2RlZmF1bHQ+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGlkPVwiZnJpZW5kbHlfa2V5XCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdDwvU2ltcGxlV3JhcHBlckNvbXBvbmVudD5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHRlbGVtZW50LWlkPVwiZnJpZW5kbHlfc2VjcmV0XCJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJfXyhcblx0XHRcdFx0J0l0IGNhbiBiZSBmb3VuZCBvbiB0aGUgcGFnZSBsaXN0aW5nIHlvdXIgQVBJIGtleXMuJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGxhYmVsLFxufSBmcm9tICcuL3NvdXJjZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgU2ltcGxlV3JhcHBlckNvbXBvbmVudCxcblx0ICAgICAgRXh0ZXJuYWxMaW5rLFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICBpMThuLFxuICAgICAgfSA9IEpldEZCTWl4aW5zO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdmcmllbmRseScsXG5cdGNvbXBvbmVudHM6IHtcblx0XHRTaW1wbGVXcmFwcGVyQ29tcG9uZW50LFxuXHRcdEV4dGVybmFsTGluayxcblx0fSxcblx0bWl4aW5zOiBbIGkxOG4gXSxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLFxuXHRcdFx0c3RvcmFnZToge30sXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufTtcblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5rZXlcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdDxjeC12dWktaW5wdXRcblx0XHRcdDpsYWJlbD1cImxhYmVsLnNlY3JldFwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uuc2VjcmV0XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHQ6bWluPVwiMFwiXG5cdFx0XHQ6bWF4PVwiMVwiXG5cdFx0XHQ6c3RlcD1cIjAuMVwiXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC50aHJlc2hvbGRcIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC50aHJlc2hvbGRcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnRocmVzaG9sZFwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj57eyBoZWxwLmFwaVByZWYgfX0gPGEgOmhyZWY9XCJoZWxwLmFwaUxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBoZWxwLmFwaUxpbmtMYWJlbCB9fTwvYT5cblx0XHQ8L3A+XG5cdDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsLFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnZ29vZ2xlJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0c3RvcmFnZToge30sXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxzZWN0aW9uPlxuXHRcdDxTaW1wbGVXcmFwcGVyQ29tcG9uZW50IGVsZW1lbnQtaWQ9XCJoY2FwdGNoYV9rZXlcIj5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgbGFiZWwua2V5IH19PC90ZW1wbGF0ZT5cblx0XHRcdDx0ZW1wbGF0ZSAjZGVzY3JpcHRpb24+XG5cdFx0XHRcdDxwIGNsYXNzPVwiZmItZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHR7eyBfXyhcblx0XHRcdFx0XHQnWW91IGNhbiBmaW5kIGl0IG9uIHRoaXMgcGFnZSBpbiB0aGUgZmlyc3QgY29sdW1uIG9mIFNpdGVrZXkuJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgKyAnICcgfX1cblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5oY2FwdGNoYS5jb20vc2l0ZXNcIj5cblx0XHRcdFx0XHRcdHt7IF9fKCAnR28gdG8gdGhlIGRhc2hib2FyZCBvZiBzaXRlcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XG5cdFx0XHRcdFx0PC9FeHRlcm5hbExpbms+XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHQ8dGVtcGxhdGUgI2RlZmF1bHQ+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGlkPVwiaGNhcHRjaGFfa2V5XCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLmtleVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdDwvU2ltcGxlV3JhcHBlckNvbXBvbmVudD5cblx0XHQ8U2ltcGxlV3JhcHBlckNvbXBvbmVudCBlbGVtZW50LWlkPVwiaGNhcHRjaGFfc2VjcmV0XCI+XG5cdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPnt7IGxhYmVsLnNlY3JldCB9fTwvdGVtcGxhdGU+XG5cdFx0XHQ8dGVtcGxhdGUgI2Rlc2NyaXB0aW9uPlxuXHRcdFx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0e3sgX18oXG5cdFx0XHRcdFx0YFlvdSBjYW4gZmluZCBpdCBvbiB0aGUgc2V0dGluZ3MgcGFnZSxcbnRoaXMgd2lsbCBiZSB0aGUgZmlyc3QgZmllbGQuYCxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgKyAnICcgfX1cblx0XHRcdFx0XHQ8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5oY2FwdGNoYS5jb20vc2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdHt7IF9fKCAnR28gdG8gdGhlIFNldHRpbmdzIHBhZ2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fVxuXHRcdFx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0PHRlbXBsYXRlICNkZWZhdWx0PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRpZD1cImhjYXB0Y2hhX3NlY3JldFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGNsYXNzPVwiY3gtdnVpLWlucHV0IHNpemUtZnVsbHdpZHRoXCJcblx0XHRcdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC90ZW1wbGF0ZT5cblx0XHQ8L1NpbXBsZVdyYXBwZXJDb21wb25lbnQ+XG5cdDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGxhYmVsLFxufSBmcm9tICcuL3NvdXJjZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgU2ltcGxlV3JhcHBlckNvbXBvbmVudCxcblx0ICAgICAgRXh0ZXJuYWxMaW5rLFxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHQgICAgICBpMThuLFxuICAgICAgfSA9IEpldEZCTWl4aW5zO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdoY2FwdGNoYScsXG5cdGNvbXBvbmVudHM6IHtcblx0XHRTaW1wbGVXcmFwcGVyQ29tcG9uZW50LFxuXHRcdEV4dGVybmFsTGluayxcblx0fSxcblx0bWl4aW5zOiBbIGkxOG4gXSxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogWyBPYmplY3QsIEFycmF5IF0sXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLFxuXHRcdFx0c3RvcmFnZToge30sXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRpZiAoICFPYmplY3Qua2V5cyggdGhpcy5pbmNvbWluZyApPy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufTtcblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8c2VjdGlvbj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHRlbGVtZW50LWlkPVwidHVybnN0aWxlX2tleVwiXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5rZXlcIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiX18oXG5cdFx0XHRcdCdSZWFkIHRoZSBoaW50IHRvIHRoZSBTZWNyZXQgS2V5IGZpZWxkJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0di1tb2RlbD1cInN0b3JhZ2Uua2V5XCJcblx0XHQ+PC9jeC12dWktaW5wdXQ+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0ZWxlbWVudC1pZD1cInR1cm5zdGlsZV9zZWNyZXRcIlxuXHRcdFx0OmxhYmVsPVwibGFiZWwuc2VjcmV0XCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cIl9fKFxuXHRcdFx0XHQnWW91IGNhbiBmaW5kIGJvdGgga2V5cyBvbiB5b3VyIFR1cm5zdGlsZSBTaXRlIHNldHRpbmdzIHBhZ2UnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5zZWNyZXRcIlxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cblx0XHQ8cCBjbGFzcz1cImZiLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHR7eyBfXyggJ0RpZG5cXCd0IGZpbmQgaXQ/IEhlcmUgaXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyB9fVxuXHRcdFx0PEV4dGVybmFsTGlua1xuXHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmNsb3VkZmxhcmUuY29tL3R1cm5zdGlsZS9nZXQtc3RhcnRlZC8jZ2V0LWEtc2l0ZWtleS1hbmQtc2VjcmV0LWtleVwiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IF9fKCAnYSBtb3JlIGRldGFpbGVkIGRlc2NyaXB0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX1cblx0XHRcdDwvRXh0ZXJuYWxMaW5rPlxuXHRcdDwvcD5cblx0PC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHtcblx0bGFiZWwsXG59IGZyb20gJy4vc291cmNlJztcblxuY29uc3Qge1xuXHQgICAgICBpMThuLFxuICAgICAgfSA9IEpldEZCTWl4aW5zO1xuXG5jb25zdCB7XG5cdCAgICAgIEV4dGVybmFsTGluayxcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3R1cm5zdGlsZScsXG5cdG1peGluczogW1xuXHRcdGkxOG4sXG5cdF0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRFeHRlcm5hbExpbmssXG5cdH0sXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IFsgT2JqZWN0LCBBcnJheSBdLFxuXHRcdFx0ZGVmYXVsdCgpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCxcblx0XHRcdHN0b3JhZ2U6IHt9LFxuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0aWYgKCAhT2JqZWN0LmtleXMoIHRoaXMuaW5jb21pbmcgKT8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcbn07XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PHNlY3Rpb24+XG5cdFx0PGN4LXZ1aS1pbnB1dFxuXHRcdFx0OmxhYmVsPVwibGFiZWwuY2xpZW50X2lkXCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHR2LW1vZGVsPVwic3RvcmFnZS5jbGllbnRfaWRcIlxuXHRcdD48L2N4LXZ1aS1pbnB1dD5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5zZWNyZXRcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdHYtbW9kZWw9XCJzdG9yYWdlLnNlY3JldFwiXG5cdFx0PjwvY3gtdnVpLWlucHV0PlxuXHQ8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbCxcbn0gZnJvbSBcIi4vc291cmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3BheXBhbCcsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQoKSB7XG5cdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRzdG9yYWdlOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuc3RvcmFnZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7IC4uLnRoaXMuc3RvcmFnZSB9LFxuXHRcdFx0fTtcblx0XHR9LFxuXHR9LFxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxTaWRlQmFyQm94ZXM+XG5cdFx0PHRlbXBsYXRlICNpY29uLWhlbHA+XG5cdFx0XHQ8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIyMVwiIHZpZXdCb3g9XCIwIDAgMTQgMjFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRkPVwiTTUuMjUgMjFIOC43NVYxNy41SDUuMjVWMjFaTTcgMEMzLjEzMjUgMCAwIDMuMTMyNSAwIDdIMy41QzMuNSA1LjA3NSA1LjA3NSAzLjUgNyAzLjVDOC45MjUgMy41IDEwLjUgNS4wNzUgMTAuNSA3QzEwLjUgMTAuNSA1LjI1IDEwLjA2MjUgNS4yNSAxNS43NUg4Ljc1QzguNzUgMTEuODEyNSAxNCAxMS4zNzUgMTQgN0MxNCAzLjEzMjUgMTAuODY3NSAwIDcgMFpcIlxuXHRcdFx0XHRcdGZpbGw9XCIjN0I3RTgxXCI+PC9wYXRoPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC90ZW1wbGF0ZT5cblx0XHQ8dGVtcGxhdGUgI2NvbnRlbnQtaGVscD1cImJveFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmtcIj5cblx0XHRcdFx0PGEgOmhyZWY9XCJib3gubGlua19rbm93bGVkZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1pY29uXCI+XG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTQgMTZcIiBmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRcdFx0ZD1cIk0xMy40NTggMTEuMjU1MkwxMy40NTggMS40MTE1QzEzLjQ1OCAxLjAzMDY0IDEzLjEzNTcgMC43MDgzNzQgMTIuNzU0OSAwLjcwODM3NEwzLjE0NTUxIDAuNzA4Mzc0QzEuNTkyNzcgMC43MDgzNzQgMC4zMzMwMDggMS45NjgxNCAwLjMzMzAwOCAzLjUyMDg3TDAuMzMzMDA4IDEyLjg5NTlDMC4zMzMwMDggMTQuNDQ4NiAxLjU5Mjc3IDE1LjcwODQgMy4xNDU1MSAxNS43MDg0TDEyLjc1NDkgMTUuNzA4NEMxMy4xMzU3IDE1LjcwODQgMTMuNDU4IDE1LjQxNTQgMTMuNDU4IDE1LjAwNTJMMTMuNDU4IDE0LjUzNjVDMTMuNDU4IDE0LjMzMTQgMTMuMzQwOCAxNC4xMjYzIDEzLjE5NDMgMTQuMDA5MkMxMy4wNDc5IDEzLjU0MDQgMTMuMDQ3OSAxMi4yNTEzIDEzLjE5NDMgMTEuODExOUMxMy4zNDA4IDExLjY5NDcgMTMuNDU4IDExLjQ4OTYgMTMuNDU4IDExLjI1NTJaTTQuMDgzMDEgNC42MzQxNkM0LjA4MzAxIDQuNTQ2MjYgNC4xNDE2IDQuNDU4MzcgNC4yNTg3OSA0LjQ1ODM3TDEwLjQ2OTcgNC40NTgzN0MxMC41NTc2IDQuNDU4MzcgMTAuNjQ1NSA0LjU0NjI2IDEwLjY0NTUgNC42MzQxNkwxMC42NDU1IDUuMjIwMDlDMTAuNjQ1NSA1LjMzNzI4IDEwLjU1NzYgNS4zOTU4NyAxMC40Njk3IDUuMzk1ODdMNC4yNTg3OSA1LjM5NTg3QzQuMTQxNiA1LjM5NTg3IDQuMDgzMDEgNS4zMzcyOCA0LjA4MzAxIDUuMjIwMDlMNC4wODMwMSA0LjYzNDE2Wk00LjA4MzAxIDYuNTA5MTZDNC4wODMwMSA2LjQyMTI3IDQuMTQxNiA2LjMzMzM3IDQuMjU4NzkgNi4zMzMzN0wxMC40Njk3IDYuMzMzMzdDMTAuNTU3NiA2LjMzMzM3IDEwLjY0NTUgNi40MjEyNyAxMC42NDU1IDYuNTA5MTZMMTAuNjQ1NSA3LjA5NTA5QzEwLjY0NTUgNy4yMTIyOCAxMC41NTc2IDcuMjcwODcgMTAuNDY5NyA3LjI3MDg3TDQuMjU4NzkgNy4yNzA4N0M0LjE0MTYgNy4yNzA4NyA0LjA4MzAxIDcuMjEyMjggNC4wODMwMSA3LjA5NTA5TDQuMDgzMDEgNi41MDkxNlpNMTEuNDk1MSAxMy44MzM0TDMuMTQ1NTEgMTMuODMzNEMyLjYxODE2IDEzLjgzMzQgMi4yMDgwMSAxMy40MjMyIDIuMjA4MDEgMTIuODk1OUMyLjIwODAxIDEyLjM5NzggMi42MTgxNiAxMS45NTg0IDMuMTQ1NTEgMTEuOTU4NEwxMS40OTUxIDExLjk1ODRDMTEuNDM2NSAxMi40ODU3IDExLjQzNjUgMTMuMzM1MyAxMS40OTUxIDEzLjgzMzRaXCJcblx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCI+e3sgYm94LmxhYmVsX2tub3dsZWRnZSB9fTwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rXCI+XG5cdFx0XHRcdDxhIDpocmVmPVwiYm94LmxpbmtfY29tbXVuaXR5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmstaWNvblwiPlxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHQgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdGQ9XCJNMTUuNTkxMyA4LjA0NTY0QzE1LjU5MTMgMy44NzcyOCAxMi4yMTQgMC41IDguMDQ1NjQgMC41QzMuODc3MjggMC41IDAuNSAzLjg3NzI4IDAuNSA4LjA0NTY0QzAuNSAxMS44MTg1IDMuMjM4MzQgMTQuOTUyMyA2Ljg1OTAzIDE1LjVMNi44NTkwMyAxMC4yMzYzTDQuOTQyMTkgMTAuMjM2M0w0Ljk0MjE5IDguMDQ1NjRMNi44NTkwMyA4LjA0NTY0TDYuODU5MDMgNi40MDI2NEM2Ljg1OTAzIDQuNTE2MjMgNy45ODQ3OSAzLjQ1MTMyIDkuNjg4NjQgMy40NTEzMkMxMC41NDA2IDMuNDUxMzIgMTEuMzkyNSAzLjYwMzQ1IDExLjM5MjUgMy42MDM0NUwxMS4zOTI1IDUuNDU5NDNMMTAuNDQ5MyA1LjQ1OTQzQzkuNTA2MDkgNS40NTk0MyA5LjIwMTgzIDYuMDM3NTMgOS4yMDE4MyA2LjY0NjA0TDkuMjAxODMgOC4wNDU2NEwxMS4zMDEyIDguMDQ1NjRMMTAuOTY2NSAxMC4yMzYzTDkuMjAxODMgMTAuMjM2M0w5LjIwMTgzIDE1LjVDMTIuODIyNSAxNC45NTIzIDE1LjU5MTMgMTEuODE4NSAxNS41OTEzIDguMDQ1NjRaXCJcblx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiIzAwN0NCQVwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWxhYmVsXCI+e3sgYm94LmxhYmVsX2NvbW11bml0eSB9fTwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rXCI+XG5cdFx0XHRcdDxhIDpocmVmPVwiYm94Lmxpbmtfc3VwcG9ydFwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWxwLWNlbnRlci1saW5rLWljb25cIj5cblx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxNSAxOFwiIGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTcuNTgzMzMgMC42NjY2ODdDMy42NzUgMC42NjY2ODcgMC41IDMuODQxNjkgMC41IDcuNzUwMDJDMC41IDExLjY1ODQgMy42NzUgMTQuODMzNCA3LjU4MzMzIDE0LjgzMzRIOFYxNy4zMzM0QzEyLjA1IDE1LjM4MzQgMTQuNjY2NyAxMS41IDE0LjY2NjcgNy43NTAwMkMxNC42NjY3IDMuODQxNjkgMTEuNDkxNyAwLjY2NjY4NyA3LjU4MzMzIDAuNjY2Njg3Wk04LjQxNjY3IDEyLjc1SDYuNzVWMTEuMDgzNEg4LjQxNjY3VjEyLjc1Wk04LjQxNjY3IDkuODMzMzVINi43NUM2Ljc1IDcuMTI1MDIgOS4yNSA3LjMzMzM1IDkuMjUgNS42NjY2OUM5LjI1IDQuNzUwMDIgOC41IDQuMDAwMDIgNy41ODMzMyA0LjAwMDAyQzYuNjY2NjcgNC4wMDAwMiA1LjkxNjY3IDQuNzUwMDIgNS45MTY2NyA1LjY2NjY5SDQuMjVDNC4yNSAzLjgyNTAyIDUuNzQxNjcgMi4zMzMzNSA3LjU4MzMzIDIuMzMzMzVDOS40MjUgMi4zMzMzNSAxMC45MTY3IDMuODI1MDIgMTAuOTE2NyA1LjY2NjY5QzEwLjkxNjcgNy43NTAwMiA4LjQxNjY3IDcuOTU4MzUgOC40MTY2NyA5LjgzMzM1WlwiXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiMwMDdDQkFcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1sYWJlbFwiPnt7IGJveC5sYWJlbF9zdXBwb3J0IH19PC9kaXY+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImhlbHAtY2VudGVyLWxpbmtcIj5cblx0XHRcdFx0PGEgOmhyZWY9XCJib3gubGlua19naXRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1pY29uXCI+XG5cdFx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCJcblx0XHRcdFx0XHRcdFx0XHQgIGQ9XCJNNy45NzYgMEM1Ljg2MDcxIDAuMDAwMjY1MTU2IDMuODMyMTQgMC44NDA2NzYgMi4zMzY0MSAyLjMzNjQxQzAuODQwNjc2IDMuODMyMTQgMC4wMDAyNjUxNTYgNS44NjA3MSAwIDcuOTc2QzAgMTEuNDk4IDIuMyAxNC40ODMgNS40MzEgMTUuNTZDNS44MjMgMTUuNjA5IDUuOTY5IDE1LjM2NCA1Ljk2OSAxNS4xNjhWMTMuNzk4QzMuNzY4IDE0LjI4OCAzLjI3OSAxMi43MjIgMy4yNzkgMTIuNzIyQzIuOTM2IDExLjc5MiAyLjM5OCAxMS41NDcgMi4zOTggMTEuNTQ3QzEuNjY0IDExLjA1OCAyLjQ0NiAxMS4wNTggMi40NDYgMTEuMDU4QzMuMjI5IDExLjEwNyAzLjY3IDExLjg5IDMuNjcgMTEuODlDNC40MDQgMTMuMTEzIDUuNTI5IDEyLjc3IDUuOTcgMTIuNTc1QzYuMDE4IDEyLjAzNyA2LjI2MyAxMS42OTUgNi40NTkgMTEuNDk5QzQuNjk3IDExLjMwMyAyLjgzOCAxMC42MTggMi44MzggNy41MzVDMi44MzggNi42NTUgMy4xMzEgNS45NjkgMy42NyA1LjM4MkMzLjYyIDUuMjM1IDMuMzI3IDQuNDA0IDMuNzY4IDMuMzI3QzMuNzY4IDMuMzI3IDQuNDUzIDMuMTMxIDUuOTY5IDQuMTU5QzYuNjA1IDMuOTYzIDcuMjkxIDMuOTE0IDcuOTc2IDMuOTE0QzguNjYxIDMuOTE0IDkuMzQ2IDQuMDEyIDkuOTgyIDQuMTU5QzExLjQ5OSAzLjEzMiAxMi4xODQgMy4zMjcgMTIuMTg0IDMuMzI3QzEyLjYyNCA0LjQwNCAxMi4zMyA1LjIzNSAxMi4yODEgNS40MzFDMTIuODE5OSA2LjAxODA4IDEzLjExNzEgNi43ODcxIDEzLjExMyA3LjU4NEMxMy4xMTMgMTAuNjY3IDExLjI1MyAxMS4zMDMgOS40OTMgMTEuNDk5QzkuNzg2IDExLjc0MyAxMC4wMzEgMTIuMjMyIDEwLjAzMSAxMi45NjZWMTUuMTY4QzEwLjAzMSAxNS4zNjQgMTAuMTc3IDE1LjYwOCAxMC41NjkgMTUuNTZDMTIuMTU1IDE1LjAyNDggMTMuNTMyNyAxNC4wMDQ2IDE0LjUwNzMgMTIuNjQzNkMxNS40ODE4IDExLjI4MjcgMTYuMDA0IDkuNjQ5ODkgMTYgNy45NzZDMTUuOTUxIDMuNTcyIDEyLjM4IDAgNy45NzYgMFpcIlxuXHRcdFx0XHRcdFx0XHRcdCAgZmlsbD1cIiMwMDdDQkFcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVscC1jZW50ZXItbGluay1sYWJlbFwiPnt7IGJveC5sYWJlbF9naXQgfX08L2Rpdj5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC90ZW1wbGF0ZT5cblx0PC9TaWRlQmFyQm94ZXM+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuY29uc3QgeyBTaWRlQmFyQm94ZXMgfSA9IEpldEZCQ29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnU2V0dGluZ3NTaWRlQmFyJyxcblx0Y29tcG9uZW50czogeyBTaWRlQmFyQm94ZXMgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2Uge1xuXG5cdCZfX2Jhbm5lci51c2VmdWwge1xuXHRcdHBhZGRpbmc6IDIwcHggMzBweDtcblx0fVxuXG5cdCZfX3BhbmVsLmhlbHAge1xuXHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAvIDIpO1xuXHRcdH1cblxuXHRcdC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLWNvbnRlbnQge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNEQ0RDREQ7XG5cdFx0XHRwYWRkaW5nLXRvcDogMjNweDtcblx0XHR9XG5cblx0XHQuaGVscC1jZW50ZXItbGluayB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjJweDtcblxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdH1cblxuXHRcdFx0YSB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdFx0Y29sb3I6ICMwMDdDQkE7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRjb2xvcjogIzA2NkVBMjtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5oZWxwLWNlbnRlci1saW5rLWljb24ge1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMjhweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8Q3hWdWlDb2xsYXBzZU1pbmlcblx0XHRcdHdpdGgtcGFuZWxcblx0XHRcdHYtZm9yPVwiKCB0YWIsIGluZGV4ICkgaW4gY2FwdGNoYVwiXG5cdFx0XHQ6aWNvbj1cInRhYi5pY29uXCJcblx0XHRcdDpsYWJlbD1cImdldFRhYlRpdGxlKCB0YWIgKVwiXG5cdFx0XHQ6a2V5PVwidGFiLmNvbXBvbmVudC5uYW1lXCJcblx0XHRcdDpkaXNhYmxlZD1cInRhYi5kaXNhYmxlZFwiXG5cdFx0XHQ6aW5pdGlhbC1hY3RpdmU9XCJpc0FjdGl2ZSggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0QGNoYW5nZT1cIm9uQ2hhbmdlQWN0aXZlKCAkZXZlbnQsIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHQ+XG5cdFx0XHQ8a2VlcC1hbGl2ZT5cblx0XHRcdFx0PGNvbXBvbmVudFxuXHRcdFx0XHRcdHYtYmluZDppcz1cInRhYi5jb21wb25lbnRcIlxuXHRcdFx0XHRcdHJlZj1cImNhcHRjaGFcIlxuXHRcdFx0XHRcdDppbmNvbWluZz1cImdldEluY29taW5nQ2FwdGNoYSggdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9rZWVwLWFsaXZlPlxuXHRcdFx0PGN4LXZ1aS1idXR0b25cblx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0OmxvYWRpbmc9XCJsb2FkaW5nR2F0ZXdheXNbIHRhYi5jb21wb25lbnQubmFtZSBdXCJcblx0XHRcdFx0QGNsaWNrPVwib25TYXZlR2F0ZXdheSggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHRcdD5cblx0XHRcdFx0PHNwYW4gc2xvdD1cImxhYmVsXCI+U2F2ZTwvc3Bhbj5cblx0XHRcdDwvY3gtdnVpLWJ1dHRvbj5cblx0XHQ8L0N4VnVpQ29sbGFwc2VNaW5pPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCByZUNBUFRDSEF2MyBmcm9tICcuLi8uLi9jYXB0Y2hhL2dvb2dsZSc7XG5pbXBvcnQgaENhcHRjaGEgZnJvbSAnLi4vLi4vY2FwdGNoYS9oQ2FwdGNoYSc7XG5pbXBvcnQgZnJpZW5kbHlDYXB0Y2hhIGZyb20gJy4uLy4uL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhJztcbmltcG9ydCB0dXJuc3RpbGUgZnJvbSAnLi4vLi4vY2FwdGNoYS90dXJuc3RpbGUnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcgfSA9IHdpbmRvdy5KZXRGQk1peGlucztcbmNvbnN0IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSAgICAgICAgICA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHM7XG5cbndpbmRvdy5qZmJFdmVudEJ1cyA9IHdpbmRvdy5qZmJFdmVudEJ1cyB8fCBuZXcgVnVlKCB7fSApO1xuXG5jb25zdCBjYXB0Y2hhVGFicyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5jYXB0Y2hhJywgW1xuXHRyZUNBUFRDSEF2Myxcblx0aENhcHRjaGEsXG5cdGZyaWVuZGx5Q2FwdGNoYSxcblx0dHVybnN0aWxlLFxuXSApO1xuXG5sZXQgcmVxdWVzdEZ1bmMgPSAoKSA9PiB7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdjYXB0Y2hhLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdFx0aW5uZXJTbHVnczogQXJyYXksXG5cdH0sXG5cdGNvbXBvbmVudHM6IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSxcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXggXSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2FwdGNoYTogY2FwdGNoYVRhYnMsXG5cdFx0XHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXG5cdFx0XHRzZXR0aW5nczogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoXG5cdFx0XHRcdHdpbmRvdy5KZXRGQlBhZ2VDb25maWdbICdjYXB0Y2hhLXRhYi1jb25maWcnIF0sXG5cdFx0XHQpICksXG5cdFx0XHRhY3RpdmVHYXRld2F5c1RhYnM6IFtdLFxuXHRcdFx0bG9hZGluZ0dhdGV3YXlzOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IHN0YXRlLCBzbHVnIH0gPSBwcm9wcztcblx0XHRcdHRoaXMuJHNldCggdGhpcy5sb2FkaW5nR2F0ZXdheXMsIHNsdWcsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSApO1xuXG5cdFx0amZiRXZlbnRCdXMuJG9uKCAnY2hhbmdlLXRhYicsIChcblx0XHRcdGZ1bmN0aW9uICggeyBzbHVnIH0gKSB7XG5cdFx0XHRcdGlmICggc2x1ZyAhPT0gdGhpcy4kb3B0aW9ucy5uYW1lICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgWyB0aGlzLiRvcHRpb25zLm5hbWUsIC4uLnRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzIF0uam9pbiggJ19fJyApO1xuXHRcdFx0fVxuXHRcdCkuYmluZCggdGhpcyApICk7XG5cblx0XHR0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyA9IHRoaXMuaW5uZXJTbHVncztcblxuXHRcdHJlcXVlc3RGdW5jID0gXy5kZWJvdW5jZSggKCkgPT4ge1xuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcblx0XHR9LCAxMDAwICk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRJbmNvbWluZ0NhcHRjaGEoIHNsdWcgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbmNvbWluZz8uWyBzbHVnIF0gPz8ge307XG5cdFx0fSxcblx0XHRnZXRUYWJUaXRsZSggdGFiICkge1xuXHRcdFx0Y29uc3QgeyB0aXRsZSB9ID0gdGFiO1xuXG5cdFx0XHRpZiAoIHRpdGxlPy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiB0aXRsZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgeyBuYW1lIH0gPSB0YWIuY29tcG9uZW50O1xuXHRcdFx0Y29uc3QgaXRlbSAgICAgPSB0aGlzLnNldHRpbmdzLmZpbmQoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgPT09IG5hbWUgKTtcblxuXHRcdFx0cmV0dXJuIGl0ZW0/LmxhYmVsIHx8ICdVbmRlZmluZWQgY2FwdGNoYSB0aXRsZSc7XG5cdFx0fSxcblx0XHRvbkNoYW5nZUFjdGl2ZSggaXNBY3RpdmUsIHRhYk5hbWUgKSB7XG5cdFx0XHRsZXQgWyBoYXNoLCAuLi5vdGhlcnMgXSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoICcjJywgJycgKS5zcGxpdCggJ19fJyApO1xuXG5cdFx0XHRpZiAoICFpc0FjdGl2ZSApIHtcblx0XHRcdFx0b3RoZXJzID0gb3RoZXJzLmZpbHRlciggZ2F0ZXdheVRhYiA9PiAoXG5cdFx0XHRcdFx0dGFiTmFtZSAhPT0gZ2F0ZXdheVRhYiB8fCBpc0FjdGl2ZVxuXHRcdFx0XHQpICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0b3RoZXJzLnB1c2goIHRhYk5hbWUgKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2hhbmdlR2F0ZXdheXNUYWJzKCBvdGhlcnMgKTtcblxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBbIHRoaXMuJG9wdGlvbnMubmFtZSwgLi4ub3RoZXJzIF0uam9pbiggJ19fJyApO1xuXHRcdH0sXG5cdFx0Y2hhbmdlR2F0ZXdheXNUYWJzKCB0YWJzICkge1xuXHRcdFx0dGhpcy5hY3RpdmVHYXRld2F5c1RhYnMgPSB0YWJzO1xuXHRcdH0sXG5cdFx0aXNBY3RpdmUoIHRhYk5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gQm9vbGVhbiggdGhpcy5hY3RpdmVHYXRld2F5c1RhYnM/LmluY2x1ZGVzKCB0YWJOYW1lICkgKTtcblx0XHR9LFxuXHRcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcblxuXHRcdFx0cmVxdWVzdEZ1bmMoKTtcblx0XHR9LFxuXHRcdG9uU2F2ZUdhdGV3YXkoIGluZGV4VGFiLCB0YWJTbHVnICkge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuJHJlZnMuY2FwdGNoYVsgaW5kZXhUYWIgXTtcblxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50LCB0YWJTbHVnICk7XG5cdFx0fSxcblx0XHRnZXRBamF4T2JqZWN0KCBjdXJyZW50VGFiLCB0YWJTbHVnICkge1xuXHRcdFx0Y29uc3QgYWpheFJlcXVlc3QgPSB7XG5cdFx0XHRcdHVybDogd2luZG93LmFqYXh1cmwsXG5cdFx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBjdXJyZW50VGFiLmdldFJlcXVlc3RPblNhdmUoKTtcblxuXHRcdFx0YWpheFJlcXVlc3QuZGF0YSA9IHtcblx0XHRcdFx0YWN0aW9uOiBgamV0X2ZiX3NhdmVfdGFiX18keyB0aGlzLiRvcHRpb25zLm5hbWUgfWAsXG5cdFx0XHRcdC4uLihcblx0XHRcdFx0XHR0YWJTbHVnID09PSB0aGlzLiRvcHRpb25zLm5hbWUgPyBjdXJyZW50LmRhdGEgOiB7XG5cdFx0XHRcdFx0XHRbIHRhYlNsdWcgXTogY3VycmVudC5kYXRhLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KSxcblx0XHRcdH07XG5cblx0XHRcdGlmICggd2luZG93Py5KZXRGQlBhZ2VDb25maWdQYWNrYWdlPy5ub25jZSApIHtcblx0XHRcdFx0YWpheFJlcXVlc3QuZGF0YS5fbm9uY2UgPSB3aW5kb3cuSmV0RkJQYWdlQ29uZmlnUGFja2FnZS5ub25jZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGFqYXhSZXF1ZXN0O1xuXHRcdH0sXG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cdH0sXG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8Y3gtdnVpLWlucHV0XG5cdFx0OmxhYmVsPVwibGFiZWwuYXBpX2tleVwiXG5cdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0OmRlc2NyaXB0aW9uPSdgJHsgaGVscC5hcGlQcmVmIH0gPGEgaHJlZj1cIiR7IGhlbHAuYXBpTGluayB9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHsgaGVscC5hcGlMaW5rTGFiZWwgfTwvYT5gJ1xuXHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdHYtbW9kZWw9XCJhcGlfa2V5XCJcblx0Lz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsXG59IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdnZXQtcmVzcG9uc2UtdGFiJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDoge30sXG5cdFx0fSxcblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWwsIGhlbHAsXG5cdFx0XHRhcGlfa2V5OiAnJyxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMuYXBpX2tleSA9IHRoaXMuaW5jb21pbmcuYXBpX2tleSB8fCAnJ1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRhcGlfa2V5OiB0aGlzLmFwaV9rZXksXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGN4LXZ1aS1pbnB1dFxuXHRcdDpsYWJlbD1cImxhYmVsLmFwaV9rZXlcIlxuXHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdDpkZXNjcmlwdGlvbj0nYCR7IGhlbHAuYXBpUHJlZiB9IDxhIGhyZWY9XCIkeyBoZWxwLmFwaUxpbmsgfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7IGhlbHAuYXBpTGlua0xhYmVsIH08L2E+YCdcblx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHR2LW1vZGVsPVwiYXBpX2tleVwiXG5cdC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAnbWFpbGNoaW1wLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0YXBpX2tleTogJycsXG5cdFx0fTtcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHR0aGlzLmFwaV9rZXkgPSB0aGlzLmluY29taW5nLmFwaV9rZXkgfHwgJydcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YXBpX2tleTogdGhpcy5hcGlfa2V5LFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufVxuXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxuXHRcdFx0bmFtZT1cImVuYWJsZV9kZXZfbW9kZVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpsYWJlbD1cImxvYWRpbmcuZW5hYmxlX2Rldl9tb2RlID8gYCR7bGFiZWwuZW5hYmxlX2Rldl9tb2RlfSAobG9hZGluZy4uLilgIDogbGFiZWwuZW5hYmxlX2Rldl9tb2RlXCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuZW5hYmxlX2Rldl9tb2RlXCJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdlbmFibGVfZGV2X21vZGUnICkgPyBzdG9yYWdlLmVuYWJsZV9kZXZfbW9kZSA6IGZhbHNlXCJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdlbmFibGVfZGV2X21vZGUnLCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdDxjeC12dWktc3dpdGNoZXJcblx0XHRcdG5hbWU9XCJjbGVhcl9vbl91bmluc3RhbGxcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmNsZWFyX29uX3VuaW5zdGFsbCA/IGAke2xhYmVsLmNsZWFyX29uX3VuaW5zdGFsbH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmNsZWFyX29uX3VuaW5zdGFsbFwiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmNsZWFyX29uX3VuaW5zdGFsbFwiXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnY2xlYXJfb25fdW5pbnN0YWxsJyApID8gc3RvcmFnZS5jbGVhcl9vbl91bmluc3RhbGwgOiBmYWxzZVwiXG5cdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxuXHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnY2xlYXJfb25fdW5pbnN0YWxsJywgJGV2ZW50IClcIlxuXHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cblx0XHQ8Y3gtdnVpLWlucHV0XG5cdFx0XHRuYW1lPVwiZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnNpemU9XCInZnVsbHdpZHRoJ1wiXG5cdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSA/IGAke2xhYmVsLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eVwiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eVwiXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5JyApID8gc3RvcmFnZS5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHkgOiAnbWFuYWdlX29wdGlvbnMnXCJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHknLCAkZXZlbnQgKVwiXG5cdFx0Lz5cblx0XHQ8Y3gtdnVpLXNlbGVjdFxuXHRcdFx0bmFtZT1cInNzcl92YWxpZGF0aW9uX21ldGhvZFwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpzaXplPVwiJ2Z1bGx3aWR0aCdcIlxuXHRcdFx0OmxhYmVsPVwibG9hZGluZy5zc3JfdmFsaWRhdGlvbl9tZXRob2QgPyBgJHtsYWJlbC5zc3JfdmFsaWRhdGlvbl9tZXRob2R9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5zc3JfdmFsaWRhdGlvbl9tZXRob2RcIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5zc3JfdmFsaWRhdGlvbl9tZXRob2RcIlxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3Nzcl92YWxpZGF0aW9uX21ldGhvZCcgKSA/IHN0b3JhZ2Uuc3NyX3ZhbGlkYXRpb25fbWV0aG9kIDogJ3Jlc3QnXCJcblx0XHRcdDpvcHRpb25zLWxpc3Q9XCJzZWxlY3RPcHRpb25zXCJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdzc3JfdmFsaWRhdGlvbl9tZXRob2QnLCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLXNlbGVjdD5cblx0XHQ8Y3gtdnVpLWYtc2VsZWN0XG5cdFx0XHRuYW1lPVwic2VsZl9wcm9tb3RhYmxlX3JvbGVzXCJcblx0XHRcdDpsYWJlbD1cImxvYWRpbmcuc2VsZl9wcm9tb3RhYmxlX3JvbGVzID8gYCR7bGFiZWwuc2VsZl9wcm9tb3RhYmxlX3JvbGVzfSAobG9hZGluZy4uLilgIDogbGFiZWwuc2VsZl9wcm9tb3RhYmxlX3JvbGVzXCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuc2VsZl9wcm9tb3RhYmxlX3JvbGVzXCJcblx0XHRcdDp2YWx1ZT1cInNlbGVjdGVkU2VsZlByb21vdGFibGVSb2xlc1wiXG5cdFx0XHQ6b3B0aW9ucy1saXN0PVwiYXZhaWxhYmxlUm9sZXNcIlxuXHRcdFx0Om11bHRpcGxlPVwidHJ1ZVwiXG5cdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdEBvbi1jaGFuZ2U9XCJjaGFuZ2VTZWxmUHJvbW90YWJsZVJvbGVzKCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLWYtc2VsZWN0PlxuXHRcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXJcblx0XHRcdDpsYWJlbD1cIl9fKCAnRm9ybSBBY2Nlc3NpYmlsaXR5JywgJ2pldC1mb3JtLWJ1aWxkZXInIClcIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0Lz5cblx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWlubmVyLXBhbmVsXCI+XG5cdFx0XHQ8Y3gtdnVpLXN3aXRjaGVyXG5cdFx0XHRcdG5hbWU9XCJkaXNhYmxlX25leHRfYnV0dG9uXCJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHRcdDpsYWJlbD1cImxvYWRpbmcuZGlzYWJsZV9uZXh0X2J1dHRvbiA/IGAke2xhYmVsLmRpc2FibGVfbmV4dF9idXR0b259IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5kaXNhYmxlX25leHRfYnV0dG9uXCJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5kaXNhYmxlX25leHRfYnV0dG9uXCJcblx0XHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2Rpc2FibGVfbmV4dF9idXR0b24nICkgPyBzdG9yYWdlLmRpc2FibGVfbmV4dF9idXR0b24gOiB0cnVlXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcblx0XHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnZGlzYWJsZV9uZXh0X2J1dHRvbicsICRldmVudCApXCJcblx0XHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cblx0XHRcdDxjeC12dWktc3dpdGNoZXJcblx0XHRcdFx0bmFtZT1cInNjcm9sbF9vbl9uZXh0XCJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHRcdDpsYWJlbD1cImxvYWRpbmcuc2Nyb2xsX29uX25leHQgPyBgJHtsYWJlbC5zY3JvbGxfb25fbmV4dH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLnNjcm9sbF9vbl9uZXh0XCJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5zY3JvbGxfb25fbmV4dFwiXG5cdFx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdzY3JvbGxfb25fbmV4dCcgKSA/IHN0b3JhZ2Uuc2Nyb2xsX29uX25leHQgOiBmYWxzZVwiXG5cdFx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRcdEBpbnB1dD1cImNoYW5nZVZhbCggJ3Njcm9sbF9vbl9uZXh0JywgJGV2ZW50IClcIlxuXHRcdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdFx0PGN4LXZ1aS1zd2l0Y2hlclxuXHRcdFx0XHRuYW1lPVwiYXV0b19mb2N1c1wiXG5cdFx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmF1dG9fZm9jdXMgPyBgJHtsYWJlbC5hdXRvX2ZvY3VzfSAobG9hZGluZy4uLilgIDogbGFiZWwuYXV0b19mb2N1c1wiXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuYXV0b19mb2N1c1wiXG5cdFx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdhdXRvX2ZvY3VzJyApID8gc3RvcmFnZS5hdXRvX2ZvY3VzIDogZmFsc2VcIlxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxuXHRcdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdhdXRvX2ZvY3VzJywgJGV2ZW50IClcIlxuXHRcdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdDwvZGl2PlxuXG4gICAgPGN4LXZ1aS1jb21wb25lbnQtd3JhcHBlclxuICAgICAgICA6bGFiZWw9XCJfXyggJ0Zvcm0gUmVxdWVzdCBBcmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcIlxuICAgICAgICA6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcbiAgICAvPlxuXG4gICAgPGN4LXZ1aS1pbnB1dFxuICAgICAgICBuYW1lPVwiZ2ZiX3JlcXVlc3RfYXJnc19rZXlcIlxuICAgICAgICA6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJywgZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5ID8gJ2pmYi1oYXMtZXJyb3InIDogJycgXVwiXG4gICAgOnNpemU9XCInZnVsbHdpZHRoJ1wiXG4gICAgOmxhYmVsPVwiJ1JlcXVlc3Qga2V5J1wiXG4gICAgOmRlc2NyaXB0aW9uPVwiJ1VuaXF1ZSBmb3JtIHBhcmFtZXRlciAoa2V5KSdcIlxuICAgIDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdnZmJfcmVxdWVzdF9hcmdzX2tleScgKSA/IHN0b3JhZ2UuZ2ZiX3JlcXVlc3RfYXJnc19rZXkgOiAnMTExMSdcIlxuICAgIDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG4gICAgQGlucHV0PVwiY2hhbmdlVmFsKCAnZ2ZiX3JlcXVlc3RfYXJnc19rZXknLCAkZXZlbnQgKVwiXG4gICAgLz5cbiAgICA8ZGl2IHYtaWY9XCJlcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc19rZXlcIiBjbGFzcz1cImpmYi1maWVsZC1lcnJvclwiPlxuICAgICAge3sgZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5IH19XG4gICAgPC9kaXY+XG5cbiAgICA8Y3gtdnVpLWlucHV0XG4gICAgICAgIG5hbWU9XCJnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlXCJcbiAgICAgICAgOndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcsIGVycm9ycy5nZmJfcmVxdWVzdF9hcmdzX3ZhbHVlID8gJ2pmYi1oYXMtZXJyb3InIDogJycgXVwiXG4gICAgOnNpemU9XCInZnVsbHdpZHRoJ1wiXG4gICAgOmxhYmVsPVwiJ1JlcXVlc3QgdmFsdWUnXCJcbiAgICA6ZGVzY3JpcHRpb249XCInVW5pcXVlIGZvcm0gcGFyYW1ldGVyICh2YWx1ZSknXCJcbiAgICA6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScgKSA/IHN0b3JhZ2UuZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZSA6ICcyMjIyJ1wiXG4gICAgOmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcbiAgICBAaW5wdXQ9XCJjaGFuZ2VWYWwoICdnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlJywgJGV2ZW50IClcIlxuICAgIC8+XG4gICAgPGRpdiB2LWlmPVwiZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWVcIiBjbGFzcz1cImpmYi1maWVsZC1lcnJvclwiPlxuICAgICAge3sgZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUgfX1cbiAgICA8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbCxcbn0gZnJvbSAnLi9zb3VyY2UnO1xuXG5cbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdvcHRpb25zLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBpMThuIF0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0c3RvcmFnZTogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApLFxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdGxvYWRpbmc6IHt9LFxuXHRcdFx0cGVuZGluZ1NhdmU6IGZhbHNlLFxuXHRcdFx0ZXJyb3JzOiB7XG5cdFx0XHRcdGdmYl9yZXF1ZXN0X2FyZ3Nfa2V5OiAnJyxcblx0XHRcdFx0Z2ZiX3JlcXVlc3RfYXJnc192YWx1ZTogJycsXG5cdFx0XHR9LFxuXHRcdFx0c2VsZWN0T3B0aW9uczogW1xuXHRcdFx0XHR7IHZhbHVlOiAncmVzdCcsIGxhYmVsOiAoICdSZXN0IEFQSScgKSB9LFxuXHRcdFx0XHR7IHZhbHVlOiAnYWRtaW5fYWpheCcsIGxhYmVsOiAoICdBZG1pbiBBamF4JyApIH0sXG5cdFx0XHRcdHsgdmFsdWU6ICdzZWxmJywgbGFiZWw6ICggJ1NlbGYnICkgfSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRhdmFpbGFibGVSb2xlcygpIHtcblx0XHRcdHJldHVybiB0aGlzLnN0b3JhZ2UuYXZhaWxhYmxlX3JvbGVzIHx8IFtdO1xuXHRcdH0sXG5cdFx0c2VsZWN0ZWRTZWxmUHJvbW90YWJsZVJvbGVzKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RvcmFnZS5zZWxmX3Byb21vdGFibGVfcm9sZXMgfHwgW107XG5cdFx0fSxcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHRqZmJFdmVudEJ1cy4kb24oICdyZXF1ZXN0LXN0YXRlJywgdGhpcy5vbkNoYW5nZVN0YXRlLmJpbmQoIHRoaXMgKSApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0U2F2YWJsZURhdGEoKSB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdGVuYWJsZV9kZXZfbW9kZSxcblx0XHRcdFx0Y2xlYXJfb25fdW5pbnN0YWxsLFxuXHRcdFx0XHRmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHksXG5cdFx0XHRcdHNzcl92YWxpZGF0aW9uX21ldGhvZCxcblx0XHRcdFx0c2VsZl9wcm9tb3RhYmxlX3JvbGVzLFxuXHRcdFx0XHRkaXNhYmxlX25leHRfYnV0dG9uLFxuXHRcdFx0XHRzY3JvbGxfb25fbmV4dCxcblx0XHRcdFx0YXV0b19mb2N1cyxcblx0XHRcdFx0Z2ZiX3JlcXVlc3RfYXJnc19rZXksXG5cdFx0XHRcdGdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUsXG5cdFx0XHR9ID0gdGhpcy5zdG9yYWdlO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlbmFibGVfZGV2X21vZGUsXG5cdFx0XHRcdGNsZWFyX29uX3VuaW5zdGFsbCxcblx0XHRcdFx0Zm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5LFxuXHRcdFx0XHRzc3JfdmFsaWRhdGlvbl9tZXRob2QsXG5cdFx0XHRcdHNlbGZfcHJvbW90YWJsZV9yb2xlczogQXJyYXkuaXNBcnJheSggc2VsZl9wcm9tb3RhYmxlX3JvbGVzICkgJiYgISBzZWxmX3Byb21vdGFibGVfcm9sZXMubGVuZ3RoXG5cdFx0XHRcdFx0PyBbICcnIF1cblx0XHRcdFx0XHQ6IHNlbGZfcHJvbW90YWJsZV9yb2xlcyxcblx0XHRcdFx0ZGlzYWJsZV9uZXh0X2J1dHRvbixcblx0XHRcdFx0c2Nyb2xsX29uX25leHQsXG5cdFx0XHRcdGF1dG9fZm9jdXMsXG5cdFx0XHRcdGdmYl9yZXF1ZXN0X2FyZ3Nfa2V5LFxuXHRcdFx0XHRnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdGdldFJlcXVlc3RPblNhdmUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB0aGlzLmdldFNhdmFibGVEYXRhKCksXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0b25DaGFuZ2VTdGF0ZSggeyBzdGF0ZSwgc2x1ZyB9ICkge1xuXHRcdFx0aWYgKCAnb3B0aW9ucy10YWInICE9PSBzbHVnICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggJ2VuZCcgPT09IHN0YXRlICkge1xuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSB7fTtcblx0XHRcdFx0dGhpcy4kc2V0KCB0aGlzLCAnaXNMb2FkaW5nJywgZmFsc2UgKTtcblxuXHRcdFx0XHRpZiAoIHRoaXMucGVuZGluZ1NhdmUgKSB7XG5cdFx0XHRcdFx0dGhpcy5wZW5kaW5nU2F2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHNldCggdGhpcywgJ2lzTG9hZGluZycsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSxcblx0XHR2YWxpZGF0ZUZpZWxkKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdGlmICggbmFtZSAhPT0gJ2dmYl9yZXF1ZXN0X2FyZ3Nfa2V5JyAmJiBuYW1lICE9PSAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB2YWwgPSBTdHJpbmcoIHZhbHVlID8/ICcnICk7XG5cdFx0XHRjb25zdCBvbmx5RGlnaXRzID0gL15cXGQrJC8udGVzdCggdmFsICk7XG5cblx0XHRcdGlmICggb25seURpZ2l0cyApIHtcblx0XHRcdFx0Y29uc3QgbXNnID0gdGhpcy5fXyhcblx0XHRcdFx0XHQnTXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBsZXR0ZXIgKEHigJNaKS4gTnVtYmVycyBvbmx5IGFyZSBub3QgYWxsb3dlZC4nLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLiRzZXQoIHRoaXMuZXJyb3JzLCBuYW1lLCBtc2cgKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuZXJyb3JzLCBuYW1lLCAnJyApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRjaGFuZ2VTZWxmUHJvbW90YWJsZVJvbGVzKCB2YWx1ZSApIHtcblx0XHRcdGlmICggISBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2hhbmdlVmFsKCAnc2VsZl9wcm9tb3RhYmxlX3JvbGVzJywgdmFsdWUgKTtcblx0XHR9LFxuXHRcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgbmFtZSwgdmFsdWUgKTtcblxuXHRcdFx0aWYgKCBuYW1lID09PSAnZ2ZiX3JlcXVlc3RfYXJnc19rZXknIHx8IG5hbWUgPT09ICdnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlJyApIHtcblx0XHRcdFx0Y29uc3Qgb2sgPSB0aGlzLnZhbGlkYXRlRmllbGQoIG5hbWUsIHZhbHVlICk7XG5cdFx0XHRcdGlmICggISBvayApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsIG5hbWUsIHRydWUgKTtcblxuXHRcdFx0aWYgKCB0aGlzLmlzTG9hZGluZyApIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nU2F2ZSA9IHRydWU7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcblx0XHR9LFxuXHR9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZD5cbi5qZmItaGFzLWVycm9yIC5jeC12dWktaW5wdXQsXG4uamZiLWhhcy1lcnJvciBpbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI2RjMjYyNiAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uamZiLWZpZWxkLWVycm9yIHtcbiAgbWFyZ2luOiA2cHggMCAxMnB4O1xuICBjb2xvcjogI2RjMjYyNjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cblx0PHNlY3Rpb24+XG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxuXHRcdFx0bmFtZT1cInVzZV9nYXRld2F5c1wiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpsYWJlbD1cImxhYmVsLnVzZV9nYXRld2F5c1wiXG5cdFx0XHQ6ZGVzY3JpcHRpb249XCJoZWxwLnVzZV9nYXRld2F5c1wiXG5cdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICd1c2VfZ2F0ZXdheXMnLCAkZXZlbnQgKVwiXG5cdFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxuXHRcdDxjeC12dWktc3dpdGNoZXJcblx0XHRcdHYtaWY9XCJzdG9yYWdlLnVzZV9nYXRld2F5c1wiXG5cdFx0XHRuYW1lPVwiZW5hYmxlX3Rlc3RfbW9kZVwiXG5cdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuZW5hYmxlX3Rlc3RfbW9kZVwiXG5cdFx0XHQ6bGFiZWw9XCJsYWJlbC5lbmFibGVfdGVzdF9tb2RlXCJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuZW5hYmxlX3Rlc3RfbW9kZVwiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdlbmFibGVfdGVzdF9tb2RlJywgJGV2ZW50IClcIlxuXHRcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cblx0XHQ8dGVtcGxhdGUgdi1pZj1cInN0b3JhZ2UudXNlX2dhdGV3YXlzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY3gtdnVpLWlubmVyLXBhbmVsXCI+XG5cdFx0XHRcdDxDeFZ1aUNvbGxhcHNlTWluaVxuXHRcdFx0XHRcdHdpdGgtcGFuZWxcblx0XHRcdFx0XHR2LWZvcj1cIiggdGFiLCBpbmRleCApIGluIGdhdGV3YXlzXCJcblx0XHRcdFx0XHQ6aWNvbj1cInRhYi5pY29uXCJcblx0XHRcdFx0XHQ6bGFiZWw9XCJ0YWIudGl0bGVcIlxuXHRcdFx0XHRcdDprZXk9XCJ0YWIuY29tcG9uZW50Lm5hbWVcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cInRhYi5kaXNhYmxlZFwiXG5cdFx0XHRcdFx0OmluaXRpYWwtYWN0aXZlPVwiaXNBY3RpdmUoIHRhYi5jb21wb25lbnQubmFtZSApXCJcblx0XHRcdFx0XHRAY2hhbmdlPVwib25DaGFuZ2VBY3RpdmUoICRldmVudCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGtlZXAtYWxpdmU+XG5cdFx0XHRcdFx0XHQ8Y29tcG9uZW50XG5cdFx0XHRcdFx0XHRcdHYtYmluZDppcz1cInRhYi5jb21wb25lbnRcIlxuXHRcdFx0XHRcdFx0XHRyZWY9XCJnYXRld2F5c1wiXG5cdFx0XHRcdFx0XHRcdDppbmNvbWluZz1cImdldEluY29taW5nKCB0YWIuY29tcG9uZW50Lm5hbWUgKVwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwva2VlcC1hbGl2ZT5cblx0XHRcdFx0XHQ8Y3gtdnVpLWJ1dHRvblxuXHRcdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0XHRcdDpsb2FkaW5nPVwibG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXVwiXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJvblNhdmVHYXRld2F5KCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lIClcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxzcGFuIHNsb3Q9XCJsYWJlbFwiPlNhdmU8L3NwYW4+XG5cdFx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0XHQ8L0N4VnVpQ29sbGFwc2VNaW5pPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC90ZW1wbGF0ZT5cblx0PC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsLFxufSBmcm9tIFwiLi9zb3VyY2VcIjtcbmltcG9ydCAqIGFzIHBheXBhbCBmcm9tICcuLi8uLi9nYXRld2F5cy9wYXlwYWwnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgR2V0SW5jb21pbmcgfSA9IHdpbmRvdy5KZXRGQk1peGlucztcbmNvbnN0IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSA9IHdpbmRvdy5KZXRGQkNvbXBvbmVudHM7XG5cbndpbmRvdy5qZmJFdmVudEJ1cyA9IHdpbmRvdy5qZmJFdmVudEJ1cyB8fCBuZXcgVnVlKCB7fSApO1xuXG5jb25zdCBnYXRld2F5c1RhYnMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZ2F0ZXdheXMnLCBbXG5cdHBheXBhbCxcbl0gKTtcblxubGV0IHJlcXVlc3RGdW5jID0gKCkgPT4ge1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuYW1lOiAncGF5bWVudHMtZ2F0ZXdheXMnLFxuXHRwcm9wczoge1xuXHRcdGluY29taW5nOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0KCkge1xuXHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW5uZXJTbHVnczogQXJyYXksXG5cdH0sXG5cdGNvbXBvbmVudHM6IHsgQ3hWdWlDb2xsYXBzZU1pbmkgfSxcblx0bWl4aW5zOiBbIFNhdmVUYWJCeUFqYXgsIEdldEluY29taW5nIF0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0c3RvcmFnZTogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApLFxuXHRcdFx0Z2F0ZXdheXM6IGdhdGV3YXlzVGFicyxcblx0XHRcdGxvYWRpbmdHYXRld2F5czoge30sXG5cdFx0XHRhY3RpdmVHYXRld2F5c1RhYnM6IFtdLFxuXHRcdH07XG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHByb3BzID0+IHtcblx0XHRcdGNvbnN0IHsgc3RhdGUsIHNsdWcgfSA9IHByb3BzO1xuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmdHYXRld2F5cywgc2x1Zywgc3RhdGUgPT09ICdiZWdpbicgKTtcblx0XHR9ICk7XG5cblxuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ2NoYW5nZS10YWInLCAoIGZ1bmN0aW9uKCB7IHNsdWcgfSApIHtcblx0XHRcdGlmICggc2x1ZyAhPT0gdGhpcy4kb3B0aW9ucy5uYW1lICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgWyB0aGlzLiRvcHRpb25zLm5hbWUsIC4uLnRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzIF0uam9pbiggJ19fJyApO1xuXHRcdH0gKS5iaW5kKCB0aGlzICkgKTtcblxuXHRcdHRoaXMuYWN0aXZlR2F0ZXdheXNUYWJzID0gdGhpcy5pbm5lclNsdWdzO1xuXG5cdFx0cmVxdWVzdEZ1bmMgPSBfLmRlYm91bmNlKCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApXG5cdFx0fSwgMTAwMCApO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0b25DaGFuZ2VBY3RpdmUoIGlzQWN0aXZlLCB0YWJOYW1lICkge1xuXHRcdFx0bGV0IFsgaGFzaCwgLi4ub3RoZXJzIF0gPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCAnIycsICcnICkuc3BsaXQoICdfXycgKTtcblxuXHRcdFx0aWYgKCAhIGlzQWN0aXZlICkge1xuXHRcdFx0XHRvdGhlcnMgPSBvdGhlcnMuZmlsdGVyKCBnYXRld2F5VGFiID0+ICggdGFiTmFtZSAhPT0gZ2F0ZXdheVRhYiB8fCBpc0FjdGl2ZSApICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvdGhlcnMucHVzaCggdGFiTmFtZSApO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jaGFuZ2VHYXRld2F5c1RhYnMoIG90aGVycyApO1xuXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IFsgdGhpcy4kb3B0aW9ucy5uYW1lLCAuLi5vdGhlcnMgXS5qb2luKCAnX18nICk7XG5cdFx0fSxcblx0XHRjaGFuZ2VHYXRld2F5c1RhYnMoIHRhYnMgKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicyA9IHRhYnM7XG5cdFx0fSxcblx0XHRpc0FjdGl2ZSggdGFiTmFtZSApIHtcblx0XHRcdHJldHVybiBCb29sZWFuKCB0aGlzLmFjdGl2ZUdhdGV3YXlzVGFicy5sZW5ndGggJiYgdGhpcy5hY3RpdmVHYXRld2F5c1RhYnMuaW5jbHVkZXMoIHRhYk5hbWUgKSApO1xuXHRcdH0sXG5cdFx0Y2hhbmdlVmFsKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCBuYW1lLCB2YWx1ZSApO1xuXG5cdFx0XHRyZXF1ZXN0RnVuYygpO1xuXHRcdH0sXG5cdFx0b25TYXZlR2F0ZXdheSggaW5kZXhUYWIsIHRhYlNsdWcgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy4kcmVmcy5nYXRld2F5c1sgaW5kZXhUYWIgXTtcblxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCBjdXJyZW50LCB0YWJTbHVnICk7XG5cdFx0fSxcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcblx0XHRcdH07XG5cdFx0fSxcblx0fSxcbn1cblxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxjeC12dWktaW5wdXRcblx0XHRcdG5hbWU9XCJpcGluZm9fdG9rZW5cIlxuXHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ6c2l6ZT1cIidmdWxsd2lkdGgnXCJcblx0XHRcdDpsYWJlbD1cImxvYWRpbmcuaXBpbmZvX3Rva2VuID8gYCR7bGFiZWwuaXBpbmZvX3Rva2VufSAobG9hZGluZy4uLilgIDogbGFiZWwuaXBpbmZvX3Rva2VuXCJcblx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuaXBpbmZvX3Rva2VuXCJcblx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdpcGluZm9fdG9rZW4nICkgPyBzdG9yYWdlLmlwaW5mb190b2tlbiA6ICcnXCJcblx0XHRcdDpkaXNhYmxlZD1cImlzTG9hZGluZ1wiXG5cdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdpcGluZm9fdG9rZW4nLCAkZXZlbnQgKVwiXG5cdFx0Lz5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbCxcbn0gZnJvbSAnLi9zb3VyY2UnO1xuXG5cbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdwaG9uZS1maWVsZC10YWInLFxuXHRwcm9wczoge1xuXHRcdGluY29taW5nOiB7XG5cdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRkZWZhdWx0OiB7fSxcblx0XHR9LFxuXHR9LFxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgaTE4biBdLFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcblx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRsb2FkaW5nOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCB0aGlzLm9uQ2hhbmdlU3RhdGUuYmluZCggdGhpcyApICk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRvbkNoYW5nZVN0YXRlKCB7IHN0YXRlLCBzbHVnIH0gKSB7XG5cdFx0XHRpZiAoICdwaG9uZS1maWVsZC10YWInICE9PSBzbHVnICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggJ2VuZCcgPT09IHN0YXRlICkge1xuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLCAnaXNMb2FkaW5nJywgc3RhdGUgPT09ICdiZWdpbicgKTtcblx0XHR9LFxuXHRcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIHRoaXMuaXNMb2FkaW5nICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCBuYW1lLCB2YWx1ZSApO1xuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsIG5hbWUsIHRydWUgKTtcblx0XHRcdHRoaXMuc2F2ZUJ5QWpheCggdGhpcywgdGhpcy4kb3B0aW9ucy5uYW1lICk7XG5cdFx0fSxcblx0fSxcbn07XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxkaXYgdi1pZj1cIm1pZ3JhdGlvbkluUHJvZ3Jlc3NcIiBjbGFzcz1cImpmYi1zc3ItbWlncmF0aW9uLXdhaXRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiamZiLXNzci1taWdyYXRpb24td2FpdF9fc3Bpbm5lclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzdHJvbmc+e3sgX18oICdNaWdyYXRpb24gaW4gcHJvZ3Jlc3PigKYnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvc3Ryb25nPlxuXHRcdFx0XHQ8cD57eyBoZWxwLm1pZ3JhdGlvbkluUHJvZ3Jlc3MgfX08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxuXHRcdFx0PGN4LXZ1aS1jb21wb25lbnQtd3JhcHBlclxuXHRcdFx0XHQ6bGFiZWw9XCJsb2FkaW5nLmNhbGxiYWNrcyA/IGAke2xhYmVsLmNhbGxiYWNrc30gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmNhbGxiYWNrc1wiXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuY2FsbGJhY2tzXCJcblx0XHRcdFx0OndyYXBwZXItY3NzPVwiWyAnZXF1YWx3aWR0aCcgXVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdGNsYXNzPVwiamZiLXNzci1jYWxsYmFja3MtdGV4dGFyZWFcIlxuXHRcdFx0XHRcdHJvd3M9XCIxMFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiaXNMb2FkaW5nXCJcblx0XHRcdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmNhbGxiYWNrc1wiXG5cdFx0XHRcdFx0QGlucHV0PVwib25JbnB1dCggJGV2ZW50LnRhcmdldC52YWx1ZSApXCJcblx0XHRcdFx0PjwvdGV4dGFyZWE+XG5cdFx0XHRcdDxjeC12dWktYnV0dG9uXG5cdFx0XHRcdFx0YnV0dG9uLXN0eWxlPVwiYWNjZW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmcgfHwgIWhhc1Vuc2F2ZWRDYWxsYmFja3NDaGFuZ2VcIlxuXHRcdFx0XHRcdEBjbGljaz1cIm9uU2F2ZUNhbGxiYWNrc1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8c3BhbiBzbG90PVwibGFiZWxcIj57eyBfXyggJ1NhdmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvc3Bhbj5cblx0XHRcdFx0PC9jeC12dWktYnV0dG9uPlxuXHRcdFx0PC9jeC12dWktY29tcG9uZW50LXdyYXBwZXI+XG5cdFx0XHQ8ZGl2IHYtaWY9XCJoYXNSZWplY3RlZFwiIGNsYXNzPVwiamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRcIj5cblx0XHRcdFx0PHN0cm9uZz57eyBfXyggJ05vdCBzYXZlZDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvc3Ryb25nPlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJqZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZF9fbGlzdFwiPlxuXHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0di1mb3I9XCJuYW1lIGluIHJlamVjdGVkTmFtZXNcIlxuXHRcdFx0XHRcdFx0OmtleT1cIm5hbWVcIlxuXHRcdFx0XHRcdD57eyBuYW1lIH19IOKAlCB7eyByZWplY3RlZFsgbmFtZSBdIH19PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGN4LXZ1aS1jb21wb25lbnQtd3JhcHBlclxuXHRcdFx0XHR2LWlmPVwiYmxvY2tlZC5sZW5ndGhcIlxuXHRcdFx0XHQ6bGFiZWw9XCJgJHtsYWJlbC5ibG9ja2VkfSAoJHtibG9ja2VkLmxlbmd0aH0pYFwiXG5cdFx0XHRcdDpkZXNjcmlwdGlvbj1cImhlbHAuYmxvY2tlZFwiXG5cdFx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0PlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJqZmItc3NyLWJsb2NrZWRfX2xpc3RcIj5cblx0XHRcdFx0XHQ8bGkgdi1mb3I9XCIoIHVzYWdlLCBpbmRleCApIGluIGJsb2NrZWRcIiA6a2V5PVwiaW5kZXhcIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiamZiLXNzci1ibG9ja2VkX19mb3JtXCI+e3sgdXNhZ2UuZm9ybV90aXRsZSB8fCBgIyR7dXNhZ2UuZm9ybV9pZH1gIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJqZmItc3NyLWJsb2NrZWRfX21ldGFcIj5cblx0XHRcdFx0XHRcdFx0KHt7IF9fKCAnZmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fSBcInt7IHVzYWdlLmZpZWxkIH19XCIg4oaSIDxjb2RlPnt7IHVzYWdlLm5hbWUgfX08L2NvZGU+KVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PGEgOmhyZWY9XCJ1c2FnZS5lZGl0X3VybFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0e3sgX18oICdFZGl0IGZvcm0g4oaSJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9jeC12dWktY29tcG9uZW50LXdyYXBwZXI+XG5cdFx0PC90ZW1wbGF0ZT5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQge1xuXHRoZWxwLFxuXHRsYWJlbCxcbn0gZnJvbSAnLi9zb3VyY2UnO1xuXG5jb25zdCB7IFNhdmVUYWJCeUFqYXgsIGkxOG4gfSA9IHdpbmRvdy5KZXRGQk1peGlucztcblxuY29uc3QgTUlHUkFUSU9OX1BPTExfSU5URVJWQUxfTVMgPSA4MDAwO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdzc3ItY2FsbGJhY2tzLXRhYicsXG5cdHByb3BzOiB7XG5cdFx0aW5jb21pbmc6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IHt9LFxuXHRcdH0sXG5cdH0sXG5cdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBpMThuIF0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxhYmVsLCBoZWxwLFxuXHRcdFx0c3RvcmFnZTogSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIHRoaXMuaW5jb21pbmcgKSApLFxuXHRcdFx0Ly8gVHJhY2tzIHRoZSBsYXN0IHZhbHVlIGNvbmZpcm1lZCBieSB0aGUgc2VydmVyIChpbml0aWFsIGxvYWQgb3IgYSBjb21wbGV0ZWRcblx0XHRcdC8vIHNhdmUpLCBpbmRlcGVuZGVudCBvZiBgc3RvcmFnZS5jYWxsYmFja3NgLCB3aGljaCBjaGFuZ2VzIG9uIGV2ZXJ5IGtleXN0cm9rZS5cblx0XHRcdC8vIFVzZWQgb25seSB0byBnYXRlIHRoZSBTYXZlIGJ1dHRvbiDigJQgc2VlIGBoYXNVbnNhdmVkQ2FsbGJhY2tzQ2hhbmdlYC5cblx0XHRcdHNhdmVkQ2FsbGJhY2tzOiAnc3RyaW5nJyA9PT0gdHlwZW9mIHRoaXMuaW5jb21pbmcuY2FsbGJhY2tzID8gdGhpcy5pbmNvbWluZy5jYWxsYmFja3MgOiAnJyxcblx0XHRcdGJsb2NrZWQ6IEFycmF5LmlzQXJyYXkoIHRoaXMuaW5jb21pbmcuYmxvY2tlZCApID8gWyAuLi50aGlzLmluY29taW5nLmJsb2NrZWQgXSA6IFtdLFxuXHRcdFx0Ly8gV2hpbGUgdGhlIG9uZS10aW1lIGxlZ2FjeS1taWdyYXRpb24gc2NhbiBpcyBzdGlsbCByZXN0b3JpbmcgcHJldmlvdXNseSB1c2VkXG5cdFx0XHQvLyBjYWxsYmFjayBuYW1lcyAob25seSBwb3NzaWJsZSBvbiBhIGxhcmdlIHNpdGUsIHdoZXJlIGl0IHNwYW5zIHNldmVyYWxcblx0XHRcdC8vIGBhZG1pbl9pbml0YCByZXF1ZXN0cyksIHRoaXMgdGFiIGlzIHJlYWQtb25seTogYGltcG9ydF90cnVzdGVkX2NhbGxiYWNrcygpYFxuXHRcdFx0Ly8gb25seSBtZXJnZXMgaXRzIHJlc3VsdHMgaW50byB0aGUgdHJ1c3RlZCBsaXN0IG9uY2UgdGhlIHdob2xlIHNjYW4gY29tcGxldGVzLFxuXHRcdFx0Ly8gYW5kIGl0IGRvZXMgYW4gdW5sb2NrZWQgcmVhZC1tZXJnZS13cml0ZSBvZiB0aGUgc2FtZSBvcHRpb24gYSBtYW51YWwgc2F2ZVxuXHRcdFx0Ly8gaGVyZSB3b3VsZCByYWNlIGFnYWluc3QgKHJldmlldyBmaW5kaW5nLCBpc3N1ZXMtdHJhY2tlciAjMjAzNjEgZm9sbG93LXVwKS5cblx0XHRcdC8vIFRoZSBzZXJ2ZXIgZW5mb3JjZXMgdGhpcyBpbmRlcGVuZGVudGx5IGluIGBvbl9nZXRfcmVxdWVzdCgpYDsgdGhpcyBmbGFnIG9ubHlcblx0XHRcdC8vIGRyaXZlcyB0aGUgd2FpdC1zdGF0ZSBVSSBhbmQgaXMgcmUtc3luY2VkIGJ5IGBwb2xsTWlncmF0aW9uU3RhdHVzKClgLlxuXHRcdFx0bWlncmF0aW9uSW5Qcm9ncmVzczogISEgdGhpcy5pbmNvbWluZy5taWdyYXRpb25JblByb2dyZXNzLFxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdGxvYWRpbmc6IHt9LFxuXHRcdFx0cGVuZGluZ1NhdmU6IGZhbHNlLFxuXHRcdFx0cmVqZWN0ZWQ6IHt9LFxuXHRcdFx0cG9sbFRpbWVyOiBudWxsLFxuXHRcdH07XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0aGFzUmVqZWN0ZWQoKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoIHRoaXMucmVqZWN0ZWQgKS5sZW5ndGggPiAwO1xuXHRcdH0sXG5cdFx0Ly8gYHJlamVjdGVkYCBpcyBhIHBsYWluIG9iamVjdCwgc28gYSB0cmFpbGluZyBcIjsgXCIgYmFrZWQgaW50byBlYWNoIHJlbmRlcmVkIGl0ZW1cblx0XHQvLyAocmF0aGVyIHRoYW4gam9pbmVkIGJldHdlZW4gaXRlbXMpIGxlZnQgYSBzdHJheSBcIjsgXCIgYWZ0ZXIgdGhlIGxhc3Qg4oCUIGFuZCBvbmx5IOKAlFxuXHRcdC8vIGVudHJ5IHdoZW5ldmVyIGV4YWN0bHkgb25lIG5hbWUgd2FzIHJlamVjdGVkIChyZXZpZXcgZmluZGluZywgaXNzdWVzLXRyYWNrZXJcblx0XHQvLyAjMjAzNjEgZm9sbG93LXVwKS4gTGlzdGluZyBuYW1lcyBzZXBhcmF0ZWx5IGxldHMgdGhlIHRlbXBsYXRlIG9ubHkgYWRkIHRoZVxuXHRcdC8vIHNlcGFyYXRvciBiZXR3ZWVuIGl0ZW1zLCBub3QgYWZ0ZXIgdGhlIGZpbmFsIG9uZS5cblx0XHRyZWplY3RlZE5hbWVzKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKCB0aGlzLnJlamVjdGVkICk7XG5cdFx0fSxcblx0XHQvLyBHYXRlcyB0aGUgU2F2ZSBidXR0b246IHNhdmluZyBvbmx5IGhhcHBlbnMgb24gYW4gZXhwbGljaXQgY2xpY2sgbm93IChub1xuXHRcdC8vIGJsdXItdHJpZ2dlcmVkIGF1dG9zYXZlKSwgc3BlY2lmaWNhbGx5IHNvIGFuIGFjY2lkZW50YWwgc2VsZWN0LWFsbC1hbmQtZGVsZXRlIGluXG5cdFx0Ly8gdGhlIHRleHRhcmVhIGNhbid0IHdpcGUgdGhlIHdob2xlIHRydXN0ZWQgYWxsb3dsaXN0IHdpdGhvdXQgdGhlIGFkbWluXG5cdFx0Ly8gZGVsaWJlcmF0ZWx5IGNsaWNraW5nIFNhdmUgb24gdGhlIGVtcHRpZWQgY29udGVudCAocmV2aWV3IGZpbmRpbmcsIGlzc3Vlcy10cmFja2VyXG5cdFx0Ly8gIzIwMzYxIGZvbGxvdy11cCkuXG5cdFx0aGFzVW5zYXZlZENhbGxiYWNrc0NoYW5nZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnN0b3JhZ2UuY2FsbGJhY2tzICE9PSB0aGlzLnNhdmVkQ2FsbGJhY2tzO1xuXHRcdH0sXG5cdH0sXG5cdGNyZWF0ZWQoKSB7XG5cdFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHRoaXMub25DaGFuZ2VTdGF0ZS5iaW5kKCB0aGlzICkgKTtcblxuXHRcdGlmICggdGhpcy5taWdyYXRpb25JblByb2dyZXNzICkge1xuXHRcdFx0dGhpcy5zY2hlZHVsZVBvbGwoKTtcblx0XHR9XG5cdH0sXG5cdGJlZm9yZURlc3Ryb3koKSB7XG5cdFx0dGhpcy5jbGVhclBvbGwoKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGdldFNhdmFibGVEYXRhKCkge1xuXHRcdFx0cmV0dXJuIHsgY2FsbGJhY2tzOiB0aGlzLnN0b3JhZ2UuY2FsbGJhY2tzIH07XG5cdFx0fSxcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogdGhpcy5nZXRTYXZhYmxlRGF0YSgpLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG9uU2F2ZURvbmVTdWNjZXNzKCByZXNwb25zZSApIHtcblx0XHRcdHRoaXMucmVqZWN0ZWQgPSByZXNwb25zZT8uZGF0YT8ucmVqZWN0ZWQgfHwge307XG5cblx0XHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiByZXNwb25zZT8uZGF0YT8uY2FsbGJhY2tzICkge1xuXHRcdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgJ2NhbGxiYWNrcycsIHJlc3BvbnNlLmRhdGEuY2FsbGJhY2tzICk7XG5cdFx0XHRcdHRoaXMuc2F2ZWRDYWxsYmFja3MgPSByZXNwb25zZS5kYXRhLmNhbGxiYWNrcztcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uQ2hhbmdlU3RhdGUoIHsgc3RhdGUsIHNsdWcgfSApIHtcblx0XHRcdGlmICggJ3Nzci1jYWxsYmFja3MtdGFiJyAhPT0gc2x1ZyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nID0ge307XG5cdFx0XHRcdHRoaXMuJHNldCggdGhpcywgJ2lzTG9hZGluZycsIGZhbHNlICk7XG5cblx0XHRcdFx0aWYgKCB0aGlzLnBlbmRpbmdTYXZlICkge1xuXHRcdFx0XHRcdHRoaXMucGVuZGluZ1NhdmUgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xuXHRcdH0sXG5cdFx0b25JbnB1dCggdmFsdWUgKSB7XG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgJ2NhbGxiYWNrcycsIHZhbHVlICk7XG5cdFx0fSxcblx0XHRvblNhdmVDYWxsYmFja3MoKSB7XG5cdFx0XHRpZiAoICEgdGhpcy5oYXNVbnNhdmVkQ2FsbGJhY2tzQ2hhbmdlIHx8IHRoaXMubWlncmF0aW9uSW5Qcm9ncmVzcyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMubG9hZGluZywgJ2NhbGxiYWNrcycsIHRydWUgKTtcblxuXHRcdFx0aWYgKCB0aGlzLmlzTG9hZGluZyApIHtcblx0XHRcdFx0dGhpcy5wZW5kaW5nU2F2ZSA9IHRydWU7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcblx0XHR9LFxuXHRcdHNjaGVkdWxlUG9sbCgpIHtcblx0XHRcdHRoaXMuY2xlYXJQb2xsKCk7XG5cdFx0XHR0aGlzLnBvbGxUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCB0aGlzLnBvbGxNaWdyYXRpb25TdGF0dXMsIE1JR1JBVElPTl9QT0xMX0lOVEVSVkFMX01TICk7XG5cdFx0fSxcblx0XHRjbGVhclBvbGwoKSB7XG5cdFx0XHRpZiAoIHRoaXMucG9sbFRpbWVyICkge1xuXHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aGlzLnBvbGxUaW1lciApO1xuXHRcdFx0XHR0aGlzLnBvbGxUaW1lciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyBSZXVzZXMgdGhlIHNhbWUgc2F2ZSBlbmRwb2ludCBhcyBhIHJlYWQtb25seSBzdGF0dXMgY2hlY2s6IG9taXR0aW5nIGBjYWxsYmFja3NgXG5cdFx0Ly8gZnJvbSB0aGUgcmVxdWVzdCBib2R5IG1lYW5zIGBTc3JfQ2FsbGJhY2tzX0hhbmRsZXI6Om9uX2dldF9yZXF1ZXN0KClgIG5ldmVyXG5cdFx0Ly8gYXR0ZW1wdHMgdG8gd3JpdGUgYW55dGhpbmcg4oCUIGl0IGp1c3QgcmVwb3J0cyB3aGV0aGVyIHRoZSBtaWdyYXRpb24gaXMgc3RpbGxcblx0XHQvLyBydW5uaW5nLiBPbmNlIGl0IHJlcG9ydHMgZmluaXNoZWQsIHRoZSBwYWdlIGlzIHJlbG9hZGVkIHJhdGhlciB0aGFuIHBhdGNoaW5nXG5cdFx0Ly8gc3RhdGUgaW4gcGxhY2U6IHRoZSBtaWdyYXRpb24gY2FuIGFsc28gaGF2ZSBjaGFuZ2VkIHRoZSBcIkZvcm1zIFVzaW5nIEJsb2NrZWRcblx0XHQvLyBGdW5jdGlvbnNcIiBsaXN0IChgU3NyX0Jsb2NrZWRfQ2FsbGJhY2tfVXNhZ2VzYCksIHdoaWNoIHRoaXMgZW5kcG9pbnQgZG9lc24ndFxuXHRcdC8vIHJldHVybiwgc28gYSBmdWxsIHJlbG9hZCBpcyB0aGUgc2ltcGxlc3Qgd2F5IHRvIGd1YXJhbnRlZSBldmVyeXRoaW5nIG9uIHRoZSBwYWdlXG5cdFx0Ly8g4oCUIG5vdCBqdXN0IHRoZSBjYWxsYmFja3MgdGV4dGFyZWEg4oCUIHJlZmxlY3RzIHdoYXQgdGhlIG1pZ3JhdGlvbiBwcm9kdWNlZC5cblx0XHRwb2xsTWlncmF0aW9uU3RhdHVzKCkge1xuXHRcdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdFx0dXJsOiB3aW5kb3cuYWpheHVybCxcblx0XHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0YWN0aW9uOiAnamV0X2ZiX3NhdmVfdGFiX19zc3ItY2FsbGJhY2tzLXRhYicsXG5cdFx0XHRcdFx0X25vbmNlOiB3aW5kb3c/LkpldEZCUGFnZUNvbmZpZ1BhY2thZ2U/Lm5vbmNlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSApLmRvbmUoICggcmVzcG9uc2UgKSA9PiB7XG5cdFx0XHRcdGlmICggcmVzcG9uc2U/LmRhdGE/Lm1pZ3JhdGlvbkluUHJvZ3Jlc3MgKSB7XG5cdFx0XHRcdFx0dGhpcy5zY2hlZHVsZVBvbGwoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9ICkuZmFpbCggKCkgPT4ge1xuXHRcdFx0XHQvLyBUcmFuc2llbnQgbmV0d29yayBoaWNjdXAg4oCUIGtlZXAgd2FpdGluZyByYXRoZXIgdGhhbiBnZXR0aW5nIHN0dWNrLlxuXHRcdFx0XHR0aGlzLnNjaGVkdWxlUG9sbCgpO1xuXHRcdFx0fSApO1xuXHRcdH0sXG5cdH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5qZmItc3NyLWNhbGxiYWNrcy10ZXh0YXJlYSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xuXHRtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZCB7XG5cdGNvbG9yOiAjZGMyNjI2O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHBhZGRpbmc6IDAgMjBweDtcblx0bWFyZ2luOiAtMTBweCAwIDIwcHg7XG59XG5cbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZF9fbGlzdCB7XG5cdG1hcmdpbjogNHB4IDAgMDtcblx0cGFkZGluZzogMDtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkX19saXN0IGxpIHtcblx0bWFyZ2luLWJvdHRvbTogMnB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE0cHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkX19saXN0IGxpOjpiZWZvcmUge1xuXHRjb250ZW50OiAn4oCTJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xufVxuXG4uamZiLXNzci1ibG9ja2VkX19saXN0IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uamZiLXNzci1ibG9ja2VkX19saXN0IGxpIHtcblx0bWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uamZiLXNzci1ibG9ja2VkX19mb3JtIHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmpmYi1zc3ItYmxvY2tlZF9fbWV0YSB7XG5cdGNvbG9yOiAjNjQ2OTcwO1xuXHRtYXJnaW46IDAgNnB4O1xufVxuXG4uamZiLXNzci1ibG9ja2VkX19tZXRhIGNvZGUge1xuXHRjb2xvcjogI2RjMjYyNjtcbn1cblxuLmpmYi1zc3ItbWlncmF0aW9uLXdhaXQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0Z2FwOiAxMnB4O1xuXHRwYWRkaW5nOiAxNnB4IDIwcHg7XG5cdGJhY2tncm91bmQ6ICNmMGY2ZmM7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjM2RjZjE7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmpmYi1zc3ItbWlncmF0aW9uLXdhaXRfX3NwaW5uZXIge1xuXHRmbGV4OiAwIDAgYXV0bztcblx0d2lkdGg6IDE4cHg7XG5cdGhlaWdodDogMThweDtcblx0bWFyZ2luLXRvcDogMnB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAjYzNkY2YxO1xuXHRib3JkZXItdG9wLWNvbG9yOiAjMjI3MWIxO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGFuaW1hdGlvbjogamZiLXNzci1taWdyYXRpb24td2FpdC1zcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGpmYi1zc3ItbWlncmF0aW9uLXdhaXQtc3BpbiB7XG5cdHRvIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSggMzYwZGVnICk7XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGN4LXZ1aS1zd2l0Y2hlclxuXHRcdFx0bmFtZT1cImVuYWJsZV91c2VyX2pvdXJuZXlcIlxuXHRcdFx0OmxhYmVsPVwibG9hZGluZy5lbmFibGVfdXNlcl9qb3VybmV5ID8gYCR7bGFiZWwuZW5hYmxlX3VzZXJfam91cm5leX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmVuYWJsZV91c2VyX2pvdXJuZXlcIlxuXHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5lbmFibGVfdXNlcl9qb3VybmV5XCJcblx0XHRcdDp3cmFwcGVyLWNzcz1cIlsgJ2VxdWFsd2lkdGgnIF1cIlxuXHRcdFx0OnZhbHVlPVwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2VuYWJsZV91c2VyX2pvdXJuZXknICkgPyBzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgOiBmYWxzZVwiXG5cdFx0XHQ6ZGlzYWJsZWQ9XCJpc0xvYWRpbmdcIlxuXHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnZW5hYmxlX3VzZXJfam91cm5leScsICRldmVudCApXCJcblx0XHQ+PC9jeC12dWktc3dpdGNoZXI+XG5cblx0XHQ8dGVtcGxhdGUgdi1pZj1cInN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leVwiPlxuXHRcdFx0PGN4LXZ1aS1zZWxlY3Rcblx0XHRcdFx0bmFtZT1cInN0b3JhZ2VfdHlwZVwiXG5cdFx0XHRcdGNsYXNzPVwidXNlci1qb3VybmV5LXNlbGVjdFwiXG5cdFx0XHRcdDpsYWJlbD1cImxvYWRpbmcuc3RvcmFnZV90eXBlID8gYCR7bGFiZWwuc3RvcmFnZV90eXBlfSAobG9hZGluZy4uLilgIDogbGFiZWwuc3RvcmFnZV90eXBlXCJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5zdG9yYWdlX3R5cGVcIlxuXHRcdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdFx0Om9wdGlvbnMtbGlzdD1cIltcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YWx1ZTogJ2xvY2FsJyxcblx0XHRcdFx0XHRcdGxhYmVsOiAnTG9jYWwgU3RvcmFnZSdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZhbHVlOiAnc2Vzc2lvbicsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ1Nlc3Npb24gU3RvcmFnZSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cIlxuXHRcdFx0XHQ6dmFsdWU9XCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnc3RvcmFnZV90eXBlJyApID8gc3RvcmFnZS5zdG9yYWdlX3R5cGUgOiAnbG9jYWwnXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiIXN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leSB8fCBpc0xvYWRpbmdcIlxuXHRcdFx0XHRAaW5wdXQ9XCJjaGFuZ2VWYWwoICdzdG9yYWdlX3R5cGUnLCAkZXZlbnQgKVwiXG5cdFx0XHQ+PC9jeC12dWktc2VsZWN0PlxuXHRcdFx0PGN4LXZ1aS1jb21wb25lbnQtd3JhcHBlciA+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjeC12dWktY29tcG9uZW50X19sYWJlbFwiPlBsZWFzZSBub3RlITwvZGl2PlxuXHRcdFx0XHQ8ZGl2PjxiPlNlc3Npb24gU3RvcmFnZTo8L2I+IFRoZSBpbmZvcm1hdGlvbiBpcyBrZXB0IG9ubHkgd2hpbGUgdGhpcyB0YWIgb3Igd2luZG93IGlzIG9wZW4uIFJlbG9hZGluZyB0aGUgcGFnZSBpcyBmaW5lLCBidXQgYXMgc29vbiBhcyB5b3UgY2xvc2UgdGhlIHRhYiwgdGhlIGRhdGEgZGlzYXBwZWFycy4gT3RoZXIgdGFicyBvciB3aW5kb3dzIG9mIHRoZSBzaXRlIGNhbuKAmXQgc2VlIGl0LiBZb3UgY2FuIHN0aWxsIGdldCBpdCBiYWNrIGJ5IHByZXNzaW5nIEN0cmzigK8r4oCvU2hpZnTigK8r4oCvVCAo4oCcUmVvcGVu4oCvQ2xvc2Vk4oCvVGFi4oCdKTwvZGl2PlxuXHRcdFx0XHQ8ZGl2PjxiPkxvY2FsIFN0b3JhZ2U6PC9iPiBUaGUgaW5mb3JtYXRpb24gc3RheXMgbXVjaCBsb25nZXLigJRldmVyeSB0YWIgb3Igd2luZG93IG9mIHRoaXMgc2l0ZSBjYW4gdXNlIGl0LCBhbmQgaXQgcmVtYWlucyBldmVuIGFmdGVyIHlvdSBjbG9zZSBhbmQgcmVvcGVuIHRoZSBicm93c2VyLCB1bnRpbCB5b3UgY2xlYXIgaXQgeW91cnNlbGYuPC9kaXY+XG5cdFx0XHQ8L2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcj5cblxuXHRcdFx0PGN4LXZ1aS1zZWxlY3Rcblx0XHRcdFx0bmFtZT1cImNsZWFyX2FmdGVyX3N1Ym1pdFwiXG5cdFx0XHRcdGNsYXNzPVwidXNlci1qb3VybmV5LXNlbGVjdFwiXG5cdFx0XHRcdDpsYWJlbD1cImxvYWRpbmcuY2xlYXJfYWZ0ZXJfc3VibWl0ID8gYCR7bGFiZWwuY2xlYXJfYWZ0ZXJfc3VibWl0fSAobG9hZGluZy4uLilgIDogbGFiZWwuY2xlYXJfYWZ0ZXJfc3VibWl0XCJcblx0XHRcdFx0OmRlc2NyaXB0aW9uPVwiaGVscC5jbGVhcl9hZnRlcl9zdWJtaXRcIlxuXHRcdFx0XHQ6d3JhcHBlci1jc3M9XCJbICdlcXVhbHdpZHRoJyBdXCJcblx0XHRcdFx0Om9wdGlvbnMtbGlzdD1cIltcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YWx1ZTogJ2Fsd2F5cycsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ0FmdGVyIGFueSBzdWJtaXQgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSknXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YWx1ZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0bGFiZWw6ICdBZnRlciBzdWNjZXNzZnVsIHN1Ym1pdCBvbmx5J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVwiXG5cdFx0XHRcdDp2YWx1ZT1cInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdjbGVhcl9hZnRlcl9zdWJtaXQnICkgPyBzdG9yYWdlLmNsZWFyX2FmdGVyX3N1Ym1pdCA6ICdzdWNjZXNzJ1wiXG5cdFx0XHRcdDpkaXNhYmxlZD1cIiFzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgfHwgaXNMb2FkaW5nXCJcblx0XHRcdFx0QGlucHV0PVwiY2hhbmdlVmFsKCAnY2xlYXJfYWZ0ZXJfc3VibWl0JywgJGV2ZW50IClcIlxuXHRcdFx0PjwvY3gtdnVpLXNlbGVjdD5cblx0XHQ8L3RlbXBsYXRlPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7XG5cdGhlbHAsXG5cdGxhYmVsLFxufSBmcm9tICcuL3NvdXJjZSc7XG5cbmNvbnN0IHsgU2F2ZVRhYkJ5QWpheCwgaTE4biB9ID0gd2luZG93LkpldEZCTWl4aW5zO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICd1c2VyLWpvdXJuZXktdGFiJyxcblx0cHJvcHM6IHtcblx0XHRpbmNvbWluZzoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDogKCkgPT4gKHt9KSxcblx0XHR9LFxuXHR9LFxuXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgaTE4biBdLFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYWJlbCwgaGVscCxcblx0XHRcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcblx0XHRcdGlzTG9hZGluZzogZmFsc2UsXG5cdFx0XHRsb2FkaW5nOiB7fSxcblx0XHR9O1xuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCB0aGlzLm9uQ2hhbmdlU3RhdGUuYmluZCggdGhpcyApICk7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRSZXF1ZXN0T25TYXZlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YTogeyAuLi50aGlzLnN0b3JhZ2UgfSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRvbkNoYW5nZVN0YXRlKCB7IHN0YXRlLCBzbHVnIH0gKSB7XG5cdFx0XHRpZiAoICd1c2VyLWpvdXJuZXktdGFiJyAhPT0gc2x1ZyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcblx0XHRcdFx0dGhpcy5sb2FkaW5nID0ge307XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHNldCggdGhpcywgJ2lzTG9hZGluZycsIHN0YXRlID09PSAnYmVnaW4nICk7XG5cdFx0fSxcblx0XHRjaGFuZ2VWYWwoIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0aWYgKCB0aGlzLmlzTG9hZGluZyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsIG5hbWUsIHZhbHVlICk7XG5cdFx0XHR0aGlzLiRzZXQoIHRoaXMubG9hZGluZywgbmFtZSwgdHJ1ZSApO1xuXG5cdFx0XHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApO1xuXHRcdH0sXG5cdH0sXG59O1xuXG48L3NjcmlwdD5cbjxzdHlsZT5cbi51c2VyLWpvdXJuZXktc2VsZWN0IHNlbGVjdC5jeC12dWktc2VsZWN0IHtcblx0cGFkZGluZzogNnB4IDI0cHggNnB4IDEycHg7XG59XG48L3N0eWxlPiIsImltcG9ydCBodWJzcG90IGZyb20gJy4vcHJvQWRkb25zL2h1YnNwb3QnO1xuaW1wb3J0IGFkZHJlc3NBdXRvY29tcGxldGUgZnJvbSAnLi9wcm9BZGRvbnMvYWRkcmVzc0F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgY29udmVydGtpdCBmcm9tICcuL3Byb0FkZG9ucy9jb252ZXJ0a2l0JztcbmltcG9ydCBtYWlsZXJsaXRlIGZyb20gJy4vcHJvQWRkb25zL21haWxlcmxpdGUnO1xuaW1wb3J0IG1vb3NlbmQgZnJvbSAnLi9wcm9BZGRvbnMvbW9vc2VuZCc7XG5pbXBvcnQgc3RyaXBlIGZyb20gJy4vcHJvR2F0ZXdheXMvc3RyaXBlJztcblxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IHdwLmhvb2tzO1xuXG5jb25zdCBhZGRvbnMgPSBbXG5cdGFkZHJlc3NBdXRvY29tcGxldGUsXG5cdGh1YnNwb3QsXG5cdGNvbnZlcnRraXQsXG5cdG1haWxlcmxpdGUsXG5cdG1vb3NlbmQsXG5dO1xuXG5jb25zdCBnYXRld2F5cyA9IFtcblx0c3RyaXBlXG5dO1xuXG5jb25zdCBnZXRNb2R1bGVzTmFtZXMgPSBtb2R1bGVzID0+IG1vZHVsZXMubWFwKCBpdGVtID0+IChcblx0aXRlbS5jb21wb25lbnQubmFtZVxuKSApO1xuXG5cbmNvbnN0IHJ1biA9ICgpID0+IHtcblx0YWRkRmlsdGVyKCAnamV0LmZiLnJlZ2lzdGVyLnNldHRpbmdzLXBhZ2UudGFicycsICdqZXQtZm9ybS1idWlsZGVyJywgbW9kdWxlcyA9PiB7XG5cdFx0Y29uc3QgbmFtZXMgPSBnZXRNb2R1bGVzTmFtZXMoIG1vZHVsZXMgKTtcblxuXHRcdGZvciAoIGNvbnN0IGFkZG9uIG9mIGFkZG9ucyApIHtcblx0XHRcdGlmICggbmFtZXMuaW5jbHVkZXMoIGFkZG9uLmNvbXBvbmVudC5uYW1lICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bW9kdWxlcy5wdXNoKCBhZGRvbiApO1xuXHRcdH1cblxuXHRcdHJldHVybiBtb2R1bGVzO1xuXHR9LCAxMDAwICk7XG5cblx0YWRkRmlsdGVyKCAnamV0LmZiLnJlZ2lzdGVyLmdhdGV3YXlzJywgJ2pldC1mb3JtLWJ1aWxkZXInLCBtb2R1bGVzID0+IHtcblx0XHRjb25zdCBuYW1lcyA9IGdldE1vZHVsZXNOYW1lcyggbW9kdWxlcyApO1xuXG5cdFx0Zm9yICggY29uc3QgZ2F0ZXdheSBvZiBnYXRld2F5cyApIHtcblx0XHRcdGlmICggbmFtZXMuaW5jbHVkZXMoIGdhdGV3YXkuY29tcG9uZW50Lm5hbWUgKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRtb2R1bGVzLnB1c2goIGdhdGV3YXkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbW9kdWxlcztcblx0fSwgMTAwMCApO1xufTtcblxuaWYgKCAhIHdpbmRvdz8uSmV0RkJQYWdlQ29uZmlnPy5pc19hY3RpdmUgKSB7XG5cdHJ1bigpO1xufVxuXG4iLCJpbXBvcnQgVGFiIGZyb20gJy4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZSc7XG5cbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnQsXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgbGFiZWwgPSB7XG5cdGtleTogX18oICdTaXRlIEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRzZWNyZXQ6IF9fKCAnU2VjcmV0IEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxufTtcblxuZXhwb3J0IHsgbGFiZWwgfTsiLCJpbXBvcnQgVGFiIGZyb20gJy4vcmVDQVBUQ0hBdjMudnVlJztcblxuY29uc3QgY29tcG9uZW50ID0gVGFiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXBvbmVudCxcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdHRocmVzaG9sZDogX18oICdTY29yZSBUaHJlc2hvbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdHRocmVzaG9sZDogX18oXG5cdFx0YEl0IHNob3VsZCBiZSBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgZGVmYXVsdCAwLjUgKDEuMCBpcyB2ZXJ5IGxpa2VseSBhIGdvb2QgaW50ZXJhY3Rpb24sIDAuMCBpcyB2ZXJ5IGxpa2VseSBhIGJvdCkuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0KSxcblx0YXBpUHJlZjogX18oICdSZWdpc3RlciByZUNBUFRDSEEgdjMga2V5cycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRhcGlMaW5rTGFiZWw6IF9fKCAnaGVyZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRhcGlMaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYWRtaW4vY3JlYXRlJ1xufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCJpbXBvcnQgVGFiIGZyb20gJy4vaENhcHRjaGEudnVlJztcblxuY29uc3QgY29tcG9uZW50ID0gVGFiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXBvbmVudCxcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0a2V5OiBfXyggJ1NpdGUgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdHNlY3JldDogX18oICdTZWNyZXQgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5cbmV4cG9ydCB7IGxhYmVsIH07IiwiaW1wb3J0IFRhYiBmcm9tICcuL3R1cm5zdGlsZS52dWUnO1xuXG5jb25zdCBjb21wb25lbnQgPSBUYWI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29tcG9uZW50LFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRrZXk6IF9fKCAnU2l0ZSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cblxuZXhwb3J0IHsgbGFiZWwgfTsiLCJpbXBvcnQgVGFiIGZyb20gJy4vUGF5cGFsVGFiLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlID0gX18oICdQYXlQYWwgR2F0ZXdheSBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbmNvbnN0IGNvbXBvbmVudCA9IFRhYjtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudCxcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0Y2xpZW50X2lkOiBfXyggJ0NsaWVudCBJRCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRzZWNyZXQ6IF9fKCAnU2VjcmV0IEtleScsICdqZXQtZm9ybS1idWlsZGVyJyApXG59O1xuXG5jb25zdCBoZWxwID0ge307XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHRpdGxlOiBfXyggJ0FkZHJlc3MgQXV0b2NvbXBsZXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGNvbXBvbmVudDoge1xuXHRcdG5hbWU6ICdqZmItYWRkcmVzcy10YWInLFxuXHR9LFxuXHRkaXNhYmxlZDogdHJ1ZSxcblx0aWNvbjogSXNQUk9JY29uLFxufTsiLCJpbXBvcnQgSXNQUk9JY29uIGZyb20gJy4uL0lzUFJPSWNvbic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0dGl0bGU6IF9fKCAnQ29udmVydEtpdCBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0Y29tcG9uZW50OiB7XG5cdFx0bmFtZTogJ2NvbnZlcnQta2l0LXRhYicsXG5cdH0sXG5cdGRpc2FibGVkOiB0cnVlLFxuXHRpY29uOiBJc1BST0ljb24sXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0aXRsZTogX18oICdIdWJTcG90IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRjb21wb25lbnQ6IHtcblx0XHRuYW1lOiAnaHVic3BvdCcsXG5cdH0sXG5cdGRpc2FibGVkOiB0cnVlLFxuXHRpY29uOiBJc1BST0ljb24sXG59OyIsImltcG9ydCBJc1BST0ljb24gZnJvbSAnLi4vSXNQUk9JY29uJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0aXRsZTogX18oICdNYWlsZXJMaXRlIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRjb21wb25lbnQ6IHtcblx0XHRuYW1lOiAnbWFpbGVyLWxpdGUtdGFiJyxcblx0fSxcblx0ZGlzYWJsZWQ6IHRydWUsXG5cdGljb246IElzUFJPSWNvbixcbn07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHRpdGxlOiBfXyggJ01vb3NlbmQgQVBJJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGNvbXBvbmVudDoge1xuXHRcdG5hbWU6ICdtb29zZW5kJyxcblx0fSxcblx0ZGlzYWJsZWQ6IHRydWUsXG5cdGljb246IElzUFJPSWNvbixcbn07IiwiaW1wb3J0IElzUFJPSWNvbiBmcm9tICcuLi9Jc1BST0ljb24nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHRpdGxlOiBfXyggJ1N0cmlwZSBHYXRld2F5IEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRjb21wb25lbnQ6IHtcblx0XHRuYW1lOiAnc3RyaXBlJ1xuXHR9LFxuXHRkaXNhYmxlZDogdHJ1ZSxcblx0aWNvbjogSXNQUk9JY29uLFxufSIsImltcG9ydCBDYXB0Y2hhVGFiIGZyb20gJy4vQ2FwdGNoYVRhYi52dWUnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB0aXRsZSAgICAgICAgID0gX18oICdDYXB0Y2hhIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgICAgID0gQ2FwdGNoYVRhYjtcbmNvbnN0IGRpc3BsYXlCdXR0b24gPSBmYWxzZTtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudCxcblx0ZGlzcGxheUJ1dHRvbixcbn07IiwiaW1wb3J0IEdldFJlc3BvbnNlVGFiIGZyb20gJy4vR2V0UmVzcG9uc2VUYWIudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgPSBfXyggJ0dldFJlc3BvbnNlIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gR2V0UmVzcG9uc2VUYWI7XG5cbmV4cG9ydCB7XG5cdHRpdGxlLFxuXHRjb21wb25lbnRcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0YXBpX2tleTogX18oICdBUEkgS2V5JywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRhcGlQcmVmOiBfXyggJ0hvdyB0byBvYnRhaW4geW91ciBHZXRSZXNwb25zZSBBUEkgS2V5PyBNb3JlIGluZm8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0YXBpTGluazogJ2h0dHBzOi8vYXBwLmdldHJlc3BvbnNlLmNvbS9hcGknXG59O1xuXG5leHBvcnQgeyBsYWJlbCwgaGVscCB9OyIsImltcG9ydCBNYWlsQ2hpbXBUYWIgZnJvbSAnLi9NYWlsQ2hpbXBUYWIudnVlJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgdGl0bGUgPSBfXyggJ01haWxDaGltcCBBUEknLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbmNvbnN0IGNvbXBvbmVudCA9IE1haWxDaGltcFRhYjtcblxuZXhwb3J0IHtcblx0dGl0bGUsXG5cdGNvbXBvbmVudFxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRhcGlfa2V5OiBfXyggJ0FQSSBLZXknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGFwaVByZWY6IF9fKCAnSG93IHRvIG9idGFpbiB5b3VyIE1haWxDaGltcCBBUEkgS2V5PyBNb3JlIGluZm8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0YXBpTGlua0xhYmVsOiBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0YXBpTGluazogJ2h0dHBzOi8vbWFpbGNoaW1wLmNvbS9oZWxwL2Fib3V0LWFwaS1rZXlzLydcbn07XG5cbmV4cG9ydCB7IGxhYmVsLCBoZWxwIH07IiwiaW1wb3J0IE9wdGlvbnNUYWIgZnJvbSAnLi9PcHRpb25zVGFiLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlICAgICAgICAgPSBfXyggJ09wdGlvbnMnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcbmNvbnN0IGNvbXBvbmVudCAgICAgPSBPcHRpb25zVGFiO1xuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xuXG5leHBvcnQge1xuXHR0aXRsZSxcblx0Y29tcG9uZW50LFxuXHRkaXNwbGF5QnV0dG9uLFxufTsiLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRlbmFibGVfZGV2X21vZGU6IF9fKCAnRW5hYmxlIERldi1Nb2RlJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdGRpc2FibGVfbmV4dF9idXR0b246IF9fKCAnRGlzYWJsZSBcIk5leHRcIiBidXR0b24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0Y2xlYXJfb25fdW5pbnN0YWxsOiBfXyhcblx0XHQnQ2xlYXIgcGx1Z2luIGRhdGEgYWZ0ZXIgdGhlIHVuaW5zdGFsbCcsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRzY3JvbGxfb25fbmV4dDogX18oXG5cdFx0J1Njcm9sbCB0byB0aGUgdG9wIG9uIHBhZ2UgY2hhbmdlJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdGF1dG9fZm9jdXM6IF9fKFxuXHRcdCdBdXRvbWF0aWMgZm9jdXMnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0Zm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5OiBfXyhcblx0XHQnRm9ybSBSZWNvcmRzIEFjY2VzcyBDYXBhYmlsaXR5Jyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdHNzcl92YWxpZGF0aW9uX21ldGhvZDogX18oXG5cdFx0J1NlcnZlciBzaWRlIHZhbGlkYXRpb24gbWV0aG9kJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdHNlbGZfcHJvbW90YWJsZV9yb2xlczogX18oXG5cdFx0J1NlbGYtUHJvbW90YWJsZSBSb2xlcycsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxufTtcblxuY29uc3QgaGVscCA9IHtcblx0ZW5hYmxlX2Rldl9tb2RlOiBfXyhcblx0XHQnV2l0aCBkZXZlbG9wZXIgbW9kZSBlbmFibGVkLCBlcnJvcnMgZnJvbSB0aGUgZm9ybSB3aWxsIGJlIHNhdmVkLicsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRkaXNhYmxlX25leHRfYnV0dG9uOiBfXyhcblx0XHRgSWYgdGhpcyBvcHRpb24gaXMgYWN0aXZlLCB0aGUgTmV4dCBidXR0b24gaW4gYSBtdWx0aS1zdGVwIGZvcm0gd29uJ3QgYmVjb21lIGNsaWNrYWJsZSB1bnRpbCBhbGwgdGhlIHJlcXVpcmVkIGZpZWxkcyBhcmUgY29tcGxldGVkLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRjbGVhcl9vbl91bmluc3RhbGw6IF9fKFxuXHRcdGBJZiB0aGlzIG9wdGlvbiBpcyBhY3RpdmUsIHdoZW4gdGhlIHBsdWdpbiBpcyBkZWxldGVkLCBhbGwgY3VzdG9tIHNxbC10YWJsZXMsIGFsbCBvcHRpb25zIGFuZCBmaWxlcyB3aWxsIGFsc28gYmUgZGVsZXRlZC4gSW4gcGFydGljdWxhciwgdGhvc2UgdGhhdCB3ZXJlIHVwbG9hZGVkIHVzaW5nIE1lZGlhIEZpZWxkLmAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRzY3JvbGxfb25fbmV4dDogX18oXG5cdFx0YEF1dG9tYXRpYyBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgZm9ybSB3aGVuIHN3aXRjaGluZyBiZXR3ZWVuIGZvcm0gcGFnZXMuYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdGF1dG9fZm9jdXM6IF9fKFxuXHRcdGBJbmRpY2F0ZXMgaW52YWxpZCBmaWVsZCBhbmQgcHJldmVudHMgdGhlIHVzZXIgZnJvbSBnb2luZyB0byB0aGUgbmV4dCBwYWdlIG9yIHN1Ym1pdHRpbmcgdGhlIGZvcm0gdW5sZXNzIGZpbGxlZC5gLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0KSxcblx0Zm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5OiBfXyhcblx0XHQnQnkgZGVmYXVsdCBhbnkgRm9ybSBSZWNvcmRzIGF2YWlsYWJsZSBvbmx5IGZvciB1c2VycyB3aXRoIGBtYW5hZ2Vfb3B0aW9uc2AgY2FwYWJpbGl0eS4gSGVyZSB5b3UgY2FuIG92ZXJ3cml0ZSBpdCB3aXRoIGFueSBjYXBhYmlsaXR5IHlvdSB3YW50LiBNb3JlIGFib3V0IGNhcGFiaWxpdGllcyA8YSBocmVmPVwiaHR0cHM6Ly93b3JkcHJlc3Mub3JnL3N1cHBvcnQvYXJ0aWNsZS9yb2xlcy1hbmQtY2FwYWJpbGl0aWVzL1wiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+Jyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdHNzcl92YWxpZGF0aW9uX21ldGhvZDogX18oXG5cdFx0J1NlbGVjdCBob3cgdGhlIHNlcnZlci1zaWRlIHZhbGlkYXRpb24gcmVxdWVzdCB3aWxsIGJlIG1hZGUg4oCTIHZpYSBXUCBSRVNUIEFQSSwgYWRtaW4tYWpheC5waHAsIG9yIHRocm91Z2ggdGhlIFVSTCBvZiB0aGUgY3VycmVudCBwYWdlLicsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHRzZWxmX3Byb21vdGFibGVfcm9sZXM6IF9fKFxuXHRcdCdVc2VycyB3aXRob3V0IHRoZSBgcHJvbW90ZV91c2Vyc2AgY2FwYWJpbGl0eSBjYW4ga2VlcCB0aGVpciBjdXJyZW50IHJvbGUgb3Igc3dpdGNoIG9ubHkgdG8gcm9sZXMgZnJvbSB0aGlzIGxpc3QgaW4gVXBkYXRlIFVzZXIgYWN0aW9ucy4gTGVhdmUgaXQgZW1wdHkgdG8gc2tpcCBzZWxmLXNlcnZpY2Ugcm9sZSBjaGFuZ2VzLicsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTtcbiIsImltcG9ydCBUYWIgZnJvbSAnLi9QYXltZW50c0dhdGV3YXlzLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlID0gX18oICdQYXltZW50cyBHYXRld2F5cycsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ID0gVGFiO1xuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xuXG5leHBvcnQge1xuXHR0aXRsZSxcblx0Y29tcG9uZW50LFxuXHRkaXNwbGF5QnV0dG9uXG59IiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCBsYWJlbCA9IHtcblx0dXNlX2dhdGV3YXlzOiBfXyggJ0VuYWJsZSBHYXRld2F5cycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRlbmFibGVfdGVzdF9tb2RlOiBfXyggJ0VuYWJsZSBUZXN0IE1vZGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGVuYWJsZV90ZXN0X21vZGU6IF9fKFxuXHRcdGBUaGlzIG9wdGlvbiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvZ2F0ZXdheXMvcGF5cGFsL3NhbmRib3gtbW9kZTwvY29kZT4gZmlsdGVyLiBBcyBvZiByaWdodCBub3csIHdvcmtzIG9ubHkgZm9yIFBheVBhbCBwYXltZW50IHN5c3RlbWAsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxuXHR1c2VfZ2F0ZXdheXM6IF9fKFxuXHRcdGBBY3RpdmF0ZSBwYXltZW50IGdhdGV3YXlzIGZvciB0aGUgZm9ybXMuIFRoaXMgb3B0aW9uIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgPGNvZGU+amV0LWZvcm0tYnVpbGRlci9hbGxvdy1nYXRld2F5czwvY29kZT4gZmlsdGVyYCxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG59O1xuXG5leHBvcnQge1xuXHRsYWJlbCxcblx0aGVscCxcbn07IiwiaW1wb3J0IFBob25lRmllbGRUYWIgZnJvbSAnLi9QaG9uZUZpZWxkVGFiJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuZXhwb3J0IGNvbnN0IHRpdGxlICAgICA9IF9fKCAnSXBpbmZvIEFQSScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuZXhwb3J0IGNvbnN0IGNvbXBvbmVudCA9IFBob25lRmllbGRUYWI7XG4iLCJjb25zdCB7IHNwcmludGYsIF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBoZWxwID0ge1xuXHRpcGluZm9fdG9rZW46IHNwcmludGYoXG5cdFx0Ly8gdHJhbnNsYXRvcnM6ICUxJHMgLSBpcGluZm8uaW8gd2Vic2l0ZSBVUkwsICUyJHMgLSB0b2tlbiBkYXNoYm9hcmQgVVJMXG5cdFx0X18oXG5cdFx0XHQnU2lnbiBpbiBhdCA8YSBocmVmPVwiJTEkc1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5pcGluZm8uaW88L2E+IGFuZCBnZXQgeW91ciBBUEkgdG9rZW4gPGEgaHJlZj1cIiUyJHNcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+aGVyZTwvYT4uJyxcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdCksXG5cdFx0J2h0dHBzOi8vaXBpbmZvLmlvJyxcblx0XHQnaHR0cHM6Ly9pcGluZm8uaW8vZGFzaGJvYXJkL3Rva2VuJ1xuXHQpLFxufTtcblxuY29uc3QgbGFiZWwgPSB7XG5cdGlwaW5mb190b2tlbjogX18oICdBUEkgVG9rZW4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmV4cG9ydCB7IGhlbHAsIGxhYmVsIH07XG4iLCJpbXBvcnQgU3NyQ2FsbGJhY2tzVGFiIGZyb20gJy4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlICAgICAgICAgPSBfXyggJ0FsbG93ZWQgU2VydmVyLVNpZGUgQ2FsbGJhY2tzJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG5jb25zdCBjb21wb25lbnQgICAgID0gU3NyQ2FsbGJhY2tzVGFiO1xuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xuXG5leHBvcnQge1xuXHR0aXRsZSxcblx0Y29tcG9uZW50LFxuXHRkaXNwbGF5QnV0dG9uLFxufTtcbiIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3QgbGFiZWwgPSB7XG5cdGNhbGxiYWNrczogX18oICdBbGxvd2VkIFNlcnZlci1TaWRlIENhbGxiYWNrcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRibG9ja2VkOiBfXyggJ0Zvcm1zIFVzaW5nIEJsb2NrZWQgRnVuY3Rpb25zJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG59O1xuXG5jb25zdCBoZWxwID0ge1xuXHRjYWxsYmFja3M6IF9fKFxuXHRcdCdFbnRlciBjdXN0b20gUEhQIGZ1bmN0aW9uIG5hbWVzIGhlcmUgKG9uZSBwZXIgbGluZSkgdG8gYWxsb3cgdGhlbSBpbiB5b3VyIGZvcm1zLiBCdWlsdC1pbiBmdW5jdGlvbnMgYXJlIGFscmVhZHkgYWxsb3dlZC4gQWx3YXlzIGNsaWNrIFwiU2F2ZVwiIHRvIGFwcGx5IGNoYW5nZXMuJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdGJsb2NrZWQ6IF9fKFxuXHRcdCdUaGVzZSBmb3JtcyB1c2UgdW5zYWZlIHZhbGlkYXRpb24gcnVsZXMgdGhhdCBhcmUgc3RyaWN0bHkgYmxvY2tlZC4gVG8gZml4IHRoZW0sIGVkaXQgdGhlIGZvcm0gYW5kIGNoYW5nZSBvciByZW1vdmUgdGhlIFNlcnZlci1TaWRlIGNhbGxiYWNrIGZ1bmN0aW9uLiBUaGUgZm9ybSB3aWxsIGF1dG9tYXRpY2FsbHkgZGlzYXBwZWFyIGZyb20gdGhpcyBsaXN0IG9uY2Ugc2F2ZWQuJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdCksXG5cdG1pZ3JhdGlvbkluUHJvZ3Jlc3M6IF9fKFxuXHRcdCdKZXRGb3JtQnVpbGRlciBpcyBzY2FubmluZyB5b3VyIGV4aXN0aW5nIGZvcm1zIGFuZCBhdXRvbWF0aWNhbGx5IHJlc3RvcmluZyB0aGUgY3VzdG9tIFNlcnZlci1TaWRlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGV5IGFscmVhZHkgcmVsaWVkIG9uLiBUaGlzIHBhZ2Ugd2lsbCB1cGRhdGUgb24gaXRzIG93biBvbmNlIHRoYXQgZmluaXNoZXMg4oCUIG5vIG5lZWQgdG8gcmVsb2FkLicsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHQpLFxufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTtcbiIsImltcG9ydCBVc2VySm91cm5leVRhYiBmcm9tICcuL1VzZXJKb3VybmV5VGFiLnZ1ZSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHRpdGxlICAgICAgICAgPSBfXyggJ1VzZXIgSm91cm5leScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xuY29uc3QgY29tcG9uZW50ICAgICA9IFVzZXJKb3VybmV5VGFiO1xuY29uc3QgZGlzcGxheUJ1dHRvbiA9IGZhbHNlO1xuXG5leHBvcnQge1xuXHR0aXRsZSxcblx0Y29tcG9uZW50LFxuXHRkaXNwbGF5QnV0dG9uLFxufTsiLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmNvbnN0IGxhYmVsID0ge1xuXHRlbmFibGVfdXNlcl9qb3VybmV5OiBfXyggJ0VuYWJsZSBVc2VyIEpvdXJuZXkgVHJhY2tpbmcnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0c3RvcmFnZV90eXBlOiBfXyggJ1N0b3JhZ2UgVHlwZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRjbGVhcl9hZnRlcl9zdWJtaXQ6IF9fKCAnQ2xlYXIgSm91cm5leSBBZnRlciBTdWJtaXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcbn07XG5cbmNvbnN0IGhlbHAgPSB7XG5cdGVuYWJsZV91c2VyX2pvdXJuZXk6IF9fKFxuXHRcdCdUcmFjayB0aGUgdXNlcuKAmXMgam91cm5leSBhY3Jvc3MgdGhlIHdlYnNpdGUgYW5kIHNhdmUgaXQgaW4gdGhlIGJyb3dzZXIuJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0KSxcblx0c3RvcmFnZV90eXBlOiBfXyhcblx0XHQnQ2hvb3NlIHdoZXJlIHRvIHN0b3JlIHRoZSB1c2VyIGpvdXJuZXkgZGF0YScsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdCksXG5cdGNsZWFyX2FmdGVyX3N1Ym1pdDogX18oXG5cdFx0J1doZW4gdG8gY2xlYXIgdGhlIGpvdXJuZXkgZGF0YSBhZnRlciBmb3JtIHN1Ym1pc3Npb24nLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHQpLFxufTtcblxuZXhwb3J0IHsgbGFiZWwsIGhlbHAgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmpmYi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDJlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLmpmYi1jb250ZW50LW1haW4ge1xuICBmbGV4OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWVcIixcIndlYnBhY2s6Ly8uLy4uL1NldHRpbmdzUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBd0tBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ3ZLRDtBRHlLQztFQUNDLE9BQUE7QUN2S0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLmpmYi1jb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDJlbTtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFxuXFx0Ji1tYWluIHtcXG5cXHRcXHRmbGV4OiAxO1xcblxcdH1cXG59XFxuXCIsXCIuamZiLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMmVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uamZiLWNvbnRlbnQtbWFpbiB7XFxuICBmbGV4OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX2Jhbm5lci51c2VmdWwge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIHtcbiAgICB3aWR0aDogNTAlO1xufVxufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEQ0RDREQ7XG4gIHBhZGRpbmctdG9wOiAyM3B4O1xufVxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbms6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMDA3Q0JBO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGE6aG92ZXIge1xuICBjb2xvcjogIzA2NkVBMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIGEgLmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMjhweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9zaWRlYmFyL1NldHRpbmdzU2lkZUJhci52dWVcIixcIndlYnBhY2s6Ly8uLy4uL1NldHRpbmdzU2lkZUJhci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBK0VDO0VBQ0Msa0JBQUE7QUM5RUY7QURpRkM7RUFDQyxXQUFBO0FDL0VGO0FEaUZFO0FBSEQ7SUFJRSxVQUFBO0FDOUVEO0FBQ0Y7QURnRkU7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUM5RUg7QURpRkU7RUFDQyxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQy9FSDtBRGlGRztFQUNDLGdCQUFBO0FDL0VKO0FEa0ZHO0VBQ0MsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNoRko7QURrRkk7RUFDQyxjQUFBO0VBQ0EsMEJBQUE7QUNoRkw7QURtRkk7RUFDQyxrQkFBQTtBQ2pGTFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlIHtcXG5cXG5cXHQmX19iYW5uZXIudXNlZnVsIHtcXG5cXHRcXHRwYWRkaW5nOiAyMHB4IDMwcHg7XFxuXFx0fVxcblxcblxcdCZfX3BhbmVsLmhlbHAge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG5cXHRcXHRcXHR3aWR0aDogY2FsYygxMDAlIC8gMik7XFxuXFx0XFx0fVxcblxcblxcdFxcdC5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLWNvbnRlbnQge1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAxMnB4O1xcblxcdFxcdFxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRENEQ0REO1xcblxcdFxcdFxcdHBhZGRpbmctdG9wOiAyM3B4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHQuaGVscC1jZW50ZXItbGluayB7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMjJweDtcXG5cXG5cXHRcXHRcXHQmOmxhc3QtY2hpbGQge1xcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDA7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdGEge1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxOHB4O1xcblxcdFxcdFxcdFxcdGNvbG9yOiAjMDA3Q0JBO1xcblxcdFxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogIzA2NkVBMjtcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHRcXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0XFx0LmhlbHAtY2VudGVyLWxpbmstaWNvbiB7XFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyOHB4O1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXFxuXCIsXCIuamV0LWZvcm0tYnVpbGRlci1wYWdlX19iYW5uZXIudXNlZnVsIHtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0RDRENERDtcXG4gIHBhZGRpbmctdG9wOiAyM3B4O1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xcbn1cXG4uamV0LWZvcm0tYnVpbGRlci1wYWdlX19wYW5lbC5oZWxwIC5oZWxwLWNlbnRlci1saW5rOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogIzAwN0NCQTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpldC1mb3JtLWJ1aWxkZXItcGFnZV9fcGFuZWwuaGVscCAuaGVscC1jZW50ZXItbGluayBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDY2RUEyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5qZXQtZm9ybS1idWlsZGVyLXBhZ2VfX3BhbmVsLmhlbHAgLmhlbHAtY2VudGVyLWxpbmsgYSAuaGVscC1jZW50ZXItbGluay1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMjhweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbnNwYW5bZGF0YS12LTE0YmFhMjMwXSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDdDQkE7XG5cdHBhZGRpbmc6IDAuMWVtIDAuM2VtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xuXHRsZXR0ZXItc3BhY2luZzogMDtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL0lzUFJPSWNvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9CQTtDQUNBLHlCQUFBO0NBQ0Esb0JBQUE7Q0FDQSx5QkFBQTtDQUNBLGtCQUFBO0NBQ0EsWUFBQTtDQUNBLGVBQUE7Q0FDQSxrQkFBQTtDQUNBLGdCQUFBO0NBQ0EsaUJBQUE7Q0FDQSxpQkFBQTtDQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcdDxzcGFuPnt7IF9fKCAnUHJvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3NwYW4+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmNvbnN0IHsgaTE4biB9ID0gSmV0RkJNaXhpbnM7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcblxcdG5hbWU6ICdJc1BST0ljb24nLFxcblxcdG1peGluczogWyBpMThuIF0sXFxuXFx0cHJvcHM6IHtcXG5cXHRcXHRpc0FjdGl2ZToge1xcblxcdFxcdFxcdHR5cGU6IEJvb2xlYW4sXFxuXFx0XFx0XFx0ZGVmYXVsdDogZmFsc2UsXFxuXFx0XFx0fSxcXG5cXHR9LFxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG5zcGFuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0JBO1xcblxcdHBhZGRpbmc6IDAuMWVtIDAuM2VtO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDE2cHg7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDA7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuLmpmYi1oYXMtZXJyb3IgLmN4LXZ1aS1pbnB1dFtkYXRhLXYtOWRjNDJkZTZdLFxuLmpmYi1oYXMtZXJyb3IgaW5wdXRbZGF0YS12LTlkYzQyZGU2XSB7XG4gIGJvcmRlci1jb2xvcjogI2RjMjYyNiAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmpmYi1maWVsZC1lcnJvcltkYXRhLXYtOWRjNDJkZTZdIHtcbiAgbWFyZ2luOiA2cHggMCAxMnB4O1xuICBjb2xvcjogI2RjMjYyNjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9hZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9vcHRpb25zL09wdGlvbnNUYWIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxUkE7O0VBRUEsZ0NBQUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcdDxkaXY+XFxuXFx0XFx0PGN4LXZ1aS1zd2l0Y2hlclxcblxcdFxcdFxcdG5hbWU9XFxcImVuYWJsZV9kZXZfbW9kZVxcXCJcXG5cXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxuXFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLmVuYWJsZV9kZXZfbW9kZSA/IGAke2xhYmVsLmVuYWJsZV9kZXZfbW9kZX0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmVuYWJsZV9kZXZfbW9kZVxcXCJcXG5cXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuZW5hYmxlX2Rldl9tb2RlXFxcIlxcblxcdFxcdFxcdDp2YWx1ZT1cXFwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2VuYWJsZV9kZXZfbW9kZScgKSA/IHN0b3JhZ2UuZW5hYmxlX2Rldl9tb2RlIDogZmFsc2VcXFwiXFxuXFx0XFx0XFx0OmRpc2FibGVkPVxcXCJpc0xvYWRpbmdcXFwiXFxuXFx0XFx0XFx0QGlucHV0PVxcXCJjaGFuZ2VWYWwoICdlbmFibGVfZGV2X21vZGUnLCAkZXZlbnQgKVxcXCJcXG5cXHRcXHQ+PC9jeC12dWktc3dpdGNoZXI+XFxuXFx0XFx0PGN4LXZ1aS1zd2l0Y2hlclxcblxcdFxcdFxcdG5hbWU9XFxcImNsZWFyX29uX3VuaW5zdGFsbFxcXCJcXG5cXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxuXFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLmNsZWFyX29uX3VuaW5zdGFsbCA/IGAke2xhYmVsLmNsZWFyX29uX3VuaW5zdGFsbH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmNsZWFyX29uX3VuaW5zdGFsbFxcXCJcXG5cXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuY2xlYXJfb25fdW5pbnN0YWxsXFxcIlxcblxcdFxcdFxcdDp2YWx1ZT1cXFwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2NsZWFyX29uX3VuaW5zdGFsbCcgKSA/IHN0b3JhZ2UuY2xlYXJfb25fdW5pbnN0YWxsIDogZmFsc2VcXFwiXFxuXFx0XFx0XFx0OmRpc2FibGVkPVxcXCJpc0xvYWRpbmdcXFwiXFxuXFx0XFx0XFx0QGlucHV0PVxcXCJjaGFuZ2VWYWwoICdjbGVhcl9vbl91bmluc3RhbGwnLCAkZXZlbnQgKVxcXCJcXG5cXHRcXHQ+PC9jeC12dWktc3dpdGNoZXI+XFxuXFx0XFx0PGN4LXZ1aS1pbnB1dFxcblxcdFxcdFxcdG5hbWU9XFxcImZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eVxcXCJcXG5cXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxuXFx0XFx0XFx0OnNpemU9XFxcIidmdWxsd2lkdGgnXFxcIlxcblxcdFxcdFxcdDpsYWJlbD1cXFwibG9hZGluZy5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHkgPyBgJHtsYWJlbC5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHl9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHlcXFwiXFxuXFx0XFx0XFx0OmRlc2NyaXB0aW9uPVxcXCJoZWxwLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eVxcXCJcXG5cXHRcXHRcXHQ6dmFsdWU9XFxcInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHknICkgPyBzdG9yYWdlLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSA6ICdtYW5hZ2Vfb3B0aW9ucydcXFwiXFxuXFx0XFx0XFx0OmRpc2FibGVkPVxcXCJpc0xvYWRpbmdcXFwiXFxuXFx0XFx0XFx0QGlucHV0PVxcXCJjaGFuZ2VWYWwoICdmb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHknLCAkZXZlbnQgKVxcXCJcXG5cXHRcXHQvPlxcblxcdFxcdDxjeC12dWktc2VsZWN0XFxuXFx0XFx0XFx0bmFtZT1cXFwic3NyX3ZhbGlkYXRpb25fbWV0aG9kXFxcIlxcblxcdFxcdFxcdDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG5cXHRcXHRcXHQ6c2l6ZT1cXFwiJ2Z1bGx3aWR0aCdcXFwiXFxuXFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLnNzcl92YWxpZGF0aW9uX21ldGhvZCA/IGAke2xhYmVsLnNzcl92YWxpZGF0aW9uX21ldGhvZH0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLnNzcl92YWxpZGF0aW9uX21ldGhvZFxcXCJcXG5cXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuc3NyX3ZhbGlkYXRpb25fbWV0aG9kXFxcIlxcblxcdFxcdFxcdDp2YWx1ZT1cXFwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3Nzcl92YWxpZGF0aW9uX21ldGhvZCcgKSA/IHN0b3JhZ2Uuc3NyX3ZhbGlkYXRpb25fbWV0aG9kIDogJ3Jlc3QnXFxcIlxcblxcdFxcdFxcdDpvcHRpb25zLWxpc3Q9XFxcInNlbGVjdE9wdGlvbnNcXFwiXFxuXFx0XFx0XFx0OmRpc2FibGVkPVxcXCJpc0xvYWRpbmdcXFwiXFxuXFx0XFx0XFx0QGlucHV0PVxcXCJjaGFuZ2VWYWwoICdzc3JfdmFsaWRhdGlvbl9tZXRob2QnLCAkZXZlbnQgKVxcXCJcXG5cXHRcXHQ+PC9jeC12dWktc2VsZWN0PlxcblxcdFxcdDxjeC12dWktZi1zZWxlY3RcXG5cXHRcXHRcXHRuYW1lPVxcXCJzZWxmX3Byb21vdGFibGVfcm9sZXNcXFwiXFxuXFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLnNlbGZfcHJvbW90YWJsZV9yb2xlcyA/IGAke2xhYmVsLnNlbGZfcHJvbW90YWJsZV9yb2xlc30gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLnNlbGZfcHJvbW90YWJsZV9yb2xlc1xcXCJcXG5cXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuc2VsZl9wcm9tb3RhYmxlX3JvbGVzXFxcIlxcblxcdFxcdFxcdDp2YWx1ZT1cXFwic2VsZWN0ZWRTZWxmUHJvbW90YWJsZVJvbGVzXFxcIlxcblxcdFxcdFxcdDpvcHRpb25zLWxpc3Q9XFxcImF2YWlsYWJsZVJvbGVzXFxcIlxcblxcdFxcdFxcdDptdWx0aXBsZT1cXFwidHJ1ZVxcXCJcXG5cXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcImlzTG9hZGluZ1xcXCJcXG5cXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxuXFx0XFx0XFx0OnNpemU9XFxcIidmdWxsd2lkdGgnXFxcIlxcblxcdFxcdFxcdEBvbi1jaGFuZ2U9XFxcImNoYW5nZVNlbGZQcm9tb3RhYmxlUm9sZXMoICRldmVudCApXFxcIlxcblxcdFxcdD48L2N4LXZ1aS1mLXNlbGVjdD5cXG5cXHRcXHQ8Y3gtdnVpLWNvbXBvbmVudC13cmFwcGVyXFxuXFx0XFx0XFx0OmxhYmVsPVxcXCJfXyggJ0Zvcm0gQWNjZXNzaWJpbGl0eScsICdqZXQtZm9ybS1idWlsZGVyJyApXFxcIlxcblxcdFxcdFxcdDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG5cXHRcXHQvPlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImN4LXZ1aS1pbm5lci1wYW5lbFxcXCI+XFxuXFx0XFx0XFx0PGN4LXZ1aS1zd2l0Y2hlclxcblxcdFxcdFxcdFxcdG5hbWU9XFxcImRpc2FibGVfbmV4dF9idXR0b25cXFwiXFxuXFx0XFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdFxcdDpsYWJlbD1cXFwibG9hZGluZy5kaXNhYmxlX25leHRfYnV0dG9uID8gYCR7bGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvbn0gKGxvYWRpbmcuLi4pYCA6IGxhYmVsLmRpc2FibGVfbmV4dF9idXR0b25cXFwiXFxuXFx0XFx0XFx0XFx0OmRlc2NyaXB0aW9uPVxcXCJoZWxwLmRpc2FibGVfbmV4dF9idXR0b25cXFwiXFxuXFx0XFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZGlzYWJsZV9uZXh0X2J1dHRvbicgKSA/IHN0b3JhZ2UuZGlzYWJsZV9uZXh0X2J1dHRvbiA6IHRydWVcXFwiXFxuXFx0XFx0XFx0XFx0OmRpc2FibGVkPVxcXCJpc0xvYWRpbmdcXFwiXFxuXFx0XFx0XFx0XFx0QGlucHV0PVxcXCJjaGFuZ2VWYWwoICdkaXNhYmxlX25leHRfYnV0dG9uJywgJGV2ZW50IClcXFwiXFxuXFx0XFx0XFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxcblxcdFxcdFxcdDxjeC12dWktc3dpdGNoZXJcXG5cXHRcXHRcXHRcXHRuYW1lPVxcXCJzY3JvbGxfb25fbmV4dFxcXCJcXG5cXHRcXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxuXFx0XFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLnNjcm9sbF9vbl9uZXh0ID8gYCR7bGFiZWwuc2Nyb2xsX29uX25leHR9IChsb2FkaW5nLi4uKWAgOiBsYWJlbC5zY3JvbGxfb25fbmV4dFxcXCJcXG5cXHRcXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuc2Nyb2xsX29uX25leHRcXFwiXFxuXFx0XFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnc2Nyb2xsX29uX25leHQnICkgPyBzdG9yYWdlLnNjcm9sbF9vbl9uZXh0IDogZmFsc2VcXFwiXFxuXFx0XFx0XFx0XFx0OmRpc2FibGVkPVxcXCJpc0xvYWRpbmdcXFwiXFxuXFx0XFx0XFx0XFx0QGlucHV0PVxcXCJjaGFuZ2VWYWwoICdzY3JvbGxfb25fbmV4dCcsICRldmVudCApXFxcIlxcblxcdFxcdFxcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cXG5cXHRcXHRcXHQ8Y3gtdnVpLXN3aXRjaGVyXFxuXFx0XFx0XFx0XFx0bmFtZT1cXFwiYXV0b19mb2N1c1xcXCJcXG5cXHRcXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxuXFx0XFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLmF1dG9fZm9jdXMgPyBgJHtsYWJlbC5hdXRvX2ZvY3VzfSAobG9hZGluZy4uLilgIDogbGFiZWwuYXV0b19mb2N1c1xcXCJcXG5cXHRcXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuYXV0b19mb2N1c1xcXCJcXG5cXHRcXHRcXHRcXHQ6dmFsdWU9XFxcInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdhdXRvX2ZvY3VzJyApID8gc3RvcmFnZS5hdXRvX2ZvY3VzIDogZmFsc2VcXFwiXFxuXFx0XFx0XFx0XFx0OmRpc2FibGVkPVxcXCJpc0xvYWRpbmdcXFwiXFxuXFx0XFx0XFx0XFx0QGlucHV0PVxcXCJjaGFuZ2VWYWwoICdhdXRvX2ZvY3VzJywgJGV2ZW50IClcXFwiXFxuXFx0XFx0XFx0PjwvY3gtdnVpLXN3aXRjaGVyPlxcblxcdFxcdDwvZGl2PlxcblxcbiAgICA8Y3gtdnVpLWNvbXBvbmVudC13cmFwcGVyXFxuICAgICAgICA6bGFiZWw9XFxcIl9fKCAnRm9ybSBSZXF1ZXN0IEFyZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKVxcXCJcXG4gICAgICAgIDp3cmFwcGVyLWNzcz1cXFwiWyAnZXF1YWx3aWR0aCcgXVxcXCJcXG4gICAgLz5cXG5cXG4gICAgPGN4LXZ1aS1pbnB1dFxcbiAgICAgICAgbmFtZT1cXFwiZ2ZiX3JlcXVlc3RfYXJnc19rZXlcXFwiXFxuICAgICAgICA6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnLCBlcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc19rZXkgPyAnamZiLWhhcy1lcnJvcicgOiAnJyBdXFxcIlxcbiAgICA6c2l6ZT1cXFwiJ2Z1bGx3aWR0aCdcXFwiXFxuICAgIDpsYWJlbD1cXFwiJ1JlcXVlc3Qga2V5J1xcXCJcXG4gICAgOmRlc2NyaXB0aW9uPVxcXCInVW5pcXVlIGZvcm0gcGFyYW1ldGVyIChrZXkpJ1xcXCJcXG4gICAgOnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZ2ZiX3JlcXVlc3RfYXJnc19rZXknICkgPyBzdG9yYWdlLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5IDogJzExMTEnXFxcIlxcbiAgICA6ZGlzYWJsZWQ9XFxcImlzTG9hZGluZ1xcXCJcXG4gICAgQGlucHV0PVxcXCJjaGFuZ2VWYWwoICdnZmJfcmVxdWVzdF9hcmdzX2tleScsICRldmVudCApXFxcIlxcbiAgICAvPlxcbiAgICA8ZGl2IHYtaWY9XFxcImVycm9ycy5nZmJfcmVxdWVzdF9hcmdzX2tleVxcXCIgY2xhc3M9XFxcImpmYi1maWVsZC1lcnJvclxcXCI+XFxuICAgICAge3sgZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5IH19XFxuICAgIDwvZGl2PlxcblxcbiAgICA8Y3gtdnVpLWlucHV0XFxuICAgICAgICBuYW1lPVxcXCJnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlXFxcIlxcbiAgICAgICAgOndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJywgZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUgPyAnamZiLWhhcy1lcnJvcicgOiAnJyBdXFxcIlxcbiAgICA6c2l6ZT1cXFwiJ2Z1bGx3aWR0aCdcXFwiXFxuICAgIDpsYWJlbD1cXFwiJ1JlcXVlc3QgdmFsdWUnXFxcIlxcbiAgICA6ZGVzY3JpcHRpb249XFxcIidVbmlxdWUgZm9ybSBwYXJhbWV0ZXIgKHZhbHVlKSdcXFwiXFxuICAgIDp2YWx1ZT1cXFwic3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2dmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUnICkgPyBzdG9yYWdlLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUgOiAnMjIyMidcXFwiXFxuICAgIDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nXFxcIlxcbiAgICBAaW5wdXQ9XFxcImNoYW5nZVZhbCggJ2dmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUnLCAkZXZlbnQgKVxcXCJcXG4gICAgLz5cXG4gICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZVxcXCIgY2xhc3M9XFxcImpmYi1maWVsZC1lcnJvclxcXCI+XFxuICAgICAge3sgZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUgfX1cXG4gICAgPC9kaXY+XFxuXFx0PC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7XFxuXFx0aGVscCxcXG5cXHRsYWJlbCxcXG59IGZyb20gJy4vc291cmNlJztcXG5cXG5cXG5jb25zdCB7IFNhdmVUYWJCeUFqYXgsIGkxOG4gfSA9IHdpbmRvdy5KZXRGQk1peGlucztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuXFx0bmFtZTogJ29wdGlvbnMtdGFiJyxcXG5cXHRwcm9wczoge1xcblxcdFxcdGluY29taW5nOiB7XFxuXFx0XFx0XFx0dHlwZTogT2JqZWN0LFxcblxcdFxcdFxcdGRlZmF1bHQ6IHt9LFxcblxcdFxcdH0sXFxuXFx0fSxcXG5cXHRtaXhpbnM6IFsgU2F2ZVRhYkJ5QWpheCwgaTE4biBdLFxcblxcdGRhdGEoKSB7XFxuXFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRsYWJlbCwgaGVscCxcXG5cXHRcXHRcXHRzdG9yYWdlOiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggdGhpcy5pbmNvbWluZyApICksXFxuXFx0XFx0XFx0aXNMb2FkaW5nOiBmYWxzZSxcXG5cXHRcXHRcXHRsb2FkaW5nOiB7fSxcXG5cXHRcXHRcXHRwZW5kaW5nU2F2ZTogZmFsc2UsXFxuXFx0XFx0XFx0ZXJyb3JzOiB7XFxuXFx0XFx0XFx0XFx0Z2ZiX3JlcXVlc3RfYXJnc19rZXk6ICcnLFxcblxcdFxcdFxcdFxcdGdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWU6ICcnLFxcblxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0c2VsZWN0T3B0aW9uczogW1xcblxcdFxcdFxcdFxcdHsgdmFsdWU6ICdyZXN0JywgbGFiZWw6ICggJ1Jlc3QgQVBJJyApIH0sXFxuXFx0XFx0XFx0XFx0eyB2YWx1ZTogJ2FkbWluX2FqYXgnLCBsYWJlbDogKCAnQWRtaW4gQWpheCcgKSB9LFxcblxcdFxcdFxcdFxcdHsgdmFsdWU6ICdzZWxmJywgbGFiZWw6ICggJ1NlbGYnICkgfSxcXG5cXHRcXHRcXHRdLFxcblxcdFxcdH07XFxuXFx0fSxcXG5cXHRjb21wdXRlZDoge1xcblxcdFxcdGF2YWlsYWJsZVJvbGVzKCkge1xcblxcdFxcdFxcdHJldHVybiB0aGlzLnN0b3JhZ2UuYXZhaWxhYmxlX3JvbGVzIHx8IFtdO1xcblxcdFxcdH0sXFxuXFx0XFx0c2VsZWN0ZWRTZWxmUHJvbW90YWJsZVJvbGVzKCkge1xcblxcdFxcdFxcdHJldHVybiB0aGlzLnN0b3JhZ2Uuc2VsZl9wcm9tb3RhYmxlX3JvbGVzIHx8IFtdO1xcblxcdFxcdH0sXFxuXFx0fSxcXG5cXHRjcmVhdGVkKCkge1xcblxcdFxcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCB0aGlzLm9uQ2hhbmdlU3RhdGUuYmluZCggdGhpcyApICk7XFxuXFx0fSxcXG5cXHRtZXRob2RzOiB7XFxuXFx0XFx0Z2V0U2F2YWJsZURhdGEoKSB7XFxuXFx0XFx0XFx0Y29uc3Qge1xcblxcdFxcdFxcdFxcdGVuYWJsZV9kZXZfbW9kZSxcXG5cXHRcXHRcXHRcXHRjbGVhcl9vbl91bmluc3RhbGwsXFxuXFx0XFx0XFx0XFx0Zm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5LFxcblxcdFxcdFxcdFxcdHNzcl92YWxpZGF0aW9uX21ldGhvZCxcXG5cXHRcXHRcXHRcXHRzZWxmX3Byb21vdGFibGVfcm9sZXMsXFxuXFx0XFx0XFx0XFx0ZGlzYWJsZV9uZXh0X2J1dHRvbixcXG5cXHRcXHRcXHRcXHRzY3JvbGxfb25fbmV4dCxcXG5cXHRcXHRcXHRcXHRhdXRvX2ZvY3VzLFxcblxcdFxcdFxcdFxcdGdmYl9yZXF1ZXN0X2FyZ3Nfa2V5LFxcblxcdFxcdFxcdFxcdGdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUsXFxuXFx0XFx0XFx0fSA9IHRoaXMuc3RvcmFnZTtcXG5cXG5cXHRcXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdFxcdGVuYWJsZV9kZXZfbW9kZSxcXG5cXHRcXHRcXHRcXHRjbGVhcl9vbl91bmluc3RhbGwsXFxuXFx0XFx0XFx0XFx0Zm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5LFxcblxcdFxcdFxcdFxcdHNzcl92YWxpZGF0aW9uX21ldGhvZCxcXG5cXHRcXHRcXHRcXHRzZWxmX3Byb21vdGFibGVfcm9sZXM6IEFycmF5LmlzQXJyYXkoIHNlbGZfcHJvbW90YWJsZV9yb2xlcyApICYmICEgc2VsZl9wcm9tb3RhYmxlX3JvbGVzLmxlbmd0aFxcblxcdFxcdFxcdFxcdFxcdD8gWyAnJyBdXFxuXFx0XFx0XFx0XFx0XFx0OiBzZWxmX3Byb21vdGFibGVfcm9sZXMsXFxuXFx0XFx0XFx0XFx0ZGlzYWJsZV9uZXh0X2J1dHRvbixcXG5cXHRcXHRcXHRcXHRzY3JvbGxfb25fbmV4dCxcXG5cXHRcXHRcXHRcXHRhdXRvX2ZvY3VzLFxcblxcdFxcdFxcdFxcdGdmYl9yZXF1ZXN0X2FyZ3Nfa2V5LFxcblxcdFxcdFxcdFxcdGdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUsXFxuXFx0XFx0XFx0fTtcXG5cXHRcXHR9LFxcblxcdFxcdGdldFJlcXVlc3RPblNhdmUoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRcXHRkYXRhOiB0aGlzLmdldFNhdmFibGVEYXRhKCksXFxuXFx0XFx0XFx0fTtcXG5cXHRcXHR9LFxcblxcdFxcdG9uQ2hhbmdlU3RhdGUoIHsgc3RhdGUsIHNsdWcgfSApIHtcXG5cXHRcXHRcXHRpZiAoICdvcHRpb25zLXRhYicgIT09IHNsdWcgKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRpZiAoICdlbmQnID09PSBzdGF0ZSApIHtcXG5cXHRcXHRcXHRcXHR0aGlzLmxvYWRpbmcgPSB7fTtcXG5cXHRcXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBmYWxzZSApO1xcblxcblxcdFxcdFxcdFxcdGlmICggdGhpcy5wZW5kaW5nU2F2ZSApIHtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLnBlbmRpbmdTYXZlID0gZmFsc2U7XFxuXFx0XFx0XFx0XFx0XFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcXG5cXHRcXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0XFx0cmV0dXJuO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xcblxcdFxcdH0sXFxuXFx0XFx0dmFsaWRhdGVGaWVsZCggbmFtZSwgdmFsdWUgKSB7XFxuXFx0XFx0XFx0aWYgKCBuYW1lICE9PSAnZ2ZiX3JlcXVlc3RfYXJnc19rZXknICYmIG5hbWUgIT09ICdnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlJyApIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gdHJ1ZTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0Y29uc3QgdmFsID0gU3RyaW5nKCB2YWx1ZSA/PyAnJyApO1xcblxcdFxcdFxcdGNvbnN0IG9ubHlEaWdpdHMgPSAvXlxcXFxkKyQvLnRlc3QoIHZhbCApO1xcblxcblxcdFxcdFxcdGlmICggb25seURpZ2l0cyApIHtcXG5cXHRcXHRcXHRcXHRjb25zdCBtc2cgPSB0aGlzLl9fKFxcblxcdFxcdFxcdFxcdFxcdCdNdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGxldHRlciAoQeKAk1opLiBOdW1iZXJzIG9ubHkgYXJlIG5vdCBhbGxvd2VkLicsXFxuXFx0XFx0XFx0XFx0XFx0J2pldC1mb3JtLWJ1aWxkZXInXFxuXFx0XFx0XFx0XFx0KTtcXG5cXHRcXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMuZXJyb3JzLCBuYW1lLCBtc2cgKTtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gZmFsc2U7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHRoaXMuJHNldCggdGhpcy5lcnJvcnMsIG5hbWUsICcnICk7XFxuXFx0XFx0XFx0cmV0dXJuIHRydWU7XFxuXFx0XFx0fSxcXG5cXHRcXHRjaGFuZ2VTZWxmUHJvbW90YWJsZVJvbGVzKCB2YWx1ZSApIHtcXG5cXHRcXHRcXHRpZiAoICEgQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm47XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHRoaXMuY2hhbmdlVmFsKCAnc2VsZl9wcm9tb3RhYmxlX3JvbGVzJywgdmFsdWUgKTtcXG5cXHRcXHR9LFxcblxcdFxcdGNoYW5nZVZhbCggbmFtZSwgdmFsdWUgKSB7XFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsIG5hbWUsIHZhbHVlICk7XFxuXFxuXFx0XFx0XFx0aWYgKCBuYW1lID09PSAnZ2ZiX3JlcXVlc3RfYXJnc19rZXknIHx8IG5hbWUgPT09ICdnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlJyApIHtcXG5cXHRcXHRcXHRcXHRjb25zdCBvayA9IHRoaXMudmFsaWRhdGVGaWVsZCggbmFtZSwgdmFsdWUgKTtcXG5cXHRcXHRcXHRcXHRpZiAoICEgb2sgKSB7XFxuXFx0XFx0XFx0XFx0XFx0cmV0dXJuO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsIG5hbWUsIHRydWUgKTtcXG5cXG5cXHRcXHRcXHRpZiAoIHRoaXMuaXNMb2FkaW5nICkge1xcblxcdFxcdFxcdFxcdHRoaXMucGVuZGluZ1NhdmUgPSB0cnVlO1xcblxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcXG5cXHRcXHR9LFxcblxcdH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi5qZmItaGFzLWVycm9yIC5jeC12dWktaW5wdXQsXFxuLmpmYi1oYXMtZXJyb3IgaW5wdXQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZGMyNjI2ICFpbXBvcnRhbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uamZiLWZpZWxkLWVycm9yIHtcXG4gIG1hcmdpbjogNnB4IDAgMTJweDtcXG4gIGNvbG9yOiAjZGMyNjI2O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIHRleHQtYWxpZ246cmlnaHQ7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbi5qZmItc3NyLWNhbGxiYWNrcy10ZXh0YXJlYVtkYXRhLXYtMTdhYjIzODhdIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cdG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZFtkYXRhLXYtMTdhYjIzODhdIHtcblx0Y29sb3I6ICNkYzI2MjY7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0cGFkZGluZzogMCAyMHB4O1xuXHRtYXJnaW46IC0xMHB4IDAgMjBweDtcbn1cbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZF9fbGlzdFtkYXRhLXYtMTdhYjIzODhdIHtcblx0bWFyZ2luOiA0cHggMCAwO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuLmpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkX19saXN0IGxpW2RhdGEtdi0xN2FiMjM4OF0ge1xuXHRtYXJnaW4tYm90dG9tOiAycHg7XG5cdHBhZGRpbmctbGVmdDogMTRweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkX19saXN0IGxpW2RhdGEtdi0xN2FiMjM4OF06OmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICfigJMnO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG59XG4uamZiLXNzci1ibG9ja2VkX19saXN0W2RhdGEtdi0xN2FiMjM4OF0ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uamZiLXNzci1ibG9ja2VkX19saXN0IGxpW2RhdGEtdi0xN2FiMjM4OF0ge1xuXHRtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uamZiLXNzci1ibG9ja2VkX19mb3JtW2RhdGEtdi0xN2FiMjM4OF0ge1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuLmpmYi1zc3ItYmxvY2tlZF9fbWV0YVtkYXRhLXYtMTdhYjIzODhdIHtcblx0Y29sb3I6ICM2NDY5NzA7XG5cdG1hcmdpbjogMCA2cHg7XG59XG4uamZiLXNzci1ibG9ja2VkX19tZXRhIGNvZGVbZGF0YS12LTE3YWIyMzg4XSB7XG5cdGNvbG9yOiAjZGMyNjI2O1xufVxuLmpmYi1zc3ItbWlncmF0aW9uLXdhaXRbZGF0YS12LTE3YWIyMzg4XSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRnYXA6IDEycHg7XG5cdHBhZGRpbmc6IDE2cHggMjBweDtcblx0YmFja2dyb3VuZDogI2YwZjZmYztcblx0Ym9yZGVyOiAxcHggc29saWQgI2MzZGNmMTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xufVxuLmpmYi1zc3ItbWlncmF0aW9uLXdhaXRfX3NwaW5uZXJbZGF0YS12LTE3YWIyMzg4XSB7XG5cdGZsZXg6IDAgMCBhdXRvO1xuXHR3aWR0aDogMThweDtcblx0aGVpZ2h0OiAxOHB4O1xuXHRtYXJnaW4tdG9wOiAycHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNjM2RjZjE7XG5cdGJvcmRlci10b3AtY29sb3I6ICMyMjcxYjE7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YW5pbWF0aW9uOiBqZmItc3NyLW1pZ3JhdGlvbi13YWl0LXNwaW4tZGF0YS12LTE3YWIyMzg4IDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBqZmItc3NyLW1pZ3JhdGlvbi13YWl0LXNwaW4tZGF0YS12LTE3YWIyMzg4IHtcbnRvIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSggMzYwZGVnICk7XG59XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Nzci1jYWxsYmFja3MvU3NyQ2FsbGJhY2tzVGFiLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMk9BO0NBQ0EsV0FBQTtDQUNBLHNCQUFBO0NBQ0Esa0JBQUE7QUFDQTtBQUVBO0NBQ0EsY0FBQTtDQUNBLGVBQUE7Q0FDQSxlQUFBO0NBQ0Esb0JBQUE7QUFDQTtBQUVBO0NBQ0EsZUFBQTtDQUNBLFVBQUE7Q0FDQSxnQkFBQTtBQUNBO0FBRUE7Q0FDQSxrQkFBQTtDQUNBLGtCQUFBO0NBQ0Esa0JBQUE7QUFDQTtBQUVBO0NBQ0EsWUFBQTtDQUNBLGtCQUFBO0NBQ0EsT0FBQTtBQUNBO0FBRUE7Q0FDQSxTQUFBO0NBQ0EsVUFBQTtDQUNBLGdCQUFBO0FBQ0E7QUFFQTtDQUNBLGtCQUFBO0FBQ0E7QUFFQTtDQUNBLGdCQUFBO0FBQ0E7QUFFQTtDQUNBLGNBQUE7Q0FDQSxhQUFBO0FBQ0E7QUFFQTtDQUNBLGNBQUE7QUFDQTtBQUVBO0NBQ0EsYUFBQTtDQUNBLHVCQUFBO0NBQ0EsU0FBQTtDQUNBLGtCQUFBO0NBQ0EsbUJBQUE7Q0FDQSx5QkFBQTtDQUNBLGtCQUFBO0FBQ0E7QUFFQTtDQUNBLGNBQUE7Q0FDQSxXQUFBO0NBQ0EsWUFBQTtDQUNBLGVBQUE7Q0FDQSx5QkFBQTtDQUNBLHlCQUFBO0NBQ0Esa0JBQUE7Q0FDQSwyRUFBQTtBQUNBO0FBRUE7QUFDQTtFQUNBLDJCQUFBO0FBQ0E7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFx0PGRpdj5cXG5cXHRcXHQ8ZGl2IHYtaWY9XFxcIm1pZ3JhdGlvbkluUHJvZ3Jlc3NcXFwiIGNsYXNzPVxcXCJqZmItc3NyLW1pZ3JhdGlvbi13YWl0XFxcIj5cXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiamZiLXNzci1taWdyYXRpb24td2FpdF9fc3Bpbm5lclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHQ8ZGl2PlxcblxcdFxcdFxcdFxcdDxzdHJvbmc+e3sgX18oICdNaWdyYXRpb24gaW4gcHJvZ3Jlc3PigKYnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvc3Ryb25nPlxcblxcdFxcdFxcdFxcdDxwPnt7IGhlbHAubWlncmF0aW9uSW5Qcm9ncmVzcyB9fTwvcD5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXHQ8dGVtcGxhdGUgdi1lbHNlPlxcblxcdFxcdFxcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXJcXG5cXHRcXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuY2FsbGJhY2tzID8gYCR7bGFiZWwuY2FsbGJhY2tzfSAobG9hZGluZy4uLilgIDogbGFiZWwuY2FsbGJhY2tzXFxcIlxcblxcdFxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5jYWxsYmFja3NcXFwiXFxuXFx0XFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHQ8dGV4dGFyZWFcXG5cXHRcXHRcXHRcXHRcXHRjbGFzcz1cXFwiamZiLXNzci1jYWxsYmFja3MtdGV4dGFyZWFcXFwiXFxuXFx0XFx0XFx0XFx0XFx0cm93cz1cXFwiMTBcXFwiXFxuXFx0XFx0XFx0XFx0XFx0OmRpc2FibGVkPVxcXCJpc0xvYWRpbmdcXFwiXFxuXFx0XFx0XFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmNhbGxiYWNrc1xcXCJcXG5cXHRcXHRcXHRcXHRcXHRAaW5wdXQ9XFxcIm9uSW5wdXQoICRldmVudC50YXJnZXQudmFsdWUgKVxcXCJcXG5cXHRcXHRcXHRcXHQ+PC90ZXh0YXJlYT5cXG5cXHRcXHRcXHRcXHQ8Y3gtdnVpLWJ1dHRvblxcblxcdFxcdFxcdFxcdFxcdGJ1dHRvbi1zdHlsZT1cXFwiYWNjZW50XFxcIlxcblxcdFxcdFxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nIHx8ICFoYXNVbnNhdmVkQ2FsbGJhY2tzQ2hhbmdlXFxcIlxcblxcdFxcdFxcdFxcdFxcdEBjbGljaz1cXFwib25TYXZlQ2FsbGJhY2tzXFxcIlxcblxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHQ8c3BhbiBzbG90PVxcXCJsYWJlbFxcXCI+e3sgX18oICdTYXZlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfX08L3NwYW4+XFxuXFx0XFx0XFx0XFx0PC9jeC12dWktYnV0dG9uPlxcblxcdFxcdFxcdDwvY3gtdnVpLWNvbXBvbmVudC13cmFwcGVyPlxcblxcdFxcdFxcdDxkaXYgdi1pZj1cXFwiaGFzUmVqZWN0ZWRcXFwiIGNsYXNzPVxcXCJqZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZFxcXCI+XFxuXFx0XFx0XFx0XFx0PHN0cm9uZz57eyBfXyggJ05vdCBzYXZlZDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9fTwvc3Ryb25nPlxcblxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cXFwiamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRfX2xpc3RcXFwiPlxcblxcdFxcdFxcdFxcdFxcdDxsaVxcblxcdFxcdFxcdFxcdFxcdFxcdHYtZm9yPVxcXCJuYW1lIGluIHJlamVjdGVkTmFtZXNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0OmtleT1cXFwibmFtZVxcXCJcXG5cXHRcXHRcXHRcXHRcXHQ+e3sgbmFtZSB9fSDigJQge3sgcmVqZWN0ZWRbIG5hbWUgXSB9fTwvbGk+XFxuXFx0XFx0XFx0XFx0PC91bD5cXG5cXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHQ8Y3gtdnVpLWNvbXBvbmVudC13cmFwcGVyXFxuXFx0XFx0XFx0XFx0di1pZj1cXFwiYmxvY2tlZC5sZW5ndGhcXFwiXFxuXFx0XFx0XFx0XFx0OmxhYmVsPVxcXCJgJHtsYWJlbC5ibG9ja2VkfSAoJHtibG9ja2VkLmxlbmd0aH0pYFxcXCJcXG5cXHRcXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuYmxvY2tlZFxcXCJcXG5cXHRcXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxuXFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdDx1bCBjbGFzcz1cXFwiamZiLXNzci1ibG9ja2VkX19saXN0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8bGkgdi1mb3I9XFxcIiggdXNhZ2UsIGluZGV4ICkgaW4gYmxvY2tlZFxcXCIgOmtleT1cXFwiaW5kZXhcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJqZmItc3NyLWJsb2NrZWRfX2Zvcm1cXFwiPnt7IHVzYWdlLmZvcm1fdGl0bGUgfHwgYCMke3VzYWdlLmZvcm1faWR9YCB9fTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiamZiLXNzci1ibG9ja2VkX19tZXRhXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQoe3sgX18oICdmaWVsZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH19IFxcXCJ7eyB1c2FnZS5maWVsZCB9fVxcXCIg4oaSIDxjb2RlPnt7IHVzYWdlLm5hbWUgfX08L2NvZGU+KVxcblxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8YSA6aHJlZj1cXFwidXNhZ2UuZWRpdF91cmxcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyIG5vcmVmZXJyZXJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHt7IF9fKCAnRWRpdCBmb3JtIOKGkicsICdqZXQtZm9ybS1idWlsZGVyJyApIH19XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9hPlxcblxcdFxcdFxcdFxcdFxcdDwvbGk+XFxuXFx0XFx0XFx0XFx0PC91bD5cXG5cXHRcXHRcXHQ8L2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcj5cXG5cXHRcXHQ8L3RlbXBsYXRlPlxcblxcdDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQge1xcblxcdGhlbHAsXFxuXFx0bGFiZWwsXFxufSBmcm9tICcuL3NvdXJjZSc7XFxuXFxuY29uc3QgeyBTYXZlVGFiQnlBamF4LCBpMThuIH0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XFxuXFxuY29uc3QgTUlHUkFUSU9OX1BPTExfSU5URVJWQUxfTVMgPSA4MDAwO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG5cXHRuYW1lOiAnc3NyLWNhbGxiYWNrcy10YWInLFxcblxcdHByb3BzOiB7XFxuXFx0XFx0aW5jb21pbmc6IHtcXG5cXHRcXHRcXHR0eXBlOiBPYmplY3QsXFxuXFx0XFx0XFx0ZGVmYXVsdDoge30sXFxuXFx0XFx0fSxcXG5cXHR9LFxcblxcdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBpMThuIF0sXFxuXFx0ZGF0YSgpIHtcXG5cXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdGxhYmVsLCBoZWxwLFxcblxcdFxcdFxcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcXG5cXHRcXHRcXHQvLyBUcmFja3MgdGhlIGxhc3QgdmFsdWUgY29uZmlybWVkIGJ5IHRoZSBzZXJ2ZXIgKGluaXRpYWwgbG9hZCBvciBhIGNvbXBsZXRlZFxcblxcdFxcdFxcdC8vIHNhdmUpLCBpbmRlcGVuZGVudCBvZiBgc3RvcmFnZS5jYWxsYmFja3NgLCB3aGljaCBjaGFuZ2VzIG9uIGV2ZXJ5IGtleXN0cm9rZS5cXG5cXHRcXHRcXHQvLyBVc2VkIG9ubHkgdG8gZ2F0ZSB0aGUgU2F2ZSBidXR0b24g4oCUIHNlZSBgaGFzVW5zYXZlZENhbGxiYWNrc0NoYW5nZWAuXFxuXFx0XFx0XFx0c2F2ZWRDYWxsYmFja3M6ICdzdHJpbmcnID09PSB0eXBlb2YgdGhpcy5pbmNvbWluZy5jYWxsYmFja3MgPyB0aGlzLmluY29taW5nLmNhbGxiYWNrcyA6ICcnLFxcblxcdFxcdFxcdGJsb2NrZWQ6IEFycmF5LmlzQXJyYXkoIHRoaXMuaW5jb21pbmcuYmxvY2tlZCApID8gWyAuLi50aGlzLmluY29taW5nLmJsb2NrZWQgXSA6IFtdLFxcblxcdFxcdFxcdC8vIFdoaWxlIHRoZSBvbmUtdGltZSBsZWdhY3ktbWlncmF0aW9uIHNjYW4gaXMgc3RpbGwgcmVzdG9yaW5nIHByZXZpb3VzbHkgdXNlZFxcblxcdFxcdFxcdC8vIGNhbGxiYWNrIG5hbWVzIChvbmx5IHBvc3NpYmxlIG9uIGEgbGFyZ2Ugc2l0ZSwgd2hlcmUgaXQgc3BhbnMgc2V2ZXJhbFxcblxcdFxcdFxcdC8vIGBhZG1pbl9pbml0YCByZXF1ZXN0cyksIHRoaXMgdGFiIGlzIHJlYWQtb25seTogYGltcG9ydF90cnVzdGVkX2NhbGxiYWNrcygpYFxcblxcdFxcdFxcdC8vIG9ubHkgbWVyZ2VzIGl0cyByZXN1bHRzIGludG8gdGhlIHRydXN0ZWQgbGlzdCBvbmNlIHRoZSB3aG9sZSBzY2FuIGNvbXBsZXRlcyxcXG5cXHRcXHRcXHQvLyBhbmQgaXQgZG9lcyBhbiB1bmxvY2tlZCByZWFkLW1lcmdlLXdyaXRlIG9mIHRoZSBzYW1lIG9wdGlvbiBhIG1hbnVhbCBzYXZlXFxuXFx0XFx0XFx0Ly8gaGVyZSB3b3VsZCByYWNlIGFnYWluc3QgKHJldmlldyBmaW5kaW5nLCBpc3N1ZXMtdHJhY2tlciAjMjAzNjEgZm9sbG93LXVwKS5cXG5cXHRcXHRcXHQvLyBUaGUgc2VydmVyIGVuZm9yY2VzIHRoaXMgaW5kZXBlbmRlbnRseSBpbiBgb25fZ2V0X3JlcXVlc3QoKWA7IHRoaXMgZmxhZyBvbmx5XFxuXFx0XFx0XFx0Ly8gZHJpdmVzIHRoZSB3YWl0LXN0YXRlIFVJIGFuZCBpcyByZS1zeW5jZWQgYnkgYHBvbGxNaWdyYXRpb25TdGF0dXMoKWAuXFxuXFx0XFx0XFx0bWlncmF0aW9uSW5Qcm9ncmVzczogISEgdGhpcy5pbmNvbWluZy5taWdyYXRpb25JblByb2dyZXNzLFxcblxcdFxcdFxcdGlzTG9hZGluZzogZmFsc2UsXFxuXFx0XFx0XFx0bG9hZGluZzoge30sXFxuXFx0XFx0XFx0cGVuZGluZ1NhdmU6IGZhbHNlLFxcblxcdFxcdFxcdHJlamVjdGVkOiB7fSxcXG5cXHRcXHRcXHRwb2xsVGltZXI6IG51bGwsXFxuXFx0XFx0fTtcXG5cXHR9LFxcblxcdGNvbXB1dGVkOiB7XFxuXFx0XFx0aGFzUmVqZWN0ZWQoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIE9iamVjdC5rZXlzKCB0aGlzLnJlamVjdGVkICkubGVuZ3RoID4gMDtcXG5cXHRcXHR9LFxcblxcdFxcdC8vIGByZWplY3RlZGAgaXMgYSBwbGFpbiBvYmplY3QsIHNvIGEgdHJhaWxpbmcgXFxcIjsgXFxcIiBiYWtlZCBpbnRvIGVhY2ggcmVuZGVyZWQgaXRlbVxcblxcdFxcdC8vIChyYXRoZXIgdGhhbiBqb2luZWQgYmV0d2VlbiBpdGVtcykgbGVmdCBhIHN0cmF5IFxcXCI7IFxcXCIgYWZ0ZXIgdGhlIGxhc3Qg4oCUIGFuZCBvbmx5IOKAlFxcblxcdFxcdC8vIGVudHJ5IHdoZW5ldmVyIGV4YWN0bHkgb25lIG5hbWUgd2FzIHJlamVjdGVkIChyZXZpZXcgZmluZGluZywgaXNzdWVzLXRyYWNrZXJcXG5cXHRcXHQvLyAjMjAzNjEgZm9sbG93LXVwKS4gTGlzdGluZyBuYW1lcyBzZXBhcmF0ZWx5IGxldHMgdGhlIHRlbXBsYXRlIG9ubHkgYWRkIHRoZVxcblxcdFxcdC8vIHNlcGFyYXRvciBiZXR3ZWVuIGl0ZW1zLCBub3QgYWZ0ZXIgdGhlIGZpbmFsIG9uZS5cXG5cXHRcXHRyZWplY3RlZE5hbWVzKCkge1xcblxcdFxcdFxcdHJldHVybiBPYmplY3Qua2V5cyggdGhpcy5yZWplY3RlZCApO1xcblxcdFxcdH0sXFxuXFx0XFx0Ly8gR2F0ZXMgdGhlIFNhdmUgYnV0dG9uOiBzYXZpbmcgb25seSBoYXBwZW5zIG9uIGFuIGV4cGxpY2l0IGNsaWNrIG5vdyAobm9cXG5cXHRcXHQvLyBibHVyLXRyaWdnZXJlZCBhdXRvc2F2ZSksIHNwZWNpZmljYWxseSBzbyBhbiBhY2NpZGVudGFsIHNlbGVjdC1hbGwtYW5kLWRlbGV0ZSBpblxcblxcdFxcdC8vIHRoZSB0ZXh0YXJlYSBjYW4ndCB3aXBlIHRoZSB3aG9sZSB0cnVzdGVkIGFsbG93bGlzdCB3aXRob3V0IHRoZSBhZG1pblxcblxcdFxcdC8vIGRlbGliZXJhdGVseSBjbGlja2luZyBTYXZlIG9uIHRoZSBlbXB0aWVkIGNvbnRlbnQgKHJldmlldyBmaW5kaW5nLCBpc3N1ZXMtdHJhY2tlclxcblxcdFxcdC8vICMyMDM2MSBmb2xsb3ctdXApLlxcblxcdFxcdGhhc1Vuc2F2ZWRDYWxsYmFja3NDaGFuZ2UoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHRoaXMuc3RvcmFnZS5jYWxsYmFja3MgIT09IHRoaXMuc2F2ZWRDYWxsYmFja3M7XFxuXFx0XFx0fSxcXG5cXHR9LFxcblxcdGNyZWF0ZWQoKSB7XFxuXFx0XFx0amZiRXZlbnRCdXMuJG9uKCAncmVxdWVzdC1zdGF0ZScsIHRoaXMub25DaGFuZ2VTdGF0ZS5iaW5kKCB0aGlzICkgKTtcXG5cXG5cXHRcXHRpZiAoIHRoaXMubWlncmF0aW9uSW5Qcm9ncmVzcyApIHtcXG5cXHRcXHRcXHR0aGlzLnNjaGVkdWxlUG9sbCgpO1xcblxcdFxcdH1cXG5cXHR9LFxcblxcdGJlZm9yZURlc3Ryb3koKSB7XFxuXFx0XFx0dGhpcy5jbGVhclBvbGwoKTtcXG5cXHR9LFxcblxcdG1ldGhvZHM6IHtcXG5cXHRcXHRnZXRTYXZhYmxlRGF0YSgpIHtcXG5cXHRcXHRcXHRyZXR1cm4geyBjYWxsYmFja3M6IHRoaXMuc3RvcmFnZS5jYWxsYmFja3MgfTtcXG5cXHRcXHR9LFxcblxcdFxcdGdldFJlcXVlc3RPblNhdmUoKSB7XFxuXFx0XFx0XFx0cmV0dXJuIHtcXG5cXHRcXHRcXHRcXHRkYXRhOiB0aGlzLmdldFNhdmFibGVEYXRhKCksXFxuXFx0XFx0XFx0fTtcXG5cXHRcXHR9LFxcblxcdFxcdG9uU2F2ZURvbmVTdWNjZXNzKCByZXNwb25zZSApIHtcXG5cXHRcXHRcXHR0aGlzLnJlamVjdGVkID0gcmVzcG9uc2U/LmRhdGE/LnJlamVjdGVkIHx8IHt9O1xcblxcblxcdFxcdFxcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiByZXNwb25zZT8uZGF0YT8uY2FsbGJhY2tzICkge1xcblxcdFxcdFxcdFxcdHRoaXMuJHNldCggdGhpcy5zdG9yYWdlLCAnY2FsbGJhY2tzJywgcmVzcG9uc2UuZGF0YS5jYWxsYmFja3MgKTtcXG5cXHRcXHRcXHRcXHR0aGlzLnNhdmVkQ2FsbGJhY2tzID0gcmVzcG9uc2UuZGF0YS5jYWxsYmFja3M7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0sXFxuXFx0XFx0b25DaGFuZ2VTdGF0ZSggeyBzdGF0ZSwgc2x1ZyB9ICkge1xcblxcdFxcdFxcdGlmICggJ3Nzci1jYWxsYmFja3MtdGFiJyAhPT0gc2x1ZyApIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm47XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdGlmICggJ2VuZCcgPT09IHN0YXRlICkge1xcblxcdFxcdFxcdFxcdHRoaXMubG9hZGluZyA9IHt9O1xcblxcdFxcdFxcdFxcdHRoaXMuJHNldCggdGhpcywgJ2lzTG9hZGluZycsIGZhbHNlICk7XFxuXFxuXFx0XFx0XFx0XFx0aWYgKCB0aGlzLnBlbmRpbmdTYXZlICkge1xcblxcdFxcdFxcdFxcdFxcdHRoaXMucGVuZGluZ1NhdmUgPSBmYWxzZTtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApO1xcblxcdFxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRcXHRyZXR1cm47XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHRoaXMuJHNldCggdGhpcywgJ2lzTG9hZGluZycsIHN0YXRlID09PSAnYmVnaW4nICk7XFxuXFx0XFx0fSxcXG5cXHRcXHRvbklucHV0KCB2YWx1ZSApIHtcXG5cXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMuc3RvcmFnZSwgJ2NhbGxiYWNrcycsIHZhbHVlICk7XFxuXFx0XFx0fSxcXG5cXHRcXHRvblNhdmVDYWxsYmFja3MoKSB7XFxuXFx0XFx0XFx0aWYgKCAhIHRoaXMuaGFzVW5zYXZlZENhbGxiYWNrc0NoYW5nZSB8fCB0aGlzLm1pZ3JhdGlvbkluUHJvZ3Jlc3MgKSB7XFxuXFx0XFx0XFx0XFx0cmV0dXJuO1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMubG9hZGluZywgJ2NhbGxiYWNrcycsIHRydWUgKTtcXG5cXG5cXHRcXHRcXHRpZiAoIHRoaXMuaXNMb2FkaW5nICkge1xcblxcdFxcdFxcdFxcdHRoaXMucGVuZGluZ1NhdmUgPSB0cnVlO1xcblxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0dGhpcy5zYXZlQnlBamF4KCB0aGlzLCB0aGlzLiRvcHRpb25zLm5hbWUgKTtcXG5cXHRcXHR9LFxcblxcdFxcdHNjaGVkdWxlUG9sbCgpIHtcXG5cXHRcXHRcXHR0aGlzLmNsZWFyUG9sbCgpO1xcblxcdFxcdFxcdHRoaXMucG9sbFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoIHRoaXMucG9sbE1pZ3JhdGlvblN0YXR1cywgTUlHUkFUSU9OX1BPTExfSU5URVJWQUxfTVMgKTtcXG5cXHRcXHR9LFxcblxcdFxcdGNsZWFyUG9sbCgpIHtcXG5cXHRcXHRcXHRpZiAoIHRoaXMucG9sbFRpbWVyICkge1xcblxcdFxcdFxcdFxcdHdpbmRvdy5jbGVhclRpbWVvdXQoIHRoaXMucG9sbFRpbWVyICk7XFxuXFx0XFx0XFx0XFx0dGhpcy5wb2xsVGltZXIgPSBudWxsO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdFxcdC8vIFJldXNlcyB0aGUgc2FtZSBzYXZlIGVuZHBvaW50IGFzIGEgcmVhZC1vbmx5IHN0YXR1cyBjaGVjazogb21pdHRpbmcgYGNhbGxiYWNrc2BcXG5cXHRcXHQvLyBmcm9tIHRoZSByZXF1ZXN0IGJvZHkgbWVhbnMgYFNzcl9DYWxsYmFja3NfSGFuZGxlcjo6b25fZ2V0X3JlcXVlc3QoKWAgbmV2ZXJcXG5cXHRcXHQvLyBhdHRlbXB0cyB0byB3cml0ZSBhbnl0aGluZyDigJQgaXQganVzdCByZXBvcnRzIHdoZXRoZXIgdGhlIG1pZ3JhdGlvbiBpcyBzdGlsbFxcblxcdFxcdC8vIHJ1bm5pbmcuIE9uY2UgaXQgcmVwb3J0cyBmaW5pc2hlZCwgdGhlIHBhZ2UgaXMgcmVsb2FkZWQgcmF0aGVyIHRoYW4gcGF0Y2hpbmdcXG5cXHRcXHQvLyBzdGF0ZSBpbiBwbGFjZTogdGhlIG1pZ3JhdGlvbiBjYW4gYWxzbyBoYXZlIGNoYW5nZWQgdGhlIFxcXCJGb3JtcyBVc2luZyBCbG9ja2VkXFxuXFx0XFx0Ly8gRnVuY3Rpb25zXFxcIiBsaXN0IChgU3NyX0Jsb2NrZWRfQ2FsbGJhY2tfVXNhZ2VzYCksIHdoaWNoIHRoaXMgZW5kcG9pbnQgZG9lc24ndFxcblxcdFxcdC8vIHJldHVybiwgc28gYSBmdWxsIHJlbG9hZCBpcyB0aGUgc2ltcGxlc3Qgd2F5IHRvIGd1YXJhbnRlZSBldmVyeXRoaW5nIG9uIHRoZSBwYWdlXFxuXFx0XFx0Ly8g4oCUIG5vdCBqdXN0IHRoZSBjYWxsYmFja3MgdGV4dGFyZWEg4oCUIHJlZmxlY3RzIHdoYXQgdGhlIG1pZ3JhdGlvbiBwcm9kdWNlZC5cXG5cXHRcXHRwb2xsTWlncmF0aW9uU3RhdHVzKCkge1xcblxcdFxcdFxcdGpRdWVyeS5hamF4KCB7XFxuXFx0XFx0XFx0XFx0dXJsOiB3aW5kb3cuYWpheHVybCxcXG5cXHRcXHRcXHRcXHR0eXBlOiAnUE9TVCcsXFxuXFx0XFx0XFx0XFx0ZGF0YVR5cGU6ICdqc29uJyxcXG5cXHRcXHRcXHRcXHRkYXRhOiB7XFxuXFx0XFx0XFx0XFx0XFx0YWN0aW9uOiAnamV0X2ZiX3NhdmVfdGFiX19zc3ItY2FsbGJhY2tzLXRhYicsXFxuXFx0XFx0XFx0XFx0XFx0X25vbmNlOiB3aW5kb3c/LkpldEZCUGFnZUNvbmZpZ1BhY2thZ2U/Lm5vbmNlLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fSApLmRvbmUoICggcmVzcG9uc2UgKSA9PiB7XFxuXFx0XFx0XFx0XFx0aWYgKCByZXNwb25zZT8uZGF0YT8ubWlncmF0aW9uSW5Qcm9ncmVzcyApIHtcXG5cXHRcXHRcXHRcXHRcXHR0aGlzLnNjaGVkdWxlUG9sbCgpO1xcblxcdFxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0XFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcblxcdFxcdFxcdH0gKS5mYWlsKCAoKSA9PiB7XFxuXFx0XFx0XFx0XFx0Ly8gVHJhbnNpZW50IG5ldHdvcmsgaGljY3VwIOKAlCBrZWVwIHdhaXRpbmcgcmF0aGVyIHRoYW4gZ2V0dGluZyBzdHVjay5cXG5cXHRcXHRcXHRcXHR0aGlzLnNjaGVkdWxlUG9sbCgpO1xcblxcdFxcdFxcdH0gKTtcXG5cXHRcXHR9LFxcblxcdH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi5qZmItc3NyLWNhbGxiYWNrcy10ZXh0YXJlYSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5qZmItc3NyLWNhbGxiYWNrcy1yZWplY3RlZCB7XFxuXFx0Y29sb3I6ICNkYzI2MjY7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdHBhZGRpbmc6IDAgMjBweDtcXG5cXHRtYXJnaW46IC0xMHB4IDAgMjBweDtcXG59XFxuXFxuLmpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkX19saXN0IHtcXG5cXHRtYXJnaW46IDRweCAwIDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRfX2xpc3QgbGkge1xcblxcdG1hcmdpbi1ib3R0b206IDJweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDE0cHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRfX2xpc3QgbGk6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogJ+KAkyc7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxufVxcblxcbi5qZmItc3NyLWJsb2NrZWRfX2xpc3Qge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5qZmItc3NyLWJsb2NrZWRfX2xpc3QgbGkge1xcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuXFxuLmpmYi1zc3ItYmxvY2tlZF9fZm9ybSB7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmpmYi1zc3ItYmxvY2tlZF9fbWV0YSB7XFxuXFx0Y29sb3I6ICM2NDY5NzA7XFxuXFx0bWFyZ2luOiAwIDZweDtcXG59XFxuXFxuLmpmYi1zc3ItYmxvY2tlZF9fbWV0YSBjb2RlIHtcXG5cXHRjb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuLmpmYi1zc3ItbWlncmF0aW9uLXdhaXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0Z2FwOiAxMnB4O1xcblxcdHBhZGRpbmc6IDE2cHggMjBweDtcXG5cXHRiYWNrZ3JvdW5kOiAjZjBmNmZjO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNjM2RjZjE7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uamZiLXNzci1taWdyYXRpb24td2FpdF9fc3Bpbm5lciB7XFxuXFx0ZmxleDogMCAwIGF1dG87XFxuXFx0d2lkdGg6IDE4cHg7XFxuXFx0aGVpZ2h0OiAxOHB4O1xcblxcdG1hcmdpbi10b3A6IDJweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjYzNkY2YxO1xcblxcdGJvcmRlci10b3AtY29sb3I6ICMyMjcxYjE7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGFuaW1hdGlvbjogamZiLXNzci1taWdyYXRpb24td2FpdC1zcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGpmYi1zc3ItbWlncmF0aW9uLXdhaXQtc3BpbiB7XFxuXFx0dG8ge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKCAzNjBkZWcgKTtcXG5cXHR9XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbi51c2VyLWpvdXJuZXktc2VsZWN0IHNlbGVjdC5jeC12dWktc2VsZWN0IHtcblx0cGFkZGluZzogNnB4IDI0cHggNnB4IDEycHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL2FkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3VzZXItam91cm5leS9Vc2VySm91cm5leVRhYi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJIQTtDQUNBLDBCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcdDxkaXY+XFxuXFx0XFx0PGN4LXZ1aS1zd2l0Y2hlclxcblxcdFxcdFxcdG5hbWU9XFxcImVuYWJsZV91c2VyX2pvdXJuZXlcXFwiXFxuXFx0XFx0XFx0OmxhYmVsPVxcXCJsb2FkaW5nLmVuYWJsZV91c2VyX2pvdXJuZXkgPyBgJHtsYWJlbC5lbmFibGVfdXNlcl9qb3VybmV5fSAobG9hZGluZy4uLilgIDogbGFiZWwuZW5hYmxlX3VzZXJfam91cm5leVxcXCJcXG5cXHRcXHRcXHQ6ZGVzY3JpcHRpb249XFxcImhlbHAuZW5hYmxlX3VzZXJfam91cm5leVxcXCJcXG5cXHRcXHRcXHQ6d3JhcHBlci1jc3M9XFxcIlsgJ2VxdWFsd2lkdGgnIF1cXFwiXFxuXFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnZW5hYmxlX3VzZXJfam91cm5leScgKSA/IHN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leSA6IGZhbHNlXFxcIlxcblxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiaXNMb2FkaW5nXFxcIlxcblxcdFxcdFxcdEBpbnB1dD1cXFwiY2hhbmdlVmFsKCAnZW5hYmxlX3VzZXJfam91cm5leScsICRldmVudCApXFxcIlxcblxcdFxcdD48L2N4LXZ1aS1zd2l0Y2hlcj5cXG5cXG5cXHRcXHQ8dGVtcGxhdGUgdi1pZj1cXFwic3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5XFxcIj5cXG5cXHRcXHRcXHQ8Y3gtdnVpLXNlbGVjdFxcblxcdFxcdFxcdFxcdG5hbWU9XFxcInN0b3JhZ2VfdHlwZVxcXCJcXG5cXHRcXHRcXHRcXHRjbGFzcz1cXFwidXNlci1qb3VybmV5LXNlbGVjdFxcXCJcXG5cXHRcXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuc3RvcmFnZV90eXBlID8gYCR7bGFiZWwuc3RvcmFnZV90eXBlfSAobG9hZGluZy4uLilgIDogbGFiZWwuc3RvcmFnZV90eXBlXFxcIlxcblxcdFxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5zdG9yYWdlX3R5cGVcXFwiXFxuXFx0XFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdFxcdDpvcHRpb25zLWxpc3Q9XFxcIltcXG5cXHRcXHRcXHRcXHRcXHR7XFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU6ICdsb2NhbCcsXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw6ICdMb2NhbCBTdG9yYWdlJ1xcblxcdFxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0XFx0e1xcblxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlOiAnc2Vzc2lvbicsXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGFiZWw6ICdTZXNzaW9uIFN0b3JhZ2UnXFxuXFx0XFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdF1cXFwiXFxuXFx0XFx0XFx0XFx0OnZhbHVlPVxcXCJzdG9yYWdlLmhhc093blByb3BlcnR5KCAnc3RvcmFnZV90eXBlJyApID8gc3RvcmFnZS5zdG9yYWdlX3R5cGUgOiAnbG9jYWwnXFxcIlxcblxcdFxcdFxcdFxcdDpkaXNhYmxlZD1cXFwiIXN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leSB8fCBpc0xvYWRpbmdcXFwiXFxuXFx0XFx0XFx0XFx0QGlucHV0PVxcXCJjaGFuZ2VWYWwoICdzdG9yYWdlX3R5cGUnLCAkZXZlbnQgKVxcXCJcXG5cXHRcXHRcXHQ+PC9jeC12dWktc2VsZWN0PlxcblxcdFxcdFxcdDxjeC12dWktY29tcG9uZW50LXdyYXBwZXIgPlxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImN4LXZ1aS1jb21wb25lbnRfX2xhYmVsXFxcIj5QbGVhc2Ugbm90ZSE8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8ZGl2PjxiPlNlc3Npb24gU3RvcmFnZTo8L2I+IFRoZSBpbmZvcm1hdGlvbiBpcyBrZXB0IG9ubHkgd2hpbGUgdGhpcyB0YWIgb3Igd2luZG93IGlzIG9wZW4uIFJlbG9hZGluZyB0aGUgcGFnZSBpcyBmaW5lLCBidXQgYXMgc29vbiBhcyB5b3UgY2xvc2UgdGhlIHRhYiwgdGhlIGRhdGEgZGlzYXBwZWFycy4gT3RoZXIgdGFicyBvciB3aW5kb3dzIG9mIHRoZSBzaXRlIGNhbuKAmXQgc2VlIGl0LiBZb3UgY2FuIHN0aWxsIGdldCBpdCBiYWNrIGJ5IHByZXNzaW5nIEN0cmzigK8r4oCvU2hpZnTigK8r4oCvVCAo4oCcUmVvcGVu4oCvQ2xvc2Vk4oCvVGFi4oCdKTwvZGl2PlxcblxcdFxcdFxcdFxcdDxkaXY+PGI+TG9jYWwgU3RvcmFnZTo8L2I+IFRoZSBpbmZvcm1hdGlvbiBzdGF5cyBtdWNoIGxvbmdlcuKAlGV2ZXJ5IHRhYiBvciB3aW5kb3cgb2YgdGhpcyBzaXRlIGNhbiB1c2UgaXQsIGFuZCBpdCByZW1haW5zIGV2ZW4gYWZ0ZXIgeW91IGNsb3NlIGFuZCByZW9wZW4gdGhlIGJyb3dzZXIsIHVudGlsIHlvdSBjbGVhciBpdCB5b3Vyc2VsZi48L2Rpdj5cXG5cXHRcXHRcXHQ8L2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcj5cXG5cXG5cXHRcXHRcXHQ8Y3gtdnVpLXNlbGVjdFxcblxcdFxcdFxcdFxcdG5hbWU9XFxcImNsZWFyX2FmdGVyX3N1Ym1pdFxcXCJcXG5cXHRcXHRcXHRcXHRjbGFzcz1cXFwidXNlci1qb3VybmV5LXNlbGVjdFxcXCJcXG5cXHRcXHRcXHRcXHQ6bGFiZWw9XFxcImxvYWRpbmcuY2xlYXJfYWZ0ZXJfc3VibWl0ID8gYCR7bGFiZWwuY2xlYXJfYWZ0ZXJfc3VibWl0fSAobG9hZGluZy4uLilgIDogbGFiZWwuY2xlYXJfYWZ0ZXJfc3VibWl0XFxcIlxcblxcdFxcdFxcdFxcdDpkZXNjcmlwdGlvbj1cXFwiaGVscC5jbGVhcl9hZnRlcl9zdWJtaXRcXFwiXFxuXFx0XFx0XFx0XFx0OndyYXBwZXItY3NzPVxcXCJbICdlcXVhbHdpZHRoJyBdXFxcIlxcblxcdFxcdFxcdFxcdDpvcHRpb25zLWxpc3Q9XFxcIltcXG5cXHRcXHRcXHRcXHRcXHR7XFxuXFx0XFx0XFx0XFx0XFx0XFx0dmFsdWU6ICdhbHdheXMnLFxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsOiAnQWZ0ZXIgYW55IHN1Ym1pdCAoc3VjY2VzcyBvciBmYWlsdXJlKSdcXG5cXHRcXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdFxcdHtcXG5cXHRcXHRcXHRcXHRcXHRcXHR2YWx1ZTogJ3N1Y2Nlc3MnLFxcblxcdFxcdFxcdFxcdFxcdFxcdGxhYmVsOiAnQWZ0ZXIgc3VjY2Vzc2Z1bCBzdWJtaXQgb25seSdcXG5cXHRcXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0XVxcXCJcXG5cXHRcXHRcXHRcXHQ6dmFsdWU9XFxcInN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdjbGVhcl9hZnRlcl9zdWJtaXQnICkgPyBzdG9yYWdlLmNsZWFyX2FmdGVyX3N1Ym1pdCA6ICdzdWNjZXNzJ1xcXCJcXG5cXHRcXHRcXHRcXHQ6ZGlzYWJsZWQ9XFxcIiFzdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgfHwgaXNMb2FkaW5nXFxcIlxcblxcdFxcdFxcdFxcdEBpbnB1dD1cXFwiY2hhbmdlVmFsKCAnY2xlYXJfYWZ0ZXJfc3VibWl0JywgJGV2ZW50IClcXFwiXFxuXFx0XFx0XFx0PjwvY3gtdnVpLXNlbGVjdD5cXG5cXHRcXHQ8L3RlbXBsYXRlPlxcblxcdDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQge1xcblxcdGhlbHAsXFxuXFx0bGFiZWwsXFxufSBmcm9tICcuL3NvdXJjZSc7XFxuXFxuY29uc3QgeyBTYXZlVGFiQnlBamF4LCBpMThuIH0gPSB3aW5kb3cuSmV0RkJNaXhpbnM7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcblxcdG5hbWU6ICd1c2VyLWpvdXJuZXktdGFiJyxcXG5cXHRwcm9wczoge1xcblxcdFxcdGluY29taW5nOiB7XFxuXFx0XFx0XFx0dHlwZTogT2JqZWN0LFxcblxcdFxcdFxcdGRlZmF1bHQ6ICgpID0+ICh7fSksXFxuXFx0XFx0fSxcXG5cXHR9LFxcblxcdG1peGluczogWyBTYXZlVGFiQnlBamF4LCBpMThuIF0sXFxuXFx0ZGF0YSgpIHtcXG5cXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdGxhYmVsLCBoZWxwLFxcblxcdFxcdFxcdHN0b3JhZ2U6IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLmluY29taW5nICkgKSxcXG5cXHRcXHRcXHRpc0xvYWRpbmc6IGZhbHNlLFxcblxcdFxcdFxcdGxvYWRpbmc6IHt9LFxcblxcdFxcdH07XFxuXFx0fSxcXG5cXHRjcmVhdGVkKCkge1xcblxcdFxcdGpmYkV2ZW50QnVzLiRvbiggJ3JlcXVlc3Qtc3RhdGUnLCB0aGlzLm9uQ2hhbmdlU3RhdGUuYmluZCggdGhpcyApICk7XFxuXFx0fSxcXG5cXHRtZXRob2RzOiB7XFxuXFx0XFx0Z2V0UmVxdWVzdE9uU2F2ZSgpIHtcXG5cXHRcXHRcXHRyZXR1cm4ge1xcblxcdFxcdFxcdFxcdGRhdGE6IHsgLi4udGhpcy5zdG9yYWdlIH0sXFxuXFx0XFx0XFx0fTtcXG5cXHRcXHR9LFxcblxcdFxcdG9uQ2hhbmdlU3RhdGUoIHsgc3RhdGUsIHNsdWcgfSApIHtcXG5cXHRcXHRcXHRpZiAoICd1c2VyLWpvdXJuZXktdGFiJyAhPT0gc2x1ZyApIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm47XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdGlmICggJ2VuZCcgPT09IHN0YXRlICkge1xcblxcdFxcdFxcdFxcdHRoaXMubG9hZGluZyA9IHt9O1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHR0aGlzLiRzZXQoIHRoaXMsICdpc0xvYWRpbmcnLCBzdGF0ZSA9PT0gJ2JlZ2luJyApO1xcblxcdFxcdH0sXFxuXFx0XFx0Y2hhbmdlVmFsKCBuYW1lLCB2YWx1ZSApIHtcXG5cXHRcXHRcXHRpZiAoIHRoaXMuaXNMb2FkaW5nICkge1xcblxcdFxcdFxcdFxcdHJldHVybjtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLnN0b3JhZ2UsIG5hbWUsIHZhbHVlICk7XFxuXFx0XFx0XFx0dGhpcy4kc2V0KCB0aGlzLmxvYWRpbmcsIG5hbWUsIHRydWUgKTtcXG5cXG5cXHRcXHRcXHR0aGlzLnNhdmVCeUFqYXgoIHRoaXMsIHRoaXMuJG9wdGlvbnMubmFtZSApO1xcblxcdFxcdH0sXFxuXFx0fSxcXG59O1xcblxcbjwvc2NyaXB0PlxcbjxzdHlsZT5cXG4udXNlci1qb3VybmV5LXNlbGVjdCBzZWxlY3QuY3gtdnVpLXNlbGVjdCB7XFxuXFx0cGFkZGluZzogNnB4IDI0cHggNnB4IDEycHg7XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTRiYWEyMzBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveXVya28vcHJvamVjdHMvY3JvY28ubG9jL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNGJhYTIzMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNGJhYTIzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNGJhYTIzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGJhYTIzMCZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0YmFhMjMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvSXNQUk9JY29uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjQzNTAwZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjQzNTAwZSZsYW5nPXNjc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGI0MzUwMGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGI0MzUwMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGI0MzUwMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGI0MzUwMGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YjQzNTAwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL1NldHRpbmdzUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDU0ZjAzMGVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mcmllbmRseUNhcHRjaGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDU0ZjAzMGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDU0ZjAzMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDU0ZjAzMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZyaWVuZGx5Q2FwdGNoYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDU0ZjAzMGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNTRmMDMwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvZnJpZW5kbHlDYXB0Y2hhL2ZyaWVuZGx5Q2FwdGNoYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JlQ0FQVENIQXYzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MzhjZWI3ZlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlQ0FQVENIQXYzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjM4Y2ViN2YnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjM4Y2ViN2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjM4Y2ViN2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3JlQ0FQVENIQXYzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MzhjZWI3ZlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYzOGNlYjdmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvY2FwdGNoYS9nb29nbGUvcmVDQVBUQ0hBdjMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9oQ2FwdGNoYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzQ1NjdmYTRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9oQ2FwdGNoYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaENhcHRjaGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM0NTY3ZmE0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM0NTY3ZmE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM0NTY3ZmE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9oQ2FwdGNoYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzQ1NjdmYTRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNDU2N2ZhNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL2NhcHRjaGEvaENhcHRjaGEvaENhcHRjaGEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOWZmYTM4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdHVybnN0aWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVhOWZmYTM4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVhOWZmYTM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVhOWZmYTM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOWZmYTM4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWE5ZmZhMzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9jYXB0Y2hhL3R1cm5zdGlsZS90dXJuc3RpbGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThlZmY4MDRjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGF5cGFsVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy95dXJrby9wcm9qZWN0cy9jcm9jby5sb2Mvd3AtY29udGVudC9wbHVnaW5zL2pldGZvcm1idWlsZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzhlZmY4MDRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzhlZmY4MDRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzhlZmY4MDRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThlZmY4MDRjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOGVmZjgwNGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy9nYXRld2F5cy9wYXlwYWwvUGF5cGFsVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjU0YjY0Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00MjU0YjY0YyZsYW5nPXNjc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDI1NGI2NGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDI1NGI2NGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDI1NGI2NGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI1NGI2NGNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MjU0YjY0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3NpZGViYXIvU2V0dGluZ3NTaWRlQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJiMzZlNTVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXB0Y2hhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveXVya28vcHJvamVjdHMvY3JvY28ubG9jL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MmIzNmU1NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MmIzNmU1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MmIzNmU1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJiMzZlNTVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MmIzNmU1NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvY2FwdGNoYS9DYXB0Y2hhVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1NGRiZWJiXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dldFJlc3BvbnNlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveXVya28vcHJvamVjdHMvY3JvY28ubG9jL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNTRkYmViYicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNTRkYmViYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNTRkYmViYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1NGRiZWJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDU0ZGJlYmInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL2dldHJlc3BvbnNlL0dldFJlc3BvbnNlVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ODNjM2RjOVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveXVya28vcHJvamVjdHMvY3JvY28ubG9jL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ODNjM2RjOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ODNjM2RjOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ODNjM2RjOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ODNjM2RjOVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc4M2MzZGM5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy9tYWlsY2hpbXAvTWFpbENoaW1wVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWRjNDJkZTYmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWRjNDJkZTYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWRjNDJkZTZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveXVya28vcHJvamVjdHMvY3JvY28ubG9jL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5ZGM0MmRlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5ZGM0MmRlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5ZGM0MmRlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWRjNDJkZTYmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZGM0MmRlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvb3B0aW9ucy9PcHRpb25zVGFiLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc2OTY2YTFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMveXVya28vcHJvamVjdHMvY3JvY28ubG9jL3dwLWNvbnRlbnQvcGx1Z2lucy9qZXRmb3JtYnVpbGRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzY5NjZhMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzY5NjZhMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzY5NjZhMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc2OTY2YTFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzY5NjZhMScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvcGF5bWVudHMtZ2F0ZXdheXMvUGF5bWVudHNHYXRld2F5cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Bob25lRmllbGRUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViOTMzNDgwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGhvbmVGaWVsZFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGhvbmVGaWVsZFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZWI5MzM0ODAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZWI5MzM0ODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZWI5MzM0ODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Bob25lRmllbGRUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWViOTMzNDgwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWI5MzM0ODAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFkbWluL3BhZ2VzL2pmYi1zZXR0aW5ncy90YWJzL3Bob25lLWZpZWxkL1Bob25lRmllbGRUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Tc3JDYWxsYmFja3NUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3YWIyMzg4JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Tc3JDYWxsYmFja3NUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3YWIyMzg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE3YWIyMzg4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTdhYjIzODgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTdhYjIzODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTdhYjIzODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NzckNhbGxiYWNrc1RhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTdhYjIzODgmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxN2FiMjM4OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYWRtaW4vcGFnZXMvamZiLXNldHRpbmdzL3RhYnMvc3NyLWNhbGxiYWNrcy9Tc3JDYWxsYmFja3NUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZiMGMyZmNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZiMGMyZmMmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3l1cmtvL3Byb2plY3RzL2Nyb2NvLmxvYy93cC1jb250ZW50L3BsdWdpbnMvamV0Zm9ybWJ1aWxkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGZiMGMyZmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGZiMGMyZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGZiMGMyZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJKb3VybmV5VGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZmIwYzJmY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBmYjBjMmZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhZG1pbi9wYWdlcy9qZmItc2V0dGluZ3MvdGFicy91c2VyLWpvdXJuZXkvVXNlckpvdXJuZXlUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmllbmRseUNhcHRjaGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZUNBUFRDSEF2My52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaENhcHRjaGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaENhcHRjaGEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90dXJuc3RpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BheXBhbFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FwdGNoYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haWxDaGltcFRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWlsQ2hpbXBUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1RhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3eXctaW4tanMvd2VicGFjay1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXltZW50c0dhdGV3YXlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaG9uZUZpZWxkVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Bob25lRmllbGRUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NzckNhbGxiYWNrc1RhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHd5dy1pbi1qcy93ZWJwYWNrLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tc3JDYWxsYmFja3NUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJKb3VybmV5VGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad3l3LWluLWpzL3dlYnBhY2stbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJKb3VybmV5VGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lzUFJPSWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiNDM1MDBlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJpZW5kbHlDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNTRmMDMwZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlQ0FQVENIQXYzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MzhjZWI3ZlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hDYXB0Y2hhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNDU2N2ZhNFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3R1cm5zdGlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE5ZmZhMzhcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXlwYWxUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThlZmY4MDRjXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjU0YjY0Y1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcHRjaGFUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyYjM2ZTU1XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2V0UmVzcG9uc2VUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1NGRiZWJiXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbENoaW1wVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ODNjM2RjOVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlkYzQyZGU2JnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGF5bWVudHNHYXRld2F5cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc2OTY2YTFcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaG9uZUZpZWxkVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYjkzMzQ4MFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NzckNhbGxiYWNrc1RhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTdhYjIzODgmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VySm91cm5leVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZiMGMyZmNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGI0MzUwMGUmbGFuZz1zY3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyNTRiNjRjJmxhbmc9c2Nzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlkYzQyZGU2JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tc3JDYWxsYmFja3NUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTdhYjIzODgmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJKb3VybmV5VGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmYjBjMmZjJmxhbmc9Y3NzXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc3BhbicsW192bS5fdihfdm0uX3MoX3ZtLl9fKCAnUHJvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJmdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdGb3JtQnVpbGRlclBhZ2UnLHthdHRyczp7XCJ0aXRsZVwiOl92bS5fXyggJ0pldEZvcm1CdWlsZGVyIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICl9fSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLWNvbnRlbnRcIn0sW19jKCdBbGVydHNMaXN0JyksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItY29udGVudC1tYWluXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjeC12dWktcGFuZWxcIn0sW19jKCdDeFZ1aVRhYnMnLHthdHRyczp7XCJpbi1wYW5lbFwiOmZhbHNlLFwidmFsdWVcIjpfdm0uYWN0aXZlVGFiU2x1ZyxcImxheW91dFwiOlwidmVydGljYWxcIn0sb246e1wiaW5wdXRcIjpfdm0ub25DaGFuZ2VBY3RpdmVUYWJ9fSxfdm0uX2woKF92bS50YWJzKSxmdW5jdGlvbihyZWYsaW5kZXgpe1xudmFyIGRpc3BsYXlCdXR0b24gPSByZWYuZGlzcGxheUJ1dHRvbjsgaWYgKCBkaXNwbGF5QnV0dG9uID09PSB2b2lkIDAgKSBkaXNwbGF5QnV0dG9uID0gdHJ1ZTtcbnZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoIHJlZiwgW1wiZGlzcGxheUJ1dHRvblwiXSApO1xudmFyIHRhYiA9IHJlc3Q7XG5yZXR1cm4gX2MoJ0N4VnVpVGFic1BhbmVsJyx7a2V5OnRhYi5jb21wb25lbnQubmFtZSxhdHRyczp7XCJuYW1lXCI6dGFiLmNvbXBvbmVudC5uYW1lLFwibGFiZWxcIjp0YWIudGl0bGUsXCJkaXNhYmxlZFwiOnRhYi5kaXNhYmxlZCxcImljb25cIjp0YWIuaWNvbn0sc2NvcGVkU2xvdHM6X3ZtLl91KFsodGFiLmNvbXBvbmVudC5yZW5kZXIpP3trZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdrZWVwLWFsaXZlJyxbX2ModGFiLmNvbXBvbmVudCx7cmVmOlwidGFiQ29tcG9uZW50c1wiLHJlZkluRm9yOnRydWUsdGFnOlwiY29tcG9uZW50XCIsYXR0cnM6e1wiaW5jb21pbmdcIjpfdm0uZ2V0SW5jb21pbmcoIHRhYi5jb21wb25lbnQubmFtZSApLFwiaW5uZXItc2x1Z3NcIjpfdm0uYWN0aXZlVGFiSW5uZXJTbHVncyB8fCBbXX19KV0sMSksX3ZtLl92KFwiIFwiKSwoZGlzcGxheUJ1dHRvbik/X2MoJ2N4LXZ1aS1idXR0b24nLHthdHRyczp7XCJidXR0b24tc3R5bGVcIjpcImFjY2VudFwiLFwibG9hZGluZ1wiOl92bS5sb2FkaW5nVGFiWyB0YWIuY29tcG9uZW50Lm5hbWUgXX0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25TYXZlVGFiKCBpbmRleCwgdGFiLmNvbXBvbmVudC5uYW1lICl9fSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJsYWJlbFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygnc3BhbicsW192bS5fdihcIlNhdmVcIildKV19LHByb3h5OnRydWV9XSxudWxsLHRydWUpfSk6X3ZtLl9lKCldfSxwcm94eTp0cnVlfTpudWxsXSxudWxsLHRydWUpfSl9KSwxKV0sMSldKSxfdm0uX3YoXCIgXCIpLF9jKCdTZXR0aW5nc1NpZGVCYXInKV0sMSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLFtfYygnU2ltcGxlV3JhcHBlckNvbXBvbmVudCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcImZyaWVuZGx5X2tleVwifSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJsYWJlbFwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfdm0uX3YoX3ZtLl9zKF92bS5sYWJlbC5rZXkpKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZXNjcmlwdGlvblwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oXG5cdFx0XHRcdCdJdCBjYW4gYmUgZm91bmQgb24gdGhlIHBhZ2UgbGlzdGluZyB5b3VyIEFwcGxpY2F0aW9ucy4gT3IgZm9sbG93IHRoaXMnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdCkgKyAnICcpK1wiXFxuXFx0XFx0XFx0XFx0XCIpLF9jKCdFeHRlcm5hbExpbmsnLHthdHRyczp7XCJocmVmXCI6XCJodHRwczovL2RvY3MuZnJpZW5kbHljYXB0Y2hhLmNvbS8jL2luc3RhbGxhdGlvbj9pZD1fMS1nZW5lcmF0aW5nLWEtc2l0ZWtleVwifX0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oICdndWlkZScsICdqZXQtZm9ybS1idWlsZGVyJyApKStcIlxcblxcdFxcdFxcdFxcdFwiKV0pXSwxKV19LHByb3h5OnRydWV9LHtrZXk6XCJkZWZhdWx0XCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdpbnB1dCcse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOihfdm0uc3RvcmFnZS5rZXkpLGV4cHJlc3Npb246XCJzdG9yYWdlLmtleVwifV0sc3RhdGljQ2xhc3M6XCJjeC12dWktaW5wdXQgc2l6ZS1mdWxsd2lkdGhcIixhdHRyczp7XCJpZFwiOlwiZnJpZW5kbHlfa2V5XCIsXCJ0eXBlXCI6XCJ0ZXh0XCJ9LGRvbVByb3BzOntcInZhbHVlXCI6KF92bS5zdG9yYWdlLmtleSl9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZyl7IHJldHVybjsgfV92bS4kc2V0KF92bS5zdG9yYWdlLCBcImtleVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKX19fSldfSxwcm94eTp0cnVlfV0pfSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwiZnJpZW5kbHlfc2VjcmV0XCIsXCJsYWJlbFwiOl92bS5sYWJlbC5zZWNyZXQsXCJkZXNjcmlwdGlvblwiOl92bS5fXyhcblx0XHRcdCdJdCBjYW4gYmUgZm91bmQgb24gdGhlIHBhZ2UgbGlzdGluZyB5b3VyIEFQSSBrZXlzLicsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHQpLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLnNlY3JldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcInNlY3JldFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5zZWNyZXRcIn19KV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLmtleSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5rZXkpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJrZXlcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uua2V5XCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwuc2VjcmV0LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLnNlY3JldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcInNlY3JldFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5zZWNyZXRcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJ0eXBlXCI6XCJudW1iZXJcIixcIm1pblwiOjAsXCJtYXhcIjoxLFwic3RlcFwiOjAuMSxcImxhYmVsXCI6X3ZtLmxhYmVsLnRocmVzaG9sZCxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAudGhyZXNob2xkLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLnRocmVzaG9sZCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcInRocmVzaG9sZFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS50aHJlc2hvbGRcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdwJyx7c3RhdGljQ2xhc3M6XCJmYi1kZXNjcmlwdGlvblwifSxbX3ZtLl92KF92bS5fcyhfdm0uaGVscC5hcGlQcmVmKStcIiBcIiksX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6X3ZtLmhlbHAuYXBpTGluayxcInRhcmdldFwiOlwiX2JsYW5rXCJ9fSxbX3ZtLl92KF92bS5fcyhfdm0uaGVscC5hcGlMaW5rTGFiZWwpKV0pXSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnc2VjdGlvbicsW19jKCdTaW1wbGVXcmFwcGVyQ29tcG9uZW50Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwiaGNhcHRjaGFfa2V5XCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImxhYmVsXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW192bS5fdihfdm0uX3MoX3ZtLmxhYmVsLmtleSkpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlc2NyaXB0aW9uXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJmYi1kZXNjcmlwdGlvblwifSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyhcblx0XHRcdFx0XHQnWW91IGNhbiBmaW5kIGl0IG9uIHRoaXMgcGFnZSBpbiB0aGUgZmlyc3QgY29sdW1uIG9mIFNpdGVrZXkuJyxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHRcdFx0KSArICcgJykrXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiksX2MoJ0V4dGVybmFsTGluaycse2F0dHJzOntcImhyZWZcIjpcImh0dHBzOi8vZGFzaGJvYXJkLmhjYXB0Y2hhLmNvbS9zaXRlc1wifX0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oICdHbyB0byB0aGUgZGFzaGJvYXJkIG9mIHNpdGVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpK1wiXFxuXFx0XFx0XFx0XFx0XFx0XCIpXSldLDEpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlZmF1bHRcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ2lucHV0Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6KF92bS5zdG9yYWdlLmtleSksZXhwcmVzc2lvbjpcInN0b3JhZ2Uua2V5XCJ9XSxzdGF0aWNDbGFzczpcImN4LXZ1aS1pbnB1dCBzaXplLWZ1bGx3aWR0aFwiLGF0dHJzOntcImlkXCI6XCJoY2FwdGNoYV9rZXlcIixcInR5cGVcIjpcInRleHRcIn0sZG9tUHJvcHM6e1widmFsdWVcIjooX3ZtLnN0b3JhZ2Uua2V5KX0sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe2lmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXsgcmV0dXJuOyB9X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwia2V5XCIsICRldmVudC50YXJnZXQudmFsdWUpfX19KV19LHByb3h5OnRydWV9XSl9KSxfdm0uX3YoXCIgXCIpLF9jKCdTaW1wbGVXcmFwcGVyQ29tcG9uZW50Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwiaGNhcHRjaGFfc2VjcmV0XCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImxhYmVsXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW192bS5fdihfdm0uX3MoX3ZtLmxhYmVsLnNlY3JldCkpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlc2NyaXB0aW9uXCIsZm46ZnVuY3Rpb24oKXtyZXR1cm4gW19jKCdwJyx7c3RhdGljQ2xhc3M6XCJmYi1kZXNjcmlwdGlvblwifSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyhcblx0XHRcdFx0XHRcIllvdSBjYW4gZmluZCBpdCBvbiB0aGUgc2V0dGluZ3MgcGFnZSxcXG50aGlzIHdpbGwgYmUgdGhlIGZpcnN0IGZpZWxkLlwiLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xuXHRcdFx0XHQpICsgJyAnKStcIlxcblxcdFxcdFxcdFxcdFxcdFwiKSxfYygnRXh0ZXJuYWxMaW5rJyx7YXR0cnM6e1wiaHJlZlwiOlwiaHR0cHM6Ly9kYXNoYm9hcmQuaGNhcHRjaGEuY29tL3NldHRpbmdzXCJ9fSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyggJ0dvIHRvIHRoZSBTZXR0aW5ncyBwYWdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpK1wiXFxuXFx0XFx0XFx0XFx0XFx0XCIpXSldLDEpXX0scHJveHk6dHJ1ZX0se2tleTpcImRlZmF1bHRcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ2lucHV0Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6KF92bS5zdG9yYWdlLnNlY3JldCksZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9XSxzdGF0aWNDbGFzczpcImN4LXZ1aS1pbnB1dCBzaXplLWZ1bGx3aWR0aFwiLGF0dHJzOntcImlkXCI6XCJoY2FwdGNoYV9zZWNyZXRcIixcInR5cGVcIjpcInRleHRcIn0sZG9tUHJvcHM6e1widmFsdWVcIjooX3ZtLnN0b3JhZ2Uuc2VjcmV0KX0sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe2lmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXsgcmV0dXJuOyB9X3ZtLiRzZXQoX3ZtLnN0b3JhZ2UsIFwic2VjcmV0XCIsICRldmVudC50YXJnZXQudmFsdWUpfX19KV19LHByb3h5OnRydWV9XSl9KV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImVsZW1lbnQtaWRcIjpcInR1cm5zdGlsZV9rZXlcIixcImxhYmVsXCI6X3ZtLmxhYmVsLmtleSxcImRlc2NyaXB0aW9uXCI6X3ZtLl9fKFxuXHRcdFx0J1JlYWQgdGhlIGhpbnQgdG8gdGhlIFNlY3JldCBLZXkgZmllbGQnLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0KSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5rZXkpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJrZXlcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uua2V5XCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wiZWxlbWVudC1pZFwiOlwidHVybnN0aWxlX3NlY3JldFwiLFwibGFiZWxcIjpfdm0ubGFiZWwuc2VjcmV0LFwiZGVzY3JpcHRpb25cIjpfdm0uX18oXG5cdFx0XHQnWW91IGNhbiBmaW5kIGJvdGgga2V5cyBvbiB5b3VyIFR1cm5zdGlsZSBTaXRlIHNldHRpbmdzIHBhZ2UnLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXG5cdFx0KSxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5zZWNyZXQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJzZWNyZXRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2Uuc2VjcmV0XCJ9fSksX3ZtLl92KFwiIFwiKSxfYygncCcse3N0YXRpY0NsYXNzOlwiZmItZGVzY3JpcHRpb25cIn0sW192bS5fdihcIlxcblxcdFxcdFwiK192bS5fcyhfdm0uX18oICdEaWRuXFwndCBmaW5kIGl0PyBIZXJlIGlzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcpK1wiXFxuXFx0XFx0XCIpLF9jKCdFeHRlcm5hbExpbmsnLHthdHRyczp7XCJocmVmXCI6XCJodHRwczovL2RldmVsb3BlcnMuY2xvdWRmbGFyZS5jb20vdHVybnN0aWxlL2dldC1zdGFydGVkLyNnZXQtYS1zaXRla2V5LWFuZC1zZWNyZXQta2V5XCJ9fSxbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XCIrX3ZtLl9zKF92bS5fXyggJ2EgbW9yZSBkZXRhaWxlZCBkZXNjcmlwdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApKStcIlxcblxcdFxcdFwiKV0pXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdzZWN0aW9uJyxbX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcImxhYmVsXCI6X3ZtLmxhYmVsLmNsaWVudF9pZCxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sbW9kZWw6e3ZhbHVlOihfdm0uc3RvcmFnZS5jbGllbnRfaWQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uc3RvcmFnZSwgXCJjbGllbnRfaWRcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInN0b3JhZ2UuY2xpZW50X2lkXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubGFiZWwuc2VjcmV0LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnfSxtb2RlbDp7dmFsdWU6KF92bS5zdG9yYWdlLnNlY3JldCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS4kc2V0KF92bS5zdG9yYWdlLCBcInNlY3JldFwiLCAkJHYpfSxleHByZXNzaW9uOlwic3RvcmFnZS5zZWNyZXRcIn19KV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdTaWRlQmFyQm94ZXMnLHtzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJpY29uLWhlbHBcIixmbjpmdW5jdGlvbigpe3JldHVybiBbX2MoJ3N2Zycse2F0dHJzOntcIndpZHRoXCI6XCIxNFwiLFwiaGVpZ2h0XCI6XCIyMVwiLFwidmlld0JveFwiOlwiMCAwIDE0IDIxXCIsXCJmaWxsXCI6XCJub25lXCIsXCJ4bWxuc1wiOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn19LFtfYygncGF0aCcse2F0dHJzOntcImRcIjpcIk01LjI1IDIxSDguNzVWMTcuNUg1LjI1VjIxWk03IDBDMy4xMzI1IDAgMCAzLjEzMjUgMCA3SDMuNUMzLjUgNS4wNzUgNS4wNzUgMy41IDcgMy41QzguOTI1IDMuNSAxMC41IDUuMDc1IDEwLjUgN0MxMC41IDEwLjUgNS4yNSAxMC4wNjI1IDUuMjUgMTUuNzVIOC43NUM4Ljc1IDExLjgxMjUgMTQgMTEuMzc1IDE0IDdDMTQgMy4xMzI1IDEwLjg2NzUgMCA3IDBaXCIsXCJmaWxsXCI6XCIjN0I3RTgxXCJ9fSldKV19LHByb3h5OnRydWV9LHtrZXk6XCJjb250ZW50LWhlbHBcIixmbjpmdW5jdGlvbihib3gpe3JldHVybiBbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGlua1wifSxbX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6Ym94Lmxpbmtfa25vd2xlZGdlLFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWljb25cIn0sW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTRcIixcImhlaWdodFwiOlwiMTZcIixcInZpZXdCb3hcIjpcIjAgMCAxNCAxNlwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNMTMuNDU4IDExLjI1NTJMMTMuNDU4IDEuNDExNUMxMy40NTggMS4wMzA2NCAxMy4xMzU3IDAuNzA4Mzc0IDEyLjc1NDkgMC43MDgzNzRMMy4xNDU1MSAwLjcwODM3NEMxLjU5Mjc3IDAuNzA4Mzc0IDAuMzMzMDA4IDEuOTY4MTQgMC4zMzMwMDggMy41MjA4N0wwLjMzMzAwOCAxMi44OTU5QzAuMzMzMDA4IDE0LjQ0ODYgMS41OTI3NyAxNS43MDg0IDMuMTQ1NTEgMTUuNzA4NEwxMi43NTQ5IDE1LjcwODRDMTMuMTM1NyAxNS43MDg0IDEzLjQ1OCAxNS40MTU0IDEzLjQ1OCAxNS4wMDUyTDEzLjQ1OCAxNC41MzY1QzEzLjQ1OCAxNC4zMzE0IDEzLjM0MDggMTQuMTI2MyAxMy4xOTQzIDE0LjAwOTJDMTMuMDQ3OSAxMy41NDA0IDEzLjA0NzkgMTIuMjUxMyAxMy4xOTQzIDExLjgxMTlDMTMuMzQwOCAxMS42OTQ3IDEzLjQ1OCAxMS40ODk2IDEzLjQ1OCAxMS4yNTUyWk00LjA4MzAxIDQuNjM0MTZDNC4wODMwMSA0LjU0NjI2IDQuMTQxNiA0LjQ1ODM3IDQuMjU4NzkgNC40NTgzN0wxMC40Njk3IDQuNDU4MzdDMTAuNTU3NiA0LjQ1ODM3IDEwLjY0NTUgNC41NDYyNiAxMC42NDU1IDQuNjM0MTZMMTAuNjQ1NSA1LjIyMDA5QzEwLjY0NTUgNS4zMzcyOCAxMC41NTc2IDUuMzk1ODcgMTAuNDY5NyA1LjM5NTg3TDQuMjU4NzkgNS4zOTU4N0M0LjE0MTYgNS4zOTU4NyA0LjA4MzAxIDUuMzM3MjggNC4wODMwMSA1LjIyMDA5TDQuMDgzMDEgNC42MzQxNlpNNC4wODMwMSA2LjUwOTE2QzQuMDgzMDEgNi40MjEyNyA0LjE0MTYgNi4zMzMzNyA0LjI1ODc5IDYuMzMzMzdMMTAuNDY5NyA2LjMzMzM3QzEwLjU1NzYgNi4zMzMzNyAxMC42NDU1IDYuNDIxMjcgMTAuNjQ1NSA2LjUwOTE2TDEwLjY0NTUgNy4wOTUwOUMxMC42NDU1IDcuMjEyMjggMTAuNTU3NiA3LjI3MDg3IDEwLjQ2OTcgNy4yNzA4N0w0LjI1ODc5IDcuMjcwODdDNC4xNDE2IDcuMjcwODcgNC4wODMwMSA3LjIxMjI4IDQuMDgzMDEgNy4wOTUwOUw0LjA4MzAxIDYuNTA5MTZaTTExLjQ5NTEgMTMuODMzNEwzLjE0NTUxIDEzLjgzMzRDMi42MTgxNiAxMy44MzM0IDIuMjA4MDEgMTMuNDIzMiAyLjIwODAxIDEyLjg5NTlDMi4yMDgwMSAxMi4zOTc4IDIuNjE4MTYgMTEuOTU4NCAzLjE0NTUxIDExLjk1ODRMMTEuNDk1MSAxMS45NTg0QzExLjQzNjUgMTIuNDg1NyAxMS40MzY1IDEzLjMzNTMgMTEuNDk1MSAxMy44MzM0WlwiLFwiZmlsbFwiOlwiIzAwN0NCQVwifX0pXSldKSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImhlbHAtY2VudGVyLWxpbmstbGFiZWxcIn0sW192bS5fdihfdm0uX3MoYm94LmxhYmVsX2tub3dsZWRnZSkpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGlua1wifSxbX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6Ym94LmxpbmtfY29tbXVuaXR5LFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWljb25cIn0sW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTZcIixcImhlaWdodFwiOlwiMTZcIixcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNMTUuNTkxMyA4LjA0NTY0QzE1LjU5MTMgMy44NzcyOCAxMi4yMTQgMC41IDguMDQ1NjQgMC41QzMuODc3MjggMC41IDAuNSAzLjg3NzI4IDAuNSA4LjA0NTY0QzAuNSAxMS44MTg1IDMuMjM4MzQgMTQuOTUyMyA2Ljg1OTAzIDE1LjVMNi44NTkwMyAxMC4yMzYzTDQuOTQyMTkgMTAuMjM2M0w0Ljk0MjE5IDguMDQ1NjRMNi44NTkwMyA4LjA0NTY0TDYuODU5MDMgNi40MDI2NEM2Ljg1OTAzIDQuNTE2MjMgNy45ODQ3OSAzLjQ1MTMyIDkuNjg4NjQgMy40NTEzMkMxMC41NDA2IDMuNDUxMzIgMTEuMzkyNSAzLjYwMzQ1IDExLjM5MjUgMy42MDM0NUwxMS4zOTI1IDUuNDU5NDNMMTAuNDQ5MyA1LjQ1OTQzQzkuNTA2MDkgNS40NTk0MyA5LjIwMTgzIDYuMDM3NTMgOS4yMDE4MyA2LjY0NjA0TDkuMjAxODMgOC4wNDU2NEwxMS4zMDEyIDguMDQ1NjRMMTAuOTY2NSAxMC4yMzYzTDkuMjAxODMgMTAuMjM2M0w5LjIwMTgzIDE1LjVDMTIuODIyNSAxNC45NTIzIDE1LjU5MTMgMTEuODE4NSAxNS41OTEzIDguMDQ1NjRaXCIsXCJmaWxsXCI6XCIjMDA3Q0JBXCJ9fSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1sYWJlbFwifSxbX3ZtLl92KF92bS5fcyhib3gubGFiZWxfY29tbXVuaXR5KSldKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rXCJ9LFtfYygnYScse2F0dHJzOntcImhyZWZcIjpib3gubGlua19zdXBwb3J0LFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWljb25cIn0sW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTVcIixcImhlaWdodFwiOlwiMThcIixcInZpZXdCb3hcIjpcIjAgMCAxNSAxOFwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJkXCI6XCJNNy41ODMzMyAwLjY2NjY4N0MzLjY3NSAwLjY2NjY4NyAwLjUgMy44NDE2OSAwLjUgNy43NTAwMkMwLjUgMTEuNjU4NCAzLjY3NSAxNC44MzM0IDcuNTgzMzMgMTQuODMzNEg4VjE3LjMzMzRDMTIuMDUgMTUuMzgzNCAxNC42NjY3IDExLjUgMTQuNjY2NyA3Ljc1MDAyQzE0LjY2NjcgMy44NDE2OSAxMS40OTE3IDAuNjY2Njg3IDcuNTgzMzMgMC42NjY2ODdaTTguNDE2NjcgMTIuNzVINi43NVYxMS4wODM0SDguNDE2NjdWMTIuNzVaTTguNDE2NjcgOS44MzMzNUg2Ljc1QzYuNzUgNy4xMjUwMiA5LjI1IDcuMzMzMzUgOS4yNSA1LjY2NjY5QzkuMjUgNC43NTAwMiA4LjUgNC4wMDAwMiA3LjU4MzMzIDQuMDAwMDJDNi42NjY2NyA0LjAwMDAyIDUuOTE2NjcgNC43NTAwMiA1LjkxNjY3IDUuNjY2NjlINC4yNUM0LjI1IDMuODI1MDIgNS43NDE2NyAyLjMzMzM1IDcuNTgzMzMgMi4zMzMzNUM5LjQyNSAyLjMzMzM1IDEwLjkxNjcgMy44MjUwMiAxMC45MTY3IDUuNjY2NjlDMTAuOTE2NyA3Ljc1MDAyIDguNDE2NjcgNy45NTgzNSA4LjQxNjY3IDkuODMzMzVaXCIsXCJmaWxsXCI6XCIjMDA3Q0JBXCJ9fSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1sYWJlbFwifSxbX3ZtLl92KF92bS5fcyhib3gubGFiZWxfc3VwcG9ydCkpXSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGlua1wifSxbX2MoJ2EnLHthdHRyczp7XCJocmVmXCI6Ym94LmxpbmtfZ2l0LFwidGFyZ2V0XCI6XCJfYmxhbmtcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJoZWxwLWNlbnRlci1saW5rLWljb25cIn0sW19jKCdzdmcnLHthdHRyczp7XCJ3aWR0aFwiOlwiMTZcIixcImhlaWdodFwiOlwiMTZcIixcInZpZXdCb3hcIjpcIjAgMCAxNiAxNlwiLFwiZmlsbFwiOlwibm9uZVwiLFwieG1sbnNcIjpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9fSxbX2MoJ3BhdGgnLHthdHRyczp7XCJmaWxsLXJ1bGVcIjpcImV2ZW5vZGRcIixcImNsaXAtcnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcuOTc2IDBDNS44NjA3MSAwLjAwMDI2NTE1NiAzLjgzMjE0IDAuODQwNjc2IDIuMzM2NDEgMi4zMzY0MUMwLjg0MDY3NiAzLjgzMjE0IDAuMDAwMjY1MTU2IDUuODYwNzEgMCA3Ljk3NkMwIDExLjQ5OCAyLjMgMTQuNDgzIDUuNDMxIDE1LjU2QzUuODIzIDE1LjYwOSA1Ljk2OSAxNS4zNjQgNS45NjkgMTUuMTY4VjEzLjc5OEMzLjc2OCAxNC4yODggMy4yNzkgMTIuNzIyIDMuMjc5IDEyLjcyMkMyLjkzNiAxMS43OTIgMi4zOTggMTEuNTQ3IDIuMzk4IDExLjU0N0MxLjY2NCAxMS4wNTggMi40NDYgMTEuMDU4IDIuNDQ2IDExLjA1OEMzLjIyOSAxMS4xMDcgMy42NyAxMS44OSAzLjY3IDExLjg5QzQuNDA0IDEzLjExMyA1LjUyOSAxMi43NyA1Ljk3IDEyLjU3NUM2LjAxOCAxMi4wMzcgNi4yNjMgMTEuNjk1IDYuNDU5IDExLjQ5OUM0LjY5NyAxMS4zMDMgMi44MzggMTAuNjE4IDIuODM4IDcuNTM1QzIuODM4IDYuNjU1IDMuMTMxIDUuOTY5IDMuNjcgNS4zODJDMy42MiA1LjIzNSAzLjMyNyA0LjQwNCAzLjc2OCAzLjMyN0MzLjc2OCAzLjMyNyA0LjQ1MyAzLjEzMSA1Ljk2OSA0LjE1OUM2LjYwNSAzLjk2MyA3LjI5MSAzLjkxNCA3Ljk3NiAzLjkxNEM4LjY2MSAzLjkxNCA5LjM0NiA0LjAxMiA5Ljk4MiA0LjE1OUMxMS40OTkgMy4xMzIgMTIuMTg0IDMuMzI3IDEyLjE4NCAzLjMyN0MxMi42MjQgNC40MDQgMTIuMzMgNS4yMzUgMTIuMjgxIDUuNDMxQzEyLjgxOTkgNi4wMTgwOCAxMy4xMTcxIDYuNzg3MSAxMy4xMTMgNy41ODRDMTMuMTEzIDEwLjY2NyAxMS4yNTMgMTEuMzAzIDkuNDkzIDExLjQ5OUM5Ljc4NiAxMS43NDMgMTAuMDMxIDEyLjIzMiAxMC4wMzEgMTIuOTY2VjE1LjE2OEMxMC4wMzEgMTUuMzY0IDEwLjE3NyAxNS42MDggMTAuNTY5IDE1LjU2QzEyLjE1NSAxNS4wMjQ4IDEzLjUzMjcgMTQuMDA0NiAxNC41MDczIDEyLjY0MzZDMTUuNDgxOCAxMS4yODI3IDE2LjAwNCA5LjY0OTg5IDE2IDcuOTc2QzE1Ljk1MSAzLjU3MiAxMi4zOCAwIDcuOTc2IDBaXCIsXCJmaWxsXCI6XCIjMDA3Q0JBXCJ9fSldKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGVscC1jZW50ZXItbGluay1sYWJlbFwifSxbX3ZtLl92KF92bS5fcyhib3gubGFiZWxfZ2l0KSldKV0pXSldfX1dKX0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyxfdm0uX2woKF92bS5jYXB0Y2hhKSxmdW5jdGlvbih0YWIsaW5kZXgpe3JldHVybiBfYygnQ3hWdWlDb2xsYXBzZU1pbmknLHtrZXk6dGFiLmNvbXBvbmVudC5uYW1lLGF0dHJzOntcIndpdGgtcGFuZWxcIjpcIlwiLFwiaWNvblwiOnRhYi5pY29uLFwibGFiZWxcIjpfdm0uZ2V0VGFiVGl0bGUoIHRhYiApLFwiZGlzYWJsZWRcIjp0YWIuZGlzYWJsZWQsXCJpbml0aWFsLWFjdGl2ZVwiOl92bS5pc0FjdGl2ZSggdGFiLmNvbXBvbmVudC5uYW1lICl9LG9uOntcImNoYW5nZVwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vbkNoYW5nZUFjdGl2ZSggJGV2ZW50LCB0YWIuY29tcG9uZW50Lm5hbWUgKX19fSxbX2MoJ2tlZXAtYWxpdmUnLFtfYyh0YWIuY29tcG9uZW50LHtyZWY6XCJjYXB0Y2hhXCIscmVmSW5Gb3I6dHJ1ZSx0YWc6XCJjb21wb25lbnRcIixhdHRyczp7XCJpbmNvbWluZ1wiOl92bS5nZXRJbmNvbWluZ0NhcHRjaGEoIHRhYi5jb21wb25lbnQubmFtZSApfX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktYnV0dG9uJyx7YXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJhY2NlbnRcIixcImxvYWRpbmdcIjpfdm0ubG9hZGluZ0dhdGV3YXlzWyB0YWIuY29tcG9uZW50Lm5hbWUgXX0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25TYXZlR2F0ZXdheSggaW5kZXgsIHRhYi5jb21wb25lbnQubmFtZSApfX19LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX3ZtLl92KFwiU2F2ZVwiKV0pXSldLDEpfSksMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5hcGlfa2V5LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwiZGVzY3JpcHRpb25cIjooKF92bS5oZWxwLmFwaVByZWYpICsgXCIgPGEgaHJlZj1cXFwiXCIgKyAoX3ZtLmhlbHAuYXBpTGluaykgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlwiICsgKF92bS5oZWxwLmFwaUxpbmtMYWJlbCkgKyBcIjwvYT5cIiksXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLmFwaV9rZXkpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uYXBpX2tleT0kJHZ9LGV4cHJlc3Npb246XCJhcGlfa2V5XCJ9fSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJsYWJlbFwiOl92bS5sYWJlbC5hcGlfa2V5LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwiZGVzY3JpcHRpb25cIjooKF92bS5oZWxwLmFwaVByZWYpICsgXCIgPGEgaHJlZj1cXFwiXCIgKyAoX3ZtLmhlbHAuYXBpTGluaykgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPlwiICsgKF92bS5oZWxwLmFwaUxpbmtMYWJlbCkgKyBcIjwvYT5cIiksXCJzaXplXCI6J2Z1bGx3aWR0aCd9LG1vZGVsOnt2YWx1ZTooX3ZtLmFwaV9rZXkpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uYXBpX2tleT0kJHZ9LGV4cHJlc3Npb246XCJhcGlfa2V5XCJ9fSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLFtfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiZW5hYmxlX2Rldl9tb2RlXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJsYWJlbFwiOl92bS5sb2FkaW5nLmVuYWJsZV9kZXZfbW9kZSA/ICgoX3ZtLmxhYmVsLmVuYWJsZV9kZXZfbW9kZSkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuZW5hYmxlX2Rldl9tb2RlLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5lbmFibGVfZGV2X21vZGUsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnZW5hYmxlX2Rldl9tb2RlJyApID8gX3ZtLnN0b3JhZ2UuZW5hYmxlX2Rldl9tb2RlIDogZmFsc2UsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2VuYWJsZV9kZXZfbW9kZScsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJjbGVhcl9vbl91bmluc3RhbGxcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuY2xlYXJfb25fdW5pbnN0YWxsID8gKChfdm0ubGFiZWwuY2xlYXJfb25fdW5pbnN0YWxsKSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5jbGVhcl9vbl91bmluc3RhbGwsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLmNsZWFyX29uX3VuaW5zdGFsbCxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdjbGVhcl9vbl91bmluc3RhbGwnICkgPyBfdm0uc3RvcmFnZS5jbGVhcl9vbl91bmluc3RhbGwgOiBmYWxzZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnY2xlYXJfb25fdW5pbnN0YWxsJywgJGV2ZW50ICl9fX0pLF92bS5fdihcIiBcIiksX2MoJ2N4LXZ1aS1pbnB1dCcse2F0dHJzOntcIm5hbWVcIjpcImZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eVwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnLFwibGFiZWxcIjpfdm0ubG9hZGluZy5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHkgPyAoKF92bS5sYWJlbC5mb3JtX3JlY29yZHNfYWNjZXNzX2NhcGFiaWxpdHkpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuZm9ybV9yZWNvcmRzX2FjY2Vzc19jYXBhYmlsaXR5LFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2Zvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eScgKSA/IF92bS5zdG9yYWdlLmZvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eSA6ICdtYW5hZ2Vfb3B0aW9ucycsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2Zvcm1fcmVjb3Jkc19hY2Nlc3NfY2FwYWJpbGl0eScsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktc2VsZWN0Jyx7YXR0cnM6e1wibmFtZVwiOlwic3NyX3ZhbGlkYXRpb25fbWV0aG9kXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCcsXCJsYWJlbFwiOl92bS5sb2FkaW5nLnNzcl92YWxpZGF0aW9uX21ldGhvZCA/ICgoX3ZtLmxhYmVsLnNzcl92YWxpZGF0aW9uX21ldGhvZCkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuc3NyX3ZhbGlkYXRpb25fbWV0aG9kLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5zc3JfdmFsaWRhdGlvbl9tZXRob2QsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnc3NyX3ZhbGlkYXRpb25fbWV0aG9kJyApID8gX3ZtLnN0b3JhZ2Uuc3NyX3ZhbGlkYXRpb25fbWV0aG9kIDogJ3Jlc3QnLFwib3B0aW9ucy1saXN0XCI6X3ZtLnNlbGVjdE9wdGlvbnMsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ3Nzcl92YWxpZGF0aW9uX21ldGhvZCcsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktZi1zZWxlY3QnLHthdHRyczp7XCJuYW1lXCI6XCJzZWxmX3Byb21vdGFibGVfcm9sZXNcIixcImxhYmVsXCI6X3ZtLmxvYWRpbmcuc2VsZl9wcm9tb3RhYmxlX3JvbGVzID8gKChfdm0ubGFiZWwuc2VsZl9wcm9tb3RhYmxlX3JvbGVzKSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5zZWxmX3Byb21vdGFibGVfcm9sZXMsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLnNlbGZfcHJvbW90YWJsZV9yb2xlcyxcInZhbHVlXCI6X3ZtLnNlbGVjdGVkU2VsZlByb21vdGFibGVSb2xlcyxcIm9wdGlvbnMtbGlzdFwiOl92bS5hdmFpbGFibGVSb2xlcyxcIm11bHRpcGxlXCI6dHJ1ZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZyxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcInNpemVcIjonZnVsbHdpZHRoJ30sb246e1wib24tY2hhbmdlXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVNlbGZQcm9tb3RhYmxlUm9sZXMoICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktY29tcG9uZW50LXdyYXBwZXInLHthdHRyczp7XCJsYWJlbFwiOl92bS5fXyggJ0Zvcm0gQWNjZXNzaWJpbGl0eScsICdqZXQtZm9ybS1idWlsZGVyJyApLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdfX0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY3gtdnVpLWlubmVyLXBhbmVsXCJ9LFtfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiZGlzYWJsZV9uZXh0X2J1dHRvblwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5kaXNhYmxlX25leHRfYnV0dG9uID8gKChfdm0ubGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvbikgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuZGlzYWJsZV9uZXh0X2J1dHRvbixcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuZGlzYWJsZV9uZXh0X2J1dHRvbixcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdkaXNhYmxlX25leHRfYnV0dG9uJyApID8gX3ZtLnN0b3JhZ2UuZGlzYWJsZV9uZXh0X2J1dHRvbiA6IHRydWUsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2Rpc2FibGVfbmV4dF9idXR0b24nLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwic2Nyb2xsX29uX25leHRcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXSxcImxhYmVsXCI6X3ZtLmxvYWRpbmcuc2Nyb2xsX29uX25leHQgPyAoKF92bS5sYWJlbC5zY3JvbGxfb25fbmV4dCkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuc2Nyb2xsX29uX25leHQsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLnNjcm9sbF9vbl9uZXh0LFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3Njcm9sbF9vbl9uZXh0JyApID8gX3ZtLnN0b3JhZ2Uuc2Nyb2xsX29uX25leHQgOiBmYWxzZSxcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnc2Nyb2xsX29uX25leHQnLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiYXV0b19mb2N1c1wiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwibGFiZWxcIjpfdm0ubG9hZGluZy5hdXRvX2ZvY3VzID8gKChfdm0ubGFiZWwuYXV0b19mb2N1cykgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuYXV0b19mb2N1cyxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuYXV0b19mb2N1cyxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdhdXRvX2ZvY3VzJyApID8gX3ZtLnN0b3JhZ2UuYXV0b19mb2N1cyA6IGZhbHNlLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdhdXRvX2ZvY3VzJywgJGV2ZW50ICl9fX0pXSwxKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktY29tcG9uZW50LXdyYXBwZXInLHthdHRyczp7XCJsYWJlbFwiOl92bS5fXyggJ0Zvcm0gUmVxdWVzdCBBcmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF19fSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibmFtZVwiOlwiZ2ZiX3JlcXVlc3RfYXJnc19rZXlcIixcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcsIF92bS5lcnJvcnMuZ2ZiX3JlcXVlc3RfYXJnc19rZXkgPyAnamZiLWhhcy1lcnJvcicgOiAnJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnLFwibGFiZWxcIjonUmVxdWVzdCBrZXknLFwiZGVzY3JpcHRpb25cIjonVW5pcXVlIGZvcm0gcGFyYW1ldGVyIChrZXkpJyxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuaGFzT3duUHJvcGVydHkoICdnZmJfcmVxdWVzdF9hcmdzX2tleScgKSA/IF92bS5zdG9yYWdlLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5IDogJzExMTEnLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICdnZmJfcmVxdWVzdF9hcmdzX2tleScsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLChfdm0uZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5KT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItZmllbGQtZXJyb3JcIn0sW192bS5fdihcIlxcbiAgICAgIFwiK192bS5fcyhfdm0uZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3Nfa2V5KStcIlxcbiAgICBcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktaW5wdXQnLHthdHRyczp7XCJuYW1lXCI6XCJnZmJfcmVxdWVzdF9hcmdzX3ZhbHVlXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnLCBfdm0uZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUgPyAnamZiLWhhcy1lcnJvcicgOiAnJyBdLFwic2l6ZVwiOidmdWxsd2lkdGgnLFwibGFiZWxcIjonUmVxdWVzdCB2YWx1ZScsXCJkZXNjcmlwdGlvblwiOidVbmlxdWUgZm9ybSBwYXJhbWV0ZXIgKHZhbHVlKScsXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnZ2ZiX3JlcXVlc3RfYXJnc192YWx1ZScgKSA/IF92bS5zdG9yYWdlLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUgOiAnMjIyMicsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2dmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUnLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSwoX3ZtLmVycm9ycy5nZmJfcmVxdWVzdF9hcmdzX3ZhbHVlKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqZmItZmllbGQtZXJyb3JcIn0sW192bS5fdihcIlxcbiAgICAgIFwiK192bS5fcyhfdm0uZXJyb3JzLmdmYl9yZXF1ZXN0X2FyZ3NfdmFsdWUpK1wiXFxuICAgIFwiKV0pOl92bS5fZSgpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3NlY3Rpb24nLFtfYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwidXNlX2dhdGV3YXlzXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJsYWJlbFwiOl92bS5sYWJlbC51c2VfZ2F0ZXdheXMsXCJkZXNjcmlwdGlvblwiOl92bS5oZWxwLnVzZV9nYXRld2F5cyxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UudXNlX2dhdGV3YXlzfSxvbjp7XCJpbnB1dFwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5jaGFuZ2VWYWwoICd1c2VfZ2F0ZXdheXMnLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSwoX3ZtLnN0b3JhZ2UudXNlX2dhdGV3YXlzKT9fYygnY3gtdnVpLXN3aXRjaGVyJyx7YXR0cnM6e1wibmFtZVwiOlwiZW5hYmxlX3Rlc3RfbW9kZVwiLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5lbmFibGVfdGVzdF9tb2RlLFwibGFiZWxcIjpfdm0ubGFiZWwuZW5hYmxlX3Rlc3RfbW9kZSxcInZhbHVlXCI6X3ZtLnN0b3JhZ2UuZW5hYmxlX3Rlc3RfbW9kZX0sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnZW5hYmxlX3Rlc3RfbW9kZScsICRldmVudCApfX19KTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uc3RvcmFnZS51c2VfZ2F0ZXdheXMpP1tfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjeC12dWktaW5uZXItcGFuZWxcIn0sX3ZtLl9sKChfdm0uZ2F0ZXdheXMpLGZ1bmN0aW9uKHRhYixpbmRleCl7cmV0dXJuIF9jKCdDeFZ1aUNvbGxhcHNlTWluaScse2tleTp0YWIuY29tcG9uZW50Lm5hbWUsYXR0cnM6e1wid2l0aC1wYW5lbFwiOlwiXCIsXCJpY29uXCI6dGFiLmljb24sXCJsYWJlbFwiOnRhYi50aXRsZSxcImRpc2FibGVkXCI6dGFiLmRpc2FibGVkLFwiaW5pdGlhbC1hY3RpdmVcIjpfdm0uaXNBY3RpdmUoIHRhYi5jb21wb25lbnQubmFtZSApfSxvbjp7XCJjaGFuZ2VcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25DaGFuZ2VBY3RpdmUoICRldmVudCwgdGFiLmNvbXBvbmVudC5uYW1lICl9fX0sW19jKCdrZWVwLWFsaXZlJyxbX2ModGFiLmNvbXBvbmVudCx7cmVmOlwiZ2F0ZXdheXNcIixyZWZJbkZvcjp0cnVlLHRhZzpcImNvbXBvbmVudFwiLGF0dHJzOntcImluY29taW5nXCI6X3ZtLmdldEluY29taW5nKCB0YWIuY29tcG9uZW50Lm5hbWUgKX19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLWJ1dHRvbicse2F0dHJzOntcImJ1dHRvbi1zdHlsZVwiOlwiYWNjZW50XCIsXCJsb2FkaW5nXCI6X3ZtLmxvYWRpbmdHYXRld2F5c1sgdGFiLmNvbXBvbmVudC5uYW1lIF19LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLm9uU2F2ZUdhdGV3YXkoIGluZGV4LCB0YWIuY29tcG9uZW50Lm5hbWUgKX19fSxbX2MoJ3NwYW4nLHthdHRyczp7XCJzbG90XCI6XCJsYWJlbFwifSxzbG90OlwibGFiZWxcIn0sW192bS5fdihcIlNhdmVcIildKV0pXSwxKX0pLDEpXTpfdm0uX2UoKV0sMil9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLFtfYygnY3gtdnVpLWlucHV0Jyx7YXR0cnM6e1wibmFtZVwiOlwiaXBpbmZvX3Rva2VuXCIsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJzaXplXCI6J2Z1bGx3aWR0aCcsXCJsYWJlbFwiOl92bS5sb2FkaW5nLmlwaW5mb190b2tlbiA/ICgoX3ZtLmxhYmVsLmlwaW5mb190b2tlbikgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuaXBpbmZvX3Rva2VuLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5pcGluZm9fdG9rZW4sXCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmhhc093blByb3BlcnR5KCAnaXBpbmZvX3Rva2VuJyApID8gX3ZtLnN0b3JhZ2UuaXBpbmZvX3Rva2VuIDogJycsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2lwaW5mb190b2tlbicsICRldmVudCApfX19KV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLFsoX3ZtLm1pZ3JhdGlvbkluUHJvZ3Jlc3MpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImpmYi1zc3ItbWlncmF0aW9uLXdhaXRcIn0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJqZmItc3NyLW1pZ3JhdGlvbi13YWl0X19zcGlubmVyXCIsYXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLFtfYygnc3Ryb25nJyxbX3ZtLl92KF92bS5fcyhfdm0uX18oICdNaWdyYXRpb24gaW4gcHJvZ3Jlc3PigKYnLCAnamV0LWZvcm0tYnVpbGRlcicgKSkpXSksX3ZtLl92KFwiIFwiKSxfYygncCcsW192bS5fdihfdm0uX3MoX3ZtLmhlbHAubWlncmF0aW9uSW5Qcm9ncmVzcykpXSldKV0pOltfYygnY3gtdnVpLWNvbXBvbmVudC13cmFwcGVyJyx7YXR0cnM6e1wibGFiZWxcIjpfdm0ubG9hZGluZy5jYWxsYmFja3MgPyAoKF92bS5sYWJlbC5jYWxsYmFja3MpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmNhbGxiYWNrcyxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuY2FsbGJhY2tzLFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdfX0sW19jKCd0ZXh0YXJlYScse3N0YXRpY0NsYXNzOlwiamZiLXNzci1jYWxsYmFja3MtdGV4dGFyZWFcIixhdHRyczp7XCJyb3dzXCI6XCIxMFwiLFwiZGlzYWJsZWRcIjpfdm0uaXNMb2FkaW5nfSxkb21Qcm9wczp7XCJ2YWx1ZVwiOl92bS5zdG9yYWdlLmNhbGxiYWNrc30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0ub25JbnB1dCggJGV2ZW50LnRhcmdldC52YWx1ZSApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktYnV0dG9uJyx7YXR0cnM6e1wiYnV0dG9uLXN0eWxlXCI6XCJhY2NlbnRcIixcImRpc2FibGVkXCI6X3ZtLmlzTG9hZGluZyB8fCAhX3ZtLmhhc1Vuc2F2ZWRDYWxsYmFja3NDaGFuZ2V9LG9uOntcImNsaWNrXCI6X3ZtLm9uU2F2ZUNhbGxiYWNrc319LFtfYygnc3Bhbicse2F0dHJzOntcInNsb3RcIjpcImxhYmVsXCJ9LHNsb3Q6XCJsYWJlbFwifSxbX3ZtLl92KF92bS5fcyhfdm0uX18oICdTYXZlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpKV0pXSldLDEpLF92bS5fdihcIiBcIiksKF92bS5oYXNSZWplY3RlZCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiamZiLXNzci1jYWxsYmFja3MtcmVqZWN0ZWRcIn0sW19jKCdzdHJvbmcnLFtfdm0uX3YoX3ZtLl9zKF92bS5fXyggJ05vdCBzYXZlZDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSkpXSksX3ZtLl92KFwiIFwiKSxfYygndWwnLHtzdGF0aWNDbGFzczpcImpmYi1zc3ItY2FsbGJhY2tzLXJlamVjdGVkX19saXN0XCJ9LF92bS5fbCgoX3ZtLnJlamVjdGVkTmFtZXMpLGZ1bmN0aW9uKG5hbWUpe3JldHVybiBfYygnbGknLHtrZXk6bmFtZX0sW192bS5fdihfdm0uX3MobmFtZSkrXCIg4oCUIFwiK192bS5fcyhfdm0ucmVqZWN0ZWRbIG5hbWUgXSkpXSl9KSwwKV0pOl92bS5fZSgpLF92bS5fdihcIiBcIiksKF92bS5ibG9ja2VkLmxlbmd0aCk/X2MoJ2N4LXZ1aS1jb21wb25lbnQtd3JhcHBlcicse2F0dHJzOntcImxhYmVsXCI6KChfdm0ubGFiZWwuYmxvY2tlZCkgKyBcIiAoXCIgKyAoX3ZtLmJsb2NrZWQubGVuZ3RoKSArIFwiKVwiKSxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuYmxvY2tlZCxcIndyYXBwZXItY3NzXCI6WyAnZXF1YWx3aWR0aCcgXX19LFtfYygndWwnLHtzdGF0aWNDbGFzczpcImpmYi1zc3ItYmxvY2tlZF9fbGlzdFwifSxfdm0uX2woKF92bS5ibG9ja2VkKSxmdW5jdGlvbih1c2FnZSxpbmRleCl7cmV0dXJuIF9jKCdsaScse2tleTppbmRleH0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJqZmItc3NyLWJsb2NrZWRfX2Zvcm1cIn0sW192bS5fdihfdm0uX3ModXNhZ2UuZm9ybV90aXRsZSB8fCAoXCIjXCIgKyAodXNhZ2UuZm9ybV9pZCkpKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJqZmItc3NyLWJsb2NrZWRfX21ldGFcIn0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdChcIitfdm0uX3MoX3ZtLl9fKCAnZmllbGQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSkrXCIgXFxcIlwiK192bS5fcyh1c2FnZS5maWVsZCkrXCJcXFwiIOKGkiBcIiksX2MoJ2NvZGUnLFtfdm0uX3YoX3ZtLl9zKHVzYWdlLm5hbWUpKV0pLF92bS5fdihcIilcXG5cXHRcXHRcXHRcXHRcXHRcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdhJyx7YXR0cnM6e1wiaHJlZlwiOnVzYWdlLmVkaXRfdXJsLFwidGFyZ2V0XCI6XCJfYmxhbmtcIixcInJlbFwiOlwibm9vcGVuZXIgbm9yZWZlcnJlclwifX0sW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiK192bS5fcyhfdm0uX18oICdFZGl0IGZvcm0g4oaSJywgJ2pldC1mb3JtLWJ1aWxkZXInICkpK1wiXFxuXFx0XFx0XFx0XFx0XFx0XCIpXSldKX0pLDApXSk6X3ZtLl9lKCldXSwyKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2RpdicsW19jKCdjeC12dWktc3dpdGNoZXInLHthdHRyczp7XCJuYW1lXCI6XCJlbmFibGVfdXNlcl9qb3VybmV5XCIsXCJsYWJlbFwiOl92bS5sb2FkaW5nLmVuYWJsZV91c2VyX2pvdXJuZXkgPyAoKF92bS5sYWJlbC5lbmFibGVfdXNlcl9qb3VybmV5KSArIFwiIChsb2FkaW5nLi4uKVwiKSA6IF92bS5sYWJlbC5lbmFibGVfdXNlcl9qb3VybmV5LFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5lbmFibGVfdXNlcl9qb3VybmV5LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2VuYWJsZV91c2VyX2pvdXJuZXknICkgPyBfdm0uc3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5IDogZmFsc2UsXCJkaXNhYmxlZFwiOl92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ2VuYWJsZV91c2VyX2pvdXJuZXknLCAkZXZlbnQgKX19fSksX3ZtLl92KFwiIFwiKSwoX3ZtLnN0b3JhZ2UuZW5hYmxlX3VzZXJfam91cm5leSk/W19jKCdjeC12dWktc2VsZWN0Jyx7c3RhdGljQ2xhc3M6XCJ1c2VyLWpvdXJuZXktc2VsZWN0XCIsYXR0cnM6e1wibmFtZVwiOlwic3RvcmFnZV90eXBlXCIsXCJsYWJlbFwiOl92bS5sb2FkaW5nLnN0b3JhZ2VfdHlwZSA/ICgoX3ZtLmxhYmVsLnN0b3JhZ2VfdHlwZSkgKyBcIiAobG9hZGluZy4uLilcIikgOiBfdm0ubGFiZWwuc3RvcmFnZV90eXBlLFwiZGVzY3JpcHRpb25cIjpfdm0uaGVscC5zdG9yYWdlX3R5cGUsXCJ3cmFwcGVyLWNzc1wiOlsgJ2VxdWFsd2lkdGgnIF0sXCJvcHRpb25zLWxpc3RcIjpbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ2xvY2FsJyxcblx0XHRcdFx0XHRsYWJlbDogJ0xvY2FsIFN0b3JhZ2UnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogJ3Nlc3Npb24nLFxuXHRcdFx0XHRcdGxhYmVsOiAnU2Vzc2lvbiBTdG9yYWdlJ1xuXHRcdFx0XHR9XG5cdFx0XHRdLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ3N0b3JhZ2VfdHlwZScgKSA/IF92bS5zdG9yYWdlLnN0b3JhZ2VfdHlwZSA6ICdsb2NhbCcsXCJkaXNhYmxlZFwiOiFfdm0uc3RvcmFnZS5lbmFibGVfdXNlcl9qb3VybmV5IHx8IF92bS5pc0xvYWRpbmd9LG9uOntcImlucHV0XCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLmNoYW5nZVZhbCggJ3N0b3JhZ2VfdHlwZScsICRldmVudCApfX19KSxfdm0uX3YoXCIgXCIpLF9jKCdjeC12dWktY29tcG9uZW50LXdyYXBwZXInLFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjeC12dWktY29tcG9uZW50X19sYWJlbFwifSxbX3ZtLl92KFwiUGxlYXNlIG5vdGUhXCIpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2JyxbX2MoJ2InLFtfdm0uX3YoXCJTZXNzaW9uIFN0b3JhZ2U6XCIpXSksX3ZtLl92KFwiIFRoZSBpbmZvcm1hdGlvbiBpcyBrZXB0IG9ubHkgd2hpbGUgdGhpcyB0YWIgb3Igd2luZG93IGlzIG9wZW4uIFJlbG9hZGluZyB0aGUgcGFnZSBpcyBmaW5lLCBidXQgYXMgc29vbiBhcyB5b3UgY2xvc2UgdGhlIHRhYiwgdGhlIGRhdGEgZGlzYXBwZWFycy4gT3RoZXIgdGFicyBvciB3aW5kb3dzIG9mIHRoZSBzaXRlIGNhbuKAmXQgc2VlIGl0LiBZb3UgY2FuIHN0aWxsIGdldCBpdCBiYWNrIGJ5IHByZXNzaW5nIEN0cmzigK8r4oCvU2hpZnTigK8r4oCvVCAo4oCcUmVvcGVu4oCvQ2xvc2Vk4oCvVGFi4oCdKVwiKV0pLF92bS5fdihcIiBcIiksX2MoJ2RpdicsW19jKCdiJyxbX3ZtLl92KFwiTG9jYWwgU3RvcmFnZTpcIildKSxfdm0uX3YoXCIgVGhlIGluZm9ybWF0aW9uIHN0YXlzIG11Y2ggbG9uZ2Vy4oCUZXZlcnkgdGFiIG9yIHdpbmRvdyBvZiB0aGlzIHNpdGUgY2FuIHVzZSBpdCwgYW5kIGl0IHJlbWFpbnMgZXZlbiBhZnRlciB5b3UgY2xvc2UgYW5kIHJlb3BlbiB0aGUgYnJvd3NlciwgdW50aWwgeW91IGNsZWFyIGl0IHlvdXJzZWxmLlwiKV0pXSksX3ZtLl92KFwiIFwiKSxfYygnY3gtdnVpLXNlbGVjdCcse3N0YXRpY0NsYXNzOlwidXNlci1qb3VybmV5LXNlbGVjdFwiLGF0dHJzOntcIm5hbWVcIjpcImNsZWFyX2FmdGVyX3N1Ym1pdFwiLFwibGFiZWxcIjpfdm0ubG9hZGluZy5jbGVhcl9hZnRlcl9zdWJtaXQgPyAoKF92bS5sYWJlbC5jbGVhcl9hZnRlcl9zdWJtaXQpICsgXCIgKGxvYWRpbmcuLi4pXCIpIDogX3ZtLmxhYmVsLmNsZWFyX2FmdGVyX3N1Ym1pdCxcImRlc2NyaXB0aW9uXCI6X3ZtLmhlbHAuY2xlYXJfYWZ0ZXJfc3VibWl0LFwid3JhcHBlci1jc3NcIjpbICdlcXVhbHdpZHRoJyBdLFwib3B0aW9ucy1saXN0XCI6W1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6ICdhbHdheXMnLFxuXHRcdFx0XHRcdGxhYmVsOiAnQWZ0ZXIgYW55IHN1Ym1pdCAoc3VjY2VzcyBvciBmYWlsdXJlKSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0bGFiZWw6ICdBZnRlciBzdWNjZXNzZnVsIHN1Ym1pdCBvbmx5J1xuXHRcdFx0XHR9XG5cdFx0XHRdLFwidmFsdWVcIjpfdm0uc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSggJ2NsZWFyX2FmdGVyX3N1Ym1pdCcgKSA/IF92bS5zdG9yYWdlLmNsZWFyX2FmdGVyX3N1Ym1pdCA6ICdzdWNjZXNzJyxcImRpc2FibGVkXCI6IV92bS5zdG9yYWdlLmVuYWJsZV91c2VyX2pvdXJuZXkgfHwgX3ZtLmlzTG9hZGluZ30sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uY2hhbmdlVmFsKCAnY2xlYXJfYWZ0ZXJfc3VibWl0JywgJGV2ZW50ICl9fX0pXTpfdm0uX2UoKV0sMil9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9XG4gICAgdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbicgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnMgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRiNDM1MDBlJmxhbmc9c2Nzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3ZmUwODVmN1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjQzNTAwZSZsYW5nPXNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00YjQzNTAwZSZsYW5nPXNjc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5nc1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDI1NGI2NGMmbGFuZz1zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU4MDE0YTExXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyNTRiNjRjJmxhbmc9c2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3NTaWRlQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQyNTRiNjRjJmxhbmc9c2Nzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImI3MTBlY2Q4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Jc1BST0ljb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiYWEyMzAmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXNQUk9JY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE0YmFhMjMwJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlkYzQyZGU2JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjcwMTUxMjE1XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcHRpb25zVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlkYzQyZGU2JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wdGlvbnNUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWRjNDJkZTYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NzckNhbGxiYWNrc1RhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xN2FiMjM4OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwY2Q3NTAxZlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3NyQ2FsbGJhY2tzVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3YWIyMzg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NzckNhbGxiYWNrc1RhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xN2FiMjM4OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckpvdXJuZXlUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZiMGMyZmMmbGFuZz1jc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDIxNTQ2MDdcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJKb3VybmV5VGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmYjBjMmZjJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJKb3VybmV5VGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmYjBjMmZjJmxhbmc9Y3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYWRkb25zLXRhYnMnO1xuaW1wb3J0IFNldHRpbmdzUGFnZSBmcm9tICcuL1NldHRpbmdzUGFnZSc7XG5cbmNvbnN0IHsgcmVuZGVyQ3VycmVudFBhZ2UgfSA9IHdpbmRvdy5KZXRGQkFjdGlvbnM7XG5jb25zdCB7IE5vdGljZXNQbHVnaW4gfSA9IEpldEZCU3RvcmU7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoIHtcblx0cGx1Z2luczogWyBOb3RpY2VzUGx1Z2luIF1cbn0gKVxuXG5yZW5kZXJDdXJyZW50UGFnZSggU2V0dGluZ3NQYWdlLCB7IHN0b3JlIH0gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=